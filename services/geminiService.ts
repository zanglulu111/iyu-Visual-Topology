
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

// V1 legacy settings fallback (will be removed once migration is complete)
const getSettings = (): APISettings | null => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('api_settings');
    return saved ? JSON.parse(saved) : null;
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

                const cleanBaseUrl = this.baseUrl.trim().replace(/\/+$/, "");
                const fetchUrl = `${cleanBaseUrl}/chat/completions`;

                console.log(`[ProxyRequest] Calling: ${fetchUrl} with model: ${model}`);

                const response = await fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.apiKey}`,
                        // 一些代理需要这个头来识别请求来自浏览器
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: messages,
                        temperature: params.config?.temperature || 0.7,
                        max_tokens: params.config?.maxOutputTokens || 4096,
                        stream: false,
                        ...(params.config?.responseMimeType === 'application/json' ? { response_format: { type: 'json_object' } } : {})
                    })
                });

                if (!response.ok) {
                    const err = await response.text();
                    let errMsg = `Proxy Error: ${response.status}`;
                    if (response.status === 404) {
                        errMsg += ` (URL Not Found: ${fetchUrl}). 请确认您的代理地址 (Base URL) 是否正确。`;
                    }
                    // 检测 HTML 响应（说明 URL 不对，打到了网页而非 API）
                    if (err.trim().startsWith('<') || err.includes('<!DOCTYPE') || err.includes('<!--')) {
                        errMsg = `代理地址错误：返回了 HTML 页面而非 API 响应。\n请检查您的 Base URL 是否正确。\n当前请求地址: ${fetchUrl}\n\n常见的 Base URL 格式: https://your-proxy.com/v1`;
                    }
                    throw new Error(`${errMsg}\nDetail: ${err.substring(0, 200)}`);
                }

                // 检测响应是否为 HTML（某些代理 200 状态也可能返回网页）
                const contentType = response.headers.get('content-type') || '';
                const responseText = await response.text();
                
                if (!contentType.includes('application/json') && (responseText.trim().startsWith('<') || responseText.includes('<!DOCTYPE'))) {
                    throw new Error(`代理地址错误：返回了 HTML 页面而非 JSON。\n请检查您的 Base URL 是否正确。\n当前请求地址: ${fetchUrl}\n\n常见的 Base URL 格式: https://your-proxy.com/v1`);
                }

                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseErr) {
                    throw new Error(`代理返回的数据不是有效的 JSON。\n请检查 Base URL 是否正确。\n当前请求地址: ${fetchUrl}\n\n返回内容预览: ${responseText.substring(0, 150)}`);
                }
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

// ═══════════════════════════════════════════════════════════
// Anthropic 原生 API 适配器
// 用于支持 Anthropic 原生格式的代理 (/v1/messages)
// 例如：https://luckycodecc.cn/claude → /v1/messages
// ═══════════════════════════════════════════════════════════
class AnthropicAdapter {
    constructor(private apiKey: string, private baseUrl: string) { }

    get models() {
        return {
            generateContent: async (params: any) => {
                const model = params.model;
                const contents = params.contents;

                let messages: any[] = [];
                let systemPrompt: string | undefined;

                if (params.config?.systemInstruction) {
                    systemPrompt = params.config.systemInstruction;
                }

                if (typeof contents === 'string') {
                    messages.push({ role: 'user', content: contents });
                } else if (contents.parts) {
                    const contentParts = contents.parts.map((part: any) => {
                        if (part.text) return { type: 'text', text: part.text };
                        if (part.inlineData) return {
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: part.inlineData.mimeType,
                                data: part.inlineData.data
                            }
                        };
                        return null;
                    }).filter(Boolean);

                    if (contentParts.length === 1 && contentParts[0].type === 'text') {
                        messages.push({ role: 'user', content: contentParts[0].text });
                    } else {
                        messages.push({ role: 'user', content: contentParts });
                    }
                }

                const cleanBaseUrl = this.baseUrl.trim().replace(/\/+$/, "");
                const fetchUrl = `${cleanBaseUrl}/v1/messages`;

                console.log(`[AnthropicRequest] Calling: ${fetchUrl} with model: ${model}`);

                const requestBody: any = {
                    model: model,
                    messages: messages,
                    max_tokens: params.config?.maxOutputTokens || 4096,
                    temperature: params.config?.temperature || 0.7,
                };

                if (systemPrompt) {
                    requestBody.system = systemPrompt;
                }

                const response = await fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': this.apiKey,
                        'anthropic-version': '2023-06-01',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    const err = await response.text();
                    let errMsg = `Anthropic API Error: ${response.status}`;

                    if (err.trim().startsWith('<') || err.includes('<!DOCTYPE') || err.includes('<!--')) {
                        errMsg = `代理地址错误：返回了 HTML 页面而非 API 响应。\n请检查您的 Base URL 是否正确。\n当前请求地址: ${fetchUrl}`;
                        throw new Error(errMsg);
                    }

                    try {
                        const errJson = JSON.parse(err);
                        if (errJson.error?.message) {
                            errMsg += `: ${errJson.error.message}`;
                        } else {
                            errMsg += `\n${err.substring(0, 200)}`;
                        }
                    } catch {
                        errMsg += `\n${err.substring(0, 200)}`;
                    }

                    throw new Error(errMsg);
                }

                const contentType = response.headers.get('content-type') || '';
                const responseText = await response.text();

                if (!contentType.includes('application/json') && (responseText.trim().startsWith('<') || responseText.includes('<!DOCTYPE'))) {
                    throw new Error(`代理地址错误：返回了 HTML 页面而非 JSON。\n请检查 Base URL。\n当前请求地址: ${fetchUrl}`);
                }

                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseErr) {
                    throw new Error(`代理返回的数据不是有效的 JSON。\n当前请求地址: ${fetchUrl}\n\n返回内容预览: ${responseText.substring(0, 150)}`);
                }

                // Anthropic 响应格式: { content: [{ type: "text", text: "..." }] }
                const text = data.content?.map((block: any) => block.text || '').join('') || "";

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
    const settings = getSettings();
    const fullConfig = configService.getConfig();
    
    // Gemini Provider 配置
    const geminiConfig = fullConfig.gemini;
    const geminiKey = geminiConfig.apiKey || settings?.llm.apiKey || process.env.API_KEY || "";
    
    // Claude Provider 配置
    const claudeConfig = fullConfig.claude;
    const claudeKey = claudeConfig.apiKey || settings?.llm.claudeApiKey || "";
    
    return {
        models: {
            generateContent: async (params: any) => {
                const modelId = params.model;
                const isClaude = modelId?.includes('claude');
                
                if (isClaude) {
                    // ═══ Claude 路径：必须走代理 ═══
                    const apiKey = claudeKey;
                    const baseUrl = claudeConfig.baseUrl || settings?.llm.baseUrl || '';
                    
                    if (!baseUrl) {
                        throw new Error('Claude 模型需要配置代理地址 (Base URL)。请在系统配置中设置 Claude 的代理地址。');
                    }
                    
                    // 根据 API 格式选择适配器
                    const format = claudeConfig.apiFormat || 'anthropic';
                    if (format === 'anthropic') {
                        // Anthropic 原生格式: /v1/messages (如 luckycodecc.cn/claude)
                        const adapter = new AnthropicAdapter(apiKey, baseUrl);
                        return adapter.models.generateContent(params);
                    } else {
                        // OpenAI 兼容格式: /chat/completions
                        const adapter = new OpenAIAdapter(apiKey, baseUrl);
                        return adapter.models.generateContent(params);
                    }
                }
                
                if (geminiConfig.mode === 'proxy' && geminiConfig.baseUrl) {
                    // ═══ Gemini 代理路径：通过第三方 OpenAI-compatible 代理 ═══
                    const adapter = new OpenAIAdapter(geminiKey, geminiConfig.baseUrl);
                    return adapter.models.generateContent(params);
                }
                
                // ═══ Gemini 官方路径：直连 Google SDK ═══
                const genAI = new GoogleGenAI({ apiKey: geminiKey });
                return (genAI as any).models.generateContent(params);
            }
        }
    };
};

export const testConnection = async (section: 'llm' | 'image'): Promise<boolean> => {
    try {
        const model = configService.getEngineModel(section === 'llm' ? 'coreEngine' : 'imageGen');
        const response = await getAI().models.generateContent({
            model: model || (section === 'llm' ? 'gemini-3.1-flash-lite-preview' : 'gemini-3-pro-image-preview'),
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
        if (errorMsg.includes("代理地址错误") || errorMsg.includes("Base URL")) {
            alert(`代理配置错误 (Proxy Config Error)。\n\n${errorMsg}`);
        } else if (errorMsg.includes("429") || errorMsg.toLowerCase().includes("quota") || errorMsg.includes("exhausted") || errorMsg.toLowerCase().includes("rate limit")) {
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
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3-pro-preview';
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
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3-pro-preview';
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
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3-pro-preview';
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
        const rawText = response.text || "";
        const parsed = cleanAndParseJSON(rawText);
        
        if (parsed) {
            if (!Array.isArray(parsed)) {
                // E.g. model returns a single object payload or nested root wrapper
                return parsed.treatments ? parsed.treatments : [parsed];
            }
            return parsed;
        }

        // Fallback if parsing totally failed
        if (rawText.length > 50) {
            return [{
                id: "fallback_1",
                type: "CLASSIC",
                title: "Generated Concept",
                tagline: "Extracted from raw model output",
                pitch: rawText,
                structure: "UNKNOWN",
                visualAnchor: ""
            }];
        }
        return [];
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
        const rawText = response.text || "";
        let parsed = cleanAndParseJSON(rawText);

        // Fallback for completely failed JSON string but valid raw text (e.g. DeepSeek/Claude raw strings)
        if (!parsed && rawText.length > 50) {
            parsed = {
                narrative: {
                    title: treatment.title || "Generated Draft",
                    logline: treatment.tagline || "Raw generation",
                    synopsis: rawText
                }
            };
        }

        // Deal with array wrapping
        if (parsed && Array.isArray(parsed)) {
            parsed = parsed.length > 0 ? parsed[0] : {};
        }

        // Deal with missing narrative/context wrappers (models returning flat JSON)
        if (parsed && !parsed.narrative) {
            parsed.narrative = {
                title: parsed.title || treatment.title || "Untitled",
                logline: parsed.logline || parsed.tagline || "",
                synopsis: parsed.synopsis || parsed.pitch || rawText || ""
            };
        }
        
        if (parsed && !parsed.context) {
            parsed.context = {
                world: parsed.world || parsed.worldCn || parsed.worldEn || "",
                tone: parsed.tone || parsed.toneCn || parsed.toneEn || "",
                colorPalette: parsed.colorPalette || colorPalette || []
            };
        }

        return parsed;
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
        const model = configService.getEngineModel('metonymyEngine') || 'gemini-3-pro-preview';
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
        const model = configService.getEngineModel('psychoAnalysis') || 'gemini-3.1-flash-lite-preview';
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
