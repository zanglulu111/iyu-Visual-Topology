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
        logic: "零缓存力学。主体无法通过过去的经验来优化当前的 M5（行动）。",
        logicEn: "Zero-cache mechanics. Cannot optimize current M5 actions via past experience.",
        patch: {
            mechanics: "Experience_Weight = 0; Adaptability = High.",
            mechanicsEn: "Experience_Weight = 0; Adaptability = High.",
            aesthetic: "Visuals: Overexposed; Lighting: White_Void.",
            aestheticEn: "Visuals: Overexposed; Lighting: White_Void.",
            runtime: "Reset: IF (Sleep) THEN Trigger(Variable_Wipe)."
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
        logic: "循环逻辑。主体的所有数值在场景结束时会重置为初始状态。",
        logicEn: "Loop logic. All parameters reset to initial state at end of scene.",
        patch: {
            mechanics: "Loop_Index = Active; Change_Memory = Low.",
            mechanicsEn: "Loop_Index = Active; Change_Memory = Low.",
            aesthetic: "Rhythm: Circular; Transition: Jump-cut.",
            aestheticEn: "Rhythm: Circular; Transition: Jump-cut.",
            runtime: "Loop: IF (End_Condition) THEN Jump_to(Start)."
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
        logic: "视差力学。主体的互动总是带有“理解偏差”，必须经过一次时代解码。",
        logicEn: "Parallax mechanics. Interactions always carry 'understanding gaps' requiring era decoding.",
        patch: {
            mechanics: "Context_Penalty = -0.5; Antique_Value = High.",
            mechanicsEn: "Context_Penalty = -0.5; Antique_Value = High.",
            aesthetic: "Palette: Outdated; Textures: Sepia/Vinyl.",
            aestheticEn: "Palette: Outdated; Textures: Sepia/Vinyl.",
            runtime: "Shock: IF (New_Tech_Observed) THEN Trigger(Confusion)."
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
        logic: "终局驱动逻辑。M5（行动）总是指向那个预见到的终点，即使它意味着毁灭。",
        logicEn: "End-driven logic. M5 actions always point toward the foreseen end.",
        patch: {
            mechanics: "Determinism = Max; Agency = Low.",
            mechanicsEn: "Determinism = Max; Agency = Low.",
            aesthetic: "Visuals: Premonition_Overlays; Atmosphere: Fatalistic.",
            aestheticEn: "Visuals: Premonition_Overlays; Atmosphere: Fatalistic.",
            runtime: "Vision: IF (Decision_Made) THEN Show(Future_Flash)."
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
        logic: "碎片重复力学。主体的关键动作会有 15% 概率触发一次原地回放。",
        logicEn: "Fragment repetition. 15% chance of replaying the key action on the spot.",
        patch: {
            mechanics: "Stutter_Rate = 0.15; Time_Inconsistency = High.",
            mechanicsEn: "Stutter_Rate = 0.15; Time_Inconsistency = High.",
            aesthetic: "Animation: Trembling; Visuals: Rewind_Effect.",
            aestheticEn: "Animation: Trembling; Visuals: Rewind_Effect.",
            runtime: "Logic: IF (Action_Done) THEN Rand(Rewind)."
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
        logic: "效率溢出逻辑。删减所有的过渡性对白和慢节奏动作。",
        logicEn: "Efficiency overflow. Skip all transitional dialogue and slow-paced movements.",
        patch: {
            mechanics: "Process_Weight = 0.1; Speed = Max.",
            mechanicsEn: "Process_Weight = 0.1; Speed = Max.",
            aesthetic: "Visuals: Motion_Blur; Editing: Fast-cut.",
            aestheticEn: "Visuals: Motion_Blur; Editing: Fast-cut.",
            runtime: "Skip: IF (Slow_Event) THEN Auto-Jump(Conclusion)."
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
        logic: "延迟响应力学。所有外界 M2（遭遇）的影响必须延后 1-2 个剧情回合发生。",
        logicEn: "Delayed response. M2 encounter impacts must lag by 1-2 narrative turns.",
        patch: {
            mechanics: "Latency = High; Impact_Filter = Heavy.",
            mechanicsEn: "Latency = High; Impact_Filter = Heavy.",
            aesthetic: "Fluidity: Gooey; Movement: Frame-by-frame.",
            aestheticEn: "Fluidity: Gooey; Movement: Frame-by-frame.",
            runtime: "Update: IF (Event_Occurs) THEN Queue(Event_Effect)."
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
        logic: "凋零力学。每次互动都会伴随其象征权重的永久流失。",
        logicEn: "Wither mechanics. Every interaction is accompanied by a permanent loss of symbolic weight.",
        patch: {
            mechanics: "Value_Decay = High; Relevance = Low.",
            mechanicsEn: "Value_Decay = High; Relevance = Low.",
            aesthetic: "Visuals: Brittle; Color: Yellowed_Paper.",
            aestheticEn: "Visuals: Brittle; Color: Yellowed_Paper.",
            runtime: "End: IF (Utility == 0) THEN Trigger(Auto_Dissolve)."
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
        logic: "零熵逻辑。主体不接受任何基于事件的性格改变（M7）。",
        logicEn: "Zero-entropy logic. Rejects all character changes based on events (M7).",
        patch: {
            mechanics: "Change_Resistance = Max; Endurance = Infinite.",
            mechanicsEn: "Change_Resistance = Max; Endurance = Infinite.",
            aesthetic: "Texture: Mineral/Hard; Lighting: Static.",
            aestheticEn: "Texture: Mineral/Hard; Lighting: Static.",
            runtime: "Check: IF (Transform_Attempt) THEN Negate(Effect)."
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
        logic: "高频闪烁力学。其叙事可见度随某种变量的波动而剧烈起伏。",
        logicEn: "High-frequency flicker. Narrative visibility fluctuates with specific variables.",
        patch: {
            mechanics: "Duration_Rating = Low; Intensity = High.",
            mechanicsEn: "Duration_Rating = Low; Intensity = High.",
            aesthetic: "Visuals: Strobe; Opacity: High_Speed_Changes.",
            aestheticEn: "Visuals: Strobe; Opacity: High_Speed_Changes.",
            runtime: "Vanish: IF (Event_Over) THEN Nullify(Subject)."
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
        logic: "因果倒置。主体现在的所有苦难（M2）都是为了偿还未来的“债”。",
        logicEn: "Reverse causality. Present suffering (M2) pays off future 'debts'.",
        patch: {
            mechanics: "Pre-Damage = High; Vitality_Cap = Low.",
            mechanicsEn: "Pre-Damage = High; Vitality_Cap = Low.",
            aesthetic: "Aura: Glowing/Unsteady; Palette: Cyan/White.",
            aestheticEn: "Aura: Glowing/Unsteady; Palette: Cyan/White.",
            runtime: "Flash: IF (Event_Approach) THEN Trigger(Resonance)."
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
        logic: "虚假驱动逻辑。其所有的行动（M5）都建立在一个错误的假设坐标上。",
        logicEn: "False-drive logic. All M5 actions are built on incorrect assuming coordinates.",
        patch: {
            mechanics: "Data_Reliability = 0; Internal_Consistence = High.",
            mechanicsEn: "Data_Reliability = 0; Internal_Consistence = High.",
            aesthetic: "Visuals: Dreamy; Rendering: Soft_Focus.",
            aestheticEn: "Visuals: Dreamy; Rendering: Soft_Focus.",
            runtime: "Collapse: IF (Evidence_Clash) THEN Trigger(Subject_Fracture)."
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
        logic: "死循环侦听逻辑。不断扫描环境是否出现“通过”指令，无视所有风景。",
        logicEn: "Infinite loop listening. Continuously scanning for 'pass' commands, ignoring all scenery.",
        patch: {
            mechanics: "Action_Queue = Locked; Focus_Utility = 0.",
            mechanicsEn: "Action_Queue = Locked; Focus_Utility = 0.",
            aesthetic: "Lighting: Fluorescent; Sound: Clock_Tick.",
            aestheticEn: "Lighting: Fluorescent; Sound: Clock_Tick.",
            runtime: "Idle: WHILE (Wait) DO Play(Idle_Animation)."
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
        logic: "倒叙叙事力学。主体的互动表现为一种“被告知感”，而非“探索感”。",
        logicEn: "Flash-back mechanics. Interactions manifest as being 'informed' rather than 'exploring'.",
        patch: {
            mechanics: "Discovery_Utility = 0; Certainty = Max.",
            mechanicsEn: "Discovery_Utility = 0; Certainty = Max.",
            aesthetic: "Visuals: Reverse_Entropy; Transition: Fading_in.",
            aestheticEn: "Visuals: Reverse_Entropy; Transition: Fading_in.",
            runtime: "Update: IF (Event) THEN Show(Déjà_vu)."
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
        logic: "干扰场逻辑。其 M1 属性会产生一个“遗忘力场”，剥离周围人的历史记录。",
        logicEn: "Interference field. M1 generates a 'forgetting field', stripping others' historical records.",
        patch: {
            mechanics: "Field_Radius = High; Memory_Drain = 0.3.",
            mechanicsEn: "Field_Radius = High; Memory_Drain = 0.3.",
            aesthetic: "Visuals: Smudged; Atmosphere: Dreamy/Scary.",
            aestheticEn: "Visuals: Smudged; Atmosphere: Dreamy/Scary.",
            runtime: "Drain: IF (Interaction) THEN Trigger(Data_Loss)."
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
        logic: "日常重置逻辑。主体的 M1 参数、M3 欲望和 M7 结局都会在 00:00 时归零。",
        logicEn: "Daily reset logic. Parameters, desires (M3), and resolutions (M7) zero out at 00:00.",
        patch: {
            mechanics: "Persistence = Null; Starting_Value = Default.",
            mechanicsEn: "Persistence = Null; Starting_Value = Default.",
            aesthetic: "Visuals: Clean/Bright; Visual_Transition: Flash.",
            aestheticEn: "Visuals: Clean/Bright; Visual_Transition: Flash.",
            runtime: "Reset: IF (Clock == 00:00) THEN Wipe(All)."
        }
    }
];
