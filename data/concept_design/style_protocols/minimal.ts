import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'MINIMAL';
const ROUTE_NAME = '极简精度';
const ROUTE_NAME_EN = 'Minimal Precision';
const ERAS = ['modern', 'contemporary', 'near_future', 'timeless'];
const FORBIDS = ['奇观堆叠', '过度装饰', '随机赛博化', '大面积花纹抢主身份', '无解释异形化', '真实品牌 logo'];

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
    slug: 'clean_line',
    name: '干净长线',
    nameEn: 'Clean Long Line',
    focus: '长线条、清楚边界、少量层次和准确比例统摄角色',
    focusEn: 'long lines, clear boundaries, few layers, and accurate proportion governing character',
    defaultKind: 'structure',
    defaultAffects: ['silhouette', 'costume', 'pose', 'face'],
    defaultControls: ['clean_line', 'clear_boundary', 'long_proportion'],
    items: [
      s('single_vertical_axis', '单一纵轴', 'Single Vertical Axis', 'structure', '角色由一条清楚纵向轴线统摄', 'character governed by one clear vertical axis', ['直立线', '长外套或长裙', '少层次', '中心闭合', '安静站姿'], ['upright line', 'long coat or skirt', 'few layers', 'center closure', 'quiet stance'], '复杂元素必须沿单一纵轴排列。', 'Arrange complex elements along one vertical axis.'),
      s('unbroken_outer_contour', '连续外轮廓', 'Unbroken Outer Contour', 'structure', '外轮廓尽量不被配件打断', 'outer contour kept mostly uninterrupted by accessories', ['连续边线', '少挂件', '平滑肩袖', '完整下摆', '远看可读'], ['continuous edge', 'few hang-ons', 'smooth shoulder-sleeve', 'complete hem', 'readable from afar'], '道具和装饰必须退到轮廓内部。', 'Move props and ornament inside the silhouette.'),
      s('narrow_layer_stack', '窄层叠放', 'Narrow Layer Stack', 'costume', '多层服装也保持窄而整齐的层距', 'layered garments still kept narrow and orderly', ['窄领口层', '袖口层差', '低厚度', '同向边', '克制色差'], ['narrow neck layers', 'cuff layer difference', 'low thickness', 'same-direction edges', 'restrained color gap'], '层次元素必须窄距、同向、低体积。', 'Keep layered elements narrow, aligned, and low-volume.'),
      s('long_sleeve_readability', '长袖可读性', 'Long-Sleeve Readability', 'costume', '长袖拉长身体但保留手部识别', 'long sleeves lengthening body while keeping hands readable', ['长袖线', '手指露出', '袖口干净', '垂直褶', '轻微余量'], ['long sleeve line', 'visible fingers', 'clean cuff', 'vertical folds', 'slight ease'], '手部和服装冲突优先用袖口留白解决。', 'Resolve hand-garment conflict through cuff negative space.'),
      s('face_framing_line', '面部框线', 'Face-Framing Line', 'face', '发型、领口或头饰只作为脸部清晰框架', 'hair, collar, or headpiece only framing the face clearly', ['脸部框线', '额头留白', '下颌清楚', '少碎发', '眼神中心'], ['face frame', 'forehead negative space', 'clear jaw', 'few flyaways', 'gaze center'], '头部装饰必须服务脸部识别。', 'Head ornament must serve facial recognition.'),
      s('long_step_pause', '长步停顿', 'Long-Step Pause', 'pose', '姿态像刚停下的一步，拉出身体长线', 'pose like one just-paused step, stretching body line', ['一脚前移', '肩线稳定', '手臂自然', '衣摆轻落', '低戏剧'], ['one foot forward', 'stable shoulder line', 'natural arms', 'soft falling hem', 'low drama'], '动态元素优先收束为长步停顿。', 'Constrain motion into long-step pause.'),
      s('thin_edge_highlight', '薄边高光', 'Thin-Edge Highlight', 'material', '只用薄边高光说明材质和结构', 'using only thin edge highlights to show material and structure', ['细高光', '边缘线', '低反差', '硬软分界', '少面积亮点'], ['thin highlight', 'edge line', 'low contrast', 'hard-soft boundary', 'small bright points'], '光效必须只落在关键边缘。', 'Place light effects only on key edges.'),
      s('reduced_profile_view', '压缩侧影', 'Reduced Profile View', 'structure', '侧面视图保持薄而准确的厚度', 'profile view kept thin with accurate thickness', ['薄侧影', '肩背厚度清楚', '无夸张包', '鼻梁线', '脚跟线'], ['thin profile', 'clear shoulder-back depth', 'no huge bag', 'nose bridge line', 'heel line'], '体积元素必须在侧影里被压缩。', 'Compress volume elements in profile.'),
      s('one_cut_hemline', '一刀下摆', 'One-Cut Hemline', 'costume', '下摆像一次裁切完成，干净决定比例', 'hemline like one decisive cut, cleanly setting proportion', ['直下摆', '一条线', '无碎边', '裤裙比例清楚', '稳定站姿'], ['straight hem', 'one line', 'no fray', 'clear trouser-skirt proportion', 'stable stance'], '下摆装饰必须服从一刀切线。', 'Hem decoration must obey the one-cut line.'),
      s('line_not_empty', '线条非空洞', 'Line Not Empty', 'symbol', '极简线条必须有身份功能，不是删光细节', 'minimal line must carry identity function, not merely delete detail', ['少而准', '身份锚点', '轮廓清楚', '一个焦点', '细节有用'], ['few but precise', 'identity anchor', 'clear silhouette', 'one focal point', 'useful details'], '删除细节前必须保留身份锚点。', 'Keep identity anchors before removing details.')
    ]
  },
  {
    slug: 'neutral_material',
    name: '中性材料',
    nameEn: 'Neutral Material',
    focus: '棉、羊毛、哑光皮革、纸感和低反光真实材料统摄角色',
    focusEn: 'cotton, wool, matte leather, paper feel, and low-reflection real materials governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'color', 'wear'],
    defaultControls: ['neutral_material', 'matte_surface', 'real_texture'],
    items: [
      s('matte_cotton_surface', '哑光棉面', 'Matte Cotton Surface', 'material', '棉面消解夸张风格，让角色可信', 'cotton surface calming exaggerated style and making character believable', ['哑光棉', '细皱', '低反光', '自然垂坠', '日常触感'], ['matte cotton', 'fine wrinkles', 'low reflection', 'natural drape', 'daily tactility'], '夸张材料优先降噪成哑光棉面。', 'Lower exaggerated materials into matte cotton.'),
      s('plain_wool_weight', '素羊毛重量', 'Plain Wool Weight', 'material', '羊毛重量带来安静的体面和保暖逻辑', 'wool weight bringing quiet dignity and warmth logic', ['素羊毛', '厚薄适中', '柔软边', '保暖领口', '灰褐色'], ['plain wool', 'moderate thickness', 'soft edge', 'warm collar', 'gray-brown'], '贵族和职业元素可压低为素羊毛重量。', 'Lower aristocratic and occupational elements into plain wool weight.'),
      s('matte_leather_small_area', '小面积哑光皮', 'Small-Area Matte Leather', 'material', '皮革只小面积出现，负责耐用和边界', 'leather appearing only in small areas for durability and edges', ['哑光皮革', '腰带或鞋', '低亮度', '旧折痕', '无机车堆叠'], ['matte leather', 'belt or shoes', 'low shine', 'old creases', 'no biker pile-up'], '危险感优先收束到小面积皮革。', 'Constrain danger into small leather areas.'),
      s('paper_like_fabric', '纸感面料', 'Paper-Like Fabric', 'material', '纸感让衣物有轻薄、干净和脆弱秩序', 'paper feel giving clothing light, clean, fragile order', ['纸感布', '直折线', '浅米白', '轻微透明', '安静边'], ['paper-like cloth', 'straight fold', 'pale off-white', 'slight translucency', 'quiet edge'], '脆弱和实验元素优先转成纸感面料。', 'Translate fragility and experiment into paper-like fabric.'),
      s('brushed_metal_pin', '拉丝金属小件', 'Brushed Metal Small Piece', 'prop', '金属只作为小型扣件或别针', 'metal only as small clasp or pin', ['拉丝金属', '小扣件', '低反光', '一个位置', '功能明确'], ['brushed metal', 'small clasp', 'low reflection', 'one placement', 'clear function'], '科技和奢华金属必须小件化。', 'Make tech and luxury metal into small pieces.'),
      s('rubber_soft_edge', '橡胶软边', 'Rubber Soft Edge', 'material', '橡胶只负责功能边界和保护', 'rubber only handling functional boundary and protection', ['橡胶边', '袖口或鞋底', '黑灰色', '防护感', '无机能堆叠'], ['rubber edge', 'cuff or sole', 'black-gray', 'protective feel', 'no techwear pile'], '机能元素优先降为橡胶软边。', 'Lower functional elements into rubber soft edges.'),
      s('washed_linen_calm', '洗旧亚麻安静', 'Washed Linen Calm', 'material', '洗旧亚麻带来轻松和非表演性', 'washed linen bringing ease and non-performativity', ['洗旧亚麻', '自然皱', '浅色', '透气感', '松弛站姿'], ['washed linen', 'natural wrinkles', 'pale tone', 'breathability', 'relaxed stance'], '日常和历史元素优先亚麻化。', 'Translate daily and historical elements into linen.'),
      s('canvas_utility_plain', '帆布实用素面', 'Plain Canvas Utility', 'material', '帆布说明携带、工作和可磨损', 'canvas showing carrying, work, and wearability', ['帆布包带', '粗织纹', '米灰色', '边角磨损', '工具感'], ['canvas strap', 'coarse weave', 'beige-gray', 'worn corners', 'tool feeling'], '道具和职业元素优先帆布化。', 'Translate props and occupations into canvas.'),
      s('skin_visible_material_gap', '皮肤材质间隙', 'Skin-Material Gap', 'material', '材料与皮肤之间留出真实空气和距离', 'real air and distance kept between material and skin', ['领口留白', '腕部间隙', '材质不粘身', '自然阴影', '舒适比例'], ['collar negative space', 'wrist gap', 'material not glued to body', 'natural shadow', 'comfortable proportion'], '服装和身体不得无解释融合。', 'Garment and body must not fuse without explanation.'),
      s('material_not_style_noise', '材料非风格噪声', 'Material Not Style Noise', 'symbol', '材料选择必须服务身份、气候或功能', 'material choice must serve identity, climate, or function', ['材料理由', '低反光', '真实触感', '少种类', '统一表面'], ['material reason', 'low reflection', 'real tactility', 'few types', 'unified surface'], '每种材料都必须有身份、环境或功能理由。', 'Every material must have identity, environment, or functional reason.')
    ]
  },
  {
    slug: 'single_accent',
    name: '单一重点',
    nameEn: 'Single Accent',
    focus: '一个视觉重点、一个配饰、一个色块或一个符号统摄角色',
    focusEn: 'one visual focus, one accessory, one color block, or one sign governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'prop', 'color', 'composition'],
    defaultControls: ['single_accent', 'one_focus', 'hierarchy'],
    items: [
      s('one_red_thread', '一根红线', 'One Red Thread', 'symbol', '红线作为唯一情绪和命运焦点', 'red thread as the only emotional and fate focus', ['红线', '手腕或指间', '其他低饱和', '细小但醒目', '留白'], ['red thread', 'wrist or finger', 'other low saturation', 'small but visible', 'negative space'], '红色元素只能保留一处。', 'Keep red element in one place only.'),
      s('single_brooch_identity', '单枚胸针身份', 'Single Brooch Identity', 'prop', '一枚胸针承载身份制度和审美', 'one brooch carrying identity system and aesthetics', ['一枚胸针', '胸口偏侧', '小型符号', '无logo', '服装干净'], ['one brooch', 'off-center chest', 'small symbol', 'no logo', 'clean garment'], '身份标识优先集中到一枚胸针。', 'Concentrate identity marks into one brooch.'),
      s('only_colored_lining', '唯一彩色内衬', 'Only Colored Lining', 'color', '彩色只在内衬或翻边露出', 'color only showing in lining or folded edge', ['彩色内衬', '翻边露出', '外层中性', '动作时可见', '低面积'], ['colored lining', 'folded reveal', 'neutral outside', 'visible in motion', 'small area'], '强色彩必须藏进内衬。', 'Hide strong color inside lining.'),
      s('single_cutout_window', '单一开窗', 'Single Cutout Window', 'costume', '只有一个开窗负责身体和服装的张力', 'only one cutout holding body-garment tension', ['一个开窗', '锁骨或背部', '边缘干净', '无多处暴露', '比例克制'], ['one cutout', 'collarbone or back', 'clean edge', 'no multiple exposure', 'restrained proportion'], '暴露和结构元素只能有一个开窗。', 'Exposure and structure elements can have only one cutout.'),
      s('one_tool_in_hand', '手中一件工具', 'One Tool in Hand', 'prop', '所有职业信息压缩为手中的一个工具', 'all occupational information compressed into one hand tool', ['单件工具', '手部握持', '无工具堆', '功能清楚', '姿态自然'], ['single tool', 'hand hold', 'no tool pile', 'clear function', 'natural pose'], '道具数量优先减到一个。', 'Reduce prop count to one first.'),
      s('single_eye_detail', '单眼细节', 'Single Eye Detail', 'face', '只在一只眼附近留下可识别细节', 'leaving recognizable detail near one eye only', ['单眼妆点', '小痣或线条', '另一侧干净', '眼神中心', '低戏剧'], ['one-eye detail', 'small mole or line', 'clean other side', 'gaze center', 'low drama'], '面部符号必须聚焦单点。', 'Facial signs must focus on one point.'),
      s('one_asymmetric_fastener', '单侧扣件', 'One Asymmetric Fastener', 'costume', '一个偏侧扣件打破对称但不扰乱整体', 'one off-side fastener breaking symmetry without disturbing whole', ['单侧扣', '斜向小点', '衣襟干净', '低亮金属', '准确位置'], ['one side clasp', 'small diagonal point', 'clean front', 'low-shine metal', 'precise placement'], '不对称元素只保留一个。', 'Keep only one asymmetric element.'),
      s('single_shadow_shape', '单一影形', 'Single Shadow Shape', 'composition', '影子作为第二身份但只有一个清楚形状', 'shadow as second identity with only one clear shape', ['单一影子', '干净轮廓', '不复杂背景', '脚边或背后', '象征性'], ['single shadow', 'clean outline', 'no complex background', 'near foot or behind', 'symbolic'], '超现实倾向可压缩成一个影形。', 'Compress surreal tendency into one shadow shape.', { ontologyLevel: 2, risk: 'medium' }),
      s('one_texture_patch', '一块材质补丁', 'One Texture Patch', 'material', '材质变化只出现在一块补丁中', 'material variation appearing only in one patch', ['一块补丁', '明显材质差', '边缘缝线', '低面积', '解释损耗'], ['one patch', 'clear material contrast', 'stitched edge', 'small area', 'explained wear'], '材质冲突必须降为一块补丁。', 'Reduce material conflict to one patch.'),
      s('accent_not_collection', '重点非收藏', 'Accent Not Collection', 'symbol', '单一重点协议禁止把好点子全部摆上去', 'single-accent protocol forbids displaying every good idea at once', ['一主一辅', '其余退后', '视觉等级', '少配件', '清楚阅读'], ['one primary one secondary', 'others recede', 'visual hierarchy', 'few accessories', 'clear reading'], '随机生成时只能保留一个主焦点和一个弱辅点。', 'During random generation, keep one primary focus and one weak secondary point.')
    ]
  },
  {
    slug: 'precise_fit',
    name: '精确合身',
    nameEn: 'Precise Fit',
    focus: '肩线、腰量、袖长、裤长和身体余量的准确关系统摄角色',
    focusEn: 'accurate relation among shoulder line, waist ease, sleeve length, trouser length, and body allowance governing character',
    defaultKind: 'costume',
    defaultAffects: ['costume', 'body', 'silhouette', 'wear'],
    defaultControls: ['precise_fit', 'tailored_relation', 'body_allowance'],
    items: [
      s('accurate_shoulder_line', '准确肩线', 'Accurate Shoulder Line', 'costume', '肩线位置定义身体可信度', 'shoulder-line placement defining body credibility', ['肩点准确', '不塌不撑', '袖山干净', '自然上身', '比例清楚'], ['accurate shoulder point', 'not collapsed or padded', 'clean sleeve head', 'natural torso', 'clear proportion'], '上身结构先校准肩线。', 'Calibrate shoulder line first for upper-body structure.'),
      s('controlled_waist_ease', '可控腰量', 'Controlled Waist Ease', 'costume', '腰部有余量但不松散', 'waist having ease without sloppiness', ['腰部余量', '轻微收束', '自然褶', '身体可呼吸', '不紧绷'], ['waist ease', 'slight shaping', 'natural folds', 'body can breathe', 'not tight'], '性感和职业冲突优先通过腰量调和。', 'Resolve sensual-occupational conflict through waist ease.'),
      s('exact_sleeve_length', '精确袖长', 'Exact Sleeve Length', 'costume', '袖长决定手部可见和人物状态', 'sleeve length determining hand visibility and character state', ['袖口到腕骨', '手部露出', '干净折线', '功能长度', '无拖沓'], ['cuff to wrist bone', 'visible hand', 'clean fold', 'functional length', 'no dragging'], '袖子不得遮掉关键手势。', 'Sleeves must not hide key hand gesture.'),
      s('trouser_break_control', '裤脚断点控制', 'Trouser-Break Control', 'costume', '裤脚堆积量控制阶层、职业和松弛感', 'trouser break controlling class, occupation, and ease', ['裤脚断点', '鞋面接触', '少量堆褶', '脚部清楚', '行走可信'], ['trouser break', 'shoe contact', 'few folds', 'clear foot', 'believable walk'], '下身比例必须由裤脚断点校准。', 'Calibrate lower-body proportion through trouser break.'),
      s('collar_gap_breathing', '领口呼吸间隙', 'Collar Breathing Gap', 'costume', '领口和脖子之间保留可呼吸距离', 'breathable distance kept between collar and neck', ['领口间隙', '喉部留白', '自然阴影', '无窒息感', '脸部突出'], ['collar gap', 'throat negative space', 'natural shadow', 'no choking feel', 'face emphasized'], '高领和面部识别冲突用间隙解决。', 'Resolve high-collar and facial recognition conflict with gap.'),
      s('shoe_fit_stance', '鞋履合脚站姿', 'Shoe-Fit Stance', 'costume', '鞋子必须解释站姿和行动方式', 'shoes must explain stance and way of moving', ['合脚鞋', '脚跟稳定', '脚尖方向', '鞋底厚度合理', '站姿可信'], ['well-fit shoes', 'stable heel', 'toe direction', 'reasonable sole thickness', 'believable stance'], '鞋履不只是装饰，必须决定姿态。', 'Footwear is not decoration; it must determine posture.'),
      s('tailored_repair_allowance', '裁缝修补余量', 'Tailored Repair Allowance', 'wear', '修补痕迹仍服从合身关系', 'repair traces still obeying fit relation', ['修补线', '不变形', '缝份暗示', '旧衣合身', '长期穿着'], ['repair stitch', 'no distortion', 'seam allowance hint', 'old garment still fits', 'long-term wear'], '损耗不得破坏合身轮廓。', 'Wear must not break fitted silhouette.'),
      s('body_type_respect', '尊重体型', 'Body-Type Respect', 'body', '合身根据体型调整，不把身体硬改成模板', 'fit adjusted to body type instead of forcing template body', ['体型余量', '真实比例', '自然曲线', '不模板化', '舒适站姿'], ['body-type ease', 'real proportion', 'natural curve', 'not template-like', 'comfortable stance'], '所有身材都用合身关系而非标准化修正。', 'Use fit relation for every body type, not standardizing correction.'),
      s('underlayer_thickness_logic', '内层厚度逻辑', 'Underlayer Thickness Logic', 'costume', '外层尺寸要解释里面穿了什么', 'outer sizing must explain what is worn underneath', ['内层厚度', '领口露边', '袖口层差', '外套余量', '季节可信'], ['underlayer thickness', 'collar reveal', 'cuff layer gap', 'coat ease', 'season credibility'], '层次和季节必须通过厚度关系统一。', 'Unify layers and season through thickness relation.'),
      s('fit_not_body_morph', '合身非改造身体', 'Fit Not Body Morph', 'symbol', '精确合身协议通过衣物关系修正冲突，不改造人体', 'precise-fit protocol resolves conflict through garment relation, not body morphing', ['人体完整', '衣物调整', '比例准确', '无无故变形', '身体可信'], ['intact body', 'garment adjustment', 'accurate proportion', 'no unjustified deformation', 'believable body'], '任何造型冲突优先通过裁剪和余量解决。', 'Resolve styling conflict first through cut and ease.')
    ]
  },
  {
    slug: 'quiet_luxury',
    name: '静奢质感',
    nameEn: 'Quiet Luxury',
    focus: '无标识、好材料、维护痕迹、低对比和隐性阶层统摄角色',
    focusEn: 'no logos, good material, maintenance traces, low contrast, and implicit class governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'symbol', 'color'],
    defaultControls: ['quiet_luxury', 'no_logo', 'implicit_status'],
    items: [
      s('no_logo_status', '无标识地位', 'No-Logo Status', 'symbol', '地位通过材料和剪裁出现，不用标志', 'status through material and cut, not logos', ['无logo', '好面料', '准确剪裁', '低调配饰', '冷静表情'], ['no logo', 'good fabric', 'accurate cut', 'subtle accessories', 'calm face'], '所有品牌倾向必须虚构化并去标识。', 'Fictionalize and remove marks from all brand tendencies.'),
      s('cashmere_soft_power', '羊绒软权力', 'Cashmere Soft Power', 'material', '羊绒质感表达不展示的资源', 'cashmere texture expressing resources without display', ['羊绒表面', '柔软厚度', '浅灰驼色', '轻微起绒', '放松姿态'], ['cashmere surface', 'soft thickness', 'light gray-camel', 'slight fuzz', 'relaxed posture'], '财富元素优先压低为羊绒软权力。', 'Lower wealth elements into cashmere soft power.'),
      s('old_money_maintenance', '旧钱保养', 'Old-Money Maintenance', 'wear', '物品旧但维护良好', 'objects old but well maintained', ['保养皮革', '擦亮鞋', '旧扣件', '无新钱炫耀', '使用痕'], ['maintained leather', 'polished shoes', 'old fasteners', 'no flashy display', 'use traces'], '损耗必须变成维护历史。', 'Wear must become maintenance history.'),
      s('low_contrast_layering', '低对比叠穿', 'Low-Contrast Layering', 'color', '层次靠材质差而非强颜色', 'layers through material difference rather than strong color', ['同色系', '材质微差', '浅暗层次', '无强撞色', '安静边'], ['same color family', 'subtle material difference', 'light-dark layers', 'no strong contrast', 'quiet edge'], '色彩冲突优先降成低对比叠穿。', 'Lower color conflict into low-contrast layering.'),
      s('private_club_reserve', '私人会所克制', 'Private-Club Reserve', 'pose', '姿态带有隐性社交距离', 'pose carrying implicit social distance', ['轻微后仰', '手部放松', '不主动展示', '看向镜头外', '稳态'], ['slight lean back', 'relaxed hands', 'no active display', 'looking off-camera', 'steady state'], '权力姿态必须克制而非海报化。', 'Power pose must be restrained, not posterized.'),
      s('fine_watch_without_brand', '无牌精表', 'Fine Watch Without Brand', 'prop', '手表只说明精密和保养，不出现真实品牌', 'watch shows precision and maintenance, not real brand', ['小表盘', '皮表带', '低亮金属', '袖口半遮', '无logo'], ['small dial', 'leather strap', 'low-shine metal', 'half-hidden by cuff', 'no logo'], '奢侈道具优先无牌化、小面积化。', 'Make luxury props unbranded and small-area.'),
      s('tailored_coat_silence', '定制外套沉默', 'Tailored Coat Silence', 'costume', '外套剪裁说明地位但不表演', 'coat tailoring showing status without performance', ['定制外套', '干净肩线', '自然垂坠', '深中性色', '低调口袋'], ['tailored coat', 'clean shoulder', 'natural drape', 'deep neutral color', 'subtle pockets'], '高定和日常冲突优先静奢外套化。', 'Translate couture-daily conflict into quiet tailored coat.'),
      s('expensive_negative_space', '昂贵留白', 'Expensive Negative Space', 'composition', '留白像资源，不用填满画面和身体', 'negative space as resource, not filling image or body', ['大片留白', '少配饰', '距离感', '干净背景', '慢节奏'], ['large negative space', 'few accessories', 'distance', 'clean background', 'slow rhythm'], '装饰过多时优先删除到留白。', 'When overdecorated, delete toward negative space.'),
      s('subtle_scent_object', '隐性香氛物', 'Subtle Scent Object', 'prop', '香氛、手帕或小盒作为隐性阶层线索', 'scent, handkerchief, or small case as implicit class clue', ['小香盒', '手帕', '皮套', '手中轻握', '低调亲密'], ['small scent case', 'handkerchief', 'leather case', 'light hand hold', 'subtle intimacy'], '感官和阶层元素优先变成小型私人物件。', 'Translate sensory and class elements into small private objects.'),
      s('luxury_not_brand_board', '奢华非品牌板', 'Luxury Not Brand Board', 'symbol', '静奢协议禁止真实品牌堆叠和标志展示', 'quiet luxury forbids real-brand stacking and logo display', ['无品牌', '材质优先', '剪裁优先', '维护痕迹', '低对比'], ['no brand', 'material first', 'cut first', 'maintenance traces', 'low contrast'], '所有奢华必须通过材料、剪裁、维护、姿态表达。', 'All luxury must be expressed through material, cut, maintenance, and posture.')
    ]
  },
  {
    slug: 'ordinary_object',
    name: '普通物件',
    nameEn: 'Ordinary Object',
    focus: '钥匙、杯子、纸张、包、手机和可信生活痕迹统摄角色',
    focusEn: 'keys, cups, papers, bags, phones, and believable life traces governing character',
    defaultKind: 'prop',
    defaultAffects: ['prop', 'identity', 'pose', 'wear'],
    defaultControls: ['ordinary_object', 'daily_anchor', 'believable_life'],
    items: [
      s('key_ring_anchor', '钥匙圈锚点', 'Key-Ring Anchor', 'prop', '钥匙圈说明居住、工作和日常权限', 'key ring showing residence, work, and daily access', ['钥匙圈', '手指勾住', '少量钥匙', '旧金属', '真实生活'], ['key ring', 'finger hook', 'few keys', 'old metal', 'real life'], '身份信息可落到钥匙圈。', 'Identity information may land on key ring.'),
      s('paper_cup_pause', '纸杯停顿', 'Paper-Cup Pause', 'prop', '一次纸杯停顿让角色进入真实时间', 'paper-cup pause placing character in real time', ['纸杯', '手边握持', '咖啡渍', '轻微疲惫', '临时性'], ['paper cup', 'held by hand', 'coffee stain', 'slight fatigue', 'temporariness'], '生活和职业疲惫优先转成纸杯停顿。', 'Translate life and work fatigue into paper-cup pause.'),
      s('folded_receipt_trace', '折叠小票痕迹', 'Folded Receipt Trace', 'prop', '小票作为消费、移动和现实证据', 'receipt as evidence of consumption, movement, and reality', ['折叠小票', '口袋露出', '白纸边', '细小文字', '日常偶然'], ['folded receipt', 'peeking pocket', 'white paper edge', 'tiny text', 'daily accident'], '场域信息可压缩成小票。', 'Compress setting information into receipt.'),
      s('worn_canvas_tote', '旧帆布托特', 'Worn Canvas Tote', 'prop', '包说明携带系统和生活阶层', 'bag showing carrying system and life class', ['帆布包', '肩带磨损', '内容物轮廓', '日常重量', '无品牌'], ['canvas tote', 'worn strap', 'contents silhouette', 'daily weight', 'no brand'], '背包和道具堆优先收束成一个托特包。', 'Constrain bag and prop pile into one tote.'),
      s('phone_as_plain_tool', '手机作为普通工具', 'Phone as Plain Tool', 'prop', '手机只承担联系和当代性，不抢画面', 'phone only carrying contact and contemporaneity, not stealing image', ['普通手机', '无界面大屏', '手中半露', '低反光', '现实时间'], ['plain phone', 'no big interface', 'half-visible in hand', 'low reflection', 'real time'], '科技感优先降级为普通手机工具。', 'Downgrade tech feeling into plain phone tool.'),
      s('cheap_plastic_bag', '廉价塑料袋', 'Cheap Plastic Bag', 'prop', '塑料袋带来即时生活和非精致现实', 'plastic bag bringing immediate life and non-polished reality', ['白塑料袋', '物品重量', '手指勒痕', '透明皱褶', '临时购物'], ['white plastic bag', 'object weight', 'finger pressure mark', 'transparent wrinkles', 'temporary shopping'], '日常粗粝元素优先塑料袋化。', 'Translate rough daily elements into plastic bag.'),
      s('notebook_under_arm', '腋下笔记本', 'Notebook Under Arm', 'prop', '笔记本说明工作、学习或记录身份', 'notebook showing work, study, or recording identity', ['笔记本', '腋下夹持', '贴纸或页签', '纸边', '匆忙姿态'], ['notebook', 'under-arm hold', 'stickers or tabs', 'paper edge', 'hurried pose'], '知识和职业信息优先转成笔记本。', 'Translate knowledge and occupation info into notebook.'),
      s('umbrella_weather_trace', '雨伞天气痕', 'Umbrella Weather Trace', 'prop', '雨伞把环境压缩成一个普通道具', 'umbrella compressing environment into one ordinary prop', ['折伞', '水珠', '伞套', '手腕挂带', '湿鞋边'], ['folding umbrella', 'water drops', 'umbrella sleeve', 'wrist strap', 'wet shoe edge'], '天气和场景信息优先落在伞上。', 'Place weather and scene information onto umbrella.'),
      s('pocket_weight_asymmetry', '口袋重量不对称', 'Pocket-Weight Asymmetry', 'wear', '口袋重量制造真实身体偏移', 'pocket weight creating real body offset', ['一侧鼓起', '钥匙轮廓', '衣摆偏斜', '自然站姿', '小型不对称'], ['one side bulge', 'key outline', 'slanted hem', 'natural stance', 'small asymmetry'], '生活物件必须影响姿态，而非漂浮装饰。', 'Daily objects must affect posture, not float as decoration.'),
      s('ordinary_not_random_clutter', '普通非杂物堆', 'Ordinary Not Random Clutter', 'symbol', '普通物件协议强调少量真实证据，不堆满生活用品', 'ordinary-object protocol emphasizes few real evidences, not clutter', ['一两件物', '功能明确', '生活痕迹', '无堆叠', '手部关系'], ['one or two objects', 'clear function', 'life traces', 'no clutter', 'hand relation'], '普通物件最多承担一到两个核心证据。', 'Ordinary objects should carry at most one or two core evidences.')
    ]
  },
  {
    slug: 'soft_asymmetry',
    name: '轻微不对称',
    nameEn: 'Soft Asymmetry',
    focus: '小型偏差、自然歪斜、微表情和个体性痕迹统摄角色',
    focusEn: 'small deviations, natural slants, micro-expressions, and individual traces governing character',
    defaultKind: 'structure',
    defaultAffects: ['face', 'pose', 'costume', 'wear'],
    defaultControls: ['soft_asymmetry', 'individual_trace', 'natural_deviation'],
    items: [
      s('one_sleeve_shift', '单袖偏移', 'One-Sleeve Shift', 'wear', '一边袖口略微错位，制造真实穿着感', 'one cuff slightly displaced, creating real wearing feel', ['单袖偏移', '袖口不齐', '手腕露出', '自然褶', '无邋遢'], ['one sleeve shift', 'uneven cuff', 'visible wrist', 'natural fold', 'not sloppy'], '个性来自小偏移，不靠大设定。', 'Individuality from small shift, not big setup.'),
      s('tilted_collar_habit', '歪领习惯', 'Tilted-Collar Habit', 'wear', '领口轻微偏斜像长期习惯', 'collar slightly tilted like long habit', ['歪领', '脖颈留白', '一侧折痕', '轻松姿态', '真实阴影'], ['tilted collar', 'neck negative space', 'one-side crease', 'easy posture', 'real shadow'], '松弛感优先落在领口习惯。', 'Place ease into collar habit.'),
      s('uneven_hair_strand', '不齐发丝', 'Uneven Hair Strand', 'face', '少量发丝破坏完美但不挡脸', 'few hair strands breaking perfection without blocking face', ['几缕发丝', '额前偏侧', '脸部可见', '自然乱', '低戏剧'], ['few strands', 'off-side forehead', 'visible face', 'natural mess', 'low drama'], '发型必须保留脸部识别。', 'Hair must keep face recognition.'),
      s('micro_smirk_offset', '微笑偏侧', 'Micro-Smirk Offset', 'face', '表情只在一侧嘴角发生', 'expression happening only at one mouth corner', ['单侧嘴角', '克制笑意', '眼神安静', '脸部非对称', '小幅度'], ['one mouth corner', 'restrained smile', 'quiet eyes', 'facial asymmetry', 'small amplitude'], '性格线索优先用微表情解决。', 'Use micro-expression first for personality clues.'),
      s('one_shoulder_lower', '单肩略低', 'One Shoulder Lower', 'pose', '单肩高度差显示疲惫或习惯动作', 'one shoulder height difference showing fatigue or habit', ['单肩略低', '重心偏移', '手臂自然', '衣料下坠', '安静疲惫'], ['one shoulder lower', 'shifted center', 'natural arms', 'fabric drop', 'quiet fatigue'], '疲惫和生活感优先姿态化。', 'Translate fatigue and life feeling into posture.'),
      s('mismatched_small_button', '错配小纽扣', 'Mismatched Small Button', 'wear', '一颗纽扣不同，说明修补历史', 'one different button showing repair history', ['错配纽扣', '小面积', '旧衣', '修补逻辑', '细节可读'], ['mismatched button', 'small area', 'old garment', 'repair logic', 'readable detail'], '不对称必须有使用或修补理由。', 'Asymmetry must have use or repair reason.'),
      s('off_center_bag_strap', '偏侧包带', 'Off-Center Bag Strap', 'prop', '包带偏移身体重心', 'bag strap shifting body center', ['斜挎带', '肩部压痕', '身体微偏', '包在一侧', '真实重量'], ['crossbody strap', 'shoulder pressure mark', 'slight body lean', 'bag to one side', 'real weight'], '道具必须影响身体重心。', 'Props must affect body center of gravity.'),
      s('one_ear_visible', '单耳可见', 'One Ear Visible', 'face', '发型只露出一侧耳朵建立亲近感', 'hairstyle revealing one ear to create intimacy', ['单耳露出', '另一侧遮发', '耳饰小点', '颈侧线', '脸部柔化'], ['one ear visible', 'hair covers other side', 'tiny earring', 'neck-side line', 'softened face'], '头部不对称优先服务亲近和识别。', 'Head asymmetry should serve intimacy and recognition.'),
      s('natural_stain_offset', '偏侧自然污痕', 'Natural Stain Offset', 'wear', '污痕只在一侧出现，说明具体事件', 'stain appearing on one side, showing specific event', ['一侧污痕', '袖口或下摆', '浅色脏痕', '非脏乱', '事件线索'], ['one-side stain', 'cuff or hem', 'pale dirt mark', 'not messy', 'event clue'], '污痕必须少量且有事件方向。', 'Stains must be limited and event-directed.'),
      s('asymmetry_not_chaos', '不对称非混乱', 'Asymmetry Not Chaos', 'symbol', '轻微不对称协议只允许一个主要偏差', 'soft-asymmetry protocol allows only one main deviation', ['一个偏差', '其余稳定', '自然理由', '身体可信', '阅读清楚'], ['one deviation', 'others stable', 'natural reason', 'believable body', 'clear reading'], '随机时只保留一个不对称主因。', 'During randomization, keep only one main asymmetry cause.')
    ]
  },
  {
    slug: 'low_drama_pose',
    name: '低戏剧姿态',
    nameEn: 'Low-Drama Pose',
    focus: '自然站姿、真实重心、轻微疲惫和非海报化动作统摄角色',
    focusEn: 'natural stance, real gravity, slight fatigue, and non-posterized action governing character',
    defaultKind: 'pose',
    defaultAffects: ['pose', 'body', 'costume', 'composition'],
    defaultControls: ['low_drama_pose', 'real_gravity', 'non_poster'],
    items: [
      s('natural_weight_shift', '自然重心偏移', 'Natural Weight Shift', 'pose', '身体重量落在一侧脚上', 'body weight resting on one foot', ['一脚承重', '膝盖放松', '肩线轻斜', '手部自然', '真实站姿'], ['one foot bearing weight', 'relaxed knee', 'slight shoulder tilt', 'natural hands', 'real stance'], '动作优先回到真实重心。', 'Bring action back to real gravity first.'),
      s('hands_incomplete_rest', '手部未完成休息', 'Hands Incomplete Rest', 'pose', '手像刚放下或刚要动，避免摆拍', 'hands as just lowered or about to move, avoiding posed look', ['半放下手', '手指放松', '袖口接触', '非手势表演', '生活感'], ['half-lowered hands', 'relaxed fingers', 'cuff contact', 'not gestural performance', 'life feeling'], '手势不得变成无意义表演。', 'Gestures must not become meaningless performance.'),
      s('looking_past_camera', '看过镜头', 'Looking Past Camera', 'pose', '视线越过镜头而非强行凝视', 'gaze past camera instead of forced staring', ['视线偏离', '眼神集中', '脸部清楚', '低情绪', '空间感'], ['gaze offset', 'focused eyes', 'clear face', 'low emotion', 'spatial feeling'], '情绪强度优先压成视线方向。', 'Lower emotional intensity into gaze direction.'),
      s('coat_weight_stand', '外套重量站姿', 'Coat-Weight Stand', 'pose', '衣物重量决定肩背和手臂位置', 'garment weight determining shoulder-back and arm positions', ['外套下坠', '肩背承重', '手插口袋或垂落', '衣摆重', '慢姿态'], ['coat drop', 'shoulder-back bearing weight', 'hands in pocket or hanging', 'heavy hem', 'slow posture'], '服装必须影响站姿。', 'Garment must affect stance.'),
      s('paused_walk_plain', '普通行走停顿', 'Plain Paused Walk', 'pose', '动作停在日常行走的一瞬', 'action paused in a moment of everyday walking', ['一脚前', '脚尖方向', '手臂自然摆', '衣料轻动', '无战斗感'], ['one foot forward', 'toe direction', 'natural arm swing', 'slight garment motion', 'no combat feel'], '动态优先日常化为走路停顿。', 'Daily-translate motion into walking pause.'),
      s('seated_edge_plain', '坐在边缘', 'Sitting on Edge', 'pose', '坐姿克制，显示等待或疲惫', 'restrained seated pose showing waiting or fatigue', ['坐在边缘', '脚落地', '手扶膝', '背部微弯', '低戏剧'], ['sitting on edge', 'feet grounded', 'hands on knees', 'slight curved back', 'low drama'], '强剧情动作可降级为等待坐姿。', 'Downgrade strong narrative action into waiting sit.'),
      s('turning_back_slightly', '轻微回身', 'Slight Turn Back', 'pose', '身体转回一点，制造关系但不戏剧化', 'body turning back slightly, creating relation without drama', ['侧背角度', '头部回看', '肩线扭转', '衣摆轻斜', '表情克制'], ['rear-side angle', 'head looking back', 'shoulder twist', 'slight hem slant', 'restrained expression'], '神秘感优先通过轻微回身表达。', 'Express mystery through slight turn-back first.'),
      s('pocket_hand_as_state', '插袋作为状态', 'Pocket Hand as State', 'pose', '插袋不是酷，而是心理距离', 'hand in pocket as psychological distance, not coolness', ['单手插袋', '另一手自然', '肩部松', '视线冷静', '距离感'], ['one hand in pocket', 'other hand natural', 'loose shoulder', 'calm gaze', 'distance'], '姿态必须说明心理状态。', 'Pose must explain psychological state.'),
      s('breathing_pause', '呼吸停顿', 'Breathing Pause', 'pose', '动作只呈现一次呼吸的停顿', 'action showing only a breath pause', ['胸口轻起伏', '嘴唇微开', '肩颈放松', '衣料静止', '近乎无动作'], ['slight chest rise', 'slightly parted lips', 'relaxed shoulder-neck', 'still cloth', 'almost no action'], '强情绪优先收束到呼吸。', 'Constrain strong emotion into breath.'),
      s('pose_not_poster', '姿态非海报', 'Pose Not Poster', 'symbol', '低戏剧姿态禁止战斗海报和过度摆拍', 'low-drama pose forbids battle poster and over-posing', ['真实重心', '手脚可解释', '不悬浮', '低张力', '身份可读'], ['real gravity', 'explainable hands and feet', 'not floating', 'low tension', 'readable identity'], '所有动作必须回到重心、手脚理由和身体重量。', 'Every action must return to gravity, hand-foot reason, and body weight.')
    ]
  },
  {
    slug: 'maintenance_care',
    name: '保养痕迹',
    nameEn: 'Maintenance Care',
    focus: '擦亮、修补、清洗、折痕和长期使用的克制证据统摄角色',
    focusEn: 'polishing, repair, washing, creases, and restrained evidence of long use governing character',
    defaultKind: 'wear',
    defaultAffects: ['wear', 'material', 'prop', 'costume'],
    defaultControls: ['maintenance_care', 'use_history', 'restrained_wear'],
    items: [
      s('polished_old_shoes', '擦亮旧鞋', 'Polished Old Shoes', 'wear', '鞋旧但被认真维护', 'shoes old but carefully maintained', ['旧皮鞋', '擦亮鞋头', '折痕', '鞋底磨损', '体面'], ['old leather shoes', 'polished toe', 'creases', 'sole wear', 'dignity'], '阶层和职业信息可落在鞋履维护。', 'Class and occupation info may land in shoe maintenance.'),
      s('mended_cuff_line', '补过袖口线', 'Mended Cuff Line', 'wear', '袖口修补说明长期穿着', 'cuff repair showing long-term wear', ['袖口补线', '异色线', '磨白边', '手腕露出', '细节真实'], ['cuff repair stitch', 'mismatched thread', 'faded edge', 'visible wrist', 'real detail'], '损耗必须可修补而非破烂。', 'Wear must be repairable, not ragged.'),
      s('washed_color_fade', '洗旧褪色', 'Washed Color Fade', 'wear', '颜色因清洗变浅而非肮脏', 'color lightened by washing, not dirtiness', ['洗旧色', '均匀褪色', '柔软边', '无污垢', '长期使用'], ['washed color', 'even fade', 'soft edge', 'no dirt', 'long use'], '旧感优先洗旧化。', 'Translate oldness into washed fading.'),
      s('replaced_button_history', '换纽扣历史', 'Replaced Button History', 'wear', '纽扣替换说明物件没有被丢弃', 'replaced button showing the item was not discarded', ['替换纽扣', '小色差', '手工缝线', '衣襟局部', '保留旧物'], ['replaced button', 'small color difference', 'hand stitching', 'local placket', 'kept old object'], '修补细节必须说明继续使用。', 'Repair details must show continued use.'),
      s('cleaned_tool_handle', '清洁工具柄', 'Cleaned Tool Handle', 'prop', '工具旧但被擦净，说明职业伦理', 'tool old but wiped clean, showing work ethic', ['旧工具', '干净手柄', '磨亮接触点', '无杂乱', '握持自然'], ['old tool', 'clean handle', 'polished contact point', 'no clutter', 'natural grip'], '职业道具必须有维护痕。', 'Occupational props must have maintenance traces.'),
      s('fold_memory_lines', '折叠记忆线', 'Fold Memory Lines', 'wear', '折线说明收纳、纪律和重复生活', 'fold lines showing storage, discipline, and repeated life', ['折叠线', '裤线或衣线', '规律痕迹', '低对比', '整洁'], ['fold lines', 'trouser or garment crease', 'regular trace', 'low contrast', 'tidy'], '制度感可通过折线表达。', 'Institutional feeling may be expressed through fold lines.'),
      s('patched_bag_corner', '补过包角', 'Patched Bag Corner', 'wear', '包角修补说明移动历史', 'bag-corner patch showing movement history', ['包角补片', '磨损边', '帆布或皮革', '手提姿态', '长期携带'], ['bag-corner patch', 'worn edge', 'canvas or leather', 'carrying pose', 'long-term carry'], '旅行和日常元素优先包角化。', 'Translate travel and daily life into bag corners.'),
      s('pressed_garment_care', '压烫保养', 'Pressed Garment Care', 'wear', '压烫痕迹说明自我管理', 'pressed traces showing self-management', ['压烫线', '平整衣面', '轻微折痕', '干净袖口', '克制体面'], ['pressed line', 'flat garment surface', 'slight creases', 'clean cuffs', 'restrained dignity'], '体面感优先通过压烫而非装饰。', 'Dignity through pressing rather than ornament.'),
      s('repaired_zipper_pull', '修过拉链头', 'Repaired Zipper Pull', 'wear', '小拉链修补保留功能和历史', 'small zipper repair keeping function and history', ['拉链头', '替换拉片', '小金属', '衣物边', '功能仍在'], ['zipper pull', 'replacement tab', 'small metal', 'garment edge', 'still functional'], '机能细节优先维护化。', 'Translate technical detail into maintenance.'),
      s('wear_not_decay', '损耗非腐烂', 'Wear Not Decay', 'symbol', '保养痕迹协议强调长期使用，不制造脏乱废土', 'maintenance-care protocol emphasizes long use, not dirty wasteland', ['干净旧物', '修补逻辑', '少量磨损', '功能保留', '可读历史'], ['clean old object', 'repair logic', 'limited wear', 'kept function', 'readable history'], '损耗必须干净、可解释、有保养。', 'Wear must be clean, explainable, and maintained.')
    ]
  },
  {
    slug: 'negative_space',
    name: '留白秩序',
    nameEn: 'Negative-Space Order',
    focus: '减少细节、拉开距离、空白区域和清楚阅读秩序统摄角色',
    focusEn: 'reduced details, distance, blank areas, and clear reading order governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['composition', 'silhouette', 'color', 'symbol'],
    defaultControls: ['negative_space', 'reduction_order', 'clear_reading'],
    items: [
      s('blank_chest_field', '胸前空白场', 'Blank Chest Field', 'composition', '胸前大片空白让脸和姿态更突出', 'large blank chest area making face and pose stronger', ['胸前留白', '无大图案', '平整面料', '一个小点', '脸部突出'], ['blank chest', 'no large graphic', 'flat fabric', 'one small point', 'face emphasized'], '胸前不得堆满符号。', 'Do not fill chest with symbols.'),
      s('wide_margin_identity_board', '身份板宽边距', 'Wide-Margin Identity Board', 'composition', '角色周围保留宽边距，强化设计阅读', 'wide margins around character strengthening design readability', ['宽边距', '身体完整', '配件分开', '白或浅背景', '设计板感'], ['wide margins', 'full body', 'separate accessories', 'white or pale background', 'design-board feel'], '版式复杂时优先扩大边距。', 'When layout gets complex, widen margins first.'),
      s('silence_between_layers', '层间沉默', 'Silence Between Layers', 'composition', '层与层之间留出呼吸空间', 'breathing space between layers', ['层间空隙', '衣领留白', '袖口分离', '材质不粘连', '清楚阴影'], ['space between layers', 'collar negative space', 'separate cuffs', 'materials not stuck', 'clear shadow'], '层次必须靠空隙区分。', 'Layers must be distinguished through gaps.'),
      s('small_symbol_large_void', '小符号大空白', 'Small Symbol, Large Void', 'symbol', '一个小符号在大片空白中获得力量', 'one small sign gains power in large blank field', ['小标记', '大片素面', '位置精确', '无重复', '冷静焦点'], ['small mark', 'large plain field', 'precise placement', 'no repetition', 'calm focus'], '符号只能小而准。', 'Signs must be small and precise.'),
      s('separated_prop_display', '道具分离展示', 'Separated Prop Display', 'composition', '道具与身体之间有清楚距离，不挂满全身', 'props have clear distance from body, not hanging all over', ['道具分离', '手边或脚边', '少数量', '阴影清楚', '不遮挡身体'], ['separate props', 'by hand or foot', 'few count', 'clear shadow', 'not hiding body'], '身份板道具必须分区展示。', 'Identity-board props must be displayed in separated zones.'),
      s('muted_background_obedience', '背景服从', 'Muted Background Obedience', 'composition', '背景只服务轮廓，不成为场景戏剧', 'background only serves silhouette, not scene drama', ['浅背景', '无复杂环境', '轻阴影', '人物主导', '边缘清楚'], ['pale background', 'no complex environment', 'light shadow', 'character-led', 'clear edge'], '场景信息必须退到人物之后。', 'Scene information must recede behind character.'),
      s('color_interval_breath', '色块间隔呼吸', 'Color Interval Breath', 'color', '色块之间有间隔而非贴满身体', 'color blocks separated by intervals, not covering body', ['色块间距', '中性色隔开', '一主色', '少辅色', '边界干净'], ['color intervals', 'neutral separation', 'one main color', 'few secondary colors', 'clean boundary'], '配色必须有空白缓冲。', 'Palette must have blank buffering.'),
      s('face_space_priority', '脸部空间优先', 'Face-Space Priority', 'face', '脸周围不放抢眼元素', 'no attention-stealing element around face', ['脸周留白', '耳侧少装饰', '眼神清楚', '发型收束', '表情可读'], ['space around face', 'few ear-side ornaments', 'clear gaze', 'contained hair', 'readable expression'], '头面部永远优先可读。', 'Head and face must always remain readable.'),
      s('detail_density_gradient', '细节密度梯度', 'Detail Density Gradient', 'composition', '细节从一个中心向外递减', 'detail density decreasing outward from one center', ['中心细节', '外侧留白', '密度递减', '视觉路径', '不平均铺满'], ['center details', 'outer negative space', 'decreasing density', 'visual path', 'not evenly filled'], '细节必须有密度中心。', 'Details must have a density center.'),
      s('emptiness_with_anchor', '空白有锚点', 'Emptiness With Anchor', 'symbol', '留白必须围绕身份锚点组织', 'emptiness organized around identity anchor', ['身份锚点', '空白支撑', '少量信息', '阅读顺序', '稳定构图'], ['identity anchor', 'supporting emptiness', 'limited information', 'reading order', 'stable composition'], '留白不是空，而是让锚点更强。', 'Negative space is not emptiness; it strengthens anchors.')
    ]
  }
];

export const MINIMAL_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
