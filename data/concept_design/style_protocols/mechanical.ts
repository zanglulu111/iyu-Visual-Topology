import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'MECHANICAL';
const ROUTE_NAME = '机械构造';
const ROUTE_NAME_EN = 'Mechanical Construction';
const ERAS = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const FORBIDS = ['随机全身机甲化', '机械结构不服务身份', '真实品牌零件', '无维护逻辑', '关节不可动', '金属外壳吞掉脸部识别'];

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
    slug: 'robot_skeleton',
    name: '机器人骨架',
    nameEn: 'Robot Skeleton',
    focus: '机器人骨架、承重轴线和可读机械比例统摄角色',
    focusEn: 'robot skeleton, load-bearing axis, and readable mechanical proportion governing character',
    defaultKind: 'structure',
    defaultAffects: ['body', 'silhouette', 'joint', 'material'],
    defaultControls: ['robot_skeleton', 'load_bearing_axis', 'readable_mechanics'],
    items: [
      s('visible_spine_rail', '可见脊轨', 'Visible Spine Rail', 'structure', '背部脊轨作为机械生命主轴', 'back spine rail as main axis of machine life', ['背部轨道', '分段螺丝', '肩胛连接', '直立站姿', '人体比例'], ['back rail', 'segmented screws', 'scapula links', 'upright stance', 'human proportion'], '力量和生命结构优先落在背部主轴。', 'Place strength and life structure on the back axis first.', { ontologyLevel: 4, risk: 'high' }),
      s('rib_frame_chassis', '肋架底盘', 'Rib-Frame Chassis', 'structure', '胸腔以机械肋架说明保护与呼吸位置', 'chest uses mechanical rib frame to explain protection and breathing space', ['金属肋架', '胸口留空', '内层阴影', '螺丝节点', '脸部优先'], ['metal rib frame', 'chest negative space', 'inner shadow', 'screw nodes', 'face first'], '胸甲和骨架元素优先整合成肋架底盘。', 'Merge chest armor and skeleton elements into rib-frame chassis.', { ontologyLevel: 4, risk: 'high' }),
      s('pelvis_core_mount', '骨盆核心座', 'Pelvis Core Mount', 'structure', '骨盆连接件说明下肢机械承重', 'pelvic connector explains mechanical lower-limb load bearing', ['骨盆环', '腿部接口', '承重点', '机械腰线', '稳定重心'], ['pelvic ring', 'leg ports', 'load points', 'mechanical waistline', 'stable center'], '下肢机械化必须有骨盆承重点。', 'Lower-limb mechanization must have pelvic load points.', { ontologyLevel: 4, risk: 'high' }),
      s('open_frame_armature', '开放式内骨架', 'Open-Frame Armature', 'structure', '开放骨架展示机械生命而非外部装备', 'open frame shows machine life rather than external gear', ['开放框架', '细杆支撑', '关节可见', '少量外壳', '结构留白'], ['open frame', 'thin struts', 'visible joints', 'limited shell', 'structural negative space'], '机器人倾向优先内骨架化，不堆外部装甲。', 'Translate robot tendency into inner armature, not stacked armor.', { ontologyLevel: 4, risk: 'high' }),
      s('humanoid_axis_lock', '人形轴线锁', 'Humanoid Axis Lock', 'function', '机械身体必须保留清楚人形轴线', 'mechanical body must preserve clear humanoid axis', ['头胸骨盆轴', '双肩双髋', '肢体清楚', '比例可信', '无机械乱堆'], ['head-chest-pelvis axis', 'shoulders and hips', 'clear limbs', 'credible proportion', 'no mechanical clutter'], '所有机械构造必须先守住人形骨架。', 'All mechanical construction must preserve humanoid skeleton first.', { ontologyLevel: 3 }),
      s('hollow_torso_machine', '空腔机械躯干', 'Hollow Machine Torso', 'structure', '躯干空腔表达非生物生命结构', 'torso cavity expresses non-biological life structure', ['胸腹空腔', '内侧框架', '线束少量', '边缘加固', '无脏乱电线'], ['torso cavity', 'inner frame', 'few wire bundles', 'reinforced edge', 'no messy wiring'], '内脏替代必须结构化为空腔，不做乱线。', 'Structure organ replacement as cavity, not messy cables.', { ontologyLevel: 5, risk: 'high' }),
      s('vertebrae_piston_stack', '椎节活塞列', 'Vertebrae Piston Stack', 'structure', '脊柱以小活塞列展示运动逻辑', 'spine shows motion logic through small piston stack', ['小活塞', '椎节重复', '背部中心', '伸缩缝', '机械节律'], ['small pistons', 'vertebra repetition', 'back center', 'telescoping gaps', 'mechanical rhythm'], '脊柱机械化优先变成可动活塞列。', 'Translate spine mechanization into movable piston stack.', { ontologyLevel: 4, risk: 'high' }),
      s('load_path_highlight', '承重路径高亮', 'Load-Path Highlight', 'symbol', '结构高亮显示力从哪里传递', 'structural highlights show how force travels', ['细亮线', '肩到手', '髋到脚', '工程感', '低亮度'], ['thin highlight lines', 'shoulder to hand', 'hip to foot', 'engineering feel', 'low brightness'], '力量和动作必须沿承重路径解释。', 'Explain power and motion through load paths.', { ontologyLevel: 2 }),
      s('machine_anatomy_cutaway', '机械解剖剖面', 'Machine Anatomy Cutaway', 'function', '局部剖面说明内部构造但不破坏主体', 'local cutaway explains inner construction without breaking subject', ['局部剖面', '干净截面', '编号小字', '结构板', '主体完整'], ['local cutaway', 'clean section', 'small numbering', 'structure plate', 'whole subject'], '复杂机械生命优先用局部剖面说明。', 'Explain complex machine life with local cutaway first.', { ontologyLevel: 4 }),
      s('skeleton_not_armor_stack', '骨架非装甲堆叠', 'Skeleton Not Armor Stack', 'function', '机械骨架是身体结构，不是外部装甲堆叠', 'mechanical skeleton is body structure, not external armor stacking', ['结构优先', '外壳少量', '关节可动', '比例清楚', '脸部保留'], ['structure first', 'limited shell', 'movable joints', 'clear proportion', 'face preserved'], '所有机器人骨架元素必须说明承重、运动或维护。', 'All robot-skeleton elements must explain load, motion, or maintenance.', { ontologyLevel: 3 })
    ]
  },
  {
    slug: 'prosthetic_limb',
    name: '义体肢体',
    nameEn: 'Prosthetic Limb',
    focus: '义肢、替换肢体和人体接口统摄角色',
    focusEn: 'prosthetics, replacement limbs, and body interfaces governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'joint', 'material', 'pose'],
    defaultControls: ['prosthetic_limb', 'body_interface', 'replacement_function'],
    items: [
      s('single_prosthetic_arm', '单侧义体手臂', 'Single Prosthetic Arm', 'ontology', '只用一侧义体形成强识别点', 'one prosthetic arm creates strong identity point', ['单侧机械臂', '肩部接口', '手指可动', '材料差异', '人脸清楚'], ['one mechanical arm', 'shoulder interface', 'movable fingers', 'material contrast', 'clear face'], '机械化优先限制为单侧义体。', 'Restrict mechanization to one-side prosthesis first.', { ontologyLevel: 4, risk: 'high' }),
      s('below_knee_prosthesis', '小腿义肢', 'Below-Knee Prosthesis', 'ontology', '小腿义肢通过步态和支撑说明功能', 'below-knee prosthesis explains function through gait and support', ['小腿金属杆', '脚掌弹片', '裤脚避让', '站姿偏重', '维护螺丝'], ['lower-leg metal rod', 'spring foot', 'pants clearance', 'weighted stance', 'maintenance screws'], '速度和损伤元素优先落在下肢义体。', 'Place speed and injury elements into lower-limb prosthesis.', { ontologyLevel: 4, risk: 'high' }),
      s('prosthetic_hand_precision', '精密义手', 'Precision Prosthetic Hand', 'function', '义手强调细动作而非武器化', 'prosthetic hand emphasizes fine action rather than weaponization', ['细指节', '指尖传感', '抓握姿态', '小工具', '无枪械默认'], ['fine knuckles', 'fingertip sensors', 'grip pose', 'small tool', 'no weapon default'], '手部机械化优先服务工作动作。', 'Make hand mechanization serve work gestures first.', { ontologyLevel: 4 }),
      s('socket_skin_pressure', '接口皮肤压痕', 'Socket Skin Pressure', 'material', '义体接口必须留下可信压痕', 'prosthetic socket must leave credible skin pressure marks', ['皮肤压痕', '软垫边', '接口环', '局部红印', '无血腥'], ['skin pressure marks', 'padded edge', 'socket ring', 'local redness', 'no gore'], '身体与机械连接必须有接口证据。', 'Body-machine connection must have interface evidence.', { ontologyLevel: 3 }),
      s('detachable_forearm_unit', '可拆前臂单元', 'Detachable Forearm Unit', 'function', '前臂像可维护模块而非永久怪异', 'forearm reads as maintainable module rather than permanent weirdness', ['前臂模块', '锁扣线', '备用端口', '工具姿态', '可拆卸感'], ['forearm module', 'lock line', 'spare port', 'tool pose', 'detachable feeling'], '功能性义体优先模块化。', 'Modularize functional prosthetics first.', { ontologyLevel: 4 }),
      s('old_prosthetic_wear', '旧义体磨损', 'Old Prosthetic Wear', 'wear', '义体损耗说明使用历史和职业', 'prosthetic wear explains use history and occupation', ['磨亮边', '划痕', '旧螺丝', '替换片', '手部油痕'], ['polished edge', 'scratches', 'old screws', 'replacement plate', 'hand oil marks'], '机械肢体必须有使用或保养痕迹。', 'Mechanical limbs must show use or maintenance traces.', { ontologyLevel: 3 }),
      s('prosthetic_balance_pose', '义体平衡姿态', 'Prosthetic Balance Pose', 'pose', '姿态体现义体重量和身体适应', 'pose shows prosthetic weight and body adaptation', ['一侧负重', '肩颈补偿', '脚距稳定', '手臂下垂', '身体适应'], ['one-side weight', 'shoulder-neck compensation', 'stable foot spacing', 'arm hanging', 'body adaptation'], '义体不是装饰，必须影响站姿。', 'Prosthesis is not decoration; it must affect stance.', { ontologyLevel: 1 }),
      s('prosthetic_cover_skin', '义体仿皮外覆', 'Prosthetic Synthetic Skin Cover', 'material', '仿皮外覆制造人机边界暧昧', 'synthetic skin cover creates ambiguous human-machine boundary', ['仿皮套', '接缝线', '肤色差', '局部露金属', '柔硬对比'], ['synthetic skin cover', 'seam line', 'skin-tone shift', 'local exposed metal', 'soft-hard contrast'], '仿生和机械冲突优先用仿皮外覆调和。', 'Use synthetic skin cover to reconcile bionic-machine conflict.', { ontologyLevel: 4 }),
      s('rehab_alignment_marks', '康复校准标记', 'Rehab Alignment Marks', 'symbol', '校准标记说明义体处于训练和适应期', 'alignment marks show prosthesis is in training/adaptation phase', ['对齐线', '贴纸刻度', '康复痕迹', '关节旁', '临床感'], ['alignment lines', 'scale stickers', 'rehab traces', 'near joints', 'clinical feel'], '义体必须可以被校准和训练。', 'Prosthesis must be alignable and trainable.', { ontologyLevel: 2 }),
      s('prosthetic_not_superweapon', '义体非超级武器', 'Prosthetic Not Superweapon', 'function', '义体协议避免默认武器化和超英化', 'prosthetic protocol avoids default weaponization and superheroization', ['功能肢体', '生活动作', '维护接口', '身份服务', '无巨炮手臂'], ['functional limb', 'daily action', 'maintenance interface', 'identity service', 'no cannon arm'], '所有义体优先解释生活、劳动或行动功能。', 'All prosthetics must first explain daily, labor, or action function.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'joint_actuator',
    name: '关节驱动',
    nameEn: 'Joint Actuator',
    focus: '机械关节、液压、转轴和运动驱动统摄角色',
    focusEn: 'mechanical joints, hydraulics, pivots, and motion drives governing character',
    defaultKind: 'function',
    defaultAffects: ['joint', 'pose', 'body', 'silhouette'],
    defaultControls: ['joint_actuator', 'motion_logic', 'pivot_system'],
    items: [
      s('exposed_elbow_hinge', '外露肘铰链', 'Exposed Elbow Hinge', 'structure', '肘部铰链清楚说明手臂运动范围', 'elbow hinge clearly explains arm motion range', ['肘铰链', '圆轴', '弯曲姿态', '金属磨痕', '无乱线'], ['elbow hinge', 'round pivot', 'bent pose', 'metal wear', 'no tangled wires'], '机械手臂必须显示可动关节。', 'Mechanical arms must show movable joints.', { ontologyLevel: 4 }),
      s('knee_hydraulic_pair', '膝部液压对', 'Knee Hydraulic Pair', 'function', '膝部液压说明跳跃、负重或蹲姿', 'knee hydraulics explain jumping, load, or crouching', ['双液压杆', '膝侧结构', '低姿态', '受力压缩', '功能清楚'], ['paired hydraulics', 'knee-side structure', 'low pose', 'compressed load', 'clear function'], '下肢力量优先液压化。', 'Translate lower-limb power into hydraulics first.', { ontologyLevel: 4 }),
      s('shoulder_ball_socket', '肩部球窝轴', 'Shoulder Ball-Socket Axis', 'structure', '肩部球窝让机械臂可读可转动', 'shoulder ball socket makes mechanical arm readable and rotatable', ['球形肩轴', '外壳避让', '旋转缝', '肩宽变化', '工程感'], ['spherical shoulder joint', 'shell clearance', 'rotation seam', 'shoulder-width shift', 'engineering feel'], '肩部机械化必须留下旋转空间。', 'Shoulder mechanization must leave rotation room.', { ontologyLevel: 4 }),
      s('ankle_stabilizer', '踝部稳定器', 'Ankle Stabilizer', 'function', '踝部结构说明平衡和地面接触', 'ankle structure explains balance and ground contact', ['踝侧支架', '脚底弹性', '站姿稳定', '小螺丝', '负重线'], ['ankle-side brace', 'elastic sole', 'stable stance', 'small screws', 'load line'], '移动和站姿优先通过踝部稳定器解释。', 'Explain mobility and stance through ankle stabilizer.', { ontologyLevel: 3 }),
      s('finger_micro_actuators', '指部微驱动', 'Finger Micro-Actuators', 'function', '手指小驱动强化精密操作', 'finger micro-drives enhance precise operation', ['指节小杆', '手指展开', '工具接近', '细金属线', '无爪化'], ['small finger rods', 'spread fingers', 'near tool', 'fine metal lines', 'no claws'], '机械手优先精密操作化。', 'Make mechanical hands precision-operation first.', { ontologyLevel: 4 }),
      s('neck_rotation_ring', '颈部旋转环', 'Neck Rotation Ring', 'structure', '颈部环说明头部机械支撑', 'neck ring explains mechanical head support', ['颈环', '转动缝', '下巴留白', '小轴承', '脸部清楚'], ['neck ring', 'rotation seam', 'chin clearance', 'small bearings', 'clear face'], '机械头颈必须保留脸部识别。', 'Mechanical neck/head must preserve facial recognition.', { ontologyLevel: 4, risk: 'high' }),
      s('joint_limit_marks', '关节限位标', 'Joint Limit Marks', 'symbol', '限位标记显示机械动作边界', 'limit marks show boundaries of mechanical motion', ['刻度线', '红色小点', '关节旁', '活动范围', '工程标注'], ['scale marks', 'small red dots', 'beside joint', 'range of motion', 'engineering annotation'], '动作边界优先标注化。', 'Annotate motion limits first.', { ontologyLevel: 2 }),
      s('servo_twitch_pose', '伺服轻颤姿态', 'Servo-Twitch Pose', 'pose', '姿态带微小机械停顿感', 'pose carries tiny mechanical pauses', ['短暂停顿', '手指微开', '肩部锁定', '目光稳定', '非僵尸感'], ['brief pause', 'slightly open fingers', 'locked shoulder', 'stable gaze', 'not zombie-like'], '机械生命感优先从姿态节律出现。', 'Express machine life through pose rhythm first.', { ontologyLevel: 1 }),
      s('replaceable_joint_cap', '可换关节盖', 'Replaceable Joint Cap', 'wear', '关节盖可替换说明维护逻辑', 'replaceable joint cap explains maintenance logic', ['关节盖', '拆卸缝', '编号', '磨损边', '备用感'], ['joint cap', 'removal seam', 'numbering', 'worn edge', 'spare-part feel'], '关节必须可维护、可替换。', 'Joints must be maintainable and replaceable.', { ontologyLevel: 2 }),
      s('joint_not_random_spikes', '关节非随机尖刺', 'Joint Not Random Spikes', 'function', '关节设计只服务运动，不做无意义尖刺', 'joint design serves motion only, not meaningless spikes', ['转轴清楚', '活动缝', '受力方向', '无装饰尖刺', '运动可信'], ['clear pivot', 'motion seam', 'force direction', 'no decorative spikes', 'credible movement'], '所有机械关节必须说明转动、承重或限制。', 'All mechanical joints must explain rotation, load, or limit.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'metal_shell',
    name: '金属外壳',
    nameEn: 'Metal Shell',
    focus: '外壳、面板、装甲皮肤和金属表面统摄角色',
    focusEn: 'shells, panels, armored skin, and metal surfaces governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'body', 'costume', 'wear'],
    defaultControls: ['metal_shell', 'panel_skin', 'surface_wear'],
    items: [
      s('brushed_steel_skin', '拉丝钢皮肤', 'Brushed-Steel Skin', 'material', '金属表面以拉丝纹理保持克制', 'metal surface remains restrained through brushed texture', ['拉丝纹', '冷灰金属', '低反光', '局部面板', '无镜面乱反'], ['brushed grain', 'cool gray metal', 'low reflection', 'local panels', 'no chaotic mirror shine'], '金属身体优先低反光材料化。', 'Materialize metal body with low-reflection finish first.', { ontologyLevel: 4 }),
      s('white_ceramic_shell', '白陶瓷外壳', 'White Ceramic Shell', 'material', '白色陶瓷外壳制造洁净仿生感', 'white ceramic shell creates clean bionic feeling', ['白陶瓷', '细缝', '圆角板', '清洁表面', '医疗感'], ['white ceramic', 'fine seams', 'rounded panels', 'clean surface', 'medical feel'], '仿生和临床元素优先白陶瓷化。', 'Translate bionic and clinical elements into white ceramic.', { ontologyLevel: 4 }),
      s('black_anodized_plate', '黑色阳极板', 'Black Anodized Plate', 'material', '黑色金属板表达隐蔽和战术机械感', 'black metal plates express stealth and tactical mechanism', ['哑黑面板', '细边高光', '螺丝点', '肩臂位置', '低可见'], ['matte black panels', 'thin edge highlight', 'screw dots', 'shoulder-arm placement', 'low visibility'], '潜行和机械元素优先哑黑面板化。', 'Translate stealth and mechanical elements into matte black panels.', { ontologyLevel: 3 }),
      s('paint_chipped_shell', '掉漆外壳', 'Paint-Chipped Shell', 'wear', '掉漆说明机械生命使用历史', 'chipped paint shows use history of machine life', ['掉漆边', '底层金属', '旧划痕', '维护贴', '局部磨损'], ['chipped paint edge', 'underlying metal', 'old scratches', 'maintenance sticker', 'local wear'], '机械旧化必须可读，不做脏乱。', 'Mechanical aging must be readable, not messy.', { ontologyLevel: 2 }),
      s('panel_gap_language', '面板缝语言', 'Panel-Gap Language', 'structure', '面板缝决定外壳如何打开和维护', 'panel gaps decide how shell opens and is maintained', ['细缝', '开合线', '小缺口', '模块边界', '几何秩序'], ['fine gaps', 'opening lines', 'small notches', 'module boundary', 'geometric order'], '外壳必须有开合逻辑。', 'Shells must have opening logic.', { ontologyLevel: 2 }),
      s('transparent_service_panel', '透明检修窗', 'Transparent Service Panel', 'material', '透明小窗展示内部但不暴露混乱', 'small transparent window shows inside without chaos', ['透明窗', '内部暗影', '编号边', '胸侧或手臂', '清洁塑料'], ['transparent window', 'inner shadow', 'numbered edge', 'chest side or arm', 'clean plastic'], '内部机械优先通过检修窗可读化。', 'Make inner mechanics readable through service window.', { ontologyLevel: 4 }),
      s('riveted_old_shell', '铆钉旧壳', 'Riveted Old Shell', 'material', '铆钉外壳带工业时代感', 'riveted shell carries industrial-era feeling', ['铆钉', '厚金属板', '油渍边', '旧工业感', '沉重姿态'], ['rivets', 'thick metal plates', 'oil-stained edge', 'old industry', 'heavy pose'], '工业机械优先铆钉板壳化。', 'Translate industrial mechanics into riveted shell plates.', { ontologyLevel: 3, eras: ['industrial', 'modern', 'timeless'] }),
      s('soft_edge_metal', '软边金属', 'Soft-Edge Metal', 'material', '金属边缘被倒角以避免廉价机甲感', 'metal edges are chamfered to avoid cheap armor feel', ['倒角边', '柔和反光', '人体贴合', '细接缝', '高级制造'], ['chamfered edge', 'soft reflection', 'body fit', 'fine seams', 'refined manufacturing'], '高精度机械优先软边处理。', 'Use soft-edge treatment for refined mechanics.', { ontologyLevel: 2 }),
      s('heat_stained_metal', '热变色金属', 'Heat-Stained Metal', 'wear', '热变色说明动力和工作负荷', 'heat discoloration shows power and workload', ['蓝紫热痕', '排热口附近', '金属渐变', '小范围', '功能来源'], ['blue-purple heat stain', 'near vent', 'metal gradient', 'small range', 'functional source'], '能源和高温元素优先金属热痕化。', 'Translate energy and heat into metal heat stains.', { ontologyLevel: 3 }),
      s('shell_not_full_armor', '外壳非全甲', 'Shell Not Full Armor', 'function', '金属外壳不等于全身装甲', 'metal shell is not full-body armor', ['局部外壳', '活动关节', '脸部开放', '维护缝', '身份优先'], ['local shell', 'movable joints', 'open face', 'maintenance seams', 'identity first'], '所有金属壳必须保留动作和身份。', 'All metal shells must preserve motion and identity.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'industrial_frame',
    name: '工业骨架',
    nameEn: 'Industrial Frame',
    focus: '工业支架、管线、焊接和重型结构统摄角色',
    focusEn: 'industrial frames, pipes, welding, and heavy structures governing character',
    defaultKind: 'structure',
    defaultAffects: ['body', 'prop', 'material', 'silhouette'],
    defaultControls: ['industrial_frame', 'heavy_structure', 'workshop_logic'],
    items: [
      s('welded_back_frame', '焊接背架', 'Welded Back Frame', 'structure', '背架像工业外骨骼但可维护', 'back frame reads as industrial exoskeleton but maintainable', ['焊点', '方管', '背部框架', '旧漆', '负重姿态'], ['weld marks', 'square tubes', 'back frame', 'old paint', 'load-bearing pose'], '工业力量优先背架化。', 'Translate industrial strength into back frame.', { ontologyLevel: 3 }),
      s('hydraulic_lift_spine', '液压升降脊', 'Hydraulic Lift Spine', 'function', '液压结构说明抬举和负重功能', 'hydraulic structure explains lifting and load function', ['液压杆', '背腰连接', '压缩姿态', '油渍', '工地感'], ['hydraulic rod', 'back-waist link', 'compressed pose', 'oil stain', 'worksite feel'], '重体力和机械增强优先液压化。', 'Translate heavy labor and mechanical enhancement into hydraulics.', { ontologyLevel: 4 }),
      s('forklift_leg_logic', '叉车腿逻辑', 'Forklift-Leg Logic', 'structure', '下肢像小型搬运结构服务负重', 'lower limbs read as small hauling structures for load', ['厚脚掌', '前伸支撑', '黄色磨损', '低重心', '负载线'], ['thick feet', 'forward support', 'worn yellow', 'low center', 'load line'], '搬运和工业元素优先下肢负重化。', 'Translate hauling and industrial elements into lower-limb load logic.', { ontologyLevel: 4 }),
      s('pipe_guard_shoulder', '管护肩', 'Pipe-Guard Shoulder', 'costume', '肩部管架形成工业轮廓', 'shoulder pipe frame forms industrial silhouette', ['肩部管件', '保护框', '焊接弯头', '肩宽扩大', '无装饰乱管'], ['shoulder pipes', 'guard frame', 'welded elbows', 'expanded shoulders', 'no decorative pipe clutter'], '管线元素必须有保护或承重功能。', 'Pipe elements must have protection or load function.', { ontologyLevel: 3 }),
      s('grease_marked_joints', '油脂关节痕', 'Grease-Marked Joints', 'wear', '油脂集中在可动关节和维修点', 'grease concentrates at moving joints and service points', ['黑油痕', '关节周围', '擦拭边', '维修感', '不过度脏乱'], ['black grease marks', 'around joints', 'wipe edge', 'maintenance feel', 'not too messy'], '工业磨损优先围绕运动点。', 'Industrial wear should surround motion points first.', { ontologyLevel: 1 }),
      s('warning_stripe_frame', '警示条框架', 'Warning-Stripe Frame', 'symbol', '警示条说明危险运动范围', 'warning stripes explain dangerous motion range', ['黄黑条', '框架边', '低饱和', '工业安全', '不抢脸'], ['yellow-black stripes', 'frame edge', 'low saturation', 'industrial safety', 'face not stolen'], '危险和工业元素优先安全标识化。', 'Translate danger and industry into safety markings.', { ontologyLevel: 1 }),
      s('factory_hook_mount', '工厂挂钩座', 'Factory Hook Mount', 'prop', '挂钩座说明搬运、悬挂或维修功能', 'hook mount explains hauling, hanging, or maintenance function', ['挂钩座', '背侧或腰侧', '磨损金属', '承重点', '功能清楚'], ['hook mount', 'back or waist side', 'worn metal', 'load point', 'clear function'], '工具和负重元素优先成为挂点。', 'Translate tools and load into mount points.', { ontologyLevel: 2 }),
      s('exposed_workshop_bolts', '外露车间螺栓', 'Exposed Workshop Bolts', 'material', '螺栓像车间临时修复而非精密消费品', 'bolts read as workshop repair rather than refined consumer product', ['大螺栓', '垫片', '临时修复', '金属边', '实用感'], ['large bolts', 'washers', 'temporary repair', 'metal edges', 'utility feel'], '粗工业机械优先车间维修化。', 'Make rough industrial mechanics workshop-repaired.', { ontologyLevel: 2 }),
      s('crane_counterweight_back', '吊机配重背', 'Crane Counterweight Back', 'structure', '背部配重说明动作稳定性', 'back counterweight explains motion stability', ['背部配重', '厚块', '低重心', '肩带固定', '慢步姿态'], ['back counterweight', 'thick block', 'low center', 'strap fixing', 'slow gait'], '大型机械感优先通过配重而非巨型身体。', 'Use counterweight for heavy-machine feeling instead of giant body.', { ontologyLevel: 3 }),
      s('industrial_not_mecha_fantasy', '工业非机甲幻想', 'Industrial Not Mecha Fantasy', 'function', '工业骨架服务劳动、维护和负重，不做英雄机甲', 'industrial frame serves labor, maintenance, and load, not hero mecha', ['劳动证据', '维护点', '承重结构', '无超级机甲', '身体可读'], ['labor evidence', 'service points', 'load structure', 'no super mecha', 'readable body'], '所有工业机械必须能解释工作功能。', 'All industrial mechanics must explain work function.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'maintenance_module',
    name: '维护模块',
    nameEn: 'Maintenance Module',
    focus: '检修、替换件、维护记录和可修复机械生命统摄角色',
    focusEn: 'service, replacement parts, maintenance records, and repairable machine life governing character',
    defaultKind: 'function',
    defaultAffects: ['wear', 'prop', 'symbol', 'body'],
    defaultControls: ['maintenance_module', 'repairable_body', 'service_record'],
    items: [
      s('service_panel_label', '检修面板标签', 'Service-Panel Label', 'symbol', '检修标签说明身体可打开维护', 'service label shows body can be opened for maintenance', ['小标签', '检修箭头', '面板边', '编号', '工程清洁'], ['small label', 'service arrow', 'panel edge', 'numbering', 'engineering cleanliness'], '维护逻辑优先标签化。', 'Label maintenance logic first.', { ontologyLevel: 1 }),
      s('replacement_part_case', '替换件盒', 'Replacement Part Case', 'prop', '随身替换件让机械生命可信', 'carried spare parts make machine life credible', ['小零件盒', '泡棉内衬', '螺丝和垫片', '手持', '维护职业感'], ['small parts case', 'foam lining', 'screws and washers', 'handheld', 'maintenance occupation feel'], '机械身份优先配备备用件。', 'Give mechanical identity spare parts first.', { ontologyLevel: 1 }),
      s('repair_stitch_plate', '修补缝板', 'Repair Stitch Plate', 'wear', '金属补板像缝合一样显示历史', 'metal patch plates show history like stitches', ['补板', '不同金属色', '小螺丝', '不规则边', '旧损伤'], ['patch plate', 'different metal tone', 'small screws', 'irregular edge', 'old damage'], '战损和旧化优先补板化。', 'Translate battle wear and aging into patch plates.', { ontologyLevel: 2 }),
      s('calibration_sticker', '校准贴纸', 'Calibration Sticker', 'symbol', '校准贴显示精度和维修状态', 'calibration sticker shows precision and service state', ['校准贴', '小刻度', '关节附近', '日期感', '制度维护'], ['calibration sticker', 'small scale', 'near joint', 'date feeling', 'institutional service'], '精密机械必须有校准痕迹。', 'Precision mechanics must show calibration traces.', { ontologyLevel: 1 }),
      s('open_tool_slot', '开放工具槽', 'Open Tool Slot', 'function', '工具槽说明机械身体可被调整', 'tool slot shows mechanical body can be adjusted', ['小槽口', '六角孔', '手边工具', '模块边', '不破坏外形'], ['small slot', 'hex socket', 'nearby tool', 'module edge', 'shape preserved'], '维护接口必须小而清楚。', 'Maintenance ports must be small and clear.', { ontologyLevel: 2 }),
      s('daily_oil_cloth', '日常油布', 'Daily Oil Cloth', 'prop', '油布让机械角色有生活维护习惯', 'oil cloth gives mechanical character daily maintenance habit', ['小油布', '手中擦拭', '轻油痕', '工具包', '安静动作'], ['small oil cloth', 'wiping by hand', 'light oil mark', 'tool pouch', 'quiet action'], '机械生命优先生活化维护。', 'Give machine life daily maintenance first.', { ontologyLevel: 1 }),
      s('service_history_scratches', '维修履历划痕', 'Service-History Scratches', 'wear', '划痕像维修履历而非随机破损', 'scratches read as service history, not random damage', ['分组划痕', '面板角', '旧新层次', '可读路径', '不过度脏'], ['grouped scratches', 'panel corner', 'old-new layers', 'readable path', 'not overdirty'], '损耗必须说明使用历史。', 'Wear must explain use history.', { ontologyLevel: 1 }),
      s('modular_spare_limb', '备用模块肢体', 'Modular Spare Limb', 'prop', '备用肢体作为维护道具而非第二角色', 'spare limb as maintenance prop, not second character', ['备用手臂', '收纳架', '编号', '不安装状态', '主角优先'], ['spare arm', 'storage rack', 'numbering', 'uninstalled state', 'protagonist first'], '多肢体倾向优先备用件化。', 'Translate extra-limb tendency into spare parts first.', { ontologyLevel: 4 }),
      s('self_repair_pose', '自我维修姿态', 'Self-Repair Pose', 'pose', '角色正在调整自己的一处机械结构', 'character adjusts one mechanical structure on themself', ['低头检修', '一手扶板', '工具在手', '静态专注', '身份清楚'], ['head down servicing', 'one hand on panel', 'tool in hand', 'static focus', 'clear identity'], '维护关系优先通过动作表达。', 'Express maintenance relation through action first.', { ontologyLevel: 1 }),
      s('machine_life_must_be_repairable', '机械生命必须可修', 'Machine Life Must Be Repairable', 'function', '机械生命不是纯外观，必须有维护入口', 'machine life is not pure look; it must have service access', ['维护入口', '备用件', '使用痕迹', '功能标注', '非装饰机械'], ['service access', 'spare parts', 'use traces', 'functional marks', 'not decorative machinery'], '所有机械构造必须出现维护或替换逻辑。', 'All mechanical construction must show maintenance or replacement logic.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'synthetic_face',
    name: '合成面部',
    nameEn: 'Synthetic Face',
    focus: '合成皮肤、面部面板、仿生表情和人机识别边界统摄角色',
    focusEn: 'synthetic skin, facial panels, bionic expression, and human-machine recognition boundary governing character',
    defaultKind: 'face',
    defaultAffects: ['face', 'material', 'symbol', 'identity'],
    defaultControls: ['synthetic_face', 'facial_panel', 'bionic_expression'],
    items: [
      s('half_face_panel', '半脸面板', 'Half-Face Panel', 'face', '半脸机械化必须保留眼神和表情', 'half mechanical face must preserve gaze and expression', ['半脸面板', '眼睛可见', '细接缝', '肤色差', '低反光'], ['half-face panel', 'visible eye', 'fine seam', 'skin-tone contrast', 'low reflection'], '面部机械化优先半脸面板化。', 'Translate facial mechanization into half-face panel first.', { ontologyLevel: 4, risk: 'high' }),
      s('synthetic_skin_seam', '合成皮肤接缝', 'Synthetic Skin Seam', 'material', '合成皮肤通过细缝显示人造边界', 'synthetic skin shows artificial boundary through fine seam', ['细缝线', '耳后或下颌', '肤色一致', '轻微不自然', '表情完整'], ['fine seam', 'behind ear or jaw', 'matched skin tone', 'slightly uncanny', 'full expression'], '仿生脸优先用接缝暗示。', 'Suggest bionic face with seams first.', { ontologyLevel: 3 }),
      s('glass_eye_module', '玻璃眼模块', 'Glass Eye Module', 'face', '机械眼像玻璃模块但不变武器', 'mechanical eye reads as glass module, not weapon', ['玻璃眼片', '低光反射', '虹膜可读', '眼眶细缝', '无红光默认'], ['glass eye piece', 'low reflection', 'readable iris', 'eye-socket seam', 'no default red glow'], '机械眼优先克制模块化。', 'Make mechanical eyes restrained modules first.', { ontologyLevel: 4 }),
      s('removable_faceplate', '可摘面板脸', 'Removable Faceplate', 'face', '可摘面板说明脸是维护结构', 'removable faceplate shows face as serviceable structure', ['面板边', '小扣点', '下颌开缝', '手扶面板', '表情克制'], ['faceplate edge', 'small clasp points', 'jaw seam', 'hand on panel', 'restrained expression'], '合成脸必须可维护、可开启或可解释。', 'Synthetic face must be maintainable, openable, or explainable.', { ontologyLevel: 4 }),
      s('expression_servo_limit', '表情伺服限制', 'Expression Servo Limit', 'function', '表情有机械限制但仍有人格', 'expression has mechanical limits but retains personhood', ['微笑不完全', '眼神清醒', '嘴角停顿', '脸部静止', '人格线索'], ['incomplete smile', 'clear gaze', 'mouth-corner pause', 'still face', 'personhood cue'], '机械面部优先表现为表情节律。', 'Express mechanical face through expression rhythm.', { ontologyLevel: 1 }),
      s('factory_face_mark', '出厂面部标', 'Factory Face Mark', 'symbol', '面部小标记说明合成来源', 'small face mark explains synthetic origin', ['太阳穴编号', '下颌小字', '低对比', '无品牌', '身份冷感'], ['temple number', 'jaw tiny text', 'low contrast', 'no brand', 'cold identity'], '制造来源优先虚构编号化。', 'Fictionalize manufacturing origin as numbering.', { ontologyLevel: 1 }),
      s('porcelain_android_face', '瓷面仿生脸', 'Porcelain Android Face', 'material', '瓷面表达非人精致但保持脸部情绪', 'porcelain face expresses inhuman refinement while keeping emotion', ['瓷白皮肤', '柔反光', '细裂纹', '平静表情', '无玩偶僵硬'], ['porcelain-white skin', 'soft reflection', 'fine cracks', 'calm expression', 'no doll stiffness'], '高洁机械人优先瓷面化。', 'Translate refined android into porcelain face first.', { ontologyLevel: 4 }),
      s('jawline_mechanism', '下颌机械线', 'Jawline Mechanism', 'face', '下颌线显示机械开合而不破坏脸', 'jawline shows mechanical opening without breaking face', ['下颌缝', '小铰链', '侧脸展示', '嘴部完整', '冷金属边'], ['jaw seam', 'small hinge', 'side-face view', 'mouth intact', 'cool metal edge'], '嘴部机械化优先下颌线处理。', 'Handle mouth mechanization through jawline first.', { ontologyLevel: 3 }),
      s('human_face_priority', '人脸优先', 'Human Face Priority', 'function', '合成面部必须保留可识别人脸', 'synthetic face must retain recognizable human face', ['眼鼻嘴清楚', '面板局部', '表情可读', '无全脸头盔', '身份优先'], ['clear eyes-nose-mouth', 'local panel', 'readable expression', 'no full helmet', 'identity first'], '机械构造不得遮掉核心面部识别。', 'Mechanical construction must not erase core facial recognition.', { ontologyLevel: 1 }),
      s('uncanny_not_blank', '诡异但非空白脸', 'Uncanny Not Blank Face', 'function', '仿生诡异来自细节错位，不是无脸空白', 'bionic uncanny comes from detail dissonance, not blank facelessness', ['轻微错位', '眼神存在', '小接缝', '皮肤过净', '非空白面具'], ['slight dissonance', 'present gaze', 'small seams', 'too-clean skin', 'not blank mask'], '仿生异样必须微妙且有人格。', 'Bionic uncanniness must be subtle and personal.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'power_core',
    name: '动力核心',
    nameEn: 'Power Core',
    focus: '能源、散热、核心舱和生命驱动统摄机械身体',
    focusEn: 'energy, heat release, core chamber, and life drive governing mechanical body',
    defaultKind: 'function',
    defaultAffects: ['body', 'material', 'prop', 'symbol'],
    defaultControls: ['power_core', 'heat_release', 'energy_source'],
    items: [
      s('chest_core_window', '胸口核心窗', 'Chest Core Window', 'ontology', '胸口小窗显示动力核心但不变超级英雄灯', 'small chest window shows power core without superhero glow', ['小核心窗', '低亮光', '透明盖', '胸腔中心', '无大光束'], ['small core window', 'low glow', 'transparent cover', 'chest center', 'no big beam'], '能源核心优先小窗化。', 'Translate energy core into small window first.', { ontologyLevel: 4 }),
      s('back_battery_spine', '背部电池脊', 'Back Battery Spine', 'prop', '背部电池像脊柱附属结构', 'back battery reads as spine-attached structure', ['背部电池列', '接口线', '重量姿态', '编号', '可拆感'], ['back battery row', 'interface lines', 'weighted posture', 'numbering', 'detachable feel'], '能源装备优先背部附着化。', 'Attach energy equipment to back first.', { ontologyLevel: 3 }),
      s('heat_vent_collarbone', '锁骨散热口', 'Collarbone Heat Vent', 'function', '散热口集中在锁骨附近形成身体细节', 'heat vents concentrate near collarbone as body detail', ['锁骨散热缝', '微热光', '皮肤或壳体', '小范围', '呼吸节奏'], ['collarbone vents', 'faint heat glow', 'skin or shell', 'small range', 'breath rhythm'], '热量和生命感优先散热口化。', 'Translate heat and life feeling into vents.', { ontologyLevel: 4 }),
      s('replaceable_power_cell', '可换动力芯', 'Replaceable Power Cell', 'prop', '动力芯可拆换说明机械生命维护', 'replaceable power cell explains machine-life maintenance', ['小电芯', '透明匣', '手持备用', '腰侧槽', '维护逻辑'], ['small cell', 'clear case', 'held spare', 'waist slot', 'maintenance logic'], '动力系统必须可维护或可补给。', 'Power systems must be serviceable or refuellable.', { ontologyLevel: 2 }),
      s('low_power_indicator', '低电量指示', 'Low-Power Indicator', 'symbol', '小指示灯表达生命状态', 'small indicator light expresses life state', ['小灯点', '胸侧或腕侧', '暗红或蓝', '疲惫姿态', '无UI海洋'], ['small light dot', 'chest or wrist side', 'dim red or blue', 'tired pose', 'no UI ocean'], '状态信息优先小灯化。', 'Translate status information into small lights.', { ontologyLevel: 1 }),
      s('fuel_stain_port', '燃料污口', 'Fuel-Stain Port', 'wear', '燃料口污痕说明旧式机械生命', 'fuel-port stains explain old-style machine life', ['燃料口', '油污边', '金属盖', '腰侧位置', '工业气味'], ['fuel port', 'oil-stained edge', 'metal cap', 'waist-side placement', 'industrial smell'], '燃油机械必须有注入口和污染痕。', 'Fuel machines must have inlet and stain traces.', { ontologyLevel: 2, eras: ['industrial', 'modern', 'timeless'] }),
      s('coolant_tube_visible', '可见冷却管', 'Visible Coolant Tube', 'function', '冷却管解释高功率机械身体', 'coolant tube explains high-power mechanical body', ['透明冷却管', '蓝绿液体', '胸侧路径', '夹扣固定', '不乱缠'], ['clear coolant tube', 'blue-green fluid', 'chest-side path', 'clip fixing', 'not tangled'], '高能和散热元素优先冷却管化。', 'Translate high energy and cooling into coolant tubes.', { ontologyLevel: 3 }),
      s('clockwork_heart_case', '发条心匣', 'Clockwork Heart Case', 'ontology', '发条核心制造古典机械生命感', 'clockwork core creates classical machine-life feeling', ['发条匣', '黄铜齿轮', '胸口小窗', '手动上弦', '古典机械'], ['winding case', 'brass gears', 'small chest window', 'manual winding', 'classical machine'], '古典机械生命优先发条核心化。', 'Translate classical machine life into clockwork core.', { ontologyLevel: 4, eras: ['industrial', 'modern', 'timeless'] }),
      s('silent_core_rule', '静音核心规则', 'Silent Core Rule', 'function', '动力核心不必炫光，可通过姿态和散热暗示', 'power core need not glow loudly; posture and heat can imply it', ['低亮核心', '微热边', '稳定站姿', '少量指示', '无能量爆炸'], ['low glow core', 'warm edge', 'stable stance', 'few indicators', 'no energy burst'], '能源必须克制且服务身份。', 'Energy must be restrained and identity-serving.', { ontologyLevel: 1 }),
      s('core_not_magic_orb', '核心非魔法球', 'Core Not Magic Orb', 'function', '机械动力核心不得变成无解释魔法球', 'mechanical power core must not become unexplained magic orb', ['工程外壳', '接口线', '散热口', '维护盖', '功能来源'], ['engineered shell', 'interface line', 'vent', 'service cover', 'functional source'], '所有机械能源必须有工程来源。', 'All mechanical energy must have engineering source.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'machine_life_sign',
    name: '机械生命迹象',
    nameEn: 'Machine-Life Signs',
    focus: '机械身体中的人格、生命迹象和非人情绪统摄角色',
    focusEn: 'personhood, life signs, and nonhuman emotion inside mechanical body governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['face', 'pose', 'symbol', 'body'],
    defaultControls: ['machine_life_sign', 'personhood', 'nonhuman_emotion'],
    items: [
      s('machine_breath_pause', '机械呼吸停顿', 'Machine Breath Pause', 'pose', '机械生命通过停顿式呼吸感出现', 'machine life appears through paused breathing rhythm', ['胸口微停', '肩部不动', '目光稳定', '轻微散热', '安静生命'], ['tiny chest pause', 'still shoulders', 'stable gaze', 'slight venting', 'quiet life'], '机械生命感优先节律化。', 'Rhythmize machine-life feeling first.', { ontologyLevel: 1 }),
      s('repair_as_self_care', '维修即自我照料', 'Repair as Self-Care', 'pose', '维修动作像照顾身体而非修机器', 'repair gesture reads as caring for body, not fixing object', ['手扶接口', '低头检查', '温柔动作', '工具小', '人格存在'], ['hand on port', 'looking down', 'gentle action', 'small tool', 'personhood present'], '机械身份必须有人格照料线索。', 'Mechanical identity must have self-care cues.', { ontologyLevel: 1 }),
      s('serial_number_with_name', '编号与名字并存', 'Serial Number with Name', 'symbol', '编号旁边保留名字或个人痕迹', 'name or personal trace remains beside serial number', ['编号', '手写名', '小贴纸', '胸臂位置', '人格抵抗'], ['serial number', 'handwritten name', 'small sticker', 'chest-arm placement', 'personhood resistance'], '机器管理和人格必须同时出现。', 'Machine management and personhood must appear together.', { ontologyLevel: 1 }),
      s('synthetic_tears', '合成泪痕', 'Synthetic Tears', 'material', '泪痕像冷凝液但表达情绪', 'tear trace reads as condensation yet expresses emotion', ['透明泪痕', '冷凝感', '脸部完整', '低光', '克制悲伤'], ['clear tear trace', 'condensation feel', 'whole face', 'low light', 'restrained sadness'], '机械情绪优先材料化为冷凝痕。', 'Materialize machine emotion as condensation trace.', { ontologyLevel: 2 }),
      s('memory_plate_token', '记忆铭牌', 'Memory Plate Token', 'prop', '小铭牌承载机械生命记忆', 'small plate carries machine-life memory', ['铭牌', '旧刻字', '手中物', '磨损边', '个人历史'], ['nameplate', 'old engraving', 'handheld object', 'worn edge', 'personal history'], '过去和身份优先铭牌化。', 'Translate past and identity into nameplate.', { ontologyLevel: 1 }),
      s('nonhuman_sleep_mode', '非人睡眠模式', 'Nonhuman Sleep Mode', 'pose', '休眠姿态说明机器也有脆弱状态', 'sleep-mode pose shows machine also has vulnerability', ['闭眼或暗眼', '坐姿休眠', '线缆收束', '手放膝上', '低电量'], ['closed or dim eyes', 'seated sleep mode', 'cables gathered', 'hands on knees', 'low power'], '机械生命必须有脆弱状态。', 'Machine life must have vulnerable states.', { ontologyLevel: 1 }),
      s('handmade_repair_charm', '手作维修护符', 'Handmade Repair Charm', 'prop', '手作小物让机器拥有被爱过的痕迹', 'handmade item gives machine trace of being cared for', ['小护符', '绑在接口', '手写标记', '旧绳', '温柔反差'], ['small charm', 'tied to port', 'handwritten mark', 'old string', 'gentle contrast'], '机械冷感优先加入个人照料证据。', 'Add personal care evidence to mechanical coldness.', { ontologyLevel: 1 }),
      s('machine_gaze_not_blank', '机器眼神非空白', 'Machine Gaze Not Blank', 'face', '机器眼神必须有方向和人格线索', 'machine gaze must have direction and personhood cue', ['凝视方向', '眼部高光', '微表情', '非空洞', '身份情绪'], ['gaze direction', 'eye highlight', 'micro-expression', 'not empty', 'identity emotion'], '合成脸不得变成无人格空壳。', 'Synthetic face must not become empty shell.', { ontologyLevel: 1 }),
      s('routine_task_body', '例行任务身体', 'Routine-Task Body', 'function', '身体磨损说明日常任务和职责', 'body wear explains daily tasks and duty', ['固定磨损点', '工具位', '动作习惯', '重复任务', '工作人格'], ['fixed wear points', 'tool slots', 'habitual motion', 'repeated task', 'work personhood'], '机械生命优先通过职责显形。', 'Reveal machine life through duty first.', { ontologyLevel: 1 }),
      s('machine_life_not_prop', '机械生命非道具', 'Machine Life Not Prop', 'function', '机械构造必须服务主体人格，不只是酷零件', 'mechanical construction must serve subject personhood, not just cool parts', ['人格优先', '动作习惯', '维护痕迹', '情绪线索', '零件从属'], ['personhood first', 'habitual action', 'maintenance trace', 'emotion cue', 'parts subordinate'], '所有机械元素必须回答这个生命如何生活。', 'Every mechanical element must answer how this life lives.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'machine_rule',
    name: '机械裁决',
    nameEn: 'Mechanical Judgment',
    focus: '机械构造的边界、裁决和降级转译规则统摄角色',
    focusEn: 'boundaries, judgment, and downgrade-translation rules of mechanical construction governing character',
    defaultKind: 'function',
    defaultAffects: ['body', 'technology', 'costume', 'symbol'],
    defaultControls: ['mechanical_rule', 'conflict_judgment', 'translation_lock'],
    items: [
      s('tech_device_vs_body', '装置身体分界', 'Device-Body Boundary', 'function', '外部技术装置和身体机械构造必须分清', 'external device and mechanical body construction must be separated', ['接口分界', '外置设备', '身体结构', '连接点', '层级清楚'], ['interface boundary', 'external device', 'body structure', 'connection point', 'clear hierarchy'], '若只是设备，留在外部；若是生命结构，必须有身体接口。', 'If it is device, keep it external; if life structure, give body interface.', { ontologyLevel: 1 }),
      s('one_mechanical_focus', '单一机械焦点', 'One Mechanical Focus', 'function', '一次生成只允许一个主机械焦点', 'one generation allows one main mechanical focus', ['单焦点', '其余克制', '身份优先', '无全身乱改', '结构清楚'], ['single focus', 'others restrained', 'identity first', 'no full-body random alteration', 'clear structure'], '随机机械元素必须收束到一个主通道。', 'Random mechanical elements must converge into one main channel.', { ontologyLevel: 1 }),
      s('mechanics_obey_world_law', '机械服从世界法则', 'Mechanics Obey World Law', 'function', '机械程度必须服从时空和本体等级', 'mechanical degree must obey time-space and ontology level', ['时代工艺', '材料来源', '可解释技术', '等级匹配', '无错位奇观'], ['period craft', 'material source', 'explainable tech', 'level match', 'no dissonant spectacle'], '不支持高科技时，机械元素折译为支具、机关、假肢或工艺。', 'When high tech is unsupported, translate mechanics into brace, mechanism, prosthesis, or craft.', { ontologyLevel: 1 }),
      s('face_preservation_rule', '脸部保留规则', 'Face Preservation Rule', 'function', '机械构造不得遮蔽核心脸部识别', 'mechanical construction must not hide core facial recognition', ['脸部开放', '眼神清楚', '面板局部', '无全罩头盔', '人格优先'], ['open face', 'clear gaze', 'local panel', 'no full helmet', 'personhood first'], '面部机械化必须保留眼神、表情或名字线索。', 'Facial mechanics must preserve gaze, expression, or name cue.', { ontologyLevel: 1 }),
      s('joint_function_rule', '关节功能规则', 'Joint Function Rule', 'function', '每个机械关节必须说明运动理由', 'every mechanical joint must explain motion reason', ['转轴', '限位', '承重', '活动方向', '无装饰关节'], ['pivot', 'limit', 'load', 'motion direction', 'no decorative joint'], '没有运动理由的机械关节删除或转成装饰缝。', 'Remove joints without motion reason or turn them into decorative seams.', { ontologyLevel: 1 }),
      s('maintenance_requirement', '维护必需', 'Maintenance Requirement', 'function', '机械生命必须有维护、损耗或替换证据', 'machine life must show maintenance, wear, or replacement evidence', ['维护点', '磨损', '备用件', '检修标签', '使用历史'], ['service point', 'wear', 'spare part', 'service label', 'use history'], '所有机械构造都要留下被使用过的证据。', 'All mechanical construction must leave evidence of use.', { ontologyLevel: 1 }),
      s('mechanical_not_cyber_city', '机械非赛博城', 'Mechanical Not Cyber City', 'function', '机械构造不自动生成赛博朋克城市风格', 'mechanical construction does not auto-generate cyberpunk city style', ['身体结构', '少量冷光', '无霓虹背景', '无城市抢戏', '角色优先'], ['body structure', 'few cool lights', 'no neon background', 'no city stealing focus', 'character first'], '机械构造只处理身体和生命结构。', 'Mechanical construction only handles body and life structure.', { ontologyLevel: 1 }),
      s('material_source_rule', '材料来源规则', 'Material Source Rule', 'function', '金属、陶瓷、橡胶和线缆必须有来源气质', 'metal, ceramic, rubber, and cable must have source logic', ['材料统一', '工艺来源', '表面处理', '维护痕迹', '无随机材质'], ['material unity', 'craft source', 'surface finish', 'maintenance trace', 'no random material'], '材料不明时优先使用低反光金属和维护缝。', 'When material is unclear, prefer low-reflection metal and service seams.', { ontologyLevel: 1 }),
      s('mechanical_absorbs_conflict', '机械吸收冲突', 'Mechanical Absorbs Conflict', 'function', '外来元素优先被转译为结构、接口、维护或动力', 'foreign elements translate into structure, interface, maintenance, or power', ['结构转译', '接口转译', '维护转译', '动力转译', '无贴图拼贴'], ['structure translation', 'interface translation', 'maintenance translation', 'power translation', 'no sticker collage'], '神话、生物或废土元素进入机械时，先变成材料或功能部件。', 'When mythic, organic, or wasteland elements enter mechanics, turn them into material or functional parts first.', { ontologyLevel: 1 }),
      s('machine_body_clarity', '机械身体清晰', 'Machine Body Clarity', 'function', '最终机械身体必须一眼看出头、躯干、关节和功能', 'final mechanical body must clearly show head, torso, joints, and function', ['头身清楚', '关节清楚', '功能清楚', '维护清楚', '身份清楚'], ['clear head-body', 'clear joints', 'clear function', 'clear maintenance', 'clear identity'], '所有机械构造以可读性为最高优先级。', 'Readability is the highest priority for all mechanical construction.', { ontologyLevel: 1 })
    ]
  }
];

export const MECHANICAL_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
