import { LibraryItemDef } from '../../../types';

type ActionMode = 'STATIC' | 'DYNAMIC' | 'BEHAVIOR';

type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;

const broadEraSet = new Set([
  'primitive',
  'slave',
  'feudal',
  'early_modern',
  'industrial',
  'modern',
  'contemporary',
  'near_future',
  'far_future'
]);

const uniq = (values: readonly string[]) => [...new Set(values.map(value => value.trim()).filter(Boolean))];

const toList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const normalizeCategoryFit = (fit?: LibraryItemDef['categoryFit']): CategoryFit => {
  const merged = {
    unlisted: fit?.unlisted || 'none',
    strong: uniq(toList(fit?.strong)),
    usable: uniq(toList(fit?.usable)),
    fusion: uniq(toList(fit?.fusion)),
    weak: uniq(toList(fit?.weak)),
    exclude: uniq(toList(fit?.exclude))
  };
  const excludeSet = new Set(merged.exclude);
  const strongSet = new Set(merged.strong.filter(tag => !excludeSet.has(tag)));
  const usableSet = new Set(merged.usable.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag)));
  const fusionSet = new Set(merged.fusion.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag)));
  const weakSet = new Set(merged.weak.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag) && !fusionSet.has(tag)));
  return {
    unlisted: merged.unlisted,
    strong: Array.from(strongSet),
    usable: Array.from(usableSet),
    fusion: Array.from(fusionSet),
    weak: Array.from(weakSet),
    exclude: merged.exclude
  };
};

const mergeCategoryFit = (
  base?: LibraryItemDef['categoryFit'],
  patch?: LibraryItemDef['categoryFit']
): CategoryFit => normalizeCategoryFit({
  unlisted: patch?.unlisted || base?.unlisted || 'none',
  strong: [...toList(base?.strong), ...toList(patch?.strong)],
  usable: [...toList(base?.usable), ...toList(patch?.usable)],
  fusion: [...toList(base?.fusion), ...toList(patch?.fusion)],
  weak: [...toList(base?.weak), ...toList(patch?.weak)],
  exclude: [...toList(base?.exclude), ...toList(patch?.exclude)]
});

const eraModeFor = (item: LibraryItemDef): 'specific' | 'universal' => {
  if (item.eraMode) return item.eraMode;
  const eras = toList(item.eras);
  const broadRealEraCount = eras.filter(era => broadEraSet.has(era)).length;
  const ontologyLevel = Number(item.ontologyLevel || 1);
  return broadRealEraCount >= 9 && ontologyLevel <= 1 && item.risk !== 'high' ? 'universal' : 'specific';
};

const realityTagsFor = (item: LibraryItemDef): string[] => {
  const level = Number(item.ontologyLevel || 1);
  const base = ['body_language', 'human_action'];
  if (level <= 1) return [...base, 'physical', 'realistic'];
  if (level === 2) return [...base, 'stylized', 'semi_real'];
  if (level === 3) return [...base, 'stylized', 'semi_surreal'];
  if (level === 4) return [...base, 'non_realist', 'surreal'];
  return [...base, 'abstract', 'surreal', 'symbolic'];
};

const actionKindFor = (mode: ActionMode, group = '') => {
  if (mode === 'STATIC') {
    if (group.includes('情绪肖像')) return 'emotional_portrait_pose';
    if (group.includes('时尚硬照')) return 'fashion_editorial_pose';
    if (group.includes('休憩生活')) return 'daily_rest_pose';
    if (group.includes('智性观察')) return 'observational_pose';
    if (group.includes('束缚屈服')) return 'restraint_submission_pose';
    if (group.includes('抽象超现实')) return 'abstract_surreal_pose';
    return 'static_pose';
  }
  if (mode === 'DYNAMIC') {
    if (group.includes('极速位移')) return 'high_speed_movement';
    if (group.includes('战斗暴力')) return 'combat_violence_action';
    if (group.includes('情感爆发')) return 'emotional_outburst_action';
    if (group.includes('环境互动')) return 'environment_interaction_action';
    if (group.includes('幻想超能')) return 'fantasy_power_action';
    if (group.includes('艺术抽象')) return 'abstract_art_action';
    return 'dynamic_action';
  }
  if (group.includes('电影剧情')) return 'cinema_drama_behavior';
  if (group.includes('电影动作')) return 'cinema_action_behavior';
  if (group.includes('电影幻想')) return 'cinema_fantasy_behavior';
  if (group.includes('艺术名画')) return 'fine_art_tableau_behavior';
  if (group.includes('动漫名场面')) return 'anime_tableau_behavior';
  if (group.includes('舞蹈舞台')) return 'dance_stage_behavior';
  if (group.includes('时尚硬照')) return 'fashion_editorial_behavior';
  if (group.includes('流行摇滚')) return 'pop_rock_behavior';
  if (group.includes('游戏动作')) return 'game_action_behavior';
  return 'human_behavior';
};

const groupCategoryFit = (mode: ActionMode, group = ''): CategoryFit => {
  if (mode === 'STATIC') {
    if (group.includes('情绪肖像')) return { strong: ['romance'], usable: ['horror', 'noir_crime', 'urban_life'], fusion: ['dark_fantasy', 'surreal'], weak: [], exclude: [] };
    if (group.includes('时尚硬照')) return { strong: ['fashion_idol'], usable: ['urban_life', 'romance', 'boudoir_aesthetic'], fusion: ['surreal'], weak: ['war_military'], exclude: [] };
    if (group.includes('休憩生活')) return { strong: ['urban_life', 'romance'], usable: ['real_professional', 'fashion_idol'], fusion: ['noir_crime', 'horror'], weak: [], exclude: [] };
    if (group.includes('智性观察')) return { strong: ['real_professional', 'noir_crime'], usable: ['urban_life', 'science_fiction'], fusion: ['court', 'historical'], weak: [], exclude: [] };
    if (group.includes('束缚屈服')) return { strong: ['horror', 'dark_fantasy'], usable: ['body_horror', 'religious_ritual', 'boudoir_aesthetic'], fusion: ['science_fiction', 'wasteland'], weak: ['urban_life'], exclude: [] };
    if (group.includes('抽象超现实')) return { strong: ['surreal', 'abstract'], usable: ['horror', 'body_horror'], fusion: ['fashion_idol', 'dark_fantasy'], weak: ['real_professional'], exclude: [] };
  }
  if (mode === 'DYNAMIC') {
    if (group.includes('极速位移')) return { strong: ['adventure', 'wuxia'], usable: ['urban_life', 'science_fiction', 'cyberpunk'], fusion: ['xianxia', 'wasteland'], weak: [], exclude: [] };
    if (group.includes('战斗暴力')) return { strong: ['war_military', 'wuxia'], usable: ['dark_fantasy', 'wasteland', 'adventure'], fusion: ['science_fiction', 'xianxia'], weak: ['romance'], exclude: [] };
    if (group.includes('情感爆发')) return { strong: ['romance', 'horror'], usable: ['urban_life', 'dark_fantasy'], fusion: ['surreal', 'fashion_idol'], weak: [], exclude: [] };
    if (group.includes('环境互动')) return { strong: ['adventure', 'ecological'], usable: ['urban_life', 'wasteland', 'real_professional'], fusion: ['fantasy', 'science_fiction'], weak: [], exclude: [] };
    if (group.includes('幻想超能')) return { strong: ['xianxia', 'fantasy'], usable: ['mythic_epic', 'dark_fantasy', 'science_fiction'], fusion: ['cyberpunk', 'horror'], weak: ['real_professional'], exclude: [] };
    if (group.includes('艺术抽象')) return { strong: ['surreal', 'abstract'], usable: ['fashion_idol', 'body_horror'], fusion: ['horror', 'romance'], weak: ['real_professional'], exclude: [] };
  }
  if (group.includes('电影剧情')) return { strong: ['romance'], usable: ['urban_life', 'historical', 'noir_crime'], fusion: ['surreal'], weak: [], exclude: [] };
  if (group.includes('电影动作')) return { strong: ['adventure', 'war_military'], usable: ['noir_crime', 'wasteland', 'science_fiction'], fusion: ['wuxia'], weak: [], exclude: [] };
  if (group.includes('电影幻想')) return { strong: ['fantasy', 'science_fiction'], usable: ['cyberpunk', 'surreal', 'dark_fantasy'], fusion: ['mythic_epic'], weak: [], exclude: [] };
  if (group.includes('艺术名画')) return { strong: ['historical', 'court'], usable: ['romance', 'religious_ritual', 'mythic_epic'], fusion: ['surreal', 'dark_fantasy'], weak: ['cyberpunk'], exclude: [] };
  if (group.includes('动漫名场面')) return { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'fantasy', 'science_fiction'], fusion: ['wuxia', 'xianxia'], weak: [], exclude: [] };
  if (group.includes('舞蹈舞台')) return { strong: ['fashion_idol'], usable: ['romance', 'boudoir_aesthetic', 'urban_life'], fusion: ['surreal', 'religious_ritual'], weak: ['war_military'], exclude: [] };
  if (group.includes('时尚硬照')) return { strong: ['fashion_idol'], usable: ['boudoir_aesthetic', 'urban_life', 'romance'], fusion: ['surreal'], weak: ['war_military'], exclude: [] };
  if (group.includes('流行摇滚')) return { strong: ['fashion_idol', 'urban_life'], usable: ['noir_crime', 'romance'], fusion: ['cyberpunk', 'wasteland'], weak: ['court'], exclude: [] };
  if (group.includes('游戏动作')) return { strong: ['adventure', 'war_military'], usable: ['wuxia', 'science_fiction', 'fantasy', 'wasteland'], fusion: ['xianxia', 'cyberpunk'], weak: ['romance'], exclude: [] };
  return { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
};

const extraCategoryFitFromTags = (item: LibraryItemDef): CategoryFit => {
  const text = [
    item.id,
    item.name,
    item.nameEn,
    item.def,
    item.defEn,
    ...toList(item.tags),
    ...toList(item.affects),
    ...toList(item.controls)
  ].filter(Boolean).join(' ').toLowerCase();
  const fit: CategoryFit = { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
  const has = (pattern: RegExp) => pattern.test(text);
  if (has(/combat|fight|duel|weapon|battle|strike|slash|kick|punch|war|martial|武|战|刀|剑|拳|踢|斩/)) fit.usable = [...toList(fit.usable), 'war_military', 'wuxia'];
  if (has(/ritual|prayer|sacred|divine|curse|seal|talisman|仪式|祈|圣|封印|符/)) fit.usable = [...toList(fit.usable), 'religious_ritual', 'dark_fantasy'];
  if (has(/magic|super|void|levitat|teleport|portal|超能|魔法|虚空|悬浮|传送/)) fit.fusion = [...toList(fit.fusion), 'fantasy', 'xianxia', 'surreal'];
  if (has(/rain|wind|forest|water|snow|dust|storm|river|雨|风|森林|水|雪|尘|暴风|河/)) fit.usable = [...toList(fit.usable), 'ecological', 'adventure'];
  if (has(/stage|dance|runway|fashion|makeup|舞台|舞蹈|秀场|硬照|妆/)) fit.usable = [...toList(fit.usable), 'fashion_idol'];
  if (has(/screen|neon|laser|robot|cyber|digital|机甲|赛博|激光|屏幕|电子/)) fit.usable = [...toList(fit.usable), 'science_fiction', 'cyberpunk'];
  return normalizeCategoryFit(fit);
};

export const withActionAxisMeta = (mode: ActionMode, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    const actionKind = actionKindFor(mode, item.group);
    const categoryFit = item.categoryFit
      ? normalizeCategoryFit(item.categoryFit)
      : mergeCategoryFit(groupCategoryFit(mode, item.group), extraCategoryFitFromTags(item));
    const ontologyLevel = Number(item.ontologyLevel || 1);
    const eraMode = eraModeFor(item);
    const extra = item as LibraryItemDef & {
      randomAxis?: string;
      randomDominance?: string;
      randomRole?: string;
      selectionRule?: string;
    };
    return {
      ...item,
      ontologyLevel: item.ontologyLevel || 1,
      eraMode,
      eraStrictness: item.eraStrictness || (eraMode === 'universal' ? 'none' : 'soft'),
      anachronismRisk: item.anachronismRisk || (item.risk === 'high' ? 'high' : item.risk === 'medium' ? 'medium' : 'low'),
      realityTags: item.realityTags?.length ? item.realityTags : realityTagsFor(item),
      categoryFit,
      evidenceTags: uniq([...(item.evidenceTags || []), ...toList(item.tags), ...toList(item.affects), ...toList(item.controls), actionKind]),
      tags: uniq([...(item.tags || []), 'subject_action_axis', mode.toLowerCase(), actionKind, `ontology_l${ontologyLevel}`]),
      actionMode: mode.toLowerCase(),
      actionKind,
      randomAxis: extra.randomAxis || 'subject_action',
      randomDominance: extra.randomDominance || (mode === 'STATIC' ? 'pose_parameter' : mode === 'DYNAMIC' ? 'action_parameter' : 'behavior_reference'),
      randomRole: extra.randomRole || actionKind,
      selectionRule: extra.selectionRule || '姿态行动词条用于给主体提供身体状态、动作方向或行为证据。随机时最多保留少量动作信号；若与主体身份、时空或现实等级冲突，优先折译为局部姿态、手势、服装受力或表情证据。',
      eraTranslation: item.eraTranslation || '若动作母题与当前时代不完全匹配，保留身体力学、姿态关系和情绪功能，把具体道具、场景和技术元素折译为当前时代可成立的行为证据。',
      eraTranslationEn: item.eraTranslationEn || 'If the action motif does not fully match the current era, keep body mechanics, pose relation, and emotional function while translating props, scene details, and technology into period-valid behavioral evidence.'
    } as LibraryItemDef;
  })
);
