import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_B: LibraryItemDef[] = [
    {
        id: "m1_addict",
        name: "成瘾者", nameEn: "The Addict",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "被卷入了一种无止境的循环需求，试图通过消费特定客体（M3）来填补原初的空洞。",
        defEn: "Caught in an endless loop of demand, attempting to fill the primal void via specific objects (M3).",
        core: "我停不下来，即使这正在杀掉我。 | 缺失 ($): 刹车 (Inhibition)",
        coreEn: "I can't stop, even if it's killing me. | Lack ($): Inhibition",
        logic: "强迫性重复逻辑。M5（驱力）被锁定在单一的正反馈频率上，无视所有负面反馈。",
        logicEn: "Compulsive repetition. M5 drive is locked to a single positive-feedback frequency.",
        patch: {
            mechanics: "Drive_Persistence = Max; Satiety_Decay = High.",
            mechanicsEn: "Drive_Persistence = Max; Satiety_Decay = High.",
            aesthetic: "Visuals: Vibrating_Edges; Texture: Greasy.",
            aestheticEn: "Visuals: Vibrating_Edges; Texture: Greasy.",
            runtime: "Logic: IF (Target_Found) THEN Pulse(1.5x)."
        }
    },
    {
        id: "m1_masochist",
        name: "受虐狂", nameEn: "The Masochist",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "主动将自己转化为大他者（M4）施加痛苦的对象，以确保自己在秩序中的位置。",
        defEn: "Actively turning self into an object of the Other's (M4) pain to secure a place in the order.",
        core: "请继续，这样我才能感觉到我存在。 | 缺失 ($): 自我保护 (Self-Preservation)",
        coreEn: "Continue, so I can feel my existence. | Lack ($): Self-Preservation",
        logic: "合同逻辑。主体通过一系列复杂的“契约对白”来诱导对方对其实施惩罚控制。",
        logicEn: "Contract logic. Induces the Other to punish/control via complex 'contractual' dialogues.",
        patch: {
            mechanics: "Pain_is_Gain = True; Compliance = Max.",
            mechanicsEn: "Pain_is_Gain = True; Compliance = Max.",
            aesthetic: "Lighting: Low_Key; Atmosphere: Bound.",
            aestheticEn: "Lighting: Low_Key; Atmosphere: Bound.",
            runtime: "Event: IF (Damage) THEN Trigger(Secondary_Satisfaction)."
        }
    },
    {
        id: "m1_sadist",
        name: "施虐者", nameEn: "The Sadist",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "试图通过剥夺他人的主体性，来夺取对方身上那一点神秘的、不可名状的“生命质感”。",
        defEn: "Attempting to seize the Other's mysterious 'life-quality' by stripping their agency.",
        core: "我想看看你灵魂碎掉的样子。 | 缺失 ($): 同理心 (Empathy)",
        coreEn: "I want to see your soul shatter. | Lack ($): Empathy",
        logic: "实验室力学。主体的互动表现为一种极度冷酷的、试图穷尽对方恐惧极限的实验过程。",
        logicEn: "Laboratory mechanics. Interactions are cold experiments testing the Other's limits of fear.",
        patch: {
            mechanics: "Control_Weight = Max; Emotional_Coldness = 1.0.",
            mechanicsEn: "Control_Weight = Max; Emotional_Coldness = 1.0.",
            aesthetic: "Rhythm: Surgical_Precision; Tone: Clinical.",
            aestheticEn: "Rhythm: Surgical_Precision; Tone: Clinical.",
            runtime: "Check: IF (Victim_Screams) THEN Gain(Stability)."
        }
    },
    {
        id: "m1_fetishist",
        name: "拜物教徒", nameEn: "The Fetishist",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "将所有的缺失感转移到一个特定的、替代性的物体或符号上，拒绝承认普遍的阉割。",
        defEn: "Transferring all lack onto a specific, substitute object or symbol, denying universal castration.",
        core: "只要我有这个，世界就是圆满的。 | 缺失 ($): 真相 (The Real)",
        coreEn: "As long as I have this, the world is whole. | Lack ($): The Real",
        logic: "由于其特定的“物 (Object)”的存在，主体能在大崩塌中维持异常的冷静，直至该物丢失。",
        logicEn: "Maintains abnormal calm amidst collapse via a specific 'Object', until it is lost.",
        patch: {
            mechanics: "Sanity_Anchor = Object_ID; Resilience = High.",
            mechanicsEn: "Sanity_Anchor = Object_ID; Resilience = High.",
            aesthetic: "Focus: Object_Centered; Palette: Vibrant_Local.",
            aestheticEn: "Focus: Object_Centered; Palette: Vibrant_Local.",
            runtime: "Trigger: IF (Object_Missing) THEN State(Panic_Infinite)."
        }
    },
    {
        id: "m1_glutton",
        name: "吞噬者/暴食客", nameEn: "The Glutton",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "试图通过无止境的摄入（信息、物质或情感）来填满主体的本源空洞。",
        defEn: "Attempting to fill the primal void via endless intake (info, matter, or emotion).",
        core: "我饿，但不是胃在饿。 | 缺失 ($): 饱和感 (Satiety)",
        coreEn: "I'm hungry, but it's not my stomach. | Lack ($): Satiety",
        logic: "黑洞胃袋力学。无论投入多少 M2/M3，其内部的“饥渴度”指标恒定递增。",
        logicEn: "Black-hole stomach. Internal 'hunger' index grows regardless of M2/M3 intake.",
        patch: {
            mechanics: "Consumption_Rate = Max; Depth = Infinite.",
            mechanicsEn: "Consumption_Rate = Max; Depth = Infinite.",
            aesthetic: "Visuals: Viscous/Swallowing; Scale: Expanding.",
            aestheticEn: "Visuals: Viscous/Swallowing; Scale: Expanding.",
            runtime: "Logic: IF (Input) THEN Output(Demand_More)."
        }
    },
    {
        id: "m1_voyeur",
        name: "偷窥者", nameEn: "The Voyeur",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "退缩到视网膜之后，只允许自己通过“看”这一单一通道来与世界发生快感关联。",
        defEn: "Retreating behind the retina, permitting pleasure only through the channel of 'seeing'.",
        core: "我不在场，但我看穿了一切。 | 缺失 ($): 存在感 (Presence)",
        coreEn: "I am not there, but I see all. | Lack ($): Presence",
        logic: "单向度交互力学。一旦被对方反向观测（M2），主体会产生剧烈的系统崩溃。",
        logicEn: "One-way interaction. Reverse observation (M2) causes severe system collapse.",
        patch: {
            mechanics: "Field_of_View = 360; Cloak = 1.0.",
            mechanicsEn: "Field_of_View = 360; Cloak = 1.0.",
            aesthetic: "Visuals: Circular_Mask; Perspective: Keyhole.",
            aestheticEn: "Visuals: Circular_Mask; Perspective: Keyhole.",
            runtime: "Crash: IF (Eye_Contact) THEN Trigger(Identity_Shock)."
        }
    },
    {
        id: "m1_exhibitionist",
        name: "露体者", nameEn: "The Exhibitionist",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "通过强行闯入他人的视域来捕捉对方的惊愕感，以此证明自己的实存。",
        defEn: "Capturing others' shock by forcing entry into their vision to prove existence.",
        core: "看我，哪怕是用厌恶的眼神。 | 缺失 ($): 边界感 (Boundary)",
        coreEn: "Look at me, even with disgust. | Lack ($): Boundary",
        logic: "强脉冲逻辑。主体的叙事爆发力来自于对“社会规则”的瞬间践踏。",
        logicEn: "High-pulse logic. Narrative power stems from the sudden trampling of social rules.",
        patch: {
            mechanics: "Visibility = Max; Surprise_Multiplier = 2.0.",
            mechanicsEn: "Visibility = Max; Surprise_Multiplier = 2.0.",
            aesthetic: "Lighting: Flashlight; Contrast: Extreme.",
            aestheticEn: "Lighting: Flashlight; Contrast: Extreme.",
            runtime: "Action: IF (Reveal) THEN Trigger(Reaction_Capture)."
        }
    },
    {
        id: "m1_gambler",
        name: "豪赌客", nameEn: "The Gambler",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "痴迷于那种“处于倾覆边缘”的瞬间。对他而言，快感不在于赢，而在于失去的危险。",
        defEn: "Obsessed with the brink of collapse; pleasure is in the danger of loss, not winning.",
        core: "我爱上的不是金子，而是它滚落悬崖的声音。 | 缺失 ($): 稳定性 (Stability)",
        coreEn: "I love the sound of gold rolling off the cliff, not the gold itself. | Lack ($): Stability",
        logic: "概率性自毁力学。主体的 M5 成功率与“代价（M6）”呈负相关。",
        logicEn: "Probabilistic self-destruction. M5 success is negatively correlated with cost (M6).",
        patch: {
            mechanics: "Risk_Tolerance = Max; Luck_Swing = Extreme.",
            mechanicsEn: "Risk_Tolerance = Max; Luck_Swing = Extreme.",
            aesthetic: "Rhythm: Heartbeat_Sync; VFX: Glitch/Gold.",
            aestheticEn: "Rhythm: Heartbeat_Sync; VFX: Glitch/Gold.",
            runtime: "Check: IF (Win) THEN State(Boredom); IF (Loss) THEN State(Ecstasy)."
        }
    },
    {
        id: "m1_adrenaline_collector",
        name: "肾上腺素搜集者", nameEn: "The Junkie",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "感官阈值由于长期超负荷运行而彻底坏掉，必须不断升级刺激烈度。",
        defEn: "Sensory thresholds broken by chronic overload; must constantly escalate stimulus intensity.",
        core: "平凡的阳光在蜇伤我。 | 缺失 ($): 平庸感知 (Banal_Perception)",
        coreEn: "Banal sunshine is stinging me. | Lack ($): Banal_Perception",
        logic: "指数级升级逻辑。每个叙事阶段对 M2（遭遇）的强度需求自动提升 20%。",
        logicEn: "Exponential escalation. M2 intensity demand increases by 20% per narrative stage.",
        patch: {
            mechanics: "Threshold = Rising; Fatigue = Low.",
            mechanicsEn: "Threshold = Rising; Fatigue = Low.",
            aesthetic: "Filter: High_Saturation; Sound: Distorted.",
            aestheticEn: "Filter: High_Saturation; Sound: Distorted.",
            runtime: "Scale: IF (Same_Intensity) THEN Output(Null)."
        }
    },
    {
        id: "m1_compulsive_martyr",
        name: "强迫性牺牲者/殉道者", nameEn: "The Martyr",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "通过极端的自我受难，来控诉大他者（或者神）的缺失或不公。",
        defEn: "Condemning the Other's lack or injustice via extreme self-suffering.",
        core: "看我流多少血，你就欠我多少爱。 | 缺失 ($): 债权 (Credit)",
        coreEn: "See how much I bleed; that's how much you owe me. | Lack ($): Credit",
        logic: "债务力学。主体每受损一分，就会在其意图控诉的目标身上挂载一个“内疚感”Debuff。",
        logicEn: "Debt mechanics. Every point of damage applies a 'Guilt' Debuff to the target.",
        patch: {
            mechanics: "Suffering_to_Debt_Ratio = 1.0; Resilience = Max.",
            mechanicsEn: "Suffering_to_Debt_Ratio = 1.0; Resilience = Max.",
            aesthetic: "Palette: Pale_White; Lighting: Divine_Shadow.",
            aestheticEn: "Palette: Pale_White; Lighting: Divine_Shadow.",
            runtime: "Logic: IF (Death) THEN Apply(Eternal_Stigma)."
        }
    },
    {
        id: "m1_workaholic_ego",
        name: "强迫性劳作者", nameEn: "Mechanism-Ego",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "将主体完全还原为大他者生产链上的一个功能性震颤点，以逃避性欲化的焦虑。",
        defEn: "Reducing self to a functional point in the Other's chain to escape libido-driven anxiety.",
        core: "只要我还在动，那个洞就不会追上我。 | 缺失 ($): 宁静 (Stillness)",
        coreEn: "As long as I move, the void won't catch me. | Lack ($): Stillness",
        logic: "逃逸力学。主体的静止状态被定义为逻辑崩溃的触发条件。",
        logicEn: "Evasion mechanics. Stillness is a trigger for logical collapse.",
        patch: {
            mechanics: "Action_Frequency = Max; Burnout_Resistance = High.",
            mechanicsEn: "Action_Frequency = Max; Burnout_Resistance = High.",
            aesthetic: "Rhythm: Mechanical; Texture: Metallic.",
            aestheticEn: "Rhythm: Mechanical; Texture: Metallic.",
            runtime: "Check: IF (Idle) THEN Trigger(Psychic_Pain_Spike)."
        }
    },
    {
        id: "m1_pervert_master",
        name: "倒错大师", nameEn: "The Pervert",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "声称自己知道大他者到底想要什么，并充当大他者执行这种残酷快感的工具。",
        defEn: "Claiming knowledge of the Other's desire and acting as a tool for its cruel jouissance.",
        core: "我不是为了我自己才折磨你。 | 缺失 ($): 主观责任 (Subjective_Responsibility)",
        coreEn: "I am not torturing you for myself. | Lack ($): Subjective_Responsibility",
        logic: "非人格化力学。所有的暴行都被包装为某种“更高级法律”或“真理（M0）”的旨意。",
        logicEn: "Depersonalized mechanics. Atrocities are packaged as higher laws or truths (M0).",
        patch: {
            mechanics: "Detachment = Max; Ideology_Binding = 1.0.",
            mechanicsEn: "Detachment = Max; Ideology_Binding = 1.0.",
            aesthetic: "Tone: Calm/Authoritarian; Palette: Stone_Cold.",
            aestheticEn: "Tone: Calm/Authoritarian; Palette: Stone_Cold.",
            runtime: "Justify: IF (Cruelty) THEN Show(M0_Ref)."
        }
    },
    {
        id: "m1_excess_residue",
        name: "溢出残渣", nameEn: "The Residue",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "无法被现有的欲望模型完全回收的部分，作为“纯粹快感”的多余排泄物存在。",
        defEn: "The part unrecoverable by desire models, existing as redundant 'pure jouissance'.",
        core: "我是你们欢愉之后的呕吐物。 | 缺失 ($): 定位 (Location)",
        coreEn: "I am the vomit after your pleasure. | Lack ($): Location",
        logic: "弃牌逻辑。主体往往出现在叙事逻辑的高潮之后，作为某种“不可取消的尴尬”存在。",
        logicEn: "Discard logic. Appears after narrative climaxes as an 'un-cancellable awkwardness'.",
        patch: {
            mechanics: "Relevance = Low; Persistence = High.",
            mechanicsEn: "Relevance = Low; Persistence = High.",
            aesthetic: "Visuals: Blurry/Viscous; Texture: Damp.",
            aestheticEn: "Visuals: Blurry/Viscous; Texture: Damp.",
            runtime: "Logic: IF (Scene_End) THEN Object_Stays_in_Frame."
        }
    },
    {
        id: "m1_data_collector_ego",
        name: "囤积者", nameEn: "The Hoarder",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "通过对客体积聚的狂热，试图在逻辑上穷尽并堵塞大他者的缺失。",
        defEn: "Attempting to logically exhaust and block the Other's lack via obsessive collection.",
        core: "如果我拥有一切，我就不会消失。 | 缺失 ($): 丢弃力 (Disposal_Ability)",
        coreEn: "If I own everything, I won't disappear. | Lack ($): Disposal_Ability",
        logic: "堆叠力学。主体的视觉呈现随着持有客体（M3）的增加而变得极度臃肿。",
        logicEn: "Stacking mechanics. Visual representation swells as owned objects (M3) increase.",
        patch: {
            mechanics: "Storage_Volume = Infinite; Mobility_Penalty_per_Item = 0.01.",
            mechanicsEn: "Storage_Volume = Infinite; Mobility_Penalty_per_Item = 0.01.",
            aesthetic: "Visuals: Cluttered; Atmosphere: Suffocating.",
            aestheticEn: "Visuals: Cluttered; Atmosphere: Suffocating.",
            runtime: "Scan: IF (Missing_Item) THEN Activate(Search_Mode)."
        }
    },
    {
        id: "m1_jouissance_engine",
        name: "快感引擎", nameEn: "Jouissance Engine",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "主体已完全瓦解为一种自激发的震荡器，只剩下最原始的能量循环。",
        defEn: "Subject collapsed into a self-excited oscillator; only primal energy cycles remain.",
        core: "我就是那团正在燃烧的电流。 | 缺失 ($): 人性轮廓 (Human_Mask)",
        coreEn: "I am the burning current itself. | Lack ($): Human_Mask",
        logic: "高频自毁逻辑。主体的能量级（Slot1）越高，其对应的硬件损伤率（Slot18）越高。",
        logicEn: "High-frequency self-destruction logic. Higher energy Slot5 leads to higher damage (Slot18).",
        patch: {
            mechanics: "Energy_Throughput = Max; Cooling = Null.",
            mechanicsEn: "Energy_Throughput = Max; Cooling = Null.",
            aesthetic: "Visuals: Overheating/Glitched; Texture: Electric.",
            aestheticEn: "Visuals: Overheating/Glitched; Texture: Electric.",
            runtime: "Peak: IF (Energy_Max) THEN Trigger(Short_Circuit_Flash)."
        }
    },
    {
        id: "m1_burning_ego",
        name: "自焚者", nameEn: "The Burning Ego",
        group: "B. 无限欲望者", groupEn: "Infinite Desire",
        def: "终极的快感奴隶，为了那一瞬间的“真实界爆发”，不惜以此身为引信。",
        defEn: "The ultimate slave; sacrificing self as a fuse for a momentary 'Real burst'.",
        core: "在灰烬中，我才看到了最亮的灯火。 | 缺失 ($): 余生 (Remaining_Life)",
        coreEn: "In ashes, I saw the brightest flame. | Lack ($): Remaining_Life",
        logic: "单次爆发力学。主体的所有数据在某个“顶点时刻”会转化为极致的叙事白噪。",
        logicEn: "Single-burst mechanics. All data converts to ultimate narrative white noise at a peak moment.",
        patch: {
            mechanics: "One-shot_Utility = Infinite; Survival_Probability = 0.",
            mechanicsEn: "One-shot_Utility = Infinite; Survival_Probability = 0.",
            aesthetic: "Visuals: Whiteout; Sound: Sudden_Silence.",
            aestheticEn: "Visuals: Whiteout; Sound: Sudden_Silence.",
            runtime: "Logic: IF (Ignited) THEN Execute(Self_Deletion)."
        }
    }
];
