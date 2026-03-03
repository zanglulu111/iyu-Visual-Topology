
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
    let table = "## 🧠 ENGINE PARAMETER DICTIONARY (REFERENCE ONLY)\n";
    table += "You must map the visual/text input to these specific IDs where applicable.\n\n";

    // Combine all aesthetic-related libraries
    const allLibraries = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY];

    AESTHETIC_ENGINE_BLOCKS.forEach(block => {
        table += `### [${block.id}] ${block.name} (${block.enName})\n`;

        // Find the library definition for this block
        const libId = block.id === 'skin_era' ? 'skin_era_lib' : `${block.id}_lib`;
        const category = allLibraries.find(c => c.id === libId);

        if (category && category.items) {
            // Optimization: Only listing Names and IDs to save tokens, 
            // but for "Core Logic" understanding, we might need definitions if the name isn't self-explanatory.
            // Here we provide ID and Name which is usually descriptive enough.
            const itemsList = category.items.map((item: LibraryItemDef) => {
                return `- "${item.name}" (ID: ${item.id})`;
            }).join(', ');
            table += `   Options: ${itemsList}\n`;
        } else {
            table += `   (Open Text Field)\n`;
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

export const generateAestheticReverse = async (
    textInput: string,
    base64Image: string | null
): Promise<string> => {

    // 1. Determine Mode
    let mode = "";
    if (base64Image && textInput) mode = "HYBRID (Image Style + Text Concept)";
    else if (base64Image) mode = "IMAGE REVERSE (Deconstruct Image)";
    else if (textInput) mode = "TEXT TO FORMULA (Concept Visualization)";
    else return "Error: No input provided.";

    // 2. Build the System Prompt
    const masterTable = compileMasterParameterTable();

    const prompt = `
Role: Visionary Art Director & Technical DOP.
Task: Analyze the input and map it to the Visionary Engine Parameters, outputting a structured "Visionary Directive".

## 1. MODE: ${mode}
${base64Image && textInput ? "- Use the IMAGE as the visual style/tone/composition reference.\n- Use the TEXT as the narrative subject/action/context." : ""}
${base64Image && !textInput ? "- Strictly deconstruct what you see in the image into engine parameters." : ""}
${!base64Image && textInput ? "- Hallucinate the most cinematic visual representation of the provided text concept." : ""}

## 2. OUTPUT FORMAT (STRICT)
You MUST output the result using the **compact template** below.
*   **NO** intro/outro text.
*   **NO** ":: VISIONARY STRUCTURAL DIRECTIVE ::" header.
*   **NO** Chinese in section headers (e.g. use "VISION", not "VISION / 视觉核").
*   **NO** numbering in section headers (e.g. use "SOUL", not "I. SOUL").
*   **NO** empty lines between sections. Keep it tight.

Template:
${VISIONARY_DIRECTIVE_FORMULA}

## 3. MAPPING LOGIC (INTELLIGENT TRANSCODING)
*   **DO NOT just copy-paste** the tag IDs (like {aes_light_mood}).
*   **TRANSCODE & EXPAND:** Replace the {brackets} with specific, descriptive **English keywords** derived from the Master Table.
    *   *Example:* Instead of returning "{aes_light_mood}", return "Chiaroscuro (High Contrast)".
    *   *Example:* Instead of "{aes_camera_system}", return "IMAX 70mm Film".
*   **Relevance:** If a parameter is not relevant (e.g. no hair), leave the value empty or omit the specific detail, but keep the line structure if other parts of the line are relevant.
*   **Language:** The content values should be primarily in **English** for better prompting compatibility, but you may include Chinese annotations in parentheses if it clarifies a specific cultural nuance.

${masterTable}

## 4. INPUT PROCESSING
User Input Text: "${textInput || "N/A"}"
[Image Attachment Processing...]
`;

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
