
import { DriverType, DriverDef, LayerConfig, LogicTemplateDef } from './types';
import { Briefcase, Film, TestTube, Clapperboard, Music, Palette, Zap, Ghost, Feather, User, Eye, Box, Camera, Layout } from 'lucide-react';
import { NARRATIVE_ENGINE_BLOCKS, NARRATIVE_ENGINE_LIBRARY } from './data/engine_core/narrative_engine';
import { COMMERCIAL_ENGINE_BLOCKS, COMMERCIAL_ENGINE_LIBRARY } from './data/aesthetic/commercial_data';
import { AESTHETIC_ENGINE_BLOCKS, AESTHETIC_ENGINE_LIBRARY } from './data/aesthetic/core';
import { TRAILER_ENGINE_BLOCKS, TRAILER_ENGINE_LIBRARY } from './data/aesthetic/trailer_data';
import { POETIC_ENGINE_BLOCKS, POETIC_ENGINE_LIBRARY } from './data/aesthetic/poetic_data';

// Aliases for Experimental which uses Poetic data structures in this engine
const EXPERIMENTAL_ENGINE_BLOCKS = POETIC_ENGINE_BLOCKS;
const EXPERIMENTAL_ENGINE_LIBRARY = POETIC_ENGINE_LIBRARY;

import { COMM_SKIN_BLOCKS, COMM_SKIN_LIBRARY } from './data/aesthetic/commercial_skin';
import { EXPERIMENTAL_SKIN_BLOCKS, EXPERIMENTAL_SKIN_LIBRARY } from './data/aesthetic/experimental_skin';
import { TRAILER_SKIN_BLOCKS, TRAILER_SKIN_LIBRARY } from './data/aesthetic/trailer_skin';
import { ALL_SKIN_BLOCKS, SKIN_LIBRARY } from './data/narrative/skin_libraries';
import { SUR1_DATA as GENRE_CATEGORIES } from './data/engine_surface/SUR1';
import { SUR2_DATA as WORLD_MOTIF_CATEGORIES } from './data/engine_surface/SUR2';
import { AES_COLOR_PRESETS } from './data/aesthetic_libraries/color_presets';
import { MASTER_PRESETS, MASTER_PRESETS_REALISM, MASTER_PRESETS_STYLIZED } from './data/aesthetic/master_presets';

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

export const SUR3_SPACE_ANCHOR_PRESETS = [
  ...COUNTRY_PRESETS,
  { cn: "南亚河流聚落", en: "South Asian river settlements" },
  { cn: "日本长崎近海", en: "Nagasaki offshore Japan" },
  { cn: "黄海海军边界", en: "Yellow Sea naval frontier" },
  { cn: "上海租界边缘", en: "Shanghai concession edge" },
  { cn: "东京湾地下物流层", en: "Tokyo Bay underground logistics layer" },
  { cn: "木星轨道移民环站", en: "Jupiter orbit immigrant ring" },
  { cn: "火星极地矿业聚落", en: "Martian polar mining settlement" },
  { cn: "近地轨道碎片带", en: "Low Earth orbit debris belt" },
  { cn: "人体肺泡内", en: "Inside human lung alveoli" },
  { cn: "纳米尺度血管通道", en: "Nanoscopic blood-vessel channel" },
  { cn: "异维折叠城", en: "Folded extra-dimensional city" },
  { cn: "无固定年代的梦档案", en: "Dream archive with no fixed calendar" },
];

export const SUR3_COORDINATE_PRESETS = [
  { year: -1655, spaceCn: "南亚河流聚落", spaceEn: "South Asian river settlements" },
  { year: -1200, spaceCn: "东地中海海岸城邦", spaceEn: "Eastern Mediterranean coastal city-states" },
  { year: -500, spaceCn: "波斯帝国驿道", spaceEn: "Persian imperial road" },
  { year: -221, spaceCn: "秦边郡城门", spaceEn: "Qin frontier commandery gate" },
  { year: 1830, spaceCn: "日本长崎近海", spaceEn: "Nagasaki offshore Japan" },
  { year: 1894, spaceCn: "黄海海军边界", spaceEn: "Yellow Sea naval frontier" },
  { year: 1936, spaceCn: "上海租界边缘", spaceEn: "Shanghai concession edge" },
  { year: 1968, spaceCn: "布拉格被占领街区", spaceEn: "Occupied Prague streets" },
  { year: 1997, spaceCn: "香港交接夜", spaceEn: "Hong Kong handover night" },
  { year: 2026, spaceCn: "首尔当代公寓区", spaceEn: "Contemporary Seoul apartment district" },
  { year: 2042, spaceCn: "东京湾地下物流层", spaceEn: "Tokyo Bay underground logistics layer" },
  { year: 2077, spaceCn: "近地轨道碎片带", spaceEn: "Low Earth orbit debris belt" },
  { year: 2150, spaceCn: "木星轨道移民环站", spaceEn: "Jupiter orbit immigrant ring" },
  { year: 2290, spaceCn: "火星极地矿业聚落", spaceEn: "Martian polar mining settlement" },
  { year: 2026, spaceCn: "人体肺泡内", spaceEn: "Inside human lung alveoli" },
  { year: 2026, spaceCn: "纳米尺度血管通道", spaceEn: "Nanoscopic blood-vessel channel" },
  { year: null, spaceCn: "异维折叠城", spaceEn: "Folded extra-dimensional city" },
  { year: null, spaceCn: "无固定年代的梦档案", spaceEn: "Dream archive with no fixed calendar" },
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
    desc: '环境交互流：强调主体的动作形态、体态与场景关系。',
    descEn: 'Dynamic Mode: Emphasizes movement, body shape, and scene interaction.',
    iconName: 'Zap',
    primaryBlocks: ['aes_action_static', 'aes_action_dynamic', 'aes_action_complex', 'aes_body_type', 'aes_expression']
  },
  {
    id: 'ATMOSPHERE',
    name: '氛围意象 (Atmosphere)',
    nameEn: 'Vibe',
    desc: '解构意境流：专注于影调、气象、通感与场域空间的融合。',
    descEn: 'Vibe Mode: Focuses on lighting, weather, and environmental atmosphere.',
    iconName: 'Eye',
    primaryBlocks: ['aes_light_mood', 'aes_atmosphere', 'aes_particles', 'aes_scene_real', 'aes_scene_surreal', 'aes_scene_abstract']
  },
  {
    id: 'LOOK',
    name: '妆造细节 (Fashion Look)',
    nameEn: 'Gaze',
    desc: '先锋质感流：侧重发型、五官特征、皮肤肌理与身体细节。',
    descEn: 'Style Mode: Prioritizes hair, facial structure, skin texture, and body detail.',
    iconName: 'Palette',
    primaryBlocks: ['aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_face_features', 'aes_expression', 'aes_skin_texture', 'aes_body_features']
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

export const GENRE_SUPER_GROUPS = [];

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

export const DRIVERS: (DriverDef & { nameEn: string; accent: string; retroAccent: string })[] = [
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
    gradient: "from-red-950/35 to-neutral-950",
    accent: '#ff4f3f',
    retroAccent: '#8B261D'
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
    gradient: "from-cyan-900/40 to-slate-900",
    accent: '#22D3EE',
    retroAccent: '#0E4B50'
  },
  {
    id: DriverType.AESTHETIC,
    name: "情绪美学",
    nameEn: "AESTHETIC",
    englishId: "AESTHETIC",
    coreDriver: "实在界",
    coreDriverEn: "The Real",
    description: "【创伤与崇高】直抵实在界的荒漠。剥离开符号的防御，通过纯粹的视听强度触碰那个无法被语言捕获的“刺点”。",
    descriptionEn: "[Trauma & Sublime] Straight to the desert of the Real. Stripping away symbolic defense, touching the uncapturable 'punctum' through pure audiovisual intensity.",
    kpi: "感官情动",
    forbidden: "禁止平庸",
    iconName: "Palette",
    gradient: "from-violet-900/40 to-slate-900",
    accent: '#8B5CF6',
    retroAccent: '#5B4B8A'
  },
  {
    id: DriverType.EXPERIMENTAL,
    name: "换喻脚本",
    nameEn: "METONYMIC SCRIPT",
    englishId: "SCRIPT_TRANSLATION",
    coreDriver: "故事转译",
    coreDriverEn: "Story Translation",
    description: "【自定义故事转剧本】跳过分歧点与核心引擎，直接粘贴完整故事，进入叙事创作整理与换喻电影脚本生成。",
    descriptionEn: "[Custom Story to Screenplay] Skip divergence and engine setup. Paste a complete story and translate it into a creative bible and metonymic screenplay.",
    kpi: "电影脚本生成",
    forbidden: "禁止空白原文",
    iconName: "Wand2",
    gradient: "from-purple-900/40 to-slate-900",
    accent: '#A855F7',
    retroAccent: '#4C1D95'
  },
  {
    id: DriverType.TRAILER,
    name: "迷雾画布",
    nameEn: "MIST CANVAS",
    englishId: "CANVAS",
    coreDriver: "生成与切割",
    coreDriverEn: "Generate & Slice",
    description: "【生产画布】连接 Lovart 生图、资产多视角、宫格分镜和切割回收。把提示词、参考图、成片和裁切结果集中成一个可迭代的视觉工作台。",
    descriptionEn: "[Production Canvas] Connect Lovart generation, multi-view assets, storyboard grids, and image slicing in one iterative visual workstation.",
    kpi: "资产一致性",
    forbidden: "禁止散落生产",
    iconName: "Zap",
    gradient: "from-orange-900/40 to-slate-900",
    accent: '#FB923C',
    retroAccent: '#85411B'
  }
];

export const MIDDLE_LAYER_CONFIG: Record<DriverType, LayerConfig> = {
  [DriverType.NARRATIVE]: { layerName: "分场 (Scenes)", sectionPrefix: "Scene" },
  [DriverType.COMMERCIAL]: { layerName: "营销模块 (Modules)", sectionPrefix: "Module" },
  [DriverType.EXPERIMENTAL]: { layerName: "脚本段落 (Script Blocks)", sectionPrefix: "Block" },
  [DriverType.AESTHETIC]: { layerName: "情绪段落 (Moods)", sectionPrefix: "Mood" },
  [DriverType.TRAILER]: { layerName: "画布节点 (Canvas Nodes)", sectionPrefix: "Node" },
  [DriverType.SUTURE]: { layerName: "缝合节点 (Suture Nodes)", sectionPrefix: "Suture" }
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
  'aes_creature_size': 1,
  'aes_creature_class': 2,
  'aes_creature_element': 1,
  'aes_creature_head': 3,
  'aes_creature_body': 3,
  'aes_creature_mood': 1,
  'aes_creature_action': 1,
  'aes_creature_texture': 3,
  'skin_era': 2,
  'aes_scene_real': 1,
  'aes_scene_surreal': 1,
  'aes_scene_abstract': 1,
  'aes_particles': 3,  // Formerly aes_a3
  'aes_light_mood': 1,
  'aes_light_type': 2,
  'aes_light_direction': 1,
  'aes_light_shape': 1,
  'aes_atmosphere': 1, // Formerly aes_air_medium
  'aes_render_real': 1,
  'aes_render_art': 1,
  'aes_render': 1,
  'engine_m0': 1, 'engine_m1': 2, 'engine_m2': 2, 'engine_m3': 3, 'engine_m4': 3, 'engine_m5': 3, 'engine_m6': 3, 'engine_m7b': 1, 'engine_m7a': 1,
  // engine_m4x/engine_m5x removed in v3.0
  'comm_c0': 1, 'comm_c1': 1, 'comm_c2': 3, 'comm_c3': 1, 'comm_c4': 3, 'comm_c5': 3, 'comm_c6': 3, 'comm_c7': 3,
  'skin_genre': 2, 'skin_animation_genre': 1, 'skin_location': 2, 'skin_society': 1, 'skin_ideology': 1, 'skin_ending': 1,
  'skin_profession': 2,
  'poe_p0': 1, 'poe_p1': 1, 'poe_p2': 1, 'poe_p3': 1, 'poe_p4': 1
};

// ============================================================
// RANDOMIZATION PROTOCOL v2.0
// ============================================================

/** 随机可选区间：每个参数在随机时应抽取的词条数量 [min, max] */
export const RANDOM_RANGES: Record<string, [number, number]> = {
  // M0-M7A/M7B 引擎核心
  'engine_m0': [1, 1], 'engine_m1': [1, 2], 'engine_m2': [1, 2],
  'engine_m3': [1, 2], 'engine_m4': [1, 2], 'engine_m5': [1, 2],
  'engine_m6': [1, 2], 'engine_m7b': [1, 1], 'engine_m7a': [1, 1],
  // engine_m4x/engine_m5x removed in v3.0
  // SUR 表层设定
  'skin_genre': [1, 2],      // SUR1 故事类型
  'skin_era': [1, 1],         // SUR2 背景场域
  'skin_society': [0, 1],     // SUR4 社会形态
  'skin_everything': [0, 1],  // SUR5 对象预设
  'skin_location': [0, 1],    // SUR6 空间容器
  'skin_gender': [0, 1],      // SUR7 选角呈现
  'skin_age': [0, 1],         // SUR8 年龄阶段
  'skin_profession': [0, 1],  // SUR9 职业身份
  'skin_ideology': [0, 1],    // SUR10 信念预设
  'skin_ending': [0, 1],      // SUR-END 显性收场
  // SUR10X 表层信念裂度词条
  'sur10x': [0, 1],           // SUR10X 信念裂度
  // SV 叙事结构
  'skin_structure': [0, 1],   // SV1 叙事结构
  'skin_volume': [0, 1],      // SV2 故事体量
};

/** 单项随机按钮使用的数量区间：用户主动点骰子时不应随机为空 */
export const SINGLE_RANDOM_RANGES: Record<string, [number, number]> = {
  'skin_genre': [1, 2],       // SUR1 故事类型
  'skin_society': [1, 1],     // SUR4 社会形态
  'skin_everything': [1, 1],  // SUR5 对象预设
  'skin_location': [1, 2],    // SUR6 空间容器
  'skin_gender': [1, 1],      // SUR7 选角呈现
  'skin_age': [1, 1],         // SUR8 年龄阶段
  'skin_profession': [1, 1],  // SUR9 职业身份
  'skin_ideology': [1, 1],    // SUR10 信念预设
  'skin_ending': [1, 1],      // SUR-END 显性收场
  'sur10x': [1, 1],           // SUR10X 信念裂度
  'skin_structure': [1, 1],   // SV1 叙事结构
  'skin_volume': [1, 1],      // SV2 故事体量
};

/** 故事摘要12词加权筛选配置 */
export const SURFACE_WEIGHT_CONFIG = {
  slots: [
    { id: 'SUR1', blockIds: ['skin_genre'], weight: 0.65 },
    { id: 'SUR2', blockIds: ['skin_era'], weight: 0.65 },
    { id: 'SUR3', blockIds: ['skin_year_exact', 'skin_country_exact'], weight: 0.65 },
    { id: 'SUR4', blockIds: ['skin_society'], weight: 0.30 },
    { id: 'SUR5', blockIds: ['skin_everything'], weight: 0.50 },
    { id: 'SUR6', blockIds: ['skin_location'], weight: 0.30 },
    { id: 'SUR7', blockIds: ['skin_gender'], weight: 0.65 },
    { id: 'SUR9', blockIds: ['skin_profession'], weight: 0.65 },
    { id: 'SUR10', blockIds: ['skin_ideology'], weight: 0.30 },
    { id: 'SUR-END', blockIds: ['skin_ending'], weight: 0.30 },
    { id: 'SUR10X', blockIds: ['sur10x'], weight: 0.30 },
  ] as const,
  cap: 6,
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
  WORLD_MOTIF_CATEGORIES,
  AES_COLOR_PRESETS,
  MASTER_PRESETS,
  MASTER_PRESETS_REALISM,
  MASTER_PRESETS_STYLIZED
};
