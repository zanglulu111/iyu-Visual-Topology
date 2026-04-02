import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_E: LibraryItemDef[] = [
    {
        id: "m1_amnesiac",
        name: "遗忘者", nameEn: "The Amnesiac",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "失去了所有的背景数据，由于没有过去，他的当下极度轻盈且危险。",
        defEn: "Lost all background data; lack of past makes the present dangerously light.",
        core: "我的昨天在大雪里封冻了。 | 缺失 ($): 历史 (Past)",
        coreEn: "My yesterday is frozen in the snow. | Lack ($): Past",
        logic: "【零缓存漂浮体】：零缓存力学。主体无法通过过去的经验来优化当前的 M5（行动）。失去了所有的背景数据，由于没有过去，他的当下极度轻盈且危险。",
        logicEn: "[Zero-Cache Floater]: Zero-cache mechanics. Cannot optimize current M5 actions via past experience. All background data lost; lack of past makes the present dangerously light.",
        patch: {
            mechanics: "基础断裂协议 + [经验权重 = 0; 适应性 = 高; 历史缓存 = 彻底清空]",
            mechanicsEn: "Base_RUPTURE + [Experience_Weight = 0; Adaptability = High; History_Cache = Wiped]",
            aesthetic: "聚焦：过曝的白色虚空 + 无阴影的平坦光照。文本：没有任何指涉过去的、如新生儿般干净的无历史叙述。",
            aestheticEn: "Focus: Overexposed_White_Void + Shadowless_Flat_Light. Text: History-Free_Newborn-Clean_Narration.",
            runtime: "IF (主体进入睡眠或失去意识) THEN (强制执行：变量全部擦除，清空所有累积记忆)。严禁任何经验的持续存储。",
            runtimeEn: "IF (Sleep_or_Unconsciousness) THEN (Force: Variable_Wipe_Clear_All). FORBID_Persistent_Experience_Storage."
        }
    },
    {
        id: "m1_eternal_recurrence",
        name: "永恒轮回者", nameEn: "Eternal Recurrence",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "被诅咒在某一段特定时间内循环，无法产生任何向前的线性的递进。",
        defEn: "Cursed to loop within a specific timeframe; no linear progression possible.",
        core: "我已经第一百次向你道别。 | 缺失 ($): 明天 (Future)",
        coreEn: "I've bid you farewell for the hundredth time. | Lack ($): Future",
        logic: "【因果闭环诅咒】：循环逻辑。主体的所有数值在场景结束时会重置为初始状态。被诅咒在某一段特定时间内循环，无法产生任何向前的线性递进。",
        logicEn: "[Causal Loop Curse]: Loop logic. All parameters reset to initial state at end of scene. Cursed to loop within a specific timeframe; no linear progression possible.",
        patch: {
            mechanics: "基础断裂协议 + [循环索引 = 激活; 变化记忆 = 极低; 线性进度 = 锁死]",
            mechanicsEn: "Base_RUPTURE + [Loop_Index = Active; Change_Memory = Low; Linear_Progress = Locked]",
            aesthetic: "聚焦：环形的叙事节奏 + 跳切式的突变转场。文本：似曾相识的重复句式，如同被卡住的唱片。",
            aestheticEn: "Focus: Circular_Narrative_Rhythm + Jump-Cut_Transitions. Text: Repetitive_Phrases_Like_a_Stuck_Record.",
            runtime: "IF (场景结束条件达成) THEN (强制执行：跳转回起始点，所有数值重置)。严禁任何真正的线性进步或累积。",
            runtimeEn: "IF (End_Condition_Met) THEN (Force: Jump_to_Start_Reset_All). FORBID_True_Linear_Progress_or_Accumulation."
        }
    },
    {
        id: "m1_anachronism",
        name: "不合时宜者/穿越者", nameEn: "Anachronism",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "由于精神固着，其服饰、语感和思维逻辑与当前时代发生了剧烈错位。",
        defEn: "Severe misalignment of dress, speech, and logic with current era due to psychic fixation.",
        core: "我在这座城市里寻找不存在的邮筒。 | 缺失 ($): 时代同步率 (Sync_Rate)",
        coreEn: "I search for non-existent mailboxes in this city. | Lack ($): Sync_Rate",
        logic: "【时代视差器】：视差力学。主体的互动总是带有“理解偏差”，必须经过一次时代解码。由于精神固着，其服饰、语感和思维逻辑与当前时代发生了剧烈错位。",
        logicEn: "[Era Parallax Device]: Parallax mechanics. Interactions always carry 'understanding gaps' requiring era decoding. Psychic fixation causes severe misalignment of dress, speech, and logic with the current era.",
        patch: {
            mechanics: "基础断裂协议 + [上下文惩罚 = -0.5; 古董价值 = 高; 时代同步率 = 极低]",
            mechanicsEn: "Base_RUPTURE + [Context_Penalty = -0.5; Antique_Value = High; Era_Sync = Low]",
            aesthetic: "聚焦：过时的色调 + 深褐色/黑胶质感。文本：充满过时用语和过期礼仪的、如旧世界遗民般的对白。",
            aestheticEn: "Focus: Outdated_Palette + Sepia/Vinyl_Textures. Text: Old-World_Survivor_Dialogue_with_Expired_Etiquette.",
            runtime: "IF (观察到新技术或当代事物) THEN (强制触发：认知混乱与时代震荡)。严禁与当下时代达成完全同步。",
            runtimeEn: "IF (New_Tech_or_Contemporary_Object_Observed) THEN (Force_Trigger: Cognitive_Confusion_and_Era_Shock). FORBID_Full_Synchronization_with_Present_Era."
        }
    },
    {
        id: "m1_prophet_blind",
        name: "盲先知/未来之囚", nameEn: "Prophet-Blind",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "过早地看见了结局，导致其当下的所有挣扎都显得极其可笑且消极。",
        defEn: "Saw the end too early; all current struggles seem ridiculous and passive.",
        core: "我已经听见了终局的钟声。 | 缺失 ($): 当下感 (Present_Grip)",
        coreEn: "I've already heard the final bell. | Lack ($): Present_Grip",
        logic: "【终局锁定器】：终局驱动逻辑。M5（行动）总是指向那个预见到的终点，即使它意味着毁灭。过早地看见了结局，导致当下的所有挣扎都显得极其可笑且消极。",
        logicEn: "[Endgame Lock]: End-driven logic. M5 actions always point toward the foreseen end, even if it means destruction. Having seen the ending too early, all present struggles appear ridiculous and passive.",
        patch: {
            mechanics: "基础断裂协议 + [决定论 = 最大; 自主性 = 极低; 终局引力 = 绝对]",
            mechanicsEn: "Base_RUPTURE + [Determinism = Max; Agency = Low; Endgame_Gravity = Absolute]",
            aesthetic: "聚焦：预兆叠影的画面 + 宿命论的氛围。文本：带有先知式冷淡的、已知结局的倒叙体叙述。",
            aestheticEn: "Focus: Premonition_Overlays + Fatalistic_Atmosphere. Text: Prophetic_Cold_Known-Ending_Retrospective_Narration.",
            runtime: "IF (任何决策被做出) THEN (强制显示：未来闪回与终局预兆)。严禁产生任何对结局的悬念或不确定感。",
            runtimeEn: "IF (Decision_Made) THEN (Force_Display: Future_Flash_and_Endgame_Omen). FORBID_Suspense_or_Uncertainty_about_Ending."
        }
    },
    {
        id: "m1_stutter_time",
        name: "时间结巴", nameEn: "Time-Stutter",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "叙事时钟在主体身上发生了故障，表现为行为的瞬间重复或瞬移。",
        defEn: "Narrative clock malfunction; manifests as act repetition or sudden teleportation.",
        core: "刚才我说过这话吗？刚才...刚才... | 缺失 ($): 叙事流 (Narrative_Flow)",
        coreEn: "Did I say this just now? Just now... just now... | Lack ($): Narrative_Flow",
        logic: "【叙事时钟故障】：碎片重复力学。主体的关键动作会有 15% 概率触发一次原地回放。叙事时钟在主体身上发生了故障，表现为行为的瞬间重复或瞬移。",
        logicEn: "[Narrative Clock Glitch]: Fragment repetition mechanics. 15% chance of replaying key actions on the spot. Narrative clock malfunction manifests as act repetition or sudden teleportation.",
        patch: {
            mechanics: "基础断裂协议 + [结巴率 = 0.15; 时间不一致性 = 高; 回放触发 = 随机]",
            mechanicsEn: "Base_RUPTURE + [Stutter_Rate = 0.15; Time_Inconsistency = High; Replay_Trigger = Random]",
            aesthetic: "聚焦：颤抖的动画 + 倒带回放效果。文本：充满重复词句和意外停顿的、如卡带般的叙述。",
            aestheticEn: "Focus: Trembling_Animation + Rewind_Effect. Text: Stuck-Tape_Narration_with_Repeated_Phrases_and_Unexpected_Pauses.",
            runtime: "IF (关键动作完成) THEN (随机触发：15%概率原地回放该动作)。严禁叙事时间线保持完全流畅。",
            runtimeEn: "IF (Key_Action_Completed) THEN (Random_Trigger: 15%_Chance_Replay_Action). FORBID_Completely_Smooth_Narrative_Timeline."
        }
    },
    {
        id: "m1_fast_forwarder",
        name: "快速前进者", nameEn: "The Fast-Forwarder",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "极度焦虑于目标，其生命体验被极大幅度地缩写和跳过。",
        defEn: "Extreme goal-anxiety; life experience is dramatically shortened and skipped.",
        core: "快，我们要去下一个地方了。 | 缺失 ($): 过程 (The Process)",
        coreEn: "Quick, we have to move to the next place. | Lack ($): The Process",
        logic: "【效率溢出器】：效率溢出逻辑。删减所有的过渡性对白和慢节奏动作。极度焦虑于目标，其生命体验被极大幅度地缩写和跳过。",
        logicEn: "[Efficiency Overflower]: Efficiency overflow logic. Skip all transitional dialogue and slow-paced movements. Extreme goal-anxiety; life experience is dramatically shortened and skipped.",
        patch: {
            mechanics: "基础断裂协议 + [过程权重 = 0.1; 速度 = 最大; 过渡场景容忍度 = 0]",
            mechanicsEn: "Base_RUPTURE + [Process_Weight = 0.1; Speed = Max; Transition_Tolerance = 0]",
            aesthetic: "聚焦：动态模糊 + 快切的剪辑节奏。文本：极度缩略的、跳过所有过程的结果导向叙述。",
            aestheticEn: "Focus: Motion_Blur + Fast-Cut_Editing. Text: Extremely_Abbreviated_Result-Oriented_Narration_Skipping_All_Process.",
            runtime: "IF (检测到慢节奏事件) THEN (强制执行：自动跳转至结论)。严禁任何过程性的停留或慢速体验。",
            runtimeEn: "IF (Slow_Event_Detected) THEN (Force: Auto_Jump_to_Conclusion). FORBID_Process_Dwelling_or_Slow_Experience."
        }
    },
    {
        id: "m1_slow_motion_ego",
        name: "慢镜头者", nameEn: "Slow Motion",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "感官延迟极高的主体，所有人都在奔跑时，他还在处理十秒前的光影。",
        defEn: "Extremely delayed sensory processing; still handling 10-second-old shadows while others run.",
        core: "子弹飞得太快，我都还没感觉得到痛。 | 缺失 ($): 同步率 (Synchronicity)",
        coreEn: "The bullet travels too fast; I haven't even felt the pain. | Lack ($): Synchronicity",
        logic: "【感官延迟场】：延迟响应力学。所有外界 M2（遭遇）的影响必须延后 1-2 个剧情回合发生。感官延迟极高，所有人都在奔跑时，他还在处理十秒前的光影。",
        logicEn: "[Sensory Delay Field]: Delayed response mechanics. M2 encounter impacts must lag by 1-2 narrative turns. Extremely delayed sensory processing; still handling 10-second-old shadows while others run.",
        patch: {
            mechanics: "基础断裂协议 + [延迟 = 极高; 冲击滤波 = 重度; 同步率 = 极低]",
            mechanicsEn: "Base_RUPTURE + [Latency = High; Impact_Filter = Heavy; Sync_Rate = Low]",
            aesthetic: "聚焦：黏稠的流动感 + 逐帧的运动。文本：极度迟缓的、如泰水中触摸光线般的慢速叙述。",
            aestheticEn: "Focus: Gooey_Fluidity + Frame-by-Frame_Movement. Text: Extremely_Delayed_Slow_Narration_Like_Touching_Light_Through_Water.",
            runtime: "IF (事件发生) THEN (强制执行：将事件效果加入队列，延迟 1-2 回合执行)。严禁任何即时性的反应。",
            runtimeEn: "IF (Event_Occurs) THEN (Force: Queue_Event_Effect_Delay_1-2_Turns). FORBID_Immediate_Response."
        }
    },
    {
        id: "m1_date_expired",
        name: "过期者/失效日期", nameEn: "Date Expired",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "其存在的“意义保质期”已过，处于叙事上的超期服役状态。",
        defEn: "Passed their 'meaningful shelf-life'; in a state of extended narrative service.",
        core: "世界已经不需要我，但我还在呼吸。 | 缺失 ($): 合时性 (Timeliness)",
        coreEn: "The world no longer needs me, yet I breathe. | Lack ($): Timeliness",
        logic: "【凋零计时器】：凋零力学。每次互动都会伴随其象征权重的永久流失。其存在的“意义保质期”已过，处于叙事上的超期服役状态。",
        logicEn: "[Wither Timer]: Wither mechanics. Every interaction is accompanied by permanent loss of symbolic weight. Past the 'meaningful shelf-life'; in a state of extended narrative service.",
        patch: {
            mechanics: "基础断裂协议 + [价值衰减 = 高; 相关性 = 极低; 保质期 = 已过期]",
            mechanicsEn: "Base_RUPTURE + [Value_Decay = High; Relevance = Low; Shelf_Life = Expired]",
            aesthetic: "聚焦：易碎的发黄纸张质感 + 抽去了饱和度的褐变颜色。文本：充满过期感的、如旧报纸般脱色的叙述。",
            aestheticEn: "Focus: Brittle_Yellowed_Paper_Texture + Desaturated_Fading_Colors. Text: Expired_Fading_Narration_Like_Old_Newspaper.",
            runtime: "IF (效用值降至零) THEN (强制触发：自动溶解与存在性消散)。严禁任何价值的回升或相关性恢复。",
            runtimeEn: "IF (Utility_Reaches_Zero) THEN (Force_Trigger: Auto_Dissolve_and_Existential_Dissipation). FORBID_Value_Recovery_or_Relevance_Restoration."
        }
    },
    {
        id: "m1_time_fossil",
        name: "时间化石", nameEn: "Time Fossil",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "在大流中凝固的主体，任凭周围沧海桑田，其本身的时间尺度被永久锁定。",
        defEn: "Fossilized subject amidst flow; its own time scale is permanently locked.",
        core: "我的表针已经锈死。 | 缺失 ($): 变化 (Variation)",
        coreEn: "My watch hands have rusted solid. | Lack ($): Variation",
        logic: "【零熵化石】：零熵逻辑。主体不接受任何基于事件的性格改变（M7）。在大流中凝固的主体，任凭周围沧海桑田，其本身的时间尺度被永久锁定。",
        logicEn: "[Zero-Entropy Fossil]: Zero-entropy logic. Rejects all character changes based on events (M7). Fossilized amidst the flow; its own time scale is permanently locked.",
        patch: {
            mechanics: "基础断裂协议 + [变化抗性 = 最大; 耐久度 = 无限; 变异接受率 = 0]",
            mechanicsEn: "Base_RUPTURE + [Change_Resistance = Max; Endurance = Infinite; Mutation_Acceptance = 0]",
            aesthetic: "聚焦：矿物质/硬质的纹理 + 静态的光照。文本：如化石铭文般不变的、拒绝任何形变的叙述。",
            aestheticEn: "Focus: Mineral/Hard_Texture + Static_Lighting. Text: Fossil_Inscription-like_Unchanging_Narration_Rejecting_All_Transformation.",
            runtime: "IF (任何变形尝试) THEN (强制执行：否定该效果，维持原始状态)。严禁任何性格演变或状态转化。",
            runtimeEn: "IF (Transform_Attempt) THEN (Force: Negate_Effect_Maintain_Original_State). FORBID_Character_Evolution_or_State_Transition."
        }
    },
    {
        id: "m1_glitch_moment",
        name: "瞬间者", nameEn: "The Moment",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "仅能存在于某个特定的瞬间或事件发生时，事件结束即化为泡影。",
        defEn: "Exists only during a specific moment or event; vanishes when it ends.",
        core: "我只是一道闪动的光斑。 | 缺失 ($): 持续性 (Duration)",
        coreEn: "I am merely a flicker of light. | Lack ($): Duration",
        logic: "【高频闪烁体】：高频闪烁力学。其叙事可见度随某种变量的波动而剧烈起伏。仅能存在于某个特定的瞬间或事件发生时，事件结束即化为泡影。",
        logicEn: "[High-Frequency Flicker]: High-frequency flicker mechanics. Narrative visibility fluctuates wildly with specific variables. Exists only during a specific moment or event; vanishes when it ends.",
        patch: {
            mechanics: "基础断裂协议 + [持续性评级 = 极低; 强度 = 极高; 可见性 = 波动]",
            mechanicsEn: "Base_RUPTURE + [Duration_Rating = Low; Intensity = High; Visibility = Oscillating]",
            aesthetic: "聚焦：频闪的视觉效果 + 高速变化的不透明度。文本：如电火花般短促而剧烈的、稍纵即逝的叙述。",
            aestheticEn: "Focus: Strobe_Visuals + High-Speed_Opacity_Changes. Text: Spark-like_Brief_Intense_Fleeting_Narration.",
            runtime: "IF (事件结束) THEN (强制执行：主体归零，存在性完全消失)。严禁任何形式的持久性存在。",
            runtimeEn: "IF (Event_Over) THEN (Force: Nullify_Subject_Complete_Existence_Erasure). FORBID_Any_Form_of_Persistent_Existence."
        }
    },
    {
        id: "m1_future_ghost",
        name: "未来之灵", nameEn: "Future Ghost",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "被一个尚未发生的灾难或奇迹提前透支了灵魂，现世表现为极度的虚弱。",
        defEn: "Soul overdrawn by a future disaster or miracle; manifests as extreme present weakness.",
        core: "我背负着你们还未经历的眼泪。 | 缺失 ($): 现世重量 (Present_Weight)",
        coreEn: "I carry tears you have yet to shed. | Lack ($): Present_Weight",
        logic: "【因果倒置体】：因果倒置逻辑。主体现在的所有苦难（M2）都是为了偿还未来的“债”。被一个尚未发生的灾难或奇迹提前透支了灵魂，现世表现为极度的虚弱。",
        logicEn: "[Reverse Causality Body]: Reverse causality logic. Present suffering (M2) pays off future 'debts'. Soul overdrawn by a future disaster or miracle; manifests as extreme present weakness.",
        patch: {
            mechanics: "基础断裂协议 + [预伤害 = 高; 生命力上限 = 极低; 现世重量 = 透支]",
            mechanicsEn: "Base_RUPTURE + [Pre-Damage = High; Vitality_Cap = Low; Present_Weight = Overdrawn]",
            aesthetic: "聚焦：不稳定的发光光晕 + 青白色调。文本：带有未来债务压力的、如流星般残影的叙述。",
            aestheticEn: "Focus: Unstable_Glowing_Aura + Cyan/White_Palette. Text: Future-Debt_Pressured_Meteor-Trail_Narration.",
            runtime: "IF (未来事件接近) THEN (强制触发：共振反应，现世生命力进一步衔减)。严禁现世生命力的回升或充能。",
            runtimeEn: "IF (Future_Event_Approaches) THEN (Force_Trigger: Resonance_Further_Vitality_Drain). FORBID_Present_Vitality_Recovery_or_Recharge."
        }
    },
    {
        id: "m1_history_liar",
        name: "历史说谎者", nameEn: "History Liar",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "由于无法承受真实的过去，而为主体伪造了一套逻辑严密的历史缓存。",
        defEn: "Fabricating a logically tight historical cache to evade a traumatic past.",
        core: "我记得那些从未发生过的春天。 | 缺失 ($): 本源 (Onto-Source)",
        coreEn: "I remember springs that never happened. | Lack ($): Onto-Source",
        logic: "【虚假核心驱动器】：虚假驱动逻辑。其所有的行动（M5）都建立在一个错误的假设坐标上。由于无法承受真实的过去，而为主体伪造了一套逻辑严密的历史缓存。",
        logicEn: "[False Core Driver]: False-drive logic. All M5 actions are built on incorrect assumed coordinates. Fabricating a logically tight historical cache to evade a traumatic past.",
        patch: {
            mechanics: "基础断裂协议 + [数据可靠性 = 0; 内部一致性 = 高; 本源座标 = 虚假]",
            mechanicsEn: "Base_RUPTURE + [Data_Reliability = 0; Internal_Consistency = High; Onto_Source = False]",
            aesthetic: "聚焦：梦境般的柔焦画面 + 精心编织的虚假记忆视觉。文本：逻辑严密但完全虚构的、如精美谎言般的叙述。",
            aestheticEn: "Focus: Dreamy_Soft_Focus + Meticulously_Woven_False_Memory_Visuals. Text: Logically_Tight_but_Fabricated_Beautiful_Lie_Narration.",
            runtime: "IF (证据冲突发生) THEN (强制触发：主体断裂，虚假历史崩溃)。严禁真实过去的自然回归或接受。",
            runtimeEn: "IF (Evidence_Clash_Occurs) THEN (Force_Trigger: Subject_Fracture_False_History_Collapse). FORBID_Natural_Return_or_Acceptance_of_True_Past."
        }
    },
    {
        id: "m1_waiting_room_ego",
        name: "停滞者/候诊室", nameEn: "Waiting Ego",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "存在本身就是一个漫长的暂停键，其生命的唯一内容就是等待指示。",
        defEn: "Existence as an infinite pause; life's content is merely awaiting instruction.",
        core: "我想我会一直坐下去，直到灰尘盖过膝盖。 | 缺失 ($): 下一步 (The Next Step)",
        coreEn: "I'll sit here until the dust covers my knees. | Lack ($): The Next Step",
        logic: "【死循环侦听器】：死循环侦听逻辑。不断扫描环境是否出现“通过”指令，无视所有风景。存在本身就是一个漫长的暂停键，其生命的唯一内容就是等待指示。",
        logicEn: "[Dead-Loop Listener]: Infinite loop listening logic. Continuously scanning for 'pass' commands, ignoring all scenery. Existence as an infinite pause; life's content is merely awaiting instruction.",
        patch: {
            mechanics: "基础断裂协议 + [行动队列 = 锁定; 聚焦效用 = 0; 等待状态 = 永久]",
            mechanicsEn: "Base_RUPTURE + [Action_Queue = Locked; Focus_Utility = 0; Wait_State = Permanent]",
            aesthetic: "聚焦：日光灯的惨白光照 + 时钟滴答的单调音效。文本：如候诊室般无尽等待的、完全空洞的叙述。",
            aestheticEn: "Focus: Fluorescent_Harsh_Light + Clock_Tick_Monotone_Sound. Text: Waiting-Room_Endlessly_Empty_Narration.",
            runtime: "WHILE (等待状态) DO (循环播放：闲置动画，拒绝所有自主行动)。严禁任何自发的行动或主动性。",
            runtimeEn: "WHILE (Wait_State) DO (Loop_Play: Idle_Animation_Reject_All_Autonomous_Action). FORBID_Spontaneous_Action_or_Initiative."
        }
    },
    {
        id: "m1_reverse_arrow",
        name: "逆箭者", nameEn: "Reverse Arrow",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "时间逻辑反向运行，他总是先得到结局（M7），再去追溯原因（M2）。",
        defEn: "Time logic runs backwards; obtains resolution (M7) before tracing the cause (M2).",
        core: "我早已知道我们的结局，所以我现在才爱上你。 | 缺失 ($): 悬念 (Suspense)",
        coreEn: "I loved you only because I knew our end. | Lack ($): Suspense",
        logic: "【因果倒叙器】：倒叙叙事力学。主体的互动表现为一种“被告知感”，而非“探索感”。时间逻辑反向运行，他总是先得到结局（M7），再去追溯原因（M2）。",
        logicEn: "[Causal Retrospector]: Flash-back mechanics. Interactions manifest as being 'informed' rather than 'exploring'. Time logic runs backwards; obtains resolution (M7) before tracing the cause (M2).",
        patch: {
            mechanics: "基础断裂协议 + [发现效用 = 0; 确定性 = 最大; 悬念总量 = 零]",
            mechanicsEn: "Base_RUPTURE + [Discovery_Utility = 0; Certainty = Max; Suspense_Total = Zero]",
            aesthetic: "聚焦：反熵的视觉 + 淡入式转场。文本：带有强烈既视感的、从结局回望起点的叙述。",
            aestheticEn: "Focus: Reverse_Entropy_Visuals + Fade-In_Transitions. Text: Strong_Déjà_Vu_End-to-Beginning_Retrospective_Narration.",
            runtime: "IF (任何事件发生) THEN (强制显示：既视感，以“早已知道”的姿态回应)。严禁任何探索性的惊奇或发现。",
            runtimeEn: "IF (Event_Occurs) THEN (Force_Display: Déjà_Vu_Respond_with_Already_Known_Posture). FORBID_Exploratory_Wonder_or_Discovery."
        }
    },
    {
        id: "m1_memory_corruptor",
        name: "记忆腐蚀者", nameEn: "Memory Corruptor",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "主体的存在会污染周围角色对时间的感知，让过去变得模糊和不可靠。",
        defEn: "Presence corrupts others' perception of time, making the past hazy and unreliable.",
        core: "你会忘了我，正如你忘了你昨天的早餐。 | 缺失 ($): 清晰度 (Clarity)",
        coreEn: "You will forget me, just as you forgot yesterday's breakfast. | Lack ($): Clarity",
        logic: "【遗忘力场发射器】：干扰场逻辑。其 M1 属性会产生一个“遗忘力场”，剥离周围人的历史记录。主体的存在会污染周围角色对时间的感知，让过去变得模糊和不可靠。",
        logicEn: "[Forgetting Field Emitter]: Interference field logic. M1 generates a 'forgetting field', stripping others' historical records. Presence corrupts others' perception of time, making the past hazy and unreliable.",
        patch: {
            mechanics: "基础断裂协议 + [场半径 = 高; 记忆消耗 = 0.3; 影响范围 = 周围角色]",
            mechanicsEn: "Base_RUPTURE + [Field_Radius = High; Memory_Drain = 0.3; Impact_Scope = Surrounding_Characters]",
            aesthetic: "聚焦：涂抹模糊的视觉 + 梦境与恐惧交织的氛围。文本：带有传染性遗忘的、使周围人记忆溶解的叙述。",
            aestheticEn: "Focus: Smudged_Blurred_Visuals + Dreamy/Scary_Atmosphere. Text: Contagious_Forgetting_Narration_Dissolving_Others_Memories.",
            runtime: "IF (与周围角色互动) THEN (强制触发：对方发生数据丢失，记忆消耗 30%)。严禁任何清晰的、不受干扰的记忆保留。",
            runtimeEn: "IF (Interaction_with_Others) THEN (Force_Trigger: Data_Loss_Memory_Drain_30%). FORBID_Clear_Undisturbed_Memory_Retention."
        }
    },
    {
        id: "m1_zero_hour_ego",
        name: "零点时刻", nameEn: "Zero Hour",
        group: "E. 时间性断裂", groupEn: "Temporal Rupture",
        def: "主体无法跨越午夜，每天醒来都是一个绝对的新生，没有积累也没有痕迹。",
        defEn: "Cannot cross midnight; waking up as an absolute newborn every day, with no traces.",
        core: "我是一页刚撕下来的草稿。 | 缺失 ($): 积累 (Accumulation)",
        coreEn: "I am a fresh page of draft. | Lack ($): Accumulation",
        logic: "【日常重置器】：日常重置逻辑。主体的 M1 参数、M3 欲望和 M7 结局都会在 00:00 时归零。主体无法跨越午夜，每天醒来都是一个绝对的新生，没有积累也没有痕迹。",
        logicEn: "[Daily Resetter]: Daily reset logic. Parameters, desires (M3), and resolutions (M7) zero out at 00:00. Cannot cross midnight; waking up as an absolute newborn every day, with no traces.",
        patch: {
            mechanics: "基础断裂协议 + [持久性 = 空; 初始值 = 默认; 跨午夜能力 = 禁止]",
            mechanicsEn: "Base_RUPTURE + [Persistence = Null; Starting_Value = Default; Cross_Midnight_Ability = Forbidden]",
            aesthetic: "聚焦：干净明亮的视觉 + 闪光式转场。文本：如刚撕下的草稿般的、每日重新开始的空白叙述。",
            aestheticEn: "Focus: Clean/Bright_Visuals + Flash_Transition. Text: Fresh_Draft-like_Daily_Reset_Blank_Narration.",
            runtime: "IF (时钟 = 00:00) THEN (强制执行：全参数擦除，绝对重置)。严禁任何跨午夜的记忆保留或经验积累。",
            runtimeEn: "IF (Clock_Equals_00:00) THEN (Force: Wipe_All_Parameters_Absolute_Reset). FORBID_Cross_Midnight_Memory_Retention_or_Experience_Accumulation."
        }
    }
];
