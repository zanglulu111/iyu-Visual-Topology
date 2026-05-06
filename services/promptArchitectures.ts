// ============================================================================
// 🏗️ PROMPT ARCHITECTURES V1 & V2
// 两套全新的指令架构，用于 A/B 测试对比效果
// V1: 六层注意力金字塔 (Six-Layer Attention Pyramid)
// V2: 五区块融合架构 (Five-Block Fusion Architecture)
// ============================================================================

import { NarrativeFieldState, WorldLawConfig } from '../types';
import { findItemDetails, findItemFull } from './dataRegistry';
import { NARRATIVE_ENGINE_BLOCKS } from '../data/engine_core/narrative_engine';
import { ALL_SKIN_BLOCKS } from '../data/narrative/skin_libraries';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';
import { runMistEngine } from '../engine/mist_calculator';

// ============================================================================
// 共享工具函数 (Shared Utilities)
// ============================================================================

/** 从 fieldState 中按后缀提取标签 */
const getTagsBySuffix = (fieldState: NarrativeFieldState, suffixes: string | string[]): string[] => {
  const sfxArray = Array.isArray(suffixes) ? suffixes : [suffixes];
  return Object.keys(fieldState)
    .filter(k => sfxArray.some(sfx => k.endsWith(sfx)))
    .flatMap(k => fieldState[k]);
};

/** 提取禁用词表 */
const getBannedWords = (fieldState: NarrativeFieldState): string => {
  const tags = Object.values(fieldState).flat();
  if (tags.length === 0) return "";
  const words = tags.map(t => t.split('(')[0].trim()).filter(w => w.length > 1);
  const fullTags = tags.filter(t => t.length > 1);
  const philosophicalTerms = [
    "大他者", "Big Other", "Object a", "对象a", "Symbolic Order", "符号界",
    "Real", "实在界", "Imaginary", "想象界", "Alienation", "异化",
    "Castration", "阉割", "Sinthome", "圣状", "Phallus", "菲勒斯"
  ];
  return [...new Set([...words, ...fullTags, ...philosophicalTerms])].join(', ');
};

/** 构建 DNA 上下文（标签定义清单）*/
const buildDNAContext = (fieldState: NarrativeFieldState): string => {
  return Object.entries(fieldState).map(([key, tags]) => {
    if (!tags || tags.length === 0) return null;
    let name = key;
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

/** 获取叙事拓扑权重 */
const getTopologyInstruction = (fieldState: NarrativeFieldState): string => {
  const genreTags = fieldState['skin_genre'] || [];
  if (genreTags.length === 0) return '';
  for (const tag of genreTags) {
    const item = findItemFull(tag);
    if (item && item.topology) {
      return `### 📐 TOPOLOGY: [${item.name}]\n${item.topology}`;
    }
  }
  const genreDefs = genreTags.map(t => findItemDetails(t)).join('\n');
  return `### 📐 TOPOLOGY: [DYNAMIC]\n* **Active Genre(s):** ${genreTags.join(', ')}\n* **CORE LOGIC:** ${genreDefs}\n* **DIRECTIVE:** 根据以上核心逻辑决定 M1-M7A/M7B 的结构权重分配。`;
};

/** 获取 M0 标签的精准信息 */
const getM0Precision = (fieldState: NarrativeFieldState): {
  tag: string; def: string; core: string; logic: string;
} | null => {
  const m0Tags = getTagsBySuffix(fieldState, ['_m0', '_c0']);
  if (m0Tags.length === 0) return null;
  const tag = m0Tags[0];
  const item = findItemFull(tag) as any;
  const details = findItemDetails(tag);
  return {
    tag,
    def: item?.def || details || '未知',
    core: item?.core || '',
    logic: item?.logic || '遵循标准精神系统逻辑'
  };
};

/** 获取特定 M 参数的信息 */
const getMParamInfo = (fieldState: NarrativeFieldState, suffix: string): {
  tags: string[]; def: string; core: string;
} | null => {
  const tags = getTagsBySuffix(fieldState, [suffix]);
  if (tags.length === 0) return null;
  const defs: string[] = [];
  const cores: string[] = [];
  for (const tag of tags) {
    const item = findItemFull(tag) as any;
    if (item?.def) defs.push(item.def);
    if (item?.core) cores.push(item.core);
  }
  return { tags, def: defs.join(' / ') || '未选择', core: cores.join(' / ') || '' };
};

/** 构建世界法则文本 */
const buildWorldLawText = (gravity: number): string => {
  const worldLawMap: Record<number, string> = {
    1: `🚨 **LV.1 写实 / STRICT REALISM**\n→ 绝对物理锁死。重力、熵增、生物学极限不可逾越。严禁奇迹/超自然。死亡是物理性的绝对终结。`,
    2: `⚠️ **LV.2 合理 / RATIONALIZED**\n→ 逻辑补完。允许奇观但必须赋予科学/机械的合理解释。大他者表现为严密逻辑网格。可利用漏洞，不可无视规则。`,
    3: `📋 **LV.3 缝合 / MAGICAL REALISM**\n→ 以残酷现实为底，允许局部缝合超现实的符号与症状。正常与荒诞通过视差共生。超现实部分伴随巨大代价。`,
    4: `⚠️ **LV.4 奇观 / HIGH CONCEPT**\n→ 超自然协议公开运行。魔法/超能力是日常。但内部逻辑必须一致——规则可荒谬，执行必须是铁律。`,
    5: `📋 **LV.5 狂想 / RHAPSODY**\n→ 绝对无重力拼贴。取消所有恒定约束。不同位面/时代/逻辑自由碰撞。纯粹欲望试验场。`
  };
  return worldLawMap[gravity] || worldLawMap[3];
};

/** 构建体量指令 */
const buildVolumeInstruction = (fieldState: NarrativeFieldState): string => {
  const volumeTags = getTagsBySuffix(fieldState, '_volume');
  const structureTags = getTagsBySuffix(fieldState, '_structure');
  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTagRaw = structureTags.length > 0 ? structureTags[0] : "未选择";

  if (!volumeDef) return `**体量**: 标准短篇。**结构**: ${structureTagRaw}`;

  return `**体量**: ${volumeDef.name}\n${volumeDef.patch?.mechanics || volumeDef.def}\n${volumeDef.patch?.aesthetic ? `**美学约束:** ${volumeDef.patch.aesthetic}` : ''}\n**结构**: ${structureTagRaw}`;
};

/** 构建时空锚点 */
const buildSpacetimeAnchor = (fieldState: NarrativeFieldState, worldLaw: WorldLawConfig): string => {
  const sur2Tags = getTagsBySuffix(fieldState, '_era');
  const locTags = getTagsBySuffix(fieldState, '_location');
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  let result = '';

  if (exactYear || exactCountry) {
    result += `\n**📍 精确时空坐标 (HIGHEST PRIORITY)**\n→ Year: ${exactYear || '未明确'} | Location: ${exactCountry || '未明确'}\n→ 严格还原该时空的物理状貌、服饰纤维与政治面貌。此坐标覆盖一切模糊标签。\n`;
  }

  if (sur2Tags.length === 0 && locTags.length === 0 && !exactYear && !exactCountry) {
    const gravity = worldLaw.gravity || 3;
    if (gravity <= 2) {
      result += `\n**⚓ 锚点推演 (STRICT REALISM)**\n→ 未指定时空。基于 M-Engine 标签反向推演最合逻辑的时代坐标。\n→ 默认国际化场域。严禁默认中国小镇。\n`;
    } else {
      result += `\n**⚓ 锚点推演 (CREATIVE FREEDOM)**\n→ 未指定时空。放手创造最大化标签张力的异世界。\n`;
    }
  }

  return result;
};

/** 构建 JSON 输出模板 */
const buildJSONTemplate = (activeWorldLogic: string): string => {
  return `
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
      "resolution_余痕收束": "最后可见的收场、回溯性意义裁决与实在余味（结合 M7A/M7B）..."
    },
    "structure": "GENRE_DRIVEN"
  },
  {
    "id": "2",
    "type": "POST_STRUCTURALIST",
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": { ... },
    "structure": "CHARACTER_DRIVEN"
  },
  {
    "id": "3",
    "type": "THE_REAL",
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": { ... },
    "structure": "ATMOSPHERE_DRIVEN"
  }
]
\`\`\``;
};


// ============================================================================
// 🔺 V1: 六层注意力金字塔 (Six-Layer Attention Pyramid)
// 设计原理：利用 LLM 的首因/近因效应，动态内容占据首因区，
//          静态宪法退居中后段，近因区用"致命复述"形成双重锁死。
// ============================================================================

export const buildPromptV1 = (
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig
): { text: string, images: string[] } => {

  // === 从 mist_calculator 获取动态计算结果 ===
  const engineOutput = runMistEngine(fieldState, worldLaw);
  const { tension, redlines, directives } = engineOutput;

  const criticals = directives.filter(d => d.priority === 'CRITICAL');
  const highs = directives.filter(d => d.priority === 'HIGH');

  // === 提取基础素材 ===
  const m0 = getM0Precision(fieldState);
  const sur1Tags = getTagsBySuffix(fieldState, '_genre');
  const sur2Tags = getTagsBySuffix(fieldState, '_era');
  const activeWorldLogic = `${sur1Tags.join('/') || 'Cinema/Drama'} (场域: ${sur2Tags.join('/') || 'Unknown'})`;
  const gravity = worldLaw.gravity || 3;
  const m7aInfo = getMParamInfo(fieldState, '_m7a');
  const m7bInfo = getMParamInfo(fieldState, '_m7b');
  const bannedWords = getBannedWords(fieldState);

  // ============================================================================
  // LAYER 0: 身份宣言 (~50字)
  // ============================================================================
  const LAYER_0 = `Role: 电影级叙事创作大师 & 文学级文本塑造者（戛纳/奥斯卡级叙事判断力）。
Task: 基于以下迷雾学派引擎参数，生成 3 个电影级故事概念。`;

  // ============================================================================
  // LAYER 1: 🚨 致命锁 (CRITICAL LOCKS) — 首因区黄金位置
  // ============================================================================
  let LAYER_1 = `## 🚨 CRITICAL LOCKS — 违反任何一条即判定生成失败\n\n`;

  // 从 calculator 的 CRITICAL directives 注入
  criticals.forEach((d, i) => {
    LAYER_1 += `[LOCK_${i + 1}: ${d.target}]\n→ ${d.commandCn}\n\n`;
  });

  // 额外注入 M7A/M7B 宪法（如果 calculator 没有包含）
  if (m7aInfo && !criticals.some(d => d.target.includes('M7A'))) {
    LAYER_1 += `[LOCK_M7A: VERDICT] 象征裁决 = [${m7aInfo.tags.join('/')}]\n→ M7A 回溯性决定整个故事的意义归属，严禁篡改，且不得由角色口头总结。\n→ ${m7aInfo.def}\n\n`;
  }
  if (m7bInfo && !criticals.some(d => d.target.includes('M7B'))) {
    LAYER_1 += `[LOCK_M7B: RESIDUE] 实在余痕 = [${m7bInfo.tags.join('/')}]\n→ M7B 是身体和实在界余味的绝对宪法。用户选了什么，你就写什么。严禁篡改。\n→ ${m7bInfo.def}\n\n`;
  }

  // 红线警告
  const errors = redlines.filter(r => r.severity === 'ERROR');
  if (errors.length > 0) {
    LAYER_1 += `### 🔴 红线违规\n${errors.map(r => `- ${r.messageCn || r.message}`).join('\n')}\n\n`;
  }

  // 音色平衡器 (Tonal Calibrator)
  LAYER_1 += `### 🎵 音色校准 (TONAL CALIBRATION)\n`;
  LAYER_1 += `故事的默认色调由 SUR1（叙事动力）决定，而非由 M 参数的暗面决定。\n`;
  LAYER_1 += `- 如果 SUR1 = 爱情 → 基调是浪漫的，痛苦藏在甜蜜的缝隙里。\n`;
  LAYER_1 += `- 如果 SUR1 = 喜剧 → 基调是好笑的，虚无藏在过度的笑声里。\n`;
  LAYER_1 += `- 如果 SUR1 = 黑色电影 → 阴暗中必须有风格化的冷幽默与宿命感。\n`;
  LAYER_1 += `- 如果 SUR1 = 惊悚 → 恐惧来自未知的悬置，不来自内脏的展示。\n`;
  LAYER_1 += `除非 M-Tags 全部为极端暗色标签，否则严禁全篇无间断的残暴。\n`;
  LAYER_1 += `暴力的正确用法：如同交响乐中的定音鼓——稀少，精准，一击致命。通篇残肢与窒息只会让暴力彻底失去重量。\n\n`;

  // ============================================================================
  // LAYER 2: ⚠️ 执行指令 (FORCE DIRECTIVES)
  // ============================================================================
  let LAYER_2 = `## ⚠️ FORCE DIRECTIVES — 本次执行约束\n\n`;

  // 2A. 拓扑权重
  const topology = getTopologyInstruction(fieldState);
  if (topology) LAYER_2 += `${topology}\n\n`;

  // 2B. 转译指令
  const m1Info = getMParamInfo(fieldState, '_m1');
  const m4Info = getMParamInfo(fieldState, '_m4');
  const m3Info = getMParamInfo(fieldState, '_m3');

  LAYER_2 += `### 动态转译指令\n`;
  LAYER_2 += `1. **M1 主体转译:** [${m1Info?.tags.join('/') || 'Unknown'}] → 在 [${sur2Tags.join('/') || 'Unknown'}] 场域中，此人具体是谁？\n`;
  LAYER_2 += `2. **M4 阻断转译:** [${m4Info?.tags.join('/') || 'Unknown'}] → 转化为具体的反派/机构/自然力量。必须精准攻击 M1 弱点。\n`;
  LAYER_2 += `3. **M3 欲望转译:** [${m3Info?.tags.join('/') || 'Unknown'}] → 转化为具体的麦高芬。主角伸手可及却永远无法真正拥有。\n\n`;

  // 2C. HIGH 级指令
  if (highs.length > 0) {
    LAYER_2 += `### 视差干预\n`;
    highs.forEach(d => {
      LAYER_2 += `[${d.target}] → ${d.commandCn}\n`;
    });
    LAYER_2 += '\n';
  }

  // 2D. 时空锚点
  const spacetimeAnchor = buildSpacetimeAnchor(fieldState, worldLaw);
  if (spacetimeAnchor) LAYER_2 += spacetimeAnchor;

  // 2E. 视觉锚点
  if (visionInput || visionImage) LAYER_2 += getVisionAnchorProtocol(visionInput, Boolean(visionImage)) + '\n';

  // ============================================================================
  // LAYER 3: 📋 物料清单 (MATERIAL MANIFEST) — 中段区
  // ============================================================================
  const dnaContext = buildDNAContext(fieldState);
  const LAYER_3 = `## 📋 MATERIAL MANIFEST — 本次完整标签清单\n\n${dnaContext}\n`;

  // ============================================================================
  // LAYER 4: 📖 永恒宪法 (STATIC BIBLE) — 极度压缩版
  // ============================================================================
  const LAYER_4 = `## 📖 STATIC BIBLE — 永恒宪法

### A. 核心公式
Story = M0 {[(M1↔M2↔M3)/M4]×M5} =>Act M6 -> (M7A◇M7B) ↺ M1'
- M1 因为不完整而渴望，M2 是打破日常的不可逆瞬间（不一定是暴力），M3 是驱动力。
- M4 是横亘在 M1 与 M3 之间的障碍（不一定是邪恶的）。M5 是行动的姿态（不一定是暴力）。
- M6 是等价交换物（不是越恐怖越好，而是越精确越好）。M7A 是回溯性意义裁决，M7B 是实在余味，不是灰烬。

### B. 命名协议
- 严禁通用名（Tom/Alice/小明/李华）。严禁单字名。
- 默认国际化 → 无中国风标签则严禁中文名。电影级真实。
- 严禁网文中二词（钨神/影刃）。严禁 AI 惯用套路（决明/步虚/渡鸦/老鬼）。
- 必须基于 SUR3+SUR2 当场构思独特真名。

### C. 美学铁律
- 沾染：在无菌中找有菌裂痕，或在有菌废墟中找无菌秩序。
- 光影：每段描写必含光影。拒绝平光。触觉：强调材质对比与温度。
- 隐喻实体化：痛苦必须转为物理环境变异。陌生化：描述质感/光泽/异样感。

### D. 绝对禁令
- 严禁正文出现 M0-M7A/M7B 标签原词。消融在感官描写中。
- 严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工腔。
- 古代背景下现代词必须概念降维（算法→天道/宿命）。
- 情节必须经历否定→否定之否定→扬弃。暴力须有仪式感/雕塑感。

### E. 面具协议
- 故事必须首先作为合格类型片运作。99%完美类型片，1%视差裂痕。
- 模仿风格时模仿底层逻辑，严禁堆砌表层符号（王家卫≠凤梨罐头）。
`;

  // ============================================================================
  // LAYER 5: 📤 输出协议 (OUTPUT PROTOCOL) — 近因区
  // ============================================================================
  const volumeInst = buildVolumeInstruction(fieldState);

  const LAYER_5 = `## 📤 OUTPUT PROTOCOL

### 体量与结构
${volumeInst}

### 形式律法
[LAW_1] 每个 Pitch ≈ 500-700 字。三个方案风格互不雷同。
[LAW_2] REQUIRE: 激励事件→上升动作→高潮→余痕收束。DENY: 机械降神、无冲突流水账。
[LAW_3] 极精致电影化小说。DENY: 剧本格式、学术论文腔、网络小说腔。

### 🚫 动态禁用词
[ ${bannedWords} ]

### 三重镜头
OPTION 1 [STRUCTURALIST]: 经典类型执行。M4 是具体外部力量。适配 [${activeWorldLogic}]。
OPTION 2 [POST_STRUCTURALIST]: 人物研究。M4 是内在/关系性的。解构类型。
OPTION 3 [THE_REAL]: 氛围主导。环境压倒主体。

### 思考过程（必须先输出）
\`\`\`xml
<thought_process>
1. 时空校验：分析时空约束
2. 矛盾消解：不属于该时代的标签如何降维
3. 框架确立：三个 Option 各自的核心矛盾
</thought_process>
\`\`\`

### JSON 格式
${buildJSONTemplate(activeWorldLogic)}

### 🚨 最终复述 (RECENCY ANCHOR)
再次强调——违反即判定失败：
1. ${m0 ? `[M0] ${m0.tag} 的逻辑不可被表层类型片冲淡。` : 'M0 未选择。'}
2. [NARRATIVE_ARC] 走向判定 = ${tension.narrativeArc} — 这是结局的物理法则。
3. ${m7aInfo ? `[M7A] = ${m7aInfo.tags.join('/')} — 意义裁决，严禁篡改。` : 'M7A 未选择。'}
4. ${m7bInfo ? `[M7B] = ${m7bInfo.tags.join('/')} — 实在余痕，严禁篡改。` : 'M7B 未选择。'}
`;

  // ============================================================================
  // 最终拼接：L0 + L1 + L2 + L3 + L4 + L5
  // ============================================================================
  const finalText = [LAYER_0, LAYER_1, LAYER_2, LAYER_3, LAYER_4, LAYER_5].join('\n\n');
  return { text: finalText, images: visionImage ? [visionImage] : [] };
};


// ============================================================================
// 🧊 V2: 五区块融合架构 (Five-Block Fusion Architecture)
// 设计原理：回归用户的 5 个本质需求——核心公式、表层设定、世界法则、
//          叙事结构、创作铁律——用最少的字传达最精准的指令。
// ============================================================================

export const buildPromptV2 = (
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig
): { text: string, images: string[] } => {

  // === 从 mist_calculator 获取动态计算结果 ===
  const engineOutput = runMistEngine(fieldState, worldLaw);
  const { tension, redlines } = engineOutput;
  const errors = redlines.filter(r => r.severity === 'ERROR');
  const warnings = redlines.filter(r => r.severity === 'WARNING');

  // === 提取基础素材 ===
  const m0 = getM0Precision(fieldState);
  const m1Info = getMParamInfo(fieldState, '_m1');
  const m2Info = getMParamInfo(fieldState, '_m2');
  const m3Info = getMParamInfo(fieldState, '_m3');
  const m4Info = getMParamInfo(fieldState, '_m4');
  const m5Info = getMParamInfo(fieldState, '_m5');
  const m6Info = getMParamInfo(fieldState, '_m6');
  const m7aInfo = getMParamInfo(fieldState, '_m7a');
  const m7bInfo = getMParamInfo(fieldState, '_m7b');
  // m4xInfo/m5xInfo removed in v3.0

  const sur1Tags = getTagsBySuffix(fieldState, '_genre');
  const sur2Tags = getTagsBySuffix(fieldState, '_era');
  const activeWorldLogic = `${sur1Tags.join('/') || 'Cinema/Drama'} (场域: ${sur2Tags.join('/') || 'Unknown'})`;
  const gravity = worldLaw.gravity || 3;
  const bannedWords = getBannedWords(fieldState);

  // ============================================================================
  // BLOCK 0: 身份
  // ============================================================================
  const BLOCK_0 = `Role: 电影级叙事创作大师 & 文学级文本塑造者（戛纳/奥斯卡级叙事判断力）。
Task: 基于以下迷雾学派引擎参数，生成 3 个电影级故事概念。`;

  // ============================================================================
  // BLOCK 1: 核心公式 (M0-M7A/M7B)
  // ============================================================================

  // 1A. 公式位置关系说明 (静态)
  const BLOCK_1A = `## ⚙️ 核心公式：欲望的代数

**Story = M0 {[(M1↔M2↔M3)/M4]×M5} ⇒Act M6 → (M7A◇M7B) ↺ M1'**

你不是在写作文，你是在**解这个方程**。每个参数是一个拓扑位置，不是词汇：

**M0. 精神拓扑（定义域/操作系统）**
→ 不是具体设定，是故事的因果律。它决定公式内一切运算的法则。

**M1. 缺失主体（分子/被除数）**
→ 主体因为不完整而渴望。这个不完整不是伤口——它是窗口。正因为有缺口，风才能吹进来。
→ 它是故事的起点：一个人想要什么，因为他缺少什么。SUR9 只提供职业身份外壳，不能替 M1 解释缺口。

**M2. 真实遭遇（分子/撞击）**
→ 打破日常的那个不可逆瞬间。它可以是一声枪响，也可以是一个吻；可以是一封来自死者的信，也可以是窗外突然下起的雪。
→ 关键不是烈度——而是经历之后，主体再也无法假装一切如常。

**M3. 欲望幻想（分子/驱动力）**
→ 主体认为能填补缺失的那个东西——一个人、一件事、一种状态。它是生命的燃料。
→ 它之所以强大，恰恰因为它永远差一步就能触及。M3 不一定是虚假的——它可以是真实的爱，只是结构上不可能被完整拥有。

**M4. 大他者阻断（分母/除数）**
→ 横亘在 M1 与 M3 之间的障碍。它可以是一堵墙、一条规则、一个人、一种社会期待，甚至是主体自己的道德感。
→ M4 不一定是邪恶的——有时它是合理的、甚至是善意的。这恰恰让冲突更有张力，因为主体无法简单地把它当敌人消灭。

**M5. 行动驱力（乘数）**
→ 主体对抗 M4 的具体方式。它可以是冲撞，也可以是迂回；可以是暴力，也可以是沉默的坚持；可以是逃跑，也可以是创造。
→ 驱力的核心不是成功——而是不肯停下来。

**M6. 终极代价（结项报告/配平）**
→ 为了让公式闭合，主体必须放弃的等价交换物。它可以是一段关系、一个身份、一种曾经让自己安心的幻觉，甚至是旧的自己。
→ 代价的重量由公式的张力决定——不是越恐怖越好，而是越精确越好。一根羽毛的丧失，有时比断臂更致命。

**M7A. 象征裁决（回溯性缝合点）**
→ 公式闭合后，对此前所有情节进行回溯性定性的意义裁决。它不是角色顿悟，也不是旁白总结，而是由最后的情节排列让之前的一切突然改写含义。
→ **M7A 严禁被角色口头说出。它只能通过行动、沉默、结构反转或画面关系显影。**

**M7B. 实在余痕（余数/沉淀）**
→ 公式运算后留下的余数。它不是"答案"，是身体和实在界上的"余味"——可以是嘴角的苦涩，也可以是一个永远无法回答的问题。
→ 它是观众走出影院后，在雨中站了一会儿才想起要撑伞的那个瞬间。
→ **M7B 是实在余痕的绝对宪法。用户选了什么，你就写什么。严禁篡改。**`;

  // 1B. 本次具体值 + 走向判定 (动态)
  let BLOCK_1B = `## 🧬 本次 DNA 序列\n\n`;

  // M0 精准注入
  if (m0) {
    BLOCK_1B += `* **M0. 精神拓扑**: [${m0.tag}]\n  Def: ${m0.def}\n  Core: ${m0.core}\n  🚨 **M0 逻辑约束**: ${m0.logic}\n\n`;
  } else {
    BLOCK_1B += `* **M0. 精神拓扑**: 未选择（默认中性拓扑）\n\n`;
  }

  // M1-M7A/M7B 各参数
  const mParams = [
    { label: 'M1. 缺失主体', info: m1Info },
    { label: 'M2. 真实遭遇', info: m2Info },
    { label: 'M3. 欲望幻想', info: m3Info },
    { label: 'M4. 大他者阻断', info: m4Info },
    { label: 'M5. 行动驱力', info: m5Info },
    { label: 'M6. 终极代价', info: m6Info },
    { label: 'M7A. 象征裁决', info: m7aInfo },
    { label: 'M7B. 实在余痕', info: m7bInfo },
  ];

  for (const mp of mParams) {
    if (mp.info) {
      const isM7B = mp.label.includes('M7');
      BLOCK_1B += `* **${mp.label}**: [${mp.info.tags.join(' + ')}]${isM7B ? '  🚨 绝对宪法' : ''}\n  Def: ${mp.info.def}\n${mp.info.core ? `  Core: ${mp.info.core}\n` : ''}\n`;
    }
  }

  // 张力走向判定
  BLOCK_1B += `### 张力走向判定\n🚨 **NARRATIVE_ARC = [${tension.narrativeArc}]**\n`;
  const arcDescriptions: Record<string, string> = {
    'BREAKTHROUGH': '→ 主体必须通过献祭突破障碍。突破必须伴随不可逆代价。禁止：友情/运气。',
    'DEADLOCK': '→ 保持最大戏剧张力。终幕前不得解决冲突。双方承受对等损耗。',
    'TRAGEDY': '→ 主体必须在第二幕物理性失败。任何局部胜利是皮洛斯式的。绝对禁止：机械降神。',
    'ANNIHILATION': '→ 主体被彻底摧毁。禁止救赎弧线。体制完胜。文本变为冰冷、机械、非人的。'
  };
  BLOCK_1B += `${arcDescriptions[tension.narrativeArc] || ''}\n\n`;

  // M4X/M5X parallax section removed in v3.0

  // 红线
  if (errors.length > 0) {
    BLOCK_1B += `### 🔴 红线冲突\n${errors.map(r => `- ${r.messageCn || r.message}`).join('\n')}\n\n`;
  }
  if (warnings.length > 0) {
    BLOCK_1B += `### 🟡 警告\n${warnings.map(r => `- ${r.messageCn || r.message}`).join('\n')}\n\n`;
  }

  // 音色平衡器 (Tonal Calibrator)
  BLOCK_1B += `### 🎵 音色校准 (TONAL CALIBRATION)\n`;
  BLOCK_1B += `故事的默认色调由 SUR1（叙事动力）决定，而非由 M 参数的暗面决定。\n`;
  BLOCK_1B += `- 如果 SUR1 = 爱情 → 基调是浪漫的，痛苦藏在甜蜜的缝隙里。\n`;
  BLOCK_1B += `- 如果 SUR1 = 喜剧 → 基调是好笑的，虚无藏在过度的笑声里。\n`;
  BLOCK_1B += `- 如果 SUR1 = 黑色电影 → 阴暗中必须有风格化的冷幽默与宿命感。\n`;
  BLOCK_1B += `- 如果 SUR1 = 惊悚 → 恐惧来自未知的悬置，不来自内脏的展示。\n`;
  BLOCK_1B += `除非 M-Tags 全部为极端暗色标签，否则严禁全篇无间断的残暴。\n`;
  BLOCK_1B += `暴力的正确用法：如同交响乐中的定音鼓——稀少，精准，一击致命。通篇残肢与窒息只会让暴力彻底失去重量。\n\n`;

  // ============================================================================
  // BLOCK 2: 表层设定 (SUR1-SUR10 + SUR-END)
  // ============================================================================
  let BLOCK_2 = `## 🎨 表层设定 — 灵魂穿的皮

以下参数是公式的语境容器。你的任务：将 BLOCK 1 中 M 的"含义"放入这些"容器"中，生成具体的人物、职业与事件。
严禁表层设定改变底层 M 的精神结构性质。\n\n`;

  // 遍历 SUR 参数，只列有值的
  const surParams = [
    { label: 'SUR1. 叙事动力', suffix: '_genre' },
    { label: 'SUR2. 背景场域', suffix: '_era' },
    { label: 'SUR3. 时空坐标', suffix: '_spacetime' },
    { label: 'SUR4. 社会形态', suffix: '_society' },
    { label: 'SUR5. 对象预设', suffix: '_everything' },
    { label: 'SUR6. 空间容器', suffix: '_location' },
    { label: 'SUR7. 选角呈现', suffix: '_gender' },
    { label: 'SUR8. 年龄阶段', suffix: '_age' },
    { label: 'SUR9. 职业身份', suffix: '_profession' },
    { label: 'SUR10. 信念预设', suffix: '_ideology' },
    { label: 'SUR-END. 显性收场', suffix: '_ending' },
  ];

  for (const sur of surParams) {
    const tags = getTagsBySuffix(fieldState, sur.suffix);
    if (tags.length > 0) {
      const defs = tags.map(t => {
        const item = findItemFull(t) as any;
        return item?.def ? `(${item.def})` : '';
      }).filter(Boolean).join(' ');
      BLOCK_2 += `* **${sur.label}**: ${tags.join(' + ')} ${defs}\n`;
    }
  }

  // 转译任务
  BLOCK_2 += `\n### 转译任务
1. **M1 → 具象化**: [${m1Info?.tags.join('/') || '?'}] 在 [${sur2Tags.join('/') || '?'}] 场域中，具体是谁？
2. **M4 → 具象化**: [${m4Info?.tags.join('/') || '?'}] 在这个世界中，具体是什么机构/力量？
3. **M3 → 具象化**: [${m3Info?.tags.join('/') || '?'}] 在这个世界中，以什么物理形态呈现？\n`;

  // 时空锚点
  const spacetimeAnchor = buildSpacetimeAnchor(fieldState, worldLaw);
  if (spacetimeAnchor) BLOCK_2 += spacetimeAnchor;

  // 拓扑权重
  const topology = getTopologyInstruction(fieldState);
  if (topology) BLOCK_2 += `\n${topology}\n`;

  // 视觉锚点
  if (visionInput || visionImage) BLOCK_2 += '\n' + getVisionAnchorProtocol(visionInput, Boolean(visionImage)) + '\n';

  // ============================================================================
  // BLOCK 3: 世界法则
  // ============================================================================
  const BLOCK_3 = `## ⚖️ 世界法则

${buildWorldLawText(gravity)}

🚨 **任何违反此法则的生成判定为失败。**
如果物理法则为 STRICT REALISM，严禁出现魔法/鬼魂/超光速。`;

  // ============================================================================
  // BLOCK 4: 叙事结构 & 输出
  // ============================================================================
  const volumeInst = buildVolumeInstruction(fieldState);

  const BLOCK_4 = `## 🏗️ 叙事结构与输出

### 体量与结构
${volumeInst}

### 形式约束
- 每个 Pitch ≈ 500-700 字。三个方案风格互不雷同。
- 必须包含：激励事件 → 上升动作 → 高潮 → 余痕收束。
- 严禁：机械降神、无冲突流水账、剧本格式、学术论文腔。
- 语言：极具画面感的简体中文。

### 三重镜头
OPTION 1 [STRUCTURALIST]: 经典类型执行。M4 是具体外部力量。
OPTION 2 [POST_STRUCTURALIST]: 人物研究。M4 是内在/关系性的。解构类型。
OPTION 3 [THE_REAL]: 氛围主导。环境压倒主体。

### 思考过程（必须先输出）
\`\`\`xml
<thought_process>
1. 时空校验：分析时空约束
2. 矛盾消解：不属于该时代的标签如何降维
3. 框架确立：三个 Option 各自的核心矛盾
</thought_process>
\`\`\`

### JSON 格式
${buildJSONTemplate(activeWorldLogic)}

### 🚨 最终复述
1. ${m0 ? `M0 [${m0.tag}] 的逻辑不可被冲淡。` : ''}
2. NARRATIVE_ARC = ${tension.narrativeArc}。
3. ${m7aInfo ? `M7A = [${m7aInfo.tags.join('/')}] 是意义裁决，严禁篡改。` : ''}
4. ${m7bInfo ? `M7B = [${m7bInfo.tags.join('/')}] 是实在余痕，严禁篡改。` : ''}`;

  // ============================================================================
  // BLOCK 5: 创作铁律 (极度压缩)
  // ============================================================================
  const BLOCK_5 = `## 🔒 创作铁律

### 命名
- 严禁通用名（Tom/Alice/小明/李华）。严禁单字名。
- 默认国际化 → 无中国风标签则严禁中文名。电影级真实。
- 严禁网文中二词（钨神/影刃）。严禁 AI 惯用套路（决明/步虚/渡鸦/老鬼）。
- 必须基于 SUR3+SUR2 当场构思独特真名。

### 美学
- 沾染：在无菌中找有菌裂痕，或在有菌废墟中找无菌秩序。
- 光影：每段描写必含光影。拒绝平光。触觉：强调材质对比与温度。
- 隐喻实体化：痛苦必须转为物理环境变异。
- 陌生化：描述质感/光泽/异样感，不直呼物名。

### 绝对禁令
- 严禁正文出现 M0-M7A/M7B 标签原词。消融在感官描写中。
- 严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工腔。
- 古代背景下现代词必须概念降维（算法→天道/宿命）。
- 情节必须经历否定→否定之否定→扬弃。暴力须有仪式感/雕塑感。
- 模仿风格时模仿底层逻辑，严禁堆砌表层符号。
- 面具协议：故事必须首先作为合格类型片运作。

### 🚫 动态禁用词
[ ${bannedWords} ]`;

  // ============================================================================
  // 最终拼接：B0 + B1A + B1B + B2 + B3 + B4 + B5
  // ============================================================================
  const finalText = [BLOCK_0, BLOCK_1A, BLOCK_1B, BLOCK_2, BLOCK_3, BLOCK_4, BLOCK_5].join('\n\n');
  return { text: finalText, images: visionImage ? [visionImage] : [] };
};
