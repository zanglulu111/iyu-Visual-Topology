
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { runWithTask, getCallerName } from './taskManager';
import { configService } from '../src/services/configService';
import { GlobalVisualTone, MetonymyStylePreset, FinalAssetItem } from '../types';

export interface VisualBibleAnalysisHints {
    medium?: 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'tangible';
    dialogue?: string;
    detailImages?: string[]; // Array of base64 images
}

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
    return new GoogleGenAI({ apiKey: (typeof process !== 'undefined' && process.env.API_KEY) || "" });
};

const cleanAndParseJSON = (text: string) => {
    try {
        const firstBrace = text.indexOf('{');
        const lastBrace = text.lastIndexOf('}');

        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            const jsonString = text.substring(firstBrace, lastBrace + 1);
            try {
                return JSON.parse(jsonString);
            } catch (innerError) {
                // If it fails, usually it's due to unescaped newlines. 
                // A quick fix is to replace REAL newlines with escaped ones, 
                // but this is risky for structural ones. 
                // Let's try replacing all newlines EXCEPT ones that look like property boundaries.
                const fuzzyFixed = jsonString
                    .replace(/\n(?!\s*"[a-zA-Z0-9_]+"\s*:|\s*})/g, " ") // replace newline with space if not before a key or closing brace
                    .trim();
                try {
                    return JSON.parse(fuzzyFixed);
                } catch (fuzzyError) {
                    console.error("JSON parse failed even after fuzzy fix", fuzzyError);
                    return null;
                }
            }
        }

        const cleanText = text.replace(/```json\n|\n```/g, "").replace(/```/g, "").trim();
        return JSON.parse(cleanText);
    } catch (e) {
        console.error("Critical JSON Parse Error", e);
        return null;
    }
};

const getMimeTypeFromBase64 = (base64String: string): string => {
    const match = base64String.match(/^data:(.+);base64,/);
    return match ? match[1] : 'image/jpeg'; // Default to jpeg if not found
};

const getBase64Data = (base64String: string): string => {
    return base64String.split(',')[1] || base64String;
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
    console.error(`[VisualBibleError] ${context}:`, e);
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

// 2.1 Analyze Global Tone from Image (Omni-Visual DNA Map)
export const analyzeToneImage = async (imageUrl: string, hints?: VisualBibleAnalysisHints): Promise<GlobalVisualTone | null> => {
    const mimeType = getMimeTypeFromBase64(imageUrl);
    const imageBytes = getBase64Data(imageUrl);

    const hintText = hints ? `
        # 人工审核预设与约束 (HUMAN HINTS & CONSTRAINTS)
        ${hints.medium ? `*   **物理媒介 (Physical Medium):** ${hints.medium === 'PAINTING' ? '绘画/艺术媒介' : hints.medium === 'CGI' ? '计算生成/数字建模' : hints.medium === 'PHOTOGRAPHY' ? '镜头捕捉/写实摄影' : '实体手作/定格媒介'}` : ''}
        ${hints.dialogue ? `*   **人工引导说明 (Manual Guidance):** ${hints.dialogue}` : ''}
    ` : '';

    const systemInstruction = `
        You are a world-class film colorist and art director. 
        Your task is to analyze the provided "Tone Reference Image" and extract its visual DNA.
        
        ${hintText}

        Output a strict JSON object with these fields:
        {
          "styleNameCN": "简短风格名 (中) (e.g. 暗黑魂系插画)",
          "styleNameEN": "Short Style Name (EN) (e.g. Dark Souls Concept Art)",
          
          "palette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
          
          "style": "中文 (e.g. 暗黑奇幻，厚涂风格)",
          "styleEn": "EN (e.g. Dark Fantasy, Impasto)",

          "lighting": "中文 (必须包含光比、色温、色调) (e.g. 高反差，3200K暖调，青色偏移)",
          "lightingEn": "EN (e.g. High Contrast, 3200K Warm, Cyan Tint)",
          
          "camera": "中文 (e.g. 数字插画，布面纹理)",
          "cameraEn": "EN (e.g. Digital Illustration, Canvas Texture)",
          
          "texture": "中文 (e.g. 粗糙笔触，油画质感)",
          "textureEn": "EN (e.g. Heavy Brushstrokes, Painterly)"
        }
    `;

    const tonePrompt = `
        Role: 资深美术指导 & 调色师 (Senior Art Director & Colorist).

        # 任务 (Task)
        提取图像的 **"全局视觉基因 (Global Visual DNA)"**。
        
        ${hintText}

        # 步骤 1: 严格媒介分类 (STRICT MEDIA CLASSIFICATION)
        必须精准区分以下类。**严禁**混淆。
        
        *   **TYPE A: 摄影 (Photography)** -> 关键词: Film Grain, Arri Alexa, Realistic.
        *   **TYPE B: 绘画 (Painting/2D)** -> 关键词: **Visible Brushstrokes (可见笔触)**, Painterly, Concept Art, Illustration.
        *   **TYPE C: 3D 渲染 (3D Render)** -> 关键词: Unreal Engine, Octane, CGI, Plasticity, Raytracing.
        *   **TYPE D: 实体手作 (Tangible/Craft)** -> 关键词: Clay, Felt, Papercraft, Wool, Fibrous, Macro Photography of handmade objects.

        # 步骤 2: 参数提取协议 (PARAMETER EXTRACTION)
        **要求：** 输出必须**极度精简 (Concise)**，直击核心，**严禁**废话。

        **1. 艺术与风格 (Art & Style)**
        - 提取：核心流派、导演风格或画家风格。
        - **精简:** 限制在 15 字以内。

        **2. 光影与氛围 (Light & Atmosphere) - 关键修改**
        - **目标:** 提取 **全局影调 (Global Color Grading)**。
        - **禁止:** **严禁**描述具体的布光方式（如：伦勃朗光、蝴蝶光、顶光）。因为那是单镜头的，不是全局的。
        - **必须包含:**
            - **光比 (Contrast):** (e.g. High Contrast / Low Contrast).
            - **色温 (Temp):** (e.g. 6500K Cool / 3200K Warm / Neutral).
            - **色调 (Tint):** (e.g. Greenish tint / Magenta shift).
            - **影调 (Key):** (e.g. Low-key / High-key).

        **3. 媒介与格式 (Medium & Format)**
        - 若是绘画：Oil on Canvas / Digital Paint.
        - 若是摄影：Film Stock (e.g. Kodak Portra) / Digital.
        - **精简:** 限制在 10 字以内。

        **4. 质感与特征 (Texture & Character)**
        - 提取：噪点、笔触、光晕、锐度。

        # 输出格式 (STRICT JSON)
        {
          "styleNameCN": "简短风格名 (中) (e.g. 暗黑魂系插画)",
          "styleNameEN": "Short Style Name (EN) (e.g. Dark Souls Concept Art)",
          
          "palette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
          
          "style": "中文 (e.g. 暗黑奇幻，厚涂风格)",
          "styleEn": "EN (e.g. Dark Fantasy, Impasto)",

          "lighting": "中文 (必须包含光比、色温、色调) (e.g. 高反差，3200K暖调，青色偏移)",
          "lightingEn": "EN (e.g. High Contrast, 3200K Warm, Cyan Tint)",
          
          "camera": "中文 (e.g. 数字插画，布面纹理)",
          "cameraEn": "EN (e.g. Digital Illustration, Canvas Texture)",
          
          "texture": "中文 (e.g. 粗糙笔触，油画质感)",
          "textureEn": "EN (e.g. Heavy Brushstrokes, Painterly)"
        }
    `;
    try {
        const model = configService.getEngineModel('visualBible') || 'gemini-3.1-pro-preview';
        console.log(`[VisualBible] Analyzing Tone Image with model: ${model}, Hints: ${JSON.stringify(hints)}`);
        const res = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: tonePrompt }, { inlineData: { mimeType, data: imageBytes } }] },
            config: { responseMimeType: 'application/json' }
        }));

        return cleanAndParseJSON(res.text || "");
    } catch (e: any) {
        handleApiError("Tone Analysis Failed", e);
        return null;
    }
};

export const analyzeAssetImage = async (imageUrl: string, type: 'CHARACTER' | 'SCENE' | 'PROP' | 'OBJECT', hints?: VisualBibleAnalysisHints, assetName?: string): Promise<{ anchors: string, anchorsEn: string, description: string, descriptionEn: string, designPrompt?: string, designPromptEn?: string, conceptPrompt?: string, conceptPromptEn?: string } | null> => {
    const mimeType = getMimeTypeFromBase64(imageUrl);
    const imageBytes = getBase64Data(imageUrl);

    const hintText = hints ? `
        # 人工审核预设与约束 (HUMAN HINTS & CONSTRAINTS)
        ${hints.medium ? `*   **物理媒介 (Physical Medium):** ${hints.medium === 'PAINTING' ? '绘画/艺术媒介' : hints.medium === 'CGI' ? '计算生成/数字建模' : hints.medium === 'PHOTOGRAPHY' ? '镜头捕捉/写实摄影' : '实体手作/定格媒介'}` : ''}
        ${hints.dialogue ? `*   **人工引导说明 (Manual Guidance):** ${hints.dialogue}` : ''}
        
        # ⚠️ 绝对核心准则 (ABSOLUTE CORE RULES)
        1. **信息保真：** 必须完全以上传的资产主图${hints.detailImages?.length ? '以及附加的细节参考图' : ''}为绝对标准。
        2. **禁止擅自“加戏”：** 绝不要增加主图${hints.detailImages?.length ? '或参考图' : ''}里没有的武器、道具、配饰或花纹。严格参考图像内容。
        3. **推演规则：** 假如主图是半身照，你需要推测出符合其风格的全身图下半身，但绝不要试图给它手里塞一把没出现过的剑，或者头上加一个没出现过的帽子。
        4. **以图像为主导：** 所有的文字生成必须建立在我们提供的图片基础上，绝不能凭空捏造。
        5. **主体细节与风格分离：** description 字段（主体细节）**仅仅**负责描述画中资产（角色、场景、道具）本身的视觉外观特征（长相、服装、结构等）。**绝对不要**在 description 字段中说“这是一幅xx作品”、“图为一张xx画作”、“采用了xx风格/材质”。画风和参数的反推只允许放在 technical_details 中。
    ` : `
        # ⚠️ 绝对核心准则 (ABSOLUTE CORE RULES)
        1. **信息保真：** 必须完全以上传的资产主图为绝对标准。
        2. **禁止擅自“加戏”：** 绝不要增加主图里没有的武器、道具、配饰或花纹。严格参考图像内容。
        3. **推演规则：** 假如主图是半身照，你需要推测出符合其风格的全身图下半身，但绝不要试图给它手里塞一把没出现过的剑，或者头上加一个没出现过的帽子。
        4. **以图像为主导：** 所有的文字生成必须建立在我们提供的图片基础上，绝不能凭空捏造。
        5. **主体细节与风格分离：** description 字段（主体细节）**仅仅**负责描述画中资产（角色、场景、道具）本身的视觉外观特征（长相、服装、结构等）。**绝对不要**在 description 字段中说“这是一幅xx作品”、“图为一张xx画作”、“采用了xx风格/材质”。画风和参数的反推只允许放在 technical_details 中。
    `;

    let nameInstruction = "";
    if (assetName) {
        const typeStr = type === 'CHARACTER' ? 'Character' : type === 'SCENE' ? 'Scene' : 'Prop';
        nameInstruction = `
        # 🎯 强制文字渲染排版 (MANDATORY TEXT RENDERING)
        *   **目标:** 在生成的提示词中，**必须**明确要求在图像的左上角 (Top-Left corner) 写上这段特定的文字：“${typeStr}: ${assetName}”。
        *   **示例提示词追加:** "Explicitly include the text '${typeStr}: ${assetName}' prominently written in the top left corner of the image using a clean, bold font." (英文提示词) / "在图像左上角用清晰醒目的字体渲染出文字「${typeStr}: ${assetName}」。" (中文提示词)
        `;
    }

    // Dynamic instructions based on asset type
    let typeSpecificInstruction = "";
    if (type === 'SCENE') {
        typeSpecificInstruction = `
        # 🎯 聚焦：仅环境 (无人物)
        *   **目标:** 描述地点、建筑、光照、氛围、时间和空间情绪。
        *   **反向约束 (关键):** 完全忽略图中的任何角色、人物或身影。
        `;
    } else if (type === 'PROP' || type === 'OBJECT') {
        typeSpecificInstruction = `
        # 🎯 聚焦：仅物体 (无背景/持有者)
        *   **目标:** 描述具体的物品/道具 (材质、磨损程度、形状、设计细节)。
        *   **反向约束 (关键):** 完全忽略背景、环境或任何持有该物体的人。
        `;
    } else {
        typeSpecificInstruction = `
        # 🎯 聚焦：角色身份
        *   **目标:** 描述角色的物理外貌、面部特征、服饰和神态。
        `;
    }

    let systemInstruction = "";
    if (type === 'CHARACTER') {
        systemInstruction = `
      You are an expert concept artist and prompt engineer.
      Analyze the uploaded image as a CHARACTER reference.
      
      Your goal is to generate a prompt that will recreate this character in a specific "Character Design Sheet" layout, maintaining ABSOLUTE fidelity to the original style, colors, and features.
      
      Output a STRICT JSON object with the following structure:
      {
        "description": "Visual description in Chinese. ONLY describe physical features and clothing. DO NOT mention art style, medium, or that it is a painting/photo.",
        "descriptionEn": "Visual description in English. ONLY describe physical features and clothing. DO NOT mention art style, medium, or that it is a painting/photo.",
        "anchors": "3-5 key tags in Chinese",
        "anchorsEn": "3-5 key tags in English",
        "prompt": "<Generate a highly detailed English prompt describing a 16:9 design sheet. You MUST output EXACTLY this structure with the bracketed parts filled in: Create a professional character design sheet with a 16:9 layout. [TOP LEFT CORNER]: Explicitly write the text '--Role: [insert character name if provided, OR if none, a brief descriptive visual title like 'White-haired elder', DO NOT invent proper names]'. [LEFT PANEL (30% Width)]: A vertical column containing 3 distinct portrait formats of the character's face/head (Front, 3/4 Side, Profile angle). [CENTER PANEL (40% Width)]: The top section shows a neat row of full-body views from all angles (Front, 3/4 Front, Side, 3/4 Back, Back). Describe the clothing in extreme detail. **CRITICAL: If the reference is a half-body shot, logically infer the matching lower body (e.g., specific pants or skirt) and apply it completely consistently across ALL views and the action pose. Do not mix skirts and pants.** The bottom section shows an action pose of the character. [RIGHT PANEL (30% Width)]: Show detailed props/accessories. MUST include text labels under each prop explicitly naming it. Also include a vertical color palette strip on the far right. [BOTTOM ROW]: A horizontal strip of 7 square panels showcasing extreme close-up details: 1) [detail 1], 2) [detail 2], etc. MUST include clear text labels under each of the 7 panels explicitly stating what the detail is (e.g., 'leather boots', 'butterfly tattoo'). DO NOT include any other random text on the page. The image MUST use a clean, solid neutral color background. Maintain ABSOLUTELY identical style to the reference image (including the degree of realism, whether it's photography or animation, rendering method, material texture, color grading, and overall aesthetic style). High resolution, 8k.>",
        "promptCN": "<Generate a Chinese prompt following EXACTLY this structure, substituting only the bracketed parts with specific details. DO NOT include these instructions in your output, START YOUR OUTPUT DIRECTLY WITH '生成一张': 生成一张专业的角色设定图。采用 16:9 布局。排版如下：【左上角】：明确写上文字“--角色：[如果用户有输入资产名称则直接写该名称，如果没有则根据画面拟定一个纯描述性的称呼如‘白发老人’，绝不可乱编姓名]”。【左侧面板 (30%宽度)】：该角色的三个不同形态的脸部特写（正面、3/4侧面、侧脸）。【中央面板 (40%宽度)】：上半部分展示一排的全身各角度视图（正面, 3/4正面, 侧面, 3/4背面, 背面），[在此描写服装。!!强烈注意!!：如果原片只有半身，你必须合理推测下半身穿着（如裙子或裤子的款式），且【必须】保证多视图与下方的动作姿态图中人物的服饰【完全一致】，绝不能多视图穿裤子而动作姿势穿裙子]；下半部分展示同一个角色的一个动作姿态。【右侧面板 (30%宽度)】：[详细列出道具及武器]，且【必须】在道具下方用文字写上名称标注（如‘雪饮狂刀’），并在最右侧边缘附带色卡。【底部排】：水平排列的 7 个特写正方形方块，展示细节：1)[特写1], 2)[特写2]...，且【必须】在每个特写的底下写上该特写的名称标注（例如：‘布鞋’、‘皮鞋’、‘蝴蝶纹身’）。画面中除了明确要求的标注点外，不要有其他的多余文字。使用干净、素色的中性背景。保持与参考图完全一致的风格（包括写实程度、这是摄影还是动画、渲染方式、材质质感、色彩处理和整体美学风格）。高分辨率，8k。>",
        "conceptPromptEn": "<Generate a highly detailed English prompt describing a 16:9 concept art sheet. You MUST output EXACTLY this structure with the bracketed parts filled in with specific visual details from the image: Create a professional character concept art sheet with a 16:9 layout. [TOP LEFT CORNER]: Explicitly write the text '--Role: [insert character name if any, otherwise leave blank]'. [LEFT PANEL (35% Width)]: A highly detailed character portrait close-up showing [insert face and upper body details]. [RIGHT PANEL (65% Width)]: A 3-view turnaround of the character (Front, Side, Back) showing [insert highly detailed clothing/armor descriptions from the image]. Throughout the sheet, include small text labels pointing to detailed feature names: [list 3-5 specific key accessories/details from the image to be labeled]. The image MUST use a clean, solid neutral color background. Maintain ABSOLUTELY identical style to the reference image (including the degree of realism, whether it's photography or animation, rendering method, material texture, color grading, and overall aesthetic style). High resolution, 8k.>",
        "conceptPrompt": "<Generate a Chinese prompt following EXACTLY this structure, substituting only the bracketed parts with specific details from the image. DO NOT include these instructions in your output, START YOUR OUTPUT DIRECTLY WITH '生成一张': 生成一张专业的角色概念设定图。采用 16:9 布局。排版如下：【左上角】：明确写上文字“--角色：[如果图中有名字则填写，否则留空]”。【左侧面板 (35%宽度)】：一个极致清晰的角色头部与上半身特写，展示[在此处仔细描写脸部和上半身细节]。【右侧面板 (65%宽度)】：角色的三视图（正面、侧面、背面），展示[在此处仔细描写图中完整的服装外观和材质细节]。在整个画面中，用细微的文字标签旁注标出细节特征的名称：[详细列出原图中3-5个真实存在的显著细节或配饰作为标签标注]。使用干净、素色的中性背景。保持与参考图完全一致的风格（包括写实程度、这是摄影还是动画、渲染方式、材质质感、色彩处理和整体美学风格）。高分辨率，8k。>",
        "technical_details": {
          "lighting": "e.g. Studio lighting",
          "camera": "e.g. Telephoto",
          "style": "e.g. Concept Art"
        }
      }
      `;
    } else if (type === 'SCENE') {
        systemInstruction = `
      You are an expert concept artist and prompt engineer.
      Analyze the uploaded image as a SCENE/ENVIRONMENT reference.
      
      Determine if the scene is an INTERIOR (inside a building/room) or an EXTERIOR (landscape/outside).
      Your goal is to generate a prompt that will recreate this scene in a specific "Environment Design Sheet" layout, maintaining ABSOLUTE fidelity to the original style, colors, and features.
      
      If it is an INTERIOR scene, use this layout logic:
      "Create a professional Interior Environment Concept Art design sheet for a cinematic scene, with a specific 16:9 layout. The layout is divided as follows: CENTER PANEL (50% Width): A large, highly detailed cinematic wide shot of the interior room showing the complete architectural structure and furniture layout. LEFT PANEL (20% Width): A vertical column showing 3 alternative camera angles with text labels: 1) 'Reverse Angle' (showing the opposite view of the main shot), 2) 'Top-Down View' (layout/floor plan), 3) 'Side View'. TOP ROW (Above Center, 15% Height): 3 thumbnails showing lighting variations of the same room with text labels: 1) 'Daytime / Natural Light', 2) 'Sunset / Golden Hour', 3) 'Night / Artificial Lights'. RIGHT PANEL (10% Width): A vertical color palette strip showing primary, secondary, and accent colors. BOTTOM ROW (20% Height): A horizontal strip of 5 circular or square panels showcasing extreme close-up material details: 1) wall texture/wallpaper, 2) flooring material (e.g., hardwood/marble), 3) upholstery fabric, 4) window curtain drape, 5) an intricate prop/decor detail (e.g., chandelier or vase)."

      If it is an EXTERIOR scene, use this layout logic:
      "Create a professional Exterior Environment Concept Art design sheet for a cinematic landscape, with a specific 16:9 layout. The layout is divided as follows: CENTER PANEL (50% Width): A massive, breathtaking establishing wide shot of the exterior landscape and architecture, showing massive scale and geography. LEFT PANEL (20% Width): A vertical column showing 3 alternative camera angles with text labels: 1) 'Reverse Angle' (looking outward from the architecture), 2) 'Bird's-Eye View' (top-down terrain), 3) 'Side Profile / Close-up view'. TOP ROW (Above Center, 15% Height): 3 thumbnails showing weather and atmospheric variations of the main shot with text labels: 1) 'Clear Sunny Day', 2) 'Moody Atmospheric Fog', 3) 'Dark Stormy Night / Nighttime'. RIGHT PANEL (10% Width): A vertical color palette strip (earth tones, sky colors) and a small human silhouette for scale reference. BOTTOM ROW (20% Height): A horizontal strip of 5 square panels showcasing extreme close-up environmental textures: 1) weathered stone/ruin masonry, 2) climbing vines/moss/foliage, 3) ground terrain (dirt/mud/grass), 4) structural detail (e.g., a broken window or battlement), 5) background elements (e.g., tree bark or distant mountains)."

      Output a STRICT JSON object with the following structure:
      {
        "description": "Visual description in Chinese. ONLY describe the environment, architecture, and elements. DO NOT mention art style, medium, or that it is a painting/photo.",
        "descriptionEn": "Visual description in English. ONLY describe the environment, architecture, and elements. DO NOT mention art style, medium, or that it is a painting/photo.",
        "anchors": "3-5 key tags in Chinese",
        "anchorsEn": "3-5 key tags in English",
        "prompt": "<Generate a highly detailed English prompt describing a 16:9 design sheet. You MUST ADAPT the chosen layout (Interior or Exterior) by substituting generic terms with specific details from the image. For example, instead of 'wall texture', write 'cracked cobblestone wall texture'. Must strictly match original style. High res, 8k.>",
        "promptCN": "<翻译上方的英文 prompt 为极其详细的中文排版指令。千万不要照抄通用词汇，必须将诸如【墙壁纹理】、【地面材质】等替换为画面中的实际元素细节。画风和特征必须与参考图绝对一致。高分辨率，8k。>",
        "conceptPromptEn": "<Generate a highly detailed English prompt describing a 16:9 concept art sheet. You MUST output EXACTLY this structure with the bracketed parts filled in: Create a professional Environment Concept Art design sheet with a 16:9 layout. The layout is divided into 4 equal quadrants. [TOP LEFT]: The original main wide shot of the scene showing [insert highly detailed description of the main environment]. [TOP RIGHT]: 'Reverse Angle' showing the opposite view of the main shot, detailing [describe the reverse view]. [BOTTOM LEFT]: 'Top-Down View' (layout/floor plan) if interior, or 'Bird's-Eye View' if exterior, showing [describe the top-down arrangement]. [BOTTOM RIGHT]: 'Side View' showing [describe the side profile view]. Each quadrant MUST have a text label stating its view angle. The image MUST use a clean, solid neutral color background. Maintain ABSOLUTELY identical style to the reference image (including realism, medium, rendering, and overall aesthetic style). High resolution, 8k.>",
        "conceptPrompt": "<Generate a Chinese prompt following EXACTLY this structure, substituting only the bracketed parts with specific details. DO NOT include these instructions in your output, START YOUR OUTPUT DIRECTLY WITH '生成一张': 生成一张专业的场景概念设定图。采用 16:9 布局。排版清晰地分为四个相等的象限区块（左上、右上、左下、右下）。【左上】：场景的原始主视角全景，展示[在此处仔细描写场景的主视觉环境细节]。【右上】：“反向视角（Reverse Angle）”，展示主视角的相反方向，包含[描写反向视角的细节]。【左下】：若是室内则为“俯视图（Top-Down View/平面图）”，若是室外则为“鸟瞰图（Bird's-Eye View）”，展示[描写俯视的布局安排]。【右下】：“侧视图（Side View）”，展示[描写侧面的轮廓与结构细节]。每个象限区块的下方【必须】包含明确的文字标签，标明该区块的视角视角名称（如‘Reverse Angle’）。使用干净、素色的中性背景。保持与参考图完全一致的风格（包括写实程度、渲染方式、材质质感、色彩处理和整体美学风格）。高分辨率，8k。>",
        "technical_details": {
          "lighting": "e.g. Atmospheric",
          "camera": "e.g. Wide angle",
          "style": "e.g. Concept Art"
        }
      }
      `;
    } else {
        systemInstruction = `
      You are an expert concept artist and prompt engineer.
      Analyze the uploaded image as a PROP/OBJECT reference.
      
      Your goal is to generate a prompt that will recreate this prop in a specific "Industrial Design Sheet" layout, maintaining ABSOLUTE fidelity to the original style, colors, and features.
      
      Output a STRICT JSON object with the following structure:
      {
        "description": "Visual description in Chinese. ONLY describe the object's physical appearance, materials, and structure. DO NOT mention art style, medium, or that it is a painting/photo.",
        "descriptionEn": "Visual description in English. ONLY describe the object's physical appearance, materials, and structure. DO NOT mention art style, medium, or that it is a painting/photo.",
        "anchors": "3-5 key tags in Chinese",
        "anchorsEn": "3-5 key tags in English",
        "prompt": "<Generate a highly detailed English prompt describing a 16:9 industrial design sheet. You MUST ADAPT the layout by substituting generic terms with specific details from the object in the image. Layout: TOP: Left (50%): 3/4 perspective. Right (50%): Orthographic views. BOTTOM: 4 panels: 1) [specific internal structure/X-ray of the object], 2) [specific extreme close-up of its material], 3) [specific functional demo/assembly], 4) [alternative color/material variant]. Must strictly match original style. High res, 8k.>",
        "promptCN": "<翻译上方的英文 prompt 为极其详细的中文排版指令。千万不要照抄通用词汇，必须将【内部结构】、【材质特写】等替换为针对该具体物体的详细描述。画风和特征必须与参考图绝对一致。高分辨率，8k。>",
        "technical_details": {
          "lighting": "e.g. Product lighting",
          "camera": "e.g. Macro",
          "style": "e.g. Industrial Design"
        }
      }
      `;
    }

    const fullPrompt = `${systemInstruction}\n\n${hintText}\n\n${nameInstruction}\n\n${typeSpecificInstruction}`;
    let parts: any[] = [{ text: fullPrompt }, { inlineData: { mimeType, data: imageBytes } }];
    if (hints?.detailImages?.length) {
        hints.detailImages.forEach(imgBase => {
            parts.push({
                inlineData: {
                    mimeType: getMimeTypeFromBase64(imgBase),
                    data: getBase64Data(imgBase)
                }
            });
        });
    }

    try {
        const model = configService.getEngineModel('visualBible') || 'gemini-3.1-pro-preview';
        console.log(`[VisualBible] Analyzing Asset Image (${type}) with model: ${model}`);
        const res = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json' }
        }));

        const rawJson = cleanAndParseJSON(res.text || "");
        if (!rawJson) return null;

        const builtPrompt = rawJson.prompt
            ? `${rawJson.prompt}\n\nSubject Details: ${rawJson.descriptionEn || rawJson.description || ''}\nStyle and Details: ${rawJson.technical_details?.style || ''}, ${rawJson.technical_details?.lighting || ''}, ${rawJson.technical_details?.camera || ''}`
            : (rawJson.designPromptEn || rawJson.designPrompt || '');

        const builtPromptCN = rawJson.promptCN
            ? `${rawJson.promptCN}\n\n主体细节: ${rawJson.description || rawJson.descriptionEn || ''}\n风格与参数: ${rawJson.technical_details?.style || ''}, ${rawJson.technical_details?.lighting || ''}, ${rawJson.technical_details?.camera || ''}`
            : builtPrompt;

        const rawConceptEn = rawJson.conceptPromptEn || rawJson.conceptPromptEN || rawJson.concept_prompt_en;
        const rawConceptCn = rawJson.conceptPrompt || rawJson.conceptPromptCN || rawJson.conceptPromptCn || rawJson.concept_prompt_cn || rawConceptEn;

        const builtConceptPrompt = rawConceptEn
            ? `${rawConceptEn}\n\nSubject Details: ${rawJson.descriptionEn || rawJson.description || ''}\nStyle and Details: ${rawJson.technical_details?.style || ''}, ${rawJson.technical_details?.lighting || ''}, ${rawJson.technical_details?.camera || ''}`
            : undefined;

        const builtConceptPromptCN = rawConceptCn
            ? `${rawConceptCn}\n\n主体细节: ${rawJson.description || rawJson.descriptionEn || ''}\n风格与参数: ${rawJson.technical_details?.style || ''}, ${rawJson.technical_details?.lighting || ''}, ${rawJson.technical_details?.camera || ''}`
            : builtConceptPrompt;

        return {
            anchors: rawJson.anchors || '',
            anchorsEn: rawJson.anchorsEn || '',
            description: rawJson.description || '',
            descriptionEn: rawJson.descriptionEn || '',
            designPrompt: builtPromptCN,
            designPromptEn: builtPrompt,
            conceptPrompt: builtConceptPromptCN,
            conceptPromptEn: builtConceptPrompt
        };
    } catch (e: any) {
        handleApiError("Asset Analysis Failed", e);
        return null;
    }
}

export const analyzeImageBasedVisualBible = async (preset: MetonymyStylePreset, hints?: VisualBibleAnalysisHints): Promise<MetonymyStylePreset> => {
    // 1. Analyze Tone (if image exists)
    let tone: GlobalVisualTone | null = null;
    if (preset.toneImage) {
        tone = await analyzeToneImage(preset.toneImage, hints);
    }

    // Deep copy assets to avoid mutation issues
    const newAssets = {
        characters: [...(preset.assets?.characters || [])],
        scenes: [...(preset.assets?.scenes || [])],
        props: [...(preset.assets?.props || [])]
    };

    // Optimized: Parallel analysis for all assets
    const characterPromises = newAssets.characters.map(async (char, i) => {
        if (char.imageUrl) {
            const assetHints = char.designConfig || hints;
            const analysis = await analyzeAssetImage(char.imageUrl, 'CHARACTER', assetHints, char.name);
            if (analysis) {
                newAssets.characters[i] = {
                    ...char,
                    analysis: {
                        ...char.analysis,
                        anchors: analysis.anchors,
                        anchorsEn: analysis.anchorsEn,
                        description: analysis.description,
                        descriptionEn: analysis.descriptionEn,
                        designPrompt: (analysis as any).designPrompt,
                        designPromptEn: (analysis as any).designPromptEn,
                        conceptPrompt: (analysis as any).conceptPrompt,
                        conceptPromptEn: (analysis as any).conceptPromptEn
                    }
                };
            }
        }
    });

    const scenePromises = newAssets.scenes.map(async (scene, i) => {
        if (scene.imageUrl) {
            const assetHints = scene.designConfig || hints;
            const analysis = await analyzeAssetImage(scene.imageUrl, 'SCENE', assetHints, scene.name);
            if (analysis) {
                newAssets.scenes[i] = {
                    ...scene,
                    analysis: {
                        ...scene.analysis,
                        anchors: analysis.anchors,
                        anchorsEn: analysis.anchorsEn,
                        description: analysis.description,
                        descriptionEn: analysis.descriptionEn,
                        designPrompt: (analysis as any).designPrompt,
                        designPromptEn: (analysis as any).designPromptEn,
                        conceptPrompt: (analysis as any).conceptPrompt,
                        conceptPromptEn: (analysis as any).conceptPromptEn
                    }
                };
            }
        }
    });

    const propPromises = newAssets.props.map(async (prop, i) => {
        if (prop.imageUrl) {
            const assetHints = prop.designConfig || hints;
            const analysis = await analyzeAssetImage(prop.imageUrl, 'PROP', assetHints, prop.name);
            if (analysis) {
                newAssets.props[i] = {
                    ...prop,
                    analysis: {
                        ...prop.analysis,
                        anchors: analysis.anchors,
                        anchorsEn: analysis.anchorsEn,
                        description: analysis.description,
                        descriptionEn: analysis.descriptionEn,
                        designPrompt: (analysis as any).designPrompt,
                        designPromptEn: (analysis as any).designPromptEn,
                        conceptPrompt: (analysis as any).conceptPrompt,
                        conceptPromptEn: (analysis as any).conceptPromptEn
                    }
                };
            }
        }
    });

    await Promise.all([...characterPromises, ...scenePromises, ...propPromises]);

    return {
        ...preset,
        toneAnalysis: tone || preset.toneAnalysis,
        assets: newAssets,
        name: tone?.styleNameCN || preset.name,
        nameEn: tone?.styleNameEN || preset.nameEn
    };
};

export const generateTextBasedVisualBible = async (text: string, hints?: VisualBibleAnalysisHints): Promise<{ toneAnalysis: GlobalVisualTone, assets: any } | null> => {
    const hintText = hints ? `
        # 风格导向建议 (STYLE HINTS)
        ${hints.medium ? `*   **目标物理媒介:** ${hints.medium}` : ''}
        ${hints.dialogue ? `*   **用户补充要求:** ${hints.dialogue}` : ''}
    ` : '';

    const prompt = `
    Role: 美术指导 & 调色师 (Art Director & Colorist).
    Task: 通过幻视所提供故事文本的完美电影改编，创建一本 **“视觉圣经 (Visual Bible)”**（含影调与资产）。

    ${hintText}

    # 1. 视觉 DNA 提取 (VISUAL DNA EXTRACTION)
    基于文本的情绪和流派，幻视出一套连贯的视觉风格。
    **要求：输出极度精简 (Concise)。**
    
    *   **艺术与风格 (Art & Style):** 导演风格或艺术流派。
    *   **光影与氛围 (Light & Atmosphere):** **必须定义全局影调：光比 (Contrast), 色温 (Temp), 色调 (Tint)**。禁止描述单镜头的布光（如伦勃朗光）。
    *   **媒介与格式 (Medium & Format):** 胶片/数字/画布/手作。
    *   **质感与特征 (Texture & Character):** 颗粒感/笔触/绒毛感等。

    # 2. 资产提取 (ASSET EXTRACTION)
    识别文本中提到或暗示的关键 **角色 (Characters)**、**场景 (Scenes)** 和 **道具 (Props)**。
    为每一个资产发明具体的视觉细节（锚点 Anchors）。

    Source Text:
    "${text.slice(0, 3000)}"

    # OUTPUT FORMAT (STRICT JSON)
    {
      "toneAnalysis": {
        "styleNameCN": "简短风格名 (CN)",
        "styleNameEN": "Short Style Name (EN)",
        
        "palette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],

        "style": "CN summary of Art & Style",
        "styleEn": "EN summary",

        "lighting": "CN summary (包含光比、色温、色调) (e.g. 高反差，3200K暖调，青色偏移)",
        "lightingEn": "EN summary (e.g. High Contrast, 3200K Warm, Cyan Tint)",
        
        "camera": "CN summary",
        "cameraEn": "EN summary",

        "texture": "CN summary",
        "textureEn": "EN summary"
      },
      "assets": {
        "characters": [
          { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "CHARACTER", "analysis": { "anchors": "CN Visual Keywords", "anchorsEn": "EN Visual Keywords", "description": "CN Detailed Visual Desc", "descriptionEn": "EN Detailed Visual Description", "designPrompt": "Generate an elaborate CN Character Design Sheet prompt", "designPromptEn": "Generate an elaborate EN Character Design Sheet prompt", "conceptPrompt": "Generate an elaborate CN Character Concept prompt", "conceptPromptEn": "Generate an elaborate EN Character Concept prompt" } }
        ],
        "scenes": [
          { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "SCENE", "analysis": { "anchors": "CN Visual Keywords", "anchorsEn": "EN Visual Keywords", "description": "CN Detailed Visual Desc", "descriptionEn": "EN Detailed Visual Description", "designPrompt": "Generate an elaborate CN Scene/Environment Design Sheet prompt", "designPromptEn": "Generate an elaborate EN Scene/Environment Design Sheet prompt", "conceptPrompt": "Generate an elaborate CN Scene Concept prompt", "conceptPromptEn": "Generate an elaborate EN Scene Concept prompt" } }
        ],
        "props": [
          { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "PROP", "analysis": { "anchors": "CN Visual Keywords", "anchorsEn": "EN Visual Keywords", "description": "CN Detailed Visual Desc", "descriptionEn": "EN Detailed Visual Description", "designPrompt": "Generate an elaborate CN Prop Design Sheet prompt", "designPromptEn": "Generate an elaborate EN Prop Design Sheet prompt", "conceptPrompt": "Generate an elaborate CN Prop Concept prompt", "conceptPromptEn": "Generate an elaborate EN Prop Concept prompt"  } }
        ]
      }
    }
    `;

    try {
        const model = configService.getEngineModel('visualBible') || 'gemini-3.1-pro-preview';
        console.log(`[VisualBible] Generating Text-Based Bible with model: ${model}`);
        const res = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json' }
        }));
        const json = cleanAndParseJSON(res.text || "");
        if (json && json.assets) {
            ['characters', 'scenes', 'props'].forEach(type => {
                if (json.assets[type]) {
                    json.assets[type] = json.assets[type].map((a: any) => ({
                        ...a,
                        id: a.id || Date.now().toString() + Math.random().toString(36).slice(2, 7)
                    }));
                } else {
                    json.assets[type] = [];
                }
            });
        }
        return json;
    } catch (e: any) {
        handleApiError("Text Bible Gen Failed", e);
        return null;
    }
};

export async function generateDesignImage(
    prompt: string,
    referenceImage?: string
): Promise<string | null> {
    const model = configService.getEngineModel('imageGen') || 'gemini-3-pro-image-preview';
    const ai = getAI();
    const parts: any[] = [{ text: prompt }];

    if (referenceImage) {
        const mimeType = getMimeTypeFromBase64(referenceImage);
        const imageBytes = getBase64Data(referenceImage);
        parts.unshift({
            inlineData: {
                data: imageBytes,
                mimeType: mimeType
            }
        });
    }

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: { parts: parts },
            config: {
                // @ts-ignore
                imageConfig: {
                    aspectRatio: "16:9"
                }
            }
        });

        const candidates = (response as any).candidates;
        if (candidates?.[0]?.content?.parts) {
            for (const part of candidates[0].content.parts) {
                if (part.inlineData) return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
            }
        }

        return null;
    } catch (error: any) {
        handleApiError("Error generating design image", error);
        return null;
    }
}
