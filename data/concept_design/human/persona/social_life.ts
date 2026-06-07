import { buildExplicitPersonaTerms, ExplicitPersonaSeed, PersonaCategoryFit, PersonaEra, personaFit } from './types';

type Row = [string, string, string, string, string, (1 | 2 | 3 | 4 | 5)?, PersonaEra[]?, string[]?];
type Group = { group: string; groupEn: string; rows: Row[] };

const modern: PersonaEra[] = ['modern', 'contemporary'];
const contemporary: PersonaEra[] = ['contemporary', 'near_future'];
const industrialModern: PersonaEra[] = ['industrial', 'modern', 'contemporary'];

const socialFit = (group: string): PersonaCategoryFit => {
  if (group.startsWith('A.')) return personaFit('weak', {
    strong: ['urban_life'],
    usable: ['romance', 'real_professional', 'workplace'],
    fusion: ['surreal', 'horror'],
    weak: ['wuxia', 'xianxia', 'court']
  });
  if (group.startsWith('B.')) return personaFit('weak', {
    strong: ['urban_life', 'workplace'],
    usable: ['real_professional', 'romance'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['wuxia', 'xianxia', 'court']
  });
  if (group.startsWith('C.')) return personaFit('weak', {
    strong: ['romance', 'urban_life'],
    usable: ['real_professional', 'workplace'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'wasteland', 'cyberpunk']
  });
  if (group.startsWith('D.')) return personaFit('weak', {
    strong: ['urban_life', 'fashion_idol'],
    usable: ['romance', 'boudoir_aesthetic'],
    fusion: ['noir_crime', 'surreal'],
    weak: ['wuxia', 'xianxia', 'wasteland']
  });
  if (group.startsWith('E.')) return personaFit('weak', {
    strong: ['urban_life'],
    usable: ['wasteland', 'horror', 'noir_crime'],
    fusion: ['surreal', 'post_apocalyptic'],
    weak: ['fashion_idol', 'court', 'romance']
  });
  if (group.startsWith('F.')) return personaFit('weak', {
    strong: ['urban_life', 'workplace'],
    usable: ['real_professional', 'noir_crime'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['court', 'xianxia', 'romance']
  });
  if (group.startsWith('G.')) return personaFit('weak', {
    strong: ['urban_life'],
    usable: ['adventure', 'romance', 'real_professional'],
    fusion: ['historical', 'wasteland'],
    weak: ['court', 'xianxia', 'fashion_idol']
  });
  if (group.startsWith('H.')) return personaFit('weak', {
    strong: ['urban_life'],
    usable: ['romance', 'real_professional', 'historical'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'court', 'xianxia']
  });
  if (group.startsWith('I.')) return personaFit('weak', {
    strong: ['urban_life'],
    usable: ['fashion_idol', 'romance'],
    fusion: ['surreal', 'cyberpunk'],
    weak: ['court', 'war_military', 'xianxia']
  });
  return personaFit('weak', {
    strong: ['urban_life'],
    usable: ['romance', 'real_professional', 'historical'],
    fusion: ['horror', 'surreal'],
    weak: ['fashion_idol', 'wasteland', 'cyberpunk']
  });
};

const socialFitOverrides: Record<string, PersonaCategoryFit> = {
  balcony_smoker_white_collar: personaFit('weak', {
    strong: ['urban_life', 'workplace'],
    usable: ['real_professional'],
    fusion: ['surreal', 'noir_crime'],
    weak: ['wuxia', 'xianxia', 'court']
  }),
  instant_noodle_programmer: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'real_professional'],
    usable: ['science_fiction'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['wuxia', 'xianxia', 'court']
  }),
  tiny_room_streamer: personaFit('weak', {
    strong: ['urban_life'],
    usable: ['fashion_idol', 'real_professional'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['court', 'wuxia', 'xianxia']
  }),
  new_mother_sleepless: personaFit('weak', {
    strong: ['urban_life', 'romance'],
    usable: ['medical'],
    fusion: ['surreal', 'horror'],
    weak: ['war_military', 'wasteland', 'cyberpunk']
  }),
  single_father_cook: personaFit('weak', {
    strong: ['urban_life', 'romance'],
    usable: ['real_professional', 'workplace'],
    fusion: ['surreal'],
    weak: ['war_military', 'wasteland', 'cyberpunk']
  }),
  school_gate_parent: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['romance'],
    fusion: ['surreal'],
    weak: ['war_military', 'wasteland', 'cyberpunk']
  }),
  divorce_court_woman: personaFit('weak', {
    strong: ['urban_life', 'romance', 'institutional'],
    usable: ['noir_crime'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'wasteland', 'cyberpunk']
  }),
  caregiver_daughter: personaFit('weak', {
    strong: ['urban_life', 'romance'],
    usable: ['medical'],
    fusion: ['surreal'],
    weak: ['war_military', 'wasteland', 'cyberpunk']
  }),
  crypto_new_money_youth: personaFit('weak', {
    strong: ['urban_life', 'fashion_idol'],
    usable: ['cyberpunk', 'science_fiction'],
    fusion: ['surreal', 'noir_crime'],
    weak: ['wuxia', 'xianxia', 'court']
  }),
  plastic_surgery_socialite: personaFit('weak', {
    strong: ['urban_life', 'fashion_idol'],
    usable: ['boudoir_aesthetic', 'medical'],
    fusion: ['surreal', 'body_horror'],
    weak: ['wuxia', 'xianxia', 'wasteland']
  }),
  underpass_sleeper: personaFit('weak', {
    strong: ['urban_life'],
    usable: ['wasteland', 'post_apocalyptic'],
    fusion: ['horror', 'surreal'],
    weak: ['fashion_idol', 'court', 'romance']
  }),
  bottle_collecting_grandpa: personaFit('weak', {
    strong: ['urban_life'],
    usable: ['wasteland'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'court', 'romance']
  }),
  night_market_vendor: personaFit('weak', {
    strong: ['urban_life', 'real_professional'],
    usable: ['romance', 'workplace'],
    fusion: ['noir_crime', 'surreal'],
    weak: ['fashion_idol', 'court', 'xianxia']
  }),
  temporary_worker_youth: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'real_professional'],
    usable: ['wasteland'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'court', 'romance']
  }),
  migrant_construction_worker: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'real_professional'],
    usable: ['wasteland'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'court', 'romance']
  }),
  pawnshop_regular: personaFit('weak', {
    strong: ['urban_life', 'noir_crime'],
    usable: ['wasteland'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'court', 'romance']
  }),
  twenty_four_hour_nurse_aide: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'medical'],
    usable: ['real_professional'],
    fusion: ['surreal', 'horror'],
    weak: ['court', 'xianxia', 'romance']
  }),
  karaoke_front_desk_girl: personaFit('weak', {
    strong: ['urban_life', 'workplace'],
    usable: ['real_professional', 'fashion_idol', 'boudoir_aesthetic'],
    fusion: ['noir_crime', 'surreal'],
    weak: ['court', 'xianxia', 'wuxia']
  }),
  late_shift_taxi_driver: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'real_professional'],
    usable: ['noir_crime'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['court', 'xianxia', 'romance']
  }),
  security_camera_operator: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'real_professional'],
    usable: ['noir_crime', 'institutional'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['court', 'xianxia', 'romance']
  }),
  language_school_student: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['adventure', 'romance'],
    fusion: ['historical', 'surreal'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  train_station_couple: personaFit('weak', {
    strong: ['urban_life', 'romance'],
    usable: ['adventure'],
    fusion: ['historical', 'surreal'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  overseas_chinatown_barber: personaFit('weak', {
    strong: ['urban_life', 'real_professional'],
    usable: ['historical', 'romance'],
    fusion: ['noir_crime', 'wasteland'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  seasonal_farm_worker: personaFit('weak', {
    strong: ['urban_life', 'real_professional', 'ecological'],
    usable: ['adventure', 'historical'],
    fusion: ['wasteland'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  wedding_studio_assistant: personaFit('weak', {
    strong: ['urban_life', 'real_professional', 'romance'],
    usable: ['workplace', 'fashion_idol'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'court', 'xianxia']
  }),
  township_cadre_youth: personaFit('weak', {
    strong: ['urban_life', 'real_professional', 'institutional'],
    usable: ['workplace', 'historical'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'court', 'xianxia']
  }),
  school_uniform_repeater: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['romance'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'court', 'xianxia']
  }),
  art_school_student: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['fashion_idol', 'romance', 'abstract'],
    fusion: ['surreal'],
    weak: ['court', 'war_military', 'xianxia']
  }),
  exam_cram_girl: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['romance'],
    fusion: ['surreal'],
    weak: ['court', 'war_military', 'xianxia']
  }),
  skatepark_highschooler: personaFit('weak', {
    strong: ['urban_life', 'adventure'],
    usable: ['fashion_idol', 'romance'],
    fusion: ['surreal'],
    weak: ['court', 'war_military', 'xianxia']
  }),
  campus_radio_host: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['real_professional', 'fashion_idol', 'romance'],
    fusion: ['surreal'],
    weak: ['court', 'war_military', 'xianxia']
  }),
  student_union_host: personaFit('weak', {
    strong: ['urban_life', 'institutional'],
    usable: ['real_professional', 'workplace'],
    fusion: ['surreal'],
    weak: ['court', 'war_military', 'xianxia']
  }),
  retired_factory_master: personaFit('weak', {
    strong: ['urban_life', 'real_professional'],
    usable: ['workplace', 'historical'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'wasteland', 'cyberpunk']
  }),
  retired_teacher_elder: personaFit('weak', {
    strong: ['urban_life', 'real_professional'],
    usable: ['institutional', 'historical'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'wasteland', 'cyberpunk']
  }),
  senior_travel_group_leader: personaFit('weak', {
    strong: ['urban_life'],
    usable: ['real_professional', 'adventure'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'wasteland', 'cyberpunk']
  }),
  hospital_corridor_elder: personaFit('weak', {
    strong: ['urban_life', 'medical'],
    usable: ['romance'],
    fusion: ['horror', 'surreal'],
    weak: ['fashion_idol', 'wasteland', 'cyberpunk']
  }),
  community_choir_grandmother: personaFit('weak', {
    strong: ['urban_life'],
    usable: ['religious_ritual', 'institutional'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'wasteland', 'cyberpunk']
  })
};

const toSeeds = (groups: Group[]): ExplicitPersonaSeed[] => groups.flatMap(({ group, groupEn, rows }) => rows.map(([id, name, nameEn, def, defEn, ontologyLevel = 1, eras = modern, tags = []]) => ({
  id,
  name,
  nameEn,
  group,
  groupEn,
  def,
  defEn,
  ontologyLevel,
  eras,
  tags,
  categoryFit: socialFitOverrides[id] || socialFit(group)
})));

const groups: Group[] = [
  { group: 'A. 独居 / 都市孤独', groupEn: 'A. Living Alone / Urban Solitude', rows: [
    ['single_rental_youth', '合租房独居青年', 'Single Rental Youth', '第一识别是合租房独居青年。造型入口：褪色卫衣、门禁卡、共享冰箱贴、帆布袋和只属于一小块房间的身体尺度。母题：他在群居房里维持私人边界，独居感来自被压缩的生活半径。张力：孤独不是美学姿态，而是房租、隔音和共享规则留下的疲惫。视觉证据：钥匙串、外卖袋、折叠晾衣架、旧手机、床边收纳箱和不想打扰室友的轻步态。边界：避免豪华公寓样板间或抽象忧郁写真。', 'First read: Single Rental Youth. Styling entry: faded hoodie, access card, shared-fridge notes, tote bag, and a body scaled to one small room. Motif: private boundaries are maintained inside shared housing. Tension: solitude is not aesthetic mood, but fatigue from rent, thin walls, and shared rules. Visual evidence: keys, takeout bag, folding drying rack, old phone, bedside storage box, and quiet steps not disturbing roommates. Boundary: avoid luxury apartment staging or abstract melancholy portrait.'],
    ['late_night_convenience_girl', '深夜便利店女孩', 'Late-Night Convenience Girl', '第一识别是深夜便利店女孩。造型入口：便利店塑料袋、松散外套、荧光灯脸色、耳机和凌晨才买的廉价热食。母题：她把城市夜晚的孤独压进一次短暂购物。张力：不是夜生活酷感，而是无人照看的日常缝隙。视觉证据：收银小票、关东煮杯、拖鞋边缘、凌乱刘海、亮到发冷的货架和不想说话的眼。边界：避免夜店女孩或网红便利店写真。', 'First read: Late-Night Convenience Girl. Styling entry: convenience-store plastic bag, loose coat, fluorescent face, earbuds, and cheap hot food bought after midnight. Motif: city-night solitude is compressed into one small purchase. Tension: not nightlife coolness, but an unwatched daily gap. Visual evidence: receipt, hot-snack cup, house-shoe edge, messy bangs, cold bright shelves, and eyes that do not want conversation. Boundary: avoid club girl or influencer convenience-store photoshoot.'],
    ['balcony_smoker_white_collar', '阳台抽烟白领', 'Balcony-Smoker White Collar', '第一识别是阳台抽烟白领。造型入口：衬衫袖口、阳台烟灰、松掉领带、室内灯背光和刚结束会议的疲惫肩线。母题：阳台是他从公司时间里偷出来的短暂出口。张力：体面还在身上，但职业表情已经卸下一半。视觉证据：烟盒、打火机、玻璃门倒影、纸杯咖啡、衬衫折痕和看向楼群而非镜头的脸。边界：避免霸总式抽烟或纯情绪大片。', 'First read: Balcony-Smoker White Collar. Styling entry: shirt cuffs, balcony ash, loosened tie, interior backlight, and meeting-fatigued shoulders. Motif: the balcony is a brief exit stolen from company time. Tension: respectability remains on the body while the professional face is half removed. Visual evidence: cigarette pack, lighter, glass-door reflection, paper coffee cup, shirt creases, and face looking at towers rather than camera. Boundary: avoid CEO-smoking glamour or pure mood photography.'],
    ['delivery_box_apartment_boy', '快递箱公寓男孩', 'Delivery-Box Apartment Boy', '第一识别是快递箱公寓男孩。造型入口：堆在门口的纸箱、宽松居家裤、胶带刀、拖鞋和被电商消费包围的小房间。母题：他的生活节奏由快递、退货和临时满足感组成。张力：消费很多，但空间和精神都很窄。视觉证据：拆开的纸盒、泡泡膜、门口鞋堆、手机订单页面、凌乱床沿和无意识踩扁纸箱的脚。边界：避免炫富购物或干净电商广告。', 'First read: Delivery-Box Apartment Boy. Styling entry: boxes at the door, loose home pants, tape cutter, slippers, and a small room surrounded by online shopping. Motif: life rhythm is made from delivery, returns, and temporary satisfaction. Tension: consumption is abundant while space and spirit remain narrow. Visual evidence: opened boxes, bubble wrap, shoe pile, phone order page, messy bed edge, and foot unconsciously crushing cardboard. Boundary: avoid luxury shopping or clean e-commerce advertising.'],
    ['houseplant_lonely_girl', '绿植陪伴独居女孩', 'Houseplant Lonely Girl', '第一识别是绿植陪伴独居女孩。造型入口：居家吊带外搭开衫、喷壶、窗台绿植、柔软拖鞋和对植物说话的安静姿态。母题：她把照料植物当作维持生活秩序的小型关系。张力：温柔要有孤独的重量，不是治愈系摆拍。视觉证据：水渍窗台、枯叶、陶盆、家居服褶皱、手机未读消息和在阳台光里弯下的背。边界：避免森系少女或无成本治愈写真。', 'First read: Houseplant Lonely Girl. Styling entry: home camisole with cardigan, spray bottle, windowsill plants, soft slippers, and quiet posture speaking to plants. Motif: plant care becomes a small relationship that holds life order. Tension: tenderness must carry lonely weight, not healing-aesthetic staging. Visual evidence: wet windowsill, dry leaves, ceramic pots, wrinkled homewear, unread phone messages, and a bent back in balcony light. Boundary: avoid forest-girl styling or cost-free healing portrait.'],
    ['instant_noodle_programmer', '泡面程序员', 'Instant-Noodle Programmer', '第一识别是泡面程序员。造型入口：连帽衫、泡面杯、双显示器、眼下疲惫和被椅子固定太久的坐姿。母题：他的身体被代码时间、外卖时间和睡眠债共同塑形。张力：技术能力不能写成酷，要落到重复劳动和生活坍缩。视觉证据：键盘油光、泡面叉、眼药水、拖鞋、耳机压痕和屏幕蓝光里的空脸。边界：避免天才黑客或干净科技广告。', 'First read: Instant-Noodle Programmer. Styling entry: hoodie, instant-noodle cup, dual monitors, under-eye fatigue, and chair-locked posture. Motif: code time, delivery time, and sleep debt shape the body. Tension: technical skill should not look cool; it must land in repetitive labor and collapsed living routine. Visual evidence: greasy keyboard, noodle fork, eye drops, slippers, headset marks, and blank face in screen blue light. Boundary: avoid genius hacker or clean tech advertising.'],
    ['noise_canceling_commuter', '降噪耳机通勤者', 'Noise-Canceling Commuter', '第一识别是降噪耳机通勤者。造型入口：大耳机、通勤包、地铁扶手、压低视线和把自己从人群中隔开的身体。母题：降噪耳机不是潮流物，而是城市拥挤里的个人防线。张力：他在人群中心，却努力制造听觉孤岛。视觉证据：地铁卡、电脑包、皱衬衫、耳机头梁压痕、手抓扶手和不与任何人对视的脸。边界：避免普通耳机广告或赛博通勤酷感。', 'First read: Noise-Canceling Commuter. Styling entry: large headphones, commuter bag, subway handle, lowered gaze, and body separating itself from the crowd. Motif: noise-canceling headphones are not fashion but a personal defense inside urban density. Tension: the person is inside the crowd while building an audio island. Visual evidence: transit card, laptop bag, wrinkled shirt, headband mark, hand on rail, and face avoiding every gaze. Boundary: avoid headphone advertising or cyber commuter coolness.'],
    ['tiny_room_streamer', '小房间直播青年', 'Tiny-Room Streamer', '第一识别是小房间直播青年。造型入口：廉价补光灯、床边背景布、耳麦、收纳箱和把狭窄房间裁成屏幕舞台的身体。母题：他用直播框遮住现实空间的局促。张力：屏幕里热闹，屏幕外要看见生活成本。视觉证据：灯架、贴墙线缆、床单边缘、二手椅、打赏界面反光和结束直播后的松垮肩。边界：避免专业主播棚或游戏网红模板。', 'First read: Tiny-Room Streamer. Styling entry: cheap fill light, bed-edge backdrop, headset, storage boxes, and a body cropping a cramped room into a screen stage. Motif: the stream frame hides the rooms narrow reality. Tension: the screen is lively while cost of living shows outside the frame. Visual evidence: light stand, taped cables, sheet edge, secondhand chair, tip-interface reflection, and shoulders collapsing after the stream. Boundary: avoid professional studio streamer or generic gamer influencer.'],
    ['weekend_laundry_girl', '周末洗衣房女孩', 'Weekend Laundromat Girl', '第一识别是周末洗衣房女孩。造型入口：洗衣篮、宽松毛衣、投币机、未干头发和把周末花在家务上的疲惫。母题：她的休息日被维护生活的流程占据。张力：日常温柔要带被时间挤压的轻微麻木。视觉证据：洗衣液、硬币、塑料篮、运动鞋、滚筒玻璃倒影和坐在塑料椅上发空的眼。边界：避免清新生活方式广告。', 'First read: Weekend Laundromat Girl. Styling entry: laundry basket, loose sweater, coin machine, not-dry hair, and fatigue of spending the weekend on chores. Motif: rest day is occupied by life-maintenance workflow. Tension: daily softness needs slight numbness from time pressure. Visual evidence: detergent, coins, plastic basket, sneakers, washer-glass reflection, and vacant eyes on a plastic chair. Boundary: avoid fresh lifestyle advertising.'],
    ['elevator_mirror_single_man', '电梯镜中独身男人', 'Elevator-Mirror Single Man', '第一识别是电梯镜中独身男人。造型入口：电梯镜面、旧公文包、松垮外套、楼层按钮光和只在反射里出现的自我审视。母题：电梯成为他每天短暂看见自己的密闭空间。张力：独身感不是身份标签，而是回家路径上的重复沉默。视觉证据：磨损包角、钥匙、皱领口、镜面重影、楼层红字和像刚从社交角色里退出来的脸。边界：避免悬疑片或抽象孤独海报。', 'First read: Elevator-Mirror Single Man. Styling entry: elevator mirror, old briefcase, loose coat, floor-button light, and self-check visible only in reflection. Motif: the elevator is the small sealed space where he briefly sees himself each day. Tension: single life is not a label but repeated silence on the way home. Visual evidence: worn bag corners, keys, wrinkled collar, mirror doubling, red floor number, and face just leaving a social role. Boundary: avoid thriller staging or abstract loneliness poster.']
  ] },
  { group: 'B. 都市白领 / 办公室阶层', groupEn: 'B. Urban White Collar / Office Class', rows: [
    ['overtime_finance_analyst', '加班金融分析师', 'Overtime Finance Analyst', '第一识别是加班金融分析师。造型入口：衬衫袖口、Excel屏幕、纸杯咖啡、工牌和凌晨还亮着的玻璃楼。母题：他被数字、绩效和市场时间拖进过度清醒。张力：理性表面下要有睡眠债和责任焦虑。视觉证据：领带松开、眼下阴影、电脑包、密集表格、便利店早餐和手指停在键盘上的僵硬。边界：避免投行精英广告或霸总套壳。', 'First read: Overtime Finance Analyst. Styling entry: shirt cuffs, spreadsheet screen, paper coffee cup, badge, and glass tower lit after midnight. Motif: numbers, performance, and market time pull him into over-alertness. Tension: rational surface must hide sleep debt and responsibility anxiety. Visual evidence: loosened tie, under-eye shadow, laptop bag, dense sheets, convenience-store breakfast, and stiff fingers paused on keyboard. Boundary: avoid investment-bank glamour or CEO trope.'],
    ['ppt_consultant', 'PPT咨询顾问', 'Slide-Deck Consultant', '第一识别是PPT咨询顾问。造型入口：深色西装、激光笔、电脑包、简洁图表和把复杂问题压成页面的疲惫。母题：他的职业身体服务于演示逻辑，而不是现实本身。张力：体面和空洞要同时出现。视觉证据：PPT缩略图、会议室玻璃、马克笔、整齐发型、干涩眼睛和一只永远准备翻页的手。边界：避免普通白领或演讲培训师。', 'First read: Slide-Deck Consultant. Styling entry: dark suit, laser pointer, laptop bag, clean charts, and fatigue from compressing complexity into slides. Motif: the professional body serves presentation logic rather than reality itself. Tension: respectability and emptiness must coexist. Visual evidence: slide thumbnails, meeting-room glass, marker, neat hair, dry eyes, and one hand always ready to advance pages. Boundary: avoid generic office worker or presentation coach.'],
    ['hr_interview_woman', '面试室HR女性', 'HR Interview Woman', '第一识别是面试室HR女性。造型入口：米色西装、简历夹、标准微笑、面试桌和评估别人的冷静眼神。母题：她把亲和力训练成筛选机制。张力：温柔必须有门槛感。视觉证据：简历、签字笔、工牌、玻璃隔间、交叠双手和笑容背后仍在打分的眼。边界：避免普通办公室姐姐或职场恋爱角色。', 'First read: HR Interview Woman. Styling entry: beige suit, resume folder, standard smile, interview table, and calm eyes evaluating others. Motif: friendliness is trained into a filtering mechanism. Tension: warmth must carry threshold power. Visual evidence: resume, pen, badge, glass booth, folded hands, and eyes still scoring behind the smile. Boundary: avoid office-sister trope or workplace romance character.'],
    ['coffee_badge_employee', '咖啡胸牌职员', 'Coffee-Badge Employee', '第一识别是咖啡胸牌职员。造型入口：挂绳工牌、纸杯咖啡、通勤外套、电梯等待和还没完全醒来的职业表情。母题：咖啡和工牌共同把私人身体启动成公司身体。张力：她看似整洁，但所有细节都在赶时间。视觉证据：咖啡杯套、门禁卡、电脑包、鞋跟磨损、外套压痕和电梯门前短暂放空的脸。边界：避免商务模特或咖啡广告。', 'First read: Coffee-Badge Employee. Styling entry: lanyard badge, paper coffee cup, commuter coat, elevator waiting, and a professional face not fully awake. Motif: coffee and badge turn a private body into a company body. Tension: she looks neat while every detail is late. Visual evidence: cup sleeve, access card, laptop bag, worn heels, coat creases, and brief blank face before elevator doors. Boundary: avoid business model or coffee ad.'],
    ['glass_tower_manager', '玻璃楼经理', 'Glass-Tower Manager', '第一识别是玻璃楼经理。造型入口：合身西装、透明会议室、平板电脑、克制手势和被楼层高度支撑的管理姿态。母题：经理身份通过空间距离和流程控制成立。张力：权力要干净，但不能没有压力痕迹。视觉证据：门禁闸机、玻璃反射、腕表、会议文件、站在窗边的背和下属动线绕开的身体。边界：避免霸总广告或普通西装人。', 'First read: Glass-Tower Manager. Styling entry: fitted suit, transparent meeting room, tablet, restrained hands, and management posture supported by floor height. Motif: managerial identity is built through spatial distance and workflow control. Tension: power should look clean while pressure traces remain. Visual evidence: access gate, glass reflection, watch, meeting files, back at the window, and a body others route around. Boundary: avoid CEO advertising or generic suited person.'],
    ['subway_suit_commuter', '地铁西装通勤男', 'Subway Suit Commuter', '第一识别是地铁西装通勤男。造型入口：皱西装、地铁扶手、电脑包、拥挤车厢和努力保持体面的站姿。母题：通勤把商务体面和公共拥挤强行叠在一起。张力：西装不代表权力，而是每天被城市磨损的制服。视觉证据：领口汗痕、扶手手指、车厢灯、鞋面灰尘、背包压皱肩线和压低视线的脸。边界：避免精英广告或地铁潮拍。', 'First read: Subway Suit Commuter. Styling entry: wrinkled suit, subway handle, laptop bag, crowded car, and a stance trying to remain respectable. Motif: commuting forces business respectability and public crowding together. Tension: the suit is not power but a uniform worn down by the city. Visual evidence: collar sweat, fingers on rail, carriage light, dusty shoes, bag-creased shoulders, and lowered gaze. Boundary: avoid elite advertising or subway fashion shoot.'],
    ['office_snack_drawer_girl', '零食抽屉办公室女孩', 'Office Snack-Drawer Girl', '第一识别是零食抽屉办公室女孩。造型入口：开衫、抽屉零食、便利贴、电脑屏幕和把工作日拆成小奖励的疲惫笑。母题：她用低成本零食维持办公室情绪稳定。张力：可爱不能脱离绩效压力。视觉证据：饼干袋、薄荷糖、便利贴、保温杯、工位小摆件和偷吃时仍看屏幕的眼。边界：避免萌系办公室摆拍。', 'First read: Office Snack-Drawer Girl. Styling entry: cardigan, snack drawer, sticky notes, computer screen, and tired smile dividing workday into small rewards. Motif: cheap snacks maintain emotional stability at the desk. Tension: cuteness cannot detach from performance pressure. Visual evidence: cookie bag, mints, sticky notes, thermos, tiny desk objects, and eyes still on screen while snacking. Boundary: avoid cute office staging.'],
    ['resignation_letter_youth', '辞职信青年', 'Resignation-Letter Youth', '第一识别是辞职信青年。造型入口：白衬衫、打印纸、纸箱、工牌摘下的瞬间和带轻微解脱的表情。母题：辞职让公司身体重新变回私人身体。张力：解脱和不确定必须并存。视觉证据：辞职信、收拾好的杯子、纸箱、空工位、摘下挂绳的手和不知道该往哪走的脚。边界：避免热血逆袭或职场爽文。', 'First read: Resignation-Letter Youth. Styling entry: white shirt, printed paper, cardboard box, badge removed, and a face with slight relief. Motif: resignation turns the company body back into a private body. Tension: relief and uncertainty must coexist. Visual evidence: resignation letter, packed mug, cardboard box, empty desk, hand removing lanyard, and feet unsure where to go. Boundary: avoid triumphant career revenge fantasy.'],
    ['corporate_training_host', '企业内训主持人', 'Corporate Training Host', '第一识别是企业内训主持人。造型入口：无线麦、培训PPT、标准笑容、会议室灯和让疲惫员工配合互动的手势。母题：她把公司价值观包装成可执行的现场气氛。张力：热情必须带尴尬，因为观众并不真正自愿。视觉证据：翻页笔、胸麦、白板、团建道具、过亮笑容和等待掌声的停顿。边界：避免综艺主持或普通培训老师。', 'First read: Corporate Training Host. Styling entry: wireless mic, training slides, standard smile, meeting-room light, and hands making tired employees interact. Motif: company values are packaged into executable room atmosphere. Tension: enthusiasm must carry awkwardness because the audience is not truly voluntary. Visual evidence: clicker, chest mic, whiteboard, team-building props, too-bright smile, and pause waiting for applause. Boundary: avoid variety-show host or generic trainer.'],
    ['end_of_month_accountant', '月底会计', 'End-of-Month Accountant', '第一识别是月底会计。造型入口：计算器、发票夹、眼镜、凌晨台灯和被数字截止日压住的肩。母题：月底会计把企业秩序维持在票据和小数点里。张力：平凡岗位要有时间临界感。视觉证据：票据、印章、计算器、红笔、咖啡污渍、揉皱袖口和盯着差额的发直眼神。边界：避免普通文员或财务广告。', 'First read: End-of-Month Accountant. Styling entry: calculator, invoice folder, glasses, late desk lamp, and shoulders pressed by numeric deadlines. Motif: corporate order is maintained through receipts and decimals. Tension: an ordinary role needs deadline pressure. Visual evidence: invoices, stamp, calculator, red pen, coffee stain, wrinkled cuffs, and eyes fixed on a discrepancy. Boundary: avoid generic clerk or finance ad.']
  ] },
  { group: 'C. 家庭 / 婚姻 / 照护', groupEn: 'C. Family / Marriage / Care', rows: [
    ['full_time_housewife', '全职家庭主妇', 'Full-Time Housewife', '第一识别是全职家庭主妇。造型入口：围裙、家居针织、购物袋、厨房灯和被家务流程塑形的手。母题：她的身份不是温柔标签，而是持续维护家庭空间的劳动。张力：整洁表面下要有重复劳动的疲惫。视觉证据：菜篮、洗碗手套、围裙褶皱、清单、拖鞋和刚擦完台面仍无法休息的站姿。边界：避免贤妻良母广告或狗血剧照。', 'First read: Full-Time Housewife. Styling entry: apron, home knitwear, shopping bags, kitchen light, and hands shaped by housework. Motif: the identity is not a warmth label but labor that continuously maintains domestic space. Tension: repeated fatigue sits under the tidy surface. Visual evidence: market basket, dish gloves, apron folds, checklist, slippers, and posture unable to rest after cleaning the counter. Boundary: avoid virtuous-housewife advertising or melodrama still.'],
    ['new_mother_sleepless', '失眠新手妈妈', 'Sleepless New Mother', '第一识别是失眠新手妈妈。造型入口：松散睡衣、奶瓶、眼下疲惫、凌乱发髻和听到一点声音就抬头的身体。母题：照护把她的睡眠、皮肤和时间感重新分配。张力：母性不能只写温柔，要看见被剥夺的私人时间。视觉证据：保温杯、奶瓶刷、柔软毯子、未合上的门、单手抱物的姿势和强撑清醒的眼。边界：避免真实婴儿中心化或温情广告。', 'First read: Sleepless New Mother. Styling entry: loose sleepwear, bottle, under-eye fatigue, messy bun, and body lifting at the smallest sound. Motif: care redistributes her sleep, skin, and sense of time. Tension: motherhood cannot be only tenderness; stolen private time must show. Visual evidence: thermos, bottle brush, soft blanket, half-open door, one-handed holding posture, and eyes forcing wakefulness. Boundary: avoid centering a real infant or warm family advertising.'],
    ['single_father_cook', '单亲父亲厨子', 'Single-Father Cook', '第一识别是单亲父亲厨子。造型入口：卷起袖口、围裙、饭盒、厨房油烟和一边做饭一边看时间的焦虑。母题：他把养育责任落在具体饭菜和家务节奏里。张力：粗糙和温柔要同处一双手。视觉证据：切菜板、旧T恤、饭盒盖、油烟、药盒或作业本边缘和压住疲惫的背。边界：避免煽情父爱或美食节目厨师。', 'First read: Single-Father Cook. Styling entry: rolled sleeves, apron, lunch box, kitchen grease, and anxiety watching time while cooking. Motif: parenting responsibility lands in meals and domestic rhythm. Tension: roughness and tenderness share the same hands. Visual evidence: cutting board, old T-shirt, lunch-box lid, cooking smoke, pill box or homework edge, and back holding fatigue down. Boundary: avoid sentimental fatherhood or cooking-show chef.'],
    ['grandmother_market_basket', '菜篮祖母', 'Market-Basket Grandmother', '第一识别是菜篮祖母。造型入口：菜篮、棉布外套、舒适旧鞋、零钱袋和熟悉菜价的手。母题：她把家庭照料延伸到市场、价格和路线记忆。张力：年老不是装饰，生活能力才是核心。视觉证据：塑料袋、菜叶水痕、零钱、旧围巾、弯腰挑菜和与摊主熟识的眼神。边界：避免慈祥老人明信片。', 'First read: Market-Basket Grandmother. Styling entry: vegetable basket, cotton coat, comfortable old shoes, coin pouch, and hands familiar with prices. Motif: family care extends into market routes, prices, and memory. Tension: age is not decoration; life competence is central. Visual evidence: plastic bags, vegetable water marks, coins, old scarf, bending to choose produce, and eyes familiar with vendors. Boundary: avoid kindly-elder postcard.'],
    ['school_gate_parent', '校门口家长', 'School-Gate Parent', '第一识别是校门口家长。造型入口：外套、保温杯、书包或雨伞、校门等待姿态和被接送时间表固定的身体。母题：亲职责任通过等待和携带显形。张力：日常安静里要有焦虑管理。视觉证据：校门栏杆、手机消息、雨伞、围巾、手里多余的外套和在人群里寻找孩子方向的眼。边界：避免校园恋爱或广告家长。', 'First read: School-Gate Parent. Styling entry: coat, thermos, schoolbag or umbrella, school-gate waiting posture, and body fixed by pickup schedule. Motif: parental duty appears through waiting and carrying. Tension: quiet daily life contains managed anxiety. Visual evidence: school gate railings, phone messages, umbrella, scarf, extra coat in hand, and eyes searching the crowd. Boundary: avoid campus romance or advertising parent.'],
    ['middle_class_wedding_bride', '中产婚礼新娘', 'Middle-Class Wedding Bride', '第一识别是中产婚礼新娘。造型入口：租赁婚纱、精致妆发、酒店灯光、流程表和努力维持体面笑容的脸。母题：婚礼把爱情、消费、家庭期待和社交展示压成一天。张力：幸福要有流程压力和预算痕迹。视觉证据：胸花、婚礼清单、疲惫高跟、父母视线、补妆粉扑和笑到僵硬的嘴角。边界：避免童话新娘或豪门婚礼奇观。', 'First read: Middle-Class Wedding Bride. Styling entry: rented gown, polished hair and makeup, hotel light, schedule sheet, and face maintaining a respectable smile. Motif: wedding compresses love, consumption, family expectation, and social display into one day. Tension: happiness needs workflow pressure and budget traces. Visual evidence: corsage, wedding checklist, tired heels, parents gaze, makeup puff, and smile stiff from overuse. Boundary: avoid fairytale bride or luxury wedding spectacle.'],
    ['divorce_court_woman', '离婚庭女性', 'Divorce-Court Woman', '第一识别是离婚庭女性。造型入口：深色外套、文件袋、低调妆容、法院走廊和把情绪收进手续里的站姿。母题：离婚让亲密关系变成纸面流程和身体边界。张力：脆弱和决断必须同时出现。视觉证据：文件夹、身份证件、戒指痕、冷色走廊、紧握包带和不再解释的眼神。边界：避免狗血哭戏或律师角色。', 'First read: Divorce-Court Woman. Styling entry: dark coat, document envelope, low-key makeup, courthouse corridor, and posture folding emotion into procedure. Motif: divorce turns intimacy into paperwork and bodily boundary. Tension: vulnerability and decision must coexist. Visual evidence: folder, ID card, ring mark, cold hallway, hand gripping bag strap, and eyes no longer explaining. Boundary: avoid melodramatic crying scene or lawyer character.'],
    ['caregiver_daughter', '照护父母的女儿', 'Caregiver Daughter', '第一识别是照护父母的女儿。造型入口：药盒、宽松外套、家访记录、疲惫手臂和在家务与医院之间切换的身体。母题：她的成年身份被照护责任重新安排。张力：爱不能轻飘，必须有身体负担和时间被占用。视觉证据：药袋、医院单据、饭盒、手机提醒、肩膀压痕和坐在床边仍看工作消息的眼。边界：避免纯孝道叙事或苦难猎奇。', 'First read: Caregiver Daughter. Styling entry: pill box, loose coat, visit notes, tired arms, and body switching between housework and hospital. Motif: adult identity is rearranged by care duty. Tension: love cannot float; bodily load and occupied time must show. Visual evidence: medicine bag, hospital papers, lunch box, phone reminders, shoulder marks, and eyes checking work messages beside the bed. Boundary: avoid pure filial-piety story or suffering spectacle.'],
    ['family_photo_father', '全家福父亲', 'Family-Photo Father', '第一识别是全家福父亲。造型入口：整齐衬衫、照相馆灯、僵硬笑容、被安排的站位和努力撑住家庭形象的肩。母题：全家福把父亲身份固定成一张公共证明。张力：稳定感要带表演压力。视觉证据：领口整理痕、手搭椅背、旧皮鞋、摄影棚背景、眼神看向镜头但心思在别处。边界：避免普通中年男或广告家庭。', 'First read: Family-Photo Father. Styling entry: neat shirt, studio lights, stiff smile, arranged placement, and shoulders trying to hold the family image. Motif: the family photo fixes fatherhood into public proof. Tension: stability needs performance pressure. Visual evidence: adjusted collar, hand on chair back, old leather shoes, studio backdrop, and eyes looking at camera while mind is elsewhere. Boundary: avoid generic middle-aged man or advertising family.'],
    ['kitchen_apron_matriarch', '厨房围裙女主人', 'Kitchen-Apron Matriarch', '第一识别是厨房围裙女主人。造型入口：厚围裙、盘发、锅铲、饭桌布局和用厨房调度全家秩序的身体。母题：她的权力不在高声命令，而在谁吃什么、什么时候吃。张力：照料和控制必须绑定。视觉证据：锅铲、围裙油点、菜盘、饭桌座位、卷起袖子和不容别人打乱流程的眼。边界：避免贤妻广告或单纯厨师。', 'First read: Kitchen-Apron Matriarch. Styling entry: heavy apron, pinned hair, spatula, table layout, and body managing family order through the kitchen. Motif: her power is not loud command, but who eats what and when. Tension: care and control are bound together. Visual evidence: spatula, apron oil spots, dishes, table seating, rolled sleeves, and eyes refusing disruption. Boundary: avoid virtuous-housewife advertising or simple chef.']
  ] },
  { group: 'D. 富二代 / 新贵 / 消费阶层', groupEn: 'D. Rich Youth / New Money / Consumer Class', rows: [
    ['rich_second_generation_boy', '富二代少爷', 'Rich Second-Generation Boy', '第一识别是富二代少爷。造型入口：无商标高级外套、车钥匙、懒散坐姿、干净球鞋和习惯被服务的眼神。母题：继承资源让他的身体不用解释自己为什么在这里。张力：随意感要带阶层距离，不是普通潮男。视觉证据：会员卡、昂贵但低调的配饰、司机视角、松散笑容和不主动拿重物的手。边界：避免真实品牌堆叠或霸总化。', 'First read: Rich Second-Generation Boy. Styling entry: logo-free expensive jacket, car key, lazy seated posture, clean sneakers, and eyes used to service. Motif: inherited resources let the body avoid explaining why it belongs here. Tension: casualness needs class distance, not generic fashionable boy. Visual evidence: membership card, expensive restrained accessories, driver perspective, loose smile, and hands not carrying heavy objects. Boundary: avoid real brand stacking or CEO trope.'],
    ['luxury_car_party_girl', '豪车派对女孩', 'Luxury-Car Party Girl', '第一识别是豪车派对女孩。造型入口：亮面短外套、车门边站姿、派对手环、夜色妆容和被车灯切亮的脸。母题：她把车辆、夜场和社交媒体变成个人展示背景。张力：奢华要有表演性，也要有被消费的警觉。视觉证据：车钥匙、派对腕带、高跟鞋、闪粉眼妆、手机自拍和不完全放松的肩。边界：避免真实车标或低俗炫富。', 'First read: Luxury-Car Party Girl. Styling entry: glossy short jacket, car-door stance, party wristband, night makeup, and face cut by headlights. Motif: cars, nightlife, and social media become personal display background. Tension: luxury is performative while the body stays alert to being consumed. Visual evidence: car key, party band, heels, shimmer eye makeup, phone selfie, and shoulders never fully relaxed. Boundary: avoid real car logos or cheap flexing.'],
    ['private_school_heir', '私校继承人', 'Private-School Heir', '第一识别是私校继承人。造型入口：私校制服、徽章、昂贵书包、克制礼仪和从小被资源安排好的站姿。母题：教育在这里不是成长，而是阶层再生产。张力：年轻感要被家族期待压住。视觉证据：校徽、皮鞋、领带、司机接送、课本边角和礼貌到疏离的微笑。边界：避免青春校园恋爱或未成年化。', 'First read: Private-School Heir. Styling entry: private-school uniform, crest, expensive schoolbag, restrained manners, and posture arranged by resources since childhood. Motif: education is not growth here but class reproduction. Tension: youthfulness is pressed down by family expectation. Visual evidence: school crest, leather shoes, tie, chauffeur pickup, textbook corners, and smile polite to the point of distance. Boundary: avoid campus romance or minor-coded treatment.'],
    ['crypto_new_money_youth', '加密货币新贵青年', 'Crypto New-Money Youth', '第一识别是加密货币新贵青年。造型入口：黑T恤、冷钱包、手机行情界面、昂贵运动鞋和突然暴富后的不稳定自信。母题：数字财富把他从普通青年推成没有旧礼仪的新钱身体。张力：钱很多，但身份还没有训练好。视觉证据：多屏价格图、硬件钱包、夜间办公室、夸张戒指、疲惫兴奋的眼和过度防备的手势。边界：避免具体币种广告或科技天才模板。', 'First read: Crypto New-Money Youth. Styling entry: black T-shirt, hardware wallet, phone price charts, expensive sneakers, and unstable confidence after sudden wealth. Motif: digital wealth pushes an ordinary youth into new money without old manners. Tension: money is abundant, but identity is untrained. Visual evidence: multi-screen charts, hardware wallet, night office, loud ring, tired excited eyes, and over-defensive hands. Boundary: avoid specific coin promotion or tech-genius template.', 2, contemporary],
    ['art_fair_collector_girl', '艺术博览会收藏女孩', 'Art-Fair Collector Girl', '第一识别是艺术博览会收藏女孩。造型入口：极简套装、展览票证、香槟杯、图录和把购买力伪装成审美判断的侧脸。母题：她在艺术场域里用消费获得文化身份。张力：气质要冷静，但眼神里有想被承认的焦虑。视觉证据：VIP吊牌、展厅白墙、图录、细跟鞋、轻触下巴的手和不直接看作品价格的姿态。边界：避免艺术家或普通看展女孩。', 'First read: Art-Fair Collector Girl. Styling entry: minimal suit, exhibition pass, champagne glass, catalog, and profile disguising purchase power as taste. Motif: consumption buys cultural identity inside the art field. Tension: the aura is calm while the eyes want recognition. Visual evidence: VIP badge, white gallery wall, catalog, thin heels, hand touching chin, and posture not directly looking at price. Boundary: avoid artist or generic gallery visitor.'],
    ['golf_club_prince', '高尔夫会所少爷', 'Golf-Club Prince', '第一识别是高尔夫会所少爷。造型入口：Polo衫、球杆、遮阳帽、会员场地和从容过头的步态。母题：高尔夫会所把运动变成阶层社交和继承训练。张力：身体要健康干净，但真正可读的是特权环境。视觉证据：球童、手套、会所草坪、腕表、轻松挥杆和像早已拥有场地的眼。边界：避免运动员或旅游广告。', 'First read: Golf-Club Prince. Styling entry: polo shirt, club, visor, member venue, and over-easy gait. Motif: the golf club turns sport into class networking and inheritance training. Tension: the body is healthy and clean, but privilege environment is what reads. Visual evidence: caddie, glove, clubhouse green, watch, relaxed swing, and eyes as if owning the field already. Boundary: avoid athlete or travel advertising.'],
    ['plastic_surgery_socialite', '医美名媛', 'Cosmetic-Surgery Socialite', '第一识别是医美名媛。造型入口：精致皮肤、诊所光、墨镜、丝巾和被维护得过度稳定的脸。母题：她把身体管理、阶层竞争和镜头焦虑合成社交资本。张力：美要有效，但也要看见维护成本。视觉证据：无暇底妆、微肿痕迹、诊所文件袋、香水、低头自拍和不愿被侧光暴露的脸。边界：避免医疗羞辱或真实名媛影射。', 'First read: Cosmetic-Surgery Socialite. Styling entry: refined skin, clinic light, sunglasses, silk scarf, and a face maintained too steadily. Motif: body management, class competition, and camera anxiety become social capital. Tension: beauty must work while maintenance cost shows. Visual evidence: flawless base makeup, slight swelling trace, clinic envelope, perfume, downward selfie, and face avoiding revealing side light. Boundary: avoid medical shaming or real socialite reference.'],
    ['club_table_owner', '夜店卡座主人', 'Club-Table Owner', '第一识别是夜店卡座主人。造型入口：暗色衬衫、卡座沙发、酒水陈列、手表和把空间占为己有的坐姿。母题：夜店卡座把消费能力转成小型领地。张力：热闹里要有冷淡的支配感。视觉证据：冰桶、杯架、腕表、沙发中央位置、旁人向他倾斜的动线和不急着起身的身体。边界：避免真实品牌酒标或普通派对男。', 'First read: Club-Table Owner. Styling entry: dark shirt, booth sofa, bottle display, watch, and seated posture occupying space. Motif: the club table turns spending power into small territory. Tension: nightlife energy needs cold dominance. Visual evidence: ice bucket, glass rack, wristwatch, center sofa placement, others leaning toward him, and body not hurrying to stand. Boundary: avoid real alcohol brands or generic party man.'],
    ['study_abroad_returnee', '海归精英青年', 'Study-Abroad Returnee', '第一识别是海归精英青年。造型入口：干净大衣、行李箱、外语教材或简历、机场感和在两套文化礼仪间切换的表情。母题：海归身份把教育资本、家庭期待和文化错位叠在一起。张力：优越感和不适应必须同时存在。视觉证据：护照夹、简历包、海外大学周边、咖啡、拉杆箱和回到熟人社会时略微僵硬的笑。边界：避免旅游留学生或空泛精英。', 'First read: Study-Abroad Returnee. Styling entry: clean coat, suitcase, foreign-language book or resume, airport feeling, and expression switching between two cultural manners. Motif: returnee identity layers education capital, family expectation, and cultural mismatch. Tension: superiority and maladjustment must coexist. Visual evidence: passport case, resume folder, overseas university merch, coffee, rolling suitcase, and slightly stiff smile back in familiar society. Boundary: avoid tourist student or vague elite.'],
    ['luxury_pet_daughter', '奢宠女儿', 'Luxury-Pet Daughter', '第一识别是奢宠女儿。造型入口：小型宠物、定制宠物包、柔软套装、护理用品和把宠物当作身份延伸的姿态。母题：宠物被她用来展示照料、消费和被照料的位置。张力：可爱要带阶层成本。视觉证据：宠物项圈、定制包、梳毛刷、浅色针织、亮面指甲和低头整理宠物时被拍到的脸。边界：避免普通宠物主人或动物中心化。', 'First read: Luxury-Pet Daughter. Styling entry: small pet, custom pet bag, soft outfit, grooming goods, and posture treating the pet as identity extension. Motif: the pet displays care, consumption, and her own cared-for position. Tension: cuteness needs class cost. Visual evidence: pet collar, custom carrier, grooming brush, pale knitwear, glossy nails, and face photographed while arranging the pet. Boundary: avoid generic pet owner or animal-centered prompt.']
  ] },
  { group: 'E. 底层 / 流浪 / 边缘生活', groupEn: 'E. Underclass / Drifting / Marginal Life', rows: [
    ['underpass_sleeper', '桥洞睡眠者', 'Underpass Sleeper', '第一识别是桥洞睡眠者。造型入口：旧外套、纸板、塑料袋、桥洞阴影和把身体缩到不挡路的睡姿。母题：城市空间把他推到可见但不被照看的边缘。张力：不能浪漫化贫困，必须保留资源不足的现实重量。视觉证据：补丁衣物、压扁水瓶、旧毯子、灰尘鞋和随时能收走全部物品的包。边界：避免苦难猎奇或废土化。', 'First read: Underpass Sleeper. Styling entry: old coat, cardboard, plastic bags, underpass shadow, and sleep posture shrinking the body out of the way. Motif: urban space pushes him to an edge that is visible but uncared for. Tension: poverty cannot be romanticized; resource scarcity must weigh. Visual evidence: patched clothes, crushed bottle, old blanket, dusty shoes, and a bag that can hold everything quickly. Boundary: avoid suffering spectacle or wasteland treatment.'],
    ['bottle_collecting_grandpa', '捡瓶子老人', 'Bottle-Collecting Elder', '第一识别是捡瓶子老人。造型入口：编织袋、旧帽子、弯腰动作、塑料瓶声和在城市缝隙里寻找小额价值的手。母题：他的劳动把别人丢弃的东西重新变成生计。张力：尊严要和贫困同时存在。视觉证据：压扁瓶子、麻袋、旧手套、零钱袋、磨损鞋底和看向垃圾桶边缘的专注眼。边界：避免悲惨消费或慈祥老人滤镜。', 'First read: Bottle-Collecting Elder. Styling entry: woven sack, old cap, bending motion, plastic-bottle sound, and hands finding small value in urban gaps. Motif: discarded objects become livelihood again. Tension: dignity and poverty must coexist. Visual evidence: flattened bottles, sack, old gloves, coin pouch, worn soles, and focused eyes at bin edges. Boundary: avoid misery consumption or kindly-elder filter.'],
    ['night_market_vendor', '夜市摊主', 'Night-Market Vendor', '第一识别是夜市摊主。造型入口：围裙、推车灯、零钱盒、油烟和在喧闹中快速找零的手。母题：夜市摊主把低成本创业和体力劳动绑在一起。张力：烟火气不能变成浪漫，要有利润和疲劳压力。视觉证据：塑料凳、菜单牌、油点围裙、硬币、食材箱和一边吆喝一边观察客流的眼。边界：避免美食旅游广告。', 'First read: Night-Market Vendor. Styling entry: apron, cart light, cash box, cooking smoke, and hands making change quickly in noise. Motif: low-cost entrepreneurship and physical labor are tied together. Tension: street warmth cannot become romance; profit and fatigue pressure must show. Visual evidence: plastic stool, menu board, oil-spotted apron, coins, ingredient box, and eyes watching traffic while calling out. Boundary: avoid food-tourism advertising.'],
    ['temporary_worker_youth', '临时工青年', 'Temporary Worker Youth', '第一识别是临时工青年。造型入口：廉价手套、临时工牌、旧背包、工地或仓库边缘和不知道明天去哪的站姿。母题：临时劳动让身份保持可替换、可移动。张力：年轻感要被不稳定工作磨钝。视觉证据：一次性工牌、磨损手套、塑料水杯、皱衣服、等活儿的眼神和随时背起包离开的肩。边界：避免励志打工人广告。', 'First read: Temporary Worker Youth. Styling entry: cheap gloves, temporary badge, old backpack, construction or warehouse edge, and posture unsure where tomorrow goes. Motif: temporary labor keeps identity replaceable and mobile. Tension: youthfulness is dulled by unstable work. Visual evidence: disposable badge, worn gloves, plastic water cup, wrinkled clothes, eyes waiting for work, and shoulders ready to lift the bag. Boundary: avoid inspirational worker advertising.'],
    ['internet_cafe_sleeper', '网吧睡眠青年', 'Internet-Cafe Sleeper', '第一识别是网吧睡眠青年。造型入口：电竞椅、薄外套、屏幕蓝光、耳机和趴在键盘边的睡姿。母题：网吧成为临时住所、娱乐和逃避现实的混合空间。张力：不能只写颓废，要看见没有稳定房间的处境。视觉证据：网费小票、矿泉水瓶、皱外套、充电线、红眼和被屏幕光照亮的半睡脸。边界：避免游戏主播或赛博酷感。', 'First read: Internet-Cafe Sleeper. Styling entry: gaming chair, thin coat, screen blue light, headset, and sleeping posture beside keyboard. Motif: the internet cafe becomes a mixed space of temporary shelter, entertainment, and avoidance. Tension: not just decadence; lack of stable room must show. Visual evidence: internet-fee receipt, water bottle, wrinkled coat, charging cable, red eyes, and half-sleeping face lit by screen. Boundary: avoid game streamer or cyber coolness.'],
    ['street_barber', '街边理发师', 'Street Barber', '第一识别是街边理发师。造型入口：塑料椅、围布、剪刀、简易镜子和在路边维持手艺尊严的手。母题：街边理发把低成本服务做成可见的地方技能。张力：简陋不能等于潦草，手艺要清楚。视觉证据：剃刀、喷壶、旧镜子、围布夹、零钱盒和专注修齐鬓角的眼。边界：避免怀旧摆拍或滑稽化。', 'First read: Street Barber. Styling entry: plastic chair, barber cape, scissors, simple mirror, and hands keeping craft dignity roadside. Motif: low-cost service becomes visible local skill. Tension: modest setup must not equal carelessness; craft should read clearly. Visual evidence: razor, spray bottle, old mirror, cape clip, cash box, and eyes focused on trimming sideburns. Boundary: avoid nostalgia staging or comic treatment.'],
    ['cheap_motel_girl', '廉价旅馆女孩', 'Cheap-Motel Girl', '第一识别是廉价旅馆女孩。造型入口：旧钥匙牌、廉价外套、塑料拖鞋、昏黄灯和临时停靠的疲惫身体。母题：廉价旅馆让她处于既有地址又无归属的状态。张力：暧昧不能露骨，要落在临时性和防备感。视觉证据：钥匙牌、薄被、行李袋、磨损妆容、门锁链和坐在床沿不脱外套的姿态。边界：避免性化、受害奇观或恐怖旅馆套路。', 'First read: Cheap-Motel Girl. Styling entry: old key tag, cheap coat, plastic slippers, yellow lamp, and tired body temporarily stopped. Motif: the cheap motel gives an address without belonging. Tension: ambiguity must not be explicit; it should land in temporariness and guardedness. Visual evidence: key tag, thin blanket, travel bag, worn makeup, door chain, and sitting on bed edge without removing coat. Boundary: avoid sexualization, victim spectacle, or horror-motel trope.'],
    ['migrant_construction_worker', '进城务工建筑工', 'Migrant Construction Worker', '第一识别是进城务工建筑工。造型入口：安全帽、灰尘衣服、劳保手套、编织袋和把城市建设成别人家园的身体。母题：他在城市里劳动，却未必拥有城市生活。张力：力量要和离乡处境绑定。视觉证据：水泥灰、反光背心、工牌、饭盒、旧手机、粗糙手掌和下班后仍背着工具的肩。边界：避免英雄化工人海报或贫困猎奇。', 'First read: Migrant Construction Worker. Styling entry: hard hat, dusty clothes, work gloves, woven bag, and body building a city as other peoples home. Motif: he works in the city without necessarily owning city life. Tension: strength must bind to displacement. Visual evidence: cement dust, reflective vest, badge, lunch box, old phone, rough palms, and shoulders still carrying tools after work. Boundary: avoid heroic worker poster or poverty spectacle.'],
    ['pawnshop_regular', '当铺常客', 'Pawnshop Regular', '第一识别是当铺常客。造型入口：旧首饰盒、票据、磨损外套、犹豫手势和把记忆换成现金的沉默。母题：当铺把个人历史折算成短期周转。张力：不是贪婪，而是被迫切割物件关系。视觉证据：当票、旧戒指、手表盒、低头签字、袖口磨损和不愿多看柜台的眼。边界：避免犯罪片或古董收藏家。', 'First read: Pawnshop Regular. Styling entry: old jewelry box, ticket, worn coat, hesitant hands, and silence trading memory for cash. Motif: pawnshop converts personal history into short-term liquidity. Tension: not greed, but forced cutting of object relation. Visual evidence: pawn ticket, old ring, watch box, lowered signing, worn cuffs, and eyes avoiding the counter. Boundary: avoid crime film or antique collector.'],
    ['bus_station_drifter', '汽车站漂泊者', 'Bus-Station Drifter', '第一识别是汽车站漂泊者。造型入口：大包、车票、候车椅、皱外套和在目的地之间悬空的眼神。母题：车站让身份暂时失去地点，只剩移动和等待。张力：漂泊不能浪漫，要有疲惫、预算和不确定。视觉证据：编织袋、纸质车票、塑料水瓶、旧鞋、候车灯和睡不踏实的姿态。边界：避免公路旅行美学。', 'First read: Bus-Station Drifter. Styling entry: large bag, ticket, waiting chair, wrinkled coat, and eyes suspended between destinations. Motif: the station removes place from identity, leaving only movement and waiting. Tension: drifting cannot be romantic; fatigue, budget, and uncertainty must show. Visual evidence: woven bag, paper ticket, plastic water bottle, old shoes, waiting-room light, and posture unable to sleep deeply. Boundary: avoid road-trip aesthetic.']
  ] },
  { group: 'F. 夜班 / 城市背面', groupEn: 'F. Night Shift / City Backside', rows: [
    ['night_shift_security_guard', '夜班保安', 'Night-Shift Security Guard', '第一识别是夜班保安。造型入口：深色制服、对讲机、手电、监控屏和在空楼里维持清醒的站姿。母题：他守着别人离开后的城市秩序。张力：权威很小，但孤独和责任很具体。视觉证据：保安帽、巡逻本、门禁卡、保温杯、荧光灯和听见一点声响就抬头的眼。边界：避免警察化或夜景酷感。', 'First read: Night-Shift Security Guard. Styling entry: dark uniform, radio, flashlight, CCTV screen, and posture staying awake in an empty building. Motif: he guards urban order after others leave. Tension: authority is small but loneliness and duty are concrete. Visual evidence: security cap, patrol log, access card, thermos, fluorescent light, and eyes lifting at tiny sounds. Boundary: avoid police treatment or night-city coolness.'],
    ['twenty_four_hour_nurse_aide', '24小时护工', '24-Hour Nurse Aide', '第一识别是24小时护工。造型入口：护理服、药单、水杯、折叠床和随时被叫醒的身体。母题：护工把休息时间也交给照护流程。张力：温柔要带长期疲惫和雇佣关系。视觉证据：药盒、毛巾、床边椅、手腕压痕、睡皱衣服和听到病床动静时立刻清醒的眼。边界：避免护士替代或家庭温情广告。', 'First read: 24-Hour Nurse Aide. Styling entry: care uniform, medicine list, water cup, folding bed, and body ready to be woken anytime. Motif: even rest time is handed to care workflow. Tension: tenderness must carry long fatigue and employment relation. Visual evidence: pill box, towel, bedside chair, wrist marks, sleep-wrinkled clothes, and eyes waking instantly at bed movement. Boundary: avoid nurse replacement or family-warmth advertising.'],
    ['karaoke_front_desk_girl', 'KTV前台女孩', 'Karaoke Front-Desk Girl', '第一识别是KTV前台女孩。造型入口：亮面制服、前台电脑、房卡、夜间妆容和在醉客面前维持礼貌的笑。母题：她在消费娱乐和服务规训之间站夜班。张力：甜美要带防备和职业麻木。视觉证据：房间钥匙牌、点歌屏光、收银抽屉、耳麦、亮色口红和随时呼叫保安的手。边界：避免夜店女郎或普通收银员。', 'First read: Karaoke Front-Desk Girl. Styling entry: glossy uniform, front-desk computer, room card, night makeup, and smile kept polite before drunk customers. Motif: she stands night shift between entertainment consumption and service discipline. Tension: sweetness needs guarded professional numbness. Visual evidence: room key tags, karaoke-screen glow, cash drawer, headset, bright lipstick, and hand ready to call security. Boundary: avoid club girl or generic cashier.'],
    ['late_shift_taxi_driver', '夜班出租车司机', 'Late-Shift Taxi Driver', '第一识别是夜班出租车司机。造型入口：方向盘、计价器、保温杯、反光后视镜和被夜路磨出的警觉眼。母题：他把城市的深夜移动转成连续劳动。张力：熟练和疲惫必须同时存在。视觉证据：计价器光、座套、挂件、旧外套、手搭方向盘和通过后视镜判断乘客的眼。边界：避免赛车手或公路浪漫。', 'First read: Late-Shift Taxi Driver. Styling entry: steering wheel, meter, thermos, rearview reflection, and alert eyes worn by night roads. Motif: he turns the citys late-night movement into continuous labor. Tension: skill and fatigue must coexist. Visual evidence: meter glow, seat cover, hanging charm, old coat, hand on wheel, and eyes judging passengers through mirror. Boundary: avoid racer or road romance.'],
    ['warehouse_sorter', '凌晨仓库分拣员', 'Dawn Warehouse Sorter', '第一识别是凌晨仓库分拣员。造型入口：反光背心、手套、传送带、条码枪和被包裹节奏压住的身体。母题：他在别人睡觉时维护电商速度。张力：动作要快，但人不能变成机器。视觉证据：胶带、纸箱、条码屏、护腰、汗湿领口和盯住分拣口的空眼。边界：避免科幻机器人化或物流广告。', 'First read: Dawn Warehouse Sorter. Styling entry: reflective vest, gloves, conveyor belt, barcode scanner, and body pressed by parcel rhythm. Motif: e-commerce speed is maintained while others sleep. Tension: movement must be fast, but the person cannot become a machine. Visual evidence: tape, boxes, barcode screen, back brace, sweaty collar, and empty eyes fixed on sorting chute. Boundary: avoid sci-fi robotization or logistics advertising.'],
    ['internet_cafe_cashier', '网吧收银员', 'Internet-Cafe Cashier', '第一识别是网吧收银员。造型入口：收银台、耳机、会员卡、屏幕蓝光和对通宵客人已经麻木的脸。母题：他管理的是半娱乐半住所的夜间空间。张力：服务感很低，但观察力很强。视觉证据：充值单、烟灰痕、饮料柜、键盘声、椅背阴影和抬眼扫一圈的习惯。边界：避免游戏玩家或普通前台。', 'First read: Internet-Cafe Cashier. Styling entry: counter, headset, member card, screen blue light, and face numb to overnight customers. Motif: he manages a night space half entertainment and half shelter. Tension: service warmth is low while observational skill is high. Visual evidence: top-up receipt, ash marks, drink fridge, keyboard noise, chair-back shadows, and habit of scanning the room. Boundary: avoid gamer or generic receptionist.'],
    ['night_bus_driver', '夜班公交司机', 'Night-Bus Driver', '第一识别是夜班公交司机。造型入口：公交制服、方向盘、车内空座、线路牌和在凌晨仍按站停靠的眼神。母题：他把稀少乘客和城市末班秩序连起来。张力：孤独路线里必须有公共责任。视觉证据：投币箱、车灯、路线表、驾驶手套、保温杯和看后视镜确认无人遗漏的脸。边界：避免普通司机或公路电影。', 'First read: Night-Bus Driver. Styling entry: bus uniform, steering wheel, empty seats, route sign, and eyes still stopping at each station before dawn. Motif: he connects sparse passengers to the citys last public order. Tension: a lonely route still carries public duty. Visual evidence: fare box, bus lights, timetable, driving gloves, thermos, and face checking mirror so no one is missed. Boundary: avoid generic driver or road movie.'],
    ['afterhours_cleaner', '下班后清洁工', 'After-Hours Cleaner', '第一识别是下班后清洁工。造型入口：清洁车、橡胶手套、空办公室、拖把和在别人离开后恢复秩序的身体。母题：她在工作场所的背面完成不可见维护。张力：劳动必须可见，但不要苦情化。视觉证据：拖把水痕、垃圾袋、手套、围裙、办公室冷灯和经过别人空工位时不看的眼。边界：避免普通保洁广告或悲情符号。', 'First read: After-Hours Cleaner. Styling entry: cleaning cart, rubber gloves, empty office, mop, and body restoring order after others leave. Motif: invisible maintenance happens on the backside of the workplace. Tension: labor must be visible without melodrama. Visual evidence: mop water marks, trash bags, gloves, apron, cold office light, and eyes not looking at others empty desks. Boundary: avoid cleaning-service ad or tragic symbol.'],
    ['twenty_four_store_clerk', '24小时店员', '24-Hour Store Clerk', '第一识别是24小时店员。造型入口：便利店制服、货架、收银机、补货箱和把困意压进标准问候的脸。母题：24小时店员把城市不眠转成低薪服务流程。张力：礼貌必须带机械重复。视觉证据：扫码枪、价签、纸箱、夜班灯、保温柜和眼神短暂失焦后又恢复微笑。边界：避免普通甜美店员。', 'First read: 24-Hour Store Clerk. Styling entry: convenience-store uniform, shelves, cash register, restock box, and face pressing sleepiness into standard greeting. Motif: the sleepless city becomes low-wage service workflow. Tension: politeness must carry mechanical repetition. Visual evidence: scanner, price tags, boxes, night-shift light, hot-food cabinet, and eyes briefly losing focus before smiling again. Boundary: avoid generic sweet clerk.'],
    ['security_camera_operator', '监控室值班员', 'Security-Camera Operator', '第一识别是监控室值班员。造型入口：多屏监控、旧外套、泡茶杯、记录本和长时间看别人生活的疲惫眼。母题：他通过屏幕维持秩序，却也被屏幕困住。张力：观察权力很小，但持续而阴冷。视觉证据：CCTV墙、时间戳、对讲机、值班表、暗室蓝光和在无聊中突然警觉的脸。边界：避免黑客或赛博监控奇观。', 'First read: Security-Camera Operator. Styling entry: multi-screen CCTV, old coat, tea cup, logbook, and tired eyes watching other peoples lives for hours. Motif: he maintains order through screens while being trapped by them. Tension: observation power is small but continuous and cold. Visual evidence: CCTV wall, timestamp, radio, shift sheet, dark-room blue light, and face suddenly alert inside boredom. Boundary: avoid hacker or cyber-surveillance spectacle.']
  ] },
  { group: 'G. 移民 / 漂泊 / 跨城身份', groupEn: 'G. Migrant / Drifting / Cross-City Identity', rows: [
    ['immigrant_restaurant_worker', '移民餐馆工', 'Immigrant Restaurant Worker', '第一识别是移民餐馆工。造型入口：围裙、后厨蒸汽、语言纸条、现金小费和在异乡餐馆里快速移动的身体。母题：他用餐馆劳动维持跨国生活和汇款责任。张力：文化身份不能变成异域装饰，要落在工作流程。视觉证据：油点围裙、菜单、电话卡、旧运动鞋、手腕烫痕和听懂半句外语的警觉眼。边界：避免民族奇观或美食旅游。', 'First read: Immigrant Restaurant Worker. Styling entry: apron, kitchen steam, language notes, cash tips, and body moving quickly inside a foreign restaurant. Motif: restaurant labor maintains transnational life and remittance duty. Tension: cultural identity cannot become exotic decoration; it must land in workflow. Visual evidence: oil-spotted apron, menu, calling card, old sneakers, wrist burn marks, and alert eyes catching half a foreign sentence. Boundary: avoid ethnic spectacle or food tourism.'],
    ['language_school_student', '语言学校学生', 'Language-School Student', '第一识别是语言学校学生。造型入口：教材、帆布包、签证文件、便利店午餐和在陌生城市练习发音的嘴。母题：语言学习是进入新制度前的等待状态。张力：学生感要带成年人的经济压力。视觉证据：单词卡、护照复印件、便当盒、旧耳机、纠正发音时紧张的手和坐在教室边缘的身体。边界：避免普通校园青春或旅游学生。', 'First read: Language-School Student. Styling entry: textbook, tote bag, visa papers, convenience-store lunch, and mouth practicing pronunciation in a strange city. Motif: language study is waiting before entering a new system. Tension: student feeling must carry adult economic pressure. Visual evidence: vocabulary cards, passport copies, lunch box, old earbuds, nervous hands during correction, and body sitting at the classroom edge. Boundary: avoid generic campus youth or tourist student.'],
    ['border_town_youth', '边境小城青年', 'Border-Town Youth', '第一识别是边境小城青年。造型入口：混合语言招牌、轻便夹克、摩托钥匙、通关小票和习惯跨线生活的眼神。母题：边境让身份在两套秩序之间来回折叠。张力：地方感要具体，不是异域风情。视觉证据：小城街灯、外币零钱、摩托头盔、边检远景、廉价背包和能同时理解两边规则的表情。边界：避免边境犯罪片或旅行明信片。', 'First read: Border-Town Youth. Styling entry: mixed-language signs, light jacket, motorbike key, crossing receipt, and eyes used to living across lines. Motif: the border folds identity between two orders. Tension: local specificity matters more than exotic flavor. Visual evidence: small-town streetlights, foreign coins, motorbike helmet, distant checkpoint, cheap backpack, and expression understanding both rules. Boundary: avoid border-crime film or travel postcard.'],
    ['remittance_sending_mother', '汇款母亲', 'Remittance-Sending Mother', '第一识别是汇款母亲。造型入口：汇款单、工作围裙、旧手机、紧握钱包和把亲情压进数字金额的疲惫。母题：她的照护通过距离、劳动和转账完成。张力：母职要有跨地理的重量。视觉证据：汇款收据、零钱包、电话卡、工作服、手上裂纹和确认金额时屏住呼吸的脸。边界：避免温情广告或苦难消费。', 'First read: Remittance-Sending Mother. Styling entry: remittance slip, work apron, old phone, clenched wallet, and fatigue compressing kinship into numbers. Motif: care is performed through distance, labor, and transfer. Tension: motherhood needs cross-geographic weight. Visual evidence: transfer receipt, coin purse, calling card, work clothes, cracked hands, and face holding breath while confirming amount. Boundary: avoid warm advertising or suffering consumption.'],
    ['suitcase_life_girl', '行李箱生活女孩', 'Suitcase-Life Girl', '第一识别是行李箱生活女孩。造型入口：拉杆箱、临时衣架、护照夹、折叠衣物和像随时准备离开的站姿。母题：她的生活被压缩成可搬运的容量。张力：自由感要带没有固定归属的不安。视觉证据：磨损箱角、洗漱包、门卡、折叠伞、半开的箱子和不把衣服完全挂进柜子的习惯。边界：避免旅行博主或浪漫背包客。', 'First read: Suitcase-Life Girl. Styling entry: rolling suitcase, temporary hanger, passport case, folded clothes, and posture ready to leave. Motif: life is compressed into movable capacity. Tension: freedom must carry the unease of no fixed belonging. Visual evidence: worn suitcase corners, toiletry bag, room card, folding umbrella, half-open case, and habit of never fully putting clothes in the closet. Boundary: avoid travel blogger or romantic backpacker.'],
    ['train_station_couple', '火车站情侣', 'Train-Station Couple', '第一识别是火车站情侣。造型入口：行李、纸质车票、拥抱前的停顿、候车灯和被分离时间压住的表情。母题：恋爱关系被交通时刻表和跨城生活切割。张力：亲密要短暂、拥挤、带现实阻力。视觉证据：拉杆箱、塑料袋、站台栏杆、手机倒计时、手指抓衣角和不愿先松开的肩。边界：避免偶像剧车站拥抱。', 'First read: Train-Station Couple. Styling entry: luggage, paper tickets, pause before embrace, waiting-room light, and faces pressed by separation time. Motif: romance is cut by timetables and cross-city life. Tension: intimacy is brief, crowded, and materially resisted. Visual evidence: rolling suitcase, plastic bags, platform rail, phone countdown, fingers gripping clothes, and shoulders unwilling to let go first. Boundary: avoid idol-drama station embrace.'],
    ['visa_waiting_student', '等待签证学生', 'Visa-Waiting Student', '第一识别是等待签证学生。造型入口：文件袋、护照复印件、白衬衫、打印材料和被审批悬置的焦虑脸。母题：他的未来暂时被一叠纸和一个窗口扣住。张力：年轻理想要和行政等待相撞。视觉证据：签证表、照片、录取信、文件夹夹痕、排队号码和反复检查材料的手。边界：避免旅游出国兴奋感。', 'First read: Visa-Waiting Student. Styling entry: document envelope, passport copies, white shirt, printed materials, and anxious face suspended by approval. Motif: the future is temporarily held by papers and a window. Tension: youthful ideals collide with administrative waiting. Visual evidence: visa form, ID photo, admission letter, folder marks, queue number, and hands repeatedly checking documents. Boundary: avoid tourist-abroad excitement.'],
    ['overseas_chinatown_barber', '海外唐人街理发师', 'Overseas Chinatown Barber', '第一识别是海外唐人街理发师。造型入口：旧理发椅、双语招牌、围布、剪刀和把乡音留在店里的身体。母题：理发店是移民社区的小型社交和生计节点。张力：地方归属要在异乡成立。视觉证据：双语价目表、旧照片、喷壶、围布、现金盒和一边剪发一边听客人讲近况的眼。边界：避免民族风情店铺摆拍。', 'First read: Overseas Chinatown Barber. Styling entry: old barber chair, bilingual sign, cape, scissors, and body keeping hometown accent in the shop. Motif: the barbershop is a small social and livelihood node of the immigrant community. Tension: local belonging must be built abroad. Visual evidence: bilingual price list, old photos, spray bottle, cape, cash box, and eyes listening to customers news while cutting hair. Boundary: avoid ethnic-flavor storefront staging.'],
    ['seasonal_farm_worker', '季节性农场工', 'Seasonal Farm Worker', '第一识别是季节性农场工。造型入口：遮阳帽、工作手套、泥土裤脚、临时宿舍钥匙和跟着季节移动的身体。母题：他的身份由作物周期和短期合同决定。张力：自然环境不能浪漫化，要有劳动强度和迁徙性。视觉证据：采摘篮、手套泥痕、晒痕、旧水壶、公交票和看向下一片田的疲惫。边界：避免田园牧歌或农场旅游。', 'First read: Seasonal Farm Worker. Styling entry: sun hat, work gloves, muddy trouser cuffs, temporary-dorm key, and body moving with seasons. Motif: identity is decided by crop cycles and short contracts. Tension: nature cannot be romanticized; labor intensity and migration must show. Visual evidence: picking basket, muddy gloves, sun marks, old water bottle, bus ticket, and fatigue looking toward the next field. Boundary: avoid pastoral idyll or farm tourism.'],
    ['city_returning_villager', '返乡青年', 'City-Returning Villager', '第一识别是返乡青年。造型入口：城市外套、乡镇路口、行李箱、尴尬礼貌和在熟悉地方重新变陌生的站姿。母题：返乡让城市经验和原生关系互相不适。张力：不是怀旧，而是身份位置重新谈判。视觉证据：拉杆箱、旧家门、亲戚视线、手机、干净鞋踩进泥地和不知道该用哪种语气说话的脸。边界：避免乡愁短片或成功返乡宣传。', 'First read: City-Returning Villager. Styling entry: city coat, township road crossing, suitcase, awkward politeness, and stance becoming strange again in a familiar place. Motif: return makes city experience and original relations uncomfortable with each other. Tension: not nostalgia, but renegotiation of identity position. Visual evidence: suitcase, old home gate, relatives gaze, phone, clean shoes stepping into mud, and face unsure which tone to use. Boundary: avoid nostalgia short film or success-return propaganda.']
  ] },
  { group: 'H. 小镇 / 县城 / 地方青年', groupEn: 'H. Small Town / County Youth', rows: [
    ['county_town_hairdresser', '县城理发店女孩', 'County-Town Hairdresser Girl', '第一识别是县城理发店女孩。造型入口：染发围布、亮片发夹、廉价镜面、吹风机和地方审美里的熟练手。母题：她在小城流行趋势和谋生手艺之间工作。张力：时髦要带低成本材料和熟人社会眼光。视觉证据：发色样本、喷雾瓶、围布夹、镜中霓虹字和帮客人整理刘海时专注的脸。边界：避免土味猎奇或高端沙龙。', 'First read: County-Town Hairdresser Girl. Styling entry: dye cape, shiny hair clip, cheap mirror, hair dryer, and skilled hands inside local taste. Motif: she works between small-town trends and livelihood craft. Tension: fashion needs low-cost materials and acquaintance-society gaze. Visual evidence: color samples, spray bottle, cape clip, neon letters in mirror, and focused face while fixing bangs. Boundary: avoid local-kitsch spectacle or luxury salon.'],
    ['motorbike_repair_boy', '摩托维修少年', 'Motorbike Repair Boy', '第一识别是摩托维修少年。造型入口：机油手、旧T恤、工具箱、摩托钥匙和蹲在店门口修车的身体。母题：维修手艺把地方青年和小镇移动方式绑在一起。张力：年轻感要被油污和熟练动作压实。视觉证据：扳手、机油布、轮胎、塑料凳、烟灰和抬头看熟客的眼。边界：保持成年人设，避免校园少年化或机车广告。', 'First read: Motorbike Repair Boy. Styling entry: oily hands, old T-shirt, toolbox, motorbike key, and crouched body fixing bikes at shopfront. Motif: repair craft ties local youth to small-town mobility. Tension: youthfulness is grounded by grease and skilled motion. Visual evidence: wrench, oil rag, tire, plastic stool, ash, and eyes lifting toward familiar customers. Boundary: keep adult persona; avoid schoolboy coding or motorcycle advertising.'],
    ['wedding_studio_assistant', '婚纱影楼助理', 'Wedding-Studio Assistant', '第一识别是婚纱影楼助理。造型入口：夹子、婚纱拖尾、影棚灯、补妆包和替别人制造幸福图像的忙碌。母题：她在小城婚恋展示工业里做隐形手。张力：浪漫场景背后要有体力和流程。视觉证据：别针、反光板、婚纱裙撑、粉扑、蹲下整理裙摆和不出现在成片里的身体。边界：避免新娘本人或高级时尚助理。', 'First read: Wedding-Studio Assistant. Styling entry: clips, gown train, studio light, makeup kit, and busy work making happiness images for others. Motif: she is the invisible hand inside small-town marriage-display industry. Tension: romance must reveal labor and workflow behind it. Visual evidence: pins, reflector, hoop skirt, powder puff, crouching to arrange hem, and body absent from final photo. Boundary: avoid bride herself or high-fashion assistant.'],
    ['mahjong_parlor_aunt', '麻将馆阿姨', 'Mahjong-Parlor Auntie', '第一识别是麻将馆阿姨。造型入口：卷发、针织外套、麻将桌、烟痕和熟人社交里的锋利眼神。母题：麻将馆是地方消息、金钱和关系较量的小型场。张力：生活气要带算计和疲惫。视觉证据：麻将牌、茶杯、塑料椅、烟灰缸、零钱和一边摸牌一边听人说话的脸。边界：避免滑稽大妈或怀旧滤镜。', 'First read: Mahjong-Parlor Auntie. Styling entry: curled hair, knit jacket, mahjong table, smoke traces, and sharp eyes inside acquaintance society. Motif: the parlor is a small field of local gossip, money, and relational contest. Tension: daily life needs calculation and fatigue. Visual evidence: tiles, tea cup, plastic chair, ashtray, coins, and face listening while touching a tile. Boundary: avoid comic auntie or nostalgia filter.'],
    ['county_internet_celeb', '县城网红', 'County-Town Influencer', '第一识别是县城网红。造型入口：夸张滤镜妆、地方街景、手机支架、闪亮外套和把县城空间拍成流量背景的姿态。母题：她用低成本视觉语言制造本地可见度。张力：自信要有用力感，不能变成高级时尚。视觉证据：补光灯、自拍杆、廉价亮片、店招、夸张眼妆和反复确认屏幕的眼。边界：避免嘲笑土味或城市网红模板。', 'First read: County-Town Influencer. Styling entry: exaggerated filter makeup, local street scene, phone tripod, shiny jacket, and posture turning county space into traffic background. Motif: low-cost visual language manufactures local visibility. Tension: confidence needs visible effort, not high-fashion polish. Visual evidence: fill light, selfie stick, cheap sequins, shop signs, strong eye makeup, and eyes checking screen repeatedly. Boundary: avoid mocking local taste or using city-influencer template.'],
    ['bus_terminal_ticket_girl', '客运站售票女孩', 'Bus-Terminal Ticket Girl', '第一识别是客运站售票女孩。造型入口：售票窗口、袖套、票夹、扩音喇叭和在嘈杂里保持机械耐心的脸。母题：她是地方流动路线的窗口接口。张力：小岗位要有控制去向的实际权力。视觉证据：纸票、零钱、玻璃窗口、线路牌、蓝色制服和重复回答问题后的空表情。边界：避免普通前台或旅行服务广告。', 'First read: Bus-Terminal Ticket Girl. Styling entry: ticket window, sleeve covers, ticket folder, loudspeaker, and mechanical patience in noise. Motif: she is the window interface of local mobility routes. Tension: small position holds real power over destinations. Visual evidence: paper tickets, coins, glass window, route board, blue uniform, and blank expression after repeated questions. Boundary: avoid generic receptionist or travel-service ad.'],
    ['township_cadre_youth', '乡镇干部青年', 'Township Cadre Youth', '第一识别是乡镇干部青年。造型入口：夹克、文件袋、乡镇会议室、宣传栏和在熟人社会里执行制度的尴尬。母题：他把上级文件翻译到地方人情里。张力：年轻行政身份要夹在理想和现实之间。视觉证据：红头文件、保温杯、工牌、会议笔记、旧办公楼和面对长辈时过度礼貌的站姿。边界：避免官僚反派或青春基层宣传片。', 'First read: Township Cadre Youth. Styling entry: jacket, document bag, township meeting room, bulletin board, and awkwardness executing systems inside acquaintance society. Motif: he translates upper-level documents into local human relations. Tension: young administrative identity is caught between ideal and reality. Visual evidence: official papers, thermos, badge, meeting notes, old office building, and overly polite posture before elders. Boundary: avoid bureaucratic villain or youth-service propaganda.'],
    ['school_uniform_repeater', '复读班学生', 'Exam-Repeater Student', '第一识别是复读班学生。造型入口：旧校服、厚试卷、黑眼圈、补习教室和比同龄人慢一步的沉默。母题：复读把青春暂停在考试制度里。张力：学生感要有成年边界和时间被卡住的压力。视觉证据：红笔错题、桌面书堆、校服袖口、倒计时牌和不愿看毕业照的眼。边界：保持成年人设，避免未成年化校园恋爱。', 'First read: Exam-Repeater Student. Styling entry: old uniform, thick test papers, dark circles, cram classroom, and silence one step behind peers. Motif: repeating exams pauses youth inside the testing system. Tension: student feeling needs adult boundary and stuck-time pressure. Visual evidence: red-pen mistakes, desk book pile, uniform cuffs, countdown board, and eyes avoiding graduation photos. Boundary: keep adult persona; avoid minor-coded campus romance.'],
    ['small_town_disco_boy', '小城迪厅男孩', 'Small-Town Disco Boy', '第一识别是小城迪厅男孩。造型入口：亮面衬衫、发胶、廉价香水、迪厅灯球和把地方夜晚当舞台的身体。母题：他用低成本夜场风格对抗小城重复生活。张力：张扬要带局促，不是都市夜店自信。视觉证据：皮带扣、闪光衬衫、烟雾灯、摩托钥匙、过量发胶和看向熟人群体的得意眼。边界：避免嘲笑土味或高级俱乐部感。', 'First read: Small-Town Disco Boy. Styling entry: shiny shirt, hair gel, cheap cologne, disco ball, and body treating local night as stage. Motif: low-cost nightlife style resists repeated small-town life. Tension: flamboyance carries constraint, not metropolitan club confidence. Visual evidence: belt buckle, reflective shirt, smoke light, motorbike key, too much hair gel, and proud eyes toward familiar crowd. Boundary: avoid mocking local taste or luxury club mood.'],
    ['photo_booth_sister', '照相馆姐姐', 'Photo-Studio Sister', '第一识别是照相馆姐姐。造型入口：证件照背景布、修图电脑、发夹、粉扑和把别人调整成合格图像的手。母题：她在地方影像制度里管理脸、姿势和证件标准。张力：温柔服务要带一点审美裁决权。视觉证据：蓝白背景布、补光灯、梳子、电脑修图界面、调整下巴的手和看惯各种脸的眼。边界：避免摄影师艺术家或婚纱影楼模特。', 'First read: Photo-Studio Sister. Styling entry: ID-photo backdrop, retouching computer, hair clip, powder puff, and hands adjusting people into acceptable images. Motif: she manages face, posture, and document standards inside local image systems. Tension: gentle service carries aesthetic judgment power. Visual evidence: blue-white backdrop, fill light, comb, retouching screen, hand adjusting chin, and eyes used to many faces. Boundary: avoid artist photographer or wedding-studio model.']
  ] },
  { group: 'I. 青年文化 / 校园边缘', groupEn: 'I. Youth Culture / Campus Edge', rows: [
    ['art_school_student', '美院学生', 'Art-School Student', '第一识别是美院学生。造型入口：沾颜料外套、帆布包、速写本、乱发和还没完成风格实验的身体。母题：他把自我形象当作课程之外的作品。张力：风格要有试错，不是成熟艺术家。视觉证据：颜料点、炭笔、二手外套、画筒、熬夜眼和看作品时比看人更专注的脸。边界：避免高级艺术家或网红文艺青年。', 'First read: Art-School Student. Styling entry: paint-stained jacket, tote bag, sketchbook, messy hair, and body still experimenting with style. Motif: self-image becomes an artwork outside class. Tension: style needs trial and error, not mature artist polish. Visual evidence: paint dots, charcoal, secondhand coat, drawing tube, sleepless eyes, and face more focused on work than people. Boundary: avoid established artist or influencer artsy youth.'],
    ['exam_cram_girl', '补习班女孩', 'Cram-School Girl', '第一识别是补习班女孩。造型入口：书包、厚讲义、校服外套、荧光笔和被考试时间表压住的肩。母题：她的青春被补习机构切成课程和分数。张力：学生感要保留成年安全边界，同时看见压力。视觉证据：错题本、便利店饭团、笔袋、倒计时表、疲惫眼和下课后仍坐着不动的身体。边界：避免未成年化或校园恋爱。', 'First read: Cram-School Girl. Styling entry: schoolbag, thick handouts, uniform jacket, highlighter, and shoulders pressed by exam schedule. Motif: youth is sliced into classes and scores by cram institutions. Tension: student feeling keeps adult-safe boundary while pressure shows. Visual evidence: mistake notebook, convenience-store rice ball, pencil case, countdown sheet, tired eyes, and body still sitting after class. Boundary: avoid minor-coded or campus romance.'],
    ['skatepark_highschooler', '滑板场高中生', 'Skatepark Highschooler', '第一识别是滑板场高中生。造型入口：宽松T恤、滑板、膝盖擦伤、书包和在学校制度外练习身体自由的姿态。母题：滑板场提供了另一套青年秩序。张力：叛逆要具体到磨损和动作，不是摆酷。视觉证据：板面划痕、旧球鞋、膝盖贴布、校卡、同伴围观和摔倒后装作没事的脸。边界：保持成年人设，避免未成年化。', 'First read: Skatepark Highschooler. Styling entry: loose T-shirt, skateboard, scraped knees, schoolbag, and posture practicing body freedom outside school order. Motif: the skatepark offers another youth order. Tension: rebellion must land in wear and movement, not cool posing. Visual evidence: scratched deck, old sneakers, knee bandage, student card, peers watching, and face pretending not to hurt after falling. Boundary: keep adult persona; avoid minor coding.'],
    ['dormitory_band_boy', '宿舍乐队男孩', 'Dormitory Band Boy', '第一识别是宿舍乐队男孩。造型入口：乐器包、宿舍拖鞋、旧T恤、排练海报和把狭小房间当舞台的身体。母题：他用廉价设备把青春冲动组织成声音。张力：音乐感要有宿舍限制和未完成感。视觉证据：吉他包、贴纸、床架、耳机、啤酒罐边缘和听见自己跑调仍兴奋的脸。边界：避免成熟摇滚明星。', 'First read: Dormitory Band Boy. Styling entry: instrument bag, dorm slippers, old T-shirt, rehearsal poster, and body treating a cramped room as stage. Motif: cheap gear organizes youthful impulse into sound. Tension: musicality needs dorm limits and unfinished feeling. Visual evidence: guitar bag, stickers, bunk frame, headphones, beer-can edge, and excited face hearing himself go off key. Boundary: avoid mature rock star.'],
    ['library_sleeping_student', '图书馆睡觉学生', 'Library-Sleeping Student', '第一识别是图书馆睡觉学生。造型入口：摊开的书、伏在桌上的手臂、耳机、台灯和被学习制度耗尽的睡姿。母题：睡眠不是懒散，而是压力在公共学习空间里的泄露。张力：安静画面里要有考试和自我要求。视觉证据：笔记、荧光笔、咖啡杯、压红脸颊、校卡和醒来一瞬间的迷茫眼。边界：避免可爱睡颜摆拍。', 'First read: Library-Sleeping Student. Styling entry: open books, arms folded on desk, earbuds, desk lamp, and sleeping posture exhausted by study systems. Motif: sleep is not laziness but pressure leaking inside public study space. Tension: quiet image carries exams and self-demand. Visual evidence: notes, highlighter, coffee cup, red cheek, student card, and confused eyes at the instant of waking. Boundary: avoid cute sleeping-face staging.'],
    ['campus_radio_host', '校园广播主持人', 'Campus Radio Host', '第一识别是校园广播主持人。造型入口：耳机、话筒、校广播室、稿纸和在校园里拥有短暂声音权力的表情。母题：广播让普通学生获得一种看不见的公共身份。张力：自信要带青涩和设备感。视觉证据：麦克风、防喷罩、校牌、旧调音台、念稿手和播完后立刻害羞的脸。边界：避免专业电台主播。', 'First read: Campus Radio Host. Styling entry: headphones, microphone, campus broadcast room, script, and expression holding brief voice power on campus. Motif: radio gives an ordinary student an invisible public identity. Tension: confidence needs greenness and equipment texture. Visual evidence: microphone, pop filter, school sign, old mixer, script hand, and shy face right after broadcasting. Boundary: avoid professional radio host.'],
    ['graduation_photo_girl', '毕业照女孩', 'Graduation-Photo Girl', '第一识别是毕业照女孩。造型入口：学位服、花束、毕业照道具、整理好的头发和在离开前突然不知道如何摆姿势的脸。母题：毕业照把成长、告别和社交证明压成一张图。张力：快乐要带未确定未来的空隙。视觉证据：学位帽、花束、同学边缘、证书袋、整理裙摆的手和笑到一半的眼。边界：避免校园恋爱海报或未成年化。', 'First read: Graduation-Photo Girl. Styling entry: gown, bouquet, graduation props, arranged hair, and face suddenly unsure how to pose before leaving. Motif: graduation photo compresses growth, farewell, and social proof into one image. Tension: happiness needs the gap of uncertain future. Visual evidence: cap, bouquet, classmates at edge, diploma folder, hand arranging hem, and eyes halfway through a smile. Boundary: avoid campus romance poster or minor coding.'],
    ['gap_year_backpacker', '间隔年背包客', 'Gap-Year Backpacker', '第一识别是间隔年背包客。造型入口：大背包、旧地图、晒痕、廉价手环和把迷茫包装成旅行计划的身体。母题：间隔年是逃离制度节奏后的临时自我实验。张力：自由要有预算和方向不明。视觉证据：磨损背包、车票、旅行手环、洗旧T恤、未整理头发和看路线图时犹豫的眼。边界：避免旅行博主或浪漫流浪。', 'First read: Gap-Year Backpacker. Styling entry: large backpack, old map, sun marks, cheap wristbands, and body packaging confusion as travel plan. Motif: gap year is temporary self-experiment after leaving institutional rhythm. Tension: freedom needs budget and directionlessness. Visual evidence: worn backpack, tickets, travel bands, washed-out T-shirt, unarranged hair, and hesitant eyes over a route map. Boundary: avoid travel blogger or romantic drifting.'],
    ['student_union_host', '学生会主持人', 'Student-Union Host', '第一识别是学生会主持人。造型入口：正装、胸牌、活动流程表、话筒和努力显得成熟的微笑。母题：他在校园里提前练习制度化的公共形象。张力：成熟感要有用力过度和青涩。视觉证据：主持稿、领带、胸牌、舞台幕布、手心出汗和在老师面前保持标准姿态的肩。边界：避免职业主持人或学生干部讽刺脸谱。', 'First read: Student-Union Host. Styling entry: formalwear, badge, event schedule, microphone, and smile trying to look mature. Motif: public institutional image is rehearsed early on campus. Tension: maturity should feel overdone and still green. Visual evidence: hosting script, tie, badge, stage curtain, sweaty palm, and shoulders keeping standard posture before teachers. Boundary: avoid professional host or caricature student officer.'],
    ['campus_secondhand_seller', '校园二手摊主', 'Campus Secondhand Seller', '第一识别是校园二手摊主。造型入口：地摊布、二手书、旧衣物、手写价签和把校园生活转成小额交易的身体。母题：她在青年试错和低成本经济之间整理物品。张力：轻松市集感要带生活拮据和毕业清仓。视觉证据：折叠桌、纸箱、价签、旧教材、帆布袋和一边讲价一边留恋物件的眼。边界：避免文创市集广告。', 'First read: Campus Secondhand Seller. Styling entry: ground cloth, secondhand books, old clothes, handwritten price tags, and body turning campus life into small transactions. Motif: she organizes objects between youthful trial and low-cost economy. Tension: easy market feeling needs financial tightness and graduation clearance. Visual evidence: folding table, cardboard box, price tags, old textbooks, tote bag, and eyes bargaining while still attached to objects. Boundary: avoid creative-market advertising.']
  ] },
  { group: 'J. 老年 / 退休 / 社区日常', groupEn: 'J. Elderly / Retirement / Community Daily Life', rows: [
    ['park_dancing_auntie', '广场舞阿姨', 'Park-Dancing Auntie', '第一识别是广场舞阿姨。造型入口：亮色运动外套、小音箱、舒适鞋、队形站位和把公共广场变成社交舞台的身体。母题：退休后的活力通过社区节奏和群体秩序展开。张力：热闹要有年龄身体的真实节制。视觉证据：音箱、丝巾、队形手势、保温杯、广场灯和与同伴互相看节拍的眼。边界：避免滑稽化或健身广告。', 'First read: Park-Dancing Auntie. Styling entry: bright sport jacket, portable speaker, comfortable shoes, formation placement, and body turning public square into social stage. Motif: post-retirement vitality unfolds through community rhythm and group order. Tension: liveliness needs real restraint of an aging body. Visual evidence: speaker, scarf, formation hands, thermos, plaza lights, and eyes checking rhythm with peers. Boundary: avoid comic treatment or fitness ad.'],
    ['retired_factory_master', '退休工厂师傅', 'Retired Factory Master', '第一识别是退休工厂师傅。造型入口：旧工装、工具箱、搪瓷杯、厚手掌和离开生产线后仍保持标准动作的身体。母题：工厂纪律在退休后继续留在手和站姿里。张力：老去不是软化，而是技能被时间沉淀。视觉证据：旧厂徽、扳手、手茧、工作帽、保养过的外套和看年轻人操作时忍不住纠正的眼。边界：避免怀旧工人海报。', 'First read: Retired Factory Master. Styling entry: old workwear, toolbox, enamel cup, thick palms, and body keeping standard motions after leaving the line. Motif: factory discipline remains in hands and stance after retirement. Tension: aging is not softening but skill sedimented by time. Visual evidence: old factory badge, wrench, calluses, work cap, maintained coat, and eyes correcting younger workers. Boundary: avoid nostalgic worker poster.', 1, industrialModern],
    ['community_gate_grandpa', '小区门口大爷', 'Community-Gate Grandpa', '第一识别是小区门口大爷。造型入口：折叠椅、保温杯、门禁岗亭、旧夹克和观察小区来往的安静权威。母题：他通过门口位置维持微小社区秩序。张力：普通老人要有地方性权力。视觉证据：棋盘、小区卡、报纸、钥匙串、坐姿和能认出每个住户的眼。边界：避免慈祥老人模板。', 'First read: Community-Gate Grandpa. Styling entry: folding chair, thermos, gate booth, old jacket, and quiet authority watching community traffic. Motif: a small community order is maintained through the gate position. Tension: an ordinary elder holds local power. Visual evidence: chessboard, community card, newspaper, keys, seated posture, and eyes recognizing every resident. Boundary: avoid kindly elder template.'],
    ['old_photo_widow', '旧照片寡妇', 'Old-Photo Widow', '第一识别是旧照片寡妇。造型入口：旧照片、深色开衫、相框、安静坐姿和把伴侣缺席整理成日常的手。母题：失去通过物件保养和空间习惯持续存在。张力：悲伤要克制，不做哭戏。视觉证据：相册、眼镜、整洁桌布、旧戒指痕、慢慢擦相框的手和看向照片旁边空处的眼。边界：避免苦情戏或鬼故事。', 'First read: Old-Photo Widow. Styling entry: old photo, dark cardigan, frame, quiet seated posture, and hands arranging a partners absence into daily life. Motif: loss persists through object care and spatial habit. Tension: grief must stay restrained, not a crying scene. Visual evidence: album, glasses, tidy tablecloth, old ring mark, hands wiping frame slowly, and eyes looking beside the photo. Boundary: avoid melodrama or ghost story.'],
    ['morning_market_grandma', '早市奶奶', 'Morning-Market Grandma', '第一识别是早市奶奶。造型入口：菜篮、旧棉衣、零钱袋、早晨冷气和熟练挑选食材的手。母题：早市是她维持家庭和社区节奏的日常路线。张力：年纪要和生活能力并存。视觉证据：蔬菜水珠、塑料袋、舒适鞋、围巾、讨价还价手势和认识摊主的笑。边界：避免怀旧旅游照。', 'First read: Morning-Market Grandma. Styling entry: market basket, old padded coat, coin pouch, morning chill, and hands skilled at choosing ingredients. Motif: the morning market is her daily route for maintaining family and community rhythm. Tension: age and life competence coexist. Visual evidence: vegetable droplets, plastic bags, comfortable shoes, scarf, bargaining hands, and smile familiar with vendors. Boundary: avoid nostalgia tourism photo.'],
    ['retired_teacher_elder', '退休教师老人', 'Retired Teacher Elder', '第一识别是退休教师老人。造型入口：眼镜、旧教案、整齐外套、粉笔痕记忆和仍习惯纠正措辞的表情。母题：教学职业在退休后变成身体里的秩序感。张力：温和要带标准和要求。视觉证据：钢笔、讲义、旧书、眼镜链、端正坐姿和听人说话时微微皱眉的眼。边界：避免普通文化老人。', 'First read: Retired Teacher Elder. Styling entry: glasses, old lesson plans, neat coat, chalk-memory traces, and expression still correcting wording. Motif: teaching profession becomes bodily order after retirement. Tension: gentleness carries standards and demands. Visual evidence: fountain pen, handouts, old books, glasses chain, upright posture, and slightly frowning eyes while listening. Boundary: avoid generic cultured elder.'],
    ['chess_table_uncle', '棋摊大叔', 'Chess-Table Uncle', '第一识别是棋摊大叔。造型入口：折叠棋盘、茶杯、旧夹克、围观人群和把时间花在一步棋上的身体。母题：棋摊是社区男性社交和智力较劲的小场域。张力：松散日常里有强烈胜负心。视觉证据：棋子、烟灰、塑料凳、保温杯、皱眉摸棋和不服输的嘴角。边界：避免古风棋士或单纯退休老人。', 'First read: Chess-Table Uncle. Styling entry: folding chessboard, tea cup, old jacket, watching crowd, and body spending time on one move. Motif: the chess table is a small field of community male sociality and contest. Tension: loose daily life hides strong competitiveness. Visual evidence: pieces, ash, plastic stool, thermos, frowning hand on piece, and mouth corner refusing defeat. Boundary: avoid classical chess master or generic retiree.'],
    ['senior_travel_group_leader', '老年旅行团团长', 'Senior Travel-Group Leader', '第一识别是老年旅行团团长。造型入口：旅行团帽、旗子、名单夹、舒适运动鞋和替一群人确认行程的责任。母题：退休旅行被她组织成小型集体秩序。张力：快乐出游要带管理疲劳。视觉证据：团旗、胸牌、路线表、防晒袖套、扩音器和一边笑一边清点人数的眼。边界：避免旅游广告或导游本人。', 'First read: Senior Travel-Group Leader. Styling entry: tour-group cap, flag, roster folder, comfortable sneakers, and duty confirming itinerary for many people. Motif: retirement travel is organized into small collective order. Tension: happy trip carries management fatigue. Visual evidence: tour flag, badge, route sheet, sun sleeves, megaphone, and eyes counting people while smiling. Boundary: avoid travel advertising or professional guide.'],
    ['hospital_corridor_elder', '医院走廊老人', 'Hospital-Corridor Elder', '第一识别是医院走廊老人。造型入口：病历袋、旧外套、长椅、医院冷光和在等待里变慢的身体。母题：医院走廊把老年生活压缩成排队、检查和不确定。张力：脆弱要具体，但不能猎奇。视觉证据：检查单、药袋、保温杯、舒适鞋、扶着椅背起身的手和听广播叫号的眼。边界：避免医疗苦难奇观。', 'First read: Hospital-Corridor Elder. Styling entry: medical record bag, old coat, bench, hospital cold light, and body slowed by waiting. Motif: hospital corridor compresses elderly life into queues, tests, and uncertainty. Tension: vulnerability must be concrete, not spectacle. Visual evidence: test sheet, medicine bag, thermos, comfortable shoes, hand on chair back while standing, and eyes listening for queue numbers. Boundary: avoid medical suffering spectacle.'],
    ['community_choir_grandmother', '社区合唱团奶奶', 'Community-Choir Grandmother', '第一识别是社区合唱团奶奶。造型入口：合唱谱、整齐丝巾、社区礼堂灯、微笑和仍认真找音准的嘴。母题：合唱团让退休生活拥有公共声音和集体仪式。张力：温柔要有练习纪律。视觉证据：谱夹、丝巾、老花镜、排练椅、手指按谱线和唱到高音时努力抬头的脸。边界：避免单纯慈祥奶奶或舞台歌手。', 'First read: Community-Choir Grandmother. Styling entry: choir sheet, neat scarf, community hall light, smile, and mouth still carefully finding pitch. Motif: choir gives retirement a public voice and collective ritual. Tension: tenderness carries practice discipline. Visual evidence: score folder, scarf, reading glasses, rehearsal chairs, finger on staff lines, and face lifting for a high note. Boundary: avoid merely kindly grandmother or stage singer.']
  ] }
];

export const CD_PERSONA_SOCIAL_LIFE = buildExplicitPersonaTerms({
  categoryId: 'social_life',
  categoryName: '现实生活 / 社会身份图像',
  categoryNameEn: 'Real Life / Social Identity Image',
  baseTags: ['social_life', 'daily_identity', 'class'],
  baseStyleTags: ['social_life', 'realist'],
  baseControls: ['costume', 'prop', 'wear_trace', 'pose', 'class_marker', 'daily_object'],
  defaultForbids: ['无解释超现实异形化', '随机战术装备化', '过度高定秀场化'],
  defaultEras: modern,
  defaultOntologyLevel: 1,
  visualEvidence: '日常服制、生活物件、阶层标记、疲惫痕迹、空间习惯和社会姿态',
  visualEvidenceEn: 'daily clothing, life objects, class markers, fatigue traces, spatial habits, and social posture',
  absorptionFocus: '生活阶层、日常物件、社会关系、消费习惯、居住处境或身体疲惫',
  absorptionFocusEn: 'life class, daily objects, social relations, consumption habits, housing condition, or bodily fatigue',
  appendVisualEvidence: false,
  realityTags: ['persona_evidence', 'physical', 'realistic', 'daily_life', 'social']
}, toSeeds(groups));
