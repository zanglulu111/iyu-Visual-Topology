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
    descCN: '彻底写实。SUR2/SUR3 锁死现实边界；SUR1 只能落成当前坐标内真实可发生的事件。',
    descEN: 'Fully realist. SUR2/SUR3 lock the real boundary; SUR1 must become events that could truly happen in the coordinate.',
    promptCN: '彻底写实：严格服从 SUR2/SUR3 与当前世界的物理、技术、政治、文化边界。SUR1 只能保留类型承诺、叙事节奏、阻力语法和观看快感，并落成当前现实中真实可发生的目标、关系、制度、空间、职业流程、误会、追捕、交易、事故或选择。不得出现真实超自然、真实科幻奇观、真实灵异、真实魔法、真实超能力、真实外星生命、跨时代技术或无法解释的异常本体。',
  },
  {
    id: 2,
    code: 'L2',
    cn: '折译',
    en: 'Translate',
    shortCN: 'L2 折译',
    shortEN: 'L2 Translate',
    descCN: '现实折译。保留坐标，把超现实或类型强刺激折成现实下的同构故事机关。',
    descEN: 'Recommended default. Keep the coordinate and translate SUR1 into equivalent machinery; genre terms do not become literal beings or powers.',
    promptCN: '现实折译：严守 SUR2 的场域母体与 SUR3 的精确坐标，同时不能让 SUR1 失效。若 SUR1 含超现实、科幻、灵异、魔法、超能力、外星生命或其他当前坐标不支持的强刺激材料，必须折译为当前世界内可成立的同构故事机关：目标、阻断、职业流程、空间规则、关系压力、危险、公共神话、误读危机、制度实验、表演骗局、媒体事件、升级链和高潮行动。类型标题中的超常名词不直接变成世界事实，除非 SUR2/SUR3 或用户输入已经明确授权其真实存在。',
  },
  {
    id: 3,
    code: 'L3',
    cn: '缝合',
    en: 'Seam',
    shortCN: 'L3 缝合',
    shortEN: 'L3 Seam',
    descCN: '局部异常。现实坐标仍是底座，允许幻觉、异常或无法解释的局部内容出现。',
    descEN: 'The coordinate remains the base; local anomalies or unverified events may carry genre pressure without becoming a full new reality.',
    promptCN: '局部异常：SUR2/SUR3 仍是现实底座，但允许 SUR1 的类型压力以异常事件、幻觉、梦、传闻、仪式、民间解释、象征物、监控盲区、集体误认、不可证实事件或社会症状出现。它可以改变人物行动和意义判断，但不得扩展成完整新世界体系；结尾也不能用解释句把异常整理成稳定设定。',
  },
  {
    id: 4,
    code: 'L4',
    cn: '超现实',
    en: 'Surreal',
    shortCN: 'L4 超现实',
    shortEN: 'L4 Surreal',
    descCN: '超现实本体成立。科幻、灵异、魔法、外星、超能力等可以成为真实世界材料。',
    descEN: 'Non-realist ontology manifests. Sci-fi, surreal, supernatural, magical, alien, or superhuman materials may become real world facts.',
    promptCN: '超现实：科幻、灵异、魔法、神话、外星生命、超能力、异种生态、时间异常、平行宇宙等可以真实存在，并成为制度、空间、身体、物件、危险、职业流程或公共秩序的一部分。若 SUR1 本身是怪兽、超级英雄、外星接触、奇幻、灵异等奇观本体类型，L4 就按该类型的纯正标准类型片写，让本体字面成立。若 SUR1 是爱情、现实主义、校园霸凌、公路剧情等现实经验类型，L4 不是把它们“变得更类型片”，而是在真实超现实世界中讲该类型故事：爱情仍以亲密关系为主线，校园霸凌仍以压迫关系和群体秩序为主线，公路剧情仍以旅程和关系位移为主线；新增奇观只提供世界规则、阻断、身体/制度代价和可拍事件，不能抢走主控类型。',
  },
  {
    id: 5,
    code: 'L5',
    cn: '狂想',
    en: 'Rhapsody',
    shortCN: 'L5 狂想',
    shortEN: 'L5 Rhapsody',
    descCN: '类型狂想曲。世界变成梦幻、MV、象征化的类型宇宙，但故事机关仍要清楚。',
    descEN: 'Dream, myth, symbol, and cross-era collage may govern the world, while the story mechanism stays clear.',
    promptCN: '类型狂想曲：允许梦、神话、象征、MV 逻辑、跨时代拼贴和类型奇观接管世界规则。现实可以变成可变形的舞台，城市、身体、时间、空间、交通、仪式、天气和群体行为都可以按 SUR1 的类型情绪重排。爱情可以成为爱情狂想曲，校园霸凌可以成为噩梦学校，公路剧情可以成为道路与身份不断变形的旅程，超级英雄可以成为神话化公共灾难。但故事仍必须有清楚的目标、阻断、升级、高潮选择和代价兑现，不能变成无因果散文。',
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

本模块裁决一个连续谱：从“彻底服从现实坐标”到“类型狂想接管世界”。它只调节世界本体强度：是否允许超现实、科幻、灵异、魔法、外星、超能力等成为世界事实；它不决定类型是否纯正。无论 L1-L5，SUR1 都必须作为强类型运作。

**授权层级**:
1. L1 禁止非现实本体；L2 把冲突本体折译成现实同构机关；L3 只允许局部异常；L4 允许超现实本体成为世界事实；L5 进入类型狂想曲。
2. SUR2 是场域预设包，决定世界母体、制度气味、危险来源、公共情绪和生活材料；SUR3 只有在被选择时作为精确坐标校准器，固定现实域、时间锚、空间锚、尺度边界、物理现实、技术边界和文化接口。
3. SUR1 决定故事类型、叙事动力、冲突快感和氛围基调；类型纯度在每一档都必须最高。现实经验类型在 L1/L2 也是标准类型片；奇观本体类型在 L4 才按本体字面成立。
4. 其他 SUR 参数若与 SUR3 精确坐标冲突，按当前世界法则转译、异常化、超现实化或狂想化；进入 L4/L5 后仍必须承担具体叙事功能，不能只是装饰。

**当前规则**:
${option.promptCN}

**执行禁令**:
- L1 禁止任何无法由当前现实解释的奇观本体；L2 必须把冲突材料折译为现实同构机关；L3 只能局部异常，不能扩展成完整新世界体系。
- L4 是超现实，不是类型质量开关。若 SUR1 是现实经验类型，新增奇观只能作为世界规则和阻断材料，不能抢走原类型的主线、高潮选择和结尾落点。
- L5 是类型狂想曲，不是乱炖；梦幻、MV、象征和奇观都必须服务已选类型的目标、阻断、升级、高潮选择和代价兑现。`;
};
