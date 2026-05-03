
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { configService } from '../src/services/configService';
import { AESTHETIC_ENGINE_BLOCKS, AESTHETIC_ENGINE_LIBRARY } from '../data/aesthetic_data';
import { SKIN_LIBRARY } from '../data/skin_libraries';
import { LibraryItemDef } from '../types';
import { runWithTask, getCallerName } from './taskManager';

// Helper to get a new AI instance with the current API key
const getAI = () => {
    try {
        const apiKey = configService.getApiKey();
        if (apiKey) {
            return new GoogleGenAI({ apiKey });
        }
    } catch (error) {
        console.warn('Failed to get config:', error);
    }
    // Fallback to environment variable
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// ============================================================================
// 1. DATA PREPARATION: MASTER PARAMETER TABLE
// 构建全量参数字典，让 AI 理解每个 ID 的含义
// ============================================================================

const compileMasterParameterTable = (): string => {
    let table = "## 引擎参数字典（仅供映射参考）\n";
    table += "你需要在合适时，把图像/文本输入映射到下列具体参数 ID。\n\n";

    // Combine all aesthetic-related libraries
    const allLibraries = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY];

    AESTHETIC_ENGINE_BLOCKS.forEach(block => {
        table += `### [${block.id}] ${block.name} (${block.enName})\n`;

        // Find the library definition for this block
        const libId = block.id === 'skin_era' ? 'skin_era_lib' : `${block.id}_lib`;
        const category = allLibraries.find(c => c.id === libId);

        if (category && category.items) {
            const itemsList = category.items.map((item: LibraryItemDef) => {
                return `- "${item.name}" (ID: ${item.id})`;
            }).join(', ');
            table += `   可选项: ${itemsList}\n`;
        } else {
            table += `   （开放文本字段）\n`;
        }
        table += "\n";
    });

    return table;
};

// ============================================================================
// 2. THE VISIONARY DIRECTIVE FORMULA
// 核心输出格式模板 (Updated: Granular Mapping)
// ============================================================================

const VISIONARY_DIRECTIVE_FORMULA = `VISION
> {Creative summary of the visual concept in English}
SUBJECT
> Identity: {aes_age} {aes_gender} {aes_ethnicity} {aes_body_type} ({aes_occupation} {aes_persona})
> Appearance: {aes_hair_color} {aes_hair_style_f/m} {aes_eye_color} {aes_face_features}
> Action: {aes_action_static} {aes_action_dynamic} {aes_action_complex}
SCENE
> Anchor: {skin_era} {skin_location} {aes_scene_real/abstract}
> Context: {skin_society} {skin_ideology}
> Atmosphere: {aes_atmosphere} {aes_particles} {aes_weather}
CINEMATOGRAPHY
> Camera: {aes_camera_system} + {aes_optical_format}
> Lens: {aes_lens_series} + {aes_focal_length}
> Optics: {aes_depth} + {aes_shutter} + {aes_lens_fx}
> Composition: {aes_image_focus} + {aes_shot_size} + {aes_angle} + {aes_perspective} + {aes_visual_balance}
> Lighting: {aes_light_mood} + {aes_light_type} + {aes_light_direction} + {aes_light_shape}
AESTHETICS
> Core Style: {aes_director_style} {aes_photo_style} {aes_art_style} {aes_anim_director} {aes_art_movement} {aes_poster_style}
> Process: {aes_base_tone} + {aes_color_science} + {aes_physical_grain}
> Texture: {aes_texture_render} + {aes_art_medium} + {aes_line_quality} + {aes_canvas_texture}
> Color: {aes_color_palette}
> Render: {aes_render_real} / {aes_render_art}`;

// ============================================================================
// 3. MAIN SERVICE FUNCTION
// ============================================================================

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
    console.error(`[AestheticReverseError] ${context}:`, e);
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

export const buildAestheticReversePrompt = (
    textInput: string,
    base64Image: string | null
): string => {
    // 1. 判断输入模式
    let mode = "";
    if (base64Image && textInput) mode = "图文混合：图像锁定视觉风格，文本锁定叙事概念";
    else if (base64Image) mode = "图像反推：严格拆解上传图像";
    else if (textInput) mode = "文本转公式：把概念视觉化";
    else return "错误：没有提供输入。";

    // 2. 构建系统指令
    const masterTable = compileMasterParameterTable();

    return `
角色：视觉艺术总监 / 技术摄影指导。
任务：分析输入内容，将其映射为 Visionary Engine 参数，并输出结构化的「Visionary Directive」。

## 1. 输入模式：${mode}
${base64Image && textInput ? "- 使用图像作为视觉风格、影调、构图、材质、光线参考。\n- 使用文本作为叙事主体、动作、关系、事件、语义概念。" : ""}
${base64Image && !textInput ? "- 严格拆解你在图像中看到的内容，并转译为引擎参数。" : ""}
${!base64Image && textInput ? "- 根据文本概念，推断最有电影感的视觉呈现方式。" : ""}

## 2. 输出格式（严格遵守）
你必须使用下面的紧凑模板输出结果。
*   不要写开场白或结束语。
*   不要添加 ":: VISIONARY STRUCTURAL DIRECTIVE ::" 之类额外标题。
*   模板中的章节标题保持英文，例如使用 "VISION"，不要写成 "VISION / 视觉核"。
*   章节标题不要编号，例如使用 "SUBJECT"，不要写成 "I. SUBJECT"。
*   各段之间不要插入空行，保持紧凑。

模板：
${VISIONARY_DIRECTIVE_FORMULA}

## 3. 映射逻辑（智能转译）
*   不要直接复制标签 ID，例如不要原样输出 {aes_light_mood}。
*   你要把花括号中的占位符，替换成来自参数字典的、具体的、可用于提示词的英文关键词。
    *   示例：不要返回 "{aes_light_mood}"，应返回 "Chiaroscuro (High Contrast)"。
    *   示例：不要返回 "{aes_camera_system}"，应返回 "IMAX 70mm Film"。
*   如果某个参数不相关，例如图像中没有头发，可以留空或省略该细节；但如果同一行仍有其他有效信息，应保留行结构。
*   输出值以英文为主，以保证后续图像提示词兼容性；如果某些文化细节必须解释，可以在括号中加入简短中文注释。

${masterTable}

## 4. 输入内容
用户文本输入：「${textInput || "未提供"}」
图像附件：${base64Image ? "已提供，请严格读取图像内容。" : "未提供。"}
`;
};

export const generateAestheticReverse = async (
    textInput: string,
    base64Image: string | null
): Promise<string> => {
    const prompt = buildAestheticReversePrompt(textInput, base64Image);

    if (prompt.startsWith("错误：")) return prompt;

    // 3. Call AI
    try {
        const parts: any[] = [{ text: prompt }];

        if (base64Image) {
            const base64Data = base64Image.split(',')[1] || base64Image;
            parts.push({
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: base64Data
                }
            });
        }

        const model = configService.getEngineModel('visualSeed');
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model || 'gemini-3-pro-image-preview',
            contents: { parts: parts }
        }));

        return response.text || "Analysis failed.";

    } catch (e: any) {
        handleApiError("Aesthetic Reverse Generation", e);
        return "Error generating aesthetic directive. Please try again.";
    }
};
