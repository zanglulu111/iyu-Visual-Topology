// ============================================================================
// V4: Psychoanalytic Genre Story Architecture
// 设计原理：先确认图文/参数种子与行动张力，再让外部故事机关和 M 轴在行动链内部咬合。
// 目标：降低结构过载、结项倒推、三案同构和记录媒介塌缩。
// ============================================================================

import { NarrativeFieldState, WorldLawConfig, FaceState, PromptFocusState, MAxisMixerState, M7BResidueIntensity } from '../types';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { DEFAULT_SV1_STRUCTURE_NAME, DEFAULT_SV2_VOLUME_NAME } from '../data/engine_sv/defaults';
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
  buildCurrentCombinationJudgementV3,
  normalizeM7BIntensity,
  STORY_SEED_QUALITY_PROTOCOL,
  buildAttentionControllerProtocol,
} from './promptV3';

const pickDefinition = <T extends { id: string; name: string; aliases?: string[] }>(items: T[], raw: string): T | undefined => {
  if (!raw) return undefined;
  return items.find(item => raw.includes(item.name) || raw === item.id || item.aliases?.some(alias => raw.includes(alias)));
};

const DEFAULT_SV1_SKELETONS = [
  'inciting_incident_激励事件',
  'rising_action_上升动作',
  'climax_高潮',
  'resolution_余痕收束',
];

const buildJsonShape = (keys: string[]): string => keys.map(key => `"${key}": "..."`).join(', ');

const getSkeletonLabel = (key: string): string => {
  const parts = key.split('_');
  return parts[parts.length - 1] || key;
};

const buildSelectedMDirectives = (
  fieldState: NarrativeFieldState,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  mAxisMixer?: MAxisMixerState,
  m7bIntensity?: M7BResidueIntensity
): string => {
  const entries: Array<string | null> = [
    buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m2', 'M2. 真实遭遇', 'engine_m2', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, ['_m3', '_c3'], 'M3. 欲望幻想', 'engine_m3', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, ['_m4', '_c4'], 'M4. 大他者阻断', 'engine_m4', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m5', 'M5. 行动驱力', 'engine_m5', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m6', 'M6. 终极代价', 'engine_m6', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m7a', 'M7A. 象征裁决', 'engine_m7a', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m7b', 'M7B. 实在余痕', 'engine_m7b', faceState, focusState, m7bIntensity, mAxisMixer),
  ];

  return entries.filter(Boolean).join('\n\n');
};

export const V4_EXTERNAL_STORY_PROTOCOL = `## V4 精神分析类型片叙事生成协议

本协议的目标是生成带精神分析内核的强情节类型片故事方案，不是普通故事套理论，也不是素材解析报告。若用户提供图像/文本，先继承用户确认的图文种子、锁定事实、参考范围、故事横截面和行动张力；若未提供，则从已选参数中生成一个具体的人、物、空间、关系动作或事件现场。外部故事必须在脱离术语时仍可复述，但目标、误认、阻断、重复动作、代价和结尾回咬必须从本次输入种子或参数材料里的行动张力内生。

**最高裁决**:
- 故事好看、完整、自然、可复述 > 世界观一致 > 外部故事机关成立 > 精神结构回咬 > 单个参数细节 > 文学修辞。
- 参数只服务故事机器；若参数互相冲突，先保住世界物理一致和行动链条，再转译单个词条功能。
- pitch_structure 必须像一条能讲给别人听的微型电影故事，不得靠术语、解释或氛围替代事件。

**核心顺序**:
1. 输入种子确认：先确定本次必须遵守的锁定事实或参考范围。若有图文解析结果，以用户可编辑后的结果为准，不重新猜测图片事实，也不要翻译成 SUR/M/SV 参数表。若无图像/文本，先从已选参数中生成一个具体的人/物/空间/关系动作/事件现场。
2. 故事横截面确认：若输入里已经有用户确认的图文解析或用户文字要求，先从中提炼“世界已在运行 / 失衡时刻 / 第一个画面 / 外部目标 / 外部阻碍 / 失败后果”，它不是固定句式，而是后续外部故事的起跑面。不得重新猜测图片事实。
3. 行动张力提取：从锁定事实、参考范围或故事横截面中提取一个行动张力：谁想靠近、逃离、保存、交换、遮蔽或暴露什么；什么不能说，什么被看见，什么拒绝被看见。不得输出术语、诊断或主题解释。
4. 外部故事机关：若已选 SUR1，用 SUR1 组织类型运动；若未选 SUR1，不得偷套未选类型模板。围绕故事横截面和行动张力生成可复述的目标、阻断、压力装置、升级链和高潮选择。外部故事要能脱离术语成立，但不能脱离本次锁定事实/参考范围里的行动张力成立；此阶段严禁让 M7A/M7B 决定谜底。
5. 观看侧重点分配：三案先分配不同的观看入口和生活领域，再写剧情。PLOT 正面看事件运动；FORM 斜目而视一个可见载体；ATMOSPHERE 沉进场域压力。三案不是同一故事换三个壳，而是三个不同的起跑问题：PLOT 先问“公共冲突如何逼出决定”，FORM 先问“哪个载体在流转、失真、被夺回或被污染”，ATMOSPHERE 先问“哪个空间/环境在持续压缩身体与可行动范围”。FORM 的载体可以是一个物、一道手续、一个凭证、一条路线、一件公共事件、一套流程、一个媒介、一种反复动作或一种公共机制；它必须来自锁定事实、参考范围、已选 SUR/M 或故事行动材料，不得从 SV2 词条名、数字标题或章节数量里硬造。文字、档案、泥版、证据只能用于其中一案的局部功能。若某案去掉其核心轴后仍能无损替换成另一案，只是换了词和场景，说明同构，必须重写。
6. 精神咬合：M0-M7A/M7B 只检验并改写行动链中的误认、重复、阻断、代价和结尾回咬；每案只前景化 2-3 个 M 位点，其余作为暗流。不得事后用解释句把无关故事说成欲望结构。

**字段分层**:
- SUR1 若已选，是外部发动机：决定可复述的目标、阻碍、升级、类型快感和落点。若未选 SUR1，外部动力从已选世界材料、空间、职业、对象、重点词和压力装置中生成，不自动补类型。
- SUR2 是场域预设包，决定世界母体、制度气味、危险来源、公共情绪和生活材料；SUR3 只有在被选择时作为精确坐标校准器，固定现实域、时间锚、空间锚、尺度边界、物理现实、技术边界和文化接口。世界法则 L1-L5 只裁决类型材料与当前世界材料冲突时如何处理。SUR1 只授权类型语法，不自动授权外星人、超能力、鬼神、魔法、义体、AI 治理等奇观本体；只有被世界法则、SUR2/SUR3、用户文字或用户确认后的图像解析明确授权的科幻/奇幻/技术/魔幻/超现实材料，才能作为当前世界现实参与故事。
- 用户确认后的图像解析属于输入种子的一部分：若解析已锁定魔幻插画、神话末世、科幻视觉、异维空间、动画/漫画世界或超现实天象为世界风格本体，后续故事不得默认将其现实化、心理化或制度化；除非用户文字、已选参数或世界法则明确要求折译。
- SUR6 是空间机制，不是布景名。若已选，它必须变成封锁、隔离、偷听、误认、交换、暴露、穿越失败或高潮选择的物理机关；若与 SUR3 冲突，只保留空间功能，转译制度外壳。
- SUR9 是行动权限，不是性格来源。职业必须触发至少一个不可逆选择，但不得垄断三案媒介。
- M/SUR 词条里的现代制度、媒介、职业、技术、物件和示例名只取结构功能；若与 SUR3 冲突，必须转译为当前时空可成立的仪式、称谓、器物、空间、权力关系、传闻、身体动作或公共秩序。
- M0 是行动组织方式与世界稳定方式，不是剧情职业、病理诊断或性格标签。它改变推理、节奏、选择和结尾余味，但不能把所有动作压成同一种整理/校验/记录。
- M1-M6 是暗线压力，不是逐项清单。删掉某个 M 位点若不影响该案主行动，可以让它退为背景。
  - 重点词条是全局叙事核心，不是普通强调。若用户标记重点，三案的外部故事机关、误认、关键选择、代价和结尾回咬都必须围绕它组织；非重点词条只提供定义与位格运动，让位为暗流。若重点来自 SUR/SV，它优先改写类型机关、世界物理、生活领域、职业动作、空间压力、对象流转、显性收场或容量控制，不参与同槽 M 位格前景化。
- 同槽前景化只处理同一个 M 位格内多词条的主次：先选词条默认前景化；同槽重点词条覆盖先选顺序。前景化词条负责正面行动链，背景化词条只能作为裂痕、反压力、动作延迟、语气错位或代价阴影。
- M7A 是回溯裁决，不是破案真相模板。最多一案可以使用“主角自己就是直接肇因”的谜底；其他方案必须用不同的行动反噬方式。
  - M7B 是 M7A 完成后的余痕形式，不是固定结尾动作，也不是第二结尾；它只能服从当前余痕档位：关闭、末帧轻触、末帧强显影或极短后日谈。只有后日谈档才允许追加尾声。

**反同构硬约束**:
- 三案至少四项不同：外部公共问题、核心物件功能、搭档关系功能、M4 阻断机制、M5 重复动作、信息释放媒介、结尾物态。
- 三案不得都写成“追查遗物/证据 → 抵达密室/库房 → 打开/发现空无 → 三人共管”。
- 三案不得都使用同一种算法式制度、审判流程、记录系统、公告系统、档案系统或泥版系统承担核心功能。
- 三案不得只是同一条“目标-阻断-高潮”骨架上换一个道具或一个气氛词；每案必须有不同的起跑问题、不同的阻力语法和不同的结尾物态。
- 若故事类型含科幻/超常但 SUR2/SUR3 明确锁定古代、现实历史或非技术场域，且当前世界法则没有授权类型本体，科幻/超常只能转译为“人如何被计算流程、预测制度、自动化礼法、训练网络、非人格判断机制、公共神话、装备能力或误读危机处理”；若世界法则、SUR2/SUR3 或用户输入已经授权本体，则必须提供字面世界材料，不得被自动压扁成隐喻。
- 若职业涉及媒介/传播，媒介应理解为“注意力、消息路径、公共记忆和可见性控制”，不等于只能写字、报刊、泥板或档案。

**质量目标**:
- 先让每案能用一句话复述：某人因为 X 想要 Y，但 Z 挡住，他做了 W，付出 V。
- 禁止精神分析马后炮：不得先写一个与用户创意、图文解析、锁定事实/参考范围和本次行动张力无关的普通故事，再用解释句贴上 M 轴。每案的目标、误认、阻断、重复动作、代价、结尾回咬中，至少四项必须能回到锁定事实/参考范围获得解释。
- 每案至少有一个压力装置：倒计时、目击者、契约、追捕、封锁、资源短缺、身份暴露、禁令、交易失败、证据易手或同等级外部压力。
- 故事复杂度服从后文 SV2 情节容量闸门；短体量不代表低文学密度，而代表低情节复杂度。
- 允许惊险、误会、交易、追逐、背叛、临时结盟、资源危机、公共事故、骗局、倒计时和空间封锁主动进入故事。
- 文学性服务于事件，不用主题解释代替行动后果。`;

export const buildV4ExternalStoryProtocol = (hasActiveM7B: boolean): string =>
  hasActiveM7B
    ? V4_EXTERNAL_STORY_PROTOCOL
    : V4_EXTERNAL_STORY_PROTOCOL
      .replace(/M7A\/M7B/g, 'M7A')
      .replace(/M0-M7A\/M7B/g, 'M0-M7A')
      .replace(/\n  - M7B 是 M7A 完成后的余痕形式，不是固定结尾动作，也不是第二结尾；它只能服从当前余痕档位：关闭、末帧轻触、末帧强显影或极短后日谈。只有后日谈档才允许追加尾声。/g, '');

export const buildPromptV4 = (
  fieldState: NarrativeFieldState,
  visionInput: string = '',
  visionImage: string | null = null,
  worldLaw: WorldLawConfig,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  mAxisMixer?: MAxisMixerState,
  m7bIntensity?: M7BResidueIntensity
): { text: string; images: string[] } => {
  const volumeRaw = getTagsBySuffix(fieldState, '_volume')[0] || DEFAULT_SV2_VOLUME_NAME;
  const structureRaw = getTagsBySuffix(fieldState, '_structure')[0] || DEFAULT_SV1_STRUCTURE_NAME;
  const volumeDef = pickDefinition(SV2_DATA.flatMap(group => group.items), volumeRaw);
  const structureDef = pickDefinition(SV1_DATA.flatMap(group => group.items), structureRaw);
  const sv1Skeletons = structureDef?.skeletons?.length ? structureDef.skeletons : DEFAULT_SV1_SKELETONS;
  const sv1StageArrow = sv1Skeletons.map(getSkeletonLabel).join(' → ');
  const sv1JsonShape = buildJsonShape(sv1Skeletons);

  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  const spacetimeConstraint = exactYear || exactCountry
    ? `\n**SUR3. 精确坐标校准**: 当前坐标为【时间锚=${exactYear ? formatYear(exactYear) : '未指定'}；空间锚=${exactCountry || '未指定'}】。它只固定现实域、时间锚、空间锚和尺度边界；严格遵守该坐标的物理状貌、服饰、政治/制度现实、交通、技术边界和文化接口。若空间锚是现代国家名但时间早于该政体成立，只作为今日地理简称处理；若为空间站、异星、异维、虚拟、纳米或身体内部，则按该尺度重写身体、交通、危险和物件边界。`
    : '';

  const visionSection = (visionInput || visionImage)
    ? `\n${getVisionAnchorProtocol(visionInput, Boolean(visionImage))}`
    : '';

  const surNotes = buildSurNotes(fieldState, faceState);
  const currentCombinationJudgement = buildCurrentCombinationJudgementV3(fieldState, worldLaw);
  const mDirectives = buildSelectedMDirectives(fieldState, faceState, focusState, mAxisMixer, m7bIntensity);
  const bannedWords = buildBannedWords(fieldState);
  const m7aTags = getTagsBySuffix(fieldState, '_m7a');
  const m7bTags = getTagsBySuffix(fieldState, '_m7b');
  const activeM7BIntensity = normalizeM7BIntensity(m7bIntensity);
  const hasActiveM7B = m7bTags.length > 0 && activeM7BIntensity !== 'off';
  const hasSur1 = getTagsBySuffix(fieldState, '_genre').length > 0;
  const taskSentence = buildTaskSentence(fieldState, hasActiveM7B);
  const attentionController = buildAttentionControllerProtocol(fieldState, focusState, mAxisMixer, activeM7BIntensity);
  const softAvoidLabels = buildSoftAvoidLabels(fieldState, activeM7BIntensity);
  const sv2Capacity = buildSv2CapacityBrief(volumeDef);
  const sv2CapacityGate = `**SV2 情节容量闸门**:
- 本次情节容量上限：${sv2Capacity.plotBudget}
- 本次边界：${sv2Capacity.limits}
- 三案必须共享这个上限；PLOT / FORM / ATMOSPHERE 只是观看入口不同，不能借 FORM 或 ATMOSPHERE 新增独立支线、第二反派线、多阵营网络或多重谜团。
- 字数只提高说明清晰度和事件可感度，不自动增加人物数量、场景数量、反转层数或世界观层级。
- 若本次为短体量输出，尤其要保持：一个核心困境、一个硬戏剧机关、少量核心人物、少数空间、一次关键揭示或终局选择、一个不可缝合的余味；字数用于增强顺读、铺垫、动作、对白、物件和场域细节。`;
  const sv1StructureBrief = structureDef
    ? `\n**本次 SV1 结构权**: ${structureDef.name} — ${structureDef.def || ''}\n**本次 SV1 阶段链**: ${sv1StageArrow}${structureDef.core ? `\n**本次 SV1 核心规则**:\n${structureDef.core}` : ''}`
    : `\n**本次 SV1 固定初始结构**: ${DEFAULT_SV1_STRUCTURE_NAME}；阶段链：${sv1StageArrow}。PLOT / FORM / ATMOSPHERE 都必须在自身观看方式内完成这组阶段压力。`;
  const sv2StructureBrief = volumeDef
    ? `\n**本次 SV2 全局时长/容量**: ${sv2Capacity.runtimeLabel} · ${sv2Capacity.capacityLabel}; 叙事容量：${sv2Capacity.capacity}; 情节容量上限：${sv2Capacity.plotBudget}; 密度/压缩：${sv2Capacity.density} / ${sv2Capacity.compression}; 输出篇幅：每个 Pitch ${sv2Capacity.outputTarget}。\n\n${sv2CapacityGate}`
    : `\n**本次 SV2 固定初始时长/容量**: ${DEFAULT_SV2_VOLUME_NAME}；每个 Pitch ${sv2Capacity.outputTarget}。叙事容量：${sv2Capacity.capacity}; 情节容量上限：${sv2Capacity.plotBudget}; 密度/压缩：${sv2Capacity.density} / ${sv2Capacity.compression}。\n\n${sv2CapacityGate}`;

  const SECTION_ROLE = `Role: 类型片故事架构师 & 精神结构改写师。
Task: ${taskSentence} 请先裁决用户创意、图片用途、锁定事实或参考范围，再写出外部冲突清楚、${hasSur1 ? '类型快感成立' : '强情节机关成立'}、能被复述的三条带精神分析内核的微型电影故事方案；M 轴必须在行动链内部咬合，而不是事后解释。优先级：故事好看、完整、自然、可复述 > 世界观一致 > 外部故事机关成立 > 精神结构合规 > 文学修辞。`;

  const SECTION_WORLD = `## 本次世界与表层参数

${currentCombinationJudgement}${spacetimeConstraint}${visionSection}
${surNotes || ''}`;

  const SECTION_ENGINE = `## 本次主体精神参数（作为暗线使用）

以下 M 参数不是剧情目录。它们只规定主角为什么以错误方式进入外部事件、为什么误认、为什么重复、为什么付出代价，以及结尾如何回头改写行动意义。

**前景化规则**:
- M0 与 M7A 始终有效${hasActiveM7B ? '；M7B 只作为显影形式约束有效。' : '。'}
- 每个方案只选择 2-3 个 M1-M6 位点前景化；其他位点作为语气、误认、动作延迟和关系压力存在。
- 前景化位点必须改变主角选择；背景位点不得抢走外部故事。
- 双词条只在被前景化时做不可两全选择；背景双词条只保留裂痕，不强迫大场面。

${attentionController}

${mDirectives}`;

  const SECTION_STRUCTURE = `## 结构与体量

- 默认输出三个方向：PLOT / FORM / ATMOSPHERE。
- PLOT / FORM / ATMOSPHERE 不是三个世界，而是同一组 M 参数、同一 SUR 世界、同一主情绪曲线的三种观看入口；差异来自事件运动、载体焦点和场域压力，不来自更换底层故事宇宙。
- 三案不是同一故事换三个壳，而是三个不同的起跑器：PLOT 从外部公共问题开机，FORM 从载体流转/误认/改写开机，ATMOSPHERE 从场域压缩/耗损/封锁开机。
- 三案必须分别回答不同的下一步为何发生：PLOT 因事件升级推进，FORM 因载体转手、损坏、占有或失真推进，ATMOSPHERE 因空间、资源、气味、噪声或拥挤变化推进。若去掉该案的核心轴后仍可与另一案互换，只是换词不换因果，就必须重写。
- 本次三案共同使用 SV1 阶段链：${sv1StageArrow}。pitch_structure 字段必须跟随该阶段链，而不是固定写成“激励事件 → 上升动作 → 高潮 → 余痕收束”。
- PLOT：按本次 SV1 阶段链正面推进外部行动、追查、转场、阻断和高潮选择。
- FORM：按同一 SV1 阶段链斜目而视一个来自已选 SUR/M 的可见载体；故事仍须有完整因果，但每个阶段的重心放在载体如何被使用、误认、争夺、改写或遗留。它不是 PLOT 的道具替换版，也不得从 SV2 名称、数字标题或章节数量生成可数容器。
- ATMOSPHERE：按同一 SV1 阶段链沉进空间、身体、感官、资源和环境秩序组织事件；它不是 PLOT 的气氛版，也不是 FORM 的背景版，下一步必须由场域变化触发。
- SV1 始终提供真实结构权，不只是参考标签；若用户改选 SV1，三案都必须按所选 SV1 的阶段功能组织。
- SV1 决定阶段逻辑，不扩展情节容量；复杂 SV1 必须压缩进 SV2 上限。短体量中，多轮、循环、嵌套或螺旋结构只能表现为 2-3 个可辨认回环/节点，不能新增支线或多重谜团。
- SV2 始终提供容量约束：初始固定项为【${DEFAULT_SV2_VOLUME_NAME}】，若用户改选则使用所选 SV2。SV2 只控制三案共同的成片时长、叙事容量、情节容量上限、密度、压缩率和输出篇幅；它不是 OPTION 2 专属结构。
${sv1StructureBrief}
${sv2StructureBrief}`;

  const SECTION_OUTPUT = `## 输出要求

**体量/时长**: ${volumeDef ? `成片时长约 ${sv2Capacity.runtimeLabel}；每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标。` : `${DEFAULT_SV2_VOLUME_NAME}；每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标。`}优先给事件、选择、后果、铺垫和电影感细节留空间。

**情节容量**: ${sv2Capacity.plotBudget} 短体量可以写得浓郁、文学、电影感强，但复杂度必须克制；扩写只能增加场面、心理、对白、物件、节奏和意象密度，不能为了凑字数新增支线、反派、阵营、世界观设定或多重反转。
${hasActiveM7B ? `\n**M7B 显影强度**: ${buildM7BIntensityBrief(activeM7BIntensity)}\n` : ''}

**正文规则**:
- 正文只写事件、动作、选择、后果、物件位置、关系变化和感官残留。
- 禁止用主题解释、制度评论、心理诊断、哲学判断或作者总结替代剧情。
- 禁止把 FORM/ATMOSPHERE 写成弱情节散文；三案都必须有可见目标、阻断升级、高潮选择和代价兑现。
- 禁止为了完成结项而让三案共享同一谜底、同一证据装置、同一收编方式。
- 字段名里的“余痕收束/载体余痕/余痕停点”默认表示主线收束后的最后一帧；${hasActiveM7B ? 'M7B 只能按当前档位作为末帧轻触、末帧强显影或极短后日谈；只有后日谈档才允许追加尾声。' : '本轮不追加独立余痕段。'}
- 禁止连续堆砌暴力；显性暴力每案最多一处，必须改变局势。

**硬禁词（仅 pitch_structure 正文）**: [ ${bannedWords} ]

**参数复述限制**:
以下已选参数名不得在 pitch_structure 正文中作为解释性标签机械复述；必须转译为世界内称谓、制度、物件、动作、关系压力或场面后果：
[ ${softAvoidLabels || '无'} ]

**结构审查（必须先输出，极简结论，不写推理过程）**:
<design_audit> 只写极简检查结论，不写故事提纲；总字数不超过 160 中文字，禁止写三案具体梗概、角色名、地点名、反转内容或解释。
\`\`\`xml
<design_audit>
1. 机关：三案均有目标、阻断、升级。
2. 压力：三案均有外部压力装置。
3. 高潮：三案均由主角亲手选择。
4. 代价：三案均改变关系/秩序/物件。
5. 结尾：三案均有回咬${hasActiveM7B ? '与余痕' : ''}。
6. 边界：世界法则、容量、禁词通过。
</design_audit>
\`\`\`

**JSON 格式**:
\`\`\`json
[
  { "id": "1", "type": "PLOT", "compiler": "SV1_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${sv1JsonShape} }, "structure": "PLOT_DRIVEN" },
  { "id": "2", "type": "FORM", "compiler": "FORM_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${sv1JsonShape} }, "structure": "FORM_DRIVEN" },
  { "id": "3", "type": "ATMOSPHERE", "compiler": "SENSORY_FIELD", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${sv1JsonShape} }, "structure": "ATMOSPHERE_DRIVEN" }
]
\`\`\`

**结项宪法（只作生成约束，不得作为额外输出段落）**:
${m7aTags.length > 0 ? `- M7A [${m7aTags.join('/')}] 必须回溯性改写行动意义，但不得把三案都写成同一种真相揭露。` : ''}
${hasActiveM7B ? `- M7B [${m7bTags.join('/')}] 仅按当前显影强度执行：${buildM7BIntensityBrief(activeM7BIntensity)} 严禁借余痕新增第二结局、第二反转或解释段。` : ''}`;

  const text = [
    SECTION_ROLE,
    buildV4ExternalStoryProtocol(hasActiveM7B),
    SECTION_WORLD,
    SECTION_ENGINE,
    SECTION_STRUCTURE,
    STORY_SEED_QUALITY_PROTOCOL,
    SECTION_OUTPUT,
  ].join('\n\n');

  return { text, images: visionImage ? [visionImage] : [] };
};
