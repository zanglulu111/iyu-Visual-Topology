import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_F: LibraryItemDef[] = [
    {
        id: "m1_severed_hand",
        name: "断手/执行器", nameEn: "The Severed Hand",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "脱离了大脑指令的单纯动作实体，只剩下抓取或破坏的本能。",
        defEn: "A pure action entity detached from brain instruction, left only with instinctual grasping or destruction.",
        core: "我动，但我没有想过动。 | 缺失 ($): 协调 (Coordination)",
        coreEn: "I move, yet I never thought of moving. | Lack ($): Coordination",
        logic: "局部化执行力学。主体无法处理复杂的逻辑分支，只能执行简单的物理指令。",
        logicEn: "Local execution. Cannot handle complex logic branches; only simple physical commands.",
        patch: {
            mechanics: "Dexterity = High; Wisdom = 0.",
            mechanicsEn: "Dexterity = High; Wisdom = 0.",
            aesthetic: "Focus: Hand_Detail; Scale: Macro.",
            aestheticEn: "Focus: Hand_Detail; Scale: Macro.",
            runtime: "Logic: IF (Command_Unclear) THEN Revert(Primal_Action)."
        }
    },
    {
        id: "m1_watchman_eye",
        name: "守望者之眼", nameEn: "The Detached Eye",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "只有视觉连接而没有肢体交互的主体，被迫成为永恒的旁观者。",
        defEn: "Subject with only visual connection and no limb interaction; forced eternal bystander.",
        core: "世界在我眼里焚毁，而我的手在虚空里。 | 缺失 ($): 干预能力 (Agency)",
        coreEn: "The world burns in my eyes, while my hands rest in void. | Lack ($): Agency",
        logic: "超视觉逻辑。视力半径（S6）为无限，但力量传输（S5）恒定为 0。",
        logicEn: "Hyper-vision logic. Infinite vision radius, but zero force transmission.",
        patch: {
            mechanics: "Vision_Range = Max; Interaction_Weight = 0.",
            mechanicsEn: "Vision_Range = Max; Interaction_Weight = 0.",
            aesthetic: "Visuals: Fisheye; Atmosphere: Silent.",
            aestheticEn: "Visuals: Fisheye; Atmosphere: Silent.",
            runtime: "Check: IF (Attempt_Push) THEN Trigger(Ghost_Hand_Error)."
        }
    },
    {
        id: "m1_echo_ear",
        name: "回声之耳", nameEn: "The Echoing Ear",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "听觉通道被大他者的旨令完全塞满，再也听不见真实界的杂音。",
        defEn: "Auditory channel fully occupied by the Other's commands; deaf to the Real's noise.",
        core: "上帝在对我耳鸣。 | 缺失 ($): 沉默 (Silence)",
        coreEn: "God is tinnitus in my ear. | Lack ($): Silence",
        logic: "过度载入逻辑。主体的所有反应都被外界的指令噪音抢占了优先级。",
        logicEn: "Overload logic. All responses are preempted by external command noise.",
        patch: {
            mechanics: "Signal_to_Noise = 0; Obedience = Max.",
            mechanicsEn: "Signal_to_Noise = 0; Obedience = Max.",
            aesthetic: "Audio: High-pitched; Atmosphere: Chaotic.",
            aestheticEn: "Audio: High-pitched; Atmosphere: Chaotic.",
            runtime: "Tinnitus: IF (Silence) THEN Trigger(Internal_Scream)."
        }
    },
    {
        id: "m1_phantom_limb",
        name: "幻肢/空锚点", nameEn: "The Phantom Limb",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "感到某个器官还在，但那只是神经回路中一段回绕的长久痛感。",
        defEn: "Feeling an organ still present; merely a lingering loop of neural pain.",
        core: "我尝试握紧拳头，但我没有手指。 | 缺失 ($): 终点 (Terminal)",
        coreEn: "I try to clench my fist, but I have no fingers. | Lack ($): Terminal",
        logic: "假阳性力学。主体频繁发起无效的物理动作请求。",
        logicEn: "False positive mechanics. Subject frequently issues invalid physical action requests.",
        patch: {
            mechanics: "Ghost_Input = High; Reality_Output = 0.",
            mechanicsEn: "Ghost_Input = High; Reality_Output = 0.",
            aesthetic: "Visuals: Transparent_Glow; Sound: Static.",
            aestheticEn: "Visuals: Transparent_Glow; Sound: Static.",
            runtime: "Action: IF (Triggered) THEN Show(Empty_Move)."
        }
    },
    {
        id: "m1_voice_box",
        name: "传声筒", nameEn: "The Voice Box",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "喉咙变成了公共频道的扩音器，其言语与主体的欲望完全无关。",
        defEn: "The throat becomes a public channel speaker; speech unrelated to the subject's desire.",
        core: "我张开嘴，说出来的却不是我的话。 | 缺失 ($): 表达真实 (Sincerity)",
        coreEn: "I open my mouth, but the words are not mine. | Lack ($): Sincerity",
        logic: "脱节输出逻辑。台词内容（Dialogue）与 M5 行动经常发生 180 度翻转。",
        logicEn: "Disconnected output logic. Dialogue frequently contradicts M5 actions by 180 degrees.",
        patch: {
            mechanics: "Authenticity = -1.0; Social_Volume = High.",
            mechanicsEn: "Authenticity = -1.0; Social_Volume = High.",
            aesthetic: "Audio: Metallic/Radio; Animation: Desync.",
            aestheticEn: "Audio: Metallic/Radio; Animation: Desync.",
            runtime: "Check: IF (Try_Sincerity) THEN Trigger(Gag_Reflex)."
        }
    },
    {
        id: "m1_the_skinless",
        name: "无皮者", nameEn: "The Skinless",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "防御机制（象征性皮肤）彻底丧失，世界的一丁点轻抚都是剧痛。",
        defEn: "Total loss of defense mechanisms (Symbolic Skin); the world's slightest touch is agony.",
        core: "空气在割伤我。 | 缺失 ($): 屏障 (Barrier)",
        coreEn: "The air is cutting me. | Lack ($): Barrier",
        logic: "超敏反应逻辑。对环境 M2（遭遇）的波动响应放大 10 倍。",
        logicEn: "Hypersensitivity logic. Response to M2 environmental fluctuations amplified by 10x.",
        patch: {
            mechanics: "Vulnerability = Max; Reaction_Multiplier = 10.",
            mechanicsEn: "Vulnerability = Max; Reaction_Multiplier = 10.",
            aesthetic: "Visuals: Raw/Exposed; Color: Intense_Red.",
            aestheticEn: "Visuals: Raw/Exposed; Color: Intense_Red.",
            runtime: "Shock: IF (Contact) THEN Trigger(Neural_Blast)."
        }
    },
    {
        id: "m1_nerve_end",
        name: "神经末梢", nameEn: "The Nerve End",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "没有中枢指挥的纯粹感知簇，只会被动地感受到痛苦和震颤。",
        defEn: "Pure sensory clusters without central command, only feeling pain and tremors passively.",
        core: "除了颤抖，我什么都不会。 | 缺失 ($): 中央司令部 (Central_Command)",
        coreEn: "I know nothing but trembling. | Lack ($): Central_Command",
        logic: "自激震荡逻辑。主体的数值在微小的外部刺激下即陷入无止境的高频波动。",
        logicEn: "Self-excited oscillation logic. Values enter high-frequency fluctuations upon tiny stimulus.",
        patch: {
            mechanics: "Stability = Null; Tremor_Index = High.",
            mechanicsEn: "Stability = Null; Tremor_Index = High.",
            aesthetic: "Animation: Shaking; Visuals: Unsteady.",
            aestheticEn: "Animation: Shaking; Visuals: Unsteady.",
            runtime: "Spasm: IF (Stimulus) THEN Run(Vibration_Loop)."
        }
    },
    {
        id: "m1_organ_without_body",
        name: "无器官身体/功能堆", nameEn: "Organ Without Body",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "一堆高效运作的功能集合，但缺乏一个统一的“自我”核心来统筹感官。",
        defEn: "Efficient functional set lacking a unified 'ego' core to coordinate senses.",
        core: "我的心脏在加速，但我的大脑在睡觉。 | 缺失 ($): 统一性 (Unity)",
        coreEn: "My heart races while my brain sleeps. | Lack ($): Unity",
        logic: "分布式混乱力学。主体的各个属性（S1-S20）分别对外部互动做出冲突的反应。",
        logicEn: "Distributed chaos. Subject parameters react conflictually to external input.",
        patch: {
            mechanics: "Cohesion = 0.1; Parallel_Processes = Many.",
            mechanicsEn: "Cohesion = 0.1; Parallel_Processes = Many.",
            aesthetic: "Visuals: Abstract_Assembly; Rendering: Non-Linear.",
            aestheticEn: "Visuals: Abstract_Assembly; Rendering: Non-Linear.",
            runtime: "Conflict: IF (Unified_Action_Needed) THEN Trigger(System_Stall)."
        }
    },
    {
        id: "m1_glass_ego",
        name: "玻璃体/易碎体", nameEn: "The Glass Ego",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "物质意义上的主体极其脆弱，任何物理碰撞都会导致其逻辑崩跌。",
        defEn: "Materially fragile; any physical collision leads to logical collapse.",
        core: "请离我远点，我会碎掉。 | 缺失 ($): 质量 (Durability)",
        coreEn: "Stay away, I might shatter. | Lack ($): Durability",
        logic: "高脆性力学。一旦 M2（遭遇）强度超过 1, 主体将直接进入“破碎”形态。",
        logicEn: "High-brittleness mechanics. If M2 intensity > 1, the subject immediately shatters.",
        patch: {
            mechanics: "Hardness = 10; Toughness = 0.1.",
            mechanicsEn: "Hardness = 10; Toughness = 0.1.",
            aesthetic: "Texture: Transparent/Sharp; SFX: Crystal_Cracking.",
            aestheticEn: "Texture: Transparent/Sharp; SFX: Crystal_Cracking.",
            runtime: "Shatter: IF (Collision) THEN Trigger(Fragment_Mode)."
        }
    },
    {
        id: "m1_sensory_deprived",
        name: "锁定主体/茧中人", nameEn: "Locked-in",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "拥有活跃的意识但所有对外的感知和输出通道都被彻底切断。",
        defEn: "Active consciousness with all external sensory and output channels severed.",
        core: "我在我的头颅里尖叫了一万年。 | 缺失 ($): 接口 (Interface)",
        coreEn: "I've screamed in my skull for ten thousand years. | Lack ($): Interface",
        logic: "绝对孤岛逻辑。主体的所有数据流动均为内部自循环，外界无法捕捉。",
        logicEn: "Absolute island logic. All data flow is internal; undetectable from outside.",
        patch: {
            mechanics: "Output = 0; Internal_Logic_Speed = Max.",
            mechanicsEn: "Output = 0; Internal_Logic_Speed = Max.",
            aesthetic: "Visuals: Narrow_Slot; Lighting: Dark.",
            aestheticEn: "Visuals: Narrow_Slot; Lighting: Dark.",
            runtime: "Pulse: IF (External_Signal) THEN Store_Externally(NULL)."
        }
    },
    {
        id: "m1_motor_glitch_ego",
        name: "电机错误/震颤者", nameEn: "Motor Glitch",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "中枢指令到肌肉执行之间发生了逻辑漂移，动作具有不可控的痉挛性。",
        defEn: "Logical drift between central command and muscular execution; spasmic actions.",
        core: "我的腿想往左，但我的影子往右。 | 缺失 ($): 传导 (Conductance)",
        coreEn: "My legs go left, but my shadow goes right. | Lack ($): Conductance",
        logic: "非线性执行力学。所有 M5 行动都有延迟 0.1-2.0 秒的剧烈抖动反应。",
        logicEn: "Non-linear execution. M5 actions carry 0.1-2.0s jitter lag.",
        patch: {
            mechanics: "Jitter = 0.3; Precision = Low.",
            mechanicsEn: "Jitter = 0.3; Precision = Low.",
            aesthetic: "Visuals: Ghosting; Animation: Twitchy.",
            aestheticEn: "Visuals: Ghosting; Animation: Twitchy.",
            runtime: "Glitch: IF (High_Stress) THEN Trigger(Spasm)."
        }
    },
    {
        id: "m1_hyper_focus_eye",
        name: "单向度视点", nameEn: "Hyper-Focus",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "感官被迫锁定在一个极其微小的细节上，从而对全局的崩溃视而不见。",
        defEn: "Senses locked onto a minute detail, ignoring the overall collapse.",
        core: "我只看得到这颗纽扣的纹理。 | 缺失 ($): 视野 (Peripheral_Vision)",
        coreEn: "I only see the texture of this button. | Lack ($): Peripheral_Vision",
        logic: "隧道视野力学。主体的权重仅对自己关注的 X 指标有效，其余为 0。",
        logicEn: "Tunnel-vision mechanics. Weight only applies to the focused X parameter; others are 0.",
        patch: {
            mechanics: "Peripheral_Awareness = 0; Detail_Processing = Max.",
            mechanicsEn: "Peripheral_Awareness = 0; Detail_Processing = Max.",
            aesthetic: "Visuals: Extreme_Bokeh; Lighting: Spotlight.",
            aestheticEn: "Visuals: Extreme_Bokeh; Lighting: Spotlight.",
            runtime: "Blind: IF (Threat_from_Side) THEN Trigger(Ignorance)."
        }
    },
    {
        id: "m1_the_anaesthetic",
        name: "麻木者", nameEn: "The Anaesthetic",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "精神上的局部麻醉，导致其在承载巨大的 M2 冲击时毫无生机。",
        defEn: "Local psychic anesthesia; zero vitality when bearing massive M2 impact.",
        core: "我已经不再觉得冷了。 | 缺失 ($): 痛觉 (Nociception)",
        coreEn: "I no longer feel the cold. | Lack ($): Nociception",
        logic: "冲击吸收逻辑。主体具有防御加成，但也失去了所有因受难而产生的叙事动力。",
        logicEn: "Shock absorption. High defense but zero narrative drive from suffering.",
        patch: {
            mechanics: "Pain_Absorption = Max; Motivation = Null.",
            mechanicsEn: "Pain_Absorption = Max; Motivation = Null.",
            aesthetic: "Visuals: Dull/Wax-like; Palette: Beige.",
            aestheticEn: "Visuals: Dull/Wax-like; Palette: Beige.",
            runtime: "Sensation: IF (Damage) THEN Output(Empty_Report)."
        }
    },
    {
        id: "m1_split_symmetry",
        name: "对称分裂", nameEn: "Split Symmetry",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "主体的身体两侧由不兼容的逻辑驱动，处于永久的自我撕裂中。",
        defEn: "Body sides driven by incompatible logics, in permanent self-tearing.",
        core: "我的左手在求救，我的右手在补刀。 | 缺失 ($): 对称一致 (Consistency)",
        coreEn: "My left hand begs for help; my right hand delivers the strike. | Lack ($): Consistency",
        logic: "二元冲突力学。主体的 M5（行动）总是以两个互相抵消的矢量呈现。",
        logicEn: "Binary conflict mechanics. M5 actions always manifest as canceling vectors.",
        patch: {
            mechanics: "Coherence = -0.5; Internal_Friction = Max.",
            mechanicsEn: "Coherence = -0.5; Internal_Friction = Max.",
            aesthetic: "Visuals: Vertical_Split; Animation: Staggered.",
            aestheticEn: "Visuals: Vertical_Split; Animation: Staggered.",
            runtime: "Tear: IF (Decision) THEN Trigger(Motor_Lock)."
        }
    },
    {
        id: "m1_gravity_flipped",
        name: "重力反转者", nameEn: "Gravity-Flipped",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "主体的物理重心与符号引力发生了 180 度反转，永远无法脚踏实地。",
        defEn: "Physical center and symbolic gravity flipped by 180 degrees; never grounded.",
        core: "对我来说，深渊就在头顶。 | 缺失 ($): 重力感 (G-Grip)",
        coreEn: "For me, the abyss is overhead. | Lack ($): G-Grip",
        logic: "空间颠倒逻辑。主体的位移方向（M5）必须始终取其逻辑预期的反方向。",
        logicEn: "Spatial inversion. Movement (M5) always opposite to logical expectation.",
        patch: {
            mechanics: "Gravity_Constant = -9.8; Perception = Inverted.",
            mechanicsEn: "Gravity_Constant = -9.8; Perception = Inverted.",
            aesthetic: "Camera: Upside_Down; Visuals: Floating_Debris.",
            aestheticEn: "Camera: Upside_Down; Visuals: Floating_Debris.",
            runtime: "Fall: IF (Release) THEN Rise(Subject)."
        }
    },
    {
        id: "m1_residual_pulse",
        name: "残留脉动", nameEn: "Residual Pulse",
        group: "F. 感官性脱落", groupEn: "Sensory Decoupling",
        def: "仅剩下一丝微弱的、非主观控制的生理节律，主体性已可忽略。",
        defEn: "Only a faint, non-subjective biological rhythm remains; subjectivity is negligible.",
        core: "我还跳动，但这与我无关。 | 缺失 ($): 主体身份 (Identity)",
        coreEn: "I beat, but it's not about me. | Lack ($): Identity",
        logic: "极简力学。主体在叙事中唯一的输出就是其规律的停顿，没有任何变数。",
        logicEn: "Minimalist mechanics. Only output is periodic pause; zero variables.",
        patch: {
            mechanics: "Interaction = 0; Rhythm_Stability = Max.",
            mechanicsEn: "Interaction = 0; Rhythm_Stability = Max.",
            aesthetic: "Audio: Heartbeat; Visuals: Barely_Visible.",
            aestheticEn: "Audio: Heartbeat; Visuals: Barely_Visible.",
            runtime: "Idle: WHILE (True) DO Beat()."
        }
    }
];
