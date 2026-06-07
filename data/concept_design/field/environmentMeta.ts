import { LibraryItemDef } from '../../../types';

type EnvironmentMode = 'ATMOSPHERE' | 'PARTICLES';
type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type CategoryUnlistedFit = NonNullable<CategoryFit['unlisted']>;

type EnvironmentMetaSeed = {
  environmentMode: 'atmosphere' | 'particles';
  environmentKind: string;
  surrealLevel: 1 | 2 | 3 | 4 | 5;
  eras: readonly string[];
  eraMode?: 'specific' | 'universal';
  timeTags: readonly string[];
  realityTags: readonly string[];
  styleTags: readonly string[];
  conflictTags: readonly string[];
  spacetimeAnchor: string;
  realityAnchor: string;
  risk: 'clean' | 'medium' | 'high';
};

type EnvironmentItemPatch = Partial<Pick<
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
>>;

const cleanName = (name: string) => name.replace(/\s*\([^)]*\)\s*/g, '').trim();
const uniq = <T,>(values: readonly T[]) => [...new Set(values)];
const uniqStrings = (values: readonly string[]) => uniq(values.map(value => value.trim()).filter(Boolean));

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

const inferEraMode = (meta: EnvironmentMetaSeed, item: LibraryItemDef, patch: EnvironmentItemPatch): 'specific' | 'universal' => {
  if (item.eraMode || meta.eraMode) return item.eraMode || meta.eraMode || 'specific';
  const eras = uniqStrings([...(item.eras || []), ...meta.eras, ...(patch.compatibleEras || [])]);
  const broadPhysical = eras.length >= 8 && meta.surrealLevel <= 1 && meta.risk === 'clean';
  return broadPhysical ? 'universal' : 'specific';
};

const baseEras = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const physicalEras = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless'];
const futureEras = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const mythicEras = ['feudal', 'early_modern', 'modern', 'timeless', 'mythic'];

const mapIds = <T,>(entries: Array<[readonly string[], T]>): Record<string, T> => Object.fromEntries(
  entries.flatMap(([ids, value]) => ids.map(id => [id, value]))
);

const environmentCategoryUnlistedById: Record<string, CategoryUnlistedFit> = mapIds([
  [
    [
      'atm_clear_sky', 'atm_sunny', 'atm_golden_hour', 'atm_blue_hour', 'atm_high_noon', 'atm_scorching', 'atm_morning_glow', 'atm_epic_sunset',
      'atm_dappled', 'atm_lens_flare', 'atm_afternoon_haze', 'atm_tropical_sun', 'atm_winter_sun', 'atm_desert_glare', 'atm_alpine_clear',
      'atm_partly_cloudy', 'atm_overcast', 'atm_gloom', 'atm_cumulus', 'atm_broken_clouds', 'atm_storm_clouds', 'atm_mammatus', 'atm_stratus',
      'atm_silver_lining', 'atm_low_ceiling', 'atm_heavy_sky', 'atm_grey_day', 'atm_rolling_clouds', 'atm_sunset_clouds', 'atm_passing_storm',
      'atm_drizzle', 'atm_light_rain', 'atm_shower', 'atm_heavy_rain', 'atm_torrential', 'atm_thunderstorm', 'atm_monsoon', 'atm_freezing_rain',
      'atm_post_rain', 'atm_humid', 'atm_damp', 'atm_steam_rising', 'atm_mist_sea', 'atm_condensation',
      'atm_light_snow', 'atm_heavy_snow', 'atm_blizzard', 'atm_sleet', 'atm_hail', 'atm_snow_storm', 'atm_flurries', 'atm_ice_storm', 'atm_thaw',
      'atm_diamond_dust', 'atm_frosty', 'atm_arctic', 'atm_fog_ice', 'atm_crisp', 'atm_permafrost',
      'atm_mist_light', 'atm_fog_dense', 'atm_haze_blue', 'atm_fog_ground', 'atm_god_rays', 'atm_shafts_window', 'atm_volumetric', 'atm_spotlight',
      'atm_tyndall', 'atm_soft_bloom', 'atm_dream_diff', 'atm_ethereal', 'atm_silhouette', 'atm_projector', 'atm_lighthouse', 'atm_aerial_persp', 'atm_halo',
      'atm_windy', 'atm_gale', 'atm_sandstorm', 'atm_dust_devil', 'atm_tornado', 'atm_hurricane', 'atm_eye_storm', 'atm_aurora', 'atm_eclipse',
      'atm_blood_moon', 'atm_meteor', 'atm_ash_fall',
      'par_dust_motes', 'par_pollen', 'par_sand_grains', 'par_cotton', 'par_dandelion', 'par_snow_dust', 'par_bamboo_leaf', 'par_fog_wisp',
      'par_sun_specks', 'par_dry_leaves', 'par_embers', 'par_ash', 'par_smoke_swirl', 'par_cinders', 'par_candle_smoke', 'par_charcoal_dust',
      'par_rain_suspension', 'par_mist_spray', 'par_sea_foam', 'par_bubbles', 'par_dew_drops', 'par_underwater_bubbles', 'par_ink_cloud',
      'par_condensation', 'par_prism_light', 'par_feathers', 'par_petals_rose', 'par_seeds_floating', 'par_fireflies', 'par_confetti_gold',
      'par_sparkle_bokeh', 'par_paper_scraps'
    ],
    'usable'
  ],
  [
    [
      'atm_smog_urban', 'atm_smoke_thick', 'atm_laser_grid', 'atm_nebula_sky', 'atm_acid_rain', 'atm_toxic_gas', 'atm_spore_mist',
      'atm_black_hole', 'atm_vacuum', 'atm_plasma', 'atm_cyber_grid', 'atm_spirit', 'atm_radioactive', 'atm_liquid_air',
      'par_sparks', 'par_fire_petals', 'par_explosion_debris', 'par_nebula_gas', 'par_liquid_gold', 'par_biolume_spores', 'par_magic_glitter',
      'par_spirit_orbs', 'par_galaxy_dust', 'par_energy_motes', 'par_dream_haze', 'par_glitch_pixels', 'par_binary_rain', 'par_glass_shards',
      'par_holo_bits', 'par_metal_shavings', 'par_neon_dust', 'par_geometric_shapes'
    ],
    'none'
  ]
]);

const fit = (
  unlisted: CategoryUnlistedFit,
  patch: Omit<CategoryFit, 'unlisted'>
): CategoryFit => ({
  unlisted,
  ...patch
});

const environmentCategoryFitById: Record<string, CategoryFit> = mapIds([
  [
    [
      'atm_clear_sky', 'atm_sunny', 'atm_high_noon', 'atm_scorching', 'atm_tropical_sun', 'atm_winter_sun', 'atm_desert_glare', 'atm_alpine_clear',
      'atm_partly_cloudy', 'atm_overcast', 'atm_cumulus', 'atm_broken_clouds', 'atm_stratus',
      'atm_drizzle', 'atm_light_rain', 'atm_shower', 'atm_post_rain', 'atm_humid', 'atm_condensation',
      'atm_light_snow', 'atm_heavy_snow', 'atm_flurries', 'atm_thaw', 'atm_frosty', 'atm_crisp',
      'atm_mist_light', 'atm_fog_dense', 'atm_haze_blue', 'atm_fog_ground', 'atm_tyndall', 'atm_aerial_persp',
      'par_dust_motes', 'par_cotton', 'par_fog_wisp', 'par_sun_specks', 'par_dry_leaves', 'par_rain_suspension',
      'par_mist_spray', 'par_bubbles', 'par_dew_drops', 'par_condensation', 'par_prism_light', 'par_sparkle_bokeh'
    ],
    fit('usable', {
      strong: [],
      usable: ['romance', 'urban_life', 'real_professional', 'adventure', 'ecological'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'dark_fantasy'],
      weak: ['science_fiction', 'cyberpunk', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['atm_golden_hour', 'atm_blue_hour', 'atm_morning_glow', 'atm_epic_sunset', 'atm_dappled', 'atm_afternoon_haze', 'atm_silver_lining', 'atm_sunset_clouds'],
    fit('usable', {
      strong: ['romance'],
      usable: ['fashion_idol', 'urban_life', 'ecological', 'adventure'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'mythic_epic'],
      weak: ['horror', 'wasteland', 'cyberpunk'],
      exclude: []
    })
  ],
  [
    ['atm_lens_flare', 'atm_god_rays', 'atm_shafts_window', 'atm_volumetric', 'atm_spotlight', 'atm_soft_bloom', 'atm_dream_diff', 'atm_ethereal', 'atm_silhouette', 'atm_projector', 'atm_lighthouse', 'atm_halo'],
    fit('usable', {
      strong: [],
      usable: ['fashion_idol', 'romance', 'noir_crime', 'religious_ritual', 'horror'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'dark_fantasy', 'surreal'],
      weak: ['science_fiction', 'cyberpunk'],
      exclude: []
    })
  ],
  [
    ['atm_gloom', 'atm_storm_clouds', 'atm_mammatus', 'atm_low_ceiling', 'atm_heavy_sky', 'atm_grey_day', 'atm_rolling_clouds', 'atm_passing_storm'],
    fit('usable', {
      strong: [],
      usable: ['noir_crime', 'horror', 'dark_fantasy', 'wasteland', 'war_military'],
      fusion: ['romance', 'wuxia', 'xianxia', 'surreal'],
      weak: ['fashion_idol', 'urban_life'],
      exclude: []
    })
  ],
  [
    ['atm_heavy_rain', 'atm_torrential', 'atm_thunderstorm', 'atm_monsoon', 'atm_freezing_rain', 'atm_damp', 'atm_steam_rising', 'atm_mist_sea'],
    fit('usable', {
      strong: [],
      usable: ['noir_crime', 'horror', 'war_military', 'wasteland', 'adventure', 'romance'],
      fusion: ['wuxia', 'xianxia', 'dark_fantasy', 'science_fiction'],
      weak: ['fashion_idol'],
      exclude: []
    })
  ],
  [
    ['atm_blizzard', 'atm_sleet', 'atm_hail', 'atm_snow_storm', 'atm_ice_storm', 'atm_diamond_dust', 'atm_arctic', 'atm_fog_ice', 'atm_permafrost'],
    fit('usable', {
      strong: [],
      usable: ['adventure', 'wasteland', 'war_military', 'horror', 'ecological'],
      fusion: ['wuxia', 'xianxia', 'dark_fantasy', 'fantasy'],
      weak: ['romance', 'fashion_idol'],
      exclude: []
    })
  ],
  [
    ['atm_windy', 'atm_gale', 'atm_sandstorm', 'atm_dust_devil', 'atm_tornado', 'atm_hurricane', 'atm_eye_storm', 'atm_ash_fall'],
    fit('usable', {
      strong: [],
      usable: ['adventure', 'wasteland', 'war_military', 'ecological'],
      fusion: ['wuxia', 'xianxia', 'dark_fantasy', 'science_fiction'],
      weak: ['romance', 'urban_life', 'fashion_idol'],
      exclude: []
    })
  ],
  [
    ['atm_aurora', 'atm_eclipse', 'atm_blood_moon', 'atm_meteor'],
    fit('usable', {
      strong: [],
      usable: ['mythic_epic', 'fantasy', 'xianxia', 'dark_fantasy', 'religious_ritual'],
      fusion: ['science_fiction', 'horror', 'surreal'],
      weak: ['real_professional', 'urban_life'],
      exclude: []
    })
  ],
  [
    ['atm_smog_urban', 'atm_smoke_thick', 'atm_acid_rain', 'atm_toxic_gas', 'atm_radioactive'],
    fit('none', {
      strong: ['wasteland'],
      usable: ['science_fiction', 'cyberpunk', 'biopunk', 'horror', 'body_horror', 'war_military'],
      fusion: ['dark_fantasy', 'noir_crime'],
      weak: ['romance', 'wuxia', 'xianxia'],
      exclude: ['ecological']
    })
  ],
  [
    ['atm_nebula_sky', 'atm_black_hole', 'atm_vacuum', 'atm_plasma'],
    fit('none', {
      strong: ['science_fiction'],
      usable: ['posthuman', 'surreal', 'abstract'],
      fusion: ['mythic_epic', 'religious_ritual', 'dark_fantasy'],
      weak: ['wuxia', 'xianxia', 'historical'],
      exclude: ['urban_life', 'real_professional']
    })
  ],
  [
    ['atm_cyber_grid', 'atm_laser_grid'],
    fit('none', {
      strong: ['cyberpunk', 'science_fiction'],
      usable: ['posthuman', 'surreal', 'abstract', 'noir_crime'],
      fusion: ['wuxia', 'xianxia', 'dark_fantasy'],
      weak: ['romance', 'fashion_idol'],
      exclude: ['historical', 'court']
    })
  ],
  [
    ['atm_spore_mist'],
    fit('none', {
      strong: ['biopunk', 'body_horror'],
      usable: ['ecological', 'horror', 'science_fiction', 'fantasy'],
      fusion: ['dark_fantasy', 'xianxia'],
      weak: ['romance', 'urban_life'],
      exclude: []
    })
  ],
  [
    ['atm_spirit'],
    fit('none', {
      strong: ['xianxia', 'fantasy', 'dark_fantasy', 'religious_ritual'],
      usable: ['horror', 'mythic_epic', 'surreal'],
      fusion: ['wuxia', 'romance'],
      weak: ['science_fiction', 'cyberpunk'],
      exclude: ['real_professional']
    })
  ],
  [
    ['atm_liquid_air'],
    fit('none', {
      strong: ['surreal', 'abstract'],
      usable: ['fantasy', 'science_fiction'],
      fusion: ['xianxia', 'dark_fantasy', 'posthuman'],
      weak: ['romance', 'horror'],
      exclude: ['real_professional', 'urban_life']
    })
  ],
  [
    ['par_pollen', 'par_dandelion', 'par_petals_rose', 'par_seeds_floating', 'par_fireflies'],
    fit('usable', {
      strong: ['romance', 'ecological'],
      usable: ['fantasy', 'xianxia', 'wuxia', 'adventure'],
      fusion: ['dark_fantasy', 'religious_ritual'],
      weak: ['science_fiction', 'cyberpunk', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['par_sand_grains', 'par_snow_dust', 'par_embers', 'par_ash', 'par_cinders', 'par_charcoal_dust'],
    fit('usable', {
      strong: [],
      usable: ['adventure', 'wasteland', 'war_military', 'historical', 'dark_fantasy'],
      fusion: ['wuxia', 'xianxia', 'horror'],
      weak: ['romance', 'fashion_idol'],
      exclude: []
    })
  ],
  [
    ['par_sparks'],
    fit('none', {
      strong: [],
      usable: ['real_professional', 'war_military', 'wasteland', 'science_fiction'],
      fusion: ['cyberpunk', 'noir_crime', 'dark_fantasy'],
      weak: ['wuxia', 'xianxia', 'romance'],
      exclude: ['ecological']
    })
  ],
  [
    ['par_bamboo_leaf', 'par_smoke_swirl', 'par_candle_smoke', 'par_ink_cloud'],
    fit('usable', {
      strong: [],
      usable: ['wuxia', 'xianxia', 'historical', 'religious_ritual', 'dark_fantasy'],
      fusion: ['romance', 'fantasy', 'horror'],
      weak: ['science_fiction', 'cyberpunk'],
      exclude: []
    })
  ],
  [
    ['par_sea_foam', 'par_underwater_bubbles'],
    fit('usable', {
      strong: [],
      usable: ['ecological', 'adventure', 'romance', 'fantasy'],
      fusion: ['science_fiction', 'xianxia', 'surreal'],
      weak: ['wasteland', 'horror'],
      exclude: []
    })
  ],
  [
    ['par_liquid_gold'],
    fit('none', {
      strong: [],
      usable: ['court', 'fantasy', 'surreal'],
      fusion: ['xianxia', 'science_fiction', 'fashion_idol'],
      weak: ['romance', 'dark_fantasy'],
      exclude: ['wasteland', 'real_professional']
    })
  ],
  [
    ['par_feathers'],
    fit('usable', {
      strong: [],
      usable: ['romance', 'religious_ritual', 'fantasy', 'fashion_idol'],
      fusion: ['xianxia', 'dark_fantasy', 'horror'],
      weak: ['science_fiction', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['par_biolume_spores'],
    fit('none', {
      strong: ['biopunk', 'ecological'],
      usable: ['fantasy', 'science_fiction', 'body_horror', 'horror'],
      fusion: ['xianxia', 'dark_fantasy'],
      weak: ['romance'],
      exclude: []
    })
  ],
  [
    ['par_magic_glitter', 'par_spirit_orbs', 'par_energy_motes'],
    fit('none', {
      strong: ['xianxia', 'fantasy', 'religious_ritual'],
      usable: ['dark_fantasy', 'surreal', 'mythic_epic'],
      fusion: ['romance', 'horror', 'science_fiction'],
      weak: ['wuxia', 'fashion_idol'],
      exclude: ['real_professional']
    })
  ],
  [
    ['par_fire_petals'],
    fit('none', {
      strong: ['fantasy', 'xianxia', 'dark_fantasy'],
      usable: ['religious_ritual', 'horror', 'wuxia'],
      fusion: ['romance', 'mythic_epic'],
      weak: ['science_fiction', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['par_galaxy_dust', 'par_nebula_gas'],
    fit('none', {
      strong: ['science_fiction', 'surreal'],
      usable: ['posthuman', 'abstract', 'mythic_epic'],
      fusion: ['fantasy', 'religious_ritual', 'xianxia'],
      weak: ['romance', 'wuxia'],
      exclude: ['real_professional']
    })
  ],
  [
    ['par_dream_haze'],
    fit('none', {
      strong: ['surreal'],
      usable: ['romance', 'fantasy', 'horror', 'abstract'],
      fusion: ['xianxia', 'dark_fantasy'],
      weak: ['science_fiction', 'urban_life'],
      exclude: []
    })
  ],
  [
    ['par_glitch_pixels', 'par_binary_rain', 'par_holo_bits', 'par_neon_dust', 'par_geometric_shapes'],
    fit('none', {
      strong: ['cyberpunk', 'science_fiction'],
      usable: ['posthuman', 'surreal', 'abstract'],
      fusion: ['noir_crime', 'fashion_idol', 'xianxia'],
      weak: ['romance', 'wuxia'],
      exclude: ['historical', 'court']
    })
  ],
  [
    ['par_glass_shards', 'par_metal_shavings', 'par_explosion_debris'],
    fit('none', {
      strong: [],
      usable: ['war_military', 'noir_crime', 'wasteland', 'science_fiction', 'real_professional'],
      fusion: ['cyberpunk', 'horror', 'dark_fantasy'],
      weak: ['romance', 'wuxia'],
      exclude: []
    })
  ],
  [
    ['par_confetti_gold', 'par_paper_scraps'],
    fit('usable', {
      strong: [],
      usable: ['romance', 'fashion_idol', 'urban_life', 'historical'],
      fusion: ['noir_crime', 'surreal', 'court'],
      weak: ['wasteland', 'horror'],
      exclude: []
    })
  ]
]);

const getAtmosphereMeta = (group = ''): EnvironmentMetaSeed => {
  if (group.includes('阳光')) {
    return {
      environmentMode: 'atmosphere',
      environmentKind: 'sunny_clear',
      surrealLevel: 1,
      eras: baseEras,
      timeTags: ['daylight', 'clear_weather', 'dry_air'],
      realityTags: ['realistic', 'physical', 'weather', 'natural_light'],
      styleTags: ['clear', 'open', 'readable'],
      conflictTags: ['night_only', 'sealed_dark_interior', 'deep_underwater', 'vacuum_space'],
      spacetimeAnchor: 'physical_daylight_weather',
      realityAnchor: 'physical_weather',
      risk: 'clean'
    };
  }
  if (group.includes('多云')) {
    return {
      environmentMode: 'atmosphere',
      environmentKind: 'cloudy_overcast',
      surrealLevel: 1,
      eras: baseEras,
      timeTags: ['overcast', 'low_contrast_weather', 'day_or_twilight'],
      realityTags: ['realistic', 'physical', 'weather', 'cloud_cover'],
      styleTags: ['muted', 'heavy', 'soft_shadow'],
      conflictTags: ['hard_sun_only', 'clear_sky_only', 'vacuum_space'],
      spacetimeAnchor: 'physical_cloud_weather',
      realityAnchor: 'physical_weather',
      risk: 'clean'
    };
  }
  if (group.includes('降雨')) {
    return {
      environmentMode: 'atmosphere',
      environmentKind: 'rain_wet',
      surrealLevel: 1,
      eras: baseEras,
      timeTags: ['rain', 'wet_surface', 'humid_air'],
      realityTags: ['realistic', 'physical', 'weather', 'water'],
      styleTags: ['reflective', 'moist', 'dramatic'],
      conflictTags: ['desert_dry_only', 'indoor_cleanroom_only', 'vacuum_space', 'fire_dominant'],
      spacetimeAnchor: 'physical_rain_weather',
      realityAnchor: 'physical_weather',
      risk: 'clean'
    };
  }
  if (group.includes('冰雪')) {
    return {
      environmentMode: 'atmosphere',
      environmentKind: 'snow_cold',
      surrealLevel: 1,
      eras: baseEras,
      timeTags: ['winter', 'cold', 'snow_or_ice'],
      realityTags: ['realistic', 'physical', 'weather', 'cold_air'],
      styleTags: ['pale', 'quiet', 'harsh'],
      conflictTags: ['tropical_heat_only', 'desert_heat_only', 'warm_rainforest_only'],
      spacetimeAnchor: 'physical_cold_weather',
      realityAnchor: 'physical_weather',
      risk: 'clean'
    };
  }
  if (group.includes('雾气')) {
    return {
      environmentMode: 'atmosphere',
      environmentKind: 'fog_light_path',
      surrealLevel: 2,
      eras: baseEras,
      timeTags: ['fog', 'haze', 'volumetric_air'],
      realityTags: ['realistic', 'stylized', 'physical', 'air_medium', 'light_path'],
      styleTags: ['mysterious', 'soft_visibility', 'cinematic_depth'],
      conflictTags: ['crystal_clear_visibility', 'flat_graphic_space', 'vacuum_space'],
      spacetimeAnchor: 'physical_air_medium',
      realityAnchor: 'physical_atmospheric_optics',
      risk: 'clean'
    };
  }
  return {
    environmentMode: 'atmosphere',
    environmentKind: 'exotic_storm',
    surrealLevel: 3,
    eras: futureEras,
    timeTags: ['storm', 'cosmic_or_abnormal_air', 'charged_weather'],
    realityTags: ['stylized', 'semi_surreal', 'physical_or_speculative', 'weather', 'non_ordinary_air'],
    styleTags: ['violent', 'charged', 'spectacle'],
    conflictTags: ['strict_documentary_weather', 'plain_clear_weather', 'quiet_domestic_room'],
    spacetimeAnchor: 'abnormal_weather_or_cosmic_field',
    realityAnchor: 'speculative_atmosphere',
    risk: 'medium'
  };
};

const getParticleMeta = (group = ''): EnvironmentMetaSeed => {
  if (group.includes('自然')) {
    return {
      environmentMode: 'particles',
      environmentKind: 'natural_dust',
      surrealLevel: 1,
      eras: physicalEras,
      timeTags: ['natural_air', 'dust_or_pollen', 'soft_motion'],
      realityTags: ['realistic', 'physical', 'natural_particle', 'airborne'],
      styleTags: ['organic', 'subtle', 'light_visible'],
      conflictTags: ['sealed_cleanroom', 'vacuum_space', 'underwater_only'],
      spacetimeAnchor: 'natural_physical_air',
      realityAnchor: 'physical_particle',
      risk: 'clean'
    };
  }
  if (group.includes('燃烧')) {
    return {
      environmentMode: 'particles',
      environmentKind: 'combustion_embers',
      surrealLevel: 1,
      eras: baseEras,
      timeTags: ['fire', 'smoke', 'ash'],
      realityTags: ['realistic', 'physical', 'combustion', 'debris'],
      styleTags: ['danger', 'warm_sparks', 'destruction_trace'],
      conflictTags: ['underwater_only', 'sterile_cleanroom', 'heavy_rain_dominant'],
      spacetimeAnchor: 'physical_combustion_scene',
      realityAnchor: 'combustion_debris',
      risk: 'medium'
    };
  }
  if (group.includes('液体')) {
    return {
      environmentMode: 'particles',
      environmentKind: 'liquid_prismatic',
      surrealLevel: 2,
      eras: baseEras,
      timeTags: ['water', 'mist', 'suspended_droplets'],
      realityTags: ['realistic', 'stylized', 'physical', 'liquid', 'refraction'],
      styleTags: ['prismatic', 'reflective', 'soft_motion'],
      conflictTags: ['dry_desert_only', 'fire_dominant', 'vacuum_space'],
      spacetimeAnchor: 'physical_water_air',
      realityAnchor: 'liquid_particle_or_refraction',
      risk: 'clean'
    };
  }
  if (group.includes('生物')) {
    return {
      environmentMode: 'particles',
      environmentKind: 'bio_ethereal',
      surrealLevel: 3,
      eras: mythicEras,
      timeTags: ['organic', 'mythic_or_dream', 'night_or_twilight'],
      realityTags: ['stylized', 'semi_surreal', 'biological_or_mythic', 'airborne'],
      styleTags: ['ethereal', 'fantasy', 'soft_glow'],
      conflictTags: ['strict_documentary_realism', 'sterile_office_space', 'hard_science_only'],
      spacetimeAnchor: 'biological_or_mythic_air',
      realityAnchor: 'biological_or_mythic_particle',
      risk: 'medium'
    };
  }
  return {
    environmentMode: 'particles',
    environmentKind: 'tech_abstract_fragments',
    surrealLevel: 3,
    eras: futureEras,
    timeTags: ['digital', 'future_or_abstract', 'fragmented'],
    realityTags: ['semi_surreal', 'abstract', 'technological_or_abstract', 'airborne', 'non_ordinary'],
    styleTags: ['glitch', 'holographic', 'graphic'],
    conflictTags: ['strict_historical_realism', 'primitive_only', 'natural_wilderness_only'],
    spacetimeAnchor: 'tech_abstract_space',
    realityAnchor: 'technological_or_symbolic_fragment',
    risk: 'medium'
  };
};

const withAnchorOverride = (
  meta: EnvironmentMetaSeed,
  patch: Partial<Pick<EnvironmentMetaSeed, 'spacetimeAnchor' | 'realityAnchor' | 'surrealLevel' | 'eras' | 'timeTags' | 'realityTags' | 'conflictTags' | 'risk'>>
): EnvironmentMetaSeed => ({
  ...meta,
  ...patch,
  timeTags: patch.timeTags || meta.timeTags,
  realityTags: patch.realityTags || meta.realityTags,
  conflictTags: patch.conflictTags || meta.conflictTags
});

const refineAtmosphereMeta = (item: LibraryItemDef, meta: EnvironmentMetaSeed): EnvironmentMetaSeed => {
  if (['atm_windy', 'atm_gale', 'atm_sandstorm', 'atm_dust_devil', 'atm_tornado', 'atm_hurricane', 'atm_eye_storm'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'physical_extreme_weather',
      realityAnchor: 'physical_weather',
      surrealLevel: 1,
      eras: baseEras,
      realityTags: ['realistic', 'physical', 'weather', 'extreme_weather'],
      conflictTags: ['sealed_interior_only', 'vacuum_space', 'calm_weather_only'],
      risk: 'medium'
    });
  }
  if (['atm_aurora', 'atm_eclipse', 'atm_blood_moon', 'atm_meteor'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'celestial_event',
      realityAnchor: 'astronomical_light_condition',
      surrealLevel: 2,
      eras: baseEras,
      realityTags: ['realistic', 'stylized', 'physical', 'astronomical', 'sky_event'],
      conflictTags: ['sealed_interior_only', 'underground_only', 'no_sky_visibility'],
      risk: 'clean'
    });
  }
  if (['atm_nebula_sky', 'atm_black_hole', 'atm_vacuum', 'atm_plasma'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'cosmic_space_field',
      realityAnchor: item.id === 'atm_vacuum' ? 'vacuum_space' : 'cosmic_speculative_environment',
      surrealLevel: 4,
      eras: ['near_future', 'far_future', 'timeless'],
      realityTags: ['nonreal', 'cosmic', 'speculative', 'non_ordinary_space'],
      conflictTags: ['strict_historical_realism', 'ordinary_weather_only', 'domestic_room_only'],
      risk: 'high'
    });
  }
  if (['atm_acid_rain', 'atm_toxic_gas', 'atm_radioactive'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'industrial_or_postapocalyptic_hazard',
      realityAnchor: 'hazardous_air',
      surrealLevel: 2,
      eras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
      realityTags: ['stylized', 'semi_surreal', 'physical_or_speculative', 'pollution', 'hazardous_air'],
      conflictTags: ['pristine_nature_only', 'cleanroom_only', 'sacred_pure_air_only'],
      risk: 'medium'
    });
  }
  if (item.id === 'atm_spore_mist') {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'biological_ecology',
      realityAnchor: 'biological_air',
      surrealLevel: 3,
      eras: ['primitive', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
      realityTags: ['stylized', 'semi_surreal', 'biological', 'ecological', 'airborne_spores'],
      conflictTags: ['sterile_cleanroom', 'hard_metal_space_only'],
      risk: 'medium'
    });
  }
  if (item.id === 'atm_cyber_grid') {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'virtual_digital_space',
      realityAnchor: 'digital_overlay',
      surrealLevel: 4,
      eras: ['contemporary', 'near_future', 'far_future', 'timeless'],
      realityTags: ['semi_surreal', 'technological', 'virtual', 'interface_overlay'],
      conflictTags: ['strict_historical_realism', 'primitive_only', 'natural_wilderness_only'],
      risk: 'high'
    });
  }
  if (item.id === 'atm_spirit') {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'mythic_spirit_realm',
      realityAnchor: 'mythic_atmosphere',
      surrealLevel: 4,
      eras: ['feudal', 'early_modern', 'modern', 'timeless', 'mythic'],
      realityTags: ['nonreal', 'mythic', 'spiritual', 'non_realist'],
      conflictTags: ['strict_documentary_realism', 'hard_science_only'],
      risk: 'high'
    });
  }
  if (item.id === 'atm_liquid_air') {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'surreal_material_space',
      realityAnchor: 'surreal_material_environment',
      surrealLevel: 5,
      eras: ['timeless', 'mythic', 'far_future'],
      realityTags: ['abstract', 'surreal', 'material_paradox', 'non_realist'],
      conflictTags: ['strict_physical_realism', 'documentary_weather_only'],
      risk: 'high'
    });
  }
  return meta;
};

const refineParticleMeta = (item: LibraryItemDef, meta: EnvironmentMetaSeed): EnvironmentMetaSeed => {
  if (['par_nebula_gas', 'par_galaxy_dust'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'cosmic_space_field',
      realityAnchor: 'cosmic_particle',
      surrealLevel: 4,
      eras: ['far_future', 'timeless'],
      realityTags: ['nonreal', 'cosmic', 'speculative', 'space_particle'],
      conflictTags: ['strict_historical_realism', 'ordinary_room_only', 'natural_weather_only'],
      risk: 'high'
    });
  }
  if (['par_fire_petals', 'par_spirit_orbs', 'par_magic_glitter', 'par_energy_motes'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'mythic_or_energy_field',
      realityAnchor: 'surreal_manifestation',
      surrealLevel: 4,
      eras: ['feudal', 'early_modern', 'modern', 'near_future', 'timeless', 'mythic'],
      realityTags: ['nonreal', 'mythic', 'magical', 'mythic_or_energy', 'non_ordinary', 'visible_manifestation'],
      conflictTags: ['strict_documentary_realism', 'hard_historical_lock'],
      risk: 'high'
    });
  }
  if (['par_glitch_pixels', 'par_binary_rain', 'par_holo_bits', 'par_neon_dust'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'virtual_digital_space',
      realityAnchor: 'digital_or_holographic_fragment',
      surrealLevel: 4,
      eras: ['contemporary', 'near_future', 'far_future', 'timeless'],
      realityTags: ['semi_surreal', 'technological', 'virtual', 'holographic_or_glitch'],
      conflictTags: ['strict_historical_realism', 'primitive_only', 'natural_wilderness_only'],
      risk: 'high'
    });
  }
  if (['par_geometric_shapes', 'par_sparkle_bokeh'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'abstract_visual_space',
      realityAnchor: 'optical_or_symbolic_particle',
      surrealLevel: 3,
      eras: ['modern', 'contemporary', 'near_future', 'timeless'],
      realityTags: ['abstract', 'surreal', 'optical_or_symbolic', 'graphic_space'],
      conflictTags: ['strict_documentary_realism', 'hard_location_realism'],
      risk: 'medium'
    });
  }
  if (['par_glass_shards', 'par_paper_scraps', 'par_metal_shavings', 'par_confetti_gold'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'physical_material_scene',
      realityAnchor: 'physical_fragment_debris',
      surrealLevel: 1,
      eras: baseEras,
      realityTags: ['realistic', 'physical', 'material_fragment', 'airborne_debris'],
      conflictTags: ['sealed_empty_space', 'vacuum_space'],
      risk: 'clean'
    });
  }
  if (['par_underwater_bubbles', 'par_ink_cloud'].includes(item.id)) {
    return withAnchorOverride(meta, {
      spacetimeAnchor: 'underwater_or_liquid_medium',
      realityAnchor: 'liquid_medium_particle',
      surrealLevel: 1,
      eras: baseEras,
      realityTags: ['realistic', 'physical', 'liquid_medium', 'waterborne_particle'],
      conflictTags: ['dry_air_only', 'desert_dry_only', 'fire_dominant'],
      risk: 'clean'
    });
  }
  return meta;
};

const getMeta = (mode: EnvironmentMode, item: LibraryItemDef) => {
  const meta = mode === 'ATMOSPHERE' ? getAtmosphereMeta(item.group) : getParticleMeta(item.group);
  return mode === 'ATMOSPHERE' ? refineAtmosphereMeta(item, meta) : refineParticleMeta(item, meta);
};

const groupPublicTag = (group = '') => {
  const cleaned = group.replace(/^[A-Z]\.\s*/, '').trim();
  if (cleaned.includes('阳光')) return '晴朗天气';
  if (cleaned.includes('多云')) return '阴云天气';
  if (cleaned.includes('降雨')) return '降雨湿润';
  if (cleaned.includes('冰雪')) return '冰雪寒冷';
  if (cleaned.includes('雾气')) return '雾气光路';
  if (cleaned.includes('异质')) return '异质风暴';
  if (cleaned.includes('自然微尘')) return '自然微尘';
  if (cleaned.includes('燃烧')) return '燃烧余烬';
  if (cleaned.includes('液体')) return '液体光泽';
  if (cleaned.includes('生物')) return '生物幻想';
  if (cleaned.includes('科技')) return '科技碎片';
  return cleaned || '环境状态';
};

const getEnvironmentPublicFilterTags = (item: LibraryItemDef, meta: EnvironmentMetaSeed) => {
  const tags = new Set<string>([
    groupPublicTag(item.group),
    meta.environmentMode === 'atmosphere' ? '天气大气' : '粒子悬浮'
  ]);
  if (meta.surrealLevel >= 4) tags.add('高超现实');
  else if (meta.surrealLevel >= 2) tags.add('轻度异常');
  else tags.add('现实物理');
  if (meta.risk === 'high') tags.add('高风险');
  return Array.from(tags).filter(Boolean);
};

const getEnvironmentNativeTags = (meta: EnvironmentMetaSeed) => [
  meta.environmentMode,
  meta.environmentKind,
  ...meta.realityTags
].filter(tag => ![
  'physical_or_speculative',
  'technological_or_abstract',
  'biological_or_mythic',
  'non_ordinary',
  'non_ordinary_space'
].includes(tag));

const getEnvironmentCompatibleGenres = (meta: EnvironmentMetaSeed) => {
  void meta;
  return [];
};

const getEnvironmentCategoryFit = (
  item: LibraryItemDef,
  meta: EnvironmentMetaSeed,
  patch: EnvironmentItemPatch
): CategoryFit => {
  void meta;
  void patch;
  const manualCategoryFit = environmentCategoryFitById[item.id];
  return mergeCategoryFit(manualCategoryFit, item.categoryFit);
};

const getEnvironmentCompatibleCultures = (meta: EnvironmentMetaSeed) => {
  void meta;
  return [];
};

const getEnvironmentRiskTags = (meta: EnvironmentMetaSeed) => {
  const riskTags = new Set<string>();
  if (meta.surrealLevel >= 4) riskTags.add('high_surreal_pressure');
  if (meta.risk === 'high') riskTags.add('physical_conflict_risk');
  if (meta.conflictTags.some(tag => tag.includes('historical') || tag.includes('primitive') || tag.includes('medieval'))) riskTags.add('era_collision_risk');
  if (meta.conflictTags.some(tag => tag.includes('vacuum') || tag.includes('underwater') || tag.includes('dry') || tag.includes('fire'))) riskTags.add('physics_medium_conflict');
  return Array.from(riskTags);
};

const getEnvironmentCompatibleSpaces = (meta: EnvironmentMetaSeed) => {
  void meta;
  return [];
};

const getEnvironmentItemPatch = (item: LibraryItemDef): EnvironmentItemPatch => {
  const text = `${item.id} ${item.name}`.toLocaleLowerCase();
  const patch: EnvironmentItemPatch = {};
  const push = (next: EnvironmentItemPatch) => {
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
      const values = next[key];
      if (values?.length) patch[key] = uniq([...(patch[key] || []), ...values]);
    });
  };

  if (/竹叶|bamboo/.test(text)) {
    push({
      publicFilterTags: ['竹林江湖'],
      nativeTags: ['martial', 'ecological'],
      compatibleGenres: ['wuxia', 'xianxia', 'historical'],
      compatibleEras: ['feudal', 'early_modern', 'mythic'],
      compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'mountain_monastery'],
      compatibleSpaces: ['forest', 'courtyard', 'training_ground', 'temple']
    });
  }
  if (/烛|香|incense|candle/.test(text)) {
    push({
      publicFilterTags: ['烛烟香火'],
      nativeTags: ['ritual'],
      compatibleGenres: ['historical', 'wuxia', 'xianxia', 'dark_fantasy', 'religious_ritual'],
      compatibleEras: ['slave', 'feudal', 'early_modern', 'mythic'],
      compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'religious_order', 'forbidden_temple'],
      compatibleSpaces: ['temple', 'altar', 'interior', 'courtyard']
    });
  }
  if (/花瓣|petal|pollen|dandelion|seed/.test(text)) {
    push({
      publicFilterTags: ['花叶漂浮'],
      nativeTags: ['ecological', 'romance'],
      compatibleGenres: ['romance', 'fantasy', 'ecological'],
      compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
      compatibleCultures: ['ecological_wild'],
      compatibleSpaces: ['forest', 'courtyard', 'river', 'landscape']
    });
  }
  if (/二进制|故障|全息|霓虹|digital|binary|glitch|holo|neon/.test(text)) {
    push({
      publicFilterTags: ['数字碎片'],
      nativeTags: ['technology', 'interface'],
      compatibleGenres: ['cyberpunk', 'science_fiction', 'posthuman'],
      compatibleEras: ['contemporary', 'near_future', 'far_future'],
      compatibleCultures: ['cyber_megacity', 'global_corporate', 'posthuman_city'],
      compatibleSpaces: ['server_room', 'corporate_tower', 'city'],
      riskTags: ['high_technology_pressure', 'era_collision_risk'],
      conflictTags: ['strict_historical_realism', 'pre_modern_only']
    });
  }
  if (/酸雨|毒气|辐射|acid|toxic|radioactive/.test(text)) {
    push({
      publicFilterTags: ['污染灾害'],
      nativeTags: ['hazard'],
      compatibleGenres: ['wasteland', 'post_apocalyptic', 'industrial', 'science_fiction'],
      compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
      compatibleCultures: ['postapocalyptic_wasteland', 'industrial_ruin'],
      compatibleSpaces: ['ruin', 'factory', 'street', 'shelter'],
      riskTags: ['pollution_hazard', 'era_collision_risk'],
      conflictTags: ['pristine_nature_only', 'cleanroom_only']
    });
  }
  if (/飞舞余烬|火山灰|工业火花|红热炭屑|炭黑|爆裂碎片|embers|ash|sparks|cinders|charcoal|explosion/.test(text)) {
    push({
      publicFilterTags: ['破坏残屑'],
      nativeTags: ['damage', 'hazard'],
      compatibleGenres: ['wasteland', 'post_apocalyptic', 'industrial', 'war_military'],
      compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
      compatibleCultures: ['postapocalyptic_wasteland', 'industrial_ruin', 'military_remnant'],
      compatibleSpaces: ['ruin', 'factory', 'battlefield', 'street']
    });
  }
  if (/魔法金粉|灵体光球|能量微粒|火焰花瓣|magic|spirit|energy|fire petals/.test(text)) {
    push({
      publicFilterTags: ['灵能显现'],
      nativeTags: ['magic', 'symbol'],
      compatibleGenres: ['xianxia', 'fantasy', 'dark_fantasy', 'religious_ritual'],
      compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
      compatibleCultures: ['east_asian_mythic', 'mythic_cult', 'religious_order'],
      compatibleSpaces: ['temple', 'altar', 'forest', 'cave']
    });
  }
  if (/生物荧光孢子|孢子|菌|spore|bioluminescent/.test(text)) {
    push({
      publicFilterTags: ['生物孢子'],
      nativeTags: ['hazard'],
      compatibleGenres: ['biopunk', 'body_horror', 'ecological', 'science_fiction'],
      compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
      compatibleCultures: ['biotech_lab', 'ecological_wild'],
      compatibleSpaces: ['lab', 'forest', 'wetland', 'cave']
    });
  }
  if (/黑洞|星云|真空|等离子|宇宙|nebula|black_hole|vacuum|plasma|cosmic/.test(text)) {
    push({
      publicFilterTags: ['宇宙天象'],
      compatibleGenres: ['science_fiction', 'space_opera', 'cosmic_horror'],
      compatibleEras: ['near_future', 'far_future', 'timeless'],
      compatibleCultures: ['space_colony', 'alien_ecology', 'posthuman_civilization'],
      compatibleSpaces: ['space_station', 'spaceship', 'alien_planet', 'cosmic'],
      riskTags: ['cosmic_scale_risk', 'era_collision_risk'],
      conflictTags: ['strict_historical_realism', 'pre_modern_only']
    });
  }

  return patch;
};

export const withEnvironmentStateMeta = (item: LibraryItemDef, mode: EnvironmentMode): LibraryItemDef => {
  const meta = getMeta(mode, item);
  const itemPatch = getEnvironmentItemPatch(item);
  const name = cleanName(item.name);
  const label = mode === 'ATMOSPHERE' ? '天气/大气' : '粒子';
  const eraMode = inferEraMode(meta, item, itemPatch);
  const categoryFit = getEnvironmentCategoryFit(item, meta, itemPatch);
  const manualUnlisted = categoryFit.unlisted || environmentCategoryUnlistedById[item.id] || 'none';
  return {
    ...item,
    def: item.def || `${label}细节：${name}。它只提供空气、天气、悬浮物、光路或环境状态证据，不接管主体身份和时空坐标。`,
    defEn: item.defEn || `${label} detail: ${name}. It only supplies evidence of air, weather, suspended matter, light path, or environmental state without taking over subject identity or time-space coordinate.`,
    ontologyLevel: item.ontologyLevel || meta.surrealLevel,
    eras: item.eras || meta.eras,
    eraMode,
    risk: item.risk || meta.risk,
    affects: item.affects || ['timeSpaceScene', 'lightingAtmosphere', 'compositionScene', 'otherDetails'],
    controls: item.controls || ['environment state', 'air medium', 'surface mood', 'visibility', 'atmospheric evidence'],
    forbids: item.forbids || ['replacing spacetime coordinate', 'replacing scene preset', 'replacing subject identity', 'overriding lighting design'],
    absorptionRule: item.absorptionRule || '环境状态属于细节参数。随机时可与场景、时空和光影叠加；若发生物理冲突，优先降级为局部空气证据、背景痕迹或直接移除，不作为主轴硬拼。',
    absorptionRuleEn: item.absorptionRuleEn || 'Environment state is a detail parameter. It may stack with scene, spacetime, and lighting; if physically conflicting, downgrade it to local air evidence, background trace, or remove it instead of forcing it as a main axis.',
    tags: [
      ...(item.tags || []),
      'environment_state',
      meta.environmentMode,
      meta.environmentKind,
      `surreal_l${meta.surrealLevel}`
    ],
    realityTags: [...new Set([...(item.realityTags || []), ...meta.realityTags])],
    styleTags: [...new Set([...(item.styleTags || []), ...meta.styleTags])],
    timeTags: [...new Set([...(item.timeTags || []), ...meta.timeTags])],
    publicFilterTags: uniq([...(item.publicFilterTags || []), ...getEnvironmentPublicFilterTags(item, meta), ...(itemPatch.publicFilterTags || [])]),
    nativeTags: uniq([...(item.nativeTags || []), ...getEnvironmentNativeTags(meta), ...(itemPatch.nativeTags || [])]),
    compatibleGenres: uniq([...(item.compatibleGenres || []), ...getEnvironmentCompatibleGenres(meta), ...(itemPatch.compatibleGenres || [])]),
    compatibleEras: uniq([...(item.compatibleEras || []), ...meta.eras, ...(itemPatch.compatibleEras || [])]),
    compatibleCultures: uniq([...(item.compatibleCultures || []), ...getEnvironmentCompatibleCultures(meta), ...(itemPatch.compatibleCultures || [])]),
    compatibleSpaces: uniq([...(item.compatibleSpaces || []), ...getEnvironmentCompatibleSpaces(meta), ...(itemPatch.compatibleSpaces || [])]),
    categoryFit: { ...categoryFit, unlisted: manualUnlisted },
    riskTags: uniq([...(item.riskTags || []), ...getEnvironmentRiskTags(meta), ...(itemPatch.riskTags || [])]),
    environmentMode: meta.environmentMode,
    environmentKind: meta.environmentKind,
    spacetimeAnchor: meta.spacetimeAnchor,
    realityAnchor: meta.realityAnchor,
    surrealLevel: meta.surrealLevel,
    randomAxis: 'environment_state',
    randomDominance: 'detail_parameter',
    randomRole: mode === 'ATMOSPHERE' ? 'atmosphere_detail' : 'particle_detail',
    compatibleRandomModes: ['conservative', 'balanced', 'fantasy', 'global_fusion'],
    conflictTags: uniq([...meta.conflictTags, ...(item.conflictTags || []), ...(itemPatch.conflictTags || [])]),
    selectionRule: '环境状态可叠加，但随机时通常最多选 1 个天气/大气 + 1 个粒子；若与时空、空间类型或光影冲突，宁愿少选，不强行补满。'
  } as LibraryItemDef;
};
