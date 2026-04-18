// ============================================================================
// V3: Director's Brief Architecture
// 设计原理：以 directive（导演语言）为第一公民，替代 core（理论语言）。
// 每个 M 参数以「导演笔记」的形式注入 AI，而非学术定义卡片。
// 公式升级为 M0-M7A（含象征裁决 / 缝合点）。
// ============================================================================

import { NarrativeFieldState, WorldLawConfig } from '../types';
import { getDirective, findItemFull } from './dataRegistry';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';

// ============================================================================
// 工具函数
// ============================================================================

const getTagsBySuffix = (fieldState: NarrativeFieldState, suffixes: string | string[]): string[] => {
  const sfxArray = Array.isArray(suffixes) ? suffixes : [suffixes];
  return Object.keys(fieldState)
    .filter(k => sfxArray.some(sfx => k.endsWith(sfx)))
    .flatMap(k => fieldState[k]);
};

/** 构建禁用词表 */
const buildBannedWords = (fieldState: NarrativeFieldState): string => {
  const tags = Object.values(fieldState).flat();
  if (tags.length === 0) return "";
  const words = tags.map(t => t.split('(')[0].trim()).filter(w => w.length > 1);
  const banned = [
    "大他者", "Big Other", "Object a", "对象a", "符号界", "实在界",
    "想象界", "异化", "阉割", "圣状", "菲勒斯", "能指", "所指",
    "缝合点", "主人能指", "point de capiton"
  ];
  return [...new Set([...words, ...banned])].join(', ');
};

/** 提取单个 M 参数的导演笔记 */
const buildMDirective = (
  fieldState: NarrativeFieldState,
  suffix: string | string[],
  label: string,
  blockId: string
): string | null => {
  const suffixes = Array.isArray(suffix) ? suffix : [suffix];
  const tags = getTagsBySuffix(fieldState, suffixes);
  if (tags.length === 0) return null;

  const parts: string[] = [];
  for (const tag of tags) {
    const info = getDirective(tag, blockId);
    if (!info) continue;

    // topology 作为共享前缀（如果存在）
    const topologyPrefix = info.topology ? `[位格] ${info.topology}\n` : '';
    // directive 优先（导演语言），回退到 def（一句话定义）
    const content = info.directive || info.def;
    parts.push(`**${label}**: [${info.name}]\n${topologyPrefix}${content}`);
  }

  return parts.length > 0 ? parts.join('\n') : null;
};

// ============================================================================
// V3 Prompt Builder
// ============================================================================

export const buildPromptV3 = (
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig
): { text: string, images: string[] } => {

  // === 提取基础素材 ===
  const gravity = worldLaw.gravity || 3;

  // ============================================================================
  // ① 身份声明
  // ============================================================================
  const SECTION_ROLE = `Role: 殿堂级电影编剧 & 叙事架构师。
Task: 基于以下导演笔记，生成 3 个电影级故事概念。`;

  // ============================================================================
  // ② 核心公式（纯位置关系，不含词条内容）
  // ============================================================================
  const SECTION_FORMULA = `## 核心公式

**Story = M0 { [(M1 → M2 → M3) / M4] × M5 } ⇒ (M6, M7A ‖ M7B)**

M0 = 精神拓扑：主角的操作系统，决定公式内一切运算的法则。
M1 = 缺失主体：因为不完整而渴望的人。结合职业/身份具象化。
M2 = 真实遭遇：打破日常的不可逆瞬间。
M3 = 欲望幻想：主体以为能填补缺失的那个东西。
M4 = 大他者阻断：横亘在 M1 与 M3 之间的障碍。不一定是邪恶的。
M5 = 行动驱力：对抗 M4 的具体方式。不一定是暴力。
M6 = 终极代价：为让公式闭合，必须放弃的等价交换物。
M7A = 象征裁决（缝合点）：故事结束后，这一切变成了什么？回溯性地重写全部意义。
M7B = 实在余痕：故事结束后，主体身上留下了什么不可消化的残留。

**辩证法机制**:
- M0-M6 是时间性展开。每个参数在它发生的那一刻都有自己的体验面向（正面/暗面），由导演笔记指定。
- M7A 是缝合点——它不是链条的最后一环，而是回头看让所有之前的环节突然有了意义的那个点。M7A 落地的瞬间，回溯性地重新编织 M0-M6 的全部含义。
- M7B 和 M7A 是同一枚硬币的两面：M7A 在象征界（这个故事变成了什么），M7B 在实在界（身体上留下了什么）。
- 三个故事必须忠实于导演笔记中每个参数指定的体验面向，但用三种不同的叙事语法来翻译同一条情绪曲线。`;

  // ============================================================================
  // ③ 创作铁律（极度压缩）
  // ============================================================================
  const SECTION_LAWS = `## 创作铁律

命名：严禁通用名（Tom/Alice/小明）。严禁网文中二词。默认国际化，无中国风标签则严禁中文名。基于时空设定构思独特真名。
美学：每段描写必含光影与温度。痛苦转为物理环境变异。隐喻实体化。拒绝平光。
禁令：严禁正文出现 M0-M7B 标签原词。严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工说明书语法。
面具：故事首先作为合格类型片运作。99%完美类型片，1%视差裂痕。模仿底层逻辑，严禁堆砌表层符号。`;

  // ============================================================================
  // ④ 导演笔记 (DIRECTOR'S BRIEF) — 灵魂区
  // ============================================================================
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

  // M0 逻辑约束（如果有）
  const m0Tags = getTagsBySuffix(fieldState, ['_m0', '_c0']);
  let m0Logic = '';
  if (m0Tags.length > 0) {
    const item = findItemFull(m0Tags[0]) as any;
    if (item?.logic) {
      m0Logic = `\n\n**M0 逻辑约束（铁律）**: ${item.logic}`;
    }
  }

  const SECTION_DIRECTOR = `## 导演笔记 (DIRECTOR'S BRIEF)

以下是这部电影的创作核心。每一条都是导演对你说的话——不是定义，是指令。
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明的全新场景承载它。严禁复现示例中的具体意象。

${directorBrief}${m0Logic}`;

  // ============================================================================
  // ⑤ 场景皮肤 (SKIN) — 世界法则作为标签的物理运算规则
  // ============================================================================
  const gravityRules: Record<number, string> = {
    1: `**物理法则 LV.1 [写实]**
边界：绝对锁死时空物理常数。严禁奇迹、超自然、灵异、超能力。死亡不可逆。
降维：超出现实的标签强制降维为该时空可信的等价物（修仙→武术苦修，义体→假肢工艺）。
未指定时空时：基于 M 参数反向推演最合逻辑的历史坐标。严禁默认当代。默认国际化场域。`,

    2: `**物理法则 LV.2 [合理]**
边界：允许奇观，但每个超常元素必须有科学/心理学/技术的实体解释。无法解释的严禁出现。
降维：超现实标签附着合理化机制（预言→统计学直觉，心灵感应→极端共情训练）。
未指定时空时：推演合逻辑的时代。允许近未来硬科幻。默认国际化场域。`,

    3: `**物理法则 LV.3 [缝合]**
边界：残酷现实为底座，允许局部超现实符号。超自然不解释、不主导、不体系化。
降维：允许症状级超现实（伤口长出花朵），禁止体系化超自然（魔法学院、异能等级）。
未指定时空时：推演服务于标签张力的时空。可以是现实中的异质空间。`,

    4: `**物理法则 LV.4 [奇观]**
边界：超自然/科幻协议公开运行。魔法、异能作为世界基础设施。内部规则必须自洽。
降维：无需降维。标签直接取字面含义运作。世界观需有内部逻辑。
未指定时空时：发明服务于标签张力的架空世界。需基本世界观框架。`,

    5: `**物理法则 LV.5 [狂想]**
边界：梦境逻辑。隐喻等同物理现实。因果律可弃。重力、生死随情绪坍塌。
降维：反向升维——写实标签拔升至神话维度（外科医生→切开维度的人）。
未指定时空时：放手创造榨干标签张力的异世界。无需解释。`,
  };

  const gravityRule = gravityRules[gravity] || gravityRules[3];

  const surParams = [
    { label: 'SUR1. 叙事动力', suffix: '_genre' },
    { label: 'SUR2. 背景场域', suffix: '_era' },
    { label: 'SUR4. 社会形态', suffix: '_society' },
    { label: 'SUR5. 欲望锚点', suffix: '_everything' },
    { label: 'SUR6. 空间场景', suffix: '_location' },
    { label: 'SUR7. 性别', suffix: '_gender' },
    { label: 'SUR8. 年龄', suffix: '_age' },
    { label: 'SUR9. 职业身份', suffix: '_profession' },
    { label: 'SUR10. 哲学信念', suffix: '_ideology' },
  ];

  const surLines: string[] = [];
  for (const sur of surParams) {
    const tags = getTagsBySuffix(fieldState, sur.suffix);
    if (tags.length > 0) {
      const defs = tags.map(t => {
        const item = findItemFull(t) as any;
        return item?.def ? `(${item.def})` : '';
      }).filter(Boolean).join(' ');
      surLines.push(`- ${sur.label}: ${tags.join(' + ')} ${defs}`);
    }
  }

  // 精确时空坐标（最高优先级，覆盖物理法则的时空推演）
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  let spacetime = '';
  if (exactYear || exactCountry) {
    spacetime = `\n**精确时空坐标（最高优先级）**: ${exactYear || '?'} / ${exactCountry || '?'}\n→ 严格还原该时空的物理状貌、服饰与政治面貌。覆盖一切模糊标签。`;
  }

  // 视觉锚点
  let visionSection = '';
  if (visionInput) visionSection = '\n' + getVisionAnchorProtocol(visionInput);

  // 合并：世界法则（运算规则） + SUR 标签 + 时空坐标 + 视觉锚点
  const skinParts: string[] = [gravityRule];
  if (surLines.length > 0) {
    skinParts.push('\n以下标签在此法则下运行：');
    skinParts.push(surLines.join('\n'));
  }
  if (spacetime) skinParts.push(spacetime);
  if (visionSection) skinParts.push(visionSection);

  const SECTION_SKIN = `## 场景皮肤\n\n${skinParts.join('\n')}`;

  // ============================================================================
  // ⑦ 输出格式
  // ============================================================================
  // 体量
  const volumeTags = getTagsBySuffix(fieldState, '_volume');
  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTags = getTagsBySuffix(fieldState, '_structure');
  const structureTag = structureTags.length > 0 ? structureTags[0] : "";

  let volumeLine = '标准短篇';
  if (volumeDef) {
    volumeLine = `${volumeDef.name}: ${volumeDef.patch?.mechanics || volumeDef.def}`;
  }

  const bannedWords = buildBannedWords(fieldState);

  const m7Tags = getTagsBySuffix(fieldState, '_m7b');
  const m8Tags = getTagsBySuffix(fieldState, '_m7a');

  const SECTION_OUTPUT = `## 输出格式

**体量**: ${volumeLine}${structureTag ? ` | **结构**: ${structureTag}` : ''}

**音色**: 故事的默认色调由 SUR1（叙事动力）决定。暴力仅在叙事转折点使用，每个故事最多一处显性暴力描写。禁止连续堆砌血腥场景。身体细节服务于心理冲击，不服务于感官刺激。

**形式约束**:
- 每个 Pitch ≈ 500-700 字。三个方案风格互不雷同。
- 必须包含：激励事件 → 上升动作 → 高潮 → 落点。
- 语言：极具画面感的简体中文。严禁剧本格式/学术论文腔/网络小说腔。

**三重镜头（同一剧本，三种拍法）**:
三个故事共享同一条情绪曲线和同一个 M7A 缝合点。区别仅在叙事语法——同一部电影交给三位不同偏好的导演：
OPTION 1 [PLOT]: 情节导演。侧重外部冲突、事件链与类型片节奏。M4 具象化为可见的外部力量。
OPTION 2 [CHARACTER]: 人物导演。侧重心理肖像、关系动力学与内在转变。M4 内化为关系性障碍。
OPTION 3 [ATMOSPHERE]: 氛围导演。侧重感官体验、空间质感与环境压迫。M4 弥散为环境性力量。允许弱化甚至放弃传统情节弧线，用感官节奏替代事件链。

**禁用词**: [ ${bannedWords} ]

**思考过程（必须先输出）**:
\`\`\`xml
<thought_process>
1. 情绪曲线：逐一确认每个 M 参数的导演笔记面向（正/暗/张力），绘制完整情绪曲线
2. M7A 回溯：从 M7A 缝合点反向审视，哪些 M 参数的含义被重写了？重写后的落差在哪里？
3. 物理校验：逐一检查每个 SUR 标签是否超出当前物理法则边界。超出的如何降维？降维后的等价物是什么？
4. 三重语法：三位导演（情节/人物/氛围）各自如何翻译同一条曲线？侧重点差异在哪里？
</thought_process>
\`\`\`

**JSON 格式**:
\`\`\`json
[
  {
    "id": "1",
    "type": "PLOT",
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch_structure": {
      "inciting_incident_激励事件": "...",
      "rising_action_上升动作": "...",
      "climax_高潮": "...",
      "resolution_存在落点": "..."
    },
    "structure": "PLOT_DRIVEN"
  },
  { "id": "2", "type": "CHARACTER", "title": "...", "tagline": "...", "pitch_structure": { "inciting_incident_激励事件": "...", "rising_action_上升动作": "...", "climax_高潮": "...", "resolution_存在落点": "..." }, "structure": "CHARACTER_DRIVEN" },
  { "id": "3", "type": "ATMOSPHERE", "title": "...", "tagline": "...", "pitch_structure": { "inciting_incident_激励事件": "...", "rising_action_上升动作": "...", "climax_高潮": "...", "resolution_存在落点": "..." }, "structure": "ATMOSPHERE_DRIVEN" }
]
\`\`\`

**最终复述**:
${m8Tags.length > 0 ? `- M7A [${m8Tags.join('/')}] 回溯性地决定整个故事的意义。严禁篡改。` : ''}
${m7Tags.length > 0 ? `- M7B [${m7Tags.join('/')}] 是绝对宪法。严禁篡改。` : ''}`;

  // ============================================================================
  // 最终拼接
  // ============================================================================
  const sections = [
    SECTION_ROLE,
    SECTION_FORMULA,
    SECTION_LAWS,
    SECTION_DIRECTOR,
    SECTION_SKIN,
    SECTION_OUTPUT,
  ].filter(s => s.length > 0);

  const finalText = sections.join('\n\n');
  return { text: finalText, images: visionImage ? [visionImage] : [] };
};
