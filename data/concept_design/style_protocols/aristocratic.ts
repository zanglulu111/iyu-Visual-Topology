import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'ARISTOCRATIC';
const ROUTE_NAME = '贵族礼制';
const ROUTE_NAME_EN = 'Aristocratic Etiquette';
const ERAS = ['feudal', 'early_modern', 'modern', 'contemporary', 'timeless'];
const FORBIDS = ['廉价 cosplay 感', '真实王室纹章或真实贵族家徽', '随机街头拼贴', '把贵族感写成宫殿背景', '无阶层逻辑的奢华堆叠'];

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
    slug: 'lineage_code',
    name: '血统识别',
    nameEn: 'Lineage Code',
    focus: '血统、家族、继承关系和阶层识别被系统化',
    focusEn: 'lineage, family, inheritance, and rank recognition made systematic',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'material', 'prop'],
    defaultControls: ['lineage_code', 'fictional_heraldry', 'rank_marker'],
    items: [
      s('fictional_crest_order', '虚构家徽秩序', 'Fictional Crest Order', 'symbol', '一套完全虚构的家徽系统', 'a fully fictional crest system', ['胸前小徽', '袖口暗章', '内衬纹样', '低调金属', '等级位置'], ['small chest crest', 'cuff mark', 'lining motif', 'subtle metal', 'rank placement'], '外来身份优先转成虚构家徽、佩戴位置和等级标识，不使用真实纹章。', 'Translate outside identities into fictional crest, placement, and rank markers, never real heraldry.'),
      s('family_color_discipline', '家族色纪律', 'Family-Color Discipline', 'material', '家族代表色管理全身配色', 'family colors governing the whole palette', ['暗红', '旧金', '深蓝', '低饱和对比', '重复色点'], ['dark red', 'old gold', 'deep navy', 'low contrast', 'repeated color points'], '冲突色彩先降为家族色、衬里色、纹样色或阶层色。', 'Reduce conflicting colors into family color, lining color, motif color, or rank color.'),
      s('quartered_rank_layout', '四分等级构图', 'Quartered Rank Layout', 'structure', '纹章四分法组织服装和符号区域', 'heraldic quartering organizing garment and symbol zones', ['左右分区', '胸前四分格', '袖片呼应', '对称秩序', '克制分色'], ['left-right division', 'quartered chest', 'matched sleeves', 'symmetry', 'restrained color blocking'], '跨风格元素优先放入四分区域，避免随机拼贴。', 'Assign cross-style elements into quartered zones instead of random collage.'),
      s('motto_ribbon_law', '格言缎带法则', 'Motto Ribbon Law', 'symbol', '家族信条被压缩成小型文字缎带', 'family doctrine compressed into small ribbon text', ['细缎带', '短句', '暗金字', '胸前弯带', '边缘卷曲'], ['thin ribbon', 'short motto', 'dark gold letters', 'curved chest band', 'curled edge'], '誓言、组织或人设理念优先变成虚构格言缎带。', 'Translate oath, faction, or persona idea into a fictional motto ribbon.'),
      s('signet_authority', '戒玺签署权', 'Signet Authority', 'symbol', '戒玺代表签署、许可和血统权力', 'signet representing signature, permission, and lineage authority', ['戒玺', '印面', '手部展示', '蜡封痕', '旧金属'], ['signet', 'engraved face', 'hand display', 'wax trace', 'old metal'], '权力和秘密优先集中到手部动作、戒玺和签署痕迹。', 'Concentrate authority and secrecy into hand gesture, signet, and signature trace.'),
      s('hidden_lining_heritage', '内衬继承暗纹', 'Hidden Lining Heritage', 'symbol', '继承信息被藏进衣物内层', 'inheritance information hidden inside garment lining', ['缎面内衬', '翻开衣摆', '暗纹重复', '低光泽', '隐蔽奢华'], ['satin lining', 'opened hem', 'repeated damask', 'low sheen', 'hidden luxury'], '秘密、背叛或副场域优先藏进内衬图案，而不是外露堆叠。', 'Hide secrecy, betrayal, or secondary field inside lining patterns instead of exposed pileup.'),
      s('alliance_emblem_mix', '联姻徽记混合', 'Alliance Emblem Mix', 'symbol', '两个家族符号以礼法方式融合', 'two family signs fused through etiquette', ['双徽并置', '细线连接', '左右异色', '成对饰件', '婚约暗示'], ['paired crests', 'fine connector', 'left-right colors', 'paired ornaments', 'marriage hint'], '双风格融合先变成联姻徽记、双家族配色和成对饰件。', 'Translate dual-style fusion into alliance crests, two-house colors, and paired ornaments.'),
      s('rank_button_protocol', '纽扣等级协议', 'Button-Rank Protocol', 'symbol', '纽扣数量、材质和位置变成阶层代码', 'button count, material, and placement becoming class code', ['成列纽扣', '袖口扣数', '衣襟秩序', '暗金属', '低光泽'], ['button rows', 'cuff count', 'lapel order', 'dark metal', 'low sheen'], '制度差异优先转成扣位、扣数、材质和排列方式。', 'Translate institutional difference into button placement, count, material, and order.'),
      s('beast_as_emblem', '兽形徽记化', 'Beast-as-Emblem', 'symbol', '动物或怪物只作为家族徽记出现', 'animal or monster appearing as family emblem only', ['抽象兽形', '侧面剪影', '刺绣动物', '胸针纹样', '低调轮廓'], ['abstract beast', 'side silhouette', 'embroidered animal', 'brooch motif', 'subtle outline'], '兽化、奇幻或神话元素先降为徽记，不直接改写身体。', 'Reduce beastly, fantasy, or mythic elements into emblems before changing the body.'),
      s('lost_house_mark', '失落家族残印', 'Lost-House Remnant Mark', 'symbol', '没落家族只留下残缺标识', 'fallen house leaving only broken signs', ['半枚徽章', '磨损刺绣', '褪色家族色', '裂纹珐琅', '旧线头'], ['half badge', 'worn embroidery', 'faded family color', 'cracked enamel', 'old thread'], '衰败、废土或失败元素优先成为家族标识的磨损和缺失。', 'Translate decline, wasteland, or defeat into wear and absence on family marks.')
    ]
  },
  {
    slug: 'inheritance_pressure',
    name: '继承压力',
    nameEn: 'Inheritance Pressure',
    focus: '祖传物、债务、记忆和继承资格支配角色',
    focusEn: 'heirlooms, debt, memory, and inheritance rights governing the character',
    defaultKind: 'prop',
    defaultAffects: ['prop', 'symbol', 'pose', 'costume'],
    defaultControls: ['heirloom_logic', 'inheritance_pressure', 'object_memory'],
    items: [
      s('heirloom_governance', '祖传遗物统摄', 'Heirloom Governance', 'prop', '祖传物成为身份和压力中心', 'heirloom as the center of identity and pressure', ['旧首饰', '贴身携带', '手部保护', '磨损盒子', '沉默展示'], ['old jewelry', 'carried close', 'protective hand', 'worn case', 'silent display'], '外来元素优先变成遗物的材质、裂痕、保存方式和佩戴姿态。', 'Translate outside elements into heirloom material, cracks, storage, and wearing posture.'),
      s('pocket_watch_time_rule', '怀表时间规训', 'Pocket-Watch Time Rule', 'prop', '时间、家训和命运被怀表化', 'time, family discipline, and fate pocket-watch translated', ['怀表链', '看表手势', '旧黄铜', '划痕表盖', '停顿姿态'], ['watch chain', 'checking gesture', 'old brass', 'scratched cover', 'paused stance'], '时空和命运信息优先转成怀表、链条、停顿动作和旧金属。', 'Translate time-space and fate into watch, chain, pause, and old metal.'),
      s('key_permission_system', '钥匙许可系统', 'Key-Permission System', 'prop', '钥匙象征可进入和不可进入的阶层空间', 'keys symbolizing permitted and forbidden class spaces', ['长柄钥匙', '腰侧挂件', '钥匙圈', '磨亮齿口', '手握姿态'], ['long key', 'waist charm', 'key ring', 'polished teeth', 'hand grip'], '入口、权限和秘密优先成为钥匙系统，不画复杂场景。', 'Translate access, permission, and secrets into key systems, not complex scenery.'),
      s('sealed_family_secret', '密封家族秘密', 'Sealed Family Secret', 'prop', '信件、蜡封和盒子压住不可说的继承秘密', 'letter, wax seal, and case suppressing unspeakable inheritance secret', ['蜡封', '信盒', '丝带', '旧纸边', '贴身收纳'], ['wax seal', 'letter case', 'ribbon', 'old paper edge', 'close storage'], '阴谋、情书、诏令或诅咒优先封存为信盒与蜡封。', 'Seal plot, love letter, decree, or curse into letter case and wax.'),
      s('pearl_mourning_lineage', '珍珠哀悼血统', 'Pearl-Mourning Lineage', 'symbol', '珍珠把温柔、死亡和阶层连接起来', 'pearls linking tenderness, death, and class', ['旧珍珠', '微黄光泽', '细项链', '耳钉', '保养痕迹'], ['old pearls', 'yellowed sheen', 'thin necklace', 'stud earrings', 'maintenance trace'], '温柔、哀悼或女性权力优先转成旧珍珠秩序。', 'Translate tenderness, mourning, or feminine power into old pearl order.'),
      s('portrait_memory_core', '肖像记忆核心', 'Portrait-Memory Core', 'cultural_image', '亲属肖像让角色被家族记忆观看', 'family portrait making the character watched by memory', ['小肖像', '吊坠开合', '旧画感', '胸前位置', '凝视压力'], ['small portrait', 'opening locket', 'old painting feel', 'chest placement', 'gaze pressure'], '失去的人和历史关系优先压缩成肖像、吊坠和被观看感。', 'Compress lost people and history relation into portrait, locket, and being-watched feeling.'),
      s('estate_debt_contract', '地产债务契约', 'Estate-Debt Contract', 'symbol', '土地、产权和债务成为贵族压力来源', 'land, property, and debt as aristocratic pressure source', ['契据', '封皮', '红线捆扎', '印章', '硬纸边'], ['deed', 'cover', 'red cord binding', 'seal', 'stiff paper edge'], '资产、法律和经济冲突优先变成契约、印章和文书权力。', 'Translate assets, law, and economic conflict into contract, seal, and document power.'),
      s('previous_owner_trace', '前任主人痕迹', 'Previous-Owner Trace', 'material', '身体与物件都带着上一代使用痕迹', 'body and objects carrying traces of previous owner', ['旧手套', '指尖磨损', '袖口褶皱', '保养痕', '谨慎佩戴'], ['old gloves', 'worn fingertips', 'cuff creases', 'maintenance trace', 'careful wearing'], '触碰、禁忌和阶层距离优先转成旧物上的身体痕迹。', 'Translate touch, taboo, and class distance into bodily traces on old objects.'),
      s('cane_authority_axis', '手杖权威轴', 'Cane Authority Axis', 'prop', '手杖建立垂直权力和身体节奏', 'cane creating vertical authority and body rhythm', ['银柄', '黑木杖', '手掌压握', '杖尖磨损', '直立姿态'], ['silver head', 'black cane', 'pressed palm', 'worn tip', 'upright stance'], '武器、权杖或行动限制优先折成礼仪手杖。', 'Fold weapon, scepter, or mobility limit into ceremonial cane.'),
      s('broken_legacy_fracture', '破损遗产裂缝', 'Broken-Legacy Fracture', 'symbol', '遗物破损揭示家族断裂', 'damaged heirloom revealing family fracture', ['裂纹珠宝', '断链', '修补线', '缺角盒子', '紧握姿态'], ['cracked jewel', 'broken chain', 'repair thread', 'chipped case', 'tight grip'], '创伤、背叛或战争优先成为遗产的破损和修补。', 'Translate trauma, betrayal, or war into damage and repair on legacy objects.')
    ]
  },
  {
    slug: 'court_body_law',
    name: '宫廷身体法',
    nameEn: 'Court Body Law',
    focus: '身体礼仪、观看关系和克制权力统摄姿态',
    focusEn: 'body etiquette, gaze relation, and restrained authority governing posture',
    defaultKind: 'pose',
    defaultAffects: ['pose', 'silhouette', 'symbol', 'costume'],
    defaultControls: ['court_body', 'etiquette_pose', 'restrained_power'],
    items: [
      s('vertical_spine_discipline', '垂直脊背纪律', 'Vertical-Spine Discipline', 'pose', '礼制训练出的身体中轴', 'body axis trained by etiquette', ['直背', '肩颈克制', '下巴平稳', '手臂收拢', '静止中心'], ['straight back', 'restrained neck', 'steady chin', 'gathered arms', 'still center'], '权力和紧张感优先转成脊背垂直度和身体中轴。', 'Translate power and tension into spinal verticality and bodily axis.'),
      s('lowered_gaze_hierarchy', '垂眼阶层距离', 'Lowered-Gaze Hierarchy', 'pose', '半垂眼神制造不平等观看关系', 'lowered gaze creating unequal viewing relation', ['半垂眼', '不直视', '眼睑阴影', '侧脸', '冷静面部'], ['lowered eyes', 'no direct stare', 'eyelid shadow', 'profile', 'calm face'], '傲慢、悲伤或秘密优先表现为视线高度。', 'Express arrogance, sadness, or secrecy through gaze height.'),
      s('gloved_touch_protocol', '手套触碰礼法', 'Gloved-Touch Protocol', 'pose', '手套让触碰变成阶层动作', 'gloves making touch a class gesture', ['白手套', '指尖轻触', '手背外露', '端杯手势', '压信动作'], ['white gloves', 'light fingertip touch', 'hand-back display', 'cup gesture', 'pressing letter'], '触碰、拒绝或命令优先转成手套手势。', 'Translate touch, refusal, or command into gloved-hand gestures.'),
      s('bow_depth_calculus', '鞠躬深度计算', 'Bow-Depth Calculus', 'pose', '低头幅度体现等级和外交', 'bow depth expressing rank and diplomacy', ['轻微低头', '肩线不塌', '单手收腹', '视线保留', '礼仪距离'], ['slight bow', 'shoulder held', 'one hand near abdomen', 'reserved gaze', 'etiquette distance'], '服从、试探或外交元素优先变成低头幅度。', 'Translate obedience, probing, or diplomacy into bow depth.'),
      s('restrained_smile_mask', '克制微笑面具', 'Restrained-Smile Mask', 'pose', '微笑被礼仪压住', 'smile suppressed by etiquette', ['嘴角微动', '眼神冷静', '面部不展开', '下巴稳定', '距离感'], ['slight mouth corner', 'calm eyes', 'unopened face', 'steady chin', 'distance'], '喜悦、讽刺或危险优先压缩成克制微笑。', 'Compress joy, irony, or danger into a restrained smile.'),
      s('fan_concealment_law', '折扇遮面法', 'Fan-Concealment Law', 'pose', '遮挡让表情和欲望保持不完整', 'concealment keeping expression and desire incomplete', ['折扇', '半遮嘴角', '手腕角度', '眼神外露', '细长扇骨'], ['folding fan', 'half-hidden mouth', 'wrist angle', 'exposed eyes', 'thin ribs'], '秘密、诱惑或警戒优先转成局部遮挡。', 'Translate secrecy, allure, or caution into partial concealment.'),
      s('measured_step_etiquette', '礼步尺度', 'Measured-Step Etiquette', 'pose', '步幅被礼法管理', 'stride governed by etiquette', ['小步', '裙摆控制', '脚尖方向', '身体不晃', '慢速移动'], ['small steps', 'controlled hem', 'toe direction', 'stable body', 'slow movement'], '动作、逃离或巡逻元素优先减速为礼步。', 'Slow action, escape, or patrol into measured steps.'),
      s('turned_shoulder_refusal', '侧肩拒绝', 'Turned-Shoulder Refusal', 'pose', '侧肩姿态制造礼貌防御', 'turned shoulder creating polite defense', ['肩部侧转', '头部微回', '手臂遮挡', '衣领强调', '半开放身体'], ['turned shoulder', 'head slightly back', 'arm block', 'collar emphasis', 'half-open body'], '拒绝、防御或诱惑优先表现为侧肩角度。', 'Express refusal, defense, or allure as shoulder angle.'),
      s('throne_body_without_throne', '无椅王座身体', 'Throne Body Without Throne', 'pose', '没有王座也形成统治中心', 'ruling center without an actual throne', ['正面凝固', '肩部展开', '手放中心', '低速呼吸', '静止权力'], ['frontal stillness', 'opened shoulders', 'hands centered', 'slow breath', 'still authority'], '王权、领导或神性元素优先转成身体中心感，不画王座背景。', 'Translate royalty, leadership, or divinity into bodily centrality, not throne scenery.'),
      s('portrait_stance_protocol', '肖像画站姿协议', 'Portrait-Stance Protocol', 'cultural_image', '角色像从贵族肖像中被提取出来', 'character extracted from aristocratic portraiture', ['三分之二侧身', '一手扶物', '衣料展示', '平静凝视', '道具在旁'], ['three-quarter body', 'one hand resting', 'fabric display', 'calm gaze', 'prop nearby'], '历史、身份和财富优先整理成肖像画式站姿。', 'Organize history, identity, and wealth into portrait-painting stance.')
    ]
  },
  {
    slug: 'old_money_restraint',
    name: '旧钱克制',
    nameEn: 'Old-Money Restraint',
    focus: '无标识材料、低对比和保养秩序压住炫耀',
    focusEn: 'logo-free materials, low contrast, and maintenance order suppressing display',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'pose', 'symbol'],
    defaultControls: ['old_money', 'quiet_luxury', 'maintenance_order'],
    items: [
      s('logo_free_wealth', '无标识财富', 'Logo-Free Wealth', 'material', '昂贵但不直接展示的材料系统', 'expensive material system without direct display', ['羊绒', '细皮革', '无 logo', '低饱和', '干净边缘'], ['cashmere', 'fine leather', 'no logo', 'low saturation', 'clean edge'], '奢华元素必须降噪成材料质量和保养痕迹。', 'Reduce luxury into material quality and maintenance trace.'),
      s('low_contrast_class', '低对比阶层色', 'Low-Contrast Class Palette', 'material', '低对比色形成稳定阶层感', 'low contrast colors creating stable class feeling', ['灰米色', '暗海军蓝', '橄榄灰', '奶油白', '小色差'], ['grey beige', 'dark navy', 'olive grey', 'cream white', 'small color shifts'], '鲜艳或超现实色彩优先降到旧钱低对比体系。', 'Lower vivid or surreal colors into old-money low contrast.'),
      s('maintenance_as_status', '保养即身份', 'Maintenance as Status', 'material', '长期维护本身成为阶层证据', 'long-term maintenance as class evidence', ['擦亮皮鞋', '修补细线', '熨烫折线', '无灰尘', '旧而干净'], ['polished shoes', 'fine repair', 'ironed crease', 'dustless', 'old but clean'], '损耗必须可控、被维护，不变脏乱废土。', 'Damage must be controlled and maintained, not messy wasteland.'),
      s('quiet_jewelry_value', '安静珠宝价值', 'Quiet-Jewelry Value', 'symbol', '小而真材实料的饰物建立价值感', 'small real-material jewelry establishing value', ['小耳钉', '细项链', '旧戒指', '非闪耀光泽', '局部金属'], ['small studs', 'thin necklace', 'old ring', 'non-flashy shine', 'local metal'], '财富和欲望只以小体量高材质出现。', 'Let wealth and desire appear as small high-material details.'),
      s('private_school_cut', '私校剪裁', 'Private-School Cut', 'structure', '制服化精裁带出阶层训练', 'uniform-like tailoring revealing class training', ['合身夹克', '硬领', '百褶暗示', '干净袜鞋', '端正站姿'], ['fitted jacket', 'stiff collar', 'pleat hint', 'clean socks and shoes', 'proper stance'], '青春、学院或职业元素优先进入私校式剪裁纪律。', 'Translate youth, academy, or profession into private-school tailoring discipline.'),
      s('country_house_weekend', '庄园周末秩序', 'Country-House Weekend Order', 'cultural_image', '休闲仍保留继承阶层的服装逻辑', 'leisure still keeping inherited-class clothing logic', ['粗花呢', '针织衫', '猎装口袋', '皮靴', '旧车感'], ['tweed', 'knitwear', 'field pockets', 'leather boots', 'old car feel'], '户外、乡村或行动元素优先贵族休闲化。', 'Translate outdoor, rural, or action elements into aristocratic leisure.'),
      s('expensive_boredom', '昂贵无聊感', 'Expensive Boredom', 'pose', '富足后的情绪疲倦成为气质', 'emotional fatigue after wealth becoming aura', ['放空眼神', '松弛肩线', '手部无事', '低能量站姿', '干净疲惫'], ['vacant gaze', 'relaxed shoulder', 'idle hands', 'low-energy stance', 'clean fatigue'], '情绪冲突优先压低成昂贵、安静、无聊的距离感。', 'Lower emotional conflict into expensive quiet boredom.'),
      s('inherited_taste_filter', '继承品味滤镜', 'Inherited-Taste Filter', 'function', '所有细节先经过家族品味筛选', 'all details filtered through family taste', ['少配件', '材料统一', '旧物优先', '颜色克制', '无流行爆点'], ['few accessories', 'unified materials', 'old objects first', 'restrained color', 'no trend blast'], '外来风格必须被旧钱品味筛选，保留一两个可解释重点。', 'Filter outside style through old-money taste, keeping one or two explainable accents.'),
      s('soft_power_distance', '软权力距离', 'Soft-Power Distance', 'pose', '不靠夸张姿态也能形成权力感', 'authority without exaggerated posture', ['安静正面', '少表情', '缓慢动作', '不急不抢', '空间感'], ['quiet frontal body', 'little expression', 'slow movement', 'unhurried', 'spatial distance'], '战斗、明星或仪式元素优先转成低声量软权力。', 'Translate combat, celebrity, or ritual elements into low-volume soft power.'),
      s('no_new_money_rule', '去新贵规则', 'No-New-Money Rule', 'function', '删除显摆式财富信号', 'deleting showy wealth signals', ['无大 logo', '无夸张闪钻', '无暴发配色', '微妙材质', '旧物可信'], ['no big logo', 'no loud rhinestones', 'no nouveau riche palette', 'subtle material', 'credible old objects'], '过亮、过新、过多的元素必须降噪或转入内衬。', 'Tone down too-bright, too-new, too-many elements or move them into lining.')
    ]
  },
  {
    slug: 'court_institution',
    name: '宫廷制度',
    nameEn: 'Court Institution',
    focus: '宫廷、官职、文书和礼仪程序构成身份机器',
    focusEn: 'court, office, documents, and etiquette procedures forming identity machine',
    defaultKind: 'function',
    defaultAffects: ['costume', 'symbol', 'prop', 'pose'],
    defaultControls: ['court_institution', 'document_power', 'procedure'],
    items: [
      s('edict_body', '诏令身体', 'Edict Body', 'symbol', '命令被穿在身上而不是只拿在手里', 'decree worn on the body rather than just held', ['封条', '卷纸边', '腰侧文书', '严肃表情', '硬挺衣片'], ['seal strip', 'paper edge', 'waist document', 'serious face', 'stiff panel'], '任务、命令或诅咒优先文书化并贴近身体。', 'Document mission, command, or curse and place it close to the body.'),
      s('seal_authority_protocol', '印信权力协议', 'Seal-Authority Protocol', 'prop', '印章管理许可、行政和仪式权力', 'seal governing permission, administration, and ritual authority', ['印章', '朱砂痕', '硬盒', '手掌压印', '红色点'], ['seal', 'vermilion mark', 'hard case', 'pressing palm', 'red point'], '权力、契约或魔法先变成印信程序。', 'Turn power, contract, or magic into seal procedure first.'),
      s('secret_token_permission', '密探腰牌许可', 'Secret-Token Permission', 'symbol', '腰牌定义隐秘身份和通行权限', 'waist token defining covert identity and access', ['腰牌', '挂绳', '半遮外衣', '刻字', '腰侧位置'], ['waist token', 'cord', 'half-covered coat', 'engraving', 'waist placement'], '侦探、战斗或皇权元素优先成为腰侧权限标记。', 'Translate detective, combat, or imperial elements into waist-side permission marks.'),
      s('ledger_control_system', '账册支配系统', 'Ledger-Control System', 'prop', '名单、账册和档案形成隐形统治', 'lists, ledgers, and archives forming invisible rule', ['账册', '姓名列', '手指点名', '细绳书签', '冷静表情'], ['ledger', 'name columns', 'finger pointing', 'string bookmark', 'calm face'], '管理、监视或金融元素优先成为账册权力。', 'Translate management, surveillance, or finance into ledger power.'),
      s('robe_as_office', '官服即职位', 'Robe as Office', 'structure', '衣服结构直接代表官职和制度', 'garment structure directly representing office and institution', ['硬挺袍服', '方形前片', '腰带', '直线袖', '克制步态'], ['stiff robe', 'square front panel', 'belt', 'straight sleeve', 'restrained gait'], '职业和身份信息优先进入官服结构，不另堆装饰。', 'Put profession and identity into official garment structure, not extra decoration.'),
      s('archive_conspiracy', '卷宗阴谋感', 'Archive Conspiracy', 'cultural_image', '政治危险被压进文书和沉默姿态', 'political danger compressed into documents and silence', ['红绳卷宗', '半露文件', '沉默眼神', '暗袋', '手部压住'], ['red-string file', 'half-visible document', 'silent gaze', 'hidden pocket', 'pressing hand'], '阴谋、谍报或犯罪元素优先档案化。', 'Archive-translate conspiracy, espionage, or crime.'),
      s('court_assassin_formality', '宫廷刺客礼制', 'Court-Assassin Formality', 'cultural_image', '杀意被礼仪和制度衣装克制', 'killing intent restrained by etiquette and institutional dress', ['硬挺外衣', '隐藏短刃暗示', '卷宗', '冷眼', '安静手势'], ['stiff outerwear', 'hidden blade hint', 'archive bundle', 'cold eyes', 'quiet gesture'], '暴力元素必须先行政化、礼制化、隐藏化。', 'Administrative-, etiquette-, and concealment-translate violence first.'),
      s('petition_queue_logic', '请愿队列逻辑', 'Petition-Queue Logic', 'function', '身体像处在等待审理的制度队列中', 'body as if waiting inside a petition queue', ['双手持纸', '站位收窄', '低头等待', '旧文书', '压抑紧张'], ['holding paper', 'narrow stance', 'lowered waiting', 'old document', 'suppressed tension'], '弱势、请求或焦虑优先变成请愿姿态。', 'Translate vulnerability, request, or anxiety into petition posture.'),
      s('imperial_black_red_order', '皇权黑红秩序', 'Imperial Black-Red Order', 'material', '黑红色把权力、危险和程序统一', 'black-red unifying power, danger, and procedure', ['黑外层', '红内衬', '朱砂点', '暗金边', '严肃轮廓'], ['black outer layer', 'red lining', 'vermilion point', 'dark gold edge', 'serious silhouette'], '危险和仪式色彩优先统一为黑红制度配色。', 'Unify danger and ritual color into black-red institutional palette.'),
      s('bureaucratic_majesty', '官僚威严', 'Bureaucratic Majesty', 'function', '威严来自程序、编号和档案，而非王冠', 'majesty coming from procedure, numbers, and archives, not crown', ['编号标签', '封存袋', '文书夹', '硬领', '少表情'], ['number tag', 'sealed pouch', 'document folder', 'stiff collar', 'little expression'], '现代、科幻或历史制度元素优先转成官僚威严。', 'Translate modern, sci-fi, or historical institution into bureaucratic majesty.')
    ]
  },
  {
    slug: 'servant_class_contrast',
    name: '仆役阶层反差',
    nameEn: 'Servant Class Contrast',
    focus: '服务身份、高级材料和阶层距离形成反差',
    focusEn: 'service identity, expensive material, and class distance creating contrast',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'pose', 'symbol'],
    defaultControls: ['service_class', 'uniform_luxury', 'class_contrast'],
    items: [
      s('luxury_service_uniform', '奢华服务制服', 'Luxury Service Uniform', 'function', '服务制服使用贵族材料但保持低位身份', 'service uniform using aristocratic material while keeping lower rank', ['深色制服', '银扣', '白边袖口', '直背', '低视线'], ['dark uniform', 'silver buttons', 'white cuff edge', 'straight back', 'lower gaze'], '职业和阶层冲突优先转成高级服务制服。', 'Translate profession and class conflict into luxury service uniform.'),
      s('white_glove_labor_code', '白手套劳动码', 'White-Glove Labor Code', 'pose', '洁净手套承载劳动和禁忌触碰', 'clean gloves carrying labor and taboo touch', ['白手套', '托举动作', '绷紧手指', '整洁袖口', '服务距离'], ['white gloves', 'carrying gesture', 'tense fingers', 'clean cuffs', 'service distance'], '劳动、供奉或危险物优先由白手套处理。', 'Let white gloves handle labor, offering, or dangerous objects.'),
      s('tray_axis_protocol', '托盘身体轴', 'Tray-Body Axis', 'pose', '托盘让身体形成服务轴线', 'tray creating a service axis in the body', ['托盘', '单手平衡', '肩部稳定', '低视线', '小步移动'], ['tray', 'one-hand balance', 'stable shoulder', 'lower gaze', 'small steps'], '道具、圣物或技术设备优先被托盘化。', 'Tray-translate props, relics, or technical devices.'),
      s('backstairs_access', '后楼梯权限', 'Backstairs Access', 'prop', '仆役动线拥有隐秘进入权', 'servant route having covert access', ['钥匙串', '腰侧挂环', '静音布带', '磨亮钥匙', '侧身移动'], ['keyring', 'waist ring', 'silent cloth strap', 'polished keys', 'sideways movement'], '秘密通道、潜入或后勤系统优先转成后楼梯权限。', 'Translate secret route, infiltration, or logistics into backstairs access.'),
      s('laundered_obedience', '浆洗服从', 'Laundered Obedience', 'material', '清洗和熨烫维持阶层秩序', 'laundering and ironing maintaining class order', ['硬挺白领', '熨烫线', '无污渍', '袖口白边', '脖颈约束'], ['stiff white collar', 'ironed crease', 'no stain', 'white cuff edge', 'neck constraint'], '洁净、纪律和压抑优先成为浆洗痕迹。', 'Translate cleanliness, discipline, and repression into laundering traces.'),
      s('borrowed_luxury_logic', '借来奢华逻辑', 'Borrowed-Luxury Logic', 'symbol', '角色短暂接触不属于自己的奢华', 'character briefly touches luxury that is not theirs', ['不属于自己的手帕', '旧胸针', '银器反光', '残留香气', '谨慎佩戴'], ['borrowed handkerchief', 'old brooch', 'silver reflection', 'lingering scent', 'careful wearing'], '欲望和财富只作为借来的小碎片出现。', 'Let desire and wealth appear as borrowed fragments only.'),
      s('housekeeper_authority_system', '管家权威系统', 'Housekeeper Authority System', 'cultural_image', '服务体系内部拥有严厉管理权', 'stern authority inside the service system', ['钥匙串', '账本', '深色制服', '直背', '冷静眼神'], ['keyring', 'ledger', 'dark uniform', 'straight back', 'calm gaze'], '管理、惩罚或守密元素优先管家化。', 'Housekeeper-translate management, punishment, or secrecy.'),
      s('polished_low_rank', '擦亮的低位', 'Polished Lower Rank', 'material', '低位身份被维护到近乎完美', 'lower rank maintained almost perfectly', ['黑皮鞋', '鞋尖高光', '整洁裤脚', '低跟', '站立等待'], ['black leather shoes', 'toe highlight', 'neat hem', 'low heel', 'standing wait'], '阶层压迫和职业训练优先落到鞋履维护。', 'Place class pressure and occupational training into shoe maintenance.'),
      s('servant_secret_observer', '仆役秘密观察者', 'Servant Secret Observer', 'cultural_image', '低位身份反而拥有观察权', 'lower rank holding observational power', ['低头侧目', '半遮表情', '托盘遮挡', '暗袋', '安静站位'], ['lowered side glance', 'half-hidden face', 'tray cover', 'hidden pocket', 'quiet placement'], '侦探、间谍或欲望元素优先变成低位观察。', 'Translate detective, spy, or desire into lower-rank observation.'),
      s('class_distance_choreography', '阶层距离编舞', 'Class-Distance Choreography', 'pose', '站位、视线和手势计算阶层距离', 'placement, gaze, and gesture calculating class distance', ['退半步', '不直视', '手臂收拢', '让位侧身', '沉默礼貌'], ['half step back', 'no direct gaze', 'gathered arms', 'sideways yielding', 'silent politeness'], '社会冲突优先转成距离、站位和礼貌动作。', 'Translate social conflict into distance, placement, and polite action.')
    ]
  },
  {
    slug: 'dynastic_decay',
    name: '王朝衰败',
    nameEn: 'Dynastic Decay',
    focus: '旧制度失光、材料疲态和骄傲残留统摄角色',
    focusEn: 'old-system fading, material fatigue, and remaining pride governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'symbol', 'costume', 'pose'],
    defaultControls: ['dynastic_decay', 'faded_power', 'old_order'],
    items: [
      s('faded_brocade_order', '褪色锦缎秩序', 'Faded-Brocade Order', 'material', '贵族织物失去光泽但仍维持形制', 'aristocratic textile losing shine while keeping form', ['旧锦缎', '暗金线', '磨薄袖口', '褪色花纹', '沉重垂坠'], ['old brocade', 'dark gold thread', 'worn cuff', 'faded motif', 'heavy drape'], '冲突元素优先降解为褪色纹样和旧织物。', 'Degrade conflicts into faded motifs and old textiles.'),
      s('broken_order_sash_law', '破损绶带法', 'Broken-Order Sash Law', 'symbol', '荣誉系统已经破损但斜线仍在', 'honor system broken while the diagonal line remains', ['断裂绶带', '脱线边', '褪色勋章', '斜线仍在', '骄傲站姿'], ['broken sash', 'frayed edge', 'faded medal', 'diagonal remains', 'proud stance'], '战败、失宠和旧荣誉优先成为破损绶带。', 'Translate defeat, disgrace, and old honor into broken sash.'),
      s('dull_gem_afterglow', '失光宝石余辉', 'Dull-Gem Afterglow', 'material', '价值仍在但不再闪耀', 'value remains but no longer shines', ['暗宝石', '松动镶口', '旧戒托', '微裂光泽', '近看才亮'], ['dark gem', 'loose setting', 'old mount', 'cracked sheen', 'shine up close'], '神秘、能源或财富元素优先降为失光宝石。', 'Reduce mystic, energy, or wealth into dull gemstone.'),
      s('old_institution_scrap', '旧制度残章', 'Old-Institution Scrap', 'symbol', '制度只剩残破文件和徽记', 'institution surviving as broken documents and marks', ['残破文书', '半枚印章', '旧徽记', '纸边破损', '夹在衣内'], ['torn document', 'half seal', 'old emblem', 'damaged paper edge', 'tucked inside'], '法律、历史和权力优先成为残章。', 'Translate law, history, and power into institutional scraps.'),
      s('arrogant_fatigue_aura', '傲慢疲态气场', 'Arrogant-Fatigue Aura', 'pose', '衰败中仍不肯低头', 'refusing to bow amid decline', ['眼下疲惫', '下巴仍抬', '肩线僵硬', '嘴角冷淡', '旧衣挺直'], ['tired under-eyes', 'chin still raised', 'stiff shoulders', 'cold mouth', 'old clothes held straight'], '失败、贫困或伤痛优先表现为傲慢疲态。', 'Express failure, poverty, or pain as arrogant fatigue.'),
      s('cracked_portrait_identity', '裂框肖像身份', 'Cracked-Portrait Identity', 'cultural_image', '像从裂开的家族肖像中走出', 'as if stepping out of a cracked family portrait', ['正面静止', '旧画框感', '裂纹暗示', '褪色衣料', '凝固眼神'], ['frontal stillness', 'old-frame feel', 'crack hint', 'faded cloth', 'frozen gaze'], '幽灵、诅咒或历史感优先压缩成裂框肖像。', 'Compress ghostliness, curse, or history into cracked portrait feeling.'),
      s('moth_eaten_nobility', '虫蛀贵族材料', 'Moth-Eaten Nobility', 'material', '昂贵材料被时间咬出细小破洞', 'expensive material bitten by time into small holes', ['羊毛小洞', '袖口薄处', '细补丁', '暗色织纹', '低调破败'], ['small wool holes', 'thin cuffs', 'fine patches', 'dark weave', 'quiet ruin'], '废土或贫困元素必须保留贵族材料来源。', 'Keep wasteland or poverty tied to aristocratic material origin.'),
      s('faded_house_color', '褪色家族色', 'Faded House Color', 'material', '家族色失去鲜艳度', 'house color losing vividness', ['暗红变褐', '蓝色失灰', '旧绿缎带', '色差袖口', '不均匀褪色'], ['dark red to brown', 'blue greying', 'old green ribbon', 'color-shifted cuff', 'uneven fading'], '阵营色和情绪色优先降为褪色家族色。', 'Reduce faction and emotional colors into faded house colors.'),
      s('unpaid_tailoring_trace', '欠账裁缝痕', 'Unpaid-Tailoring Trace', 'symbol', '精裁衣物暴露经济衰败', 'tailored clothes revealing economic decline', ['未换旧扣', '细线修补', '过时版型', '袖长不准', '仍保持熨烫'], ['old buttons not replaced', 'fine repair', 'outdated cut', 'slightly wrong sleeve', 'still ironed'], '债务、贫困或时间错位优先成为裁缝痕迹。', 'Translate debt, poverty, or temporal mismatch into tailoring trace.'),
      s('last_ball_dignity', '最后舞会体面', 'Last-Ball Dignity', 'cultural_image', '旧家族最后一次体面出席', 'final dignified appearance of an old house', ['旧礼服', '修补珠绣', '强撑站姿', '过时裙型', '沉默光泽'], ['old gown', 'repaired beadwork', 'forced upright stance', 'outdated skirt', 'silent sheen'], '末日、告别或失败优先转成最后舞会的体面残留。', 'Translate apocalypse, farewell, or failure into dignity left by a last ball.')
    ]
  },
  {
    slug: 'ceremonial_jewelry',
    name: '礼仪珠宝',
    nameEn: 'Ceremonial Jewelry',
    focus: '佩戴位置、礼仪光泽和阶层符号组织身体',
    focusEn: 'wearing placement, ceremonial shine, and class signs organizing body',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'material', 'costume', 'pose'],
    defaultControls: ['ceremonial_jewelry', 'placement_protocol', 'rank_shine'],
    items: [
      s('tiara_height_authority', '头冠高度权力', 'Tiara-Height Authority', 'structure', '头冠高度管理头部权威', 'tiara height governing head authority', ['小头冠', '发髻固定', '额头留白', '金属尖点', '直颈'], ['small tiara', 'fixed updo', 'forehead space', 'metal points', 'straight neck'], '神性、王权或明星光环优先转成头冠高度。', 'Translate divinity, royalty, or star aura into tiara height.'),
      s('chest_order_chain', '胸前勋链秩序', 'Chest Order-Chain Order', 'symbol', '胸前链饰组织荣誉和等级', 'chest chain organizing honor and rank', ['胸链', '勋章小坠', '左右连接', '礼服固定', '低光金属'], ['chest chain', 'small medal pendant', 'left-right connection', 'fixed formalwear', 'low metal shine'], '荣誉、军功或仪式等级优先转成胸前勋链。', 'Translate honor, service, or ritual rank into chest order chain.'),
      s('waist_ceremony_center', '腰链礼仪中心', 'Waist-Ceremony Center', 'symbol', '腰部链饰形成礼仪中心线', 'waist chain forming ceremonial centerline', ['腰链', '细坠', '腰封边缘', '手部靠近', '低调金属'], ['waist chain', 'thin pendant', 'sash edge', 'hand nearby', 'subtle metal'], '性感、护符或权力元素优先礼制化为腰链。', 'Formalize sensual, talismanic, or power elements into waist chain.'),
      s('mourning_jewel_code', '丧服珠宝码', 'Mourning-Jewel Code', 'symbol', '黑色或暗色珠宝承载哀悼身份', 'dark jewelry carrying mourning identity', ['黑宝石', '暗银', '小胸针', '黑纱', '低光泽'], ['black gem', 'dark silver', 'small brooch', 'black veil', 'low sheen'], '悲伤、幽灵或死亡元素优先转成丧服珠宝。', 'Translate grief, ghostliness, or death into mourning jewelry.'),
      s('ranked_earring_asymmetry', '耳饰等级不对称', 'Ranked-Earring Asymmetry', 'symbol', '耳饰不对称表达等级或秘密', 'earring asymmetry expressing rank or secret', ['单边长坠', '另一侧小钉', '头部倾斜', '颈部留白', '低光金属'], ['single long drop', 'small stud other side', 'tilted head', 'neck space', 'low metal shine'], '身份差异或副风格优先压缩到左右耳饰差异。', 'Compress identity difference or secondary style into left-right earring contrast.'),
      s('glove_ring_display', '手套戒指展示', 'Glove-Ring Display', 'pose', '戒指和手套共同管理手部权力', 'ring and glove jointly governing hand authority', ['手套外戒指', '指尖姿态', '袖口留白', '慢动作', '近景可读'], ['ring over glove', 'fingertip pose', 'cuff space', 'slow gesture', 'close-up readable'], '手部动作、命令和欲望优先进入戒指与手套组合。', 'Translate hand action, command, and desire into ring-glove combination.'),
      s('relic_jewelry_protocol', '圣物珠宝协议', 'Relic-Jewelry Protocol', 'symbol', '珠宝像圣物一样被保存和展示', 'jewelry preserved and displayed like relic', ['小盒', '丝绒内衬', '中央摆放', '轻触手势', '暗金边'], ['small case', 'velvet lining', 'center placement', 'light touch', 'dark gold edge'], '宗教、奇幻或记忆元素优先珠宝圣物化。', 'Relic-jewelry translate religion, fantasy, or memory.'),
      s('overdressed_neckline_power', '过度项饰权力', 'Overdressed-Neckline Power', 'structure', '颈部饰物制造束缚和地位压力', 'neck ornament creating constraint and status pressure', ['多层项链', '贴颈链', '锁骨遮蔽', '金属重量', '直颈姿态'], ['layered necklaces', 'choker', 'covered collarbone', 'metal weight', 'straight neck'], '压迫、财富或欲望优先聚集在颈部秩序。', 'Concentrate pressure, wealth, or desire into neck order.'),
      s('jewelry_as_family_map', '珠宝家族地图', 'Jewelry as Family Map', 'symbol', '饰物位置对应家族关系', 'jewelry placement mapping family relations', ['成套饰物', '左右对应', '不同材质', '继承顺序', '身体节点'], ['matching set', 'left-right correspondence', 'different materials', 'inheritance order', 'body nodes'], '复杂关系优先转成饰物位置和成套逻辑。', 'Translate complex relations into jewelry placement and set logic.'),
      s('forbidden_gem_accent', '禁忌宝石重点', 'Forbidden-Gem Accent', 'ontology', '唯一异常宝石承载危险或超现实', 'one anomalous gem carrying danger or surrealism', ['单颗异色宝石', '贴身位置', '微光', '其他细节克制', '被遮挡'], ['single odd gem', 'close placement', 'subtle glow', 'other details restrained', 'partly hidden'], '超现实元素只允许集中在一颗宝石或一个饰物重点。', 'Allow surreal element only inside one gem or one jewelry focal point.', { ontologyLevel: 3, risk: 'medium', eras: ['feudal', 'early_modern', 'modern', 'contemporary', 'timeless'] })
    ]
  },
  {
    slug: 'social_ritual',
    name: '社交礼仪',
    nameEn: 'Social Ritual',
    focus: '宴会、沙龙、舞会和观看制度统摄角色表现',
    focusEn: 'banquet, salon, ball, and viewing systems governing character presentation',
    defaultKind: 'cultural_image',
    defaultAffects: ['pose', 'costume', 'prop', 'symbol'],
    defaultControls: ['social_ritual', 'salon_code', 'display_body'],
    items: [
      s('ballroom_entry_protocol', '舞会入场协议', 'Ballroom Entry Protocol', 'cultural_image', '角色像刚进入舞会被全场观看', 'character as just entering a ball under all gazes', ['入场停顿', '拖尾控制', '下巴微抬', '手套', '被观看感'], ['entry pause', 'train control', 'slightly raised chin', 'gloves', 'being watched'], '登场、明星或仪式元素优先舞会入场化。', 'Ballroom-entry translate arrival, celebrity, or ritual elements.'),
      s('salon_intelligence_code', '沙龙智性密码', 'Salon Intelligence Code', 'cultural_image', '谈话、书籍和冷静姿态构成贵族智性', 'conversation, books, and calm posture forming aristocratic intellect', ['小书', '折页', '手指压页', '安静凝视', '少量珠宝'], ['small book', 'folded page', 'finger on page', 'quiet gaze', 'few jewels'], '知识、阴谋或艺术元素优先沙龙化。', 'Salon-translate knowledge, plot, or art.'),
      s('drawing_room_tension', '会客厅张力', 'Drawing-Room Tension', 'pose', '冲突被礼貌空间压住', 'conflict suppressed by polite room logic', ['坐姿端正', '杯碟', '手指紧张', '微笑不达眼底', '距离感'], ['proper seated pose', 'cup and saucer', 'tense fingers', 'smile not reaching eyes', 'distance'], '冲突、欲望或敌意优先转成礼貌张力。', 'Translate conflict, desire, or hostility into polite tension.'),
      s('opera_box_gaze', '歌剧包厢凝视', 'Opera-Box Gaze', 'cultural_image', '观看别人也被别人观看', 'watching others while being watched', ['小望远镜', '半侧脸', '暗红内衬', '珠宝高光', '冷静眼神'], ['small opera glass', 'half profile', 'dark red lining', 'jewel highlight', 'calm gaze'], '偷窥、明星或权力关系优先变成包厢凝视。', 'Translate voyeurism, celebrity, or power relation into opera-box gaze.'),
      s('tea_service_power', '茶具权力礼法', 'Tea-Service Power Etiquette', 'prop', '茶具和手势承载温和支配', 'tea set and gesture carrying gentle dominance', ['茶杯', '碟盘', '细柄勺', '指尖控制', '桌边姿态'], ['teacup', 'saucer', 'thin spoon', 'fingertip control', 'table-edge pose'], '谈判、拒绝或亲密元素优先茶具礼法化。', 'Tea-service translate negotiation, refusal, or intimacy.'),
      s('invitation_card_status', '邀请函身份', 'Invitation-Card Status', 'symbol', '被邀请或被排除决定身份', 'being invited or excluded defining status', ['邀请函', '烫金字', '封套', '手持边角', '安静得意'], ['invitation card', 'gold stamping', 'envelope', 'held corner', 'quiet pride'], '社交权限和阶层筛选优先成为邀请函。', 'Translate social permission and class filtering into invitation card.'),
      s('gossip_as_accessory', '流言配饰化', 'Gossip as Accessory', 'symbol', '流言像饰物一样挂在角色身上', 'gossip worn like an accessory', ['折起便条', '耳边姿态', '半笑', '隐藏纸条', '近距离低语'], ['folded note', 'ear pose', 'half smile', 'hidden paper', 'close whisper'], '秘密、八卦或情报优先转成可见小配饰。', 'Translate secrets, gossip, or intel into visible small accessories.'),
      s('duel_invitation_formality', '决斗邀请礼法', 'Duel-Invitation Formality', 'cultural_image', '暴力被社交礼仪包装', 'violence wrapped by social etiquette', ['白手套', '信函', '短剑暗示', '冷静站姿', '礼貌表情'], ['white glove', 'letter', 'blade hint', 'calm stance', 'polite expression'], '战斗和仇恨必须先礼仪化、邀请化。', 'Etiquette- and invitation-translate combat and hatred first.'),
      s('public_reputation_surface', '公共名声表面', 'Public-Reputation Surface', 'symbol', '外表服务名声和家族脸面', 'appearance serving reputation and family face', ['无错穿着', '整理发丝', '小徽记', '克制表情', '清楚轮廓'], ['faultless dress', 'arranged hair', 'small mark', 'restrained face', 'clear silhouette'], '混乱细节优先被整理为维护名声的表面。', 'Organize chaotic details into a surface maintaining reputation.'),
      s('scandal_under_silk', '丝绸下的丑闻', 'Scandal Under Silk', 'cultural_image', '体面表面下藏着丑闻', 'scandal hidden under respectable surface', ['丝绸外层', '暗袋', '微破缝线', '紧张手指', '冷静脸'], ['silk outer layer', 'hidden pocket', 'slight broken seam', 'tense fingers', 'calm face'], '犯罪、欲望或秘密优先藏在体面材料下。', 'Hide crime, desire, or secret under respectable material.')
    ]
  },
  {
    slug: 'dark_aristocracy',
    name: '黑暗贵族',
    nameEn: 'Dark Aristocracy',
    focus: '哥特、吸血鬼、诅咒和超自然贵族被礼制收束',
    focusEn: 'gothic, vampire, curse, and supernatural nobility restrained by etiquette',
    defaultKind: 'ontology',
    defaultAffects: ['costume', 'symbol', 'material', 'pose', 'body'],
    defaultControls: ['dark_aristocracy', 'gothic_restraint', 'supernatural_rank'],
    items: [
      s('gothic_lineage_protocol', '哥特血统协议', 'Gothic-Lineage Protocol', 'cultural_image', '黑暗感服务血统和家族秩序', 'darkness serving lineage and family order', ['黑蕾丝', '尖领', '旧银', '暗红内衬', '苍白面部'], ['black lace', 'pointed collar', 'old silver', 'dark red lining', 'pale face'], '黑暗元素必须贵族化为血统、礼服和旧银符号。', 'Aristocratize dark elements into lineage, formalwear, and old silver signs.', { ontologyLevel: 2, risk: 'medium' }),
      s('vampiric_etiquette', '吸血鬼礼仪', 'Vampiric Etiquette', 'ontology', '吸血鬼性被礼貌、饥饿和阶层距离管理', 'vampirism managed by politeness, hunger, and class distance', ['苍白皮肤', '暗红口唇', '高领', '白手套', '过分礼貌'], ['pale skin', 'dark red lips', 'high collar', 'white gloves', 'excessive politeness'], '吸血鬼元素优先表现为礼仪和材料，不直接血腥化。', 'Express vampire elements through etiquette and material, not gore.', { ontologyLevel: 4, risk: 'high' }),
      s('cursed_heir_protocol', '受诅继承人', 'Cursed-Heir Protocol', 'ontology', '诅咒与继承资格绑定', 'curse bound to inheritance right', ['黑色戒痕', '旧纹章', '微光裂痕', '紧握遗物', '疲惫眼神'], ['black ring mark', 'old crest', 'subtle glowing crack', 'gripped heirloom', 'tired gaze'], '超现实必须集中为继承诅咒和家族标识，不扩散失控。', 'Keep surrealism concentrated as inheritance curse and family mark.', { ontologyLevel: 4, risk: 'high' }),
      s('funeral_nobility', '葬礼贵族', 'Funeral Nobility', 'cultural_image', '丧葬礼仪统摄服装、姿态和情绪', 'funeral etiquette governing costume, pose, and emotion', ['黑纱', '丧服珠宝', '低头', '暗花纹', '静止队列'], ['black veil', 'mourning jewels', 'lowered head', 'dark motif', 'still procession'], '死亡、哀悼或失败优先转成葬礼礼制。', 'Translate death, mourning, or failure into funeral etiquette.', { ontologyLevel: 2, risk: 'medium' }),
      s('haunted_portrait_family', '闹鬼肖像家族', 'Haunted-Portrait Family', 'ontology', '家族肖像像幽灵一样规定角色', 'family portrait governing character like a ghost', ['旧画感', '苍白凝视', '裂纹背景暗示', '褪色衣料', '静止脸'], ['old painting feel', 'pale gaze', 'crack hint', 'faded cloth', 'still face'], '幽灵和历史元素优先肖像化，不变恐怖场景。', 'Portrait-translate ghost and history elements instead of horror scenery.', { ontologyLevel: 4, risk: 'high' }),
      s('decadent_blood_red', '颓靡血红礼制', 'Decadent Blood-Red Etiquette', 'material', '血红色只作为高级材料和礼仪重点', 'blood red only as premium material and ceremonial accent', ['暗红丝绒', '红宝石', '内衬红', '唇色', '黑红对比'], ['dark red velvet', 'ruby', 'red lining', 'lip color', 'black-red contrast'], '血腥、欲望和危险优先材料化为暗红重点。', 'Materialize blood, desire, and danger into dark red accents.', { ontologyLevel: 2, risk: 'medium' }),
      s('witch_aristocrat_code', '女巫贵族法典', 'Witch-Aristocrat Code', 'ontology', '魔法被家族、礼服和文书规训', 'magic disciplined by family, formalwear, and documents', ['黑色长手套', '符号胸针', '旧书页', '窄腰线', '冷静手势'], ['black long gloves', 'symbol brooch', 'old page', 'narrow waist', 'calm hand gesture'], '魔法元素必须成为家族法典、纹样或手势，不乱放特效。', 'Make magic into family code, motifs, or gestures, not loose effects.', { ontologyLevel: 4, risk: 'high' }),
      s('immortal_old_money', '不死旧钱', 'Immortal Old Money', 'ontology', '不死性表现为过度保养和时间错位', 'immortality shown as excessive maintenance and temporal mismatch', ['过分完好旧衣', '无年龄感', '旧香气', '慢动作', '古老珠宝'], ['too-perfect old clothes', 'ageless feel', 'old scent', 'slow motion', 'ancient jewelry'], '长生和时间异常优先变成保养过度的旧钱气质。', 'Translate longevity and time anomaly into over-maintained old-money aura.', { ontologyLevel: 4, risk: 'high' }),
      s('demonic_court_restraint', '恶魔宫廷克制', 'Demonic-Court Restraint', 'ontology', '恶魔性被宫廷礼仪压住', 'demonic quality suppressed by court etiquette', ['微角暗示', '高领遮蔽', '黑金材料', '不露齿微笑', '手套'], ['subtle horn hint', 'high collar concealment', 'black-gold material', 'closed-mouth smile', 'gloves'], '恶魔元素只允许低强度暗示并服从礼仪轮廓。', 'Allow demonic elements only as low-intensity hints inside etiquette silhouette.', { ontologyLevel: 4, risk: 'high' }),
      s('sacred_bloodline_relic', '神圣血统圣物', 'Sacred-Bloodline Relic', 'ontology', '血统被圣物化，介于宗教和贵族之间', 'lineage relicized between religion and aristocracy', ['圣匣珠宝', '金线家徽', '白金配色', '面纱', '正面静止'], ['reliquary jewel', 'gold-thread crest', 'white-gold palette', 'veil', 'frontal stillness'], '神圣或宗教元素优先转成血统圣物和礼服秩序。', 'Translate sacred or religious elements into bloodline relics and formalwear order.', { ontologyLevel: 3, risk: 'medium' })
    ]
  }
];

export const ARISTOCRATIC_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
