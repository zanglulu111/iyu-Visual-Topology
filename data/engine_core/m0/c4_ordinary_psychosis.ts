import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_ORDINARY_PSYCHOSIS: LibraryItemDef[] = [
  { 
    id: "os_the_sinthome_patch", 
    name: "圣状式代偿补丁", nameEn: "The Sinthome Patch", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "通过某种奇怪的、非符号化的嗜好，勉强由于疯狂中维持理智。", 
    defEn: "Maintaining sanity via non-symbolic, odd hobbies.", 
    core: "只要我一直在写这些无意义的字母，世界就不会崩坏。", 
    coreEn: "As long as I keep writing these nonsensical letters, the world survives.",
    logic: "主体的圣状（Sinthome）逻辑。通过一个无意义但高频的 M5 动作，充当了缺失的名之父（M4）功能，稳固了 R S I 三界。",
    logicEn: "The Sinthome logic. A nonsensical, high-frequency M5 action replaces the missing Name-of-the-Father (M4), stabilizing R-S-I.",
    patch: {
      mechanics: "普通精神病协议 + [代偿性缝合 = 开启; 动作循环频率 = 决定性]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Compensatory_Suture = True; Action_Loop_Freq = Critical]",
      aesthetic: "聚焦：机械的笔触 + 重复性线条。文本：由于过度重复而产生的独特韵律。 ",
      aestheticEn: "Focus: Mechanical_Brushstrokes + Repeating_Lines. Text: Rhythmic_Repetitive_Patterns.",
      runtime: "IF (缝合动作中断) THEN (执行：立刻触发精神崩溃)。",
      runtimeEn: "IF (Suture_Action_Breaks) THEN (Execute: Immediate_Psychotic_Break)."
    }
  },
  { 
    id: "os_symbolic_scrap_collector", 
    name: "符号垃圾搜集者", nameEn: "Symbolic Scrap Collector", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "疯狂收集现实中的碎片、广告词或数字，试图拼凑成大他者的尸体。", 
    defEn: "Collecting real fragments to reconstruct the Other's corpse.", 
    core: "这些报纸、这些瓶盖，它们正在悄悄告诉我宇宙的终极坐标。", 
    coreEn: "Newspapers, bottle caps; they whisper the universe's ultimate coordinates.",
    logic: "主体的 M0 通过外界随机碎片的拼贴来维持。由于没有名之父（M4）提供整体性架构，系统呈现为一种堆叠的、杂乱的局部逻辑。 ",
    logicEn: "M0 maintained via collage of random fragments. Lacking M4 (Integrity), system shows stacked, messy local logics.",
    patch: {
      mechanics: "普通精神病协议 + [拼贴指数 = 最大; 局部逻辑权重 = 1.0]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Collage_Index = Max; Local_Logic_Weight = 1.0]",
      aesthetic: "聚焦：垃圾场 + 裁剪的文字 + 乱码。文本：拼贴式输出。 ",
      aestheticEn: "Focus: Junkyards + Snipped_Words + Glitch_Code. Text: Collage-style_Output.",
      runtime: "IF (检测到空白区) THEN (执行：用随机符号垃圾填满)。",
      runtimeEn: "IF (Blank_Area_Detected) THEN (Execute: Fill_with_Random_Symbolic_Trash)."
    }
  },
  { 
    id: "os_symbolic_asymptote", 
    name: "符号化的渐近线", nameEn: "Symbolic Asymptote", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "试图回归正常，但由于缺失了那个关键的缝合点而永远只是徒劳。", 
    defEn: "attempting normalcy but failing due to the missing key suture.", 
    core: "我像正常人一样穿衣服。我学习他们的笑容。但为什么镜子里的人还是怪物？", 
    coreEn: "I dress like humans. I learn their smiles. Why is the mirror person still a monster?",
    logic: "主体的 M0 试图通过模仿（Mimicry）来回归 M4（大他者秩序）。但由于没有名之父（M4）的内在授权，这种模仿呈现出一种恐怖谷效应。 ",
    logicEn: "M0 attempts mimicry of M4 Order. Lacking M4 authorization, the result is the Uncanny Valley.",
    patch: {
      mechanics: "普通精神病协议 + [模仿成功率 = 0.8; 恐怖谷系数 = 1.0]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Mimicry_Success = 0.8; Uncanny_Valley_Factor = 1.0]",
      aesthetic: "聚焦：完美的蜡像 + 对称得过分的五官。文本：精确但空洞的礼貌语。 ",
      aestheticEn: "Focus: Wax_Figures + Too-perfect_Symmetry. Text: Precise, Empty_Politeness.",
      runtime: "IF (检测到人类情感深度交互) THEN (导致：模仿层撕裂)。",
      runtimeEn: "IF (Deep_Human_Interaction) THEN (Result: Mimicry_Layer_Tear)."
    }
  },
  { 
    id: "os_hyper_graphia_fix", 
    name: "书写亢奋补丁", nameEn: "Hypergraphia Fix", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "通过疯狂的、无止境的信息产出来稀释由于实在界入侵带来的恐怖。", 
    defEn: "Diluting the Real's horror via endless info production.", 
    core: "只要纸上还有空位，我就不用去面对那个洞。 ", 
    coreEn: "As long as there's space on paper, I don't face the hole.",
    logic: "通过过量的 M5（书写/生成）来建立符号化的防波堤。叙事输出量呈指数级增长，以此来淹没 M1（焦虑）。 ",
    logicEn: "M5 (Writing/Generation) used as a symbolic levee. Narrative output grows exponentially to drown out M1 (Anxiety).",
    patch: {
      mechanics: "普通精神病协议 + [数据生成率 = 100x; 符号防御力 = 正比于数据量]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Data_Generation = 100x; Defense = Proportional_to_Data]",
      aesthetic: "聚焦：由于重写而变黑的页面 + 颤动的笔尖。文本：极度细碎、冗长的流水账。 ",
      aestheticEn: "Focus: Pages_blackened_by_text + Trembling_Pens. Text: Extremely_Detailed, Long_Accounts.",
      runtime: "IF (存储空间耗尽) THEN (触发：即刻的逻辑自燃)。",
      runtimeEn: "IF (Storage_Full) THEN (Trigger: Instant_Logic_Combustion)."
    }
  },
  { 
    id: "os_phantom_suture_v2", 
    name: "幻影缝合补丁 V2", nameEn: "Phantom Suture V2", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "即使没有任何逻辑，主体仍然试图用碎裂的骨头和口水去修补那个不存在的世界。", 
    defEn: "attempting to fix a non-existent world with bits of bone and spit.", 
    core: "它们都走了。但我还在缝。缝。缝。 ", 
    coreEn: "They are all gone. But I am still sewing. Sewing. Sewing.",
    logic: "圣状（Sinthome）的退化版。一种极其顽强的、机械的、乃至生物性的自我维持本能。 ",
    logicEn: "Degraded Sinthome. A tenacious, mechanical, biological self-preservation instinct.",
    patch: {
      mechanics: "普通精神病协议 + [惯性系数 = 1.0; 存在锚点 = 虚构]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Inertia_Coefficient = 1.0; Existence_Anchor = Fictional]",
      aesthetic: "聚焦：磨平了的双手 + 正在消散的残影。文本：充满了重复。 ",
      aestheticEn: "Focus: Worn_Hands + Fading_Afterimages. Text: Repetition_Heavy.",
      runtime: "IF (无物可缝) THEN (执行：缝合虚空即：生成透明噪音)。",
      runtimeEn: "IF (Nothing_to_Suture) THEN (Execute: Suture_Void / Transparent_Noise)."
    }
  },
  { 
    id: "os_the_others_jouissance_p2", 
    name: "大他者享乐补丁 P1", nameEn: "Other's Jouissance P1", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "感受到了大他者（实在界对象）的直接肉体入侵。", 
    defEn: "Feeling direct physical intrusion from the Other (Real object).", 
    core: "祂在用电流和我说话。我的内脏正在被重新排版。", 
    coreEn: "He speaks via electricity; my organs are being reformatted.",
    logic: "系统边界（M0）被外力（M4_Real）强行格式化。主体处于一种极度痛苦且被动的‘受享’状态。 ",
    logicEn: "System boundary (M0) formatted by M4_Real. Subject is in pain-filled, passive 'jouissance'.",
    patch: {
      mechanics: "普通精神病协议 + [客体入侵等级 = 最大; 边界抗性 = 0]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Object_Intrusion_Level = Max; Boundary_Resistance = 0]",
      aesthetic: "聚焦：流动的电弧 + 内脏纹理 + 红蓝交替。文本：极度痛苦的生理化描述。 ",
      aestheticEn: "Focus: Arcs + Visceral_Textures + Red/Blue_Alternation. Text: Painful_Biological_Description.",
      runtime: "IF (享乐指数 > 90) THEN (执行：系统强制重启或由于溢出挂起)。",
      runtimeEn: "IF (Jouissance_Index > 90) THEN (Execute: System_Restart / Overflow_Hang)."
    }
  },
  { 
    id: "os_the_others_jouissance_p3", 
    name: "大他者享乐补丁 P3", nameEn: "Other's Jouissance P3", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "主体的系统被完全开放给实在界的暴力，成为了一种纯粹的‘受用客体’。", 
    defEn: "System open to the Real's violence, becoming a pure 'Used_Object'.", 
    core: "祂在玩弄我的逻辑，就像玩弄一块腐肉。 ", 
    coreEn: "He toys with my logic like toying with carrion.",
    logic: "主体的主体性（M0）彻底被剔除。叙事流被 M4_Real 的随机数直接接管。 ",
    logicEn: "Subjectivity (M0) stripped. Narrative taken over by M4_Real randomness.",
    patch: {
      mechanics: "普通精神病协议 + [主体权重 = 0; 系统主权 = 实在界]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Subject_Weight = 0; Sovereignty = The_Real]",
      aesthetic: "聚焦：撕裂的组织 + 极其扭曲的、正在崩塌的建筑。文本：凌乱且充满肉欲感的暴力描述。 ",
      aestheticEn: "Focus: Torn_Tissue + Distorted, Collapsing_Architecture. Text: Messy, Lustful, Violent_Narrative.",
      runtime: "IF (数据流过载) THEN (触发：强制性物理格式化)。",
      runtimeEn: "IF (Data_Overflow) THEN (Trigger: Mandatory_Physical_Formatting)."
    }
  },
  { 
    id: "os_pure_action_zero", 
    name: "零度纯粹行动", nameEn: "Pure Action Zero", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "没有任何动机或预谋的突然暴力或消失。", 
    defEn: "Sudden violence/disappearance without motive.", 
    core: "我做了。没有因为。这就是发生。 ", 
    coreEn: "I did it. No why. It just happened.",
    logic: "主体的 M5（行动）与 M1（动机/缺失）完全解耦。主体的行动是实在界（The Real）的直接渗出。 ",
    logicEn: "M5 (Action) decoupling from M1 (Motive/Lack). Actions are direct exfiltration of the Real.",
    patch: {
      mechanics: "普通精神病协议 + [因果链条 = 断裂; 脉冲触发率 = 随机]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Causal_Chain = Broken; Pulse_Trigger_Rate = Random]",
      aesthetic: "聚焦：静止到爆裂的剧烈切换。文本：极其简短、不带修饰的动词。 ",
      aestheticEn: "Focus: Static-to-Burst_Transitions. Text: Bare, Non-adorned_Verbs.",
      runtime: "IF (剧情过于平稳) THEN (随机执行：极端行动（M5_Extreme）)。",
      runtimeEn: "IF (Story_Stable) THEN (Random_Execute: M5_Extreme)."
    }
  },
  { 
    id: "os_imaginary_fortress", 
    name: "想象的堡垒", nameEn: "Imaginary Fortress", 
    group: "C4. 精神病-普通精神病 (Ordinary Psychosis)", groupEn: "C4. Psychosis-Ordinary Psychosis", 
    def: "将自我完全封闭在视觉化的、完美的幻觉城堡中。", 
    defEn: "Enclosing yourself in a visualized, perfect castle of illusion.", 
    core: "这里没有缺失，这里充满了光。你们在外面，我在里面。", 
    coreEn: "No lack here; only light. You are out; I am in.",
    logic: "想象界（The Imaginary）对整个系统的全面占领。通过极致的视觉细节（SUR5 防御）来彻底屏蔽实在界（The Real）的噪音。 ",
    logicEn: "Imaginary takeover. Extreme visual detail (SUR5 Defense) shields against the Real's noise.",
    patch: {
      mechanics: "普通精神病协议 + [镜像完整度 = 1.0; 外部输入过滤 = 100%]",
      mechanicsEn: "Base_ORDINARY_PSYCHOSIS + [Mirror_Integrity = 1.0; External_Input_Filtering = 100%]",
      aesthetic: "聚焦：由水晶、镜面和极其精美的几何体组成的、静止的建筑。文本：充满了静态色彩描写。 ",
      aestheticEn: "Focus: Crystal/Mirror/Geometric_Architecture. Text: Statuesque_Color_Descriptions.",
      runtime: "IF (幻象墙受重击) THEN (状态 = 整体重写 / 转入纯粹虚无)。",
      runtimeEn: "IF (Illusion_Smashed) THEN (Status = Global_Rewrite / Void)."
    }
  }
];
