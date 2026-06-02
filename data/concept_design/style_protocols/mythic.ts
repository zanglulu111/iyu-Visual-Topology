import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'MYTHIC';
const ROUTE_NAME = '神话妖性';
const ROUTE_NAME_EN = 'Mythic Yokai Nature';
const ERAS = ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'];
const FORBIDS = ['随机兽人化', '默认奇幻套装', 'IP化神话角色', '满身符号堆叠', '兽耳尾巴无解释', '神性光效抢走人体'];

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
    slug: 'animalization_channel',
    name: '兽化通道',
    nameEn: 'Animalization Channel',
    focus: '兽性特征必须选择清楚通道而非全身随机兽化',
    focusEn: 'animal traits choosing a clear channel instead of full random beastification',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'face', 'pose', 'costume'],
    defaultControls: ['animalization_channel', 'local_trait', 'human_readability'],
    items: [
      s('ears_as_headpiece', '兽耳头饰化', 'Animal Ears as Headpiece', 'costume', '兽耳先以头饰或发型结构出现', 'animal ears first appearing as headpiece or hairstyle structure', ['耳形头饰', '发型融合', '头部轮廓', '人脸清楚', '无玩偶感'], ['ear-shaped headpiece', 'hair integration', 'head silhouette', 'clear human face', 'no mascot feel'], '兽耳倾向优先头饰化，除非世界法则允许真实兽化。', 'Translate animal ears into headpiece first unless world law allows literal animalization.', { ontologyLevel: 2, risk: 'medium' }),
      s('tail_as_garment_extension', '尾巴衣摆化', 'Tail as Garment Extension', 'costume', '尾巴感由衣摆、腰饰或披挂承担', 'tail feeling carried by hem, waist ornament, or drape', ['长衣摆', '腰后延伸', '柔性线条', '行走方向', '无随机兽尾'], ['long hem', 'back-waist extension', 'flexible line', 'walking direction', 'no random animal tail'], '尾巴元素优先转成服装延伸。', 'Translate tail elements into garment extension first.', { ontologyLevel: 2 }),
      s('claw_as_jewelry_nails', '爪化甲饰', 'Claws as Nail Jewelry', 'wear', '爪感以指甲、戒甲或手套指端表达', 'claw feeling expressed through nails, nail rings, or glove tips', ['尖形甲饰', '手势清楚', '金属或角质', '局部危险', '无怪物手'], ['pointed nail jewelry', 'clear hand gesture', 'metal or keratin', 'local danger', 'no monster hand'], '爪和攻击性优先落在手部修饰。', 'Place claw and aggression into hand adornment.', { ontologyLevel: 2 }),
      s('predator_gaze', '捕食者凝视', 'Predator Gaze', 'face', '兽性先通过眼神和头部角度表达', 'animality first expressed through gaze and head angle', ['定点凝视', '低头上看', '眼尾紧', '静止威胁', '脸部可读'], ['fixed gaze', 'looking up under brow', 'tight eye corners', 'still threat', 'readable face'], '兽化冲动优先进入眼神和姿态。', 'Put animalization drive into gaze and posture first.', { ontologyLevel: 1 }),
      s('fur_as_collar_trim', '皮毛领边化', 'Fur as Collar Trim', 'costume', '皮毛只作为衣领边界和身份暗示', 'fur only as collar boundary and identity hint', ['毛领', '肩颈体积', '局部兽性', '衣物清楚', '无全身毛化'], ['fur collar', 'shoulder-neck volume', 'local animality', 'clear garment', 'no full fur body'], '毛发兽化优先衣领化。', 'Translate fur animalization into collar trim.', { ontologyLevel: 1 }),
      s('hoof_as_shoe_shape', '蹄形鞋履', 'Hoof as Shoe Shape', 'costume', '蹄感由鞋履造型表达', 'hoof feeling expressed by footwear shape', ['厚底鞋', '分趾暗示', '脚部重心', '地面接触', '不改腿'], ['thick soles', 'split-toe hint', 'foot weight', 'ground contact', 'legs unchanged'], '蹄和动物脚优先鞋履化。', 'Translate hooves and animal feet into footwear.', { ontologyLevel: 2 }),
      s('mane_as_hair_volume', '鬃毛发量', 'Mane Hair Volume', 'structure', '鬃毛感由头发体积和方向承担', 'mane feeling carried by hair volume and direction', ['后颈发量', '向后流动', '野性轮廓', '发丝清楚', '人形头部'], ['nape hair volume', 'backward flow', 'wild silhouette', 'clear strands', 'humanoid head'], '鬃毛和兽性优先转成发型。', 'Translate mane and animality into hairstyle.', { ontologyLevel: 1 }),
      s('animal_pattern_makeup', '动物纹妆', 'Animal-Pattern Makeup', 'face', '动物纹理以妆面或纹样出现', 'animal pattern appears as makeup or motif', ['脸侧纹样', '低对比', '眼周线条', '图案可控', '无真实兽皮'], ['side-face motif', 'low contrast', 'eye-area lines', 'controlled pattern', 'no literal animal hide'], '动物皮纹优先妆面化。', 'Translate animal skin patterns into makeup first.', { ontologyLevel: 1 }),
      s('beast_breath_pose', '兽息姿态', 'Beast-Breath Pose', 'pose', '呼吸和站姿带出野性张力', 'breath and stance carry feral tension', ['微张口', '肩颈前探', '低重心', '手指张开', '安静危险'], ['slightly parted mouth', 'forward shoulder-neck', 'low center', 'open fingers', 'quiet danger'], '野性元素优先通过身体状态表达。', 'Express feral elements through body state first.', { ontologyLevel: 1 }),
      s('animal_not_mascot', '兽性非玩偶', 'Animality Not Mascot', 'function', '兽化协议避免吉祥物、玩偶和随机兽人模板', 'animalization protocol avoids mascot, plush, and random beast-person templates', ['局部兽性', '人体骨架', '功能理由', '无套装头', '身份优先'], ['local animality', 'human skeleton', 'functional reason', 'no costume head', 'identity first'], '所有兽化必须保留人形身份和功能理由。', 'All animalization must preserve humanoid identity and functional reason.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'horn_crown',
    name: '角冠结构',
    nameEn: 'Horn and Crown Structure',
    focus: '角、冠、头部权力轮廓和非人尊严统摄角色',
    focusEn: 'horns, crowns, head power silhouettes, and nonhuman dignity governing character',
    defaultKind: 'structure',
    defaultAffects: ['silhouette', 'face', 'symbol', 'costume'],
    defaultControls: ['horn_crown', 'head_silhouette', 'nonhuman_dignity'],
    items: [
      s('small_temporal_horns', '太阳穴小角', 'Small Temporal Horns', 'ontology', '角只在太阳穴小范围出现', 'horns appear only locally at the temples', ['小角', '太阳穴位置', '发型遮接', '脸部清楚', '非恶魔模板'], ['small horns', 'temple placement', 'hair transition', 'clear face', 'not demon template'], '角元素优先缩小并整合进发型。', 'Shrink horn elements and integrate them into hair first.', { ontologyLevel: 4, risk: 'high' }),
      s('horned_headpiece', '角形头冠', 'Horned Headpiece', 'costume', '角感由头冠承担，避免直接身体异化', 'horn feeling carried by headpiece to avoid direct body mutation', ['角形头冠', '金属或木质', '固定点清楚', '仪式轮廓', '可摘结构'], ['horned headpiece', 'metal or wood', 'clear fixing point', 'ritual silhouette', 'removable structure'], '神话和礼制元素优先头冠化。', 'Translate mythic and etiquette elements into headpiece.', { ontologyLevel: 2 }),
      s('broken_horn_rank', '断角等级', 'Broken Horn Rank', 'symbol', '断角表达地位、惩罚或战斗历史', 'broken horn expresses status, punishment, or battle history', ['断角', '磨损断面', '不对称', '头部权力', '旧伤证据'], ['broken horn', 'worn break', 'asymmetry', 'head authority', 'old injury evidence'], '损伤和神话身份优先转成断角等级。', 'Translate damage and mythic identity into broken-horn rank.', { ontologyLevel: 4, risk: 'high' }),
      s('antler_shadow_crown', '鹿角影冠', 'Antler Shadow Crown', 'symbol', '鹿角以影子或后景轮廓出现', 'antlers appear as shadow or background silhouette', ['影子角冠', '头后留白', '低对比', '森林或神性暗示', '不长实体角'], ['shadow antlers', 'space behind head', 'low contrast', 'forest or divinity hint', 'no literal horns'], '大型角冠优先降级为影冠。', 'Downgrade large antler crown into shadow crown.', { ontologyLevel: 2 }),
      s('bone_horn_material', '骨角材质', 'Bone-Horn Material', 'material', '角材质必须干净、无血腥、可读', 'horn material must be clean, non-gory, and readable', ['骨白', '细纹理', '磨砂边', '自然生长线', '无血肉'], ['bone white', 'fine grain', 'matte edge', 'growth lines', 'no gore'], '角和骨元素必须材料化而非恐怖化。', 'Materialize horn and bone elements instead of horrorizing them.', { ontologyLevel: 3 }),
      s('crown_as_control_ring', '控制环冠', 'Crown as Control Ring', 'symbol', '头冠像束缚和控制装置', 'crown reads as restraint and control device', ['环形冠', '压住发线', '小锁扣', '冷感权力', '面部安静'], ['ring crown', 'pressed hairline', 'small clasp', 'cold authority', 'quiet face'], '神性和控制元素优先合并成环冠。', 'Merge divinity and control into ring crown.', { ontologyLevel: 2 }),
      s('ritual_horn_wrapping', '仪式缠角', 'Ritual Horn Wrapping', 'wear', '布线缠绕角或头冠说明仪式身份', 'cloth or thread wraps horns/headpiece to show ritual identity', ['缠线', '小结', '角根位置', '信仰痕迹', '低饱和色'], ['wrapping thread', 'small knots', 'horn base', 'faith trace', 'low saturation color'], '仪式身份优先落在角根缠绕。', 'Place ritual identity into horn-base wrapping.', { ontologyLevel: 3 }),
      s('single_horn_asymmetry', '独角不对称', 'Single-Horn Asymmetry', 'structure', '单角制造不对称记忆点', 'single horn creates asymmetrical memory point', ['单侧角', '偏重轮廓', '头部侧倾', '身份缺口', '可读剪影'], ['one-side horn', 'weighted silhouette', 'tilted head', 'identity lack', 'readable silhouette'], '强神话符号优先单点化。', 'Make strong mythic signs into single focal points.', { ontologyLevel: 4, risk: 'high' }),
      s('crown_without_logo', '无标识冠', 'Crown Without Logo', 'symbol', '冠只表达等级，不出现现实品牌或具体IP符号', 'crown expresses rank without real brand or IP signs', ['抽象冠形', '无logo', '几何节奏', '材料权威', '身份清楚'], ['abstract crown form', 'no logo', 'geometric rhythm', 'material authority', 'clear identity'], '权力符号必须原创抽象化。', 'Power symbols must be original and abstract.', { ontologyLevel: 1 }),
      s('horn_scale_lock', '角尺度锁', 'Horn Scale Lock', 'function', '角冠不得压倒脸和身份', 'horns/crown must not overpower face and identity', ['脸部优先', '角体克制', '固定点清楚', '无巨大恶魔角', '身份优先'], ['face first', 'restrained horn mass', 'clear fixing point', 'no giant demon horns', 'identity first'], '所有角冠元素必须服务脸部识别。', 'All horn/crown elements must serve facial recognition.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'scale_feather_fur',
    name: '鳞羽毛层',
    nameEn: 'Scale, Feather, and Fur Layer',
    focus: '鳞、羽、毛作为局部材质层统摄角色',
    focusEn: 'scales, feathers, and fur as local material layers governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'body', 'silhouette'],
    defaultControls: ['scale_feather_fur', 'local_layer', 'material_trait'],
    items: [
      s('scale_collar_layer', '鳞片领层', 'Scale Collar Layer', 'costume', '鳞片只在领口形成保护层', 'scales form protective layer only at collar', ['鳞片领', '肩颈边', '暗色反光', '小片重复', '脸部清楚'], ['scale collar', 'shoulder-neck edge', 'dark reflection', 'small repeated plates', 'clear face'], '鳞片优先服装边界化。', 'Translate scales into garment boundary first.', { ontologyLevel: 2 }),
      s('feather_shoulder_trace', '羽肩痕', 'Feather Shoulder Trace', 'costume', '羽毛集中在肩部形成神话轮廓', 'feathers concentrate at shoulders to form mythic silhouette', ['肩部羽片', '轻量外扩', '少量层次', '风向感', '无翅膀默认'], ['shoulder feathers', 'light outward volume', 'few layers', 'wind direction', 'no default wings'], '羽化倾向优先肩部化，不直接长翅膀。', 'Place feathering on shoulders first, not default wings.', { ontologyLevel: 2 }),
      s('fur_wrist_cuff', '毛质腕口', 'Fur Wrist Cuff', 'wear', '毛层只在腕口或袖口暗示兽性', 'fur layer hints animality only at wrist/cuff', ['毛质腕口', '手部动作', '短毛', '衣物连接', '克制野性'], ['fur wrist cuff', 'hand action', 'short fur', 'garment connection', 'restrained ferality'], '皮毛元素优先袖口化。', 'Translate fur elements into cuffs first.', { ontologyLevel: 1 }),
      s('iridescent_scale_makeup', '虹彩鳞妆', 'Iridescent Scale Makeup', 'face', '鳞光以眼周或颧骨妆面表达', 'scale shimmer expressed as eye or cheekbone makeup', ['虹彩小片', '颧骨高光', '眼周边', '人脸保留', '低密度'], ['iridescent flecks', 'cheekbone highlight', 'eye edge', 'human face retained', 'low density'], '脸部鳞化优先妆面化。', 'Translate facial scaling into makeup.', { ontologyLevel: 2 }),
      s('molted_feather_wear', '脱羽损耗', 'Molted Feather Wear', 'wear', '脱落羽片说明季节、战损或神性衰退', 'molted feathers show season, damage, or fading divinity', ['脱落羽片', '下摆残羽', '旧损耗', '少量散落', '非血腥'], ['molted feathers', 'hem remnants', 'old wear', 'few scattered pieces', 'no gore'], '损耗和羽化优先脱羽化。', 'Translate wear and feathering into molting traces.', { ontologyLevel: 1 }),
      s('snake_scale_glove', '蛇鳞手套', 'Snake-Scale Glove', 'costume', '蛇性通过手套材料出现', 'serpentine quality appears through glove material', ['蛇鳞纹', '贴手手套', '冷光', '指尖动作', '无蛇头默认'], ['snake-scale pattern', 'fitted glove', 'cool shine', 'fingertip action', 'no default snake head'], '蛇性优先材料化到手套。', 'Materialize serpentine traits into gloves first.', { ontologyLevel: 1 }),
      s('bird_bone_feather_line', '鸟骨羽线', 'Bird-Bone Feather Line', 'structure', '轻骨感和羽线塑造瘦长轮廓', 'avian bone feeling and feather lines shape slender silhouette', ['瘦长线', '锁骨明显', '羽线装饰', '轻步态', '空灵感'], ['slender line', 'clear collarbones', 'feather-line ornament', 'light gait', 'ethereal feel'], '飞鸟神话优先转成轻量身体线。', 'Translate bird myth into lightweight body line.', { ontologyLevel: 2 }),
      s('scale_armor_not_dragon', '鳞甲非龙模板', 'Scale Armor Not Dragon Template', 'function', '鳞甲不自动生成龙人', 'scale armor does not auto-generate dragon person', ['局部鳞甲', '人形骨架', '无默认龙头', '材料清楚', '身份优先'], ['local scale armor', 'humanoid skeleton', 'no default dragon head', 'clear material', 'identity first'], '龙、蛇、鱼元素必须先局部材质化。', 'Local-materialize dragon, snake, and fish elements first.', { ontologyLevel: 2 }),
      s('fur_shadow_not_full_body', '毛影非全身毛化', 'Fur Shadow Not Full-Body Fur', 'symbol', '毛感可以通过阴影和边缘表达', 'fur feeling can be expressed by shadow and edges', ['毛影边', '衣物轮廓', '低对比', '局部质感', '脸部干净'], ['fur-shadow edge', 'garment silhouette', 'low contrast', 'local texture', 'clean face'], '兽毛优先成为边缘质感。', 'Turn animal fur into edge texture first.', { ontologyLevel: 1 }),
      s('trait_layer_rule', '特征层规则', 'Trait Layer Rule', 'function', '鳞羽毛只能作为一层设计语言，不吞掉身份', 'scales, feathers, and fur act as one design layer, not consuming identity', ['局部材质', '数量克制', '人体可读', '无混乱混种', '身份优先'], ['local material', 'restrained amount', 'readable body', 'no chaotic hybrid', 'identity first'], '所有动物材质必须局部、可读、可解释。', 'All animal materials must be local, readable, and explainable.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'sacred_stigma',
    name: '圣痕神性',
    nameEn: 'Sacred Stigma',
    focus: '圣痕、光印、神性残片和被选中的身体证据统摄角色',
    focusEn: 'stigmata, light marks, divine remnants, and chosen-body evidence governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'body', 'face', 'material'],
    defaultControls: ['sacred_stigma', 'divine_remnant', 'chosen_body'],
    items: [
      s('palm_light_stigma', '掌心光圣痕', 'Palm Light Stigma', 'symbol', '圣性集中在掌心小光印', 'sacredness concentrated in small palm light mark', ['掌心光点', '手势展示', '微弱发光', '无大光效', '身体清楚'], ['palm light mark', 'display gesture', 'faint glow', 'no huge aura', 'clear body'], '神圣力量优先落在掌心圣痕。', 'Place divine power into palm stigma first.', { ontologyLevel: 3, risk: 'medium' }),
      s('halo_residue_not_aura', '光环残迹非大光效', 'Halo Residue Not Aura', 'symbol', '神性只以残留环痕出现', 'divinity appears only as residual ring trace', ['淡环痕', '头后留白', '低亮度', '边缘不完整', '脸部优先'], ['faint ring trace', 'space behind head', 'low brightness', 'incomplete edge', 'face first'], '光环优先残迹化，不生成满屏神光。', 'Make halo residual, not screen-filling divine glow.', { ontologyLevel: 2 }),
      s('gold_crack_stigma', '金裂圣痕', 'Gold-Crack Stigma', 'material', '裂纹以金色修补表达神性破损', 'cracks repaired in gold express damaged divinity', ['金色细裂', '局部皮肤', '瓷器感', '无血伤', '静止表情'], ['fine gold cracks', 'local skin', 'porcelain feel', 'no wound', 'still expression'], '神性和损伤优先金缮化。', 'Translate divinity and damage into kintsugi-like repair.', { ontologyLevel: 3, risk: 'medium' }),
      s('third_eye_seal', '第三眼封印', 'Third-Eye Seal', 'face', '额头眼以封印符号表达而非真实眼球', 'forehead eye expressed as seal symbol, not literal eyeball', ['额头印', '闭眼符号', '细线', '对称脸', '神秘克制'], ['forehead mark', 'closed-eye symbol', 'fine line', 'symmetrical face', 'restrained mystery'], '第三眼优先符号化。', 'Symbolize third eye first.', { ontologyLevel: 2 }),
      s('sacred_bruise_bloom', '神圣淤花', 'Sacred Bruise Bloom', 'material', '淤青像花一样成为被选中痕迹', 'bruise blooms like flower as chosen trace', ['紫黄轻斑', '花状边', '锁骨或肩', '低饱和', '非暴力感'], ['purple-yellow light mark', 'floral edge', 'collarbone or shoulder', 'low saturation', 'non-violent feel'], '疼痛和神性优先转成神圣淤花。', 'Translate pain and divinity into sacred bruise bloom.', { ontologyLevel: 2 }),
      s('relic_embedded_jewel', '嵌入圣物珠', 'Embedded Relic Jewel', 'prop', '小型圣物像嵌入身体或服装', 'small relic appears embedded in body or garment', ['小宝石', '胸口或额头', '金属座', '无血缘接口', '祭仪感'], ['small jewel', 'chest or forehead', 'metal mount', 'bloodless interface', 'ritual feel'], '圣物和身体融合优先饰件化。', 'Translate relic-body fusion into ornament mount.', { ontologyLevel: 3 }),
      s('chosen_body_number', '被选中编号', 'Chosen-Body Number', 'symbol', '神性身份被编号或刻印为制度证据', 'divine identity numbered or marked as institutional evidence', ['小编号', '圣印旁', '档案感', '冷静神性', '无logo'], ['small number', 'beside sacred mark', 'dossier feel', 'cold divinity', 'no logo'], '神选和制度元素优先编号化。', 'Number chosen-divine and institutional elements first.', { ontologyLevel: 1 }),
      s('light_under_skin', '皮下微光', 'Light Under Skin', 'material', '皮下微光暗示非凡但不破坏皮肤', 'under-skin glow suggests the extraordinary without breaking skin', ['皮下微光', '局部手臂', '低亮度', '柔边', '无能量爆炸'], ['subdermal glow', 'local arm', 'low brightness', 'soft edge', 'no energy blast'], '超自然能量优先降级为皮下微光。', 'Downgrade supernatural energy into subdermal glow.', { ontologyLevel: 3 }),
      s('stigma_as_responsibility', '圣痕即职责', 'Stigma as Responsibility', 'function', '圣痕必须说明职责而非只是装饰', 'stigma must imply duty, not decoration', ['职责符号', '位置清楚', '动作回应', '表情克制', '非炫光'], ['duty symbol', 'clear placement', 'responsive gesture', 'restrained expression', 'not flashy light'], '神性标记必须转成身份责任。', 'Translate divine marks into identity responsibility.', { ontologyLevel: 1 }),
      s('divinity_scale_lock', '神性尺度锁', 'Divinity Scale Lock', 'function', '神性不得把人物变成抽象光团', 'divinity must not turn character into abstract light mass', ['人体优先', '光效微量', '符号局部', '脸部清楚', '身份骨架'], ['body first', 'minimal light', 'local symbol', 'clear face', 'identity skeleton'], '所有神性元素必须保留人体和身份。', 'All divine elements must preserve body and identity.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'demonic_body',
    name: '魔性身体',
    nameEn: 'Demonic Body',
    focus: '魔性张力、禁忌欲望和危险身体边界统摄角色',
    focusEn: 'demonic tension, taboo desire, and dangerous body boundaries governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'face', 'pose', 'costume'],
    defaultControls: ['demonic_body', 'taboo_desire', 'danger_boundary'],
    items: [
      s('demon_tail_shadow', '魔尾影子', 'Demon Tail Shadow', 'symbol', '魔尾以影子出现而非实体默认', 'demon tail appears as shadow instead of default literal tail', ['尾形影子', '脚边弯线', '主体单一', '低对比', '危险暗示'], ['tail-shaped shadow', 'curved line near feet', 'single subject', 'low contrast', 'danger hint'], '魔尾优先影子化。', 'Translate demon tail into shadow first.', { ontologyLevel: 2 }),
      s('black_lip_ritual', '黑唇仪式', 'Black-Lip Ritual', 'face', '魔性通过唇色和表情控制', 'demonic quality controlled through lip color and expression', ['黑唇', '微张口', '冷眼', '低饱和妆', '人脸清楚'], ['black lips', 'slightly parted mouth', 'cold eyes', 'low-saturation makeup', 'clear face'], '魔性欲望优先妆面化。', 'Translate demonic desire into makeup first.', { ontologyLevel: 1 }),
      s('spine_shadow_ridge', '脊影棘线', 'Spine-Shadow Ridge', 'structure', '背部棘感以阴影或衣脊表达', 'spinal ridge feeling expressed by shadow or garment spine', ['背中线', '暗影棘', '衣物凸线', '侧背展示', '无真实骨刺'], ['back centerline', 'dark ridge shadow', 'garment raised line', 'side-back display', 'no literal spikes'], '骨刺和魔性优先服装结构化。', 'Translate spikes and demonic quality into garment structure.', { ontologyLevel: 2 }),
      s('forbidden_skin_script', '禁忌皮肤文字', 'Forbidden Skin Script', 'symbol', '皮肤文字暗示契约和禁忌', 'skin script suggests contract and taboo', ['细小文字', '锁骨或手臂', '低对比墨色', '契约感', '无真实文字logo'], ['tiny script', 'collarbone or arm', 'low-contrast ink', 'contract feeling', 'no real logo text'], '魔法和契约元素优先文字化。', 'Translate magic and contract elements into script marks.', { ontologyLevel: 2 }),
      s('charred_edge_garment', '焦黑衣边', 'Charred Garment Edge', 'wear', '焦黑边表达魔性接触史', 'charred edges express demonic contact history', ['焦黑衣边', '烟灰残留', '下摆或袖口', '干性损耗', '无火焰乱喷'], ['charred garment edge', 'ash residue', 'hem or cuff', 'dry wear', 'no random flames'], '火焰魔性优先留下焦边。', 'Translate demonic fire into charred edges.', { ontologyLevel: 1 }),
      s('seductive_still_threat', '诱惑静止威胁', 'Seductive Still Threat', 'pose', '魔性通过静止、距离和危险吸引力表达', 'demonic quality through stillness, distance, and dangerous allure', ['静止站姿', '眼神邀请', '手指轻抬', '低重心', '危险距离'], ['still stance', 'inviting gaze', 'slightly raised fingers', 'low center', 'dangerous distance'], '魔性优先姿态化，不靠怪物化。', 'Express demonic quality through pose, not monsterization.', { ontologyLevel: 1 }),
      s('contract_collar_mark', '契约项圈痕', 'Contract Collar Mark', 'symbol', '颈部痕迹说明魔性契约', 'neck trace indicates demonic contract', ['颈部细环', '淡红或黑线', '锁扣暗示', '无伤口', '控制关系'], ['thin neck ring', 'pale red or black line', 'clasp hint', 'no wound', 'control relation'], '契约和束缚优先颈部痕迹化。', 'Translate contract and binding into neck trace.', { ontologyLevel: 2 }),
      s('demonic_hand_shadow', '魔性手影', 'Demonic Hand Shadow', 'symbol', '危险手部以影子夸张', 'dangerous hand exaggerated by shadow', ['手影拉长', '指尖尖影', '真实手正常', '侧光', '压迫感'], ['elongated hand shadow', 'pointed fingertip shadow', 'normal real hand', 'side light', 'pressure'], '爪化优先影子化。', 'Translate claws into shadow first.', { ontologyLevel: 1 }),
      s('temptation_prop_anchor', '诱惑道具锚', 'Temptation Prop Anchor', 'prop', '魔性必须通过具体道具锚定', 'demonic quality must be anchored by concrete prop', ['小镜', '黑苹果', '戒指', '手中物', '关系明确'], ['small mirror', 'black apple', 'ring', 'handheld object', 'clear relation'], '抽象诱惑优先道具化。', 'Anchor abstract temptation into props.', { ontologyLevel: 1 }),
      s('demon_not_default_devil', '魔性非默认恶魔', 'Demonic Not Default Devil', 'function', '魔性协议避免红皮角尾三件套', 'demonic protocol avoids red-skin horn-tail default set', ['局部禁忌', '人形身份', '姿态危险', '无默认红皮', '原创符号'], ['local taboo', 'humanoid identity', 'dangerous pose', 'no default red skin', 'original symbol'], '所有魔性元素必须原创、局部、身份化。', 'All demonic elements must be original, local, and identity-based.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'yokai_trace',
    name: '妖怪痕迹',
    nameEn: 'Yokai Trace',
    focus: '妖怪化、民俗痕迹、伪装破绽和日常异样统摄角色',
    focusEn: 'yokai transformation, folklore traces, disguise flaws, and everyday strangeness governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['face', 'costume', 'symbol', 'pose'],
    defaultControls: ['yokai_trace', 'folklore_hint', 'disguise_flaw'],
    items: [
      s('human_disguise_flaw', '人类伪装破绽', 'Human Disguise Flaw', 'symbol', '妖性通过伪装中的小破绽出现', 'yokai nature appears through small flaws in human disguise', ['袖口异样', '影子不对', '眼神过静', '一处破绽', '日常衣物'], ['odd cuff', 'wrong shadow', 'too-still gaze', 'one flaw', 'daily clothing'], '妖怪化优先成为伪装破绽。', 'Translate yokai transformation into disguise flaws first.', { ontologyLevel: 2 }),
      s('fox_lantern_hint', '狐火灯暗示', 'Foxfire Lantern Hint', 'prop', '狐火以小灯或反光出现', 'foxfire appears as small lamp or reflection', ['小灯', '冷蓝或绿光', '手边微光', '无火焰海', '狐性暗示'], ['small lantern', 'cool blue or green light', 'hand-side glow', 'no sea of fire', 'fox hint'], '狐火优先道具化。', 'Translate foxfire into prop first.', { ontologyLevel: 2 }),
      s('mask_half_removed', '半摘妖面', 'Half-Removed Yokai Mask', 'face', '面具显示人和妖之间的边界', 'mask shows boundary between human and yokai', ['半摘面具', '一眼露出', '手扶面具', '表情暧昧', '身份双重'], ['half-removed mask', 'one eye visible', 'hand on mask', 'ambiguous expression', 'dual identity'], '妖怪脸优先面具化。', 'Translate yokai face into mask first.', { ontologyLevel: 2 }),
      s('paper_charm_tail', '符纸尾迹', 'Paper-Charm Tail Trace', 'symbol', '尾巴感由符纸或布条轨迹表达', 'tail feeling expressed by paper charm or cloth-strip trail', ['符纸串', '腰后飘带', '小字', '风向', '无真实尾巴'], ['paper charm string', 'back-waist strip', 'tiny writing', 'wind direction', 'no literal tail'], '尾和封印元素优先符纸化。', 'Translate tail and sealing into paper charms.', { ontologyLevel: 1 }),
      s('old_folklore_cloth', '旧民俗布', 'Old Folklore Cloth', 'costume', '民俗布料承接妖怪传说', 'folkloric fabric carries yokai legend', ['旧布', '地方纹样', '磨损边', '非华丽', '传说感'], ['old cloth', 'local motif', 'worn edge', 'not ornate', 'legend feeling'], '地域妖怪元素优先落在旧布。', 'Place regional yokai elements into old fabric.', { ontologyLevel: 1 }),
      s('mirror_wrong_reflection', '镜中错影', 'Wrong Reflection in Mirror', 'prop', '小镜子显示妖性真相', 'small mirror reveals yokai truth', ['小镜', '错位反影', '手持', '脸部真实', '不画大场景'], ['small mirror', 'misaligned reflection', 'handheld', 'real face', 'no big scene'], '真身显露优先通过小镜道具。', 'Reveal true form through small mirror prop first.', { ontologyLevel: 3 }),
      s('straw_rope_boundary', '注连绳边界', 'Sacred Straw-Rope Boundary', 'symbol', '绳结表示封印和边界', 'rope knot indicates sealing and boundary', ['草绳', '小纸垂', '边界线', '局部缠绕', '民俗封印'], ['straw rope', 'paper streamers', 'boundary line', 'local wrapping', 'folklore seal'], '封印和妖性优先绳结化。', 'Translate sealing and yokai nature into rope knots.', { ontologyLevel: 1 }),
      s('too_old_young_face', '过老过幼脸', 'Ageless Yokai Face', 'face', '年龄错位暗示妖怪非人时间', 'age dissonance suggests nonhuman time', ['年轻脸老眼神', '平静表情', '时间错位', '低妆感', '人脸完整'], ['young face old gaze', 'calm expression', 'time dissonance', 'low makeup', 'intact human face'], '长寿妖性优先年龄错位化。', 'Translate long-lived yokai quality into age dissonance.', { ontologyLevel: 2 }),
      s('threshold_standing_pose', '门槛站姿', 'Threshold Standing Pose', 'pose', '妖怪站在门槛、边界或阴影边缘', 'yokai stands at threshold, boundary, or shadow edge', ['门槛感', '一脚内外', '身体静止', '眼神看人', '空间边界'], ['threshold feeling', 'one foot in/out', 'still body', 'looking at viewer', 'spatial boundary'], '妖怪关系优先通过边界姿态表达。', 'Express yokai relation through boundary pose.', { ontologyLevel: 1 }),
      s('yokai_not_costume_party', '妖性非变装派对', 'Yokai Not Costume Party', 'function', '妖怪化必须像身份和传说，不像派对装扮', 'yokai transformation must read as identity and legend, not party costume', ['传说逻辑', '一处破绽', '民俗锚点', '人形身份', '无廉价套装'], ['legend logic', 'one flaw', 'folklore anchor', 'humanoid identity', 'no cheap costume'], '所有妖怪元素必须有民俗锚点或伪装逻辑。', 'All yokai elements need folklore anchor or disguise logic.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'semi_divine',
    name: '半神身体',
    nameEn: 'Semi-Divine Body',
    focus: '半神血统、英雄残片和凡人与神之间的身体证据统摄角色',
    focusEn: 'demigod lineage, heroic remnants, and body evidence between mortal and divine governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'symbol', 'costume', 'pose'],
    defaultControls: ['semi_divine', 'mortal_divine_boundary', 'heroic_remnant'],
    items: [
      s('mortal_body_divine_mark', '凡身神印', 'Mortal Body Divine Mark', 'symbol', '普通身体只有一处神性标记', 'ordinary body carries only one divine mark', ['一处神印', '普通皮肤', '低亮度', '手势回应', '身份克制'], ['one divine mark', 'ordinary skin', 'low brightness', 'responsive gesture', 'restrained identity'], '半神性优先单点标记化。', 'Make demigod nature a single mark first.', { ontologyLevel: 2 }),
      s('heroic_scar_geometry', '英雄疤痕几何', 'Heroic Scar Geometry', 'material', '疤痕具有神话几何秩序', 'scar carries mythic geometric order', ['几何疤', '胸肩位置', '旧伤', '无血', '仪式感'], ['geometric scar', 'chest-shoulder placement', 'old wound', 'no blood', 'ritual feel'], '英雄创伤优先几何化。', 'Geometrize heroic trauma first.', { ontologyLevel: 2 }),
      s('divine_bone_posture', '神骨站姿', 'Divine-Bone Posture', 'pose', '站姿像承受超出凡人的骨架压力', 'pose reads as carrying more-than-mortal skeletal pressure', ['直立静止', '肩背开阔', '下巴微收', '神性重量', '无夸张动作'], ['upright stillness', 'open shoulders-back', 'slightly tucked chin', 'divine weight', 'no exaggerated action'], '半神威严优先姿态化。', 'Express demigod dignity through posture first.', { ontologyLevel: 1 }),
      s('relic_bloodline_jewel', '血统圣物珠', 'Relic Bloodline Jewel', 'prop', '圣物珠说明血统而非直接变身', 'relic jewel explains lineage instead of direct transformation', ['小珠', '家族或神话符号', '胸针位置', '低光', '血统证据'], ['small jewel', 'family or mythic sign', 'brooch placement', 'low glow', 'lineage evidence'], '神血和继承优先圣物化。', 'Translate divine blood and inheritance into relic.', { ontologyLevel: 1 }),
      s('asymmetric_divine_limb', '不对称神肢', 'Asymmetric Divine Limb', 'ontology', '只有一侧肢体带神性变化', 'only one limb carries divine change', ['单侧手臂', '微光纹', '材料差异', '人体比例', '功能清楚'], ['one arm', 'faint light lines', 'material difference', 'human proportion', 'clear function'], '强神性优先限制在单侧肢体。', 'Restrict strong divinity to one limb first.', { ontologyLevel: 4, risk: 'high' }),
      s('fallen_god_dust', '陨神尘', 'Fallen-God Dust', 'wear', '神性衰退以尘埃和暗金残留出现', 'fading divinity appears as dust and dull-gold residue', ['暗金粉尘', '肩头残留', '旧袍边', '低亮度', '衰退感'], ['dull gold dust', 'shoulder residue', 'old robe edge', 'low brightness', 'decline feeling'], '衰败神性优先变成残留。', 'Translate fallen divinity into residue.', { ontologyLevel: 1 }),
      s('vow_binding_marks', '誓约束痕', 'Vow-Binding Marks', 'symbol', '誓约以身体束痕表达', 'vow expressed through body binding marks', ['细环痕', '手腕或颈部', '对称位置', '誓约感', '无伤口'], ['fine ring marks', 'wrist or neck', 'symmetrical placement', 'vow feeling', 'no wound'], '命运和神约优先束痕化。', 'Translate fate and divine contract into binding marks.', { ontologyLevel: 2 }),
      s('divine_fatigue_face', '神性疲惫脸', 'Divine Fatigue Face', 'face', '半神不是炫光，而是承载过量意义的疲惫', 'demigod is not flash but fatigue from carrying excess meaning', ['疲惫眼神', '干净脸', '轻微黑眼圈', '安静威严', '非英雄海报'], ['tired gaze', 'clean face', 'slight dark circles', 'quiet dignity', 'not hero poster'], '神性压力优先表情化。', 'Translate divine pressure into facial expression.', { ontologyLevel: 1 }),
      s('mortal_tool_divine_use', '凡器神用', 'Mortal Tool Divine Use', 'prop', '普通工具承载神性用途', 'ordinary tool carries divine use', ['普通工具', '小神印', '手握', '功能明确', '无神器模板'], ['ordinary tool', 'small divine mark', 'handheld', 'clear function', 'no artifact template'], '神器冲动优先普通工具神用化。', 'Translate artifact impulse into ordinary tool with divine use.', { ontologyLevel: 1 }),
      s('demigod_not_superhero', '半神非超级英雄', 'Demigod Not Superhero', 'function', '半神协议避免超英制服和满屏能量', 'demigod protocol avoids superhero uniform and full-screen energy', ['凡人骨架', '一处神证', '职责重量', '无超英紧身衣', '身份复杂'], ['mortal skeleton', 'one divine evidence', 'weight of duty', 'no superhero suit', 'complex identity'], '所有半神元素必须落在血统、职责和身体证据。', 'All demigod elements must land in lineage, duty, and body evidence.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'spirit_body',
    name: '灵体附身',
    nameEn: 'Spirit Possession',
    focus: '灵体、附身、透明边界和身体被另一个意志穿过的证据统摄角色',
    focusEn: 'spirit, possession, translucent boundary, and body crossed by another will governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'face', 'pose', 'material'],
    defaultControls: ['spirit_body', 'possession_trace', 'translucent_boundary'],
    items: [
      s('spirit_overlay_shadow', '灵体覆影', 'Spirit Overlay Shadow', 'symbol', '灵体以身体外一层淡影出现', 'spirit appears as a faint layer outside body', ['淡影轮廓', '偏移一寸', '主体清楚', '低透明', '无第二人'], ['faint outline', 'slightly offset', 'clear subject', 'low transparency', 'no second person'], '附身优先覆影化，不生成第二角色。', 'Translate possession into overlay shadow, not second character.', { ontologyLevel: 3 }),
      s('possessed_eye_glaze', '附身眼膜', 'Possessed Eye Glaze', 'face', '附身通过眼膜光和失焦表达', 'possession expressed through eye glaze and defocus', ['眼膜光', '轻微失焦', '脸部安静', '瞳孔可读', '非恐怖白眼'], ['eye glaze', 'slight defocus', 'quiet face', 'readable pupil', 'not horror white eyes'], '灵体控制优先眼神化。', 'Translate spirit control into gaze first.', { ontologyLevel: 2 }),
      s('thread_pulled_posture', '线牵姿态', 'Thread-Pulled Posture', 'pose', '姿态像被不可见线牵引', 'pose reads as pulled by invisible threads', ['腕部上提', '头部偏转', '肩颈僵', '身体仍稳', '意志冲突'], ['raised wrist', 'turned head', 'stiff shoulder-neck', 'stable body', 'will conflict'], '被附身感优先姿态化。', 'Express possession through posture first.', { ontologyLevel: 1 }),
      s('transparent_sleeve_edge', '透明袖边', 'Transparent Sleeve Edge', 'material', '灵体感只在衣物边缘透明化', 'spiritual quality only makes garment edges translucent', ['透明袖边', '淡白边', '身体完整', '低亮度', '无消失全身'], ['translucent cuff edge', 'pale white edge', 'whole body', 'low brightness', 'no full disappearance'], '幽灵化优先衣物边缘化。', 'Translate ghostliness into garment edges first.', { ontologyLevel: 2 }),
      s('spirit_seal_on_back', '背部灵封', 'Spirit Seal on Back', 'symbol', '背部封印说明灵体被控制', 'back seal shows spirit is controlled', ['背部符印', '衣物开口', '小范围', '封印线', '仪式证据'], ['back sigil', 'garment opening', 'small range', 'seal line', 'ritual evidence'], '附身和封印优先落在背部灵封。', 'Place possession and sealing into back spirit seal.', { ontologyLevel: 2 }),
      s('breath_mist_identity', '呼吸雾身份', 'Breath-Mist Identity', 'material', '灵体通过呼吸雾而非大幽灵出现', 'spirit appears through breath mist, not big ghost', ['薄雾呼吸', '口鼻附近', '冷光', '短暂感', '人脸保留'], ['thin breath mist', 'near mouth-nose', 'cool light', 'temporary feel', 'face retained'], '幽灵和寒意优先呼吸雾化。', 'Translate ghost and coldness into breath mist.', { ontologyLevel: 2 }),
      s('borrowed_hand_gesture', '借手手势', 'Borrowed-Hand Gesture', 'pose', '一只手像被另一个意志使用', 'one hand reads as used by another will', ['单手异样', '手指弯曲', '眼神分离', '另一手正常', '主体清楚'], ['one odd hand', 'curved fingers', 'separated gaze', 'other hand normal', 'clear subject'], '附身冲突优先在手势表达。', 'Express possession conflict through hand gesture.', { ontologyLevel: 1 }),
      s('spirit_name_tag', '灵名牌', 'Spirit Name Tag', 'prop', '灵体以姓名牌或小标签锚定', 'spirit anchored by name tag or small label', ['小名牌', '旧字', '细绳', '胸口或手腕', '档案感'], ['small name tag', 'old text', 'thin string', 'chest or wrist', 'archive feeling'], '抽象灵体优先标签化。', 'Anchor abstract spirit with labels.', { ontologyLevel: 1 }),
      s('double_temperature_skin', '双温皮肤', 'Double-Temperature Skin', 'material', '皮肤局部冷热反差说明两种存在共处', 'local warm-cold contrast shows two presences sharing body', ['一侧冷色', '一侧暖肤', '柔边过渡', '局部手臂', '无分尸感'], ['one cool side', 'one warm skin side', 'soft transition', 'local arm', 'no body horror'], '双重存在优先色温化。', 'Translate dual presence into color-temperature contrast.', { ontologyLevel: 2 }),
      s('possession_not_exorcism_scene', '附身非驱魔场景', 'Possession Not Exorcism Scene', 'function', '附身协议服务角色设计，不生成驱魔剧情', 'possession protocol serves character design, not exorcism scene', ['单人主体', '局部灵证', '无多人驱魔', '身份清楚', '版式可读'], ['single subject', 'local spirit evidence', 'no multi-person exorcism', 'clear identity', 'readable board'], '所有附身元素必须留在角色身上。', 'All possession elements must stay on the character.', { ontologyLevel: 2 })
    ]
  },
  {
    slug: 'mythic_prophecy',
    name: '预言标记',
    nameEn: 'Prophecy Mark',
    focus: '预言、命运、神谕和被文本召唤的身体统摄角色',
    focusEn: 'prophecy, fate, oracle, and text-summoned body governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'prop', 'costume', 'pose'],
    defaultControls: ['mythic_prophecy', 'fate_mark', 'oracle_text'],
    items: [
      s('oracle_text_strip', '神谕纸条', 'Oracle Text Strip', 'prop', '预言以小纸条贴在身体或道具上', 'prophecy appears as small strip attached to body or prop', ['纸条', '细小文字', '衣物边', '风中轻动', '无长篇文本'], ['paper strip', 'tiny text', 'garment edge', 'slight wind', 'no long text'], '预言优先道具化，不在画面写大段字。', 'Translate prophecy into small prop, not large on-image text.', { ontologyLevel: 1 }),
      s('fate_thread_between_fingers', '指间命运线', 'Fate Thread Between Fingers', 'prop', '命运线通过手部动作显示', 'fate thread shown through hand action', ['细线', '指间牵引', '手势清楚', '红白线', '低张力'], ['thin thread', 'between fingers', 'clear gesture', 'red-white thread', 'low tension'], '命运和控制元素优先线绳化。', 'Translate fate and control into thread.', { ontologyLevel: 1 }),
      s('sealed_mouth_oracle', '封口神谕', 'Sealed-Mouth Oracle', 'face', '嘴部封印表达不能说出的预言', 'mouth seal expresses unspeakable prophecy', ['口部细封', '纸或线', '眼神说话', '非酷刑', '仪式安静'], ['thin mouth seal', 'paper or thread', 'speaking eyes', 'not torture', 'ritual quiet'], '神谕和沉默优先封口符号化。', 'Translate oracle and silence into mouth seal symbol.', { ontologyLevel: 2 }),
      s('star_map_birthmark', '星图胎记', 'Star-Map Birthmark', 'symbol', '胎记像星图说明命运', 'birthmark like star map explains fate', ['小星点', '肩背或手臂', '连线', '低亮度', '皮肤完整'], ['small star dots', 'shoulder-back or arm', 'connecting lines', 'low brightness', 'intact skin'], '星体和命运优先胎记化。', 'Translate astral fate into birthmark first.', { ontologyLevel: 2 }),
      s('prophecy_weight_pose', '预言重量姿态', 'Prophecy-Weight Pose', 'pose', '姿态像背负已知命运', 'pose reads as carrying known fate', ['低头', '肩背沉', '手握纸条', '静止感', '非英雄化'], ['lowered head', 'heavy shoulders', 'holding strip', 'stillness', 'not heroic'], '命运压力优先姿态化。', 'Express fate pressure through posture.', { ontologyLevel: 1 }),
      s('oracle_eye_annotation', '神谕眼注记', 'Oracle Eye Annotation', 'face', '眼周小标记表示看见命运', 'small eye-area mark indicates seeing fate', ['眼周符号', '细线', '一侧眼', '低对比', '眼神清楚'], ['eye-area sign', 'fine line', 'one eye', 'low contrast', 'clear gaze'], '预知和眼部异变优先注记化。', 'Translate foresight and eye alteration into annotations.', { ontologyLevel: 2 }),
      s('fate_knot_belt', '命运结腰带', 'Fate-Knot Belt', 'costume', '腰带绳结承担命运约束', 'belt knot carries fate binding', ['绳结腰带', '多结点', '垂线', '行走限制', '仪式功能'], ['knotted belt', 'multiple knots', 'hanging line', 'movement limit', 'ritual function'], '命运束缚优先服装化。', 'Translate fate binding into costume.', { ontologyLevel: 1 }),
      s('broken_prophecy_tablet', '破碎预言片', 'Broken Prophecy Tablet', 'prop', '破片让预言成为可携带物', 'fragment makes prophecy portable', ['小石片', '断裂边', '刻痕', '手持', '古老感'], ['small tablet shard', 'broken edge', 'engraving trace', 'handheld', 'ancient feel'], '宏大预言优先压缩成手持碎片。', 'Compress grand prophecy into handheld shard.', { ontologyLevel: 1 }),
      s('future_written_on_cloth', '未来写在衣上', 'Future Written on Cloth', 'symbol', '衣物上的少量符号像未来记录', 'small symbols on clothing read as future record', ['衣物小字', '边缘排布', '不成段落', '抽象文字', '身份证据'], ['tiny garment text', 'edge arrangement', 'not paragraphs', 'abstract writing', 'identity evidence'], '命运文本优先抽象纹样化。', 'Abstract fate text into motif.', { ontologyLevel: 1 }),
      s('prophecy_not_text_wall', '预言非文字墙', 'Prophecy Not Text Wall', 'function', '预言协议不得生成大量画面文字', 'prophecy protocol must not generate lots of image text', ['小符号', '道具承载', '动作回应', '无大段文字', '身份优先'], ['small symbols', 'prop carrier', 'gesture response', 'no large text blocks', 'identity first'], '所有预言信息必须压缩成符号、道具或姿态。', 'Compress all prophecy information into symbol, prop, or pose.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'liminal_beauty',
    name: '临界美感',
    nameEn: 'Liminal Beauty',
    focus: '人、兽、神、妖之间的临界吸引力和不稳定美感统摄角色',
    focusEn: 'liminal allure and unstable beauty between human, beast, divine, and yokai governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['face', 'pose', 'silhouette', 'costume'],
    defaultControls: ['liminal_beauty', 'unstable_allure', 'boundary_identity'],
    items: [
      s('almost_human_face', '几乎人脸', 'Almost-Human Face', 'face', '脸几乎完全是人，只留一处非人线索', 'face is almost fully human with one nonhuman cue', ['人脸优先', '一处异常', '眼神过静', '低妆感', '记忆点'], ['human face first', 'one anomaly', 'too-still gaze', 'low makeup', 'memory point'], '类人怪物优先保留人脸。', 'Humanoid monsters should preserve human face first.', { ontologyLevel: 2 }),
      s('beauty_with_warning_sign', '美中警示符', 'Beauty with Warning Sign', 'symbol', '吸引力旁边必须有危险标记', 'allure must be paired with a danger sign', ['美丽脸', '小警示', '颈侧标记', '克制微笑', '危险距离'], ['beautiful face', 'small warning', 'neck-side mark', 'restrained smile', 'dangerous distance'], '魅惑和危险优先成对出现。', 'Pair allure and danger first.', { ontologyLevel: 1 }),
      s('liminal_silhouette_gap', '临界剪影缺口', 'Liminal Silhouette Gap', 'structure', '剪影有一处空缺或异常边界', 'silhouette has one gap or abnormal boundary', ['肩边缺口', '衣摆断裂', '头部留白', '一处异样', '轮廓清楚'], ['shoulder gap', 'broken hem', 'head negative space', 'one oddity', 'clear silhouette'], '边界不稳优先剪影化。', 'Translate unstable boundary into silhouette.', { ontologyLevel: 1 }),
      s('ritual_beauty_distance', '仪式美的距离', 'Ritual Beauty Distance', 'pose', '姿态美丽但保持不可接近距离', 'pose is beautiful but keeps inaccessible distance', ['正面静立', '手势收敛', '眼神远', '衣物边界', '不可接近'], ['frontal stillness', 'contained gesture', 'distant gaze', 'garment boundary', 'inaccessible'], '神妖美感优先距离化。', 'Make divine-yokai beauty distant first.', { ontologyLevel: 1 }),
      s('soft_monster_trait', '柔性怪物特征', 'Soft Monster Trait', 'ontology', '怪物特征必须柔化成可被观看的设计点', 'monster trait must soften into watchable design point', ['柔软边', '局部异常', '低对比', '人形比例', '非猎奇'], ['soft edge', 'local anomaly', 'low contrast', 'humanoid proportion', 'not shock'], '人形怪物特征优先柔化。', 'Soften humanoid monster traits first.', { ontologyLevel: 3 }),
      s('ambiguous_age_aura', '暧昧年龄气场', 'Ambiguous Age Aura', 'face', '年龄感有轻微错位形成非人时间', 'slightly displaced age impression creates nonhuman time', ['年轻或成熟错位', '清醒眼神', '干净脸', '时间感', '不写实但可信'], ['young/mature dissonance', 'clear gaze', 'clean face', 'time feeling', 'nonreal but credible'], '长生和妖性优先年龄暧昧化。', 'Translate longevity and yokai quality into age ambiguity.', { ontologyLevel: 2 }),
      s('boundary_hand_pose', '边界手势', 'Boundary Hand Pose', 'pose', '手势像邀请又像拒绝', 'hand gesture reads as both invitation and refusal', ['手掌半开', '手指弯曲', '靠近身体', '眼神不动', '双重信号'], ['half-open palm', 'curved fingers', 'near body', 'still gaze', 'double signal'], '临界关系优先手势化。', 'Translate liminal relation into hand gesture.', { ontologyLevel: 1 }),
      s('ornament_as_warning', '饰物即警告', 'Ornament as Warning', 'prop', '美丽饰物同时说明危险来源', 'beautiful ornament also explains danger source', ['精致饰物', '尖锐边', '小符号', '贴近皮肤', '危险美'], ['refined ornament', 'sharp edge', 'small sign', 'near skin', 'dangerous beauty'], '装饰和危险必须合并。', 'Merge ornament and danger.', { ontologyLevel: 1 }),
      s('inhuman_grace_walk', '非人优雅步态', 'Inhuman Grace Walk', 'pose', '步态优雅但略不符合日常人体节奏', 'gait is elegant but slightly off ordinary human rhythm', ['慢步', '脚尖轻', '上身静', '节奏异样', '不夸张'], ['slow walk', 'light toes', 'still upper body', 'odd rhythm', 'not exaggerated'], '非人性优先通过步态表现。', 'Express inhumanity through gait first.', { ontologyLevel: 1 }),
      s('liminal_not_generic_fantasy', '临界非泛奇幻', 'Liminal Not Generic Fantasy', 'function', '临界美感协议避免通用精灵/恶魔/仙女模板', 'liminal beauty protocol avoids generic elf/demon/fairy templates', ['一处边界', '人形优先', '原创符号', '不套模板', '情绪暧昧'], ['one boundary', 'humanoid first', 'original sign', 'no template', 'ambiguous mood'], '所有临界美感必须有原创边界证据。', 'All liminal beauty must have original boundary evidence.', { ontologyLevel: 2 })
    ]
  }
];

export const MYTHIC_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
