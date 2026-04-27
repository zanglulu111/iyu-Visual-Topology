// ============================================================================
// 🏢 一楼：宪法大厅 (底层规则与协议区)
// ============================================================================

// 📦 1. 进口原料仓库：从外部文件借用"图纸"和"词典"
import { NarrativeFieldState, CreativeTreatment, WorldLawConfig, StyleConfig, FaceState } from '../types';
import { NARRATIVE_ENGINE_BLOCKS } from '../data/engine_core/narrative_engine';
import { ALL_SKIN_BLOCKS } from '../data/skin_libraries';
import { SV2_DATA } from '../data/engine_sv/SV2'; // 特权词库：决定字数的 SV2 (体量)
import { SV1_DATA } from '../data/engine_sv/SV1'; // 叙事结构词库
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
  THE_MASK_PROTOCOL,
} from '../data/engine_core/narrative_protocols';

// 🔍 工具引入：在总词库中查找词条定义的函数
import { findItemDetails, findItemFull } from './dataRegistry';

// 🏗️ V1 & V2 架构引入：两套全新的 Prompt 构建器
import { buildPromptV1, buildPromptV2 } from './promptArchitectures';

// 🏗️ V3 架构：导演笔记模式 (Director's Brief)
import {
  buildPromptV3,
  getTagsBySuffix as v3GetTagsBySuffix,
  buildMDirective,
  buildTaskSentence,
  buildSurNotes,
  buildBannedWords as v3BuildBannedWords,
  formatYear,
  V3_FORMULA,
  V3_LAWS,
  GRAVITY_RULES,
} from './promptV3';

/** Prompt 架构版本 */
export type PromptArchVersion = 'legacy' | 'v1' | 'v2' | 'v3';

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
// 这里全是各种小型的"翻译官"和"计算器"，负责把冷冰冰的系统数据
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
  structureTag?: string,
  pitchWordCount?: string
): string => {
  const wordCountRule = target === 'PITCH'
    ? `每个故事概念 (Pitch) ≈ ${pitchWordCount || '500-700'} 字。三个方案必须各自独立、完整且风格互不雷同。`
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
    DENY:   [ 剧本格式 (绝对严禁出现"内景/外景"、"日/夜"、剧本对话体), 学术论文腔, 理工科说明书语法, 教科书式旁白, 鸡汤散文, 网络小说腔 ]${styleRule}

[LAW_4] ONTOLOGICAL_HYGIENE:
    DENY.META: 严禁在正文中出现任何引擎参数名 (M0-M7A/M7B, SUR1-SUR10, SUR-END)
    DENY.JARGON: 严禁出现哲学/精神分析术语 (大他者, 对象a, 符号界, 实在界, 能指, 所指, 异化, 阉割)
    RULE: 所有抽象概念必须完成【文学性转译】— 消融在感官描写、人物动作与物理环境中
\`\`\`
`;
};

// ----------------------------------------------------------------------------
// 🛠️ 机器 3：动态黑名单提取机 (getBannedWords)
// 作用：生成一串高压违禁字符串。不仅封杀"大他者"、"实在界"等学术术语，
//      更绝的是，连用户选中面板标签的"原词"也一同拉黑。通过这种物理阻断，
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
// 作用：识别发给 AI 的"剧本镜头重心"。
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
*   **DIRECTIVE (重心分配指令):** 请利用上段提取的"核心逻辑"来决定当前应该倾斜多少结构权重给 M1-M7A/M7B。
    *   如果逻辑强调高能动作与暴力 -> 将聚光灯和笔墨砸向 M5 (行动驱力)。
    *   如果逻辑强调恐惧与未知压迫 -> 让 M4 (大他者) 的阴影笼罩一切。
    *   如果逻辑强调情感与执念羁绊 -> 让 M3 (欲望幻想) 承担最痛的张力。
    *   如果逻辑强调宏大世界与畸变 -> 优先去刻画 SUR 场域背景与 M4 系统。
`;
};

// ============================================================================
// 🏢 三楼 A区：分歧点造梦机 (buildNarrativePrompt)
// 核心功能：接收你在界面的所有选择，打包成一封发给 AI 的信。
// 最终产出：3 个方向完全不同的"故事草案 (Pitch)"。
// ============================================================================
export const buildNarrativePrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig,
  archVersion: PromptArchVersion = 'v3',
  faceState?: FaceState
): { text: string, images: string[] } => {
  // ═══ 架构分流：根据版本参数委托给不同的 Prompt 构建器 ═══
  if (archVersion === 'v3') return buildPromptV3(fieldState, visionInput, visionImage, worldLaw, faceState);
  if (archVersion === 'v1') return buildPromptV1(fieldState, visionInput, visionImage, worldLaw);
  if (archVersion === 'v2') return buildPromptV2(fieldState, visionInput, visionImage, worldLaw);
  // ═══ Legacy 模式：保持原有逻辑不变 ═══

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
- **STRICT ADHERENCE (绝对遵守):** 你必须将上方的 'Logical Constraint' 视为冷酷的数学铁律，以此来推演计算故事中所有的叙事动能 (M1-M7A/M7B)。
- **SURVIVAL VS COLLAPSE (生存或坍缩):** M0 决定了主体的宇宙在遭遇 M2 (真实界撞击) 后，是能够苟延残喘，还是彻底坍缩为某种特定的症状结晶。
- **IF [Ordinary Psychosis / 普通精神病]:** 绝对不要写一个刻版的"疯子"故事。主体表面上看起来完全正常，但他极度依赖某块特定的"补丁 (Patch)"（比如具体的工作、怪癖或仪式效仿）来勉力维持现实的缝合。故事必须聚焦于这个"补丁"将要被撕裂的致命威胁。
- **IF [Autism / 自闭症]:** 逻辑必须围绕对大他者强行入侵的"绝对闭环 (Closure)"与"防御 (Defense)"展开。这是一个竭力剥离大他者的世界。
- **IF [Perversion / 倒错]:** 逻辑必须围绕"否认 (Disavowal)"与"工具化 (Instrumentality)"展开。主体深知法律和底线，但他享受且致力于去横穿它，或者把自己变成完美执行大他者享乐仪式的工具。
- **IF [Hysteria / 癔症]:** 逻辑是一种永无止境的"结构性质询 (Questioning)"与"永远无法满足的欲望 (Unsatisfied Desire)"。
- **IF [Obsession / 强迫症]:** 逻辑是绝对的"控制 (Control)"与永不停歇的"拖延 (Procrastination)"，只为了让大他者保持永远存活，但又必须与之保持绝对的安全距离。
- **IF [Paranoia / 妄想狂]:** 逻辑是"意义过载 (Meaning Overload)"。万事万物皆是致命的征兆。大他者被体验为是充满绝对恶意的凝视者。
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
    const pitchMechanics = volumeDef.patch?.mechanics?.split('\n').find(l => l.includes('三卡大纲')) || volumeDef.def || '';
    volumeInstruction = `
    ## ⏱️ VOLUME PROTOCOL: ${volumeDef.name}
    **CRITICAL INSTRUCTION FOR AI (核心指令):**
    ${pitchMechanics}
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
    编写一个兼具视听感的三幕剧标准草案。要求在"具体惊艳的高光画面描写"与"整体故事弧线"之间保持微妙平衡。
    `;
  }

  // 提取三卡大纲字数
  let pitchWordCount = '500-700';
  if (volumeDef?.patch?.mechanics) {
    const pitchMatch = volumeDef.patch.mechanics.match(/每卡\s*≈\s*([\d]+-[\d]+)/);
    if (pitchMatch) pitchWordCount = pitchMatch[1];
  }

  // SV1/SV2 协议注入
  const structureItem = SV1_DATA.flatMap(c => c.items).find(s => structureTagRaw.includes(s.name) || structureTagRaw === s.id);

  // 动态叙事骨架
  const DEFAULT_SKELETONS = [
    'inciting_incident_激励事件',
    'rising_action_上升动作',
    'climax_高潮',
    'resolution_余痕收束',
  ];
  const pitchSkeletons = structureItem?.skeletons?.length ? structureItem.skeletons : DEFAULT_SKELETONS;
  const pitchSkeletonLabels = pitchSkeletons.map(s => {
    const parts = s.split('_');
    return parts[parts.length - 1];
  });
  const pitchSkeletonArrow = pitchSkeletonLabels.join(' → ');

  let svProtocol = '';
  if (volumeDef) {
    svProtocol += `\n### SV2 体量协议: ${volumeDef.name}\n**定义:** ${volumeDef.def || ''}\n**核心约束:**\n${volumeDef.core || ''}`;
  }
  if (structureItem) {
    svProtocol += `\n\n### SV1 结构协议: ${structureItem.name}\n**定义:** ${structureItem.def || ''}\n**核心规则:**\n${structureItem.core || ''}`;
  }

  // ============================================================================
  // 📦 步骤 5：世界法则构建 (物理引擎是写实还是魔法？电影类型是纯净还是混搭？)
  // ============================================================================
  // 1. Gravity Level (World Law)
  let instructions = "";
  let physicsConstraint = "";
  let contextConstraint = "";
  const gravity = worldLaw.gravity || 1;

  switch (gravity) {
    case 1:
      instructions += "WORLD LAW LV.1 [写实 STRICT REALISM]: 物理重力闭锁。严禁任何违法时代背景的物理常数。没有任何奇迹，死亡是绝对的，重力是必然的。\n";
      physicsConstraint = "STRICT REALISM (ABSOLUTE PROHIBITION OF MAGIC/SUPERNATURAL)";
      contextConstraint = "GENRE PURITY (STRICTLY GROUNDED)";
      break;
    case 2:
      instructions += "WORLD LAW LV.2 [合理 RATIONALIZED]: 逻辑补完路径。超现实元素必须被赋予一个[科学、心理学或机械]的实体合理解释。\n";
      physicsConstraint = "RATIONALIZED (SUPERNATURAL MUST BE EXPLAINED VIA SCI-FI OR PSYCHOLOGY)";
      contextConstraint = "GENRE SEMI-PURITY (LOGICAL EXPLANATIONS REQUIRED)";
      break;
    case 3:
      instructions += "WORLD LAW LV.3 [缝合 MAGICAL REALISM]: 魔幻现实主义。以残酷现实为底，允许局部[缝合]超现实的符号与症状。\n";
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
    if (gravity === 1) {
      // STRICT MODE: International Scope, Realistic Logic
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT REALITY ANCHOR (STRICT REALISM - INTERNATIONAL)
          **CRITICAL (严重警告):** 用户未明确指定具体的年代 (Era) 或发生地 (Location)，且当前物理防崩坏法则被设定为 **STRICT (写实原教旨)**。
          **INSTRUCTION (执行指令):**
          1.  **NO DEFAULT ERA (无默认年代):** 绝对禁止盲目默认为"现代当代 (Present Day)"。你必须基于本场域的 M-Engine 人物主标签等来反向演绎出最符合结构逻辑的客观时代坐标（例如：只要有皇帝，那就不可能存在手机）。
          2.  **INTERNATIONAL SCOPE (国际化场域):** 故事背景默认必须是非常高度国际化、具有普世影史高度的重金属视听场域 (好莱坞/欧洲纯粹电影质感)。除非标签矩阵产生出强制性的东方逻辑 (如武侠、修仙)，否则 **一律禁止** 强行套用土味刻板的东亚小镇或熟人社会框架。
          3.  **PHYSICS (物理重力):** 绝对恪守推演出的主轴年代的物理现实铁律。
          `;
    } else {
      // UNBOUND MODE: Allow creativity based on M-Tags
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT REALITY ANCHOR (UNBOUND FANTASY - GLOBAL)
          **CRITICAL (最高警戒):** 用户未指定纪元或环境废墟锚点，但！当前物理系统已被完全解绑设定为 **UNBOUND (狂想无重力倒错)**。
          **INSTRUCTION (执行指令):**
          1.  **CREATIVE FREEDOM (创世权自由):** 放手去凭空"建造"一个疯狂的奇观异世界。唯一的前提是：这个世界完全是为了榨干当前 M-Engine 标签组的结构张力而存在。
          2.  **SCOPE (气宇视野):** 抛弃现实羁绊，将维度拔升至某种浩瀚的神话、超验或是赛博邪神般的终极史诗质感。
          3.  **INTERPRETATION (直率降维投射):** 你获得了特权去极其干脆地物理化一切比喻。如果在标签组中你看到"M1被掏空了"，你可以让他字面意义上被开膛破肚还活着；看到义体，就允许钢铁直接与血肉物理融合焊接。让隐喻在此刻变成硬邦邦的现实伤疤。
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
Task: 基于上方提供的《迷雾学派》全局宪法 (SYSTEM BIBLE)，根据以下动态注入的 DNA (M0-M7A/M7B 双结项) 和语境 (SUR1-SUR10 + SUR-END)，生成 3 个电影级的故事概念。

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

${buildFormalLawEngine('PITCH', '600', '', structureTagRaw, pitchWordCount)}
${svProtocol}

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
1.  **拒绝抽象 (NO ABSTRACTIONS):** 不要说"他感到异化"，要写"他盯着玻璃幕墙，手指触碰不到对面的世界"。
2.  **具体性 (SPECIFICITY):** 给角色一道伤疤、一个习惯、一种气味。给房间一个温度。
3.  **戏剧性 (DRAMA):** 每个 Pitch 必须包含叙事骨架 **${pitchSkeletonArrow}**。
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
例如：若背景为 1855 日本，但标签包含"基因诊所"，你必须在思考中写明如何将其转译为"通过妖术缝合血肉的神社药铺"。
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
${pitchSkeletons.map(s => `      "${s}": "按此结构阶段展开（结合 M 参数与 SUR 环境）..."`).join(',\n')}
    },
    "structure": "GENRE_DRIVEN"
  },
  {
    "id": "2",
    "type": "POST_STRUCTURALIST",
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": {
${pitchSkeletons.map(s => `      "${s}": "围绕内心创伤展开此阶段..."`).join(',\n')}
    },
    "structure": "CHARACTER_DRIVEN"
  },
  {
    "id": "3",
    "type": "THE_REAL",
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": {
${pitchSkeletons.map(s => `      "${s}": "以氛围与环境压迫展开此阶段..."`).join(',\n')}
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
// 🏢 三楼 B区：全景创世碑 (buildNarrativeBiblePrompt) — V3 架构
// 核心功能：当你选中了 3 个草案中的 1 个后，这里接手工作。
// 最终产出：1 篇完整的具备字数要求的文学正文 + 角色、场景等画面资产。
// 架构：复用 promptV3 的导演笔记 + 物理法则 + SUR 冲突裁决体系
// ============================================================================
export const buildNarrativeBiblePrompt = (
  treatment: CreativeTreatment,
  styleConfig: StyleConfig,
  fieldState?: NarrativeFieldState,
  visionInput?: string,
  worldLaw?: WorldLawConfig
): string => {

  // ════════════════════════════════════════════════════════════════════════════
  // ① 身份声明 (SECTION_ROLE)
  // ════════════════════════════════════════════════════════════════════════════
  const volumeTagRaw = fieldState ? (fieldState['skin_volume']?.[0] || "") : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTagRaw = fieldState ? (fieldState['skin_structure']?.[0] || "") : "";

  let bibleStrategy = "";
  let targetWordCount = "1500";
  let literatureType = "Short Story";

  if (volumeDef) {
    const vid = volumeDef.id;
    if (vid.includes('15s')) {
      targetWordCount = "250";
      literatureType = "Flash Fiction / Cinematic Prose Poem";
      bibleStrategy = "**MODE: INSTANT IMPACT** — 聚焦单瞬间的无限细节爆发。不写冗长背景。";
    } else if (vid.includes('30s')) {
      targetWordCount = "400";
      literatureType = "Flash Fiction / Micro Scene";
      bibleStrategy = "**MODE: MICRO SCENE** — 极短篇幅内完成一次认知/情绪翻转。";
    } else if (vid.includes('60s')) {
      targetWordCount = "500";
      literatureType = "Compact Short Story";
      bibleStrategy = "**MODE: COMPACT NARRATIVE** — 单场景微弧光或循环情绪体。";
    } else if (vid.includes('90s')) {
      targetWordCount = "700";
      literatureType = "Compact Short Story";
      bibleStrategy = "**MODE: COMPACT NARRATIVE** — 紧凑弧光或氛围渐变。";
    } else if (vid.includes('3m')) {
      targetWordCount = "1000";
      literatureType = "Short Film / MV";
      bibleStrategy = "**MODE: SHORT FILM** — 完整短片或概念循环，节奏紧密。";
    } else if (vid.includes('5m')) {
      targetWordCount = "1500";
      literatureType = "Narrative Short Story";
      bibleStrategy = "**MODE: RICH SHORT** — 对话驱动或散文独白，给人物留呼吸空间。";
    } else if (vid.includes('10m')) {
      targetWordCount = "2500";
      literatureType = "Short Film Script";
      bibleStrategy = "**MODE: CHARACTER STUDY** — 完整人物弧光，首次允许人物「改变」。";
    } else if (vid.includes('15m')) {
      targetWordCount = "3500";
      literatureType = "Drama Short";
      bibleStrategy = "**MODE: MULTI-LAYER** — 信息驱动或群像交织，允许多层叙事。";
    } else if (vid.includes('30m')) {
      targetWordCount = "6000";
      literatureType = "Novella / Mini-Movie";
      bibleStrategy = "**MODE: MINI MOVIE** — 完整三幕+中点+B线。迷你电影级展开。";
    } else if (vid.includes('45m')) {
      targetWordCount = "8000";
      literatureType = "TV Episode Script";
      bibleStrategy = "**MODE: EPISODE** — 多线叙事生态：A线闭环+B线悬置+C暗线。";
    } else if (vid.includes('90m') || vid.includes('epic')) {
      targetWordCount = "12000";
      literatureType = "Feature Film / Epic Treatment";
      bibleStrategy = "**MODE: FEATURE FILM** — 全参数工业标准展开，章节式宏大叙事。";
    } else {
      targetWordCount = "1500";
      literatureType = "Short Story";
      bibleStrategy = "**MODE: STANDARD SHORT STORY**";
    }
  } else {
    bibleStrategy = "**MODE: STANDARD SHORT STORY**";
  }

  if (volumeDef?.patch?.mechanics) {
    const bibleMechanics = volumeDef.patch.mechanics.split('\n').find(l => l.includes('创意圣经')) || '';
    if (bibleMechanics) bibleStrategy += `\n**Volume Mechanics:** ${bibleMechanics}`;
  }

  // SV1/SV2 协议注入 (Bible)
  const bibleStructureItem = SV1_DATA.flatMap(c => c.items).find(s => structureTagRaw.includes(s.name) || structureTagRaw === s.id);

  // Bible 动态叙事骨架
  const BIBLE_DEFAULT_SKELETONS = [
    'inciting_incident_激励事件',
    'rising_action_上升动作',
    'climax_高潮',
    'resolution_余痕收束',
  ];
  const bibleSkeletons = bibleStructureItem?.skeletons?.length ? bibleStructureItem.skeletons : BIBLE_DEFAULT_SKELETONS;
  const bibleSkeletonLabels = bibleSkeletons.map(s => {
    const parts = s.split('_');
    return parts[parts.length - 1];
  });
  const bibleSkeletonArrow = bibleSkeletonLabels.join(' → ');

  let bibleSvProtocol = '';
  if (volumeDef) {
    bibleSvProtocol += `\n### SV2 体量协议: ${volumeDef.name}\n**定义:** ${volumeDef.def || ''}\n**核心约束:**\n${volumeDef.core || ''}`;
  }
  if (bibleStructureItem) {
    bibleSvProtocol += `\n\n### SV1 结构协议: ${bibleStructureItem.name}\n**定义:** ${bibleStructureItem.def || ''}\n**核心规则:**\n${bibleStructureItem.core || ''}`;
  }

  const taskSentence = fieldState ? buildTaskSentence(fieldState) : "";

  const SECTION_ROLE = `Role: 殿堂级电影编剧 & 叙事架构师。

## 任务 (TASK)
你将收到一份已完成的**故事大纲（素材）**。该大纲已经基于拉康精神分析学派电影叙事创作公式、导演笔记与世界物理法则生成。

你的任务是：**基于这份大纲，进行风格化重写**。

**重写规则：**
1. **故事骨架**不变——大纲中的人物、事件、M0-M7A/M7B 双结项的精神弧线、意义裁决与实在余痕必须保留。
2. **风格是绝对重心**——你必须完全模仿所选作者的底层句法逻辑、节奏、语感与叙事策略。不是"像"某个作者，而是"成为"那个作者重新写这个故事。
3. 重写同样遵守以下创作铁律、世界物理法则与表层设定约束。
4. 输出一篇 ${literatureType}，目标 ~${targetWordCount} 中文字符。
5. 输出格式：完整的文学小说正文 + 视觉资产 JSON。不是剧本大纲或摘要。
6. 语言：简体中文。角色名/地名/物品名格式：**中文名 (英文名)**。

${bibleStrategy}
${bibleSvProtocol}`;

  // ════════════════════════════════════════════════════════════════════════════
  // ② 核心公式 (SECTION_FORMULA) — 复用 V3
  // ════════════════════════════════════════════════════════════════════════════
  const SECTION_FORMULA = V3_FORMULA;

  // ════════════════════════════════════════════════════════════════════════════
  // ③ 创作铁律 (SECTION_LAWS) — 复用 V3 + Bible 专属补充
  // ════════════════════════════════════════════════════════════════════════════
  const structureRule = structureTagRaw && structureTagRaw !== 'Unknown Structure' && structureTagRaw.length > 0
    ? `\nStructure: "${structureTagRaw}" — 将此叙事结构标签作为骨架融入故事。`
    : '';

  const styleItem = STYLE_MATRIX.flatMap(c => c.items).find(i => i.id === styleConfig.styleId);
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

  const styleRule = styleName && styleName !== 'Standard Literary' && styleName.length > 0
    ? `\nStyle: 模仿 [${styleName}] 的底层句法逻辑与节奏，严禁复制其经典台词或表层符号。`
    : '';

  const bannedWords = fieldState ? v3BuildBannedWords(fieldState) : "";

  const SECTION_LAWS = `${V3_LAWS}

**Bible 专属形式律法**:
\`\`\`
[LAW_1] WORD_COUNT: 正文 ~${targetWordCount} 中文字符，硬性目标。
[LAW_2] STRUCTURE: REQUIRE [${bibleSkeletonArrow}] DENY [机械降神, 无冲突流水账, 虎头蛇尾]${structureRule}
[LAW_3] VOICE: 极精致的电影化小说 (Show, Don't Tell)。
    DENY [剧本格式(内景/外景/日/夜), 学术论文腔, 鸡汤散文, 网络小说腔]${styleRule}
\`\`\`

**禁用词**: [ ${bannedWords} ]`;

  // ════════════════════════════════════════════════════════════════════════════
  // ④ 导演笔记 (SECTION_DIRECTOR) — 复用 V3 的 buildMDirective
  // ════════════════════════════════════════════════════════════════════════════
  let SECTION_DIRECTOR = "";
  if (fieldState) {
    const mEntries: (string | null)[] = [
      buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0'),
      buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1'),
      buildMDirective(fieldState, '_m2',           'M2. 真实遭遇', 'engine_m2'),
      buildMDirective(fieldState, ['_m3', '_c3'],  'M3. 欲望幻想', 'engine_m3'),
      buildMDirective(fieldState, ['_m4', '_c4'],  'M4. 大他者阻断', 'engine_m4'),
      buildMDirective(fieldState, '_m5',           'M5. 行动驱力', 'engine_m5'),
      buildMDirective(fieldState, '_m6',           'M6. 终极代价', 'engine_m6'),
      buildMDirective(fieldState, '_m7a',           'M7A. 象征裁决', 'engine_m7a'),
      buildMDirective(fieldState, '_m7b',           'M7B. 实在余痕', 'engine_m7b'),
    ];

    const directorBrief = mEntries.filter(Boolean).join('\n\n');

    const m0Tags = fieldState ? v3GetTagsBySuffix(fieldState, ['_m0', '_c0']) : [];
    let m0Logic = '';
    if (m0Tags.length > 0) {
      const item = findItemFull(m0Tags[0]) as any;
      if (item?.logic) {
        m0Logic = `\n\n**M0 逻辑约束（铁律）**: ${item.logic}`;
      }
    }

    SECTION_DIRECTOR = `## 导演笔记 (DIRECTOR'S BRIEF)

以下是这部电影的创作核心。每一条都是导演对你说的话——不是定义，是指令。
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明且适配世界物理法则与表层设定的全新场景承载它。严禁复现示例中的具体意象。

**M0 渗透法则**：M0 不是一个独立参数——它是整个故事的操作系统。M1-M7A/M7B 的每一条导演笔记都必须经过 M0 的逻辑改写。

${directorBrief}${m0Logic}`;
  }

  // ════════════════════════════════════════════════════════════════════════════
  // ⑤ 世界法则 + SUR 表层设定 (SECTION_SKIN) — 复用 V3 体系
  // ════════════════════════════════════════════════════════════════════════════
  const gravity = worldLaw?.gravity || 1;
  const gravityRule = GRAVITY_RULES[gravity] || GRAVITY_RULES[3];

  const skinParts: string[] = [gravityRule];

  if (fieldState) {
    const exactYear = v3GetTagsBySuffix(fieldState, '_year_exact')[0] || null;
    const exactCountry = v3GetTagsBySuffix(fieldState, '_country_exact')[0] || null;
    if (exactYear || exactCountry) {
      skinParts.push(`**SUR3. 精确时空坐标约束**: 严格还原${exactYear ? formatYear(exactYear) : '?'}${exactCountry || '?'}的物理状貌、服饰与政治面貌。覆盖一切模糊标签。`);
    }
  }

  if (visionInput) {
    skinParts.push(getVisionAnchorProtocol(visionInput));
  }

  if (fieldState) {
    const surNotes = buildSurNotes(fieldState);
    if (surNotes) skinParts.push(surNotes);
  }

  const SECTION_SKIN = `## 世界物理法则与表层设定\n\n${skinParts.join('\n')}`;

  // ════════════════════════════════════════════════════════════════════════════
  // ⑥ 风格 (SECTION_STYLE)
  // ════════════════════════════════════════════════════════════════════════════
  const perspective = PERSPECTIVES.find(p => p.id === styleConfig.perspectiveId);
  const sensory = SENSORY_MODES.find(s => s.id === styleConfig.sensoryId);

  const povInstruction = perspective ? `**叙事视点:** ${perspective.name}\n${perspective.prompt}` : "";
  const sensoryInstruction = sensory ? `**感官侧重:** ${sensory.name}\n${sensory.prompt}` : "";

  const SECTION_STYLE = `## 风格重写指令 (STYLE — 本次任务的绝对重心)

**核心指令：你必须完全成为这位作者。不是「像」他/她，而是「是」他/她在重写这个故事。**

**作者声音:** ${styleName}
**风格基因:** ${styleDNA}

**执行要求：**
1. **句法层面**——模仿该作者的句子结构、长度节奏、标点使用习惯。如果该作者用长句，你就用长句；如果该作者用碎片句，你就用碎片句。
2. **叙事策略层面**——模仿该作者处理时间、空间、视角切换的方式。不是模仿他写过什么，而是模仿他怎么思考故事。
3. **语感层面**——模仿该作者的修辞偏好、意象选择逻辑、词汇温度。
4. **严禁表层模仿**——不要复制该作者的经典台词、标志性意象或已有作品的具体细节。用他的大脑写新故事，不用他的词汇表。

${povInstruction}
${sensoryInstruction}`;

  // ════════════════════════════════════════════════════════════════════════════
  // ⑦ 素材 + 输出格式 (SECTION_OUTPUT)
  // ════════════════════════════════════════════════════════════════════════════
  const m7aTags = fieldState ? v3GetTagsBySuffix(fieldState, '_m7a') : [];
  const m7bTags = fieldState ? v3GetTagsBySuffix(fieldState, '_m7b') : [];

  const SECTION_OUTPUT = `## 素材 (SOURCE)
*   **Title:** ${treatment.title}
*   **Tagline:** ${treatment.tagline}
*   **Pitch:** ${treatment.pitch}

## 思考过程（必须先输出）
\`\`\`xml
<thought_process>
1. 情绪曲线：逐一确认每个 M 参数的导演笔记面向，绘制完整情绪曲线
2. M7A 回溯：从 M7A 缝合点反向审视，哪些 M 参数的含义被重写了？
3. M7B 前兆：M7B 的终态是什么？前兆编织在故事哪个阶段？使用什么感官通道？终态使用不同的感官通道
4. 物理校验：逐一检查每个 SUR 标签是否超出当前物理法则边界，超出的如何降维
5. M0 渗透检查：逐一检查 M1-M7A/M7B，每个参数的叙事实现是否被 M0 的逻辑改写过
</thought_process>
\`\`\`

## 视觉资产标准
- **人物:** 美型原则，精致面部比例，考究质感
- **场景/物品:** 极强电影感，光影艺术化(Chiaroscuro)，材质真实
- **格式:** 每个资产 view 必须含 promptCn + promptEn

## 输出 (STRICT JSON)
Output ONLY valid JSON. synopsis = 完整小说正文 (NOT summary). desc = 中文.
${m7aTags.length > 0 ? `M7A [${m7aTags.join('/')}] 回溯性决定整个故事的意义。严禁篡改。` : ''}
${m7bTags.length > 0 ? `M7B [${m7bTags.join('/')}] 是绝对宪法。严禁篡改。` : ''}

{
  "treatmentId": "${treatment.id}",
  "driverType": "NARRATIVE",
  "styleName": "${styleName}",
  "narrative": {
    "title": "Story Title (CN + EN)",
    "logline": "A one-sentence hook (CN).",
    "synopsis": "complete novel text (${targetWordCount} chars)"
  },
  "context": {
    "world": "Fallback text",
    "worldCn": "world building (CN)",
    "worldEn": "world building (EN)",
    "tone": "Fallback text",
    "toneCn": "visual tone (CN)",
    "toneEn": "visual tone (EN)",
    "colorPalette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
    "moodboard": { "prompt": "MJ Prompt", "promptCn": "CN prompt", "promptEn": "EN prompt" }
  },
  "assets": {
    "characters": [
      { "id": "char_1", "name": "Name (EN)", "tag": "Archetype", "desc": "desc (CN)", "view": { "promptCn": "CN", "promptEn": "EN" } }
    ],
    "locations": [
      { "id": "loc_1", "name": "Name (EN)", "tag": "Type", "desc": "desc (CN)", "view": { "promptCn": "CN", "promptEn": "EN" } }
    ],
    "props": [
      { "id": "prop_1", "name": "Name (EN)", "tag": "Type", "desc": "desc (CN)", "view": { "promptCn": "CN", "promptEn": "EN" } }
    ]
  }
}`;

  // ════════════════════════════════════════════════════════════════════════════
  // 最终拼接
  // ════════════════════════════════════════════════════════════════════════════
  const sections = [
    SECTION_ROLE,
    SECTION_FORMULA,
    SECTION_LAWS,
    SECTION_DIRECTOR,
    SECTION_SKIN,
    SECTION_STYLE,
    SECTION_OUTPUT,
  ].filter(s => s.length > 0);

  return sections.join('\n\n');
};
