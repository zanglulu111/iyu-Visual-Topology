import { ConceptBaseItem, ConceptEra } from '../base/types';

type DynamicActionAxisPatch = Pick<ConceptBaseItem, 'eraMode' | 'eras' | 'ontologyLevel' | 'realityTags' | 'categoryFit'>;

const cf = (
  unlisted: NonNullable<ConceptBaseItem['categoryFit']>['unlisted'],
  strong: readonly string[] = [],
  usable: readonly string[] = [],
  fusion: readonly string[] = [],
  weak: readonly string[] = [],
  exclude: readonly string[] = []
): NonNullable<ConceptBaseItem['categoryFit']> => ({ unlisted, strong, usable, fusion, weak, exclude });

const axis = (
  eras: readonly ConceptEra[],
  ontologyLevel: 1 | 2 | 3 | 4 | 5,
  realityTags: readonly string[],
  categoryFit: NonNullable<ConceptBaseItem['categoryFit']>,
  eraMode: 'specific' | 'universal' = 'specific'
): DynamicActionAxisPatch => ({ eraMode, eras, ontologyLevel, realityTags, categoryFit });

const era = {
  ancient: ['slave', 'feudal'] as const,
  feudal: ['feudal'] as const,
  early: ['early_modern'] as const,
  industrial: ['industrial'] as const,
  modern: ['modern'] as const,
  contemporary: ['contemporary'] as const,
  modernNow: ['modern', 'contemporary'] as const,
  industrialNow: ['industrial', 'modern', 'contemporary'] as const,
  future: ['near_future', 'far_future'] as const,
  near: ['near_future'] as const,
  far: ['far_future'] as const,
  mythic: ['mythic'] as const,
  timeless: ['timeless'] as const,
  all: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'] as const
};

const fit = {
  movement: cf('usable', ['adventure'], ['urban_life', 'war_military', 'wuxia', 'science_fiction'], ['xianxia', 'cyberpunk', 'wasteland'], ['romance', 'court']),
  urbanMovement: cf('weak', ['urban_life', 'adventure'], ['noir_crime', 'science_fiction', 'cyberpunk'], ['wuxia', 'wasteland'], ['historical', 'court', 'xianxia']),
  wuxiaMovement: cf('weak', ['wuxia', 'adventure'], ['historical', 'xianxia'], ['fantasy', 'war_military'], ['urban_life', 'real_professional', 'cyberpunk']),
  vehicleMovement: cf('none', ['urban_life', 'noir_crime', 'adventure'], ['science_fiction', 'cyberpunk'], ['wasteland'], ['historical', 'court', 'wuxia', 'xianxia']),
  fantasyMovement: cf('none', ['fantasy', 'xianxia'], ['mythic_epic', 'adventure'], ['surreal', 'science_fiction'], ['real_professional', 'urban_life']),
  combatMelee: cf('weak', ['war_military', 'wuxia'], ['adventure', 'dark_fantasy', 'historical'], ['xianxia', 'fantasy', 'wasteland'], ['romance', 'fashion_idol']),
  combatGun: cf('none', ['war_military', 'noir_crime'], ['science_fiction', 'cyberpunk', 'wasteland'], ['adventure'], ['historical', 'court', 'wuxia', 'xianxia', 'romance']),
  combatWeapon: cf('weak', ['war_military', 'wuxia'], ['historical', 'adventure', 'dark_fantasy'], ['xianxia', 'fantasy'], ['romance', 'urban_life']),
  combatOccult: cf('none', ['fantasy', 'xianxia', 'dark_fantasy'], ['mythic_epic', 'religious_ritual', 'war_military'], ['science_fiction', 'surreal'], ['real_professional', 'urban_life']),
  violenceHorror: cf('none', ['horror', 'body_horror'], ['dark_fantasy', 'war_military'], ['wasteland', 'surreal'], ['romance', 'fashion_idol', 'court']),
  emotion: cf('usable', ['romance'], ['urban_life', 'horror', 'noir_crime'], ['dark_fantasy', 'surreal', 'fashion_idol'], ['war_military']),
  emotionDark: cf('usable', ['horror', 'romance'], ['dark_fantasy', 'urban_life', 'noir_crime'], ['surreal', 'body_horror'], ['fashion_idol']),
  emotionIntimate: cf('usable', ['romance', 'boudoir_aesthetic'], ['fashion_idol', 'urban_life'], ['noir_crime', 'surreal'], ['war_military']),
  emotionAggressive: cf('usable', ['noir_crime', 'war_military'], ['urban_life', 'horror'], ['wuxia', 'wasteland'], ['romance', 'court']),
  environment: cf('usable', ['adventure', 'ecological'], ['urban_life', 'wasteland', 'real_professional'], ['fantasy', 'wuxia', 'science_fiction'], ['court']),
  environmentUrban: cf('weak', ['urban_life', 'adventure'], ['noir_crime', 'real_professional'], ['cyberpunk', 'wasteland'], ['historical', 'court', 'xianxia']),
  environmentHistorical: cf('usable', ['historical', 'adventure'], ['wuxia', 'war_military', 'ecological'], ['xianxia', 'dark_fantasy'], ['cyberpunk']),
  fantasyPower: cf('none', ['xianxia', 'fantasy'], ['mythic_epic', 'dark_fantasy', 'religious_ritual'], ['science_fiction', 'surreal'], ['real_professional', 'urban_life']),
  sciFiPower: cf('none', ['science_fiction', 'cyberpunk', 'posthuman'], ['biopunk'], ['fantasy', 'surreal', 'horror'], ['historical', 'court', 'wuxia']),
  darkPower: cf('none', ['dark_fantasy', 'horror'], ['body_horror', 'religious_ritual', 'fantasy'], ['xianxia', 'surreal'], ['urban_life', 'romance']),
  abstractAction: cf('none', ['abstract', 'surreal'], ['horror', 'body_horror', 'fashion_idol'], ['science_fiction', 'fantasy', 'romance'], ['real_professional', 'war_military']),
  abstractTech: cf('none', ['abstract', 'science_fiction', 'cyberpunk'], ['surreal', 'posthuman'], ['horror', 'fashion_idol'], ['historical', 'court', 'wuxia']),
  abstractInk: cf('weak', ['abstract'], ['wuxia', 'xianxia', 'historical'], ['surreal', 'fantasy'], ['science_fiction', 'cyberpunk'])
};

const DYNAMIC_ACTION_AXIS: Record<string, DynamicActionAxisPatch> = {
  cd_dynamic_act_dyn_sprint_blur: axis(era.all, 1, ['realistic', 'physical', 'sprint', 'motion_blur'], fit.movement, 'universal'),
  cd_dynamic_act_dyn_leap_roof: axis(era.modernNow, 2, ['stylized', 'physical', 'rooftop_leap', 'urban_gap'], fit.urbanMovement),
  cd_dynamic_act_dyn_freefall: axis(era.timeless, 4, ['nonreal', 'freefall', 'void_motion', 'gravity_loss'], fit.abstractAction),
  cd_dynamic_act_dyn_parkour_roll: axis(era.modernNow, 1, ['realistic', 'physical', 'parkour_roll', 'impact_recovery'], fit.urbanMovement),
  cd_dynamic_act_dyn_wall_run: axis(era.all, 3, ['semi_surreal', 'physical', 'wall_run', 'gravity_defiance'], fit.wuxiaMovement, 'universal'),
  cd_dynamic_act_dyn_slide_sparks: axis(era.industrialNow, 2, ['stylized', 'physical', 'slide_action', 'metal_sparks'], fit.urbanMovement),
  cd_dynamic_act_dyn_dive_water: axis(era.all, 1, ['realistic', 'physical', 'high_dive', 'water_entry'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_motorcycle_lean: axis(era.industrialNow, 1, ['realistic', 'physical', 'motorcycle_lean', 'vehicle_motion'], fit.vehicleMovement),
  cd_dynamic_act_dyn_car_drift: axis(era.industrialNow, 1, ['realistic', 'physical', 'car_drift', 'vehicle_motion'], fit.vehicleMovement),
  cd_dynamic_act_dyn_flight_super: axis(era.timeless, 4, ['nonreal', 'supersonic_flight', 'superhuman_motion'], fit.fantasyMovement),
  cd_dynamic_act_dyn_swim_deep: axis(era.all, 1, ['realistic', 'physical', 'deep_swim', 'underwater_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_crawl_mud: axis(era.all, 1, ['realistic', 'physical', 'mud_crawl', 'survival_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_swing_rope: axis(era.all, 1, ['realistic', 'physical', 'rope_swing', 'pendulum_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_climb_mountain: axis(era.all, 1, ['realistic', 'physical', 'mountain_climb', 'vertical_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_chase_crowd: axis(era.ancient, 1, ['realistic', 'physical', 'crowd_chase', 'pursuit_motion'], fit.movement, 'universal'),
  cd_dynamic_act_dyn_backflip: axis(era.all, 1, ['realistic', 'physical', 'backflip', 'acrobatic_motion'], fit.movement, 'universal'),
  cd_dynamic_act_dyn_teleport_dash: axis(era.timeless, 4, ['nonreal', 'teleport_dash', 'instant_motion'], fit.fantasyMovement),
  cd_dynamic_act_dyn_skate_trick: axis(era.modernNow, 1, ['realistic', 'physical', 'skate_trick', 'urban_sport'], fit.urbanMovement),
  cd_dynamic_act_dyn_horse_gallop: axis(era.ancient, 1, ['realistic', 'physical', 'horse_gallop', 'mounted_motion'], fit.environmentHistorical),
  cd_dynamic_act_dyn_levitate_rise: axis(era.timeless, 4, ['nonreal', 'levitation_rise', 'gravity_break'], fit.fantasyMovement),

  cd_dynamic_act_dyn_punch_impact: axis(era.all, 1, ['realistic', 'physical', 'punch_impact', 'melee_combat'], fit.combatMelee, 'universal'),
  cd_dynamic_act_dyn_kick_high: axis(era.all, 1, ['realistic', 'physical', 'flying_kick', 'martial_motion'], fit.combatMelee, 'universal'),
  cd_dynamic_act_dyn_sword_slash: axis(era.ancient, 1, ['realistic', 'physical', 'sword_slash', 'blade_combat'], fit.combatWeapon),
  cd_dynamic_act_dyn_gun_recoil: axis(era.industrialNow, 1, ['realistic', 'physical', 'gun_recoil', 'firearm_action'], fit.combatGun),
  cd_dynamic_act_dyn_dodge_matrix: axis(era.future, 3, ['semi_surreal', 'physical', 'bullet_dodge', 'hyper_reflex'], fit.sciFiPower),
  cd_dynamic_act_dyn_block_shield: axis(era.ancient, 1, ['realistic', 'physical', 'shield_block', 'defensive_combat'], fit.combatWeapon),
  cd_dynamic_act_dyn_strangle_hold: axis(era.all, 2, ['stylized', 'physical', 'strangle_hold', 'close_combat'], fit.violenceHorror, 'universal'),
  cd_dynamic_act_dyn_throw_knife: axis(era.ancient, 1, ['realistic', 'physical', 'knife_throw', 'projectile_combat'], fit.combatWeapon),
  cd_dynamic_act_dyn_whip_crack: axis(era.ancient, 1, ['realistic', 'physical', 'whip_crack', 'flexible_weapon'], fit.combatWeapon),
  cd_dynamic_act_dyn_tackle_rugby: axis(era.industrialNow, 1, ['realistic', 'physical', 'body_tackle', 'impact_collision'], fit.combatMelee),
  cd_dynamic_act_dyn_dual_wield: axis(era.industrialNow, 2, ['stylized', 'physical', 'dual_wield_guns', 'firearm_action'], fit.combatGun),
  cd_dynamic_act_dyn_axe_swing: axis(era.ancient, 1, ['realistic', 'physical', 'axe_swing', 'heavy_weapon'], fit.combatWeapon),
  cd_dynamic_act_dyn_archery_loose: axis(era.ancient, 1, ['realistic', 'physical', 'archery_release', 'bow_combat'], fit.combatWeapon),
  cd_dynamic_act_dyn_knee_strike: axis(era.all, 1, ['realistic', 'physical', 'knee_strike', 'melee_combat'], fit.combatMelee, 'universal'),
  cd_dynamic_act_dyn_headbutt: axis(era.all, 1, ['realistic', 'physical', 'headbutt', 'brutal_contact'], fit.combatMelee, 'universal'),
  cd_dynamic_act_dyn_grapple_struggle: axis(era.all, 1, ['realistic', 'physical', 'grappling', 'ground_combat'], fit.combatMelee, 'universal'),
  cd_dynamic_act_dyn_spell_cast: axis(era.timeless, 4, ['nonreal', 'spell_blast', 'magic_action'], fit.combatOccult),
  cd_dynamic_act_dyn_reloading_fast: axis(era.industrialNow, 1, ['realistic', 'physical', 'fast_reload', 'firearm_handling'], fit.combatGun),
  cd_dynamic_act_dyn_blood_spit: axis(era.all, 2, ['stylized', 'physical', 'blood_spit', 'injured_counterattack'], fit.violenceHorror, 'universal'),
  cd_dynamic_act_dyn_execution: axis(era.ancient, 2, ['stylized', 'physical', 'execution_pose', 'lethal_power'], fit.violenceHorror, 'universal'),

  cd_dynamic_act_dyn_scream_sky: axis(era.all, 1, ['realistic', 'physical', 'sky_scream', 'emotional_outburst'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_laugh_manic: axis(era.all, 2, ['stylized', 'physical', 'manic_laugh', 'unstable_emotion'], fit.emotionDark, 'universal'),
  cd_dynamic_act_dyn_cry_collapse: axis(era.all, 1, ['realistic', 'physical', 'crying_collapse', 'grief_body'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_fear_cower: axis(era.all, 1, ['realistic', 'physical', 'fear_cower', 'defensive_emotion'], fit.emotionDark, 'universal'),
  cd_dynamic_act_dyn_reach_desperate: axis(era.all, 1, ['realistic', 'physical', 'desperate_reach', 'need_gesture'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_hug_tight: axis(era.all, 1, ['realistic', 'physical', 'tight_hug', 'relationship_action'], fit.emotionIntimate, 'universal'),
  cd_dynamic_act_dyn_shatter_mirror: axis(era.ancient, 2, ['stylized', 'physical', 'mirror_shatter', 'rage_action'], fit.emotionAggressive, 'universal'),
  cd_dynamic_act_dyn_tear_clothes: axis(era.all, 2, ['stylized', 'physical', 'tear_clothes', 'distress_action'], fit.emotionDark, 'universal'),
  cd_dynamic_act_dyn_vomit_visceral: axis(era.all, 2, ['realistic', 'physical', 'vomit_action', 'body_distress'], fit.violenceHorror, 'universal'),
  cd_dynamic_act_dyn_kiss_passion: axis(era.all, 1, ['realistic', 'physical', 'passionate_kiss', 'intimate_action'], fit.emotionIntimate, 'universal'),
  cd_dynamic_act_dyn_dance_trance: axis(era.all, 2, ['stylized', 'physical', 'trance_dance', 'ecstatic_motion'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_shiver_cold: axis(era.all, 1, ['realistic', 'physical', 'cold_shiver', 'weather_response'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_faint_swoon: axis(era.all, 1, ['realistic', 'physical', 'fainting_body', 'collapse_action'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_slap_face: axis(era.all, 1, ['realistic', 'physical', 'face_slap', 'anger_action'], fit.emotionAggressive, 'universal'),
  cd_dynamic_act_dyn_shake_fist: axis(era.all, 1, ['realistic', 'physical', 'fist_shake', 'anger_gesture'], fit.emotionAggressive, 'universal'),
  cd_dynamic_act_dyn_panic_breath: axis(era.all, 1, ['realistic', 'physical', 'panic_breath', 'fear_body'], fit.emotionDark, 'universal'),
  cd_dynamic_act_dyn_celebrate_jump: axis(era.all, 1, ['realistic', 'physical', 'celebration_jump', 'victory_emotion'], fit.emotion, 'universal'),
  cd_dynamic_act_dyn_drag_body: axis(era.all, 2, ['stylized', 'physical', 'drag_body', 'disturbing_action'], fit.violenceHorror, 'universal'),
  cd_dynamic_act_dyn_throw_object: axis(era.all, 1, ['realistic', 'physical', 'throw_object', 'anger_release'], fit.emotionAggressive, 'universal'),
  cd_dynamic_act_dyn_hair_pull_stress: axis(era.all, 1, ['realistic', 'physical', 'hair_pull_stress', 'distress_body'], fit.emotionDark, 'universal'),

  cd_dynamic_act_dyn_rain_walk: axis(era.all, 1, ['realistic', 'physical', 'rain_walk', 'weather_interaction'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_wade_water: axis(era.all, 1, ['realistic', 'physical', 'wading_water', 'water_resistance'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_push_wind: axis(era.all, 1, ['realistic', 'physical', 'walking_against_wind', 'weather_resistance'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_climb_rubble: axis(era.ancient, 1, ['realistic', 'physical', 'rubble_climb', 'ruin_navigation'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_break_glass: axis(era.industrialNow, 2, ['stylized', 'physical', 'break_glass', 'impact_transition'], fit.environmentUrban),
  cd_dynamic_act_dyn_splash_puddle: axis(era.all, 1, ['realistic', 'physical', 'puddle_splash', 'water_contact'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_part_curtains: axis(era.ancient, 1, ['realistic', 'physical', 'part_curtains', 'threshold_gesture'], fit.environmentHistorical, 'universal'),
  cd_dynamic_act_dyn_dig_earth: axis(era.all, 1, ['realistic', 'physical', 'digging_earth', 'manual_labor'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_swim_underwater: axis(era.all, 1, ['realistic', 'physical', 'underwater_swim', 'water_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_slide_snow: axis(era.all, 1, ['realistic', 'physical', 'snow_slide', 'cold_surface_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_push_door: axis(era.ancient, 1, ['realistic', 'physical', 'push_heavy_door', 'threshold_force'], fit.environmentHistorical, 'universal'),
  cd_dynamic_act_dyn_lift_rock: axis(era.all, 1, ['realistic', 'physical', 'lift_rock', 'heavy_labor'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_cut_vines: axis(era.all, 1, ['realistic', 'physical', 'cut_vines', 'path_clearing'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_balance_beam: axis(era.all, 1, ['realistic', 'physical', 'balance_beam', 'careful_movement'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_hide_corner: axis(era.all, 1, ['realistic', 'physical', 'hide_corner', 'stealth_action'], fit.environmentUrban, 'universal'),
  cd_dynamic_act_dyn_drag_coffin: axis(era.ancient, 2, ['stylized', 'physical', 'drag_coffin', 'death_object_action'], fit.violenceHorror),
  cd_dynamic_act_dyn_climb_ladder: axis(era.ancient, 1, ['realistic', 'physical', 'ladder_climb', 'vertical_tool_motion'], fit.environment, 'universal'),
  cd_dynamic_act_dyn_crawl_vent: axis(era.industrialNow, 1, ['realistic', 'physical', 'vent_crawl', 'confined_motion'], fit.environmentUrban),
  cd_dynamic_act_dyn_kick_door: axis(era.ancient, 1, ['realistic', 'physical', 'kick_door', 'entry_force'], fit.environmentUrban, 'universal'),
  cd_dynamic_act_dyn_fall_sand: axis(era.all, 2, ['stylized', 'physical', 'quicksand_fall', 'terrain_trap'], fit.environment, 'universal'),

  cd_dynamic_act_dyn_levitate_meditate: axis(era.timeless, 4, ['nonreal', 'levitating_meditation', 'spiritual_power'], fit.fantasyPower),
  cd_dynamic_act_dyn_summon_beast: axis(era.mythic, 4, ['nonreal', 'summon_beast', 'contract_magic'], fit.fantasyPower),
  cd_dynamic_act_dyn_transform_wolf: axis(era.timeless, 4, ['nonreal', 'wolf_transformation', 'body_shift'], fit.darkPower),
  cd_dynamic_act_dyn_teleport_blink: axis(era.timeless, 4, ['nonreal', 'blink_teleport', 'instant_displacement'], fit.fantasyPower),
  cd_dynamic_act_dyn_control_fire: axis(era.timeless, 4, ['nonreal', 'fire_control', 'elemental_power'], fit.fantasyPower),
  cd_dynamic_act_dyn_water_bend: axis(era.timeless, 4, ['nonreal', 'water_bending', 'elemental_power'], fit.fantasyPower),
  cd_dynamic_act_dyn_eye_laser: axis(era.future, 4, ['nonreal', 'eye_laser', 'energy_projection'], fit.sciFiPower),
  cd_dynamic_act_dyn_grow_wings: axis(era.mythic, 4, ['nonreal', 'wing_growth', 'body_transformation'], fit.fantasyPower),
  cd_dynamic_act_dyn_time_stop: axis(era.timeless, 5, ['abstract', 'time_stop', 'temporal_power'], fit.fantasyPower),
  cd_dynamic_act_dyn_invisible_fade: axis(era.timeless, 4, ['nonreal', 'invisibility_fade', 'body_absence'], fit.fantasyPower),
  cd_dynamic_act_dyn_clone_split: axis(era.timeless, 4, ['nonreal', 'clone_split', 'body_multiplication'], fit.fantasyPower),
  cd_dynamic_act_dyn_force_push: axis(era.timeless, 4, ['nonreal', 'force_push', 'invisible_energy'], fit.fantasyPower),
  cd_dynamic_act_dyn_absorb_soul: axis(era.mythic, 5, ['nonreal', 'soul_absorption', 'dark_ritual_power'], fit.darkPower),
  cd_dynamic_act_dyn_phase_wall: axis(era.timeless, 4, ['nonreal', 'phase_wall', 'matter_intangibility'], fit.fantasyPower),
  cd_dynamic_act_dyn_create_portal: axis(era.timeless, 4, ['nonreal', 'portal_creation', 'space_threshold'], fit.fantasyPower),
  cd_dynamic_act_dyn_lightning_strike: axis(era.mythic, 4, ['nonreal', 'lightning_summon', 'elemental_power'], fit.fantasyPower),
  cd_dynamic_act_dyn_stone_skin: axis(era.mythic, 4, ['nonreal', 'stone_skin', 'body_transformation'], fit.fantasyPower),
  cd_dynamic_act_dyn_shadow_meld: axis(era.timeless, 4, ['nonreal', 'shadow_meld', 'dark_power'], fit.darkPower),
  cd_dynamic_act_dyn_gravity_flip: axis(era.timeless, 5, ['abstract', 'gravity_flip', 'physics_break'], fit.fantasyPower),
  cd_dynamic_act_dyn_necromancy: axis(era.mythic, 5, ['nonreal', 'necromancy', 'death_magic'], fit.darkPower),

  cd_dynamic_act_dyn_melt_dali: axis(era.timeless, 5, ['abstract', 'melting_body', 'dali_surreal_motion'], fit.abstractAction),
  cd_dynamic_act_dyn_shatter_glass: axis(era.timeless, 4, ['abstract', 'glass_shatter_body', 'fragment_motion'], fit.abstractAction),
  cd_dynamic_act_dyn_stretch_limb: axis(era.timeless, 5, ['abstract', 'stretched_limb', 'proportion_break'], fit.abstractAction),
  cd_dynamic_act_dyn_pixel_dissolve: axis(era.future, 5, ['abstract', 'pixel_dissolve', 'digital_disintegration'], fit.abstractTech),
  cd_dynamic_act_dyn_head_explode_flower: axis(era.timeless, 5, ['abstract', 'flower_head_burst', 'symbolic_body_break'], fit.abstractAction),
  cd_dynamic_act_dyn_face_peel: axis(era.timeless, 5, ['nonreal', 'face_peel', 'identity_unmasking'], fit.abstractAction),
  cd_dynamic_act_dyn_float_void: axis(era.timeless, 5, ['abstract', 'void_float', 'gravity_absence'], fit.abstractAction),
  cd_dynamic_act_dyn_multiple_exposure: axis(era.modernNow, 4, ['abstract', 'multiple_exposure', 'motion_layers'], fit.abstractAction),
  cd_dynamic_act_dyn_glitch_twitch: axis(era.future, 5, ['abstract', 'glitch_twitch', 'digital_body_error'], fit.abstractTech),
  cd_dynamic_act_dyn_smoke_form: axis(era.timeless, 5, ['abstract', 'smoke_body', 'form_dissolution'], fit.abstractAction),
  cd_dynamic_act_dyn_geometric_morph: axis(era.timeless, 5, ['abstract', 'geometric_morph', 'shape_transformation'], fit.abstractAction),
  cd_dynamic_act_dyn_mirror_reflection: axis(era.ancient, 4, ['abstract', 'mirror_shatter', 'reflection_break'], fit.abstractAction, 'universal'),
  cd_dynamic_act_dyn_ink_spill: axis(era.timeless, 4, ['abstract', 'ink_spill', 'eastern_abstraction'], fit.abstractInk),
  cd_dynamic_act_dyn_wire_unravel: axis(era.industrialNow, 5, ['abstract', 'wire_unravel', 'body_deconstruction'], fit.abstractAction),
  cd_dynamic_act_dyn_balloon_float: axis(era.timeless, 4, ['nonreal', 'balloon_float', 'light_gravity'], fit.abstractAction),
  cd_dynamic_act_dyn_inside_out: axis(era.timeless, 5, ['nonreal', 'inside_out_body', 'body_horror'], fit.abstractAction),
  cd_dynamic_act_dyn_silence_scream: axis(era.timeless, 5, ['abstract', 'silent_scream', 'symbolic_emotion'], fit.abstractAction),
  cd_dynamic_act_dyn_shadow_puppet: axis(era.ancient, 4, ['abstract', 'shadow_puppet', 'silhouette_performance'], fit.abstractInk, 'universal'),
  cd_dynamic_act_dyn_color_drip: axis(era.timeless, 5, ['abstract', 'color_drip', 'paint_motion'], fit.abstractAction),
  cd_dynamic_act_dyn_static_noise: axis(era.modernNow, 5, ['abstract', 'static_noise', 'screen_signal_body'], fit.abstractTech)
};

// 动态动作 / CD_DYNAMIC_ACTION
// 独立于情绪美学旧词库；每个词条都显式携带时空、超现实、风险与动作裁决参数。
const CD_DYNAMIC_ACTION_ITEMS: ConceptBaseItem[] = [
  {
    id: 'cd_dynamic_act_dyn_sprint_blur',
    name: '极速冲刺',
    nameEn: 'Sprinting desperately through a neon-lit alleyway',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '极速冲刺：高速位移。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Sprinting desperately through a neon-lit alleyway with motion blur streaking the background.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_leap_roof',
    name: '天台跳跃',
    nameEn: 'Leaping across a wide gap between two skyscrapers',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '天台跳跃：高速位移。通过下肢重心、表演节奏建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、表演节奏，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight, performance rhythm to define movement direction, force source, and instant tension; control lower-body weight, performance rhythm. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Leaping across a wide gap between two skyscrapers with legs tucked high against a sunset city skyline.',
    ontologyLevel: 1,
    eras: [
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'pose',
      'body',
      'costume'
    ],
    risk: 'medium',
    controls: [
      'body_language',
      'desire_pose'
    ],
    forbids: [
      'minor-coded subject',
      'explicit sex act',
      'non-consensual scene'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'performance'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_freefall',
    name: '自由坠落',
    nameEn: 'Falling backwards into a void',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '自由坠落：高速位移。通过手部动作、下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、下肢重心、环境阻力，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses hand gesture, lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control hand gesture, lower-body weight, environmental resistance. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Falling backwards into a void with arms wide open and clothes flapping violently in the wind.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_parkour_roll',
    name: '跑酷翻滚',
    nameEn: 'Executing a perfect parkour roll on concrete',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '跑酷翻滚：高速位移。通过下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight to define movement direction, force source, and instant tension; control lower-body weight. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Executing a perfect parkour roll on concrete after a high drop, dust flying up.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_wall_run',
    name: '飞檐走壁',
    nameEn: 'Running horizontally along a vertical wall defying gravity',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '飞檐走壁：高速位移。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Running horizontally along a vertical wall defying gravity with intense momentum.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_slide_sparks',
    name: '滑铲火花',
    nameEn: 'Sliding knees-first across a metal floor creating',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '滑铲火花：高速位移。通过下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight to define movement direction, force source, and instant tension; control lower-body weight. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Sliding knees-first across a metal floor creating a shower of bright yellow sparks.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_dive_water',
    name: '高空跳水',
    nameEn: 'Diving headfirst from a high cliff into',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '高空跳水：高速位移。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Diving headfirst from a high cliff into deep blue water, body perfectly streamlined.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_motorcycle_lean',
    name: '摩托压弯',
    nameEn: 'Leaning a heavy motorcycle dangerously close to',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '摩托压弯：高速位移。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Leaning a heavy motorcycle dangerously close to the asphalt in a high-speed turn.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_car_drift',
    name: '汽车漂移',
    nameEn: 'Drifting a sports car sideways through a rainy intersection',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '汽车漂移：高速位移。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Drifting a sports car sideways through a rainy intersection with smoke pouring from tires.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_flight_super',
    name: '超音速飞行',
    nameEn: 'Flying horizontally through clouds at supersonic speed',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '超音速飞行：高速位移。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Flying horizontally through clouds at supersonic speed with a shockwave cone visible.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_swim_deep',
    name: '深海潜游',
    nameEn: 'Swimming powerfully downwards into the abyss',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '深海潜游：高速位移。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Swimming powerfully downwards into the abyss with fins kicking up bubbles.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_crawl_mud',
    name: '泥泞匍匐',
    nameEn: 'Crawling frantically through thick mud',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '泥泞匍匐：高速位移。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Crawling frantically through thick mud under barbed wire in a rainstorm.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_swing_rope',
    name: '绳索摆荡',
    nameEn: 'Swinging on a rope across a chasm',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '绳索摆荡：高速位移。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Swinging on a rope across a chasm like an adventurer over a jungle canopy.',
    ontologyLevel: 1,
    eras: [
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'pose',
      'body',
      'costume'
    ],
    risk: 'medium',
    controls: [
      'body_language',
      'desire_pose'
    ],
    forbids: [
      'minor-coded subject',
      'explicit sex act',
      'non-consensual scene'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_climb_mountain',
    name: '徒手攀岩',
    nameEn: 'Climbing a sheer rock face',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '徒手攀岩：高速位移。通过面部表情、手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、手部动作，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses facial expression, hand gesture to define movement direction, force source, and instant tension; control facial expression, hand gesture. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Climbing a sheer rock face with no gear, muscles straining and chalk dust in air.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_chase_crowd',
    name: '人群追逐',
    nameEn: 'Pushing aggressively through a dense crowd of people in a panic',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '人群追逐：高速位移。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Pushing aggressively through a dense crowd of people in a panic.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_backflip',
    name: '后空翻',
    nameEn: 'Performing a high backflip frozen at the apex of the jump',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '后空翻：高速位移。通过下肢重心、表演节奏建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、表演节奏，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight, performance rhythm to define movement direction, force source, and instant tension; control lower-body weight, performance rhythm. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Performing a high backflip frozen at the apex of the jump.',
    ontologyLevel: 1,
    eras: [
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'pose',
      'body',
      'costume'
    ],
    risk: 'medium',
    controls: [
      'body_language',
      'desire_pose'
    ],
    forbids: [
      'minor-coded subject',
      'explicit sex act',
      'non-consensual scene'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'performance'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_teleport_dash',
    name: '瞬移冲刺',
    nameEn: 'Dashing forward',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '瞬移冲刺：高速位移。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Dashing forward with a trail of glitchy afterimages left behind.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_skate_trick',
    name: '滑板特技',
    nameEn: 'Performing a kickflip over a set of stairs',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '滑板特技：高速位移。通过表演节奏建立第二姿态的运动方向、力量来源和瞬间张力；重点控制表演节奏，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses performance rhythm to define movement direction, force source, and instant tension; control performance rhythm. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Performing a kickflip over a set of stairs with the skateboard mid-rotation.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'performance'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_horse_gallop',
    name: '策马奔腾',
    nameEn: 'Galloping on a black horse across a dusty plain',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '策马奔腾：高速位移。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Galloping on a black horse across a dusty plain with mane flying in the wind.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_levitate_rise',
    name: '缓慢升空',
    nameEn: 'Rising slowly into the air',
    group: 'A. 极速位移',
    groupEn: 'A. High-Speed Movement',
    def: '缓慢升空：高速位移。通过下肢重心、本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、本体异常，服务速度、方向、追逐感和服装受力状态。',
    defEn: 'high-speed movement. It uses lower-body weight, ontology anomaly to define movement direction, force source, and instant tension; control lower-body weight, ontology anomaly. Used for speed, direction, chase energy, and garment stress under motion. Action grammar: Rising slowly into the air with feet dangling and energy swirling around.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_punch_impact',
    name: '碎裂重拳',
    nameEn: 'Delivering a devastating punch',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '碎裂重拳：战斗动势。通过手部动作、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、环境阻力，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses hand gesture, environmental resistance to define movement direction, force source, and instant tension; control hand gesture, environmental resistance. Used for attack, defense, weapon handling, and body impact line. Action grammar: Delivering a devastating punch that shatters the surrounding air like glass shards.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_kick_high',
    name: '凌空飞踢',
    nameEn: 'Executing a high martial arts kick',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '凌空飞踢：战斗动势。通过下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses lower-body weight to define movement direction, force source, and instant tension; control lower-body weight. Used for attack, defense, weapon handling, and body impact line. Action grammar: Executing a high martial arts kick with leg fully extended towards the camera.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_sword_slash',
    name: '居合斩击',
    nameEn: 'Slashing a katana horizontally creating a glowing',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '居合斩击：战斗动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for attack, defense, weapon handling, and body impact line. Action grammar: Slashing a katana horizontally creating a glowing arc of light in the dark.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_gun_recoil',
    name: '开火后坐',
    nameEn: 'Firing a heavy hand cannon',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '开火后坐：战斗动势。通过手部动作、下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、下肢重心，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses hand gesture, lower-body weight to define movement direction, force source, and instant tension; control hand gesture, lower-body weight. Used for attack, defense, weapon handling, and body impact line. Action grammar: Firing a heavy hand cannon with visible muzzle flash and strong recoil pushing arm back.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_dodge_matrix',
    name: '子弹闪避',
    nameEn: 'Dodging backwards in slow motion as a',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '子弹闪避：战斗动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for attack, defense, weapon handling, and body impact line. Action grammar: Dodging backwards in slow motion as a bullet passes inches from the nose.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_block_shield',
    name: '盾牌格挡',
    nameEn: 'Bracing behind a shield as sparks fly',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '盾牌格挡：战斗动势。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for attack, defense, weapon handling, and body impact line. Action grammar: Bracing behind a shield as sparks fly from an incoming heavy blow.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_strangle_hold',
    name: '窒息锁喉',
    nameEn: 'Choking an opponent from behind',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '窒息锁喉：战斗动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for attack, defense, weapon handling, and body impact line. Action grammar: Choking an opponent from behind with a wire, muscles tensed in strain.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_throw_knife',
    name: '飞刀投掷',
    nameEn: 'Throwing a knife',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '飞刀投掷：战斗动势。通过手部动作、道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、道具关系，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses hand gesture, prop relation to define movement direction, force source, and instant tension; control hand gesture, prop relation. Used for attack, defense, weapon handling, and body impact line. Action grammar: Throwing a knife with a blur of motion from the hand.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_whip_crack',
    name: '挥鞭抽击',
    nameEn: 'Cracking a long whip',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '挥鞭抽击：战斗动势。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for attack, defense, weapon handling, and body impact line. Action grammar: Cracking a long whip that creates a sonic boom visual distortion.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_tackle_rugby',
    name: '野蛮冲撞',
    nameEn: 'Tackling an enemy to the ground',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '野蛮冲撞：战斗动势。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for attack, defense, weapon handling, and body impact line. Action grammar: Tackling an enemy to the ground with full body weight and impact.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_dual_wield',
    name: '双枪乱射',
    nameEn: 'Spinning',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '双枪乱射：战斗动势。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for attack, defense, weapon handling, and body impact line. Action grammar: Spinning while firing two pistols in opposite directions amidst shell casings.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_axe_swing',
    name: '战斧劈砍',
    nameEn: 'Swinging a massive battle axe downwards',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '战斧劈砍：战斗动势。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for attack, defense, weapon handling, and body impact line. Action grammar: Swinging a massive battle axe downwards with blurring speed.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_archery_loose',
    name: '弯弓射箭',
    nameEn: 'Releasing a bowstring',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '弯弓射箭：战斗动势。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for attack, defense, weapon handling, and body impact line. Action grammar: Releasing a bowstring with the arrow blurring forward.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_knee_strike',
    name: '飞膝攻击',
    nameEn: "Jumping into a knee strike aimed at an invisible opponent's head",
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '飞膝攻击：战斗动势。通过头颈线条、下肢重心、本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条、下肢重心、本体异常，服务攻击、防御、武器操作和身体冲击线。',
    defEn: "combat motion. It uses head and neck line, lower-body weight, ontology anomaly to define movement direction, force source, and instant tension; control head and neck line, lower-body weight, ontology anomaly. Used for attack, defense, weapon handling, and body impact line. Action grammar: Jumping into a knee strike aimed at an invisible opponent's head.",
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck',
      'lower_body',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_headbutt',
    name: '暴力头槌',
    nameEn: 'Delivering a violent headbutt',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '暴力头槌：战斗动势。通过头颈线条建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses head and neck line to define movement direction, force source, and instant tension; control head and neck line. Used for attack, defense, weapon handling, and body impact line. Action grammar: Delivering a violent headbutt with sweat flying from hair.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_grapple_struggle',
    name: '地面缠斗',
    nameEn: 'Wrestling on the ground in a deadlock of twisted limbs and grit',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '地面缠斗：战斗动势。通过面部表情、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、环境阻力，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses facial expression, environmental resistance to define movement direction, force source, and instant tension; control facial expression, environmental resistance. Used for attack, defense, weapon handling, and body impact line. Action grammar: Wrestling on the ground in a deadlock of twisted limbs and grit.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_spell_cast',
    name: '施法爆破',
    nameEn: 'Thrusting a hand forward to release a',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '施法爆破：战斗动势。通过手部动作、本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、本体异常，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses hand gesture, ontology anomaly to define movement direction, force source, and instant tension; control hand gesture, ontology anomaly. Used for attack, defense, weapon handling, and body impact line. Action grammar: Thrusting a hand forward to release a burst of magical fire energy.',
    ontologyLevel: 3,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_reloading_fast',
    name: '极速换弹',
    nameEn: 'Ejecting a magazine and slamming a new one in',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '极速换弹：战斗动势。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for attack, defense, weapon handling, and body impact line. Action grammar: Ejecting a magazine and slamming a new one in with a blur of hands.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_blood_spit',
    name: '吐血反击',
    nameEn: 'Spitting blood at the camera',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '吐血反击：战斗动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for attack, defense, weapon handling, and body impact line. Action grammar: Spitting blood at the camera while preparing a counter punch.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_execution',
    name: '处决姿态',
    nameEn: 'Raising a weapon high for a final',
    group: 'B. 战斗暴力',
    groupEn: 'B. Combat / Violence',
    def: '处决姿态：战斗动势。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务攻击、防御、武器操作和身体冲击线。',
    defEn: 'combat motion. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for attack, defense, weapon handling, and body impact line. Action grammar: Raising a weapon high for a final execution strike on a kneeling figure.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_scream_sky',
    name: '仰天长啸',
    nameEn: 'Screaming at the sky',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '仰天长啸：情绪爆发。通过面部表情建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses facial expression to define movement direction, force source, and instant tension; control facial expression. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Screaming at the sky with veins popping and mouth wide open in pure rage.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_laugh_manic',
    name: '癫狂大笑',
    nameEn: 'Throwing head back in maniacal laughter',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '癫狂大笑：情绪爆发。通过面部表情、头颈线条建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、头颈线条，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses facial expression, head and neck line to define movement direction, force source, and instant tension; control facial expression, head and neck line. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Throwing head back in maniacal laughter while clutching stomach.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'head_neck'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_cry_collapse',
    name: '崩溃痛哭',
    nameEn: 'Collapsing to knees and burying face in hands',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '崩溃痛哭：情绪爆发。通过面部表情、手部动作、下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、手部动作、下肢重心，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses facial expression, hand gesture, lower-body weight to define movement direction, force source, and instant tension; control facial expression, hand gesture, lower-body weight. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Collapsing to knees and burying face in hands while sobbing violently.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_fear_cower',
    name: '恐惧瑟缩',
    nameEn: 'Cowering in a corner',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '恐惧瑟缩：情绪爆发。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Cowering in a corner with hands raised defensively against a looming shadow.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_reach_desperate',
    name: '绝望伸搜',
    nameEn: 'Reaching out a hand desperately towards something',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '绝望伸搜：情绪爆发。通过眼神方向、手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制眼神方向、手部动作，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses eye direction, hand gesture to define movement direction, force source, and instant tension; control eye direction, hand gesture. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Reaching out a hand desperately towards something disappearing in the distance.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_hug_tight',
    name: '紧紧相拥',
    nameEn: 'Running into a tight embrace, lifting the',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '紧紧相拥：情绪爆发。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Running into a tight embrace, lifting the other person off the ground.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_shatter_mirror',
    name: '拳碎镜面',
    nameEn: 'Punching a mirror in a fit of self-loathing, glass shards flying',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '拳碎镜面：情绪爆发。通过面部表情、手部动作、道具关系、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、手部动作、道具关系、环境阻力，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses facial expression, hand gesture, prop relation, environmental resistance to define movement direction, force source, and instant tension; control facial expression, hand gesture, prop relation, environmental resistance. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Punching a mirror in a fit of self-loathing, glass shards flying.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'hands',
      'prop',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_tear_clothes',
    name: '撕裂衣物',
    nameEn: 'Ripping open own shirt in a display of raw primal grief',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '撕裂衣物：情绪爆发。通过服装接口建立第二姿态的运动方向、力量来源和瞬间张力；重点控制服装接口，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses costume interface to define movement direction, force source, and instant tension; control costume interface. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Ripping open own shirt in a display of raw primal grief.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'costume'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_vomit_visceral',
    name: '剧烈呕吐',
    nameEn: 'Bent over and vomiting violently onto the pavement',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '剧烈呕吐：情绪爆发。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Bent over and vomiting violently onto the pavement.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_kiss_passion',
    name: '激情热吻',
    nameEn: 'Grabbing partner by the hair and kissing them',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '激情热吻：情绪爆发。通过头颈线条建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses head and neck line to define movement direction, force source, and instant tension; control head and neck line. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Grabbing partner by the hair and kissing them with intense passion.',
    ontologyLevel: 1,
    eras: [
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'pose',
      'body',
      'costume'
    ],
    risk: 'medium',
    controls: [
      'body_language',
      'desire_pose'
    ],
    forbids: [
      'minor-coded subject',
      'explicit sex act',
      'non-consensual scene'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_dance_trance',
    name: '迷幻独舞',
    nameEn: 'Dancing alone in a trance state',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '迷幻独舞：情绪爆发。通过眼神方向、表演节奏建立第二姿态的运动方向、力量来源和瞬间张力；重点控制眼神方向、表演节奏，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses eye direction, performance rhythm to define movement direction, force source, and instant tension; control eye direction, performance rhythm. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Dancing alone in a trance state with eyes closed and body swaying.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'gaze',
      'performance'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_shiver_cold',
    name: '寒冷颤抖',
    nameEn: 'Shivering uncontrollably',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '寒冷颤抖：情绪爆发。通过手部动作、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、环境阻力，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses hand gesture, environmental resistance to define movement direction, force source, and instant tension; control hand gesture, environmental resistance. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Shivering uncontrollably with arms wrapped tight around body in snow.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_faint_swoon',
    name: '眩晕昏厥',
    nameEn: "Swooning and falling backwards gracefully into someone's arms",
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '眩晕昏厥：情绪爆发。通过手部动作、下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、下肢重心，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: "emotional outburst. It uses hand gesture, lower-body weight to define movement direction, force source, and instant tension; control hand gesture, lower-body weight. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Swooning and falling backwards gracefully into someone's arms.",
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_slap_face',
    name: '愤怒耳光',
    nameEn: 'Slapping someone across the face',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '愤怒耳光：情绪爆发。通过面部表情、手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、手部动作，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses facial expression, hand gesture to define movement direction, force source, and instant tension; control facial expression, hand gesture. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Slapping someone across the face with a blur of hand motion.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_shake_fist',
    name: '挥拳怒骂',
    nameEn: 'Shaking a fist at an enemy',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '挥拳怒骂：情绪爆发。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Shaking a fist at an enemy while shouting curses.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_panic_breath',
    name: '惊恐喘息',
    nameEn: 'Hyperventilating',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '惊恐喘息：情绪爆发。通过眼神方向、手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制眼神方向、手部动作，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses eye direction, hand gesture to define movement direction, force source, and instant tension; control eye direction, hand gesture. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Hyperventilating with wide eyes and hands clutching the chest.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_celebrate_jump',
    name: '胜利欢呼',
    nameEn: 'Jumping up',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '胜利欢呼：情绪爆发。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Jumping up with both fists raised in pure celebratory joy.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_drag_body',
    name: '拖拽身躯',
    nameEn: 'Dragging own injured body across the floor',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '拖拽身躯：情绪爆发。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Dragging own injured body across the floor with grit and pain.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_throw_object',
    name: '投掷发泄',
    nameEn: 'Throwing a vase across the room in a sudden burst of anger',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '投掷发泄：情绪爆发。通过头颈线条建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses head and neck line to define movement direction, force source, and instant tension; control head and neck line. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Throwing a vase across the room in a sudden burst of anger.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_hair_pull_stress',
    name: '抓扯头发',
    nameEn: 'Pulling at own hair',
    group: 'C. 情感爆发',
    groupEn: 'C. Emotional Outburst',
    def: '抓扯头发：情绪爆发。通过手部动作、头颈线条建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、头颈线条，服务情绪失控、身体崩溃、欢呼、哭喊或强烈外化。',
    defEn: 'emotional outburst. It uses hand gesture, head and neck line to define movement direction, force source, and instant tension; control hand gesture, head and neck line. Used for emotional loss of control, bodily collapse, celebration, crying, or strong externalization. Action grammar: Pulling at own hair with both hands in extreme mental anguish.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_rain_walk',
    name: '雨中漫步',
    nameEn: 'Walking slowly through heavy rain without an umbrella, soaked',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '雨中漫步：环境互动。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Walking slowly through heavy rain without an umbrella, soaked.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_wade_water',
    name: '涉水而行',
    nameEn: 'Wading waist-deep through a swamp',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '涉水而行：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Wading waist-deep through a swamp with ripples spreading out.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_push_wind',
    name: '逆风前行',
    nameEn: 'Leaning forward and struggling to walk',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '逆风前行：环境互动。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Leaning forward and struggling to walk against a hurricane-force wind.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_climb_rubble',
    name: '攀爬废墟',
    nameEn: 'Scrambling up a pile of concrete debris and twisted metal',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '攀爬废墟：环境互动。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Scrambling up a pile of concrete debris and twisted metal.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_break_glass',
    name: '撞碎玻璃',
    nameEn: 'Jumping through a plate glass window',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '撞碎玻璃：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Jumping through a plate glass window with shards exploding outward.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_splash_puddle',
    name: '践踏水坑',
    nameEn: 'Stomping into a puddle sending dirty water splashing everywhere',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '践踏水坑：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Stomping into a puddle sending dirty water splashing everywhere.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_part_curtains',
    name: '拨开帷幕',
    nameEn: 'Parting heavy velvet curtains',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '拨开帷幕：环境互动。通过手部动作、表演节奏建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、表演节奏，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses hand gesture, performance rhythm to define movement direction, force source, and instant tension; control hand gesture, performance rhythm. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Parting heavy velvet curtains with both hands to reveal a stage.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'performance'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_dig_earth',
    name: '疯狂挖掘',
    nameEn: 'Digging into the earth',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '疯狂挖掘：环境互动。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Digging into the earth with bare hands, dirt flying.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_swim_underwater',
    name: '水下潜泳',
    nameEn: 'Swimming gracefully underwater',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '水下潜泳：环境互动。通过头颈线条、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条、环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses head and neck line, environmental resistance to define movement direction, force source, and instant tension; control head and neck line, environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Swimming gracefully underwater with hair floating and bubbles rising.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_slide_snow',
    name: '雪地滑行',
    nameEn: 'Sliding down a snowy slope on boots',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '雪地滑行：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Sliding down a snowy slope on boots with powder spraying up.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_push_door',
    name: '推开重门',
    nameEn: 'Pushing open a massive heavy iron door',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '推开重门：环境互动。通过手部动作、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses hand gesture, environmental resistance to define movement direction, force source, and instant tension; control hand gesture, environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Pushing open a massive heavy iron door with whole body weight.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_lift_rock',
    name: '搬运巨石',
    nameEn: 'Lifting a heavy rock overhead',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '搬运巨石：环境互动。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Lifting a heavy rock overhead with muscles bulging.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_cut_vines',
    name: '斩断藤蔓',
    nameEn: 'Hacking through dense jungle vines',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '斩断藤蔓：环境互动。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Hacking through dense jungle vines with a machete.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_balance_beam',
    name: '走钢丝',
    nameEn: 'Balancing precariously on a thin steel beam high above the city',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '走钢丝：环境互动。通过下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses lower-body weight to define movement direction, force source, and instant tension; control lower-body weight. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Balancing precariously on a thin steel beam high above the city.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_hide_corner',
    name: '角落躲藏',
    nameEn: 'Pressing back flat',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '角落躲藏：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Pressing back flat against a wall corner to hide from a pursuer.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_drag_coffin',
    name: '拖拽棺材',
    nameEn: 'Dragging a heavy wooden coffin through mud by a rope',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '拖拽棺材：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Dragging a heavy wooden coffin through mud by a rope.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_climb_ladder',
    name: '攀爬梯子',
    nameEn: 'Climbing a rusty ladder rapidly towards a hatch',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '攀爬梯子：环境互动。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Climbing a rusty ladder rapidly towards a hatch.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_crawl_vent',
    name: '钻通风管',
    nameEn: 'Crawling through a tight, dusty metal ventilation shaft',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '钻通风管：环境互动。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Crawling through a tight, dusty metal ventilation shaft.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_kick_door',
    name: '脚踹大门',
    nameEn: 'Kicking a wooden door open',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '脚踹大门：环境互动。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Kicking a wooden door open with the sole of a boot.',
    ontologyLevel: 1,
    eras: [
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'prop'
    ],
    risk: 'high',
    controls: [
      'combat_action'
    ],
    forbids: [
      'gore escalation',
      'extra crowd scene',
      'copying exact film or game choreography'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_fall_sand',
    name: '陷落流沙',
    nameEn: 'Sinking slowly into quicksand',
    group: 'D. 环境互动',
    groupEn: 'D. Environmental Interaction',
    def: '陷落流沙：环境互动。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务身体与雨、水、风、废墟、门、地面等环境阻力的关系。',
    defEn: 'environmental interaction. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for body relation to rain, water, wind, rubble, doors, ground, and environmental resistance. Action grammar: Sinking slowly into quicksand while reaching up.',
    ontologyLevel: 1,
    eras: [
      'primitive',
      'slave',
      'feudal',
      'early_modern',
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_levitate_meditate',
    name: '悬浮冥想',
    nameEn: 'Levitating cross-legged in mid-air',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '悬浮冥想：超能动作。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Levitating cross-legged in mid-air with glowing energy aura.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_summon_beast',
    name: '召唤契约',
    nameEn: 'Slamming hand on ground to summon a giant spectral beast',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '召唤契约：超能动作。通过手部动作、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作、环境阻力，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses hand gesture, environmental resistance to define movement direction, force source, and instant tension; control hand gesture, environmental resistance. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Slamming hand on ground to summon a giant spectral beast.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_transform_wolf',
    name: '狼人变身',
    nameEn: 'Mid-transformation into a werewolf',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '狼人变身：超能动作。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Mid-transformation into a werewolf with fur bursting from skin.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_teleport_blink',
    name: '闪现位移',
    nameEn: 'Disappearing in a puff of smoke and reappearing elsewhere',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '闪现位移：超能动作。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Disappearing in a puff of smoke and reappearing elsewhere.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_control_fire',
    name: '操控火焰',
    nameEn: 'Manipulating a stream of fire',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '操控火焰：超能动作。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Manipulating a stream of fire with hand movements like a dancer.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_water_bend',
    name: '水流御术',
    nameEn: 'Bending a whip of water from a nearby lake',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '水流御术：超能动作。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Bending a whip of water from a nearby lake.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_eye_laser',
    name: '镭射眼',
    nameEn: 'Shooting red laser beams from eyes',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '镭射眼：超能动作。通过眼神方向建立第二姿态的运动方向、力量来源和瞬间张力；重点控制眼神方向，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses eye direction to define movement direction, force source, and instant tension; control eye direction. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Shooting red laser beams from eyes that cut through steel.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_grow_wings',
    name: '展开光翼',
    nameEn: 'Sprouting giant glowing wings of light from the back',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '展开光翼：超能动作。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Sprouting giant glowing wings of light from the back.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_time_stop',
    name: '时间停止',
    nameEn: 'Walking casually',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '时间停止：超能动作。通过下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses lower-body weight to define movement direction, force source, and instant tension; control lower-body weight. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Walking casually while raindrops are frozen in mid-air around.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_invisible_fade',
    name: '逐渐隐形',
    nameEn: 'Fading into transparency starting from the fingertips',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '逐渐隐形：超能动作。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Fading into transparency starting from the fingertips.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_clone_split',
    name: '分身术',
    nameEn: 'Splitting into three identical copies of self',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '分身术：超能动作。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Splitting into three identical copies of self.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_force_push',
    name: '原力推击',
    nameEn: 'Thrusting palm forward to send enemies flying back',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '原力推击：超能动作。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Thrusting palm forward to send enemies flying back.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_absorb_soul',
    name: '吸取灵魂',
    nameEn: 'Sucking a blue ghostly essence out of a fallen body',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '吸取灵魂：超能动作。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Sucking a blue ghostly essence out of a fallen body.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_phase_wall',
    name: '穿墙术',
    nameEn: 'Walking straight through a solid brick wall',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '穿墙术：超能动作。通过下肢重心、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、环境阻力，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses lower-body weight, environmental resistance to define movement direction, force source, and instant tension; control lower-body weight, environmental resistance. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Walking straight through a solid brick wall.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_create_portal',
    name: '开启传送门',
    nameEn: 'Drawing a glowing circle in the air',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '开启传送门：超能动作。通过环境阻力、本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力、本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses environmental resistance, ontology anomaly to define movement direction, force source, and instant tension; control environmental resistance, ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Drawing a glowing circle in the air that opens a portal.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_lightning_strike',
    name: '引雷',
    nameEn: 'Calling down a bolt of lightning into a raised sword',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '引雷：超能动作。通过道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制道具关系，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses prop relation to define movement direction, force source, and instant tension; control prop relation. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Calling down a bolt of lightning into a raised sword.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_stone_skin',
    name: '石化防御',
    nameEn: 'Skin turning to grey stone to deflect an attack',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '石化防御：超能动作。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Skin turning to grey stone to deflect an attack.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_shadow_meld',
    name: '融入阴影',
    nameEn: 'Melting into a pool of black shadow on the floor',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '融入阴影：超能动作。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Melting into a pool of black shadow on the floor.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_gravity_flip',
    name: '重力反转',
    nameEn: 'Walking on the ceiling',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '重力反转：超能动作。通过头颈线条、下肢重心建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条、下肢重心，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses head and neck line, lower-body weight to define movement direction, force source, and instant tension; control head and neck line, lower-body weight. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Walking on the ceiling while hair hangs upwards.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck',
      'lower_body'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_necromancy',
    name: '死灵复生',
    nameEn: 'Raising hands to make skeleton arms rise from the earth',
    group: 'E. 幻想超能',
    groupEn: 'E. Fantasy / Superpower',
    def: '死灵复生：超能动作。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务魔法、能量、变身、悬浮和非现实能力的动作成立。',
    defEn: 'supernatural action. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for magic, energy, transformation, levitation, and non-realist ability action. Action grammar: Raising hands to make skeleton arms rise from the earth.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_melt_dali',
    name: '达利式融化',
    nameEn: 'Body melting like a clock over a branch in a desert',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '达利式融化：抽象动势。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Body melting like a clock over a branch in a desert.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_shatter_glass',
    name: '玻璃碎裂',
    nameEn: 'Body shattering into thousands of glass fragments',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '玻璃碎裂：抽象动势。通过环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses environmental resistance to define movement direction, force source, and instant tension; control environmental resistance. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Body shattering into thousands of glass fragments.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_stretch_limb',
    name: '无限拉伸',
    nameEn: 'Arm stretching unnaturally long towards the camera',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '无限拉伸：抽象动势。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Arm stretching unnaturally long towards the camera.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_pixel_dissolve',
    name: '像素解体',
    nameEn: 'Dissolving into digital pixel blocks drifting away',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '像素解体：抽象动势。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Dissolving into digital pixel blocks drifting away.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_head_explode_flower',
    name: '花卉爆头',
    nameEn: 'Head exploding into a bouquet of blooming flowers',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '花卉爆头：抽象动势。通过头颈线条建立第二姿态的运动方向、力量来源和瞬间张力；重点控制头颈线条，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses head and neck line to define movement direction, force source, and instant tension; control head and neck line. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Head exploding into a bouquet of blooming flowers.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_face_peel',
    name: '撕下面具',
    nameEn: 'Peeling off own face to reveal a void underneath',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '撕下面具：抽象动势。通过面部表情、服装接口建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、服装接口，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses facial expression, costume interface to define movement direction, force source, and instant tension; control facial expression, costume interface. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Peeling off own face to reveal a void underneath.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'costume'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_float_void',
    name: '虚空漂浮',
    nameEn: 'Floating in a fetal position in infinite black space',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '虚空漂浮：抽象动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Floating in a fetal position in infinite black space.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_multiple_exposure',
    name: '多重曝光',
    nameEn: 'Movement captured as a trail of ghost images',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '多重曝光：抽象动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Movement captured as a trail of ghost images.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_glitch_twitch',
    name: '故障抽搐',
    nameEn: 'Body twitching violently',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '故障抽搐：抽象动势。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Body twitching violently with RGB chromatic aberration.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_smoke_form',
    name: '烟雾化',
    nameEn: 'Turning into swirling smoke',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '烟雾化：抽象动势。通过下肢重心、道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制下肢重心、道具关系，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses lower-body weight, prop relation to define movement direction, force source, and instant tension; control lower-body weight, prop relation. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Turning into swirling smoke while running.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'lower_body',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_geometric_morph',
    name: '几何变形',
    nameEn: 'Morphing into a cluster of floating cubes',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '几何变形：抽象动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Morphing into a cluster of floating cubes.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_mirror_reflection',
    name: '镜面破碎',
    nameEn: 'Reflection in mirror doing something different than subject',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '镜面破碎：抽象动势。通过面部表情、道具关系建立第二姿态的运动方向、力量来源和瞬间张力；重点控制面部表情、道具关系，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses facial expression, prop relation to define movement direction, force source, and instant tension; control facial expression, prop relation. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Reflection in mirror doing something different than subject.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face',
      'prop'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_ink_spill',
    name: '水墨晕染',
    nameEn: 'Body dissolving into spreading black ink in water',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '水墨晕染：抽象动势。通过环境阻力、本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制环境阻力、本体异常，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses environmental resistance, ontology anomaly to define movement direction, force source, and instant tension; control environmental resistance, ontology anomaly. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Body dissolving into spreading black ink in water.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'environment',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_wire_unravel',
    name: '线圈解体',
    nameEn: 'Unravelling like a spool of wire',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '线圈解体：抽象动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Unravelling like a spool of wire.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_balloon_float',
    name: '气球飞升',
    nameEn: 'Floating away',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '气球飞升：抽象动势。通过手部动作建立第二姿态的运动方向、力量来源和瞬间张力；重点控制手部动作，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses hand gesture to define movement direction, force source, and instant tension; control hand gesture. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Floating away while holding a red balloon.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_inside_out',
    name: '内外翻转',
    nameEn: 'Body turning inside out revealing anatomy',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '内外翻转：抽象动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Body turning inside out revealing anatomy.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_silence_scream',
    name: '无声呐喊',
    nameEn: 'Screaming but mouth is erased/smooth skin',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '张口但不扩展成复杂场景，用嘴部、颈部和眉眼张力表现极端恐惧、痛苦或存在性崩溃。',
    defEn: 'An open-mouth scream without expanding into a scene, using mouth, neck, and brow tension to show fear, pain, or collapse.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'face'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_shadow_puppet',
    name: '影子戏',
    nameEn: 'Making shadow puppets',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '影子戏：抽象动势。通过身体动势建立第二姿态的运动方向、力量来源和瞬间张力；重点控制身体动势，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses body motion to define movement direction, force source, and instant tension; control body motion. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Making shadow puppets that come to life.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_color_drip',
    name: '色彩滴落',
    nameEn: 'Skin melting into dripping colorful paint',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '色彩滴落：抽象动势。通过本体异常建立第二姿态的运动方向、力量来源和瞬间张力；重点控制本体异常，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses ontology anomaly to define movement direction, force source, and instant tension; control ontology anomaly. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Skin melting into dripping colorful paint.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_dynamic_act_dyn_static_noise',
    name: '电视雪花',
    nameEn: 'Body replaced by static TV noise signal',
    group: 'F. 艺术抽象',
    groupEn: 'F. Artistic Abstraction',
    def: '电视雪花：抽象动势。通过眼神方向、环境阻力建立第二姿态的运动方向、力量来源和瞬间张力；重点控制眼神方向、环境阻力，服务视觉化解体、变形、重复曝光、媒介化身体和抽象图像事件。',
    defEn: 'abstract motion. It uses eye direction, environmental resistance to define movement direction, force source, and instant tension; control eye direction, environmental resistance. Used for visual disintegration, deformation, repeated exposure, mediated body, and abstract image event. Action grammar: Body replaced by static TV noise signal.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless'
    ],
    affects: [
      'action',
      'pose',
      'ontology'
    ],
    risk: 'high',
    controls: [
      'motion',
      'ontology'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'dynamic',
      'concept-design-action',
      'gaze',
      'environment'
    ]
  }
];

export const CD_DYNAMIC_ACTION: ConceptBaseItem[] = CD_DYNAMIC_ACTION_ITEMS.map(item => ({
  ...item,
  ...DYNAMIC_ACTION_AXIS[item.id]
}));
