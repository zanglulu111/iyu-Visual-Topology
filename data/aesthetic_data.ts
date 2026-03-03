
import { NarrativeBlockDef, LibraryCategoryDef, LibraryItemDef } from '../types';
// Import specific aesthetic libraries
import { AES_AGE, AES_GENDER, AES_BODY_TYPE } from './aesthetic_libraries/subject_body';
import { AES_HAIR_COLOR, AES_HAIR_FEM, AES_HAIR_MASC } from './aesthetic_libraries/subject_hair';
import { AES_EYE_COLOR, AES_EYE_SHAPE, AES_EYE_FX } from './aesthetic_libraries/subject_eyes';
import { AES_SKIN_TEXTURE, AES_BODY_FEATURES } from './aesthetic_libraries/subject_skin';
import { AES_FACE_FEATURES, AES_EXPRESSION } from './aesthetic_libraries/subject_face'; 
import { AES_OCCUPATION } from './aesthetic_libraries/subject_occupation';
import { AES_PERSONA } from './aesthetic_libraries/subject_persona';
import { AES_ACTION_STATIC, AES_ACTION_DYNAMIC } from './aesthetic_libraries/subject_actions';
import { AES_ACTION_COMPLEX } from './aesthetic_libraries/subject_human_behavior';
import { AES_ETHNICITY, AES_SPECIES } from './aesthetic_libraries/subject_identity';
// Removed AES_CLASS import
import { AES_IMAGE_FOCUS, AES_VISUAL_BALANCE, AES_SHOT_SIZE, AES_ANGLE, AES_FOCAL_LENGTH, AES_DEPTH, AES_SHUTTER, AES_LENS_FX, AES_OPTICAL_FORMAT, AES_PERSPECTIVE } from './aesthetic_libraries/layer1_lens';
import { AES_CAMERA_SYSTEM, AES_LENS_SERIES, AES_BASE_TONE, AES_COLOR_SCIENCE, AES_TEXTURE_RENDER, AES_PHYSICAL_GRAIN, AES_ART_MEDIUM, AES_LINE_QUALITY, AES_CANVAS_TEXTURE } from './aesthetic_libraries/layer1_1_fixed';
import { AES_LIGHT_MOOD, AES_LIGHT_TYPE, AES_LIGHT_DIRECTION, AES_LIGHT_SHAPE } from './aesthetic_libraries/layer2_lighting';
import { AES_ATMOSPHERE, AES_PARTICLES } from './aesthetic_libraries/layer4_atmosphere';
import { AES_POSTER_STYLE } from './aesthetic_libraries/layer4_poster';
import { AES_RENDER_REAL, AES_RENDER_ART } from './aesthetic_libraries/layer5_tech';
import { AES_CREATURE_SIZE, AES_CREATURE_CLASS, AES_CREATURE_ELEMENT, AES_CREATURE_HEAD, AES_CREATURE_BODY, AES_CREATURE_MOOD, AES_CREATURE_ACTION, AES_CREATURE_TEXTURE } from './aesthetic_libraries/subject_creature';

import { AES_SCENE_REAL } from './aesthetic_libraries/layer3_real';
import { AES_SCENE_SURREAL } from './aesthetic_libraries/layer3_surreal';
import { AES_SCENE_ABSTRACT } from './aesthetic_libraries/layer3_abstract';

import { DIRECTOR_STYLE_ITEMS } from './aesthetic_libraries/director_styles_split';
import { PHOTO_STYLE_ITEMS } from './aesthetic_libraries/photography_styles_split';
import { ART_STYLE_ITEMS } from './aesthetic_libraries/art_styles_split';
import { ANIMATION_DIRECTORS_LIB, ART_MOVEMENTS_LIB } from './stylized_references';

// Empty definition to replace external file import from layer2_color.ts
const AES_COLOR_PALETTE: LibraryItemDef[] = [];

export const AESTHETIC_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  // --- LAYER 0: THE SOUL ---
  // Realism Blocks
  { id: "aes_director_style", name: "实拍导演风格", enName: "DIRECTOR STYLE", description: "电影导演视听语言特征。", tags: [] },
  { id: "aes_photo_style", name: "摄影摄像流派", enName: "PHOTO STYLE", description: "影像记录流派与专业摄影风格。", tags: [] },
  { id: "aes_art_style", name: "艺术流派", enName: "ART STYLE", description: "经典艺术史流派与美术构成。", tags: [] },
  
  // Stylized Blocks (Split)
  { id: "aes_anim_director", name: "动画导演风格", enName: "ANIMATION DIRECTOR", description: "知名动画导演与工作室风格。", tags: [] },
  { id: "aes_art_movement", name: "美术/艺术风格", enName: "ART MOVEMENT", description: "插画、游戏美术与特定艺术流派。", tags: [] },
  
  { id: "aes_poster_style", name: "海报风格", enName: "POSTER STYLE", description: "平面构成、排版与视觉设计美学。", tags: [] },

  // --- LAYER 1.1: FIXED MODULE ---
  // Realism Mode Blocks (Only shown in Realism/Photo mode)
  { id: "aes_camera_system", name: "摄影机系统", enName: "CAMERA SYSTEM", description: "传感器尺寸与动态范围。", tags: [] },
  { id: "aes_lens_series", name: "镜头系列", enName: "LENS SERIES", description: "光学的“味道”与散景。", tags: [] },
  { id: "aes_optical_format", name: "光学格式", enName: "OPTICAL FORMAT", description: "画幅比例与传感器特性。", tags: [] },
  { id: "aes_texture_render", name: "画面质感", enName: "VISUAL TEXTURE", description: "渲染基准与物理层特性。", tags: [] },
  { id: "aes_physical_grain", name: "物理颗粒", enName: "PHYSICAL GRAIN", description: "模拟胶片噪点与数码感。", tags: [] },
  { id: "aes_base_tone", name: "显影协议", enName: "COLOR PROFILE", description: "影像的底层反差、饱和度与动态范围基准。", tags: [] },
  { id: "aes_color_science", name: "色彩科学", enName: "COLOR SCIENCE", description: "特定胶片型号或后期 LUT。", tags: [] },
  
  // Stylized Mode Blocks
  { id: "aes_art_medium", name: "创作介质", enName: "ART MEDIUM", description: "Digital, Watercolor, Ink, etc.", tags: [] },
  { id: "aes_line_quality", name: "线条质量", enName: "LINE QUALITY", description: "Outline thickness and style.", tags: [] },
  { id: "aes_canvas_texture", name: "画布质感", enName: "CANVAS TEXTURE", description: "Paper, screen tone, noise.", tags: [] },

  // --- LAYER 1.2: THE EYE ---
  { id: "aes_image_focus", name: "构图类别", enName: "IMAGE CATEGORY", description: "肖像、风景、静物或建筑。", tags: [] },
  { id: "aes_shot_size", name: "景别", enName: "SHOT SIZE", description: "拍摄距离。", tags: [] },
  { id: "aes_visual_balance", name: "视觉平衡", enName: "VISUAL BALANCE", description: "重心、对称性与负空间。", tags: [] },
  { id: "aes_perspective", name: "透视", enName: "PERSPECTIVE", description: "空间的几何深度与消失点逻辑。", tags: [] },
  { id: "aes_angle", name: "拍摄角度", enName: "CAMERA ANGLE", description: "摄影机倾斜度。", tags: [] },
  { id: "aes_focal_length", name: "焦段", enName: "FOCAL LENGTH", description: "视野范围。", tags: [] },
  { id: "aes_depth", name: "景深/焦点", enName: "DEPTH OF FIELD", description: "背景虚化度。", tags: [] },
  { id: "aes_shutter", name: "快门", enName: "SHUTTER", description: "动态模糊与凝固感。", tags: [] },
  { id: "aes_lens_fx", name: "光学特效", enName: "OPTICAL FX", description: "光学滤镜与物理瑕疵。", tags: [] },

  // --- LAYER 2: THE SUBJECT (HUMAN) ---
  { id: "aes_l2_custom", name: "主体描述 (自定义)", enName: "SUBJECT DETAIL", description: "Additional custom description for the subject.", tags: [] },
  { id: "aes_age", name: "年龄质感", enName: "AGE", description: "时间痕迹。", tags: [] },
  { id: "aes_gender", name: "性别气质", enName: "GENDER", description: "生理气质。", tags: [] },
  { id: "aes_body_type", name: "身体体态", enName: "BODY TYPE", description: "物理轮廓。", tags: [] },
  { id: "aes_ethnicity", name: "现实血统", enName: "ETHNICITY", description: "真实世界种族。", tags: [] },
  { id: "aes_species", name: "幻想种族", enName: "SPECIES", description: "超自然与科幻种族。", tags: [] },
  { id: "aes_occupation", name: "职业身份", enName: "OCCUPATION", description: "社会角色。", tags: [] },
  { id: "aes_persona", name: "潮流人设", enName: "PERSONA", description: "亚文化 or 社交标签。", tags: [] },
  // REMOVED: aes_clothing, aes_prop_held, aes_accessories
  { id: "aes_hair_color", name: "发色", enName: "HAIR COLOR", description: "色彩。", tags: [] },
  { id: "aes_hair_style_f", name: "发型(女式)", enName: "HAIRSTYLE FEM", description: "造型。", tags: [] },
  { id: "aes_hair_style_m", name: "发型(男式)", enName: "HAIRSTYLE MASC", description: "造型。", tags: [] },
  { id: "aes_eye_color", name: "瞳色", enName: "EYE COLOR", description: "虹膜颜色。", tags: [] },
  { id: "aes_eye_shape", name: "眼型", enName: "EYE SHAPE", description: "眼神形态。", tags: [] },
  { id: "aes_eye_fx", name: "眼部特效", enName: "EYE FX", description: "特殊瞳孔。", tags: [] },
  { id: "aes_face_features", name: "面部特征", enName: "FACE FEATURES", description: "面部细节。", tags: [] },
  { id: "aes_expression", name: "面部表情", enName: "EXPRESSION", description: "情绪外化。", tags: [] },
  { id: "aes_skin_texture", name: "皮肤质感", enName: "SKIN TEXTURE", description: "触感属性。", tags: [] },
  { id: "aes_body_features", name: "身体特征", enName: "BODY FEATURES", description: "躯干细节。", tags: [] },
  { id: "aes_action_static", name: "静态动作", enName: "STATIC ACTION", description: "低动态姿态。", tags: [] },
  { id: "aes_action_dynamic", name: "动态动作", enName: "DYNAMIC ACTION", description: "高强度位移。", tags: [] },
  { id: "aes_action_complex", name: "人类行为", enName: "HUMAN BEHAVIOR", description: "戏剧性行为。", tags: [] },

  // --- LAYER 2: THE SUBJECT (CREATURE) ---
  { id: "aes_creature_size", name: "体型量级", enName: "CREATURE SIZE", description: "生物尺度。", tags: [] },
  { id: "aes_creature_class", name: "生物纲目", enName: "CREATURE CLASS", description: "生物分类。", tags: [] },
  { id: "aes_creature_element", name: "元素属性", enName: "ELEMENTAL", description: "能量属性。", tags: [] },
  { id: "aes_creature_head", name: "头部特征", enName: "HEAD FEATURES", description: "头部异变。", tags: [] },
  { id: "aes_creature_body", name: "身体部件", enName: "BODY PARTS", description: "肢体异变。", tags: [] },
  { id: "aes_creature_mood", name: "生物心情", enName: "CREATURE MOOD", description: "情绪状态。", tags: [] },
  { id: "aes_creature_action", name: "生物行为", enName: "CREATURE ACTION", description: "互动行为。", tags: [] },
  { id: "aes_creature_texture", name: "生物质感", enName: "CREATURE TEXTURE", description: "触感属性。", tags: [] },

  // --- LAYER 3: THE STAGE ---
  { id: "aes_l3_custom", name: "环境描述 (自定义)", enName: "SCENE DETAIL", description: "Additional custom description for the environment.", tags: [] },
  // skin_era removed as per request
  { id: "aes_scene_real", name: "现实场景", enName: "REAL SCENE", description: "物理场域。", tags: [] },
  { id: "aes_scene_surreal", name: "超现实场景", enName: "SURREAL SCENE", description: "幻想空间。", tags: [] },
  { id: "aes_scene_abstract", name: "抽象场景", enName: "ABSTRACT SCENE", description: "心理空间。", tags: [] },
  // Merged Weather and Air Medium into Atmosphere
  { id: "aes_atmosphere", name: "天气/大气", enName: "ATMOSPHERE", description: "宏观气象与空气质感。", tags: [] },
  // Renamed A3 to Particles
  { id: "aes_particles", name: "粒子", enName: "PARTICLES", description: "空气中的悬浮微粒与视觉细节。", tags: [] },

  // --- LAYER 4: THE VIBE ---
  { id: "aes_light_mood", name: "光影基调", enName: "LIGHTING MOOD", description: "明暗基调。", tags: [] },
  { id: "aes_light_type", name: "照明类型", enName: "LIGHTING TYPE", description: "物理光源。", tags: [] },
  { id: "aes_light_direction", name: "光投射方向", enName: "LIGHT DIRECTION", description: "光源坐标。", tags: [] },
  { id: "aes_light_shape", name: "光投影形状", enName: "LIGHT SHAPE", description: "光影纹理。", tags: [] },
  { id: "aes_color_palette", name: "美术配色", enName: "COLOR PALETTE", description: "色彩组合。", tags: [] },
  
  // --- LAYER 5: THE RENDER ---
  { id: "aes_render_real", name: "画质增强 (写实)", enName: "QUALITY (REAL)", description: "摄影与写实渲染精度。", tags: [] },
  { id: "aes_render_art", name: "画质增强 (美术)", enName: "QUALITY (ART)", description: "美术与动画风格质量。", tags: [] },
  // Keep aes_render for fallback compatibility
  { id: "aes_render", name: "画质增强", enName: "QUALITY ENHANCEMENT", description: "通用画质。", tags: [] },
];

export const AESTHETIC_ENGINE_LIBRARY: LibraryCategoryDef[] = [
  // --- New Soul Blocks ---
  { id: "aes_director_style_lib", name: "实拍导演风格", desc: "Cinema Directing Auteurs.", items: DIRECTOR_STYLE_ITEMS },
  { id: "aes_photo_style_lib", name: "摄影摄像流派", desc: "Photography Schools & Styles.", items: PHOTO_STYLE_ITEMS },
  { id: "aes_art_style_lib", name: "艺术流派", desc: "Historical Art Movements.", items: ART_STYLE_ITEMS },

  // --- SPLIT STYLIZED BLOCKS ---
  { id: "aes_anim_director_lib", name: "动画导演风格", desc: "Animation Directors & Studios.", items: ANIMATION_DIRECTORS_LIB },
  { id: "aes_art_movement_lib", name: "美术/艺术风格", desc: "Art Styles, Games & Illustration.", items: ART_MOVEMENTS_LIB },

  // --- New Fixed Module Libraries (Realism) ---
  { id: "aes_camera_system_lib", name: "摄影机系统", desc: "Camera sensor and format.", items: AES_CAMERA_SYSTEM },
  { id: "aes_lens_series_lib", name: "镜头系列", desc: "Optical characteristics.", items: AES_LENS_SERIES },
  { id: "aes_texture_render_lib", name: "画面质感", desc: "Surface/Render Style.", items: AES_TEXTURE_RENDER },
  { id: "aes_physical_grain_lib", name: "物理颗粒", desc: "Grain & Noise.", items: AES_PHYSICAL_GRAIN },
  { id: "aes_base_tone_lib", name: "显影协议", desc: "Base contrast, saturation and dynamic range.", items: AES_BASE_TONE },
  { id: "aes_color_science_lib", name: "色彩科学", desc: "Film stock or LUT emulation.", items: AES_COLOR_SCIENCE },

  // --- New Fixed Module Libraries (Stylized) ---
  { id: "aes_art_medium_lib", name: "创作介质", desc: "The artistic medium used.", items: AES_ART_MEDIUM },
  { id: "aes_line_quality_lib", name: "线条质量", desc: "Outline style.", items: AES_LINE_QUALITY },
  { id: "aes_canvas_texture_lib", name: "画布质感", desc: "Surface texture.", items: AES_CANVAS_TEXTURE },

  { id: "aes_image_focus_lib", name: "构图类别", desc: "Essential composition archetypes.", items: AES_IMAGE_FOCUS },
  { id: "aes_visual_balance_lib", name: "视觉平衡", desc: "Weight and symmetry.", items: AES_VISUAL_BALANCE },
  { id: "aes_shot_size_lib", name: "景别", desc: "Camera distance.", items: AES_SHOT_SIZE },
  { id: "aes_perspective_lib", name: "透视", desc: "Geometric depth.", items: AES_PERSPECTIVE },
  { id: "aes_angle_lib", name: "拍摄角度", desc: "Camera height & tilt.", items: AES_ANGLE },
  { id: "aes_focal_length_lib", name: "焦段", desc: "Field of view.", items: AES_FOCAL_LENGTH },
  { id: "aes_depth_lib", name: "景深/焦点", desc: "Focus range.", items: AES_DEPTH },
  { id: "aes_shutter_lib", name: "快门", desc: "Motion blur.", items: AES_SHUTTER },
  { id: "aes_lens_fx_lib", name: "光学特效", desc: "Optical imperfections.", items: AES_LENS_FX },
  { id: "aes_optical_format_lib", name: "光学格式", desc: "Aspect ratio.", items: AES_OPTICAL_FORMAT },
  
  { id: "aes_gender_lib", name: "性别气质", desc: "Presentation.", items: AES_GENDER },
  { id: "aes_age_lib", name: "年龄质感", desc: "Time on body.", items: AES_AGE },
  { id: "aes_body_type_lib", name: "身体体态", desc: "Silhouette.", items: AES_BODY_TYPE },
  { id: "aes_ethnicity_lib", name: "现实血统", desc: "Human ethnicities.", items: AES_ETHNICITY },
  { id: "aes_species_lib", name: "幻想种族", desc: "Supernatural races.", items: AES_SPECIES },
  // REMOVED aes_class_lib
  
  { id: "aes_hair_color_lib", name: "发色", desc: "Color.", items: AES_HAIR_COLOR },
  { id: "aes_hair_style_f_lib", name: "发型-女式", desc: "Feminine.", items: AES_HAIR_FEM },
  { id: "aes_hair_style_m_lib", name: "发型-男式", desc: "Masculine.", items: AES_HAIR_MASC },
  { id: "aes_eye_color_lib", name: "瞳色", desc: "Iris color.", items: AES_EYE_COLOR },
  { id: "aes_eye_shape_lib", name: "眼型", desc: "Shape.", items: AES_EYE_SHAPE },
  { id: "aes_eye_fx_lib", name: "眼部特效", desc: "Special pupils.", items: AES_EYE_FX },
  { id: "aes_face_features_lib", name: "面部特征", desc: "Skin details.", items: AES_FACE_FEATURES },
  { id: "aes_expression_lib", name: "面部表情", desc: "Emotional state.", items: AES_EXPRESSION },
  { id: "aes_skin_texture_lib", name: "皮肤质感", desc: "Surface details.", items: AES_SKIN_TEXTURE },
  { id: "aes_body_features_lib", name: "身体特征", desc: "Body details.", items: AES_BODY_FEATURES },
  { id: "aes_occupation_lib", name: "职业身份", desc: "Role.", items: AES_OCCUPATION },
  { id: "aes_persona_lib", name: "潮流人设", desc: "Personas.", items: AES_PERSONA },
  // REMOVED: aes_clothing_lib, aes_prop_held_lib, aes_accessories_lib
  { id: "aes_action_static_lib", name: "静态动作", desc: "Poses.", items: AES_ACTION_STATIC },
  { id: "aes_action_dynamic_lib", name: "动态动作", desc: "Movement.", items: AES_ACTION_DYNAMIC },
  { id: "aes_action_complex_lib", name: "人类行为", desc: "Dramatic.", items: AES_ACTION_COMPLEX },
  { id: "aes_creature_size_lib", name: "体型量级", desc: "Scale.", items: AES_CREATURE_SIZE },
  { id: "aes_creature_class_lib", name: "生物纲目", desc: "Classification.", items: AES_CREATURE_CLASS },
  { id: "aes_creature_element_lib", name: "元素属性", desc: "Affinities.", items: AES_CREATURE_ELEMENT },
  { id: "aes_creature_head_lib", name: "头部特征", desc: "Head details.", items: AES_CREATURE_HEAD },
  { id: "aes_creature_body_lib", name: "身体部件", desc: "Body details.", items: AES_CREATURE_BODY },
  { id: "aes_creature_mood_lib", name: "生物心情", desc: "Mood.", items: AES_CREATURE_MOOD },
  { id: "aes_creature_action_lib", name: "生物行为", desc: "Actions.", items: AES_CREATURE_ACTION },
  { id: "aes_creature_texture_lib", name: "生物质感", desc: "Tactile.", items: AES_CREATURE_TEXTURE },
  // skin_era_lib removed as per request
  { id: "aes_light_mood_lib", name: "光影基调", desc: "Tone.", items: AES_LIGHT_MOOD },
  { id: "aes_light_type_lib", name: "照明类型", desc: "Source.", items: AES_LIGHT_TYPE },
  { id: "aes_scene_real_lib", name: "现实场景", desc: "Physical Env.", items: AES_SCENE_REAL },
  { id: "aes_scene_surreal_lib", name: "超现实场景", desc: "Fantasy Env.", items: AES_SCENE_SURREAL },
  { id: "aes_scene_abstract_lib", name: "抽象场景", desc: "Psychological.", items: AES_SCENE_ABSTRACT },
  // UPDATED LIB MAPPING
  { id: "aes_atmosphere_lib", name: "天气/大气", desc: "Weather & Atmosphere.", items: AES_ATMOSPHERE },
  { id: "aes_particles_lib", name: "粒子", desc: "Suspended Particles.", items: AES_PARTICLES },
  
  { id: "aes_light_direction_lib", name: "光投射方向", desc: "Position.", items: AES_LIGHT_DIRECTION },
  { id: "aes_light_shape_lib", name: "光投影形状", desc: "Texture.", items: AES_LIGHT_SHAPE },
  { id: "aes_color_palette_lib", name: "美术配色", desc: "Palette.", items: AES_COLOR_PALETTE },
  { id: "aes_poster_style_lib", name: "海报风格", desc: "Graphics.", items: AES_POSTER_STYLE },
  { id: "aes_render_real_lib", name: "画质增强 (写实)", desc: "Photorealism Boosters.", items: AES_RENDER_REAL },
  { id: "aes_render_art_lib", name: "画质增强 (美术)", desc: "Art Quality Boosters.", items: AES_RENDER_ART },
  // Keep base render for fallback
  { id: "aes_render_lib", name: "画质增强", desc: "Boosters.", items: [...AES_RENDER_REAL, ...AES_RENDER_ART] }
];
