import { WorldLawConfig } from '../types';

export interface WorldLawLevelOption {
  id: number;
  code: string;
  cn: string;
  en: string;
  shortCN: string;
  shortEN: string;
  descCN: string;
  descEN: string;
  promptCN: string;
}

export const WORLD_LAW_LEVEL_OPTIONS: WorldLawLevelOption[] = [
  {
    id: 1,
    code: 'L1',
    cn: '写实',
    en: 'Realist',
    shortCN: 'L1 写实',
    shortEN: 'L1 Real',
    descCN: '坐标闭锁。SUR2/SUR3 决定现实边界；SUR1 只提供类型语法，不自动生成奇观本体。',
    descEN: 'Coordinate locked. SUR2/SUR3 set the real boundary; SUR1 supplies genre grammar, not literal spectacle by itself.',
    promptCN: '坐标闭锁：严格服从 SUR2/SUR3 与当前世界的物理、技术、政治、文化边界。SUR1 只保留类型承诺、叙事节奏、阻力语法和观看快感，不得仅因类型标题含有外星、超能力、鬼神、魔法等词就写成真实本体；必须转译为当前现实中可成立的信号误读、公共神话、装备能力、制度实验、表演骗局、宗教解释、谣言危机、救援责任或同构事件机关。',
  },
  {
    id: 2,
    code: 'L2',
    cn: '折译',
    en: 'Translate',
    shortCN: 'L2 折译',
    shortEN: 'L2 Translate',
    descCN: '默认推荐。保留坐标，把 SUR1 折成同构故事机关；类型词不直接变成真实物种或能力。',
    descEN: 'Recommended default. Keep the coordinate and translate SUR1 into equivalent machinery; genre terms do not become literal beings or powers.',
    promptCN: '类型折译：严守 SUR2/SUR3 的时空物理坐标，同时不能让 SUR1 失效。若 SUR1 与时空冲突，必须把 SUR1 的类型承诺折译为当前世界内可成立的同构故事机关：目标、阻断、职业流程、空间规则、关系压力、危险、升级链和高潮行动。类型标题中的超常名词优先折译为功能等价物，除非世界法则、SUR2/SUR3 或用户输入已经明确授权其真实存在。',
  },
  {
    id: 3,
    code: 'L3',
    cn: '缝合',
    en: 'Seam',
    shortCN: 'L3 缝合',
    shortEN: 'L3 Seam',
    descCN: '现实坐标仍是底座，允许局部异常或不可证实事件承载类型压力，但不扩展成完整新现实。',
    descEN: 'The coordinate remains the base; local anomalies or unverified events may carry genre pressure without becoming a full new reality.',
    promptCN: '局部缝合：SUR2/SUR3 仍是现实底座，但允许 SUR1 的类型压力以局部异常、传闻、仪式、幻觉、民间解释、象征物、不可证实事件或社会症状出现。它可以改变人物行动和意义判断，但不得扩展成完整新世界体系；结尾也不能用一句话确认超常本体真实存在。',
  },
  {
    id: 4,
    code: 'L4',
    cn: '升维',
    en: 'Elevate',
    shortCN: 'L4 升维',
    shortEN: 'L4 Elevate',
    descCN: '类型本体授权。SUR1 可以改写现实边界，真实外星、异能、魔法或技术分歧可成为世界事实。',
    descEN: 'Genre ontology authorized. SUR1 may alter reality, allowing aliens, powers, magic, or technical divergence to be factual.',
    promptCN: '类型升维：允许 SUR1 反过来改写 SUR2/SUR3，形成架空历史、异史、技术分歧或类型化世界。此层级可以把类型标题中的外星生命、超常力量、魔法制度、异星生态或其他奇观本体写成真实世界事实；但必须交代分歧点、来源、运行方式、公共后果和代价，不能只是把奇观名词硬塞进场景。',
  },
  {
    id: 5,
    code: 'L5',
    cn: '狂想',
    en: 'Rhapsody',
    shortCN: 'L5 狂想',
    shortEN: 'L5 Rhapsody',
    descCN: '梦、神话、象征和跨时代拼贴可接管世界规则，但故事机关仍要清楚、自然、可复述。',
    descEN: 'Dream, myth, symbol, and cross-era collage may govern the world, while the story mechanism stays clear.',
    promptCN: '狂想漂移：允许梦、神话、象征、跨时代拼贴和类型奇观接管世界规则。它可以让类型本体直接支配现实，也可以让现实变成可变形的舞台；但故事仍必须有清楚的目标、阻断、升级、高潮选择和代价兑现，不能变成无因果散文。',
  },
];

const clampLevel = (value: unknown): number | null => {
  const parsed = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(parsed)) return null;
  const rounded = Math.round(parsed);
  if (rounded < 1 || rounded > 5) return null;
  return rounded;
};

const legacyAxesToLevel = (worldLaw?: WorldLawConfig): number | null => {
  if (!worldLaw?.realityAnchor && !worldLaw?.genreManifestation) return null;
  if (worldLaw.genreManifestation === 'phantasmic' || worldLaw.realityAnchor === 'drift') return 5;
  if (worldLaw.genreManifestation === 'literal' && worldLaw.realityAnchor === 'inferred') return 4;
  if (worldLaw.genreManifestation === 'metaphoric') return 3;
  if (worldLaw.genreManifestation === 'rationalized') return 2;
  if (worldLaw.realityAnchor === 'strict') return 1;
  return null;
};

export const resolveWorldLawLevel = (worldLaw?: WorldLawConfig): number => {
  return clampLevel(worldLaw?.gravity) || legacyAxesToLevel(worldLaw) || 2;
};

export const normalizeWorldLawConfig = (worldLaw?: WorldLawConfig): WorldLawConfig => {
  const gravity = resolveWorldLawLevel(worldLaw);
  return { ...(worldLaw || {}), gravity };
};

export const patchWorldLawConfig = (
  worldLaw: WorldLawConfig | undefined,
  gravity: number
): WorldLawConfig => {
  return normalizeWorldLawConfig({ ...(worldLaw || {}), gravity });
};

export const getWorldLawDisplay = (worldLaw?: WorldLawConfig, lang: 'CN' | 'EN' = 'CN') => {
  const gravity = resolveWorldLawLevel(worldLaw);
  const option = WORLD_LAW_LEVEL_OPTIONS.find(item => item.id === gravity) || WORLD_LAW_LEVEL_OPTIONS[1];

  return {
    gravity,
    level: gravity,
    option,
    code: option.code,
    cn: option.cn,
    en: option.en,
    descCN: option.descCN,
    descEN: option.descEN,
    label: lang === 'EN' ? option.shortEN : option.shortCN,
    fullLabel: lang === 'EN' ? `${option.code} ${option.en}` : `${option.code} ${option.cn}`,
  };
};

export const buildWorldLawLevelPrompt = (worldLaw?: WorldLawConfig): string => {
  const display = getWorldLawDisplay(worldLaw, 'CN');
  const option = display.option;

  return `**世界法则 ${option.code}：${option.cn}**

本模块只裁决一个问题：当 SUR1 故事类型与 SUR2/SUR3 时空物理坐标冲突时，类型材料是否能成为世界事实，以及不能成为事实时如何转译。

**授权层级**:
1. 本体授权只能来自：图像事实、SUR2/SUR3 已经支持的世界材料、当前世界法则 L4/L5，或用户明确声明且未被当前世界法则否决的世界事实。
2. SUR3 > SUR2 决定默认物理、技术、制度、文化、交通、武器、身体与生活材料边界。
3. SUR1 决定故事类型、叙事动力、冲突快感和氛围基调；它本身不自动授权外星人、超能力、鬼神、魔法、义体、AI 治理等奇观本体真实存在。
4. 其他 SUR 参数若与时空坐标冲突，按当前世界法则转译为该坐标内可成立的材料；若已被本体授权，则必须作为世界现实承担叙事功能。

**当前规则**:
${option.promptCN}

**执行禁令**:
- 不得因为 SUR1 标题含有类型名词，就主动添加未被本体授权的科幻、魔法、异能、神话、现代科技或奇观材料。
- 若 SUR1 与 SUR2/SUR3 不冲突，直接让 SUR1 成为外部故事机关；不要为了执行世界法则而额外降维。
- 若用户想要“当代现实坐标 + 真实超能力/真实外星人/真实魔法”的类型世界，应选择 L4；L1/L2 下只能保留类型运动并转译其物理载体。`;
};
