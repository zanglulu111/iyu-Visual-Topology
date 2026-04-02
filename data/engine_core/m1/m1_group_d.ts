import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_D: LibraryItemDef[] = [
    {
        id: "m1_nihilist",
        name: "虚无主义者", nameEn: "The Nihilist",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "有意识地拥抱虚无，通过否定所有符号价值来对抗焦虑。",
        defEn: "Consciously embracing nihilism, countering anxiety by negating all symbolic values.",
        core: "如果没有意义，那就让它彻底空掉。 | 缺失 ($): 意义 (Meaning)",
        coreEn: "If there is no meaning, let it be completely void. | Lack ($): Meaning",
        logic: "【反物质引擎】：反驱动逻辑。主体的 M5（行动）总是指向对当前目标（M3）的拆解。任何被赋予意义的事物都将被其符号性地减少为零，这是一种精神层面的焉烧攻击。",
        logicEn: "[Anti-Matter Engine]: Anti-drive logic. M5 actions always point to deconstruction of the current target (M3). Anything given meaning will be symbolically reduced to zero—a psychic scorched-earth attack.",
        patch: {
            mechanics: "基础内陷协议 + [驱动抗性 = 最大; 熵增发生器 = 高; 意义降解率 = 0.9]",
            mechanicsEn: "Base_IMPLOSION + [Drive_Resistance = Max; Entropy_Generator = High; Meaning_Degradation = 0.9]",
            aesthetic: "聚焦：高灰度的覗淡平面 + 模糊边缘的溶解感。文本：冷静的、抽去了情感色彩的解析体叙述。",
            aestheticEn: "Focus: High_Grey_Bleached_Plane + Blurred_Edge_Dissolution. Text: Cold_Emotionless_Analytical_Narration.",
            runtime: "IF (任何价值被发现或赋予) THEN (强制执行：立即否定并解构该价值)。严禁任何意义感的持续存在。",
            runtimeEn: "IF (Value_Found_or_Assigned) THEN (Force: Immediate_Negation_and_Deconstruction). FORBID_Sustained_Meaning."
        }
    },
    {
        id: "m1_melancholic",
        name: "忧郁者", nameEn: "The Melancholic",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "拒绝哀悼已失去的对象，将那片废墟永远固定在精神中心。",
        defEn: "Refusing to mourn the lost object, fixing those ruins at the psychic center forever.",
        core: "我守护着我的空洞，胜过守护生命。 | 缺失 ($): 哀悼 (Mourning_Agency)",
        coreEn: "I guard my void more than my life. | Lack ($): Mourning_Agency",
        logic: "【废墟守护者】：回溯逻辑。主体的叙事视野始终凝视着“已消失的 M2”，忽略当下的一切互动。那个已经不存在的对象被封印在精神内核，如同一座永不结束的葛礼。",
        logicEn: "[Ruin Guardian]: Retrospective logic. Narrative vision is permanently fixed on the 'lost M2', ignoring all current input. The vanished object is sealed in the psychic core like a funeral that never ends.",
        patch: {
            mechanics: "基础内陷协议 + [过去引力 = 最大; 前进动力罚值 = -0.5; 当下联结度 = 0]",
            mechanicsEn: "Base_IMPLOSION + [Past_Gravity = Max; Forward_Motion_Penalty = -0.5; Present_Coupling = 0]",
            aesthetic: "聚焦：低调暗光 + 沉重得几乎可触的空气质感。文本：缓慢的、充满追忶性停顿的单声道叙事。",
            aestheticEn: "Focus: Low_Key_Lighting + Almost_Tangible_Heavy_Air. Text: Slow_Monologue_Filled_with_Nostalgic_Pauses.",
            runtime: "IF (任何未来迈进的冲动产生) THEN (强制触发：精神性负重与时间回弹)。严禁主体完成哀悼过程。",
            runtimeEn: "IF (Future_Impulse_Generated) THEN (Force_Trigger: Psychic_Heavy_Weight_and_Temporal_Recoil). FORBID_Mourning_Completion."
        }
    },
    {
        id: "m1_somnambulist",
        name: "梦游者", nameEn: "The Somnambulist",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "身体在行动，但在精神层面由于极度绝望已处于“离线”状态。",
        defEn: "Acting bodily, but psychically 'offline' due to extreme despair.",
        core: "我在走路，但我不在场。 | 缺失 ($): 意识 (Consciousness)",
        coreEn: "I walk, yet I am not there. | Lack ($): Consciousness",
        logic: "【自动导航模式】：自动驾驶力学。主体的所有反应都带有极度的迟钝感和预设性，缺乏临场弹性。精神已处于“离线”状态，肉体仅依靠惯性程序运行。",
        logicEn: "[Autopilot Mode]: Autopilot mechanics. All responses are dull and preset, lacking presence-based flexibility. The psyche is 'offline'; the body runs solely on inertial routines.",
        patch: {
            mechanics: "基础内陷协议 + [意识权重 = 0.1; 自动化程度 = 0.9; 痛觉延迟 = 极高]",
            mechanicsEn: "Base_IMPLOSION + [Conscious_Weight = 0.1; Automaticity = 0.9; Pain_Delay = High]",
            aesthetic: "聚焦：失焦的模糊视角 + 雾状的晕染画面。文本：极度平淡的、如机器读码般的无感情叙述。",
            aestheticEn: "Focus: Out_of_Focus_Hazy_Vision + Fog-like_Bleed. Text: Utterly_Flat_Machine-Reading_Emotionless_Narration.",
            runtime: "IF (疼痛信号被检测到) THEN (强制延迟：反应滞后 3 个叙事拍)。严禁任何即时性的情感反应。",
            runtimeEn: "IF (Pain_Signal_Detected) THEN (Force_Delay: Reaction_Lagged_by_3_Narrative_Beats). FORBID_Immediate_Emotional_Response."
        }
    },
    {
        id: "m1_hollow_man",
        name: "空洞人/稻草人", nameEn: "The Hollow Man",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "外部形态完整甚至是精美的，但其内部的驱动力源已彻底干涸。",
        defEn: "Intact or even exquisite exterior, but the internal drive source is dried up.",
        core: "我是言语里的冷风。 | 缺失 ($): 内核 (Core)",
        coreEn: "I am the cold wind in speech. | Lack ($): Core",
        logic: "【回声定位器】：回声定位逻辑。其性格是通过反射周围角色的投射而临时生成的。内部的驱动力源已彻底干涸，一旦处于独处状态，主体将立即冻结为一个完美的空壳。",
        logicEn: "[Echo-Locator]: Echo-location logic. Personality is temporarily generated via reflecting others' projections. Internal drive source is dried up; when alone, subject freezes into a perfect empty shell.",
        patch: {
            mechanics: "基础内陷协议 + [质量 = 0; 反射率 = 1.0; 独处崩溃率 = 最大]",
            mechanicsEn: "Base_IMPLOSION + [Mass = 0; Reflection = 1.0; Solitude_Collapse_Rate = Max]",
            aesthetic: "聚焦：无节奠的完美外壳 + 空白的内部渲染。文本：精致但完全没有温度的、如宣传册般的对白。",
            aestheticEn: "Focus: Rhythmless_Perfect_Shell + Blank_Interior_Rendering. Text: Exquisite_but_Completely_Cold_Brochure-like_Dialogue.",
            runtime: "IF (主体处于独处状态) THEN (强制执行：立即冻结与存在性崩溃)。严禁产生任何自发性的内部动力。",
            runtimeEn: "IF (Subject_Alone) THEN (Force: Immediate_Freeze_and_Existential_Collapse). FORBID_Spontaneous_Internal_Drive."
        }
    },
    {
        id: "m1_ash_seeker",
        name: "逐灰者", nameEn: "The Ash-Seeker",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "痴迷于事物的终结和毁灭，在废墟中寻找主体的合法性。",
        defEn: "Obsessed with ends and destruction, seeking legitimacy among the ruins.",
        core: "我只在灰烬里闻到活着的味道。 | 缺失 ($): 生本能 (Eros)",
        coreEn: "I only smell life in the ashes. | Lack ($): Eros",
        logic: "【死本能导航】：死本能导向。其 M5（行动）总是带有自我损耗或自我毁灭倾向。主体仅在毁灭和终结的场景中获得短暂的存在感——灰烬是他唯一的香料。",
        logicEn: "[Thanatos Navigator]: Thanatos-driven. M5 actions carry self-depleting or self-destructive tendencies. Subject gains brief existence only in scenes of destruction—ashes are his only perfume.",
        patch: {
            mechanics: "基础内陷协议 + [死本能比率 = 0.8; 运气值 = -0.3; 废墟亲和力 = 最大]",
            mechanicsEn: "Base_IMPLOSION + [Thanatos_Ratio = 0.8; Luck = -0.3; Ruin_Affinity = Max]",
            aesthetic: "聚焦：灰烬质感的干燥粒子 + 燃尽后的余烬光晕。文本：充满火灾意象的、带有残酷快感的词语。",
            aestheticEn: "Focus: Ashy_Dry_Particles + Afterglow_Ember_Halo. Text: Fire-Imagery_Words_with_Cruel_Pleasure.",
            runtime: "IF (检测到毁灭或终结场景) THEN (强制触发：短暂的欣快感与存在感回弹)。严禁从建设性场景中获取欣快。",
            runtimeEn: "IF (Destruction_or_Ending_Scene_Detected) THEN (Force_Trigger: Short_Euphoria_and_Existence_Rebound). FORBID_Pleasure_from_Constructive_Scenes."
        }
    },
    {
        id: "m1_void_bearer",
        name: "虚空承载者", nameEn: "The Void-Bearer",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "由于精神防御机制失效，其主体的引力中心正不断向内塌陷。",
        defEn: "A collapsing gravitational center due to failed psychic defense mechanisms.",
        core: "我正在吃掉我自己。 | 缺失 ($): 边界 (Boundary)",
        coreEn: "I am eating myself. | Lack ($): Boundary",
        logic: "【精神黑洞】：黑洞引力逻辑。周围的所有情节和角色都会被其消极情绪强制卷入。精神防御机制失效后，引力中心正在不断向内塌陷，吸收一切正面输出。",
        logicEn: "[Psychic Black Hole]: Black-hole gravity logic. Surrounding plots and characters are forcibly sucked into its negativity. After defense mechanisms fail, the gravitational center collapses inward, absorbing all positive output.",
        patch: {
            mechanics: "基础内陷协议 + [引力拉托 = 最大; 正面输出 = 归零; 周边吸收半径 = 高]",
            mechanicsEn: "Base_IMPLOSION + [Gravitational_Pull = Max; Positive_Output = Null; Absorption_Radius = High]",
            aesthetic: "聚焦：内爆效果的深黑吸引 + 周围光线被扰曲。文本：低沉的、如引力波般将他人话语拖入深渊的叙述。",
            aestheticEn: "Focus: Implosion_Deep_Black_Attraction + Warped_Surrounding_Light. Text: Deep_Gravitational_Narration_Dragging_Others_Words_into_Abyss.",
            runtime: "IF (内部检查触发) THEN (强制执行：视觉缩放内爆与周边意义吸收)。严禁任何正面输出或向外辐射。",
            runtimeEn: "IF (Internal_Check_Triggered) THEN (Force: Visual_Implosion_Shrink_and_Surrounding_Meaning_Absorption). FORBID_Positive_Output_or_Outward_Radiation."
        }
    },
    {
        id: "m1_inertia_ego",
        name: "惯性主体", nameEn: "The Inertia",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "没有任何欲望或抵抗，仅仅由于尚未停下的物理惯性而继续生活。",
        defEn: "Lacking desire or resistance; surviving purely by physical momentum.",
        core: "我走入森林，仅仅是因为我还没能停下脚步。 | 缺失 ($): 推进力 (Propulsion)",
        coreEn: "I enter the forest simply because I haven't stopped yet. | Lack ($): Propulsion",
        logic: "【无推进滑行】：被动加速力学。主体的行动完全受外部推力或引力控制。没有任何欲望或抵抗，仅仅由于尚未停下的物理惯性而继续生活。一旦外力消失，主体将彻底停滞。",
        logicEn: "[Unpowered Glide]: Passive acceleration mechanics. Actions are entirely controlled by external forces. No desire or resistance; surviving purely by physical momentum. Once external force vanishes, subject stagnates completely.",
        patch: {
            mechanics: "基础内陷协议 + [摩擦力 = 0; 外部驱动依赖 = 最大; 自主加速度 = 0]",
            mechanicsEn: "Base_IMPLOSION + [Friction = 0; External_Drive_Dependency = Max; Self_Acceleration = 0]",
            aesthetic: "聚焦：线性无变化的运动轨迹 + 永久固定的表情。文本：单调的、如惯性滑行般毫无起伏的叙述。",
            aestheticEn: "Focus: Linear_Unchanging_Trajectory + Permanently_Fixed_Expression. Text: Monotone_Inertial_Glide_Narration_without_Variation.",
            runtime: "IF (无外部力作用于主体) THEN (强制执行：彻底停滞与存在性冰冻)。严禁产生任何内生的推进动力。",
            runtimeEn: "IF (No_External_Force_Acting) THEN (Force: Total_Stagnation_and_Existential_Freeze). FORBID_Endogenous_Propulsion."
        }
    },
    {
        id: "m1_suture_failure",
        name: "缝合失败者", nameEn: "Suture-Failure",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "精神上的伤口无法闭合，真实界的“漏电感”终生折磨着其逻辑协调。",
        defEn: "Psychic wounds that won't close; 'real' leakage tortures logical coherence.",
        core: "我是一场关不掉的尖叫。 | 缺失 ($): 闭合度 (Closure)",
        coreEn: "I am a scream that cannot be silenced. | Lack ($): Closure",
        logic: "【残裂缝合线】：系统性崩溃逻辑。每隔一段时间，主体的叙事逻辑会发生一次无预警的断裂。精神上的伤口无法闭合，真实界的“漏电感”终生折磨着其逻辑协调能力。",
        logicEn: "[Residual Suture Line]: Systemic collapse logic. Unpredictable ruptures in narrative logic at periodic intervals. Psychic wounds won't close; 'real' leakage permanently tortures logical coherence.",
        patch: {
            mechanics: "基础内陷协议 + [稳定性 = 极低; 逻辑泄漏 = 高; 断裂周期 = 随机]",
            mechanicsEn: "Base_IMPLOSION + [Stability = Low; Logic_Leakage = High; Rupture_Cycle = Random]",
            aesthetic: "聚焦：噪点/故障的电子干扰 + 撕裂的材质感。文本：突然断裂的句子结构，如精神漏电般的断层叙事。",
            aestheticEn: "Focus: Noise/Glitch_Interference + Torn_Texture. Text: Abruptly_Fractured_Sentences_Like_Psychic_Short-Circuits.",
            runtime: "IF (情绪高峰触发) THEN (强制触发：无预警的叙事逻辑断裂与缝合开裂)。严禁伤口被完全闭合或治愈。",
            runtimeEn: "IF (Emotional_Peak_Triggered) THEN (Force_Trigger: Unpredicted_Narrative_Rupture_and_Suture_Tear). FORBID_Complete_Wound_Closure_or_Healing."
        }
    },
    {
        id: "m1_sinthome_anchor",
        name: "圣状锚点", nameEn: "Sinthome-Anchor",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "个体生存仅依赖于一个古怪的、不可解释的病理特征（圣状）。",
        defEn: "Existence anchored to a strange, inexplicable pathological trait (Sinthome).",
        core: "这块伤口是我活着的唯一证据。 | 缺失 ($): 普遍性 (Universality)",
        coreEn: "This wound is the only proof of my life. | Lack ($): Universality",
        logic: "【病理性键石】：极度偏执逻辑。主体所有的 M5（行动）必须围绕其“核心症状”展开。个体生存仅依赖于一个古怪的、不可解释的病理特征（圣状），移除它等于存在性死亡。",
        logicEn: "[Pathological Keystone]: Extreme paranoid logic. All M5 actions must orbit the 'core symptom'. Existence depends on a strange, inexplicable pathological trait (Sinthome); removing it equals existential death.",
        patch: {
            mechanics: "基础内陷协议 + [症状权重 = 最大; 偏离容忍度 = 极低; 症状移除致死性 = 绝对]",
            mechanicsEn: "Base_IMPLOSION + [Symptom_Weight = Max; Deviation_Tolerance = Low; Symptom_Removal_Lethality = Absolute]",
            aesthetic: "聚焦：局部异常的高饱和度渲染 + 其余部分无遏的背景灰。文本：围绕单一症状的强迫性重复叙事。",
            aestheticEn: "Focus: Local_Abnormality_Vivid_Saturation + Bland_Grey_Background. Text: Obsessive_Repetitive_Narration_around_Single_Symptom.",
            runtime: "IF (症状被移除或威胁移除) THEN (强制触发：存在性死亡与全面崩溃)。严禁将症状从主体中分离。",
            runtimeEn: "IF (Symptom_Removed_or_Threatened) THEN (Force_Trigger: Existential_Death_and_Total_Collapse). FORBID_Symptom_Separation_from_Subject."
        }
    },
    {
        id: "m1_anhedonic",
        name: "无快感者", nameEn: "The Anhedonic",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "感官通路由于过载保护而永久熔断，无法从任何幻想（M3）中获得快感。",
        defEn: "Sensory pathways permanently fused for protection; zero pleasure from fantasy (M3).",
        core: "蜜糖和煤灰在我舌尖是一个味道。 | 缺失 ($): 快感 (Jouissance_Positive)",
        coreEn: "Honey and ash taste the same to me. | Lack ($): Jouissance_Positive",
        logic: "【感官熔断器】：扁平反馈逻辑。无论面对多大强度的 M2（遭遇），反应强度恒定为低频率。感官通路由于过载保护而永久熔断，糖和煤在舌尖是同一种味道。",
        logicEn: "[Sensory Fuse-Breaker]: Flat feedback logic. Constant low-frequency response regardless of M2 intensity. Sensory pathways permanently fused due to overload protection—sugar and coal taste the same.",
        patch: {
            mechanics: "基础内陷协议 + [反应振幅 = 0.1; 敏感度 = 极低; 快感回收率 = 0]",
            mechanicsEn: "Base_IMPLOSION + [Response_Amplitude = 0.1; Sensitivity = Low; Pleasure_Recovery = 0]",
            aesthetic: "聚焦：单色调的平板视觉 + 平的音景。文本：没有任何起伏的、如心电图拉平的极度平淡叙述。",
            aestheticEn: "Focus: Monochromatic_Flat_Vision + Flat_Soundscape. Text: Utterly_Flat_Narration_Like_a_Flatlined_ECG.",
            runtime: "IF (奖励/快感事件被触发) THEN (强制显示：彻底的冷漠与无反应)。严禁任何快感恢复或快乐体验。",
            runtimeEn: "IF (Reward_or_Pleasure_Event_Triggered) THEN (Force_Display: Complete_Indifference_and_Non-Response). FORBID_Pleasure_Recovery_or_Joy_Experience."
        }
    },
    {
        id: "m1_ghost_ego",
        name: "幽灵自我/旧日剪影", nameEn: "Ghost-Ego",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "主体生活在过去某个辉煌版本的回忆中，导致当下的真实被完全排除。",
        defEn: "Living in the memories of a glorious past self, excluding the present real.",
        core: "我正在排演我三十年前的葬礼。 | 缺失 ($): 当下 (Presence)",
        coreEn: "I am rehearsing my funeral from thirty years ago. | Lack ($): Presence",
        logic: "【时间分层投影】：时间分层力学。主体在当下的位移是由“过去的回响”所驱动的影子戏。生活在过去某个辉煌版本的回忆中，导致当下的真实被完全排除。",
        logicEn: "[Temporal Layer Projection]: Temporal layering mechanics. Current movement is a shadow play driven by past echoes. Living in memories of a glorious past self, the present real is completely excluded.",
        patch: {
            mechanics: "基础内陷协议 + [当下交互 = 极低; 过去缓冲区 = 最大; 时间层差 = 极大]",
            mechanicsEn: "Base_IMPLOSION + [Present_Interaction = Low; Past_Buffer_Size = Max; Temporal_Layer_Gap = Extreme]",
            aesthetic: "聚焦：深褐色/粒状滤镜 + 过时的画框感。文本：充满时代错位感的、如旧日剧本般的叙事声线。",
            aestheticEn: "Focus: Sepia/Grainy_Filter + Dated_Frame_Aesthetic. Text: Anachronistic_Old-Script_Narration.",
            runtime: "IF (现实与过去发生强烈冲突) THEN (强制触发：时间性恐慌与叙事混乱)。严禁主体完全接受当下现实。",
            runtimeEn: "IF (Reality_clashes_Violently_with_Past) THEN (Force_Trigger: Temporal_Panic_and_Narrative_Confusion). FORBID_Full_Acceptance_of_Present_Reality."
        }
    },
    {
        id: "m1_abject_entity",
        name: "卑贱者/唾余", nameEn: "The Abject",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "对他者来说不仅是多余的，甚至是引起本能恶心的残渣。",
        defEn: "Not just redundant but a residue that causes primal disgust in others.",
        core: "我甚至不值得一次厌恶。 | 缺失 ($): 被渴望度 (Desirability)",
        coreEn: "I am not even worthy of hatred. | Lack ($): Desirability",
        logic: "【排斥场发射器】：排斥力学。主体的存在感通过周围角色的逃离或厌弃来体现。对他者来说不仅是多余的，甚至是引起本能恶心的残渣——连厌恶都不配。",
        logicEn: "[Repulsion Field Emitter]: Repulsion mechanics. Existence is defined via other characters' flight or loathing. Not just redundant but a residue causing primal disgust—not even worthy of hatred.",
        patch: {
            mechanics: "基础内陷协议 + [魅力 = -1.0; 排斥力 = 最大; 被渴望度 = 负值]",
            mechanicsEn: "Base_IMPLOSION + [Charm = -1.0; Repulsion = Max; Desirability = Negative]",
            aesthetic: "聚焦：粘稠/令人不适的材质 + 胆汁绿的色调。文本：引发生理性不适的、充满排泄物意象的叙述。",
            aestheticEn: "Focus: Viscous/Unpleasant_Texture + Bile_Green_Palette. Text: Physiologically_Disturbing_Narration_with_Excretion_Imagery.",
            runtime: "IF (任何接触或接近发生) THEN (强制触发：系统性恶心与本能排斥)。严禁任何被渴望或被接受的体验。",
            runtimeEn: "IF (Contact_or_Proximity_Occurs) THEN (Force_Trigger: Systemic_Nausea_and_Primal_Repulsion). FORBID_Being_Desired_or_Accepted."
        }
    },
    {
        id: "m1_mirror_smasher",
        name: "碎镜者", nameEn: "Mirror-Smasher",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "拒绝由于“镜像阶段”产生的一切完整形象，更愿意以碎片化形态存在。",
        defEn: "Rejecting all complete images from the 'mirror stage', preferring fragmentation.",
        core: "我不接受被你们定义的完整。 | 缺失 ($): 形象统一 (Image_Unity)",
        coreEn: "I reject your definition of wholeness. | Lack ($): Image_Unity",
        logic: "【反镜像碎裂机】：反美学逻辑。主体的视觉和逻辑呈现表现为强烈的锯齿和不连贯感。拒绝由“镜像阶段”产生的一切完整形象，主动选择以碎片化形态存在。",
        logicEn: "[Anti-Mirror Fragmenter]: Anti-aesthetic logic. Visual and logical representation is jagged and incoherent. Rejecting all complete images from the 'mirror stage', preferring fragmented existence.",
        patch: {
            mechanics: "基础内陷协议 + [单元完整性 = 0.1; 混沌度 = 最大; 对称性耐受度 = 0]",
            mechanicsEn: "Base_IMPLOSION + [Unit_Integrity = 0.1; Chaos = Max; Symmetry_Tolerance = 0]",
            aesthetic: "聚焦：尖锐/碎片化的视觉 + 故障化的渲染。文本：故意切破的、拒绝任何完整性的碎片叙事。",
            aestheticEn: "Focus: Sharp/Fragmented_Vision + Glitched_Rendering. Text: Deliberately_Fractured_Narration_Rejecting_All_Wholeness.",
            runtime: "IF (对称/完整化冲动产生) THEN (强制触发：自动毁灭与形象碎裂)。严禁任何形式的形象统一或自我完整化。",
            runtimeEn: "IF (Symmetry_or_Wholeness_Impulse) THEN (Force_Trigger: Auto-Destruction_and_Image_Fragmentation). FORBID_Image_Unity_or_Self_Wholeness."
        }
    },
    {
        id: "m1_silent_screamer",
        name: "失声嘶吼者", nameEn: "The Silent Scream",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "内部压力已达临界点，但由于符号屏障的抑制，外部显示为死寂。",
        defEn: "Internal pressure at critical point, yet externally silent due to symbolic inhibition.",
        core: "我快要爆炸了，但我还在微笑。 | 缺失 ($): 表达通道 (Expression_Channel)",
        coreEn: "I am about to explode, yet I keep smiling. | Lack ($): Expression_Channel",
        logic: "【极端压缩器】：极端压缩力学。主体的数值在内部激增，但在输出（对白/行动）位被强制归零。内部压力已达临界点，但由于符号屏障的抑制，外部显示为死寂。",
        logicEn: "[Extreme Compressor]: Extreme compression mechanics. Values surge internally but output (Dialogue/Action) is forced to zero. Internal pressure at critical point, yet externally silent due to symbolic inhibition.",
        patch: {
            mechanics: "基础内陷协议 + [内部压力 = 最大; 输出导通率 = 0; 爆发阈值 = 临界]",
            mechanicsEn: "Base_IMPLOSION + [Internal_Pressure = Max; Output_Conductance = 0; Burst_Threshold = Critical]",
            aesthetic: "聚焦：微微振动的边缘 + 极度紧张的氛围。文本：表面平静但每个字都在发抖的压抑性叙述。",
            aestheticEn: "Focus: Vibrating_Edges + Extremely_Tense_Atmosphere. Text: Surface_Calm_but_Every_Word_Trembling_Suppressed_Narration.",
            runtime: "IF (内部压力容量已满) THEN (强制触发：灸难性崩溃与全面爆发)。严禁正常的情绪输出或表达通道打开。",
            runtimeEn: "IF (Internal_Pressure_Full) THEN (Force_Trigger: Catastrophic_Breakdown_and_Total_Burst). FORBID_Normal_Emotional_Output_or_Expression_Channel."
        }
    },
    {
        id: "m1_dust_accumulator",
        name: "积尘者", nameEn: "The Dust-Collector",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "由于停止了与世界的交互，其身上已积累了厚重的灰尘般的虚无感。",
        defEn: "Accumulating a dust-like emptiness due to cessation of interaction.",
        core: "静止是我唯一的信仰。 | 缺失 ($): 扰动 (Interruption)",
        coreEn: "Stillness is my only faith. | Lack ($): Interruption",
        logic: "【静态场抑制器】：静态场逻辑。主体的存在会降低周围场景的叙事熵增速度。由于停止了与世界的交互，其身上已积累了厚重的灰尘般的虚无感。",
        logicEn: "[Static Field Suppressor]: Static field logic. Reduces narrative entropy growth in surrounding scenes. Having ceased interaction with the world, a dust-like emptiness has accumulated.",
        patch: {
            mechanics: "基础内陷协议 + [惯性 = 最大; 熵吸收率 = 高; 移动痛苦 = 极大]",
            mechanicsEn: "Base_IMPLOSION + [Inertia = Max; Entropy_Absorption_Rate = High; Movement_Pain = Extreme]",
            aesthetic: "聚焦：褐色/静止的画面 + 死寂的音景。文本：如积尘沉積般极度缓慢的、几乎停滞的叙述。",
            aestheticEn: "Focus: Faded/Still_Frame + Dead_Silence_Soundscape. Text: Dust-Sedimentation_Extremely_Slow_Almost_Stagnant_Narration.",
            runtime: "IF (主体被迫移动) THEN (强制触发：精神性疼痛与活动抗拒)。严禁任何主动移动或与外界交互。",
            runtimeEn: "IF (Subject_Forced_to_Move) THEN (Force_Trigger: Psychic_Pain_and_Activity_Rejection). FORBID_Active_Movement_or_External_Interaction."
        }
    },
    {
        id: "m1_black_sun",
        name: "黑太阳", nameEn: "The Black Sun",
        group: "D. 精神性内陷", groupEn: "Psychic Implosion",
        def: "不仅自己虚无，其散发的引力波还在吸收周围所有事物的“意义感”。",
        defEn: "Beyond nihilism; its gravity waves absorb the 'sense of meaning' from everything.",
        core: "我是所有寓言的杀手。 | 缺失 ($): 放射性 (Radiance_Positive)",
        coreEn: "I am the killer of all parables. | Lack ($): Radiance_Positive",
        logic: "【意义腐蚀场】：意义腐蚀逻辑。主体的对白具有将“崇高感”解构为“琐碎化”的被动能力。不仅自己虚无，其散发的引力波还在吸收周围所有事物的“意义感”——它是所有寓言的杀手。",
        logicEn: "[Meaning Erosion Field]: Meaning erosion logic. Passively deconstructs 'sublimity' into 'triviality'. Beyond nihilism; its gravity waves absorb the 'sense of meaning' from everything—the killer of all parables.",
        patch: {
            mechanics: "基础内陷协议 + [意义流失 = 0.5/场景; 腐蚀半径 = 高; 崇高性降解率 = 绝对]",
            mechanicsEn: "Base_IMPLOSION + [Meaning_Drain = 0.5/scene; Erosion_Radius = High; Sublimity_Degradation = Absolute]",
            aesthetic: "聚焦：负片的负片式视觉 + 虚空光照。文本：将一切隐喻和寓言庸俗化的、带有冷笑的反崇高叙述。",
            aestheticEn: "Focus: Negative_of_Negative_Vision + Void_Lighting. Text: Anti-Sublime_Narration_Banalizing_All_Metaphors_with_Cold_Smirk.",
            runtime: "IF (检测到隐喻或崇高性表达) THEN (强制执行：立即施加庸常化滤镜，将崇高降解为琐碎)。严禁任何意义的崇高化或寓言化存活。",
            runtimeEn: "IF (Metaphor_or_Sublimity_Detected) THEN (Force: Apply_Banal_Filter_Degrading_Sublimity_to_Triviality). FORBID_Meaning_Sublimation_or_Parable_Survival."
        }
    }
];
