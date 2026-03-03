
import { DriverType, DriverDef, LayerConfig, LogicTemplateDef } from './types';
import { Briefcase, Film, TestTube, Clapperboard, Music, Palette, Zap, Ghost, Feather, User, Eye, Box, Camera, Layout } from 'lucide-react';
import { NARRATIVE_ENGINE_BLOCKS, NARRATIVE_ENGINE_LIBRARY } from './data/narrative_engine';
import { COMMERCIAL_ENGINE_BLOCKS, COMMERCIAL_ENGINE_LIBRARY } from './data/commercial_data';
import { AESTHETIC_ENGINE_BLOCKS, AESTHETIC_ENGINE_LIBRARY } from './data/aesthetic_data';
import { TRAILER_ENGINE_BLOCKS, TRAILER_ENGINE_LIBRARY } from './data/trailer_data';
import { POETIC_ENGINE_BLOCKS, POETIC_ENGINE_LIBRARY } from './data/poetic_data';

// Aliases for Experimental which uses Poetic data structures in this engine
const EXPERIMENTAL_ENGINE_BLOCKS = POETIC_ENGINE_BLOCKS;
const EXPERIMENTAL_ENGINE_LIBRARY = POETIC_ENGINE_LIBRARY;

import { COMM_SKIN_BLOCKS, COMM_SKIN_LIBRARY } from './data/commercial_skin';
import { EXPERIMENTAL_SKIN_BLOCKS, EXPERIMENTAL_SKIN_LIBRARY } from './data/experimental_skin';
import { TRAILER_SKIN_BLOCKS, TRAILER_SKIN_LIBRARY } from './data/trailer_skin';
import { ALL_SKIN_BLOCKS, SKIN_LIBRARY } from './data/skin_libraries';
import { GENRE_CATEGORIES } from './data/genres';
import { AES_COLOR_PRESETS } from './data/aesthetic_libraries/color_presets';

export const COUNTRY_PRESETS = [
  { cn: "中国", en: "China" },
  { cn: "美国", en: "USA" },
  { cn: "日本", en: "Japan" },
  { cn: "英国", en: "UK" },
  { cn: "法国", en: "France" },
  { cn: "德国", en: "Germany" },
  { cn: "俄罗斯", en: "Russia" },
  { cn: "韩国", en: "South Korea" },
  { cn: "印度", en: "India" },
  { cn: "意大利", en: "Italy" },
  { cn: "西班牙", en: "Spain" },
  { cn: "巴西", en: "Brazil" },
  { cn: "墨西哥", en: "Mexico" },
  { cn: "加拿大", en: "Canada" },
  { cn: "澳大利亚", en: "Australia" },
  { cn: "埃及", en: "Egypt" },
  { cn: "土耳其", en: "Turkey" },
  { cn: "泰国", en: "Thailand" },
  { cn: "越南", en: "Vietnam" },
  { cn: "伊朗", en: "Iran" },
  { cn: "希腊", en: "Greece" },
  { cn: "瑞典", en: "Sweden" },
  { cn: "阿根廷", en: "Argentina" },
  { cn: "南非", en: "South Africa" }
];

export const AESTHETIC_LOGIC_TEMPLATES: LogicTemplateDef[] = [
  {
    id: 'DEFAULT',
    name: '全能综合 (Synthesis)',
    nameEn: 'Default',
    desc: '标准模式：平衡所有视觉要素，建立最稳健的叙事结构。',
    descEn: 'Standard Mode: Balances all visual elements for a robust narrative structure.',
    iconName: 'Layout',
    primaryBlocks: []
  },
  {
    id: 'IDENTITY',
    name: '身份核心 (Identity Core)',
    nameEn: 'Identity',
    desc: '英雄肖像流：聚焦主体的身份、年龄、性别与眼神神态。',
    descEn: 'Portrait Mode: Focuses on identity, age, gender, and facial features.',
    iconName: 'User',
    primaryBlocks: ['aes_age', 'aes_gender', 'aes_ethnicity', 'aes_occupation', 'aes_persona', 'aes_eye_color', 'aes_eye_shape', 'aes_expression']
  },
  {
    id: 'ACTION',
    name: '动能叙事 (Action Energy)',
    nameEn: 'Action',
    desc: '环境交互流：强调主体的动作形态、服装造型与持有物。',
    descEn: 'Dynamic Mode: Emphasizes movement, clothing, and props interaction.',
    iconName: 'Zap',
    primaryBlocks: ['aes_action_static', 'aes_action_dynamic', 'aes_action_complex', 'aes_clothing', 'aes_prop_held', 'aes_accessories', 'aes_body_type']
  },
  {
    id: 'ATMOSPHERE',
    name: '氛围意象 (Atmosphere)',
    nameEn: 'Vibe',
    desc: '解构意境流：专注于影调、气象、通感与场域空间的融合。',
    descEn: 'Vibe Mode: Focuses on lighting, weather, and environmental atmosphere.',
    iconName: 'Eye',
    primaryBlocks: ['aes_light_mood', 'aes_weather', 'aes_atmosphere', 'aes_particles', 'aes_scene_real', 'aes_scene_abstract']
  },
  {
    id: 'LOOK',
    name: '妆造细节 (Fashion Look)',
    nameEn: 'Gaze',
    desc: '先锋质感流：侧重发型、五官特征、皮肤肌理与面料细节。',
    descEn: 'Style Mode: Prioritizes hair, makeup, skin texture, and fashion details.',
    iconName: 'Palette',
    primaryBlocks: ['aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_face_features', 'aes_skin_texture', 'aes_body_features', 'aes_clothing']
  },
  {
    id: 'TECH',
    name: '参数校准 (Technical Spec)',
    nameEn: 'Tech',
    desc: '工业拍摄流：精密控制摄影机、镜头焦段、构图与渲染协议。',
    descEn: 'Technical Mode: Focuses on camera specs, lens choice, and rendering quality.',
    iconName: 'Camera',
    primaryBlocks: ['aes_camera_system', 'aes_lens_series', 'aes_focal_length', 'aes_image_focus', 'aes_shot_size', 'aes_visual_balance', 'aes_render_real', 'aes_render_art']
  }
];

export const GENRE_SUPER_GROUPS = [
  {
    id: "super_adrenaline",
    name: "肾上腺素 (Adrenaline)",
    desc: "动作、武侠、战争。身体的律动与冲突。",
    includes: ["type_a", "type_d"],
    iconName: "Zap"
  },
  {
    id: "super_imagination",
    name: "脑洞幻想 (Imagination)",
    desc: "科幻、奇幻、超自然。超越现实的规则。",
    includes: ["type_b", "type_c"],
    iconName: "Sparkles"
  },
  {
    id: "super_tension",
    name: "惊悚悬疑 (Tension)",
    desc: "恐怖、怪谈、推理。未知的恐惧与智力博弈。",
    includes: ["type_e", "type_f"],
    iconName: "Eye"
  },
  {
    id: "super_emotion",
    name: "情感共鸣 (Resonance)",
    desc: "剧情、爱情、社会。人与人的羁绊与眼泪。",
    includes: ["type_g", "type_h", "type_j"],
    iconName: "Heart"
  },
  {
    id: "super_style",
    name: "风格解构 (Expression)",
    desc: "喜剧、艺术、音乐。打破常规的视听语言。",
    includes: ["type_i", "type_k", "type_l"],
    iconName: "Music"
  }
];

export const LIGHTING_SKELETONS = [
  {
    id: "skel_high",
    name: "高调 (High Key)",
    desc: "明亮、洁净、低反差、神圣感。适合梦幻、科技、纯洁主题。",
    iconName: "Sun"
  },
  {
    id: "skel_low",
    name: "低调 (Low Key)",
    desc: "深沉、阴影、高反差、神秘感。适合悬疑、恐怖、奢华主题。",
    iconName: "Moon"
  },
  {
    id: "skel_mid",
    name: "中调 (Mid Tone)",
    desc: "平衡、灰阶、写实、日常感。适合纪实、人文、复古主题。",
    iconName: "Cloud"
  },
  {
    id: "skel_soft",
    name: "软调 (Soft Light)",
    desc: "柔和、朦胧、漫反射、过渡自然。适合浪漫、女性、回忆主题。",
    iconName: "Feather"
  },
  {
    id: "skel_hard",
    name: "硬调 (Hard Light)",
    desc: "锐利、强烈、轮廓分明、戏剧性。适合力量、冲突、时尚主题。",
    iconName: "Zap"
  }
];

export const DRIVERS: (DriverDef & { nameEn: string })[] = [
  {
    id: DriverType.NARRATIVE,
    name: "爱欲迷宫",
    nameEn: "LABYRINTH OF EROS",
    englishId: "NARRATIVE",
    coreDriver: "象征界",
    coreDriverEn: "The Symbolic",
    description: "【能指与链条】在符号界中编织命运。通过“父之名”与语言的律法，将混沌的生命经验结构化为可被理解的“神话”。",
    descriptionEn: "[Signifier & Chain] Weaving destiny in the symbolic realm. Through the 'Name-of-the-Father' and the law of language, structuring chaotic life experience into understandable myths.",
    kpi: "意义构建",
    forbidden: "禁止逻辑断裂",
    iconName: "Film",
    gradient: "from-amber-900/40 to-slate-900"
  },
  {
    id: DriverType.COMMERCIAL,
    name: "欲望缝合",
    nameEn: "THE SUTURE",
    englishId: "COMMERCIAL",
    coreDriver: "想象界",
    coreDriverEn: "The Imaginary",
    description: "【镜像与误认】商品拜物教的仪式。利用“理想自我”的幻象来缝合主体的匮乏，许诺一个无缝、完整的镜中世界。",
    descriptionEn: "[Mirror & Misrecognition] Rituals of commodity fetishism. Utilizing the 'Ideal-I' fantasy to suture the subject's lack, promising a seamless, complete world in the mirror.",
    kpi: "欲望捕获",
    forbidden: "禁止展示匮乏",
    iconName: "Briefcase",
    gradient: "from-cyan-900/40 to-slate-900"
  },
  {
    id: DriverType.AESTHETIC,
    name: "情绪美学",
    nameEn: "AESTHETIC",
    englishId: "AESTHETIC",
    coreDriver: "实在界",
    coreDriverEn: "The Real",
    description: "【创伤与崇高】直抵实在界的荒漠。剥离符号的防御，通过纯粹的视听强度触碰那个无法被语言捕获的“刺点”。",
    descriptionEn: "[Trauma & Sublime] Straight to the desert of the Real. Stripping away symbolic defense, touching the uncapturable 'punctum' through pure audiovisual intensity.",
    kpi: "感官情动",
    forbidden: "禁止平庸",
    iconName: "Palette",
    gradient: "from-rose-900/40 to-slate-900"
  },
  {
    id: DriverType.EXPERIMENTAL,
    name: "现象学还原",
    nameEn: "REDUCTION",
    englishId: "EXPERIMENTAL",
    coreDriver: "悬置",
    coreDriverEn: "The Epoche",
    description: "【解构与还原】执行现象学还原。剥离一切叙事意义，将影像还原为纯粹的物质、时间与光影的实验。",
    descriptionEn: "[Deconstruction & Reduction] Executing phenomenological reduction. Stripping away all narrative meaning, reducing images to pure experiments of matter, time, and light.",
    kpi: "本质直观",
    forbidden: "禁止因果叙事",
    iconName: "TestTube",
    gradient: "from-purple-900/40 to-slate-900"
  },
  {
    id: DriverType.TRAILER,
    name: "虚拟幻象",
    nameEn: "TRAILER",
    englishId: "TRAILER",
    coreDriver: "延异",
    coreDriverEn: "Différance",
    description: "【诱惑与推迟】预告片美学。通过意义的碎片化与不断推迟，制造一种永恒的、无法被满足的期待感。",
    descriptionEn: "[Seduction & Deferral] Trailer aesthetics. Through fragmentation and constant deferral of meaning, creating an eternal, unfulfillable sense of expectation.",
    kpi: "钩子效应",
    forbidden: "禁止给出答案",
    iconName: "Zap",
    gradient: "from-orange-900/40 to-slate-900"
  }
];

export const MIDDLE_LAYER_CONFIG: Record<DriverType, LayerConfig> = {
  [DriverType.NARRATIVE]: { layerName: "分场 (Scenes)", sectionPrefix: "Scene" },
  [DriverType.COMMERCIAL]: { layerName: "营销模块 (Modules)", sectionPrefix: "Module" },
  [DriverType.EXPERIMENTAL]: { layerName: "视觉乐章 (Phases)", sectionPrefix: "Phase" },
  [DriverType.AESTHETIC]: { layerName: "情绪段落 (Moods)", sectionPrefix: "Mood" },
  [DriverType.TRAILER]: { layerName: "剪辑节奏 (Beats)", sectionPrefix: "Cut" }
};

export const BLOCK_LIMITS: Record<string, number> = {
  'comm_skin_status': 1, 'comm_skin_length': 1, 'comm_skin_media': 3, 'comm_skin_structure': 1,
  'comm_skin_auteur': 1, 'comm_skin_chroma': 1, 'comm_skin_emotion': 3, 'comm_skin_benchmark': 3,
  'comm_skin_anchor': 3, 'comm_skin_scenario': 3, 'comm_skin_endorsement': 3,
  'exp_skin_context': 1, 'exp_skin_method': 1, 'exp_skin_object': 1,
  'trl_skin_genre': 1, 'trl_skin_rhythm': 1, 'trl_skin_hook': 1,
  'trl_t0': 1, 'trl_t1': 1, 'trl_t2': 3, 'trl_t3': 1, 'trl_t4': 1, 'trl_t5': 3, 'trl_t6': 1, 'trl_t7': 1,
  'aes_director_style': 2,
  'aes_photo_style': 2,
  'aes_art_style': 2,
  'aes_anim_director': 2,
  'aes_art_movement': 2,
  'aes_poster_style': 2,
  'aes_color_palette': 2,
  'aes_palette_preset': 1,
  'aes_camera_system': 1,
  'aes_lens_series': 1,
  'aes_texture_render': 1,
  'aes_physical_grain': 1,
  'aes_base_tone': 1,
  'aes_color_science': 1,
  'aes_art_medium': 1,
  'aes_line_quality': 1,
  'aes_canvas_texture': 1,
  'aes_image_focus': 1,
  'aes_shot_size': 1,
  'aes_visual_balance': 1,
  'aes_perspective': 1,
  'aes_angle': 1,
  'aes_focal_length': 1,
  'aes_depth': 1,
  'aes_shutter': 1,
  'aes_lens_fx': 3,
  'aes_optical_format': 1,
  'aes_age': 1,
  'aes_gender': 1,
  'aes_body_type': 2,
  'aes_ethnicity': 1,
  'aes_species': 1,
  'aes_occupation': 1,
  'aes_persona': 1,
  'aes_clothing': 1,
  'aes_hair_color': 2,
  'aes_hair_style_f': 1,
  'aes_hair_style_m': 1,
  'aes_eye_color': 1,
  'aes_eye_shape': 1,
  'aes_eye_fx': 1,
  'aes_expression': 1,
  'aes_face_features': 3,
  'aes_skin_texture': 3,
  'aes_body_features': 3,
  'aes_action_static': 1,
  'aes_action_dynamic': 1,
  'aes_action_complex': 1,
  'aes_prop_held': 1,
  'aes_accessories': 3,
  'aes_creature_size': 1,
  'aes_creature_class': 2,
  'aes_creature_element': 1,
  'aes_creature_head': 3,
  'aes_creature_body': 3,
  'aes_creature_mood': 1,
  'aes_creature_action': 1,
  'aes_creature_texture': 3,
  'skin_era': 1,
  'aes_scene_real': 1,
  'aes_scene_surreal': 1,
  'aes_scene_abstract': 1,
  'aes_particles': 3,  // Formerly aes_a3
  'aes_light_mood': 1,
  'aes_light_type': 2,
  'aes_light_direction': 1,
  'aes_light_shape': 1,
  'aes_atmosphere': 1, // Formerly aes_air_medium
  'aes_weather': 2,
  'aes_synesthesia': 3,
  'aes_render_real': 1,
  'aes_render_art': 1,
  'aes_render': 1,
  'engine_m0': 1, 'engine_m1': 3, 'engine_m2': 1, 'engine_m3': 3, 'engine_m4': 3, 'engine_m5': 3, 'engine_m6': 3, 'engine_m7': 1,
  'comm_c0': 1, 'comm_c1': 1, 'comm_c2': 3, 'comm_c3': 1, 'comm_c4': 3, 'comm_c5': 3, 'comm_c6': 3, 'comm_c7': 3,
  'skin_genre': 1, 'skin_animation_genre': 1, 'skin_location': 3, 'skin_society': 1, 'skin_ideology': 1,
  'poe_p0': 1, 'poe_p1': 1, 'poe_p2': 1, 'poe_p3': 1, 'poe_p4': 1
};

export {
  NARRATIVE_ENGINE_BLOCKS,
  NARRATIVE_ENGINE_LIBRARY,
  COMMERCIAL_ENGINE_BLOCKS,
  COMMERCIAL_ENGINE_LIBRARY,
  EXPERIMENTAL_ENGINE_BLOCKS,
  EXPERIMENTAL_ENGINE_LIBRARY,
  AESTHETIC_ENGINE_BLOCKS,
  AESTHETIC_ENGINE_LIBRARY,
  TRAILER_ENGINE_BLOCKS,
  TRAILER_ENGINE_LIBRARY,
  POETIC_ENGINE_BLOCKS,
  POETIC_ENGINE_LIBRARY,

  COMM_SKIN_BLOCKS,
  COMM_SKIN_LIBRARY,
  EXPERIMENTAL_SKIN_BLOCKS,
  EXPERIMENTAL_SKIN_LIBRARY,
  TRAILER_SKIN_BLOCKS,
  TRAILER_SKIN_LIBRARY,

  ALL_SKIN_BLOCKS,
  SKIN_LIBRARY,
  GENRE_CATEGORIES,
  AES_COLOR_PRESETS
};