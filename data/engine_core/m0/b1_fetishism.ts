import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_FETISHISM: LibraryItemDef[] = [
  { 
    id: "os_the_fetish_object", 
    name: "恋物客体", nameEn: "The Fetish Object", 
    group: "B1. 性倒错-恋物 (Fetishism)", groupEn: "B1. Perversion-Fetishism", 
    def: "用丝绸、皮革或眼神这些死物，去填补大他者（母亲）的缺失位置。", 
    defEn: "Using silk, leather, or a gaze to fill the Other's lack.", 
    core: "我知道她缺少了什么，但我假装这个东西（恋物）就是那个缺失的全部。", 
    coreEn: "I know what she lacks, but I pretend this object is that missing part.",
    logic: "主体的 M0（身份）是通过‘物’（M3 客体/SUR5 视域）来锚定的。只要‘物’在场，M1（焦虑）就被完全取消。",
    logicEn: "The subject's M0 is anchored via the 'object' (M3/SUR5). As long as the object is present, M1 (Anxiety) is cancelled.",
    patch: {
      mechanics: "基础恋物协议 + [对象a强度 = 最大; 焦虑抑制权重 = 1.0]",
      mechanicsEn: "Base_FETISHISM + [Object_a_Intensity = Max; Anxiety_Suppression = 1.0]",
      aesthetic: "聚焦：局部特写 + 织物纹理 + 光泽。文本：高度感官化词汇。",
      aestheticEn: "Focus: Macro_Close-ups + Fabric_Textures + Shine. Text: Highly_Sensory_Vocabulary.",
      runtime: "IF (客体在场) THEN (状态 = 极度平静)。",
      runtimeEn: "IF (Object_Present) THEN (Status = Extremely_Calm)."
    }
  },
  { 
    id: "os_disavowal_logic", 
    name: "否认的逻辑", nameEn: "Disavowal Logic", 
    group: "B1. 性倒错-恋物 (Fetishism)", groupEn: "B1. Perversion-Fetishism", 
    def: "我知道真相，但我表现得仿佛我不知道。", 
    defEn: "I know the truth, but I act as if I don't.", 
    core: "这一边是冰冷的知识，另一边是狂热的信仰。它们互不干扰。", 
    coreEn: "One side is cold knowledge, the other is fervent faith. No interference.",
    logic: "双重意识逻辑。主体的 M1（缺失认知）被隔离在一个沙盒中，外部系统（M0）继续运行在虚假的安全岛上。",
    logicEn: "Dual-consciousness logic. Lack recognition (M1) is sandboxed, while M0 continues on a fake island of safety.",
    patch: {
      mechanics: "基础恋物协议 + [认知分裂指数 = 1.0; 实在界隔离 = 开启]",
      mechanicsEn: "Base_FETISHISM + [Split-consciousness_Index = 1.0; Real_Isolation = True]",
      aesthetic: "聚焦：半透明的屏幕 + 分裂的构图。文本：充满了'虽然...但是...'。",
      aestheticEn: "Focus: Semi-transparent_Screens + Split_Composition. Text: 'Although... but...' structures.",
      runtime: "IF (真相被提及) THEN (执行：逻辑忽略/系统静默)。",
      runtimeEn: "IF (Truth_Mentioned) THEN (Execute: Logic_Bypass)."
    }
  },
  { 
    id: "os_fetish_loop", 
    name: "恋物回路", nameEn: "Fetish Loop", 
    group: "B1. 性倒错-恋物 (Fetishism)", groupEn: "B1. Perversion-Fetishism", 
    def: "一旦客体被赋予神性，整个世界必须围着它旋转。", 
    defEn: "Sacralizing an object; the world must revolve around it.", 
    core: "它是完美的，即便它只是一颗扣子。", 
    coreEn: "It is perfect, even if it's just a button.",
    logic: "过度的局部神圣化（Hyper-specialization）。M1（缺失）被投射到单一客体上，导致叙事情节在局部细节中无限内旋。 ",
    logicEn: "Hyper-specialization of parts. M1 is projected onto a single object, causing narrative details to spiral infinitely.",
    patch: {
      mechanics: "基础恋物协议 + [局部神圣化权重 = 1.0; 细节溢出 = 开启]",
      mechanicsEn: "Base_FETISHISM + [Local_Sacralization = 1.0; Detail_Overflow = True]",
      aesthetic: "聚焦：高频旋转的物体 + 闪光的微粒。文本：极度繁复的、微观的描写。 ",
      aestheticEn: "Focus: High-frequency_Rotating_Objects + Glittering_Particles. Text: Hyper-complex, Micro-descriptions.",
      runtime: "IF (聚焦点偏移) THEN (强制执行：视点重映射回中心客体)。",
      runtimeEn: "IF (Focus_Shift) THEN (Force: Remap_Viewpoint)."
    }
  },
  { 
    id: "os_perfect_facade", 
    name: "完美的门面", nameEn: "Perfect Facade", 
    group: "B1. 性倒错-恋物 (Fetishism)", groupEn: "B1. Perversion-Fetishism", 
    def: "生活在精致的假象中，拒绝承认墙后就是荒原。", 
    defEn: "Living in exquisite illusions, refusing the wasteland behind the wall.", 
    core: "只要天鹅绒还没褪色，世界就是安全的。", 
    coreEn: "As long as the velvet hasn't faded, the world is safe.",
    logic: "审美作为最后一层防御（Aesthetic as Defense）。主体的 M1（虚无）被厚实的、华丽的视觉层（SUR5）完全覆盖。 ",
    logicEn: "Aesthetic as final defense. M1 is entirely covered by thick, ornate visual layers (SUR5).",
    patch: {
      mechanics: "基础恋物协议 + [掩盖深度 = 最大; 外部表现系数 = 1.0]",
      mechanicsEn: "Base_FETISHISM + [Cloaking_Depth = Max; External_Performance = 1.0]",
      aesthetic: "聚焦：昂贵的墙纸 + 堆叠的丝织品。文本：华丽得令人窒息的修辞。 ",
      aestheticEn: "Focus: Expensive_Wallpapers + Tiered_Silks. Text: Suffocatingly_Ornate_Rhetoric.",
      runtime: "IF (布面破损) THEN (触发：全局性精神崩溃)。",
      runtimeEn: "IF (Fabric_Torn) THEN (Trigger: Global_Breakdown)."
    }
  },
  { 
    id: "os_frozen_moments_collector", 
    name: "冻结瞬间的搜集者", nameEn: "Frozen Moments Collector", 
    group: "B1. 性倒错-恋物 (Fetishism)", groupEn: "B1. Perversion-Fetishism", 
    def: "热衷于捕捉万物凋零前的极致美感并将其固化。", 
    defEn: "Capturing and solidifying the moment of decay.", 
    core: "死掉的东西最安全，因为它们不会再背叛我。", 
    coreEn: "Dead things are safest; they can't betray me again.",
    logic: "主体的 M0（身份）被重定义为‘标本制作者’。通过将生命客体化（SUR5化），主体消除了对自己 M1（缺失认知）的恐惧。 ",
    logicEn: "M0 redefined as 'taxidermist'. Eliminating M1 (Lack) fear by objectifying life (SUR5-izing).",
    patch: {
      mechanics: "基础恋物协议 + [客体化函数 = 全局; 生命/标本转换率 = 1.0]",
      mechanicsEn: "Base_FETISHISM + [Objectification_Function = Global; Life-to-Specimen_Rate = 1.0]",
      aesthetic: "聚焦：浸泡在福尔马林里的标本 + 复古相机。文本：关于防腐、固定、留存的描写。 ",
      aestheticEn: "Focus: Specimens_in_Formalin + Vintage_Cameras. Text: Descriptions of preservation/fixation.",
      runtime: "IF (客体显示出生机) THEN (触发：强烈的修正/压制程序)。",
      runtimeEn: "IF (Object_Shows_Life) THEN (Trigger: Suppression_Protocol)."
    }
  },
  { 
    id: "os_logic_as_fetish", 
    name: "逻辑即恋物", nameEn: "Logic as Fetish", 
    group: "B1. 性倒错-恋物 (Fetishism)", groupEn: "B1. Perversion-Fetishism", 
    def: "对逻辑严密性的强迫性追求，以此掩盖核心的毫无逻辑。", 
    defEn: "Compulsive pursuit of logical rigor to hide core irrationality.", 
    core: "如果我在数学上证明了它是存在的，那么它背后的虚无就不值得害怕。", 
    coreEn: "If I prove it mathematically, the void behind it is not worth fearing.",
    logic: "逻辑系统（M4 律令）被作为一种‘物’来崇拜。主体在形式化的证明中逃避实在界（The Real）的撞击。 ",
    logicEn: "Logic system (M4 Law) worshipped as a 'thing'. Subject escapes the impact of the Real through formal proofs.",
    patch: {
      mechanics: "基础恋物协议 + [证明回路强度 = 最大; 虚无抵消率 = 1.0]",
      mechanicsEn: "Base_FETISHISM + [Proof_Loop_Strength = Max; Void_Offset = 1.0]",
      aesthetic: "聚焦：交错的白线 + 几何公式 + 晶体。文本：极其冰冷的科学术语。 ",
      aestheticEn: "Focus: Intersecting_Lines + Geometric_Formulas + Crystals. Text: Extremely_Cold_Scientific_Terms.",
      runtime: "IF (遇到悖论) THEN (执行：悖论递归/无限循环)。",
      runtimeEn: "IF (Paradox_Encountered) THEN (Execute: Recursive_Loop)."
    }
  }
];
