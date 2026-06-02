import { ConceptBaseItem, ALL_REAL_ERAS, HUMAN_REAL_SCOPE } from './types';

const interfaceItem = (
  id: string,
  name: string,
  nameEn: string,
  group: string,
  groupEn: string,
  def: string,
  defEn: string,
  affects: string[] = ['style', 'hair', 'makeup', 'identity']
): ConceptBaseItem => ({
  id: `cd_social_aesthetic_${id}`,
  name,
  nameEn,
  group,
  groupEn,
  def,
  defEn,
  subjectScope: HUMAN_REAL_SCOPE,
  ontologyLevel: 1,
  eras: ALL_REAL_ERAS,
  affects,
  risk: 'clean'
});

export const CD_SOCIAL_AESTHETIC_INTERFACE: ConceptBaseItem[] = [
  interfaceItem('american_mainstream', '美国大众媒体接口', 'American Mainstream Media Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '用美国影视、广告、校园、职场和社交媒体系统编码妆发、姿态、笑容、健身感和公共自我呈现；它不是血统。', 'Codes grooming, posture, smile, fitness aura, and public self-presentation through American film, ads, campus, workplace, and social media systems; it is not heritage.'),
  interfaceItem('american_suburban', '美国郊区生活接口', 'American Suburban Life Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '以郊区住宅、校园活动、家庭车库、运动休闲和中产生活秩序编码人物气质。', 'Codes character aura through suburbia, school activities, family garage, athleisure, and middle-class life order.'),
  interfaceItem('american_urban', '美国都市街区接口', 'American Urban Neighborhood Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '以纽约、洛杉矶、芝加哥等都市街区的妆发、运动服、通勤、街头自信和多族裔日常编码角色。', 'Codes the character through New York, Los Angeles, Chicago, and other urban neighborhood grooming, sportswear, commute, street confidence, and multiethnic daily life.'),
  interfaceItem('american_college', '美国大学校园接口', 'American College Campus Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '用大学社团、运动队、宿舍、咖啡杯、背包、卫衣和公开社交气质编码年轻人物。', 'Codes young characters through clubs, sports teams, dorm life, coffee cups, backpacks, hoodies, and open social presence.'),
  interfaceItem('american_influencer', '美国网红审美接口', 'American Influencer Aesthetic Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '以高曝光妆容、健身身体、品牌基础款、自拍姿态和平台化自我管理编码角色。', 'Codes the character through high-visibility makeup, fitness body, branded basics, selfie posture, and platformized self-management.'),
  interfaceItem('canadian_multicultural', '加拿大多元城市接口', 'Canadian Multicultural Urban Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '以多元移民城市、户外功能服、克制职场和社区气质编码角色。', 'Codes the character through multicultural cities, outdoor functional wear, restrained workplace tone, and community aura.'),
  interfaceItem('australian_coastal', '澳洲海岸都市接口', 'Australian Coastal Urban Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '以海岸城市、阳光皮肤感、运动休闲、户外生活和松弛社交姿态编码角色。', 'Codes the character through coastal cities, sun-touched skin aura, athleisure, outdoor life, and relaxed social posture.'),
  interfaceItem('british_class', '英伦阶层气质接口', 'British Class-Coded Interface', 'A. 北美/西方大众', 'A. North American / Western Mainstream', '以英伦阶层、学院、酒吧、办公制服、风衣和冷幽默姿态编码人物；不等于英国血统。', 'Codes the character through British class signals, academia, pub culture, office uniform, trench coats, and dry-humor posture; not British heritage.'),

  interfaceItem('french_parisian', '法国巴黎都市接口', 'French Parisian Urban Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以巴黎都市、松弛精致、低饱和妆发、黑色基础款、香烟/咖啡馆姿态和时尚工业编码角色。', 'Codes the character through Parisian urbanity, relaxed refinement, low-saturation grooming, black basics, cigarette/cafe posture, and fashion industry.'),
  interfaceItem('italian_fashion', '意大利时装都市接口', 'Italian Fashion-City Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以米兰、罗马、剪裁西装、皮具、家族气质和强烈造型意识编码角色。', 'Codes the character through Milan, Rome, tailored suits, leather goods, family aura, and strong styling consciousness.'),
  interfaceItem('german_minimal', '德国理性极简接口', 'German Rational Minimal Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以理性剪裁、功能材料、低装饰、清洁办公、技术秩序和克制身体语言编码角色。', 'Codes the character through rational tailoring, functional material, low ornament, clean office, technical order, and restrained body language.'),
  interfaceItem('berlin_club', '柏林地下俱乐部接口', 'Berlin Underground Club Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以黑色机能、皮革、剃发、疲惫夜生活、电子音乐和反商业身体姿态编码角色。', 'Codes the character through black utility wear, leather, shaved hair, exhausted nightlife, electronic music, and anti-commercial body posture.'),
  interfaceItem('nordic_clean', '北欧干净生活接口', 'Nordic Clean Living Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以寒地光感、针织、户外材料、自然妆发、木质生活和低冲突社交气质编码角色。', 'Codes the character through cold-region light, knitwear, outdoor materials, natural grooming, wood-toned life, and low-conflict social aura.'),
  interfaceItem('eastern_europe_post_soviet', '东欧后苏联接口', 'Eastern European Post-Soviet Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以旧公寓、运动服、冷脸、廉价奢华、灰色城市和制度残余编码角色。', 'Codes the character through old apartments, tracksuits, cold face, cheap luxury, grey cities, and institutional residue.'),
  interfaceItem('spanish_urban', '西班牙都市生活接口', 'Spanish Urban Life Interface', 'B. 欧洲都市/阶层', 'B. European Urban / Class', '以广场、夜生活、家庭餐桌、贴身剪裁、浓烈眼神和南欧社交热度编码角色。', 'Codes the character through plazas, nightlife, family tables, close tailoring, intense gaze, and southern European social warmth.'),

  interfaceItem('chinese_urban', '中国都市审美接口', 'Chinese Urban Aesthetic Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以中国都市生活、通勤、商场、短视频、现实职场和家庭社会压力编码妆发、姿态和身份呈现。', 'Codes grooming, posture, and identity presentation through Chinese urban life, commute, malls, short video, real workplace, and family-social pressure.'),
  interfaceItem('chinese_county', '中国县城青年接口', 'Chinese County-Town Youth Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以县城街道、夜市、摩托、电动车、廉价潮流和熟人社会气质编码角色。', 'Codes the character through county-town streets, night markets, motorcycles, e-bikes, cheap trends, and acquaintance-society aura.'),
  interfaceItem('japanese_clean', '日本清洁日常接口', 'Japanese Clean Daily Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以通勤、制服感、便利店、自然妆、规训姿态和细节整洁编码角色。', 'Codes the character through commute, uniform feeling, convenience stores, natural makeup, disciplined posture, and tidy details.'),
  interfaceItem('japanese_subculture', '日本亚文化接口', 'Japanese Subculture Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以原宿、视觉系、偶像、宅文化、街拍、夸张发色和符号化配饰编码角色。', 'Codes the character through Harajuku, visual kei, idols, otaku culture, street snaps, loud hair color, and symbolic accessories.'),
  interfaceItem('korean_beauty', '韩国现代妆发接口', 'Korean Modern Beauty Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以韩式底妆、发型管理、偶像工业、医美痕迹、干净穿搭和镜头友好脸编码角色。', 'Codes the character through Korean base makeup, hair management, idol industry, cosmetic-procedure traces, clean styling, and camera-friendly face.'),
  interfaceItem('korean_street', '韩国街头青年接口', 'Korean Street Youth Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以弘大/圣水洞街头、宽松剪裁、染发、耳机、咖啡店和社交媒体姿态编码角色。', 'Codes the character through Hongdae/Seongsu street style, loose cuts, dyed hair, headphones, cafes, and social-media posture.'),
  interfaceItem('thai_pop', '泰国流行都市接口', 'Thai Pop-Urban Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以曼谷都市、明亮妆容、偶像/剧集工业、炎热气候穿搭和商业活力编码角色。', 'Codes the character through Bangkok urbanity, bright makeup, idol/drama industry, hot-climate styling, and commercial vitality.'),
  interfaceItem('vietnamese_modern', '越南现代都市接口', 'Vietnamese Modern Urban Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以胡志明市/河内都市、机车通勤、轻薄衣料、年轻职场和街边生活编码角色。', 'Codes the character through Ho Chi Minh City / Hanoi urbanity, motorbike commute, light fabrics, young workplace, and street-side life.'),
  interfaceItem('indian_screen', '印度影视都市接口', 'Indian Screen-Urban Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以印度影视、婚礼工业、都市阶层、亮色妆发和身体表现力编码角色。', 'Codes the character through Indian screen culture, wedding industry, urban class, bright grooming, and expressive body presence.'),
  interfaceItem('southeast_asian_island', '东南亚岛屿城市接口', 'Southeast Asian Island-City Interface', 'C. 东亚/亚洲现代', 'C. East Asian / Asian Modern', '以群岛城市、潮湿气候、轻便服装、摩托/市场和多语言街区编码角色。', 'Codes the character through archipelagic cities, humid climate, light clothing, motorcycles/markets, and multilingual neighborhoods.'),

  interfaceItem('latin_urban', '拉美都市热度接口', 'Latin Urban Heat Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以拉美城市、音乐、紧身剪裁、强烈色彩、家庭/街区关系和身体自信编码角色。', 'Codes the character through Latin cities, music, fitted cuts, strong color, family/neighborhood relations, and body confidence.'),
  interfaceItem('mexican_pop', '墨西哥流行文化接口', 'Mexican Pop-Culture Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以墨西哥城市、街头食物、宗教残影、流行音乐、复古图案和家庭社会感编码角色。', 'Codes the character through Mexican cities, street food, religious residue, pop music, retro motifs, and family-social aura.'),
  interfaceItem('brazilian_body', '巴西身体文化接口', 'Brazilian Body-Culture Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以海滩、健身、桑巴/放克、鲜艳色彩、晒痕和开放身体语言编码角色。', 'Codes the character through beach, fitness, samba/funk, bright colors, tan marks, and open body language.'),
  interfaceItem('caribbean_port', '加勒比港口混合接口', 'Caribbean Port-Mixed Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以港口、岛屿、音乐、殖民残余、鲜艳衣料和多源混合身份编码角色。', 'Codes the character through ports, islands, music, colonial residue, bright textiles, and multi-source identity.'),
  interfaceItem('west_african_urban', '西非都市潮流接口', 'West African Urban Trend Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以拉各斯/阿克拉等都市、鲜明印花、音乐工业、创业气质和强社交姿态编码角色。', 'Codes the character through Lagos/Accra and other cities, vivid prints, music industry, entrepreneurial aura, and strong social posture.'),
  interfaceItem('middle_eastern_urban', '中东现代都市接口', 'Middle Eastern Modern Urban Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以海湾/黎凡特/德黑兰等都市、香氛、精致妆发、家庭/宗教边界和现代消费编码角色。', 'Codes the character through Gulf/Levant/Tehran urbanity, fragrance, refined grooming, family/religious boundaries, and modern consumption.'),
  interfaceItem('diaspora_second_gen', '二代移民审美接口', 'Second-Generation Diaspora Interface', 'D. 拉美/非洲/移民都市', 'D. Latin / African / Diaspora Urban', '以家庭来源和居住国审美之间的拉扯编码妆发、口音感、穿搭和身份姿态。', 'Codes grooming, accent aura, styling, and identity posture through tension between family origin and host-country aesthetics.'),

  interfaceItem('old_money', '旧钱阶层接口', 'Old-Money Class Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以继承财富、低调材质、马术/游艇/私校符号、克制姿态和隐形排他性编码角色。', 'Codes the character through inherited wealth, quiet materials, equestrian/yacht/private-school signs, restrained posture, and invisible exclusivity.'),
  interfaceItem('new_money', '新钱炫富接口', 'New-Money Display Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以高曝光品牌、医美、豪车、硬光自拍、健身身体和主动展示欲编码角色。', 'Codes the character through visible brands, cosmetic procedures, luxury cars, hard-light selfies, fitness body, and explicit display desire.'),
  interfaceItem('corporate_global', '全球企业职场接口', 'Global Corporate Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以西装、工牌、电脑包、机场、会议疲惫和效率姿态编码角色。', 'Codes the character through suits, ID badges, laptop bags, airports, meeting fatigue, and efficiency posture.'),
  interfaceItem('academic_institution', '学院制度接口', 'Academic Institution Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以图书馆、讲座、呢料、眼镜、论文疲惫和知识阶层姿态编码角色。', 'Codes the character through libraries, lectures, wool, glasses, thesis fatigue, and knowledge-class posture.'),
  interfaceItem('fashion_industry', '时尚工业接口', 'Fashion Industry Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以造型团队、后台、样衣、杂志、秀场、瘦长站姿和审美劳动痕迹编码角色。', 'Codes the character through styling teams, backstage, samples, magazines, runway, elongated stance, and aesthetic labor traces.'),
  interfaceItem('entertainment_industry', '娱乐工业接口', 'Entertainment Industry Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以经纪公司、练习室、妆发团队、镜头表情、粉丝管理和舞台人格编码角色。', 'Codes the character through agencies, rehearsal rooms, glam teams, camera expression, fandom management, and stage persona.'),
  interfaceItem('medical_institution', '医疗制度接口', 'Medical Institution Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以白/蓝洁净材料、手套、口罩、工作疲惫和照护/权力双重性编码角色。', 'Codes the character through white/blue clean materials, gloves, masks, work fatigue, and the care/power duality.'),
  interfaceItem('military_institution', '军警制度接口', 'Military / Police Institution Interface', 'E. 阶层/机构/媒体', 'E. Class / Institution / Media', '以制服等级、短发、靴子、证件、训练姿态和纪律性编码角色。', 'Codes the character through uniform rank, short hair, boots, ID, trained posture, and discipline.'),

  interfaceItem('internet_girl', '互联网女孩接口', 'Internet-Girl Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以自拍、软光、滤镜妆、卧室背景、平台化欲望和可消费亲密感编码角色。', 'Codes the character through selfies, soft light, filter makeup, bedroom background, platformized desire, and consumable intimacy.'),
  interfaceItem('streetwear_global', '全球街头潮流接口', 'Global Streetwear Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以球鞋、宽松廓形、logo、滑板/嘻哈痕迹和城市青年身份编码角色。', 'Codes the character through sneakers, loose silhouettes, logos, skateboard/hip-hop traces, and urban youth identity.'),
  interfaceItem('y2k_platform', 'Y2K平台审美接口', 'Y2K Platform Aesthetic Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以低腰、亮面材料、翻盖手机、金属色、粉色/银色和早期互联网性感编码角色。', 'Codes the character through low-rise styling, shiny material, flip phones, metallic colors, pink/silver, and early-internet sexuality.'),
  interfaceItem('goth_club', '哥特夜场接口', 'Goth Club Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以黑色妆容、蕾丝/皮革、银饰、苍白皮肤感和夜场疏离编码角色。', 'Codes the character through black makeup, lace/leather, silver jewelry, pale skin aura, and nightlife distance.'),
  interfaceItem('techwear', '机能科技穿搭接口', 'Techwear Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以黑色防水材料、口袋、扣具、遮面、城市移动和技术焦虑编码角色。', 'Codes the character through black waterproof materials, pockets, buckles, face covering, urban mobility, and technological anxiety.'),
  interfaceItem('quiet_luxury', '静奢日常接口', 'Quiet Luxury Daily Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以无logo高质感、羊绒、干净剪裁、低声量财富和克制身体姿态编码角色。', 'Codes the character through logo-free quality, cashmere, clean tailoring, low-volume wealth, and restrained posture.'),
  interfaceItem('normcore_commute', 'Normcore通勤接口', 'Normcore Commute Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以普通T恤、牛仔裤、运动鞋、无明显风格和城市通勤匿名感编码角色。', 'Codes the character through plain T-shirts, jeans, sneakers, stylelessness, and urban commuting anonymity.'),
  interfaceItem('alt_model', '另类模特接口', 'Alternative Model Interface', 'F. 平台/亚文化', 'F. Platform / Subculture', '以纹身、穿孔、剃眉、非标准比例、强镜头意识和亚文化时尚工业编码角色。', 'Codes the character through tattoos, piercings, shaved brows, nonstandard proportions, camera awareness, and subcultural fashion industry.')
];
