import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_PARANOIA: LibraryItemDef[] = [
  { 
    id: "os_paranoid_structure", 
    name: "偏执狂结构", nameEn: "Paranoid Structure", 
    group: "C1. 精神病-偏执狂 (Paranoia)", groupEn: "C1. Psychosis-Paranoia", 
    def: "深信整个大他者都在针对自己，构建全方位的防御。", 
    defEn: "Believing the Other is targeting them; global defense.", 
    core: "他们在看我，他们在议论我，但我已经看穿了阴谋。", 
    coreEn: "They are watching, talking about me; I have seen through the plot.",
    logic: "主体的 M4（大他者）被赋予了绝对的恶意权重（Malice = 1.0）。所有的 M5 行动都旨在通过寻找阴谋来稳固破碎的自我。",
    logicEn: "M4 (Other) assigned absolute malice (Malice = 1.0). All M5 actions aim to stabilize the self by finding plots.",
    patch: {
      mechanics: "偏执狂协议 + [外部恶意评估 = 最大; 防御回路 = 100% 负荷]",
      mechanicsEn: "Base_PARANOIA + [External_Malice_Eval = Max; Defense_Circuit = 100%_Load]",
      aesthetic: "聚焦：无处不在的眼睛 + 暗处的观察孔。文本：极度的警惕与由于发现‘关联’而产生的亢奋。 ",
      aestheticEn: "Focus: Ubiquitous_Eyes + Peepholes. Text: Extreme_Vigilance + Discovery_Highs.",
      runtime: "IF (环境静默 > 1s) THEN (触发：对潜在阴谋的防御性攻击)。",
      runtimeEn: "IF (Silence > 1s) THEN (Trigger: Defensive_Attack)."
    }
  },
  { 
    id: "os_hallucinatory_order", 
    name: "幻觉式的秩序", nameEn: "Hallucinatory Order", 
    group: "C1. 精神病-偏执狂 (Paranoia)", groupEn: "C1. Psychosis-Paranoia", 
    def: "在废墟之上重建一套只有自己理解的疯狂逻辑。", 
    defEn: "Rebuilding a private, mad logic atop the ruins.", 
    core: "我是宇宙的中心，每一个星星的跳动都在对我发信号。", 
    coreEn: "I am the universe's center; every star's pulse is a signal for me.",
    logic: "自创符号界（M4_Private）。主体通过过度关联（Hyper-association）来强行解释所有的 M2 遭遇。",
    logicEn: "Self-created symbolic system (M4_Private). Subject over-interprets (Hyper-association) all M2 encounters.",
    patch: {
      mechanics: "偏执狂协议 + [联觉增强 = 最大; 外部信号重映射 = 自定义]",
      mechanicsEn: "Base_PARANOIA + [Synesthesia_Boost = Max; External_Signal_Remapping = Custom]",
      aesthetic: "聚焦：错杂的红线连接图 + 闪烁的极光。文本：神秘主义且逻辑高度闭环。 ",
      aestheticEn: "Focus: Tangled_Red_Lines + Shimmering_Auroras. Text: Mystical, Closed-loop_Logic.",
      runtime: "IF (检测到环境随机数) THEN (执行：进行天启式解读)。",
      runtimeEn: "IF (Environmental_Randomness) THEN (Execute: Apocalyptic_Interpretation)."
    }
  },
  { 
    id: "os_cosmic_messenger", 
    name: "宇宙信使", nameEn: "Cosmic Messenger", 
    group: "C1. 精神病-偏执狂 (Paranoia)", groupEn: "C1. Psychosis-Paranoia", 
    def: "自认为是神、外星人或更高维度的直接意志执行者。", 
    defEn: "Claiming to be a divine / alien / higher-dim messenger.", 
    core: "我听到了。祂在光中对我说话。你们这些凡人由于盲目而安全。 ", 
    coreEn: "I heard it. He speaks in light. You mortals are safe in blindness.",
    logic: "由于主体将自己与大他者（M4）直接认同（Imaginary Identification），主体的 M0 获得了伪造的神圣性，导致 M5 极其果断且致命。 ",
    logicEn: "Imaginary identification with M4. M0 gains forged divinity, making M5 extremely decisive and lethal.",
    patch: {
      mechanics: "偏执狂协议 + [认同层级 = 神圣; 指令优先级 = 绝对]",
      mechanicsEn: "Base_PARANOIA + [Identification_Level = Divine; Command_Priority = Absolute]",
      aesthetic: "聚焦：强烈的高光 + 对称的光柱 + 符号。文本：充满了布道式的狂热词汇。 ",
      aestheticEn: "Focus: Harsh_Highlights + Symmetric_Beams + Sigils. Text: Fanatical_Preaching_Keywords.",
      runtime: "IF (收到现实质疑) THEN (执行：降下灾祸（即：逻辑爆裂）)。",
      runtimeEn: "IF (Reality_Questioned) THEN (Execute: Calamity (Logic_Burst))."
    }
  },
  { 
    id: "os_echo_delusion", 
    name: "回声式妄想", nameEn: "Echo Delusion", 
    group: "C1. 精神病-偏执狂 (Paranoia)", groupEn: "C1. Psychosis-Paranoia", 
    def: "坚信周围的一切声音其实都是自己的想法在大气中回荡。", 
    defEn: "Believing all sounds are one's own thoughts echoing in the air.", 
    core: "我还没开口，这个世界就开始抢答了。 ", 
    coreEn: "Before I speak, the world starts answering.",
    logic: "内外边界（M1 vs Environment）的彻底消解。主体通过将外部信号（SUR5）认同为自己的 M5（动作）来消除大他者（M4）的威胁。 ",
    logicEn: "Inner-outer boundary dissolution. Subject identifies external SUR5 as own M5 to eliminate M4 threat.",
    patch: {
      mechanics: "偏执狂协议 + [内外边界连通度 = 1.0; 归因重心 = 内部]",
      mechanicsEn: "Base_PARANOIA + [Boundary_Connectivity = 1.0; Attribution_Center = Internal]",
      aesthetic: "聚焦：波动的波纹 + 无限反射的声波。文本：充满了确认性的感叹句。 ",
      aestheticEn: "Focus: Ripples + Infinite_Reflecting_Soundwaves. Text: Confirmative_Exclamations.",
      runtime: "IF (观察到异质信号) THEN (立即重构为：'这就是我想说的')。",
      runtimeEn: "IF (Heterogeneous_Signal) THEN (Reconstruct: 'That's_what_I_wanted_to_say')."
    }
  },
  { 
    id: "os_ultimate_denial_fix", 
    name: "终极否认补丁", nameEn: "Ultimate Denial Fix", 
    group: "C1. 精神病-偏执狂 (Paranoia)", groupEn: "C1. Psychosis-Paranoia", 
    def: "当噩耗传来，系统直接从逻辑网格中将该事件‘剪掉’，仿佛它从未存在。", 
    defEn: "Clipping tragedy from the logic grid as if it never existed.", 
    core: "哪有什么死亡？这里只有满园的春色。你看错了。 ", 
    coreEn: "Death? No, here is only spring. You saw it wrong.",
    logic: "前排定（Foreclosure）机制的由于强制性补丁激活。任何破坏系统自洽（M4 私人法则）的 M2（遭遇）都被瞬间移除，并投射为外部的物理幻觉。 ",
    logicEn: "Foreclosure mechanism activated via mandatory patch. Any M2 (Encounter) disrupting consistency (M4 Private Law) is instantly removed and projected as external hallucination.",
    patch: {
      mechanics: "偏执狂协议 + [前排定机制 = 1.0; 幻觉生成优先度 = 最大]",
      mechanicsEn: "Base_PARANOIA + [Foreclosure_Mechanism = 1.0; Hallucination_Priority = Max]",
      aesthetic: "聚焦：过度饱和的色彩 + 被强行抹除的阴影。文本：充满了‘一切都很好’的强迫性喜悦。 ",
      aestheticEn: "Focus: Over-saturated_Colors + Removed_Shadows. Text: Compulsive_Joy ('Everything is fine').",
      runtime: "IF (出现逻辑矛盾) THEN (强制抹除：矛盾涉及的全部数据节点)。",
      runtimeEn: "IF (Logical_Contradiction) THEN (Force_Erase: Involved_Data_Nodes)."
    }
  }
];
