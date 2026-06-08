
import { LibraryItemDef } from '../../../types';

// =============================================================================
// LAYER 1.4: 光 (光影基调与布光 - 可变模块)
// =============================================================================

// === 1. 光影预设包 (Lighting Preset Pack) ===
// 核心逻辑：预设级布光协议。它锁定主光源关系、明暗结构、空气显影和阴影组织方式；下方细项只做补充。

const ERA_ALL = ["primitive", "slave", "feudal", "early_modern", "industrial", "modern", "contemporary", "near_future", "far_future", "timeless"] as const;
const ERA_PRE_ELECTRIC = ["primitive", "slave", "feudal", "early_modern", "industrial", "modern", "contemporary", "timeless"] as const;
const ERA_MODERN = ["industrial", "modern", "contemporary", "near_future", "far_future"] as const;
const ERA_FUTURE = ["modern", "contemporary", "near_future", "far_future"] as const;
const ERA_MYTH_DREAM = ["feudal", "early_modern", "modern", "contemporary", "near_future", "far_future", "timeless", "mythic"] as const;
const ERA_DISASTER = ["primitive", "slave", "feudal", "early_modern", "industrial", "modern", "contemporary", "near_future", "far_future"] as const;
type Fit = NonNullable<LibraryItemDef["categoryFit"]>;

const fit = (unlisted: Fit["unlisted"], strong: string[], usable: string[], fusion: string[], weak: string[] = [], exclude: string[] = []): Fit => ({
  unlisted,
  strong,
  usable,
  fusion,
  weak,
  exclude
});

const FIT_NATURAL = fit("usable", ["romance", "ecological", "urban_life"], ["real_professional", "fashion_idol", "wuxia", "xianxia", "historical", "adventure"], ["fantasy", "dark_fantasy", "surreal"], ["horror", "cyberpunk", "wasteland"]);
const FIT_URBAN_NIGHT = fit("none", ["urban_life", "noir_crime", "cyberpunk"], ["science_fiction", "fashion_idol", "real_professional", "romance"], ["wuxia", "xianxia", "dark_fantasy"], ["historical", "court", "ecological"]);
const FIT_NOIR = fit("usable", ["noir_crime", "horror", "dark_fantasy"], ["urban_life", "war_military", "wasteland", "historical", "court", "romance"], ["wuxia", "xianxia", "fantasy", "surreal"], ["fashion_idol", "ecological"]);
const FIT_STUDIO = fit("usable", ["fashion_idol", "real_professional"], ["urban_life", "romance", "science_fiction", "boudoir_aesthetic"], ["wuxia", "xianxia", "fantasy", "dark_fantasy"], ["ecological", "historical", "court"]);
const FIT_CLASSIC = fit("usable", ["historical", "court", "religious_ritual"], ["romance", "wuxia", "xianxia", "dark_fantasy", "mythic_epic"], ["fantasy", "horror", "surreal"], ["science_fiction", "cyberpunk", "posthuman"]);
const FIT_FIRE_RITUAL = fit("usable", ["religious_ritual", "court", "historical", "dark_fantasy"], ["wuxia", "xianxia", "romance", "horror", "noir_crime"], ["fantasy", "mythic_epic", "surreal"], ["science_fiction", "cyberpunk", "posthuman"]);
const FIT_SCIENCE = fit("none", ["science_fiction", "real_professional", "posthuman", "biopunk"], ["urban_life", "horror", "cyberpunk"], ["body_horror", "noir_crime", "surreal"], ["romance", "fashion_idol"], ["wuxia", "xianxia", "court", "historical", "ecological"]);
const FIT_WASTELAND = fit("usable", ["wasteland", "war_military", "adventure"], ["ecological", "historical", "real_professional", "dark_fantasy"], ["science_fiction", "cyberpunk", "wuxia", "xianxia"], ["romance", "fashion_idol", "court"]);
const FIT_DREAM = fit("usable", ["surreal", "xianxia", "fantasy", "romance"], ["horror", "dark_fantasy", "mythic_epic", "religious_ritual"], ["wuxia", "science_fiction", "cyberpunk", "posthuman"], ["real_professional", "urban_life"]);
const FIT_HORROR = fit("none", ["horror", "noir_crime", "dark_fantasy"], ["urban_life", "real_professional", "war_military"], ["wuxia", "xianxia", "science_fiction", "surreal"], ["romance", "fashion_idol", "ecological"]);
const FIT_WATER_AIR = fit("usable", ["ecological", "romance", "adventure"], ["real_professional", "urban_life", "wuxia", "xianxia", "historical"], ["fantasy", "dark_fantasy", "surreal", "science_fiction"], ["cyberpunk", "court"]);
const FIT_BOUDOIR = fit("none", ["boudoir_aesthetic", "fashion_idol", "romance"], ["urban_life"], ["noir_crime", "surreal"], ["wuxia", "xianxia", "war_military", "wasteland", "science_fiction"], ["religious_ritual", "court"]);

const lp = (item: LibraryItemDef): LibraryItemDef => item;

export const CD_LIGHT_PRESET: LibraryItemDef[] = [
  lp({ id: "lp_natural_soft", name: "自然柔光 (Natural Soft Light)", group: "A. 自然电影光", def: "布光协议：主光源来自开放天光或大面积反射；明暗结构为中高调，阴影只保留体积层次；光质柔和漫射，空气清澈或轻微水汽。禁止加入强霓虹、实验室冷光、硬切投影或黑色电影式深阴影。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "naturalistic", "soft_diffusion"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_overcast_diffuse", name: "阴天漫射 (Overcast Diffused Light)", group: "A. 自然电影光", def: "布光协议：主光源为云层后的整片天空；画面低反差、低阴影、肤色和材质保持真实；空气湿润但不过度雾化。适合把角色放进可信现实，不允许出现方向性极强的硬光或舞台化轮廓光。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "weather_light", "diffuse_sky"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_golden_backlight", name: "黄金时刻逆光 (Golden Hour Backlight)", group: "A. 自然电影光", def: "布光协议：主光源为低角度夕阳或晨阳，从主体后侧切出暖色轮廓；正面由弱反射补光保留表情；空气可显出金色尘粒。禁止变成全画面橙色滤镜，必须保留逆光边缘和暗部体积。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "natural_source", "rim_light"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_blue_hour_cinema", name: "蓝调时刻电影光 (Blue Hour Cinematic Light)", group: "A. 自然电影光", def: "布光协议：主环境光来自日落后或黎明前的蓝色天空；人物由微弱暖光或反光托住面部；明暗结构偏低调但不吞没细节。禁止强霓虹主导，蓝色只来自自然天光或远处城市余辉。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "blue_hour", "naturalistic"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_rain_after_reflection", name: "雨后反射光 (After-Rain Reflective Light)", group: "A. 自然电影光", def: "布光协议：主亮面来自湿地、玻璃和路面反射；光源可以是天光、窗光或远处路灯；阴影被水面反光轻微打开。画面必须有湿润反射证据，禁止干燥棚拍感。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "wet_reflection", "weather_light"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_window_daylight", name: "窗边日光 (Window Daylight Portrait)", group: "A. 自然电影光", def: "布光协议：主光源为单侧窗外天光；一侧面部受光，另一侧由室内环境自然衰减；阴影柔软，空间由窗框、帘影或墙面反射解释。禁止出现多光源棚拍痕迹。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "window_light", "interior"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_forest_dappled", name: "林间斑驳光 (Forest Dappled Light)", group: "A. 自然电影光", def: "布光协议：主光源穿过树冠形成碎片化光斑；人物脸部和衣物保留不规则明暗跳变；空气可含微尘、花粉或湿气。禁止规则几何投影，阴影必须来自叶片和枝条遮挡。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "foliage_shadow", "ecological"], categoryFit: FIT_NATURAL }),
  lp({ id: "lp_snow_reflection", name: "雪地反射高调光 (Snow Bounce High Key)", group: "A. 自然电影光", def: "布光协议：主亮面由雪地大面积反射托起；阴影偏冷、边缘柔和，人物下颌和衣褶会被地面补光打开。禁止纯白无细节过曝，必须保留冷空气和雪面反射的物理证据。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "snow_reflection", "cold_air"], categoryFit: FIT_NATURAL }),

  lp({ id: "lp_night_neon", name: "夜景霓虹 (Night Neon Lighting)", group: "B. 城市夜景光", def: "布光协议：主光源来自城市招牌、橱窗、屏幕或路面反射；低调底色叠加局部彩色高光；空气可有雨雾、尾气或街头烟气。阴影应被彩光切开，禁止落成白天自然光或棚拍纯背景。", eras: ERA_FUTURE, eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "technological", "artificial_light", "urban_fixture"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_wet_asphalt_street", name: "湿沥青街灯 (Wet Asphalt Streetlight)", group: "B. 城市夜景光", def: "布光协议：主亮面来自路灯和湿沥青反射；人物脚边、轮廓和背景形成拉长光带；整体低调，局部有钠灯黄或冷白 LED。禁止干净影棚质感，必须保留城市地面反光。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "urban_fixture", "wet_reflection"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_storefront_reflection", name: "橱窗反光 (Storefront Reflection Light)", group: "B. 城市夜景光", def: "布光协议：主光来自橱窗、玻璃门和店内陈列灯；人物同时被正面玻璃反射和侧面城市光夹住；画面有透明层、反射层和室内外混光。禁止单一平光，必须有玻璃证据。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "glass_reflection", "urban_fixture"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_subway_cold_light", name: "地铁冷光 (Subway Cold Light)", group: "B. 城市夜景光", def: "布光协议：主光为地铁站或车厢顶部的连续冷白灯；人物皮肤有轻微青灰感，金属和瓷砖反射增强空间冷硬度；阴影浅但不温暖。禁止古典火光或自然天光解释。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "urban_fixture", "fluorescent"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_convenience_night", name: "便利店夜光 (Convenience Store Night Light)", group: "B. 城市夜景光", def: "布光协议：主光来自便利店内部均匀冷白灯和门口溢出光；室外保持夜色，人物被门框或货架光照亮；画面有现代日常孤独感。禁止过度赛博化，保留现实商业灯具。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "commercial_light", "urban_life"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_taxi_headlight_rain", name: "雨夜车灯 (Rainy Taxi Headlight)", group: "B. 城市夜景光", def: "布光协议：主光源为车灯、尾灯和雨滴折射；人物边缘被低位光扫亮，背景形成红黄拖影；空气由雨幕显影。禁止无车灯证据的普通夜景，必须有低位光束和湿反射。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "vehicle_light", "rain_refraction"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_rooftop_city_glow", name: "天台城市辉光 (Rooftop City Glow)", group: "B. 城市夜景光", def: "布光协议：主环境光来自远处城市天际线和广告屏漫反射；人物主体偏暗，轮廓由远处灯海托出；天空不全黑，有城市光污染。禁止室内棚拍光，空间必须可读为高处夜景。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "urban_glow", "night"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lp_sodium_noir_street", name: "钠灯黑街 (Sodium Noir Street)", group: "B. 城市夜景光", def: "布光协议：主光为高压钠灯或老旧街灯，形成脏黄光池；人物进入光池边缘，背景保持黑暗和潮湿反射；色温偏病态暖。禁止清澈蓝调或高级棚拍，必须有廉价城市夜色。", eras: ["industrial", "modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "sodium_vapor", "urban_fixture"], categoryFit: FIT_URBAN_NIGHT }),

  lp({ id: "lp_venetian_noir", name: "百叶窗黑色电影光 (Venetian Blind Noir)", group: "C. 黑色电影光", def: "布光协议：主光穿过百叶窗或栅格，脸和身体被横向切成明暗条带；背景低照度，烟尘让光束可见。禁止柔和均匀补光，阴影必须具有审讯和隐藏关系。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "hard_shadow", "window_projection"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_hard_side_noir", name: "硬侧光阴阳脸 (Hard Side Noir)", group: "C. 黑色电影光", def: "布光协议：主光从 90 度侧面切入，一半脸保留亮面，一半落入深阴影；反差高，背景信息压低。禁止正面美容光，必须让身份显得不完全可读。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "hard_shadow", "low_key"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_interrogation_lamp", name: "审讯灯 (Interrogation Lamp)", group: "C. 黑色电影光", def: "布光协议：主光来自近距离裸灯或桌面强灯，直接压在脸部、手部或证物上；周围空间急速坠暗；空气可有烟尘。禁止温馨室内光，必须有权力压迫和局部过亮。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "bare_bulb", "interrogation"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_doorway_slit_noir", name: "门缝切光 (Door-Slit Noir Light)", group: "C. 黑色电影光", def: "布光协议：主光从半开的门缝或狭窄通道切入，形成一条竖向亮带；主体部分被光捕捉，其他部分隐入暗处。禁止大面积开窗光，光必须像线索一样进入画面。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "slit_light", "low_key"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_single_overhead_noir", name: "孤顶灯暗室 (Single Overhead Dark Room)", group: "C. 黑色电影光", def: "布光协议：唯一主光来自头顶裸灯或吊灯，眼窝、下颌和衣领形成重阴影；地面有小光池，四周坠入黑暗。禁止多点均匀布光，必须有孤立和审判感。", eras: ERA_PRE_ELECTRIC, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "overhead_light", "low_key"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_smoked_room_noir", name: "烟室光束 (Smoked Room Beam)", group: "C. 黑色电影光", def: "布光协议：主光穿过烟、尘或雾形成可见光束；人物处在光束边缘而非中央；明暗关系由空气厚度组织。禁止干净透明空气，必须有可见介质承载光。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "smoke", "visible_beam"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_stairwell_shadow", name: "楼梯间斜影 (Stairwell Oblique Shadow)", group: "C. 黑色电影光", def: "布光协议：主光从楼梯井、栏杆或逃生通道斜切，形成阶梯状几何阴影；人物被结构线切割。禁止自然风景光，空间必须有建筑压迫和纵深。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "architectural_shadow", "urban_fixture"], categoryFit: FIT_NOIR }),
  lp({ id: "lp_police_flash_noir", name: "警灯闪烁光 (Police Flash Noir)", group: "C. 黑色电影光", def: "布光协议：主光由红蓝警灯间歇扫过主体和墙面；明暗不稳定，身份在闪烁中被暴露又隐藏；背景低调。禁止稳定温暖光，必须有外部权力正在逼近的光学证据。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "emergency_light", "urban_fixture"], categoryFit: FIT_NOIR }),

  lp({ id: "lp_studio_hard_light", name: "棚拍硬光 (Studio Hard Light)", group: "D. 棚拍时尚光", def: "布光协议：主光为受控硬光，阴影边缘清晰，轮廓和颧骨结构被强化；背景可干净或单色。禁止自然随机光，必须看出摄影棚的控制感和强造型能力。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "hard_shadow"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_beauty_softbox", name: "美容柔光箱 (Beauty Softbox Light)", group: "D. 棚拍时尚光", def: "布光协议：主光为大面积柔光箱，正面或四分之三方向打亮皮肤；阴影极软，眼神光清晰；瑕疵被柔化但体积保留。禁止黑色电影深阴影和粗糙环境光。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "beauty_light"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_butterfly_glamour", name: "蝴蝶光魅影 (Butterfly Glamour Light)", group: "D. 棚拍时尚光", def: "布光协议：主光从正上前方落下，鼻下形成小蝶形阴影；颧骨、唇部和下颌线被精确塑形；下方可用弱反光板。禁止侧面分割光抢主导。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "portrait_lighting"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_ring_eye_light", name: "环形眼神光 (Ring Catchlight)", group: "D. 棚拍时尚光", def: "布光协议：主光或补光为环形灯，瞳孔出现环状眼神光；面部阴影浅，皮肤表现干净而现代。禁止古典烛光或自然窗光解释，画面必须体现近现代摄影设备感。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "catchlight"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_magazine_high_gloss", name: "杂志高光大片 (Magazine High-Gloss Light)", group: "D. 棚拍时尚光", def: "布光协议：多点受控光让皮革、金属、发丝和皮肤产生干净高光；明暗结构高反差但不脏；背景服务人物轮廓。禁止环境叙事抢主导，重点是高级商业摄影质感。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "glossy_highlight"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_color_gel_fashion", name: "彩色胶片棚光 (Color Gel Fashion Light)", group: "D. 棚拍时尚光", def: "布光协议：主光和轮廓光使用彩色滤片，形成受控的红、蓝、紫或青色边缘；色彩来自灯光而非整体配色替代。禁止无来源的全图渐变，必须有灯位和轮廓证据。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "controlled_studio", "color_gel"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_high_contrast_editorial", name: "高反差时装光 (High-Contrast Editorial Light)", group: "D. 棚拍时尚光", def: "布光协议：主光强、暗部深、身体和服装形成清晰剪影；高光集中在面部、肩线或服装结构上；背景压低。禁止柔雾甜美，必须有杂志大片式锐度和姿态力量。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "editorial"], categoryFit: FIT_STUDIO }),
  lp({ id: "lp_white_cyc_clean", name: "白棚无缝高调 (White Cyclorama High Key)", group: "D. 棚拍时尚光", def: "布光协议：主空间为无缝白棚，高调照明均匀但保留脚下和衣褶浅阴影；人物轮廓干净、商品化、可审阅。禁止环境场景化，背景不能夺取主体。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "controlled_studio", "high_key"], categoryFit: FIT_STUDIO }),

  lp({ id: "lp_rembrandt_portrait", name: "伦勃朗肖像光 (Rembrandt Portrait Light)", group: "E. 古典绘画光", def: "布光协议：主光从高侧方进入，暗面脸颊保留三角亮区；背景压暗，人物脸部体积和精神重量成为核心。禁止均匀平光，必须保留古典肖像的明暗雕塑感。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "classical_portrait"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_caravaggio_tenebrism", name: "卡拉瓦乔暗光 (Caravaggio Tenebrism)", group: "E. 古典绘画光", def: "布光协议：黑暗占据大部分画面，强光只击中脸、手、武器或仪式物；明暗边界戏剧化，像舞台中的神迹。禁止现代霓虹和均匀补光，必须有深黑背景和光的道德压力。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "tenebrism", "low_key"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_vermeer_window", name: "维米尔窗光 (Vermeer Window Light)", group: "E. 古典绘画光", def: "布光协议：主光来自一侧窗户，照亮脸、手和桌面物件；背景安静、空气细腻、阴影柔和；画面有室内日常的沉静秩序。禁止强戏剧硬光和未来设备光。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "window_light", "interior"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_cathedral_top_light", name: "教堂天顶光 (Cathedral Overhead Light)", group: "E. 古典绘画光", def: "布光协议：主光从高窗、天窗或穹顶落下，形成垂直光柱和尘埃显影；人物被光从上方审视。禁止普通室内灯解释，必须有神圣建筑或高处开口的空间依据。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "sacred_architecture", "visible_beam"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_oil_warm_window", name: "油画暖窗光 (Oil Painting Warm Window)", group: "E. 古典绘画光", def: "布光协议：低角度暖窗光擦过皮肤、布料、木质和金属，阴影偏棕金色；画面有油画般厚度但光源必须物理成立。禁止全图滤镜化，暖色只来自窗口和反射。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_window", "painterly"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_candle_chiaroscuro", name: "烛光明暗对照 (Candle Chiaroscuro)", group: "E. 古典绘画光", def: "布光协议：小范围烛光照亮脸、手和器物，背景落入深棕黑；明暗对照清楚但边缘有火光柔化。禁止现代冷白灯，光源必须可见或由烛台、灯盏解释。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "fire_light", "chiaroscuro"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_renaissance_courtyard", name: "文艺复兴庭院光 (Renaissance Courtyard Light)", group: "E. 古典绘画光", def: "布光协议：主光来自庭院上方天光和浅色墙面反射；人物被建筑围合中的柔亮光托起；阴影稳定、秩序化。禁止现代街灯或强霓虹，必须有石墙、拱廊或庭院反射逻辑。", eras: ["slave", "feudal", "early_modern", "industrial", "timeless"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "courtyard_reflection", "architecture"], categoryFit: FIT_CLASSIC }),
  lp({ id: "lp_baroque_gold_dark", name: "巴洛克金暗光 (Baroque Gold Dark Light)", group: "E. 古典绘画光", def: "布光协议：金色局部高光从黑暗中挑出丝绸、金属、皮肤和权力符号；背景深且厚重；光像舞台幕布打开的一瞬。禁止清淡自然光，必须有奢华材质和低调背景。", eras: ["slave", "feudal", "early_modern", "industrial", "timeless"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "gold_highlight", "low_key"], categoryFit: FIT_CLASSIC }),

  lp({ id: "lp_candle_ritual", name: "烛火仪式 (Candle Ritual Light)", group: "F. 仪式火光", def: "布光协议：主光来自烛群、小火点或灯盏阵列；脸、手、符号和器物被暖光局部照亮，四周保持暗部。禁止变成温馨家居光，必须保留仪式中心和火光闪烁。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "fire_light", "ritual"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_torch_procession", name: "火把夜行 (Torch Procession Light)", group: "F. 仪式火光", def: "布光协议：主光为移动火把，光源低而不稳定；人物轮廓被一串火点依次扫亮，背景保持深夜。禁止稳定棚拍光，必须有移动火光和队列或通道感。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "fire_light", "moving_light"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_altar_fire_pool", name: "祭坛火池光 (Altar Fire Pool)", group: "F. 仪式火光", def: "布光协议：主光从祭坛、火盆或地面火池向上照亮人物下颌、手臂和祭器；阴影上翻，空间具有危险和神圣混合感。禁止普通壁炉光，必须有仪式场域证据。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 2, realityTags: ["realistic", "stylized", "physical_light", "ritual_fire"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_incense_smoke_light", name: "香火烟光 (Incense Smoke Light)", group: "F. 仪式火光", def: "布光协议：烛光、油灯或天光穿过香烟，形成柔软光束和漂浮层次；人物被烟气半遮半显。禁止清澈空气和无烟硬光，必须让香火成为光的介质。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "incense_smoke", "visible_beam"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_fireplace_afterglow", name: "壁炉余光 (Fireplace Afterglow)", group: "F. 仪式火光", def: "布光协议：主光来自低位壁炉或炭火余烬，光线暖、低、跳动；人物一侧脸和手部被火光托起，背后渐暗。禁止强正面灯，必须有低位热源和室内暗部。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "fire_light", "interior"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_lantern_warm", name: "灯笼暖光 (Lantern Warm Light)", group: "F. 仪式火光", def: "布光协议：主光来自纸灯、宫灯、油灯或手提灯；光质被灯罩柔化，形成暖色小光域；人物和衣纹被局部照亮。禁止无来源暖滤镜，必须能读出灯笼或灯罩结构。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "lantern_light", "warm_diffusion"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_bonfire_ceremony", name: "篝火仪式光 (Bonfire Ceremony Light)", group: "F. 仪式火光", def: "布光协议：主光来自室外篝火，人物面部下方和身体边缘被强暖光跳动照亮；背景是夜色或群体轮廓。禁止小烛光尺度，必须有开放火堆和粗粝阴影。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "bonfire", "ritual"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "lp_temple_oil_lamps", name: "寺庙油灯阵 (Temple Oil-Lamp Array)", group: "F. 仪式火光", def: "布光协议：大量小油灯形成点状暖光阵列，照亮台阶、神龛、器物和人物下缘；烟尘和金属反光增强神圣感。禁止现代灯带解释，必须保留手工火源证据。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "oil_lamp", "ritual"], categoryFit: FIT_FIRE_RITUAL }),

  lp({ id: "lp_lab_cold_light", name: "实验室冷光 (Laboratory Cold Light)", group: "G. 科幻实验光", def: "布光协议：主光来自冷白实验灯、玻璃隔间或操作台；明暗结构干净冷硬，反射集中在金属、玻璃、皮肤和设备边缘。禁止古典暖光，必须体现技术空间的功能性。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 2, realityTags: ["realistic", "technological", "physical_light", "clinical_artificial_light"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_surgical_shadowless", name: "手术室无影光 (Surgical Shadowless Light)", group: "G. 科幻实验光", def: "布光协议：主光来自手术无影灯或医疗阵列，强度高、阴影浅、肤色偏冷；人物被无处躲藏的功能光暴露。禁止戏剧性深阴影，除非作为局部设备遮挡。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "medical_light", "clinical"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_hologram_cyan", name: "全息青光 (Hologram Cyan Light)", group: "G. 科幻实验光", def: "布光协议：主光来自全息屏、界面投影或透明数据层；青蓝光照在脸、手和眼部，边缘有轻微数字散射。禁止无设备来源的魔法光，必须有界面或投影依据。", eras: ["contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "interface_light", "projection"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_scanner_red", name: "扫描红光 (Scanner Red Light)", group: "G. 科幻实验光", def: "布光协议：主光是窄条红色扫描线或检测光束，从脸、虹膜、手部或装备表面扫过；背景冷暗。禁止普通红滤镜，红色必须表现为检测、警戒或测量。", eras: ERA_FUTURE, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "scanner_light", "interface"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_server_room_blue", name: "机房蓝光 (Server Room Blue Light)", group: "G. 科幻实验光", def: "布光协议：主光来自服务器机柜、状态灯和冷通道顶灯；人物被蓝白反射分割，空间有规则设备纵深。禁止自然天空蓝解释，蓝光必须来自技术设施。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "technological", "physical_light", "server_room"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_reactor_glow", name: "反应堆辉光 (Reactor Core Glow)", group: "G. 科幻实验光", def: "布光协议：主光来自能量核心、反应堆或高危装置，底部或中心释放蓝绿强光；人物边缘被危险辉光切出。禁止温和科技感，必须有高风险能量源。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "hazard_light", "energy_core"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_cryo_chamber", name: "冷冻舱低温光 (Cryo Chamber Light)", group: "G. 科幻实验光", def: "布光协议：主光来自冷冻舱、玻璃罩或低温设备内部；蓝白光被霜气和冷雾散射；人物皮肤和材质带低温反射。禁止火光和暖色主导，必须有冷凝或霜雾证据。", eras: ["near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "cold_light", "cryo"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lp_cleanroom_grid", name: "洁净室网格光 (Cleanroom Grid Light)", group: "G. 科幻实验光", def: "布光协议：主光来自天花网格灯和白色无尘环境，反差低但空间冷硬；人物制服、手套、玻璃和设备边缘清楚。禁止脏乱废土光，必须保持洁净、规训和工业医疗秩序。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "technological", "physical_light", "cleanroom"], categoryFit: FIT_SCIENCE }),

  lp({ id: "lp_wasteland_dust_light", name: "废土尘光 (Wasteland Dust Light)", group: "H. 废土灾变光", def: "布光协议：主光为脏暖逆光或低角度烈日，穿过尘土显出光柱；人物边缘粗糙发亮，正面由尘面反光补出少量细节。禁止干净棚拍感，必须有颗粒、磨损和热空气。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "dust", "hazard"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_nuclear_winter_gray", name: "核冬天灰光 (Nuclear Winter Gray Light)", group: "H. 废土灾变光", def: "布光协议：主光来自被灰尘和云层遮蔽的天空；画面低饱和、低对比、冷灰漫射；人物像被环境粉尘吞没。禁止鲜艳霓虹和温暖日落，必须有灾后大气遮蔽。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "ash_sky", "disaster"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_sandstorm_backlight", name: "沙暴逆光 (Sandstorm Backlight)", group: "H. 废土灾变光", def: "布光协议：主光从沙尘后方穿透，主体成为粗糙剪影；空气充满飞砂，暗部被暖尘反射打开。禁止清澈空气，必须让沙尘成为光的实体。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "sandstorm", "visible_air"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_ember_fire_aftermath", name: "火灾余烬光 (Ember Aftermath Light)", group: "H. 废土灾变光", def: "布光协议：主光来自废墟中的余火、火星和红热金属；人物边缘有断续红橙反光，背景浓烟压暗。禁止完整篝火温馨感，必须是灾后残光。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "ember", "smoke"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_bunker_emergency", name: "地堡应急灯 (Bunker Emergency Light)", group: "H. 废土灾变光", def: "布光协议：主光来自红色或冷白应急灯，局部照明、断续闪烁、空间低矮压迫；人物被设备和墙面反射切割。禁止开放自然光，必须有地下或避难设施证据。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "emergency_light", "bunker"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_explosion_edge", name: "爆炸边缘光 (Explosion Edge Light)", group: "H. 废土灾变光", def: "布光协议：主亮面来自远处爆炸、火墙或冲击波边缘；人物正面偏暗，轮廓被强暖光瞬间切出；空气中有烟尘和碎屑。禁止持续稳定照明，必须像灾难瞬间。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "explosion_light", "hazard"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_toxic_green_industrial", name: "毒性工业绿光 (Toxic Industrial Green)", group: "H. 废土灾变光", def: "布光协议：主光来自化学泄漏、荧光警示或污染设备，绿色局部反射照亮皮肤和金属；背景保持灰暗工业质感。禁止自然森林绿，绿色必须是危险物证。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "toxic_light", "industrial"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lp_ash_sky_sun", name: "灰烬天光 (Ash Sky Sun)", group: "H. 废土灾变光", def: "布光协议：太阳被灰烬天空过滤成暗红或浑黄圆盘；画面整体压暗，边缘有粉尘散射；人物像站在灾后大气中。禁止正常晴天蓝天，必须保留灰烬遮蔽。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "ash_sky", "dust"], categoryFit: FIT_WASTELAND }),

  lp({ id: "lp_dream_fog_light", name: "梦境雾光 (Dream Fog Light)", group: "I. 梦境超现实光", def: "布光协议：主光没有单一硬来源，而是被雾气均匀散开；空间边界变软，人物轮廓像从空气里浮出。禁止写实强方向硬光，必须有梦境般的扩散和边界不稳定。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "diffusion", "dreamlike"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_moon_white_illusion", name: "月白幻光 (Moon-White Illusory Light)", group: "I. 梦境超现实光", def: "布光协议：主光像过亮月光或记忆中的白光，冷而柔，照出面部和衣物边缘；阴影浅但不现实。禁止普通路灯解释，光必须带有非日常的静止感。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "moonlight", "dreamlike"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_floating_light_dust", name: "漂浮光尘 (Floating Light Dust)", group: "I. 梦境超现实光", def: "布光协议：主亮点来自悬浮光尘、微粒或不可见反射；人物被点状光粒包围，空气本身成为发光层。禁止普通灰尘光束，光尘必须具有轻微非现实性。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "light_particles", "air_medium"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_sourceless_soft", name: "无源柔光 (Sourceless Soft Glow)", group: "I. 梦境超现实光", def: "布光协议：画面被无法定位的柔光托起，没有明确灯具、太阳或火源；阴影极浅，空间像心理场。禁止用于硬写实档，除非作为幻觉、梦、神性或记忆折译。", eras: ["timeless", "mythic", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 4, realityTags: ["nonreal", "surreal", "sourceless_light", "dreamlike"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_prism_scatter", name: "棱镜散射光 (Prismatic Scatter Light)", group: "I. 梦境超现实光", def: "布光协议：主光经过水晶、玻璃、镜面或非现实介质散成彩色边缘；人物轮廓出现碎虹和多层反射。禁止整图彩虹滤镜，色散必须来自可读的折射关系。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "prismatic_refraction", "optical"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_memory_overexposed", name: "记忆过曝 (Memory Overexposed Light)", group: "I. 梦境超现实光", def: "布光协议：亮部故意溢出，像记忆被烧白；主体边缘和背景局部消失，但关键面部或姿态仍可读。禁止普通拍坏的过曝，必须服务记忆、幻觉或情绪断片。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "overexposure", "memory"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_underwater_dream", name: "水下梦光 (Underwater Dream Light)", group: "I. 梦境超现实光", def: "布光协议：主光像从水面折射下来，波纹在脸和衣物上缓慢游动；空气逻辑可被替换为水汽或梦境介质。禁止干燥清晰光，必须有漂浮、折射和失重感。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "water_refraction", "dreamlike"], categoryFit: FIT_DREAM }),
  lp({ id: "lp_shadowless_liminal", name: "阈限无影光 (Shadowless Liminal Light)", group: "I. 梦境超现实光", def: "布光协议：空间被均匀无影光填满，像走廊、白房间或心理边界；主体清楚但不自然，缺少真实光源方向。禁止自然室外解释，必须作为抽象、梦境或阈限空间使用。", eras: ["modern", "contemporary", "near_future", "far_future", "timeless"], eraMode: "specific", ontologyLevel: 4, realityTags: ["nonreal", "surreal", "liminal", "shadowless"], categoryFit: FIT_DREAM }),

  lp({ id: "lp_flashlight_cone", name: "手电筒锥光 (Flashlight Cone)", group: "J. 恐怖悬疑光", def: "布光协议：主光为手持手电形成窄锥形光束；画面大部分保持黑暗，人物或线索被局部照亮；空气可显出灰尘。禁止大面积补光，必须保留未知黑区。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "flashlight", "low_key"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_basement_bare_bulb", name: "地下室裸灯 (Basement Bare Bulb)", group: "J. 恐怖悬疑光", def: "布光协议：主光来自低瓦数裸灯或摇晃吊灯，亮度集中、边缘衰减快；墙面粗糙、地面阴冷。禁止温馨家居灯，必须有低天花和压迫空间。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "bare_bulb", "basement"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_hospital_cold_horror", name: "病房冷白光 (Hospital Cold White)", group: "J. 恐怖悬疑光", def: "布光协议：主光为医院或病房冷白灯，肤色苍白、阴影浅但不舒适；金属、瓷砖和塑料反射冷硬。禁止暖色治愈感，必须让清洁变成不安。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "clinical", "cold_light"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_red_alarm_horror", name: "红色警报光 (Red Alarm Light)", group: "J. 恐怖悬疑光", def: "布光协议：主光为红色警报灯、暗房安全灯或紧急信号；空间周期性变红，人物轮廓被危险色吞没。禁止浪漫红光，红色必须明确指向警告、禁区或危险。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "emergency_light", "warning"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_dark_corridor", name: "幽暗走廊光 (Dark Corridor Light)", group: "J. 恐怖悬疑光", def: "布光协议：远处小光源拉出长走廊纵深，前景暗、尽头亮；人物位于明暗交界，空间比人物更压迫。禁止开阔自然光，必须有走廊、门、墙或隧道结构。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "corridor", "low_key"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_lightning_snapshot", name: "闪电瞬照 (Lightning Snapshot)", group: "J. 恐怖悬疑光", def: "布光协议：主光来自瞬间闪电，短促高亮暴露人物、树影或建筑轮廓；下一刻回到黑暗。禁止持续蓝光，必须是天气事件造成的瞬时揭示。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "weather_light", "instant_flash"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_television_flicker", name: "电视闪烁光 (Television Flicker)", group: "J. 恐怖悬疑光", def: "布光协议：主光来自旧电视、监视器或屏幕闪烁，蓝白亮度不稳定地照在脸上；房间其他部分保持暗。禁止普通屏幕冷光，必须有闪烁、噪点或监控感。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 2, realityTags: ["semi_surreal", "physical_light", "screen_light", "flicker"], categoryFit: FIT_HORROR }),
  lp({ id: "lp_occult_backroom", name: "秘仪后室光 (Occult Backroom Light)", group: "J. 恐怖悬疑光", def: "布光协议：主光来自低位蜡烛、红灯或遮挡窗光，照亮符号、手、脸的一部分；背景保持不可知。禁止宏大神圣光，必须是狭小、隐秘、危险的后室照明。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 2, realityTags: ["stylized", "physical_light", "ritual", "low_key"], categoryFit: FIT_HORROR }),

  lp({ id: "lp_underwater_caustics", name: "水下焦散光 (Underwater Caustics)", group: "K. 水汽环境光", def: "布光协议：主光穿过水面形成游动焦散纹，投在脸、衣物、墙面或地面；色温偏冷，边缘流动。禁止普通蓝色滤镜，必须有水面折射的纹理证据。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 2, realityTags: ["realistic", "stylized", "physical_light", "water_caustics"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_fog_forest_scatter", name: "雾林散射光 (Fog Forest Scatter)", group: "K. 水汽环境光", def: "布光协议：主光被林中雾气扩散成可见层次，树干和人物轮廓逐层后退；阴影柔化但空间深度保留。禁止清澈硬阳光，必须有雾、树和空气厚度。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "fog", "ecological"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_steam_backlight", name: "蒸汽逆光 (Steam Backlight)", group: "K. 水汽环境光", def: "布光协议：主光从蒸汽、热气或排气后方穿透，人物边缘和背景管线被白雾显影；空间可工业也可街头。禁止干净空气，必须让蒸汽成为光的载体。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "steam", "visible_beam"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_snowfield_bounce", name: "雪原反射光 (Snowfield Bounce Light)", group: "K. 水汽环境光", def: "布光协议：大面积雪地把天光反射到人物下方，阴影冷而浅；空气透明或带雪雾，材质边缘有白色反光。禁止夏季暖尘光，必须有雪面和冷空气。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "snow_reflection", "cold_air"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_storm_car_headlight", name: "暴雨车灯光 (Storm Headlight Rain)", group: "K. 水汽环境光", def: "布光协议：车灯或探照灯穿过暴雨形成明亮光柱，雨线被逐条照出；人物边缘湿亮、正面局部过曝。禁止无雨普通车灯，必须有雨幕显影。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "rain", "vehicle_light"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_humid_window", name: "潮湿窗光 (Humid Window Light)", group: "K. 水汽环境光", def: "布光协议：主光透过凝露、雨痕或雾化玻璃进入室内；人物被软化的窗光照亮，背景有水痕散射。禁止清透窗光，必须有玻璃水汽改变光质。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "humid_glass", "window_light"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_misty_lake_dawn", name: "雾湖晨光 (Misty Lake Dawn)", group: "K. 水汽环境光", def: "布光协议：主光来自清晨低角度天光，水面和薄雾共同反射；人物轮廓被冷暖混合的湿空气托出。禁止城市霓虹和棚拍光，必须有水面、雾和清晨层次。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "mist", "water_reflection"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lp_waterfall_spray", name: "瀑布水雾光 (Waterfall Spray Light)", group: "K. 水汽环境光", def: "布光协议：主光穿过瀑布水雾和飞溅水珠，形成亮边、微虹和湿润高光；人物与环境被水汽包围。禁止干燥岩壁光，必须有强水汽和飞溅介质。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "spray", "water_refraction"], categoryFit: FIT_WATER_AIR }),

  lp({ id: "lp_boudoir_curtain_soft", name: "窗帘柔光 (Curtain Soft Boudoir Light)", group: "L. 私房风格", def: "布光协议：主光透过薄窗帘进入室内，柔化皮肤和织物边缘；明暗结构私密、低刺激，重点是身体轮廓、床品和空气质感。禁止露骨叙事，保持摄影审美和空间含蓄。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "window_light", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_bedside_warm", name: "床头暖灯 (Bedside Warm Lamp)", group: "L. 私房风格", def: "布光协议：主光来自床头灯或小台灯，暖光只照亮脸、肩线、手和织物；背景保持低照度。禁止廉价黄色滤镜，必须有灯罩、床品或墙面反射解释。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_lamp", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_darkroom_edge", name: "暗房边缘光 (Darkroom Edge Boudoir)", group: "L. 私房风格", def: "布光协议：主空间低照度，边缘光从窗缝、门缝或小灯切出身体和发丝轮廓；正面细节保留很少。禁止恐怖化或窥视叙事，光影只服务私密摄影质感。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "edge_light", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_film_grain", name: "胶片私房光 (Film Boudoir Light)", group: "L. 私房风格", def: "布光协议：主光柔弱、低对比，允许暗部颗粒和暖色偏移；人物轮廓、肌理和织物在胶片感低照度中显现。禁止过度磨皮和商业棚拍，保留自然瑕疵。", eras: ["industrial", "modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "film_grain", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_bathroom_steam", name: "浴室水汽光 (Bathroom Steam Light)", group: "L. 私房风格", def: "布光协议：主光通过浴室镜面、水汽或磨砂玻璃散射；皮肤、瓷砖和水滴产生柔亮高光。禁止露骨身体描写，重点是水汽、反射和含蓄空间。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "steam", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_low_key_skin", name: "低照度肌理光 (Low-Key Skin Texture Light)", group: "L. 私房风格", def: "布光协议：主光很弱，从侧面或低位擦过皮肤、发丝和织物；暗部占比高但边缘可读。禁止油腻高饱和，光必须克制、真实、偏摄影而非插画化。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "low_key", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_morning_sheet", name: "晨光床品 (Morning Sheet Light)", group: "L. 私房风格", def: "布光协议：清晨窗光掠过床品、皮肤和房间边缘；明暗轻柔，色温偏冷暖交界；重点是布料褶皱和安静身体轮廓。禁止情节化挑逗，保持生活化摄影。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "morning_window", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true }),
  lp({ id: "lp_boudoir_hotel_window_shadow", name: "酒店窗影私房光 (Hotel Window Shadow Boudoir)", group: "L. 私房风格", def: "布光协议：主光来自酒店窗户、半开的窗帘或城市夜色反射，形成柔暗窗影和局部高光；空间干净但带私密距离。禁止成人化直白叙事，只保留高级摄影感。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "hotel_window", "boudoir_aesthetic"], categoryFit: FIT_BOUDOIR, adminOnly: true })
];

// === 2. 光影基调 (Lighting Mood) - 极简基础矩阵 ===
// 核心逻辑：定义画面的明暗调性、对比度与硬度。不涉及光源方位。
// Skeletons: skel_high (高调), skel_low (低调), skel_mid (中调), skel_soft (软调), skel_hard (硬调)

export const CD_LIGHT_MOOD: LibraryItemDef[] = [
  // --- Group A. 高调 (High Key - 明亮、洁净、低反差) ---
  { id: "lm_high_std", name: "标准高调 (Standard High Key, bright airy minimal shadows)", group: "高调 (High Key)", def: "", skeletons: ["skel_high"] },
  { id: "lm_ethereal", name: "空灵/仙气 (Ethereal Glow, soft diffusion glowing highlights)", group: "高调 (High Key)", def: "", skeletons: ["skel_high", "skel_soft"] },
  { id: "lm_clinical", name: "无菌/纯白 (Clinical White, shadowless sterile cold light)", group: "高调 (High Key)", def: "", skeletons: ["skel_high", "skel_hard"] },
  { id: "lm_overexposed", name: "狂喜过曝 (Euphoric Overexposed, blinding blown-out highlights)", group: "高调 (High Key)", def: "", skeletons: ["skel_high"] },
  { id: "lm_pastel", name: "粉彩柔光 (Pastel Glow, soft high key gentle contrast)", group: "高调 (High Key)", def: "", skeletons: ["skel_high", "skel_soft"] },

  // --- Group B. 低调 (Low Key - 黑暗、沉重、高反差) ---
  { id: "lm_low_std", name: "标准低调 (Standard Low Key, dark moody prominent shadows)", group: "低调 (Low Key)", def: "", skeletons: ["skel_low"] },
  { id: "lm_chiaroscuro", name: "明暗对照 (Chiaroscuro, strong dramatic contrast)", group: "低调 (Low Key)", def: "", skeletons: ["skel_low", "skel_hard"] },
  { id: "lm_tenebrism", name: "暗色主义 (Tenebrism, extreme darkness small light pool)", group: "低调 (Low Key)", def: "", skeletons: ["skel_low", "skel_hard"] },
  { id: "lm_somber", name: "阴郁灰暗 (Somber Muted, desaturated heavy shadows)", group: "低调 (Low Key)", def: "", skeletons: ["skel_low", "skel_soft"] },
  { id: "lm_nocturnal", name: "深夜幽闭 (Nocturnal, natural darkness deep blues)", group: "低调 (Low Key)", def: "", skeletons: ["skel_low"] },

  // --- Group C. 中调 (Mid Tone - 平衡、写实、日常) ---
  { id: "lm_mid_std", name: "自然中调 (Natural Mid-Tone, balanced exposure realistic depth)", group: "中调 (Mid Tone)", def: "", skeletons: ["skel_mid"] },
  { id: "lm_documentary", name: "纪实光影 (Documentary Style, unaltered raw natural light)", group: "中调 (Mid Tone)", def: "", skeletons: ["skel_mid"] },
  { id: "lm_morning", name: "清晨柔和 (Morning Soft, gentle light medium contrast)", group: "中调 (Mid Tone)", def: "", skeletons: ["skel_mid", "skel_soft"] },
  { id: "lm_cloudy", name: "阴天漫射 (Overcast Diffused, even light minimal shadows)", group: "中调 (Mid Tone)", def: "", skeletons: ["skel_mid", "skel_soft"] },
  { id: "lm_indoor_warm", name: "室内温馨 (Indoor Warm, golden warmth comfortable contrast)", group: "中调 (Mid Tone)", def: "", skeletons: ["skel_mid", "skel_soft"] },

  // --- Group D. 软调 (Soft Light - 朦胧、漫反射、自然) ---
  { id: "lm_soft_diffusion", name: "极致漫射 (Soft Diffusion, zero hard edges glowing)", group: "软调 (Soft Light)", def: "", skeletons: ["skel_soft"] },
  { id: "lm_misty", name: "迷雾/朦胧 (Misty Haze, light scattering through vapor)", group: "软调 (Soft Light)", def: "", skeletons: ["skel_soft"] },
  { id: "lm_sfumato", name: "晕涂质感 (Sfumato, soft smoke-like transition of tones)", group: "软调 (Soft Light)", def: "", skeletons: ["skel_soft"] },
  { id: "lm_dreamy", name: "梦幻柔焦 (Dreamy Focus, blooming highlights romantic)", group: "软调 (Soft Light)", def: "", skeletons: ["skel_soft", "skel_high"] },
  { id: "lm_velvet", name: "丝绒阴影 (Velvet Shadow, deep but soft shadows matte texture)", group: "软调 (Soft Light)", def: "", skeletons: ["skel_soft", "skel_low"] },

  // --- Group E. 硬调 (Hard Light - 锐利、强烈、戏剧性) ---
  { id: "lm_hard_std", name: "硬朗光线 (Hard Contrast, sharp shadow edges)", group: "硬调 (Hard Light)", def: "", skeletons: ["skel_hard"] },
  { id: "lm_stark", name: "残酷直白 (Stark Reality, unforgiving bright sharp shadows)", group: "硬调 (Hard Light)", def: "", skeletons: ["skel_hard", "skel_mid"] },
  { id: "lm_noir_shadow", name: "硬核阴影 (Noir Shadow, graphic black and white razor edges)", group: "硬调 (Hard Light)", def: "", skeletons: ["skel_hard", "skel_low"] },
  { id: "lm_glitch_chroma", name: "色散干扰 (Chroma Glitch, prism split on hard edges)", group: "硬调 (Hard Light)", def: "", skeletons: ["skel_hard"] },
  { id: "lm_sun_harsh", name: "烈日曝晒 (Harsh Sunlight, direct sun high impact)", group: "硬调 (Hard Light)", def: "", skeletons: ["skel_hard"] }
];

// === 3. 光源锚点 (Light Source Anchor) ===
export const CD_LIGHT_TYPE: LibraryItemDef[] = [
  // --- Group A. 通用天光 (Universal Sky Light) ---
  { id: "lt_golden_hour", name: "黄金时刻 (Golden Hour Warm Sun)", group: "A. 通用天光", def: "" },
  { id: "lt_blue_hour", name: "蓝调时刻 (Blue Hour Twilight)", group: "A. 通用天光", def: "" },
  { id: "lt_harsh_noon", name: "正午烈日 (Harsh Noon Overhead Sun)", group: "A. 通用天光", def: "" },
  { id: "lt_overcast_sky", name: "阴天漫射 (Overcast Diffused Light)", group: "A. 通用天光", def: "" },
  { id: "lt_moonlight_pale", name: "苍白月光 (Pale Moonlight)", group: "A. 通用天光", def: "" },
  { id: "lt_starlight_void", name: "星光 (Faint Starlight)", group: "A. 通用天光", def: "" },
  { id: "lt_lightning_bolt", name: "雷电 (Lightning Flash)", group: "A. 通用天光", def: "" },
  { id: "lt_rainbow_refraction", name: "彩虹光 (Rainbow Refraction)", group: "A. 通用天光", def: "" },
  { id: "lt_aurora_dance", name: "极光 (Aurora Borealis)", group: "A. 通用天光", def: "" },

  // --- Group B. 前电力火光 (Pre-Electric Fire Light) ---
  { id: "lt_candlelight_warm", name: "摇曳烛火 (Flickering Candlelight)", group: "B. 前电力火光", def: "" },
  { id: "lt_fireplace_glow", name: "壁炉余温 (Fireplace Glow)", group: "B. 前电力火光", def: "" },
  { id: "lt_oil_lantern", name: "煤油提灯 (Oil Lantern Flame)", group: "B. 前电力火光", def: "" },
  { id: "lt_matches_strike", name: "火柴微光 (Matchstick Flare)", group: "B. 前电力火光", def: "" },
  { id: "lt_incense_burning", name: "线香红点 (Incense Ember)", group: "B. 前电力火光", def: "" },

  // --- Group C. 工业城市光源 (Industrial / Urban Light) ---
  { id: "lt_sodium_vapor", name: "高压钠灯 (Sodium Vapor Street Light)", group: "C. 工业城市光源", def: "" },
  { id: "lt_mercury_vapor", name: "汞灯 (Mercury Vapor Green Light)", group: "C. 工业城市光源", def: "" },
  { id: "lt_fluorescent_flicker", name: "日光灯 (Fluorescent Flicker)", group: "C. 工业城市光源", def: "" },
  { id: "lt_street_lamp_led", name: "LED路灯 (White LED Street Lamp)", group: "C. 工业城市光源", def: "" },
  { id: "lt_searchlight_beam", name: "探照灯 (Searchlight Beam)", group: "C. 工业城市光源", def: "" },
  { id: "lt_construction_flood", name: "工地射灯 (Construction Floodlight)", group: "C. 工业城市光源", def: "" },
  { id: "lt_lighthouse_sweep", name: "灯塔光柱 (Lighthouse Sweep)", group: "C. 工业城市光源", def: "" },
  { id: "lt_night_lamp", name: "床头小灯 (Nightstand Lamp)", group: "C. 工业城市光源", def: "" },
  { id: "lt_fridge_light", name: "冰箱灯 (Fridge Interior Light)", group: "C. 工业城市光源", def: "" },

  // --- Group D. 现代数字光源 (Modern / Digital Light) ---
  { id: "lt_neon_tube", name: "霓虹灯管 (Neon Tube Light)", group: "D. 现代数字光源", def: "" },
  { id: "lt_screen_glow_blue", name: "屏幕冷光 (Blue Screen Glow)", group: "D. 现代数字光源", def: "" },
  { id: "lt_led_panel", name: "LED 矩阵 (LED Matrix)", group: "D. 现代数字光源", def: "" },
  { id: "lt_hologram_cyan", name: "全息青光 (Cyan Hologram)", group: "D. 现代数字光源", def: "" },
  { id: "lt_uv_blacklight", name: "紫光灯 (UV Blacklight)", group: "D. 现代数字光源", def: "" },
  { id: "lt_scanner_red", name: "红激光扫描 (Laser Scanner)", group: "D. 现代数字光源", def: "" },
  { id: "lt_fiber_glow", name: "光纤发光 (Fiber Optic Glow)", group: "D. 现代数字光源", def: "" },
  { id: "lt_infrared_night", name: "红外夜视 (Infrared Night Vision)", group: "D. 现代数字光源", def: "" },
  { id: "lt_smart_glass", name: "智能变色玻璃 (Smart Glass Tint)", group: "D. 现代数字光源", def: "" },
  { id: "lt_strobe_club", name: "频闪灯 (Strobe Light)", group: "D. 现代数字光源", def: "" },
  { id: "lt_projector_beam", name: "投影光束 (Projector Beam)", group: "D. 现代数字光源", def: "" },

  // --- Group E. 工业实验危险光 (Industrial / Experimental Hazard Light) ---
  { id: "lt_explosion_burst", name: "爆炸火光 (Explosion Burst)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_arc_welding", name: "电焊弧光 (Welding Arc)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_laser_beam_red", name: "相干激光 (Laser Beam)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_magma_glow", name: "熔岩红光 (Magma Glow)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_nuclear_cherenkov", name: "切连科夫辐射 (Cherenkov Blue Radiation)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_flamethrower_jet", name: "喷火喷射 (Flamethrower Jet)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_plasma_ball", name: "等离子球 (Plasma Ball)", group: "E. 工业实验危险光", def: "" },
  { id: "lt_tesla_arc", name: "特斯拉电弧 (Tesla Coil Arc)", group: "E. 工业实验危险光", def: "" },

  // --- Group F. 神话超现实光源 (Mythic / Surreal Light) ---
  { id: "lt_biolum_forest", name: "荧光森林 (Bioluminescence)", group: "F. 神话超现实光源", def: "" },
  { id: "lt_spirit_wisp", name: "鬼火 (Will-o'-the-wisp)", group: "F. 神话超现实光源", def: "" },
  { id: "lt_magic_rune_glow", name: "符文发光 (Magic Rune Glow)", group: "F. 神话超现实光源", def: "" },
  { id: "lt_holy_halo", name: "神圣光环 (Divine Halo)", group: "F. 神话超现实光源", def: "" },
  { id: "lt_void_sink", name: "虚空黑洞 (Void Light Absorption)", group: "F. 神话超现实光源", def: "" },
  { id: "lt_willow_light", name: "萤火 (Fireflies Light)", group: "F. 神话超现实光源", def: "" }
];

// === 4. 布光方案 (Lighting Setup) ===
// 核心逻辑：定义光源的物理位置与投射角度。
export const CD_LIGHT_DIRECTION: LibraryItemDef[] = [
    { id: "ld_frontal", name: "正面顺光 (Frontal Lighting)", group: "布光方案", def: "", core: "参考：证件照 / 韦斯·安德森 (Flat Look)" },
    { id: "ld_side_90", name: "90° 侧光 (Side Lighting)", group: "布光方案", def: "", core: "参考：黑色电影 / 阴阳脸 (Film Noir)" },
    { id: "ld_rembrandt", name: "伦勃朗光 (Rembrandt Lighting)", group: "布光方案", def: "", core: "参考：古典肖像 / 脸颊三角光区" },
    { id: "ld_butterfly", name: "蝴蝶光 (Butterfly Lighting)", group: "布光方案", def: "", core: "参考：派拉蒙光 / 黛德丽 / 美容大片" },
    { id: "ld_loop", name: "环形光 (Loop Lighting)", group: "布光方案", def: "", core: "参考：标准人像，鼻侧小阴影" },
    { id: "ld_split", name: "分割光 (Split Lighting)", group: "布光方案", def: "", core: "参考：戏剧性侧光，半脸全黑" },
    { id: "ld_broad", name: "宽光 (Broad Lighting)", group: "布光方案", def: "", core: "参考：照亮受光面，显脸宽" },
    { id: "ld_overhead", name: "垂直顶光 (Top Lighting)", group: "布光方案", def: "", core: "参考：《教父》 / 骷髅眼窝阴影" },
    { id: "ld_bottom", name: "脚光/鬼光 (Bottom Lighting)", group: "布光方案", def: "", core: "参考：恐怖片 / 弗兰肯斯坦" },
    { id: "ld_backlight", name: "正逆光 (Backlighting)", group: "布光方案", def: "", core: "参考：剪影 / ET / 神圣光环" },
    { id: "ld_side_rim", name: "边缘轮廓光 (Rim Lighting)", group: "布光方案", def: "", core: "参考：勾勒轮廓 / 主体分离" },
    { id: "ld_kicker", name: "侧后踢光 (Kicker Light)", group: "布光方案", def: "", core: "参考：好莱坞发光 / 增强面部立体感" },
    { id: "ld_omni", name: "漫射环境光 (Ambient Lighting)", group: "布光方案", def: "", core: "参考：阴天 / 柔光箱 / 无影" },
    { id: "ld_bg_only", name: "背景独立光 (Background Light)", group: "布光方案", def: "", core: "参考：剪影效果 / 空间深度" },
    { id: "ld_3point", name: "三点布光 (3-Point Lighting)", group: "布光方案", def: "", core: "参考：演播室标准 / 主光+辅光+轮廓光" }
];

// === 5. 光投影形状 (Light Projection Shape/Gobo) - 48 Items ===
// 核心逻辑：定义光线投射在物体或背景上的具体形状与纹理 (Gobo / Cucoloris)。
export const CD_LIGHT_SHAPE: LibraryItemDef[] = [
    // --- Group A: 窗影与建筑 (Window & Architecture) - 12 ---
    { id: "ls_venetian", name: "百叶窗形 (Venetian Blind Shape, noir stripes of light and shadow)", group: "A. 窗影建筑", def: "" },
    { id: "ls_cross_win", name: "十字窗棂形 (Cross Window Shape, distinct cross-shaped shadow frame)", group: "A. 窗影建筑", def: "" },
    { id: "ls_arch_portal", name: "拱形门洞形 (Arched Portal Shape, curved doorway silhouette)", group: "A. 窗影建筑", def: "" },
    { id: "ls_french_door", name: "法式长窗形 (French Door Shape, tall multiple rectangular blocks of light)", group: "A. 窗影建筑", def: "" },
    { id: "ls_prison_bar", name: "铁窗栅栏形 (Prison Bar Shadow, vertical parallel lines of hard shadow)", group: "A. 窗影建筑", def: "" },
    { id: "ls_stained_glass", name: "彩绘玻璃形 (Stained Glass Pattern, colored mosaic patterns projected)", group: "A. 窗影建筑", def: "" },
    { id: "ls_skylight_sq", name: "天窗方块形 (Skylight Square Shape, bright square of light from above)", group: "A. 窗影建筑", def: "" },
    { id: "ls_double_sash", name: "双悬窗影形 (Double Sash Shadow, window frame shadow with divider)", group: "A. 窗影建筑", def: "" },
    { id: "ls_rose_window", name: "玫瑰花窗形 (Rose Window Pattern, intricate circular gothic tracery)", group: "A. 窗影建筑", def: "" },
    { id: "ls_shutter_slat", name: "半开百叶形 (Shutter Slat Shape, angled slats thin light strips)", group: "A. 窗影建筑", def: "" },
    { id: "ls_door_slit", name: "门缝条光形 (Doorway Slit Shape, single tall narrow vertical beam)", group: "A. 窗影建筑", def: "" },
    { id: "ls_keyhole", name: "钥匙孔光形 (Keyhole Light Shape, distinct keyhole-shaped beam)", group: "A. 窗影建筑", def: "" },

    // --- Group B: 自然与植物 (Nature & Foliage) - 12 ---
    { id: "ls_dappled", name: "斑驳树影形 (Dappled Foliage Shape, random organic spots through leaves)", group: "B. 自然植物", def: "" },
    { id: "ls_palm_leaf", name: "棕榈叶影形 (Palm Leaf Shadow, distinct sharp frond shadows)", group: "B. 自然植物", def: "" },
    { id: "ls_branch", name: "枯枝投影形 (Bare Branch Shadow, spindly sharp vein-like lines)", group: "B. 自然植物", def: "" },
    { id: "ls_bamboo", name: "竹林光影形 (Bamboo Stalk Shadow, vertical lines with segmented nodes)", group: "B. 自然植物", def: "" },
    { id: "ls_fern", name: "蕨类叶影形 (Fern Leaf Pattern, complex repeating fractal shadows)", group: "B. 自然植物", def: "" },
    { id: "ls_petal", name: "花瓣投影形 (Flower Petal Shadow, soft rounded organic shapes)", group: "B. 自然植物", def: "" },
    { id: "ls_water_caust", name: "动态水纹形 (Water Caustics Pattern, moving web-like light lines)", group: "B. 自然植物", def: "" },
    { id: "ls_cloud_break", name: "云隙光斑形 (Cloud Break Shape, large soft-edged sunlight patches)", group: "B. 自然植物", def: "" },
    { id: "ls_forest_canopy", name: "林冠光点形 (Forest Canopy Pattern, dense scattered small light points)", group: "B. 自然植物", def: "" },
    { id: "ls_grass", name: "草丛光影形 (Grass Blade Shadow, fine messy vertical lines)", group: "B. 自然植物", def: "" },
    { id: "ls_raindrop", name: "雨滴投影形 (Raindrop Shadow, streaks of shadow from running water)", group: "B. 自然植物", def: "" },
    { id: "ls_lightning", name: "闪电裂纹形 (Lightning Fork Shape, jagged branching light fractals)", group: "B. 自然植物", def: "" },

    // --- Group C: 几何与工业 (Geometric & Industrial) - 12 ---
    { id: "ls_ind_grid", name: "工业网格形 (Industrial Grid Shape, uniform square mesh pattern)", group: "C. 几何工业", def: "" },
    { id: "ls_honeycomb", name: "蜂巢六角形 (Honeycomb Pattern, repeating hexagonal light cells)", group: "C. 几何工业", def: "" },
    { id: "ls_linear_slit", name: "线性窄缝形 (Linear Slit Shape, very thin laser-like light line)", group: "C. 几何工业", def: "" },
    { id: "ls_perf_dots", name: "圆孔阵列形 (Perforated Dot Shape, grid of small perfect circles)", group: "C. 几何工业", def: "" },
    { id: "ls_fan_blade", name: "风扇叶影形 (Fan Blade Shadow, rhythmic strobe-like spinning shadows)", group: "C. 几何工业", def: "" },
    { id: "ls_chain_link", name: "铁丝网影形 (Chain Link Pattern, diamond-shaped woven wire shadows)", group: "C. 几何工业", def: "" },
    { id: "ls_concentric", name: "同心圆光形 (Concentric Ring Shape, fresnel lens style light rings)", group: "C. 几何工业", def: "" },
    { id: "ls_tri_beam", name: "三角光束形 (Triangle Beam Shape, sharp geometric triangular projection)", group: "C. 几何工业", def: "" },
    { id: "ls_radial", name: "放射轮辐形 (Radial Spoke Shape, lines radiating from central point)", group: "C. 几何工业", def: "" },
    { id: "ls_pixel", name: "像素方块形 (Square Pixel Shape, blocky digital square shadows)", group: "C. 几何工业", def: "" },
    { id: "ls_barcode", name: "条形码影形 (Barcode Line Shape, varied width vertical lines)", group: "C. 几何工业", def: "" },
    { id: "ls_staircase", name: "阶梯投影形 (Staircase Shadow, zig-zag stepped shadow pattern)", group: "C. 几何工业", def: "" },

    // --- Group D: 抽象与特殊 (Abstract & Special) - 12 ---
    { id: "ls_abs_cut", name: "抽象切割形 (Abstract Cutout Shape, sharp angular modern art shadows)", group: "D. 抽象特殊", def: "" },
    { id: "ls_prism_frac", name: "棱镜碎裂形 (Prismatic Fractured Shape, broken rainbow-edged light shards)", group: "D. 抽象特殊", def: "" },
    { id: "ls_gradient", name: "柔和渐变形 (Soft Gradient Shape, smooth fall-off from light to dark)", group: "D. 抽象特殊", def: "" },
    { id: "ls_vignette", name: "暗角椭圆形 (Vignette Oval Shape, central spotlight with soft fade)", group: "D. 抽象特殊", def: "" },
    { id: "ls_bokeh", name: "散景光斑形 (Bokeh Circle Shape, out-of-focus circles of light)", group: "D. 抽象特殊", def: "" },
    { id: "ls_laser_grid", name: "激光网格形 (Laser Grid Pattern, bright neon-colored grid lines)", group: "D. 抽象特殊", def: "" },
    { id: "ls_smoke_swirl", name: "烟雾缭绕形 (Smoke Swirl Pattern, fluid changing organic vapor shadows)", group: "D. 抽象特殊", def: "" },
    { id: "ls_shattered", name: "碎玻璃影形 (Shattered Glass Shape, chaotic sharp spiderweb light)", group: "D. 抽象特殊", def: "" },
    { id: "ls_rorschach", name: "罗夏墨迹形 (Rorschach Inkblot Shape, symmetrical organic abstract blob)", group: "D. 抽象特殊", def: "" },
    { id: "ls_kaleido", name: "万花筒光形 (Kaleidoscope Pattern, complex symmetrical fractal light)", group: "D. 抽象特殊", def: "" },
    { id: "ls_noise", name: "噪点颗粒形 (Noise Grain Pattern, speckled static-like texture)", group: "D. 抽象特殊", def: "" },
    { id: "ls_blob", name: "液态变形形 (Liquid Blob Shape, amorphous lava-lamp moving shapes)", group: "D. 抽象特殊", def: "" }
];

// === 6. 空气介质 (Light Air Medium) ===
// 核心逻辑：定义光线穿过的空气厚度、散射条件和可见介质。
const FIT_AIR_CLEAR = fit("usable", ["real_professional", "urban_life", "fashion_idol", "ecological"], ["romance", "wuxia", "xianxia", "historical", "court", "science_fiction"], ["fantasy", "dark_fantasy", "surreal"], ["horror", "wasteland"]);
const FIT_AIR_MIST = fit("usable", ["romance", "ecological", "xianxia", "surreal"], ["wuxia", "fantasy", "dark_fantasy", "horror", "historical"], ["science_fiction", "cyberpunk", "mythic_epic"], ["real_professional"]);
const FIT_AIR_PARTICLE = fit("usable", ["wasteland", "war_military", "horror", "noir_crime"], ["urban_life", "historical", "wuxia", "dark_fantasy", "real_professional"], ["science_fiction", "cyberpunk", "xianxia"], ["fashion_idol", "romance"]);
const FIT_AIR_SPECIAL = fit("none", ["surreal", "science_fiction", "cyberpunk", "fantasy"], ["xianxia", "dark_fantasy", "posthuman"], ["romance", "wuxia", "horror"], ["real_professional", "historical", "court"], []);

export const CD_LIGHT_AIR: LibraryItemDef[] = [
  lp({ id: "la_clear_air", name: "清澈空气 (Clear Air)", group: "A. 干净空气", def: "空气介质：能见度高、无明显雾尘，光线不被介质抢戏；适合写实、棚拍、职业、城市和自然场景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "clean_visibility"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_crisp_cold_air", name: "冷冽清气 (Crisp Cold Air)", group: "A. 干净空气", def: "空气介质：干冷透明，边缘锐利，光线显得清硬；适合冬季、雪地、清晨、北方城市和冷感肖像。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "cold_clear_air"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_dry_desert_air", name: "干燥热气 (Dry Heat Air)", group: "A. 干净空气", def: "空气介质：干燥、热、微微晃动，远景有热浪但不形成浓雾；适合沙漠、荒野、废土和烈日场景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "heat_shimmer"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_high_altitude_thin", name: "高海拔薄空气 (High-Altitude Thin Air)", group: "A. 干净空气", def: "空气介质：稀薄、干净、紫外感强，天空和远景清晰但人物边缘偏冷硬；适合山地、高原、极地和神圣远景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "thin_air"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_studio_clean_air", name: "棚拍洁净空气 (Studio Clean Air)", group: "A. 干净空气", def: "空气介质：受控室内空气，无雾尘干扰，强调人物、材质和灯位本身；适合棚拍、时装、产品感角色。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "controlled_studio"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_cleanroom_sterile_air", name: "洁净室无尘空气 (Cleanroom Sterile Air)", group: "A. 干净空气", def: "空气介质：无尘、无湿气、无烟雾，光线显得功能化和冷硬；适合实验室、医疗、义体、洁净工厂。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "technological", "air_medium", "sterile_cleanroom"], categoryFit: FIT_SCIENCE }),
  lp({ id: "la_after_rain_clear", name: "雨后澄清空气 (After-Rain Clear Air)", group: "A. 干净空气", def: "空气介质：雨后杂质被冲净，空气透明但地面和玻璃仍有湿润反射；适合城市夜景、自然、情感和清晨。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "after_rain_clear"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_museum_quiet_air", name: "博物馆静空气 (Museum Quiet Air)", group: "A. 干净空气", def: "空气介质：室内稳定、低湿、低尘，光线像被空间秩序压住；适合展厅、宫殿、档案馆、审美化静物和人物。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "interior_stillness"], categoryFit: FIT_AIR_CLEAR }),
  lp({ id: "la_vacuum_like_clarity", name: "近真空清晰感 (Vacuum-Like Clarity)", group: "A. 干净空气", def: "空气介质：几乎没有散射，边缘极清楚，空间像被抽干；适合太空、实验舱、抽象洁净空间和极简科幻。", eras: ["modern", "contemporary", "near_future", "far_future", "timeless"], eraMode: "specific", ontologyLevel: 2, realityTags: ["stylized", "technological", "air_medium", "vacuum_clarity"], categoryFit: FIT_SCIENCE }),

  lp({ id: "la_thin_haze", name: "薄雾散射 (Thin Haze)", group: "B. 雾气水汽", def: "空气介质：轻薄雾气让光束和层次略微可见，但不吞没主体；适合电影感、清晨、室内窗光和梦感场景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "stylized", "physical_light", "air_medium", "thin_haze"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_morning_mist", name: "晨雾水汽 (Morning Mist)", group: "B. 雾气水汽", def: "空气介质：清晨低温水汽贴近地面，光线柔化，远景层层后退；适合森林、湖边、乡野、古风和浪漫场景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "morning_mist"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_rain_mist", name: "雨幕水汽 (Rain Mist)", group: "B. 雾气水汽", def: "空气介质：雨滴和水汽让车灯、路灯、窗光变成可见光柱；适合雨夜、城市、悬疑和情感场景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "rain_mist"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_snow_haze", name: "雪雾反光 (Snow Haze)", group: "B. 雾气水汽", def: "空气介质：雪粒、雪雾和地面反光共同抬亮暗部，画面冷白、柔亮；适合雪地、冬季、末世和高原。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "snow_haze"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_sea_salt_humidity", name: "海盐湿气 (Sea-Salt Humidity)", group: "B. 雾气水汽", def: "空气介质：海边湿咸空气让高光柔化，远处发灰，皮肤和织物有微湿反射；适合海岸、港口、船舶和潮湿城市。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "sea_humidity"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_bathroom_steam", name: "浴室蒸汽 (Bathroom Steam)", group: "B. 雾气水汽", def: "空气介质：热水蒸汽和镜面水汽扩散光线，边缘柔软、局部高光湿润；适合私密空间、生活场景和浴室环境。", eras: ["industrial", "modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "steam"], categoryFit: FIT_BOUDOIR }),
  lp({ id: "la_kitchen_steam", name: "厨房蒸汽 (Kitchen Steam)", group: "B. 雾气水汽", def: "空气介质：锅具、热汤或室内水汽让局部光线变软，空间有生活热度；适合日常、职业、餐馆和家庭场景。", eras: ERA_PRE_ELECTRIC, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "kitchen_steam"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_greenhouse_humidity", name: "温室湿气 (Greenhouse Humidity)", group: "B. 雾气水汽", def: "空气介质：玻璃温室内湿度高，叶片、水珠和玻璃共同散射光；适合生态、植物、实验温室和潮湿肖像。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "greenhouse_humidity"], categoryFit: FIT_AIR_MIST }),
  lp({ id: "la_stage_low_fog", name: "低位地雾 (Low-Lying Fog)", group: "B. 雾气水汽", def: "空气介质：雾层贴近地面，脚边和下半身被柔化，主光从上方或后方切出层次；适合舞台、梦境、仪式和超现实。", eras: ["modern", "contemporary", "near_future", "far_future", "timeless"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "air_medium", "low_fog"], categoryFit: FIT_AIR_MIST }),

  lp({ id: "la_room_dust", name: "室内尘埃 (Room Dust)", group: "C. 粉尘烟雾", def: "空气介质：室内尘埃在窗光或顶光中可见，给空间年代感和静止感；适合旧屋、档案、仓库、古典室内。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "dust_motes"], categoryFit: FIT_AIR_PARTICLE }),
  lp({ id: "la_street_smoke", name: "街头烟雾 (Street Smoke)", group: "C. 粉尘烟雾", def: "空气介质：尾气、蒸汽、烟气混合在街灯和霓虹里，让城市夜景有体积；适合都市、犯罪、赛博和雨夜街头。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "street_smoke"], categoryFit: FIT_AIR_PARTICLE }),
  lp({ id: "la_stage_fog", name: "舞台烟雾 (Stage Fog)", group: "C. 粉尘烟雾", def: "空气介质：人工烟雾让光束显形，适合棚拍、演出、时装、音乐场景和强效果照明；不应冒充自然天气。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 2, realityTags: ["stylized", "physical_light", "air_medium", "stage_fog"], categoryFit: FIT_STUDIO }),
  lp({ id: "la_ash_suspended", name: "悬浮灰烬 (Suspended Ash)", group: "C. 粉尘烟雾", def: "空气介质：燃烧后的灰烬在空气中缓慢漂浮，光线变脏、暗部有颗粒；适合灾后、战争、废土、火灾和黑暗奇幻。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "ash"], categoryFit: FIT_AIR_PARTICLE }),
  lp({ id: "la_battlefield_smoke", name: "战场硝烟 (Battlefield Smoke)", group: "C. 粉尘烟雾", def: "空气介质：火药、爆炸和尘土混合成厚重烟雾，远景被遮蔽，人物边缘被火光或天光切出；适合战争和武侠战场折译。", eras: ERA_DISASTER, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "battle_smoke"], categoryFit: FIT_AIR_PARTICLE }),
  lp({ id: "la_incense_cloud", name: "香火烟云 (Incense Cloud)", group: "C. 粉尘烟雾", def: "空气介质：线香、香炉或寺庙烟气让光线呈柔软层流；适合宗教、祭祀、宫廷、武侠和仙侠仪式。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "incense_smoke"], categoryFit: FIT_FIRE_RITUAL }),
  lp({ id: "la_factory_dust", name: "工厂粉尘 (Factory Dust)", group: "C. 粉尘烟雾", def: "空气介质：工业粉尘、金属屑或棉絮在顶灯和窗光中可见，空间粗糙、劳动感强；适合工厂、矿井和工业城市。", eras: ["industrial", "modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "factory_dust"], categoryFit: FIT_AIR_PARTICLE }),
  lp({ id: "la_sand_dust", name: "沙尘悬浮 (Suspended Sand Dust)", group: "C. 粉尘烟雾", def: "空气介质：沙尘把阳光或车灯染成浑黄，边缘粗糙、视线受限；适合沙漠、废土、古代战场和荒野。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "air_medium", "sand_dust"], categoryFit: FIT_AIR_PARTICLE }),
  lp({ id: "la_confetti_particles", name: "彩纸微粒 (Confetti Particles)", group: "C. 粉尘烟雾", def: "空气介质：彩纸、纸屑或闪粉在灯光中漂浮，强调庆典、演出、偶像、派对或超现实瞬间；不适合严肃写实战场。", eras: ["modern", "contemporary", "near_future"], eraMode: "specific", ontologyLevel: 2, realityTags: ["stylized", "physical_light", "air_medium", "confetti"], categoryFit: FIT_STUDIO }),

  lp({ id: "la_prismatic_air", name: "棱镜空气 (Prismatic Air)", group: "D. 特殊介质", def: "空气介质：光线经过玻璃、水晶或非现实折射后出现轻微彩边，强调梦感、科技或仙气；禁止当作普通写实空气。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "air_medium", "prismatic_refraction"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_biolum_spores", name: "荧光孢子空气 (Bioluminescent Spore Air)", group: "D. 特殊介质", def: "空气介质：悬浮孢子或微生物自发微光，空间带生物荧光；适合异星生态、仙侠森林、奇幻洞穴和生物朋克。", eras: ["feudal", "early_modern", "modern", "contemporary", "near_future", "far_future", "mythic", "timeless"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "biological", "air_medium", "bioluminescent"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_magic_mote_air", name: "魔法光尘空气 (Magic Mote Air)", group: "D. 特殊介质", def: "空气介质：细小发光粒子在空气中漂浮，像法术余波或梦境尘埃；适合仙侠、奇幻、神话和超现实。", eras: ["feudal", "early_modern", "modern", "timeless", "mythic"], eraMode: "specific", ontologyLevel: 4, realityTags: ["nonreal", "magical", "air_medium", "light_motes"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_holographic_haze", name: "全息雾 (Holographic Haze)", group: "D. 特殊介质", def: "空气介质：雾气中混有界面投影、扫描线或全息粒子，光像数据层一样漂浮；适合赛博、科幻和后人类空间。", eras: ["contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "air_medium", "holographic_haze"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_laser_fog", name: "激光雾 (Laser Fog)", group: "D. 特殊介质", def: "空气介质：雾或烟让激光、扫描网格和舞台光束可见；适合夜店、实验室、赛博、安防和视觉化技术空间。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "air_medium", "laser_fog"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_toxic_vapor", name: "毒性蒸汽 (Toxic Vapor)", group: "D. 特殊介质", def: "空气介质：绿色、黄色或脏灰色危险蒸汽改变光线，必须有化学、污染、废土或实验来源；不适合普通浪漫场景。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "air_medium", "toxic_vapor"], categoryFit: FIT_WASTELAND }),
  lp({ id: "la_void_dust", name: "虚空尘 (Void Dust)", group: "D. 特殊介质", def: "空气介质：暗色微粒像从虚空或深空中漂出，吞噬部分高光；适合黑暗奇幻、宇宙恐怖、梦境和抽象空间。", eras: ["near_future", "far_future", "timeless", "mythic"], eraMode: "specific", ontologyLevel: 4, realityTags: ["nonreal", "surreal", "air_medium", "void_particles"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_pixelated_air", name: "像素化空气 (Pixelated Air)", group: "D. 特殊介质", def: "空气介质：空间中的光和雾呈现像素块、压缩噪点或数字破碎，适合虚拟空间、赛博故障和抽象科技。", eras: ["contemporary", "near_future", "far_future", "timeless"], eraMode: "specific", ontologyLevel: 4, realityTags: ["abstract", "technological", "air_medium", "digital_glitch"], categoryFit: FIT_AIR_SPECIAL }),
  lp({ id: "la_cosmic_nebula_air", name: "星云空气 (Cosmic Nebula Air)", group: "D. 特殊介质", def: "空气介质：空间像被星云、宇宙尘或发光气体填充，适合深空、神话宇宙、梦境和宏大超现实；不能作为普通地球空气。", eras: ["near_future", "far_future", "timeless", "mythic"], eraMode: "specific", ontologyLevel: 4, realityTags: ["nonreal", "surreal", "air_medium", "cosmic_nebula"], categoryFit: FIT_AIR_SPECIAL })
];

// === 7. 光源色温 (Light Color Temperature) ===
// 核心逻辑：只控制光源颜色，不替代美术配色。
const FIT_TEMP_BASIC = fit("usable", ["real_professional", "urban_life", "fashion_idol"], ["romance", "wuxia", "xianxia", "historical", "science_fiction", "ecological"], ["fantasy", "dark_fantasy", "surreal"], ["horror", "wasteland"]);
const FIT_TEMP_WARM = fit("usable", ["romance", "historical", "court", "religious_ritual"], ["wuxia", "xianxia", "fashion_idol", "urban_life", "ecological"], ["fantasy", "dark_fantasy", "noir_crime"], ["science_fiction", "cyberpunk"]);
const FIT_TEMP_COOL = fit("usable", ["science_fiction", "real_professional", "noir_crime"], ["urban_life", "horror", "wasteland", "ecological", "fashion_idol"], ["xianxia", "fantasy", "dark_fantasy", "surreal"], ["court", "religious_ritual"]);
const FIT_TEMP_STYLE = fit("none", ["cyberpunk", "science_fiction", "fashion_idol", "surreal"], ["urban_life", "posthuman", "horror"], ["wuxia", "xianxia", "romance", "dark_fantasy"], ["historical", "court", "ecological"]);

export const CD_LIGHT_COLOR_TEMP: LibraryItemDef[] = [
  lp({ id: "lct_neutral_white", name: "中性白光 (Neutral White Light)", group: "A. 基础色温", def: "色温协议：光源接近中性白，只校准可读性和真实材质，不改变整体美术配色。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "neutral_white"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_soft_warm", name: "柔暖光 (Soft Warm Light)", group: "A. 基础色温", def: "色温协议：轻微暖色光，适合皮肤、室内、清晨和生活感；暖度必须来自光源，不等于整图暖滤镜。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "soft_warm"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_cool_blue", name: "冷蓝光 (Cool Blue Light)", group: "A. 基础色温", def: "色温协议：冷蓝倾向，用于夜晚、阴影、金属、雪地或技术空间；不得替代画面配色，只改变光源染色。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "cool_blue"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_daylight_5600k", name: "日光白 5600K (Daylight 5600K)", group: "A. 基础色温", def: "色温协议：标准日光白，保持真实摄影色彩和材质判断；适合自然光、棚拍校准和职业场景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "daylight_white"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_tungsten_3200k", name: "钨丝灯 3200K (Tungsten 3200K)", group: "A. 基础色温", def: "色温协议：经典室内钨丝暖白，适合摄影棚、剧场、老式室内和胶片感；属于光源色温，不替代美术配色。", eras: ["industrial", "modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "tungsten"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_clean_led_white", name: "干净 LED 白光 (Clean LED White)", group: "A. 基础色温", def: "色温协议：现代 LED 白光，边缘干净、色偏少，适合商业空间、工作室、城市和当代生活。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "led_white"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_soft_ivory", name: "柔象牙白光 (Soft Ivory Light)", group: "A. 基础色温", def: "色温协议：白中带暖，柔和但不金黄，适合肖像、婚礼、室内和古典人像。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "ivory_white"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_cloudy_cool_white", name: "阴天冷白 (Cloudy Cool White)", group: "A. 基础色温", def: "色温协议：阴天或漫射天光的冷白倾向，低刺激、低饱和，适合纪实、现实和忧郁画面。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "cloudy_cool"], categoryFit: FIT_TEMP_BASIC }),
  lp({ id: "lct_balanced_mixed_white", name: "平衡混合白光 (Balanced Mixed White)", group: "A. 基础色温", def: "色温协议：多光源混合后维持中性可读，适合复杂室内或城市空间；不强调风格色，只负责把材质拉回可判断。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "light_color_temperature", "mixed_white"], categoryFit: FIT_TEMP_BASIC }),

  lp({ id: "lct_golden_amber", name: "金琥珀光 (Golden Amber Light)", group: "B. 暖色光", def: "色温协议：金琥珀光只作为光源暖色，强调皮肤、金属、尘埃和古典材质；禁止全图橙色滤镜。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "amber"], categoryFit: FIT_TEMP_WARM }),
  lp({ id: "lct_candle_orange", name: "烛火橙光 (Candle Orange Light)", group: "B. 暖色光", def: "色温协议：小火源橙光，亮度局部、边缘跳动；适合烛火、灯盏、仪式和私密室内。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "candle_orange"], categoryFit: FIT_TEMP_WARM }),
  lp({ id: "lct_sodium_yellow", name: "钠灯黄光 (Sodium Yellow Light)", group: "B. 暖色光", def: "色温协议：高压钠灯式脏黄，适合老街、隧道、停车场和犯罪夜景；必须有工业或现代城市光源依据。", eras: ["industrial", "modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "sodium_yellow"], categoryFit: FIT_URBAN_NIGHT }),
  lp({ id: "lct_fire_red_orange", name: "火焰红橙光 (Fire Red-Orange)", group: "B. 暖色光", def: "色温协议：火焰带来的红橙高光，适合篝火、火灾、战场、灾变和仪式；光源必须可解释为燃烧。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "fire_orange"], categoryFit: FIT_TEMP_WARM }),
  lp({ id: "lct_lantern_warm", name: "灯笼暖黄光 (Lantern Warm Yellow)", group: "B. 暖色光", def: "色温协议：纸灯、宫灯或油灯罩过滤后的暖黄光，柔和、局部、带手工质感。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "lantern_yellow"], categoryFit: FIT_TEMP_WARM }),
  lp({ id: "lct_sunset_peach", name: "日落桃金光 (Sunset Peach Light)", group: "B. 暖色光", def: "色温协议：日落时的桃金色暖光，适合浪漫、自然、记忆和逆光边缘；不得变成整图粉橙配色。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "sunset_peach"], categoryFit: FIT_TEMP_WARM }),
  lp({ id: "lct_fireplace_gold", name: "壁炉金暖光 (Fireplace Gold)", group: "B. 暖色光", def: "色温协议：壁炉、炭火或室内低火源带来的金暖光，适合古典室内、冬夜和亲密场景。", eras: ERA_PRE_ELECTRIC, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "fireplace_gold"], categoryFit: FIT_TEMP_WARM }),
  lp({ id: "lct_desert_sun_ochre", name: "沙漠赭阳光 (Desert Ochre Sun)", group: "B. 暖色光", def: "色温协议：沙尘和烈日混合出的赭黄暖光，适合荒野、废土、古战场和高温环境。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "desert_ochre"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lct_old_incandescent", name: "旧白炽暖光 (Old Incandescent Warm)", group: "B. 暖色光", def: "色温协议：老式白炽灯偏暖偏黄，适合老房间、旅馆、办公室、地下室和复古现代。", eras: ["industrial", "modern", "contemporary"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "warm_light_color", "incandescent"], categoryFit: FIT_TEMP_WARM }),

  lp({ id: "lct_moon_blue", name: "月光蓝 (Moonlit Blue)", group: "C. 冷色光", def: "色温协议：月光或夜间天光的冷蓝倾向，适合夜景、古典、武侠、恐怖和安静自然空间。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "cool_light_color", "moon_blue"], categoryFit: FIT_TEMP_COOL }),
  lp({ id: "lct_fluorescent_green", name: "荧光绿白 (Fluorescent Green-White)", group: "C. 冷色光", def: "色温协议：日光灯或老式荧光灯带来的绿白偏色，适合办公室、医院、地下空间和不舒适现实。", eras: ["modern", "contemporary"], eraMode: "specific", ontologyLevel: 2, realityTags: ["stylized", "physical_light", "cool_light_color", "fluorescent_green"], categoryFit: FIT_TEMP_COOL }),
  lp({ id: "lct_clinical_cold", name: "病态冷白 (Clinical Cold White)", group: "C. 冷色光", def: "色温协议：医院、实验室和洁净室的冷白光，皮肤显得苍白，材质冷硬；不替代整体配色。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "cool_light_color", "clinical_cold"], categoryFit: FIT_SCIENCE }),
  lp({ id: "lct_ice_blue", name: "冰蓝光 (Ice Blue Light)", group: "C. 冷色光", def: "色温协议：冰面、雪地、冷库或极地环境的蓝白反射，适合寒冷、孤立、科幻和雪景。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "cool_light_color", "ice_blue"], categoryFit: FIT_TEMP_COOL }),
  lp({ id: "lct_steel_blue", name: "钢蓝光 (Steel Blue Light)", group: "C. 冷色光", def: "色温协议：金属、工业、武器或城市夜色中的钢蓝反射，适合犯罪、军警、科幻和硬质人物。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "cool_light_color", "steel_blue"], categoryFit: FIT_TEMP_COOL }),
  lp({ id: "lct_overcast_gray_blue", name: "阴天灰蓝光 (Overcast Gray-Blue)", group: "C. 冷色光", def: "色温协议：厚云层下的灰蓝光，低反差、低饱和，适合现实、纪实、废土和忧郁画面。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "cool_light_color", "overcast_gray_blue"], categoryFit: FIT_TEMP_COOL }),
  lp({ id: "lct_twilight_violet_blue", name: "暮色紫蓝光 (Twilight Violet-Blue)", group: "C. 冷色光", def: "色温协议：日落后天空残光的紫蓝冷色，适合城市天台、海边、荒野和情绪化肖像。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "stylized", "cool_light_color", "twilight_violet"], categoryFit: FIT_TEMP_COOL }),
  lp({ id: "lct_underwater_cyan", name: "水下青蓝光 (Underwater Cyan)", group: "C. 冷色光", def: "色温协议：水体过滤后的青蓝光，只控制水下或湿润空间中的光源颜色；必须有水或折射依据。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 2, realityTags: ["stylized", "physical_light", "cool_light_color", "underwater_cyan"], categoryFit: FIT_WATER_AIR }),
  lp({ id: "lct_pale_morning_blue", name: "清晨淡蓝光 (Pale Morning Blue)", group: "C. 冷色光", def: "色温协议：清晨低温天光的淡蓝白，柔和、干净、现实，适合自然、都市和人物初始状态。", eras: ERA_ALL, eraMode: "universal", ontologyLevel: 1, realityTags: ["realistic", "physical_light", "cool_light_color", "morning_blue"], categoryFit: FIT_TEMP_COOL }),

  lp({ id: "lct_neon_magenta_cyan", name: "霓虹紫青 (Neon Magenta-Cyan)", group: "D. 风格色温", def: "色温协议：霓虹灯或 LED 造成的紫青双色光，只作用于光源和边缘高光；适合赛博、夜店、时装和城市夜景。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["stylized", "semi_surreal", "physical_light", "neon_color"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_cyber_cyan", name: "赛博青光 (Cyber Cyan Light)", group: "D. 风格色温", def: "色温协议：界面、全息、数据屏或冷 LED 的青色光，适合科技、赛博、义体和未来空间。", eras: ["contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "color_light", "cyber_cyan"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_mixed_warm_cool", name: "冷暖混合光 (Mixed Warm-Cool Light)", group: "D. 风格色温", def: "色温协议：暖主光和冷轮廓光并存，制造电影感分离；不得替代整体配色，只规定光源之间的温差。", eras: ERA_MODERN, eraMode: "specific", ontologyLevel: 2, realityTags: ["stylized", "physical_light", "color_light", "mixed_warm_cool"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_laser_red", name: "激光红光 (Laser Red Light)", group: "D. 风格色温", def: "色温协议：红色来自扫描线、警报、激光或暗房安全灯，必须有技术或信号来源；不作为浪漫红滤镜。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "color_light", "laser_red"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_uv_violet", name: "紫外紫光 (UV Violet Light)", group: "D. 风格色温", def: "色温协议：紫外灯、黑光或舞台紫光带来非自然紫色反应，适合夜店、法医、实验和超现实空间。", eras: ["modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "color_light", "uv_violet"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_radioactive_green", name: "放射绿光 (Radioactive Green Light)", group: "D. 风格色温", def: "色温协议：绿色来自污染、警示、荧光材料或科幻能量源；适合废土、实验、怪诞和生化朋克。", eras: ["industrial", "modern", "contemporary", "near_future", "far_future"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "technological", "color_light", "radioactive_green"], categoryFit: FIT_WASTELAND }),
  lp({ id: "lct_biolum_teal", name: "生物荧光青绿 (Bioluminescent Teal)", group: "D. 风格色温", def: "色温协议：青绿色来自生物荧光、孢子、海洋生物或异星生态；适合奇幻、仙侠、生态科幻和生物朋克。", eras: ["feudal", "early_modern", "modern", "contemporary", "near_future", "far_future", "mythic", "timeless"], eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "biological", "color_light", "bioluminescent_teal"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_prism_rainbow", name: "棱镜虹彩光 (Prismatic Rainbow Light)", group: "D. 风格色温", def: "色温协议：彩色来自棱镜、水晶、镜面或光学折射，不是全图彩虹配色；适合梦境、仙气、实验和时尚。", eras: ERA_MYTH_DREAM, eraMode: "specific", ontologyLevel: 3, realityTags: ["semi_surreal", "stylized", "color_light", "prismatic_rainbow"], categoryFit: FIT_TEMP_STYLE }),
  lp({ id: "lct_spectral_white", name: "幽灵白光 (Spectral White Light)", group: "D. 风格色温", def: "色温协议：白光偏冷、偏非现实，像幽灵、幻觉或神秘显影；适合恐怖、梦境、黑暗奇幻和超现实。", eras: ["feudal", "early_modern", "modern", "contemporary", "near_future", "far_future", "timeless", "mythic"], eraMode: "specific", ontologyLevel: 4, realityTags: ["nonreal", "surreal", "color_light", "spectral_white"], categoryFit: FIT_TEMP_STYLE })
];
