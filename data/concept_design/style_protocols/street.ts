import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'STREET';
const ROUTE_NAME = '街头制服';
const ROUTE_NAME_EN = 'Street Uniform';
const ERAS = ['modern', 'contemporary', 'near_future', 'timeless'];
const FORBIDS = ['直接真实品牌 logo', '真实帮派标识', '无解释全身机甲化', '廉价 cosplay 感', '只堆局部潮流小物而没有整体穿搭逻辑'];

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
    slug: 'hiphop_sportswear',
    name: '嘻哈运动制服',
    nameEn: 'Hip-Hop Sportswear Uniform',
    focus: '运动服、街区归属、音乐态度和松弛权力统摄全身',
    focusEn: 'sportswear, block belonging, music attitude, and relaxed power governing the whole body',
    defaultKind: 'cultural_image',
    defaultAffects: ['silhouette', 'costume', 'pose', 'symbol'],
    defaultControls: ['hiphop_sportswear', 'crew_code', 'relaxed_power'],
    items: [
      s('nineties_rap_volume', '90年代说唱衣量', '90s Rap Volume', 'cultural_image', '宽大运动服和街区自信形成主轮廓', 'oversized sportswear and block confidence forming the main silhouette', ['宽大夹克', '低腰宽裤', '厚球鞋', '项链重点', '下巴前顶'], ['oversized jacket', 'low wide pants', 'chunky sneakers', 'chain accent', 'chin-forward stance'], '外来元素优先转成宽大运动服、街区配色和松弛挑衅姿态。', 'Translate outside elements into oversized sportswear, block palette, and relaxed defiant posture.'),
      s('mixtape_crew_uniform', '地下Mixtape队伍', 'Mixtape Crew Uniform', 'symbol', '音乐小团体用同款外套、手写标记和低成本图形建立归属', 'small music crew using matching jackets, handwritten marks, and low-cost graphics for belonging', ['同款外套', '手写标签', '虚构队名', '磨损包袋', '并肩站姿'], ['matching jacket', 'handwritten tag', 'fictional crew name', 'worn bag', 'side-by-side stance'], '组织、职业或副风格先转为虚构队伍色、手写标签和同款外套规则。', 'Translate organization, profession, or secondary style into fictional crew color, handwritten label, and matching-jacket rule.'),
      s('basketball_court_casual', '球场边休闲', 'Courtside Casual', 'cultural_image', '篮球场边的松弛运动比例管理身体', 'courtside relaxed athletic proportion governing the body', ['宽球衣', '运动短裤或宽裤', '高袜', '护腕', '重心下沉'], ['wide jersey', 'shorts or wide pants', 'high socks', 'wristband', 'lowered weight'], '运动、战斗或青春元素优先落到球场边的宽松运动比例。', 'Translate sport, combat, or youth elements into relaxed courtside athletic proportion.'),
      s('chain_weight_status', '链饰重量地位', 'Chain-Weight Status', 'symbol', '金属链条成为身份重量但不变成奢侈品牌展示', 'metal chains becoming status weight without luxury-brand display', ['粗链条', '胸前重量', '金属反光', '暗色T恤', '手部碰链'], ['thick chain', 'chest weight', 'metal reflection', 'dark tee', 'hand touching chain'], '财富、权力或贵族元素优先街头化为链饰重量和胸前中心。', 'Street-translate wealth, power, or aristocracy into chain weight and chest center.'),
      s('block_party_color', '街区派对配色', 'Block-Party Palette', 'material', '高饱和小面积色块带出音乐和社区能量', 'small vivid color blocks carrying music and community energy', ['队伍色', '帽檐色', '鞋带色', '撞色外套', '重复小色点'], ['crew color', 'cap-brim color', 'lace color', 'color-block jacket', 'repeated accents'], '鲜艳或奇幻色彩优先压缩成街区派对配色，不扩散成全身失控。', 'Compress vivid or fantasy colors into block-party palette without full-body chaos.'),
      s('producer_backroom_fit', '制作人后台套装', 'Producer Backroom Fit', 'function', '音乐制作后台的实用街头穿搭', 'functional street outfit from music production backrooms', ['耳机', '宽帽衫', '电脑包', '咖啡痕', '低头专注'], ['headphones', 'wide hoodie', 'laptop bag', 'coffee mark', 'focused lowered head'], '技术、职业和音乐元素优先变成后台制作人的实用携带系统。', 'Translate tech, occupation, and music elements into producer backroom carry system.'),
      s('old_school_bboy_axis', 'Old School B-Boy轴线', 'Old-School B-Boy Axis', 'pose', '舞蹈身体和运动套装共同组织姿态', 'dance body and sportswear jointly organizing posture', ['运动套装', '弯膝', '手臂展开', '帽子倾斜', '鞋底可见'], ['tracksuit', 'bent knees', 'open arms', 'tilted cap', 'visible sole'], '动态、动作和自信优先转成舞蹈轴线与下盘重心。', 'Translate motion, action, and confidence into dance axis and lower-body gravity.'),
      s('rap_video_minimal_set', '说唱MV极简身份', 'Rap-Video Minimal Identity', 'cultural_image', '不靠场景，只靠衣量、姿态和道具形成音乐身份', 'music identity made by volume, posture, and props without scene dependence', ['正面站姿', '宽外套', '手势', '墨镜', '少量高光'], ['frontal stance', 'wide outerwear', 'hand gesture', 'sunglasses', 'few highlights'], '明星、舞台或影视元素优先压缩成人物身上的MV式身份符号。', 'Compress celebrity, stage, or film elements into music-video identity signs on the character.'),
      s('street_poet_softness', '街头诗人松弛', 'Street-Poet Softness', 'cultural_image', '嘻哈语境中的柔软、文字和敏感气质', 'softness, text, and sensitivity inside hip-hop context', ['宽针织帽', '旧笔记本', '软外套', '低声眼神', '手写词句'], ['wide beanie', 'old notebook', 'soft jacket', 'low voice gaze', 'handwritten lines'], '文艺、内向或情绪元素优先转成街头诗人的柔软装备和手写痕迹。', 'Translate literary, introverted, or emotional elements into street-poet soft gear and handwriting trace.'),
      s('luxury_knockoff_attitude', '仿奢态度', 'Luxury-Knockoff Attitude', 'cultural_image', '奢侈感被街头仿制和戏仿吸收', 'luxury absorbed by street imitation and parody', ['仿制质感', '虚构字样', '夸张扣具', '不完美比例', '自信展示'], ['knockoff texture', 'fictional lettering', 'exaggerated buckle', 'imperfect proportion', 'confident display'], '高定、贵族或财富元素必须转成虚构仿制、戏仿和街头自信。', 'Convert couture, aristocracy, or wealth into fictional knockoff, parody, and street confidence.')
    ]
  },
  {
    slug: 'skate_punk_diy',
    name: '滑板朋克DIY',
    nameEn: 'Skate Punk DIY',
    focus: '磨损、低成本改造、反制度态度和移动身体统摄角色',
    focusEn: 'wear, low-cost modification, anti-institution attitude, and moving body governing the character',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'pose', 'symbol'],
    defaultControls: ['skate_punk', 'diy_mark', 'movement_wear'],
    items: [
      s('skate_worn_uniform', '滑板磨损制服', 'Skate-Worn Uniform', 'material', '真实移动和摔擦形成穿搭证据', 'real movement and scraping forming outfit evidence', ['磨损板鞋', '膝部破口', '宽T恤', '手肘擦痕', '低姿态'], ['worn skate shoes', 'knee rips', 'wide tee', 'elbow scuffs', 'low stance'], '损耗必须来自运动和街头使用，不变成无来源脏乱。', 'Wear must come from movement and street use, not sourceless dirt.'),
      s('diy_patch_manifesto', 'DIY补丁宣言', 'DIY Patch Manifesto', 'symbol', '布贴、手缝和喷字表达反制度立场', 'patches, hand-stitching, and stencil text expressing anti-institution stance', ['手缝布贴', '喷字', '胶带修补', '错位图形', '旧牛仔'], ['hand-sewn patch', 'stencil text', 'tape repair', 'misaligned graphic', 'old denim'], '政治、情绪或组织信息优先变成可移除、可手改的补丁系统。', 'Translate politics, emotion, or organization into removable handmade patch systems.'),
      s('garage_band_slouch', '车库乐队松垮', 'Garage-Band Slouch', 'cultural_image', '廉价乐队文化和身体松弛构成身份', 'cheap band culture and slouched body forming identity', ['旧乐队T', '乱发', '松肩', '破洞牛仔', '便宜银饰'], ['old band tee', 'messy hair', 'slouched shoulders', 'ripped denim', 'cheap silver'], '音乐、青春或失败感优先转成车库乐队式低成本穿搭。', 'Translate music, youth, or failure into garage-band low-cost outfit.'),
      s('sticker_bomb_surface', '贴纸轰炸表面', 'Sticker-Bomb Surface', 'symbol', '贴纸层覆盖包袋、板面和外套表面', 'sticker layers covering bag, deck, and jacket surfaces', ['贴纸层', '翘边', '虚构图标', '重叠小标', '刮擦边'], ['sticker layers', 'peeling corners', 'fictional icons', 'overlapping marks', 'scraped edges'], '复杂符号优先压缩到贴纸层，不变成真实logo堆叠。', 'Compress complex symbols into sticker layers, not real-logo piles.'),
      s('anti_fit_proportion', 'Anti-Fit比例', 'Anti-Fit Proportion', 'structure', '故意不合身的比例破坏精裁秩序', 'intentionally ill-fitting proportion disrupting tailoring order', ['过长袖子', '宽裤堆积', '衣摆歪斜', '身体被吞', '松垮站姿'], ['overlong sleeves', 'stacked wide pants', 'crooked hem', 'swallowed body', 'slouch stance'], '贵族、高定或制度元素优先被反合身比例削弱和街头化。', 'Weaken and street-translate aristocratic, couture, or institutional elements through anti-fit proportion.'),
      s('marker_zine_graphics', '马克笔小刊图形', 'Marker-Zine Graphics', 'symbol', '手写、复印和剪贴构成地下出版感', 'handwriting, photocopy, and collage forming underground-zine feeling', ['黑白复印', '手写字', '剪贴边', '胶带', '错位版面'], ['black-white photocopy', 'handwriting', 'cutout edge', 'tape', 'misaligned layout'], '媒体、叙事或信条优先转成小刊图形和衣物表面文字。', 'Translate media, narrative, or creed into zine graphics and garment text.'),
      s('chain_wallet_rebellion', '钱包链反叛', 'Chain-Wallet Rebellion', 'symbol', '腰部链条组织反叛、移动和轻武装感', 'waist chain organizing rebellion, movement, and light-armed feeling', ['钱包链', '裤袢', '金属响动', '低腰线', '手插袋'], ['wallet chain', 'belt loop', 'metal jingle', 'low waistline', 'hands in pockets'], '武装、贵族金属或仪式链条优先降级为腰部钱包链。', 'Downgrade armed, aristocratic metal, or ritual chain into waist wallet chain.'),
      s('ripped_school_rule', '撕裂校服规则', 'Ripped-School Rule', 'cultural_image', '制服被青年反叛和DIY破坏后重新成立', 'uniform re-established after youth rebellion and DIY damage', ['松领带', '涂写衬衫', '改短外套', '破袜', '挑衅眼神'], ['loose tie', 'scribbled shirt', 'cropped jacket', 'ripped socks', 'defiant gaze'], '制度、校园或职业身份优先表现为被改造的制服。', 'Express institution, school, or occupation as remixed damaged uniform.'),
      s('basement_show_grit', '地下演出粗粝', 'Basement-Show Grit', 'cultural_image', '地下小演出的汗、噪声和近距离身体', 'sweat, noise, and close body from basement shows', ['黑T', '汗痕', '旧腕带', '低光银饰', '前倾身体'], ['black tee', 'sweat marks', 'old wristband', 'low-light silver', 'forward body'], '夜场、音乐和危险感优先变成地下演出的身体痕迹。', 'Translate nightlife, music, and danger into basement-show bodily traces.'),
      s('trash_becomes_badge', '垃圾变徽章', 'Trash Becomes Badge', 'function', '低价值物被重新佩戴成身份符号', 'low-value objects reworn as identity signs', ['瓶盖吊饰', '塑料扣', '胶带', '别针', '不完美边缘'], ['bottlecap charm', 'plastic buckle', 'tape', 'safety pin', 'imperfect edge'], '废土、贫穷或奇幻材料优先街头DIY化为可佩戴徽章。', 'Street-DIY translate wasteland, poverty, or fantasy material into wearable badges.')
    ]
  },
  {
    slug: 'y2k_pop_street',
    name: 'Y2K流行街头',
    nameEn: 'Y2K Pop Street',
    focus: '千禧流行、塑料亮面、低腰比例和自拍时代统摄角色',
    focusEn: 'millennium pop, plastic shine, low-waist proportion, and selfie-era styling governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['costume', 'material', 'hair', 'pose', 'symbol'],
    defaultControls: ['y2k_pop', 'plastic_gloss', 'selfie_body'],
    items: [
      s('y2k_girl_silhouette', 'Y2K辣妹轮廓', 'Y2K Girl Silhouette', 'cultural_image', '低腰、短上衣和闪亮小件组织身体比例', 'low waist, cropped top, and shiny small pieces organizing body proportion', ['低腰线', '短上衣', '厚底鞋', '小包', '亮面唇妆'], ['low waistline', 'cropped top', 'platform shoes', 'tiny bag', 'glossy lips'], '流行、性感或偶像元素优先转成Y2K低腰比例和亮面小件。', 'Translate pop, sensual, or idol elements into Y2K low-waist proportion and glossy accents.'),
      s('bubblegum_chrome_mix', '泡泡糖铬色', 'Bubblegum Chrome Mix', 'material', '糖果色与银色塑料共同形成千禧质感', 'candy color and silver plastic forming millennium texture', ['粉蓝粉紫', '银色边', '塑料亮面', '白色高光', '小面积撞色'], ['pink-blue-purple', 'silver edges', 'shiny plastic', 'white highlights', 'small color clash'], '强情绪和科幻色彩优先降成泡泡糖铬色小面积撞色。', 'Reduce strong emotion and sci-fi color into bubblegum-chrome accent clashes.'),
      s('flip_phone_status', '翻盖手机身份', 'Flip-Phone Status', 'symbol', '手机和吊饰成为社交身份中心', 'phone and charms becoming social identity center', ['翻盖手机', '透明壳', '吊饰串', '自拍手势', '腕绳'], ['flip phone', 'clear case', 'charm chain', 'selfie gesture', 'wrist strap'], '科技、社交或符号信息优先缩进手机和吊饰系统。', 'Shrink tech, social, or symbolic information into phone and charm system.'),
      s('mall_pop_princess', '商场流行公主', 'Mall-Pop Princess', 'cultural_image', '商业流行文化和廉价闪亮塑造角色', 'commercial pop culture and cheap shine shaping character', ['亮片小件', '迷你包', '粉色塑料', '卷发', '甜腻表情'], ['sequin accents', 'tiny bag', 'pink plastic', 'curled hair', 'sweet expression'], '贵族或偶像元素优先降级为商场流行公主式廉价闪亮。', 'Downgrade aristocratic or idol elements into mall-pop princess cheap sparkle.'),
      s('denim_on_denim_pop', '丹宁流行套装', 'Denim-on-Denim Pop', 'material', '牛仔成套和低腰比例形成流行身份', 'denim set and low waistline forming pop identity', ['牛仔短外套', '低腰牛仔', '明线', '水洗色', '腰部饰链'], ['denim cropped jacket', 'low-rise denim', 'visible stitching', 'washed blue', 'waist chain'], '职业、街头或性感元素优先进入牛仔成套结构。', 'Translate occupation, street, or sensual elements into denim set structure.'),
      s('paparazzi_flash_pose', '狗仔闪光姿态', 'Paparazzi-Flash Pose', 'pose', '像被突然闪光灯捕捉的街头明星身体', 'street-star body caught by sudden flash', ['半转身', '墨镜', '手挡光', '小包贴身', '高光皮肤'], ['half turn', 'sunglasses', 'hand blocking flash', 'tiny bag close', 'highlighted skin'], '明星、夜场或媒体元素优先转成闪光灯下的街拍姿态。', 'Translate celebrity, nightlife, or media elements into flash-caught street-snap posture.'),
      s('cute_hardware_system', '可爱五金系统', 'Cute Hardware System', 'symbol', '爱心、星星和金属扣共同组织甜酷感', 'hearts, stars, and buckles organizing cute-cool feeling', ['爱心扣', '星星挂件', '小金属环', '彩色链', '塑料透明件'], ['heart buckle', 'star charm', 'small metal ring', 'colored chain', 'clear plastic'], '危险、武装或机械元素优先可爱化为小五金。', 'Cute-translate danger, armed, or mechanical elements into small hardware.'),
      s('lowrise_body_line', '低腰身体线', 'Low-Rise Body Line', 'structure', '低腰线把视觉重心拉到髋部', 'low waistline pulling visual gravity to the hips', ['低腰裤', '短上衣', '腰链', '腹部留白', '站姿偏胯'], ['low-rise pants', 'cropped top', 'waist chain', 'midriff space', 'hip-shift stance'], '服装冲突优先围绕腰线、髋部和短上身重新组织。', 'Reorganize costume conflict around waistline, hips, and cropped upper body.'),
      s('gloss_lip_camera', '唇彩镜头感', 'Gloss-Lip Camera Presence', 'material', '面部和材料都带有千禧镜头反光', 'face and material carrying millennium camera gloss', ['唇彩', '眼影珠光', '镜面墨镜', '亮面包', '皮肤高光'], ['lip gloss', 'pearl eyeshadow', 'mirrored shades', 'glossy bag', 'skin highlight'], '妆容、材质和科技反光优先统一成千禧镜头光泽。', 'Unify makeup, material, and tech reflection into millennium camera gloss.'),
      s('pop_idol_street_off', '流行偶像下班街头', 'Pop-Idol Off-Duty Street', 'cultural_image', '舞台偶像退到街头后的松弛闪亮', 'stage idol relaxed into street shine', ['鸭舌帽', '墨镜', '运动裤', '亮面小包', '疲惫笑容'], ['baseball cap', 'sunglasses', 'track pants', 'glossy tiny bag', 'tired smile'], '偶像和舞台元素优先下班化，保留小面积闪亮和隐藏身份。', 'Off-duty translate idol and stage elements while keeping small shine and hidden identity.')
    ]
  },
  {
    slug: 'nightlife_access',
    name: '夜场通行',
    nameEn: 'Nightlife Access',
    focus: '入口许可、夜间社交、身体暴露度和移动暗号统摄角色',
    focusEn: 'entry permission, night sociality, body exposure, and mobile codes governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'pose', 'material', 'costume'],
    defaultControls: ['nightlife_access', 'club_code', 'after_dark_body'],
    items: [
      s('club_entry_identity', '夜店入场身份', 'Club-Entry Identity', 'symbol', '临时通行物定义夜间身份', 'temporary access objects defining night identity', ['手环', '手背印章', '荧光小标', '紧身外层', '入口姿态'], ['wristband', 'hand stamp', 'fluorescent mark', 'tight outer layer', 'entry stance'], '许可、组织或副场域优先变成夜场入场凭证。', 'Translate permission, organization, or secondary field into nightlife entry credentials.'),
      s('black_light_palette', '黑光配色协议', 'Blacklight Palette Protocol', 'material', '暗底和荧光点共同支配夜场可见度', 'dark base and fluorescent points governing nightlife visibility', ['黑色底', '荧光边', '紫蓝反光', '小面积亮色', '湿亮皮肤'], ['black base', 'fluorescent edge', 'purple-blue reflection', 'small bright accent', 'wet skin highlight'], '超现实色彩和技术光优先压缩成黑光小面积可见点。', 'Compress surreal colors and tech light into small blacklight-visible points.'),
      s('afterparty_dishevelment', 'Afterparty散乱感', 'Afterparty Dishevelment', 'material', '一夜之后的精致散乱成为身份', 'refined dishevelment after a night becoming identity', ['微乱发', '眼妆残留', '外套敞开', '鞋跟疲惫', '手腕印章'], ['slightly messy hair', 'makeup residue', 'open jacket', 'tired heels', 'wrist stamp'], '疲惫、欲望或秘密优先转成夜后散乱痕迹。', 'Translate fatigue, desire, or secret into afterparty dishevelment.'),
      s('velvet_rope_status', '绒绳门槛地位', 'Velvet-Rope Status', 'symbol', '能否进入决定角色社交等级', 'ability to enter defining social rank', ['黑外套', '小邀请卡', '腕部凭证', '等待站姿', '冷淡表情'], ['black outerwear', 'small invitation card', 'wrist credential', 'waiting stance', 'cool expression'], '贵族、职业或明星元素优先夜场门槛化。', 'Nightlife-threshold translate aristocracy, occupation, or celebrity.'),
      s('mirror_sunglasses_anonymity', '镜面墨镜匿名', 'Mirrored-Shades Anonymity', 'symbol', '遮住眼神同时制造夜间明星感', 'hiding gaze while creating nocturnal star feeling', ['镜面墨镜', '窄框', '鼻梁高光', '遮挡眼神', '冷脸'], ['mirrored sunglasses', 'narrow frame', 'nose highlight', 'hidden gaze', 'cool face'], '神秘、技术或明星元素优先转成镜面遮蔽。', 'Translate mystery, tech, or celebrity into mirrored concealment.'),
      s('dancefloor_body_heat', '舞池身体热度', 'Dancefloor Body Heat', 'pose', '舞池热量影响姿态、材料和妆发', 'dancefloor heat affecting posture, material, and styling', ['膝盖微弯', '贴身材料', '汗光', '肩部节奏', '头发湿感'], ['slightly bent knees', 'tight material', 'sweat shine', 'shoulder rhythm', 'damp hair'], '动态和情绪优先转成身体热度与节奏姿态。', 'Translate motion and emotion into body heat and rhythmic posture.'),
      s('backroom_vip_shadow', '后台VIP阴影', 'Backroom VIP Shadow', 'cultural_image', '高级夜场的隐秘房间感落在角色身上', 'private VIP-room feeling landing on the character', ['深色丝绒', '金属小件', '低光妆容', '靠墙姿态', '小包'], ['dark velvet', 'small metal pieces', 'low-light makeup', 'wall-leaning pose', 'tiny bag'], '权力、财富和秘密优先转成后台VIP材料和姿态。', 'Translate power, wealth, and secrecy into VIP backroom material and pose.'),
      s('door_staff_uniform', '门口工作人员制服', 'Door-Staff Uniform', 'function', '夜场门口的判断权和冷静身体', 'judgment authority and calm body at club entrance', ['黑色夹克', '耳机', '腕带管理', '直立站姿', '冷眼'], ['black jacket', 'earpiece', 'wristband management', 'upright stance', 'cold gaze'], '职业、武装和许可元素优先变成夜场门口制服权力。', 'Translate occupation, armed, and permission elements into club-door uniform authority.'),
      s('bathroom_mirror_glam', '洗手间镜前魅力', 'Bathroom-Mirror Glam', 'cultural_image', '夜场洗手间镜前补妆和自拍的亲密感', 'intimate retouching and selfie feeling in nightlife mirror', ['补妆手势', '闪粉', '小包打开', '镜面光', '半疲惫表情'], ['makeup retouch gesture', 'glitter', 'open tiny bag', 'mirror light', 'half-tired expression'], '妆容、社交和欲望优先转成镜前补妆姿态。', 'Translate makeup, sociality, and desire into mirror-retouch posture.'),
      s('nocturnal_minimal_black', '夜行极简黑', 'Nocturnal Minimal Black', 'material', '全黑不是空白，而是夜间通行和身体线条', 'all-black as nocturnal access and body line, not emptiness', ['黑色贴身层', '少量银点', '干净轮廓', '暗光皮革', '安静步伐'], ['black fitted layer', 'few silver points', 'clean silhouette', 'dark leather', 'quiet steps'], '复杂元素优先被黑色夜行系统收束，只保留少量功能高光。', 'Contain complex elements inside black nocturnal system, keeping only few functional highlights.')
    ]
  },
  {
    slug: 'techwear_urban',
    name: '机能都市',
    nameEn: 'Techwear Urban',
    focus: '城市功能、天气防护、模块化收纳和低调未来感统摄角色',
    focusEn: 'urban function, weather protection, modular storage, and low-key futurity governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'material', 'prop', 'pose'],
    defaultControls: ['techwear_urban', 'modular_function', 'weather_shell'],
    items: [
      s('weather_shell_system', '天气外壳系统', 'Weather-Shell System', 'function', '外套像城市天气装置一样管理身体', 'outerwear managing body like urban weather apparatus', ['防水外壳', '压胶线', '高领', '帽兜', '暗色层'], ['waterproof shell', 'sealed seams', 'high collar', 'hood', 'dark layers'], '科幻、末世和通勤元素优先转成天气防护外壳。', 'Translate sci-fi, wasteland, and commuting elements into weather-protection shell.'),
      s('modular_pocket_grid', '模块口袋网格', 'Modular Pocket Grid', 'function', '收纳位决定视觉秩序', 'storage positions determining visual order', ['多口袋', '隐藏拉链', '胸前挂点', '腰侧包', '规则分区'], ['multi pockets', 'hidden zipper', 'chest attachment', 'waist pouch', 'regular zones'], '道具和职业信息优先分配到模块口袋，不外露堆叠。', 'Assign props and occupation info into modular pockets instead of exposed pileup.'),
      s('soft_tactical_street', '软战术街头', 'Soft-Tactical Street', 'structure', '战术元素被城市服装软化', 'tactical elements softened by urban clothing', ['软甲片', '织带', '快拆扣', '黑灰配色', '收窄姿态'], ['soft armor panel', 'webbing', 'quick-release buckle', 'black-grey palette', 'narrow stance'], '武装元素必须服装化、软化、城市化。', 'Garment-, soften-, and urbanize armed elements.'),
      s('commuter_future_black', '通勤未来黑', 'Commuter Future Black', 'material', '未来感藏在通勤黑色系统里', 'futurity hidden inside commuter black system', ['黑色防风衣', '电脑包', '反光细条', '耳机', '快步姿态'], ['black windbreaker', 'laptop bag', 'thin reflective strip', 'earphones', 'fast-walk pose'], '未来和职业元素优先变成低调通勤机能。', 'Translate future and occupation into low-key commuter function.'),
      s('urban_nomad_carry', '城市游牧携带', 'Urban-Nomad Carry', 'function', '角色像随身携带小型生活系统', 'character carrying a small life system', ['胸包', '水壶扣', '轻量外套', '可折叠层', '身体偏重'], ['chest bag', 'bottle clip', 'light outerwear', 'foldable layer', 'shifted weight'], '旅行、生存和职业元素优先整合进城市游牧携带。', 'Integrate travel, survival, and occupation into urban-nomad carry.'),
      s('reflective_code_lines', '反光编码线', 'Reflective Code Lines', 'symbol', '反光条像城市夜间可读代码', 'reflective strips as readable code at night', ['反光细线', '袖口标记', '裤侧线', '低光闪点', '行走可见'], ['thin reflective line', 'cuff mark', 'side seam', 'low-light flash', 'visible while walking'], '符号和安全功能优先合并为反光编码线。', 'Merge symbols and safety function into reflective code lines.'),
      s('interface_without_cyberpunk', '非赛博接口', 'Interface Without Cyberpunk', 'function', '技术只作为民用接口，不扩散成霓虹赛博', 'technology as civilian interface without neon cyberpunk spread', ['腕部设备', '耳机', '小屏幕', '传感贴', '哑光外壳'], ['wrist device', 'earpiece', 'small screen', 'sensor patch', 'matte shell'], '技术元素必须局部、民用、可维护，不生成赛博城市拼贴。', 'Keep tech local, civilian, and maintainable, avoiding cyber-city collage.', { ontologyLevel: 2, risk: 'medium' }),
      s('rain_ninja_silhouette', '雨夜忍者轮廓', 'Rain-Ninja Silhouette', 'cultural_image', '黑色机能装形成隐蔽移动感', 'black functional clothing creating covert movement feeling', ['黑帽兜', '遮脸高领', '窄裤', '防水层', '静步姿态'], ['black hood', 'face-covering collar', 'narrow pants', 'waterproof layer', 'quiet step'], '武侠、刺客或夜行元素优先转成雨夜机能轮廓。', 'Translate wuxia, assassin, or nocturnal elements into rain-night functional silhouette.'),
      s('repairable_futurewear', '可维修未来衣', 'Repairable Futurewear', 'material', '未来服装必须有维修和替换证据', 'futurewear must show repair and replacement evidence', ['替换扣', '维修贴', '可拆面板', '磨损织带', '编号小标'], ['replacement buckle', 'repair sticker', 'removable panel', 'worn webbing', 'small number tag'], '损耗和科幻元素优先成为可维修结构。', 'Translate wear and sci-fi elements into repairable structure.'),
      s('matte_utility_luxury', '哑光实用奢华', 'Matte Utility Luxury', 'material', '高级感来自低调功能材料而非装饰', 'luxury from understated functional material rather than ornament', ['哑光尼龙', '细密纹理', '隐藏拉链', '精准边线', '黑灰层次'], ['matte nylon', 'dense texture', 'hidden zipper', 'precise edge', 'black-grey layers'], '高定或贵族元素优先被机能材料吸收为哑光精度。', 'Absorb couture or aristocracy into functional material as matte precision.')
    ]
  },
  {
    slug: 'japanese_street_snap',
    name: '日系街拍',
    nameEn: 'Japanese Street Snap',
    focus: '都市街拍、亚文化妆发、层次小物和被拍摄姿态统摄角色',
    focusEn: 'urban street snap, subculture hair-makeup, layered objects, and photographed posture governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['costume', 'hair', 'makeup', 'pose', 'symbol'],
    defaultControls: ['japanese_street_snap', 'subculture_styling', 'street_photo_pose'],
    items: [
      s('shibuya_gal_system', '涩谷辣妹系统', 'Shibuya Gal System', 'cultural_image', '高对比妆发、厚底下盘和街拍手势共同统摄', 'high-contrast styling, platform lower-body, and street-snap gesture governing together', ['晒黑妆', '高对比挑染', '厚底靴', '手机吊饰', '街拍手势'], ['tanned makeup', 'high-contrast streaks', 'platform boots', 'phone charms', 'street-snap gesture'], '外来身份优先转成妆发、厚底重心、手机小件和街拍姿态。', 'Translate outside identity into hair-makeup, platform gravity, phone objects, and street-snap posture.'),
      s('harajuku_layer_logic', '原宿层次逻辑', 'Harajuku Layer Logic', 'cultural_image', '多层颜色、图案和小件被街拍秩序控制', 'many colors, patterns, and trinkets controlled by street-snap order', ['多层裙裤', '图案袜', '彩色外套', '小饰品堆叠', '可爱冲突'], ['layered skirt-pants', 'pattern socks', 'colored outerwear', 'stacked trinkets', 'cute clash'], '复杂元素必须分层管理，不让全身混乱。', 'Manage complex elements by layers, not full-body chaos.'),
      s('jirai_dark_sweet', '地雷黑粉甜暗', 'Jirai Dark Sweet', 'cultural_image', '黑粉甜暗妆发和脆弱姿态形成风格核心', 'black-pink sweet-dark styling and fragile posture forming core style', ['黑粉配色', '泪袋妆', '蝴蝶结', '厚底鞋', '脆弱凝视'], ['black-pink palette', 'tear-bag makeup', 'bows', 'platform shoes', 'fragile gaze'], '黑暗、病弱或甜美元素优先转成黑粉配色、妆容和蝴蝶结结构。', 'Translate dark, fragile, or sweet elements into black-pink palette, makeup, and bow structures.'),
      s('ryousangata_uniform_sweet', '量产型甜美制服', 'Ryousangata Sweet Uniform', 'cultural_image', '甜美被制服化、可复制化和社交图像化', 'sweetness made uniform-like, repeatable, and social-image ready', ['浅色针织', '格裙', '蝴蝶结', '卷发', '小包'], ['light knitwear', 'check skirt', 'bows', 'curled hair', 'small bag'], '偶像、校园或甜美元素优先制服化为量产型装饰秩序。', 'Uniformize idol, school, or sweet elements into ryousangata ornament order.'),
      s('visual_kei_street_form', '视觉系街头形态', 'Visual-Kei Street Form', 'cultural_image', '视觉系舞台元素被日常街头化', 'visual-kei stage elements street-translated into daily styling', ['夸张发型', '黑色层次', '眼线', '银饰', '窄身外套'], ['dramatic hair', 'black layers', 'eyeliner', 'silver jewelry', 'slim jacket'], '舞台、摇滚或妖异元素优先街头化为发型、眼线和银饰。', 'Street-translate stage, rock, or uncanny elements into hair, eyeliner, and silver jewelry.'),
      s('uniform_remix_snap', '制服改造街拍', 'Uniform-Remix Snap', 'structure', '制服在街拍里被松动、改短和遮挡', 'uniform loosened, cropped, and covered inside street snap', ['短外套', '松领带', '改短裙摆', '袜子层次', '徽章遮挡'], ['cropped jacket', 'loose tie', 'shortened skirt', 'sock layers', 'covered badge'], '制度身份优先通过制服改造、松动领带和遮挡徽章表现。', 'Show institutional identity through uniform remix, loosened tie, and covered badges.'),
      s('kawaii_hardware_universe', '可爱五金宇宙', 'Kawaii-Hardware Universe', 'symbol', '可爱图形和金属件形成小型符号宇宙', 'cute graphics and hardware forming a small symbolic universe', ['爱心扣', '星星挂件', '金属环', '小熊吊饰', '彩色链'], ['heart buckles', 'star charms', 'metal rings', 'bear charms', 'colored chains'], '危险或技术元素优先可爱化为小五金和挂件。', 'Cute-translate danger or tech elements into small hardware and charms.'),
      s('phone_charm_symbol_cloud', '手机吊饰符号云', 'Phone-Charm Symbol Cloud', 'symbol', '手机吊饰承载个人欲望和社交图像', 'phone charms carrying personal desire and social image', ['吊饰串', '透明手机壳', '手腕挂绳', '晃动小件', '自拍手'], ['charm chain', 'clear phone case', 'wrist strap', 'swinging objects', 'selfie hand'], '符号和道具优先缩小为手机吊饰群，不抢主体。', 'Shrink symbols and props into phone-charm clusters without stealing focus.'),
      s('platform_leg_warmth', '厚底腿套重心', 'Platform Leg-Warmer Gravity', 'structure', '厚底鞋和腿套形成膝下视觉重量', 'platform shoes and leg warmers forming below-knee visual weight', ['厚底靴', '毛绒腿套', '袜套堆叠', '小腿体积', '膝下重心'], ['platform boots', 'fluffy leg warmers', 'stacked socks', 'calf volume', 'below-knee weight'], '兽性、可爱或街头元素优先落在腿套体积和厚底重心。', 'Place beastly, cute, or street elements into leg-warmer volume and platform gravity.'),
      s('street_snap_v_angle', '街拍V角度', 'Street-Snap V Angle', 'pose', '镜头前快速摆拍形成身份图像', 'quick camera posing forming identity image', ['V手势', '歪头', '单脚前伸', '笑容控制', '包袋展示'], ['V sign', 'tilted head', 'one foot forward', 'controlled smile', 'bag display'], '轻快、偶像或挑衅情绪优先转成街拍手势和身体角度。', 'Translate lightness, idol mood, or defiance into street-snap gesture and body angle.')
    ]
  },
  {
    slug: 'commuter_normcore',
    name: '通勤Normcore',
    nameEn: 'Commuter Normcore',
    focus: '城市通勤、普通衣物、疲惫身体和日常携带统摄角色',
    focusEn: 'urban commuting, ordinary clothes, tired body, and everyday carry governing character',
    defaultKind: 'function',
    defaultAffects: ['pose', 'prop', 'costume', 'material'],
    defaultControls: ['commuter_normcore', 'ordinary_clothing', 'daily_fatigue'],
    items: [
      s('subway_fatigue_uniform', '地铁疲惫制服', 'Subway-Fatigue Uniform', 'pose', '通勤压力压出普通人的身体疲态', 'commuting pressure pressing fatigue into ordinary body', ['塌肩', '包带压痕', '眼下疲惫', '低头站姿', '皱外套'], ['slumped shoulders', 'strap marks', 'tired under-eyes', 'lowered stance', 'creased outerwear'], '压力、职业或末世元素优先现实化为通勤疲态。', 'Realize pressure, occupation, or dystopia as commuting fatigue.'),
      s('canvas_tote_life', '帆布袋生活证据', 'Canvas-Tote Life Evidence', 'symbol', '帆布袋承载文化、职业和日常痕迹', 'canvas tote carrying culture, occupation, and daily traces', ['帆布袋', '书角露出', '咖啡渍', '简单印字', '肩带磨损'], ['canvas tote', 'book corner', 'coffee stain', 'simple print', 'worn strap'], '职业、文化或学生感优先转成帆布袋内容和磨损。', 'Translate occupation, culture, or student mood into tote contents and wear.'),
      s('office_sneaker_blend', '办公室球鞋混合', 'Office-Sneaker Blend', 'cultural_image', '办公服和球鞋之间的都市混合身份', 'urban mixed identity between office clothing and sneakers', ['西装裤', '球鞋', '半塞衬衫', '电脑包', '松领口'], ['suit trousers', 'sneakers', 'half-tucked shirt', 'laptop bag', 'loose collar'], '职业身份优先与街头鞋履和通勤包混合，不变正式制服。', 'Blend occupational identity with street footwear and commuter bag, not formal uniform.'),
      s('earphone_isolation_field', '耳机隔离场', 'Earphone Isolation Field', 'symbol', '耳机制造个人边界和内心空间', 'earphones creating personal boundary and inner space', ['有线耳机', '单耳摘下', '线缆垂落', '低头神态', '冷白屏光'], ['wired earphones', 'one ear removed', 'hanging cable', 'lowered head', 'cold screen light'], '孤独、警觉或内心戏优先转成耳机隔离。', 'Translate loneliness, alertness, or interiority into earphone isolation.'),
      s('rain_commute_surface', '雨天通勤表面', 'Rain-Commute Surface', 'material', '天气和日常压力留在衣物表面', 'weather and daily pressure left on garment surface', ['雨点痕', '湿袖口', '伞柄', '裤脚深色', '头发微湿'], ['rain marks', 'wet cuffs', 'umbrella handle', 'darkened hem', 'slightly wet hair'], '天气、情绪和疲惫优先转成雨天通勤表面痕迹。', 'Translate weather, emotion, and fatigue into rainy-commute surface traces.'),
      s('last_train_noir', '末班车冷白', 'Last-Train Cold White', 'cultural_image', '夜晚末班车里的疲惫与警觉', 'fatigue and alertness on a late-night last train', ['夜色外套', '紧握手机', '困倦眼神', '包贴膝盖', '冷白屏光'], ['night outerwear', 'phone held tight', 'sleepy gaze', 'bag against knees', 'cold screen glow'], '夜行、危险或孤独感优先转成末班车姿态和屏幕光。', 'Translate nocturnal, dangerous, or lonely mood into last-train posture and screen light.'),
      s('normcore_blankness', 'Normcore空白感', 'Normcore Blankness', 'material', '普通衣物成为低声量身份', 'ordinary clothes becoming low-volume identity', ['白T', '直筒裤', '普通外套', '无标识', '自然站姿'], ['white tee', 'straight pants', 'ordinary jacket', 'no logo', 'natural stance'], '强风格必须先降噪为普通衣物，只留一个可解释重点。', 'Tone strong style down into ordinary clothing, leaving one explainable accent.'),
      s('daily_carry_grid', '日常携带网格', 'Daily-Carry Grid', 'function', '手机、钥匙、卡套和包形成生活系统', 'phone, keys, card holder, and bag forming life system', ['卡套', '钥匙', '手机', '水杯', '包内露出'], ['card holder', 'keys', 'phone', 'bottle', 'bag contents'], '道具和身份信息优先进入日常携带网格。', 'Put prop and identity information into daily-carry grid.'),
      s('creased_life_fit', '生活压皱穿搭', 'Creased-Life Fit', 'material', '坐车、工作和疲惫压出真实褶皱', 'transit, work, and fatigue pressing real creases', ['背部压痕', '袖口皱褶', '坐痕', '软塌领口', '灰尘边'], ['back creases', 'wrinkled cuff', 'sitting mark', 'slumped collar', 'dust edge'], '生活痕迹必须落到真实褶皱和使用痕迹。', 'Place lived traces into real creases and use marks.'),
      s('ordinary_person_star', '普通人明星化', 'Ordinary-Person Star', 'cultural_image', '普通通勤者被轻微明星化但不脱离现实', 'ordinary commuter slightly star-ified without leaving reality', ['普通外套', '干净发型', '一个亮点', '镜头感站姿', '克制表情'], ['ordinary jacket', 'clean hair', 'one accent', 'camera-aware stance', 'restrained face'], '明星或偶像元素只允许轻微提升普通人质感。', 'Allow celebrity or idol elements only as subtle elevation of ordinary-person texture.')
    ]
  },
  {
    slug: 'influencer_street',
    name: '网红街拍',
    nameEn: 'Influencer Street Snap',
    focus: '镜头意识、社交媒体符号、流行穿搭和可传播轮廓统摄角色',
    focusEn: 'camera awareness, social-media signs, trend styling, and shareable silhouette governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['pose', 'costume', 'makeup', 'symbol', 'material'],
    defaultControls: ['influencer_street', 'camera_body', 'shareable_style'],
    items: [
      s('fit_check_protocol', 'Fit Check协议', 'Fit-Check Protocol', 'pose', '全身穿搭必须一眼可读、可截图传播', 'full outfit must read instantly and be screenshot-shareable', ['正面全身', '单脚前伸', '手拿手机', '包袋展示', '清楚轮廓'], ['frontal full body', 'one foot forward', 'phone in hand', 'bag display', 'clear silhouette'], '复杂风格优先整理成一眼可读的fit check轮廓。', 'Organize complex style into instantly readable fit-check silhouette.'),
      s('mirror_selfie_body', '镜前自拍身体', 'Mirror-Selfie Body', 'pose', '自拍姿态改变手、脸和身体角度', 'selfie posture changing hand, face, and body angle', ['手机遮脸', '半侧身', '手腕角度', '腰线突出', '镜面光'], ['phone covering face', 'half-profile', 'wrist angle', 'waistline emphasis', 'mirror light'], '社交、隐私或欲望元素优先转成镜前自拍身体。', 'Translate sociality, privacy, or desire into mirror-selfie body.'),
      s('micro_trend_uniform', '微趋势制服', 'Micro-Trend Uniform', 'cultural_image', '短周期流行元素被统一成完整穿搭', 'short-cycle trend elements unified into a complete outfit', ['流行色', '小包', '热门裤型', '发夹', '同色鞋'], ['trend color', 'tiny bag', 'popular pant shape', 'hair clip', 'matching shoes'], '分散潮流元素必须被统一成一个微趋势主题。', 'Unify scattered trend elements into one micro-trend theme.'),
      s('clean_girl_street', '干净女孩街头', 'Clean-Girl Street', 'cultural_image', '清洁、光泽和低对比构成城市流行感', 'cleanliness, gloss, and low contrast forming urban trend feeling', ['光泽皮肤', '盘发', '白色背心', '金色小饰', '浅色裤'], ['glossy skin', 'slick bun', 'white tank', 'small gold jewelry', 'light pants'], '性感、静奢或通勤元素优先转成干净女孩街头秩序。', 'Translate sensual, quiet-luxury, or commuter elements into clean-girl street order.'),
      s('hot_girl_walk_axis', 'Hot Girl Walk轴线', 'Hot-Girl-Walk Axis', 'pose', '自信步行和身体曲线成为传播图像', 'confident walk and body line becoming shareable image', ['前进步伐', '贴身上衣', '耳机', '太阳镜', '稳定髋线'], ['forward stride', 'fitted top', 'earphones', 'sunglasses', 'stable hip line'], '动作和自信优先转成街拍步行轴线。', 'Translate motion and confidence into street-snap walking axis.'),
      s('luxury_street_borrowing', '借奢街拍', 'Borrowed-Luxury Street Snap', 'symbol', '少量奢华符号被街头穿搭借用但不变品牌广告', 'few luxury signs borrowed by street outfit without becoming brand ad', ['无logo小包', '金属扣', '干净鞋', '墨镜', '低调高光'], ['logo-free tiny bag', 'metal buckle', 'clean shoes', 'sunglasses', 'subtle highlight'], '贵族和财富元素只能作为少量借用的材料重点。', 'Allow aristocracy and wealth only as few borrowed material accents.'),
      s('viral_color_block', '病毒式色块', 'Viral Color Block', 'material', '强烈但简单的配色让角色可传播', 'strong but simple color blocking making character shareable', ['两到三色', '高识别色块', '鞋包呼应', '背景无关', '轮廓清楚'], ['two to three colors', 'recognizable blocks', 'shoe-bag echo', 'background independent', 'clear silhouette'], '色彩冲突必须被整理成传播友好的两三色系统。', 'Organize color conflict into shareable two-or-three-color system.'),
      s('posing_accessory_logic', '摆拍配件逻辑', 'Posing-Accessory Logic', 'prop', '配件必须服务手势和镜头，而非散乱堆叠', 'accessories must serve gesture and camera, not scattered pileup', ['手拿小包', '墨镜上推', '咖啡杯', '手机壳', '手部留白'], ['tiny bag in hand', 'pushed-up shades', 'coffee cup', 'phone case', 'hand negative space'], '道具优先成为摆拍动作的一部分。', 'Make props part of posing action first.'),
      s('algorithmic_cuteness', '算法可爱感', 'Algorithmic Cuteness', 'cultural_image', '可爱符号被简化到容易被识别和复制', 'cute signs simplified for recognition and replication', ['蝴蝶结', '心形小件', '浅色滤镜', '圆润发型', '轻微歪头'], ['bows', 'heart trinkets', 'light filter feel', 'rounded hair', 'slight head tilt'], '可爱、偶像或奇幻元素优先变成算法可识别的低复杂度符号。', 'Translate cute, idol, or fantasy elements into low-complexity algorithm-readable signs.'),
      s('street_editorial_pose', '街头编辑姿态', 'Street Editorial Pose', 'pose', '街拍和杂志造型之间的高级平衡', 'high-style balance between street snap and editorial posing', ['夸张站位', '普通街服', '冷脸', '手部造型', '干净负空间'], ['dramatic stance', 'ordinary streetwear', 'cool face', 'hand styling', 'clean negative space'], '高定、时尚和街头元素优先在姿态层融合。', 'Fuse couture, fashion, and street elements primarily through pose.')
    ]
  },
  {
    slug: 'rave_electronic',
    name: '电子锐舞',
    nameEn: 'Rave Electronic',
    focus: '电子音乐、夜光材料、身体节奏和临时社群统摄角色',
    focusEn: 'electronic music, luminous material, body rhythm, and temporary community governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'pose', 'symbol', 'costume'],
    defaultControls: ['rave_electronic', 'temporary_community', 'luminous_body'],
    items: [
      s('warehouse_rave_uniform', '仓库锐舞制服', 'Warehouse Rave Uniform', 'cultural_image', '工业空间里的黑色层次和夜光小件', 'black layers and luminous small objects from warehouse rave', ['黑色背心', '工装裤', '荧光线', '汗光', '低光姿态'], ['black tank', 'cargo pants', 'fluorescent line', 'sweat shine', 'low-light pose'], '音乐、工业或夜行元素优先转成仓库锐舞身体。', 'Translate music, industry, or nocturnal elements into warehouse-rave body.'),
      s('reflective_dance_lines', '反光舞动线', 'Reflective Dance Lines', 'material', '反光线条随动作显示节奏', 'reflective lines revealing rhythm through movement', ['反光织带', '袖侧线', '裤侧线', '移动高光', '黑底'], ['reflective webbing', 'sleeve side line', 'pant side line', 'moving highlight', 'black base'], '技术和色彩元素优先成为随动作出现的反光线。', 'Translate tech and color into reflective lines visible in motion.'),
      s('plastic_future_club', '塑料未来夜场', 'Plastic Future Club', 'material', '廉价塑料和未来感共同形成电子氛围', 'cheap plastic and futurity jointly forming electronic atmosphere', ['透明塑料', '银色片', '荧光扣', '合成面料', '冷色高光'], ['clear plastic', 'silver pieces', 'fluorescent buckle', 'synthetic fabric', 'cool highlight'], '科幻元素必须夜场材料化，不扩散成完整赛博城市。', 'Materialize sci-fi as nightlife material, not full cyber city.'),
      s('dj_booth_black', 'DJ台黑色系统', 'DJ-Booth Black System', 'function', '音乐控制者的黑色功能穿搭', 'black functional styling of a music controller', ['黑T', '耳机', '线缆', '手腕设备', '专注低头'], ['black tee', 'headphones', 'cables', 'wrist device', 'focused lowered head'], '技术、音乐和职业元素优先变成DJ式控制系统。', 'Translate tech, music, and occupation into DJ-like control system.'),
      s('festival_wrist_code', '音乐节腕部编码', 'Festival Wrist Code', 'symbol', '腕部许可、社群和时间信息组织身份', 'wrist permission, community, and time info organizing identity', ['多层手环', '荧光扣', '手背印章', '汗痕', '举手姿态'], ['layered wristbands', 'fluorescent clasp', 'hand stamp', 'sweat mark', 'raised hand'], '许可、队伍或仪式元素优先集中到腕部编码。', 'Concentrate permission, crew, or ritual elements into wrist codes.'),
      s('bass_body_posture', '低音身体姿态', 'Bass-Body Posture', 'pose', '低音让身体前倾、下沉和律动', 'bass making body lean, sink, and pulse', ['弯膝', '前倾', '肩部节奏', '半闭眼', '手部悬空'], ['bent knees', 'forward lean', 'shoulder rhythm', 'half-closed eyes', 'floating hands'], '动作、情绪和能量优先表现为低音身体姿态。', 'Express action, emotion, and energy as bass-body posture.'),
      s('uv_symbol_marks', 'UV符号标记', 'UV Symbol Marks', 'symbol', '临时荧光标记成为社群符号', 'temporary UV marks becoming community signs', ['荧光涂线', '手臂小图形', '脸部点状光', '黑底衣物', '临时感'], ['fluorescent line', 'small arm graphic', 'face light dots', 'black-base clothing', 'temporary feel'], '符号和超现实色彩优先临时UV化。', 'Make symbols and surreal colors temporary UV marks.'),
      s('post_rave_morning', '锐舞后清晨', 'Post-Rave Morning', 'cultural_image', '夜后疲惫和清晨光共同改变角色', 'after-night fatigue and morning light changing character', ['眼妆残留', '外套裹身', '晨光冷白', '鞋底灰尘', '安静表情'], ['makeup residue', 'coat wrapped around body', 'cold morning light', 'dusty soles', 'quiet face'], '疲惫、亲密和孤独优先转成锐舞后清晨痕迹。', 'Translate fatigue, intimacy, and loneliness into post-rave morning traces.'),
      s('cyber_rave_threshold', '赛博锐舞阈值', 'Cyber-Rave Threshold', 'ontology', '赛博感只保留在夜光设备和身体接口边缘', 'cyber feeling kept only at luminous devices and body-interface edges', ['发光贴片', '细线缆', '透明眼镜', '黑衣', '局部LED'], ['glowing patch', 'thin cable', 'clear glasses', 'black clothing', 'local LED'], '机械或科幻元素只允许局部接口化，避免全身赛博朋克失控。', 'Allow mechanical or sci-fi elements only as local interfaces, avoiding full cyberpunk takeover.', { ontologyLevel: 3, risk: 'medium' }),
      s('temporary_tribe_light', '临时部落光', 'Temporary-Tribe Light', 'symbol', '灯光和手环创造短暂共同体', 'light and wristbands creating temporary community', ['同色光点', '手环', '群体色', '手势呼应', '夜色材料'], ['same-color light points', 'wristbands', 'group color', 'echoed gestures', 'night material'], '宗教、队伍或社群元素优先变成锐舞临时共同体符号。', 'Translate religion, crew, or community into temporary rave-tribe signs.')
    ]
  },
  {
    slug: 'workwear_utility',
    name: '工装实用',
    nameEn: 'Workwear Utility',
    focus: '劳动材料、收纳结构、耐磨痕迹和城市实用主义统摄角色',
    focusEn: 'labor material, storage structure, durable traces, and urban pragmatism governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'material', 'prop', 'pose'],
    defaultControls: ['workwear_utility', 'durability', 'functional_evidence'],
    items: [
      s('carpenter_pocket_logic', '木工口袋逻辑', 'Carpenter-Pocket Logic', 'function', '工具位和裤片结构决定视觉秩序', 'tool positions and pant panels determining visual order', ['工具裤', '锤环', '侧袋', '厚帆布', '膝部磨损'], ['carpenter pants', 'hammer loop', 'side pocket', 'heavy canvas', 'knee wear'], '道具和职业元素优先进入工具位和侧袋结构。', 'Put props and occupational elements into tool positions and side-pocket structure.'),
      s('canvas_durability_field', '帆布耐磨场', 'Canvas Durability Field', 'material', '厚帆布和磨白边缘建立可信使用感', 'heavy canvas and faded edges creating credible use', ['帆布外套', '磨白边', '补线', '土色', '硬褶皱'], ['canvas jacket', 'faded edge', 'repair stitch', 'earth tone', 'hard crease'], '废土、劳动或街头元素优先现实化为耐磨帆布。', 'Realize wasteland, labor, or street elements as durable canvas.'),
      s('mechanic_street_clean', '机修街头洁净', 'Mechanic-Street Clean', 'cultural_image', '机修工装被街头整理得可读而不脏乱', 'mechanic workwear street-organized to read clearly without mess', ['工作夹克', '油痕少量', '卷袖', '工具小包', '站姿稳定'], ['work jacket', 'small oil marks', 'rolled sleeves', 'tool pouch', 'stable stance'], '机械和职业元素优先成为少量维护证据，不全身油污。', 'Translate mechanical and occupational elements into small maintenance evidence, not full-body grime.'),
      s('delivery_rider_system', '配送骑手系统', 'Delivery-Rider System', 'function', '城市移动、包体和天气防护组织角色', 'urban mobility, delivery bag, and weather protection organizing character', ['箱包体块', '反光条', '防风外套', '手套', '前倾姿态'], ['boxy bag', 'reflective strip', 'windproof jacket', 'gloves', 'forward lean'], '速度、职业和城市元素优先变成配送骑手功能系统。', 'Translate speed, occupation, and urban elements into delivery-rider function system.'),
      s('utility_apron_street', '工具围裙街头化', 'Utility-Apron Street', 'function', '围裙不只是职业，而是前身收纳结构', 'apron as front-body storage structure, not just occupation', ['半围裙', '前袋', '挂扣', '厚布', '手部工作痕'], ['half apron', 'front pockets', 'hanging clasp', 'heavy cloth', 'hand work traces'], '厨师、工匠或仪式元素优先转成前身收纳结构。', 'Translate chef, craft, or ritual elements into front-body storage structure.'),
      s('washed_work_jacket', '洗旧工作夹克', 'Washed Work Jacket', 'material', '长期清洗让工装变软并保留结构', 'long washing softening workwear while preserving structure', ['洗旧夹克', '褪色蓝', '软领口', '旧扣', '自然皱褶'], ['washed jacket', 'faded blue', 'soft collar', 'old buttons', 'natural creases'], '旧钱、通勤或劳动元素优先变成洗旧工作夹克秩序。', 'Translate old-money, commuting, or labor elements into washed work-jacket order.'),
      s('warehouse_picker_fit', '仓库拣货穿搭', 'Warehouse Picker Fit', 'cultural_image', '仓储劳动的轻便、编号和扫描逻辑', 'warehouse labor logic of lightness, numbers, and scanning', ['马甲', '编号贴', '扫码器', '运动鞋', '快步姿态'], ['vest', 'number sticker', 'scanner', 'sneakers', 'fast-walk pose'], '技术和劳动元素优先变成仓库拣货系统。', 'Translate tech and labor elements into warehouse-picker system.'),
      s('military_surplus_softened', '军剩软化', 'Softened Military Surplus', 'material', '军装剩余物被日常街头软化', 'military surplus softened by everyday streetwear', ['旧军绿', '大口袋', '水洗棉', '无军徽', '松垮袖口'], ['old olive', 'big pockets', 'washed cotton', 'no insignia', 'loose cuffs'], '武装元素必须去标识、日常化、材料软化。', 'Remove insignia, everyday-translate, and soften armed elements.'),
      s('urban_repair_persona', '城市修理者人格', 'Urban Repair Persona', 'cultural_image', '角色像能修好城市里任何小故障', 'character reads like someone who can repair any small urban failure', ['工具包', '胶带', '备用扣', '耐磨裤', '检查姿态'], ['tool pouch', 'tape', 'spare buckle', 'durable pants', 'inspection pose'], '科幻、工匠和末世元素优先转成城市修理者证据。', 'Translate sci-fi, craft, and wasteland elements into urban repair evidence.'),
      s('functional_no_logo_rule', '无Logo功能规则', 'No-Logo Function Rule', 'function', '功能性必须来自结构和材料，而非品牌符号', 'function must come from structure and material, not brand signs', ['无标识', '清晰口袋', '耐磨面料', '低对比', '实用姿态'], ['no logo', 'clear pockets', 'durable fabric', 'low contrast', 'practical pose'], '所有真实品牌和潮牌感必须转译为无标识功能结构。', 'Translate all real-brand and hype-brand feeling into no-logo functional structure.')
    ]
  }
];

export const STREET_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
