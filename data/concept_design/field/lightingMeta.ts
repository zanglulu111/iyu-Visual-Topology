import { LibraryItemDef } from '../../../types';

type LightingMode = 'MOOD' | 'TYPE' | 'DIRECTION' | 'SHAPE';
type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type CategoryUnlistedFit = NonNullable<CategoryFit['unlisted']>;

type LightingMetaSeed = {
  lightingMode: 'mood' | 'source_type' | 'direction' | 'projection_shape';
  lightingKind: string;
  lightAnchor: string;
  spacetimeAnchor: string;
  realityAnchor: string;
  surrealLevel: 1 | 2 | 3 | 4 | 5;
  eras: readonly string[];
  eraMode?: 'specific' | 'universal';
  eraStrictness: 'hard' | 'soft' | 'none';
  anachronismRisk: 'low' | 'medium' | 'high';
  timeTags: readonly string[];
  realityTags: readonly string[];
  styleTags: readonly string[];
  conflictTags: readonly string[];
  risk: 'clean' | 'medium' | 'high';
};

const cleanName = (name: string) => name.replace(/\s*\([^)]*\)\s*/g, '').trim();
const cleanGroup = (group = '') => group.replace(/^[A-Z]\.\s*/, '').trim();
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

const toStringList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const inferEraMode = (item: LibraryItemDef, meta: LightingMetaSeed, axisPatch: Partial<LibraryItemDef>): 'specific' | 'universal' => {
  if (item.eraMode || meta.eraMode) return item.eraMode || meta.eraMode || 'specific';
  if (meta.lightingMode === 'source_type' && toStringList(axisPatch.compatibleEras).length > 0) return 'specific';
  if (meta.eraStrictness === 'none' && meta.surrealLevel <= 1 && meta.risk === 'clean') return 'universal';
  const eras = uniqStrings([...(item.eras || []), ...meta.eras, ...toStringList(axisPatch.compatibleEras)]);
  const broadPhysical = eras.length >= 8 && meta.surrealLevel <= 1 && meta.risk === 'clean';
  return broadPhysical ? 'universal' : 'specific';
};

const baseEras = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const physicalEras = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless'];
const modernEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const electricEras = ['modern', 'contemporary', 'near_future', 'far_future'];
const futureEras = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const mythicEras = ['feudal', 'early_modern', 'modern', 'timeless', 'mythic'];

const mapIds = <T,>(entries: Array<[readonly string[], T]>): Record<string, T> => Object.fromEntries(
  entries.flatMap(([ids, value]) => ids.map(id => [id, value]))
);

const fit = (
  unlisted: CategoryUnlistedFit,
  patch: Omit<CategoryFit, 'unlisted'>
): CategoryFit => ({
  unlisted,
  ...patch
});

const lightingCategoryFitById: Record<string, CategoryFit> = mapIds([
  [
    [
      'lm_high_std', 'lm_mid_std', 'lm_documentary', 'lm_morning', 'lm_cloudy', 'lm_indoor_warm',
      'lm_soft_diffusion', 'lm_sfumato', 'lm_hard_std', 'lm_stark', 'lm_sun_harsh',
      'ld_frontal', 'ld_loop', 'ld_broad', 'ld_omni', 'ld_3point'
    ],
    fit('usable', {
      strong: [],
      usable: ['romance', 'urban_life', 'real_professional', 'fashion_idol', 'court', 'historical', 'ecological'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'dark_fantasy', 'science_fiction'],
      weak: ['horror', 'wasteland', 'cyberpunk'],
      exclude: []
    })
  ],
  [
    ['lm_ethereal', 'lm_dreamy'],
    fit('usable', {
      strong: ['xianxia', 'fantasy', 'romance'],
      usable: ['mythic_epic', 'religious_ritual', 'fashion_idol', 'ecological'],
      fusion: ['wuxia', 'dark_fantasy', 'surreal'],
      weak: ['science_fiction', 'cyberpunk', 'real_professional'],
      exclude: []
    })
  ],
  [
    ['lm_pastel'],
    fit('usable', {
      strong: ['romance', 'fashion_idol'],
      usable: ['urban_life', 'ecological', 'fantasy', 'xianxia'],
      fusion: ['surreal'],
      weak: ['noir_crime', 'horror', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['lm_clinical'],
    fit('none', {
      strong: ['real_professional', 'science_fiction'],
      usable: ['urban_life', 'posthuman', 'biopunk', 'horror'],
      fusion: ['body_horror', 'cyberpunk'],
      weak: ['romance', 'fashion_idol'],
      exclude: ['wuxia', 'xianxia', 'court', 'historical', 'ecological']
    })
  ],
  [
    ['lm_overexposed'],
    fit('weak', {
      strong: ['surreal'],
      usable: ['romance', 'fashion_idol', 'religious_ritual', 'horror'],
      fusion: ['xianxia', 'fantasy', 'dark_fantasy'],
      weak: ['real_professional', 'urban_life', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['lm_low_std', 'lm_chiaroscuro', 'lm_tenebrism', 'lm_somber', 'lm_nocturnal', 'lm_velvet', 'lm_noir_shadow'],
    fit('usable', {
      strong: ['noir_crime', 'horror', 'dark_fantasy'],
      usable: ['war_military', 'wasteland', 'religious_ritual', 'romance', 'court', 'historical'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'surreal'],
      weak: ['fashion_idol', 'urban_life', 'ecological'],
      exclude: []
    })
  ],
  [
    ['lm_misty'],
    fit('usable', {
      strong: ['horror', 'dark_fantasy', 'surreal'],
      usable: ['romance', 'wuxia', 'xianxia', 'fantasy', 'ecological', 'adventure'],
      fusion: ['noir_crime', 'religious_ritual'],
      weak: ['cyberpunk', 'science_fiction'],
      exclude: []
    })
  ],
  [
    ['lm_glitch_chroma'],
    fit('none', {
      strong: ['cyberpunk', 'science_fiction', 'surreal', 'abstract'],
      usable: ['posthuman', 'fashion_idol'],
      fusion: ['noir_crime', 'xianxia'],
      weak: ['romance', 'wuxia', 'historical'],
      exclude: ['court', 'ecological']
    })
  ],
  [
    ['lt_golden_hour', 'lt_blue_hour', 'lt_harsh_noon', 'lt_overcast_sky', 'lt_moonlight_pale', 'lt_starlight_void', 'lt_lightning_bolt', 'lt_rainbow_refraction'],
    fit('usable', {
      strong: [],
      usable: ['romance', 'urban_life', 'real_professional', 'adventure', 'ecological', 'historical'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'dark_fantasy', 'noir_crime'],
      weak: ['science_fiction', 'cyberpunk', 'wasteland'],
      exclude: []
    })
  ],
  [
    ['lt_aurora_dance'],
    fit('usable', {
      strong: ['mythic_epic', 'fantasy', 'xianxia'],
      usable: ['ecological', 'romance', 'dark_fantasy'],
      fusion: ['science_fiction', 'surreal', 'horror'],
      weak: ['real_professional', 'urban_life'],
      exclude: []
    })
  ],
  [
    ['lt_candlelight_warm', 'lt_fireplace_glow', 'lt_oil_lantern', 'lt_matches_strike', 'lt_incense_burning'],
    fit('usable', {
      strong: ['historical', 'court', 'religious_ritual'],
      usable: ['romance', 'wuxia', 'xianxia', 'dark_fantasy', 'horror', 'noir_crime'],
      fusion: ['fantasy', 'mythic_epic'],
      weak: ['science_fiction', 'cyberpunk', 'posthuman'],
      exclude: []
    })
  ],
  [
    ['lt_sodium_vapor', 'lt_mercury_vapor', 'lt_fluorescent_flicker', 'lt_street_lamp_led', 'lt_construction_flood'],
    fit('none', {
      strong: ['urban_life', 'real_professional', 'noir_crime'],
      usable: ['wasteland', 'war_military', 'horror'],
      fusion: ['cyberpunk', 'science_fiction', 'dark_fantasy'],
      weak: ['romance', 'wuxia', 'xianxia', 'historical'],
      exclude: ['court', 'ecological']
    })
  ],
  [
    ['lt_searchlight_beam'],
    fit('none', {
      strong: ['war_military', 'noir_crime', 'wasteland'],
      usable: ['real_professional', 'horror', 'science_fiction'],
      fusion: ['cyberpunk', 'dark_fantasy'],
      weak: ['romance', 'wuxia', 'xianxia'],
      exclude: ['court', 'ecological']
    })
  ],
  [
    ['lt_lighthouse_sweep'],
    fit('weak', {
      strong: ['adventure', 'noir_crime'],
      usable: ['romance', 'horror', 'ecological', 'war_military'],
      fusion: ['dark_fantasy', 'wasteland'],
      weak: ['wuxia', 'xianxia', 'science_fiction'],
      exclude: []
    })
  ],
  [
    ['lt_night_lamp', 'lt_fridge_light'],
    fit('weak', {
      strong: ['urban_life', 'horror'],
      usable: ['romance', 'real_professional', 'noir_crime'],
      fusion: ['surreal'],
      weak: ['wuxia', 'xianxia', 'historical', 'court'],
      exclude: []
    })
  ],
  [
    ['lt_neon_tube', 'lt_screen_glow_blue', 'lt_led_panel', 'lt_uv_blacklight', 'lt_strobe_club', 'lt_projector_beam'],
    fit('none', {
      strong: ['cyberpunk', 'urban_life', 'fashion_idol'],
      usable: ['science_fiction', 'noir_crime', 'posthuman'],
      fusion: ['surreal', 'xianxia', 'dark_fantasy'],
      weak: ['romance', 'wuxia', 'historical'],
      exclude: ['court', 'ecological']
    })
  ],
  [
    ['lt_hologram_cyan', 'lt_scanner_red', 'lt_fiber_glow', 'lt_infrared_night', 'lt_smart_glass'],
    fit('none', {
      strong: ['science_fiction', 'cyberpunk', 'posthuman'],
      usable: ['real_professional', 'biopunk', 'noir_crime'],
      fusion: ['surreal', 'fashion_idol', 'xianxia'],
      weak: ['romance', 'wuxia'],
      exclude: ['historical', 'court', 'ecological']
    })
  ],
  [
    ['lt_explosion_burst', 'lt_magma_glow', 'lt_flamethrower_jet'],
    fit('none', {
      strong: ['war_military', 'wasteland', 'adventure'],
      usable: ['horror', 'dark_fantasy', 'mythic_epic'],
      fusion: ['wuxia', 'xianxia', 'science_fiction'],
      weak: ['romance', 'urban_life', 'fashion_idol'],
      exclude: ['ecological']
    })
  ],
  [
    ['lt_arc_welding', 'lt_laser_beam_red', 'lt_nuclear_cherenkov', 'lt_plasma_ball', 'lt_tesla_arc'],
    fit('none', {
      strong: ['science_fiction', 'cyberpunk', 'posthuman'],
      usable: ['biopunk', 'real_professional', 'wasteland', 'body_horror'],
      fusion: ['dark_fantasy', 'horror', 'war_military'],
      weak: ['wuxia', 'xianxia', 'romance'],
      exclude: ['historical', 'court', 'ecological']
    })
  ],
  [
    ['lt_biolum_forest', 'lt_willow_light'],
    fit('weak', {
      strong: ['ecological', 'fantasy', 'xianxia'],
      usable: ['romance', 'horror', 'dark_fantasy', 'mythic_epic'],
      fusion: ['science_fiction', 'biopunk', 'surreal'],
      weak: ['real_professional', 'urban_life'],
      exclude: []
    })
  ],
  [
    ['lt_spirit_wisp', 'lt_magic_rune_glow', 'lt_holy_halo', 'lt_void_sink'],
    fit('none', {
      strong: ['xianxia', 'fantasy', 'dark_fantasy', 'religious_ritual', 'mythic_epic'],
      usable: ['horror', 'surreal'],
      fusion: ['wuxia', 'romance', 'science_fiction'],
      weak: ['cyberpunk', 'real_professional'],
      exclude: ['urban_life']
    })
  ],
  [
    ['ld_side_90', 'ld_rembrandt', 'ld_split', 'ld_overhead', 'ld_bottom', 'ld_backlight', 'ld_side_rim', 'ld_kicker', 'ld_bg_only'],
    fit('usable', {
      strong: [],
      usable: ['noir_crime', 'horror', 'dark_fantasy', 'fashion_idol', 'romance', 'court', 'religious_ritual'],
      fusion: ['wuxia', 'xianxia', 'fantasy', 'science_fiction'],
      weak: ['ecological', 'real_professional'],
      exclude: []
    })
  ],
  [
    ['ld_butterfly'],
    fit('usable', {
      strong: ['fashion_idol', 'romance', 'boudoir_aesthetic'],
      usable: ['court', 'urban_life', 'real_professional'],
      fusion: ['noir_crime', 'surreal'],
      weak: ['war_military', 'wasteland', 'horror'],
      exclude: []
    })
  ],
  [
    ['ls_venetian', 'ls_prison_bar', 'ls_shutter_slat', 'ls_door_slit', 'ls_keyhole'],
    fit('weak', {
      strong: ['noir_crime', 'horror'],
      usable: ['urban_life', 'real_professional', 'romance', 'war_military'],
      fusion: ['dark_fantasy', 'wuxia', 'surreal'],
      weak: ['xianxia', 'ecological'],
      exclude: []
    })
  ],
  [
    ['ls_cross_win', 'ls_arch_portal', 'ls_french_door', 'ls_stained_glass', 'ls_skylight_sq', 'ls_double_sash', 'ls_rose_window'],
    fit('weak', {
      strong: ['historical', 'court', 'religious_ritual'],
      usable: ['romance', 'dark_fantasy', 'horror', 'noir_crime'],
      fusion: ['xianxia', 'fantasy', 'surreal'],
      weak: ['science_fiction', 'cyberpunk'],
      exclude: []
    })
  ],
  [
    ['ls_dappled', 'ls_palm_leaf', 'ls_branch', 'ls_bamboo', 'ls_fern', 'ls_petal', 'ls_water_caust', 'ls_cloud_break', 'ls_forest_canopy', 'ls_grass', 'ls_raindrop', 'ls_lightning'],
    fit('usable', {
      strong: ['ecological'],
      usable: ['romance', 'adventure', 'wuxia', 'xianxia', 'fantasy', 'historical'],
      fusion: ['dark_fantasy', 'horror', 'surreal'],
      weak: ['science_fiction', 'cyberpunk', 'real_professional'],
      exclude: []
    })
  ],
  [
    ['ls_ind_grid', 'ls_honeycomb', 'ls_linear_slit', 'ls_perf_dots', 'ls_fan_blade', 'ls_chain_link', 'ls_concentric', 'ls_tri_beam', 'ls_radial', 'ls_staircase'],
    fit('none', {
      strong: ['real_professional', 'urban_life', 'science_fiction'],
      usable: ['noir_crime', 'cyberpunk', 'war_military', 'wasteland'],
      fusion: ['dark_fantasy', 'surreal', 'wuxia'],
      weak: ['historical', 'court', 'xianxia'],
      exclude: ['ecological']
    })
  ],
  [
    ['ls_pixel', 'ls_barcode', 'ls_laser_grid', 'ls_noise'],
    fit('none', {
      strong: ['cyberpunk', 'science_fiction', 'abstract'],
      usable: ['posthuman', 'surreal', 'fashion_idol'],
      fusion: ['noir_crime', 'xianxia'],
      weak: ['romance', 'wuxia'],
      exclude: ['historical', 'court', 'ecological']
    })
  ],
  [
    ['ls_abs_cut', 'ls_prism_frac', 'ls_gradient', 'ls_vignette', 'ls_bokeh', 'ls_smoke_swirl', 'ls_shattered'],
    fit('weak', {
      strong: ['surreal', 'abstract'],
      usable: ['fashion_idol', 'romance', 'noir_crime', 'horror', 'dark_fantasy'],
      fusion: ['xianxia', 'science_fiction'],
      weak: ['historical', 'court', 'ecological'],
      exclude: []
    })
  ],
  [
    ['ls_rorschach', 'ls_kaleido', 'ls_blob'],
    fit('none', {
      strong: ['surreal', 'abstract'],
      usable: ['horror', 'dark_fantasy', 'fantasy'],
      fusion: ['xianxia', 'science_fiction', 'fashion_idol'],
      weak: ['romance', 'wuxia'],
      exclude: ['real_professional', 'historical']
    })
  ]
]);

const moodMeta = (item: LibraryItemDef): LightingMetaSeed => {
  const group = item.group || '';
  if (group.includes('高调')) {
    return {
      lightingMode: 'mood',
      lightingKind: 'high_key',
      lightAnchor: 'bright_low_shadow_mood',
      spacetimeAnchor: 'open_or_controlled_bright_space',
      realityAnchor: item.id === 'lm_clinical' ? 'clinical_artificial_light' : 'physical_exposure_mood',
      surrealLevel: item.id === 'lm_overexposed' ? 2 : 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['bright', 'low_shadow', 'clear_visibility'],
      realityTags: ['realistic', 'physical_light', 'exposure_mood'],
      styleTags: ['clean', 'airy', 'readable'],
      conflictTags: ['deep_noir_only', 'dark_ritual_only', 'night_visibility_lock'],
      risk: 'clean'
    };
  }
  if (group.includes('低调')) {
    return {
      lightingMode: 'mood',
      lightingKind: 'low_key',
      lightAnchor: 'dark_high_shadow_mood',
      spacetimeAnchor: 'night_or_controlled_dark_space',
      realityAnchor: 'physical_exposure_mood',
      surrealLevel: 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['night_or_interior', 'low_key', 'shadow_dominant'],
      realityTags: ['realistic', 'physical_light', 'exposure_mood'],
      styleTags: ['dark', 'dramatic', 'compressed'],
      conflictTags: ['pure_high_key_only', 'clinical_white_only', 'flat_daylight_only'],
      risk: 'clean'
    };
  }
  if (group.includes('中调')) {
    return {
      lightingMode: 'mood',
      lightingKind: 'mid_tone',
      lightAnchor: 'balanced_realist_mood',
      spacetimeAnchor: 'ordinary_physical_space',
      realityAnchor: 'physical_exposure_mood',
      surrealLevel: 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['balanced_exposure', 'realist_visibility'],
      realityTags: ['realistic', 'physical_light', 'naturalistic'],
      styleTags: ['realist', 'balanced', 'plain'],
      conflictTags: ['extreme_contrast_only', 'symbolic_light_only'],
      risk: 'clean'
    };
  }
  if (group.includes('软调')) {
    return {
      lightingMode: 'mood',
      lightingKind: 'soft_light',
      lightAnchor: 'diffused_soft_mood',
      spacetimeAnchor: 'diffused_air_or_studio_space',
      realityAnchor: 'physical_diffusion',
      surrealLevel: item.id === 'lm_dreamy' ? 2 : 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['diffused_light', 'soft_shadow', 'air_scattering'],
      realityTags: item.id === 'lm_dreamy' ? ['stylized', 'semi_surreal', 'physical_light', 'diffusion'] : ['realistic', 'stylized', 'physical_light', 'diffusion'],
      styleTags: ['soft', 'misty', 'gentle'],
      conflictTags: ['hard_shadow_only', 'no_air_medium', 'razor_noir_only'],
      risk: 'clean'
    };
  }
  return {
    lightingMode: 'mood',
    lightingKind: 'hard_light',
    lightAnchor: 'hard_shadow_mood',
    spacetimeAnchor: 'direct_light_or_controlled_stage',
    realityAnchor: item.id === 'lm_glitch_chroma' ? 'optical_or_digital_edge_effect' : 'physical_hard_light',
    surrealLevel: item.id === 'lm_glitch_chroma' ? 3 : 1,
    eras: item.id === 'lm_glitch_chroma' ? futureEras : baseEras,
    eraStrictness: item.id === 'lm_glitch_chroma' ? 'soft' : 'none',
    anachronismRisk: item.id === 'lm_glitch_chroma' ? 'medium' : 'low',
    timeTags: ['hard_light', 'sharp_shadow', 'high_edge_definition'],
    realityTags: item.id === 'lm_glitch_chroma' ? ['semi_surreal', 'technological', 'technological_or_optical', 'edge_distortion'] : ['realistic', 'physical_light', 'hard_shadow'],
    styleTags: ['harsh', 'graphic', 'dramatic'],
    conflictTags: ['soft_diffusion_only', 'shadowless_flat_only'],
    risk: item.id === 'lm_glitch_chroma' ? 'medium' : 'clean'
  };
};

const sourceTypeMeta = (item: LibraryItemDef): LightingMetaSeed => {
  const group = item.group || '';
  if (group.includes('通用天光')) {
    return {
      lightingMode: 'source_type',
      lightingKind: 'universal_sky_light',
      lightAnchor: 'natural_sky_light',
      spacetimeAnchor: ['lt_moonlight_pale', 'lt_starlight_void'].includes(item.id)
        ? 'physical_night_sky'
        : ['lt_aurora_dance', 'lt_lightning_bolt', 'lt_rainbow_refraction'].includes(item.id)
          ? 'physical_weather_or_celestial_event'
          : 'physical_day_or_weather_sky',
      realityAnchor: item.id === 'lt_rainbow_refraction'
        ? 'physical_refraction'
        : item.id === 'lt_aurora_dance'
          ? 'celestial_atmospheric_light'
          : 'physical_natural_light',
      surrealLevel: 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['natural_light', 'sky_condition', 'all_eras'],
      realityTags: ['realistic', 'physical_light', 'natural_source', 'spacetime_safe'],
      styleTags: ['naturalistic', 'environmental'],
      conflictTags: ['sealed_no_sky_only', 'pure_studio_only', 'underground_no_opening'],
      risk: 'clean'
    };
  }
  if (group.includes('前电力')) {
    return {
      lightingMode: 'source_type',
      lightingKind: 'pre_electric_fire_light',
      lightAnchor: 'fire_or_flame_practical_light',
      spacetimeAnchor: 'pre_electric_or_timeless_interior',
      realityAnchor: 'physical_fire_light',
      surrealLevel: 1,
      eras: baseEras,
      eraStrictness: 'soft',
      anachronismRisk: 'low',
      timeTags: ['pre_electric', 'interior_or_night', 'fire_light'],
      realityTags: ['realistic', 'physical_light', 'practical_source', 'historically_safe'],
      styleTags: ['intimate', 'ritual', 'localized', 'warm'],
      conflictTags: ['strict_cleanroom_only', 'vacuum_space', 'underwater_only'],
      risk: 'clean'
    };
  }
  if (group.includes('工业城市')) {
    const laterElectricIds = ['lt_fluorescent_flicker', 'lt_street_lamp_led', 'lt_night_lamp', 'lt_fridge_light'];
    return {
      lightingMode: 'source_type',
      lightingKind: 'industrial_urban_light',
      lightAnchor: 'urban_or_industrial_fixture',
      spacetimeAnchor: laterElectricIds.includes(item.id) ? 'modern_electric_interior_or_city' : 'industrial_modern_city',
      realityAnchor: 'physical_artificial_light',
      surrealLevel: 1,
      eras: laterElectricIds.includes(item.id) ? ['modern', 'contemporary', 'near_future', 'far_future'] : modernEras,
      eraStrictness: 'hard',
      anachronismRisk: laterElectricIds.includes(item.id) ? 'medium' : 'low',
      timeTags: ['industrial_or_modern', 'electric_light', 'city_or_interior'],
      realityTags: ['realistic', 'physical_light', 'urban_fixture', 'industrial_or_modern'],
      styleTags: ['urban', 'noir', 'industrial', 'practical'],
      conflictTags: ['primitive_only', 'pre_electric_only', 'natural_wilderness_only', 'strict_medieval_realism'],
      risk: 'clean'
    };
  }
  if (group.includes('现代数字')) {
    return {
      lightingMode: 'source_type',
      lightingKind: 'modern_digital_light',
      lightAnchor: 'screen_neon_projection_or_interface_light',
      spacetimeAnchor: 'contemporary_or_future_digital_space',
      realityAnchor: ['lt_hologram_cyan', 'lt_scanner_red', 'lt_fiber_glow', 'lt_smart_glass'].includes(item.id)
        ? 'technological_interface_light'
        : 'modern_electric_or_projection_light',
      surrealLevel: ['lt_hologram_cyan', 'lt_scanner_red', 'lt_fiber_glow', 'lt_smart_glass'].includes(item.id) ? 3 : 2,
      eras: ['modern', 'contemporary', 'near_future', 'far_future'],
      eraStrictness: 'hard',
      anachronismRisk: 'high',
      timeTags: ['modern_digital', 'electric_light', 'interface_or_entertainment'],
      realityTags: ['semi_surreal', 'technological', 'technological_or_modern', 'artificial_light', 'interface'],
      styleTags: ['digital', 'urban', 'synthetic', 'screen_based'],
      conflictTags: ['strict_historical_realism', 'primitive_only', 'pre_electric_only', 'natural_wilderness_only'],
      risk: 'medium'
    };
  }
  if (group.includes('工业实验危险')) {
    const preElectricHazardIds = ['lt_explosion_burst', 'lt_magma_glow', 'lt_flamethrower_jet'];
    return {
      lightingMode: 'source_type',
      lightingKind: 'industrial_experimental_hazard_light',
      lightAnchor: preElectricHazardIds.includes(item.id) ? 'physical_hazard_light' : 'industrial_or_scientific_hazard_light',
      spacetimeAnchor: preElectricHazardIds.includes(item.id) ? 'physical_hazard_scene' : 'industrial_scientific_or_future_lab',
      realityAnchor: preElectricHazardIds.includes(item.id) ? 'hazardous_physical_light' : 'technological_hazard_light',
      surrealLevel: preElectricHazardIds.includes(item.id) ? 2 : 3,
      eras: preElectricHazardIds.includes(item.id) ? baseEras : modernEras,
      eraStrictness: preElectricHazardIds.includes(item.id) ? 'soft' : 'hard',
      anachronismRisk: preElectricHazardIds.includes(item.id) ? 'medium' : 'high',
      timeTags: ['hazard', 'high_intensity', 'industrial_or_disaster'],
      realityTags: preElectricHazardIds.includes(item.id) ? ['realistic', 'stylized', 'physical_light', 'hazard'] : ['semi_surreal', 'technological', 'hazard', 'artificial_light'],
      styleTags: ['violent', 'spectacular', 'danger'],
      conflictTags: ['quiet_domestic_only', 'strict_natural_light_only', 'soft_subtle_only', 'sacred_clean_air_only'],
      risk: 'medium'
    };
  }
  return {
    lightingMode: 'source_type',
    lightingKind: 'mythic_surreal_light',
    lightAnchor: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 'biological_light' : 'mythic_or_surreal_light',
    spacetimeAnchor: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 'biological_ecology' : 'mythic_or_energy_field',
    realityAnchor: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 'biological_physical_light' : 'surreal_manifestation_light',
    surrealLevel: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 2 : 4,
    eras: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? baseEras : mythicEras,
    eraStrictness: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 'soft' : 'hard',
    anachronismRisk: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 'medium' : 'high',
    timeTags: ['mythic_or_surreal_light', 'night_or_ritual'],
    realityTags: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? ['stylized', 'semi_surreal', 'biological', 'physical_light'] : ['nonreal', 'mythic', 'magical', 'non_ordinary_light'],
    styleTags: ['fantasy', 'ethereal', 'sacred_or_uncanny'],
    conflictTags: ['strict_documentary_realism', 'hard_science_only', 'plain_daylight_only', 'low_ontology_lock'],
    risk: ['lt_biolum_forest', 'lt_willow_light'].includes(item.id) ? 'medium' : 'high'
  };
};

const directionMeta = (item: LibraryItemDef): LightingMetaSeed => ({
  lightingMode: 'direction',
  lightingKind: 'lighting_setup_direction',
  lightAnchor: item.id,
  spacetimeAnchor: 'physical_or_studio_lighting_setup',
  realityAnchor: 'physical_light_direction',
  surrealLevel: 1,
  eras: baseEras,
  eraStrictness: 'none',
  anachronismRisk: 'low',
  timeTags: ['lighting_setup', 'spatial_light_position'],
  realityTags: ['realistic', 'physical_light', 'light_direction'],
  styleTags: ['composition_support', 'subject_modeling'],
  conflictTags: ['flat_shadowless_only', 'no_directional_light'],
  risk: 'clean'
});

const shapeMeta = (item: LibraryItemDef): LightingMetaSeed => {
  const group = item.group || '';
  if (group.includes('窗影建筑')) {
    return {
      lightingMode: 'projection_shape',
      lightingKind: 'architectural_shadow_shape',
      lightAnchor: 'architectural_gobo',
      spacetimeAnchor: 'interior_or_building_space',
      realityAnchor: 'physical_shadow_projection',
      surrealLevel: 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['interior', 'building_shadow', 'directional_light'],
      realityTags: ['realistic', 'physical_light', 'architecture_shadow'],
      styleTags: ['noir', 'structured', 'spatial'],
      conflictTags: ['open_landscape_only', 'shadowless_flat_only'],
      risk: 'clean'
    };
  }
  if (group.includes('自然植物')) {
    return {
      lightingMode: 'projection_shape',
      lightingKind: 'natural_shadow_shape',
      lightAnchor: 'natural_gobo',
      spacetimeAnchor: 'natural_or_weather_space',
      realityAnchor: item.id === 'ls_lightning' ? 'weather_flash_projection' : 'physical_shadow_projection',
      surrealLevel: 1,
      eras: baseEras,
      eraStrictness: 'none',
      anachronismRisk: 'low',
      timeTags: ['outdoor_or_window', 'natural_shadow', 'weather_light'],
      realityTags: ['realistic', 'physical_light', 'natural_shadow'],
      styleTags: ['organic', 'environmental', 'atmospheric'],
      conflictTags: ['sealed_cleanroom', 'pure_geometric_space_only'],
      risk: 'clean'
    };
  }
  if (group.includes('几何工业')) {
    return {
      lightingMode: 'projection_shape',
      lightingKind: 'geometric_industrial_shape',
      lightAnchor: 'industrial_or_geometric_gobo',
      spacetimeAnchor: 'industrial_modern_or_abstract_space',
      realityAnchor: ['ls_pixel', 'ls_barcode'].includes(item.id) ? 'digital_or_graphic_projection' : 'physical_shadow_projection',
      surrealLevel: ['ls_pixel', 'ls_barcode'].includes(item.id) ? 3 : 1,
      eras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
      eraStrictness: ['ls_pixel', 'ls_barcode'].includes(item.id) ? 'hard' : 'soft',
      anachronismRisk: ['ls_pixel', 'ls_barcode'].includes(item.id) ? 'high' : 'medium',
      timeTags: ['industrial', 'geometric_shadow', 'controlled_light'],
      realityTags: ['ls_pixel', 'ls_barcode'].includes(item.id) ? ['semi_surreal', 'technological', 'physical_or_digital_light', 'geometric_projection'] : ['stylized', 'realistic', 'physical_or_digital_light', 'geometric_projection'],
      styleTags: ['graphic', 'industrial', 'structured'],
      conflictTags: ['primitive_only', 'natural_wilderness_only', 'soft_organic_only'],
      risk: ['ls_pixel', 'ls_barcode'].includes(item.id) ? 'medium' : 'clean'
    };
  }
  return {
    lightingMode: 'projection_shape',
    lightingKind: 'abstract_special_shape',
    lightAnchor: 'abstract_or_optical_gobo',
    spacetimeAnchor: 'abstract_stage_or_optical_space',
    realityAnchor: ['ls_laser_grid', 'ls_noise', 'ls_blob', 'ls_rorschach', 'ls_kaleido'].includes(item.id) ? 'abstract_or_digital_projection' : 'optical_projection',
    surrealLevel: ['ls_laser_grid', 'ls_noise', 'ls_blob', 'ls_rorschach', 'ls_kaleido'].includes(item.id) ? 4 : 2,
    eras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
    eraStrictness: 'soft',
    anachronismRisk: 'medium',
    timeTags: ['abstract_light_shape', 'controlled_projection'],
    realityTags: ['ls_laser_grid', 'ls_noise', 'ls_blob', 'ls_rorschach', 'ls_kaleido'].includes(item.id) ? ['abstract', 'surreal', 'optical_or_abstract', 'projection_shape'] : ['stylized', 'semi_surreal', 'optical_or_abstract', 'projection_shape'],
    styleTags: ['abstract', 'special_effect', 'graphic'],
    conflictTags: ['strict_documentary_realism', 'hard_location_realism', 'plain_daylight_only'],
    risk: 'medium'
  };
};

const lightTypeAxisPatch = (item: LibraryItemDef, meta: LightingMetaSeed): Partial<LibraryItemDef> => {
  if (meta.lightingMode !== 'source_type') return {};
  const patch: Partial<LibraryItemDef> = {};
  const set = (key: keyof LibraryItemDef, values: readonly string[]) => {
    if (values.length > 0) patch[key] = [...new Set(values)] as never;
  };

  const historicalEras = ['primitive', 'slave', 'feudal', 'early_modern'];
  const modernFutureEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
  const futureOnlyEras = ['near_future', 'far_future'];
  const interiorSpaces = ['interior', 'temple', 'palace', 'courtyard', 'archive'];
  const modernSpaces = ['city', 'street', 'office', 'factory', 'lab', 'interior'];

  if (['lt_candlelight_warm', 'lt_incense_burning'].includes(item.id)) {
    set('publicFilterTags', ['ritual', 'temple', 'court']);
    set('nativeTags', ['ritual', 'temple', 'court']);
    set('compatibleGenres', ['wuxia', 'xianxia', 'dark_fantasy', 'religious_ritual', 'court', 'historical']);
    set('compatibleEras', [...historicalEras, 'mythic', 'timeless']);
    set('compatibleCultures', ['chinese_jianghu', 'east_asian_historical', 'religious_order', 'forbidden_temple', 'historical_court', 'imperial_bureaucracy']);
    set('compatibleSpaces', interiorSpaces);
    return patch;
  }

  if (['lt_fireplace_glow', 'lt_oil_lantern', 'lt_matches_strike'].includes(item.id)) {
    set('publicFilterTags', ['historical', 'interior']);
    set('nativeTags', ['period', 'interior']);
    set('compatibleGenres', ['historical', 'court', 'dark_fantasy', 'noir_crime']);
    set('compatibleEras', [...historicalEras, 'industrial', 'modern', 'timeless']);
    set('compatibleCultures', ['historical_court', 'western_court', 'east_asian_historical', 'religious_order']);
    set('compatibleSpaces', ['interior', 'palace', 'street', 'shelter']);
    return patch;
  }

  if (['lt_sodium_vapor', 'lt_mercury_vapor', 'lt_street_lamp_led'].includes(item.id)) {
    set('publicFilterTags', ['urban', 'city']);
    set('nativeTags', ['urban', 'infrastructure']);
    set('compatibleGenres', ['urban_life', 'noir_crime', 'wasteland']);
    set('compatibleEras', item.id === 'lt_street_lamp_led' ? electricEras : modernFutureEras);
    set('compatibleCultures', ['institutional_modern', 'frontier_survival', 'postapocalyptic_wasteland']);
    set('compatibleSpaces', ['city', 'street', 'road', 'scrapyard']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only', 'natural_wilderness_only']);
    return patch;
  }

  if (item.id === 'lt_construction_flood') {
    set('publicFilterTags', ['professional', 'urban', 'infrastructure']);
    set('nativeTags', ['professional', 'workflow', 'infrastructure']);
    set('compatibleGenres', ['real_professional', 'workplace', 'urban_life', 'wasteland']);
    set('compatibleEras', modernFutureEras);
    set('compatibleCultures', ['institutional_modern', 'frontier_survival', 'postapocalyptic_wasteland']);
    set('compatibleSpaces', ['factory', 'road', 'scrapyard', 'city']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only', 'natural_wilderness_only']);
    return patch;
  }

  if (item.id === 'lt_fluorescent_flicker') {
    set('publicFilterTags', ['professional', 'interior']);
    set('nativeTags', ['professional', 'institution']);
    set('compatibleGenres', ['real_professional', 'institutional', 'workplace', 'urban_life', 'horror']);
    set('compatibleEras', ['modern', 'contemporary', 'near_future']);
    set('compatibleCultures', ['global_corporate', 'institutional_modern']);
    set('compatibleSpaces', ['office', 'hospital', 'lab', 'interior']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only']);
    return patch;
  }

  if (['lt_night_lamp', 'lt_fridge_light'].includes(item.id)) {
    set('publicFilterTags', ['interior']);
    set('nativeTags', ['domestic', 'interior']);
    set('compatibleGenres', ['urban_life', 'horror']);
    set('compatibleEras', ['modern', 'contemporary', 'near_future']);
    set('compatibleCultures', ['institutional_modern']);
    set('compatibleSpaces', ['interior']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only']);
    return patch;
  }

  if (['lt_searchlight_beam', 'lt_lighthouse_sweep'].includes(item.id)) {
    set('publicFilterTags', ['institution', 'hazard']);
    set('nativeTags', ['institution', 'surveillance', 'navigation']);
    set('compatibleGenres', ['war_military', 'noir_crime', 'wasteland']);
    set('compatibleEras', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future']);
    set('compatibleCultures', ['frontier_survival', 'postapocalyptic_wasteland']);
    set('compatibleSpaces', ['city', 'road', 'shelter', 'landscape']);
    set('conflictTags', [...meta.conflictTags, 'primitive_only', 'strict_medieval_realism']);
    return patch;
  }

  if (['lt_neon_tube', 'lt_screen_glow_blue', 'lt_led_panel', 'lt_hologram_cyan', 'lt_scanner_red', 'lt_fiber_glow', 'lt_smart_glass'].includes(item.id)) {
    const futureInterfaceIds = ['lt_hologram_cyan', 'lt_scanner_red', 'lt_fiber_glow', 'lt_smart_glass'];
    set('publicFilterTags', ['cyber', 'interface', 'neon', 'technology']);
    set('nativeTags', ['cyber', 'interface', 'technology']);
    set('compatibleGenres', ['cyberpunk', 'science_fiction', 'posthuman']);
    set('compatibleEras', futureInterfaceIds.includes(item.id) ? futureOnlyEras : ['modern', 'contemporary', ...futureOnlyEras]);
    set('compatibleCultures', ['cyber_megacity', 'posthuman_city', 'global_corporate']);
    set('compatibleSpaces', ['lab', 'corporate_tower', 'server_room', 'city']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only', 'natural_wilderness_only']);
    return patch;
  }

  if (['lt_uv_blacklight', 'lt_infrared_night', 'lt_strobe_club', 'lt_projector_beam'].includes(item.id)) {
    set('publicFilterTags', ['urban', 'technology']);
    set('nativeTags', ['urban', 'technology', 'entertainment']);
    set('compatibleGenres', ['urban_life', 'noir_crime', 'science_fiction', 'cyberpunk']);
    set('compatibleEras', ['modern', 'contemporary', 'near_future', 'far_future']);
    set('compatibleCultures', ['global_corporate', 'cyber_megacity', 'institutional_modern']);
    set('compatibleSpaces', ['city', 'interior', 'lab', 'corporate_tower']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only']);
    return patch;
  }

  if (['lt_arc_welding', 'lt_laser_beam_red', 'lt_nuclear_cherenkov', 'lt_plasma_ball', 'lt_tesla_arc'].includes(item.id)) {
    set('publicFilterTags', ['technology', 'hazard']);
    set('nativeTags', ['technology', 'hazard', 'lab']);
    set('compatibleGenres', ['science_fiction', 'cyberpunk', 'biopunk', 'wasteland']);
    set('compatibleEras', ['modern', 'contemporary', 'near_future', 'far_future']);
    set('compatibleCultures', ['cyber_megacity', 'posthuman_city', 'institutional_modern', 'postapocalyptic_wasteland']);
    set('compatibleSpaces', ['lab', 'factory', 'server_room', 'scrapyard']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'pre_electric_only', 'quiet_domestic_only']);
    return patch;
  }

  if (item.id === 'lt_magma_glow') {
    set('publicFilterTags', ['hazard', 'survival']);
    set('nativeTags', ['hazard', 'survival', 'curse']);
    set('compatibleGenres', ['wasteland', 'post_apocalyptic', 'dark_fantasy', 'mythic_epic']);
    set('compatibleEras', ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic']);
    set('compatibleCultures', ['frontier_survival', 'postapocalyptic_wasteland', 'religious_order', 'forbidden_temple']);
    set('compatibleSpaces', ['ruin', 'desert', 'road', 'cave', 'underground', 'landscape']);
    return patch;
  }

  if (['lt_explosion_burst', 'lt_flamethrower_jet'].includes(item.id)) {
    set('publicFilterTags', ['hazard', 'survival']);
    set('nativeTags', ['hazard', 'survival']);
    set('compatibleGenres', ['wasteland', 'post_apocalyptic', 'war_military']);
    set('compatibleEras', item.id === 'lt_explosion_burst'
      ? ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future']
      : ['industrial', 'modern', 'contemporary', 'near_future', 'far_future']);
    set('compatibleCultures', ['frontier_survival', 'postapocalyptic_wasteland']);
    set('compatibleSpaces', ['ruin', 'desert', 'road', 'scrapyard', 'landscape']);
    set('conflictTags', [...meta.conflictTags, 'strict_historical_realism', 'quiet_domestic_only', 'sacred_clean_air_only']);
    return patch;
  }

  if (['lt_magic_rune_glow', 'lt_spirit_wisp', 'lt_holy_halo', 'lt_void_sink'].includes(item.id)) {
    set('publicFilterTags', ['magic', 'ritual', 'temple', 'dark_fantasy']);
    set('nativeTags', ['magic', 'ritual', 'temple', 'curse', 'artifact']);
    set('compatibleGenres', ['xianxia', 'dark_fantasy', 'religious_ritual', 'horror', 'mythic_epic']);
    set('compatibleEras', ['feudal', 'early_modern', 'mythic', 'timeless']);
    set('compatibleCultures', ['forbidden_temple', 'religious_order', 'mythic_cult', 'east_asian_ritual']);
    set('compatibleSpaces', ['temple', 'tomb', 'altar', 'crypt', 'cave', 'underground']);
    return patch;
  }

  if (['lt_biolum_forest', 'lt_willow_light'].includes(item.id)) {
    set('publicFilterTags', ['forest', 'ecology', 'magic']);
    set('nativeTags', ['forest', 'ecology', 'magic']);
    set('compatibleGenres', ['xianxia', 'fantasy', 'dark_fantasy', 'ecological']);
    set('compatibleEras', ['feudal', 'early_modern', 'modern', 'contemporary', 'mythic', 'timeless']);
    set('compatibleCultures', ['east_asian_ritual', 'mythic_cult']);
    set('compatibleSpaces', ['forest', 'mountain', 'cave', 'landscape']);
    return patch;
  }

  return patch;
};

const getMeta = (item: LibraryItemDef, mode: LightingMode): LightingMetaSeed => {
  if (mode === 'MOOD') return moodMeta(item);
  if (mode === 'TYPE') return sourceTypeMeta(item);
  if (mode === 'DIRECTION') return directionMeta(item);
  return shapeMeta(item);
};

export const withLightingMeta = (item: LibraryItemDef, mode: LightingMode): LibraryItemDef => {
  const meta = getMeta(item, mode);
  const axisPatch = lightTypeAxisPatch(item, meta);
  const name = cleanName(item.name);
  const isMood = mode === 'MOOD';
  const eraMode = inferEraMode(item, meta, axisPatch);
  const patchedEras = toStringList(axisPatch.compatibleEras);
  const categoryFit = mergeCategoryFit(lightingCategoryFitById[item.id], item.categoryFit);
  return {
    ...item,
    ...axisPatch,
    group: cleanGroup(item.group),
    def: item.def || `${isMood ? '光影预设包' : mode === 'TYPE' ? '光源锚点' : '光影细项'}：${name}。它只控制光源、明暗、投射关系、空气可见性和阴影纹理，不替代时空、主体、媒介或取景协议。`,
    defEn: item.defEn || `${isMood ? 'Lighting preset pack' : mode === 'TYPE' ? 'Light source anchor' : 'Lighting detail'}: ${name}. It only controls source, contrast, projection relation, visible air, and shadow texture without replacing spacetime, subject, medium, or framing protocol.`,
    ontologyLevel: item.ontologyLevel || meta.surrealLevel,
    eras: item.eras || (patchedEras.length > 0 ? patchedEras : meta.eras),
    eraMode,
    eraStrictness: item.eraStrictness || meta.eraStrictness,
    anachronismRisk: item.anachronismRisk || meta.anachronismRisk,
    eraTranslation: item.eraTranslation || (isMood
      ? '光影基调不绑定世界时代，只控制明暗、反差、空气和情绪压强。'
      : mode === 'TYPE'
        ? '光源若与当前时代不匹配，折译为同构的本时代光源、反射、燃烧、窗口光、仪式光或设备痕迹。'
        : '投影、方向和形状优先折译为本场域内可解释的阴影、遮挡、反光或局部光学痕迹。'),
    eraTranslationEn: item.eraTranslationEn || (isMood
      ? 'Lighting mood does not bind the world era; it only controls brightness, contrast, air visibility, and emotional pressure.'
      : mode === 'TYPE'
        ? 'If the light source does not match the current era, translate it into an equivalent period-valid source, reflection, flame, window light, ritual light, or device trace.'
        : 'Projection, direction, and shape translate first into explainable shadow, occlusion, reflection, or local optical trace inside the field.'),
    risk: item.risk || meta.risk,
    affects: item.affects || ['lightingAtmosphere', 'paletteStrategy', 'compositionScene', 'otherDetails'],
    controls: item.controls || ['light source', 'contrast', 'shadow edge', 'visibility', 'projection texture', 'emotional pressure'],
    forbids: item.forbids || ['replacing spacetime coordinate', 'replacing subject identity', 'replacing visual medium', 'overriding framing protocol'],
    absorptionRule: item.absorptionRule || (isMood
      ? '光影基调是 C09 的第一行预设包。随机时通常只选 1 个，用来决定整张图的明暗、硬软、反差和情绪压强；其他光影细项必须服从它。'
      : mode === 'TYPE'
        ? '光源锚点必须先通过时空合法性筛选。若当前坐标不支持该光源，L1/L2 必须折译为同构的本时代光源、反光或材料痕迹；L3 可做局部异常；L4/L5 才可字面成立。'
        : '光影细项可叠加，但必须服务光影基调、场域和主体可读性。若与时空、天气或媒介冲突，优先降级为局部反光、投影痕迹、设备痕迹或直接移除。'),
    absorptionRuleEn: item.absorptionRuleEn || (isMood
      ? 'Lighting mood is the first-row C09 preset pack. Random usually selects one to set overall brightness, softness, contrast, and emotional pressure; other lighting details must obey it.'
      : mode === 'TYPE'
        ? 'Light source anchors must pass spacetime legality first. If the current coordinate does not support the source, L1/L2 must translate it into an equivalent period-valid light, reflection, or material trace; L3 may keep it as a local anomaly; only L4/L5 may keep it literally.'
        : 'Lighting details may stack, but must serve the lighting mood, field, and subject readability. If they conflict with spacetime, weather, or medium, downgrade them to local reflection, projection trace, device evidence, or remove them.'),
    tags: [
      ...(item.tags || []),
      'lighting_atmosphere',
      meta.lightingMode,
      meta.lightingKind,
      meta.lightAnchor,
      `surreal_l${meta.surrealLevel}`
    ],
    realityTags: [...new Set([...(item.realityTags || []), ...meta.realityTags])],
    styleTags: [...new Set([...(item.styleTags || []), ...meta.styleTags])],
    timeTags: [...new Set([...(item.timeTags || []), ...meta.timeTags])],
    categoryFit,
    lightingMode: meta.lightingMode,
    lightingKind: meta.lightingKind,
    lightAnchor: meta.lightAnchor,
    spacetimeAnchor: meta.spacetimeAnchor,
    realityAnchor: meta.realityAnchor,
    surrealLevel: meta.surrealLevel,
    randomAxis: isMood ? 'lighting_mood' : 'lighting_detail',
    randomDominance: isMood ? 'lighting_preset' : 'detail_parameter',
    randomRole: isMood ? 'c09_primary_lighting_axis' : meta.lightingMode,
    compatibleRandomModes: isMood ? ['conservative', 'balanced', 'fantasy', 'global_fusion'] : ['balanced', 'fantasy', 'global_fusion'],
    conflictTags: axisPatch.conflictTags || meta.conflictTags,
    selectionRule: isMood
      ? '光影预设包默认单选。它决定 C09 主调，细项只能补充光源、方向或投影形状，不得另起一套相反光影。'
      : '光影细项最多按 1 个光源 + 1 个方向 + 1 个投影形状组合；若与主光影基调、天气/粒子或时空锚冲突，宁愿少选。'
  } as LibraryItemDef;
};
