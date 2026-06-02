import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'PARASITIC';
const ROUTE_NAME = '异化寄生';
const ROUTE_NAME_EN = 'Parasitic Alteration';
const ERAS = ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const FORBIDS = ['血腥猎奇主导', '不可读肉块', '全身随机增生', '无宿主关系', '无解释脓液', '感染符号抢走身份'];

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
    slug: 'infection_boundary',
    name: '感染边界',
    nameEn: 'Infection Boundary',
    focus: '感染边界、隔离痕迹和可控扩散范围统摄角色',
    focusEn: 'infection boundaries, quarantine traces, and controlled spread range governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'skin', 'material', 'symbol'],
    defaultControls: ['infection_boundary', 'controlled_spread', 'quarantine_mark'],
    items: [
      s('clean_quarantine_line', '洁净隔离线', 'Clean Quarantine Line', 'symbol', '感染只以清晰隔离线标记范围', 'infection marked only by clear quarantine lines', ['细线边界', '局部皮肤', '医用标记', '无脓液', '身份可读'], ['fine boundary line', 'local skin', 'medical mark', 'no pus', 'readable identity'], '所有感染元素先落成局部隔离线。', 'Put infection elements into local quarantine lines first.', { ontologyLevel: 2, risk: 'medium' }),
      s('sealed_skin_patch', '封闭皮肤贴片', 'Sealed Skin Patch', 'material', '封闭贴片压住感染而不展示创口', 'sealed patches suppress infection without showing wounds', ['透明贴片', '压边胶痕', '皮肤张力', '小标签', '干净边缘'], ['transparent patch', 'pressed adhesive edge', 'skin tension', 'small label', 'clean edge'], '伤口和感染倾向优先转成封闭贴片。', 'Translate wound and infection tendencies into sealed patches.', { ontologyLevel: 2, risk: 'medium' }),
      s('fever_flush_zone', '发热泛红区', 'Fever-Flush Zone', 'face', '发热感通过泛红和疲惫眼神出现', 'fever appears through flushing and tired gaze', ['面颊泛红', '湿眼', '低汗光', '克制表情', '局部热感'], ['cheek flush', 'wet eyes', 'low sweat shine', 'restrained expression', 'local heat'], '病态元素优先表现为可控发热，而非恐怖感染。', 'Show sickness as controlled fever, not horror infection.', { ontologyLevel: 1, risk: 'clean' }),
      s('disinfection_residue', '消毒残留', 'Disinfection Residue', 'wear', '消毒粉末和擦拭痕说明危险被处理过', 'disinfection powder and wipe marks show danger has been handled', ['白色粉痕', '擦拭轨迹', '医用气味', '袖口残留', '干燥边'], ['white powder traces', 'wipe tracks', 'medical scent', 'cuff residue', 'dry edge'], '危险元素优先留下处理痕迹，不直接爆发。', 'Leave treatment traces for danger instead of direct outbreak.', { ontologyLevel: 1 }),
      s('colored_containment_ring', '彩色封控环', 'Colored Containment Ring', 'symbol', '彩色环形标记让感染区域变成设计符号', 'colored rings turn infected areas into design signs', ['彩色环线', '编号点', '皮肤局部', '平面符号', '无扩散'], ['colored ring line', 'number dots', 'local skin', 'graphic sign', 'no spread'], '纹身和感染冲突优先转成封控环。', 'Translate tattoo-infection conflict into containment rings.', { ontologyLevel: 2 }),
      s('pressure_bandage_protocol', '压力绷带协议', 'Pressure-Bandage Protocol', 'costume', '压力绷带把扩散感收束在身体结构内', 'pressure bandages contain spread within body structure', ['紧绷绷带', '受力褶皱', '肢体轮廓', '无血迹', '功能固定'], ['tight bandage', 'tension folds', 'limb silhouette', 'no blood', 'functional fixing'], '腐化和损伤优先被绷带压住。', 'Contain decay and injury with pressure bandages.', { ontologyLevel: 1 }),
      s('isolation_wrist_mark', '隔离腕标', 'Isolation Wrist Mark', 'prop', '腕标说明角色处在观察或封控系统中', 'wrist mark shows the character is under observation or containment', ['腕带', '编号', '小色块', '手腕抬起', '制度痕迹'], ['wristband', 'numbering', 'small color block', 'raised wrist', 'institutional trace'], '制度和感染元素优先成为腕部封控标记。', 'Translate institutional and infection elements into wrist containment marks.', { ontologyLevel: 1 }),
      s('under_skin_warning_dots', '皮下警示点', 'Under-Skin Warning Dots', 'material', '皮下小点暗示异常但不破坏人体', 'under-skin dots suggest anomaly without breaking the human body', ['微小色点', '皮下排列', '低饱和', '局部密度', '清楚皮肤'], ['tiny color dots', 'subdermal order', 'low saturation', 'local density', 'clear skin'], '未知感染优先降级为皮下警示点。', 'Downgrade unknown infection into subdermal warning dots.', { ontologyLevel: 3, risk: 'medium' }),
      s('controlled_spread_map', '可控扩散图', 'Controlled Spread Map', 'symbol', '扩散被画成可读地图而非失控病变', 'spread becomes a readable map instead of uncontrolled disease', ['地图线', '局部路径', '标注点', '皮肤或衣物', '边界明确'], ['map lines', 'local path', 'marked points', 'skin or garment', 'clear boundary'], '扩散元素必须地图化、边界化。', 'Map and bound all spread elements.', { ontologyLevel: 2 }),
      s('infection_not_gore', '感染非血腥', 'Infection Not Gore', 'function', '感染协议强调封控、症状和关系，不展示血腥', 'infection protocol emphasizes containment, symptoms, and relation, not gore', ['封控证据', '症状轻量', '无开放伤', '身份优先', '局部异常'], ['containment evidence', 'light symptom', 'no open wound', 'identity first', 'local anomaly'], '所有感染词必须转译为封控证据或轻症状态。', 'Translate all infection terms into containment evidence or mild symptoms.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'host_relation',
    name: '宿主关系',
    nameEn: 'Host Relation',
    focus: '宿主、附着者、依附点和共生权力关系统摄角色',
    focusEn: 'host, attached entity, attachment points, and symbiotic power relation governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'prop', 'symbol', 'pose'],
    defaultControls: ['host_relation', 'attachment_point', 'symbiosis_hierarchy'],
    items: [
      s('visible_attachment_point', '可见附着点', 'Visible Attachment Point', 'function', '寄生关系必须有清楚附着位置', 'parasitic relation must have a clear attachment site', ['附着点', '皮带固定', '皮肤压痕', '小范围', '关系清楚'], ['attachment point', 'belt fixing', 'skin pressure mark', 'small range', 'clear relation'], '所有寄生元素必须先说明连接点。', 'Every parasitic element must clarify connection point first.', { ontologyLevel: 3, risk: 'medium' }),
      s('back_carried_hostling', '背负宿体', 'Back-Carried Hostling', 'prop', '附着物被背负而非随机长出', 'attached entity is carried on the back, not randomly grown', ['背部小体', '束带', '重量姿态', '肩带压痕', '主从清楚'], ['small back body', 'straps', 'weighted posture', 'shoulder strap marks', 'clear hierarchy'], '额外生命体优先成为背负宿体。', 'Translate extra lifeform into back-carried hostling.', { ontologyLevel: 4, risk: 'high' }),
      s('rib_cage_nest', '肋间巢位', 'Rib-Cage Nest', 'ontology', '肋部巢位暗示共生但保持身体轮廓', 'rib-side nest suggests symbiosis while preserving body silhouette', ['肋侧开位', '软垫边', '小型巢感', '手臂遮护', '无血肉'], ['rib-side recess', 'padded edge', 'small nest feeling', 'arm guarding', 'no flesh gore'], '体内寄生必须设计成受控巢位。', 'Design internal parasitism as controlled nest recess.', { ontologyLevel: 4, risk: 'high' }),
      s('symbiotic_collar', '共生项圈', 'Symbiotic Collar', 'costume', '项圈说明控制、依附和交换关系', 'collar explains control, dependency, and exchange relation', ['项圈', '细管线', '锁扣', '颈部压力', '冷静脸'], ['collar', 'thin tubing', 'clasp', 'neck pressure', 'calm face'], '主从和束缚元素优先成为项圈系统。', 'Translate hierarchy and binding into collar system.', { ontologyLevel: 2 }),
      s('palm_feed_gesture', '掌心喂养手势', 'Palm-Feed Gesture', 'pose', '手势展示宿主与附着物的交换', 'gesture shows exchange between host and attached entity', ['掌心向上', '小物靠近', '温和警戒', '手指张开', '目光下落'], ['palm upward', 'small thing nearby', 'gentle alertness', 'open fingers', 'downward gaze'], '寄生关系优先通过动作说明，不靠大场景。', 'Explain parasitic relation through action, not big scene.', { ontologyLevel: 1 }),
      s('shared_breath_tube', '共享呼吸管', 'Shared Breath Tube', 'prop', '管线把两者生命状态连接起来', 'tube connects two life states', ['细软管', '胸口接口', '呼吸节奏', '透明材质', '少量冷光'], ['thin soft tube', 'chest port', 'breath rhythm', 'transparent material', 'few cool lights'], '连接和生命维持元素优先成为共享呼吸管。', 'Translate connection and life support into shared breath tube.', { ontologyLevel: 3, risk: 'medium' }),
      s('parasite_shadow_companion', '寄生影伴', 'Parasite Shadow Companion', 'symbol', '附着者以影子或轮廓出现，避免抢主体', 'attached entity appears as shadow or outline, not stealing subject focus', ['影子轮廓', '靠近脚边', '主体清楚', '低对比', '关系暗示'], ['shadow silhouette', 'near feet', 'clear subject', 'low contrast', 'relation hint'], '过强附着物优先降级为影伴。', 'Downgrade overpowering attached entities into shadow companions.', { ontologyLevel: 3 }),
      s('host_marked_posture', '宿主标记站姿', 'Host-Marked Posture', 'pose', '站姿表现身体被另一个系统牵引', 'posture shows body pulled by another system', ['肩颈偏移', '一侧负重', '手护附着点', '轻微僵硬', '眼神清醒'], ['shoulder-neck offset', 'one-side weight', 'hand guarding attachment', 'slight stiffness', 'clear gaze'], '宿主感优先进入姿态，而非全身变异。', 'Put host feeling into posture rather than full-body mutation.', { ontologyLevel: 1 }),
      s('mutual_dependency_badge', '互依徽记', 'Mutual Dependency Badge', 'symbol', '徽记说明寄生不是装饰而是契约', 'badge shows parasitism as contract, not decoration', ['双形徽记', '胸针位置', '细小铭文', '成对符号', '制度感'], ['dual-form badge', 'brooch placement', 'tiny inscription', 'paired signs', 'institutional feel'], '社会身份和宿主关系优先成为互依徽记。', 'Translate social identity and host relation into dependency badge.', { ontologyLevel: 1 }),
      s('parasite_hierarchy_rule', '寄生主从规则', 'Parasite Hierarchy Rule', 'function', '主体、附着者和功能必须层级清楚', 'subject, attached entity, and function must have clear hierarchy', ['主体优先', '附着点清楚', '功能说明', '不抢脸', '不失控'], ['subject first', 'clear attachment point', 'function explained', 'face not stolen', 'no loss of control'], '所有寄生设计必须保留主体第一识别。', 'All parasitic designs must preserve primary subject identity.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'swelling_pressure',
    name: '肿胀压力',
    nameEn: 'Swelling Pressure',
    focus: '内部压力、鼓胀轮廓和被压住的身体张力统摄角色',
    focusEn: 'internal pressure, swollen silhouettes, and restrained body tension governing character',
    defaultKind: 'structure',
    defaultAffects: ['body', 'silhouette', 'costume', 'pose'],
    defaultControls: ['swelling_pressure', 'internal_tension', 'restrained_volume'],
    items: [
      s('contained_upper_arm_swell', '上臂封控鼓胀', 'Contained Upper-Arm Swell', 'structure', '上臂局部鼓胀被衣物和绑带控制', 'local upper-arm swelling controlled by garment and straps', ['上臂体积', '绑带压痕', '袖口张力', '一侧异常', '可读肢体'], ['upper-arm volume', 'strap pressure marks', 'sleeve tension', 'one-side anomaly', 'readable limb'], '力量和感染元素优先压缩到上臂局部体积。', 'Compress power and infection into local upper-arm volume.', { ontologyLevel: 3, risk: 'medium' }),
      s('inflated_collar_pressure', '鼓胀领压', 'Inflated Collar Pressure', 'costume', '领口像被内部压力撑开', 'collar looks pushed by internal pressure', ['鼓胀领', '脖颈阴影', '褶皱放射', '上身重量', '脸部清楚'], ['inflated collar', 'neck shadow', 'radiating folds', 'upper-body weight', 'clear face'], '膨胀和礼服元素优先成为领口压力。', 'Translate swelling and formalwear into collar pressure.', { ontologyLevel: 2 }),
      s('vein_like_tension_lines', '静脉式张力线', 'Vein-Like Tension Lines', 'material', '张力线暗示内部压力但不变恐怖血管', 'tension lines hint internal pressure without horror veins', ['细张力线', '低饱和', '皮肤或布面', '局部走向', '无脉动特写'], ['fine tension lines', 'low saturation', 'skin or fabric', 'local direction', 'no pulsing close-up'], '血管化倾向优先抽象成张力线。', 'Abstract vascular tendency into tension lines.', { ontologyLevel: 2, risk: 'medium' }),
      s('compressed_torso_wrap', '压缩躯干缠裹', 'Compressed Torso Wrap', 'costume', '躯干压力被缠裹结构收束', 'torso pressure contained by wrapping structure', ['躯干缠带', '受力褶', '腰腹收束', '呼吸空间', '稳定站姿'], ['torso wraps', 'stress folds', 'waist-abdomen containment', 'breathing room', 'stable stance'], '肿胀和服装冲突优先转成压缩缠裹。', 'Translate swelling-costume conflict into compressed wrapping.', { ontologyLevel: 1 }),
      s('puffed_joint_nodes', '鼓胀关节点', 'Puffed Joint Nodes', 'structure', '关节点略微鼓起说明异常运动压力', 'slightly swollen joints explain abnormal motion pressure', ['肘膝节点', '小体积', '活动缝', '弯曲姿态', '无畸形失控'], ['elbow-knee nodes', 'small volume', 'motion seams', 'bent pose', 'no uncontrolled deformity'], '异形运动优先落在关节点体积。', 'Put abnormal motion into joint-node volume.', { ontologyLevel: 3 }),
      s('swollen_pocket_growth', '口袋鼓胀生长', 'Swollen Pocket Growth', 'prop', '异常被压在口袋或包体内', 'anomaly pressed inside pocket or bag volume', ['鼓起口袋', '布料张力', '未知轮廓', '手压住', '不露实体'], ['bulging pocket', 'fabric tension', 'unknown outline', 'hand pressing', 'entity hidden'], '不可控生长优先隐藏为口袋鼓胀。', 'Hide uncontrolled growth as pocket bulge first.', { ontologyLevel: 2 }),
      s('breath_swollen_posture', '憋气鼓胀姿态', 'Breath-Swollen Posture', 'pose', '姿态像在压住体内压力', 'pose reads as holding internal pressure', ['胸腔微涨', '肩膀收紧', '嘴唇闭合', '手压胸口', '静止感'], ['slightly expanded chest', 'tight shoulders', 'closed lips', 'hand on chest', 'stillness'], '肿胀感优先由姿态表达。', 'Express swelling pressure through posture first.', { ontologyLevel: 1 }),
      s('soft_tumor_not_gore', '软瘤非血腥', 'Soft Tumor Not Gore', 'ontology', '软性隆起被设计成封闭体积而非创口', 'soft protrusions designed as closed volume, not wounds', ['封闭隆起', '柔软阴影', '无破口', '衣物压边', '局部小范围'], ['closed protrusion', 'soft shadow', 'no rupture', 'garment pressure edge', 'small local range'], '瘤状元素必须封闭、局部、无血腥。', 'Tumor-like elements must be closed, local, and non-gory.', { ontologyLevel: 4, risk: 'high' }),
      s('pressure_release_valve', '压力释放阀', 'Pressure Release Valve', 'prop', '小阀门让内部压力可控可解释', 'small valve makes internal pressure controllable and explainable', ['小阀门', '胸侧或腰侧', '编号', '功能金属', '无蒸汽乱喷'], ['small valve', 'chest or waist side', 'numbering', 'functional metal', 'no random steam'], '压力和技术元素优先成为释放阀。', 'Translate pressure and technology into release valve.', { ontologyLevel: 3 }),
      s('swelling_scale_lock', '肿胀尺度锁', 'Swelling Scale Lock', 'function', '肿胀只能改变局部设计重心，不吞掉主体', 'swelling may shift local design weight but not swallow the subject', ['局部体积', '主体比例', '边界清楚', '无全身膨胀', '身份优先'], ['local volume', 'subject proportion', 'clear boundary', 'no full-body inflation', 'identity first'], '所有肿胀词必须保留人体或主体骨架。', 'All swelling terms must preserve human or subject skeleton.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'fissure_split',
    name: '裂隙裂变',
    nameEn: 'Fissure and Split',
    focus: '裂隙、分叉、裂变边界和双重身体线索统摄角色',
    focusEn: 'fissures, bifurcation, split boundaries, and doubled body cues governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'face', 'silhouette', 'symbol'],
    defaultControls: ['fissure_split', 'bifurcation', 'double_boundary'],
    items: [
      s('hairline_skin_crack', '发丝皮肤裂线', 'Hairline Skin Crack', 'material', '裂变只以发丝细裂出现', 'split appears only as hairline cracks', ['细裂线', '浅阴影', '局部皮肤', '不露内部', '可读脸'], ['hairline crack', 'pale shadow', 'local skin', 'no interior exposed', 'readable face'], '裂开倾向优先降级为发丝裂线。', 'Downgrade splitting tendency into hairline cracks.', { ontologyLevel: 3, risk: 'medium' }),
      s('split_color_boundary', '分裂色界', 'Split Color Boundary', 'symbol', '双重状态由色块边界表达', 'dual state expressed by color boundary', ['双色分界', '脸或衣物', '干净边', '不对称', '平面可读'], ['two-color division', 'face or garment', 'clean edge', 'asymmetry', 'graphic readability'], '人格和裂变元素优先成为色界。', 'Translate personality and fission elements into color boundary.', { ontologyLevel: 1 }),
      s('double_shadow_body', '双影身体', 'Double-Shadow Body', 'symbol', '第二身体以影子存在，不生成多主体', 'second body exists as shadow, not another subject', ['双重影子', '脚边偏移', '主体单一', '低对比', '静止站姿'], ['double shadow', 'offset near feet', 'single subject', 'low contrast', 'still pose'], '裂变必须避免生成第二个角色。', 'Fission must avoid generating a second character.', { ontologyLevel: 3 }),
      s('seam_open_garment', '开缝衣体', 'Seam-Open Garment', 'costume', '身体裂隙转译为衣物开缝', 'body fissure translated into garment opening seams', ['长开缝', '内层暗色', '布边清楚', '身体不破', '结构线'], ['long slit', 'dark inner layer', 'clear cloth edge', 'body intact', 'structural line'], '身体裂开优先转成衣物开缝。', 'Translate body splitting into garment seams first.', { ontologyLevel: 1 }),
      s('forked_silhouette_hint', '分叉剪影暗示', 'Forked Silhouette Hint', 'structure', '剪影末端轻微分叉形成异化感', 'slight fork at silhouette ends creates altered feeling', ['分叉下摆', '双尾布片', '肩部叉线', '轻量异常', '主体完整'], ['forked hem', 'double-tail cloth', 'shoulder fork line', 'light anomaly', 'whole subject'], '尾巴和裂变元素优先进入服装末端。', 'Put tail and fission elements into garment ends first.', { ontologyLevel: 2 }),
      s('mirror_split_face', '镜面裂脸', 'Mirror-Split Face', 'face', '脸部裂变由镜面妆或饰片承担', 'facial split carried by mirror makeup or plates', ['镜面半脸', '干净反光', '一侧遮挡', '眼睛可见', '无创口'], ['mirror half-face', 'clean reflection', 'one-side cover', 'visible eye', 'no wound'], '半脸异化优先转成镜面饰片。', 'Translate half-face alteration into mirror plate.', { ontologyLevel: 2, risk: 'medium' }),
      s('branching_hand_lines', '手部分叉线', 'Branching Hand Lines', 'material', '裂变路线集中在手部纹路', 'fission route concentrated in hand lines', ['掌纹分叉', '手背线', '轻微发光', '指向道具', '动作清楚'], ['forked palm lines', 'back-hand lines', 'slight glow', 'points to prop', 'clear action'], '分叉和命运元素优先落在手部线。', 'Place branching and fate elements into hand lines.', { ontologyLevel: 2 }),
      s('split_weight_pose', '分裂重心姿态', 'Split-Weight Pose', 'pose', '一具身体出现两个方向的重心', 'one body holds two directional weights', ['一肩前探', '髋部反向', '头部偏转', '双重意图', '站姿稳定'], ['one shoulder forward', 'opposite hip', 'turned head', 'dual intent', 'stable stance'], '双重状态优先由姿态解决。', 'Resolve dual state through posture first.', { ontologyLevel: 1 }),
      s('sealed_fissure_staples', '封合裂隙钉', 'Sealed Fissure Staples', 'wear', '裂隙被封合，成为修复证据', 'fissure is sealed and becomes repair evidence', ['小钉扣', '封合线', '旧裂痕', '无血迹', '工艺痕'], ['small staples', 'sealed line', 'old fissure', 'no blood', 'craft trace'], '裂伤和修复元素优先成为封合工艺。', 'Translate wound and repair into sealing craft.', { ontologyLevel: 2, risk: 'medium' }),
      s('split_not_duplicate', '裂变非复制', 'Split Not Duplicate', 'function', '裂变协议只制造双重线索，不制造多个角色', 'split protocol creates dual cues, not multiple characters', ['单一主体', '双重线索', '无第二人', '局部裂隙', '骨架清楚'], ['single subject', 'dual cues', 'no second person', 'local fissure', 'clear skeleton'], '所有裂变元素必须保持一人一体的设计可读性。', 'All fission elements must keep one-subject readability.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'uncontrolled_growth',
    name: '不可控生长',
    nameEn: 'Uncontrolled Growth',
    focus: '异常生长、过量枝节和被压制的增殖冲动统摄角色',
    focusEn: 'abnormal growth, excess offshoots, and restrained proliferation drive governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'costume', 'silhouette', 'material'],
    defaultControls: ['uncontrolled_growth', 'growth_containment', 'excess_offshoot'],
    items: [
      s('one_extra_growth_rule', '单一增生规则', 'One Extra Growth Rule', 'function', '只允许一个主要增生点作为视觉焦点', 'only one main growth point may act as visual focus', ['单一异常', '焦点清楚', '其余克制', '无满身乱长', '主体优先'], ['single anomaly', 'clear focus', 'others restrained', 'no full-body growth', 'subject first'], '增生元素必须集中到一个焦点。', 'Concentrate growth elements into one focus.', { ontologyLevel: 3, risk: 'medium' }),
      s('shoulder_bud_growth', '肩部芽生', 'Shoulder Bud Growth', 'ontology', '肩部小芽改变轮廓但不变怪物', 'small shoulder buds alter silhouette without becoming monster', ['肩部小芽', '衣物开孔', '局部阴影', '不对称', '头脸清楚'], ['shoulder buds', 'garment openings', 'local shadow', 'asymmetry', 'clear head and face'], '植物和异化元素优先限制在肩部小芽。', 'Limit plant and alteration elements to shoulder buds.', { ontologyLevel: 4, risk: 'high' }),
      s('growth_under_cloth', '布下生长', 'Growth Under Cloth', 'costume', '异常藏在布料下形成压力轮廓', 'anomaly hidden under cloth forms pressure silhouette', ['布下隆起', '张力褶', '手压住', '未知形状', '无直接暴露'], ['under-cloth bulge', 'tension folds', 'hand pressing', 'unknown shape', 'no direct exposure'], '失控生长优先隐藏为布下压力。', 'Hide runaway growth as under-cloth pressure.', { ontologyLevel: 2 }),
      s('rootlike_wrist_sprout', '腕部根芽', 'Rootlike Wrist Sprout', 'ontology', '腕部小根芽说明身体正在外接环境', 'small wrist rootlets show body connecting outward', ['腕部根丝', '手势展示', '小范围', '浅色纤维', '无蔓延'], ['wrist rootlets', 'displayed gesture', 'small range', 'pale fibers', 'no spread'], '连接和生长元素优先落在腕部。', 'Place connection and growth elements onto wrist.', { ontologyLevel: 4, risk: 'high' }),
      s('hair_growth_overflow', '头发生长溢出', 'Hair Growth Overflow', 'structure', '过量生长转成头发体积和方向', 'excess growth becomes hair volume and direction', ['长发外溢', '缠绕边', '遮肩', '头部主导', '身体完整'], ['overflowing long hair', 'wrapping edge', 'shoulder cover', 'head-led', 'body intact'], '触手和增生优先转译为发量。', 'Translate tentacle and growth tendency into hair mass.', { ontologyLevel: 2 }),
      s('contained_growth_cage', '生长笼架', 'Contained Growth Cage', 'prop', '笼架控制异常生长并说明危险', 'cage frame controls abnormal growth and explains danger', ['小笼架', '绑在背侧', '内部暗影', '标签', '功能清楚'], ['small cage frame', 'strapped to back', 'inner shadow', 'label', 'clear function'], '危险生长优先被外部笼架控制。', 'Control dangerous growth with external cage frame.', { ontologyLevel: 3 }),
      s('cut_back_stump_trace', '截断生长残端', 'Cut-Back Growth Stump', 'wear', '残端说明曾经失控但已被处理', 'stumps show former runaway growth has been handled', ['截断端', '干净封口', '旧痕', '局部小点', '无血腥'], ['cut stump', 'clean seal', 'old trace', 'small local point', 'no gore'], '过量生长必须留下处理过的证据。', 'Excess growth must leave evidence of treatment.', { ontologyLevel: 3, risk: 'medium' }),
      s('growth_direction_arrows', '生长方向箭头', 'Growth Direction Arrows', 'symbol', '方向标记把不可控生长变成可读系统', 'direction marks turn runaway growth into readable system', ['小箭头', '身体标注', '扩散方向', '平面设计', '控制感'], ['small arrows', 'body annotations', 'spread direction', 'graphic design', 'controlled feel'], '混乱增殖优先图示化。', 'Diagram chaotic proliferation first.', { ontologyLevel: 1 }),
      s('living_seam_bloom', '活缝开花', 'Living Seam Bloom', 'costume', '衣缝处有少量生长，说明衣物和身体关系', 'small growth at seams explains garment-body relation', ['缝线开花', '小芽点', '布料边', '克制数量', '身体可读'], ['blooming seam', 'tiny buds', 'cloth edge', 'restrained count', 'readable body'], '服装器官化优先落在活缝。', 'Translate garment-organ fusion into living seams.', { ontologyLevel: 3 }),
      s('growth_not_clutter', '生长非杂乱', 'Growth Not Clutter', 'function', '生长协议必须有方向、位置和功能', 'growth protocol must have direction, placement, and function', ['方向明确', '位置明确', '数量克制', '无满屏触手', '轮廓清楚'], ['clear direction', 'clear placement', 'restrained count', 'no screen-filling tendrils', 'clear silhouette'], '所有生长元素必须被方向和功能约束。', 'Every growth element must be constrained by direction and function.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'corruption_surface',
    name: '腐化表层',
    nameEn: 'Corrupted Surface',
    focus: '腐化、霉变、污染边缘和被处理过的表面病变统摄角色',
    focusEn: 'corruption, mold, polluted edges, and treated surface lesions governing character',
    defaultKind: 'material',
    defaultAffects: ['skin', 'material', 'costume', 'wear'],
    defaultControls: ['corruption_surface', 'treated_decay', 'pollution_edge'],
    items: [
      s('dry_corrosion_edge', '干性腐蚀边', 'Dry Corrosion Edge', 'material', '腐化表现为干燥边缘和色差', 'corruption appears as dry edges and color shifts', ['干边', '灰褐色差', '细粉末', '局部衣角', '无湿烂'], ['dry edge', 'gray-brown shift', 'fine powder', 'local garment corner', 'no wet rot'], '腐烂倾向优先转为干性腐蚀边。', 'Translate rot tendency into dry corrosion edges.', { ontologyLevel: 2, risk: 'medium' }),
      s('blackened_fingertips', '熏黑指端', 'Blackened Fingertips', 'material', '腐化集中在指端形成接触证据', 'corruption concentrated on fingertips as contact evidence', ['黑灰指端', '手势清楚', '粉尘残留', '无破皮', '接触逻辑'], ['black-gray fingertips', 'clear gesture', 'dust residue', 'no broken skin', 'contact logic'], '污染和触碰元素优先落在指端。', 'Place pollution and touch elements onto fingertips.', { ontologyLevel: 2 }),
      s('oxidized_skin_tint', '氧化肤色', 'Oxidized Skin Tint', 'material', '肤色像被氧化但仍是完整皮肤', 'skin tint reads oxidized while remaining intact skin', ['青灰肤色', '低饱和', '完整表面', '冷光', '非尸化'], ['blue-gray skin tint', 'low saturation', 'intact surface', 'cool light', 'not corpse-like'], '死亡和腐化元素优先色彩化，不做尸体化。', 'Colorize death and corruption instead of corpse transformation.', { ontologyLevel: 3, risk: 'medium' }),
      s('mold_map_on_cloth', '衣物霉图', 'Mold Map on Cloth', 'wear', '霉变只在衣物上形成地图纹', 'mold forms map-like pattern only on clothing', ['霉斑地图', '旧布', '边缘扩散', '低对比', '人物干净'], ['mold map', 'old cloth', 'edge spread', 'low contrast', 'clean person'], '霉变优先落在衣物，不破坏身体。', 'Place mold on clothing first, not body.', { ontologyLevel: 1 }),
      s('purified_decay_patch', '净化腐化贴片', 'Purified Decay Patch', 'symbol', '腐化被净化后留下贴片标记', 'corruption leaves patch marks after purification', ['贴片标记', '浅色边', '旧污染核', '编号', '医疗感'], ['patch mark', 'pale edge', 'old pollution core', 'numbering', 'medical feel'], '腐化和治愈元素优先成为净化贴片。', 'Translate corruption and healing into purified patches.', { ontologyLevel: 2 }),
      s('pollution_rain_streak', '污染雨痕', 'Pollution Rain Streak', 'wear', '污染以雨痕形式留在外层', 'pollution remains as rain streaks on outer layer', ['纵向雨痕', '外套表面', '暗色边', '下摆聚集', '环境证据'], ['vertical rain streaks', 'outerwear surface', 'dark edge', 'hem gathering', 'environment evidence'], '环境污染优先成为衣物雨痕。', 'Translate environmental pollution into garment rain streaks.', { ontologyLevel: 1 }),
      s('corrupted_jewelry_stain', '腐化饰物染痕', 'Corrupted Jewelry Stain', 'prop', '饰物周围出现染痕说明异常来源', 'stain around jewelry explains anomaly source', ['饰物暗斑', '皮肤轻痕', '金属氧化', '小范围', '来源清楚'], ['dark jewelry stain', 'light skin trace', 'metal oxidation', 'small range', 'clear source'], '诅咒和腐化优先锚定到饰物。', 'Anchor curse and corruption to jewelry first.', { ontologyLevel: 2 }),
      s('sealed_rot_sample', '封存腐样', 'Sealed Rot Sample', 'prop', '腐化作为样本被封存携带', 'corruption carried as sealed sample', ['小样本瓶', '封蜡', '标签', '手套', '不外泄'], ['small sample vial', 'wax seal', 'label', 'gloves', 'no leakage'], '腐化材料优先成为封存样本。', 'Translate corrupted material into sealed sample.', { ontologyLevel: 2 }),
      s('surface_peeling_clean', '洁净剥落表面', 'Clean Peeling Surface', 'wear', '表面剥落必须干净、分层、可读', 'peeling surface must be clean, layered, and readable', ['薄片剥落', '层次边', '无血肉', '局部旧痕', '材料感'], ['thin peeling', 'layer edge', 'no flesh', 'local old trace', 'material feel'], '剥落倾向优先材料化。', 'Materialize peeling tendency first.', { ontologyLevel: 2 }),
      s('corruption_not_decay_porn', '腐化非猎奇', 'Corruption Not Fetishized Decay', 'function', '腐化只作为世界证据，不成为恶心展示', 'corruption works as world evidence, not disgust display', ['世界证据', '局部表层', '无恶心细节', '身份优先', '材料清楚'], ['world evidence', 'local surface', 'no disgust detail', 'identity first', 'clear material'], '所有腐化词必须服务身份和世界，不服务猎奇。', 'All corruption terms must serve identity and world, not shock.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'medical_control',
    name: '医疗控制',
    nameEn: 'Medical Control',
    focus: '诊疗、封控、实验编号和护理装置统摄寄生异化',
    focusEn: 'diagnosis, containment, experiment numbering, and care devices governing parasitic alteration',
    defaultKind: 'function',
    defaultAffects: ['prop', 'costume', 'symbol', 'body'],
    defaultControls: ['medical_control', 'clinical_containment', 'experiment_evidence'],
    items: [
      s('clinical_harness', '临床束具', 'Clinical Harness', 'costume', '束具让异化被医疗系统托住', 'harness lets alteration be held by medical system', ['白色束具', '软垫', '固定扣', '胸腹结构', '无酷刑感'], ['white harness', 'padding', 'fasteners', 'torso structure', 'no torture feel'], '失控身体优先被临床束具承接。', 'Let clinical harness carry unstable body first.', { ontologyLevel: 2 }),
      s('sample_port_patch', '取样接口贴', 'Sample-Port Patch', 'prop', '接口说明身体正在被观察取样', 'port shows body is being observed and sampled', ['小接口', '透明贴', '编号', '皮肤局部', '医用干净'], ['small port', 'transparent patch', 'numbering', 'local skin', 'medical cleanliness'], '生物接口优先成为取样贴。', 'Translate biological ports into sample patches.', { ontologyLevel: 3, risk: 'medium' }),
      s('diagnostic_grid_skin', '诊断网格皮肤', 'Diagnostic-Grid Skin', 'symbol', '诊断网格把身体异常转成可读信息', 'diagnostic grid turns body anomaly into readable information', ['细网格', '皮肤或衣物', '标注点', '局部区域', '冷静展示'], ['fine grid', 'skin or garment', 'marked points', 'local area', 'calm display'], '异化纹路优先诊断化。', 'Diagnostic-translate alteration marks.', { ontologyLevel: 2 }),
      s('transparent_sample_case', '透明样本盒', 'Transparent Sample Case', 'prop', '危险组织被外置封存', 'dangerous tissue is externally sealed', ['透明盒', '小组织影', '标签', '手持', '不泄漏'], ['transparent case', 'small tissue shadow', 'label', 'handheld', 'no leakage'], '危险材料优先外置封存。', 'Seal dangerous material externally first.', { ontologyLevel: 2 }),
      s('sterile_glove_contrast', '无菌手套反差', 'Sterile Glove Contrast', 'costume', '无菌手套让接触危险变得可信', 'sterile gloves make dangerous contact believable', ['白手套', '指尖残留', '手势谨慎', '袖口密封', '卫生感'], ['white gloves', 'fingertip residue', 'careful gesture', 'sealed cuff', 'hygiene'], '触碰和感染元素优先通过手套表达。', 'Express touch and infection through gloves.', { ontologyLevel: 1 }),
      s('observation_numbering', '观察编号', 'Observation Numbering', 'symbol', '编号把异化纳入制度观察', 'numbering places alteration under institutional observation', ['编号贴', '手臂位置', '档案感', '小字', '主体清楚'], ['number sticker', 'arm placement', 'dossier feel', 'small text', 'clear subject'], '实验和身份元素优先编号化。', 'Number experiment and identity elements first.', { ontologyLevel: 1 }),
      s('treatment_residue_line', '治疗残留线', 'Treatment Residue Line', 'wear', '治疗后残留线说明异化曾被处理', 'post-treatment residue lines show alteration was treated', ['浅色残线', '消毒光泽', '旧贴痕', '局部皮肤', '稳定状态'], ['pale residue line', 'disinfected shine', 'old patch mark', 'local skin', 'stable state'], '治疗和腐化必须留下处理痕迹。', 'Treatment and corruption must leave handling traces.', { ontologyLevel: 1 }),
      s('biohazard_minimal_mark', '极简生危标记', 'Minimal Biohazard Mark', 'symbol', '危险标记小而精确，不变海报符号', 'hazard mark is small and precise, not poster symbol', ['小三角', '标签角落', '低饱和黄', '制度警示', '不抢脸'], ['small triangle', 'label corner', 'low-saturation yellow', 'institutional warning', 'face not stolen'], '危险符号必须小型化、制度化。', 'Make hazard signs small and institutional.', { ontologyLevel: 1 }),
      s('caregiver_touch_protocol', '护理触碰协议', 'Caregiver Touch Protocol', 'pose', '护理动作让异化不只是恐怖而有关系', 'care gesture makes alteration relational, not just horror', ['托住手臂', '低头检查', '温和距离', '手套触碰', '主体清醒'], ['supporting arm', 'checking head down', 'gentle distance', 'gloved touch', 'conscious subject'], '医疗关系优先通过护理动作表现。', 'Show medical relation through care gesture.', { ontologyLevel: 1 }),
      s('clinical_not_horror_lab', '临床非恐怖实验室', 'Clinical Not Horror Lab', 'function', '医疗控制协议避免恐怖实验室套路', 'medical-control protocol avoids horror-lab cliches', ['临床证据', '护理逻辑', '无酷刑', '编号克制', '主体尊严'], ['clinical evidence', 'care logic', 'no torture', 'restrained numbering', 'subject dignity'], '所有实验元素必须保留角色尊严和功能解释。', 'All experiment elements must keep dignity and functional explanation.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'ritual_contamination',
    name: '仪式污染',
    nameEn: 'Ritual Contamination',
    focus: '污染禁忌、献祭痕迹和被仪式化的异化统摄角色',
    focusEn: 'pollution taboo, sacrifice traces, and ritualized alteration governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'body', 'prop'],
    defaultControls: ['ritual_contamination', 'taboo_mark', 'sacrificial_containment'],
    items: [
      s('taboo_ash_mark', '禁忌灰印', 'Taboo Ash Mark', 'symbol', '灰印把感染转成仪式禁忌', 'ash mark turns infection into ritual taboo', ['灰色指印', '额头或胸口', '手抹痕', '低饱和', '无血'], ['gray finger mark', 'forehead or chest', 'smear trace', 'low saturation', 'no blood'], '污染和仪式元素优先成为灰印。', 'Translate pollution and ritual into ash marks.', { ontologyLevel: 2 }),
      s('sealed_offering_thread', '封供线', 'Sealed Offering Thread', 'prop', '线绳封住异化并指向祭仪关系', 'thread seals alteration and points to ritual relation', ['红或白线', '缠绕局部', '小结', '供物感', '边界清楚'], ['red or white thread', 'local wrapping', 'small knot', 'offering feel', 'clear boundary'], '寄生和献祭元素优先线绳化。', 'Translate parasitism and sacrifice into ritual thread.', { ontologyLevel: 2 }),
      s('polluted_halo_stain', '污染光环污痕', 'Polluted Halo Stain', 'symbol', '光环被污染但仍保持神圣结构', 'halo is stained but keeps sacred structure', ['暗色环', '头后留白', '污渍边', '神圣反差', '脸部清楚'], ['dark ring', 'space behind head', 'stain edge', 'sacred contrast', 'clear face'], '神圣和腐化冲突优先成为污染光环。', 'Translate sacred-corrupt conflict into polluted halo.', { ontologyLevel: 3, risk: 'medium' }),
      s('quarantine_prayer_strip', '封控祷纸', 'Quarantine Prayer Strip', 'prop', '祷纸承担封印和隔离双重功能', 'prayer strip carries sealing and quarantine functions', ['纸条', '小字', '贴在衣物', '边角磨损', '制度与信仰'], ['paper strip', 'tiny writing', 'on garment', 'worn corner', 'institution and belief'], '封印和医疗封控优先合并成祷纸。', 'Merge sealing and medical containment into prayer strip.', { ontologyLevel: 2 }),
      s('sacrificial_bandage', '献祭绷带', 'Sacrificial Bandage', 'costume', '绷带带有仪式缠绕秩序', 'bandage carries ritual wrapping order', ['有序缠绕', '符号结点', '胸臂位置', '干净布', '无伤口展示'], ['ordered wrapping', 'symbol knots', 'chest-arm placement', 'clean cloth', 'no wound display'], '献祭和损伤优先成为仪式绷带。', 'Translate sacrifice and injury into ritual bandage.', { ontologyLevel: 1 }),
      s('contaminated_relic_case', '污染圣物盒', 'Contaminated Relic Case', 'prop', '危险被收进圣物盒作为信仰证据', 'danger contained in relic case as faith evidence', ['小盒', '暗色内衬', '封蜡', '手持谨慎', '圣物感'], ['small case', 'dark lining', 'wax seal', 'careful holding', 'relic feel'], '污染源优先成为被封存圣物。', 'Translate pollution source into sealed relic.', { ontologyLevel: 2 }),
      s('unclean_rank_mark', '不洁等级标', 'Unclean Rank Mark', 'symbol', '污染程度成为社会或教团等级标记', 'pollution degree becomes social or cult rank mark', ['等级色块', '袖标', '小章', '距离感', '制度冷感'], ['rank color block', 'armband', 'small badge', 'social distance', 'cold institution'], '感染程度优先制度等级化。', 'Institutionalize infection degree as rank.', { ontologyLevel: 1 }),
      s('ritual_mask_containment', '仪式面具封控', 'Ritual Mask Containment', 'face', '面具既遮蔽症状也显示身份', 'mask both hides symptom and shows identity', ['半面具', '封印线', '眼睛可见', '呼吸孔', '仪式边'], ['half mask', 'seal line', 'visible eyes', 'breathing holes', 'ritual edge'], '面部异化优先仪式面具化。', 'Translate facial alteration into ritual mask.', { ontologyLevel: 2 }),
      s('taboo_distance_pose', '禁忌距离姿态', 'Taboo-Distance Pose', 'pose', '姿态表现他人与自身保持距离的规则', 'pose shows rule of distance between self and others', ['手掌外推', '身体后撤', '低头', '衣摆边界', '孤立感'], ['palm pushing out', 'body pulling back', 'lowered head', 'hem boundary', 'isolation'], '禁忌关系优先通过姿态表达。', 'Express taboo relation through pose.', { ontologyLevel: 1 }),
      s('ritual_contamination_rule', '污染仪式规则', 'Ritual Contamination Rule', 'function', '污染必须被禁忌、封印或身份制度解释', 'contamination must be explained by taboo, sealing, or identity system', ['禁忌来源', '封印证据', '制度标记', '无随机污渍', '主体清楚'], ['taboo source', 'sealing evidence', 'institutional mark', 'no random stains', 'clear subject'], '所有污染词必须进入仪式规则。', 'All contamination terms must enter ritual rules.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'symbiotic_equipment',
    name: '共生装备',
    nameEn: 'Symbiotic Equipment',
    focus: '装备、管线、外壳和活体功能之间的共生接口统摄角色',
    focusEn: 'symbiotic interfaces between gear, tubes, shells, and living functions governing character',
    defaultKind: 'function',
    defaultAffects: ['prop', 'costume', 'body', 'material'],
    defaultControls: ['symbiotic_equipment', 'living_gear', 'interface_function'],
    items: [
      s('living_backpack_pod', '活体背包囊', 'Living Backpack Pod', 'prop', '背包像活体器官但功能清楚', 'backpack reads living-organic but function is clear', ['背包囊', '束带', '软硬结合', '小接口', '主体优先'], ['backpack pod', 'straps', 'soft-hard mix', 'small ports', 'subject first'], '活体器官和携具优先合并为背包囊。', 'Merge living organ and carrying gear into backpack pod.', { ontologyLevel: 4, risk: 'high' }),
      s('biofilter_mask', '生物滤面罩', 'Biofilter Mask', 'face', '面罩以生物滤芯解释呼吸异化', 'mask explains respiratory alteration through biofilter', ['滤芯面罩', '软管', '鼻梁可见', '湿润滤膜', '功能清楚'], ['filter mask', 'soft tube', 'visible nose bridge', 'wet filter membrane', 'clear function'], '呼吸变异优先成为生物滤面罩。', 'Translate respiratory mutation into biofilter mask.', { ontologyLevel: 3, risk: 'medium' }),
      s('organ_tool_sleeve', '器官工具袖', 'Organ-Tool Sleeve', 'costume', '袖部像工具和器官的混合接口', 'sleeve reads as hybrid interface of tool and organ', ['厚袖', '接口线', '软质凸起', '手部露出', '工作姿态'], ['thick sleeve', 'interface line', 'soft protrusion', 'visible hand', 'working pose'], '手臂异化优先袖套工具化。', 'Translate arm alteration into tool sleeve.', { ontologyLevel: 3 }),
      s('feeding_line_belt', '供养线腰带', 'Feeding-Line Belt', 'prop', '腰带提供营养或交换功能', 'belt provides feeding or exchange function', ['腰部管线', '小囊袋', '接口扣', '功能标记', '不外泄'], ['waist tubing', 'small pouches', 'port clasp', 'function mark', 'no leakage'], '营养和寄生关系优先腰带化。', 'Translate nourishment and parasitic relation into belt system.', { ontologyLevel: 2 }),
      s('skin_anchor_mount', '皮肤锚座', 'Skin Anchor Mount', 'function', '装备固定点清楚说明和身体的关系', 'gear anchor points clearly explain relation to body', ['小锚座', '皮肤压痕', '螺纹或缝线', '局部接口', '清洁边'], ['small anchor mount', 'skin pressure mark', 'thread or stitch', 'local port', 'clean edge'], '装备融合必须有固定点。', 'Integrated gear must have anchor points.', { ontologyLevel: 3, risk: 'medium' }),
      s('responsive_collar_tube', '响应项圈管', 'Responsive Collar Tube', 'costume', '项圈管线像会回应身体状态', 'collar tube seems responsive to body state', ['项圈管', '轻微鼓动暗示', '小灯点', '颈部结构', '克制科技'], ['collar tube', 'subtle pulse hint', 'small light dot', 'neck structure', 'restrained tech'], '技术和寄生优先在项圈接口融合。', 'Fuse technology and parasitism at collar interface first.', { ontologyLevel: 3 }),
      s('symbiotic_glove_grip', '共生手套握持', 'Symbiotic Glove Grip', 'costume', '手套像帮助宿主抓握和感知', 'glove seems to help host grip and sense', ['厚手套', '指端膜', '抓握姿态', '小感知点', '功能明确'], ['thick glove', 'finger membrane', 'gripping pose', 'small sensor points', 'clear function'], '手部寄生优先成为共生手套。', 'Translate hand parasitism into symbiotic glove.', { ontologyLevel: 3 }),
      s('external_pulse_canister', '外置脉动罐', 'External Pulse Canister', 'prop', '外置罐承担体内异常功能', 'external canister carries abnormal internal function', ['小罐体', '透明窗', '脉动暗示', '腰侧挂载', '编号'], ['small canister', 'transparent window', 'pulse hint', 'waist mount', 'numbering'], '体内异常优先外置化。', 'Externalize internal anomaly first.', { ontologyLevel: 3 }),
      s('living_gear_repair_seam', '活体装备修补缝', 'Living Gear Repair Seam', 'wear', '修补缝说明活体装备可维护', 'repair seams show living gear is maintainable', ['修补缝', '不同材质', '旧针脚', '软硬交界', '维护证据'], ['repair seam', 'different materials', 'old stitches', 'soft-hard junction', 'maintenance evidence'], '活体装备必须出现维护逻辑。', 'Living gear must show maintenance logic.', { ontologyLevel: 2 }),
      s('gear_serves_host', '装备服务宿主', 'Gear Serves Host', 'function', '共生装备永远服务主体身份', 'symbiotic gear always serves subject identity', ['主体脸优先', '装备贴身', '功能明确', '不抢主体', '层级清楚'], ['face first', 'near-body gear', 'clear function', 'does not steal subject', 'clear hierarchy'], '所有活体装备都必须从属于角色身份。', 'All living gear must subordinate to character identity.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'identity_corrosion',
    name: '身份侵蚀',
    nameEn: 'Identity Corrosion',
    focus: '身份被感染、侵蚀、替换和重新命名的痕迹统摄角色',
    focusEn: 'traces of identity infection, erosion, replacement, and renaming governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'face', 'costume', 'prop'],
    defaultControls: ['identity_corrosion', 'renaming_mark', 'eroded_status'],
    items: [
      s('name_tag_overwritten', '姓名牌覆写', 'Overwritten Name Tag', 'symbol', '身份被新系统覆盖但旧名仍可见', 'identity overwritten by new system while old name remains visible', ['覆写姓名牌', '旧字残留', '新编号', '胸口位置', '制度冷感'], ['overwritten name tag', 'old text remnant', 'new number', 'chest placement', 'cold institution'], '身份异化优先通过姓名牌覆写表现。', 'Show identity alteration through overwritten name tag first.', { ontologyLevel: 1 }),
      s('eroded_uniform_rank', '侵蚀制服等级', 'Eroded Uniform Rank', 'wear', '制服等级被腐化侵蚀', 'uniform rank is eroded by corruption', ['等级残片', '袖章破损', '污色边', '仍可识别', '职业残留'], ['rank remnant', 'damaged sleeve mark', 'stained edge', 'still recognizable', 'occupational residue'], '职业和腐化优先在等级标识上融合。', 'Fuse occupation and corruption on rank marks.', { ontologyLevel: 1 }),
      s('parasite_signature_mark', '寄生签名印', 'Parasite Signature Mark', 'symbol', '寄生者留下可识别签名', 'parasite leaves recognizable signature', ['小印记', '重复符号', '颈侧或腕侧', '低对比', '来源明确'], ['small mark', 'repeated sign', 'neck or wrist side', 'low contrast', 'clear source'], '寄生关系优先生成签名印。', 'Generate signature marks for parasitic relation.', { ontologyLevel: 2 }),
      s('half_erased_face_makeup', '半擦除脸妆', 'Half-Erased Face Makeup', 'face', '脸部身份像被擦除但仍保留人脸', 'facial identity seems erased while retaining human face', ['半脸淡妆', '擦除边', '眼神清楚', '无伤口', '身份不稳'], ['half-face pale makeup', 'erased edge', 'clear gaze', 'no wound', 'unstable identity'], '面部侵蚀优先妆面化。', 'Translate facial erosion into makeup first.', { ontologyLevel: 1 }),
      s('changed_voice_collar', '变声项圈', 'Changed-Voice Collar', 'prop', '项圈暗示声音和身份被替换', 'collar suggests voice and identity replacement', ['细项圈', '喉部接口', '小扬声孔', '冷色金属', '沉默表情'], ['thin collar', 'throat port', 'tiny speaker hole', 'cool metal', 'silent expression'], '声音异化优先成为项圈道具。', 'Translate voice alteration into collar prop.', { ontologyLevel: 3 }),
      s('old_identity_under_layer', '旧身份内层', 'Old Identity Underlayer', 'costume', '旧身份藏在新外层下面', 'old identity hidden under new outer layer', ['内层制服', '外层污染', '边缘露出', '双重身份', '克制层次'], ['inner uniform', 'outer contamination', 'exposed edge', 'dual identity', 'restrained layers'], '身份冲突优先通过衣层解决。', 'Resolve identity conflict through garment layers.', { ontologyLevel: 1 }),
      s('borrowed_body_label', '借体标签', 'Borrowed Body Label', 'symbol', '标签说明身体不完全属于自己', 'label suggests body is not fully self-owned', ['借用标签', '编号绳', '腰侧小牌', '法律感', '冷静姿态'], ['borrowed label', 'number string', 'small waist tag', 'legal feeling', 'calm pose'], '宿主和身份关系优先标签化。', 'Turn host-identity relation into labels.', { ontologyLevel: 2 }),
      s('eroded_persona_prop', '侵蚀人格道具', 'Eroded Persona Prop', 'prop', '随身物被污染说明人格被侵蚀', 'personal prop is contaminated to show persona erosion', ['旧道具', '污染边', '手部握持', '仍有个人性', '来源清楚'], ['old prop', 'polluted edge', 'handheld', 'still personal', 'clear source'], '心理侵蚀优先落在私人物件上。', 'Place psychological erosion onto personal objects.', { ontologyLevel: 1 }),
      s('replacement_seal', '替换封签', 'Replacement Seal', 'symbol', '封签表示身份正在被替换或托管', 'seal indicates identity is being replaced or hosted', ['封签', '交叉纸带', '小印章', '胸口或面具', '制度仪式'], ['seal strip', 'crossed paper band', 'small stamp', 'chest or mask', 'institutional ritual'], '替换和封印元素优先封签化。', 'Translate replacement and sealing into seal strips.', { ontologyLevel: 1 }),
      s('identity_first_rule', '身份优先规则', 'Identity First Rule', 'function', '侵蚀不能抹掉第一识别身份', 'corrosion must not erase the primary identity', ['身份骨架', '职业残留', '脸部可读', '符号克制', '主体明确'], ['identity skeleton', 'occupational remnant', 'readable face', 'restrained symbol', 'clear subject'], '所有侵蚀元素必须保留角色身份骨架。', 'All erosion elements must preserve character identity skeleton.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'metamorphic_aftercare',
    name: '变异后护理',
    nameEn: 'Metamorphic Aftercare',
    focus: '变异后的护理、适应、维护和生活化证据统摄角色',
    focusEn: 'post-mutation care, adaptation, maintenance, and daily evidence governing character',
    defaultKind: 'function',
    defaultAffects: ['wear', 'prop', 'costume', 'pose'],
    defaultControls: ['metamorphic_aftercare', 'maintenance_evidence', 'adapted_life'],
    items: [
      s('aftercare_kit', '变异护理包', 'Aftercare Kit', 'prop', '护理包说明异化已进入生活流程', 'care kit shows alteration has entered daily routine', ['小护理包', '药膏', '标签', '手套', '随身携带'], ['small care kit', 'ointment', 'labels', 'gloves', 'carried daily'], '异化后果优先生活护理化。', 'Translate mutation aftermath into daily care.', { ontologyLevel: 1 }),
      s('custom_clothing_opening', '定制衣物开口', 'Custom Clothing Opening', 'costume', '衣物为异常部位预留开口', 'clothing leaves openings for altered parts', ['定制开口', '缝边加固', '不暴露过度', '功能裁剪', '穿着可信'], ['custom opening', 'reinforced seam', 'not overexposed', 'functional cut', 'wearable credibility'], '身体异常必须影响衣物裁剪。', 'Body anomaly must affect clothing cut.', { ontologyLevel: 2 }),
      s('daily_cleaning_trace', '日常清洁痕', 'Daily Cleaning Trace', 'wear', '清洁痕迹让异化不只是怪物状态', 'cleaning traces make alteration more than monster state', ['擦拭痕', '干净边', '旧毛巾', '局部亮面', '维护感'], ['wipe marks', 'clean edge', 'old towel', 'local shine', 'maintenance feel'], '表面异常必须有维护证据。', 'Surface anomaly must have maintenance evidence.', { ontologyLevel: 1 }),
      s('adapted_sleeve_fold', '适应袖褶', 'Adapted Sleeve Fold', 'costume', '袖褶适应异常肢体或接口', 'sleeve folds adapt to altered limb or port', ['特殊袖褶', '加宽裁剪', '接口位置', '动作空间', '生活化'], ['special sleeve folds', 'widened cut', 'port position', 'motion room', 'daily feel'], '肢体变化优先落在服装适应。', 'Place limb changes into garment adaptation.', { ontologyLevel: 1 }),
      s('protective_sleep_mask', '防护睡眠面罩', 'Protective Sleep Mask', 'prop', '睡眠防护说明异化有日常风险', 'sleep protection shows alteration has daily risks', ['柔软面罩', '固定带', '床边感', '闭眼表情', '非战斗'], ['soft mask', 'fixing strap', 'bedside feeling', 'closed-eye expression', 'non-combat'], '危险元素优先生活防护化。', 'Translate danger into daily protection first.', { ontologyLevel: 1 }),
      s('scarless_recovery_skin', '无疤恢复肤面', 'Scarless Recovery Skin', 'material', '恢复表面强调治疗和新生', 'recovered surface emphasizes treatment and rebirth', ['新皮肤', '浅色差', '无疤或轻疤', '柔光', '安静表情'], ['new skin', 'pale tone shift', 'no scar or light scar', 'soft light', 'quiet expression'], '愈合元素优先干净恢复化。', 'Cleanly recover healing elements.', { ontologyLevel: 2 }),
      s('monitoring_diary_card', '监测日记卡', 'Monitoring Diary Card', 'prop', '小卡片记录变异状态', 'small card records mutation state', ['日记卡', '日期', '小图表', '手持', '生活记录'], ['diary card', 'date', 'small chart', 'handheld', 'life record'], '变异状态优先被记录而非爆发。', 'Record mutation state instead of outbreak.', { ontologyLevel: 1 }),
      s('gentle_self_inspection', '温和自检动作', 'Gentle Self-Inspection', 'pose', '角色用动作检查异常部位', 'character checks altered part through action', ['低头查看', '手指轻触', '镜前感', '不惊恐', '身体完整'], ['looking down', 'light finger touch', 'mirror feeling', 'not panicked', 'body intact'], '异化关系优先通过自检动作表达。', 'Express alteration relation through self-check gesture.', { ontologyLevel: 1 }),
      s('repairable_body_logic', '可维护身体逻辑', 'Repairable Body Logic', 'function', '身体异常像可维护系统而非末日灾难', 'body anomaly reads as maintainable system, not apocalypse', ['维护点', '备用贴片', '清洁工具', '流程感', '可生活'], ['maintenance points', 'spare patches', 'cleaning tools', 'procedure feel', 'livable'], '所有异化必须有维护或适应路径。', 'Every alteration must have a maintenance or adaptation path.', { ontologyLevel: 1 }),
      s('aftercare_not_monster', '护理非怪物化', 'Aftercare Not Monsterization', 'function', '变异后护理协议保留人的生活和尊严', 'aftercare protocol preserves life and dignity', ['生活证据', '护理痕迹', '主体尊严', '无猎奇', '可持续状态'], ['daily evidence', 'care trace', 'subject dignity', 'no shock', 'sustainable state'], '变异不得只导向怪物展示，必须能生活。', 'Mutation must not only show monstrosity; it must be livable.', { ontologyLevel: 1 })
    ]
  }
];

export const PARASITIC_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
