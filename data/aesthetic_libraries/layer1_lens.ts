import { FramingProfile, LibraryItemDef } from '../../types';

// =============================================================================
// LAYER 1.2: EYE / FRAMING DETAILS
// Second-row, orthogonal viewing controls. These are not shooting templates.
// =============================================================================

type EyeItemSeed = {
  id: string;
  name: string;
  group?: string;
  def: string;
  defEn?: string;
  tags?: string[];
  framingProfile?: Partial<FramingProfile>;
};

const mergeUnique = <T extends string>(base: readonly T[], extra: readonly T[] = []): T[] => Array.from(new Set([...base, ...extra]));

const buildFramingProfile = (seed: EyeItemSeed): FramingProfile => {
  const tags = seed.tags || [];
  const has = (...keys: string[]) => keys.some(key => seed.id.includes(key) || tags.includes(key));

  const goals: FramingProfile['goals'] = mergeUnique<FramingProfile['goals'][number]>(
    has('face', 'portrait', 'upper_body', 'mcu', 'cu', '85mm', 'bokeh', 'shallow') ? ['portrait'] : [],
    [
      ...(has('full_body', 'subject', 'single', 'center', 'eye_level', '50mm', 'medium') ? ['subject' as const] : []),
      ...(has('environment', 'space', 'pressure', 'wide', 'one_point', 'two_point', 'three_point', 'atmosphere', 'aerial', 'deep_focus') ? ['space' as const] : []),
      ...(has('action', 'motion', 'fast', 'slow', 'drag', 'strobe', 'foreshortening', 'lead_room', 'diagonal') ? ['action' as const] : []),
      ...(has('fashion', 'negative_space', 'material', '135mm', 'diffusion', 'prism', 'star') ? ['fashion' as const] : []),
      ...(has('documentary', 'street', '35mm', 'standard', 'left', 'right') ? ['documentary' as const] : []),
      ...(has('object', 'prop', 'macro', 'top_down', '100mm') ? ['object' as const] : []),
      ...(has('abstract', 'pattern', 'chaos', 'maximalist', 'fisheye', 'curvilinear', 'kaleidoscope', 'fractal', 'anaglyph', 'infrared', 'tilt_shift') ? ['abstract' as const] : [])
    ]
  );

  const distance: FramingProfile['distance'] = has('macro', '100mm') ? 'macro'
    : has('ecu', 'cu', 'close') ? 'close'
    : has('mcu', 'ms', 'cowboy', 'medium', '50mm', '85mm') ? 'medium'
    : has('fs', 'full_body') ? 'full'
    : has('xls', 'planetary', 'aerial') ? 'extreme_wide'
    : has('wide', '35mm', '24mm', '14mm') ? 'wide'
    : 'none';

  const distortion: FramingProfile['distortion'] = has('fisheye', 'curvilinear', 'anaglyph') ? 'extreme'
    : has('ultra_wide', 'worm', 'dutch', 'forced', 'tilt_shift', 'fractal', 'kaleido') ? 'strong'
    : has('wide', 'low', 'high', 'foreshortening', 'prism', 'color_shift', 'streak') ? 'mild'
    : 'none';

  const motion: FramingProfile['motion'] = has('long', 'drag') ? 'blurred'
    : has('strobe', 'fractal', 'anaglyph') ? 'experimental'
    : has('fast') ? 'fast'
    : has('slow', 'action', 'motion') ? 'natural'
    : 'still';

  const opticalRisk: FramingProfile['opticalRisk'] = has('fisheye', 'anaglyph', 'kaleido', 'fractal', 'infrared', 'tilt_shift', 'double_exposure') ? 'high'
    : has('prism', 'flare', 'streak', 'star', 'burn', 'leak', 'scratch', 'smudge', 'smoke', 'mist', 'bloom', 'halo', 'color_shift', 'gel') ? 'medium'
    : has('diffusion', 'velvet', 'low_contrast') ? 'low'
    : 'none';

  const multiSubject = has('two_shot', 'group');
  const subjectReadability: FramingProfile['subjectReadability'] = (
    has('planetary', 'xls', 'abstract', 'chaos', 'maximalist', 'long_exposure')
    || distortion === 'extreme'
    || opticalRisk === 'high'
  ) ? 'low'
    : (
      has('macro', 'ecu', 'razor', 'short_side', 'foreground_blur')
      || distortion === 'strong'
      || opticalRisk === 'medium'
    ) ? 'medium'
    : 'high';

  return {
    goals: goals.length > 0 ? goals : ['subject'],
    distance,
    subjectReadability,
    distortion,
    motion,
    opticalRisk,
    multiSubject,
    ...(seed.framingProfile || {})
  };
};

const eye = (seed: EyeItemSeed): LibraryItemDef => ({
  id: seed.id,
  name: seed.name,
  group: seed.group,
  def: seed.def,
  defEn: seed.defEn,
  ontologyLevel: 1,
  risk: 'clean',
  affects: ['compositionScene', 'style', 'actionMoment'],
  controls: ['framing detail', 'viewing geometry', 'subject readability'],
  forbids: ['replacing shooting protocol preset', 'replacing subject identity', 'overriding scene content'],
  absorptionRule: '取景细项只控制观看距离、重心、角度、透视、焦点、运动捕捉和光学表面；不得替代拍摄协议预设、主体身份、正式场域或行动事件。',
  framingProfile: buildFramingProfile(seed),
  tags: ['framing_detail', ...(seed.tags || [])]
});

// --- 0. 画面焦点 (IMAGE FOCUS) ---
export const AES_IMAGE_FOCUS: LibraryItemDef[] = [
  eye({ id: 'focus_face', name: '面部焦点 (Face Focus)', group: '人物焦点', def: '画面第一阅读落在脸、眼神和表情上，身体和环境退为辅助。适合肖像、情绪、身份确认。边界：不要把服装、场景或道具堆到抢脸。', tags: ['portrait', 'face'] }),
  eye({ id: 'focus_upper_body', name: '上半身焦点 (Upper-Body Focus)', group: '人物焦点', def: '脸、肩、胸腔、手臂和上衣结构共同承担识别。适合半身肖像、封面、职业人物。边界：下半身不应成为主要信息。', tags: ['portrait', 'upper_body'] }),
  eye({ id: 'focus_full_body', name: '全身轮廓焦点 (Full-Body Silhouette)', group: '人物焦点', def: '画面重点是完整身体比例、站姿、服装轮廓和整体造型。适合角色设定、时尚、动作前姿态。边界：脸部细节可以次要，但不能失去识别。', tags: ['full_body', 'silhouette'] }),
  eye({ id: 'focus_body_detail', name: '身体局部证据 (Body Detail Evidence)', group: '细节焦点', def: '重点落在手、背、腿、伤痕、纹样、皮肤材质或穿戴接口等局部证据。适合 C10 设计证据。边界：局部必须能回连整体主体。', tags: ['detail', 'body'] }),
  eye({ id: 'focus_prop', name: '道具焦点 (Prop Focus)', group: '细节焦点', def: '主体和关键物件共同构成画面重心，物件解释功能、身份或事件。边界：道具不能替代主体，除非目标本身是物件图。', tags: ['prop', 'object'] }),
  eye({ id: 'focus_material', name: '材质焦点 (Material Focus)', group: '细节焦点', def: '画面强调织物、金属、皮革、玻璃、湿面、粉尘或表面损耗等触感证据。边界：材质描述不能把构图变成无主体纹理图。', tags: ['material', 'texture'] }),
  eye({ id: 'focus_environmental', name: '环境人物焦点 (Environmental Subject)', group: '空间焦点', def: '人物仍是主角，但环境提供职业、阶层、时代、危险或生活状态。适合完整角色画面。边界：环境不能吞掉人物第一识别。', tags: ['environment', 'subject'] }),
  eye({ id: 'focus_scene_pressure', name: '空间压力焦点 (Spatial Pressure)', group: '空间焦点', def: '空间尺度、建筑体量、地貌或场域秩序压向主体，强调人物与世界的关系。边界：不能变成纯风景或空场景。', tags: ['space', 'pressure'] }),
  eye({ id: 'focus_action', name: '动作瞬间焦点 (Action Moment)', group: '事件焦点', def: '重点落在一个可读动作、位移、冲击、转身、抓握或准备动作。边界：动作必须清楚，不要用模糊掩盖主体。', tags: ['action', 'moment'] }),
  eye({ id: 'focus_relation', name: '关系焦点 (Relational Focus)', group: '事件焦点', def: '主体与另一个人、物、阴影、视线、门槛或制度符号形成关系。边界：关系要明确，不要变成多元素平均罗列。', tags: ['relation', 'composition'] }),
  eye({ id: 'focus_pattern', name: '图案秩序焦点 (Pattern Order)', group: '形式焦点', def: '画面重心落在重复、网格、几何、对称或装饰节奏上，主体被秩序组织。边界：形式感必须服务主体，不要让主体消失。', tags: ['pattern', 'order'] }),
  eye({ id: 'focus_abstract', name: '抽象形式焦点 (Abstract Form)', group: '形式焦点', def: '画面优先传达形状、色块、轮廓、负空间或心理形式。边界：除非目标是抽象图，否则仍要保留主体可读性。', tags: ['abstract', 'form'] })
];

// --- 1. 景别 (SHOT SIZE) ---
export const AES_SHOT_SIZE: LibraryItemDef[] = [
  eye({ id: 'shot_macro', name: '微距特写 (Macro)', def: '极近距离观察局部材料、纹理、皮肤、眼睛、手指或物件边缘。边界：必须说明局部与整体主体的关系。', tags: ['shot_size', 'macro'] }),
  eye({ id: 'shot_ecu', name: '极特写 (Extreme Close-Up)', def: '只容纳脸部局部、眼睛、嘴、手或关键道具，压迫感强。边界：不要裁到无法识别主体。', tags: ['shot_size', 'close'] }),
  eye({ id: 'shot_cu', name: '特写 (Close-Up)', def: '脸或关键物件占画面主导，背景只提供少量氛围。适合情绪和证据。边界：服装全貌不会完整展示。', tags: ['shot_size', 'close'] }),
  eye({ id: 'shot_mcu', name: '中特写 (Medium Close-Up)', def: '头部到胸口或肩部，保留脸、手势、上衣和少量场景。适合肖像、封面和对话感画面。', tags: ['shot_size', 'portrait'] }),
  eye({ id: 'shot_ms', name: '中景 (Medium Shot)', def: '腰部或大腿以上，主体动作、服装结构和环境关系同时可读。适合完整角色画面。', tags: ['shot_size', 'medium'] }),
  eye({ id: 'shot_cowboy', name: '牛仔景 (Cowboy Shot)', def: '从头到大腿或膝上，保留手部、腰部道具、武器和站姿张力。适合行动前一刻。', tags: ['shot_size', 'cowboy'] }),
  eye({ id: 'shot_fs', name: '全身景 (Full Shot)', def: '完整身体进入画面，强调比例、姿态、服装轮廓和脚下接地。边界：背景不要过度复杂。', tags: ['shot_size', 'full_body'] }),
  eye({ id: 'shot_ws', name: '远景 (Wide Shot)', def: '主体与场景共同构图，人物略小但动作和位置清楚。适合场域压力和空间关系。', tags: ['shot_size', 'wide'] }),
  eye({ id: 'shot_xls', name: '极远景 (Extreme Wide Shot)', def: '主体很小，空间尺度成为主要信息。适合史诗、孤立、建立场景。边界：若需要角色细节则不要使用。', tags: ['shot_size', 'wide'] }),
  eye({ id: 'shot_planetary', name: '超尺度远景 (Planetary Scale)', def: '视角拉到城市、地貌、舰队、巨构或天体尺度。边界：仅用于场景/史诗目标，不适合作为普通人物主图。', tags: ['shot_size', 'scale'] })
];

// --- 2. 视觉平衡 (VISUAL BALANCE) ---
export const AES_VISUAL_BALANCE: LibraryItemDef[] = [
  eye({ id: 'bal_center', name: '中心锁定 (Centered)', def: '主体稳定压在画面中心，识别强、仪式感强。边界：避免僵硬证件照感。', tags: ['balance', 'center'] }),
  eye({ id: 'bal_left', name: '左侧重心 (Left Weighted)', def: '主体或主视觉落在左侧，右侧留给环境、视线方向或压力来源。边界：右侧不能空得无意义。', tags: ['balance', 'left'] }),
  eye({ id: 'bal_right', name: '右侧重心 (Right Weighted)', def: '主体或主视觉落在右侧，左侧承担进入方向、背景信息或对照。边界：偏置必须有阅读理由。', tags: ['balance', 'right'] }),
  eye({ id: 'bal_thirds', name: '三分法 (Rule of Thirds)', def: '主体放在三分线或交点，画面自然、稳定、易读。适合多数摄影和电影画面。', tags: ['balance', 'thirds'] }),
  eye({ id: 'bal_sym', name: '轴线对称 (Axis Symmetry)', def: '左右或上下高度对称，制造庄严、制度、宗教或冷静控制感。边界：避免空洞装饰化。', tags: ['balance', 'symmetry'] }),
  eye({ id: 'bal_diag', name: '对角线张力 (Diagonal Tension)', def: '身体、道路、光束或空间线沿对角线推进，让画面有动作和方向。边界：主轴要清楚。', tags: ['balance', 'diagonal'] }),
  eye({ id: 'bal_tri', name: '三角稳定 (Triangular Structure)', def: '主体、道具和环境形成三角形支撑，稳定但有内在张力。适合多人、物件和权力关系。', tags: ['balance', 'triangle'] }),
  eye({ id: 'bal_frame', name: '框中框 (Frame Within Frame)', def: '门、窗、镜、屏幕、前景结构套住主体，强调被观看或被限定。边界：框架不能切断关键身体。', tags: ['balance', 'frame'] }),
  eye({ id: 'bal_lead', name: '视线留白 (Lead Room)', def: '在主体视线或运动方向前方留空间，让画面有期待和方向。边界：留白要指向事件。', tags: ['balance', 'lead_room'] }),
  eye({ id: 'bal_short', name: '短边压迫 (Short-Side Pressure)', def: '主体面向较短一侧，制造不安、逆势、被堵住或心理压迫。边界：不要像裁切失误。', tags: ['balance', 'short_side'] }),
  eye({ id: 'bal_neg_min', name: '少量负空间 (Minimal Negative Space)', def: '主体占比高，空白只提供呼吸和轮廓。适合紧凑肖像和物件展示。', tags: ['balance', 'negative_space'] }),
  eye({ id: 'bal_neg_bal', name: '平衡负空间 (Balanced Negative Space)', def: '主体和空白形成清楚比例，既保留设计感又不削弱主体。适合封面、海报和高级广告。', tags: ['balance', 'negative_space'] }),
  eye({ id: 'bal_neg_over', name: '巨幅负空间 (Oversized Negative Space)', def: '大面积空白压低主体，制造孤独、奢侈、神秘或标题空间。边界：空白必须有构图意图。', tags: ['balance', 'negative_space'] }),
  eye({ id: 'bal_asym', name: '不对称平衡 (Asymmetrical Balance)', def: '用大小、明暗、颜色或位置让不对称画面仍保持稳定。边界：避免随机散乱。', tags: ['balance', 'asymmetry'] }),
  eye({ id: 'bal_chaos', name: '受控混乱 (Controlled Chaos)', def: '多线条、多人物、多物件或强纹理形成拥挤秩序。边界：必须保留一个第一焦点。', tags: ['balance', 'chaos'] }),
  eye({ id: 'bal_max', name: '极繁铺陈 (Maximalist Arrangement)', def: '画面故意信息密集，材料、符号、装饰和背景共同堆叠。边界：极繁也要有视觉等级。', tags: ['balance', 'maximalist'] })
];

// --- 3. 透视 (PERSPECTIVE) ---
export const AES_PERSPECTIVE: LibraryItemDef[] = [
  eye({ id: 'per_one_point', name: '一点透视 (One-Point)', def: '空间线条汇向一个消失点，适合走廊、道路、神殿、城市轴线。边界：消失点不能抢走主体。', tags: ['perspective', 'one_point'] }),
  eye({ id: 'per_two_point', name: '两点透视 (Two-Point)', def: '建筑、街角或物件同时向两个方向展开，空间更立体。适合街区、室内、建筑角色图。', tags: ['perspective', 'two_point'] }),
  eye({ id: 'per_three_point', name: '三点透视 (Three-Point)', def: '高低方向也进入透视，产生高楼、巨构、深坑或压迫高度。边界：不要让主体比例崩坏。', tags: ['perspective', 'three_point'] }),
  eye({ id: 'per_isometric', name: '等轴测 (Isometric)', def: '空间像设计图一样等距展开，适合建筑、场景、游戏地图或物件系统。边界：人物情绪会被削弱。', tags: ['perspective', 'isometric'] }),
  eye({ id: 'per_flat', name: '正交平面 (Flat / Orthographic)', def: '弱化深度，强调轮廓、图案、服装结构或图形秩序。适合设定图、时尚、抽象画面。', tags: ['perspective', 'flat'] }),
  eye({ id: 'per_forced', name: '强迫透视 (Forced Perspective)', def: '用前后距离制造夸张大小关系，适合荒诞、广告、超现实或巨物。边界：尺度关系要可信。', tags: ['perspective', 'forced'] }),
  eye({ id: 'per_atmospheric', name: '空气透视 (Atmospheric Perspective)', def: '远处由雾、灰度、色温或亮度逐渐退后，空间有层次。适合风景、遗迹、战争和长距离场景。', tags: ['perspective', 'atmosphere'] }),
  eye({ id: 'per_foreshortening', name: '强缩短 (Foreshortening)', def: '肢体、武器、手或物件伸向镜头，产生冲击和临场感。边界：解剖必须仍然清楚。', tags: ['perspective', 'foreshortening'] }),
  eye({ id: 'per_curvilinear', name: '曲线透视 (Curvilinear)', def: '空间边缘轻微弯曲，形成包围、梦境或极广角感。边界：不要把直线全部扭成噪声。', tags: ['perspective', 'curvilinear'] }),
  eye({ id: 'per_worm_eye', name: '虫视透视 (Worm-Eye Perspective)', def: '从极低处看向上方，主体或建筑显得巨大、压迫、神圣或危险。边界：面部不能完全失真。', tags: ['perspective', 'worm_eye'] }),
  eye({ id: 'per_fisheye', name: '鱼眼透视 (Fisheye Perspective)', def: '极广角球面畸变压缩空间，适合不安、地下、滑板、梦境或极端临场。边界：只在需要异化时使用。', tags: ['perspective', 'fisheye'] })
];

// --- 4. 拍摄角度 (CAMERA ANGLE) ---
export const AES_ANGLE: LibraryItemDef[] = [
  eye({ id: 'ang_aerial', name: '高空俯瞰 (Aerial View)', def: '从高处看整体空间、路径和群体秩序。适合建立场景，不适合细节人物主图。', tags: ['angle', 'aerial'] }),
  eye({ id: 'ang_topdown', name: '垂直俯拍 (Top-Down)', def: '相机近乎垂直向下，人物和物件被压成图案或证据。适合仪式、桌面、尸检感、设计图。', tags: ['angle', 'top_down'] }),
  eye({ id: 'ang_high', name: '高角度俯视 (High Angle)', def: '从上方向下看主体，使其显得脆弱、被观察或被环境压低。边界：不要削弱到无主体力量。', tags: ['angle', 'high'] }),
  eye({ id: 'ang_slight_high', name: '轻微俯拍 (Slight High Angle)', def: '略高于眼平，保留亲近感，同时增加脆弱、柔和或生活记录感。', tags: ['angle', 'slight_high'] }),
  eye({ id: 'ang_eye', name: '平视 (Eye Level)', def: '与主体同高度，稳定、自然、可信，适合大多数肖像和角色图。', tags: ['angle', 'eye_level'] }),
  eye({ id: 'ang_low', name: '低角度仰拍 (Low Angle)', def: '略低位置向上看，增强力量、身体线条、服装垂坠或建筑压迫。边界：透视要保持漂亮。', tags: ['angle', 'low'] }),
  eye({ id: 'ang_worm', name: '极端仰拍 (Worm-Eye View)', def: '从地面附近向上看，形成强烈压迫、英雄化或恐怖感。边界：只在强场景需求下使用。', tags: ['angle', 'worm'] }),
  eye({ id: 'ang_dutch', name: '斜角 (Dutch Angle)', def: '画面地平线倾斜，制造不稳定、危险、眩晕或心理失衡。边界：不要滥用成廉价动感。', tags: ['angle', 'dutch'] }),
  eye({ id: 'ang_ots', name: '过肩观看 (Over the Shoulder)', def: '从另一人肩后看主体或目标，强调关系、窥视、对峙。边界：前景肩部不能遮住关键主体。', tags: ['angle', 'ots'] }),
  eye({ id: 'ang_pov', name: '主观视角 (POV)', def: '画面像来自角色眼睛或设备视角，强调临场、操控、危险或亲密。边界：POV 不应让主体消失。', tags: ['angle', 'pov'] }),
  eye({ id: 'ang_clean_single', name: '干净单人位 (Clean Single)', def: '画面只服务一个主体，背景和前景都让出第一识别。适合角色主图、肖像和封面。', tags: ['angle', 'single'] }),
  eye({ id: 'ang_two_shot', name: '双人位 (Two-Shot)', def: '两个主体同时在画面中形成关系。边界：只有当目标允许双主体时使用。', tags: ['angle', 'two_shot'] }),
  eye({ id: 'ang_group', name: '群体位 (Group Shot)', def: '多人或多主体共同构图，强调群体、阵营、队列或社会关系。边界：不适合单角色清晰展示。', tags: ['angle', 'group'] })
];

// --- 5. 焦段 (FOCAL LENGTH) ---
export const AES_FOCAL_LENGTH: LibraryItemDef[] = [
  eye({ id: 'fl_fisheye', name: '鱼眼 8mm (Fisheye 8mm)', def: '极端球面视野，边缘强畸变。适合地下、运动、梦境、平台感和异化空间。边界：人物脸部容易失真。', tags: ['focal_length', 'fisheye'] }),
  eye({ id: 'fl_ultra_wide', name: '超广角 14mm (Ultra Wide 14mm)', def: '夸张空间、强前景、强透视，适合宏大室内、街道、神殿和身体冲击。边界：避免把比例拉坏。', tags: ['focal_length', 'wide'] }),
  eye({ id: 'fl_wide', name: '广角 24mm (Wide 24mm)', def: '保留明显环境和临场距离，适合电影感中景、街拍和动作。边界：近距离脸部会变形。', tags: ['focal_length', 'wide'] }),
  eye({ id: 'fl_35mm', name: '人文 35mm (Humanist 35mm)', def: '人物与环境平衡，距离自然，适合街拍、纪实、电影静帧和完整角色场景。', tags: ['focal_length', '35mm'] }),
  eye({ id: 'fl_50mm', name: '标准 50mm (Standard 50mm)', def: '接近自然视角，变形少，适合肖像、半身、日常和稳态叙事。', tags: ['focal_length', '50mm'] }),
  eye({ id: 'fl_85mm', name: '人像 85mm (Portrait 85mm)', def: '轻微压缩空间，脸部比例优雅，背景柔化。适合肖像、时尚、美容。', tags: ['focal_length', '85mm'] }),
  eye({ id: 'fl_100mm', name: '百微 100mm (Macro 100mm)', def: '细节锐利、浅景深、材质证据强。适合手、皮肤、物件、工艺和微距。', tags: ['focal_length', 'macro'] }),
  eye({ id: 'fl_135mm', name: '长焦 135mm (Telephoto 135mm)', def: '压缩背景、突出人物、减少空间变形。适合街头时尚、远距肖像、压迫城市背景。', tags: ['focal_length', 'telephoto'] }),
  eye({ id: 'fl_super_tele', name: '超长焦 400mm+ (Super Telephoto)', def: '强烈压缩远近关系，主体像被背景压近。适合远距观察、野外、监视、灾难尺度。', tags: ['focal_length', 'super_tele'] })
];

// --- 6. 景深与焦点 (DEPTH OF FIELD) ---
export const AES_DEPTH: LibraryItemDef[] = [
  eye({ id: 'dof_deep', name: '深焦 (Deep Focus)', def: '前景、主体和背景都较清楚，空间证据完整。适合场景压力、群像、建筑和复杂叙事。', tags: ['depth', 'deep_focus'] }),
  eye({ id: 'dof_medium', name: '中等景深 (Medium Depth)', def: '主体清楚，背景仍保留可读信息，是最稳的默认焦点关系。', tags: ['depth', 'medium'] }),
  eye({ id: 'dof_shallow', name: '浅景深 (Shallow Focus)', def: '主体清楚，背景柔化，观看更集中。适合肖像、封面、产品和情绪画面。', tags: ['depth', 'shallow'] }),
  eye({ id: 'dof_razor', name: '刀锋浅焦 (Razor-Thin Focus)', def: '只有眼睛、嘴唇、手指或物件边缘极窄区域清楚。边界：可读性风险高，谨慎使用。', tags: ['depth', 'razor'] }),
  eye({ id: 'dof_bokeh', name: '奶油散景 (Creamy Bokeh)', def: '背景化成柔软光斑和色块，主体有浪漫、商业或人像感。边界：不要变成无信息背景。', tags: ['depth', 'bokeh'] }),
  eye({ id: 'dof_foreground_blur', name: '前景虚化遮挡 (Foreground Blur)', def: '用模糊前景压出窥视、空间层次或亲密感。边界：前景不能遮住主体核心。', tags: ['depth', 'foreground'] }),
  eye({ id: 'dof_rack', name: '焦点转换感 (Rack Focus Feeling)', def: '像刚从前景切到主体或将从主体切走，带有电影时间感。静图中只表现焦点层级。', tags: ['depth', 'rack_focus'] }),
  eye({ id: 'dof_split', name: '双重焦点 (Split Diopter)', def: '前景和背景两个距离同时清楚，中间过渡略怪异。适合悬疑、对峙和空间关系。', tags: ['depth', 'split_diopter'] })
];

// --- 7. 快门 (SHUTTER) ---
export const AES_SHUTTER: LibraryItemDef[] = [
  eye({ id: 'sht_fast', name: '高速凝固 (Fast Shutter)', def: '动作被清晰冻结，适合飞溅、奔跑、战斗、跳跃和爆发瞬间。边界：不要失去动势方向。', tags: ['shutter', 'fast'] }),
  eye({ id: 'sht_std', name: '标准快门 (Standard 180 Degree)', def: '运动感自然，既不僵硬也不强拖影，是电影感和纪实感的稳态选择。', tags: ['shutter', 'standard'] }),
  eye({ id: 'sht_slow', name: '轻微拖影 (Slow Shutter)', def: '手、衣摆、灯光或背景出现轻微运动模糊，增加速度和不稳定。边界：脸部通常应保持清楚。', tags: ['shutter', 'slow'] }),
  eye({ id: 'sht_drag', name: '拖影快门 (Dragging Shutter)', def: '主体或背景出现明显拖影，适合夜店、奔逃、眩晕、梦境和平台闪光。边界：动作核心仍需可读。', tags: ['shutter', 'drag'] }),
  eye({ id: 'sht_long', name: '长曝光 (Long Exposure)', def: '灯轨、水流、人群或星光形成时间痕迹。适合风景、城市、仪式和抽象运动。边界：不适合清晰角色主图。', tags: ['shutter', 'long_exposure'] }),
  eye({ id: 'sht_strobe_freeze', name: '频闪凝固 (Strobe Freeze)', def: '闪光把动作切成清楚瞬间，带舞台、夜场、实验或运动摄影感。边界：不要过曝。', tags: ['shutter', 'strobe'] })
];

// --- 8. 光学特效 (OPTICAL FX) ---
export const AES_LENS_FX: LibraryItemDef[] = [
  eye({ id: 'ofx_clean', name: '洁净镜头 (Clean Lens)', group: '洁净与柔化', def: '镜头表面干净，边缘清楚，几乎没有额外滤镜或瑕疵。适合作为默认安全项。', tags: ['optical_fx', 'clean'] }),
  eye({ id: 'ofx_std_coat', name: '标准镀膜 (Standard Coating)', group: '洁净与柔化', def: '现代镜头镀膜，反差和眩光受控，画面清楚但不夸张。', tags: ['optical_fx', 'clean'] }),
  eye({ id: 'ofx_diff_18', name: '轻黑柔 (1/8 Black Pro-Mist)', group: '洁净与柔化', def: '高光轻微扩散，皮肤和灯光更柔，但细节仍清楚。适合人像和电影感。', tags: ['optical_fx', 'diffusion'] }),
  eye({ id: 'ofx_diff_14', name: '中黑柔 (1/4 Black Pro-Mist)', group: '洁净与柔化', def: '高光有可见晕开，反差稍降，画面更浪漫或复古。边界：不要糊掉脸。', tags: ['optical_fx', 'diffusion'] }),
  eye({ id: 'ofx_diff_12', name: '重黑柔 (1/2 Black Pro-Mist)', group: '洁净与柔化', def: '明显柔化和高光扩散，适合梦境、舞台和浓郁复古。边界：细节可读性会下降。', tags: ['optical_fx', 'diffusion'] }),
  eye({ id: 'ofx_diff_white', name: '白柔 (White Mist)', group: '洁净与柔化', def: '整体更白、更软、更泛光，适合美容、幻想和轻盈画面。边界：避免廉价磨皮感。', tags: ['optical_fx', 'diffusion'] }),
  eye({ id: 'ofx_diff_warm', name: '暖柔扩散 (Warm Soft Diffusion)', group: '洁净与柔化', def: '柔化同时带暖色偏，适合怀旧、亲密和柔光人像。边界：若配色禁暖需避免。', tags: ['optical_fx', 'warm'] }),
  eye({ id: 'ofx_net_filter', name: '后置网纱 (Rear Net Filter)', group: '洁净与柔化', def: '边缘有复古柔化和细微织物感，适合老电影、梦境和时尚。边界：纹理不能太显眼。', tags: ['optical_fx', 'diffusion'] }),
  eye({ id: 'ofx_velvet', name: '丝绒柔焦 (Velvet Soft Focus)', group: '洁净与柔化', def: '黑位柔软，高光绵密，画面有柔焦肖像或音乐录影带质感。', tags: ['optical_fx', 'soft_focus'] }),
  eye({ id: 'ofx_low_con', name: '低反差滤镜 (Low Contrast Filter)', group: '洁净与柔化', def: '降低黑白反差，保留更多灰阶，适合雾感、回忆和低压画面。', tags: ['optical_fx', 'low_contrast'] }),
  eye({ id: 'ofx_halo', name: '高光光晕 (Halo)', group: '洁净与柔化', def: '亮部周围出现环状或柔边光晕，适合神秘、舞台、宗教或梦境。边界：光晕不能遮主体。', tags: ['optical_fx', 'halo'] }),
  eye({ id: 'ofx_bloom', name: '泛光 (Bloom)', group: '洁净与柔化', def: '亮部向周围溢出，增加数字、梦幻或强光氛围。边界：不要把画面洗白。', tags: ['optical_fx', 'bloom'] }),
  eye({ id: 'ofx_mist', name: '镜前水雾 (Lens Mist)', group: '洁净与柔化', def: '像镜头或空气中有湿雾，降低清晰度并增加潮湿氛围。边界：主体眼睛和轮廓仍需可读。', tags: ['optical_fx', 'mist'] }),
  eye({ id: 'ofx_color_shift', name: '轻微色偏 (Color Shift)', group: '洁净与柔化', def: '画面边缘或局部有轻微色彩偏移，增加模拟影像或异常感。边界：不要变成现代霓虹污染。', tags: ['optical_fx', 'color_shift'] }),
  eye({ id: 'ofx_green_tint', name: '绿色色偏 (Green Tint)', group: '洁净与柔化', def: '整体带轻微绿色污染，适合荧光灯、监控、医院、地下空间。边界：不要破坏肤色主读。', tags: ['optical_fx', 'tint'] }),

  eye({ id: 'ofx_prism_tri', name: '三角棱镜 (Triangular Prism)', group: '折射与棱镜', def: '画面边缘出现折射、复制和色散，适合梦境、时尚、心理分裂。边界：折射不能切碎主体脸。', tags: ['optical_fx', 'prism'] }),
  eye({ id: 'ofx_kaleido', name: '万花筒 (Kaleidoscope)', group: '折射与棱镜', def: '局部出现重复对称碎片，适合迷幻、舞台、抽象和超现实。边界：强度必须受控。', tags: ['optical_fx', 'kaleidoscope'] }),
  eye({ id: 'ofx_diopter', name: '分割焦场 (Split Field Diopter)', group: '折射与棱镜', def: '前后两个区域异常同时清楚，带轻微镜片边界。适合悬疑和空间对峙。', tags: ['optical_fx', 'diopter'] }),
  eye({ id: 'ofx_fractal', name: '分形滤镜 (Fractal Filter)', group: '折射与棱镜', def: '局部复制出碎裂几何，适合精神错位、音乐现场和概念图。边界：不要过度碎片化。', tags: ['optical_fx', 'fractal'] }),
  eye({ id: 'ofx_prism_lin', name: '线性棱镜 (Linear Prism)', group: '折射与棱镜', def: '画面沿一个方向出现拉伸复制和折射，适合速度、城市灯光和时尚。', tags: ['optical_fx', 'prism'] }),
  eye({ id: 'ofx_prism_halo', name: '环形棱镜 (Halo Prism)', group: '折射与棱镜', def: '主体周围出现环状折射或边缘重复，适合神秘、舞台和广告奇观。', tags: ['optical_fx', 'prism'] }),
  eye({ id: 'ofx_multi_ref', name: '多面折射 (Multi-Faceted Refraction)', group: '折射与棱镜', def: '像经过多面镜或碎玻璃观看，产生多层反射。边界：主体核心必须完整。', tags: ['optical_fx', 'refraction'] }),
  eye({ id: 'ofx_chroma_pr', name: '边缘色散 (Chromatic Prism)', group: '折射与棱镜', def: '高反差边缘出现彩色分离，带技术、梦境或故障感。边界：不要污染整张图。', tags: ['optical_fx', 'chromatic'] }),
  eye({ id: 'ofx_prism_ref', name: '棱镜反射 (Prism Reflection)', group: '折射与棱镜', def: '使用棱镜式反射增加前景层次、双影或光边。适合肖像和时尚。', tags: ['optical_fx', 'prism'] }),

  eye({ id: 'ofx_streak_bl', name: '蓝色横向拉丝 (Blue Streak)', group: '眩光与星芒', def: '强光源产生蓝色横向拉丝，带变形宽银幕和科幻感。边界：不要到处都是光线。', tags: ['optical_fx', 'streak'] }),
  eye({ id: 'ofx_streak_or', name: '橙色横向拉丝 (Orange Streak)', group: '眩光与星芒', def: '暖色横向拉丝，适合夜景、车灯、舞台和复古广告。边界：暖色不能破坏主色策略。', tags: ['optical_fx', 'streak'] }),
  eye({ id: 'ofx_star_4', name: '十字星芒 (4-Point Star)', group: '眩光与星芒', def: '点光源变成十字星芒，适合珠宝、夜景、舞台和梦幻时尚。边界：星芒数量要少。', tags: ['optical_fx', 'star'] }),
  eye({ id: 'ofx_flare_lens', name: '逆光眩光 (Lens Flare)', group: '眩光与星芒', def: '逆光产生镜头眩光、光斑或光线污染，增加现场感。边界：眩光不能遮住主体。', tags: ['optical_fx', 'flare'] }),
  eye({ id: 'ofx_spot_beam', name: '聚光灯束 (Spotlight Beam)', group: '眩光与星芒', def: '可见光束穿过空气、烟雾或尘埃，强调舞台、审判或神圣压力。', tags: ['optical_fx', 'beam'] }),

  eye({ id: 'ofx_double_exp', name: '双重曝光 (Double Exposure)', group: '底片与叠层', def: '两层影像叠在一起，适合记忆、身份分裂、城市心理和概念肖像。边界：主体第一轮廓必须保留。', tags: ['optical_fx', 'double_exposure'] }),
  eye({ id: 'ofx_film_burn', name: '胶片烧灼 (Film Burn)', group: '底片与叠层', def: '画面边缘像胶片过曝烧开，适合复古、回忆、损坏和强烈转场感。边界：不要遮核心脸部。', tags: ['optical_fx', 'film_burn'] }),
  eye({ id: 'ofx_light_leak', name: '底片漏光 (Light Leak)', group: '底片与叠层', def: '边缘出现红橙或白色漏光，适合胶片、旅行、记忆和偶然感。边界：与色彩策略冲突时不要使用。', tags: ['optical_fx', 'light_leak'] }),
  eye({ id: 'ofx_dust_scratch', name: '灰尘划痕 (Dust & Scratches)', group: '底片与叠层', def: '细小灰尘、划痕和底片损伤增加物理影像年代感。边界：只能是表层证据，不能破坏主体。', tags: ['optical_fx', 'damage'] }),
  eye({ id: 'ofx_smudge', name: '污迹水痕 (Smudge / Water Spot)', group: '底片与叠层', def: '镜头或底片上有指纹、水痕、油污，带现场污染和手工痕迹。边界：污迹不要落在关键五官上。', tags: ['optical_fx', 'smudge'] }),
  eye({ id: 'ofx_scratches', name: '线状划痕 (Scratches)', group: '底片与叠层', def: '竖向或随机划痕覆盖画面表层，适合老电影、档案、破损影像。边界：线条密度要低。', tags: ['optical_fx', 'scratches'] }),

  eye({ id: 'ofx_fisheye', name: '鱼眼畸变 (Fisheye Distortion)', group: '畸变与特殊视野', def: '边缘强烈弯曲，空间像被压进球面。适合极端临场、地下、梦境和不安。边界：谨慎用于美型人物。', tags: ['optical_fx', 'fisheye'] }),
  eye({ id: 'ofx_tilt_shift', name: '移轴微缩 (Tilt-Shift)', group: '畸变与特殊视野', def: '焦平面倾斜，场景像微缩模型或局部玩具化。边界：人物主图容易变成模型感。', tags: ['optical_fx', 'tilt_shift'] }),
  eye({ id: 'ofx_anaglyph', name: '红蓝偏移 (Anaglyph Offset)', group: '畸变与特殊视野', def: '红蓝通道错位，带 3D、故障、地下影像或数字失真。边界：不要让边缘脏到不可读。', tags: ['optical_fx', 'anaglyph'] }),
  eye({ id: 'ofx_infrared', name: '红外通道 (Infrared Pass)', group: '畸变与特殊视野', def: '植物、皮肤和天空呈现红外摄影式异常明度。适合异化风景和实验图像。边界：会强改色彩策略。', tags: ['optical_fx', 'infrared'] }),
  eye({ id: 'ofx_strobe', name: '频闪光感 (Strobe)', group: '畸变与特殊视野', def: '强闪光制造断续动作、夜场、舞台或实验摄影感。边界：避免过曝和廉价派对感。', tags: ['optical_fx', 'strobe'] }),
  eye({ id: 'ofx_color_gel', name: '彩色滤片 (Color Gel)', group: '畸变与特殊视野', def: '用彩色滤片或灯片改变局部色彩，适合舞台、时尚、广告。边界：不能与禁用高饱和策略冲突。', tags: ['optical_fx', 'gel'] }),
  eye({ id: 'ofx_smoke', name: '烟雾镜前层 (Smoke Layer)', group: '畸变与特殊视野', def: '烟雾在镜头和主体之间形成半透明层，增加体积、神秘和光束。边界：烟不能糊掉主体轮廓。', tags: ['optical_fx', 'smoke'] })
];

// --- 9. 光学格式 (OPTICAL FORMAT) ---
export const AES_OPTICAL_FORMAT: LibraryItemDef[] = [
  eye({ id: 'fmt_s35', name: 'Super 35mm', def: '经典电影传感器/胶片面积，视角和景深平衡，适合叙事电影感。', tags: ['optical_format', 's35'] }),
  eye({ id: 'fmt_std35', name: 'Standard 35mm', def: '标准 35mm 电影/摄影格式，稳定、通用、不过度夸张。', tags: ['optical_format', '35mm'] }),
  eye({ id: 'fmt_ff', name: 'Full Frame', def: '全画幅视野和较浅景深，适合现代肖像、广告和低光画面。', tags: ['optical_format', 'full_frame'] }),
  eye({ id: 'fmt_vv', name: 'VistaVision', def: '大面积画幅，细节干净、视野宽阔，有高级电影主视觉感。', tags: ['optical_format', 'large_format'] }),
  eye({ id: 'fmt_65mm', name: '65mm Large Format', def: '大画幅电影质感，空间开阔、细节厚重，适合史诗和高端叙事。', tags: ['optical_format', '65mm'] }),
  eye({ id: 'fmt_arri65', name: 'ARRI 65', def: '现代大画幅数字电影感，肤色、层次和景深都偏高级。', tags: ['optical_format', 'large_format'] }),
  eye({ id: 'fmt_ana_2x', name: '变形宽银幕 2x (Anamorphic 2x)', def: '横向压缩宽银幕、椭圆散景和横向眩光，适合强电影感。', tags: ['optical_format', 'anamorphic'] }),
  eye({ id: 'fmt_anamorphic', name: 'Anamorphic', def: '变形镜头宽银幕关系，空间更横向、眩光更电影化。', tags: ['optical_format', 'anamorphic'] }),
  eye({ id: 'fmt_open_gate', name: 'Open Gate', def: '开放门全传感器取景，保留更多上下空间，适合后期裁切和多比例输出。', tags: ['optical_format', 'open_gate'] }),
  eye({ id: 'fmt_academy', name: '学院比例 (Academy Ratio)', def: '较窄经典画幅，适合复古电影、肖像和垂直身体构图。', tags: ['optical_format', 'academy'] }),
  eye({ id: 'fmt_imax', name: 'IMAX', def: '超大画幅和强沉浸尺度，适合巨构、地景、史诗和宏大空间。', tags: ['optical_format', 'imax'] }),
  eye({ id: 'fmt_techniscope', name: 'Techniscope', def: '复古宽银幕电影格式，带经济胶片、颗粒和类型片气质。', tags: ['optical_format', 'techniscope'] }),
  eye({ id: 'fmt_16mm', name: '16mm', def: '小画幅胶片感，颗粒更明显，适合纪实、地下、青春和低成本真实感。', tags: ['optical_format', '16mm'] }),
  eye({ id: 'fmt_medium', name: 'Medium Format', def: '中画幅摄影感，细节丰富、景深柔和，适合时尚和高级肖像。', tags: ['optical_format', 'medium_format'] }),
  eye({ id: 'fmt_large', name: 'Large Format', def: '大画幅摄影感，细节极强、空间安静、主体存在感高。', tags: ['optical_format', 'large_format'] }),
  eye({ id: 'fmt_action', name: 'Action Cam Sensor', def: '小传感器运动相机感，广角、近距离、边缘畸变和现场性强。', tags: ['optical_format', 'action_cam'] })
];
