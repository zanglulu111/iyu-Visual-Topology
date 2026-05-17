// ============================================================================
// 🏢 一楼：宪法大厅 (底层规则与协议区)
// ============================================================================

// 📦 1. 进口原料仓库：从外部文件借用"图纸"和"词典"
import { NarrativeFieldState, CreativeTreatment, WorldLawConfig, StyleConfig, FaceState, PromptFocusState, StyleItem, M7BResidueIntensity } from '../types';
import { NARRATIVE_ENGINE_BLOCKS } from '../data/engine_core/narrative_engine';
import { ALL_SKIN_BLOCKS } from '../data/narrative/skin_libraries';
import { SV2_DATA } from '../data/engine_sv/SV2'; // 特权词库：决定字数的 SV2 (体量)
import { SV1_DATA } from '../data/engine_sv/SV1'; // 叙事结构词库
import { PERSPECTIVES, SENSORY_MODES, STYLE_MATRIX } from '../data/narrative/style_matrix';
import { DIRECTOR_STYLES } from '../data/narrative/director_styles';

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
  buildSoftAvoidLabels as v3BuildSoftAvoidLabels,
  formatYear,
  V3_FORMULA,
  V3_LAWS,
  buildWorldLawPrompt,
  buildM7BIntensityBrief,
  normalizeM7BIntensity,
} from './promptV3';
import { buildPromptV4 } from './promptV4';
import { getWorldLawDisplay } from './worldLaw';

/** Prompt 架构版本 */
export type PromptArchVersion = 'legacy' | 'v1' | 'v2' | 'v3' | 'v4';

// ============================================================================
// 📜 2. 系统宪法 (最高铁律拼接区)
// [AUTO KV CACHING SUPPORT] ABSOLUTE STATIC SYSTEM BIBLE
// 极客备注: 这里拼接的长文本绝对不能包含任何动态变量，
// 这样 AI 平台才能 100% 缓存它，省下大量算力和费用 (Cache Hits > 80%)。
// ============================================================================
const NARRATIVE_SYSTEM_BIBLE = `
Role: 电影级叙事创作大师 & 文学级文本塑造者（戛纳/奥斯卡级叙事判断力）。
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
    if (key.endsWith('_m0') || key.endsWith('_c0')) return null;
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
    ? `\n    STYLE_RENDERER: 调用 [${styleName}] 的底层作者性机制与节奏，严禁复制其经典台词或表层符号。`
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
// 🛠️ 机器 3：硬禁词提取机 (getBannedWords)
// 作用：只封锁后台参数、旧机器标签和理论术语。用户选择的世界材料、职业材料、
//      类型材料不再硬禁，避免把可用叙事素材误杀。
// ----------------------------------------------------------------------------
const getBannedWords = (fieldState: NarrativeFieldState): string => {
  return v3BuildBannedWords(fieldState);
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
  faceState?: FaceState,
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity
): { text: string, images: string[] } => {
  // ═══ 架构分流：根据版本参数委托给不同的 Prompt 构建器 ═══
  if (archVersion === 'v4') return buildPromptV4(fieldState, visionInput, visionImage, worldLaw, faceState, focusState, m7bIntensity);
  if (archVersion === 'v3') return buildPromptV3(fieldState, visionInput, visionImage, worldLaw, faceState, focusState, m7bIntensity);
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
  const softAvoidLabels = v3BuildSoftAvoidLabels(fieldState);
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
  // 📦 步骤 3：加载 M0 结构拓扑协议（已去诊断化）
  // ============================================================================
  const m0Tags = getTagsBySuffix(['_m0', '_c0']);
  const m0Directive = m0Tags.length > 0
    ? buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0')
    : null;
  const psychoProtocol = m0Directive ? `
## M0 STRUCTURAL TOPOLOGY PROTOCOL (CRITICAL PRIORITY)
M0 是主体的结构组织方式与世界稳定方式，不是病理诊断、临床机制、症状标签或异常人格。下面内容已经转译为模型执行语言；不得回退成心理病例、患者故事或诊断报告。

${m0Directive}
` : "";

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
  // 📦 步骤 5：世界法则构建（SUR1 类型 × SUR2/SUR3 时空）
  // ============================================================================
  const worldLawDisplay = getWorldLawDisplay(worldLaw);
  const instructions = buildWorldLawPrompt(worldLaw);
  const worldLawConstraint = `${worldLawDisplay.fullLabel}: ${worldLawDisplay.descCN}`;

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
      这条具体时空指令具有【绝对最高覆盖权】(OVERRIDES)，它锁定该坐标下可成立的技术、制度、宗教、交通、医疗、阶级与生活材料。与此坐标冲突的 SUR1 类型材料必须按当前世界法则 L1-L5 处理；已被该坐标或用户输入授权的世界材料则必须保留为当前世界现实。
      `;
  }

  if (!hasEra && !hasLoc && !exactYear && !exactCountry) {
    if (worldLawDisplay.level <= 2) {
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT WORLD COORDINATE (${worldLawDisplay.fullLabel})
          **CRITICAL (严重警告):** 用户未明确指定具体年代或发生地。
          **INSTRUCTION (执行指令):**
          1.  **NO DEFAULT ERA:** 不要默认当代，也不要默认历史；根据 SUR1 类型动力、SUR2/SUR4/SUR5/SUR9 与外部故事机关推演最可信、最有戏剧张力的世界坐标。
          2.  **LAW IS NOT ANTI-SCI-FI:** SUR1 只提供类型语法，不单独授权科幻、近未来、AI、义体、太空等材料成为世界事实；若这些材料被世界法则、SUR2/SUR3 或用户输入明确授权，它们可以成为候选世界；若未授权，不得硬塞。
          3.  **CLEAR BOUNDARY:** 一旦坐标成立，严格守住该世界的技术、制度、文化与生活材料边界，并按 ${worldLawDisplay.fullLabel} 处理类型冲突。
          `;
    } else if (worldLawDisplay.level === 3) {
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT WORLD COORDINATE (${worldLawDisplay.fullLabel})
          **CRITICAL (严重警告):** 用户未明确指定具体年代或发生地。
          **INSTRUCTION (执行指令):**
          1.  先推演一个可信世界坐标，不要把故事懒惰地丢进默认当代或默认历史。
          2.  允许局部异常、传闻、仪式、幻觉、民间解释、象征物或社会症状承载 SUR1 类型压力。
          3.  局部缝合不得扩展成完整新世界体系。
          `;
    } else if (worldLawDisplay.level === 4) {
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT WORLD COORDINATE (${worldLawDisplay.fullLabel})
          **CRITICAL (严重警告):** 用户未明确指定具体年代或发生地。
          **INSTRUCTION (执行指令):**
          1.  允许由 SUR1 反向生成架空历史、异史、技术分歧或类型化世界。
          2.  必须说明分歧点、来源、运行方式和代价。
          3.  类型升维不是把现代奇观硬塞进历史场景。
          `;
    } else {
      defaultAnchorInstruction = `
          ## ⚓ DEFAULT WORLD COORDINATE (${worldLawDisplay.fullLabel})
          **CRITICAL (最高警戒):** 用户未明确指定具体年代或发生地。
          **INSTRUCTION (执行指令):**
          1.  允许梦、神话、象征、跨时代拼贴和类型奇观接管世界规则。
          2.  狂想不是乱炖；读者仍要能复述这个世界如何运行、故事机关为什么成立。
          3.  类型材料必须服务目标、阻断、升级、高潮选择和代价兑现。
          `;
    }
  }

  // ============================================================================
  // 📦 步骤 7：提取图文种子锚定协议 (文本语义锁定 / 图像视觉锁定 / 空白反推)
  // ============================================================================
  // VISION ANCHOR LOGIC (NEW - IMPORTED)
  let visionAnchorInstruction = "";
  if (visionInput || visionImage) {
    visionAnchorInstruction = getVisionAnchorProtocol(visionInput, Boolean(visionImage));
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

## 🚫 硬禁词与参数转译
**硬禁词:** [ ${bannedWords} ]
**参数复述限制:** 下列已选参数名不得作为解释性标签机械复述；必须转译为世界内称谓、制度、物件、动作、关系压力或场面后果：
[ ${softAvoidLabels || '无'} ]

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
*   **世界法则:** ${worldLawConstraint}
**任何违反此法则的生成都将被视为失败。禁止把世界法则误解为主动添加未授权奇观，也禁止让 SUR1 因时空冲突而完全失效。**

### **OPTION 1: [STRUCTURALIST] - 结构主义 (Genre Perfection)**
*   **Logic:** **经典类型执行。** 世界严格按照 [${activeWorldLogic}] 的规则运行。
*   **Constraint:** 严格遵守 [${worldLawConstraint}]。
*   **Vibe:** 专业、高预算、定义类型的。
*   **Task:** 写一个符合 **${sur1Drive}** 动力的故事，其中 M4 是具体的外部力量。

### **OPTION 2: [POST_STRUCTURALIST] - 后结构 (Deconstruction)**
*   **Logic:** **内在冲突。** 类型只是主角创伤的投射。
*   **Constraint:** 严格遵守 [${worldLawConstraint}]。
*   **Vibe:** 王家卫、朴赞郁、A24。私密、主观、情感化。
*   **Task:** 写一个人物研究故事，其中 M4 是内在或关系性的。解构类型套路。

### **OPTION 3: [THE_REAL] - 实在界 (Atmosphere/World)**
*   **Logic:** **环境冲突。** 设定本身就是主角。关注氛围、哲学和存在的诡异感。
*   **Constraint:** 严格遵守 [${worldLawConstraint}]。
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

const formatInstructionList = (items: string[] = []): string => {
  return items.filter(Boolean).map(item => `- ${item}`).join('\n');
};

const formatInstructionMap = (items: Record<string, string> = {}): string => {
  return Object.entries(items)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `- **${key}:** ${value}`)
    .join('\n');
};

const buildAuthorialRendererProtocol = (
  styleName: string,
  styleDNA: string,
  styleItem?: StyleItem,
  directorStyle?: { core?: string; def?: string }
): string => {
  const isDefault = !styleItem && !directorStyle;
  const styleTitle = styleItem?.styleTitle || styleItem?.description || directorStyle?.core || '清晰电影化文学';
  const coreRewriteLogic = styleItem?.coreRewriteLogic
    || (styleDNA
      ? `将 SOURCE 大纲通过「${styleTitle}」的作者性机制进行染色、扩写与调声；${styleDNA}`
      : '保持电影化小说的清晰叙述，以已选大纲、M 轴精神弧线与世界法则为最高约束。');
  const styleDNAInstruction = styleDNA ? `\n**风格 DNA（只能抽象使用）:** ${styleDNA}` : '';

  const sourceFidelityPreserve = [
    '保留 SOURCE 指向的主体欲望位置、核心缺失、行动驱力、关键代价与结局方向；如有 M7B，只保留末帧余震，不增设尾声。',
    '允许为文学完成度重组叙事顺序、改写场景承载方式、增补人物关系与对白，但这些增补必须服务原欲望结构，不得另起一套故事。'
  ];

  const basePreserve = styleItem?.preserve || [
    '保留 SOURCE 的核心冲突功能、因果方向与结局倾向；表达方式、叙事视角与场面组织可以重构。',
    '保留 M0-M7A/M7B 的精神弧线、M7A 意义裁决与 M7B 末帧余震；不得用风格重写覆盖它们，也不得把 M7B 扩写成后日谈。',
    '保留世界物理法则、精确时空坐标、SUR 表层设定与已选体量/结构约束。'
  ];
  const preserve = [...sourceFidelityPreserve, ...basePreserve];

  const transform = {
    '叙述时间': styleItem?.transform?.time || '允许按作者风格调整回忆、延宕、压缩或并置方式，但不得改变事件事实顺序的可理解性。',
    '叙事视角': styleItem?.transform?.narrator || '根据作者声音调整叙述者距离、可靠性与信息释放方式。',
    '人物心理': styleItem?.transform?.psychology || '把人物心理改写为可感知的动作、迟疑、物件关系、身体反应或环境压力。',
    '场景扩写': styleItem?.transform?.sceneExpansion || '把 SOURCE 的关键节点扩写成有温度、光影、材质和空间压迫的具体场景。',
    '冲突显影': styleItem?.transform?.conflictRendering || '保持原冲突功能，将它翻译成该作者擅长的压力形式。',
    '句法节奏': styleItem?.transform?.syntax || (styleDNA || '使用精致、清晰、电影感强的中文句法。'),
    '象征系统': styleItem?.transform?.symbolism || '允许建立重复物、声音、气味、颜色或空间动作作为隐性回环，但不得直说哲学术语。',
    '对白密度': styleItem?.transform?.dialogue || '对白服务于人物关系和压力变化，避免解释设定、总结意义。',
    '画面化语言': styleItem?.transform?.visualAssets || '场景、物件、光线与动作必须继承作者风格的空间组织、感官秩序与情绪机制。'
  };

  const mAxisLens = styleItem?.mAxisLens ? formatInstructionMap(styleItem.mAxisLens) : '';
  const avoid = styleItem?.avoid || [
    '不要生成新的三条故事方案。',
    '不要大幅改写 SOURCE 的核心事件、人物关系或结局方向。',
    '不要复制该作者既有作品的台词、桥段、标志性场景或专有意象。',
    '不要把作者风格理解为表层词汇堆砌；必须作用到时间、视角、心理显影与场景组织。'
  ];

  return `**作者风格:** ${isDefault ? '标准文学渲染' : styleName}
**作者性机制:** ${styleTitle}
**核心重写逻辑:** ${coreRewriteLogic}
${styleDNAInstruction}

**不可改写项（PRESERVE）:**
${formatInstructionList(preserve)}

**可改写项（TRANSFORM）:**
${formatInstructionMap(transform)}

${mAxisLens ? `**M 轴显影偏向（不得替换参数）:**\n以下内容只能改变已选 M 参数的呈现方式，不能替换 M 参数本身；若与用户选择的 M 参数冲突，必须保留用户 M 参数，忽略或降级本透镜。\n${mAxisLens}\n\n` : ''}**禁止项（AVOID）:**
${formatInstructionList(avoid)}`;
};

// ============================================================================
// 🏢 三楼 B区：叙事创作室 (buildNarrativeBiblePrompt) — V3 架构
// 核心功能：当你选中了 3 个草案中的 1 个后，这里接手工作。
// 最终产出：1 篇具备作者风格、文学完成度与电影感的完整小说正文。
// 架构：复用 promptV3 的导演笔记 + 物理法则 + SUR 冲突裁决体系
// ============================================================================
export const buildNarrativeBiblePrompt = (
  treatment: CreativeTreatment,
  styleConfig: StyleConfig,
  fieldState?: NarrativeFieldState,
  visionInput?: string,
  visionImage?: string | null,
  worldLaw?: WorldLawConfig,
  visionAnalysis: string = "",
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity
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
    const volumeMechanics = volumeDef.patch.mechanics
      .split('\n')
      .find(l => l.includes('叙事创作')) || '';
    if (volumeMechanics) bibleStrategy += `\n**Volume Mechanics:** ${volumeMechanics}`;
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
  const taskSentenceSection = taskSentence
    ? `\n**本次表层叙事任务句:** ${taskSentence}\n这句话是表层设定的浓缩提示，不是必须照抄的开场句；必须被转化为场景压力、人物关系与可读的文学行动。`
    : "";

  const SECTION_ROLE = `Role: 电影级叙事创作大师 & 文学级文本塑造者。

## 任务 (TASK)
你将收到一份已选中的**分歧点故事草稿**。它不是成稿，也不是必须逐句扩写的提纲；它是基于拉康精神分析欲望公式、导演笔记、世界物理法则与表层设定生成的**欲望结构材料**。

你的任务是：**把这份故事草稿进行作者风格化重写，创作成一篇完整、文学性强、电影感十足的微型小说/短篇小说正文。**

**重写规则：**
1. **表达可以重构，欲望结构不可篡改**——你可以重组叙事顺序、改变视角、改写开场与结尾的呈现方式、增加对白、增加人物、增加过场与细节；但不得推翻 M0-M7A/M7B 的精神弧线、M7A 的意义裁决、世界法则与表层设定；若有 M7B，只能把它压成末帧余震，不得扩写成新尾声或后日谈。
2. **SOURCE 是初始参考，不是机械扩写模板**——不要一板一眼拉长原草稿的结构、节奏和表达方式；必须把它当作未加工材料，重新组织成真正成立的文学作品。
3. **作者风格是叙事机制，不是表层符号**——必须充分调用所选作者的抽象创作机制，作用到句法、时间、视角、心理显影、对白、场景组织、情绪运动和结尾余味；严禁照抄名句、经典桥段、招牌物件、专有意象或烂俗标签。
4. **电影感小说，不是剧本格式**——正文必须像一篇可以被电影化的小说：空间、光线、声音、动作、停顿和物件都要可感；但严禁写成“内景/外景/镜头1/分镜表”等剧本格式。
5. **主体档案适配**——故事完成后会进入主体档案页面，作为“主体人物故事”。读者必须能从正文中感到：这个主体是谁、缺什么、被什么欲望驱动、被何种大他者阻断、付出了什么代价、M7A 如何完成结尾；如有 M7B，只在最后一笔留下无法缝合的余震。
6. 输出一篇 ${literatureType}，目标 ~${targetWordCount} 中文字符。
7. 输出格式：只输出标题、一句话定位与完整文学正文。不要生成世界观、人物资产、场景资产、道具资产、视觉提示词或画面资产包。
8. 语言：简体中文。角色名/地名/物品名若需要中英并列，格式为：**中文名 (English Name)**。
${taskSentenceSection}

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
  } else if (styleConfig.customStyleName) {
    styleName = styleConfig.customStyleName;
    styleDNA = `Custom author style of ${styleConfig.customStyleName}. Definition: ${styleConfig.customStyleDef || ''}. Core traits: ${styleConfig.customStyleCore || ''}`;
  }

  const styleRule = styleName && styleName !== 'Standard Literary' && styleName.length > 0
    ? `\nStyle: 调用 [${styleName}] 的作者性渲染机制，重构语言、时间组织、视角距离、场景密度、心理显影、对白和意象系统；严禁改写 M0-M7A/M7B、世界法则、表层设定或结局方向。`
    : '';

  const bannedWords = fieldState ? v3BuildBannedWords(fieldState) : "";
  const softAvoidLabels = fieldState ? v3BuildSoftAvoidLabels(fieldState) : "";

  const SECTION_LAWS = `${V3_LAWS}

**叙事创作形式律法**:
\`\`\`
[LAW_1] WORD_COUNT: 正文 ~${targetWordCount} 中文字符，硬性目标。
[LAW_2] STRUCTURE: REQUIRE [${bibleSkeletonArrow}] DENY [机械降神, 无冲突流水账, 虎头蛇尾]${structureRule}
[LAW_3] VOICE: 极精致的电影化小说 (Show, Don't Tell)。
    DENY [剧本格式(内景/外景/日/夜), 学术论文腔, 鸡汤散文, 网络小说腔]${styleRule}
[LAW_4] REWRITE_RIGHT: ALLOW [重组叙事顺序, 增补对白, 增补人物, 增补过场, 改变叙述视角, 重写开场与结尾呈现] BUT PRESERVE [M0-M7A/M7B, 世界法则, 表层设定, 主体缺失, 行动驱力, M7A 结局方向, M7B 末帧余震]。
\`\`\`

**硬禁词（仅正文）**: [ ${bannedWords} ]

**参数复述限制**:
以下已选参数名不得在正文中作为解释性标签机械复述；必须转译为世界内称谓、制度、物件、动作、关系压力或场面后果：
[ ${softAvoidLabels || '无'} ]`;

  // ════════════════════════════════════════════════════════════════════════════
  // ④ 导演笔记 (SECTION_DIRECTOR) — 复用 V3 的 buildMDirective
  // ════════════════════════════════════════════════════════════════════════════
  let SECTION_DIRECTOR = "";
  if (fieldState) {
    const mEntries: (string | null)[] = [
      buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0', undefined, focusState),
      buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1', undefined, focusState),
      buildMDirective(fieldState, '_m2',           'M2. 真实遭遇', 'engine_m2', undefined, focusState),
      buildMDirective(fieldState, ['_m3', '_c3'],  'M3. 欲望幻想', 'engine_m3', undefined, focusState),
      buildMDirective(fieldState, ['_m4', '_c4'],  'M4. 大他者阻断', 'engine_m4', undefined, focusState),
      buildMDirective(fieldState, '_m5',           'M5. 行动驱力', 'engine_m5', undefined, focusState),
      buildMDirective(fieldState, '_m6',           'M6. 终极代价', 'engine_m6', undefined, focusState),
      buildMDirective(fieldState, '_m7a',           'M7A. 象征裁决', 'engine_m7a', undefined, focusState),
      buildMDirective(fieldState, '_m7b',           'M7B. 实在余痕', 'engine_m7b', undefined, focusState, m7bIntensity),
    ];

    const directorBrief = mEntries.filter(Boolean).join('\n\n');

    SECTION_DIRECTOR = `## 导演笔记 (DIRECTOR'S BRIEF)

以下是这部电影的创作核心。每一条都是导演对你说的话——不是定义，是指令。
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明且适配世界物理法则与表层设定的全新场景承载它。严禁复现示例中的具体意象。

**M0 渗透法则**：M0 不是一个独立参数——它是整个故事的操作系统。M1-M7A/M7B 的每一条导演笔记都必须经过 M0 的逻辑改写。

${directorBrief}`;
  }

  // ════════════════════════════════════════════════════════════════════════════
  // ⑤ 世界法则 + SUR 表层设定 (SECTION_SKIN) — 复用 V3 体系
  // ════════════════════════════════════════════════════════════════════════════
  const gravityRule = buildWorldLawPrompt(worldLaw);

  const skinParts: string[] = [gravityRule];

  if (fieldState) {
    const exactYear = v3GetTagsBySuffix(fieldState, '_year_exact')[0] || null;
    const exactCountry = v3GetTagsBySuffix(fieldState, '_country_exact')[0] || null;
    if (exactYear || exactCountry) {
      skinParts.push(`**SUR3. 精确时空坐标约束**: 严格还原${exactYear ? formatYear(exactYear) : '?'}${exactCountry || '?'}的物理状貌、服饰与政治面貌。覆盖一切模糊标签。`);
    }
  }

  if (visionInput || visionImage) {
    skinParts.push(getVisionAnchorProtocol(visionInput, Boolean(visionImage)));
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

  const hasAuthorialStyle = Boolean(styleItem || directorStyle);
  const povInstruction = !hasAuthorialStyle && perspective ? `**叙事视点:** ${perspective.name}\n${perspective.prompt}` : "";
  const sensoryInstruction = !hasAuthorialStyle && sensory ? `**感官侧重:** ${sensory.name}\n${sensory.prompt}` : "";
  const authorialRendererProtocol = buildAuthorialRendererProtocol(styleName, styleDNA, styleItem, directorStyle);
  const rendererWeightRule = hasAuthorialStyle
    ? `1. SOURCE 已选故事草稿 > M0-M7A 精神弧线 > 世界法则/SUR > 作者风格；M7B 若已选，只作为末帧余震约束。
2. 作者风格只能改变叙述方式、句法节奏、时间组织、心理显影、场景密度、象征物件、对白压力与画面化语言。
3. 如果作者风格与世界法则冲突，以世界法则为准；如果作者风格与 M7A/M7B 冲突，以 M7A 与 M7B 末帧边界为准。
4. 已选择作者风格时，叙事视点与感官侧重不参与本次生成；作者机制自动统管视角距离、感官秩序与语言节奏。`
    : `1. SOURCE 已选故事草稿 > M0-M7A 精神弧线 > 世界法则/SUR > 标准文学渲染 > 叙事视点/感官侧重；M7B 若已选，只作为末帧余震约束。
2. 未选择作者风格时，叙事视点/感官侧重作为轻量渲染器生效，只能改变讲述角度、信息距离与描写优先级。
3. 如果叙事视点/感官侧重与世界法则或 M7A/M7B 冲突，以世界法则、M7A 与 M7B 末帧边界为准。`;

const SECTION_STYLE = `## 作者风格渲染协议 (AUTHORIAL RENDERER — 本次任务的调声中枢)

**核心指令：你不是复制某位作者的文本，而是调用其抽象后的作者性机制，对 SOURCE 草稿进行风格化文学重构。**
**反刻奇指令：禁止用作者的代表性名句、经典桥段、招牌物件或专有意象来冒充风格。**
例如：王家卫不是“凤梨罐头、0.01公分、无脚鸟”，而是时间错位、独白、欲望延迟、物件承载记忆与错过的情绪结构；古龙不是机械堆砌“酒、刀、冷风”，而是短句、留白、命运逼近、关系断裂与对白中的决斗感。

${authorialRendererProtocol}

**执行权重：**
${rendererWeightRule}

${povInstruction}
${sensoryInstruction}`;

  // ════════════════════════════════════════════════════════════════════════════
  // ⑦ 素材 + 输出格式 (SECTION_OUTPUT)
  // ════════════════════════════════════════════════════════════════════════════
  const m7aTags = fieldState ? v3GetTagsBySuffix(fieldState, '_m7a') : [];
  const m7bTags = fieldState ? v3GetTagsBySuffix(fieldState, '_m7b') : [];
  const activeM7BIntensity = normalizeM7BIntensity(m7bIntensity);
  const hasActiveM7B = m7bTags.length > 0 && activeM7BIntensity !== 'off';
  const sourceVisualAnchor = treatment.visualAnchor || treatment.visualKey || "";
  const visionAnalysisSection = visionAnalysis?.trim()
    ? `
## 视觉/文本解析源 (VISION ANALYSIS SOURCE)
以下内容来自前序图像/文本种子的解析结果。它不是新故事，只能作为世界质感、人物外观、场景物性与文学画面感的参考；不要把它整理成资产包：
${visionAnalysis.trim()}
`
    : "";

  const SECTION_OUTPUT = `## 素材 (SOURCE)
*   **Title:** ${treatment.title}
*   **Tagline:** ${treatment.tagline}
*   **Path Type:** ${treatment.type}
*   **Structure:** ${treatment.structure || "Unspecified"}
*   **Visual Anchor:** ${sourceVisualAnchor || "Unspecified"}
*   **Pitch:** ${treatment.pitch}
${m7bTags.length > 0 ? `*   **M7B 显影强度:** ${buildM7BIntensityBrief(activeM7BIntensity)}` : ''}
${visionAnalysisSection}

## 内部校验（不要输出）
在写作前，你必须完成以下内部校验，但最终答案中不要输出校验过程：
1. 情绪曲线：确认每个 M 参数的导演笔记面向，并让完整正文形成可感的情绪曲线。
2. M7A 回溯：从 M7A 缝合点反向审视，哪些 M 参数的含义被回溯性重写。
3. M7B 末帧：若已选 M7B 且显影未关闭，确认它如何压缩到最后一个动作、物件、声音、目光、姿势或身体反应上；不得为它新增尾声、后日谈、时间跳转或解释段。
4. 物理校验：检查每个 SUR 标签是否超出当前物理法则边界，超出的必须降维为可成立的现实/超现实机制。
5. 作者风格计划：说明该作者风格如何改写时间、视角、心理显影、对白、场景密度与画面化语言，但不复制名句、桥段、招牌物件或专有意象。
6. SOURCE 重构检查：确认你不是机械扩写 SOURCE，而是把 SOURCE 重构成真正完整的文学作品。
7. M0 渗透检查：确认 M1-M7A/M7B 的叙事实现都经过 M0 的逻辑改写。

## 文学完成度标准
- 不是大纲、不是剧情梗概、不是设定说明、不是理论解释。
- 必须有开场钩子、人物行动、场景推进、对白或心理运动、情绪曲线与结尾余味。
- 关键欲望转折必须落在可被看见、听见或感到的场面里，不能用抽象总结替代。
- 结尾余味应贴在主线最后一个场面内完成；不得追加“后来/几天后/多年后/每年”的结尾后结尾。
- 正文不得出现 M0/M7B/SUR/欲望公式/拉康 等理论标签；理论只能转译为人物行动、物件关系、场景压力与身体反应。

## 输出 (STRICT JSON)
Output ONLY valid JSON. synopsis = 完整文学正文 (NOT summary). 不要输出 context、assets、moodboard、视觉提示词或任何画面资产。
${m7aTags.length > 0 ? `M7A [${m7aTags.join('/')}] 回溯性决定整个故事的意义。严禁篡改。` : ''}
${hasActiveM7B ? `M7B [${m7bTags.join('/')}] 仅按当前显影强度作为末帧余震保留；严禁另起尾声、后日谈、新场景或时间跳转。` : ''}

{
  "treatmentId": "${treatment.id}",
  "driverType": "NARRATIVE",
  "styleName": "${styleName}",
  "narrative": {
    "title": "Story Title (CN + EN)",
    "logline": "A one-sentence hook (CN).",
    "synopsis": "complete novel text (${targetWordCount} chars)"
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
