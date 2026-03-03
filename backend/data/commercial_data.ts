
import { NarrativeBlockDef, LibraryCategoryDef } from '../types';

// --- 商业引擎模块定义 (COMMERCIAL BLOCKS: C0-C7) ---
export const COMMERCIAL_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  { id: "comm_c0", name: "C0. 底层欲望", enName: "C0. CORE DESIRE", description: "【能量插座】决定快感进入主体的通道。定义受众最原始的欲望回路。", tags: [] },
  { id: "comm_c1", name: "C1. 缺失主体", enName: "C1. BARRED SUBJECT", description: "【症候分析】感到不完整的主体。定义受众的社会身份及其核心匮乏。", tags: [] },
  { id: "comm_c2", name: "C2. 痛点场景", enName: "C2. THE REAL INTRUSION", description: "【实在界裂痕】日常生活幻象破裂的瞬间。定义焦虑爆发的具体触发点。", tags: [] },
  { id: "comm_c3", name: "C3. 产品图腾", enName: "C3. THE PRODUCT (a)", description: "【欲望对象】作为救赎符号的客体。定义产品如何作为“对象 a”缝合伤口。", tags: [] },
  { id: "comm_c4", name: "C4. 信任背书", enName: "C4. ENDORSEMENT", description: "【大他者授权】赋予产品合法性与信任感的来源。谁在为救赎做担保？", tags: [] },
  { id: "comm_c5", name: "C5. 转化仪式", enName: "C5. THE RITUAL", description: "【驱动行为】通过特定的消费动作来获得掌控感，释放能量。如何按下救赎开关？", tags: [] },
  { id: "comm_c6", name: "C6. 潜在威胁", enName: "C6. THE THREAT", description: "【不买的代价】如果拒绝这个解决方案，将面临的阉割威胁或社会死亡。", tags: [] },
  { id: "comm_c7", name: "C7. 承诺幻象", enName: "C7. THE PROMISE", description: "【虚假完满】消费后获得的完美镜像或理想状态。缝合后的终点状态。", tags: [] }
];

// --- 商业引擎词库 (COMMERCIAL LIBRARY) ---
export const COMMERCIAL_ENGINE_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "comm_c0_lib",
    name: "C0. 底层欲望 (Core Desires)",
    desc: "30种能量通道：决定了快感进入受众主体的物理/心理路径",
    items: [
      // === GROUP A: 摄入回路 (Feeding / Oral) ===
      { 
        id: "c0_o1", 
        name: "母体吸吮 (Sucking)", 
        group: "A. 摄入回路", 
        def: "逻辑：渴望回归母体，追求无忧无虑的受保护感。", 
        core: "应用：母婴、床品、治愈食品。侧重展现“被绝对接纳”的温情。",
        defEn: "Logic: Longing to return to the womb, seeking carefree protection.",
        coreEn: "Applications: Baby care, bedding, comfort food. Focus: The warmth of 'absolute acceptance'."
      },
      { 
        id: "c0_o2", 
        name: "空洞填充 (Filling)", 
        group: "A. 摄入回路", 
        def: "逻辑：针对“内心空虚”的物理代偿，通过吞噬感缓解焦虑。", 
        core: "应用：高热量零食、盲盒。侧重“瞬间满格”的心理补偿。",
        defEn: "Logic: Physical compensation for 'inner emptiness', alleviating anxiety through swallowing.",
        coreEn: "Applications: High-calorie snacks, blind boxes. Focus: Psychological compensation of 'instant fullness'."
      },
      { 
        id: "c0_o3", 
        name: "暴力掠食 (Biting)", 
        group: "A. 摄入回路", 
        def: "逻辑：通过破坏和占有外部资源来确认自我的力量。", 
        core: "应用：功能饮料、竞技游戏。侧重展现“撕裂阻碍”的侵略性。",
        defEn: "Logic: Confirming self-power through destruction and possession of external resources.",
        coreEn: "Applications: Energy drinks, competitive gaming. Focus: The aggression of 'tearing through obstacles'."
      },
      { 
        id: "c0_o4", 
        name: "毒性成瘾 (Addictive)", 
        group: "A. 摄入回路", 
        def: "逻辑：追求危险的快乐，明知有害但无法停止的自毁感。", 
        core: "应用：辛辣食品、酒精、深夜娱乐。侧重“越界带来的爽感”。",
        defEn: "Logic: Pursuing dangerous pleasure, self-destructive urge known to be harmful but unstoppable.",
        coreEn: "Applications: Spicy food, alcohol, late-night entertainment. Focus: The thrill of 'crossing the line'."
      },
      { 
        id: "c0_o5", 
        name: "纯净呼吸 (Resonance)", 
        group: "A. 摄入回路", 
        def: "逻辑：通过吸入纯净元素来净化内在的污浊。", 
        core: "应用：空净、香氛、瑜伽。侧重展现“内在节奏的重整”。",
        defEn: "Logic: Purifying internal filth by inhaling pure elements.",
        coreEn: "Applications: Air purifiers, fragrances, yoga. Focus: 'Realignment of internal rhythm'."
      },
      { 
        id: "c0_o6", 
        name: "感官交融 (Melting)", 
        group: "A. 摄入回路", 
        def: "逻辑：追求自我边界的消亡，与大自然或宏大物合一。", 
        core: "应用：旅游、艺术、高端酒店。侧重“自我消失在美好中”。",
        defEn: "Logic: Seeking the dissolution of self-boundaries, merging with nature or grandeur.",
        coreEn: "Applications: Travel, art, luxury hotels. Focus: 'Self vanishing into beauty'."
      },

      // === GROUP B: 留存回路 (Retention / Anal) ===
      { 
        id: "c0_a1", 
        name: "绝对秩序 (Order)", 
        group: "B. 留存回路", 
        def: "逻辑：对混乱的恐惧，追求几何级数的完美排列。", 
        core: "应用：收纳、理财、B端系统。侧重展现“混乱被抚平”的权力感。",
        defEn: "Logic: Fear of chaos, pursuing geometric perfection and arrangement.",
        coreEn: "Applications: Storage, wealth management, B2B systems. Focus: The power of 'smoothing out chaos'."
      },
      { 
        id: "c0_a2", 
        name: "杀菌进化 (Sterile)", 
        group: "B. 留存回路", 
        def: "逻辑：将世界视为充满病毒的战场，建立无菌屏障。", 
        core: "应用：消杀、空净、护肤。侧重展现“绝对洁净带来的安全”。",
        defEn: "Logic: Viewing the world as a battlefield of viruses, establishing a sterile shield.",
        coreEn: "Applications: Disinfection, air purification, skincare. Focus: 'Safety through absolute cleanliness'."
      },
      { 
        id: "c0_a3", 
        name: "财富积攒 (Hoarding)", 
        group: "B. 留存回路", 
        def: "逻辑：通过数字或物质的堆叠来抵御死亡的虚无感。", 
        core: "应用：理财、黄金、云存储。侧重展现“存量增长”的厚重感。",
        defEn: "Logic: Stacking digital or material assets to ward off the void of death.",
        coreEn: "Applications: Wealth management, gold, cloud storage. Focus: The weight of 'accumulated growth'."
      },
      { 
        id: "c0_a4", 
        name: "精密齿轮 (Precision)", 
        group: "B. 留存回路", 
        def: "逻辑：追求万物皆可量化，对错误的零容忍。", 
        core: "应用：硬核腕表、专业工具、高性能芯片。侧重“对微小参数的绝对掌控”。",
        defEn: "Logic: Pursuit of quantifiable everything, zero tolerance for error.",
        coreEn: "Applications: Hardcore watches, pro tools, high-performance chips. Focus: 'Absolute control over micro-parameters'."
      },
      { 
        id: "c0_a5", 
        name: "防御堡垒 (Fortress)", 
        group: "B. 留存回路", 
        def: "逻辑：建立不可逾越的边界，保护核心利益不被触碰。", 
        core: "应用：保险、智能门锁、法律服务。侧重“排他性的安全感”。",
        defEn: "Logic: Establishing insurmountable boundaries, protecting core interests from being touched.",
        coreEn: "Applications: Insurance, smart locks, legal services. Focus: 'Exclusive security'."
      },
      { 
        id: "c0_a6", 
        name: "排泄释放 (Excretion)", 
        group: "B. 留存回路", 
        def: "逻辑：释放长期压抑的废物或压力，追求瞬间的轻盈感。", 
        core: "应用：减压玩具、轻食瘦身。侧重“卸掉负担后的快感”。",
        defEn: "Logic: Releasing long-suppressed waste or stress, seeking instant lightness.",
        coreEn: "Applications: Fidget toys, detox/diet. Focus: 'Pleasure after shedding the burden'."
      },

      // === GROUP C: 观看回路 (Viewing / Scopic) ===
      { 
        id: "c0_s1", 
        name: "秘密窥视 (Voyeurism)", 
        group: "C. 观看回路", 
        def: "逻辑：通过观看他人的隐秘或世界的“后台”获得权力感。", 
        core: "应用：社会观察、纪录片、直播。侧重“揭开幕布”的真相感。",
        defEn: "Logic: Gaining power by watching others' secrets or the world's 'backstage'.",
        coreEn: "Applications: Social observation, documentaries, live streaming. Focus: The truth of 'lifting the curtain'."
      },
      { 
        id: "c0_s2", 
        name: "舞台暴露 (Exhibitionism)", 
        group: "C. 观看回路", 
        def: "逻辑：渴望被聚光灯照射，通过他者的凝视确认存在。", 
        core: "应用：社交平台、时装、美妆。侧重“成为全场焦点”的眩晕感。",
        defEn: "Logic: Craving the spotlight, confirming existence through the gaze of others.",
        coreEn: "Applications: Social platforms, fashion, beauty. Focus: The dizziness of 'being the center'."
      },
      { 
        id: "c0_s3", 
        name: "巨物崇拜 (Spectacle)", 
        group: "C. 观看回路", 
        def: "逻辑：追求宏大、震撼的视觉奇观，消融自我在崇高中。", 
        core: "应用：电影、豪车、大屏设备。侧重展现“远超尺度的压迫感”。",
        defEn: "Logic: Pursuing grand, shocking visual spectacles, dissolving self in the sublime.",
        coreEn: "Applications: Cinema, luxury cars, large screens. Focus: 'Oppression from scale beyond human'."
      },
      { 
        id: "c0_s4", 
        name: "滤镜修正 (Screen)", 
        group: "C. 观看回路", 
        def: "逻辑：拒绝原始真实，必须通过一层修饰过的屏幕看世界。", 
        core: "应用：修图软件、装饰装潢。侧重“修饰过的真实”带来的安宁。",
        defEn: "Logic: Rejecting raw reality, must view the world through a beautified screen.",
        coreEn: "Applications: Photo editing apps, decor. Focus: Peace from 'modified reality'."
      },
      { 
        id: "c0_s5", 
        name: "热力洞穿 (Insight)", 
        group: "C. 观看回路", 
        def: "逻辑：追求穿透表象的能力，看清结构与本质。", 
        core: "应用：咨询服务、显微镜、精密侦测。侧重“一切尽收眼底”的智力快感。",
        defEn: "Logic: Pursuing the ability to pierce through appearances, seeing structure and essence.",
        coreEn: "Applications: Consulting, microscopes, precision detection. Focus: Intellectual joy of 'seeing it all'."
      },
      { 
        id: "c0_s6", 
        name: "碎片拼贴 (Mosaic)", 
        group: "C. 观看回路", 
        def: "逻辑：通过海量信息的拼凑来构建宏大真相。", 
        core: "应用：数据可视化、综合体电商。侧重展现“宏大而复杂的和谐”。",
        defEn: "Logic: Constructing grand truths by piecing together massive amounts of information.",
        coreEn: "Applications: Data visualization, complex e-commerce. Focus: 'Grand and complex harmony'."
      },

      // === GROUP D: 听觉回路 (Voice / Invocatory) ===
      { 
        id: "c0_i1", 
        name: "亲密低语 (Whisper)", 
        group: "D. 听觉回路", 
        def: "逻辑：追求一对一的私密连接，如同胎儿听到的声音。", 
        core: "应用：ASMR、耳机、私密社群。侧重“温柔的侵入”与“灵魂抚慰”。",
        defEn: "Logic: Seeking private, one-on-one connection, like the sound heard by a fetus.",
        coreEn: "Applications: ASMR, headphones, private communities. Focus: 'Gentle intrusion' and 'soul soothing'."
      },
      { 
        id: "c0_i2", 
        name: "神谕指令 (Oracle)", 
        group: "D. 听觉回路", 
        def: "逻辑：渴望来自高维度的清晰指引，消除选择焦虑。", 
        core: "应用：教育、付费咨询、导航。侧重“权威发声”的定心丸效应。",
        defEn: "Logic: Craving clear guidance from a higher dimension to eliminate choice anxiety.",
        coreEn: "Applications: Education, paid consulting, navigation. Focus: Reassurance of 'authoritative voice'."
      },
      { 
        id: "c0_i3", 
        name: "旷野呐喊 (Shout)", 
        group: "D. 听觉回路", 
        def: "逻辑：释放被压抑的真实声音，确认主体的反抗性。", 
        core: "应用：户外、摇滚、运动装备。侧重“发声即存在”的力量感。",
        defEn: "Logic: Releasing suppressed real voice, confirming the subject's resistance.",
        coreEn: "Applications: Outdoor, rock music, sports gear. Focus: Power of 'I speak therefore I am'."
      },
      { 
        id: "c0_i4", 
        name: "绝对静默 (Silence)", 
        group: "D. 听觉回路", 
        def: "逻辑：屏蔽一切大他者的噪音，寻找存在的零度。", 
        core: "应用：降噪产品、冥想、避世空间. 侧重“感官剥夺”后的自我重组。",
        defEn: "Logic: Blocking all noise from the Big Other, seeking the zero degree of existence.",
        coreEn: "Applications: Noise-canceling, meditation, retreats. Focus: Self-reorganization after 'sensory deprivation'."
      },
      { 
        id: "c0_i5", 
        name: "原始律动 (Primitive)", 
        group: "D. 听觉回路", 
        def: "逻辑：跟随集体的节奏，通过同步的心跳消灭孤独。", 
        core: "应用：蹦迪、群体运动。侧重展现“去个人化”的狂欢感。",
        defEn: "Logic: Following collective rhythm, eliminating loneliness through synchronized heartbeats.",
        coreEn: "Applications: Clubbing, group sports. Focus: Euphoria of 'depersonalization'."
      },
      { 
        id: "c0_i6", 
        name: "回声定位 (Echo)", 
        group: "D. 听觉回路", 
        def: "逻辑：通过发出声音并听到回馈，测量自己与世界的距离。", 
        core: "应用：互动社区、反馈机制。侧重展现“被回应”的确定感。",
        defEn: "Logic: Measuring distance from the world by making sound and hearing feedback.",
        coreEn: "Applications: Interactive communities, feedback mechanisms. Focus: Certainty of 'being responded to'."
      },

      // === GROUP E: 镜像回路 (Mirror / Narcissism) ===
      { 
        id: "c0_n1", 
        name: "镜像修复 (Repair)", 
        group: "E. 镜像回路", 
        def: "逻辑：通过修正外表缺陷抵御“我会散架”的原始焦虑。", 
        core: "应用：医美、抗衰。侧重展现“裂痕被缝合”后的完美幻觉。",
        defEn: "Logic: Resisting primal anxiety of 'falling apart' by fixing external flaws.",
        coreEn: "Applications: Aesthetic medicine, anti-aging. Focus: Illusion of perfection after 'stitching cracks'."
      },
      { 
        id: "c0_n2", 
        name: "王座傲慢 (Throne)", 
        group: "E. 镜像回路", 
        def: "逻辑：追求唯一的优越感，通过俯视众生确认自我价值。", 
        core: "应用：高定奢侈品、私人定制。侧重展现“生而不同”的排他性。",
        defEn: "Logic: Pursuing unique superiority, confirming self-worth by looking down on the masses.",
        coreEn: "Applications: Haute couture, bespoke. Focus: Exclusivity of 'born different'."
      },
      { 
        id: "c0_n3", 
        name: "暗面共生 (Shadow)", 
        group: "E. 镜像回路", 
        def: "逻辑：拥抱并展示自己的阴暗面作为一种酷的标签。", 
        core: "应用：潮牌、先锋艺术。侧重展现“由于危险而产生的吸引力”。",
        defEn: "Logic: Embracing and displaying one's dark side as a cool label.",
        coreEn: "Applications: Streetwear, avant-garde art. Focus: Attraction generated by 'danger'."
      },
      { 
        id: "c0_n4", 
        name: "血缘永恒 (Legacy)", 
        group: "E. 镜像回路", 
        def: "逻辑：通过作品或传承对抗死亡。自我的无限延伸。", 
        core: "应用：家族办公室、高端腕表。侧重“时间流逝但我不变”的永恒感。",
        defEn: "Logic: Fighting death through works or heritage. Infinite extension of self.",
        coreEn: "Applications: Family office, high-end watches. Focus: 'Time passes but I remain'."
      },
      { 
        id: "c0_n5", 
        name: "分身狂想 (Avatar)", 
        group: "E. 镜像回路", 
        def: "逻辑：在数字世界建立更完美的理想自我，抛弃肉身残缺。", 
        core: "应用：游戏皮肤、元宇宙、美化相机。侧重“重获新生”的自由感。",
        defEn: "Logic: Building a perfect ideal self in the digital world, discarding physical flaws.",
        coreEn: "Applications: Game skins, Metaverse, beauty cams. Focus: Freedom of 'rebirth'."
      },
      { 
        id: "c0_n6", 
        name: "全知掌控 (God Mode)", 
        group: "E. 镜像回路", 
        def: "逻辑：像上帝一样操控环境、定义规则。极致的控制自恋。", 
        core: "应用：智控系统、沙盒游戏。侧重展现“指尖即指令”的上帝视角。",
        defEn: "Logic: Manipulating environments and defining rules like a god. Ultimate control narcissism.",
        coreEn: "Applications: Smart control systems, sandbox games. Focus: God's view where 'fingertip is command'."
      }
    ]
  },
  {
    id: "comm_c1_lib",
    name: "C1. 缺失主体 (Symptomatic Subjects)",
    desc: "30种当代社会症候：精准锁定每一个痛苦主体的“核心匮乏”",
    items: [
      // ... (Items C1-C7 remain as is unless specifically requested to update them too) ...
      // Keeping existing structure for C1-C7 as they were not explicitly asked to be changed, 
      // but to maintain file integrity I must include them. 
      // Assuming I should output the whole file. 
      // To save token space and because user only asked for C0 specifically, 
      // I will keep C1-C7 as they were in the previous file content provided by user.
      
      { id: "c1_1", name: "系统齿轮 (The Cog)", group: "1. 异化型", def: "逻辑：感到自己是巨大机器中可替代的零件。", core: "侧重：寻求被“当做人”看。应用：高溢价定制化。" },
      { id: "c1_2", name: "数据幽灵 (Data Ghost)", group: "1. 异化型", def: "逻辑：被算法淹没，感到社会性逐渐消失。", core: "侧重：寻求“高亮时刻”。应用：社交媒体。" },
      // ... (Truncated for brevity, effectively the same list as input) ...
      // Actually, standard practice requires full file content. 
      // I will copy the rest of the arrays from the input exactly.
      { id: "c1_3", name: "人形电池 (Battery)", group: "1. 异化型", def: "逻辑：被KPI和房贷抽干，仅剩生物性生存。", core: "侧重：寻求“能量回补”。应用：能量补剂、SPA。" },
      { id: "c1_4", name: "面具社畜 (The Mask)", group: "1. 异化型", def: "逻辑：长期扮演职业角色，丧失情感能力。", core: "侧重：寻求“真我释放”。应用：深夜酒馆、户外。" },
      { id: "c1_5", name: "算法奴隶 (Slave)", group: "1. 异化型", def: "逻辑：被倒计时和配送路线控制的活肉体。", core: "核心缺失：时间主权。侧重：买回时间。应用：效率工具、便利生活。" },
      { id: "c1_6", name: "末日预备役 (Prepper)", group: "2. 焦虑型", def: "逻辑：认为危机随时降临，不囤积就无法入睡。", core: "侧重：寻求“绝对保障”。应用：户外电源、保险。" },
      { id: "c1_7", name: "洁癖病娇 (Purist)", group: "2. 焦虑型", def: "逻辑：视外部世界为充满病原体的粪池。", core: "侧重：寻求“物理边界”。应用：空气净化、消杀。" },
      { id: "c1_8", name: "时间逃兵 (Aging)", group: "2. 焦虑型", def: "逻辑：视衰老为肉体的背叛，疯狂抵抗时间流逝。", core: "侧重：寻求“冻结青春”。应用：医美、抗衰。" },
      { id: "c1_9", name: "错失恐惧者 (FOMO)", group: "2. 焦虑型", def: "逻辑：片刻不敢离线，生怕被时代和圈子抛弃。", core: "侧重：寻求“同步感”。应用：会员社群、首发产品。" },
      { id: "c1_10", name: "冒充者 (Imposter)", group: "2. 焦虑型", def: "逻辑：在成功中感到自卑，恐惧人设随时崩塌。", core: "侧重：寻求“合法性”。应用：教育培训、名牌背书。" },
      { id: "c1_11", name: "潜伏期偶像 (Wannabe)", group: "3. 匮乏型", def: "逻辑：极度渴望成名，活在他人点赞的幻觉中。", core: "侧重：曝光与赞美。应用：网红经济。" },
      { id: "c1_12", name: "情感乞丐 (Lover)", group: "3. 匮乏型", def: "逻辑：在关系中完全丧失主体性，渴望被吞噬。", core: "侧重：完美的融合。应用：浪漫仪式、礼品。" },
      { id: "c1_13", name: "狂热信徒 (Fanatic)", group: "3. 匮乏型", def: "逻辑：自我空洞，必须寄生在某个宏大叙事中。", core: "侧重：共振感。应用：偶像周边、IP衍生。" },
      { id: "c1_14", name: "阶级攀爬者 (Climber)", group: "3. 匮乏型", def: "逻辑：拼命寻找进入上层社会的“黄金门票”。", core: "侧重：阶级通行。应用：高端奢侈品、豪车。" },
      { id: "c1_15", name: "空心名媛 (Void Luxe)", group: "3. 匮乏型", def: "逻辑：拥有一切物质但感到精神极端荒芜。", core: "侧重：精神奢侈。应用：艺术收藏、心理咨询。" },
      { id: "c1_16", name: "景观囚徒 (Spectator)", group: "4. 虚无型", def: "逻辑：生活平庸，完全代入他人的奇观故事而活。", core: "侧重：代入感爆发。应用：影视、沉浸式剧场。" },
      { id: "c1_17", name: "职场行尸 (Zombie)", group: "4. 虚无型", def: "逻辑：没有欲望，机械执行，灵魂已死。", core: "侧重：感官唤醒。应用：浓缩咖啡、极限运动。" },
      { id: "c1_18", name: "旧时遗民 (Relic)", group: "4. 虚无型", def: "逻辑：无法适应新技术，被时代列车抛弃。", core: "侧重：怀旧慰藉。应用：黑胶唱片、老牌国货。" },
      { id: "c1_19", name: "数字游民 (Nomad)", group: "4. 虚无型", def: "逻辑：拒绝稳定根基，在不断移动中逃避责任。", core: "核心缺失：联结感。侧重：随时连接。应用：移动办公设备、户外装备。" },
      { id: "c1_20", name: "迷途羔羊 (The Lost)", group: "4. 虚无型", def: "逻辑：因为传统权威崩塌而失去人生方向的人。", core: "侧重：重建秩序。应用：导师课程、自助书籍。" },
      { id: "c1_21", name: "多巴胺瘾君子 (Junkie)", group: "5. 沉沦型", def: "逻辑：成瘾性人格，不断提高刺激阈值以逃避痛苦。", core: "侧重：高能冲击。应用：游戏、游戏化APP。" },
      { id: "c1_22", name: "规则破坏者 (Hacker)", group: "5. 沉沦型", def: "逻辑：以寻找漏洞、破坏、入侵为最高乐事。", core: "侧重：自由越界。应用：黑科技、极客产品。" },
      { id: "c1_23", name: "高级窥探者 (Voyeur)", group: "5. 沉沦型", def: "逻辑：通过掌控他人隐私和数据获得全能感。", core: "侧重：上帝视角。应用：监控、情报产品。" },
      { id: "c1_24", name: "恋物收藏家 (Fetishist)", group: "5. 沉沦型", def: "逻辑：爱物胜过爱人，通过收集特定符号逃避阉割。", core: "侧重：绝对占有。应用：潮玩、盲盒。" },
      { id: "c1_25", name: "混乱代理人 (Agent of Chaos)", group: "5. 沉沦型", def: "逻辑：只想看到世界燃烧，以此确认自己的破坏力。", core: "侧重：彻底释放。应用：解压馆、射击俱乐部。" },
      { id: "c1_26", name: "生物黑客 (Bio-Hacker)", group: "6. 复合型", def: "逻辑：试图修改自身代码，追求超人类的完美。", core: "侧重：超越凡人。应用：可穿戴设备、基因产品。" },
      { id: "c1_27", name: "符号老饕 (Symbolic)", group: "6. 复合型", def: "逻辑：只消费“昂贵的含义”，而非“实用的物质”。", core: "侧重：符号隔离。应用：奢侈品牌故事。" },
      { id: "c1_28", name: "都市隐士 (Urban Hermit)", group: "6. 复合型", def: "逻辑：在大城市切断所有社交，在孤独中寻找神性。", core: "侧重：静止空间。应用：智能降噪耳机、独处馆。" },
      { id: "c1_29", name: "末世先知 (Prophet)", group: "6. 复合型", def: "逻辑：掌握了某种不被相信的真相，在清醒中痛苦。", core: "侧重：同频共鸣。应用：小众垂直社区、深度媒体。" },
      { id: "c1_30", name: "债务主体 (Debtor)", group: "6. 复合型", def: "逻辑：透支未来换取当下的享乐，深陷债务循环。", core: "侧重：即刻满足。应用：分期支付、超前消费品牌。" }
    ]
  },
  {
    id: "comm_c2_lib",
    name: "C2. 痛点场景 (The Real Intrusion)",
    desc: "30种实在界裂痕：日常生活幻象突然破裂的视觉化瞬间",
    items: [
      { id: "c2_1", name: "镜中惊变 (Mirror Shock)", group: "A. 肉身叛变", def: "逻辑：早晨照镜子，发现第一根深纹或无法遮盖的眼袋。", core: "痛点：肉体衰朽的不可逆性。应用：抗衰、补剂。" },
      { id: "c2_2", name: "体味羞辱 (Smell Recall)", group: "A. 肉身叛变", def: "在密闭电梯或会议室，突然意识到自己散发异味。", core: "痛点：文明外壳下的动物性。应用：香氛、洗护。" },
      { id: "c2_3", name: "功能的失灵 (The Fail)", group: "A. 肉身叛变", def: "关键时刻身体无法听从大脑指挥（如疲惫/ED）。", core: "痛点：工具主体的崩塌。应用：能量饮品、保健品。" },
      { id: "c2_4", name: "牙齿的松动 (Tooth Horror)", group: "A. 肉身叛变", def: "咬开硬物发现牙齿出血或晃动。感到解体恐惧。", core: "痛点：结构崩塌的早期预兆。应用：牙科、高级个护。" },
      { id: "c2_5", name: "凌晨3点的虚无 (3 AM Void)", group: "A. 肉身叛变", def: "所有声音消失，只有心跳巨大的失眠时刻。", core: "痛点：对存在的无法关机。应用：助眠、冥想。" },
      { id: "c2_6", name: "笨拙的跌落 (The Fall)", group: "A. 肉身叛变", def: "众目睽睽下失去平衡跌倒，理想自我瞬间粉碎。", core: "痛点：运动系统的断裂。应用：高级运动装备。" },
      { id: "c2_7", name: "社交空白 (The Void)", group: "B. 凝视羞辱", def: "说完话后，全场陷入了长达5秒的死寂。", core: "痛点：被他者放逐。应用：沟通、知识付费。" },
      { id: "c2_8", name: "撞破的秘密 (Caught)", group: "B. 凝视羞辱", def: "最隐秘的行为时，突然对上一双冷漠的眼睛。", core: "痛点：隐私幻象的破灭。应用：网络安全、隐私产品。" },
      { id: "c2_9", name: "错误的着装 (Mismatch)", group: "B. 凝视羞辱", def: "全场黑西装，只有你穿了便服闯入，被排斥感。", core: "痛点：符号身份的错位。应用：奢侈礼服、定制顾问。" },
      { id: "c2_10", name: "伴侣的嫌恶 (Cold Gaze)", group: "B. 凝视羞辱", def: "最亲密时刻看到对方眼中转瞬即逝的失望。", core: "痛点：欲望之爱的虚假。应用：两性、医美、情感。" },
      { id: "c2_11", name: "公开的处刑 (Public Shame)", group: "B. 凝视羞辱", def: "PPT投影出了你极力掩盖的私人搜索历史。", core: "痛点：面具的粉碎。应用：隐私手机、数据清理。" },
      { id: "c2_12", name: "透明人的时刻 (Invisible)", group: "B. 凝视羞辱", def: "群里发了重要消息，但所有人都在聊别的。", core: "痛点：存在感的消亡。应用：社交特权、流量助推。" },
      { id: "c2_13", name: "电量归零 (Dead Battery)", group: "C. 系统断裂", def: "荒郊野外或紧急时刻，手机屏幕变黑的瞬间。", core: "核心缺失：生存的数字基础断裂。应用：移动电源、通讯。" },
      { id: "c2_14", name: "支付被拒 (Denied)", group: "C. 系统断裂", def: "收银台前，所有卡片显示余额不足，后方排队在窃窃微语。", core: "实在界：社会契约的失效。应用：理财、借贷。" },
      { id: "c2_15", name: "文档的崩溃 (The Crash)", group: "C. 系统断裂", def: "通宵的方案在点击保存前遭遇蓝屏重启。", core: "实在界：劳动的无意义蒸发。应用：高效硬件、云备份。" },
      { id: "c2_16", name: "算法的嘲弄 (Glitch)", group: "C. 系统断裂", def: "APP精准向你推送了你最恐惧的疾病广告。", core: "实在界：被彻底看穿的隐私丧失。应用：隐私加密。" },
      { id: "c2_17", name: "过时的尴尬 (Out of Sync)", group: "C. 系统断裂", def: "你还在用旧梗，而年轻人用看古董的眼神看你。", core: "实在界：时间流的抛弃。应用：电子产品、潮流前哨。" },
      { id: "c2_18", name: "无信号荒原 (No Signal)", group: "C. 系统断裂", def: "满格信号却刷不出内容。被数字世界放逐的恐慌。", core: "实在界：虚无的物理化。应用：网络加速、卫星通信。" },
      { id: "c2_19", name: "登顶后的恶心 (Peak Nausea)", group: "D. 虚无入侵", def: "终于升职或得到梦寐以求之物，却内心毫无波澜。", core: "实在界：欲望对象的空洞真相。应用：生活方式升级、慈善。" },
      { id: "c2_20", name: "既视感的恐惧 (Deja Vu)", group: "D. 虚无入侵", def: "强烈意识到生活只是一次次平庸的死循环。", core: "实在界：宿命的闭环。应用：冒险旅游、极致游戏。" },
      { id: "c2_21", name: "陌生的家 (Uncanny Home)", group: "D. 虚无入侵", def: "半夜醒来，突然觉得眼前的家和亲人像廉价道具。", core: "实在界：熟悉感的解体。应用：软装升级、情感修复。" },
      { id: "c2_22", name: "天花板的漏水 (Material Leak)", group: "D. 虚无入侵", def: "顶级豪宅开始滴下恶心的污水，完美的装修在霉烂。", core: "实在界：熵增的不可逆。应用：维护、极致家政。" },
      { id: "c2_23", name: "洁白上的虫子 (The Insect)", group: "D. 虚无入侵", def: "在昂贵的菜肴或洁白的床单发现一只蟑螂。", core: "实在界：野蛮自然对文明的嘲弄。应用：供应链极致管控。" },
      { id: "c2_24", name: "无法逃避的噪音 (Noise)", group: "D. 虚无入侵", def: "隔壁邻居无休止的争吵声刺破了你的私密静默。", core: "实在界：他人即地狱的物理化。应用：隔音建材、降噪。" },
      { id: "c2_25", name: "职场的冷宫 (Exclusion)", group: "E. 阉割威胁", def: "发现所有同事都进入了没有你的小群组。", core: "痛点：归属感的丧失。应用：职场竞争力培训。" },
      { id: "c2_26", name: "礼物被退回 (Rejection)", group: "E. 阉割威胁", def: "精心准备的讨好被对方冷漠地拒绝并退还。", core: "实在界：作为对象a的失败。应用：高溢价奢侈品、情感课程。" },
      { id: "c2_27", name: "过期的入场券 (Expired)", group: "E. 阉割威胁", def: "排队到你时，窗口挂上了“售罄”或“禁止入内”。", core: "痛点：进入大他者的失败。应用：会员优先权。" },
      { id: "c2_28", name: "账户的冻结 (Frozen)", group: "E. 阉割威胁", def: "所有卡片被冻结，在这个数字社会寸步难行。", core: "生存权限的剥夺。应用：多中心资产配置。" },
      { id: "c2_29", name: "被遗忘的生日 (Forgotten)", group: "E. 阉割威胁", def: "期待了一整天，发现没人记得你的生日。", core: "实在界：独特性神话的破灭。应用：自恋补偿消费。" },
      { id: "c2_30", name: "学历的废纸化 (Obsolete)", group: "E. 阉割威胁", def: "引以为傲的技能在AI面前瞬间失去价值。", core: "痛点：能力的阉割。应用：AI工具升级。" }
    ]
  },
  {
    id: "comm_c3_lib",
    name: "C3. 产品图腾 (The Product Totems)",
    desc: "30种欲望对象：商品作为缝合伤口的神圣符号",
    items: [
      { id: "c3_1", name: "黄金药水 (Elixir)", group: "1. 治愈/能量", def: "流动的生命力，抹平皱纹，倒流时间。", core: "逻辑：母乳的完美替代。应用：顶级护肤、能量补剂。" },
      { id: "c3_2", name: "防腐剂舱 (Capsule)", group: "1. 治愈/能量", def: "让主体进入假死或冻龄状态的睡眠系统。", core: "逻辑：永恒的胚胎. 应用：智能床垫、高奢保健。" },
      { id: "c3_3", name: "神之蜜露 (Nectar)", group: "1. 治愈/能量", def: "极致的味觉享乐，提供瞬间的、完全的融合感。", core: "逻辑：伊甸园的果实。应用：名酒、高端甜品。" },
      { id: "c3_4", name: "纯净氧气盾 (Oxygen Shield)", group: "1. 治愈/能量", def: "针对城市喧嚣与污染的最后一道物理屏障。", core: "逻辑：第一次呼吸。应用：空净、新风、香氛。" },
      { id: "c3_5", name: "便携太阳 (Energy Core)", group: "1. 治愈/能量", def: "永不枯竭的能量块，让衰弱的主体瞬间充血。", core: "逻辑：原始火种。应用：数码快充、新能源。" },
      { id: "c3_6", name: "泰坦义肢 (Prosthetics)", group: "2. 武器/权能", def: "赋予凡人神力的延伸器官（速度、力量）。", core: "逻辑：菲勒斯的补丁。应用：运动装备、旗舰手机。" },
      { id: "c3_7", name: "逻辑之刃 (Logic Blade)", group: "2. 武器/权能", def: "切割混乱、输出真理的处理芯片或电脑。", core: "逻辑：大他者的裁决权。应用：AI服务、顶级工作站。" },
      { id: "c3_8", name: "银翼战车 (Chariot)", group: "2. 武器/权能", def: "超越空间的载具，速度即自由。", core: "逻辑：胜利的巡游。应用：豪车、私人飞机、摩托。" },
      { id: "c3_9", name: "控制手杖 (The Scepter)", group: "2. 武器/权能", def: "一键操控全屋或全系统的中心化设备。", core: "逻辑：造物主的指尖。应用：智能家居控制。" },
      { id: "c3_10", name: "全真之眼 (True Eye)", group: "2. 武器/权能", def: "穿透迷雾的拍摄设备，掌握视觉主权。", core: "逻辑：全景凝视。应用：摄影器材、顶级相机。" },
      { id: "c3_11", name: "静默气泡 (Silent Bubble)", group: "3. 避难所/外壳", def: "隔绝噪音和目光的私人力场（如耳机/商务舱）。", core: "逻辑：自闭的壳。应用：降噪耳机、隔音建材。" },
      { id: "c3_12", name: "隐形盔甲 (Invisible Armor)", group: "3. 避难所/外壳", def: "刀枪不入、纤尘不染的极致护具（高级服饰）。", core: "逻辑：二次皮肤。应用：高端西装、功能外套。" },
      { id: "c3_13", name: "记忆保险柜 (The Vault)", group: "3. 避难所/外壳", def: "永久保存珍贵数据的系统，对抗时间的熵增。", core: "逻辑：永恒的石碑。应用：云存储、奢侈品柜。" },
      { id: "c3_14", name: "净化之光 (Purifier)", group: "3. 避难所/外壳", def: "针对病毒和异物的物理屏障。维持内部纯粹。", core: "逻辑：维持秩序。应用：空气净化、净水设备。" },
      { id: "c3_15", name: "数字堡垒 (Cyber Fort)", group: "3. 避难所/外壳", def: "绝对隐私的加密系统，在大数据时代隐身。", core: "逻辑：消失的权利。应用：网络安全、隐私手机。" },
      { id: "c3_16", name: "黄金入场券 (Golden Ticket)", group: "4. 门票/地位", def: "进入高阶社会的会员卡、特殊身份证明。", core: "逻辑：大他者的邀请函。应用：私人银行、高端会所。" },
      { id: "c3_17", name: "人设光环 (The Halo)", group: "4. 门票/地位", def: "让主角瞬间散发出吸引力和尊贵感的工具。", core: "逻辑：理想我面具. 应用：香水、高级配饰。" },
      { id: "c3_18", name: "命运罗盘 (The Compass)", group: "4. 门票/地位", def: "理财规划、教育培训，指明阶级上升道路。", core: "逻辑：父名的指引。应用：高端商学院、咨询业务。" },
      { id: "c3_19", name: "数字遗物 (Digital Relic)", group: "4. 门票/地位", def: "不可替代的NFT或限量实物，唯一的符号。", core: "逻辑：唯一的墓碑. 应用：艺术品、数字资产。" },
      { id: "c3_20", name: "聚光灯卡 (Stage Pass)", group: "4. 门票/地位", def: "获得社交媒体流量或被世界看见的权重权限。", core: "逻辑：暴露的特权. 应用：推广服务、流量礼包。" },
      { id: "c3_21", name: "织梦机 (Dream Weaver)", group: "5. 复合/变态", def: "创造沉浸式虚拟体验，假的比真的更诱人。", core: "逻辑：欲望肉体化。应用：VR、顶级影视设备。" },
      { id: "c3_22", name: "时间小偷 (Time Thief)", group: "5. 复合/变态", def: "缩短无聊过程的效率工具。买回生命时间。", core: "逻辑：对抗必然性。应用：扫地机、洗碗机。" },
      { id: "c3_23", name: "真理胶囊 (Truth Pill)", group: "5. 复合/变态", def: "让人瞬间洞察本质的知识产品。觉醒的捷径。", core: "逻辑：穿越幻象。应用：深度读书会、专业课。" },
      { id: "c3_24", name: "重启按钮 (The Reset)", group: "5. 复合/变态", def: "抹掉过去从头再来的极端服务（如法律/保险）。", core: "逻辑：拒绝历史。应用：法律援助、全额保险。" },
      { id: "c3_25", name: "羁绊之环 (Solidarity Ring)", group: "5. 复合/变态", def: "连接相同创伤者的社群通讯器，不再孤单。", core: "逻辑：缺失的共享。应用：垂类社交、社群。" },
      { id: "c3_26", name: "灵魂之镜 (Soul Mirror)", group: "6. 救赎/虚无", def: "反馈内心状态并自动调整环境的AI系统。", core: "逻辑：完美的他者. 应用：个性化AI、智能助手。" },
      { id: "c3_27", name: "重力锚点 (The Anchor)", group: "6. 救赎/虚无", def: "让漂泊灵魂落地的根基资产（不动产）。", core: "逻辑：根基重建. 应用：高端房产、收藏品。" },
      { id: "c3_28", name: "神圣大笑 (The Laughter)", group: "6. 救赎/虚无", def: "解构焦虑、带来豁然开朗体验的脱口秀/内容。", core: "逻辑：解构压力. 应用：娱乐内容、沉浸演出。" },
      { id: "c3_29", name: "终极答案 (The Answer)", group: "6. 救赎/虚无", def: "承诺解决一切困惑的哲学指导或神秘产品。", core: "逻辑：填满空无. 应用：哲学丛书、宗教衍生品。" },
      { id: "c3_30", name: "随身禅房 (Zen Garden)", group: "6. 救赎/虚无", def: "在喧嚣中瞬间进入冥想平衡的装置。", core: "逻辑：欲望平息. 应用：茶器、智能减压舱。" }
    ]
  },
  {
    id: "comm_c4_lib",
    name: "C4. 信任背书 (The Endorsement)",
    desc: "大他者授权：30种赋予商品合法性与神圣性的力量来源",
    items: [
      { id: "c4_lab", name: "白大褂实验室 (Lab Report)", group: "1. 科学/真理", def: "逻辑：冷酷的实证数据，显微镜下的不可辩驳性。", core: "应用：硬核护肤、高科技。侧重：理性的终极说服。" },
      { id: "c4_patent", name: "专利壁垒 (The Patent)", group: "1. 科学/真理", def: "逻辑：受法律保护的独家知识。你是唯一拥有真理的人。", core: "应用：电子产品、芯片。侧重：符号的排他性。" },
      { id: "c4_blind", name: "双盲测试 (Blind Test)", group: "1. 科学/真理", def: "逻辑：排除主观偏差，直达物理层面的真实。", core: "应用：补剂、快消品。侧重：结果的不可撼动。" },
      { id: "c4_archive", name: "数据深渊 (Big Data)", group: "1. 科学/真理", def: "逻辑：由亿万次运算得出的最优解。算法不会错。", core: "应用：AI服务、金融。侧重：数学化的命运保障。" },
      { id: "c4_scars", name: "幸存者的伤疤 (Proven Scars)", group: "1. 科学/真理", def: "逻辑：通过极端环境实测。在毁灭面前存活的证据。", core: "应用：户外装备、坚固手机。侧重：实在界的洗礼。" },
      { id: "c4_century", name: "百年孤寂 (Centennial)", group: "2. 历史/血统", def: "逻辑：时间无法冲刷的质量。祖先的意志在流淌。", core: "应用：名酒、老牌奢侈品。侧重：跨越生死的稳定性。" },
      { id: "c4_royal", name: "皇室玺印 (Royal Seal)", group: "2. 历史/血统", def: "逻辑：最高权力的加冕。大他者（君主）的亲自担保。", core: "应用：高端礼品、定制。侧重：阶级身份的向下兼容。" },
      { id: "c4_origin", name: "原产地神话 (Terroir)", group: "2. 历史/血统", def: "逻辑：特定的土地孕育特定的灵魂。无法复制的基因。", core: "应用：农产品、矿泉水。侧重：地理决定论的神性。" },
      { id: "c4_blood", name: "工匠血统 (Artisan Blood)", group: "2. 历史/血统", def: "逻辑：手艺在家族内的代际传递。肉身记忆的不可磨灭。", core: "应用：钟表、手工皮具。侧重：人的精神对抗机器异化。" },
      { id: "c4_museum", name: "馆藏级孤品 (Archive Piece)", group: "2. 历史/血统", def: "逻辑：被列入历史档案。它不再是商品，而是文物。", core: "应用：高端时尚、艺术品。侧重：超越日常的永恒感。" },
      { id: "c4_billion", name: "亿万次选择 (Billion Choice)", group: "3. 大众/共识", def: "逻辑：真理在大众手中。如果你是错的，为什么大家都买？", core: "应用：爆款、国民级应用。侧重：模仿驱力的群体快感。" },
      { id: "c4_queue", name: "长队的沉默 (The Queue)", group: "3. 大众/共识", def: "逻辑：排队意味着牺牲时间。时间的投入证明了欲望的价值。", core: "应用：网红餐厅、首发机型。侧重：被众人渴求的幻象。" },
      { id: "c4_confess", name: "受众的证词 (Testimony)", group: "3. 大众/共识", def: "逻辑：和你一样的缺失主体，如何在消费后获得了缝合。", core: "应用：教育、健身。侧重：镜像的同频共鸣。" },
      { id: "c4_map", name: "热力覆盖 (Global Coverage)", group: "3. 大众/共识", def: "逻辑：地球上每一个亮点都是一个信任节点。无处不在的合法性。", core: "应用：物流、云服务。侧重：系统的全能感。" },
      { id: "c4_award", name: "奖座金光 (Award Gold)", group: "3. 大众/共识", def: "逻辑：评委团（代理大他者）的裁决。在仪式中被确认为优胜。", core: "应用：设计、影视、汽车。侧重：官方化的成功定型。" },
      { id: "c4_nature", name: "大地的恩赐 (Natural Gift)", group: "4. 自然/神圣", def: "逻辑：无人工干预。自然法则亲自为你生产了救赎。", core: "应用：有机食品、天然成分。侧重：回归伊甸园的纯真。" },
      { id: "c4_miracle", name: "偶发的奇迹 (Miracle)", group: "4. 自然/神圣", def: "逻辑：无法解释的现象。仅仅是因为你使用了它，好运便降临。", core: "应用：开运物、玄学产品。侧重：穿越符号秩序的运气。" },
      { id: "c4_sacred", name: "圣地朝圣 (Pilgrimage)", group: "4. 自然/神圣", def: "逻辑：在神圣的空间（如巴黎/硅谷）被洗礼。带回来的灵气。", core: "应用：旅游、进修课程。侧重：空间的能量迁移。" },
      { id: "c4_karma", name: "善因的循环 (Karma)", group: "4. 自然/神圣", def: "逻辑：每一分消费都流向了环保或弱势群体。消费即赎罪。", core: "应用：ESG、慈善品牌。侧重：道德上的自我缝合。" },
      { id: "c4_silence_end", name: "静默的绝对 (Silence)", group: "4. 自然/神圣", def: "逻辑：不屑于解释。极致的包装和昂贵，本身就是一种傲慢的背书。", core: "应用：顶奢。侧重：神圣不可侵犯的沉默。" },
      { id: "c4_algorithm", name: "算法推荐 (AI Oracle)", group: "5. 现代/算法", def: "逻辑：比你自己更懂你的那个东西。它说你需要，你就需要。", core: "应用：个性化电商、精准医疗。侧重：作为完美大他者的AI。" },
      { id: "c4_code", name: "底层代码 (Open Source)", group: "5. 现代/算法", def: "逻辑：逻辑完全透明。因为没有秘密，所以无法欺骗。", core: "应用：去中心化金融、硬核软件。侧重：理性的透明性恐惧。" },
      { id: "c4_cloud", name: "云端见证 (Cloud Witness)", group: "5. 现代/算法", def: "逻辑：所有的交互都被永久记录在不可篡改的云端。", core: "应用：法律服务、安全系统。侧重：永恒的档案化。" },
      { id: "c4_fast", name: "速度的真理 (Velocity)", group: "5. 现代/算法", def: "逻辑：瞬间即达。效率是唯一的真理。延迟就是欺骗。", core: "应用：物流、即时通讯。侧重：即刻满足的爽感。" },
      { id: "c4_future_e", name: "未来主义 (Future-Proof)", group: "5. 现代/算法", def: "逻辑：领先于时代。它是未来的碎片，提前降临在当下。", core: "应用：创新科技、电动车。侧重：时间差带来的优越感。" },
      { id: "c4_hero", name: "英雄的选择 (The Hero)", group: "6. 个体/见证", def: "逻辑：如果是那个极具魅力的领袖在用，我也要用。认同理想我。", core: "应用：代言人、意见领袖。侧重：镜像认同的爆发。" },
      { id: "c4_traitor_v", name: "叛逃者的反向证词 (Defector)", group: "6. 个体/见证", def: "逻辑：连对手都在偷偷使用。这是最致命的背书。", core: "应用：B端竞争、黑科技。侧重：实力的强制屈服。" },
      { id: "c4_secret_v", name: "内部人士的耳语 (Insider)", group: "6. 个体/见证", def: "逻辑：只有圈内人知道的秘密。剥离大众幻象，直达真相。", core: "应用：私行、小众沙龙。侧重：特权的秘密共享。" },
      { id: "c4_death_bed", name: "临终的真言 (Truth)", group: "6. 个体/见证", def: "逻辑：人在面对终极时刻时不会撒谎。生命尽头的推荐。", core: "应用：医疗、保险。侧重：实在界边缘的真理。" },
      { id: "c4_guarantee", name: "血契承诺 (The Pact)", group: "6. 个体/见证", def: "逻辑：无效退款。用自己的信誉甚至肉身做赌注。不成功便成仁。", core: "应用：服务业、培训。侧重：孤注一掷的决心。" }
    ]
  },
  {
    id: "comm_c5_lib",
    name: "C5. 转化仪式 (The Ritual)",
    desc: "按下救赎开关：30种特定的消费动作，让主体完成身份的跨越",
    items: [
      { id: "c5_swallow", name: "神圣吞咽 (The Swallow)", group: "1. 摄入/净化", def: "仪式：闭眼、喉结移动。将救赎直接吸收到血液中。", core: "应用：补剂、高端饮品。侧重：由内而外的重组。场景：特写喉部动作，配合深呼吸。" },
      { id: "c5_spray", name: "气雾洗礼 (The Spray)", group: "1. 摄入/净化", def: "仪式：在雾气中穿过。建立一层无形的芬芳力场。", core: "应用：香水、喷雾。侧重：空间的瞬间净化。场景：慢动作的水雾扩散。" },
      { id: "c5_wash", name: "污垢剥离 (The Rinse)", group: "1. 摄入/净化", def: "仪式：水流冲走黑色物质。象征着罪孽或疲惫的清洗。", core: "应用：洁面、沐浴、消杀。侧重：肉体的重获新生。场景：特写黑白对比。" },
      { id: "c5_break", name: "撕开封条 (The Unseal)", group: "1. 摄入/净化", def: "仪式：撕开真空包装的清脆声。你是第一个触碰真实的人。", core: "应用：精密电子、新鲜食品。侧重：处子般的占有感。场景：极致的声音ASMR。" },
      { id: "c5_wipe", name: "一抹即净 (The Swipe)", group: "1. 摄入/净化", def: "仪式：抹布或卸妆棉划过，留下无瑕的路径。", core: "应用：清洁工具、卸妆。侧重：混乱瞬间归于秩序。场景：分割画面展示效果。" },
      { id: "c5_click", name: "关键点击 (The Click)", group: "2. 连接/操控", def: "仪式：手指按下，屏幕亮起。整个系统在等待你的指令。", core: "应用：数码产品、APP软件。侧重：掌控全局的权力感。场景：指尖触碰的微光效果。" },
      { id: "c5_sync", name: "意识联网 (The Sync)", group: "2. 连接/操控", def: "仪式：戴上耳机或接入设备，噪音瞬间消失，世界在脑中同步。", core: "应用：耳机、可穿戴设备。侧重：主体边界的扩张。场景：瞳孔放大，波纹扩散。" },
      { id: "c5_scan", name: "光路扫描 (The Scan)", group: "2. 连接/操控", def: "仪式：激光扫过视网膜或面孔。确认身份，授权进入。", core: "应用：智能锁、支付、安全软件。侧重：被系统承认的荣耀。场景：绿色的扫描线移动。" },
      { id: "c5_plug", name: "能量注入 (The Plug)", group: "2. 连接/操控", def: "仪式：充电头插入的一声脆响。主体感受到电流的回涌。", core: "应用：新能源车、快充。侧重：生命力的瞬间充血。场景：电火花或进度条跃升。" },
      { id: "c5_rotate", name: "旋钮微调 (The Dial)", group: "2. 连接/操控", def: "仪式：缓慢转动精密的阻尼旋钮。寻找那个完美的平衡点。", core: "应用：音响、专业相机。侧重：极致的匠心与掌控感。场景：特写指尖的颤动。" },
      { id: "c5_mask_on", name: "戴上面具 (Masking)", group: "3. 展示/加冕", def: "仪式：戴上墨镜、涂上口红。那一刻，凡人亚瑟变成了神。", core: "应用：美妆、时尚饰品。侧重：理想我的降临。场景：镜子前的眼神转换。" },
      { id: "c5_unveil", name: "揭幕时刻 (Unveil)", group: "3. 展示/加冕", def: "仪式：缓缓拉开红绸，露出夺目的光芒。奇观的诞生。", core: "应用：新车发布、地产开盘。侧重：受众凝视的集体爆发。场景：聚光灯与阴影的切换。" },
      { id: "c5_signature", name: "签字落笔 (The Signature)", group: "3. 展示/加冕", def: "仪式：钢笔在高级纸张上的摩擦声。一份契约的达成。", core: "应用：保险、理财、豪车购买。侧重：责任的承担与权力的获得。场景：墨水的渗透特写。" },
      { id: "c5_nod", name: "权力的点头 (The Nod)", group: "3. 展示/加冕", def: "仪式：穿着高定西装，在会议桌首位微微点头。众生折服。", core: "应用：商务装、高端金融。侧重：无声的统治力。场景：广角镜头下的众星捧月。" },
      { id: "c5_toast", name: "碰杯共鸣 (The Toast)", group: "3. 展示/加冕", def: "仪式：水晶杯碰撞的清脆回音。身份认同的最终缝合。", core: "应用：酒类、高端会所。侧重：进入大他者的圈层。场景：慢动作的飞溅液体。" },
      { id: "c5_dive", name: "深海沉浸 (The Dive)", group: "4. 精神/逃逸", def: "仪式：戴上呼吸面罩，身体缓缓沉入。切断外界的所有信号。", core: "应用：极限运动、冥想。侧重：主体与实在界的独处。场景：蓝色的幽暗与寂静声效。" },
      { id: "c5_step_in", name: "跨入门槛 (Step In)", group: "4. 精神/逃逸", def: "仪式：跨过一道物理或光影的门。空气的湿度和气味瞬间改变。", core: "应用：高端地产、酒店。侧重：异世界的穿越感。场景：一镜到底的穿行。" },
      { id: "c5_ignition", name: "火星点燃 (Ignition)", group: "4. 精神/逃逸", def: "仪式：按下启动键，引擎发出低吼。这是冒险的开始。", core: "应用：户外装备、汽车。侧重：原始生命力的唤醒。场景：仪表盘的指针跳动。" },
      { id: "c5_close_eyes", name: "冥想闭眼 (Close Eyes)", group: "4. 精神/逃逸", def: "仪式：在喧嚣中闭上眼睛。内心的大厦瞬间拔地而起。", core: "应用：耳机、心理咨询。侧重：寻找内在的稳定核。场景：背景的极速模糊与前景的清晰。" },
      { id: "c5_tearing", name: "撕裂禁忌 (Tearing)", group: "4. 精神/逃逸", def: "仪式：用力撕毁一张照片或一份旧文件。与过去彻底决裂。", core: "应用：保险、离婚法律服务。侧重：创伤的暴力缝合。场景：纸张断裂的慢动作。" },
      { id: "c5_armor", name: "系上纽扣 (Armor Up)", group: "5. 守护/防御", def: "仪式：系上最后一颗纽扣，拉好拉链。你武装好了自己。", core: "应用：正装、功能服。侧重：建立防御的大他者。场景：特写手部的敏捷与精确。" },
      { id: "c5_lock", name: "落锁之音 (The Lock)", group: "5. 守护/防御", def: "仪式：旋转钥匙或手指按住锁孔。外界的恶意被关在门外。", core: "应用：智能锁、保险箱。侧重：自闭空间的绝对安全。场景：厚重金属门的咬合声。" },
      { id: "c5_circle", name: "画地为牢 (The Circle)", group: "5. 守护/防御", def: "仪式：在你周围喷洒、布置、或简单地画出一圈保护线。", core: "应用：驱虫、除菌、杀毒软件。侧重：边界的确立。场景：发光的保护膜视觉化。" },
      { id: "c5_bandage", name: "温柔缠绕 (Bandage)", group: "5. 守护/防御", def: "仪式：织物或乳液轻轻贴合伤口。痛感逐渐消失的触觉过程。", core: "应用：修复性护肤、床品。侧重：母体般的抚慰。场景：柔焦与微距。" },
      { id: "c5_shelter", name: "伞下共度 (The Shelter)", group: "5. 守护/防御", def: "仪式：在大雨或烈日中撑开一把伞。为你爱的人制造空间。", core: "应用：雨具、保险。侧重：责任的具象化仪式。场景：伞内外的剧烈反差。" },
      { id: "c5_shatter", name: "打破旧我 (Shatter)", group: "6. 重塑/涅槃", def: "仪式：砸碎一个旧的东西（如旧手机/旧家具）。破坏是创造的第一步。", core: "应用：置换服务、整容、装修。侧重：暴烈地追求新生。场景：碎片飞溅的慢动作。" },
      { id: "c5_climb_r", name: "登顶俯瞰 (Peak)", group: "6. 重塑/涅槃", def: "仪式：站在最高处，风吹乱头发。低头看那些追不上你的人。", core: "应用：高端腕表、私人定制。侧重：阶级超越的生理爽感。场景：直升机航拍视角。" },
      { id: "c5_code_act", name: "改写代码 (The Code)", group: "6. 重塑/涅槃", def: "仪式：在终端敲下最后一行指令。现实按照你的想法重组。", core: "应用：黑科技、开发者平台。侧重：造物主的全能快感。场景：屏幕光线映在主角瞳孔中。" },
      { id: "c5_silent_wait", name: "永恒等待 (Waiting)", group: "6. 重塑/涅槃", def: "仪式：在极简的房间里静静坐着，等待最后一声钟响。延迟的极致满足。", core: "应用：定制奢侈品、私人银行业务。侧重：时间作为财富。场景：光影在墙上的长时位移。" },
      { id: "c5_merging", name: "完全融合 (Merge)", group: "6. 重塑/涅槃", def: "仪式：两个极端的元素（如火与冰、旧与新）在产品中合一。你见证了统一。", core: "应用：复合工艺产品。侧重：对立统一的哲学美感。场景：微观摄影下的交融。" }
    ]
  },
  {
    id: "comm_c6_lib",
    name: "C6. 潜在威胁 (The Threat)",
    desc: "30种阉割恐惧：如果不采取行动，主体将坠入的必然深渊",
    items: [
      { id: "c6_1", name: "美貌的枯萎 (The Wilt)", group: "1. 镜像崩塌", def: "逻辑：原本引以为傲的资本由于不可抗力（时间/疾病）迅速缩水。", core: "侧重：针对“容貌焦虑”。应用：医美、高端个护。" },
      { id: "c6_2", name: "被嘲笑的平庸 (The Laugh)", group: "1. 镜像崩塌", def: "逻辑：在大众审视下暴露了平庸的本色，理想自我瞬间瓦解。", core: "侧重：针对“社交评价”。应用：教育、奢侈品、社交软件。" },
      { id: "c6_3", name: "身份的除名 (De-listing)", group: "1. 镜像崩塌", def: "逻辑：由于无法支付“入场费”，被原本所属的高端圈层永久放逐。", core: "侧重：针对“阶级滑落焦虑”。应用：金融、豪车、私人俱乐部。" },
      { id: "c6_4", name: "衰老的腐味 (The Rot)", group: "1. 镜像崩塌", def: "逻辑：突然意识到自己已经成了年轻人眼中那种“过时的老人”。", core: "侧重：针对“时间流逝焦虑”。应用：抗衰产品、潮流品牌。" },
      { id: "c6_5", name: "脆弱的谎言 (The Lie)", group: "1. 镜像崩塌", def: "逻辑：长期维持的成功人设面临被一张照片或一个数据拆穿的风险。", core: "侧重：针对“冒充者综合征”。应用：隐私手机、数据清理、法律。" },
      { id: "c6_6", name: "无处可归的流浪 (Exile)", group: "2. 符号的放逐", def: "逻辑：切断了与所有大他者机构的联系，在城市中如同透明人。", core: "侧重：针对“原子化孤独”。应用：房地产、社交平台、移民服务。" },
      { id: "c6_7", name: "算法的黑名单 (Shadowban)", group: "2. 符号的放逐", def: "逻辑：由于触碰了某种不可见的红线，被数字系统彻底封杀、消音。", core: "侧重：针对“生存主权丧立”。应用：网络安全、备份系统。" },
      { id: "c6_8", name: "历史的抹除 (Erasure)", group: "2. 符号的放逐", def: "逻辑：所有的贡献和名字都从档案中被删除，仿佛从未存在过。", core: "侧重：针对“意义丧失”。应用：云存储、传记服务、NFT。" },
      { id: "c6_9", name: "邻里的嫌恶 (Neighbor's Eye)", group: "2. 符号的放逐", def: "逻辑：在熟人社会中名誉扫地，承受无处不在的窃窃私语。", core: "侧重：针对“社会性死亡”。应用：危机公关、搬家服务。" },
      { id: "c6_10", name: "被遗忘的葬礼 (The Forgotten)", group: "2. 符号的放逐", def: "逻辑：想象自己死后无一人哀悼的极致凄凉感。", core: "侧重：针对“生命价值虚无”。应用：保险、慈善、高端葬礼。" },
      { id: "c6_11", name: "被取代的零件 (Replaced)", group: "3. 功能的阉割", def: "逻辑：AI或更年轻的后生能以更低成本完成你的全部工作。", core: "侧重：针对“职业替代焦虑”。应用：AI工具、进阶课程。" },
      { id: "c6_12", name: "过时的工具 (Obsolete)", group: "3. 功能的阉割", def: "逻辑：你的技能或设备无法连接到新一代的接口，沦为废铁。", core: "侧重：针对“技术代差”。应用：硬件升级、专业软件。" },
      { id: "c6_13", name: "失效的大脑 (Brain Fog)", group: "3. 功能的阉割", def: "逻辑：思维变得迟钝，无法理解复杂的逻辑，丧失竞争力。", core: "侧重：针对“智力衰退”。应用：脑科学产品、高效补剂。" },
      { id: "c6_14", name: "行动的瘫痪 (Paralysis)", group: "3. 功能的阉割", def: "逻辑：面对海量选择和风险，丧失了扣动扳机的勇气。", core: "侧重：针对“决策焦虑”。应用：咨询服务、心理辅导。" },
      { id: "c6_15", name: "枯竭的创意 (Dry)", group: "3. 功能的阉割", def: "逻辑：原本引以为傲的灵感源泉彻底干涸，沦为平庸的重复者。", core: "侧重：针对“创造力丧失”。应用：灵感工具、艺术旅修。" },
      { id: "c6_16", name: "电力的死寂 (The Blackout)", group: "4. 系统的离线", def: "逻辑：高度依赖的电子生活由于断电/断网而彻底瘫痪。", core: "侧重：针对“基础设施依赖”。应用：户外电源、应急物资。" },
      { id: "c6_17", name: "账户的冻结 (Frozen Asset)", group: "4. 系统的离线", def: "逻辑：数字资产由于法律或安全原因被锁死，分文不能动。", core: "侧重：针对“资产安全性”。应用：多元理财、离线钱包。" },
      { id: "c6_18", name: "信号的荒原 (No Service)", group: "4. 系统的离线", def: "逻辑：在最需要求助的时刻，屏幕右上角显示无服务。", core: "侧重：针对“孤岛恐惧”。应用：卫星通信、坚固型装备。" },
      { id: "c6_19", name: "隐私的裸奔 (Data Leak)", group: "4. 系统的离线", def: "逻辑：所有的聊天记录、私密照片被打包在暗网公开拍卖。", core: "侧重：针对“隐私丧失”。应用：加密软件、硬件锁。" },
      { id: "c6_20", name: "算法的嘲弄 (Algo-Sarcasm)", group: "4. 系统的离线", def: "逻辑：大数据精准地向你展示你刚刚失败的惨状，进行心理霸凌。", core: "侧重：针对“被看穿的赤裸感”。应用：反跟踪工具。" },
      { id: "c6_21", name: "无法愈合的裂口 (Non-Healing)", group: "5. 肉身的衰变", def: "逻辑：微小的伤口由于免疫力下降而长期溃烂，预示死亡。", core: "侧重：针对“基本健康恐惧”。应用：高端医疗、补品。" },
      { id: "c6_22", name: "内脏的铅块 (Heavy Gut)", group: "5. 肉身的衰变", def: "逻辑：由于长期过劳，内脏感官变得迟钝且沉重，无法轻盈。", core: "侧重：针对“慢性病”。应用：轻食、排毒、康养。" },
      { id: "c6_23", name: "视力的模糊 (Blur)", group: "5. 肉身的衰变", def: "逻辑：世界正在一点点失去细节，像一幅褪色的画卷。", core: "侧重：针对“感知能力丧失”。应用：视力保护、护眼设备。" },
      { id: "c6_24", name: "失控的体型 (Out of Shape)", group: "5. 肉身的衰变", def: "逻辑：重力对肉体的绝对胜利，原本的线条被臃肿吞噬。", core: "侧重：针对“肉体自律焦虑”。应用：健身中心、瘦身产品。" },
      { id: "c6_25", name: "病毒的寄生 (Infection)", group: "5. 肉身的衰变", def: "逻辑：感觉体内有不属于自己的东西在生长、在吸吮生命力。", core: "侧重：针对“不可控的异物感”。应用：高端体检、杀毒药物。" },
      { id: "c6_26", name: "永恒的遗憾 (Regret)", group: "6. 存在的终结", def: "逻辑：直到最后时刻才发现，由于当初的吝啬，你错过了一生的挚爱。", core: "侧重：针对“错过的恐惧”。应用：浪漫仪式、礼品。" },
      { id: "c6_27", name: "西西弗斯的厌倦 (Sisyphus)", group: "6. 存在的终结", def: "逻辑：突然意识到接下来的三十年将和昨天一模一样。", core: "侧重：针对“无聊的极限”。应用：冒险旅游、极致游戏、沉浸体验。" },
      { id: "c6_28", name: "遗产的断裂 (No Successor)", group: "6. 存在的终结", def: "逻辑：由于没有继承者或传承物，你创造的一生心血将在你死后瞬间被清空。", core: "侧重：针对“不朽欲”。应用：信托、家族办公室、教育。" },
      { id: "c6_29", name: "彻底的沉默 (Absolute Silence)", group: "6. 存在的终结", def: "逻辑：当你大喊救命时，这个宇宙没有给出任何回应，不仅是人，连神也消失了。", core: "侧重：针对“绝对虚无”。应用：宗教、哲学、高端心理服务。" },
      { id: "c6_30", name: "镜像的碎片化 (Fragmentation)", group: "6. 存在的终结", def: "逻辑：精神结构彻底崩毁，主体由于无法处理创伤而化为无数碎片。", core: "侧重：针对“精神解体”。应用：极致庇护所、深度禅修。" }
    ]
  },
  {
    id: "comm_c7_lib",
    name: "C7. 承诺幻象 (The Promise)",
    desc: "30种终极缝合状态：消费后抵达的“理想我”彼岸",
    items: [
      // 1. 永恒与神性 (Eternal & Divine) - 对应自恋/救赎
      { id: "c7_1", name: "冻结的时间 (Timelessness)", group: "1. 永恒/神性", def: "逻辑：肉体与环境不再受熵增律限制，进入永恒的巅峰态。", core: "应用：顶级抗衰、豪宅、理财。视觉：无阴影的强光，凝固的瞬间。" },
      { id: "c7_2", name: "神性的加冕 (Apotheosis)", group: "1. 永恒/神性", def: "逻辑：主体超越了凡人层级，获得大他者的绝对豁免权。", core: "应用：顶奢、特权服务。视觉：仰视镜头，主角散发出微光或金边。" },
      { id: "c7_3", name: "完美的镜像 (Mirror Perfect)", group: "1. 永恒/神性", def: "逻辑：终于成为了那个想象中完美的、无瑕疵的自己。", core: "应用：美妆、医美、修图。视觉：镜中反射出更耀眼的自我，周围一切模糊。" },
      { id: "c7_4", name: "不朽的印记 (Indelible)", group: "1. 永恒/神性", def: "逻辑：通过作品或家族，主体在时间轴上留下了不可磨灭的划痕。", core: "应用：名表、信托、珠宝。视觉：在古老建筑或星空下的剪影。" },
      { id: "c7_5", name: "圣徒的宁静 (Saintly Peace)", group: "1. 永恒/神性", def: "逻辑：欲望彻底平息，不再感到匮乏的终极觉醒感。", core: "应用：高端禅修、避世空间。视觉：极简空间，主角闭目，面部肌肉完全放松。" },

      // 2. 绝对掌控 (Absolute Mastery) - 对应肛欲/秩序
      { id: "c7_6", name: "全知的透视 (Omniscience)", group: "2. 绝对掌控", def: "逻辑：世界对主体变得透明，没有任何秘密或死角。", core: "应用：大数据、监控、咨询。视觉：复杂的UI叠加在现实之上，一切皆可量化。" },
      { id: "c7_7", name: "指令的即时 (Instant Command)", group: "2. 绝对掌控", def: "逻辑：意念与现实无缝衔接。凡所想，必成就。", core: "应用：智能系统、自动驾驶。视觉：指尖轻点，远处的城市或机器随之律动。" },
      { id: "c7_8", name: "秩序的圆舞 (Harmonious Order)", group: "2. 绝对掌控", def: "逻辑：所有复杂的元素在主体的指挥下呈现几何级的和谐。", core: "应用：管理软件、收纳工具。视觉：万物各就各位，极度的对称与整洁。" },
      { id: "c7_9", name: "绝对的屏障 (Absolute Bastion)", group: "2. 绝对掌控", def: "逻辑：外界的混乱被彻底隔离，主体在内部拥有绝对主权。", core: "应用：网络安全、私人防务。视觉：透明但坚固的力场，外部风暴与内部宁静的对比。" },
      { id: "c7_10", name: "命运的操盘 (Fate Control)", group: "2. 绝对掌控", def: "逻辑：主体不再是棋子，而是拨动命运琴弦的乐手。", core: "应用：顶级对冲基金、战略咨询。视觉：主角在阴影中俯瞰整座城市的棋盘。" },

      // 3. 深度融合 (Deep Fusion) - 对应口欲/情感
      { id: "c7_11", name: "母体的怀抱 (Maternal Return)", group: "3. 深度融合", def: "逻辑：主体重新找回了绝对的、无条件的爱与包裹感。", core: "应用：家装、床品、母婴。视觉：包裹在柔软织物中，色调温暖如黄油。" },
      { id: "c7_12", name: "感官的涅槃 (Sensory Nirvana)", group: "3. 深度融合", def: "逻辑：自我边界完全消失，与极致的快感合二为一。", core: "应用：高端餐饮、香氛。视觉：主角瞳孔放大，画面发生抽象的水彩化溶解。" },
      { id: "c7_13", name: "灵魂的咬合 (Twin Soul)", group: "3. 深度融合", def: "逻辑：找到了另一个残缺的半圆，完成了存在的缝合。", core: "应用：婚庆、高端交友、礼品。视觉：两个剪影重叠，光影在接触点交织。" },
      { id: "c7_14", name: "万物有灵 (Animistic Connection)", group: "3. 深度融合", def: "逻辑：主体与自然或机器建立起一种超越语言的沟通链路。", core: "应用：智能科技、户外。视觉：森林或光纤向主角伸出触手，温柔包裹。" },
      { id: "c7_15", name: "群体的共振 (Hive Resonance)", group: "3. 深度融合", def: "逻辑：不再感到孤独，成为宏大节奏中不可或缺的一个音符。", core: "应用：社区运营、大型活动。视觉：万人同步的动作，光影构成整齐的阵列。" },

      // 4. 视界巅峰 (Visual Pinnacle) - 对应视淫/景观
      { id: "c7_16", name: "奇观的中心 (Center of Spectacle)", group: "4. 视界巅峰", def: "逻辑：主体成为了所有目光的焦点，大他者的宠儿。", core: "应用：演艺、奢侈品、发布会。视觉：聚光灯汇聚，快门声如雷鸣，主角背光登场。" },
      { id: "c7_17", name: "穿透之眼 (X-Ray Insight)", group: "4. 视界巅峰", def: "逻辑：看破红尘表象，直抵事物本质的智力爽感。", core: "应用：专业相机、检测设备。视觉：层层剥离的视觉特效，露出内部的核心构造。" },
      { id: "c7_18", name: "全景的自由 (Panoramic Freedom)", group: "4. 视界巅峰", def: "逻辑：摆脱地心引力和视角限制，拥有360度的自由视界。", core: "应用：无人机、旅游、VR。视觉：广角航拍，地平线弯曲，主角俯冲过云端。" },
      { id: "c7_19", name: "无瑕的滤镜 (Flawless Screen)", group: "4. 视界巅峰", def: "逻辑：世界被永久性地修复，只剩下符合审美目标的画面。", core: "应用：家装、城市规划、美图。视觉：画面色彩极度高级，自动修去所有丑陋的细节。" },
      { id: "c7_20", name: "梦境的实体化 (Dream Manifest)", group: "4. 视界巅峰", def: "逻辑：虚构比现实更真实。幻想在主体的指尖化为实体。", core: "应用：高端IP、游乐设施。视觉：现实与CG无缝切换，独角兽在CBD奔跑。" },

      // 5. 力量的跨越 (Power Leap) - 对应驱力/进化
      { id: "c7_21", name: "光速的静止 (Velocity Stillness)", group: "5. 力量跨越", def: "逻辑：速度快到极致后，时间在主体眼中变慢，万物皆可静止处理。", core: "应用：跑车、高性能处理器。视觉：子弹时间，周围景物拉成丝线。" },
      { id: "c7_22", name: "泰坦的力量 (Titan Might)", group: "5. 力量跨越", def: "逻辑：凡人肉体承载了恒星级的输出功率。", core: "应用：功能饮料、工程机械。视觉：主角一挥手，巨型结构随之轰然移动。" },
      { id: "c7_23", name: "算法的先知 (Algo-Prophecy)", group: "5. 力量跨越", def: "逻辑：提前预知所有可能的分歧点，并自动选择最优路径。", core: "应用：预测系统、投行。视觉：空气中浮现无数条未来的路径，主角精准走向一条。" },
      { id: "c7_24", name: "生存的降维 (Dimension Shift)", group: "5. 力量跨越", def: "逻辑：主体处于更高的维度生存，低维的威胁再也无法触碰。", core: "应用：极高净值保险、防务。视觉：主角漫步在枪林弹雨中，子弹像水滴一样滑落。" },
      { id: "c7_25", name: "重启的权利 (Reset Sovereignty)", group: "5. 力量跨越", def: "逻辑：随时可以按下清零键，让人生重新从最完美的点开始。", core: "应用：极高端法律/医疗。视觉：主角按下虚空中的按钮，时光倒流回最初的美好。" },

      // 6. 意义的归宿 (Meaning Home) - 对应象征/大他者
      { id: "c7_26", name: "家族的图腾 (Ancestral Totem)", group: "6. 意义归宿", def: "逻辑：个人的成功被升华为家族的永恒传说。", core: "应用：家办、高端教育。视觉：主角的画像挂在长廊尽头，与先祖并列。" },
      { id: "c7_27", name: "被承认的誓言 (Validated Vow)", group: "6. 意义归宿", def: "逻辑：主体的牺牲被大他者看见并赋予了神圣的意义。", core: "应用：公益、纪念产品。视觉：纪念碑前的献花，或者是被庄严刻入名字的过程。" },
      { id: "c7_28", name: "真理的信使 (Herald of Truth)", group: "6. 意义归宿", def: "逻辑：主体掌握了改变世界的一句话或一个公式。", core: "应用：知识付费巅峰、发布会。视觉：主角在黑暗中发声，整个世界随之亮起。" },
      { id: "c7_29", name: "最后的圣殿 (Final Sanctuary)", group: "6. 意义归宿", def: "逻辑：在经历了所有的风暴后，抵达了那个绝对不会崩塌的终点。", core: "应用：高端墓园、不朽资产。视觉：地平线尽头的白色建筑，圣歌响起。" },
      { id: "c7_30", name: "主体的合一 (The Oneness)", group: "6. 意义归宿", def: "逻辑：分裂的 $ 消失了，主体感到了前所未有的、哪怕是虚假的完全自恰。", core: "应用：综合生活品牌。视觉：主角面带微笑，慢慢溶入金色的背景中，字幕升起。" }
    ]
  }
];
