
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { configService } from "../src/services/configService";
import { EngineId, getOpenAIChatCompletionsUrl, getProviderForModel } from "../src/types/config";
import { SutureConfig, NarrativeFieldState, CreativeTreatment, StyleConfig, WorldLawConfig, CreativeBlueprint, DriverType, SubjectType, SutureResponse, FinalAssetsData, FinalAssetItem, GlobalVisualTone, AssetView, MetonymyStylePreset, MetonymyAssetInput, APISettings, FaceState, PromptFocusState, NarrativePromptVersion, NarrativeBlockDef, LibraryCategoryDef, MAxisMixerState, M7BResidueIntensity } from "../types";
import { buildSutureStep1Prompt, buildStyleTransferPrompt } from "./suture_script_prompt";
import { buildSutureStoryboardRuntimePrompt } from "./sutureGenerator";
import { buildNarrativePrompt, buildNarrativeBiblePrompt } from "./narrativeGenerator";
import { buildCommercialPrompt, buildCommercialBiblePrompt } from "./commercialGenerator";
import { buildExperimentalPrompt, buildExperimentalBiblePrompt } from "./experimentalGenerator";
import { buildTrailerPrompt } from "./trailerGenerator";
import { buildAestheticPrompt, buildAestheticBiblePrompt } from "./aestheticGenerator";
import { buildPsychoAnalysisPrompt } from "./psychoAnalysisGenerator";
import { buildDesireDiagnosisPrompt } from "./sutureDiagnosis";
import { buildNarrativeDiagnosisPrompt, buildNarrativeDiagnosisRepairPrompt, fillNarrativeDiagnosisTailGaps, hasNarrativeDiagnosisTailGap, stripNarrativeDiagnosisTail } from "./narrativeDiagnosis";
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
import { buildRefactorPrompt, type RefactorPromptOptions } from "./refactorPrompt";
import { buildScriptBreakdownPrompt } from "./scriptBreakdownGenerator";
import { runWithTask } from "./taskManager";
import { generatePromptSkillImage } from "./promptSkillImageService";

export const FANTASY_TRAVERSE_OUTPUT_CONTRACT = `

【输出兼容性硬约束】
最终必须返回可解析的 JSON 数组，数组内正好 3 个方案对象。
不要把方案包在 "design_audit"、"thought_process"、"方案A"、"方案B"、"方案C" 这类外层字段里。
每个方案对象必须包含：id, type, title, tagline, structure，并包含 pitch 或 pitch_structure。
如果主提示要求结构审查，必须放在 JSON 数组之前的 <design_audit>...</design_audit> XML 标签里；只有旧架构明确要求时才允许 <thought_process>...</thought_process>。`;

export const appendFantasyTraverseOutputContract = (promptText: string): string =>
    `${promptText}\n\n${FANTASY_TRAVERSE_OUTPUT_CONTRACT}`;

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

const stripRuntimeConfig = (params: any) => {
    if (!params?.config?.engineId) return params;
    const { engineId: _engineId, ...config } = params.config;
    return { ...params, config };
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

                const wantsJson = params.config?.responseMimeType === 'application/json';
                if (wantsJson) {
                    const jsonInstruction = [
                        'You must respond with valid JSON only.',
                        'Do not include markdown fences, comments, explanations, XML tags, or prose outside the JSON.',
                        'Use double-quoted property names and string values.',
                        'Escape any quotation marks that appear inside string values.',
                        'Every array element and object property must be separated by a comma.'
                    ].join(' ');
                    const systemIndex = messages.findIndex(message => message.role === 'system');
                    if (systemIndex >= 0) {
                        messages[systemIndex] = {
                            ...messages[systemIndex],
                            content: `${messages[systemIndex].content}\n\n${jsonInstruction}`
                        };
                    } else {
                        messages.unshift({ role: 'system', content: jsonInstruction });
                    }
                }

                const fetchUrl = getOpenAIChatCompletionsUrl(this.baseUrl);
                const maxTokens = params.config?.maxOutputTokens || 32768;
                // Long-form narrative tasks still need a complete parsable payload at the end,
                // but streaming keeps proxy gateways from waiting silently for the full body.
                const shouldStream = params.config?.stream === false
                    ? false
                    : wantsJson && maxTokens <= 8192
                        ? false
                        : true;

                console.log(`[ProxyStream] Calling: ${fetchUrl} with model: ${model}, max_tokens: ${maxTokens}, stream=${shouldStream}`);
                const startTime = Date.now();

                const requestBody: any = {
                    model: model,
                    messages: messages,
                    temperature: params.config?.temperature ?? (wantsJson ? 0.2 : 0.7),
                    max_tokens: maxTokens,
                    stream: shouldStream
                };

                if (wantsJson) {
                    requestBody.response_format = { type: 'json_object' };
                }

                const makeRequest = (body: any) => proxyFetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.apiKey}`,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(body)
                });

                let response = await makeRequest(requestBody);
                const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

                if (!response.ok) {
                    const err = await response.text();
                    const responseFormatRejected = wantsJson
                        && requestBody.response_format
                        && [400, 404, 422].includes(response.status)
                        && /response_format|json_object|json schema|unsupported|not supported|unknown parameter|invalid/i.test(err);
                    if (responseFormatRejected) {
                        console.warn(`[ProxyStream] response_format rejected by gateway, retrying without response_format. Detail: ${err.substring(0, 180)}`);
                        const retryBody = { ...requestBody };
                        delete retryBody.response_format;
                        response = await makeRequest(retryBody);
                        if (response.ok) {
                            // Continue with the successful retry response.
                        } else {
                            const retryErr = await response.text();
                            let errMsg = `Proxy Error: ${response.status} (耗时 ${elapsed}s)`;
                            if ([502, 504, 524].includes(response.status)) {
                                errMsg = `代理返回 ${response.status}（耗时 ${elapsed}s）。\n上游模型或中转网关没有及时返回，常见原因是模型过慢、输出过长，或代理超时。\n请切换到更稳定的核心文本模型，或检查代理超时设置（V3 长叙事建议 ≥ 180-300 秒）。\n\n请求地址: ${fetchUrl}\n模型: ${model}`;
                                throw new Error(errMsg);
                            }
                            throw new Error(`${errMsg}\nDetail: ${retryErr.substring(0, 200)}`);
                        }
                    } else {
                    let errMsg = `Proxy Error: ${response.status} (耗时 ${elapsed}s)`;
                    if ([502, 504, 524].includes(response.status)) {
                        errMsg = `代理返回 ${response.status}（耗时 ${elapsed}s）。\n上游模型或中转网关没有及时返回，常见原因是模型过慢、输出过长，或代理超时。\n请切换到更稳定的核心文本模型，或检查代理超时设置（V3 长叙事建议 ≥ 180-300 秒）。\n\n请求地址: ${fetchUrl}\n模型: ${model}`;
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

                // 如果代理不支持流式，或显式要求非流式，fallback 到普通 JSON 解析
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
                    const finishReason = data?.choices?.[0]?.finish_reason || data?.finish_reason || data?.stop_reason || 'unknown';
                    const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                    console.log(`[ProxyStream] Fallback JSON response (${totalElapsed}s), ${text.length} chars, finish_reason=${finishReason}`);
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

    // DeepSeek Provider 配置（OpenAI-compatible）
    const deepseekConfig = fullConfig.deepseek;
    const deepseekKey = deepseekConfig.apiKey || "";
    
    return {
        models: {
            generateContent: async (params: any) => {
                const modelId = params.model || '';
                const engineId = params.config?.engineId as EngineId | undefined;
                const runtime = engineId
                    ? configService.getRuntimeForEngine(engineId, modelId)
                    : configService.getRuntimeForModel(modelId);
                const cleanParams = stripRuntimeConfig(params);
                const fallbackProvider = getProviderForModel(modelId);
                const fallbackApiKey = fallbackProvider === 'claude'
                    ? claudeKey
                    : fallbackProvider === 'openai'
                        ? openaiKey
                        : fallbackProvider === 'deepseek'
                            ? deepseekKey
                            : geminiKey;
                const apiKey = runtime.key?.apiKey || fallbackApiKey;
                const baseUrl = runtime.baseUrl
                    || (fallbackProvider === 'claude' ? claudeConfig.baseUrl : '')
                    || (fallbackProvider === 'openai' ? openaiConfig.baseUrl : '')
                    || (fallbackProvider === 'deepseek' ? deepseekConfig.baseUrl : '')
                    || settings?.llm.baseUrl
                    || '';

                console.log(`[RuntimeRoute] ${engineId || 'model'} -> ${runtime.key?.name || fallbackProvider} | ${runtime.apiFormat} | ${runtime.requestUrl || baseUrl || 'google-native'}`);

                if (runtime.apiFormat === 'anthropic') {
                    if (!apiKey) {
                        throw new Error('Claude / Anthropic 路由需要配置 API Key。请在系统配置中选择或填写可用 Key。');
                    }
                    if (!baseUrl) {
                        throw new Error('Claude / Anthropic 路由需要配置代理地址 (Base URL)。');
                    }
                    const adapter = new AnthropicAdapter(apiKey, baseUrl);
                    return adapter.models.generateContent(cleanParams);
                }

                if (runtime.apiFormat === 'openai') {
                    if (!apiKey) {
                        throw new Error('OpenAI-compatible 路由需要配置 API Key。请在系统配置中选择或填写可用 Key。');
                    }
                    if (!baseUrl) {
                        throw new Error('OpenAI-compatible 路由需要配置 Base URL。官方 OpenAI 请使用 https://api.openai.com/v1，第三方网关请填写网关地址。');
                    }
                    const adapter = new OpenAIAdapter(apiKey, baseUrl);
                    return adapter.models.generateContent(cleanParams);
                }

                if (!apiKey) {
                    throw new Error('Gemini 官方路由需要配置 API Key。请在系统配置中填写 Gemini API Key。');
                }
                const genAI = new GoogleGenAI({ apiKey });
                return (genAI as any).models.generateContent(cleanParams);
            }
        }
    };
};

export const generateContentWithRuntime = (params: any): Promise<GenerateContentResponse> => {
    return getAI().models.generateContent(params);
};

export const testConnection = async (section: 'llm' | 'image'): Promise<boolean> => {
    try {
        const engineId = section === 'llm' ? 'coreEngine' : 'imageGen';
        const model = configService.getEngineModel(engineId);
        const response = await getAI().models.generateContent({
            model: model || (section === 'llm' ? 'gemini-3.1-flash-lite-preview' : 'gpt-image-2'),
            contents: { parts: [{ text: "ping" }] },
            config: { maxOutputTokens: 5, engineId }
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
    'PLOT',
    'FORM',
    'ATMOSPHERE'
];
const FANTASY_TRAVERSE_EXPECTED_COUNT = FANTASY_TRAVERSE_TYPES.length;

const buildFantasyTraverseCorrectionPrompt = (basePrompt: string, invalidOutput: string, parsedCount: number): string => `${basePrompt}

【上一轮输出格式失败，必须重写】
上一轮只解析到 ${parsedCount}/${FANTASY_TRAVERSE_EXPECTED_COUNT} 个方案；这在分歧点生成中视为失败。
现在不要解释原因，不要继续上一轮残稿，直接重新输出完整结果：
- JSON 数组必须正好 ${FANTASY_TRAVERSE_EXPECTED_COUNT} 个对象。
- 第 1 个必须是 PLOT / SV1_DRIVEN。
- 第 2 个必须是 FORM / FORM_DRIVEN。
- 第 3 个必须是 ATMOSPHERE / SENSORY_FIELD。
- 三个对象都必须有 title、tagline、structure、pitch_structure。
- 不得只输出一个故事，不得把三个方向合并成一个故事。

【上一轮无效输出预览】
${invalidOutput.slice(0, 4000)}`;

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
    const confirmedAnalysis = analysis?.trim() || '';
    const sourceMode = confirmedAnalysis
        ? '已确认解码种子：使用用户确认后的图文解析结果作为底座。'
        : hasImage && textSeed
            ? '图文通用反推：用户文字最高优先，图像只提供可见事实、氛围、关系与材料。'
            : hasImage
                ? '图像通用反推：直接读图，只读取可见事实。'
                : textSeed
                    ? '文本锁定反推：用户文字最高语义优先。'
                    : '空白反推：无自由种子，直接根据该 Driver 随机反推出一组自洽参数。';

    return `
角色：迷雾引擎种子映射器。
任务：把用户的文本/图像/解码结果，映射为 ${driver} 的完整参数状态。你的目标不是挑几个印象标签，而是尽可能为所有能被种子可靠支持的 M 层、SUR 层、SV 层与调音参数给出候选。

## 输入模式
${sourceMode}

## 种子
${textSeed ? `文本种子:\n${textSeed}` : '文本种子: 未填写'}
${confirmedAnalysis
        ? '图像种子: 本次映射不重新读取附件图像；图像信息只能来自下方已有解码。'
        : hasImage
            ? '图像种子: 已上传，在附件中。它只提供可见事实、关系、氛围与材料。'
            : '图像种子: 未上传'}
${confirmedAnalysis ? `已有解码:\n${confirmedAnalysis}` : ''}

## 重要边界：只做参数映射
${confirmedAnalysis
        ? `- 你不是图像解析器，不得重写、改写、扩写、摘要、替换或补完 01-06 模块。
- 你只负责把【已有解码】映射成参数候选；如果用户已经手动编辑 01-06，以编辑后的文本为准。
- 不得重新解释图片，不得根据附件图像补写【已有解码】没有支持的事实、职业、制度、历史、科技体系或魔法体系。
- 输出中不得出现 01-06 模块标题、分析段落、解释文字或 Markdown。`
        : `- 没有已有解码时，才允许直接从文本/图像种子反推参数。
- 即便直接反推，也不得输出分析段落或 01-06 模块，只能输出参数 JSON。`}

## 裁决宪法
1. 用户文字、创意灵感、手动修改和确认后的解码种子最高优先。若用户要求把图中女孩和兔子改成男人和老虎，参数反推必须服从这个替换。
2. 图像只提供可见事实、氛围、构图、材质、关系张力与世界材料，不在这里重新裁决图片用途。
3. 已有解码是可编辑故事种子，不是不可违背的客观事实；若它与用户文字冲突，以用户文字为准。
4. 反推参数只是创作建议；输出的 M/SUR/SV 候选不能覆盖用户意图、确认解析和图片事实。
5. 表层设定只是懒人预设；若与种子冲突，选择能服务种子的标签，或把冲突降级为风格、制度、隐喻、类型语法。
6. M/C/L/实验/预告等结构层只解释症候运动，不改写用户已锁定的事实或替换要求。
7. 空白反推时允许随机性，但要选出一组内部自洽、可生成完整故事/方案的参数。

## 全参数映射要求
- 优先覆盖深层结构：M0、M1、M2、M3、M4、M5、M6、M7A、M7B。每个被选择的标签都必须能从确认解析里的行动张力、冲突、欲望、代价或余痕推出。
- 同时覆盖表层预设：SUR1 故事类型、SUR2 背景场域、SUR4 社会形态、SUR5 对象预设、SUR6 空间容器、SUR7 选角呈现、SUR8 年龄阶段、SUR9 职业身份、SUR10 信念预设、SUR-END 显性收场、SV1 叙事结构、SV2 故事体量，以及可用的调音参数。
- 若图片强烈呈现魔幻、神话、科幻、超现实、废墟、仪式、亡灵、怪物、梦境等世界本体，SUR/SV 必须优先贴合这个本体，不得默认折译成当代现实主义。
- 若某个 block 缺乏可靠依据，可以略过；但不要因为输出保守而只返回 2-3 个 block。对确认解析已经明确支持的 block，应尽量完整输出。
- 每个 block 最多输出 1-3 个最强候选，避免把同义或互相冲突的标签堆满。

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
        'PLOT', 'FORM', 'CHARACTER',
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
    if (normalized.includes('FORM') || rawType.includes('形式') || rawType.includes('载体') || rawType.includes('体裁')) return 'FORM';
    if (normalized.includes('CHARACTER') || rawType.includes('人物') || rawType.includes('角色')) return 'CHARACTER';
    if (normalized.includes('ATMOSPHERE') || rawType.includes('氛围') || rawType.includes('场域')) return 'ATMOSPHERE';
    if (normalized.includes('PLOT') || rawType.includes('情节') || rawType.includes('事件')) return 'PLOT';
    if (normalized.includes('POST')) return 'POST_STRUCTURALIST';
    if (normalized.includes('REAL') || rawType.includes('实在')) return 'THE_REAL';
    if (normalized.includes('STRUCT') || rawType.includes('结构')) return 'STRUCTURALIST';
    return FANTASY_TRAVERSE_TYPES[index] || 'PLOT';
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

const normalizeFantasyTraversePayload = (parsed: any): { treatments: CreativeTreatment[]; auditXml: string } => {
    if (!parsed) return { treatments: [], auditXml: '' };

    const auditXml = readAliasedString(parsed, [
        'design_audit',
        'designAudit',
        'audit',
        'structure_audit',
        '结构审查',
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

    return { treatments, auditXml };
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

async function retryWithBackoff<T>(fn: (signal?: AbortSignal) => Promise<T>, retries = 3, delay = 1000, taskNameOverride?: string): Promise<T> {
    const taskName = taskNameOverride || getCallerName();
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
                // 代理/网关超时不重试；重试通常只会继续超时，浪费用户等待时间。
                if (err?.message?.includes('502') || err?.message?.includes('504') || err?.message?.includes('524')) {
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
        if (errorMsg.includes("502") || errorMsg.includes("504") || errorMsg.includes("524")) {
            alert(`代理服务器超时或网关失败。\n\n模型生成内容较慢，代理服务器可能在等待响应时超时了。\n建议：切换到更稳定的核心文本模型，或将代理超时时间设置为 180-300 秒以上；V3 长叙事提示词越完整，越需要更长的上游等待窗口。\n\n${errorMsg}`);
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
                maxOutputTokens: 32768,  // Increase token limit for longer scripts
                engineId: 'metonymyEngine'
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
                maxOutputTokens: 32768,  // Increase token limit for longer scripts
                engineId: 'metonymyEngine'
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

    const finalPrompt = buildSutureStoryboardRuntimePrompt(
        sutureData.literaryScript,
        fullStory,
        fieldState,
        sutureData.globalTone,
        target,
        referenceImages,
        globalStyleContext
    );

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
            config: { responseMimeType: 'application/json', engineId: 'metonymyEngine' }
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
            config: { responseMimeType: 'application/json', engineId: 'visualSeed' }
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
            config: { maxOutputTokens: 8192, engineId: 'visualBible' }
        }));
        const diagnosis = response.text || "";
        if (!diagnosis.trim()) return "Decoding failed.";
        if (!hasNarrativeDiagnosisTailGap(diagnosis)) return diagnosis;

        const repairParts: any[] = [{ text: buildNarrativeDiagnosisRepairPrompt(textInput || "", hasImage, diagnosis) }];
        if (base64Image) repairParts.push({ inlineData: await toInlineImageData(base64Image) });
        const repairResponse = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: repairParts },
            config: { maxOutputTokens: 2048, engineId: 'visualBible' }
        }));
        const repairTail = repairResponse.text || "";
        const merged = repairTail.trim()
            ? `${stripNarrativeDiagnosisTail(diagnosis)}\n\n${repairTail.trim()}`.trim()
            : diagnosis;
        return fillNarrativeDiagnosisTailGaps(merged || diagnosis, textInput || "", hasImage);
    } catch (e: any) {
        handleApiError("Seed Analysis Error", e);
        return "Error decoding seed.";
    }
};

export const generateNarrativeAutoFill = async (driver: DriverType, visionInput: string, visionImage: string | null, analysis?: string): Promise<NarrativeFieldState> => {
    try {
        const hasConfirmedAnalysis = Boolean(analysis?.trim());
        const prompt = buildAutoFillPrompt(driver, visionInput, hasConfirmedAnalysis ? false : Boolean(visionImage), analysis);
        const parts: any[] = [{ text: prompt }];
        if (visionImage && !hasConfirmedAnalysis) parts.push({ inlineData: await toInlineImageData(visionImage) });
        const model = configService.getEngineModel('coreEngine') || 'gemini-3-flash-preview';
        console.log(`[CoreEngine] Generating AutoFill with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json', engineId: 'coreEngine' }
        }));
        const parsed = cleanAndParseJSON(response.text || "");
        return normalizeAutoFillState(driver, parsed);
    } catch (e: any) {
        handleApiError("Narrative AutoFill Error", e);
        return {};
    }
};

export const generateFantasyTraverse = async (driver: DriverType, duration: string, fieldState: NarrativeFieldState, visionInput: string, visionImage: string | null, worldLaw: WorldLawConfig, subjectType: SubjectType, visionAnalysis: string, colorPalette: string[] = [], faceState?: FaceState, focusState?: PromptFocusState, promptVersion: NarrativePromptVersion = 'v4', taskName?: string, mAxisMixer?: MAxisMixerState, m7bIntensity?: M7BResidueIntensity): Promise<{ treatments: CreativeTreatment[]; thinkingXml: string }> => {
    try {
        let promptData;
        if (driver === DriverType.COMMERCIAL) promptData = buildCommercialPrompt(duration, fieldState, visionInput, visionImage, worldLaw);
        else if (driver === DriverType.EXPERIMENTAL) promptData = buildExperimentalPrompt(duration, fieldState, visionInput, visionImage);
        else if (driver === DriverType.AESTHETIC) promptData = buildAestheticPrompt(duration, fieldState, visionInput, visionImage, subjectType, worldLaw, colorPalette);
        else if (driver === DriverType.TRAILER) promptData = buildTrailerPrompt(duration, fieldState, visionInput, visionImage);
        else promptData = buildNarrativePrompt(duration, fieldState, visionInput, visionImage, worldLaw, promptVersion, faceState, focusState, mAxisMixer, m7bIntensity);

        const basePrompt = appendFantasyTraverseOutputContract(promptData.text);
        const imagePart = promptData.images && promptData.images.length > 0
            ? { inlineData: await toInlineImageData(promptData.images[0]) }
            : null;

        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Generating Fantasy Traverse with model: ${model}`);
        let currentPrompt = basePrompt;
        let lastRawText = '';
        let lastParsedCount = 0;

        for (let attempt = 0; attempt < 2; attempt++) {
            const parts: any[] = [{ text: currentPrompt }];
            if (imagePart) parts.push(imagePart);

            const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
                model: model,
                contents: { parts: parts },
                config: { responseMimeType: 'application/json', engineId: 'coreEngine' }
            }), 3, 1000, taskName);
            const rawText = response.text || "";
            lastRawText = rawText;
            console.log(`[CoreEngine] Fantasy Traverse raw response (${rawText.length} chars):`, rawText.substring(0, 500));

            // Extract audit XML before parsing JSON. New V3 prompts use <design_audit>;
            // legacy prompts may still return <thought_process>.
            let thinkingXml = '';
            const xmlMatch = rawText.match(/<design_audit[\s\S]*?<\/design_audit>/)
                || rawText.match(/<thought_process[\s\S]*?<\/thought_process>/);
            if (xmlMatch) {
                thinkingXml = xmlMatch[0];
                console.log(`[CoreEngine] Extracted audit XML (${thinkingXml.length} chars)`);
            }
            const textForParsing = xmlMatch ? rawText.replace(xmlMatch[0], '').trim() : rawText;
            const parsed = cleanAndParseJSON(textForParsing);

            if (parsed) {
                const normalized = normalizeFantasyTraversePayload(parsed);
                lastParsedCount = normalized.treatments.length;
                if (!thinkingXml && normalized.auditXml) {
                    thinkingXml = `<design_audit>\n${normalized.auditXml}\n</design_audit>`;
                }

                if (normalized.treatments.length === FANTASY_TRAVERSE_EXPECTED_COUNT) {
                    console.log(`[CoreEngine] Parsed ${normalized.treatments.length} treatments. First item pitch length: ${normalized.treatments[0]?.pitch?.length || 0}`);
                    return { treatments: normalized.treatments, thinkingXml };
                }

                console.warn(`[CoreEngine] Expected ${FANTASY_TRAVERSE_EXPECTED_COUNT} treatments, parsed ${normalized.treatments.length}. Retrying with correction prompt.`);
                if (attempt === 0) {
                    currentPrompt = buildFantasyTraverseCorrectionPrompt(basePrompt, rawText, normalized.treatments.length);
                    continue;
                }

                throw new Error(`模型只返回了 ${normalized.treatments.length}/${FANTASY_TRAVERSE_EXPECTED_COUNT} 个叙事方案。分歧点必须同时返回 PLOT / FORM / ATMOSPHERE 三条路径，请重新生成或换回更稳定的核心模型。`);
            }

            if (attempt === 0) {
                currentPrompt = buildFantasyTraverseCorrectionPrompt(basePrompt, rawText, 0);
                continue;
            }

            throw new Error('模型返回内容不是可解析的三方案 JSON。请重新生成；系统已加强输出格式约束。');
        }

        throw new Error(`模型未能返回完整三方案。最后一次解析数量：${lastParsedCount}/${FANTASY_TRAVERSE_EXPECTED_COUNT}；输出预览：${lastRawText.slice(0, 300)}`);
    } catch (e: any) {
        handleApiError("Fantasy Traverse Generate Error", e);
        return { treatments: [], thinkingXml: '' };
    }
};

export const generateBlueprint = async (driver: DriverType, treatment: CreativeTreatment, style: StyleConfig, fieldState: NarrativeFieldState, visionInput: string, visionImage: string | null, worldLaw: WorldLawConfig, visionAnalysis: string, colorPalette: string[] = [], focusState?: PromptFocusState, mAxisMixer?: MAxisMixerState, m7bIntensity?: M7BResidueIntensity): Promise<CreativeBlueprint | null> => {
    try {
        let promptText;
        if (driver === DriverType.COMMERCIAL) promptText = buildCommercialBiblePrompt(treatment, style, fieldState, visionInput, worldLaw);
        else if (driver === DriverType.EXPERIMENTAL) promptText = buildExperimentalBiblePrompt(treatment, style, fieldState, visionInput, worldLaw);
        else if (driver === DriverType.AESTHETIC) promptText = buildAestheticBiblePrompt(treatment, style, fieldState, visionInput, worldLaw, colorPalette);
        else promptText = buildNarrativeBiblePrompt(treatment, style, fieldState, visionInput, visionImage, worldLaw, visionAnalysis, focusState, mAxisMixer, m7bIntensity);

        const parts: any[] = [{ text: promptText }];
        if (visionImage) parts.push({ inlineData: await toInlineImageData(visionImage) });

        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Generating Blueprint with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json', engineId: 'coreEngine' }
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
        
        if (parsed) {
            const context = parsed.context || {};
            parsed.context = {
                ...context,
                world: context.world || parsed.world || parsed.worldCn || parsed.worldEn || "",
                tone: context.tone || parsed.tone || parsed.toneCn || parsed.toneEn || "",
                colorPalette: Array.isArray(context.colorPalette) ? context.colorPalette : (parsed.colorPalette || colorPalette || []),
                moodboard: context.moodboard || { prompt: "", images: [], selectedImageId: null }
            };
        }

        if (parsed) {
            const assets = parsed.assets || {};
            parsed.assets = {
                characters: Array.isArray(assets.characters) ? assets.characters : [],
                locations: Array.isArray(assets.locations) ? assets.locations : [],
                props: Array.isArray(assets.props) ? assets.props : []
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
    style: string = "",
    refactorOptions: RefactorPromptOptions = {}
): Promise<string> => {
    try {
        const prompt = buildRefactorPrompt(fullStory, sections, insertions, overallInstruction, style, refactorOptions);
        const model = configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview';
        console.log(`[CoreEngine] Modifying Narrative with model: ${model}`);
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { engineId: 'coreEngine' }
        }));
        return response.text || fullStory;
    } catch (e: any) {
        handleApiError("Modify Narrative Error", e);
        return fullStory;
    }
};

export const generateAssetImage = async (prompt: string): Promise<string | null> => {
    try {
        const model = configService.getEngineModel('imageGen') || 'gpt-image-2';
        console.log(`[ImageGen] Generating Asset Image with model: ${model}`);
        if (model.toLowerCase().startsWith('gpt-image')) {
            const result = await generatePromptSkillImage({
                prompt,
                aspectRatio: '16:9',
                scale: '2k',
                quality: 'high',
                model
            });
            return result.imageUrl;
        }

        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { engineId: 'imageGen' }
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
            config: { responseMimeType: 'application/json', engineId: 'metonymyEngine' }
        }));

        if (!response.text) return null;
        const parsedData = cleanAndParseJSON(response.text);
        const rawData = typeof parsedData === 'string' ? cleanAndParseJSON(parsedData) : parsedData;
        const sceneListCandidate = Array.isArray(rawData)
            ? rawData
            : rawData?.scenes
                || rawData?.sections
                || rawData?.screenplay
                || rawData?.sceneBreakdown
                || rawData?.breakdown?.scenes
                || rawData?.result?.scenes
                || rawData?.data?.scenes;
        const sceneList = Array.isArray(sceneListCandidate)
            ? sceneListCandidate
            : (sceneListCandidate && typeof sceneListCandidate === 'object' ? Object.values(sceneListCandidate) : []);

        if (rawData && sceneList.length > 0) {
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

            const parseIndexValue = (value: any): number[] => {
                if (typeof value === 'number') return [value];
                if (typeof value !== 'string') return [];
                const trimmed = value.trim();
                if (!trimmed) return [];

                const rangeMatch = trimmed.match(/^(\d+)\s*[-~—至到]\s*(\d+)$/);
                if (rangeMatch) {
                    const start = Number(rangeMatch[1]);
                    const end = Number(rangeMatch[2]);
                    if (Number.isFinite(start) && Number.isFinite(end)) {
                        const min = Math.min(start, end);
                        const max = Math.max(start, end);
                        return Array.from({ length: max - min + 1 }, (_, i) => min + i);
                    }
                }

                const nums = trimmed.match(/\d+/g);
                return nums ? nums.map(Number).filter(Number.isFinite) : [];
            };

            const getRangeValue = (range: any, keys: string[]) => {
                if (!range || typeof range !== 'object') return undefined;
                for (const key of keys) {
                    if (range[key] !== undefined) return range[key];
                }
                return undefined;
            };

            const mappedScenes = sceneList.map((scene: any, index: number) => {
                const sourceRange = scene.sourceRange || scene.source_range || scene.range || {};
                const rangeStart = Number(getRangeValue(sourceRange, ['paragraphStart', 'paragraph_start', 'startParagraph', 'start', 'from']));
                const rangeEnd = Number(getRangeValue(sourceRange, ['paragraphEnd', 'paragraph_end', 'endParagraph', 'end', 'to']));
                const rangeIndices = Number.isFinite(rangeStart) && Number.isFinite(rangeEnd)
                    ? Array.from({ length: Math.max(0, Math.abs(rangeEnd - rangeStart) + 1) }, (_, i) => Math.min(rangeStart, rangeEnd) + i)
                    : [];
                const rawIndicesValue = scene.paragraph_indices
                    || scene.paragraphIndices
                    || scene.sourceIndices
                    || scene.source_indices
                    || scene.indices
                    || scene.paragraphs;
                const rawIndices = (Array.isArray(rawIndicesValue) ? rawIndicesValue : [rawIndicesValue])
                    .flatMap(parseIndexValue)
                    .filter(Number.isFinite);
                const oneOrZeroBased = rawIndices.length > 0 ? rawIndices : rangeIndices;
                const appearsZeroBased = oneOrZeroBased.some((i: number) => i === 0);
                const sourceIndices = Array.from(new Set(oneOrZeroBased
                    .map((i: number) => appearsZeroBased ? Number(i) : Number(i) - 1)
                    .filter((idx: number) => Number.isFinite(idx) && idx >= 0 && idx < paragraphs.length)))
                    .sort((a: number, b: number) => a - b);
                const sourceContent = String(sourceIndices.map((idx: number) => paragraphs[idx] || "").join('\n\n')
                    || scene.content
                    || scene.sceneContent
                    || scene.sceneText
                    || scene.sourceText
                    || scene.text
                    || "");
                const keyActionBeats = Array.isArray(scene.keyActionBeats)
                    ? scene.keyActionBeats
                    : (Array.isArray(scene.key_action_beats) ? scene.key_action_beats : []);
                const breakdownInfo = `**Slugline:** ${scene.slugline || 'N/A'}\n**Scene Type:** ${scene.sceneType || scene.scene_type || 'N/A'}\n**Visual Style:** [${scene.visualStyleName || scene.visual_style_name || 'N/A'}] (${scene.montageId || scene.montage_id || 'montage_none'})\n**Narrative Arc:** ${scene.narrativeArc || scene.narrative_arc || 'N/A'}\n**Key Action Beats:**\n${keyActionBeats.map((beat: string) => `- ${beat}`).join('\n')}\n**Continuity Out:** ${scene.continuityOut || scene.continuity_out || 'N/A'}`;
                return {
                    title: scene.title || scene.name || `Scene ${index + 1}`,
                    content: sourceContent,
                    breakdownInfo: breakdownInfo.trim(),
                    visualStyleName: scene.visualStyleName || scene.visual_style_name,
                    montageId: scene.montageId || scene.montage_id,
                    indices: sourceIndices
                };
            }).filter((scene: any) => scene.content.trim() || String(scene.title).trim());
            const rawVisualBible = rawData.visualBible || rawData.visual_bible || rawData.visuals;
            const visualBible = rawVisualBible ? {
                toneAnalysis: normalizeVisualBibleTone(rawVisualBible.toneAnalysis || rawVisualBible.tone_analysis || rawVisualBible.tone),
                assets: normalizeVisualBibleAssets(rawVisualBible.assets)
            } : undefined;
            return { scenes: mappedScenes, visualBible };
        }
        console.warn('[Metonymy] Breakdown parse returned no scenes', {
            parsedKeys: rawData && typeof rawData === 'object' ? Object.keys(rawData) : typeof rawData,
            preview: response.text.slice(0, 800)
        });
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
            config: { responseMimeType: 'application/json', engineId: 'visualBible' }
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
            config: { responseMimeType: 'application/json', engineId: 'coreEngine' }
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
            config: { responseMimeType: 'application/json', engineId: 'coreEngine' }
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
            config: { responseMimeType: 'application/json', engineId: 'coreEngine' }
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
            contents: { parts: [{ text: prompt }] },
            config: { engineId: 'psychoAnalysis' }
        }));
        return response.text || "";
    } catch (e: any) {
        handleApiError("Psycho Analysis Error", e);
        return "Analysis failed.";
    }
};
