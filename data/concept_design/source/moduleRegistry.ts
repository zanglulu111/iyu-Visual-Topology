export type ConceptSourceLayer =
  | 'coordinates'
  | 'protocols'
  | 'presets'
  | 'atoms'
  | 'templates';

export type ConceptDataKind =
  | 'hard_coordinate'
  | 'governing_protocol'
  | 'mapping_preset'
  | 'functional_atom'
  | 'template_route';

export type ConceptRandomPolicy =
  | 'manual'
  | 'single'
  | 'multi'
  | 'weighted'
  | 'exclusive'
  | 'template_only';

export type ConceptCompilePolicy =
  | 'hard_boundary'
  | 'governing_context'
  | 'governing_package'
  | 'detail_atom'
  | 'presentation_atom'
  | 'negative_constraint'
  | 'template_contract';

export type ConceptTemplateRoute =
  | 'identity_board'
  | 'portrait'
  | 'turnaround'
  | 'detail_sheet'
  | 'poster'
  | 'cinematic_frame'
  | 'reference_extraction'
  | 'all';

export type ConceptModuleRegistryEntry = {
  id: string;
  name: string;
  nameEn: string;
  layer: ConceptSourceLayer;
  family: string;
  slot: string;
  dataKind: ConceptDataKind;
  role: string;
  randomPolicy: ConceptRandomPolicy;
  compilePolicy: ConceptCompilePolicy;
  templateRoutes: ConceptTemplateRoute[];
  source: 'concept_design' | 'aesthetic' | 'engine_surface' | 'runtime';
  status: 'active' | 'legacy_bridge' | 'background' | 'deprecated';
  notes?: string;
};

const allRoutes: ConceptTemplateRoute[] = ['all'];
const boardRoutes: ConceptTemplateRoute[] = ['identity_board', 'turnaround', 'detail_sheet'];
const visualRoutes: ConceptTemplateRoute[] = ['identity_board', 'portrait', 'turnaround', 'detail_sheet', 'poster', 'cinematic_frame'];

export const CONCEPT_MODULE_REGISTRY: ConceptModuleRegistryEntry[] = [
  {
    id: 'cd_spacetime_coordinate',
    name: '时空坐标',
    nameEn: 'Time-Space Coordinate',
    layer: 'coordinates',
    family: 'spacetime',
    slot: 'coordinate',
    dataKind: 'hard_coordinate',
    role: '精确锁定现实域、空间锚、时间轴、技术边界和文化接口。',
    randomPolicy: 'single',
    compilePolicy: 'hard_boundary',
    templateRoutes: allRoutes,
    source: 'engine_surface',
    status: 'active'
  },
  {
    id: 'cd_space_anchor_exact',
    name: '空间锚点',
    nameEn: 'Space Anchor',
    layer: 'coordinates',
    family: 'spacetime',
    slot: 'space',
    dataKind: 'hard_coordinate',
    role: 'SUR3 精确空间锚，只负责在哪里，不替代身份。',
    randomPolicy: 'single',
    compilePolicy: 'hard_boundary',
    templateRoutes: allRoutes,
    source: 'engine_surface',
    status: 'active'
  },
  {
    id: 'cd_time_anchor_exact',
    name: '时间锚点',
    nameEn: 'Time Anchor',
    layer: 'coordinates',
    family: 'spacetime',
    slot: 'time',
    dataKind: 'hard_coordinate',
    role: 'SUR3 精确年份或时代锚，只负责何时，不替代身份。',
    randomPolicy: 'single',
    compilePolicy: 'hard_boundary',
    templateRoutes: allRoutes,
    source: 'engine_surface',
    status: 'active'
  },
  {
    id: 'cd_field_preset',
    name: '场域预设',
    nameEn: 'Field Preset',
    layer: 'protocols',
    family: 'world_field',
    slot: 'field_protocol',
    dataKind: 'governing_protocol',
    role: '一整套世界母体协议，压缩制度、材料、危险、阶层和环境压力；不是一键填格预设。',
    randomPolicy: 'weighted',
    compilePolicy: 'governing_context',
    templateRoutes: allRoutes,
    source: 'engine_surface',
    status: 'active'
  },
  {
    id: 'cd_field_register',
    name: '世界场域',
    nameEn: 'World Field',
    layer: 'protocols',
    family: 'world_field',
    slot: 'register',
    dataKind: 'governing_protocol',
    role: '选择现实、历史、职业、时尚、战斗、仪式、社会、科幻、奇幻、末世等解释方向。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_context',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'background'
  },
  {
    id: 'cd_field_style_primary',
    name: '主场域风格',
    nameEn: 'Primary Field Style',
    layer: 'protocols',
    family: 'world_field',
    slot: 'primary_field_protocol',
    dataKind: 'governing_protocol',
    role: '场域母类下的具体文化协议，用于把全局场域推向可见细节；不是一键填格预设。',
    randomPolicy: 'single',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'background'
  },
  {
    id: 'cd_field_style_secondary',
    name: '副场域风格',
    nameEn: 'Secondary Field Style',
    layer: 'protocols',
    family: 'world_field',
    slot: 'secondary_field_protocol',
    dataKind: 'governing_protocol',
    role: '第二场域文化协议，用于混合、越界和缝合。',
    randomPolicy: 'single',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'background'
  },
  {
    id: 'cd_style_protocol_primary',
    name: '主造型协议',
    nameEn: 'Primary Form Protocol',
    layer: 'protocols',
    family: 'style_protocol',
    slot: 'primary_protocol',
    dataKind: 'governing_protocol',
    role: '统帅全局的角色 / 主体造型理念，决定符号放在哪里、材料如何组织、冲突如何被转译。',
    randomPolicy: 'single',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_style_protocol_secondary',
    name: '副造型协议',
    nameEn: 'Secondary Form Protocol',
    layer: 'protocols',
    family: 'style_protocol',
    slot: 'secondary_protocol',
    dataKind: 'governing_protocol',
    role: '第二套角色 / 主体造型理念，用来制造可控碰撞，而不是平均拼贴。',
    randomPolicy: 'single',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_fusion_rule',
    name: '世界法则',
    nameEn: 'World Law',
    layer: 'protocols',
    family: 'fusion',
    slot: 'ontology_law',
    dataKind: 'governing_protocol',
    role: '裁决时空坐标、造型协议、人设包和细节零件之间的现实/超现实授权。',
    randomPolicy: 'single',
    compilePolicy: 'hard_boundary',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_subject_kind',
    name: '生成对象',
    nameEn: 'Subject Kind',
    layer: 'protocols',
    family: 'ontology',
    slot: 'object_route',
    dataKind: 'governing_protocol',
    role: '对象本体路由，决定主体是人形还是异种/机械/生命化对象。',
    randomPolicy: 'manual',
    compilePolicy: 'governing_context',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'background'
  },
  {
    id: 'cd_identity_anchor',
    name: '身份锚点',
    nameEn: 'Identity Anchor',
    layer: 'protocols',
    family: 'identity',
    slot: 'identity_anchor',
    dataKind: 'governing_protocol',
    role: '核心人设协议，压缩社会图像、职业功能、文化身份和造型骨架；保留不可被元素耗尽的文化剩余。',
    randomPolicy: 'weighted',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_occupation',
    name: '职业身份',
    nameEn: 'Occupation',
    layer: 'atoms',
    family: 'identity',
    slot: 'occupation',
    dataKind: 'functional_atom',
    role: '岗位、劳动流程、机构权限、工具和职业姿态。和人设包互斥随机，但可手动共存。',
    randomPolicy: 'weighted',
    compilePolicy: 'detail_atom',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_persona',
    name: '人设标签',
    nameEn: 'Persona',
    layer: 'protocols',
    family: 'identity',
    slot: 'persona_protocol',
    dataKind: 'governing_protocol',
    role: '文化身份、人设图像和流行文化协议。随机时不和职业共同抽取；不是一键填格预设。',
    randomPolicy: 'weighted',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_emotional_core',
    name: '情绪核',
    nameEn: 'Emotional Core',
    layer: 'atoms',
    family: 'identity',
    slot: 'inner_pressure',
    dataKind: 'functional_atom',
    role: '驱动姿态、表情和造型压力的内部情绪，不等于外显表情。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'active'
  },
  {
    id: 'cd_world_register',
    name: '世界归属',
    nameEn: 'World Register',
    layer: 'protocols',
    family: 'legacy_world',
    slot: 'world_protocol',
    dataKind: 'governing_protocol',
    role: '旧版本世界归属协议，后续应并入时空坐标和场域协议。',
    randomPolicy: 'single',
    compilePolicy: 'governing_context',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'legacy_bridge'
  },
  {
    id: 'cd_identity_seed',
    name: '身份核心',
    nameEn: 'Identity Core',
    layer: 'protocols',
    family: 'legacy_identity',
    slot: 'identity_protocol',
    dataKind: 'governing_protocol',
    role: '旧版本身份协议，后续应并入身份锚点或人设标签。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'legacy_bridge'
  },
  {
    id: 'cd_negation_logic',
    name: '异化逻辑',
    nameEn: 'Negation Logic',
    layer: 'protocols',
    family: 'ontology',
    slot: 'alteration_logic',
    dataKind: 'governing_protocol',
    role: '旧版本异化生成协议，后续应由 ontologyLevel 和世界法则共同接管。',
    randomPolicy: 'single',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'legacy_bridge'
  },
  {
    id: 'cd_design_translation',
    name: '设计转译',
    nameEn: 'Design Translation',
    layer: 'protocols',
    family: 'translation',
    slot: 'translation_rule',
    dataKind: 'governing_protocol',
    role: '把身份概念转成服装、装备、纹样、剪影、道具和制度标记的中层协议。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: allRoutes,
    source: 'concept_design',
    status: 'legacy_bridge'
  },
  {
    id: 'cd_design_sheet',
    name: '图版格式',
    nameEn: 'Sheet Format',
    layer: 'templates',
    family: 'presentation',
    slot: 'sheet_format',
    dataKind: 'template_route',
    role: '旧版图版展示格式，后续应并入模板路由。',
    randomPolicy: 'template_only',
    compilePolicy: 'template_contract',
    templateRoutes: boardRoutes,
    source: 'concept_design',
    status: 'legacy_bridge'
  },
  {
    id: 'cd_palette',
    name: '配色方案',
    nameEn: 'Palette',
    layer: 'atoms',
    family: 'color',
    slot: 'palette',
    dataKind: 'functional_atom',
    role: '角色资产色彩零件。若色板自身带强风格叙事，可升格为预设包。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'concept_design',
    status: 'background'
  },
  {
    id: 'aes_color_palette',
    name: '美术配色',
    nameEn: 'Color Palette',
    layer: 'atoms',
    family: 'color',
    slot: 'palette',
    dataKind: 'functional_atom',
    role: '当前正式色彩源数据，提供可见色板与 hex codes。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_director_style',
    name: '实拍导演风格',
    nameEn: 'Director Style',
    layer: 'protocols',
    family: 'soul',
    slot: 'photo_auteur',
    dataKind: 'governing_protocol',
    role: '摄影/实拍路线的作者、剧集或导演式美学协议。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_photo_style',
    name: '摄影流派',
    nameEn: 'Photo Style',
    layer: 'protocols',
    family: 'soul',
    slot: 'photo_school',
    dataKind: 'governing_protocol',
    role: '摄影图像传统、流派和拍摄审美。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_art_style',
    name: '绘画风格',
    nameEn: 'Art Style',
    layer: 'protocols',
    family: 'soul',
    slot: 'paint_school',
    dataKind: 'governing_protocol',
    role: '绘画/插画路线的作者、画派和图像风格协议。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_anim_director',
    name: '动画导演',
    nameEn: 'Animation Director',
    layer: 'protocols',
    family: 'soul',
    slot: 'animation_auteur',
    dataKind: 'governing_protocol',
    role: '动画路线的作者、演出和角色图像协议。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_art_movement',
    name: '艺术运动',
    nameEn: 'Art Movement',
    layer: 'protocols',
    family: 'soul',
    slot: 'art_movement',
    dataKind: 'governing_protocol',
    role: '更抽象的艺术史运动、图像秩序和形式协议。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_poster_style',
    name: '平面设计风格',
    nameEn: 'Poster Style',
    layer: 'protocols',
    family: 'soul',
    slot: 'graphic_system',
    dataKind: 'governing_protocol',
    role: '版式、平面设计和视觉系统协议，可影响身份板、海报、资料页。',
    randomPolicy: 'multi',
    compilePolicy: 'governing_package',
    templateRoutes: ['identity_board', 'detail_sheet', 'poster'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_camera_system',
    name: '机身系统',
    nameEn: 'Camera System',
    layer: 'atoms',
    family: 'quality',
    slot: 'camera_body',
    dataKind: 'functional_atom',
    role: '摄影媒介的机身/传感器质感零件，只在摄影或实拍模板里强调用。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'cinematic_frame', 'reference_extraction'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_lens_series',
    name: '镜头系列',
    nameEn: 'Lens Series',
    layer: 'atoms',
    family: 'quality',
    slot: 'lens_system',
    dataKind: 'functional_atom',
    role: '摄影镜头风味零件，可由模板路由决定是否启用。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_optical_format',
    name: '光学规格',
    nameEn: 'Optical Format',
    layer: 'atoms',
    family: 'quality',
    slot: 'optical_format',
    dataKind: 'functional_atom',
    role: '胶片、画幅、传感器和成像规格。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_texture_render',
    name: '质感渲染',
    nameEn: 'Texture Render',
    layer: 'atoms',
    family: 'quality',
    slot: 'texture_render',
    dataKind: 'functional_atom',
    role: '表面质感和渲染触感，连接物理媒介与可见材料。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_physical_grain',
    name: '物理颗粒',
    nameEn: 'Physical Grain',
    layer: 'atoms',
    family: 'quality',
    slot: 'grain',
    dataKind: 'functional_atom',
    role: '胶片、纸面、噪点、扫描、颗粒与物理缺陷。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_base_tone',
    name: '底片基调',
    nameEn: 'Base Tone',
    layer: 'atoms',
    family: 'quality',
    slot: 'base_tone',
    dataKind: 'functional_atom',
    role: '底片、冲印、调色、明暗和影像基底。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_color_science',
    name: '色彩科学',
    nameEn: 'Color Science',
    layer: 'atoms',
    family: 'quality',
    slot: 'color_science',
    dataKind: 'functional_atom',
    role: '影像色彩响应、胶片色彩、调色系统和工业色彩倾向。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_art_medium',
    name: '艺术媒介',
    nameEn: 'Art Medium',
    layer: 'protocols',
    family: 'quality',
    slot: 'art_medium',
    dataKind: 'governing_protocol',
    role: '绘画、版画、赛璐璐、水彩等物理艺术媒介，可与物理媒介路由联动。',
    randomPolicy: 'single',
    compilePolicy: 'governing_context',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_line_quality',
    name: '线条质量',
    nameEn: 'Line Quality',
    layer: 'atoms',
    family: 'quality',
    slot: 'line',
    dataKind: 'functional_atom',
    role: '线条粗细、边缘、勾线和风格化绘制零件。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_canvas_texture',
    name: '画布质感',
    nameEn: 'Canvas Texture',
    layer: 'atoms',
    family: 'quality',
    slot: 'canvas',
    dataKind: 'functional_atom',
    role: '纸面、网点、画布、扫描和绘画表面零件。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_image_focus',
    name: '构图类别',
    nameEn: 'Image Category',
    layer: 'templates',
    family: 'eye',
    slot: 'image_focus',
    dataKind: 'template_route',
    role: '图像任务类型：肖像、身份板、场景、静物等。后续应由模板路由接管。',
    randomPolicy: 'template_only',
    compilePolicy: 'template_contract',
    templateRoutes: allRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_shot_size',
    name: '景别',
    nameEn: 'Shot Size',
    layer: 'atoms',
    family: 'eye',
    slot: 'shot_size',
    dataKind: 'functional_atom',
    role: '观看距离、全身、半身、近景等构图零件。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_visual_balance',
    name: '视觉平衡',
    nameEn: 'Visual Balance',
    layer: 'atoms',
    family: 'eye',
    slot: 'balance',
    dataKind: 'functional_atom',
    role: '重心、对称、留白、排布和视觉秩序。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_perspective',
    name: '透视',
    nameEn: 'Perspective',
    layer: 'atoms',
    family: 'eye',
    slot: 'perspective',
    dataKind: 'functional_atom',
    role: '空间几何、消失点、正交/透视观看方式。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_angle',
    name: '拍摄角度',
    nameEn: 'Camera Angle',
    layer: 'atoms',
    family: 'eye',
    slot: 'angle',
    dataKind: 'functional_atom',
    role: '观看角度和主体权力关系；身份板模板中应受限使用。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_focal_length',
    name: '焦段',
    nameEn: 'Focal Length',
    layer: 'atoms',
    family: 'eye',
    slot: 'focal_length',
    dataKind: 'functional_atom',
    role: '摄影/镜头模板中的视野和压缩关系；非摄影模板可忽略。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: ['portrait', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_depth',
    name: '景深/焦点',
    nameEn: 'Depth of Field',
    layer: 'atoms',
    family: 'eye',
    slot: 'depth',
    dataKind: 'functional_atom',
    role: '焦点层级、虚实和背景分离。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: ['portrait', 'cinematic_frame', 'poster'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_shutter',
    name: '快门',
    nameEn: 'Shutter',
    layer: 'atoms',
    family: 'eye',
    slot: 'motion_capture',
    dataKind: 'functional_atom',
    role: '动作凝固、拖影和运动捕捉方式。',
    randomPolicy: 'single',
    compilePolicy: 'presentation_atom',
    templateRoutes: ['cinematic_frame', 'poster'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_lens_fx',
    name: '光学特效',
    nameEn: 'Optical FX',
    layer: 'atoms',
    family: 'eye',
    slot: 'optical_fx',
    dataKind: 'functional_atom',
    role: '滤镜、眩光、暗角、散射和物理成像瑕疵。',
    randomPolicy: 'multi',
    compilePolicy: 'presentation_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_scene_real',
    name: '现实场景',
    nameEn: 'Real Scene',
    layer: 'protocols',
    family: 'stage',
    slot: 'real_scene_protocol',
    dataKind: 'governing_protocol',
    role: '现实场景协议。当前人物概念设计可保留为环境/模板扩展，不应抢身份主体。',
    randomPolicy: 'single',
    compilePolicy: 'governing_context',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_scene_surreal',
    name: '超现实场景',
    nameEn: 'Surreal Scene',
    layer: 'protocols',
    family: 'stage',
    slot: 'surreal_scene_protocol',
    dataKind: 'governing_protocol',
    role: '超现实场景协议。必须受世界法则和模板路由约束。',
    randomPolicy: 'single',
    compilePolicy: 'governing_context',
    templateRoutes: ['poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_scene_abstract',
    name: '抽象场景',
    nameEn: 'Abstract Scene',
    layer: 'protocols',
    family: 'stage',
    slot: 'abstract_scene_protocol',
    dataKind: 'governing_protocol',
    role: '心理或抽象空间协议，主要供海报、实验图、情绪图调用。',
    randomPolicy: 'single',
    compilePolicy: 'governing_context',
    templateRoutes: ['poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_atmosphere',
    name: '天气/大气',
    nameEn: 'Atmosphere',
    layer: 'atoms',
    family: 'stage',
    slot: 'atmosphere',
    dataKind: 'functional_atom',
    role: '大气、天气、湿度和空间空气质感。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_particles',
    name: '粒子',
    nameEn: 'Particles',
    layer: 'atoms',
    family: 'stage',
    slot: 'particles',
    dataKind: 'functional_atom',
    role: '悬浮微粒、粉尘、雪、火星等局部可见环境零件。',
    randomPolicy: 'multi',
    compilePolicy: 'detail_atom',
    templateRoutes: ['poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_light_mood',
    name: '光影基调',
    nameEn: 'Lighting Mood',
    layer: 'atoms',
    family: 'light',
    slot: 'mood',
    dataKind: 'functional_atom',
    role: '明暗基调和情绪照明。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_light_type',
    name: '照明类型',
    nameEn: 'Lighting Type',
    layer: 'atoms',
    family: 'light',
    slot: 'source_type',
    dataKind: 'functional_atom',
    role: '物理光源类型。',
    randomPolicy: 'multi',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_light_direction',
    name: '光投射方向',
    nameEn: 'Light Direction',
    layer: 'atoms',
    family: 'light',
    slot: 'direction',
    dataKind: 'functional_atom',
    role: '光源坐标和投射方向。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_light_shape',
    name: '光投影形状',
    nameEn: 'Light Shape',
    layer: 'atoms',
    family: 'light',
    slot: 'shape',
    dataKind: 'functional_atom',
    role: '窗格、叶影、栅格、投影纹理等光形状。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: ['portrait', 'poster', 'cinematic_frame'],
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_render_real',
    name: '画质增强(写实)',
    nameEn: 'Quality Real',
    layer: 'atoms',
    family: 'render',
    slot: 'real_quality',
    dataKind: 'functional_atom',
    role: '摄影/写实路线的画质、解析力、细节和真实材料增强。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  },
  {
    id: 'aes_render_art',
    name: '画质增强(美术)',
    nameEn: 'Quality Art',
    layer: 'atoms',
    family: 'render',
    slot: 'art_quality',
    dataKind: 'functional_atom',
    role: '绘画/动画/美术路线的完成度、边缘、材质和风格增强。',
    randomPolicy: 'single',
    compilePolicy: 'detail_atom',
    templateRoutes: visualRoutes,
    source: 'aesthetic',
    status: 'active'
  }
];

const atom = (
  id: string,
  name: string,
  nameEn: string,
  family: string,
  slot: string,
  role: string,
  randomPolicy: ConceptRandomPolicy = 'single'
): ConceptModuleRegistryEntry => ({
  id,
  name,
  nameEn,
  layer: 'atoms',
  family,
  slot,
  dataKind: 'functional_atom',
  role,
  randomPolicy,
  compilePolicy: 'detail_atom',
  templateRoutes: allRoutes,
  source: 'concept_design',
  status: 'active'
});

export const CONCEPT_ATOM_MODULE_REGISTRY: ConceptModuleRegistryEntry[] = [
  atom('cd_age', '年龄质感', 'Age', 'body_identity', 'age', '年龄感和时间痕迹，是低风险身体零件。'),
  atom('cd_gender', '性别气质', 'Gender Aura', 'body_identity', 'gender_aura', '身体呈现气质，不承担完整人设。'),
  atom('cd_ethnicity', '现实血统', 'Real Heritage', 'body_identity', 'heritage', '骨相、肤色、发质等实在界身体来源。'),
  atom('cd_social_aesthetic', '国家/社会审美接口', 'Social Aesthetic Interface', 'body_identity', 'social_aesthetic', '国家、媒体、阶层、平台和妆发意识形态接口。'),
  atom('cd_species', '幻想种族', 'Species', 'ontology', 'species', '非现实种族零件，需受 ontologyLevel 和世界法则过滤。'),
  atom('cd_body_type', '轮廓体态', 'Silhouette', 'body', 'silhouette', '第一眼身体轮廓与美感体态。', 'multi'),
  atom('cd_hair_color', '发色', 'Hair Color', 'face_hair', 'hair_color', '发色和毛发色彩。', 'multi'),
  atom('cd_hair_style_f', '发型(女式)', 'Hairstyle Fem', 'face_hair', 'hair_fem', '女性化或长发造型语言。'),
  atom('cd_hair_style_m', '发型(男式)', 'Hairstyle Masc', 'face_hair', 'hair_masc', '男性化、短发、剃发和胡发相关造型。'),
  atom('cd_beard_style', '胡子', 'Beard', 'face_hair', 'beard', '胡须、小胡子、络腮胡和面部毛发。'),
  atom('cd_eye_color', '瞳色', 'Eye Color', 'eyes', 'eye_color', '虹膜颜色。'),
  atom('cd_eye_shape', '眼型', 'Eye Shape', 'eyes', 'eye_shape', '眼型、眼神和眼部结构。'),
  atom('cd_eye_fx', '眼部异变', 'Eye Mutation', 'eyes', 'eye_fx', '特殊瞳孔、机械眼、异化眼等高风险眼部零件。'),
  atom('cd_face_features', '面部特征', 'Face Features', 'face', 'face_features', '骨相、鼻、嘴、颧骨、疤痕等可识别面部细节。', 'multi'),
  atom('cd_makeup_style', '妆容修饰', 'Makeup', 'face', 'makeup', '脸部妆容、彩绘、修饰和符号化面部系统。', 'multi'),
  atom('cd_expression', '面部表情', 'Expression', 'face', 'expression', '外显表情，是对镜头/观看/他者的即时回应。'),
  atom('cd_skin_texture', '皮肤本体', 'Skin Material', 'skin_body', 'skin_material', '皮肤自身质地、年龄痕迹、色素和越界材质。', 'multi'),
  atom('cd_surface_state', '表面附着', 'Surface State', 'skin_body', 'surface_state', '汗水、血迹、灰尘、油污、雨水等附着状态。', 'multi'),
  atom('cd_body_features', '异形结构', 'Anomalous Structure', 'skin_body', 'anomalous_structure', '三头六臂、双头、非连续身体等类人越界骨架。', 'multi'),
  atom('cd_body_markings', '身体标记', 'Body Markings', 'skin_body', 'body_markings', '纹身、烙印、刻印、仪式彩绘和身份痕迹。', 'multi'),
  atom('cd_body_damage', '身体损伤', 'Body Damage', 'skin_body', 'body_damage', '旧伤、新伤、缺损和医疗修复。', 'multi'),
  atom('cd_body_modification', '身体改造', 'Body Modification', 'skin_body', 'body_modification', '义肢、义体、生物改造、共生感染等高风险零件。', 'multi'),
  atom('cd_costume_logic', '服装执行逻辑', 'Costume Execution', 'costume', 'costume_execution', '控制服装如何包裹、遮蔽、负载、制服化、仪式化或暴露。', 'multi'),
  atom('cd_costume_system', '服装系统', 'Costume System', 'costume', 'costume_system', '服装子系统的组织方式，负责让身份、时代和风格穿在身体上。'),
  atom('cd_material_evidence', '材料证据', 'Material Evidence', 'material', 'material_evidence', '材料、工艺、触感和世界规则留下的证据。', 'multi'),
  atom('cd_surface_material', '表面材料', 'Surface Material', 'material', 'surface_material', '概念设计里的材料系统。', 'multi'),
  atom('cd_wear_trace', '损耗痕迹', 'Wear Trace', 'material', 'wear_trace', '磨损、修补、污渍、战损或维护痕迹。'),
  atom('cd_prop_anchor', '道具锚点', 'Prop Anchor', 'props_symbols', 'prop_anchor', '解释角色功能的关键道具或携带物。'),
  atom('cd_symbol_system', '符号系统', 'Symbol System', 'props_symbols', 'symbol_system', '服装、道具、机构、阵营、媒体和世界制度里的外部可读标识。'),
  atom('cd_static_pose', '姿态语言', 'Pose Language', 'action', 'static_pose', '概念展示姿态。'),
  atom('cd_dynamic_action', '动态动作', 'Dynamic Action', 'action', 'dynamic_action', '运动、位移、冲击或身体动势。'),
  atom('cd_human_behavior', '人类行为', 'Human Behavior', 'action', 'human_behavior', '经典、可读、低噪声的人类行为动作。'),
  atom('cd_creature_size', '异种量级', 'Creature Scale', 'creature', 'size', '异种生物尺度。'),
  atom('cd_creature_class', '异种纲目', 'Creature Taxonomy', 'creature', 'taxonomy', '异种生物分类。', 'multi'),
  atom('cd_creature_element', '元素属性', 'Elemental Trait', 'creature', 'element', '能量或物质属性。'),
  atom('cd_creature_head', '头部结构', 'Head Structure', 'creature', 'head', '异种头部结构。', 'multi'),
  atom('cd_creature_body', '身体部件', 'Body Parts', 'creature', 'body_parts', '异种肢体和身体部件。', 'multi'),
  atom('cd_creature_mood', '异种情绪', 'Creature Mood', 'creature', 'mood', '非人情绪状态。'),
  atom('cd_creature_action', '异种行为', 'Creature Behavior', 'creature', 'behavior', '本能动作或展示行为。'),
  atom('cd_creature_texture', '异种材质', 'Creature Material', 'creature', 'texture', '异种表皮和触感。', 'multi')
];

const mediaBackground = (
  id: string,
  name: string,
  nameEn: string,
  family: string,
  slot: string
): ConceptModuleRegistryEntry => ({
  id,
  name,
  nameEn,
  layer: 'protocols',
  family,
  slot,
  dataKind: 'governing_protocol',
  role: '早期概念设计媒介路由数据，当前已退到后台，后续应迁移并合并进魂/质/眼源数据。',
  randomPolicy: 'template_only',
  compilePolicy: 'governing_context',
  templateRoutes: visualRoutes,
  source: 'concept_design',
  status: 'background'
});

export const CONCEPT_BACKGROUND_MEDIA_MODULE_REGISTRY: ConceptModuleRegistryEntry[] = [
  mediaBackground('cd_media_photo_soul', '摄影魂', 'Photo Soul', 'media_photo', 'soul'),
  mediaBackground('cd_media_photo_quality', '摄影 L1.1 质', 'Photo Quality', 'media_photo', 'quality'),
  mediaBackground('cd_media_photo_eye', '摄影 L1.2 眼', 'Photo Eye', 'media_photo', 'eye'),
  mediaBackground('cd_media_photo_craft', '摄影工艺', 'Photo Craft', 'media_photo', 'craft'),
  mediaBackground('cd_media_photo_format', '摄影展示格式', 'Photo Format', 'media_photo', 'format'),
  mediaBackground('cd_media_paint_soul', '绘画魂', 'Paint Soul', 'media_paint', 'soul'),
  mediaBackground('cd_media_paint_quality', '绘画 L1.1 质', 'Paint Quality', 'media_paint', 'quality'),
  mediaBackground('cd_media_paint_eye', '绘画 L1.2 眼', 'Paint Eye', 'media_paint', 'eye'),
  mediaBackground('cd_media_paint_craft', '绘画工艺', 'Paint Craft', 'media_paint', 'craft'),
  mediaBackground('cd_media_paint_format', '绘画展示格式', 'Paint Format', 'media_paint', 'format'),
  mediaBackground('cd_media_cgi_soul', 'CGI魂', 'CGI Soul', 'media_cgi', 'soul'),
  mediaBackground('cd_media_cgi_quality', 'CGI L1.1 质', 'CGI Quality', 'media_cgi', 'quality'),
  mediaBackground('cd_media_cgi_eye', 'CGI L1.2 眼', 'CGI Eye', 'media_cgi', 'eye'),
  mediaBackground('cd_media_cgi_craft', 'CGI工艺', 'CGI Craft', 'media_cgi', 'craft'),
  mediaBackground('cd_media_cgi_format', 'CGI展示格式', 'CGI Format', 'media_cgi', 'format'),
  mediaBackground('cd_media_tangible_soul', '实体魂', 'Tangible Soul', 'media_tangible', 'soul'),
  mediaBackground('cd_media_tangible_quality', '实体 L1.1 质', 'Tangible Quality', 'media_tangible', 'quality'),
  mediaBackground('cd_media_tangible_eye', '实体 L1.2 眼', 'Tangible Eye', 'media_tangible', 'eye'),
  mediaBackground('cd_media_tangible_craft', '实体工艺', 'Tangible Craft', 'media_tangible', 'craft'),
  mediaBackground('cd_media_tangible_format', '实体展示格式', 'Tangible Format', 'media_tangible', 'format')
];

export const CONCEPT_MAPPING_PRESET_REGISTRY: ConceptModuleRegistryEntry[] = [];

export const FULL_CONCEPT_MODULE_REGISTRY: ConceptModuleRegistryEntry[] = [
  ...CONCEPT_MODULE_REGISTRY,
  ...CONCEPT_ATOM_MODULE_REGISTRY,
  ...CONCEPT_BACKGROUND_MEDIA_MODULE_REGISTRY,
  ...CONCEPT_MAPPING_PRESET_REGISTRY
];

export const getConceptModuleRegistryEntry = (id: string) =>
  FULL_CONCEPT_MODULE_REGISTRY.find(entry => entry.id === id);

export const getConceptModuleRegistryByLayer = (layer: ConceptSourceLayer) =>
  FULL_CONCEPT_MODULE_REGISTRY.filter(entry => entry.layer === layer);

export const getConceptModuleRegistryByFamily = (family: string) =>
  FULL_CONCEPT_MODULE_REGISTRY.filter(entry => entry.family === family);
