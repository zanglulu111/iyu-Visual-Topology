import { LibraryItemDef } from '../../types';

export const PHOTO_STYLE_ITEMS: LibraryItemDef[] = [
  // ==========================================
  // 1. 纪实与人文 (Documentary & Humanism - 8)
  // ==========================================
  { id: "pho_magnum", name: "马格南纪实 (Magnum Documentary)", group: "1. 纪实人文", def: "Raw lighting, candid, 35mm grain, high contrast B&W.", core: "代表作:《罗伯特·卡帕》, 风格: 战地现场的紧迫感与人性光辉。" },
  { id: "pho_street", name: "街头抓拍 (Street Snap)", group: "1. 纪实人文", def: "Decisive moment, candid, wide angle, natural city light.", core: "代表作:《布列松》, 风格: 城市节奏中的几何偶然性。" },
  { id: "pho_social_realism", name: "社会写实 (Social Realism)", group: "1. 纪实人文", def: "Desaturated, harsh natural light, gritty textures.", core: "代表作:《萨尔加多》, 风格: 劳作与苦难的纪念碑式肖像。" },
  { id: "pho_paparazzi", name: "狗仔偷拍 (Paparazzi Style)", group: "1. 纪实人文", def: "Blurry, flash, intrusive angles, high ISO noise.", core: "代表作:《夜行者》, 风格: 窥视者的罪恶感，瞬间的真实混乱。" },
  { id: "pho_humanist", name: "人文摄影 (Humanist)", group: "1. 纪实人文", def: "Soft warm light, emotional focus, mid-shot.", core: "代表作:《多瓦诺》, 风格: 战后巴黎的柔情与平凡之美。" },
  { id: "pho_new_topographic", name: "新地形学 (New Topographics)", group: "1. 纪实人文", def: "Detached, flat lighting, industrial landscapes.", core: "代表作:《史蒂芬·肖尔》, 风格: 排除情感的客观记录，平凡景观的异化。" },
  { id: "pho_candid_portrait", name: "生活肖像 (Candid Portrait)", group: "1. 纪实人文", def: "Natural surroundings, soft window light, relaxed.", core: "风格: 剥离表演性的日常真实，亲密的瞬间。" },
  { id: "pho_war_photo", name: "战地摄影 (War Photography)", group: "1. 纪实人文", def: "Dusty, debris, low visibility, intense grit.", core: "风格: 极限环境下的生命质感，破碎的符号秩序。" },

  // ==========================================
  // 2. 时尚与商业 (Fashion & Commercial - 8)
  // ==========================================
  { id: "pho_vogue", name: "Vogue 大片 (High Fashion)", group: "2. 时尚商业", def: "Studio lighting, perfect retouching, avant-garde pose.", core: "代表作:《理查德·阿维顿》, 风格: 权力的傲慢，对身体与面料的极致物化。" },
  { id: "pho_glamour", name: "好莱坞名伶 (Hollywood Glamour)", group: "2. 时尚商业", def: "Rim light, soft focus, butterfly lighting, star filter.", core: "代表作:《哈瑞尔》, 风格: 黄金时代的梦幻感，被神化的美丽。" },
  { id: "pho_hard_flash", name: "硬核闪光 (Hard Flash)", group: "2. 时尚商业", def: "Direct on-camera flash, harsh shadows, white wall.", core: "代表作:《特里·理查德森》, 风格: 暴力的真实，在大众面前赤裸曝光。" },
  { id: "pho_commercial", name: "产品图腾 (Product Totem)", group: "2. 时尚商业", def: "Macro focus, pristine materials, controlled highlights.", core: "代表作:《Apple 广告》, 风格: 物神崇拜，去人性的精密工业美学。" },
  { id: "pho_food", name: "食欲诱惑 (Food Porn)", group: "2. 时尚商业", def: "Macro, shallow depth, steam, glossy textures.", core: "风格: 极度诱发的生理渴望，材质的极致诱惑。" },
  { id: "pho_lookbook", name: "潮流画册 (Lookbook Style)", group: "2. 时尚商业", def: "Neutral background, even light, clear textures.", core: "风格: 实用主义的时尚展示，强调面料与剪裁。" },
  { id: "pho_editorial_art", name: "艺术社论 (Editorial Art)", group: "2. 时尚商业", def: "Cinematic set, narrative fashion, stylized props.", core: "代表作:《蒂姆·沃克》, 风格: 叙事性的时尚梦境，荒诞与奢华的结合。" },
  { id: "pho_sport_action", name: "运动动能 (Sport Kinetic)", group: "2. 时尚商业", def: "High speed shutter, sweat, dramatic muscles.", core: "代表作:《Nike 广告》, 风格: 爆发力与意志力的瞬间定格。" },

  // ==========================================
  // 3. 艺术与实验 (Fine Art & Experimental - 8)
  // ==========================================
  { id: "pho_surreal_art", name: "超现实艺术 (Surreal Art)", group: "3. 艺术实验", def: "Dream logic, juxtaposed objects, uncanny lighting.", core: "代表作:《曼·雷》, 风格: 潜意识的爆发，在不可能的结合中触碰真实。" },
  { id: "pho_double_exp", name: "双重曝光 (Double Exposure)", group: "3. 艺术实验", def: "Ghostly layers, overlapping images, translucent.", core: "代表作:《真探片头》, 风格: 意识的重叠，在同一个空间展示多重现实。" },
  { id: "pho_long_exp", name: "长曝光 (Long Exposure)", group: "3. 艺术实验", def: "Light trails, misty water, motion blur silhouettes.", core: "代表作:《杉本博司》, 风格: 时间的物理化曝光，物质消失后的永恒感。" },
  { id: "pho_infra_red", name: "红外摄影 (Infrared)", group: "3. 艺术实验", def: "Pink foliage, black sky, high contrast spectrum.", core: "风格: 不可见光的视觉化，将现实转化为异星梦境。" },
  { id: "pho_thermal", name: "热感成像 (Thermal)", group: "3. 艺术实验", def: "Energy map palette, blue to red gradients.", core: "风格: 生物性的窥视，剥离外表后的能量本质。" },
  { id: "pho_light_paint", name: "光绘艺术 (Light Painting)", group: "3. 艺术实验", def: "Neon streaks in dark, energetic lines.", core: "风格: 时间与光线的笔触，空间的动态雕塑。" },
  { id: "pho_conceptual", name: "概念摄影 (Conceptual)", group: "3. 艺术实验", def: "Minimal, symbolic, idea-driven composition.", core: "风格: 思想的统治，形式仅仅是承载真理的容器。" },
  { id: "pho_abstract_macro", name: "抽象微距 (Abstract Macro)", group: "3. 艺术实验", def: "Pure texture, unrecognizable scale, patterns.", core: "风格: 异化的尺度，寻找自然或工业的微观几何。" },

  // ==========================================
  // 4. 历史与工艺 (Historical & Process - 8)
  // ==========================================
  { id: "pho_daguerreotype", name: "银版摄影 (Daguerreotype)", group: "4. 历史工艺", def: "Metallic sheen, sharp detail, early 19th c vibe.", core: "风格: 镜像的灵魂，充满古老而庄严的物神感。" },
  { id: "pho_wet_plate", name: "湿版摄影 (Wet Plate)", group: "4. 历史工艺", def: "Chemical stains, dark mood, silver textures.", core: "代表作:《美国内战影像》, 风格: 时间的标本，带有一种跨越生死的凝重感。" },
  { id: "pho_tintype", name: "锡版摄影 (Tintype)", group: "4. 历史工艺", def: "Dark silver, direct positive, period texture.", core: "风格: 沉重的历史肉身感，目光中带着铁的味道。" },
  { id: "pho_cyanotype", name: "蓝晒蓝图 (Cyanotype)", group: "4. 历史工艺", def: "Monochrome Prussian blue, paper grain texture.", core: "风格: 冰冷的理智，被化学药剂固化的忧郁历史。" },
  { id: "pho_autochrome", name: "奥托克罗姆 (Autochrome)", group: "4. 历史工艺", def: "Pointillist color, hazy, early color film.", core: "风格: 第一抹色彩的奇迹，梦境般的颗粒感。" },
  { id: "pho_polaroid", name: "宝丽来 (Polaroid)", group: "4. 历史工艺", def: "Faded blacks, color shift, square frame.", core: "风格: 无法复制的瞬间，私密而温情的怀旧滤镜。" },
  { id: "pho_film_noir", name: "黑色电影 (Film Noir)", group: "4. 历史工艺", def: "Hard low-key, venetian shadows, cigar smoke.", core: "风格: 阴影中的叙事，光线作为切割现实的刀刃。" },
  { id: "pho_vintage_35mm", name: "复古 35mm (Vintage Film)", group: "4. 历史工艺", def: "Kodachrome red, warm skin, dust, film burn.", core: "风格: 时代的琥珀，一种带有神圣光晕的过往真实。" },

  // ==========================================
  // 5. 自然与风光 (Nature & Landscape - 8)
  // ==========================================
  { id: "pho_landscape_sublime", name: "崇高风光 (Sublime Landscape)", group: "5. 自然风光", def: "Large scale, golden hour, sharp horizon.", core: "代表作:《安塞尔·亚当斯》, 风格: 自然神学，对宏大荒野的纪念碑式致敬。" },
  { id: "pho_underwater", name: "深海摄影 (Underwater)", group: "5. 自然风光", def: "Caustics, deep blue, floating, refraction.", core: "风格: 子宫回归，在液态介质中的失重与静谧。" },
  { id: "pho_astrophoto", name: "星空摄影 (Astrophotography)", group: "5. 自然风光", def: "Milky way, long exposure, nebula colors.", core: "风格: 宇宙的浩瀚与个体的微小，光年级别的凝视。" },
  { id: "pho_wildlife", name: "野性瞬间 (Wildlife)", group: "5. 自然风光", def: "Telephoto, raw environment, animal focus.", core: "风格: 掠食者的视角，生命最原始的爆发力。" },
  { id: "pho_architectural", name: "建筑美学 (Architectural)", group: "5. 自然风光", def: "Symmetry, lines, perspective correction.", core: "风格: 理性的空间秩序，人造巨物的几何崇高。" },
  { id: "pho_aerial_drone", name: "鸟瞰全景 (Aerial/Drone)", group: "5. 自然风光", def: "Top-down, planar view, massive scale.", core: "风格: 抽离的人类视角，在大地之上寻找神性秩序。" },
  { id: "pho_macro_nature", name: "自然微距 (Nature Macro)", group: "5. 自然风光", def: "Insects, plant veins, morning dew.", core: "风格: 微观世界的复杂，揭示日常之外的奇观。" },
  { id: "pho_alpine_cold", name: "极地冷峻 (Alpine Cold)", group: "5. 自然风光", def: "Blinding white, blue shadows, sharp ice.", core: "风格: 绝对的纯净与严酷，生命的极限边界。" },

  // ==========================================
  // 6. 当代与数字 (Contemporary & Digital - 8)
  // ==========================================
  { id: "pho_glitch_digital", name: "故障视觉 (Glitch Aesthetic)", group: "6. 当代数字", def: "Pixel sorting, RGB split, screen tearing.", core: "风格: 数字现实的裂缝，展示系统正在崩溃的即视感。" },
  { id: "pho_vaporwave_digital", name: "蒸汽波 (Vaporwave)", group: "6. 当代数字", def: "Pink/Purple gradients, scanlines, lo-fi.", core: "风格: 幽灵学美学，对从未存在的过去的虚假怀念。" },
  { id: "pho_minimalist_digital", name: "极简数字 (Digital Minimal)", group: "6. 当代数字", def: "Whitespace, single color, flat textures.", core: "风格: 信息过载时代的回撤，寻找视觉的零度。" },
  { id: "pho_lofi_vhs", name: "低保真录像 (VHS Lo-Fi)", group: "6. 当代数字", def: "Noise, tracking lines, magnetic distortion.", core: "风格: 模拟时代的幽灵，带有故障感和不安的记忆。" },
  { id: "pho_cyber_neon", name: "赛博霓虹 (Cyber Neon)", group: "6. 当代数字", def: "Saturated teal/pink, rainy streets, glow.", core: "风格: 欲望的脉动，高科技低生活的视觉投射。" },
  { id: "pho_ue5_render", name: "虚幻 5 感 (Game Engine)", group: "6. 当代数字", def: "Perfect raytracing, high gloss, surreal detail.", core: "风格: “比真实更真”的假感，元宇宙的视觉基准。" },
  { id: "pho_liminal_space", name: "阈限空间 (Liminal Space)", group: "6. 当代数字", def: "Empty mall, fluorescent light, uncanny valley.", core: "风格: 梦核美学，由于熟悉而产生的怪异恐怖。" },
  { id: "pho_ai_dream", name: "AI 幻梦 (AI Dreamscape)", group: "6. 当代数字", def: "Morphing shapes, impossible textures, ethereal.", core: "风格: 算法潜意识的输出，超越人类逻辑的视觉流。" }
];
