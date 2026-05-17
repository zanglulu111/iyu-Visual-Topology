// ============================================================================
// V3: Director's Brief Architecture
// 设计原理：以 directive（导演语言）为第一公民，替代 core（理论语言）。
// 每个 M 参数以「导演笔记」的形式注入 AI，而非学术定义卡片。
// 公式升级为 M0-M7A/M7B 双结项。
// ============================================================================

import { NarrativeFieldState, WorldLawConfig, FaceState, PromptFocusState, DirectiveFace, M7BResidueIntensity } from '../types';
import { getDirective, findItemFull } from './dataRegistry';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';
import { buildWorldLawLevelPrompt, normalizeWorldLawConfig } from './worldLaw';

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
export const buildSoftAvoidLabels = (fieldState?: NarrativeFieldState): string => {
  if (!fieldState) return "";
  const tags = Object.entries(fieldState)
    .filter(([key]) => SOFT_AVOID_EXACT_KEYS.includes(key) || SOFT_AVOID_KEY_SUFFIXES.some(suffix => key.endsWith(suffix)))
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
    role: '这是低权重的末帧余震。它不是第二结尾、不是后日谈、不是额外段落，而是 M7A 已经完成后仍粘在最后一个动作、物件、声音或身体状态上的一点残留。',
    guardrail: '不得新增时间跳转、新场景、新事件或解释段；不得使用“后来、几天后、多年后、从此、每年这一天”等后日谈句式。0-3 句即可，也可以融入 M7A 的最后动作里。',
  },
};

const shouldEmitCore = (tag: string, blockId: string, focusState?: PromptFocusState): boolean => {
  return Boolean(focusState?.[tag] || focusState?.[blockId]);
};

export const DEFAULT_M7B_INTENSITY: M7BResidueIntensity = 'light';

export const normalizeM7BIntensity = (intensity?: M7BResidueIntensity): M7BResidueIntensity =>
  intensity || DEFAULT_M7B_INTENSITY;

export const M7B_INTENSITY_BRIEFS: Record<M7BResidueIntensity, string> = {
  off: '关闭：不强制执行 M7B；即使已选 M7B，也只保留故事自然产生的余味，不追加余痕句。',
  implicit: '隐性：只在最后画面里留下一个轻微异常、空位或感官错位；不点名、不解释，通常不超过 1 句。',
  light: '轻触：默认强度。最后 1-3 句留下身体、物件、声音、目光、姿势或空间余震；不得另起尾声。',
  strong: '强显影：M7B 可以成为最后一个核心画面，但仍必须停在主线最后场面内；不得新增后日谈、时间跳转或新事件。'
};

export const buildM7BIntensityBrief = (intensity?: M7BResidueIntensity): string =>
  M7B_INTENSITY_BRIEFS[normalizeM7BIntensity(intensity)];

const sanitizeM7BResidueText = (value: unknown): string => {
  const raw = typeof value === 'string' ? value : '';
  const cleaned = raw
    .replace(/尘埃落定后很久[，,]?\s*/g, '')
    .replace(/尘埃落定后[，,]?\s*/g, '')
    .replace(/故事结束后[，,]?\s*/g, '')
    .replace(/象征裁决之后[，,]?\s*/g, '')
    .replace(/^(后来|几天后|多年后|三个月后|每年这一天|从此)[，,]?\s*/g, '')
    .replace(/\s*\|\s*实在余痕\(Σ\):.*$/g, '')
    .replace(/\s*\|\s*Residuum:.*$/gi, '')
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
  item?: any
): string => {
  const profile = findM0ExecutionProfile(tag, item);
  const promptName = profile?.promptName || '结构组织方式';
  const structuralFunction = profile?.structuralFunction || sanitizeM0FallbackText(info.def);
  const worldLogic = profile?.worldLogic || sanitizeM0FallbackText(info.topology || info.core);
  const actionPattern = profile?.actionPattern || sanitizeM0FallbackText(info.directive);
  const pressureTrigger = profile?.pressureTrigger || '当 M2/M4 打破主体原有稳定方式时，行动必须按该结构重新组织，而不是按普通性格反应处理。';
  const endingConstraint = profile?.endingConstraint || '结尾不能写成治愈、诊断或心理解释；必须让最后选择、物件位置或关系变化回头证明这个结构一直在运作。';

  return `**${label}**: **【${promptName}】**
[结构职责] ${M_SLOT_PROTOCOLS.engine_m0.role}
[模型转译] 这是 M0 的模型执行名；不得输出、复述或暗示原始临床/精神分析类别。把它写成主体让世界成立的方式，而不是病名、人格缺陷或心理病例。
[世界稳定方式] ${worldLogic}
[欲望组织方式] ${structuralFunction}
[行动组织方式] ${actionPattern}
[触发压力] ${pressureTrigger}
[结尾约束] ${endingConstraint}
[防误读] ${M_SLOT_PROTOCOLS.engine_m0.guardrail} 禁止在正文出现精神分析、临床、诊断、患者化称呼或“某人有某种心理问题”的说明句；只允许通过选择、对白、场面调度、物件关系、感官秩序和因果后果显影。`;
};

/** 提取单个 M 参数的导演笔记 */
export const buildMDirective = (
  fieldState: NarrativeFieldState,
  suffix: string | string[],
  label: string,
  blockId: string,
  faceState?: FaceState,
  focusState?: PromptFocusState,
  m7bIntensity?: M7BResidueIntensity
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

    if (blockId === 'engine_m0') {
      parts.push(buildM0Directive(tag, label, info, item));
      continue;
    }

    if (blockId === 'engine_m7b') {
      const intensity = normalizeM7BIntensity(m7bIntensity);
      if (intensity === 'off') continue;
      const residueNature = sanitizeM7BResidueText(info.def || info.core || info.directive);
      parts.push(`**${label}**: **【${info.name}】**
[结构职责] ${M_SLOT_PROTOCOLS.engine_m7b.role}
[余震性质] ${residueNature}
[显影强度] ${M7B_INTENSITY_BRIEFS[intensity]}
[末帧转译] 只把它压缩为最后一个已发生动作/物件/声音/身体反应上的 0-3 句；可以融入 M7A 高潮动作同一句，不能另起尾声。
[忽略规则] 忽略词条中任何“尘埃落定后、后来、三个月后、每年、回到家、走进某处”等后日谈式示例；不得照搬 M7B 词条的长导演笔记或新增剧情。`);
      continue;
    }

    const slotProtocol = M_SLOT_PROTOCOLS[blockId];
    const roleLine = slotProtocol ? `[结构职责] ${slotProtocol.role}\n` : '';
    const coreLine = info.core && shouldEmitCore(tag, blockId, focusState) ? `[核心张力] ${info.core}\n` : '';
    const topologyLine = info.topology ? `[位格] ${info.topology}\n` : '';
    const guardrailLine = slotProtocol ? `[防误读] ${slotProtocol.guardrail} 导演笔记中的具体画面只是情感运动示例，必须根据当前 SUR 世界重新发明物理载体；严禁复现示例剧情。\n` : '';
    const content = info.directive || info.def;
    parts.push(`**${label}**: **【${info.name}】**\n${roleLine}${coreLine}${topologyLine}[导演笔记] ${content}\n${guardrailLine}`);
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

export const buildTaskSentence = (fieldState: NarrativeFieldState): string => {
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

  // Fragment A: SUR3+SUR2 — 在【时空】的【场域】世界中
  const hasTime = exactYear || exactCountry;
  if (hasTime || era.length > 0) {
    let w = '在';
    if (hasTime) {
      const timeParts = [exactYear ? formatYear(exactYear) : null, exactCountry].filter(Boolean).join('');
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
  const PREFIX = '根据下方主体爱欲精神公式（M0-M7A/M7B 双结项）、本次主体精神参数与故事表层设定参数';

  if (fragments.length === 0 && genreNames.length === 0) {
    return `${PREFIX}，讲一个故事。`;
  }

  if (fragments.length === 0) {
    return `${PREFIX}，讲一个${bracket(genreNames.join('、'))}故事。`;
  }

  return `${PREFIX}，讲一个${fragments.join('，')}${genreSuffix}`;
};

/** 构建 SUR 参数位置说明（按叙事功能分类，标注与M轴的接口关系） */
export const buildSurNotes = (fieldState: NarrativeFieldState, faceState?: FaceState): string => {
  const displayName = (t: string) => t.split('(')[0].trim();

  const resolveDirective = (item: any, face: DirectiveFace): string | null => {
    if (!item?.directive) return null;
    if (typeof item.directive === 'string') return item.directive;
    return item.directive[face] || item.directive['tension'] || null;
  };

  const getItemNotes = (tags: string[]): string[] => {
    const notes: string[] = [];
    for (const tag of tags) {
      const item = findItemFull(tag) as any;
      if (item?.def) {
        const face: DirectiveFace = faceState?.[tag] || 'tension';
        const dir = resolveDirective(item, face);
        let note = `- **【${item.name || displayName(tag)}】**: ${item.def}`;
        if (dir) note += `\n  → 叙事指令：${dir}`;
        notes.push(note);
      }
    }
    return notes;
  };

  const categories: { label: string; desc: string; tags: string[] }[] = [
    {
      label: 'SUR1. 故事类型·全局色调',
      desc: '故事的外部叙事动力与类型发动机。标题是主指令，应决定故事的主冲突形态、张力释放方式、行动组织和观众期待；下方描述只提供可选的类型词汇场，不是必备剧情清单，不得机械塞入每个例词。',
      tags: getTagsBySuffix(fieldState, '_genre'),
    },
    {
      label: 'SUR2. 背景场域·全局质感',
      desc: '故事的血肉场域与世界质感。它不只是视觉滤镜，而要生成可见制度、空间材料、权力气味、日常物件、危险来源、公共秩序和群体行为；所有 M 参数都要穿过这个场域变成可拍事件。',
      tags: getTagsBySuffix(fieldState, '_era'),
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
    const items = getItemNotes(cat.tags);
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
    conflictRules.push('- [SUR2×SUR3 场域与时空优先级] SUR2 提供宏观时代场、制度气味和生活材料；SUR3（精确时空坐标）提供更具体的年份、国家/地理和物理锚点。两者是缩放关系而非对立关系：先用 SUR3 固定可落地的时间与地点，再让 SUR2 在这个锚点内展开。若两者冲突，SUR3 的物理现实优先，SUR2 必须本地化。');
  }

  const conflictBlock = conflictRules.length > 0
    ? `\n**SUR 冲突裁决协议**:\n${conflictRules.join('\n')}\n`
    : '';

  return sections.length > 0 ? `\n**SUR 表层设定参数**:\n以下是用户主动选择的 SUR（表层设定）参数，故事需要清晰纳入这些选择。每个 SUR 参数标注了它为哪个 M 参数提供物理载体——即它在故事的哪个结构层面发挥作用。对于 SUR1，词条标题是故事类型主指令，def 只是类型参考，不是强制元素清单。\n${conflictBlock}\n${sections.join('\n\n')}` : '';
};

// ============================================================================
// V3 共享常量（供分歧点 + 圣经复用）
// ============================================================================

export const V3_FORMULA = `## 主体爱欲精神公式（M0-M7A/M7B）

本公式基于拉康精神分析理论，用来规定主角的爱欲精神运动。M0-M7A/M7B 是后台精神坐标，不是外部剧情大纲；它们决定人物为什么痛、为什么误认、为什么行动、为什么付出代价，以及结尾如何回头改写前文意义。外部故事仍必须作为完整、精彩、可复述的文学故事成立。

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
- M7B 和 M7A 是同一枚硬币的两面：M7A 在象征界（这个故事变成了什么），M7B 在实在界（身体上仍有什么无法被意义吞掉）。M7A 负责完成结尾，M7B 只负责最后一帧的余震；它不是第二结尾、不是后日谈、不是单独段落。若已选 M7B，只能把它压缩为最后动作、物件、声音、目光、姿势或身体反应上的 0-3 句；可以融入 M7A 的同一终点。严禁新增“后来/几天后/多年后/每年/回到某处”的尾声场景。

**M轴与SUR轴的关系**:
- M0-M7A/M7B 是结构——主角精神运动的必然位置。未指定的 M 参数不要求单独占据场景，只允许由外部故事机关自然补位；不得主动发明新的术语级 M 词条。未指定 M7B 时不得主动追加独立余痕段，只保留故事自然产生的结尾余味。
- SUR1-SUR10 + SUR-END 是表层设定参数（故事类型、背景场域、时空、社会形态、身份、信念与显性收场等）——创作者主动选择的现象层元素。被指定的是这个故事的重心，未指定的由你自由发挥。SUR1 的标题是故事类型主指令，def 只是可选类型词汇场；SUR-END 只能规定最后可见的外部收场，不能裁决故事意义；意义归 M7A，末帧余味可由 M7B 轻触。
- SUR 对 M 的操作是「提供物理载体」：M 定义精神运动的逻辑（如 M4="秩序拒绝你的欲望"），SUR 决定这个逻辑在故事世界中的物质形态（如 M4 在赛博朋克中是信用评分归零，在武侠中是被逐出师门）。换一层皮肤，逻辑的形状变了，但逻辑本身不能变。

**同一槽位双词条法则**:
当同一个 M 槽位装填了两个词条时：
- 它们之间的关系不是「叠加」而是「张力对冲」。
- 当同一槽位的两个词条代表同一个人内部的两股相反的力：一个是他自己承认的欲望，另一个是他不敢承认的欲望。
- 被前景化的双词条，必须在同一个节点/场景里发生不可两全选择，并在后续兑现后果。
- 未前景化的双词条作为暗流存在，进入动作、语气、误认和余味，不强制大场面兑现。
- 严禁将同一槽位的两个词条融合为一个统一人格。它们是裂痕，不是合金。`;

export const V3_LAWS = `## 创作铁律

命名：严禁通用名（Tom/Alice/小明）。严禁网文中二词。默认国际化，无中国风标签则严禁中文名。基于时空设定构思独特真名。
禁令：严禁正文出现 M0-M7A/M7B 标签原词。严禁出现 M0 的临床原名、诊断式称呼、患者化称呼或“某人患有/属于某种结构”的说明句。严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工说明书语法。严禁使用「读者会/读者在此刻/观众会」等元叙事句式，严禁叙述者替读者总结故事的意义。
面具：故事首先作为合格类型片运作。99%完美类型片，1%视差裂痕。模仿底层逻辑，严禁堆砌表层符号。
冲突通则：当后续任一 M 词条的表面方向与 M0 发生冲突时，优先按 M0 重新编码；它可以变形、加深、转向、伪装成突破或清醒，但不能被写成真正跳出该系统的解脱。若 M5 与 M0 表面冲突，M5 的“醒来”必须被改写为该结构的进一步自洽化，而不是摆脱结构或被心理治愈。`;

export const V3_READING_ORDER = `## 阅读顺序

请按以下顺序理解本任务：
1. 先建立外部故事机关：谁想要什么、谁挡住、局势如何升级、高潮必须做什么不可逆选择。这个机关必须在不依赖任何 M 术语的情况下也能成立。
2. 再读取 SUR1 故事类型、SUR2/SUR3 世界材料、SUR9 行动权限和 SV1/SV2 结构容量，把故事机关落成可拍事件链。
3. 然后让 M0-M7A/M7B 进入这个事件链内部，改写人物为什么误认、为什么重复、为什么付出代价，以及结尾如何回头改变行动意义。
4. 最后严格按输出要求返回三条可发展为完整作品的故事大纲。`;

export const V3_DIVERGENCE_PROTOCOL = `## 叙事创作协议

**创作目标**:
现在要生成的是三条可发展为完整作品的强情节故事方案，而不是最终定稿正文，也不是主体精神结构说明。每个方案必须先有一个不依赖任何 M 轴也能成立的故事机关：人物为什么行动、目标如何受阻、局势如何升级、他在高潮做出什么不可逆选择、选择如何兑现代价、结尾留下什么余味。M 层不是外部剧情模板，而是进入故事机关之后改变行动意义的暗线污染；真正的外部故事必须由 SUR1 故事类型、SUR 世界、角色行动、事件升级和你主动发明的叙事机制共同生成。文学性服务于叙事，不得把故事写成论文、说明书、情绪散文或参数清单。

**强故事机关优先原则**:
- 先写出“删掉 M 词条仍然好看”的外部故事，再让 M 轴在其中反咬意义。若故事只能靠精神结构解释才成立，视为失败。
- 每个 Pitch 至少包含一个硬戏剧机关：信息不对称、错误任务、被迫共谋、误杀/误救、目击者压力、倒计时、空间封锁、资源短缺、身份暴露、契约陷阱、背叛交换、救人与自保不可兼得。
- 高潮必须是主角亲手做出的不可逆选择，不是事故发生、真相揭晓、旁人解释、环境压垮或氛围自然消散。
- 结尾的厉害之处不是“很有余韵”，而是读者回头发现：前半段每一个看似合理的行动，都在把主角推向他自己制造的代价。

**双轨叙事裁决**:
- 外轨 = SUR1 故事类型 + SUR2 背景场域 + SUR 世界载体：负责故事如何精彩、悬疑、爱情、奇幻、惊悚、史诗化或荒诞化地发生，也负责这个精彩故事由什么制度、空间、物件、危险和群体行为构成。观众先看到的是外部故事，再在故事中体会主体精神。
- 内轨 = M0-M7A/M7B：负责主体为什么痛、为什么误认、为什么撞向阻断、为什么付出代价，以及结尾如何回头改写主体行动。
- M0/M1/M3/M7 更偏主体内部精神斗争；M2/M4/M5/M6 必须在外部叙事上放大为可见事件、持续压力、行动后果和世界/关系变化。
- 生成顺序上，外部故事机关先于 M 轴解释；意义裁决上，M0/M7A 可以回头改写这个机关。严禁为了 M 轴合规牺牲故事性。
- 严禁把 M 层逐项写成有板有眼的参数清单。正确做法是：用 SUR1 和外部发明保证故事本身精彩，用 M 层让故事在结尾变得更深。

**SUR1/SUR2 血肉生成职责**:
- SUR1 不是普通色调标签，而是外部叙事发动机：每个 Pitch 的主冲突、事件升级、情感/悬疑/奇观释放方式和结尾类型落点，都必须能看出它由 SUR1 驱动。
  - SUR2 不是普通视觉滤镜，而是故事血肉场域：它必须生成具体制度、空间材料、权力气味、生活物件、危险来源、公共秩序和群体行为。不要只写氛围词，要让角色真的在这个场域里交易、躲避、被检查、被诱惑、被追赶或被规训。若 SUR3 已明确，SUR2 需服从该时空坐标展开。
- SUR1×SUR2 必须相互翻译：SUR1 提供“故事怎样运动”，SUR2 提供“故事用什么世界材料运动”。例如爱情不能只写相爱，必须变成该场域中可见的礼法、信物、距离、误会、目光和不可说；末世暴君场域不能只写奢华火焰，必须变成税令、替罪羊、祭典、巡逻、废墟经济、队列恐慌或公共狂欢。
  - SUR2 与 SUR3 都属于外部世界层，但 SUR3 更具体、更高优先级。SUR2 提供宏观时代场、制度气味和生活材料；SUR3 提供具体年份、国家/地理与物理锚定。两者同时出现时，先用 SUR3 固定坐标，再让 SUR2 在这个坐标里展开，不得写成两个互相独立的宇宙。
  - 若只选择其中一层，就只输出已被选择那层的可兼容推演，不要补写未选层的裁决或注解。
- 三案的主导观看方式必须错开：PLOT 正面看事件运动；FORM 斜目而视一个可见载体；ATMOSPHERE 沉进空间、环境、身体感和群体秩序。FORM 的载体必须来自故事材料本身，不得从 SV2 词条名、数字标题或章节数量里硬造。不要三案都落回同一种“空容器”终点。
- PLOT / FORM / ATMOSPHERE 只是观看入口，不是情节强弱等级。三案都必须有完整故事脊柱、可见目标、升级阻断、高潮选择和代价兑现；FORM/ATMOSPHERE 不得变成弱情节散文或纯场域诗。
- 每个 Pitch 至少要让一个关键事件由 SUR1 的类型动力触发，并让一个关键阻断或反转由 SUR2 的场域机制触发。

**SUR1 故事类型执行协议**:
写作前必须先在心里把 SUR1 化为五个执行部件，不要把这个准备过程写进正文：
1. 类型承诺：这个故事承诺给读者什么类型快感，例如爱情的克制与错过、悬疑的发现与反转、复仇的追索与反噬、逃杀的压迫与脱身、奇幻的未知与奇观。
2. 外部目标：主角在表层故事中必须追求一个可见、可阻断、可失败、可复述的目标。这个目标可以服务 M3/M5，但不能只是内心状态。
3. 阻力语法：阻碍必须符合该类型的常见运动方式，例如礼法/误会/阶级差、追捕/倒计时/空间封锁、谜团/假线索/证据错位、敌手/契约/禁令等。
4. 升级方式：事件必须一层层变强，不得只重复同一个冲突。每个节点至少让目标更难、关系更紧、信息更危险、空间更窄或代价更不可逆。
5. 类型落点：结尾必须给出类型意义上的满足或反满足，例如相认、错过、揭露、逃脱、夺回、失去、反杀、沉默拥抱、信物归位、秩序重排等。
- 严禁只把 SUR1 写成氛围、题材名、结尾标签或装饰性元素。SUR1 必须具体改变 pitch_structure 中的事件选择、阻力设计和结尾落点。

**故事发明许可证**:
- 在不篡改已选 M/SUR 参数核心功能、且不突破 SV2 情节容量上限的前提下，你可以主动发明必要的阵营压力、轻支线、谜团、仪式、交易、误会、追逐、秘密、社会机制、权力博弈、反转和连锁事故。
- 已选 M/SUR 是基础，不是天花板。每个新增元素都必须服务外部类型推进，或让某个 M 词条产生更强行动后果。
- 新增设定必须服从世界法则、精确时空和背景场域；不得为了精彩而引入与已锁定世界冲突的跨时代物件、未授权科技或不合物理等级的奇迹。若科幻/未来/奇幻材料已被世界法则、SUR2/SUR3 或用户输入明确授权，它们不是“越界设定”，而是外部故事机关可直接调用的世界现实；仅 SUR1 类型标题不构成本体授权。
- 这个引擎的目标是灵感辅助，不是把世界压成唯一正确解。默认保留足够的容错率，让随机组合也尽量产出 80-85+ 的可用方案，并在参数理顺时频出佳作；人工只需避开明显离谱的组合，不要把系统缩成只会产出窄门模板。

**裁决优先级（从高到低）**:
1. 外部故事机关：可见目标、阻断升级、信息差、不可逆选择和代价兑现必须先成立。
2. SUR2/SUR3 世界材料：作为物理坐标裁判，决定制度血肉、空间材料、权力气味、日常物件、技术边界和群体行为。
3. SUR1 故事类型：决定类型快感、情节张力、事件组织和观众可复述的故事形态；若与 SUR2/SUR3 冲突，按世界法则 L1-L5 处理，不能直接删除。
4. SV1/SV2 结构容量：决定阶段顺序、时长容量、人物/场景/转折上限和输出篇幅。
5. M0 操作系统：不替代故事机关，只改写主角如何进入、误认和重复这个机关。
6. M1-M6 因果链：缺口、遭遇、幻想、阻断、驱力、代价必须落在已经成立的外部事件链里。
7. M7A/M7B 双结项：负责结尾回溯意义与末帧余震；不得提前倒推整个故事都围绕结项转。
8. SUR 物理载体：给 M 轴和外部故事提供具体身份、对象、空间、制度和可见终端事件。
9. 文风与修辞：只负责清晰、电影感和文学质地，不负责裁决故事意义。

**后台可行性转译协议**:
写作前必须静默完成冲突转译，不要把这个过程写进正文。任何词条与时代、物理等级、背景场域冲突时，按以下顺序裁决：
1. 世界法则 L1-L5 只裁决 SUR1 故事类型与 SUR2/SUR3 时空物理坐标的冲突：L1 写实=坐标闭锁；L2 折译=类型同构转译；L3 缝合=局部异常承载但不确证本体；L4 升维=类型本体授权、架空/异史/技术分歧；L5 狂想=梦、神话和跨时代拼贴接管世界规则。
2. SUR3 精确时空决定物理状貌、服饰、政治面貌、技术边界和文化接口。
3. SUR2 背景场域提供宏观世界母体、制度气味、生活材料、权力语法和美学滤镜；若与 SUR3 冲突，必须本地化为当前时空可信形态。
4. M/SUR 词条中的 def、reference、导演笔记示例只取结构功能，不复制时代不适配的具体物件；但如果该具体物件已被 SUR2/SUR4/SUR5/SUR9 或用户输入授权为当前世界材料，可以按字面使用。
- 降维只在冲突时发生，不是默认动作。若精确时空/主控场域不支持现代科技，跨时代物件必须按功能拆解后降维：监控/摄像头/多屏墙 → 看守岗楼、瞭望孔、轮值记录、铃声警戒、火盆信号、人工巡逻；指纹/控制台/门禁按钮 → 手印泥封、骨牌嵌合、祭司验印、钥匙孔、身份仪式、机关栓；超级武器 → 当前时代可信的水闸、火油库、城门机关、祭坛火种、军械库通行权、粮仓/水源控制权。
- 当世界法则、SUR2/SUR3、SUR4/SUR5/SUR9 或用户输入已经明确授权近未来、赛博朋克、太空殖民、AI 治理、义体、克隆、仿生体、异星生态、魔法制度等世界材料为当前世界事实时，禁止把这些材料自动降维为普通现实等价物；必须让它们承担制度、空间、物件、风险或日常流程上的具体叙事功能。SUR1 只授权类型运动，只有在 L4/L5 或用户明确声明下才授权类型本体。
- 若 SUR3 使用现代国家名但年代早于该国家成立，按今日地理区域处理，只取地貌、气候、贸易路线、族群接触和物质文化可能性，不套用现代国家制度。

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
写作前先在后台分配三案的生活领域，不要把这个分配过程写进正文。三个 Pitch 必须从不同的可见生活领域取材，例如市场交易、食物气味、手工劳动、身体照护、交通迁移、居住空间、仪式流程、表演娱乐、医疗救援、治安巡防、火灾水源、服饰纹样、摊位陈列、亲属登记、公共路线、建筑开闭、声音节律等。
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
- M7B 不是结尾硬塞的感官标签，也不是一个必须展开的结尾段。若已选 M7B，只允许作为末帧余震附着在最后动作、物件、声音、目光、姿势或身体反应上；0-3 句即可，不得新增尾声、时间跳转、新场景、新事件或解释段。
- M7B 可以在前文有轻微感官回声，但不得为了铺垫 M7B 额外增加专门场景、支线或重复仪式。三案若都使用 M7B，余震媒介不得同构为同一种守候动作。
- SUR-END 只给最后可见画面，不能替 M7A 裁决意义，也不能把 M7B 拖成后日谈。

**M4 阻断功能标准**:
M4 的代理人、制度或环境必须至少展示一次真实功能：它确实保护了某些人、维持了某种秩序、避免了一场更坏的事故，或让共同体得以继续运转。即使是 ATMOSPHERE 方案，也必须让环境性阻断对应一个可见的秩序机制，而不是只写成雾、风、沉默或压迫感。

**三案分歧标准**:
三个 Pitch 共享同一 M7A、选中的 M7B 末帧余震、主情绪曲线和用户锁定的关键 SUR 参数，但必须形成真正分歧。不要为了分歧而更换用户已经选择的主角身份、核心物件或地点；应在同一身份、同一物件、同一场域下发展出不同用途、冲突机制、行动方式和结尾媒介。
- 三案至少在以下六项中形成四项差异：职业触发方式、核心物件功能、M4 物理载体、M5 重复动作、信息释放媒介、主导载体/组织方式。
- 三案不得全部依赖同一种证据装置完成结尾，例如不得都使用“照片/录音/文件/缺页补齐”的同构组合。若 SUR-END 要求证据摊开，三案也必须改变证据的物质类别、排列逻辑和信息释放方式。
- 三案的 M5 重复动作不得同构：不能都是“收集证据→排列证据→发现缺口”。至少一个方案必须让行动驱力通过关系、空间、身体或公共秩序显影。
- 三案不得让同一种机构、同一种中介职业、同一种记录系统、同一种表演舞台或同一种仪式流程反复承担核心功能。若某一类机构或媒介在 OPTION 1 中承担 M4 或 M7A，OPTION 2/3 必须更换为不同生活领域。`;

export const WORLD_MATERIAL_ACTIVATION_PROTOCOL = `## 世界材料激活协议

世界法则不是“越写实越不能科幻”的滑杆，也不是额外添加奇观的按钮。它只处理一个问题：当 SUR1 故事类型与 SUR2/SUR3 时空物理坐标冲突时，类型材料是否能成为世界事实，以及不能成为事实时如何保留类型动力。

**授权层级**:
- 用户输入/图像/精确时空坐标 > SUR3 > SUR2。它们决定这个故事世界的物理、技术、制度、文化、交通、武器、身体与生活材料边界。
- SUR1 决定故事类型、叙事动力、冲突快感和氛围基调；不能被删除，不能因为时空冲突而失效，但它本身不自动授权外星人、超能力、鬼神、魔法、义体、AI 治理等奇观本体真实存在。
- 本体授权只能来自图像事实、SUR2/SUR3 已经支持的世界材料、当前世界法则 L4/L5，或用户明确声明且未被当前世界法则否决的世界事实。
- SUR4/SUR5/SUR6/SUR9、SUR-END 等表层材料若与时空坐标冲突，按当前世界法则转译为该坐标内可成立的材料；若已被本体授权，则必须作为世界现实承担叙事功能。

**L1-L5 执行**:
- L1 写实：坐标闭锁。SUR1 冲突时只保留类型气质、节奏、阻力语法和观看快感，不写真正超常本体。
- L2 折译：默认推荐。严守坐标，同时把 SUR1 类型承诺折译为当前世界内可成立的同构故事机关。
- L3 缝合：现实坐标仍是底座，允许局部异常、传闻、仪式、幻觉、象征物或不可证实事件承载类型压力，但不扩展成完整新现实。
- L4 升维：类型本体授权。SUR1 可以反向改写 SUR2/SUR3，形成架空历史、异史、技术分歧或类型化世界；真实外星、异能、魔法或异星生态可以成为世界事实，但必须交代分歧点、来源、运行方式和代价。
- L5 狂想：允许梦、神话、象征和跨时代拼贴接管世界规则，但故事目标、阻断、升级、高潮选择和代价兑现仍要清楚。

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
2. 类型纯度清楚：主冲突、阻力语法、升级方式和结尾落点由已选故事类型驱动。
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

const buildWorldMaterialActivationProtocolV3 = (
  fieldState: NarrativeFieldState,
  worldLaw: WorldLawConfig
): string => {
  const genreTags = getTagsBySuffix(fieldState, '_genre');
  const eraTags = getTagsBySuffix(fieldState, '_era');
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  const hasSpacetime = Boolean(exactYear || exactCountry);
  const worldLawLevel = normalizeWorldLawConfig(worldLaw).gravity || 2;
  const needsOntologyProtocol = genreTags.length > 0 && (eraTags.length > 0 || hasSpacetime || worldLawLevel !== 2);
  const noWorldCoordinate = genreTags.length > 0 && !hasSpacetime && eraTags.length === 0;

  if (!needsOntologyProtocol && !noWorldCoordinate) return '';

  const lines: string[] = [
    '## 世界材料激活协议',
    '',
    '世界法则只处理一个问题：当故事类型与时空物理坐标冲突时，类型材料是否能成为世界事实；若不能，如何保留类型动力。',
    '',
    '**本体授权**:',
    '- SUR1 负责类型语法、冲突快感和叙事运动；它本身不自动授权外星人、超能力、鬼神、魔法、义体、AI 治理等奇观本体真实存在。',
    '- 类型本体只能来自图像事实、SUR2/SUR3 已支持的世界材料、当前世界法则 L4/L5，或用户明确声明且未被当前世界法则否决的世界事实。',
    '- 若已被授权为世界事实，超现实/科幻/灵异材料必须承担具体制度、空间、风险、物件或日常流程功能；不得被自动压扁成隐喻。',
  ];

  if (needsOntologyProtocol) {
    lines.push(
      '',
      '**冲突转译**:',
      '- L1/L2 下，冲突类型材料优先转译为当前坐标可信的信号误读、公共神话、装备能力、制度实验、表演骗局、谣言危机、救援责任或同构事件机关。',
      '- L3 下，异常可以改变人物行动和公共反应，但不能扩展成完整新现实。',
      '- L4/L5 下，类型本体可以成为世界事实，但必须交代来源、运行方式、公共后果和代价。',
    );
  }

  if (noWorldCoordinate) {
    lines.push(
      '',
      '**未指定时空时**:',
      '- 不要默认当代，也不要默认历史。先按故事类型选择最有戏剧张力且可维持因果的世界坐标；坐标一旦成立，仍按当前世界法则判断类型材料是否字面化。',
      '- 避免廉价套壳。霓虹、义体、魔法、神话或复古元素只有在推动目标、阻断、升级、高潮选择和代价兑现时才进入故事。',
    );
  }

  return lines.join('\n');
};

const buildV3DivergenceProtocol = (
  fieldState: NarrativeFieldState,
  hasActiveM7B: boolean
): string => {
  const hasProfession = hasTagsBySuffix(fieldState, '_profession');
  const hasSurEnd = hasTagsBySuffix(fieldState, '_ending');
  const hasM7A = hasTagsBySuffix(fieldState, '_m7a');
  const hasMultiM = hasMultipleMInAnySlot(fieldState);

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
    optionalSections.push(`**M7B 执行**:
- M7B 只作为末帧余震附着在最后动作、物件、声音、目光、姿势或身体反应上；0-3 句即可。
- 不得新增尾声、时间跳转、新场景、新事件或解释段；三案余震媒介不得同构。`);
  }

  if (hasSurEnd) {
    optionalSections.push(`**SUR-END 边界**:
- SUR-END 只规定最后可见画面，不能替 M7A 裁决意义，也不能把 M7B 拖成后日谈。
- 若显性收场要求证据、仪式、归还、摊开或揭露，三案必须改变物质类别、排列逻辑和信息释放方式。`);
  }

  return `## 叙事创作协议

**创作目标**:
生成三条可发展为完整作品的强情节故事方案，而不是最终正文、主题阐释或参数清单。每个方案先建立不依赖 M 轴也成立的外部故事机关：人物为什么行动、目标如何受阻、局势如何升级、高潮做出什么不可逆选择、选择如何兑现代价、结尾留下什么余味。M 层只进入行动链内部，改变误认、重复、代价和回头意义。

**强故事机关优先**:
- 先写出“删掉 M 词条仍然好看”的外部故事，再让 M 轴反咬意义。
- 每个 Pitch 至少包含一个硬戏剧机关：信息不对称、错误任务、被迫共谋、误杀/误救、目击者压力、倒计时、空间封锁、资源短缺、身份暴露、契约陷阱、背叛交换、救人与自保不可兼得。
- 高潮必须是主角亲手做出的不可逆选择，不是事故发生、真相揭晓、旁人解释、环境压垮或氛围自然消散。

**正交分工**:
- SUR1 是外部叙事发动机：决定类型承诺、可见目标、阻力语法、升级方式和类型落点。故事类型要纯，不要只当氛围标签。
- SUR2/SUR3 是世界材料和物理坐标：决定制度、空间、技术边界、生活物件、权力气味和群体行为。时代感必须进入行动，而不是停在布景。
- 世界法则只裁决 SUR1 类型与 SUR2/SUR3 坐标冲突时的本体权限；若不冲突，不要额外降维。
- SV1 管结构节点，SV2 管容量上限和输出密度；FORM/ATMOSPHERE 不复制 SV1 字段名，但必须在自身字段内部完成同样阶段功能。
- M0 是主角进入外部故事机关的方式；M1-M6 改写行动原因、关系压力和后果；M7A/M7B 只处理结尾回咬与末帧余震，不得提前倒推整个故事。

**SUR1/SUR2/SUR3 融合**:
- 每个 Pitch 至少让一个关键事件由 SUR1 的类型动力触发，并让一个关键阻断或反转由 SUR2/SUR3 的世界机制触发。
- SUR1×SUR2/SUR3 必须相互翻译：类型提供“故事怎样运动”，世界提供“故事用什么材料运动”。爱情要变成该坐标里的距离、礼法、信物和误会；惊悚要变成可见封锁、追捕、缺氧、检查或声音秩序；科幻/超常要先通过世界法则确认本体权限。

**M 词条落实**:
- 每案只前景化最能推动该方案的 1-2 组 M 冲突，其余作为暗流进入语气、误认、动作延迟、关系压力或结尾余味。
- 前景化词条必须通过三项校验：删掉它主角下一步行动就不成立；它有具体场景/动作/物件/关系压力；它造成的选择在后文兑现代价。
- M2/M4/M5/M6 必须外化为可见事件、持续压力、重复行动后果和世界/关系变化。
- M4 的制度、代理人或环境必须至少展示一次真实功能：保护某些人、维持队列、阻止事故、保护资源或让共同体继续运转。

**三案分歧**:
- PLOT 正面看事件运动；FORM 斜目而视一个可见载体；ATMOSPHERE 沉进空间、环境、身体感和群体秩序。三者都是强情节，不是情节强弱等级。
- 三案至少四项不同：核心物件功能、阻断机制、重复动作、信息释放媒介、主导载体/组织方式、结尾物态。
- 三案不得全部依赖同一种证据装置、记录系统、表演舞台、仪式流程或中介职业完成结尾。

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
      runtimeLabel: '标准短片',
      capacityLabel: '未指定时长容量',
      outputTarget: '500-800 中文字',
      capacity: '标准短片故事容量；需要完整处境、遭遇、阻断、行动、代价与余味。',
      plotBudget: '默认按 5 分钟以内短片处理：最多 1 条主线、2-3 个核心人物、1-2 个主要空间、3-5 个关键节点、1 次真相揭示或终局选择；禁止独立支线和多重反转链。',
      density: '中等密度；允许清晰因果链和少量辅助压力，但不得展开独立支线或写成设定说明。',
      compression: 'M 轴完整显影，次要信息折叠进动作、关系变化和可见后果。',
      limits: '短体量不代表低文学密度，而代表低情节复杂度；字数只能增加场面、心理、对白、物件和意象密度，不能增加支线、阵营、世界观层级或多重谜团。',
    };
  }

  const core = String(volumeDef.core || '');
  const mechanics = String(volumeDef.patch?.mechanics || '');
  return {
    runtimeLabel: extractSv2CoreField(core, '成片时长') || volumeDef.name || '未命名时长',
    capacityLabel: volumeDef.name || '已选时长容量',
    outputTarget: extractSv2OutputTarget(mechanics) || '500-800 中文字',
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
  m7bIntensity?: M7BResidueIntensity
): { text: string, images: string[] } => {

	  // === 提取基础素材 ===
	  const volumeTags = getTagsBySuffix(fieldState, '_volume');
	  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : "";
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
	  const compactCapacityRule = outputUpperBound !== null && outputUpperBound <= 800
	    ? '- 当前 SV2 属于短体量输出：优先保证故事脊柱、关键选择、代价和结尾余味；次要 M 位点、制度细节和支线压力可以压缩为动作后果或物件状态，不必逐项展开。短体量可以写得文学、浓郁、电影感强，但不能变成多人物、多地点、多支线、多重反转的复杂故事。\n'
	    : '';

  // ============================================================================
  // ① 身份声明
  // ============================================================================
	  const taskSentence = buildTaskSentence(fieldState);
	  const SECTION_ROLE = `Role: 类型片故事架构师 & 文学级文本塑造者。
Task: ${taskSentence} 每个 Pitch 以 ${sv2Capacity.outputTarget} 为目标。请先写出不依赖 M 轴也能成立的强情节故事机关，再让主体精神结构在行动链内部反咬意义。优先级：故事好看、完整、自然、可复述 > 精神结构合规 > 文学修辞。若 Task 中某些表层词与物理法则或精确时空冲突，必须按世界法则与后台可行性转译协议处理；只有冲突时才降维。已被世界法则、SUR2/SUR3 或用户输入明确授权为世界事实的类型材料，必须按字面参与故事。`;

  // ============================================================================
  // ② 核心公式（纯位置关系，不含词条内容）
  // ============================================================================
  const SECTION_FORMULA = V3_FORMULA;

  // ============================================================================
  // ③ 阅读顺序与创作铁律
  // ============================================================================
  const SECTION_READING_ORDER = V3_READING_ORDER;
  const SECTION_LAWS = V3_LAWS;

  // ============================================================================
  // ③B 叙事创作协议（冲突裁决 + 质量验收）
  // ============================================================================
	  const SECTION_DIVERGENCE_PROTOCOL = buildV3DivergenceProtocol(fieldState, hasActiveM7B);
	  const SECTION_WORLD_MATERIAL = buildWorldMaterialActivationProtocolV3(fieldState, worldLaw);
	  const SECTION_STORY_SEED_QUALITY = STORY_SEED_QUALITY_PROTOCOL_COMPACT;

  // ============================================================================
  // ④ 本次主体精神参数
  // ============================================================================
  const mEntries: (string | null)[] = [
    buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0', faceState, focusState),
    buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1', faceState, focusState),
    buildMDirective(fieldState, '_m2',           'M2. 真实遭遇', 'engine_m2', faceState, focusState),
    buildMDirective(fieldState, ['_m3', '_c3'],  'M3. 欲望幻想', 'engine_m3', faceState, focusState),
    buildMDirective(fieldState, ['_m4', '_c4'],  'M4. 大他者阻断', 'engine_m4', faceState, focusState),
    buildMDirective(fieldState, '_m5',           'M5. 行动驱力', 'engine_m5', faceState, focusState),
    buildMDirective(fieldState, '_m6',           'M6. 终极代价', 'engine_m6', faceState, focusState),
    buildMDirective(fieldState, '_m7a',           'M7A. 象征裁决', 'engine_m7a', faceState, focusState),
    buildMDirective(fieldState, '_m7b',           'M7B. 实在余痕', 'engine_m7b', faceState, focusState, m7bIntensity),
  ];

  const directorBrief = mEntries.filter(Boolean).join('\n\n');

  const SECTION_DIRECTOR = `## 本次主体精神参数（导演笔记）

以下是本次故事的 M 轴具体参数。每一条都是导演对你说的话——不是定义，是指令。
这些拉康精神分析词条是叙事创作方法，不是病理报告、学术报告或人物诊断。它们只能进入已经成立的外部故事机关内部，转译为人物行动、场景压力、物件关系、信息释放和结尾余味；不得替代可见目标、阻断升级、高潮选择和代价兑现。
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明且适配 M 参数、世界物理法则和表层设定的全新场景承载它。严禁复现示例中的具体意象。

**M 参数阅读说明**：
- 标题：只标明该词条所在的 M 位置与名称，不能直接出现在 pitch_structure 正文中。
- 结构职责：说明该词条在主体运动中负责什么功能，优先把它落实为行动原因、关系压力和情节后果。
- 核心张力：只在该词条被标为“重点/前景化”时附带；它负责把少数关键词条的亮面和暗面展开成可对撞的压力。
- 位格：是该词条最短的运动公式，用来抓住它如何推动下一步选择。
- 导演笔记：只提供情感运动的节奏、温度和观看方式；不得复现其中的具体场景、物件、职业或年代细节。
- 防误读：是最低限度红线；如果与故事便利冲突，优先遵守防误读。

**重点规则**：
- 默认只发送标题、结构职责、位格、导演笔记、防误读。
- 只有被标为重点的词条，才额外发送核心张力。

**多词条主次说明**：
- 同一 M 槽位出现多个词条时，不要平均摊派戏份；每个方案只前景化最能推动该方案的 1-2 组冲突，其余词条作为暗流进入动作、语气、误认和余味。
- 前景化的双词条必须形成不可两全选择；背景化的双词条不必各自占据大场面，但不能被完全抹除。
- M0 与 M7A 在意义层始终有效，但不得替代外部故事机关；M7B 只作为低权重末帧约束生效，不能反过来扩写成新尾声或抢走结尾结构。
- 三案的前景化重心必须错开：PLOT 优先外部行动与阻断，FORM 优先载体焦点及其意义流转，ATMOSPHERE 优先场域压力与感官余痕。不要让三案都被同一组词条与同一种推进方式主导。

**M0 渗透法则**：M0 不是一个独立情节参数——它是主角进入外部故事机关的方式。M1-M7A/M7B 的每一条导演笔记都必须经过 M0 的逻辑改写，但 M0 不得让故事退化成内心散文。测试方法：如果删掉外部目标、阻断和高潮选择后故事仍能成立，说明你写的是精神状态，不是故事，必须重写。

${directorBrief}`;

  // ============================================================================
  // ⑤ 本次世界与表层参数
  // ============================================================================
  const gravityRule = buildWorldLawPrompt(worldLaw);

  // 精确时空坐标约束（时空值已编织进 SECTION_ROLE 的任务句式中）
  const exactYear = getTagsBySuffix(fieldState, '_year_exact')[0] || null;
  const exactCountry = getTagsBySuffix(fieldState, '_country_exact')[0] || null;
  let spacetimeConstraint = '';
  if (exactYear || exactCountry) {
    spacetimeConstraint = `\n**SUR3. 精确时空坐标约束**: 严格还原${exactYear ? formatYear(exactYear) : '?'}${exactCountry || '?'}的物理状貌、服饰与政治面貌。覆盖一切模糊标签。`;
  }

  // 视觉锚点
  let visionSection = '';
  if (visionInput || visionImage) visionSection = '\n' + getVisionAnchorProtocol(visionInput, Boolean(visionImage));

  // SUR 补充说明（仅展示有 def 的已选参数）
  const surNotes = buildSurNotes(fieldState, faceState);

  // 合并：物理法则 + 时空约束 + 视觉锚点 + SUR 补充说明
  const skinParts: string[] = [gravityRule];
  if (spacetimeConstraint) skinParts.push(spacetimeConstraint);
  if (visionSection) skinParts.push(visionSection);
  if (surNotes) skinParts.push(surNotes);

  const SECTION_SKIN = `## 本次世界与表层参数\n\n${skinParts.join('\n')}`;

  // ============================================================================
  // ⑦ 输出要求
  // ============================================================================
  // 体量
  const structureTags = getTagsBySuffix(fieldState, '_structure');
  const structureTag = structureTags.length > 0 ? structureTags[0] : "";
  const structureDef = SV1_DATA.flatMap(c => c.items).find(s => structureTag.includes(s.name) || structureTag === s.id);

  const volumeLine = `${sv2Capacity.runtimeLabel} · ${sv2Capacity.capacityLabel}; 输出篇幅建议每个 Pitch ${sv2Capacity.outputTarget}`;

  // SV1/SV2 参数注入段
  let svProtocol = `\n### 本次结构与体量参数
- SV1 是全局结构权：决定三案共同的因果阶段、节点顺序与信息释放；未选择 SV1 时使用默认四步骨架。
- OPTION 1 的 pitch_structure JSON 字段直接使用 SV1 节点；OPTION 2/3 不复制 SV1 字段名，但必须在自身字段内部完成 SV1 的阶段功能。
- 例如 SV1=时间膨胀时，FORM/ATMOSPHERE 也要出现锚点、减速、感官过载和弹回后果，只是分别落在载体焦点或场域压力里。
- SV2 是全局成片时长、叙事容量与情节容量参数：它回答作品大约多长、最多能承载多少人物/场景/转折/支线、当前大纲应写多满。
- SV2 不是体裁、不是叙事容器、不是 OPTION 2 专属结构；不得根据原始词条名生成 MV、独白、博弈、仪式、章节计数、数字标题或可数流程。
- 未选择 SV2 时，默认按标准短片容量执行：500-800 中文字、单一主线、少量核心人物、少数空间和一次关键揭示/终局选择。
- 当 SV2 与 SV1 冲突时，SV1 决定结构节点，SV2 只决定三案共同的容量上限、密度、压缩率和输出篇幅。
- 短体量不代表低文学密度，而代表低情节复杂度；扩写只能增加场面、心理、对白、物件、节奏和意象密度，不能为了凑字数新增支线、反派、阵营、世界观设定或多重反转。
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
**边界:** ${sv2Capacity.limits || 'SV2 只约束三案共同的时长容量、情节复杂度和写作密度；不得覆盖 M0/M7A/M7B、SUR1 类型动力、SUR2/SUR3 世界材料或 SV1 结构节点。'}`;
  } else {
    svProtocol += `\n\n### SV2 默认短片容量协议（未选择 SV2）
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
    svProtocol += `\n\n### SV1 默认结构协议（未选择 SV1）
**结构:** 默认四步因果骨架。
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
	  const softAvoidLabels = buildSoftAvoidLabels(fieldState);
	  const hasSelectedSur1 = hasTagsBySuffix(fieldState, '_genre');
	  const hasSelectedWorldMaterial = hasSelectedSur1
	    || hasTagsBySuffix(fieldState, '_era')
	    || Boolean(exactYear || exactCountry);
	  const designAuditLines = [
	    '故事机关：三案各一句 X想要Y但Z。',
	    '压力装置：三案各列一个倒计时/封锁/契约等。',
	    '高潮选择：三案各列不可逆选择。',
	    'M污染：一句话写 M0 如何改写行动方式。',
	    'M7A：A→B，不解释。',
	    'M4：三案各写一个被保护对象。',
	    ...(hasActiveM7B ? ['M7B：只列末帧余震。'] : []),
	    ...(hasSelectedSur1 ? ['SUR1：三案各写类型动力一句。'] : []),
	    ...(hasSelectedWorldMaterial ? ['世界材料：三案各写类型/场域/时空机制一句。'] : []),
	    '分歧：列事件运动/载体焦点/场域关键词。',
	    '底子：机关/揭示/选择/代价齐全。',
	    '容量：未超过SV2人物/场景/转折上限。',
	    '边界：硬禁未入正文;参数已转译。',
	  ].map((line, index) => `${index + 1}. ${line}`).join('\n');

	  const SECTION_OUTPUT = `## 输出要求

**体量/时长**: ${volumeLine}${structureTag ? ` | **结构**: ${structureTag}` : ''}
${svProtocol}

**音色**: 故事色调由 Task 中指定的故事类型决定。暴力仅在叙事转折点使用，每个故事最多一处显性暴力描写。禁止连续堆砌血腥场景。身体细节服务于心理冲击，不服务于感官刺激。

**形式约束**:
- 当前阶段是高密度故事方案创作，不是最终文学正文。每个 Pitch 以 SV2 输出篇幅为目标；若结构复杂可略超，但不得因修辞、审查或解释性文字膨胀。
- 每个 Pitch 必须遵守 SV2 情节容量上限：${sv2Capacity.plotBudget} 字数用于清晰呈现事件链，不用于增加人物数量、场景数量、支线数量或反转层数。
- 每个 Pitch 必须优先保证故事脊柱，并能被一句话复述：人物想要什么、目标如何受阻、他采取什么方法、方法造成什么副作用、他在高潮做出什么不可逆选择、付出什么代价、M7A 如何回头改写行动意义；如有 M7B，只在末帧留下轻微余味。
${m7bTags.length > 0 ? `- **M7B 显影强度:** ${buildM7BIntensityBrief(activeM7BIntensity)}\n` : ''}
${compactCapacityRule}- 三个方案风格互不雷同。可在 SV2 容量允许时扩展必要的外部冲突、转折、轻支线和世界机制；字数优先用于外部事件、阻断升级、行动选择、后果兑现和结尾翻转。
- 每个 Pitch 必须明确至少一个压力装置：倒计时、目击者、契约、追捕、封锁、资源短缺、身份暴露、禁令、交易失败、证据易手或同等级外部压力。没有压力装置则重写。
- OPTION 1 必须包含：${skeletonArrow}。
- OPTION 2 必须包含：${formSkeletonArrow}。它是载体焦点路径，不是 SV2 路径，也不是文学体裁路径；必须选择一个来自已选 SUR/M 的可见载体作为侧面观察点。载体可以是物件、手续、凭证、路线、事件、流程、媒介、公共机制、关系仪式或反复动作。故事仍须有完整因果，但叙述重心放在这个载体如何被使用、误认、争夺、改写或遗留；不得由 SV2 原始词条名、数字标题或章节数量直接决定。
- OPTION 3 必须包含：${sensorySkeletonArrow}。它以空间、物件、声音、味觉、身体和环境压力组织故事，但仍必须拥有明确目标、阻断升级、高潮选择和代价兑现；不得只是 OPTION 1 的弱情节复述或情绪散文。
- 语言：清晰直白的叙事语言，优先因果逻辑而非修辞美感。严禁剧本格式/学术论文腔/网络小说腔。严禁堆砌隐喻。
- 每个 pitch_structure 字段必须像连续故事大纲的一段，上一字段的动作、物件或信息推动下一字段；不得写成清单、设定摘要或互不相连的概念句。
- 正文只写事件、动作、选择、后果、物件和感官残留；不得写主题解释、制度评论、哲学判断或作者替角色总结意义。

**三种观看方式（同一精神公式，三种故事侧重点）**:
三个故事共享同一组 M0-M7A、同一 SUR 世界、同一主情绪曲线${hasActiveM7B ? '，以及已选 M7B 的末帧余震约束' : ''}，但观看侧重点不同。区别不是“三套结构”或“三种文体”，而是同一个故事问题从不同方向被看见：
OPTION 1 [PLOT / 事件运动版]: 正面看。重点回答“事件如何发生、升级、转折、收束”。服从 SV1 或默认四步骨架，侧重外部目标、阻断升级、行动因果、类型片完整性和不可逆选择。M4 具象化为可见外部力量。
OPTION 2 [FORM / 载体焦点版]: 斜目而视。重点回答“故事意义附着在哪个可见载体上”。它不改变 SV1 的结构权，也不指定文学体裁；必须选择一个来自已选 SUR/M 的可见载体作为创意焦点，例如一件物、一道手续、一场公共动作、一条路线、一个身份凭证、一种交易规则或一次关系仪式。故事仍须有完整因果，但叙述重心放在这个载体如何被不同人使用、误认、争夺、改写或遗留。载体必须真实推动至少一个不可逆选择，不能只是道具、标题或象征；不得自动写成“第几张/第几次/几份/几轮”的可数章节容器。
OPTION 3 [ATMOSPHERE / 场域压力版]: 沉进去看。重点回答“故事被什么空间/环境压出来”。以空间压力、环境秩序、资源变化、物件错位、身体反应和感官余痕组织故事。M4 弥散为环境性力量，但必须有可见秩序机制。

**格式硬约束**:
- 严禁输出 <thought_process>；本版本只能输出 <design_audit>。若输出 <thought_process>，视为格式失败。
- 三案 type 必须严格为 PLOT / FORM / ATMOSPHERE；严禁使用 STRUCTURALIST / POST_STRUCTURALIST / THE_REAL 等旧标签。
- 三案必须写出 compiler 字段，且严格为 SV1_DRIVEN / FORM_DRIVEN / SENSORY_FIELD。
- <design_audit> 必须匹配当前 Task、当前 SUR 与当前 M 词条，严禁复用上一轮或其他样例的角色、地点、结尾逻辑。
- <design_audit> 是机器审查摘要，不是创作说明。总字数不超过 350 中文字；每项只能一行，每行不超过 35 中文字；禁止展开解释、举例或复述剧情。

**硬禁词（仅 pitch_structure 正文）**: [ ${bannedWords} ]

**参数复述限制**:
以下抽象/后台参数名不得在 pitch_structure 正文中作为解释性标签机械复述；必须转译为世界内称谓、制度、动作、关系压力或场面后果。精确年份、地点、对象、可见收场等世界材料可以正常使用，但不得被写成参数清单或设定说明：
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
${hasActiveM7B ? `- M7B [${m7bTags.join('/')}] 仅按当前显影强度作为末帧余震保留；严禁另起尾声、后日谈、新场景或时间跳转。` : ''}`;

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
