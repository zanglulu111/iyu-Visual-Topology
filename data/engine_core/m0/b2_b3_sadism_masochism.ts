import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_SADISM_MASOCHISM: LibraryItemDef[] = [
  // --- B2. 性倒错-施虐 (Sadism) ---
  { 
    id: "os_symbolic_castrator", 
    name: "符号阉割者", nameEn: "Symbolic Castrator", 
    group: "B2. 性倒错-施虐 (Sadism)", groupEn: "B2. Perversion-Sadism", 
    def: "通过阉割（禁止）他人的享乐来获取某种主人的快感。", 
    defEn: "Gaining master's pleasure by forbidding others' joy.", 
    core: "既然我不能拥有，那任何人都不行。我是法律的执法官。", 
    coreEn: "If I can't have it, no one can. I am the enforcer of the law.",
    logic: "针对 M4（秩序）权力的深度代入。主体通过行使禁止权（Negative M5）来补偿 M1（阉割）带来的痛苦。 ",
    logicEn: "Deep identification with M4 (Order) power. Subject compensates for M1 (Castration) pain by exercising the power to prohibit (Negative M5).",
    patch: {
      mechanics: "基础 S&M 协议 + [阉割算子 = 激活; 执法权重 = 0.95]",
      mechanicsEn: "Base_SM + [Castration_Operator = Active; Enforcement_Weight = 0.95]",
      aesthetic: "聚焦：剪刀 + 巨大的断头台 + 阴影中的审判席. 文本：冷酷的禁令。 ",
      aestheticEn: "Focus: Scissors + Guillotines + Shadows_of_the_Bench. Text: Cold_Prohibitions.",
      runtime: "IF (他人表现出愉悦) THEN (执行：惩罚性规则注入)。",
      runtimeEn: "IF (Others_Showing_Joy) THEN (Execute: Punitive_Rule_Injection)."
    }
  },
  { 
    id: "os_transgression_as_rule", 
    name: "越界即规则", nameEn: "Transgression as Rule", 
    group: "B2. 性倒错-施虐 (Sadism)", groupEn: "B2. Perversion-Sadism", 
    def: "法律的存在仅仅是为了让他去违背，并以此感到快感。", 
    defEn: "Laws exist only to be broken for the resulting pleasure.", 
    core: "只有在‘不可以’的边缘，我才感到自己活着。", 
    coreEn: "Only on the edge of 'unallowed' do I feel alive.",
    logic: "主体的 M5（行动）总是寻找 M4（法律/规则）的裂缝。叙事充满了精密设计的破坏活动。",
    logicEn: "M5 (Action) seeks cracks in M4 (Law/Rules). Narrative is full of precisely designed acts of destruction.",
    patch: {
      mechanics: "基础 S&M 协议 + [禁忌吸引力 = 1.0; 越界概率 = 最大]",
      mechanicsEn: "Base_SM + [Taboo_Attraction = 1.0; Transgression_Prob = Max]",
      aesthetic: "聚焦：剪断的红线 + 黑夜中的手电筒。文本：带有兴奋感的挑衅。",
      aestheticEn: "Focus: Clipped_Wires + Flashlights_in_Darkness. Text: Thrill-filled_Provocation.",
      runtime: "IF (禁令出现) THEN (强制操作：探索违约路径)。",
      runtimeEn: "IF (Prohibition_Appears) THEN (Force: Exploration_of_Violation_Path)."
    }
  },
  { 
    id: "os_transgression_maze", 
    name: "越界的迷宫", nameEn: "Transgression Maze", 
    group: "B2. 性倒错-施虐 (Sadism)", groupEn: "B2. Perversion-Sadism", 
    def: "将违规行为复杂化，使其成为一种只有自己能破解的艺术。", 
    defEn: "Complicating violations into a self-solvable art.", 
    core: "简单的犯罪没有乐趣。我需要一个充满逻辑美感的背叛过程。", 
    coreEn: "Simple crime is no fun; I need a betrayal process with logical beauty.",
    logic: "主体的 M5（行动）将破坏行为（Not Slot3）仪式化和高度复杂化。叙事展现出一种怪异的‘破坏工匠精神’。 ",
    logicEn: "M5 (Action) ritualizes and complicates acts of destruction (Not Slot3). Narrative displays a weird 'handicraft of destruction'.",
    patch: {
      mechanics: "基础 S&M 协议 + [复杂度常量 = 100; 审美与破坏耦合 = 1.0]",
      mechanicsEn: "Base_SM + [Complexity_Constant = 100; Aesthetic_Destruction_Coupling = 1.0]",
      aesthetic: "聚焦：精密的定时炸弹 + 繁复的犯罪现场遗迹. 文本：技术性极高的破坏路径描写。 ",
      aestheticEn: "Focus: Precision_Timers + Complex_Crime_Scene_Remains. Text: Technical_Destruction_Paths.",
      runtime: "IF (路径被简化) THEN (执行：由于不满足审美而自毁)。",
      runtimeEn: "IF (Path_Simplified) THEN (Execute: Self-destruct)."
    }
  },
  // --- B3. 性倒错-受虐 (Masochism) ---
  { 
    id: "os_the_others_jouissance", 
    name: "大他者的享乐", nameEn: "The Other's Jouissance", 
    group: "B3. 性倒错-受虐 (Masochism)", groupEn: "B3. Perversion-Masochism", 
    def: "自愿成为大他者欲望的工具，以此获取某种极致的服从爽感。", 
    defEn: "Voluntarily becoming a tool for the Other's desire.", 
    core: "我是你快感的奴隶，而这恰恰使我成为了你的主人。", 
    coreEn: "I am the slave of your pleasure, which precisely makes me your master.",
    logic: "主体的主体性（M0）被置换为工具（Slot4）。叙事公式：I = Tool(Other_Desire)。",
    logicEn: "Subjectivity (M0) is displaced as a tool (Slot4). Formula: I = Tool(Other_Desire).",
    patch: {
      mechanics: "基础 S&M 协议 + [客体化程度 = 最大; 服从收益权重 = 1.0]",
      mechanicsEn: "Base_SM + [Objectification_Degree = Max; Obedience_Gain = 1.0]",
      aesthetic: "聚焦：锁链 + 跪姿 + 纹章。文本：高度忠诚的、工具化的词语。",
      aestheticEn: "Focus: Chains + Kneeling_Poses + Emblems. Text: Loyal, Tool-like_Vocabulary.",
      runtime: "IF (大他者命令下达) THEN (状态 = 瞬间激活)。",
      runtimeEn: "IF (Other_Command_Issued) THEN (Status = Instant_Activation)."
    }
  },
  { 
    id: "os_contractual_desire", 
    name: "契约式欲望", nameEn: "Contractual Desire", 
    group: "B3. 性倒错-受虐 (Masochism)", groupEn: "B3. Perversion-Masochism", 
    def: "必须写在合同里的爽感：明确的规则是快感的底色。", 
    defEn: "Pleasure defined by contracts; rules as the background for joy.", 
    core: "白纸黑字写清楚了，你现在可以对我做任何事。", 
    coreEn: "It's all in black and white now; you can do anything to me.",
    logic: "形式逻辑对享乐的全面接管。M5（行为）和 M7（闭环）必须遵循严格的契约（Slot3）条款。 ",
    logicEn: "Formal logic takes over enjoyment. M5 and M7 must follow strict contractual terms (Slot3).",
    patch: {
      mechanics: "基础 S&M 协议 + [法律性权重 = 最大; 快感边界 = 明确]",
      mechanicsEn: "Base_SM + [Legalistic_Weight = Max; Enjoyment_Boundary = Explicit]",
      aesthetic: "聚焦：公章 + 钢笔水迹 + 羊皮纸. 文本：充满了法律性辞令。 ",
      aestheticEn: "Focus: Seals + Ink_Stains + Parchment. Text: Legalistic_Rhetoric.",
      runtime: "IF (违反条款) THEN (触发：叙事失效/惩罚机制激活)。",
      runtimeEn: "IF (Clause_Violation) THEN (Trigger: Narrative_Invalidation)."
    }
  },
  { 
    id: "os_substitute_jouissance", 
    name: "代偿性享乐", nameEn: "Substitute Jouissance", 
    group: "B3. 性倒错-受虐 (Masochism)", groupEn: "B3. Perversion-Masochism", 
    def: "不再寻求人的爱，只寻求从系统、物或纯粹的痛苦中获得反馈。", 
    defEn: "Seeking feedback from systems/objects/pain instead of human love.", 
    core: "人是不可控的，但系统是. 我宁愿被代码拥抱。", 
    coreEn: "People are uncontrollable; systems are. I'd rather be embraced by code.",
    logic: "主体的 M3（欲望）被重定向到非人（Inhuman）目标。叙事中人类情感的极度匮乏与系统反馈的极度丰盈并存。 ",
    logicEn: "M3 (Desire) redirected to inhuman targets. Narrative coexistence of human emotional lack and system feedback abundance.",
    patch: {
      mechanics: "基础 S&M 协议 + [人际权重 = 0.05; 系统反馈权重 = 1.0]",
      mechanicsEn: "Base_SM + [Interpersonal_Weight = 0.05; System_Feedback = 1.0]",
      aesthetic: "聚焦：蓝色的数据流 + 机械手臂. 文本：充满了技术指令。 ",
      aestheticEn: "Focus: Blue_Data_Streams + Mechanical_Arms. Text: Technical_Commands.",
      runtime: "IF (尝试人类情感互动) THEN (触发：不兼容报错)。",
      runtimeEn: "IF (Human_Interaction) THEN (Trigger: Incompatibility_Error)."
    }
  },
];
