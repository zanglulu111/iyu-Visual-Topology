
import { LibraryItemDef } from '../../types';

// =============================================================================
// LAYER 1.1: 固定参数与基准 (FIXED MODULES)
// =============================================================================

// ======================= REALISM MODE LIBRARIES =======================

// 1. 摄影机系统 (Camera System)
export const AES_CAMERA_SYSTEM: LibraryItemDef[] = [
    // --- A. 顶级数字电影 (Digital Cinema) ---
    { id: "cam_alexa_65", name: "ARRI ALEXA 65 (ARRI ALEXA 65)", group: "A. 顶级数字", def: "", core: "参考：《荒野猎人》《小丑》。极致的浅景深与呼吸感，顶级商业片标配。" },
    { id: "cam_alexa_35", name: "ARRI ALEXA 35 (ARRI ALEXA 35)", group: "A. 顶级数字", def: "", core: "参考：现代好莱坞标准。色彩科学的巅峰，肤色还原极其自然。" },
    { id: "cam_alexa_mini_lf", name: "ARRI ALEXA Mini LF (ARRI ALEXA Mini LF)", group: "A. 顶级数字", def: "", core: "参考：《沙丘》《1917》。大画幅的沉浸感，同时具备手持的灵活性。" },
    { id: "cam_sony_venice_2", name: "Sony Venice 2 (Sony Venice 2)", group: "A. 顶级数字", def: "", core: "参考：《壮志凌云2》《阿凡达2》。极高的解析度与双原生ISO，夜景纯净。" },
    { id: "cam_red_v_raptor_xl", name: "RED V-RAPTOR [X] (RED V-RAPTOR [X])", group: "A. 顶级数字", def: "", core: "参考：Netflix剧集标准。极度锐利，适合后期重度调色与特效合成。" },
    { id: "cam_red_monstro", name: "RED MONSTRO (RED MONSTRO)", group: "A. 顶级数字", def: "", core: "参考：《银河护卫队》。大画幅带来的史诗感，同时也适合时尚大片。" },
    { id: "cam_sony_cinealta", name: "Sony CineAlta F900 (Sony CineAlta F900)", group: "A. 顶级数字", def: "", core: "参考：《星战前传2》。数字电影的先驱，早期高清质感。" },
    { id: "cam_viper_filmstream", name: "Thomson Viper (Viper FilmStream)", group: "A. 顶级数字", def: "", core: "参考：《本杰明·巴顿奇事》《十二宫》。大卫·芬奇早期御用，独特的电子快门感。" },

    // --- B. 经典胶片摄影机 (Analog Film) ---
    { id: "cam_imax_1570", name: "IMAX 15/70mm Film (IMAX 15/70mm Film)", group: "B. 经典胶片", def: "", core: "参考：《奥本海默》《星际穿越》。诺兰御用，胶片分辨率的物理极限，有机质感。" },
    { id: "cam_arriflex_435", name: "Arriflex 435 (Arriflex 435)", group: "B. 经典胶片", def: "", core: "参考：90年代动作片。高速摄影，快门开角的物理模糊，经典的“电影感”。" },
    { id: "cam_arriflex_535", name: "Arriflex 535B (Arriflex 535B)", group: "B. 经典胶片", def: "", core: "参考：《花样年华》《老无所依》。极其安静、稳定的同步摄影机，呈现细腻的肤色。" },
    { id: "cam_panaflex_millennium", name: "Panaflex Millennium (Panaflex Millennium)", group: "B. 经典胶片", def: "", core: "参考：《泰坦尼克号》《黑客帝国》。好莱坞黄金工业标准，色彩扎实，宽容度极高。" },
    { id: "cam_panaflex_platinum", name: "Panaflex Platinum (Panaflex Platinum)", group: "B. 经典胶片", def: "", core: "参考：《七宗罪》。轻便且安静，适合复杂的斯坦尼康调度。" },
    { id: "cam_arricam_lt", name: "Arricam LT (Arricam LT)", group: "B. 经典胶片", def: "", core: "参考：《布达佩斯大饭店》。轻量化机身，色彩还原极其准确。" },
    { id: "cam_arriflex_416", name: "Arriflex 416 (Arriflex 416)", group: "B. 经典胶片", def: "", core: "参考：《卡罗尔》《黑天鹅》。S16mm格式，明显的胶片颗粒，粗砺的情感，私密性。" },
    { id: "cam_aaton_xtr", name: "Aaton XTR (Aaton XTR)", group: "B. 经典胶片", def: "", core: "参考：韦斯·安德森部分镜头。猫在肩上的摄影机，灵动，法国新浪潮感。" },
    { id: "cam_bolex_h16", name: "Bolex H16 (Bolex H16)", group: "B. 经典胶片", def: "", core: "参考：实验电影、学生毕设。不稳定的帧率，梦幻般的机械感。" },
    { id: "cam_mitchell_bnc", name: "Mitchell BNC (Mitchell BNC)", group: "B. 经典胶片", def: "", core: "参考：《公民凯恩》《教父》。好莱坞早期巨兽，画面极其稳重、古典。" },
    { id: "cam_techniscope", name: "Techniscope 35mm (Techniscope)", group: "B. 经典胶片", def: "", core: "参考：意大利西部片。2齿孔35mm，宽银幕但节省胶片，颗粒感较强。" },
    { id: "cam_konvas", name: "Soviet Konvas (Konvas)", group: "B. 经典胶片", def: "", core: "参考：《我是古巴》。苏联制摄影机，独特的机械结构，耐寒。" },

    // --- C. 消费级与特殊 (Consumer & Special) ---
    { id: "cam_iphone_pro", name: "iPhone Pro (iPhone Pro)", group: "C. 消费特殊", def: "", core: "参考：《橘色》(Sean Baker)。超深景深，数字化锐度，当代的真实感。" },
    { id: "cam_gopro", name: "GoPro Hero (GoPro Hero)", group: "C. 消费特殊", def: "", core: "参考：《硬核亨利》。第一人称视角 (POV)，极限运动，鱼眼畸变。" },
    { id: "cam_dji_drone", name: "DJI Mavic (DJI Mavic)", group: "C. 消费特殊", def: "", core: "参考：上帝视角。极其平滑的推拉，鸟瞰图，与人类视角的抽离。" },
    { id: "cam_hasselblad_digital", name: "Hasselblad (Hasselblad)", group: "C. 消费特殊", def: "", core: "参考：顶级商业广告。极致的静态画质，毛孔毕现，色彩深度极高。" },
    { id: "cam_polaroid_sx70", name: "Polaroid SX-70 (Polaroid SX-70)", group: "C. 消费特殊", def: "", core: "参考：塔可夫斯基的拍立得。柔焦，暗角，不可复制的化学反应，时间的切片。" },
    { id: "cam_cctv", name: "CCTV Security Cam (CCTV Security Cam)", group: "C. 消费特殊", def: "", core: "参考：犯罪纪录片。冷漠的俯视，低比特率，噪点，真相的记录者。" },
    { id: "cam_vhs_camcorder", name: "VHS Camcorder (VHS Camcorder)", group: "C. 消费特殊", def: "", core: "参考：《女巫布莱尔》。模拟信号干扰，色偏，90年代的粗糙真实。" }
];

// 2. 镜头系列 (Lens Series)
export const AES_LENS_SERIES: LibraryItemDef[] = [
    // --- A. 现代定焦 (Modern Primes) ---
    { id: "lens_zeiss_master", name: "Zeiss Master Primes (Zeiss Master Primes)", group: "A. 现代定焦", def: "", core: "参考：《荒野猎人》。极致的锐度与反差，没有任何光学瑕疵，德国工艺。" },
    { id: "lens_zeiss_supreme", name: "Zeiss Supreme Primes (Zeiss Supreme Primes)", group: "A. 现代定焦", def: "", core: "参考：《小丑》。覆盖全画幅，焦外柔和，现代电影的标准质感。" },
    { id: "lens_cooke_s4", name: "Cooke S4/i (Cooke S4/i)", group: "A. 现代定焦", def: "", core: "参考：《布达佩斯大饭店》。著名的“库克味”，肤色红润，焦外旋转，具有人性温度。" },
    { id: "lens_arri_signature", name: "ARRI Signature Primes (ARRI Signature Primes)", group: "A. 现代定焦", def: "", core: "参考：《1917》。极其自然的肤色还原，背景虚化如奶油般化开，顶级通透。" },
    { id: "lens_leica_summilux", name: "Leica Summilux-C (Leica Summilux-C)", group: "A. 现代定焦", def: "", core: "参考：《鸟人》。独特的“德味”高光溢出，极高的微反差，立体感强。" },
    { id: "lens_panavision_primo", name: "Panavision Primes (Panavision Primos)", group: "A. 现代定焦", def: "", core: "参考：《黑客帝国》《拯救大兵瑞恩》。好莱坞黄金时代的锐度与色彩平衡，高对比度。" },
    { id: "lens_hasselblad_dna", name: "Hasselblad Prime DNA (Hasselblad)", group: "A. 现代定焦", def: "", core: "参考：IMAX大画幅。极高的解析力，中画幅的立体感。" },
    { id: "lens_canon_cn_e", name: "Canon CN-E Primes (Canon CN-E Primes)", group: "A. 现代定焦", def: "", core: "参考：商业广告。温暖的肤色，极其锐利，高性价比。" },

    // --- B. 变形宽银幕 (Anamorphic) ---
    { id: "lens_panavision_c", name: "Panavision C-Series (Panavision C-Series)", group: "B. 变形镜头", def: "", core: "参考：《银翼杀手》。标志性的蓝色横向拉丝，椭圆光斑，复古科幻标配。" },
    { id: "lens_panavision_e", name: "Panavision E-Series (Panavision E-Series)", group: "B. 变形镜头", def: "", core: "参考：《黑暗骑士》。比C系更现代，但保留了宽银幕的压缩感和肤色质感。" },
    { id: "lens_cooke_anamorphic", name: "Cooke Anamorphic /i (Cooke Anamorphic /i)", group: "B. 变形镜头", def: "", core: "参考：《艾利之书》。特殊的椭圆散景，温暖的肤色，被称为“特别的”变形感。" },
    { id: "lens_atlas_orion", name: "Atlas Orion (Atlas Orion)", group: "B. 变形镜头", def: "", core: "参考：《瞬息全宇宙》。强烈的复古眩光，边缘畸变，独立电影的最爱。" },
    { id: "lens_hawk_v_lite", name: "Hawk V-Lite (Hawk V-Lite)", group: "B. 变形镜头", def: "", core: "参考：《Argo》。独特的2x压缩感，复古且带有轻微的模糊美。" },
    { id: "lens_kowa_anamorphic", name: "Kowa Anamorphic (Kowa Prominar)", group: "B. 变形镜头", def: "", core: "参考：70年代动作片。低反差，暖色眩光，画面偏黄，充满怀旧感。" },
    { id: "lens_lomo_anamorphic", name: "LOMO Anamorphic (LOMO Anamorphic)", group: "B. 变形镜头", def: "", core: "参考：苏系科幻。不完美的镀膜，奇异的光斑，带有粗糙的工业美学。" },

    // --- C. 复古与特殊 (Vintage & Special) ---
    { id: "lens_zeiss_standard", name: "Zeiss Standard Speeds (Standard Speeds)", group: "C. 复古特殊", def: "", core: "参考：《花样年华》《闪灵》。体积小巧，T2.1光圈，独特的三角形光斑，老电影的质感。" },
    { id: "lens_zeiss_super_speed", name: "Zeiss Super Speed (Zeiss Super Speed)", group: "C. 复古特殊", def: "", core: "参考：《出租车司机》。大光圈下的独特三角光斑，夜景之王。" },
    { id: "lens_canon_k35", name: "Canon K35 Vintage (Canon K35 Vintage)", group: "C. 复古特殊", def: "", core: "参考：《异形2》《她》。低反差，高光溢出（Glow），著名的复古梦幻感。" },
    { id: "lens_cooke_panchro", name: "Cooke Speed Panchro (Cooke Speed Panchro)", group: "C. 复古特殊", def: "", core: "参考：老好莱坞。边缘画质极速下降，中心锐利，充满历史的温度。" },
    { id: "lens_super_baltar", name: "Bausch & Lomb Baltar (Bausch & Lomb Baltar)", group: "C. 复古特殊", def: "", core: "参考：《教父》。冷色调眩光，极其适合表现严肃的男性肖像。" },
    { id: "lens_helios_44", name: "Helios 44-2 (Helios 44-2)", group: "C. 复古特殊", def: "", core: "参考：《新蝙蝠侠》追车戏。焦外极度旋转（旋焦），中心聚焦，迷幻感。" },
    { id: "lens_petzval", name: "Petzval Art Lens (Petzval Art Lens)", group: "C. 复古特殊", def: "", core: "参考：19世纪早期摄影。极端的旋转焦外，边缘几乎不可见，梦境般的隧道感。" },
    { id: "lens_angenieux", name: "Angénieux Zoom (Angénieux Zoom)", group: "C. 复古特殊", def: "", core: "参考：法国新浪潮。变焦镜头的鼻祖，柔和且带有轻微的色散。" },
    { id: "lens_kinoptik", name: "Kinoptik (Kinoptik)", group: "C. 复古特殊", def: "", core: "参考：库布里克。法国镜头，独特的漩涡散景，色彩浓郁。" },
    { id: "lens_laowa_probe", name: "Laowa Probe (Laowa Probe)", group: "C. 复古特殊", def: "", core: "参考：微观广告、昆虫视角。极其细长的镜身，穿梭于狭小空间，异世界感。" },
    { id: "lens_fisheye", name: "Fisheye Lens (Fisheye Lens)", group: "C. 复古特殊", def: "", core: "参考：《宠儿》、滑板视频。极度球形畸变，窥视感，空间扭曲。" }
];


// 3. 显影协议 (Development Protocol) -> 现在称为 Color Profile
export const AES_BASE_TONE: LibraryItemDef[] = [
    // --- Group A. 现代基准 (Modern Standards) ---
    { id: "dp_neutral", name: "中性基准 (Neutral Standard)", group: "A. 现代基准", def: "Medium contrast, medium saturation. Standard photography look.", core: "【中对比度 · 中饱和度】参考：新闻摄影、教科书。无风格化，忠实还原人眼所见。" },
    { id: "dp_vivid", name: "生动广告 (Vivid Commercial)", group: "A. 现代基准", def: "High contrast, high saturation. High vibrancy, punchy.", core: "【高对比度 · 高饱和度】参考：Apple广告、迈克尔·贝。色彩鲜艳炸裂，黑白分明，为了吸引眼球而生。" },
    { id: "dp_log", name: "电影原片 (Cine-Log)", group: "A. 现代基准", def: "Ultra low contrast, low saturation. Flat profile, high dynamic range.", core: "【超低对比度 · 低饱和度】参考：RAW原片、Alexa LogC。灰度极高，保留所有亮暗细节，等待调色。" },

    // --- Group B. 时代美学 (Era Aesthetics) ---
    { id: "dp_technicolor", name: "胶片奇观 (50s-70s Technicolor)", group: "B. 时代美学", def: "High contrast, extremely high saturation. 3-Strip Technicolor process.", core: "【高对比度 · 极高饱和度】参考：《绿野仙踪》《阴风阵阵》。红绿蓝三原色分离，肤色偏红，人工感强烈的梦幻。" },
    { id: "dp_90s_cine", name: "黄金年代 (90s Cinematic)", group: "B. 时代美学", def: "Medium-high contrast, warm saturation. Kodak Vision3 stock.", core: "【中高对比度 · 暖饱和度】参考：《泰坦尼克号》《肖申克》。柯达胶片的厚重感，黑色扎实，高光偏暖。" },
    { id: "dp_y2k_digi", name: "千禧视觉 (Y2K Early Digital)", group: "B. 时代美学", def: "High contrast, cool saturation. Early digital sensor look.", core: "【高对比度 · 冷饱和度】参考：《黑客帝国》《刀锋战士》。早期数码相机的冷调，高光溢出，蓝色/青色偏色。" },
    { id: "dp_naturalism", name: "自然主义 (Naturalism)", group: "B. 时代美学", def: "Natural light, soft roll-off. Realistic but polished.", core: "【自然光 · 柔和过渡】参考：《荒野猎人》。模仿人眼在自然环境下的感受。" },

    // --- Group C. 极端风格 (Extreme Styles) ---
    { id: "dp_bleach", name: "跳银处理 (Bleach Bypass)", group: "C. 极端风格", def: "Extremely high contrast, extremely low saturation. Silver retention process.", core: "【极高对比度 · 极低饱和度】参考：《拯救大兵瑞恩》《七宗罪》。金属质感，暗部死黑，粗糙，战争与犯罪的色调。" },
    { id: "dp_soft_fade", name: "柔和褪色 (Soft Faded)", group: "C. 极端风格", def: "Low contrast, low saturation. Lifted blacks, matte finish.", core: "【低对比度 · 低饱和度】参考：日系写真、岩井俊二。黑色发灰，空气感强，带有怀旧和记忆的模糊感。" },
    { id: "dp_mono_art", name: "艺术黑白 (Fine-Art Mono)", group: "C. 极端风格", def: "Extremely high contrast, zero saturation. Zone System B&W.", core: "【极高对比度 · 零饱和度】参考：《罗马》《辛德勒名单》。安塞尔·亚当斯式的区域曝光，纯粹的光影雕塑。" },
    { id: "dp_high_key", name: "狂喜过曝 (Euphoric Overexposure)", group: "C. 极端风格", def: "Blown highlights, low contrast. Dreamy.", core: "【高光溢出 · 低对比】参考：《仲夏夜惊魂》。光线淹没一切，神圣或迷幻。" },
    { id: "dp_stark", name: "高对比硬核感 (Stark High-Contrast)", group: "C. 极端风格", def: "Crushed blacks, blown whites. Graphic novel style.", core: "【死黑死白 · 漫画感】参考：《罪恶之城》。去除中间调，只保留黑白二元。" },

    // --- Group D. 特殊渲染 (Specialized Rendering) ---
    { id: "dp_muted_matte", name: "哑光高级灰 (Muted Matte)", group: "D. 特殊渲染", def: "Medium-low contrast, low saturation. Matte finish, urban tones.", core: "【中低对比度 · 低饱和度】参考：莫兰迪色系、北欧家居。色彩不鲜艳但有质感，高级灰，情绪内敛。" },
    { id: "dp_hdr", name: "高动态均衡 (High Dynamic HDR)", group: "D. 特殊渲染", def: "Low contrast, high saturation. Equalized shadows and highlights.", core: "【低对比度 · 高饱和度】参考：房地产广告、风景大片。阴影和高光都有细节，甚至显得由于过于清晰而“假”。" },
    { id: "dp_cross", name: "交叉冲洗 (Cross Process)", group: "D. 特殊渲染", def: "High contrast, shifted saturation. Color shift chemistry.", core: "【高对比度 · 偏色饱和度】参考：LOMO摄影、《天使爱美丽》。正片负冲，暗部偏绿/黄，高亮偏红，迷幻的不真实感。" }
];

// 4. 色彩科学 (Color Science)
export const AES_COLOR_SCIENCE: LibraryItemDef[] = [
    // --- Group 1: 胶片模拟 (Film Stocks) ---
    { id: "cs_kodak_vision3", name: "Kodak Vision3 (Kodak Vision3)", group: "1. 胶片模拟", def: "", core: "参考：现代好莱坞标配。宽容度极高，肤色自然红润，高光滚落柔和。" },
    { id: "cs_portra_400", name: "Kodak Portra 400 (Kodak Portra 400)", group: "1. 胶片模拟", def: "", core: "参考：人像摄影首选。极佳的肤色表现，温暖的黄色调，细腻的颗粒。" },
    { id: "cs_ektachrome", name: "Kodak Ektachrome (Kodak Ektachrome)", group: "1. 胶片模拟", def: "", core: "参考：《亢奋》。冷色调，蓝色与洋红表现突出，高反差反转片质感。" },
    { id: "cs_kodachrome", name: "Kodachrome (Kodachrome)", group: "1. 胶片模拟", def: "", core: "参考：国家地理老照片。独特的红黄显色，无法复制的复古厚重感，已停产的传奇。" },
    { id: "cs_tri_x", name: "Kodak Tri-X (Kodak Tri-X)", group: "1. 胶片模拟", def: "", core: "参考：新闻纪实。经典的黑白胶片，颗粒明显，对比度强，充满戏剧性。" },
    { id: "cs_gold_200", name: "Kodak Gold 200 (Kodak Gold 200)", group: "1. 胶片模拟", def: "", core: "参考：家庭相册。金黄色的阳光感，廉价但温馨的消费级胶片。" },
    { id: "cs_fuji_eterna", name: "Fujifilm Eterna (Fujifilm Eterna)", group: "1. 胶片模拟", def: "", core: "参考：日系电影。低反差，低饱和，色彩淡雅，阴影偏青，适合长片叙事。" },
    { id: "cs_fuji_velvia", name: "Fujifilm Velvia (Fujifilm Velvia)", group: "1. 胶片模拟", def: "", core: "参考：风光摄影。极高的饱和度和对比度，绿色和紫色表现夸张，不适合人像。" },
    { id: "cs_ilford_hp5", name: "Ilford HP5 (Ilford HP5)", group: "1. 胶片模拟", def: "", core: "参考：街头摄影。宽容度高，颗粒感柔和，经典的英式黑白。" },
    { id: "cs_cinestill_800t", name: "CineStill 800T (CineStill 800T)", group: "1. 胶片模拟", def: "", core: "参考：夜景街拍。钨丝灯平衡，高光处有标志性的红色光晕 (Halation)。" },
    { id: "cs_agfa_vista", name: "Agfa Vista (Agfa Vista)", group: "1. 胶片模拟", def: "", core: "参考：廉价傻瓜机。鲜艳的红色表现，整体偏暖，充满生活气息。" },
    { id: "cs_polaroid", name: "Polaroid 600 (Polaroid 600)", group: "1. 胶片模拟", def: "", core: "参考：拍立得。柔焦，色彩偏移，显影液的化学痕迹，独特的白框构图。" },
    { id: "cs_technicolor", name: "Technicolor (Technicolor)", group: "1. 胶片模拟", def: "", core: "参考：《乱世佳人》。红绿蓝三层染印，色彩分离度极高，人工修饰的完美。" },
    { id: "cs_lomochrome", name: "Lomochrome (Lomochrome)", group: "1. 胶片模拟", def: "", core: "参考：LOMO实验。将绿色转化为紫色，创造异星般的超现实景观。" },
    { id: "cs_aerochrome", name: "Aerochrome (Aerochrome)", group: "1. 胶片模拟", def: "", core: "参考：红外摄影。将绿色植被转化为鲜红色，迷幻的视觉效果。" },
    { id: "cs_vision_500t", name: "Kodak Vision 500T (Vision 500T)", group: "1. 胶片模拟", def: "", core: "参考：《花样年华》。高感光度钨丝灯片，颗粒感强，色彩浓郁，适合夜景与室内。" },
    { id: "cs_kodak_5247", name: "Kodak 5247 (Kodak 5247)", group: "1. 胶片模拟", def: "", core: "参考：70-80年代大片。细腻的颗粒，极佳的肤色，ET和星球大战的底片。" },
    { id: "cs_kodak_5254", name: "Kodak 5254 (Kodak 5254)", group: "1. 胶片模拟", def: "", core: "参考：《教父》。70年代早期风格，色彩扎实，略带复古黄调。" },
    { id: "cs_kodak_5293", name: "Kodak 5293 (Kodak 5293)", group: "1. 胶片模拟", def: "", core: "参考：《天使爱美丽》。高饱和度，独特的绿色和黄色表现，充满童话感。" },
    { id: "cs_kodak_5245", name: "Kodak 5245 (Kodak 5245)", group: "1. 胶片模拟", def: "", core: "参考：《泰坦尼克号》。极细颗粒，日光片，色彩极其鲜艳和清晰。" },
    { id: "cs_kodak_double_x", name: "Kodak Double-X (Kodak Double-X)", group: "1. 胶片模拟", def: "", core: "参考：《辛德勒名单》。高反差黑白，暗部深沉，充满力量感。" },
    { id: "cs_kodak_plus_x", name: "Kodak Plus-X (Kodak Plus-X)", group: "1. 胶片模拟", def: "", core: "参考：老黑白电影。中等速度，极好的灰阶过渡。" },
    { id: "cs_sovcolor", name: "Sovcolor (Sovcolor)", group: "1. 胶片模拟", def: "", core: "参考：苏联电影。独特的淡粉色和青色偏色，带有某种逝去的帝国感。" },
    { id: "cs_redlogfilm", name: "RedLogFilm (RedLogFilm)", group: "1. 胶片模拟", def: "", core: "参考：RED摄影机胶片曲线。平滑的灰度，适合后期重度调色。" },
    { id: "cs_kodak_5279", name: "Kodak 5279 (Kodak 5279)", group: "1. 胶片模拟", def: "", core: "参考：《黑客帝国》。极细颗粒，高感光度，适合暗光下的科幻质感。" },
    { id: "cs_kodak_5296", name: "Kodak 5296 (Kodak 5296)", group: "1. 胶片模拟", def: "", core: "参考：90年代动作片。锐利，高饱和，典型的商业片质感。" },

    // --- Group 2: 数码配置 (Digital Profiles) ---
    { id: "cs_red_ipp2", name: "RED IPP2 (RED IPP2)", group: "2. 数码配置", def: "", core: "参考：Netflix剧集。极致的锐度与分辨率，色彩科学偏向冷艳，适合特效流程。" },
    { id: "cs_aces", name: "ACES (ACES)", group: "2. 数码配置", def: "", core: "参考：视效大片。学院色彩编码系统，统一、标准、覆盖全色域的工业流程。" },
    { id: "cs_rec709", name: "Rec.709 (Rec.709)", group: "2. 数码配置", def: "", core: "参考：电视广播。标准高清电视色彩，对比度较高，动态范围受限，日常观看标准。" },
    { id: "cs_hdr", name: "HDR / Rec.2020 (HDR / Rec.2020)", group: "2. 数码配置", def: "", core: "参考：杜比影院。极高的亮度范围与广色域，黑色更黑，亮部刺眼，极度真实。" },
    { id: "cs_dolby", name: "Dolby Vision (Dolby Vision)", group: "2. 数码配置", def: "", core: "参考：流媒体平台。基于场景的动态元数据，确保每一帧的色彩与亮度最优。" },
    { id: "cs_sony_sgamut", name: "Sony S-Gamut (Sony S-Gamut)", group: "2. 数码配置", def: "", core: "参考：索尼电影机。极宽的色域，尤其对蓝色和绿色的表现力极强。" },
    { id: "cs_arri_logc", name: "ARRI LogC (ARRI LogC)", group: "2. 数码配置", def: "", core: "参考：顶级电影。极其柔和的高光滚落，肤色还原最接近胶片。" },
    { id: "cs_canon_log", name: "Canon Log (Canon Log)", group: "2. 数码配置", def: "", core: "参考：独立电影。肤色偏暖，讨喜，适合人像。" },
    { id: "cs_gopro_flat", name: "GoPro Flat (GoPro Flat)", group: "2. 数码配置", def: "", core: "参考：极限运动。低对比度，保留高光细节，典型的运动相机质感。" }
];

// 7.1 画面质感 (Texture - Surface/Render Style)
export const AES_TEXTURE_RENDER: LibraryItemDef[] = [
    // A. 胶片与模拟协议
    { id: "tx_r_organic", name: "有机电影感 (Organic Film)", group: "A. 胶片与模拟协议", def: "", core: "参考：胶片重映。画面带有生命的呼吸感，非完美的随机性，色彩层级丰富。" },
    { id: "tx_r_halation", name: "高光红晕 (Highlight Halation)", group: "A. 胶片与模拟协议", def: "", core: "参考：CineStill。强光源周围出现的红色光晕扩散，胶片特有的化学反应。" },
    { id: "tx_r_diffusion", name: "胶片弥散 (Film Diffusion)", group: "A. 胶片与模拟协议", def: "", core: "参考：老电影。光线在乳剂层内的散射，导致锐度降低，质感柔和。" },
    { id: "tx_r_rolloff", name: "高光柔和卷收 (Soft Highlight Roll-off)", group: "A. 胶片与模拟协议", def: "", core: "参考：ARRI画面。高光部分不会死白，而是平滑过渡到白色的优雅曲线。" },
    { id: "tx_r_distressed", name: "物理磨损质感 (Distressed Celluloid)", group: "A. 胶片与模拟协议", def: "", core: "参考：《恐怖星球》。划痕、灰尘、霉斑、断片，模拟老旧胶片的物理损伤。" },
    { id: "tx_r_silver", name: "银盐堆叠质感 (Silver Halide Texture)", group: "A. 胶片与模拟协议", def: "", core: "参考：暗房冲印。黑白照片中银盐颗粒堆积产生的独特厚重感与金属光泽。" },

    // B. 数码与现代协议
    { id: "tx_r_clinical", name: "冷峻工业锐度 (Clinical Sharpness)", group: "B. 数码与现代协议", def: "", core: "参考：大卫·芬奇。每一个像素都清晰可见，毫发毕现，没有任何模糊的冷酷感。" },
    { id: "tx_r_pristine", name: "极致纯净渲染 (Pristine Digital)", group: "B. 数码与现代协议", def: "", core: "参考：《遗落战境》。毫无噪点，画面如蒸馏水般纯净，典型的科幻未来感。" },
    { id: "tx_r_antihalo", name: "防光晕涂层 (Anti-Halation)", group: "B. 数码与现代协议", def: "", core: "参考：现代数码相机。高光边缘锋利，没有溢出，精准的光电转换。" },
    { id: "tx_r_micro", name: "超高微反差 (Ultra Micro-Contrast)", group: "B. 数码与现代协议", def: "", core: "参考：徕卡镜头。在相近色调中依然保持极高的纹理辨识度，立体感强。" },
    { id: "tx_r_smooth", name: "数码平滑协议 (Smooth Digital Finish)", group: "B. 数码与现代协议", def: "", core: "参考：美颜应用。像塑料或陶瓷一样光滑的表面处理，去除了所有高频细节。" },
    { id: "tx_r_hdr", name: "高动态还原 (HDR Rendering)", group: "B. 数码与现代协议", def: "", core: "参考：人眼视觉。同时保留极亮与极暗的细节，超越传统媒介的宽容度。" },

    // C. 物理表面质感
    { id: "tx_r_matte", name: "哑光磨砂面 (Matte Surface)", group: "C. 物理表面质感", def: "", core: "参考：高级灰涂料。不反光，吸光材质，质感沉稳、低调、内敛。" },
    { id: "tx_r_glossy", name: "湿润高光泽 (Glossy / Wet Look)", group: "C. 物理表面质感", def: "", core: "参考：唇釉、跑车漆。像液体一样流动的高光，充满欲望与诱惑力。" },
    { id: "tx_r_velvet", name: "丝滑织物感 (Velvety Fabric)", group: "C. 物理表面质感", def: "", core: "参考：天鹅绒。在光线切线方向产生的高光，柔软、奢华、吸光。" },
    { id: "tx_r_metal", name: "金属冷硬质感 (Metallic Texture)", group: "C. 物理表面质感", def: "", core: "参考：拉丝钢。冰冷、坚硬、带有各向异性的反光特性。" },
    { id: "tx_r_rough", name: "粗糙颗粒表面 (Rough / Gritty Surface)", group: "C. 物理表面质感", def: "", core: "参考：砂纸、混凝土。充满摩擦力，未打磨的原始质感。" },
    { id: "tx_r_glass", name: "玻璃通透感 (Glassy / Translucent)", group: "C. 物理表面质感", def: "", core: "参考：水晶。光线可以穿穿透，带有折射与焦散效果，清澈。" },

    // D. 特殊艺术协议
    { id: "tx_r_bleach", name: "跳银金属感 (Bleach Bypass Texture)", group: "D. 特殊艺术协议", def: "", core: "参考：《拯救大兵瑞恩》。高反差，低饱和，像金属一样的皮肤质感，残酷。" },
    { id: "tx_r_faded", name: "复古褪色质感 (Faded Vintage)", group: "D. 特殊艺术协议", def: "", core: "参考：旧照片。黑色部分发灰，色彩偏移，像是经过了时间的氧化。" },
    { id: "tx_r_lofi", name: "低保真模拟 (Lo-Fi Analog)", group: "D. 特殊艺术协议", def: "", core: "参考：VHS录像带。模糊、色度干扰、扫描线，充满信号丢失的怀旧感。" },
    { id: "tx_r_dreamy", name: "柔焦梦幻感 (Dreamy Soft-Focus)", group: "D. 特殊艺术协议", def: "", core: "参考：好莱坞黄金时代女星。用丝袜或凡士林模糊镜头，产生发光的天使感。" },
    { id: "tx_r_stark", name: "高对比硬核感 (Stark High-Contrast)", group: "D. 特殊艺术协议", def: "", core: "参考：《罪恶之城》。只有黑与白，没有中间灰，漫画般的强烈视觉冲击。" },
    { id: "tx_r_neutral", name: "中性真实还原 (Neutral Authenticity)", group: "D. 特殊艺术协议", def: "", core: "参考：博物馆档案。没有任何风格化倾向，绝对客观的物体记录。" },
    { id: "tx_r_pixel_glitch", name: "像素破碎 (Pixel Glitch)", group: "D. 特殊艺术协议", def: "", core: "参考：故障艺术。数据损坏导致的像素块、色块偏移。" },
    { id: "tx_r_raytracing", name: "光线追踪 (Ray Tracing)", group: "D. 特殊艺术协议", def: "", core: "参考：高端渲染。物理精确的光线反射、折射与阴影，极致真实。" }
];

// 7.2 物理颗粒 (Grain - Noise/Film Artifacts)
export const AES_PHYSICAL_GRAIN: LibraryItemDef[] = [
    { id: "gr_denoised", name: "极致纯净 (Denoised/Pristine)", group: "G2. 物理颗粒", def: "", core: "参考：Pixar动画。完全没有噪点，顺滑如丝，数字化的完美。" },
    { id: "gr_micro35", name: "微细 35mm (Micro 35mm Grain)", group: "G2. 物理颗粒", def: "", core: "参考：大卫·芬奇。几乎不可见但提供纹理的极细颗粒，现代胶片感。" },
    { id: "gr_fine35", name: "细腻 35mm (Fine 35mm Grain)", group: "G2. 物理颗粒", def: "", core: "参考：诺兰IMAX。标准的、高质量的电影颗粒，清晰且有机。" },
    { id: "gr_std35", name: "标准 35mm (Standard 35mm Grain)", group: "G2. 物理颗粒", def: "", core: "参考：90年代好莱坞。明显的胶片质感，充满活力的随机噪点。" },
    { id: "gr_organic", name: "有机呼吸感 (Organic Breathing Grain)", group: "G2. 物理颗粒", def: "", core: "参考：独立电影。颗粒似乎在画面中游动，赋予静止画面生命力。" },
    { id: "gr_std16", name: "标准 16mm (Standard 16mm Grain)", group: "G2. 物理颗粒", def: "", core: "参考：《卡罗尔》。较粗的颗粒，边缘柔和，带有明显的胶片特征。" },
    { id: "gr_rough16", name: "粗糙 16mm (Rough 16mm Grain)", group: "G2. 物理颗粒", def: "", core: "参考：《德州电锯杀人狂》。非常明显的颗粒，画面粗砺，带有纪录片感。" },
    { id: "gr_8mm", name: "颗粒感 8mm (Gritty 8mm Look)", group: "G2. 物理颗粒", def: "", core: "参考：家庭录像。巨大的颗粒块，细节丢失，极度怀旧与私密。" },
    { id: "gr_silver", name: "银盐结晶 (Silver Halide Crystals)", group: "G2. 物理颗粒", def: "", core: "参考：手工黑白照片。不规则的、锐利的晶体结构感，非数字噪点。" },
    { id: "gr_iso100", name: "ISO 100 低噪点 (ISO 100 Low Noise)", group: "G2. 物理颗粒", def: "", core: "参考：日光下的风景照。极其干净，只有在暗部有微弱纹理。" },
    { id: "gr_iso800", name: "ISO 800 胶片噪点 (ISO 800 Film Noise)", group: "G2. 物理颗粒", def: "", core: "参考：室内自然光。可见的颗粒结构，增加了画面的锐度和质感。" },
    { id: "gr_iso3200", name: "ISO 3200 强噪点 (ISO 3200 High Noise)", group: "G2. 物理颗粒", def: "", core: "参考：夜间新闻摄影。画面充满噪点，细节被淹没，充满紧迫感。" },
    { id: "gr_digital", name: "数码传感器噪点 (Digital Sensor Noise)", group: "G2. 物理颗粒", def: "", core: "参考：手机夜拍。带有彩色杂讯（Color Noise）的非有机噪点，数字感。" },
    { id: "gr_vhs", name: "复古 VHS 噪点 (Retro VHS Noise)", group: "G2. 物理颗粒", def: "", core: "参考：老录像带。横向的磁带干扰线，雪花点，信号丢失的伪影。" },
    { id: "gr_static", name: "电视雪花/静电 (TV Static/Noise)", group: "G2. 物理颗粒", def: "", core: "参考：无信号频道。剧烈的黑白闪烁点，覆盖整个画面，混乱。" },
    { id: "gr_dust", name: "物理灰尘划痕 (Physical Dust & Scratches)", group: "G2. 物理颗粒", def: "", core: "参考：老电影放映。随机出现的黑点和白线，胶片物理损伤的痕迹。" },
    { id: "gr_line_jitter", name: "线条颤动 (Line Jitter)", group: "G2. 物理颗粒", def: "", core: "参考：手绘动画。线条边缘的随机抖动，充满生命力。" }
];

// 5. 创作介质 (Art Medium)
export const AES_ART_MEDIUM: LibraryItemDef[] = [
    { id: "am_digital", name: "数字绘画 (Digital Painting)", group: "A. 介质", def: "", core: "Clean, precise, layered." },
    { id: "am_watercolor", name: "水彩 (Watercolor)", group: "A. 介质", def: "", core: "Transparent, bleeding, organic." },
    { id: "am_oil", name: "油画 (Oil Paint)", group: "A. 介质", def: "", core: "Textured, blended, heavy." },
    { id: "am_ink", name: "水墨/墨水 (Ink Wash)", group: "A. 介质", def: "", core: "High contrast, flow, calligraphy." },
    { id: "am_pencil", name: "铅笔/素描 (Pencil)", group: "A. 介质", def: "", core: "Rough, graphite texture, sketch." },
    { id: "am_vector", name: "矢量艺术 (Vector Art)", group: "A. 介质", def: "", core: "Infinite scale, sharp shapes." },
    { id: "am_pastel", name: "粉笔/蜡笔 (Pastel/Crayon)", group: "A. 介质", def: "", core: "Soft, grainy, childhood." },
    { id: "am_acrylic", name: "丙烯 (Acrylic)", group: "A. 介质", def: "", core: "Bright, flat, plastic." },
    { id: "am_charcoal", name: "炭笔 (Charcoal)", group: "A. 介质", def: "", core: "Smudged, dark, expressive." },
    { id: "am_marker", name: "马克笔 (Marker)", group: "A. 介质", def: "", core: "Bold, streaky, vibrant." },
    { id: "am_pixel", name: "像素 (Pixel Art)", group: "A. 介质", def: "", core: "Blocky, retro, limited resolution." },
    { id: "am_3d_render", name: "3D渲染 (3D Render)", group: "A. 介质", def: "", core: "Calculated, lit, modelled." },
    { id: "am_collage", name: "拼贴 (Collage)", group: "A. 介质", def: "", core: "Mixed media, cut-out, layered." },
    { id: "am_spray", name: "喷漆 (Spray Paint)", group: "A. 介质", def: "", core: "Soft edges, drips, street." },
    { id: "am_cel", name: "赛璐璐 (Cel Shaded)", group: "A. 介质", def: "", core: "Hard shadows, anime style." },
    { id: "am_pencil_sketch", name: "铅笔素描 (Pencil Sketch)", group: "A. 介质", def: "", core: "Rough, graphite texture, sketch." },
    { id: "am_mixed", name: "混合媒介 (Mixed Media)", group: "A. 介质", def: "", core: "Combines photos, paint, and digital elements." },
    { id: "am_cutout", name: "剪纸拼贴 (Cutout Collage)", group: "A. 介质", def: "", core: "Sharp edges, layered paper texture." },
    { id: "am_impasto", name: "油画笔触 (Oil Impasto)", group: "A. 介质", def: "", core: "Thick, visible paint strokes, 3D texture." },
    { id: "am_digital_paint", name: "数字厚涂 (Digital Painting)", group: "A. 介质", def: "", core: "Smooth digital blending, high detail." }
];

// 6. 线条质量 (Line Quality)
export const AES_LINE_QUALITY: LibraryItemDef[] = [
    { id: "lq_no_line", name: "无线绘 (Lineless)", group: "B. 线条", def: "", core: "Defined by shapes and colors." },
    { id: "lq_thin", name: "细轮廓 (Thin Outlines)", group: "B. 线条", def: "", core: "Delicate, precise, technical." },
    { id: "lq_thick", name: "粗轮廓 (Thick Outlines)", group: "B. 线条", def: "", core: "Bold, pop-art, sticker-like." },
    { id: "lq_sketchy", name: "草图线 (Sketchy)", group: "B. 线条", def: "", core: "Messy, multiple passes, energetic." },
    { id: "lq_clean", name: "干净线稿 (Clean Lineart)", group: "B. 线条", def: "", core: "Consistent weight, smooth." },
    { id: "lq_brush", name: "毛笔触感 (Brush Stroke)", group: "B. 线条", def: "", core: "Variable width, tapered, organic." },
    { id: "lq_jitter", name: "颤抖线 (Jittery)", group: "B. 线条", def: "", core: "Hand-drawn animation feel." },
    { id: "lq_dotted", name: "虚线 (Dotted/Dashed)", group: "B. 线条", def: "", core: "Technical, blueprint style." },
    { id: "lq_chalk", name: "粉笔线 (Chalky)", group: "B. 线条", def: "", core: "Rough, textured edges." },
    { id: "lq_ink_bleed", name: "晕染线 (Ink Bleed)", group: "B. 线条", def: "", core: "Spreading into paper, soft." },
    { id: "lq_vector", name: "矢量线 (Vector)", group: "B. 线条", def: "", core: "Mathematically perfect curves." },
    { id: "lq_rough", name: "粗糙线 (Rough)", group: "B. 线条", def: "", core: "Textured, pencil on rough paper." },
    { id: "lq_smooth", name: "圆滑线 (Smooth Lines)", group: "B. 线条", def: "", core: "Polished, vector-like curves." },
    { id: "lq_no_shadow", name: "无影 (No Shadow)", group: "B. 线条", def: "", core: "Flat lighting, purely line driven." }
];

// 7. 画布质感 (Canvas Texture)
export const AES_CANVAS_TEXTURE: LibraryItemDef[] = [
    { id: "ct_smooth", name: "平滑纸 (Smooth Paper)", group: "C. 纹理", def: "", core: "Digital standard, clean." },
    { id: "ct_watercolor", name: "水彩纸 (Watercolor Paper)", group: "C. 纹理", def: "", core: "Bumpy, absorbent, grain." },
    { id: "ct_canvas", name: "油画布 (Canvas)", group: "C. 纹理", def: "", core: "Woven grid pattern." },
    { id: "ct_kraft", name: "牛皮纸 (Kraft Paper)", group: "C. 纹理", def: "", core: "Brown, fibrous, recycled." },
    { id: "ct_halftone", name: "半调 (Halftone)", group: "C. 纹理", def: "", core: "Comic book dots, manga style." },
    { id: "ct_noise", name: "噪点 (Digital Noise)", group: "C. 纹理", def: "", core: "Grainy overlay, film look." },
    { id: "ct_grunge", name: "脏迹 (Grunge)", group: "C. 纹理", def: "", core: "Scratches, stains, aged." },
    { id: "ct_screen", name: "网点纸 (Screen Tone)", group: "C. 纹理", def: "", core: "Manga shading dots." },
    { id: "ct_wood", name: "木纹 (Wood Grain)", group: "C. 纹理", def: "", core: "Organic lines, painted on wood." },
    { id: "ct_stone", name: "岩石 (Stone)", group: "C. 纹理", def: "", core: "Rough, pitted, fresco style." },
    { id: "ct_fabric", name: "织物 (Fabric)", group: "C. 纹理", def: "", core: "Thread patterns, cloth." },
    { id: "ct_crumpled", name: "褶皱纸 (Crumpled Paper)", group: "C. 纹理", def: "", core: "Creases, shadows, 3D surface." },
    { id: "ct_cardboard", name: "粗糙纸板 (Cardboard)", group: "C. 纹理", def: "", core: "Rough fiber texture." },
    { id: "ct_parchment", name: "羊皮纸 (Parchment)", group: "C. 纹理", def: "", core: "Yellowed, organic animal skin texture." },
    { id: "ct_paper_texture", name: "纸张纹理 (Paper Texture)", group: "C. 纹理", def: "", core: "Generic fibrous paper surface." }
];

// --- 8. 光学格式 (OPTICAL FORMAT) - Same as Realism for compatibility ---
export const AES_OPTICAL_FORMAT: LibraryItemDef[] = [
  { id: "fmt_s35", name: "Super 35mm", def: "" },
  { id: "fmt_std35", name: "Standard 35mm", def: "" },
  { id: "fmt_ff", name: "Full Frame", def: "" },
  { id: "fmt_vv", name: "VistaVision", def: "" },
  { id: "fmt_65mm", name: "65mm Large Format", def: "" },
  { id: "fmt_arri65", name: "ARRI 65", def: "" },
  { id: "fmt_ana_2x", name: "变形宽银幕 (Anamorphic 2x)", def: "" },
  { id: "fmt_anamorphic", name: "Anamorphic", def: "" },
  { id: "fmt_open_gate", name: "Open Gate", def: "" },
  { id: "fmt_academy", name: "学院比例 (Academy Ratio)", def: "" },
  { id: "fmt_imax", name: "IMAX", def: "" },
  { id: "fmt_techniscope", name: "Techniscope", def: "" },
  { id: "fmt_16mm", name: "16mm", def: "" },
  { id: "fmt_medium", name: "Medium Format", def: "" },
  { id: "fmt_large", name: "Large Format", def: "" },
  { id: "fmt_action", name: "Action Cam Sensor", def: "" }
];
