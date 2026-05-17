// ============================================================================
// V4: External Story First Architecture
// 设计原理：先生成不依赖 M 轴也能成立的外部类型片事件，再让 M 轴污染行动链。
// 目标：降低结构过载、结项倒推、三案同构和记录媒介塌缩。
// ============================================================================

import { NarrativeFieldState, WorldLawConfig, FaceState, PromptFocusState, M7BResidueIntensity } from '../types';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';
import {
  buildBannedWords,
  buildSoftAvoidLabels,
  buildSv2CapacityBrief,
  buildMDirective,
  buildM7BIntensityBrief,
  buildSurNotes,
  buildTaskSentence,
  formatYear,
  getTagsBySuffix,
  buildWorldLawPrompt,
  normalizeM7BIntensity,
  STORY_SEED_QUALITY_PROTOCOL,
  WORLD_MATERIAL_ACTIVATION_PROTOCOL,
} from './promptV3';

const pickDefinition = <T extends { id: string; name: string; aliases?: string[] }>(items: T[], raw: string): T | undefined => {
  if (!raw) return undefined;
  return items.find(item => raw.includes(item.name) || raw === item.id || item.aliases?.some(alias => raw.includes(alias)));
};

const buildSelectedMDirectives = (
  fieldState: NarrativeFieldState,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity
): string => {
  const entries: Array<string | null> = [
    buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0', faceState, focusState),
    buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1', faceState, focusState),
    buildMDirective(fieldState, '_m2', 'M2. 真实遭遇', 'engine_m2', faceState, focusState),
    buildMDirective(fieldState, ['_m3', '_c3'], 'M3. 欲望幻想', 'engine_m3', faceState, focusState),
    buildMDirective(fieldState, ['_m4', '_c4'], 'M4. 大他者阻断', 'engine_m4', faceState, focusState),
    buildMDirective(fieldState, '_m5', 'M5. 行动驱力', 'engine_m5', faceState, focusState),
    buildMDirective(fieldState, '_m6', 'M6. 终极代价', 'engine_m6', faceState, focusState),
    buildMDirective(fieldState, '_m7a', 'M7A. 象征裁决', 'engine_m7a', faceState, focusState),
    buildMDirective(fieldState, '_m7b', 'M7B. 实在余痕', 'engine_m7b', faceState, focusState, m7bIntensity),
  ];

  return entries.filter(Boolean).join('\n\n');
};

export const V4_EXTERNAL_STORY_PROTOCOL = `## V4 外部故事优先协议

本版本的目标不是把 M 轴写得更满，而是让故事先活起来。每个方案必须先有不依赖 M 轴也成立的强情节故事机关，再让 M 轴在行动链内部发生偏转。

**核心顺序（必须静默执行，不输出过程）**:
1. 外部故事种子：先只用 SUR1/SUR2/SUR3/SUR4/SUR5/SUR9 生成一个能独立成立的类型片冲突。必须明确可见目标、外部阻断、压力装置、升级链和高潮选择；此阶段严禁让 M7A/M7B 决定谜底。
2. 观看侧重点分配：三案先分配不同的观看入口和生活领域，再写剧情。PLOT 正面看事件运动；FORM 斜目而视一个可见载体；ATMOSPHERE 沉进场域压力。FORM 的载体可以是一个物、一道手续、一个凭证、一条路线、一件公共事件、一套流程、一个媒介、一种反复动作或一种公共机制；它必须来自已选 SUR/M 的故事材料，不得从 SV2 词条名、数字标题或章节数量里硬造。文字、档案、泥版、证据只能用于其中一案的局部功能。
3. 精神污染：外部故事成立后，再让 M0 改写主角进入事件的方式；每案只前景化 2-3 个 M 位点，其余作为暗流。
4. 结项回咬：M7A 只在最后回头改变行动意义；M7B 若已选，只作为同一终点的末帧余震，不许提前把故事写成通往同一机关的轨道。

**字段分层**:
- SUR1 是外部发动机：决定可复述的目标、阻碍、升级、类型快感和落点。
- SUR2/SUR3 是物理坐标，世界法则 L1-L5 只裁决 SUR1 类型与该坐标冲突时如何处理。SUR1 只授权类型语法，不自动授权外星人、超能力、鬼神、魔法、义体、AI 治理等奇观本体；只有被世界法则、SUR2/SUR3 或用户输入明确授权的科幻/奇幻/技术材料，才能作为当前世界现实参与故事。
- SUR9 是行动权限，不是性格来源。职业必须触发至少一个不可逆选择，但不得垄断三案媒介。
- M0 是行动组织方式与世界稳定方式，不是剧情职业、病理诊断或性格标签。它改变推理、节奏、选择和结尾余味，但不能把所有动作压成同一种整理/校验/记录。
- M1-M6 是暗线压力，不是逐项清单。删掉某个 M 位点若不影响该案主行动，可以让它退为背景。
- M7A 是回溯裁决，不是破案真相模板。最多一案可以使用“主角自己就是直接肇因”的谜底；其他方案必须用不同的行动反噬方式。
- M7B 是低权重末帧余震，不是固定结尾动作、不是第二结尾、不是后日谈。同一名字/符号的残留若出现，必须三案各落在不同的最后一帧媒介上，且不得超过 0-3 句。

**反同构硬约束**:
- 三案至少四项不同：外部公共问题、核心物件功能、搭档关系功能、M4 阻断机制、M5 重复动作、信息释放媒介、结尾物态。
- 三案不得都写成“追查遗物/证据 → 抵达密室/库房 → 打开/发现空无 → 三人共管”。
- 三案不得都使用同一种算法式制度、审判流程、记录系统、公告系统、档案系统或泥版系统承担核心功能。
- 若故事类型含科幻/超常但 SUR2/SUR3 明确锁定古代、现实历史或非技术场域，且当前世界法则没有授权类型本体，科幻/超常只能转译为“人如何被计算流程、预测制度、自动化礼法、训练网络、非人格判断机制、公共神话、装备能力或误读危机处理”；若世界法则、SUR2/SUR3 或用户输入已经授权本体，则必须提供字面世界材料，不得被自动压扁成隐喻。
- 若职业涉及媒介/传播，媒介应理解为“注意力、消息路径、公共记忆和可见性控制”，不等于只能写字、报刊、泥板或档案。

**质量目标**:
- 先让每案能用一句话复述：某人因为 X 想要 Y，但 Z 挡住，他做了 W，付出 V。
- 每案至少有一个压力装置：倒计时、目击者、契约、追捕、封锁、资源短缺、身份暴露、禁令、交易失败、证据易手或同等级外部压力。
- 故事复杂度服从后文 SV2 情节容量闸门；短体量不代表低文学密度，而代表低情节复杂度。
- 允许惊险、误会、交易、追逐、背叛、临时结盟、资源危机、公共事故、骗局、倒计时和空间封锁主动进入故事。
- 文学性服务于事件，不用主题解释代替行动后果。`;

export const buildPromptV4 = (
  fieldState: NarrativeFieldState,
  visionInput: string = '',
  visionImage: string | null = null,
  worldLaw: WorldLawConfig,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity
): { text: string; images: string[] } => {
  const taskSentence = buildTaskSentence(fieldState);
  const gravityRule = buildWorldLawPrompt(worldLaw);

  const volumeRaw = getTagsBySuffix(fieldState, '_volume')[0] || '';
  const structureRaw = getTagsBySuffix(fieldState, '_structure')[0] || '';
  const volumeDef = pickDefinition(SV2_DATA.flatMap(group => group.items), volumeRaw);
  const structureDef = pickDefinition(SV1_DATA.flatMap(group => group.items), structureRaw);

  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  const spacetimeConstraint = exactYear || exactCountry
    ? `\n**SUR3. 精确时空坐标约束**: 严格还原${exactYear ? formatYear(exactYear) : '?'}${exactCountry || '?'}的物理状貌、服饰与政治面貌。覆盖一切模糊标签。`
    : '';

  const visionSection = (visionInput || visionImage)
    ? `\n${getVisionAnchorProtocol(visionInput, Boolean(visionImage))}`
    : '';

  const surNotes = buildSurNotes(fieldState, faceState);
  const mDirectives = buildSelectedMDirectives(fieldState, faceState, focusState, m7bIntensity);
  const bannedWords = buildBannedWords(fieldState);
  const softAvoidLabels = buildSoftAvoidLabels(fieldState);
  const m7aTags = getTagsBySuffix(fieldState, '_m7a');
  const m7bTags = getTagsBySuffix(fieldState, '_m7b');
  const activeM7BIntensity = normalizeM7BIntensity(m7bIntensity);
  const hasActiveM7B = m7bTags.length > 0 && activeM7BIntensity !== 'off';
  const sv2Capacity = buildSv2CapacityBrief(volumeDef);
  const sv2CapacityGate = `**SV2 情节容量闸门**:
- 本次情节容量上限：${sv2Capacity.plotBudget}
- 本次边界：${sv2Capacity.limits}
- 三案必须共享这个上限；PLOT / FORM / ATMOSPHERE 只是观看入口不同，不能借 FORM 或 ATMOSPHERE 新增独立支线、第二反派线、多阵营网络或多重谜团。
- 字数只提高说明清晰度和事件可感度，不自动增加人物数量、场景数量、反转层数或世界观层级。
- 5 分钟及以下体量尤其要保持：一个核心困境、少量核心人物、少数空间、一次关键揭示或终局选择、一个不可缝合的余味。`;
  const sv1StructureBrief = structureDef
    ? `\n**本次 SV1 参考**: ${structureDef.name} — ${structureDef.def || ''}`
    : `\n**本次 SV1 默认结构**: 未选择 SV1；使用默认四步因果骨架（激励事件 → 上升动作 → 高潮 → 余痕收束）。PLOT 直接走四步，FORM/ATMOSPHERE 在自身字段内完成同样阶段压力。`;
  const sv2StructureBrief = volumeDef
    ? `\n**本次 SV2 全局时长/容量**: ${sv2Capacity.runtimeLabel} · ${sv2Capacity.capacityLabel}; 叙事容量：${sv2Capacity.capacity}; 情节容量上限：${sv2Capacity.plotBudget}; 密度/压缩：${sv2Capacity.density} / ${sv2Capacity.compression}; 输出篇幅：每个 Pitch ${sv2Capacity.outputTarget}。\n\n${sv2CapacityGate}`
    : `\n**本次 SV2 默认时长/容量**: 未选择 SV2；按标准短篇执行，每个 Pitch ${sv2Capacity.outputTarget}。叙事容量：${sv2Capacity.capacity}; 情节容量上限：${sv2Capacity.plotBudget}; 密度/压缩：${sv2Capacity.density} / ${sv2Capacity.compression}。\n\n${sv2CapacityGate}`;

  const SECTION_ROLE = `Role: 类型片故事架构师 & 精神结构改写师。
Task: ${taskSentence} 请先写出外部冲突清楚、类型快感成立、能被复述的三条强情节故事方案；再让主体精神结构在行动链内部发生偏转。优先级：故事好看、完整、自然、可复述 > 精神结构合规 > 文学修辞。`;

  const SECTION_WORLD = `## 本次世界与表层参数

${gravityRule}${spacetimeConstraint}${visionSection}
${surNotes || ''}`;

  const SECTION_ENGINE = `## 本次主体精神参数（作为暗线使用）

以下 M 参数不是剧情目录。它们只规定主角为什么以错误方式进入外部事件、为什么误认、为什么重复、为什么付出代价，以及结尾如何回头改写行动意义。

**前景化规则**:
- M0 与 M7A 始终有效；M7B 若已选，只作为低权重末帧约束有效。
- 每个方案只选择 2-3 个 M1-M6 位点前景化；其他位点作为语气、误认、动作延迟和关系压力存在。
- 前景化位点必须改变主角选择；背景位点不得抢走外部故事。
- 双词条只在被前景化时做不可两全选择；背景双词条只保留裂痕，不强迫大场面。

${mDirectives}`;

  const SECTION_STRUCTURE = `## 结构与体量

- 默认输出三个方向：PLOT / FORM / ATMOSPHERE。
- PLOT：外部行动、追查、转场、阻断、高潮选择必须最强。
- FORM：载体焦点版。斜目而视一个来自已选 SUR/M 的可见载体；故事仍须有完整因果，但叙述重心放在载体如何被使用、误认、争夺、改写或遗留。不得只是 PLOT 的人物内心版，也不得从 SV2 名称、数字标题或章节数量生成可数容器。
- ATMOSPHERE：场域压力版。沉进空间、身体、感官、资源和环境秩序组织事件，不得只是弱情节散文。
- SV1 始终提供结构约束：若已选择 SV1，使用该 SV1；若未选择 SV1，使用默认四步因果骨架。
- SV2 始终提供容量约束：若已选择 SV2，使用该 SV2；若未选择 SV2，使用标准短篇默认容量。SV2 只控制三案共同的成片时长、叙事容量、情节容量上限、密度、压缩率和输出篇幅；它不是 OPTION 2 专属结构。
${sv1StructureBrief}
${sv2StructureBrief}`;

  const SECTION_OUTPUT = `## 输出要求

**体量/时长**: ${volumeDef ? `成片时长约 ${sv2Capacity.runtimeLabel}；每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标。` : '标准短篇；每个 Pitch 以 500-800 中文字为目标。'}优先给事件、选择、后果和反转留空间。

**情节容量**: ${sv2Capacity.plotBudget} 短体量可以写得浓郁、文学、电影感强，但复杂度必须克制；扩写只能增加场面、心理、对白、物件、节奏和意象密度，不能为了凑字数新增支线、反派、阵营、世界观设定或多重反转。
${m7bTags.length > 0 ? `\n**M7B 显影强度**: ${buildM7BIntensityBrief(activeM7BIntensity)}\n` : ''}

**正文规则**:
- 正文只写事件、动作、选择、后果、物件位置、关系变化和感官残留。
- 禁止用主题解释、制度评论、心理诊断、哲学判断或作者总结替代剧情。
- 禁止把 FORM/ATMOSPHERE 写成弱情节散文；三案都必须有可见目标、阻断升级、高潮选择和代价兑现。
- 禁止为了完成结项而让三案共享同一谜底、同一证据装置、同一收编方式。
- 字段名里的“余痕收束/载体余痕/余痕停点”只表示主线收束后的最后一帧，不是额外尾声；严禁写成“后来/几天后/多年后/每年”的后日谈。
- 禁止连续堆砌暴力；显性暴力每案最多一处，必须改变局势。

**硬禁词（仅 pitch_structure 正文）**: [ ${bannedWords} ]

**参数复述限制**:
以下已选参数名不得在 pitch_structure 正文中作为解释性标签机械复述；必须转译为世界内称谓、制度、物件、动作、关系压力或场面后果：
[ ${softAvoidLabels || '无'} ]

**结构审查（必须先输出，极简结论，不写推理过程）**:
\`\`\`xml
<design_audit>
1. 故事机关：三案各一句X想要Y但Z。
2. 压力装置：三案各列一个倒计时/封锁/契约等。
3. 高潮选择：三案各列不可逆选择。
4. M污染：三案各列2-3项。
5. M7A：三种A→B回咬。
6. M7B：若使用，只列末帧余震。
7. 载体：三案媒介不重复。
8. 阻断：三案保护对象不同。
9. 职业：三案职业触发不同。
10. 底子：机关/揭示/选择/代价齐全。
11. 容量：未超过SV2人物/场景/转折上限。
12. 边界：硬禁未入正文;参数已转译。
</design_audit>
\`\`\`

**JSON 格式**:
\`\`\`json
[
  { "id": "1", "type": "PLOT", "compiler": "SV1_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { "inciting_incident_激励事件": "...", "rising_action_上升动作": "...", "climax_高潮": "...", "resolution_余痕收束": "..." }, "structure": "PLOT_DRIVEN" },
  { "id": "2", "type": "FORM", "compiler": "FORM_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { "carrier_entrance_载体入场": "...", "carrier_mutation_功能变形": "...", "carrier_crisis_载体危机": "...", "carrier_residue_载体余痕": "..." }, "structure": "FORM_DRIVEN" },
  { "id": "3", "type": "ATMOSPHERE", "compiler": "SENSORY_FIELD", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { "field_state_场域初态": "...", "pressure_system_秩序压力": "...", "sensory_mutation_感官变形": "...", "residue_frame_余痕停点": "..." }, "structure": "ATMOSPHERE_DRIVEN" }
]
\`\`\`

**结项宪法（只作生成约束，不得作为额外输出段落）**:
${m7aTags.length > 0 ? `- M7A [${m7aTags.join('/')}] 必须回溯性改写行动意义，但不得把三案都写成同一种真相揭露。` : ''}
${hasActiveM7B ? `- M7B [${m7bTags.join('/')}] 仅按当前显影强度作为末帧余震保留；严禁另起尾声、后日谈、新场景或时间跳转。` : ''}`;

  const text = [
    SECTION_ROLE,
    V4_EXTERNAL_STORY_PROTOCOL,
    WORLD_MATERIAL_ACTIVATION_PROTOCOL,
    SECTION_WORLD,
    SECTION_ENGINE,
    SECTION_STRUCTURE,
    STORY_SEED_QUALITY_PROTOCOL,
    SECTION_OUTPUT,
  ].join('\n\n');

  return { text, images: visionImage ? [visionImage] : [] };
};
