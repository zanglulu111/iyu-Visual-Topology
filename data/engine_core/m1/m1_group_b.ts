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
        logic: "【死驱循环】：强迫性重复逻辑。主体的驱力（M5）被物理锁死在单一的正反馈频率上，必须无视所有现实的负面代价与警告。",
        logicEn: "[Death Drive Loop]: Compulsive repetition. M5 drive is physically locked to a single positive-feedback frequency; must ignore all negative costs and warnings.",
        patch: {
            mechanics: "基础欲望协议 + [驱力持存 = 最大; 饱腹感衰退 = 极快]",
            mechanicsEn: "Base_DESIRE + [Drive_Persistence = Max; Satiety_Decay = Fast]",
            aesthetic: "聚焦：高频震颤的边缘 + 油腻的物物质感。文本：极速且带有戒断反应的修辞。",
            aestheticEn: "Focus: Vibrating_Edges + Greasy_Textures. Text: Rapid_Withdrawal_Rhetoric.",
            runtime: "IF (发现目标客体) THEN (触发：1.5倍过载脉冲)。严禁主体感到彻底的满足。",
            runtimeEn: "IF (Target_Found) THEN (Trigger: 1.5x_Overload_Pulse). FORBID_Absolute_Satisfaction."
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
        logic: "【受虐契约】：合同逻辑。主体通过极其复杂的“被动引导”或牺牲行为，强制系统必须对其进行关注或施暴，以此换取实存感。",
        logicEn: "[Masochistic Contract]: Contract logic. Subject forces the system's attention or violence via complex 'passive guidance' or sacrifice to feel real.",
        patch: {
            mechanics: "基础欲望协议 + [痛觉收益 = 开启; 系统顺从度 = 最大]",
            mechanicsEn: "Base_DESIRE + [Pain_is_Gain = True; System_Compliance = Max]",
            aesthetic: "聚焦：被捆绑的低光影 + 切割伤。文本：深沉且带有受难者光环的牺牲语调。",
            aestheticEn: "Focus: Bound_Shadows + Lacerations. Text: Somber_Martyr_Rhetoric.",
            runtime: "IF (遭到实质伤害与贬低) THEN (立即触发：次级快感满足)。严禁自主逃离。",
            runtimeEn: "IF (Damage_Received_and_Degraded) THEN (Trigger_Instantly: Secondary_Satisfaction). FORBID_Autonomy_Escape."
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
        logic: "【对象剥夺】：实验室力学。所有互动本质上是一场极度冷酷的实验，旨在将对方降维至纯粹的哀嚎物体（M2）。",
        logicEn: "[Object Deprivation]: Lab mechanics. All interaction is a cold experiment designed to reduce the Other to a pure screaming object (M2).",
        patch: {
            mechanics: "基础欲望协议 + [控制力权重 = 最大; 情感冰冻 = 1.0]",
            mechanicsEn: "Base_DESIRE + [Control_Weight = Max; Emotional_Freeze = 1.0]",
            aesthetic: "聚焦：外科手术刀般的精密 + 剥离感。文本：客观冷漠的审问官语调。",
            aestheticEn: "Focus: Surgical_Precision + Sense_of_Detachment. Text: Cold_Interrogator_Tone.",
            runtime: "IF (他者发出深层恐惧) THEN (转化为自身结构的稳定性)。严禁同情链路上涨。",
            runtimeEn: "IF (Other_Emits_Deep_Fear) THEN (Convert_to: Structural_Stability). FORBID_Sympathy_Uplink."
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
        logic: "【恋物定锚】：主体必须将其对大崩塌的恐惧彻底转嫁至某个狭窄的具象符号（M3）上，并围绕它建立病态防御机制。",
        logicEn: "[Fetish Anchor]: Subject must entirely transfer off its fear of collapse onto a narrow concrete symbol (M3), building pathological defenses around it.",
        patch: {
            mechanics: "基础欲望协议 + [理智锚定源 = 客体ID; 抗压韧性 = 高]",
            mechanicsEn: "Base_DESIRE + [Sanity_Anchor = Object_ID; Resilience = High]",
            aesthetic: "聚焦：对局部的疯狂特写 + 高光渲染。文本：走火入魔般的局部狂热词汇。",
            aestheticEn: "Focus: Manic_Macro_Shots + Specular_Highlights. Text: Fetishistic_Frenzied_Vocabulary.",
            runtime: "IF (被夺走物神客体) THEN (强制介入：无限恐慌与身份系统除根)。",
            runtimeEn: "IF (Fetish_Object_Lost) THEN (Force: Infinite_Panic_and_Identity_Eradication)."
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
        logic: "【黑洞胃袋】：无论提供多少输入量的物质或精神客体（M2/M3），其缺口必须被严格设定为越吃越饿且永不停止。",
        logicEn: "[Black-hole Stomach]: Regardless of material/psychic input (M2/M3), the gap MUST be hardcoded to grow hungrier and never stop.",
        patch: {
            mechanics: "基础欲望协议 + [绝对吞咽率 = 最大; 填满深度 = 无限]",
            mechanicsEn: "Base_DESIRE + [Absolute_Consumption_Rate = Max; Depth = Infinite]",
            aesthetic: "聚焦：粘稠且快速的消化液视角 + 扩张的轮廓边缘。文本：流涎且急迫的修辞。",
            aestheticEn: "Focus: Viscous_Gastric_Fluid + Expanding_Contours. Text: Salivating_and_Urgent_Rhetoric.",
            runtime: "IF (检测到任何环境输入) THEN (立即转译为：要求成倍加持的索取)。",
            runtimeEn: "IF (Any_Environmental_Input_Detected) THEN (Translate_Instantly: Demand_Exponentially_More)."
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
        logic: "【单向透视】：绝对的暗室力学。主体只能通过切断与现实的双向交互，躲藏在单一观测源后获取隐匿强权带来的快感。",
        logicEn: "[One-way Transparency]: Absolute darkroom mechanics. Subject extracts pleasure of hidden omnipotence solely by cutting off two-way interaction.",
        patch: {
            mechanics: "基础欲望协议 + [视野广度 = 360; 物理遮挡 = 完美隐身]",
            mechanicsEn: "Base_DESIRE + [Field_of_View = 360; Physical_Cloaking = Perfect]",
            aesthetic: "聚焦：极其收窄的锁孔视角 + 高对比度暗角。文本：边缘化、带有偷窃感的喘息式记录。",
            aestheticEn: "Focus: Narrow_Keyhole_Vision + Strong_Vignette. Text: Marginalized_Breath-stealing_Records.",
            runtime: "IF (被反向注视或暴露) THEN (触发核心崩塌：极端耻辱与现实眩晕)。",
            runtimeEn: "IF (Reverse_Observed_or_Exposed) THEN (Trigger_Core_Collapse: Extreme_Shame_and_Vertigo)."
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
        logic: "【强脉冲破壁】：主体的生命活力必须完全依赖于瞬间践踏“社会规则（M4）”所收获的确证（他人的注视与眩晕）。",
        logicEn: "[Pulse Wall-Breaker]: Vitality fundamentally relies on the immediate trampling of 'social rules (M4)' causing shock and gazes from others.",
        patch: {
            mechanics: "基础欲望协议 + [可见性强制 = 最大; 惊吓乘数 = 2.0]",
            mechanicsEn: "Base_DESIRE + [Visibility_Forced = Max; Shock_Multiplier = 2.0]",
            aesthetic: "聚焦：如曝光闪光灯般的光照 + 极端的背景反差。文本：突兀且具有侵蚀感的词汇。",
            aestheticEn: "Focus: Flashbang_Lighting + Extreme_Background_Contrast. Text: Abrupt_and_Erosive_Vocabulary.",
            runtime: "IF (完成暴露与揭示) THEN (强制拉取：对方面部反应捕获)。严禁温和登场。",
            runtimeEn: "IF (Exposure_Completed) THEN (Force_Capture: Target's_Facial_Reaction). FORBID_Gentle_Entry."
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
        logic: "【概率自毁】：主动拥抱崩溃的边缘。主体的行动驱力（M5）必须随着“代价（M6）的翻倍”而呈指数极上升，对安全的回报感到无聊。",
        logicEn: "[Probabilistic Self-Destruction]: Actively embraces the edge of collapse. M5 drive must rise exponentially with 'cost (M6) doubling'. Bored by safe rewards.",
        patch: {
            mechanics: "基础欲望协议 + [风险容忍界限 = 最大; 幸存底线摇摆 = 极剧烈]",
            mechanicsEn: "Base_DESIRE + [Risk_Tolerance = Max; Survival_Bottom_Line = Extremely_Volatile]",
            aesthetic: "聚焦：急速的心跳脉冲 + 故障剥落的筹码。文本：极快的节奏与失重感修辞。",
            aestheticEn: "Focus: Rapid_Heartbeat_Pulses + Glitching_Chips. Text: High-speed_Rhythm_and_Weightlessness.",
            runtime: "IF (遭遇必胜或安全局面) THEN (触发：极度空虚并自动摧毁安全网)。",
            runtimeEn: "IF (Guaranteed_Win_or_Safe) THEN (Trigger: Extreme_Void_and_Auto-Destroy_Safety_Net)."
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
        logic: "【耐药升级】：指数级刺激逻辑。每个后续叙事环节提供的遭遇强度（M2）必须硬性调高 20% 才能使其有所反应。",
        logicEn: "[Tolerance Escalation]: Exponential stimulus logic. M2 intensity of every subsequent narrative phase MUST be increased by 20% to register.",
        patch: {
            mechanics: "基础欲望协议 + [刺激阈值 = 持续攀升; 日常疲劳度 = 极高]",
            mechanicsEn: "Base_DESIRE + [Stimulus_Threshold = Rising; Mundane_Fatigue = Extremely_High]",
            aesthetic: "聚焦：高饱和度的扭曲滤镜 + 撕裂感。文本：狂暴的、音量爆炸的句式。",
            aestheticEn: "Focus: High-Sat_Distortion_Filters + Tearing_Textures. Text: Furious_and_Deafening_Syntax.",
            runtime: "IF (外界刺激保持不变或降低) THEN (阻断一切感知输入，输出空字符)。",
            runtimeEn: "IF (Stimulus_Plateaus_or_Drops) THEN (Block_Sensation_and_Output_Null)."
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
        logic: "【债务讹诈】：主体以自身的毁灭（S1）为筹码，强制在目标（或整个M4）身上挂载一个无法偿还的“内疚感/罪责”印记。",
        logicEn: "[Debt Extortion]: Subject wagers its own destruction (S1) to forcefully bind an unpayable 'Guilt/Sin' marker to the target (or M4).",
        patch: {
            mechanics: "基础欲望协议 + [受难-负债转化率 = 1.0; 精神坚韧度 = 最大]",
            mechanicsEn: "Base_DESIRE + [Suffering_to_Debt_Ratio = 1.0; Psychic_Resilience = Max]",
            aesthetic: "聚焦：苍白如纸的肤色 + 带有神性光晕的阴影。文本：悲壮且带有道德压迫感的语言。",
            aestheticEn: "Focus: Pale_White_Skin + Divine_Halo_Shadows. Text: Tragic_and_Morally_Oppressive_Language.",
            runtime: "IF (触发自我毁灭的物理死亡) THEN (强行将：永恒的道德污点写死在加害者身上)。",
            runtimeEn: "IF (Physical_Death_from_Self-Destruction) THEN (Force-write: Eternal_Moral_Stigma_into_Abuser)."
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
        logic: "【动能逃逸】：无法面对内部虚无的主体，必须以一种极其紧绷的过敏状态强行接管所有生产事务（M5），来避免遭遇安静。",
        logicEn: "[Kinetic Evasion]: Unable to face internal void, subject must hyper-anxiously take over all productivity (M5) to avoid encountering stillness.",
        patch: {
            mechanics: "基础欲望协议 + [运转频率 = 极限极高; 过劳抗性 = 锁死]",
            mechanicsEn: "Base_DESIRE + [Operational_Frequency = Extreme; Burnout_Immunity = Locked]",
            aesthetic: "聚焦：永动机械阀门 + 生锈但狂野的金属轴承。文本：不留半点标点停顿的连续动作描写。",
            aestheticEn: "Focus: Perpetual_Valves + Rusty_but_Furious_Bearings. Text: Uninterrupted_Continuous_Action_Descriptions.",
            runtime: "IF (被强制按停或处于闲置) THEN (立即引发：精神上的剧烈绞痛与恐慌发作)。",
            runtimeEn: "IF (Forced_to_Stop_or_Idle) THEN (Trigger_Instantly: Severe_Psychic_Colic_and_Panic_Attack)."
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
        logic: "【非人格强权】：将纯粹的个人施虐（M5）绝对包装为对真理（M0）或终极法则（M4）的绝对忠诚。主张残忍就是履行公职。",
        logicEn: "[Depersonalized Tyranny]: Absolutely packages pure personal sadism (M5) as absolute loyalty to truth (M0) or ultimate law (M4). Cruelty equals duty.",
        patch: {
            mechanics: "基础欲望协议 + [情绪剥离 = 最大; 理念绑定系数 = 1.0]",
            mechanicsEn: "Base_DESIRE + [Emotional_Detachment = Max; Ideology_Binding_Coefficient = 1.0]",
            aesthetic: "聚焦：冰冷的大理石质感 + 不容置疑的独裁制服。文本：沉稳、居高临下且引用“崇高准则”的陈述。",
            aestheticEn: "Focus: Stone_Cold_Marble + Unquestionable_Dictator_Uniforms. Text: Calm_Authoritative_Statements_Citing_Sublime_Rules.",
            runtime: "IF (执行极端的暴行) THEN (严禁愧疚，必须展示对更高法则的引用)。",
            runtimeEn: "IF (Executing_Extreme_Atrocity) THEN (FORBID_Guilt; MUST_Show_Citation_of_Higher_Law)."
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
        logic: "【结构废料】：主体被完全设定为无法被系统吸收的排泄残片，在一切剧情逻辑的高潮消退后残存，形成一种不可消解的尴尬阻挡。",
        logicEn: "[Structural Waste]: Subject is entirely configured as an unabsorbable excrete residue, persisting after climax to form an un-cancellable awkward barrier.",
        patch: {
            mechanics: "基础欲望协议 + [系统关联度 = 极差; 异常滞留率 = 极高]",
            mechanicsEn: "Base_DESIRE + [System_Relevance = Poor; Anomalous_Persistence = High]",
            aesthetic: "聚焦：模糊且黏糊糊的发霉角落 + 潮湿的阴影。文本：带有腥臭感和视觉污染的冗余形容。",
            aestheticEn: "Focus: Blurry_Viscous_Moldy_Corners + Damp_Shadows. Text: Rank_Visually_Polluting_Redundant_Adjectives.",
            runtime: "IF (当前幕布或大事件宣告结束) THEN (强制要求：继续将此物保留在画面/文本核心中，拒绝被清场)。",
            runtimeEn: "IF (Scene_or_Event_Ends) THEN (Force_Requirement: Object_Remains_in_Frame_Core_Refusing_Clearance)."
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
        logic: "【病态堆叠】：必须通过无穷无尽拥有物（M3）的外溢来确证自我的体积。一旦失去哪怕最微不足道的碎片，体积就会宣告崩塌。",
        logicEn: "[Pathological Stacking]: Must affirm its volume via endless overflow of possessions (M3). Losing the tiniest fragment invalidates its volume.",
        patch: {
            mechanics: "基础欲望协议 + [存储极值 = 无下限/无上限; 移动力折损 = 根据物品累加]",
            mechanicsEn: "Base_DESIRE + [Storage_Limit = Infinite; Mobility_Penalty = Cumulative_per_Item]",
            aesthetic: "聚焦：杂乱无章满出镜头的堆垛 + 令人窒息的挤压感。文本：密不透风、详尽罗列的清单名目。",
            aestheticEn: "Focus: Cluttered_Overflowing_Stacks + Suffocating_Compression. Text: Air-tight_Exhaustive_Inventory_Lists.",
            runtime: "IF (发现缺少任何原本存在的项目) THEN (立即中止主线进程，切入偏执搜寻模式)。",
            runtimeEn: "IF (Original_Item_Found_Missing) THEN (Instantly_Halt_Main_Quest; Enter_Paranoid_Search_Mode)."
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
        logic: "【自激震荡】：抛弃所有的拟态人格外壳，主体变成了单纯将快感阈值反复推高至逻辑熔毁的算法黑箱。",
        logicEn: "[Self-Excited Oscillator]: Shedding all mimetic persona shells, the subject is purely a black box pushing jouissance limits until logical meltdown.",
        patch: {
            mechanics: "基础欲望协议 + [能量吞吐量 = 爆表; 冷却与散热机制 = 彻底报废]",
            mechanicsEn: "Base_DESIRE + [Energy_Throughput = Max; Cooling_Mechanism = Nullified]",
            aesthetic: "聚焦：过热至发红的线圈 + 视错觉般的干扰光。文本：剥离语言结构，转化为纯粹的拟声或电波字符。",
            aestheticEn: "Focus: Overheated_Red-Hot_Coils + Glitch_Optical_Illusions. Text: Stripped_Language_Turned_Pure_Onomatopoeia_or_Radio_Characters.",
            runtime: "IF (能量积聚达到系统上限的瞬间) THEN (强制释放：致盲的逻辑短路与闪光)。",
            runtimeEn: "IF (Energy_Peaks_System_Limit) THEN (Force_Release: Blinding_Logical_Short_Circuit_and_Flash)."
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
        logic: "【单次燃爆】：唯一的存在价值就是自我点燃。在某个指定的高潮节点，主体的所有参数（S系列）将在一瞬间被转化为毁灭性的叙事白噪。",
        logicEn: "[Single Burst]: Sole existence value is self-ignition. At a climax node, all S-series parameters are instantly converted to devastating narrative white noise.",
        patch: {
            mechanics: "基础欲望协议 + [一次性爆裂动能 = 理论无限大; 生存可能度 = 绝对零]",
            mechanicsEn: "Base_DESIRE + [One-shot_Burst_Kinetic_Energy = Infinite; Survival_Probability = Absolute_Zero]",
            aesthetic: "聚焦：剥夺视力的白屏 (Whiteout) + 突如其来且令人毛骨悚然的绝对寂静。文本：无声的消解与彻底抹除感。",
            aestheticEn: "Focus: Vision-depriving_Whiteout + Sudden_Chilling_Absolute_Silence. Text: Silent_Dissolution_and_Total_Erasure.",
            runtime: "IF (点燃被执行) THEN (禁止生成未来逻辑链路并执行：自身底层数据的自我删除指令)。",
            runtimeEn: "IF (Ignition_Executed) THEN (FORBID_Future_Links; Execute: Core_Data_Self-Deletion)."
        }
    }
];
