import { LibraryItemDef } from '../../types';

const PHOTO_CONTROLS = [
  '摄影类型',
  '相机距离',
  '曝光方式',
  '胶片或数码质感',
  '颗粒与锐度',
  '闪光或自然光',
  '冲印工艺',
  '成像缺陷'
] as const;

const PHOTO_FORBIDS = [
  '改写主体身份',
  '新增导演式剧情',
  '替代场面调度',
  '引入 CGI、游戏引擎或纯算法视觉',
  '新增品牌、文字、摄影师肖像或作品复刻',
  '用摄影流派替代 C01-C10 内容'
] as const;

const photoItem = (
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
  core: `参考：${reference}。协议：只提取摄影传统、成像方式和影像材料，不生成摄影师本人、具体作品构图、品牌语境或导演式剧情。`,
  coreEn: `Reference: ${reference}. Protocol: extract photographic tradition, imaging method, and image material only; do not generate the photographer, specific work composition, brand context, or directing plot.`,
  reference,
  referenceEn: reference,
  aliases,
  ontologyLevel: 1,
  risk: 'clean',
  affects: ['camera', 'exposure', 'grain', 'texture', 'lighting', 'process'],
  controls: PHOTO_CONTROLS,
  forbids: PHOTO_FORBIDS,
  absorptionRule: '摄影摄像流派只决定画面像如何被相机记录、曝光、显影或保存；不得替代主体身份、动作事件、场域坐标、导演调度或物理媒介路线。'
});

export const PHOTO_STYLE_ITEMS: LibraryItemDef[] = [
  photoItem(
    'pho_magnum',
    '马格南纪实 (Magnum Documentary)',
    'Magnum Documentary',
    '纪实人文',
    'Documentary / Humanist',
    '自然现场光、35mm 距离感、黑白或低饱和颗粒、瞬间动作和真实环境痕迹。只强化现场真实与人文紧迫感，不主动新增战争、新闻事件或历史地点。',
    'Natural location light, 35mm distance, black-and-white or low-saturation grain, decisive action, and real environmental traces. Strengthens on-site reality and humanist urgency without adding war, news events, or historical locations.',
    'Magnum Photos / Robert Capa / Henri Cartier-Bresson / Josef Koudelka',
    ['马格南纪实', '纪实摄影']
  ),
  photoItem(
    'pho_street',
    '街头抓拍 (Street Snap)',
    'Street Snap',
    '纪实人文',
    'Documentary / Humanist',
    '自然城市光、轻微广角、偶然几何、未摆拍姿态和瞬间构图。只强化街头偶然性和真实抓拍，不主动新增都市剧情、路人群像或广告招牌。',
    'Natural city light, slight wide angle, accidental geometry, unposed posture, and instant composition. Strengthens street contingency and candid realism without adding urban plots, passerby crowds, or ads.',
    'Henri Cartier-Bresson / Garry Winogrand / Vivian Maier / Daido Moriyama',
    ['街头摄影', '街头抓拍', '决定性瞬间']
  ),
  photoItem(
    'pho_social_realism',
    '社会写实 (Social Realism)',
    'Social Realism',
    '纪实人文',
    'Documentary / Humanist',
    '粗粝纹理、劳动或生活痕迹、硬自然光、低修饰肤色和环境压力。只强化现实重量和社会表面，不主动新增贫困叙事、苦难标签或政治口号。',
    'Rough texture, labor or life traces, hard natural light, unpolished skin color, and environmental pressure. Strengthens real weight and social surface without adding poverty narratives, suffering labels, or political slogans.',
    'Dorothea Lange / Sebastiao Salgado / Walker Evans / FSA photography',
    ['社会写实', '人文纪实']
  ),
  photoItem(
    'pho_paparazzi',
    '狗仔偷拍 (Paparazzi Style)',
    'Paparazzi Style',
    '纪实人文',
    'Documentary / Humanist',
    '直打闪光、强投影、近距离混乱、压缩构图、高 ISO 噪点和突发现场感。只强化侵入式曝光和即时记录，不主动新增丑闻、偷拍剧情或新闻标题。',
    'Direct flash, harsh shadows, close-range disorder, compressed framing, high-ISO noise, and sudden event feeling. Strengthens intrusive exposure and immediate record without adding scandals, voyeur plots, or headlines.',
    'Weegee / paparazzi flash photography / tabloid press photography',
    ['狗仔', '新闻闪光', '偷拍感']
  ),
  photoItem(
    'pho_humanist',
    '人文摄影 (Humanist)',
    'Humanist Photography',
    '纪实人文',
    'Documentary / Humanist',
    '温和自然光、日常环境、中景距离、平凡人物的情绪温度和生活动作。只强化亲密真实和普通生活的尊严，不主动新增家庭剧情、街区故事或怀旧说明。',
    'Gentle natural light, everyday environments, medium distance, emotional warmth in ordinary people, and lived gestures. Strengthens intimate reality and ordinary dignity without adding family plots, neighborhood stories, or nostalgic captions.',
    'Robert Doisneau / Willy Ronis / postwar humanist photography',
    ['人文摄影', '生活肖像']
  ),
  photoItem(
    'pho_new_topographic',
    '新地形学 (New Topographics)',
    'New Topographics',
    '纪实人文',
    'Documentary / Humanist',
    '平直光线、客观距离、工业或郊区景观、情绪抽离和普通空间的异化。只强化环境记录和冷静观察，不主动新增地图说明、城市规划文字或社会评论剧情。',
    'Flat light, objective distance, industrial or suburban landscape, emotional detachment, and estranged ordinary spaces. Strengthens environmental record and cool observation without adding map labels, urban-planning text, or social-commentary plots.',
    'New Topographics / Stephen Shore / Lewis Baltz / Bernd and Hilla Becher',
    ['新地形学', '客观景观']
  ),
  photoItem(
    'pho_war_photo',
    '战地摄影 (War Photography)',
    'War Photography',
    '纪实人文',
    'Documentary / Humanist',
    '尘土、碎屑、低能见度、紧张构图、粗颗粒和危险现场痕迹。只强化极限环境下的真实压力，不主动新增战争阵营、武器战斗或政治叙事。',
    'Dust, debris, low visibility, tense framing, rough grain, and dangerous site traces. Strengthens real pressure in extreme environments without adding factions, weapon combat, or political narrative.',
    'Robert Capa / Don McCullin / James Nachtwey / war photojournalism',
    ['战地摄影']
  ),

  photoItem(
    'pho_vogue',
    'Vogue 大片 (High Fashion)',
    'High Fashion Editorial',
    '时尚商业',
    'Fashion / Commercial',
    '精确棚灯、清楚姿态、面料质感、干净背景、商业修图和强造型识别。只强化服装、姿态和质感呈现，不主动新增品牌、杂志封面字或名模身份。',
    'Precise studio lighting, clear pose, fabric texture, clean background, commercial retouching, and strong styling recognition. Strengthens clothing, posture, and material presentation without adding brands, magazine cover text, or model identity.',
    'Vogue editorials / Richard Avedon / Irving Penn / Steven Meisel',
    ['Vogue 大片', '时尚杂志', '高级时尚']
  ),
  photoItem(
    'pho_glamour',
    '好莱坞名伶 (Hollywood Glamour)',
    'Hollywood Glamour',
    '时尚商业',
    'Fashion / Commercial',
    '蝴蝶光、轮廓光、柔焦皮肤、银幕感黑白或暖调、优雅头肩构图。只强化经典明星光和面部雕塑感，不主动新增明星身份、复古片场或珠宝品牌。',
    'Butterfly light, rim light, softened skin, screen-like monochrome or warm tone, and elegant head-shoulder framing. Strengthens classic star light and facial sculpting without adding celebrity identity, vintage sets, or jewelry brands.',
    'George Hurrell / Hollywood glamour portraits / classic studio portrait lighting',
    ['好莱坞名伶', '名伶摄影', '柔焦人像']
  ),
  photoItem(
    'pho_hard_flash',
    '硬核闪光 (Hard Flash)',
    'Hard Flash',
    '时尚商业',
    'Fashion / Commercial',
    '机顶直闪、强烈黑影、近距离皮肤反光、白墙或现场背景、轻微失控的即时感。只强化闪光曝光和快照质感，不主动新增派对、偷拍剧情或挑衅语境。',
    'On-camera flash, hard black shadows, close skin highlights, white wall or location background, and slightly uncontrolled immediacy. Strengthens flash exposure and snapshot texture without adding parties, voyeur plots, or provocation context.',
    'hard flash fashion photography / Terry Richardson-style lighting / Nan Goldin snapshot energy',
    ['硬闪', '快照摄影']
  ),
  photoItem(
    'pho_commercial',
    '产品图腾 (Product Totem)',
    'Product Totem',
    '时尚商业',
    'Fashion / Commercial',
    '无尘背景、受控高光、微距材质、反光板边缘、极清晰轮廓和高端商业后期。只强化表面、轮廓和展示感，不主动新增品牌标识、包装或广告语。',
    'Dustless background, controlled highlights, macro material detail, reflector edges, sharp silhouette, and premium commercial retouching. Strengthens surface, contour, and display without adding logos, packaging, or ad slogans.',
    'Apple product photography / still-life commercial photography / packshot lighting',
    ['产品摄影', '商业棚拍']
  ),
  photoItem(
    'pho_food',
    '食欲诱惑 (Food Photography)',
    'Food Photography',
    '时尚商业',
    'Fashion / Commercial',
    '微距、浅景深、蒸汽、油亮表面、柔和侧逆光和强烈材质诱惑。只强化食物或材质的感官表面，不主动新增餐厅、厨师、菜单或商业文案。',
    'Macro distance, shallow depth, steam, glossy surfaces, soft side/back light, and strong material desire. Strengthens sensory surfaces of food or material without adding restaurants, chefs, menus, or commercial copy.',
    'food photography / commercial tabletop photography / macro culinary lighting',
    ['食物摄影', '食欲诱惑']
  ),
  photoItem(
    'pho_lookbook',
    '潮流画册 (Lookbook Style)',
    'Lookbook Style',
    '时尚商业',
    'Fashion / Commercial',
    '中性背景、均匀光、全身或半身比例可读、面料和剪裁清楚、姿态克制。只强化造型展示和实用清晰度，不主动新增品牌目录、模特身份或商品说明。',
    'Neutral background, even light, readable full/half-body proportion, clear fabric and tailoring, and restrained pose. Strengthens styling display and practical clarity without adding brand catalogs, model identities, or product descriptions.',
    'fashion lookbooks / e-commerce editorial photography / studio catalog shoots',
    ['Lookbook', '服装画册']
  ),
  photoItem(
    'pho_editorial_art',
    '艺术社论 (Editorial Art)',
    'Editorial Art Photography',
    '时尚商业',
    'Fashion / Commercial',
    '叙事化布景、时尚姿态、精致道具、戏剧灯光和带艺术感的商业构图。只强化时尚社论的视觉组织，不主动新增童话剧情、品牌故事或复杂场景。',
    'Narrative set dressing, fashion posture, refined props, dramatic light, and artful commercial framing. Strengthens editorial visual organization without adding fairy-tale plots, brand stories, or complex scenes.',
    'Tim Walker / Paolo Roversi / fashion editorial photography',
    ['艺术社论', '时尚社论']
  ),
  photoItem(
    'pho_sport_action',
    '运动动能 (Sport Kinetic)',
    'Sport Kinetic',
    '时尚商业',
    'Fashion / Commercial',
    '高速快门、汗水飞溅、肌肉张力、清晰冲击瞬间、强背光或侧光。只强化爆发力和冻结瞬间，不主动新增比赛项目、品牌运动广告或观众场景。',
    'Fast shutter, sweat spray, muscle tension, crisp impact moment, and strong back or side light. Strengthens explosive force and frozen instant without adding sports categories, brand ads, or audiences.',
    'sports campaign photography / Nike-style action stills / high-speed athletic photography',
    ['运动摄影', '高速摄影']
  ),

  photoItem(
    'pho_surreal_art',
    '超现实艺术 (Surreal Art)',
    'Surreal Art Photography',
    '艺术实验',
    'Fine Art / Experimental',
    '现实物件的异常并置、冷静布光、梦逻辑和不可信空间。只强化摄影中的超现实组合，不主动新增梦境剧情、绘画风格或 CGI 变形。',
    'Unusual juxtaposition of real objects, calm lighting, dream logic, and unreliable space. Strengthens surreal combinations within photography without adding dream plots, painting style, or CGI morphing.',
    'Man Ray / Dora Maar / surrealist photography',
    ['超现实摄影', '曼·雷']
  ),
  photoItem(
    'pho_double_exp',
    '双重曝光 (Double Exposure)',
    'Double Exposure',
    '艺术实验',
    'Fine Art / Experimental',
    '两层影像叠合、半透明轮廓、明暗互相吞噬和记忆感。只强化影像层叠和意识重影，不主动新增第二个角色、灵魂出窍剧情或片头字幕。',
    'Two image layers, translucent contours, interlocking light and dark, and memory. Strengthens layered imaging and mental ghosting without adding a second character, out-of-body plots, or title text.',
    'analog double exposure / Man Ray experiments / photographic layering',
    ['双重曝光', '重影摄影']
  ),
  photoItem(
    'pho_long_exp',
    '长曝光 (Long Exposure)',
    'Long Exposure',
    '艺术实验',
    'Fine Art / Experimental',
    '运动拖影、柔化水面或人影、光轨、稳定背景和时间被压进同一张照片的质感。只强化时间痕迹和曝光持续感，不主动新增交通夜景、星轨或魔法光效。',
    'Motion trails, softened water or figures, light paths, stable backgrounds, and time compressed into one image. Strengthens temporal trace and exposure duration without adding traffic nights, star trails, or magical light effects.',
    'Hiroshi Sugimoto / Michael Wesely / long-exposure photography',
    ['长曝光', '时间曝光']
  ),
  photoItem(
    'pho_infra_red',
    '红外摄影 (Infrared)',
    'Infrared Photography',
    '艺术实验',
    'Fine Art / Experimental',
    '白化植物、暗天空、异常肤色、强对比光谱和现实被不可见光改写的感觉。只强化红外成像和异化现实，不主动新增外星世界、梦境剧情或霓虹数字效果。',
    'White foliage, dark skies, unusual skin tones, high-contrast spectrum, and reality transformed by invisible light. Strengthens infrared imaging and estranged reality without adding alien worlds, dream plots, or neon digital effects.',
    'infrared film photography / Kodak Aerochrome / Richard Mosse',
    ['红外摄影', 'Aerochrome']
  ),
  photoItem(
    'pho_thermal',
    '热感成像 (Thermal)',
    'Thermal Imaging',
    '艺术实验',
    'Fine Art / Experimental',
    '温度映射色、轮廓简化、身体热区、冷暖能量分布和仪器记录感。只强化热量可视化，不主动新增军事监控、怪物视角、追踪剧情或科幻设备。',
    'Temperature-map color, simplified contours, body heat zones, warm-cold energy distribution, and instrument-record feeling. Strengthens visible heat without adding military surveillance, monster vision, tracking plots, or sci-fi devices.',
    'thermal camera imaging / FLIR photography / scientific heat-map imaging',
    ['热成像', '热感成像']
  ),
  photoItem(
    'pho_light_paint',
    '光绘艺术 (Light Painting)',
    'Light Painting',
    '艺术实验',
    'Fine Art / Experimental',
    '暗场长曝光、手持光源轨迹、空间线条和时间被光线绘出的效果。只强化真实曝光中的光迹，不主动新增魔法技能、霓虹 UI 或数字粒子。',
    'Dark-field long exposure, handheld light trails, spatial lines, and time drawn by light. Strengthens real exposure light traces without adding magic skills, neon UI, or digital particles.',
    'light painting photography / Pablo Picasso light drawings / long-exposure light art',
    ['光绘', '光绘摄影']
  ),
  photoItem(
    'pho_conceptual',
    '概念摄影 (Conceptual)',
    'Conceptual Photography',
    '艺术实验',
    'Fine Art / Experimental',
    '少量物件、空白空间、符号化构图、冷静曝光和思想优先的图像秩序。只强化概念清晰度和形式留白，不主动新增展览说明、哲学文字或无关象征物。',
    'Sparse objects, empty space, symbolic composition, calm exposure, and idea-first order. Strengthens conceptual clarity and formal whitespace without adding exhibition text, philosophical captions, or unrelated symbols.',
    'Hiroshi Sugimoto / John Baldessari / conceptual photography',
    ['概念摄影', '极简摄影']
  ),
  photoItem(
    'pho_abstract_macro',
    '抽象微距 (Abstract Macro)',
    'Abstract Macro',
    '艺术实验',
    'Fine Art / Experimental',
    '极浅景深、纹理放大、尺度不明、颗粒或液体细节、画面接近抽象图案。只强化微观表面和触感，不主动新增昆虫、植物、科学样本或装饰纹样。',
    'Extremely shallow depth, enlarged texture, ambiguous scale, grain or liquid details, and near-abstract patterning. Strengthens microscopic surface and tactility without adding insects, plants, scientific samples, or decorative patterns.',
    'macro fine-art photography / Karl Blossfeldt / abstract texture studies',
    ['抽象微距', '微距材质']
  ),

  photoItem(
    'pho_daguerreotype',
    '银版摄影 (Daguerreotype)',
    'Daguerreotype',
    '历史工艺',
    'Historical / Process',
    '镜面金属质感、细节锐利、灰银色调、静止姿态和早期摄影的庄严感。只强化金属显影和古老凝视，不主动新增历史人物、证件照或死亡叙事。',
    'Mirror-like metal surface, sharp detail, grey-silver tone, still posture, and solemn early-photography feeling. Strengthens metal development and archaic gaze without adding historical figures, ID photos, or death narratives.',
    'daguerreotype portraits / early photographic plates / 19th-century studio photography',
    ['银版摄影']
  ),
  photoItem(
    'pho_wet_plate',
    '湿版摄影 (Wet Plate)',
    'Wet Plate',
    '历史工艺',
    'Historical / Process',
    '银盐暗部、化学污痕、边缘不均、长曝光凝视和古老肉身感。只强化历史显影和凝固时间，不主动新增内战、古装身份、墓碑或灵异剧情。',
    'Silver shadows, chemical stains, uneven edges, long-exposure stare, and archaic bodily presence. Strengthens historical development and frozen time without adding civil war, period identities, tombstones, or ghost plots.',
    'wet-plate collodion / Sally Mann process work / Civil War-era photographic process',
    ['湿版摄影', '湿版']
  ),
  photoItem(
    'pho_tintype',
    '锡版摄影 (Tintype)',
    'Tintype',
    '历史工艺',
    'Historical / Process',
    '深银色调、直接正片、金属底板、粗糙边缘和沉重历史肉身感。只强化锡版工艺和物理影像，不主动新增西部、士兵、古董道具或年代剧情。',
    'Dark silver tone, direct-positive image, metal plate base, rough edges, and heavy historical bodily presence. Strengthens tintype process and physical image without adding westerns, soldiers, antique props, or period plots.',
    'tintype photography / 19th-century direct positive process',
    ['锡版摄影']
  ),
  photoItem(
    'pho_cyanotype',
    '蓝晒蓝图 (Cyanotype)',
    'Cyanotype',
    '历史工艺',
    'Historical / Process',
    '普鲁士蓝单色、纸面颗粒、轮廓化影像、接触印相感和冷静图纸气质。只强化蓝晒成像和纸面证据，不主动新增工程蓝图、文字标注或植物标本。',
    'Prussian-blue monochrome, paper grain, silhouetted imaging, contact-print feeling, and cool blueprint temperament. Strengthens cyanotype imaging and paper evidence without adding engineering blueprints, labels, or plant specimens.',
    'cyanotype process / Anna Atkins / blueprint contact printing',
    ['蓝晒', 'Cyanotype']
  ),
  photoItem(
    'pho_autochrome',
    '奥托克罗姆 (Autochrome)',
    'Autochrome',
    '历史工艺',
    'Historical / Process',
    '早期彩色颗粒、柔和雾感、点彩式色层和旧彩色照片的梦幻质地。只强化早期彩色工艺，不主动新增复古服装、花园场景或历史叙事。',
    'Early color grain, soft haze, pointillist color layers, and dreamlike old-color texture. Strengthens early color process without adding vintage clothing, gardens, or historical narrative.',
    'Autochrome Lumiere / early color photography',
    ['奥托克罗姆', '早期彩色']
  ),
  photoItem(
    'pho_polaroid',
    '宝丽来 (Polaroid)',
    'Polaroid',
    '历史工艺',
    'Historical / Process',
    '方形相纸、柔软焦点、褪色黑位、边缘色偏和一次性瞬间感。只强化私密记录和即时显影，不主动新增相框、手写字、怀旧剧情或家庭相册。',
    'Square instant print, soft focus, faded blacks, edge color shift, and one-off moment feeling. Strengthens private record and instant development without adding frames, handwriting, nostalgia plots, or family albums.',
    'Polaroid SX-70 / instant photography / Andy Warhol Polaroids',
    ['宝丽来', 'Polaroid']
  ),
  photoItem(
    'pho_film_noir',
    '黑色电影 (Film Noir)',
    'Film Noir',
    '历史工艺',
    'Historical / Process',
    '强硬侧光、百叶窗影、深黑暗部、烟雾颗粒和高反差黑白。只强化阴影切割和罪感气氛，不主动新增侦探、香烟、枪械、犯罪剧情或复古城市。',
    'Hard side light, venetian-blind shadows, deep blacks, smoky grain, and high-contrast monochrome. Strengthens shadow slicing and guilty atmosphere without adding detectives, cigarettes, guns, crime plots, or retro cities.',
    'film noir cinematography / John Alton / classic low-key lighting',
    ['黑色电影', '黑色摄影']
  ),
  photoItem(
    'pho_vintage_35mm',
    '复古 35mm (Vintage Film)',
    'Vintage 35mm Film',
    '历史工艺',
    'Historical / Process',
    '自然颗粒、柔和高光、略偏暖肤色、胶片宽容度、尘点和轻微漏光。只强化胶片记录和生活质地，不主动新增年代剧情、家庭相册或复古道具。',
    'Natural grain, soft highlights, slightly warm skin, film latitude, dust, and slight light leaks. Strengthens film record and lived texture without adding period plots, family albums, or retro props.',
    'Kodak Portra / Fujicolor / 35mm color negative photography',
    ['复古35mm', '胶片摄影', '彩色负片']
  ),

  photoItem(
    'pho_landscape_sublime',
    '崇高风光 (Sublime Landscape)',
    'Sublime Landscape',
    '自然风光',
    'Nature / Landscape',
    '大画幅清晰度、远近层次、自然光等待、山体或荒野尺度和庄严构图。只强化自然尺度和空间层次，不主动新增旅行明信片、人物探险剧情或宗教象征。',
    'Large-format clarity, layered depth, waited-for natural light, mountain or wilderness scale, and solemn composition. Strengthens natural scale and spatial layering without adding travel postcards, adventure plots, or religious symbols.',
    'Ansel Adams / large-format landscape photography / Group f/64',
    ['风光摄影', '安塞尔·亚当斯']
  ),
  photoItem(
    'pho_underwater',
    '深海摄影 (Underwater)',
    'Underwater Photography',
    '自然风光',
    'Nature / Landscape',
    '焦散光、蓝绿色吸收、悬浮颗粒、折射变形、失重姿态和低对比远景。只强化液态介质和水下成像，不主动新增潜水装备、海洋生物、溺水剧情或奇幻水宫。',
    'Caustic light, blue-green absorption, suspended particles, refractive distortion, weightless posture, and low-contrast distance. Strengthens liquid medium and underwater imaging without adding diving gear, marine animals, drowning plots, or fantasy palaces.',
    'underwater fashion photography / Zena Holloway / ocean documentary photography',
    ['水下摄影', '深海摄影']
  ),
  photoItem(
    'pho_astrophoto',
    '星空摄影 (Astrophotography)',
    'Astrophotography',
    '自然风光',
    'Nature / Landscape',
    '暗夜高感、星点或银河、长时间曝光、低地平线和冷色宇宙颗粒。只强化天文曝光和宇宙尺度，不主动新增航天器、科幻剧情、星座文字或神话设定。',
    'High-ISO night exposure, stars or Milky Way, long exposure, low horizon, and cool cosmic grain. Strengthens astronomical exposure and cosmic scale without adding spacecraft, sci-fi plots, constellation text, or myth lore.',
    'astrophotography / Milky Way landscape photography / deep-sky imaging',
    ['星空摄影', '天文摄影']
  ),
  photoItem(
    'pho_wildlife',
    '野性瞬间 (Wildlife)',
    'Wildlife Photography',
    '自然风光',
    'Nature / Landscape',
    '远距离长焦压缩、浅景深背景、自然环境遮挡、耐心等待的瞬间和非干预记录感。只强化长焦观察和自然距离，不主动新增动物种类、捕食剧情或自然纪录片旁白。',
    'Distant telephoto compression, shallow-depth background, natural occlusion, waited-for instant, and non-intervention record. Strengthens telephoto observation and natural distance without adding animal species, predation plots, or nature-documentary narration.',
    'National Geographic wildlife photography / BBC natural history stills / telephoto field photography',
    ['野生摄影', '长焦摄影']
  ),
  photoItem(
    'pho_architectural',
    '建筑美学 (Architectural)',
    'Architectural Photography',
    '自然风光',
    'Nature / Landscape',
    '透视校正、垂直线稳定、几何秩序、干净光线和材质边缘清楚。只强化空间理性和结构可读，不主动新增地产广告、设计说明或未来城市设定。',
    'Perspective correction, stable verticals, geometric order, clean light, and clear material edges. Strengthens spatial rationality and structural readability without adding real-estate ads, design notes, or future-city settings.',
    'Julius Shulman / Iwan Baan / architectural photography',
    ['建筑摄影', '建筑美学']
  ),
  photoItem(
    'pho_aerial_drone',
    '鸟瞰全景 (Aerial/Drone)',
    'Aerial / Drone Photography',
    '自然风光',
    'Nature / Landscape',
    '俯视构图、平面化地表纹理、路径和边界清楚、人类尺度被抽离。只强化上帝视角和地形秩序，不主动新增无人机设备、地图文字、军事侦察或旅游宣传。',
    'Top-down framing, flattened terrain texture, clear paths and boundaries, and detached human scale. Strengthens overhead viewpoint and land order without adding drone devices, map text, military reconnaissance, or tourism promotion.',
    'aerial photography / Edward Burtynsky / topographic survey imagery',
    ['航拍', '鸟瞰摄影']
  ),
  photoItem(
    'pho_macro_nature',
    '自然微距 (Nature Macro)',
    'Nature Macro',
    '自然风光',
    'Nature / Landscape',
    '高放大率、极浅景深或焦点堆栈、露珠、植物脉络、昆虫或自然表面纹理。只强化微观证据，不主动新增科普图解、实验室、标签或新物种设定。',
    'High magnification, extremely shallow depth or focus stacking, dew, plant veins, insects, or natural surface texture. Strengthens micro evidence without adding science diagrams, laboratories, labels, or new species lore.',
    'macro nature photography / focus stacking / scientific specimen photography',
    ['自然微距', '微距摄影']
  ),
  photoItem(
    'pho_alpine_cold',
    '极地冷峻 (Alpine Cold)',
    'Alpine Cold',
    '自然风光',
    'Nature / Landscape',
    '高反差雪地、蓝色阴影、尖锐冰面、低温空气和极限环境的洁净残酷感。只强化寒冷、反光和高海拔清晰度，不主动新增登山剧情、灾难事件或极地探险队。',
    'High-contrast snow, blue shadows, sharp ice, cold air, and clean brutality of extreme environments. Strengthens cold, reflection, and high-altitude clarity without adding mountaineering plots, disasters, or polar expeditions.',
    'alpine photography / polar expedition photography / high-altitude landscape photography',
    ['极地冷峻', '雪地摄影']
  ),

  photoItem(
    'pho_glitch_digital',
    '故障视觉 (Glitch Aesthetic)',
    'Glitch Aesthetic',
    '当代数字',
    'Contemporary / Digital',
    '数码传感器错误、压缩噪声、RGB 分离、屏幕撕裂和图像损坏痕迹。只强化数字照片的损坏质感，不主动新增黑客剧情、游戏界面、AI 变形或科幻设备。',
    'Digital sensor errors, compression noise, RGB split, screen tearing, and image damage traces. Strengthens corrupted digital-photo texture without adding hacker plots, game UI, AI morphing, or sci-fi devices.',
    'glitch photography / datamosh stills / corrupted digital imaging',
    ['故障视觉', 'Glitch']
  ),
  photoItem(
    'pho_minimalist_digital',
    '极简数字 (Digital Minimal)',
    'Digital Minimal',
    '当代数字',
    'Contemporary / Digital',
    '大面积留白、单一色块、干净数码锐度、低噪声和极少视觉元素。只强化数码影像的清洁与克制，不主动新增界面、产品广告或抽象生成图形。',
    'Large whitespace, single color fields, clean digital sharpness, low noise, and very few visual elements. Strengthens clean and restrained digital imaging without adding interfaces, product ads, or generated abstract graphics.',
    'minimal digital photography / contemporary studio minimalism',
    ['极简数字', '数字极简']
  ),
  photoItem(
    'pho_lofi_vhs',
    '低保真录像 (VHS Lo-Fi)',
    'VHS Lo-Fi',
    '当代数字',
    'Contemporary / Digital',
    '磁带噪声、扫描线、拖影、低分辨率色偏和录像暂停帧质感。只强化模拟录像记录感，不主动新增恐怖片剧情、监控字幕、日期水印或复古道具。',
    'Tape noise, scanlines, smear, low-resolution color shift, and paused-video texture. Strengthens analog video record without adding horror plots, surveillance subtitles, date stamps, or retro props.',
    'VHS camcorder stills / analog video artifacts / lo-fi tape imaging',
    ['VHS', '低保真录像']
  ),
  photoItem(
    'pho_liminal_space',
    '阈限空间 (Liminal Space)',
    'Liminal Space Photography',
    '当代数字',
    'Contemporary / Digital',
    '空旷商业空间、荧光灯、低人类痕迹、手机或数码照片的平直曝光和熟悉但不安的空间。只强化空间怪异和空置感，不主动新增梦核文字、怪物或故事解释。',
    'Empty commercial spaces, fluorescent light, low human traces, flat phone or digital exposure, and familiar but uneasy space. Strengthens spatial uncanniness and vacancy without adding dreamcore text, monsters, or story explanations.',
    'liminal space photography / empty mall photos / backrooms-adjacent documentary images',
    ['阈限空间', 'Liminal Space']
  ),
  photoItem(
    'pho_polaroid',
    '宝丽来即时 (Polaroid)',
    'Polaroid Instant Film',
    '当代数字',
    'Contemporary / Digital',
    '方形画幅、乳剂边缘、柔化细节、轻微偏色、低动态范围和即时照片的私密物证感。只强化即时成像与旧照片触感，不主动新增相框文字、日期、怀旧剧情或拍立得相机。',
    'Square frame, emulsion edges, softened detail, slight color shift, low dynamic range, and intimate evidence of instant photography. Strengthens instant imaging and old-photo touch without adding frame text, dates, nostalgia plots, or instant cameras.',
    'Polaroid SX-70 / instant film photography / William Eggleston instant photos',
    ['宝丽来', '拍立得', '即时摄影']
  ),
  photoItem(
    'pho_pinhole',
    '针孔摄影 (Pinhole)',
    'Pinhole Photography',
    '当代数字',
    'Contemporary / Digital',
    '无镜头成像、全域柔焦、暗角、长曝光气息、空间变得缓慢而幽微。只强化原始相机机制和模糊时间感，不主动新增手工相机、实验室或神秘剧情。',
    'Lensless imaging, all-over soft focus, vignetting, long-exposure breath, and space becoming slow and faint. Strengthens primitive camera mechanism and blurred time without adding handmade cameras, laboratories, or mystic plots.',
    'pinhole photography / camera obscura / experimental lensless photography',
    ['针孔摄影', '暗箱摄影']
  ),
  photoItem(
    'pho_surveillance',
    '监控影像 (Surveillance)',
    'Surveillance Image',
    '当代数字',
    'Contemporary / Digital',
    '高角度固定机位、广角畸变、低分辨率、压缩噪声、冷白夜视或灰绿画面。只强化被记录和被监视的成像关系，不主动新增时间戳、警报、犯罪剧情或界面文字。',
    'High fixed angle, wide-angle distortion, low resolution, compression noise, cold-white night vision or grey-green image. Strengthens being-recorded and surveillance imaging without adding timestamps, alarms, crime plots, or interface text.',
    'CCTV stills / security camera footage / forensic surveillance images',
    ['监控影像', 'CCTV', '安防摄影']
  ),
  photoItem(
    'pho_mobile_snapshot',
    '手机快照 (Mobile Snapshot)',
    'Mobile Snapshot',
    '当代数字',
    'Contemporary / Digital',
    '小传感器锐化、自动 HDR、轻微广角、垂直构图、即时生活记录和非专业曝光。只强化手机记录的当下感，不主动新增社交媒体界面、自拍姿势、滤镜标签或聊天内容。',
    'Small-sensor sharpening, automatic HDR, slight wide angle, vertical framing, immediate life record, and nonprofessional exposure. Strengthens present-tense phone documentation without adding social-media UI, selfie poses, filter labels, or chat content.',
    'iPhone photography / mobile documentary snapshot / vernacular phone images',
    ['手机摄影', '手机快照']
  ),
  photoItem(
    'pho_environmental_portrait',
    '环境肖像 (Environmental Portrait)',
    'Environmental Portrait',
    '纪实人文',
    'Documentary / Humanist',
    '人物与工作/生活空间共同构成身份，使用中景距离、自然或简洁补光、可读环境物证。只强化人物和场域关系，不主动新增职业剧情、采访场景、道具清单或传记说明。',
    'The person and their work/life space jointly form identity, using medium distance, natural or simple fill light, and readable environmental evidence. Strengthens subject-field relation without adding occupational plots, interview scenes, prop lists, or biographical captions.',
    'Arnold Newman / environmental portraiture / editorial portrait photography',
    ['环境肖像', '场域肖像']
  )
];
