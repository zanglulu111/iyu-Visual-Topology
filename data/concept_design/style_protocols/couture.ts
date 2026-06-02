import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'COUTURE';
const ROUTE_NAME = '高定结构';
const ROUTE_NAME_EN = 'Couture Structure';
const ERAS = ['modern', 'contemporary', 'timeless'];
const FORBIDS = ['真实品牌 logo 或可识别 IP', '廉价 cosplay 感', '随机战术装备堆叠', '脏乱废土拼贴', '无解释身体异形化'];

const s = (
  slug: string,
  name: string,
  nameEn: string,
  kind: StyleProtocolSeed['kind'],
  focus: string,
  focusEn: string,
  visual: string[],
  visualEn: string[],
  absorption: string,
  absorptionEn: string,
  extra: Partial<StyleProtocolSeed> = {}
): StyleProtocolSeed => ({ slug, name, nameEn, kind, focus, focusEn, visual, visualEn, absorption, absorptionEn, ...extra });

const families: StyleProtocolFamily[] = [
  {
    slug: 'architectural_volume',
    name: '衣量建筑',
    nameEn: 'Architectural Volume',
    focus: '非日常衣量、建筑体块和纪念碑式比例统摄角色',
    focusEn: 'non-daily volume, architectural mass, and monumental proportion governing the character',
    defaultKind: 'structure',
    defaultAffects: ['silhouette', 'costume', 'pose', 'material'],
    defaultControls: ['architectural_volume', 'couture_mass', 'monumental_proportion'],
    items: [
      s('monumental_gown_mass', '纪念碑衣量', 'Monumental Gown Mass', 'structure', '巨大但可读的衣量成为第一识别', 'huge but readable garment mass as first recognition', ['巨袖', '大裙摆', '拖尾', '包围身体', '静止比例'], ['giant sleeves', 'large skirt mass', 'train', 'body enclosure', 'still proportion'], '外来元素优先转成衣量、裙摆体块、拖尾和可读比例。', 'Translate outside elements into garment volume, skirt mass, train, and readable proportion.'),
      s('architectural_shoulder_power', '建筑肩部权力', 'Architectural Shoulder Power', 'structure', '肩部建筑结构承载权力和身份', 'architectural shoulder structure carrying power and identity', ['宽肩', '方肩', '雕塑肩', '硬壳胸衣', '冷感站姿'], ['broad shoulders', 'square shoulders', 'sculptural shoulders', 'hard bodice', 'cool stance'], '权力、战斗或贵族元素优先转成肩线和上半身结构。', 'Translate power, combat, or aristocracy into shoulder line and upper-body structure.'),
      s('spiral_body_enclosure', '螺旋包身结构', 'Spiral Body Enclosure', 'structure', '衣物像建筑坡道一样环绕身体', 'garment spiraling around body like an architectural ramp', ['螺旋裁片', '环绕腰线', '不对称包覆', '长线条', '转身姿态'], ['spiral panels', 'wrapped waistline', 'asymmetric enclosure', 'long line', 'turning pose'], '运动、时间和异质元素优先转成环绕身体的裁片秩序。', 'Translate motion, time, and alien elements into body-wrapping panel order.'),
      s('shell_bodice_system', '硬壳胸衣系统', 'Shell-Bodice System', 'structure', '胸衣像外壳一样重新组织身体', 'bodice reorganizing the body like an outer shell', ['硬壳胸衣', '收腰', '光滑表面', '边缘线', '受控呼吸'], ['hard bodice', 'cinched waist', 'smooth surface', 'edge lines', 'controlled breath'], '身体、技术或防护元素优先服装化为硬壳胸衣。', 'Garment-translate body, tech, or protection elements into hard shell bodice.'),
      s('floating_panel_gravity', '悬浮裁片重力', 'Floating Panel Gravity', 'structure', '独立裁片制造轻重错觉', 'independent panels creating light-heavy illusion', ['悬浮片', '离身结构', '阴影间隙', '轻质支撑', '慢速姿态'], ['floating panels', 'off-body structure', 'shadow gaps', 'light support', 'slow pose'], '科幻、奇幻或轻盈元素优先转成离身裁片，而非身体异形。', 'Translate sci-fi, fantasy, or lightness into off-body panels, not body mutation.'),
      s('column_silhouette_law', '立柱廓形法', 'Column Silhouette Law', 'structure', '垂直长线让角色像一根高定立柱', 'vertical long line making character read as a couture column', ['长直线', '窄身', '拖地长度', '肩颈留白', '正面静止'], ['long straight line', 'narrow body', 'floor length', 'neck-shoulder space', 'frontal stillness'], '复杂元素必须被垂直长线收束，保持高定可读性。', 'Contain complex elements with vertical long line for couture readability.'),
      s('exploded_skirt_engineering', '爆炸裙摆工程', 'Exploded-Skirt Engineering', 'structure', '裙摆体积像工程结构一样展开', 'skirt volume expanding like engineered structure', ['放射裙摆', '褶皱支撑', '裙撑暗示', '大面积面料', '中心腰线'], ['radial skirt', 'pleat support', 'crinoline hint', 'large fabric planes', 'central waist'], '戏剧、神话或身份元素优先转成裙摆工程。', 'Translate drama, myth, or identity into skirt engineering.'),
      s('asymmetric_couture_mass', '不对称高定体块', 'Asymmetric Couture Mass', 'structure', '一侧体量压过身体形成权力偏移', 'one-sided mass shifting power over the body', ['单侧巨袖', '偏置披挂', '一侧拖尾', '倾斜站姿', '负空间'], ['one giant sleeve', 'offset drape', 'one-sided train', 'tilted stance', 'negative space'], '冲突风格优先分配到左右体量差，不做平均拼贴。', 'Assign conflicting styles into left-right mass difference, not even collage.'),
      s('negative_space_couture', '留白高定结构', 'Negative-Space Couture', 'structure', '用少量巨大形体和空白建立高级感', 'few huge forms and emptiness creating sophistication', ['大片留白', '一个体块', '干净轮廓', '低对比', '少量饰件'], ['large empty zones', 'one mass', 'clean silhouette', 'low contrast', 'few ornaments'], '过多元素必须删减为一个高定体块和少量关键点。', 'Reduce excess elements into one couture mass and few key accents.'),
      s('body_as_display_plinth', '身体展台化', 'Body as Display Plinth', 'pose', '身体像展示台一样承托服装结构', 'body serving as a plinth for garment structure', ['中轴稳定', '手臂收敛', '面部冷静', '服装主导', '脚步极小'], ['stable axis', 'contained arms', 'calm face', 'garment-led body', 'tiny steps'], '姿态必须服务衣量展示，不抢走服装结构。', 'Pose must serve garment display and never overpower structure.')
    ]
  },
  {
    slug: 'runway_presentation',
    name: '秀场展示',
    nameEn: 'Runway Presentation',
    focus: '被观看的身体、定点停顿和秀场镜头统摄角色',
    focusEn: 'watched body, runway pause, and show-camera logic governing character',
    defaultKind: 'pose',
    defaultAffects: ['pose', 'silhouette', 'costume', 'symbol'],
    defaultControls: ['runway_presentation', 'watched_body', 'fashion_show_pose'],
    items: [
      s('runway_pause_authority', '走台定点权力', 'Runway-Pause Authority', 'pose', '定点停顿让角色成为被展示的权力对象', 'runway pause making character a displayed power object', ['定点停顿', '直视', '下巴微抬', '窄步', '中心轴'], ['fixed pause', 'forward gaze', 'slightly lifted chin', 'narrow step', 'central axis'], '自信、明星或权力元素优先转成走台停顿。', 'Translate confidence, celebrity, or power into runway pause.'),
      s('editorial_forward_gaze', '编辑式前视', 'Editorial Forward Gaze', 'pose', '前视眼神像杂志大片一样冷静', 'forward gaze calm like editorial fashion photography', ['正面眼神', '冷脸', '颧骨光', '肩颈线', '少表情'], ['frontal gaze', 'cool face', 'cheekbone light', 'neck-shoulder line', 'little expression'], '情绪元素优先压缩为冷静前视，不做剧情表演。', 'Compress emotion into calm forward gaze, not narrative acting.'),
      s('attitude_pose_protocol', 'Attitude Pose协议', 'Attitude Pose Protocol', 'pose', '第二姿态必须体现服装性格', 'second pose must express garment personality', ['侧身', '手部造型', '重心偏移', '衣摆展示', '表情克制'], ['profile body', 'styled hands', 'shifted weight', 'hem display', 'restrained expression'], '动作、职业和身份优先转成服装态度姿态。', 'Translate action, occupation, and identity into garment attitude pose.'),
      s('model_off_duty_couture', '超模下班高定', 'Model-Off-Duty Couture', 'cultural_image', '高定与下班松弛感并置', 'couture juxtaposed with off-duty relaxation', ['宽外套', '墨镜', '低发髻', '长腿线', '疲惫冷感'], ['wide coat', 'sunglasses', 'low bun', 'long leg line', 'tired coolness'], '街头、明星和高定元素优先融合为超模下班感。', 'Fuse street, celebrity, and couture into model-off-duty feeling.'),
      s('backstage_to_runway_transition', '后台到秀场过渡', 'Backstage-to-Runway Transition', 'cultural_image', '制作痕迹和展示姿态同时存在', 'making traces and display pose existing together', ['别针', '半完成衣片', '定点站姿', '妆面残留', '手部整理'], ['pins', 'unfinished panel', 'runway stance', 'makeup residue', 'adjusting hands'], '工坊、职业和展示元素优先落在后台转秀场状态。', 'Translate atelier, occupation, and display into backstage-to-runway state.'),
      s('catwalk_weaponization', '走台武器化', 'Catwalk Weaponization', 'pose', '走台姿态拥有攻击性但不变成战斗场景', 'runway posture has aggression without becoming combat scene', ['尖锐肩线', '窄步', '冷眼', '手臂切线', '硬质鞋履'], ['sharp shoulder', 'narrow step', 'cold eyes', 'arm diagonal', 'hard shoes'], '武装或战斗元素优先变成走台攻击性。', 'Translate armed or combat elements into runway aggression.'),
      s('front_row_pressure', '前排凝视压力', 'Front-Row Gaze Pressure', 'pose', '角色像被前排观看和评判', 'character as watched and judged by front row', ['紧张嘴角', '正面站立', '衣物完美', '眼神不逃', '手部收紧'], ['tense mouth corner', 'frontal stance', 'perfect garment', 'unfleeing gaze', 'tight hands'], '焦虑和社会压力优先转成被观看感。', 'Translate anxiety and social pressure into being-watched pressure.'),
      s('lookbook_clean_display', 'Lookbook干净展示', 'Lookbook Clean Display', 'function', '身份被整理为清晰服装目录式可读性', 'identity organized into clean lookbook readability', ['全身清楚', '无杂景', '衣物分层', '色条可读', '自然站姿'], ['clear full body', 'no messy scene', 'garment layers', 'readable palette', 'natural stance'], '复杂人物设定优先整理成lookbook式清晰展示。', 'Organize complex character setup into lookbook-clear display.'),
      s('couture_identity_board_pose', '高定身份板姿态', 'Couture Identity-Board Pose', 'function', '高定适配身份设定板的多视图展示', 'couture adapted for multi-view identity-board display', ['主视图', '侧背面', '细节小格', '材料近景', '色条'], ['main view', 'side-back view', 'detail cells', 'material close-up', 'palette strip'], '所有奇观元素必须服务身份板可读性。', 'All spectacular elements must serve identity-board readability.'),
      s('silent_supermodel_power', '沉默超模权力', 'Silent Supermodel Power', 'cultural_image', '不靠剧情只靠身体比例和眼神成立', 'established by body proportion and gaze without plot', ['高挑比例', '冷静眼神', '肩颈展开', '长线条', '低声量表情'], ['tall proportion', 'calm gaze', 'open neck-shoulder', 'long line', 'low-volume expression'], '明星、贵族或神性元素优先转成沉默超模气场。', 'Translate celebrity, aristocracy, or divinity into silent supermodel aura.')
    ]
  },
  {
    slug: 'atelier_process',
    name: '工坊过程',
    nameEn: 'Atelier Process',
    focus: '样衣、试衣、纸样和制作痕迹成为设计证据',
    focusEn: 'toile, fitting, pattern, and making traces becoming design evidence',
    defaultKind: 'function',
    defaultAffects: ['costume', 'symbol', 'material', 'wear'],
    defaultControls: ['atelier_process', 'fitting_mark', 'making_evidence'],
    items: [
      s('toile_identity', '白坯样衣身份', 'Toile Identity', 'function', '白坯布和纸样线直接成为角色视觉核心', 'muslin toile and pattern lines becoming visual core', ['白坯布', '纸样线', '外露缝份', '别针', '未完成边'], ['muslin', 'pattern lines', 'exposed seam allowance', 'pins', 'unfinished edge'], '外来元素优先成为样衣片、纸样线和制作过程。', 'Translate outside elements into toile panels, pattern lines, and making process.'),
      s('fitting_mark_cartography', '试衣标记地图', 'Fitting-Mark Cartography', 'symbol', '身体上的试衣线像地图一样组织细节', 'fitting lines on body organizing detail like a map', ['粉笔线', '针脚', '数字标记', '腰省线', '肩点'], ['chalk line', 'stitches', 'number marks', 'dart line', 'shoulder point'], '符号、时空或身份信息优先转成试衣标记。', 'Translate symbols, time-space, or identity info into fitting marks.'),
      s('pin_tension_system', '别针张力系统', 'Pin-Tension System', 'symbol', '别针和临时固定形成危险但可控的张力', 'pins and temporary fastening creating dangerous but controlled tension', ['别针', '临时扣合', '拉扯布料', '小金属点', '谨慎姿态'], ['pins', 'temporary closure', 'pulled fabric', 'small metal points', 'careful pose'], '危险、武装或疼痛元素必须服装化为临时固定。', 'Garment-translate danger, weaponry, or pain into temporary fastening.'),
      s('unfinished_luxury', '未完成奢华', 'Unfinished Luxury', 'material', '高端材料保持半完成状态', 'premium material kept half-finished', ['高级面料', '毛边', '松线', '半缝合', '裁片悬垂'], ['premium fabric', 'raw edge', 'loose thread', 'half seam', 'hanging panel'], '破损、废土或实验元素优先变成未完成制作痕迹。', 'Translate damage, wasteland, or experiment into unfinished making traces.'),
      s('pattern_paper_ritual', '纸样仪式', 'Pattern-Paper Ritual', 'symbol', '纸样像仪式文书一样贴近身体', 'pattern paper close to body like ritual document', ['纸样片', '裁剪线', '编号', '半透明纸', '手持纸片'], ['pattern paper', 'cut line', 'numbering', 'translucent paper', 'held paper'], '仪式、档案或职业元素优先纸样化。', 'Pattern-paper translate ritual, archive, or occupation elements.'),
      s('seam_allowance_exposure', '缝份外露', 'Seam-Allowance Exposure', 'structure', '服装内部结构被翻到外部', 'internal garment structure turned outward', ['外露缝份', '内外反穿', '明线', '结构边', '层次可见'], ['exposed allowance', 'inside-out wear', 'visible stitching', 'structural edge', 'visible layers'], '隐藏身份和副风格优先以结构外翻方式呈现。', 'Show hidden identity and secondary style through inside-out structure.'),
      s('measuring_tape_authority', '软尺权威', 'Measuring-Tape Authority', 'prop', '测量行为成为高定制度权力', 'measurement becoming couture institutional power', ['软尺', '颈部绕线', '手部测量', '数字标记', '冷静表情'], ['measuring tape', 'around neck', 'measuring hand', 'numbers', 'calm face'], '职业、控制和身体规训优先变成测量逻辑。', 'Translate occupation, control, and body discipline into measuring logic.'),
      s('model_fitting_vulnerability', '试衣模特脆弱', 'Fitting-Model Vulnerability', 'pose', '被调整的身体带有脆弱和专业性', 'adjusted body carrying vulnerability and professionalism', ['手臂微抬', '别针旁站立', '半完成衣物', '安静眼神', '不动姿态'], ['slightly raised arms', 'standing near pins', 'half-finished garment', 'quiet gaze', 'still pose'], '脆弱、职业和性感元素优先转成试衣中的受控身体。', 'Translate vulnerability, occupation, and sensuality into controlled fitting body.'),
      s('atelier_worker_couture', '工坊劳动高定', 'Atelier-Worker Couture', 'cultural_image', '高级时装背后的劳动身体进入角色', 'labor body behind couture entering the character', ['针插腕带', '围裙', '剪刀袋', '低头专注', '手部痕迹'], ['pin cushion wristband', 'apron', 'scissor pocket', 'focused lowered head', 'hand traces'], '职业和高定元素优先融合成工坊劳动证据。', 'Fuse occupation and couture into atelier labor evidence.'),
      s('prototype_as_final', '样衣即成衣', 'Prototype as Final', 'function', '原型状态被保留为最终美学', 'prototype state preserved as final aesthetic', ['白色结构', '标记未清', '半透明纸', '临时固定', '清晰轮廓'], ['white structure', 'uncleaned marks', 'translucent paper', 'temporary fastening', 'clear silhouette'], '实验元素必须保持高定原型逻辑，不变随机拼贴。', 'Keep experimental elements under couture prototype logic, not random collage.')
    ]
  },
  {
    slug: 'surface_craft',
    name: '表面工艺',
    nameEn: 'Surface Craft',
    focus: '珠绣、刺绣、钉珠、纹样密度和手工价值统摄细节',
    focusEn: 'beadwork, embroidery, appliques, motif density, and handmade value governing details',
    defaultKind: 'material',
    defaultAffects: ['material', 'symbol', 'costume'],
    defaultControls: ['surface_craft', 'handwork_density', 'motif_translation'],
    items: [
      s('beadwork_symbol_density', '珠绣符号密度', 'Beadwork Symbol Density', 'material', '符号被转成可近看的珠绣密度', 'symbols translated into close-readable beadwork density', ['珠绣', '细密亮点', '纹样聚集', '近景可读', '手工痕迹'], ['beadwork', 'dense highlights', 'motif cluster', 'close-up readability', 'handmade trace'], '符号、魔法和身份信息优先转成珠绣纹样。', 'Translate symbols, magic, and identity info into beadwork motifs.'),
      s('embroidery_archive', '刺绣档案', 'Embroidery Archive', 'symbol', '历史和记忆被绣在衣物表面', 'history and memory embroidered onto garment surface', ['细线刺绣', '重复图案', '袖口暗纹', '衣领文字', '低光线'], ['fine embroidery', 'repeated pattern', 'cuff damask', 'collar text', 'low sheen thread'], '历史、家族和人设信息优先刺绣化。', 'Embroidery-translate history, family, and persona information.'),
      s('metal_thread_power', '金属线权力', 'Metal-Thread Power', 'material', '金属线让权力和神圣感变得昂贵可控', 'metal thread making power and sacredness expensive and controlled', ['金属线', '暗金边', '肩部纹样', '胸前高光', '低调闪烁'], ['metal thread', 'dark gold edge', 'shoulder motif', 'chest highlight', 'subtle shimmer'], '贵族、宗教或科技元素优先转成金属线表面。', 'Translate aristocratic, religious, or tech elements into metal-thread surfaces.'),
      s('applique_relief_surface', '贴花浮雕表面', 'Applique Relief Surface', 'material', '贴花形成轻微浮雕和高级层次', 'applique creating slight relief and premium layering', ['立体贴花', '边缘阴影', '同色层', '手工边', '局部凸起'], ['3D applique', 'edge shadow', 'same-color layers', 'handmade edge', 'local relief'], '生物、花卉和符号元素优先贴花化，不直接长到身体上。', 'Applique-translate organic, floral, and symbolic elements instead of growing them on body.'),
      s('crystal_constellation', '水晶星座布局', 'Crystal-Constellation Layout', 'symbol', '水晶像星图一样组织亮点', 'crystals organizing highlights like a star map', ['水晶点', '星图排列', '肩颈闪点', '透明亮面', '深色底'], ['crystal points', 'constellation layout', 'neck-shoulder sparkle', 'clear shine', 'dark base'], '星空、魔法或奢华元素优先压缩成水晶星座布局。', 'Compress stars, magic, or luxury into crystal constellation layout.'),
      s('feather_craft_movement', '羽饰工艺动势', 'Feather-Craft Motion', 'material', '羽毛只作为工艺动势而非动物化身体', 'feathers as crafted motion, not animalized body', ['羽饰边', '肩部羽片', '轻微摆动', '渐变层', '柔软边缘'], ['feather edge', 'shoulder feathers', 'slight motion', 'gradient layers', 'soft edge'], '动物、仪式和舞台元素优先转成羽饰工艺。', 'Translate animal, ritual, and stage elements into feather craft.'),
      s('lace_shadow_map', '蕾丝阴影地图', 'Lace Shadow Map', 'material', '蕾丝投影组织遮蔽和显露', 'lace shadow organizing concealment and reveal', ['蕾丝', '皮肤阴影', '镂空纹', '袖口透明', '暗花'], ['lace', 'skin shadow', 'cutout motif', 'transparent cuff', 'dark floral'], '性感、神秘或哥特元素优先蕾丝化为遮蔽秩序。', 'Lace-translate sensual, mysterious, or gothic elements into concealment order.'),
      s('surface_craft_overload', '工艺过载', 'Craft Overload', 'material', '表面工艺接近过量但仍被结构控制', 'surface craft nearly excessive but structurally controlled', ['密集珠片', '满身纹样', '稳定廓形', '单色底', '近看复杂'], ['dense sequins', 'full-body motifs', 'stable silhouette', 'single-color base', 'complex close-up'], '复杂元素可以密集，但必须统一在一个工艺系统里。', 'Complex elements may be dense but must stay inside one craft system.'),
      s('repair_as_couture_craft', '修补即高定工艺', 'Repair as Couture Craft', 'material', '修补痕迹被提升为高级工艺', 'repair traces elevated into couture craft', ['金线修补', '精细补丁', '破口包边', '手缝线', '旧新对比'], ['gold repair thread', 'fine patch', 'bound tear', 'hand stitches', 'old-new contrast'], '废土、破损和贫穷元素优先高级修补化。', 'Couture-repair translate wasteland, damage, and poverty.'),
      s('tattoo_to_embroidery_rule', '纹身转刺绣规则', 'Tattoo-to-Embroidery Rule', 'symbol', '身体符号优先转移到服装表面', 'body signs preferentially moved to garment surface', ['刺绣纹身感', '贴身薄纱', '身体轮廓', '符号转移', '不改写皮肤'], ['embroidered tattoo feel', 'close tulle', 'body contour', 'symbol transfer', 'skin unchanged'], '身体异化或纹身元素优先服装表面化，保持人类身体干净。', 'Move body mutation or tattoo elements onto garment surface, keeping human body clean.')
    ]
  },
  {
    slug: 'body_discipline',
    name: '身体规训',
    nameEn: 'Body Discipline',
    focus: '束身、收腰、直立、慢动作和被服装管理的身体统摄角色',
    focusEn: 'corsetry, waist control, verticality, slow motion, and garment-managed body governing character',
    defaultKind: 'pose',
    defaultAffects: ['silhouette', 'pose', 'costume'],
    defaultControls: ['body_discipline', 'corset_logic', 'controlled_movement'],
    items: [
      s('corset_authority', '束身权威', 'Corset Authority', 'structure', '束身结构让身体被制度化服装重新组织', 'corsetry reorganizing body through institutional garment', ['束腰', '绑带', '硬挺腰线', '受控呼吸', '直背'], ['corset waist', 'lacing', 'rigid waistline', 'controlled breath', 'straight back'], '身体、权力和欲望优先转成束身结构，不改写身体本体。', 'Translate body, power, and desire into corsetry without rewriting body ontology.'),
      s('narrow_step_control', '窄步控制', 'Narrow-Step Control', 'pose', '服装限制步幅，姿态更高定', 'garment limiting stride for couture posture', ['窄步', '裙摆限制', '脚尖前指', '手部平衡', '慢速移动'], ['narrow step', 'hem restraint', 'toes forward', 'balancing hand', 'slow movement'], '动态动作优先被减速为受控高定步态。', 'Slow dynamic action into controlled couture gait.'),
      s('straight_neck_protocol', '直颈协议', 'Straight-Neck Protocol', 'pose', '肩颈线成为优雅和压迫的交界', 'neck-shoulder line as border between elegance and pressure', ['长颈', '肩部展开', '下巴平稳', '锁骨线', '发髻收紧'], ['long neck', 'open shoulder', 'steady chin', 'collarbone line', 'tight updo'], '贵族、神性和冷感元素优先转成肩颈线。', 'Translate aristocracy, divinity, and coolness into neck-shoulder line.'),
      s('gloved_hand_control', '手套手部控制', 'Gloved-Hand Control', 'pose', '手部姿态像服装细节一样被管理', 'hand pose managed like garment detail', ['长手套', '手指伸展', '轻触衣料', '手腕角度', '慢动作'], ['long gloves', 'extended fingers', 'touching fabric', 'wrist angle', 'slow motion'], '道具、欲望和身份优先进入手套手势。', 'Translate props, desire, and identity into gloved gestures.'),
      s('trained_stillness', '训练静止感', 'Trained Stillness', 'pose', '静止不是僵硬，而是被训练出的展示能力', 'stillness as trained display ability, not stiffness', ['几乎不动', '呼吸很慢', '眼神稳定', '衣物展开', '身体中轴'], ['almost still', 'slow breath', 'stable gaze', 'garment spread', 'body axis'], '情绪和冲突优先压缩为训练过的静止。', 'Compress emotion and conflict into trained stillness.'),
      s('exposed_back_tension', '露背张力', 'Exposed-Back Tension', 'structure', '背部暴露成为高级而危险的身体边界', 'exposed back as refined and dangerous body boundary', ['露背', '肩胛线', '细带', '直背', '头部微侧'], ['open back', 'scapula line', 'thin straps', 'straight spine', 'slight head turn'], '性感、脆弱和危险元素优先转成背部边界。', 'Translate sensuality, vulnerability, and danger into back boundary.'),
      s('waist_as_thesis', '腰线即论点', 'Waist as Thesis', 'structure', '腰线决定整套造型的哲学中心', 'waistline determining philosophical center of the whole look', ['收腰', '腰封', '上下比例', '手靠腰线', '中心收束'], ['cinched waist', 'waist cincher', 'upper-lower proportion', 'hand near waist', 'central convergence'], '所有冲突元素先围绕腰线重新分配。', 'Redistribute all conflicts around the waistline first.'),
      s('choreographed_restriction', '限制性编舞', 'Choreographed Restriction', 'pose', '服装限制成为动作美学', 'garment restriction becoming movement aesthetics', ['受限手臂', '窄步', '慢转身', '衣摆延迟', '克制表情'], ['restricted arms', 'narrow step', 'slow turn', 'delayed hem', 'restrained face'], '动态动作不能乱跳，必须被服装限制编舞化。', 'Dynamic action must be choreographed through garment restriction, not chaotic movement.'),
      s('ritualized_fitting_body', '仪式化试衣身体', 'Ritualized Fitting Body', 'pose', '被量体和试衣的身体带有仪式感', 'measured and fitted body carrying ritual feeling', ['手臂微抬', '软尺', '别针', '低眼神', '半完成衣物'], ['slightly raised arms', 'measuring tape', 'pins', 'lowered gaze', 'half-finished garment'], '职业、仪式和脆弱元素优先进入试衣身体。', 'Translate occupation, ritual, and vulnerability into fitting body.'),
      s('statue_model_hybrid', '雕像模特混合', 'Statue-Model Hybrid', 'cultural_image', '身体像雕像，姿态像模特', 'body like statue, posture like model', ['冷白皮肤光', '长线条', '无表情', '雕塑衣量', '正面凝固'], ['cool pale light', 'long line', 'no expression', 'sculptural volume', 'frontal freeze'], '神性和高定元素优先融合为雕像模特气场。', 'Fuse divinity and couture into statue-model aura.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'transparent_boundary',
    name: '透明遮蔽',
    nameEn: 'Transparent Boundary',
    focus: '薄纱、半透明层、遮蔽与显露关系统摄身体边界',
    focusEn: 'tulle, translucent layers, concealment-reveal relation governing body boundary',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'symbol', 'pose'],
    defaultControls: ['transparent_boundary', 'conceal_reveal', 'tulle_logic'],
    items: [
      s('organza_body_mist', '欧根纱身体雾', 'Organza Body Mist', 'material', '半透明纱层让身体边界变得昂贵而不确定', 'translucent organza making body boundary expensive and uncertain', ['欧根纱', '雾感边缘', '半透明披层', '柔光', '身体若隐若现'], ['organza', 'mist edge', 'translucent overlay', 'soft light', 'body half-seen'], '神秘、科幻或性感元素优先纱层化。', 'Tulle-translate mystery, sci-fi, or sensuality.'),
      s('veil_as_interface', '面纱即界面', 'Veil as Interface', 'symbol', '面纱成为角色和观看者之间的界面', 'veil as interface between character and viewer', ['面纱', '遮眼', '脸部阴影', '细网', '冷静站姿'], ['veil', 'covered eyes', 'face shadow', 'fine mesh', 'calm stance'], '身份、仪式和技术界面优先转成面纱关系。', 'Translate identity, ritual, and tech interface into veil relation.'),
      s('sheer_armor_paradox', '透明护甲悖论', 'Sheer-Armor Paradox', 'structure', '脆弱透明层承担防护象征', 'fragile transparent layer carrying protection symbolism', ['透明硬片', '薄膜护肩', '光泽边线', '轻型胸甲', '身体可见'], ['clear hard panel', 'film shoulder', 'gloss edge', 'light breastplate', 'visible body'], '武装和脆弱元素优先融合为透明防护层。', 'Fuse armed and vulnerable elements into transparent protection layers.', { ontologyLevel: 2, risk: 'medium' }),
      s('skin_not_mutated_rule', '皮肤不异化规则', 'Skin-Not-Mutated Rule', 'function', '异常纹理优先投射到透明衣层，不改写皮肤', 'abnormal texture projected onto transparent garment, not skin', ['透明贴身层', '印花叠影', '皮肤干净', '衣物纹理', '边缘可见'], ['transparent close layer', 'print overlay', 'clean skin', 'garment texture', 'visible edge'], '异化和超现实元素先转移到衣层，保持人类身体。', 'Move mutation and surreal elements onto garment layer first, keeping human body.'),
      s('revealed_structure_lines', '显露结构线', 'Revealed Structure Lines', 'symbol', '透明层让内部结构线可见', 'transparent layers revealing internal structure lines', ['骨架线', '缝线', '胸衣支撑', '内层色', '裁片重叠'], ['boning lines', 'seams', 'bodice support', 'inner color', 'overlapped panels'], '隐藏信息优先通过透明层显露结构。', 'Reveal hidden information through transparent structure.'),
      s('wet_glass_couture', '湿玻璃高定', 'Wet-Glass Couture', 'material', '湿亮透明材料制造冷艳边界', 'wet glossy transparent material creating cold glamour boundary', ['湿亮表面', '透明片', '冷光', '贴身边缘', '水感高光'], ['wet glossy surface', 'clear pieces', 'cold light', 'close edge', 'water-like highlight'], '水、夜场和科幻元素优先变成湿玻璃高定材料。', 'Translate water, nightlife, and sci-fi into wet-glass couture material.', { ontologyLevel: 2, risk: 'medium' }),
      s('modesty_through_transparency', '透明中的端庄', 'Modesty Through Transparency', 'function', '透明不等于裸露，而是高级遮蔽制度', 'transparency as refined concealment system, not nudity', ['多层薄纱', '关键遮挡', '柔和肤色', '长线条', '安静姿态'], ['multiple tulle layers', 'key coverage', 'soft skin tone', 'long lines', 'quiet pose'], '显性欲望和暴露元素必须转成可控遮蔽层次。', 'Translate explicit desire and exposure into controlled concealment layers.'),
      s('ghost_couture_layer', '幽灵高定层', 'Ghost-Couture Layer', 'cultural_image', '透明层让角色像被历史或记忆包裹', 'transparent layers making character wrapped by history or memory', ['白纱', '旧影感', '拖尾', '半透明袖', '低饱和'], ['white tulle', 'old-shadow feel', 'train', 'translucent sleeves', 'low saturation'], '幽灵、历史和哀悼元素优先转成透明高定层。', 'Translate ghost, history, and mourning into transparent couture layers.', { ontologyLevel: 3, risk: 'medium' }),
      s('censor_bar_couture', '遮挡条高定', 'Censor-Bar Couture', 'symbol', '遮挡关系成为服装构图', 'censoring relation becoming garment composition', ['横向遮挡', '黑色薄带', '局部留白', '身体分区', '冷感表情'], ['horizontal cover', 'thin black band', 'local blank', 'body zoning', 'cool expression'], '禁忌、媒体和欲望元素优先变成服装遮挡构图。', 'Translate taboo, media, and desire into garment censoring composition.'),
      s('transparent_data_skin', '透明数据衣层', 'Transparent Data Layer', 'ontology', '数据感只在透明服装表层出现', 'data feeling only on transparent garment surface', ['透明薄层', '细小字符', '光点', '边缘接口', '皮肤不变'], ['transparent layer', 'tiny characters', 'light points', 'edge interface', 'unchanged skin'], '赛博或数据元素必须停留在透明衣层和边缘接口。', 'Keep cyber or data elements on transparent garment layer and edge interface.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future', 'timeless'] })
    ]
  },
  {
    slug: 'armored_couture',
    name: '装甲高定',
    nameEn: 'Armored Couture',
    focus: '硬壳、护片、防护结构和服装工程吸收武装元素',
    focusEn: 'shells, plates, protection structure, and garment engineering absorbing armed elements',
    defaultKind: 'structure',
    defaultAffects: ['costume', 'material', 'silhouette', 'prop'],
    defaultControls: ['armored_couture', 'protective_garment', 'decorative_armor'],
    items: [
      s('ceremonial_breastplate_gown', '礼仪胸甲礼服', 'Ceremonial Breastplate Gown', 'structure', '胸甲成为礼服结构而非战斗装备', 'breastplate as gown structure rather than combat gear', ['硬质胸片', '金属边', '长裙摆', '直立姿态', '礼仪光泽'], ['hard chest piece', 'metal edge', 'long skirt', 'upright stance', 'ceremonial sheen'], '武装元素必须高定化为礼仪胸甲和礼服结构。', 'Couture-translate armed elements into ceremonial breastplate and gown structure.'),
      s('shoulder_guard_couture', '护肩高定化', 'Shoulder-Guard Couture', 'structure', '护肩成为雕塑肩线', 'shoulder guards becoming sculptural shoulder line', ['硬护肩', '不对称肩', '金属或树脂', '长颈线', '冷脸'], ['hard shoulder guard', 'asymmetric shoulder', 'metal or resin', 'long neck line', 'cool face'], '战斗、机甲或权力元素优先转成护肩肩线。', 'Translate combat, mecha, or power into shoulder-guard line.'),
      s('soft_armor_lacing', '软甲绑带', 'Soft-Armor Lacing', 'function', '防护被束身和绑带系统吸收', 'protection absorbed by corsetry and lacing system', ['软甲片', '绑带', '腰封', '哑光材料', '受控动作'], ['soft plates', 'lacing', 'waist cincher', 'matte material', 'controlled motion'], '战术和身体规训优先融合为软甲绑带。', 'Fuse tactical and body discipline into soft-armor lacing.'),
      s('blade_as_silhouette', '刀锋变廓形', 'Blade as Silhouette', 'symbol', '刀锋感转成剪影尖锐度，不直接拿武器', 'blade feeling translated into silhouette sharpness, not held weapon', ['尖角衣摆', '锋利肩线', '窄长线', '冷光边', '手部克制'], ['pointed hem', 'sharp shoulder', 'long narrow line', 'cold edge highlight', 'restrained hands'], '武器元素优先转成剪影和边缘，不堆武器。', 'Translate weapon elements into silhouette and edges, not weapon piles.'),
      s('chainmail_embroidery', '锁子甲刺绣', 'Chainmail Embroidery', 'material', '锁甲被高定工艺细密化', 'chainmail refined into couture craft density', ['细金属网', '珠绣锁链', '肩胸覆盖', '柔软垂坠', '近景质感'], ['fine metal mesh', 'beaded chain', 'shoulder-chest cover', 'soft drape', 'close texture'], '中世纪、战斗和科技元素优先转成金属网工艺。', 'Translate medieval, combat, and tech elements into metal mesh craft.'),
      s('combat_to_gala_rule', '战斗转晚宴规则', 'Combat-to-Gala Rule', 'function', '暴力元素必须先晚宴化和礼仪化', 'violent elements must be gala- and etiquette-translated first', ['礼服结构', '隐藏护具', '小型金属', '冷静站姿', '无血迹'], ['formalwear structure', 'hidden protection', 'small metal', 'calm stance', 'no blood'], '战斗、刺客和护卫元素优先转成晚宴防护礼服。', 'Translate combat, assassin, and guard elements into gala-protection formalwear.'),
      s('exosuit_as_corset', '外骨骼即束身', 'Exosuit as Corset', 'ontology', '机械支撑必须服装化为束身骨架', 'mechanical support must be garment-translated into corset boning', ['机械骨架暗示', '束身线', '小接口', '哑光金属', '皮肤接口克制'], ['mechanical skeleton hint', 'corset lines', 'small ports', 'matte metal', 'restrained skin interface'], '机械增强只允许作为服装支撑和小接口。', 'Allow mechanical augmentation only as garment support and small interfaces.', { ontologyLevel: 4, risk: 'high', eras: ['contemporary', 'near_future', 'far_future', 'timeless'] }),
      s('trophy_armor_glamour', '战利品护甲魅力', 'Trophy-Armor Glamour', 'symbol', '护甲像战利品一样被展示和装饰', 'armor displayed and ornamented like trophy', ['抛光护片', '胸前中心', '暗金边', '珠宝固定点', '胜利姿态'], ['polished plate', 'chest center', 'dark gold edge', 'jewel anchor', 'victory pose'], '胜利、贵族和战斗元素优先转成战利品式护甲魅力。', 'Translate victory, aristocracy, and combat into trophy-armor glamour.'),
      s('transparent_plate_protection', '透明护片防护', 'Transparent-Plate Protection', 'structure', '透明硬片兼具展示和防护', 'transparent hard plates serving display and protection', ['透明护片', '边缘高光', '皮肤可见', '肩胸保护', '轻薄外壳'], ['clear plates', 'edge highlight', 'visible skin', 'shoulder-chest protection', 'thin shell'], '科幻和脆弱元素优先转成透明护片。', 'Translate sci-fi and vulnerability into transparent plates.', { ontologyLevel: 2, risk: 'medium' }),
      s('armored_red_carpet', '装甲红毯', 'Armored Red Carpet', 'cultural_image', '红毯明星感和防护性同框', 'red-carpet celebrity feeling and protection in one image', ['闪光硬片', '长裙', '墨镜或冷脸', '金属高光', '站姿强势'], ['shiny plates', 'long gown', 'sunglasses or cool face', 'metal highlight', 'dominant stance'], '明星和武装元素优先融合成装甲红毯形象。', 'Fuse celebrity and armed elements into armored red-carpet image.')
    ]
  },
  {
    slug: 'ritual_couture',
    name: '仪式高定',
    nameEn: 'Ritual Couture',
    focus: '法衣、圣物、遮蔽、拖尾和神圣展示被高定化',
    focusEn: 'vestment, relic, concealment, train, and sacred display couture-translated',
    defaultKind: 'symbol',
    defaultAffects: ['costume', 'symbol', 'pose', 'material'],
    defaultControls: ['ritual_couture', 'vestment_logic', 'sacred_display'],
    items: [
      s('vestment_gown_hybrid', '法衣礼服混合', 'Vestment-Gown Hybrid', 'cultural_image', '法衣层级和晚礼服结构融合', 'vestment hierarchy and evening-gown structure fused', ['长袍层', '拖尾', '圣职色', '刺绣符号', '静止姿态'], ['robe layers', 'train', 'clerical colors', 'embroidered signs', 'still pose'], '宗教和高定元素优先融合为法衣礼服。', 'Fuse religion and couture into vestment gown.'),
      s('reliquary_accessory_system', '圣物配饰系统', 'Reliquary Accessory System', 'prop', '配饰像圣物容器而非普通珠宝', 'accessories as reliquary containers rather than normal jewelry', ['小圣匣', '胸前容器', '金属边', '细链', '谨慎手势'], ['small reliquary', 'chest container', 'metal edge', 'thin chain', 'careful gesture'], '魔法、记忆和贵族元素优先圣物配饰化。', 'Reliquary-accessory translate magic, memory, and aristocracy.'),
      s('processional_train', '游行拖尾', 'Processional Train', 'pose', '拖尾像仪式队列一样延展', 'train extending like ceremonial procession', ['长拖尾', '后方延伸', '慢步', '两侧对称', '庄重重心'], ['long train', 'rear extension', 'slow steps', 'bilateral symmetry', 'solemn weight'], '场景、队伍和仪式元素优先压缩到拖尾长度与步态。', 'Compress scene, procession, and ritual elements into train length and gait.'),
      s('sacrificial_white_couture', '献祭白高定', 'Sacrificial White Couture', 'material', '白色材料承载洁净、危险和牺牲', 'white material carrying purity, danger, and sacrifice', ['白纱', '珍珠', '空白胸口', '手套', '克制表情'], ['white tulle', 'pearls', 'blank chest', 'gloves', 'restrained face'], '献祭、神性和脆弱元素优先转成白色高定秩序。', 'Translate sacrifice, divinity, and vulnerability into white couture order.'),
      s('black_mass_couture', '黑弥撒高定', 'Black-Mass Couture', 'cultural_image', '黑暗仪式被高级材料收束', 'dark ritual contained by premium material', ['黑丝绒', '暗金刺绣', '高领', '烛蜡感', '低头姿态'], ['black velvet', 'dark gold embroidery', 'high collar', 'wax feeling', 'lowered head'], '黑暗元素必须材料化和仪式化，避免恐怖片场景。', 'Materialize and ritualize dark elements, avoiding horror scenery.'),
      s('oracle_veil_couture', '神谕面纱高定', 'Oracle-Veil Couture', 'symbol', '遮眼和半透明层制造不可直视感', 'covered eyes and translucent layers creating unreadability', ['遮眼纱', '透明层', '静默表情', '手势', '长线条'], ['eye veil', 'transparent layer', 'silent expression', 'gesture', 'long line'], '神秘、预言和AI元素优先转成面纱界面。', 'Translate mystery, prophecy, and AI elements into veil interface.', { ontologyLevel: 3, risk: 'medium' }),
      s('saint_icon_silhouette', '圣像剪影', 'Saint-Icon Silhouette', 'symbol', '角色像时装化圣像但不使用真实宗教图标', 'character like fashionized icon without real religious icons', ['圆形头部光感', '正面静止', '金线边', '长袍轮廓', '双手收拢'], ['halo-like head light', 'frontal stillness', 'gold edge', 'robe silhouette', 'gathered hands'], '神性元素优先转成抽象圣像构图，不使用真实符号。', 'Translate divinity into abstract icon composition, avoiding real sacred signs.', { ontologyLevel: 3, risk: 'medium' }),
      s('penitent_luxury', '苦修奢华', 'Penitent Luxury', 'material', '粗粝克制和高级制作形成矛盾', 'rough restraint and premium making forming contradiction', ['粗布质感', '精细边线', '绳结', '低饱和', '低头姿态'], ['coarse cloth feel', 'fine edges', 'cord knots', 'low saturation', 'lowered head'], '贫穷、宗教和高定元素优先融合为苦修奢华。', 'Fuse poverty, religion, and couture into penitent luxury.'),
      s('ceremonial_color_hierarchy', '仪式色阶层', 'Ceremonial Color Hierarchy', 'material', '颜色按神圣等级组织，而非自由搭配', 'colors organized by sacred rank, not free styling', ['主色', '边缘色', '内衬色', '圣职色', '低对比'], ['main color', 'edge color', 'lining color', 'vestment color', 'low contrast'], '色彩冲突优先按仪式等级分配。', 'Assign color conflict by ceremonial hierarchy.'),
      s('ritual_body_stillness', '仪式身体静止', 'Ritual Body Stillness', 'pose', '身体像仪式器具一样稳定', 'body stable like a ritual object', ['正面', '手势固定', '低速', '目光不散', '衣摆对称'], ['frontal body', 'fixed gesture', 'slow speed', 'steady gaze', 'symmetrical hem'], '动作和情绪必须先被仪式静止收束。', 'Contain action and emotion through ritual stillness first.')
    ]
  },
  {
    slug: 'red_carpet_celebrity',
    name: '红毯明星',
    nameEn: 'Red-Carpet Celebrity',
    focus: '明星曝光、镜头闪光、社交地位和礼服记忆点统摄角色',
    focusEn: 'celebrity exposure, camera flash, social status, and gown signature governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['pose', 'costume', 'material', 'symbol'],
    defaultControls: ['red_carpet', 'celebrity_exposure', 'memorable_gown'],
    items: [
      s('flashbulb_gown_identity', '闪光灯礼服身份', 'Flashbulb Gown Identity', 'cultural_image', '礼服必须在闪光灯下形成记忆点', 'gown must form a signature under flashbulbs', ['高光面料', '红毯站姿', '手扶腰', '镜头微笑', '清楚轮廓'], ['highlight fabric', 'red-carpet stance', 'hand on waist', 'camera smile', 'clear silhouette'], '明星、媒体和高定元素优先组织成红毯记忆点。', 'Organize celebrity, media, and couture elements into red-carpet signature.'),
      s('paparazzi_turn_pose', '狗仔转身姿态', 'Paparazzi Turn Pose', 'pose', '转身瞬间展示背部和侧面结构', 'turning moment displaying back and side structure', ['回头', '露背', '侧身线', '拖尾', '闪光高光'], ['looking back', 'open back', 'side line', 'train', 'flash highlight'], '媒体和性感元素优先转成转身展示姿态。', 'Translate media and sensuality into turning display pose.'),
      s('award_night_armor', '颁奖夜护甲', 'Award-Night Armor', 'structure', '红毯礼服像社交护甲', 'red-carpet gown as social armor', ['硬挺胸衣', '金属边', '长裙', '冷静表情', '直立姿态'], ['stiff bodice', 'metal edge', 'long gown', 'calm face', 'upright stance'], '武装和社交压力优先融合为颁奖夜护甲。', 'Fuse armed elements and social pressure into award-night armor.'),
      s('celebrity_disguise_couture', '明星伪装高定', 'Celebrity-Disguise Couture', 'cultural_image', '想隐藏却仍被识别的明星服装', 'celebrity outfit trying to hide yet still recognizable', ['墨镜', '头巾或帽', '大外套', '高级鞋包', '疲惫表情'], ['sunglasses', 'scarf or cap', 'large coat', 'premium shoes-bag', 'tired face'], '街头、明星和高定优先融合为伪装下的曝光。', 'Fuse street, celebrity, and couture into exposure under disguise.'),
      s('single_signature_cutout', '单一记忆镂空', 'Single Signature Cutout', 'structure', '一个镂空成为全身记忆点', 'one cutout becoming the full-body signature', ['单一镂空', '干净边缘', '皮肤留白', '长线条', '其他克制'], ['single cutout', 'clean edge', 'skin negative space', 'long line', 'other details restrained'], '性感和图形元素只能保留一个明确镂空重点。', 'Keep sensual and graphic elements as one clear cutout focal point.'),
      s('train_as_media_event', '拖尾即媒体事件', 'Train as Media Event', 'structure', '拖尾大到成为可传播事件', 'train large enough to become a media event', ['超长拖尾', '展开面积', '手部管理', '慢步', '镜头尺度'], ['extra-long train', 'spread area', 'hand management', 'slow walk', 'camera scale'], '戏剧和身份元素优先转成可传播拖尾事件。', 'Translate drama and identity into shareable train event.'),
      s('jewelry_flash_hierarchy', '珠宝闪光等级', 'Jewelry-Flash Hierarchy', 'symbol', '珠宝按镜头高光组织权力', 'jewelry organizing power by camera highlights', ['耳饰高光', '颈部亮点', '手部戒指', '胸前反光', '少量重点'], ['earring highlight', 'neck sparkle', 'hand ring', 'chest reflection', 'few accents'], '财富和贵族元素优先按镜头闪光等级分配。', 'Assign wealth and aristocracy by camera-flash hierarchy.'),
      s('scandal_control_gown', '丑闻控制礼服', 'Scandal-Control Gown', 'cultural_image', '危险信息被礼服体面压住', 'dangerous information suppressed by gown respectability', ['端庄外层', '暗色内衬', '紧张手指', '冷静微笑', '完美轮廓'], ['proper outer layer', 'dark lining', 'tense fingers', 'calm smile', 'perfect silhouette'], '犯罪、秘密和欲望优先藏进体面的红毯结构。', 'Hide crime, secret, and desire inside respectable red-carpet structure.'),
      s('afterparty_couture_fatigue', '派对后高定疲惫', 'Afterparty Couture Fatigue', 'pose', '高定礼服经历夜晚后的精致疲态', 'couture gown with refined fatigue after the night', ['妆面残留', '外套搭肩', '松掉发丝', '手拿高跟鞋暗示', '疲惫眼神'], ['makeup residue', 'coat over shoulders', 'loose hair', 'heels-in-hand hint', 'tired gaze'], '夜场和明星元素优先转成派对后高定疲态。', 'Translate nightlife and celebrity elements into afterparty couture fatigue.'),
      s('red_carpet_identity_board', '红毯身份板化', 'Red-Carpet Identity Board', 'function', '红毯造型被整理为角色设定板可读结构', 'red-carpet look organized into readable character identity-board structure', ['主礼服视图', '背面拖尾', '珠宝近景', '材料小格', '色条'], ['main gown view', 'back train', 'jewelry close-up', 'material cells', 'palette strip'], '所有明星奇观必须服务角色身份板，而非海报场景。', 'All celebrity spectacle must serve character identity board, not poster scene.')
    ]
  },
  {
    slug: 'experimental_material',
    name: '实验材料',
    nameEn: 'Experimental Material',
    focus: '非传统材料、未来表面、生物/技术边界和高定实验性统摄角色',
    focusEn: 'unconventional materials, future surface, bio/tech boundary, and couture experimentation governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'silhouette', 'costume', 'symbol'],
    defaultControls: ['experimental_material', 'future_surface', 'couture_research'],
    items: [
      s('liquid_metal_couture', '液态金属高定', 'Liquid-Metal Couture', 'material', '金属像布料一样流动', 'metal flowing like fabric', ['液态银', '流动高光', '贴身曲面', '冷光', '无硬边'], ['liquid silver', 'flowing highlight', 'close curved surface', 'cold light', 'no hard edge'], '技术和奢华元素优先转成液态金属材料。', 'Translate tech and luxury into liquid-metal material.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future', 'timeless'] }),
      s('bio_fabric_control', '生物织物控制', 'Bio-Fabric Control', 'ontology', '生物感只作为材料行为，不改写身体', 'biological feeling as material behavior, not body rewrite', ['微纹理', '膜状布', '呼吸感边缘', '柔软生长', '服装边界'], ['micro texture', 'membrane fabric', 'breathing edge', 'soft growth', 'garment boundary'], '生物和异化元素必须先服装材料化。', 'Bio- and mutation elements must become garment material first.', { ontologyLevel: 4, risk: 'high' }),
      s('paper_couture_structure', '纸质高定结构', 'Paper Couture Structure', 'material', '纸张和折叠形成脆弱建筑', 'paper and folds forming fragile architecture', ['折纸边', '白色纸感', '硬脆结构', '裁剪线', '轻响质感'], ['paper fold edge', 'white paper feel', 'crisp structure', 'cut line', 'rustling texture'], '档案、仪式和脆弱元素优先转成纸质高定。', 'Translate archive, ritual, and fragility into paper couture.'),
      s('inflatable_couture_volume', '充气高定体积', 'Inflatable Couture Volume', 'structure', '空气成为服装结构材料', 'air becoming garment structure material', ['充气体块', '透明或哑光膜', '圆润边缘', '轻量巨大', '未来感'], ['inflated mass', 'clear or matte film', 'rounded edge', 'light giant volume', 'future feel'], '奇观元素优先转成充气体积，保持轮廓清楚。', 'Translate spectacle into inflatable volume while keeping silhouette clear.', { ontologyLevel: 2, risk: 'medium' }),
      s('recycled_luxury_material', '再生奢华材料', 'Recycled Luxury Material', 'material', '回收材料被高级工艺重新组织', 'recycled material reorganized by couture craft', ['再生塑料', '拼接边', '高级收边', '半透明片', '克制配色'], ['recycled plastic', 'spliced edge', 'premium finishing', 'translucent pieces', 'restrained palette'], '废土和环保元素优先高定再生材料化。', 'Couture-recycle wasteland and ecological elements.'),
      s('glass_fiber_veil', '玻纤面纱', 'Glass-Fiber Veil', 'material', '玻璃纤维感制造危险轻薄边界', 'glass-fiber feeling creating dangerous light boundary', ['透明纤维', '硬亮边', '细网', '冷光', '遮脸'], ['clear fiber', 'hard shiny edge', 'fine net', 'cold light', 'face cover'], '技术、脆弱和神秘元素优先转成玻纤面纱。', 'Translate tech, fragility, and mystery into glass-fiber veil.', { ontologyLevel: 3, risk: 'medium' }),
      s('temperature_reactive_fabric', '温变织物', 'Temperature-Reactive Fabric', 'material', '材料随身体热度改变色泽', 'material changing color with body heat', ['渐变色', '局部热痕', '贴身区域', '柔和变色', '实验标签'], ['gradient color', 'local heat mark', 'close-body area', 'soft color shift', 'experiment tag'], '情绪和身体状态优先转成材料温变。', 'Translate emotion and body state into temperature-reactive material.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future'] }),
      s('sound_reactive_surface', '声响应表面', 'Sound-Reactive Surface', 'ontology', '音乐或声音只让服装表面产生局部反应', 'music or sound causing local garment-surface reaction only', ['微光点', '震动边缘', '胸前纹理', '袖口反应', '黑底材料'], ['tiny lights', 'vibrating edge', 'chest texture', 'reactive cuff', 'black-base material'], '音乐和科幻元素必须局部表面化，不变成场景特效。', 'Make music and sci-fi local surface behavior, not scene VFX.', { ontologyLevel: 4, risk: 'high', eras: ['near_future', 'far_future', 'timeless'] }),
      s('ceramic_couture_shell', '陶瓷高定壳', 'Ceramic Couture Shell', 'material', '陶瓷硬壳带来冷白、脆弱和雕塑感', 'ceramic shell bringing cold white fragility and sculptural feeling', ['陶瓷白', '裂纹釉', '硬壳片', '冷光', '雕塑姿态'], ['ceramic white', 'crackle glaze', 'hard shell pieces', 'cold light', 'sculptural pose'], '神性、脆弱和护甲元素优先转成陶瓷高定壳。', 'Translate divinity, fragility, and armor into ceramic couture shell.'),
      s('future_archive_textile', '未来档案织物', 'Future-Archive Textile', 'symbol', '织物像存储介质一样记录身份', 'textile recording identity like storage medium', ['细小编号', '透明标签', '织入文字', '数据边线', '干净白灰'], ['tiny numbers', 'clear tag', 'woven text', 'data edge line', 'clean white-grey'], '档案、AI和身份信息优先转成未来织物记录。', 'Translate archive, AI, and identity info into future-textile record.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future', 'timeless'] })
    ]
  }
];

export const COUTURE_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
