import { LibraryItemDef } from '../../../types';

type FaceExpressionMode = 'FACE_FEATURE' | 'MAKEUP' | 'EXPRESSION';
type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type ManualAxisMeta = {
  eras: readonly string[];
  eraMode?: LibraryItemDef['eraMode'];
  eraStrictness?: LibraryItemDef['eraStrictness'];
  anachronismRisk?: LibraryItemDef['anachronismRisk'];
  ontologyLevel?: LibraryItemDef['ontologyLevel'];
  realityTags: readonly string[];
  categoryFit: CategoryFit;
};

const allEras = [
  'primitive',
  'mythic',
  'slave',
  'feudal',
  'early_modern',
  'industrial',
  'modern',
  'contemporary',
  'near_future',
  'far_future'
] as const;

const preModernToFuture = ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'] as const;
const earlyModernToFuture = ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'] as const;
const industrialToFuture = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'] as const;
const modernToFuture = ['modern', 'contemporary', 'near_future', 'far_future'] as const;
const contemporaryToFuture = ['contemporary', 'near_future', 'far_future'] as const;
const futureOnly = ['near_future', 'far_future'] as const;
const mythicOrFuture = ['mythic', 'near_future', 'far_future'] as const;
const mythicPreModern = ['mythic', 'slave', 'feudal', 'early_modern'] as const;
const mythicAll = ['mythic', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'] as const;

const emptyFit: CategoryFit = { unlisted: 'none', strong: [], usable: [], fusion: [], weak: [], exclude: [] };

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

const faceReal = ['human_face', 'face_structure', 'physical', 'realistic'] as const;
const faceMark = ['human_face', 'face_structure', 'physical', 'realistic', 'identity_detail'] as const;
const faceStyle = ['human_face', 'face_structure', 'physical', 'stylized', 'semi_real'] as const;
const faceTech = ['human_face', 'face_structure', 'physical', 'technological', 'semi_surreal'] as const;
const faceMyth = ['human_face', 'face_structure', 'physical', 'mythic', 'semi_surreal'] as const;
const faceSurreal = ['human_face', 'face_structure', 'physical', 'stylized', 'semi_surreal', 'uncanny'] as const;

const makeupReal = ['human_face', 'cosmetic', 'surface_adornment', 'physical', 'realistic'] as const;
const makeupStyle = ['human_face', 'cosmetic', 'surface_adornment', 'physical', 'stylized', 'semi_real'] as const;
const makeupRitual = ['human_face', 'cosmetic', 'surface_adornment', 'physical', 'ritual', 'stylized', 'semi_real'] as const;
const makeupTech = ['human_face', 'cosmetic', 'surface_adornment', 'technological', 'stylized', 'semi_surreal'] as const;
const makeupBio = ['human_face', 'cosmetic', 'surface_adornment', 'biological', 'stylized', 'semi_surreal'] as const;
const makeupAdult = ['human_face', 'cosmetic', 'surface_adornment', 'physical', 'realistic', 'adult_tension'] as const;

const expressionReal = ['human_face', 'human_expression', 'emotion_state', 'physical', 'realistic'] as const;
const expressionStylized = ['human_face', 'human_expression', 'emotion_state', 'physical', 'stylized', 'semi_real'] as const;
const expressionUncanny = ['human_face', 'human_expression', 'emotion_state', 'physical', 'stylized', 'semi_surreal', 'uncanny'] as const;
const expressionAdult = ['human_face', 'human_expression', 'emotion_state', 'physical', 'realistic', 'adult_tension'] as const;
const expressionAdultStylized = ['human_face', 'human_expression', 'emotion_state', 'physical', 'stylized', 'semi_surreal', 'adult_tension'] as const;

const universal = (
  realityTags: readonly string[],
  categoryFit: CategoryFit = emptyFit,
  ontologyLevel: LibraryItemDef['ontologyLevel'] = 1
): ManualAxisMeta => ({
  eras: allEras,
  eraMode: 'universal',
  eraStrictness: 'none',
  anachronismRisk: 'low',
  ontologyLevel,
  realityTags,
  categoryFit: normalizeCategoryFit(categoryFit)
});

const specific = (
  eras: readonly string[],
  realityTags: readonly string[],
  categoryFit: CategoryFit = emptyFit,
  ontologyLevel: LibraryItemDef['ontologyLevel'] = 1,
  anachronismRisk: LibraryItemDef['anachronismRisk'] = 'medium'
): ManualAxisMeta => ({
  eras,
  eraMode: 'specific',
  eraStrictness: 'soft',
  anachronismRisk,
  ontologyLevel,
  realityTags,
  categoryFit: normalizeCategoryFit(categoryFit)
});

const manualFaceFeatureMeta: Record<string, ManualAxisMeta> = {
  cd_face_oval_face: universal(faceReal, { usable: ['romance', 'real_professional', 'court', 'fashion_idol'] }),
  cd_face_round_face: universal(faceReal, { usable: ['romance', 'urban_life', 'ecological'] }),
  cd_face_long_face: universal(faceReal, { usable: ['historical', 'court', 'religious_ritual'] }),
  cd_face_square_face: universal(faceReal, { usable: ['war_military', 'real_professional', 'noir_crime'] }),
  cd_face_heart_face: universal(faceReal, { usable: ['romance', 'fashion_idol'] }),
  cd_face_diamond_face: universal(faceReal, { usable: ['fashion_idol', 'court', 'urban_life'] }),
  cd_face_small_face: universal(faceReal, { usable: ['romance', 'fashion_idol', 'urban_life'], fusion: ['posthuman'] }),
  cd_face_broad_face: universal(faceReal, { usable: ['war_military', 'real_professional', 'ecological'] }),
  cd_face_bony_face: universal(faceReal, { usable: ['dark_fantasy', 'horror', 'wasteland', 'xianxia'] }),
  cd_face_fleshy_face: universal(faceReal, { usable: ['romance', 'urban_life', 'court'] }),

  cd_face_high_cheekbones: universal(faceReal, { usable: ['fashion_idol', 'court', 'noir_crime', 'historical'] }),
  cd_face_wide_cheekbones: universal(faceReal, { usable: ['war_military', 'wasteland', 'adventure', 'ecological'] }),
  cd_face_soft_cheekbones: universal(faceReal, { usable: ['romance', 'court', 'religious_ritual'] }),
  cd_face_strong_brow_bone: universal(faceReal, { usable: ['war_military', 'wuxia', 'dark_fantasy', 'noir_crime'] }),
  cd_face_smooth_brow_bone: universal(faceReal, { usable: ['romance', 'fashion_idol', 'real_professional'] }),
  cd_face_deep_eye_sockets: universal(faceReal, { usable: ['noir_crime', 'historical', 'dark_fantasy', 'xianxia'] }),
  cd_face_shallow_eye_sockets: universal(faceReal, { usable: ['romance', 'fashion_idol', 'urban_life'] }),
  cd_face_sharp_jawline: universal(faceReal, { usable: ['war_military', 'noir_crime', 'fashion_idol', 'court'] }),
  cd_face_soft_jawline: universal(faceReal, { usable: ['romance', 'real_professional', 'urban_life'] }),
  cd_face_cleft_chin: universal(faceReal, { usable: ['real_professional', 'war_military', 'historical'] }),
  cd_face_pointed_chin: universal(faceReal, { usable: ['xianxia', 'fantasy', 'court', 'fashion_idol'] }),
  cd_face_heavy_chin: universal(faceReal, { usable: ['war_military', 'wasteland', 'historical'] }),

  cd_face_high_nose_bridge: universal(faceReal, { usable: ['court', 'historical', 'fashion_idol'] }),
  cd_face_low_nose_bridge: universal(faceReal, { usable: ['urban_life', 'real_professional', 'ecological'] }),
  cd_face_straight_nose: universal(faceReal, { usable: ['real_professional', 'historical', 'fashion_idol'] }),
  cd_face_roman_nose: universal(faceReal, { usable: ['historical', 'court', 'war_military'] }),
  cd_face_aquiline_nose: universal(faceReal, { usable: ['noir_crime', 'court', 'dark_fantasy', 'historical'] }),
  cd_face_button_nose: universal(faceReal, { usable: ['romance', 'urban_life', 'fashion_idol'] }),
  cd_face_round_nose_tip: universal(faceReal, { usable: ['romance', 'urban_life', 'ecological'] }),
  cd_face_wide_nostrils: universal(faceReal, { usable: ['war_military', 'adventure', 'ecological'] }),
  cd_face_crooked_nose: universal(faceReal, { usable: ['noir_crime', 'wasteland', 'adventure', 'war_military'] }),

  cd_face_thin_lips: universal(faceReal, { usable: ['noir_crime', 'court', 'real_professional'] }),
  cd_face_full_lips: universal(faceReal, { usable: ['romance', 'fashion_idol', 'urban_life', 'boudoir_aesthetic'] }),
  cd_face_sharp_cupid_bow: universal(faceReal, { usable: ['romance', 'fashion_idol', 'court'] }),
  cd_face_soft_lip_line: universal(faceReal, { usable: ['romance', 'urban_life', 'real_professional'] }),
  cd_face_small_mouth: universal(faceReal, { usable: ['romance', 'court', 'fashion_idol'] }),
  cd_face_wide_mouth: universal(faceReal, { usable: ['adventure', 'urban_life', 'horror'] }),
  cd_face_upturned_mouth: universal(faceReal, { usable: ['romance', 'fashion_idol', 'urban_life'] }),
  cd_face_downturned_mouth: universal(faceReal, { usable: ['noir_crime', 'dark_fantasy', 'historical'] }),
  cd_face_tooth_gap: universal(faceReal, { usable: ['urban_life', 'romance', 'ecological'] }),
  cd_face_canine_teeth: universal(faceReal, { usable: ['fantasy', 'dark_fantasy', 'horror', 'xianxia'] }),

  cd_face_balanced_thirds: universal(faceReal, { usable: ['real_professional', 'court', 'fashion_idol'] }),
  cd_face_long_midface: universal(faceReal, { usable: ['historical', 'court', 'noir_crime'] }),
  cd_face_short_midface: universal(faceReal, { usable: ['romance', 'urban_life', 'fashion_idol'] }),
  cd_face_long_lower_face: universal(faceReal, { usable: ['war_military', 'historical', 'real_professional'] }),
  cd_face_compact_features: universal(faceReal, { usable: ['real_professional', 'fashion_idol'], fusion: ['posthuman', 'abstract'] }),
  cd_face_spread_features: universal(faceReal, { usable: ['ecological', 'adventure', 'real_professional'] }),
  cd_face_close_brow_eye: universal(faceReal, { usable: ['noir_crime', 'dark_fantasy', 'war_military'] }),
  cd_face_wide_brow_eye: universal(faceReal, { usable: ['romance', 'surreal', 'fashion_idol'] }),

  cd_face_dimples: universal(faceMark, { usable: ['romance', 'urban_life', 'fashion_idol'] }),
  cd_face_single_dimple: universal(faceMark, { usable: ['romance', 'urban_life', 'noir_crime'] }),
  cd_face_beauty_mark: universal(faceMark, { usable: ['romance', 'fashion_idol', 'historical', 'boudoir_aesthetic'] }),
  cd_face_tear_mole: universal(faceMark, { usable: ['romance', 'fashion_idol', 'court'], fusion: ['dark_fantasy'] }),
  cd_face_nose_bridge_mole: universal(faceMark, { usable: ['romance', 'urban_life', 'fashion_idol'] }),
  cd_face_freckles_across_nose: universal(faceMark, { usable: ['ecological', 'romance', 'adventure', 'urban_life'] }),
  cd_face_asymmetric_face: universal(faceMark, { usable: ['noir_crime', 'wasteland', 'real_professional'], fusion: ['surreal'] }),
  cd_face_old_face_scar: universal(faceMark, { strong: ['war_military', 'wasteland'], usable: ['wuxia', 'adventure', 'noir_crime'] }),
  cd_face_broken_brow: universal(faceMark, { strong: ['noir_crime', 'war_military'], usable: ['wuxia', 'wasteland'] }),

  cd_face_cinematic_face: universal(faceStyle, { usable: ['romance', 'noir_crime', 'urban_life', 'fashion_idol'] }, 2),
  cd_face_model_face: universal(faceStyle, { strong: ['fashion_idol'], usable: ['urban_life', 'boudoir_aesthetic'] }, 2),
  cd_face_idol_face: universal(faceStyle, { strong: ['fashion_idol'], usable: ['romance', 'urban_life'] }, 2),
  cd_face_aristocratic_face: universal(faceStyle, { strong: ['court'], usable: ['historical', 'dark_fantasy', 'romance'] }, 2),
  cd_face_street_face: universal(faceStyle, { strong: ['urban_life'], usable: ['noir_crime', 'wasteland', 'fashion_idol'] }, 2),
  cd_face_fox_like_face: universal(faceStyle, { usable: ['wuxia', 'xianxia', 'noir_crime', 'fashion_idol'], fusion: ['fantasy'] }, 2),
  cd_face_cat_like_face: universal(faceStyle, { usable: ['romance', 'fashion_idol', 'surreal', 'boudoir_aesthetic'], fusion: ['fantasy'] }, 2),
  cd_face_dog_like_face: universal(faceStyle, { usable: ['romance', 'adventure', 'urban_life', 'ecological'], fusion: ['fantasy'] }, 2),

  cd_face_metal_face_plate: specific(futureOnly, faceTech, { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['biopunk'], weak: ['historical', 'court'] }, 3, 'high'),
  cd_face_ceramic_mask_face: specific(mythicAll, faceSurreal, { strong: ['surreal'], usable: ['horror', 'dark_fantasy', 'abstract', 'religious_ritual'], fusion: ['court'] }, 3, 'high'),
  cd_face_subdermal_face_lines: specific(futureOnly, faceTech, { strong: ['cyberpunk', 'science_fiction', 'biopunk', 'posthuman'], fusion: ['dark_fantasy'], weak: ['historical'] }, 3, 'high'),
  cd_face_small_horns_forehead: specific(mythicOrFuture, faceMyth, { strong: ['fantasy', 'dark_fantasy'], usable: ['xianxia', 'body_horror'], fusion: ['ecological', 'boudoir_aesthetic'], weak: ['real_professional'] }, 4, 'high'),
  cd_face_animalized_nose_mouth: specific(mythicOrFuture, faceMyth, { strong: ['fantasy', 'body_horror'], usable: ['biopunk', 'ecological', 'horror'], fusion: ['xianxia'], weak: ['real_professional'] }, 4, 'high'),
  cd_face_cracked_face_surface: specific(mythicOrFuture, faceSurreal, { strong: ['dark_fantasy', 'body_horror'], usable: ['horror', 'xianxia', 'surreal'], fusion: ['science_fiction'], weak: ['urban_life'] }, 4, 'high')
};

const manualMakeupMeta: Record<string, ManualAxisMeta> = {
  cd_makeup_no_makeup: universal(makeupReal, { usable: ['real_professional', 'urban_life', 'romance', 'ecological'] }),
  cd_makeup_clean_base: specific(earlyModernToFuture, makeupReal, { usable: ['real_professional', 'urban_life', 'fashion_idol', 'romance'] }),
  cd_makeup_natural_blush: specific(preModernToFuture, makeupReal, { usable: ['romance', 'urban_life', 'fashion_idol'] }),
  cd_makeup_matte_makeup: specific(industrialToFuture, makeupReal, { usable: ['fashion_idol', 'real_professional', 'urban_life', 'noir_crime'] }),
  cd_makeup_glossy_makeup: specific(modernToFuture, makeupReal, { usable: ['fashion_idol', 'romance', 'boudoir_aesthetic', 'urban_life'] }),
  cd_makeup_red_lip: specific(earlyModernToFuture, makeupReal, { usable: ['romance', 'fashion_idol', 'court', 'noir_crime', 'boudoir_aesthetic'] }),
  cd_makeup_dark_lip: specific(industrialToFuture, makeupStyle, { usable: ['noir_crime', 'fashion_idol', 'dark_fantasy', 'horror', 'boudoir_aesthetic'] }, 2),
  cd_makeup_nude_lip: specific(modernToFuture, makeupReal, { usable: ['real_professional', 'urban_life', 'fashion_idol', 'romance', 'boudoir_aesthetic'] }),
  cd_makeup_cat_eyeliner: specific(preModernToFuture, makeupStyle, { usable: ['fashion_idol', 'romance', 'noir_crime', 'boudoir_aesthetic'] }, 2),
  cd_makeup_smokey_eye: specific(industrialToFuture, makeupStyle, { usable: ['fashion_idol', 'noir_crime', 'romance', 'boudoir_aesthetic'], fusion: ['dark_fantasy'] }, 2),
  cd_makeup_bleached_brows: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'urban_life', 'surreal', 'posthuman'] }, 2),

  cd_makeup_runway_graphic: specific(modernToFuture, makeupStyle, { strong: ['fashion_idol'], usable: ['surreal', 'abstract', 'urban_life'] }, 2),
  cd_makeup_goth_makeup: specific(industrialToFuture, makeupStyle, { strong: ['dark_fantasy'], usable: ['fashion_idol', 'horror', 'noir_crime', 'boudoir_aesthetic'] }, 2),
  cd_makeup_idol_stage_makeup: specific(modernToFuture, makeupStyle, { strong: ['fashion_idol'], usable: ['romance', 'urban_life'] }, 2),
  cd_makeup_editorial_jewel: specific(modernToFuture, makeupStyle, { strong: ['fashion_idol'], usable: ['court', 'surreal', 'boudoir_aesthetic'] }, 2),
  cd_makeup_avant_garde_makeup: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'surreal', 'abstract', 'posthuman'] }, 3),

  cd_makeup_kabuki_makeup: specific(['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'], makeupRitual, { strong: ['historical', 'religious_ritual'], usable: ['court', 'fashion_idol'], fusion: ['dark_fantasy'] }, 2),
  cd_makeup_opera_makeup: specific(['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'], makeupRitual, { strong: ['historical', 'religious_ritual'], usable: ['wuxia', 'xianxia', 'court'], fusion: ['dark_fantasy'] }, 2),
  cd_makeup_tribal_paint: specific(['primitive', 'mythic', 'slave', 'feudal', 'early_modern', 'contemporary'], makeupRitual, { strong: ['religious_ritual', 'ecological'], usable: ['fantasy', 'adventure'], fusion: ['dark_fantasy'] }, 2),
  cd_makeup_ritual_ash_face: specific(mythicPreModern, makeupRitual, { strong: ['religious_ritual', 'dark_fantasy'], usable: ['xianxia', 'horror', 'mythic_epic'], fusion: ['wuxia'] }, 2),

  cd_makeup_cyber_makeup: specific(futureOnly, makeupTech, { strong: ['cyberpunk', 'science_fiction'], usable: ['posthuman', 'fashion_idol'] }, 3, 'high'),
  cd_makeup_hologram_makeup: specific(futureOnly, makeupTech, { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'fashion_idol', 'surreal'] }, 3, 'high'),
  cd_makeup_biolum_face_paint: specific(mythicOrFuture, makeupBio, { strong: ['biopunk'], usable: ['fantasy', 'ecological', 'xianxia'], fusion: ['science_fiction'] }, 3, 'high'),

  cd_makeup_glass_skin_makeup: specific(modernToFuture, makeupReal, { usable: ['fashion_idol', 'romance', 'urban_life', 'boudoir_aesthetic'] }),
  cd_makeup_sharp_contour: specific(modernToFuture, makeupReal, { usable: ['fashion_idol', 'noir_crime', 'court', 'boudoir_aesthetic'] }),
  cd_makeup_editorial_blush: specific(modernToFuture, makeupStyle, { strong: ['fashion_idol'], usable: ['romance', 'surreal'] }, 2),
  cd_makeup_under_eye_blush: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'romance', 'urban_life'] }, 2),
  cd_makeup_laminated_brows: specific(contemporaryToFuture, makeupReal, { usable: ['fashion_idol', 'urban_life', 'real_professional'] }),
  cd_makeup_razor_brows: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'noir_crime', 'cyberpunk'] }, 2),
  cd_makeup_thin_90s_brows: specific(['modern', 'contemporary'], makeupReal, { usable: ['fashion_idol', 'urban_life', 'noir_crime'] }),
  cd_makeup_overlined_lips: specific(modernToFuture, makeupAdult, { usable: ['fashion_idol', 'romance', 'boudoir_aesthetic', 'urban_life'] }),
  cd_makeup_ombre_lip: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'romance', 'urban_life'] }, 2),
  cd_makeup_metallic_lip: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'cyberpunk', 'posthuman', 'boudoir_aesthetic'] }, 2),
  cd_makeup_black_lip_liner: specific(industrialToFuture, makeupStyle, { usable: ['fashion_idol', 'noir_crime', 'dark_fantasy', 'boudoir_aesthetic'] }, 2),
  cd_makeup_lip_oil_gloss: specific(contemporaryToFuture, makeupAdult, { usable: ['fashion_idol', 'romance', 'boudoir_aesthetic', 'urban_life'] }),

  cd_makeup_runway_white_base: specific(modernToFuture, makeupStyle, { strong: ['fashion_idol'], usable: ['surreal', 'abstract', 'horror'] }, 2),
  cd_makeup_negative_space_liner: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'surreal', 'abstract'] }, 2),
  cd_makeup_floating_eyeliner: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'surreal', 'posthuman'] }, 2),
  cd_makeup_lower_lash_graphic: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'urban_life', 'surreal'] }, 2),
  cd_makeup_pearl_face_dots: specific(earlyModernToFuture, makeupStyle, { usable: ['fashion_idol', 'court', 'romance', 'boudoir_aesthetic'] }, 2),
  cd_makeup_crystal_tears: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'romance', 'surreal', 'dark_fantasy'] }, 2),
  cd_makeup_gold_inner_corner: specific(preModernToFuture, makeupStyle, { usable: ['fashion_idol', 'court', 'religious_ritual', 'romance'] }, 2),
  cd_makeup_silver_face_grid: specific(modernToFuture, makeupTech, { usable: ['fashion_idol', 'science_fiction', 'cyberpunk', 'abstract'] }, 3),

  cd_makeup_afterparty_wet_makeup: specific(modernToFuture, makeupAdult, { usable: ['urban_life', 'fashion_idol', 'boudoir_aesthetic', 'noir_crime'] }),
  cd_makeup_smeared_mascara: specific(industrialToFuture, makeupReal, { usable: ['noir_crime', 'romance', 'horror', 'urban_life', 'boudoir_aesthetic'] }),
  cd_makeup_slept_in_makeup: specific(industrialToFuture, makeupReal, { usable: ['urban_life', 'noir_crime', 'romance', 'boudoir_aesthetic'] }),
  cd_makeup_punk_black_liner: specific(industrialToFuture, makeupStyle, { usable: ['fashion_idol', 'urban_life', 'noir_crime', 'wasteland'] }, 2),
  cd_makeup_visual_kei_makeup: specific(['modern', 'contemporary'], makeupStyle, { strong: ['fashion_idol'], usable: ['dark_fantasy', 'urban_life'] }, 2),
  cd_makeup_gyaru_makeup: specific(['modern', 'contemporary'], makeupStyle, { strong: ['fashion_idol'], usable: ['urban_life', 'romance'] }, 2),
  cd_makeup_egirl_blush: specific(['contemporary', 'near_future'], makeupStyle, { strong: ['fashion_idol'], usable: ['urban_life', 'romance', 'cyberpunk'] }, 2),
  cd_makeup_doll_blush: specific(modernToFuture, makeupStyle, { usable: ['fashion_idol', 'romance', 'surreal', 'horror'] }, 2),
  cd_makeup_drag_contour: specific(['modern', 'contemporary', 'near_future'], makeupStyle, { strong: ['fashion_idol'], usable: ['urban_life', 'boudoir_aesthetic', 'surreal'] }, 2),
  cd_makeup_cabaret_makeup: specific(['industrial', 'modern', 'contemporary'], makeupAdult, { usable: ['fashion_idol', 'boudoir_aesthetic', 'urban_life', 'noir_crime'] }),
  cd_makeup_burlesque_mole: specific(['industrial', 'modern', 'contemporary'], makeupAdult, { usable: ['boudoir_aesthetic', 'fashion_idol', 'romance', 'historical'] }),
  cd_makeup_rave_uv_makeup: specific(['modern', 'contemporary', 'near_future'], makeupTech, { strong: ['fashion_idol'], usable: ['urban_life', 'cyberpunk', 'surreal'] }, 3),
  cd_makeup_club_glitter_sweat: specific(['modern', 'contemporary', 'near_future'], makeupAdult, { usable: ['urban_life', 'fashion_idol', 'boudoir_aesthetic', 'cyberpunk'] }),
  cd_makeup_grunge_smudge: specific(['modern', 'contemporary'], makeupReal, { usable: ['urban_life', 'noir_crime', 'wasteland', 'fashion_idol'] }),
  cd_makeup_clown_blush: specific(['industrial', 'modern', 'contemporary', 'near_future'], makeupStyle, { usable: ['fashion_idol', 'horror', 'surreal', 'urban_life'] }, 2),
  cd_makeup_mime_face: specific(['industrial', 'modern', 'contemporary'], makeupStyle, { usable: ['surreal', 'abstract', 'fashion_idol', 'horror'] }, 2),
  cd_makeup_corpse_paint: specific(['modern', 'contemporary'], makeupStyle, { strong: ['horror'], usable: ['dark_fantasy', 'fashion_idol', 'body_horror'] }, 2),

  cd_makeup_priestess_forehead_mark: specific(mythicPreModern, makeupRitual, { strong: ['religious_ritual', 'mythic_epic'], usable: ['xianxia', 'fantasy', 'court'] }, 2),
  cd_makeup_bridal_henna_face: specific(['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'], makeupRitual, { strong: ['romance', 'religious_ritual'], usable: ['historical', 'court'] }, 2),
  cd_makeup_ash_cross_forehead: specific(['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'], makeupRitual, { strong: ['religious_ritual'], usable: ['historical', 'dark_fantasy', 'horror'] }, 2),
  cd_makeup_saffron_tilak: specific(['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary'], makeupRitual, { strong: ['religious_ritual'], usable: ['mythic_epic', 'xianxia', 'historical'] }, 2),
  cd_makeup_nomad_kohl: specific(['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary'], makeupRitual, { usable: ['adventure', 'historical', 'ecological', 'religious_ritual'] }, 2),
  cd_makeup_warrior_eye_black: specific(['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'], makeupRitual, { strong: ['war_military'], usable: ['wuxia', 'adventure', 'wasteland'] }, 2),
  cd_makeup_cyber_interface_dots: specific(futureOnly, makeupTech, { strong: ['cyberpunk', 'science_fiction'], usable: ['posthuman', 'fashion_idol'] }, 3, 'high'),
  cd_makeup_ar_scan_marks: specific(['contemporary', 'near_future', 'far_future'], makeupTech, { strong: ['science_fiction', 'cyberpunk'], usable: ['real_professional', 'posthuman'] }, 3, 'high'),
  cd_makeup_biotech_sample_marks: specific(futureOnly, makeupBio, { strong: ['biopunk'], usable: ['body_horror', 'science_fiction', 'posthuman'] }, 3, 'high'),
  cd_makeup_holographic_tears: specific(futureOnly, makeupTech, { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'fashion_idol', 'surreal'] }, 3, 'high'),
  cd_makeup_forbidden_lip_stain: specific(mythicAll, makeupStyle, { strong: ['dark_fantasy'], usable: ['religious_ritual', 'xianxia', 'boudoir_aesthetic'], fusion: ['romance'] }, 3, 'high'),
  cd_makeup_living_ink_makeup: specific(mythicOrFuture, makeupBio, { strong: ['xianxia', 'fantasy'], usable: ['biopunk', 'ecological', 'surreal'] }, 3, 'high')
};

const manualExpressionMeta: Record<string, ManualAxisMeta> = {
  cd_expr_neutral: universal(expressionReal, { usable: ['real_professional', 'historical', 'urban_life', 'court'] }),
  cd_expr_blank_runway: universal(expressionStylized, { strong: ['fashion_idol'], usable: ['urban_life', 'surreal'] }, 2),
  cd_expr_deadpan: universal(expressionReal, { usable: ['noir_crime', 'real_professional', 'urban_life'] }),
  cd_expr_restrained_smile: universal(expressionReal, { usable: ['court', 'real_professional', 'romance', 'historical'] }),
  cd_expr_polite_mask: universal(expressionReal, { usable: ['court', 'real_professional', 'noir_crime', 'urban_life'] }),
  cd_expr_serene: universal(expressionReal, { usable: ['religious_ritual', 'xianxia', 'romance', 'mythic_epic'] }),
  cd_expr_distant_gaze: universal(expressionReal, { usable: ['noir_crime', 'historical', 'romance', 'surreal'] }),
  cd_expr_soft_melancholy: universal(expressionReal, { usable: ['romance', 'historical', 'noir_crime', 'dark_fantasy'] }),
  cd_expr_official_composure: universal(expressionReal, { strong: ['real_professional'], usable: ['court', 'historical', 'war_military'] }),
  cd_expr_withheld_answer: universal(expressionReal, { usable: ['noir_crime', 'court', 'real_professional', 'romance'] }),
  cd_expr_camera_aware_stillness: universal(expressionStylized, { usable: ['fashion_idol', 'urban_life', 'boudoir_aesthetic', 'surreal'] }, 2),

  cd_expr_gentle_smile: universal(expressionReal, { strong: ['romance'], usable: ['urban_life', 'real_professional', 'religious_ritual'] }),
  cd_expr_bright_smile: universal(expressionReal, { usable: ['romance', 'urban_life', 'fashion_idol', 'adventure'] }),
  cd_expr_relieved: universal(expressionReal, { usable: ['romance', 'war_military', 'adventure', 'wasteland'] }),
  cd_expr_hopeful: universal(expressionReal, { usable: ['romance', 'adventure', 'mythic_epic', 'wasteland'] }),
  cd_expr_playful: universal(expressionReal, { usable: ['romance', 'urban_life', 'fashion_idol', 'adventure'] }),
  cd_expr_smizing: universal(expressionReal, { usable: ['fashion_idol', 'romance', 'boudoir_aesthetic', 'urban_life'] }),
  cd_expr_proud: universal(expressionReal, { usable: ['war_military', 'court', 'fashion_idol', 'adventure'] }),
  cd_expr_dreamy: universal(expressionStylized, { usable: ['romance', 'surreal', 'xianxia', 'fashion_idol'] }, 2),
  cd_expr_approval_seeking_smile: universal(expressionReal, { usable: ['romance', 'urban_life', 'real_professional', 'boudoir_aesthetic'] }),
  cd_expr_fanservice_wink: specific(['modern', 'contemporary', 'near_future'], expressionStylized, { strong: ['fashion_idol'], usable: ['romance', 'boudoir_aesthetic', 'urban_life'] }, 2),
  cd_expr_social_laughter: universal(expressionReal, { usable: ['urban_life', 'romance', 'real_professional', 'fashion_idol'] }),

  cd_expr_anger: universal(expressionReal, { usable: ['war_military', 'wuxia', 'noir_crime', 'dark_fantasy'] }),
  cd_expr_quiet_rage: universal(expressionReal, { usable: ['noir_crime', 'wuxia', 'war_military', 'dark_fantasy'] }),
  cd_expr_sad: universal(expressionReal, { usable: ['romance', 'historical', 'urban_life', 'dark_fantasy'] }),
  cd_expr_tearful: universal(expressionReal, { usable: ['romance', 'historical', 'dark_fantasy', 'boudoir_aesthetic'] }),
  cd_expr_crying: universal(expressionReal, { usable: ['romance', 'war_military', 'wasteland', 'dark_fantasy'] }),
  cd_expr_fearful: universal(expressionReal, { usable: ['horror', 'dark_fantasy', 'war_military', 'wasteland'] }),
  cd_expr_pain: universal(expressionReal, { usable: ['war_military', 'horror', 'body_horror', 'wasteland'] }),
  cd_expr_despair: universal(expressionReal, { usable: ['dark_fantasy', 'horror', 'wasteland', 'romance'] }),
  cd_expr_judged_shame: universal(expressionReal, { usable: ['court', 'religious_ritual', 'romance', 'noir_crime'] }),
  cd_expr_suppressed_cry: universal(expressionReal, { usable: ['romance', 'court', 'war_military', 'real_professional'] }),
  cd_expr_public_embarrassment: universal(expressionReal, { usable: ['urban_life', 'real_professional', 'romance', 'fashion_idol'] }),

  cd_expr_smirk: universal(expressionReal, { usable: ['noir_crime', 'romance', 'fashion_idol', 'boudoir_aesthetic'] }),
  cd_expr_seductive_gaze: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol', 'noir_crime'] }),
  cd_expr_lip_bite: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol', 'urban_life'] }),
  cd_expr_blush: universal(expressionReal, { strong: ['romance'], usable: ['fashion_idol', 'boudoir_aesthetic', 'urban_life'] }),
  cd_expr_side_eye: universal(expressionReal, { usable: ['noir_crime', 'urban_life', 'court', 'fashion_idol'] }),
  cd_expr_pout: universal(expressionReal, { usable: ['romance', 'fashion_idol', 'urban_life', 'boudoir_aesthetic'] }),
  cd_expr_knowing_smile: universal(expressionReal, { usable: ['romance', 'noir_crime', 'court', 'boudoir_aesthetic'] }),
  cd_expr_bored_luxury: universal(expressionStylized, { usable: ['court', 'fashion_idol', 'boudoir_aesthetic', 'noir_crime'] }, 2),
  cd_expr_testing_boundary: universal(expressionAdult, { usable: ['romance', 'boudoir_aesthetic', 'noir_crime', 'fashion_idol'] }),
  cd_expr_secretly_amused: universal(expressionReal, { usable: ['romance', 'noir_crime', 'court', 'urban_life'] }),
  cd_expr_performative_innocence: universal(expressionStylized, { usable: ['romance', 'fashion_idol', 'boudoir_aesthetic', 'noir_crime'] }, 2),

  cd_expr_hollow_stare: universal(expressionUncanny, { strong: ['horror'], usable: ['dark_fantasy', 'surreal', 'wasteland'] }, 3),
  cd_expr_manic_smile: universal(expressionUncanny, { strong: ['horror'], usable: ['noir_crime', 'dark_fantasy', 'surreal'] }, 3),
  cd_expr_evil_smile: universal(expressionUncanny, { usable: ['dark_fantasy', 'horror', 'noir_crime', 'xianxia'] }, 3),
  cd_expr_possessed: specific(mythicOrFuture, expressionUncanny, { strong: ['horror', 'dark_fantasy'], usable: ['religious_ritual', 'xianxia', 'body_horror'], fusion: ['science_fiction'] }, 4, 'high'),
  cd_expr_drunk_flushed: specific(['industrial', 'modern', 'contemporary', 'near_future'], expressionAdult, { usable: ['urban_life', 'noir_crime', 'romance', 'boudoir_aesthetic'] }),
  cd_expr_ecstatic: universal(expressionStylized, { usable: ['religious_ritual', 'romance', 'surreal', 'fashion_idol'] }, 2),
  cd_expr_sleep_deprived: universal(expressionReal, { usable: ['real_professional', 'noir_crime', 'horror', 'urban_life'] }),
  cd_expr_doll_like_blank: universal(expressionUncanny, { strong: ['surreal'], usable: ['horror', 'fashion_idol', 'posthuman', 'abstract'] }, 3),
  cd_expr_glitching_smile: specific(futureOnly, expressionUncanny, { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'horror', 'surreal'] }, 4, 'high'),
  cd_expr_cult_devotion_face: universal(expressionUncanny, { strong: ['religious_ritual'], usable: ['horror', 'dark_fantasy', 'mythic_epic'] }, 3),
  cd_expr_overexposed_panic_smile: universal(expressionReal, { usable: ['urban_life', 'fashion_idol', 'horror', 'noir_crime'] }),

  cd_expr_submissive_downcast: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'court'], weak: ['war_military'] }),
  cd_expr_dominant_half_smile: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'noir_crime', 'court'] }),
  cd_expr_humiliated_blush: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'noir_crime'], weak: ['real_professional'] }),
  cd_expr_obedient_smile: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'court'], weak: ['war_military'] }),
  cd_expr_predatory_flirt: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['noir_crime', 'dark_fantasy', 'romance'] }),
  cd_expr_teary_desire: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'dark_fantasy', 'fashion_idol'] }),
  cd_expr_aroused_tension_face: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol'] }),
  cd_expr_bratty_defiance: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol', 'noir_crime'] }),
  cd_expr_please_praise_me: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol', 'urban_life'] }),
  cd_expr_untouchable_seduction: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol', 'court'] }),
  cd_expr_ahegao_stylized: specific(['modern', 'contemporary', 'near_future'], expressionAdultStylized, { strong: ['boudoir_aesthetic'], usable: ['fashion_idol', 'surreal'], weak: ['real_professional'] }, 3),
  cd_expr_afterparty_desire_face: specific(['modern', 'contemporary', 'near_future'], expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['urban_life', 'fashion_idol', 'noir_crime'] }),
  cd_expr_camera_tease: specific(['modern', 'contemporary', 'near_future'], expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['fashion_idol', 'romance', 'urban_life'] }),
  cd_expr_caught_desire: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'noir_crime', 'urban_life'] }),
  cd_expr_command_me_look: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'court', 'dark_fantasy'] }),
  cd_expr_devouring_gaze: universal(expressionAdultStylized, { strong: ['boudoir_aesthetic'], usable: ['dark_fantasy', 'noir_crime', 'horror'] }, 3),
  cd_expr_spoiled_petulance: universal(expressionAdult, { strong: ['boudoir_aesthetic'], usable: ['romance', 'fashion_idol', 'court'] })
};

const manualMetaByMode: Record<FaceExpressionMode, Record<string, ManualAxisMeta>> = {
  FACE_FEATURE: manualFaceFeatureMeta,
  MAKEUP: manualMakeupMeta,
  EXPRESSION: manualExpressionMeta
};

const modeFallbackRealityTags = (mode: FaceExpressionMode): readonly string[] => {
  if (mode === 'FACE_FEATURE') return faceReal;
  if (mode === 'MAKEUP') return makeupReal;
  return expressionReal;
};

export const withFaceExpressionAxisMeta = (
  mode: FaceExpressionMode,
  items: LibraryItemDef[]
): LibraryItemDef[] => items.map(item => {
  const manual = manualMetaByMode[mode][item.id || ''];
  const meta = manual || universal(modeFallbackRealityTags(mode), emptyFit);
  return {
    ...item,
    eras: meta.eras,
    eraMode: meta.eraMode || 'specific',
    eraStrictness: meta.eraStrictness || (meta.eraMode === 'universal' ? 'none' : 'soft'),
    anachronismRisk: meta.anachronismRisk || (meta.eraMode === 'universal' ? 'low' : 'medium'),
    ontologyLevel: meta.ontologyLevel || item.ontologyLevel || 1,
    realityTags: uniq(meta.realityTags),
    categoryFit: normalizeCategoryFit(meta.categoryFit)
  };
});
