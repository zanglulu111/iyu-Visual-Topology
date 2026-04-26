
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { configService } from "../src/services/configService";
import { SutureConfig, NarrativeFieldState, CreativeTreatment, StyleConfig, WorldLawConfig, CreativeBlueprint, DriverType, SubjectType, SutureResponse, FinalAssetsData, FinalAssetItem, GlobalVisualTone, AssetView, MetonymyStylePreset, MetonymyAssetInput, APISettings, FaceState } from "../types";
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

function proxyFetch(url: string, options: RequestInit): Promise<Response> {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        const parsed = new URL(url);
        const localPath = '/__api_proxy' + parsed.pathname + parsed.search;
        const headers = new Headers(options.headers);
        headers.set('X-Proxy-Target', parsed.origin);
        return fetch(localPath, { ...options, headers });
    }
    return fetch(url, options);
}

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
                const maxTokens = params.config?.maxOutputTokens || 32768;

                console.log(`[ProxyStream] Calling: ${fetchUrl} with model: ${model}, max_tokens: ${maxTokens}`);
                const startTime = Date.now();

                const response = await proxyFetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.apiKey}`,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: messages,
                        temperature: params.config?.temperature || 0.7,
                        max_tokens: maxTokens,
                        stream: true,
                        ...(params.config?.responseMimeType === 'application/json' ? { response_format: { type: 'json_object' } } : {})
                    })
                });

                const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

                if (!response.ok) {
                    const err = await response.text();
                    let errMsg = `Proxy Error: ${response.status} (耗时 ${elapsed}s)`;
                    if (response.status === 502) {
                        errMsg = `代理返回 502 Bad Gateway (耗时 ${elapsed}s)。\n代理服务器可能超时了。\n请检查代理超时设置（建议 ≥ 120 秒）。\n\n请求地址: ${fetchUrl}\n模型: ${model}`;
                        throw new Error(errMsg);
                    }
                    if (response.status === 404) {
                        errMsg += ` (URL Not Found: ${fetchUrl}). 请确认您的代理地址 (Base URL) 是否正确。`;
                    }
                    if (err.trim().startsWith('<') || err.includes('<!DOCTYPE') || err.includes('<!--')) {
                        errMsg = `代理地址错误：返回了 HTML 页面而非 API 响应。\n请检查您的 Base URL 是否正确。\n当前请求地址: ${fetchUrl}\n\n常见的 Base URL 格式: https://your-proxy.com/v1`;
                    }
                    throw new Error(`${errMsg}\nDetail: ${err.substring(0, 200)}`);
                }

                // ═══ 流式读取 SSE ═══
                const contentType = response.headers.get('content-type') || '';

                // 如果代理不支持流式，fallback 到普通 JSON 解析
                if (contentType.includes('application/json')) {
                    const responseText = await response.text();
                    let data;
                    try {
                        data = JSON.parse(responseText);
                    } catch {
                        throw new Error(`代理返回的数据不是有效的 JSON。\n当前请求地址: ${fetchUrl}\n\n返回内容预览: ${responseText.substring(0, 150)}`);
                    }
                    const text = data.choices?.[0]?.message?.content || "";
                    const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                    console.log(`[ProxyStream] Fallback JSON response (${totalElapsed}s), ${text.length} chars`);
                    return {
                        text: text,
                        candidates: [{ content: { parts: [{ text: text }] } }]
                    } as GenerateContentResponse;
                }

                // SSE 流式读取
                const reader = response.body?.getReader();
                if (!reader) {
                    throw new Error('响应不支持流式读取');
                }

                const decoder = new TextDecoder();
                let fullText = '';
                let buffer = '';

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split('\n');
                        buffer = lines.pop() || '';

                        for (const line of lines) {
                            if (!line.startsWith('data: ')) continue;
                            const data = line.slice(6).trim();
                            if (data === '[DONE]') continue;

                            try {
                                const event = JSON.parse(data);
                                const delta = event.choices?.[0]?.delta?.content;
                                if (delta) fullText += delta;
                            } catch {
                                // 跳过无法解析的 SSE 行
                            }
                        }
                    }
                } finally {
                    reader.releaseLock();
                }

                const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                console.log(`[ProxyStream] Complete (${totalElapsed}s), received ${fullText.length} chars`);

                return {
                    text: fullText,
                    candidates: [{
                        content: {
                            parts: [{ text: fullText }]
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

                const requestBody: any = {
                    model: model,
                    messages: messages,
                    max_tokens: params.config?.maxOutputTokens || 16384,
                    temperature: params.config?.temperature || 0.7,
                    stream: true,
                };

                if (params.config?.responseMimeType === 'application/json') {
                    const jsonInstruction = 'You must respond with valid JSON only. No markdown, no code blocks, no explanation — just raw JSON.';
                    systemPrompt = systemPrompt
                        ? `${systemPrompt}\n\n${jsonInstruction}`
                        : jsonInstruction;
                }

                if (systemPrompt) {
                    requestBody.system = systemPrompt;
                }

                console.log(`[AnthropicStream] Calling: ${fetchUrl} with model: ${model}, max_tokens: ${requestBody.max_tokens}`);
                const startTime = Date.now();

                const response = await proxyFetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': this.apiKey,
                        'anthropic-version': '2023-06-01',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(requestBody)
                });

                const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

                if (!response.ok) {
                    const err = await response.text();
                    let errMsg = `Anthropic API Error: ${response.status} (耗时 ${elapsed}s)`;

                    if (response.status === 502) {
                        errMsg = `代理返回 502 Bad Gateway (耗时 ${elapsed}s)。\n这通常意味着代理服务器在等待 Claude 响应时超时了。\n请检查代理的超时设置（建议 ≥ 120 秒）。\n\n请求地址: ${fetchUrl}\n模型: ${model}`;
                        console.error(`[AnthropicStream] 502 Bad Gateway after ${elapsed}s`, { fetchUrl, model, elapsed });
                        throw new Error(errMsg);
                    }

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

                // ═══ 流式读取 SSE ═══
                const reader = response.body?.getReader();
                if (!reader) {
                    throw new Error('响应不支持流式读取');
                }

                const decoder = new TextDecoder();
                let fullText = '';
                let buffer = '';

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split('\n');
                        buffer = lines.pop() || '';

                        for (const line of lines) {
                            if (!line.startsWith('data: ')) continue;
                            const data = line.slice(6).trim();
                            if (data === '[DONE]') continue;

                            try {
                                const event = JSON.parse(data);
                                if (event.type === 'content_block_delta' && event.delta?.text) {
                                    fullText += event.delta.text;
                                }
                            } catch {
                                // 跳过无法解析的 SSE 行
                            }
                        }
                    }
                } finally {
                    reader.releaseLock();
                }

                const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                console.log(`[AnthropicStream] Complete (${totalElapsed}s), received ${fullText.length} chars`);

                return {
                    text: fullText,
                    candidates: [{
                        content: {
                            parts: [{ text: fullText }]
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
                    // ═══ Claude 路径：通过代理，始终使用 Anthropic 原生格式 ═══
                    const apiKey = claudeKey;
                    const baseUrl = claudeConfig.baseUrl || settings?.llm.baseUrl || '';

                    if (!baseUrl) {
                        throw new Error('Claude 模型需要配置代理地址 (Base URL)。请在系统配置中设置 Claude 的代理地址。');
                    }

                    const adapter = new AnthropicAdapter(apiKey, baseUrl);
                    return adapter.models.generateContent(params);
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
        
        // 4. Try basic auto-closing for truncated JSON from strict proxies
        const quoteCount = (cleanText.match(/"/g) || []).length;
        const needsQuote = quoteCount % 2 !== 0;
        const closures = ['}', ']', '"}', '"]', '}]', '"}]', '"} ]', '"] }'];
        
        for (const closure of closures) {
            try {
                return JSON.parse(cleanText + (needsQuote ? '"' : '') + closure);
            } catch (fallbackErr) {
                // Ignore and try next
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
                // 502 代理超时不重试 — 重试只会继续超时，浪费用户等待时间
                if (err?.message?.includes('502')) {
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
        if (errorMsg.includes("502")) {
            alert(`代理服务器超时 (502 Bad Gateway)。\n\nClaude 模型生成内容较慢，代理服务器可能在等待响应时超时了。\n建议：将代理的超时时间设置为 120 秒以上。\n\n${errorMsg}`);
        } else if (errorMsg.includes("代理地址错误") || errorMsg.includes("Base URL")) {
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
            config: {
                responseMimeType: 'application/json',
                temperature: 0.7,  // Add randomness for varied outputs
                maxOutputTokens: 32768  // Increase token limit for longer scripts
            }
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
            config: {
                responseMimeType: 'application/json',
                temperature: 0.7,  // Add randomness for varied outputs
                maxOutputTokens: 32768  // Increase token limit for longer scripts
            }
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

export const generateFantasyTraverse = async (driver: DriverType, duration: string, fieldState: NarrativeFieldState, visionInput: string, visionImage: string | null, worldLaw: WorldLawConfig, subjectType: SubjectType, visionAnalysis: string, colorPalette: string[] = [], faceState?: FaceState): Promise<{ treatments: CreativeTreatment[]; thinkingXml: string }> => {
    try {
        let promptData;
        if (driver === DriverType.COMMERCIAL) promptData = buildCommercialPrompt(duration, fieldState, visionInput, visionImage, worldLaw);
        else if (driver === DriverType.EXPERIMENTAL) promptData = buildExperimentalPrompt(duration, fieldState, visionInput, visionImage);
        else if (driver === DriverType.AESTHETIC) promptData = buildAestheticPrompt(duration, fieldState, visionInput, visionImage, subjectType, worldLaw, colorPalette);
        else if (driver === DriverType.TRAILER) promptData = buildTrailerPrompt(duration, fieldState, visionInput, visionImage);
        else promptData = buildNarrativePrompt(duration, fieldState, visionInput, visionImage, worldLaw, 'v3', faceState);

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
        console.log(`[CoreEngine] Fantasy Traverse raw response (${rawText.length} chars):`, rawText.substring(0, 500));

        // Extract <thought_process> XML before parsing JSON
        let thinkingXml = '';
        const xmlMatch = rawText.match(/<thought_process[\s\S]*?<\/thought_process>/);
        if (xmlMatch) {
            thinkingXml = xmlMatch[0];
            console.log(`[CoreEngine] Extracted thinking XML (${thinkingXml.length} chars)`);
        }
        const textForParsing = xmlMatch ? rawText.replace(xmlMatch[0], '').trim() : rawText;
        const parsed = cleanAndParseJSON(textForParsing);

        if (parsed) {
            let items = Array.isArray(parsed) ? parsed : (parsed.treatments || [parsed]);

            // 标准化：部分模型返回 pitch_structure (对象) 而非 pitch (字符串)
            items = items.map((item: any) => {
                if (!item.pitch && item.pitch_structure) {
                    const ps = item.pitch_structure;
                    item.pitch = Object.entries(ps)
                        .map(([, v]) => typeof v === 'string' ? v : '')
                        .filter(Boolean)
                        .join('\n\n');
                    delete item.pitch_structure;
                }
                if (!item.pitch && item.content) {
                    item.pitch = typeof item.content === 'string' ? item.content : JSON.stringify(item.content);
                }
                if (!item.visualAnchor) item.visualAnchor = item.visual_anchor || item.visualKey || '';
                return item;
            });

            console.log(`[CoreEngine] Parsed ${items.length} treatments. First item pitch length: ${items[0]?.pitch?.length || 0}`);
            return { treatments: items, thinkingXml };
        }

        // Fallback if parsing totally failed
        if (rawText.length > 50) {
            return { treatments: [{
                id: "fallback_1",
                type: "CLASSIC",
                title: "Generated Concept",
                tagline: "Extracted from raw model output",
                pitch: textForParsing,
                structure: "UNKNOWN",
                visualAnchor: ""
            }], thinkingXml };
        }
        return { treatments: [], thinkingXml };
    } catch (e: any) {
        handleApiError("Fantasy Traverse Generate Error", e);
        return { treatments: [], thinkingXml: '' };
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
