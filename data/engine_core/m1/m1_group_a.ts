import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_A: LibraryItemDef[] = [
    {
        id: "m1_cog",
        name: "螺丝钉", nameEn: "The Cog",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "庞大系统里无名的功能组件，通过重复劳动消耗生命。",
        defEn: "An anonymous functional component within a vast bureaucracy, consuming life through repetition.",
        core: "我不是在创造，我只是在啮合。 | 缺失 ($): 主体性 (Subjectivity)",
        coreEn: "I am not creating; I am merely meshing. | Lack ($): Subjectivity",
        logic: "主体的行为动机完全被流程说明（M4）锁定。在没有指令的情况下表现为绝对的静默。",
        logicEn: "The subjective motive is locked by protocol (M4). Demonstrates absolute silence without command.",
        patch: {
            mechanics: "Repetition_Index = 1.0; Autonomy_Threshold = 0.05.",
            mechanicsEn: "Repetition_Index = 1.0; Autonomy_Threshold = 0.05.",
            aesthetic: "Focus_Depth: Narrow; Keywords: ['Tolerance', 'Alignment', 'Shift'].",
            aestheticEn: "Focus_Depth: Narrow; Keywords: ['Tolerance', 'Alignment', 'Shift'].",
            runtime: "Logic_Overflow: Trigger(Mechanical_Stutter).",
            runtimeEn: "Logic_Overflow: Trigger(Mechanical_Stutter)."
        }
    },
    {
        id: "m1_battery",
        name: "燃料/电池", nameEn: "The Battery",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "被系统通过特定机制榨取能量直至干涸的人。",
        defEn: "Someone whose energy is extracted by the system until total depletion.",
        core: "我的存在即是为了被燃尽。 | 缺失 ($): 生命力 (Vitality)",
        coreEn: "My existence is solely to be consumed. | Lack ($): Vitality",
        logic: "每一秒的叙事推进都伴随着物理性指标的递减（S1）。",
        logicEn: "Every second of narrative progression is accompanied by the depletion of physiological metrics (S1).",
        patch: {
            mechanics: "Decay_Rate = 0.1/scene; Output = Constant.",
            mechanicsEn: "Decay_Rate = 0.1/scene; Output = Constant.",
            aesthetic: "Gradient: Burning_to_Grey; Sound: Low_Hum.",
            aestheticEn: "Gradient: Burning_to_Grey; Sound: Low_Hum.",
            runtime: "Redline: IF (Energy < 5%) THEN Trigger(System_Shutdown).",
            runtimeEn: "Redline: IF (Energy < 5%) THEN Trigger(System_Shutdown)."
        }
    },
    {
        id: "m1_prothesis",
        name: "义肢/白手套", nameEn: "The Prosthesis",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "代替大他者执行肮脏任务或暴力动作的工具。",
        defEn: "A tool executing dirty tasks or violent acts on behalf of the Other.",
        core: "我是主人的手，但我没有痛觉。 | 缺失 ($): 意志 (Will)",
        coreEn: "I am the master's hand, yet I feel no pain. | Lack ($): Will",
        logic: "动作的高效超导（100% 转化），掩盖了其内部道德判断的归零。",
        logicEn: "Efficient superconductivity (100% conversion) masks its internal moral vacuum.",
        patch: {
            mechanics: "Agility_Bonus = +2.0; Empathy_Penalty = -1.0.",
            mechanicsEn: "Agility_Bonus = +2.0; Empathy_Penalty = -1.0.",
            aesthetic: "Visuals: High_Contrast/Cold; Texture: Metallic.",
            aestheticEn: "Visuals: High_Contrast/Cold; Texture: Metallic.",
            runtime: "Glitch: IF (Order_Conflict) THEN Trigger(Motor_Seizure).",
            runtimeEn: "Glitch: IF (Order_Conflict) THEN Trigger(Motor_Seizure)."
        }
    },
    {
        id: "m1_filter",
        name: "过滤器", nameEn: "The Filter",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "处理并吸收系统垃圾或精神毒素的中间层。",
        defEn: "A middle layer that processes and absorbs systemic waste or psychic toxins.",
        core: "我是下水道的格栅，阻拦着无法言说的秽物。 | 缺失 ($): 净值 (Innocence)",
        coreEn: "I am the grate of the sewer, blocking unspeakable filth. | Lack ($): Innocence",
        logic: "主体表现为极端的粘稠度，因为它在不断积累外界的 M2（遭遇）碎片。",
        logicEn: "Subject exhibits extreme viscosity, continuously accumulating fragments of M2 encounters.",
        patch: {
            mechanics: "Absorption = 0.9; Permeability = Low.",
            mechanicsEn: "Absorption = 0.9; Permeability = Low.",
            aesthetic: "Visuals: Blurred/Grainy; Palette: Muddy.",
            aestheticEn: "Visuals: Blurred/Grainy; Palette: Muddy.",
            runtime: "Overflow: IF (Saturate) THEN Trigger(Toxic_Leakage).",
            runtimeEn: "Overflow: IF (Saturate) THEN Trigger(Toxic_Leakage)."
        }
    },
    {
        id: "m1_echo",
        name: "回声", nameEn: "The Echo",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "在大他者话语中不再拥有自己的频率，只能复述的人。",
        defEn: "One who no longer possesses their own frequency in the Other's discourse, only repeating.",
        core: "我只是一次漫长的反射。 | 缺失 ($): 声音 (Voice)",
        coreEn: "I am merely a long reflection. | Lack ($): Voice",
        logic: "文本生成逻辑：台词通过对他者的模仿或对规则的引用来生成。",
        logicEn: "Text generation logic: dialogue is generated via imitation of the Other or citation of rules.",
        patch: {
            mechanics: "Originality = 0; Resonance_Rate = 0.8.",
            mechanicsEn: "Originality = 0; Resonance_Rate = 0.8.",
            aesthetic: "Audio: Reverberation; Font: Fading.",
            aestheticEn: "Audio: Reverberation; Font: Fading.",
            runtime: "Check: IF (No_Input) THEN Trigger(Total_Aphasia).",
            runtimeEn: "Check: IF (No_Input) THEN Trigger(Total_Aphasia)."
        }
    },
    {
        id: "m1_spare_part",
        name: "备件/替身", nameEn: "The Spare Part",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "为了替换正主而存在的冗余体，在启用前处于休眠状态。",
        defEn: "A redundant entity existing to replace the original, dormant until activated.",
        core: "我的存在是多余的，直到他被毁坏。 | 缺失 ($): 独特性 (Uniqueness)",
        coreEn: "My existence is redundant until he is destroyed. | Lack ($): Uniqueness",
        logic: "主体的行动缺乏深度感（S10），其所有特征都带有“待定”或“模仿”的属性。",
        logicEn: "Subject actions lack depth (S10); all traits are 'pending' or 'imitative'.",
        patch: {
            mechanics: "Similarity_Index = 0.95; Standby_Mode = Active.",
            mechanicsEn: "Similarity_Index = 0.95; Standby_Mode = Active.",
            aesthetic: "Visuals: Desaturated; Detail: Blank.",
            aestheticEn: "Visuals: Desaturated; Detail: Blank.",
            runtime: "Trigger: IF (Original.Dead) THEN Apply(Activation_Shock).",
            runtimeEn: "Trigger: IF (Original.Dead) THEN Apply(Activation_Shock)."
        }
    },
    {
        id: "m1_buffer",
        name: "缓冲区", nameEn: "The Buffer",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "专门负责承载时间迟滞或系统震荡的部分。",
        defEn: "Responsible for absorbing time latency or systemic shocks.",
        core: "我的痛苦为系统换取了平滑。 | 缺失 ($): 速度 (Speed)",
        coreEn: "My suffering provides smoothness for the system. | Lack ($): Speed",
        logic: "所有的剧情冲突（M2）在传导至该主体时，逻辑上必须发生减速或拖延。",
        logicEn: "All narrative conflicts (M2) must logically slow down or delay when passing through this subject.",
        patch: {
            mechanics: "Latency = High; Shock_Absorption = Max.",
            mechanicsEn: "Latency = High; Shock_Absorption = Max.",
            aesthetic: "Rhythm: Slow/Heavy; Texture: Gelatinous.",
            aestheticEn: "Rhythm: Slow/Heavy; Texture: Gelatinous.",
            runtime: "Lag: IF (Shock > Threshold) THEN Trigger(Time_Freeze).",
            runtimeEn: "Lag: IF (Shock > Threshold) THEN Trigger(Time_Freeze)."
        }
    },
    {
        id: "m1_dummy",
        name: "测试假人", nameEn: "The Crash Dummy",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "物理意义上的替罪羊，存在的目的就是承受冲撞。",
        defEn: "A physical scapegoat whose purpose is to absorb collision.",
        core: "我是痛苦数据的容器。 | 缺失 ($): 痛觉 (Pain_Agency)",
        coreEn: "I am a container for pain data. | Lack ($): Pain_Agency",
        logic: "主体对创伤表现为绝对的无机感，创伤的惨烈由旁观者的反应来渲染。",
        logicEn: "Subject reacts with absolute inorganicity to trauma; severity is rendered via witness reactions.",
        patch: {
            mechanics: "Durability = Max; Sensation = Disconnected.",
            mechanicsEn: "Durability = Max; Sensation = Disconnected.",
            aesthetic: "Visuals: Anatomically_Simplified; Noise: Blunt.",
            aestheticEn: "Visuals: Anatomically_Simplified; Noise: Blunt.",
            runtime: "Data_Log: IF (Damage) THEN Trigger(Metric_Update) only.",
            runtimeEn: "Data_Log: IF (Damage) THEN Trigger(Metric_Update) only."
        }
    },
    {
        id: "m1_ornament",
        name: "装饰品/奖杯", nameEn: "The Ornament",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "毫无实际功能，仅因“被凝视”产生的象征盈余而获得合法性。",
        defEn: "Possesses no actual function, gaining legitimacy only through the symbolic surplus of being gazed upon.",
        core: "我是一条昂贵的虚线。 | 缺失 ($): 深度 (Depth)",
        coreEn: "I am an expensive dotted line. | Lack ($): Depth",
        logic: "主体的 M5（驱动力）完全来自于维持“外观完美”的恐惧。",
        logicEn: "Subject's M5 (drive) arises entirely from the fear of maintaining 'visual perfection'.",
        patch: {
            mechanics: "Utility = 0; Visual_Refractive_Index = High.",
            mechanicsEn: "Utility = 0; Visual_Refractive_Index = High.",
            aesthetic: "Texture: Glossy/Fragile; Rendering: Ray-traced.",
            aestheticEn: "Texture: Glossy/Fragile; Rendering: Ray-traced.",
            runtime: "Breakdown: IF (Gaze_Removed) THEN Trigger(Ontological_Collapse).",
            runtimeEn: "Breakdown: IF (Gaze_Removed) THEN Trigger(Ontological_Collapse)."
        }
    },
    {
        id: "m1_number",
        name: "统计编号", nameEn: "The Number",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "名字被归类算法抹除，成为表格中一个波动的数值。",
        defEn: "The name is erased by categorization algorithms, becoming a fluctuating value in a spreadsheet.",
        core: "我是百分之零点几的悲剧。 | 缺失 ($): 名字 (Name)",
        coreEn: "I am a zero-point-something percent of a tragedy. | Lack ($): Name",
        logic: "文本生成模式：强制使用其编号而非人称代词，拒绝对其进行个性化心理描写。",
        logicEn: "Text generation: enforce the use of ID numbers over pronouns; reject personalized psychological descriptions.",
        patch: {
            mechanics: "Individual_Mass = Minimal; Aggregated_Weight = High.",
            mechanicsEn: "Individual_Mass = Minimal; Aggregated_Weight = High.",
            aesthetic: "Font: Monospace/Digital; Color: Terminal_Green.",
            aestheticEn: "Font: Monospace/Digital; Color: Terminal_Green.",
            runtime: "Reset: IF (Duplicate_Found) THEN Trigger(Logic_Conflict).",
            runtimeEn: "Reset: IF (Duplicate_Found) THEN Trigger(Logic_Conflict)."
        }
    },
    {
        id: "m1_brick",
        name: "砖块", nameEn: "The Brick",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "集体主义建筑的基石，存在的尊严在于“齐整”。",
        defEn: "The foundation of collective architecture; dignity lies in 'alignment'.",
        core: "我组成了墙，但我从未看见过墙以外的地方。 | 缺失 ($): 独特性 (Singularity)",
        coreEn: "I built the wall, but I've never seen beyond it. | Lack ($): Singularity",
        logic: "主体的叙事边界被周围的“同型主体”极度挤压。",
        logicEn: "Subject's narrative boundaries are extremely compressed by 'isomorphic subjects'.",
        patch: {
            mechanics: "Compressive_Strength = High; Lateral_Movement = 0.",
            mechanicsEn: "Compressive_Strength = High; Lateral_Movement = 0.",
            aesthetic: "Symmetry: Absolute; Background: Repetitive.",
            aestheticEn: "Symmetry: Absolute; Background: Repetitive.",
            runtime: "Glitch: IF (Heterogeneity > 0) THEN Trigger(Auto_Ejection).",
            runtimeEn: "Glitch: IF (Heterogeneity > 0) THEN Trigger(Auto_Ejection)."
        }
    },
    {
        id: "m1_algorithm_slave",
        name: "算法奴隶", nameEn: "The Algo-Slave",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "肉身被精确的 KPI 和倒计时逻辑控制，处于慢性时间过载中。",
        defEn: "The body is controlled by precise KPIs and countdown logic, in chronic temporal overload.",
        core: "我在时间缝隙里寻找不存在的正午。 | 缺失 ($): 自由 (Freedom)",
        coreEn: "I search for a non-existent noon in the gaps of time. | Lack ($): Freedom",
        logic: "生理叙事（S1）被算法时序强制覆盖，主体对现实的反应极度仓促。",
        logicEn: "Biological narrative (S1) is overwritten by algorithmic timing; subject reactions are extremely rushed.",
        patch: {
            mechanics: "Action_Delay = 0; Efficiency_Obsession = Max.",
            mechanicsEn: "Action_Delay = 0; Efficiency_Obsession = Max.",
            aesthetic: "Overlay: Running_Timer; Texture: Jittery.",
            aestheticEn: "Overlay: Running_Timer; Texture: Jittery.",
            runtime: "Crash: IF (Timeout) THEN Trigger(Panic_Loop).",
            runtimeEn: "Crash: IF (Timeout) THEN Trigger(Panic_Loop)."
        }
    },
    {
        id: "m1_ghost_node",
        name: "幽灵节点", nameEn: "Ghost Node",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "系统维持运行不可或缺但又处于物理隔离状态的不可见者。",
        defEn: "Invisible entities indispensable to system operation but physically isolated.",
        core: "我撑起了世界，但世界不知道我在。 | 缺失 ($): 认可 (Recognition)",
        coreEn: "I support the world, but the world ignores me. | Lack ($): Recognition",
        logic: "主体在物理现实中始终处于“离线”状态，只能通过 bug 间接干预叙事。",
        logicEn: "Subject is consistently 'offline'; can only indirectly intervene via bugs.",
        patch: {
            mechanics: "Interaction = Indirect; Influence = Latent.",
            mechanicsEn: "Interaction = Indirect; Influence = Latent.",
            aesthetic: "Opacity: Low; Sound: Ultrasonic_Noise.",
            aestheticEn: "Opacity: Low; Sound: Ultrasonic_Noise.",
            runtime: "Expose: IF (Observation) THEN Trigger(Logic_Error).",
            runtimeEn: "Expose: IF (Observation) THEN Trigger(Logic_Error)."
        }
    },
    {
        id: "m1_gatekeeper",
        name: "守门人", nameEn: "The Gatekeeper",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "通过行使微小的“否定制”权力，在大他者逻辑中换取微薄尊严的人。",
        defEn: "One who barters for dignity via petty 'veto' power within the Other's logic.",
        core: "只要我不让你过去，我就证明了我还活着。 | 缺失 ($): 尊严 (Dignity)",
        coreEn: "As long as I can block you, I exist. | Lack ($): Dignity",
        logic: "主体的唯一产出就是“拒绝”，其所有的 M5 动作都指向对他人的否定。",
        logicEn: "Subject's only output is 'rejection'; all M5 actions point to the negation of others.",
        patch: {
            mechanics: "Obstruction = 1.0; Empathy = Closed.",
            mechanicsEn: "Obstruction = 1.0; Empathy = Closed.",
            aesthetic: "Perspective: Upward; Props: Barriers/Stamps.",
            aestheticEn: "Perspective: Upward; Props: Barriers/Stamps.",
            runtime: "Bypass: IF (Authority_Bypassed) THEN Trigger(Aggressive_Despair).",
            runtimeEn: "Bypass: IF (Authority_Bypassed) THEN Trigger(Aggressive_Despair)."
        }
    },
    {
        id: "m1_lab_rat",
        name: "消耗品/实验体", nameEn: "The Lab Rat",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "被剥夺人类基本权利，仅作为测试某种“真理”或“技术”的底物。",
        defEn: "Stripped of rights, existing only as a substrate for testing some 'truth' or 'technology'.",
        core: "真相开出了花，我成了烂肉。 | 缺失 ($): 安全 (Security)",
        coreEn: "Truth blooms; I become carrion. | Lack ($): Security",
        logic: "主体处于单纯的“观察视差”中，所有的受难都被翻译为“数据”。",
        logicEn: "Subject exists within pure 'observational parallax'; all suffering is translated into 'data'.",
        patch: {
            mechanics: "Resistance = Variable; Observation_Rate = High.",
            mechanicsEn: "Resistance = Variable; Observation_Rate = High.",
            aesthetic: "Aura: Fluorescent/Clinical; Texture: Sterile.",
            aestheticEn: "Aura: Fluorescent/Clinical; Texture: Sterile.",
            runtime: "Outcome: IF (Data_Completed) THEN Apply(Disposal_Protocol).",
            runtimeEn: "Outcome: IF (Data_Completed) THEN Apply(Disposal_Protocol)."
        }
    },
    {
        id: "m1_mirror_shard",
        name: "碎片/残件", nameEn: "The Shard",
        group: "A. 结构性异化", groupEn: "Functional Alienation",
        def: "曾经完整结构的一部分，因磨损或崩坏而被抛弃的零件。",
        defEn: "Part of a once-complete structure, discarded due to wear or collapse.",
        core: "我反映了部分的真相，但我无法拼凑自己。 | 缺失 ($): 完整 (Wholeness)",
        coreEn: "I reflect partial truths, yet I cannot reconstruct myself. | Lack ($): Wholeness",
        logic: "主体的 M1表现为强烈的“锯齿状”，与任何环境都无法顺滑贴合。",
        logicEn: "Subject's M1 exhibits high 'jaggies', unable to smoothly fit any environment.",
        patch: {
            mechanics: "Integrity = 0.1; Collision_Damage = High.",
            mechanicsEn: "Integrity = 0.1; Collision_Damage = High.",
            aesthetic: "Reflections: Sharp/Fractured; Shape: Irregular.",
            aestheticEn: "Reflections: Sharp/Fractured; Shape: Irregular.",
            runtime: "Snap: IF (Attempt_Joint) THEN Trigger(Brittle_Failure).",
            runtimeEn: "Snap: IF (Attempt_Joint) THEN Trigger(Brittle_Failure)."
        }
    }
];
