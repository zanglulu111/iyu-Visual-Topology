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
        logic: "反驱动逻辑。主体的 M5（行动）总是指向对当前目标（M3）的拆解。",
        logicEn: "Anti-drive logic. M5 actions always point to the deconstruction of the target (M3).",
        patch: {
            mechanics: "Drive_Resistance = Max; Entropy_Generator = High.",
            mechanicsEn: "Drive_Resistance = Max; Entropy_Generator = High.",
            aesthetic: "Palette: High_Grey; Rendering: Blurred_Edges.",
            aestheticEn: "Palette: High_Grey; Rendering: Blurred_Edges.",
            runtime: "Logic: IF (Value_Found) THEN Negate(Value)."
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
        logic: "回溯逻辑。主体的叙事视野始终凝视着“已消失的 M2”，忽略当下的互动。",
        logicEn: "Retrospective logic. Narrative vision is fixed on the 'lost M2', ignoring current input.",
        patch: {
            mechanics: "Past_Gravity = High; Forward_Motion_Penalty = -0.5.",
            mechanicsEn: "Past_Gravity = High; Forward_Motion_Penalty = -0.5.",
            aesthetic: "Lighting: Low_Key; Atmosphere: Heavy.",
            aestheticEn: "Lighting: Low_Key; Atmosphere: Heavy.",
            runtime: "Stuck: IF (Future_Impulse) THEN Trigger(Psychic_Heavy_Weight)."
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
        logic: "自动驾驶力学。主体的所有反应都带有极度的迟钝感和预设性，缺乏临场弹性。",
        logicEn: "Autopilot mechanics. Responses are dull and preset, lacking presence-based flexibility.",
        patch: {
            mechanics: "Conscious_Weight = 0.1; Automaticity = 0.9.",
            mechanicsEn: "Conscious_Weight = 0.1; Automaticity = 0.9.",
            aesthetic: "Focus: Out_of_Focus; Vision: Hazy.",
            aestheticEn: "Focus: Out_of_Focus; Vision: Hazy.",
            runtime: "Check: IF (Pain_Detected) THEN Delay(Reaction)."
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
        logic: "回声定位逻辑。其性格是通过反射周围角色的投射而临时生成的。",
        logicEn: "Echo-location logic. Personality is temporarily reflected via other characters' projections.",
        patch: {
            mechanics: "Mass = 0; Reflection = 1.0.",
            mechanicsEn: "Mass = 0; Reflection = 1.0.",
            aesthetic: "Rhythm: None; Appearance: Perfect/Blank.",
            aestheticEn: "Rhythm: None; Appearance: Perfect/Blank.",
            runtime: "Expose: IF (Alone) THEN Freeze(Subject)."
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
        logic: "死本能导向。其 M5（行动）总是带有自我损耗或自我毁灭倾向。",
        logicEn: "Thanatos-driven. M5 actions carry self-depleting or self-destructive tendencies.",
        patch: {
            mechanics: "Thanatos_Ratio = 0.8; Luck = -0.3.",
            mechanicsEn: "Thanatos_Ratio = 0.8; Luck = -0.3.",
            aesthetic: "Palette: Ashy; Texture: Dry.",
            aestheticEn: "Palette: Ashy; Texture: Dry.",
            runtime: "Glow: IF (Destruction) THEN Trigger(Short_Euphoria)."
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
        logic: "黑洞引力逻辑。周围的所有情节和角色都会被其消极情绪强制卷入。",
        logicEn: "Black-hole gravity. Surrounding plots and characters are forcibly sucked into its negativity.",
        patch: {
            mechanics: "Gravitational_Pull = High; Positive_Output = Null.",
            mechanicsEn: "Gravitational_Pull = High; Positive_Output = Null.",
            aesthetic: "Visuals: Implosion_Effect; Color: Deep_Black.",
            aestheticEn: "Visuals: Implosion_Effect; Color: Deep_Black.",
            runtime: "Collapse: IF (Internal_Check) THEN Shrink(Visual_Scale)."
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
        logic: "被动加速力学。主体的行动完全受外部推力或引力控制。",
        logicEn: "Passive acceleration. Actions are entirely controlled by external forces.",
        patch: {
            mechanics: "Friction = 0; External_Drive_Dependency = Max.",
            mechanicsEn: "Friction = 0; External_Drive_Dependency = Max.",
            aesthetic: "Movement: Linear; Expression: Fixed.",
            aestheticEn: "Movement: Linear; Expression: Fixed.",
            runtime: "Stop: IF (No_External_Force) THEN Stagnate(Subject)."
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
        logic: "系统性崩溃逻辑。每隔一段时间，主体的叙事逻辑会发生一次无预警的断裂。",
        logicEn: "Systemic collapse. Unpredictable ruptures in narrative logic at periodic intervals.",
        patch: {
            mechanics: "Stability = Low; Logic_Leakage = High.",
            mechanicsEn: "Stability = Low; Logic_Leakage = High.",
            aesthetic: "Filter: Noise/Glitched; Texture: Torn.",
            aestheticEn: "Filter: Noise/Glitched; Texture: Torn.",
            runtime: "Leak: IF (Emotional_High) THEN Trigger(Rupture)."
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
        logic: "极度偏执逻辑。主体所有的 M5（行动）必须围绕其“核心症状”展开。",
        logicEn: "Extreme paranoia. All M5 actions revolve around the 'core symptom'.",
        patch: {
            mechanics: "Symptom_Weight = Max; Deviation = Low.",
            mechanicsEn: "Symptom_Weight = Max; Deviation = Low.",
            aesthetic: "Focus: Local_Abnormality; Rendering: Vivid.",
            aestheticEn: "Focus: Local_Abnormality; Rendering: Vivid.",
            runtime: "Check: IF (Symptom_Removed) THEN Trigger(Existential_Death)."
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
        logic: "扁平反馈逻辑。无论面对多大强度的 M2（遭遇），反应强度恒定为低频率。",
        logicEn: "Flat feedback. Constant low-frequency response regardless of M2 intensity.",
        patch: {
            mechanics: "Response_Amplitude = 0.1; Sensitivity = Low.",
            mechanicsEn: "Response_Amplitude = 0.1; Sensitivity = Low.",
            aesthetic: "Sound: Flat; Palette: Monochromatic.",
            aestheticEn: "Sound: Flat; Palette: Monochromatic.",
            runtime: "Check: IF (Reward_Event) THEN Show(Indifference)."
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
        logic: "时间分层力学。主体在当下的位移是由“过去的回响”所驱动的影子戏。",
        logicEn: "Temporal layering. Current movement is a shadow play driven by past echoes.",
        patch: {
            mechanics: "Present_Interaction = Low; Past_Buffer_Size = Max.",
            mechanicsEn: "Present_Interaction = Low; Past_Buffer_Size = Max.",
            aesthetic: "Filter: Sepia/Grainy; Frame: Dated.",
            aestheticEn: "Filter: Sepia/Grainy; Frame: Dated.",
            runtime: "Glitch: IF (Reality_Clash) THEN Trigger(Temporal_Panic)."
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
        logic: "排斥力学。主体的存在感通过周围角色的逃离或厌弃来体现。",
        logicEn: "Repulsion mechanics. Existence is defined via other characters' flight or loathing.",
        patch: {
            mechanics: "Charm = -1.0; Repulsion = High.",
            mechanicsEn: "Charm = -1.0; Repulsion = High.",
            aesthetic: "Visuals: Viscous/Unpleasant; Palette: Bile_Green.",
            aestheticEn: "Visuals: Viscous/Unpleasant; Palette: Bile_Green.",
            runtime: "Interaction: IF (Touch) THEN Trigger(System_Nausea)."
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
        logic: "反美学逻辑。主体的视觉和逻辑呈现表现为强烈的锯齿和不连贯感。",
        logicEn: "Anti-aesthetic logic. Visual and logical representation is jagged and incoherent.",
        patch: {
            mechanics: "Unit_Integrity = 0.1; Chaos = Max.",
            mechanicsEn: "Unit_Integrity = 0.1; Chaos = Max.",
            aesthetic: "Visuals: Sharp/Fragmented; Rendering: Glitched.",
            aestheticEn: "Visuals: Sharp/Fragmented; Rendering: Glitched.",
            runtime: "Reaction: IF (Symmetry_Impulse) THEN Trigger(Auto-Destruction)."
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
        logic: "极端压缩力学。主体的数值在内部激增，但在输出（Dialogue/Action）位被强制归零。",
        logicEn: "Extreme compression. Values surge internally but are forced to zero output.",
        patch: {
            mechanics: "Internal_Pressure = Max; Output_Conductance = 0.",
            mechanicsEn: "Internal_Pressure = Max; Output_Conductance = 0.",
            aesthetic: "Visuals: Vibrating_Edges; Atmosphere: Tense.",
            aestheticEn: "Visuals: Vibrating_Edges; Atmosphere: Tense.",
            runtime: "Burst: IF (Full) THEN Trigger(Catastrophic_Breakdown)."
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
        logic: "静态场逻辑。主体的存在会降低周围场景的叙事熵增速度。",
        logicEn: "Static field logic. Reduces narrative entropy growth in surrounding scenes.",
        patch: {
            mechanics: "Inertia = Max; Entropy_Absorption_Rate = High.",
            mechanicsEn: "Inertia = Max; Entropy_Absorption_Rate = High.",
            aesthetic: "Visuals: Faded/Still; Sound: Dead_Silence.",
            aestheticEn: "Visuals: Faded/Still; Sound: Dead_Silence.",
            runtime: "Update: IF (Moved) THEN Trigger(Psychic_Pain)."
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
        logic: "意义腐蚀逻辑。主体的对白具有将“崇高感”解构为“琐碎化”的被动能力。",
        logicEn: "Meaning erosion. Passively deconstructs 'sublimity' into 'triviality'.",
        patch: {
            mechanics: "Meaning_Drain = 0.5/scene; Radius = High.",
            mechanicsEn: "Meaning_Drain = 0.5/scene; Radius = High.",
            aesthetic: "Visuals: Negative_Negative; Lighting: Void.",
            aestheticEn: "Visuals: Negative_Negative; Lighting: Void.",
            runtime: "Logic: IF (Metaphor_Detected) THEN Apply(Banal_Filter)."
        }
    }
];
