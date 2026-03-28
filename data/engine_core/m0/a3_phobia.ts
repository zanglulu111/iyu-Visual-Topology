import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_NEUROSIS_PHOBIA: LibraryItemDef[] = [
  // --- A3. 恐惧症结构 (Phobic Structure) ---
  { 
    id: "os_symbolic_fence", 
    name: "符号化的栅栏", nameEn: "Symbolic Fence", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "在他与那个‘无法直视的东西’之间强行插入一个物体。", 
    defEn: "Forcing an object between oneself and the 'unlookable'.", 
    core: "这就是我的边界。只要我盯着它，我就不需要看它背后的深渊。", 
    coreEn: "This is my boundary. As long as I stare at it, I avoid the abyss.",
    logic: "主体的 M0（身份）必须通过一个‘中介物’（Slot3/Slot4）来维持。缺乏该物，主体将立刻遭遇 M1（缺失）。",
    logicEn: "The subject's M0 (Identity) must be maintained through a 'mediator' (Slot3/Slot4). Without it, the subject immediately encounters M1 (Lack).",
    patch: {
      mechanics: "基础神经症协议 + [边界维持 = 最大; 中介物可见性 = 1.0]",
      mechanicsEn: "Base_NEUROSIS + [Boundary_Maintenance = Max; Mediator_Visibility = 1.0]",
      aesthetic: "聚焦：栅栏 + 警示带 + 极度聚焦的物体。文本：强调物体的物理存在。",
      aestheticEn: "Focus: Fences + Caution_Tape + Hyper-focused_Object. Text: Focus on the physical presence.",
      runtime: "IF (中介物消失) THEN (触发：即刻的空洞遭遇)。",
      runtimeEn: "IF (Mediator_Absent) THEN (Trigger: Immediate_encounter_with_Void)."
    }
  },
  { 
    id: "os_the_forbidden_spot", 
    name: "禁忌的关键位点", nameEn: "The Forbidden Spot", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "世界上有一个点是他绝对无法踏足的，即便那里有宝藏。", 
    defEn: "There is one spot in the world they absolutely cannot step on.", 
    core: "那里是诅咒的源头。我必须绕过它，永远地绕过它。", 
    coreEn: "That's the source of the curse; I must bypass it forever.",
    logic: "在 Slot1（地图/剧作轴）上强制标记一个不可接触的变量。主体的 M5（路径）必须始终以该点为圆心进行逃离。",
    logicEn: "Forcibly mark an untouchable variable on Slot1 (Map/Plot Axis). M5 (Path) must revolve around avoiding this center.",
    patch: {
      mechanics: "基础神经症协议 + [禁区半径 = R; 地图避让算法 = 常开]",
      mechanicsEn: "Base_NEUROSIS + [Forbidden_Radius = R; Map_Avoidance_Logic = Always_On]",
      aesthetic: "聚焦：黑色的深孔 + 向外扩散的波纹。文本：避重就轻的描述。",
      aestheticEn: "Focus: Black_Pits + Outward_Ripples. Text: Evasive_Descriptions.",
      runtime: "IF (接近禁区) THEN (执行：强制性反向加速)。",
      runtimeEn: "IF (Approaching_Spot) THEN (Execute: Mandatory_Reverse_Acceleration)."
    }
  },
  { 
    id: "os_displaced_anxiety", 
    name: "被置換的焦虑", nameEn: "Displaced Anxiety", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "将对大他者的恐惧，转移到一个微小的昆虫、数字或形状上。", 
    defEn: "Shifting fear of the Other onto tiny insects, numbers, or shapes.", 
    core: "大他者太可怕了，我宁愿害怕蜘蛛。蜘蛛是可以被杀死的，但它不行。", 
    coreEn: "The Other is too scary; I'd rather fear spiders. They can be killed; it cannot.",
    logic: "将 M1（虚无）的质感置换（Displacement）到一个具体的 Slot3（客体）上。主体的叙事冲突（M2）高度具体化。",
    logicEn: "Displace the texture of M1 (Void) onto a specific Slot3 (Object). Narrative conflict (M2) is highly concretized.",
    patch: {
      mechanics: "基础神经症协议 + [焦虑转移深度 = 1.0; 威胁置换率 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Anxiety_Transfer_Depth = 1.0; Threat_Displacement_Rate = Max]",
      aesthetic: "聚焦：放大的微观物体 + 高清的局部。文本：带有厌恶感的精确词汇。",
      aestheticEn: "Focus: Magnified_Micro-objects + HD_Close-ups. Text: Precise, Disgust-filled_Vocabulary.",
      runtime: "IF (置换客体出现) THEN (触发：完全的功能瘫痪)。",
      runtimeEn: "IF (Displacement_Object_Appears) THEN (Trigger: Total_Functional_Paralysis)."
    }
  },
  { 
    id: "os_ritual_barrier", 
    name: "仪式性屏障", nameEn: "Ritual Barrier", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "必须完成几个小动作，才能进入下一个叙事空间。", 
    defEn: "Executing mini-actions before entering the next narrative space.", 
    core: "只要我敲三次门，它带来的诅咒就会被暂时抵消。", 
    coreEn: "KNOCK THREE TIMES, the curse is temporarily neutralized.",
    logic: "在 Slot1（转场）之间强行插入一个校验函数。主体只有执行完 M5（仪式动作）才能获得下一个阶段的权限。",
    logicEn: "Forcibly insert an authentication function between Slot1 (Transitions). Access to next phase requires M5 (Ritual action).",
    patch: {
      mechanics: "基础神经症协议 + [转场冷却 = 仪式完成; 校验状态 = 强制]",
      mechanicsEn: "Base_NEUROSIS + [Transition_Cooldown = Ritual_Completion; Verified_Status = Mandatory]",
      aesthetic: "聚焦：重复的指尖动作 + 灰度渐变。文本：带有强迫感的节奏感。",
      aestheticEn: "Focus: Repetitive_Fingertip_Actions + Gray_Gradients. Text: Compulsive_Rhythm.",
      runtime: "IF (仪式中断) THEN (执行：强制重归起点)。",
      runtimeEn: "IF (Ritual_Interrupted) THEN (Execute: Force_Reset_to_Start)."
    }
  },
  { 
    id: "os_the_reassuring_totem", 
    name: "安抚性图腾", nameEn: "The Reassuring Totem", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "只要握紧那个破旧的项链或钥匙，天就不会塌下来。", 
    defEn: "Grasping an old necklace/key prevents the sky from falling.", 
    core: "它是我的锚。在不稳定的世界里，只有它还是硬的。", 
    coreEn: "It is my anchor. In an unstable world, only it remains solid.",
    logic: "主体的 M0（身份完整度）与某一具体 Slot4（对象a的化身）高度耦合。叙事公式：Anchor = True -> Lack = False。",
    logicEn: "Subject M0 (Integrity) is coupled with a specific Slot4. Formula: Anchor = True -> Lack = False.",
    patch: {
      mechanics: "基础神经症协议 + [锚点权重 = 最大; 焦虑阻尼器 = 激活]",
      mechanicsEn: "Base_NEUROSIS + [Anchor_Weight = Max; Anxiety_Damper = Active]",
      aesthetic: "聚焦：特写镜头下的质感物体。文本：温柔的触觉词语。",
      aestheticEn: "Focus: Textural_Objects_in_Close-up. Text: Gentle, Tactile_Vocabulary.",
      runtime: "IF (锚点接触) THEN (状态 = 暂时稳定)。",
      runtimeEn: "IF (Anchor_Contact) THEN (Status = Temporary_Stability)."
    }
  },
  { 
    id: "os_flight_reflex", 
    name: "飞行反射", nameEn: "Flight Reflex", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "感知到任何‘无法归类’的信息，第一反应就是切断叙事。", 
    defEn: "Cutting the narrative upon encountering 'uncategorizable' info.", 
    core: "只要我不看见，它就不存在。我走了。", 
    coreEn: "If I don't see it, it doesn't exist. I'm leaving.",
    logic: "冲突响应函数为 (M2 -> M5_Exit)。主体的 M5 不具备进攻性，只具备极致的撤退属性。",
    logicEn: "Conflict response: (M2 -> M5_Exit). M5 lacks aggression, only possessing extreme retreat properties.",
    patch: {
      mechanics: "基础神经症协议 + [逃逸速度 = 最大; 数据断连阈值 = 低]",
      mechanicsEn: "Base_NEUROSIS + [Escape_Velocity = Max; Disconnect_Threshold = Low]",
      aesthetic: "聚焦：运动模糊 + 正在远去的背景。文本：急促、断裂的描写。",
      aestheticEn: "Focus: Motion_Blurs + Receding_Backgrounds. Text: Urgent, Fragmented_Narrative.",
      runtime: "IF (未知变量出现) THEN (自动操作：跳过当前章节)。",
      runtimeEn: "IF (Unknown_Variable) THEN (Auto-op: Skip_Current_Chapter)."
    }
  },
  { 
    id: "os_symbolic_vacuum", 
    name: "符号真空", nameEn: "Symbolic Vacuum", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "因为害怕犯错，而将所有的描述都从文本中抠掉。", 
    defEn: "Scraping all descriptions from the text for fear of errors.", 
    core: "沉默是最安全的护身符。", 
    coreEn: "Silence is the safest amulet.",
    logic: "叙事输出的极简化处理（M5 = Min）。主体在互动中保持最低限度的信息交换，以防止被‘盯上’。",
    logicEn: "Minimalist narrative output (M5 = Min). Subject maintains minimal info exchange during interaction to avoid being 'targeted'.",
    patch: {
      mechanics: "基础神经症协议 + [信息密度 = 0.1; 对抗性保护 = 开启]",
      mechanicsEn: "Base_NEUROSIS + [Info_Density = 0.1; Antagonistic_Protection = True]",
      aesthetic: "聚焦：极简的白空间 + 稀少的对白。文本：充满了代词。",
      aestheticEn: "Focus: Minimalist_White_Space + Sparse_Dialogue. Text: Heavy_on_Pronouns.",
      runtime: "IF (被质询频率过高) THEN (执行：完全静默协议)。",
      runtimeEn: "IF (Interrogation_Frequency_High) THEN (Execute: Total_Silence)."
    }
  },
  { 
    id: "os_space_warping_panic", 
    name: "空间扭曲恐慌", nameEn: "Space Warping Panic", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "特定的空间布局（如空旷或极窄）会触发主体的自毁逻辑。", 
    defEn: "Spatial layouts (wide/narrow) triggering self-destruct logic.", 
    core: "墙壁在向我靠拢，或者，世界太大了，我接不住自己。", 
    coreEn: "Walls are closing in; or the world is too large, I can't catch myself.",
    logic: "环境 Slot1（空间）对 M0（完整度）的直接侵蚀。主体无法在非标状态的空间中维持逻辑自洽。",
    logicEn: "Enviro-Slot1 (Space) directly eroding M0 (Integrity). Subject cannot maintain consistency in non-standard spaces.",
    patch: {
      mechanics: "基础神经症协议 + [空间敏感度 = 最大; 几何畸变影响 = 1.0]",
      mechanicsEn: "Base_NEUROSIS + [Space_Sensitivity = Max; Geometric_Distortion = 1.0]",
      aesthetic: "聚焦：鱼眼镜头 + 拉伸的透视。文本：错位的方位描写。",
      aestheticEn: "Focus: Fisheye_Lens + Stretched_Perspective. Text: Dislocated_Spatial_Descriptions.",
      runtime: "IF (空间系数 > 2.0 or < 0.5) THEN (触发：运动失调/逻辑崩溃)。",
      runtimeEn: "IF (Space_Factor_Ratio_Extreme) THEN (Trigger: Ataxia / Logic_Collapse)."
    }
  },
  { 
    id: "os_gaze_avoidance", 
    name: "凝视规避", nameEn: "Gaze Avoidance", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "永远不让对方的眼睛对上自己的，通过低头来掩盖核心缺失。", 
    defEn: "Never meeting the other's eyes; hiding lack by looking down.", 
    core: "如果你注视我，你就会发现我里面什么也没有。", 
    coreEn: "If you gaze at me, you'll find there's nothing inside.",
    logic: "针对 M4（看者）的视线切断操作。主体的主体性（M0）是通过‘不被看见’来维持的。",
    logicEn: "Gaze-cutting targeting M4 (The Seer). Subjectivity (M0) is maintained by 'not being seen'.",
    patch: {
      mechanics: "基础神经症协议 + [对视概率 = 0; 视觉阻隔倾向 = 1.0]",
      mechanicsEn: "Base_NEUROSIS + [Eye-contact_Prob = 0; Visual_Barrier_Bias = 1.0]",
      aesthetic: "聚焦：头发遮住的脸 + 阴影下的眼睛。文本：强调低头和侧身的动作。",
      aestheticEn: "Focus: Face_Hidden_by_Hair + Eyes_in_Shadow. Text: Emphasis on head-lowered/sideways_postures.",
      runtime: "IF (视线锁定频率 > 3) THEN (执行：物理性逃离场景)。",
      runtimeEn: "IF (Gaze_Locked_Freq > 3) THEN (Execute: Physical_Scene_Exit)."
    }
  },
  { 
    id: "os_substitute_anxiety", 
    name: "代偿性焦虑物", nameEn: "Substitute Anxiety", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "如果弄丢了那个安抚物，任何随机事物都可能变成新的恐惧源。", 
    defEn: "Losing the pacifier creates new sources of fear from nothing.", 
    core: "恐惧是守恒的。它只是从一把伞跳到了一棵树上。", 
    coreEn: "Anxiety is conserved; it just jumps from an umbrella to a tree.",
    logic: "恐惧的流变逻辑（M1的变量转移）。当原有的屏障失效，系统会自动将‘可怕’的属性赋予最近的一个随机 NPC 或 客体。",
    logicEn: "Fluid logic of fear (M1 variable transfer). When barriers fail, system assigns 'fear' properties to the nearest random NPC/Object.",
    patch: {
      mechanics: "基础神经症协议 + [恐惧源重映射 = 开启; 变量传染系数 = 高]",
      mechanicsEn: "Base_NEUROSIS + [Fear_Remapping = True; Infection_Coefficient = High]",
      aesthetic: "聚焦：快速切换的恐惧目光。文本：不稳定的形容词映射。",
      aestheticEn: "Focus: Rapidly_Shifting_Fearful_Gaze. Text: Unstable_Adjective_Mapping.",
      runtime: "IF (旧屏障失效) THEN (随机选择：5m 内的物体作为新威胁)。",
      runtimeEn: "IF (Old_Barrier_Fail) THEN (Select_Random: Object_within_5m_as_Threat)."
    }
  },
  { 
    id: "os_perimeter_logic", 
    name: "周界逻辑", nameEn: "Perimeter Logic", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "将所有的安全感都寄托在对物理边界的反复确认上。", 
    defEn: "Safety depends on constant re-confirmation of physical perimeters.", 
    core: "三道锁是不够的。我需要感知到墙的厚度。", 
    coreEn: "Three locks aren't enough; I need to feel the wall's thickness.",
    logic: "空间（Slot1）防御加固逻辑。主体的 M5（行动）大部分用于检查和加强物理/象征性的围墙。",
    logicEn: "Spatial (Slot1) defense logic. M5 (Action) is mostly spent checking and reinforcing physical/symbolic walls.",
    patch: {
      mechanics: "基础神经症协议 + [防御层级 = 3; 确认频率 = 持续]",
      mechanicsEn: "Base_NEUROSIS + [Defense_Layers = 3; Re-confirmation_Freq = Constant]",
      aesthetic: "聚焦：厚重的铁门 + 复杂的锁具。文本：充满了安全检测的描写。",
      aestheticEn: "Focus: Heavy_Iron_Doors + Complex_Locks. Text: Descriptive_Security_Checks.",
      runtime: "IF (周界完整性 < 100%) THEN (挂起：所有其他任务)。",
      runtimeEn: "IF (Perimeter_Integrity < 100%) THEN (Suspend: All_Other_Tasks)."
    }
  },
  { 
    id: "os_symbolic_fence_p2", 
    name: "虚空栅栏协议", nameEn: "Void Fence Protocol", 
    group: "A3. 神经症-恐惧症 (Phobia)", groupEn: "A3. Neurosis-Phobia", 
    def: "当屏障被击碎，主体直接面对缺失后的极致收缩。", 
    defEn: "Extreme contraction upon facing lack when barriers shatter.", 
    core: "没有栅栏了。世界是一片空白。除了尖叫，我什么也没有。", 
    coreEn: "No more fences; the world is a blank; I have nothing but the scream.",
    logic: "M0（主体性）在极致缺失中的坍缩。叙事公式：Lack = 1.0 -> Subject = 0。",
    logicEn: "M0 (Subjectivity) implosion in extreme lack. Formula: Lack = 1.0 -> Subject = 0.",
    patch: {
      mechanics: "基础神经症协议 + [空间熵值 = 最大; 崩溃触发时间 = 即时]",
      mechanicsEn: "Base_NEUROSIS + [Spatial_Entropy = Max; Collapse_Trigger = Instant]",
      aesthetic: "聚焦：崩解的碎片 + 极致的黑白对比。文本：语言的原始哀嚎。",
      aestheticEn: "Focus: Disintegrating_Fragments + Black/White_Contrast. Text: Primal_Linguistic_Wail.",
      runtime: "IF (防御全面崩溃) THEN (执行：系统紧急关机/黑屏)。",
      runtimeEn: "IF (Total_Defense_Collapse) THEN (Execute: System_Emergency_Shutdown)."
    }
  },
];
