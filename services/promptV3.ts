// ============================================================================
// V3: Director's Brief Architecture
// 设计原理：以 directive（导演语言）为第一公民，替代 core（理论语言）。
// 每个 M 参数以「导演笔记」的形式注入 AI，而非学术定义卡片。
// 公式升级为 M0-M7A（含象征裁决 / 缝合点）。
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
    console.log(`[buildMDirective] blockId=${blockId}, tag=${tag}, faceState[tag]=${faceState?.[tag]}, faceState[blockId]=${faceState?.[blockId]}, final face=${face}`);
    const info = getDirective(tag, blockId, face);
    if (!info) continue;

    // topology 作为结构前缀，directive 提供亮/暗/张力的具体面向
    const topologyPrefix = info.topology ? `[位格] ${info.topology}\n` : '';
    const content = info.directive || info.def;
    parts.push(`**${label}**: **【${info.name}】**\n${topologyPrefix}${content}`);
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

  // Fragment C: SUR8+SUR7+SUR9 — 一个【年龄性别】的【职业】
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

  // Fragment D: SUR10X+SUR10 — 抱着【信念裂度】的【哲学信念】想法
  if (fracture.length > 0 || ideology.length > 0) {
    let belief = '抱着';
    if (fracture.length > 0) belief += bracket(fracture.join('、'));
    if (fracture.length > 0 && ideology.length > 0) belief += '的';
    if (ideology.length > 0) belief += bracket(ideology.join('、'));
    belief += '想法';
    fragments.push(belief);
  }

  // Fragment E: SUR5 — 与【欲望锚点】纠缠
  if (everything.length > 0) fragments.push(`与${bracket(everything.join('、'))}纠缠`);

  // Fragment F: SUR6 — 剧情于【空间场景】展开
  if (location.length > 0) fragments.push(`剧情于${bracket(location.join('、'))}展开`);

  // Fragment G: SUR11 — 最终走向【大结局】
  if (ending.length > 0) fragments.push(`最终走向${bracket(ending.join('、'))}`);

  // Genre 后缀：的【叙事动力】故事
  const genreSuffix = genreNames.length > 0 ? `的${bracket(genreNames.join('、'))}故事。` : '的故事。';

  // 组装：前半句指向导演笔记，后半句为 SUR 场景句式
  const PREFIX = '根据以下拉康精神分析派的叙事创作公式以及「导演笔记」中的主角精神弧线（M0-M7）结合故事表层设定参数';

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
      label: 'SUR1. 叙事动力·全局色调',
      desc: '故事的类型节奏。M0-M7 的每一步都在此类型语法内运作。',
      tags: getTagsBySuffix(fieldState, '_genre'),
    },
    {
      label: 'SUR2. 背景场域·全局质感',
      desc: '决定 M 参数的文化场域肌理与世界质感。',
      tags: getTagsBySuffix(fieldState, '_era'),
    },
    {
      label: 'SUR4. 社会形态 → M4 制度化面向',
      desc: '主角所处的宏观制度——常常是 M4（大他者阻断）的制度化身。',
      tags: getTagsBySuffix(fieldState, '_society'),
    },
    {
      label: 'SUR7/8. 主体身份',
      desc: '主角的性别与年龄——身体的基础磨损度与社会位置。',
      tags: [...getTagsBySuffix(fieldState, '_gender'), ...getTagsBySuffix(fieldState, '_age')],
    },
    {
      label: 'SUR9. 职业身份 → M1 具象化载体',
      desc: '主角的社会角色——缺失(M1)与欲望(M3)通过此身份显影。',
      tags: getTagsBySuffix(fieldState, '_profession'),
    },
    {
      label: 'SUR10/10X. 信念系统 → M0 表层信条 / M4 隐性机制',
      desc: 'SUR10（信念）= 角色信什么（内容）。SUR10X（裂度）= 角色与这个信念的粘合程度（L1虔信→L5决裂）。裂度决定角色如何回应M2冲击——L1会用信念语言消化一切，L3会冷眼旁观自己的崩塌，L5会把冲击转化为对旧信念的清算。同一个信念内容 × 不同裂度 = 完全不同的叙事行为模式。',
      tags: [...(fieldState['sur10x'] || []), ...getTagsBySuffix(fieldState, '_ideology')],
    },
    {
      label: 'SUR5. 欲望锚点 → M3 具象化对象',
      desc: '主角纠缠的事物——M3（欲望幻想）的具象载体。',
      tags: getTagsBySuffix(fieldState, '_everything'),
    },
    {
      label: 'SUR6. 空间场景 → M2/高潮 感官容器',
      desc: '戏剧发生的物理舞台——空间本身是情绪的载体。',
      tags: getTagsBySuffix(fieldState, '_location'),
    },
    {
      label: 'SUR11. 显性大结局 → M6→M7 可见终态',
      desc: '故事表层的终点图案——M6(代价)兑现后的视觉终态。',
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
    conflictRules.push('- [SUR1×SUR1 双类型裁决] 按选择顺序——第一个叙事动力 = 主控叙事节奏（故事骨架按此类型运作），第二个 = 类型偏移（在主类型框架内注入另一种类型的元素和期待）。例：「爱情+复仇」= 爱情故事中复仇是并发动力；「复仇+爱情」= 复仇故事中爱情是致命变量。严禁融合为无特征的中间态。');
  }

  if (eraTags.length >= 2) {
    conflictRules.push('- [SUR2×SUR2 双场域裁决] 按选择顺序——第一个背景场域 = 主控世界观（定义物理框架和基底规则），第二个 = 内容注入（在前者的框架内提供元素和偏移）。例：「赛博朋克+武侠」= 赛博朋克世界里的冷兵器门派之争；「武侠+赛博朋克」= 武侠世界里人人装着义肢和机械臂。严禁融合为无特征的中间态。');
  }

  if (genreTags.length >= 1 && eraTags.length >= 1) {
    conflictRules.push('- [SUR1×SUR2 类型与场域分工] SUR1（叙事动力）管「怎么讲」——节奏、张力释放方式、类型期待。SUR2（背景场域）管「世界长什么样」——物理常数、视觉质感、能指频率。当两者暗示不同世界时（如 SUR1=科幻 但 SUR2=古代），以 SUR2 的世界外观为准，SUR1 仅控制叙事节奏和类型语法。两者叠加后向下染色一切具体参数——身份、信念、欲望锚点、空间场景都必须穿上这层染色后的衣壳。');
  }

  if (eraTags.length >= 1 && hasSpacetime) {
    conflictRules.push('- [SUR2×SUR3 场域与时空优先级] SUR3（精确时空坐标）是不可违背的物理锚点——该年代/地区的真实物理状貌、服饰、政治面貌具有绝对优先权。SUR2（背景场域）在 SUR3 的物理约束内提供美学滤镜和风格化处理。当两者冲突时，SUR3 的物理现实覆盖 SUR2 的风格想象。');
  }

  const conflictBlock = conflictRules.length > 0
    ? `\n**SUR 冲突裁决协议**:\n${conflictRules.join('\n')}\n`
    : '';

  return sections.length > 0 ? `\n**SUR 表层设定参数**:\n以下是用户主动选择的 SUR（表层设定）参数，故事中必须出现并着重表现。每个 SUR 参数标注了它为哪个 M 参数提供物理载体——即它在故事的哪个结构层面发挥作用。\n${conflictBlock}\n${sections.join('\n\n')}` : '';
};

// ============================================================================
// V3 共享常量（供分歧点 + 圣经复用）
// ============================================================================

export const V3_FORMULA = `## 拉康精神分析学派电影叙事创作公式

本公式基于拉康精神分析理论，将主角的精神运动拆解为 M0-M7 八个结构性位置。每个位置不是剧情事件，而是主体在欲望、缺失与创伤中必然经过的精神拓扑节点。公式定义了这些节点之间的运算关系——故事就是这个运算的展开。

**Story = M0 { [(M1 → M2 → M3) / M4] × M5 } ⇒ (M6, M7A ‖ M7B)**

M0 = 精神拓扑：主角的操作系统，决定公式内一切运算的法则。
M1 = 缺失主体：结构性不完整的主体——缺口本身就是欲望的发动机。结合职业/身份具象化。
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
- M0-M7 是结构——主角精神运动的必然位置，任何故事都会填充这些槽位。未指定的 M 参数由你自行填充。
- SUR1-SUR11 是表层设定参数（叙事动力、背景场域、时空、社会形态、身份、信念等）——创作者主动选择的现象层元素。被指定的是这个故事的重心，未指定的由你自由发挥。
- SUR 对 M 的操作是「提供物理载体」：M 定义精神运动的逻辑（如 M4="秩序拒绝你的欲望"），SUR 决定这个逻辑在故事世界中的物质形态（如 M4 在赛博朋克中是信用评分归零，在武侠中是被逐出师门）。换一层皮肤，逻辑的形状变了，但逻辑本身不能变。

**同一槽位双词条法则**:
当同一个 M 槽位装填了两个词条时：
- 它们之间的关系不是「叠加」而是「张力对冲」。
- 当同一槽位的两个词条代表同一个人内部的两股相反的力：一个是他自己承认的欲望，另一个是他不敢承认的欲望。
- 故事中，同一槽位的两个词条必须在同一个场景里正面碰撞——主角必须在它们之间做出不可两全的选择，并且选择的后果必须在后续剧情中兑现。
- 严禁将同一槽位的两个词条融合为一个统一人格。它们是裂痕，不是合金。`;

export const V3_LAWS = `## 创作铁律

命名：严禁通用名（Tom/Alice/小明）。严禁网文中二词。默认国际化，无中国风标签则严禁中文名。基于时空设定构思独特真名。
禁令：严禁正文出现 M0-M7B 标签原词。严禁学术腔（拉康/大他者/异化/阉割/符号界/对象a）。严禁理工说明书语法。严禁使用「读者会/读者在此刻/观众会」等元叙事句式，严禁叙述者替读者总结故事的意义。
面具：故事首先作为合格类型片运作。99%完美类型片，1%视差裂痕。模仿底层逻辑，严禁堆砌表层符号。`;

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

  // ============================================================================
  // ① 身份声明
  // ============================================================================
  const taskSentence = buildTaskSentence(fieldState);
  const SECTION_ROLE = `Role: 殿堂级电影编剧 & 叙事架构师。
Task: ${taskSentence}`;

  // ============================================================================
  // ② 核心公式（纯位置关系，不含词条内容）
  // ============================================================================
  const SECTION_FORMULA = V3_FORMULA;

  // ============================================================================
  // ③ 创作铁律（极度压缩）
  // ============================================================================
  const SECTION_LAWS = V3_LAWS;

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
导演笔记中的具体场景是情感运动的示例载体——提取其拓扑结构（节奏、温度、运动方式），用你自己发明且适配M参数以及世界物理法则以及表层设定的全新场景承载它。严禁复现示例中的具体意象。

**M0 渗透法则**：M0 不是一个独立参数——它是整个故事的操作系统。M1-M7B 的每一条导演笔记都必须经过 M0 的逻辑改写。测试方法：如果某个 M 参数的处理方式在「替换成任何其他 M0」之后依然成立，说明 M0 没有生效，必须重写。

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
  if (visionInput) visionSection = '\n' + getVisionAnchorProtocol(visionInput);

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
  const volumeTags = getTagsBySuffix(fieldState, '_volume');
  const volumeTagRaw = volumeTags.length > 0 ? volumeTags[0] : "";
  const volumeDef = SV2_DATA.flatMap(c => c.items).find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTags = getTagsBySuffix(fieldState, '_structure');
  const structureTag = structureTags.length > 0 ? structureTags[0] : "";
  const structureDef = SV1_DATA.flatMap(c => c.items).find(s => structureTag.includes(s.name) || structureTag === s.id);

  let volumeLine = '标准短篇';
  if (volumeDef) {
    const pitchMechanics = volumeDef.patch?.mechanics?.split('\n').find(l => l.includes('三卡大纲')) || volumeDef.def || '';
    volumeLine = `${volumeDef.name}: ${pitchMechanics}`;
  }

  // 提取三卡大纲字数（从 patch.mechanics 中解析）
  let pitchWordCount = '500-700';
  if (volumeDef?.patch?.mechanics) {
    const pitchMatch = volumeDef.patch.mechanics.match(/每卡\s*≈\s*([\d]+-[\d]+)/);
    if (pitchMatch) pitchWordCount = pitchMatch[1];
  }

  // SV1/SV2 参数注入段
  let svProtocol = '';
  if (volumeDef) {
    svProtocol += `\n### SV2 体量协议: ${volumeDef.name}\n**定义:** ${volumeDef.def || ''}\n**核心约束:**\n${volumeDef.core || ''}`;
  }
  if (structureDef) {
    svProtocol += `\n\n### SV1 结构协议: ${structureDef.name}\n**定义:** ${structureDef.def || ''}\n**核心规则:**\n${structureDef.core || ''}`;
  }

  // 动态叙事骨架：从 SV1 结构的 skeletons 字段获取，否则回退到经典四步
  const DEFAULT_SKELETONS = [
    'inciting_incident_激励事件',
    'rising_action_上升动作',
    'climax_高潮',
    'resolution_存在落点',
  ];
  const pitchSkeletons = structureDef?.skeletons?.length ? structureDef.skeletons : DEFAULT_SKELETONS;
  const skeletonLabels = pitchSkeletons.map(s => {
    const parts = s.split('_');
    return parts[parts.length - 1];
  });
  const skeletonArrow = skeletonLabels.join(' → ');
  const skeletonJsonKeys = pitchSkeletons.map(s => `      "${s}": "..."`).join(',\n');
  const skeletonJsonKeysCompact = pitchSkeletons.map(s => `"${s}": "..."`).join(', ');

  const bannedWords = buildBannedWords(fieldState);

  const m7Tags = getTagsBySuffix(fieldState, '_m7b');
  const m8Tags = getTagsBySuffix(fieldState, '_m7a');

  const SECTION_OUTPUT = `## 输出格式

**体量**: ${volumeLine}${structureTag ? ` | **结构**: ${structureTag}` : ''}
${svProtocol}

**音色**: 故事色调由 Task 中指定的叙事动力决定。暴力仅在叙事转折点使用，每个故事最多一处显性暴力描写。禁止连续堆砌血腥场景。身体细节服务于心理冲击，不服务于感官刺激。

**形式约束**:
- 每个 Pitch ≈ ${pitchWordCount} 字。三个方案风格互不雷同。
- 必须包含：${skeletonArrow}。
- 语言：清晰直白的叙事语言，优先因果逻辑而非修辞美感。严禁剧本格式/学术论文腔/网络小说腔。严禁堆砌隐喻。
- 故事脊柱：每个 Pitch 必须让读者能用一句话复述——「某人因为X而想要Y，但Z挡住了他，他做了W，付出了V的代价」。如果读者读完后无法复述，故事就是失败的。

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
3. M7B 前兆：M7B 的终态是什么？它的前兆是什么？三个故事的前兆必须使用三种不同的铺垫策略（从以下六种中选三种：①身体微动作 ②空间异常 ③他人的反常反应 ④物件错位 ⑤声音/气味的侵入 ⑥时间感知的变形）。前兆出现在故事哪个阶段？用什么感官通道？终态用什么不同的感官通道？
4. 物理校验：逐一检查每个 SUR 标签是否超出当前物理法则边界。超出的如何降维？降维后的等价物是什么？
5. 三重语法：三位导演（情节/人物/氛围）各自如何翻译同一条曲线？侧重点差异在哪里？
6. M0 渗透检查：逐一检查 M1-M7B，每个参数的叙事实现是否被 M0 的逻辑改写过？如果某个 M 的处理方式在任意 M0 下都成立，则 M0 渗透失败，必须重新设计该段。
7. M7B 回检：写完三个故事后，逐一确认每个故事的 pitch_structure 各阶段中是否已植入 M7B 前兆。如果缺失，必须在对应段落补入。
</thought_process>
\`\`\`

**JSON 格式**:
\`\`\`json
[
  { "id": "1", "type": "PLOT", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${skeletonJsonKeysCompact} }, "structure": "PLOT_DRIVEN" },
  { "id": "2", "type": "CHARACTER", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${skeletonJsonKeysCompact} }, "structure": "CHARACTER_DRIVEN" },
  { "id": "3", "type": "ATMOSPHERE", "title": "电影标题 (中文)", "tagline": "一句有力量的 Logline。", "pitch_structure": { ${skeletonJsonKeysCompact} }, "structure": "ATMOSPHERE_DRIVEN" }
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
