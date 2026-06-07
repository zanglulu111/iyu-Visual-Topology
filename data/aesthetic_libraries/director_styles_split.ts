import { LibraryItemDef } from '../../types';

const DIRECTOR_CONTROLS = [
  '观看关系',
  '构图习惯',
  '镜头距离',
  '场面调度',
  '光影态度',
  '空间压力',
  '情绪节奏'
] as const;

const DIRECTOR_FORBIDS = [
  '改写主体身份',
  '新增剧情事件',
  '复制具体电影场景',
  '生成已知演员脸',
  '堆砌片名、台词、标志性道具或 IP 符号',
  '用导演名替代 C01-C10 内容'
] as const;

const directorItem = (
  id: string,
  name: string,
  nameEn: string,
  group: string,
  groupEn: string,
  def: string,
  defEn: string,
  reference: string,
  aliases: readonly string[] = []
): LibraryItemDef => ({
  id,
  name,
  nameEn,
  group,
  groupEn,
  def,
  defEn,
  core: `参考：${reference}。协议：只提取该导演的实拍语法，不复刻具体作品、演员脸、剧情桥段或标志性道具；若与主体或时空冲突，只折译为光线、构图、镜头距离、空间情绪和观看关系。`,
  coreEn: `Reference: ${reference}. Protocol: extract the director's live-action grammar only, not specific works, actor faces, plot beats, or signature props. If it conflicts with subject or time-space, translate it only into light, composition, lens distance, spatial mood, and viewing relation.`,
  reference,
  referenceEn: reference,
  aliases,
  ontologyLevel: 1,
  risk: 'medium',
  affects: ['lighting', 'composition', 'lens', 'space', 'mood'],
  controls: DIRECTOR_CONTROLS,
  forbids: DIRECTOR_FORBIDS,
  absorptionRule: '实拍导演风格只决定画面如何被组织、观看和调度；不得替代 C01-C10 的主体身份、时空场域、行动事件、服装结构、道具证据或输出格式。'
});

export const DIRECTOR_STYLE_ITEMS: LibraryItemDef[] = [
  directorItem(
    'aut_fincher',
    '芬奇 (David Fincher)',
    'David Fincher',
    '欧美作者',
    'Western Auteurs',
    '低照度、冷绿或黄灰色调、稳定构图、精确机位运动和压抑室内空间。只强化心理压力、秩序感和暗部控制，不主动新增犯罪剧情、调查线索或凶手身份。',
    'Low-key exposure, cold green or yellow-grey color, stable framing, precise camera movement, and oppressive interiors. Strengthens psychological pressure, order, and shadow control without adding crime plots, clues, or killer identities.',
    'David Fincher / Zodiac / The Social Network / Mindhunter',
    ['芬奇', '大卫·芬奇']
  ),
  directorItem(
    'aut_villeneuve',
    '维伦纽瓦 (Denis Villeneuve)',
    'Denis Villeneuve',
    '欧美作者',
    'Western Auteurs',
    '巨型空间压迫、极简人物尺度、低饱和空气、缓慢镜头和沉默环境重量。只强化尺度、肃穆感和空间压力，不主动新增飞船、沙漠帝国或科幻剧情。',
    'Massive spatial pressure, minimal human scale, low-saturation air, slow camera, and heavy environmental silence. Strengthens scale, solemnity, and spatial pressure without adding spaceships, desert empires, or sci-fi plots.',
    'Denis Villeneuve / Dune / Arrival / Blade Runner 2049',
    ['维伦纽瓦']
  ),
  directorItem(
    'aut_nolan',
    '诺兰 (Christopher Nolan)',
    'Christopher Nolan',
    '欧美作者',
    'Western Auteurs',
    '物理实感、清晰大画幅尺度、真实机械重量、强透视空间和紧迫但克制的构图。只强化现实物理与时间压力，不主动新增多线叙事、科学设定或倒计时桥段。',
    'Practical realism, large-format scale clarity, real mechanical weight, strong perspective, and urgent but restrained framing. Strengthens physical reality and time pressure without adding multi-strand narrative, science exposition, or countdown beats.',
    'Christopher Nolan / Dunkirk / Interstellar / Oppenheimer',
    ['诺兰']
  ),
  directorItem(
    'aut_kubrick',
    '库布里克 (Stanley Kubrick)',
    'Stanley Kubrick',
    '欧美作者',
    'Western Auteurs',
    '中心对称、冷静透视、几何空间、非人称凝视和仪式化静止。只强化秩序、疏离和空间控制，不主动新增太空、酒店走廊、军队或具体作品符号。',
    'Central symmetry, cold perspective, geometric space, impersonal gaze, and ritual stillness. Strengthens order, alienation, and spatial control without adding space settings, hotel corridors, military context, or specific work symbols.',
    'Stanley Kubrick / 2001: A Space Odyssey / The Shining / Barry Lyndon',
    ['库布里克']
  ),
  directorItem(
    'aut_scott',
    '雷德利·斯科特 (Ridley Scott)',
    'Ridley Scott',
    '欧美作者',
    'Western Auteurs',
    '烟雾光束、工业暗部、硬质金属、潮湿黑暗和神圣般的明暗对照。只强化材质压迫和空间神秘感，不主动新增异形、机器人、殖民企业或具体科幻设定。',
    'Smoky light shafts, industrial darkness, hard metal, wet shadows, and sacred chiaroscuro. Strengthens material pressure and spatial mystery without adding aliens, robots, corporate colonies, or specific sci-fi settings.',
    'Ridley Scott / Alien / Blade Runner / Legend',
    ['雷德利·斯科特']
  ),
  directorItem(
    'aut_spielberg',
    '斯皮尔伯格 (Steven Spielberg)',
    'Steven Spielberg',
    '欧美作者',
    'Western Auteurs',
    '温暖逆光、人物仰望、流畅调度、家庭尺度和奇观进入日常的惊叹感。只强化希望、好奇和空间发现，不主动新增儿童冒险、外星人或家庭剧情。',
    'Warm backlight, upward gaze, fluid blocking, family-scale staging, and wonder entering everyday life. Strengthens hope, curiosity, and spatial discovery without adding child adventure, aliens, or family plot.',
    'Steven Spielberg / E.T. / Close Encounters / Jurassic Park',
    ['斯皮尔伯格']
  ),
  directorItem(
    'aut_coppola',
    '科波拉 (Francis Ford Coppola)',
    'Francis Ford Coppola',
    '欧美作者',
    'Western Auteurs',
    '顶光、暖褐暗部、沉重室内、缓慢构图和歌剧式权力阴影。只强化权威、命运重量和悲剧感，不主动新增黑帮、家族谈判或血缘剧情。',
    'Top light, warm brown shadows, heavy interiors, slow framing, and operatic power-shadow. Strengthens authority, fatal weight, and tragedy without adding mafia, family negotiations, or bloodline plots.',
    'Francis Ford Coppola / The Godfather / Apocalypse Now',
    ['科波拉']
  ),
  directorItem(
    'aut_scorsese',
    '斯科塞斯 (Martin Scorsese)',
    'Martin Scorsese',
    '欧美作者',
    'Western Auteurs',
    '快速推进、街头能量、过曝灯光、罪感凝视和焦躁剪辑感。只强化人物欲望、都市速度和内在狂热，不主动新增黑帮职业、暴力桥段或旁白剧情。',
    'Fast push-ins, street energy, hot highlights, guilty gaze, and restless edit rhythm. Strengthens desire, urban velocity, and inner fever without adding gangster roles, violence beats, or voiceover plots.',
    'Martin Scorsese / Goodfellas / Taxi Driver / Raging Bull',
    ['斯科塞斯']
  ),
  directorItem(
    'aut_wes',
    '韦斯·安德森 (Wes Anderson)',
    'Wes Anderson',
    '欧美作者',
    'Western Auteurs',
    '正面构图、对称秩序、平移镜头、粉彩或复古色和冷幽默表情。只强化平面感、装饰秩序和荒诞距离，不主动新增旅馆、家族、制服或字幕卡。',
    'Frontal framing, symmetrical order, lateral movement, pastel or retro color, and deadpan expression. Strengthens flatness, decorative order, and absurd distance without adding hotels, families, uniforms, or title cards.',
    'Wes Anderson / The Grand Budapest Hotel / Moonrise Kingdom',
    ['韦斯·安德森']
  ),
  directorItem(
    'aut_hitchcock',
    '希区柯克 (Alfred Hitchcock)',
    'Alfred Hitchcock',
    '欧美作者',
    'Western Auteurs',
    '窥视视角、门窗遮挡、楼梯结构、精确视线方向和不安画外空间。只强化被观看、悬念和心理不确定性，不主动新增谋杀、偷窥剧情或经典场景复刻。',
    'Voyeuristic viewpoint, door/window occlusion, stair structures, precise eyelines, and anxious offscreen space. Strengthens being watched, suspense, and uncertainty without adding murder, voyeur plots, or classic scene replicas.',
    'Alfred Hitchcock / Rear Window / Vertigo / Psycho',
    ['希区柯克']
  ),
  directorItem(
    'aut_mann',
    '迈克尔·曼 (Michael Mann)',
    'Michael Mann',
    '欧美作者',
    'Western Auteurs',
    '钢蓝夜景、玻璃反光、远距离监视感、冷硬职业姿态和都市孤独。只强化专业感、夜色秩序和人物隔离，不主动新增枪战、追捕或犯罪身份。',
    'Steel-blue nights, glass reflections, surveillance distance, cool professional posture, and urban loneliness. Strengthens professionalism, nocturnal order, and isolation without adding gunfights, pursuits, or criminal roles.',
    'Michael Mann / Heat / Collateral / Miami Vice',
    ['迈克尔·曼']
  ),
  directorItem(
    'aut_bigelow',
    '毕格罗 (Kathryn Bigelow)',
    'Kathryn Bigelow',
    '欧美作者',
    'Western Auteurs',
    '粗粝手持、军事或行动现场压力、蓝灰色调、身体紧绷和危险临场感。只强化高压真实和动作紧迫，不主动新增战争任务、爆炸或战术剧情。',
    'Gritty handheld camera, field pressure, blue-grey tone, bodily tension, and danger immediacy. Strengthens high-pressure realism and urgent action without adding military missions, explosions, or tactical plots.',
    'Kathryn Bigelow / The Hurt Locker / Zero Dark Thirty',
    ['毕格罗']
  ),
  directorItem(
    'aut_greengrass',
    '格林格拉斯 (Paul Greengrass)',
    'Paul Greengrass',
    '欧美作者',
    'Western Auteurs',
    '肩扛晃动、快速重构焦点、近距离跟随和新闻现场般的生理临场感。只强化混乱中的方向和身体感，不主动新增谍战、追逐、新闻事件或字幕说明。',
    'Shoulder-camera shake, fast reframing, close following distance, and news-like bodily immediacy. Strengthens direction inside chaos and physical presence without adding spy plots, chases, news events, or subtitles.',
    'Paul Greengrass / The Bourne Ultimatum / United 93',
    ['格林格拉斯']
  ),
  directorItem(
    'aut_daniels',
    '丹尼尔组合 (The Daniels)',
    'The Daniels',
    '欧美作者',
    'Western Auteurs',
    '极繁视觉、快速情绪切换、荒诞身体动作、现实材料里的不现实节奏和波普能量。只强化视觉过载与荒诞动能，不主动新增多元宇宙、超能力或喜剧剧情。',
    'Maximal visuals, fast emotional shifts, absurd body movement, unreal rhythm inside real material, and pop energy. Strengthens visual overload and absurd motion without adding multiverse plots, superpowers, or comedy story.',
    'The Daniels / Everything Everywhere All at Once / Swiss Army Man',
    ['丹尼尔组合']
  ),

  directorItem(
    'aut_wkw',
    '王家卫 (Wong Kar-wai)',
    'Wong Kar-wai',
    '东方作者',
    'Eastern Auteurs',
    '潮湿都市、玻璃反射、遮挡构图、浅景深、慢门拖影、霓虹与暗部的色彩关系。只强化光线、反射、遮挡和孤独感，不主动新增香港街景、爱情剧情、演员脸或电影符号。',
    'Humid urban space, glass reflections, occluded framing, shallow depth of field, step-print smear, and neon-shadow color relations. Strengthens light, reflection, occlusion, and loneliness without adding Hong Kong streets, romance plots, actor faces, or film symbols.',
    'Wong Kar-wai / Christopher Doyle / In the Mood for Love / Chungking Express',
    ['王家卫', '杜可风']
  ),
  directorItem(
    'aut_kurosawa',
    '黑泽明 (Akira Kurosawa)',
    'Akira Kurosawa',
    '东方作者',
    'Eastern Auteurs',
    '长焦压缩、动态天气、群体几何、旗帜或尘土的运动层次和命运感。只强化自然力量、调度秩序和悲壮感，不主动新增武士、战争阵列或历史剧情。',
    'Telephoto compression, dynamic weather, group geometry, moving layers of flags or dust, and fatal gravity. Strengthens natural force, blocking order, and tragic scale without adding samurai, battle formations, or historical plots.',
    'Akira Kurosawa / Ran / Seven Samurai / Throne of Blood',
    ['黑泽明']
  ),
  directorItem(
    'aut_ozu',
    '小津安二郎 (Yasujirō Ozu)',
    'Yasujiro Ozu',
    '东方作者',
    'Eastern Auteurs',
    '低机位、静态构图、室内留白、生活器物和克制亲情距离。只强化日常秩序、沉默和物哀，不主动新增家庭剧情、榻榻米符号或日本时代设定。',
    'Low camera height, static framing, domestic negative space, everyday objects, and restrained emotional distance. Strengthens everyday order, silence, and mono no aware without adding family plots, tatami symbols, or Japanese period settings.',
    'Yasujiro Ozu / Tokyo Story / Late Spring',
    ['小津安二郎', '小津']
  ),
  directorItem(
    'aut_yang',
    '杨德昌 (Edward Yang)',
    'Edward Yang',
    '东方作者',
    'Eastern Auteurs',
    '固定远景、城市建筑、玻璃反射、人物被空间结构包围，情绪隐藏在理性构图里。只强化城市疏离和结构观察，不主动新增家庭故事、对白场景或台北符号。',
    'Fixed long shots, urban architecture, glass reflections, figures surrounded by spatial structures, and emotion hidden inside rational framing. Strengthens urban alienation and structural observation without adding family stories, dialogue scenes, or Taipei symbols.',
    'Edward Yang / Yi Yi / A Brighter Summer Day',
    ['杨德昌']
  ),
  directorItem(
    'aut_hou',
    '侯孝贤 (Hou Hsiao-hsien)',
    'Hou Hsiao-hsien',
    '东方作者',
    'Eastern Auteurs',
    '远距长镜头、自然光、历史尘埃、人物与空间保持距离，动作被时间缓慢吞没。只强化历史距离和自然秩序，不主动新增宫廷剧情、武侠动作或具体史实。',
    'Distant long takes, natural light, historical dust, distance between figure and space, and action slowly absorbed by time. Strengthens historical distance and natural order without adding court plots, wuxia action, or specific history.',
    'Hou Hsiao-hsien / Flowers of Shanghai / The Assassin',
    ['侯孝贤']
  ),
  directorItem(
    'aut_bong',
    '奉俊昊 (Bong Joon-ho)',
    'Bong Joon-ho',
    '东方作者',
    'Eastern Auteurs',
    '上下层空间对照、门槛与楼梯、湿润材质、精确构图中的滑稽不安。只强化阶级距离和空间讽刺，不主动新增豪宅、地下室、骗局或社会剧情。',
    'Upper/lower spatial contrast, thresholds and stairs, humid materials, and comic unease inside precise framing. Strengthens class distance and spatial irony without adding mansions, basements, scams, or social plots.',
    'Bong Joon-ho / Parasite / Memories of Murder',
    ['奉俊昊']
  ),
  directorItem(
    'aut_park',
    '朴赞郁 (Park Chan-wook)',
    'Park Chan-wook',
    '东方作者',
    'Eastern Auteurs',
    '饱和色彩、镜面与织物、精致室内、过度对称和危险的身体距离。只强化感官华丽与心理博弈，不主动新增复仇、情色剧情、贵族身份或时代设定。',
    'Saturated color, mirrors and textile, refined interiors, excessive symmetry, and dangerous bodily distance. Strengthens sensory opulence and psychological games without adding revenge, erotic plots, aristocratic identity, or period settings.',
    'Park Chan-wook / The Handmaiden / Oldboy / Decision to Leave',
    ['朴赞郁']
  ),
  directorItem(
    'aut_koreeda',
    '是枝裕和 (Hirokazu Kore-eda)',
    'Hirokazu Kore-eda',
    '东方作者',
    'Eastern Auteurs',
    '自然窗光、生活细节、温和距离、非戏剧化表情和日常物件。只强化亲密观察与生活痕迹，不主动新增家庭关系、儿童剧情或社会伦理冲突。',
    'Natural window light, lived-in detail, gentle distance, understated expression, and everyday objects. Strengthens intimate observation and life traces without adding family relations, child plots, or social-ethical conflicts.',
    'Hirokazu Kore-eda / Still Walking / Shoplifters',
    ['是枝裕和']
  ),
  directorItem(
    'aut_iwai',
    '岩井俊二 (Shunji Iwai)',
    'Shunji Iwai',
    '东方作者',
    'Eastern Auteurs',
    '过曝逆光、柔焦空气、浅色天空、细碎生活动作和感伤记忆感。只强化透明光、脆弱情绪和青春残像，不主动新增校园、初恋、信件或怀旧剧情。',
    'Overexposed backlight, soft-focus air, pale sky, small everyday actions, and melancholic memory. Strengthens translucent light, fragile emotion, and youth afterimage without adding school settings, first-love plots, letters, or nostalgia story.',
    'Shunji Iwai / Love Letter / All About Lily Chou-Chou',
    ['岩井俊二']
  ),
  directorItem(
    'aut_tsui_hark',
    '徐克 (Tsui Hark)',
    'Tsui Hark',
    '东方作者',
    'Eastern Auteurs',
    '动感武侠、风和布料、倾斜角度、强运动层次和妖异神话气。只强化动作调度与奇幻动势，不主动新增门派、武器、江湖剧情或神怪角色。',
    'Kinetic wuxia, wind and fabric, tilted angles, strong movement layers, and uncanny mythic energy. Strengthens action blocking and fantasy motion without adding sects, weapons, martial-world plots, or spirit characters.',
    'Tsui Hark / Green Snake / Once Upon a Time in China',
    ['徐克']
  ),
  directorItem(
    'aut_jia_zhangke',
    '贾樟柯 (Jia Zhangke)',
    'Jia Zhangke',
    '东方作者',
    'Eastern Auteurs',
    '低成本数码质感、现实地点、工业边缘、普通人距离和时代变化留下的尘土。只强化社会现实和现场痕迹，不主动新增纪录片采访、字幕或政治说明。',
    'Low-cost digital texture, real places, industrial edges, ordinary-person distance, and dust of social change. Strengthens social reality and location traces without adding documentary interviews, subtitles, or political explanations.',
    'Jia Zhangke / Still Life / Platform / Unknown Pleasures',
    ['贾樟柯']
  ),

  directorItem(
    'aut_tarkovsky',
    '塔可夫斯基 (Andrei Tarkovsky)',
    'Andrei Tarkovsky',
    '诗意先锋',
    'Poetic Avant-Garde',
    '水、雾、火光、破败房间、缓慢推进、长时间沉默和物质记忆感。只强化时间沉积与灵性物质，不主动新增梦境剧情、宗教符号或哲学旁白。',
    'Water, mist, firelight, decayed rooms, slow push-ins, long silence, and material memory. Strengthens temporal sediment and spiritual matter without adding dream plots, religious symbols, or philosophical voiceover.',
    'Andrei Tarkovsky / Stalker / Mirror / Nostalghia',
    ['塔可夫斯基']
  ),
  directorItem(
    'aut_bergman',
    '伯格曼 (Ingmar Bergman)',
    'Ingmar Bergman',
    '诗意先锋',
    'Poetic Avant-Garde',
    '极近面部、沉默房间、烛光或深红墙面、眼神停顿和心理剖面。只强化面部凝视与内在冲突，不主动新增宗教审判、婚姻剧情或精神疾病标签。',
    'Extreme facial closeness, silent rooms, candlelight or deep red walls, paused gaze, and psychological cross-section. Strengthens facial gaze and inner conflict without adding religious trials, marriage plots, or mental-diagnosis labels.',
    'Ingmar Bergman / Persona / Cries and Whispers',
    ['伯格曼']
  ),
  directorItem(
    'aut_bresson',
    '布列松 (Robert Bresson)',
    'Robert Bresson',
    '诗意先锋',
    'Poetic Avant-Garde',
    '手、门、衣物、脚步和空白墙面等局部动作成为情绪核心，画面克制近乎仪式。只强化停顿和物件重量，不主动新增苦难叙事或哲学说明。',
    'Hands, doors, clothing, footsteps, and blank walls become emotional cores; the image is restrained almost to ritual. Strengthens pauses and object weight without adding suffering narratives or philosophical explanation.',
    'Robert Bresson / Pickpocket / Au Hasard Balthazar',
    ['布列松']
  ),
  directorItem(
    'aut_malick',
    '马力克 (Terrence Malick)',
    'Terrence Malick',
    '诗意先锋',
    'Poetic Avant-Garde',
    '低角度阳光、风吹植物、手部触摸、自然逆光、漂移镜头和环境呼吸感。只强化自然流动和温柔神启，不主动新增乡村剧情、宗教旁白或家庭回忆。',
    'Low-angle sunlight, wind through plants, hand contact, natural backlight, drifting camera, and environmental breathing. Strengthens natural flow and gentle revelation without adding rural plots, religious voiceover, or family memories.',
    'Terrence Malick / The Tree of Life / Days of Heaven',
    ['马力克']
  ),
  directorItem(
    'aut_godard',
    '戈达尔 (Jean-Luc Godard)',
    'Jean-Luc Godard',
    '诗意先锋',
    'Poetic Avant-Garde',
    '跳切、原色块、文字感构图、街头即兴和影像论文式距离。只强化断裂、形式自觉和现代性，不主动新增政治口号、字幕卡或具体新浪潮桥段。',
    'Jump cuts, primary colors, typographic composition, street improvisation, and essay-film distance. Strengthens rupture, formal self-awareness, and modernity without adding political slogans, title cards, or specific New Wave scenes.',
    'Jean-Luc Godard / Breathless / Pierrot le Fou',
    ['戈达尔']
  ),
  directorItem(
    'aut_antonioni',
    '安东尼奥尼 (Michelangelo Antonioni)',
    'Michelangelo Antonioni',
    '诗意先锋',
    'Poetic Avant-Garde',
    '空旷现代空间、人物被建筑吞没、情绪悬置、长时间静止和疏离色彩。只强化现代空洞与关系断裂，不主动新增爱情危机、都市剧情或建筑说明。',
    'Empty modern spaces, figures absorbed by architecture, suspended emotion, long stillness, and alienated color. Strengthens modern emptiness and relational fracture without adding romance crisis, urban plot, or architectural explanation.',
    'Michelangelo Antonioni / L Avventura / Red Desert',
    ['安东尼奥尼']
  ),
  directorItem(
    'aut_parajanov',
    '帕拉杰诺夫 (Sergei Parajanov)',
    'Sergei Parajanov',
    '诗意先锋',
    'Poetic Avant-Garde',
    '正面静态构图、物件排列、民俗色块、织物和金属反光，人物像仪式图像一样被陈列。只强化图像仪式性，不主动新增宗教剧情、民族身份或神话故事。',
    'Frontal static composition, arranged objects, folk color blocks, textile and metal reflections, and subjects displayed like ritual images. Strengthens iconic rituality without adding religious plots, ethnic identity, or myth stories.',
    'Sergei Parajanov / The Color of Pomegranates',
    ['帕拉杰诺夫']
  ),
  directorItem(
    'aut_lanthimos',
    '兰斯莫斯 (Yorgos Lanthimos)',
    'Yorgos Lanthimos',
    '诗意先锋',
    'Poetic Avant-Garde',
    '冷白空间、僵硬姿态、反社交距离、对称构图和奇怪仪式感。只强化陌生化和身体规训，不主动新增怪诞剧情、动物符号或黑色幽默桥段。',
    'Cold white space, stiff posture, antisocial distance, symmetrical framing, and strange ritual feeling. Strengthens estrangement and bodily discipline without adding weird plots, animal symbols, or black-comedy beats.',
    'Yorgos Lanthimos / The Lobster / The Favourite / Poor Things',
    ['兰斯莫斯']
  ),
  directorItem(
    'aut_bunuel',
    '布努埃尔 (Luis Buñuel)',
    'Luis Bunuel',
    '诗意先锋',
    'Poetic Avant-Garde',
    '日常空间里的不合逻辑停顿、礼仪化姿态、冷静构图和轻微荒诞冲突。只强化欲望阻滞和超现实裂缝，不主动新增宴会、宗教挑衅或明确梦境剧情。',
    'Illogical pauses in ordinary spaces, ritualized posture, calm framing, and slight absurd conflict. Strengthens blocked desire and surreal cracks without adding banquets, religious provocation, or explicit dream plots.',
    'Luis Bunuel / The Discreet Charm of the Bourgeoisie / Belle de Jour',
    ['布努埃尔', 'Buñuel']
  ),

  directorItem(
    'cul_lynch',
    '林奇 (David Lynch)',
    'David Lynch',
    '邪典地下',
    'Cult / Underground',
    '潜意识泄漏、工业低频、红色或蓝色暗部、日常空间突然变得不可信。只强化怪异心理和现实裂缝，不主动新增红房间、怪物、梦境解释或具体邪典符号。',
    'Subconscious leakage, industrial hum, red or blue darkness, and ordinary spaces becoming unreliable. Strengthens uncanny psychology and cracks in reality without adding red rooms, monsters, dream explanations, or specific cult symbols.',
    'David Lynch / Mulholland Drive / Blue Velvet / Eraserhead',
    ['大卫·林奇', '林奇']
  ),
  directorItem(
    'cul_cronenberg',
    '柯南伯格 (David Cronenberg)',
    'David Cronenberg',
    '邪典地下',
    'Cult / Underground',
    '冷静医学感、肉体异化、器官化科技、黏湿材料和临床恐惧。只强化身体与技术的不安关系，不主动新增变异剧情、医疗事故或具体怪物结构。',
    'Cold medical feeling, bodily alienation, organ-like technology, wet materials, and clinical fear. Strengthens the uneasy relation between body and technology without adding mutation plots, medical accidents, or specific monster structures.',
    'David Cronenberg / Videodrome / The Fly / Crash',
    ['柯南伯格']
  ),
  directorItem(
    'cul_argento',
    '阿基多 (Dario Argento)',
    'Dario Argento',
    '邪典地下',
    'Cult / Underground',
    '高饱和红蓝绿、舞台化杀意、强音乐节奏、玻璃与刀锋般的色彩冲击。只强化艳丽恐惧和感官危险，不主动新增谋杀桥段、女巫设定或血腥事件。',
    'Highly saturated red, blue, and green; staged menace, strong musical rhythm, glassy and blade-like color shock. Strengthens lurid fear and sensory danger without adding murder beats, witch settings, or gore events.',
    'Dario Argento / Suspiria / Deep Red',
    ['阿基多']
  ),
  directorItem(
    'cul_noe',
    '加斯帕·诺 (Gaspar Noe)',
    'Gaspar Noe',
    '邪典地下',
    'Cult / Underground',
    '频闪、旋转镜头、霓虹暗部、强生理压迫和失控主观感。只强化眩晕、身体压力和感官极限，不主动新增药物、性暴力、夜店剧情或挑衅事件。',
    'Strobe, rotating camera, neon darkness, strong bodily pressure, and unstable subjectivity. Strengthens dizziness, physical stress, and sensory limit without adding drugs, sexual violence, club plots, or provocation events.',
    'Gaspar Noe / Enter the Void / Climax',
    ['加斯帕·诺']
  ),
  directorItem(
    'cul_jodorowsky',
    '佐杜洛夫斯基 (Alejandro Jodorowsky)',
    'Alejandro Jodorowsky',
    '邪典地下',
    'Cult / Underground',
    '炼金术式色彩、沙漠感、塔罗式正面图像、身体仪式和神圣亵渎气质。只强化仪式荒诞和符号密度，不主动新增宗教剧情、秘教组织或具体塔罗牌。',
    'Alchemical color, desert feeling, tarot-like frontal imagery, bodily ritual, and sacred-profane temperament. Strengthens ritual absurdity and symbolic density without adding religious plots, occult orders, or specific tarot cards.',
    'Alejandro Jodorowsky / The Holy Mountain / El Topo',
    ['佐杜洛夫斯基']
  ),
  directorItem(
    'cul_tsukamoto',
    '冢本晋也 (Shinya Tsukamoto)',
    'Shinya Tsukamoto',
    '邪典地下',
    'Cult / Underground',
    '黑白高反差、工业金属、肉体机械化、狂躁剪辑和低成本粗粝感。只强化身体异化和工业噪声，不主动新增机械器官、都市怪物或赛博剧情。',
    'High-contrast black and white, industrial metal, body mechanization, frantic editing, and rough low-budget texture. Strengthens bodily alienation and industrial noise without adding mechanical organs, urban monsters, or cyber plots.',
    'Shinya Tsukamoto / Tetsuo: The Iron Man',
    ['冢本晋也']
  ),

  directorItem(
    'com_bay',
    '迈克尔·贝 (Michael Bay)',
    'Michael Bay',
    '商业动感',
    'Commercial / Motion',
    '低角度环绕、夕阳高光、强反差、爆炸式构图和高度商业化动能。只强化力量感、速度和视觉冲击，不主动新增载具、军队、爆炸或广告口号。',
    'Low-angle orbit, sunset highlights, strong contrast, explosive composition, and commercial kinetic force. Strengthens power, speed, and visual impact without adding vehicles, military, explosions, or ad slogans.',
    'Michael Bay / Armageddon / Transformers',
    ['迈克尔·贝']
  ),
  directorItem(
    'com_tony_scott',
    '托尼·斯科特 (Tony Scott)',
    'Tony Scott',
    '商业动感',
    'Commercial / Motion',
    '焦躁剪辑、多机位覆盖、热色高光、颗粒和强烈运动模糊。只强化高能、危险和视觉躁动，不主动新增军事行动、广告感旁白或具体动作剧情。',
    'Restless editing, multi-angle coverage, hot highlights, grain, and strong motion blur. Strengthens high energy, danger, and visual agitation without adding military operations, ad-like voiceover, or specific action plots.',
    'Tony Scott / Man on Fire / Domino / Top Gun',
    ['托尼·斯科特']
  ),
  directorItem(
    'com_kosinski',
    '科辛斯基 (Joseph Kosinski)',
    'Joseph Kosinski',
    '商业动感',
    'Commercial / Motion',
    '洁净工业设计、低噪声画面、镜面空间、夕阳或冷白光和高级产品般的精确感。只强化现代技术表面，不主动新增品牌产品、载具广告或未来城市设定。',
    'Clean industrial design, low-noise image, mirror-like space, sunset or cool white light, and premium product precision. Strengthens modern technical surfaces without adding branded products, vehicle ads, or future-city lore.',
    'Joseph Kosinski / Oblivion / Tron: Legacy / Top Gun: Maverick',
    ['科辛斯基']
  ),
  directorItem(
    'com_george_miller',
    '乔治·米勒 (George Miller)',
    'George Miller',
    '商业动感',
    'Commercial / Motion',
    '中心构图、清晰速度方向、尘土冲击、原始能量和强节奏动作调度。只强化动能和冲击，不主动新增追车、荒漠帮派、爆炸或战斗剧情。',
    'Centered framing, clear speed direction, dust impact, primal energy, and strong action rhythm. Strengthens motion and impact without adding chases, desert gangs, explosions, or battle plots.',
    'George Miller / Mad Max: Fury Road',
    ['乔治·米勒']
  ),
  directorItem(
    'com_gondry',
    '冈瑞 (Michel Gondry)',
    'Michel Gondry',
    '商业动感',
    'Commercial / Motion',
    '手工视觉魔术、递归结构、低保真道具、梦境感剪辑和真实材料里的幻想变化。只强化手作奇想和视觉玩笑，不主动新增音乐录影带、品牌广告或具体道具机关。',
    'Handmade visual tricks, recursive structures, lo-fi props, dreamlike editing, and fantasy changes inside real materials. Strengthens handmade imagination and visual wit without adding music videos, brand ads, or specific prop mechanisms.',
    'Michel Gondry / Eternal Sunshine of the Spotless Mind / music video work',
    ['冈瑞', 'Michel Gondry']
  ),
  directorItem(
    'com_spike_jonze',
    '斯派克·琼斯 (Spike Jonze)',
    'Spike Jonze',
    '商业动感',
    'Commercial / Motion',
    '低保真真实感、城市玩耍、荒诞动作、柔软忧郁和不夸张的奇想。只强化真实世界里的轻微异化，不主动新增玩偶角色、广告剧情或音乐表演。',
    'Lo-fi realism, urban play, absurd movement, soft melancholy, and understated fantasy. Strengthens slight estrangement inside real life without adding puppet characters, ad plots, or music performance.',
    'Spike Jonze / Her / Being John Malkovich / music video work',
    ['斯派克·琼斯']
  ),
  directorItem(
    'com_romanek',
    '罗曼尼克 (Mark Romanek)',
    'Mark Romanek',
    '商业动感',
    'Commercial / Motion',
    '极洁白空间、宏观材质、铬面高光、冷静商业构图和物神化细节。只强化洁癖质感和高端表面，不主动新增品牌、产品发布会或广告文案。',
    'Sterile white space, macro material detail, chrome highlights, calm commercial framing, and fetishized surfaces. Strengthens clean luxury texture and premium surfaces without adding brands, product launches, or ad copy.',
    'Mark Romanek / music video and commercial work',
    ['罗曼尼克']
  ),
  directorItem(
    'aut_cuaron',
    '卡隆 (Alfonso Cuaron)',
    'Alfonso Cuaron',
    '欧美作者',
    'Western Auteurs',
    '长镜头调度、自然光环境、贴近身体的运动镜头、真实空间连续性和灾难边缘的沉浸感。只强化连续观看、临场压力和环境包围，不主动新增太空灾难、末世剧情或家庭故事。',
    'Long-take staging, natural location light, body-close moving camera, continuous real space, and immersive edge-of-disaster pressure. Strengthens continuous viewing, immediacy, and environmental enclosure without adding space disasters, apocalypse plots, or family stories.',
    'Alfonso Cuaron / Children of Men / Roma / Gravity',
    ['卡隆', '阿方索·卡隆']
  ),
  directorItem(
    'aut_inarritu',
    '伊纳里图 (Alejandro G. Inarritu)',
    'Alejandro G. Inarritu',
    '欧美作者',
    'Western Auteurs',
    '贴身长镜、自然残酷光、极近呼吸感、身体疲惫和环境持续压迫。只强化生存张力、肉身重量和主观临场，不主动新增荒野复仇、多线叙事或苦难剧情。',
    'Body-close long takes, harsh natural light, breath-level proximity, exhausted bodies, and persistent environmental pressure. Strengthens survival tension, bodily weight, and subjective immediacy without adding wilderness revenge, multi-strand plots, or suffering narratives.',
    'Alejandro G. Inarritu / Birdman / The Revenant / Amores Perros',
    ['伊纳里图']
  ),
  directorItem(
    'aut_pta',
    '保罗·托马斯·安德森 (Paul Thomas Anderson)',
    'Paul Thomas Anderson',
    '欧美作者',
    'Western Auteurs',
    '胶片质感、缓慢推进、人物关系的压力距离、暖暗室内和不稳定亲密感。只强化欲望、权力和情绪裂缝，不主动新增宗教团体、石油时代或家庭冲突剧情。',
    'Film texture, slow push-ins, tense interpersonal distance, warm dark interiors, and unstable intimacy. Strengthens desire, power, and emotional fracture without adding cults, oil-era settings, or family-conflict plots.',
    'Paul Thomas Anderson / There Will Be Blood / Phantom Thread / The Master',
    ['保罗·托马斯·安德森', 'PTA']
  ),
  directorItem(
    'aut_soderbergh',
    '索德伯格 (Steven Soderbergh)',
    'Steven Soderbergh',
    '欧美作者',
    'Western Auteurs',
    '冷静数字摄影、功能性构图、低调色彩实验、程序化空间和职业行动的清晰节奏。只强化效率、观察和现代质感，不主动新增抢劫、医疗、企业或调查剧情。',
    'Cool digital cinematography, functional framing, restrained color experiments, procedural space, and clear rhythm of professional action. Strengthens efficiency, observation, and modern texture without adding heists, medical, corporate, or investigative plots.',
    'Steven Soderbergh / Traffic / Ocean series / The Knick',
    ['索德伯格']
  ),
  directorItem(
    'aut_guillermo',
    '吉尔莫·德尔·托罗 (Guillermo del Toro)',
    'Guillermo del Toro',
    '欧美作者',
    'Western Auteurs',
    '童话式暗部、暖金与冷绿对撞、实体怪物质感、哥特空间和悲悯凝视。只强化手工奇幻、材料触感和怪物温度，不主动新增特定怪物、童话剧情或宗教符号。',
    'Fairy-tale darkness, warm gold against cold green, practical creature materiality, gothic spaces, and compassionate gaze. Strengthens handmade fantasy, tactile material, and creature warmth without adding specific monsters, fairy-tale plots, or religious symbols.',
    'Guillermo del Toro / Pan\'s Labyrinth / The Shape of Water / Crimson Peak',
    ['吉尔莫·德尔·托罗']
  ),
  directorItem(
    'aut_boyle',
    '丹尼·博伊尔 (Danny Boyle)',
    'Danny Boyle',
    '欧美作者',
    'Western Auteurs',
    '高能剪辑、广角变形、强色彩冲击、青年化速度和音乐驱动的画面节拍。只强化活力、危险和心理兴奋，不主动新增贫民窟、毒品、游戏节目或末日剧情。',
    'High-energy editing, wide-angle distortion, strong color impact, youthful velocity, and music-driven visual rhythm. Strengthens vitality, danger, and mental excitation without adding slums, drugs, game shows, or apocalypse plots.',
    'Danny Boyle / Trainspotting / Slumdog Millionaire / 28 Days Later',
    ['丹尼·博伊尔']
  ),
  directorItem(
    'aut_almodovar',
    '阿莫多瓦 (Pedro Almodovar)',
    'Pedro Almodovar',
    '欧美作者',
    'Western Auteurs',
    '饱和红色、平面室内、情绪化装饰、戏剧性面部和身体欲望的明亮表面。只强化色彩、欲望和情感装置，不主动新增家庭秘密、情节反转或西班牙地域符号。',
    'Saturated reds, flat interiors, emotional decor, theatrical faces, and bright surfaces of bodily desire. Strengthens color, desire, and emotional staging without adding family secrets, plot twists, or Spanish regional symbols.',
    'Pedro Almodovar / Talk to Her / Volver / Pain and Glory',
    ['阿莫多瓦']
  ),
  directorItem(
    'aut_kiarostami',
    '基亚罗斯塔米 (Abbas Kiarostami)',
    'Abbas Kiarostami',
    '东方作者',
    'Eastern Auteurs',
    '长距离观看、车窗框景、自然地貌、极简动作和现实与虚构之间的轻微悬置。只强化空白、路途和观察关系，不主动新增乡村儿童、纪录片讨论或伊朗地域叙事。',
    'Distant observation, car-window framing, natural terrain, minimal action, and a slight suspension between reality and fiction. Strengthens emptiness, journey, and observational relation without adding rural children, documentary discourse, or Iranian regional plots.',
    'Abbas Kiarostami / Taste of Cherry / Close-Up / Where Is the Friend\'s House?',
    ['基亚罗斯塔米']
  ),
  directorItem(
    'aut_jia',
    '贾樟柯 (Jia Zhangke)',
    'Jia Zhangke',
    '东方作者',
    'Eastern Auteurs',
    '县城空间、长镜旁观、数码或胶片粗粝、社会转型痕迹和人物被时代结构包围。只强化地方现实、时间沉积和空间冷静，不主动新增具体年代事件、方言剧情或社会评论台词。',
    'Small-city spaces, observational long takes, rough digital or film texture, traces of social transition, and figures enclosed by historical structure. Strengthens local reality, accumulated time, and cool space without adding specific period events, dialect plots, or social-commentary dialogue.',
    'Jia Zhangke / Platform / Still Life / Ash Is Purest White',
    ['贾樟柯']
  ),
  directorItem(
    'aut_park_chanwook',
    '朴赞郁 (Park Chan-wook)',
    'Park Chan-wook',
    '东方作者',
    'Eastern Auteurs',
    '精密构图、冷艳色彩、暴力被装饰化的距离、镜面和物件的心理秩序。只强化优雅危险、欲望控制和视觉机关，不主动新增复仇、阴谋、酷刑或具体道具桥段。',
    'Precise composition, coldly gorgeous color, decorative distance around violence, mirrors, and psychological order of objects. Strengthens elegant danger, desire control, and visual mechanism without adding revenge, conspiracy, torture, or specific prop beats.',
    'Park Chan-wook / Oldboy / The Handmaiden / Decision to Leave',
    ['朴赞郁']
  ),
  directorItem(
    'aut_bong',
    '奉俊昊 (Bong Joon-ho)',
    'Bong Joon-ho',
    '东方作者',
    'Eastern Auteurs',
    '类型切换流畅、阶层空间分层、干净可读的黑色幽默构图和突然危险的节奏断裂。只强化空间讽刺、秩序反转和紧张幽默，不主动新增地下室、怪物、谋杀或阶级剧情。',
    'Fluid genre shifts, class-layered spaces, readable black-comedy framing, and sudden rhythmic ruptures into danger. Strengthens spatial satire, order reversal, and tense humor without adding basements, monsters, murders, or class plots.',
    'Bong Joon-ho / Parasite / Memories of Murder / The Host',
    ['奉俊昊']
  ),
  directorItem(
    'aut_zvyagintsev',
    '萨金塞夫 (Andrey Zvyagintsev)',
    'Andrey Zvyagintsev',
    '欧洲艺术电影',
    'European Art Cinema',
    '冷色自然光、荒凉现代空间、宗教般的静默、家庭或制度压力的远距观察。只强化寒冷、空旷和道德重量，不主动新增俄罗斯社会剧情、宗教叙事或家庭争执。',
    'Cold natural light, desolate modern spaces, religious-like silence, and distant observation of familial or institutional pressure. Strengthens coldness, vacancy, and moral weight without adding Russian social plots, religious narratives, or family quarrels.',
    'Andrey Zvyagintsev / Leviathan / Loveless / The Return',
    ['萨金塞夫']
  ),
  directorItem(
    'aut_varda',
    '瓦尔达 (Agnes Varda)',
    'Agnes Varda',
    '欧洲艺术电影',
    'European Art Cinema',
    '温柔纪实混合、彩色日常、女性观看、街头偶遇和轻盈的自反结构。只强化亲近、游走和生活质地，不主动新增传记、海滩、采访或散文旁白。',
    'Gentle documentary-fiction mixing, colorful everyday detail, feminine gaze, street encounters, and light self-reflexive structure. Strengthens closeness, wandering, and lived texture without adding biography, beaches, interviews, or essay narration.',
    'Agnes Varda / Cleo from 5 to 7 / Vagabond / The Gleaners and I',
    ['瓦尔达', '阿涅斯·瓦尔达']
  )
];
