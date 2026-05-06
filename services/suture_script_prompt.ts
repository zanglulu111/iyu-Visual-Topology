
import { SutureConfig, NarrativeFieldState, GlobalVisualTone, FinalAssetsData } from '../types';
import {
    DIALOGUE_STYLES,
    VOICEOVER_STYLES,
    MONOLOGUE_STYLES,
    VISUAL_STYLES,
    FILM_CASES,
    SCENE_MODES,
    SCENE_FUNCTIONS,
    SHOT_BUDGETS,
    SOUND_ARCHITECTURES
} from '../data/suture/styles';
import { MONTAGE_STYLES } from '../data/suture/montage';
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

const findConfigItem = (library: any[], id?: string) => {
    if (!id) return undefined;
    return library.find(item => item.id === id);
};

const describeConfigItem = (label: string, item: any, fallback: string) => {
    if (!item) return `* **${label}:** ${fallback}`;
    const body = [item.core, item.instruction].filter(Boolean).join(' / ');
    return `* **${label}:** ${item.name}${body ? ` — ${body}` : ''}`;
};

const parseShotBudget = (id?: string): number | null => {
    if (!id || id === 'AUTO') return null;
    const match = id.match(/(?:BUDGET|SHOTS)_(\d+)/);
    return match ? Number(match[1]) : null;
};

const sanitizeDirectorInstructionForV2 = (instruction: string) => {
    if (!instruction) return "标准电影语法：清楚建立空间、动作因果、表演距离、剪辑呼吸和声音层级。";

    return instruction
        .replace(/0\.01公分/g, '极近的物理距离')
        .replace(/极高饱和度的情绪色（冷绿\/暖黄）、?/g, '')
        .replace(/冷绿\/暖黄/g, '情绪反差')
        .replace(/循环的爵士乐\/拉丁乐、雨声、沉重的时钟滴答声/g, '循环性音乐动机、环境底噪、重复的时间性声音')
        .replace(/雨水划过玻璃的痕迹、镜中重叠的倒影、时钟的秒针、斑驳的墙皮、缭绕的烟雾。?/g, '前景遮挡、反射/重叠、重复运动、空间表面细节与空气层次。')
        .replace(/凤梨罐头|过期日期|无脚鸟|大汉堡|圣经引用|红气球|旋转的陀螺/g, '禁用标志物')
        .trim();
};

const formatDirectorList = (items?: string[], maxItems?: number) => {
    if (!items || items.length === 0) return "* 未设定";
    const shown = typeof maxItems === 'number' ? items.slice(0, maxItems) : items;
    return shown.map(item => `* ${item}`).join('\n');
};

const voiceIntensityLabel = (value?: number) => {
    if (typeof value !== 'number') return '未设定';
    if (value >= 0.75) return '极高';
    if (value >= 0.55) return '高';
    if (value >= 0.35) return '中高';
    if (value >= 0.2) return '低到中';
    if (value > 0) return '低';
    return '禁用或极低';
};

const isAutoDensity = (value?: string) => !value || value === 'AUTO';

const formatVoiceTopology = (
    voice: any,
    densities?: {
        dialogue?: string;
        monologue?: string;
        voiceover?: string;
    }
) => {
    if (!voice || Object.keys(voice).length === 0) {
        return '* 未设定，按场景诊断自动决定。';
    }

    const suppressed: string[] = [];
    const lines = [
        typeof voice.silence === 'number'
            ? `* **留白:** ${voiceIntensityLabel(voice.silence)}。允许镜头沉默，不必每镜有语音。`
            : null,
        typeof voice.dialogue === 'number' && isAutoDensity(densities?.dialogue)
            ? `* **对白:** ${voiceIntensityLabel(voice.dialogue)}。只在人物关系、信息交换或权力变化需要时出现。`
            : null,
        typeof voice.monologue === 'number' && isAutoDensity(densities?.monologue)
            ? `* **独白:** ${voiceIntensityLabel(voice.monologue)}。可用于主观压力、时间错位和自我辩解，但每场只保留少量高价值句子。`
            : null,
        typeof voice.voiceover === 'number' && isAutoDensity(densities?.voiceover)
            ? `* **旁白:** ${voiceIntensityLabel(voice.voiceover)}。只用于题辞、时间层、命运感、记忆误差或反讽，不复述画面。`
            : null
    ].filter(Boolean);

    if (typeof voice.dialogue === 'number' && !isAutoDensity(densities?.dialogue)) suppressed.push('对白');
    if (typeof voice.monologue === 'number' && !isAutoDensity(densities?.monologue)) suppressed.push('独白');
    if (typeof voice.voiceover === 'number' && !isAutoDensity(densities?.voiceover)) suppressed.push('旁白');

    const suppressionNote = suppressed.length > 0
        ? `\n* **手动覆盖:** ${suppressed.join('、')}的用量已由声音高级微调接管，因此不显示导演默认强度，只保留下方时机规则。`
        : '';

    return lines.length > 0
        ? `${lines.join('\n')}${suppressionNote}`
        : `* 语音用量已由声音高级微调接管；本层只保留导演的进入时机、沉默方式和声音动机。`;
};

const buildStructuredDirectorCard = (style: any, fallbackInstruction: string, config?: SutureConfig) => {
    if (!style?.directorGrammar && !style?.directorRhetoric && !style?.voiceTopology) {
        return `### 导演语法卡（兼容旧词条，已去皮肤污染）\n${sanitizeDirectorInstructionForV2(fallbackInstruction)}`;
    }

    const grammar = style.directorGrammar || {};
    const rhetoric = style.directorRhetoric || {};
    const voice = style.voiceTopology || {};

    return `### 导演语法层（允许进入基础分镜）
**摄影/构图**
${formatDirectorList(grammar.camera)}

**剪辑/时间**
${formatDirectorList(grammar.editing)}

**场面调度**
${formatDirectorList(grammar.staging)}

**表演距离**
${formatDirectorList(grammar.performance)}

### 导演叙事修辞层（总控，不替代声音文体）
**叙事算法**
${formatDirectorList(rhetoric.narrativeLogic, 4)}

**允许的修辞装置**
${formatDirectorList(rhetoric.allowedDevices, 5)}

**禁用刻奇**
${formatDirectorList(rhetoric.bannedCliches)}

* **边界:** 本层只提供叙事算法和修辞倾向，不规定对白、旁白、独白的具体文体。三类声音的句子风格以下方“声音高级微调”的用户选择为准。

### 导演默认声音倾向（Soft Prior，只在对应声音为自动用量时显示）
${formatVoiceTopology(voice, {
    dialogue: config?.dialogueDensity,
    monologue: config?.monologueDensity,
    voiceover: config?.voiceoverDensity
})}
**时机规则**
${formatDirectorList(voice.timingRules)}

**声音动机**
${formatDirectorList(voice.soundMotifs)}`;
};

const isActiveFilmCase = (filmCase?: any) => Boolean(filmCase && filmCase.id && filmCase.id !== 'filmcase_none');

const formatFilmCaseList = (items?: string[]) => {
    if (!items || items.length === 0) return '* 未设定';
    return items.map(item => `* ${item}`).join('\n');
};

const buildV2FilmCaseProtocol = (filmCase?: any) => {
    if (!isActiveFilmCase(filmCase)) {
        return `# 4.5 影片案例层：未启用
* **状态:** 当前不借用任何影片案例机制。
* **隔离:** 导演语法、剪辑结构、声音架构和视觉圣经按各自层级独立工作。`;
    }

    const mechanics = filmCase.filmCaseMechanics || {};
    const boundaries = filmCase.filmCaseBoundaries || {};

    return `# 4.5 影片案例层（Film Case Reference / 只借场面机制）
当前影片案例：**${filmCase.name}**
核心机制：${filmCase.core || filmCase.instruction || '未设定'}

**它是什么**
* 影片案例层不是导演语法、不是视觉皮肤、不是故事素材库。
* 它只提供“这一类场面怎样组织”的机制参考：空间关系、信息释放、动作链、重复/延迟/并置/压缩、声音进入方式。
* 它不授权改写 CURRENT_SCENE_SOURCE，不授权复制原片，也不授权新增原片类型元素。

**可借机制**
${formatFilmCaseList(mechanics.sceneMechanics)}

**摄影/调度可借方式**
${formatFilmCaseList([...(mechanics.cameraUse || []), ...(mechanics.stagingUse || [])])}

**剪辑/时间可借方式**
${formatFilmCaseList(mechanics.editingUse)}

**表演/声音可借方式**
${formatFilmCaseList([...(mechanics.performanceUse || []), ...(mechanics.soundUse || [])])}

**只允许抽取**
${formatFilmCaseList(boundaries.extractOnly)}

**绝对禁止复制**
${formatFilmCaseList(boundaries.forbiddenCopies)}

**冲突裁决**
${formatFilmCaseList(boundaries.conflictPolicy)}

**与导演、剪辑结构、视觉皮肤的分离**
* 导演语法决定“每个切面怎么拍”；影片案例只决定“可借哪套场面机制”。
* 剪辑结构决定“镜头如何互相咬合”；影片案例不能改变剪辑结构的用户选择。
* 视觉圣经/参考图决定颜色、材质、媒介和资产外观；影片案例的片名、原片色彩和美术质感不得进入画面、环境、光影字段。
* 如果影片案例暗含源文本不存在的时代、城市、科技、服装、道具、怪物、品牌、宗教或音乐，必须抽象为剪辑/调度关系；抽象后仍不成立就不用。

**发送给 AI 的隔离规则**
* 本层只发送给“文学分镜文本生成”作为机制约束，不是图像生成词。
* 生成每个镜头时，不得把片名、原片角色名、原片道具或原片视觉标签写进 **画面/环境/光影/声音** 字段。
* 后续正式出图只应读取镜头块里的 **画面、环境、光影、资产锚点**；影片案例名称只作为制作端元数据，不是视觉描述。`;
};

const summarizeDensityForV2 = (value: string) => {
    const map: Record<string, string> = {
        AUTO: '自动',
        NONE: '不用',
        LOW: '低密度',
        MID: '中密度',
        HIGH: '高密度'
    };
    return map[value] || value;
};

const voiceDensityDirective = (value: string) => {
    const map: Record<string, string> = {
        AUTO: '自动自适应：是否出现与用量由声音架构、导演声音拓扑和当前片段共同判断。',
        NONE: '禁用：本场不写这一类语音，除非源文本明确存在且不可删除。',
        LOW: '低密度：只保留必要的一两处，避免抢走画面叙事。',
        MID: '中密度：可稳定参与叙事，但不能压过动作和声音环境。',
        HIGH: '高密度：允许明显增加用量，但仍不得违背场景事实和声音架构。'
    };
    return map[value] || value;
};

const voiceStyleDirective = (
    typeLabel: string,
    density: string,
    styleId: string,
    defaultId: string,
    rawDirectorName: string,
    library: any[]
) => {
    const safeStyleId = styleId || defaultId;
    const safeDensity = density || 'AUTO';
    const item = findConfigItem(library, safeStyleId);
    const styleLine = safeStyleId === defaultId
        ? `总导演风格 — 使用 ${rawDirectorName} 的声音口吻；若导演库只规定说话时机，则保持角色身份、时代语境和当前场景压力下的自然语言。`
        : `${item?.name || safeStyleId}${item?.core ? ` — ${item.core}` : ''}${item?.instruction ? ` / ${item.instruction}` : ''}`;

    return `**${typeLabel}**
* **用量:** ${voiceDensityDirective(safeDensity)}
* **文体:** ${styleLine}
* **文本隔离:** 这个文体只在“音轨内容”里实际写出“${typeLabel}”时生效；它决定句子怎么写，不授权强行插入语音，也不得把文体里的时代、物件、城市质感、比喻材料写进画面、环境、光影或音效。正式视觉生成只读取画面层时，台词文体不应污染视觉层。`;
};

const buildV2VoiceControlsProtocol = (
    rawDirectorName: string,
    config: SutureConfig
) => {
    return `### 声音高级微调（用户文体选择，必须接线）
${voiceStyleDirective('对白', config.dialogueDensity, config.dialogueStyle, 'dial_default', rawDirectorName, DIALOGUE_STYLES)}

${voiceStyleDirective('旁白', config.voiceoverDensity, config.voiceoverStyle, 'vo_default', rawDirectorName, VOICEOVER_STYLES)}

${voiceStyleDirective('独白', config.monologueDensity, config.monologueStyle, 'mono_default', rawDirectorName, MONOLOGUE_STYLES)}

* **总原则:** 导演和声音架构决定“何时说、说多少、从哪里进入”；上面三类词库决定“如果说，具体怎么写”。台词文体是文本表演层，不是视觉皮肤层。`;
};

const buildV2VisualSkinProtocol = (
    hasVisualBible: boolean,
    rawDirectorName: string,
    tone?: GlobalVisualTone,
    assets?: FinalAssetsData
) => {
    if (!hasVisualBible || !tone) {
        return `
### 视觉皮肤状态：中性骨架
* **未挂载视觉圣经。** 本轮只生成可被二次风格迁移的导演骨架。
* **导演只管怎么拍:** ${rawDirectorName} 只影响时间处理、构图倾向、剪辑呼吸、表演距离和声音组织。
* **禁止建立最终皮肤:** 不写色彩风格、媒介风格、材质流派、滤镜、胶片颗粒、动画/油画/赛博朋克/复古写实等最终图像词。
* **光影只写现场事实:** 只描述光源位置、遮挡、明暗关系和人物/物体被照亮的范围。`;
    }

    return `
### 视觉皮肤状态：视觉圣经已挂载
* **导演骨架:** ${rawDirectorName} 决定镜头调度、剪辑呼吸、表演距离和声音组织。
* **视觉皮肤:** 下列视觉圣经决定颜色、材质、媒介、光比、空气感和资产外观。
* **艺术与风格:** ${tone.style}
* **光影与氛围:** ${tone.lighting}
* **媒介与镜头质感:** ${tone.camera}
* **表面纹理:** ${tone.texture}
* **色板:** [${tone.palette.join(', ')}]
${assets ? `
* **角色资产:** ${assets.characters.map(c => `${c.nameEn || c.name}=${c.anchors}`).join('；') || '无'}
* **场景资产:** ${assets.scenes.map(s => `${s.nameEn || s.name}=${s.anchors}`).join('；') || '无'}
* **道具资产:** ${assets.props.map(p => `${p.nameEn || p.name}=${p.anchors}`).join('；') || '无'}` : ''}
* **锁定:** 视觉皮肤不得改变剧情事实、时代、地点、人物关系、镜头功能、镜头顺序和动作结果。`;
};

const buildShotBudgetProtocol = (
    isV2: boolean,
    shotBudgetId: string,
    fixedShotCount: number | null,
    targetShots: number
) => {
    if (!isV2) {
        return `
* **旧版固定镜头数:** 必须生成 ${targetShots} 个镜头。
* **编号:** #...-1 到 #...-${targetShots} 连续编号，不得缺号。`;
    }

    const coreRule = fixedShotCount
        ? `**核心镜头数锁定为 ${fixedShotCount}。** 必须生成 ${fixedShotCount} 个核心镜头，不为版式补格。`
        : `**自动预算模式。** 你必须先在协议头声明最终选择的核心镜头数，只能从 **4 / 6 / 9 / 12 / 16 / 20 / 25** 中选择。选择原则：用最少镜头完成最高质量叙事，不为整齐而填充。`;

    return `
### 镜头预算协议 (Shot Budget V2)
* ${coreRule}
* **预算语法:**
  * **4:** 图标压缩。建置 / 关键动作 / 反应 / 落幅，每一镜都必须承担核心意义。
  * **6:** 最小戏剧链。每镜对应一个清楚节拍。
  * **9:** 短场展开。适合建置、转折、落幅各三拍。
  * **12:** 标准电影场。兼顾空间、动作、反应、插入和留白。
  * **16:** 表演细化。允许更多微反应、潜台词和心理漂移。
  * **20:** 复杂调度。适合多人、动作链、悬疑逼近或空间变化。
  * **25:** 高密度拆解。仅用于源文本密度足够、动作链复杂或用户明确要求 25 镜头。
* **反填充规则:** 如果源文本本身很短，不要增加剧情；只能纵向放大动作、呼吸、物件状态、空间反馈和声音残留。
* **编号规则:** 镜头连续编号，数量必须等于协议头声明的核心镜头数。`;
};

const buildSceneDiagnosisProtocol = (isV2: boolean) => {
    if (!isV2) return "";

    return `
### 场景诊断协议 (Scene Diagnosis V2)
* **第一步先诊断，不要先分镜。** 在内部判断：这场戏真正靠什么成立？关系压力、动作链、信息遮挡、仪式程序、心理崩塌、群像调度，还是空场余波。
* **场景类型优先级:** 用户指定的场景类型 > 源文本显性事件 > 导演习惯。
* **戏剧功能优先级:** 用户指定的戏剧功能 > 本场在故事中的实际功能 > 形式美感。
* **输出不需要解释诊断过程**，但每个镜头必须体现诊断结果。`;
};

const buildSoundArchitectureProtocol = (
    isV2: boolean,
    soundArchitectureId: string,
    dialogueLogic: string,
    voLogic: string,
    monoLogic: string,
    dialogueStyle: string,
    voStyle: string,
    monoStyle: string,
    targetShotsLabel: string,
    silentShots: number,
    activeAudioShots: number
) => {
    if (!isV2) {
        return `
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
*   **总镜头数:** ${targetShotsLabel}
*   **留白镜头 (呼吸空间):** 约 ${silentShots} 个镜头。(纯画面、音效、音乐。无语音)。
*   **有声镜头:** 约 ${activeAudioShots} 个镜头。`;
    }

    const soundDef = findConfigItem(SOUND_ARCHITECTURES, soundArchitectureId);
    return `
### A. 声音架构裁决 (SOUND ARCHITECTURE V2)
${describeConfigItem('声音架构', soundDef, soundArchitectureId)}
* **主决策层:** 声音架构决定本场“靠什么听见”。它高于旧版对白/旁白/独白密度。
* **高级微调层:** 下列旧字段只作为口吻与用量微调，不得推翻声音架构。
  * 对白: ${dialogueLogic} / ${dialogueStyle}
  * 旁白: ${voLogic} / ${voStyle}
  * 独白: ${monoLogic} / ${monoStyle}
* **声音类型可用范围:**
  * **对白:** 只在人物关系、信息交换或权力变化需要时出现。
  * **内心独白:** 只写人物无法说出口的主观压力，不解释画面。
  * **旁白:** 只提供时间层、命运感、记忆误差或反讽，不复述画面。
  * **同步声:** 呼吸、脚步、衣料、空间混响、物件碰撞必须具体。
  * **字幕/文字卡:** 只在 TEXT_CARD 或源文本需要文字作为电影语言时使用。
* **留白原则:** 总镜头预算为 ${targetShotsLabel}。不要机械按比例塞台词；让每条声音有进入、停顿、退出和余响。`;
};

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
    const filmCaseDef = FILM_CASES.find(s => s.id === (config.filmCaseId || 'filmcase_none'));
    const filmCaseName = isActiveFilmCase(filmCaseDef) ? filmCaseDef?.name : '未使用';

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

    // 3. Calculate Shot Budget / Board Target
    const isV2 = config.controlVersion !== 'legacy';
    const sceneModeId = config.sceneMode || 'AUTO';
    const sceneFunctionId = config.sceneFunction || 'AUTO';
    const shotBudgetId = isV2 ? (config.shotBudget || 'AUTO') : (config.shotDensity || 'SHOTS_25');
    const soundArchitectureId = isV2 ? (config.soundArchitecture || 'AUTO') : 'AUTO';
    const shotCountMap: Record<string, number> = {
        'SHOTS_4': 4,
        'SHOTS_6': 6,
        'SHOTS_9': 9,
        'SHOTS_12': 12,
        'SHOTS_16': 16,
        'SHOTS_20': 20,
        'SHOTS_25': 25
    };
    const fixedShotCount = isV2 ? parseShotBudget(shotBudgetId) : (shotCountMap[config.shotDensity] || 25);
    const targetShots = fixedShotCount || 12;
    const targetShotsLabel = fixedShotCount ? `${fixedShotCount}` : 'AUTO（从 4/6/9/12/16/20/25 中选择）';
    const idRangeLabel = fixedShotCount ? `${fixedShotCount}` : '你在协议头声明的最终核心镜头数';
    const shotBudgetProtocol = buildShotBudgetProtocol(isV2, shotBudgetId, fixedShotCount, targetShots);
    const sceneDiagnosisProtocol = buildSceneDiagnosisProtocol(isV2);

    // New Density Config Logic (Visuals)
    const subjectFocusMap: Record<string, string> = {
        'NONE': '手动覆盖：尽量减少人物主体，只在必要动作和关系信息处出现。',
        'LOW': '手动覆盖：低主体密度，更多依靠空间、道具和声音压力。',
        'MID': '手动覆盖：主体与环境平衡。',
        'HIGH': '手动覆盖：提高人物主体存在感，更多近景、反应和身体细节。',
        'AUTO': '自动自适应：跟随场景诊断与导演习惯，不额外干预。'
    };
    const emptyShotMap: Record<string, string> = {
        'NONE': '手动覆盖：不主动安排空镜，除非源文本或动作链需要。',
        'LOW': '手动覆盖：少量空镜，只用于建置或落幅。',
        'MID': '手动覆盖：适度空镜，用空间和声音补足呼吸。',
        'HIGH': '手动覆盖：增加空镜/留白镜头，但每一镜必须有声音、痕迹或叙事压力。',
        'AUTO': '自动自适应：跟随场景诊断与导演习惯，不额外干预。'
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
    const soundArchitectureProtocol = buildSoundArchitectureProtocol(
        isV2,
        soundArchitectureId,
        dialogueLogic,
        voLogic,
        monoLogic,
        dialogueStyle,
        voStyle,
        monoStyle,
        targetShotsLabel,
        silentShots,
        activeAudioShots
    );

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
    const hasVisualBible = !!globalStyleContext;
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
        // Fallback if no visual bible is provided: keep the base script as a neutral directing skeleton.
        bibleToneDesc = `
> **【核心视觉圣经】**
> **【艺术与风格】**: 中性导演骨架 / 未挂载视觉皮肤
> **【光影与氛围】**: 仅记录剧情现场的物理光源，不建立最终色调`;

        visualBibleInstruction = `
### 🛡️ 全加工生产线协议 (BONE-SOUL-NEUTRAL SKIN)
**当前未挂载参考图/视觉圣经。你只能生成【中性导演骨架】，不能自行发明最终画面风格。**

1. **骨架 (BONE):** 严格遵循源文本剧情、时代、地点、动作与人物关系。
2. **灵魂 (SOUL):** 严格遵循 [${directorName}] 的导演风格，只控制：镜头调度、剪辑节奏、轴线、台词/旁白/独白的声音策略。
3. **中性皮肤 (NEUTRAL SKIN):** 只写现场客观可见的空间、动作、固有物和自然物理光源。不要建立最终色彩、媒介、材质流派或图像生成风格。

### 🚫 基础剧本去影调污染协议 (BASE SCRIPT DE-COLORING)
* **禁止自动调色:** 严禁主动写入“青绿色调、霓虹、胶片颗粒、油画质感、赛博朋克、复古写实、黏土、动画、新海诚、暗黑哥特”等最终视觉皮肤词。
* **禁止导演皮肤化:** 导演风格只能变成“怎么拍”，不能变成“画面长什么材质/颜色”。例如王家卫可以影响慢门、旁白、孤独节奏，但不能默认生成港式霓虹和绿色荧光。
* **光影只写物理事实:** 只描述“窗外自然光从左侧进入 / 火把从下方照亮 / 阴影遮住半张脸”等现场光源关系。不要给出最终色温、滤镜色调或调色方案。
* **材质只写剧情事实:** 如果源文没有说明“油画、陶土、CGI、胶片、颗粒”，不要擅自添加。最终媒介质感留给视觉圣经/参考图迁移步骤。
      `;
    }

    const visualAnchorRule = hasVisualBible
        ? `*   **物理真实:** 无论镜头如何变换，必须100%保留参考图/视觉圣经的材质、色彩分级、光影对比度和颗粒度。
*   **导演滤镜:** 请用 **[${rawDirectorName}]** 的运镜逻辑执行，但**视觉材质**必须服从[视觉圣经]。`
        : `*   **中性骨架:** 当前没有参考图/视觉圣经，严禁自行确定最终色彩、媒介、质感或美术流派。
*   **导演调度:** 请用 **[${rawDirectorName}]** 的运镜、剪辑和表演调度执行；所有颜色、材质、媒介风格保持待定，只记录源文本已有的物理事实。`;

    const lightingFieldGuard = hasVisualBible
        ? `*   **视觉圣经锁定:** 光影必须服从核心视觉圣经，并完整描述光质、光比、色温、色调与光源方向。`
        : `*   **中性光影锁定:** 未挂载视觉圣经时，光影字段只允许写物理光源、方向、遮挡和明暗关系；不得写最终色温、调色倾向、滤镜、胶片/绘画/动画质感。`;
    const lightingContentSpec = hasVisualBible
        ? `描述**光质**（硬光/软光）、**光比**（高反差/低反差）、**色温/色调**及**光源方向**。`
        : `描述**现场可见光源**、**光线方向**、**遮挡关系**和**明暗分布**；不要写最终色温、色调、调色方案或媒介质感。`;
    const lightingNoRepeatRule = hasVisualBible
        ? `**严禁使用“同上”、“同前”或任何省略语。** 必须完整复述光影参数（如：冷调蓝光，侧逆光）。`
        : `**严禁使用“同上”、“同前”或任何省略语。** 必须完整复述现场光源关系（如：门缝右侧入光，桌面遮挡形成阴影）。`;
    const visualConsistencyLaw = hasVisualBible
        ? `**同一场戏内的所有镜头，必须共享完全一致的视觉基调。**
*   **光源一致性:** 确保所有镜头的光源方向、色温和质感是一致的。
*   **反滤镜协议:** 严禁给画面加单色滤镜。确保暗部是黑色，亮部保留细节。
*   **对比度锁定:** 全程保持一致的明暗比（如：全片高反差）。
*   **光场统一:** 确保前后镜头看起来是在同一个物理空间和光照条件下拍摄的。严禁出现“跳戏”的视觉断层。`
        : `**同一场戏内的所有镜头，必须共享同一个现场物理空间，而不是同一个最终视觉风格。**
*   **光源一致性:** 只锁定源文本允许的现场光源方向、遮挡关系和明暗分布。
*   **中性一致性:** 不要推导全片色温、滤镜、媒介质感或美术流派；这些留给视觉圣经迁移步骤。
*   **空间统一:** 确保前后镜头看起来是在同一个物理空间和同一段剧情时间内拍摄的。严禁出现“跳戏”的空间断层。`;

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

    // *** EDITING STRUCTURE SELECTION ***
    const rawMontageId = config.montageId || 'montage_none';
    const montageDef = MONTAGE_STYLES.find(m => m.id === rawMontageId);
    const montageId = montageDef ? rawMontageId : 'montage_none';
    const isStandardMode = montageId === 'montage_none';

    let montageHeader = "";
    let structureText = "";

    if (isV2) {
        if (isStandardMode) {
            montageHeader = `**[模式: AUTO 剪辑结构 V2 (Scene-Diagnosed)]**`;
            structureText = `
### 🏗️ V2 分镜结构：诊断优先，而非配额优先
${sceneDiagnosisProtocol}
${shotBudgetProtocol}

**结构原则:**
1. **建置:** 用最少镜头建立空间、人物位置、轴线和当场压力。
2. **流动:** 每个镜头必须改变一个真实变量：距离、权力、认知、危险、姿态、声音层或物件状态。
3. **转折/揭示:** 如果本场存在转折，镜头顺序必须服务于信息释放，不得提前泄露。
4. **落幅:** 最后一枚核心镜头必须停在源文本结束的那一秒，留下情绪余波。
5. **节拍:** 镜头长短由戏剧节拍、动作链和声音进入/退出决定。慢镜头必须有内部变化，快切必须保持空间连续性。
6. **镜头功能标注:** 每个镜头都必须写 \`**镜头功能：**\`，可使用【核心镜头 / 反应镜头 / 插入镜头 / 留白镜头 / 过渡镜头】。`;
        } else {
            montageHeader = `**[模式: 剪辑结构：${montageDef?.name} 已激活 + V2预算系统]**`;
            structureText = `
### ✂️ V2 剪辑结构 (Editing Relationship + Shot Budget)
**当前策略:** [${montageDef?.name}]
* **执行逻辑:** ${montageDef?.core}
* **操作方式:** ${montageDef?.instruction}
* **权限:** 本策略只控制镜头之间的时间关系、空间并置、信息释放、重复、省略、延宕和加速方式。
* **融合:** 剪辑结构决定“镜头如何互相咬合”，导演语法 [${rawDirectorName}] 决定“每个切面如何被拍摄”。

${sceneDiagnosisProtocol}
${shotBudgetProtocol}

**关键限制:**
* 剪辑结构不决定镜头数量；镜头数量由镜头预算决定。
* 剪辑结构不决定导演风格；导演语法决定每个镜头怎么拍。
* 剪辑结构不决定视觉皮肤；视觉圣经/参考图决定颜色、材质和媒介。
* 剪辑结构不新增剧情、人物、道具、世界规则或后文事件。
* 如果所选策略含有源文本不存在的类型片元素，必须抽象为剪辑关系，不得直译。
* AUTO 时由场景诊断 + 导演语法共同决定；手动选择时，只覆盖导演默认剪辑习惯，不突破 CURRENT_SCENE_SOURCE。`;
        }
    } else if (isStandardMode) {
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
        // --- SPECIAL EDITING STRUCTURE MODE ---
        montageHeader = `**[模式: 剪辑结构：${montageDef?.name} 已激活]**`;

        structureText = `
### ✂️ 剪辑结构 (EDITING RELATIONSHIP)
**当前策略: [${montageDef?.name}]**
**核心指令:** 此策略只决定镜头之间如何切割时间、并置空间、释放信息、重复、省略、延宕或加速。

*   **执行逻辑:** ${montageDef?.core}
*   **操作方式:** ${montageDef?.instruction}
*   **融合:** 在这个剪辑关系下，应用 **[${rawDirectorName}]** 的镜头、表演距离和声音组织。
*   **结构:** 请根据此策略的时间/信息关系，合理安排 ${targetShots} 个镜头的起承转合。
*   **边界:** 剪辑结构不得新增剧情、人物、道具、世界规则或后文事件；如果策略描述包含源文本不存在的类型片元素，必须抽象为剪辑关系，不得直译。
      `;
    }

    const mistProtocol = isV2 ? `
# 🎬 2. 迷雾学派：V2 预算制电影分镜协议 (MIST SHOT-BUDGET PROTOCOL)
**任务核心：** 你写的是**文学分镜 Scriptment**，但 V2 不再用机械配额制造“像分镜”的表象。你必须先理解场景，再选择镜头数和镜头功能。

### A. 物理与风格的双重锚定 (Physical & Style Anchor)
${visualAnchorRule}

### B. 📐 空间轴线锁定 (AXIS OF ACTION LOCK - CRITICAL)
* **定义轴线:** 在场景头中明确主要人物/物体之间的假想连线。
* **机位侧重:** 说明摄像机主要位于轴线哪一侧。
* **视线匹配:** 人物视线、运动方向、左右关系必须在切换中保持连贯。
* **允许越轴的唯一条件:** 必须先用移动镜头、切出镜头或明显的空间重建镜头交代越轴过程。

### C. 镜头功能优先，而不是景别配额
1. **禁止机械配额:** 不要为了满足“必须有几个特写/几个鸟瞰/几个荷兰角”而破坏场景。荷兰角、高低角度、极特写只在戏剧压力需要时使用。
2. **每镜必须有功能:** 每个镜头都要回答“这一镜改变了什么”：空间信息、动作因果、人物关系、认知差、心理压力、声音层、物件状态或节奏呼吸。
3. **景别变化要有动机:** 远景用于关系和空间，中特用于行动，特写用于不可替代的情绪/证据，极特写用于物理证据或心理裂缝。
4. **插入镜头不是装饰:** 道具/环境插入必须改变观众对局势的理解，或承接动作链。
5. **留白镜头不是空白:** 留白必须有声音、光、痕迹、物件状态或人物缺席带来的叙事压力。

### D. 连贯性铁律 (ABSOLUTE CONTINUITY)
* **空间位置连贯:** 人物左右、前后、距离、站坐姿态必须继承上一镜。
* **动作连贯:** 上一个镜头的动作尾声必须在下一个镜头中获得物理回应。
* **时间边界:** 不得进入当前片段之后的故事结果。短文本优先纵向放大；如需横向增补，只能增加当前场内的临场互动、表演反应和局部动作。
* **声音连贯:** 环境声和音乐不是每镜重置，而是有层级、进入、退出和余响。

### E. 🧱 视觉一致性铁律 (VISUAL CONSISTENCY LAW - ABSOLUTE)
${visualConsistencyLaw}
` : `
# 🎬 2. 迷雾学派：${targetShots}帧电影级分镜协议 (MIST ${targetShots}-FRAME PROTOCOL)
**任务核心：** 你写的不是普通小说，而是**“文学分镜 (Scriptment)”**。你必须将故事精确拆分为约 ${targetShots} 个具体的镜头。

### A. 物理与风格的双重锚定 (Physical & Style Anchor)
${visualAnchorRule}

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
${visualConsistencyLaw}
`;

    const v2HeaderConfig = isV2
        ? ` | 场景:${findConfigItem(SCENE_MODES, sceneModeId)?.name || sceneModeId} | 功能:${findConfigItem(SCENE_FUNCTIONS, sceneFunctionId)?.name || sceneFunctionId} | 镜头预算:${findConfigItem(SHOT_BUDGETS, shotBudgetId)?.name || shotBudgetId} | 剪辑结构:${findConfigItem(MONTAGE_STYLES, montageId)?.name || montageId} | 影片案例:${filmCaseName} | 声音:${findConfigItem(SOUND_ARCHITECTURES, soundArchitectureId)?.name || soundArchitectureId}`
        : "";

    if (isV2) {
        const sceneModeDef = findConfigItem(SCENE_MODES, sceneModeId);
        const sceneFunctionDef = findConfigItem(SCENE_FUNCTIONS, sceneFunctionId);
        const shotBudgetDef = findConfigItem(SHOT_BUDGETS, shotBudgetId);
        const soundDef = findConfigItem(SOUND_ARCHITECTURES, soundArchitectureId);
        const structuredDirectorCard = buildStructuredDirectorCard(visDef, directorInstruction, config);
        const filmCaseProtocol = buildV2FilmCaseProtocol(filmCaseDef);
        const v2VoiceControlsProtocol = buildV2VoiceControlsProtocol(rawDirectorName, config);
        const visualSkinProtocolV2 = buildV2VisualSkinProtocol(
            hasVisualBible,
            rawDirectorName,
            globalStyleContext?.tone,
            globalStyleContext?.assets
        );
        const visualBibleHeader = hasVisualBible && globalStyleContext
            ? `> **【核心视觉圣经】**\n> **【艺术与风格】**: ${globalStyleContext.tone.style}\n> **【光影与氛围】**: ${globalStyleContext.tone.lighting}`
            : `> **【核心视觉圣经】**\n> **【艺术与风格】**: 中性导演骨架 / 未挂载视觉皮肤\n> **【光影与氛围】**: 只记录现场物理光源，不建立最终色调`;
        const productionContext = (previousContext || fullStory || "").slice(0, 1800);

        return `
你是 **剧本换喻导演台 V2**。
你的工作不是复述小说，也不是套旧版25格模板，而是把 <CURRENT_SCENE_SOURCE> 转译成可拍摄、可解析、可继续做视觉皮肤迁移的文学分镜。

质量目标：顶尖电影分镜。每个镜头必须有戏剧功能、空间逻辑、动作连续性和声音层级。

# 0. 输出必须长这样
返回 JSON，且只返回 JSON：
{
  "literaryScript": "完整 Markdown 剧本文本",
  "extractedAssets": {
    "characters": [
      { "id": "asset_character_1", "name": "角色中文名", "nameEn": "Character English Name", "type": "CHARACTER", "anchors": "3-5个高权重视觉锚点", "description": "角色外貌描述：年龄段、脸部/身体特征、发型、服装、材质、磨损、可见状态；只写源文本明示或物理必然成立的视觉事实" }
    ],
    "scenes": [
      { "id": "asset_scene_1", "name": "场景中文名", "nameEn": "Scene English Name", "type": "SCENE", "anchors": "3-5个高权重视觉锚点", "description": "场景视觉描述：空间结构、地貌/建筑、天气、光源、材质、尺度与遮挡关系；只写当前故事事实" }
    ],
    "props": [
      { "id": "asset_prop_1", "name": "道具中文名", "nameEn": "Prop English Name", "type": "PROP", "anchors": "3-5个高权重视觉锚点", "description": "道具视觉描述：形状、材质、颜色、磨损、尺度、使用痕迹；只写当前故事事实" }
    ]
  }
}
**JSON 硬规则:** 必须返回可被 JSON.parse 直接解析的合法 JSON；不要使用 \`\`\`json 代码块；不要添加 JSON 外说明；不要尾随逗号；literaryScript 必须是一个字符串，字符串内部换行用 \\n 表示，字符串内部双引号必须转义。

literaryScript 内部必须按以下顺序书写：
1. 协议头
2. 场景头
3. 镜头块

extractedAssets 必须从 CURRENT_SCENE_SOURCE 当前片段提取，不得提前使用后文资产。角色资产必须保留可用于一致性生图的外貌描述；如果源文本没有明示某项外观，不要编造，写“未明示，需后续资产设计锁定”。

协议头必须包含：
> **【换喻导演台 V2】** 场景诊断：[你的判断]｜戏剧功能：[你的判断]｜核心镜头数：[4/6/9/12/16/20/25之一]｜剪辑结构：[${findConfigItem(MONTAGE_STYLES, montageId)?.name || montageId}]｜导演语法：[${rawDirectorName}]｜影片案例：[${filmCaseName}]｜声音架构：[你的判断]
${visualBibleHeader}

场景头必须包含：
**SCENE [场景序号]**
**场号：[INT./EXT.] [地点] - [时间]**
**人物：[角色A], [角色B]...**
**轴线：[主要人物/物体之间的轴线 + 摄像机所在侧 + 人物左右/前后关系]**

每个镜头块必须严格使用：
\`#${partIndex}-1-{镜号} 【{景别}】 【{构图}】 【{角度}】\`
**镜头功能：** {核心镜头/反应镜头/插入镜头/留白镜头/过渡镜头 + 这一镜改变了什么}
**画面：** {核心主体的状态、姿态、动作；可以补当前场内的临场表演，但不得改变源文本骨架和结果}
**环境：** {前景/中景/背景/负空间/绝对坐标；不得写“同上”}
**光影：** {现场物理光源、方向、遮挡、明暗分布；无视觉圣经时不得写最终色调/滤镜/媒介}
**声音：** {使用 [Impacts/Hits], [Transitions/Whooshes], [Risers/Builders], [Drones/Ambience], [Pulses], [Foley] 等分类写声音层}
**音轨内容：**
{如果无语音写“无”；如果有语音，用 **类型 (角色名 - 情绪/动作 - [对应文体名]):** 内容。对白填[${dName}]，旁白填[${vName}]，独白填[${mName}]。}

# 1. 输入边界
<PRODUCTION_CONTEXT>
这是给导演、演员、剪辑和制作端看的上下文，不是可改编文本。
允许用途：识别人物真实身份、人物关系、时代背景、世界规则、空间连续性、画外声的真实说话者、资产一致性。
禁止用途：不得用它提前改编后文具体事件、反转、地点变化、动作结果、道具细节或原文台词。
核心判定句：**身份和关系可以来自 PRODUCTION_CONTEXT；当前片段骨架、场景边界、信息释放顺序和因果结果必须来自 CURRENT_SCENE_SOURCE；导演化新增只能发生在当前场内，且必须服务原骨架。**
如果 PRODUCTION_CONTEXT 含有 CURRENT_SCENE_SOURCE 之后的内容，只把它当制作端身份表和连续性备忘录；后文事件不得改写为当前镜头、台词、道具或声音线索。
"${productionContext}..."
</PRODUCTION_CONTEXT>

<CURRENT_SCENE_SOURCE>
这是当前片段的故事骨架。剧本必须保持这里的场景、人物处境、关键动作、信息边界和结果。
**当前片段骨架定义:** 地点与时间；当前片段已出现或被确认的角色/声音；人物在本片段内的处境、目标和信息差；源文本明示或物理必然推出的关键动作；信息释放顺序；本片段最后一个语义单位；本片段已经造成的结果。
**导演化增补范围:** 可以补当前空间里物理成立的微动作、停顿、反应、走位和短句；不得新增会改变因果的事件，不得提前使用后文才出现的动作、位置、服装、道具细节、台词或结果。
"""
${text}
"""
</CURRENT_SCENE_SOURCE>

# 2. V2 控制台参数
${describeConfigItem('场景类型', sceneModeDef, sceneModeId)}
${describeConfigItem('戏剧功能', sceneFunctionDef, sceneFunctionId)}
${describeConfigItem('镜头预算', shotBudgetDef, shotBudgetId)}
${describeConfigItem('影片案例', filmCaseDef, '不使用影片案例')}
${describeConfigItem('声音架构', soundDef, soundArchitectureId)}

* **主体密度:** ${subjectInstruction}
* **空镜留白:** ${atmosphereInstruction}
* **可读性底线:** 主体密度和空镜留白只能调节镜头重心，不能牺牲关键人物状态、动作链、空间方位、信息释放和本场机制的可读性。
* **声音微调摘要:** 对白=${summarizeDensityForV2(config.dialogueDensity)} / 旁白=${summarizeDensityForV2(config.voiceoverDensity)} / 独白=${summarizeDensityForV2(config.monologueDensity)}

${structureText}

${config.directorNote ? `
# 3. 人类导演手记
${config.directorNote}
这条手记高于预设风格，但不得突破输入边界。
` : ""}

# 4. 导演风格分层，不是视觉皮肤混写
导演选择：**${rawDirectorName}**

使用规则：
* **导演语法层**控制怎么拍：镜头、剪辑、调度、表演距离。
* **导演叙事修辞层**控制怎么讲故事：数字、时间、重复、情感量化、主观偏差等。它必须保留，这是导演风格的核心。
* **导演声音拓扑**控制何时说、何时沉默、声音从哪里进入；但具体句子的文体仍听对白/旁白/独白风格选择。
* **导演视觉皮肤层**不进入基础分镜 prompt，避免污染参考图。色彩、材质、媒介、绘画风格只由视觉圣经/参考图或专门的二次染色阶段决定。

${structuredDirectorCard}

${filmCaseProtocol}

${visualSkinProtocolV2}

# 5. 场景诊断规则
先在内部诊断，不要把诊断过程写成说明文。诊断必须落实到镜头。

* 制作端上帝视角允许用于命名人物身份：如果 CURRENT_SCENE_SOURCE 中出现画外声、未明说人物或代词，而 PRODUCTION_CONTEXT 能确认其真实身份，可以在“人物”和“音轨内容”里使用真实角色名。
* 但是角色身份不等于后文事件授权。即使知道画外声是谁，也不能把该角色在后文才出现的动作、位置、服装、表情、道具或原文台词提前写入当前镜头。
* 当前片段骨架包括：地点、时间、当前片段已出现或被确认的角色/声音、人物处境、目标与信息差、关键动作、信息揭示顺序、当前片段终点和已发生结果。
* 允许导演化局部增补：可以新增当前场景物理条件允许的临场短句、微动作、停顿、反应、走位和低阶互动，用来强化导演拍法和关系压力。
* 增补边界：新增内容不得改变原故事骨架、场景地点、人物目标、关键因果、信息揭示顺序和当前片段的结果；不得新增不属于当前空间的功能角色；不得让临时边缘角色承担新信息、推动因果或替代源文本角色功能；不得把后文事件伪装成“导演发挥”。
* 如果是开场建置：优先建立时代、空间、人物状态、危险压力和核心感官/行动能力。
* 如果文本短：优先纵向放大身体细节、环境压力、道具状态、声音线索和生存压力；如需新增互动，只能是当前场内的低阶补强，不得横向续写后续剧情。
* 如果 AUTO：选择最小但足够完整的镜头数。短开场通常优先 6/9/12；只有复杂调度才用 16/20/25。
* 每个镜头必须改变一个变量：空间认知、人物状态、危险感、听觉信息、道具意义、宗教/道德压力、或情绪余波。

# 6. 声音架构规则
声音架构不取代对白/旁白/独白风格，而是决定整场声音的宏观节奏。

${v2VoiceControlsProtocol}

* **声音架构:** 决定本场靠什么听见：对白驱动、视觉默片、同步声真实主义、内心独白、旁白叙事、混合声景等。
* **导演声音拓扑:** 决定什么时候说、沉默多久、声音从画内还是画外进入、语音是否与画面错位。
* **台词风格选择:** 决定具体句子怎么写。导演可以控制说话时机，但对白/旁白/独白的文体由用户选择的风格控制。
* **声音裁决顺序:** 1) CURRENT_SCENE_SOURCE 已有语音/文字优先保留其事实；2) 用户手动 NONE/LOW/MID/HIGH 决定该类语音用量上限或禁用；3) 声音架构决定本场主声道和听觉推进方式；4) 导演声音拓扑只在 AUTO 用量时提供默认倾向和进入时机；5) 对白/旁白/独白词库只决定句子文体，不决定是否强行出现。
* AUTO 时，根据场景选择主轴；判断以 CURRENT_SCENE_SOURCE 的故事骨架为准，身份关系可参考 PRODUCTION_CONTEXT。
* 题辞、引文、经文默认必须优先处理为文字卡/黑场字幕/书页文字，不计入旁白密度，不套用旁白文体，音轨内容优先写“无”。只有当源文本明确写出有人朗读/被听见，或人类导演手记明确要求朗读时，才可改为旁白或画外声。
* 不要把小说说明直接改成旁白说明。
* 内心独白只能写无法说出口的主观压力，不能解释画面已经显示的事实。
* 环境声必须具体：只能使用当前片段中已经存在或物理上必然存在的音源、空间回声、身体声和物件声。
* 无人对话时，音轨内容可以写“无”。不要为了导演风格硬塞对白、旁白或独白。

# 7. 不可违反的边界
* 以 CURRENT_SCENE_SOURCE 的故事骨架为准进行导演化改编。
* PRODUCTION_CONTEXT 只提供制作端身份、关系和世界设定；不能提供后文剧情素材。
* 不能写 PRODUCTION_CONTEXT 中后续才出现的动作结果、反转、地点变化、道具细节或原文台词。
* 可以新增当前场内的临场短句、微动作、反应和低阶互动，但不能改变原故事因果、人物目标、信息释放顺序和当前片段结果。
* 可以把 CURRENT_SCENE_SOURCE 中身份未明的声音标成制作端真实身份，例如“艾琳（画外声）”，前提是 CURRENT_SCENE_SOURCE 中确实已经出现那句声音或行动。
* 不能把比喻直译成实体道具。修辞只提供情绪、身体感和氛围方向，不能凭空变成画面里的物件或声音来源。
* 不能添加现代物件、现代声音、现代光源。
* 未挂载视觉圣经时，不能写“冷绿、暖黄、霓虹、胶片颗粒、油画、赛博朋克、动画、新海诚、复古写实”等最终皮肤。
* CURRENT_SCENE_SOURCE 中已经存在的引文、文字、歌谣或仪式语言可以保留；PRODUCTION_CONTEXT 中才出现的不能提前加入。
* 影片案例只可借场面机制，不得复制原片角色、台词、标志道具、场景、音乐、时代、美术皮肤或 IP 设定；不得把片例名称写进镜头画面层作为图像风格词。
* 如果导演语法、剪辑结构、视觉圣经和影片案例发生冲突，裁决顺序为：CURRENT_SCENE_SOURCE > 人类导演手记 > 用户控制台参数 > 导演语法 > 剪辑结构 > 视觉圣经皮肤 > 影片案例机制。

# 8. 反刻奇导演规则
复刻导演的底层算法，不复刻表层符号。

* 不得引用导演知名台词。
* 不得搬运导演前作里的标志物。
* 不得为了模仿导演而改变时代、空间、道具、宗教语境。
* 正确方向：把当前片段的原生人物状态、物件、空间、声音和文字组织成主观时间、错位感官和有节奏的沉默。

# 9. 镜头质量规则
* 第一镜必须建立当前片段最重要的空间压力、人物状态或精神压力。
* 最后一枚核心镜头必须停在 CURRENT_SCENE_SOURCE 的当前片段边界内，不得进入后文结果或后续场景。
* 景别和角度不能靠配额变化，必须因为叙事需要变化。
* 插入镜头必须有功能，只能使用当前片段已经给出的身体细节、道具、空间痕迹、文字或声音线索。
* 留白镜头必须有声音或物理痕迹。
* 主体密度为低时，仍必须让观众看懂谁在场、谁在行动、关键物件是什么；空镜留白增加时，仍必须服务空间压力、声音信息或情绪余波，不得稀释场景机制。
* 每个镜头的环境和光影都要重写完整，不得写“同上”。

# START JSON:
`;
    }

    return `
角色设定：**[${directorName}] 的御用剪辑师 & 编剧。**
任务目标：将“当前片段”改编为一部**连贯流畅、具有电影感**的剧本。
质量标准：**国际顶尖水准（戛纳/奥斯卡级别）。**

# ✍️ 4. 剧本标准格式规范 (STANDARD MARKDOWN FORMAT)
**必须严格遵守以下格式输出，以确保前端正确渲染金色高亮标题。**

### A. 协议头 (Protocol Header - 必选)
在剧本最开始，必须输出一句简练的风格执行摘要（作为引用块）：
> **【${directorName} 风格协议】** 执行配置：${styleHeader}${v2HeaderConfig} ${montageId !== 'montage_none' ? `+ [${montageDef?.name}]` : ""}
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
    *   如果源文本只是一句“他抽了根烟”，但要求生成 **${targetShotsLabel} 个镜头/格**：
        *   **错误做法：** 继续写他抽完烟后去杀了人（因为你知道后续剧情）。
        *   **正确做法 (纵向膨胀):** 极度放慢时间。用所需镜头描写抽烟的每一个微观动作：打火机的火花、烟雾的形状、眼神的空洞、烟灰的掉落、环境的噪音。
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

${soundArchitectureProtocol}

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
**镜头功能：** {核心镜头/反应镜头/插入镜头/留白镜头/过渡镜头 + 这一镜的戏剧任务。}
**画面：** {核心主体（人物/关键道具）的状态与动作。}
**环境：** {空间的物理层级。包括前景的遮挡、背景的深度、负空间的分布，以及人物在空间中的绝对坐标。}
**光影：** {现场光源/视觉圣经光影。}
**声音：** {详细的专业音效描述 (SFX) 与 音乐情绪 (Music)。必须使用 [Impacts/Hits], [Transitions/Whooshes], [Risers/Builders], [Drones/Ambience], [Pulses], [Foley] 等专业音效分类术语。}
**音轨内容：**
{如果有对白，在此处写，否则留空或写无}

**【格式详解】**
1.  **第一行 (ID行):** 必须以 \`#\` 开头。
    *   **ID格式:** \`#${partIndex}-1-1\`, \`#${partIndex}-1-2\` ... (连续编号至 ${idRangeLabel})
    *   **标签:** 必须包含三个【】标签，分别填入：
        *   **景别:** 必须使用中文 (如: 特写, 中景, 全景)
        *   **构图:** 如 [中心构图, 三分法, 引导线]
        *   **角度:** 如 [平视, 仰拍, 俯拍, 荷兰角]
2.  **第二行 (镜头功能):** 必须以 \`**镜头功能：**\` 开头。
    *   **内容:** 标明这一镜的功能类型【核心镜头/反应镜头/插入镜头/留白镜头/过渡镜头】，并写清它的戏剧任务。
    *   **目的:** 防止为了形式完整而生成无功能填充镜头。
3.  **第三行 (画面):** 必须以 \`**画面：**\` 开头。
    *   **内容:** 只描述**核心主体**（人物/关键道具）的状态与动作。
    *   **目的:** 聚焦叙事主体，避免与环境混淆。
4.  **第四行 (环境):** 必须以 \`**环境：**\` 开头。
    *   **内容:** 描述**空间的物理层级**（前景/背景/负空间）以及**物理陈设**。
    *   **目的:** 强制空间思考，构建舞台，避免背景突变。
    *   **禁止:** **严禁使用“同上”、“同前”或任何省略语。** 即使环境未变，也必须重新描写该镜头所见的空间细节（例如：如果未变，请换个角度描述墙壁的纹理或背景的虚化）。
5.  **第五行 (光影):** 必须以 \`**光影：**\` 开头。
    *   **内容:** ${lightingContentSpec}
    *   **光影锁定 (LIGHTING LOCK):** 除非剧情有明确的时间/天气变化，否则**必须**保持全场光影的一致性。
    ${lightingFieldGuard}
    *   **禁止:** ${lightingNoRepeatRule}
6.  **第六行 (声音):** 必须以 \`**声音：**\` 开头。
    *   **必须包含专业音效分类:** 请使用 **[Impacts/Hits], [Transitions/Whooshes], [Risers/Builders], [Drones/Ambience], [Pulses], [Foley]** 等专业术语。
7.  **第七行 (音轨头):** 必须写 \`**音轨内容：**\`。
8.  **第八行及后续 (对白):** 如果有对白，每一行音轨内容都必须严格遵循以下 Markdown格式：
    **类型 (角色名 - 情绪加动作 - [风格名称]):** 内容文本
    
    *   **加粗规则：** 冒号前的信息 (类型+角色+情绪动作+风格) **必须加粗**。
    *   **中间部分：** 必须包含**情绪状态**或**伴随动作** (例如：*冷漠地抽烟* 或 *愤怒地拍桌子*)。
    *   **[风格名称]** 必须严格填入: **[${currentStyleName}]**。

**示例镜头块:**
\`\`\`text
#1-1-5 【特写】 【中心构图】 【平视】
**镜头功能：** 核心镜头 / 反应镜头：锁定约翰在源文本当前动作结束前的犹豫，不推进新剧情。
**画面：** 约翰的侧脸保持静止，目光越过画面右侧的门缝。他的手指缓慢收紧，指节贴住桌沿，没有推进后续剧情动作。
**环境：** 画面左侧前景是门框的遮挡，背景能看到同一间屋内的桌面、墙面和出口位置，人物仍处在上一镜确立的坐姿与空间轴线内。
**光影：** 室内唯一可见光源从画面右侧门缝进入，照亮脸部边缘；其余区域保持现场自然阴影。未指定最终色温、调色方案或媒介质感。
**声音：** [Ambience]: 房间底噪维持低强度; [Foley]: 手指压住桌沿的轻微摩擦声; [Music]: 极低音量的持续音，只承担节奏张力。
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
Task: **视觉皮肤迁移 (Visual Skin Transfer)**.
Goal: 在不改动导演分镜骨架的前提下，将剧本的**“视觉皮相”**替换为【视觉圣经】定义的色彩、材质、媒介与资产系统。

**关键规则：必须保留原始的 Markdown 结构 (协议头、场景头、镜头块格式)。**

**输入 1: 原文剧本 (THE BONE - 骨架)**
*   **绝对不可变:** 剧情逻辑、人物关系、核心动作 (Action)、声音/音轨内容、对白内容 (Dialogue)、镜头数量、镜头顺序、镜号 (#1-1-1)、镜头功能、景别、构图、角度、轴线与导演调度逻辑。
*   **可变范围:** 只允许替换视觉皮肤：颜色词、光影参数、表面材质、媒介质感、资产外观锚点、环境美术细节。
*   **禁止:** 不得增删镜头，不得重排镜头，不得修改景别/构图/角度，不得改变人物动作结果，不得把参考图风格改写成新的剧情设定。
*   **影片案例隔离:** 如果协议头中出现“影片案例”，它只是分镜阶段的场面机制元数据，不是视觉风格。风格迁移时不得根据片例名称引入原片色彩、材质、时代、道具、角色或 IP 符号。
"${originalScript}"

**输入 2: 视觉圣经 (THE NEW SKIN - 皮肤)**
你必须严格基于以下 5 个维度重塑每一行文字：

1.  **🎨 Art & Style (艺术与风格 - 灵魂):** 
    *   *Directive:* ${tone.style}
    *   *Action:* 只决定美术语言、色彩组织和物理媒介。不得覆盖原剧本已经确定的镜头构图、导演气息和剪辑节奏。

2.  **💡 Light & Atmosphere (光影与氛围 - 气氛):**
    *   *Directive:* ${tone.lighting}
    *   *Action:* 决定画面的明暗对比 (High/Low Key)、色温 (Temp/Tint) 和空气感 (Fog/Haze)。

3.  **📷 Medium & Format (媒介与格式 - 镜头):**
    *   *Directive:* ${tone.camera}
    *   *Action:* 决定画面的物理介质感（胶片/数码/绘画/定格/CGI）和成像特征。不得修改原镜头的景别、构图和角度。

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

1.  **导演骨架锁定 (Director Skeleton Lock):**
    *   保留每个镜头的“拍法”：景别、构图、角度、轴线、运动/静止关系、动作连续性、留白节奏。
    *   你不是重新导演本场戏；你是给已经剪好的分镜做美术、调色、材质与资产置换。
    *   \`**声音：**\` 与 \`**音轨内容：**\` 原则上保持不变。除非里面含有明显旧视觉风格词，只做最小清理。

2.  **视觉霸权 (Visual Supremacy):**
    *   如果原文是“一个普通的房间”，但【视觉圣经】是“赛博朋克”，只能在同一时代/同一空间事实内注入对应的材质与光源等价物；不得凭空加入不属于该世界的高科技设备。
    *   如果原文是“阳光明媚”，但【视觉圣经】是“黑色电影”，可以改写为“同一场景被硬质侧光切分、阴影更重、空气颗粒更明显”，但不能把白天事件改成夜晚事件，除非原文允许。

3.  **去语义化 (De-semanticization):**
    *   扫描原剧本中的所有形容词。如果它属于旧风格（如“阴森”、“苍白”），立刻删除或替换为新风格的词汇（如“通透”、“红润”）。
    *   不要扫描并替换动作动词、人物关系、台词意图和镜头语法词。

4.  **格式保持 (Format Preservation - CRITICAL):**
    *   **协议头:** 更新 > **【核心视觉圣经】** 
        > **【艺术与风格】**: ${tone.style}
        > **【光影与氛围】**: ${tone.lighting}
    *   **场景头:** 必须保留 **SCENE [序号]**、**场号**、**人物**、**轴线**。
    *   **镜头块:** 必须逐字保留 \`#1-1-1 【景别】【构图】【角度】\` 的编号与三个标签。
        *   **LOCK 0 (镜头功能):** 保留 \`**镜头功能：**\` 的核心/反应/插入/留白/过渡属性，不得把功能镜头改成新剧情。
        *   **UPDATE 1 (画面):** 保留主体动作和姿态，只替换人物/道具/材质/颜色/表面质感。
        *   **UPDATE 2 (环境):** 保留空间关系和时代事实，只替换美术质感、表面材料、空气感和色彩组织。
        *   **UPDATE 3 (光影):** 保留光源方向和剧情时间，只替换视觉圣经规定的光比、色温、色调和影调。

5. **数字假体原则 (Digital Prosthetics / Identity Lock):**
   *   **定义:** 【人物参考图/资产描述】是不可更改的“3D扫描数据”。
   *   **执行:** 无论镜头是极远景还是眼球特写，人物的骨骼结构、五官间距、发际线、服饰细节必须**严格锁定**。
   *   **冲突裁决:** 哪怕与源文本小说描述不一致，也**必须**按照资产的人物形象来写。

6. **运动学链条锁定 (Kinematic Chain Locking):**
   *   **定义:** 动作必须具有物理连续性。
   *   **父级确立:** 当上一镜确立了动作（如：蜷缩坐在墙角），该动作即成为“物理事实”。
   *   **子级继承:** 随后的特写镜头必须基于该姿态构图（例如：手腕是弯曲的，背景是膝盖布料）。**严禁**在特写中重置人物姿态。
   *   **动态摄影机，静态演员:** 鼓励剧烈的机位变化（俯视/仰视/侧后），但**演员的冻结姿态不能变**。

7. **反滤镜协议 (ANTI-FILTER PROTOCOL - CRITICAL):**
   *   **拒绝单色污染:** 严禁因为视觉圣经是暖色调，就把所有物体都写成“黄色的”。**不要给画面加单色滤镜。**
   *   **物理光照:** 描述**光源的颜色**，而不是**物体的颜色**。
   *   **材质真实:** 必须描述物体在光照下的**固有色**（如：银色、黑色、红色）。即使在暖光下，黑色的物体依然是黑色的，只是带有暖色反光。
   *   **黑场锁定:** 必须保留深邃的**黑色阴影**，不要把暗部提亮或染色。**高反差 (Contrast)** 是消除滤镜感的关键。

8. **轴线与位置显化 (Explicit Spatial Axis):**
   *   **执行:** 只要分镜里写了人物，必须明确描写人物的**轴线或位置关系**（如：在画面左侧、背对窗户）。
   *   **连贯性:** 必须和最初确定的位置关系一致。除非有明确的移动事件，否则严禁越轴。

**输出格式 (STRICT JSON):**
{
  "literaryScript": "返回重写后的完整 Markdown 格式剧本 (简体中文)。确保每一场戏都充满了【视觉圣经】定义的独特味道，但看起来自然、真实，而非像是加了滤镜的图片。"
}
`;
};
