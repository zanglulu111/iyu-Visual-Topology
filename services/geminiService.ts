
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { configService } from "../src/services/configService";
import { SutureConfig, NarrativeFieldState, CreativeTreatment, StyleConfig, WorldLawConfig, CreativeBlueprint, DriverType, SubjectType, SutureResponse, FinalAssetsData, FinalAssetItem, GlobalVisualTone, AssetView, MetonymyStylePreset, MetonymyAssetInput, APISettings } from "../types";
import { buildSutureStep1Prompt, buildStyleTransferPrompt } from "./suture_script_prompt";
import { buildSutureStep2Prompt } from "./sutureGenerator";
import { buildNarrativePrompt, buildNarrativeBiblePrompt } from "./narrativeGenerator";
import { buildCommercialPrompt, buildCommercialBiblePrompt } from "./commercialGenerator";
import { buildExperimentalPrompt, buildExperimentalBiblePrompt } from "./experimentalGenerator";
import { buildTrailerPrompt } from "./trailerGenerator";
import { buildAestheticPrompt, buildAestheticBiblePrompt } from "./aestheticGenerator";
import { buildPsychoAnalysisPrompt } from "./psychoAnalysisGenerator";
import { buildDesireDiagnosisPrompt } from "./sutureDiagnosis";
import { buildNarrativeDiagnosisPrompt } from "./narrativeDiagnosis";
import { NARRATIVE_ENGINE_LIBRARY, AESTHETIC_ENGINE_LIBRARY } from "../constants";
import { buildRefactorPrompt } from "./refactorPrompt";
import { buildScriptBreakdownPrompt } from "./scriptBreakdownGenerator";
import { runWithTask } from "./taskManager";

export interface ModifySectionRequest {
    id: string;
    text: string;
    instruction: string;
    highlights: { text: string; note: string; }[];
}

export interface ModifyInsertionRequest {
    index: number;
    instruction: string;
}

const getSettings = (): APISettings | null => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('api_settings');
    return saved ? JSON.parse(saved) : null;
};

// Helper function to get API client using the new config system
const getNewConfigClient = () => {
    try {
        const apiKey = configService.getApiKey();
        if (apiKey) {
            return new GoogleGenAI({ apiKey });
        }
    } catch (error) {
        console.warn('Failed to get config from new system:', error);
    }
    return null;
};

class OpenAIAdapter {
    constructor(private apiKey: string, private baseUrl: string) { }

    get models() {
        return {
            generateContent: async (params: any) => {
                const model = params.model;
                const contents = params.contents;

                let messages: any[] = [];

                if (typeof contents === 'string') {
                    messages.push({ role: 'user', content: contents });
                } else if (contents.parts) {
                    const contentParts = contents.parts.map((part: any) => {
                        if (part.text) return { type: 'text', text: part.text };
                        if (part.inlineData) return {
                            type: 'image_url',
                            image_url: { url: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` }
                        };
                        return null;
                    }).filter(Boolean);

                    if (contentParts.length === 1 && contentParts[0].type === 'text') {
                        messages.push({ role: 'user', content: contentParts[0].text });
                    } else {
                        messages.push({ role: 'user', content: contentParts });
                    }
                }

                if (params.config?.systemInstruction) {
                    messages.unshift({ role: 'system', content: params.config.systemInstruction });
                }

                const fetchUrl = this.baseUrl.endsWith('/') ? `${this.baseUrl}chat/completions` : `${this.baseUrl}/chat/completions`;

                const response = await fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.apiKey}`
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: messages,
                        temperature: params.config?.temperature,
                        max_tokens: params.config?.maxOutputTokens,
                    })
                });

                if (!response.ok) {
                    const err = await response.text();
                    throw new Error(`OpenAI API Error: ${response.status} ${err}`);
                }

                const data = await response.json();
                const text = data.choices?.[0]?.message?.content || "";

                return {
                    text: text,
                    candidates: [{
                        content: {
                            parts: [{ text: text }]
                        }
                    }]
                } as GenerateContentResponse;
            }
        };
    }
}

const getAI = () => {
    const apiKey = configService.getApiKey();
    if (!apiKey) {
        // Fallback to old system if no key in new system
        const settings = getSettings();
        const llmSettings = settings?.llm;
        const key = llmSettings?.apiKey || process.env.API_KEY || "";
        return new GoogleGenAI({ apiKey: key });
    }
    return new GoogleGenAI({ apiKey });
};

export const testConnection = async (section: 'llm' | 'image'): Promise<boolean> => {
    try {
        const model = configService.getEngineModel(section === 'llm' ? 'coreEngine' : 'imageGen');
        const response = await getAI().models.generateContent({
            model: model || (section === 'llm' ? 'gemini-3-flash-preview' : 'gemini-3.1-pro-preview'),
            contents: { parts: [{ text: "ping" }] },
            config: { maxOutputTokens: 5 }
        });
        return !!response.text;
    } catch (e) {
        console.error("Connection test failed", e);
        return false;
    }
};

const cleanAndParseJSON = (text: string) => {
    // 1. Remove markdown code blocks
    let cleanText = text.replace(/```json\n|\n```/g, "").replace(/```/g, "").trim();

    // 2. Try parsing the whole thing first (fast path)
    try {
        return JSON.parse(cleanText);
    } catch (e) {
        // 3. Robust extraction: Find the first valid JSON object by balancing braces
        const firstOpen = cleanText.indexOf('{');
        const firstSquare = cleanText.indexOf('[');
        let start = -1;
        let isObject = true;

        if (firstOpen !== -1 && (firstSquare === -1 || firstOpen < firstSquare)) {
            start = firstOpen;
            isObject = true;
        } else if (firstSquare !== -1) {
            start = firstSquare;
            isObject = false;
        }

        if (start !== -1) {
            let balance = 0;
            let inString = false;
            let escape = false;

            for (let i = start; i < cleanText.length; i++) {
                const char = cleanText[i];
                if (escape) {
                    escape = false;
                    continue;
                }
                if (char === '\\') {
                    escape = true;
                    continue;
                }
                if (char === '"') {
                    inString = !inString;
                    continue;
                }
                if (!inString) {
                    if (char === (isObject ? '{' : '[')) balance++;
                    else if (char === (isObject ? '}' : ']')) balance--;
                    if (balance === 0) {
                        try {
                            const extracted = cleanText.substring(start, i + 1);
                            return JSON.parse(extracted);
                        } catch (e2) {
                            console.error("Extraction parse error", e2);
                        }
                        break;
                    }
                }
            }
        }
        return null;
    }
};

const getCallerName = (): string => {
    try {
        const stack = new Error().stack;
        if (stack) {
            const lines = stack.split('\n');
            const callerLine = lines[3] || '';
            const match = callerLine.match(/at\s+([^\s]+)/);
            if (match && match[1]) {
                const name = match[1].split('.').pop() || "AI Task";
                return name === "retryWithBackoff" ? "AI Generation Task" : name;
            }
        }
    } catch (e) { }
    return "AI Generation Task";
};

async function retryWithBackoff<T>(fn: (signal?: AbortSignal) => Promise<T>, retries = 3, delay = 1000): Promise<T> {
    const taskName = getCallerName();
    return runWithTask(taskName, async (signal: AbortSignal) => {
        const attempt = async (currentRetries: number, currentDelay: number): Promise<T> => {
            try {
                return await fn(signal);
            } catch (err: any) {
                if (err?.message?.includes("Requested entity was not found.") || err?.message?.includes("API_KEY_INVALID")) {
                    if (typeof window !== 'undefined' && (window as any).aistudio?.openSelectKey) {
                        await (window as any).aistudio.openSelectKey();
                    }
                    throw err;
                }
                if (currentRetries === 0) throw err;
                await new Promise(resolve => setTimeout(resolve, currentDelay));
                return attempt(currentRetries - 1, currentDelay * 2);
            }
        };
        return attempt(retries, delay);
    });
}

const handleApiError = (context: string, e: any) => {
    console.error(`[GeminiServiceError] ${context}:`, e);
    const errorMsg = e?.message || e?.toString() || "Unknown error";
    if (typeof window !== 'undefined') {
        if (errorMsg.includes("429") || errorMsg.toLowerCase().includes("quota") || errorMsg.toLowerCase().includes("token") || errorMsg.includes("exhausted")) {
            alert(`API 额度已达上限或请求过于频繁 (Quota Exceeded)。\n请检查 API Key 额度或稍后重试。\n\n${errorMsg}`);
        } else if (errorMsg.includes("503") || errorMsg.toLowerCase().includes("unavailable") || errorMsg.toLowerCase().includes("high demand")) {
            alert(`当前模型请求量过大，服务暂时不可用 (503 Service Unavailable)。\n请稍后重试。\n\n${errorMsg}`);
        } else if (errorMsg.includes("API_KEY_INVALID") || errorMsg.toLowerCase().includes("not found")) {
            alert(`API Key 无效或未设置 (Invalid API Key)。\n请检查您的配置。\n\n${errorMsg}`);
        } else {
            alert(`${context} 失败:\n${errorMsg}`);
        }
    }
};

export const generateSutureScript = async (
    text: string,
    config: SutureConfig,
    fullStory: string = "",
    fieldState?: NarrativeFieldState,
    onStatus?: (s: string) => void,
    partIndex: number = 1,
    previousContext: string = "",
    globalStyleContext?: { tone: GlobalVisualTone, assets: FinalAssetsData },
    referenceImages: string[] = []
): Promise<SutureResponse | null> => {
    if (onStatus) onStatus("Drafting Literary Script...");

    const basePrompt = buildSutureStep1Prompt(text, config, fullStory, fieldState, partIndex, previousContext, globalStyleContext);
    const parts: any[] = [{ text: basePrompt }];

    referenceImages.forEach(img => {
        if (img && img.includes(',')) {
            parts.push({
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: img.split(',')[1]
                }
            });
        }
    });

    try {
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3.1-pro-preview';
        console.log(`[Metonymy] Generating Suture Script with model: ${model}`);
        const res1 = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        const data1 = cleanAndParseJSON(res1.text || "");

        if (!data1 || !data1.literaryScript) throw new Error("Script gen failed");

        return {
            literaryScript: data1.literaryScript,
            finalAssets: data1.extractedAssets,
            globalTone: globalStyleContext?.tone || { lighting: "", texture: "", style: "", camera: "", palette: [] },
            staticStoryboard: [],
            dynamicStoryboard: []
        };
    } catch (e: any) {
        handleApiError("Suture Script Gen Error", e);
        return null;
    }
};

export const transformScriptStyle = async (
    originalScript: string,
    stylePreset: MetonymyStylePreset
): Promise<string | null> => {
    const mapToFinalAsset = (asset: MetonymyAssetInput): FinalAssetItem => ({
        ...asset,
        anchors: asset.analysis?.anchors || "",
        description: asset.analysis?.description || ""
    });

    const compatibleAssets: FinalAssetsData = {
        characters: stylePreset.assets.characters.map(mapToFinalAsset),
        scenes: stylePreset.assets.scenes.map(mapToFinalAsset),
        props: stylePreset.assets.props.map(mapToFinalAsset)
    };

    const prompt = buildStyleTransferPrompt(
        originalScript,
        stylePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] },
        compatibleAssets
    );

    try {
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3.1-pro-preview';
        console.log(`[Metonymy] Transforming Script Style with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));
        const data = cleanAndParseJSON(response.text || "");
        return data?.literaryScript || null;
    } catch (e: any) {
        handleApiError("Style Transfer Error", e);
        return null;
    }
};

export const generateSutureStoryboard = async (
    sutureData: SutureResponse,
    fullStory: string,
    fieldState: NarrativeFieldState,
    onStatus: (s: string) => void,
    target: 'STATIC' | 'DYNAMIC',
    referenceImages: string[] = [],
    globalStyleContext?: { tone: GlobalVisualTone, assets: FinalAssetsData }
) => {

    let styleOverridePrompt = "";
    if (globalStyleContext) {
        styleOverridePrompt = `
        ### 📐 GLOBAL CINEMATOGRAPHY PROTOCOL (STRICT)
        **Visual Reference Attached:** I have attached ${referenceImages.length} images.
        **Consistency Enforcement:**
        1.  **TONE:** All shots must adhere to the style in the first attached image and text description: "${globalStyleContext.tone.styleEn} + ${globalStyleContext.tone.lightingEn}".
        2.  **ANCHORS:** When describing specific assets, YOU MUST INCLUDE their "High-Weight Anchors" and match the attached character reference images.
            *   ${globalStyleContext.assets.characters.map(c => `IF ${c.nameEn} appears -> ADD: "${c.anchors}"`).join('\n            *   ')}
        `;
    }

    const hasImages = referenceImages.length > 0;
    const basePrompt = buildSutureStep2Prompt(
        sutureData.literaryScript,
        fullStory,
        fieldState,
        globalStyleContext?.tone || sutureData.globalTone,
        target,
        hasImages,
        globalStyleContext
    );
    const finalPrompt = basePrompt + "\n" + styleOverridePrompt;

    const parts: any[] = [{ text: finalPrompt }];
    referenceImages.forEach(img => {
        if (img && img.includes(',')) {
            parts.push({
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: img.split(',')[1]
                }
            });
        }
    });

    try {
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3.1-pro-preview';
        console.log(`[Metonymy] Generating Storyboard with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "");
    } catch (e: any) {
        handleApiError("Storyboard Gen Error", e);
        return null;
    }
};

export const mapAestheticInputToEngine = async (input: string): Promise<NarrativeFieldState> => {
    try {
        const prompt = `Role: Cinematic Spec Parser. Task: Parse input to JSON. USER INPUT: ${input}`;
        const model = configService.getEngineModel('visualSeed') || 'gemini-3-flash-preview';
        console.log(`[VisualSeed] Parsing Aesthetic Input with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "") || {};
    } catch (e: any) {
        handleApiError("Aesthetic Input Map Error", e);
        return {};
    }
};

export const analyzeImage = async (base64Image: string, textInput?: string): Promise<string> => {
    try {
        const parts: any[] = [];
        if (textInput) parts.push({ text: `Context: ${textInput}` });
        parts.push({ inlineData: { mimeType: 'image/jpeg', data: base64Image.split(',')[1] || base64Image } });
        parts.push({ text: "Analyze this image style..." });
        const model = configService.getEngineModel('visualBible') || 'gemini-3-flash-preview';
        console.log(`[VisualBible] Analyzing Image with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts }
        }));
        return response.text || "Analysis failed.";
    } catch (e: any) {
        handleApiError("Image Analysis Error", e);
        return "Error analyzing image.";
    }
};

export const generateNarrativeAutoFill = async (driver: DriverType, visionInput: string, visionImage: string | null, analysis?: string): Promise<NarrativeFieldState> => {
    try {
        const prompt = `Map input to ${driver} Engine. JSON Output.`;
        const parts: any[] = [{ text: prompt }];
        if (visionImage) parts.push({ inlineData: { mimeType: 'image/jpeg', data: visionImage.split(',')[1] || visionImage } });
        const model = configService.getEngineModel('coreEngine') || 'gemini-3-flash-preview';
        console.log(`[CoreEngine] Generating AutoFill with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "") || {};
    } catch (e: any) {
        handleApiError("Narrative AutoFill Error", e);
        return {};
    }
};

export const generateFantasyTraverse = async (driver: DriverType, duration: string, fieldState: NarrativeFieldState, visionInput: string, visionImage: string | null, worldLaw: WorldLawConfig, subjectType: SubjectType, visionAnalysis: string, colorPalette: string[] = []): Promise<CreativeTreatment[]> => {
    try {
        let promptData;
        if (driver === DriverType.COMMERCIAL) promptData = buildCommercialPrompt(duration, fieldState, visionInput, visionImage, worldLaw);
        else if (driver === DriverType.EXPERIMENTAL) promptData = buildExperimentalPrompt(duration, fieldState, visionInput, visionImage);
        else if (driver === DriverType.AESTHETIC) promptData = buildAestheticPrompt(duration, fieldState, visionInput, visionImage, subjectType, worldLaw, colorPalette);
        else if (driver === DriverType.TRAILER) promptData = buildTrailerPrompt(duration, fieldState, visionInput, visionImage);
        else promptData = buildNarrativePrompt(duration, fieldState, visionInput, visionImage, worldLaw);

        const parts: any[] = [{ text: promptData.text }];
        if (promptData.images && promptData.images.length > 0) parts.push({ inlineData: { mimeType: 'image/jpeg', data: promptData.images[0].split(',')[1] || promptData.images[0] } });

        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Generating Fantasy Traverse with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "") || [];
    } catch (e: any) {
        handleApiError("Fantasy Traverse Generate Error", e);
        return [];
    }
};

export const generateBlueprint = async (driver: DriverType, treatment: CreativeTreatment, style: StyleConfig, fieldState: NarrativeFieldState, visionInput: string, visionImage: string | null, worldLaw: WorldLawConfig, visionAnalysis: string, colorPalette: string[] = []): Promise<CreativeBlueprint | null> => {
    try {
        let promptText;
        if (driver === DriverType.COMMERCIAL) promptText = buildCommercialBiblePrompt(treatment, style, fieldState, visionInput, worldLaw);
        else if (driver === DriverType.EXPERIMENTAL) promptText = buildExperimentalBiblePrompt(treatment, style, fieldState, visionInput, worldLaw);
        else if (driver === DriverType.AESTHETIC) promptText = buildAestheticBiblePrompt(treatment, style, fieldState, visionInput, worldLaw, colorPalette);
        else promptText = buildNarrativeBiblePrompt(treatment, style, fieldState, visionInput, worldLaw);

        const parts: any[] = [{ text: promptText }];
        if (visionImage) parts.push({ inlineData: { mimeType: 'image/jpeg', data: visionImage.split(',')[1] || visionImage } });

        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Generating Blueprint with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "");
    } catch (e: any) {
        handleApiError("Blueprint Generate Error", e);
        return null;
    }
};

export const modifyNarrativeWithAI = async (
    fullStory: string,
    sections: ModifySectionRequest[],
    insertions: ModifyInsertionRequest[],
    overallInstruction: string = "",
    style: string = ""
): Promise<string> => {
    try {
        const prompt = buildRefactorPrompt(fullStory, sections, insertions, overallInstruction, style);
        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Modifying Narrative with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] }
        }));
        return response.text || fullStory;
    } catch (e: any) {
        handleApiError("Modify Narrative Error", e);
        return fullStory;
    }
};

export const generateAssetImage = async (prompt: string): Promise<string | null> => {
    try {
        const model = configService.getEngineModel('imageGen') || 'gemini-3-pro-image-preview';
        console.log(`[ImageGen] Generating Asset Image with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] }
        }));
        if (response.candidates && response.candidates[0].content.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
        return null;
    } catch (e: any) {
        handleApiError("Asset Image Generate Error", e);
        return null;
    }
};

export const breakdownScript = async (sourceText: string, instruction?: string, targetCount?: number): Promise<{
    scenes: Array<{ title: string, content: string, breakdownInfo?: string, indices?: number[] }>,
    visualBible?: { toneAnalysis: GlobalVisualTone, assets: any }
} | null> => {
    const paragraphs = sourceText.split('\n').filter(p => p.trim().length > 0);
    const numberedText = paragraphs.map((p, i) => `[${i + 1}] ${p}`).join('\n\n');
    const prompt = buildScriptBreakdownPrompt(numberedText, instruction, targetCount);
    try {
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3.1-pro-preview';
        console.log(`[Metonymy] Breaking Down Script with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));

        if (!response.text) return null;
        const rawData = cleanAndParseJSON(response.text);
        if (rawData && rawData.scenes) {
            const mappedScenes = rawData.scenes.map((scene: any) => {
                const sourceIndices = scene.paragraph_indices ? scene.paragraph_indices.map((i: number) => i - 1) : [];
                const sourceContent = sourceIndices.map((idx: number) => paragraphs[idx] || "").join('\n\n');
                const breakdownInfo = `**Slugline:** ${scene.slugline || 'N/A'}\n**Visual Style:** [${scene.visualStyleName || 'N/A'}] (${scene.montageId || 'montage_none'})\n**Narrative Arc:** ${scene.narrativeArc || 'N/A'}\n**Key Action Beats:**\n${(scene.keyActionBeats || []).map((beat: string) => `- ${beat}`).join('\n')}`;
                return { title: scene.title, content: sourceContent, breakdownInfo: breakdownInfo.trim(), visualStyleName: scene.visualStyleName, montageId: scene.montageId, indices: sourceIndices };
            });
            const visualBible = rawData.visualBible ? { toneAnalysis: rawData.visualBible.toneAnalysis, assets: rawData.visualBible.assets } : undefined;
            return { scenes: mappedScenes, visualBible };
        }
        return null;
    } catch (e: any) {
        handleApiError("Script Breakdown Error", e);
        return null;
    }
};

export const generateGlobalVisualTone = async (script: string, assets: FinalAssetsData) => {
    const prompt = `Analyze script to define Visual Bible Tone...`;
    try {
        const model = configService.getEngineModel('visualBible') || 'gemini-3-flash-preview';
        console.log(`[VisualBible] Generating Global Tone with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "");
    } catch (e: any) {
        handleApiError("Global Tone Generate Error", e);
        return null;
    }
};

export const updateBlueprint = async (blueprint: CreativeBlueprint, instruction: string) => {
    const prompt = `Update updated JSON blueprint: "${instruction}".`;
    try {
        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Updating Blueprint with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "") || blueprint;
    } catch (e: any) {
        handleApiError("Update Blueprint Error", e);
        return blueprint;
    }
};

export const generateContinuation = async (blueprint: CreativeBlueprint, instruction: string, image: string | null) => {
    const prompt = `Continue story. Return CreativeBlueprint JSON.`;
    const parts: any[] = [{ text: prompt }];
    if (image) parts.push({ inlineData: { mimeType: 'image/jpeg', data: image.split(',')[1] || image } });
    try {
        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Generating Continuation with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        return cleanAndParseJSON(response.text || "");
    } catch (e) { return null; }
};

export const generateAssetPrompts = async (blueprint: CreativeBlueprint) => {
    const prompt = `Regenerate prompts for assets. Updated JSON.`;
    try {
        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Generating Asset Prompts with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));
        const newAssets = cleanAndParseJSON(response.text || "");
        if (newAssets) return { ...blueprint, assets: newAssets };
        return blueprint;
    } catch (e: any) {
        handleApiError("Generate Asset Prompts Error", e);
        return blueprint;
    }
};

export const analyzePsychoStructure = async (fieldState: NarrativeFieldState, synopsis: string) => {
    const prompt = buildPsychoAnalysisPrompt(fieldState, synopsis);
    try {
        const model = configService.getEngineModel('psychoAnalysis') || 'gemini-3-flash-preview';
        console.log(`[PsychoAnalysis] Analyzing Structure with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] }
        }));
        return response.text || "";
    } catch (e: any) {
        handleApiError("Psycho Analysis Error", e);
        return "Analysis failed.";
    }
};
