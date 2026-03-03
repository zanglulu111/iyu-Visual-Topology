
import { LibraryCategoryDef, NarrativeBlockDef, LibraryItemDef } from '../types';
import { PRODUCT_ANCHORS } from './product_anchors';
import { APPLICATION_SCENARIOS } from './application_scenarios';
import { AUTHORITY_ENVIRONMENTS } from './authority_environments';

export const COMM_SKIN_BLOCKS: NarrativeBlockDef[] = [
  { id: "comm_skin_status", name: "1. 品牌现状", enName: "Brand Status", description: "定义品牌当前的战态：是挑战、守望还是重塑。", tags: [] },
  { id: "comm_skin_length", name: "2. 广告长度", enName: "Ad Length", description: "时间的约束决定了叙事的信息密度与呼吸节奏。", tags: [] },
  { id: "comm_skin_media", name: "3. 投放媒介", enName: "Placement", description: "定义受众与内容相遇的物理场域与心理契约。", tags: [] },
  { id: "comm_skin_structure", name: "4. 叙事形态", enName: "Strategy", description: "决定创意的包装手段：如何组织 C0-C7 的逻辑顺序。", tags: [] },
  { id: "comm_skin_auteur", name: "5. 导演风格", enName: "Director Style", description: "【广告导演】决定影片的视听语言风格与执行质感。", tags: [] },
  { id: "comm_skin_chroma", name: "6. 视觉影调", enName: "Visual Tone", description: "决定画面的心理暗示、明暗冷暖与商业滤镜。", tags: [] },
  { id: "comm_skin_emotion", name: "7. 影片情绪", enName: "Film Emotion", description: "定义全片的感性能量：欢快、温馨、压抑或荒诞。", tags: [] },
  { id: "comm_skin_benchmark", name: "8. 美术参考", enName: "Art Direction", description: "【视觉基准】CGI、动态设计或特定的美术流派参考。", tags: [] },
  { id: "comm_skin_anchor", name: "9. 产品锚点", enName: "Anchoring", description: "定义产品与凝视的关系：是图腾还是背景。", tags: [] },
  { id: "comm_skin_scenario", name: "10. 应用场景", enName: "Scenario", description: "产品所在的物理场域或社会化拍摄空间。", tags: [] },
  { id: "comm_skin_endorsement", name: "11. 权威环境", enName: "RTB Context", description: "背书力量出现的具体环境支撑（实验室、工厂、圣地等）。", tags: [] }
];

// =============================================================================
// 1. 商业叙事形态 (COMMERCIAL STRUCTURES) - Dedicated Library
// =============================================================================
const COMMERCIAL_STRUCTURES: LibraryItemDef[] = [
  // A. 逻辑与论证 (Logic & Argument)
  { id: "str_problem_solution", name: "痛点-解药 (Problem/Solution)", group: "A. 逻辑论证", def: "夸张展示地狱般的痛点，产品作为天堂般的救赎降临。", core: "逻辑：恐吓 -> 拯救。最经典的硬广结构。" },
  { id: "str_before_after", name: "对比实验 (Before/After)", group: "A. 逻辑论证", def: "分屏或蒙太奇展示使用前后的剧烈反差。", core: "逻辑：视觉证据。强调改变的即时性与可见性。" },
  { id: "str_torture_test", name: "极限测试 (Torture Test)", group: "A. 逻辑论证", def: "将产品置于极端恶劣环境中（火烧/冰冻/重压）证明其耐用性。", core: "逻辑：硬核实证。建立绝对信任。" },
  { id: "str_demonstration", name: "功能演示 (The Demo)", group: "A. 逻辑论证", def: "聚焦于产品运作的微观细节、机械结构或化学反应。", core: "逻辑：理性说服。让科技感可视化。" },
  { id: "str_expert_testimony", name: "专家证言 (Expert Voice)", group: "A. 逻辑论证", def: "白大褂科学家或权威人士直视镜头背书。", core: "逻辑：权威借用。消除怀疑。" },
  
  // B. 情感与故事 (Emotion & Story)
  { id: "str_slice_of_life", name: "生活切片 (Slice of Life)", group: "B. 情感故事", def: "真实、细腻的日常生活片段，产品自然融入其中。", core: "逻辑：共情。'这就是我的生活'。" },
  { id: "str_cinematic_drama", name: "微电影 (Cinematic Drama)", group: "B. 情感故事", def: "完整的三幕剧结构，有冲突、高潮和人物弧光。", core: "逻辑：移情。品牌作为推动剧情的关键道具。" },
  { id: "str_emotional_rollercoaster", name: "情绪过山车 (Emotional Rollercoaster)", group: "B. 情感故事", def: "从极度悲伤/紧张瞬间转折到极度温暖/释然。", core: "逻辑：情绪印记。让观众在生理层面记住品牌。" },
  { id: "str_nostalgia", name: "怀旧时光 (Nostalgia)", group: "B. 情感故事", def: "重现过去的美好年代，泛黄滤镜，经典音乐。", core: "逻辑：时光滤镜。将品牌与美好记忆绑定。" },
  { id: "str_coming_of_age", name: "成长时刻 (Coming of Age)", group: "B. 情感故事", def: "记录人生关键的转折点（毕业/结婚/生子）。", core: "逻辑：陪伴。品牌见证了你的人生大事。" },

  // C. 视觉与感官 (Visual & Sensory)
  { id: "str_visual_poem", name: "视觉诗 (Visual Poem)", group: "C. 视觉感官", def: "无逻辑的唯美画面串联，旁白朗诵诗歌或宣言。", core: "逻辑：美学催眠。提升品牌调性，去功能化。" },
  { id: "str_sensory_immersion", name: "感官沉浸 (Sensory Immersion)", group: "C. 视觉感官", def: "极度放大声画细节（ASMR），强调质感、纹理、声音。", core: "逻辑：生理诱惑。直接刺激爬行脑。" },
  { id: "str_music_video", name: "MV风格 (Music Video)", group: "C. 视觉感官", def: "强节奏剪辑，音乐驱动画面，歌词与画面对位。", core: "逻辑：律动同步。年轻化，潮流感。" },
  { id: "str_surreal_dream", name: "超现实梦境 (Surreal Dream)", group: "C. 视觉感官", def: "打破物理法则，奇幻、怪诞、充满想象力的视觉奇观。", core: "逻辑：造梦。将产品神圣化或魔法化。" },
  { id: "str_kinetic_typography", name: "动态文字 (Kinetic Typo)", group: "C. 视觉感官", def: "文字作为视觉主体，配合快节奏音效进行轰炸。", core: "逻辑：信息强植。适合大促销或核心卖点强调。" },

  // D. 病毒与社交 (Viral & Social)
  { id: "str_comedy_skit", name: "反转段子 (Comedy Skit)", group: "D. 病毒社交", def: "铺垫-包袱-反转。以前半段的误导制造后半段的爆笑。", core: "逻辑：幽默解构。消解广告的入侵感。" },
  { id: "str_parody", name: "戏仿恶搞 (Parody)", group: "D. 病毒社交", def: "模仿经典电影、名画或流行文化梗。", core: "逻辑：文化借势。利用已知认知降低接受门槛。" },
  { id: "str_challenge", name: "发起挑战 (The Challenge)", group: "D. 病毒社交", def: "展示一个高难度的动作或玩法，邀请用户模仿。", core: "逻辑：参与感。UGC驱动的传播。" },
  { id: "str_reaction", name: "路人反应 (Reaction)", group: "D. 病毒社交", def: "真实的街头采访或盲测，记录惊讶的表情。", core: "逻辑：社会证明。'连路人都惊呆了'。" },
  { id: "str_manifesto", name: "品牌宣言 (Manifesto)", group: "D. 病毒社交", def: "打破第四面墙，直接对观众输出价值观和态度。", core: "逻辑：信仰召唤。寻找同类，建立部落。" },
  
  // E. 符号与象征 (Symbolic)
  { id: "str_metaphor", name: "具象隐喻 (Metaphor)", group: "E. 符号象征", def: "将抽象概念（如速度/安全）转化为具体物体（如猎豹/护盾）。", core: "逻辑：认知降维。让抽象利益点可视化。" },
  { id: "str_personification", name: "拟人化 (Personification)", group: "E. 符号象征", def: "产品变成人，或者身体器官拥有独立意识。", core: "逻辑：角色化。建立情感连接。" },
  { id: "str_hyperbole", name: "极致夸张 (Hyperbole)", group: "E. 符号象征", def: "无限放大产品带来的后果（如用了香水全城追随）。", core: "逻辑：戏剧化。通过荒谬强调效能。" }
];

// =============================================================================
// 2. 商业导演风格 (COMMERCIAL DIRECTORS) - Dedicated Library (100+ items)
// =============================================================================
const COMMERCIAL_DIRECTORS: LibraryItemDef[] = [
  // A. 史诗与科技 (Epic & Tech) - Ridley Scott, Nolan, etc.
  { id: "dir_ridley_scott_ad", name: "雷德利·斯科特 (1984 Style)", group: "A. 史诗科技", def: "Dystopian, high contrast, atmospheric smoke, cinematic scale.", core: "颠覆者，史诗感，极权美学，苹果1984。" },
  { id: "dir_joseph_kosinski", name: "约瑟夫·科辛斯基 (Kosinski)", group: "A. 史诗科技", def: "Symmetrical, clean CGI, architectural, high-tech gloss.", core: "创战纪风格，完美光影，科技史诗，速度感。" },
  { id: "dir_fincher_ad", name: "大卫·芬奇 (Fincher Ad)", group: "A. 史诗科技", def: "CG integration, smooth camera, yellow/green tint, precise.", core: "耐克Fate，完美控制，CGI与实拍结合，冷酷。" },
  { id: "dir_rupert_sanders", name: "鲁伯特·桑德斯 (Sanders)", group: "A. 史诗科技", def: "Visually stunning, slow motion, grand scale, Halo ads.", core: "游戏改编感，宏大叙事，凝固瞬间，油画质感。" },
  { id: "dir_apple_house", name: "苹果极简 (Apple In-House)", group: "A. 史诗科技", def: "White background, product macro, kinetic typography, clean.", core: "产品崇拜，绝对理性，高级，无瑕疵。" },
  { id: "dir_michael_bay_ad", name: "迈克尔·贝 (Bayhem)", group: "A. 史诗科技", def: "360 circling shots, low angle, sunset, explosions, glossy.", core: "极致商业美学，英雄主义，视觉轰炸，动感。" },
  { id: "dir_christopher_nolan_ad", name: "诺兰式 (Nolan-esque)", group: "A. 史诗科技", def: "Practical effects, time manipulation, macro shots, IMAX scale.", core: "真实物理质感，时间概念，冷峻，智性。" },
  { id: "dir_denis_villeneuve_ad", name: "维伦纽瓦 (Villeneuve Ad)", group: "A. 史诗科技", def: "Brutalist architecture, atmospheric mood, slow tracking shots.", core: "BDO巨物感，极简主义，压迫感，未来。" },
  { id: "dir_zack_snyder_ad", name: "扎克·施奈德 (Snyder Ad)", group: "A. 史诗科技", def: "Speed ramping, high contrast, mythological framing, grain.", core: "油画质感，慢动作暴力，漫画感，史诗。" },
  { id: "dir_james_cameron_ad", name: "卡梅隆 (Cameron Tech)", group: "A. 史诗科技", def: "Deep blue, bioluminescence, perfect tech integration.", core: "深海，未来科技，工业完美，宏大。" },
  { id: "dir_roland_emmerich", name: "艾默里奇 (Disaster)", group: "A. 史诗科技", def: "Wide shots of destruction, massive scale, global events.", core: "灾难美学，毁灭，大场面，震撼。" },
  { id: "dir_alex_garland", name: "亚历克斯·加兰 (Garland)", group: "A. 史诗科技", def: "Shiny surfaces, lens flares, philosophical sci-fi, stillness.", core: "机械姬，智能，冷漠，反光，光晕。" },
  { id: "dir_neill_blomkamp", name: "布洛姆坎普 (Blomkamp)", group: "A. 史诗科技", def: "Gritty sci-fi, handheld documentary style, realistic CGI.", core: "第九区，脏科幻，真实感，贫民窟。" },

  // B. 艺术与超现实 (Art & Surreal) - Glazer, Gondry, etc.
  { id: "dir_jonathan_glazer", name: "乔纳森·格雷泽 (Glazer)", group: "B. 艺术超现实", def: "Static shots, surreal events in reality, explosive color.", core: "索尼Bravia，静态中的爆发，诗意，震撼。" },
  { id: "dir_spike_jonze_ad", name: "斯派克·琼斯 (Spike Jonze)", group: "B. 艺术超现实", def: "Kinetic dance, absurd humor, breaking physics, raw energy.", core: "Kenzo世界，疯狂肢体，怪诞，爆发力。" },
  { id: "dir_michel_gondry_ad", name: "米歇尔·冈瑞 (Gondry)", group: "B. 艺术超现实", def: "Looping visuals, practical tricks, dream logic, playful.", core: "视觉魔术，循环，童趣，手工感。" },
  { id: "dir_chris_cunningham", name: "克里斯·坎宁安 (Cunningham)", group: "B. 艺术超现实", def: "Disturbing, glitchy, biomechanical, cold sync.", core: "Gucci Flora，诡异，Aphex Twin风格，前卫。" },
  { id: "dir_fka_twigs_ad", name: "FKA Twigs式 (Avant-Garde)", group: "B. 艺术超现实", def: "Fluid movement, distorted bodies, modern primitive.", core: "身体叙事，先锋，异质，神性。" },
  { id: "dir_daniels", name: "丹尼尔组合 (The Daniels)", group: "B. 艺术超现实", def: "Maximalist chaos, morphing, bizarre humor, heart.", core: "瞬息全宇宙风格，脑洞大开，无厘头深情。" },
  { id: "dir_megaforce", name: "Megaforce", group: "B. 艺术超现实", def: "Gravity defying, magical realism, epic stunts, Burberry.", core: "巴宝莉飞天，轻盈，魔法现实主义，奇观。" },
  { id: "dir_canada", name: "CANADA (Collective)", group: "B. 艺术超现实", def: "Sexy, retro, vibrant colors, camera tricks, music video style.", core: "Dua Lipa MV风格，复古性感，胶片感，潮流。" },
  { id: "dir_tarsem_singh", name: "塔西姆·辛 (Tarsem)", group: "B. 艺术超现实", def: "Vibrant costumes, symmetry, tableau vivant, dreamscapes.", core: "坠入，极致色彩，异域风情，构图狂魔。" },
  { id: "dir_yoann_lemoine", name: "Woodkid (Lemoine)", group: "B. 艺术超现实", def: "Black and white, epic slow motion, architectural, animals.", core: "史诗黑白，神圣感，雕塑感，庄严。" },
  { id: "dir_flor_sigismondi", name: "弗洛里亚 (Sigismondi)", group: "B. 艺术超现实", def: "Gothic, jittery, painterly, dark fantasy.", core: "暗黑，油画质感，惊悚，唯美。" },
  { id: "dir_johan_renck", name: "约翰·伦克 (Renck)", group: "B. 艺术超现实", def: "David Bowie Lazarus style, moody, texture, claustrophobic.", core: "切尔诺贝利，压抑，质感，死亡气息。" },
  { id: "dir_dougal_wilson", name: "道格尔·威尔逊 (Wilson)", group: "B. 艺术超现实", def: "Whimsical, clever transitions, british humor, john lewis.", core: "John Lewis圣诞广告，温馨，创意转场，童话。" },
  { id: "dir_kim_gehrig", name: "金·格里格 (Gehrig)", group: "B. 艺术超现实", def: "Empowering, rhythmic, bold editing, female gaze.", core: "吉列/耐克广告，女性力量，身体律动，自信。" },

  // C. 时尚与奢华 (Fashion & Luxury) - WKW, Luhrmann, etc.
  { id: "dir_wong_kar_wai_ad", name: "王家卫 (WKW Commercial)", group: "C. 时尚奢华", def: "Step printing, neon lights, slow motion, ambiguous mood.", core: "宝马The Hire，都市孤独，暧昧，时间流逝。" },
  { id: "dir_baz_luhrmann_ad", name: "巴兹·鲁赫曼 (Baz Luhrmann)", group: "C. 时尚奢华", def: "Operatic, chaotic, fast cutting, lavish costumes, theatrical.", core: "香奈儿No.5，红磨坊式奢华，浪漫主义，过剩。" },
  { id: "dir_david_lachapelle", name: "拉查佩尔 (LaChapelle)", group: "C. 时尚奢华", def: "Hyper-saturated, kitsch, religious iconography, plastic.", core: "极致波普，色彩爆炸，讽刺，华丽。" },
  { id: "dir_nick_knight", name: "尼克·奈特 (Nick Knight)", group: "C. 时尚奢华", def: "Digital distortion, flowers, fluid motion, high fashion.", core: "Showstudio，数字艺术，先锋，故障美学。" },
  { id: "dir_mert_marcus", name: "Mert & Marcus", group: "C. 时尚奢华", def: "Glossy skin, high contrast, bold colors, seductive.", core: "Vogue封面感，极致性感，完美肤质，强力。" },
  { id: "dir_guy_bourdin", name: "盖·伯丁 (Guy Bourdin Style)", group: "C. 时尚奢华", def: "Surreal narrative, cropped limbs, saturated color.", core: "法式情色，悬疑，高跟鞋，恋物。" },
  { id: "dir_tom_ford", name: "汤姆·福特 (Tom Ford)", group: "C. 时尚奢华", def: "Sleek, sexual, glossy, perfectly groomed, provocative.", core: "性张力，极简奢华，完美主义，诱惑。" },
  { id: "dir_gucci_retro", name: "古驰复古 (Gucci Retro)", group: "C. 时尚奢华", def: "70s vintage, eccentricity, Wes Anderson vibes, patterns.", core: "怪诞复古，书呆子风，繁复，极繁主义。" },
  { id: "dir_petra_collins", name: "佩特拉·柯林斯 (Collins)", group: "C. 时尚奢华", def: "Dreamy haze, pastel neon, female gaze, glitter.", core: "少女梦，迷幻，柔焦，复古青春。" },
  { id: "dir_tyrone_lebon", name: "泰隆·勒邦 (Lebon)", group: "C. 时尚奢华", def: "Raw, flash photography, eclectic, collage-like.", core: "Celine/Bottega风格，真实，拼贴，随意感。" },
  { id: "dir_harley_weir", name: "哈莉·威尔 (Weir)", group: "C. 时尚奢华", def: "Sensual textures, warm tones, intimate cropping.", core: "触感，皮肤，自然，私密。" },
  { id: "dir_rankin", name: "兰金 (Rankin)", group: "C. 时尚奢华", def: "Clean studio, bold attitude, celebrity portrait style.", core: "Dazed风格，直视，态度，商业人像。" },
  { id: "dir_ines_vinoodh", name: "Inez & Vinoodh", group: "C. 时尚奢华", def: "Digital manipulation, elegance, black and white perfection.", core: "超模，修图艺术，经典，先锋。" },

  // D. 幽默与叙事 (Comedy & Story) - Wes Anderson, Waititi, etc.
  { id: "dir_wes_anderson_ad", name: "韦斯·安德森 (Wes Ad)", group: "D. 幽默叙事", def: "Center symmetry, pastel palette, deadpan acting, flat lay.", core: "H&M/Amex广告，强迫症，童话，幽默。" },
  { id: "dir_taika_waititi", name: "塔伊加 (Taika Waititi)", group: "D. 幽默叙事", def: "Awkward humor, colorful, playful, dialogue driven.", core: "新西兰幽默，轻松，色彩丰富，反差萌。" },
  { id: "dir_edgar_wright", name: "埃德加·赖特 (Edgar Wright)", group: "D. 幽默叙事", def: "Visual comedy, crash zooms, rhythmic editing, sound fx.", core: "视觉喜剧，节奏剪辑，精准，转场。" },
  { id: "dir_guy_ritchie_ad", name: "盖·里奇 (Guy Ritchie)", group: "D. 幽默叙事", def: "Fast editing, freeze frames, voiceover, snappy dialogue.", core: "耐克，街头智慧，快节奏，多线叙事。" },
  { id: "dir_old_spice", name: "Old Spice风格 (Absurdist)", group: "D. 幽默叙事", def: "Rapid set changes, breaking 4th wall, continuous shot.", core: "无厘头，场景转换，自信，病毒式传播。" },
  { id: "dir_dollar_shave", name: "美元剃须 (Deadpan Walk)", group: "D. 幽默叙事", def: "CEO walking and talking to camera, one take.", core: "直白，打破第四墙，冷幽默，低成本感。" },
  { id: "dir_superbowl_epic", name: "超级碗史诗 (Superbowl)", group: "D. 幽默叙事", def: "High budget, celebrity cameos, cinematic humor, patriotism.", core: "国民级，大制作，明星堆砌，温情或爆笑。" },
  { id: "dir_ivan_zacharias", name: "伊万·扎哈里亚斯 (Ivan Z)", group: "D. 幽默叙事", def: "Cinematic realism mixed with subtle absurdity.", core: "冷幽默，电影质感，细节，故事大王。" },
  { id: "dir_tom_kuntz", name: "汤姆·孔茨 (Tom Kuntz)", group: "D. 幽默叙事", def: "Bizarre characters, intense staring, surreal comedy.", core: "Old Spice导演，怪诞，洗脑，魔性。" },
  { id: "dir_tim_eric", name: "Tim & Eric", group: "D. 幽默叙事", def: "Lo-fi VHS, bad editing, awkward acting, anti-humor.", core: "反幽默，故障艺术，尴尬，邪典。" },
  { id: "dir_adam_mckay", name: "亚当·麦凯 (McKay)", group: "D. 幽默叙事", def: "Improv style, breaking 4th wall, explaining complex topics.", core: "大空头风格，解释性，讽刺，直接。" },
  { id: "dir_judd_apatow", name: "阿帕图 (Apatow)", group: "D. 幽默叙事", def: "Naturalistic dialogue, long takes, awkward honesty.", core: "生活流喜剧，真实，对话，尴尬。" },

  // E. 街头与动感 (Street & Energy) - Romain Gavras, etc.
  { id: "dir_romain_gavras", name: "罗曼·加夫拉斯 (Gavras)", group: "E. 街头动感", def: "Gritty realism, huge crowds, violence, slow motion.", core: "阿迪达斯，暴徒美学，群体力量，生猛。" },
  { id: "dir_daniel_wolfe", name: "丹尼尔·沃尔夫 (Wolfe)", group: "E. 街头动感", def: "Raw documentary style, weird angles, authentic casting.", core: "轩尼诗，怪诞真实，胶片感，另类。" },
  { id: "dir_hiro_murai", name: "希罗·村井 (Hiro Murai)", group: "E. 街头动感", def: "Surreal urbanism, muted colors, floating, uncanny.", core: "亚特兰大风格，超现实日常，嘻哈，冷感。" },
  { id: "dir_brthr", name: "BRTHR", group: "E. 街头动感", def: "Hyper-kinetic, mixed media, glitch, neon, VHS texture.", core: "Z世代，视觉过载，故障艺术，疯狂剪辑。" },
  { id: "dir_hype_williams", name: "海普·威廉姆斯 (Hype Williams)", group: "E. 街头动感", def: "Fisheye lens, shiny suits, colorful backgrounds.", core: "90s嘻哈，鱼眼，高光，未来感。" },
  { id: "dir_dave_meyers", name: "戴夫·迈耶斯 (Dave Meyers)", group: "E. 街头动感", def: "CGI transitions, colorful, surreal sets, Kendrick style.", core: "肯德里克拉马尔MV，创意转场，视觉奇观。" },
  { id: "dir_colin_tilley", name: "科林·蒂利 (Colin Tilley)", group: "E. 街头动感", def: "Dark, gritty, high contrast, stylized violence.", core: "WAP导演，暗黑，强烈，质感。" },
  { id: "dir_ian_pons_jewell", name: "伊恩·庞斯·朱厄尔 (Jewell)", group: "E. 街头动感", def: "Mind-bending transitions, surreal logic, dynamic camera.", core: "神转折，脑洞，视觉流，怪诞。" },
  { id: "dir_henry_hobson", name: "亨利·霍布森 (Hobson)", group: "E. 街头动感", def: "Graphic design integration, title sequences, dark moods.", core: "游戏片头，平面感，阴郁，设计驱动。" },
  { id: "dir_patrick_clair", name: "帕特里克·克莱尔 (Clair)", group: "E. 街头动感", def: "True Detective intro style, double exposure, slow.", core: "真探片头，双重曝光，意识流，质感。" },
  { id: "dir_nabil", name: "纳比尔 (Nabil)", group: "E. 街头动感", def: "Raw storytelling, wide angles, underwater, authentic.", core: "弗兰克海洋，真实，广角，自然。" },
  { id: "dir_johan_hill", name: "乔纳·希尔 (Jonah Hill)", group: "E. 街头动感", def: "90s nostalgia, skate culture, 4:3 aspect ratio.", core: "滑板少年，复古，怀旧，胶片。" },
  { id: "dir_gaspar_noe", name: "加斯帕·诺 (Gaspar Noé)", group: "E. 街头动感", def: "Strobe lights, spinning camera, neon red, disorientation.", core: "高潮，眩晕，极度暴力，视听毒品。" },

  // F. 动画与CGI (Animation & VFX)
  { id: "dir_psyop", name: "PSYOP工作室 (Character)", group: "F. 动画特效", def: "High-end 3D character, stylized textures, emotional storytelling.", core: "可口可乐幸福工厂，精美CG，叙事动画。" },
  { id: "dir_man_vs_machine", name: "Man vs Machine (Abstract)", group: "F. 动画特效", def: "Abstract 3D, physics simulation, satisfying loops, texture focus.", core: "耐克Air，材质动态，舒适感，设计驱动。" },
  { id: "dir_buck", name: "Buck (Mixed Media)", group: "F. 动画特效", def: "Colorful, 2D/3D blend, morphing, playful transitions.", core: "苹果设计风，流畅，创意，多风格融合。" },
  { id: "dir_the_mill", name: "The Mill (VFX)", group: "F. 动画特效", def: "Photoreal animals, invisible VFX, car commercials.", core: "以假乱真，技术流，生物特效，高端。" },
  { id: "dir_blur_studio", name: "Blur Studio (Game)", group: "F. 动画特效", def: "Hyper-realistic game cinematic, action, heavy atmosphere.", core: "爱死机，游戏CG，史诗战争，极致细节。" },
  { id: "dir_motion_design", name: "动态设计 (Motion Graphics)", group: "F. 动画特效", def: "Kinetic typography, shapes, info-graphics, sleek.", core: "信息传达，节奏感，现代，苹果发布会。" },
  { id: "dir_stop_motion", name: "定格动画 (Stop Motion)", group: "F. 动画特效", def: "Tactile, jerky movement, handmade textures.", core: "韦斯安德森，手工感，童趣，复古。" },
  { id: "dir_anime_cm", name: "日式广告 (Anime CM)", group: "F. 动画特效", def: "Makoto Shinkai style, lens flare, detailed background, youth.", core: "新海诚风，青春，唯美，补习班/饮料广告。" },
  { id: "dir_fortiche", name: "Fortiche (Arcane Style)", group: "F. 动画特效", def: "Painted textures on 3D, hand-drawn FX, dynamic camera.", core: "双城之战，油画感，2D/3D结合，史诗。" },
  { id: "dir_spiderverse", name: "蜘蛛宇宙 (Spider-Verse)", group: "F. 动画特效", def: "Halftone dots, chromatic aberration, comic book style.", core: "漫画感，波普，抽帧，视觉冲击。" },
  { id: "dir_cyriak", name: "Cyriak (Fractal)", group: "F. 动画特效", def: "Recursive loops, fractal cows, disturbing collage.", core: "分形，无限循环，怪诞，魔性。" },
  { id: "dir_beeple", name: "Beeple (Dystopian 3D)", group: "F. 动画特效", def: "Daily render style, sci-fi dystopian, glossy, pop culture.", core: "C4D，赛博废土，讽刺，高产。" },
  { id: "dir_studio_ghibli_ad", name: "吉卜力风 (Ghibli)", group: "F. 动画特效", def: "Hand painted backgrounds, lush nature, food porn.", core: "治愈，自然，美食，童话。" },
  { id: "dir_gorillaz", name: "街头霸王 (Jamie Hewlett)", group: "F. 动画特效", def: "2D characters in 3D world, gritty, punk.", core: "虚拟乐队，涂鸦风，混合媒介，酷。" },
  { id: "dir_lego_movie", name: "乐高风 (Lego)", group: "F. 动画特效", def: "Stop-motion look with CG, plastic textures.", core: "积木，定格质感，玩具，幽默。" }
];

// =============================================================================
// 3. 商业视觉影调 (COMMERCIAL VISUAL TONES) - Dedicated Library (100+ items)
// =============================================================================
const COMMERCIAL_TONES: LibraryItemDef[] = [
  // A. 高级感 (Premium / Luxury)
  { id: "tone_luxury_gold", name: "黑金奢华 (Black & Gold)", group: "A. 高级奢华", def: "Deep blacks, gold highlights, spot lighting.", core: "权力，尊贵，神秘，欲望。" },
  { id: "tone_champagne", name: "香槟柔光 (Champagne)", group: "A. 高级奢华", def: "Warm beige, soft glow, low contrast.", core: "优雅，女性，庆典，松弛。" },
  { id: "tone_platinum", name: "铂金冷调 (Platinum)", group: "A. 高级奢华", def: "Silver, grey, cool white, sharp.", core: "科技，未来，纯净，精英。" },
  { id: "tone_fashion_bw", name: "高街黑白 (Fashion B&W)", group: "A. 高级奢华", def: "High contrast black and white, grainy.", core: "经典，态度，永恒，香奈儿。" },
  { id: "tone_royal_blue", name: "皇室深蓝 (Royal Blue)", group: "A. 高级奢华", def: "Deep velvet blue, cold highlights.", core: "稳重，专业，权威，银行。" },
  { id: "tone_emerald", name: "祖母绿 (Emerald)", group: "A. 高级奢华", def: "Rich green, dark shadows, jewel tones.", core: "复古，昂贵，自然，老钱。" },
  { id: "tone_pearl", name: "珍珠光泽 (Pearl)", group: "A. 高级奢华", def: "Iridescent white, soft pink highlights.", core: "纯洁，婚礼，护肤，光泽。" },
  { id: "tone_hermes_orange", name: "爱马仕橙 (Luxury Orange)", group: "A. 高级奢华", def: "Warm, saturated orange with brown leather tones.", core: "活力，经典，皮革，马术。" },
  { id: "tone_rose_gold", name: "玫瑰金 (Rose Gold)", group: "A. 高级奢华", def: "Metallic pink, warm copper.", core: "数码时尚，女性化，现代，温暖。" },
  { id: "tone_midnight_purple", name: "午夜紫 (Midnight Purple)", group: "A. 高级奢华", def: "Dark violet, velvet texture.", core: "神秘，诱惑，晚宴，高端。" },
  { id: "tone_old_money", name: "老钱风 (Old Money)", group: "A. 高级奢华", def: "Beige, cream, navy, low saturation.", core: "低调，传承，马球，度假。" },
  { id: "tone_porcelain", name: "白瓷 (Porcelain)", group: "A. 高级奢华", def: "Pure white, smooth, fragile.", core: "精致，艺术，易碎，完美。" },
  { id: "tone_burgundy", name: "勃艮第红 (Burgundy)", group: "A. 高级奢华", def: "Deep red wine color.", core: "成熟，醇厚，血统，冬季。" },

  // B. 科技感 (Tech / Clean)
  { id: "tone_clinical_white", name: "临床纯白 (Clinical White)", group: "B. 科技理性", def: "Overexposed white, blue tint, shadowless.", core: "科学，无菌，专业，信任。" },
  { id: "tone_cyber_blue", name: "赛博蓝光 (Cyber Blue)", group: "B. 科技理性", def: "Dark background, glowing blue lines.", core: "数据，连接，智能，未来。" },
  { id: "tone_product_red", name: "极客红 (Product Red)", group: "B. 科技理性", def: "Matte black with vibrant red accents.", core: "性能，警告，激进，力量。" },
  { id: "tone_apple_grey", name: "深空灰 (Space Grey)", group: "B. 科技理性", def: "Neutral grey gradients, soft reflections.", core: "工业设计，质感，中性，现代。" },
  { id: "tone_holographic", name: "全息虹彩 (Holographic)", group: "B. 科技理性", def: "Shifting iridescent colors, silver base.", core: "Web3，元宇宙，年轻，虚拟。" },
  { id: "tone_matrix_green", name: "矩阵代码 (Code Green)", group: "B. 科技理性", def: "Black background, digital green glow.", core: "黑客，底层逻辑，加密，安全。" },
  { id: "tone_transparent", name: "透明质感 (Glass/Clear)", group: "B. 科技理性", def: "Glassy, layered, bright, airy.", core: "坦诚，无隐瞒，现代UI，轻盈。" },
  { id: "tone_matte_black", name: "极致哑黑 (Matte Black)", group: "B. 科技理性", def: "Non-reflective black, subtle lighting.", core: "隐形，高端，专业设备，低调。" },
  { id: "tone_lab_sterile", name: "实验室洁净 (Sterile)", group: "B. 科技理性", def: "Stainless steel, cold light.", core: "研发，硬核，精准，无尘。" },
  { id: "tone_circuit_gold", name: "电路金 (Circuit Gold)", group: "B. 科技理性", def: "Green board with gold traces.", core: "芯片，核心，算力，价值。" },
  { id: "tone_blueprint_blue", name: "蓝图蓝 (Blueprint)", group: "B. 科技理性", def: "Prussian blue with white lines.", core: "规划，建筑，结构，理性。" },
  { id: "tone_fiber_optic", name: "光纤流 (Fiber Optic)", group: "B. 科技理性", def: "Strands of light in darkness.", core: "速度，传输，网络，汇聚。" },

  // C. 生活感 (Lifestyle / Warm)
  { id: "tone_sunny_morning", name: "清晨阳光 (Sunny Morning)", group: "C. 生活治愈", def: "High key, warm yellow sunlight, lens flare.", core: "希望，开始，健康，活力。" },
  { id: "tone_kodak_warm", name: "柯达暖调 (Kodak Warm)", group: "C. 生活治愈", def: "Vintage yellow/red bias, film grain.", core: "记忆，家庭，真实，怀旧。" },
  { id: "tone_nordic_light", name: "北欧自然 (Nordic Light)", group: "C. 生活治愈", def: "Cool natural light, muted colors, white.", core: "极简，舒适，环保，真实。" },
  { id: "tone_food_rich", name: "食欲浓彩 (Food Rich)", group: "C. 生活治愈", def: "High saturation, warm macro, oily sheen.", core: "美味，满足，热量，诱惑。" },
  { id: "tone_coffee_shop", name: "咖啡馆调 (Coffee Shop)", group: "C. 生活治愈", def: "Browns, wood tones, cozy lighting.", core: "休闲，工作，放松，文青。" },
  { id: "tone_golden_hour", name: "黄金时刻 (Golden Hour)", group: "C. 生活治愈", def: "Deep horizontal sunlight, long shadows.", core: "完美，浪漫，结束，感恩。" },
  { id: "tone_forest_green", name: "森林森系 (Forest Green)", group: "C. 生活治愈", def: "Deep greens, dappled sunlight.", core: "露营，自然，呼吸，氧气。" },
  { id: "tone_pastel_dream", name: "梦幻粉彩 (Pastel Dream)", group: "C. 生活治愈", def: "Soft pinks, baby blues, low contrast.", core: "母婴，女性，温柔，棉花糖。" },
  { id: "tone_hygge", name: "丹麦舒适 (Hygge)", group: "C. 生活治愈", def: "Candlelight, wool textures, warm darkness.", core: "安逸，居家，冬日，私密。" },
  { id: "tone_mediterranean", name: "地中海蓝白 (Mediterranean)", group: "C. 生活治愈", def: "Bright white, deep blue, harsh sun.", core: "度假，希腊，纯净，夏天。" },
  { id: "tone_morandi", name: "莫兰迪 (Morandi)", group: "C. 生活治愈", def: "Greyed out muted colors.", core: "高级灰，静物，平和，艺术。" },
  { id: "tone_boho", name: "波西米亚 (Boho)", group: "C. 生活治愈", def: "Earth tones, patterns, plants.", core: "自由，流浪，装饰，自然。" },

  // D. 潮流与冲击 (Pop / High Energy)
  { id: "tone_genz_acid", name: "酸性视觉 (Acid Pop)", group: "D. 潮流冲击", def: "Neon green/purple, high saturation, inverted.", core: "亚文化，叛逆，年轻，躁动。" },
  { id: "tone_dopamine", name: "多巴胺色 (Dopamine)", group: "D. 潮流冲击", def: "Candy colors, bright pink/cyan/yellow.", core: "快乐，消费，糖果，冲动。" },
  { id: "tone_vaporwave", name: "蒸汽波 (Vaporwave)", group: "D. 潮流冲击", def: "Pink/Teal gradient, retro grid.", core: "复古未来，网红，虚无，潮。" },
  { id: "tone_night_neon", name: "都市霓虹 (City Neon)", group: "D. 潮流冲击", def: "Wet street reflections, multicolor lights.", core: "夜生活，探索，激情，现代。" },
  { id: "tone_y2k_metallic", name: "千禧金属 (Y2K Metallic)", group: "D. 潮流冲击", def: "Silver, icy blue, pink glossy.", core: "复古科技，乐观，流行巨星。" },
  { id: "tone_punk_clash", name: "朋克撞色 (Punk Clash)", group: "D. 潮流冲击", def: "Yellow/Black, Red/White high contrast.", core: "警告，危险，促销，街头。" },
  { id: "tone_glitch_rgb", name: "故障RGB (Glitch RGB)", group: "D. 潮流冲击", def: "Color separation, noise.", core: "电子音乐，不羁，破坏，数据。" },
  { id: "tone_sport_vivid", name: "运动鲜亮 (Sport Vivid)", group: "D. 潮流冲击", def: "High saturation primary colors (Red/Blue).", core: "能量，团队，比赛，肾上腺素。" },
  { id: "tone_barbie_pink", name: "芭比粉 (Barbie Pink)", group: "D. 潮流冲击", def: "Overwhelming hot pink.", core: "女性主义，塑料，完美，流行。" },
  { id: "tone_ultra_violet", name: "紫外光 (Ultra Violet)", group: "D. 潮流冲击", def: "Deep glowing purple.", core: "神秘，夜店，未来，宇宙。" },
  { id: "tone_high_vis", name: "高反光 (High-Vis)", group: "D. 潮流冲击", def: "Neon yellow/orange safety colors.", core: "施工，机能风，警示，工业。" },

  // E. 电影叙事 (Cinematic Narrative)
  { id: "tone_teal_orange", name: "青橙色调 (Teal & Orange)", group: "E. 电影叙事", def: "Blue shadows, orange skin tones.", core: "好莱坞大片，冲突，戏剧性，标准。" },
  { id: "tone_fincher_green", name: "芬奇黄绿 (Fincher Green)", group: "E. 电影叙事", def: "Sickly green/yellow tint, low key.", core: "悬疑，心理战，冷酷，智商。" },
  { id: "tone_wes_anderson", name: "韦斯对称 (Wes Style)", group: "E. 电影叙事", def: "Pastel palette, flat lighting, symmetry.", core: "幽默，强迫症，童话，风格化。" },
  { id: "tone_wkw_red", name: "王家卫红 (WKW Red)", group: "E. 电影叙事", def: "Saturated red/green, blur, neon.", core: "暧昧，记忆，都市，情感。" },
  { id: "tone_matrix_code", name: "母体绿 (Matrix)", group: "E. 电影叙事", def: "Green tint, high contrast black.", core: "虚拟，觉醒，工业，酷。" },
  { id: "tone_nolan_blue", name: "诺兰冷蓝 (Nolan Blue)", group: "E. 电影叙事", def: "Steel blue, realistic, cold.", core: "宏大，理智，时间，物理。" },
  { id: "tone_sepia_history", name: "历史泛黄 (Sepia)", group: "E. 电影叙事", def: "Brown/Yellow tint, vignette.", core: "传承，老字号，故事，经典。" },
  { id: "tone_bleach_bypass", name: "跳银战损 (Bleach Bypass)", group: "E. 电影叙事", def: "High contrast, desaturated colors.", core: "残酷，战争，真实，硬汉。" },
  { id: "tone_scifi_lens_flare", name: "科幻光晕 (Lens Flare)", group: "E. 电影叙事", def: "Blue horizontal flares.", core: "JJ Abrams，太空，未来，科技。" },
  { id: "tone_horror_cool", name: "恐怖冷调 (Horror Cool)", group: "E. 电影叙事", def: "Desaturated blue/grey.", core: "鬼片，压抑，绝望，尸体。" },
  { id: "tone_dream_haze", name: "梦幻柔焦 (Dream Haze)", group: "E. 电影叙事", def: "Blooming highlights, soft edges.", core: "回忆，美好，虚幻，婚礼。" },
  { id: "tone_day_for_night", name: "日以作夜 (Day for Night)", group: "E. 电影叙事", def: "Deep blue filter on day shot.", core: "老电影，虚假夜晚，魔幻，不真实。" },

  // F. 复古与胶片 (Vintage & Film)
  { id: "tone_polaroid", name: "宝丽来 (Polaroid)", group: "F. 复古胶片", def: "Soft focus, white frame, flash.", core: "即时，私密，记录，不完美。" },
  { id: "tone_vhs", name: "录像带 (VHS)", group: "F. 复古胶片", def: "Scanlines, noise, color bleed.", core: "90年代，家庭录像，低保真，恐怖。" },
  { id: "tone_8mm", name: "8毫米 (Super 8)", group: "F. 复古胶片", def: "Grainy, jittery, warm.", core: "童年，回忆，独立电影，粗糙。" },
  { id: "tone_wet_plate", name: "湿版摄影 (Wet Plate)", group: "F. 复古胶片", def: "Chemical stains, high contrast B&W.", core: "19世纪，鬼魂，历史，手工。" },
  { id: "tone_technicolor", name: "特艺七彩 (Technicolor)", group: "F. 复古胶片", def: "Unnaturally saturated red/green.", core: "50年代，梦幻，歌舞片，人工。" },
  { id: "tone_cyanotype", name: "蓝晒 (Cyanotype)", group: "F. 复古胶片", def: "Blue and white monochrome.", core: "建筑蓝图，植物，实验，艺术。" },
  { id: "tone_lomo", name: "LOMO", group: "F. 复古胶片", def: "High contrast, vignette, saturated.", core: "随意，快乐，街头，实验。" },

  // G. 自然与环境 (Nature & Environment)
  { id: "tone_desert_dust", name: "沙漠尘土 (Desert Dust)", group: "G. 自然环境", def: "Orange haze, low visibility.", core: "废土，沙丘，干旱，生存。" },
  { id: "tone_jungle_mist", name: "丛林迷雾 (Jungle Mist)", group: "G. 自然环境", def: "Green tint, shafts of light.", core: "探险，原始，湿润，神秘。" },
  { id: "tone_arctic_white", name: "极地白 (Arctic White)", group: "G. 自然环境", def: "Blinding white, blue shadows.", core: "极寒，纯净，孤独，挑战。" },
  { id: "tone_underwater_cyan", name: "水下青 (Underwater)", group: "G. 自然环境", def: "Deep cyan, light rays.", core: "深海，窒息，梦境，失重。" },
  { id: "tone_volcanic_ash", name: "火山灰 (Volcanic Ash)", group: "G. 自然环境", def: "Grey scale with red glow.", core: "毁灭，末日，能量，地狱。" },
  { id: "tone_storm_grey", name: "风暴灰 (Storm Grey)", group: "G. 自然环境", def: "Dark clouds, threatening.", core: "危机，力量，压抑，前兆。" },
  
  // H. 暗黑与异质 (Dark & Abstract)
  { id: "tone_void_black", name: "虚空黑 (Void Black)", group: "H. 暗黑异质", def: "Pure black background.", core: "聚焦，虚无，产品，高级。" },
  { id: "tone_silhouette", name: "剪影 (Silhouette)", group: "H. 暗黑异质", def: "Black shape against light.", core: "神秘，轮廓，匿名，戏剧。" },
  { id: "tone_infrared", name: "红外摄影 (Infrared)", group: "H. 暗黑异质", def: "White foliage, black sky.", core: "异星，超现实，不可见光，诡异。" },
  { id: "tone_xray", name: "X光 (X-Ray)", group: "H. 暗黑异质", def: "Inverted B&W skeleton.", core: "看穿，死亡，结构，冷酷。" },
  { id: "tone_negative", name: "负片 (Negative)", group: "H. 暗黑异质", def: "Inverted colors.", core: "邪恶，反转，艺术，错误。" }
];

// =============================================================================
// 4. 商业美术参考 (COMMERCIAL ART / BENCHMARK) - Dedicated Library (100+ items)
// =============================================================================
const COMMERCIAL_ART: LibraryItemDef[] = [
  // A. 3D与CGI (3D Motion & CGI)
  { id: "art_3d_abstract", name: "3D抽象动态 (Abstract 3D)", group: "A. 3D与CGI", def: "Floating shapes, physics simulations, satisfying loops.", core: "Man vs Machine风格，材质展示，舒适感。" },
  { id: "art_liquid_sim", name: "流体模拟 (Liquid Sim)", group: "A. 3D与CGI", def: "Slow motion splashing liquids, mixing colors.", core: "美妆/饮品，丝滑，融合，诱惑。" },
  { id: "art_hyper_real", name: "超写实渲染 (Hyper-Real)", group: "A. 3D与CGI", def: "Imperfections, dust, fingerprints on products.", core: "质感狂魔，微距，比真实更真实。" },
  { id: "art_soft_body", name: "软体动力学 (Soft Body)", group: "A. 3D与CGI", def: "Squishy, bouncing objects, pastel colors.", core: "解压，亲肤，舒适，现代。" },
  { id: "art_metallic_flow", name: "液态金属 (Metallic Flow)", group: "A. 3D与CGI", def: "Chrome liquid morphing shapes.", core: "T-1000，未来，科技，顺滑。" },
  { id: "art_glass_refraction", name: "玻璃折射 (Glass Refraction)", group: "A. 3D与CGI", def: "Clear glass distorting light and background.", core: "透亮，光学，纯净，高级。" },
  { id: "art_particle_system", name: "粒子系统 (Particles)", group: "A. 3D与CGI", def: "Swirling dust, glowing points, forming shapes.", core: "数据，魔法，组合，微观。" },
  { id: "art_cloth_sim", name: "布料解算 (Cloth Sim)", group: "A. 3D与CGI", def: "Silk or velvet floating in zero gravity.", core: "柔顺，轻盈，洗护，优雅。" },
  { id: "art_product_explode", name: "爆炸图 (Exploded View)", group: "A. 3D与CGI", def: "Product parts floating apart.", core: "精密，科技，构造，硬核。" },
  { id: "art_low_poly", name: "低多边形 (Low Poly)", group: "A. 3D与CGI", def: "Geometric shapes, flat lighting, clean.", core: "极简，APP演示，可爱，抽象。" },
  { id: "art_voxel_art", name: "体素风 (Voxel Art)", group: "A. 3D与CGI", def: "Minecraft style blocks.", core: "数字，复古，建造，游戏。" },
  { id: "art_claymorphism", name: "粘土拟物 (Claymorphism)", group: "A. 3D与CGI", def: "Soft, matte, plasticine-like UI elements.", core: "亲切，童趣，UI趋势，立体。" },
  { id: "art_fur_render", name: "毛发渲染 (Fur Render)", group: "A. 3D与CGI", def: "Realistic fur/hair dynamics.", core: "萌宠，温暖，细节，怪物公司。" },
  { id: "art_subsurface", name: "次表面散射 (SSS)", group: "A. 3D与CGI", def: "Light passing through translucent material (skin/wax/jade).", core: "真实感，肉感，玉石，高级。" },
  { id: "art_isometric_3d", name: "等轴测3D (Isometric)", group: "A. 3D与CGI", def: "Orthographic view of 3D room.", core: "小世界，全知，游戏，精致。" },

  // B. 平面与插画 (2D & Illustration)
  { id: "art_flat_illu", name: "扁平插画 (Flat Illustration)", group: "B. 平面插画", def: "Corporate Memphis style, solid colors.", core: "科技企业，友好，普适，说明性。" },
  { id: "art_collage", name: "复古拼贴 (Collage)", group: "B. 平面插画", def: "Cut-out photos, mixed media, stop motion.", core: "时尚，艺术，趣味，解构。" },
  { id: "art_pixel", name: "像素艺术 (Pixel Art)", group: "B. 平面插画", def: "8-bit/16-bit retro game style.", core: "怀旧，游戏化，极客，年轻。" },
  { id: "art_line_art", name: "极简线条 (Line Art)", group: "B. 平面插画", def: "Continuous thin lines, white background.", core: "优雅，极简，说明书，文艺。" },
  { id: "art_watercolor", name: "水彩风 (Watercolor)", group: "B. 平面插画", def: "Bleeding colors, paper texture.", core: "女性，自然，柔和，有机。" },
  { id: "art_vector_gradient", name: "矢量渐变 (Vector Gradient)", group: "B. 平面插画", def: "Smooth color transitions, mesh tool.", core: "现代，流体，科技，背景。" },
  { id: "art_memphis", name: "孟菲斯 (Memphis)", group: "B. 平面插画", def: "Squiggles, triangles, bright pop colors.", core: "80年代，活力，混乱，设计感。" },
  { id: "art_risograph", name: "孔版印刷 (Risograph)", group: "B. 平面插画", def: "Grainy texture, misaligned colors.", core: "复古，手工，独立，质感。" },
  { id: "art_anime_style", name: "日式动漫 (Anime Style)", group: "B. 平面插画", def: "Cel-shaded, big eyes, detailed background.", core: "青春，热血，二次元，叙事。" },
  { id: "art_doodle", name: "手绘涂鸦 (Doodle)", group: "B. 平面插画", def: "Scribbles over real video.", core: "年轻，街头，创意，活力。" },
  { id: "art_blueprint", name: "蓝图风 (Blueprint)", group: "B. 平面插画", def: "White lines on blue grid.", core: "工程，计划，专业，结构。" },
  { id: "art_pop_comic", name: "美漫波普 (Pop Comic)", group: "B. 平面插画", def: "Halftone dots, speech bubbles, bold lines.", core: "复古，冲击力，对话，英雄。" },
  { id: "art_woodblock", name: "木刻版画 (Woodblock)", group: "B. 平面插画", def: "Rough carved lines, ink texture.", core: "传统，手作，历史，粗犷。" },
  { id: "art_oil_painting", name: "油画风格 (Oil Paint)", group: "B. 平面插画", def: "Visible brush strokes, rich colors.", core: "经典，艺术，厚重，品质。" },

  // C. 动态图形与UI (Motion Graphics & UI)
  { id: "art_kinetic_typo", name: "动态字体 (Kinetic Typo)", group: "C. 动态图形", def: "Moving text, fast cuts, bold fonts.", core: "Apple风格，信息传达，节奏感，现代。" },
  { id: "art_ui_hud", name: "FUI/HUD (Future UI)", group: "C. 动态图形", def: "Glowing data rings, floating text, sci-fi lines.", core: "钢铁侠，科技感，分析，数据化。" },
  { id: "art_glass_morphism", name: "毛玻璃 (Glassmorphism)", group: "C. 动态图形", def: "Blurred transparency, soft shadows, layers.", core: "现代UI，高级，通透，深度。" },
  { id: "art_glitch_mo", name: "故障动效 (Glitch Motion)", group: "C. 动态图形", def: "RGB split, noise, stuttering text.", core: "赛博，年轻，系统错误，酷。" },
  { id: "art_data_viz", name: "数据可视化 (Data Viz)", group: "C. 动态图形", def: "Beautiful charts, flowing particles, maps.", core: "信息，专业，规模，智能。" },
  { id: "art_lower_thirds", name: "字幕条 (Lower Thirds)", group: "C. 动态图形", def: "Clean animated text bars.", core: "新闻，采访，信息，正式。" },
  { id: "art_stop_motion", name: "定格动画 (Stop Motion)", group: "C. 动态图形", def: "Choppy movement, tactile objects.", core: "手工，趣味，复古，真实。" },
  { id: "art_parallax", name: "视差图片 (Parallax Photo)", group: "C. 动态图形", def: "2.5D movement from still photos.", core: "历史，记忆，深度，纪录片。" },
  { id: "art_liquid_transition", name: "液体转场 (Liquid Trans)", group: "C. 动态图形", def: "Morphing blobs changing scenes.", core: "流畅，现代，多彩，无缝。" },
  { id: "art_grid_tunnel", name: "网格隧道 (Grid Tunnel)", group: "C. 动态图形", def: "Retro 80s synthwave grid.", core: "复古未来，速度，电子，空间。" },
  { id: "art_neomorphism", name: "新拟物 (Neomorphism)", group: "C. 动态图形", def: "Soft extruded shapes, subtle shadows.", core: "触感，现代，柔和，界面。" },
  { id: "art_loading_anim", name: "加载动效 (Loading)", group: "C. 动态图形", def: "Creative progress bars, spinning icons.", core: "等待，极简，循环，微交互。" },

  // D. 场景与布景 (Set Design & Installation)
  { id: "art_set_monochrome", name: "单色布景 (Monochrome Set)", group: "D. 场景设计", def: "Everything painted one color.", core: "强视觉，时尚，极简，超现实。" },
  { id: "art_set_neon", name: "霓虹装置 (Neon Installation)", group: "D. 场景设计", def: "Light tubes forming shapes in dark.", core: "夜店，赛博，现代艺术，氛围。" },
  { id: "art_set_nature", name: "室内自然 (Indoor Nature)", group: "D. 场景设计", def: "Grass and trees inside a white room.", core: "环保，冲突，超现实，清新。" },
  { id: "art_set_mirror", name: "无限镜屋 (Infinity Mirror)", group: "D. 场景设计", def: "Mirrors creating endless reflection.", core: "草间弥生，迷幻，空间感，自拍。" },
  { id: "art_set_paper", name: "纸艺世界 (Paper World)", group: "D. 场景设计", def: "Everything made of cardboard/paper.", core: "手工，脆弱，童话，创意。" },
  { id: "art_set_projection", name: "投影映射 (Projection Map)", group: "D. 场景设计", def: "Video projected on objects.", core: "变化，科技艺术，光影，魔术。" },
  { id: "art_set_brutalist", name: "粗野主义 (Brutalist)", group: "D. 场景设计", def: "Raw concrete, massive shapes.", core: "冷酷，时尚，工业，力量。" },
  { id: "art_set_miniature", name: "微缩模型 (Miniature)", group: "D. 场景设计", def: "Tilt-shift look, tiny world.", core: "上帝视角，可爱，细节，掌控。" },
  { id: "art_set_inflatable", name: "充气装置 (Inflatable)", group: "D. 场景设计", def: "Plastic air-filled shapes.", core: "波普，现代，廉价，快乐。" },
  { id: "art_set_water", name: "水面舞台 (Water Stage)", group: "D. 场景设计", def: "Shallow water reflective floor.", core: "唯美，倒影，神圣，舞蹈。" },
  { id: "art_set_geometric", name: "几何孟菲斯 (Geometric Set)", group: "D. 场景设计", def: "Bold shapes and colors as props.", core: "时尚摄影，80年代，设计感。" },
  { id: "art_set_void", name: "无限白棚 (Cyclorama)", group: "D. 场景设计", def: "Seamless white background.", core: "商业，纯净，聚焦，无干扰。" },

  // E. 潮流与特定风格 (Specific Trends)
  { id: "art_trend_vaporwave", name: "蒸汽波 (Vaporwave)", group: "E. 潮流风格", def: "Greek statues, pink/blue gradient, VHS.", core: "网络怀旧，虚无，消费主义，迷幻。" },
  { id: "art_trend_acid", name: "酸性设计 (Acid Graphics)", group: "E. 潮流风格", def: "Distorted type, chrome, gothic, rave.", core: "Y2K，亚文化，激进，混乱。" },
  { id: "art_trend_solarpunk", name: "太阳朋克 (Solarpunk)", group: "E. 潮流风格", def: "Green tech, art nouveau, utopia.", core: "环保，未来，希望，和谐。" },
  { id: "art_trend_cottagecore", name: "田园风 (Cottagecore)", group: "E. 潮流风格", def: "Flowers, baking, vintage, soft.", core: "逃离城市，传统，慢生活，治愈。" },
  { id: "art_trend_dark_academia", name: "暗黑学院 (Dark Academia)", group: "E. 潮流风格", def: "Tweed, books, coffee, rainy mood.", core: "知识，复古，神秘，精英。" },
  { id: "art_trend_frutiger_aero", name: "航空拟物 (Frutiger Aero)", group: "E. 潮流风格", def: "Glossy, bubbles, green grass, optimistic tech.", core: "2000年代，Windows Vista，乌托邦，清洁。" },
  { id: "art_trend_barbie", name: "芭比粉 (Barbiecore)", group: "E. 潮流风格", def: "All pink, plastic, maximalist.", core: "女性，玩具，完美，流行。" },
  { id: "art_trend_gorpcore", name: "户外机能 (Gorpcore)", group: "E. 潮流风格", def: "Hiking gear, techwear, nature.", core: "实用，城市机能，探险，现代。" },
  { id: "art_trend_y2k", name: "千禧风 (Y2K)", group: "E. 潮流风格", def: "Metallics, butterfly clips, low rise.", core: "乐观，科技泡沫，流行音乐，闪耀。" },
  { id: "art_trend_cyberpunk", name: "赛博朋克 (Cyberpunk)", group: "E. 潮流风格", def: "Neon, rain, high tech low life.", core: "反乌托邦，夜景，义体，酷。" },
  { id: "art_trend_steampunk", name: "蒸汽朋克 (Steampunk)", group: "E. 潮流风格", def: "Brass, gears, Victorian.", core: "复古未来，机械，冒险，黄铜。" },
  { id: "art_trend_synthwave", name: "合成波 (Synthwave)", group: "E. 潮流风格", def: "Grid sun, fast cars, neon purple.", core: "80年代，电子乐，极速，怀旧。" },

  // F. 材质与纹理 (Texture & Material)
  { id: "art_mat_gold", name: "黄金 (Gold)", group: "F. 材质纹理", def: "Reflective yellow metal.", core: "财富，奢华，神性，贪婪。" },
  { id: "art_mat_marble", name: "大理石 (Marble)", group: "F. 材质纹理", def: "White stone with veins.", core: "古典，高冷，雕塑，昂贵。" },
  { id: "art_mat_neon", name: "霓虹灯 (Neon)", group: "F. 材质纹理", def: "Glowing glass tubes.", core: "夜生活，都市，迷幻，复古。" },
  { id: "art_mat_plastic", name: "塑料 (Plastic)", group: "F. 材质纹理", def: "Smooth, shiny, artificial.", core: "现代，廉价，玩具，消费。" },
  { id: "art_mat_fur", name: "毛皮 (Fur)", group: "F. 材质纹理", def: "Soft, hairy texture.", core: "温暖，野性，奢华，生物。" },
  { id: "art_mat_slime", name: "粘液 (Slime)", group: "F. 材质纹理", def: "Wet, dripping, translucent.", core: "恶心，生物，异形，滑稽。" },
  { id: "art_mat_concrete", name: "混凝土 (Concrete)", group: "F. 材质纹理", def: "Grey, rough, industrial.", core: "城市，冷漠，坚硬，基础。" },
  { id: "art_mat_hologram", name: "全息 (Hologram)", group: "F. 材质纹理", def: "Blue translucent light.", core: "科技，未来，虚幻，通讯。" },
  { id: "art_mat_crystal", name: "水晶 (Crystal)", group: "F. 材质纹理", def: "Clear, refractive shards.", core: "能量，魔法，美丽，尖锐。" },
  { id: "art_mat_ink", name: "水墨 (Ink)", group: "F. 材质纹理", def: "Black liquid diffusing.", core: "东方，流动，书写，艺术。" },
  { id: "art_mat_smoke", name: "烟雾 (Smoke)", group: "F. 材质纹理", def: "Wispy gas clouds.", core: "神秘，消失，无形，氛围。" },
  { id: "art_mat_wood", name: "木纹 (Wood)", group: "F. 材质纹理", def: "Organic brown texture.", core: "自然，温暖，传统，手工。" },

  // G. 数字与故障 (Digital & Glitch)
  { id: "art_dig_pixel", name: "像素 (Pixels)", group: "G. 数字故障", def: "Visible square blocks.", core: "复古，数字，基础，马赛克。" },
  { id: "art_dig_glitch", name: "故障 (Glitch)", group: "G. 数字故障", def: "Data corruption visual.", core: "错误，崩坏，现代，焦虑。" },
  { id: "art_dig_wireframe", name: "线框 (Wireframe)", group: "G. 数字故障", def: "3D model lines.", core: "蓝图，虚拟，构建，黑客。" },
  { id: "art_dig_ascii", name: "字符画 (ASCII)", group: "G. 数字故障", def: "Image made of text.", core: "代码，极客，复古，信息。" },
  { id: "art_dig_scanline", name: "扫描线 (Scanlines)", group: "G. 数字故障", def: "CRT TV horizontal lines.", core: "老电视，监控，怀旧，屏幕。" },
  { id: "art_dig_noise", name: "噪点 (Noise)", group: "G. 数字故障", def: "Random grain.", core: "干扰，质感，低保真，真实。" }
];

export const COMM_SKIN_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "comm_skin_status_lib",
    name: "品牌现状 (Brand Status)",
    desc: "定义生意的起点：当前的品牌态势决定了片子的攻击性",
    items: [
      { id: "st_new_launch", name: "新品入场 (New Entry)", def: "初次露面，需要极强的视觉识别度与品类定义力。", core: "逻辑：建立第一印象，缝合‘产品=品类’。" },
      { id: "st_challenger", name: "挑战者进攻 (Challenger)", def: "针对行业领袖，指出其傲微或过时，确立自己的先进性。", core: "逻辑：‘弑父’。否定大他者的旧法，建立自己的新法。" },
      { id: "st_market_leader", name: "领导者防守 (Defensive)", def: "已有高心智占有率，侧重品牌调性、价值观输出与行业地位维护。", core: "逻辑：强化大他者地位，缝合‘品质=我’。" },
      { id: "st_rebrand", name: "心智重塑 (Rebranding)", def: "旧品牌换新颜，需要打破固有刻板印象，建立新链接。", core: "逻辑：否定旧我，建立新的理想镜像。" },
      { id: "st_promotion", name: "爆发促销 (Aggressive)", def: "纯粹的转化导向，强调获得感与错失恐惧。", core: "逻辑：利用阉割威胁（错过优惠），驱动即时行动。" },
      { id: "st_crisis", name: "危机公关 (Crisis)", def: "品牌形象受损，需要诚恳沟通或转移视线。", core: "逻辑：重建信任，缝合裂痕。" },
      { id: "st_luxury_maintain", name: "奢华维系 (Luxury)", def: "不追求销量，只追求稀缺性和渴望感。", core: "逻辑：制造距离，强化图腾属性。" },
      { id: "st_festive", name: "节日营销 (Festive)", def: "借势节日氛围，强调礼物属性和情感连接。", core: "逻辑：仪式感，情感共鸣。" }
    ]
  },
  {
    id: "comm_skin_length_lib",
    name: "广告长度 (Ad Length)",
    desc: "时间的容器决定了能承载多少心理波折",
    items: [
      { id: "len_6s", name: "6s 极致能指 (Bumper)", def: "原子化信号。没有叙事空间，只允许一个核心视觉冲击。", core: "逻辑：视觉侵入，强制缝合核心卖点。" },
      { id: "len_15s", name: "15s 核心回路 (Short)", def: "三幕剧。极简逻辑：现状 -> 动作 -> 解决。", core: "逻辑：欲望短路。最快速度完成心理闭环。" },
      { id: "len_30s", name: "30s 经典剧场 (Standard)", def: "标准TVC。允许完整的 C1-C7 逻辑链，有铺垫有高潮。", core: "逻辑：完整的心理缝合手术，节奏感均衡。" },
      { id: "len_60s", name: "60s 深度叙事 (Long)", def: "包含丰富细节、情绪空镜或多个人物弧光。", core: "逻辑：建立深度认同，通过留白产生崇高感。" },
      { id: "len_3min", name: "180s+ 品牌长片 (Feature)", def: "纪实、宣言或微电影。追求价值观的彻底穿透。", core: "逻辑：大他者意识形态的授权。建立长效信任。" },
      { id: "len_loop", name: "无限循环 (Loop)", def: "适合GIF或户外大屏的无缝循环视频。", core: "逻辑：视觉催眠，无始无终。" }
    ]
  },
  {
    id: "comm_skin_media_lib",
    name: "投放媒介 (Media Placement)",
    desc: "定义受众的心理状态。不同的平台意味着不同的叙事主权。",
    items: [
      { id: "med_tvc_traditional", name: "传统卫视 TVC (Broadcast)", def: "高声量、大覆盖。通过电视大屏幕播放，具有极强的官方背书感。", core: "心理契约：大他者的宣讲。适合塑造品牌公信力。" },
      { id: "med_vertical_feed", name: "短视频信息流 (Short Feed)", def: "抖音/TikTok/视频号。9:16 竖屏。多巴胺快速切换，极短注意力窗口。", core: "心理契约：多巴胺猎杀。前3秒必须高潮。" },
      { id: "med_cinema_standard", name: "院线大幕 (Cinema Ads)", def: "封闭、黑暗、高保真音效。强制性的、沉浸式的品牌体验。", core: "心理契约：宗教式臣服。用户完全让渡注意力，适合视听奇观。" },
      { id: "med_social_story", name: "社交快拍 (Stories)", def: "24小时消失，生活化，低保真，互动性强。", core: "心理契约：朋友间的窥视。真实感大于精致感。" },
      { id: "med_outdoor", name: "户外大屏 (DOOH)", def: "无声，远距离，瞬间一瞥。需要极简的视觉冲击。", core: "心理契约：环境背景音。视觉锤。" },
      { id: "med_pree_roll", name: "贴片广告 (Pre-roll)", def: "用户想跳过的5秒。必须在前5秒抓住注意力或讲完核心。", core: "心理契约：干扰与对抗。必须在被跳过前完成缝合。" },
      { id: "med_private_domain", name: "私域流量 (Private)", def: "微信群、邮件。长图文或深度视频，针对忠实用户。", core: "心理契约：内部人的交流。深度、专业、情感。" }
    ]
  },
  {
    id: "comm_skin_structure_lib",
    name: "叙事形态 (Strategy Matrix)",
    desc: "商业叙事策略：决定产品特征如何转化为受众的欲望钩子",
    items: COMMERCIAL_STRUCTURES
  },
  {
    id: "comm_skin_auteur_lib",
    name: "导演风格 (Commercial Director)",
    desc: "广告导演与影像风格：决定视听语言与执行质感",
    items: COMMERCIAL_DIRECTORS
  },
  {
    id: "comm_skin_chroma_lib",
    name: "视觉影调 (Visual Tone)",
    desc: "商业调色与光影：控制受众的潜意识情绪",
    items: COMMERCIAL_TONES
  },
  {
    id: "comm_skin_emotion_lib",
    name: "影片情绪 (Film Emotion)",
    desc: "定义全片的感性能量：欢快、温馨、压抑或荒诞",
    items: [
      { id: "emo_humorous", name: "搞笑幽默 (Humorous)", def: "利用反差、怪诞或逻辑错位引发的快感释放。", core: "应用：消解品牌傲慢，增加亲和力。适用：生活快消、APP。" },
      { id: "emo_energetic", name: "欢快动感 (Energetic)", def: "高频节奏、亮色调、充满生命力的律动。", core: "应用：激发多巴胺，创造即时购买欲。适用：运动、数码、饮料。" },
      { id: "emo_warm", name: "温馨治愈 (Warm & Healing)", def: "柔和漫反射、低饱和度、强调包裹感与母性安宁。", core: "应用：缝合孤独感，建立长期信任。适用：家居、母婴、宠物。" },
      { id: "emo_epic", name: "宏大庄严 (Epic & Grand)", def: "厚重影调、远超尺度的构图、压抑后的崇高感。", core: "应用：建立大他者的神圣权威。适用：重工业、品牌长片、金融。" },
      { id: "emo_cool", name: "冷峻疏离 (Cold & Minimal)", def: "去情感化的机器凝视、冷静、客观、理性。", core: "应用：强调技术领先与阶级优越. 适用：AI、硬科技、极简设计。" },
      { id: "emo_tense", name: "紧迫悬疑 (Tense & Suspense)", def: "快呼吸节奏、阴影遮盖、未知带来的不安。收缩感。", core: "应用：制造危机感，突显解药的必要性. 适用：安防、黑科技。" },
      { id: "emo_poetic", name: "唯美诗意 (Poetic & Melodic)", def: "对质感的极致捕捉、大量留白、流动的影调。", core: "应用：制造对象a的诱惑力. 适用：香水、珠宝、高端护肤。" },
      { id: "emo_rebellious", name: "反叛生猛 (Raw & Rebellious)", def: "粗糙质感、高对比、充满破坏欲的街头感。", core: "应用：认同亚文化身份. 适用：潮牌、极限运动、先锋艺术。" },
      { id: "emo_sexy", name: "性感诱惑 (Sexy/Sensual)", def: "特写、慢动作、呼吸声、皮肤质感。", core: "应用：直接刺激力比多。适用：美妆、内衣、食品。" },
      { id: "emo_creepy", name: "诡异怪诞 (Creepy)", def: "不协调的元素、恐怖谷效应、超现实。", core: "应用：制造强烈的记忆点，打破常规。适用：零食、创意品牌。" },
      { id: "emo_sad", name: "催泪感人 (Sad/Touching)", def: "悲剧叙事、钢琴配乐、遗憾与和解。", core: "应用：深度情感共鸣。适用：保险、公益、节日。" },
      { id: "emo_nostalgic", name: "怀旧复古 (Nostalgic)", def: "泛黄滤镜、旧物、胶片质感。", core: "应用：唤起美好回忆。适用：老品牌、食品、时尚。" }
    ]
  },
  {
    id: "comm_skin_benchmark_lib",
    name: "美术风格 (Commercial Art)",
    desc: "CGI、动态设计与插画：非写实风格的视觉基准",
    items: COMMERCIAL_ART
  },

  {
    id: "comm_skin_anchor_lib",
    name: "产品锚点 (Anchoring)",
    desc: "产品与观众凝视的关系",
    items: PRODUCT_ANCHORS
  },
  {
    id: "comm_skin_scenario_lib",
    name: "应用场景 (Scenario)",
    desc: "产品所在的社会化拍摄空间",
    items: APPLICATION_SCENARIOS
  },
  {
    id: "comm_skin_endorsement_lib",
    name: "权威环境 (RTB Context)",
    desc: "背书空间：大他者给予产品承诺加冕的场域",
    items: AUTHORITY_ENVIRONMENTS
  }
];
