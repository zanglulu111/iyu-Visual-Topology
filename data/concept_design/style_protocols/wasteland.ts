import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'WASTELAND';
const ROUTE_NAME = '废土拼接';
const ROUTE_NAME_EN = 'Wasteland Patchwork';
const ERAS = ['modern', 'contemporary', 'near_future', 'timeless'];
const FORBIDS = ['无来源脏乱', '杂物堆', '高级光洁材质主导', '真实政治组织标识', '血腥猎奇', '废土背景抢走人物'];

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
    slug: 'repeated_repair',
    name: '反复修补',
    nameEn: 'Repeated Repair',
    focus: '补丁、缝线、替换件、维修痕迹和长期使用伦理统摄角色',
    focusEn: 'patches, stitches, replacement parts, repair traces, and keep-using ethic governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'wear', 'costume', 'prop'],
    defaultControls: ['repeated_repair', 'repair_evidence', 'use_history'],
    items: [
      s('coarse_patch_map', '粗补丁地图', 'Coarse-Patch Map', 'material', '补丁像地图一样记录材料来源和损伤历史', 'patches recording material source and damage history like a map', ['粗补丁', '异色布', '大针脚', '边缘磨白', '手按补片'], ['coarse patches', 'mismatched cloth', 'large stitches', 'faded edge', 'hand on patch'], '外来元素优先转成补丁位置和来源证据。', 'Translate outside elements into patch placement and source evidence.'),
      s('visible_repair_stitch', '外露修补针脚', 'Visible Repair Stitch', 'material', '针脚必须可见，让修补成为视觉语言', 'stitches must be visible, making repair a visual language', ['粗线', '交叉缝', '外露线头', '袖口补缝', '手工痕'], ['coarse thread', 'cross stitch', 'loose thread ends', 'cuff repair', 'handmade trace'], '破损和身份信息优先被缝进衣物。', 'Stitch damage and identity info into garments.'),
      s('button_mismatch_record', '错扣记录', 'Mismatched-Button Record', 'symbol', '不同扣子说明长期替换和非成套生活', 'different buttons showing long replacement and non-matching life', ['错配纽扣', '旧扣痕', '小色差', '衣襟不齐', '低声量'], ['mismatched buttons', 'old button marks', 'small color differences', 'uneven placket', 'low volume'], '小装饰优先变成替换扣和生活记录。', 'Translate small ornament into replacement buttons and life records.'),
      s('duct_tape_survival', '胶带生存', 'Duct-Tape Survival', 'function', '胶带说明临时解决方案而非随意装饰', 'tape showing temporary solution rather than random decoration', ['灰胶带', '交叉固定', '翘边', '裂口覆盖', '紧急感'], ['gray tape', 'cross fixing', 'peeling edge', 'covered tear', 'urgency'], '冲突和损坏优先用胶带临时固定。', 'Temporarily fix conflict and damage with tape.'),
      s('rethreaded_fastener', '重新穿绳扣件', 'Rethreaded Fastener', 'function', '绳索重新组织失效的扣件系统', 'cord reorganizing failed fastening system', ['重新穿绳', '绳结', '多余线头', '缺扣位置', '手拉绳端'], ['rethreaded cord', 'knots', 'loose ends', 'missing-button position', 'hand pulling cord'], '服装闭合冲突优先转成重新穿绳。', 'Resolve garment closure conflict through rethreading.'),
      s('patched_identity_badge', '补丁身份牌', 'Patched Identity Badge', 'symbol', '身份牌被缝补后仍保留制度残影', 'identity badge patched yet keeping institutional afterimage', ['旧徽章位', '补丁覆盖', '残留编号', '无真实标识', '磨损布面'], ['old badge position', 'patch cover', 'remaining number', 'no real insignia', 'worn cloth'], '组织信息必须变成残留和修补后的虚构身份。', 'Make organization info fictional identity after residue and repair.'),
      s('repair_over_fashion', '修补压过时装', 'Repair Over Fashion', 'cultural_image', '审美来自可继续使用，而非精致造型', 'aesthetic from continued use rather than refined styling', ['实用补片', '旧布层', '不完美比例', '低饱和', '工作姿态'], ['practical patches', 'old cloth layers', 'imperfect proportion', 'low saturation', 'working posture'], '高定和时尚元素必须被修补伦理降级。', 'Downgrade couture and fashion elements through repair ethic.'),
      s('family_mended_cloth', '家传缝补布', 'Family-Mended Cloth', 'symbol', '修补像代际传递的生活记忆', 'repair reading as intergenerational life memory', ['旧布拼片', '手缝边', '温和磨损', '贴身位置', '安静表情'], ['old cloth pieces', 'hand-sewn edge', 'gentle wear', 'close-body placement', 'quiet face'], '亲情、历史和生活元素优先转成家传补布。', 'Translate family, history, and life elements into inherited mended cloth.'),
      s('repair_archive_layers', '维修档案层', 'Repair-Archive Layers', 'symbol', '修补层数像档案一样沉积', 'repair layers accumulating like archives', ['多层补片', '日期小标', '不同线色', '旧新并置', '局部厚度'], ['multi-layer patches', 'small date marks', 'different thread colors', 'old-new contrast', 'local thickness'], '经历和叙事优先沉积到修补层。', 'Let experience and narrative settle into repair layers.'),
      s('damage_has_reason', '破损必须有因', 'Damage Has Reason', 'function', '每个破口都要来自移动、劳动、天气或战斗', 'every tear must come from movement, labor, weather, or combat', ['关节磨损', '受力点破口', '裤脚泥痕', '工具划痕', '无随机脏乱'], ['joint wear', 'stress-point tears', 'muddy hem', 'tool scratches', 'no random dirt'], '删除无来源脏乱，只保留有原因的损耗。', 'Remove sourceless dirt and keep only caused wear.')
    ]
  },
  {
    slug: 'salvage_patchwork',
    name: '拾荒拼接',
    nameEn: 'Salvage Patchwork',
    focus: '再利用篷布、废金属、塑料片、绳索和来源明确的错配材料统摄角色',
    focusEn: 'reused tarp, scrap metal, plastic sheets, rope, and source-readable mismatched material governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'costume', 'prop', 'symbol'],
    defaultControls: ['salvage_patchwork', 'source_material', 'mismatch_logic'],
    items: [
      s('tarp_cloak_shelter', '篷布斗篷庇护', 'Tarp-Cloak Shelter', 'costume', '篷布成为可穿戴庇护而非脏布', 'tarp becoming wearable shelter rather than dirty cloth', ['篷布片', '防水折痕', '绳扣', '大披挂', '身体缩入'], ['tarp sheet', 'waterproof folds', 'cord clasp', 'large drape', 'body tucked in'], '场景和天气优先转成可穿戴篷布庇护。', 'Translate setting and weather into wearable tarp shelter.'),
      s('scrap_metal_shoulder', '废金属肩片', 'Scrap-Metal Shoulder Plate', 'material', '金属来源清楚地成为局部防护', 'metal with clear source becoming local protection', ['废金属片', '铆钉', '不对称肩', '锈边', '绳带固定'], ['scrap metal plate', 'rivets', 'asymmetric shoulder', 'rusted edge', 'cord fixing'], '机械和护甲元素优先拾荒金属化。', 'Translate mechanical and armor elements into salvaged metal.'),
      s('plastic_sheet_layer', '塑料片层', 'Plastic-Sheet Layer', 'material', '廉价塑料提供防雨、隔离和临时保护', 'cheap plastic providing rainproofing, isolation, and temporary protection', ['透明塑料片', '裂纹', '胶带边', '冷反光', '轻量层'], ['clear plastic sheet', 'cracks', 'taped edge', 'cool reflection', 'light layer'], '科幻透明材料优先降级为拾荒塑料片。', 'Downgrade sci-fi transparent material into salvaged plastic sheet.'),
      s('road_sign_armor', '路牌护甲', 'Road-Sign Armor', 'material', '废弃路牌成为有来源的防护面', 'discarded road sign becoming sourced protective surface', ['路牌金属', '褪色油漆', '切割边', '胸肩位置', '警示残色'], ['road-sign metal', 'faded paint', 'cut edge', 'chest-shoulder placement', 'remaining warning color'], '符号和防护优先合并为废弃路牌护甲。', 'Merge sign and protection into discarded road-sign armor.'),
      s('feed_sack_garment', '饲料袋衣物', 'Feed-Sack Garment', 'costume', '工业或农业袋料被重新缝成衣层', 'industrial or agricultural sack material resewn into garment layer', ['袋料纹理', '印字残片', '粗缝线', '硬挺布面', '生活痕迹'], ['sack texture', 'remaining print fragments', 'coarse stitches', 'stiff cloth', 'life trace'], '贫穷和乡土元素优先转成袋料衣物。', 'Translate poverty and rural elements into sack-material garments.'),
      s('rope_harness_patchwork', '绳索拼接背具', 'Rope-Harness Patchwork', 'function', '绳索把不同材料临时连成可穿系统', 'rope temporarily connecting different materials into wearable system', ['粗绳', '交叉背带', '绳结', '挂点', '肩部压痕'], ['coarse rope', 'cross harness', 'knots', 'attachment points', 'shoulder marks'], '混搭材料必须由绳索结构统一。', 'Unify mixed materials through rope structure.'),
      s('can_lid_scale', '罐盖鳞片', 'Can-Lid Scales', 'material', '小金属废片重复成鳞片式表面', 'small scrap metal pieces repeated into scale-like surface', ['罐盖片', '小圆金属', '重复排列', '钝边', '轻响感'], ['can-lid pieces', 'small round metal', 'repeated arrangement', 'dull edges', 'soft clinking feel'], '华丽亮片和护甲元素优先废料鳞片化。', 'Translate sequins and armor into scrap scales.'),
      s('window_mesh_veil', '窗纱面罩', 'Window-Mesh Veil', 'costume', '废旧网格材料成为遮挡和防护', 'old mesh material becoming cover and protection', ['网格面罩', '金属或塑料网', '边缘缝补', '半遮脸', '低可见度'], ['mesh veil', 'metal or plastic mesh', 'patched edge', 'half-covered face', 'low visibility'], '面纱和防护元素优先废网格化。', 'Translate veil and protection into salvaged mesh.'),
      s('salvage_has_origin', '拾荒有来源', 'Salvage Has Origin', 'symbol', '每个材料都能看出前身用途', 'every material must reveal its former use', ['前用途残痕', '旧字样残片', '切割边', '功能位置', '来源可读'], ['former-use trace', 'old text fragments', 'cut edge', 'functional placement', 'readable origin'], '所有拼接材料必须显示来源，不做抽象杂物堆。', 'All patchwork material must show origin, not abstract clutter.'),
      s('mismatch_as_system', '错配成系统', 'Mismatch as System', 'structure', '错配不是乱，而是围绕身体功能分区', 'mismatch is not chaos but body-function zoning', ['上身防护', '下身移动', '腰部收纳', '色彩压低', '分区清楚'], ['upper protection', 'lower mobility', 'waist storage', 'muted color', 'clear zones'], '把所有错配元素按身体功能重新分区。', 'Re-zone all mismatched elements by body function.')
    ]
  },
  {
    slug: 'dust_weathering',
    name: '尘土风化',
    nameEn: 'Dust Weathering',
    focus: '尘、盐、晒褪、裂纹、干燥暴露和环境压力统摄角色',
    focusEn: 'dust, salt, fading, cracks, dry exposure, and environmental pressure governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'skin', 'wear', 'costume'],
    defaultControls: ['dust_weathering', 'environment_exposure', 'surface_age'],
    items: [
      s('sun_faded_cloth', '晒褪布面', 'Sun-Faded Cloth', 'material', '长期日晒让色彩褪成环境色', 'long sun exposure fading colors into environmental tones', ['褪色布', '肩部浅色', '边缘发白', '干硬褶', '眯眼'], ['faded cloth', 'pale shoulders', 'whitened edges', 'dry creases', 'squinting eyes'], '强色彩优先晒褪成低饱和环境色。', 'Sun-fade strong colors into muted environmental tones.'),
      s('salt_crust_edge', '盐壳边缘', 'Salt-Crust Edge', 'material', '盐分在衣物边缘和皮肤上留下白痕', 'salt leaving white traces on garment edges and skin', ['白盐边', '干裂皮肤', '衣领痕', '裤脚痕', '海风感'], ['white salt edge', 'dry cracked skin', 'collar marks', 'hem marks', 'sea-wind feel'], '海岸和干旱元素优先转成盐壳边缘。', 'Translate coast and drought elements into salt-crust edges.'),
      s('dust_on_lower_half', '下半身尘土', 'Lower-Half Dust', 'material', '尘土主要落在鞋、裤脚和膝部', 'dust mainly placed on shoes, hems, and knees', ['鞋面灰尘', '裤脚土色', '膝部磨白', '脚步沉重', '低重心'], ['dusty shoes', 'earth-tone hems', 'faded knees', 'heavy steps', 'low gravity'], '环境痕迹优先下沉到移动部位。', 'Sink environmental traces into moving parts.'),
      s('cracked_leather_surface', '干裂皮革表面', 'Cracked-Leather Surface', 'material', '皮革裂纹说明热、旧和使用时间', 'leather cracks showing heat, age, and use time', ['裂纹皮革', '磨亮折线', '旧腰带', '干硬边', '棕黑色'], ['cracked leather', 'polished crease lines', 'old belt', 'dry hard edge', 'brown-black'], '奢华皮具优先废土化为干裂皮革。', 'Wasteland-translate luxury leather into cracked leather.'),
      s('wind_burn_face', '风灼面部', 'Wind-Burn Face', 'material', '面部有风晒造成的真实变化', 'face carrying realistic wind and sun changes', ['晒红鼻梁', '干唇', '细小皱纹', '眯眼', '尘边发际'], ['sun-reddened nose bridge', 'dry lips', 'fine wrinkles', 'squint', 'dusty hairline'], '美貌和苦难元素优先现实化为风灼。', 'Realize beauty and hardship as wind burn.'),
      s('sand_in_fold', '褶皱藏沙', 'Sand in Folds', 'material', '沙尘停留在衣褶深处形成层次', 'sand staying inside folds to create layering', ['衣褶沙尘', '袖口灰', '袋口土', '低对比', '拍打动作'], ['dust in folds', 'gray cuffs', 'earthy pocket mouth', 'low contrast', 'dusting-off gesture'], '尘土必须有停留位置，不均匀涂满。', 'Dust must have places to settle, not evenly smear everywhere.'),
      s('bleached_plastic_scrap', '漂白塑料废片', 'Bleached Plastic Scrap', 'material', '塑料被日晒漂白后成为冷白废料', 'plastic sun-bleached into cold pale scrap', ['漂白塑料', '脆裂边', '半透明', '胶带固定', '冷白反光'], ['bleached plastic', 'brittle edge', 'translucency', 'tape fixing', 'cold pale reflection'], '科技透明材质优先环境风化。', 'Weather transparent tech material through environment.'),
      s('heat_wrinkled_fabric', '热皱布料', 'Heat-Wrinkled Fabric', 'material', '高温让布料变硬、收缩和皱缩', 'heat making fabric hard, shrunk, and wrinkled', ['热皱', '缩边', '硬褶', '焦浅边', '干燥垂坠'], ['heat wrinkles', 'shrunk edge', 'hard creases', 'light scorch edge', 'dry drape'], '火和高温元素优先转成热皱表面。', 'Translate fire and heat into heat-wrinkled surfaces.'),
      s('environment_over_dirt', '环境优先于脏', 'Environment Over Dirt', 'function', '表面痕迹必须说明气候，不做单纯脏乱', 'surface traces must explain climate, not mere dirtiness', ['晒褪', '风尘', '盐痕', '干裂', '分布合理'], ['fading', 'wind dust', 'salt marks', 'cracking', 'reasonable distribution'], '所有脏污必须绑定气候来源。', 'Bind all dirt to climate source.'),
      s('clean_silhouette_dirty_surface', '干净轮廓脏表面', 'Clean Silhouette Dirty Surface', 'structure', '轮廓保持清楚，风化只在表面发生', 'silhouette stays clear while weathering happens on surfaces', ['清楚外轮廓', '表面灰尘', '局部裂纹', '道具可读', '不杂乱'], ['clear outline', 'surface dust', 'local cracks', 'readable props', 'not messy'], '废土不能破坏角色识别轮廓。', 'Wasteland must not break character readability.')
    ]
  },
  {
    slug: 'scarcity_load',
    name: '稀缺负重',
    nameEn: 'Scarcity Load',
    focus: '水、食物、燃料、药品、背负和资源优先级统摄角色',
    focusEn: 'water, food, fuel, medicine, carrying, and resource priority governing character',
    defaultKind: 'function',
    defaultAffects: ['prop', 'costume', 'pose', 'symbol'],
    defaultControls: ['scarcity_load', 'resource_priority', 'carry_logic'],
    items: [
      s('water_bladder_priority', '水袋优先', 'Water-Bladder Priority', 'function', '水资源比武器和装饰更重要', 'water resource more important than weapon or ornament', ['水袋', '软管', '肩带', '透明水位', '护水姿态'], ['water bladder', 'tube', 'shoulder strap', 'visible waterline', 'guarding posture'], '道具冲突优先保留水源系统。', 'Prioritize water system when prop conflict occurs.'),
      s('ration_packet_grid', '口粮包网格', 'Ration-Packet Grid', 'function', '食物以小包分配形成身体网格', 'food distributed as small packets forming body grid', ['口粮包', '腰侧排列', '小布袋', '编号', '手数包'], ['ration packets', 'side-waist row', 'small cloth bags', 'numbers', 'counting hand'], '丰饶和生存元素优先转成口粮管理。', 'Translate abundance and survival into ration management.'),
      s('medicine_last_vial', '最后药瓶', 'Last Medicine Vial', 'prop', '一小瓶药成为稀缺世界的价值中心', 'one small medicine vial as value center of scarce world', ['小药瓶', '软布包', '标签', '贴身口袋', '警惕手势'], ['small vial', 'soft cloth wrap', 'label', 'inner pocket', 'guarded gesture'], '医疗和珍贵元素优先集中到一件小药瓶。', 'Concentrate medical and precious elements into one small vial.'),
      s('fuel_can_balance', '燃料罐平衡', 'Fuel-Can Balance', 'function', '燃料重量影响站姿和负重方式', 'fuel weight influencing posture and carrying method', ['小燃料罐', '手提或背挂', '油渍少量', '金属磨损', '身体偏重'], ['small fuel can', 'hand or back carry', 'few oil marks', 'worn metal', 'weighted body'], '载具和能源元素优先燃料罐化。', 'Translate vehicle and energy elements into fuel-can logic.'),
      s('multi_pouch_survival_belt', '多袋生存腰带', 'Multi-Pouch Survival Belt', 'function', '腰部管理小资源而非挂满杂物', 'waist managing small resources rather than clutter', ['多小袋', '标签绳', '小刀工具', '水壶位', '清楚分区'], ['many small pouches', 'tag cords', 'small knife tool', 'canteen slot', 'clear zones'], '小道具必须按资源类型分区。', 'Zone small props by resource type.'),
      s('blanket_roll_weight', '毯卷重量', 'Blanket-Roll Weight', 'prop', '毯卷说明睡眠、迁徙和庇护', 'blanket roll showing sleep, migration, and shelter', ['毯卷', '背部横绑', '旧布绳', '压肩痕', '疲惫姿态'], ['blanket roll', 'horizontal back tie', 'old cloth cord', 'shoulder pressure mark', 'tired posture'], '生活和迁徙元素优先毯卷化。', 'Translate life and migration elements into blanket roll.'),
      s('filter_mask_resource', '滤气面罩资源', 'Filter-Mask Resource', 'function', '呼吸防护被当作稀缺资源使用', 'respiratory protection used as scarce resource', ['滤罐', '半面罩', '替换滤芯', '颈部挂带', '节省使用感'], ['filter canister', 'half mask', 'spare filter', 'neck strap', 'used sparingly'], '污染和科技元素优先进入滤气资源。', 'Translate pollution and tech into filter-mask resource.', { ontologyLevel: 2, risk: 'medium' }),
      s('resource_count_tokens', '资源计数牌', 'Resource-Count Tokens', 'symbol', '小牌记录水、药或通行次数', 'small tokens recording water, medicine, or passage counts', ['计数牌', '绳串', '刻痕', '腰间挂', '手指拨动'], ['count tokens', 'cord string', 'notches', 'waist hanging', 'finger counting'], '经济和制度元素优先转成资源计数。', 'Translate economy and institution into resource counting.'),
      s('carry_weight_pose', '负重姿态', 'Carry-Weight Pose', 'pose', '资源重量改变肩、背和脚步', 'resource weight changing shoulders, back, and steps', ['一肩下沉', '手扶背带', '膝部微弯', '脚步慢', '背包体块'], ['one shoulder dropped', 'hand holding strap', 'slightly bent knees', 'slow steps', 'pack volume'], '道具必须影响身体，不是浮在身上。', 'Props must affect body, not float on it.'),
      s('scarcity_over_decoration', '稀缺压过装饰', 'Scarcity Over Decoration', 'function', '优先保留生存资源，删除无意义装饰', 'survival resource kept first, meaningless decoration removed', ['水食药优先', '少量道具', '功能明确', '重量可读', '无杂物堆'], ['water-food-medicine first', 'few props', 'clear function', 'readable weight', 'no clutter pile'], '所有外来元素先问是否服务稀缺生存。', 'Ask first whether each outside element serves scarce survival.')
    ]
  },
  {
    slug: 'improvised_armor',
    name: '临时护甲',
    nameEn: 'Improvised Armor',
    focus: '错配护具、废板、轮胎橡胶、临时扣件和人体防护分区统摄角色',
    focusEn: 'mismatched guards, scrap plates, tire rubber, temporary fasteners, and body protection zones governing character',
    defaultKind: 'structure',
    defaultAffects: ['silhouette', 'costume', 'material', 'wear'],
    defaultControls: ['improvised_armor', 'protection_zone', 'temporary_fastening'],
    items: [
      s('tire_rubber_shoulder', '轮胎橡胶肩甲', 'Tire-Rubber Shoulder Guard', 'material', '轮胎橡胶成为钝重防护材料', 'tire rubber becoming blunt heavy protection material', ['黑橡胶', '弧形肩片', '磨白边', '粗螺丝', '低重心'], ['black rubber', 'curved shoulder piece', 'whitened edges', 'coarse screws', 'low gravity'], '机械和护甲元素优先橡胶废料化。', 'Translate mechanical and armor elements into rubber scrap.'),
      s('sports_guard_reuse', '运动护具再利用', 'Reused Sports Guards', 'function', '旧运动护具成为临时战斗防护', 'old sports guards becoming temporary combat protection', ['护膝护肘', '旧塑料壳', '绑带松紧', '擦痕', '移动姿态'], ['knee-elbow pads', 'old plastic shell', 'elastic straps', 'scratches', 'moving pose'], '运动和战斗元素优先用旧护具调和。', 'Mediate sport and combat with old guards.'),
      s('pot_lid_chestplate', '锅盖胸甲', 'Pot-Lid Chestplate', 'material', '生活用品被迫承担防护职责', 'household object forced into protection duty', ['锅盖金属', '圆形胸片', '把手残留', '绳带固定', '幽默但可信'], ['pot-lid metal', 'round chest plate', 'remaining handle', 'strap fixing', 'funny but credible'], '荒诞元素必须有生存原因和功能位置。', 'Absurd elements must have survival reason and functional placement.'),
      s('layered_cardboard_guard', '纸板层护具', 'Layered Cardboard Guard', 'material', '多层纸板成为低资源防护', 'layered cardboard becoming low-resource protection', ['纸板层', '胶带边', '折痕', '胸腹位置', '脆弱感'], ['cardboard layers', 'tape edge', 'creases', 'torso placement', 'fragility'], '贫穷和防护优先转成纸板层。', 'Translate poverty and protection into cardboard layers.'),
      s('asymmetric_guard_logic', '不对称护具逻辑', 'Asymmetric Guard Logic', 'structure', '只保护最常受击或最脆弱的一侧', 'protecting only most-hit or most-vulnerable side', ['单侧护肩', '一边重', '手臂护具', '侧身姿态', '功能解释'], ['one-sided shoulder guard', 'one side heavy', 'arm guard', 'side stance', 'functional explanation'], '错配必须按受击方向解释。', 'Explain mismatch by impact direction.'),
      s('patched_helmet_shell', '补壳头盔', 'Patched Helmet Shell', 'material', '头盔由不同壳片修补而成', 'helmet repaired from different shell pieces', ['旧头盔', '补壳', '绑带', '无真实徽章', '面部阴影'], ['old helmet', 'patched shell', 'straps', 'no real insignia', 'facial shadow'], '头部防护必须虚构化且来源可读。', 'Head protection must be fictionalized and source-readable.'),
      s('wood_slat_guard', '木板条护具', 'Wood-Slat Guard', 'material', '木板条提供低技术防护和生活痕迹', 'wood slats providing low-tech protection and life traces', ['木板条', '绳绑', '裂纹', '肩胸排列', '干燥边'], ['wood slats', 'rope tie', 'cracks', 'shoulder-chest arrangement', 'dry edge'], '乡土和防护元素优先木板条化。', 'Translate rural and protection elements into wood-slat guards.'),
      s('shield_from_signboard', '招牌盾', 'Signboard Shield', 'prop', '旧招牌成为可举起的防护道具', 'old signboard becoming liftable protective prop', ['旧招牌', '手把', '褪色字块', '边缘凹痕', '前臂支撑'], ['old signboard', 'handle', 'faded text blocks', 'dented edge', 'forearm support'], '符号和护盾优先合并成旧招牌盾。', 'Merge sign and shield into old signboard shield.'),
      s('imperfect_fit_armor', '不合身护甲', 'Ill-Fit Armor', 'structure', '临时护甲不完美贴合但仍可用', 'temporary armor fits imperfectly but remains usable', ['错位绑带', '缝隙', '偏大护片', '手动调整', '身体迁就'], ['misaligned straps', 'gaps', 'oversized plates', 'manual adjustment', 'body accommodating'], '废土护甲必须保留临时性和不完美。', 'Wasteland armor must keep temporariness and imperfection.'),
      s('protection_not_power_armor', '防护非动力甲', 'Protection Not Power Armor', 'function', '临时护甲只保护身体，不给英雄机甲感', 'improvised armor only protects body, not heroic power-armor feeling', ['低技术', '来源材料', '人体比例', '无全身硬壳', '动作受限'], ['low-tech', 'source material', 'human proportion', 'no full hard shell', 'limited motion'], '所有机甲倾向必须降级为临时防护。', 'Downgrade all mech tendencies into improvised protection.', { ontologyLevel: 2, risk: 'medium' })
    ]
  },
  {
    slug: 'faded_identity',
    name: '褪色身份',
    nameEn: 'Faded Identity',
    focus: '残破制服、旧工牌、褪色徽章和过去制度的遗迹统摄角色',
    focusEn: 'damaged uniforms, old work IDs, faded badges, and remnants of past institutions governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'costume', 'identity', 'wear'],
    defaultControls: ['faded_identity', 'institution_remnant', 'no_real_badge'],
    items: [
      s('old_uniform_afterlife', '旧制服余生', 'Old-Uniform Afterlife', 'cultural_image', '旧制度制服脱离原机构后继续被穿着', 'old institutional uniform continuing after leaving its institution', ['褪色制服', '拆掉徽章', '补丁覆盖', '旧口袋', '疲惫站姿'], ['faded uniform', 'removed badge', 'patch cover', 'old pockets', 'tired stance'], '职业和历史元素优先变成旧制服余生。', 'Translate occupation and history into old-uniform afterlife.'),
      s('work_badge_erased', '工牌被磨去', 'Erased Work Badge', 'symbol', '工牌还在，但名字和机构已不可读', 'work badge remains but name and institution are unreadable', ['旧工牌', '刮花塑料', '模糊照片', '断挂绳', '胸前垂落'], ['old work ID', 'scratched plastic', 'blurred photo', 'broken lanyard', 'hanging at chest'], '身份信息必须残缺和虚构化。', 'Keep identity information incomplete and fictional.'),
      s('school_patch_remnant', '校徽残片', 'School-Patch Remnant', 'symbol', '校园身份成为被覆盖的青春残迹', 'school identity becoming covered youth remnant', ['校徽位置', '补丁遮盖', '旧领口', '书包带', '年轻疲惫'], ['school-patch position', 'patch cover', 'old collar', 'bag strap', 'young fatigue'], '青春和制度元素优先变成校园残片。', 'Translate youth and institution into school remnants.'),
      s('hospital_scrub_ruin', '洗旧手术服', 'Washed-Out Scrubs', 'costume', '医护服在灾后被继续使用', 'medical scrubs continuing to be used after collapse', ['洗旧手术服', '口袋药瓶', '褪色蓝绿', '袖口污痕', '救援姿态'], ['washed scrubs', 'medicine in pocket', 'faded blue-green', 'cuff stains', 'rescue posture'], '医疗和废土元素优先变成洗旧医护身份。', 'Translate medicine and wasteland into washed medical identity.'),
      s('security_patch_ghost', '保安贴章幽影', 'Security-Patch Ghost', 'symbol', '旧安保身份只剩贴章轮廓', 'old security identity left as patch silhouette', ['贴章痕', '旧黑外套', '腰带空位', '手电', '警觉眼神'], ['patch shadow', 'old black jacket', 'empty belt slot', 'flashlight', 'alert eyes'], '武装和制度元素优先虚构为旧安保残影。', 'Fictionalize armed and institutional elements as old security ghost.'),
      s('factory_name_tape', '工厂姓名布条', 'Factory Name Tape', 'symbol', '姓名布条说明过去的劳动身份', 'name tape showing past labor identity', ['姓名布条', '油污边', '工装衬衫', '断线', '手部粗糙'], ['name tape', 'oil edge', 'work shirt', 'broken thread', 'rough hands'], '劳动和身份信息优先成为姓名布条。', 'Translate labor and identity info into name tape.'),
      s('military_surplus_erased', '军剩去标识', 'Erased Military Surplus', 'costume', '军装剩余物被去标识后成为生存衣物', 'military surplus becoming survival garment after insignia removal', ['军绿旧衣', '拆徽痕', '大口袋', '水洗棉', '无真实军标'], ['old olive garment', 'removed-insignia mark', 'big pockets', 'washed cotton', 'no real military sign'], '武装元素必须去真实标识。', 'Remove real insignia from armed elements.'),
      s('transit_worker_leftover', '交通工制服遗留', 'Transit Worker Leftover', 'cultural_image', '旧交通系统身份残留在反光条和外套上', 'old transit identity remaining on reflective strips and jacket', ['反光条', '旧制服外套', '票夹', '褪色编号', '夜行姿态'], ['reflective strip', 'old uniform jacket', 'ticket clip', 'faded number', 'night-walk posture'], '城市和职业元素优先变成交通系统遗留。', 'Translate city and occupation into transit-system remnants.'),
      s('ceremonial_rank_faded', '礼制等级褪色', 'Faded Ceremonial Rank', 'symbol', '旧礼仪等级被灾后使用磨损', 'old ceremonial rank worn down by post-collapse use', ['褪色色带', '旧肩章位', '补丁压过', '破边礼服', '直背疲惫'], ['faded color band', 'old epaulet position', 'patch over it', 'frayed formalwear', 'tired straight back'], '贵族和制度元素优先残留化。', 'Make aristocratic and institutional elements remnants.'),
      s('identity_is_remnant', '身份即残留', 'Identity as Remnant', 'symbol', '废土身份不是完整职业，而是过去身份的残留物', 'wasteland identity is not full occupation but remnant of past identity', ['残缺标记', '无真实机构', '被覆盖', '继续使用', '历史重量'], ['incomplete mark', 'no real institution', 'covered over', 'continued use', 'historical weight'], '所有身份标记必须像过去制度的遗物。', 'All identity marks must read as relics of past institutions.')
    ]
  },
  {
    slug: 'portable_shelter',
    name: '便携庇护',
    nameEn: 'Portable Shelter',
    focus: '披布、床卷、遮阳层、帐篷片和移动住所统摄角色',
    focusEn: 'drapes, bedrolls, sun covers, tent pieces, and mobile shelter governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'silhouette', 'pose'],
    defaultControls: ['portable_shelter', 'mobile_home', 'weather_protection'],
    items: [
      s('bedroll_back_axis', '背后床卷轴', 'Bedroll Back Axis', 'prop', '床卷横在背后形成旅居轴线', 'bedroll across back forming mobile-living axis', ['床卷', '横绑背后', '绳扣', '压肩', '疲惫站姿'], ['bedroll', 'horizontal back tie', 'cord clasp', 'shoulder pressure', 'tired stance'], '旅行和生活元素优先床卷化。', 'Translate travel and life elements into bedroll.'),
      s('sunshade_head_cloth', '遮阳头布', 'Sunshade Head Cloth', 'costume', '头部遮阳层说明热、迁徙和脆弱', 'head sun cover showing heat, migration, and vulnerability', ['头巾', '垂布', '眼部阴影', '晒褪色', '手扶布边'], ['head scarf', 'falling cloth', 'eye shadow', 'sun-faded color', 'hand on cloth edge'], '头饰和环境元素优先变成遮阳系统。', 'Translate headwear and environment into sunshade system.'),
      s('tent_piece_cloak', '帐篷片斗篷', 'Tent-Piece Cloak', 'costume', '帐篷材料变成能穿的临时住所', 'tent material becoming wearable temporary home', ['帐篷布', '金属扣眼', '防水折线', '大斗篷', '身体包裹'], ['tent cloth', 'metal grommets', 'waterproof folds', 'large cloak', 'body wrap'], '场景和庇护优先服装化。', 'Garment-translate setting and shelter.'),
      s('mosquito_net_veil', '蚊帐面纱', 'Mosquito-Net Veil', 'costume', '防虫网成为轻薄遮蔽和生态证据', 'mosquito net becoming light veil and ecological evidence', ['细网纱', '面部半遮', '边缘补缝', '浅灰白', '静止眼神'], ['fine mesh', 'half-covered face', 'patched edge', 'pale gray-white', 'still eyes'], '面纱和生态元素优先蚊帐化。', 'Translate veil and ecology into mosquito-net material.'),
      s('rain_cape_pack', '雨披背包', 'Rain-Cape Pack', 'function', '雨披和背包合并成天气生存系统', 'rain cape and backpack merging into weather survival system', ['雨披', '背包隆起', '水痕', '帽檐', '前倾步伐'], ['rain cape', 'pack bulge', 'water marks', 'hood brim', 'forward step'], '天气和负重优先合并成雨披背包。', 'Merge weather and carrying into rain-cape pack.'),
      s('blanket_as_status', '毯子即阶层', 'Blanket as Status', 'symbol', '毯子质量和位置说明资源地位', 'blanket quality and placement showing resource status', ['旧毯子', '肩上披', '边缘破损', '贴身护持', '暖色残留'], ['old blanket', 'over shoulders', 'frayed edge', 'held close', 'remaining warmth'], '财富和亲密元素优先转成毯子资源。', 'Translate wealth and intimacy into blanket resource.'),
      s('folding_pole_frame', '折叠杆框架', 'Folding-Pole Frame', 'prop', '折叠杆让人物像携带可展开小屋', 'folding poles making character carry deployable shelter', ['折叠杆', '背侧竖线', '布片连接', '小绳结', '结构清楚'], ['folding poles', 'back vertical lines', 'cloth connection', 'small knots', 'clear structure'], '建筑和场景元素优先压缩为折叠杆框架。', 'Compress architecture and setting into folding-pole frame.'),
      s('shelter_patch_symbols', '庇护补片符号', 'Shelter-Patch Symbols', 'symbol', '补片标记水源、避难所或群体路线', 'patches marking water source, refuge, or group route', ['小图形补片', '路线符号', '水滴形', '缝在线上', '无真实图标'], ['small graphic patch', 'route sign', 'water-drop shape', 'stitched onto seam', 'no real icon'], '场域信息优先变成庇护补片。', 'Translate field information into shelter patches.'),
      s('portable_home_posture', '移动住所姿态', 'Portable-Home Posture', 'pose', '身体像背着生活而非只背着装备', 'body carrying a life, not just gear', ['肩背沉重', '手扶包带', '衣物包裹', '疲惫但稳定', '小步'], ['heavy shoulders', 'hand on strap', 'wrapped clothing', 'tired but stable', 'small steps'], '负重必须显示生活重量。', 'Carrying must show the weight of life.'),
      s('shelter_over_scene', '庇护优先于场景', 'Shelter Over Scene', 'function', '不画大场景，也能从人物身上读出住所逻辑', 'shelter logic readable from character without drawing large scene', ['可穿住所', '折叠结构', '布料功能', '道具少量', '人物优先'], ['wearable home', 'folding structure', 'functional cloth', 'few props', 'character first'], '所有场景信息压缩到人物携带物。', 'Compress all setting information into carried objects.')
    ]
  },
  {
    slug: 'rusted_hardware',
    name: '锈蚀硬件',
    nameEn: 'Rusted Hardware',
    focus: '锈、掉漆、焊痕、螺丝、旧扣和低技术机械统摄角色',
    focusEn: 'rust, chipped paint, weld marks, screws, old buckles, and low-tech mechanics governing character',
    defaultKind: 'material',
    defaultAffects: ['material', 'prop', 'wear', 'technology'],
    defaultControls: ['rusted_hardware', 'old_metal', 'lowtech_mechanic'],
    items: [
      s('rust_edge_not_full', '锈边非全锈', 'Rust Edge Not Full Rust', 'material', '锈蚀集中在边缘、螺丝和受潮点', 'rust concentrated on edges, screws, and wet points', ['锈边', '螺丝锈点', '掉漆', '局部橙褐', '金属仍可用'], ['rusted edges', 'rusted screws', 'chipped paint', 'local orange-brown', 'metal still usable'], '锈蚀必须局部和有湿度原因。', 'Rust must be local and moisture-caused.'),
      s('welded_bracket_mark', '焊接支架痕', 'Welded-Bracket Mark', 'material', '焊点说明手工修理和拼装', 'weld marks showing handmade repair and assembly', ['焊痕', '金属支架', '粗糙边', '黑灰热痕', '功能连接'], ['weld marks', 'metal bracket', 'rough edge', 'black-gray heat mark', 'functional connection'], '机械拼接优先用焊痕解释。', 'Explain mechanical assembly through weld marks.'),
      s('chipped_paint_plate', '掉漆金属片', 'Chipped-Paint Plate', 'material', '旧漆层透露前用途和使用时间', 'old paint revealing former use and age', ['掉漆', '底层金属', '旧颜色残留', '刮痕', '低光泽'], ['chipped paint', 'base metal', 'old color remains', 'scratches', 'low gloss'], '亮面高科技优先旧漆化。', 'Old-paint glossy high-tech material.'),
      s('bolt_as_ornament', '螺栓即饰物', 'Bolt as Ornament', 'symbol', '螺栓成为低技术秩序和节奏点', 'bolts becoming low-tech order and rhythm points', ['大螺栓', '重复点', '肩胸排列', '旧金属', '不精致'], ['large bolts', 'repeated dots', 'shoulder-chest arrangement', 'old metal', 'not refined'], '装饰和护甲优先螺栓化。', 'Translate ornament and armor into bolts.'),
      s('hinge_joint_visible', '可见铰链关节', 'Visible Hinge Joint', 'function', '活动位置用铰链而非高级机械解释', 'moving positions explained by hinges rather than advanced mechanics', ['铰链', '粗轴', '磨损孔', '关节位置', '动作受限'], ['hinge', 'thick pin', 'worn holes', 'joint placement', 'limited motion'], '机械动作优先低技术铰链化。', 'Low-tech hinge mechanical motion.'),
      s('chain_fastener_old', '旧链扣固定', 'Old Chain Fastener', 'function', '链条只作为固定和承重结构', 'chain only as fixing and load-bearing structure', ['旧链条', '扣环', '腰侧固定', '金属磨亮', '重量下坠'], ['old chain', 'rings', 'side-waist fixing', 'polished metal', 'downward weight'], '链条必须服务固定，不做随意酷感装饰。', 'Chains must serve fixing, not random cool decoration.'),
      s('toolbox_metal_language', '工具箱金属语言', 'Toolbox Metal Language', 'material', '工具箱式金属让角色像能维修世界', 'toolbox-like metal making character able to repair the world', ['工具箱红或蓝', '旧把手', '金属角', '贴纸残痕', '手提重量'], ['toolbox red or blue', 'old handle', 'metal corners', 'sticker residue', 'handheld weight'], '职业和技术优先工具箱化。', 'Toolbox-translate occupation and technology.'),
      s('rusted_no_steampunk', '锈蚀非蒸汽朋克', 'Rust Not Steampunk', 'symbol', '锈蚀来自废旧现实，不自动生成齿轮浪漫', 'rust from discarded reality, not automatic gear romance', ['旧螺丝', '工业废件', '无装饰齿轮', '功能位置', '现实磨损'], ['old screws', 'industrial scrap', 'no decorative gears', 'functional placement', 'realistic wear'], '禁止把所有旧金属变成蒸汽朋克。', 'Forbid turning all old metal into steampunk.'),
      s('mechanic_hand_trace', '机修手痕', 'Mechanic-Hand Trace', 'wear', '油污和金属粉主要留在手部和工具位', 'oil and metal dust mainly on hands and tool positions', ['手指油灰', '指甲边黑', '布擦痕', '工具袋', '少量污迹'], ['greasy fingers', 'black nail edges', 'cloth wipe marks', 'tool pouch', 'few stains'], '油污必须来自维护工作，不全身乱涂。', 'Oil must come from maintenance work, not smear everywhere.'),
      s('hardware_has_function', '硬件必须有功能', 'Hardware Must Function', 'function', '每个金属件都要承担固定、保护、连接或维修功能', 'every metal piece must fix, protect, connect, or repair', ['固定点', '连接点', '保护边', '维修痕', '无空洞装饰'], ['fixing point', 'connection point', 'protective edge', 'repair trace', 'no hollow ornament'], '删除没有功能的硬件装饰。', 'Remove hardware decoration without function.')
    ]
  },
  {
    slug: 'survival_tool',
    name: '生存工具',
    nameEn: 'Survival Tool',
    focus: '净水、撬棍、钳子、短刀、火种和少而关键的工具统摄角色',
    focusEn: 'water filters, crowbars, pliers, compact blades, fire starters, and few crucial tools governing character',
    defaultKind: 'prop',
    defaultAffects: ['prop', 'pose', 'costume', 'function'],
    defaultControls: ['survival_tool', 'few_key_tools', 'tool_priority'],
    items: [
      s('water_filter_anchor', '净水器锚点', 'Water-Filter Anchor', 'prop', '净水器是生存世界中最可信的关键道具', 'water filter as most credible key prop in survival world', ['净水器', '软管', '滤芯', '水壶连接', '护持手势'], ['water filter', 'tube', 'filter cartridge', 'canteen connection', 'guarding gesture'], '技术和生存元素优先变成净水器。', 'Translate tech and survival elements into water filter.'),
      s('crowbar_utility_not_weapon', '撬棍工具非武器', 'Crowbar Utility Not Weapon', 'prop', '撬棍首先用于开门、修理和求生', 'crowbar first used for opening, repair, and survival', ['撬棍', '磨损握柄', '腰侧或手持', '金属旧色', '实用姿态'], ['crowbar', 'worn grip', 'side carry or hand hold', 'old metal', 'practical pose'], '武器倾向优先工具化。', 'Toolify weapon tendencies.'),
      s('pliers_at_belt', '腰间钳子', 'Pliers at Belt', 'prop', '小钳子说明维修能力和低技术生存', 'small pliers showing repair skill and low-tech survival', ['钳子', '皮套', '腰侧', '手部粗糙', '工作表情'], ['pliers', 'leather sheath', 'side waist', 'rough hands', 'working face'], '维修和职业元素优先钳子化。', 'Translate repair and occupation into pliers.'),
      s('compact_knife_utility', '短刀实用化', 'Compact Knife Utility', 'prop', '短刀用于切绳、开包和自保而非炫耀杀伤', 'compact knife used for cutting rope, opening packs, and self-protection, not showy harm', ['短刀', '旧刀鞘', '绳柄', '小尺度', '手靠腰侧'], ['compact knife', 'old sheath', 'cord handle', 'small scale', 'hand near waist'], '刀具必须少量、实用、无血腥。', 'Blades must be few, practical, and bloodless.'),
      s('firestarter_token', '火种小物', 'Firestarter Token', 'prop', '点火工具像被珍惜的微小资源', 'firestarter as tiny cherished resource', ['打火石', '小铁盒', '绳挂', '焦黑边', '双手保护'], ['firesteel', 'small tin', 'cord hanging', 'charred edge', 'two-hand protection'], '火和希望元素优先成为火种小物。', 'Translate fire and hope into firestarter token.'),
      s('sewing_kit_survival', '缝纫包生存', 'Sewing-Kit Survival', 'prop', '针线包说明修补比战斗更重要', 'sewing kit showing repair is more important than combat', ['针线包', '小线轴', '布袋', '别针', '手指捻线'], ['sewing kit', 'small spool', 'cloth pouch', 'pins', 'fingers twisting thread'], '服装和生存元素优先进入缝纫包。', 'Translate garment and survival elements into sewing kit.'),
      s('map_compass_old', '旧地图罗盘', 'Old Map Compass', 'prop', '导航工具建立迁徙和寻找资源的逻辑', 'navigation tools establishing migration and resource-search logic', ['折叠地图', '旧罗盘', '边角破损', '手指路线', '凝视远处'], ['folded map', 'old compass', 'worn corners', 'finger route', 'distant gaze'], '场域和旅行元素优先地图罗盘化。', 'Translate field and travel elements into map-compass logic.'),
      s('canteen_dented', '凹痕水壶', 'Dented Canteen', 'prop', '水壶凹痕说明长期携带和资源稀缺', 'canteen dents showing long carry and resource scarcity', ['金属水壶', '凹痕', '布套', '腰挂', '喝水停顿'], ['metal canteen', 'dents', 'cloth sleeve', 'waist carry', 'drinking pause'], '生活和战斗痕迹优先汇入水壶。', 'Pour life and combat traces into canteen.'),
      s('one_tool_one_role', '一工具一职责', 'One Tool One Role', 'function', '每件工具都要有清楚角色职责', 'each tool must have clear role duty', ['少量工具', '功能明确', '手势对应', '位置固定', '无杂物堆'], ['few tools', 'clear function', 'matching gesture', 'fixed position', 'no clutter pile'], '删除重复、炫耀、无职责的工具。', 'Remove repetitive, showy, duty-less tools.'),
      s('tool_affects_pose', '工具影响姿态', 'Tool Affects Pose', 'pose', '工具重量和用途必须改变手势或站姿', 'tool weight and use must change gesture or stance', ['手握工具', '肩背偏重', '腰部靠近', '工作手势', '身体回应'], ['tool held', 'shoulder weight shift', 'waist proximity', 'working gesture', 'body response'], '道具必须进入身体动作。', 'Props must enter body action.')
    ]
  },
  {
    slug: 'tribal_reuse',
    name: '部落再利用',
    nameEn: 'Tribal Reuse',
    focus: '群体符号、手绘标记、再利用工业件和灾后共同体统摄角色',
    focusEn: 'group signs, hand-painted marks, reused industrial parts, and post-collapse community governing character',
    defaultKind: 'cultural_image',
    defaultAffects: ['symbol', 'costume', 'material', 'pose'],
    defaultControls: ['tribal_reuse', 'fictional_group', 'post_collapse_community'],
    items: [
      s('handpainted_clan_mark', '手绘氏族标记', 'Hand-Painted Clan Mark', 'symbol', '群体符号必须手绘、虚构、低技术', 'group signs must be hand-painted, fictional, and low-tech', ['手绘符号', '不规则边', '土色颜料', '衣物或护具上', '无真实图腾'], ['hand-painted sign', 'irregular edge', 'earth pigment', 'on garment or guard', 'no real totem'], '组织和文化元素优先虚构手绘化。', 'Fictionalize organization and culture as hand-painted marks.'),
      s('shared_color_scrap', '共享废料色', 'Shared Scrap Color', 'symbol', '同一群体用相同来源废料形成识别色', 'same group using same-source scrap as recognition color', ['同色布条', '废料来源', '重复位置', '低饱和', '群体感'], ['same-color cloth strips', 'scrap source', 'repeated placement', 'low saturation', 'group feel'], '阵营色必须来自材料来源，不是现代品牌色。', 'Faction color must come from material source, not modern brand color.'),
      s('industrial_relic_totem', '工业遗物图腾', 'Industrial-Relic Totem', 'prop', '旧工业零件被共同体重新神圣化', 'old industrial part re-sanctified by community', ['旧齿轮或轴承', '布条缠绕', '手绘线', '胸前或杖头', '敬畏姿态'], ['old gear or bearing', 'cloth wrap', 'painted lines', 'chest or staff top', 'reverent stance'], '仪式和工业元素优先成为工业遗物图腾。', 'Translate ritual and industry into industrial relic totem.'),
      s('route_mark_body', '路线标记身体', 'Route-Mark Body', 'symbol', '身体上的标记说明迁徙路线和归属', 'body marks showing migration routes and belonging', ['路线线条', '臂上标记', '点状站点', '布条地图', '观察姿态'], ['route lines', 'arm marks', 'station dots', 'cloth map', 'observing pose'], '地理和群体信息优先路线标记化。', 'Translate geography and group info into route marks.'),
      s('salvage_ceremony_costume', '拾荒祭服', 'Salvage-Ceremony Costume', 'cultural_image', '废料通过仪式排列成为共同体服制', 'scrap arranged ritually into community costume', ['废料饰片', '重复挂点', '粗绳', '低技术庄重', '慢步'], ['scrap ornaments', 'repeated hang points', 'coarse rope', 'low-tech solemnity', 'slow step'], '废土和仪式元素优先合成拾荒祭服。', 'Merge wasteland and ritual elements into salvage ceremony costume.'),
      s('kinship_thread_grid', '亲族线网', 'Kinship Thread Grid', 'symbol', '绳线连接补片和小物，像亲族关系图', 'threads connecting patches and objects like kinship map', ['线网', '小结', '补片连接', '手触线', '胸腹区域'], ['thread grid', 'small knots', 'patch connections', 'hand touching line', 'torso area'], '关系和社群元素优先线网化。', 'Translate relation and community into thread grid.'),
      s('ritualized_repair_day', '修补日仪式', 'Ritualized Repair Day', 'cultural_image', '修补本身成为共同体仪式和审美', 'repair itself becoming community ritual and aesthetic', ['新旧补丁', '手缝动作', '群体色线', '干净摆放', '安静专注'], ['new-old patches', 'hand-sewing action', 'group-color thread', 'clean arrangement', 'quiet focus'], '生活和信仰优先合并为修补仪式。', 'Merge life and belief into repair ritual.'),
      s('post_state_rank_tokens', '后国家等级牌', 'Post-State Rank Tokens', 'symbol', '灾后等级以小牌、刻痕和资源证明表达', 'post-collapse rank shown through tokens, notches, and resource proof', ['木牌', '刻痕', '水源符号', '腰间串挂', '无真实国徽'], ['wood token', 'notches', 'water-source sign', 'waist string', 'no real emblem'], '政治和等级信息必须虚构资源化。', 'Fictionalize political and rank info into resource tokens.'),
      s('childhood_scrap_charm', '童年废料护符', 'Childhood Scrap Charm', 'symbol', '小玩具或旧物被共同体赋予保护意义', 'small toy or old object given protective meaning by community', ['旧玩具片', '布绳', '胸前小物', '磨损彩色', '温柔手势'], ['old toy piece', 'cloth cord', 'small chest object', 'worn color', 'gentle gesture'], '可爱和废土元素优先转成护符而非卖萌。', 'Translate cute and wasteland elements into charm, not cuteness display.'),
      s('tribe_without_real_ethnic_claim', '部落非真实族群挪用', 'Tribe Without Real Ethnic Claim', 'symbol', '共同体必须虚构，不挪用真实族群神圣标志', 'community must be fictional and avoid appropriating real ethnic sacred signs', ['虚构图形', '材料来源', '手绘规则', '无真实图腾', '功能性归属'], ['fictional graphic', 'material source', 'hand-painted rule', 'no real totem', 'functional belonging'], '所有族群感必须转成虚构灾后共同体。', 'Translate all tribal feeling into fictional post-collapse community.')
    ]
  }
];

export const WASTELAND_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
