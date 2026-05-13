// ============================================================================
// V3: Director's Brief Architecture
// 设计原理：以 directive（导演语言）为第一公民，替代 core（理论语言）。
// 每个 M 参数以「导演笔记」的形式注入 AI，而非学术定义卡片。
// 公式升级为 M0-M7A/M7B 双结项。
// ============================================================================

import { NarrativeFieldState, WorldLawConfig, FaceState, DirectiveFace } from '../types';
import { getDirective, findItemFull } from './dataRegistry';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';

// ============================================================================
// 工具函数
// ============================================================================

export const GRAVITY_RULES: Record<number, string> = {
  1: `**物理法则 LV.1 [写实]**
边界：绝对锁死时空物理常数。严禁奇迹、超自然、灵异、超能力、克隆、仿生体、人工智能意识体、任何当前科技水平不存在的技术。死亡不可逆。
降维：超出现实的标签强制降维为该时空可信的等价物（修仙→武术苦修，义体→假肢工艺，替身→外貌酷似的陌生人，意识上传→日记/录音）。当 M 参数的字面含义超出写实边界时，必须找到该时空内可信的物理等价物。LV 约束优先级高于 M 参数字面含义。
未指定时空时：基于 M 参数反向推演最合逻辑的历史坐标。严禁默认当代。默认国际化场域。尽可能丰富地理坐标与文化背景的多样性。`,

  2: `**物理法则 LV.2 [合理]**
边界：允许奇观，但每个超常元素必须有科学/心理学/技术的实体解释。无法解释的严禁出现。
降维：超现实标签附着合理化机制（预言→统计学直觉，心灵感应→极端共情训练）。
未指定时空时：推演合逻辑的时代。允许近未来硬科幻。默认国际化场域。尽可能丰富地理坐标与文化背景的多样性。`,

  3: `**物理法则 LV.3 [缝合]**
边界：残酷现实为底座，允许局部超现实符号。超自然不解释、不主导、不体系化。
降维：允许症状级超现实（伤口长出花朵），禁止体系化超自然（魔法学院、异能等级）。
未指定时空时：推演服务于标签张力的时空。可以是现实中的异质空间。尽可能丰富地理坐标与文化背景的多样性。`,

  4: `**物理法则 LV.4 [奇观]**
边界：超自然/科幻协议公开运行。魔法、异能作为世界基础设施。内部规则必须自洽。
降维：无需降维。标签直接取字面含义运作。世界观需有内部逻辑。
未指定时空时：发明服务于标签张力的架空世界。需基本世界观框架。`,

  5: `**物理法则 LV.5 [狂想]**
边界：梦境逻辑。隐喻等同物理现实。因果律可弃。重力、生死随情绪坍塌。
降维：反向升维——写实标签拔升至神话维度（外科医生→切开维度的人）。
未指定时空时：放手创造榨干标签张力的异世界。无需解释。`,
};

export const getTagsBySuffix = (fieldState: NarrativeFieldState, suffixes: string | string[]): string[] => {
  const sfxArray = Array.isArray(suffixes) ? suffixes : [suffixes];
  return Object.keys(fieldState)
    .filter(k => sfxArray.some(sfx => k.endsWith(sfx)))
    .flatMap(k => fieldState[k]);
};

/** 构建禁用词表 */
export const buildBannedWords = (fieldState: NarrativeFieldState): string => {
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

const M_SLOT_PROTOCOLS: Record<string, { role: string; guardrail: string }> = {
  engine_m0: {
    role: '这是整部故事的精神操作系统。它不是症状标签、性格标签或题材风味，而是改写 M1-M7A/M7B 每一步如何运作的底层法则。',
    guardrail: '不得只把它写成角色有某种心理问题；必须让它改变推理方式、选择方式、行动节奏、结尾余味和世界被感知的方式。',
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
    role: '这是实在余痕。它不是主题总结或情绪收尾，而是意义裁决之后仍无法被语言消化、只能留在身体/感官/动作里的残留。',
    guardrail: '不得在结尾硬塞身体反应；必须从前半段植入前兆，并让终态用不同感官通道返回。',
  },
};

/** 提取单个 M 参数的导演笔记 */
export const buildMDirective = (
  fieldState: NarrativeFieldState,
  suffix: string | string[],
  label: string,
  blockId: string,
  faceState?: FaceState
): string | null => {
  const suffixes = Array.isArray(suffix) ? suffix : [suffix];
  const tags = getTagsBySuffix(fieldState, suffixes);
  if (tags.length === 0) return null;

  const parts: string[] = [];
  for (const tag of tags) {
    const face = faceState?.[tag] || faceState?.[blockId] || 'tension';
    const info = getDirective(tag, blockId, face);
    if (!info) continue;

    const slotProtocol = M_SLOT_PROTOCOLS[blockId];
    const roleLine = slotProtocol ? `[结构职责] ${slotProtocol.role}\n` : '';
    const coreLine = info.core ? `[核心张力] ${info.core}\n` : '';
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

  // 组装：前半句指向导演笔记，后半句为 SUR 场景句式
  const PREFIX = '根据以下拉康精神分析派的叙事创作公式以及「导演笔记」中的主角精神弧线（M0-M7A/M7B 双结项）结合故事表层设定参数';

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
      desc: '故事的类型节奏。标题是主指令，应优先体现该电影/故事类型；下方描述只提供可选的类型词汇场，不是必备剧情清单，不得机械塞入每个例词。',
      tags: getTagsBySuffix(fieldState, '_genre'),
    },
    {
      label: 'SUR2. 背景场域·全局质感',
      desc: '决定 M 参数的文化场域肌理与世界质感。',
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
    conflictRules.push('- [SUR1×SUR2 类型与场域分工] SUR1（故事类型）管「怎么讲」——节奏、张力释放方式、类型期待。SUR2（背景场域）管「世界长什么样」——物理常数、视觉质感、能指频率。当两者暗示不同世界时（如 SUR1=科幻 但 SUR2=古代），以 SUR2 的世界外观为准，SUR1 仅控制叙事节奏和类型语法。两者叠加后向下染色一切具体参数——身份、信念、对象预设、空间容器都必须穿上这层染色后的衣壳。');
  }

  if (eraTags.length >= 1 && hasSpacetime) {
    conflictRules.push('- [SUR2×SUR3 场域与时空优先级] SUR3（精确时空坐标）是不可违背的物理锚点——该年代/地区的真实物理状貌、服饰、政治面貌具有绝对优先权。SUR2（背景场域）在 SUR3 的物理约束内提供美学滤镜和风格化处理。当两者冲突时，SUR3 的物理现实覆盖 SUR2 的风格想象。');
  }

  const conflictBlock = conflictRules.length > 0
    ? `\n**SUR 冲突裁决协议**:\n${conflictRules.join('\n')}\n`
    : '';

  return sections.length > 0 ? `\n**SUR 表层设定参数**:\n以下是用户主动选择的 SUR（表层设定）参数，故事需要清晰纳入这些选择。每个 SUR 参数标注了它为哪个 M 参数提供物理载体——即它在故事的哪个结构层面发挥作用。对于 SUR1，词条标题是故事类型主指令，def 只是类型参考，不是强制元素清单。\n${conflictBlock}\n${sections.join('\n\n')}` : '';
};

// ============================================================================
// V3 共享常量（供分歧点 + 圣经复用）
// ============================================================================

export const V3_FORMULA = `## 拉康精神分析学派电影叙事创作公式

本公式基于拉康精神分析理论，将主角的精神运动拆解为 M0-M7A/M7B 的结构性位置，其中 M7A（象征裁决）与 M7B（实在余痕）构成最终双结项。每个位置不是剧情事件，而是主体在欲望、缺失与创伤中必然经过的精神拓扑节点。公式定义了这些节点之间的运算关系——故事就是这个运算的展开。

**Story = M0 {[(M1↔M2↔M3)/M4]×M5} ⇒Act M6 → (M7A◇M7B) ↺ M1'**

M0 = 精神拓扑：主角的操作系统，决定公式内一切运算的法则。
M1 = 缺失主体：结构性不完整的主体——缺口本身就是欲望的发动机。它可以穿过职业/身份外壳显现，但不由职业本身决定。
M2 = 真实遭遇：主角现有框架无法消化的不可逆事件——不只是「坏事发生」，而是「现有语言和逻辑处理不了的事」。
M3 = 欲望幻想：主体以为能填补缺失的那个东西。
M4 = 大他者阻断：不是某个敌人，而是制度/秩序/规则层面的拒绝——整个系统宣布「你的欲望不合法」。不一定是邪恶的。
M5 = 行动驱力：不是一次性策略，而是主体反复撞向 M4 的强迫性动作——带有重复性和身体性。不一定是暴力。
M6 = 终极代价：为让公式闭合，必须放弃的等价交换物。
M7A = 象征裁决（缝合点）：故事结束后，所有之前的情节突然翻转了意义的那个回溯点。严禁由角色在正文中直接说出。
M7B = 实在余痕：故事结束后，主体身上留下了什么不可消化的残留。

**辩证法机制**:
- M0-M6 是时间性展开。每个参数在它发生的那一刻都有自己的体验面向（正面/暗面），由导演笔记指定。
- M7A 是缝合点——不是链条的最后一环，而是回溯性翻转：当故事结束，之前所有环节的意义突然改变。M7A 通过情节安排实现，不通过角色宣告。严禁角色在正文中总结顿悟（如「他终于明白了……」「她看清了……」）。角色可以沉默、可以做出一个不被解释的动作，但不得说出意义。
- M7B 和 M7A 是同一枚硬币的两面：M7A 在象征界（这个故事变成了什么），M7B 在实在界（身体上留下了什么）。M7B 是终态，但它必须有前兆：从终态反推前兆，将前兆编织进故事前半段（inciting_incident 或 rising_action），终态出现在 resolution。前兆与终态使用不同的感官通道。严禁在结尾突然冒出无铺垫的身体残留。

**M轴与SUR轴的关系**:
- M0-M7A/M7B 是结构——主角精神运动的必然位置，任何故事都会填充这些槽位。未指定的 M 参数由你自行填充。
- SUR1-SUR10 + SUR-END 是表层设定参数（故事类型、背景场域、时空、社会形态、身份、信念与显性收场等）——创作者主动选择的现象层元素。被指定的是这个故事的重心，未指定的由你自由发挥。SUR1 的标题是故事类型主指令，def 只是可选类型词汇场；SUR-END 只能规定最后可见的外部收场，不能裁决故事意义；意义归 M7A，余味归 M7B。
- SUR 对 M 的操作是「提供物理载体」：M 定义精神运动的逻辑（如 M4="秩序拒绝你的欲望"），SUR 决定这个逻辑在故事世界中的物质形态（如 M4 在赛博朋克中是信用评分归零，在武侠中是被逐出师门）。换一层皮肤，逻辑的形状变了，但逻辑本身不能变。

**同一槽位双词条法则**:
当同一个 M 槽位装填了两个词条时：
- 它们之间的关系不是「叠加」而是「张力对冲」。
- 当同一槽位的两个词条代表同一个人内部的两股相反的力：一个是他自己承认的欲望，另一个是他不敢承认的欲望。
- 故事中，同一槽位的两个词条必须在同一个场景里正面碰撞——主角必须在它们之间做出不可两全的选择，并且选择的后果必须在后续剧情中兑现。
- 严禁将同一槽位的两个词条融合为一个统一人格。它们是裂痕，不是合金。`;

export const V3_LAWS = `## 创作铁律

命名：严禁通用名（Tom/Alice/小明）。严禁网文中二词。默认国际化，无中国风标签则严禁中文名。基于时空设定构思独特真名。
禁令：严禁正文出现 M0-M7A/M7B 标签原词。严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工说明书语法。严禁使用「读者会/读者在此刻/观众会」等元叙事句式，严禁叙述者替读者总结故事的意义。
面具：故事首先作为合格类型片运作。99%完美类型片，1%视差裂痕。模仿底层逻辑，严禁堆砌表层符号。`;

export const V3_DIVERGENCE_PROTOCOL = `## 分歧点叙事工程协议

**分歧点定位**:
分歧点不是最终文学正文，也不是作者风格成品。它是故事工程之前的叙事路径编译结果：重点是完整、清晰、可复述、因果自洽，并且让所选 M 词条真正改变故事运动。文学性只作为可读性辅助，不得压过叙事工程。

**裁决优先级（从高到低）**:
1. M0 操作系统：改写 M1-M7A/M7B 的运作方式。
2. M7A/M7B 双结项：决定全篇回溯意义与身体/感官余痕。
3. M1-M6 因果链：缺口、遭遇、幻想、阻断、驱力、代价必须形成可追踪的行动链。
4. SUR 物理载体：给 M 轴提供具体世界、身份、空间、制度和物件。
5. SV1 结构骨架：直接决定 pitch_structure 的节点顺序与信息释放结构。
6. SV2 体量密度：只控制字数、篇幅、段落密度、节奏颗粒度和显影压缩方式。
7. 文风与修辞：只负责清晰和电影感，不负责裁决故事意义。

**SV1/SV2 冲突裁决**:
- SV1 是结构权：pitch_structure 的 JSON 字段与叙事节点必须服从 SV1；未选择 SV1 时才使用默认四步骨架。
- SV2 是体量权：SV2 的「MV、独白、循环、短篇、长篇」等描述只能理解为字数、密度、节奏和显影方式，不是最终体裁裁决。
- 当 SV2 写出「不需要 M3-M6」「不需要结局」「严禁线性情节」等语句时，降权解释为：这些 M 位点可以被压缩、内化、循环化或以视觉/记忆/动作显影，但不得从故事工程中删除。
- 当 SV2 与 SV1 冲突时，SV1 决定结构节点，SV2 决定每个节点写多满、推进多快、重复/变奏多少次。
- 故事工程阶段可能加入作者风格；因此分歧点阶段不得把 SV2 写成不可冲刷的文学体裁。

**M 词条落实标准**:
每个被选中的 M 词条必须通过三项校验：
- 因果校验：删掉该词条后，主角下一步行动是否仍然成立？若成立，说明词条只是装饰，必须重写。
- 场景校验：该词条是否至少拥有一个不可替代的具体场景/动作/物件/关系压力？没有则失败。
- 后果校验：该词条造成的选择是否在后文兑现代价？没有兑现则失败。

**双词条执行标准**:
同一 M 槽位出现两个词条时，必须在同一个节点或同一个场景里正面排斥。写清主角选择了什么，因此失去、压抑或背叛了什么。严禁把两个词条融合成一个圆滑人格。
- 双词条不是“都出现一下”。必须形成不可两全的选择句：主角若选择词条 A 的止痛方式，就必须立刻伤害、背叛或延迟词条 B；反之亦然。
- 这个选择必须出现在 pitch_structure 的某个明确节点内，并在后续节点兑现后果。

**M7A/M7B 执行标准**:
- M7A 不是普通反转、破案真相或最后解释；它必须让前文行动的意义被回头改写：主角以为自己在建设 A，结尾显出每一步其实生成了 B。
- 证据、照片、录音、文件、遗物只能承载 M7A，不能代替 M7A。真正的翻转必须落在“行动意义”上：主角以为自己在保存/证明/救回某物，结尾显出他每一步都在删除、制造、污染或错置真正想要的对象。
- 禁止把 M7A 写成单纯事实修正（例如“原来不是这个人”“原来日期不对”“原来只是裂纹”）。事实修正可以出现，但必须进一步反咬主角的行动链。
- M7B 不是结尾硬塞的感官标签；它必须在前半段已有前兆，且前兆与终态不能使用同一种感官通道。
- SUR-END 只给最后可见画面，不能替 M7A/M7B 裁决意义。

**M4 阻断功能标准**:
M4 的代理人、制度或环境必须至少展示一次真实功能：它确实保护了某些人、维持了某种秩序、避免了一场更坏的事故，或让共同体得以继续运转。即使是 ATMOSPHERE 方案，也必须让环境性阻断对应一个可见的秩序机制，而不是只写成雾、风、沉默或压迫感。

**三案分歧标准**:
三个 Pitch 共享同一 M7A/M7B 和主情绪曲线，但必须形成真正分歧：主角社会身份、核心物件、M4 物理载体、M5 行动方式、结尾信息释放方式至少三项不同。严禁只更换人名、地点或氛围。
- 三案不得全部依赖同一种证据装置完成结尾，例如不得都使用“照片/录音/文件/缺页补齐”的同构组合。若 SUR-END 要求证据摊开，三案也必须改变证据的物质类别、排列逻辑和信息释放方式。
- 三案的 M5 重复动作不得同构：不能都是“收集证据→排列证据→发现缺口”。至少一个方案必须让行动驱力通过关系、空间、身体或公共秩序显影。`;

const buildJsonShape = (keys: string[]): string => keys.map(s => `"${s}": "..."`).join(', ');

const SV2_COMPILER_SKELETONS: Record<string, string[]> = {
  vol_haiku_15s: [
    'image_moment_画面瞬间',
    'charged_detail_带电细节',
    'emotional_afterimage_情绪残影',
  ],
  vol_punchline_15s: [
    'false_assumption_假象建立',
    'reversal_cut_反转切入',
    'aftershock_落差余震',
  ],
  vol_vignette_30s: [
    'scene_fragment_生活片段',
    'texture_flow_质感流动',
    'exit_feeling_离开感',
  ],
  vol_drop_30s: [
    'seductive_illusion_诱人幻象',
    'crack_signal_裂缝信号',
    'collapse_image_坍塌画面',
  ],
  vol_joke_30s: [
    'premise_前提',
    'escalation_加码',
    'punchline_引爆',
  ],
  vol_micro_arc_60s: [
    'ordinary_state_日常',
    'encounter_遭遇',
    'cost_代价',
    'landing_落点',
  ],
  vol_mood_loop_60s: [
    'loop_space_循环空间',
    'sensory_texture_感官质感',
    'rhythm_pattern_循环节奏',
    'return_point_回到起点',
  ],
  vol_reveal_60s: [
    'misleading_logic_误导逻辑',
    'planted_detail_伏笔细节',
    'revealed_truth_真相揭示',
    'retroactive_effect_回溯效应',
  ],
  vol_mood_90s: [
    'initial_mood_初始情绪',
    'shift_trigger_偏移触发',
    'mood_tide_情绪潮汐',
    'landing_mood_终点情绪',
  ],
  vol_anecdote_90s: [
    'who_人物起点',
    'encounter_遭遇',
    'escalation_加码',
    'clean_landing_干净收场',
  ],
  vol_mv_3m: [
    'visual_concept_核心视觉概念',
    'variation_one_第一次变奏',
    'variation_two_第二次变奏',
    'variation_three_第三次变奏',
    'loop_landing_循环落点',
  ],
  vol_complete_short_3m: [
    'ordinary_state_日常',
    'encounter_遭遇',
    'desire_欲望',
    'obstacle_sequence_障碍序列',
    'climax_cost_高潮与代价',
    'landing_落点',
  ],
  vol_duel_5m: [
    'initial_positions_双方初始位置',
    'attack_defense_rounds_攻防轮次',
    'power_reversal_权力翻转',
    'final_configuration_最终格局',
  ],
  vol_essay_5m: [
    'thought_origin_认知起点',
    'image_wandering_意象漫游',
    'puncture_刺点浮现',
    'sedimentation_沉淀余味',
  ],
  vol_short_film_10m: [
    'setup_建置',
    'encounter_遭遇',
    'desire_欲望确立',
    'obstacle_sequence_递进障碍',
    'decision_决断',
    'cost_代价',
    'aftermath_余韵',
  ],
  vol_investigation_15m: [
    'surface_world_表面世界',
    'anomaly_signal_异常信号',
    'info_layer_one_信息第一层',
    'info_layer_two_信息第二层',
    'info_layer_three_信息第三层',
    'truth_cost_真相代价',
    'retroactive_effect_回溯效应',
  ],
  vol_ensemble_15m: [
    'thread_one_arc_第一线微弧光',
    'thread_two_arc_第二线微弧光',
    'shared_sur_element_共享SUR元素',
    'convergence_point_交汇点',
    'panorama_after_collision_交汇后全景',
  ],
  vol_arc_30m: [
    'act_one_setup_第一幕建置',
    'act_two_a_rising_第二幕前半',
    'midpoint_reversal_中点反转',
    'act_two_b_pressure_第二幕后半',
    'b_line_echo_B线呼应',
    'final_cost_landing_终局代价与落点',
  ],
  vol_lecture_30m: [
    'core_thesis_核心命题',
    'case_for_正例',
    'counterexample_反例',
    'thesis_revision_命题修正',
    'collapse_or_open_question_崩塌或开放提问',
  ],
  vol_episode_45m: [
    'a_plot_full_arc_A线完整弧光',
    'b_plot_progress_B线本集进展',
    'c_line_hint_C线暗示',
    'episode_closure_本集闭环',
    'serial_hook_系列悬念',
  ],
  vol_thriller_45m: [
    'surface_world_表面世界',
    'flip_one_第一层翻转',
    'flip_two_第二层翻转',
    'flip_three_第三层翻转',
    'flip_four_第四层翻转',
    'flip_five_第五层翻转',
    'truth_cost_hook_真相代价与钩子',
  ],
  vol_feature_90m: [
    'act_one_world_pp1_第一幕与情节点一',
    'act_two_a_rising_midpoint_第二幕前半与中点',
    'act_two_b_all_is_lost_pp2_第二幕后半与情节点二',
    'b_line_convergence_B线交汇',
    'act_three_final_action_第三幕最终行动',
    'final_image_终场画面',
  ],
  vol_epic_90m: [
    'world_laws_世界核心法则',
    'thread_map_多线走向',
    'faction_collision_阵营碰撞',
    'systemic_chain_reaction_系统性连锁反应',
    'new_order_or_collapse_新秩序或崩塌',
    'future_seed_未来种子',
  ],
};

const deriveSv2CompilerSkeletons = (volumeDef?: any): string[] => {
  const id = String(volumeDef?.id || '').toLowerCase();
  const name = String(volumeDef?.name || '').toLowerCase();
  const mechanics = String(volumeDef?.patch?.mechanics || '');

  if (SV2_COMPILER_SKELETONS[id]) {
    return SV2_COMPILER_SKELETONS[id];
  }

  if (id.includes('essay') || name.includes('散文') || name.includes('独白')) {
    return [
      'thought_origin_认知起点',
      'image_wandering_意象漫游',
      'puncture_刺点浮现',
      'sedimentation_沉淀余味',
    ];
  }

  if (id.includes('mv') || name.includes('mv') || name.includes('概念循环')) {
    return [
      'visual_concept_核心视觉概念',
      'variation_one_第一次变奏',
      'variation_two_第二次变奏',
      'variation_three_第三次变奏',
      'loop_landing_循环落点',
    ];
  }

  if (id.includes('duel') || name.includes('博弈')) {
    return [
      'initial_positions_双方初始位置',
      'attack_defense_rounds_攻防轮次',
      'power_reversal_权力翻转',
      'final_configuration_最终格局',
    ];
  }

  if (id.includes('mood') || name.includes('氛围短片')) {
    return [
      'initial_mood_初始情绪',
      'shift_trigger_偏移触发',
      'mood_tide_情绪潮汐',
      'landing_mood_终点情绪',
    ];
  }

  if (id.includes('anecdote') || name.includes('轶事') || name.includes('段子')) {
    return [
      'who_人物起点',
      'encounter_遭遇',
      'escalation_加码',
      'clean_landing_干净收场',
    ];
  }

  const promptMatch = mechanics.match(/写清[:：]\s*([^。\n]+)/);
  if (promptMatch) {
    const parts = promptMatch[1]
      .split(/[→+＋/、，,]/)
      .map((part: string) => part.trim())
      .filter(Boolean)
      .slice(0, 6);

    if (parts.length >= 3) {
      return parts.map((part: string, index: number) => `form_beat_${index + 1}_${part.replace(/\s+/g, '')}`);
    }
  }

  return [
    'form_premise_体裁前提',
    'form_movement_显影运动',
    'form_pressure_体裁压力',
    'form_landing_体裁落点',
  ];
};

// ============================================================================
// V3 Prompt Builder
// ============================================================================

export const buildPromptV3 = (
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig,
  faceState?: FaceState
): { text: string, images: string[] } => {

  // === 提取基础素材 ===
  const gravity = worldLaw.gravity || 3;
  const volumeTags = getTagsBySuffix(fieldState, '_volume');
  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);

  // 提取分歧点单篇字数（从 SV2 mechanics 中解析），供 Task 与输出格式共用
  let pitchWordCount = '500-700';
  if (volumeDef?.patch?.mechanics) {
    const pitchMatch = volumeDef.patch.mechanics.match(/(?:每卡|每个\s*Pitch|单篇故事|Pitch)\s*≈?\s*([\d]+-[\d]+)\s*字/)
      || volumeDef.patch.mechanics.match(/≈\s*([\d]+-[\d]+)\s*字/);
    if (pitchMatch) pitchWordCount = pitchMatch[1];
  }

  // ============================================================================
  // ① 身份声明
  // ============================================================================
  const taskSentence = buildTaskSentence(fieldState);
  const SECTION_ROLE = `Role: 电影级叙事创作大师 & 文学级文本塑造者。
Task: ${taskSentence} 每个分歧方案的单篇故事字数控制在 ${pitchWordCount} 字。`;

  // ============================================================================
  // ② 核心公式（纯位置关系，不含词条内容）
  // ============================================================================
  const SECTION_FORMULA = V3_FORMULA;

  // ============================================================================
  // ③ 创作铁律（极度压缩）
  // ============================================================================
  const SECTION_LAWS = V3_LAWS;

  // ============================================================================
  // ③B 分歧点叙事工程协议（冲突裁决 + 质量验收）
  // ============================================================================
  const SECTION_DIVERGENCE_PROTOCOL = V3_DIVERGENCE_PROTOCOL;

  // ============================================================================
  // ④ 导演笔记 (DIRECTOR'S BRIEF) — 灵魂区
  // ============================================================================
  const mEntries: (string | null)[] = [
    buildMDirective(fieldState, ['_m0', '_c0'], 'M0. 精神拓扑', 'engine_m0', faceState),
    buildMDirective(fieldState, ['_m1', '_c1'], 'M1. 缺失主体', 'engine_m1', faceState),
    buildMDirective(fieldState, '_m2',           'M2. 真实遭遇', 'engine_m2', faceState),
    buildMDirective(fieldState, ['_m3', '_c3'],  'M3. 欲望幻想', 'engine_m3', faceState),
    buildMDirective(fieldState, ['_m4', '_c4'],  'M4. 大他者阻断', 'engine_m4', faceState),
    buildMDirective(fieldState, '_m5',           'M5. 行动驱力', 'engine_m5', faceState),
    buildMDirective(fieldState, '_m6',           'M6. 终极代价', 'engine_m6', faceState),
    buildMDirective(fieldState, '_m7a',           'M7A. 象征裁决', 'engine_m7a', faceState),
    buildMDirective(fieldState, '_m7b',           'M7B. 实在余痕', 'engine_m7b', faceState),
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
这些拉康精神分析词条是叙事创作方法，不是病理报告、学术报告或人物诊断。你必须把它们翻译为人物行动、场景压力、物件关系、信息释放和结尾余味；正文必须仍然是充满叙事文学性的故事大纲。
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明且适配M参数以及世界物理法则以及表层设定的全新场景承载它。严禁复现示例中的具体意象。

**M0 渗透法则**：M0 不是一个独立参数——它是整个故事的操作系统。M1-M7A/M7B 的每一条导演笔记都必须经过 M0 的逻辑改写。测试方法：如果某个 M 参数的处理方式在「替换成任何其他 M0」之后依然成立，说明 M0 没有生效，必须重写。

${directorBrief}${m0Logic}`;

  // ============================================================================
  // ⑤ 场景皮肤 (SKIN) — 世界法则作为标签的物理运算规则
  // ============================================================================
  const gravityRule = GRAVITY_RULES[gravity] || GRAVITY_RULES[3];

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

  const SECTION_SKIN = `## 世界物理法则与表层设定\n\n${skinParts.join('\n')}`;

  // ============================================================================
  // ⑦ 输出格式
  // ============================================================================
  // 体量
  const structureTags = getTagsBySuffix(fieldState, '_structure');
  const structureTag = structureTags.length > 0 ? structureTags[0] : "";
  const structureDef = SV1_DATA.flatMap(c => c.items).find(s => structureTag.includes(s.name) || structureTag === s.id);

  let volumeLine = '标准短篇';
  if (volumeDef) {
    const pitchMechanics = volumeDef.patch?.mechanics?.split('\n').find(l => l.includes('三卡大纲')) || volumeDef.def || '';
    volumeLine = `${volumeDef.name}: ${pitchMechanics}`;
  }

  // SV1/SV2 参数注入段
  let svProtocol = '';
  if (volumeDef) {
    svProtocol += `\n### SV2 体量/密度协议（低裁决权）: ${volumeDef.name}
**定义:** ${volumeDef.def || ''}
**核心约束（仅控制字数、密度、节奏、显影压缩方式）:**
${volumeDef.core || ''}
**降权说明:** 若上述 SV2 文案出现「不需要某个 M 位点」「不需要结局」「严禁线性情节」等表述，只能理解为压缩或内化显影，不能删除 M1-M7A/M7B 的故事工程责任。`;
  }
  if (structureDef) {
    svProtocol += `\n\n### SV1 结构协议（高于 SV2）: ${structureDef.name}\n**定义:** ${structureDef.def || ''}\n**核心规则:**\n${structureDef.core || ''}`;
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
  const sv2PitchSkeletons = deriveSv2CompilerSkeletons(volumeDef);
  const sv2SkeletonLabels = sv2PitchSkeletons.map(s => {
    const parts = s.split('_');
    return parts[parts.length - 1];
  });
  const sv2SkeletonArrow = sv2SkeletonLabels.join(' → ');
  const sensoryPitchSkeletons = [
    'field_state_场域初态',
    'pressure_system_秩序压力',
    'sensory_mutation_感官变形',
    'residue_frame_余痕停点',
  ];
  const sensorySkeletonArrow = '场域初态 → 秩序压力 → 感官变形 → 余痕停点';
  const skeletonJsonKeysCompact = buildJsonShape(pitchSkeletons);
  const sv2JsonKeysCompact = buildJsonShape(sv2PitchSkeletons);
  const sensoryJsonKeysCompact = buildJsonShape(sensoryPitchSkeletons);

  const bannedWords = buildBannedWords(fieldState);

  const m7bTags = getTagsBySuffix(fieldState, '_m7b');
  const m7aTags = getTagsBySuffix(fieldState, '_m7a');

  const SECTION_OUTPUT = `## 输出格式

**体量**: ${volumeLine}${structureTag ? ` | **结构**: ${structureTag}` : ''}
${svProtocol}

**音色**: 故事色调由 Task 中指定的故事类型决定。暴力仅在叙事转折点使用，每个故事最多一处显性暴力描写。禁止连续堆砌血腥场景。身体细节服务于心理冲击，不服务于感官刺激。

**形式约束**:
- 每个 Pitch ≈ ${pitchWordCount} 字。三个方案风格互不雷同。
- OPTION 1 必须包含：${skeletonArrow}。
- OPTION 2 必须包含：${sv2SkeletonArrow}。它由 SV2 的体量/体裁协议决定，允许比 OPTION 1 更内化、循环化、片段化或独白化，但不能删除 M 轴责任。
- OPTION 3 必须包含：${sensorySkeletonArrow}。它以空间、物件、声音、味觉、身体和环境压力组织故事，不得只是 OPTION 1 的弱情节复述。
- 语言：清晰直白的叙事语言，优先因果逻辑而非修辞美感。严禁剧本格式/学术论文腔/网络小说腔。严禁堆砌隐喻。
- 故事脊柱：每个 Pitch 必须让读者能用一句话复述——「某人因为X而想要Y，但Z挡住了他，他做了W，付出了V的代价」。如果读者读完后无法复述，故事就是失败的。

**三重编译器（同一精神公式，三种叙事显影）**:
三个故事共享同一组 M0-M7A/M7B、同一 SUR 世界和同一主情绪曲线，但不得共享同一个叙事容器。区别不是“同一剧本三种拍法”，而是“同一精神公式三种编译方式”：
OPTION 1 [PLOT / SV1_DRIVEN]: 结构故事版。服从 SV1 或默认四步骨架，侧重外部冲突、因果链、类型片完整性。M4 具象化为可见外部力量。
OPTION 2 [FORM / SV2_DRIVEN]: 体量/体裁版。服从 SV2 的显影骨架，把体量标签真正转化为叙事组织方式，例如独白、MV、轶事、博弈、氛围短片等。它不是 OPTION 1 的人物版，而是另一种叙事编译器。
OPTION 3 [ATMOSPHERE / SENSORY_FIELD]: 场域感官版。以空间压力、环境秩序、物件错位、身体反应和感官余痕组织故事。M4 弥散为环境性力量，但必须有可见秩序机制。

**格式硬约束**:
- 严禁输出 <thought_process>；本版本只能输出 <design_audit>。若输出 <thought_process>，视为格式失败。
- 三案 type 必须严格为 PLOT / FORM / ATMOSPHERE；严禁使用 STRUCTURALIST / POST_STRUCTURALIST / THE_REAL 等旧标签。
- 三案必须写出 compiler 字段，且严格为 SV1_DRIVEN / SV2_DRIVEN / SENSORY_FIELD。
- <design_audit> 必须匹配当前 Task、当前 SUR 与当前 M 词条，严禁复用上一轮或其他样例的角色、地点、结尾逻辑。

**禁用词**: [ ${bannedWords} ]

**结构审查（必须先输出，简短结论，不写推理过程）**:
\`\`\`xml
<design_audit>
1. 结构裁决：确认三案编译器分别为 SV1_DRIVEN / SV2_DRIVEN / SENSORY_FIELD，并列出各自 pitch_structure 节点顺序。
2. 情绪曲线：用一句话概括 M1-M6 如何被 M0 改写。
3. M7A 回溯：用一句话说明主角以为自己在建设什么，结尾显出实际生成了什么。
4. 双词条碰撞：若同一 M 槽位有双词条，列出它们在哪个节点/场景里发生不可两全选择。
5. M4 功能：列出三个 Pitch 各自的阻断机制保护了什么，不能只写它阻碍了谁。
6. M7B 前兆：列出三个 Pitch 各自的前兆策略、前兆感官通道、终态感官通道。
7. 分歧校验：列出三个 Pitch 在主角身份、核心物件、M4 载体、M5 行动、信息释放、叙事容器上的差异点，并确认三案没有共用同一种结尾证据装置。
8. 禁词边界：禁用词只禁止出现在 pitch_structure 正文；design_audit 与最终复述可使用参数名和词条名。
</design_audit>
\`\`\`

**JSON 格式**:
\`\`\`json
[
  { "id": "1", "type": "PLOT", "compiler": "SV1_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${skeletonJsonKeysCompact} }, "structure": "PLOT_DRIVEN" },
  { "id": "2", "type": "FORM", "compiler": "SV2_DRIVEN", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${sv2JsonKeysCompact} }, "structure": "FORM_DRIVEN" },
  { "id": "3", "type": "ATMOSPHERE", "compiler": "SENSORY_FIELD", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${sensoryJsonKeysCompact} }, "structure": "ATMOSPHERE_DRIVEN" }
]
\`\`\`

**最终复述**:
${m7aTags.length > 0 ? `- M7A [${m7aTags.join('/')}] 回溯性地决定整个故事的意义。严禁篡改。` : ''}
${m7bTags.length > 0 ? `- M7B [${m7bTags.join('/')}] 是绝对宪法。严禁篡改。` : ''}`;

  // ============================================================================
  // 最终拼接
  // ============================================================================
  const sections = [
    SECTION_ROLE,
    SECTION_FORMULA,
    SECTION_LAWS,
    SECTION_DIVERGENCE_PROTOCOL,
    SECTION_DIRECTOR,
    SECTION_SKIN,
    SECTION_OUTPUT,
  ].filter(s => s.length > 0);

  const finalText = sections.join('\n\n');
  return { text: finalText, images: visionImage ? [visionImage] : [] };
};
