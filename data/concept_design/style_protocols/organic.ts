import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'ORGANIC';
const ROUTE_NAME = '生物有机';
const ROUTE_NAME_EN = 'Biomorphic Organic';
const ERAS = ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const FORBIDS = ['无功能怪物化', '随机触手堆叠', '纯机械解释', '血腥猎奇主导', '身体结构不可读', '生物特征不服务身份'];

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
    slug: 'bone_shell',
    name: '骨壳外覆',
    nameEn: 'Bone-Shell Covering',
    focus: '骨、壳、角质硬层和保护性外覆组织统摄角色',
    focusEn: 'bone, shell, keratin hard layers, and protective coverings governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'silhouette', 'material', 'costume'],
    defaultControls: ['bone_shell', 'protective_layer', 'hard_biology'],
    items: [
      s('ivory_rib_carapace', '象牙肋壳', 'Ivory Rib Carapace', 'ontology', '肋骨式外壳作为胸腔保护和身份轮廓', 'rib-like shell as chest protection and identity silhouette', ['肋骨弧线', '象牙色', '胸腔外覆', '清楚间隙', '人体比例'], ['rib arcs', 'ivory tone', 'chest covering', 'clear gaps', 'human proportion'], '盔甲和礼服元素优先转成胸腔肋壳。', 'Translate armor and formalwear into rib-cage carapace.', { ontologyLevel: 4, risk: 'high' }),
      s('shoulder_blade_shell', '肩胛壳片', 'Shoulder-Blade Shell', 'structure', '肩胛处的壳片决定上身方向和警戒感', 'scapular shell plates determining upper-body direction and alertness', ['肩胛壳', '斜向片层', '背部轮廓', '骨白边', '收紧站姿'], ['scapular shell', 'diagonal plates', 'back silhouette', 'bone-white edge', 'tight stance'], '外来硬质元素集中到肩胛壳片，不扩散全身。', 'Concentrate hard elements into scapular plates, not the whole body.', { ontologyLevel: 4, risk: 'high' }),
      s('jaw_bone_mask', '颌骨面具', 'Jaw-Bone Mask', 'face', '下颌骨感面具替代直接面部异形', 'jawbone-like mask replacing direct facial mutation', ['下颌骨线', '可摘面具', '牙白材质', '嘴部留白', '侧脸硬边'], ['jawbone line', 'removable mask', 'tooth-white material', 'mouth negative space', 'hard side-face edge'], '面部怪物化优先降级为可摘颌骨面具。', 'Downgrade facial monstrosity into removable jawbone mask.', { ontologyLevel: 3, risk: 'medium' }),
      s('vertebrae_back_chain', '椎骨背链', 'Vertebrae Back Chain', 'symbol', '椎骨形态作为背部装饰链而非真实脊柱变形', 'vertebrae form as back ornament chain, not real spine deformation', ['椎骨链', '背部中心线', '骨节重复', '服装固定点', '克制阴影'], ['vertebrae chain', 'back centerline', 'repeated bone joints', 'garment anchors', 'restrained shadow'], '脊柱异化必须先转成背部饰链。', 'Translate spine mutation into back ornament chain first.', { ontologyLevel: 3, risk: 'medium' }),
      s('shell_collar_guard', '壳质护领', 'Shell Collar Guard', 'costume', '壳质领口保护喉部并建立非人身份边界', 'shell collar protecting throat and setting nonhuman boundary', ['高护领', '壳质边', '喉部阴影', '片层开合', '头部凸显'], ['high guard collar', 'shell edge', 'throat shadow', 'opening layers', 'emphasized head'], '仪式、贵族和生物元素优先合并为护领。', 'Merge ritual, aristocratic, and organic elements into a guard collar.', { ontologyLevel: 3, risk: 'medium' }),
      s('kneecap_plate_logic', '膝盖甲片逻辑', 'Kneecap Plate Logic', 'function', '膝部甲片说明跪行、跳跃或防御功能', 'knee plates explaining kneeling, jumping, or defense function', ['膝盖壳片', '磨损边', '弯曲缝', '低位姿态', '功能划痕'], ['kneecap plate', 'worn edge', 'bend seam', 'low posture', 'functional scratches'], '运动和战斗元素优先落在膝部功能甲片。', 'Place motion and combat into functional knee plates.', { ontologyLevel: 3 }),
      s('finger_bone_caps', '指骨帽', 'Finger-Bone Caps', 'prop', '指端骨帽让手部成为生物工具', 'bone caps at fingertips making hands into biological tools', ['指端骨帽', '短爪暗示', '手势清楚', '骨白小点', '无血腥'], ['finger bone caps', 'short claw hint', 'clear gesture', 'small bone-white points', 'no gore'], '爪和工具元素优先变成指端骨帽。', 'Translate claws and tools into fingertip bone caps.', { ontologyLevel: 3, risk: 'medium' }),
      s('shell_skirt_plates', '壳片裙甲', 'Shell-Plate Skirt', 'costume', '下摆壳片将服装和外骨骼调和', 'hem shell plates reconcile garment and exoskeleton', ['壳片下摆', '片层节奏', '硬软对比', '行走开缝', '骨色边缘'], ['shell hem plates', 'layer rhythm', 'hard-soft contrast', 'walking slits', 'bone edge'], '裙装和护甲冲突优先转为壳片裙甲。', 'Translate skirt-armor conflict into shell-plate skirt.', { ontologyLevel: 3 }),
      s('cracked_bone_repair', '骨裂修补', 'Cracked-Bone Repair', 'wear', '骨壳裂纹和修补痕说明使用历史', 'bone-shell cracks and repairs showing use history', ['细裂纹', '树脂填缝', '旧修补', '不对称裂线', '低亮面'], ['fine cracks', 'resin fill', 'old repair', 'asymmetric crack line', 'low sheen'], '损耗元素必须成为可解释的骨壳修补。', 'Make wear into explainable bone-shell repair.', { ontologyLevel: 3, risk: 'medium' }),
      s('bone_not_horror', '骨壳非恐怖', 'Bone Not Horror', 'symbol', '骨质元素作为结构和身份，不制造恐怖效果', 'bone elements as structure and identity, not horror effect', ['干净骨色', '无血肉', '结构清楚', '克制表情', '设计板可读'], ['clean bone tone', 'no gore', 'clear structure', 'restrained expression', 'readable design board'], '所有骨、牙、壳元素必须设计化、无血腥、功能清楚。', 'Keep all bone, tooth, and shell elements designed, bloodless, and functional.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'membrane_layer',
    name: '膜状层',
    nameEn: 'Membrane Layer',
    focus: '薄膜、半透明皮层、湿润边界和呼吸性包覆统摄角色',
    focusEn: 'membranes, translucent skin layers, wet boundaries, and breathing coverings governing character',
    defaultKind: 'material',
    defaultAffects: ['body', 'material', 'costume', 'face'],
    defaultControls: ['membrane_layer', 'translucent_boundary', 'breathing_surface'],
    items: [
      s('translucent_throat_membrane', '半透明喉膜', 'Translucent Throat Membrane', 'ontology', '喉部薄膜暗示呼吸差异但保持脸部可读', 'throat membrane hinting respiratory difference while keeping face readable', ['喉部薄膜', '浅色血管', '轻微湿光', '脖颈留白', '平静头势'], ['throat membrane', 'pale vessels', 'slight wet shine', 'neck negative space', 'calm head angle'], '呼吸和声音元素优先落在喉部薄膜。', 'Place breathing and voice elements onto throat membrane.', { ontologyLevel: 4, risk: 'high' }),
      s('eyelid_film_gloss', '眼睑膜光', 'Eyelid Film Gloss', 'face', '眼部以薄膜光泽表现非人感，不直接变成怪眼', 'eye area showing nonhuman quality through film gloss, not monster eyes', ['眼睑湿光', '半透明眼角', '柔软反光', '瞳孔清楚', '微闭眼'], ['eyelid wet shine', 'translucent eye corner', 'soft reflection', 'clear pupil', 'half-closed eye'], '眼部异变优先降级为眼睑膜光。', 'Downgrade eye mutation into eyelid film gloss.', { ontologyLevel: 3, risk: 'medium' }),
      s('webbed_finger_hint', '指间蹼暗示', 'Webbed-Finger Hint', 'ontology', '指间轻微蹼状结构控制水生感尺度', 'slight webbing between fingers controlling aquatic scale', ['指间薄膜', '张手姿态', '浅透明边', '手部特写', '无夸张爪'], ['finger webbing', 'open-hand pose', 'pale translucent edge', 'hand close-up', 'no exaggerated claws'], '水生和异种元素先压缩到指间蹼。', 'Compress aquatic and alien elements into finger webbing first.', { ontologyLevel: 4, risk: 'high' }),
      s('breathing_cape_membrane', '呼吸披膜', 'Breathing Membrane Cape', 'costume', '披风像活膜一样有轻微张力和呼吸感', 'cape behaving like living membrane with slight tension and breath', ['膜状披风', '张力边', '半透明下摆', '肩部附着', '微卷边'], ['membrane cape', 'tension edge', 'translucent hem', 'shoulder attachment', 'slight curling edge'], '披风和生物组织优先合并成呼吸披膜。', 'Merge cape and tissue into breathing membrane cape.', { ontologyLevel: 3, risk: 'medium' }),
      s('amniotic_surface_sheen', '羊膜表面光', 'Amniotic Surface Sheen', 'material', '表面光泽带有新生、包裹和脆弱感', 'surface sheen carrying birth, enclosure, and vulnerability', ['柔湿光', '粉白半透', '轻微皱褶', '干净背景', '脆弱姿态'], ['soft wet sheen', 'pink-white translucency', 'slight wrinkles', 'clean background', 'vulnerable pose'], '柔弱和新生元素优先转为羊膜表面光。', 'Translate fragility and rebirth into amniotic surface sheen.', { ontologyLevel: 3, risk: 'medium' }),
      s('gill_slit_membrane', '鳃裂膜边', 'Gill-Slit Membrane Edge', 'ontology', '鳃裂只以局部膜边出现，避免全身鱼化', 'gill slits appear only as local membrane edges, avoiding full fish transformation', ['颈侧鳃线', '薄膜边', '湿润阴影', '小范围', '侧脸展示'], ['neck-side gill lines', 'membrane edge', 'wet shadow', 'small range', 'side-face display'], '水生呼吸必须局部化在颈侧膜边。', 'Localize aquatic breathing to neck-side membrane edges.', { ontologyLevel: 4, risk: 'high' }),
      s('membrane_seam_garment', '膜缝衣物', 'Membrane-Seam Garment', 'costume', '衣缝像生物膜边界一样闭合和拉伸', 'garment seams closing and stretching like biological membrane boundaries', ['弹性缝', '半透明接缝', '衣物贴合', '皮肤距离', '干净线'], ['elastic seam', 'translucent seam', 'fitted garment', 'skin distance', 'clean line'], '服装和皮肤融合倾向优先转为膜缝衣物。', 'Translate garment-skin fusion into membrane-seam garment.', { ontologyLevel: 2, risk: 'medium' }),
      s('dew_edge_detail', '露水边缘细节', 'Dew-Edge Detail', 'material', '边缘水珠使生物感轻量而不恶心', 'dew on edges making organic feel light, not disgusting', ['小水珠', '边缘高光', '干净湿度', '微距细节', '低饱和'], ['tiny dew', 'edge highlight', 'clean humidity', 'macro detail', 'low saturation'], '潮湿元素必须克制、清洁、边缘化。', 'Keep wetness restrained, clean, and edge-based.', { ontologyLevel: 2 }),
      s('shed_skin_layer', '蜕皮薄层', 'Shed-Skin Layer', 'wear', '脱落薄层表达生长阶段和时间', 'shedding thin layer expressing growth stage and time', ['半脱薄皮', '衣领边缘', '新旧质感', '手指剥离', '不血腥'], ['half-shed film', 'collar edge', 'new-old texture', 'finger peeling', 'no gore'], '成长和损耗优先成为无血蜕皮层。', 'Translate growth and wear into bloodless shedding layer.', { ontologyLevel: 4, risk: 'high' }),
      s('membrane_not_slime', '膜感非黏液', 'Membrane Not Slime', 'symbol', '膜状生物感必须清洁、可读、结构明确', 'membrane organic feel must be clean, readable, and structurally clear', ['薄膜', '清洁湿光', '结构边界', '少量透明', '人体可读'], ['membrane', 'clean wet shine', 'structural boundary', 'limited transparency', 'human readability'], '所有黏液倾向优先转译为清洁薄膜和边界。', 'Translate all slime tendencies into clean membranes and boundaries.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'mycelium_spore',
    name: '菌丝孢子',
    nameEn: 'Mycelium and Spores',
    focus: '菌丝网络、孢子、腐殖质和生态连接统摄角色',
    focusEn: 'mycelium networks, spores, humus, and ecological connection governing character',
    defaultKind: 'material',
    defaultAffects: ['body', 'material', 'symbol', 'costume'],
    defaultControls: ['mycelium_spore', 'ecological_network', 'fungal_growth'],
    items: [
      s('white_mycelium_lace', '白菌丝蕾丝', 'White Mycelium Lace', 'material', '菌丝像蕾丝一样组织衣物边界', 'mycelium organizing garment edges like lace', ['白色细丝', '蕾丝边', '肩颈扩散', '干净菌网', '柔软阴影'], ['white filaments', 'lace edge', 'shoulder-neck spread', 'clean fungal web', 'soft shadow'], '华丽和腐殖元素优先调和为菌丝蕾丝。', 'Reconcile ornate and decay elements as mycelium lace.', { ontologyLevel: 3, risk: 'medium' }),
      s('spore_pouch_belt', '孢子囊腰带', 'Spore-Pouch Belt', 'prop', '孢子囊成为可携带生态道具', 'spore pouches becoming portable ecological props', ['小囊袋', '腰带悬挂', '粉尘暗示', '植物纤维', '谨慎手势'], ['small pouches', 'belt hang', 'dust hint', 'plant fiber', 'careful gesture'], '道具和生态元素优先成为孢子囊携具。', 'Translate props and ecology into spore-pouch gear.', { ontologyLevel: 3, risk: 'medium' }),
      s('fungal_crown_ring', '菌冠环', 'Fungal Crown Ring', 'symbol', '菌盖环像冠冕但属于生态身份', 'mushroom cap ring reading as crown but ecological identity', ['菌盖环', '头顶轮廓', '浅褐色', '不规则边', '平静脸'], ['cap ring', 'head silhouette', 'pale brown', 'irregular edge', 'calm face'], '贵族和神圣元素优先生态冠冕化。', 'Make aristocratic and sacred elements into ecological crowns.', { ontologyLevel: 4, risk: 'high' }),
      s('moss_humus_hem', '苔腐下摆', 'Moss-Humus Hem', 'wear', '下摆聚集苔藓和腐殖质说明行走环境', 'hem gathering moss and humus to show traveled environment', ['苔藓边', '腐殖土色', '潮湿下摆', '旧布', '地面接触'], ['moss edge', 'humus tone', 'damp hem', 'old cloth', 'ground contact'], '环境信息优先落在下摆生态痕迹。', 'Place environment information into ecological hem traces.', { ontologyLevel: 2 }),
      s('spore_breath_veil', '孢子呼吸面纱', 'Spore-Breath Veil', 'costume', '面纱控制孢子感并保护脸部识别', 'veil controlling spore feeling and protecting facial identity', ['薄面纱', '粉雾点', '鼻梁可见', '口鼻遮挡', '柔灰色'], ['thin veil', 'powder mist dots', 'visible nose bridge', 'mouth-nose cover', 'soft gray'], '感染和神秘元素优先转成孢子面纱。', 'Translate infection and mystery into spore veil.', { ontologyLevel: 3, risk: 'medium' }),
      s('root_fungal_boots', '根菌靴', 'Root-Fungal Boots', 'costume', '脚部像与土地和菌网相连', 'feet reading as connected to soil and fungal web', ['靴底根丝', '泥土边', '低重心', '厚底', '微生长'], ['root threads on sole', 'soil edge', 'low center', 'thick sole', 'slight growth'], '旅行和生态元素优先转成脚部菌根。', 'Translate travel and ecology into foot mycorrhiza.', { ontologyLevel: 3 }),
      s('lichen_skin_patch', '地衣皮肤斑', 'Lichen Skin Patch', 'ontology', '地衣式斑块只局部出现，保持身体完整', 'lichen patches appearing locally while keeping body whole', ['浅绿斑', '粗糙边', '局部皮肤', '锁骨或手背', '无腐烂'], ['pale green patch', 'rough edge', 'local skin', 'collarbone or back hand', 'no rot'], '皮肤生态化必须局部、无恶心、可控。', 'Keep skin ecology local, non-disgusting, and controlled.', { ontologyLevel: 4, risk: 'high' }),
      s('fungal_archive_labels', '菌类标本标签', 'Fungal Specimen Labels', 'symbol', '科学标本标签把奇异生态变成可读系统', 'scientific specimen labels making strange ecology readable', ['手写标签', '细绳', '拉丁感编号', '小纸片', '标本姿态'], ['handwritten labels', 'thin strings', 'Latin-like numbering', 'small paper tags', 'specimen posture'], '知识和生态元素优先标本化。', 'Translate knowledge and ecology into specimen labeling.', { ontologyLevel: 2 }),
      s('fruiting_body_shoulder', '子实体肩部', 'Fruiting-Body Shoulder', 'ontology', '肩部小型子实体建立轮廓但不失控', 'small fruiting bodies on shoulders shaping silhouette without losing control', ['小菌盖', '肩部聚集', '不对称', '柔软边', '衣物依附'], ['small caps', 'shoulder cluster', 'asymmetry', 'soft edge', 'garment attachment'], '生长元素优先限制在肩部轮廓。', 'Limit growth elements to shoulder silhouette.', { ontologyLevel: 4, risk: 'high' }),
      s('fungal_not_infection_horror', '真菌非感染恐怖', 'Fungal Not Infection Horror', 'symbol', '真菌协议强调生态共生而非腐烂恐怖', 'fungal protocol emphasizes ecological symbiosis rather than decay horror', ['共生痕迹', '无脓液', '清楚边界', '自然色', '平静表情'], ['symbiotic traces', 'no pus', 'clear boundary', 'natural color', 'calm expression'], '感染倾向必须转成共生、标本或生态身份。', 'Translate infection tendencies into symbiosis, specimen logic, or ecological identity.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'insect_chitin',
    name: '昆虫甲壳',
    nameEn: 'Insect Chitin',
    focus: '节肢分段、甲片、复眼暗示和昆虫功能逻辑统摄角色',
    focusEn: 'arthropod segmentation, plates, compound-eye hints, and insect function logic governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'silhouette', 'material', 'face'],
    defaultControls: ['insect_chitin', 'segmented_body', 'functional_exoskeleton'],
    items: [
      s('segmented_waist_armor', '分节腰甲', 'Segmented-Waist Armor', 'costume', '腰部像节肢一样分段活动', 'waist moving in arthropod-like segments', ['腰部分节', '重叠甲片', '活动缝', '窄腰轮廓', '硬亮边'], ['waist segments', 'overlapping plates', 'motion seams', 'narrow waist silhouette', 'hard glossy edge'], '束腰和甲壳优先合并为分节腰甲。', 'Merge corsetry and chitin into segmented waist armor.', { ontologyLevel: 3 }),
      s('compound_eye_visor', '复眼目镜', 'Compound-Eye Visor', 'face', '复眼感通过目镜网格表达，不直接改造眼球', 'compound-eye feeling expressed through visor grid, not eyeball mutation', ['小网格目镜', '多点高光', '眼睛可见', '昆虫暗示', '冷静脸'], ['small grid visor', 'multi-point highlights', 'visible eyes', 'insect hint', 'calm face'], '复眼异变优先转译为复眼目镜。', 'Translate compound-eye mutation into compound visor.', { ontologyLevel: 3, risk: 'medium' }),
      s('elytra_back_panels', '鞘翅背板', 'Elytra Back Panels', 'structure', '背部鞘翅板建立保护性轮廓', 'elytra back panels establishing protective silhouette', ['背部硬板', '中线开缝', '甲虫光泽', '肩背扩大', '静止姿态'], ['back hard panels', 'center seam', 'beetle sheen', 'expanded shoulder-back', 'still pose'], '披风和背甲冲突优先转成鞘翅背板。', 'Translate cape-back armor conflict into elytra panels.', { ontologyLevel: 4, risk: 'high' }),
      s('antenna_hairpins', '触角发簪', 'Antenna Hairpins', 'prop', '触角感以发簪表达，避免直接长触角', 'antenna feeling expressed as hairpins, avoiding direct antenna growth', ['细长发簪', '双侧对称', '轻微弯曲', '发髻固定', '昆虫暗示'], ['slender hairpins', 'bilateral symmetry', 'slight curve', 'bun fixing', 'insect hint'], '触角元素先装饰化为发簪或头饰。', 'Ornamentalize antenna elements into hairpins or headpieces first.', { ontologyLevel: 2 }),
      s('chitin_glove_claws', '甲质手套爪', 'Chitin Glove Claws', 'costume', '爪感来自手套外壳和指端延长', 'claw feeling from glove shell and fingertip extension', ['硬壳手套', '指端延长', '节状指背', '黑褐光泽', '手势清楚'], ['hard-shell gloves', 'extended fingertips', 'segmented knuckles', 'black-brown sheen', 'clear gesture'], '爪和战斗元素优先手套化。', 'Translate claw and combat elements into gloves.', { ontologyLevel: 3, risk: 'medium' }),
      s('molt_edge_clothing', '蜕壳边衣物', 'Molt-Edge Clothing', 'wear', '衣物边缘像旧壳脱落一样形成时间痕迹', 'garment edges forming time traces like old shell shedding', ['脱壳边', '薄片卷起', '旧壳色', '边缘磨损', '层次清楚'], ['molt edge', 'curling flakes', 'old shell tone', 'edge wear', 'clear layers'], '损耗和成长优先成为蜕壳边。', 'Translate wear and growth into molt edges.', { ontologyLevel: 3 }),
      s('mandible_collar_shape', '颚式领形', 'Mandible-Collar Shape', 'costume', '领口模拟昆虫颚部张力但不改造嘴', 'collar mimicking mandible tension without changing mouth', ['颚形领口', '两侧尖角', '下颌留白', '硬质面料', '正面压迫'], ['mandible collar', 'side points', 'jaw negative space', 'hard fabric', 'frontal pressure'], '嘴部异化优先降级为颚式领形。', 'Downgrade mouth mutation into mandible collar shape.', { ontologyLevel: 2, risk: 'medium' }),
      s('wing_case_skirt', '翅鞘裙摆', 'Wing-Case Skirt', 'costume', '裙摆像收拢翅鞘一样保护下身', 'skirt protecting lower body like folded wing cases', ['硬挺裙摆', '中线闭合', '甲片层', '窄步姿态', '暗色反光'], ['stiff skirt', 'center closure', 'plate layers', 'narrow-step pose', 'dark reflection'], '飞行和裙装元素优先转成翅鞘裙摆。', 'Translate flight and skirt elements into wing-case skirt.', { ontologyLevel: 3 }),
      s('joint_node_marks', '关节点标记', 'Joint-Node Marks', 'symbol', '关节处的小标记说明节肢运动逻辑', 'small marks at joints explaining arthropod movement logic', ['肘膝节点', '小圆标记', '折线姿态', '节段重复', '清晰动作'], ['elbow-knee nodes', 'small round marks', 'angular pose', 'segment repetition', 'clear motion'], '动作和异形结构优先落在关节点标记。', 'Place motion and abnormal structure into joint-node marks.', { ontologyLevel: 3 }),
      s('insect_not_random_bug', '昆虫非随机虫化', 'Insect Not Random Bug', 'symbol', '昆虫协议只保留分节、保护、感知和运动逻辑', 'insect protocol keeps only segmentation, protection, sensing, and motion logic', ['分节结构', '功能甲片', '少量触角暗示', '无虫群堆叠', '人体可读'], ['segmented structure', 'functional plates', 'limited antenna hint', 'no swarm clutter', 'human readability'], '虫化倾向必须先进入功能分节和装备逻辑。', 'Put insectification tendencies into functional segmentation and equipment logic first.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'plant_graft',
    name: '植物嫁接',
    nameEn: 'Plant Graft',
    focus: '根、藤、叶脉、木质化和季节生长统摄角色',
    focusEn: 'roots, vines, leaf veins, lignification, and seasonal growth governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'costume', 'material', 'symbol'],
    defaultControls: ['plant_graft', 'growth_direction', 'seasonal_body'],
    items: [
      s('root_ankle_binding', '根系踝缚', 'Root-Ankle Binding', 'costume', '脚踝根系说明角色与土地的连接', 'ankle roots showing the character connection to land', ['脚踝根线', '土色绑带', '低重心', '裸露脚踝', '行走痕'], ['ankle root lines', 'earth-tone bindings', 'low center', 'exposed ankle', 'walking trace'], '土地和旅行元素优先落在脚踝根系。', 'Place land and travel elements onto ankle roots.', { ontologyLevel: 3 }),
      s('vine_sleeve_growth', '藤蔓袖生长', 'Vine-Sleeve Growth', 'costume', '袖子像藤蔓攀附手臂但保持衣物边界', 'sleeve climbing the arm like vine while keeping garment boundary', ['藤蔓袖', '手臂缠绕', '叶点', '衣物缝合', '手部露出'], ['vine sleeve', 'arm wrapping', 'leaf dots', 'garment stitching', 'visible hand'], '缠绕元素优先服装化为藤蔓袖。', 'Garment-translate wrapping elements into vine sleeves.', { ontologyLevel: 3 }),
      s('leaf_vein_face_paint', '叶脉脸纹', 'Leaf-Vein Face Paint', 'face', '叶脉以妆纹出现，避免皮肤植物化过度', 'leaf veins appearing as makeup lines, avoiding over-plant skin mutation', ['叶脉纹', '颧骨线', '浅绿色', '脸部可读', '对称或偏侧'], ['leaf-vein pattern', 'cheekbone line', 'pale green', 'readable face', 'symmetric or side-biased'], '面部植物化优先转成叶脉妆纹。', 'Translate facial plantification into leaf-vein makeup.', { ontologyLevel: 2, risk: 'medium' }),
      s('bark_shin_guard', '树皮胫甲', 'Bark Shin Guard', 'costume', '腿部树皮质感作为护具而非皮肤病变', 'bark texture on legs as guards, not skin pathology', ['树皮护胫', '纵向纹理', '膝下固定', '干裂边', '走路姿态'], ['bark shin guards', 'vertical texture', 'below-knee fixing', 'dry cracked edge', 'walking pose'], '木质化优先装备化为护胫。', 'Translate lignification into shin guards.', { ontologyLevel: 3 }),
      s('flowering_collar_limit', '开花领口限制', 'Flowering-Collar Limit', 'symbol', '花只在领口少量开放，作为生命阶段标志', 'flowers bloom only at collar as life-stage sign', ['领口小花', '少量开放', '花粉点', '脖颈留白', '静态姿态'], ['small collar flowers', 'limited bloom', 'pollen dots', 'neck negative space', 'still pose'], '花元素必须局部、季节化、符号化。', 'Keep flower elements local, seasonal, and symbolic.', { ontologyLevel: 3 }),
      s('seed_pod_brooch', '种荚胸针', 'Seed-Pod Brooch', 'prop', '种荚作为携带未来生命的胸针', 'seed pod as brooch carrying future life', ['种荚胸针', '心口位置', '干植物色', '小裂口', '手指触碰'], ['seed-pod brooch', 'heart placement', 'dry plant tone', 'small split', 'finger touch'], '繁殖和希望元素优先压缩为种荚胸针。', 'Compress reproduction and hope elements into seed-pod brooch.', { ontologyLevel: 2 }),
      s('thorn_hem_warning', '荆棘下摆警戒', 'Thorn-Hem Warning', 'costume', '下摆荆棘形成防御距离', 'thorny hem creating defensive distance', ['下摆小刺', '环绕轮廓', '深绿褐色', '不扎身体', '谨慎站姿'], ['small hem thorns', 'encircling silhouette', 'dark green-brown', 'not piercing body', 'cautious stance'], '危险和防御元素优先转成衣摆荆棘。', 'Translate danger and defense into thorn hem.', { ontologyLevel: 3, risk: 'medium' }),
      s('seasonal_color_growth', '季节生长色', 'Seasonal Growth Color', 'material', '颜色体现角色所处生长季节', 'color showing the character growth season', ['春绿', '秋褐', '枯黄边', '新芽点', '季节层次'], ['spring green', 'autumn brown', 'withered yellow edge', 'bud dots', 'season layers'], '色彩冲突优先按季节生长统一。', 'Unify color conflict through seasonal growth.', { ontologyLevel: 1 }),
      s('graft_scar_binding', '嫁接疤绑缚', 'Graft-Scar Binding', 'wear', '嫁接痕以绑带和疤线解释，不做开放伤口', 'graft marks explained by bindings and scar lines, not open wounds', ['嫁接线', '细绑带', '旧疤', '植物皮层', '无血'], ['graft line', 'thin binding', 'old scar', 'plant cortex', 'no blood'], '身体融合必须通过嫁接疤和固定带解释。', 'Explain body fusion through graft scars and fixing bands.', { ontologyLevel: 4, risk: 'high' }),
      s('plant_not_forest_costume', '植物非森林堆叠', 'Plant Not Forest Costume', 'symbol', '植物协议强调生长方向和局部功能，不堆满花草', 'plant protocol emphasizes growth direction and local function, not floral clutter', ['少量植物', '方向清楚', '功能位置', '人体轮廓', '无花草堆满'], ['limited plants', 'clear direction', 'functional placement', 'human silhouette', 'no floral clutter'], '所有植物元素必须有生长方向、季节理由或功能位置。', 'Every plant element must have growth direction, seasonal reason, or functional placement.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'symbiotic_mantle',
    name: '共生披覆',
    nameEn: 'Symbiotic Mantle',
    focus: '活体披覆、伴生组织、宿主关系和互惠功能统摄角色',
    focusEn: 'living mantles, companion tissue, host relations, and mutual functions governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'costume', 'prop', 'symbol'],
    defaultControls: ['symbiotic_mantle', 'host_relation', 'living_garment'],
    items: [
      s('living_shawl_companion', '活体披肩伴生', 'Living Shawl Companion', 'costume', '披肩像安静伴生物一样包覆肩背', 'shawl wrapping shoulders like a quiet symbiont', ['活体披肩', '肩背包覆', '微卷边', '柔软附着', '安静表情'], ['living shawl', 'shoulder-back wrap', 'slight curled edge', 'soft attachment', 'quiet expression'], '披风和生物伙伴优先合并为活体披肩。', 'Merge cape and creature companion into living shawl.', { ontologyLevel: 4, risk: 'high' }),
      s('breathing_hood', '呼吸兜帽', 'Breathing Hood', 'costume', '兜帽像有轻微呼吸的保护组织', 'hood reading as protective tissue with slight breath', ['软兜帽', '呼吸褶', '面部阴影', '边缘收缩', '脸部可读'], ['soft hood', 'breathing folds', 'facial shadow', 'contracting edge', 'readable face'], '神秘和生物元素优先进入呼吸兜帽。', 'Put mystery and biology into breathing hood.', { ontologyLevel: 3, risk: 'medium' }),
      s('host_clasp_point', '宿主扣点', 'Host Clasp Point', 'function', '共生物只通过几个扣点与身体连接', 'symbiont connected to body through a few clasp points', ['扣点', '软组织环', '肩颈固定', '可拆边界', '皮肤完整'], ['clasp points', 'soft tissue rings', 'shoulder-neck fixing', 'removable boundary', 'intact skin'], '附着元素必须有少量清楚连接点。', 'Attachment elements must have a few clear connection points.', { ontologyLevel: 3 }),
      s('mutual_protection_shell', '互惠保护壳', 'Mutual Protection Shell', 'structure', '共生披覆提供保护并从角色获得移动', 'symbiotic covering provides protection and receives mobility', ['护背壳', '软硬交界', '肩部重量', '移动痕迹', '保护姿态'], ['back shell', 'soft-hard boundary', 'shoulder weight', 'movement trace', 'protective pose'], '护甲和伴生关系优先互惠化。', 'Make armor and companion relation mutualistic.', { ontologyLevel: 4, risk: 'high' }),
      s('sensory_fringe_mantle', '感知须边披覆', 'Sensory-Fringe Mantle', 'function', '披覆边缘的细须承担感知功能', 'fine fringes on mantle edge carrying sensory function', ['细须边', '肩部外缘', '轻微张开', '空气感', '警觉姿态'], ['fringe tendrils', 'shoulder outer edge', 'slight opening', 'air sensitivity', 'alert pose'], '触手倾向必须转成短小感知须边。', 'Translate tentacle tendencies into short sensory fringes.', { ontologyLevel: 4, risk: 'high' }),
      s('nursing_pouch_layer', '养护囊层', 'Nursing-Pouch Layer', 'prop', '小囊层说明共生物需要照料或交换', 'small pouch layer showing symbiont care or exchange', ['小囊层', '胸腹位置', '手护姿态', '柔软半透', '安静亲密'], ['small pouch layer', 'chest-abdomen placement', 'protective hand', 'soft translucency', 'quiet intimacy'], '生育和照护元素优先克制为养护囊层。', 'Translate fertility and care into restrained nursing pouch layer.', { ontologyLevel: 4, risk: 'high' }),
      s('companion_shadow_collar', '伴生影领', 'Companion-Shadow Collar', 'symbol', '领口像另一生命的影子而非实体怪物', 'collar reading as another life shadow rather than full monster', ['黑色软领', '影状轮廓', '颈后隆起', '低对比', '含蓄危险'], ['black soft collar', 'shadow silhouette', 'back-neck rise', 'low contrast', 'subtle danger'], '危险伴生物优先降级为影领。', 'Downgrade dangerous symbiont into shadow collar.', { ontologyLevel: 3, risk: 'medium' }),
      s('living_pack_organ', '活体背包器官', 'Living Pack Organ', 'prop', '背包像活体器官但仍承担携带功能', 'backpack like living organ while keeping carrying function', ['背包器官', '肩带固定', '呼吸面', '携带结构', '功能袋'], ['organ backpack', 'strap fixing', 'breathing surface', 'carrying structure', 'functional pockets'], '背包和器官元素优先功能化为活体背包。', 'Functionalize backpack and organ elements into living pack.', { ontologyLevel: 4, risk: 'high' }),
      s('symbiont_mending_marks', '共生修补痕', 'Symbiont Mending Marks', 'wear', '披覆组织自我修补留下柔性痕迹', 'mantle tissue self-repair leaving soft traces', ['自愈缝', '颜色差', '柔软补片', '旧伤边', '无血腥'], ['self-healed seam', 'color difference', 'soft patch', 'old injury edge', 'no gore'], '损耗必须表现为共生组织维护。', 'Show wear as symbiotic tissue maintenance.', { ontologyLevel: 3, risk: 'medium' }),
      s('symbiosis_not_parasite', '共生非寄生', 'Symbiosis Not Parasitism', 'symbol', '共生披覆强调互惠和边界，不做失控寄生', 'symbiotic mantle emphasizes reciprocity and boundary, not runaway parasitism', ['边界清楚', '少量连接', '互惠功能', '人体主导', '无失控增殖'], ['clear boundary', 'few connections', 'mutual function', 'human-led', 'no runaway growth'], '寄生倾向必须先被改写为互惠共生。', 'Rewrite parasitic tendencies into mutualistic symbiosis first.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'aquatic_adaptation',
    name: '水生适应',
    nameEn: 'Aquatic Adaptation',
    focus: '鳃、鳍、湿皮、水压和浮动姿态统摄角色',
    focusEn: 'gills, fins, wet skin, water pressure, and buoyant posture governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'material', 'pose', 'costume'],
    defaultControls: ['aquatic_adaptation', 'wet_boundary', 'buoyant_body'],
    items: [
      s('neck_gill_lines', '颈侧鳃线', 'Neck Gill Lines', 'ontology', '鳃只作为颈侧细线出现', 'gills appearing only as fine neck-side lines', ['颈侧细线', '湿润阴影', '侧脸展示', '小范围', '呼吸感'], ['neck-side fine lines', 'wet shadow', 'side-face display', 'small range', 'breathing feel'], '水生特征优先收束到颈侧鳃线。', 'Constrain aquatic features to neck-side gill lines.', { ontologyLevel: 4, risk: 'high' }),
      s('fin_cuff_sleeves', '鳍状袖口', 'Fin-Cuff Sleeves', 'costume', '鳍形以袖口和下摆表达，不直接长鳍', 'fin form expressed through cuffs and hems, not direct fins', ['鳍状袖口', '半透明边', '水波褶', '手部露出', '轻薄材料'], ['fin-like cuffs', 'translucent edge', 'wave folds', 'visible hands', 'light material'], '鳍元素优先服装边缘化。', 'Translate fins into garment edges.', { ontologyLevel: 2 }),
      s('salt_crystal_edge', '盐晶边缘', 'Salt-Crystal Edge', 'material', '盐晶痕迹说明海水环境和干湿转换', 'salt crystal traces showing seawater environment and wet-dry transition', ['白色盐痕', '衣物边', '发梢结晶', '干湿分界', '低亮度'], ['white salt traces', 'garment edge', 'crystal hair tips', 'wet-dry boundary', 'low brightness'], '海洋环境优先落在盐晶边缘。', 'Place marine environment onto salt-crystal edges.', { ontologyLevel: 1 }),
      s('webbed_glove_solution', '蹼状手套方案', 'Webbed Glove Solution', 'costume', '指间蹼优先作为手套结构而非身体改造', 'finger webbing first as glove structure rather than body modification', ['蹼状手套', '指间薄片', '可摘边界', '手势清楚', '水生暗示'], ['webbed gloves', 'between-finger film', 'removable boundary', 'clear gesture', 'aquatic hint'], '人类模式下水生特征必须优先手套化。', 'In human mode, aquatic traits should become gloves first.', { ontologyLevel: 2, risk: 'medium' }),
      s('floating_hair_drift', '漂浮发丝', 'Floating Hair Drift', 'pose', '发丝像在水中慢漂，建立水压感', 'hair drifting slowly as if underwater, creating water pressure feel', ['漂浮发丝', '慢动作感', '发梢分散', '颈部留白', '平静眼神'], ['floating hair', 'slow-motion feel', 'spread hair tips', 'neck negative space', 'calm gaze'], '水下气质优先姿态化为漂浮发丝。', 'Translate underwater mood into floating hair posture.', { ontologyLevel: 1 }),
      s('pearl_pressure_marks', '珍珠压痕', 'Pearl Pressure Marks', 'symbol', '珍珠和压痕表达水压、身份和疼痛克制', 'pearls and pressure marks expressing water pressure, identity, and restrained pain', ['小珍珠', '皮肤压痕', '颈腕位置', '白色点', '克制表情'], ['small pearls', 'skin pressure marks', 'neck-wrist placement', 'white dots', 'restrained face'], '奢华和水生元素优先进入珍珠压痕。', 'Merge luxury and aquatic elements into pearl pressure marks.', { ontologyLevel: 2 }),
      s('dive_harness_biology', '潜水束具生物化', 'Dive Harness Biologized', 'function', '潜水束具像生命支持组织但仍可装备化', 'dive harness like life-support tissue while remaining equipment', ['胸背束具', '软管', '湿亮材料', '呼吸连接', '装备边界'], ['chest-back harness', 'soft tubes', 'wet glossy material', 'breathing link', 'equipment boundary'], '装备和水生身体优先合并为潜水束具。', 'Merge equipment and aquatic body into dive harness.', { ontologyLevel: 3, risk: 'medium' }),
      s('scale_hint_not_full_fish', '鳞片暗示非鱼化', 'Scale Hint Not Full Fish', 'material', '鳞片只作为局部反光纹理出现', 'scales appearing only as local reflective texture', ['局部鳞光', '肩颈或手背', '低对比', '人体皮肤保留', '无鱼头化'], ['local scale shine', 'shoulder-neck or hand back', 'low contrast', 'kept human skin', 'no fish-head transformation'], '鳞片必须局部、纹理化、非全身覆盖。', 'Scales must be local, textural, and not full-body covering.', { ontologyLevel: 3, risk: 'medium' }),
      s('tidal_sash_motion', '潮汐绶带动作', 'Tidal Sash Motion', 'pose', '绶带和姿态表达潮汐牵引', 'sash and pose expressing tidal pull', ['流动绶带', '斜向拖曳', '身体偏移', '水波褶', '慢摆姿态'], ['flowing sash', 'diagonal drag', 'body offset', 'wave folds', 'slow sway'], '动作和水流元素优先变成绶带运动。', 'Translate motion and current into sash movement.', { ontologyLevel: 1 }),
      s('aquatic_not_mermaid_default', '水生非默认人鱼', 'Aquatic Not Mermaid Default', 'symbol', '水生协议不自动生成鱼尾或人鱼模板', 'aquatic protocol does not auto-generate fishtail or mermaid template', ['无默认鱼尾', '局部适应', '鳃线或袖口', '人体比例', '功能解释'], ['no default fishtail', 'local adaptation', 'gill lines or cuffs', 'human proportion', 'functional explanation'], '除非手选，水生元素不得直接导向人鱼。', 'Unless manually selected, aquatic elements must not directly become mermaid.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'parasitic_cord',
    name: '寄生索',
    nameEn: 'Parasitic Cord',
    focus: '寄生管、缠绕索、依附点和宿主紧张关系统摄角色',
    focusEn: 'parasitic tubes, wrapping cords, attachment points, and host tension governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'prop', 'costume', 'pose'],
    defaultControls: ['parasitic_cord', 'attachment_logic', 'host_tension'],
    items: [
      s('single_cord_rule', '单索规则', 'Single-Cord Rule', 'ontology', '寄生关系优先由一根主索表达，避免乱缠', 'parasitic relation expressed by one main cord first, avoiding clutter', ['一根主索', '清楚起点', '清楚终点', '身体留白', '紧张姿态'], ['one main cord', 'clear origin', 'clear end', 'body negative space', 'tense pose'], '所有触手和线缆倾向先收束成一根主索。', 'Constrain tentacle and cable tendencies into one main cord first.', { ontologyLevel: 4, risk: 'high' }),
      s('neck_host_tether', '颈部宿主系索', 'Neck Host Tether', 'ontology', '颈部系索表现控制和脆弱，但不勒伤', 'neck tether expressing control and vulnerability without injury', ['颈侧软索', '松弛间距', '皮肤压痕', '低头', '可拆扣'], ['neck-side soft cord', 'loose spacing', 'skin pressure mark', 'lowered head', 'removable clasp'], '控制元素优先克制为颈部软索。', 'Restrain control elements into neck soft tether.', { ontologyLevel: 3, risk: 'medium' }),
      s('back_attachment_root', '背部附着根', 'Back Attachment Root', 'ontology', '附着点在背部，保持正面识别干净', 'attachment point on back, keeping frontal identity clean', ['背部根点', '肩胛附近', '索状延伸', '正脸干净', '侧背展示'], ['back root point', 'near scapula', 'cord extension', 'clean front face', 'side-back display'], '寄生和背部装备优先合并为背部附着根。', 'Merge parasitism and back equipment into back attachment root.', { ontologyLevel: 4, risk: 'high' }),
      s('cord_as_jewelry_limit', '索饰限制', 'Cord as Jewelry Limit', 'symbol', '寄生索可被压低为首饰逻辑', 'parasitic cord may be lowered into jewelry logic', ['细索项链', '腕部缠绕', '小结点', '饰品距离', '皮肤完整'], ['thin cord necklace', 'wrist wrap', 'small nodes', 'ornament distance', 'intact skin'], '低超现实强度下寄生元素必须饰品化。', 'At low surreal intensity, parasitic elements must become ornaments.', { ontologyLevel: 2, risk: 'medium' }),
      s('feeding_pouch_hint', '供养囊暗示', 'Feeding-Pouch Hint', 'prop', '小囊暗示供养关系但不做恶心描写', 'small pouch hinting feeding relation without disgusting depiction', ['小软囊', '腰侧位置', '半透明暗示', '手遮挡', '无液体外泄'], ['small soft pouch', 'waist-side placement', 'translucent hint', 'hand occlusion', 'no leaking'], '供养和寄生必须符号化、无恶心。', 'Feeding and parasitism must be symbolic and non-disgusting.', { ontologyLevel: 4, risk: 'high' }),
      s('cord_pull_pose', '索牵引姿态', 'Cord-Pull Pose', 'pose', '身体姿态显示被索轻微牵引', 'body posture showing slight pull from cord', ['肩颈偏移', '手扶索', '脚步停顿', '张力线', '警觉眼神'], ['shoulder-neck offset', 'hand on cord', 'paused step', 'tension line', 'alert gaze'], '动态和控制元素优先变成索牵引姿态。', 'Translate motion and control into cord-pull pose.', { ontologyLevel: 2 }),
      s('symptom_tag_nodes', '症状结点标签', 'Symptom-Node Tags', 'symbol', '索上的结点像记录症状或交换阶段', 'nodes on cord like records of symptoms or exchange stages', ['小结点', '标签感', '重复节距', '无品牌字', '医学冷感'], ['small nodes', 'tag feeling', 'repeated spacing', 'no brand text', 'medical coldness'], '医学和寄生元素优先记录化为结点。', 'Record medical and parasitic elements as nodes.', { ontologyLevel: 3, risk: 'medium' }),
      s('detachable_parasite_harness', '可拆寄生束具', 'Detachable Parasite Harness', 'costume', '寄生结构先作为可拆束具存在', 'parasitic structure first existing as detachable harness', ['束具带', '软索', '扣具', '衣外固定', '身体完整'], ['harness straps', 'soft cords', 'clasps', 'outside-garment fixing', 'intact body'], '人类模式下寄生优先装备化。', 'In human mode, parasitism should become equipment first.', { ontologyLevel: 2, risk: 'medium' }),
      s('cord_shadow_not_tentacle_mass', '索影非触手群', 'Cord Shadow Not Tentacle Mass', 'symbol', '多余寄生结构只能成为影子或纹样', 'extra parasitic structures can only become shadows or patterns', ['一主索', '影子分叉', '纹样暗示', '无触手群', '留白'], ['one main cord', 'shadow branches', 'pattern hint', 'no tentacle mass', 'negative space'], '触手群必须降级为阴影、纹样或单索。', 'Downgrade tentacle masses into shadows, patterns, or single cord.', { ontologyLevel: 3, risk: 'medium' }),
      s('parasite_with_boundary', '寄生有边界', 'Parasitism With Boundary', 'symbol', '寄生协议必须清楚谁是主体、哪里连接、为何存在', 'parasitic protocol must clarify subject, connection point, and purpose', ['主体清楚', '连接点清楚', '功能理由', '无失控增殖', '设计板可读'], ['clear subject', 'clear connection point', 'functional reason', 'no runaway growth', 'readable design board'], '所有寄生元素必须有主体关系、连接点和功能解释。', 'Every parasitic element must have subject relation, attachment point, and functional explanation.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'mineral_biology',
    name: '矿物生物',
    nameEn: 'Mineral Biology',
    focus: '晶体、矿脉、沉积、石化边缘和非机械硬质生命统摄角色',
    focusEn: 'crystal, ore veins, sediment, petrified edges, and non-mechanical hard life governing character',
    defaultKind: 'material',
    defaultAffects: ['body', 'material', 'silhouette', 'symbol'],
    defaultControls: ['mineral_biology', 'crystal_growth', 'geological_life'],
    items: [
      s('crystal_collar_growth', '晶体领生长', 'Crystal-Collar Growth', 'structure', '晶体只在领口形成权力轮廓', 'crystal growth only at collar forming authority silhouette', ['晶体领', '颈部环绕', '透明棱面', '短簇生长', '冷光'], ['crystal collar', 'neck encircling', 'transparent facets', 'short clusters', 'cold light'], '晶体化优先集中到领口轮廓。', 'Concentrate crystallization into collar silhouette.', { ontologyLevel: 4, risk: 'high' }),
      s('ore_vein_skin_lines', '矿脉皮肤线', 'Ore-Vein Skin Lines', 'ontology', '矿脉像皮下地图一样局部出现', 'ore veins appearing locally like under-skin maps', ['金属矿脉线', '手臂局部', '低亮反光', '皮肤完整', '地图分叉'], ['metallic ore lines', 'local arm area', 'low reflective sheen', 'intact skin', 'map branches'], '金属和生物元素优先转成矿脉线。', 'Translate metal and biology into ore-vein lines.', { ontologyLevel: 4, risk: 'high' }),
      s('petrified_hand_guard', '石化手部护层', 'Petrified Hand Guard', 'ontology', '石化只在手部作为工具或防御层', 'petrification only on hands as tool or defense layer', ['石化手背', '裂纹边', '手指可动', '灰白材质', '抓握姿态'], ['petrified hand back', 'crack edge', 'movable fingers', 'gray-white material', 'grip pose'], '石化倾向必须局部功能化。', 'Keep petrification local and functional.', { ontologyLevel: 4, risk: 'high' }),
      s('sediment_hem_weight', '沉积下摆重量', 'Sediment Hem Weight', 'wear', '下摆沉积物让角色像被地质时间拖住', 'sediment on hem making character held by geological time', ['沉积灰', '重下摆', '泥沙层', '慢步姿态', '旧痕'], ['sediment gray', 'heavy hem', 'silt layers', 'slow-step pose', 'old traces'], '时间和土地元素优先落到沉积下摆。', 'Place time and land elements onto sediment hem.', { ontologyLevel: 2 }),
      s('geode_chest_window', '晶洞胸口窗', 'Geode Chest Window', 'symbol', '胸口小窗口像晶洞，表达内在核心', 'small chest window like geode, expressing inner core', ['晶洞小窗', '胸前中心', '紫灰晶面', '外壳边', '手扶心口'], ['small geode window', 'chest center', 'purple-gray facets', 'shell edge', 'hand on heart'], '核心和神秘元素优先晶洞化。', 'Translate core and mystery elements into geode form.', { ontologyLevel: 4, risk: 'high' }),
      s('basalt_shoulder_mass', '玄武岩肩量', 'Basalt Shoulder Mass', 'structure', '肩部黑色石质块面建立厚重防御', 'black stone shoulder mass establishing heavy defense', ['黑石肩', '粗糙面', '厚重上身', '低光', '稳定站姿'], ['black stone shoulders', 'rough surface', 'heavy upper body', 'low light', 'stable stance'], '重甲和地质元素优先转成玄武岩肩量。', 'Translate heavy armor and geology into basalt shoulder mass.', { ontologyLevel: 3 }),
      s('quartz_teardrop_marks', '石英泪痕', 'Quartz Tear Marks', 'face', '透明石英痕替代表情化泪水', 'transparent quartz traces replacing expressive tears', ['石英泪痕', '眼下晶点', '透明高光', '冷脸', '局部标记'], ['quartz tear marks', 'under-eye crystal dots', 'transparent highlight', 'cold face', 'local mark'], '悲伤和晶体元素优先转成石英泪痕。', 'Translate grief and crystal elements into quartz tear marks.', { ontologyLevel: 3, risk: 'medium' }),
      s('mineral_joint_caps', '矿物关节帽', 'Mineral Joint Caps', 'function', '关节矿物帽说明硬化和可动边界', 'mineral joint caps explaining hardening and movement boundary', ['肘膝矿帽', '圆形硬点', '裂纹边', '动作清楚', '局部出现'], ['elbow-knee mineral caps', 'round hard points', 'cracked edge', 'clear motion', 'local placement'], '硬化必须落在运动关节或保护位置。', 'Hardening must land on movement joints or protective positions.', { ontologyLevel: 3 }),
      s('fossil_imprint_cloth', '化石压印衣料', 'Fossil-Imprint Cloth', 'material', '化石纹样作为衣料压印而非身体古生物化', 'fossil motifs as fabric imprint, not body paleontology', ['化石纹', '压印布料', '灰白层', '衣摆或披肩', '静态展示'], ['fossil pattern', 'imprinted fabric', 'gray-white layers', 'hem or shawl', 'still display'], '古生物元素优先纹样化在衣物上。', 'Pattern paleontological elements onto clothing first.', { ontologyLevel: 1 }),
      s('mineral_not_robot_metal', '矿物非机器人金属', 'Mineral Not Robot Metal', 'symbol', '矿物生命强调地质生长，不变成机械装甲', 'mineral life emphasizes geological growth, not mechanical armor', ['晶体生长', '矿脉', '石质裂纹', '无螺丝', '无电路板'], ['crystal growth', 'ore veins', 'stone cracks', 'no screws', 'no circuit boards'], '金属硬质元素必须判断为矿物生长还是技术设备。', 'Hard metallic elements must be judged as mineral growth or technical device.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'animal_hybrid',
    name: '动物混血',
    nameEn: 'Animal Hybrid',
    focus: '动物感官、局部特征、行为姿态和身份暗示统摄角色',
    focusEn: 'animal senses, local traits, behavioral posture, and identity hints governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'face', 'pose', 'symbol'],
    defaultControls: ['animal_hybrid', 'local_trait', 'behavioral_hint'],
    items: [
      s('ear_headpiece_threshold', '耳饰阈值', 'Ear-Headpiece Threshold', 'prop', '动物耳优先作为头饰或发型阈值处理', 'animal ears first handled as headpiece or hairstyle threshold', ['耳形头饰', '发间结构', '可摘边界', '脸部人类', '轻微野性'], ['ear-shaped headpiece', 'hair-integrated structure', 'removable boundary', 'human face', 'slight wildness'], '低等级动物化必须先头饰化。', 'At low level, animalization must become headpiece first.', { ontologyLevel: 2, risk: 'medium' }),
      s('tail_shadow_sash', '尾影绶带', 'Tail-Shadow Sash', 'costume', '尾巴感由身后绶带或影子表达', 'tail feeling expressed through rear sash or shadow', ['后摆绶带', '尾状弧线', '行走拖曳', '身体无尾', '侧后视图'], ['rear sash', 'tail-like arc', 'walking drag', 'no body tail', 'rear-side view'], '尾巴倾向优先服装化为后摆绶带。', 'Translate tail tendency into rear sash first.', { ontologyLevel: 2, risk: 'medium' }),
      s('predator_gaze_protocol', '捕食者眼神协议', 'Predator Gaze Protocol', 'face', '动物性先通过凝视和姿态呈现', 'animality first through gaze and posture', ['定点凝视', '低头上看', '微张唇', '肩颈收紧', '静止威胁'], ['fixed gaze', 'looking upward under brow', 'slightly parted lips', 'tight shoulder-neck', 'still threat'], '兽化元素可优先转为眼神和姿态。', 'Animalization may first translate into gaze and posture.', { ontologyLevel: 1 }),
      s('fur_collar_boundary', '毛皮领边界', 'Fur-Collar Boundary', 'costume', '毛发和兽性集中到领口边界', 'fur and animality concentrated at collar boundary', ['毛皮领', '颈部包覆', '动物色', '脸部干净', '触感明显'], ['fur collar', 'neck wrap', 'animal tone', 'clean face', 'clear tactility'], '毛发生长优先降级为毛皮领。', 'Downgrade fur growth into fur collar.', { ontologyLevel: 2 }),
      s('claw_boot_toe', '爪形靴头', 'Claw-Toe Boots', 'costume', '爪感通过靴头形状表达，保留人脚', 'claw feeling through boot toe shape, keeping human feet', ['尖靴头', '分趾暗示', '硬质鞋面', '低伏站姿', '步态野性'], ['pointed toe', 'split-toe hint', 'hard upper', 'low stance', 'wild gait'], '足部兽化优先鞋履化。', 'Translate foot animalization into footwear.', { ontologyLevel: 2 }),
      s('whisker_makeup_lines', '须感妆线', 'Whisker Makeup Lines', 'face', '胡须感以妆线表达而非长出真实须', 'whisker feeling as makeup lines rather than real whiskers', ['脸颊细线', '鼻翼两侧', '对称妆纹', '脸部可读', '轻微挑逗'], ['cheek fine lines', 'beside nose', 'symmetric makeup', 'readable face', 'slight tease'], '面部动物化优先妆容化。', 'Translate facial animalization into makeup.', { ontologyLevel: 2, risk: 'medium' }),
      s('hoof_heel_silhouette', '蹄跟轮廓', 'Hoof-Heel Silhouette', 'costume', '蹄感以鞋跟和站姿体现', 'hoof feeling through heel and stance', ['厚重鞋跟', '分裂鞋底', '脚踝硬边', '站姿稳', '非真实蹄'], ['heavy heel', 'split sole', 'hard ankle edge', 'stable stance', 'not real hoof'], '蹄化必须先鞋履化和姿态化。', 'Hoof transformation must become footwear and posture first.', { ontologyLevel: 2 }),
      s('scale_or_fur_local_patch', '鳞毛局部片', 'Scale-or-Fur Local Patch', 'material', '动物表面特征只在局部形成触感证据', 'animal surface trait forming local tactile evidence only', ['局部鳞毛', '肩颈片区', '低面积', '材质对比', '人体轮廓保留'], ['local scale or fur', 'shoulder-neck zone', 'small area', 'material contrast', 'kept human silhouette'], '全身动物化倾向必须先局部化。', 'Full animalization tendency must be localized first.', { ontologyLevel: 3, risk: 'medium' }),
      s('pack_behavior_pose', '族群行为姿态', 'Pack-Behavior Pose', 'pose', '动物性通过警戒、靠近或服从姿态表达', 'animality through alert, approaching, or submissive posture', ['警觉站姿', '肩背低伏', '手部护胸', '侧头嗅探感', '群体暗示'], ['alert stance', 'low shoulder-back', 'hands guarding chest', 'side-head sniff hint', 'pack hint'], '动物群体元素优先转成姿态语言。', 'Translate animal pack elements into posture language.', { ontologyLevel: 1 }),
      s('animal_not_costume_mascot', '动物非吉祥物套装', 'Animal Not Mascot Suit', 'symbol', '动物混血协议避免卡通套装和随机兽人化', 'animal hybrid protocol avoids mascot suits and random beast-person default', ['局部特征', '真实姿态', '无玩偶套装', '无默认兽头', '人形可读'], ['local traits', 'real posture', 'no mascot suit', 'no default animal head', 'readable humanoid'], '动物元素必须选择头饰、妆线、姿态、鞋履或局部材质之一作为主通道。', 'Animal elements must choose headpiece, makeup line, posture, footwear, or local material as main channel.', { ontologyLevel: 2, risk: 'medium' })
    ]
  }
];

export const ORGANIC_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
