
import { LibraryItemDef } from '../../types';

// =============================================================================
// LAYER 1.1: 固定参数与基准 (FIXED MODULES)
// =============================================================================

const extractNameEn = (name: string) => name.match(/\(([^()]+)\)\s*$/)?.[1]?.trim();
const extractNameCn = (name: string) => name.split('(')[0].trim();
const enrichVisualMaterialItem = (scope: string, tags: readonly string[]) => (item: LibraryItemDef): LibraryItemDef => {
    const nameCn = extractNameCn(item.name);
    const nameEn = item.nameEn || extractNameEn(item.name);
    const nextTags = Array.from(new Set([
        scope,
        ...tags,
        ...(item.tags || []),
        ...item.id.split('_').filter(Boolean)
    ]));
    return {
        ...item,
        nameEn,
        def: item.def || item.core || '',
        defEn: item.defEn || item.coreEn || item.core || '',
        aliases: item.aliases || [nameCn, nameEn].filter(Boolean) as string[],
        tags: nextTags
    };
};

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
].map(enrichVisualMaterialItem('base_tone', ['contrast', 'saturation', 'dynamic_range']));

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
].map(enrichVisualMaterialItem('color_science', ['film_stock', 'lut', 'color_pipeline']));

// 7.1 画面质感 (Texture - Surface/Render Style)
export const AES_TEXTURE_RENDER: LibraryItemDef[] = [
    // A. 胶片与模拟表面
    { id: "tx_r_organic", name: "有机胶片表面 (Organic Film Surface)", group: "A. 胶片与模拟表面", def: "", core: "非完全均匀的乳剂层、轻微亮度漂移和自然随机纹理，让画面保留胶片材料感。" },
    { id: "tx_r_halation", name: "高光晕染 (Highlight Halation)", group: "A. 胶片与模拟表面", def: "", core: "强光边缘产生柔和红橙或白色晕圈，只影响亮部扩散，不改变主体和场景。" },
    { id: "tx_r_diffusion", name: "柔化弥散 (Optical Diffusion)", group: "A. 胶片与模拟表面", def: "", core: "降低硬锐边缘，让高光轻微扩散，形成柔和但仍可读的摄影表面。" },
    { id: "tx_r_rolloff", name: "高光柔和卷收 (Soft Highlight Roll-off)", group: "A. 胶片与模拟表面", def: "", core: "高光从细节过渡到白场时保持层次，避免死白断裂。" },
    { id: "tx_r_distressed", name: "底片磨损表面 (Distressed Celluloid)", group: "A. 胶片与模拟表面", def: "", core: "可见划痕、灰尘、霉斑或片基损耗，只作为影像表层痕迹使用。" },
    { id: "tx_r_silver", name: "银盐密度 (Silver Halide Density)", group: "A. 胶片与模拟表面", def: "", core: "黑白影像中银盐颗粒形成厚重密度、暗部层次和轻微金属感。" },

    // B. 数码与后期表面
    { id: "tx_r_clinical", name: "临床级锐度 (Clinical Sharpness)", group: "B. 数码与后期表面", def: "", core: "边缘、毛孔和材料细节被高解析保留，画面干净、冷静、少弥散。" },
    { id: "tx_r_pristine", name: "无噪纯净面 (Pristine Digital Finish)", group: "B. 数码与后期表面", def: "", core: "噪点和脏污被压到最低，暗部平滑，整体呈现高洁净数字完成度。" },
    { id: "tx_r_antihalo", name: "防光晕锐边 (Anti-Halation Edge)", group: "B. 数码与后期表面", def: "", core: "高光边界保持清楚，减少溢光、紫边和乳剂式扩散。" },
    { id: "tx_r_micro", name: "高微反差 (High Micro-Contrast)", group: "B. 数码与后期表面", def: "", core: "相近明度中的纹理仍然分明，增强皮肤、布料和硬表面的立体细节。" },
    { id: "tx_r_smooth", name: "平滑数码修饰 (Smooth Digital Finish)", group: "B. 数码与后期表面", def: "", core: "弱化高频瑕疵和粗颗粒，让表面更光洁，但仍保留基本材质边界。" },
    { id: "tx_r_hdr", name: "高动态细节 (High Dynamic Detail)", group: "B. 数码与后期表面", def: "", core: "亮部和暗部同时保留信息，适合强调现代数码宽容度。" },

    // C. 可见材料表面
    { id: "tx_r_matte", name: "哑光磨砂面 (Matte Surface)", group: "C. 可见材料表面", def: "", core: "反射被压低，表面吸光，呈现干燥、低亮度、克制的材料触感。" },
    { id: "tx_r_glossy", name: "湿润高光面 (Glossy / Wet Surface)", group: "C. 可见材料表面", def: "", core: "表面有连续高光、油膜或水膜反射，只强化既有材料的光泽。" },
    { id: "tx_r_velvet", name: "丝绒吸光面 (Velvety Surface)", group: "C. 可见材料表面", def: "", core: "切线方向出现柔软高光，正面吸光，适合织物、皮肤或暗色材料。" },
    { id: "tx_r_metal", name: "金属各向异性 (Anisotropic Metal)", group: "C. 可见材料表面", def: "", core: "拉丝、刮痕和方向性反射清楚，只作为现有金属表面的光学证据。" },
    { id: "tx_r_rough", name: "粗糙颗粒面 (Rough / Gritty Surface)", group: "C. 可见材料表面", def: "", core: "表面有摩擦、孔洞、砂砾或未打磨颗粒，增强材料重量。" },
    { id: "tx_r_glass", name: "透明折射面 (Glassy / Translucent Surface)", group: "C. 可见材料表面", def: "", core: "透明材料出现折射、边缘厚度、高光和轻微焦散，不新增玻璃道具。" },

    // D. 影像损耗与信号表面
    { id: "tx_r_bleach", name: "跳银影像面 (Bleach Bypass Texture)", group: "D. 影像损耗与信号表面", def: "", core: "低饱和、高反差和银质暗部并存，强调冲印处理后的硬质影像表层。" },
    { id: "tx_r_faded", name: "褪色氧化面 (Faded Vintage Surface)", group: "D. 影像损耗与信号表面", def: "", core: "黑位抬高、颜色偏移、纸面或底片像被时间氧化。" },
    { id: "tx_r_lofi", name: "低保真模拟信号 (Lo-Fi Analog Signal)", group: "D. 影像损耗与信号表面", def: "", core: "扫描线、色度拖影、模糊边缘和磁带式信号丢失成为画面表层。" },
    { id: "tx_r_dreamy", name: "柔焦发光面 (Dreamy Soft-Focus Surface)", group: "D. 影像损耗与信号表面", def: "", core: "焦内保持可读，高光和边缘轻微发光，形成柔化的摄影表面。" },
    { id: "tx_r_stark", name: "硬黑白影像面 (Stark High-Contrast Surface)", group: "D. 影像损耗与信号表面", def: "", core: "压缩中间调，让黑白关系更图形化，但不改变构图主题。" },
    { id: "tx_r_neutral", name: "中性记录面 (Neutral Authentic Surface)", group: "D. 影像损耗与信号表面", def: "", core: "降低风格化后期，保留客观记录、档案扫描或标准拍摄的可读表面。" },
    { id: "tx_r_pixel_glitch", name: "像素损坏面 (Pixel Glitch Surface)", group: "D. 影像损耗与信号表面", def: "", core: "局部像素块、色块错位或压缩损坏，只作为数字信号瑕疵使用。" },
    { id: "tx_r_compression", name: "压缩伪影面 (Compression Artifact Surface)", group: "D. 影像损耗与信号表面", def: "", core: "低码率导致块状伪影、细节糊化和边缘噪声，适合记录媒介质感。" }
].map(enrichVisualMaterialItem('texture_render', ['surface', 'render_texture', 'material_feel']));

// 7.2 物理颗粒 (Grain - Noise/Film Artifacts)
export const AES_PHYSICAL_GRAIN: LibraryItemDef[] = [
    { id: "gr_denoised", name: "无颗粒纯净 (Denoised / Pristine)", group: "物理颗粒", def: "", core: "几乎不可见噪点，暗部平滑，适合高洁净数字摄影或精修表面。" },
    { id: "gr_micro35", name: "微细 35mm 颗粒 (Micro 35mm Grain)", group: "物理颗粒", def: "", core: "极细、均匀、几乎隐形的胶片颗粒，只增加轻微有机纹理。" },
    { id: "gr_fine35", name: "细腻 35mm 颗粒 (Fine 35mm Grain)", group: "物理颗粒", def: "", core: "清楚但克制的电影颗粒，保留细节和肤色层次。" },
    { id: "gr_std35", name: "标准 35mm 颗粒 (Standard 35mm Grain)", group: "物理颗粒", def: "", core: "中等强度随机颗粒，能被直接看见，但不吞没主体细节。" },
    { id: "gr_organic", name: "游动式胶片颗粒 (Organic Breathing Grain)", group: "物理颗粒", def: "", core: "颗粒分布带有轻微随机游动感，让静态画面更像真实底片。" },
    { id: "gr_std16", name: "标准 16mm 颗粒 (Standard 16mm Grain)", group: "物理颗粒", def: "", core: "颗粒比 35mm 更粗，边缘更柔，带有小画幅胶片质感。" },
    { id: "gr_rough16", name: "粗糙 16mm 颗粒 (Rough 16mm Grain)", group: "物理颗粒", def: "", core: "颗粒明显、暗部粗砺、局部细节被纹理压住。" },
    { id: "gr_8mm", name: "8mm 粗颗粒 (Gritty 8mm Grain)", group: "物理颗粒", def: "", core: "大颗粒、低解析、轻微边缘损耗，强调小格式模拟影像。" },
    { id: "gr_silver", name: "银盐结晶 (Silver Halide Crystals)", group: "物理颗粒", def: "", core: "黑白照片中锐利、不规则的银盐颗粒结构，区别于数码噪点。" },
    { id: "gr_iso100", name: "ISO 100 低噪点 (ISO 100 Low Noise)", group: "物理颗粒", def: "", core: "暗部只有极轻微纹理，整体干净、细节完整。" },
    { id: "gr_iso800", name: "ISO 800 可见噪点 (ISO 800 Visible Noise)", group: "物理颗粒", def: "", core: "中等感光噪点，室内和暗部区域有清楚颗粒。" },
    { id: "gr_iso3200", name: "ISO 3200 强噪点 (ISO 3200 High Noise)", group: "物理颗粒", def: "", core: "高感噪点明显，暗部细节被颗粒和色噪部分吞没。" },
    { id: "gr_digital", name: "数码传感器噪点 (Digital Sensor Noise)", group: "物理颗粒", def: "", core: "彩色杂讯、暗部斑点和传感器噪声，呈现非胶片的电子质感。" },
    { id: "gr_vhs", name: "VHS 磁带噪点 (VHS Tape Noise)", group: "物理颗粒", def: "", core: "横向磁带干扰、色度拖影和雪花点作为模拟录像噪声。" },
    { id: "gr_static", name: "电视静电噪点 (TV Static Noise)", group: "物理颗粒", def: "", core: "高密度黑白闪烁点或雪花，只作为信号层噪声使用。" },
    { id: "gr_dust", name: "灰尘划痕颗粒 (Dust & Scratches)", group: "物理颗粒", def: "", core: "底片或扫描表面出现随机黑点、白线、细小污迹和物理损耗。" },
    { id: "gr_macroblock", name: "压缩块噪点 (Compression Macroblocks)", group: "物理颗粒", def: "", core: "低码率压缩形成方块、边缘破碎和细节糊化，偏数字记录感。" }
].map(enrichVisualMaterialItem('physical_grain', ['grain', 'noise', 'artifact']));

// 5. 创作介质 (Art Medium)
export const AES_ART_MEDIUM: LibraryItemDef[] = [
    { id: "am_digital", name: "数字绘画 (Digital Painting)", group: "A. 绘制介质", def: "", core: "分层、可控边缘、可精修的数字绘制介质，不指定题材。" },
    { id: "am_digital_paint", name: "数字厚涂 (Digital Impasto)", group: "A. 绘制介质", def: "", core: "用数字笔刷模拟厚重颜料、块面塑形和可见笔触。" },
    { id: "am_watercolor", name: "水彩 (Watercolor)", group: "A. 绘制介质", def: "", core: "透明叠色、纸面渗化、水痕边缘和轻薄颜料层。" },
    { id: "am_oil", name: "油画 (Oil Paint)", group: "A. 绘制介质", def: "", core: "厚重颜料、湿画湿混色、可见刷痕和缓慢融合的色层。" },
    { id: "am_impasto", name: "厚涂油彩 (Oil Impasto)", group: "A. 绘制介质", def: "", core: "颜料堆积明显，笔触高度和刮刀痕参与画面肌理。" },
    { id: "am_acrylic", name: "丙烯 (Acrylic)", group: "A. 绘制介质", def: "", core: "干燥快、色面较平、边缘清楚，具有塑性颜料质感。" },
    { id: "am_gouache", name: "不透明水粉 (Gouache)", group: "A. 绘制介质", def: "", core: "不透明颜料层、哑光表面、可覆盖修正的平涂质感。" },
    { id: "am_ink", name: "墨水 / 水墨 (Ink Wash)", group: "B. 线性与纸本介质", def: "", core: "墨色浓淡、渗化、留白和笔锋成为主要绘制证据。" },
    { id: "am_pencil", name: "铅笔 (Pencil)", group: "B. 线性与纸本介质", def: "", core: "石墨颗粒、排线、擦痕和纸面摩擦清楚可见。" },
    { id: "am_pencil_sketch", name: "铅笔素描 (Pencil Sketch)", group: "B. 线性与纸本介质", def: "", core: "保留结构线、修正线和未完成草图痕迹。" },
    { id: "am_charcoal", name: "炭笔 (Charcoal)", group: "B. 线性与纸本介质", def: "", core: "深黑粉尘、擦抹边缘和粗糙灰阶层次。" },
    { id: "am_marker", name: "马克笔 (Marker)", group: "B. 线性与纸本介质", def: "", core: "笔触边界、叠色条纹、酒精墨水扩散和快速设计稿质感。" },
    { id: "am_pastel", name: "粉彩 / 蜡笔 (Pastel / Crayon)", group: "B. 线性与纸本介质", def: "", core: "粉质颗粒、柔软擦抹和蜡质断续线条。" },
    { id: "am_vector", name: "矢量图形 (Vector Art)", group: "C. 图形与印刷介质", def: "", core: "贝塞尔曲线、干净色块、无笔触噪声和高精度边缘。" },
    { id: "am_pixel", name: "像素绘制 (Pixel Art)", group: "C. 图形与印刷介质", def: "", core: "低分辨率格点、有限调色板和手工像素边缘。" },
    { id: "am_cel", name: "赛璐璐绘制 (Cel Animation Paint)", group: "C. 图形与印刷介质", def: "", core: "平涂色块、硬边阴影和透明片动画绘制感，不调用具体动画题材。" },
    { id: "am_collage", name: "拼贴 (Collage)", group: "D. 混合材料介质", def: "", core: "纸片、照片、颜料或印刷片段以可见层叠边缘组合。" },
    { id: "am_cutout", name: "剪纸拼贴 (Cutout Collage)", group: "D. 混合材料介质", def: "", core: "清楚剪切边、纸张厚度、投影和层叠关系。" },
    { id: "am_spray", name: "喷漆 (Spray Paint)", group: "D. 混合材料介质", def: "", core: "雾化边缘、喷点、遮罩边和流挂痕迹。" },
    { id: "am_mixed", name: "混合媒介 (Mixed Media)", group: "D. 混合材料介质", def: "", core: "多种材料并置，但只作为表面工艺，不改变主体和世界设定。" }
].map(enrichVisualMaterialItem('art_medium', ['painting_medium', 'drawing_medium', 'surface_method']));

// 6. 线条质量 (Line Quality)
export const AES_LINE_QUALITY: LibraryItemDef[] = [
    { id: "lq_no_line", name: "无线绘 (Lineless)", group: "B. 线条质量", def: "", core: "主体主要由色块、明暗和边缘控制定义，不使用明确勾线。" },
    { id: "lq_thin", name: "细轮廓 (Thin Outlines)", group: "B. 线条质量", def: "", core: "线条轻薄、精确、克制，适合保留细节而不压住色面。" },
    { id: "lq_thick", name: "粗轮廓 (Thick Outlines)", group: "B. 线条质量", def: "", core: "轮廓线宽重，强化剪影和图形可读性。" },
    { id: "lq_sketchy", name: "草图线 (Sketchy)", group: "B. 线条质量", def: "", core: "多次试探线、修正线和未清理笔迹保留在画面中。" },
    { id: "lq_clean", name: "干净线稿 (Clean Lineart)", group: "B. 线条质量", def: "", core: "线宽稳定、闭合清楚、结构可读，适合设定图或插画完成稿。" },
    { id: "lq_brush", name: "毛笔线 (Brush Stroke)", group: "B. 线条质量", def: "", core: "线条有粗细变化、收锋和墨色压力差。" },
    { id: "lq_jitter", name: "轻微抖线 (Jittery Line)", group: "B. 线条质量", def: "", core: "线边有手绘抖动和微小偏移，增加人工绘制痕迹。" },
    { id: "lq_dotted", name: "虚线 / 断线 (Dotted / Dashed)", group: "B. 线条质量", def: "", core: "用断续线、点线或工程线表现边界与结构。" },
    { id: "lq_chalk", name: "粉质线 (Chalky Line)", group: "B. 线条质量", def: "", core: "线边粗糙、粉化，带有纸面颗粒摩擦。" },
    { id: "lq_ink_bleed", name: "晕染墨线 (Ink Bleed Line)", group: "B. 线条质量", def: "", core: "线条沿纸纤维扩散，边缘柔软且不完全可控。" },
    { id: "lq_vector", name: "矢量线 (Vector Line)", group: "B. 线条质量", def: "", core: "曲线数学化、边缘绝对干净，几乎没有手绘噪声。" },
    { id: "lq_rough", name: "粗糙线 (Rough Line)", group: "B. 线条质量", def: "", core: "线条断裂、颗粒明显，像在粗纸或干笔上留下。" },
    { id: "lq_smooth", name: "圆滑线 (Smooth Line)", group: "B. 线条质量", def: "", core: "线条流畅、连续、少毛边，偏抛光完成稿。" },
    { id: "lq_hatching", name: "排线阴影 (Hatching)", group: "B. 线条质量", def: "", core: "用平行线、交叉线或密度变化塑造明暗和体积。" }
].map(enrichVisualMaterialItem('line_quality', ['linework', 'edge_control', 'drawing_trace']));

// 7. 画布质感 (Canvas Texture)
export const AES_CANVAS_TEXTURE: LibraryItemDef[] = [
    { id: "ct_smooth", name: "平滑纸 (Smooth Paper)", group: "C. 承载表面", def: "", core: "纸面或数字底面平整干净，几乎没有纤维噪声。" },
    { id: "ct_watercolor", name: "冷压水彩纸 (Cold-Press Watercolor Paper)", group: "C. 承载表面", def: "", core: "表面有凹凸纸纹、吸水渗化和颜料沉积边。" },
    { id: "ct_canvas", name: "亚麻画布 (Linen Canvas)", group: "C. 承载表面", def: "", core: "可见经纬编织纹理，颜料附着在布面凸起上。" },
    { id: "ct_kraft", name: "牛皮纸 (Kraft Paper)", group: "C. 承载表面", def: "", core: "棕色纸基、纤维感强，适合草图、拼贴或材料实验。" },
    { id: "ct_halftone", name: "印刷半调 (Halftone Print)", group: "D. 印刷与扫描表面", def: "", core: "规则网点用密度变化形成明暗，呈现印刷复制质感。" },
    { id: "ct_screen", name: "漫画网点 (Screen Tone)", group: "D. 印刷与扫描表面", def: "", core: "点阵、线网或刮网纹理用于灰阶和阴影表达。" },
    { id: "ct_noise", name: "扫描噪点 (Scan Noise)", group: "D. 印刷与扫描表面", def: "", core: "扫描产生轻微灰雾、边缘杂点和纸面数字化痕迹。" },
    { id: "ct_grunge", name: "污迹划痕 (Stains & Scratches)", group: "D. 印刷与扫描表面", def: "", core: "表面有污点、磨损、刮痕或旧纸斑驳，只作为承载层痕迹。" },
    { id: "ct_wood", name: "木板底面 (Wood Panel Surface)", group: "E. 特殊承载表面", def: "", core: "木纹、年轮和硬质底板纹理作为绘画承载面。" },
    { id: "ct_stone", name: "石壁底面 (Stone / Fresco Surface)", group: "E. 特殊承载表面", def: "", core: "粗糙孔洞、矿物斑点和壁画式不平整表面。" },
    { id: "ct_fabric", name: "织物底面 (Fabric Surface)", group: "E. 特殊承载表面", def: "", core: "线头、布纹、纤维方向和轻微起伏成为画面底纹。" },
    { id: "ct_crumpled", name: "褶皱纸 (Crumpled Paper)", group: "E. 特殊承载表面", def: "", core: "纸面折痕、压痕和阴影让承载面具有立体起伏。" },
    { id: "ct_cardboard", name: "粗纸板 (Rough Cardboard)", group: "E. 特殊承载表面", def: "", core: "纸板纤维粗、吸色不均，边缘有厚度和磨损。" },
    { id: "ct_parchment", name: "羊皮纸 (Parchment)", group: "E. 特殊承载表面", def: "", core: "泛黄、半透明、纤维和斑点形成古旧纸本质感。" },
    { id: "ct_paper_texture", name: "通用纸纤维 (Generic Paper Fiber)", group: "E. 特殊承载表面", def: "", core: "轻微纸纤维、细小纹理和自然纸面不均匀。" }
].map(enrichVisualMaterialItem('canvas_texture', ['support_surface', 'paper', 'substrate']));

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
