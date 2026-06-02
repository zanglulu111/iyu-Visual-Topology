import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'TECH';
const ROUTE_NAME = '技术装置';
const ROUTE_NAME_EN = 'Technical Apparatus';
const ERAS = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const FORBIDS = ['无解释全身机甲化', '随机霓虹装饰', '技术不服务身份', '真实公司 logo', '赛博朋克背景抢走人物', '机械器官无等级控制'];

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
    slug: 'visible_interface',
    name: '可见接口',
    nameEn: 'Visible Interface',
    focus: '端口、贴片、线缆、维护边界和人与系统的连接方式统摄角色',
    focusEn: 'ports, patches, cables, maintenance boundaries, and human-system connection governing character',
    defaultKind: 'ontology',
    defaultAffects: ['technology', 'body', 'costume', 'symbol'],
    defaultControls: ['visible_interface', 'connection_point', 'maintenance_boundary'],
    items: [
      s('neck_port_limit', '颈侧接口限制', 'Neck-Port Limit', 'ontology', '技术连接只集中在颈侧一处可维护接口', 'tech connection concentrated at one maintainable neck-side interface', ['颈侧端口', '细线缆', '医用贴片', '衣领避让', '可拆卸感'], ['neck-side port', 'thin cable', 'medical patch', 'collar clearance', 'removable feeling'], '科幻和控制元素优先收束成单点接口，不扩散成全身机械化。', 'Compress sci-fi and control elements into one interface point, not full-body mechanization.', { ontologyLevel: 3, risk: 'medium' }),
      s('wrist_terminal_body', '腕部终端身体', 'Wrist-Terminal Body', 'function', '腕部设备决定手势、权限和工作状态', 'wrist device determining gesture, access, and work status', ['腕机', '小屏', '手指点按', '袖口开槽', '冷光边'], ['wrist terminal', 'small screen', 'finger tapping', 'cuff cutout', 'cool light edge'], '信息、职业和身份优先落到腕部终端。', 'Place information, occupation, and identity onto wrist terminals.', { ontologyLevel: 2 }),
      s('sensor_patch_skin', '传感贴片皮肤', 'Sensor-Patch Skin', 'ontology', '身体表面只有可撕下的医学或任务贴片', 'body surface carrying only removable medical or mission patches', ['薄贴片', '编号小字', '胶带边', '皮肤压痕', '无植入切口'], ['thin patches', 'small numbers', 'tape edge', 'skin pressure mark', 'no implant cuts'], '身体异常优先医学贴片化，保留人类身体可读性。', 'Medical-patch body anomalies while keeping human readability.', { ontologyLevel: 2, risk: 'medium' }),
      s('cable_management_order', '线缆管理秩序', 'Cable-Management Order', 'function', '线缆必须被固定、收纳和解释', 'cables must be fixed, stored, and explained', ['线夹', '衣物走线', '扎带', '背部接口', '不缠乱'], ['cable clips', 'garment routing', 'zip ties', 'back interface', 'no tangling'], '所有线缆元素必须进入收纳路径，不做混乱装饰。', 'Route all cable elements into storage paths, not chaotic decoration.', { ontologyLevel: 2 }),
      s('maintenance_hatch_edge', '维护舱盖边', 'Maintenance-Hatch Edge', 'ontology', '技术部件以可拆盖板和螺丝边界出现', 'tech parts appearing as removable panels and screw boundaries', ['小盖板', '螺丝', '编号贴', '边缘缝', '维修划痕'], ['small panel', 'screws', 'number label', 'edge seam', 'repair scratches'], '机械元素优先外壳化和可维护化。', 'Make mechanical elements shelled and maintainable.', { ontologyLevel: 3, risk: 'medium' }),
      s('earpiece_command_node', '耳侧指令节点', 'Earpiece Command Node', 'function', '耳侧设备让角色像被任务网络连接', 'ear-side device making character connected to mission network', ['耳机', '透明线', '耳后夹', '侧耳倾听', '小状态灯'], ['earpiece', 'clear wire', 'behind-ear clip', 'listening tilt', 'small status light'], '指挥、音乐或监控元素优先转成耳侧节点。', 'Translate command, music, or surveillance into ear-side nodes.', { ontologyLevel: 2 }),
      s('back_spine_connector', '背脊连接器', 'Back-Spine Connector', 'ontology', '背部连接结构只作为外置支撑，不改造脊柱', 'back connector as external support, not spine alteration', ['背部细轨', '外置支撑', '衣下硬线', '肩胛接口', '人体比例'], ['back rail', 'external support', 'under-cloth hard line', 'scapula interface', 'human proportion'], '力量增强必须外置支撑化，不直接身体异形化。', 'External-support power enhancement, not direct body mutation.', { ontologyLevel: 4, risk: 'high' }),
      s('palm_access_contact', '掌心权限接触', 'Palm-Access Contact', 'symbol', '权限通过掌心触碰和微光反馈表达', 'access expressed through palm contact and faint light feedback', ['掌心光点', '触摸姿态', '手套开孔', '短暂亮起', '界面小字'], ['palm light point', 'touch gesture', 'glove cutout', 'brief glow', 'small UI text'], '身份验证优先手势化，不写真实机构。', 'Gesture-translate authentication, avoiding real institutions.', { ontologyLevel: 3, risk: 'medium' }),
      s('collar_data_gasket', '衣领数据垫圈', 'Collar Data Gasket', 'function', '衣领成为身体和设备之间的缓冲接口', 'collar becoming buffer interface between body and device', ['硬衣领', '橡胶垫', '小端口', '颈部留白', '精密边'], ['hard collar', 'rubber gasket', 'small port', 'neck negative space', 'precise edge'], '服装和技术冲突优先在衣领接口调和。', 'Resolve garment-tech conflict at collar interface.', { ontologyLevel: 2 }),
      s('interface_not_cyber_city', '接口非赛博城', 'Interface Not Cyber City', 'ontology', '技术只落在人身接口，不生成霓虹城市风格', 'technology stays on body interfaces, not neon-city style', ['局部接口', '少量冷光', '无背景霓虹', '设备服务身份', '人体主导'], ['local interface', 'few cool lights', 'no neon background', 'device serves identity', 'human-led'], '所有赛博倾向先降级为人物身上的小型接口。', 'Downgrade all cyber tendencies into small interfaces on the character.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'serial_identity',
    name: '编号身份',
    nameEn: 'Serial Identity',
    focus: '序列号、权限标签、机器可读信息和被管理身份统摄角色',
    focusEn: 'serial numbers, access tags, machine-readable information, and managed identity governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'prop', 'identity'],
    defaultControls: ['serial_identity', 'managed_identity', 'machine_readable'],
    items: [
      s('subject_number_wristband', '受试者腕带', 'Subject-Number Wristband', 'symbol', '腕带把人物变成被记录的对象', 'wristband turning character into recorded subject', ['腕带编号', '白色塑料', '小条码感', '手腕抬起', '洁净边'], ['numbered wristband', 'white plastic', 'barcode feel', 'raised wrist', 'clean edge'], '实验、医疗和身份信息优先进入腕带编号。', 'Put experiment, medical, and identity info into wristband numbers.', { ontologyLevel: 2, risk: 'medium' }),
      s('collar_tag_personhood', '颈牌人格', 'Collar-Tag Personhood', 'symbol', '颈部标签让身份像被系统命名', 'neck tag making identity feel system-named', ['颈牌', '细链', '序列号', '喉部中心', '低头露出'], ['neck tag', 'thin chain', 'serial number', 'throat center', 'revealed by lowered head'], '人设和组织信息优先压缩为颈部身份牌。', 'Compress persona and organization info into neck identity tag.', { ontologyLevel: 2 }),
      s('garment_qr_without_qr', '机器码衣标', 'Machine-Code Garment Label', 'symbol', '机器可读感以虚构图形出现，不用真实二维码', 'machine-readable feeling shown as fictional graphic, not real QR', ['虚构码块', '衣标位置', '黑白小格', '洗标边', '扫描姿态'], ['fictional code blocks', 'label placement', 'black-white small grid', 'care-label edge', 'scan posture'], '真实二维码和品牌信息必须虚构化为机器码衣标。', 'Fictionalize real QR and brand information as machine-code labels.', { ontologyLevel: 1 }),
      s('colony_id_patch', '殖民地ID贴片', 'Colony ID Patch', 'symbol', '远未来身份通过虚构殖民地编码显示', 'far-future identity shown through fictional colony coding', ['胸臂贴片', '星区编号', '低饱和色', '无真实国旗', '硬质布标'], ['chest-arm patch', 'sector number', 'low-saturation color', 'no real flag', 'stiff fabric label'], '太空和政治元素优先虚构为殖民地ID。', 'Fictionalize space and political elements as colony ID.', { ontologyLevel: 3, eras: ['near_future', 'far_future', 'timeless'], risk: 'medium' }),
      s('factory_batch_label', '工厂批次标签', 'Factory-Batch Label', 'symbol', '角色像来自某个生产批次但仍保有人格', 'character reads as from a production batch while keeping personhood', ['批次号', '小标签', '重复数字', '工装面料', '平静脸'], ['batch number', 'small label', 'repeated digits', 'workwear fabric', 'calm face'], '仿生、职业和制度元素优先成为批次标签。', 'Translate android, occupation, and institution into batch label.', { ontologyLevel: 3, risk: 'medium' }),
      s('access_level_color', '权限等级色', 'Access-Level Color', 'symbol', '权限用色条位置表达而非真实徽章', 'access shown by color-band placement rather than real insignia', ['色条', '胸前位置', '袖边编码', '低饱和', '重复规则'], ['color band', 'chest placement', 'sleeve code', 'low saturation', 'repeated rule'], '阵营和等级信息优先收束为权限色条。', 'Constrain faction and rank info into access color bands.', { ontologyLevel: 1 }),
      s('medical_chart_identity', '病历身份', 'Medical-Chart Identity', 'symbol', '身份像病历一样被记录和携带', 'identity recorded and carried like a medical chart', ['纸夹板', '病历贴', '腕带', '白灰衣物', '被检查姿态'], ['clipboard', 'chart sticker', 'wristband', 'white-gray garment', 'examined posture'], '身体异常和身份优先医学记录化。', 'Medical-record body anomaly and identity.', { ontologyLevel: 2, risk: 'medium' }),
      s('inventory_tag_human', '库存标签人', 'Inventory-Tag Human', 'symbol', '库存标签制造被物化但仍鲜活的人物张力', 'inventory tag creating tension of objectification and living personhood', ['吊牌', '细绳', '编号', '普通衣物', '眼神抵抗'], ['hang tag', 'thin string', 'number', 'ordinary clothes', 'resistant gaze'], '物件化和社会身份优先转成库存吊牌。', 'Translate objectification and social identity into inventory tags.', { ontologyLevel: 2 }),
      s('security_clearance_chip', '安检权限芯片', 'Security-Clearance Chip', 'prop', '小型芯片或卡片成为进入系统的钥匙', 'small chip or card becoming key to system entry', ['透明卡', '芯片触点', '挂绳', '胸前刷卡位', '警觉手势'], ['clear card', 'chip contacts', 'lanyard', 'chest access position', 'alert gesture'], '职业和科技权限优先以卡片呈现。', 'Show occupational and tech access through cards.', { ontologyLevel: 2 }),
      s('identity_not_logo', '身份非Logo', 'Identity Not Logo', 'symbol', '所有标识必须服务身份管理，不做品牌展示', 'all signs must serve identity management, not brand display', ['无品牌', '虚构编号', '小面积标记', '制度位置', '可读但陌生'], ['no brand', 'fictional number', 'small mark', 'institutional placement', 'readable but unfamiliar'], '真实品牌、真实机构和IP符号全部替换为虚构身份编码。', 'Replace real brands, institutions, and IP signs with fictional identity codes.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'wearable_device',
    name: '可穿戴设备',
    nameEn: 'Wearable Device',
    focus: '贴身设备、腕机、目镜、耳机和身体附近工具统摄角色',
    focusEn: 'close-worn devices, wrist terminals, visors, earpieces, and near-body tools governing character',
    defaultKind: 'function',
    defaultAffects: ['prop', 'technology', 'pose', 'costume'],
    defaultControls: ['wearable_device', 'near_body_tool', 'removable_tech'],
    items: [
      s('visor_over_eye', '眼前目镜', 'Over-Eye Visor', 'function', '增强视觉以可摘目镜存在', 'augmented vision existing as removable visor', ['半透明目镜', '细框', '单眼片', '鼻梁支撑', '眼神可见'], ['semi-transparent visor', 'thin frame', 'monocular piece', 'nose support', 'visible eyes'], '机械眼优先转译为可摘目镜。', 'Translate mechanical eyes into removable visors.', { ontologyLevel: 3, risk: 'medium' }),
      s('smart_glove_gesture', '智能手套手势', 'Smart-Glove Gesture', 'function', '手套把技术变成动作控制', 'glove turning technology into gesture control', ['手套触点', '指尖光', '腕部连接', '半握手势', '袖口开槽'], ['glove contacts', 'fingertip light', 'wrist link', 'half-grip gesture', 'cuff cutout'], '动作、魔法和科技元素优先进入智能手套。', 'Translate action, magic, and tech into smart gloves.', { ontologyLevel: 3, risk: 'medium' }),
      s('headset_operator_body', '耳麦操作员身体', 'Headset Operator Body', 'function', '耳麦让角色处在通信和任务中', 'headset placing character in communication and mission', ['耳麦', '收音杆', '侧头聆听', '简洁外套', '专注眼神'], ['headset', 'boom mic', 'side listening', 'simple jacket', 'focused eyes'], '职业和指挥元素优先成为耳麦操作员状态。', 'Translate occupation and command into headset operator state.', { ontologyLevel: 1 }),
      s('soft_wearable_band', '柔性穿戴带', 'Soft Wearable Band', 'material', '技术以柔性带状物贴近身体', 'technology close to body as flexible bands', ['柔性腕带', '肩带传感', '弹性材料', '细小灯点', '皮肤压痕'], ['flex wristband', 'strap sensors', 'elastic material', 'tiny lights', 'skin pressure marks'], '技术必须柔性化、轻量化、可穿戴化。', 'Make technology flexible, light, and wearable.', { ontologyLevel: 2 }),
      s('health_monitor_charm', '健康监测饰件', 'Health-Monitor Charm', 'function', '监测设备伪装成小型饰件但有功能逻辑', 'monitor device disguised as small ornament with function logic', ['胸针设备', '小屏点', '项链传感', '贴近心口', '低调反光'], ['device brooch', 'tiny display dot', 'necklace sensor', 'near heart', 'subtle reflection'], '饰品和医学元素优先合并为监测饰件。', 'Merge ornament and medical elements into monitoring charm.', { ontologyLevel: 2 }),
      s('field_tablet_strap', '外勤平板挂带', 'Field-Tablet Strap', 'prop', '小平板和挂带定义外勤工作者', 'small tablet and strap defining field worker', ['小平板', '斜挎带', '防摔壳', '手写贴纸', '查看姿态'], ['small tablet', 'crossbody strap', 'rugged case', 'handwritten sticker', 'checking posture'], '职业和数据元素优先成为外勤设备。', 'Translate occupation and data into field device.', { ontologyLevel: 1 }),
      s('projector_pin_device', '投影别针设备', 'Projector-Pin Device', 'prop', '小别针投出局部信息，不改变场景', 'small pin projecting local information without changing setting', ['别针', '微光投影', '胸前位置', '手指遮挡', '小范围界面'], ['pin', 'faint projection', 'chest placement', 'finger occlusion', 'small interface'], '全息和信息元素优先压缩到小别针设备。', 'Compress hologram and information into small pin devices.', { ontologyLevel: 3, risk: 'medium' }),
      s('earbone_transducer', '骨传导耳侧', 'Bone-Conduction Ear Node', 'function', '耳侧小装置让科技保持贴身低调', 'small ear-side device keeping tech close and subtle', ['耳骨夹', '无耳罩', '细小金属', '颈部线', '侧脸轮廓'], ['ear-bone clip', 'no earmuff', 'tiny metal', 'neck wire', 'side-face silhouette'], '音乐、监控和通讯优先变成耳侧低调设备。', 'Translate music, surveillance, and communication into subtle ear-side device.', { ontologyLevel: 2 }),
      s('device_as_costume_fastener', '设备即服装扣件', 'Device as Costume Fastener', 'function', '设备同时承担衣物闭合和身份功能', 'device functioning as both garment fastener and identity tool', ['智能扣', '衣襟中心', '微型屏', '闭合结构', '手触扣件'], ['smart clasp', 'center front', 'tiny display', 'closure structure', 'hand touching clasp'], '服装和技术优先合并为扣件功能。', 'Merge garment and technology into clasp function.', { ontologyLevel: 2 }),
      s('wearable_over_implant', '穿戴优先于植入', 'Wearable Over Implant', 'ontology', '除非手动越界，技术优先是外置可摘设备', 'unless manually crossing boundary, tech is external removable equipment first', ['外置设备', '可摘带', '皮肤完整', '少量接口', '人体可读'], ['external device', 'removable band', 'intact skin', 'few interfaces', 'human readability'], '所有植入倾向先转译为可穿戴设备。', 'Translate all implant tendencies into wearable devices first.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'soft_exosuit',
    name: '软外骨骼',
    nameEn: 'Soft Exosuit',
    focus: '柔性助力、支撑带、关节节点和服装内机械统摄角色',
    focusEn: 'soft assistance, support straps, joint nodes, and under-cloth mechanics governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'technology', 'costume', 'pose'],
    defaultControls: ['soft_exosuit', 'assistive_mechanics', 'human_proportion'],
    items: [
      s('knee_assist_strap', '膝部助力带', 'Knee-Assist Strap', 'ontology', '助力结构只服务膝部动作和站姿', 'assistive structure serving knee motion and stance only', ['膝侧连杆', '弹性带', '小节点', '裤装开槽', '弯膝姿态'], ['knee-side link', 'elastic straps', 'small nodes', 'pant cutouts', 'bent-knee stance'], '力量增强优先限制在关节助力。', 'Limit power enhancement to joint assistance.', { ontologyLevel: 4, eras: ['near_future', 'timeless'], risk: 'high' }),
      s('back_support_harness', '背部支撑背带', 'Back-Support Harness', 'function', '背带说明负重、劳动或康复逻辑', 'harness showing load, labor, or rehab logic', ['背带', '腰背支撑', '硬质竖线', '肩胛连接', '直背'], ['harness', 'waist-back support', 'hard vertical lines', 'scapula link', 'straight back'], '职业和机械元素优先转成背部支撑。', 'Translate occupation and mechanical elements into back support.', { ontologyLevel: 3, risk: 'medium' }),
      s('under_sleeve_actuator', '袖下驱动器', 'Under-Sleeve Actuator', 'ontology', '手臂助力藏在袖下轮廓和小凸点里', 'arm assistance hidden under sleeve silhouette and small nodes', ['袖下硬线', '肘部节点', '布面凸起', '手腕接口', '自然手臂'], ['under-sleeve hard line', 'elbow node', 'fabric bump', 'wrist interface', 'natural arm'], '机械臂倾向优先降级为袖下助力。', 'Downgrade mechanical-arm tendency into under-sleeve assistance.', { ontologyLevel: 4, risk: 'high' }),
      s('rehab_exosuit_clean', '康复外骨骼洁净', 'Clean Rehab Exosuit', 'cultural_image', '技术像医疗康复设备而非战斗机甲', 'technology like medical rehab device rather than combat mech', ['白灰支架', '医用贴片', '软绑带', '慢站姿', '检查标签'], ['white-gray brace', 'medical patches', 'soft straps', 'slow stance', 'check labels'], '身体异常和技术优先医学康复化。', 'Medical-rehab translate body anomaly and technology.', { ontologyLevel: 4, eras: ['modern', 'contemporary', 'near_future'], risk: 'high' }),
      s('load_worker_assist', '负重工人助力', 'Load-Worker Assist', 'function', '助力系统服务劳动负载而非英雄化战斗', 'assistive system serving labor load, not heroic combat', ['腰背机架', '工具带', '磨损绑带', '工作手套', '前倾负重'], ['waist-back frame', 'tool belt', 'worn straps', 'work gloves', 'forward load'], '职业、工业和技术元素优先转成劳动助力。', 'Translate occupation, industry, and tech into labor assistance.', { ontologyLevel: 3 }),
      s('dance_assist_lines', '舞动助力线', 'Dance-Assist Lines', 'pose', '外骨骼支撑身体的舞蹈或运动线', 'exosuit supporting dance or athletic body lines', ['细支撑线', '脚踝节点', '腰部旋转', '手臂延展', '轻量材料'], ['thin support lines', 'ankle nodes', 'waist rotation', 'extended arms', 'light material'], '动态和技术元素优先变成助力动作线。', 'Translate motion and tech into assisted action lines.', { ontologyLevel: 3 }),
      s('corset_exosuit_fusion', '胸衣外骨骼融合', 'Corset-Exosuit Fusion', 'structure', '胸衣和支撑机械合并为服装结构', 'corset and support mechanics merged as garment structure', ['硬胸衣', '支撑条', '背部接口', '收腰', '受控呼吸'], ['hard corset', 'support ribs', 'back interface', 'cinched waist', 'controlled breath'], '高定和技术优先融合为胸衣支撑。', 'Fuse couture and tech into corset support.', { ontologyLevel: 3, risk: 'medium' }),
      s('soft_robotic_padding', '软机器人垫层', 'Soft-Robotic Padding', 'material', '机器人感通过柔性垫层而非硬金属表达', 'robotic feeling expressed through soft padding, not hard metal', ['软垫模块', '充气边', '哑光橡胶', '圆钝体块', '关节留缝'], ['soft pad modules', 'inflated edges', 'matte rubber', 'rounded volume', 'joint gaps'], '机器人元素优先软材料化。', 'Soft-material translate robotic elements.', { ontologyLevel: 3 }),
      s('exosuit_power_limit', '外骨骼力量限制', 'Exosuit Power Limit', 'ontology', '增强只解释姿态和负重，不改变物种', 'enhancement explains posture and load, not species', ['人体比例', '外置支撑', '少量节点', '任务功能', '无机甲头盔'], ['human proportion', 'external support', 'few nodes', 'task function', 'no mech helmet'], '所有外骨骼必须保留人体比例和任务理由。', 'All exosuits must keep human proportion and mission reason.', { ontologyLevel: 4, risk: 'high' }),
      s('suit_removal_evidence', '设备可拆证据', 'Suit-Removal Evidence', 'function', '扣件和断开点说明设备可脱下', 'clasps and disconnect points showing device can be removed', ['断开扣', '接口盖', '松开带', '手触释放点', '衣物压痕'], ['disconnect clasp', 'port cover', 'loosened strap', 'hand on release point', 'garment pressure mark'], '高危机械化优先加可拆证据。', 'Add removal evidence to high-risk mechanization.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'lab_containment',
    name: '实验封存',
    nameEn: 'Laboratory Containment',
    focus: '无菌材料、样本编号、隔离封条和被管控危险统摄角色',
    focusEn: 'sterile material, sample numbers, isolation seals, and controlled danger governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'material', 'prop', 'body'],
    defaultControls: ['lab_containment', 'sterile_control', 'sample_status'],
    items: [
      s('sample_tube_identity', '样本管身份', 'Sample-Tube Identity', 'prop', '样本管让危险被缩小为可管理对象', 'sample tube shrinking danger into manageable object', ['样本管', '标签', '透明液体', '手套托举', '白灰背景感'], ['sample tube', 'label', 'clear liquid', 'gloved hold', 'white-gray feel'], '生物、异变和神秘元素优先封进样本管。', 'Seal biological, mutating, and mystical elements into sample tubes.', { ontologyLevel: 3, risk: 'medium' }),
      s('quarantine_tape_garment', '隔离胶带衣物', 'Quarantine-Tape Garment', 'symbol', '隔离线成为衣物表面的禁令', 'quarantine line becoming prohibition on garment surface', ['黄色封条', '衣襟边', '一次性材料', '编号', '停步姿态'], ['yellow seal tape', 'lapel edge', 'disposable material', 'number', 'stopped posture'], '危险和污染元素优先转成隔离封条。', 'Translate danger and contamination into quarantine seals.', { ontologyLevel: 2, risk: 'medium' }),
      s('sterile_white_suit', '无菌白服', 'Sterile White Suit', 'costume', '洁净服压制恐怖感并建立实验制度', 'sterile suit suppressing horror and establishing lab institution', ['白色防护服', '平滑面', '手套', '鞋套', '小标签'], ['white protective suit', 'smooth surface', 'gloves', 'shoe covers', 'small label'], '实验和身体异常优先无菌服制化。', 'Sterile-suit translate experiment and body anomaly.', { ontologyLevel: 2 }),
      s('biohazard_without_symbol', '无真实生危符', 'Biohazard Without Real Symbol', 'symbol', '用虚构警示几何替代真实危险标志', 'fictional warning geometry replacing real hazard signs', ['虚构警示图', '三角框', '红橙小标', '样本编号', '无真实符号'], ['fictional warning graphic', 'triangle frame', 'small red-orange mark', 'sample number', 'no real symbol'], '危险标识必须虚构化，不使用真实符号。', 'Fictionalize hazard marks and avoid real symbols.', { ontologyLevel: 1 }),
      s('medical_restraint_soft', '医用软约束', 'Medical Soft Restraint', 'function', '约束以医疗和安全逻辑出现', 'restraint appearing through medical and safety logic', ['软绑带', '床单白', '腕部护垫', '松紧扣', '平静表情'], ['soft straps', 'sheet white', 'wrist padding', 'elastic clasp', 'calm face'], '控制和危险优先医学安全化，不虐待化。', 'Medical-safety translate control and danger, not abuse.', { ontologyLevel: 2, risk: 'medium' }),
      s('observation_window_reflection', '观察窗反光', 'Observation-Window Reflection', 'material', '角色像隔着观察窗被看见', 'character reads as seen through observation window', ['玻璃反光', '白光边', '贴纸编号', '隔层感', '视线偏离'], ['glass reflection', 'white edge light', 'sticker number', 'partition feeling', 'averted gaze'], '场景信息优先压缩为观察窗反光。', 'Compress setting information into observation-window reflection.', { ontologyLevel: 1 }),
      s('sealed_implant_trial', '封存植入试验', 'Sealed Implant Trial', 'ontology', '植入物处于试验和封存状态，不失控扩散', 'implant in trial and containment state, not spreading uncontrolled', ['小植入轮廓', '封贴', '医用线', '检查孔', '局部皮肤'], ['small implant outline', 'seal patch', 'medical line', 'inspection port', 'local skin'], '植入倾向必须局部、封存、可检查。', 'Keep implant tendency local, sealed, and inspectable.', { ontologyLevel: 4, risk: 'high' }),
      s('clinical_number_board', '临床编号板', 'Clinical Number Board', 'prop', '编号板让实验身份清楚而克制', 'number board making experiment identity clear and restrained', ['编号板', '双手持牌', '白底黑字感', '冷静站姿', '无品牌'], ['number board', 'two-hand hold', 'black-on-white feel', 'calm stance', 'no brand'], '身份和实验信息优先集中到编号板。', 'Concentrate identity and experiment information into number board.', { ontologyLevel: 1 }),
      s('clean_room_access', '洁净室权限', 'Cleanroom Access', 'symbol', '实验身份通过洁净室出入权限显示', 'lab identity shown through cleanroom access clearance', ['门禁卡', '洁净服边', '鞋套', '空气淋浴感', '小灯点'], ['access card', 'clean suit edge', 'shoe covers', 'air-shower feeling', 'small light dots'], '职业和技术权限优先洁净室化。', 'Cleanroom-translate occupation and tech access.', { ontologyLevel: 2 }),
      s('containment_over_mutation', '封存优先于异变', 'Containment Over Mutation', 'ontology', '异常先被制度封存，除非手动选择越界', 'anomaly first institutionally contained unless manually crossing boundary', ['封条', '白色材料', '局部异常', '可读人体', '无失控触手'], ['seals', 'white material', 'local anomaly', 'readable human body', 'no uncontrolled tentacles'], '所有异变元素先封存，禁止随机怪物化。', 'Contain all mutation elements first, forbidding random monstrosity.', { ontologyLevel: 4, risk: 'high' })
    ]
  },
  {
    slug: 'data_overlay',
    name: '数据叠层',
    nameEn: 'Data Overlay',
    focus: '状态条、透明屏、读数、权限界面和信息边界统摄角色',
    focusEn: 'status bars, transparent screens, readouts, access UI, and information boundary governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'prop', 'technology', 'pose'],
    defaultControls: ['data_overlay', 'readout', 'interface_limit'],
    items: [
      s('floating_status_strip', '悬浮状态条', 'Floating Status Strip', 'ontology', '状态信息只在身体旁小范围显示', 'status information shown only in a small range near body', ['小状态条', '冷光字块', '肩旁位置', '透明层', '不遮脸'], ['small status strip', 'cool text blocks', 'near shoulder', 'transparent layer', 'not covering face'], '信息和科幻元素优先小范围叠层化。', 'Small-range overlay information and sci-fi elements.', { ontologyLevel: 3, risk: 'medium' }),
      s('transparent_clipboard_ui', '透明夹板界面', 'Transparent Clipboard UI', 'prop', '界面依附于手持板而非满屏背景', 'interface attached to handheld board, not full-screen background', ['透明板', '手持边框', '数据行', '手指遮挡', '少量发光'], ['transparent board', 'handheld frame', 'data rows', 'finger occlusion', 'little glow'], '数据必须依附于道具。', 'Data must attach to props.', { ontologyLevel: 2 }),
      s('diagnostic_readout_patch', '诊断读数贴', 'Diagnostic Readout Patch', 'symbol', '读数贴说明身体状态但不改造身体', 'readout patch showing body state without body alteration', ['贴片读数', '小数字', '心率线感', '医用胶带', '皮肤完整'], ['patch readout', 'small numbers', 'heartline feel', 'medical tape', 'intact skin'], '身体和医疗信息优先贴片读数化。', 'Translate body and medical info into patch readouts.', { ontologyLevel: 2 }),
      s('access_denied_color', '权限拒绝色', 'Access-Denied Color', 'symbol', '红色只作为少量权限状态提示', 'red used only as small access-state cue', ['红色小字', '锁形虚构图', '手腕屏', '克制表情', '暗底'], ['small red text', 'fictional lock graphic', 'wrist screen', 'restrained face', 'dark base'], '红色危险感优先收束成权限状态。', 'Constrain red danger into access status.', { ontologyLevel: 2 }),
      s('map_grid_on_sleeve', '袖面地图网格', 'Sleeve Map Grid', 'symbol', '导航信息印在袖面形成可穿戴地图', 'navigation info printed on sleeve as wearable map', ['袖面网格', '路线线条', '手指指向', '低对比印刷', '外勤姿态'], ['sleeve grid', 'route lines', 'pointing finger', 'low-contrast print', 'field posture'], '时空和地理信息优先变成袖面地图。', 'Translate spacetime and geography info into sleeve maps.', { ontologyLevel: 1 }),
      s('eye_level_hud_limit', '眼平HUD限制', 'Eye-Level HUD Limit', 'ontology', 'HUD只在眼前局部出现，不遮挡角色识别', 'HUD only local at eye level without blocking identity', ['眼前细线', '半透明标记', '瞳孔可见', '冷光边', '无满屏'], ['fine eye-level line', 'translucent mark', 'visible pupils', 'cool edge', 'no full screen'], '所有HUD必须小、透明、服务视线。', 'All HUD must be small, transparent, and serve gaze.', { ontologyLevel: 3, risk: 'medium' }),
      s('inventory_overlay_tags', '物品叠层标签', 'Inventory Overlay Tags', 'symbol', '道具旁的小标签说明功能而非装饰', 'small tags beside props explaining function, not decoration', ['小标签', '道具旁', '编号点', '细线连接', '留白'], ['small tags', 'near props', 'number dots', 'fine connector line', 'negative space'], '道具信息优先标签化，避免杂物堆。', 'Tag prop information to avoid clutter pile.', { ontologyLevel: 2 }),
      s('hologram_as_note', '全息如便签', 'Hologram as Note', 'ontology', '全息感被压缩成小便签大小', 'hologram feeling compressed to note size', ['小全息片', '便签比例', '手边发光', '透明边', '单色信息'], ['small hologram card', 'note proportion', 'hand-side glow', 'transparent edge', 'single-color info'], '全息和魔法信息优先便签化。', 'Note-size hologram and magic information.', { ontologyLevel: 3, risk: 'medium' }),
      s('data_suture_line', '数据缝合线', 'Data Suture Line', 'symbol', '数据沿衣物缝线流动而非漂满画面', 'data flowing along garment seams rather than filling image', ['缝线微光', '衣片边界', '小字符', '身体轮廓线', '暗面料'], ['glowing seam', 'garment boundary', 'tiny characters', 'body contour line', 'dark fabric'], '抽象数据优先沿服装结构缝合。', 'Suture abstract data along garment structure.', { ontologyLevel: 3, risk: 'medium' }),
      s('interface_serves_identity', '界面服务身份', 'Interface Serves Identity', 'function', '所有数据必须说明人物身份、职责或状态', 'all data must explain identity, duty, or status', ['身份读数', '任务状态', '小范围', '无背景 UI 海洋', '角色优先'], ['identity readout', 'mission status', 'small range', 'no sea of background UI', 'character first'], '删除不服务身份的界面噪声。', 'Remove interface noise that does not serve identity.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'maintenance_panel',
    name: '维护面板',
    nameEn: 'Maintenance Panel',
    focus: '可拆盖板、维修痕迹、替换件和长期使用证据统摄角色',
    focusEn: 'removable panels, repair marks, replacement parts, and long-use evidence governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'technology', 'wear', 'costume'],
    defaultControls: ['maintenance_panel', 'repairable_tech', 'use_evidence'],
    items: [
      s('screw_edge_panel', '螺丝边盖板', 'Screw-Edge Panel', 'material', '技术边界用螺丝和盖板说明可维护性', 'tech boundary explained through screws and panels', ['小螺丝', '盖板边', '编号贴', '细缝', '维修痕'], ['small screws', 'panel edge', 'number sticker', 'fine seam', 'repair marks'], '机械元素优先变成可拆盖板。', 'Translate mechanical elements into removable panels.', { ontologyLevel: 3 }),
      s('replacement_part_color', '替换件异色', 'Replacement-Part Color', 'material', '替换件用轻微色差说明维修历史', 'replacement part using slight color mismatch to show repair history', ['异色小片', '新旧差', '螺丝孔', '旧划痕', '低调位置'], ['mismatched small plate', 'new-old contrast', 'screw holes', 'old scratches', 'subtle placement'], '混搭材料必须成为维修证据。', 'Make mixed material into repair evidence.', { ontologyLevel: 2 }),
      s('warranty_void_sticker', '保修失效贴', 'Warranty-Void Sticker', 'symbol', '贴纸说明被拆过和被改造过', 'sticker showing device was opened and modified', ['破损贴纸', '虚构文字', '边角翘起', '盖板上', '手工痕迹'], ['broken sticker', 'fictional text', 'peeling corner', 'on panel', 'handmade trace'], '改造和越界元素优先通过失效贴纸表达。', 'Express modification and boundary-crossing through void stickers.', { ontologyLevel: 2 }),
      s('tool_mark_memory', '工具痕记忆', 'Tool-Mark Memory', 'wear', '划痕来自维修工具而非无来源脏乱', 'scratches from repair tools rather than sourceless dirt', ['螺丝刀划痕', '钳痕', '磨亮边', '局部旧化', '工作手势'], ['screwdriver scratches', 'plier marks', 'polished edges', 'local aging', 'work gesture'], '损耗必须来自维修动作。', 'Wear must come from repair action.', { ontologyLevel: 1 }),
      s('access_hatch_pose', '开盖检查姿态', 'Access-Hatch Pose', 'pose', '角色像正在检查或刚关闭维护盖', 'character reads as inspecting or just closing access hatch', ['手按盖板', '低头查看', '工具小包', '袖口卷起', '专注眼神'], ['hand on panel', 'looking down', 'tool pouch', 'rolled cuff', 'focused eyes'], '动作和职业优先转成维护姿态。', 'Translate action and occupation into maintenance posture.', { ontologyLevel: 1 }),
      s('rubber_gasket_boundary', '橡胶密封边界', 'Rubber-Gasket Boundary', 'material', '密封圈让技术接口有工业可信度', 'rubber gasket making tech interface industrially credible', ['黑橡胶边', '压紧线', '防水缝', '硬软交界', '无裸线'], ['black rubber edge', 'pressed line', 'waterproof seam', 'hard-soft junction', 'no exposed wire'], '接口必须有密封和材料逻辑。', 'Interfaces must have sealing and material logic.', { ontologyLevel: 2 }),
      s('field_repair_kit', '现场维修包', 'Field-Repair Kit', 'prop', '维修工具成为角色职责锚点', 'repair tools becoming duty anchor', ['小工具卷', '替换螺丝', '电工胶带', '折叠钳', '侧腰携带'], ['tool roll', 'spare screws', 'electrical tape', 'folding pliers', 'side-waist carry'], '技术和职业元素优先进入维修包。', 'Translate tech and occupation into repair kit.', { ontologyLevel: 1 }),
      s('patched_circuit_cloth', '补丁电路布', 'Patched Circuit Cloth', 'material', '电路被缝进补丁和布片里', 'circuits stitched into patches and cloth pieces', ['布片电路', '缝线', '软性铜线', '补丁边', '低亮度'], ['cloth circuit', 'stitching', 'soft copper line', 'patch edge', 'low brightness'], '数据和织物优先合并成可修补电路布。', 'Merge data and textile into repairable circuit cloth.', { ontologyLevel: 3, risk: 'medium' }),
      s('service_history_layers', '维修履历层', 'Service-History Layers', 'symbol', '多次维护通过小标签和色差沉积', 'multiple services accumulated through labels and color differences', ['日期贴', '小编号', '色差盖板', '划痕层', '旧新并置'], ['date stickers', 'small numbers', 'mismatched panels', 'scratch layers', 'old-new juxtaposition'], '历史信息优先沉积为维修履历。', 'Let history settle as service records.', { ontologyLevel: 1 }),
      s('repair_over_decoration', '维修优先于装饰', 'Repair Over Decoration', 'function', '技术细节必须说明修理、替换或检查', 'tech detail must explain repair, replacement, or inspection', ['可拆结构', '工具痕', '少量贴纸', '功能位置', '无随机装饰'], ['removable structure', 'tool marks', 'few stickers', 'functional placement', 'no random decoration'], '删除没有维护意义的技术装饰。', 'Remove tech decoration without maintenance meaning.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'medical_interface',
    name: '医疗接口',
    nameEn: 'Medical Interface',
    focus: '医用贴片、支架、检测设备、康复逻辑和可解释身体异常统摄角色',
    focusEn: 'medical patches, braces, monitoring devices, rehabilitation logic, and explainable body anomaly governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'technology', 'costume', 'prop'],
    defaultControls: ['medical_interface', 'clinical_explanation', 'body_safety'],
    items: [
      s('ecg_patch_body', '心电贴片身体', 'ECG-Patch Body', 'ontology', '身体状态通过医用贴片和线缆显示', 'body state shown through medical patches and wires', ['圆贴片', '细导线', '胸口位置', '医用胶带', '自然皮肤'], ['round patches', 'thin leads', 'chest placement', 'medical tape', 'natural skin'], '身体异常优先心电贴片化。', 'Translate body anomaly into ECG patch system.', { ontologyLevel: 2, risk: 'medium' }),
      s('orthopedic_brace_beauty', '矫形支架美感', 'Orthopedic-Brace Beauty', 'structure', '支架以清楚结构支持身体而非怪异化', 'brace supporting body through clear structure without monstrosity', ['矫形支架', '白灰材料', '关节铰链', '软垫', '稳定站姿'], ['orthopedic brace', 'white-gray material', 'joint hinge', 'soft padding', 'stable stance'], '异形身体倾向优先医疗支架化。', 'Medical-brace alien body tendencies.', { ontologyLevel: 3, risk: 'medium' }),
      s('hospital_wrist_status', '住院腕带状态', 'Hospital-Wrist Status', 'symbol', '腕带让角色处在治疗和管理制度里', 'wristband placing character in treatment and management system', ['住院腕带', '姓名条感', '白塑料', '手腕露出', '疲惫表情'], ['hospital wristband', 'name-strip feel', 'white plastic', 'visible wrist', 'tired face'], '身份和脆弱性优先通过医疗腕带表达。', 'Express identity and vulnerability through medical wristband.', { ontologyLevel: 1 }),
      s('iv_line_restraint', '输液线克制', 'IV-Line Restraint', 'function', '导管只作为治疗线索，不制造猎奇', 'tube as treatment clue, not sensationalism', ['透明导管', '胶带固定', '手背位置', '小夹子', '静态姿态'], ['clear tube', 'tape fixing', 'back-of-hand placement', 'small clip', 'static posture'], '管线必须医疗化、少量化、可解释。', 'Keep tubes medical, minimal, and explainable.', { ontologyLevel: 2, risk: 'medium' }),
      s('prosthetic_socket_limit', '义肢接受腔限制', 'Prosthetic-Socket Limit', 'ontology', '义肢接口必须有接受腔和皮肤保护逻辑', 'prosthetic interface must have socket and skin-protection logic', ['接受腔', '软衬垫', '绑带', '局部接口', '人体比例'], ['socket', 'soft liner', 'straps', 'local interface', 'human proportion'], '机械肢体必须义肢化和接口清楚。', 'Make mechanical limbs prosthetic with clear interface.', { ontologyLevel: 4, risk: 'high' }),
      s('clinical_mask_persona', '临床口罩人格', 'Clinical-Mask Persona', 'costume', '口罩带来卫生、距离和身份遮蔽', 'mask bringing hygiene, distance, and identity concealment', ['医用口罩', '耳挂线', '眼神突出', '白灰色', '手套'], ['medical mask', 'ear loops', 'emphasized eyes', 'white-gray', 'gloves'], '遮蔽和医疗元素优先成为临床口罩人格。', 'Translate concealment and medical elements into clinical-mask persona.', { ontologyLevel: 1 }),
      s('recovery_support_cane', '康复支撑杖', 'Recovery Support Cane', 'prop', '辅助行走工具说明康复阶段', 'mobility aid showing recovery phase', ['支撑杖', '手部握持', '膝部支架', '慢步', '现实比例'], ['support cane', 'hand grip', 'knee brace', 'slow step', 'real proportion'], '伤痛和战斗后状态优先康复化。', 'Rehabilitation-translate injury and post-combat state.', { ontologyLevel: 1 }),
      s('bio_readout_bandage', '读数绷带', 'Readout Bandage', 'symbol', '绷带带有少量监测读数但仍是医疗物', 'bandage carrying small readouts while remaining medical', ['绷带', '小读数', '冷光点', '胶布边', '皮肤压痕'], ['bandage', 'small readout', 'cool dot', 'tape edge', 'skin pressure mark'], '生物科技元素优先绷带化。', 'Bandage-translate biotech elements.', { ontologyLevel: 3, risk: 'medium' }),
      s('sleep_lab_sensors', '睡眠实验传感', 'Sleep-Lab Sensors', 'function', '传感点让角色像被睡眠或梦境研究', 'sensor points making character read as sleep or dream studied', ['额头贴片', '细线', '柔软衣物', '半闭眼', '冷白光感'], ['forehead patches', 'thin wires', 'soft garments', 'half-closed eyes', 'cold white light feel'], '梦境和科学元素优先转成睡眠实验。', 'Translate dream and science into sleep-lab sensors.', { ontologyLevel: 2 }),
      s('clinical_over_body_horror', '临床优先于身体恐怖', 'Clinical Over Body Horror', 'ontology', '身体异常必须先被医学解释、支撑、遮蔽或监测', 'body anomaly must first be medically explained, supported, covered, or monitored', ['医学解释', '局部贴片', '支架', '无血腥', '人体可读'], ['medical explanation', 'local patch', 'brace', 'no gore', 'human readability'], '禁止把医疗接口随机升级成猎奇身体恐怖。', 'Forbid randomly upgrading medical interface into body horror.', { ontologyLevel: 4, risk: 'high' })
    ]
  },
  {
    slug: 'drone_companion',
    name: '小型伴随设备',
    nameEn: 'Small Companion Device',
    focus: '微型无人机、工具球、随身设备和人与设备的主从关系统摄角色',
    focusEn: 'micro drones, tool orbs, portable devices, and human-device hierarchy governing character',
    defaultKind: 'prop',
    defaultAffects: ['prop', 'technology', 'pose', 'symbol'],
    defaultControls: ['drone_companion', 'small_device', 'human_first'],
    items: [
      s('palm_sized_drone', '掌心无人机', 'Palm-Sized Drone', 'prop', '伴随设备必须小到服务人物而非抢主角', 'companion device small enough to serve character, not steal focus', ['掌心尺寸', '小旋翼', '手边悬停', '收纳盒', '眼神跟随'], ['palm size', 'tiny rotors', 'hovering near hand', 'storage case', 'gaze following'], '飞行和侦察元素优先缩小为掌心无人机。', 'Shrink flight and scouting elements into palm-sized drone.', { ontologyLevel: 3, risk: 'medium' }),
      s('tool_orb_assistant', '工具球助手', 'Tool-Orb Assistant', 'prop', '圆形小设备承担工具和陪伴功能', 'small round device carrying tool and companion function', ['小球设备', '机械小臂', '柔光点', '腰侧仓', '手势召唤'], ['small orb device', 'tiny mechanical arm', 'soft light dot', 'waist dock', 'summoning gesture'], '机械伙伴必须工具化和小型化。', 'Make mechanical companion tool-like and small.', { ontologyLevel: 4, eras: ['near_future', 'far_future', 'timeless'], risk: 'high' }),
      s('shoulder_camera_node', '肩部摄像节点', 'Shoulder Camera Node', 'function', '肩部小镜头让角色像记录者或侦察者', 'small shoulder camera making character recorder or scout', ['肩部镜头', '小支架', '线缆收纳', '侧头查看', '功能位置'], ['shoulder camera', 'small bracket', 'cable routing', 'side check', 'functional placement'], '媒体、侦察和技术元素优先成为肩部记录节点。', 'Translate media, scouting, and tech into shoulder recording nodes.', { ontologyLevel: 2 }),
      s('pet_device_boundary', '设备宠物边界', 'Device-Pet Boundary', 'cultural_image', '伴随设备有亲密感但不是生物宠物', 'companion device has intimacy but is not biological pet', ['小设备', '贴近肩手', '无脸或简脸', '充电线', '保护手势'], ['small device', 'near shoulder or hand', 'no face or simple face', 'charging cable', 'protective gesture'], '生物伙伴倾向优先机械伴随化。', 'Mechanical-companion translate biological companion tendency.', { ontologyLevel: 3, risk: 'medium' }),
      s('maintenance_dock_bag', '随身维护仓包', 'Portable Maintenance Dock Bag', 'function', '伴随设备有明确收纳和充电位置', 'companion device has clear storage and charging position', ['小仓包', '充电槽', '工具位', '背带', '打开动作'], ['small dock bag', 'charging slot', 'tool positions', 'strap', 'opening action'], '设备必须有收纳和维护逻辑。', 'Device must have storage and maintenance logic.', { ontologyLevel: 2 }),
      s('survey_drone_operator', '测绘无人机操作员', 'Survey-Drone Operator', 'cultural_image', '角色身份由测绘和观察任务定义', 'identity defined by surveying and observation mission', ['折叠无人机', '地图板', '抬眼', '外勤服', '风尘边'], ['folding drone', 'map board', 'upward gaze', 'fieldwear', 'dusty edge'], '场域和职业信息优先转成测绘任务。', 'Translate field and occupation info into survey mission.', { ontologyLevel: 2 }),
      s('combat_drone_deescalated', '战斗无人机降级', 'Combat Drone Deescalated', 'prop', '战斗设备降级为侦察、照明或通信', 'combat device downgraded into scouting, lighting, or communication', ['小型机体', '无武器管', '灯点', '天线', '悬停距离'], ['small body', 'no weapon barrel', 'light dot', 'antenna', 'hover distance'], '武装无人机必须先非致命任务化。', 'Nonlethal-mission translate armed drones first.', { ontologyLevel: 3, risk: 'medium' }),
      s('drone_shadow_on_body', '设备影子落身', 'Device Shadow on Body', 'material', '设备通过影子和反光影响人物', 'device influencing character through shadow and reflection', ['小阴影', '脸侧反光', '眼神追踪', '手掌高光', '留白悬停'], ['small shadow', 'side-face reflection', 'tracking gaze', 'palm highlight', 'hover negative space'], '设备存在感优先通过人物反应表达。', 'Show device presence through human reaction first.', { ontologyLevel: 2 }),
      s('fictional_robot_no_ip', '虚构机器人非IP', 'Fictional Robot No IP', 'symbol', '伴随机器人必须无可识别IP轮廓', 'companion robot must avoid recognizable IP silhouette', ['抽象几何', '无品牌脸', '简单体块', '工具接口', '低调色'], ['abstract geometry', 'no branded face', 'simple volumes', 'tool interface', 'subtle color'], '删除真实机器人/IP/吉祥物联想。', 'Remove real robot, IP, or mascot associations.', { ontologyLevel: 3, risk: 'medium' }),
      s('device_subordinate_rule', '设备从属规则', 'Device-Subordinate Rule', 'function', '伴随设备永远服务人物身份，不成为主角', 'companion device always serves human identity and never becomes protagonist', ['人脸优先', '设备小比例', '功能靠近手', '无大场景', '主从清楚'], ['face first', 'small device scale', 'function near hand', 'no big scene', 'clear hierarchy'], '所有设备必须缩小、靠近、服务人物。', 'All devices must be smaller, near-body, and character-serving.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'lowtech_hack',
    name: '低技术改造',
    nameEn: 'Low-Tech Hack',
    focus: '民用零件、胶带线缆、改装盒、电池和贫穷发明统摄角色',
    focusEn: 'civilian parts, taped cables, mod boxes, batteries, and poor invention governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'prop', 'technology', 'wear'],
    defaultControls: ['lowtech_hack', 'civilian_parts', 'improvised_tech'],
    items: [
      s('battery_pack_improv', '电池包改装', 'Battery-Pack Hack', 'function', '电力来源可见且低成本', 'power source visible and low-cost', ['旧电池包', '胶带固定', '红黑线', '腰侧挂载', '手写标签'], ['old battery pack', 'tape fixing', 'red-black wires', 'waist carry', 'handwritten label'], '科幻能源优先降级为可见电池包。', 'Downgrade sci-fi energy into visible battery packs.', { ontologyLevel: 2 }),
      s('taped_cable_hack', '胶带线缆黑客', 'Taped-Cable Hack', 'material', '线缆用胶带临时固定形成DIY技术感', 'cables temporarily fixed by tape creating DIY tech feeling', ['电工胶带', '外露线', '临时固定', '旧外套', '手工边'], ['electrical tape', 'exposed wire', 'temporary fixing', 'old jacket', 'handmade edge'], '复杂技术优先低技术DIY化。', 'Low-tech DIY translate complex technology.', { ontologyLevel: 2 }),
      s('civilian_phone_rig', '民用手机支架', 'Civilian Phone Rig', 'prop', '普通手机被改造成任务设备', 'ordinary phone modified into mission device', ['手机夹', '外接镜头', '充电线', '贴纸', '手持查看'], ['phone clamp', 'add-on lens', 'charging cable', 'stickers', 'handheld checking'], '监控、摄影和技术元素优先民用手机化。', 'Translate surveillance, camera, and tech into modified civilian phone.', { ontologyLevel: 1 }),
      s('garage_solder_identity', '车库焊接身份', 'Garage-Solder Identity', 'material', '焊点和工具痕说明角色自己改装设备', 'solder points and tool marks showing self-modified gear', ['焊点', '小烫痕', '工具包', '旧金属盒', '专注眼神'], ['solder dots', 'small burn marks', 'tool pouch', 'old metal box', 'focused eyes'], '技术身份优先成为车库改装证据。', 'Translate tech identity into garage modification evidence.', { ontologyLevel: 1 }),
      s('radio_junk_operator', '废旧电台操作员', 'Junk-Radio Operator', 'cultural_image', '旧电台和天线建立通信生存感', 'old radio and antenna creating communication survival feeling', ['旧电台', '长天线', '旋钮', '耳机', '侧耳倾听'], ['old radio', 'long antenna', 'knobs', 'headphones', 'listening tilt'], '通讯和废土元素优先转成旧电台系统。', 'Translate communication and wasteland elements into junk-radio system.', { ontologyLevel: 1 }),
      s('toy_parts_refunctioned', '玩具零件再功能', 'Toy Parts Refunctioned', 'material', '低价值塑料零件被重新用作技术部件', 'low-value plastic toy parts reused as tech components', ['彩色塑料', '小螺丝', '错配外壳', '不完美边', '功能标签'], ['colored plastic', 'tiny screws', 'mismatched shell', 'imperfect edge', 'function label'], '可爱、贫穷和科技元素优先变成再功能玩具件。', 'Translate cute, poverty, and tech into refunctioned toy parts.', { ontologyLevel: 2 }),
      s('kitchen_timer_control', '厨房计时器控制', 'Kitchen-Timer Control', 'prop', '普通家用件被改造成控制器', 'ordinary household item modified into controller', ['旋钮计时器', '手写刻度', '胶带', '小盒子', '紧张手势'], ['rotary timer', 'handwritten scale', 'tape', 'small box', 'tense gesture'], '技术控制优先家用件改造化。', 'Household-hack technical control.', { ontologyLevel: 1 }),
      s('school_lab_hack', '学校实验室改造', 'School-Lab Hack', 'cultural_image', '技术像从学校实验室偷出来又改过', 'tech reads stolen and modified from school lab', ['塑料仪器', '标签纸', '试验线', '书包', '年轻专注'], ['plastic instrument', 'label paper', 'test wires', 'school bag', 'young focus'], '青春、实验和科技优先转成学校实验室改造。', 'Translate youth, experiment, and tech into school-lab hack.', { ontologyLevel: 1 }),
      s('analog_switch_board', '模拟开关板', 'Analog Switch Board', 'prop', '按钮和拨杆替代高级全息界面', 'buttons and toggles replacing advanced holographic UI', ['拨杆', '实体按钮', '旧面板', '标签贴', '手指按下'], ['toggles', 'physical buttons', 'old panel', 'label stickers', 'finger pressing'], '高级界面优先降级为模拟开关板。', 'Downgrade advanced interface into analog switch board.', { ontologyLevel: 1 }),
      s('hack_must_show_source', '改造必须有来源', 'Hack Must Show Source', 'function', '每个技术部件都要看得出来自民用或废旧材料', 'every tech part must show civilian or salvaged origin', ['民用来源', '旧材料', '胶带', '手写标', '功能清楚'], ['civilian source', 'old material', 'tape', 'handwritten label', 'clear function'], '禁止凭空出现精密黑科技。', 'Forbid precision black-tech appearing from nowhere.', { ontologyLevel: 1 })
    ]
  }
];

export const TECH_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
