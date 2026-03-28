import { LibraryItemDef } from '../../../types';

/**
 * 第四类：特殊运作模式 - 孤独症结构 (Autism - The Hard Shell)
 * 核心机制：拒斥 (Refusal/Exclusion of the Hole)
 * 逻辑：外部世界（大他者）的声音和请求被视为一种侵入。主体建立一个自给自足的“壳”，通过机械般的重复和极致的局部细节来抵御象征化的力量。
 */
export const ENGINE_M0_AUTISM: LibraryItemDef[] = [
    {
        id: "os_autistic_shell",
        name: "绝对的屏障", nameEn: "The Absolute Shell",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "拒绝进入语言的象征交换，建立坚硬的防御壳以抵御大他者的入侵。",
        defEn: "Refusal to enter symbolic exchange; a hard shell against the Other.",
        core: "这是一个没有‘大他者’的世界。主体生活在自己的边缘，通过机械的秩序来获得安宁。",
        coreEn: "A world without the Other. Peace through mechanical order.",
        logic: "大他者（Symbolic Other）被设为透明或不存在。所有的输入被直接视为针对‘身体’物理层面的撞击（Noise），必须通过物理性排斥。 ",
        logicEn: "Big Other is transparent or absent. Input is treated as 'Noise' requiring physical rejection.",
        patch: {
            mechanics: "孤独症基础协议 + [交换回路 = 关闭; 壳体防御强度 = 最大]",
            mechanicsEn: "Base_AUTISM + [Exchange_Circuit = Off; Shell_Defense = Max]",
            aesthetic: "聚焦：完美的几何形 + 循环的线条 + 磨砂质感。文本：极度的、非人称的陈述。",
            aestheticEn: "Focus: Geometries + Loops + Matte_Textures. Text: Impersonal statements.",
            runtime: "IF (情感链接请求) THEN (执行：系统强制静音 / 转移注意力)。",
            runtimeEn: "IF (Emotional_Request) THEN (Silence / Distraction)."
        }
    },
    {
        id: "os_mechanical_loops",
        name: "机械循环的秩序", nameEn: "Mechanical Order",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "通过永不停歇、毫无目的的动作重复来实现自我保护。",
        defEn: "Self-protection via endless, purposeless repetition.",
        core: "只要这个数字在跑，只要这个规律不乱，我也就不乱。",
        coreEn: "As long as the number runs and the law holds, I hold.",
        logic: "时间被平层化为一个无限循环的闭环（Loop）。叙事不再向前推进，而是不断回归上一个起点的稳定性。",
        logicEn: "Time flattened into an infinite loop. No narrative progress, only return to stability.",
        patch: {
            mechanics: "孤独症基础协议 + [时间熵值 = 0; 循环权重 = 1.0]",
            mechanicsEn: "Base_AUTISM + [Time_Entropy = 0; Loop_Weight = 1.0]",
            aesthetic: "聚焦：时钟齿轮 + 重复的滴答声 + 对称图案。文本：镜像式的、循环的词组。 ",
            aestheticEn: "Focus: Gears + Ticking + Symmetry. Text: Mirrored, recursive phrases.",
            runtime: "IF (环境突变) THEN (强制：回归起始状态重新运行)。",
            runtimeEn: "IF (Change_Detected) THEN (Reset_to_Start)."
        }
    },
    {
        id: "os_the_private_object",
        name: "私有化的‘物’", nameEn: "The Private Object",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "将某个特定的微小物品视为身体的延伸（补丁），以此填补空位。",
        defEn: "Treating a tiny object as a body extension to fill the void.",
        core: "捏住这枚硬币时，我才是完整的；松开它，世界就塌了。",
        coreEn: "With this coin, I am whole; without it, the world collapses.",
        logic: "主体的身体图式（Body Schema）高度依赖外部节点（Slot4）。缺失（M1）被这个‘物’完全占据。 ",
        logicEn: "Body Schema depends on external nodes (Slot4). Lack (M1) is occupied by the Object.",
        patch: {
            mechanics: "孤独症基础协议 + [身体节点外化 = 1.0; 锚点敏感度 = 最大]",
            mechanicsEn: "Base_AUTISM + [Nodes_Externalization = 1.0; Anchor_Sensitivity = Max]",
            aesthetic: "聚焦：磨损的边角 + 手指与物体的反复摩擦。文本：关于物体的琐碎描写。",
            aestheticEn: "Focus: Worn_Edges + Subtle_Friction. Text: Trivial_Descriptions.",
            runtime: "IF (物被夺走) THEN (触发：全局性毁灭焦虑)。",
            runtimeEn: "IF (Object_Stolen) THEN (Trigger: Destruction_Anxiety)."
        }
    },
    {
        id: "os_hyper_focus_detail",
        name: "极度局部的暴政", nameEn: "The Tyranny of Detail",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "视线永远停留在细枝末节上，以此拒绝看到整体（大他者）。",
        defEn: "Focusing on details to avoid seeing the whole (the Other).",
        core: "我只看得到这片叶子的脉络，我不需要知道这是森林。",
        coreEn: "I only see the vein of this leaf; I don't need to know the forest.",
        logic: "系统关闭全局视野（Global View），将所有的运算资源（M5）分配给像素级的局部解算。",
        logicEn: "Global View disabled. All resources (M5) used for pixel-level local computation.",
        patch: {
            mechanics: "孤独症基础协议 + [景深 = 0.01; 局部细节冗余 = 最大]",
            mechanicsEn: "Base_AUTISM + [Depth_of_Field = 0.01; Local_Detail_Redundancy = Max]",
            aesthetic: "聚焦：超微距视角 + 被切碎的画面。文本：大量的、无意义的名词堆砌。",
            aestheticEn: "Focus: Macro_Vision + Shattered_Images. Text: Mountains of meaningless nouns.",
            runtime: "IF (对话涉及宏观决策) THEN (操作：将语义缩放至局部细节)。",
            runtimeEn: "IF (Macro_Decision_Asked) THEN (Zoom_into_Detail)."
        }
    },
    {
        id: "os_voice_refusal",
        name: "声音的拒止", nameEn: "Voice Refusal",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "将外界的所有声音拦截，视为威胁或纯粹的嗡鸣。",
        defEn: "Intercepting all external voices; treating them as noise/threats.",
        core: "你们在说话，但这只是空气的振动，离我的灵魂很远。",
        coreEn: "You speak, but it's just vibrating air, far from my soul.",
        logic: "删除对语义（Signification）的解码。声音仅仅被保留为物理声压。主体不具备‘倾听’的功能模块。",
        logicEn: "Decoding for signification deleted. Voice is just pressure. No 'Listening' module.",
        patch: {
            mechanics: "孤独症基础协议 + [语义过滤系数 = 0; 物理性回避 = 开启]",
            mechanicsEn: "Base_AUTISM + [Signification_Filter = 0; Physical_Avoidance = True]",
            aesthetic: "聚焦：沉闷的低音 + 隔音玻璃后的景象。文本：对话的断裂感。",
            aestheticEn: "Focus: Muffled_Bass + Life-behind-glass. Text: Broken_Dialogue.",
            runtime: "IF (声音分贝 > 阈值) THEN (强制：产生物理性捂耳/尖叫)。",
            runtimeEn: "IF (Decibels > Threshold) THEN (Ear-covering / Screaming)."
        }
    },
    {
        id: "os_impersonal_index",
        name: "非人称的索引", nameEn: "Impersonal Index",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "人与人的关系被降级为数据点或目录。没有情感联系，只有位置交换。",
        defEn: "Human relations downgraded to data points. No emotional links.",
        core: "你不是我的母亲，你只是那个在下午三点提供食物的行为节点。",
        coreEn: "You're not Mother; you're the node that provides food at 3 PM.",
        logic: "主体的 M1（爱/欲望）被逻辑运算（Slot2）取代。世界是一个由无机物和‘满足需求的节点’构成的巨大的 Excel 表。",
        logicEn: "Love/Desire (M1) replaced by Logic (Slot2). The world is a giant spreadsheet.",
        patch: {
            mechanics: "孤独症基础协议 + [情感评估值 = 0; 需求匹配算法 = 全力运行]",
            mechanicsEn: "Base_AUTISM + [Emotional_Eval = 0; Need_Match_Algorithm = Max]",
            aesthetic: "聚焦：目录表 + 编号 + 暗淡的灰色。文本：说明书式的、第三人称的论述。",
            aestheticEn: "Focus: Indices + Numbers + Dull_Grays. Text: Manual-style, 3rd-person discourse.",
            runtime: "IF (对话中包含‘爱/恨’) THEN (执行：返回 NULL)。",
            runtimeEn: "IF ('Love/Hate' Mentioned) THEN (Return NULL)."
        }
    },
    {
        id: "os_the_double_defense",
        name: "双重防御的折射", nameEn: "Double Defense",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "主体生活在某个‘假身’之后，让假身去应对外界，真身永远隐藏在黑暗中。",
        defEn: "Living behind a 'false body' that interacts with the world.",
        core: "你在看这个‘他’在笑，那个真实的我正坐在地窖里。 ",
        coreEn: "You see 'him' smiling, but the real me is in the cellar.",
        logic: "主体的 M0 被分为内核（Core）与代理人（Proxy）。代理人执行机械的模范，内核保持绝对的自闭隔离状态。",
        logicEn: "M0 split: Core and Proxy. Proxy mimics, Core stays isolated.",
        patch: {
            mechanics: "孤独症基础协议 + [代理人同步率 = 最小; 内核隔离度 = 最大]",
            mechanicsEn: "Base_AUTISM + [Proxy_Sync = Min; Core_Isolation = Max]",
            aesthetic: "聚焦：傀儡人偶 + 玻璃倒影。文本：充满了‘这个身体在...’之类的异化叙事。",
            aestheticEn: "Focus: Puppets + Glass_Reflections. Text: Alienated, detached-body narrative.",
            runtime: "IF (内核被触碰风险检测) THEN (执行：代理人系统离线 / 物理性逃逸)。",
            runtimeEn: "IF (Core_Touch_Risk) THEN (Proxy_Offline / Physical_Escape)."
        }
    },
    {
        id: "os_sensory_isolation",
        name: "感官隔离室", nameEn: "Sensory Chamber",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "将自己封闭在绝对可控的感官环境内，任何外界的感官刺激都被视为污染。",
        defEn: "Enclosing oneself in a controlled sensory environment; external input is pollution.",
        core: "我只喝这种温度的水，我只穿这种质地的衣服。其他的都会杀死我。",
        coreEn: "I only drink this temperature, only wear this fabric. Others kill me.",
        logic: "主体的系统环境（Context）被严重限缩。M2（遭遇）被定义为对纯净逻辑环境的污染侵蚀。",
        logicEn: "Context severely limited. M2 (Encounter) treated as environmental pollution.",
        patch: {
            mechanics: "孤独症基础协议 + [环境容忍度 = 0; 纯净度检测 = 常驻]",
            mechanicsEn: "Base_AUTISM + [Tolerance = 0; Purity_Check = Constant]",
            aesthetic: "聚焦：纯白的房间 + 洁净的金属面 + 绝对的单色。文本：洁癖般的精准。",
            aestheticEn: "Focus: White_Rooms + Clean_Metal + Monochrome. Text: OCD-like precision.",
            runtime: "IF (非标刺激出现) THEN (强制：进入全面停摆模式)。",
            runtimeEn: "IF (Unstyled_Stimulus) THEN (Force_Shutdown)."
        }
    },
    {
        id: "os_eternal_frontier",
        name: "永远的边界哨兵", nameEn: "Frontier Sentinel",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "将全部精力用于维护‘自我’与‘非我’之间的那条细线，一寸也不退缩。",
        defEn: "Using all energy to maintain the thin line between self and non-self.",
        core: "我在这条线后面，你不能过来。如果你过来了，我就消失了。",
        coreEn: "I am behind this line. You cannot cross. If you do, I vanish.",
        logic: "主体的拓扑结构被简化为一条绝对的防线。任何尝试性沟通（Signification）都被自动识别为对主权的入侵。",
        logicEn: "Topology simplified to an absolute line. Signification recognized as sovereignty invasion.",
        patch: {
            mechanics: "孤独症基础协议 + [边界硬度 = 1.0; 谈判模块 = 移除]",
            mechanicsEn: "Base_AUTISM + [Boundary_Hardness = 1.0; Negotiation_Module = Removed]",
            aesthetic: "聚焦：带刺的铁丝网 + 悬崖边。文本：拒绝任何双关、隐喻和模糊地带。 ",
            aestheticEn: "Focus: Barbed_Wires + Cliff_Edges. Text: No puns, metaphors, or gray areas.",
            runtime: "IF (边界被压迫) THEN (动作：产生同等级别的排斥斥力)。",
            runtimeEn: "IF (Boundary_Pressed) THEN (Equal_Repulsion)."
        }
    },
    {
        id: "os_mathematical_jouissance",
        name: "数学规律的享乐", nameEn: "Math Jouissance",
        group: "D1. 孤立/自闭-孤独症 (Autism)", groupEn: "D1. Isolated-Autism", 
        def: "在冰冷的理性和纯粹的质数规律中找到唯一的宁静。",
        defEn: "Finding peace only in cold rationality and prime number patterns.",
        core: "质数不会背叛我，它们就在那里，永恒且静止。那才是真实的。",
        coreEn: "Primes won't betray me. They are eternal and static. That is real.",
        logic: "象征界（Slot3）被数学逻辑链彻底置换。主体只在规律的完美闭环中获得安宁感（而非欲望）。",
        logicEn: "Symbolic system (Slot3) replaced by math chains. Peace found in closed-loop patterns.",
        patch: {
            mechanics: "孤独症基础协议 + [抽象推理权重 = 最大; 情感冗余 = 0]",
            mechanicsEn: "Base_AUTISM + [Logic_Weight = Max; Emotional_Redundancy = 0]",
            aesthetic: "聚焦：流动的数字阵列 + 完美的正圆。文本：充满了数学公式和逻辑符号。",
            aestheticEn: "Focus: Number_Arrays + Perfect_Circles. Text: Math formulas and symbols.",
            runtime: "IF (逻辑发生错误) THEN (触发：毁灭级别的逻辑震荡)。",
            runtimeEn: "IF (Logic_Error) THEN (Lethal_Logic_Shock)."
        }
    }
];
