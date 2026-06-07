import { LibraryItemDef } from '../../../types';
import { CONCEPT_CATEGORY_AXIS_IDS } from '../filter/categoryAxis';

type SpaceTypeMode = 'REAL' | 'SURREAL' | 'ABSTRACT';
type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type CategoryUnlistedFit = NonNullable<CategoryFit['unlisted']>;

type SpaceMetaSeed = {
  fieldMode: 'real_scene' | 'surreal_scene' | 'abstract_scene';
  fieldModeLabel: string;
  spacetimeSystem: string;
  surrealLevel: 1 | 2 | 3 | 4 | 5;
  eras: readonly string[];
  eraMode?: 'specific' | 'universal';
  timeTags: readonly string[];
  realityTags: readonly string[];
  styleTags: readonly string[];
  conflictTags: readonly string[];
  nativeTags: readonly string[];
  compatibleGenres: readonly string[];
  compatibleCultures: readonly string[];
  riskTags: readonly string[];
  spaceScale: 'micro' | 'room' | 'interior' | 'street' | 'building' | 'city' | 'landscape' | 'planetary' | 'cosmic' | 'abstract';
  risk: 'clean' | 'medium' | 'high';
};

type SpaceItemPatch = Partial<Pick<
  LibraryItemDef,
  | 'publicFilterTags'
  | 'nativeTags'
  | 'compatibleGenres'
  | 'compatibleEras'
  | 'compatibleCultures'
  | 'compatibleSpaces'
  | 'categoryFit'
  | 'riskTags'
  | 'conflictTags'
  | 'spaceScale'
>>;

const cleanName = (name: string) => name.replace(/\s*\([^)]*\)\s*/g, '').trim();
const uniq = <T,>(values: readonly T[]) => [...new Set(values)];
const uniqStrings = (values: readonly string[]) => uniq(values.map(value => value.trim()).filter(Boolean));
const categoryAliasMap: Record<string, readonly string[]> = {
  martial_arts: ['wuxia'],
  occult: ['dark_fantasy', 'religious_ritual'],
  psychological: ['surreal'],
  dream: ['surreal'],
  space_opera: ['science_fiction'],
  cosmic_horror: ['horror', 'surreal'],
  creature: ['fantasy'],
  post_apocalyptic: ['wasteland'],
  survival: ['adventure', 'wasteland']
};
const normalizeCategoryIds = (values: readonly string[] = []) => uniqStrings(values.flatMap(value => {
  const key = value.trim();
  const mapped = categoryAliasMap[key] || [key];
  return mapped.filter(tag => CONCEPT_CATEGORY_AXIS_IDS.has(tag as any));
}));
const fit = (
  unlisted: CategoryUnlistedFit,
  patch: Omit<CategoryFit, 'unlisted'>
): CategoryFit => ({
  unlisted,
  strong: normalizeCategoryIds(patch.strong || []),
  usable: normalizeCategoryIds(patch.usable || []),
  fusion: normalizeCategoryIds(patch.fusion || []),
  weak: normalizeCategoryIds(patch.weak || []),
  exclude: normalizeCategoryIds(patch.exclude || [])
});

const getSpaceTypeCategoryFit = (mode: SpaceTypeMode, group = ''): CategoryFit => {
  if (mode === 'REAL') {
    if (group.includes('历史')) return fit('weak', {
      strong: ['historical'],
      usable: ['court', 'war_military', 'religious_ritual', 'adventure'],
      fusion: ['wuxia', 'xianxia', 'romance', 'dark_fantasy', 'mythic_epic'],
      weak: ['urban_life', 'real_professional', 'science_fiction', 'cyberpunk', 'posthuman', 'abstract'],
      exclude: []
    });
    if (group.includes('战争')) return fit('weak', {
      strong: ['war_military'],
      usable: ['historical', 'adventure', 'noir_crime', 'wasteland'],
      fusion: ['science_fiction', 'wuxia', 'dark_fantasy'],
      weak: ['romance', 'fashion_idol', 'court', 'xianxia', 'abstract'],
      exclude: []
    });
    if (group.includes('自然')) return fit('weak', {
      strong: ['ecological', 'adventure'],
      usable: ['historical', 'wasteland'],
      fusion: ['fantasy', 'xianxia', 'mythic_epic', 'horror', 'surreal'],
      weak: ['urban_life', 'real_professional', 'cyberpunk', 'court'],
      exclude: []
    });
    if (group.includes('爱情')) return fit('weak', {
      strong: ['romance'],
      usable: ['urban_life', 'historical', 'fashion_idol'],
      fusion: ['noir_crime', 'court', 'adventure'],
      weak: ['war_military', 'horror', 'science_fiction', 'cyberpunk', 'wuxia', 'xianxia', 'abstract'],
      exclude: []
    });
    if (group.includes('恐怖')) return fit('weak', {
      strong: ['horror'],
      usable: ['noir_crime', 'body_horror'],
      fusion: ['surreal', 'dark_fantasy', 'urban_life'],
      weak: ['romance', 'fashion_idol', 'real_professional', 'court', 'wuxia', 'xianxia'],
      exclude: []
    });
    return fit('weak', {
      strong: ['urban_life', 'noir_crime'],
      usable: ['real_professional'],
      fusion: ['romance', 'cyberpunk', 'fashion_idol'],
      weak: ['historical', 'court', 'wuxia', 'xianxia', 'fantasy', 'abstract'],
      exclude: []
    });
  }

  if (mode === 'SURREAL') {
    if (group.includes('科幻')) return fit('none', {
      strong: ['science_fiction'],
      usable: ['cyberpunk', 'posthuman', 'space_opera'],
      fusion: ['horror', 'surreal', 'wasteland', 'noir_crime'],
      weak: ['romance', 'historical', 'court', 'wuxia', 'xianxia'],
      exclude: []
    });
    if (group.includes('奇幻')) return fit('none', {
      strong: ['fantasy', 'mythic_epic'],
      usable: ['xianxia', 'dark_fantasy', 'adventure', 'religious_ritual'],
      fusion: ['wuxia', 'horror', 'romance', 'surreal'],
      weak: ['science_fiction', 'cyberpunk', 'real_professional', 'urban_life'],
      exclude: []
    });
    if (group.includes('赛博')) return fit('none', {
      strong: ['cyberpunk', 'science_fiction'],
      usable: ['posthuman', 'biopunk', 'noir_crime'],
      fusion: ['horror', 'surreal', 'wasteland', 'urban_life'],
      weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance'],
      exclude: []
    });
    if (group.includes('梦境')) return fit('none', {
      strong: ['surreal', 'horror', 'abstract'],
      usable: ['fantasy', 'psychological'],
      fusion: ['romance', 'dark_fantasy', 'mythic_epic'],
      weak: ['real_professional', 'war_military', 'historical', 'cyberpunk'],
      exclude: []
    });
    if (group.includes('宇宙')) return fit('none', {
      strong: ['science_fiction', 'space_opera'],
      usable: ['surreal', 'horror', 'posthuman'],
      fusion: ['mythic_epic', 'fantasy', 'religious_ritual'],
      weak: ['urban_life', 'real_professional', 'romance', 'court', 'wuxia'],
      exclude: []
    });
    return fit('none', {
      strong: ['surreal', 'abstract'],
      usable: ['horror', 'fantasy'],
      fusion: ['romance', 'historical', 'science_fiction', 'fashion_idol'],
      weak: ['real_professional', 'war_military', 'urban_life', 'wuxia'],
      exclude: []
    });
  }

  if (group.includes('阈限')) return fit('weak', {
    strong: ['surreal', 'horror'],
    usable: ['urban_life', 'noir_crime', 'real_professional'],
    fusion: ['romance', 'science_fiction', 'cyberpunk'],
    weak: ['historical', 'court', 'war_military', 'wuxia', 'xianxia'],
    exclude: []
  });
  if (group.includes('几何')) return fit('none', {
    strong: ['abstract'],
    usable: ['surreal', 'science_fiction', 'cyberpunk'],
    fusion: ['posthuman', 'fashion_idol'],
    weak: ['romance', 'historical', 'court', 'wuxia', 'xianxia', 'ecological'],
    exclude: []
  });
  if (group.includes('材质')) return fit('none', {
    strong: ['abstract', 'surreal'],
    usable: ['fashion_idol', 'fantasy'],
    fusion: ['science_fiction', 'horror', 'ecological'],
    weak: ['historical', 'real_professional', 'war_military', 'wuxia'],
    exclude: []
  });
  return fit('none', {
    strong: ['abstract', 'surreal'],
    usable: ['fashion_idol'],
    fusion: ['fantasy', 'science_fiction', 'horror', 'romance'],
    weak: ['historical', 'real_professional', 'war_military', 'wuxia'],
    exclude: []
  });
};
const mergeCategoryFit = (
  base?: LibraryItemDef['categoryFit'],
  patch?: LibraryItemDef['categoryFit']
): CategoryFit => {
  const merged = {
    unlisted: (patch?.unlisted || base?.unlisted || 'none') as CategoryUnlistedFit,
    strong: uniqStrings([...(base?.strong || []), ...(patch?.strong || [])]),
    usable: uniqStrings([...(base?.usable || []), ...(patch?.usable || [])]),
    fusion: uniqStrings([...(base?.fusion || []), ...(patch?.fusion || [])]),
    weak: uniqStrings([...(base?.weak || []), ...(patch?.weak || [])]),
    exclude: uniqStrings([...(base?.exclude || []), ...(patch?.exclude || [])])
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
const inferEraMode = (meta: SpaceMetaSeed, item: LibraryItemDef, patch: SpaceItemPatch): 'specific' | 'universal' => {
  if (item.eraMode || meta.eraMode) return item.eraMode || meta.eraMode || 'specific';
  const eras = uniqStrings([...(item.eras || []), ...meta.eras, ...(patch.compatibleEras || [])]);
  const lowRiskPhysical = meta.surrealLevel <= 1 && meta.risk === 'clean' && !meta.conflictTags.some(tag => /future|modern|pre_modern|historical|primitive|digital|abstract|mythic/.test(tag));
  const broadEra = eras.length >= 7;
  return lowRiskPhysical && broadEra ? 'universal' : 'specific';
};
const textKey = (item: LibraryItemDef) => `${item.id} ${item.name} ${item.def || ''} ${item.core || ''}`.toLocaleLowerCase();
const hasAnyTerm = (text: string, cnPattern: RegExp, enTerms: readonly string[] = []) => (
  cnPattern.test(text) ||
  enTerms.some(term => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(text);
  })
);

const pushPatch = (target: SpaceItemPatch, patch: SpaceItemPatch) => {
  ([
    'publicFilterTags',
    'nativeTags',
    'compatibleGenres',
    'compatibleEras',
    'compatibleCultures',
    'compatibleSpaces',
    'riskTags',
    'conflictTags'
  ] as const).forEach(key => {
    const values = patch[key];
    if (values?.length) target[key] = uniq([...(target[key] || []), ...values]);
  });
  if (patch.spaceScale) target.spaceScale = patch.spaceScale;
};

const getItemPatch = (item: LibraryItemDef, mode: SpaceTypeMode): SpaceItemPatch => {
  const text = textKey(item);
  const patch: SpaceItemPatch = {};
  const allowLiteralPlacePatch = mode !== 'ABSTRACT';
  const hasModernSpecificAnchor = hasAnyTerm(
    text,
    /公寓|酒店|高层|落地窗|出租车|便利店|加油站|地铁|停车|股票|交易|拖车|摩托|消防员|棒球|现代|东京|洛杉矶|霓虹|扶梯/,
    ['apartment', 'hotel', 'high-rise', 'taxi', 'store', 'gas station', 'subway', 'parking', 'trading', 'trailer', 'motorcycle', 'firefighter', 'baseball', 'tokyo', 'la street', 'escalator', 'neon']
  );

  if (hasModernSpecificAnchor) {
    pushPatch(patch, {
      publicFilterTags: ['现代城市'],
      nativeTags: ['urban_life', 'realistic', 'social'],
      compatibleGenres: ['urban_life', 'real_professional', 'noir_crime', 'romance'],
      compatibleEras: ['modern', 'contemporary', 'near_future'],
      compatibleCultures: ['contemporary_urban', 'east_asian_modern', 'western_modern', 'global_corporate'],
      compatibleSpaces: ['street', 'office', 'subway', 'apartment', 'city'],
      riskTags: ['modern_bias'],
      conflictTags: ['strict_pre_modern_lock']
    });
  }

  if (/竹林|竹|轻功|道场|一代宗师|卧虎藏龙|kung fu|dojo|bamboo/.test(text)) {
    pushPatch(patch, {
      publicFilterTags: ['江湖武侠', '武术训练'],
      nativeTags: ['martial', 'combat', 'sword', 'training'],
      compatibleGenres: ['wuxia', 'xianxia', 'martial_arts', 'historical'],
      compatibleEras: ['feudal', 'early_modern', 'mythic'],
      compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'sect_order', 'mountain_monastery'],
      compatibleSpaces: ['training_ground', 'courtyard', 'forest', 'mountain']
    });
  }
  if (!hasModernSpecificAnchor && /山林|山水|云雾|森林|高山|雪山|河流|水面|荒野|刺客聂隐娘|喜马拉雅|mist|mountain|forest|river|water|wilderness/.test(text)) {
    pushPatch(patch, {
      publicFilterTags: ['山水荒野'],
      nativeTags: ['ecological', 'travel'],
      compatibleGenres: ['historical', 'adventure', 'ecological'],
      compatibleEras: ['primitive', 'feudal', 'early_modern', 'mythic', 'timeless'],
      compatibleCultures: ['ecological_wild'],
      compatibleSpaces: ['mountain', 'forest', 'river', 'landscape'],
      spaceScale: 'landscape'
    });
  }
  if (allowLiteralPlacePatch && /宫殿|宫廷|王宫|紫禁城|凡尔赛|forbidden city|palace|court|throne room/.test(text)) {
    pushPatch(patch, {
      publicFilterTags: ['宫廷秩序'],
      nativeTags: ['court', 'empire'],
      compatibleGenres: ['court', 'historical'],
      compatibleEras: ['slave', 'feudal', 'early_modern'],
      compatibleCultures: ['historical_court', 'imperial_bureaucracy', 'east_asian_historical', 'western_court'],
      compatibleSpaces: ['palace', 'courtyard', 'interior']
    });
  }
  if (allowLiteralPlacePatch && /庭院|大院|宫殿|神殿|寺|庙|罗生门|城堡|墓穴|祭坛|courtyard|palace|temple|gate|castle|tomb|altar/.test(text)) {
    pushPatch(patch, {
      publicFilterTags: ['古典建筑', '仪式空间'],
      nativeTags: ['historical', 'ritual', 'institution'],
      compatibleGenres: ['historical', 'religious_ritual'],
      compatibleEras: ['slave', 'feudal', 'early_modern', 'mythic'],
      compatibleCultures: ['east_asian_historical', 'historical_court', 'religious_order', 'forbidden_temple'],
      compatibleSpaces: ['courtyard', 'palace', 'temple', 'altar', 'tomb', 'interior'],
      spaceScale: 'building'
    });
  }
  if (/空间站|太空|飞船|月球|火星|星云|黑洞|宇宙|星门|虫洞|space|spaceship|moon|mars|nebula|black hole|wormhole|cosmic/.test(text)) {
    pushPatch(patch, {
      publicFilterTags: ['宇宙科幻'],
      nativeTags: ['science_fiction', 'space_opera', 'technology'],
      compatibleGenres: ['science_fiction', 'space_opera', 'cosmic_horror', 'posthuman'],
      compatibleEras: ['near_future', 'far_future', 'timeless'],
      compatibleCultures: ['space_colony', 'alien_ecology', 'posthuman_civilization'],
      compatibleSpaces: ['space_station', 'spaceship', 'alien_planet', 'cosmic'],
      riskTags: ['era_collision_risk', 'cosmic_scale_risk'],
      conflictTags: ['strict_historical_realism', 'pre_modern_only'],
      spaceScale: 'cosmic'
    });
  }
  if (/赛博|代码|全息|数字|网格|霓虹|黑客|数据|义体|cyber|code|holographic|digital|grid|neon|hacker|data/.test(text)) {
    pushPatch(patch, {
      publicFilterTags: ['数字赛博'],
      nativeTags: ['cyberpunk', 'technology', 'interface'],
      compatibleGenres: ['cyberpunk', 'science_fiction', 'posthuman', 'noir_crime'],
      compatibleEras: ['contemporary', 'near_future', 'far_future'],
      compatibleCultures: ['cyber_megacity', 'global_corporate', 'posthuman_city'],
      compatibleSpaces: ['server_room', 'corporate_tower', 'city', 'space_station'],
      riskTags: ['high_technology_pressure', 'era_collision_risk'],
      conflictTags: ['strict_historical_realism', 'pre_modern_only']
    });
  }
  if (hasAnyTerm(
    text,
    /办公室|地铁|商场|便利店|加油站|公寓|机场|酒店|东京|洛杉矶|现代/,
    ['office', 'subway', 'mall', 'store', 'apartment', 'airport', 'hotel', 'tokyo', 'parking']
  )) {
    pushPatch(patch, {
      publicFilterTags: ['现代城市'],
      nativeTags: ['urban_life', 'realistic', 'social'],
      compatibleGenres: ['urban_life', 'real_professional', 'noir_crime', 'romance'],
      compatibleEras: ['modern', 'contemporary', 'near_future'],
      compatibleCultures: ['contemporary_urban', 'east_asian_modern', 'western_modern', 'global_corporate'],
      compatibleSpaces: ['street', 'office', 'subway', 'apartment', 'city'],
      riskTags: ['modern_bias'],
      conflictTags: ['strict_pre_modern_lock']
    });
  }

  return patch;
};

const defaultAbsorptionRule =
  '空间类型预设只提供 C03 时空场域、C08 取景构图和 C10 环境证据。它可以作为本次画面的场景主轴或局部场景接口，但不得直接替代主体身份、媒介风格、拍摄协议或光影方案。';

const defaultAbsorptionRuleEn =
  'The space-type preset only supplies C03 time-space field, C08 composition context, and C10 environmental evidence. It may act as the scene axis or a local scene interface, but must not replace subject identity, media style, shooting protocol, or lighting design.';

const mapIds = <T,>(entries: Array<[readonly string[], T]>): Record<string, T> => Object.fromEntries(
  entries.flatMap(([ids, value]) => ids.map(id => [id, value]))
);

const spaceTypeCategoryUnlistedById: Record<string, CategoryUnlistedFit> = mapIds([
  [
    [
      'sr_urb_01', 'sr_urb_02', 'sr_urb_03', 'sr_urb_04', 'sr_urb_05', 'sr_urb_06', 'sr_urb_07', 'sr_urb_08', 'sr_urb_09', 'sr_urb_10',
      'sr_urb_11', 'sr_urb_12', 'sr_urb_13', 'sr_urb_14', 'sr_urb_15', 'sr_urb_16', 'sr_urb_17', 'sr_urb_18', 'sr_urb_19', 'sr_urb_20',
      'sr_urb_21', 'sr_urb_22', 'sr_urb_23', 'sr_urb_24', 'sr_urb_25', 'sr_urb_26', 'sr_urb_27', 'sr_urb_28', 'sr_urb_29', 'sr_urb_30',
      'sr_his_01', 'sr_his_02', 'sr_his_03', 'sr_his_04', 'sr_his_05', 'sr_his_06', 'sr_his_07', 'sr_his_08', 'sr_his_09', 'sr_his_10',
      'sr_his_11', 'sr_his_12', 'sr_his_13', 'sr_his_14', 'sr_his_15', 'sr_his_16', 'sr_his_17', 'sr_his_18', 'sr_his_19', 'sr_his_20',
      'sr_his_21', 'sr_his_22', 'sr_his_23', 'sr_his_24', 'sr_his_25', 'sr_his_26', 'sr_his_27', 'sr_his_28', 'sr_his_29', 'sr_his_30',
      'sr_hor_01', 'sr_hor_02', 'sr_hor_03', 'sr_hor_04', 'sr_hor_05', 'sr_hor_06', 'sr_hor_07', 'sr_hor_08', 'sr_hor_09', 'sr_hor_10',
      'sr_hor_11', 'sr_hor_12', 'sr_hor_13', 'sr_hor_14', 'sr_hor_15', 'sr_hor_16', 'sr_hor_17', 'sr_hor_18', 'sr_hor_19', 'sr_hor_20',
      'sr_hor_21', 'sr_hor_22', 'sr_hor_23', 'sr_hor_24', 'sr_hor_25', 'sr_hor_26', 'sr_hor_27', 'sr_hor_28', 'sr_hor_29', 'sr_hor_30',
      'sr_rom_01', 'sr_rom_02', 'sr_rom_03', 'sr_rom_04', 'sr_rom_05', 'sr_rom_06', 'sr_rom_07', 'sr_rom_08', 'sr_rom_09', 'sr_rom_10',
      'sr_rom_11', 'sr_rom_12', 'sr_rom_13', 'sr_rom_14', 'sr_rom_15', 'sr_rom_16', 'sr_rom_17', 'sr_rom_18', 'sr_rom_19', 'sr_rom_20',
      'sr_rom_21', 'sr_rom_22', 'sr_rom_23', 'sr_rom_24', 'sr_rom_25', 'sr_rom_26', 'sr_rom_27', 'sr_rom_28', 'sr_rom_29', 'sr_rom_30',
      'sr_war_01', 'sr_war_02', 'sr_war_03', 'sr_war_04', 'sr_war_05', 'sr_war_06', 'sr_war_07', 'sr_war_08', 'sr_war_09', 'sr_war_10',
      'sr_war_11', 'sr_war_12', 'sr_war_13', 'sr_war_14', 'sr_war_15', 'sr_war_16', 'sr_war_17', 'sr_war_18', 'sr_war_19', 'sr_war_20',
      'sr_war_21', 'sr_war_22', 'sr_war_23', 'sr_war_24', 'sr_war_25', 'sr_war_26', 'sr_war_27', 'sr_war_28', 'sr_war_29', 'sr_war_30',
      'sr_nat_01', 'sr_nat_02', 'sr_nat_03', 'sr_nat_04', 'sr_nat_05', 'sr_nat_06', 'sr_nat_07', 'sr_nat_08', 'sr_nat_09', 'sr_nat_10',
      'sr_nat_11', 'sr_nat_12', 'sr_nat_13', 'sr_nat_14', 'sr_nat_15', 'sr_nat_16', 'sr_nat_17', 'sr_nat_18', 'sr_nat_19', 'sr_nat_20',
      'sr_nat_21', 'sr_nat_22', 'sr_nat_23', 'sr_nat_24', 'sr_nat_25', 'sr_nat_26', 'sr_nat_27', 'sr_nat_28', 'sr_nat_29', 'sr_nat_30',
      'sa_lim_01', 'sa_lim_02', 'sa_lim_03', 'sa_lim_04', 'sa_lim_05', 'sa_lim_06', 'sa_lim_07', 'sa_lim_08', 'sa_lim_09', 'sa_lim_10',
      'sa_lim_11', 'sa_lim_12', 'sa_lim_13', 'sa_lim_14', 'sa_lim_15', 'sa_lim_16', 'sa_lim_17', 'sa_lim_18', 'sa_lim_19', 'sa_lim_20',
      'sa_lim_21', 'sa_lim_22', 'sa_lim_23', 'sa_lim_24', 'sa_lim_25', 'sa_lim_26', 'sa_lim_27', 'sa_lim_28', 'sa_lim_29', 'sa_lim_30'
    ],
    'weak'
  ],
  [
    [
      'sr_sf_01', 'sr_sf_02', 'sr_sf_03', 'sr_sf_04', 'sr_sf_05', 'sr_sf_06', 'sr_sf_07', 'sr_sf_08', 'sr_sf_09', 'sr_sf_10',
      'sr_sf_11', 'sr_sf_12', 'sr_sf_13', 'sr_sf_14', 'sr_sf_15', 'sr_sf_16', 'sr_sf_17', 'sr_sf_18', 'sr_sf_19', 'sr_sf_20',
      'sr_sf_21', 'sr_sf_22', 'sr_sf_23', 'sr_sf_24', 'sr_sf_25', 'sr_sf_26', 'sr_sf_27', 'sr_sf_28', 'sr_sf_29', 'sr_sf_30',
      'sr_fan_01', 'sr_fan_02', 'sr_fan_03', 'sr_fan_04', 'sr_fan_05', 'sr_fan_06', 'sr_fan_07', 'sr_fan_08', 'sr_fan_09', 'sr_fan_10',
      'sr_fan_11', 'sr_fan_12', 'sr_fan_13', 'sr_fan_14', 'sr_fan_15', 'sr_fan_16', 'sr_fan_17', 'sr_fan_18', 'sr_fan_19', 'sr_fan_20',
      'sr_fan_21', 'sr_fan_22', 'sr_fan_23', 'sr_fan_24', 'sr_fan_25', 'sr_fan_26', 'sr_fan_27', 'sr_fan_28', 'sr_fan_29', 'sr_fan_30',
      'sr_art_01', 'sr_art_02', 'sr_art_03', 'sr_art_04', 'sr_art_05', 'sr_art_06', 'sr_art_07', 'sr_art_08', 'sr_art_09', 'sr_art_10',
      'sr_art_11', 'sr_art_12', 'sr_art_13', 'sr_art_14', 'sr_art_15', 'sr_art_16', 'sr_art_17', 'sr_art_18', 'sr_art_19', 'sr_art_20',
      'sr_art_21', 'sr_art_22', 'sr_art_23', 'sr_art_24', 'sr_art_25', 'sr_art_26', 'sr_art_27', 'sr_art_28', 'sr_art_29', 'sr_art_30',
      'sr_cyb_01', 'sr_cyb_02', 'sr_cyb_03', 'sr_cyb_04', 'sr_cyb_05', 'sr_cyb_06', 'sr_cyb_07', 'sr_cyb_08', 'sr_cyb_09', 'sr_cyb_10',
      'sr_cyb_11', 'sr_cyb_12', 'sr_cyb_13', 'sr_cyb_14', 'sr_cyb_15', 'sr_cyb_16', 'sr_cyb_17', 'sr_cyb_18', 'sr_cyb_19', 'sr_cyb_20',
      'sr_cyb_21', 'sr_cyb_22', 'sr_cyb_23', 'sr_cyb_24', 'sr_cyb_25', 'sr_cyb_26', 'sr_cyb_27', 'sr_cyb_28', 'sr_cyb_29', 'sr_cyb_30',
      'sr_drm_01', 'sr_drm_02', 'sr_drm_03', 'sr_drm_04', 'sr_drm_05', 'sr_drm_06', 'sr_drm_07', 'sr_drm_08', 'sr_drm_09', 'sr_drm_10',
      'sr_drm_11', 'sr_drm_12', 'sr_drm_13', 'sr_drm_14', 'sr_drm_15', 'sr_drm_16', 'sr_drm_17', 'sr_drm_18', 'sr_drm_19', 'sr_drm_20',
      'sr_drm_21', 'sr_drm_22', 'sr_drm_23', 'sr_drm_24', 'sr_drm_25', 'sr_drm_26', 'sr_drm_27', 'sr_drm_28', 'sr_drm_29', 'sr_drm_30',
      'sr_cos_01', 'sr_cos_02', 'sr_cos_03', 'sr_cos_04', 'sr_cos_05', 'sr_cos_06', 'sr_cos_07', 'sr_cos_08', 'sr_cos_09', 'sr_cos_10',
      'sr_cos_11', 'sr_cos_12', 'sr_cos_13', 'sr_cos_14', 'sr_cos_15', 'sr_cos_16', 'sr_cos_17', 'sr_cos_18', 'sr_cos_19', 'sr_cos_20',
      'sr_cos_21', 'sr_cos_22', 'sr_cos_23', 'sr_cos_24', 'sr_cos_25', 'sr_cos_26', 'sr_cos_27', 'sr_cos_28', 'sr_cos_29', 'sr_cos_30',
      'sa_geo_01', 'sa_geo_02', 'sa_geo_03', 'sa_geo_04', 'sa_geo_05', 'sa_geo_06', 'sa_geo_07', 'sa_geo_08', 'sa_geo_09', 'sa_geo_10',
      'sa_geo_11', 'sa_geo_12', 'sa_geo_13', 'sa_geo_14', 'sa_geo_15', 'sa_geo_16', 'sa_geo_17', 'sa_geo_18', 'sa_geo_19', 'sa_geo_20',
      'sa_geo_21', 'sa_geo_22', 'sa_geo_23', 'sa_geo_24', 'sa_geo_25', 'sa_geo_26', 'sa_geo_27', 'sa_geo_28', 'sa_geo_29', 'sa_geo_30',
      'sa_abs_01', 'sa_abs_02', 'sa_abs_03', 'sa_abs_04', 'sa_abs_05', 'sa_abs_06', 'sa_abs_07', 'sa_abs_08', 'sa_abs_09', 'sa_abs_10',
      'sa_abs_11', 'sa_abs_12', 'sa_abs_13', 'sa_abs_14', 'sa_abs_15', 'sa_abs_16', 'sa_abs_17', 'sa_abs_18', 'sa_abs_19', 'sa_abs_20',
      'sa_abs_21', 'sa_abs_22', 'sa_abs_23', 'sa_abs_24', 'sa_abs_25', 'sa_abs_26', 'sa_abs_27', 'sa_abs_28', 'sa_abs_29', 'sa_abs_30',
      'sa_mat_01', 'sa_mat_02', 'sa_mat_03', 'sa_mat_04', 'sa_mat_05', 'sa_mat_06', 'sa_mat_07', 'sa_mat_08', 'sa_mat_09', 'sa_mat_10',
      'sa_mat_11', 'sa_mat_12', 'sa_mat_13', 'sa_mat_14', 'sa_mat_15', 'sa_mat_16', 'sa_mat_17', 'sa_mat_18', 'sa_mat_19', 'sa_mat_20',
      'sa_mat_21', 'sa_mat_22', 'sa_mat_23', 'sa_mat_24', 'sa_mat_25', 'sa_mat_26', 'sa_mat_27', 'sa_mat_28', 'sa_mat_29', 'sa_mat_30'
    ],
    'none'
  ]
]);

const getRealMeta = (group = ''): SpaceMetaSeed => {
  if (group.includes('历史')) {
    return {
      fieldMode: 'real_scene',
      fieldModeLabel: '现实场景',
      spacetimeSystem: 'historical_physical_world',
      surrealLevel: 1,
      eras: ['slave', 'feudal', 'early_modern', 'industrial', 'modern'],
      timeTags: ['historical', 'period', 'pre_modern_to_modern'],
      realityTags: ['realistic', 'physical', 'historical'],
      styleTags: ['epic', 'period', 'cinematic'],
      conflictTags: ['far_future_only', 'pure_abstract_space', 'literal_dream_logic'],
      nativeTags: ['historical', 'realistic'],
      compatibleGenres: ['historical'],
      compatibleCultures: [],
      riskTags: ['era_locked_space'],
      spaceScale: 'landscape',
      risk: 'clean'
    };
  }
  if (group.includes('战争')) {
    return {
      fieldMode: 'real_scene',
      fieldModeLabel: '现实场景',
      spacetimeSystem: 'industrial_modern_conflict_zone',
      surrealLevel: 1,
      eras: ['industrial', 'modern', 'contemporary', 'near_future'],
      timeTags: ['industrial', 'modern', 'contemporary', 'war_zone'],
      realityTags: ['realistic', 'physical', 'military'],
      styleTags: ['action', 'combat', 'disaster'],
      conflictTags: ['mythic_only', 'pure_abstract_space', 'peaceful_domestic_only'],
      nativeTags: ['war_military', 'combat', 'survival'],
      compatibleGenres: ['war_military', 'historical', 'industrial'],
      compatibleCultures: ['military_remnant', 'industrial_ruin'],
      riskTags: ['violence_pressure', 'era_locked_space'],
      spaceScale: 'landscape',
      risk: 'medium'
    };
  }
  if (group.includes('自然')) {
    return {
      fieldMode: 'real_scene',
      fieldModeLabel: '现实场景',
      spacetimeSystem: 'natural_physical_world',
      surrealLevel: 1,
      eras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless'],
      timeTags: ['timeless', 'natural', 'outdoor'],
      realityTags: ['realistic', 'physical', 'ecological'],
      styleTags: ['wilderness', 'survival', 'documentary'],
      conflictTags: ['sealed_interior_only', 'pure_digital_space', 'urban_only'],
      nativeTags: ['ecological', 'survival'],
      compatibleGenres: ['historical', 'ecological', 'adventure'],
      compatibleCultures: ['ecological_wild', 'frontier_survival', 'nomadic_steppe'],
      riskTags: ['low_context_anchor'],
      spaceScale: 'landscape',
      risk: 'clean'
    };
  }
  if (group.includes('爱情')) {
    return {
      fieldMode: 'real_scene',
      fieldModeLabel: '现实场景',
      spacetimeSystem: 'social_domestic_world',
      surrealLevel: 1,
      eras: ['early_modern', 'industrial', 'modern', 'contemporary'],
      timeTags: ['modern', 'contemporary', 'social'],
      realityTags: ['realistic', 'physical', 'social'],
      styleTags: ['drama', 'intimate', 'everyday'],
      conflictTags: ['cosmic_scale', 'battlefield_only', 'pure_abstract_space'],
      nativeTags: ['romance', 'social', 'realistic'],
      compatibleGenres: ['romance', 'urban_life', 'real_professional', 'historical', 'fashion_idol'],
      compatibleCultures: ['contemporary_urban', 'east_asian_modern', 'western_modern'],
      riskTags: ['domestic_scale_bias'],
      spaceScale: 'interior',
      risk: 'clean'
    };
  }
  if (group.includes('恐怖')) {
    return {
      fieldMode: 'real_scene',
      fieldModeLabel: '现实场景',
      spacetimeSystem: 'physical_thriller_space',
      surrealLevel: 2,
      eras: ['industrial', 'modern', 'contemporary'],
      timeTags: ['modern', 'contemporary', 'night'],
      realityTags: ['realistic', 'physical', 'uncanny'],
      styleTags: ['thriller', 'horror', 'claustrophobic'],
      conflictTags: ['bright_comedy_space', 'pure_advertising_cleanroom'],
      nativeTags: ['horror', 'night', 'liminal'],
      compatibleGenres: ['horror', 'urban_life', 'noir_crime', 'surreal', 'body_horror'],
      compatibleCultures: ['contemporary_urban', 'dream_psychic', 'liminal_modern'],
      riskTags: ['uncanny_pressure'],
      spaceScale: 'interior',
      risk: 'medium'
    };
  }
  return {
    fieldMode: 'real_scene',
    fieldModeLabel: '现实场景',
    spacetimeSystem: 'modern_physical_world',
    surrealLevel: 1,
    eras: ['industrial', 'modern', 'contemporary'],
    timeTags: ['modern', 'contemporary', 'urban'],
    realityTags: ['realistic', 'physical', 'social'],
    styleTags: ['urban', 'noir', 'cinematic'],
    conflictTags: ['mythic_only', 'far_future_only', 'pure_abstract_space'],
    nativeTags: ['urban', 'realistic', 'social'],
    compatibleGenres: ['urban_life', 'real_professional', 'noir_crime', 'romance', 'fashion_idol'],
    compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern'],
    riskTags: ['modern_bias'],
    spaceScale: 'city',
    risk: 'clean'
  };
};

const getSurrealMeta = (group = ''): SpaceMetaSeed => {
  if (group.includes('科幻')) {
    return {
      fieldMode: 'surreal_scene',
      fieldModeLabel: '超现实场景',
      spacetimeSystem: 'future_speculative_world',
      surrealLevel: 3,
      eras: ['near_future', 'far_future', 'timeless'],
      timeTags: ['near_future', 'far_future', 'speculative'],
      realityTags: ['semi_surreal', 'speculative', 'technological', 'non_realist'],
      styleTags: ['sci_fi', 'future', 'technology'],
      conflictTags: ['strict_historical_realism', 'primitive_only', 'pure_domestic_realism'],
      nativeTags: ['surreal'],
      compatibleGenres: ['science_fiction'],
      compatibleCultures: [],
      riskTags: ['high_technology_pressure', 'era_collision_risk'],
      spaceScale: 'city',
      risk: 'medium'
    };
  }
  if (group.includes('奇幻')) {
    return {
      fieldMode: 'surreal_scene',
      fieldModeLabel: '超现实场景',
      spacetimeSystem: 'mythic_fantasy_world',
      surrealLevel: 4,
      eras: ['feudal', 'early_modern', 'timeless', 'mythic'],
      timeTags: ['mythic', 'fantasy', 'timeless'],
      realityTags: ['nonreal', 'mythic', 'magical', 'non_realist'],
      styleTags: ['fantasy', 'ritual', 'legend'],
      conflictTags: ['strict_contemporary_realism', 'hard_science_only', 'office_realism'],
      nativeTags: ['fantasy'],
      compatibleGenres: ['fantasy'],
      compatibleCultures: ['mythic_kingdom'],
      riskTags: ['mythic_takeover_risk'],
      spaceScale: 'landscape',
      risk: 'medium'
    };
  }
  if (group.includes('赛博')) {
    return {
      fieldMode: 'surreal_scene',
      fieldModeLabel: '超现实场景',
      spacetimeSystem: 'cybernetic_dystopian_city',
      surrealLevel: 3,
      eras: ['near_future', 'far_future'],
      timeTags: ['near_future', 'far_future', 'cyberpunk'],
      realityTags: ['semi_surreal', 'speculative', 'technological', 'urban'],
      styleTags: ['cyberpunk', 'dystopia', 'interface'],
      conflictTags: ['pre_modern_only', 'natural_wilderness_only', 'pure_handmade_pastoral'],
      nativeTags: ['cyberpunk', 'technology', 'interface'],
      compatibleGenres: ['cyberpunk', 'science_fiction', 'noir_crime', 'biopunk', 'posthuman'],
      compatibleCultures: ['cyber_megacity', 'global_corporate', 'posthuman_city', 'east_asian_modern'],
      riskTags: ['high_technology_pressure', 'neon_bias'],
      spaceScale: 'city',
      risk: 'medium'
    };
  }
  if (group.includes('梦境')) {
    return {
      fieldMode: 'surreal_scene',
      fieldModeLabel: '超现实场景',
      spacetimeSystem: 'dream_psychic_space',
      surrealLevel: 4,
      eras: ['timeless', 'mythic'],
      timeTags: ['timeless', 'dream', 'memory'],
      realityTags: ['nonreal', 'abstract', 'dream', 'psychological', 'non_realist'],
      styleTags: ['nightmare', 'uncanny', 'symbolic'],
      conflictTags: ['strict_documentary_realism', 'hard_material_proof_only'],
      nativeTags: ['dream', 'surreal', 'symbol'],
      compatibleGenres: ['surreal', 'horror', 'psychological', 'abstract', 'fantasy'],
      compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern', 'mythic_cult'],
      riskTags: ['logic_instability', 'subject_readability_risk'],
      spaceScale: 'abstract',
      risk: 'high'
    };
  }
  if (group.includes('宇宙')) {
    return {
      fieldMode: 'surreal_scene',
      fieldModeLabel: '超现实场景',
      spacetimeSystem: 'cosmic_alien_space',
      surrealLevel: 4,
      eras: ['far_future', 'timeless'],
      timeTags: ['far_future', 'cosmic', 'alien'],
      realityTags: ['nonreal', 'cosmic', 'alien', 'non_realist'],
      styleTags: ['space_opera', 'alien_ecology', 'cosmic'],
      conflictTags: ['street_realism_only', 'domestic_room_only', 'historical_period_lock'],
      nativeTags: ['space_opera', 'alien', 'cosmic'],
      compatibleGenres: ['space_opera', 'science_fiction', 'cosmic_horror', 'creature', 'posthuman'],
      compatibleCultures: ['space_colony', 'alien_ecology', 'posthuman_civilization'],
      riskTags: ['cosmic_scale_risk', 'era_collision_risk'],
      spaceScale: 'cosmic',
      risk: 'high'
    };
  }
  return {
    fieldMode: 'surreal_scene',
    fieldModeLabel: '超现实场景',
    spacetimeSystem: 'art_surreal_symbolic_space',
    surrealLevel: 4,
    eras: ['timeless', 'mythic', 'modern'],
    timeTags: ['timeless', 'surreal', 'symbolic'],
    realityTags: ['nonreal', 'abstract', 'surreal', 'non_realist', 'symbolic'],
    styleTags: ['surrealism', 'art_image', 'uncanny'],
    conflictTags: ['strict_documentary_realism', 'plain_product_space'],
    nativeTags: ['surreal', 'abstract', 'symbol'],
    compatibleGenres: ['surreal', 'abstract', 'psychological', 'fantasy', 'horror'],
    compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
    riskTags: ['logic_instability', 'low_location_specificity'],
    spaceScale: 'abstract',
    risk: 'high'
  };
};

const getAbstractMeta = (group = ''): SpaceMetaSeed => {
  if (group.includes('阈限')) {
    return {
      fieldMode: 'abstract_scene',
      fieldModeLabel: '抽象场景',
      spacetimeSystem: 'liminal_psychological_space',
      surrealLevel: 3,
      eras: ['modern', 'contemporary', 'timeless'],
      timeTags: ['liminal', 'memory', 'timeless'],
      realityTags: ['semi_surreal', 'liminal', 'psychological', 'semi_real'],
      styleTags: ['empty', 'uncanny', 'transitional'],
      conflictTags: ['crowded_action_scene', 'hard_location_realism'],
      nativeTags: ['liminal', 'psychological', 'surreal'],
      compatibleGenres: ['surreal', 'horror', 'psychological', 'urban_life'],
      compatibleCultures: ['liminal_modern', 'dream_psychic', 'symbolic_stage'],
      riskTags: ['low_location_specificity'],
      spaceScale: 'interior',
      risk: 'medium'
    };
  }
  if (group.includes('几何')) {
    return {
      fieldMode: 'abstract_scene',
      fieldModeLabel: '抽象场景',
      spacetimeSystem: 'geometric_digital_space',
      surrealLevel: 4,
      eras: ['near_future', 'far_future', 'timeless'],
      timeTags: ['digital', 'future', 'timeless'],
      realityTags: ['abstract', 'digital', 'non_realist'],
      styleTags: ['geometric', 'minimal', 'graphic'],
      conflictTags: ['strict_naturalism', 'period_location_lock'],
      nativeTags: ['abstract', 'symbol'],
      compatibleGenres: ['abstract', 'surreal'],
      compatibleCultures: ['symbolic_stage'],
      riskTags: ['low_location_specificity', 'digital_abstraction_risk'],
      spaceScale: 'abstract',
      risk: 'medium'
    };
  }
  if (group.includes('材质')) {
    return {
      fieldMode: 'abstract_scene',
      fieldModeLabel: '抽象场景',
      spacetimeSystem: 'material_world_space',
      surrealLevel: 4,
      eras: ['timeless', 'mythic', 'near_future'],
      timeTags: ['timeless', 'material_world'],
      realityTags: ['abstract', 'materialized', 'non_realist'],
      styleTags: ['material', 'texture_world', 'symbolic'],
      conflictTags: ['strict_documentary_location', 'plain_real_room_only'],
      nativeTags: ['abstract', 'surreal', 'material_fragment'],
      compatibleGenres: ['abstract', 'surreal'],
      compatibleCultures: ['symbolic_stage', 'dream_psychic'],
      riskTags: ['material_takeover_risk', 'low_location_specificity'],
      spaceScale: 'abstract',
      risk: 'high'
    };
  }
  return {
    fieldMode: 'abstract_scene',
    fieldModeLabel: '抽象场景',
    spacetimeSystem: 'stage_symbolic_space',
    surrealLevel: 4,
    eras: ['timeless', 'mythic', 'modern'],
    timeTags: ['stage', 'symbolic', 'timeless'],
    realityTags: ['abstract', 'symbolic', 'non_realist'],
    styleTags: ['stage', 'theatrical', 'graphic'],
    conflictTags: ['strict_location_realism', 'documentary_street_only'],
    nativeTags: ['abstract', 'symbol', 'stage'],
    compatibleGenres: ['abstract', 'surreal', 'fashion_idol', 'psychological'],
    compatibleCultures: ['symbolic_stage', 'dream_psychic', 'liminal_modern'],
    riskTags: ['low_location_specificity'],
    spaceScale: 'abstract',
    risk: 'medium'
  };
};

const getMeta = (mode: SpaceTypeMode, group?: string) => {
  if (mode === 'REAL') return getRealMeta(group);
  if (mode === 'SURREAL') return getSurrealMeta(group);
  return getAbstractMeta(group);
};

export const withSpaceTypeMeta = (item: LibraryItemDef, mode: SpaceTypeMode): LibraryItemDef => {
  const meta = getMeta(mode, item.group);
  const itemPatch = getItemPatch(item, mode);
  const name = cleanName(item.name);
  const eraMode = inferEraMode(meta, item, itemPatch);
  const hasManualCategoryFit = Boolean(item.categoryFit);
  const categoryFit = hasManualCategoryFit
    ? mergeCategoryFit(undefined, item.categoryFit)
    : mergeCategoryFit(
      getSpaceTypeCategoryFit(mode, item.group),
      mergeCategoryFit(itemPatch.categoryFit, item.categoryFit)
    );
  const manualUnlisted = item.categoryFit?.unlisted || spaceTypeCategoryUnlistedById[item.id] || 'none';
  return {
    ...item,
    def: item.def || `${meta.fieldModeLabel}预设：${name}。它提供地点、空间压力、时代气味和环境证据，作为画面的可见场域入口。`,
    defEn: item.defEn || `${meta.fieldModeLabel} preset: ${name}. It supplies location, spatial pressure, temporal flavor, and environmental evidence as the visible field entry of the image.`,
    ontologyLevel: item.ontologyLevel || meta.surrealLevel,
    eras: item.eras || meta.eras,
    eraMode,
    risk: item.risk || meta.risk,
    affects: item.affects || ['timeSpaceScene', 'compositionScene', 'lightingAtmosphere', 'otherDetails'],
    controls: item.controls || ['space type', 'visible location', 'spacetime evidence', 'environmental pressure', 'scene interface'],
    forbids: item.forbids || ['replacing subject identity', 'replacing visual medium', 'replacing shooting protocol', 'forcing all other presets to match'],
    absorptionRule: item.absorptionRule || defaultAbsorptionRule,
    absorptionRuleEn: item.absorptionRuleEn || defaultAbsorptionRuleEn,
    tags: [
      ...(item.tags || []),
      'space_type',
      meta.fieldMode,
      meta.spacetimeSystem,
      `surreal_l${meta.surrealLevel}`,
      `scale_${meta.spaceScale}`
    ],
    realityTags: item.realityTags?.length ? item.realityTags : meta.realityTags,
    styleTags: [...new Set([...(item.styleTags || []), ...meta.styleTags])],
    timeTags: [...new Set([...(item.timeTags || []), ...meta.timeTags])],
    publicFilterTags: uniq([...(item.publicFilterTags || []), ...(itemPatch.publicFilterTags || [])]),
    nativeTags: uniq([...(item.nativeTags || []), ...meta.nativeTags, ...(itemPatch.nativeTags || [])]),
    compatibleGenres: uniq([...(item.compatibleGenres || []), ...meta.compatibleGenres, ...(itemPatch.compatibleGenres || [])]),
    compatibleEras: uniq([...(item.compatibleEras || []), ...meta.eras, ...(itemPatch.compatibleEras || [])]),
    compatibleCultures: uniq([...(item.compatibleCultures || []), ...meta.compatibleCultures, ...(itemPatch.compatibleCultures || [])]),
    compatibleSpaces: uniq([...(item.compatibleSpaces || []), ...(item.spaceTags || []), ...(itemPatch.compatibleSpaces || [])]),
    categoryFit: { ...categoryFit, unlisted: manualUnlisted },
    riskTags: uniq([...(item.riskTags || []), ...meta.riskTags, ...(itemPatch.riskTags || [])]),
    fieldMode: meta.fieldMode,
    spacetimeSystem: meta.spacetimeSystem,
    surrealLevel: meta.surrealLevel,
    spaceScale: itemPatch.spaceScale || meta.spaceScale,
    randomAxis: 'space_type',
    randomDominance: 'major_preset',
    randomRole: mode === 'REAL' ? 'scene_anchor' : 'scene_axis',
    compatibleRandomModes: mode === 'REAL' ? ['conservative', 'balanced'] : ['balanced', 'fantasy', 'global_fusion'],
    conflictTags: uniq([...meta.conflictTags, ...(item.conflictTags || []), ...(itemPatch.conflictTags || [])]),
    selectionRule: '王不见王：空间类型属于强场景预设。随机时现实、超现实、抽象三类默认三选一；融合模式下最多额外选一个副轴，并降级为局部证据或场景压力。'
  } as LibraryItemDef;
};
