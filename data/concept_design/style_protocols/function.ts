import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'FUNCTION';
const ROUTE_NAME = '职业功能';
const ROUTE_NAME_EN = 'Functional System';
const ERAS = ['industrial', 'modern', 'contemporary', 'near_future', 'timeless'];
const FORBIDS = ['无功能装饰堆叠', '职业证据缺失', '真实机构 logo', '纯奇观化', '让职业变成不可读的随机制服'];

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
    slug: 'medical_care',
    name: '医疗护理制度',
    nameEn: 'Medical Care System',
    focus: '清洁、防护、检测、护理和夜班压力统摄角色',
    focusEn: 'cleanliness, protection, examination, care, and night-shift pressure governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'symbol', 'pose'],
    defaultControls: ['medical_care', 'hygiene_protocol', 'clinical_evidence'],
    items: [
      s('night_shift_er_protocol', '夜班急诊协议', 'Night-Shift ER Protocol', 'cultural_image', '急诊夜班的疲惫、洁净和快速判断', 'fatigue, hygiene, and quick judgment of night-shift emergency care', ['蓝白织物', '一次性手套', '眼下疲惫', '胸牌', '快步姿态'], ['blue-white fabric', 'disposable gloves', 'tired under-eyes', 'badge', 'fast-walk pose'], '压力、危险和职业元素优先转成夜班急诊证据。', 'Translate pressure, danger, and occupation into night-shift ER evidence.'),
      s('sterile_barrier_uniform', '无菌屏障制服', 'Sterile-Barrier Uniform', 'function', '防护层和洁净规则定义身体边界', 'protective layers and hygiene rules defining body boundary', ['口罩', '手套', '防护外层', '扎紧袖口', '洁净蓝白'], ['mask', 'gloves', 'protective outer layer', 'tight cuffs', 'clean blue-white'], '异化、污染或恐怖元素优先医疗防护化。', 'Medical-protection translate mutation, contamination, or horror.'),
      s('triage_color_code', '分诊色码系统', 'Triage Color-Code System', 'symbol', '颜色和标签体现病情等级与判断权', 'colors and tags expressing urgency rank and decision power', ['腕带色', '小标签', '记录夹', '标记笔', '冷静眼神'], ['wristband color', 'small tag', 'clipboard', 'marker pen', 'calm gaze'], '等级、派系和风险信息优先变成医疗分诊色码。', 'Translate rank, faction, and risk into medical triage color code.'),
      s('field_medic_pragmatism', '外勤医护实用', 'Field-Medic Pragmatism', 'function', '急救和移动作业支配携带系统', 'first aid and mobile work governing carry system', ['急救包', '压缩绷带', '耐磨外套', '手套', '跪姿准备'], ['first-aid pouch', 'compression bandage', 'durable jacket', 'gloves', 'kneeling readiness'], '战斗、末世或外勤元素优先变成急救携带逻辑。', 'Translate combat, wasteland, or fieldwork into first-aid carry logic.'),
      s('pediatric_soft_clinical', '儿科柔和临床', 'Pediatric Soft Clinical', 'function', '临床洁净被柔和色和安抚道具降低压力', 'clinical cleanliness softened by gentle colors and calming props', ['柔和色', '小贴纸', '干净围裙', '温和表情', '小玩具'], ['soft colors', 'small stickers', 'clean apron', 'gentle face', 'small toy'], '可爱、护理和职业元素优先转成儿科柔和临床。', 'Translate cute, care, and occupation into pediatric-soft clinical style.'),
      s('surgical_precision_body', '外科精确身体', 'Surgical-Precision Body', 'pose', '手部、眼神和工具被外科精度管理', 'hands, gaze, and tools governed by surgical precision', ['稳定手指', '无菌手套', '器械盘', '专注眼神', '站姿收窄'], ['steady fingers', 'sterile gloves', 'instrument tray', 'focused gaze', 'narrow stance'], '精密、技术和危险元素优先转成外科手部控制。', 'Translate precision, tech, and danger into surgical hand control.'),
      s('clinic_admin_hybrid', '诊所行政混合', 'Clinic-Admin Hybrid', 'function', '医护和行政管理同时可读', 'care and administration readable at once', ['白大褂', '文件夹', '电脑牌', '笔袋', '礼貌疲惫'], ['white coat', 'folder', 'computer badge', 'pen pouch', 'polite fatigue'], '机构和护理元素优先融合为诊所行政证据。', 'Fuse institution and care elements into clinic-admin evidence.'),
      s('prosthetic_rehab_protocol', '康复义肢协议', 'Rehab-Prosthetic Protocol', 'ontology', '义肢和支具以康复医学方式出现', 'prosthesis and braces appearing through rehabilitation medicine', ['支具', '绑带', '医用金属', '训练姿态', '检查标签'], ['brace', 'straps', 'medical metal', 'training pose', 'inspection tag'], '机械身体元素必须医学康复化，不变赛博奇观。', 'Medical-rehab translate mechanical body elements, not cyber spectacle.', { ontologyLevel: 4, risk: 'high' }),
      s('pharmacy_label_order', '药房标签秩序', 'Pharmacy Label Order', 'symbol', '药品标签、袋子和编号建立安静职业感', 'medicine labels, bags, and numbers creating quiet occupational feeling', ['药袋', '标签编号', '白绿配色', '小票', '手部递交'], ['medicine bag', 'label number', 'white-green palette', 'receipt', 'handing gesture'], '配方、魔法或化学元素优先转成药房标签秩序。', 'Translate formula, magic, or chemistry into pharmacy-label order.'),
      s('burnout_caregiver_aura', '耗竭护理者气场', 'Burnout Caregiver Aura', 'pose', '照护者的温柔和耗竭并存', 'caregiver tenderness and burnout coexisting', ['疲惫微笑', '柔软外套', '手部安抚', '旧胸牌', '轻微塌肩'], ['tired smile', 'soft outerwear', 'calming hand', 'old badge', 'slight slouch'], '情绪和职业压力优先转成耗竭护理气质。', 'Translate emotion and occupational pressure into burnout caregiver aura.')
    ]
  },
  {
    slug: 'archive_bureaucracy',
    name: '档案官僚制度',
    nameEn: 'Archive Bureaucracy',
    focus: '文件、编号、印章、保管和管理权力统摄角色',
    focusEn: 'documents, numbers, stamps, custody, and administrative power governing character',
    defaultKind: 'symbol',
    defaultAffects: ['symbol', 'prop', 'costume', 'pose'],
    defaultControls: ['archive_bureaucracy', 'document_power', 'custody_order'],
    items: [
      s('file_custodian_protocol', '文件保管人协议', 'File-Custodian Protocol', 'function', '文件保管决定角色权力和姿态', 'file custody defining character power and posture', ['文件夹', '封签', '袖套', '谨慎手势', '冷静表情'], ['folder', 'seal strip', 'sleeve protectors', 'careful gesture', 'calm face'], '秘密、法律和历史元素优先成为文件保管证据。', 'Translate secrets, law, and history into file-custody evidence.'),
      s('numbered_identity_system', '编号身份系统', 'Numbered Identity System', 'symbol', '编号和表格比姓名更重要', 'numbers and forms more important than name', ['编号牌', '表格', '胸牌', '条形码感', '低声量制服'], ['number tag', 'form', 'badge', 'barcode feel', 'low-volume uniform'], 'AI、制度和身份元素优先转成编号系统。', 'Translate AI, institution, and identity into numbered system.', { ontologyLevel: 2, risk: 'medium' }),
      s('rubber_stamp_authority', '橡皮章权威', 'Rubber-Stamp Authority', 'prop', '印章和盖章动作构成行政支配', 'stamp and stamping gesture forming administrative control', ['印章', '红蓝墨', '盖章手势', '文件堆', '袖口'], ['stamp', 'red-blue ink', 'stamping gesture', 'paper stack', 'cuff'], '权力和许可元素优先转成盖章程序。', 'Translate power and permission into stamping procedure.'),
      s('lost_records_mystery', '遗失档案神秘', 'Lost-Records Mystery', 'cultural_image', '遗失记录让角色带有冷静悬疑感', 'lost records giving character calm mystery', ['空档案袋', '缺页', '铅笔标记', '旧纸', '低眼神'], ['empty folder', 'missing page', 'pencil mark', 'old paper', 'lowered gaze'], '神秘和犯罪元素优先档案化，不变侦探海报。', 'Archive-translate mystery and crime without becoming detective poster.'),
      s('permit_badge_gatekeeping', '许可证把关', 'Permit-Badge Gatekeeping', 'symbol', '证件定义谁能通过和谁被排除', 'permit defining who passes and who is excluded', ['证件卡', '挂绳', '门禁卡', '冷淡眼神', '手按卡套'], ['ID card', 'lanyard', 'access card', 'cool gaze', 'hand on badge'], '门槛、阶层和机构元素优先转成证件把关。', 'Translate thresholds, class, and institution into permit gatekeeping.'),
      s('ledger_morality', '账册道德', 'Ledger Morality', 'prop', '账册使角色像掌握债务和责任', 'ledger making character hold debt and responsibility', ['账册', '姓名列', '指尖点名', '细绳书签', '严肃嘴角'], ['ledger', 'name columns', 'finger pointing', 'string bookmark', 'serious mouth'], '债务、贵族和金融元素优先成为账册权力。', 'Translate debt, aristocracy, and finance into ledger power.'),
      s('evidence_bag_cleanliness', '证物袋洁净', 'Evidence-Bag Cleanliness', 'function', '危险物被封存和标签化', 'dangerous objects sealed and labeled', ['透明证物袋', '标签', '手套', '小物封存', '无菌台感'], ['clear evidence bag', 'label', 'gloves', 'sealed small object', 'sterile table feel'], '犯罪、魔法或异物元素优先封存为证物袋。', 'Seal crime, magic, or alien objects into evidence bags.'),
      s('queue_window_face', '窗口队列脸', 'Queue-Window Face', 'pose', '面对制度窗口的疲惫和礼貌', 'fatigue and politeness before an institutional window', ['双手持纸', '站姿收窄', '微低头', '皱文件', '礼貌紧张'], ['holding papers', 'narrow stance', 'slight bow', 'wrinkled document', 'polite tension'], '弱势、请求和等待元素优先转成窗口队列姿态。', 'Translate vulnerability, request, and waiting into queue-window posture.'),
      s('red_tape_body', '红带身体', 'Red-Tape Body', 'symbol', '繁文缛节像带子一样缠住角色', 'bureaucratic red tape wrapping the character', ['红绳', '封条', '纸带', '衣物绑缚', '克制动作'], ['red cord', 'seal strip', 'paper band', 'garment binding', 'restrained movement'], '束缚和制度元素优先转成文件封条和红带。', 'Translate restraint and institution into seal strips and red tape.'),
      s('future_records_clerk', '未来档案员', 'Future Records Clerk', 'ontology', '未来技术仍以档案员制度呈现', 'future tech still presented as clerk bureaucracy', ['透明屏', '编号', '无标识制服', '小接口', '冷静手势'], ['clear screen', 'numbering', 'logo-free uniform', 'small interface', 'calm gesture'], '科幻元素必须档案化、文书化，不变霓虹赛博。', 'Archive- and document-translate sci-fi elements, not neon cyberpunk.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future'] })
    ]
  },
  {
    slug: 'service_labor',
    name: '服务劳动制度',
    nameEn: 'Service Labor System',
    focus: '岗位礼貌、疲惫身体、小票据和前后台距离统摄角色',
    focusEn: 'workplace politeness, tired body, small tickets, and front/backstage distance governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'pose', 'wear'],
    defaultControls: ['service_labor', 'frontstage_backstage', 'polite_fatigue'],
    items: [
      s('waitstaff_polite_fatigue', '服务员礼貌疲惫', 'Waitstaff Polite Fatigue', 'pose', '礼貌微笑和身体疲惫并存', 'polite smile and bodily fatigue coexisting', ['围裙', '托盘', '微笑疲惫', '站立脚痛', '擦布'], ['apron', 'tray', 'tired smile', 'aching standing feet', 'cloth'], '职业压力和欲望元素优先转成服务礼貌疲惫。', 'Translate occupational pressure and desire into polite service fatigue.'),
      s('barista_rhythm', '咖啡师节奏', 'Barista Rhythm', 'function', '手部流程和日常仪式支配角色', 'hand workflow and daily ritual governing character', ['围裙', '纸杯', '奶渍', '手腕动作', '早班表情'], ['apron', 'paper cup', 'milk stain', 'wrist action', 'morning-shift face'], '日常、仪式和职业元素优先转成咖啡师流程。', 'Translate daily life, ritual, and occupation into barista workflow.'),
      s('hotel_frontdesk_mask', '前台面具', 'Front-Desk Mask', 'pose', '标准礼貌遮住个人情绪', 'standard politeness hiding personal emotion', ['名牌', '制服外套', '微笑固定', '双手交叠', '柜台感'], ['name tag', 'uniform jacket', 'fixed smile', 'folded hands', 'counter feeling'], '阶层、秘密和机构元素优先转成前台服务面具。', 'Translate class, secret, and institution into front-desk service mask.'),
      s('kitchen_backstage_heat', '厨房后台热度', 'Kitchen Backstage Heat', 'material', '热、油烟和速度形成后场职业证据', 'heat, grease, and speed forming backstage occupational evidence', ['厨师服', '卷袖', '汗光', '擦布', '手部忙碌'], ['chef jacket', 'rolled sleeves', 'sweat shine', 'cloth', 'busy hands'], '火、劳动和压力元素优先厨房后台化。', 'Kitchen-backstage translate fire, labor, and pressure.'),
      s('retail_display_body', '零售展示身体', 'Retail Display Body', 'pose', '身体像商品展示的一部分', 'body as part of product display', ['整齐制服', '挂绳牌', '整理衣架手势', '克制笑容', '站姿开放'], ['neat uniform', 'lanyard badge', 'hanger-adjusting gesture', 'restrained smile', 'open stance'], '时尚、消费和职业元素优先变成零售展示身体。', 'Translate fashion, consumption, and occupation into retail display body.'),
      s('night_shift_convenience', '便利店夜班', 'Night-Shift Convenience', 'cultural_image', '夜班小店的荧光、疲惫和日常荒凉', 'fluorescence, fatigue, and daily loneliness of night-shift store', ['马甲', '塑料名牌', '冷白光', '咖啡罐', '困倦眼神'], ['vest', 'plastic name tag', 'cold white light', 'coffee can', 'sleepy gaze'], '夜行、孤独和城市元素优先转成便利店夜班图像。', 'Translate nocturnal, lonely, and urban elements into convenience-store night-shift image.'),
      s('cleaning_staff_invisible', '清洁工隐形权力', 'Cleaning-Staff Invisible Power', 'function', '清洁劳动让角色被忽视却掌握空间痕迹', 'cleaning labor making character unseen yet knowing spatial traces', ['橡胶手套', '清洁推车暗示', '围裙', '低头', '水痕'], ['rubber gloves', 'cleaning cart hint', 'apron', 'lowered head', 'water trace'], '隐秘、空间和劳动元素优先转成清洁痕迹。', 'Translate secrecy, space, and labor into cleaning traces.'),
      s('flight_attendant_protocol', '空乘服务协议', 'Flight-Attendant Protocol', 'function', '标准制服和安全流程定义优雅服务', 'standard uniform and safety procedure defining elegant service', ['丝巾', '制服套装', '行李姿态', '标准微笑', '安全手势'], ['scarf', 'uniform suit', 'luggage posture', 'standard smile', 'safety gesture'], '旅行、机构和优雅元素优先空乘化。', 'Flight-attendant translate travel, institution, and elegance.'),
      s('ticket_booth_small_power', '售票窗口小权力', 'Ticket-Booth Small Power', 'symbol', '票据和窗口让服务者拥有小型许可权', 'tickets and booth giving worker small permission power', ['票夹', '小窗口姿态', '印章', '零钱袋', '冷淡眼神'], ['ticket holder', 'booth posture', 'stamp', 'coin pouch', 'cool gaze'], '许可、门槛和社交权力优先转成售票窗口逻辑。', 'Translate permission, threshold, and social power into ticket-booth logic.'),
      s('backstage_uniform_swap', '前后台制服切换', 'Front/Back Uniform Swap', 'cultural_image', '服务者在前台和后台之间切换身份', 'service worker switching identity between frontstage and backstage', ['半脱制服', '围裙挂腰', '妆面疲惫', '工牌反转', '坐下休息'], ['half-removed uniform', 'apron at waist', 'tired makeup', 'badge flipped', 'sitting rest'], '双重身份和情绪元素优先转成前后台制服切换。', 'Translate double identity and emotion into front/back uniform swap.')
    ]
  },
  {
    slug: 'lab_research',
    name: '实验研究制度',
    nameEn: 'Lab Research System',
    focus: '样本、编号、洁净、观察和受控异常统摄角色',
    focusEn: 'samples, numbers, cleanliness, observation, and controlled anomaly governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'symbol', 'material'],
    defaultControls: ['lab_research', 'sample_control', 'controlled_anomaly'],
    items: [
      s('sample_handler_protocol', '样本处理协议', 'Sample-Handler Protocol', 'function', '样本和标签组织角色动作', 'samples and labels organizing character action', ['样本管', '标签', '手套', '试管盒', '专注眼神'], ['sample tube', 'label', 'gloves', 'tube rack', 'focused gaze'], '异物、魔法和生物元素优先样本化。', 'Sample-translate alien, magic, and biological elements.'),
      s('cleanroom_body', '洁净室身体', 'Cleanroom Body', 'function', '洁净服让身体成为受控环境的一部分', 'cleanroom suit making body part of controlled environment', ['洁净服', '发帽', '口罩', '鞋套', '无尘色'], ['cleanroom suit', 'hair cap', 'mask', 'shoe covers', 'dust-free color'], '污染、技术和未来元素优先洁净室化。', 'Cleanroom-translate contamination, tech, and future elements.'),
      s('researcher_cardigan_realism', '研究员开衫现实感', 'Researcher Cardigan Realism', 'cultural_image', '学术疲惫和实验细节并存', 'academic fatigue coexisting with lab details', ['开衫', '白大褂', '眼下疲惫', '记录本', '笔袋'], ['cardigan', 'lab coat', 'tired under-eyes', 'notebook', 'pen pouch'], '知识、职业和疲惫元素优先转成研究员现实感。', 'Translate knowledge, occupation, and fatigue into researcher realism.'),
      s('containment_label_system', '封存标签系统', 'Containment Label System', 'symbol', '危险被标签、封条和容器管理', 'danger managed by labels, seals, and containers', ['封条', '危险色码', '透明盒', '编号', '手套手势'], ['seal strip', 'danger color code', 'clear box', 'number', 'gloved gesture'], '怪物、诅咒和危险元素优先封存标签化。', 'Containment-label translate monster, curse, and danger.'),
      s('bio_interface_research', '生物接口研究', 'Bio-Interface Research', 'ontology', '身体异常被实验接口解释', 'body anomaly explained through research interface', ['传感贴', '导线', '皮肤标记', '记录板', '克制接口'], ['sensor patch', 'wires', 'skin marks', 'clipboard', 'restrained interface'], '身体异化必须研究接口化，不失控怪物化。', 'Research-interface translate body mutation, not uncontrolled monster.', { ontologyLevel: 4, risk: 'high' }),
      s('field_research_kit', '野外研究工具组', 'Field Research Kit', 'function', '野外采样和记录定义携带系统', 'field sampling and recording defining carry system', ['采样袋', '记录板', '防水外套', '小瓶', '泥点'], ['sample bags', 'clipboard', 'waterproof jacket', 'small vials', 'mud specks'], '自然、生物和探险元素优先转成野外研究工具组。', 'Translate nature, biology, and exploration into field research kit.'),
      s('failed_experiment_trace', '失败实验痕迹', 'Failed-Experiment Trace', 'symbol', '实验失败留下可控痕迹', 'failed experiment leaving controlled traces', ['烧痕小点', '破标签', '裂试管', '紧张手指', '备用手套'], ['small burn marks', 'broken label', 'cracked tube', 'tense fingers', 'spare gloves'], '异常和失败必须作为受控实验痕迹，不变大场面。', 'Keep anomaly and failure as controlled experiment traces, not big scene.'),
      s('ai_lab_clerk', 'AI实验室职员', 'AI Lab Clerk', 'ontology', 'AI和实验室行政结合', 'AI and lab administration combined', ['透明屏', '编号胸牌', '白灰制服', '小接口', '冷静表情'], ['clear screen', 'number badge', 'white-grey uniform', 'small interface', 'calm face'], 'AI元素优先文书化、实验室化、局部接口化。', 'Document-, lab-, and local-interface-translate AI elements.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future'] }),
      s('microscope_gaze', '显微镜凝视', 'Microscope Gaze', 'pose', '观察姿态成为角色精神核心', 'observation posture becoming character core', ['低头观察', '眼镜', '手扶仪器', '专注嘴角', '光斑'], ['lowered observation', 'glasses', 'hand on instrument', 'focused mouth', 'light spot'], '求知、控制和危险元素优先转成观察姿态。', 'Translate knowledge-seeking, control, and danger into observation posture.'),
      s('sterile_anomaly_beauty', '无菌异常美', 'Sterile-Anomaly Beauty', 'ontology', '异常被清洁、编号和白色材料美学化', 'anomaly aestheticized through cleanliness, numbers, and white material', ['白色材料', '编号标签', '透明容器', '少量异色', '无菌光'], ['white material', 'number label', 'clear container', 'small odd color', 'sterile light'], '超现实必须被无菌制度收束。', 'Surrealism must be contained by sterile system.', { ontologyLevel: 4, risk: 'high' })
    ]
  },
  {
    slug: 'corporate_office',
    name: '企业办公制度',
    nameEn: 'Corporate Office System',
    focus: '证件、剪裁、效率、会议和阶层办公室统摄角色',
    focusEn: 'ID cards, tailoring, efficiency, meetings, and office hierarchy governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'symbol', 'pose'],
    defaultControls: ['corporate_office', 'office_hierarchy', 'efficiency_pose'],
    items: [
      s('id_lanyard_hierarchy', '工牌挂绳等级', 'ID-Lanyard Hierarchy', 'symbol', '工牌和挂绳定义企业身份', 'ID card and lanyard defining corporate identity', ['工牌', '挂绳', '部门色', '西装外套', '电梯表情'], ['ID card', 'lanyard', 'department color', 'blazer', 'elevator face'], '机构、科技和身份元素优先转成工牌等级。', 'Translate institution, tech, and identity into ID hierarchy.'),
      s('meeting_room_armor', '会议室护甲', 'Meeting-Room Armor', 'cultural_image', '西装像社交和权力护甲', 'suit as social and power armor', ['西装', '硬肩', '文件夹', '冷静微笑', '手腕表'], ['suit', 'structured shoulder', 'folder', 'calm smile', 'watch'], '贵族、战斗和权力元素优先办公室护甲化。', 'Office-armor translate aristocracy, combat, and power.'),
      s('consultant_travel_fit', '顾问差旅穿搭', 'Consultant Travel Fit', 'function', '效率、行李和机场通勤形成职业图像', 'efficiency, luggage, and airport commute forming occupational image', ['小行李箱', '笔记本包', '无皱衬衫', '耳机', '快步'], ['carry-on suitcase', 'laptop bag', 'unwrinkled shirt', 'earphones', 'fast walk'], '旅行、职业和通勤元素优先转成顾问差旅系统。', 'Translate travel, occupation, and commute into consultant travel system.'),
      s('startup_uniform_casual', '创业公司制服', 'Startup Uniform Casual', 'cultural_image', '休闲和效率混合成新型办公室身份', 'casualness and efficiency mixed into new office identity', ['卫衣外套', '电脑包', '运动鞋', '咖啡杯', '疲惫自信'], ['hoodie jacket', 'laptop bag', 'sneakers', 'coffee cup', 'tired confidence'], '科技和职业元素优先创业公司日常化。', 'Startup-casual translate tech and occupation.'),
      s('executive_quiet_luxury', '高管静奢办公', 'Executive Quiet-Luxury Office', 'material', '权力来自剪裁、材质和低声量', 'power from tailoring, material, and low volume', ['深色西装', '无标识皮具', '精确袖口', '低饱和', '平静姿态'], ['dark suit', 'logo-free leather goods', 'precise cuffs', 'low saturation', 'calm posture'], '财富和权力元素优先静奢办公化。', 'Quiet-luxury office translate wealth and power.'),
      s('burnout_analyst', '耗竭分析师', 'Burnout Analyst', 'pose', '数据劳动的疲惫进入身体', 'fatigue of data labor entering the body', ['松领口', '眼下疲惫', '电脑包', '纸杯咖啡', '低头看屏'], ['loose collar', 'tired under-eyes', 'laptop bag', 'paper coffee cup', 'looking down screen'], '焦虑、数据和职业压力优先耗竭分析师化。', 'Translate anxiety, data, and work pressure into burnout analyst.'),
      s('hr_polite_control', 'HR礼貌控制', 'HR Polite Control', 'pose', '温和表情下的制度管理权', 'institutional control under gentle expression', ['温和微笑', '文件夹', '浅色西装', '工牌', '双手交叠'], ['gentle smile', 'folder', 'light suit', 'ID badge', 'folded hands'], '心理、制度和权力元素优先转成HR礼貌控制。', 'Translate psychology, institution, and power into HR polite control.'),
      s('finance_cold_precision', '金融冷精度', 'Finance Cold Precision', 'material', '金融职业通过冷色、剪裁和小物体现', 'finance occupation expressed by cool colors, tailoring, and small objects', ['深蓝灰', '手表', '硬领', '皮鞋', '无表情'], ['deep navy-grey', 'watch', 'stiff collar', 'leather shoes', 'expressionless face'], '金钱、风险和精确元素优先金融冷精度化。', 'Translate money, risk, and precision into finance cold precision.'),
      s('office_after_hours', '加班后办公室', 'Office After Hours', 'cultural_image', '下班后的疲惫和未完成工作', 'fatigue and unfinished work after hours', ['外套搭椅感', '袖口松开', '冷白屏光', '文件夹', '困倦眼神'], ['jacket-off feeling', 'loose cuffs', 'cold screen light', 'folder', 'sleepy gaze'], '夜晚、孤独和职业压力优先加班后办公室化。', 'Translate night, loneliness, and work pressure into after-hours office.'),
      s('corporate_cult_protocol', '企业邪教协议', 'Corporate-Cult Protocol', 'ontology', '企业制度和仪式崇拜危险融合', 'corporate system and ritual worship dangerously fused', ['统一西装', '标语卡', '冷白光', '微笑一致', '小型徽章'], ['matching suits', 'slogan card', 'cold white light', 'uniform smiles', 'small badge'], '宗教和企业元素优先低强度邪教化，不直接恐怖化。', 'Low-intensity cult-translate religion and corporate elements, not direct horror.', { ontologyLevel: 3, risk: 'medium' })
    ]
  },
  {
    slug: 'industrial_maintenance',
    name: '工业维护制度',
    nameEn: 'Industrial Maintenance',
    focus: '工装、工具、防护、维护痕迹和机器接触统摄角色',
    focusEn: 'workwear, tools, protection, maintenance traces, and machine contact governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'material', 'pose'],
    defaultControls: ['industrial_maintenance', 'tool_workflow', 'machine_contact'],
    items: [
      s('mechanic_oil_control', '机修油污控制', 'Mechanic Oil Control', 'material', '油污必须来自明确维修动作', 'oil marks must come from clear repair action', ['工作服', '少量油污', '卷袖', '工具腰带', '稳定手'], ['workwear', 'small oil marks', 'rolled sleeves', 'tool belt', 'steady hands'], '机械和劳动元素优先成为可解释维修痕迹。', 'Translate mechanical and labor elements into explainable repair traces.'),
      s('welder_light_protocol', '焊工光协议', 'Welder Light Protocol', 'function', '焊接防护和强光定义角色', 'welding protection and intense light defining character', ['护目镜', '手套', '围裙', '烧痕', '冷蓝光'], ['goggles', 'gloves', 'apron', 'burn marks', 'cold blue light'], '火、技术和危险元素优先焊工化。', 'Welder-translate fire, tech, and danger.'),
      s('warehouse_loader_body', '仓储搬运身体', 'Warehouse Loader Body', 'pose', '负重和搬运流程塑造身体姿态', 'load and carrying workflow shaping posture', ['护腰', '手套', '大口袋裤', '弯膝', '箱包体块'], ['back support', 'gloves', 'cargo pants', 'bent knees', 'box mass'], '力量和职业元素优先转成仓储搬运姿态。', 'Translate strength and occupation into warehouse-loader posture.'),
      s('factory_uniform_repetition', '工厂制服重复', 'Factory Uniform Repetition', 'symbol', '重复制服与编号带来工业秩序', 'repeated uniform and numbers bringing industrial order', ['同款工服', '编号布标', '安全色', '反光条', '排班痕迹'], ['same workwear', 'number patch', 'safety color', 'reflective strip', 'shift trace'], '组织和制度元素优先转成工厂制服重复。', 'Translate organization and institution into factory uniform repetition.'),
      s('toolbelt_cartography', '工具带地图', 'Toolbelt Cartography', 'function', '工具位置像地图一样说明工作流程', 'tool placement explaining workflow like a map', ['工具腰带', '螺丝刀', '钳子', '磨损插位', '手部就位'], ['toolbelt', 'screwdriver', 'pliers', 'worn slots', 'hand ready'], '道具和身份信息优先按工具带位置管理。', 'Manage props and identity info by toolbelt placement.'),
      s('safety_color_hierarchy', '安全色等级', 'Safety-Color Hierarchy', 'symbol', '高可视色只服务安全等级', 'high-visibility color serving safety rank only', ['橙黄反光', '安全背心', '黑灰底', '警示条', '功能边缘'], ['orange-yellow reflectors', 'safety vest', 'black-grey base', 'warning strip', 'functional edge'], '鲜艳色彩必须解释为安全功能。', 'Bright colors must be explained as safety function.'),
      s('repair_patch_history', '维修补丁历史', 'Repair-Patch History', 'material', '修补和替换件记录长期使用', 'repairs and replacements recording long-term use', ['补丁', '替换扣', '缝线', '磨白布边', '旧标签'], ['patch', 'replacement buckle', 'stitching', 'faded cloth edge', 'old label'], '废土和时间元素优先变成维修历史。', 'Translate wasteland and time elements into repair history.'),
      s('machine_operator_focus', '机器操作员专注', 'Machine-Operator Focus', 'pose', '操作姿态和防护小件说明机器关系', 'operating posture and protective details explaining machine relation', ['耳罩', '护目镜', '手按控制', '直视仪表', '稳定站姿'], ['ear protection', 'goggles', 'hand on control', 'watching gauge', 'stable stance'], '技术和权力元素优先转成机器操作关系。', 'Translate tech and power into machine-operation relation.'),
      s('industrial_cyber_restraint', '工业赛博克制', 'Industrial Cyber Restraint', 'ontology', '机械接口只作为维修和工业证据', 'mechanical interfaces only as repair and industrial evidence', ['小接口', '维护盖板', '线缆束', '螺丝', '工服遮挡'], ['small port', 'maintenance panel', 'cable bundle', 'screws', 'covered by workwear'], '赛博元素必须工业维护化，不扩散成全身机甲。', 'Industrial-maintenance translate cyber elements, avoiding full-body mecha.', { ontologyLevel: 4, risk: 'high', eras: ['industrial', 'contemporary', 'near_future', 'far_future'] }),
      s('end_of_shift_worker', '下班工人疲态', 'End-of-Shift Worker', 'cultural_image', '工作结束后的身体疲惫和真实损耗', 'post-shift fatigue and real wear', ['塌肩', '脏手套', '安全帽手持', '外套敞开', '疲惫眼神'], ['slumped shoulders', 'dirty gloves', 'helmet in hand', 'open jacket', 'tired gaze'], '情绪和劳动元素优先转成下班工人疲态。', 'Translate emotion and labor into end-of-shift worker fatigue.')
    ]
  },
  {
    slug: 'field_operator',
    name: '外勤作业制度',
    nameEn: 'Field Operator System',
    focus: '天气、防护、移动任务、地图和环境损耗统摄角色',
    focusEn: 'weather, protection, mobile task, maps, and environmental wear governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'material', 'pose'],
    defaultControls: ['field_operator', 'mobile_task', 'environment_wear'],
    items: [
      s('weathered_field_jacket', '风化外勤夹克', 'Weathered Field Jacket', 'material', '外勤外套记录天气和任务', 'field jacket recording weather and mission', ['防风外套', '雨痕', '口袋', '袖口磨损', '地图袋'], ['windproof jacket', 'rain marks', 'pockets', 'worn cuffs', 'map pocket'], '环境和任务元素优先转成外勤夹克痕迹。', 'Translate environment and mission into field-jacket traces.'),
      s('map_reader_pose', '读图姿态', 'Map-Reader Pose', 'pose', '地图和方向判断组织身体', 'map and direction judgment organizing body', ['地图', '低头查看', '手指指向', '背包', '风中站姿'], ['map', 'looking down', 'pointing finger', 'backpack', 'standing in wind'], '探索、侦察和知识元素优先转成读图姿态。', 'Translate exploration, scouting, and knowledge into map-reading pose.'),
      s('survey_marker_system', '测绘标记系统', 'Survey-Marker System', 'symbol', '测绘工具和标记定义空间权力', 'survey tools and markers defining spatial authority', ['测距仪', '标记旗', '笔记板', '高可视色', '手套'], ['rangefinder', 'marker flag', 'noteboard', 'hi-vis color', 'gloves'], '空间、领地和制度元素优先测绘化。', 'Survey-translate space, territory, and institution.'),
      s('courier_mobility_protocol', '递送移动协议', 'Courier Mobility Protocol', 'function', '包体、路线和速度定义外勤身份', 'bag mass, route, and speed defining field identity', ['斜挎包', '路线纸', '反光条', '快步', '身体前倾'], ['crossbody bag', 'route paper', 'reflective strip', 'fast walk', 'forward lean'], '速度和任务元素优先转成递送移动系统。', 'Translate speed and mission into courier mobility system.'),
      s('disaster_response_gear', '灾害响应装备', 'Disaster-Response Gear', 'function', '救援和灾害现场的功能证据', 'functional evidence of rescue and disaster response', ['头盔', '反光背心', '手套', '急救包', '灰尘'], ['helmet', 'reflective vest', 'gloves', 'first-aid pack', 'dust'], '末世和危机元素优先专业救援化。', 'Professional-rescue translate apocalypse and crisis elements.'),
      s('field_scientist_weather', '野外科学天气', 'Field-Scientist Weather', 'cultural_image', '科学记录和天气损耗并存', 'scientific recording and weather wear coexisting', ['防水笔记本', '采样袋', '帽檐', '泥点', '专注表情'], ['waterproof notebook', 'sample bag', 'hat brim', 'mud specks', 'focused face'], '自然和知识元素优先转成野外科学外勤。', 'Translate nature and knowledge into field-science operation.'),
      s('night_patrol_utilitarian', '夜间巡查实用', 'Night-Patrol Utility', 'function', '夜间移动需要低光、安全和警觉', 'night movement requiring low light, safety, and alertness', ['手电', '暗色外套', '反光小条', '警觉眼神', '稳步'], ['flashlight', 'dark outerwear', 'small reflector', 'alert eyes', 'steady step'], '夜行和危险元素优先夜间巡查化。', 'Translate nocturnal and dangerous elements into night patrol.'),
      s('border_checkpoint_body', '边境检查身体', 'Border-Checkpoint Body', 'cultural_image', '通行、审查和外勤制度压在身体上', 'access, inspection, and field institution pressing on body', ['证件夹', '防风外套', '手套', '冷脸', '检查手势'], ['document holder', 'windbreaker', 'gloves', 'cold face', 'inspection gesture'], '许可和边界元素优先转成检查站身体。', 'Translate permission and boundary into checkpoint body.'),
      s('field_repair_kit', '外勤维修包', 'Field Repair Kit', 'function', '随身维修工具说明任务能力', 'portable repair tools showing mission capability', ['小工具包', '胶带', '备用扣', '防水袋', '跪姿'], ['small tool pouch', 'tape', 'spare buckles', 'dry bag', 'kneeling pose'], '技术和环境损耗优先外勤维修化。', 'Field-repair translate tech and environmental wear.'),
      s('near_future_field_ops', '近未来外勤员', 'Near-Future Field Ops', 'ontology', '未来技术必须服务外勤任务', 'future tech must serve field task', ['小无人机暗示', '腕屏', '防水外壳', '哑光设备', '任务贴标'], ['small drone hint', 'wrist screen', 'waterproof shell', 'matte device', 'mission label'], '科幻元素必须任务化、外勤化、局部化。', 'Make sci-fi elements task-based, field-based, and local.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future'] })
    ]
  },
  {
    slug: 'education_academic',
    name: '教育学术制度',
    nameEn: 'Education Academic System',
    focus: '课堂、书写、学术身份、规训和知识疲惫统摄角色',
    focusEn: 'classroom, writing, academic identity, discipline, and intellectual fatigue governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'pose', 'symbol'],
    defaultControls: ['education_academic', 'knowledge_labor', 'classroom_discipline'],
    items: [
      s('old_school_teacher', '老派教师协议', 'Old-School Teacher Protocol', 'cultural_image', '教室权威、粉笔灰和疲惫温和', 'classroom authority, chalk dust, and tired gentleness', ['针织衫', '粉笔灰', '眼镜', '教案', '克制表情'], ['cardigan', 'chalk dust', 'glasses', 'lesson plan', 'restrained expression'], '知识、权威和照护元素优先教师化。', 'Teacher-translate knowledge, authority, and care.'),
      s('exam_invigilator_stillness', '监考静止感', 'Exam-Invigilator Stillness', 'pose', '安静监督和规则压力组织身体', 'quiet supervision and rule pressure organizing body', ['站在侧边', '手持名单', '无表情', '低速步伐', '腕表'], ['standing aside', 'holding roster', 'expressionless', 'slow steps', 'watch'], '制度和压迫元素优先变成监考静止。', 'Translate institution and pressure into invigilator stillness.'),
      s('graduate_student_burnout', '研究生耗竭', 'Graduate-Student Burnout', 'cultural_image', '学术劳动和生活疲惫混合', 'academic labor and life fatigue mixed', ['帆布袋', '论文纸', '咖啡杯', '乱发', '眼下疲惫'], ['canvas tote', 'paper drafts', 'coffee cup', 'messy hair', 'tired under-eyes'], '焦虑、知识和通勤元素优先研究生耗竭化。', 'Translate anxiety, knowledge, and commuting into grad-student burnout.'),
      s('librarian_catalogue_order', '图书管理员目录秩序', 'Librarian Catalogue Order', 'function', '目录、书车和安静权力定义角色', 'catalogue, book cart, and quiet authority defining character', ['书车暗示', '索引卡', '眼镜链', '软外套', '安静手势'], ['book cart hint', 'index card', 'glasses chain', 'soft jacket', 'quiet gesture'], '档案和知识元素优先图书馆目录化。', 'Library-catalogue translate archive and knowledge elements.'),
      s('academy_uniform_pressure', '学院制服压力', 'Academy-Uniform Pressure', 'structure', '制服、徽章和成绩制度压住个体', 'uniform, badge, and achievement system pressing individual', ['学院外套', '领带', '徽章遮挡', '书包', '紧张站姿'], ['school blazer', 'tie', 'covered badge', 'bag', 'tense stance'], '青春、制度和阶层元素优先学院制服化。', 'Academy-uniform translate youth, institution, and class.'),
      s('chalkboard_occult_math', '黑板玄学数学', 'Blackboard Occult Math', 'ontology', '神秘或科幻内容以板书和公式出现', 'mystic or sci-fi content appearing as board writing and formula', ['粉笔公式', '手指沾灰', '黑白对比', '专注眼神', '纸张'], ['chalk formula', 'dusty fingers', 'black-white contrast', 'focused gaze', 'papers'], '魔法、AI和理论元素优先板书化，不做特效。', 'Chalkboard-translate magic, AI, and theory without effects.', { ontologyLevel: 3, risk: 'medium' }),
      s('art_school_process', '艺术学院过程', 'Art-School Process', 'cultural_image', '创作痕迹和学生身份共同可读', 'making traces and student identity readable together', ['颜料痕', '作品夹', '松垮穿搭', '手指脏痕', '实验发型'], ['paint marks', 'portfolio case', 'slouch outfit', 'dirty fingers', 'experimental hair'], '艺术和街头元素优先转成艺术学院过程证据。', 'Translate art and street elements into art-school process evidence.'),
      s('strict_headmaster_authority', '严厉校长权威', 'Strict Headmaster Authority', 'pose', '教育制度的上位管理权', 'upper administrative authority of education system', ['深色套装', '文件夹', '眼镜', '直背', '冷淡表情'], ['dark suit', 'folder', 'glasses', 'straight back', 'cold face'], '权力和机构元素优先校长化。', 'Headmaster-translate power and institution.'),
      s('language_teacher_softness', '语言教师柔和', 'Language-Teacher Softness', 'cultural_image', '温和沟通和知识传递成为气质', 'gentle communication and knowledge transfer becoming aura', ['浅色针织', '书本', '手势开放', '温和眼神', '小饰物'], ['light knitwear', 'books', 'open gesture', 'gentle eyes', 'small accessory'], '温柔、文化和教育元素优先语言教师化。', 'Language-teacher translate tenderness, culture, and education.'),
      s('future_tutor_interface', '未来导师界面', 'Future Tutor Interface', 'ontology', '未来教育通过局部界面和学习工具出现', 'future education through local interfaces and learning tools', ['透明平板', '耳机', '白灰服装', '编号课程卡', '柔和光点'], ['clear tablet', 'earpiece', 'white-grey clothing', 'course card', 'soft light points'], '科幻教育元素必须局部工具化。', 'Local-tool translate sci-fi education elements.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future'] })
    ]
  },
  {
    slug: 'law_finance',
    name: '法律金融制度',
    nameEn: 'Law Finance System',
    focus: '契约、风险、证据、金钱和理性外壳统摄角色',
    focusEn: 'contract, risk, evidence, money, and rational shell governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'symbol', 'pose'],
    defaultControls: ['law_finance', 'contract_power', 'rational_surface'],
    items: [
      s('courtroom_litigator_armor', '法庭律师护甲', 'Courtroom Litigator Armor', 'cultural_image', '西装、文件和语言攻击形成职业权力', 'suit, documents, and verbal attack forming occupational power', ['深色西装', '文件夹', '硬领', '冷静嘴角', '站姿前压'], ['dark suit', 'folder', 'stiff collar', 'calm mouth', 'forward stance'], '战斗和制度元素优先律师护甲化。', 'Lawyer-armor translate combat and institution.'),
      s('contract_signature_focus', '契约签署焦点', 'Contract-Signature Focus', 'symbol', '签名动作就是权力核心', 'signature action as power core', ['钢笔', '合同页', '手部近景', '袖口', '压纸动作'], ['pen', 'contract page', 'hand close-up', 'cuff', 'pressing paper'], '权力、魔法和承诺元素优先契约签署化。', 'Contract-signature translate power, magic, and promise.'),
      s('private_detective_paperwork', '私家侦探文书', 'Private-Detective Paperwork', 'cultural_image', '侦探不靠枪，而靠证据和旧文件', 'detective through evidence and old documents, not guns', ['旧外套', '证物袋', '笔记本', '照片边', '疲惫眼神'], ['old coat', 'evidence bag', 'notebook', 'photo edge', 'tired gaze'], '犯罪和悬疑元素优先证据文书化。', 'Evidence-document translate crime and mystery.'),
      s('bank_clerk_precision', '银行职员精度', 'Bank-Clerk Precision', 'function', '金钱制度通过窗口、卡片和整洁制服出现', 'money system through counter, cards, and neat uniform', ['整洁衬衫', '胸牌', '卡片', '点钞手势', '标准微笑'], ['neat shirt', 'badge', 'cards', 'counting gesture', 'standard smile'], '金融和服务元素优先银行窗口化。', 'Bank-counter translate finance and service.'),
      s('risk_analyst_coldness', '风险分析冷感', 'Risk-Analyst Coldness', 'pose', '风险判断让角色冷静、精确、低情绪', 'risk judgment making character calm, precise, low-emotion', ['深灰西装', '细框眼镜', '表格', '无表情', '手指点数'], ['dark grey suit', 'thin glasses', 'spreadsheet', 'expressionless face', 'finger counting'], '危险和理性元素优先风险分析化。', 'Risk-analysis translate danger and rationality.'),
      s('notary_stamp_neutrality', '公证印章中立', 'Notary-Stamp Neutrality', 'symbol', '中立权力来自印章、纸张和冷静表情', 'neutral power from stamp, paper, and calm expression', ['印章', '白纸', '硬桌感', '袖口', '中立表情'], ['stamp', 'white paper', 'hard desk feel', 'cuff', 'neutral face'], '许可和真伪元素优先公证化。', 'Notary-translate permission and authenticity.'),
      s('debt_collector_formality', '收债人正式感', 'Debt-Collector Formality', 'cultural_image', '暴力被合同和礼貌外壳包装', 'violence wrapped by contract and polite shell', ['深色外套', '账单', '手套', '冷笑', '站位压迫'], ['dark coat', 'bill', 'gloves', 'cold smile', 'pressing stance'], '黑帮和金融元素优先收债正式化。', 'Debt-collector formalize gangster and finance elements.'),
      s('estate_law_inheritance', '遗产法继承', 'Estate-Law Inheritance', 'symbol', '家族、契约和法律纠纷共同定义角色', 'family, contract, and legal dispute defining character', ['遗嘱文件', '旧信封', '戒指暗示', '深色套装', '紧张手指'], ['will document', 'old envelope', 'ring hint', 'dark suit', 'tense fingers'], '贵族和法律元素优先遗产纠纷化。', 'Estate-law translate aristocracy and law.'),
      s('compliance_officer_face', '合规官面孔', 'Compliance-Officer Face', 'function', '规则执行者的礼貌和不可通融', 'rule enforcer with politeness and inflexibility', ['浅色衬衫', '工牌', '文件夹', '微笑不动', '双手交叠'], ['light shirt', 'ID card', 'folder', 'fixed smile', 'folded hands'], '机构和惩罚元素优先合规官化。', 'Compliance-officer translate institution and punishment.'),
      s('algorithmic_finance_interface', '算法金融界面', 'Algorithmic Finance Interface', 'ontology', '金融未来感只通过数据界面和冷精度出现', 'financial futurity only through data interface and cold precision', ['透明屏', '数字线', '深色西装', '小耳机', '冷白反光'], ['clear screen', 'number lines', 'dark suit', 'small earpiece', 'cold white reflection'], 'AI和金钱元素必须局部界面化，不变赛博杂乱。', 'Local-interface translate AI and money, avoiding cyber clutter.', { ontologyLevel: 3, risk: 'medium', eras: ['contemporary', 'near_future', 'far_future'] })
    ]
  },
  {
    slug: 'death_care',
    name: '殡葬护理制度',
    nameEn: 'Death Care System',
    focus: '死亡、洁净、仪式服务、遗体照护和哀悼职业统摄角色',
    focusEn: 'death, cleanliness, ritual service, body care, and mourning profession governing character',
    defaultKind: 'function',
    defaultAffects: ['costume', 'prop', 'symbol', 'pose'],
    defaultControls: ['death_care', 'mourning_service', 'quiet_ritual_labor'],
    items: [
      s('funeral_director_composure', '殡仪主任镇定', 'Funeral-Director Composure', 'cultural_image', '死亡服务中的专业镇定和体面', 'professional composure and dignity in death service', ['黑色套装', '白手套', '文件夹', '低声表情', '直立站姿'], ['black suit', 'white gloves', 'folder', 'low-voice face', 'upright stance'], '死亡和服务元素优先殡仪主任化。', 'Funeral-director translate death and service elements.'),
      s('embalmer_clean_hands', '入殓师洁净手', 'Embalmer Clean Hands', 'function', '手部护理和洁净程序承载死亡职业', 'hand care and hygiene procedure carrying death profession', ['白手套', '小工具', '围裙', '安静眼神', '洁净台感'], ['white gloves', 'small tools', 'apron', 'quiet gaze', 'clean table feel'], '身体、死亡和护理元素优先入殓洁净化。', 'Embalming-clean translate body, death, and care.'),
      s('mourning_service_uniform', '哀悼服务制服', 'Mourning-Service Uniform', 'symbol', '服务者自身也被哀悼色管理', 'service worker also governed by mourning colors', ['黑白配色', '小胸针', '低饱和', '直线外套', '低头'], ['black-white palette', 'small brooch', 'low saturation', 'straight coat', 'lowered head'], '悲伤、贵族和职业元素优先哀悼制服化。', 'Mourning-uniform translate grief, aristocracy, and occupation.'),
      s('crematorium_operator_heat', '火化场操作员热度', 'Crematorium Operator Heat', 'function', '高温设备和职业克制共同存在', 'high-heat equipment and occupational restraint coexisting', ['耐热手套', '灰痕', '深色工服', '控制面板', '无表情'], ['heat gloves', 'ash marks', 'dark workwear', 'control panel', 'expressionless'], '火、工业和死亡元素优先火化场操作化。', 'Crematorium-operator translate fire, industry, and death.'),
      s('grief_counselor_softness', '哀伤辅导师柔和', 'Grief-Counselor Softness', 'cultural_image', '死亡周边的柔和照护和心理空间', 'soft care and psychological space around death', ['柔软针织', '纸巾包', '温和眼神', '浅灰色', '开放手势'], ['soft knitwear', 'tissue pack', 'gentle eyes', 'light grey', 'open gesture'], '温柔和死亡元素优先哀伤辅导化。', 'Grief-counselor translate tenderness and death.'),
      s('mortuary_archive', '太平间档案', 'Mortuary Archive', 'symbol', '死亡被编号、登记和封存', 'death numbered, registered, and sealed', ['编号牌', '登记本', '封条', '冷白材料', '手套'], ['number tag', 'registry', 'seal strip', 'cold white material', 'gloves'], '档案、死亡和机构元素优先太平间档案化。', 'Mortuary-archive translate archive, death, and institution.'),
      s('flower_memorial_protocol', '追悼花艺协议', 'Memorial-Flower Protocol', 'symbol', '花艺服务死亡、记忆和礼仪', 'florals serving death, memory, and etiquette', ['白花', '花剪', '黑丝带', '低头整理', '淡色花粉'], ['white flowers', 'floral shears', 'black ribbon', 'arranging head down', 'pale pollen'], '植物和哀悼元素优先追悼花艺化。', 'Memorial-flower translate plant and mourning elements.'),
      s('graveyard_groundskeeper', '墓园管理员', 'Graveyard Groundskeeper', 'cultural_image', '户外维护和死亡空间结合', 'outdoor maintenance and death space combined', ['耐磨外套', '泥土痕', '钥匙串', '园艺工具', '安静站姿'], ['durable coat', 'soil marks', 'keyring', 'gardening tool', 'quiet stance'], '自然、死亡和维护元素优先墓园管理员化。', 'Graveyard-groundskeeper translate nature, death, and maintenance.'),
      s('ritual_body_care', '仪式化遗体照护', 'Ritual Body Care', 'function', '身体护理动作保持庄重和洁净', 'body-care gestures kept solemn and clean', ['白布', '手套', '折叠动作', '低声姿态', '干净器具'], ['white cloth', 'gloves', 'folding action', 'low-voice posture', 'clean tools'], '仪式和护理元素优先转成庄重身体照护。', 'Translate ritual and care into solemn body care.'),
      s('ghostly_professional_boundary', '幽灵职业边界', 'Ghostly Professional Boundary', 'ontology', '超自然只作为职业边界上的低强度暗示', 'supernatural only as low-intensity hint at professional boundary', ['冷白光', '轻微透明感', '黑色制服', '无表情', '封存物'], ['cold white light', 'slight translucency', 'black uniform', 'expressionless', 'sealed object'], '鬼魂和死亡超现实必须被职业制度封存。', 'Ghostly death-surrealism must be sealed by professional system.', { ontologyLevel: 4, risk: 'high' })
    ]
  }
];

export const FUNCTION_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
