import { LibraryItemDef } from '../../types';

export const ART_STYLE_ITEMS: LibraryItemDef[] = [
  // ==========================================
  // 1. 古典与人文 (Classical & Humanism - 8)
  // ==========================================
  { id: "art_renaissance", name: "文艺复兴 (Renaissance)", group: "1. 古典人文", def: "Symmetry, anatomical realism, golden ratio.", core: "代表作:《大卫像》, 风格: 理性与和谐的巅峰，人文主义的静穆。" },
  { id: "art_baroque", name: "巴洛克 (Baroque)", group: "1. 古典人文", def: "Tenebrism, dramatic motion, gold leaf.", core: "代表作:《卡拉瓦乔》, 风格: 极端的戏剧性光影，华丽而暴烈的神圣感。" },
  { id: "art_rococo", name: "洛可可 (Rococo)", group: "1. 古典人文", def: "Pastel curves, shells, playful lux.", core: "代表作:《秋千》, 风格: 享乐主义的巅峰，充满了糖果色的轻盈与虚浮。" },
  { id: "art_neoclassicism", name: "新古典 (Neoclassicism)", group: "1. 古典人文", def: "Heroic, rigid lines, stoic mood.", core: "代表作:《马拉之死》, 风格: 崇高的理性，对古代英雄秩序的当代重构。" },
  { id: "art_mannerism", name: "矫饰主义 (Mannerism)", group: "1. 古典人文", def: "Elongated limbs, acid colors, unstable.", core: "代表作:《格列柯》, 风格: 扭曲的优雅，反常理性的不安与张力。" },
  { id: "art_gothic", name: "哥特艺术 (Gothic Art)", group: "1. 古典人文", def: "Verticality, dark decay, ornate spikes.", core: "代表作:《巴黎圣母院》, 风格: 垂直向上的灵魂渴望，伴随着死亡的阴郁浪漫。" },
  { id: "art_byzantine", name: "拜占庭圣像 (Byzantine)", group: "1. 古典人文", def: "Gold mosaic, flat icon, staring eyes.", core: "风格: 艺术的静止，超越世俗的神圣符号化。" },
  { id: "art_academic", name: "学院派 (Academic Art)", group: "1. 古典人文", def: "Perfect anatomy, photographic realism.", core: "代表作:《布格罗》, 风格: 技法的高度完成，对理想化美的标准维护。" },

  // ==========================================
  // 2. 浪漫与写实 (Romantic & Realism - 8)
  // ==========================================
  { id: "art_romanticism", name: "浪漫主义 (Romanticism)", group: "2. 浪漫写实", def: "Sublime ruins, overwhelming nature.", core: "代表作:《雾海上的流浪者》, 风格: 感性对理性的叛逆，在废墟与风暴中寻找崇高。" },
  { id: "art_realism", name: "写实主义 (Realism)", group: "2. 浪漫写实", def: "Everyday life, earthy tones, unglamorous.", core: "代表作:《库尔贝》, 风格: 诚实的目光，记录平凡劳作中的尊严与沉重。" },
  { id: "art_pre_raphaelite", name: "前拉斐尔派 (Pre-Raphaelite)", group: "2. 浪漫写实", def: "Vivid, detailed nature, medieval lore.", core: "代表作:《奥菲利亚》, 风格: 凄美的自然主义，对工业文明的审美性逃避。" },
  { id: "art_impressionism", name: "印象派 (Impressionism)", group: "2. 浪漫写实", def: "Broken color, dappled light, moment.", core: "代表作:《日出印象》, 风格: 捕捉光影的瞬间颤动，主观感知的胜利。" },
  { id: "art_barbizon", name: "巴比松画派 (Barbizon)", group: "2. 浪漫写实", def: "Soft rural landscapes, twilight hues.", core: "风格: 自然的乡愁，在静谧丛林中寻找宁静。" },
  { id: "art_hudson_river", name: "哈德逊河派 (Hudson River)", group: "2. 浪漫写实", def: "Grand panorama, glowing horizon.", core: "风格: 新大陆的蛮荒崇高，带有神迹色彩的广阔风景。" },
  { id: "art_naturalism", name: "自然主义 (Naturalism)", group: "2. 浪漫写实", def: "Scientific observation of life.", core: "风格: 像相机一样精准，剥离戏剧化的人造痕迹。" },
  { id: "art_orientalism", name: "东方主义 (Orientalism)", group: "2. 浪漫写实", def: "Exotic texture, intense desert light.", core: "风格: 西方对神秘东方的瑰丽幻想，充满细节的异域风情。" },

  // ==========================================
  // 3. 现代主义 (Modernism - 8)
  // ==========================================
  { id: "art_expressionism", name: "表现主义 (Expressionism)", group: "3. 现代主义", def: "Distorted figures, high contrast, angst.", core: "代表作:《呐喊》, 风格: 内心痛苦的具象化，用扭曲的线条表达主观真实。" },
  { id: "art_cubism", name: "立体主义 (Cubism)", group: "3. 现代主义", def: "Fragmented, multiple perspective, geometry.", core: "代表作:《格尔尼卡》, 风格: 视角的爆裂，在同一个平面上展示多重维度的真相。" },
  { id: "art_futurism", name: "未来主义 (Futurism)", group: "3. 现代主义", def: "Speed, machine energy, metallic sheen.", core: "代表作:《博乔尼》, 风格: 对速度与机器的崇拜，暴力美学的先驱。" },
  { id: "art_dada", name: "达达主义 (Dada)", group: "3. 现代主义", def: "Anti-art, collage, nonsensical.", core: "代表作:《杜尚》, 风格: 对传统的彻底嘲讽，在荒诞中寻找创作的自由。" },
  { id: "art_surrealism", name: "超现实主义 (Surrealism)", group: "3. 现代主义", def: "Dream logic, melting textures, uncanny.", core: "代表作:《记忆的永恒》, 风格: 潜意识的爆发，在不可能的结合中触碰真实。" },
  { id: "art_fauvism", name: "野兽派 (Fauvism)", group: "3. 现代主义", def: "Unnatural bold colors, raw energy.", core: "代表作:《马蒂斯》, 风格: 色彩的暴政，最原始生命力的直接喷发。" },
  { id: "art_suprematism", name: "至上主义 (Suprematism)", group: "3. 现代主义", def: "Black square, white void, zero degree.", core: "代表作:《黑方块》, 风格: 艺术的零度，寻找纯粹的情感感知。" },
  { id: "art_de_stijl", name: "风格派 (De Stijl)", group: "3. 现代主义", def: "Primary grid, Mondrian logic.", core: "代表作:《红黄蓝构图》, 风格: 宇宙的数学平衡，绝对抽象的秩序感。" },

  // ==========================================
  // 4. 战后与当代 (Post-War & Contemporary - 8)
  // ==========================================
  { id: "art_abstract_exp", name: "抽象表现 (AbEx)", group: "4. 战后当代", def: "Action painting, splashes, emotion drip.", core: "代表作:《波洛克》, 风格: 身体动作的记录，潜意识能量的瞬间释放。" },
  { id: "art_pop_art", name: "波普艺术 (Pop Art)", group: "4. 战后当代", def: "Primary colors, halftone dots, consumerism.", core: "代表作:《沃霍尔》, 风格: 复制时代的偶像崇拜，对大众文化的审美化反讽。" },
  { id: "art_minimalism", name: "极简主义 (Minimalism)", group: "4. 战后当代", def: "Reduction to essence, line, white space.", core: "代表作:《贾德》, 风格: 剥离叙事与情感，直面物质本身的绝对存在。" },
  { id: "art_brutalism", name: "粗野主义 (Brutalism)", group: "4. 战后当代", def: "Exposed concrete, monumental scale.", core: "代表作:《朗香教堂》, 风格: 力量的赤裸展示，冰冷而坚固的工业神殿。" },
  { id: "art_color_field", name: "色域绘画 (Color Field)", group: "4. 战后当代", def: "Massive fuzzy color blocks, Rothko.", core: "代表作:《无题(罗斯科)》, 风格: 色彩的宗教感，在纯粹色块中感悟悲剧与崇高。" },
  { id: "art_op_art", name: "欧普艺术 (Op Art)", group: "4. 战后当代", def: "Optical illusion, vibrating patterns.", core: "风格: 视觉的欺骗，利用视网膜反应创造动态幻觉。" },
  { id: "art_neo_exp", name: "新表现主义 (Neo-Expressionism)", group: "4. 战后当代", def: "Aggressive, messy, intense imagery.", core: "代表作:《基弗》, 风格: 历史废墟的哀歌，在厚重涂抹中寻找重生的力量。" },
  { id: "art_post_modern", name: "后现代主义 (Post-Modernism)", group: "4. 战后当代", def: "Pastiche, irony, high and low culture mix.", core: "风格: 风格的杂交，解构元叙事，对单一权威的终结。" },

  // ==========================================
  // 5. 数字与先锋 (Digital & Avant-Garde - 8)
  // ==========================================
  { id: "art_vaporwave", name: "蒸汽波 (Vaporwave Art)", group: "5. 数字先锋", def: "Statues, pink/teal gradients, low-fi.", core: "风格: 对未曾存在的过去的虚假怀念，数字废墟美学。" },
  { id: "art_cyberpunk", name: "赛博朋克 (Cyberpunk Art)", group: "5. 数字先锋", def: "Neon, wet wires, high-tech low-life.", core: "代表作:《阿基拉》, 风格: 技术的异化与主体的反抗，霓虹雨夜的残酷。" },
  { id: "art_steampunk", name: "蒸汽朋克 (Steampunk Art)", group: "5. 数字先锋", def: "Brass, gears, clockwork, sepia.", core: "风格: 机械崇拜的浪漫，工业革命初期的科幻狂想。" },
  { id: "art_glitch", name: "故障艺术 (Glitch Art)", group: "5. 数字先锋", def: "Pixel tearing, RGB split, signal noise.", core: "风格: 系统的诗意崩坏，展示数字化现实的脆弱与不确定。" },
  { id: "art_bio_organic", name: "生化有机 (Bio-Organic)", group: "5. 数字先锋", def: "Pulsing flesh, veins, alien anatomy.", core: "代表作:《H.R. Giger》, 风格: 生物机械的噩梦，由于恐惧而产生的变态美感。" },
  { id: "art_low_poly", name: "低多边形 (Low Poly)", group: "5. 数字先锋", def: "Geometric facets, sharp edges, 3D.", core: "风格: 数字时代的象牙塔，将世界简化为原始的几何逻辑。" },
  { id: "art_voxel", name: "体素化 (Voxel Art)", group: "5. 数字先锋", def: "Cube-based, 8-bit in 3D.", core: "风格: 颗粒化的现实，一种带有童真感的数字积木世界。" },
  { id: "art_generative", name: "生成艺术 (Generative Art)", group: "5. 数字先锋", def: "Algorithms, code patterns, self-similar.", core: "风格: 逻辑的自动繁殖，探讨人类之外的创造力可能性。" },

  // ==========================================
  // 6. 东方美学 (Eastern Aesthetics - 8)
  // ==========================================
  { id: "art_ink_wash", name: "中国水墨 (Ink Wash)", group: "6. 东方美学", def: "Brush strokes, negative space, black ink.", core: "风格: 线条的舞蹈与留白的意境，天人合一的精神探索。" },
  { id: "art_ukiyo_e", name: "日本浮世绘 (Ukiyo-e)", group: "6. 东方美学", def: "Flat perspective, bold black outlines.", core: "代表作:《富岳三十六景》, 风格: 凡尘生活的剪影，平面构成的极致东方韵味。" },
  { id: "art_dunhuang", name: "敦煌壁画 (Dunhuang Murals)", group: "6. 东方美学", def: "Mineral pigments, flowing ribbons.", core: "风格: 漫长岁月的风蚀感，具有神性的飞天与土质美感。" },
  { id: "art_gongbi", name: "工笔花鸟 (Gongbi)", group: "6. 东方美学", def: "Hyper-detailed, thin lines, silk texture.", core: "风格: 极致的静谧与观察，一花一世界的微观禅意。" },
  { id: "art_wabi_sabi", name: "侘寂美学 (Wabi-Sabi)", group: "6. 东方美学", def: "Rough texture, asymmetric, aged look.", core: "风格: 不完美的和谐，在残缺与老去中寻找时间的尊严。" },
  { id: "art_sansui", name: "山水意蕴 (Sansui)", group: "6. 东方美学", def: "Atmospheric perspective, mist, mountains.", core: "风格: 宏大的宇宙观，个人在浩瀚自然面前的消融。" },
  { id: "art_lingnan", name: "岭南画派 (Lingnan School)", group: "6. 东方美学", def: "Fusion of East and West, moist wash.", core: "风格: 湿润的色彩与折衷的透视，具有革新精神的东方感。" },
  { id: "art_mughal", name: "莫卧儿细密画 (Mughal Miniature)", group: "6. 东方美学", def: "Intricate floral, gold highlights.", core: "风格: 宝石般的璀璨细节，充满了异域宫廷的繁复与考究。" }
];
