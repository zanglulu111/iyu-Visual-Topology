import { LibraryItemDef } from '../../../types';

type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type CategoryUnlisted = NonNullable<CategoryFit['unlisted']>;
type EraMode = NonNullable<LibraryItemDef['eraMode']>;
type OntologyLevel = NonNullable<LibraryItemDef['ontologyLevel']>;

type AxisMeta = {
  eraMode: EraMode;
  eras: readonly string[];
  ontologyLevel: OntologyLevel;
  realityTags: readonly string[];
  categoryFit: CategoryFit;
};

const uniq = (values: readonly string[]) => [...new Set(values.filter(Boolean))];

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

const fit = (unlisted: CategoryUnlisted, patch: Omit<CategoryFit, 'unlisted'> = {}): CategoryFit => (
  normalizeCategoryFit({ unlisted, ...patch })
);

const axis = (
  eraMode: EraMode,
  eras: readonly string[],
  ontologyLevel: OntologyLevel,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): AxisMeta => ({ eraMode, eras, ontologyLevel, realityTags, categoryFit });

const specific = (
  eras: readonly string[],
  ontologyLevel: OntologyLevel,
  realityTags: readonly string[],
  categoryFit: CategoryFit
) => axis('specific', eras, ontologyLevel, realityTags, categoryFit);

const universal = (
  ontologyLevel: OntologyLevel,
  realityTags: readonly string[],
  categoryFit: CategoryFit
) => axis('universal', [], ontologyLevel, realityTags, categoryFit);

const byIds = (ids: readonly string[], meta: AxisMeta) => (
  Object.fromEntries(ids.map(id => [id, meta]))
);

const modern = ['modern', 'contemporary', 'near_future'];
const industrialModern = ['industrial', 'modern', 'contemporary'];
const earlyModernToModern = ['early_modern', 'industrial', 'modern'];
const future = ['near_future', 'far_future'];
const mythicFuture = ['mythic', 'timeless', 'far_future'];
const mythicOnly = ['mythic', 'timeless'];

const humanReal = ['realistic', 'physical', 'human_body'];
const groomingReal = ['realistic', 'physical', 'grooming'];
const facialHairReal = [...groomingReal, 'facial_hair'];
const eyeReal = [...humanReal, 'eye'];
const eyeStateReal = [...humanReal, 'eye_state'];
const fashionEye = ['realistic', 'stylized', 'physical', 'fashion', 'eye_styling'];
const stylizedEye = ['stylized', 'semi_surreal', 'face_style'];
const biologicalEye = ['non_realist', 'biological', 'creature', 'body_mutation'];
const techEye = ['semi_surreal', 'technological', 'synthetic', 'interface'];
const mysticEye = ['non_realist', 'mythic', 'magical', 'symbolic'];
const horrorEye = ['non_realist', 'horror_body', 'curse', 'body_mutation'];
const abstractEye = ['abstract', 'surreal', 'symbolic'];

const generalHumanFit = fit('usable');
const elegantFit = fit('usable', {
  strong: ['court', 'historical'],
  usable: ['wuxia', 'xianxia', 'romance', 'fashion_idol', 'noir_crime']
});
const charmFit = fit('usable', {
  strong: ['romance', 'fashion_idol', 'boudoir_aesthetic'],
  usable: ['urban_life', 'court', 'noir_crime'],
  fusion: ['dark_fantasy']
});
const combatFit = fit('usable', {
  strong: ['war_military', 'wuxia', 'noir_crime'],
  usable: ['adventure', 'historical', 'real_professional', 'wasteland'],
  fusion: ['cyberpunk', 'dark_fantasy']
});
const fashionFit = fit('none', {
  strong: ['fashion_idol', 'urban_life'],
  usable: ['romance', 'boudoir_aesthetic', 'noir_crime'],
  fusion: ['cyberpunk', 'surreal', 'fantasy'],
  weak: ['historical', 'court', 'wuxia', 'xianxia', 'real_professional']
});
const adultFashionFit = fit('none', {
  strong: ['fashion_idol', 'boudoir_aesthetic'],
  usable: ['romance', 'urban_life', 'noir_crime'],
  fusion: ['dark_fantasy', 'surreal'],
  weak: ['historical', 'court', 'wuxia']
});
const historicalBeardFit = fit('none', {
  strong: ['historical', 'court'],
  usable: ['wuxia', 'adventure', 'war_military', 'romance'],
  fusion: ['dark_fantasy', 'fantasy'],
  weak: ['urban_life', 'cyberpunk', 'science_fiction']
});
const daoistBeardFit = fit('none', {
  strong: ['xianxia', 'religious_ritual'],
  usable: ['wuxia', 'historical', 'mythic_epic', 'fantasy'],
  fusion: ['dark_fantasy'],
  weak: ['urban_life', 'science_fiction']
});
const modernBeardFit = fit('none', {
  strong: ['real_professional', 'urban_life'],
  usable: ['romance', 'noir_crime', 'fashion_idol', 'boudoir_aesthetic'],
  fusion: ['cyberpunk'],
  weak: ['historical', 'court', 'wuxia', 'xianxia']
});
const classicBeardFit = fit('usable', {
  usable: ['historical', 'court', 'wuxia', 'war_military', 'adventure', 'real_professional', 'romance'],
  fusion: ['fantasy', 'dark_fantasy']
});
const mysticMutationFit = fit('none', {
  strong: ['fantasy', 'dark_fantasy', 'mythic_epic'],
  usable: ['xianxia', 'religious_ritual', 'horror', 'body_horror'],
  fusion: ['science_fiction', 'surreal', 'biopunk'],
  weak: ['real_professional', 'urban_life']
});
const techMutationFit = fit('none', {
  strong: ['cyberpunk', 'science_fiction', 'posthuman'],
  usable: ['biopunk', 'war_military', 'real_professional'],
  fusion: ['surreal', 'horror', 'body_horror'],
  weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
});
const horrorMutationFit = fit('none', {
  strong: ['horror', 'body_horror', 'dark_fantasy'],
  usable: ['biopunk', 'wasteland', 'religious_ritual'],
  fusion: ['science_fiction', 'xianxia', 'fantasy', 'surreal'],
  weak: ['romance', 'real_professional', 'urban_life']
});
const symbolMutationFit = fit('none', {
  strong: ['surreal', 'religious_ritual', 'mythic_epic'],
  usable: ['xianxia', 'fantasy', 'dark_fantasy', 'fashion_idol'],
  fusion: ['science_fiction', 'cyberpunk', 'romance'],
  weak: ['real_professional', 'urban_life']
});

const cleanShaven = universal(1, [...groomingReal, 'beard_absence'], fit('usable', {
  strong: ['real_professional', 'urban_life', 'fashion_idol'],
  usable: ['romance', 'court', 'war_military']
}));
const naturalStubble = universal(1, facialHairReal, fit('usable', {
  strong: ['noir_crime', 'war_military', 'real_professional'],
  usable: ['urban_life', 'romance', 'wasteland', 'adventure', 'wuxia']
}));
const classicBeard = universal(1, facialHairReal, classicBeardFit);
const modernBeard = specific(modern, 1, [...facialHairReal, 'modern_grooming'], modernBeardFit);
const industrialBeard = specific(industrialModern, 1, [...facialHairReal, 'period_grooming'], historicalBeardFit);
const eastAsianBeard = specific(['feudal', 'early_modern', 'industrial'], 1, [...facialHairReal, 'period_grooming'], daoistBeardFit);
const fashionBeard = specific(modern, 1, [...facialHairReal, 'fashion'], fashionFit);
const techBeard = specific(future, 4, [...techEye, 'facial_hair'], techMutationFit);
const bioBeard = specific(mythicFuture, 4, ['non_realist', 'biological', 'material_shift', 'facial_hair'], mysticMutationFit);
const elementalBeard = specific(mythicFuture, 5, ['non_realist', 'mythic', 'magical', 'elemental', 'facial_hair'], mysticMutationFit);

const beardAxisMeta: Record<string, AxisMeta> = {
  cd_beard_clean_shaven: cleanShaven,
  cd_beard_light_stubble: naturalStubble,
  cd_beard_heavy_stubble: naturalStubble,
  cd_beard_designer_stubble: modernBeard,
  cd_beard_short_boxed: modernBeard,
  cd_beard_corporate_trim: modernBeard,
  cd_beard_full_beard: classicBeard,
  cd_beard_long_beard: classicBeard,
  cd_beard_goatee: classicBeard,
  cd_beard_circle_beard: modernBeard,
  cd_beard_van_dyke: specific(earlyModernToModern, 1, [...facialHairReal, 'period_grooming'], historicalBeardFit),
  cd_beard_balbo: modernBeard,
  cd_beard_anchor_beard: modernBeard,
  cd_beard_chinstrap: modernBeard,
  cd_beard_pencil_mustache: industrialBeard,
  cd_beard_chevron_mustache: specific(industrialModern, 1, [...facialHairReal, 'period_grooming'], modernBeardFit),
  cd_beard_handlebar: industrialBeard,
  cd_beard_horseshoe: specific(industrialModern, 1, [...facialHairReal, 'period_grooming'], modernBeardFit),
  cd_beard_walrus: industrialBeard,
  cd_beard_lampshade: industrialBeard,
  cd_beard_mutton_chops: industrialBeard,
  cd_beard_friendly_mutton: industrialBeard,
  cd_beard_long_sideburns: specific(industrialModern, 1, [...facialHairReal, 'period_grooming'], fit('none', {
    strong: ['historical', 'urban_life'],
    usable: ['noir_crime', 'fashion_idol', 'romance'],
    fusion: ['wasteland'],
    weak: ['wuxia', 'xianxia', 'court']
  })),
  cd_beard_imperial_beard: industrialBeard,
  cd_beard_ottoman_mustache: specific(['feudal', 'early_modern', 'industrial'], 1, [...facialHairReal, 'period_grooming'], historicalBeardFit),
  cd_beard_daoist_long_beard: eastAsianBeard,
  cd_beard_scholar_beard: eastAsianBeard,
  cd_beard_viking_beard: specific(['feudal', 'mythic'], 1, [...facialHairReal, 'period_grooming'], fit('none', {
    strong: ['historical', 'war_military', 'adventure'],
    usable: ['fantasy', 'mythic_epic'],
    fusion: ['dark_fantasy', 'wasteland'],
    weak: ['urban_life', 'science_fiction']
  })),
  cd_beard_faded_beard: fashionBeard,
  cd_beard_sharp_lined: fashionBeard,
  cd_beard_bleached_beard: fashionBeard,
  cd_beard_dyed_beard: fashionBeard,
  cd_beard_split_color_beard: specific(modern, 1, [...facialHairReal, 'fashion', 'stylized'], fashionFit),
  cd_beard_glitter_beard: specific(modern, 1, [...facialHairReal, 'fashion', 'stage'], adultFashionFit),
  cd_beard_punk_patch_beard: fashionBeard,
  cd_beard_mask_shadow_stubble: specific(modern, 1, [...facialHairReal, 'cinematic_shadow'], fit('none', {
    strong: ['noir_crime', 'fashion_idol'],
    usable: ['urban_life', 'war_military', 'real_professional'],
    fusion: ['cyberpunk'],
    weak: ['historical', 'court']
  })),
  cd_beard_salt_pepper_beard: universal(1, [...facialHairReal, 'age'], classicBeardFit),
  cd_beard_braided_goatee: specific(['feudal', 'industrial', 'modern', 'contemporary', 'mythic'], 1, facialHairReal, fit('none', {
    strong: ['wuxia', 'fantasy'],
    usable: ['adventure', 'fashion_idol', 'historical', 'dark_fantasy'],
    fusion: ['xianxia', 'urban_life'],
    weak: ['real_professional']
  })),
  cd_beard_metal_fiber_beard: techBeard,
  cd_beard_crystal_beard: bioBeard,
  cd_beard_living_vine_beard: bioBeard,
  cd_beard_data_cable_beard: specific(future, 5, [...techEye, 'facial_hair'], techMutationFit),
  cd_beard_flame_beard: elementalBeard,
  cd_beard_shadow_beard: specific(mythicFuture, 5, ['non_realist', 'mythic', 'surreal', 'shadow', 'facial_hair'], mysticMutationFit),
  cd_beard_bone_beard: specific(mythicFuture, 5, ['non_realist', 'biological', 'bone', 'body_mutation', 'facial_hair'], horrorMutationFit),
  cd_beard_glowing_thread_beard: specific(['near_future', 'far_future', 'mythic', 'timeless'], 4, ['non_realist', 'symbolic', 'magical', 'technological', 'facial_hair'], symbolMutationFit),
  cd_beard_fungal_beard: specific(future, 4, ['semi_surreal', 'biological', 'infection', 'facial_hair'], horrorMutationFit),
  cd_beard_water_beard: elementalBeard
};

const naturalEyeColor = universal(1, eyeReal, generalHumanFit);
const contactEyeColor = specific(modern, 1, fashionEye, fashionFit);
const mysticEyeColor = specific(mythicFuture, 4, mysticEye, mysticMutationFit);
const techEyeColor = specific(future, 4, techEye, techMutationFit);

const eyeColorAxisMeta: Record<string, AxisMeta> = {
  ...byIds([
    'cd_eye_dark_brown',
    'cd_eye_black_brown',
    'cd_eye_light_brown',
    'cd_eye_amber',
    'cd_eye_hazel',
    'cd_eye_olive_green',
    'cd_eye_forest_green',
    'cd_eye_grey_green',
    'cd_eye_blue_grey',
    'cd_eye_pale_blue',
    'cd_eye_steel_blue',
    'cd_eye_ice_blue',
    'cd_eye_soft_grey',
    'cd_eye_dark_grey',
    'cd_eye_soft_heterochromia',
    'cd_eye_central_heterochromia'
  ], naturalEyeColor),
  ...byIds([
    'cd_eye_heart_contact',
    'cd_eye_star_contact',
    'cd_eye_flower_contact',
    'cd_eye_ring_contact',
    'cd_eye_doll_contact',
    'cd_eye_red_contact',
    'cd_eye_gold_contact',
    'cd_eye_white_contact',
    'cd_eye_black_contact',
    'cd_eye_spiral_contact'
  ], contactEyeColor),
  cd_eye_glowing_gold: mysticEyeColor,
  cd_eye_milky_blind: specific([], 3, ['realistic', 'physical', 'medical_or_mystic_eye'], fit('usable', {
    usable: ['horror', 'dark_fantasy', 'religious_ritual', 'xianxia', 'historical'],
    fusion: ['surreal', 'mythic_epic']
  })),
  cd_eye_black_sclera_color: specific(mythicFuture, 4, horrorEye, horrorMutationFit),
  cd_eye_liquid_silver: techEyeColor,
  cd_eye_neon_cyan: techEyeColor,
  cd_eye_violet_glow: mysticEyeColor,
  cd_eye_galaxy_color: specific(mythicFuture, 5, ['non_realist', 'cosmic', 'surreal', 'symbolic'], symbolMutationFit),
  cd_eye_blood_red_true: specific(mythicFuture, 4, horrorEye, horrorMutationFit),
  cd_eye_opalescent: mysticEyeColor,
  cd_eye_void_eye_color: specific(mythicFuture, 5, ['non_realist', 'cosmic', 'surreal', 'void'], horrorMutationFit)
};

const realisticEyeShape = universal(1, eyeReal, generalHumanFit);
const sharpEyeShape = universal(1, eyeReal, combatFit);
const charmEyeShape = universal(1, eyeReal, charmFit);
const eyeState = universal(1, eyeStateReal, generalHumanFit);
const modernEyeMakeup = specific(modern, 1, fashionEye, fashionFit);
const stylizedModernEye = specific(modern, 2, stylizedEye, fit('none', {
  strong: ['fashion_idol'],
  usable: ['urban_life', 'romance', 'surreal'],
  fusion: ['cyberpunk', 'fantasy'],
  weak: ['historical', 'court', 'wuxia']
}));

const eyeShapeAxisMeta: Record<string, AxisMeta> = {
  cd_eye_shape_almond: realisticEyeShape,
  cd_eye_shape_phoenix: universal(1, eyeReal, elegantFit),
  cd_eye_shape_peach: charmEyeShape,
  cd_eye_shape_cat: charmEyeShape,
  cd_eye_shape_doe: universal(1, eyeReal, fit('usable', {
    strong: ['romance'],
    usable: ['fashion_idol', 'urban_life', 'boudoir_aesthetic', 'ecological']
  })),
  cd_eye_shape_fox: universal(1, eyeReal, fit('usable', {
    strong: ['wuxia', 'fashion_idol', 'noir_crime'],
    usable: ['xianxia', 'romance', 'dark_fantasy', 'court'],
    fusion: ['surreal']
  })),
  cd_eye_shape_sanpaku: sharpEyeShape,
  cd_eye_shape_sharp_lidded: sharpEyeShape,
  cd_eye_shape_round: realisticEyeShape,
  cd_eye_shape_narrow: realisticEyeShape,
  cd_eye_shape_hooded: realisticEyeShape,
  cd_eye_shape_deep_set: universal(1, eyeReal, fit('usable', {
    usable: ['historical', 'court', 'noir_crime', 'dark_fantasy', 'real_professional']
  })),
  cd_eye_shape_droopy: realisticEyeShape,
  cd_eye_shape_monolid: realisticEyeShape,
  cd_eye_shape_double_lid: realisticEyeShape,
  cd_eye_shape_asymmetry: realisticEyeShape,
  cd_eye_shape_sleepy: universal(1, eyeStateReal, fit('usable', {
    usable: ['romance', 'urban_life', 'noir_crime', 'boudoir_aesthetic']
  })),
  cd_eye_shape_wide_alert: universal(1, eyeStateReal, combatFit),
  cd_eye_shape_soft_smiling: universal(1, eyeStateReal, fit('usable', {
    strong: ['romance'],
    usable: ['fashion_idol', 'urban_life', 'real_professional', 'boudoir_aesthetic']
  })),
  cd_eye_shape_tearful: universal(1, eyeStateReal, fit('usable', {
    strong: ['romance'],
    usable: ['dark_fantasy', 'historical', 'fashion_idol', 'boudoir_aesthetic']
  })),
  cd_eye_shape_tired_bags: universal(1, eyeStateReal, fit('usable', {
    strong: ['real_professional', 'noir_crime'],
    usable: ['urban_life', 'horror', 'war_military', 'wasteland']
  })),
  cd_eye_shape_cold_stare: universal(1, eyeStateReal, combatFit),
  cd_eye_shape_smoky_makeup: modernEyeMakeup,
  cd_eye_shape_graphic_liner: modernEyeMakeup,
  cd_eye_shape_heavy_lashes: modernEyeMakeup,
  cd_eye_shape_lower_lash_emphasis: modernEyeMakeup,
  cd_eye_shape_kohl_rimmed: universal(1, [...fashionEye, 'ritual_cosmetic'], fit('usable', {
    strong: ['religious_ritual', 'war_military'],
    usable: ['historical', 'wuxia', 'dark_fantasy', 'fashion_idol', 'noir_crime']
  })),
  cd_eye_shape_bare_natural: universal(1, eyeReal, generalHumanFit),
  cd_eye_shape_large_anime: stylizedModernEye,
  cd_eye_shape_tiny_button: stylizedModernEye,
  cd_eye_shape_mask_like: specific(['feudal', 'modern', 'near_future', 'far_future', 'timeless'], 3, [...stylizedEye, 'mask'], fit('none', {
    strong: ['surreal', 'religious_ritual'],
    usable: ['wuxia', 'noir_crime', 'cyberpunk', 'horror'],
    fusion: ['xianxia', 'science_fiction', 'dark_fantasy']
  })),
  cd_eye_shape_doll_glass: specific(['industrial', 'modern', 'mythic', 'timeless'], 3, ['stylized', 'semi_surreal', 'doll_body'], fit('none', {
    strong: ['surreal', 'horror', 'fashion_idol'],
    usable: ['dark_fantasy', 'romance'],
    fusion: ['science_fiction', 'fantasy']
  })),
  cd_eye_shape_animal_large: specific(mythicFuture, 3, biologicalEye, mysticMutationFit),
  cd_eye_shape_insect_set: specific(mythicFuture, 4, biologicalEye, horrorMutationFit),
  cd_eye_shape_divine_symmetry: specific(mythicOnly, 3, mysticEye, symbolMutationFit),
  cd_eye_shape_predator_focus: specific(mythicFuture, 3, biologicalEye, fit('none', {
    strong: ['dark_fantasy', 'horror', 'wuxia'],
    usable: ['fantasy', 'body_horror', 'adventure', 'war_military'],
    fusion: ['xianxia', 'biopunk']
  }))
};

const bioEyeMutation = specific(mythicFuture, 3, biologicalEye, mysticMutationFit);
const strongBioEyeMutation = specific(mythicFuture, 5, biologicalEye, horrorMutationFit);
const cyberEyeMutation = specific(future, 4, techEye, techMutationFit);
const strongCyberEyeMutation = specific(future, 5, techEye, techMutationFit);
const mysticEyeMutation = specific(mythicOnly, 4, mysticEye, symbolMutationFit);
const horrorEyeMutation = specific(mythicFuture, 5, horrorEye, horrorMutationFit);
const infectionEyeMutation = specific(future, 4, ['semi_surreal', 'biological', 'infection', 'body_mutation'], horrorMutationFit);

const eyeMutationAxisMeta: Record<string, AxisMeta> = {
  cd_eye_fx_cat_slit: bioEyeMutation,
  cd_eye_fx_goat_rect: bioEyeMutation,
  cd_eye_fx_reptile_slit: bioEyeMutation,
  cd_eye_fx_octopus_pupil: specific(mythicFuture, 4, biologicalEye, horrorMutationFit),
  cd_eye_fx_compound: strongBioEyeMutation,
  cd_eye_fx_double_pupil: specific(mythicFuture, 3, mysticEye, symbolMutationFit),
  cd_eye_fx_many_pupils: strongBioEyeMutation,
  cd_eye_fx_third_eye: specific(mythicFuture, 4, mysticEye, symbolMutationFit),
  cd_eye_fx_eye_cluster: strongBioEyeMutation,
  cd_eye_fx_black_veins: universal(3, ['semi_surreal', 'biological', 'curse', 'infection'], horrorMutationFit),
  cd_eye_fx_cyber_lens: cyberEyeMutation,
  cd_eye_fx_hud_ring: cyberEyeMutation,
  cd_eye_fx_data_port: cyberEyeMutation,
  cd_eye_fx_shutter: cyberEyeMutation,
  cd_eye_fx_led_pixel: strongCyberEyeMutation,
  cd_eye_fx_camera_iris: cyberEyeMutation,
  cd_eye_fx_projector_eye: strongCyberEyeMutation,
  cd_eye_fx_prosthetic_seam: cyberEyeMutation,
  cd_eye_fx_laser_target: cyberEyeMutation,
  cd_eye_fx_transparent_mech: strongCyberEyeMutation,
  cd_eye_fx_rune_iris: mysticEyeMutation,
  cd_eye_fx_clockwork: specific(['industrial', 'near_future', 'far_future', 'timeless'], 4, [...mysticEye, 'mechanical_symbol'], fit('none', {
    strong: ['science_fiction', 'cyberpunk'],
    usable: ['fantasy', 'surreal', 'dark_fantasy'],
    fusion: ['xianxia', 'religious_ritual'],
    weak: ['urban_life', 'romance']
  })),
  cd_eye_fx_galaxy_inside: specific(mythicFuture, 5, ['non_realist', 'cosmic', 'surreal', 'symbolic'], symbolMutationFit),
  cd_eye_fx_eclipse: mysticEyeMutation,
  cd_eye_fx_stained_glass: specific(['feudal', 'early_modern', 'mythic', 'timeless'], 4, mysticEye, fit('none', {
    strong: ['religious_ritual', 'mythic_epic'],
    usable: ['dark_fantasy', 'fantasy', 'court'],
    fusion: ['science_fiction', 'surreal'],
    weak: ['urban_life']
  })),
  cd_eye_fx_sigil_pupil: mysticEyeMutation,
  cd_eye_fx_tarot_eye: specific(['industrial', 'modern', 'mythic', 'timeless'], 4, mysticEye, symbolMutationFit),
  cd_eye_fx_lotus_iris: specific(['feudal', 'mythic', 'timeless'], 4, mysticEye, fit('none', {
    strong: ['xianxia', 'religious_ritual'],
    usable: ['mythic_epic', 'fantasy'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['science_fiction', 'urban_life']
  })),
  cd_eye_fx_mandala_eye: mysticEyeMutation,
  cd_eye_fx_angelic_ring: specific(mythicFuture, 4, mysticEye, symbolMutationFit),
  cd_eye_fx_hollow_socket: horrorEyeMutation,
  cd_eye_fx_sewn_shut: universal(4, horrorEye, horrorMutationFit),
  cd_eye_fx_bleeding_tears: universal(4, horrorEye, horrorMutationFit),
  cd_eye_fx_eye_mouth: horrorEyeMutation,
  cd_eye_fx_black_tears: universal(4, horrorEye, horrorMutationFit),
  cd_eye_fx_cracked_sclera: specific(mythicFuture, 4, horrorEye, horrorMutationFit),
  cd_eye_fx_empty_black_void: horrorEyeMutation,
  cd_eye_fx_many_tiny_eyes: horrorEyeMutation,
  cd_eye_fx_parasite_worm: specific(future, 5, ['semi_surreal', 'biological', 'parasite', 'body_mutation'], horrorMutationFit),
  cd_eye_fx_fungal_growth: infectionEyeMutation,
  cd_eye_fx_crystal_infection: specific(mythicFuture, 4, ['semi_surreal', 'biological', 'mineral', 'body_mutation'], horrorMutationFit),
  cd_eye_fx_vein_network_glow: infectionEyeMutation,
  cd_eye_fx_membrane_eye: specific(mythicFuture, 4, biologicalEye, horrorMutationFit),
  cd_eye_fx_cross_pupil_contact_like: specific(['modern', 'near_future', 'mythic', 'timeless'], 3, ['stylized', 'semi_surreal', 'symbolic', 'eye_pattern'], symbolMutationFit),
  cd_eye_fx_heart_true_pupil: specific(['near_future', 'mythic', 'timeless'], 3, ['stylized', 'semi_surreal', 'symbolic', 'eye_pattern'], fit('none', {
    strong: ['fashion_idol', 'boudoir_aesthetic'],
    usable: ['romance', 'surreal', 'fantasy'],
    fusion: ['xianxia', 'dark_fantasy'],
    weak: ['real_professional']
  })),
  cd_eye_fx_star_true_pupil: specific(['near_future', 'mythic', 'timeless'], 3, ['stylized', 'semi_surreal', 'symbolic', 'eye_pattern'], symbolMutationFit),
  cd_eye_fx_barcode_iris: specific(future, 4, techEye, techMutationFit),
  cd_eye_fx_hourglass_pupil: specific(mythicFuture, 4, mysticEye, symbolMutationFit)
};

const ageReality = ['realistic', 'physical', 'human_body', 'age_texture'];
const genderReality = ['realistic', 'physical', 'gender_presentation'];
const bodyReality = ['realistic', 'physical', 'human_body', 'body_silhouette'];
const bodyFashionReality = ['realistic', 'stylized', 'physical', 'fashion_body'];
const bodyAdultReality = ['realistic', 'stylized', 'physical', 'adult_glamour_body'];
const bodyFunctionReality = ['realistic', 'physical', 'trained_body', 'functional_body'];
const bodyPowerReality = ['realistic', 'physical', 'authority_body'];
const bodyBoundaryReality = ['stylized', 'semi_surreal', 'humanoid_boundary', 'body_silhouette'];

const ageGeneralFit = fit('usable');
const ageAuthorityFit = fit('usable', {
  strong: ['historical', 'court', 'real_professional'],
  usable: ['wuxia', 'xianxia', 'war_military', 'dark_fantasy', 'mythic_epic'],
  weak: ['fashion_idol', 'boudoir_aesthetic']
});
const ageWearFit = fit('usable', {
  strong: ['real_professional', 'urban_life', 'noir_crime'],
  usable: ['war_military', 'wasteland', 'historical', 'romance', 'adventure', 'wuxia'],
  fusion: ['dark_fantasy']
});
const agePolishFit = fit('usable', {
  strong: ['court', 'fashion_idol', 'real_professional'],
  usable: ['romance', 'urban_life', 'boudoir_aesthetic'],
  fusion: ['xianxia', 'dark_fantasy']
});

const ageAxisMeta: Record<string, AxisMeta> = {
  cd_age_late_teen: universal(1, [...ageReality, 'late_teen_boundary'], fit('usable', {
    usable: ['romance', 'urban_life', 'adventure', 'fashion_idol'],
    weak: ['court', 'war_military', 'boudoir_aesthetic']
  })),
  cd_age_young_adult: universal(1, ageReality, ageGeneralFit),
  cd_age_mature_youth: universal(1, [...ageReality, 'self_control'], ageGeneralFit),
  cd_age_early_middle: universal(1, [...ageReality, 'responsibility_wear'], ageAuthorityFit),
  cd_age_middle: universal(1, [...ageReality, 'mature_adult'], ageAuthorityFit),
  cd_age_late_middle: universal(1, [...ageReality, 'authority_wear'], ageAuthorityFit),
  cd_age_elder: universal(1, [...ageReality, 'elder'], ageAuthorityFit),
  cd_age_ancient_elder: universal(1, [...ageReality, 'ancient_elder'], ageAuthorityFit),
  cd_age_fresh: universal(1, [...ageReality, 'fresh_surface'], fit('usable', {
    strong: ['romance', 'fashion_idol'],
    usable: ['urban_life', 'xianxia', 'boudoir_aesthetic'],
    weak: ['wasteland', 'noir_crime', 'horror']
  })),
  cd_age_lived_in: universal(1, [...ageReality, 'lived_in'], ageWearFit),
  cd_age_weathered: universal(1, [...ageReality, 'weathered'], fit('usable', {
    strong: ['adventure', 'wasteland', 'war_military'],
    usable: ['wuxia', 'historical', 'real_professional', 'ecological'],
    fusion: ['dark_fantasy']
  })),
  cd_age_well_kept: universal(1, [...ageReality, 'well_kept'], agePolishFit),
  cd_age_sleepless: universal(1, [...ageReality, 'fatigue'], ageWearFit),
  cd_age_disciplined: universal(1, [...ageReality, 'discipline'], fit('usable', {
    strong: ['war_military', 'real_professional', 'court'],
    usable: ['wuxia', 'xianxia', 'fashion_idol', 'historical']
  })),
  cd_age_prematurely_aged: universal(1, [...ageReality, 'premature_wear'], ageWearFit),
  cd_age_timeless_adult: universal(1, ['realistic', 'stylized', 'adult_identity', 'age_ambiguous'], fit('usable', {
    strong: ['surreal', 'fashion_idol'],
    usable: ['xianxia', 'fantasy', 'dark_fantasy', 'mythic_epic', 'boudoir_aesthetic'],
    fusion: ['science_fiction', 'posthuman']
  }))
};

const genderGeneralFit = fit('usable');
const genderSharpFit = fit('usable', {
  strong: ['fashion_idol', 'noir_crime'],
  usable: ['court', 'real_professional', 'war_military', 'wuxia'],
  fusion: ['dark_fantasy', 'cyberpunk']
});
const genderMatureFit = fit('usable', {
  strong: ['real_professional', 'court'],
  usable: ['romance', 'historical', 'fashion_idol', 'boudoir_aesthetic', 'noir_crime']
});
const genderSoftFit = fit('usable', {
  strong: ['romance'],
  usable: ['urban_life', 'fashion_idol', 'boudoir_aesthetic', 'ecological']
});
const genderFluidFit = fit('usable', {
  strong: ['fashion_idol', 'surreal'],
  usable: ['urban_life', 'romance', 'cyberpunk', 'posthuman'],
  fusion: ['xianxia', 'fantasy', 'dark_fantasy']
});

const genderAxisMeta: Record<string, AxisMeta> = {
  cd_gender_feminine_soft: universal(1, [...genderReality, 'feminine_soft'], genderSoftFit),
  cd_gender_feminine_sharp: universal(1, [...genderReality, 'feminine_sharp'], genderSharpFit),
  cd_gender_feminine_mature: universal(1, [...genderReality, 'feminine_mature'], genderMatureFit),
  cd_gender_feminine_severe: universal(1, [...genderReality, 'feminine_severe'], fit('usable', {
    strong: ['court', 'real_professional', 'noir_crime'],
    usable: ['war_military', 'dark_fantasy', 'fashion_idol'],
    fusion: ['wuxia', 'cyberpunk']
  })),
  cd_gender_masculine_soft: universal(1, [...genderReality, 'masculine_soft'], genderSoftFit),
  cd_gender_masculine_sharp: universal(1, [...genderReality, 'masculine_sharp'], genderSharpFit),
  cd_gender_masculine_solid: universal(1, [...genderReality, 'masculine_solid'], fit('usable', {
    strong: ['war_military', 'wasteland', 'real_professional'],
    usable: ['wuxia', 'historical', 'noir_crime', 'adventure'],
    fusion: ['dark_fantasy']
  })),
  cd_gender_masculine_refined: universal(1, [...genderReality, 'masculine_refined'], genderMatureFit),
  cd_gender_androgynous_clean: universal(1, [...genderReality, 'androgynous_clean'], genderGeneralFit),
  cd_gender_androgynous_elastic: universal(1, [...genderReality, 'androgynous_fluid'], genderFluidFit),
  cd_gender_boyish: universal(1, [...genderReality, 'boyish_adult'], fit('usable', {
    strong: ['urban_life', 'fashion_idol'],
    usable: ['romance', 'adventure', 'wuxia'],
    weak: ['court', 'boudoir_aesthetic']
  })),
  cd_gender_gamine: universal(1, [...genderReality, 'gamine_adult'], genderFluidFit)
};

const bodyElegantFit = fit('usable', {
  strong: ['fashion_idol', 'court'],
  usable: ['romance', 'historical', 'xianxia', 'wuxia', 'religious_ritual'],
  fusion: ['surreal']
});
const bodyCurveFit = fit('usable', {
  strong: ['romance', 'fashion_idol'],
  usable: ['urban_life', 'court', 'boudoir_aesthetic'],
  fusion: ['dark_fantasy', 'surreal']
});
const bodyFunctionalFit = fit('usable', {
  strong: ['war_military', 'wuxia', 'adventure'],
  usable: ['real_professional', 'wasteland', 'ecological', 'historical'],
  fusion: ['science_fiction', 'cyberpunk']
});
const bodyLaborFit = fit('usable', {
  strong: ['real_professional', 'wasteland'],
  usable: ['adventure', 'historical', 'war_military', 'ecological'],
  fusion: ['science_fiction']
});
const bodyPowerFit = fit('usable', {
  strong: ['war_military', 'court', 'historical'],
  usable: ['wuxia', 'dark_fantasy', 'fantasy', 'real_professional'],
  fusion: ['fashion_idol']
});
const bodyBoundaryFit = fit('none', {
  strong: ['surreal', 'fantasy', 'posthuman'],
  usable: ['xianxia', 'science_fiction', 'dark_fantasy', 'horror'],
  fusion: ['fashion_idol', 'mythic_epic'],
  weak: ['real_professional', 'urban_life']
});
const bodyGlamourFit = fit('none', {
  strong: ['boudoir_aesthetic', 'fashion_idol'],
  usable: ['romance', 'urban_life'],
  fusion: ['dark_fantasy', 'surreal', 'fantasy'],
  weak: ['war_military', 'wuxia', 'real_professional']
});
const bodyProfessionalGlamourFit = fit('none', {
  strong: ['boudoir_aesthetic', 'fashion_idol'],
  usable: ['real_professional', 'urban_life', 'romance'],
  fusion: ['noir_crime'],
  weak: ['historical', 'wuxia', 'war_military']
});
const bodyCombatGlamourFit = fit('none', {
  strong: ['boudoir_aesthetic', 'fashion_idol'],
  usable: ['war_military', 'wuxia', 'adventure'],
  fusion: ['fantasy', 'cyberpunk'],
  weak: ['real_professional']
});
const bodyFantasyGlamourFit = fit('none', {
  strong: ['boudoir_aesthetic', 'fantasy', 'dark_fantasy'],
  usable: ['fashion_idol', 'romance', 'xianxia'],
  fusion: ['surreal', 'mythic_epic'],
  weak: ['real_professional', 'urban_life']
});

const bodyNatural = universal(1, bodyReality, bodyElegantFit);
const bodyCurve = universal(1, bodyReality, bodyCurveFit);
const bodyFunction = universal(1, bodyFunctionReality, bodyFunctionalFit);
const bodyPower = universal(1, bodyPowerReality, bodyPowerFit);
const bodyModernGlamour = specific(modern, 1, bodyFashionReality, bodyGlamourFit);
const bodyAdultGlamour = specific(modern, 1, bodyAdultReality, bodyGlamourFit);
const bodyAdultProfessional = specific(modern, 1, [...bodyAdultReality, 'professional_costume'], bodyProfessionalGlamourFit);
const bodyAdultCombat = specific(modern, 1, [...bodyAdultReality, 'combat_capable'], bodyCombatGlamourFit);
const bodyAdultFantasy = specific(['modern', 'contemporary', 'near_future', 'mythic', 'timeless'], 1, [...bodyAdultReality, 'fantasy_glamour'], bodyFantasyGlamourFit);
const bodyAdultPose = specific(modern, 1, [...bodyAdultReality, 'display_pose'], bodyGlamourFit);

const bodyAxisMeta: Record<string, AxisMeta> = {
  cd_body_slender_vertical: bodyNatural,
  cd_body_willow_thin: bodyNatural,
  cd_body_tall_narrow: bodyNatural,
  cd_body_long_limb: bodyNatural,
  cd_body_swan_neck: bodyNatural,
  cd_body_hourglass_balanced: bodyCurve,
  cd_body_soft_curve: bodyCurve,
  cd_body_compact_curve: bodyCurve,
  cd_body_sculpted_waist: bodyCurve,
  cd_body_curvy_glamour: bodyModernGlamour,
  cd_body_full_bust: bodyModernGlamour,
  cd_body_full_hip: bodyModernGlamour,
  cd_body_slim_thick: specific(['contemporary', 'near_future'], 1, bodyFashionReality, bodyGlamourFit),
  cd_body_plump_soft: universal(1, bodyReality, bodyCurveFit),
  cd_body_bombshell: bodyModernGlamour,
  cd_body_model_glam: bodyModernGlamour,
  cd_body_pinup_curve: specific(['industrial', 'modern', 'contemporary'], 1, bodyFashionReality, bodyGlamourFit),
  cd_body_idol_fit: specific(['contemporary', 'near_future'], 1, bodyFashionReality, bodyGlamourFit),
  cd_body_athletic_lean: bodyFunction,
  cd_body_dancer_control: universal(1, bodyFunctionReality, fit('usable', {
    strong: ['fashion_idol', 'religious_ritual'],
    usable: ['xianxia', 'romance', 'urban_life', 'war_military'],
    fusion: ['surreal']
  })),
  cd_body_worker_strength: universal(1, bodyFunctionReality, bodyLaborFit),
  cd_body_soldier_ready: bodyFunction,
  cd_body_craftsman_hands: universal(1, bodyFunctionReality, bodyLaborFit),
  cd_body_square_authority: bodyPower,
  cd_body_broad_shoulder: bodyPower,
  cd_body_barrel_solid: bodyPower,
  cd_body_statuesque: universal(1, bodyPowerReality, fit('usable', {
    strong: ['court', 'religious_ritual', 'mythic_epic'],
    usable: ['historical', 'dark_fantasy', 'fashion_idol'],
    fusion: ['surreal']
  })),
  cd_body_small_frame: universal(1, bodyReality, fit('usable', {
    usable: ['urban_life', 'romance', 'wuxia', 'fashion_idol'],
    fusion: ['surreal'],
    weak: ['war_military']
  })),
  cd_body_large_frame: bodyPower,
  cd_body_low_center: bodyFunction,
  cd_body_top_heavy: bodyPower,
  cd_body_bottom_weighted: bodyFunction,
  cd_body_elongated_humanoid: specific(['mythic', 'near_future', 'far_future', 'timeless'], 2, bodyBoundaryReality, bodyBoundaryFit),
  cd_body_jointed_doll: specific(['early_modern', 'industrial', 'modern', 'contemporary', 'mythic', 'timeless'], 3, bodyBoundaryReality, bodyBoundaryFit),
  cd_body_uncanny_perfect: specific(['near_future', 'far_future', 'timeless'], 2, bodyBoundaryReality, bodyBoundaryFit),
  cd_body_hyper_feminine_stance: bodyModernGlamour,
  ...byIds([
    'cd_adult_body_busty_hourglass',
    'cd_adult_body_extreme_hourglass',
    'cd_adult_body_top_heavy_glam',
    'cd_adult_body_full_bust_narrow_waist',
    'cd_adult_body_full_bust_long_legs',
    'cd_adult_body_heavy_chest_soft_waist',
    'cd_adult_body_underbust_emphasis',
    'cd_adult_body_cleavage_forward',
    'cd_adult_body_tight_top_silhouette',
    'cd_adult_body_soft_large_bust',
    'cd_adult_body_wide_hips_narrow_waist',
    'cd_adult_body_full_hips_soft_thighs',
    'cd_adult_body_pear_glamour',
    'cd_adult_body_round_hips',
    'cd_adult_body_big_thigh_energy',
    'cd_adult_body_squat_thick',
    'cd_adult_body_high_hip_line',
    'cd_adult_body_low_waist_curve',
    'cd_adult_body_bikini_bottom_silhouette',
    'cd_adult_body_bodycon_hips',
    'cd_adult_body_slim_thick_pop',
    'cd_adult_body_influencer_curves',
    'cd_adult_body_tall_busty',
    'cd_adult_body_tall_voluptuous',
    'cd_adult_body_short_stack',
    'cd_adult_body_thicc',
    'cd_adult_body_curvy_plus',
    'cd_adult_body_soft_belly_curve',
    'cd_adult_body_lingerie_model_curve'
  ], bodyAdultGlamour),
  ...byIds([
    'cd_adult_body_doujin_exaggerated',
    'cd_adult_body_manga_fertile_curve',
    'cd_adult_body_anime_bust_focus',
    'cd_adult_body_anime_hip_focus',
    'cd_adult_body_game_heroine_curve'
  ], specific(modern, 1, [...bodyAdultReality, 'stylized_manga_body'], bodyGlamourFit)),
  ...byIds([
    'cd_adult_body_fantasy_sorceress_body',
    'cd_adult_body_villainess_curve'
  ], bodyAdultFantasy),
  cd_adult_body_battle_babe_curve: bodyAdultCombat,
  ...byIds([
    'cd_adult_body_soft_milf_curve',
    'cd_adult_body_mature_voluptuous'
  ], specific(modern, 1, [...bodyAdultReality, 'mature_adult_body'], bodyGlamourFit)),
  ...byIds([
    'cd_adult_body_office_lady_curve',
    'cd_adult_body_teacher_curve',
    'cd_adult_body_nurse_curve',
    'cd_adult_body_secretary_curve'
  ], bodyAdultProfessional),
  ...byIds([
    'cd_adult_body_hostess_curve',
    'cd_adult_body_idol_gravure',
    'cd_adult_body_red_carpet_curves'
  ], specific(modern, 1, [...bodyAdultReality, 'media_stage_body'], bodyGlamourFit)),
  ...byIds([
    'cd_adult_body_petite_busty',
    'cd_adult_body_petite_curvy'
  ], specific(modern, 1, [...bodyAdultReality, 'adult_petite_frame'], bodyGlamourFit)),
  ...byIds([
    'cd_adult_body_toned_glamour',
    'cd_adult_body_fitness_bikini'
  ], bodyAdultCombat),
  ...byIds([
    'cd_adult_body_arched_back_pose',
    'cd_adult_body_s_curve_pose',
    'cd_adult_body_contrapposto_glam',
    'cd_adult_body_thigh_gap_glam',
    'cd_adult_body_knee_in_pose',
    'cd_adult_body_over_shoulder_curve',
    'cd_adult_body_sitting_thigh_press',
    'cd_adult_body_bent_forward_glam',
    'cd_adult_body_stretching_glam',
    'cd_adult_body_lazy_lounge_curve'
  ], bodyAdultPose)
};

const emotionReality = ['realistic', 'psychological', 'emotion_core'];
const emotionStylizedReality = ['realistic', 'stylized', 'psychological', 'emotion_core'];
const emotionAdultReality = ['realistic', 'stylized', 'psychological', 'adult_desire_core'];

const emotionGeneralFit = fit('usable');
const emotionCalmFit = fit('usable', {
  strong: ['real_professional', 'court', 'religious_ritual'],
  usable: ['historical', 'wuxia', 'xianxia', 'romance', 'war_military', 'fashion_idol']
});
const emotionWarmFit = fit('usable', {
  strong: ['romance', 'urban_life'],
  usable: ['fashion_idol', 'real_professional', 'ecological', 'adventure', 'boudoir_aesthetic']
});
const emotionSadFit = fit('usable', {
  strong: ['romance', 'noir_crime'],
  usable: ['historical', 'dark_fantasy', 'urban_life', 'wasteland', 'boudoir_aesthetic'],
  fusion: ['surreal']
});
const emotionConflictFit = fit('usable', {
  strong: ['war_military', 'wuxia', 'noir_crime'],
  usable: ['adventure', 'wasteland', 'real_professional', 'dark_fantasy'],
  fusion: ['cyberpunk', 'xianxia']
});
const emotionFearFit = fit('usable', {
  strong: ['horror', 'noir_crime', 'wasteland'],
  usable: ['war_military', 'adventure', 'dark_fantasy', 'body_horror', 'real_professional'],
  fusion: ['surreal', 'science_fiction']
});
const emotionDesireFit = fit('usable', {
  strong: ['romance'],
  usable: ['fashion_idol', 'boudoir_aesthetic', 'urban_life', 'court'],
  fusion: ['fantasy', 'dark_fantasy', 'surreal']
});
const emotionPowerFit = fit('usable', {
  strong: ['court', 'war_military', 'real_professional'],
  usable: ['wuxia', 'noir_crime', 'fashion_idol', 'historical', 'dark_fantasy'],
  fusion: ['cyberpunk', 'fantasy']
});
const emotionMysteryFit = fit('usable', {
  strong: ['surreal', 'dark_fantasy'],
  usable: ['xianxia', 'fantasy', 'horror', 'noir_crime', 'religious_ritual'],
  fusion: ['science_fiction', 'posthuman', 'mythic_epic']
});
const emotionAdultFit = fit('none', {
  strong: ['boudoir_aesthetic'],
  usable: ['romance', 'fashion_idol'],
  fusion: ['dark_fantasy', 'noir_crime', 'surreal'],
  weak: ['war_military', 'real_professional', 'wuxia']
});
const emotionAdultControlFit = fit('none', {
  strong: ['boudoir_aesthetic'],
  usable: ['dark_fantasy', 'noir_crime', 'romance', 'fashion_idol'],
  fusion: ['religious_ritual', 'cyberpunk'],
  weak: ['real_professional', 'urban_life']
});

const emotionCalm = universal(1, emotionReality, emotionCalmFit);
const emotionWarm = universal(1, emotionReality, emotionWarmFit);
const emotionSad = universal(1, emotionReality, emotionSadFit);
const emotionConflict = universal(1, emotionReality, emotionConflictFit);
const emotionFear = universal(1, emotionReality, emotionFearFit);
const emotionDesire = universal(1, emotionReality, emotionDesireFit);
const emotionPower = universal(1, emotionReality, emotionPowerFit);
const emotionMystery = universal(2, emotionStylizedReality, emotionMysteryFit);
const emotionAdult = universal(2, emotionAdultReality, emotionAdultFit);

const emotionalCoreAxisMeta: Record<string, AxisMeta> = {
  cd_emo_calm_center: emotionCalm,
  cd_emo_quiet_focus: emotionCalm,
  cd_emo_gentle_peace: emotionWarm,
  cd_emo_clear_mind: emotionCalm,
  cd_emo_patient_waiting: universal(1, emotionReality, fit('usable', {
    strong: ['romance', 'historical'],
    usable: ['court', 'wuxia', 'real_professional', 'noir_crime']
  })),
  cd_emo_solemn_stillness: universal(1, emotionReality, fit('usable', {
    strong: ['religious_ritual', 'court', 'historical'],
    usable: ['xianxia', 'dark_fantasy', 'war_military', 'mythic_epic']
  })),
  cd_emo_bright_joy: emotionWarm,
  cd_emo_warm_friendliness: emotionWarm,
  cd_emo_playful_energy: emotionWarm,
  cd_emo_hopeful_lift: emotionWarm,
  cd_emo_relieved_softness: emotionWarm,
  cd_emo_proud_happiness: universal(1, emotionReality, fit('usable', {
    strong: ['fashion_idol', 'war_military'],
    usable: ['romance', 'real_professional', 'adventure', 'urban_life']
  })),
  cd_emo_soft_sadness: emotionSad,
  cd_emo_lonely_distance: emotionSad,
  cd_emo_fragile_openness: emotionSad,
  cd_emo_nostalgic_melancholy: emotionSad,
  cd_emo_tired_tenderness: emotionSad,
  cd_emo_silent_grief: emotionSad,
  cd_emo_direct_anger: emotionConflict,
  cd_emo_quiet_rage_core: emotionConflict,
  cd_emo_defiant_spirit: emotionConflict,
  cd_emo_protective_fury: emotionConflict,
  cd_emo_competitive_heat: emotionConflict,
  cd_emo_resentful_edge: emotionConflict,
  cd_emo_alert_fear: emotionFear,
  cd_emo_nervous_energy: emotionFear,
  cd_emo_uneasy_suspicion: emotionFear,
  cd_emo_vulnerable_panic: emotionFear,
  cd_emo_survival_tension: emotionFear,
  cd_emo_stage_fright: universal(1, emotionReality, fit('usable', {
    strong: ['fashion_idol', 'real_professional'],
    usable: ['urban_life', 'romance', 'boudoir_aesthetic'],
    fusion: ['surreal']
  })),
  cd_emo_clear_longing: emotionDesire,
  cd_emo_romantic_yearning: emotionDesire,
  cd_emo_ambitious_hunger: emotionPower,
  cd_emo_curious_pull: universal(1, emotionReality, fit('usable', {
    strong: ['adventure', 'science_fiction'],
    usable: ['xianxia', 'fantasy', 'real_professional', 'urban_life'],
    fusion: ['surreal']
  })),
  cd_emo_sensual_atmosphere: universal(1, [...emotionReality, 'sensual_mood'], fit('usable', {
    strong: ['boudoir_aesthetic', 'romance'],
    usable: ['fashion_idol', 'urban_life'],
    fusion: ['dark_fantasy', 'surreal']
  })),
  cd_emo_unreachable_wish: emotionDesire,
  cd_emo_quiet_confidence: emotionPower,
  cd_emo_commanding_force: emotionPower,
  cd_emo_elegant_pride: emotionPower,
  cd_emo_rebellious_confidence: emotionPower,
  cd_emo_protective_strength: emotionPower,
  cd_emo_star_presence: universal(1, emotionReality, fit('usable', {
    strong: ['fashion_idol'],
    usable: ['urban_life', 'romance', 'court', 'boudoir_aesthetic'],
    fusion: ['surreal']
  })),
  cd_emo_mysterious_aura: emotionMystery,
  cd_emo_dreamlike_drift: emotionMystery,
  cd_emo_ritual_trance: universal(2, emotionStylizedReality, fit('usable', {
    strong: ['religious_ritual', 'xianxia'],
    usable: ['dark_fantasy', 'mythic_epic', 'fantasy', 'surreal']
  })),
  cd_emo_uncanny_calm: emotionMystery,
  cd_emo_secretive_charm: emotionMystery,
  cd_emo_strange_innocence: emotionMystery,
  cd_emo_erotic_melancholy: emotionAdult,
  cd_emo_fetishized_distance: emotionAdult,
  cd_emo_uniform_desire: universal(2, emotionAdultReality, fit('none', {
    strong: ['boudoir_aesthetic'],
    usable: ['real_professional', 'fashion_idol', 'romance'],
    fusion: ['noir_crime', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia']
  })),
  cd_emo_collar_control: universal(2, emotionAdultReality, emotionAdultControlFit),
  cd_emo_gloved_touch_fetish: emotionAdult,
  cd_emo_heels_dominance: emotionAdult,
  cd_emo_latex_surface_desire: universal(2, [...emotionAdultReality, 'synthetic_material_desire'], fit('none', {
    strong: ['boudoir_aesthetic'],
    usable: ['fashion_idol', 'cyberpunk'],
    fusion: ['surreal', 'posthuman'],
    weak: ['historical', 'wuxia']
  })),
  cd_emo_medical_control_fetish: universal(2, emotionAdultReality, fit('none', {
    strong: ['boudoir_aesthetic'],
    usable: ['real_professional', 'science_fiction'],
    fusion: ['biopunk', 'body_horror', 'cyberpunk'],
    weak: ['romance', 'wuxia']
  })),
  cd_emo_idol_worship_desire: universal(2, emotionAdultReality, fit('none', {
    strong: ['boudoir_aesthetic', 'fashion_idol'],
    usable: ['romance', 'urban_life'],
    fusion: ['surreal']
  })),
  cd_emo_humiliation_display: universal(2, emotionAdultReality, emotionAdultControlFit),
  cd_emo_monster_attraction: universal(2, emotionAdultReality, fit('none', {
    strong: ['boudoir_aesthetic'],
    usable: ['fantasy', 'dark_fantasy', 'body_horror', 'horror'],
    fusion: ['xianxia', 'biopunk', 'surreal'],
    weak: ['real_professional']
  })),
  cd_emo_power_exchange_tension: universal(2, emotionAdultReality, emotionAdultControlFit)
};

const metaByBlock: Record<string, Record<string, AxisMeta>> = {
  cd_emotional_core: emotionalCoreAxisMeta,
  cd_age: ageAxisMeta,
  cd_gender: genderAxisMeta,
  cd_body_type: bodyAxisMeta,
  cd_beard_style: beardAxisMeta,
  cd_eye_color: eyeColorAxisMeta,
  cd_eye_shape: eyeShapeAxisMeta,
  cd_eye_fx: eyeMutationAxisMeta
};

const stripLegacyAxisFields = (item: LibraryItemDef): LibraryItemDef => {
  const {
    publicFilterTags,
    nativeTags,
    evidenceTags,
    genreTags,
    compatibleGenres,
    excludeGenreTags,
    compatibleEras,
    cultureTags,
    compatibleCultures,
    spaceTags,
    compatibleSpaces,
    conflictTags,
    riskTags,
    typeTags,
    compatibleTypeTags,
    eraTags,
    sceneClassTags,
    sceneTags,
    commonLevel,
    tags,
    ...rest
  } = item;
  void publicFilterTags;
  void nativeTags;
  void evidenceTags;
  void genreTags;
  void compatibleGenres;
  void excludeGenreTags;
  void compatibleEras;
  void cultureTags;
  void compatibleCultures;
  void spaceTags;
  void compatibleSpaces;
  void conflictTags;
  void riskTags;
  void typeTags;
  void compatibleTypeTags;
  void eraTags;
  void sceneClassTags;
  void sceneTags;
  void commonLevel;
  void tags;
  return rest;
};

const applyMeta = (item: LibraryItemDef, meta: AxisMeta): LibraryItemDef => ({
  ...stripLegacyAxisFields(item),
  eras: meta.eraMode === 'universal' ? [] : uniq(toList(meta.eras)),
  eraMode: meta.eraMode,
  eraStrictness: meta.eraMode === 'universal' ? 'none' : item.eraStrictness || 'soft',
  anachronismRisk: meta.eraMode === 'universal' ? 'low' : item.anachronismRisk || 'medium',
  ontologyLevel: meta.ontologyLevel,
  realityTags: uniq(toList(meta.realityTags)),
  categoryFit: normalizeCategoryFit(meta.categoryFit)
});

export const withAppearanceThreeAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => {
  const blockMeta = metaByBlock[blockId];
  if (!blockMeta) return items;
  return items.map(item => {
    const meta = blockMeta[item.id || ''];
    return meta ? applyMeta(item, meta) : item;
  });
};
