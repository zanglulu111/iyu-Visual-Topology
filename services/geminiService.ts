
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { configService } from "../src/services/configService";
import { getEffectiveBaseUrl, getOpenAIChatCompletionsUrl, getProviderForModel } from "../src/types/config";
import { SutureConfig, NarrativeFieldState, CreativeTreatment, StyleConfig, WorldLawConfig, CreativeBlueprint, DriverType, SubjectType, SutureResponse, FinalAssetsData, FinalAssetItem, GlobalVisualTone, AssetView, MetonymyStylePreset, MetonymyAssetInput, APISettings, FaceState, NarrativeBlockDef, LibraryCategoryDef } from "../types";
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
import {
    NARRATIVE_ENGINE_BLOCKS,
    NARRATIVE_ENGINE_LIBRARY,
    ALL_SKIN_BLOCKS,
    SKIN_LIBRARY,
    COMMERCIAL_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_LIBRARY,
    COMM_SKIN_BLOCKS,
    COMM_SKIN_LIBRARY,
    AESTHETIC_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_LIBRARY,
    EXPERIMENTAL_ENGINE_BLOCKS,
    EXPERIMENTAL_ENGINE_LIBRARY,
    EXPERIMENTAL_SKIN_BLOCKS,
    EXPERIMENTAL_SKIN_LIBRARY,
    TRAILER_ENGINE_BLOCKS,
    TRAILER_ENGINE_LIBRARY,
    TRAILER_SKIN_BLOCKS,
    TRAILER_SKIN_LIBRARY
} from "../constants";
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

                const fetchUrl = getOpenAIChatCompletionsUrl(this.baseUrl);
                const maxTokens = params.config?.maxOutputTokens || 32768;
                const wantsJson = params.config?.responseMimeType === 'application/json';
                const shouldStream = !wantsJson;

                console.log(`[ProxyStream] Calling: ${fetchUrl} with model: ${model}, max_tokens: ${maxTokens}, stream=${shouldStream}`);
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
                        stream: shouldStream
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

                const extractOpenAIText = (data: any): string => {
                    const content = data?.choices?.[0]?.message?.content;
                    if (typeof content === 'string') return content;
                    if (Array.isArray(content)) {
                        return content.map((part: any) => {
                            if (typeof part === 'string') return part;
                            if (typeof part?.text === 'string') return part.text;
                            if (typeof part?.content === 'string') return part.content;
                            return '';
                        }).join('');
                    }
                    if (typeof data?.choices?.[0]?.text === 'string') return data.choices[0].text;
                    if (typeof data?.output_text === 'string') return data.output_text;
                    if (Array.isArray(data?.output)) {
                        return data.output.flatMap((item: any) => item?.content || [])
                            .map((part: any) => part?.text || part?.content || '')
                            .join('');
                    }
                    return '';
                };

                // 如果代理不支持流式，fallback 到普通 JSON 解析
                if (!shouldStream || contentType.includes('application/json')) {
                    const responseText = await response.text();
                    if (!responseText.trim()) {
                        throw new Error(`代理返回了空响应。\n当前请求地址: ${fetchUrl}\n请检查 Base URL 是否应包含 /v1，或确认该网关支持 chat/completions。`);
                    }
                    let data;
                    try {
                        data = JSON.parse(responseText);
                    } catch {
                        throw new Error(`代理返回的数据不是有效的 JSON。\n当前请求地址: ${fetchUrl}\n\n返回内容预览: ${responseText.substring(0, 150)}`);
                    }
                    const text = extractOpenAIText(data);
                    if (!text.trim()) {
                        throw new Error(`代理响应中没有可用文本。\n当前请求地址: ${fetchUrl}\n返回内容预览: ${responseText.substring(0, 300)}`);
                    }
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
                let rawStream = '';

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value, { stream: true });
                        rawStream += chunk;
                        buffer += chunk;
                        const lines = buffer.split('\n');
                        buffer = lines.pop() || '';

                        for (const line of lines) {
                            if (!line.startsWith('data: ')) continue;
                            const data = line.slice(6).trim();
                            if (data === '[DONE]') continue;

                            try {
                                const event = JSON.parse(data);
                                const delta = event.choices?.[0]?.delta?.content || event.choices?.[0]?.message?.content || event.output_text;
                                if (delta) fullText += delta;
                            } catch {
                                // 跳过无法解析的 SSE 行
                            }
                        }
                    }
                    if (buffer.trim()) rawStream += buffer;
                } finally {
                    reader.releaseLock();
                }

                if (!fullText.trim()) {
                    const trimmedRaw = rawStream.trim();
                    if (!trimmedRaw) {
                        throw new Error(`代理返回了空响应。\n当前请求地址: ${fetchUrl}\n请检查 Base URL 是否应包含 /v1，或确认该网关支持流式 chat/completions。`);
                    }
                    try {
                        const maybeJson = JSON.parse(trimmedRaw);
                        fullText = extractOpenAIText(maybeJson);
                    } catch {
                        // Some gateways send plain text even when the content-type is not JSON.
                        if (!trimmedRaw.startsWith('data:')) fullText = trimmedRaw;
                    }
                }

                if (!fullText.trim()) {
                    throw new Error(`代理响应中没有可用文本。\n当前请求地址: ${fetchUrl}\n返回内容预览: ${rawStream.substring(0, 300)}`);
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

    // OpenAI Provider 配置
    const openaiConfig = fullConfig.openai;
    const legacyOpenAIKey = settings?.llm.provider === 'openai' || settings?.llm.provider === 'custom'
        ? settings?.llm.apiKey
        : '';
    const openaiKey = openaiConfig.apiKey || legacyOpenAIKey || "";
    
    return {
        models: {
            generateContent: async (params: any) => {
                const modelId = params.model || '';
                const provider = getProviderForModel(modelId);
                
                if (provider === 'claude') {
                    // ═══ Claude 路径：通过代理，始终使用 Anthropic 原生格式 ═══
                    const apiKey = claudeKey;
                    const baseUrl = getEffectiveBaseUrl('claude', claudeConfig) || settings?.llm.baseUrl || '';

                    if (!apiKey) {
                        throw new Error('Claude 模型需要配置 API Key。请在系统配置中填写 Claude API Key。');
                    }

                    if (!baseUrl) {
                        throw new Error('Claude 模型需要配置代理地址 (Base URL)。请在系统配置中设置 Claude 的代理地址。');
                    }

                    const adapter = new AnthropicAdapter(apiKey, baseUrl);
                    return adapter.models.generateContent(params);
                }

                if (provider === 'openai') {
                    // ═══ OpenAI 路径：官方 API 或 OpenAI-compatible 网关 ═══
                    const apiKey = openaiKey;
                    const baseUrl = getEffectiveBaseUrl('openai', openaiConfig) || settings?.llm.baseUrl || 'https://api.openai.com/v1';

                    if (!apiKey) {
                        throw new Error('OpenAI 模型需要配置 API Key。请在系统配置中填写 OpenAI API Key。');
                    }

                    const adapter = new OpenAIAdapter(apiKey, baseUrl);
                    return adapter.models.generateContent(params);
                }
                
                if (geminiConfig.mode === 'proxy' && geminiConfig.baseUrl) {
                    // ═══ Gemini 代理路径：通过第三方 OpenAI-compatible 代理 ═══
                    const adapter = new OpenAIAdapter(geminiKey, geminiConfig.baseUrl);
                    return adapter.models.generateContent(params);
                }
                
                // ═══ Gemini 官方路径：直连 Google SDK ═══
                if (!geminiKey) {
                    throw new Error('Gemini 模型需要配置 API Key。请在系统配置中填写 Gemini API Key。');
                }
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

const FANTASY_TRAVERSE_TYPES: CreativeTreatment['type'][] = [
    'STRUCTURALIST',
    'POST_STRUCTURALIST',
    'THE_REAL'
];

const getAutoFillBlocksAndLibraries = (driver: DriverType): { blocks: NarrativeBlockDef[]; libraries: LibraryCategoryDef[] } => {
    switch (driver) {
        case DriverType.COMMERCIAL:
            return { blocks: [...COMMERCIAL_ENGINE_BLOCKS, ...COMM_SKIN_BLOCKS], libraries: [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY] };
        case DriverType.AESTHETIC:
            return { blocks: AESTHETIC_ENGINE_BLOCKS, libraries: AESTHETIC_ENGINE_LIBRARY };
        case DriverType.EXPERIMENTAL:
            return { blocks: [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS], libraries: [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY] };
        case DriverType.TRAILER:
            return { blocks: [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS], libraries: [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY] };
        case DriverType.NARRATIVE:
        default:
            return { blocks: [...NARRATIVE_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS], libraries: [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY] };
    }
};

const libraryIdToBlockId = (libraryId: string): string => libraryId.replace(/_lib$/, "");

const buildAutoFillOptionManifest = (driver: DriverType): string => {
    const { blocks, libraries } = getAutoFillBlocksAndLibraries(driver);
    return libraries.map(lib => {
        const blockId = libraryIdToBlockId(lib.id);
        const block = blocks.find(b => b.id === blockId);
        if (!block || !lib.items?.length) return null;
        const itemNames = lib.items.map((item: any) => item.name).filter(Boolean).join(' | ');
        return `- ${block.id} (${block.name}): ${itemNames}`;
    }).filter(Boolean).join('\n');
};

const buildAutoFillNameLookup = (driver: DriverType): Map<string, string> => {
    const { libraries } = getAutoFillBlocksAndLibraries(driver);
    const lookup = new Map<string, string>();
    libraries.forEach(lib => {
        lib.items?.forEach((item: any) => {
            const canonical = item.name;
            if (!canonical) return;
            [item.name, item.id, item.nameEn].filter(Boolean).forEach((key: string) => {
                lookup.set(String(key).trim().toLowerCase(), canonical);
            });
        });
    });
    return lookup;
};

const normalizeAutoFillState = (driver: DriverType, parsed: any): NarrativeFieldState => {
    if (!parsed || typeof parsed !== 'object') return {};
    const { blocks } = getAutoFillBlocksAndLibraries(driver);
    const validBlockIds = new Set(blocks.map(block => block.id));
    const lookup = buildAutoFillNameLookup(driver);
    const normalized: NarrativeFieldState = {};

    Object.entries(parsed).forEach(([blockId, rawValue]) => {
        if (!validBlockIds.has(blockId)) return;
        const values = Array.isArray(rawValue) ? rawValue : [rawValue];
        const tags = values
            .map(value => String(value ?? '').trim())
            .filter(Boolean)
            .map(value => lookup.get(value.toLowerCase()) || value)
            .filter((value, index, arr) => arr.indexOf(value) === index);
        if (tags.length > 0) normalized[blockId] = tags;
    });

    return normalized;
};

export const buildAutoFillPrompt = (driver: DriverType, visionInput: string, hasImage: boolean, analysis?: string): string => {
    const textSeed = visionInput.trim();
    const sourceMode = hasImage && textSeed
        ? '图文双锚模式：图片锁定视觉物理事实，文本锁定语义/关系/动机。'
        : hasImage
            ? '图像锁定模式：图片中可见事实最高优先。'
            : textSeed
                ? '文本锁定模式：用户文字最高语义优先。'
                : analysis?.trim()
                    ? '解码结果模式：使用已有解码文本作为种子。'
                    : '空白反推模式：无自由种子，直接根据该 Driver 随机反推出一组自洽参数。';

    return `
角色：迷雾引擎种子映射器。
任务：把用户的文本/图像/解码结果，映射为 ${driver} 的参数状态。

## 输入模式
${sourceMode}

## 种子
${textSeed ? `文本种子:\n${textSeed}` : '文本种子: 未填写'}
${hasImage ? '图像种子: 已上传，在附件中。可见人物、空间、物件、材质、光线、色彩与构图是最高视觉事实。' : '图像种子: 未上传'}
${analysis?.trim() ? `已有解码:\n${analysis.trim()}` : ''}

## 裁决宪法
1. 文本输入是语义锁定：明确写出的事实、关系、事件、对象、欲望与禁令必须优先。
2. 图片输入是视觉物理锁定：图片中可见的一切必须优先，不得被表层设定或随机补完覆盖。
3. 图文并存时，图片负责“世界长什么样”，文本负责“这意味着什么/为什么发生”。
4. 表层设定只是懒人预设；若与种子冲突，选择能服务种子的标签，或把冲突降级为风格、制度、隐喻。
5. M/C/L/实验/预告等结构层只解释症候运动，不改写种子事实。
6. 空白反推时允许随机性，但要选出一组内部自洽、可生成完整故事/方案的参数。

## 可选参数清单
你只能使用下列 blockId 和 item name。不要输出 item id。不要创造新标签。
${buildAutoFillOptionManifest(driver)}

## 输出
只返回原始 JSON，不要 Markdown，不要解释文字。
格式：{ "blockId": ["精确的 item name", "..."] }
只输出你有把握的 block。
`;
};

const toInlineImageData = async (image: string): Promise<{ mimeType: string; data: string }> => {
    if (image.startsWith('data:')) {
        const mimeMatch = image.match(/^data:([^;]+);base64,/);
        return {
            mimeType: mimeMatch?.[1] || 'image/jpeg',
            data: image.split(',')[1] || image
        };
    }

    if (/^https?:\/\//i.test(image)) {
        const response = await fetch(image);
        if (!response.ok) throw new Error(`Image URL fetch failed: ${response.status}`);
        const blob = await response.blob();
        const mimeType = blob.type || 'image/jpeg';
        const data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = String(reader.result || '');
                resolve(result.split(',')[1] || result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        return { mimeType, data };
    }

    return { mimeType: 'image/jpeg', data: image };
};

const readAliasedString = (source: any, aliases: string[]): string => {
    if (!source || typeof source !== 'object') return '';
    const aliasSet = new Set(aliases.map(alias => alias.toLowerCase()));

    for (const [key, value] of Object.entries(source)) {
        if (!aliasSet.has(key.toLowerCase())) continue;
        if (typeof value === 'string' && value.trim()) return value.trim();
        if (typeof value === 'number') return String(value);
    }

    return '';
};

const flattenStructuredText = (value: any): string => {
    if (!value) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'number') return String(value);
    if (Array.isArray(value)) {
        return value.map(flattenStructuredText).filter(Boolean).join('\n\n');
    }
    if (typeof value === 'object') {
        return Object.entries(value)
            .map(([key, nestedValue]) => {
                const text = flattenStructuredText(nestedValue);
                return text ? `${key}: ${text}` : '';
            })
            .filter(Boolean)
            .join('\n\n');
    }
    return '';
};

const deriveShortLine = (text: string): string => {
    const firstLine = text.split(/[\n。！？.!?]/).map(part => part.trim()).find(Boolean) || '';
    return firstLine.length > 90 ? `${firstLine.slice(0, 90)}...` : firstLine;
};

const optionKeyOrder = (key: string, fallback: number): number => {
    const normalized = key.toLowerCase();
    const marker = normalized.match(/([abc123一二三])$/)?.[1] || '';
    if (['a', '1', '一'].includes(marker)) return 0;
    if (['b', '2', '二'].includes(marker)) return 1;
    if (['c', '3', '三'].includes(marker)) return 2;
    return fallback;
};

const isOptionKey = (key: string): boolean => {
    const normalized = key.trim().toLowerCase();
    return /^(方案|选项|路径)\s*([abc123一二三])?$/.test(normalized)
        || /^option[\s_-]*([abc123])$/.test(normalized)
        || /^path[\s_-]*([abc123])$/.test(normalized)
        || /^[123]$/.test(normalized);
};

const normalizeTreatmentType = (rawType: string, index: number): CreativeTreatment['type'] => {
    const normalized = rawType.trim().toUpperCase().replace(/\s+/g, '_').replace(/-/g, '_');
    const known = new Set<CreativeTreatment['type']>([
        'CLASSIC', 'STYLIZED', 'SUBVERSIVE',
        'REAL', 'IMAGINARY', 'SYMBOLIC',
        'PHENOMENOLOGICAL', 'STRUCTURALIST', 'THE SPECTACLE',
        'ONTOLOGY', 'ATMOSPHERE', 'SEMIOTIC',
        'THE_TEASE', 'THE_PULSE', 'THE_GLITCH',
        'POST_STRUCTURALIST', 'THE_REAL',
        'EXISTENTIAL', 'NIHILISTIC', 'ROMANTIC',
        'ABSTRACT', 'NARRATIVE FLOW', 'PERFORMANCE'
    ]);

    if (known.has(normalized as CreativeTreatment['type'])) return normalized as CreativeTreatment['type'];
    if (normalized.includes('POST')) return 'POST_STRUCTURALIST';
    if (normalized.includes('REAL') || rawType.includes('实在')) return 'THE_REAL';
    if (normalized.includes('STRUCT') || rawType.includes('结构')) return 'STRUCTURALIST';
    return FANTASY_TRAVERSE_TYPES[index] || 'STRUCTURALIST';
};

const candidateToTreatment = (candidate: any, index: number, sourceKey?: string): CreativeTreatment | null => {
    const item = candidate && typeof candidate === 'object' && !Array.isArray(candidate)
        ? candidate
        : { pitch: flattenStructuredText(candidate), title: sourceKey };

    const pitchStructure = item.pitch_structure || item.pitchStructure || item['结构化梗概'];
    const pitch = readAliasedString(item, [
        'pitch',
        'pitchCn',
        'content',
        'story',
        'synopsis',
        'description',
        '正文',
        '内容',
        '方案',
        '故事',
        '梗概',
        '叙事'
    ]) || flattenStructuredText(item.pitch)
        || flattenStructuredText(item.pitchCn)
        || flattenStructuredText(item.content)
        || flattenStructuredText(item.story)
        || flattenStructuredText(pitchStructure);

    const title = readAliasedString(item, ['title', 'name', '标题', '名称', '方案标题'])
        || sourceKey
        || `叙事方案 ${index + 1}`;
    const tagline = readAliasedString(item, [
        'tagline',
        'logline',
        'slogan',
        'premise',
        '一句话',
        '一句话梗概',
        '核心句',
        '标语'
    ]) || deriveShortLine(pitch);
    const visualKey = readAliasedString(item, [
        'visualKey',
        'visual_key',
        'visualAnchor',
        'visual_anchor',
        'visual',
        '视觉锤',
        '视觉关键词',
        '视觉锚点'
    ]);
    const rawType = readAliasedString(item, ['type', '类型', 'optionType', 'pathType']);
    const structure = readAliasedString(item, ['structure', '结构', 'narrativeStructure'])
        || FANTASY_TRAVERSE_TYPES[index]
        || 'STRUCTURALIST';

    if (!pitch.trim()) return null;

    return {
        ...item,
        id: String(item.id || item.ID || `option_${index + 1}`),
        type: normalizeTreatmentType(rawType, index),
        title,
        tagline,
        visualKey,
        pitch,
        visualAnchor: visualKey || readAliasedString(item, ['visualAnchor', 'visual_anchor']) || '',
        structure
    };
};

const normalizeFantasyTraversePayload = (parsed: any): { treatments: CreativeTreatment[]; thoughtProcess: string } => {
    if (!parsed) return { treatments: [], thoughtProcess: '' };

    const thoughtProcess = readAliasedString(parsed, [
        'thought_process',
        'thoughtProcess',
        'thinking',
        'analysis',
        '思考过程'
    ]);

    let candidates: Array<{ value: any; sourceKey?: string }> = [];

    if (Array.isArray(parsed)) {
        candidates = parsed.map(value => ({ value }));
    } else if (typeof parsed === 'object') {
        const arrayContainerKey = Object.keys(parsed).find(key =>
            ['treatments', 'options', 'paths', 'results', 'items', '方案列表', '叙事方案'].includes(key)
            && Array.isArray(parsed[key])
        );

        if (arrayContainerKey) {
            candidates = parsed[arrayContainerKey].map((value: any) => ({ value }));
        } else {
            const optionEntries = Object.entries(parsed)
                .filter(([key]) => isOptionKey(key))
                .sort(([keyA], [keyB]) => optionKeyOrder(keyA, 0) - optionKeyOrder(keyB, 0));

            if (optionEntries.length > 0) {
                candidates = optionEntries.map(([sourceKey, value]) => ({ sourceKey, value }));
            } else {
                candidates = [{ value: parsed }];
            }
        }
    } else {
        candidates = [{ value: parsed }];
    }

    const treatments = candidates
        .map((candidate, index) => candidateToTreatment(candidate.value, index, candidate.sourceKey))
        .filter((item): item is CreativeTreatment => Boolean(item));

    return { treatments, thoughtProcess };
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

export const analyzeImage = async (base64Image: string | null, textInput?: string): Promise<string> => {
    try {
        const parts: any[] = [];
        const hasImage = Boolean(base64Image);
        parts.push({ text: buildNarrativeDiagnosisPrompt(textInput || "", hasImage) });
        if (base64Image) parts.push({ inlineData: await toInlineImageData(base64Image) });
        const model = configService.getEngineModel('visualBible') || 'gemini-3-flash-preview';
        console.log(`[VisualBible] Decoding Seed with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { maxOutputTokens: 4096 }
        }));
        return response.text || "Decoding failed.";
    } catch (e: any) {
        handleApiError("Seed Analysis Error", e);
        return "Error decoding seed.";
    }
};

export const generateNarrativeAutoFill = async (driver: DriverType, visionInput: string, visionImage: string | null, analysis?: string): Promise<NarrativeFieldState> => {
    try {
        const prompt = buildAutoFillPrompt(driver, visionInput, Boolean(visionImage), analysis);
        const parts: any[] = [{ text: prompt }];
        if (visionImage) parts.push({ inlineData: await toInlineImageData(visionImage) });
        const model = configService.getEngineModel('coreEngine') || 'gemini-3-flash-preview';
        console.log(`[CoreEngine] Generating AutoFill with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));
        const parsed = cleanAndParseJSON(response.text || "");
        return normalizeAutoFillState(driver, parsed);
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

        const fantasyTraverseOutputContract = `

【输出兼容性硬约束】
最终必须返回可解析的 JSON 数组，数组内正好 3 个方案对象。
不要把方案包在 "thought_process"、"方案A"、"方案B"、"方案C" 这类外层字段里。
每个方案对象必须包含：id, type, title, tagline, pitch, structure。
如果需要思考过程，只能放在 JSON 数组之前的 <thought_process>...</thought_process> XML 标签里。`;

        const parts: any[] = [{ text: `${promptData.text}\n\n${fantasyTraverseOutputContract}` }];
        if (promptData.images && promptData.images.length > 0) parts.push({ inlineData: await toInlineImageData(promptData.images[0]) });

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
            const normalized = normalizeFantasyTraversePayload(parsed);
            if (!thinkingXml && normalized.thoughtProcess) {
                thinkingXml = `<thought_process>\n${normalized.thoughtProcess}\n</thought_process>`;
            }

            if (normalized.treatments.length > 0) {
                console.log(`[CoreEngine] Parsed ${normalized.treatments.length} treatments. First item pitch length: ${normalized.treatments[0]?.pitch?.length || 0}`);
                return { treatments: normalized.treatments, thinkingXml };
            }

            throw new Error('模型返回了 JSON，但没有包含可展示的叙事方案。请重新生成；系统已加强输出格式约束。');
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
        else promptText = buildNarrativeBiblePrompt(treatment, style, fieldState, visionInput, visionImage, worldLaw, visionAnalysis);

        const parts: any[] = [{ text: promptText }];
        if (visionImage) parts.push({ inlineData: await toInlineImageData(visionImage) });

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
            const normalizeVisualBibleAsset = (asset: any) => ({
                ...asset,
                analysis: {
                    ...(asset.analysis || {}),
                    anchors: asset.analysis?.anchors || asset.anchors || '',
                    anchorsEn: asset.analysis?.anchorsEn || asset.anchorsEn || '',
                    description: asset.analysis?.description || asset.description || '',
                    descriptionEn: asset.analysis?.descriptionEn || asset.descriptionEn || '',
                    designPrompt: asset.analysis?.designPrompt || asset.designPrompt || '',
                    designPromptEn: asset.analysis?.designPromptEn || asset.designPromptEn || '',
                    conceptPrompt: asset.analysis?.conceptPrompt || asset.conceptPrompt || '',
                    conceptPromptEn: asset.analysis?.conceptPromptEn || asset.conceptPromptEn || ''
                }
            });

            const normalizeVisualBibleAssets = (assets: any = {}) => ({
                characters: (assets.characters || []).map(normalizeVisualBibleAsset),
                scenes: (assets.scenes || []).map(normalizeVisualBibleAsset),
                props: (assets.props || []).map(normalizeVisualBibleAsset)
            });

            const normalizeVisualBibleTone = (tone: any = {}): GlobalVisualTone => ({
                styleNameCN: tone.styleNameCN,
                styleNameEN: tone.styleNameEN,
                lighting: tone.lighting || '',
                lightingEn: tone.lightingEn,
                texture: tone.texture || '',
                textureEn: tone.textureEn,
                style: tone.style || '',
                styleEn: tone.styleEn,
                camera: tone.camera || '',
                cameraEn: tone.cameraEn,
                palette: Array.isArray(tone.palette) ? tone.palette : []
            });

            const mappedScenes = rawData.scenes.map((scene: any) => {
                const rangeStart = Number(scene.sourceRange?.paragraphStart);
                const rangeEnd = Number(scene.sourceRange?.paragraphEnd);
                const rangeIndices = Number.isFinite(rangeStart) && Number.isFinite(rangeEnd)
                    ? Array.from({ length: Math.max(0, rangeEnd - rangeStart + 1) }, (_, i) => rangeStart + i)
                    : [];
                const rawIndices = Array.isArray(scene.paragraph_indices) && scene.paragraph_indices.length > 0
                    ? scene.paragraph_indices
                    : rangeIndices;
                const sourceIndices = rawIndices
                    .map((i: number) => Number(i) - 1)
                    .filter((idx: number) => Number.isFinite(idx) && idx >= 0 && idx < paragraphs.length);
                const sourceContent = sourceIndices.map((idx: number) => paragraphs[idx] || "").join('\n\n');
                const breakdownInfo = `**Slugline:** ${scene.slugline || 'N/A'}\n**Scene Type:** ${scene.sceneType || 'N/A'}\n**Visual Style:** [${scene.visualStyleName || 'N/A'}] (${scene.montageId || 'montage_none'})\n**Narrative Arc:** ${scene.narrativeArc || 'N/A'}\n**Key Action Beats:**\n${(scene.keyActionBeats || []).map((beat: string) => `- ${beat}`).join('\n')}\n**Continuity Out:** ${scene.continuityOut || 'N/A'}`;
                return { title: scene.title, content: sourceContent, breakdownInfo: breakdownInfo.trim(), visualStyleName: scene.visualStyleName, montageId: scene.montageId, indices: sourceIndices };
            });
            const visualBible = rawData.visualBible ? {
                toneAnalysis: normalizeVisualBibleTone(rawData.visualBible.toneAnalysis),
                assets: normalizeVisualBibleAssets(rawData.visualBible.assets)
            } : undefined;
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
    if (image) parts.push({ inlineData: await toInlineImageData(image) });
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
