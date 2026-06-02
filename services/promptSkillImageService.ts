import { GenerateContentResponse } from '@google/genai';
import { configService } from '../src/services/configService';
import { EngineId, getOpenAIImagesGenerationsUrl } from '../src/types/config';

export type PromptSkillAspectRatio = '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3' | '21:9' | '1:1';
export type PromptSkillImageScale = '1k' | '2k' | '4k';
export type PromptSkillImageQuality = 'low' | 'medium' | 'high';
export type PromptSkillImageFormat = 'jpeg' | 'png' | 'webp';
const OPENAI_IMAGE_PROMPT_CHAR_LIMIT = 1000;

export interface PromptSkillImageOptions {
    prompt: string;
    aspectRatio: PromptSkillAspectRatio;
    scale: PromptSkillImageScale;
    quality: PromptSkillImageQuality;
    format?: PromptSkillImageFormat;
    model?: string;
}

export interface PromptSkillImageResult {
    imageUrl: string;
    model: string;
    requestSize: string;
    aspectRatio: PromptSkillAspectRatio;
    quality: PromptSkillImageQuality;
    requestUrl: string;
    imageFormat: PromptSkillImageFormat;
    responseFormat?: string;
}

const proxyFetch = (url: string, options: RequestInit): Promise<Response> => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        const parsed = new URL(url);
        const headers = new Headers(options.headers);
        headers.set('X-Proxy-Target', parsed.origin);
        return fetch(`/__api_proxy${parsed.pathname}${parsed.search}`, { ...options, headers });
    }
    return fetch(url, options);
};

export const getPromptSkillOpenAIImageSize = (
    aspectRatio: PromptSkillAspectRatio,
    scale: PromptSkillImageScale
): string => {
    if (scale === '4k') {
        if (['9:16', '3:4', '2:3'].includes(aspectRatio)) return '2160x3840';
        if (aspectRatio === '1:1') return '2048x2048';
        return '3840x2160';
    }
    if (scale === '2k') {
        if (['9:16', '3:4', '2:3'].includes(aspectRatio)) return '1024x1536';
        if (aspectRatio === '1:1') return '2048x2048';
        return aspectRatio === '16:9' || aspectRatio === '21:9' ? '2048x1152' : '1536x1024';
    }
    if (aspectRatio === '1:1') return '1024x1024';
    if (['9:16', '3:4', '2:3'].includes(aspectRatio)) return '1024x1536';
    return '1536x1024';
};

const buildImagePrompt = (prompt: string, aspectRatio: PromptSkillAspectRatio, scale: PromptSkillImageScale): string => [
    `Render this as a ${aspectRatio} image. Preserve the full Character Identity Board layout and keep all views readable.`,
    `Requested output tier: ${scale}. Prioritize sharp identity-board details, clean white/off-white background, no watermark.`,
    prompt
].join('\n\n');

const normalizePromptWhitespace = (value: string): string =>
    value.replace(/\r/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();

const clipText = (value: string, maxLength: number): string => {
    const clean = normalizePromptWhitespace(value);
    if (clean.length <= maxLength) return clean;
    return `${clean.slice(0, Math.max(0, maxLength - 1)).trim()}…`;
};

const extractPromptSection = (prompt: string, labels: string[]): string => {
    for (const label of labels) {
        const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const match = prompt.match(new RegExp(`\\[${escaped}[^\\]]*\\]:\\s*([\\s\\S]*?)(?=\\n\\[[^\\]]+\\]:|\\n\\n(?:请自行发明|Invent everything else|原创性规则|Originality rules|参考边界规则|Reference boundary rules)|$)`, 'i'));
        if (match?.[1]?.trim()) return match[1].trim();
    }
    return '';
};

const buildCompactImagePrompt = (
    prompt: string,
    aspectRatio: PromptSkillAspectRatio,
    scale: PromptSkillImageScale
): string => {
    const clean = normalizePromptWhitespace(prompt);
    const sectionValues = {
        seed: extractPromptSection(clean, ['CHARACTER SEED / 角色种子', 'CHARACTER SEED']),
        body: extractPromptSection(clean, ['AGE / BODY TYPE / 年龄与身体类型', 'AGE / BODY TYPE']),
        medium: extractPromptSection(clean, ['VISUAL MEDIUM / 视觉媒介', 'VISUAL MEDIUM']),
        physical: extractPromptSection(clean, ['PHYSICAL MEDIUM CATEGORY / 物理媒介大类', 'PHYSICAL MEDIUM CATEGORY']),
        style: extractPromptSection(clean, ['STYLE / 审美方向', 'STYLE']),
        details: extractPromptSection(clean, ['OTHER DETAILS - OPTIONAL / 补充细节', 'OTHER DETAILS - OPTIONAL']),
    };

    const compact = [
        `Create an artistic ${aspectRatio} CHARACTER IDENTITY BOARD, ${scale} tier.`,
        'White/off-white background, no logo, no watermark. Include main full-body view, neutral full-body, back view, profile view, attitude pose, 4-6 expression studies, outfit/anatomy close-ups, key prop/signature feature close-up, silhouette study, palette strip, short readable identity notes. Keep views separated; no cropped faces, hidden limbs, overlaps, or clutter.',
        `Character seed: ${clipText(sectionValues.seed || clean, 210)}`,
        sectionValues.body ? `Age/body: ${clipText(sectionValues.body, 120)}` : '',
        sectionValues.medium ? `Visual medium: ${clipText(sectionValues.medium, 120)}` : '',
        sectionValues.physical ? `Physical medium: ${clipText(sectionValues.physical, 110)}` : '',
        sectionValues.style ? `Style: ${clipText(sectionValues.style, 140)}` : '',
        sectionValues.details ? `Details: ${clipText(sectionValues.details, 150)}` : '',
        'Invent a fresh, copyright-safe, non-generic character identity. Avoid existing IP, celebrity, brand, mascot, franchise, fan-art aesthetics, copied costumes, logos, symbols, silhouettes, powers, or signature traits.'
    ].filter(Boolean).join('\n');

    return clipText(compact, OPENAI_IMAGE_PROMPT_CHAR_LIMIT);
};

const buildOpenAIImagePrompt = (
    prompt: string,
    aspectRatio: PromptSkillAspectRatio,
    scale: PromptSkillImageScale
): string => {
    const fullPrompt = buildImagePrompt(prompt, aspectRatio, scale);
    if (fullPrompt.length <= OPENAI_IMAGE_PROMPT_CHAR_LIMIT) return fullPrompt;
    return buildCompactImagePrompt(prompt, aspectRatio, scale);
};

const extractGeminiImage = (response: GenerateContentResponse): string | null => {
    const parts = (response as any).candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
        if (part.inlineData) {
            return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        }
    }
    return null;
};

const getMimeTypeForFormat = (format: PromptSkillImageFormat): string =>
    format === 'jpeg' ? 'image/jpeg' : `image/${format}`;

const extractOpenAIImageUrl = (
    data: any,
    format: PromptSkillImageFormat
): { imageUrl: string; responseFormat?: string } => {
    const item = data?.data?.[0];
    if (item?.b64_json) {
        return { imageUrl: `data:${getMimeTypeForFormat(format)};base64,${item.b64_json}`, responseFormat: 'data.b64_json' };
    }
    if (item?.url || item?.image_url) {
        return { imageUrl: item.url || item.image_url, responseFormat: item.url ? 'data.url' : 'data.image_url' };
    }

    const content = data?.choices?.[0]?.message?.content;
    const contentText = Array.isArray(content)
        ? content.map((part: any) => typeof part === 'string' ? part : part?.text || part?.content || '').join('')
        : typeof content === 'string'
            ? content
            : '';
    if (contentText) {
        const directDataUrl = contentText.match(/data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+/);
        if (directDataUrl?.[0]) return { imageUrl: directDataUrl[0], responseFormat: 'choices.message.content.data_url' };

        const markdownImage = contentText.match(/!\[[^\]]*]\((https?:\/\/[^)\s]+)\)/);
        if (markdownImage?.[1]) return { imageUrl: markdownImage[1], responseFormat: 'choices.message.content.markdown_url' };

        const rawUrl = contentText.match(/https?:\/\/\S+/);
        if (rawUrl?.[0]) return { imageUrl: rawUrl[0].replace(/[),.，。]+$/, ''), responseFormat: 'choices.message.content.url' };
    }

    return { imageUrl: '' };
};

const formatOpenAIImageError = (
    responseStatus: number,
    responseText: string,
    fetchUrl: string,
    model: string,
    requestSize: string,
    quality: PromptSkillImageQuality,
    format: PromptSkillImageFormat,
    promptLength: number
): string => {
    const upstreamForbidden = /upstream access forbidden/i.test(responseText);
    const socketHangUp = /socket hang up/i.test(responseText);
    const gatewayStatus = [502, 504, 524].includes(responseStatus);
    const gatewayHint = upstreamForbidden
        ? '\n\n诊断：Pixel 网关已经收到请求，但转发到上游图片服务时被拒绝。请先用 1k / low / jpeg 测试；如果这个组合仍然秒退，说明当前 Key 或渠道没有开通 gpt-image-2 图片上游权限，需要在 Pixel 后台/供应商侧处理。'
        : socketHangUp
            ? '\n\n诊断：请求已进入当前网关，但高分辨率/高质量图片任务在等待上游返回时连接被提前断开。若 1k 可生成而 2k/4k 失败，通常表示这条中转通道暂不支持该分辨率、上游额度不足，或网关长连接超时。'
        : gatewayStatus
            ? '\n\n诊断：当前网关没有成功转发 OpenAI Images endpoint，或上游图片服务暂时不可用。请确认该 Key 绑定的 Base URL 支持 /v1/images/generations。'
            : '';

    return [
        `GPT Image 生成失败 ${responseStatus}: ${responseText.slice(0, 260)}`,
        `请求地址: ${fetchUrl}`,
        `模型: ${model}`,
        `size: ${requestSize}`,
        `quality: ${quality}`,
        `format: ${format}`,
        `prompt length: ${promptLength}/${OPENAI_IMAGE_PROMPT_CHAR_LIMIT}`,
        'endpoint: /v1/images/generations',
        gatewayHint
    ].filter(Boolean).join('\n');
};

const generateWithOpenAIImage = async (
    options: PromptSkillImageOptions,
    model: string
): Promise<PromptSkillImageResult> => {
    const runtime = configService.getRuntimeForEngine('imageGen' as EngineId, model);
    const apiKey = runtime.key?.apiKey || configService.getOpenAIApiKey();
    const baseUrl = runtime.baseUrl || configService.getOpenAIBaseUrl() || 'https://api.openai.com/v1';
    if (!apiKey) {
        throw new Error('GPT Image 生成需要 OpenAI API Key。请在系统配置里给“资产生成引擎 / imageGen”绑定 OpenAI Key。');
    }

    const requestSize = getPromptSkillOpenAIImageSize(options.aspectRatio, options.scale);
    const imageFormat = options.format || 'jpeg';
    const fetchUrl = getOpenAIImagesGenerationsUrl(baseUrl || 'https://api.openai.com/v1');
    const imagePrompt = buildOpenAIImagePrompt(options.prompt, options.aspectRatio, options.scale);
    const requestBody = {
        model,
        prompt: imagePrompt,
        size: requestSize,
        quality: options.quality,
        format: imageFormat,
        n: 1
    };
    const response = await proxyFetch(fetchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    if (!response.ok) {
        throw new Error(formatOpenAIImageError(
            response.status,
            responseText,
            fetchUrl,
            model,
            requestSize,
            options.quality,
            imageFormat,
            imagePrompt.length
        ));
    }

    let data: any;
    try {
        data = JSON.parse(responseText);
    } catch {
        throw new Error(`GPT Image 返回了不可解析的响应: ${responseText.slice(0, 220)}`);
    }

    const { imageUrl, responseFormat } = extractOpenAIImageUrl(data, imageFormat);
    if (!imageUrl) {
        throw new Error(`GPT Image 没有返回图片内容。\n请求地址: ${fetchUrl}\n模型: ${model}\nsize: ${requestSize}\nquality: ${options.quality}\nformat: ${imageFormat}\nprompt length: ${imagePrompt.length}/${OPENAI_IMAGE_PROMPT_CHAR_LIMIT}\n返回摘要: ${responseText.slice(0, 360)}`);
    }

    return {
        imageUrl,
        model,
        requestSize,
        aspectRatio: options.aspectRatio,
        quality: options.quality,
        requestUrl: fetchUrl,
        imageFormat,
        responseFormat
    };
};

const generateWithRuntimeImage = async (
    options: PromptSkillImageOptions,
    model: string
): Promise<PromptSkillImageResult> => {
    const { generateContentWithRuntime } = await import('./geminiService');
    const response = await generateContentWithRuntime({
        model,
        contents: { parts: [{ text: buildImagePrompt(options.prompt, options.aspectRatio, options.scale) }] },
        config: {
            engineId: 'imageGen',
            // Gemini image models accept imageConfig through the native SDK.
            imageConfig: {
                aspectRatio: options.aspectRatio
            }
        }
    }) as GenerateContentResponse;

    const imageUrl = extractGeminiImage(response);
    if (!imageUrl) {
        throw new Error('图像模型没有返回图片内容。');
    }

    return {
        imageUrl,
        model,
        requestSize: options.aspectRatio,
        aspectRatio: options.aspectRatio,
        quality: options.quality,
        requestUrl: 'runtime:imageGen',
        imageFormat: options.format || 'png'
    };
};

export const generatePromptSkillImage = async (
    options: PromptSkillImageOptions
): Promise<PromptSkillImageResult> => {
    const model = options.model || configService.getEngineModel('imageGen') || 'gpt-image-2';
    if (model.toLowerCase().startsWith('gpt-image')) {
        return generateWithOpenAIImage(options, model);
    }
    return generateWithRuntimeImage(options, model);
};
