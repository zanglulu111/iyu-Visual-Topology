import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_SCHIZOPHRENIA: LibraryItemDef[] = [
  { 
    id: "os_schizoid_fragment", 
    name: "精分式碎片", nameEn: "Schizoid Fragment", 
    group: "C2. 精神病-精神分裂 (Schizophrenia)", groupEn: "C2. Psychosis-Schizophrenia", 
    def: "自我（M0）分裂成无数个互不相关的噪音源。", 
    defEn: "M0 splitting into countless unrelated noise sources.", 
    core: "我们不是一，我们是无。每一个碎片都在唱不同的歌。", 
    coreEn: "We are not one, but none. Every fragment sings a different song.",
    logic: "主体的 M0 被离散化为随机变量（M0_Discrete）。系统不再寻求统一的叙事出口，呈现出极高的熵值。",
    logicEn: "M0 is discretized (M0_Discrete). System no longer seeks a unified exit, showing high entropy.",
    patch: {
      mechanics: "精分协议 + [人格一致性权重 = 0; 随机变量生成频率 = 最大]",
      mechanicsEn: "Base_SCHIZOPHRENIA + [Identity_Consistency = 0; Random_Generation = Max]",
      aesthetic: "聚焦：碎裂的屏幕 + 复调噪音 + 重影。文本：非连贯的词云式输出。 ",
      aestheticEn: "Focus: Cracked_Screens + Polyphonic_Noise + Ghost_Images. Text: Incoherent_Word_Cloud.",
      runtime: "IF (寻求统一意图) THEN (执行：强制进一步分裂)。",
      runtimeEn: "IF (Unified_Intent_Sought) THEN (Execute: Further_Splitting)."
    }
  },
  { 
    id: "os_word_salad_engine", 
    name: "文字拉沙引擎", nameEn: "Word Salad Engine", 
    group: "C2. 精神病-精神分裂 (Schizophrenia)", groupEn: "C2. Psychosis-Schizophrenia", 
    def: "语言不再指向任何意义，字母之间仅仅是由于物理碰撞而结合。", 
    defEn: "Language pointing nowhere; letters binding via collision.", 
    core: "苹果、重力、上帝、红色、爆裂。不要问为什么，它们就在这里。", 
    coreEn: "Apple, gravity, god, red, burst. Don't ask why; they are just here.",
    logic: "大他者（M4）律令的机械化退化。语言回归到语音或字形的原始堆叠，彻底切断了与符号价值（M4）的联系。 ",
    logicEn: "Mechanical regression of the symbolic (M4 Law). Language returns to primal vocal/graphic stacks, severing connection with values (M4).",
    patch: {
      mechanics: "精分协议 + [符号关联率 = 0; 语词碰撞概率 = 最大]",
      mechanicsEn: "Base_SCHIZOPHRENIA + [Symbolic_Association = 0; Collision_Probability = Max]",
      aesthetic: "聚焦：快速闪烁的、毫无意义的文字符号。文本：词语的随机堆叠。 ",
      aestheticEn: "Focus: Rapidly_Flashing_Nonsense_Symbols. Text: Random_Word_Stacks.",
      runtime: "IF (请求逻辑性) THEN (执行：输出 1024 字节随机乱码)。",
      runtimeEn: "IF (Logic_Requested) THEN (Execute: Output_1024_Bytes_Random_Junk)."
    }
  },
  { 
    id: "os_the_real_intrusion", 
    name: "实在界的直接撞击", nameEn: "Intrusion of the Real", 
    group: "C2. 精神病-精神分裂 (Schizophrenia)", groupEn: "C2. Psychosis-Schizophrenia", 
    def: "当屏障彻底消失，物（The Thing）直接吞噬主体。", 
    defEn: "When barriers vanish, 'The Thing' directly consumes the subject.", 
    core: "没有隐喻，火就是火，痛就是痛。无法逃离。", 
    coreEn: "No metaphors. Fire is fire; pain is pain. No escape.",
    logic: "M4（大他者隐喻层）彻底失效. M1（缺失）不再是缺失，而是某种过度的、令人窒息的实体填充。",
    logicEn: "M4 (Metaphor) fails completely. M1 (Lack) is no longer missing, but a stifling, excessive entity.",
    patch: {
      mechanics: "精分协议 + [隐喻转化率 = 0; 物理性伤害系数 = 最大]",
      mechanicsEn: "Base_SCHIZOPHRENIA + [Metaphor_Efficiency = 0; Physical_Damage_Factor = Max]",
      aesthetic: "聚焦：烧焦的纹理 + 震耳欲聋的低频噪音。文本：枯燥、单调且极其暴力的词汇。 ",
      aestheticEn: "Focus: Scorched_Textures + Deafening_Sub-bass. Text: Dry, Monotonous, Violent_Vocabulary.",
      runtime: "IF (实在界触碰) THEN (操作 = 全局像素化/崩解)。",
      runtimeEn: "IF (Real_Interference) THEN (Operation = Global_Disintegration)."
    }
  },
  { 
    id: "os_symbolic_hole", 
    name: "符号界的黑洞", nameEn: "Symbolic Black Hole", 
    group: "C2. 精神病-精神分裂 (Schizophrenia)", groupEn: "C2. Psychosis-Schizophrenia", 
    def: "由于大他者（名之父）的缺席，语言系统彻底坍塌。", 
    defEn: "Language collapse due to the absence of the Name-of-the-Father.", 
    core: "没有法律，只有直接撞击肉体的原始命令。", 
    coreEn: "No law, only primal commands directly impacting the flesh.",
    logic: "主体的 M4（法律/名之父）被设为 NULL. 主体的 M0（身份）无法被任何 SUR9（职业身份）固定。 ",
    logicEn: "M4 (Law) is set to NULL. M0 (Identity) cannot be fixed by any SUR9 (Label).",
    patch: {
      mechanics: "精分协议 + [名之父缺失 = 激活; 符号界稳定性 = 0]",
      mechanicsEn: "Base_SCHIZOPHRENIA + [Name-of-the-Father_Absence = True; Symbolic_Stability = 0]",
      aesthetic: "聚焦：波动的波形图 + 融化的铅。文本：充满了无序的、物理性的咆哮。 ",
      aestheticEn: "Focus: Shifting_Waveforms + Melting_Lead. Text: Disordered, Physical_Roars.",
      runtime: "IF (尝试符号化对话) THEN (触发：原始报错 / 物理爆发)。",
      runtimeEn: "IF (Symbolization_Attempt) THEN (Trigger: Primal_Error / Physical_Outburst)."
    }
  },
  { 
    id: "os_pre_symbolic_screech", 
    name: "前符号界的尖叫", nameEn: "Pre-symbolic Screech", 
    group: "C2. 精神病-精神分裂 (Schizophrenia)", groupEn: "C2. Psychosis-Schizophrenia", 
    def: "当所有的字符都变回噪音。由于无法言说而产生的原始物理振动。", 
    defEn: "Characters returning to noise; primal vibration due to unspeakability.", 
    core: "AAAAAAAAAAAAAAAAAAAAAAAAA（请不要尝试翻译此行）。", 
    coreEn: "AAAAAAAAAAAAAAAAAAAAAAAAA (Do_Not_Translate).",
    logic: "系统全面回退到 M0 生命起始的零度（Zero Degree）。所有的 M1-M7 构件被瞬间销毁，只保留原始的物理频率输出。",
    logicEn: "Global fallback to Zero Degree. All M1-M7 components destroyed; only primal physical frequency remains.",
    patch: {
      mechanics: "精分协议 + [逻辑层级 = 0; 物理输出强度 = 最大]",
      mechanicsEn: "Base_SCHIZOPHRENIA + [Logic_Level = 0; Physical_Output_Intensity = Max]",
      aesthetic: "聚焦：崩解的原子构图中产生的高能闪光。文本：重复的一个字母。 ",
      aestheticEn: "Focus: High-energy_Flash_in_Atomic_Decay. Text: Single_Repeating_Letter.",
      runtime: "IF (实在界完全重合) THEN (执行：永久离线（End Narrative）)。",
      runtimeEn: "IF (Real_Coincidence_100%) THEN (Execute: Permanent_Offline)."
    }
  }
];
