
import { GenerateContentResponse } from "@google/genai";
import { runWithTask, getCallerName } from './taskManager';
import { configService } from '../src/services/configService';
import { GlobalVisualTone, MetonymyStylePreset, FinalAssetItem } from '../types';
import { generateContentWithRuntime } from './geminiService';
import { generatePromptSkillImage } from './promptSkillImageService';

export interface VisualBibleAnalysisHints {
    medium?: 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'tangible';
    dialogue?: string;
    detailImages?: string[]; // Array of base64 images
}

const stripJsonFences = (text: string) =>
    text.replace(/```(?:json)?/gi, "").replace(/```/g, "").trim();

const extractFirstJsonBlock = (text: string): string => {
    const firstObject = text.indexOf('{');
    const firstArray = text.indexOf('[');
    const starts = [firstObject, firstArray].filter(index => index >= 0);
    if (!starts.length) return text;

    const start = Math.min(...starts);
    let objectDepth = 0;
    let arrayDepth = 0;
    let inString = false;
    let escape = false;

    for (let i = start; i < text.length; i++) {
        const char = text[i];
        if (escape) {
            escape = false;
            continue;
        }
        if (char === '\\' && inString) {
            escape = true;
            continue;
        }
        if (char === '"') {
            inString = !inString;
            continue;
        }
        if (inString) continue;

        if (char === '{') objectDepth++;
        if (char === '}') objectDepth--;
        if (char === '[') arrayDepth++;
        if (char === ']') arrayDepth--;

        if (i > start && objectDepth === 0 && arrayDepth === 0) {
            return text.slice(start, i + 1);
        }
    }

    return text.slice(start);
};

const escapeControlCharactersInStrings = (text: string): string => {
    let output = "";
    let inString = false;
    let escape = false;

    for (const char of text) {
        if (escape) {
            output += char;
            escape = false;
            continue;
        }
        if (char === '\\' && inString) {
            output += char;
            escape = true;
            continue;
        }
        if (char === '"') {
            inString = !inString;
            output += char;
            continue;
        }
        if (inString && char === '\n') {
            output += "\\n";
            continue;
        }
        if (inString && char === '\r') {
            output += "\\r";
            continue;
        }
        if (inString && char === '\t') {
            output += "\\t";
            continue;
        }
        output += char;
    }

    return output;
};

const insertLikelyMissingCommas = (text: string): string => {
    let output = "";
    let inString = false;
    let escape = false;
    let previousSignificant = "";

    for (const char of text) {
        if (escape) {
            output += char;
            escape = false;
            continue;
        }
        if (char === '\\' && inString) {
            output += char;
            escape = true;
            continue;
        }
        if (char === '"') {
            inString = !inString;
            output += char;
            previousSignificant = char;
            continue;
        }

        if (!inString) {
            if ((char === '{' || char === '[') && (previousSignificant === '}' || previousSignificant === ']')) {
                output += ",";
            }
            output += char;
            if (!/\s/.test(char)) previousSignificant = char;
            continue;
        }

        output += char;
    }

    return output;
};

const repairJsonCandidate = (text: string): string =>
    insertLikelyMissingCommas(escapeControlCharactersInStrings(text))
        .replace(/,\s*([}\]])/g, "$1")
        .trim();

const getParseErrorContext = (text: string, error: unknown): string => {
    const message = error instanceof Error ? error.message : String(error);
    const positionMatch = message.match(/position\s+(\d+)/);
    if (!positionMatch) return text.slice(0, 500);
    const position = Number(positionMatch[1]);
    const start = Math.max(0, position - 220);
    const end = Math.min(text.length, position + 220);
    return text.slice(start, end);
};

const cleanAndParseJSON = (text: string, options?: { silent?: boolean }) => {
    const cleaned = stripJsonFences(text);
    const extracted = extractFirstJsonBlock(cleaned);
    const candidates = Array.from(new Set([
        cleaned,
        extracted,
        repairJsonCandidate(cleaned),
        repairJsonCandidate(extracted),
    ])).filter(Boolean);

    let lastError: unknown = null;
    let lastCandidate = "";

    for (const candidate of candidates) {
        try {
            return JSON.parse(candidate);
        } catch (error) {
            lastError = error;
            lastCandidate = candidate;
        }
    }

    if (!options?.silent) {
        console.error("Visual Bible JSON parse failed", lastError, getParseErrorContext(lastCandidate, lastError));
    }
    return null;
};

const normalizeTextBasedVisualBible = (json: any): { toneAnalysis: GlobalVisualTone, assets: any } | null => {
    if (!json?.assets || !json?.toneAnalysis) return null;

    ['characters', 'scenes', 'props'].forEach(type => {
        if (Array.isArray(json.assets[type])) {
            json.assets[type] = json.assets[type].slice(0, 4).map((a: any) => ({
                ...a,
                id: a.id || Date.now().toString() + Math.random().toString(36).slice(2, 7),
                analysis: {
                    description: a.analysis?.description || '',
                    descriptionEn: a.analysis?.descriptionEn || '',
                    anchors: a.analysis?.anchors || '',
                    anchorsEn: a.analysis?.anchorsEn || '',
                    designPrompt: a.analysis?.designPrompt,
                    designPromptEn: a.analysis?.designPromptEn,
                    conceptPrompt: a.analysis?.conceptPrompt,
                    conceptPromptEn: a.analysis?.conceptPromptEn,
                }
            }));
        } else {
            json.assets[type] = [];
        }
    });

    return json;
};

const buildTextBasedVisualBibleRecoveryPrompt = (sourcePrompt: string, brokenOutput: string): string => `
你刚才输出的 JSON 被截断或无法解析。请重新生成一个更短、更稳的 JSON。

硬性要求：
- 只返回 raw JSON object，不要 markdown，不要解释。
- characters 最多 3 个，scenes 最多 3 个，props 最多 3 个。
- 不要输出 designPrompt、designPromptEn、conceptPrompt、conceptPromptEn。
- 每个 description 不超过 80 个中文字符；descriptionEn 不超过 25 个英文词。
- 每个 anchors / anchorsEn 不超过 6 个短词。
- 必须闭合所有字符串、数组和对象。

沿用原任务，但把输出压缩到最短：
${sourcePrompt}

上一轮坏输出末尾片段，仅用于判断失败位置，不要照抄：
${brokenOutput.slice(-1200)}
`;

const getMimeTypeFromBase64 = (base64String: string): string => {
    const match = base64String.match(/^data:(.+);base64,/);
    return match ? match[1] : 'image/jpeg'; // Default to jpeg if not found
};

const getBase64Data = (base64String: string): string => {
    return base64String.split(',')[1] || base64String;
};

const fetchImageViaProxy = async (imageUrl: string): Promise<Response> => {
    const parsed = new URL(imageUrl);
    return fetch(`/__api_proxy${parsed.pathname}${parsed.search}`, {
        headers: { 'X-Proxy-Target': parsed.origin }
    });
};

const toInlineImageData = async (image: string): Promise<{ mimeType: string; data: string }> => {
    if (image.startsWith('data:')) {
        return {
            mimeType: getMimeTypeFromBase64(image),
            data: getBase64Data(image)
        };
    }

    if (/^https?:\/\//i.test(image)) {
        let response: Response;
        try {
            response = await fetch(image);
        } catch {
            response = await fetchImageViaProxy(image);
        }

        if (!response.ok) {
            response = await fetchImageViaProxy(image);
        }
        if (!response.ok) throw new Error(`Image URL fetch failed: ${response.status}`);

        const blob = await response.blob();
        const mimeType = blob.type || 'image/jpeg';
        const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(String(reader.result || ''));
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        return { mimeType, data: getBase64Data(dataUrl) };
    }

    return { mimeType: 'image/jpeg', data: image };
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

const getVisualBibleMediumLabel = (medium?: VisualBibleAnalysisHints['medium']) => {
    if (medium === 'PAINTING') return '绘画/艺术媒介';
    if (medium === 'CGI') return '计算生成/数字建模';
    if (medium === 'PHOTOGRAPHY') return '镜头捕捉/写实摄影';
    if (medium === 'tangible') return '实体手作/定格媒介';
    return '';
};

const buildToneImageHintText = (hints?: VisualBibleAnalysisHints): string => hints ? `
        # 人工审核预设与约束 (HUMAN HINTS & CONSTRAINTS)
        ${hints.medium ? `*   **物理媒介 (Physical Medium):** ${getVisualBibleMediumLabel(hints.medium)}` : ''}
        ${hints.dialogue ? `*   **人工引导说明 (Manual Guidance):** ${hints.dialogue}` : ''}
    ` : '';

const buildAssetImageHintText = (hints?: VisualBibleAnalysisHints): string => hints ? `
        # 人工审核预设与约束 (HUMAN HINTS & CONSTRAINTS)
        ${hints.medium ? `*   **物理媒介 (Physical Medium):** ${getVisualBibleMediumLabel(hints.medium)}` : ''}
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

export const buildToneImageAnalysisPrompt = (hints?: VisualBibleAnalysisHints): string => {
    const hintText = buildToneImageHintText(hints);

    return `
        角色：资深美术指导 & 调色师 (Senior Art Director & Colorist)。

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
          "styleNameCN": "简短中文风格名，例如：暗黑魂系插画",
          "styleNameEN": "简短英文风格名，例如：Dark Souls Concept Art",
          
          "palette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
          
          "style": "中文艺术与风格摘要，例如：暗黑奇幻，厚涂风格",
          "styleEn": "英文艺术与风格摘要，例如：Dark Fantasy, Impasto",

          "lighting": "中文光影摘要，必须包含光比、色温、色调，例如：高反差，3200K暖调，青色偏移",
          "lightingEn": "英文光影摘要，例如：High Contrast, 3200K Warm, Cyan Tint",
          
          "camera": "中文媒介与格式摘要，例如：数字插画，布面纹理",
          "cameraEn": "英文媒介与格式摘要，例如：Digital Illustration, Canvas Texture",
          
          "texture": "中文质感摘要，例如：粗糙笔触，油画质感",
          "textureEn": "英文质感摘要，例如：Heavy Brushstrokes, Painterly"
        }
    `;
};

export const buildAssetImageAnalysisPrompt = (
    type: 'CHARACTER' | 'SCENE' | 'PROP' | 'OBJECT',
    hints?: VisualBibleAnalysisHints,
    assetName?: string
): string => {
    const hintText = buildAssetImageHintText(hints);

    let nameInstruction = "";
    if (assetName) {
        const typeStr = type === 'CHARACTER' ? 'Character' : type === 'SCENE' ? 'Scene' : 'Prop';
        nameInstruction = `
        # 🎯 强制文字渲染排版 (MANDATORY TEXT RENDERING)
        *   **目标:** 在生成的提示词中，**必须**明确要求在图像的左上角 (Top-Left corner) 写上这段特定的文字：“${typeStr}: ${assetName}”。
        *   **示例提示词追加:** "Explicitly include the text '${typeStr}: ${assetName}' prominently written in the top left corner of the image using a clean, bold font." (英文提示词) / "在图像左上角用清晰醒目的字体渲染出文字「${typeStr}: ${assetName}」。" (中文提示词)
        `;
    }

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
      角色：资深概念艺术家 & Prompt Engineer。
      任务：把上传图像作为 CHARACTER reference 进行解析。
      
      目标：生成能够复现该角色的 Character Design Sheet 指令；必须绝对忠实于原图的风格、颜色与可见特征。
      
      只输出 STRICT JSON object，结构如下：
      {
        "description": "中文视觉描述。只描述身体特征与服装，不要提艺术风格、媒介，也不要说这是一张画或照片。",
        "descriptionEn": "英文视觉描述。只描述身体特征与服装，不要提艺术风格、媒介，也不要说这是一张画或照片。",
        "anchors": "3-5 个中文关键标签",
        "anchorsEn": "3-5 个英文关键标签",
        "prompt": "<输出英文 prompt：描述一张 16:9 Character Design Sheet。必须包含：左上角文字 --Role: [角色名或纯视觉称呼]；左侧 30% 为正面、3/4 侧面、侧脸三种头像；中央 40% 为正面、3/4 正面、侧面、3/4 背面、背面全身多视图，并严格推断半身图缺失的下半身且全表一致；右侧 30% 展示道具/配饰与文字标签；底部 7 个细节特写方块并附标签；使用干净中性背景；保持与参考图完全一致的写实程度、摄影/动画属性、渲染方式、材质质感、色彩处理和整体美学。High resolution, 8k.>",
        "promptCN": "<输出中文 prompt：直接从“生成一张”开始，按上述 Character Design Sheet 结构生成中文排版指令；用原图中的具体细节替换所有占位内容；不得添加多余文字；保持与参考图完全一致的风格与特征。>",
        "conceptPromptEn": "<输出英文 prompt：描述一张 16:9 Character Concept Art Sheet。必须包含：左上角 --Role: [角色名，如无则留空]；左侧 35% 为高细节头像/上半身特写；右侧 65% 为 Front / Side / Back 三视图；标注 3-5 个原图真实存在的关键配饰或细节；中性纯色背景；保持与参考图完全一致的风格、材质、色彩和美学。High resolution, 8k.>",
        "conceptPrompt": "<输出中文 prompt：直接从“生成一张”开始，按上述角色概念设定图结构生成中文指令；所有占位内容必须替换为原图中的具体视觉细节。>",
        "technical_details": {
          "lighting": "例如：Studio lighting",
          "camera": "例如：Telephoto",
          "style": "例如：Concept Art"
        }
      }
      `;
    } else if (type === 'SCENE') {
        systemInstruction = `
      角色：资深概念艺术家 & Prompt Engineer。
      任务：把上传图像作为 SCENE / ENVIRONMENT reference 进行解析。
      
      先判断场景是 INTERIOR（室内/建筑内部）还是 EXTERIOR（室外/景观）。
      目标：生成能够复现该场景的 Environment Design Sheet 指令；必须绝对忠实于原图的风格、颜色与可见特征。
      
      如果是 INTERIOR scene，使用以下 layout logic:
      "Create a professional Interior Environment Concept Art design sheet for a cinematic scene, with a specific 16:9 layout. The layout is divided as follows: CENTER PANEL (50% Width): A large, highly detailed cinematic wide shot of the interior room showing the complete architectural structure and furniture layout. LEFT PANEL (20% Width): A vertical column showing 3 alternative camera angles with text labels: 1) 'Reverse Angle' (showing the opposite view of the main shot), 2) 'Top-Down View' (layout/floor plan), 3) 'Side View'. TOP ROW (Above Center, 15% Height): 3 thumbnails showing lighting variations of the same room with text labels: 1) 'Daytime / Natural Light', 2) 'Sunset / Golden Hour', 3) 'Night / Artificial Lights'. RIGHT PANEL (10% Width): A vertical color palette strip showing primary, secondary, and accent colors. BOTTOM ROW (20% Height): A horizontal strip of 5 circular or square panels showcasing extreme close-up material details: 1) wall texture/wallpaper, 2) flooring material (e.g., hardwood/marble), 3) upholstery fabric, 4) window curtain drape, 5) an intricate prop/decor detail (e.g., chandelier or vase)."

      如果是 EXTERIOR scene，使用以下 layout logic:
      "Create a professional Exterior Environment Concept Art design sheet for a cinematic landscape, with a specific 16:9 layout. The layout is divided as follows: CENTER PANEL (50% Width): A massive, breathtaking establishing wide shot of the exterior landscape and architecture, showing massive scale and geography. LEFT PANEL (20% Width): A vertical column showing 3 alternative camera angles with text labels: 1) 'Reverse Angle' (looking outward from the architecture), 2) 'Bird's-Eye View' (top-down terrain), 3) 'Side Profile / Close-up view'. TOP ROW (Above Center, 15% Height): 3 thumbnails showing weather and atmospheric variations of the main shot with text labels: 1) 'Clear Sunny Day', 2) 'Moody Atmospheric Fog', 3) 'Dark Stormy Night / Nighttime'. RIGHT PANEL (10% Width): A vertical color palette strip (earth tones, sky colors) and a small human silhouette for scale reference. BOTTOM ROW (20% Height): A horizontal strip of 5 square panels showcasing extreme close-up environmental textures: 1) weathered stone/ruin masonry, 2) climbing vines/moss/foliage, 3) ground terrain (dirt/mud/grass), 4) structural detail (e.g., a broken window or battlement), 5) background elements (e.g., tree bark or distant mountains)."

      只输出 STRICT JSON object，结构如下：
      {
        "description": "中文视觉描述。只描述环境、建筑和画面元素，不要提艺术风格、媒介，也不要说这是一张画或照片。",
        "descriptionEn": "英文视觉描述。只描述环境、建筑和画面元素，不要提艺术风格、媒介，也不要说这是一张画或照片。",
        "anchors": "3-5 个中文关键标签",
        "anchorsEn": "3-5 个英文关键标签",
        "prompt": "<输出英文 prompt：描述一张 16:9 Environment Design Sheet。必须根据 Interior 或 Exterior layout 替换所有泛称，把 wall texture / ground terrain 等写成原图中的具体元素，例如 cracked cobblestone wall texture。必须严格匹配原图风格。High res, 8k.>",
        "promptCN": "<翻译上方的英文 prompt 为极其详细的中文排版指令。千万不要照抄通用词汇，必须将诸如【墙壁纹理】、【地面材质】等替换为画面中的实际元素细节。画风和特征必须与参考图绝对一致。高分辨率，8k。>",
        "conceptPromptEn": "<输出英文 prompt：描述一张 16:9 Environment Concept Art Sheet。四等分象限：Top Left 为原始主广角；Top Right 为 Reverse Angle；Bottom Left 室内为 Top-Down View / 室外为 Bird's-Eye View；Bottom Right 为 Side View；每个象限必须有英文视角标签；中性纯色背景；保持与参考图完全一致的 realism、medium、rendering 和整体美学。High resolution, 8k.>",
        "conceptPrompt": "<输出中文 prompt：直接从“生成一张”开始，描述一张 16:9 专业场景概念设定图。四等分象限：左上原始主视角全景，右上 Reverse Angle，左下室内 Top-Down View / 室外 Bird's-Eye View，右下 Side View；所有占位内容必须替换为原图具体空间细节；每个象限下方必须有视角标签；保持与参考图完全一致的风格、材质、色彩和美学。>",
        "technical_details": {
          "lighting": "例如：Atmospheric",
          "camera": "例如：Wide angle",
          "style": "例如：Concept Art"
        }
      }
      `;
    } else {
        systemInstruction = `
      角色：资深概念艺术家 & Prompt Engineer。
      任务：把上传图像作为 PROP / OBJECT reference 进行解析。
      
      目标：生成能够复现该道具/物体的 Industrial Design Sheet 指令；必须绝对忠实于原图的风格、颜色与可见特征。
      
      只输出 STRICT JSON object，结构如下：
      {
        "description": "中文视觉描述。只描述物体外观、材料和结构，不要提艺术风格、媒介，也不要说这是一张画或照片。",
        "descriptionEn": "英文视觉描述。只描述物体外观、材料和结构，不要提艺术风格、媒介，也不要说这是一张画或照片。",
        "anchors": "3-5 个中文关键标签",
        "anchorsEn": "3-5 个英文关键标签",
        "prompt": "<输出英文 prompt：描述一张 16:9 Industrial Design Sheet。必须根据原图物体替换所有泛称。Layout: TOP 左 50% 为 3/4 perspective，右 50% 为 Orthographic views；BOTTOM 四格分别为：1) 该物体的具体 internal structure / X-ray，2) 具体材质 extreme close-up，3) 具体 functional demo / assembly，4) alternative color / material variant。必须严格匹配原图风格。High res, 8k.>",
        "promptCN": "<翻译上方的英文 prompt 为极其详细的中文排版指令。千万不要照抄通用词汇，必须将【内部结构】、【材质特写】等替换为针对该具体物体的详细描述。画风和特征必须与参考图绝对一致。高分辨率，8k。>",
        "technical_details": {
          "lighting": "例如：Product lighting",
          "camera": "例如：Macro",
          "style": "例如：Industrial Design"
        }
      }
      `;
    }

    return `${systemInstruction}\n\n${hintText}\n\n${nameInstruction}\n\n${typeSpecificInstruction}`;
};

// 2.1 Analyze Global Tone from Image (Omni-Visual DNA Map)
export const analyzeToneImage = async (imageUrl: string, hints?: VisualBibleAnalysisHints): Promise<GlobalVisualTone | null> => {
    const tonePrompt = buildToneImageAnalysisPrompt(hints);
    try {
        const inlineImage = await toInlineImageData(imageUrl);
        const model = configService.getEngineModel('visualBible') || 'gemini-3.1-pro-preview';
        console.log(`[VisualBible] Analyzing Tone Image with model: ${model}, Hints: ${JSON.stringify(hints)}`);
        const res = await retryWithBackoff<GenerateContentResponse>(() => generateContentWithRuntime({
            model: model,
            contents: { parts: [{ text: tonePrompt }, { inlineData: inlineImage }] },
            config: { responseMimeType: 'application/json', engineId: 'visualBible' }
        }));

        return cleanAndParseJSON(res.text || "");
    } catch (e: any) {
        handleApiError("Tone Analysis Failed", e);
        return null;
    }
};

export const analyzeAssetImage = async (imageUrl: string, type: 'CHARACTER' | 'SCENE' | 'PROP' | 'OBJECT', hints?: VisualBibleAnalysisHints, assetName?: string): Promise<{ anchors: string, anchorsEn: string, description: string, descriptionEn: string, designPrompt?: string, designPromptEn?: string, conceptPrompt?: string, conceptPromptEn?: string } | null> => {
    const fullPrompt = buildAssetImageAnalysisPrompt(type, hints, assetName);

    try {
        let parts: any[] = [{ text: fullPrompt }, { inlineData: await toInlineImageData(imageUrl) }];
        if (hints?.detailImages?.length) {
            const detailParts = await Promise.all(hints.detailImages.map(async imgBase => ({
                inlineData: await toInlineImageData(imgBase)
            })));
            parts = [...parts, ...detailParts];
        }

        const model = configService.getEngineModel('visualBible') || 'gemini-3.1-pro-preview';
        console.log(`[VisualBible] Analyzing Asset Image (${type}) with model: ${model}`);
        const res = await retryWithBackoff<GenerateContentResponse>(() => generateContentWithRuntime({
            model: model,
            contents: { parts: parts },
            config: { responseMimeType: 'application/json', engineId: 'visualBible' }
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

export const buildTextBasedVisualBiblePrompt = (text: string, hints?: VisualBibleAnalysisHints): string => {
    const hintText = hints ? `
        # 风格导向建议 (STYLE HINTS)
        ${hints.medium ? `*   **目标物理媒介:** ${hints.medium}` : ''}
        ${hints.dialogue ? `*   **用户补充要求:** ${hints.dialogue}` : ''}
    ` : '';

    return `
    角色：影视资产统筹 & 视觉连续性编辑 (Asset Continuity Supervisor & Visual Bible Editor)。
    任务：读取 SOURCE TEXT，生成 **“原文事实视觉圣经 (Source-Factual Visual Bible)”**。
    核心目标：提取全文已经出现或物理必然成立的视觉资产、外貌描述、材质事实和空间事实；不得提前建立最终美术风格、调色、媒介或滤镜。

    ${hintText}

    # 1. 全局视觉事实 (GLOBAL VISUAL FACTS)
    只基于源文本明示内容与物理必然性，提取可供后续分镜和生图保持一致的事实层。
    **不得写:** 导演风格、艺术流派、最终调色、滤镜、胶片颗粒、油画/动画/赛博朋克/哥特等视觉皮肤。
    
    *   **style:** 写世界视觉事实：时代、地域、建筑、服饰、自然环境、社会物质条件。
    *   **lighting:** 只写文本出现或物理必然的光源、时间、天气、遮挡、明暗关系。
    *   **texture:** 只写材质事实：石、木、布、金属、泥、血、雾、磨损、潮湿、灰尘等。
    *   **camera:** 只写从文本机制推出的观察倾向：远景建立、近景身体细节、主观视线、听觉/视觉限制等；不要写镜头品牌或媒介质感。
    *   **palette:** 只给“事实色板”，来自文本明示物体或环境固有色；不做调色方案。如果颜色未明示，用低饱和中性色占位。

    # 2. 资产提取 (ASSET EXTRACTION)
    识别全文中后续需要保持一致的 **角色 (Characters)**、**场景 (Scenes)** 和 **道具 (Props)**。
    资产必须是故事中已经出现、被明确提及、反复影响叙事，或对视觉连续性重要的对象。
    **数量上限:** characters 最多 4 个，scenes 最多 4 个，props 最多 4 个。次要或一次性出现的对象不要列入。

    # 3. 外貌描述必须回来 (CHARACTER APPEARANCE REQUIRED)
    每个角色资产的 description 必须是“外貌描述”，而不是性格、命运、主题解释。
    必须覆盖：
    *   年龄段/身体状态
    *   脸部、眼睛、头发、皮肤、伤痕或可见身体特征
    *   服装层次、材质、破损、污迹或时代性
    *   当前源文本能确认的姿态/携带物/可见状态
    如果源文本未明示某项，不要编造，写“未明示，需后续资产设计锁定”。

    # 4. 输出长度硬限制 (OUTPUT BUDGET)
    这是一次“全局原文反推”，不是资产生图提示词生成。
    **不要输出 designPrompt / designPromptEn / conceptPrompt / conceptPromptEn。**
    每个 anchors 最多 8 个短词；每个 description 最多 120 个中文字符；每个 descriptionEn 最多 35 个英文词。
    toneAnalysis 的 style / lighting / camera / texture 每项最多 80 个中文字符，对应英文最多 30 个英文词。
    如果信息不足，写“未明示，需后续资产设计锁定”，不要展开解释。

    # 5. 反比喻具象化 (ANTI-LITERAL METAPHOR)
    修辞比喻只能作为气氛、身体感或动作质感的依据，不能直译成真实道具、颜色、实体或声音来源。

    源文本 (Source Text):
    "${text.slice(0, 3000)}"

    # 输出格式 (STRICT JSON)
    {
      "toneAnalysis": {
        "styleNameCN": "原文事实视觉",
        "styleNameEN": "Source-Factual Visuals",
        
        "palette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],

        "style": "中文世界视觉事实摘要，只写事实层",
        "styleEn": "英文世界视觉事实摘要，只写事实层",

        "lighting": "中文事实光源/天气/时间摘要",
        "lightingEn": "英文事实光源/天气/时间摘要",
        
        "camera": "中文观察倾向/镜头倾向摘要，只来自故事机制",
        "cameraEn": "英文观察倾向/镜头倾向摘要，只来自故事机制",

        "texture": "中文事实材质与表面摘要",
        "textureEn": "英文事实材质与表面摘要"
      },
        "assets": {
        "characters": [
          { "name": "中文名", "nameEn": "English Name", "type": "CHARACTER", "analysis": { "anchors": "中文事实视觉关键词", "anchorsEn": "英文事实视觉关键词", "description": "中文紧凑外貌描述", "descriptionEn": "英文紧凑外貌描述" } }
        ],
        "scenes": [
          { "name": "中文名", "nameEn": "English Name", "type": "SCENE", "analysis": { "anchors": "中文事实视觉关键词", "anchorsEn": "英文事实视觉关键词", "description": "中文紧凑环境描述", "descriptionEn": "英文紧凑环境描述" } }
        ],
        "props": [
          { "name": "中文名", "nameEn": "English Name", "type": "PROP", "analysis": { "anchors": "中文事实视觉关键词", "anchorsEn": "英文事实视觉关键词", "description": "中文紧凑道具描述", "descriptionEn": "英文紧凑道具描述" } }
        ]
      }
    }
    `;
};

export const buildImageBasedVisualBiblePrompt = (
    preset: MetonymyStylePreset,
    hints?: VisualBibleAnalysisHints,
    mode: 'GLOBAL' | 'TONE' = 'GLOBAL'
): string => {
    const assets = preset.assets || { characters: [], scenes: [], props: [] };
    const prompts: string[] = [];

    if (preset.toneImage) {
        prompts.push(buildToneImageAnalysisPrompt(hints));
    }

    const appendAssetPrompt = (type: 'CHARACTER' | 'SCENE' | 'PROP', asset: MetonymyStylePreset['assets']['characters'][number]) => {
        if (!asset.imageUrl) return;
        const assetHints = asset.designConfig || hints;
        prompts.push(buildAssetImageAnalysisPrompt(type, assetHints, asset.name));
    };

    if (mode === 'GLOBAL') {
        assets.characters.forEach(asset => appendAssetPrompt('CHARACTER', asset));
        assets.scenes.forEach(asset => appendAssetPrompt('SCENE', asset));
        assets.props.forEach(asset => appendAssetPrompt('PROP', asset));
    }

    return prompts.length
        ? prompts.join('\n\n')
        : '不会发送 AI 请求：当前预设没有 toneImage，也没有带 imageUrl 的资产。';
};

export const generateTextBasedVisualBible = async (text: string, hints?: VisualBibleAnalysisHints): Promise<{ toneAnalysis: GlobalVisualTone, assets: any } | null> => {
    const prompt = buildTextBasedVisualBiblePrompt(text, hints);

    try {
        const model = configService.getEngineModel('visualBible') || 'gemini-3.1-pro-preview';
        console.log(`[VisualBible] Generating Text-Based Bible with model: ${model}`);
        const res = await retryWithBackoff<GenerateContentResponse>(() => generateContentWithRuntime({
            model: model,
            contents: { parts: [{ text: prompt }] },
            config: { responseMimeType: 'application/json', maxOutputTokens: 8192, stream: false, engineId: 'visualBible' }
        }));

        const json = normalizeTextBasedVisualBible(cleanAndParseJSON(res.text || "", { silent: true }));
        if (json) return json;

        console.warn(`[VisualBible] Text-Based Bible JSON invalid (${(res.text || "").length} chars). Retrying with compact recovery prompt.`);
        const recoveryPrompt = buildTextBasedVisualBibleRecoveryPrompt(prompt, res.text || "");
        const recoveryRes = await retryWithBackoff<GenerateContentResponse>(() => generateContentWithRuntime({
            model: model,
            contents: { parts: [{ text: recoveryPrompt }] },
            config: { responseMimeType: 'application/json', maxOutputTokens: 4096, stream: false, engineId: 'visualBible' }
        }), 1, 800);
        const recoveryJson = normalizeTextBasedVisualBible(cleanAndParseJSON(recoveryRes.text || ""));
        if (recoveryJson) {
            return recoveryJson;
        }

        return null;
    } catch (e: any) {
        handleApiError("Text Bible Gen Failed", e);
        return null;
    }
};

export async function generateDesignImage(
    prompt: string,
    referenceImage?: string
): Promise<string | null> {
    const model = configService.getEngineModel('imageGen') || 'gpt-image-2';
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

    const parts: any[] = [{ text: prompt }];

    if (referenceImage) {
        parts.unshift({
            inlineData: await toInlineImageData(referenceImage)
        });
    }

    try {
        const response = await generateContentWithRuntime({
            model: model,
            contents: { parts: parts },
            config: {
                engineId: 'imageGen',
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
