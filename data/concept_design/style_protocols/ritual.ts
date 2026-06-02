import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'RITUAL';
const ROUTE_NAME = '仪式神圣';
const ROUTE_NAME_EN = 'Ritual Sacred';
const ERAS = ['slave', 'feudal', 'modern', 'contemporary', 'timeless'];
const FORBIDS = ['真实宗教冒犯性符号拼贴', '随机恐怖片场景', '血腥献祭展示', '现代品牌化', '符号无制度来源', '廉价邪教 cosplay 感'];

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
    slug: 'sacred_geometry',
    name: '神圣几何',
    nameEn: 'Sacred Geometry',
    focus: '圆、轴线、结、封印和对称秩序统摄角色',
    focusEn: 'circle, axis, knot, seal, and symmetrical order governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'pose', 'prop'],
    defaultControls: ['sacred_geometry', 'ritual_axis', 'seal_order'],
    items: [
      s('halo_ring_order', '光环圆秩序', 'Halo-Ring Order', 'symbol', '圆形结构在头部、背部或道具周围建立神圣中心', 'circular structure creating sacred center around head, back, or prop', ['圆环纹', '背后圆形', '头部留白', '对称站姿', '低饱和金属'], ['ring motif', 'back circle', 'head negative space', 'symmetrical stance', 'muted metal'], '外来元素优先被整理进圆环中心和神圣轴线。', 'Organize outside elements into ring centers and sacred axes.'),
      s('seal_grid_cloth', '封印格布', 'Seal-Grid Cloth', 'symbol', '符号以格状分布在布料上形成制度', 'symbols distributed as a grid across cloth to form institution', ['格状封印', '长布条', '重复小符', '边框线', '静止垂坠'], ['seal grid', 'long cloth strips', 'repeated small signs', 'border line', 'still drape'], '复杂图案必须制度化为封印格布，不做随机纹身。', 'Institutionalize complex patterns into seal-grid cloth, not random tattoos.'),
      s('knot_axis_binding', '结绳轴线', 'Knot-Axis Binding', 'symbol', '绳结把身体、衣物和禁令连成一条轴', 'knots connecting body, clothing, and prohibition into one axis', ['结绳', '腰部中心', '垂直线', '手指触结', '布料压痕'], ['cord knots', 'waist center', 'vertical line', 'finger touching knot', 'fabric pressure'], '限制、誓言和装备优先转成可见结绳轴线。', 'Translate restriction, oath, and gear into visible knot axes.'),
      s('triangle_offering_frame', '三角供奉框架', 'Triangle Offering Frame', 'symbol', '三角构图把手、容器和视线连接起来', 'triangular composition linking hands, vessel, and gaze', ['三角手势', '小容器', '低头视线', '袖口对称', '中心留白'], ['triangular gesture', 'small vessel', 'lowered gaze', 'symmetrical cuffs', 'central negative space'], '献礼、道具和姿态优先进入三角供奉关系。', 'Put offering, prop, and posture into triangular offering relation.'),
      s('mandala_panel_order', '曼荼罗面板秩序', 'Mandala Panel Order', 'symbol', '复杂神圣图案只作为衣物面板或背部图形', 'complex sacred pattern only as garment panel or back graphic', ['圆形面板', '放射纹', '背部中心', '边缘重复', '安静姿态'], ['circular panel', 'radiating pattern', 'back center', 'repeated edge', 'quiet posture'], '奇幻和神秘图案必须被压进单一面板。', 'Compress fantasy and mystical pattern into one panel.'),
      s('vertical_pilgrim_axis', '朝圣垂直轴', 'Pilgrim Vertical Axis', 'pose', '身体像沿一条垂直路线向上或向前移动', 'body reads as moving along a vertical route upward or forward', ['长杖', '直线衣褶', '低头', '脚步收束', '向上留白'], ['staff', 'straight folds', 'lowered head', 'narrow steps', 'upward negative space'], '旅行、信仰和身份优先成为朝圣轴线。', 'Translate travel, faith, and identity into pilgrim axis.'),
      s('threshold_circle_mark', '门槛圆印', 'Threshold Circle Mark', 'symbol', '圆印标记角色处在进入仪式之前', 'circle mark showing character before entering ritual', ['脚边圆印', '门槛线', '袍摆触边', '停顿姿态', '手持小物'], ['circle mark near feet', 'threshold line', 'robe touching edge', 'paused stance', 'small item in hand'], '过渡和选择元素优先转成门槛符号。', 'Translate transition and choice into threshold signs.'),
      s('mirror_symmetry_rule', '镜像对称法', 'Mirror-Symmetry Rule', 'structure', '左右对称让角色具有不可侵犯的制度感', 'bilateral symmetry giving character inviolable institutionality', ['左右等距', '双袖垂直', '双手平衡', '中心饰物', '正面脸'], ['equal left-right spacing', 'vertical sleeves', 'balanced hands', 'central ornament', 'frontal face'], '散乱装饰必须被镜像对称整理。', 'Organize scattered decoration through mirror symmetry.'),
      s('sigil_as_access', '符印即权限', 'Sigil as Access', 'symbol', '符号不是装饰，而是进入仪式的权限证明', 'symbol as access proof to ritual, not decoration', ['小符印', '胸前或掌心', '封线', '无品牌感', '检查手势'], ['small sigil', 'chest or palm', 'sealed line', 'no brand feeling', 'checking gesture'], '身份和组织信息优先变成虚构权限符印。', 'Translate identity and organization into fictional access sigils.'),
      s('cosmic_diagram_limit', '宇宙图限制', 'Cosmic Diagram Limit', 'ontology', '宇宙感只允许以图表和织纹出现，不让身体星云化', 'cosmic feeling allowed only as diagram and textile pattern, not nebula body', ['星图线', '圆轨道', '小点阵', '深色布面', '图表边框'], ['star-map lines', 'circular orbit', 'small dot array', 'dark cloth', 'diagram border'], '超现实宇宙元素必须图表化和衣物化。', 'Diagrammatize and garment-translate surreal cosmic elements.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'vestment_hierarchy',
    name: '法衣层级',
    nameEn: 'Vestment Hierarchy',
    focus: '层叠衣制、颜色等级、遮蔽程度和圣职秩序统摄角色',
    focusEn: 'layered vestments, color rank, concealment, and clerical order governing character',
    defaultKind: 'costume',
    defaultAffects: ['costume', 'symbol', 'silhouette', 'pose'],
    defaultControls: ['vestment_hierarchy', 'robe_layering', 'clerical_rank'],
    items: [
      s('outer_cape_authority', '外披权威', 'Outer-Cape Authority', 'structure', '最外层披挂决定角色等级和体量', 'outermost cape deciding rank and volume', ['大披肩', '垂直褶', '肩部重量', '胸前中心', '缓慢站姿'], ['large cape', 'vertical folds', 'shoulder weight', 'chest center', 'slow stance'], '权力和华丽元素优先进入外披层级。', 'Place power and ornament into outer-cape hierarchy.'),
      s('plain_inner_vow', '素色内誓', 'Plain Inner Vow', 'material', '内层素布说明誓言和自我约束', 'plain inner cloth showing vow and self-restraint', ['素色内袍', '粗布', '窄领', '袖口朴素', '低头'], ['plain inner robe', 'coarse cloth', 'narrow collar', 'simple cuffs', 'lowered head'], '性感、奢华和混乱元素优先被内誓层压低。', 'Lower sensual, luxurious, and chaotic elements through inner-vow layer.'),
      s('color_rank_band', '色带等级', 'Color-Band Rank', 'symbol', '颜色只以带状位置显示等级', 'color showing rank only through band placement', ['胸前色带', '袖边色线', '腰带色', '低饱和', '重复位置'], ['chest band', 'sleeve edge line', 'belt color', 'low saturation', 'repeated placement'], '色彩冲突必须收束为等级色带。', 'Constrain color conflict into rank bands.'),
      s('veil_concealment_degree', '面纱遮蔽度', 'Veil Concealment Degree', 'costume', '遮蔽程度成为神圣和禁忌的尺度', 'degree of concealment becoming scale of sacredness and taboo', ['半透明纱', '遮眼或遮口', '柔边', '面部留影', '手扶纱'], ['translucent veil', 'covered eyes or mouth', 'soft edge', 'facial shadow', 'hand on veil'], '神秘和异化元素优先转成可调遮蔽度。', 'Translate mystery and alienation into adjustable concealment degree.'),
      s('corded_waist_rule', '腰绳戒律', 'Corded-Waist Rule', 'symbol', '腰绳将衣物、誓言和身体纪律绑在一起', 'waist cord tying garment, vow, and bodily discipline together', ['腰绳', '绳结数量', '袍身收束', '垂下绳端', '站姿克制'], ['waist cord', 'numbered knots', 'cinched robe', 'hanging ends', 'restrained stance'], '欲望和权力元素优先被腰绳戒律规训。', 'Discipline desire and power through waist-cord rule.'),
      s('novice_simple_layer', '见习者简层', 'Novice Simple Layer', 'cultural_image', '低阶角色以少层、少符号和紧张姿态呈现', 'low-rank figure shown through few layers, few signs, and tense posture', ['单层袍', '小徽记', '袖口短', '抱书或器皿', '紧张眼神'], ['single robe layer', 'small emblem', 'short cuffs', 'book or vessel held', 'tense eyes'], '年轻、学徒和弱势身份优先进入见习法衣。', 'Translate youth, apprentice, and vulnerable identity into novice vestment.'),
      s('high_priest_volume', '高阶祭司衣量', 'High-Priest Volume', 'structure', '高阶身份通过大衣量和缓慢姿态显示', 'high rank shown through volume and slow posture', ['多层法衣', '宽袖', '厚披挂', '胸前圣物', '缓慢抬手'], ['multi-layer vestment', 'wide sleeves', 'heavy cape', 'chest relic', 'slow raised hand'], '贵族和宗教元素优先形成高阶祭司衣量。', 'Form high-priest volume from aristocratic and religious elements.'),
      s('ritual_apron_front', '仪式前围片', 'Ritual Front Apron', 'costume', '前身垂片承载符号、工具和职责', 'front hanging panel carrying signs, tools, and duties', ['前垂片', '刺绣边', '小工具袋', '中心符号', '正面可读'], ['front panel', 'embroidered edge', 'small tool pouch', 'central sign', 'frontal readability'], '职业和仪式道具优先集中到前身垂片。', 'Concentrate occupational and ritual props into front panel.'),
      s('mourning_vestment_black', '丧仪黑法衣', 'Mourning Black Vestment', 'cultural_image', '黑色法衣表达哀悼而非恐怖', 'black vestment expressing mourning rather than horror', ['哑光黑袍', '灰白边', '遮面纱', '小银饰', '安静低头'], ['matte black robe', 'gray-white edge', 'face veil', 'small silver ornament', 'quiet lowered head'], '黑暗元素必须哀悼化，不恐怖片化。', 'Make dark elements mourning-based, not horror-film based.'),
      s('tech_vestment_limit', '技术法衣限制', 'Tech-Vestment Limit', 'ontology', '技术只以织入光线和仪式接口出现', 'technology appearing only as woven light and ritual interface', ['细光线', '织物内嵌', '腕部符印', '无裸露电路', '静态姿态'], ['fine light lines', 'embedded fabric', 'wrist sigil', 'no exposed circuits', 'static pose'], '科幻元素必须服制化和仪式化，禁止赛博朋克失控。', 'Vestment-ritualize sci-fi elements, forbidding cyberpunk takeover.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' })
    ]
  },
  {
    slug: 'reliquary_vessel',
    name: '圣物容器',
    nameEn: 'Reliquary Vessel',
    focus: '容器、携带、守护、触碰禁令和物的神圣性统摄角色',
    focusEn: 'container, carrying, guarding, touch taboo, and object sanctity governing character',
    defaultKind: 'prop',
    defaultAffects: ['prop', 'pose', 'symbol', 'costume'],
    defaultControls: ['reliquary_vessel', 'sacred_object', 'guarded_touch'],
    items: [
      s('chest_reliquary_center', '胸前圣匣中心', 'Chest Reliquary Center', 'prop', '圣物盒位于胸前成为角色重心', 'reliquary box at chest becoming character gravity', ['小圣匣', '胸前链', '双手护持', '金属旧色', '低头注视'], ['small reliquary', 'chest chain', 'two-hand guarding', 'aged metal', 'lowered gaze'], '身份和危险元素优先被封进胸前圣匣。', 'Seal identity and danger into a chest reliquary.'),
      s('bell_staff_procession', '铃杖行仪', 'Bell-Staff Procession', 'prop', '长杖和铃声组织移动仪式', 'staff and bell sound organizing moving ritual', ['长杖', '小铃', '绳结', '垂直线', '慢步'], ['long staff', 'small bells', 'cord knots', 'vertical line', 'slow steps'], '旅行、法术和权力元素优先进入铃杖行仪。', 'Translate travel, magic, and power into bell-staff procession.'),
      s('incense_burner_weight', '香炉重量', 'Incense-Burner Weight', 'prop', '香炉作为手部重量和洁净边界', 'incense burner as hand weight and purification boundary', ['小香炉', '链条', '烟线', '低垂手', '庄重表情'], ['small censer', 'chain', 'smoke line', 'lowered hand', 'solemn face'], '气味、记忆和仪式感优先汇入香炉重量。', 'Pour scent, memory, and ritual feeling into censer weight.'),
      s('bead_count_oath', '念珠计数誓言', 'Bead-Count Oath', 'symbol', '珠串数量和手势说明重复祈祷', 'bead count and hand gesture showing repeated prayer', ['念珠', '手指拨珠', '重复圆点', '腕部垂坠', '安静眼神'], ['prayer beads', 'fingers moving beads', 'repeated dots', 'wrist drape', 'quiet eyes'], '时间、纪律和情绪优先通过念珠计数表达。', 'Express time, discipline, and emotion through bead counting.'),
      s('sealed_scroll_tube', '封存卷轴筒', 'Sealed Scroll Tube', 'prop', '卷轴被封存而非直接展开说明', 'scroll sealed rather than directly explained', ['卷轴筒', '封蜡', '绳封', '背带', '侧身携带'], ['scroll tube', 'wax seal', 'cord seal', 'strap', 'side carry'], '知识、命令和禁忌优先封存进卷轴筒。', 'Seal knowledge, orders, and taboo into scroll tubes.'),
      s('holy_water_flask', '净水小瓶', 'Holy-Water Flask', 'prop', '小瓶让洁净和防护成为可携带物', 'small flask making purification and protection portable', ['玻璃小瓶', '软木塞', '水位线', '腰间挂绳', '清澈反光'], ['glass vial', 'cork stopper', 'waterline', 'waist cord', 'clear reflection'], '治疗、防护和宗教元素优先成为净水小瓶。', 'Translate healing, protection, and religion into purification flask.'),
      s('boneless_relic_rule', '无骨圣物规则', 'Boneless Relic Rule', 'prop', '圣物只通过抽象材料表达，不出现冒犯性遗骸', 'relic shown through abstract material, not offensive remains', ['白石片', '旧布包', '小金属盒', '封条', '敬畏手势'], ['white stone piece', 'old cloth wrap', 'small metal box', 'seal strip', 'reverent gesture'], '死亡和神圣元素必须抽象化为无骨圣物。', 'Abstract death and sanctity into boneless relics.'),
      s('portable_altar_case', '便携祭坛箱', 'Portable Altar Case', 'prop', '箱体打开后成为微型仪式空间', 'case opening into a miniature ritual space', ['小箱', '折叠层', '布垫', '微型器物', '蹲跪姿态'], ['small case', 'folding layers', 'cloth pad', 'miniature items', 'kneeling pose'], '场景和仪式元素优先压缩成便携祭坛箱。', 'Compress setting and ritual elements into portable altar case.'),
      s('relic_guard_gloves', '圣物守护手套', 'Reliquary Guard Gloves', 'costume', '手套说明圣物不可直接触碰', 'gloves showing relic cannot be touched directly', ['白手套', '托举手势', '指尖距离', '小盒', '克制肩线'], ['white gloves', 'lifting gesture', 'fingertip distance', 'small box', 'restrained shoulders'], '危险和珍贵元素优先通过不可触碰手套表达。', 'Express danger and preciousness through untouchable gloves.'),
      s('living_relic_threshold', '活圣物阈值', 'Living-Relic Threshold', 'ontology', '圣物似乎有生命，但只以微光和姿态暗示', 'relic seems alive but only hinted through faint glow and posture', ['微光容器', '手部距离', '安静表情', '布料遮盖', '不可直视'], ['faintly glowing vessel', 'hand distance', 'quiet face', 'cloth cover', 'not directly viewed'], '超自然元素必须封存在容器中，不能让全身异化。', 'Keep supernatural elements sealed in a vessel, not full-body mutation.', { ontologyLevel: 4, risk: 'high' })
    ]
  },
  {
    slug: 'taboo_seal',
    name: '禁忌封存',
    nameEn: 'Taboo Sealing',
    focus: '封条、遮蔽、不可触碰、禁令和危险被控制的状态统摄角色',
    focusEn: 'seals, concealment, untouchability, prohibition, and controlled danger governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'pose', 'body'],
    defaultControls: ['taboo_seal', 'sealed_danger', 'controlled_risk'],
    items: [
      s('paper_seal_boundary', '纸符边界', 'Paper-Seal Boundary', 'symbol', '纸符贴在边界位置说明禁止越界', 'paper seals placed at boundaries to show prohibition', ['纸符', '衣襟边', '袖口封贴', '红线', '静止手势'], ['paper seal', 'lapel edge', 'cuff seal', 'red thread', 'still gesture'], '危险和超现实元素优先封在边界纸符上。', 'Seal danger and surreal elements onto boundary paper charms.'),
      s('covered_eye_taboo', '遮眼禁忌', 'Covered-Eye Taboo', 'costume', '视觉能力或禁令通过遮眼呈现', 'vision ability or prohibition shown through covered eyes', ['遮眼布', '面纱', '眼部阴影', '头部低垂', '手不触脸'], ['eye cloth', 'veil', 'eye shadow', 'lowered head', 'hands away from face'], '眼部异变优先转成遮蔽和禁令，不直接怪物化。', 'Translate eye mutation into concealment and prohibition, not direct monstrosity.', { ontologyLevel: 2, risk: 'medium' }),
      s('red_thread_restraint', '红线束缚', 'Red-Thread Restraint', 'symbol', '红线把禁令、关系和身体边界绑住', 'red thread tying prohibition, relation, and body boundary', ['红线', '手腕缠绕', '指间连接', '衣料勒痕', '克制动作'], ['red thread', 'wrist wrap', 'finger connection', 'fabric pressure mark', 'restrained motion'], '欲望、关系和危险优先转成红线束缚。', 'Translate desire, relation, and danger into red-thread restraint.'),
      s('mouth_silence_seal', '沉默口封', 'Mouth-Silence Seal', 'symbol', '口部封存表达誓言或不可说之事', 'mouth sealing expressing vow or unspeakable matter', ['口部薄纱', '小封贴', '闭口表情', '颈部绳结', '低声气质'], ['mouth veil', 'small seal patch', 'closed-mouth face', 'neck knot', 'low-voice aura'], '语言、秘密和仪式元素优先沉入口部封存。', 'Sink language, secret, and ritual elements into mouth sealing.', { ontologyLevel: 2, risk: 'medium' }),
      s('sealed_sleeve_hand', '封袖之手', 'Sealed-Sleeve Hand', 'costume', '手部力量被袖口、手套或绳带限制', 'hand power limited by cuff, glove, or cord', ['长袖遮手', '袖口封线', '手套', '手指半露', '不触碰姿态'], ['long sleeve hiding hand', 'cuff seal line', 'gloves', 'half-visible fingers', 'non-touching pose'], '手部异能或武装优先被封在袖口。', 'Seal hand powers or armament at the cuff.', { ontologyLevel: 3, risk: 'medium' }),
      s('forbidden_mark_under_cloth', '衣下禁纹', 'Forbidden Mark Under Cloth', 'symbol', '禁忌纹样只从衣物边缘露出', 'forbidden mark only showing at garment edges', ['边缘纹样', '领口半露', '袖内暗纹', '遮挡布层', '目光回避'], ['edge pattern', 'half-visible collar mark', 'inner-sleeve dark mark', 'covering layer', 'averted gaze'], '身体标记必须半露和受控，不全身铺满。', 'Keep body marks half-visible and controlled, not full-body coverage.'),
      s('locked_chest_binding', '锁胸封缚', 'Locked-Chest Binding', 'symbol', '胸前锁扣表达誓约、压抑或危险封存', 'front lock expressing oath, repression, or sealed danger', ['胸前锁扣', '交叉带', '硬质中心', '呼吸克制', '正面压迫'], ['front lock', 'cross straps', 'hard center', 'controlled breath', 'frontal pressure'], '情绪和危险优先集中到胸前封缚结构。', 'Concentrate emotion and danger into chest-binding structure.'),
      s('taboo_object_distance', '禁物距离', 'Taboo-Object Distance', 'prop', '角色与危险物保持一段可见距离', 'character keeping visible distance from dangerous object', ['托盘', '手套', '物件留白', '不直视', '小封条'], ['tray', 'gloves', 'object negative space', 'not looking directly', 'small seal'], '道具危险必须通过距离和封存表达。', 'Express prop danger through distance and sealing.'),
      s('black_wax_control', '黑蜡控制', 'Black-Wax Control', 'material', '黑蜡只作为封存材料，不变血腥效果', 'black wax as sealing material, not gore effect', ['黑蜡封', '滴蜡边', '旧纸', '暗金属', '慢动作'], ['black wax seal', 'wax drips', 'old paper', 'dark metal', 'slow motion'], '黑暗和液态元素优先转成封蜡，不血腥化。', 'Translate dark and liquid elements into sealing wax, not gore.'),
      s('danger_kept_symbolic', '危险保持象征', 'Danger Kept Symbolic', 'ontology', '高危元素只以封印、遮蔽和禁令存在', 'high-risk elements existing only as seal, concealment, and prohibition', ['封印', '遮挡层', '禁令文本感', '无展开身体异形', '低声姿态'], ['seal', 'covering layer', 'prohibition-text feeling', 'no expanded body mutation', 'quiet posture'], '所有超现实危险先符号化，禁止直接怪物化。', 'Symbolize all surreal danger first, forbidding direct monstrosity.', { ontologyLevel: 4, risk: 'high' })
    ]
  },
  {
    slug: 'austere_penitence',
    name: '苦修克制',
    nameEn: 'Austere Penitence',
    focus: '粗布、修补、低姿态、自我规训和物欲削减统摄角色',
    focusEn: 'coarse cloth, repair, lowered posture, self-discipline, and reduced desire governing character',
    defaultKind: 'material',
    defaultAffects: ['costume', 'material', 'pose', 'wear'],
    defaultControls: ['austere_penitence', 'poverty_vow', 'restraint'],
    items: [
      s('coarse_rope_cloth', '粗绳粗布', 'Coarse Rope and Cloth', 'material', '粗糙低价材料成为信念外壳', 'rough low-cost material becoming shell of belief', ['粗布袍', '麻绳', '磨白边', '无装饰', '低头'], ['coarse robe', 'hemp rope', 'faded edge', 'no ornament', 'lowered head'], '华丽和性感元素必须被粗布誓言压低。', 'Lower ornate and sensual elements through coarse-cloth vow.'),
      s('patched_knee_prayer', '跪祷补膝', 'Patched-Knee Prayer', 'wear', '膝部磨损说明长时间祈祷或训练', 'knee wear showing long prayer or training', ['膝部补片', '磨白布料', '跪姿暗示', '手扶衣摆', '灰尘'], ['knee patches', 'faded cloth', 'kneeling hint', 'hand on hem', 'dust'], '纪律和痛苦优先落在膝部使用痕迹。', 'Place discipline and pain onto knee use traces.'),
      s('barefoot_vow', '赤足誓约', 'Barefoot Vow', 'pose', '脚部的贫乏和接地感表达自我剥夺', 'bare or simple feet expressing self-denial and grounding', ['赤足或草鞋', '脚踝绳', '地面接触', '慢步', '尘土'], ['bare feet or straw sandals', 'ankle cord', 'ground contact', 'slow step', 'dust'], '旅行和宗教元素优先转成赤足誓约。', 'Translate travel and religion into barefoot vow.', { eras: ['primitive', 'slave', 'feudal', 'modern', 'timeless'] }),
      s('silent_bowl_life', '沉默钵生活', 'Silent-Bowl Life', 'prop', '一只碗概括角色的贫乏生活制度', 'one bowl summarizing the character’s poor life system', ['木碗', '双手捧持', '空碗', '粗袖', '安静眼神'], ['wooden bowl', 'two-hand hold', 'empty bowl', 'coarse sleeves', 'quiet eyes'], '生存和仪式元素优先压缩进一只钵。', 'Compress survival and ritual elements into one bowl.'),
      s('mended_sleeve_ethic', '缝袖伦理', 'Mended-Sleeve Ethic', 'wear', '袖口修补显示节俭和时间', 'cuff repair showing frugality and time', ['补线', '异色线', '磨破袖口', '手部露出', '手工痕'], ['repair stitch', 'mismatched thread', 'worn cuff', 'visible hands', 'handmade trace'], '损耗必须带有节俭和继续使用的伦理。', 'Wear must carry frugality and keep-using ethic.'),
      s('thin_body_discipline', '薄身纪律', 'Thin-Body Discipline', 'pose', '身体姿态削弱炫耀，只保留精神张力', 'body posture reducing display and keeping spiritual tension', ['收窄肩', '手臂贴身', '低头', '长线衣褶', '克制呼吸'], ['narrow shoulders', 'arms close', 'lowered head', 'long folds', 'controlled breath'], '力量和欲望优先转成薄身纪律。', 'Translate power and desire into thin-body discipline.'),
      s('weathered_pilgrim_skin', '风化朝圣皮肤', 'Weathered Pilgrim Skin', 'material', '外界环境在皮肤和衣物上留下非猎奇痕迹', 'environment leaving non-sensational traces on skin and garment', ['晒痕', '干裂唇', '风尘', '旧布遮阳', '疲惫眼神'], ['sun marks', 'dry lips', 'dust', 'old sun cloth', 'tired eyes'], '自然和苦难元素必须现实化为风化痕迹。', 'Realize nature and hardship as weathered traces.'),
      s('no_jewelry_rule', '无饰物规则', 'No-Jewelry Rule', 'symbol', '缺席的饰物本身成为身份声明', 'absence of jewelry becoming identity statement', ['空手腕', '无项链', '素领口', '粗绳替代', '干净留白'], ['empty wrist', 'no necklace', 'plain collar', 'cord substitute', 'clean negative space'], '财富和身份元素必须通过缺席和替代表达。', 'Express wealth and identity through absence and substitution.'),
      s('ash_gray_restraint', '灰烬克制色', 'Ash-Gray Restraint', 'material', '灰色不是阴森，而是降噪和悔罪', 'gray as quieting and penitence, not gloom', ['灰布', '灰白边', '低对比', '无亮面', '沉静表情'], ['gray cloth', 'gray-white edges', 'low contrast', 'no gloss', 'calm face'], '黑暗和悲伤元素优先降成灰烬克制色。', 'Lower darkness and sorrow into ash-gray restraint.'),
      s('penitence_not_horror', '苦修非恐怖', 'Penitence Not Horror', 'symbol', '痛苦只作为纪律证据，不制造恐怖片效果', 'pain as discipline evidence, not horror effect', ['旧绷带', '粗布', '无血痕', '低姿态', '安静手势'], ['old bandage', 'coarse cloth', 'no blood', 'low posture', 'quiet gesture'], '高危痛苦元素必须克制、无血、制度化。', 'Keep high-risk suffering restrained, bloodless, and institutionalized.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'oracle_veil',
    name: '神谕遮蔽',
    nameEn: 'Oracle Veiling',
    focus: '遮眼、半透明、不可直视、预言姿态和信息缺席统摄角色',
    focusEn: 'covered eyes, translucency, unviewability, prophetic posture, and information absence governing character',
    defaultKind: 'costume',
    defaultAffects: ['costume', 'face', 'pose', 'symbol'],
    defaultControls: ['oracle_veil', 'hidden_sight', 'prophetic_distance'],
    items: [
      s('blindfold_prophecy', '蒙眼预言', 'Blindfold Prophecy', 'symbol', '蒙眼让角色的观看转向内在或他处', 'blindfold turning character sight inward or elsewhere', ['蒙眼布', '平静脸', '手掌向外', '额前留白', '低声姿态'], ['blindfold', 'calm face', 'palm outward', 'forehead negative space', 'low-voice posture'], '眼部异变和神秘元素优先转成蒙眼预言。', 'Translate eye mutation and mystery into blindfold prophecy.', { ontologyLevel: 2, risk: 'medium' }),
      s('translucent_face_layer', '半透明面层', 'Translucent Face Layer', 'costume', '薄纱让脸可见又不可完全接近', 'thin veil making face visible but not fully accessible', ['薄纱', '面部柔化', '鼻梁轮廓', '唇部暗影', '手扶纱边'], ['thin veil', 'softened face', 'nose bridge outline', 'lip shadow', 'hand on veil edge'], '美貌和禁忌优先通过半透明面层调和。', 'Mediate beauty and taboo through translucent facial layer.'),
      s('third_eye_hidden', '第三眼被遮', 'Hidden Third Eye', 'ontology', '超自然视觉被遮住而非直接展示', 'supernatural vision hidden rather than directly displayed', ['额心遮饰', '垂珠', '小封印', '额发遮挡', '目光下垂'], ['forehead cover', 'hanging bead', 'small seal', 'forehead hair cover', 'lowered gaze'], '第三眼和神性视觉必须被遮蔽化。', 'Veil third-eye and divine vision.', { ontologyLevel: 4, risk: 'high' }),
      s('oracle_hand_language', '神谕手语', 'Oracle Hand Language', 'pose', '手势像在翻译不可说的信息', 'gesture reading as translating unspeakable information', ['指尖相触', '手掌翻转', '袖口垂落', '停顿动作', '安静脸'], ['fingertips touching', 'turned palm', 'falling cuff', 'paused motion', 'quiet face'], '语言和魔法元素优先落到手势语言。', 'Place language and magic elements into hand-sign language.'),
      s('veil_as_screen', '面纱如屏幕', 'Veil as Screen', 'ontology', '预言信息投在纱层上而非实体化', 'prophetic information projected onto veil layer rather than embodied', ['纱面微光', '细线图案', '冷色点', '脸后阴影', '无身体变形'], ['faint veil glow', 'fine line pattern', 'cool dots', 'shadow behind face', 'no body deformation'], '科幻或魔法信息必须纱屏化。', 'Make sci-fi or magic information veil-screen based.', { ontologyLevel: 3, eras: ['feudal', 'modern', 'near_future', 'timeless'], risk: 'medium' }),
      s('covered_mouth_oracle', '遮口神谕', 'Covered-Mouth Oracle', 'symbol', '话语被布层过滤，形成不可直说的权威', 'speech filtered by cloth, forming indirect authority', ['遮口布', '低声姿态', '颈部绳结', '眼神平静', '短句感符号'], ['mouth cloth', 'low-voice posture', 'neck knot', 'calm eyes', 'short-phrase signs'], '预言和秘密优先进入遮口结构。', 'Translate prophecy and secret into mouth-cover structure.'),
      s('water_bowl_vision', '水钵视象', 'Water-Bowl Vision', 'prop', '预言通过手中水面而非人物变异出现', 'vision appearing through water surface rather than character mutation', ['浅水钵', '手托容器', '水面反光', '低头看水', '静止长袖'], ['shallow water bowl', 'hand-held vessel', 'water reflection', 'looking down at water', 'still long sleeve'], '幻象和未来信息优先封存在水钵反光。', 'Seal visions and future information in water-bowl reflection.'),
      s('hair_curtain_seer', '发帘先知', 'Hair-Curtain Seer', 'costume', '头发像面纱一样遮蔽面部和视线', 'hair acting as veil over face and sight', ['长发帘', '半遮眼', '细发丝', '苍白脸部', '头部前倾'], ['long hair curtain', 'half-covered eyes', 'fine strands', 'pale face', 'forward head tilt'], '头发异化必须先作为遮蔽结构，而非蛇发怪物。', 'Use hair mutation first as concealment structure, not snake-hair monster.', { ontologyLevel: 2, risk: 'medium' }),
      s('oracle_sleepwalking', '梦游神谕', 'Sleepwalking Oracle', 'pose', '姿态像醒着却不完全在场', 'posture reads awake but not fully present', ['半闭眼', '轻抬手', '脚步漂移', '宽袖', '恍惚表情'], ['half-closed eyes', 'slightly raised hand', 'drifting step', 'wide sleeves', 'trance face'], '梦境和神秘元素优先转成梦游姿态。', 'Translate dream and mystery into sleepwalking posture.'),
      s('unreadable_face_rule', '不可读脸规则', 'UnReadable Face Rule', 'face', '神谕角色的脸必须保留信息缺口', 'oracle face must preserve an information gap', ['微遮眼', '无明确笑容', '脸部阴影', '柔焦边缘', '视线偏离'], ['slightly covered eyes', 'no clear smile', 'facial shadow', 'soft edge', 'averted gaze'], '表情和身份信息必须保留不可读性。', 'Keep expression and identity partly unreadable.')
    ]
  },
  {
    slug: 'procession_order',
    name: '公共游行',
    nameEn: 'Public Procession',
    focus: '队列、旗幡、仪仗、公共身份和移动秩序统摄角色',
    focusEn: 'formation, banners, ceremonial objects, public identity, and moving order governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['prop', 'costume', 'pose', 'symbol'],
    defaultControls: ['procession_order', 'public_ritual', 'formation'],
    items: [
      s('banner_bearer_identity', '执旗者身份', 'Banner-Bearer Identity', 'prop', '长旗让角色成为公共仪式的承载者', 'long banner making character bearer of public ritual', ['长旗', '竖直旗杆', '布面纹样', '双手握持', '前进步'], ['long banner', 'vertical pole', 'cloth pattern', 'two-hand hold', 'forward step'], '组织和信仰元素优先转成虚构旗幡。', 'Translate organization and faith into fictional banners.'),
      s('incense_procession_line', '香烟游行线', 'Incense Procession Line', 'material', '烟线说明角色处于缓慢移动的仪式中', 'smoke line showing character inside slow moving ritual', ['香炉', '烟线', '长袖', '低头步伐', '软边轮廓'], ['censer', 'smoke line', 'long sleeves', 'lowered walking step', 'soft edge silhouette'], '气氛和神圣元素优先成为游行烟线。', 'Translate atmosphere and sanctity into procession smoke lines.'),
      s('uniform_chant_step', '齐诵步伐', 'Uniform Chant Step', 'pose', '脚步和口型暗示群体齐诵', 'steps and mouth shape hinting collective chant', ['同步脚步', '微张口', '袍摆一致', '低目光', '节奏手势'], ['synchronized steps', 'slightly open mouth', 'matched hems', 'lowered gaze', 'rhythmic gesture'], '群体感必须通过单人姿态中的齐诵证据表达。', 'Express collectivity through chanting evidence inside a single figure.'),
      s('relic_carrier_procession', '圣物抬行者', 'Relic Carrier Procession', 'function', '角色以搬运圣物的方式组织身体', 'body organized by carrying a relic', ['双手托盘', '肩部紧张', '小圣匣', '慢步', '正面专注'], ['two-hand tray', 'tense shoulders', 'small reliquary', 'slow step', 'frontal focus'], '道具和任务优先变成圣物抬行责任。', 'Translate props and mission into relic-carrying responsibility.'),
      s('festival_mask_order', '祭典面具秩序', 'Festival Mask Order', 'symbol', '面具属于公共节仪，而非个人恐怖', 'mask belonging to public festival, not personal horror', ['仪式面具', '彩色边', '头带', '队列姿态', '手持小旗'], ['ritual mask', 'colored edge', 'headband', 'formation stance', 'small flag'], '面具和异化元素优先公共节仪化。', 'Public-festival translate mask and alienation elements.', { ontologyLevel: 2, risk: 'medium' }),
      s('pilgrim_badge_crowd', '朝圣徽章群体', 'Pilgrim-Badge Crowd', 'symbol', '小徽章证明角色属于朝圣人群', 'small badge proving character belongs to pilgrim crowd', ['小徽章', '布袋', '磨损鞋', '简袍', '疲惫微笑'], ['small badge', 'cloth bag', 'worn shoes', 'simple robe', 'tired slight smile'], '旅行和身份元素优先成为朝圣徽章系统。', 'Translate travel and identity into pilgrim badge system.'),
      s('funeral_procession_black', '葬礼队列黑', 'Funeral Procession Black', 'cultural_image', '黑色用于公共哀悼和队列纪律', 'black used for public mourning and formation discipline', ['黑袍', '白边', '低头队列感', '花或布带', '慢步'], ['black robe', 'white edge', 'lowered procession feeling', 'flower or ribbon', 'slow step'], '死亡和黑暗元素必须葬礼化，不恐怖片化。', 'Make death and darkness funeral-based, not horror-film based.'),
      s('bells_on_hem', '袍摆铃声', 'Hem-Bell Sound', 'symbol', '移动声音来自袍摆小铃和步伐', 'movement sound coming from hem bells and steps', ['袍摆小铃', '脚步节奏', '低垂布料', '金属小点', '慢动作'], ['hem bells', 'step rhythm', 'hanging cloth', 'small metal dots', 'slow motion'], '声音和节奏优先转成可见铃声结构。', 'Translate sound and rhythm into visible bell structures.'),
      s('public_vow_textile', '公共誓词布', 'Public-Vow Textile', 'symbol', '誓词写在布料而非品牌和logo上', 'vow written on cloth, not brands or logos', ['长布条', '虚构文字感', '手写边', '胸前或旗面', '庄重姿态'], ['long cloth strip', 'fictional text feel', 'handwritten edge', 'chest or banner surface', 'solemn posture'], '文字和组织信息优先变成公共誓词布。', 'Translate text and organization into public-vow textile.'),
      s('procession_not_scene', '游行非场景', 'Procession Not Scene', 'pose', '即使没有背景，角色也必须显示游行秩序', 'even without background, character must show procession order', ['前进脚步', '竖直道具', '袍摆方向', '正面留白', '公共表情'], ['forward step', 'vertical prop', 'hem direction', 'front negative space', 'public expression'], '场景信息必须压缩到单人姿态和携带物。', 'Compress setting information into single-body posture and carried object.')
    ]
  },
  {
    slug: 'clean_sacrifice',
    name: '献祭洁净',
    nameEn: 'Clean Sacrifice',
    focus: '牺牲感、洁净容器、无血暗示、交换关系和静默危险统摄角色',
    focusEn: 'sacrificial feeling, clean vessel, bloodless hint, exchange relation, and silent danger governing character',
    defaultKind: 'symbol',
    defaultAffects: ['prop', 'pose', 'symbol', 'material'],
    defaultControls: ['clean_sacrifice', 'bloodless_offering', 'exchange_ritual'],
    items: [
      s('empty_bowl_offering', '空碗献礼', 'Empty-Bowl Offering', 'prop', '空容器比内容物更重要', 'empty container more important than its contents', ['空碗', '双手托举', '白布', '低头', '安静留白'], ['empty bowl', 'two-hand lift', 'white cloth', 'lowered head', 'quiet negative space'], '危险和欲望优先被抽空为洁净容器。', 'Empty danger and desire into clean vessels.'),
      s('white_cloth_cover', '白布覆盖', 'White-Cloth Cover', 'material', '白布覆盖让不可见之物保持尊严', 'white cloth cover keeping unseen object dignified', ['白布', '覆盖轮廓', '边缘垂落', '手指轻压', '无血痕'], ['white cloth', 'covered shape', 'falling edge', 'fingers lightly pressing', 'no blood'], '禁忌内容必须覆盖，不直接展示。', 'Cover taboo contents instead of showing directly.'),
      s('single_flower_exchange', '单花交换', 'Single-Flower Exchange', 'prop', '一朵花作为交换、悼念或献礼核心', 'one flower as core of exchange, mourning, or offering', ['单枝花', '双手或胸前', '低饱和色', '干净衣袖', '柔和表情'], ['single flower', 'two hands or chest', 'low-saturation color', 'clean sleeves', 'soft face'], '浪漫和死亡元素优先压缩成单花献礼。', 'Compress romance and death into single-flower offering.'),
      s('thread_cut_vow', '断线誓约', 'Thread-Cut Vow', 'symbol', '断开的线说明交换、失去或仪式完成', 'cut thread showing exchange, loss, or ritual completion', ['断线', '手指夹线', '衣物小孔', '小剪刀', '静止表情'], ['cut thread', 'finger holding thread', 'tiny garment hole', 'small scissors', 'still face'], '关系和牺牲元素优先转成断线。', 'Translate relation and sacrifice into cut thread.'),
      s('sealed_food_offering', '封存食物供品', 'Sealed Food Offering', 'prop', '食物被封存后成为仪式物而非生活物', 'food sealed into ritual object rather than daily object', ['小盘', '布盖', '绳结', '谷物或果实', '洁净边缘'], ['small plate', 'cloth cover', 'cord knot', 'grain or fruit', 'clean edge'], '生存和丰饶元素优先变成封存供品。', 'Translate survival and abundance into sealed offering.'),
      s('mirror_as_sacrifice', '镜面替身', 'Mirror as Substitute', 'symbol', '镜子承接自我献祭但不表现伤害', 'mirror carrying self-sacrifice without depicting harm', ['小镜', '遮面反光', '双手持镜', '脸部偏离', '冷光'], ['small mirror', 'covered reflection', 'two-hand mirror hold', 'face averted', 'cool light'], '自我、影像和献祭优先转成镜面替身。', 'Translate self, image, and sacrifice into mirror substitute.'),
      s('wax_drop_count', '蜡滴计数', 'Wax-Drop Count', 'material', '蜡滴数量记录仪式时间', 'wax drops counting ritual time', ['白蜡', '小滴痕', '烛台', '桌布边', '耐心姿态'], ['white wax', 'small drops', 'candlestick', 'cloth edge', 'patient posture'], '时间和等待优先通过蜡滴计数表达。', 'Express time and waiting through wax-drop count.'),
      s('clean_blade_not_blood', '洁净刃非血', 'Clean Blade Not Blood', 'prop', '刃具只作为切断和界限，不表现血腥', 'blade as cutting boundary, not gore', ['小刀', '洁净反光', '白布旁', '手套', '刀尖朝下'], ['small blade', 'clean reflection', 'beside white cloth', 'gloves', 'tip down'], '刀具必须象征切断关系，不写成伤害展示。', 'Blade must symbolize cutting relation, not injury display.'),
      s('offering_label_tag', '供品标签', 'Offering Label Tag', 'symbol', '小标签说明供品的制度位置', 'small tag showing the offering’s institutional place', ['小纸签', '细绳', '虚构文字', '边缘编号', '手写感'], ['small paper tag', 'thin cord', 'fictional text', 'edge number', 'handwritten feel'], '身份和交换信息优先写入供品标签。', 'Write identity and exchange information into offering tags.'),
      s('sacrifice_kept_abstract', '献祭保持抽象', 'Sacrifice Kept Abstract', 'ontology', '献祭只作为交换和缺席，不转成残酷画面', 'sacrifice as exchange and absence, not cruelty image', ['空位', '覆盖物', '单一道具', '无血', '庄重留白'], ['empty place', 'covering object', 'single prop', 'no blood', 'solemn negative space'], '高危献祭元素必须抽象化、洁净化、无血化。', 'Abstract, clean, and bloodless-translate high-risk sacrifice.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'order_rank',
    name: '修会等级',
    nameEn: 'Order Rank',
    focus: '组织等级、戒律、徽记位置、职责分工和内部制度统摄角色',
    focusEn: 'organizational rank, rule, insignia placement, duty division, and internal institution governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'prop', 'pose'],
    defaultControls: ['order_rank', 'institutional_rank', 'duty_symbol'],
    items: [
      s('novice_mark_small', '见习小标', 'Novice Small Mark', 'symbol', '低阶身份只允许小而紧张的标记', 'low rank allowing only small tense marks', ['小胸针', '单色带', '短袍', '抱书', '紧张站姿'], ['small brooch', 'single color band', 'short robe', 'book held', 'tense stance'], '年轻和学徒元素优先转成见习小标。', 'Translate youth and apprentice elements into novice small marks.'),
      s('keeper_of_archive', '典籍守护者', 'Keeper of Archive', 'cultural_image', '修会职责通过书、钥匙和尘封袖口表达', 'order duty shown through book, key, and dusty cuffs', ['旧书', '钥匙串', '袖口尘', '低声眼神', '护书姿态'], ['old book', 'keyring', 'dusty cuffs', 'low voice gaze', 'book-guarding pose'], '学者、档案和宗教元素优先成为典籍守护身份。', 'Translate scholar, archive, and religion into keeper-of-archive identity.'),
      s('choir_rank_collar', '唱诗领级别', 'Choir-Collar Rank', 'symbol', '领口形状和颜色说明仪式声部', 'collar shape and color showing ritual voice part', ['白领片', '色边', '喉部中心', '轻张口', '双手合拢'], ['white collar piece', 'colored edge', 'throat center', 'slightly open mouth', 'hands joined'], '音乐和仪式元素优先进入唱诗领级别。', 'Translate music and ritual into choir-collar rank.'),
      s('warden_key_authority', '守门钥匙权威', 'Warden-Key Authority', 'prop', '钥匙说明边界管理和内部权限', 'keys showing boundary management and internal authority', ['钥匙串', '腰间挂环', '门形符号', '侧身守望', '暗金属'], ['keyring', 'waist hook', 'door-like sign', 'side guarding', 'dark metal'], '权力和场域信息优先成为守门钥匙系统。', 'Translate power and field information into warden-key system.'),
      s('scribe_ink_fingers', '抄写员墨指', 'Scribe Ink Fingers', 'material', '墨迹和纸张让职责比神秘更可读', 'ink and paper making duty more readable than mystery', ['墨指', '纸卷', '袖口黑点', '低头书写', '小刀裁纸'], ['inked fingers', 'paper roll', 'black cuff dots', 'writing lowered head', 'paper knife'], '文字和职业元素优先变成修会抄写职责。', 'Translate text and occupation into order-scribe duty.'),
      s('infirmary_order_care', '修会医护职责', 'Order Infirmary Care', 'function', '治疗职责嵌在法衣和洁净工具里', 'healing duty embedded in vestments and clean tools', ['白布包', '药瓶', '洁净袖口', '低声安抚', '手套'], ['white cloth packet', 'medicine vial', 'clean cuffs', 'soft reassurance', 'gloves'], '医疗和宗教元素优先成为修会医护制度。', 'Translate medicine and religion into order infirmary system.'),
      s('silent_guard_brother', '沉默守卫兄弟', 'Silent Guard Brother', 'cultural_image', '武装职责被修会纪律压低', 'armed duty lowered by order discipline', ['素袍内甲', '长杖', '无表情', '小徽记', '站在边界'], ['plain robe over armor', 'long staff', 'expressionless face', 'small mark', 'standing at boundary'], '武装和仪式元素优先成为沉默守卫。', 'Translate armament and ritual into silent guardian.'),
      s('council_elder_layer', '长老议会层', 'Council-Elder Layer', 'structure', '年长权威通过衣层和坐姿重量表达', 'elder authority expressed through layers and sitting weight', ['厚袍', '多层披肩', '旧戒指', '坐姿沉重', '慢抬手'], ['heavy robe', 'layered mantle', 'old ring', 'heavy sitting posture', 'slow raised hand'], '贵族和宗教权力优先变成长老衣层。', 'Translate aristocratic and religious power into elder layers.'),
      s('vow_token_on_neck', '颈部誓约牌', 'Neck Vow Token', 'symbol', '颈部牌饰记录个人戒律', 'neck token recording personal rule', ['颈牌', '细绳', '刻线', '贴近喉部', '低头露出'], ['neck token', 'thin cord', 'engraving lines', 'near throat', 'revealed by lowered head'], '个人秘密和组织归属优先集中到颈部誓约牌。', 'Concentrate personal secret and order belonging into neck vow token.'),
      s('rank_without_logo', '无Logo等级制', 'Logo-Free Rank System', 'symbol', '修会等级靠位置、颜色和材料，不靠真实标志', 'order rank using placement, color, and material instead of real logos', ['位置重复', '色带', '不同布料', '小编号', '无真实标识'], ['repeated placement', 'color band', 'different fabrics', 'small number', 'no real insignia'], '所有真实宗教或机构标志必须虚构化为位置等级。', 'Fictionalize all real religious or institutional signs into placement rank.')
    ]
  },
  {
    slug: 'dark_ceremony',
    name: '黑暗祭仪',
    nameEn: 'Dark Ceremony',
    focus: '黑色材料、蜡封、灰烬、禁忌圣物和低光庄重统摄角色',
    focusEn: 'black material, wax seal, ash, taboo relics, and low-light solemnity governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['material', 'symbol', 'costume', 'pose'],
    defaultControls: ['dark_ceremony', 'low_light_ritual', 'contained_darkness'],
    items: [
      s('matte_black_vestment', '哑黑法衣', 'Matte-Black Vestment', 'material', '黑色以吸光布料和层次构成庄重', 'black forming solemnity through light-absorbing fabric and layers', ['哑黑布', '深灰层', '无亮面', '长袖', '低光轮廓'], ['matte black cloth', 'dark gray layers', 'no gloss', 'long sleeves', 'low-light silhouette'], '黑暗元素优先材料化为哑黑层次。', 'Materialize dark elements into matte-black layers.'),
      s('black_wax_reliquary', '黑蜡圣匣', 'Black-Wax Reliquary', 'prop', '黑蜡封住圣匣而非制造恐怖感', 'black wax sealing reliquary rather than making horror feeling', ['黑蜡封', '小盒', '旧金属', '手套托举', '蜡滴边'], ['black wax seal', 'small box', 'old metal', 'gloved lifting', 'wax drip edge'], '危险和秘密优先封入黑蜡圣匣。', 'Seal danger and secret into black-wax reliquary.'),
      s('ash_line_face', '灰线面部', 'Ash-Line Face', 'symbol', '灰烬线条在脸上建立仪式规则', 'ash lines on face establishing ritual rule', ['灰线', '额头或颧骨', '无血色', '闭口', '低头'], ['ash line', 'forehead or cheekbone', 'bloodless pallor', 'closed mouth', 'lowered head'], '妆容和禁忌元素优先转成灰线规则。', 'Translate makeup and taboo elements into ash-line rule.'),
      s('candle_low_light_body', '烛下低光身体', 'Candle-Low Body', 'material', '烛光只勾出边缘和手部', 'candlelight outlining only edges and hands', ['暖小光', '手部高光', '黑袍边', '面部阴影', '静止姿态'], ['small warm light', 'hand highlight', 'black robe edge', 'facial shadow', 'still pose'], '光影和神秘元素优先压缩成烛下低光。', 'Compress lighting and mystery into candle-low illumination.'),
      s('forbidden_book_black', '禁书黑仪', 'Forbidden-Book Rite', 'prop', '书本承载禁忌而非场景恐怖', 'book carrying taboo rather than horror scene', ['黑皮书', '封扣', '旧纸边', '手套翻页', '不直视'], ['black-bound book', 'clasp', 'old paper edge', 'gloved page turn', 'not looking directly'], '知识和黑暗元素优先进入禁书。', 'Translate knowledge and darkness into forbidden book.'),
      s('charcoal_thread_binding', '炭黑线缚', 'Charcoal Thread Binding', 'symbol', '黑线把身体和圣物连接在克制范围内', 'black thread connecting body and relic within restraint', ['黑线', '腕部缠绕', '小圣物', '细密结', '手指分开'], ['black thread', 'wrist wrap', 'small relic', 'dense knots', 'separated fingers'], '关系和危险优先转成炭黑线缚。', 'Translate relation and danger into charcoal-thread binding.'),
      s('eclipse_collar_mark', '蚀日领记', 'Eclipse Collar Mark', 'symbol', '领口小圆缺图形表达黑暗天象', 'small eclipsed-circle at collar expressing dark celestial event', ['圆缺纹', '领口中心', '黑金低调', '抬颈', '无星云皮肤'], ['eclipsed circle', 'collar center', 'muted black-gold', 'raised neck', 'no nebula skin'], '宇宙和神性元素必须符号化在领口。', 'Symbolize cosmic and divine elements at the collar.', { ontologyLevel: 3, risk: 'medium' }),
      s('grave_silence_not_gore', '墓地静默非血腥', 'Grave Silence Not Gore', 'cultural_image', '死亡感通过静默、石色和旧布表达', 'death feeling expressed through silence, stone color, and old cloth', ['石灰色', '旧黑布', '低头', '干花', '无血迹'], ['stone gray', 'old black cloth', 'lowered head', 'dry flower', 'no blood'], '死亡和恐怖元素必须静默化、无血化。', 'Make death and horror elements silent and bloodless.'),
      s('hidden_cult_rank', '隐秘教阶', 'Hidden Cult Rank', 'symbol', '黑暗组织只通过位置等级和材料差异显示', 'dark order shown only through placement rank and material difference', ['同色不同材质', '小符位', '袖口等级', '遮脸角度', '队列感'], ['same color different material', 'small sign position', 'cuff rank', 'face-cover angle', 'formation feeling'], '组织感必须虚构、低调、等级化。', 'Keep organization fictional, subtle, and ranked.'),
      s('dark_power_contained', '黑暗力量封存', 'Dark Power Contained', 'ontology', '黑暗力量只作为被封住的迹象，不直接爆发', 'dark power as sealed trace, not direct eruption', ['封条', '微光裂线', '布层覆盖', '双手压制', '无怪物化'], ['seals', 'faint crack light', 'covered cloth layers', 'hands pressing down', 'no monstrosity'], '高超现实黑暗元素必须被封存和控制。', 'Seal and control highly surreal dark elements.', { ontologyLevel: 4, risk: 'high' })
    ]
  }
];

export const RITUAL_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
