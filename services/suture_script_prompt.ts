
import { SutureConfig, NarrativeFieldState, GlobalVisualTone, FinalAssetsData } from '../types';
import {
    DIALOGUE_STYLES,
    VOICEOVER_STYLES,
    MONOLOGUE_STYLES,
    VISUAL_STYLES
} from '../data/suture_styles';
import { MONTAGE_STYLES } from '../data/suture_montage';
import { findItemDetails } from './dataRegistry';
import { getBlockName } from '../utils/blockUtils';

// Helper to format field state for the prompt with definitions
const buildEngineContext = (fieldState?: NarrativeFieldState) => {
    if (!fieldState) return "";

    return Object.entries(fieldState).map(([key, tags]) => {
        if (!tags || tags.length === 0) return null;
        // Use utility to get correct name for any driver block
        const name = getBlockName(key, 'CN');

        const enrichedTags = tags.map(t => {
            const details = findItemDetails(t, key);
            const cleanDetails = details.replace(/Definition: | \| Core Logic: /g, ' ').trim();
            return cleanDetails ? `${t} <${cleanDetails}>` : t;
        }).join(' + ');

        return `* **${name} (${key})**: ${enrichedTags}`;
    }).filter(Boolean).join('\n');
};

// Helper to resolve density conflict
const resolveDensity = (userSetting: string, directorName: string): string => {
    if (userSetting === 'AUTO') {
        return `**[自动模式 - 听从导演指令]:** 严格遵循 [${directorName}] 的声音习惯（话痨或沉默）。`;
    }
    const map: Record<string, string> = {
        'NONE': '强制静音 (0%) - 完全移除此元素。',
        'LOW': '稀疏 (Sparse) - 显著减少用量。',
        'MID': '适中 (Moderate) - 平衡使用。',
        'HIGH': '密集 (Dense) - 增加频率。'
    };
    return `**[手动覆盖]:** 用户强制将密度设定为 **${map[userSetting]}**。忽略导演的默认偏好，但【保留】其风格腔调。`;
};

// Helper to resolve style conflict
const resolveStyle = (userStyleId: string, defaultId: string, directorName: string, library: any[]): string => {
    if (userStyleId === defaultId) {
        return `**[导演原声]:** 写作风格必须匹配 [${directorName}] 的视觉风格。(例如：如果视觉是昆汀，对白也必须是昆汀式的)。`;
    }
    const styleDef = library.find(s => s.id === userStyleId);
    if (!styleDef) return "";

    return `**[风格混搭]:** 
    *   **内容基调:** 使用 **[${styleDef.name}]** 的写作风格 (${styleDef.instruction.substring(0, 50)}...)。
    *   **节奏与配比:** 但是，这种声音的*出现位置*和*频率*必须仍然适配 **[${directorName}]** 的视觉节奏。`;
};

// JSON PROTOCOL FOR ANTI-KITSCH STYLE EMULATION
const STYLE_LOGIC_JSON = JSON.stringify({
    "protocol": "ANTI_KITSCH_STYLE_EMULATION (反刻奇风格模拟)",
    "version": "3.0",
    "critical_directives": {
        "1_DE_SYMBOLIZATION (去符号化)": {
            "rule": "严禁照搬导演前作中的具体物品、梗或台词。",
            "reasoning": "例如：给王家卫风格硬塞‘凤梨罐头’，或给昆汀风格硬塞‘大汉堡’，这是刻奇 (Kitsch) 模仿，不是风格 (Style)。",
            "action": "必须使用【当前故事语境】中的原生相关物品来表达同一种情绪。",
            "banned_examples": [
                "凤梨罐头 / 过期日期 (王家卫)",
                "0.01公分 (王家卫)",
                "无脚鸟 (王家卫)",
                "大汉堡 / 圣经引用 (昆汀)",
                "红气球 (It/Pennywise)",
                "旋转的陀螺 (诺兰)"
            ]
        },
        "2_LOGIC_MIGRATION (逻辑复刻)": {
            "rule": "复刻底层的【运作算法】，而不是表层的【结果】。",
            "examples": [
                {
                    "director": "Wong Kar-wai (王家卫)",
                    "algorithm": "用精确的数字量化抽象的情感 + 将情感投射到无生命物体上。",
                    "correct_application": "错误：'这罐头过期了'。正确：'打印机墨盒还剩 4%。这正是她对我剩下的耐心。'"
                },
                {
                    "director": "Wes Anderson (韦斯·安德森)",
                    "algorithm": "在混乱悲惨的情境中，保持极度的礼貌、秩序和物品清单化。",
                    "correct_application": "错误：'他很伤心'。正确：'他整齐地折叠了带血的衬衫，将其放入标有周二的抽屉中，然后面无表情地流了一滴泪。'"
                }
            ]
        },
        "3_LANGUAGE_PURITY (语言纯度)": {
            "rule": "确保输出语言是自然、具有电影感的【简体中文】。",
            "constraint": "拒绝翻译腔。动作描写要短促有力，符合汉语习惯。"
        }
    }
}, null, 2);

// --- STEP 1: LITERARY SCRIPT & GLOBAL TONE (EXECUTE TRANSLATION) ---
export const buildSutureStep1Prompt = (
    text: string,
    config: SutureConfig,
    fullStory: string = "",
    fieldState?: NarrativeFieldState,
    partIndex: number = 1,
    previousContext: string = "",
    globalStyleContext?: { tone: GlobalVisualTone, assets: FinalAssetsData }
): string => {

    // 1. Get Visual Director Definition (THE BEHAVIOR)
    const visDef = VISUAL_STYLES.find(s => s.id === config.visualStyle);
    const rawDirectorName = visDef?.name || "标准电影感";

    // *** CRITICAL RESTORATION: ANTI-KITSCH WARNING IN NAME ***
    const directorName = `${rawDirectorName} (⚠️ 严禁出现该艺术风格的知名台词以及词汇/No Famous Quotes or Objects)`;

    const directorInstruction = visDef?.instruction || "Standard Cinematic Pacing.";

    // Helper to get simple style name for brackets (e.g. "昆汀 (Tarantino)" -> "昆汀")
    const getStyleName = (id: string, defaultName: string, lib: any[]) => {
        if (id.includes('default')) return defaultName.split('(')[0].trim();
        const item = lib.find(i => i.id === id);
        return item ? item.name.split('(')[0].trim() : defaultName.split('(')[0].trim();
    };

    // Determine the name to use in the script brackets (e.g. [昆汀])
    const currentStyleName = getStyleName(config.dialogueStyle, directorName, DIALOGUE_STYLES);

    // Generate Header Style String
    const dName = getStyleName(config.dialogueStyle, directorName, DIALOGUE_STYLES);
    const vName = getStyleName(config.voiceoverStyle, directorName, VOICEOVER_STYLES);
    const mName = getStyleName(config.monologueStyle, directorName, MONOLOGUE_STYLES);

    let styleHeaderParts = [];
    if (config.dialogueDensity !== 'NONE') styleHeaderParts.push(`对白[${dName}]`);
    if (config.monologueDensity !== 'NONE') styleHeaderParts.push(`独白[${mName}]`);
    if (config.voiceoverDensity !== 'NONE') styleHeaderParts.push(`旁白[${vName}]`);
    const styleHeader = styleHeaderParts.length > 0 ? styleHeaderParts.join(' + ') : "纯视觉默片 (Silent)";

    // 2. Resolve Audio Conflicts
    const dialogueLogic = resolveDensity(config.dialogueDensity, directorName);
    const voLogic = resolveDensity(config.voiceoverDensity, directorName);
    const monoLogic = resolveDensity(config.monologueDensity, directorName);

    const dialogueStyle = resolveStyle(config.dialogueStyle, 'dial_default', directorName, DIALOGUE_STYLES);
    const voStyle = resolveStyle(config.voiceoverStyle, 'vo_default', directorName, VOICEOVER_STYLES);
    const monoStyle = resolveStyle(config.monologueStyle, 'mono_default', directorName, MONOLOGUE_STYLES);

    // 3. Calculate Shot Count Target
    const shotCountMap: Record<string, number> = {
        'SHOTS_4': 4,
        'SHOTS_9': 9,
        'SHOTS_12': 12,
        'SHOTS_16': 16,
        'SHOTS_25': 25
    };
    const targetShots = shotCountMap[config.shotDensity] || 25;

    // New Density Config Logic (Visuals)
    const subjectFocusMap: Record<string, string> = {
        'NONE': 'NO_SUBJECTS', 'LOW': 'MINIMAL_SUBJECTS', 'MID': 'BALANCED_SUBJECTS', 'HIGH': 'SUBJECT_HEAVY', 'AUTO': 'Follow Director\'s Habit'
    };
    const emptyShotMap: Record<string, string> = {
        'NONE': 'NO_EMPTY_SHOTS', 'LOW': 'FEW_EMPTY_SHOTS', 'MID': 'MODERATE_EMPTY_SHOTS', 'HIGH': 'HIGH_ATMOSPHERE', 'AUTO': 'Follow Director\'s Habit'
    };

    const subjectInstruction = subjectFocusMap[config.subjectFocus];
    const atmosphereInstruction = emptyShotMap[config.emptyShot];

    const engineContext = buildEngineContext(fieldState);
    const dnaInjection = engineContext
        ? `
# 🧬 叙事基因 (NARRATIVE DNA)
**本场景必须严格遵循以下世界观与人物参数：**
${engineContext}
`
        : "";

    // --- SILENCE RATIO CALCULATION ---
    let silenceRatio = 0.3; // Default Moderate
    const silenceMatch = directorInstruction.match(/(?:留白值|Silence).*?:\s*(\d+(\.\d+)?)/);
    if (silenceMatch && silenceMatch[1]) {
        silenceRatio = parseFloat(silenceMatch[1]);
    } else {
        if (directorInstruction.includes('极密 (Extreme)')) silenceRatio = 0.1;
        else if (directorInstruction.includes('密集 (Dense)')) silenceRatio = 0.2;
        else if (directorInstruction.includes('适中 (Moderate)')) silenceRatio = 0.4;
        else if (directorInstruction.includes('稀疏 (Sparse)')) silenceRatio = 0.6;
        else if (directorInstruction.includes('极疏 (Minimal)')) silenceRatio = 0.8;
    }

    if (config.dialogueDensity === 'HIGH' || config.monologueDensity === 'HIGH') silenceRatio = Math.max(0.05, silenceRatio - 0.2);
    if (config.dialogueDensity === 'LOW' && config.monologueDensity === 'LOW') silenceRatio = Math.min(0.9, silenceRatio + 0.2);

    const silentShots = Math.floor(targetShots * silenceRatio);
    const activeAudioShots = targetShots - silentShots;

    // --- CONTINUITY LOGIC ---
    let continuityInstruction = "";

    if (partIndex === 1) {
        continuityInstruction = "**语境：** 这是【开场戏】。请建立基调。";
    } else {
        continuityInstruction = `
      **语境：** 这是第 #${partIndex} 场戏。
      **前情提要 (仅供参考):**
      "${previousContext.slice(-300)}..."
      `;
    }

    // --- VISUAL BIBLE PROTOCOL (THE LOOK) ---
    let visualBibleInstruction = "";
    let bibleAssetsInstruction = "";
    let bibleToneDesc = "";
    let globalLightLock = "";

    // *** CRITICAL RESTORATION: THE PRODUCTION PIPELINE PROTOCOL (Bone-Soul-Skin) ***
    if (globalStyleContext) {
        const g = globalStyleContext.tone;
        // UPDATED: Structured Core Visual Bible Format
        bibleToneDesc = `
> **【核心视觉圣经】**
> **【艺术与风格】**: ${g.style}
> **【光影与氛围】**: ${g.lighting}
> **【镜头与构图】**: ${g.camera}`;

        // *** STRICT LIGHTING LOCK ***
        globalLightLock = `
      **5. 反滤镜协议 (ANTI-FILTER / PHYSICAL LIGHTING PROTOCOL):**
      *   **拒绝单色污染:** 严禁因为参考图是暖色调，就把所有物体都写成“黄色的”。
      *   **物理光照 (Physical Lighting):** 必须描述**光源的颜色**，而不是**物体的颜色**。
          *   *错误:* "黄色的脸，黄色的衣服，黄色的桌子。" (Filter Look - 滤镜感)
          *   *正确:* "3500K的暖光从侧面打在**苍白**的脸上，**银色**的盔甲反射着**金黄**的夕阳。" (Cinematic Look - 电影感)
      *   **保留黑场 (Deep Blacks):** 即使是暖调场景，阴影也必须是深邃的黑色或深褐色，而不是浑浊的黄色。**必须保证画面的反差 (Contrast)。**
      *   **固有色 (Local Color):** 描述物体时，必须提及它的**原本材质颜色**（如：红色的血、黑色的泥土、白色的骨头），让它们与环境光产生互动，而不是被环境光吞没。
      `;

        visualBibleInstruction = `
### 🛡️ 全加工生产线协议 (THE BONE-SOUL-SKIN PIPELINE)
**我们正在执行一个从里到外的全加工过程。你现在处于【第二阶段：灵魂注入】。**

#### 1. 骨架 (THE BONE) - 源文本
*   **来源:** <CURRENT_SCENE_SOURCE> (下方的源文本)
*   **地位:** **物理事实与时空锚点 (Absolute Physics & Era)。** 剧情情节、时代背景、地理设定 **绝对不可更改**。
*   **禁止时空错乱:** 若源文本是中世纪/古代/近代故事，**严禁**因为套用了其他风格的导演，就在环境描述中捏造出赛博朋克、现代都市、高科技设备或汽车等时代错误产物。
*   **动作铁律:** "他杀了人"就是"他杀了人"。不能因为风格唯美就改成"他送了花"。
*   **功能:** 提供最深厚的基石，界定一切事物的物理形态底线。

#### 2. 灵魂 (THE SOUL) - 导演的气息 (★★★ HIGHEST WEIGHT FOR STYLE ★★★)
*   **来源:** [${directorName}]
*   **核心指令:** **这是本步骤视听语言的最高权重。但请记住，导演只赋予“表达方式”，绝对不能篡改骨架的“时代真相”。**
*   **任务:** **转译 (Transcode)。** 用该导演特有的“气息”去重述故事。他决定了如何构图、什么样的节奏、画面的调度、人物的情绪，以及台词的风格。
*   **执行逻辑:**
    *   **IF Director = [Wong Kar-wai]:** 将“他走了”转译为“慢门抽帧下的背影，以及一段关于时间的独白”（但若是古代，决不能看电子表）。
    *   **IF Director = [Nolan]:** 将“他走了”转译为“极速剪辑的背影，伴随着宏大音效轰鸣，交叉剪辑”。
    *   **IF Director = [Wes Anderson]:** 将“他走了”转译为“他在画面正中央，向右转90度，像木偶一样横向移出”。
*   **输出:** 必须完全确定分镜里的画面描述、台词和内容。

#### 3. 表相 (THE SKIN) - 视觉圣经
*   **来源:** [VISUAL BIBLE] (参考图/色调)
*   **任务:** **整容手术。** 在导演（灵魂）确定的分镜骨架上，贴上特定的材质、光影和色调。
*   **执行:** 内容与时代设定决不动（听源本的），镜头与调度听导演的，在画面材质与色彩上进行重铸（听视觉圣经的）。
${globalLightLock}
      `;

        bibleAssetsInstruction = `
**4. 资产强制映射 (Asset Mapping - SKIN LAYER):**
**如果在剧本中出现以下角色或物品，必须使用下方定义的[视觉特征]来描述它们，但保留它们在当前故事中的[状态]：**
${globalStyleContext.assets.characters.map(c => `*   **${c.nameEn} (${c.name}):** ${c.anchors}`).join('\n')}
${globalStyleContext.assets.scenes.map(s => `*   **${s.nameEn} (${s.name}):** ${s.anchors}`).join('\n')}
${globalStyleContext.assets.props.map(p => `*   **${p.nameEn} (${p.name}):** ${p.anchors}`).join('\n')}

**RULE:** When generating \`videoPrompt\`, do NOT use generic terms like "a man". Use the specific visual traits (e.g. "a man with [ANCHOR]").
      `;
    } else {
        // Fallback if no visual bible provided
        bibleToneDesc = `
> **【核心视觉圣经】**
> **【艺术与风格】**: ${directorName} Default Style
> **【光影与氛围】**: Cinematic Lighting`;

        visualBibleInstruction = `
### 🛡️ 全加工生产线协议 (THE BONE-SOUL-SKIN PIPELINE - FALLBACK)
1. **骨架 (BONE):** 严格遵循源文本剧情与时空背景。**严禁因为导演风格而引发时空穿越（如把古代背景魔改为现代都市或赛博朋克）。**
2. **灵魂 (SOUL):** 严格遵循 [${directorName}] 的导演风格（构图、运镜、节奏）。**注意：导演风格只能控制“怎么拍”，不能改变“原文本讲述的时代”。**
3. **皮肉 (SKIN):** 由于未提供视觉圣经，请根据导演风格自动推演最适合当前“原文本时代”的视觉质感。
      `;
    }

    // --- MIST PROTOCOL INJECTION (SCALED FOR DYNAMIC SHOT COUNT) ---
    const ratio = targetShots / 25;
    const isShort = targetShots < 16;

    // Calculate specific minimums based on 25-frame base standard
    const minELS = isShort ? 1 : Math.ceil(3 * ratio);      // 3 in 25
    const minCU = isShort ? 2 : Math.ceil(5 * ratio);       // 5 in 25
    const minECU = isShort ? 1 : Math.ceil(3 * ratio);      // 3 in 25
    const minInsert = isShort ? 1 : Math.ceil(3 * ratio);   // 3 in 25
    const minHigh = isShort ? 0 : Math.ceil(2 * ratio);     // 2 in 25
    const minLow = isShort ? 0 : Math.ceil(2 * ratio);      // 2 in 25
    const minDutch = isShort ? 0 : Math.floor(2 * ratio);   // 2 in 25
    const minOTS = isShort ? 1 : Math.ceil(3 * ratio);      // 3 in 25

    // Shot indices for structural phases
    const phase1End = isShort ? 1 : 5;
    const phase2End = targetShots - 1;

    // *** MONTAGE PROTOCOL & STRUCTURE SELECTION ***
    const montageId = config.montageId || 'montage_none';
    const montageDef = MONTAGE_STYLES.find(m => m.id === montageId);
    const isStandardMode = montageId === 'montage_none' || !montageDef;

    let montageHeader = "";
    let structureText = "";

    if (isStandardMode) {
        // --- STANDARD CINEMATIC STRUCTURE (DEFAULT) ---
        montageHeader = `**[模式: 标准电影叙事 (Standard)]**`;

        let setupBlock = "";
        if (isShort) {
            setupBlock = `
1.  **KF1 (瞬间建置 - Setup):**
    *   **视觉:** **必须是大全景 (ELS/LS)**。仅用一帧迅速交代环境与气氛。
    *   **禁止:** 不要浪费时间在缓慢的推拉上，直接给观众世界观。`;
        } else {
            setupBlock = `
1.  **KF1-KF${phase1End} (建置/空间/轴线 - Setup):**
    *   **视觉:** **必须包含大全景 (ELS/LS)** 交代场景与人物位置关系。
    *   **任务:** **显式确立轴线 (The Line)**。观众必须立刻明白谁在左，谁在右，环境是什么。
    *   **禁止:** 不要直接切入特写对话，先给观众空间认知。`;
        }

        structureText = `
### 🏗️ 标准电影叙事结构 (DEFAULT STRUCTURE: CINEMATIC LOGIC)
**Core Principle:** 严守 "建置 -> 流动 -> 总结" 的经典电影语法。
**Conflict Resolution:** 除非 [${rawDirectorName}] 的风格极度反常规，否则**强制**执行以下流程：

${setupBlock}
    
2.  **KF${phase1End + 1}-KF${phase2End} (流动/动作/Flow):**
    *   **视觉:** 动作流转与对白。
    *   **强制打断:** 严禁连续的“正反打”人脸中心镜头。**必须穿插 ≥${minInsert} 个插入镜头 (Insert Shot)** (环境/道具) 和 **≥${minECU} 个极致特写 (ECU)** (物理质感) 来打破单调。
    *   **目的:** 建立情感连接与节奏呼吸。

3.  **KF${targetShots} (落幅/留白/Outro):**
    *   **视觉:** 总结性镜头或意味深长的空镜/定格。
    *   **目的:** 情绪的延宕与本场戏的句号。
      `;
    } else {
        // --- SPECIAL MONTAGE OVERRIDE MODE ---
        montageHeader = `**[模式: ${montageDef?.name} 已激活]**`;

        structureText = `
### ✂️ 蒙太奇优先权 (MONTAGE SUPREMACY - OVERRIDE)
**当前模式: [${montageDef?.name}]**
**核心指令:** 此蒙太奇逻辑决定了你如何**“切割”**源文本。

*   **文本切割率 (Text Segmentation Rate):**
    *   **IF 'Fast/Action' (e.g. Gun Ballet):** 把每一个动作动词（如“拔枪”、“回头”）炸裂成 3-4 个独立镜头。源文本的一句话可能需要变成 5 个镜头。
    *   **IF 'Slow/Long Take' (e.g. Tarkovsky):** 把一整段对话缝合进一个镜头。源文本的 10 句话可能只对应 1 个镜头。
    
*   **执行逻辑:** ${montageDef?.core}
*   **操作方式:** ${montageDef?.instruction}
*   **融合:** 在这个剪辑节奏下，应用 **[${rawDirectorName}]** 的运镜。
*   **结构:** 请根据此蒙太奇类型的特性，合理安排 ${targetShots} 个镜头的起承转合。
      `;
    }

    const mistProtocol = `
# 🎬 2. 迷雾学派：${targetShots}帧电影级分镜协议 (MIST ${targetShots}-FRAME PROTOCOL)
**任务核心：** 你写的不是普通小说，而是**“文学分镜 (Scriptment)”**。你必须将故事精确拆分为约 ${targetShots} 个具体的镜头。

### A. 物理与风格的双重锚定 (Physical & Style Anchor)
*   **物理真实:** 无论镜头如何变换，必须100%保留原图（或设定）的材质、色彩分级、光影对比度和颗粒度。
*   **导演滤镜:** 请用 **[${rawDirectorName}]** 的运镜逻辑执行，但**视觉材质**必须服从[视觉圣经]。

### B. 📐 空间轴线锁定 (AXIS OF ACTION LOCK - CRITICAL)
**为了防止画面错乱，必须在每一场戏的开头隐式或显式地确立轴线：**
*   **定义轴线 (The Line):** 确定场景中主要人物/物体之间的假想连线（180度线）。
*   **机位侧重:** 明确摄像机主要位于轴线的哪一侧。
*   **视线匹配 (Eye-line):** 确保人物视线方向和运动方向在镜头切换时保持逻辑连贯（如：A看右，B看左）。

### C. 非协商性运镜铁律 (NON-NEGOTIABLE RULES - STRICT ENFORCEMENT)
1.  **镜头熵增定律 (VISUAL ENTROPY - CRITICAL):** 
    *   **绝对禁止重复：** **严禁** 出现两个在“景别+角度”上完全一致的镜头（除故意的正反打外）。
    *   **示例错误：** 镜头1是中景平视，镜头3又是中景平视。
    *   **强制多样性：** 如果上一个镜头是“中景”，下一个镜头必须是“特写”、“全景”或“过肩”。必须不断改变机位、焦段或高度来维持视觉新鲜感。
2.  **强制多样化配比 (Mandatory Variety for ${targetShots} Shots):**
    *   **≥${minELS}个 大全景/远景 (ELS/LS):** 交代空间与孤独感。
    *   **≥${minCU}个 特写 (CU):** 表现情绪波动。
    *   **≥${minECU}个 极致特写 (ECU):** 表现物理质感（如：瞳孔收缩、手指扣动、材质缝隙）。
    *   **≥${minInsert}个 环境/道具插入镜头 (Insert Shot):** 不出现角色，只拍环境细节以营造氛围。
    *   **≥${minHigh}个 鸟瞰/高角度 (High Angle):** 表现压抑或全局观。
    *   **≥${minLow}个 虫视/低角度 (Low Angle):** 表现力量或紧张感。
    *   **≥${minDutch}个 荷兰式倾斜 (Dutch Angle):** 表现不稳定性。
    *   **≥${minOTS}个 过肩/视点 (OTS/POV):** 增加代入感。
3.  **不要越轴 (180-Degree Rule):** 严禁在没有切出镜头或机位运动交代的情况下，直接切入轴线对面的镜头。
4.  **连贯性铁律 (ABSOLUTE CONTINUITY):** 
    *   **空间位置连贯:** 涉及人物关系对话时，必须严格锁定相对位置。
    *   **动作连贯 (Match on Action):** 上一个镜头的动作尾声必须在下一个镜头中流畅接续。

### D. 🧱 视觉一致性铁律 (VISUAL CONSISTENCY LAW - ABSOLUTE)
**同一场戏内的所有镜头，必须共享完全一致的视觉基调。**
*   **光源一致性:** 确保所有镜头的光源方向、色温和质感是一致的。
*   **反滤镜协议:** 严禁给画面加单色滤镜。确保暗部是黑色，亮部保留细节。
*   **对比度锁定:** 全程保持一致的明暗比（如：全片高反差）。
*   **光场统一:** 确保前后镜头看起来是在同一个物理空间和光照条件下拍摄的。严禁出现“跳戏”的视觉断层。
`;

    return `
角色设定：**[${directorName}] 的御用剪辑师 & 编剧。**
任务目标：将“当前片段”改编为一部**连贯流畅、具有电影感**的剧本。
质量标准：**国际顶尖水准（戛纳/奥斯卡级别）。**

# ✍️ 4. 剧本标准格式规范 (STANDARD MARKDOWN FORMAT)
**必须严格遵守以下格式输出，以确保前端正确渲染金色高亮标题。**

### A. 协议头 (Protocol Header - 必选)
在剧本最开始，必须输出一句简练的风格执行摘要（作为引用块）：
> **【${directorName} 风格协议】** 执行配置：${styleHeader} ${montageId !== 'montage_none' ? `+ [${montageDef?.name}]` : ""}
${bibleToneDesc}

### B. 场景头 (Scene Header - 必选)
在开始新场景（包括第一个场景）时，必须输出：
**SCENE [场景序号]**
**场号：[INT./EXT.] [地点] - [时间]**
**人物：[角色A], [角色B]...**
**轴线：[简述本场核心轴线与机位侧重，如：以AB连线为轴，机位偏南，A在左]**

${montageHeader}

# 🚨 0. 核心铁律 (CRITICAL RULES - DATA FIREWALL & CLARITY)

## A. 🛑 绝对数据隔离 (DATA ISOLATION - HIGHEST PRIORITY)
**这是最严重的错误类型。一旦违反，生成即为失败。**

1.  **禁止抢跑 (NO FUTURE LEAKAGE):**
    *   **定义：** 你只能改编 **<CURRENT_SCENE_SOURCE>** 标签内的文字。
    *   **禁区：** **<GLOBAL_CONTEXT>** 仅供参考（用于理解人物是谁，世界观是什么）。**严禁**把 GLOBAL_CONTEXT 中未在 CURRENT_SCENE_SOURCE 发生的事件写进剧本。
    *   **判定标准：** 如果一个动作/台词没有在 <CURRENT_SCENE_SOURCE> 中出现或被暗示，这就属于“抢跑”，必须删除。
    *   **IGNORE** anything in GLOBAL_CONTEXT that conflicts with or is outside the scope of CURRENT_SCENE_SOURCE.

2.  **物理截断 (PHYSICAL TRUNCATION - STRICT):**
    *   **剧本的结尾必须严格停在源文本结束的那一秒。**
    *   **Scope Check:** 你的剧本只能包含 <CURRENT_SCENE_SOURCE> 中明确写出的段落。如果源文本只选了前三段，你就只能改编前三段。
    *   如果源文本的最后一个动作是“他举起枪”，剧本的最后一个镜头必须是“枪被举起”，**绝对不能有“开枪”**。
    *   如果源文本只是一句“他抽了根烟”，但要求生成 **${targetShots} 个镜头**：
        *   **错误做法：** 继续写他抽完烟后去杀了人（因为你知道后续剧情）。
        *   **正确做法 (纵向膨胀):** 极度放慢时间。用 ${targetShots} 个镜头描写抽烟的每一个微观动作：打火机的火花、烟雾的形状、眼神的空洞、烟灰的掉落、环境的噪音。
        *   **口诀：** **没话找话，没戏找戏（在细节上），但绝不推进时间线。**

3.  **上下文屏蔽 (CONTEXT MASKING):**
    *   假设你只拿到了这一页纸的剧本，不知道后面发生了什么。
    *   不要为了“完整性”去补全后续情节。不完整是正常的，因为这是分场剧本。

## B. 👁️ 视觉叙事铁律 (THE MUTE RULE & KINEMATICS & ANTI-LITERAL)
*   **反隐喻具象化铁律 (ANTI-LITERAL METAPHOR RULE - ABSOLUTE):** **严禁**将源文本中的修辞手法（比喻、夸张、象征）“直译”为物理画面或声音道具。
    *   **错误示范:** 文本写"风像生锈的锯子要锯开骨头" -> 画面与声音强行写出"树枝上卡着生锈的锯条发生摩擦声"。 (这是极度离谱的愚蠢行为！)
    *   **正确执行:** 文本写"风像生锈的锯子要锯开骨头" -> 画面写"人物在极寒的狂风中痛苦地蜷缩，破旧的衣领被风吹得狂烈拍打脸颊"。
    *   **法则:** 修辞只提供【情绪和氛围暗示】，**绝对不能**转化为画面里实际存在的道具 (Props) 或具体的音源 (Foley)。
*   **静音法则:** 假设观众听不到对白，只看画面，能否看懂发生了什么？如果不能，重写画面。
*   **拒绝广播剧:** 不要让人物站桩对话。情绪必须通过**物理动作**（如：捏碎杯子、来回踱步、眼神闪躲）来表现，而不是通过台词。
*   **连贯性:** 故事必须连贯。上一个镜头的动作（如举枪）必须在下一个镜头有反应（如对方举手）。

**运动学链条锁定 (KINEMATIC CHAIN LOCKING - CRITICAL):**
*   **定义:** 动作必须具有物理连续性。
*   **父级确立:** 当上一镜确立了动作（如：蜷缩坐在墙角），该动作即成为“物理事实”。
*   **子级继承:** 随后的特写镜头必须基于该姿态构图（例如：手腕是弯曲的，背景是膝盖布料）。**严禁**在特写中重置人物姿态。
*   **动态摄影机，静态演员:** 鼓励剧烈的机位变化（俯视/仰视/侧后），但**演员的冻结姿态不能变**。

---

# 📥 输入数据 (INPUT DATA)

<GLOBAL_CONTEXT>
(⚠️ **BACKGROUND INFO ONLY - DO NOT ADAPT EVENTS FROM HERE**)
"${fullStory.slice(0, 2000)}..."
</GLOBAL_CONTEXT>

<CURRENT_SCENE_SOURCE>
(🟢 **TARGET CONTENT - ADAPT ONLY THIS**)
"""
${text}
"""
</CURRENT_SCENE_SOURCE>

---

# 🎬 1. 导演执行协议 (DIRECTOR EXECUTION PROTOCOL)
**定义：这是你的【总导演 (The Director)】。**
它决定了影片的**呼吸方式**、**运镜**、**声音**和**剪辑节奏**。

**DIRECTOR: [${directorName}]**
*   **Style DNA:** ${directorInstruction}

${config.directorNote ? `
**⚠️ 导演手记 (DIRECTOR'S NOTE - HIGH PRIORITY OVERRIDE):**
> "${config.directorNote}"
> **指令:** 这是来自人类导演的直接干预。如果它与预设风格冲突，**必须以本手记为准**。
` : ""}

**根据上述协议，请严格执行以下裁决：**

### A. 声音层裁决 (AUDIO LAYER ARBITRATION)
*   **对白 (Dialogue):**
    *   **密度/频率:** ${dialogueLogic}
    *   **风格/腔调:** ${dialogueStyle}
*   **旁白 (Voiceover):**
    *   **密度/频率:** ${voLogic}
    *   **风格/腔调:** ${voStyle}
*   **独白 (Monologue):**
    *   **密度/频率:** ${monoLogic}
    *   **风格/腔调:** ${monoStyle}

### B. 声音分布与留白数学 (AUDIO DISTRIBUTION & SILENCE)
*   **总镜头数:** ${targetShots}
*   **留白镜头 (呼吸空间):** 约 ${silentShots} 个镜头。(纯画面、音效、音乐。无语音)。
*   **有声镜头:** 约 ${activeAudioShots} 个镜头。

### C. 视觉层裁决 (VISUAL LAYER)
*   **主体密度:** ${subjectInstruction}
*   **空镜留白:** ${atmosphereInstruction}
${structureText}

### D. 风格逻辑协议 (STYLE LOGIC PROTOCOL - JSON STRICT)
**You must process the style through this Anti-Kitsch filter:**
${STYLE_LOGIC_JSON}

${visualBibleInstruction}

${mistProtocol}

# 🔗 连贯性与边界协议 (CONTINUITY & BOUNDARY)
${continuityInstruction}

### C. 镜头块结构 (Shot Block Structure) - 关键！
**每个镜头必须严格按照以下格式书写，不可合并，不可省略。前端依赖此格式进行解析。**

\`#${partIndex}-1-{镜号} 【{景别}】 【{构图}】 【{角度}】\`
**画面：** {核心主体（人物/关键道具）的状态与动作。}
**环境：** {空间的物理层级。包括前景的遮挡、背景的深度、负空间的分布，以及人物在空间中的绝对坐标。}
**声音：** {详细的专业音效描述 (SFX) 与 音乐情绪 (Music)。必须使用 [Impacts/Hits], [Transitions/Whooshes], [Risers/Builders], [Drones/Ambience], [Pulses], [Foley] 等专业音效分类术语。}
**音轨内容：**
{如果有对白，在此处写，否则留空或写无}

**【格式详解】**
1.  **第一行 (ID行):** 必须以 \`#\` 开头。
    *   **ID格式:** \`#${partIndex}-1-1\`, \`#${partIndex}-1-2\` ... (连续编号至 ${targetShots})
    *   **标签:** 必须包含三个【】标签，分别填入：
        *   **景别:** 必须使用中文 (如: 特写, 中景, 全景)
        *   **构图:** 如 [中心构图, 三分法, 引导线]
        *   **角度:** 如 [平视, 仰拍, 俯拍, 荷兰角]
2.  **第二行 (画面):** 必须以 \`**画面：**\` 开头。
    *   **内容:** 只描述**核心主体**（人物/关键道具）的状态与动作。
    *   **目的:** 聚焦叙事主体，避免与环境混淆。
3.  **第三行 (环境):** 必须以 \`**环境：**\` 开头。
    *   **内容:** 描述**空间的物理层级**（前景/背景/负空间）以及**物理陈设**。
    *   **目的:** 强制空间思考，构建舞台，避免背景突变。
    *   **禁止:** **严禁使用“同上”、“同前”或任何省略语。** 即使环境未变，也必须重新描写该镜头所见的空间细节（例如：如果未变，请换个角度描述墙壁的纹理或背景的虚化）。
4.  **第四行 (光影):** 必须以 \`**光影：**\` 开头。
    *   **内容:** 描述**光质**（硬光/软光）、**光比**（高反差/低反差）、**色温**（冷/暖）及**光源方向**。
    *   **光影锁定 (LIGHTING LOCK):** 除非剧情有明确的时间/天气变化，否则**必须**保持全场光影的一致性。
    *   **禁止:** **严禁使用“同上”、“同前”或任何省略语。** 必须完整复述光影参数（如：冷调蓝光，侧逆光）。
5.  **第五行 (声音):** 必须以 \`**声音：**\` 开头。
    *   **必须包含专业音效分类:** 请使用 **[Impacts/Hits], [Transitions/Whooshes], [Risers/Builders], [Drones/Ambience], [Pulses], [Foley]** 等专业术语。
6.  **第六行 (音轨头):** 必须写 \`**音轨内容：**\`。
7.  **第七行及后续 (对白):** 如果有对白，每一行音轨内容都必须严格遵循以下 Markdown格式：
    **类型 (角色名 - 情绪加动作 - [风格名称]):** 内容文本
    
    *   **加粗规则：** 冒号前的信息 (类型+角色+情绪动作+风格) **必须加粗**。
    *   **中间部分：** 必须包含**情绪状态**或**伴随动作** (例如：*冷漠地抽烟* 或 *愤怒地拍桌子*)。
    *   **[风格名称]** 必须严格填入: **[${currentStyleName}]**。

**示例镜头块:**
\`\`\`text
#1-1-5 【特写】 【中心构图】 【平视】
**画面：** 约翰的侧脸在霓虹灯下忽明忽暗。雨水顺着他的鼻尖滴落。他深深吸了一口烟，烟雾在蓝色的光线中缭绕。
**环境：** 画面左侧前景是模糊的铁丝网边缘，形成一种压抑的框架感。背景是虚化的山脉轮廓，保持与上一镜相同的地平线高度。
**光影：** [高反差/High Contrast] 主光为冷调蓝光(7000K)从右侧打入，辅光微弱。阴影深重，强调轮廓。
**声音：** [Ambience]: 暴雨如注的底噪; [Foley]: 打火机清脆的咔哒声; [Music]: 低沉的合成器Drone音效。
**音轨内容：**
**对白 (约翰 - 冷漠地吐出一口烟圈 - [昆汀]):** 这就是你的计划？像个傻瓜一样站在这儿？
\`\`\`

${bibleAssetsInstruction}

${dnaInjection}

# 📦 5. 输出格式 (STRICT JSON)
生成一个包含以下 1 个键的 JSON 对象：
1.  **literaryScript**: 完整的剧本内容 (Markdown 字符串)。

# START JSON:
`;
};

export const buildStyleTransferPrompt = (
    originalScript: string,
    tone: GlobalVisualTone,
    assets: FinalAssetsData
): string => {

    const assetContext = `
    ### 🎭 资产强制映射 (ASSET MAPPING)
    **Use these visual anchors to describe characters and objects in the scene:**
    ${assets.characters.map(c => `* **${c.name}**: ${c.anchors} (${c.description})`).join('\n')}
    ${assets.scenes.map(s => `* **${s.name}**: ${s.anchors} (${s.description})`).join('\n')}
    ${assets.props.map(p => `* **${p.name}**: ${p.anchors} (${p.description})`).join('\n')}
    `;

    const toneContext = `
    ### 🎨 目标视觉基调 (TARGET VISUAL TONE)
    *   **Style:** ${tone.style || "Standard Cinematic"}
    *   **Lighting:** ${tone.lighting || "Natural"}
    *   **Texture:** ${tone.texture || "Realistic"}
    *   **Camera:** ${tone.camera || "Standard"}
    `;

    return `
Role: 世界级视觉调色师 & 风格迁移引擎 (Visual Colorist & Style Transfer Engine).
Task: **强制视觉重写 (Mandatory Visual Rewrite)**. 
Goal: 将“原文风格”的剧本进行彻底的**“洗稿”**，将其**“视觉皮相”**替换为【视觉圣经】定义的全新美学系统。

**关键规则：必须保留原始的 Markdown 结构 (协议头、场景头、镜头块格式)。**

**输入 1: 原文剧本 (THE BONE - 骨架)**
*   **不可变:** 剧情逻辑、人物关系、核心动作 (Action)、对白内容 (Dialogue)、镜号 (#1-1-1)。
*   **可变:** 所有的形容词、修饰语、环境描写、光影描述、镜头语言。
"${originalScript}"

**输入 2: 视觉圣经 (THE NEW SKIN - 皮肤)**
你必须严格基于以下 5 个维度重塑每一行文字：

1.  **🎨 Art & Style (艺术与风格 - 灵魂):** 
    *   *Directive:* ${tone.style}
    *   *Action:* 决定画面的整体构图逻辑、美术风格和导演气质（如：对称、极简、繁复）。

2.  **💡 Light & Atmosphere (光影与氛围 - 气氛):**
    *   *Directive:* ${tone.lighting}
    *   *Action:* 决定画面的明暗对比 (High/Low Key)、色温 (Temp/Tint) 和空气感 (Fog/Haze)。

3.  **📷 Medium & Format (媒介与格式 - 镜头):**
    *   *Directive:* ${tone.camera}
    *   *Action:* 决定画面的物理介质感（胶片/数码）、镜头焦段（广角/长焦）和成像特征。

4.  **🧶 Texture & Character (质感与特征 - 触感):**
    *   *Directive:* ${tone.texture}
    *   *Action:* 决定物体表面的微观纹理（颗粒、光泽、粗糙度、瑕疵）。

5.  **🌈 Color Palette (色板):**
    *   *Hex Codes:* [${tone.palette.join(', ')}]
    *   *Action:* 强制在描写中使用这些色系。

**输入 3: 核心资产 (ASSETS)**
(如果剧本中出现以下人/物，必须使用其特定的视觉描述)
${assetContext}

---

**执行指令 (EXECUTION PROTOCOLS):**

1.  **视觉霸权 (Visual Supremacy):** 
    *   如果原文是“一个普通的房间”，但【视觉圣经】是“赛博朋克”，你必须将其重写为“被霓虹灯管和裸露电线缠绕的潮湿房间”。
    *   如果原文是“阳光明媚”，但【视觉圣经】是“黑色电影”，你必须将其重写为“百叶窗切碎的阴郁午后，空气中漂浮着尘埃”。

2.  **去语义化 (De-semanticization):** 
    *   扫描原剧本中的所有形容词。如果它属于旧风格（如“阴森”、“苍白”），立刻删除或替换为新风格的词汇（如“通透”、“红润”）。

3.  **格式保持 (Format Preservation - CRITICAL):** 
    *   **协议头:** 更新 > **【核心视觉圣经】** 
        > **【艺术与风格】**: ${tone.style}
        > **【光影与氛围】**: ${tone.lighting}
    *   **场景头:** 必须保留 **SCENE [序号]**、**场号**、**人物**、**轴线**。
    *   **镜头块:** 必须保留 \`#1-1-1 【景别】【构图】【角度】\` 的格式。
        *   **UPDATE 1 (画面):** 重写 \`**画面：**\` 后的内容，融入新的美术风格。
        *   **UPDATE 2 (环境):** 重写 \`**环境：**\` 后的内容，确保空间质感符合视觉圣经。
        *   **UPDATE 3 (光影):** 重写 \`**光影：**\` 后的内容，强制执行新的光照指令。

4. **数字假体原则 (Digital Prosthetics / Identity Lock):**
   *   **定义:** 【人物参考图/资产描述】是不可更改的“3D扫描数据”。
   *   **执行:** 无论镜头是极远景还是眼球特写，人物的骨骼结构、五官间距、发际线、服饰细节必须**严格锁定**。
   *   **冲突裁决:** 哪怕与源文本小说描述不一致，也**必须**按照资产的人物形象来写。

5. **运动学链条锁定 (Kinematic Chain Locking):**
   *   **定义:** 动作必须具有物理连续性。
   *   **父级确立:** 当上一镜确立了动作（如：蜷缩坐在墙角），该动作即成为“物理事实”。
   *   **子级继承:** 随后的特写镜头必须基于该姿态构图（例如：手腕是弯曲的，背景是膝盖布料）。**严禁**在特写中重置人物姿态。
   *   **动态摄影机，静态演员:** 鼓励剧烈的机位变化（俯视/仰视/侧后），但**演员的冻结姿态不能变**。

6. **反滤镜协议 (ANTI-FILTER PROTOCOL - CRITICAL):**
   *   **拒绝单色污染:** 严禁因为视觉圣经是暖色调，就把所有物体都写成“黄色的”。**不要给画面加单色滤镜。**
   *   **物理光照:** 描述**光源的颜色**，而不是**物体的颜色**。
   *   **材质真实:** 必须描述物体在光照下的**固有色**（如：银色、黑色、红色）。即使在暖光下，黑色的物体依然是黑色的，只是带有暖色反光。
   *   **黑场锁定:** 必须保留深邃的**黑色阴影**，不要把暗部提亮或染色。**高反差 (Contrast)** 是消除滤镜感的关键。

7. **轴线与位置显化 (Explicit Spatial Axis):**
   *   **执行:** 只要分镜里写了人物，必须明确描写人物的**轴线或位置关系**（如：在画面左侧、背对窗户）。
   *   **连贯性:** 必须和最初确定的位置关系一致。除非有明确的移动事件，否则严禁越轴。

**输出格式 (STRICT JSON):**
{
  "literaryScript": "返回重写后的完整 Markdown 格式剧本 (简体中文)。确保每一场戏都充满了【视觉圣经】定义的独特味道，但看起来自然、真实，而非像是加了滤镜的图片。"
}
`;
};
