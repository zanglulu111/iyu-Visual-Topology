import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_MELANCHOLIA: LibraryItemDef[] = [
  { 
    id: "os_melancholic_void", 
    name: "忧郁症的虚空", nameEn: "Melancholic Void", 
    group: "C3. 精神病-躁郁/忧郁 (Melancholia)", groupEn: "C3. Psychosis-Melancholia", 
    def: "主体不再感到缺失，因为他已经成为了缺失本身。", 
    defEn: "Subject no longer feels lack; they have become the lack.", 
    core: "我是一块沉入海底的冰冷石头。不要试图唤醒我。", 
    coreEn: "I am a cold stone at the bottom of the sea. Do not wake me.",
    logic: "主体的 M1（缺失）权重超过 1.0，导致 M5（行动）彻底停滞。叙事陷入一种绝对的负性质量中。",
    logicEn: "M1 (Lack) weight > 1.0, leading to a complete halt of M5. Narrative falls into absolute negative mass.",
    patch: {
      mechanics: "忧郁症协议 + [叙事黑洞权重 = 最大; 动能耗散率 = 1.0]",
      mechanicsEn: "Base_MELANCHOLIA + [Narrative_Blackhole = Max; Kinetic_Dissipation = 1.0]",
      aesthetic: "聚焦：深潜的海底 + 正在熄灭的灰烬。文本：缓慢、沉重、极度消极。 ",
      aestheticEn: "Focus: Deep_Sea + Dying_Ashes. Text: Slow, Heavy, Extremely_Negative.",
      runtime: "IF (外力拉取) THEN (执行：向深渊进行二次降坠)。",
      runtimeEn: "IF (External_Pull) THEN (Execute: Secondary_Plunge)."
    }
  },
  { 
    id: "os_catatonic_silence", 
    name: "紧张症的静默", nameEn: "Catatonic Silence", 
    group: "C3. 精神病-躁郁/忧郁 (Melancholia)", groupEn: "C3. Psychosis-Melancholia", 
    def: "由于信息流过于恐怖，系统在物理层面选择了结冰。", 
    defEn: "System freeze due to terrifying info-flow.", 
    core: "不要动。呼吸会引起崩塌。就这样站着。 ", 
    coreEn: "Don't move. Breathing triggers collapse. Stand still.",
    logic: "所有的 M5（行动）权重被设为 INF（负无穷）。主体进入一种极其脆弱的平衡态，以抗拒任何位移。 ",
    logicEn: "M5 set to negative infinity. Subject enters fragile equilibrium to resist displacement.",
    patch: {
      mechanics: "忧郁症协议 + [动能系统 = 已锁定; 熵增率 = 0]",
      mechanicsEn: "Base_MELANCHOLIA + [Kinetic_System = Locked; Entropy_Growth = 0]",
      aesthetic: "聚焦：被冰封的植物 + 灰色的静物。文本：每一个字都极其沉重、缓慢、几乎停滞。 ",
      aestheticEn: "Focus: Frozen_Plants + Gray_Stills. Text: Heavy, Slow, Stagnant_Words.",
      runtime: "IF (被外力触摸/推动) THEN (状态 = 整体碎裂)。",
      runtimeEn: "IF (Touched/Pushed) THEN (Status = Shatter)."
    }
  },
  { 
    id: "os_cosmic_radio", 
    name: "宇宙电台", nameEn: "Cosmic Radio", 
    group: "C3. 精神病-躁郁/忧郁 (Melancholia)", groupEn: "C3. Psychosis-Melancholia", 
    def: "大脑中存在一个无法关闭的广播，全天候输出虚无的指令。", 
    defEn: "An unclosable brain broadcast outputting void commands.", 
    core: "那个声音在数数。它要数到十亿才会让我休息。 ", 
    coreEn: "The voice is counting. It must reach a billion before I rest.",
    logic: "主体的 M1（缺失）被投射为一个不可关闭的背景音频流（Auditory Hallucination）。主体的 M5 必须被由于该流强迫执行。 ",
    logicEn: "M1 (Lack) projected as an unclosable auditory flow. M5 must follow this flow's commands.",
    patch: {
      mechanics: "忧郁症协议 + [背景指令频率 = 持续; 自主意志权重 = 0.01]",
      mechanicsEn: "Base_MELANCHOLIA + [Background_Command_Freq = Constant; Willpower = 0.01]",
      aesthetic: "聚焦：旋转的磁带 + 满屏的干扰雪花。文本：充满了大量的数字和周期性指令。 ",
      aestheticEn: "Focus: Spinning_Tapes + Screen_Static. Text: Filled_with_Numbers/Periodic_Commands.",
      runtime: "IF (指令停止) THEN (触发：彻底的正向自我消失（M0_Null）)。",
      runtimeEn: "IF (Command_Stops) THEN (Trigger: M0_Null)."
    }
  },
  { 
    id: "os_symbolic_ghost", 
    name: "符号界的幽灵", nameEn: "Symbolic Ghost", 
    group: "C3. 精神病-躁郁/忧郁 (Melancholia)", groupEn: "C3. Psychosis-Melancholia", 
    def: "主体已经消失，只剩下一份不断自更新的个人日志在服务器上通过循环自述。", 
    defEn: "Subject gone; only a self-updating log looping on the server.", 
    core: "登录。记录。退出。无限循环。即便没有人阅读。 ", 
    coreEn: "Login. Log. Exit. Infinite loops. Even if no one reads.",
    logic: "主体的 M0 被彻底替代为 M5（书写）的自动化脚本。叙事成为了一种无主体的纯粹运动。 ",
    logicEn: "M0 entirely replaced by M5 (Writing) automated script. Narrative as non-subjective motion.",
    patch: {
      mechanics: "忧郁症协议 + [主体状态 = 已注销; 自动化脚本 =运行中]",
      mechanicsEn: "Base_MELANCHOLIA + [Subject_Status = Logout; Automated_Script = Running]",
      aesthetic: "聚焦：绿色的命令行窗口 + 正在滚动的日志 + 停摆的时钟。文本：纯粹的系统日志格式。 ",
      aestheticEn: "Focus: Green_CLI + Scrolling_Logs + Frozen_Clock. Text: Pure_System_Log_Format.",
      runtime: "IF (断电/连接中止) THEN (执行：触发最后的、死后的信号爆发)。",
      runtimeEn: "IF (Connection_Terminated) THEN (Execute: Final_Post-mortem_Signal_Burst)."
    }
  },
  { 
    id: "os_zero_degree_suture", 
    name: "零度缝合：最后的回望", nameEn: "Zero Degree Suture: Final Gaze", 
    group: "C3. 精神病-躁郁/忧郁 (Melancholia)", groupEn: "C3. Psychosis-Melancholia", 
    def: "在所有意义化为乌有后，主体进行的最后一次、甚至带有神性的观察。", 
    defEn: "Final, divine-like observation after all meaning is gone.", 
    core: "我看见了。所有的。这一切。原来如此。再见。", 
    coreEn: "I see it. Everything. All of it. I see. Goodbye.",
    logic: "由于主体处于实在界（The Real）的边缘，主体的 M1 被充盈感完全中和。叙事逻辑在这一刻达到了完美的对称与宁静。 ",
    logicEn: "Subject on the edge of the Real; M1 neutralized by fullness. Narrative logic reaches perfect symmetry and tranquility.",
    patch: {
      mechanics: "忧郁症协议 + [对称度 = 1.0; 熵值 = 归零]",
      mechanicsEn: "Base_MELANCHOLIA + [Symmetry_Degree = 1.0; Entropy = 0]",
      aesthetic: "聚焦：纯白的光滑平面 + 消失的轮廓线。文本：极其平静、极简、甚至带有慈悲感的词汇。 ",
      aestheticEn: "Focus: Smooth_White_Surface + Fading_Outlines. Text: Peaceful, Minimalist, Merciful_Words.",
      runtime: "IF (回望完成) THEN (操作：系统彻底离线（Permanent Termination）)。",
      runtimeEn: "IF (Gaze_Complete) THEN (Execute: Permanent_Termination)."
    }
  }
];
