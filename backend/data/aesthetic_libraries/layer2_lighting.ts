
import { LibraryItemDef } from '../../types';

// =============================================================================
// LAYER 1.4: 光 (光影基调与布光 - 可变模块)
// =============================================================================

// === 1. 光影基调 (Lighting Mood) - 极简基础矩阵 ===
// 核心逻辑：定义画面的明暗调性、对比度与硬度。不涉及光源方位。
// Skeletons: skel_high (高调), skel_low (低调), skel_mid (中调), skel_soft (软调), skel_hard (硬调)

export const AES_LIGHT_MOOD: LibraryItemDef[] = [
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

// === 2. 照明类型 (Lighting Type) ===
export const AES_LIGHT_TYPE: LibraryItemDef[] = [
  // --- Group A. 自然光源 (Natural Sources) ---
  { id: "lt_golden_hour", name: "黄金时刻 (Golden Hour Warm Sun)", group: "A. 自然光源", def: "" },
  { id: "lt_blue_hour", name: "蓝调时刻 (Blue Hour Twilight)", group: "A. 自然光源", def: "" },
  { id: "lt_harsh_noon", name: "正午烈日 (Harsh Noon Overhead Sun)", group: "A. 自然光源", def: "" },
  { id: "lt_overcast_sky", name: "阴天漫射 (Overcast Diffused Light)", group: "A. 自然光源", def: "" },
  { id: "lt_moonlight_pale", name: "苍白月光 (Pale Moonlight)", group: "A. 自然光源", def: "" },
  { id: "lt_starlight_void", name: "星光 (Faint Starlight)", group: "A. 自然光源", def: "" },
  { id: "lt_lightning_bolt", name: "雷电 (Lightning Flash)", group: "A. 自然光源", def: "" },
  { id: "lt_rainbow_refraction", name: "彩虹光 (Rainbow Refraction)", group: "A. 自然光源", def: "" },

  // --- Group B. 城市与工业 (Urban & Industrial) ---
  { id: "lt_sodium_vapor", name: "高压钠灯 (Sodium Vapor Street Light)", group: "B. 城市工业", def: "" },
  { id: "lt_mercury_vapor", name: "汞灯 (Mercury Vapor Green Light)", group: "B. 城市工业", def: "" },
  { id: "lt_neon_tube", name: "霓虹灯管 (Neon Tube Light)", group: "B. 城市工业", def: "" },
  { id: "lt_fluorescent_flicker", name: "日光灯 (Fluorescent Flicker)", group: "B. 城市工业", def: "" },
  { id: "lt_street_lamp_led", name: "LED路灯 (White LED Street Lamp)", group: "B. 城市工业", def: "" },
  { id: "lt_searchlight_beam", name: "探照灯 (Searchlight Beam)", group: "B. 城市工业", def: "" },
  { id: "lt_construction_flood", name: "工地射灯 (Construction Floodlight)", group: "B. 城市工业", def: "" },
  { id: "lt_lighthouse_sweep", name: "灯塔光柱 (Lighthouse Sweep)", group: "B. 城市工业", def: "" },

  // --- Group C. 室内与私密 (Indoor & Intimate) ---
  { id: "lt_candlelight_warm", name: "摇曳烛火 (Flickering Candlelight)", group: "C. 室内私密", def: "" },
  { id: "lt_fireplace_glow", name: "壁炉余温 (Fireplace Glow)", group: "C. 室内私密", def: "" },
  { id: "lt_oil_lantern", name: "煤油提灯 (Oil Lantern Flame)", group: "C. 室内私密", def: "" },
  { id: "lt_night_lamp", name: "床头小灯 (Nightstand Lamp)", group: "C. 室内私密", def: "" },
  { id: "lt_screen_glow_blue", name: "屏幕冷光 (Blue Screen Glow)", group: "C. 室内私密", def: "" },
  { id: "lt_matches_strike", name: "火柴微光 (Matchstick Flare)", group: "C. 室内私密", def: "" },
  { id: "lt_fridge_light", name: "冰箱灯 (Fridge Interior Light)", group: "C. 室内私密", def: "" },
  { id: "lt_incense_burning", name: "线香红点 (Incense Ember)", group: "C. 室内私密", def: "" },

  // --- Group D. 极端与奇观 (Extreme & Spectacle) ---
  { id: "lt_explosion_burst", name: "爆炸火光 (Explosion Burst)", group: "D. 极端奇观", def: "" },
  { id: "lt_arc_welding", name: "电焊弧光 (Welding Arc)", group: "D. 极端奇观", def: "" },
  { id: "lt_laser_beam_red", name: "相干激光 (Laser Beam)", group: "D. 极端奇观", def: "" },
  { id: "lt_magma_glow", name: "熔岩红光 (Magma Glow)", group: "D. 极端奇观", def: "" },
  { id: "lt_nuclear_cherenkov", name: "切连科夫辐射 (Cherenkov Blue Radiation)", group: "D. 极端奇观", def: "" },
  { id: "lt_strobe_club", name: "频闪灯 (Strobe Light)", group: "D. 极端奇观", def: "" },
  { id: "lt_flamethrower_jet", name: "喷火喷射 (Flamethrower Jet)", group: "D. 极端奇观", def: "" },
  { id: "lt_projector_beam", name: "投影光束 (Projector Beam)", group: "D. 极端奇观", def: "" },

  // --- Group E. 超自然与幻想 (Supernatural & Fantasy) ---
  { id: "lt_biolum_forest", name: "荧光森林 (Bioluminescence)", group: "E. 幻想光源", def: "" },
  { id: "lt_spirit_wisp", name: "鬼火 (Will-o'-the-wisp)", group: "E. 幻想光源", def: "" },
  { id: "lt_magic_rune_glow", name: "符文发光 (Magic Rune Glow)", group: "E. 幻想光源", def: "" },
  { id: "lt_holy_halo", name: "神圣光环 (Divine Halo)", group: "E. 幻想光源", def: "" },
  { id: "lt_plasma_ball", name: "等离子球 (Plasma Ball)", group: "E. 幻想光源", def: "" },
  { id: "lt_void_sink", name: "虚空黑洞 (Void Light Absorption)", group: "E. 幻想光源", def: "" },
  { id: "lt_willow_light", name: "萤火 (Fireflies Light)", group: "E. 幻想光源", def: "" },
  { id: "lt_aurora_dance", name: "极光 (Aurora Borealis)", group: "E. 幻想光源", def: "" },

  // --- Group F. 现代科技 (Modern Tech) ---
  { id: "lt_led_panel", name: "LED 矩阵 (LED Matrix)", group: "F. 现代科技", def: "" },
  { id: "lt_hologram_cyan", name: "全息青光 (Cyan Hologram)", group: "F. 现代科技", def: "" },
  { id: "lt_uv_blacklight", name: "紫光灯 (UV Blacklight)", group: "F. 现代科技", def: "" },
  { id: "lt_scanner_red", name: "红激光扫描 (Laser Scanner)", group: "F. 现代科技", def: "" },
  { id: "lt_fiber_glow", name: "光纤发光 (Fiber Optic Glow)", group: "F. 现代科技", def: "" },
  { id: "lt_infrared_night", name: "红外夜视 (Infrared Night Vision)", group: "F. 现代科技", def: "" },
  { id: "lt_smart_glass", name: "智能变色玻璃 (Smart Glass Tint)", group: "F. 现代科技", def: "" },
  { id: "lt_tesla_arc", name: "特斯拉电弧 (Tesla Coil Arc)", group: "F. 现代科技", def: "" }
];

// === 3. 布光方案 (Lighting Setup) ===
// 核心逻辑：定义光源的物理位置与投射角度。
export const AES_LIGHT_DIRECTION: LibraryItemDef[] = [
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

// === 4. 光投影形状 (Light Projection Shape/Gobo) - 48 Items ===
// 核心逻辑：定义光线投射在物体或背景上的具体形状与纹理 (Gobo / Cucoloris)。
export const AES_LIGHT_SHAPE: LibraryItemDef[] = [
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
