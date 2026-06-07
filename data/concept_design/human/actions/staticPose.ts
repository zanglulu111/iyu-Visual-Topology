import { ConceptBaseItem, ConceptEra } from '../base/types';

type StaticPoseAxisPatch = Pick<ConceptBaseItem, 'eraMode' | 'eras' | 'ontologyLevel' | 'realityTags' | 'categoryFit'>;

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
): StaticPoseAxisPatch => ({ eraMode, eras, ontologyLevel, realityTags, categoryFit });

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
  emotional: cf('usable', ['romance'], ['urban_life', 'noir_crime', 'horror', 'fashion_idol'], ['dark_fantasy', 'surreal'], ['war_military']),
  vulnerable: cf('usable', ['romance', 'horror'], ['urban_life', 'noir_crime', 'dark_fantasy'], ['surreal', 'religious_ritual'], ['war_military']),
  secret: cf('usable', ['noir_crime', 'romance'], ['urban_life', 'horror', 'fashion_idol'], ['dark_fantasy', 'surreal'], ['war_military']),
  intimate: cf('usable', ['romance', 'boudoir_aesthetic'], ['fashion_idol', 'urban_life'], ['noir_crime', 'surreal'], ['war_military']),
  beauty: cf('usable', ['fashion_idol', 'boudoir_aesthetic'], ['romance', 'urban_life'], ['surreal'], ['war_military', 'wuxia']),
  fashion: cf('weak', ['fashion_idol'], ['romance', 'boudoir_aesthetic', 'urban_life'], ['surreal', 'cyberpunk'], ['war_military']),
  fashionPower: cf('weak', ['fashion_idol'], ['urban_life', 'romance', 'boudoir_aesthetic'], ['noir_crime', 'cyberpunk', 'surreal'], ['war_military']),
  daily: cf('usable', ['urban_life'], ['romance', 'real_professional', 'fashion_idol'], ['noir_crime', 'horror'], ['war_military']),
  domestic: cf('usable', ['urban_life', 'romance'], ['real_professional', 'fashion_idol'], ['horror', 'noir_crime'], ['war_military']),
  craftDaily: cf('usable', ['real_professional', 'urban_life'], ['romance', 'historical', 'fashion_idol'], ['wuxia', 'xianxia', 'surreal'], ['war_military']),
  intellectual: cf('usable', ['real_professional'], ['urban_life', 'noir_crime', 'historical'], ['science_fiction', 'court', 'surreal'], ['war_military']),
  scienceObserve: cf('weak', ['real_professional', 'science_fiction'], ['urban_life', 'posthuman'], ['horror', 'surreal'], ['wuxia', 'xianxia', 'court']),
  courtIntellect: cf('weak', ['historical', 'court'], ['real_professional', 'religious_ritual'], ['wuxia', 'xianxia', 'dark_fantasy'], ['cyberpunk']),
  occultObserve: cf('weak', ['religious_ritual', 'dark_fantasy'], ['horror', 'historical', 'surreal'], ['xianxia', 'fantasy', 'romance'], ['real_professional']),
  submission: cf('none', ['horror', 'dark_fantasy'], ['religious_ritual', 'war_military'], ['boudoir_aesthetic', 'wasteland', 'science_fiction'], ['urban_life', 'romance']),
  surrender: cf('weak', ['war_military'], ['historical', 'religious_ritual', 'horror'], ['wuxia', 'dark_fantasy'], ['romance', 'fashion_idol']),
  restraintAdult: cf('none', ['boudoir_aesthetic'], ['horror', 'dark_fantasy', 'noir_crime'], ['science_fiction', 'surreal'], ['romance', 'urban_life', 'wuxia', 'xianxia']),
  restraintHorror: cf('none', ['horror', 'dark_fantasy'], ['body_horror', 'religious_ritual', 'wasteland'], ['science_fiction', 'surreal'], ['romance', 'fashion_idol', 'urban_life']),
  surrealBody: cf('none', ['surreal', 'abstract'], ['horror', 'body_horror'], ['fantasy', 'dark_fantasy', 'science_fiction'], ['real_professional', 'urban_life', 'romance']),
  fantasyBody: cf('none', ['fantasy', 'xianxia', 'surreal'], ['dark_fantasy', 'mythic_epic'], ['horror', 'science_fiction'], ['real_professional', 'urban_life']),
  techSurreal: cf('none', ['science_fiction', 'cyberpunk', 'surreal'], ['posthuman', 'abstract'], ['horror', 'fashion_idol'], ['historical', 'court', 'wuxia']),
  abstractPose: cf('none', ['abstract', 'surreal'], ['fashion_idol', 'horror'], ['science_fiction', 'fantasy', 'romance'], ['real_professional', 'war_military'])
};

const STATIC_POSE_AXIS: Record<string, StaticPoseAxisPatch> = {
  cd_static_act_st_stare: axis(era.all, 1, ['realistic', 'physical', 'gaze_pose', 'frontal_stillness'], fit.emotional, 'universal'),
  cd_static_act_st_cry: axis(era.all, 1, ['realistic', 'physical', 'tear_evidence', 'restrained_emotion'], fit.vulnerable, 'universal'),
  cd_static_act_st_closed: axis(era.all, 1, ['realistic', 'physical', 'closed_eyes', 'inward_pose'], fit.emotional, 'universal'),
  cd_static_act_st_profile: axis(era.all, 1, ['realistic', 'physical', 'profile_silhouette', 'portrait_pose'], fit.emotional, 'universal'),
  cd_static_act_st_look_back: axis(era.all, 1, ['realistic', 'physical', 'over_shoulder', 'twisted_neck_pose'], fit.emotional, 'universal'),
  cd_static_act_st_hands_face: axis(era.all, 1, ['realistic', 'physical', 'hands_on_face', 'vulnerable_frame'], fit.vulnerable, 'universal'),
  cd_static_act_st_shush: axis(era.all, 1, ['realistic', 'physical', 'silence_gesture', 'finger_to_lips'], fit.secret, 'universal'),
  cd_static_act_st_covering_eyes: axis(era.all, 1, ['realistic', 'physical', 'covered_eyes', 'avoidant_pose'], fit.vulnerable, 'universal'),
  cd_static_act_st_scream: axis(era.all, 1, ['realistic', 'physical', 'silent_scream', 'emotional_break'], fit.vulnerable, 'universal'),
  cd_static_act_st_smoke_exhale: axis(era.industrialNow, 1, ['realistic', 'physical', 'smoking_pose', 'breath_evidence'], fit.secret),
  cd_static_act_st_bite_lip: axis(era.all, 1, ['realistic', 'physical', 'mouth_gesture', 'tension_pose'], fit.intimate, 'universal'),
  cd_static_act_st_chin_hand: axis(era.all, 1, ['realistic', 'physical', 'thinking_pose', 'hand_to_chin'], fit.intellectual, 'universal'),
  cd_static_act_st_hair_pull: axis(era.all, 1, ['realistic', 'physical', 'hair_grip', 'stress_pose'], fit.vulnerable, 'universal'),
  cd_static_act_st_glass_press: axis(era.industrialNow, 1, ['realistic', 'physical', 'glass_contact', 'barrier_pose'], fit.vulnerable),
  cd_static_act_st_makeup_fix: axis(era.industrialNow, 1, ['realistic', 'physical', 'makeup_pose', 'beauty_gesture'], fit.beauty),
  cd_static_act_st_whisper: axis(era.all, 1, ['realistic', 'physical', 'whisper_pose', 'intimate_distance'], fit.secret, 'universal'),
  cd_static_act_st_adjust_glasses: axis(era.industrialNow, 1, ['realistic', 'physical', 'glasses_gesture', 'controlled_pose'], fit.intellectual),
  cd_static_act_st_head_tilt: axis(era.all, 1, ['realistic', 'physical', 'head_tilt', 'curious_pose'], fit.emotional, 'universal'),
  cd_static_act_st_wink: axis(era.all, 1, ['realistic', 'physical', 'wink', 'playful_gaze'], fit.intimate, 'universal'),
  cd_static_act_st_yawn: axis(era.all, 1, ['realistic', 'physical', 'yawn', 'fatigue_pose'], fit.daily, 'universal'),
  cd_static_act_st_cold_breath: axis(era.all, 1, ['realistic', 'physical', 'cold_breath', 'weather_response'], fit.daily, 'universal'),
  cd_static_act_st_mask_lift: axis(era.all, 1, ['realistic', 'physical', 'mask_reveal', 'identity_gesture'], fit.secret, 'universal'),
  cd_static_act_st_mirror_gaze: axis(era.ancient, 1, ['realistic', 'physical', 'mirror_gaze', 'self_observation'], fit.emotional),
  cd_static_act_st_looking_up: axis(era.all, 1, ['realistic', 'physical', 'upward_gaze', 'seeking_pose'], fit.emotional, 'universal'),
  cd_static_act_st_side_eye: axis(era.all, 1, ['realistic', 'physical', 'side_eye', 'suspicion_pose'], fit.secret, 'universal'),
  cd_static_act_st_neck_touch: axis(era.all, 1, ['realistic', 'physical', 'neck_touch', 'self_contact'], fit.intimate, 'universal'),
  cd_static_act_st_finger_crossed: axis(era.all, 1, ['realistic', 'physical', 'crossed_fingers', 'wish_gesture'], fit.emotional, 'universal'),
  cd_static_act_st_facepalm: axis(era.all, 1, ['realistic', 'physical', 'facepalm', 'exhausted_pose'], fit.daily, 'universal'),
  cd_static_act_st_blowing_kiss: axis(era.all, 1, ['realistic', 'physical', 'blown_kiss', 'flirt_gesture'], fit.intimate, 'universal'),
  cd_static_act_st_tongue_out: axis(era.all, 1, ['realistic', 'physical', 'tongue_out', 'playful_face'], fit.intimate, 'universal'),

  cd_static_act_st_vogue_frame: axis(era.modernNow, 2, ['stylized', 'physical', 'editorial_hand_frame', 'fashion_pose'], fit.fashion),
  cd_static_act_st_lean_back: axis(era.all, 1, ['realistic', 'physical', 'lean_back', 'display_pose'], fit.fashion, 'universal'),
  cd_static_act_st_crouch: axis(era.all, 1, ['realistic', 'physical', 'crouch_pose', 'low_center'], fit.fashionPower, 'universal'),
  cd_static_act_st_hair_flip: axis(era.all, 1, ['realistic', 'physical', 'hair_flip', 'beauty_motion'], fit.fashion, 'universal'),
  cd_static_act_st_model_walk: axis(era.modernNow, 1, ['realistic', 'physical', 'runway_walk', 'fashion_stride'], fit.fashion),
  cd_static_act_st_chin_up: axis(era.all, 1, ['realistic', 'physical', 'chin_up', 'dominant_pose'], fit.fashionPower, 'universal'),
  cd_static_act_st_broken_doll: axis(era.modernNow, 2, ['stylized', 'physical', 'broken_doll_pose', 'editorial_distortion'], fit.fashion),
  cd_static_act_st_hands_hips: axis(era.all, 1, ['realistic', 'physical', 'hands_on_hips', 'confident_pose'], fit.fashionPower, 'universal'),
  cd_static_act_st_over_shoulder: axis(era.all, 1, ['realistic', 'physical', 'over_shoulder', 'fashion_twist'], fit.fashion, 'universal'),
  cd_static_act_st_leg_up: axis(era.all, 2, ['stylized', 'physical', 'high_leg_pose', 'body_line_display'], fit.fashion, 'universal'),
  cd_static_act_st_coat_open: axis(era.industrialNow, 1, ['realistic', 'physical', 'open_coat', 'costume_reveal'], fit.fashion),
  cd_static_act_st_sitting_stool: axis(era.industrialNow, 1, ['realistic', 'physical', 'stool_pose', 'studio_sit'], fit.fashion),
  cd_static_act_st_lying_floor: axis(era.all, 1, ['realistic', 'physical', 'floor_lie', 'editorial_recline'], fit.fashion, 'universal'),
  cd_static_act_st_jumping: axis(era.all, 2, ['stylized', 'physical', 'jump_capture', 'frozen_motion'], fit.fashionPower, 'universal'),
  cd_static_act_st_sunglasses_tip: axis(era.modernNow, 1, ['realistic', 'physical', 'sunglasses_gesture', 'cool_pose'], fit.fashion),
  cd_static_act_st_jacket_shoulder: axis(era.industrialNow, 1, ['realistic', 'physical', 'jacket_over_shoulder', 'casual_status'], fit.fashionPower),
  cd_static_act_st_hand_pocket: axis(era.industrialNow, 1, ['realistic', 'physical', 'hand_in_pocket', 'casual_pose'], fit.fashionPower),
  cd_static_act_st_leaning_wall: axis(era.ancient, 1, ['realistic', 'physical', 'wall_lean', 'relaxed_support'], fit.fashion, 'universal'),
  cd_static_act_st_self_hug: axis(era.all, 1, ['realistic', 'physical', 'self_hug', 'protective_pose'], fit.vulnerable, 'universal'),
  cd_static_act_st_finger_bite: axis(era.all, 1, ['realistic', 'physical', 'finger_bite', 'nervous_intimate_pose'], fit.intimate, 'universal'),
  cd_static_act_st_chair_straddle: axis(era.industrialNow, 1, ['realistic', 'physical', 'chair_straddle', 'editorial_sit'], fit.fashion),
  cd_static_act_st_tiptoe: axis(era.all, 1, ['realistic', 'physical', 'tiptoe', 'light_body_pose'], fit.fashion, 'universal'),
  cd_static_act_st_fabric_play: axis(era.all, 1, ['realistic', 'physical', 'fabric_handling', 'textile_pose'], fit.fashion, 'universal'),
  cd_static_act_st_double_pose: axis(era.modernNow, 3, ['semi_surreal', 'physical', 'mirrored_pose', 'double_body_composition'], fit.fashion),
  cd_static_act_st_glove_pull: axis(era.early, 1, ['realistic', 'physical', 'glove_pull', 'fashion_accessory_gesture'], fit.fashion),
  cd_static_act_st_kneel_profile: axis(era.all, 1, ['realistic', 'physical', 'profile_kneel', 'low_pose'], fit.fashion, 'universal'),
  cd_static_act_st_arm_raise: axis(era.all, 1, ['realistic', 'physical', 'raised_arm', 'body_line_pose'], fit.fashion, 'universal'),
  cd_static_act_st_leg_cross: axis(era.industrialNow, 1, ['realistic', 'physical', 'crossed_legs', 'seated_status'], fit.fashion),
  cd_static_act_st_head_tilt_hand: axis(era.all, 1, ['realistic', 'physical', 'hand_to_head', 'editorial_thought_pose'], fit.fashion, 'universal'),
  cd_static_act_st_walking_away: axis(era.all, 1, ['realistic', 'physical', 'walking_away', 'back_view_pose'], fit.fashionPower, 'universal'),

  cd_static_act_st_fetal: axis(era.all, 1, ['realistic', 'physical', 'fetal_curl', 'protective_rest'], fit.vulnerable, 'universal'),
  cd_static_act_st_sprawl: axis(era.all, 1, ['realistic', 'physical', 'sprawl_pose', 'resting_body'], fit.daily, 'universal'),
  cd_static_act_st_book_read: axis(era.ancient, 1, ['realistic', 'physical', 'reading_pose', 'book_object'], fit.craftDaily, 'universal'),
  cd_static_act_st_coffee_sip: axis(era.industrialNow, 1, ['realistic', 'physical', 'coffee_sip', 'daily_consumption'], fit.daily),
  cd_static_act_st_sleeping: axis(era.all, 1, ['realistic', 'physical', 'sleeping_pose', 'rest_state'], fit.domestic, 'universal'),
  cd_static_act_st_stretching: axis(era.all, 1, ['realistic', 'physical', 'stretch_pose', 'body_waking'], fit.daily, 'universal'),
  cd_static_act_st_bath_soak: axis(era.ancient, 1, ['realistic', 'physical', 'bath_pose', 'water_rest'], fit.domestic, 'universal'),
  cd_static_act_st_window_gaze: axis(era.industrialNow, 1, ['realistic', 'physical', 'window_gaze', 'interior_waiting'], fit.domestic),
  cd_static_act_st_cat_nap: axis(era.ancient, 1, ['realistic', 'physical', 'pet_sleep', 'domestic_rest'], fit.domestic, 'universal'),
  cd_static_act_st_phone_scroll: axis(era.contemporary, 1, ['realistic', 'physical', 'phone_scroll', 'contemporary_daily'], fit.daily),
  cd_static_act_st_writing: axis(era.ancient, 1, ['realistic', 'physical', 'writing_pose', 'handwork'], fit.craftDaily, 'universal'),
  cd_static_act_st_eating: axis(era.all, 1, ['realistic', 'physical', 'eating_pose', 'daily_action'], fit.daily, 'universal'),
  cd_static_act_st_cooking: axis(era.all, 1, ['realistic', 'physical', 'cooking_pose', 'domestic_labor'], fit.craftDaily, 'universal'),
  cd_static_act_st_meditate: axis(era.all, 1, ['realistic', 'physical', 'meditation_pose', 'still_body'], fit.occultObserve, 'universal'),
  cd_static_act_st_music_listen: axis(era.industrialNow, 1, ['realistic', 'physical', 'listening_pose', 'private_rest'], fit.daily),
  cd_static_act_st_plant_water: axis(era.all, 1, ['realistic', 'physical', 'watering_plants', 'domestic_care'], fit.craftDaily, 'universal'),
  cd_static_act_st_typing: axis(era.modernNow, 1, ['realistic', 'physical', 'typing_pose', 'work_interface'], fit.intellectual),
  cd_static_act_st_slouched: axis(era.all, 1, ['realistic', 'physical', 'slouched_sit', 'fatigue_body'], fit.daily, 'universal'),
  cd_static_act_st_hair_brush: axis(era.all, 1, ['realistic', 'physical', 'hair_brush', 'grooming_action'], fit.beauty, 'universal'),
  cd_static_act_st_shoelace: axis(era.industrialNow, 1, ['realistic', 'physical', 'tying_shoelace', 'daily_preparation'], fit.daily),
  cd_static_act_st_hugging_pillow: axis(era.industrialNow, 1, ['realistic', 'physical', 'pillow_hug', 'comfort_pose'], fit.domestic),
  cd_static_act_st_smoking: axis(era.industrialNow, 1, ['realistic', 'physical', 'smoking_pose', 'habit_action'], fit.secret),
  cd_static_act_st_painting: axis(era.ancient, 1, ['realistic', 'physical', 'painting_pose', 'creative_labor'], fit.craftDaily, 'universal'),
  cd_static_act_st_knitting: axis(era.ancient, 1, ['realistic', 'physical', 'knitting_pose', 'textile_labor'], fit.craftDaily, 'universal'),
  cd_static_act_st_balcony_lean: axis(era.industrialNow, 1, ['realistic', 'physical', 'balcony_lean', 'urban_rest'], fit.domestic),
  cd_static_act_st_floor_sit: axis(era.all, 1, ['realistic', 'physical', 'floor_sit', 'low_rest_pose'], fit.domestic, 'universal'),
  cd_static_act_st_yawn_stretch: axis(era.all, 1, ['realistic', 'physical', 'yawn_stretch', 'waking_body'], fit.daily, 'universal'),
  cd_static_act_st_applying_lotion: axis(era.industrialNow, 1, ['realistic', 'physical', 'lotion_action', 'skin_care_pose'], fit.beauty),
  cd_static_act_st_drying_hair: axis(era.industrialNow, 1, ['realistic', 'physical', 'drying_hair', 'after_bath_action'], fit.beauty),
  cd_static_act_st_watching_tv: axis(era.modernNow, 1, ['realistic', 'physical', 'watching_screen', 'domestic_media'], fit.daily),

  cd_static_act_st_thinker: axis(era.ancient, 1, ['realistic', 'physical', 'thinking_pose', 'philosophical_stillness'], fit.intellectual, 'universal'),
  cd_static_act_st_chess: axis(era.ancient, 1, ['realistic', 'physical', 'chess_pose', 'strategy_action'], fit.intellectual, 'universal'),
  cd_static_act_st_microscope: axis(era.industrialNow, 1, ['realistic', 'physical', 'microscope_observation', 'scientific_pose'], fit.scienceObserve),
  cd_static_act_st_telescope: axis(era.early, 1, ['realistic', 'physical', 'telescope_observation', 'astronomy_pose'], fit.scienceObserve),
  cd_static_act_st_examining: axis(era.all, 1, ['realistic', 'physical', 'object_examination', 'inspection_pose'], fit.intellectual, 'universal'),
  cd_static_act_st_writing_blackboard: axis(era.industrialNow, 1, ['realistic', 'physical', 'blackboard_writing', 'teaching_pose'], fit.intellectual),
  cd_static_act_st_library_browse: axis(era.ancient, 1, ['realistic', 'physical', 'library_browse', 'study_action'], fit.intellectual, 'universal'),
  cd_static_act_st_monocle: axis(era.industrial, 1, ['realistic', 'physical', 'monocle_inspection', 'period_intellect'], fit.courtIntellect),
  cd_static_act_st_glasses_bite: axis(era.industrialNow, 1, ['realistic', 'physical', 'glasses_bite', 'thinking_gesture'], fit.intellectual),
  cd_static_act_st_map_read: axis(era.ancient, 1, ['realistic', 'physical', 'map_reading', 'navigation_pose'], fit.intellectual, 'universal'),
  cd_static_act_st_taking_notes: axis(era.ancient, 1, ['realistic', 'physical', 'note_taking', 'study_pose'], fit.intellectual, 'universal'),
  cd_static_act_st_lecture: axis(era.ancient, 1, ['realistic', 'physical', 'lecture_pose', 'public_speaking'], fit.intellectual, 'universal'),
  cd_static_act_st_museum_gaze: axis(era.industrialNow, 1, ['realistic', 'physical', 'museum_gaze', 'art_observation'], fit.intellectual),
  cd_static_act_st_puzzle: axis(era.all, 1, ['realistic', 'physical', 'puzzle_solving', 'focused_pose'], fit.intellectual, 'universal'),
  cd_static_act_st_debating: axis(era.ancient, 1, ['realistic', 'physical', 'debate_gesture', 'argument_pose'], fit.intellectual, 'universal'),
  cd_static_act_st_typing_code: axis(era.modernNow, 1, ['realistic', 'physical', 'coding_pose', 'digital_work'], fit.scienceObserve),
  cd_static_act_st_blueprint: axis(era.industrialNow, 1, ['realistic', 'physical', 'blueprint_reading', 'technical_pose'], fit.scienceObserve),
  cd_static_act_st_specimen: axis(era.industrialNow, 1, ['realistic', 'physical', 'specimen_observation', 'scientific_evidence'], fit.scienceObserve),
  cd_static_act_st_conductor: axis(era.industrialNow, 1, ['realistic', 'physical', 'conductor_pose', 'directing_gesture'], fit.courtIntellect),
  cd_static_act_st_judge: axis(era.ancient, 1, ['realistic', 'physical', 'judging_gaze', 'authority_pose'], fit.courtIntellect, 'universal'),
  cd_static_act_st_tarot: axis(era.early, 2, ['stylized', 'physical', 'tarot_reading', 'occult_observation'], fit.occultObserve),
  cd_static_act_st_clock_watch: axis(era.industrialNow, 1, ['realistic', 'physical', 'watch_repair', 'precision_craft'], fit.scienceObserve),
  cd_static_act_st_calligraphy: axis(era.ancient, 1, ['realistic', 'physical', 'calligraphy_pose', 'brush_control'], fit.courtIntellect, 'universal'),
  cd_static_act_st_surveying: axis(era.early, 1, ['realistic', 'physical', 'surveying_pose', 'measurement_action'], fit.scienceObserve),
  cd_static_act_st_diagnosing: axis(era.ancient, 1, ['realistic', 'physical', 'diagnosis_pose', 'clinical_attention'], fit.scienceObserve, 'universal'),
  cd_static_act_st_praying: axis(era.all, 1, ['realistic', 'physical', 'prayer_pose', 'ritual_stillness'], fit.occultObserve, 'universal'),
  cd_static_act_st_birdwatching: axis(era.industrialNow, 1, ['realistic', 'physical', 'birdwatching', 'field_observation'], fit.scienceObserve),
  cd_static_act_st_eavesdrop: axis(era.all, 1, ['realistic', 'physical', 'eavesdropping', 'secret_attention'], fit.secret, 'universal'),
  cd_static_act_st_detective: axis(era.industrialNow, 1, ['realistic', 'physical', 'detective_thinking', 'clue_pose'], fit.intellectual),
  cd_static_act_st_sculpting: axis(era.ancient, 1, ['realistic', 'physical', 'sculpting_pose', 'manual_art'], fit.craftDaily, 'universal'),

  cd_static_act_st_hands_tied: axis(era.ancient, 2, ['stylized', 'physical', 'bound_hands', 'restraint_pose'], fit.restraintHorror, 'universal'),
  cd_static_act_st_kneeling_head_down: axis(era.all, 1, ['realistic', 'physical', 'kneeling_submission', 'lowered_head'], fit.submission, 'universal'),
  cd_static_act_st_blindfolded: axis(era.all, 2, ['stylized', 'physical', 'blindfolded', 'sensory_restraint'], fit.restraintAdult, 'universal'),
  cd_static_act_st_gagged: axis(era.ancient, 2, ['stylized', 'physical', 'gagged', 'silenced_restraint'], fit.restraintHorror, 'universal'),
  cd_static_act_st_cuffed: axis(era.industrialNow, 1, ['realistic', 'physical', 'handcuffed', 'institutional_restraint'], fit.restraintHorror),
  cd_static_act_st_pinned: axis(era.all, 2, ['stylized', 'physical', 'pinned_body', 'immobilized_pose'], fit.restraintHorror, 'universal'),
  cd_static_act_st_cornered: axis(era.all, 1, ['realistic', 'physical', 'cornered_pose', 'threatened_body'], fit.vulnerable, 'universal'),
  cd_static_act_st_chained: axis(era.ancient, 2, ['stylized', 'physical', 'chained_body', 'metal_restraint'], fit.restraintHorror, 'universal'),
  cd_static_act_st_caged: axis(era.ancient, 2, ['stylized', 'physical', 'caged_body', 'captivity_pose'], fit.restraintHorror, 'universal'),
  cd_static_act_st_puppet_strings: axis(era.timeless, 4, ['nonreal', 'puppet_strings', 'controlled_body', 'surreal_restraint'], fit.surrealBody),
  cd_static_act_st_collar: axis(era.ancient, 2, ['stylized', 'physical', 'collar_restraint', 'neck_control'], fit.restraintAdult, 'universal'),
  cd_static_act_st_begging: axis(era.all, 1, ['realistic', 'physical', 'begging_pose', 'pleading_gesture'], fit.submission, 'universal'),
  cd_static_act_st_straitjacket: axis(era.industrialNow, 2, ['stylized', 'physical', 'straitjacket', 'medical_restraint'], fit.restraintHorror),
  cd_static_act_st_surrender: axis(era.all, 1, ['realistic', 'physical', 'surrender_pose', 'hands_raised'], fit.surrender, 'universal'),
  cd_static_act_st_prostrate: axis(era.all, 1, ['realistic', 'physical', 'prostration', 'ritual_submission'], fit.submission, 'universal'),
  cd_static_act_st_against_wall: axis(era.ancient, 1, ['realistic', 'physical', 'against_wall', 'contained_pose'], fit.submission, 'universal'),
  cd_static_act_st_ball_gag: axis(era.modernNow, 3, ['stylized', 'physical', 'ball_gag', 'adult_restraint'], fit.restraintAdult),
  cd_static_act_st_shibari: axis(era.early, 3, ['stylized', 'physical', 'rope_art', 'adult_restraint'], fit.restraintAdult),
  cd_static_act_st_hostage: axis(era.all, 1, ['realistic', 'physical', 'hostage_pose', 'threatened_body'], fit.restraintHorror, 'universal'),
  cd_static_act_st_yoke: axis(era.ancient, 2, ['stylized', 'physical', 'yoke_restraint', 'historical_punishment'], fit.submission),
  cd_static_act_st_leashed: axis(era.ancient, 3, ['stylized', 'physical', 'leash_restraint', 'guided_body'], fit.restraintAdult, 'universal'),
  cd_static_act_st_carrying_weight: axis(era.all, 1, ['realistic', 'physical', 'carrying_weight', 'burden_pose'], fit.submission, 'universal'),
  cd_static_act_st_trapped_ice: axis(era.timeless, 4, ['nonreal', 'ice_trapped', 'frozen_body', 'elemental_restraint'], fit.fantasyBody),
  cd_static_act_st_webbed: axis(era.timeless, 4, ['nonreal', 'webbed_body', 'monster_restraint', 'organic_trap'], fit.restraintHorror),
  cd_static_act_st_buried_sand: axis(era.all, 2, ['stylized', 'physical', 'buried_in_sand', 'environmental_restraint'], fit.restraintHorror, 'universal'),
  cd_static_act_st_glued: axis(era.timeless, 3, ['semi_surreal', 'physical', 'sticky_restraint', 'immobilized_body'], fit.restraintHorror),
  cd_static_act_st_under_foot: axis(era.all, 3, ['stylized', 'physical', 'underfoot_pose', 'domination_composition'], fit.restraintAdult, 'universal'),
  cd_static_act_st_silenced_hand: axis(era.all, 2, ['stylized', 'physical', 'mouth_covered', 'silenced_body'], fit.restraintHorror, 'universal'),
  cd_static_act_st_frightened_huddle: axis(era.all, 1, ['realistic', 'physical', 'frightened_huddle', 'defensive_pose'], fit.vulnerable, 'universal'),
  cd_static_act_st_marionette_cut: axis(era.timeless, 4, ['nonreal', 'marionette_cut', 'collapsed_control', 'surreal_body'], fit.surrealBody),

  cd_static_act_st_levitating: axis(era.timeless, 4, ['nonreal', 'levitation', 'gravity_break', 'surreal_body'], fit.fantasyBody),
  cd_static_act_st_melting: axis(era.timeless, 5, ['abstract', 'body_melting', 'form_collapse', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_disintegrating: axis(era.timeless, 5, ['abstract', 'body_disintegration', 'particle_loss', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_invisible: axis(era.timeless, 4, ['nonreal', 'invisibility', 'absence_body', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_multi_arms: axis(era.mythic, 4, ['nonreal', 'multi_arms', 'divine_body', 'mythic_pose'], fit.fantasyBody),
  cd_static_act_st_headless: axis(era.timeless, 5, ['nonreal', 'headless_body', 'body_horror', 'identity_absence'], fit.surrealBody),
  cd_static_act_st_duplication: axis(era.timeless, 4, ['nonreal', 'duplicate_body', 'afterimage_pose', 'surreal_multiplication'], fit.surrealBody),
  cd_static_act_st_glitch: axis(era.future, 4, ['abstract', 'digital_glitch', 'data_body', 'broken_render'], fit.techSurreal),
  cd_static_act_st_stone_skin: axis(era.mythic, 4, ['nonreal', 'stone_body', 'petrification', 'mythic_transformation'], fit.fantasyBody),
  cd_static_act_st_plant_growth: axis(era.timeless, 4, ['nonreal', 'plant_growth_body', 'ecological_mutation', 'symbiosis'], fit.fantasyBody),
  cd_static_act_st_faceless: axis(era.timeless, 5, ['nonreal', 'faceless_body', 'identity_erasure', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_liquid_body: axis(era.timeless, 5, ['abstract', 'liquid_body', 'fluid_identity', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_inside_out: axis(era.timeless, 5, ['nonreal', 'inside_out_body', 'body_horror', 'inversion'], fit.surrealBody),
  cd_static_act_st_giant: axis(era.mythic, 4, ['nonreal', 'giant_body', 'scale_shift', 'mythic_body'], fit.fantasyBody),
  cd_static_act_st_tiny: axis(era.timeless, 4, ['nonreal', 'tiny_body', 'scale_shift', 'miniature_body'], fit.fantasyBody),
  cd_static_act_st_merging: axis(era.timeless, 5, ['abstract', 'body_merging', 'identity_fusion', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_fragmented: axis(era.timeless, 5, ['abstract', 'fragmented_body', 'broken_identity', 'symbolic_pose'], fit.abstractPose),
  cd_static_act_st_xray: axis(era.future, 4, ['abstract', 'xray_body', 'transparent_anatomy', 'technical_vision'], fit.techSurreal),
  cd_static_act_st_shadow_detach: axis(era.timeless, 4, ['nonreal', 'shadow_detached', 'split_presence', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_upside_down_head: axis(era.timeless, 5, ['nonreal', 'upside_down_head', 'body_horror', 'impossible_anatomy'], fit.surrealBody),
  cd_static_act_st_eye_mouth: axis(era.timeless, 5, ['nonreal', 'eye_mouth_swap', 'body_horror', 'face_mutation'], fit.surrealBody),
  cd_static_act_st_cloud_head: axis(era.timeless, 5, ['abstract', 'cloud_head', 'identity_vapor', 'surreal_head'], fit.abstractPose),
  cd_static_act_st_glowing_core: axis(era.future, 4, ['nonreal', 'glowing_core', 'energy_body', 'inner_light'], fit.techSurreal),
  cd_static_act_st_infinite_fall: axis(era.timeless, 5, ['abstract', 'infinite_fall', 'gravity_loop', 'void_pose'], fit.abstractPose),
  cd_static_act_st_stretched: axis(era.timeless, 5, ['abstract', 'stretched_body', 'proportion_distortion', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_mirror_portal: axis(era.timeless, 4, ['nonreal', 'mirror_portal', 'threshold_body', 'surreal_space'], fit.surrealBody),
  cd_static_act_st_geometric_head: axis(era.timeless, 5, ['abstract', 'geometric_head', 'symbolic_identity', 'designed_body'], fit.abstractPose),
  cd_static_act_st_burning_man: axis(era.timeless, 4, ['nonreal', 'burning_body', 'elemental_transformation', 'surreal_body'], fit.fantasyBody),
  cd_static_act_st_balloon_float: axis(era.timeless, 4, ['nonreal', 'balloon_float', 'light_gravity', 'surreal_body'], fit.surrealBody),
  cd_static_act_st_void_stare: axis(era.timeless, 5, ['abstract', 'void_stare', 'cosmic_absence', 'symbolic_gaze'], fit.abstractPose)
};

// 姿态语言 / CD_STATIC_POSE
// 独立于情绪美学旧词库；每个词条都显式携带时空、超现实、风险与动作裁决参数。
const CD_STATIC_POSE_ITEMS: ConceptBaseItem[] = [
  {
    id: 'cd_static_act_st_stare',
    name: '直视',
    nameEn: 'Extreme close-up portrait',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '正面直视观者，眼神不躲闪，用于建立强烈身份存在感、压迫感或冷静凝视。',
    defEn: 'A frontal gaze that does not avoid the viewer, used to establish strong identity presence, pressure, or controlled stillness.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_cry',
    name: '无声流泪',
    nameEn: 'Cinematic emotional shot',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '脸部保持克制，只让泪痕成为情绪证据，适合悲伤、悔意、神圣痛苦或压抑崩溃。',
    defEn: 'The face stays restrained while a tear mark becomes the emotional evidence, suited to grief, regret, sacred pain, or suppressed collapse.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_closed',
    name: '闭目养神',
    nameEn: 'Serene portrait of a subject',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '闭眼、放松眉眼和轻微后仰，让角色呈现休息、祈愿、内在感知或短暂脱离外界。',
    defEn: 'Closed eyes, relaxed brow, and slight backward head angle suggest rest, prayer, inward perception, or temporary withdrawal.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_profile',
    name: '侧颜剪影',
    nameEn: 'High contrast profile shot',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '用鼻梁、额头、下颌、颈部和头饰形成侧面识别线，强调贵族感、疏离感或清晰面部结构。',
    defEn: 'Uses forehead, nose bridge, jaw, neck, and headwear to build a readable side silhouette.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_look_back',
    name: '回眸',
    nameEn: 'Over-the-shoulder shot',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '身体离开而头部回看，用肩颈扭转制造迟疑、诱惑、怀疑或命运回头的瞬间。',
    defEn: 'The body turns away while the head looks back, using shoulder-neck twist to create hesitation, seduction, suspicion, or a fateful return of gaze.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_hands_face',
    name: '双手捧脸',
    nameEn: 'Intimate portrait',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '双手托住或压住脸部，让手指成为面部框架，适合脆弱、自我凝视、紧张或被观看感。',
    defEn: 'Both hands hold or press the face, turning fingers into a facial frame for vulnerability, self-gaze, tension, or being-seen awareness.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_shush',
    name: '噤声手势',
    nameEn: 'Close-up of the subject pressing one index finger vertically',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '食指贴近嘴唇，强调秘密、警告、挑衅或仪式性禁言。',
    defEn: 'Index finger near the lips, emphasizing secrecy, warning, provocation, or ritual silence.',
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
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_covering_eyes',
    name: '遮挡双眼',
    nameEn: 'covering their eyes',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '用手、手臂、布料或道具遮住眼睛，制造拒看、羞耻、恐惧、预言或匿名感。',
    defEn: 'Hands, arms, fabric, or props cover the eyes, creating refusal to see, shame, fear, prophecy, or anonymity.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_scream',
    name: '无声呐喊',
    nameEn: 'Emotional breakdown',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '张口但不扩展成复杂场景，用嘴部、颈部和眉眼张力表现极端恐惧、痛苦或存在性崩溃。',
    defEn: 'An open-mouth scream without expanding into a scene, using mouth, neck, and brow tension to show fear, pain, or collapse.',
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
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_smoke_exhale',
    name: '吐烟',
    nameEn: 'Moody noir shot',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '烟雾从口鼻散出并半遮面部，适合疲惫、危险、夜生活、黑色电影或冷淡欲望气质。',
    defEn: 'Smoke leaves the mouth or nose and partially veils the face, suited to fatigue, danger, nightlife, noir mood, or detached desire.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_bite_lip',
    name: '咬唇',
    nameEn: 'Close-up on mouth',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '轻咬下唇，把紧张、犹豫、挑衅或显性欲望压缩到嘴部细节。',
    defEn: 'A subtle lower-lip bite compresses tension, hesitation, provocation, or explicit desire into the mouth detail.',
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
      'static',
      'concept-design-action',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_chin_hand',
    name: '托腮沉思',
    nameEn: 'Thinking pose',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '手掌托住下巴或脸侧，让身体进入思考、厌倦、判断或冷静观看状态。',
    defEn: 'Palm supports the chin or cheek, placing the body in thought, boredom, judgement, or calm observation.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_hair_pull',
    name: '抓发',
    nameEn: 'Stress or frustration shown by the subject',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '手指抓住头发或头皮，表现焦虑、愤怒、崩溃边缘或失控前的自我压迫。',
    defEn: 'Fingers grip hair or scalp, showing anxiety, anger, near-collapse, or self-pressure before losing control.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_glass_press',
    name: '贴紧玻璃',
    nameEn: 'pressing face and hands',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '脸或手贴住透明隔层，让面部变形、呼吸痕迹和隔离感成为设计证据。',
    defEn: 'Face or hands press against a transparent barrier, making distortion, breath trace, and isolation into design evidence.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_makeup_fix',
    name: '补妆',
    nameEn: 'Subject looking into a compact mirror applying',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '用口红、粉扑、镜子或手指修整面部，让妆容成为身份、职业、欲望或表演人格的证据。',
    defEn: 'Lipstick, puff, mirror, or fingers adjust the face, making makeup evidence of identity, profession, desire, or performance persona.',
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
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_whisper',
    name: '耳语',
    nameEn: 'Two subjects',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '耳语：肖像表情。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: "portrait expression. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Two subjects where one leans in close to whisper into the other's ear, hand cupped around mouth, intimate and secretive.",
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_adjust_glasses',
    name: '推眼镜',
    nameEn: 'Anime trope style',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '推眼镜：肖像表情。把眼神方向、手部动作、服装接口、道具关系固定为主视图的可读姿态；重点控制眼神方向、手部动作、服装接口、道具关系，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, hand gesture, costume interface, prop relation into a readable main-view pose; control eye direction, hand gesture, costume interface, prop relation. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Anime trope style where the subject pushes up glasses with middle finger, lens flares obscuring the eyes, intellectual or sinister vibe.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands',
      'costume',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_head_tilt',
    name: '歪头',
    nameEn: 'Curious or creepy pose',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '歪头：肖像表情。把眼神方向、头颈线条固定为主视图的可读姿态；重点控制眼神方向、头颈线条，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, head and neck line into a readable main-view pose; control eye direction, head and neck line. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Curious or creepy pose where the subject tilts head to the side at an unnatural 45-degree angle, eyes wide and staring blankly.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_wink',
    name: '眨眼',
    nameEn: 'Playful portrait',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '眨眼：肖像表情。把眼神方向、面部表情固定为主视图的可读姿态；重点控制眼神方向、面部表情，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, facial expression into a readable main-view pose; control eye direction, facial expression. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Playful portrait where the subject winks one eye with tongue slightly out, showing a cheerful and cheeky expression.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_yawn',
    name: '哈欠',
    nameEn: 'Candid shot of the subject yawning wide,',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '哈欠：肖像表情。把眼神方向、面部表情、手部动作固定为主视图的可读姿态；重点控制眼神方向、面部表情、手部动作，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, facial expression, hand gesture into a readable main-view pose; control eye direction, facial expression, hand gesture. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Candid shot of the subject yawning wide, hand covering mouth, eyes tearing up in morning light.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_cold_breath',
    name: '寒冷哈气',
    nameEn: 'Winter scene',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '寒冷哈气：肖像表情。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Winter scene where the subject blows into cupped hands to warm them, visible vapor cloud in the cold air.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_mask_lift',
    name: '揭开面具',
    nameEn: 'Symbolic shot',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '揭开面具：肖像表情。把眼神方向、面部表情、服装接口固定为主视图的可读姿态；重点控制眼神方向、面部表情、服装接口，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, facial expression, costume interface into a readable main-view pose; control eye direction, facial expression, costume interface. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Symbolic shot where the subject lifts a mask slightly to reveal one eye underneath, the face beneath different from the mask.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_mirror_gaze',
    name: '镜中凝视',
    nameEn: 'looking at their own reflection in a dirty mirror',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '镜中凝视：肖像表情。把眼神方向、道具关系固定为主视图的可读姿态；重点控制眼神方向、道具关系，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, prop relation into a readable main-view pose; control eye direction, prop relation. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Subject looking at their own reflection in a dirty mirror, where the reflection seems to have a different expression.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_looking_up',
    name: '仰望',
    nameEn: 'High angle shot',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '仰望：肖像表情。把眼神方向、面部表情、下肢重心、环境阻力固定为主视图的可读姿态；重点控制眼神方向、面部表情、下肢重心、环境阻力，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, facial expression, lower-body weight, environmental resistance into a readable main-view pose; control eye direction, facial expression, lower-body weight, environmental resistance. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: High angle shot looking down at the subject looking up at the camera or sky with hope or fear, rain falling on face.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_side_eye',
    name: '斜眼',
    nameEn: 'Suspicious glance',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '斜眼：肖像表情。把眼神方向、头颈线条固定为主视图的可读姿态；重点控制眼神方向、头颈线条，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, head and neck line into a readable main-view pose; control eye direction, head and neck line. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Suspicious glance where the subject looks sideways without turning head, eyes narrowed and judging.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_neck_touch',
    name: '抚摸颈部',
    nameEn: 'Sensual or nervous pose',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '抚摸颈部：肖像表情。把手部动作、头颈线条固定为主视图的可读姿态；重点控制手部动作、头颈线条，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes hand gesture, head and neck line into a readable main-view pose; control hand gesture, head and neck line. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Sensual or nervous pose where the subject traces a finger down their own neck, head tilted back exposing the throat.',
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
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_finger_crossed',
    name: '手指交叉',
    nameEn: 'Hopeful gesture',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '手指交叉：肖像表情。把眼神方向、手部动作固定为主视图的可读姿态；重点控制眼神方向、手部动作，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, hand gesture into a readable main-view pose; control eye direction, hand gesture. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Hopeful gesture where the subject holds up crossed fingers, eyes closed making a wish.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_facepalm',
    name: '捂脸叹息',
    nameEn: 'Exasperation shown by hand covering entire face,',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '捂脸叹息：肖像表情。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Exasperation shown by hand covering entire face, sliding down slowly with shoulders slumped.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_blowing_kiss',
    name: '飞吻',
    nameEn: 'Flirty pose',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '飞吻：肖像表情。把眼神方向、面部表情、手部动作固定为主视图的可读姿态；重点控制眼神方向、面部表情、手部动作，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes eye direction, facial expression, hand gesture into a readable main-view pose; control eye direction, facial expression, hand gesture. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Flirty pose with hand palm up near lips blowing air, eyes winking.',
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
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_tongue_out',
    name: '吐舌',
    nameEn: 'Rebellious punk pose',
    group: '1. 情绪肖像',
    groupEn: '1. Emotional Portrait',
    def: '吐舌：肖像表情。把面部表情固定为主视图的可读姿态；重点控制面部表情，服务脸部记忆点、眼神压力和上半身情绪姿态。',
    defEn: 'portrait expression. It fixes facial expression into a readable main-view pose; control facial expression. Used for facial memory, gaze pressure, and upper-body emotional posture. Action grammar: Rebellious punk pose where the subject sticks tongue out cross-eyed, giving an Einstein or punk rock vibe.',
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
      'pose',
      'emotion'
    ],
    risk: 'clean',
    controls: [
      'body_language'
    ],
    forbids: [
      'copying existing IP character, costume, logo, scene, or exact composition'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_vogue_frame',
    name: '几何手框',
    nameEn: 'High fashion pose',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '几何手框：时尚姿态。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: High fashion pose where the subject frames their face with angular hands and fingers in a sharp geometric composition.',
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
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_lean_back',
    name: '后仰',
    nameEn: 'Full body shot',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '后仰：时尚姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Full body shot where the subject leans far back arching spine, weight on one leg, creating a dramatic silhouette.',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_crouch',
    name: '深蹲',
    nameEn: 'Streetwear aesthetic',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '深蹲：时尚姿态。把眼神方向、下肢重心固定为主视图的可读姿态；重点控制眼神方向、下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction, lower-body weight into a readable main-view pose; control eye direction, lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Streetwear aesthetic where the subject squats low with knees apart, elbows resting on knees, looking up with attitude.',
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
      'static',
      'concept-design-action',
      'gaze',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_hair_flip',
    name: '甩发',
    nameEn: 'Frozen motion of the subject whipping head',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '甩发：时尚姿态。把头颈线条、本体异常固定为主视图的可读姿态；重点控制头颈线条、本体异常，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes head and neck line, ontology anomaly into a readable main-view pose; control head and neck line, ontology anomaly. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Frozen motion of the subject whipping head back, hair caught in a perfect fan shape mid-air, dynamic energy.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'head_neck',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_model_walk',
    name: '台步',
    nameEn: 'Motion capture style mid-stride, hips swaying, one',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '台步：时尚姿态。把下肢重心、表演节奏固定为主视图的可读姿态；重点控制下肢重心、表演节奏，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight, performance rhythm into a readable main-view pose; control lower-body weight, performance rhythm. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Motion capture style mid-stride, hips swaying, one leg crossing over the other, clothes flowing behind.',
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
      'static',
      'concept-design-action',
      'lower_body',
      'performance'
    ]
  },
  {
    id: 'cd_static_act_st_chin_up',
    name: '抬下巴',
    nameEn: 'Arrogant pose',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '抬下巴：时尚姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Arrogant pose where the subject tilts chin high, looking down their nose at the viewer in a power stance.',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_broken_doll',
    name: '破损玩偶',
    nameEn: 'Surreal fashion',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '破损玩偶：时尚姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Surreal fashion where the subject sits with limbs at unnatural disjointed angles, blank stare imitating a discarded doll.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_hands_hips',
    name: '叉腰',
    nameEn: 'Classic power pose',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '叉腰：时尚姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Classic power pose with hands firmly on hips, elbows out, chest forward, assertive and dominant.',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_over_shoulder',
    name: '回眸侧身',
    nameEn: 'Back to camera, twisting torso to look',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '回眸侧身：时尚姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Back to camera, twisting torso to look back, shoulders raised creating a mysterious and elegant line.',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_leg_up',
    name: '高抬腿',
    nameEn: 'Standing on one leg',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '高抬腿：时尚姿态。把下肢重心、服装接口固定为主视图的可读姿态；重点控制下肢重心、服装接口，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight, costume interface into a readable main-view pose; control lower-body weight, costume interface. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject standing on one leg with the other leg extended high in a balletic or martial arts fashion, fabric draping.',
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
      'static',
      'concept-design-action',
      'lower_body',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_coat_open',
    name: '敞开大衣',
    nameEn: 'Subject pulls open a heavy trench coat',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '敞开大衣：时尚姿态。把服装接口固定为主视图的可读姿态；重点控制服装接口，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes costume interface into a readable main-view pose; control costume interface. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject pulls open a heavy trench coat or fur coat revealing the outfit underneath with dynamic fabric movement.',
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
      'static',
      'concept-design-action',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_sitting_stool',
    name: '高脚凳坐姿',
    nameEn: 'Subject sits on a high stool, one',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '高脚凳坐姿：时尚姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject sits on a high stool, one leg straight, one leg bent, elegant lines, relaxed but poised.',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_lying_floor',
    name: '地板躺卧',
    nameEn: 'Overhead shot of subject lying on floor,',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '地板躺卧：时尚姿态。把头颈线条、下肢重心、环境阻力固定为主视图的可读姿态；重点控制头颈线条、下肢重心、环境阻力，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes head and neck line, lower-body weight, environmental resistance into a readable main-view pose; control head and neck line, lower-body weight, environmental resistance. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Overhead shot of subject lying on floor, hair spread out like a halo, limbs arranged in a pleasing geometry.',
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
      'static',
      'concept-design-action',
      'head_neck',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_jumping',
    name: '跳跃抓拍',
    nameEn: 'Subject caught in mid-air, knees tucked or',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '跳跃抓拍：时尚姿态。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject caught in mid-air, knees tucked or legs spread, clothes billowing, energetic and joyful.',
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
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_sunglasses_tip',
    name: '推墨镜',
    nameEn: 'lowers sunglasses down nose bridge to peer over them',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '推墨镜：时尚姿态。把手部动作、道具关系固定为主视图的可读姿态；重点控制手部动作、道具关系，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, prop relation into a readable main-view pose; control hand gesture, prop relation. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject lowers sunglasses down nose bridge to peer over them with a flirtatious or judgmental expression.',
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
      'static',
      'concept-design-action',
      'hands',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_jacket_shoulder',
    name: '披外套',
    nameEn: 'Jacket draped loosely over shoulders without arms',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '披外套：时尚姿态。把手部动作、服装接口固定为主视图的可读姿态；重点控制手部动作、服装接口，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, costume interface into a readable main-view pose; control hand gesture, costume interface. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Jacket draped loosely over shoulders without arms in sleeves, casual chic, hands in pockets.',
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
      'static',
      'concept-design-action',
      'hands',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_hand_pocket',
    name: '插袋',
    nameEn: 'stands',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '插袋：时尚姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject stands with hands deep in pockets, shoulders hunched, cool indifferent aloof attitude.',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_leaning_wall',
    name: '倚墙',
    nameEn: 'leans casually',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '倚墙：时尚姿态。把下肢重心、环境阻力固定为主视图的可读姿态；重点控制下肢重心、环境阻力，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight, environmental resistance into a readable main-view pose; control lower-body weight, environmental resistance. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject leans casually against a wall with one shoulder, one foot resting on the wall behind, waiting.',
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
      'static',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_self_hug',
    name: '自我拥抱',
    nameEn: 'Subject wraps arms around their own torso,',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '自我拥抱：时尚姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject wraps arms around their own torso, hands gripping shoulders, vulnerable yet comforting.',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_finger_bite',
    name: '咬手指',
    nameEn: 'Seductive pose',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '咬手指：时尚姿态。把眼神方向、手部动作固定为主视图的可读姿态；重点控制眼神方向、手部动作，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction, hand gesture into a readable main-view pose; control eye direction, hand gesture. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Seductive pose where the subject gently bites one finger or thumb, eyes locked on camera.',
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
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_chair_straddle',
    name: '反坐椅子',
    nameEn: 'Subject sits on a chair backwards, arms',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '反坐椅子：时尚姿态。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject sits on a chair backwards, arms resting on the backrest, cool and rebellious.',
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
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_tiptoe',
    name: '踮脚尖',
    nameEn: 'Subject stands on very tips of toes,',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '踮脚尖：时尚姿态。把眼神方向、下肢重心固定为主视图的可读姿态；重点控制眼神方向、下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction, lower-body weight into a readable main-view pose; control eye direction, lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject stands on very tips of toes, body stretched tall, tension in calves, ethereal look.',
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
      'static',
      'concept-design-action',
      'gaze',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_fabric_play',
    name: '玩弄布料',
    nameEn: 'Subject throws or manipulates a large piece',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '玩弄布料：时尚姿态。把服装接口固定为主视图的可读姿态；重点控制服装接口，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes costume interface into a readable main-view pose; control costume interface. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject throws or manipulates a large piece of fabric or dress, creating dynamic shapes in the air.',
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
      'static',
      'concept-design-action',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_double_pose',
    name: '双生镜像',
    nameEn: 'Two subjects or mirrors creating a symmetrical',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '双生镜像：时尚姿态。把道具关系固定为主视图的可读姿态；重点控制道具关系，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes prop relation into a readable main-view pose; control prop relation. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Two subjects or mirrors creating a symmetrical shape, identical poses or mirror opposites.',
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
      'static',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_glove_pull',
    name: '咬手套',
    nameEn: 'Subject uses teeth to pull off a',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '咬手套：时尚姿态。把手部动作、服装接口固定为主视图的可读姿态；重点控制手部动作、服装接口，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, costume interface into a readable main-view pose; control hand gesture, costume interface. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject uses teeth to pull off a glove from one hand, classic femme fatale gesture.',
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
      'static',
      'concept-design-action',
      'hands',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_kneel_profile',
    name: '侧跪',
    nameEn: 'Subject kneels on floor profile to camera,',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '侧跪：时尚姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject kneels on floor profile to camera, sitting back on heels, back straight and serene.',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_arm_raise',
    name: '举臂',
    nameEn: 'Subject raises both arms above head stretching',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '举臂：时尚姿态。把手部动作、头颈线条固定为主视图的可读姿态；重点控制手部动作、头颈线条，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, head and neck line into a readable main-view pose; control hand gesture, head and neck line. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject raises both arms above head stretching torso, armpits exposed, celebrating or stretching.',
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
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_leg_cross',
    name: '翘二郎腿',
    nameEn: 'Sitting on a chair, legs crossed high',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '翘二郎腿：时尚姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Sitting on a chair, legs crossed high at the knee, elegant and composed.',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_head_tilt_hand',
    name: '手扶头',
    nameEn: 'One hand resting on top of head, elbow out, casual modeling pose',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '手扶头：时尚姿态。把手部动作、头颈线条固定为主视图的可读姿态；重点控制手部动作、头颈线条，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes hand gesture, head and neck line into a readable main-view pose; control hand gesture, head and neck line. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: One hand resting on top of head, elbow out, casual modeling pose.',
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
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_walking_away',
    name: '背影离开',
    nameEn: 'walking away from camera',
    group: '2. 时尚硬照',
    groupEn: '2. Fashion Editorial',
    def: '背影离开：时尚姿态。把眼神方向、下肢重心固定为主视图的可读姿态；重点控制眼神方向、下肢重心，服务服装轮廓、身体线条、态度姿势和编辑式硬照感。',
    defEn: 'fashion pose. It fixes eye direction, lower-body weight into a readable main-view pose; control eye direction, lower-body weight. Used for garment silhouette, body line, attitude pose, and editorial presence. Action grammar: Subject walking away from camera, looking back over shoulder, motion blur in legs.',
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
      'static',
      'concept-design-action',
      'gaze',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_fetal',
    name: '蜷缩胎儿',
    nameEn: 'Subject curled into a tight ball on',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '蜷缩胎儿：生活行为。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject curled into a tight ball on the floor or bed, knees to chest, arms wrapping legs, vulnerable and protective.',
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
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_sprawl',
    name: '大字摊开',
    nameEn: 'Subject lying on back, limbs spread wide',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '大字摊开：生活行为。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject lying on back, limbs spread wide in an X shape, total relaxation or exhaustion.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_book_read',
    name: '读书',
    nameEn: 'Subject sitting in an armchair absorbed in',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '读书：生活行为。把手部动作、下肢重心、道具关系固定为主视图的可读姿态；重点控制手部动作、下肢重心、道具关系，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture, lower-body weight, prop relation into a readable main-view pose; control hand gesture, lower-body weight, prop relation. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject sitting in an armchair absorbed in a book held in both hands, soft reading light.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'lower_body',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_coffee_sip',
    name: '喝咖啡',
    nameEn: 'holding a warm mug',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '喝咖啡：生活行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject holding a warm mug with both hands, blowing steam, taking a small sip in a cozy atmosphere.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_sleeping',
    name: '沉睡',
    nameEn: 'asleep, breathing rhythmically, face relaxed, hand',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '沉睡：生活行为。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject asleep, breathing rhythmically, face relaxed, hand under cheek.',
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
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_stretching',
    name: '伸懒腰',
    nameEn: 'Subject sitting up in bed, arms stretched',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '伸懒腰：生活行为。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject sitting up in bed, arms stretched high, back arched, yawning in morning light.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_bath_soak',
    name: '泡澡',
    nameEn: 'Subject submerged in water up to chin,',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '泡澡：生活行为。把眼神方向、头颈线条、环境阻力固定为主视图的可读姿态；重点控制眼神方向、头颈线条、环境阻力，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, head and neck line, environmental resistance into a readable main-view pose; control eye direction, head and neck line, environmental resistance. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject submerged in water up to chin, eyes closed, steam rising, wet hair.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'head_neck',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_window_gaze',
    name: '窗边凝视',
    nameEn: 'sitting on window sill',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '窗边凝视：生活行为。把眼神方向、下肢重心、环境阻力固定为主视图的可读姿态；重点控制眼神方向、下肢重心、环境阻力，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, lower-body weight, environmental resistance into a readable main-view pose; control eye direction, lower-body weight, environmental resistance. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject sitting on window sill looking out at the rain or city, reflection in glass, melancholic.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_cat_nap',
    name: '抱着猫睡',
    nameEn: 'sleeping on a sofa',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '抱着猫睡：生活行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject sleeping on a sofa with a cat sleeping on their chest, peaceful domestic scene.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_phone_scroll',
    name: '刷手机',
    nameEn: 'Face illuminated by phone screen blue light',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '刷手机：生活行为。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Face illuminated by phone screen blue light in the dark, blank expression, thumb scrolling.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_writing',
    name: '书写',
    nameEn: 'bent over a desk writing in a journal',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '书写：生活行为。把道具关系固定为主视图的可读姿态；重点控制道具关系，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes prop relation into a readable main-view pose; control prop relation. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject bent over a desk writing in a journal with a pen, focused and private.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_eating',
    name: '进食',
    nameEn: 'Candid shot of the subject taking a',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '进食：生活行为。把面部表情固定为主视图的可读姿态；重点控制面部表情，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes facial expression into a readable main-view pose; control facial expression. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Candid shot of the subject taking a bite of food, fork halfway to mouth, natural and unposed.',
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
      'static',
      'concept-design-action',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_cooking',
    name: '烹饪',
    nameEn: 'Subject chopping vegetables or stirring a pot,',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '烹饪：生活行为。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes body weight into a readable main-view pose; control body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject chopping vegetables or stirring a pot, apron on, steam rising, focused on task.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_meditate',
    name: '冥想',
    nameEn: 'Lotus position, hands on knees, eyes closed,',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '冥想：生活行为。把眼神方向、手部动作、下肢重心固定为主视图的可读姿态；重点控制眼神方向、手部动作、下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, hand gesture, lower-body weight into a readable main-view pose; control eye direction, hand gesture, lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Lotus position, hands on knees, eyes closed, back straight, zen atmosphere.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_music_listen',
    name: '听音乐',
    nameEn: 'Large headphones on, eyes closed, head bobbing',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '听音乐：生活行为。把眼神方向、头颈线条固定为主视图的可读姿态；重点控制眼神方向、头颈线条，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, head and neck line into a readable main-view pose; control eye direction, head and neck line. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Large headphones on, eyes closed, head bobbing slightly, lost in music.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_plant_water',
    name: '浇花',
    nameEn: 'tending to indoor plants',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '浇花：生活行为。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes body weight into a readable main-view pose; control body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject tending to indoor plants with a watering can, gentle care.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_typing',
    name: '打字',
    nameEn: 'Fingers blurred over a laptop keyboard, face',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '打字：生活行为。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Fingers blurred over a laptop keyboard, face illuminated by screen, work mode.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_slouched',
    name: '瘫坐',
    nameEn: 'Subject sinking deep into a couch, legs',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '瘫坐：生活行为。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject sinking deep into a couch, legs over the armrest, boredom or laziness.',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_hair_brush',
    name: '梳头',
    nameEn: 'Subject brushing long hair in front of',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '梳头：生活行为。把头颈线条、道具关系固定为主视图的可读姿态；重点控制头颈线条、道具关系，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes head and neck line, prop relation into a readable main-view pose; control head and neck line, prop relation. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject brushing long hair in front of a mirror, repetitive soothing motion.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'head_neck',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_shoelace',
    name: '系鞋带',
    nameEn: 'kneeling on one knee to tie shoelaces, mundane daily action',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '系鞋带：生活行为。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject kneeling on one knee to tie shoelaces, mundane daily action.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_hugging_pillow',
    name: '抱枕',
    nameEn: 'sitting on bed hugging a large pillow tight, seeking comfort',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '抱枕：生活行为。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject sitting on bed hugging a large pillow tight, seeking comfort.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_smoking',
    name: '吸烟',
    nameEn: 'Subject holding a cigarette, exhaling smoke towards',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '吸烟：生活行为。把手部动作、道具关系固定为主视图的可读姿态；重点控制手部动作、道具关系，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture, prop relation into a readable main-view pose; control hand gesture, prop relation. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject holding a cigarette, exhaling smoke towards the ceiling, contemplative.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_painting',
    name: '绘画',
    nameEn: 'Subject standing at an easel, brush in',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '绘画：生活行为。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject standing at an easel, brush in hand, paint on face, creative focus.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_knitting',
    name: '编织',
    nameEn: 'Hands busy',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '编织：生活行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Hands busy with needles and wool, focused expression, cozy vibe.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_balcony_lean',
    name: '阳台倚靠',
    nameEn: 'Leaning elbows on balcony railing',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '阳台倚靠：生活行为。把眼神方向、头颈线条、环境阻力、表演节奏固定为主视图的可读姿态；重点控制眼神方向、头颈线条、环境阻力、表演节奏，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, head and neck line, environmental resistance, performance rhythm into a readable main-view pose; control eye direction, head and neck line, environmental resistance, performance rhythm. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Leaning elbows on balcony railing, looking at the view, wind in hair.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'head_neck',
      'environment',
      'performance'
    ]
  },
  {
    id: 'cd_static_act_st_floor_sit',
    name: '席地而坐',
    nameEn: 'Sitting cross-legged on the floor surrounded by',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '席地而坐：生活行为。把下肢重心、环境阻力固定为主视图的可读姿态；重点控制下肢重心、环境阻力，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes lower-body weight, environmental resistance into a readable main-view pose; control lower-body weight, environmental resistance. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Sitting cross-legged on the floor surrounded by papers or vinyl records.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_yawn_stretch',
    name: '打哈欠',
    nameEn: 'Mouth wide open in a yawn, eyes tearing up, hand covering mouth',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '打哈欠：生活行为。把眼神方向、面部表情、手部动作固定为主视图的可读姿态；重点控制眼神方向、面部表情、手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, facial expression, hand gesture into a readable main-view pose; control eye direction, facial expression, hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Mouth wide open in a yawn, eyes tearing up, hand covering mouth.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_applying_lotion',
    name: '涂抹乳液',
    nameEn: 'applying cream to legs or arms, self-care routine',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '涂抹乳液：生活行为。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Subject applying cream to legs or arms, self-care routine.',
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
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_drying_hair',
    name: '擦干头发',
    nameEn: 'Rubbing wet hair',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '擦干头发：生活行为。把面部表情、头颈线条固定为主视图的可读姿态；重点控制面部表情、头颈线条，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes facial expression, head and neck line into a readable main-view pose; control facial expression, head and neck line. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Rubbing wet hair with a towel, face hidden by towel.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_watching_tv',
    name: '看电视',
    nameEn: 'Face illuminated by flickering TV light, blank',
    group: '3. 休憩生活',
    groupEn: '3. Rest / Daily Life',
    def: '看电视：生活行为。把眼神方向、面部表情、手部动作固定为主视图的可读姿态；重点控制眼神方向、面部表情、手部动作，服务日常身体状态、生活痕迹和低戏剧性的身份可信度。',
    defEn: 'daily behavior. It fixes eye direction, facial expression, hand gesture into a readable main-view pose; control eye direction, facial expression, hand gesture. Used for daily body state, lived-in traces, and low-drama identity credibility. Action grammar: Face illuminated by flickering TV light, blank expression, remote in hand.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_thinker',
    name: '沉思者',
    nameEn: 'Sitting',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '沉思者：智性行为。把手部动作、下肢重心固定为主视图的可读姿态；重点控制手部动作、下肢重心，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: "intellectual behavior. It fixes hand gesture, lower-body weight into a readable main-view pose; control hand gesture, lower-body weight. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Sitting with elbow on knee, hand supporting chin, deep in thought like Rodin's statue.",
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_chess',
    name: '下棋',
    nameEn: 'Hand hovering over a chess piece, calculating the next move',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '下棋：智性行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Hand hovering over a chess piece, calculating the next move with intense focus.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_microscope',
    name: '显微观察',
    nameEn: 'One eye closed',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '显微观察：智性行为。把眼神方向、服装接口固定为主视图的可读姿态；重点控制眼神方向、服装接口，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, costume interface into a readable main-view pose; control eye direction, costume interface. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: One eye closed looking through a microscope, wearing lab coat, scientific precision.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_telescope',
    name: '天文观测',
    nameEn: 'Looking through a telescope at the stars',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '天文观测：智性行为。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction into a readable main-view pose; control eye direction. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Looking through a telescope at the stars in a night setting, wonder and curiosity.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_examining',
    name: '审视物体',
    nameEn: 'Holding a small object up to the light, inspecting it closely',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '审视物体：智性行为。把眼神方向、手部动作固定为主视图的可读姿态；重点控制眼神方向、手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, hand gesture into a readable main-view pose; control eye direction, hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Holding a small object up to the light, inspecting it closely with one eye squinted.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_writing_blackboard',
    name: '板书',
    nameEn: 'Writing complex formulas on a chalkboard, back',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '板书：智性行为。把道具关系固定为主视图的可读姿态；重点控制道具关系，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes prop relation into a readable main-view pose; control prop relation. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Writing complex formulas on a chalkboard, back to camera, dust in air.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_library_browse',
    name: '图书馆浏览',
    nameEn: 'Running a finger along the spines of',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '图书馆浏览：智性行为。把手部动作、下肢重心、道具关系固定为主视图的可读姿态；重点控制手部动作、下肢重心、道具关系，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes hand gesture, lower-body weight, prop relation into a readable main-view pose; control hand gesture, lower-body weight, prop relation. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Running a finger along the spines of books on a shelf, quiet contemplation.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'lower_body',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_monocle',
    name: '单片眼镜',
    nameEn: 'Adjusting a monocle or loupe to inspect a detail, antique vibe',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '单片眼镜：智性行为。把眼神方向、服装接口、道具关系固定为主视图的可读姿态；重点控制眼神方向、服装接口、道具关系，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, costume interface, prop relation into a readable main-view pose; control eye direction, costume interface, prop relation. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Adjusting a monocle or loupe to inspect a detail, antique vibe.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'costume',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_glasses_bite',
    name: '咬眼镜腿',
    nameEn: 'Holding glasses by the frame, biting the tip of the arm',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '咬眼镜腿：智性行为。把眼神方向、手部动作、下肢重心、服装接口、道具关系固定为主视图的可读姿态；重点控制眼神方向、手部动作、下肢重心、服装接口、道具关系，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, hand gesture, lower-body weight, costume interface, prop relation into a readable main-view pose; control eye direction, hand gesture, lower-body weight, costume interface, prop relation. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Holding glasses by the frame, biting the tip of the arm while thinking.',
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
      'static',
      'concept-design-action',
      'gaze',
      'hands',
      'lower_body',
      'costume',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_map_read',
    name: '看地图',
    nameEn: 'Large map spread out on a table,',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '看地图：智性行为。把环境阻力固定为主视图的可读姿态；重点控制环境阻力，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes environmental resistance into a readable main-view pose; control environmental resistance. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Large map spread out on a table, subject pointing at a location, planning.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_taking_notes',
    name: '做笔记',
    nameEn: 'Scribbling furiously in a notepad',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '做笔记：智性行为。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction into a readable main-view pose; control eye direction. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Scribbling furiously in a notepad while looking at something else, reporter style.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_lecture',
    name: '讲座',
    nameEn: 'Standing at a podium, one hand raised',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '讲座：智性行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Standing at a podium, one hand raised emphasizing a point, academic authority.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_museum_gaze',
    name: '看展',
    nameEn: 'Standing still',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '看展：智性行为。把眼神方向、手部动作、环境阻力固定为主视图的可读姿态；重点控制眼神方向、手部动作、环境阻力，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, hand gesture, environmental resistance into a readable main-view pose; control eye direction, hand gesture, environmental resistance. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Standing still with arms behind back, looking at a painting on the wall.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_puzzle',
    name: '解谜',
    nameEn: "Holding a Rubik's cube or mechanical puzzle, twisting it",
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '解谜：智性行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: "intellectual behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Holding a Rubik's cube or mechanical puzzle, twisting it with concentration.",
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_debating',
    name: '辩论',
    nameEn: 'Leaning forward across a table, finger pointing,',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '辩论：智性行为。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Leaning forward across a table, finger pointing, making an argument.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_typing_code',
    name: '编程',
    nameEn: 'Face lit by green code on screen,',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '编程：智性行为。把面部表情、服装接口固定为主视图的可读姿态；重点控制面部表情、服装接口，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes facial expression, costume interface into a readable main-view pose; control facial expression, costume interface. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Face lit by green code on screen, fast typing, reflection in glasses, hacker vibe.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'face',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_blueprint',
    name: '看蓝图',
    nameEn: 'Rolling out a large blueprint, using a',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '看蓝图：智性行为。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes body weight into a readable main-view pose; control body weight. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Rolling out a large blueprint, using a ruler and pencil to measure.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_specimen',
    name: '观察标本',
    nameEn: 'Holding a jar',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '观察标本：智性行为。把眼神方向、手部动作固定为主视图的可读姿态；重点控制眼神方向、手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, hand gesture into a readable main-view pose; control eye direction, hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Holding a jar with a specimen inside, looking at it with fascination or disgust.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_conductor',
    name: '指挥',
    nameEn: 'Arms raised',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '指挥：智性行为。把眼神方向、手部动作固定为主视图的可读姿态；重点控制眼神方向、手部动作，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, hand gesture into a readable main-view pose; control eye direction, hand gesture. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Arms raised holding a baton, eyes closed, feeling the music logic.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_judge',
    name: '审视',
    nameEn: 'Sitting back, hands steepled',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '审视：智性行为。把眼神方向、手部动作、下肢重心、服装接口固定为主视图的可读姿态；重点控制眼神方向、手部动作、下肢重心、服装接口，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, hand gesture, lower-body weight, costume interface into a readable main-view pose; control eye direction, hand gesture, lower-body weight, costume interface. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Sitting back, hands steepled with fingertips touching, looking over glasses evaluating.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'hands',
      'lower_body',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_tarot',
    name: '塔罗占卜',
    nameEn: 'Laying out tarot cards on a velvet table, mystical contemplation',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '塔罗占卜：智性行为。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes body weight into a readable main-view pose; control body weight. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Laying out tarot cards on a velvet table, mystical contemplation.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_clock_watch',
    name: '修表',
    nameEn: 'Wearing magnifying eyewear, using tweezers on tiny',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '修表：智性行为。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes body weight into a readable main-view pose; control body weight. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Wearing magnifying eyewear, using tweezers on tiny gears, precision.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_calligraphy',
    name: '书法',
    nameEn: 'Holding a brush vertically, poised to write',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '书法：智性行为。把手部动作、道具关系固定为主视图的可读姿态；重点控制手部动作、道具关系，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes hand gesture, prop relation into a readable main-view pose; control hand gesture, prop relation. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Holding a brush vertically, poised to write on rice paper, zen focus.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_surveying',
    name: '测量',
    nameEn: 'Looking through a theodolite on a tripod, measuring the land',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '测量：智性行为。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction into a readable main-view pose; control eye direction. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Looking through a theodolite on a tripod, measuring the land.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_diagnosing',
    name: '诊断',
    nameEn: 'Doctor',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '诊断：智性行为。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction into a readable main-view pose; control eye direction. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Doctor looking at an X-ray film on a light box, serious expression.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_praying',
    name: '祈祷',
    nameEn: 'Kneeling, hands clasped, head bowed, silent internal dialogue',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '祈祷：智性行为。把手部动作、头颈线条固定为主视图的可读姿态；重点控制手部动作、头颈线条，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes hand gesture, head and neck line into a readable main-view pose; control hand gesture, head and neck line. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Kneeling, hands clasped, head bowed, silent internal dialogue.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_birdwatching',
    name: '观鸟',
    nameEn: 'Using binoculars in a forest setting, quiet',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '观鸟：智性行为。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes body weight into a readable main-view pose; control body weight. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Using binoculars in a forest setting, quiet observation of nature.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_eavesdrop',
    name: '窃听',
    nameEn: 'Pressing ear',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '窃听：智性行为。把环境阻力固定为主视图的可读姿态；重点控制环境阻力，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes environmental resistance into a readable main-view pose; control environmental resistance. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Pressing ear against a wall or door, strained expression listening intently.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_detective',
    name: '侦探思考',
    nameEn: 'Staring at a wall covered in photos and red string connections',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '侦探思考：智性行为。把环境阻力固定为主视图的可读姿态；重点控制环境阻力，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes environmental resistance into a readable main-view pose; control environmental resistance. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Staring at a wall covered in photos and red string connections.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_sculpting',
    name: '雕塑',
    nameEn: 'Chiseling stone or molding clay, assessing the form',
    group: '4. 智性观察',
    groupEn: '4. Intellectual Observation',
    def: '雕塑：智性行为。把眼神方向、本体异常固定为主视图的可读姿态；重点控制眼神方向、本体异常，服务思考、判断、研究、记录和知识型身份的手部行为。',
    defEn: 'intellectual behavior. It fixes eye direction, ontology anomaly into a readable main-view pose; control eye direction, ontology anomaly. Used for thinking, judgement, research, recording, and knowledge-based hand behavior. Action grammar: Chiseling stone or molding clay, assessing the form with a critical eye.',
    ontologyLevel: 1,
    eras: [
      'industrial',
      'modern',
      'contemporary',
      'near_future',
      'timeless'
    ],
    affects: [
      'pose',
      'action',
      'prop'
    ],
    risk: 'clean',
    controls: [
      'daily_behavior',
      'work_gesture'
    ],
    forbids: [
      'complex scene expansion',
      'extra crowd scene'
    ],
    tags: [
      'static',
      'concept-design-action',
      'gaze',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_hands_tied',
    name: '双手被缚',
    nameEn: 'Hands tied behind back',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '双手被缚：受限姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Hands tied behind back with rope or zip ties, shoulders strained.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_kneeling_head_down',
    name: '跪地低头',
    nameEn: 'Kneeling on floor, head bowed low exposing neck, submission',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '跪地低头：受限姿态。把头颈线条、下肢重心、环境阻力固定为主视图的可读姿态；重点控制头颈线条、下肢重心、环境阻力，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes head and neck line, lower-body weight, environmental resistance into a readable main-view pose; control head and neck line, lower-body weight, environmental resistance. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Kneeling on floor, head bowed low exposing neck, submission.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'head_neck',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_blindfolded',
    name: '蒙眼',
    nameEn: 'Cloth tied around eyes, head tilting trying to hear surroundings',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '蒙眼：受限姿态。把眼神方向、头颈线条固定为主视图的可读姿态；重点控制眼神方向、头颈线条，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes eye direction, head and neck line into a readable main-view pose; control eye direction, head and neck line. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Cloth tied around eyes, head tilting trying to hear surroundings.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'gaze',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_gagged',
    name: '封口',
    nameEn: 'Mouth covered by tape or cloth, eyes wide',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '封口：受限姿态。把眼神方向、面部表情固定为主视图的可读姿态；重点控制眼神方向、面部表情，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes eye direction, facial expression into a readable main-view pose; control eye direction, facial expression. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Mouth covered by tape or cloth, eyes wide with panic or resignation.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'gaze',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_cuffed',
    name: '手铐',
    nameEn: 'Wrists locked in metal handcuffs in front of body, helplessness',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '手铐：受限姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Wrists locked in metal handcuffs in front of body, helplessness.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_pinned',
    name: '被按压',
    nameEn: 'Lying on ground, invisible force or hand pressing chest down',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '被按压：受限姿态。把手部动作、下肢重心、环境阻力、本体异常固定为主视图的可读姿态；重点控制手部动作、下肢重心、环境阻力、本体异常，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture, lower-body weight, environmental resistance, ontology anomaly into a readable main-view pose; control hand gesture, lower-body weight, environmental resistance, ontology anomaly. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Lying on ground, invisible force or hand pressing chest down.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands',
      'lower_body',
      'environment',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_cornered',
    name: '逼入墙角',
    nameEn: 'Back pressed',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '逼入墙角：受限姿态。把环境阻力固定为主视图的可读姿态；重点控制环境阻力，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes environmental resistance into a readable main-view pose; control environmental resistance. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Back pressed against a wall, shrinking away from camera, fear.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_chained',
    name: '锁链',
    nameEn: 'Heavy chains around neck or ankles, industrial',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '锁链：受限姿态。把头颈线条固定为主视图的可读姿态；重点控制头颈线条，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes head and neck line into a readable main-view pose; control head and neck line. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Heavy chains around neck or ankles, industrial or dungeon setting.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_caged',
    name: '笼中',
    nameEn: 'Sitting inside a birdcage or prison cell, gripping the bars',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '笼中：受限姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Sitting inside a birdcage or prison cell, gripping the bars.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_puppet_strings',
    name: '木偶线',
    nameEn: 'Limbs held up by invisible strings, unnatural',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '木偶线：受限姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Limbs held up by invisible strings, unnatural posture like a marionette.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_collar',
    name: '项圈',
    nameEn: 'Wearing a leather collar',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '项圈：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Wearing a leather collar with a leash leading off-camera.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_begging',
    name: '乞求',
    nameEn: 'On knees, hands clasped together',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '乞求：受限姿态。把眼神方向、手部动作、下肢重心固定为主视图的可读姿态；重点控制眼神方向、手部动作、下肢重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes eye direction, hand gesture, lower-body weight into a readable main-view pose; control eye direction, hand gesture, lower-body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: On knees, hands clasped together, looking up pleadingly.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'gaze',
      'hands',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_straitjacket',
    name: '拘束衣',
    nameEn: 'Arms bound across chest in long sleeves, padded room context',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '拘束衣：受限姿态。把手部动作、服装接口固定为主视图的可读姿态；重点控制手部动作、服装接口，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture, costume interface into a readable main-view pose; control hand gesture, costume interface. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Arms bound across chest in long sleeves, padded room context.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands',
      'costume'
    ]
  },
  {
    id: 'cd_static_act_st_surrender',
    name: '投降',
    nameEn: 'Hands raised high above head, open palms, defeated stance',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '投降：受限姿态。把手部动作、头颈线条固定为主视图的可读姿态；重点控制手部动作、头颈线条，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture, head and neck line into a readable main-view pose; control hand gesture, head and neck line. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Hands raised high above head, open palms, defeated stance.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_prostrate',
    name: '五体投地',
    nameEn: 'Lying flat on stomach, face to the ground, total submission',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '五体投地：受限姿态。把面部表情、下肢重心、环境阻力固定为主视图的可读姿态；重点控制面部表情、下肢重心、环境阻力，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes facial expression, lower-body weight, environmental resistance into a readable main-view pose; control facial expression, lower-body weight, environmental resistance. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Lying flat on stomach, face to the ground, total submission.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'face',
      'lower_body',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_against_wall',
    name: '面壁',
    nameEn: 'Standing facing a wall, hands resting on',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '面壁：受限姿态。把面部表情、手部动作、环境阻力固定为主视图的可读姿态；重点控制面部表情、手部动作、环境阻力，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes facial expression, hand gesture, environmental resistance into a readable main-view pose; control facial expression, hand gesture, environmental resistance. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Standing facing a wall, hands resting on it or behind back, punishment.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'face',
      'hands',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_ball_gag',
    name: '口枷',
    nameEn: 'Wearing a ball gag, aesthetic focus on',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '口枷：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Wearing a ball gag, aesthetic focus on the leather strap and silence.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_shibari',
    name: '绳艺',
    nameEn: 'Intricate rope patterns binding the body, artistic',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '绳艺：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Intricate rope patterns binding the body, artistic geometric suspension.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_hostage',
    name: '人质',
    nameEn: 'Sitting on a chair tied to it, gun to head implied or visible',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '人质：受限姿态。把头颈线条、下肢重心、道具关系固定为主视图的可读姿态；重点控制头颈线条、下肢重心、道具关系，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes head and neck line, lower-body weight, prop relation into a readable main-view pose; control head and neck line, lower-body weight, prop relation. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Sitting on a chair tied to it, gun to head implied or visible.',
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
      'static',
      'concept-design-action',
      'head_neck',
      'lower_body',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_yoke',
    name: '枷锁',
    nameEn: 'Wooden pillory or yoke around neck and hands, public shame',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '枷锁：受限姿态。把手部动作、头颈线条固定为主视图的可读姿态；重点控制手部动作、头颈线条，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture, head and neck line into a readable main-view pose; control hand gesture, head and neck line. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Wooden pillory or yoke around neck and hands, public shame.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_leashed',
    name: '牵引',
    nameEn: 'Being led by a chain or rope, walking on all fours',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '牵引：受限姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Being led by a chain or rope, walking on all fours.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_carrying_weight',
    name: '负重',
    nameEn: 'Struggling',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '负重：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Struggling under a heavy object on back like Atlas.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_trapped_ice',
    name: '冰封',
    nameEn: 'Lower body encased in block of ice, reaching out',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '冰封：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Lower body encased in block of ice, reaching out.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_webbed',
    name: '蛛网缠绕',
    nameEn: 'Wrapped in thick spider webs, struggle is useless',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '蛛网缠绕：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Wrapped in thick spider webs, struggle is useless.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_buried_sand',
    name: '埋于沙中',
    nameEn: 'Head or upper body only visible above sand or dirt, immobile',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '埋于沙中：受限姿态。把头颈线条固定为主视图的可读姿态；重点控制头颈线条，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes head and neck line into a readable main-view pose; control head and neck line. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Head or upper body only visible above sand or dirt, immobile.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_glued',
    name: '粘滞',
    nameEn: 'Stuck in black tar or slime, pulling limbs',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '粘滞：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Stuck in black tar or slime, pulling limbs against resistance.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_under_foot',
    name: '足下',
    nameEn: 'POV shot',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '足下：受限姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: "restricted pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: POV shot looking down, a boot pressing on the subject's chest.",
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_silenced_hand',
    name: '被捂嘴',
    nameEn: "Someone else's hand covering subject's mouth from behind",
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '被捂嘴：受限姿态。把面部表情、手部动作固定为主视图的可读姿态；重点控制面部表情、手部动作，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: "restricted pose. It fixes facial expression, hand gesture into a readable main-view pose; control facial expression, hand gesture. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Someone else's hand covering subject's mouth from behind.",
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'face',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_frightened_huddle',
    name: '角落瑟缩',
    nameEn: 'Huddled in a corner, knees drawn up, arms over head, defenseless',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '角落瑟缩：受限姿态。把手部动作、头颈线条、下肢重心固定为主视图的可读姿态；重点控制手部动作、头颈线条、下肢重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes hand gesture, head and neck line, lower-body weight into a readable main-view pose; control hand gesture, head and neck line, lower-body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Huddled in a corner, knees drawn up, arms over head, defenseless.',
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
    risk: 'high',
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
      'static',
      'concept-design-action',
      'hands',
      'head_neck',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_marionette_cut',
    name: '断线木偶',
    nameEn: 'Collapsed on the floor in a heap, limbs tangled, lifeless',
    group: '5. 束缚屈服',
    groupEn: '5. Bound / Submission',
    def: '断线木偶：受限姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务身体受限、姿态压迫、控制关系和欲望化权力结构。',
    defEn: 'restricted pose. It fixes body weight into a readable main-view pose; control body weight. Used for restricted body, posture pressure, control relation, and desire-coded power structure. Action grammar: Collapsed on the floor in a heap, limbs tangled, lifeless.',
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
    risk: 'high',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_levitating',
    name: '悬浮',
    nameEn: 'floating cross-legged or upright in mid-air, defying gravity',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '悬浮：超现实姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject floating cross-legged or upright in mid-air, defying gravity.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_melting',
    name: '融化',
    nameEn: "Subject's body dripping like wax or ice cream onto the floor",
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '融化：超现实姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: "surreal pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject's body dripping like wax or ice cream onto the floor.",
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_disintegrating',
    name: '消散',
    nameEn: 'Body turning into dust, birds, or pixels and blowing away',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '消散：超现实姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Body turning into dust, birds, or pixels and blowing away.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_invisible',
    name: '隐形',
    nameEn: 'Clothes visible but body is transparent or missing, glass-like',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '隐形：超现实姿态。把环境阻力、本体异常固定为主视图的可读姿态；重点控制环境阻力、本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes environmental resistance, ontology anomaly into a readable main-view pose; control environmental resistance, ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Clothes visible but body is transparent or missing, glass-like.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'environment',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_multi_arms',
    name: '千手',
    nameEn: 'has many arms fanned out behind them like a deity',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '千手：超现实姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject has many arms fanned out behind them like a deity.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_headless',
    name: '无头',
    nameEn: 'Body standing or sitting, but the head',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '无头：超现实姿态。把头颈线条、下肢重心固定为主视图的可读姿态；重点控制头颈线条、下肢重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes head and neck line, lower-body weight into a readable main-view pose; control head and neck line, lower-body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Body standing or sitting, but the head is floating nearby or missing.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'head_neck',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_duplication',
    name: '重影分身',
    nameEn: 'Trail of echo images behind the subject,',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '重影分身：超现实姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Trail of echo images behind the subject, or multiple copies in one frame.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_glitch',
    name: '故障',
    nameEn: "Subject's body distorted by digital noise, RGB",
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '故障：超现实姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: "surreal pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject's body distorted by digital noise, RGB shift, pixel sorting.",
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_stone_skin',
    name: '石化',
    nameEn: 'Skin texture changing to cracked marble or granite',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '石化：超现实姿态。把本体异常固定为主视图的可读姿态；重点控制本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes ontology anomaly into a readable main-view pose; control ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Skin texture changing to cracked marble or granite.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_plant_growth',
    name: '植物共生',
    nameEn: "Flowers and vines growing out of the subject's skin or eyes",
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '植物共生：超现实姿态。把眼神方向、本体异常固定为主视图的可读姿态；重点控制眼神方向、本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: "surreal pose. It fixes eye direction, ontology anomaly into a readable main-view pose; control eye direction, ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Flowers and vines growing out of the subject's skin or eyes.",
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_faceless',
    name: '无面',
    nameEn: 'Face is a smooth blank surface',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '无面：超现实姿态。把面部表情、本体异常固定为主视图的可读姿态；重点控制面部表情、本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes facial expression, ontology anomaly into a readable main-view pose; control facial expression, ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Face is a smooth blank surface with no features, Magritte style.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'face',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_liquid_body',
    name: '液态身体',
    nameEn: 'Body made of clear water or mercury, reflecting surroundings',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '液态身体：超现实姿态。把环境阻力、本体异常固定为主视图的可读姿态；重点控制环境阻力、本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes environmental resistance, ontology anomaly into a readable main-view pose; control environmental resistance, ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Body made of clear water or mercury, reflecting surroundings.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'environment',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_inside_out',
    name: '内外翻转',
    nameEn: 'Surreal anatomy art, skin unzipped to show',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '内外翻转：超现实姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes body weight into a readable main-view pose; control body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Surreal anatomy art, skin unzipped to show flowers or clockwork inside.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_giant',
    name: '巨物化',
    nameEn: 'is larger than skyscrapers',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '巨物化：超现实姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject is larger than skyscrapers, looking down at a tiny city.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_tiny',
    name: '微缩化',
    nameEn: 'Tiny subject standing on a leaf or inside a teacup',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '微缩化：超现实姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes body weight into a readable main-view pose; control body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Tiny subject standing on a leaf or inside a teacup.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_merging',
    name: '融合',
    nameEn: 'Subject merging into a wall, tree, or',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '融合：超现实姿态。把环境阻力固定为主视图的可读姿态；重点控制环境阻力，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes environmental resistance into a readable main-view pose; control environmental resistance. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject merging into a wall, tree, or furniture, becoming part of the environment.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'environment'
    ]
  },
  {
    id: 'cd_static_act_st_fragmented',
    name: '碎片化',
    nameEn: 'Body broken into floating geometric shards or puzzle pieces',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '碎片化：超现实姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes body weight into a readable main-view pose; control body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Body broken into floating geometric shards or puzzle pieces.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_xray',
    name: '透视',
    nameEn: 'Skin is transparent',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '透视：超现实姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Skin is transparent, showing glowing neon skeleton underneath.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  },
  {
    id: 'cd_static_act_st_shadow_detach',
    name: '影子分离',
    nameEn: "Subject's shadow doing something different than the subject",
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '影子分离：超现实姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: "surreal pose. It fixes body weight into a readable main-view pose; control body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Subject's shadow doing something different than the subject.",
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_upside_down_head',
    name: '倒置头颅',
    nameEn: 'Head is upside down on the neck, or floating upside down',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '倒置头颅：超现实姿态。把头颈线条固定为主视图的可读姿态；重点控制头颈线条，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes head and neck line into a readable main-view pose; control head and neck line. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Head is upside down on the neck, or floating upside down.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_eye_mouth',
    name: '眼口置换',
    nameEn: 'Eye in mouth, or mouth',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '眼口置换：超现实姿态。把眼神方向、面部表情固定为主视图的可读姿态；重点控制眼神方向、面部表情，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes eye direction, facial expression into a readable main-view pose; control eye direction, facial expression. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Eye in mouth, or mouth where eyes should be, body horror.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_cloud_head',
    name: '云头',
    nameEn: 'Head is a fluffly cloud or smoke, obscuring identity',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '云头：超现实姿态。把头颈线条、道具关系固定为主视图的可读姿态；重点控制头颈线条、道具关系，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes head and neck line, prop relation into a readable main-view pose; control head and neck line, prop relation. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Head is a fluffly cloud or smoke, obscuring identity.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'head_neck',
      'prop'
    ]
  },
  {
    id: 'cd_static_act_st_glowing_core',
    name: '发光内核',
    nameEn: 'Intense light shining out from chest or mouth',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '发光内核：超现实姿态。把面部表情、头颈线条固定为主视图的可读姿态；重点控制面部表情、头颈线条，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes facial expression, head and neck line into a readable main-view pose; control facial expression, head and neck line. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Intense light shining out from chest or mouth.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'face',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_infinite_fall',
    name: '无限坠落',
    nameEn: 'Falling through a void',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '无限坠落：超现实姿态。把下肢重心固定为主视图的可读姿态；重点控制下肢重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes lower-body weight into a readable main-view pose; control lower-body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Falling through a void with no up or down.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'lower_body'
    ]
  },
  {
    id: 'cd_static_act_st_stretched',
    name: '拉伸',
    nameEn: 'Limbs or face unnaturally stretched like taffy, Dali style',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '拉伸：超现实姿态。把面部表情固定为主视图的可读姿态；重点控制面部表情，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes facial expression into a readable main-view pose; control facial expression. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Limbs or face unnaturally stretched like taffy, Dali style.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'face'
    ]
  },
  {
    id: 'cd_static_act_st_mirror_portal',
    name: '镜面穿越',
    nameEn: 'Stepping through a liquid mirror surface',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '镜面穿越：超现实姿态。把面部表情、道具关系、本体异常固定为主视图的可读姿态；重点控制面部表情、道具关系、本体异常，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes facial expression, prop relation, ontology anomaly into a readable main-view pose; control facial expression, prop relation, ontology anomaly. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Stepping through a liquid mirror surface.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'face',
      'prop',
      'ontology'
    ]
  },
  {
    id: 'cd_static_act_st_geometric_head',
    name: '几何头',
    nameEn: 'Head replaced by a cube, pyramid, or sphere',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '几何头：超现实姿态。把头颈线条固定为主视图的可读姿态；重点控制头颈线条，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes head and neck line into a readable main-view pose; control head and neck line. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Head replaced by a cube, pyramid, or sphere.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'head_neck'
    ]
  },
  {
    id: 'cd_static_act_st_burning_man',
    name: '燃烧人',
    nameEn: 'Body engulfed in flames but standing calmly, Bill Viola style',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '燃烧人：超现实姿态。把身体重心固定为主视图的可读姿态；重点控制身体重心，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes body weight into a readable main-view pose; control body weight. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Body engulfed in flames but standing calmly, Bill Viola style.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action'
    ]
  },
  {
    id: 'cd_static_act_st_balloon_float',
    name: '气球漂浮',
    nameEn: 'Floating away',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '气球漂浮：超现实姿态。把手部动作固定为主视图的可读姿态；重点控制手部动作，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes hand gesture into a readable main-view pose; control hand gesture. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Floating away holding a bunch of balloons, whimsical.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'hands'
    ]
  },
  {
    id: 'cd_static_act_st_void_stare',
    name: '虚空凝视',
    nameEn: 'Eyes are black holes sucking in light, cosmic horror',
    group: '6. 抽象超现实',
    groupEn: '6. Abstract Surreal',
    def: '虚空凝视：超现实姿态。把眼神方向固定为主视图的可读姿态；重点控制眼神方向，服务本体异常、身体失真、象征化姿态和非现实身体规则。',
    defEn: 'surreal pose. It fixes eye direction into a readable main-view pose; control eye direction. Used for ontology anomaly, body distortion, symbolic posture, and non-realist body rules. Action grammar: Eyes are black holes sucking in light, cosmic horror.',
    ontologyLevel: 4,
    eras: [
      'near_future',
      'far_future',
      'timeless',
      'mythic'
    ],
    affects: [
      'pose',
      'action',
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
      'static',
      'concept-design-action',
      'gaze'
    ]
  }
];

export const CD_STATIC_POSE: ConceptBaseItem[] = CD_STATIC_POSE_ITEMS.map(item => ({
  ...item,
  ...STATIC_POSE_AXIS[item.id]
}));
