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
        logic: "【局部执行器】：局部化执行力学。主体无法处理复杂的逻辑分支，只能执行简单的物理指令。脱离了大脑指令的单纯动作实体，只剩下抓取或破坏的本能。",
        logicEn: "[Local Executor]: Local execution mechanics. Cannot handle complex logic branches; only simple physical commands. A pure action entity detached from brain instruction, left only with instinctual grasping or destruction.",
        patch: {
            mechanics: "基础脱落协议 + [灵巧度 = 高; 智慧 = 0; 协调性 = 断裂]",
            mechanicsEn: "Base_DECOUPLING + [Dexterity = High; Wisdom = 0; Coordination = Severed]",
            aesthetic: "聚焦：手部特写的微距细节 + 无主体的局部放大。文本：只有动作没有动机的、如断肢般自行运转的叙述。",
            aestheticEn: "Focus: Hand_Detail_Macro_Scale + Subjectless_Closeup. Text: Action-Without-Motive_Severed-Limb_Self-Operating_Narration.",
            runtime: "IF (指令模糊或复杂) THEN (强制回退：执行最原始的抓取/破坏动作)。严禁任何复杂逻辑判断或高阶思维。",
            runtimeEn: "IF (Command_Unclear_or_Complex) THEN (Force_Revert: Execute_Primal_Grasp/Destroy). FORBID_Complex_Logic_or_Higher_Cognition."
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
        logic: "【超视觉孤岛】：超视觉逻辑。视力半径（S6）为无限，但力量传输（S5）恒定为 0。只有视觉连接而没有肢体交互的主体，被迫成为永恒的旁观者。",
        logicEn: "[Hyper-Vision Isolate]: Hyper-vision logic. Infinite vision radius, but zero force transmission. Subject with only visual connection and no limb interaction; forced eternal bystander.",
        patch: {
            mechanics: "基础脱落协议 + [视野范围 = 最大; 交互权重 = 0; 干预能力 = 锁死]",
            mechanicsEn: "Base_DECOUPLING + [Vision_Range = Max; Interaction_Weight = 0; Agency = Locked]",
            aesthetic: "聚焦：鱼眼镜头的广角畸变 + 死寂的氛围。文本：只能目睹而无法触及的、如囚笼之眼般的旁观叙述。",
            aestheticEn: "Focus: Fisheye_Wide-Angle_Distortion + Dead_Silent_Atmosphere. Text: Witness-Only_Cage-Eye_Bystander_Narration.",
            runtime: "IF (尝试物理干预) THEN (强制触发：幽灵之手错误，动作无效化)。严禁任何真实的物理交互或身体干预。",
            runtimeEn: "IF (Attempt_Physical_Push) THEN (Force_Trigger: Ghost_Hand_Error_Action_Nullified). FORBID_Real_Physical_Interaction_or_Bodily_Intervention."
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
        logic: "【指令噪音饱和器】：过度载入逻辑。主体的所有反应都被外界的指令噪音抢占了优先级。听觉通道被大他者的旨令完全塞满，再也听不见真实界的杂音。",
        logicEn: "[Command Noise Saturator]: Overload logic. All responses preempted by external command noise. Auditory channel fully occupied by the Other's commands; deaf to the Real's noise.",
        patch: {
            mechanics: "基础脱落协议 + [信噪比 = 0; 服从度 = 最大; 自主信号 = 被淹没]",
            mechanicsEn: "Base_DECOUPLING + [Signal_to_Noise = 0; Obedience = Max; Autonomous_Signal = Drowned]",
            aesthetic: "聚焦：高频尖锐音效 + 混乱的声场氛围。文本：充满外部指令回声的、无法辨认自我声音的叙述。",
            aestheticEn: "Focus: High-Pitched_Audio + Chaotic_Soundscape_Atmosphere. Text: External_Command_Echo-Filled_Unrecognizable_Self-Voice_Narration.",
            runtime: "IF (外界沉默) THEN (强制触发：内部尖叫填充，拒绝真正的寂静)。严禁任何真实的沉默或自主听觉恢复。",
            runtimeEn: "IF (External_Silence) THEN (Force_Trigger: Internal_Scream_Fill_Reject_True_Silence). FORBID_True_Silence_or_Autonomous_Hearing_Recovery."
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
        logic: "【幻觉输入器】：假阳性力学。主体频繁发起无效的物理动作请求。感到某个器官还在，但那只是神经回路中一段回绕的长久痛感。",
        logicEn: "[Phantom Input Device]: False positive mechanics. Subject frequently issues invalid physical action requests. Feeling an organ still present; merely a lingering loop of neural pain.",
        patch: {
            mechanics: "基础脱落协议 + [幽灵输入 = 高; 现实输出 = 0; 神经环路 = 痛感回绕]",
            mechanicsEn: "Base_DECOUPLING + [Ghost_Input = High; Reality_Output = 0; Neural_Loop = Pain_Circuit]",
            aesthetic: "聚焦：透明发光的幻影 + 静电噪音。文本：不断发起无效请求的、如截肢后摸空般的叙述。",
            aestheticEn: "Focus: Transparent_Glow_Phantom + Static_Noise. Text: Continuous_Invalid_Request_Amputee-Reaching_Narration.",
            runtime: "IF (幻肢动作被触发) THEN (强制显示：空动作，无任何现实效果)。严禁幻肢信号转化为真实的物理输出。",
            runtimeEn: "IF (Phantom_Action_Triggered) THEN (Force_Display: Empty_Move_Zero_Real_Effect). FORBID_Phantom_Signal_Converting_to_Real_Physical_Output."
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
        logic: "【脱节输出器】：脱节输出逻辑。台词内容（Dialogue）与 M5 行动经常发生 180 度翻转。喉咙变成了公共频道的扩音器，其言语与主体的欲望完全无关。",
        logicEn: "[Disconnected Output]: Disconnected output logic. Dialogue frequently contradicts M5 actions by 180 degrees. Throat becomes a public channel speaker; speech unrelated to the subject's desire.",
        patch: {
            mechanics: "基础脱落协议 + [真实性 = -1.0; 社会音量 = 高; 言行一致性 = 负值]",
            mechanicsEn: "Base_DECOUPLING + [Authenticity = -1.0; Social_Volume = High; Speech-Act_Coherence = Negative]",
            aesthetic: "聚焦：金属质感/收音机般的声音 + 口型与声音不同步的动画。文本：言语与行动彻底脚脱的、如配音错位的叙述。",
            aestheticEn: "Focus: Metallic/Radio_Voice + Lip-Desync_Animation. Text: Speech-Action_Total_Disconnect_Dubbed_Narration.",
            runtime: "IF (尝试真诚表达) THEN (强制触发：咙反射，言语自动翻转为反面)。严禁任何真诚的自我表达。",
            runtimeEn: "IF (Attempt_Sincerity) THEN (Force_Trigger: Gag_Reflex_Speech_Auto_Inverts). FORBID_Sincere_Self_Expression."
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
        logic: "【超敏反应场】：超敏反应逻辑。对环境 M2（遭遇）的波动响应放大 10 倍。防御机制（象征性皮肤）彻底丧失，世界的一丁点轻抚都是剧痛。",
        logicEn: "[Hypersensitivity Field]: Hypersensitivity logic. Response to M2 environmental fluctuations amplified by 10x. Total loss of defense mechanisms (Symbolic Skin); the world's slightest touch is agony.",
        patch: {
            mechanics: "基础脱落协议 + [脆弱性 = 最大; 反应倍率 = 10; 象征皮肤 = 完全丧失]",
            mechanicsEn: "Base_DECOUPLING + [Vulnerability = Max; Reaction_Multiplier = 10; Symbolic_Skin = Total_Loss]",
            aesthetic: "聚焦：裸露/暴露的视觉 + 强烈的红色色调。文本：空气都能切割的、每次触碰都是火烧的叙述。",
            aestheticEn: "Focus: Raw/Exposed_Visuals + Intense_Red_Palette. Text: Air-Cutting_Every-Touch-Is-Fire_Narration.",
            runtime: "IF (任何接触发生) THEN (强制触发：神经爆裂，10倍放大响应)。严禁任何形式的防御屏障恢复或感觉铝化。",
            runtimeEn: "IF (Contact_Occurs) THEN (Force_Trigger: Neural_Blast_10x_Amplified_Response). FORBID_Defense_Barrier_Recovery_or_Sensory_Dulling."
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
        logic: "【自激震荡器】：自激震荡逻辑。主体的数值在微小的外部刺激下即陷入无止境的高频波动。没有中枢指挥的纯粹感知簇，只会被动地感受到痛苦和震颤。",
        logicEn: "[Self-Excited Oscillator]: Self-excited oscillation logic. Values enter high-frequency fluctuations upon tiny stimulus. Pure sensory clusters without central command, only feeling pain and tremors passively.",
        patch: {
            mechanics: "基础脱落协议 + [稳定性 = 空; 震颤指数 = 高; 中枢指挥 = 断联]",
            mechanicsEn: "Base_DECOUPLING + [Stability = Null; Tremor_Index = High; Central_Command = Disconnected]",
            aesthetic: "聚焦：不停抖动的动画 + 不稳定的视觉。文本：除了颤抖什么都不会的、如裸露神经般的叙述。",
            aestheticEn: "Focus: Shaking_Animation + Unsteady_Visuals. Text: Nothing-But-Trembling_Exposed-Nerve_Narration.",
            runtime: "IF (任何刺激) THEN (强制执行：进入无限震动循环)。严禁任何形式的稳定性恢复或中枢重连。",
            runtimeEn: "IF (Any_Stimulus) THEN (Force: Enter_Infinite_Vibration_Loop). FORBID_Stability_Recovery_or_Central_Reconnection."
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
        logic: "【分布式混乱体】：分布式混乱力学。主体的各个属性（S1-S20）分别对外部互动做出冲突的反应。一堆高效运作的功能集合，但缺乏一个统一的“自我”核心来统筹感官。",
        logicEn: "[Distributed Chaos Body]: Distributed chaos mechanics. Subject parameters react conflictually to external input. Efficient functional set lacking a unified 'ego' core to coordinate senses.",
        patch: {
            mechanics: "基础脱落协议 + [内聚力 = 0.1; 并行进程 = 多; 统一自我 = 缺失]",
            mechanicsEn: "Base_DECOUPLING + [Cohesion = 0.1; Parallel_Processes = Many; Unified_Ego = Missing]",
            aesthetic: "聚焦：抽象拼装的视觉 + 非线性的渲染。文本：各器官自行其是的、心脏加速但大脑沉睡的叙述。",
            aestheticEn: "Focus: Abstract_Assembly_Visuals + Non-Linear_Rendering. Text: Organs-Acting-Independently_Heart-Racing-Brain-Sleeping_Narration.",
            runtime: "IF (需要统一行动) THEN (强制触发：系统停滞，各功能互相抵消)。严禁任何形式的自我统一或内聚升级。",
            runtimeEn: "IF (Unified_Action_Needed) THEN (Force_Trigger: System_Stall_Functions_Canceling). FORBID_Self_Unification_or_Cohesion_Upgrade."
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
        logic: "【高脆性化体】：高脆性力学。一旦 M2（遭遇）强度超过 1，主体将直接进入“破碎”形态。物质意义上的主体极其脆弱，任何物理碰撞都会导致其逻辑崩跌。",
        logicEn: "[High-Brittleness Body]: High-brittleness mechanics. If M2 intensity > 1, the subject immediately shatters. Materially fragile; any physical collision leads to logical collapse.",
        patch: {
            mechanics: "基础脱落协议 + [硬度 = 10; 韧性 = 0.1; 破碎阈值 = 极低]",
            mechanicsEn: "Base_DECOUPLING + [Hardness = 10; Toughness = 0.1; Shatter_Threshold = Very_Low]",
            aesthetic: "聚焦：透明/尖锐的纹理 + 水晶碰裂的音效。文本：如玻璃般一碰即碎的、充满裂缝的叙述。",
            aestheticEn: "Focus: Transparent/Sharp_Texture + Crystal_Cracking_SFX. Text: Glass-like_Touch-and-Shatter_Crack-Filled_Narration.",
            runtime: "IF (碰撞发生) THEN (强制触发：进入碎片模式，主体爆裂为多个不可联的残片)。严禁任何形式的结构性恢复或韧性升级。",
            runtimeEn: "IF (Collision_Occurs) THEN (Force_Trigger: Fragment_Mode_Subject_Explodes_into_Disconnected_Shards). FORBID_Structural_Recovery_or_Toughness_Upgrade."
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
        logic: "【绝对孤岛】：绝对孤岛逻辑。主体的所有数据流动均为内部自循环，外界无法捕捉。拥有活跃的意识但所有对外的感知和输出通道都被彻底切断。",
        logicEn: "[Absolute Island]: Absolute island logic. All data flow is internal self-loop; undetectable from outside. Active consciousness with all external sensory and output channels severed.",
        patch: {
            mechanics: "基础脱落协议 + [输出 = 0; 内部逻辑速度 = 最大; 接口 = 全部切断]",
            mechanicsEn: "Base_DECOUPLING + [Output = 0; Internal_Logic_Speed = Max; Interface = All_Severed]",
            aesthetic: "聚焦：窄缝视角 + 暗黑的光照。文本：在头颅内部尖叫了一万年的、完全封闭的叙述。",
            aestheticEn: "Focus: Narrow_Slot_View + Dark_Lighting. Text: Ten-Thousand-Year_Internal_Scream_Completely_Sealed_Narration.",
            runtime: "IF (外部信号传入) THEN (强制存储：空值，外部接收不到任何响应)。严禁任何形式的外部通道恢复或信号突破。",
            runtimeEn: "IF (External_Signal_In) THEN (Force_Store: NULL_No_External_Response). FORBID_External_Channel_Recovery_or_Signal_Breakthrough."
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
        logic: "【非线性执行器】：非线性执行力学。所有 M5 行动都有延迟 0.1-2.0 秒的剧烈抖动反应。中枢指令到肌肉执行之间发生了逻辑漂移，动作具有不可控的痉挛性。",
        logicEn: "[Non-Linear Executor]: Non-linear execution mechanics. M5 actions carry 0.1-2.0s jitter lag. Logical drift between central command and muscular execution; spasmic actions.",
        patch: {
            mechanics: "基础脱落协议 + [抖动 = 0.3; 精确度 = 低; 传导性 = 漂移]",
            mechanicsEn: "Base_DECOUPLING + [Jitter = 0.3; Precision = Low; Conductance = Drifting]",
            aesthetic: "聚焦：残影/重影的视觉 + 抽搐式的动画。文本：腿想往左但影子往右的、充满痉挛的叙述。",
            aestheticEn: "Focus: Ghosting/Double_Vision + Twitchy_Animation. Text: Legs-Left-Shadow-Right_Spasm-Filled_Narration.",
            runtime: "IF (高压力情境) THEN (强制触发：痉挛发作，动作完全失控)。严禁任何精确的动作输出或传导性修复。",
            runtimeEn: "IF (High_Stress) THEN (Force_Trigger: Spasm_Total_Action_Loss_of_Control). FORBID_Precise_Action_Output_or_Conductance_Repair."
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
        logic: "【隧道视野锁】：隧道视野力学。主体的权重仅对自己关注的 X 指标有效，其余为 0。感官被迫锁定在一个极其微小的细节上，从而对全局的崩溃视而不见。",
        logicEn: "[Tunnel Vision Lock]: Tunnel-vision mechanics. Weight only applies to the focused X parameter; others are 0. Senses locked onto a minute detail, ignoring the overall collapse.",
        patch: {
            mechanics: "基础脱落协议 + [外围感知 = 0; 细节处理 = 最大; 全局视野 = 被封锁]",
            mechanicsEn: "Base_DECOUPLING + [Peripheral_Awareness = 0; Detail_Processing = Max; Global_Vision = Locked]",
            aesthetic: "聚焦：极端景深虚化 + 聚光灯式光照。文本：只看得到纽扣纹理的、对周围火灾视而不见的叙述。",
            aestheticEn: "Focus: Extreme_Bokeh + Spotlight_Lighting. Text: Button-Texture-Only_Blind-to-Surrounding-Fire_Narration.",
            runtime: "IF (侧方威胁出现) THEN (强制触发：无视，完全不做反应)。严禁任何外围视野的恢复或全局感知。",
            runtimeEn: "IF (Threat_from_Side) THEN (Force_Trigger: Ignorance_Zero_Response). FORBID_Peripheral_Vision_Recovery_or_Global_Awareness."
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
        logic: "【冲击吸收器】：冲击吸收逻辑。主体具有防御加成，但也失去了所有因受难而产生的叙事动力。精神上的局部麻醉，导致其在承载巨大的 M2 冲击时毫无生机。",
        logicEn: "[Shock Absorber]: Shock absorption logic. High defense but zero narrative drive from suffering. Local psychic anesthesia; zero vitality when bearing massive M2 impact.",
        patch: {
            mechanics: "基础脱落协议 + [痛觉吸收 = 最大; 动力 = 空; 叙事驱动 = 丧失]",
            mechanicsEn: "Base_DECOUPLING + [Pain_Absorption = Max; Motivation = Null; Narrative_Drive = Lost]",
            aesthetic: "聚焦：暗淡/蜡质的视觉 + 米色的色调。文本：已经不再觉得冷的、如尸体般无动于衷的叙述。",
            aestheticEn: "Focus: Dull/Wax-like_Visuals + Beige_Palette. Text: No-Longer-Cold_Corpse-like_Unmoved_Narration.",
            runtime: "IF (伤害发生) THEN (强制输出：空报告，零的反应)。严禁任何形式的痛觉恢复或受难转化为动力。",
            runtimeEn: "IF (Damage_Occurs) THEN (Force_Output: Empty_Report_Zero_Reaction). FORBID_Pain_Recovery_or_Suffering_Converting_to_Drive."
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
        logic: "【二元冲突器】：二元冲突力学。主体的 M5（行动）总是以两个互相抵消的矢量呈现。主体的身体两侧由不兼容的逻辑驱动，处于永久的自我撕裂中。",
        logicEn: "[Binary Conflict Engine]: Binary conflict mechanics. M5 actions always manifest as canceling vectors. Body sides driven by incompatible logics, in permanent self-tearing.",
        patch: {
            mechanics: "基础脱落协议 + [连贯性 = -0.5; 内部摩擦 = 最大; 左右逻辑 = 互斥]",
            mechanicsEn: "Base_DECOUPLING + [Coherence = -0.5; Internal_Friction = Max; Left-Right_Logic = Mutually_Exclusive]",
            aesthetic: "聚焦：垂直分裂的视觉 + 交错不同步的动画。文本：左手求救右手补刀的、永久自我撕裂的叙述。",
            aestheticEn: "Focus: Vertical_Split_Visuals + Staggered_Desync_Animation. Text: Left-Hand-Begs_Right-Hand-Strikes_Permanent_Self-Tearing_Narration.",
            runtime: "IF (决策时刻) THEN (强制触发：运动锁死，两个矢量完全抵消)。严禁任何形式的左右统一或内部协调。",
            runtimeEn: "IF (Decision_Moment) THEN (Force_Trigger: Motor_Lock_Two_Vectors_Cancel_Out). FORBID_Left-Right_Unification_or_Internal_Coordination."
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
        logic: "【空间颠倒器】：空间颠倒逻辑。主体的位移方向（M5）必须始终取其逻辑预期的反方向。主体的物理重心与符号引力发生了 180 度反转，永远无法脚踏实地。",
        logicEn: "[Spatial Inverter]: Spatial inversion logic. Movement (M5) always opposite to logical expectation. Physical center and symbolic gravity flipped by 180 degrees; never grounded.",
        patch: {
            mechanics: "基础脱落协议 + [重力常数 = -9.8; 感知 = 反转; 空间定向 = 永久颠倒]",
            mechanicsEn: "Base_DECOUPLING + [Gravity_Constant = -9.8; Perception = Inverted; Spatial_Orientation = Permanently_Flipped]",
            aesthetic: "聚焦：倒置的摄影机视角 + 漂浮的碎片。文本：深渊在头顶的、松手却上升的叙述。",
            aestheticEn: "Focus: Upside_Down_Camera + Floating_Debris. Text: Abyss-Overhead_Release-and-Rise_Narration.",
            runtime: "IF (松手/释放) THEN (强制执行：主体上升而非下坠)。严禁任何形式的重力正常化或脚踏实地。",
            runtimeEn: "IF (Release) THEN (Force: Subject_Rises_Not_Falls). FORBID_Gravity_Normalization_or_Grounding."
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
        logic: "【极简脉冲器】：极简力学。主体在叙事中唯一的输出就是其规律的停顿，没有任何变数。仅剩下一丝微弱的、非主观控制的生理节律，主体性已可忽略。",
        logicEn: "[Minimalist Pulse]: Minimalist mechanics. Only output is periodic pause; zero variables. Only a faint, non-subjective biological rhythm remains; subjectivity is negligible.",
        patch: {
            mechanics: "基础脱落协议 + [交互 = 0; 节律稳定性 = 最大; 主体性 = 可忽略]",
            mechanicsEn: "Base_DECOUPLING + [Interaction = 0; Rhythm_Stability = Max; Subjectivity = Negligible]",
            aesthetic: "聚焦：心跳音效 + 几乎不可见的视觉。文本：还在跳动但与我无关的、仅剩最微弱脉冲的叙述。",
            aestheticEn: "Focus: Heartbeat_Audio + Barely_Visible_Visuals. Text: Still-Beating-But-Not-About-Me_Faintest_Pulse_Narration.",
            runtime: "WHILE (True) DO (强制执行：节律性跳动，无任何变量或主动输出)。严禁任何形式的主体性恢复或自主行为。",
            runtimeEn: "WHILE (True) DO (Force: Rhythmic_Beat_Zero_Variables_or_Active_Output). FORBID_Subjectivity_Recovery_or_Autonomous_Behavior."
        }
    }
];
