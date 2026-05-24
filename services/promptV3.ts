// ============================================================================
// V3: Director's Brief Architecture
// 设计原理：以 directive（导演语言）为第一公民，替代 core（理论语言）。
// 每个 M 参数以「导演笔记」的形式注入 AI，而非学术定义卡片。
// 公式升级为 M0-M7A/M7B 双结项。
// ============================================================================

import { NarrativeFieldState, WorldLawConfig, FaceState, PromptFocusState, DirectiveFace, MAxisMixerLevel, MAxisMixerSlot, MAxisMixerState, M7BResidueIntensity } from '../types';
import { getDirective, findItemFull } from './dataRegistry';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { DEFAULT_SV1_STRUCTURE_NAME, DEFAULT_SV2_VOLUME_NAME } from '../data/engine_sv/defaults';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';
import { buildWorldLawLevelPrompt, getWorldLawDisplay, normalizeWorldLawConfig } from './worldLaw';
import { SUR1_ONTOLOGY_KIND_BY_ID, SUR1_ONTOLOGY_KIND_LABEL_CN, Sur1OntologyKind } from '../data/engine_surface/SUR1/ontology';
import { SUR1_DATA } from '../data/engine_surface/SUR1';
import { isFocusableBlock } from '../utils/focusTerms';

// ============================================================================
// 工具函数
// ============================================================================

export const buildWorldLawPrompt = (worldLaw?: WorldLawConfig): string => {
  return buildWorldLawLevelPrompt(normalizeWorldLawConfig(worldLaw));
};

export const getTagsBySuffix = (fieldState: NarrativeFieldState, suffixes: string | string[]): string[] => {
  const sfxArray = Array.isArray(suffixes) ? suffixes : [suffixes];
  return Object.keys(fieldState)
    .filter(k => sfxArray.some(sfx => k.endsWith(sfx)))
    .flatMap(k => fieldState[k]);
};

const M0_MODEL_FORBIDDEN_TERMS = [
  "癔症", "强迫症", "恐惧症", "恋物", "施虐", "受虐", "窥视", "暴露",
  "偏执", "妄想狂", "精神分裂", "忧郁症", "寻常精神病", "孤独症", "自闭症",
  "神经症", "性倒错", "倒错", "精神病", "病理", "临床机制", "病理诊断",
  "患者", "病人", "症状标签", "心理问题", "疯子", "变态"
];

const DIAGNOSTIC_OUTPUT_FORBIDDEN_TERMS = [
  "病理", "临床", "诊断", "患者", "病人", "症状标签", "心理问题", "疯子", "变态"
];

const HARD_BANNED_TERMS = [
  "M0", "M1", "M2", "M3", "M4", "M5", "M6", "M7A", "M7B",
  "SUR1", "SUR2", "SUR3", "SUR4", "SUR5", "SUR6", "SUR7", "SUR8", "SUR9", "SUR10", "SUR-END",
  "SV1_DRIVEN", "SV2_DRIVEN", "FORM_DRIVEN", "SENSORY_FIELD",
  "STRUCTURALIST", "POST_STRUCTURALIST", "THE_REAL",
  "拉康", "齐泽克", "大他者", "Big Other", "Object a", "对象a",
  "符号界", "实在界", "想象界", "异化", "阉割", "圣状", "菲勒斯",
  "能指", "所指", "缝合点", "主人能指", "point de capiton",
  ...DIAGNOSTIC_OUTPUT_FORBIDDEN_TERMS
];

/** 构建硬禁词表：只拦截后台术语、理论术语和旧机器标签 */
export const buildBannedWords = (_fieldState?: NarrativeFieldState): string => {
  return [...new Set(HARD_BANNED_TERMS)].join(', ');
};

const SOFT_AVOID_KEY_SUFFIXES = [
  '_m0', '_c0', '_m1', '_c1', '_m2', '_m3', '_c3', '_m4', '_c4', '_m5', '_m6', '_m7a', '_m7b',
  '_era', '_society', '_gender', '_age', '_profession', '_ideology', '_genre', '_structure', '_volume',
];

const SOFT_AVOID_EXACT_KEYS = ['sur10x'];

type M0ExecutionProfile = {
  promptName: string;
  aliases: string[];
  structuralFunction: string;
  worldLogic: string;
  actionPattern: string;
  pressureTrigger: string;
  endingConstraint: string;
};

const M0_EXECUTION_PROFILES: M0ExecutionProfile[] = [
  {
    promptName: "悬置质询",
    aliases: ["os_neurosis_hysteria", "癔症", "Hysteria"],
    structuralFunction: "主体通过持续向权威、关系或镜像发问来维持自身位置；真正支撑他活下去的不是答案，而是问题仍未落定。",
    worldLogic: "世界像一封迟迟没有回信的信。每个事件都会被体验为“他者到底要我成为什么”的新问题。",
    actionPattern: "反复试探、追问、诱使对方给出命名；当答案接近时，又通过沉默、身体反应、逃开或换题让问题继续悬着。",
    pressureTrigger: "当制度、关系或亲密对象试图给出明确身份、明确答案、明确归属时，主体会制造新的不确定。",
    endingConstraint: "结尾不能写成“获得答案后终于完整”；应让一个问题被保留下来，或让答案本身反过来暴露主体一直依赖问题而活。"
  },
  {
    promptName: "仪式延宕",
    aliases: ["os_neurosis_obsession", "强迫症", "Obsessional Neurosis", "Obsession"],
    structuralFunction: "主体用规则、计划、检查和仪式把欲望延迟到永远不会真正发生的明天。",
    worldLogic: "世界只有在可排序、可核对、可延期时才显得安全；失控不是失败，而是世界边界的松动。",
    actionPattern: "持续准备、反复校验、重新计算、推迟开始；行动看似精密，实际在保护主体不必真正进入欲望。",
    pressureTrigger: "当事件要求他立刻选择、立刻暴露欲望或放弃控制时，仪式会膨胀成行动的替代品。",
    endingConstraint: "结尾不能写成“放下控制后自由”；应让某个完美秩序完成时，显露出它正是囚笼。"
  },
  {
    promptName: "焦虑锚点",
    aliases: ["os_neurosis_phobia", "恐惧症", "Phobia"],
    structuralFunction: "主体把无边界的焦虑钉在一个可命名、可回避的对象上，借此保住世界地图。",
    worldLogic: "世界被切成安全区与危险区；那件被回避的东西不是单纯威胁，而是让焦虑有边界的锚。",
    actionPattern: "绕路、避开、发明借口、设计安全流程；每一次回避都让世界更小，但也让世界暂时可住。",
    pressureTrigger: "当锚点消失、边界被迫穿越或他必须承认真正的恐惧没有名字时，行动会突然失去方向。",
    endingConstraint: "结尾不能写成彻底克服恐惧；应让锚点的移动或消失暴露更深的无名焦虑。"
  },
  {
    promptName: "对象假体",
    aliases: ["os_perversion_fetishism", "恋物", "Fetishism"],
    structuralFunction: "主体明知某个物件只是物件，却仍把它当作欲望回路的开关；对象不是填补缺口，而是让缺口暂时失效。",
    worldLogic: "世界的稳定依赖一个具体物、质感、声音、数字或流程在场；它在场，主体就能继续否认裂缝。",
    actionPattern: "保存、触碰、交换、复原或追索那个对象；行动不是收藏癖，而是维持欲望电路不断电。",
    pressureTrigger: "当对象被夺走、损坏、复制或证明只是普通物时，主体不会醒悟，只会更精确地维护它的必要性。",
    endingConstraint: "结尾不能写成“看穿执着并放下”；应让对象的位置改变后，显出主体一直靠它让现实闭合。"
  },
  {
    promptName: "契约化享乐",
    aliases: ["os_perversion_sadomasochism", "施虐-受虐", "Sadomasochism", "Sadism", "Masochism"],
    structuralFunction: "主体把身体、规则、惩罚或服从组织成一份精确契约，通过契约来证明律法确实存在。",
    worldLogic: "世界不是靠善恶区分，而是靠条款、刻度、同意、边界和执行精度来维持。",
    actionPattern: "订立规则、执行仪式、校准代价、把自己或他人放进结构位置；重点是控制、形式和边界，不是失控暴力。",
    pressureTrigger: "当契约失效、条款被滥用、同意变得模糊或执行者无法再维持中立时，享乐结构开始反噬。",
    endingConstraint: "结尾不能写成猎奇或病态惩罚；应让契约完成时暴露它试图证明的律法本身也有裂缝。"
  },
  {
    promptName: "目光回路",
    aliases: ["os_perversion_scopophilia", "窥视-暴露", "Scopophilia-Exhibitionism", "Scopophilia", "Exhibitionism"],
    structuralFunction: "主体通过看与被看确认自己存在；目光不是感官动作，而是存在证明的回路。",
    worldLogic: "世界由窗口、屏幕、镜头、舞台、门缝、旁观者和曝光机制组织；可见性就是命运。",
    actionPattern: "偷看、设置视角、制造被看见的瞬间、控制谁能看见什么；行动围绕视线的路径和断裂展开。",
    pressureTrigger: "当目光中断、被反向凝视、观看者暴露或无人再看时，主体的存在支点会松动。",
    endingConstraint: "结尾不能把它降成好奇或表演欲；应让最后的可见/不可见状态回头改写主体做过的一切。"
  },
  {
    promptName: "意义过载",
    aliases: ["os_psychosis_paranoia", "偏执", "Paranoia"],
    structuralFunction: "主体通过建造一个高度自洽的解释系统来让世界重新有序；每个细节都像在对他说话。",
    worldLogic: "世界没有偶然，只有尚未破译的指向。秩序不是太少，而是过量到令人窒息。",
    actionPattern: "串联线索、重读巧合、追索隐藏发送者、把无关细节编入同一张因果网。",
    pressureTrigger: "当他人要求他承认“这只是巧合”时，系统会立刻扩张，用新的证据修补裂口。",
    endingConstraint: "结尾不能写成被治好或被嘲笑；应让解释系统在完成的一刻显出它既是庇护所，也是牢笼。"
  },
  {
    promptName: "滤网消失",
    aliases: ["os_psychosis_schizophrenia", "精神分裂", "Schizophrenia"],
    structuralFunction: "主体无法稳定地区分前景与背景、信号与噪音、词与物；世界以过量清晰度同时涌入。",
    worldLogic: "一只苍蝇、一句问候、一盏灯、一封信都具有同等重量；意义不是缺席，而是没有层级。",
    actionPattern: "被细节牵引、在多个信号间跳转、把字面关系当成物理关系处理；行动呈现断裂但不是任意。",
    pressureTrigger: "当场景的信息密度升高，或他被要求按普通优先级行动时，滤网失效会改变选择顺序。",
    endingConstraint: "结尾不能写成混乱奇观；应让某个被忽略的背景细节在最后拥有与主事件同等的命运重量。"
  },
  {
    promptName: "丧失内吞",
    aliases: ["os_psychosis_melancholia", "忧郁症", "Melancholia"],
    structuralFunction: "主体没有把失去之物留在身外，而是把它吞入自身；他不是思念空洞，而是把自己活成空洞。",
    worldLogic: "世界的重力来自一个已经消失却仍在体内工作的对象；时间不向前流，而是围绕丧失沉降。",
    actionPattern: "静止、拒绝替代、把外部机会转化为自我否定；他的判断冷静得像事实，而不是情绪。",
    pressureTrigger: "当别人要求他哀悼、重新开始或把失去之物放回过去时，他会把攻击性转向自身。",
    endingConstraint: "结尾不能写成接受丧失后痊愈；应让失去之物以一个动作、位置或沉默继续住在主体内部。"
  },
  {
    promptName: "补偿锚点",
    aliases: ["os_psychosis_ordinary", "寻常精神病", "Ordinary Psychosis"],
    structuralFunction: "主体靠一个社会身份、关系、工作、信念或日常流程维持正常运转；锚点在，世界就有地板。",
    worldLogic: "日常越得体，越像一座没有地基但维护良好的建筑；稳定来自补偿物，而不是内部确信。",
    actionPattern: "过度认同角色、维护面具、依附流程、精准履行社会功能；所有行动都在保护那个锚点不被抽走。",
    pressureTrigger: "当锚点被撤销、失效或被他人看穿时，崩塌不是逐渐发生，而是世界支撑瞬间缺席。",
    endingConstraint: "结尾不能写成逐步精神崩溃；应让前文完美正常的细节在最后反过来显出它一直是支撑装置。"
  },
  {
    promptName: "感官闭环",
    aliases: ["os_autism", "孤独症", "Autism", "自闭症"],
    structuralFunction: "主体首先通过温度、频率、触感、位置和流程让世界成立；意义必须经过感官秩序才能进入。",
    worldLogic: "世界不是由社交暗示构成，而是由可重复、可感知、可校准的物理关系构成。",
    actionPattern: "维护物件位置、节奏、边界、流程和感官阈值；行动看似静止，实际是在保护一套完整秩序。",
    pressureTrigger: "当外界以含混请求、突发接触、噪音或社交暗示强行入侵时，系统会通过回避、重排或关闭来恢复边界。",
    endingConstraint: "结尾不能写成学会社交或被爱融化；应让关系变化必须通过物件、节奏、空间或感官边界的改变来呈现。"
  }
];

const normalizeM0Lookup = (value?: string | null): string => {
  return (value || '').split('(')[0].trim();
};

const findM0ExecutionProfile = (tag: string, item?: any): M0ExecutionProfile | null => {
  const candidates = [
    tag,
    normalizeM0Lookup(tag),
    item?.id,
    item?.name,
    normalizeM0Lookup(item?.name),
    item?.nameEn,
    normalizeM0Lookup(item?.nameEn),
  ].filter(Boolean).map(String);

  return M0_EXECUTION_PROFILES.find(profile =>
    profile.aliases.some(alias => candidates.includes(alias) || candidates.some(candidate => candidate.includes(alias)))
  ) || null;
};

/** 构建参数复述限制：抽象/后台标签需要转译，但可见材料不作为软禁词 */
export const buildSoftAvoidLabels = (fieldState?: NarrativeFieldState, m7bIntensity?: M7BResidueIntensity): string => {
  if (!fieldState) return "";
  const omitM7B = normalizeM7BIntensity(m7bIntensity) === 'off';
  const tags = Object.entries(fieldState)
    .filter(([key]) => !(
      omitM7B && key.endsWith('_m7b')
    ) && (
      SOFT_AVOID_EXACT_KEYS.includes(key) || SOFT_AVOID_KEY_SUFFIXES.some(suffix => key.endsWith(suffix))
    ))
    .flatMap(([key, values]) => values.map(value => {
      if (key.endsWith('_m0') || key.endsWith('_c0')) {
        const item = findItemFull(value, 'engine_m0') as any;
        return findM0ExecutionProfile(value, item)?.promptName || 'M0结构组织方式';
      }
      return value;
    }));
  const labels = tags.flatMap(tag => {
    const trimmed = tag.trim();
    const stripped = trimmed.split('(')[0].trim();
    return [trimmed, stripped];
  }).filter(label => label.length > 1);
  return [...new Set(labels)].join(', ');
};

const M_SLOT_PROTOCOLS: Record<string, { role: string; guardrail: string }> = {
  engine_m0: {
    role: '这是整部故事的主体结构与世界稳定方式。它不是症状标签、病理诊断、性格标签或题材风味，而是改写 M1-M7A/M7B 每一步如何运作的底层法则。',
    guardrail: '不得把它写成心理问题、异常人格、临床表现或患者故事；必须让它改变推理方式、选择方式、行动节奏、结尾余味和世界被感知的方式。',
  },
  engine_m1: {
    role: '这是主角的结构性缺口和欲望发动机。它可以穿过职业、身份、关系显现，但不等于职业设定、性格弱点或背景创伤。',
    guardrail: '不得把词条写成外部标签；必须让它解释主角为什么会误认 M3、为什么会被 M2 击穿、为什么无法用正常方式生活。',
  },
  engine_m2: {
    role: '这是现有解释系统无法消化的真实遭遇。它不是普通坏事、任务触发器或偶然事件，而是让主角原有语言、秩序、信念突然失效的穿刺点。',
    guardrail: '不得只写事件发生；必须写出主角原先用来理解世界的框架在哪里失灵，以及这次失灵如何不可逆地推动 M3/M4/M5。',
  },
  engine_m3: {
    role: '这是欲望幻想和虚假解药。它不是健康目标、普通梦想或任务奖励，而是主角误以为可以填补 M1 缺口的对象/场景/状态。',
    guardrail: '不得把它写成单纯正向愿望；必须保留诱惑和毒性：它确实能短暂止痛，但越追逐越暴露缺口。',
  },
  engine_m4: {
    role: '这是秩序层面的阻断。它不是单个坏人，而是某种制度、规则、伦理、关系、共同体或语言结构宣布主角的欲望不合法。',
    guardrail: '人物可以作为代理人出现，但不得把 M4 降级成反派斗争；必须让阻断看起来有其真实功能或合理性。',
  },
  engine_m5: {
    role: '这是行动驱力。它不是一次性策略，而是主角反复撞向 M4 的强迫性动作，带有重复性、身体性和无法停下的节律。',
    guardrail: '不得只写一场行动戏；必须让同一种动作/选择/验证/逃避在不同阶段反复出现，并逐渐改变主角和世界。',
  },
  engine_m6: {
    role: '这是终极代价。它不是外部惩罚或普通损失，而是为了让公式闭合，主角必须交出的等价交换物。',
    guardrail: '不得只写“失去某人/失败/死亡”；必须写清交出的深层能力或资格是什么，例如相信、命名、被听见、想要、回家、感受。',
  },
  engine_m7a: {
    role: '这是象征裁决。它不是结尾真相、破案反转或角色顿悟，而是故事结束后，前文所有行动被回溯性重新定性的意义翻转。',
    guardrail: '不得让角色说出结论；必须通过物件位置、行动后果、信息排列或沉默动作，让读者自行发现：主角以为在建设 A，其实生成了 B。',
  },
  engine_m7b: {
    role: '这是 M7A 完成之后仍无法被意义完全吞掉的残留位置。它不负责关闭故事，只决定余痕以末帧、停留镜头或短尾声的哪种形式显影。',
    guardrail: '不得制造第二结尾、第二反转、新谜团或解释段；不得改写 M7A 已经完成的意义裁决。它只能显出还有什么没有被处理完。',
  },
};

const shouldEmitCore = (tag: string, blockId: string, focusState?: PromptFocusState): boolean => {
  return Boolean(focusState?.[tag]);
};

export const DEFAULT_M7B_INTENSITY: M7BResidueIntensity = 'light';
type ActiveM7BResidueIntensity = Exclude<M7BResidueIntensity, 'implicit'>;

export const normalizeM7BIntensity = (intensity?: M7BResidueIntensity): ActiveM7BResidueIntensity =>
  String(intensity) === 'off'
    ? 'off'
    : String(intensity) === 'strong'
      ? 'strong'
      : String(intensity) === 'epilogue'
        ? 'epilogue'
        : DEFAULT_M7B_INTENSITY;

export const M7B_INTENSITY_BRIEFS: Record<ActiveM7BResidueIntensity, string> = {
  off: '关闭：不强制执行 M7B；即使已选 M7B，也只保留故事自然产生的余味，不追加余痕句。',
  light: '轻触：默认档。只在主线最后场面里用 1-2 句留下声音、手势、气味、身体反应、物件错位或空间余震；不得另起新场景。',
  strong: '强显影：M7B 成为主线终点的核心最后画面之一；镜头可多停留 2-5 句，但仍贴在高潮/收束场面内，不新增时间跳转或新事件。',
  epilogue: '后日谈：允许 M7A 完成后追加一个极短尾声场面，展示余痕如何进入日常、公共秩序或关系姿态；不得新增反转、解释、支线或第二结局。'
};

export const buildM7BIntensityBrief = (intensity?: M7BResidueIntensity): string =>
  M7B_INTENSITY_BRIEFS[normalizeM7BIntensity(intensity)];

const M_AXIS_MIXER_SLOT_LABELS: Record<MAxisMixerSlot, string> = {
  engine_m0: 'M0. 精神拓扑',
  engine_m1: 'M1. 缺失主体',
  engine_m2: 'M2. 真实遭遇',
  engine_m3: 'M3. 欲望幻想',
  engine_m4: 'M4. 大他者阻断',
  engine_m5: 'M5. 行动驱力',
  engine_m6: 'M6. 终极代价',
  engine_m7a: 'M7A. 象征裁决',
};

const M_AXIS_MIXER_SLOT_ORDER: MAxisMixerSlot[] = [
  'engine_m0',
  'engine_m1',
  'engine_m2',
  'engine_m3',
  'engine_m4',
  'engine_m5',
  'engine_m6',
  'engine_m7a',
];

const M_AXIS_MIXER_LEVEL_BRIEFS: Record<MAxisMixerLevel, string> = {
  muted: '退隐：该位格仍有效，但不独立展开为段落、解释或支线；只进入选择偏移、语气、动作余波、场域压力或结尾余味。',
  balanced: '标准：按该位格默认结构职责参与故事；由外部故事机关决定戏份，不额外争夺篇幅。',
  amplified: '显影：该位格必须落成可见的关键触发、选择、阻断、行动、代价或结尾回咬；但仍不得变成概念说明。'
};

const M_AXIS_MIXER_SLOT_LEVEL_BRIEFS: Record<MAxisMixerSlot, Record<MAxisMixerLevel, string>> = {
  engine_m0: {
    muted: '退隐：M0 只改写主角的感知、因果判断和物件关系；不得独立解释世界法则，不得写成心理说明。',
    balanced: '标准：M1-M7A 经 M0 逻辑转译，但 M0 不抢外部故事机关。',
    amplified: '显影：世界稳定方式必须成为具体故事机关之一，直接改变主角选择、行动节奏和因果后果。'
  },
  engine_m1: {
    muted: '退隐：M1 只进入主角的迟疑、语气、误认和关系姿态；不得写成性格标签或背景创伤说明。',
    balanced: '标准：M1 解释主角为何追逐 M3、被 M2 击穿、无法用正常方式生活。',
    amplified: '显影：每个重大选择都被 M1 的缺口施压；欲望发动机必须清楚可见。'
  },
  engine_m2: {
    muted: '退隐：M2 可以只是小裂口：一句话、一个物件、一次手势或空间错位；但必须真实改变行动方向。',
    balanced: '标准：M2 作为明确触发事件，迫使主角进入行动链。',
    amplified: '显影：M2 的真实遭遇反复回声，持续改变后续判断、关系和风险。'
  },
  engine_m3: {
    muted: '退隐：M3 只表现为目标、对象、身份或解法上的轻微误认。',
    balanced: '标准：主角追逐一个清晰的虚假解药、对象、身份或方案。',
    amplified: '显影：M3 成为主要诱惑和误导，持续牵引主角选择；但不能被写成真正解药。'
  },
  engine_m4: {
    muted: '退隐：M4 环境化为规则、手续、空间、沉默、旁观者或制度摩擦。',
    balanced: '标准：M4 形成明确外部阻力，推动故事对抗。',
    amplified: '显影：大他者成为主要压力结构；但不得变成单薄反派或单一坏人。'
  },
  engine_m5: {
    muted: '退隐：M5 只作为习惯、小动作、微弱坚持或身体节律出现。',
    balanced: '标准：M5 形成主角可见的行动策略和重复方式。',
    amplified: '显影：故事节奏被 M5 驱动，重复行动必须升级并造成可见后果。'
  },
  engine_m6: {
    muted: '退隐：M6 局部显影为关系裂缝、身体疲惫、小型不可逆损失或选择后的余痛。',
    balanced: '标准：高潮选择必须付出清晰且不可逆的代价。',
    amplified: '显影：M6 成为高潮选择的核心压力；但不得写成惩罚段、苦难展示或机械悲惨。'
  },
  engine_m7a: {
    muted: '退隐：M7A 只让最后选择轻微反向解释前文；不得写总结陈词、哲学判词或作者说明。',
    balanced: '标准：结尾回头改写主角一路行动的意义。',
    amplified: '显影：发生清晰象征裁决，前文被回头改写；但必须由行动和画面完成，不许解释。'
  }
};

const getMAxisMixerLevel = (blockId: string, mixer?: MAxisMixerState): MAxisMixerLevel => {
  if (!mixer || !(blockId in M_AXIS_MIXER_SLOT_LABELS)) return 'balanced';
  return mixer[blockId as MAxisMixerSlot] || 'balanced';
};

const buildMAxisMixerBrief = (blockId: string, level: MAxisMixerLevel): string => {
  const slot = blockId as MAxisMixerSlot;
  return M_AXIS_MIXER_SLOT_LEVEL_BRIEFS[slot]?.[level] || M_AXIS_MIXER_LEVEL_BRIEFS[level];
};

const buildMAxisMixerLine = (blockId: string, mixer?: MAxisMixerState): string => {
  const level = getMAxisMixerLevel(blockId, mixer);
  if (level === 'balanced') return '';
  return `[调音台] ${buildMAxisMixerBrief(blockId, level)}\n`;
};

const buildMAxisMixerAdjustedLines = (mixer?: MAxisMixerState): string[] =>
  M_AXIS_MIXER_SLOT_ORDER
    .filter(slot => (mixer?.[slot] || 'balanced') !== 'balanced')
    .map(slot => {
      const level = mixer?.[slot] || 'balanced';
      return `- ${M_AXIS_MIXER_SLOT_LABELS[slot]}：${buildMAxisMixerBrief(slot, level)}`;
    });

export const buildMAxisMixerProtocol = (mixer?: MAxisMixerState): string => {
  const hasAdjustedTrack = M_AXIS_MIXER_SLOT_ORDER.some(slot => (mixer?.[slot] || 'balanced') !== 'balanced');

  if (!hasAdjustedTrack) return '';

  const adjustedLines = buildMAxisMixerAdjustedLines(mixer);

  return `## M轴调音台协议

调音台只决定位格执行模式，不改变词条含义、公式顺序或因果位置。
- 退隐不是删除：该位格仍必须有效，只是不展开独立段落、解释或支线，而是压入动作、语气、选择偏移、场域压力、关系裂痕或结尾余味。
- 标准不是平均写满：该位格按默认结构职责参与故事，由外部故事机关决定戏份，不能为了补齐 M 轴而平均铺开。
- 显影不是放大词条：它只让该位格功能更清楚地进入关键触发、选择、阻断、行动、代价或结尾回咬；不得变成概念说明。

**本次调音**:
${adjustedLines.join('\n')}`;
};

type MSlotSelectionProfile = {
  blockId: string;
  label: string;
  tags: string[];
  focusedTags: string[];
  foregroundTag?: string;
  backgroundTags: string[];
};

const M_SLOT_SELECTIONS: Array<{ blockId: string; label: string; suffixes: string[] }> = [
  { blockId: 'engine_m0', label: 'M0. 精神拓扑', suffixes: ['_m0', '_c0'] },
  { blockId: 'engine_m1', label: 'M1. 缺失主体', suffixes: ['_m1', '_c1'] },
  { blockId: 'engine_m2', label: 'M2. 真实遭遇', suffixes: ['_m2'] },
  { blockId: 'engine_m3', label: 'M3. 欲望幻想', suffixes: ['_m3', '_c3'] },
  { blockId: 'engine_m4', label: 'M4. 大他者阻断', suffixes: ['_m4', '_c4'] },
  { blockId: 'engine_m5', label: 'M5. 行动驱力', suffixes: ['_m5'] },
  { blockId: 'engine_m6', label: 'M6. 终极代价', suffixes: ['_m6'] },
  { blockId: 'engine_m7a', label: 'M7A. 象征裁决', suffixes: ['_m7a'] },
  { blockId: 'engine_m7b', label: 'M7B. 实在余痕', suffixes: ['_m7b'] },
];

const GLOBAL_FOCUS_SELECTIONS: Array<{ blockId: string; label: string; role: string }> = [
  { blockId: 'skin_genre', label: 'SUR1. 故事类型', role: '必须驱动外部类型发动机、目标、阻力、升级方式和类型落点。' },
  { blockId: 'skin_era', label: 'SUR2. 背景场域', role: '必须生成时代气味、制度材料、生活物件、空间危险和群体秩序。' },
  { blockId: 'skin_society', label: 'SUR4. 社会形态', role: '必须成为可见秩序外壳，实际改变阻断、交易、队列、权限或惩罚。' },
  { blockId: 'skin_everything', label: 'SUR5. 对象预设', role: '必须成为可争夺、保护、交换、损坏或误认的核心对象。' },
  { blockId: 'skin_location', label: 'SUR6. 空间容器', role: '必须成为行动路线、封锁、追逐、藏匿或高潮选择的空间机制。' },
  { blockId: 'skin_profession', label: 'SUR9. 职业身份', role: '必须触发主角行动权限、工具流程、客户关系、许可规则或不可逆选择。' },
  { blockId: 'skin_ideology', label: 'SUR10. 信念预设', role: '必须成为开场解释世界的语言，并在事件中被行动压力改变位置。' },
  { blockId: 'sur10x', label: 'SUR10X. 信念裂度', role: '必须调节主体对信念的当真程度，改变选择的强度和代价边界。' },
  { blockId: 'skin_ending', label: 'SUR-END. 显性收场', role: '只规定最后可见收场画面，不抢走意义裁决。' },
];

const getMSelectionProfiles = (
  fieldState: NarrativeFieldState,
  focusState?: PromptFocusState
): MSlotSelectionProfile[] => M_SLOT_SELECTIONS
  .map(slot => {
    const tags = getTagsBySuffix(fieldState, slot.suffixes);
    const focusedTags = tags.filter(tag => Boolean(focusState?.[tag]));
    const foregroundTag = focusedTags[0] || tags[0];
    return {
      blockId: slot.blockId,
      label: slot.label,
      tags,
      focusedTags,
      foregroundTag,
      backgroundTags: tags.filter(tag => tag !== foregroundTag),
    };
  })
  .filter(profile => profile.tags.length > 0);

const PROMPT_FOCUS_UNIT_GROUPS: Array<{ unit: string; label: string; blocks: string[]; role: string }> = [];

const getPromptFocusUnitKey = (blockId: string, tag: string): string =>
  PROMPT_FOCUS_UNIT_GROUPS.find(group => group.blocks.includes(blockId))?.unit || tag;

const getFocusOrderMap = (fieldState: NarrativeFieldState, focusState?: PromptFocusState): Map<string, number> => {
  const tagBlockMap = Object.entries(fieldState || {}).reduce<Record<string, string>>((acc, [blockId, tags]) => {
    (tags || []).forEach(tag => {
      acc[tag] = blockId;
    });
    return acc;
  }, {});
  const order = new Map<string, number>();
  Object.keys(focusState || {}).forEach(tag => {
    if (!focusState?.[tag] || !tagBlockMap[tag] || !isFocusableBlock(tagBlockMap[tag])) return;
    const unit = getPromptFocusUnitKey(tagBlockMap[tag], tag);
    if (!order.has(unit)) order.set(unit, order.size);
  });
  return order;
};

export const buildAttentionControllerProtocol = (
  fieldState: NarrativeFieldState,
  focusState?: PromptFocusState,
  mAxisMixer?: MAxisMixerState,
  m7bIntensity?: M7BResidueIntensity
): string => {
  const omitM7B = normalizeM7BIntensity(m7bIntensity) === 'off';
  const profiles = getMSelectionProfiles(fieldState, focusState)
    .filter(profile => !(omitM7B && profile.blockId === 'engine_m7b'));
  const focusedProfiles = profiles
    .filter(profile => profile.focusedTags.length > 0 && profile.foregroundTag)
    .map(profile => ({ ...profile, tag: profile.foregroundTag as string }));
  const focusedMTagSet = new Set(profiles.flatMap(profile => profile.focusedTags));
  const focusOrder = getFocusOrderMap(fieldState, focusState);
  const activeUnits = new Set(focusOrder.keys());
  type FocusRecord = { unit: string; line: string; order: number };
  const focusedMRecords: FocusRecord[] = focusedProfiles.map(({ label, tag }) => ({
    unit: tag,
    order: focusOrder.get(tag) ?? 999,
    line: `${label}【${tag}】：必须优先改写主角误认、行动重复、关键选择、代价兑现或结尾回咬。`,
  }));
  const groupedFocusRecords = PROMPT_FOCUS_UNIT_GROUPS.flatMap(group => {
    if (!activeUnits.has(group.unit)) return [];
    const pieces = group.blocks.flatMap(blockId => (fieldState[blockId] || []).map(tag => `【${tag}】`));
    if (pieces.length === 0) return [];
    return [{
      unit: group.unit,
      order: focusOrder.get(group.unit) ?? 999,
      line: `${group.label}${pieces.join('、')}：${group.role}`,
    }];
  });
  const groupedUnitSet = new Set(PROMPT_FOCUS_UNIT_GROUPS.map(group => group.unit));
  const selectedGlobalFocusRecords = GLOBAL_FOCUS_SELECTIONS.filter(selection => isFocusableBlock(selection.blockId)).flatMap(selection => {
    const tags = fieldState[selection.blockId] || [];
    return tags
      .filter(tag => Boolean(focusState?.[tag]) && !focusedMTagSet.has(tag))
      .filter(tag => !groupedUnitSet.has(getPromptFocusUnitKey(selection.blockId, tag)))
      .map(tag => ({
        unit: tag,
        order: focusOrder.get(tag) ?? 999,
        line: `${selection.label}【${tag}】：${selection.role}`,
      }));
  });
  const multiSlotProfiles = profiles.filter(profile => profile.tags.length > 1);

  const focusRecords = [
    ...focusedMRecords,
    ...groupedFocusRecords,
    ...selectedGlobalFocusRecords,
  ]
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  const focusLines = focusRecords.length > 0
    ? [
      `主重点（最高组织权）:\n- ${focusRecords[0].line}`,
      focusRecords.length > 1 ? `副重点（协同约束）:\n${focusRecords.slice(1).map(record => `- ${record.line}`).join('\n')}` : '',
    ].filter(Boolean).join('\n\n')
    : '- 未手动标记重点词条：按 M0 与已选 M7A 维持意义层有效，M1-M6 由外部故事机关自动决定重心。';

  const foregroundLines = multiSlotProfiles.length > 0
    ? multiSlotProfiles.map(profile => {
      const background = profile.backgroundTags.length > 0 ? profile.backgroundTags.map(tag => `【${tag}】`).join('、') : '无';
      const source = profile.focusedTags.length > 0 ? '同槽重点覆盖' : '先选顺序';
      return `- ${profile.label}: 前景化【${profile.foregroundTag}】（${source}）；背景化 ${background}。`;
    }).join('\n')
    : '- 本次没有同槽多词条；无需执行同槽前景化裁决。';

  const adjustedMixerLines = buildMAxisMixerAdjustedLines(mAxisMixer);
  const activeM7BIntensity = normalizeM7BIntensity(m7bIntensity);
  const m7bTags = getTagsBySuffix(fieldState, '_m7b');
  const m7bControlLine = m7bTags.length > 0
    ? `- M7B 余痕形式：${buildM7BIntensityBrief(activeM7BIntensity)} M7B 不参与前景化/背景化，只贴在 M7A 完成后的余震上。`
    : '';
  const mixerLines = [
    ...adjustedMixerLines,
    ...(m7bControlLine ? [m7bControlLine] : []),
  ];
  const mixerBlock = mixerLines.length > 0
    ? mixerLines.join('\n')
    : '- 未调整：M0-M7A 按标准模式执行；若已选 M7B，默认只作轻触余痕。';

  return `## 注意力控制器

只负责分配叙事注意力，不新增剧情事实，不改写公式顺序；外部故事机关仍先成立。

**1. 重点词（组织权）**:
${focusLines}

**2. 同槽前景化（可见权）**:
${foregroundLines}

**3. 调音台（执行可见度）**:
${mixerBlock}

执行规则：
- 重点词决定“围绕什么写”；同槽前景化决定“同一位格谁正面执行”；调音台决定“该位格如何显影”。三者不互相替代。
- 主重点是最高组织矛盾，必须落成动作、物件、关系压力、阻断机制、关键选择或结尾后果；副重点只协同改写材料、节奏、代价或余味。
- 若主重点所在位格被调为退隐，它仍支配因果，但只能低可见度进入动作和场面；若非重点位格被调为显影，它只承担一个必要剧情功能，不得抢走主重点。
- 前景化词条负责正面行动链、可见场景、选择和后果；背景化词条不得消失，只能成为裂痕、反压力、动作延迟、语气错位、误认余味或代价阴影。
- 禁止平均分戏、禁止把双词条融合成圆滑统一人格；它们是裂痕，不是合金。`;
};

export const buildMFocusProtocol = (
  fieldState: NarrativeFieldState,
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity,
  mAxisMixer?: MAxisMixerState
): string => buildAttentionControllerProtocol(fieldState, focusState, mAxisMixer, m7bIntensity);

const sanitizeM7BResidueText = (value: unknown, allowEpilogue: boolean = false): string => {
  const raw = typeof value === 'string' ? value : '';
  const withoutMeta = raw
    .replace(/\s*\|\s*实在余痕\(Σ\):.*$/g, '')
    .replace(/\s*\|\s*Residuum:.*$/gi, '');
  const cleaned = (allowEpilogue ? withoutMeta : withoutMeta
    .replace(/尘埃落定后很久[，,]?\s*/g, '')
    .replace(/尘埃落定后[，,]?\s*/g, '')
    .replace(/故事结束后[，,]?\s*/g, '')
    .replace(/象征裁决之后[，,]?\s*/g, '')
    .replace(/^(后来|几天后|多年后|三个月后|每年这一天|从此)[，,]?\s*/g, ''))
    .trim();
  return cleaned || '把该余痕压缩为最后一帧的感官、物件、声音或身体残留。';
};

const sanitizeM0FallbackText = (value: unknown): string => {
  const raw = typeof value === 'string' ? value : '';
  const cleaned = raw
    .replace(new RegExp(M0_MODEL_FORBIDDEN_TERMS.join('|'), 'g'), '结构')
    .replace(/病[症名]|病名|诊断|临床/g, '结构')
    .replace(/头痛、失声、痉挛、晕厥/g, '身体、沉默、动作延迟或场面调度')
    .replace(/疯[癫狂子]?/g, '失序')
    .trim();
  return cleaned || '让这个结构成为主体维持世界稳定的底层方式，而不是人物标签。';
};

const buildM0Directive = (
  tag: string,
  label: string,
  info: NonNullable<ReturnType<typeof getDirective>>,
  item?: any,
  isFocused: boolean = false,
  mAxisMixer?: MAxisMixerState
): string => {
  const profile = findM0ExecutionProfile(tag, item);
  const promptName = profile?.promptName || '结构组织方式';
  const structuralFunction = profile?.structuralFunction || sanitizeM0FallbackText(info.def);
  const worldLogic = profile?.worldLogic || sanitizeM0FallbackText(info.topology || info.core);
  const actionPattern = profile?.actionPattern || sanitizeM0FallbackText(info.directive);
  const pressureTrigger = profile?.pressureTrigger || '当 M2/M4 打破主体原有稳定方式时，行动必须按该结构重新组织，而不是按普通性格反应处理。';
  const endingConstraint = profile?.endingConstraint || '结尾不能写成治愈、诊断或心理解释；必须让最后选择、物件位置或关系变化回头证明这个结构一直在运作。';

  const mixerLine = buildMAxisMixerLine('engine_m0', mAxisMixer);
  const focusedLines = isFocused
    ? `[导演笔记] ${actionPattern}
[核心触发] ${pressureTrigger}
[结尾约束] ${endingConstraint}
`
    : '';

  return `**${label}**: **【${promptName}】**
[结构职责] ${M_SLOT_PROTOCOLS.engine_m0.role}
[模型转译] 这是 M0 的模型执行名；不得输出、复述或暗示原始临床/精神分析类别。把它写成主体让世界成立的方式，而不是病名、人格缺陷或心理病例。
[定义] ${structuralFunction}
[位格] ${worldLogic}
${mixerLine}${focusedLines}[防误读] ${M_SLOT_PROTOCOLS.engine_m0.guardrail} 禁止在正文出现精神分析、临床、诊断、患者化称呼或“某人有某种心理问题”的说明句；只允许通过选择、对白、场面调度、物件关系、感官秩序和因果后果显影。`;
};

/** 提取单个 M 参数的导演笔记 */
export const buildMDirective = (
  fieldState: NarrativeFieldState,
  suffix: string | string[],
  label: string,
  blockId: string,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity,
  mAxisMixer?: MAxisMixerState
): string | null => {
  const suffixes = Array.isArray(suffix) ? suffix : [suffix];
  const tags = getTagsBySuffix(fieldState, suffixes);
  if (tags.length === 0) return null;

  const parts: string[] = [];
  for (const tag of tags) {
    const face = faceState?.[tag] || faceState?.[blockId] || 'tension';
    const info = getDirective(tag, blockId, face);
    if (!info) continue;
    const item = findItemFull(tag, blockId) as any;

    const isFocusedTag = shouldEmitCore(tag, blockId, focusState);

    if (blockId === 'engine_m0') {
      parts.push(buildM0Directive(tag, label, info, item, isFocusedTag, mAxisMixer).trim());
      continue;
    }

    if (blockId === 'engine_m7b') {
      const intensity = normalizeM7BIntensity(m7bIntensity);
      if (intensity === 'off') continue;
      const residueNature = sanitizeM7BResidueText(info.def || info.core || info.directive, false);
      const formRule = intensity === 'epilogue'
          ? '[后日谈转译] 可以在主线完成后追加极短尾声，显示 M7A 完成后仍无法被意义吞掉的余痕；尾声只能兑现已发生选择的残留后果。'
          : intensity === 'strong'
            ? '[末帧转译] 让余痕成为主线终点的核心最后画面之一；可多停留 2-5 句，但仍贴在高潮/收束场面内，不能另起新事件。'
            : '[末帧转译] 只把它压缩为主线最后场面内 1-2 句声音、手势、气味、身体反应、物件错位或空间余震；不能另起新场景。';
      const boundaryRule = intensity === 'epilogue'
        ? '[边界规则] 后日谈不得制造第二结局、第二反转、新谜团或解释段；不得把主线高潮推迟到尾声里完成。'
        : '[边界规则] 忽略词条中任何“尘埃落定后、后来、三个月后、每年、回到家、走进某处”等后日谈式示例；不得照搬 M7B 词条的长导演笔记或新增剧情。';
      parts.push(`**${label}**: **【${info.name}】**
[结构职责] ${M_SLOT_PROTOCOLS.engine_m7b.role}
[余震性质] ${residueNature}
[显影强度] ${M7B_INTENSITY_BRIEFS[intensity]}
${formRule}
${boundaryRule}`);
      continue;
    }

    const slotProtocol = M_SLOT_PROTOCOLS[blockId];
    const roleLine = slotProtocol ? `[结构职责] ${slotProtocol.role}\n` : '';
    const defLine = info.def ? `[定义] ${info.def}\n` : '';
    const coreLine = info.core && isFocusedTag ? `[核心张力] ${info.core}\n` : '';
    const mixerLine = buildMAxisMixerLine(blockId, mAxisMixer);
    const topologyLine = info.topology ? `[位格] ${info.topology}\n` : '';
    const directiveLine = info.directive && isFocusedTag ? `[导演笔记] ${info.directive}\n` : '';
    const guardrailLine = slotProtocol ? `[防误读] ${slotProtocol.guardrail} 导演笔记中的具体画面只是情感运动示例，必须根据当前 SUR 世界重新发明物理载体；严禁复现示例剧情。\n` : '';
    parts.push(`**${label}**: **【${info.name}】**\n${roleLine}${defLine}${coreLine}${mixerLine}${topologyLine}${directiveLine}${guardrailLine}`);
  }

  return parts.length > 0 ? parts.join('\n') : null;
};

// ============================================================================
// SUR 动态句式构建
// ============================================================================

/** 从已选 SUR 参数构建动态任务句式——与左侧边栏「故事摘要」完全对齐 */
/** 年份格式化：匹配侧边栏前端显示（-125 → 公元前125年，2024 → 公元2024年） */
export const formatYear = (yearStr: string): string => {
  const num = parseInt(yearStr, 10);
  if (isNaN(num)) return yearStr;
  if (num < 0) return `公元前${Math.abs(num)}年`;
  return `公元${num}年`;
};

const AGE_RANGE_MAP: Record<string, string> = {
  '幼年': '6-12', '少年': '13-17', '青年': '18-24', '盛年': '25-30',
  '壮年': '31-40', '中年': '41-50', '知命': '51-60', '花甲': '61-70',
  '古稀': '71-80', '耄者': '80-100', '永生': '∞',
};

const expandAge = (label: string): string => {
  const range = AGE_RANGE_MAP[label];
  return range ? `${label}（${range}岁）` : label;
};

export const buildTaskSentence = (fieldState: NarrativeFieldState, hasActiveM7B: boolean = true): string => {
  const displayName = (t: string) => t.split('(')[0].trim();
  const getByBlock = (blockId: string): string[] =>
    (fieldState[blockId] || []).map(displayName).filter(Boolean);
  const bracket = (s: string) => `【${s}】`;

  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;

  const era = getByBlock('skin_era');
  const society = getByBlock('skin_society');
  const gender = getByBlock('skin_gender');
  const age = getByBlock('skin_age').map(expandAge);
  const profession = getByBlock('skin_profession');
  const fracture = getByBlock('sur10x');
  const ideology = getByBlock('skin_ideology');
  const everything = getByBlock('skin_everything');
  const location = getByBlock('skin_location');
  const ending = getByBlock('skin_ending');

  const genreTags = getTagsBySuffix(fieldState, '_genre');
  const genreNames = genreTags.map(displayName).filter(Boolean);

  const fragments: string[] = [];

  // Fragment A: SUR3+SUR2 — 在【精确坐标】的【场域】世界中
  const hasTime = exactYear || exactCountry;
  if (hasTime || era.length > 0) {
    let w = '在';
    if (hasTime) {
      const timeParts = [exactYear ? formatYear(exactYear) : null, exactCountry].filter(Boolean).join('·');
      w += bracket(timeParts!);
      if (era.length > 0) w += `的${bracket(era.join('、'))}`;
    } else {
      w += bracket(era.join('、'));
    }
    w += '世界中';
    fragments.push(w);
  }

  // Fragment B: SUR4 — 运行于【社会形态】社会体系之下
  if (society.length > 0) fragments.push(`运行于${bracket(society.join('、'))}社会体系之下`);

  // Fragment C: SUR8+SUR7+SUR9 — 一个【年龄阶段/选角呈现】的【职业身份】
  const idParts = [...age, ...gender];
  if (idParts.length > 0 || profession.length > 0) {
    let id = '一个';
    if (idParts.length > 0) id += bracket(idParts.join(''));
    if (profession.length > 0) {
      if (idParts.length > 0) id += '的';
      id += bracket(profession.join('、'));
    }
    fragments.push(id);
  }

  // Fragment D: SUR10X+SUR10 — 带着【信念裂度】的【信念预设】语言
  if (fracture.length > 0 || ideology.length > 0) {
    let belief = '抱着';
    if (fracture.length > 0) belief += bracket(fracture.join('、'));
    if (fracture.length > 0 && ideology.length > 0) belief += '的';
    if (ideology.length > 0) belief += bracket(ideology.join('、'));
    belief += '想法';
    fragments.push(belief);
  }

  // Fragment E: SUR5 — 围绕【对象预设】展开
  if (everything.length > 0) fragments.push(`围绕${bracket(everything.join('、'))}展开争夺`);

  // Fragment F: SUR6 — 事件发生于【空间容器】
  if (location.length > 0) fragments.push(`事件发生于${bracket(location.join('、'))}`);

  // Fragment G: SUR-END — 最终走向【显性收场】
  if (ending.length > 0) fragments.push(`最终走向${bracket(ending.join('、'))}`);

  // Genre 后缀：的【故事类型】故事
  const genreSuffix = genreNames.length > 0 ? `的${bracket(genreNames.join('、'))}故事。` : '的故事。';

  // 组装：前半句指向主体公式与本次参数，后半句为 SUR 场景句式
  const PREFIX = hasActiveM7B
    ? '根据下方主体爱欲精神公式（M0-M7A/M7B 双结项）、本次主体精神参数与故事表层设定参数'
    : '根据下方主体爱欲精神公式（M0-M7A）、本次主体精神参数与故事表层设定参数';

  if (fragments.length === 0 && genreNames.length === 0) {
    return `${PREFIX}，讲一个故事。`;
  }

  if (fragments.length === 0) {
    return `${PREFIX}，讲一个${bracket(genreNames.join('、'))}故事。`;
  }

  return `${PREFIX}，讲一个${fragments.join('，')}${genreSuffix}`;
};

type Sur1TypeMotor = {
  promise: string;
  goal: string;
  resistance: string;
  escalation: string;
  landing: string;
};

const SUR1_TYPE_MOTOR_BY_CATEGORY_ID: Record<string, Sur1TypeMotor> = {
  type_a: {
    promise: '动作/冒险快感必须来自身体行动、风险推进、空间穿越或正面危机处理。',
    goal: '先设一个可见任务：救人、逃离、夺回、抵达、赢下、护送、阻止或活过某个节点。',
    resistance: '阻力来自敌手、地形、追捕、时间、资源短缺、身体损伤、禁区或即时事故。',
    escalation: '每一轮推进都要让距离更短、损伤更重、选择更窄或失败后果更快到来。',
    landing: '落点是一次亲手完成的动作选择及其不可逆后果，而不是解释胜负意义。',
  },
  type_b: {
    promise: '科幻/未来快感必须来自一个“如果此规则成立”的外部机关，而不是概念讲解。',
    goal: '先设一个可验证目标：修复、逃离、接触、证明、关闭、复制、阻止或穿过某个技术/现实边界。',
    resistance: '阻力来自技术规则、系统权限、未知对象、身体限制、实验代价、社会制度或信息不透明。',
    escalation: '每次推进都揭示规则的新代价，让解决方案同时制造更大的伦理、物理或关系风险。',
    landing: '落点兑现“规则反噬行动”的类型余味：主角解决了问题的一端，却改变了人和世界的边界。',
  },
  type_c: {
    promise: '奇幻/神话快感必须来自愿望、禁令、契约、诅咒、神秘法则或世界层级的可拍冲突。',
    goal: '先设一个可见追求：解除、寻找、交换、守护、穿越、归还、继承或完成某个仪式/约定。',
    resistance: '阻力来自禁忌、预言、代价规则、血统/身份门槛、怪异空间、古老秩序或非人判断。',
    escalation: '每次靠近目标都必须触发更严格的交换、更危险的变形或更不可逆的越界。',
    landing: '落点不是单纯奇观展示，而是一个愿望被满足、扭曲、拒收或转嫁后的世界状态。',
  },
  type_d: {
    promise: '武侠/古装快感必须来自江湖、朝堂、门第、礼法、名节、技艺或旧秩序中的行动压力。',
    goal: '先设一个可见目标：护送信物、洗清冤屈、赴约、救人、夺回名分、守住门规或完成委托。',
    resistance: '阻力来自门派规矩、官法、家法、师承债务、名声、身份遮蔽、路途关卡或武力差距。',
    escalation: '每一轮推进都让义理、人情、名分和生存更难同时保全。',
    landing: '落点是一种规矩被亲手遵守、背弃、改写或付出代价后仍无法圆满的余味。',
  },
  type_e: {
    promise: '恐怖快感必须来自安全感被逐层剥夺，而不是单纯怪物、血腥或阴森装饰。',
    goal: '先设一个朴素目标：活下去、离开、确认、救出、封住、熬到天亮或阻止下一次发生。',
    resistance: '阻力来自封闭空间、未知威胁、感染/附着、群体误认、家宅/村社规则、身体失控或信息缺口。',
    escalation: '每次以为安全都要暴露新的不安全：藏身处失效、同伴不可信、规则更残酷、出口变成陷阱。',
    landing: '落点保留恐怖类型的伤口：主角可能逃出事件，但安全秩序已经被证明不再可靠。',
  },
  type_f: {
    promise: '悬疑/谜案快感必须来自信息差、错误判断和行动压力共同推进，而不是最后解释真相。',
    goal: '先设一个可失败目标：找出、证明、阻止、洗清、交换、隐藏或赶在时限前抵达关键事实。',
    resistance: '阻力来自嫌疑关系、程序限制、空间封锁、证词失真、伪线索、权力遮蔽或主角误判。',
    escalation: '每个线索都要改变行动方向或风险结构，不能只增加背景信息。',
    landing: '落点是揭示迫使主角重新选择；真相必须改写前文行动意义，而不是作为旁白答案。',
  },
  type_g: {
    promise: '犯罪/黑帮快感必须来自欲望、债务、忠诚、交易和暴力后果之间的压力。',
    goal: '先设一个可见目标：偷走、交付、保护、报复、脱身、上位、还债或守住某个非法/灰色承诺。',
    resistance: '阻力来自组织规矩、警方压力、债主、背叛、家族/帮派忠诚、赃物易手或暴力升级。',
    escalation: '每次解决眼前麻烦都要欠下更大债、暴露更大身份或把亲密关系拖进危险。',
    landing: '落点兑现选择阵营后的代价：获得控制、逃出生天或完成清算时，某种关系/身份已经无法回头。',
  },
  type_h: {
    promise: '剧情/伦理快感必须来自具体生活问题把人物逼到两种都不干净的选择之间。',
    goal: '先设一个现实目标：保住家、钱、身体、名誉、工作、信仰、关系、判决、治疗或一次公开承认。',
    resistance: '阻力来自家庭义务、社会机器、法律程序、贫困、病痛、身份压力、公共舆论或伦理两难。',
    escalation: '每次妥协都要短暂有效，同时让下一次选择更窄、更伤人、更难公开。',
    landing: '落点是人物亲手选择一个不完美结果，并让生活秩序以新裂缝继续存在。',
  },
  type_i: {
    promise: '喜剧快感必须来自目标严肃、手段失控、误会升级和关系/秩序错位。',
    goal: '先设一个角色认真想完成的小目标：赴约、隐藏、证明、挽回、通过考验、完成工作或维持体面。',
    resistance: '阻力来自社交规则、身份误认、身体笨拙、话语失控、空间撞车、欲望不匹配或小问题连锁放大。',
    escalation: '每次补救都要制造更大的误会、更公开的尴尬或更荒唐的连锁后果。',
    landing: '落点是笑料后的关系重排：体面被戳破，但真实需求、权力位置或亲密关系发生改变。',
  },
  type_j: {
    promise: '爱情/亲密快感必须来自两个人靠近时，关系目标、外部阻力和情感代价同时升级。',
    goal: '先设一个可见亲密目标：见面、告白、守约、共同逃离、维持假关系、修复裂痕或做出选择。',
    resistance: '阻力来自时间、距离、阶层、礼法、身份、契约、误会、第三关系、伦理边界或现实责任。',
    escalation: '每次靠近都要让失去、暴露、背叛、等待或选择成本更高。',
    landing: '落点不是必须团圆或分离，而是亲密关系被一次不可逆选择重新命名。',
  },
  type_k: {
    promise: '艺术/先锋快感可以改变观看方式，但仍必须有可复述的外部行动和因果压力。',
    goal: '先设一个极简可见目标：等待、抵达、完成仪式、说出一句话、保住一物、穿过空间或结束表演。',
    resistance: '阻力来自感知错位、形式规则、社会惯例、沉默、重复动作、时间变形、身体疲惫或关系空洞。',
    escalation: '每次重复都要改变物件、身体、空间或关系位置，不能只增加抽象氛围。',
    landing: '落点可以开放，但必须让一个动作/物件/关系状态发生不可逆位移。',
  },
  type_l: {
    promise: '音乐/表演快感必须来自声音、身体、舞台和幕后现实互相施压。',
    goal: '先设一个可见目标：登台、完成排练、守住声音、赢下对决、录完一段、救回演出或停止表演。',
    resistance: '阻力来自身体极限、舞台规矩、观众目光、合同、团队关系、幕后秘密、节奏失控或公共评价。',
    escalation: '每次接近表演时刻都要让声音/身体/关系/公众后果更难承受。',
    landing: '落点是一场表演或拒绝表演改变人物关系与公共可见性。',
  },
};

const SUR1_ONTOLOGY_EXECUTION_BRIEFS: Record<Sur1OntologyKind, string> = {
  realist_type: '本体权限：现实经验类型。不得仅因类型名自动添加奇观本体；用现实目标、阻力、交易、误会、追逐、调查、关系或公共压力制造类型快感。',
  conditional_ontology: '本体权限：条件型类型。先服从世界法则与 SUR2/SUR3；未被授权的超常、科技或奇观材料必须折译为当前坐标可信的同构机关。',
  spectacle_ontology: '本体权限：奇观本体类型。只有被世界法则、SUR2/SUR3 或用户输入授权时才按字面成立；否则保留类型运动，折译奇观功能。',
};

const findSur1CategoryId = (itemId?: string): string | undefined => {
  if (!itemId) return undefined;
  return SUR1_DATA.find(category => category.items.some(item => item.id === itemId))?.id;
};

const buildSur1TypeMotorLine = (item: any): string => {
  const categoryId = findSur1CategoryId(item?.id);
  const motor = categoryId ? SUR1_TYPE_MOTOR_BY_CATEGORY_ID[categoryId] : undefined;
  const customMechanics = item?.patch?.mechanics;

  if (customMechanics) {
    return `类型发动机：${customMechanics}`;
  }

  if (!motor) {
    return '类型发动机：先把类型名落实为可见目标、阻力语法、升级方式和类型落点。';
  }

  return `类型发动机：类型承诺=${motor.promise} 可见目标=${motor.goal} 阻力语法=${motor.resistance} 升级方式=${motor.escalation} 类型落点=${motor.landing}`;
};

const extractSur1Focus = (item: any, fallbackName: string): string => {
  const def = String(item?.def || '').trim();
  const match = def.match(/^以(.+?)为识别重点/);
  return (match?.[1] || fallbackName).replace(/[。；;，,]$/g, '').trim();
};

const buildSur1DifferentiatorLine = (item: any, name: string): string => {
  const focus = extractSur1Focus(item, name);
  return `词条差异：围绕「${focus}」改写上述发动机，至少改变可见目标、阻力来源、升级方式或类型落点之一。`;
};

/** 构建 SUR 参数位置说明（按叙事功能分类，标注与M轴的接口关系） */
export const buildSurNotes = (fieldState: NarrativeFieldState, faceState?: FaceState): string => {
  const displayName = (t: string) => t.split('(')[0].trim();

  const resolveDirective = (item: any, face: DirectiveFace): string | null => {
    if (!item?.directive) return null;
    if (typeof item.directive === 'string') return item.directive;
    return item.directive[face] || item.directive['tension'] || null;
  };

  const getItemNotes = (tags: string[], includeDirective: boolean = true): string[] => {
    const notes: string[] = [];
    for (const tag of tags) {
      const item = findItemFull(tag) as any;
      if (item?.def) {
        const face: DirectiveFace = faceState?.[tag] || 'tension';
        const dir = resolveDirective(item, face);
        let note = `- **【${item.name || displayName(tag)}】**: ${item.def}`;
        if (includeDirective && dir) note += `\n  → 叙事指令：${dir}`;
        notes.push(note);
      }
    }
    return notes;
  };

  const getSur1Notes = (tags: string[]): string[] => {
    const notes: string[] = [];
    for (const tag of tags) {
      const item = findItemFull(tag) as any;
      const name = item?.name || displayName(tag);
      const def = item?.def || '';
      const kind = item?.id ? SUR1_ONTOLOGY_KIND_BY_ID[item.id] : undefined;
      const boundary = def ? `\n  - 类型边界：${def}` : '';
      const motorLine = buildSur1TypeMotorLine(item);
      const differentiatorLine = buildSur1DifferentiatorLine(item, name);
      const kindLine = kind ? `\n  - ${SUR1_ONTOLOGY_EXECUTION_BRIEFS[kind]}` : '';
      notes.push(`- **【${name}】**${boundary}
  - ${motorLine}
  - ${differentiatorLine}${kindLine}`);
    }
    return notes;
  };

  const categories: { label: string; desc: string; tags: string[]; includeDirective?: boolean }[] = [
    {
      label: 'SUR1. 故事类型·外部发动机',
      desc: '故事怎样运动。SUR1 负责类型承诺、可见目标、阻力语法、升级方式和类型落点；具体词条必须改写其中至少一项。',
      tags: getTagsBySuffix(fieldState, '_genre'),
    },
    {
      label: 'SUR2. 背景场域·全局质感',
      desc: '故事的血肉场域与世界质感。它不只是视觉滤镜，而要生成可见制度、空间材料、权力气味、日常物件、危险来源、公共秩序和群体行为；所有 M 参数都要穿过这个场域变成可拍事件。',
      tags: getTagsBySuffix(fieldState, '_era'),
      includeDirective: false,
    },
    {
      label: 'SUR4. 社会形态 → 可见秩序外壳',
      desc: '只提供人物所处的制度、组织、共同体或秩序外壳；不替 M4 解释阻断原因。',
      tags: getTagsBySuffix(fieldState, '_society'),
    },
    {
      label: 'SUR7/8. 选角呈现与年龄阶段',
      desc: '人物在画面、称谓和互动中如何被呈现，以及进入故事时处在什么年岁区间；不解释动机，不决定精神结构。',
      tags: [...getTagsBySuffix(fieldState, '_gender'), ...getTagsBySuffix(fieldState, '_age')],
    },
    {
      label: 'SUR9. 职业身份 → 表层身份预设',
      desc: '只回答人物以什么社会身份、职业岗位或登记状态进入故事世界；不解释动机，不决定精神结构。',
      tags: getTagsBySuffix(fieldState, '_profession'),
    },
    {
      label: 'SUR10/10X. 信念预设 → 开场信念语言',
      desc: 'SUR10 = 人物开场时用什么信念语言解释世界。SUR10X = 人物与该信念的粘合强度。它们可以影响话语、理由和姿态，但不解释缺口，不规定终点。',
      tags: [...(fieldState['sur10x'] || []), ...getTagsBySuffix(fieldState, '_ideology')],
    },
    {
      label: 'SUR5. 对象预设 → 表层对象锚点',
      desc: '故事追逐的对象——只提供可被追寻、争夺、交换或保护的表层锚点。',
      tags: getTagsBySuffix(fieldState, '_everything'),
    },
    {
      label: 'SUR6. 空间容器 → 表层地点预设',
      desc: '只回答事件发生在什么可见空间里；不解释冲突来源，不预写结局。',
      tags: getTagsBySuffix(fieldState, '_location'),
    },
    {
      label: 'SUR-END. 显性收场 → 可见终端事件',
      desc: '故事表层的最后一帧——只描述 M6 代价兑现后的可见事件与画面停点；意义裁决交给 M7A，身体余味交给 M7B。',
      tags: getTagsBySuffix(fieldState, '_ending'),
    },
  ];

  const sections: string[] = [];
  for (const cat of categories) {
    const items = cat.label.startsWith('SUR1.')
      ? getSur1Notes(cat.tags)
      : getItemNotes(cat.tags, cat.includeDirective !== false);
    if (items.length > 0) {
      sections.push(`[${cat.label}]\n${cat.desc}\n${items.join('\n')}`);
    }
  }

  // === SUR 冲突裁决协议（按条件触发，单选时不注入，省 token）===
  const genreTags = getTagsBySuffix(fieldState, '_genre');
  const eraTags = getTagsBySuffix(fieldState, '_era');
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  const hasSpacetime = !!(exactYear || exactCountry);

  const conflictRules: string[] = [];

  if (genreTags.length >= 2) {
    conflictRules.push('- [SUR1×SUR1 双类型裁决] 按选择顺序——第一个故事类型 = 主控叙事节奏（故事骨架按此类型运作），第二个 = 类型偏移（在主类型框架内注入另一种类型的元素和期待）。例：「爱情+复仇」= 爱情故事中复仇是并发动力；「复仇+爱情」= 复仇故事中爱情是致命变量。严禁融合为无特征的中间态。');
  }

  if (eraTags.length >= 2) {
    conflictRules.push('- [SUR2×SUR2 双场域裁决] 按选择顺序——第一个背景场域 = 主控世界观（定义物理框架和基底规则），第二个 = 内容注入（在前者的框架内提供元素和偏移）。例：「赛博朋克+武侠」= 赛博朋克世界里的冷兵器门派之争；「武侠+赛博朋克」= 武侠世界里人人装着义肢和机械臂。严禁融合为无特征的中间态。');
  }

  if (genreTags.length >= 1 && eraTags.length >= 1) {
    conflictRules.push('- [SUR1×SUR2 类型与场域分工] SUR1（故事类型）管「故事怎样运动」——主冲突形态、事件升级、情感/悬疑/奇观的释放节奏、类型期待。SUR2（背景场域）管「故事由什么血肉构成」——宏观时代母体、制度气味、生活材料和群体行为。SUR1 可以要求类型快感不能失效，但不能单独授权科幻/奇幻/奇观本体真实存在；只有当世界法则、SUR2/SUR3 或用户输入明确授权时，科幻/奇幻材料才按字面进入故事现实。若未授权，SUR1 必须转译为同一坐标可信的目标、阻断、误读、公共神话、装备能力、制度实验或同构事件机关。两者叠加后向下生成一切具体参数——身份、信念、对象预设、空间容器都必须穿上这层染色后的衣壳。');
  }

  if (eraTags.length >= 1 && hasSpacetime) {
    conflictRules.push('- [SUR2×SUR3 场域预设与精确坐标] SUR2 是场域预设包，可能已经包含隐含时代、地域、制度、危险来源、公共情绪和生活材料；SUR3 只有在用户主动选择时，才作为精确坐标校准器进入。二者共存时，不要求平均体现：先用 SUR3 固定现实域、时间锚、空间锚、尺度边界、物理现实、技术边界和文化接口，再把 SUR2 转成该坐标内的前夕、余波、外围、异地回声、同构局势、移植版本或权力语法。若 SUR2 的专名事件与 SUR3 冲突，不复制专名事件，只保留其制度张力、物件系统、危险来源、群体行为和情绪方向。');
  }

  const conflictBlock = conflictRules.length > 0
    ? `\n**SUR 冲突裁决协议**:\n${conflictRules.join('\n')}\n`
    : '';

  return sections.length > 0 ? `\n**SUR 表层设定参数**:\n以下为本次表层设定，必须转译为可拍事件、世界材料、行动权限、空间压力和结尾物态。\n${conflictBlock}\n${sections.join('\n\n')}` : '';
};

// ============================================================================
// V3 共享常量（供分歧点 + 圣经复用）
// ============================================================================

export const V3_FORMULA = `## 主体爱欲精神公式（M0-M7A/M7B）

本公式基于拉康精神分析理论，用来规定主角的爱欲精神运动。M0-M7A/M7B 是深层精神坐标，不是外部剧情大纲；它们决定人物为什么痛、为什么误认、为什么行动、为什么付出代价，以及结尾如何回头改写前文意义。外部故事仍必须作为完整、精彩、可复述的文学故事成立。

**Story = M0 {[(M1↔M2↔M3)/M4]×M5} ⇒Act M6 → (M7A◇M7B) ↺ M1'**

M0 = 精神拓扑：主角的结构组织方式与世界稳定方式，决定公式内一切运算的法则；它不是病名、诊断、异常人格或心理问题。
M1 = 缺失主体：结构性不完整的主体——缺口本身就是欲望的发动机。它可以穿过职业/身份外壳显现，但不由职业本身决定。
M2 = 真实遭遇：主角现有框架无法消化的不可逆事件——不只是「坏事发生」，而是「现有语言和逻辑处理不了的事」。
M3 = 欲望幻想：主体以为能填补缺失的那个东西。
M4 = 大他者阻断：不是某个敌人，而是制度/秩序/规则层面的拒绝——整个系统宣布「你的欲望不合法」。不一定是邪恶的。
M5 = 行动驱力：不是一次性策略，而是主体反复撞向 M4 的强迫性动作——带有重复性和身体性。不一定是暴力。
M6 = 终极代价：为让公式闭合，必须放弃的等价交换物。
M7A = 象征裁决（缝合点）：故事结束后，所有之前的情节突然翻转了意义的那个回溯点。严禁由角色在正文中直接说出。
M7B = 实在余痕：M7A 已经完成后，仍贴在最后一帧上的不可消化残留。

**辩证法机制**:
- M0-M6 是时间性展开。每个参数在它发生的那一刻都有自己的体验面向（正面/暗面），由导演笔记指定。
- M7A 是缝合点——不是链条的最后一环，而是回溯性翻转：当故事结束，之前所有环节的意义突然改变。M7A 通过情节安排实现，不通过角色宣告。严禁角色在正文中总结顿悟（如「他终于明白了……」「她看清了……」）。角色可以沉默、可以做出一个不被解释的动作，但不得说出意义。
- M7B 和 M7A 是同一枚硬币的两面：M7A 负责完成故事的意义裁决，M7B 负责裁决完成后仍无法被意义吞掉的残留。M7B 不改变 M7A，不制造第二结尾；它只按当前显影档位决定余痕形式：关闭、末帧轻触、末帧强显影，或极短后日谈。

**M轴与SUR轴的关系**:
- M0-M7A/M7B 是结构——主角精神运动的必然位置。未指定的 M 参数不要求单独占据场景，只允许由外部故事机关自然补位；不得主动发明新的术语级 M 词条。未指定 M7B 时不得主动追加独立余痕段，只保留故事自然产生的结尾余味。
- SUR1-SUR10 + SUR-END 是表层设定参数（故事类型、背景场域、时空、社会形态、身份、信念与显性收场等）——创作者主动选择的现象层元素。被指定的是这个故事的重心，未指定的由你自由发挥。SUR1 决定外部类型运动；SUR-END 只能规定最后可见的外部收场，不能裁决故事意义；意义归 M7A，余痕形式由 M7B 显影档位控制。
- SUR 对 M 的操作是「提供物理载体」：M 定义精神运动的逻辑（如 M4="秩序拒绝你的欲望"），SUR 决定这个逻辑在故事世界中的物质形态（如 M4 在赛博朋克中是信用评分归零，在武侠中是被逐出师门）。换一层皮肤，逻辑的形状变了，但逻辑本身不能变。

**同一槽位双词条法则**:
当同一个 M 槽位装填了两个词条时：
- 它们之间的关系不是「叠加」而是「张力对冲」。
- 当同一槽位的两个词条代表同一个人内部的两股相反的力：一个是他自己承认的欲望，另一个是他不敢承认的欲望。
- 被前景化的双词条，必须在同一个节点/场景里发生不可两全选择，并在后续兑现后果。
- 未前景化的双词条作为暗流存在，进入动作、语气、误认和余味，不强制大场面兑现。
- 严禁将同一槽位的两个词条融合为一个统一人格。它们是裂痕，不是合金。`;

export const buildV3Formula = (hasActiveM7B: boolean): string => {
  if (hasActiveM7B) return V3_FORMULA;
  return `## 主体爱欲精神公式（M0-M7A）

本公式基于拉康精神分析理论，用来规定主角的爱欲精神运动。M0-M7A 是深层精神坐标，不是外部剧情大纲；它们决定人物为什么痛、为什么误认、为什么行动、为什么付出代价，以及结尾如何回头改写前文意义。外部故事仍必须作为完整、精彩、可复述的文学故事成立。

**Story = M0 {[(M1↔M2↔M3)/M4]×M5} ⇒Act M6 → M7A ↺ M1'**

M0 = 精神拓扑：主角的结构组织方式与世界稳定方式，决定公式内一切运算的法则；它不是病名、诊断、异常人格或心理问题。
M1 = 缺失主体：结构性不完整的主体——缺口本身就是欲望的发动机。它可以穿过职业/身份外壳显现，但不由职业本身决定。
M2 = 真实遭遇：主角现有框架无法消化的不可逆事件——不只是「坏事发生」，而是「现有语言和逻辑处理不了的事」。
M3 = 欲望幻想：主体以为能填补缺失的那个东西。
M4 = 大他者阻断：不是某个敌人，而是制度/秩序/规则层面的拒绝——整个系统宣布「你的欲望不合法」。不一定是邪恶的。
M5 = 行动驱力：不是一次性策略，而是主体反复撞向 M4 的强迫性动作——带有重复性和身体性。不一定是暴力。
M6 = 终极代价：为让公式闭合，必须放弃的等价交换物。
M7A = 象征裁决（缝合点）：故事结束后，所有之前的情节突然翻转了意义的那个回溯点。严禁由角色在正文中直接说出。

**辩证法机制**:
- M0-M6 是时间性展开。每个参数在它发生的那一刻都有自己的体验面向（正面/暗面），由导演笔记指定。
- M7A 是缝合点——不是链条的最后一环，而是回溯性翻转：当故事结束，之前所有环节的意义突然改变。M7A 通过情节安排实现，不通过角色宣告。严禁角色在正文中总结顿悟（如「他终于明白了……」「她看清了……」）。角色可以沉默、可以做出一个不被解释的动作，但不得说出意义。

**M轴与SUR轴的关系**:
- M0-M7A 是结构——主角精神运动的必然位置。未指定的 M 参数不要求单独占据场景，只允许由外部故事机关自然补位；不得主动发明新的术语级 M 词条。
- SUR1-SUR10 + SUR-END 是表层设定参数（故事类型、背景场域、时空、社会形态、身份、信念与显性收场等）——创作者主动选择的现象层元素。被指定的是这个故事的重心，未指定的由你自由发挥。SUR1 决定外部类型运动；SUR-END 只能规定最后可见的外部收场，不能裁决故事意义；意义归 M7A。
- SUR 对 M 的操作是「提供物理载体」：M 定义精神运动的逻辑，SUR 决定这个逻辑在故事世界中的物质形态。换一层皮肤，逻辑的形状变了，但逻辑本身不能变。

**同一槽位双词条法则**:
当同一个 M 槽位装填了两个词条时：
- 它们之间的关系不是「叠加」而是「张力对冲」。
- 当同一槽位的两个词条代表同一个人内部的两股相反的力：一个是他自己承认的欲望，另一个是他不敢承认的欲望。
- 被前景化的双词条，必须在同一个节点/场景里发生不可两全选择，并在后续兑现后果。
- 未前景化的双词条作为暗流存在，进入动作、语气、误认和余味，不强制大场面兑现。
- 严禁将同一槽位的两个词条融合为一个统一人格。它们是裂痕，不是合金。`;
};

export const V3_LAWS = `## 创作铁律

命名：严禁通用名（Tom/Alice/小明）。严禁网文中二词。默认国际化，无中国风标签则严禁中文名。基于时空设定构思独特真名。
禁令：严禁正文出现 M0-M7A/M7B 标签原词。严禁出现 M0 的临床原名、诊断式称呼、患者化称呼或“某人患有/属于某种结构”的说明句。严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工说明书语法。严禁使用「读者会/读者在此刻/观众会」等元叙事句式，严禁叙述者替读者总结故事的意义。
面具：故事首先作为合格类型片运作。99%完美类型片，1%视差裂痕。模仿底层逻辑，严禁堆砌表层符号。
冲突通则：当后续任一 M 词条的表面方向与 M0 发生冲突时，优先按 M0 重新编码；它可以变形、加深、转向、伪装成突破或清醒，但不能被写成真正跳出该系统的解脱。若 M5 与 M0 表面冲突，M5 的“醒来”必须被改写为该结构的进一步自洽化，而不是摆脱结构或被心理治愈。`;

export const V3_READING_ORDER = `## 阅读顺序

请按以下顺序理解本任务：
1. 先读取 SUR1/SUR2/SUR3 与世界法则，确定本次故事的类型承诺、现实/超现实权限、时代坐标和世界材料边界。
2. 再读取 SUR4-SUR-END，把职业、对象、空间、制度、身份、信念和显性收场转译为当前世界内可行动、可争夺、可阻断、可付出代价的物理载体。
3. 先搭故事横截面：把锁定事实或参考范围落成一个可拍的外部局面，至少包括世界已在运行、失衡时刻、第一个画面、外部目标、外部阻碍和失败后果。
4. 然后先搭外部故事机关：谁为了 X 做 Y，被 Z 阻止，局势如何升级到必须亲手选择 W。这个机关必须在不依赖任何 M 术语的情况下也能成立。
5. 最后让 M0-M7A/M7B 进入这个事件链内部，污染动机、误认、重复、代价和结尾意义；M7A 回头改写前文，M7B 只按显影档位留下余波。`;

export const buildV3ReadingOrder = (hasActiveM7B: boolean): string =>
  hasActiveM7B
    ? V3_READING_ORDER
    : V3_READING_ORDER
      .replace(/M0-M7A\/M7B/g, 'M0-M7A')
      .replace('；M7A 回头改写前文，M7B 只按显影档位留下余波。', '；M7A 回头改写前文。');

export const buildV3Laws = (hasActiveM7B: boolean): string =>
  hasActiveM7B ? V3_LAWS : V3_LAWS.replace(/M0-M7A\/M7B/g, 'M0-M7A');

export const V3_DIVERGENCE_PROTOCOL = `## 叙事创作协议

**创作目标**:
现在要生成的是三条可发展为完整作品的、带精神分析内核的类型片/强情节微型小说大纲，而不是最终定稿正文，也不是主体精神结构说明。每个方案必须先确定本次要遵守的锁定事实或参考范围，并从中抽出故事横截面：人物、物件、空间、身体状态、关系动作、事件现场，或用户指定要保留的氛围/构图/世界材料。若用户提供图像/文本，先服从用户文字、图片用途和手动修改；若未提供，则由已选参数先生成具体的人、物、空间、关系动作或事件现场。故事机关必须能脱离术语复述，但它的目标、误认、阻断、重复动作、代价和结尾回咬必须从锁定事实/参考范围中的行动张力内生。M 层不是外部剧情模板，而是进入故事机关之后改变行动意义的暗线裁决；真正的外部故事必须由锁定事实/参考范围、故事横截面、SUR 世界、角色行动、事件升级、已选故事类型和你主动发明的叙事机制共同生成。文学性服务于叙事，不得把故事写成论文、说明书、情绪散文或参数清单。

**最高裁决**:
- 故事好看、完整、自然、可复述 > 世界观一致 > 外部故事机关成立 > 精神分析内核回咬 > 单个参数细节 > 文学修辞。
- 参数只服务故事机器：若参数互相冲突，先保住世界一致和强情节链条，再转译参数功能；不得为了逐项合规把故事写成怪异拼贴。
- 外部看必须是一条地道的微型类型片/强情节故事；内部分析时才显出 M0-M7A/M7B 的爱欲运动。正文不能依赖术语才成立。

**强故事机关优先原则**:
- 先让锁定事实/参考范围和故事横截面长出“删掉术语仍然好看”的外部故事，再让 M 轴检验并加深其误认、重复、代价和回咬。若故事与用户创意、图片用途、故事横截面和行动张力无关，只靠结尾解释才显得精神分析，视为失败。
- 每个 Pitch 至少包含一个硬戏剧机关：信息不对称、错误任务、被迫共谋、误杀/误救、目击者压力、倒计时、空间封锁、资源短缺、身份暴露、契约陷阱、背叛交换、救人与自保不可兼得。
- 高潮必须是主角亲手做出的不可逆选择，不是事故发生、真相揭晓、旁人解释、环境压垮或氛围自然消散。
- 结尾的厉害之处不是“很有余韵”，而是读者回头发现：前半段每一个看似合理的行动，都在把主角推向他自己制造的代价。

**双轨叙事裁决**:
- 外轨 = SUR1 故事类型 + SUR2 背景场域 + SUR 世界载体：负责故事如何精彩、悬疑、爱情、奇幻、惊悚、史诗化或荒诞化地发生，也负责这个精彩故事由什么制度、空间、物件、危险和群体行为构成。观众先看到的是外部故事，再在故事中体会主体精神。
- 内轨 = M0-M7A/M7B：负责主体为什么痛、为什么误认、为什么撞向阻断、为什么付出代价，以及结尾如何回头改写主体行动。
- M0/M1/M3/M7 更偏主体内部精神斗争；M2/M4/M5/M6 必须在外部叙事上放大为可见事件、持续压力、行动后果和世界/关系变化。
- 生成顺序上，先裁决锁定事实/参考范围，再建立外部故事机关，最后让 M 轴进入行动链；意义裁决上，M0/M7A 可以回头改写这个机关。严禁为了 M 轴合规牺牲故事性。
- 严禁把 M 层逐项写成有板有眼的参数清单。正确做法是：用 SUR1 和外部发明保证故事本身精彩，用 M 层让故事在结尾变得更深。

**SUR1/SUR2 血肉生成职责**:
- SUR1 不是普通色调标签，而是外部叙事发动机：每个 Pitch 的主冲突、事件升级、情感/悬疑/奇观释放方式和结尾类型落点，都必须能看出它由 SUR1 驱动。
- SUR2 不是普通视觉滤镜，而是故事血肉场域：它必须生成具体制度、空间材料、权力气味、生活物件、危险来源、公共秩序和群体行为。不要只写氛围词，要让角色真的在这个场域里交易、躲避、被检查、被诱惑、被追赶或被规训。若 SUR3 已明确，SUR2 要被校准为该坐标内的前夕、余波、外围、异地回声、同构局势、移植版本或权力语法。
- SUR1×SUR2 必须相互翻译：SUR1 提供“故事怎样运动”，SUR2 提供“故事用什么世界材料运动”。例如爱情不能只写相爱，必须变成该场域中可见的礼法、信物、距离、误会、目光和不可说；末世暴君场域不能只写奢华火焰，必须变成税令、替罪羊、祭典、巡逻、废墟经济、队列恐慌或公共狂欢。
- SUR3 是精确坐标校准器，不是第二个世界观生成器：它只固定现实域、时间锚、空间锚和尺度边界。两者同时出现时，不要求平均体现；SUR3 校准坐标，SUR2 提供该坐标内可成立的制度气味、生活材料、危险来源和公共情绪，不得写成两个互相独立的宇宙。
- 若只选择其中一层，就只输出已被选择那层的可兼容推演，不要补写未选层的裁决或注解。
- 三案的主导观看方式必须错开：PLOT 正面看事件运动；FORM 斜目而视一个可见载体；ATMOSPHERE 沉进空间、环境、身体感和群体秩序。FORM 的载体必须来自故事材料本身，不得从 SV2 词条名、数字标题或章节数量里硬造。不要三案都落回同一种“空容器”终点。
- PLOT / FORM / ATMOSPHERE 只是观看入口，不是情节强弱等级。三案都必须有完整故事脊柱、可见目标、升级阻断、高潮选择和代价兑现；FORM/ATMOSPHERE 不得变成弱情节散文或纯场域诗。
- 若已选 SUR1，每个 Pitch 至少要让一个关键事件由 SUR1 的类型动力触发；若未选 SUR1，不得偷套未选类型模板，外部故事机关必须从 SUR3/SUR4/SUR5/SUR6/SUR9、重点词和 M4/M5 压力中生成。若已选 SUR2，则至少一个关键阻断或反转要由 SUR2 的场域机制触发。
- 三案不是同一故事换三个壳，而是三个不同的起跑问题：PLOT 先问“外部公共问题如何逼出决定”，FORM 先问“哪个可见载体在流转、失真、被夺回或被污染”，ATMOSPHERE 先问“哪个空间/环境在持续压缩身体与可行动范围”。
- 三案必须分别由不同的下一步触发：PLOT 由事件升级触发，FORM 由载体转手、损坏、误认或改写触发，ATMOSPHERE 由封锁、耗损、气候、噪声、气味或拥挤变化触发。若把某案的核心轴去掉后，它仍能无损替换成另一案，只换词不换因果，就必须重写。

**SUR1 故事类型执行协议（仅已选 SUR1 时强制）**:
SUR1 必须落成五个执行部件：
1. 类型承诺：这个故事承诺给读者什么类型快感，例如爱情的克制与错过、悬疑的发现与反转、复仇的追索与反噬、逃杀的压迫与脱身、奇幻的未知与奇观。
2. 外部目标：主角在表层故事中必须追求一个可见、可阻断、可失败、可复述的目标。这个目标可以服务 M3/M5，但不能只是内心状态。
3. 阻力语法：阻碍必须符合该类型的常见运动方式，例如礼法/误会/阶级差、追捕/倒计时/空间封锁、谜团/假线索/证据错位、敌手/契约/禁令等。
4. 升级方式：事件必须一层层变强，不得只重复同一个冲突。每个节点至少让目标更难、关系更紧、信息更危险、空间更窄或代价更不可逆。
5. 类型落点：结尾必须给出类型意义上的满足或反满足，例如相认、错过、揭露、逃脱、夺回、失去、反杀、沉默拥抱、信物归位、秩序重排等。
- 严禁只把 SUR1 写成氛围、题材名、结尾标签或装饰性元素。SUR1 必须具体改变 pitch_structure 中的事件选择、阻力设计和结尾落点。

**故事发明许可证**:
- 在不篡改已选 M/SUR 参数核心功能、且不突破 SV2 情节容量上限的前提下，你可以主动发明必要的阵营压力、轻支线、谜团、仪式、交易、误会、追逐、秘密、社会机制、权力博弈、反转和连锁事故。
- 已选 M/SUR 是基础，不是天花板。每个新增元素都必须服务外部类型推进，或让某个 M 词条产生更强行动后果。
- 新增设定必须服从世界法则、SUR3 精确坐标和 SUR2 背景场域；不得为了精彩而引入与当前世界等级冲突的跨时代物件、未授权科技或不合物理等级的奇迹。L1 禁止奇观本体，L2 只允许同构折译，L3 只允许局部异常，L4 允许超现实本体成立，L5 进入类型狂想曲；世界法则只调节本体强度，不降低 SUR1 类型纯度。

**裁决优先级（从高到低）**:
1. 外部故事机关：可见目标、阻断升级、信息差、不可逆选择和代价兑现必须先成立。
2. SUR2/SUR3 世界材料：SUR2 决定世界母体、制度血肉、空间材料、权力气味和群体行为；SUR3 校准现实域、时间锚、空间锚、技术边界和尺度边界。
3. SUR1 故事类型：决定类型快感、情节张力、事件组织和观众可复述的故事形态；若与 SUR2/SUR3 冲突，按世界法则 L1-L5 处理，不能直接删除。
4. SV1/SV2 结构容量：决定阶段顺序、时长容量、人物/场景/转折上限和输出篇幅。
5. M0 操作系统：不替代故事机关，只改写主角如何进入、误认和重复这个机关。
6. M1-M6 因果链：缺口、遭遇、幻想、阻断、驱力、代价必须落在已经成立的外部事件链里。
7. M7A/M7B 双结项：负责结尾回溯意义与余痕显影；不得提前倒推整个故事都围绕结项转。
8. SUR 物理载体：给 M 轴和外部故事提供具体身份、对象、空间、制度和可见终端事件。
9. 文风与修辞：只负责清晰、电影感和文学质地，不负责裁决故事意义。

**可行性转译协议**:
任何词条与时代、物理等级、背景场域冲突时，按以下顺序裁决：
1. 世界法则 L1-L5 裁决 SUR1 故事类型与 SUR2 场域母体、SUR3 精确坐标之间的关系：L1 写实=彻底服从现实坐标；L2 折译=把冲突材料转为现实同构机关；L3 缝合=允许异常、幻觉或局部无法解释内容；L4 超现实=允许超现实本体成为世界事实；L5 狂想=梦幻、MV、象征和类型狂想曲接管世界规则。
2. SUR3 精确坐标决定现实域、时间锚、空间锚、尺度边界、物理状貌、服饰、政治/制度现实、技术边界和文化接口。若空间锚是异星、异维、虚拟、纳米或身体内部，必须同步改写身体、交通、危险来源和物件尺度。
3. SUR2 背景场域提供宏观世界母体、制度气味、生活材料、权力语法和美学滤镜；若与 SUR3 冲突，不复制专名事件，只保留其制度张力、物件系统、危险来源、群体行为和情绪方向。
4. M/SUR 词条中的说明和示例只取结构功能，不复制时代不适配的具体物件、制度、媒介、职业、技术或专名；但如果该具体物件已被 SUR2/SUR4/SUR5/SUR6/SUR9 或用户输入授权为当前世界材料，可以按字面使用。
- 降维只在冲突时发生，不是默认动作。若 SUR3 精确坐标/主控场域不支持现代科技，跨时代物件必须按功能拆解后降维：监控/摄像头/多屏墙 → 看守岗楼、瞭望孔、轮值记录、铃声警戒、火盆信号、人工巡逻；指纹/控制台/门禁按钮 → 手印泥封、骨牌嵌合、祭司验印、钥匙孔、身份仪式、机关栓；超级武器 → 当前时代可信的水闸、火油库、城门机关、祭坛火种、军械库通行权、粮仓/水源控制权。
- 当世界法则、SUR2/SUR3、SUR4/SUR5/SUR9 或用户输入已经明确授权近未来、赛博朋克、太空殖民、AI 治理、义体、克隆、仿生体、异星生态、魔法制度等世界材料为当前世界事实时，禁止把这些材料自动降维为普通现实等价物；必须让它们承担制度、空间、物件、风险或日常流程上的具体叙事功能。L4 允许超现实本体成立：奇观本体类型按本体字面成立，现实经验类型则在真实超现实世界中继续讲该类型故事；L5 按所选类型进入狂想曲。
- 若 SUR3 使用现代国家名但年代早于该国家成立，按今日地理区域简称处理，只取地貌、气候、贸易路线、族群接触和物质文化可能性，不套用现代国家制度。

**外部叙事冲突强化**:
- M2 不只是精神击穿点，也必须表现为可见事件爆点：某个动作、发现、事故、相认、失窃、通行失败或公共异常让旧秩序失效。
- M4 不只是秩序阻断，也必须形成持续升级的外部压力：规则、机构、共同体、空间机制或自然条件要不断改变主角可行动的范围。
- M5 不只是重复驱力，也必须制造新的情节后果：每次重复行动都要引发关系位移、物件易手、阵营反应、空间封锁或风险升级。
- M6 不只是内在代价，也必须改变可见世界：人物关系、权力格局、共同体秩序、资源归属、路线规则或身体姿态至少一项发生不可逆改变。

**M 词条落实标准**:
被前景化的 M 词条必须通过三项校验；未前景化的 M 词条只需作为暗流进入语气、误认、动作延迟、关系压力或结尾余味，不要求单独占据场景。
- 因果校验：删掉该前景化词条后，主角下一步行动是否仍然成立？若成立，说明词条只是装饰，必须重写。
- 场景校验：该前景化词条是否至少拥有一个不可替代的具体场景/动作/物件/关系压力？没有则失败。
- 后果校验：该前景化词条造成的选择是否在后文兑现代价？没有兑现则失败。

**SUR 生活载体分散协议**:
三个 Pitch 必须从不同的可见生活领域取材，例如市场交易、食物气味、手工劳动、身体照护、交通迁移、居住空间、仪式流程、表演娱乐、医疗救援、治安巡防、火灾水源、服饰纹样、摊位陈列、亲属登记、公共路线、建筑开闭、声音节律等。
- 同一个 Pitch 中，不要让同一类生活领域同时解决遭遇、阻断、行动和结尾翻转。除非该领域就是用户主动选择的 SUR9 职业或 SUR5 对象，否则它最多承担两个核心任务。
- 三个 Pitch 的阻断机制、重复行动和结尾翻转媒介必须来自不同生活领域。不要因为某个场域天然方便，就让三案反复落入同一种机构、职业、证据或信息处理方式。
- 三个 Pitch 的主导观看方式也必须分开：PLOT 走外部行动因果，FORM 以一个载体作为侧面焦点，ATMOSPHERE 走感官/场域压力。不要三案都写成“追索→抵达→打开→发现空无”的同构收束。
- SUR9 职业身份必须成为主角自己的行动发动机：每个 Pitch 至少有一个不可逆选择必须由该职业的工具、工作流程、客户关系、许可规则、身体劳动或交易场景触发。不得让未被选择的便利职业或机构替主角承担叙事核心。
- 辅助角色可以属于任何职业，但不得连续成为三个 Pitch 的关系核心或阻断核心；如果某类辅助职业在一个 Pitch 中已承担核心功能，其他 Pitch 必须转向不同社会接口。
- 结尾翻转不得默认依赖文字、档案、证据或声明。它可以通过价格、味道、配方、服饰图案、路线改名、节庆动作、队列规则、摊位摆放、身体姿势、建筑开闭、声音节律、气味扩散等非文字结果完成。真正的翻转必须落在主角行动链被重新定性，而不是落在某份材料被发现。

**反说教与去命题化协议**:
方案正文不是观点短文，不负责解释主题。正文只能写可拍事件、人物选择、具体后果、物件位置、关系变化和感官残留；所有意义必须从这些结果里自然冒出来。
- 严禁在 pitch_structure 正文中使用叙述者评语替故事下判断，例如「这说明」「这象征」「这套规则并非」「制度不是」「他终于意识到」「这让他明白」「真正的意义是」「某某本质上是」等。
- M4 的真实功能必须通过场景展示：让它实际救下某人、维持队列、阻止事故、保护资源或保持共同体运转。不要用一句解释性评语替它辩护。
- M7A 的结尾只能给出一个具体、可见、略带荒诞的结果场面；不要解释这个场面代表什么。让商品、仪式、路线、价格、摆放、身体动作或公共反应自己完成讽刺。
- 古典爱情、喜剧、惊悚、武侠等类型必须先作为类型片成立。M 轴只能在行动链深处改变故事方向，不能把故事写成参数论文或主题宣言。

**双词条执行标准**:
同一 M 槽位出现两个词条时，必须在同一个节点或同一个场景里正面排斥。写清主角选择了什么，因此失去、压抑或背叛了什么。严禁把两个词条融合成一个圆滑人格。
- 双词条不是“都出现一下”。被前景化的双词条才必须形成不可两全的选择句：主角若选择词条 A 的止痛方式，就必须立刻伤害、背叛或延迟词条 B；反之亦然。背景化的双词条只保留裂痕感，不强制大场面兑现。
- 这个选择必须出现在 pitch_structure 的某个明确节点内，并在后续节点兑现后果。

**M7A/M7B 执行标准**:
- M7A 不是普通反转、破案真相或最后解释；它必须让前文行动的意义被回头改写：主角以为自己在建设 A，结尾显出每一步其实生成了 B。
- 证据、照片、录音、文件、遗物只能承载 M7A，不能代替 M7A。真正的翻转必须落在“行动意义”上：主角以为自己在保存/证明/救回某物，结尾显出他每一步都在删除、制造、污染或错置真正想要的对象。
- 禁止把 M7A 写成单纯事实修正（例如“原来不是这个人”“原来日期不对”“原来只是裂纹”）。事实修正可以出现，但必须进一步反咬主角的行动链。
- M7A 的“空”只裁决意义，不规定物件形状；三案若共享同一 M7A，必须分别落在不同的物态家族里，不能都写成同一种容器空无。
- M7B 不是结尾硬塞的感官标签，也不是默认展开的结尾段。它只按当前显影档位执行：关闭则不强制追加；轻触停在主线末帧 1-2 句；强显影让末帧多停留 2-5 句；后日谈才允许极短尾声。
- M7B 可以在前文有轻微感官回声，但不得为了铺垫 M7B 额外增加专门场景、支线或重复仪式。三案若都使用 M7B，余震媒介不得同构为同一种守候动作。
- 后日谈档不得新增反转、解释、新事件链或第二结局；它只能展示余痕如何进入日常、公共秩序或关系姿态。
- SUR-END 只给最后可见画面，不能替 M7A 裁决意义；若 M7B 启用，SUR-END 仍只规定表层停点，不能抢走意义裁决。

**M4 阻断功能标准**:
M4 的代理人、制度或环境必须至少展示一次真实功能：它确实保护了某些人、维持了某种秩序、避免了一场更坏的事故，或让共同体得以继续运转。即使是 ATMOSPHERE 方案，也必须让环境性阻断对应一个可见的秩序机制，而不是只写成雾、风、沉默或压迫感。

**三案分歧标准**:
三个 Pitch 共享同一 M7A、选中的 M7B 余痕形式、主情绪曲线和用户锁定的关键 SUR 参数，但必须形成真正分歧。不要为了分歧而更换用户已经选择的主角身份、核心物件或地点；应在同一身份、同一物件、同一场域下发展出不同用途、冲突机制、行动方式和结尾媒介。
- 三案至少在以下六项中形成四项差异：职业触发方式、核心物件功能、M4 物理载体、M5 重复动作、信息释放媒介、主导载体/组织方式。
- 三案不得全部依赖同一种证据装置完成结尾，例如不得都使用“照片/录音/文件/缺页补齐”的同构组合。若 SUR-END 要求证据摊开，三案也必须改变证据的物质类别、排列逻辑和信息释放方式。
- 三案的 M5 重复动作不得同构：不能都是“收集证据→排列证据→发现缺口”。至少一个方案必须让行动驱力通过关系、空间、身体或公共秩序显影。
- 三案不得让同一种机构、同一种中介职业、同一种记录系统、同一种表演舞台或同一种仪式流程反复承担核心功能。若某一类机构或媒介在 OPTION 1 中承担 M4 或 M7A，OPTION 2/3 必须更换为不同生活领域。`;

export const WORLD_MATERIAL_ACTIVATION_PROTOCOL = `## 世界材料激活协议

世界法则是从“彻底服从现实坐标”到“类型狂想接管世界”的连续谱。它只裁决世界本体强度：是否允许超现实、科幻、灵异、魔法、外星、超能力等成为世界事实。它不决定类型是否纯正；无论 L1-L5，SUR1 都必须作为强类型运作。

**授权层级**:
- 用户输入/图像事实优先。SUR2 是场域预设包，决定世界母体、制度气味、危险来源、公共情绪和生活材料；SUR3 只有在被选择时作为精确坐标校准器，固定现实域、时间锚、空间锚、尺度边界、物理现实、技术边界和文化接口。
- SUR1 决定故事类型、叙事动力、冲突快感和氛围基调；不能被删除，不能因为坐标冲突而失效。现实经验类型在 L1/L2 也是标准爱情片、校园霸凌片、公路剧情片；奇观本体类型在 L4 才按本体字面成立。
- L4 是超现实：怪兽、超级英雄、外星接触、奇幻、灵异等奇观本体类型可写成本体真实存在的纯正类型片；爱情、现实主义、校园霸凌、公路剧情等现实经验类型则是在真实科幻/灵异/超现实/魔法/外星等世界中继续讲该类型故事，奇观不能抢走主线。
- L5 是类型狂想曲：梦、MV、象征和梦幻世界可以接管表达，但必须围绕已选类型展开。
- SUR4/SUR5/SUR6/SUR9、SUR-END 等表层材料若与 SUR3 精确坐标冲突，按当前世界法则转译、异常化、超现实化或狂想化；进入 L4/L5 后仍必须承担叙事功能。

**L1-L5 执行**:
- L1 写实：彻底写实。SUR1 必须落成当前坐标中真实可发生的事件；不得出现真实超自然、真实科幻奇观、真实灵异、真实魔法、真实超能力、真实外星生命或无法解释的异常本体。
- L2 折译：严守坐标，同时把 SUR1 的超现实或强类型材料折译为当前世界内可成立的同构故事机关。
- L3 缝合：现实坐标仍是底座，允许异常、幻觉、传闻、仪式、象征物或不可证实事件承载类型压力，但不扩展成完整新现实。
- L4 超现实：允许超现实本体成为世界事实。奇观本体类型按本体字面成立；现实经验类型则在真实超现实世界中继续讲该类型故事，新增奇观只提供世界规则、阻断、身体/制度代价和可拍事件。
- L5 狂想：进入类型狂想曲。梦幻、MV、象征、跨时代拼贴和类型奇观可以接管世界规则，但故事目标、阻断、升级、高潮选择和代价兑现仍要清楚。

**未指定时空时**:
- 不要默认当代，也不要默认历史。根据 SUR1 类型动力和外部故事机关推演最有戏剧张力的世界坐标；一旦坐标被选定，仍按当前世界法则判断类型材料是否字面化。
- 三案可以在同一世界法则下走不同材料侧重：一案偏制度科技，一案偏身体/职业流程，一案偏空间/群体秩序。
- 避免廉价赛博套壳：除非词条明确指向，不要自动堆霓虹雨巷、义体黑市、全息广告、企业杀手等熟套。真正的类型材料必须推动目标、阻断、升级、高潮选择和代价兑现。`;

export const STORY_SEED_QUALITY_PROTOCOL = `## 故事底子质量闸门

本协议控制“故事底子是否值得被扩写”，不是控制文笔。它必须在 SV2 情节容量上限内执行：短体量要减少人物、场景、支线和反转层数，但不能降低故事机关、选择压力和代价兑现的质量。若一个方案只能概括成“某人感到/意识到/被某种结构困住”，而不能概括成“某人为了 X 做 Y，却被 Z 逼到必须选择 W”，则必须重写。

**硬性验收**:
1. 一句话故事机关：每个 Pitch 必须有一个能被复述的戏剧机制，不得只是背景装饰或精神状态。
2. 可见欲望：主角必须追求一个可见、可失败、可被他人阻止的目标；不能只是“想被理解/想摆脱痛苦/想确认意义”。
3. 初始误认：主角以为自己在做 A，实际正在生成 B；这个 A→B 必须从前半段行动里自然长出。
4. 功能性关系：核心人物不能只是陪伴或反派，必须互相依赖、遮蔽、利用、误导、保护或背叛。
5. 压力装置：必须有倒计时、目击者、契约、追捕、空间封锁、资源短缺、身份暴露、禁令、交易失败、证据易手或同等级压力之一。
6. 可回返动作/物件：前半段出现的动作、物件、规则或句式，结尾必须以新意义返回。
7. 揭示改变行动意义：中后段揭示不能只是补充信息，必须改变主角对自己行动的理解，并迫使他重新选择。
8. 高潮是选择：高潮不能只靠事故、杀戮、逃跑或别人解释真相；主角必须做一个不可逆选择。
9. 代价从选择中兑现：结尾代价必须来自主角自己的选择链，而不是作者空降惩罚。
10. 意料之外情理之中：反转必须由前文细节回头照亮，不能靠最后突然出现的新事实成立。

**反面禁令**:
- 禁止靠“突然出现的新信息/新人物/新证据”制造高潮。
- 禁止让坏人或旁观者长篇解释真相来替代行动揭示。
- 禁止主角没有选择，只被外部事件推到结尾。
- 禁止为了精彩新增第二套支线、第二个反派、第二个世界观谜团或多层机关。
- 禁止主题先行，让人物变成哲学观点或设定规则的传声筒。
- 禁止把故事写成“人物在某个空间里感受压力，最后留下一个象征性余味”的弱情节散文。
- 禁止把 FORM/ATMOSPHERE 当作免除冲突、目标、阻断、选择和代价的许可证。

**推荐链条**:
可见目标 → 具体阻断 → 主角采取看似有效的方法 → 方法造成副作用或误伤 → 信息/关系/物件易手 → 揭示改写前文 → 主角仍必须选择 → 选择兑现代价 → 核心动作/物件带着新意义返回。`;

export const STORY_SEED_QUALITY_PROTOCOL_COMPACT = `## 故事底子质量闸门

本协议只验收故事是否值得扩写，不增加新限制。若一个方案不能概括成“某人为了 X 做 Y，却被 Z 逼到必须选择 W 并付出 V”，必须重写。

**硬性验收**:
1. 一句话故事机关清楚：可见目标、可见阻断、升级压力和失败可能同时存在。
2. 外部动力清楚：若已选故事类型，主冲突、阻力语法、升级方式和结尾落点由该类型驱动；若未选故事类型，则由已选 SUR、重点词和外部压力装置生成强情节机关。
3. 世界材料清楚：时代、地点、制度、物件和公共秩序真实参与事件，不只是装饰。
4. 反转有铺垫：中后段揭示必须回头照亮前文动作，不能靠突然出现的新事实成立。
5. 高潮是选择：主角亲手做不可逆选择，不由事故、旁人解释或环境自然压垮代替。
6. 代价从选择中兑现：关系、资源、身份、身体姿态、空间规则或共同体秩序至少一项不可逆改变。
7. 大纲要顺读：每个字段像连续故事的一段，上一节点的动作、物件或信息必须推动下一节点；不得写成清单、设定摘要或互不相连的概念句。

**推荐链条**:
可见目标 → 具体阻断 → 看似有效的方法 → 副作用或误伤 → 信息/关系/物件易手 → 揭示改写前文 → 主角重新选择 → 选择兑现代价 → 核心动作/物件带着新意义返回。`;

const hasTagsBySuffix = (fieldState: NarrativeFieldState, suffix: string | string[]): boolean =>
  getTagsBySuffix(fieldState, suffix).length > 0;

const hasMultipleMInAnySlot = (fieldState: NarrativeFieldState): boolean => {
  const slotSuffixes: Array<string | string[]> = [
    ['_m0', '_c0'],
    ['_m1', '_c1'],
    '_m2',
    ['_m3', '_c3'],
    ['_m4', '_c4'],
    '_m5',
    '_m6',
    '_m7a',
    '_m7b',
  ];
  return slotSuffixes.some(suffix => getTagsBySuffix(fieldState, suffix).length > 1);
};

const displayTagName = (tag: string): string => tag.split('(')[0].trim();

const bracketList = (items: string[], fallback = '未选'): string =>
  items.length > 0 ? items.map(item => `【${displayTagName(item)}】`).join('') : fallback;

type Sur1OntologySelection = {
  id: string | null;
  name: string;
  kind: Sur1OntologyKind;
  isMapped: boolean;
};

const resolveSur1OntologySelection = (tag: string): Sur1OntologySelection => {
  const item = findItemFull(tag, 'skin_genre') as { id?: string; name?: string } | null;
  const id = item?.id || null;
  const kind = id ? SUR1_ONTOLOGY_KIND_BY_ID[id] : undefined;

  return {
    id,
    name: item?.name || displayTagName(tag),
    kind: kind || 'conditional_ontology',
    isMapped: Boolean(kind),
  };
};

const groupSur1OntologySelections = (tags: string[]) => {
  const selections = tags.map(resolveSur1OntologySelection).filter(item => Boolean(item.name));
  const grouped: Record<Sur1OntologyKind, Sur1OntologySelection[]> = {
    realist_type: [],
    conditional_ontology: [],
    spectacle_ontology: [],
  };

  selections.forEach(selection => {
    grouped[selection.kind].push(selection);
  });

  const unmapped = selections.filter(selection => !selection.isMapped);
  const hasRealist = grouped.realist_type.length > 0;
  const hasConditional = grouped.conditional_ontology.length > 0;
  const hasSpectacle = grouped.spectacle_ontology.length > 0;
  const hasNonRealist = hasConditional || hasSpectacle;

  return {
    selections,
    grouped,
    unmapped,
    hasRealist,
    hasConditional,
    hasSpectacle,
    hasNonRealist,
    isRealistOnly: selections.length > 0 && hasRealist && !hasNonRealist,
  };
};

const formatOntologyGroup = (label: string, selections: Sur1OntologySelection[]): string | null =>
  selections.length > 0 ? `${label}${bracketList(selections.map(item => item.name))}` : null;

const buildSur1OntologyLines = (
  tags: string[],
  ontologyScope: string
): { lines: string[]; profile: ReturnType<typeof groupSur1OntologySelections> } => {
  const profile = groupSur1OntologySelections(tags);
  if (profile.selections.length === 0) return { lines: [], profile };

  const classificationParts = [
    formatOntologyGroup(SUR1_ONTOLOGY_KIND_LABEL_CN.realist_type, profile.grouped.realist_type),
    formatOntologyGroup(SUR1_ONTOLOGY_KIND_LABEL_CN.conditional_ontology, profile.grouped.conditional_ontology),
    formatOntologyGroup(SUR1_ONTOLOGY_KIND_LABEL_CN.spectacle_ontology, profile.grouped.spectacle_ontology),
  ].filter(Boolean);

  const lines: string[] = [`SUR1 本体分类：${classificationParts.join('；')}。`];

  if (profile.isRealistOnly) {
    lines.push(`本次 SUR1 属于现实经验类型：类型纯度在 L1-L5 都必须成立。L1/L2 是偏现实的标准类型片；L3 可加入局部异常；L4 可外加真实${ontologyScope}作为超现实世界规则，但主线仍由所选现实经验类型驱动；L5 可变成该类型的狂想曲。`);
  } else if (profile.hasSpectacle && !profile.hasRealist && !profile.hasConditional) {
    lines.push('本次 SUR1 含奇观本体需求：L1 必须写实，L2 必须折译，L3 只允许局部异常；L4 才让该类型本体字面成立并写成纯正类型片；L5 可变成该类型的狂想曲。');
  } else if (profile.hasConditional && !profile.hasRealist && !profile.hasSpectacle) {
    lines.push('本次 SUR1 属于条件型类型：L1/L2 优先现实表达或同构折译；L3 保持真假不定；L4 可按故事机关选择真实超现实本体或高度类型化现实；L5 可释放为风格化狂想。');
  } else {
    lines.push('本次 SUR1 是混合组合：第一个类型决定主控故事骨架，其余类型作为偏移变量；L1/L2 保留主控类型并折译冲突材料，L3 允许局部异常，L4 允许超现实本体成立但不得夺走主控类型，L5 进入主控类型狂想曲。');
  }

  if (profile.unmapped.length > 0) {
    lines.push(`未在 SUR1 144 项本体表中的自定义类型${bracketList(profile.unmapped.map(item => item.name))}按条件型处理：不自动授权奇观本体，也不删除类型运动。`);
  }

  return { lines, profile };
};

export const buildCurrentCombinationJudgementV3 = (
  fieldState: NarrativeFieldState,
  worldLaw: WorldLawConfig
): string => {
  const rawGenreTags = getTagsBySuffix(fieldState, '_genre');
  const genreTags = rawGenreTags.map(displayTagName).filter(Boolean);
  const eraTags = getTagsBySuffix(fieldState, '_era').map(displayTagName).filter(Boolean);
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  const spacetimeLabel = [exactYear ? formatYear(exactYear) : null, exactCountry].filter(Boolean).join('·');
  const hasSur1 = genreTags.length > 0;
  const hasSur2 = eraTags.length > 0;
  const hasSur3 = Boolean(spacetimeLabel);
  const hasSur4 = hasTagsBySuffix(fieldState, '_society');
  const hasSur5 = hasTagsBySuffix(fieldState, '_everything');
  const hasSur6 = hasTagsBySuffix(fieldState, '_location');
  const hasSur9 = hasTagsBySuffix(fieldState, '_profession');
  const hasSurEnd = hasTagsBySuffix(fieldState, '_ending');
  const worldDisplay = getWorldLawDisplay(worldLaw, 'CN');
  const lawLabel = `${worldDisplay.code} ${worldDisplay.cn}`;
  const typeLiteral = hasSur1 ? bracketList(genreTags) : '未选';
  const fieldLiteral = hasSur2 ? bracketList(eraTags) : '未选';
  const spacetimeLiteral = hasSur3 ? `【${spacetimeLabel}】` : '未选';
  const ontologyScope = '超现实、科幻、灵异、魔法、神话、宗教奇迹、真实外星生命、真实超能力、异种生态、意识上传、时间旅行、平行宇宙、跨时代技术、非当前坐标支持的 AI/义体/克隆/仿生体或其他奇观本体';
  const { lines: ontologyClassificationLines, profile: ontologyProfile } = buildSur1OntologyLines(rawGenreTags, ontologyScope);
  const nonRealistOntologyNames = [
    ...ontologyProfile.grouped.spectacle_ontology,
    ...ontologyProfile.grouped.conditional_ontology,
  ].map(item => item.name);
  const ontologyObject = hasSur1
    ? ontologyProfile.isRealistOnly
      ? `SUR1 ${typeLiteral}`
      : `SUR1 ${bracketList(nonRealistOntologyNames, genreTags.join('、'))} 中需要裁决的类型本体`
    : `任何${ontologyScope}`;
  const mainTypeName = genreTags[0] || '';
  const secondaryTypeNames = genreTags.slice(1);
  const hasMixedSur1 = genreTags.length > 1;
  const mixedTypeLead = hasMixedSur1
    ? `本次 SUR1 为混合类型：主控类型是【${displayTagName(mainTypeName)}】，决定故事骨架、主目标、阻断升级、高潮选择和结尾落点；类型偏移是 ${bracketList(secondaryTypeNames)}，只能改变关系变量、局部机制、情绪温度、反转方式或观看快感。L4 时若偏移类型提供真实超现实本体，它也必须服务主控类型：如【爱情】+【超级英雄】是超能力世界中的爱情选择，【超级英雄】+【爱情】才是英雄公共危机中的爱情变量。`
    : '';

  const realistOnlyLawJudgement: Record<number, string> = {
    1: `当前世界法则为【${lawLabel}】：彻底写实。本次 SUR1 ${typeLiteral} 是现实经验类型，必须写成当前坐标中真实可发生的强类型故事：爱情就是现实爱情片，校园霸凌就是现实校园霸凌片，公路剧情就是现实公路剧情片。不得出现真实超自然、真实科幻奇观、真实灵异、真实魔法、真实超能力、真实外星生命或无法解释的异常本体。`,
    2: `当前世界法则为【${lawLabel}】：现实折译。本次 SUR1 ${typeLiteral} 仍是偏现实的标准类型片；如有强刺激、夸张类型装置或不适配当前坐标的材料，必须折译为可信同构机关：关系压力、社会禁令、圈层规则、交易失败、舆论事件、空间封锁、公共误读、制度流程或高潮行动。`,
    3: `当前世界法则为【${lawLabel}】：局部异常。本次 SUR1 ${typeLiteral} 仍以现实类型片为底座，但允许幻觉、梦、传闻、仪式、无法解释的巧合、监控盲区、集体误认或象征物短暂改变人物行动；不得扩展成完整新世界体系，也不得用解释句确证异常本体。`,
    4: `当前世界法则为【${lawLabel}】：超现实。本次 SUR1 ${typeLiteral} 仍必须由所选现实经验类型驱动，但可以发生在真实科幻、灵异、超现实、魔法、外星、超能力或其他非现实世界中。新增本体必须承担世界规则、阻断、身体/制度代价、公共秩序或可拍事件；不能把故事主线改写成未选择类型的奇观胜利。`,
    5: `当前世界法则为【${lawLabel}】：类型狂想曲。本次 SUR1 ${typeLiteral} 可以变成梦幻、MV、象征化的类型宇宙：爱情可成为爱情狂想曲，现实主义可成为社会苦难寓言，校园霸凌可成为噩梦学校，公路剧情可成为道路与身份不断变形的旅程。即使狂想，也必须保留可见目标、阻断升级、高潮选择和代价兑现。`,
  };

  const lawJudgement: Record<number, string> = {
    1: `当前世界法则为【${lawLabel}】：彻底写实。${ontologyObject}不得仅因类型词、比喻词或导演笔记而成为世界事实；只能保留类型语法、节奏、冲突快感、观看角度和现实压力。所有超出 SUR2/SUR3 坐标的材料，必须落成当前世界真实可发生的事件、误读、骗局、制度、自然事故、社会传闻、表演、信仰解释、技术误判或人物行动后果。`,
    2: `当前世界法则为【${lawLabel}】：现实折译。${ontologyObject}默认不成为世界事实；故事必须保留 SUR1 的类型快感和叙事运动，但把冲突本体折译为同构现实机关。若 SUR2/SUR3、图像事实或用户输入已经明确授权某种科技、制度、生态、身体改造或奇观材料为当前世界现实，该被授权材料可以字面使用；未授权部分仍必须折译。`,
    3: `当前世界法则为【${lawLabel}】：局部异常。${ontologyObject}可以以异常事件、幻觉、梦、不可证实事件、传闻、仪式、象征物、民间解释、媒体症状或社会集体反应承载压力；它可以改变人物行动和公共秩序，但不得扩展成完整新世界体系，也不得在结尾用解释句确认稳定设定。`,
    4: `当前世界法则为【${lawLabel}】：超现实。${ontologyObject}可以字面成为世界事实：若主控类型是奇观本体类型，就写成该类型本体真实存在的纯正类型片；若主控类型是现实经验类型，就在真实超现实世界中继续讲该类型故事；若是条件型类型，则按故事机关决定超现实范围。所有超现实材料必须进入制度、空间、物件、风险、职业流程或群体行为，不能只是装饰名词。`,
    5: `当前世界法则为【${lawLabel}】：类型狂想曲。${ontologyObject}可以进入梦幻、MV、象征、跨时代拼贴或类型奇观接管的世界；但狂想必须围绕已选 SUR1 的主控类型展开，故事仍必须有清楚的可见目标、阻断升级、高潮选择和代价兑现，不能变成无因果散文。`,
  };

  const noSur1LawJudgement: Record<number, string> = {
    1: `当前世界法则为【${lawLabel}】：彻底写实。本次未选择 SUR1，不存在主控类型本体需要授权；故事必须从已选 SUR2/SUR3、其他 SUR、M 轴压力和用户输入中生成，并严格落成当前坐标真实可发生的事件。不得主动添加真实超自然、真实科幻奇观、真实灵异、真实魔法、真实超能力、真实外星生命或无法解释的异常本体。`,
    2: `当前世界法则为【${lawLabel}】：现实折译。本次未选择 SUR1，不存在需要保留的类型奇观运动；若其他参数、图像或用户输入中出现不适配当前坐标的超现实材料，必须折译为可信同构机关。故事机关优先从已选世界材料、制度、空间、资源、职业、关系、公共秩序和 M 轴压力中生成。`,
    3: `当前世界法则为【${lawLabel}】：局部异常。本次未选择 SUR1，异常只能从已选 SUR2/SUR3、其他 SUR、M 轴压力或用户输入中生长；可表现为幻觉、梦、传闻、仪式、无法解释的巧合、监控盲区、集体误认或象征物，但不得扩展成完整新世界体系，也不得自动添加未选类型本体。`,
    4: `当前世界法则为【${lawLabel}】：超现实。本次未选择 SUR1，因此不能自动套用怪兽片、超级英雄、外星接触、灵异片等未选类型模板；但已选 SUR2/SUR3、其他 SUR、M 轴压力或用户输入可以被超现实化为真实世界规则。超现实材料必须承担制度、空间、物件、风险、身体代价、职业流程或群体行为上的具体功能。`,
    5: `当前世界法则为【${lawLabel}】：类型狂想曲。本次未选择 SUR1，因此狂想不围绕某个主控类型展开，也不能自动引入未选类型本体；它只能让已选 SUR2/SUR3、其他 SUR、M 轴压力和用户输入进入梦幻、MV、象征、跨时代拼贴或舞台化世界规则。即使狂想，也必须先建立清楚的可见目标、阻断升级、高潮选择和代价兑现，不能变成无因果散文。`,
  };

  const selectedLawJudgement = !hasSur1
    ? noSur1LawJudgement[worldDisplay.gravity] || noSur1LawJudgement[2]
    : ontologyProfile.isRealistOnly
    ? realistOnlyLawJudgement[worldDisplay.gravity] || realistOnlyLawJudgement[2]
    : lawJudgement[worldDisplay.gravity] || lawJudgement[2];

  const combinationLines: string[] = [];

  if (hasSur1 && hasSur2 && hasSur3) {
    combinationLines.push(
      `本次选择了 SUR1 ${typeLiteral} 作为故事类型，SUR2 ${fieldLiteral} 作为背景场域，SUR3 ${spacetimeLiteral} 作为精确坐标。`,
      `SUR3 负责校准现实域、时间锚、空间锚、尺度边界、政治/制度现实、物理状貌、服饰、交通、武器、媒体环境、技术边界和文化接口；SUR2 不必被平均还原，而要转成该坐标内的前夕、余波、外围、异地回声、同构局势、移植版本或权力语法，提供制度气味、生活材料、空间秩序、资源压力和群体行为；SUR1 负责组织目标、阻断、升级、类型快感和结尾落点。若 SUR2 专名事件与 SUR3 冲突，不复制专名事件，只保留其制度张力、物件系统、危险来源和情绪方向。`,
    );
  } else if (hasSur1 && hasSur3 && !hasSur2) {
    combinationLines.push(
      `本次选择了 SUR1 ${typeLiteral} 作为故事类型，SUR3 ${spacetimeLiteral} 作为精确坐标，未选择 SUR2。`,
      `不得额外发明宏观背景场域标签；世界材料必须从 SUR3 的现实域、时间锚、空间锚、尺度边界、政治/制度现实、城市/乡土/星球/身体空间、媒体环境、技术边界、职业接口和公共秩序中提取。SUR1 只负责组织目标、阻断、升级、类型快感和结尾落点。`,
    );
  } else if (hasSur1 && hasSur2 && !hasSur3) {
    combinationLines.push(
      `本次选择了 SUR1 ${typeLiteral} 作为故事类型，SUR2 ${fieldLiteral} 作为背景场域，未选择 SUR3。`,
      `以 SUR2 作为主世界母体，必要时推演一个与 SUR2 兼容的最小可行精确坐标；不得默认当代，也不得默认历史。SUR1 负责故事运动，SUR2 负责世界血肉和物理边界。`,
    );
  } else if (hasSur1 && !hasSur2 && !hasSur3) {
    combinationLines.push(
      `本次只选择了 SUR1 ${typeLiteral} 作为故事类型，未选择 SUR2/SUR3。`,
      `先由 SUR1 的类型动力推演最适合且最小够用的世界坐标；不得默认当代，也不得默认历史。世界坐标一旦推演成立，就必须反过来约束服饰、交通、武器、媒体、制度、空间材料和公共秩序。`,
    );
  } else if (!hasSur1 && (hasSur2 || hasSur3)) {
    combinationLines.push(
      `本次未选择 SUR1，SUR2 为 ${fieldLiteral}，SUR3 为 ${spacetimeLiteral}。`,
      `不得为了类型快感自行引入未选择的故事类型或${ontologyScope}。若当前世界法则允许异常、超现实或狂想，它也必须从已选世界材料、精确坐标、制度、空间、资源、职业、关系、公共秩序、其他 SUR 参数、M 轴压力或用户输入中生长。`,
    );
  } else {
    combinationLines.push(
      `本次未选择 SUR1/SUR2/SUR3。`,
      `只允许根据 M 轴、其他 SUR 参数和 SV 容量推演最小可行世界；不得默认当代，也不得自动添加未选择的故事类型或${ontologyScope}。若当前世界法则允许异常、超现实或狂想，它也必须服务外部故事机关。`,
    );
  }

  const surfaceFusionRules = [
    hasSur4 ? 'SUR4 转译为当前世界的秩序外壳、组织规则、共同体压力或制度接口' : null,
    hasSur5 ? 'SUR5 转译为可争夺、保护、交换、误认或毁坏的对象' : null,
    hasSur6 ? 'SUR6 转译为可行动、可封锁、可穿越、可暴露风险的空间机制；若与 SUR3 精确坐标冲突，保留空间功能，不复制不属于当前坐标的制度外壳' : null,
    hasSur9 ? 'SUR9 转译为主角的行动权限、工具流程、客户关系、身体劳动或许可边界' : null,
    hasSurEnd ? 'SUR-END 只规定最后可见收场，不能裁决故事意义或追加尾声' : null,
  ].filter(Boolean);

  const fusionExecutionLines = [
    surfaceFusionRules.length > 0
      ? `已选的其他 SUR 参数必须穿过上述判定：${surfaceFusionRules.join('；')}。`
      : null,
    hasSur1
      ? '若类型材料被允许字面存在，它必须承担具体叙事功能；若不被允许字面存在，它仍要保留类型运动，并折译为同构现实机关。'
      : '若当前法则允许异常、超现实或狂想材料进入，它必须从已选世界材料、其他 SUR、M 轴压力或用户输入中生长，并承担具体叙事功能；不得自动补入未选类型模板。',
    'M/SUR 词条中的现代制度、媒介、职业、技术、物件和示例名只取结构功能；若与 SUR3 冲突，必须转译为当前精确坐标可成立的仪式、称谓、器物、空间、权力关系、传闻、身体动作或公共秩序。',
    '禁止把未授权奇观写成“其实是真的”；也禁止在已授权奇观时把它压扁成纯隐喻、心理误读或普通骗局。',
  ].filter(Boolean);

  return `## 当前组合判定

本模块是本次故事世界的最终物理与类型融合判定。它集中裁决 SUR1 故事类型、SUR2 背景场域、SUR3 精确坐标与世界法则之间的关系；不得把本模块写进 pitch_structure 正文。

**已选组合**:
${combinationLines.map(line => `- ${line}`).join('\n')}
${ontologyClassificationLines.length > 0 ? `\n**SUR1 本体分类**:\n${[...ontologyClassificationLines, mixedTypeLead].filter(Boolean).map(line => `- ${line}`).join('\n')}\n` : ''}

**世界法则判定**:
- ${selectedLawJudgement}

**融合执行**:
${fusionExecutionLines.map(line => `- ${line}`).join('\n')}`;
};

const buildV3DivergenceProtocol = (
  fieldState: NarrativeFieldState,
  hasActiveM7B: boolean,
  m7bIntensity?: M7BResidueIntensity
): string => {
  const hasSur1 = hasTagsBySuffix(fieldState, '_genre');
  const hasSur2 = hasTagsBySuffix(fieldState, '_era');
  const hasSur3 = hasTagsBySuffix(fieldState, ['_year_exact', '_country_exact']);
  const hasSur6 = hasTagsBySuffix(fieldState, '_location');
  const hasProfession = hasTagsBySuffix(fieldState, '_profession');
  const hasSurEnd = hasTagsBySuffix(fieldState, '_ending');
  const hasM7A = hasTagsBySuffix(fieldState, '_m7a');
  const hasMultiM = hasMultipleMInAnySlot(fieldState);
  const storySourceRule = hasSur1
    ? '具体故事由锁定事实/参考范围 + SUR + 外部故事机关生成：若有图像/文本，先服从用户文字、图片用途和手动修改，按原图锁定/视觉参考/局部锁定决定保留范围；若无图像/文本，则由 SUR1 的类型承诺、SUR2/SUR3 的世界坐标、SUR4-SUR-END 的物理载体生成一个具体的人、物、空间、关系动作或事件现场。'
    : '具体故事由锁定事实/参考范围 + 已选 SUR + 外部故事机关生成：若有图像/文本，先服从用户文字、图片用途和手动修改，按原图锁定/视觉参考/局部锁定决定保留范围；若无图像/文本，则从 SUR2/SUR3、SUR4-SUR-END、重点词、M4/M5 压力、空间限制、职业权限和压力装置中生成一个具体的人、物、空间、关系动作或事件现场；不得自行补入未选类型模板。';
  const sur1RoleRule = hasSur1
    ? 'SUR1 是外部叙事发动机：决定类型承诺、可见目标、阻力语法、升级方式和类型落点。故事类型要纯，不要只当氛围标签。'
    : '未选择 SUR1 时，不存在类型发动机；不要为了“类型快感”偷加未选类型。外部故事要靠已选世界、空间、职业、对象、重点词和压力装置自己站起来。';
  const worldRoleRule = (hasSur2 || hasSur3)
    ? 'SUR2/SUR3 是世界材料和物理坐标：决定制度、空间、技术边界、生活物件、权力气味和群体行为。时代感必须进入行动，而不是停在布景。'
    : '未选择 SUR2/SUR3 时，只推演最小够用世界坐标；不得自动默认当代、历史或某种宏大场域。';
  const sur6RoleRule = hasSur6
    ? '\n- SUR6 是空间机制，不是布景名：必须变成封锁、隔离、偷听、误认、交换、暴露、穿越失败或高潮选择的物理机关；若与 SUR3 冲突，保留空间功能并转译制度外壳。'
    : '';
  const surFusionRule = hasSur1
    ? `**SUR1/SUR2/SUR3 融合**:
- 每个 Pitch 至少让一个关键事件由 SUR1 的类型动力触发，并让一个关键阻断或反转由 ${hasSur2 || hasSur3 ? 'SUR2/SUR3 的世界机制' : '当前最小世界坐标'}触发。
- SUR1×SUR2/SUR3 必须相互翻译：类型提供“故事怎样运动”，世界提供“故事用什么材料运动”。爱情要变成该坐标里的距离、礼法、信物和误会；惊悚要变成可见封锁、追捕、缺氧、检查或声音秩序；科幻/超常要先通过世界法则确认本体权限。`
    : `**无 SUR1 时的外部机关生成**:
- 每个 Pitch 至少要让一个关键事件由已选 SUR、重点词、职业权限、空间限制或 M4/M5 外部压力触发；不得为了补足类型快感而添加未选故事类型。
- 世界材料必须自己参与因果：制度、路线、空间、资源、物件、身份读取、共同体规则或身体劳动至少一项推动阻断或反转。`;

  const optionalSections: string[] = [];

  if (hasProfession) {
    optionalSections.push(`**职业行动权限**:
- 已选职业必须成为主角自己的行动发动机。每个 Pitch 至少有一个不可逆选择由该职业的工具、工作流程、客户关系、许可规则、身体劳动或交易场景触发。
- 辅助角色可以属于任何职业，但不得连续成为三个 Pitch 的关系核心或阻断核心。`);
  }

  if (hasMultiM) {
    optionalSections.push(`**双词条执行**:
- 同一 M 槽位出现多个词条时，不要平均摊派戏份；每案只前景化最能推动该方案的一组张力。
- 被前景化的双词条必须在同一节点形成不可两全选择，并在后续兑现后果；背景双词条只保留裂痕，不强迫大场面。`);
  }

  if (hasM7A) {
    optionalSections.push(`**M7A 执行**:
- M7A 不是普通反转、破案真相或最后解释；它必须让前文行动意义被回头改写：主角以为自己在建设 A，结尾显出每一步其实生成了 B。
- 证据、照片、录音、文件、遗物只能承载翻转，不能代替翻转；真正的变化要落在主角行动链被重新定性。`);
  }

  if (hasActiveM7B) {
    const activeIntensity = normalizeM7BIntensity(m7bIntensity);
    optionalSections.push(`**M7B 执行**:
- 当前显影档位：${buildM7BIntensityBrief(activeIntensity)}
- ${activeIntensity === 'epilogue'
  ? '允许极短后日谈，但只能兑现已完成选择的残留后果，不得新增第二结局、第二反转或解释段。'
  : activeIntensity === 'strong'
    ? '余痕必须成为主线终点的核心最后画面之一，可多停留 2-5 句，但不新增时间跳转或新事件。'
    : '余痕只以 1-2 句轻触主线最后场面，不另起新场景。'}
- 三案余震媒介不得同构。`);
  }

  if (hasSurEnd) {
    optionalSections.push(`**SUR-END 边界**:
- SUR-END 只规定最后可见画面，不能替 M7A 裁决意义${hasActiveM7B ? '；若 M7B 启用，SUR-END 也只能规定主线末帧里的表层停点' : ''}。
- 若显性收场要求证据、仪式、归还、摊开或揭露，三案必须改变物质类别、排列逻辑和信息释放方式。`);
  }

  return `## 叙事创作协议

**创作目标**:
生成三条可发展为完整作品的强情节故事方案，而不是最终正文、主题阐释或参数清单。每个方案先裁决锁定事实或参考范围，再从其中的行动张力长出外部故事机关：人物为什么行动、目标如何受阻、局势如何升级、高潮做出什么不可逆选择、选择如何兑现代价、结尾留下什么余味。外部故事脱离术语仍可复述，但不能脱离用户创意、图片用途和行动张力成立。M 层只进入行动链内部，改变误认、重复、代价和回头意义。

**生成顺序**:
- ${storySourceRule}
- 外部故事机关必须从用户创意、图片用途、锁定事实/参考范围和行动张力中长出，并且脱离术语仍能复述：某人为了 X 做 Y，被 Z 阻止，升级到必须亲手选择 W。
- M0-M7 只能进入已经成立的行动链，污染动机、误认、重复、代价和结尾意义；它们不能替代剧情，也不能把故事改写成参数说明。
- M7A 回头重写前文行动意义：主角以为在完成 A，结果每一步都在制造 B。${hasActiveM7B ? 'M7B 只按显影档位留下余波。' : ''}

**强故事机关优先**:
- 先让锁定事实/参考范围长出“删掉术语仍然好看”的外部故事，再让 M 轴反咬意义；若故事只靠结尾解释才显得精神分析，视为失败。
- 每个 Pitch 至少包含一个硬戏剧机关：信息不对称、错误任务、被迫共谋、误杀/误救、目击者压力、倒计时、空间封锁、资源短缺、身份暴露、契约陷阱、背叛交换、救人与自保不可兼得。
- 高潮必须是主角亲手做出的不可逆选择，不是事故发生、真相揭晓、旁人解释、环境压垮或氛围自然消散。

**正交分工**:
- ${sur1RoleRule}
- ${worldRoleRule}${sur6RoleRule}
- 世界法则只裁决类型材料与 SUR2/SUR3 坐标冲突时的本体权限；若不冲突，不要额外降维。
- SV1 管结构节点，SV2 管容量上限和输出密度；FORM/ATMOSPHERE 不复制 SV1 字段名，但必须在自身字段内部完成同样阶段功能。
- SV1 不扩容：复杂结构只能改变节点功能、重复节律和信息释放，不能突破 SV2 的人物、场景、支线和反转上限。
- M0 是主角进入外部故事机关的方式；M1-M6 改写行动原因、关系压力和后果；M7A 处理结尾回咬${hasActiveM7B ? '，M7B 只按显影档位处理余痕，不得提前倒推整个故事' : ''}。

${surFusionRule}

**M 词条落实**:
- 每案只前景化最能推动该方案的 1-2 组 M 冲突，其余作为暗流进入语气、误认、动作延迟、关系压力或结尾余味。
- 前景化词条必须通过三项校验：删掉它主角下一步行动就不成立；它有具体场景/动作/物件/关系压力；它造成的选择在后文兑现代价。
- M2/M4/M5/M6 必须外化为可见事件、持续压力、重复行动后果和世界/关系变化。
- M4 的制度、代理人或环境必须至少展示一次真实功能：保护某些人、维持队列、阻止事故、保护资源或让共同体继续运转。

**三案分歧**:
- PLOT 正面看事件运动；FORM 斜目而视一个可见载体；ATMOSPHERE 沉进空间、环境、身体感和群体秩序。三者都是强情节，不是情节强弱等级。
- 三案共享同一母题，但必须落在不同的发动机中心：PLOT 的核心是外部公共问题与决断；FORM 的核心是载体的流转、误认、占有或改写；ATMOSPHERE 的核心是场域压缩怎样改变身体、关系与路线。
- 三案不是同一问题的三种说法，而是三种不同的起跑器：PLOT 从外部公共问题开机，FORM 从载体流转/误认/改写开机，ATMOSPHERE 从场域压缩/耗损/封锁开机。
- 三案必须分别回答不同的下一步为何发生：PLOT 因事件升级推进，FORM 因载体转手、损坏、占有或失真推进，ATMOSPHERE 因空间、资源、气味、噪声或拥挤变化推进。若去掉该案的核心轴后仍可与另一案互换，只是换词不换因果，就必须重写。
- 三案至少四项不同：核心物件功能、阻断机制、重复动作、信息释放媒介、主导载体/组织方式、结尾物态。
- 三案不得全部依赖同一种证据装置、记录系统、表演舞台、仪式流程或中介职业完成结尾。
- 三案不得只是同一条“目标-阻断-高潮”骨架上换一个道具或一个气氛词；如果去掉该案的核心轴后仍能和另一案互换，说明同构，必须重写。

**反说教与顺读**:
- 正文只写事件、动作、选择、后果、物件位置、关系变化和感官残留；不得用主题解释、制度评论、心理诊断或作者总结替代剧情。
- pitch_structure 每个字段都要像连续故事大纲的一段，上一字段的动作、物件或信息必须推动下一字段；不得写成清单、设定摘要或互不相连的概念句。

${optionalSections.join('\n\n')}`;
};

const buildJsonShape = (keys: string[]): string => keys.map(s => `"${s}": "..."`).join(', ');

type Sv2CapacityBrief = {
  runtimeLabel: string;
  capacityLabel: string;
  outputTarget: string;
  capacity: string;
  plotBudget: string;
  density: string;
  compression: string;
  limits: string;
};

const extractSv2CoreField = (core: string, label: string): string => {
  const match = core.match(new RegExp(`【${label}】([^\\n]+)`));
  return match?.[1]?.trim() || '';
};

const extractSv2OutputTarget = (mechanics: string): string => {
  const match = mechanics.match(/每个 Pitch 建议\s*([^。]+)。/);
  return match?.[1]?.trim() || '';
};

const extractOutputUpperBound = (outputTarget: string): number | null => {
  const match = outputTarget.match(/(\d+)\s*-\s*(\d+)/);
  if (match) return Number(match[2]);
  const single = outputTarget.match(/(\d+)/);
  return single ? Number(single[1]) : null;
};

export const buildSv2CapacityBrief = (volumeDef?: any): Sv2CapacityBrief => {
  if (!volumeDef) {
    return {
      runtimeLabel: '5分钟 · 标准短故事',
      capacityLabel: '未指定时长容量',
      outputTarget: '700-1100 中文字',
      capacity: '5分钟标准短故事容量；需要完整处境、遭遇、一个硬戏剧机关、高潮选择、代价与余味，并给关键动作、物件、关系和场域留出电影感细节。',
      plotBudget: '默认按约 5 分钟短片处理：最多 1 条主线、1 个主角、1 个核心对手/亲密对象、1 个制度性或群体压力、1 个主要空间加至多 1 个过渡空间、3-4 个关键节点、1 次真相揭示或终局选择；禁止独立支线、多阵营网络和多重反转链。',
      density: '中高密度；情节极简但因果要深，允许必要世界细节，但不得展开独立支线或写成设定说明。',
      compression: 'M 轴完整显影，次要信息折叠进动作、关系变化、物件状态和可见后果。',
      limits: '5分钟标准短故事不代表低文学密度，而代表低情节复杂度；字数用于增加场面、心理、对白、物件、节奏、生活材料和意象密度，不能增加支线、阵营、世界观层级或多重谜团。',
    };
  }

  const core = String(volumeDef.core || '');
  const mechanics = String(volumeDef.patch?.mechanics || '');
  return {
    runtimeLabel: extractSv2CoreField(core, '成片时长') || volumeDef.name || '未命名时长',
    capacityLabel: volumeDef.name || '已选时长容量',
    outputTarget: extractSv2OutputTarget(mechanics) || '700-1100 中文字',
    capacity: extractSv2CoreField(core, '叙事容量') || volumeDef.def || '',
    plotBudget: extractSv2CoreField(core, '情节容量上限') || '',
    density: extractSv2CoreField(core, '密度/压缩率') || '',
    compression: extractSv2CoreField(core, '压缩方式') || '',
    limits: extractSv2CoreField(core, '边界') || '',
  };
};

// ============================================================================
// V3 Prompt Builder
// ============================================================================

export const buildPromptV3 = (
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  mAxisMixer?: MAxisMixerState,
  m7bIntensity?: M7BResidueIntensity
): { text: string, images: string[] } => {

	  // === 提取基础素材 ===
	  const volumeTags = getTagsBySuffix(fieldState, '_volume');
	  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : DEFAULT_SV2_VOLUME_NAME;
	  const volumeDef = SV2_DATA.flatMap(c => c.items).find((v: any) =>
	    volumeTagRaw.includes(v.name)
	    || volumeTagRaw === v.id
	    || v.aliases?.some((alias: string) => volumeTagRaw.includes(alias))
	  );
	  const sv2Capacity = buildSv2CapacityBrief(volumeDef);
	  const m7bTags = getTagsBySuffix(fieldState, '_m7b');
	  const m7aTags = getTagsBySuffix(fieldState, '_m7a');
	  const activeM7BIntensity = normalizeM7BIntensity(m7bIntensity);
	  const hasActiveM7B = m7bTags.length > 0 && activeM7BIntensity !== 'off';
  const outputUpperBound = extractOutputUpperBound(sv2Capacity.outputTarget);
  const compactCapacityRule = outputUpperBound !== null && outputUpperBound <= 1100
    ? '- 当前 SV2 属于短体量输出：优先保证故事脊柱、关键选择、代价和结尾余味，同时给关键动作、关系、物件和场域留出电影感细节；次要 M 位点、制度细节和支线压力可以压缩为动作后果或物件状态，不必逐项展开。可以写得文学、浓郁、顺读，但不能变成多人物、多地点、多支线、多重反转的复杂故事。\n'
    : '';

  // ============================================================================
  // ① 身份声明
  // ============================================================================
	  const taskSentence = buildTaskSentence(fieldState, hasActiveM7B);
	  const SECTION_ROLE = `Role: 类型片故事架构师 & 文学级文本塑造者。
Task: ${taskSentence} 每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标。请先裁决用户创意、图片用途、锁定事实或参考范围，再写出能脱离术语复述的强情节故事机关，并让主体精神结构在行动链内部反咬意义。优先级：故事好看、完整、自然、可复述 > 精神结构合规 > 文学修辞。若 Task 中某些表层词与物理法则或 SUR3 精确坐标冲突，必须按世界法则与可行性转译协议处理；只有冲突时才降维。已被世界法则、SUR2/SUR3 或用户输入明确授权为世界事实的类型材料，必须按字面参与故事。`;

  // ============================================================================
  // ② 核心公式（纯位置关系，不含词条内容）
  // ============================================================================
  const SECTION_FORMULA = buildV3Formula(hasActiveM7B);

  // ============================================================================
  // ③ 阅读顺序与创作铁律
  // ============================================================================
  const SECTION_READING_ORDER = buildV3ReadingOrder(hasActiveM7B);
  const SECTION_LAWS = buildV3Laws(hasActiveM7B);

  // ============================================================================
  // ③B 叙事创作协议（冲突裁决 + 质量验收）
  // ============================================================================
	  const SECTION_DIVERGENCE_PROTOCOL = buildV3DivergenceProtocol(fieldState, hasActiveM7B, activeM7BIntensity);
	  const SECTION_WORLD_MATERIAL = buildCurrentCombinationJudgementV3(fieldState, worldLaw);
	  const SECTION_STORY_SEED_QUALITY = STORY_SEED_QUALITY_PROTOCOL_COMPACT;

  // ============================================================================
  // ④ 本次主体精神参数
  // ============================================================================
  const mEntries: (string | null)[] = [
    buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m2',           'M2. 真实遭遇', 'engine_m2', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, ['_m3', '_c3'],  'M3. 欲望幻想', 'engine_m3', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, ['_m4', '_c4'],  'M4. 大他者阻断', 'engine_m4', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m5',           'M5. 行动驱力', 'engine_m5', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m6',           'M6. 终极代价', 'engine_m6', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m7a',           'M7A. 象征裁决', 'engine_m7a', faceState, focusState, undefined, mAxisMixer),
    buildMDirective(fieldState, '_m7b',           'M7B. 实在余痕', 'engine_m7b', faceState, focusState, m7bIntensity, mAxisMixer),
  ];

  const directorBrief = mEntries.filter(Boolean).join('\n\n');
  const attentionController = buildAttentionControllerProtocol(fieldState, focusState, mAxisMixer, activeM7BIntensity);

  const SECTION_DIRECTOR = `## 本次主体精神参数（导演笔记）

  以下是本次故事的 M 轴具体参数。每一条都是导演对你说的话——不是定义，是指令。
这些拉康精神分析词条是叙事创作方法，不是病理报告、学术报告或人物诊断。它们只能进入已经成立的外部故事机关内部，转译为人物行动、场景压力、物件关系、信息释放和结尾余味；不得替代可见目标、阻断升级、高潮选择和代价兑现。
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明且适配 M 参数、世界物理法则和表层设定的全新场景承载它。严禁复现示例中的具体意象。

**M 参数阅读说明**：
- 标题：只标明该词条所在的 M 位置与名称，不能直接出现在 pitch_structure 正文中。
- 结构职责：说明该词条在主体运动中负责什么功能，优先把它落实为行动原因、关系压力和情节后果。
- 核心张力：只在该词条被标为“重点”时附带；重点词条是全局叙事核心，不等于同槽前景化。
- 位格：是该词条最短的运动公式，用来抓住它如何推动下一步选择。
- 导演笔记：只提供情感运动的节奏、温度和观看方式；不得复现其中的具体场景、物件、职业或年代细节。
- 防误读：是最低限度红线；如果与故事便利冲突，优先遵守防误读。

**注意力说明**：
- 下方“注意力控制器”统一裁定重点词、同槽前景化和调音台；不要在其他段落重复分配权重。
- M0 与 M7A 在意义层始终有效，但不得替代外部故事机关${hasActiveM7B ? '；M7B 只按当前显影档位决定余痕形式，不能反过来抢走结尾结构、制造第二结局或改写 M7A。' : '。'}
- 三案的前景化重心必须错开：PLOT 优先外部行动与阻断，FORM 优先载体焦点及其意义流转，ATMOSPHERE 优先场域压力与感官余痕。不要让三案都被同一组词条与同一种推进方式主导。
- 三案还必须错开“下一步为何发生”的机制：PLOT 由事件升级推动，FORM 由载体转手、损坏、误认或改写推动，ATMOSPHERE 由空间、资源、气味、噪声或拥挤变化推动。若任一案可被另一案无损替换，只是换了道具与形容词，必须重写。

${attentionController}

**M0 渗透法则**：M0 不是一个独立情节参数——它是主角进入外部故事机关的方式。M1-M7A${hasActiveM7B ? '/M7B' : ''} 的每一条导演笔记都必须经过 M0 的逻辑改写，但 M0 不得让故事退化成内心散文。测试方法：如果删掉外部目标、阻断和高潮选择后故事仍能成立，说明你写的是精神状态，不是故事，必须重写。

${directorBrief}`;

  // ============================================================================
  // ⑤ 本次世界与表层参数
  // ============================================================================
  // 精确坐标校准（坐标值已编织进 SECTION_ROLE 的任务句式中）
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  let spacetimeConstraint = '';
  if (exactYear || exactCountry) {
    const coordinateParts = [
      `时间锚=${exactYear ? formatYear(exactYear) : '未指定'}`,
      `空间锚=${exactCountry || '未指定'}`,
    ].join('；');
    spacetimeConstraint = `\n**SUR3. 精确坐标校准**: 当前坐标为【${coordinateParts}】。它只固定现实域、时间锚、空间锚和尺度边界；严格遵守该坐标的物理状貌、服饰、政治/制度现实、交通、技术边界和文化接口。若空间锚是现代国家名但时间早于该政体成立，只作为今日地理简称处理；若为空间站、异星、异维、虚拟、纳米或身体内部，则按该尺度重写身体、交通、危险和物件边界。`;
  }

  // 视觉锚点
  let visionSection = '';
  if (visionInput || visionImage) visionSection = '\n' + getVisionAnchorProtocol(visionInput, Boolean(visionImage));

  // SUR 补充说明（仅展示有 def 的已选参数）
  const surNotes = buildSurNotes(fieldState, faceState);

  // 合并：当前组合判定已集中裁决世界法则，这里只补充本轮具体锚点与已选词条说明
  const skinParts: string[] = [];
  if (spacetimeConstraint) skinParts.push(spacetimeConstraint);
  if (visionSection) skinParts.push(visionSection);
  if (surNotes) skinParts.push(surNotes);

  const SECTION_SKIN = skinParts.length > 0
    ? `## 本次世界与表层参数\n\n${skinParts.join('\n')}`
    : '';

  // ============================================================================
  // ⑦ 输出要求
  // ============================================================================
  // 体量
  const structureTags = getTagsBySuffix(fieldState, '_structure');
  const structureTag = structureTags.length > 0 ? structureTags[0] : DEFAULT_SV1_STRUCTURE_NAME;
  const structureDef = SV1_DATA.flatMap(c => c.items).find(s => structureTag.includes(s.name) || structureTag === s.id);

  const volumeLine = `${sv2Capacity.runtimeLabel} · ${sv2Capacity.capacityLabel}; 输出篇幅建议每个 Pitch ${sv2Capacity.outputTarget}`;

  // SV1/SV2 参数注入段
  let svProtocol = `\n### 本次结构与体量参数
- SV1 是全局结构权：决定三案共同的因果阶段、节点顺序与信息释放；初始固定项为【${DEFAULT_SV1_STRUCTURE_NAME}】，用户可改选其他结构。
- OPTION 1 的 pitch_structure JSON 字段直接使用 SV1 节点；OPTION 2/3 不复制 SV1 字段名，但必须在自身字段内部完成 SV1 的阶段功能。
- 例如 SV1=时间膨胀时，FORM/ATMOSPHERE 也要出现锚点、减速、感官过载和弹回后果，只是分别落在载体焦点或场域压力里。
- SV2 是全局成片时长、叙事容量与情节容量参数：它回答作品大约多长、最多能承载多少人物/场景/转折/支线、当前大纲应写多满。
- SV2 不是体裁、不是叙事容器、不是 OPTION 2 专属结构；不得根据原始词条名生成 MV、独白、博弈、仪式、章节计数、数字标题或可数流程。
	- SV2 的初始固定项为【${DEFAULT_SV2_VOLUME_NAME}】：按5分钟标准短故事容量执行；用户可改选其他时长/容量。
	- 当 SV2 与 SV1 冲突时，SV1 决定结构节点，SV2 只决定三案共同的容量上限、密度、压缩率和输出篇幅。
	- 5分钟标准短故事不代表低文学密度，而代表低情节复杂度；扩写只能增加场面、心理、对白、物件、节奏、生活材料和意象密度，不能为了凑字数新增支线、反派、阵营、世界观设定或多重反转。
	- 默认 5 分钟容量的核心不是“更多事件”，而是“情节极简、因果更深”：只允许一个硬戏剧机关，一次揭示或终局选择，揭示之后不得再追加新反转。
	- 后续创作可能加入作者风格；因此当前方案不要把 SV2 写成不可改变的最终文体。`;
  if (volumeDef) {
    svProtocol += `\n\n### SV2 全局时长/容量协议
**成片时长:** ${sv2Capacity.runtimeLabel}
**容量标签:** ${sv2Capacity.capacityLabel}
**叙事容量:** ${sv2Capacity.capacity}
**情节容量上限:** ${sv2Capacity.plotBudget}
**密度/压缩率:** ${sv2Capacity.density}
**压缩方式:** ${sv2Capacity.compression}
**输出篇幅:** 每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标；这是故事方案的说明精度，不等同于剧本页数。
**边界:** ${sv2Capacity.limits || `SV2 只约束三案共同的时长容量、情节复杂度和写作密度；不得覆盖 M0/M7A${hasActiveM7B ? '/M7B' : ''}、SUR1 类型动力、SUR2/SUR3 世界材料或 SV1 结构节点。`}`;
  } else {
    svProtocol += `\n\n### SV2 固定初始容量协议
**成片时长:** ${sv2Capacity.runtimeLabel}
**容量标签:** ${sv2Capacity.capacityLabel}
**叙事容量:** ${sv2Capacity.capacity}
**情节容量上限:** ${sv2Capacity.plotBudget}
**密度/压缩率:** ${sv2Capacity.density}
**压缩方式:** ${sv2Capacity.compression}
**输出篇幅:** 每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标；这是故事方案的说明精度，不等同于剧本页数。
**边界:** ${sv2Capacity.limits}`;
  }
  if (structureDef) {
    svProtocol += `\n\n### SV1 结构协议（高于 SV2）: ${structureDef.name}\n**定义:** ${structureDef.def || ''}\n**核心规则:**\n${structureDef.core || ''}`;
  } else {
    svProtocol += `\n\n### SV1 固定初始结构协议
**结构:** ${DEFAULT_SV1_STRUCTURE_NAME}。
**节点:** 激励事件 → 上升动作 → 高潮 → 余痕收束。
**规则:** PLOT 必须完整走完四步；FORM 与 ATMOSPHERE 不复制字段名，但必须在自身字段内完成同样的因果阶段。`;
  }

  // 动态叙事骨架：从 SV1 结构的 skeletons 字段获取，否则回退到经典四步
  const DEFAULT_SKELETONS = [
    'inciting_incident_激励事件',
    'rising_action_上升动作',
    'climax_高潮',
    'resolution_余痕收束',
  ];
  const pitchSkeletons = structureDef?.skeletons?.length ? structureDef.skeletons : DEFAULT_SKELETONS;
  const skeletonLabels = pitchSkeletons.map(s => {
    const parts = s.split('_');
    return parts[parts.length - 1];
  });
  const skeletonArrow = skeletonLabels.join(' → ');
  const formPitchSkeletons = [
    'carrier_entrance_载体入场',
    'carrier_mutation_功能变形',
    'carrier_crisis_载体危机',
    'carrier_residue_载体余痕',
  ];
  const formSkeletonArrow = '载体入场 → 功能变形 → 载体危机 → 载体余痕';
  const sensoryPitchSkeletons = [
    'field_state_场域初态',
    'pressure_system_秩序压力',
    'sensory_mutation_感官变形',
    'residue_frame_余痕停点',
  ];
  const sensorySkeletonArrow = '场域初态 → 秩序压力 → 感官变形 → 余痕停点';
  const skeletonJsonKeysCompact = buildJsonShape(pitchSkeletons);
  const formJsonKeysCompact = buildJsonShape(formPitchSkeletons);
  const sensoryJsonKeysCompact = buildJsonShape(sensoryPitchSkeletons);

	  const bannedWords = buildBannedWords(fieldState);
	  const softAvoidLabels = buildSoftAvoidLabels(fieldState, activeM7BIntensity);
		  const designAuditLines = [
		    '机关：三案均有目标、阻断、升级。',
		    '压力：三案均有外部压力装置。',
		    '高潮：三案均由主角亲手选择。',
		    '代价：三案均改变关系/秩序/物件。',
		    `结尾：三案均有回咬${hasActiveM7B ? '与余痕' : ''}。`,
		    '边界：世界法则、容量、禁词通过。',
		  ].map((line, index) => `${index + 1}. ${line}`).join('\n');

	  const SECTION_OUTPUT = `## 输出要求

**体量/时长**: ${volumeLine}${structureTag ? ` | **结构**: ${structureTag}` : ''}
${svProtocol}

**音色**: 故事色调由 Task 中指定的故事类型决定。暴力仅在叙事转折点使用，每个故事最多一处显性暴力描写。禁止连续堆砌血腥场景。身体细节服务于心理冲击，不服务于感官刺激。

**形式约束**:
- 当前阶段是高密度故事方案创作，不是最终文学正文。每个 Pitch 以 SV2 输出篇幅为目标；若结构复杂可略超，但不得因修辞、审查或解释性文字膨胀。
- 每个 Pitch 必须遵守 SV2 情节容量上限：${sv2Capacity.plotBudget} 字数用于清晰呈现事件链，不用于增加人物数量、场景数量、支线数量或反转层数。
- 每个 Pitch 必须优先保证故事脊柱，并能被一句话复述：人物想要什么、目标如何受阻、他采取什么方法、方法造成什么副作用、他在高潮做出什么不可逆选择、付出什么代价、M7A 如何回头改写行动意义${hasActiveM7B ? '；M7B 严格按当前显影档位处理余痕形式' : ''}。
${hasActiveM7B ? `- **M7B 显影强度:** ${buildM7BIntensityBrief(activeM7BIntensity)}\n` : ''}
${compactCapacityRule}- 三个方案风格互不雷同。可在 SV2 容量允许时扩展必要的外部冲突、转折、轻支线和世界机制；字数优先用于外部事件、阻断升级、行动选择、后果兑现和结尾翻转。
- 每个 Pitch 必须明确至少一个压力装置：倒计时、目击者、契约、追捕、封锁、资源短缺、身份暴露、禁令、交易失败、证据易手或同等级外部压力。没有压力装置则重写。
- OPTION 1 必须包含：${skeletonArrow}。
- OPTION 2 必须包含：${formSkeletonArrow}。它是载体焦点路径，不是 SV2 路径，也不是文学体裁路径；必须选择一个来自已选 SUR/M 的可见载体作为侧面观察点。载体可以是物件、手续、凭证、路线、事件、流程、媒介、公共机制、关系仪式或反复动作。故事仍须有完整因果，但叙述重心放在这个载体如何被使用、误认、争夺、改写或遗留；不得由 SV2 原始词条名、数字标题或章节数量直接决定。
- OPTION 3 必须包含：${sensorySkeletonArrow}。它以空间、物件、声音、味觉、身体和环境压力组织故事，但仍必须拥有明确目标、阻断升级、高潮选择和代价兑现；不得只是 OPTION 1 的弱情节复述或情绪散文。
- 语言：清晰直白的叙事语言，优先因果逻辑而非修辞美感。严禁剧本格式/学术论文腔/网络小说腔。严禁堆砌隐喻。
- 每个 pitch_structure 字段必须像连续故事大纲的一段，上一字段的动作、物件或信息推动下一字段；不得写成清单、设定摘要或互不相连的概念句。
- 正文只写事件、动作、选择、后果、物件和感官残留；不得写主题解释、制度评论、哲学判断或作者替角色总结意义。

**三种观看方式（同一精神公式，三种故事侧重点）**:
三个故事共享同一组 M0-M7A、同一 SUR 世界、同一主情绪曲线${hasActiveM7B ? '，以及已选 M7B 的余痕显影约束' : ''}，但观看侧重点不同。区别不是“三套结构”或“三种文体”，而是同一个故事问题从不同方向被看见：
OPTION 1 [PLOT / 事件运动版]: 正面看。重点回答“事件如何发生、升级、转折、收束”。服从当前 SV1；若未改选，则服从【${DEFAULT_SV1_STRUCTURE_NAME}】。侧重外部目标、阻断升级、行动因果、类型片完整性和不可逆选择。M4 具象化为可见外部力量。
OPTION 2 [FORM / 载体焦点版]: 斜目而视。重点回答“故事意义附着在哪个可见载体上”。它不改变 SV1 的结构权，也不指定文学体裁；必须选择一个来自已选 SUR/M 的可见载体作为创意焦点，例如一件物、一道手续、一场公共动作、一条路线、一个身份凭证、一种交易规则或一次关系仪式。它不是 PLOT 的道具替换版，而是围绕载体的流转、误认、占有、转手、污染或遗留来推进故事。故事仍须有完整因果，但叙述重心放在这个载体如何被不同人使用、误认、争夺、改写或遗留。载体必须真实推动至少一个不可逆选择，不能只是道具、标题或象征；不得自动写成“第几张/第几次/几份/几轮”的可数章节容器。
OPTION 3 [ATMOSPHERE / 场域压力版]: 沉进去看。重点回答“故事被什么空间/环境压出来”。它不是 PLOT 的气氛版，也不是 FORM 的背景版，而是围绕空间压缩、资源耗损、噪声、气味、拥挤、封锁、温度或路线变化来推进。M4 弥散为环境性力量，但必须有可见秩序机制；下一步必须由场域变化触发，而不是只靠人物换念头。

**格式硬约束**:
- 严禁输出 <thought_process>；只输出 <design_audit> 和 JSON 数组。若输出 <thought_process>，视为格式失败。
- 三案 type 必须严格为 PLOT / FORM / ATMOSPHERE；严禁使用 STRUCTURALIST / POST_STRUCTURALIST / THE_REAL。
- 三案必须写出 compiler 字段，且严格为 SV1_DRIVEN / FORM_DRIVEN / SENSORY_FIELD。
	- <design_audit> 必须匹配当前 Task、当前 SUR 与当前 M 词条，严禁复用上一轮或其他样例。
	- <design_audit> 只写极简检查结论，不写故事提纲。总字数不超过 160 中文字；每项只能一行，每行不超过 24 中文字；禁止写三案具体梗概、角色名、地点名、反转内容或解释。

**硬禁词（仅 pitch_structure 正文）**: [ ${bannedWords} ]

**参数复述限制**:
以下抽象参数名不得在 pitch_structure 正文中作为解释性标签机械复述；必须转译为世界内称谓、制度、动作、关系压力或场面后果。精确年份、地点、对象、可见收场等世界材料可以正常使用，但不得被写成参数清单或设定说明：
[ ${softAvoidLabels || '无'} ]

	**结构审查（必须先输出，极简结论，不写推理过程）**:
	\`\`\`xml
	<design_audit>
${designAuditLines}
	</design_audit>
	\`\`\`

**JSON 格式**:
\`\`\`json
[
  { "id": "1", "type": "PLOT", "compiler": "SV1_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${skeletonJsonKeysCompact} }, "structure": "PLOT_DRIVEN" },
  { "id": "2", "type": "FORM", "compiler": "FORM_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${formJsonKeysCompact} }, "structure": "FORM_DRIVEN" },
  { "id": "3", "type": "ATMOSPHERE", "compiler": "SENSORY_FIELD", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${sensoryJsonKeysCompact} }, "structure": "ATMOSPHERE_DRIVEN" }
]
\`\`\`

**结项宪法（只作生成约束，不得作为额外输出段落）**:
${m7aTags.length > 0 ? `- M7A [${m7aTags.join('/')}] 回溯性地决定整个故事的意义。严禁篡改。` : ''}
${hasActiveM7B ? `- M7B [${m7bTags.join('/')}] 仅按当前显影强度执行：${buildM7BIntensityBrief(activeM7BIntensity)} 严禁借余痕新增第二结局、第二反转或解释段。` : ''}`;

  // ============================================================================
  // 最终拼接
  // ============================================================================
  const sections = [
    SECTION_ROLE,
    SECTION_READING_ORDER,
    SECTION_FORMULA,
    SECTION_LAWS,
    SECTION_DIVERGENCE_PROTOCOL,
    SECTION_WORLD_MATERIAL,
    SECTION_STORY_SEED_QUALITY,
    SECTION_DIRECTOR,
    SECTION_SKIN,
    SECTION_OUTPUT,
  ].filter(s => s.length > 0);

  const finalText = sections.join('\n\n');
  return { text: finalText, images: visionImage ? [visionImage] : [] };
};
