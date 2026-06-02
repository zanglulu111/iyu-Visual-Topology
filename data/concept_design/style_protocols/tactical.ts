import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'TACTICAL';
const ROUTE_NAME = '武装战术';
const ROUTE_NAME_EN = 'Tactical System';
const ERAS = ['modern', 'contemporary', 'near_future', 'timeless'];
const FORBIDS = ['真实军警单位标识', '真实极端组织符号', '无功能武器堆叠', '无解释全身机甲化', '血腥猎奇展示', '廉价游戏装备拼贴'];

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
    slug: 'modular_loadout',
    name: '模块负载制度',
    nameEn: 'Modular Loadout System',
    focus: '任务模块、挂点、收纳位和负重平衡统摄全身',
    focusEn: 'mission modules, attachment points, storage positions, and weight balance governing the whole body',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'material', 'pose'],
    defaultControls: ['modular_loadout', 'mission_function', 'load_balance'],
    items: [
      s('plate_carrier_grid', '板载格栅负载', 'Plate-Carrier Grid Load', 'function', '胸前板载系统决定上半身秩序', 'front plate grid determining upper-body order', ['战术背心', '横向织带', '扁平刷袋', '胸前重心', '稳固站姿'], ['tactical vest', 'horizontal webbing', 'flat pouches', 'front weight', 'stable stance'], '外来元素优先转成胸前模块、织带格栅和任务收纳。', 'Translate outside elements into chest modules, webbing grids, and mission storage.'),
      s('belt_line_task_ring', '腰封任务环', 'Belt-Line Task Ring', 'function', '腰部形成一圈可读的任务工具带', 'waist forming a readable ring of mission tools', ['宽腰封', '侧挂袋', '手套扣', '短工具', '手靠腰线'], ['wide belt', 'side pouch', 'glove clip', 'short tool', 'hand near waist'], '道具和身份信息优先落到腰线任务环。', 'Place props and identity information onto the waist task ring.'),
      s('balanced_dual_shoulder', '双肩均衡负载', 'Balanced Dual-Shoulder Load', 'structure', '左右肩带和背负系统保持身体稳定', 'bilateral shoulder straps and carrying system keeping the body stable', ['双肩带', '背负包体', '对称扣具', '肩部压痕', '直立重心'], ['dual straps', 'back pack volume', 'symmetrical buckles', 'shoulder pressure marks', 'upright gravity'], '沉重、职业或旅行元素优先被均衡背负化。', 'Translate heavy, occupational, or travel elements into balanced carrying.'),
      s('quick_release_language', '快拆扣语言', 'Quick-Release Language', 'symbol', '快拆结构成为紧急行动和纪律感的符号', 'quick-release structure becoming a sign of urgency and discipline', ['快拆扣', '红色小拉片', '硬质织带', '清楚接口', '手指触扣'], ['quick buckle', 'small red pull tab', 'hard webbing', 'clear interface', 'finger on clasp'], '技术和危险感优先转成可解释的快拆接口。', 'Translate tech and danger into explainable quick-release interfaces.'),
      s('medical_task_insert', '医疗任务插槽', 'Medical Task Insert', 'function', '急救包和救援功能嵌入战术系统', 'first-aid and rescue functions embedded into tactical system', ['急救包', '剪刀套', '红白小标', '干净分区', '检查姿态'], ['medical pouch', 'shear sleeve', 'small red-white mark', 'clean zones', 'inspection pose'], '医生、救援或保护元素优先成为急救任务模块。', 'Translate doctor, rescue, or protection elements into medical task modules.'),
      s('radio_operator_rig', '通讯员挂载', 'Radio Operator Rig', 'function', '通讯线缆和耳麦组织角色权限', 'communication cables and headset organizing character authority', ['肩麦', '耳机线', '胸前电台', '线缆固定', '侧耳倾听'], ['shoulder mic', 'earpiece cable', 'chest radio', 'cable retainers', 'listening tilt'], '信息、指挥和科技元素优先转成通讯挂载。', 'Translate information, command, and tech elements into communication rigging.'),
      s('grenade_shape_absorption', '圆罐模块吸收', 'Canister Module Absorption', 'prop', '圆罐形物件只作为任务容器而非火力堆叠', 'cylindrical objects reading as task containers rather than firepower pileup', ['圆罐袋', '盖扣', '标签色环', '侧腰排列', '低调体积'], ['canister pouch', 'lid clasp', 'label color ring', 'side-waist row', 'low-profile volume'], '爆破、药剂或奇幻材料优先容器化，不写成武器堆。', 'Containerize explosive, chemical, or fantasy material instead of weapon piling.'),
      s('scout_light_pack', '侦察轻背包', 'Scout Light Pack', 'function', '轻量背包和观察工具定义侦察身份', 'light pack and observation tools defining scout identity', ['小背包', '望远工具', '细肩带', '收束外套', '前倾观察'], ['small pack', 'optic tool', 'thin straps', 'cinched jacket', 'forward observation'], '旅行、侦探和野外元素优先变成轻量侦察系统。', 'Translate travel, detective, and field elements into a light scout system.'),
      s('ammo_as_pattern', '弹袋图案化', 'Ammo-Pouch Patterning', 'symbol', '重复小袋形成节奏图案而不是暴力展示', 'repeating pouches forming rhythmic pattern rather than violent display', ['小袋重复', '胸腰节奏', '低饱和布料', '统一尺寸', '秩序网格'], ['repeated pouches', 'chest-waist rhythm', 'low-saturation fabric', 'uniform size', 'ordered grid'], '火力元素优先抽象成小袋节奏和秩序图案。', 'Abstract firepower elements into pouch rhythm and ordered pattern.'),
      s('civilian_task_overlay', '便装任务外覆', 'Civilian Task Overlay', 'function', '战术功能覆在普通衣物上保持可隐藏性', 'tactical function overlaying normal clothes while staying concealable', ['普通外套', '内侧挂点', '细腰包', '不显眼扣具', '自然站姿'], ['normal jacket', 'inner attachment points', 'slim waist pouch', 'subtle buckles', 'natural stance'], '职业、社会或时尚元素先保持便装，再嵌入任务功能。', 'Keep occupation, social, or fashion elements civilian first, then embed task function.')
    ]
  },
  {
    slug: 'concealed_weapon',
    name: '隐蔽武装',
    nameEn: 'Concealed Armament',
    focus: '伪装、隐藏携带、克制动作和危险延迟统摄角色',
    focusEn: 'disguise, hidden carry, restrained motion, and delayed danger governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'pose', 'symbol'],
    defaultControls: ['concealed_weapon', 'hidden_function', 'delayed_threat'],
    items: [
      s('tailored_hidden_holster', '精裁暗袋枪套', 'Tailored Hidden Holster', 'function', '正式外套内部隐藏功能位', 'formal outerwear hiding functional positions inside', ['合身外套', '腋下暗袋', '平整前襟', '手臂微收', '冷静表情'], ['fitted coat', 'underarm pocket', 'flat front', 'slightly held arm', 'calm face'], '高定、职业和战斗元素优先融合为精裁暗袋。', 'Fuse couture, occupation, and combat into tailored hidden pockets.'),
      s('sleeve_mechanism_hint', '袖口机关暗示', 'Sleeve-Mechanism Hint', 'prop', '危险只在袖口结构中被暗示', 'danger only hinted through cuff structure', ['窄袖口', '金属细边', '手腕压低', '半露接口', '克制手势'], ['narrow cuff', 'thin metal edge', 'lowered wrist', 'half-visible interface', 'restrained gesture'], '机械或武器元素只保留为袖口暗示，不展开成外露装备。', 'Keep mechanical or weapon elements as cuff hints, not exposed gear.'),
      s('cane_blade_protocol', '手杖剑礼仪', 'Cane-Blade Protocol', 'prop', '单一道具同时承担礼仪和危险', 'one prop carrying both etiquette and danger', ['手杖', '金属杖头', '手套', '挺直站姿', '留白轮廓'], ['cane', 'metal handle', 'glove', 'upright stance', 'clean silhouette'], '贵族、老派和武装元素优先汇入一件礼仪道具。', 'Pour aristocratic, old-school, and armed elements into one etiquette prop.', { eras: ['feudal', 'modern', 'contemporary', 'timeless'] }),
      s('dress_shoe_blade_logic', '礼鞋暗刃逻辑', 'Dress-Shoe Blade Logic', 'function', '脚部成为隐藏危险的最低声部', 'feet becoming the quietest register of hidden danger', ['尖头鞋', '硬鞋底', '低踢姿态', '裤脚遮挡', '微亮边缘'], ['pointed shoe', 'hard sole', 'low-kick posture', 'covered hem', 'slight shine edge'], '动作和武装元素优先沉到脚部结构。', 'Sink action and armament into foot structure.'),
      s('book_as_weapon_shell', '书本武装外壳', 'Book Weapon Shell', 'prop', '知识道具变成隐藏任务容器', 'knowledge prop becoming a hidden mission container', ['硬皮书', '书脊扣', '夹层', '抱书姿态', '安静眼神'], ['hardcover book', 'spine clasp', 'hidden layer', 'book-holding pose', 'quiet gaze'], '学者、宗教或间谍元素优先转成书本容器。', 'Translate scholar, ritual, or spy elements into book-container logic.'),
      s('evening_bag_compartment', '晚宴包夹层', 'Evening-Bag Compartment', 'function', '小型正式包成为隐蔽装备核心', 'small formal bag becoming hidden equipment core', ['小手包', '硬壳', '暗扣', '腕链', '侧身护包'], ['clutch bag', 'hard shell', 'hidden clasp', 'wrist chain', 'side pose guarding bag'], '红毯、社交和危险元素优先进入手包夹层。', 'Translate red-carpet, social, and danger elements into clutch compartments.'),
      s('hairpin_dagger_code', '发簪短刃编码', 'Hairpin Dagger Code', 'prop', '发饰在礼制和防身之间摇摆', 'hair ornament wavering between etiquette and defense', ['发簪', '盘发', '细金属', '颈部留白', '手扶发间'], ['hairpin', 'coiled hair', 'thin metal', 'neck negative space', 'hand near hair'], '东方、贵族或刺客元素优先化为发饰防身协议。', 'Translate eastern, aristocratic, or assassin elements into hair-ornament defense protocol.', { eras: ['feudal', 'modern', 'contemporary', 'timeless'] }),
      s('document_case_secret', '文件箱秘密', 'Document-Case Secret', 'prop', '公文箱把危险合法化和制度化', 'briefcase legalizing and institutionalizing danger', ['公文箱', '锁扣', '手套', '直线站姿', '冷灰材料'], ['briefcase', 'lock clasp', 'glove', 'straight stance', 'cool gray material'], '企业、侦探和战术元素优先压缩进文件箱。', 'Compress corporate, detective, and tactical elements into a document case.'),
      s('concealed_monk_tool', '僧袍内工具', 'Concealed Monk Tool', 'function', '宽袍和袖袋隐藏非炫耀性工具', 'wide robe and sleeve pockets hiding non-showy tools', ['宽袖', '绳结', '袖内重量', '低头', '布料垂坠'], ['wide sleeve', 'cord knot', 'sleeve weight', 'lowered head', 'fabric fall'], '仪式、武侠或旅行元素优先变成袍内隐蔽工具。', 'Translate ritual, wuxia, or travel elements into hidden robe tools.', { eras: ['feudal', 'modern', 'contemporary', 'timeless'] }),
      s('umbrella_defense_frame', '雨伞防身框架', 'Umbrella Defense Frame', 'prop', '日常雨具成为可解释防身结构', 'daily umbrella becoming an explainable defense structure', ['长伞', '弯柄', '湿痕', '单手握持', '城市外套'], ['long umbrella', 'curved handle', 'wet marks', 'one-hand grip', 'urban coat'], '通勤、城市和战斗元素优先进入雨伞防身框架。', 'Translate commuting, urban, and combat elements into umbrella defense frame.')
    ]
  },
  {
    slug: 'armor_protection',
    name: '护甲防护',
    nameEn: 'Armor Protection',
    focus: '受击区域、防护层、身体弱点和材料分区统摄角色',
    focusEn: 'impact zones, protective layers, body vulnerability, and material zoning governing character',
    defaultKind: 'structure',
    defaultAffects: ['silhouette', 'costume', 'material', 'wear'],
    defaultControls: ['armor_protection', 'impact_zone', 'material_paneling'],
    items: [
      s('soft_ballistic_layer', '软质防弹层', 'Soft Ballistic Layer', 'material', '柔软厚层保护身体核心', 'soft thick layers protecting the body core', ['厚马甲', '圆钝边缘', '压线', '暗色布料', '上身厚重'], ['padded vest', 'rounded edge', 'stitching', 'dark fabric', 'heavy torso'], '现代防护元素优先转成软质厚层，不做硬壳机甲。', 'Translate modern protection into soft padded layers, not hard mech armor.'),
      s('segmented_chest_plate', '分段胸甲', 'Segmented Chest Plate', 'structure', '胸前分片显示受击和活动逻辑', 'front segmentation showing impact and movement logic', ['分片胸甲', '活动缝', '侧扣', '磨损边', '挺胸站姿'], ['segmented chest plate', 'movement seams', 'side buckles', 'worn edges', 'upright chest'], '外来材料优先进入胸甲分片和活动缝。', 'Put outside material into chest plate segments and movement seams.'),
      s('shoulder_guard_authority', '护肩权力', 'Shoulder-Guard Authority', 'structure', '肩部防护放大权力和体量', 'shoulder protection amplifying authority and volume', ['护肩', '宽肩线', '斜面材料', '肩部划痕', '冷脸'], ['shoulder guards', 'wide shoulder line', 'beveled material', 'shoulder scratches', 'cold face'], '高定、贵族和战斗元素优先汇入肩部防护轮廓。', 'Fuse couture, aristocratic, and combat elements into shoulder protection silhouette.'),
      s('knee_elbow_survival', '膝肘生存护具', 'Knee-Elbow Survival Guards', 'function', '膝肘护具证明角色经常移动和倒地', 'knee and elbow guards proving frequent movement and falls', ['护膝', '护肘', '擦痕', '绑带', '弯膝重心'], ['knee pads', 'elbow pads', 'scratches', 'straps', 'bent-knee gravity'], '运动、废土和战斗元素优先成为关节防护。', 'Translate sport, wasteland, and combat elements into joint protection.'),
      s('transparent_shield_surface', '透明盾面', 'Transparent Shield Surface', 'prop', '防护以透明材料形成隔离关系', 'protection forming an isolation relation through transparent material', ['透明盾', '边框螺丝', '反光面', '手臂支撑', '隔离姿态'], ['transparent shield', 'frame screws', 'reflective face', 'arm support', 'blocking stance'], '秩序、镇暴或科幻元素优先成为透明隔离面。', 'Translate order, riot-control, or sci-fi elements into transparent barrier surfaces.'),
      s('lamellar_historical_grid', '札甲历史格栅', 'Lamellar Historical Grid', 'structure', '重复小甲片形成古典战斗秩序', 'repeated small plates forming historical combat order', ['小甲片', '绳结', '层叠胸腹', '肩挂', '古典直立'], ['small plates', 'cord knots', 'layered torso', 'shoulder hang', 'classical uprightness'], '古代、武侠或贵族元素优先转成可读甲片格栅。', 'Translate ancient, wuxia, or aristocratic elements into readable armor-plate grids.', { eras: ['slave', 'feudal', 'modern', 'timeless'] }),
      s('chainmail_underlayer', '锁子甲内层', 'Chainmail Underlayer', 'material', '金属环只从衣缝和边缘露出', 'metal rings only showing through seams and edges', ['锁子甲边', '衣领内露', '袖口金属', '细密反光', '克制体量'], ['chainmail edge', 'visible collar underlayer', 'metal cuff', 'fine reflection', 'restrained volume'], '奇幻和历史防护优先变成内层金属肌理。', 'Translate fantasy and historical protection into inner metal texture.', { eras: ['feudal', 'modern', 'timeless'] }),
      s('impact_scars_on_armor', '护甲受击疤', 'Impact Scars on Armor', 'wear', '损伤只落在防护材料上说明经历', 'damage placed on protective material to show experience', ['凹痕', '擦白边', '补片', '热痕', '旧绑带'], ['dents', 'whitened edges', 'patches', 'heat marks', 'old straps'], '危险和历史必须通过护甲受击证据表达。', 'Express danger and history through armor impact evidence.'),
      s('ceramic_plate_clean', '陶瓷板洁净防护', 'Clean Ceramic Plate Protection', 'material', '洁净硬板创造实验室式防护感', 'clean hard plates creating laboratory protection feeling', ['白灰硬板', '平滑边', '编号贴', '干净扣具', '无尘表面'], ['white-gray hard plates', 'smooth edge', 'number label', 'clean buckles', 'dust-free surface'], '医疗、科幻和战术元素优先成为洁净陶瓷防护。', 'Translate medical, sci-fi, and tactical elements into clean ceramic protection.', { eras: ['modern', 'contemporary', 'near_future'] }),
      s('ritual_armor_boundary', '仪式护甲边界', 'Ritual Armor Boundary', 'symbol', '护甲兼具防护和仪式身份', 'armor carrying both protection and ritual identity', ['刻纹护片', '绳结', '肩胸边界', '低饱和金属', '庄重姿态'], ['engraved plates', 'cord knots', 'shoulder-chest boundary', 'muted metal', 'solemn posture'], '宗教和战斗元素优先合并为仪式防护层。', 'Merge religious and combat elements into ritual protection layers.', { eras: ['feudal', 'modern', 'contemporary', 'timeless'] })
    ]
  },
  {
    slug: 'command_rank',
    name: '指挥军阶',
    nameEn: 'Command Rank',
    focus: '等级标记、纪律姿态、指挥关系和制度权力统摄角色',
    focusEn: 'rank marks, disciplined posture, command relation, and institutional power governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'pose', 'prop'],
    defaultControls: ['command_rank', 'hierarchy_mark', 'discipline_pose'],
    items: [
      s('shoulder_rank_authority', '肩章权力', 'Shoulder-Rank Authority', 'symbol', '肩部标记决定角色的制度位置', 'shoulder marks deciding institutional position', ['肩章', '硬肩', '直立脖颈', '金属小扣', '正面站姿'], ['epaulets', 'hard shoulders', 'upright neck', 'small metal buttons', 'frontal stance'], '权力、贵族或职业元素优先转成肩部等级标记。', 'Translate power, aristocracy, or occupation into shoulder rank marks.'),
      s('field_commander_coat', '野战指挥外套', 'Field Commander Coat', 'cultural_image', '外套长度和简洁徽记建立指挥感', 'coat length and restrained insignia creating command feeling', ['长外套', '腰带', '小徽记', '手套', '远看姿态'], ['long coat', 'belt', 'small insignia', 'gloves', 'distant gaze'], '战斗和礼制元素优先成为野战指挥外套。', 'Translate combat and etiquette elements into a field commander coat.'),
      s('operations_table_body', '作战桌身体', 'Operations-Table Body', 'pose', '角色像刚从地图和命令中抬头', 'character reads as lifting from maps and orders', ['低头转正', '手指压纸', '袖口整齐', '疲惫眼神', '桌边姿态'], ['looking up from below', 'finger pressing paper', 'neat cuffs', 'tired eyes', 'table-edge posture'], '智谋、军政和职业元素优先转成作战桌姿态。', 'Translate strategy, military politics, and occupation into operations-table posture.'),
      s('medal_as_burden', '勋章负担', 'Medal as Burden', 'symbol', '勋章不是装饰而是历史重量', 'medals as historical weight rather than decoration', ['少量勋章', '胸前重量', '旧金属', '沉默表情', '挺直背部'], ['few medals', 'chest weight', 'old metal', 'silent face', 'straight back'], '荣誉和创伤优先通过少量勋章重量表达。', 'Express honor and trauma through the weight of few medals.'),
      s('cadet_discipline_line', '军校生纪律线', 'Cadet Discipline Line', 'cultural_image', '年轻身体被训练线条和制服约束', 'young body constrained by training lines and uniform', ['整齐短发', '硬领', '直裤线', '擦亮鞋', '紧张眼神'], ['neat short hair', 'stiff collar', 'pressed trouser line', 'polished shoes', 'tense eyes'], '青春、学院和战斗元素优先成为军校纪律。', 'Translate youth, academy, and combat into cadet discipline.'),
      s('unit_color_without_logo', '无徽单位色', 'Unit Color Without Logo', 'symbol', '虚构单位只通过色条和位置显示', 'fictional unit shown only through color strips and placement', ['色条', '臂章位置', '编号', '无真实徽章', '重复小色块'], ['color strip', 'patch position', 'number', 'no real emblem', 'repeated small blocks'], '组织归属必须虚构化为色条和编号。', 'Fictionalize organization belonging as color strips and numbers.'),
      s('command_glove_gesture', '指挥手套手势', 'Command-Glove Gesture', 'pose', '手套和手势形成命令瞬间', 'gloves and gesture forming a command moment', ['白或黑手套', '两指指令', '袖口露出', '挺腕', '视线稳定'], ['white or black gloves', 'two-finger command', 'visible cuff', 'firm wrist', 'steady gaze'], '动作和权力元素优先落在手套指令姿态。', 'Place action and power into gloved command gesture.'),
      s('naval_officer_clean', '海军式洁净指挥', 'Naval Clean Command', 'cultural_image', '海事制服的洁净、线条和距离感', 'naval uniform cleanliness, line, and distance', ['双排扣', '白或深蓝', '金属扣', '帽檐阴影', '克制表情'], ['double-breasted front', 'white or navy', 'metal buttons', 'cap-brim shadow', 'restrained face'], '海洋、贵族和指挥元素优先转成洁净海军式秩序。', 'Translate ocean, aristocracy, and command into clean naval order.'),
      s('civil_militia_rank', '民兵等级拼接', 'Civil Militia Rank Patchwork', 'symbol', '非正规队伍用临时标记建立等级', 'irregular group using temporary marks to establish rank', ['布条臂章', '手写编号', '旧夹克', '不同材质', '警觉站姿'], ['cloth armband', 'handwritten number', 'old jacket', 'mixed materials', 'alert stance'], '废土、现实和武装元素优先成为临时等级系统。', 'Translate wasteland, reality, and armed elements into temporary rank systems.'),
      s('future_command_interface', '未来指挥界面', 'Future Command Interface', 'ontology', '指挥权通过轻量界面和局部发光表达', 'command expressed through light interface and local glow', ['透明屏片', '腕部界面', '冷光标记', '耳侧通讯', '安静站姿'], ['transparent display', 'wrist interface', 'cool light mark', 'ear communication', 'quiet stance'], '近未来元素只能作为指挥界面，不扩大成全身赛博化。', 'Keep near-future elements as command interfaces, not full cyberization.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' })
    ]
  },
  {
    slug: 'assassin_light',
    name: '刺客轻装',
    nameEn: 'Assassin Lightwear',
    focus: '安静移动、收束剪影、局部危险和不留痕迹统摄角色',
    focusEn: 'silent movement, narrowed silhouette, local danger, and trace removal governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['silhouette', 'costume', 'pose', 'prop'],
    defaultControls: ['assassin_light', 'silent_movement', 'narrow_silhouette'],
    items: [
      s('soft_sole_silence', '软底无声', 'Soft-Sole Silence', 'function', '脚部装备决定角色的潜行逻辑', 'footwear deciding the stealth logic', ['软底鞋', '绑带脚踝', '低步幅', '裤脚收束', '地面轻触'], ['soft soles', 'ankle wraps', 'low stride', 'cinched hem', 'light floor contact'], '动作和战斗元素优先转成脚步静音。', 'Translate action and combat elements into quiet footwork.'),
      s('narrow_sleeve_blade', '窄袖短刃', 'Narrow-Sleeve Short Blade', 'function', '短刃藏在窄袖与手腕动作里', 'short blade hidden in narrow sleeve and wrist motion', ['窄袖', '短刃暗示', '腕部绑带', '半握拳', '侧身'], ['narrow sleeve', 'hinted short blade', 'wrist wrap', 'half fist', 'side stance'], '危险只在手腕和袖口显露。', 'Reveal danger only at wrist and cuff.'),
      s('hood_shadow_face', '兜帽面部阴影', 'Hood-Shadow Face', 'symbol', '遮蔽面部但保留清楚身份轮廓', 'obscuring face while keeping clear identity silhouette', ['低兜帽', '鼻梁阴影', '下颌线', '肩颈收束', '少量眼光'], ['low hood', 'nose shadow', 'jawline', 'cinched neck', 'small eye light'], '神秘和职业元素优先进入面部遮蔽秩序。', 'Translate mystery and occupation into face-obscuring order.'),
      s('courtesan_assassin_mix', '社交刺客', 'Social Assassin', 'cultural_image', '礼仪服饰内部藏有冷静危险', 'etiquette clothing holding calm danger inside', ['精致外层', '暗袋', '手套', '微笑克制', '贴身小刃'], ['refined outer layer', 'hidden pocket', 'gloves', 'restrained smile', 'small close blade'], '红毯、贵族或社交元素优先与隐蔽危险融合。', 'Fuse red-carpet, aristocratic, or social elements with concealed danger.'),
      s('rooftop_runner_line', '屋顶奔行线', 'Rooftop Runner Line', 'pose', '身体像准备跨越屋顶边缘', 'body reads as ready to cross a rooftop edge', ['前倾', '收窄外套', '绑带腿部', '背后短包', '目光远点'], ['forward lean', 'narrow coat', 'leg straps', 'short back bag', 'distant gaze'], '城市、动作和武侠元素优先转成屋顶移动线。', 'Translate city, action, and wuxia elements into rooftop movement line.'),
      s('ink_black_layering', '墨黑层叠', 'Ink-Black Layering', 'material', '黑色不是一片，而是不同吸光层', 'blackness made of multiple light-absorbing layers', ['哑光黑', '深灰层', '布面差异', '阴影边', '低光轮廓'], ['matte black', 'dark gray layers', 'fabric contrast', 'shadow edge', 'low-light silhouette'], '暗色风格必须分层，不做整块黑。', 'Layer dark style instead of using one flat black.'),
      s('paper_thin_throwing_tool', '纸薄投掷器', 'Paper-Thin Throwing Tool', 'prop', '投掷工具像纸片一样轻薄低声', 'throwing tool reading paper-thin and quiet', ['薄片', '袖内收纳', '指尖夹持', '无光金属', '小尺度'], ['thin pieces', 'sleeve storage', 'fingertip hold', 'dull metal', 'small scale'], '武器元素优先轻薄化，避免巨大化火力。', 'Make weapon elements light and thin, avoiding oversized firepower.'),
      s('temple_shadow_killer', '寺院影杀', 'Temple-Shadow Killer', 'cultural_image', '宗教空间的克制和刺客逻辑结合', 'religious restraint combined with assassin logic', ['素袍', '窄袖', '念珠暗袋', '低头', '无声步'], ['plain robe', 'narrow sleeve', 'hidden rosary pocket', 'lowered head', 'silent step'], '仪式和战斗元素优先变成克制的寺院暗影。', 'Translate ritual and combat into restrained temple shadow.', { eras: ['feudal', 'modern', 'timeless'] }),
      s('masked_identity_cut', '面具身份切口', 'Masked Identity Cut', 'symbol', '面具只切出身份，不变恐怖道具', 'mask cutting identity without becoming horror prop', ['半面具', '清晰边线', '无表情面', '收束发型', '冷静视线'], ['half mask', 'clear edge line', 'expressionless surface', 'cinched hair', 'calm gaze'], '异化和神秘元素优先成为克制面具边界。', 'Translate alienation and mystery into restrained mask boundaries.', { ontologyLevel: 2, risk: 'medium' }),
      s('exit_route_body', '退路身体', 'Exit-Route Body', 'pose', '角色的姿态永远指向出口和撤离', 'character posture always points toward exit and withdrawal', ['半侧身', '一脚后撤', '肩线转动', '手靠门边', '警觉眼神'], ['half-profile', 'one foot back', 'rotating shoulders', 'hand near door', 'alert gaze'], '场景和动作信息优先沉入随时撤离的身体。', 'Sink setting and action information into a body ready to leave.')
    ]
  },
  {
    slug: 'duel_ceremony',
    name: '决斗礼仪',
    nameEn: 'Duel Ceremony',
    focus: '正式规则、单一武器、间距、姿态和尊严冲突统摄角色',
    focusEn: 'formal rules, single weapon, distance, posture, and dignified conflict governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['pose', 'costume', 'prop', 'symbol'],
    defaultControls: ['duel_ceremony', 'single_weapon', 'formal_distance'],
    items: [
      s('single_sword_empty_space', '单剑留白', 'Single-Sword Negative Space', 'prop', '一把剑和大量留白构成对抗', 'one sword and large negative space forming conflict', ['单剑', '空旷轮廓', '手套', '直背', '剑尖下垂'], ['single sword', 'open silhouette', 'gloves', 'straight back', 'lowered tip'], '战斗元素必须收束到单一武器和留白。', 'Constrain combat elements to one weapon and negative space.', { eras: ['feudal', 'modern', 'timeless'] }),
      s('glove_challenge_code', '手套挑战编码', 'Glove-Challenge Code', 'symbol', '手套成为礼仪化冲突的启动器', 'gloves becoming the trigger of ritualized conflict', ['白手套', '手套折痕', '抬手动作', '硬领', '克制怒意'], ['white glove', 'glove crease', 'raised hand', 'stiff collar', 'restrained anger'], '情绪和暴力优先转成礼仪挑战手势。', 'Translate emotion and violence into formal challenge gesture.'),
      s('pistol_duel_box', '手枪决斗盒', 'Pistol-Duel Box', 'prop', '火器被礼仪盒和距离规则驯化', 'firearm domesticated by etiquette case and distance rule', ['木盒', '成对手枪', '绒布内衬', '手套', '侧身站立'], ['wooden case', 'paired pistols', 'velvet lining', 'gloves', 'side stance'], '现代武装必须被决斗规则和盒装礼仪限制。', 'Limit modern armament through duel rules and boxed etiquette.', { eras: ['modern', 'timeless'] }),
      s('fencing_school_line', '击剑学院线', 'Fencing-School Line', 'pose', '击剑训练让身体成为直线和弧线', 'fencing training making the body into lines and arcs', ['击剑服', '细剑', '前后步', '手臂直线', '面罩旁置'], ['fencing suit', 'foil', 'front-back stance', 'straight arm', 'mask aside'], '学院、战斗和贵族元素优先变成击剑线条。', 'Translate academy, combat, and aristocracy into fencing lines.'),
      s('samurai_formal_pause', '武士礼停顿', 'Samurai Formal Pause', 'cultural_image', '拔刀之前的礼法停顿统摄角色', 'formal pause before drawing the blade governing character', ['刀鞘', '跪坐或直立', '宽袖', '腰间重心', '静眼'], ['scabbard', 'kneeling or upright', 'wide sleeves', 'waist gravity', 'still eyes'], '东方战斗元素优先进入礼停顿，不直接动作爆发。', 'Put eastern combat elements into formal pause, not direct action burst.', { eras: ['feudal', 'modern', 'timeless'] }),
      s('court_duelist_silk', '宫廷决斗丝绸', 'Court-Duelist Silk', 'material', '华丽布料和危险保持紧张平衡', 'luxurious fabric and danger held in tense balance', ['丝绸袖', '细腰带', '佩剑', '亮暗反差', '优雅站姿'], ['silk sleeves', 'slim belt', 'sword at waist', 'light-dark contrast', 'elegant stance'], '高定和战斗元素优先成为宫廷决斗礼服。', 'Translate couture and combat into court-duelist attire.', { eras: ['feudal', 'modern', 'timeless'] }),
      s('honor_mark_at_chest', '胸前荣誉标记', 'Chest Honor Mark', 'symbol', '冲突的理由被压缩成胸前标记', 'reason for conflict compressed into a chest mark', ['胸针', '色带', '小徽章', '手按胸口', '庄重表情'], ['brooch', 'ribbon', 'small badge', 'hand on chest', 'solemn face'], '动机和阵营信息优先成为胸前荣誉标记。', 'Translate motive and faction into chest honor mark.'),
      s('ritual_distance_floor', '仪式距离脚步', 'Ritual-Distance Footwork', 'pose', '脚步间距说明规则、克制和危险', 'foot distance showing rule, restraint, and danger', ['前后脚', '鞋尖方向', '地面留白', '膝部稳定', '身体微转'], ['front-back feet', 'toe direction', 'floor negative space', 'stable knees', 'slight torso turn'], '动作冲突优先由脚步间距解决。', 'Resolve action conflict through foot distance.'),
      s('masked_ball_duel', '假面舞会决斗', 'Masked-Ball Duel', 'cultural_image', '社交伪装和正式对抗叠在一起', 'social disguise and formal confrontation layered together', ['假面', '礼服', '细剑', '烛光金属', '半转身'], ['mask', 'formal dress', 'rapier', 'candlelit metal', 'half turn'], '夜场、贵族和战斗元素优先变成假面决斗协议。', 'Translate nightlife, aristocracy, and combat into masked duel protocol.', { eras: ['feudal', 'modern', 'timeless'] }),
      s('bloodless_defeat_sign', '无血败北标记', 'Bloodless Defeat Sign', 'symbol', '失败通过衣物细节而非伤口呈现', 'defeat shown through clothing details rather than wounds', ['断扣', '落下手套', '歪斜领口', '剑尖触地', '沉默低头'], ['broken button', 'fallen glove', 'crooked collar', 'tip touching ground', 'silent lowered head'], '胜负和伤害必须无血化为礼仪细节。', 'Make victory and harm bloodless as etiquette details.')
    ]
  },
  {
    slug: 'riot_control',
    name: '镇暴控制',
    nameEn: 'Riot Control',
    focus: '隔离、防护、警示、群体秩序和压迫距离统摄角色',
    focusEn: 'separation, protection, warning, crowd order, and oppressive distance governing character',
    defaultKind: 'function',
    defaultAffects: ['prop', 'costume', 'material', 'pose'],
    defaultControls: ['riot_control', 'barrier_logic', 'warning_marks'],
    items: [
      s('transparent_barrier_line', '透明隔离线', 'Transparent Barrier Line', 'function', '透明盾定义人物和外部的边界', 'transparent shield defining boundary between character and outside', ['透明盾', '边缘反光', '手臂支撑', '半遮身体', '正面压力'], ['transparent shield', 'edge reflection', 'arm support', 'half-covered body', 'front pressure'], '冲突和防护元素优先变成透明隔离边界。', 'Translate conflict and protection into transparent separating boundaries.'),
      s('warning_stripe_order', '警示条秩序', 'Warning-Stripe Order', 'symbol', '警示色只用于少量功能位置', 'warning color used only in few functional positions', ['黄黑条', '小面积橙色', '边缘标记', '护具编号', '清楚分区'], ['yellow-black stripe', 'small orange accent', 'edge marks', 'guard number', 'clear zones'], '高饱和色优先收束成警示条，不扩散全身。', 'Constrain high saturation into warning stripes, not full-body spread.'),
      s('helmet_face_distance', '头盔面部距离', 'Helmet-Face Distance', 'structure', '头盔让面部变得制度化和不可亲近', 'helmet making face institutional and distant', ['防护头盔', '透明面罩', '下颌带', '眼神隔层', '僵直颈部'], ['protective helmet', 'clear visor', 'chin strap', 'eye barrier', 'stiff neck'], '身份和情绪必须穿过头盔距离表达。', 'Express identity and emotion through helmet distance.'),
      s('body_wall_stance', '人墙站姿', 'Body-Wall Stance', 'pose', '身体像墙一样占住正面空间', 'body occupying frontal space like a wall', ['双脚分开', '盾贴身', '肩部平行', '膝盖微弯', '正面压迫'], ['wide feet', 'shield close', 'parallel shoulders', 'slightly bent knees', 'frontal pressure'], '动作和群体秩序优先落到人墙姿态。', 'Place action and crowd order into body-wall posture.'),
      s('protective_padding_bulk', '软垫体量控制', 'Protective Padding Bulk', 'material', '软垫增加体量但保持人体可读', 'padding adding volume while keeping body readable', ['厚护垫', '圆钝轮廓', '绑带', '暗色布面', '关节留缝'], ['thick padding', 'rounded silhouette', 'straps', 'dark fabric', 'joint gaps'], '护甲和机械感优先软垫化，避免机甲化。', 'Translate armor and mechanical feeling into padding, avoiding mech form.'),
      s('crowd_number_system', '群控编号系统', 'Crowd-Control Number System', 'symbol', '角色归属通过编号而非真实徽章呈现', 'belonging shown through numbers rather than real insignia', ['大编号', '臂章位置', '背后数字', '无真实徽章', '统一字体'], ['large number', 'patch position', 'back number', 'no real emblem', 'uniform type'], '组织必须虚构化为编号和排布。', 'Fictionalize organization into numbers and placement.'),
      s('nonlethal_tool_grid', '非致命工具网格', 'Nonlethal Tool Grid', 'function', '控制工具按规则排列而不是武器炫耀', 'control tools arranged by rule rather than weapon display', ['短棍', '束带', '喷罐袋', '手套', '腰侧排列'], ['baton', 'restraint ties', 'spray can pouch', 'gloves', 'side-waist order'], '武装元素优先非致命控制化。', 'Translate armament into nonlethal control.'),
      s('rain_riot_surface', '雨中镇暴表面', 'Rain-Riot Surface', 'material', '雨水把盾面、头盔和外套连成冷硬系统', 'rain connecting shield, helmet, and coat into a cold hard system', ['盾面水痕', '雨衣', '反光条', '湿手套', '冷白高光'], ['water on shield', 'raincoat', 'reflective strip', 'wet gloves', 'cold white highlights'], '天气、城市和紧张感优先转成雨中控制表面。', 'Translate weather, city, and tension into rainy control surfaces.'),
      s('deescalation_open_hand', '降级开放手势', 'Deescalation Open Hand', 'pose', '手势表达控制和克制而非攻击', 'gesture showing control and restraint rather than attack', ['张开手掌', '盾在侧', '脚步稳定', '面罩反光', '压低肩'], ['open palm', 'shield aside', 'stable feet', 'visor reflection', 'lowered shoulders'], '冲突动作优先转成降级手势。', 'Translate conflict action into deescalation gesture.'),
      s('future_crowd_interface', '未来群控界面', 'Future Crowd Interface', 'ontology', '未来控制只以透明界面和光条存在', 'future control existing only as transparent interface and light strips', ['透明HUD片', '腕部光条', '盾面图形', '冷色边光', '无全身义体'], ['transparent HUD piece', 'wrist light strip', 'shield graphic', 'cool edge light', 'no full-body cybernetics'], '科幻元素只能作为群控界面，禁止全身赛博战警化。', 'Keep sci-fi as crowd-control interface, forbidding full cyber cop transformation.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' })
    ]
  },
  {
    slug: 'survival_combat',
    name: '生存战斗',
    nameEn: 'Survival Combat',
    focus: '低资源、修补、携行、生存优先和环境适应统摄角色',
    focusEn: 'low resource, repair, carrying, survival priority, and environmental adaptation governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'material', 'wear'],
    defaultControls: ['survival_combat', 'low_resource', 'environment_fit'],
    items: [
      s('water_first_loadout', '水源优先负载', 'Water-First Loadout', 'function', '水袋和饮水系统比武器更重要', 'water pouch and drinking system more important than weapons', ['水袋', '软管', '肩带固定', '尘土', '干裂唇'], ['water pouch', 'tube', 'strap fixing', 'dust', 'dry lips'], '废土、旅行和战斗元素优先以水源系统裁决。', 'Resolve wasteland, travel, and combat elements through water systems.'),
      s('rope_knot_survival', '绳结生存学', 'Rope-Knot Survival', 'function', '绳索和结法成为万能生存结构', 'rope and knots becoming universal survival structure', ['绳圈', '复杂结', '挂扣', '手部粗糙', '可拆挂载'], ['rope coils', 'complex knots', 'hooks', 'rough hands', 'removable carry'], '道具和结构冲突优先用绳结连接。', 'Connect prop and structure conflicts through knots.'),
      s('salvaged_plate_mix', '拾荒护片混搭', 'Salvaged Plate Mix', 'material', '不同来源材料被生存逻辑重新拼合', 'materials from different sources reassembled by survival logic', ['异材护片', '螺丝', '旧塑料', '金属边', '不对称分区'], ['mixed plates', 'screws', 'old plastic', 'metal edge', 'asymmetric zones'], '混搭元素必须有拾荒和修补理由。', 'Mixed elements must have salvage and repair reasons.'),
      s('compact_blade_utility', '短刃工具化', 'Compact Blade Utility', 'prop', '短刃首先是工具，其次才是武器', 'short blade as tool first and weapon second', ['短刀', '磨损刀鞘', '绳柄', '腰侧', '实用握法'], ['short blade', 'worn sheath', 'cord handle', 'side waist', 'practical grip'], '暴力元素优先工具化和生存化。', 'Toolify and survivalize violent elements.'),
      s('desert_wrap_protection', '沙地包裹防护', 'Desert Wrap Protection', 'costume', '防晒、防尘和保水组织服装层', 'sun, dust, and water protection organizing garment layers', ['头巾', '口鼻遮挡', '浅土色', '宽松层', '眯眼'], ['head wrap', 'mouth cover', 'pale earth tone', 'loose layers', 'squinting eyes'], '沙漠、末世和战斗元素优先转成环境包裹。', 'Translate desert, apocalypse, and combat elements into environmental wrapping.'),
      s('winter_layer_survival', '寒地层叠生存', 'Winter Layer Survival', 'costume', '保温层和可活动性共同组织轮廓', 'insulation and mobility jointly organizing silhouette', ['多层外套', '毛边', '手套', '靴筒', '呼气冷感'], ['layered coat', 'fur edge', 'gloves', 'boot shaft', 'cold breath'], '寒冷、北方和战斗元素优先进入保温层叠。', 'Translate cold, northern, and combat elements into insulation layers.'),
      s('campfire_smoke_trace', '营火烟痕', 'Campfire Smoke Trace', 'material', '长期野外生活在衣物上留下烟痕', 'long field living leaving smoke traces on clothes', ['烟灰边', '火星小洞', '暗色袖口', '旧毯子', '疲惫坐姿'], ['smoke-gray edges', 'spark holes', 'dark cuffs', 'old blanket', 'tired sitting pose'], '生活、废土和旅行感优先转成营火痕迹。', 'Translate life, wasteland, and travel feeling into campfire traces.'),
      s('forager_pouch_map', '采集者口袋图', 'Forager Pouch Map', 'function', '口袋按食物、药草和小工具分类', 'pockets categorized by food, herbs, and small tools', ['多小袋', '草药束', '折叠地图', '布包', '观察手势'], ['many small pouches', 'herb bundles', 'folded map', 'cloth packet', 'observing gesture'], '自然、医学和生存元素优先变成采集口袋系统。', 'Translate nature, medicine, and survival into forager pocket systems.'),
      s('shelter_patch_cloak', '庇护补片斗篷', 'Shelter-Patch Cloak', 'costume', '斗篷像可移动临时庇护所', 'cloak reading as movable temporary shelter', ['大斗篷', '补片', '绳扣', '防雨面', '身体缩入'], ['large cloak', 'patches', 'cord clasp', 'rainproof face', 'body tucked in'], '幻想、旅行和贫困元素优先收进可庇护斗篷。', 'Translate fantasy, travel, and poverty elements into sheltering cloak.', { eras: ['feudal', 'modern', 'contemporary', 'timeless'] }),
      s('last_resource_order', '最后资源秩序', 'Last-Resource Order', 'symbol', '角色身上每件东西都像最后一件可用物', 'every object reads like the last usable thing', ['少量道具', '反复修补', '小心携带', '无浪费', '警觉眼神'], ['few props', 'repeated repair', 'careful carrying', 'no waste', 'alert gaze'], '所有华丽或混乱元素必须被生存资源逻辑压低。', 'Lower all ornate or chaotic elements through survival-resource logic.')
    ]
  },
  {
    slug: 'training_body',
    name: '训练身体',
    nameEn: 'Training Body',
    focus: '重复练习、身体纪律、护具磨损和动作记忆统摄角色',
    focusEn: 'repetition, bodily discipline, guard wear, and motion memory governing character',
    defaultKind: 'pose',
    defaultAffects: ['pose', 'body', 'wear', 'costume'],
    defaultControls: ['training_body', 'discipline', 'motion_memory'],
    items: [
      s('wrapped_hand_memory', '缠手记忆', 'Wrapped-Hand Memory', 'wear', '手部缠带记录训练次数', 'hand wraps recording training repetition', ['缠手', '指节磨损', '胶布', '拳头半握', '肩部放松'], ['hand wraps', 'knuckle wear', 'tape', 'half fist', 'relaxed shoulders'], '格斗和劳动元素优先转成手部训练痕迹。', 'Translate combat and labor into hand training traces.'),
      s('boxing_gym_sweat', '拳馆汗光', 'Boxing-Gym Sweat', 'material', '汗光和旧护具建立训练空间感', 'sweat shine and old guards creating training-space feeling', ['汗光', '旧背心', '护齿盒', '毛巾', '沉肩'], ['sweat shine', 'old tank', 'mouthguard case', 'towel', 'dropped shoulders'], '性感、战斗和现实元素优先落到拳馆训练质感。', 'Translate sensual, combat, and realism into boxing-gym training texture.'),
      s('martial_arts_uniform_wear', '武道服磨损', 'Martial-Arts Uniform Wear', 'costume', '道服褶皱和腰带说明训练级别', 'uniform creases and belt showing training level', ['道服', '腰带', '膝部磨白', '袖口拉扯', '礼前站姿'], ['martial uniform', 'belt', 'faded knees', 'pulled cuffs', 'pre-bow stance'], '武侠和格斗元素优先进入训练服制度。', 'Translate wuxia and combat elements into training uniform system.', { eras: ['modern', 'contemporary', 'timeless'] }),
      s('dance_combat_axis', '舞战轴线', 'Dance-Combat Axis', 'pose', '身体介于舞蹈和战斗之间', 'body between dance and combat', ['旋转肩', '伸展手臂', '脚尖方向', '腰部发力', '节奏停顿'], ['rotating shoulders', 'extended arms', 'toe direction', 'waist power', 'rhythmic pause'], '音乐、动作和战斗元素优先通过身体轴线融合。', 'Fuse music, action, and combat through body axis.'),
      s('old_training_shoes', '旧训练鞋证据', 'Old Training Shoes Evidence', 'wear', '鞋底磨损显示动作习惯', 'sole wear showing movement habit', ['旧鞋', '鞋头擦痕', '鞋底偏磨', '绑带', '重心脚'], ['old shoes', 'toe scuffs', 'uneven sole wear', 'laces', 'weight foot'], '动作和职业信息优先通过鞋底磨损表达。', 'Express motion and occupation through sole wear.'),
      s('joint_guard_rhythm', '关节护具节奏', 'Joint-Guard Rhythm', 'function', '护膝护肘形成动作节拍', 'knee and elbow guards forming motion rhythm', ['护膝', '护肘', '绑带重复', '弯曲关节', '节奏分区'], ['knee pads', 'elbow pads', 'repeated straps', 'bent joints', 'rhythm zones'], '动态和防护元素优先排列在关节节奏上。', 'Arrange motion and protection along joint rhythm.'),
      s('breath_control_stance', '控息站姿', 'Breath-Control Stance', 'pose', '呼吸纪律让动作停在爆发前', 'breath discipline holding action before eruption', ['胸腹稳定', '肩颈放松', '目光收束', '手掌半开', '低重心'], ['stable torso', 'relaxed neck', 'focused gaze', 'half-open palms', 'low gravity'], '情绪和力量优先转成控息姿态。', 'Translate emotion and force into breath-controlled stance.'),
      s('sparring_mark_clean', '对练净痕', 'Clean Sparring Marks', 'wear', '对练痕迹克制地显示在护具和皮肤表面', 'sparring marks restrained on guards and skin surface', ['轻微淤青', '护具擦痕', '胶布', '汗湿发际', '冷静表情'], ['slight bruises', 'guard scuffs', 'tape', 'sweaty hairline', 'calm face'], '伤害必须训练化和克制化，不血腥。', 'Make harm training-based and restrained, never gory.'),
      s('weapon_drill_prop', '器械练习道具', 'Weapon-Drill Prop', 'prop', '武器像训练器械而非杀戮物', 'weapon reading as training apparatus rather than killing object', ['木刀或训练棒', '磨损握柄', '练习标记', '双手持握', '空旷动作线'], ['wooden sword or staff', 'worn grip', 'practice marks', 'two-hand hold', 'clear action line'], '高危武器优先训练器械化。', 'Turn high-risk weapons into training apparatus.'),
      s('discipline_before_power', '力量前的纪律', 'Discipline Before Power', 'cultural_image', '角色首先像训练者，其次才像战斗者', 'character reads as trainee first and fighter second', ['简洁训练服', '收束头发', '旧护具', '重复姿态', '专注眼神'], ['simple training wear', 'tied hair', 'old guards', 'repeated posture', 'focused eyes'], '所有夸张战斗元素必须被训练纪律压低。', 'Lower all exaggerated combat elements through training discipline.')
    ]
  },
  {
    slug: 'future_tactics',
    name: '近未来战术',
    nameEn: 'Near-Future Tactics',
    focus: '轻量技术、传感接口、非全身义体和任务界面统摄角色',
    focusEn: 'light technology, sensor interfaces, non-full-body cybernetics, and mission interface governing character',
    defaultKind: 'ontology',
    defaultAffects: ['technology', 'costume', 'prop', 'symbol'],
    defaultControls: ['future_tactics', 'light_interface', 'no_full_mech'],
    items: [
      s('sensor_patch_network', '传感贴片网络', 'Sensor-Patch Network', 'ontology', '身体表面只有少量可拆卸传感贴片', 'body surface carrying only few removable sensor patches', ['薄贴片', '细线', '冷色小灯', '衣物边缘', '可拆卸感'], ['thin patches', 'fine wires', 'small cool lights', 'garment edges', 'removable feel'], '科幻元素优先贴片化，不改变人体本体。', 'Make sci-fi elements patch-based, not body-altering.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' }),
      s('smart_fabric_tactical', '智能织物战术', 'Smart-Fabric Tactical', 'material', '技术藏在布料纹理和反光边中', 'technology hidden in textile texture and reflective edges', ['细密织纹', '反光缝线', '哑光面', '温控层', '无裸露电路'], ['dense weave', 'reflective seams', 'matte surface', 'thermal layer', 'no exposed circuits'], '技术和服装必须合并成织物系统。', 'Merge technology and clothing into textile systems.', { ontologyLevel: 2, eras: ['near_future', 'timeless'] }),
      s('drone_handler_silhouette', '无人机手轮廓', 'Drone-Handler Silhouette', 'function', '角色像操作小型无人设备的任务人员', 'character reads as operator of small drone devices', ['控制器', '手腕屏', '背部小盒', '抬眼观察', '轻量外套'], ['controller', 'wrist screen', 'small back box', 'looking upward', 'light jacket'], '飞行、侦察和科技元素优先成为操作员系统。', 'Translate flight, scouting, and tech into operator system.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' }),
      s('augmented_visor_limit', '增强目镜限制', 'Augmented-Visor Limit', 'ontology', '增强视觉只在眼前设备表达，不机械化眼球', 'augmented vision expressed by eyewear, not mechanical eyeballs', ['半透明目镜', '细框', '单眼界面', '耳侧固定', '眼神可见'], ['semi-transparent visor', 'thin frame', 'monocular UI', 'ear mount', 'visible eyes'], '机械眼和科幻视觉优先转成可摘目镜。', 'Translate mechanical eyes and sci-fi vision into removable visors.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' }),
      s('exosuit_under_cloth', '衣下外骨骼', 'Under-Cloth Exosuit', 'ontology', '辅助外骨骼隐藏在衣物支撑线里', 'assistive exosuit hidden in garment support lines', ['支撑线', '膝侧连杆', '衣下硬边', '腰背接口', '人体比例保留'], ['support lines', 'knee side link', 'under-cloth hard edge', 'back-waist interface', 'human proportion kept'], '力量增强必须衣下化和辅助化，不做全身机甲。', 'Keep power enhancement under-cloth and assistive, not full mech.', { ontologyLevel: 4, eras: ['near_future', 'timeless'], risk: 'high' }),
      s('hologram_command_card', '全息命令卡', 'Hologram Command Card', 'symbol', '信息界面压缩成手中薄卡', 'information interface compressed into a thin hand card', ['透明卡片', '冷光字块', '手指遮挡', '黑手套', '小范围发光'], ['transparent card', 'cool text blocks', 'finger occlusion', 'black glove', 'small glow'], '信息和魔法感优先转成局部全息卡。', 'Translate information and magic feeling into a local hologram card.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' }),
      s('biometric_lock_symbol', '生物锁标记', 'Biometric-Lock Mark', 'symbol', '权限通过掌纹、颈贴或腕环显示', 'permission shown through palm, neck patch, or wrist ring', ['掌纹光', '颈侧贴片', '腕环', '微弱冷光', '检查手势'], ['palm light', 'neck patch', 'wrist ring', 'faint cool glow', 'checking gesture'], '身份和权限优先生物识别化，不写真实机构。', 'Make identity and access biometric, avoiding real institutions.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' }),
      s('silent_electric_vehicle_gear', '静音载具装备', 'Silent-Electric Vehicle Gear', 'function', '近未来移动性通过头盔、手套和包体表达', 'near-future mobility shown through helmet, gloves, and bag volume', ['轻头盔', '骑行手套', '流线背包', '反光边', '前倾姿态'], ['light helmet', 'riding gloves', 'streamlined pack', 'reflective edge', 'forward lean'], '载具和速度元素优先成为轻量移动装备。', 'Translate vehicle and speed elements into light mobility gear.', { ontologyLevel: 2, eras: ['near_future', 'timeless'] }),
      s('clean_lab_tactical', '洁净实验战术', 'Clean-Lab Tactical', 'cultural_image', '实验室洁净和战术功能并置', 'laboratory cleanliness juxtaposed with tactical function', ['白灰防护层', '编号贴', '一次性手套', '平滑板件', '冷静站姿'], ['white-gray protective layer', 'number sticker', 'disposable gloves', 'smooth plates', 'calm stance'], '医疗、生物科技和战术元素优先转成洁净任务装备。', 'Translate medical, biotech, and tactical elements into clean mission gear.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' }),
      s('interface_as_rank', '界面即军阶', 'Interface as Rank', 'symbol', '等级由界面权限和光点位置表达', 'rank shown through interface access and light positions', ['肩部光点', '腕部权限', '小型UI', '无真实徽章', '硬挺站姿'], ['shoulder light point', 'wrist access', 'small UI', 'no real insignia', 'firm stance'], '军阶和科幻元素优先转成虚构权限界面。', 'Translate rank and sci-fi elements into fictional access interfaces.', { ontologyLevel: 3, eras: ['near_future', 'timeless'], risk: 'medium' })
    ]
  }
];

export const TACTICAL_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
