// ============================================================================
// 🏢 一楼：宪法大厅 (底层规则与协议区)
// ============================================================================

// 📦 1. 进口原料仓库：从外部文件借用"图纸"和"词典"
import { NarrativeFieldState, CreativeTreatment, WorldLawConfig, StyleConfig } from '../types';
import { NARRATIVE_ENGINE_BLOCKS } from '../data/engine_core/narrative_engine';
import { ALL_SKIN_BLOCKS } from '../data/skin_libraries';
import { SV2_DATA } from '../data/engine_sv/SV2'; // 特权词库：决定字数的 SV2 (体量)
import { PERSPECTIVES, SENSORY_MODES, STYLE_MATRIX } from '../data/style_matrix';
import { DIRECTOR_STYLES } from '../data/director_styles';

// 📚 源文件引入：各种规则协议 (系统宪法的内容片段)
import {
  NAMING_PROTOCOL,
  LITERARY_AESTHETIC_PROTOCOL,
  NARRATIVE_ENGINE_FORMULA,
  THE_IRON_LAWS,
  FALLBACK_TOPOLOGY_TEMPLATE,
  NARRATIVE_ALGEBRAIC_PROTOCOL,
  STYLE_LOGIC_PROTOCOL,
  getVisionAnchorProtocol,
  THE_MASK_PROTOCOL
} from '../data/engine_core/narrative_protocols';

// 🔍 工具引入：在总词库中查找词条定义的函数
import { findItemDetails, findItemFull } from './dataRegistry';

// ============================================================================
// 📜 2. 系统宪法 (最高铁律拼接区)
// [AUTO KV CACHING SUPPORT] ABSOLUTE STATIC SYSTEM BIBLE
// 极客备注: 这里拼接的长文本绝对不能包含任何动态变量，
// 这样 AI 平台才能 100% 缓存它，省下大量算力和费用 (Cache Hits > 80%)。
// ============================================================================
const NARRATIVE_SYSTEM_BIBLE = `
Role: 殿堂级电影编剧 & 叙事架构师（戛纳/奥斯卡级别）。
# 《迷雾学派》全局宪法与底层协议 (SYSTEM BIBLE)
以下是你作为本引擎必须无条件遵守的铁律与计算公式：

${NAMING_PROTOCOL}
${LITERARY_AESTHETIC_PROTOCOL}
${NARRATIVE_ENGINE_FORMULA}
${THE_IRON_LAWS}
${NARRATIVE_ALGEBRAIC_PROTOCOL}
${FALLBACK_TOPOLOGY_TEMPLATE}
${STYLE_LOGIC_PROTOCOL}
${THE_MASK_PROTOCOL}

**[宪法宣读完毕，等待当前剧本参数与局部指令输入]**
`.trim();

// ============================================================================
// 🏢 二楼：工具车间 (数据预处理与转换流水线)
// 这里全是各种小型的“翻译官”和“计算器”，负责把冷冰冰的系统数据
// 变成 AI 能够读懂的格式和律法。
// ============================================================================

// ----------------------------------------------------------------------------
// 🛠️ 机器 1：数据翻译机与档案整理器 (buildContext)
// 作用：将用户选中的冷冰冰的代码标签（如 engine_m1 = 螺丝钉），翻译还原成
//      带有详细解释的文学化清单，供 AI 阅读理解其背后的哲学与故事涵义。
// ----------------------------------------------------------------------------
const buildContext = (fieldState: NarrativeFieldState) => {
  return Object.entries(fieldState).map(([key, tags]) => {
    if (!tags || tags.length === 0) return null;
    // Map to correct name
    let name = key;
    // Fall back to matching suffix so 'comm_m1' matches 'engine_m1'
    const suffix = key.replace(/^[a-z]+_/, '_');
    const engineBlock = NARRATIVE_ENGINE_BLOCKS.find(b => b.id === key || b.id.endsWith(suffix));
    const skinBlock = ALL_SKIN_BLOCKS.find(b => b.id === key || b.id.endsWith(suffix));

    if (engineBlock) name = engineBlock.enName;
    else if (skinBlock) name = skinBlock.enName;

    const definitions = tags.map(t => {
      const detail = findItemDetails(t);
      return detail ? `[${t}]: ${detail}` : null;
    }).filter(Boolean).join('; ');

    return `* **${name} (${key})**: ${tags.join(' + ')} \n      (${definitions})`;
  }).filter(Boolean).join('\n');
};

// ----------------------------------------------------------------------------
// 🛠️ 机器 2：形式律法生成器 (buildFormalLawEngine)
// 作用：生成针对排版、格式、字数和文风的绝对机器铁律。
//      通过冰冷的 [REQUIRE] 和 [DENY] 指令，强行压制 AI 的学术腔和网文味，
//      逼迫其交出拥有极高要求（如字数和结构框架）的电影级视听文稿。
// ----------------------------------------------------------------------------
const buildFormalLawEngine = (
  target: 'PITCH' | 'BIBLE',
  wordCount: string,
  styleName: string,
  structureTag?: string
): string => {
  const wordCountRule = target === 'PITCH'
    ? '每个故事概念 (Pitch) ≈ 500-700 字。三个方案必须各自独立、完整且风格互不雷同。'
    : `正文总量 ≈ ${wordCount} 个中文字符。这是硬性目标，严禁大幅偏离。`;

  const structureRule = structureTag && structureTag !== 'Unknown Structure' && structureTag.length > 0
    ? `\n    ACTIVE_STRUCTURE: "${structureTag}" — 将此叙事结构标签作为骨架融入故事。`
    : '';

  const styleRule = styleName && styleName !== 'Standard Literary' && styleName.length > 0
    ? `\n    STYLE_EMULATION: 模仿 [${styleName}] 的底层句法逻辑与节奏，严禁复制其经典台词或表层符号。`
    : '';

  return `
## ⚖️ FORMAL LAW ENGINE (形式律法 — 不可违反)
\`\`\`
[ENFORCE_MODE: STRICT]

[LAW_1] WORD_COUNT:
    ${wordCountRule}

[LAW_2] DRAMATIC_STRUCTURE:
    REQUIRE: [ INCITING_INCIDENT → RISING_ACTION → CLIMAX → RESOLUTION ]
    DENY:   [ Deus_ex_machina, 无冲突流水账, 虎头蛇尾, 机械降神 ]${structureRule}

[LAW_3] VOICE & MEDIUM:
    REQUIRE: 极精致的电影化小说 (Exquisite Cinematic Novel/Short Story)。必须像顶尖小说家一样行文，兼具极强的视听画面感 (Show, Don't Tell)。
    DENY:   [ 剧本格式 (绝对严禁出现“内景/外景”、“日/夜”、剧本对话体), 学术论文腔, 理工科说明书语法, 教科书式旁白, 鸡汤散文, 网络小说腔 ]${styleRule}

[LAW_4] ONTOLOGICAL_HYGIENE:
    DENY.META: 严禁在正文中出现任何引擎参数名 (M0-M7, SUR1-SUR11)
    DENY.JARGON: 严禁出现哲学/精神分析术语 (大他者, 对象a, 符号界, 实在界, 能指, 所指, 异化, 阉割)
    RULE: 所有抽象概念必须完成【文学性转译】— 消融在感官描写、人物动作与物理环境中
\`\`\`
`;
};

// ----------------------------------------------------------------------------
// 🛠️ 机器 3：动态黑名单提取机 (getBannedWords)
// 作用：生成一串高压违禁字符串。不仅封杀“大他者”、“实在界”等学术术语，
//      更绝的是，连用户选中面板标签的“原词”也一同拉黑。通过这种物理阻断，
//      逼迫 AI 使用细腻的文学侧面描写（Show, Don't Tell）来绕过原词。
// ----------------------------------------------------------------------------
const getBannedWords = (fieldState: NarrativeFieldState): string => {
  const tags = Object.values(fieldState).flat();
  if (tags.length === 0) return "";

  // Extract the main name part (before parenthesis)
  const words = tags.map(t => t.split('(')[0].trim()).filter(w => w.length > 1);
  // Also add full tags
  const fullTags = tags.filter(t => t.length > 1);

  // Add common philosophical terms to ban list to force concretization
  const philosophicalTerms = [
    "大他者", "Big Other", "Object a", "对象a", "Symbolic Order", "符号界",
    "Real", "实在界", "Imaginary", "想象界", "Alienation", "异化",
    "Castration", "阉割", "Sinthome", "圣状", "Phallus", "菲勒斯"
  ];

  return [...new Set([...words, ...fullTags, ...philosophicalTerms])].join(', ');
};

// ----------------------------------------------------------------------------
// 🛠️ 机器 4：叙事拓扑雷达与重心分配器 (getNarrativeTopology)
// 作用：识别发给 AI 的“剧本镜头重心”。
//      它会根据用户选的类型标签，告诉 AI 这场戏到底应该把重点押在
//      动作(M5) 或是 恐惧(M4) 或是 情感(M3) 上。全自动推演，无需硬编码判断。
// ----------------------------------------------------------------------------
const getNarrativeTopology = (fieldState: NarrativeFieldState): string => {
  const genreTags = fieldState['skin_genre'] || [];

  // Use only genre tags for topology consideration
  const allTags = [...genreTags];

  if (allTags.length === 0) return FALLBACK_TOPOLOGY_TEMPLATE;

  // Try to find the selected genre item and return its specific topology
  for (const tag of allTags) {
    // We use the registry full item lookup to check for topology property
    const item = findItemFull(tag);

    if (item && item.topology) {
      return `
### 📐 TOPOLOGY: [${item.name}]
${item.topology}
`;
    }
  }

  // Fallback if no specific topology field is found
  const genreDefs = allTags.map(t => findItemDetails(t)).join('\n');

  const topologyHeader = "### 📐 TOPOLOGY: [DYNAMIC CONSTRUCTION]";

  return `
${topologyHeader}
*   **Active Genre(s):** ${allTags.join(', ')}
*   **CORE LOGIC EXTRACTION (核心逻辑提取):** 
    ${genreDefs}
*   **DIRECTIVE (重心分配指令):** 请利用上段提取的“核心逻辑”来决定当前应该倾斜多少结构权重给 M1 到 M7。 
    *   如果逻辑强调高能动作与暴力 -> 将聚光灯和笔墨砸向 M5 (行动驱力)。
    *   如果逻辑强调恐惧与未知压迫 -> 让 M4 (大他者) 的阴影笼罩一切。
    *   如果逻辑强调情感与执念羁绊 -> 让 M3 (欲望锚点) 承担最痛的张力。
    *   如果逻辑强调宏大世界与畸变 -> 优先去刻画 SUR 场域背景与 M4 系统。
`;
};

// ============================================================================
// 🏢 三楼 A区：分歧点造梦机 (buildNarrativePrompt)
// 核心功能：接收你在界面的所有选择，打包成一封发给 AI 的信。
// 最终产出：3 个方向完全不同的“故事草案 (Pitch)”。
// ============================================================================
export const buildNarrativePrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig
): { text: string, images: string[] } => {

  const getTagsBySuffix = (suffixes: string | string[]) => {
    const sfxArray = Array.isArray(suffixes) ? suffixes : [suffixes];
    return Object.keys(fieldState)
      .filter(k => sfxArray.some(sfx => k.endsWith(sfx)))
      .flatMap(k => fieldState[k]);
  };

  // ============================================================================
  // 📦 步骤 1：呼叫二楼机器获取基础材料
  // ============================================================================
  const engineContext = buildContext(fieldState);
  const bannedWords = getBannedWords(fieldState);
  const topologyInstruction = getNarrativeTopology(fieldState);

  // ============================================================================
  // 📦 步骤 2：提取表层宇宙参数 (SUR1 动力 & SUR2 场域) 等待后续混合
  // ============================================================================
  // Extract SUR1 (Drive) and SUR2 (Field) for Prompt Customization
  const sur1Tags = getTagsBySuffix('_genre');
  const sur2Tags = getTagsBySuffix('_era');
  const sur1Drive = sur1Tags.length > 0 ? sur1Tags.join('/') : 'Cinema/Drama';
  const sur2Field = sur2Tags.length > 0 ? sur2Tags.join('/') : 'Unknown Field';
  const activeWorldLogic = `${sur1Drive} (场域: ${sur2Field})`;

  // ============================================================================
  // 📦 步骤 3：加载 M0 心理结构协议 (非常关键的底层精神算法)
  // ============================================================================
  // --- STAGE 0: PSYCHO-STRUCTURAL PROTOCOL (Critical) ---
  const m0Tags = getTagsBySuffix(['_m0', '_c0']);
  let psychoProtocol = "";
  if (m0Tags.length > 0) {
    const tag = m0Tags[0];
    const item = findItemFull(tag) as any;
    const details = findItemDetails(tag);
    psychoProtocol = `
## 🧠 PSYCHIC STRUCTURE PROTOCOL (M0: CRITICAL PRIORITY)
**你必须完全基于 [${tag}] 的特定临床机制来构建整个叙事的底层逻辑。**

**DIAGNOSIS (病理诊断):** ${details}

**Logical Constraint (代数规则):** ${item?.logic || "遵循标准的精神系统逻辑 (Follow the standard OS logic)"}

**INSTRUCTION (执行指令):**
- **STRICT ADHERENCE (绝对遵守):** 你必须将上方的 'Logical Constraint' 视为冷酷的数学铁律，以此来推演计算故事中所有的叙事动能 (M1-M7)。
- **SURVIVAL VS COLLAPSE (生存或坍缩):** M0 决定了主体的宇宙在遭遇 M2 (真实界撞击) 后，是能够苟延残喘，还是彻底坍缩为某种特定的症状结晶。
- **IF [Ordinary Psychosis / 普通精神病]:** 绝对不要写一个刻版的“疯子”故事。主体表面上看起来完全正常，但他极度依赖某块特定的“补丁 (Patch)”（比如具体的工作、怪癖或仪式效仿）来勉力维持现实的缝合。故事必须聚焦于这个“补丁”将要被撕裂的致命威胁。
- **IF [Autism / 自闭症]:** 逻辑必须围绕对大他者强行入侵的“绝对闭环 (Closure)”与“防御 (Defense)”展开。这是一个竭力剥离大他者的世界。
- **IF [Perversion / 倒错]:** 逻辑必须围绕“否认 (Disavowal)”与“工具化 (Instrumentality)”展开。主体深知法律和底线，但他享受且致力于去横穿它，或者把自己变成完美执行大他者享乐仪式的工具。
- **IF [Hysteria / 癔症]:** 逻辑是一种永无止境的“结构性质询 (Questioning)”与“永远无法满足的欲望 (Unsatisfied Desire)”。
- **IF [Obsession / 强迫症]:** 逻辑是绝对的“控制 (Control)”与永不停歇的“拖延 (Procrastination)”，只为了让大他者保持永远存活，但又必须与之保持绝对的安全距离。
- **IF [Paranoia / 妄想狂]:** 逻辑是“意义过载 (Meaning Overload)”。万事万物皆是致命的征兆。大他者被体验为是充满绝对恶意的凝视者。
`;
  }

  // ============================================================================
  // 📦 步骤 4：根据体量字数计算影片节奏 (体积量决定了讲故事的快慢)
  // ============================================================================
  // --- STAGE 1: DURATION STRATEGY (CRITICAL UPDATE) ---
  const volumeTags = getTagsBySuffix('_volume');
  const structureTags = getTagsBySuffix('_structure');
  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTagRaw = structureTags.length > 0 ? structureTags[0] : "Unknown Structure";

  let volumeInstruction = "";

  if (volumeDef) {
    volumeInstruction = `
    ## ⏱️ VOLUME PROTOCOL: ${volumeDef.name}
    **CRITICAL INSTRUCTION FOR AI (核心指令):**
    ${volumeDef.patch?.mechanics || volumeDef.def}
    ${volumeDef.patch?.aesthetic ? `\n    **AESTHETIC REQUIREMENT (美学要求):**\n    ${volumeDef.patch.aesthetic}` : ""}
    
    ## 🧩 STRUCTURE RECONCILIATION (体量与结构的调和约束)
    **Selected Structure:** ${structureTagRaw}
    
    **RECONCILIATION LOGIC (结构干涉逻辑):**
    *   **IF MICRO (<60s / 极微型):** 结构标签 (例如:"循环","倒放") **必须**被降维理解为一种 **视觉/剪辑技巧 (VISUAL/EDITING TECHNIQUE)**，绝对不能当成漫长交代的情节装置。
    *   **IF SHORT (1-3m / 短片):** 结构设定了 **高度紧凑的情节弧线 (TIGHT PLOT ARC)**。你必须将火力死死咬住单一核心冲突与其最终落点。绝对不能写成没有冲突的散文情绪大片，它必须是个高能锐利的故事。
    *   **IF NARRATIVE (>3m / 叙事长片):** 结构统管 **完整的情节弧光 (FULL PLOT ARC)**，允许且必须包含角色背景深度的交代与设定细节的铺垫引出。
    
    **EXECUTION (最终指令):**
    基于当前设定的物理时常体量 [${volumeDef.id}]，你必须强行压扁或拉长释放选定结构标签 [${structureTagRaw}] 的文本表现复杂度，使之在这段篇幅内完美契合适配。 
    `;
  } else {
    volumeInstruction = `
    ## ⏱️ VOLUME PROTOCOL: STANDARD SHORT
    **CRITICAL INSTRUCTION FOR AI (核心指令):**
    编写一个兼具视听感的三幕剧标准草案。要求在“具体惊艳的高光画面描写”与“整体故事弧线”之间保持微妙平衡。
    `;
  }

  // ============================================================================
  // 📦 步骤 5：世界法则构建 (物理引擎是写实还是魔法？电影类型是纯净还是混搭？)
  // ============================================================================
  // 1. Gravity Level (World Law)
  let instructions = "";
  let physicsConstraint = "";
  let contextConstraint = "";
  const gravity = worldLaw.gravity || 3;

  switch (gravity) {
    case 1:
      instructions += "WORLD LAW LV.1 [写实 STRICT REALISM]: 物理重力闭锁。严禁任何违法时代背景的物理常数。没有任何奇迹，死亡是绝对的，重力是必然的。\n";
      physicsConstraint = "STRICT REALISM (ABSOLUTE PROHIBITION OF MAGIC/SUPERNATURAL)";
      contextConstraint = "GENRE PURITY (STRICTLY GROUNDED)";
      break;
    case 2:
      instructions += "WORLD LAW LV.2 [合理 RATIONALIZED]: 逻辑补完路径。超现实元素必须被赋予一个“科学、心理学或机械”的实体合理解释。\n";
      physicsConstraint = "RATIONALIZED (SUPERNATURAL MUST BE EXPLAINED VIA SCI-FI OR PSYCHOLOGY)";
      contextConstraint = "GENRE SEMI-PURITY (LOGICAL EXPLANATIONS REQUIRED)";
      break;
    case 3:
      instructions += "WORLD LAW LV.3 [缝合 MAGICAL REALISM]: 魔幻现实主义。以残酷现实为底，允许局部“缝合”超现实的符号与症状。\n";
      physicsConstraint = "MAGICAL REALISM (REALITY MIXED WITH SUBTLE SURREAL SIGNS)";
      contextConstraint = "GENRE FUSION (CONTROLLED MASHUP)";
      break;
    case 4:
      instructions += "WORLD LAW LV.4 [奇观 HIGH CONCEPT]: 高概念幻想。科幻/魔幻逻辑公开运行，物理法则服务于叙事张力，但需要基本的内部一致性。\n";
      physicsConstraint = "HIGH CONCEPT FANTASY (MAGIC/SCI-FI ARE REAL AND ACTIVE)";
      contextConstraint = "GENRE MASHUP (BOLD CREATIVE COMBINATIONS)";
      break;
    case 5:
      instructions += "WORLD LAW LV.5 [狂想 ABSOLUTE UNBOUND]: 绝对无重力。允许所有标签无视物理常数进行彻底的疯狂拼贴、大杂烩与梦境倒错。\n";
      physicsConstraint = "DREAM LOGIC / ABSOLUTE UNBOUND (NO PHYSICS LIMITS, SURREALISM MAXIMIZED)";
      contextConstraint = "ABSOLUTE CHAOS (DECONSTRUCT AND MIX EVERYTHING)";
      break;
  }



  // ============================================================================
  // 📦 步骤 6：时空坐标强制推导 (如果你忘了选时代/地点，这里强行推算)
  // ============================================================================
  // --- ⚠️ CRITICAL FIX: DEFAULT ANCHOR INJECTION FOR 3 CARDS ---
  // If user has NOT selected an Era/Location, force a deduction based on M-Engine.
  let defaultAnchorInstruction = "";
  const locTags = getTagsBySuffix('_location');
  const hasEra = sur2Tags.length > 0;
  const hasLoc = locTags.length > 0;

  // Custom Exact Year/Country Logic
  const exactYearTags = getTagsBySuffix('_year_exact');
  const exactCountryTags = getTagsBySuffix('_country_exact');
  const exactYear = exactYearTags.length > 0 ? exactYearTags[0] : null;
  const exactCountry = exactCountryTags.length > 0 ? exactCountryTags[0] : null;
  let customCoordinates = "";

  if (exactYear || exactCountry) {
    customCoordinates = `
      ## 📍 PRECISE SPACETIME COORDINATES (HIGHEST PRIORITY)
      **你必须极其严苛地将故事锚定在以下被锁死的时空坐标内：**
      *   **Year (时代纪元):** ${exactYear || "未明确"}
      *   **Location/Country (发生国度):** ${exactCountry || "未明确"}
      
      **Instruction (执行指令):** 
      尽你所能去深度检索还原 ${exactCountry || "The World"} 在纪元 ${exactYear || "This Era"} 时的真实客观历史与物理状貌。 
      在叙事中极具质感地折射出那个特定时空的特殊时代产物、服饰纤维、残酷的政治面貌或是其独有的时代症候。
      这条具体时空指令具有【绝对最高覆盖权】(OVERRIDES)，直接碾压任何被随意选中的模糊时代标签 (例如：若年代填着正史纪元，但某类型标签带着玄幻，你必须将玄幻强行降维附着在这个客观年代的物理法则上运行)。
      `;
  }

  if (!hasEra && !hasLoc && !exactYear && !exactCountry) {
    if (worldLaw.physics === 'STRICT') {
      // STRICT MODE: International Scope, Realistic Logic
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT REALITY ANCHOR (STRICT REALISM - INTERNATIONAL)
          **CRITICAL (严重警告):** 用户未明确指定具体的年代 (Era) 或发生地 (Location)，且当前物理防崩坏法则被设定为 **STRICT (写实原教旨)**。
          **INSTRUCTION (执行指令):**
          1.  **NO DEFAULT ERA (无默认年代):** 绝对禁止盲目默认为“现代当代 (Present Day)”。你必须基于本场域的 M-Engine 人物主标签等来反向演绎出最符合结构逻辑的客观时代坐标（例如：只要有皇帝，那就不可能存在手机）。
          2.  **INTERNATIONAL SCOPE (国际化场域):** 故事背景默认必须是非常高度国际化、具有普世影史高度的重金属视听场域 (好莱坞/欧洲纯粹电影质感)。除非标签矩阵产生出强制性的东方逻辑 (如武侠、修仙)，否则 **一律禁止** 强行套用土味刻板的东亚小镇或熟人社会框架。
          3.  **PHYSICS (物理重力):** 绝对恪守推演出的主轴年代的物理现实铁律。
          `;
    } else {
      // UNBOUND MODE: Allow creativity based on M-Tags
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT REALITY ANCHOR (UNBOUND FANTASY - GLOBAL)
          **CRITICAL (最高警戒):** 用户未指定纪元或环境废墟锚点，但！当前物理系统已被完全解绑设定为 **UNBOUND (狂想无重力倒错)**。
          **INSTRUCTION (执行指令):**
          1.  **CREATIVE FREEDOM (创世权自由):** 放手去凭空“建造”一个疯狂的奇观异世界。唯一的前提是：这个世界完全是为了榨干当前 M-Engine 标签组的结构张力而存在。
          2.  **SCOPE (气宇视野):** 抛弃现实羁绊，将维度拔升至某种浩瀚的神话、超验或是赛博邪神般的终极史诗质感。
          3.  **INTERPRETATION (直率降维投射):** 你获得了特权去极其干脆地物理化一切比喻。如果在标签组中你看到“M1被掏空了”，你可以让他字面意义上被开膛破肚还活着；看到义体，就允许钢铁直接与血肉物理融合焊接。让隐喻在此刻变成硬邦邦的现实伤疤。
          `;
    }
  }

  // ============================================================================
  // 📦 步骤 7：提取视觉参考提示 (如果你上传了参考图或者视觉锚点)
  // ============================================================================
  // VISION ANCHOR LOGIC (NEW - IMPORTED)
  let visionAnchorInstruction = "";
  if (visionInput) {
    visionAnchorInstruction = getVisionAnchorProtocol(visionInput);
  }

  // ============================================================================
  // 📦 步骤 8：大缝合区 (拼装送往 AI 的最终指令信 dynamicTaskPrompt)
  // 把前面 1-7 步准备好的文本，连同 JSON 格式标准，全部贴进这张信纸里。
  // ============================================================================
  const dynamicTaskPrompt = `
# 本次任务执行区 (TASK EXECUTION)
Task: 基于上方提供的《迷雾学派》全局宪法 (SYSTEM BIBLE)，根据以下动态注入的 DNA (M0-M7) 和语境 (S0-S7)，生成 3 个电影级的故事概念。

## 📍 时空坐标与视觉锚点
${visionAnchorInstruction}
${customCoordinates}

# 🔗 动态结构转译指令
1.  **M1 主体 (Subject) 转译:**
    *   关键词: ${getTagsBySuffix(['_m1', '_c1']).join('/') || 'Unknown'}
    *   SUR场域/身份: ${sur2Tags.join('/') || 'Unknown'} / ${getTagsBySuffix('_profession').join('/') || 'Unknown'}
    *   **任务:** 在这个特定 world 中，此人具体是谁？他们具体的匮乏是什么？

2.  **M4 大他者 (The Other) 转译:**
    *   关键词: ${getTagsBySuffix(['_m4', '_c4', '_c6']).join('/') || 'Unknown'}
    *   **任务:** 将此阻碍转化为具体的反派、机构或自然力量。

3.  **M3 欲望 (Desire) 转译:**
    *   关键词: ${getTagsBySuffix(['_m3', '_c3']).join('/') || 'Unknown'}
    *   **任务:** 将此欲望转化为具体的麦高芬 (MacGuffin) 或对象 a。

${buildFormalLawEngine('PITCH', '600', '', structureTagRaw)}

## 🚫 动态禁用词表
**黑名单:** [ ${bannedWords.replace(/1855, |日本, /g, '')} ]

## 1. 动态 DNA 序列 (源头)
${topologyInstruction}
${psychoProtocol}
${volumeInstruction}
${engineContext}

## 2. 局部世界法则与美学约束
${instructions}
${defaultAnchorInstruction}

## 3. ★★★ 叙事质量控制 ★★★
**关键：别像个数据库，要像个作家。**
1.  **拒绝抽象 (NO ABSTRACTIONS):** 不要说“他感到异化”，要写“他盯着玻璃幕墙，手指触碰不到对面的世界”。
2.  **具体性 (SPECIFICITY):** 给角色一道伤疤、一个习惯、一种气味。给房间一个温度。
3.  **戏剧性 (DRAMA):** 每个 Pitch 必须包含 **激励事件 (Inciting Incident)**，**反转 (Twist)** 和 **结局 (Ending)**。
4.  **语言 (LANGUAGE):** 使用极具画面感、电影感的中文。**严格使用简体中文。**

## 4. 三重叙事镜头 (输出)
**关键：适配核心逻辑 [${activeWorldLogic}]。**
**强约束警告：所有生成的路径都必须严格遵守以下世界法则：**
*   **物理法则:** ${physicsConstraint}
*   **语境法则:** ${contextConstraint}
**任何违反此法则的生成都将被视为失败。例如：如果物理法则为 STRICT REALISM，则故事中严禁出现魔法、鬼魂或超光速。**

### **OPTION 1: [STRUCTURALIST] - 结构主义 (Genre Perfection)**
*   **Logic:** **经典类型执行。** 世界严格按照 [${activeWorldLogic}] 的规则运行。
*   **Constraint:** 严格遵守 [${physicsConstraint}] 和 [${contextConstraint}]。
*   **Vibe:** 专业、高预算、定义类型的。
*   **Task:** 写一个符合 **${sur1Drive}** 动力的故事，其中 M4 是具体的外部力量。

### **OPTION 2: [POST_STRUCTURALIST] - 后结构 (Deconstruction)**
*   **Logic:** **内在冲突。** 类型只是主角创伤的投射。
*   **Constraint:** 严格遵守 [${physicsConstraint}] 和 [${contextConstraint}]。
*   **Vibe:** 王家卫、朴赞郁、A24。私密、主观、情感化。
*   **Task:** 写一个人物研究故事，其中 M4 是内在或关系性的。解构类型套路。

### **OPTION 3: [THE_REAL] - 实在界 (Atmosphere/World)**
*   **Logic:** **环境冲突。** 设定本身就是主角。关注氛围、哲学和存在的诡异感。
*   **Constraint:** 严格遵守 [${physicsConstraint}] 和 [${contextConstraint}]。
*   **Vibe:** 维伦纽瓦、塔可夫斯基。萦绕、哲学、慢热。
*   **Task:** 写一个氛围主导的故事，其中环境 (S2) 压倒了主体 (M1)。

## 5. 【重要思考与输出格式】(THOUGHT & STRICT JSON)

**步骤 1：深度转译思考 (Thought Process)**
在输出 JSON 前，你必须首先输出 \`<thought_process>\` 标签进行时代与环境的降维分析：
例如：若背景为 1855 日本，但标签包含“基因诊所”，你必须在思考中写明如何将其转译为“通过妖术缝合血肉的神社药铺”。
\`\`\`xml
<thought_process>
1. 时空提取：[此处分析客观时间和地点限制]
2. 矛盾消解：[此处论述如何将不属于该时代的现代/科幻标签合在当前时代下进行隐喻转化]
3. 框架确立：[按照三种 Option 的要求，确立每个方案的核心矛盾]
</thought_process>
\`\`\`

**步骤 2：最终输出 (STRICT JSON)**
完成思考后，请严格输出以下 JSON，使用纯正的简体中文：
\`\`\`json
[
  {
    "id": "1",
    "type": "STRUCTURALIST", 
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": {
      "inciting_incident_激励事件": "如何打破日常（结合 M2 遭遇）...",
      "rising_action_上升动作": "遭遇怎样的阻绝（结合 M4 与 SUR 环境）...",
      "climax_高潮": "付出何种代价，发起最后的对抗（结合 M5/M6）...",
      "resolution_存在落点": "最终的哲学状态（结合 M7）..."
    },
    "structure": "GENRE_DRIVEN"
  },
  {
    "id": "2",
    "type": "POST_STRUCTURALIST", 
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": {
      "inciting_incident_激励事件": "如何打破日常...",
      "rising_action_上升动作": "围绕内心创伤的展开...",
      "climax_高潮": "直面内在或关系性冲突的高潮...",
      "resolution_存在落点": "解构式的结局..."
    },
    "structure": "CHARACTER_DRIVEN"
  },
  {
    "id": "3",
    "type": "THE_REAL", 
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": {
      "inciting_incident_激励事件": "环境的异样变异或压倒性介入...",
      "rising_action_上升动作": "主体逐渐被氛围与物理空间吞噬...",
      "climax_高潮": "彻底的哲学或氛围性高潮事件...",
      "resolution_存在落点": "被环境同化或剥离的结局..."
    },
    "structure": "ATMOSPHERE_DRIVEN"
  }
]
\`\`\`
`;

  // ============================================================================
  // 📦 步骤 9：挂挡出厂！将最高宪法与这封信件拼接后 Return 交出
  // ============================================================================
  return { text: NARRATIVE_SYSTEM_BIBLE + '\n\n' + dynamicTaskPrompt, images: visionImage ? [visionImage] : [] };
};

// ============================================================================
// 🏢 三楼 B区：全景创世碑 (buildNarrativeBiblePrompt)
// 核心功能：当你选中了 3 个草案中的 1 个后，这里接手工作。
// 最终产出：1 篇完整的具备字数要求的文学正文 + 角色、场景等画面资产。
// ============================================================================
export const buildNarrativeBiblePrompt = (
  treatment: CreativeTreatment,
  styleConfig: StyleConfig,
  fieldState?: NarrativeFieldState,
  visionInput?: string,
  worldLaw?: WorldLawConfig
): string => {
  // 1. Get Volume Definition to enforce Pacing
  const volumeTagRaw = fieldState ? (fieldState['skin_volume']?.[0] || "") : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTagRaw = fieldState ? (fieldState['skin_structure']?.[0] || "") : "";

  // 2. Define Bible Strategy based on Volume
  let bibleStrategy = "";
  let targetWordCount = "1500";
  let literatureType = "Short Story";

  if (volumeDef) {
    if (volumeDef.id.includes('15s') || volumeDef.id.includes('30s')) {
      targetWordCount = "250";
      literatureType = "Flash Fiction / Cinematic Prose Poem";
      bibleStrategy = `**模式：瞬间冲击 (MODE: INSTANT IMPACT)**\n聚焦于单瞬间的无限细节爆发。不要写冗长的背景故事。`;
    } else if (volumeDef.id.includes('60s') || volumeDef.id.includes('90s') || volumeDef.id.includes('3m')) {
      targetWordCount = volumeDef.id.includes('60s') ? "500" : "800";
      literatureType = "Compact Short Story";
      bibleStrategy = `**模式：紧凑叙事 (MODE: COMPACT NARRATIVE)**\n一个包含紧凑弧光的完整故事：激励事件 -> 高潮 -> 结局。保持快节奏。`;
    } else if (volumeDef.id.includes('5m') || volumeDef.id.includes('15m')) {
      targetWordCount = volumeDef.id.includes('5m') ? "1500" : "3000";
      literatureType = "Narrative Short Story";
      bibleStrategy = `**模式：丰富短篇 (MODE: RICH SHORT STORY)**\n具有强烈角色发展的标准三幕结构。给场景留出呼吸空间。`;
    } else {
      targetWordCount = "8000";
      literatureType = "Novella Chapter / Treatment";
      bibleStrategy = `**模式：宏大叙事 (MODE: EXPANSIVE NARRATIVE)**\n一个丰富、宏大的叙事篇章，包含详细的世界构建。`;
    }
  } else {
    bibleStrategy = "**模式：标准短篇 (MODE: STANDARD SHORT STORY)**";
  }

  if (volumeDef?.patch?.aesthetic) {
    bibleStrategy += `\n**体量美学约束 (Volume Aesthetic):** ${volumeDef.patch.aesthetic}`;
  }

  const bannedWords = fieldState ? getBannedWords(fieldState) : "";
  const topologyInstruction = fieldState ? getNarrativeTopology(fieldState) : "";

  // M0 PROTOCOL
  let psychoProtocol = "";
  if (fieldState) {
    const m0Tags = Object.keys(fieldState)
      .filter(k => k.endsWith('_m0') || k.endsWith('_c0'))
      .flatMap(k => fieldState[k]);
    if (m0Tags.length > 0) {
      const tag = m0Tags[0];
      const item = findItemFull(tag) as any;
      const details = findItemDetails(tag);
      psychoProtocol = `## 🧠 PSYCHIC STRUCTURE PROTOCOL\n**Mechanism:** ${details}\n**Logical Constraint:** ${item?.logic || "Standard OS"}`;
    }
  }

  // WORLD LAW INJECTION
  let worldLawInstruction = "";
  if (worldLaw) {


    // 1. GRAVITY LOGIC
    let physicsContent = "";
    let contextContent = "";
    const gravity = worldLaw.gravity || 3;

    switch (gravity) {
      case 1:
        physicsContent = `**STRICT REALISM (写实重力)**\n   *   **Rule:** 严格遵循现实世界的物理法则。严禁出现任何违背常理的魔法、奇迹。\n   *   **Constraint:** 即使是心理意象，也必须有扎实的物理载体。`;
        contextContent = `**GENRE PURITY (绝对纪实)**\n   *   **Rule:** 所有现代/科幻标签必须严格降维和转化为符合时代背景的真实事物。\n   *   **Constraint:** 不允许突兀的类型融合。`;
        break;
      case 2:
        physicsContent = `**RATIONALIZED (合理论证)**\n   *   **Rule:** 允许超现实感，但必须有坚实的科幻、心理学或技术解释。\n   *   **Constraint:** 幻象必须是“大脑受损”或“高级科技干预”等合理结果。`;
        contextContent = `**LOGICAL ADAPTATION (逻辑补完)**\n   *   **Rule:** 时代错位标签可以出现，但需要极强的存在理由。\n   *   **Constraint:** 维持表面的物理秩序一致性。`;
        break;
      case 3:
        physicsContent = `**MAGICAL REALISM (魔幻现实 - 缝合)**\n   *   **Rule:** 现实是底色，但偶尔会渗透出无法解释的超自然症状（如下雨是血，机械长出内脏）。\n   *   **Constraint:** 不要泛滥，奇迹必须服务于心理隐喻。`;
        contextContent = `**CONTROLLED FUSION (受控融合)**\n   *   **Rule:** 鼓励经典类型与突变元素的融合。\n   *   **Constraint:** 用严肃的笔调写荒诞的事物。`;
        break;
      case 4:
        physicsContent = `**HIGH CONCEPT (奇幻高概念)**\n   *   **Rule:** 允许世界被设定在某种极端的魔法、科幻或架空法则下运行。\n   *   **Constraint:** 物理法则可以离奇，但世界必须有自圆其说的一致性。`;
        contextContent = `**GENRE MASHUP (大融合)**\n   *   **Rule:** 欢迎强烈的类型碰撞与奇观展示。`;
        break;
      case 5:
        physicsContent = `**ABSOLUTE UNBOUND (狂想无重力)**\n   *   **Rule:** 彻底的梦境逻辑。隐喻可以直接等同于物理现实。\n   *   **Constraint:** 放弃因果律。重力、生死、空间都可以随着人物的情绪任意坍塌。`;
        contextContent = `**ABSOLUTE CHAOS (极致解构)**\n   *   **Rule:** 尽情地将最不相干的标签进行后现代拼贴。`;
        break;
    }



    worldLawInstruction = `
         ## ⚖️ WORLD LAW (世界法则 - 物理与时空重力引擎 LV.${gravity})
         *   **PHYSICS ENGINE:** ${physicsContent}
         *   **CONTEXT ENGINE:** ${contextContent}
         `;
  }

  // SMART ANCHOR LOGIC
  let defaultAnchorInstruction = "";
  const hasEra = fieldState && fieldState['skin_era'] && fieldState['skin_era'].length > 0;
  const hasLoc = fieldState && fieldState['skin_location'] && fieldState['skin_location'].length > 0;

  // Custom Exact Year/Country Logic
  const exactYear = fieldState ? fieldState['skin_year_exact']?.[0] : null;
  const exactCountry = fieldState ? fieldState['skin_country_exact']?.[0] : null;
  let customCoordinates = "";

  if (exactYear || exactCountry) {
    customCoordinates = `
          ## 📍 PRECISE SPACETIME COORDINATES (HIGHEST PRIORITY)
          **你必须极其严苛地将故事锚定在以下被锁死的时空坐标内：**
          *   **Year (时代纪元):** ${exactYear || "未明确"}
          *   **Location/Country (发生国度):** ${exactCountry || "未明确"}
          
          **Instruction (执行指令):** 
          尽你所能去深度检索还原 ${exactCountry || "The World"} 在纪元 ${exactYear || "This Era"} 时的真实客观历史与物理状貌。 
          在叙事中极具质感地折射出那个特定时空的特殊时代产物、服饰纤维、残酷的政治面貌或是其独有的时代症候。
          这条具体时空指令具有【绝对最高覆盖权】(OVERRIDES)，直接碾压任何被随意选中的模糊时代标签。
          `;
  }

  if (!hasEra || !hasLoc) {
    const missingParts = [];
    if (!hasEra) missingParts.push("ERA/TIME PERIOD");
    if (!hasLoc) missingParts.push("LOCATION/SETTING");

    if (worldLaw?.physics === 'STRICT') {
      defaultAnchorInstruction = `
            ## ⚓ 锚点推演 (ANCHOR DEDUCTION - STRICT REALISM)
            **关键：用户未定义：${missingParts.join(' & ')}。**
            **指令:**
            1.  **推演:** 你必须基于角色 (M1) 和类型推演出最合乎逻辑的 ${missingParts.join(' 和 ')}。
            2.  **范围:** 如果模棱两克，默认为**世界级/国际化**设定 (例如：如果是黑色电影，假设是洛杉矶或香港；如果是史诗奇幻，假设是中土世界原型)。
            3.  **一致性:** 确保推演出的设定严格遵循物理法则。
            `;
    } else {
      defaultAnchorInstruction = `
            ## ⚓ 锚点推演 (ANCHOR DEDUCTION - UNBOUND FANTASY)
            **关键：用户未定义：${missingParts.join(' & ')}。**
            **指令:**
            1.  **创造:** 发明一个能最大化 M-Engine 标签戏剧张力的 ${missingParts.join(' 和 ')}。
            2.  **范围:** 追求普世或神话般的吸引力。
            3.  **自由:** 你可以将隐喻具象化（例如：如果 M1 是“幽灵”，设定可以是字面意义上的炼狱）。
            `;
    }
  }

  const dnaContext = fieldState ? `## B. ENGINE DNA (Structure)\n${buildContext(fieldState)}` : "";

  let visionContext = "";
  if (visionInput) {
    visionContext = getVisionAnchorProtocol(visionInput);
  }

  // Construct Style Instructions
  const styleItem = STYLE_MATRIX.flatMap(c => c.items).find(i => i.id === styleConfig.styleId);
  const perspective = PERSPECTIVES.find(p => p.id === styleConfig.perspectiveId);
  const sensory = SENSORY_MODES.find(s => s.id === styleConfig.sensoryId);
  const directorStyle = DIRECTOR_STYLES.find(d => d.id === styleConfig.styleId);

  let styleName = "Standard Literary";
  let styleDNA = "";

  if (directorStyle) {
    styleName = directorStyle.name;
    styleDNA = `Cinematic style of ${directorStyle.name}. Core traits: ${directorStyle.core}. Definition: ${directorStyle.def}`;
  } else if (styleItem) {
    styleName = styleItem.name;
    styleDNA = `Literary style of ${styleItem.name}. DNA: ${styleItem.dna}. ${styleItem.description || ''} ${styleItem.example ? `(e.g. ${styleItem.example})` : ''}`;
  }

  const povInstruction = perspective ? `**Point of View:** ${perspective.name}\n   *   **Directive:** ${perspective.prompt}` : "";
  const sensoryInstruction = sensory ? `**Sensory Priority:** ${sensory.name}\n   *   **Directive:** ${sensory.prompt}` : "";

  const dynamicTaskPrompt = `
# 本次任务执行区 (TASK EXECUTION)
# 1. Role: 文学大师 & 影子写手。
# Task: 基于上方提供的《迷雾学派》全局宪法 (SYSTEM BIBLE)，撰写一篇 ${literatureType}。

**关键指令:**
你**不是**在写剧本大纲或摘要。你是在写一篇**完整的文学小说**。
**目标长度：大约 ${targetWordCount} 个中文字符。**

**命名协议:**
以简体中文输出创意圣经。
但是，对于所有**角色名**、**地名**、**物品名**和**专有名词**，必须使用格式：**中文名 (英文名)**。

# 2. 动态约束与法则

${bibleStrategy}
${worldLawInstruction}
${defaultAnchorInstruction}
${customCoordinates}

${buildFormalLawEngine('BIBLE', targetWordCount, styleName, structureTagRaw)}

## 🧬 视觉资产美学标准 (VISUAL ASSET STANDARDS)
1. **人物 (Characters):** 必须遵循【美型 (Aesthetic Perfection)】原则。即使角色有残缺或伤痕，其整体形象必须具有高审美、高阶感。提示词应强调精致的面部比例、考究的质感。
2. **场景与物品 (Locations & Props):** 必须具有【极强电影感 (Cinematic)】与【深邃意境 (Atmospheric)】。侧重光影的艺术化表达（如 Chiaroscuro）、材质的真实感以及环境的叙事深度。
3. **提示词格式:** 每个资产的 \`view\` 对象中必须同时包含 \`promptCn\` (中文提示词) 和 \`promptEn\` (英文提示词)。

## 🚫 词汇黑名单
**不要使用抽象的引擎术语，如 "大他者", "对象 a"。请转译它们。**
**禁用标签:** [ ${bannedWords} ]

# 3. 原始素材
## A. 概念草案 (The Draft)
*   **标题:** ${treatment.title}
*   **基调:** ${treatment.tagline}
*   **核心创意:** ${treatment.pitch}

${visionContext}
${topologyInstruction}
${psychoProtocol}
${dnaContext}

# 4. ★★★ 风格执行 (关键) ★★★
**你必须完全采用以下人格面具和写作风格：**
*   **作者声音:** ${styleName}
*   **风格基因:** ${styleDNA}
*   **风格指令:** 模仿这位作者/导演的句式结构、节奏和词汇。
${povInstruction}
${sensoryInstruction}

# 5. 输出格式 (STRICT JSON)
Output ONLY valid JSON. 
**CRITICAL:** The 'synopsis' field MUST contain the **FULL STORY TEXT** (The actual prose/fiction), NOT a summary.
**CRITICAL:** All asset descriptions ("desc") MUST be in **Simplified Chinese**.

{
  "treatmentId": "${treatment.id}",
  "driverType": "NARRATIVE",
  "styleName": "${styleName}",
  "narrative": {
    "title": "Story Title (CN + EN)",
    "logline": "A one-sentence hook (CN).",
    "synopsis": "深度扩展后的【完整电影化小说正文】(中文)。这是核心部分。\\n\\n**核心指令 1 (转译):** 严禁在正文中出现任何引擎参数名称以及哲学等理论学术名词（如 'M1', 'S2', '大他者', '对象a' 等）。你必须将这些参数和专业名词进行【文学性转译】(Literary Transcoding)，使其彻底消融在具体的故事描写、人物动作和环境氛围中。例如：不要写'M1感到了异化'，要写'他看着玻璃幕墙里的倒影，觉得那张脸比自己更像主人'。\\n\\n**核心指令 2 (纯正小说手笔):** 绝对严禁使用任何剧本格式（如内景/外景、日/夜、中心对齐文本、粗体人名等）！你是在写一篇具备极致画面感与文学性的【小说】正文实体，而不是提纲或剧本。\\n\\n**核心指令 3 (文风):** 拒绝理工科式的枯燥陈述或说明书式的语言。追求极强的【电影感】(Cinematic)、【画面感】与【文艺感】。严格模仿 [${styleName}] 的笔触，注重光影、质感、气味与潜台词的描写。\\n\\n字数要求：${targetWordCount}字左右。"
  },
  "context": {
    "world": "Fallback text",
    "worldCn": "世界观与物理规律 (CN)",
    "worldEn": "World Building & Physics Rules (EN)",
    "tone": "Fallback text",
    "toneCn": "视觉影调与色彩 (CN)",
    "toneEn": "Visual & Atmospheric Tone (EN)",
    "colorPalette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
    "moodboard": { "prompt": "Midjourney Prompt for Key Visual", "promptCn": "中文提示词", "promptEn": "English Prompt" }
  },
  "assets": {
    "characters": [
      { "id": "char_1", "name": "Name (English Name)", "tag": "Archetype", "desc": "外观与心理描述 (必须使用中文)", "view": { "promptCn": "中文提示词 (美型、高审美)", "promptEn": "English Prompt (Aesthetic, high-end beauty)" } }
    ],
    "locations": [
      { "id": "loc_1", "name": "Name (English Name)", "tag": "Type", "desc": "氛围与细节描述 (必须使用中文)", "view": { "promptCn": "中文提示词 (电影感、意境)", "promptEn": "English Prompt (Cinematic, atmospheric)" } }
    ],
    "props": [
      { "id": "prop_1", "name": "Name (English Name)", "tag": "Type", "desc": "象征与材质描述 (必须使用中文)", "view": { "promptCn": "中文提示词 (质感、电影感)", "promptEn": "English Prompt (Textured, cinematic)" } }
    ]
  }
}
`;

  return NARRATIVE_SYSTEM_BIBLE + '\n\n' + dynamicTaskPrompt;
};