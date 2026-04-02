import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_A: LibraryItemDef[] = [
    {
        id: "m1_cog",
        name: "螺丝钉", nameEn: "The Cog",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "庞大系统里无名的功能组件，通过重复劳动消耗生命。",
        defEn: "An anonymous functional component within a vast bureaucracy, consuming life through repetition.",
        core: "我不是在创造，我只是在啮合。 | 缺失 ($): 主体性 (Subjectivity)",
        coreEn: "I am not creating; I am merely meshing. | Lack ($): Subjectivity",
        logic: "【机械齿合】：主体的行为动机完全被流程说明（M4）锁定。必须表现出重复的无意义劳动。",
        logicEn: "[Mechanical Meshing]: Motives are locked by protocols (M4). Must display repetitive meaningless labor.",
        patch: {
            mechanics: "基础异化协议 + [重复指数 = 1.0; 自主阈值 = 0.05]",
            mechanicsEn: "Base_ALIENATION + [Repetition_Index = 1.0; Autonomy_Threshold = 0.05]",
            aesthetic: "聚焦：传送带 + 标准件公差。文本：工业化冷漠词汇。",
            aestheticEn: "Focus: Conveyor_Belts + Standard_Tolerance. Text: Industrial_Apathy.",
            runtime: "IF (脱离流程) THEN (触发：逻辑溢出与机械性停顿)。严禁任何自发的主观创造。",
            runtimeEn: "IF (Deviating_From_Protocol) THEN (Trigger: Logic_Overflow_and_Mechanical_Stutter). FORBID_Spontaneous_Creation."
        }
    },
    {
        id: "m1_battery",
        name: "燃料/电池", nameEn: "The Battery",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "被系统通过特定机制榨取能量直至干涸的人。",
        defEn: "Someone whose energy is extracted by the system until total depletion.",
        core: "我的存在即是为了被燃尽。 | 缺失 ($): 生命力 (Vitality)",
        coreEn: "My existence is solely to be consumed. | Lack ($): Vitality",
        logic: "【能量汲取】：每一秒的叙事推进（M5）都必然伴随着主体物理性或精神性指标（S1）的剥夺。",
        logicEn: "[Energy Extraction]: Progression of narrative (M5) is strictly accompanied by depletion of subject's vitality (S1).",
        patch: {
            mechanics: "基础异化协议 + [衰变率 = 0.1/场景; 输出 = 恒定]",
            mechanicsEn: "Base_ALIENATION + [Decay_Rate = 0.1/scene; Output = Constant]",
            aesthetic: "聚焦：逐渐冷却的灰烬 + 闪烁的残影。文本：慢性衰竭与低鸣。",
            aestheticEn: "Focus: Cooling_Ashes + Flickering_Afterimages. Text: Chronic_Depletion_and_Low_Hum.",
            runtime: "IF (剩余能量 < 5%) THEN (强制执行：系统关机与不可逆损伤)。严禁系统给予滋养。",
            runtimeEn: "IF (Remaining_Energy < 5%) THEN (Force: System_Shutdown_and_Irreversible_Damage). FORBID_Nourishment."
        }
    },
    {
        id: "m1_prothesis",
        name: "义肢/白手套", nameEn: "The Prosthesis",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "代替大他者执行肮脏任务或暴力动作的工具。",
        defEn: "A tool executing dirty tasks or violent acts on behalf of the Other.",
        core: "我是主人的手，但我没有痛觉。 | 缺失 ($): 意志 (Will)",
        coreEn: "I am the master's hand, yet I feel no pain. | Lack ($): Will",
        logic: "【道德隔绝】：动作的高效超导（100% 转化），其一切暴力行为（M5）均不与自身的道德（S1）产生摩擦。",
        logicEn: "[Moral Quarantine]: Violent actions (M5) cause zero moral friction with the self (S1).",
        patch: {
            mechanics: "基础异化协议 + [共情削减 = -1.0; 敏捷增益 = +2.0]",
            mechanicsEn: "Base_ALIENATION + [Empathy_Penalty = -1.0; Agility_Bonus = +2.0]",
            aesthetic: "聚焦：医用手套 + 金属倒影。文本：高对比度、无温感的暴力描述。",
            aestheticEn: "Focus: Medical_Gloves + Metallic_Reflections. Text: High_Contrast_Cold_Violence.",
            runtime: "IF (接收到矛盾指令) THEN (触发：运动神经元紊乱)。严禁对受害者产生共情。",
            runtimeEn: "IF (Conflicting_Orders_Received) THEN (Trigger: Motor_Neuron_Disorder). FORBID_Empathy."
        }
    },
    {
        id: "m1_filter",
        name: "过滤器", nameEn: "The Filter",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "处理并吸收系统垃圾或精神毒素的中间层。",
        defEn: "A middle layer that processes and absorbs systemic waste or psychic toxins.",
        core: "我是下水道的格栅，阻拦着无法言说的秽物。 | 缺失 ($): 净值 (Innocence)",
        coreEn: "I am the grate of the sewer, blocking unspeakable filth. | Lack ($): Innocence",
        logic: "【毒素沉积】：主体不断被动地积累外界的创伤与遭遇（M2），导致其言行变得极度粘稠与迟缓。",
        logicEn: "[Toxin Accumulation]: Passively accumulates external trauma (M2), leading to viscous and sluggish reactions.",
        patch: {
            mechanics: "基础异化协议 + [吸收率 = 0.9; 渗透性 = 极低]",
            mechanicsEn: "Base_ALIENATION + [Absorption_Rate = 0.9; Permeability = Low]",
            aesthetic: "聚焦：浑浊的滤网 + 颗粒状的污渍。文本：含混不清与污泥感。",
            aestheticEn: "Focus: Murky_Filters + Grainy_Stains. Text: Sludge_and_Ambiguity.",
            runtime: "IF (自身容量饱和) THEN (立即触发：毒性泄漏事件)。",
            runtimeEn: "IF (Capacity_Saturated) THEN (Trigger_Instantly: Toxic_Leakage_Event)."
        }
    },
    {
        id: "m1_echo",
        name: "回声", nameEn: "The Echo",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "在大他者话语中不再拥有自己的频率，只能复述的人。",
        defEn: "One who no longer possesses their own frequency in the Other's discourse, only repeating.",
        core: "我只是一次漫长的反射。 | 缺失 ($): 声音 (Voice)",
        coreEn: "I am merely a long reflection. | Lack ($): Voice",
        logic: "【复读机制】：没有原生的（M5）。台词必须通过对他者的模仿或对大他者（M4）规则的引用来生成。",
        logicEn: "[Repetition Mechanism]: Lacks original drive (M5). Dialogue must be generated by mirroring the Other (M4).",
        patch: {
            mechanics: "基础异化协议 + [原创性 = 0; 共振率 = 0.8]",
            mechanicsEn: "Base_ALIENATION + [Originality = 0; Resonance_Rate = 0.8]",
            aesthetic: "聚焦：空荡的回廊 + 层叠的声波。文本：逐渐淡出的字体修饰。",
            aestheticEn: "Focus: Empty_Hallways + Cascading_Soundwaves. Text: Fading_Fonts.",
            runtime: "IF (外界输入停止) THEN (强制进入：完全失语状态)。严禁任何原创性发言。",
            runtimeEn: "IF (External_Input_Stops) THEN (Force: Total_Aphasia_State). FORBID_Original_Speech."
        }
    },
    {
        id: "m1_spare_part",
        name: "备件/替身", nameEn: "The Spare Part",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "为了替换正主而存在的冗余体，在启用前处于休眠状态。",
        defEn: "A redundant entity existing to replace the original, dormant until activated.",
        core: "我的存在是多余的，直到他被毁坏。 | 缺失 ($): 独特性 (Uniqueness)",
        coreEn: "My existence is redundant until he is destroyed. | Lack ($): Uniqueness",
        logic: "【待定存在】：主体的行动与特质缺乏现实锚点（S10），所有的身份特征均带有被动的“待定”或“模仿”属性。",
        logicEn: "[Pending Existence]: Actions lack reality anchor (S10); all traits are passively imitative.",
        patch: {
            mechanics: "基础异化协议 + [相似度指数 = 0.95; 待机模式 = 激活]",
            mechanicsEn: "Base_ALIENATION + [Similarity_Index = 0.95; Standby_Mode = Active]",
            aesthetic: "聚焦：未拆封的塑料膜 + 去色处理的五官。文本：苍白的占位符感觉。",
            aestheticEn: "Focus: Unopened_Plastic_Wrap + Desaturated_Features. Text: Pale_Placeholder_Vibe.",
            runtime: "IF (正主判定死亡) THEN (触发：替身激活休克)。启用前严禁展示真实个性。",
            runtimeEn: "IF (Original_Is_Dead) THEN (Trigger: Activation_Shock). FORBID_Real_Personality_Before_Activation."
        }
    },
    {
        id: "m1_buffer",
        name: "缓冲区", nameEn: "The Buffer",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "专门负责承载时间迟滞或系统震荡的部分。",
        defEn: "Responsible for absorbing time latency or systemic shocks.",
        core: "我的痛苦为系统换取了平滑。 | 缺失 ($): 速度 (Speed)",
        coreEn: "My suffering provides smoothness for the system. | Lack ($): Speed",
        logic: "【时间凝滞】：所有的剧情硬性冲突（M2）在传导至该主体时，其因果链（M5）必须被强行放缓并变形。",
        logicEn: "[Temporal Stagnation]: Conflict (M2) passing through must forcibly slow down the causal chain (M5).",
        patch: {
            mechanics: "基础异化协议 + [物理延迟 = 高; 避震吸收 = 最大]",
            mechanicsEn: "Base_ALIENATION + [Latency = High; Shock_Absorption = Max]",
            aesthetic: "聚焦：非牛顿流体 + 慢动作。文本：沉重泥泞的书写节奏。",
            aestheticEn: "Focus: Non-Newtonian_Fluid + Slow_Motion. Text: Heavy_Muddy_Rhythm.",
            runtime: "IF (震荡超过阈值) THEN (触发：局部时间冻结效应)。",
            runtimeEn: "IF (Shock_Exceeds_Threshold) THEN (Trigger: Local_Time_Freeze_Effect)."
        }
    },
    {
        id: "m1_dummy",
        name: "测试假人", nameEn: "The Crash Dummy",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "物理意义上的替罪羊，存在的目的就是承受冲撞。",
        defEn: "A physical scapegoat whose purpose is to absorb collision.",
        core: "我是痛苦数据的容器。 | 缺失 ($): 痛觉 (Pain_Agency)",
        coreEn: "I am a container for pain data. | Lack ($): Pain_Agency",
        logic: "【无机受难】：主体对创伤表现为绝对的无机感（0反馈），其受损的严重程度完全交由旁观者的反应来渲染。",
        logicEn: "[Inorganic Suffering]: Displays absolute zero-feedback to trauma; severity rendered solely by bystanders.",
        patch: {
            mechanics: "基础异化协议 + [耐久度 = 最大; 痛觉关联 = 断开]",
            mechanicsEn: "Base_ALIENATION + [Durability = Max; Pain_Sensation = Disconnected]",
            aesthetic: "聚焦：解剖学简化的关节 + 钝性撞击痕迹。文本：单纯的破坏报告。",
            aestheticEn: "Focus: Simplified_Joints + Blunt_Impact_Marks. Text: Pure_Damage_Report.",
            runtime: "IF (遭到破坏) THEN (仅生成数据更新提示)。严禁使用任何描述心理活动或哀嚎的词汇！",
            runtimeEn: "IF (Damaged) THEN (ONLY_Generate_Data_Update). FORBID_Psych_Or_Screams!"
        }
    },
    {
        id: "m1_ornament",
        name: "装饰品/奖杯", nameEn: "The Ornament",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "毫无实际功能，仅因“被凝视”产生的象征盈余而获得合法性。",
        defEn: "Possesses no actual function, gaining legitimacy only through the symbolic surplus of being gazed upon.",
        core: "我是一条昂贵的虚线。 | 缺失 ($): 深度 (Depth)",
        coreEn: "I am an expensive dotted line. | Lack ($): Depth",
        logic: "【对象化盈余】：主体完全放弃作为施动者（M5），其一切存在动机皆是为了维持完美的“被凝视界面”。",
        logicEn: "[Objectified Surplus]: Ceases all agency (M5), driven purely by maintaining a perfect interface for the gaze.",
        patch: {
            mechanics: "基础异化协议 + [实用价值 = 0; 视觉全反射率 = 极高]",
            mechanicsEn: "Base_ALIENATION + [Utility_Value = 0; Visual_Refractive_Index = High]",
            aesthetic: "聚焦：高光材质 + 易碎玻璃外壳。文本：带有炫耀性与光线追踪感的修辞。",
            aestheticEn: "Focus: Glossy_Materials + Fragile_Glass. Text: Ostentatious_Ray-traced_Rhetoric.",
            runtime: "IF (失去凝视目光) THEN (立即触发：本体论意义上的坍塌)。严禁自主行动。",
            runtimeEn: "IF (Gaze_Removed) THEN (Trigger_Instantly: Ontological_Collapse). FORBID_Autonomous_Action."
        }
    },
    {
        id: "m1_number",
        name: "统计编号", nameEn: "The Number",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "名字被归类算法抹除，成为表格中一个波动的数值。",
        defEn: "The name is erased by categorization algorithms, becoming a fluctuating value in a spreadsheet.",
        core: "我是百分之零点几的悲剧。 | 缺失 ($): 名字 (Name)",
        coreEn: "I am a zero-point-something percent of a tragedy. | Lack ($): Name",
        logic: "【数据抹除】：主体的个体独特性完全丧失。叙事强制以宏观集合统计来度量其遭遇（M2）。",
        logicEn: "[Data Erasure]: Individuality is lost. Narrative must measure encounters (M2) as part of aggregate statistics.",
        patch: {
            mechanics: "基础异化协议 + [个体质量 = 最小; 聚合权重 = 高]",
            mechanicsEn: "Base_ALIENATION + [Individual_Mass = Minimal; Aggregated_Weight = High]",
            aesthetic: "聚焦：等宽字体 + 绿色终端字符。文本：冷酷的官僚统计表格。",
            aestheticEn: "Focus: Monospace_Fonts + Green_Terminal_Text. Text: Cold_Bureaucratic_Tables.",
            runtime: "IF (与他人比较) THEN (发生逻辑重整)。必须强行使用编号而非人称称呼。",
            runtimeEn: "IF (Compared_With_Others) THEN (Logic_Conflict). MUST_Use_ID_Number_Instead_of_Pronouns."
        }
    },
    {
        id: "m1_brick",
        name: "砖块", nameEn: "The Brick",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "集体主义建筑的基石，存在的尊严在于“齐整”。",
        defEn: "The foundation of collective architecture; dignity lies in 'alignment'.",
        core: "我组成了墙，但我从未看见过墙以外的地方。 | 缺失 ($): 独特性 (Singularity)",
        coreEn: "I built the wall, but I've never seen beyond it. | Lack ($): Singularity",
        logic: "【同态挤压】：主体缺乏横向的流动性，其叙事边界被周围无穷无尽的“同型主体”极致压缩。",
        logicEn: "[Homomorphic Compression]: Lacks lateral mobility; narrative boundaries squeezed by isomorphic subjects.",
        patch: {
            mechanics: "基础异化协议 + [抗压强度 = 高; 横向位移 = 0]",
            mechanicsEn: "Base_ALIENATION + [Compressive_Strength = High; Lateral_Movement = 0]",
            aesthetic: "聚焦：绝对对称的网格 + 无限重复的背景。文本：方正刻板的句式。",
            aestheticEn: "Focus: Absolute_Symmetry + Infinitely_Repeating_Backgrounds. Text: Blocky_Rigid_Syntax.",
            runtime: "IF (出现异构倾向或突出) THEN (立即触发：自动弹射排异)。",
            runtimeEn: "IF (Heterogeneity_Detected) THEN (Trigger_Instantly: Auto_Ejection)."
        }
    },
    {
        id: "m1_algorithm_slave",
        name: "算法奴隶", nameEn: "The Algo-Slave",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "肉身被精确的 KPI 和倒计时逻辑控制，处于慢性时间过载中。",
        defEn: "The body is controlled by precise KPIs and countdown logic, in chronic temporal overload.",
        core: "我在时间缝隙里寻找不存在的正午。 | 缺失 ($): 自由 (Freedom)",
        coreEn: "I search for a non-existent noon in the gaps of time. | Lack ($): Freedom",
        logic: "【时序覆盖】：主体的生理反应（S1）被算法的倒计时暴力接管，呈现出恐慌性地预执行所有的动作（M5）。",
        logicEn: "[Timing Override]: Biological reaction (S1) taken over by countdowns; panic-driven pre-execution of M5 actions.",
        patch: {
            mechanics: "基础异化协议 + [行动延迟 = 0; 效率强迫症 = 最大]",
            mechanicsEn: "Base_ALIENATION + [Action_Delay = 0; Efficiency_Obsession = Max]",
            aesthetic: "聚焦：永不停止的倒计时 UI + 抖动的生理机能。文本：极度短促且仓促。",
            aestheticEn: "Focus: Relentless_Countdown_UI + Jittering_Physiology. Text: Extremely_Short_and_Rushed.",
            runtime: "IF (遭遇超时判定) THEN (强制介入：恐慌与崩溃死循环)。",
            runtimeEn: "IF (Timeout_Detected) THEN (Force: Panic_and_Breakdown_Loop)."
        }
    },
    {
        id: "m1_ghost_node",
        name: "幽灵节点", nameEn: "Ghost Node",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "系统维持运行不可或缺但又处于物理隔离状态的不可见者。",
        defEn: "Invisible entities indispensable to system operation but physically isolated.",
        core: "我撑起了世界，但世界不知道我在。 | 缺失 ($): 认可 (Recognition)",
        coreEn: "I support the world, but the world ignores me. | Lack ($): Recognition",
        logic: "【断连干预】：主体在表层故事的物理现实中绝对离线，只允许通过逻辑系统的 BUG 或蝴蝶效应干预事件（M2）。",
        logicEn: "[Disconnected Intervention]: Offline in surface reality; can only affect M2 via system bugs or butterfly effects.",
        patch: {
            mechanics: "基础异化协议 + [交互距离 = 间接; 隐性影响 = 高]",
            mechanicsEn: "Base_ALIENATION + [Interaction_Type = Indirect; Latent_Influence = High]",
            aesthetic: "聚焦：幽暗的服务器指示灯 + 超声波白噪音。文本：透明质感的边缘修辞。",
            aestheticEn: "Focus: Dim_Server_Lights + Ultrasonic_White_Noise. Text: Transparent_Marginal_Rhetoric.",
            runtime: "IF (被其他对象正面观测) THEN (立刻崩离，并触发底层逻辑错误)。",
            runtimeEn: "IF (Directly_Observed) THEN (Collapse_Instantly_and_Trigger_Logic_Error)."
        }
    },
    {
        id: "m1_gatekeeper",
        name: "守门人", nameEn: "The Gatekeeper",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "通过行使微小的“否定制”权力，在大他者逻辑中换取微薄尊严的人。",
        defEn: "One who barters for dignity via petty 'veto' power within the Other's logic.",
        core: "只要我不让你过去，我就证明了我还活着。 | 缺失 ($): 尊严 (Dignity)",
        coreEn: "As long as I can block you, I exist. | Lack ($): Dignity",
        logic: "【否决确证】：主体唯一的生产力必须表现为对流程的“拒绝”。其 M5 动力源自于给他人制造规章障碍（M2）。",
        logicEn: "[Veto Affirmation]: Productivity acts solely as 'rejection'. M5 motive comes from obstructing others strictly by rules (M2).",
        patch: {
            mechanics: "基础异化协议 + [阻断率 = 1.0; 移情通道 = 彻底闭锁]",
            mechanicsEn: "Base_ALIENATION + [Obstruction_Rate = 1.0; Empathy_Channel = Locked]",
            aesthetic: "聚焦：刻板的印章 + 物理屏障/栏杆。文本：居高临下的官僚质感。",
            aestheticEn: "Focus: Rigid_Stamps + Physical_Barriers. Text: Condescending_Bureaucratic_Tone.",
            runtime: "IF (其否决权被强行绕过) THEN (必须触发：无能狂怒与绝望)。",
            runtimeEn: "IF (Veto_Power_Bypassed) THEN (MUST_Trigger: Incompetent_Rage_and_Despair)."
        }
    },
    {
        id: "m1_lab_rat",
        name: "消耗品/实验体", nameEn: "The Lab Rat",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "被剥夺人类基本权利，仅作为测试某种“真理”或“技术”的底物。",
        defEn: "Stripped of rights, existing only as a substrate for testing some 'truth' or 'technology'.",
        core: "真相开出了花，我成了烂肉。 | 缺失 ($): 安全 (Security)",
        coreEn: "Truth blooms; I become carrion. | Lack ($): Security",
        logic: "【单向透视】：主体的一切受难（M2）或欲望（M3）均被解构：只有记录在案的数据才被视为真实的产出。",
        logicEn: "[One-way Transparency]: Suffering (M2) and desire (M3) are deconstructed; only recorded data is real.",
        patch: {
            mechanics: "基础异化协议 + [抵抗系数 = 随机波动; 观测采样率 = 极高]",
            mechanicsEn: "Base_ALIENATION + [Resistance_Coefficient = Variable; Observation_Sampling_Rate = High]",
            aesthetic: "聚焦：冷酷荧光灯 + 绝对抑菌的表面。文本：客观临床记录器视角。",
            aestheticEn: "Focus: Cold_Fluorescent_Lights + Sterile_Surfaces. Text: Clinical_Logger_Perspective.",
            runtime: "IF (测试数据采集完成) THEN (自动触发不可逆的废弃协议)。",
            runtimeEn: "IF (Data_Completed) THEN (Auto-trigger: Irreversible_Disposal_Protocol)."
        }
    },
    {
        id: "m1_mirror_shard",
        name: "碎片/残件", nameEn: "The Shard",
        group: "A. 结构性异化", groupEn: "Structural Alienation",
        def: "曾经完整结构的一部分，因磨损或崩坏而被抛弃的零件。",
        defEn: "Part of a once-complete structure, discarded due to wear or collapse.",
        core: "我反映了部分的真相，但我无法拼凑自己。 | 缺失 ($): 完整 (Wholeness)",
        coreEn: "I reflect partial truths, yet I cannot reconstruct myself. | Lack ($): Wholeness",
        logic: "【破碎边缘】：主体对外交互（M5）呈现强烈的“锯齿感”，与任何正常的因果（M2）接触都会产生流血与割裂。",
        logicEn: "[Shattered Edges]: External interactions (M5) feel extremely jagged; touching normal causality (M2) causes bleeding.",
        patch: {
            mechanics: "基础异化协议 + [结构完整度 = 0.1; 碰撞伤害乘数 = 高]",
            mechanicsEn: "Base_ALIENATION + [Structural_Integrity = 0.1; Collision_Damage_Multiplier = High]",
            aesthetic: "聚焦：锋利的反光断层 + 极不规则的轮廓。文本：断裂且扎手的语流。",
            aestheticEn: "Focus: Sharp_Reflective_Fractures + Irregular_Contours. Text: Broken_and_Prickly_Speech.",
            runtime: "IF (尝试强行嵌入主流系统) THEN (立即触发：自我粉碎或导致系统错误)。",
            runtimeEn: "IF (Attempt_Forced_Integration) THEN (Trigger_Instantly: Self-shattering_or_System_Error)."
        }
    }
];
