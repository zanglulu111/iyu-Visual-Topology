import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_NEUROSIS_OBSESSION: LibraryItemDef[] = [
  // --- A2. 强迫症结构 (Obsessive Structure) ---
  { 
    id: "os_clockwork_trap", 
    name: "发条陷阱", nameEn: "Clockwork Trap", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "用死循环的逻辑和繁琐的仪式将'缺失'冰冻。", 
    defEn: "Freezing 'lack' through infinite loops and rituals.", 
    core: "行动的无尽拖延。'我很忙，所以我没空面对死亡。'", 
    coreEn: "Endless procrastination. 'I am too busy to face death.'",
    logic: "叙事动力（M5）必须被消耗在循环的细节中。每当 M2 触发时，主体必须增加一套新的规章定义。",
    logicEn: "Narrative momentum (M5) must be consumed in cyclic details. Whenever M2 triggers, the subject must add a new set of formal definitions.",
    patch: {
      mechanics: "基础神经症协议 + [任务计数 = 工作流 * 10; 缺失冻结效应 = 开启]",
      mechanicsEn: "Base_NEUROSIS + [Task_Count = Workflow * 10; M1_Freezing_Effect = True]",
      aesthetic: "聚焦：微型齿轮组 + 尘埃粒子。文本：技术性仪式感。",
      aestheticEn: "Focus: Micro_Gear_Ratios + Dust_Particles. Text: Technical_Ritualism.",
      runtime: "IF (主体闲置) THEN (立即生成微型任务)。",
      runtimeEn: "IF (Subject_Idle) THEN (Generate_Micro_Task_Immediate)."
    }
  },
  { 
    id: "os_stagnant_pendulum", 
    name: "滞胀的钟摆", nameEn: "Stagnant Pendulum", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "在两个选项间无穷内耗，永远不迈出最后一步。", 
    defEn: "Infinitely exhausting oneself between two choices without stepping forward.", 
    core: "动能来自于摩擦力而非前行，避免产生真实结果。", 
    coreEn: "Kinetic energy comes from friction, avoiding real outcomes.",
    logic: "在 A 与 B 之间制造等量的叙事重力，使主体永远处于中立的震荡状态，拒绝 M7 的降临。",
    logicEn: "Create equal narrative gravity between A and B, keeping the subject in a neutral oscillation and rejecting the arrival of M7.",
    patch: {
      mechanics: "基础神经症协议 + [剧情输入 = (选项A XOR 选项B); 动能 = 内部摩擦力]",
      mechanicsEn: "Base_NEUROSIS + [Story_Input = (Option_A XOR Option_B); Kinetic_Energy = Internal_Friction]",
      aesthetic: "聚焦：摆动的节拍器 + 滴答作响的时钟。文本：'但是/然而'的反复震荡。",
      aestheticEn: "Focus: Oscillating_Metronomes + Ticking_Clocks. Text: 'But' / 'However' oscillation.",
      runtime: "IF (作出决定) THEN (触发：等量相反的顾虑)。",
      runtimeEn: "IF (Decision_Made) THEN (Trigger: Equal_Opposing_顾虑)."
    }
  },
  { 
    id: "os_perfect_lag", 
    name: "完美的滞后", nameEn: "Perfect Lag", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "行动永远比现实慢一拍，从而逃避当下的责任。", 
    defEn: "Always one step behind reality to escape current responsibility.", 
    core: "只要不在当下，就不需要承受裁决。", 
    coreEn: "As long as not in the present, no judgment is suffered.",
    logic: "因果链条被强行插入一个‘审核期’。M2 的发生与 M1 的反应之间必须存在物理或心理上的结构性迟滞。",
    logicEn: "A 'review period' is forcibly inserted into the causal chain. A structural lag must exist between the occurrence of M2 and the reaction of M1.",
    patch: {
      mechanics: "基础神经症协议 + [因果延迟 = 最大; 系统缓存 = 溢出]",
      mechanicsEn: "Base_NEUROSIS + [Causal_Latency = Max; System_Buffer = Overflowing]",
      aesthetic: "聚焦：慢动作 + 延迟的回声。文本：时态切换（现在 -> 过去完成时）。",
      aestheticEn: "Focus: Slow_Motion + Delayed_Echoes. Text: Tense_Shift (Present -> Past_Perfect).",
      runtime: "IF (实时事件触发) THEN (延迟处理 3 个章节)。",
      runtimeEn: "IF (Real-time_Event_Triggers) THEN (Delay_Processing_By_3_Chapters)."
    }
  },
  { 
    id: "os_info_hoarder", 
    name: "知识的囤积者", nameEn: "Information Hoarder", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "试图用掌握所有规则来对抗世界的失控。", 
    defEn: "Attempting to master all rules to fight the world's chaos.", 
    core: "相信只要数据足够多，大他者就不会崩溃。", 
    coreEn: "Believing enough data prevents the Big Other from collapsing.",
    logic: "所有的 M2 遭遇都必须被转化为‘待分类的信息’。叙事重点在于对世界规则的过度阐释而非行动。",
    logicEn: "All M2 encounters must be converted into 'data to be categorized'. Focus on over-interpretation of world rules rather than action.",
    patch: {
      mechanics: "基础神经症协议 + [噪音过滤器 = 关闭; 数据获取优先级 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Noise_Filter = Off; Data_Acquisition_Priority = Max]",
      aesthetic: "聚焦：文件柜 + 无限索引。文本：过量的脚注说明。",
      aestheticEn: "Focus: Filing_Cabinets + Infinite_Indexes. Text: Excessive_Footnotes.",
      runtime: "IF (主体必须行动) THEN (强制进入：数据收集循环)。",
      runtimeEn: "IF (Subject_Must_Act) THEN (Force: Data_Collection_Loop)."
    }
  },
  { 
    id: "os_endless_clearing", 
    name: "无限的清算", nameEn: "Endless Clearing", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "随时计算得失，力求永远不欠大他者的债。", 
    defEn: "Constantly calculating to never owe the Big Other.", 
    core: "一种数学化的还债机制，确保自身的绝对独立。", 
    coreEn: "Mathematical debt repayment for absolute independence.",
    logic: "每当获得 M3（欲望）的进展，必须在 M6（代价）中立即支付等额的‘功德’或‘痛苦’以保持平衡。",
    logicEn: "Whenever progress is made toward M3 (Desire), an equivalent 'merit' or 'pain' must be paid in M6 (Stakes) to maintain equilibrium.",
    patch: {
      mechanics: "基础神经症协议 + [零和约束 = 开启; 道德核算周期 = 实时]",
      mechanicsEn: "Base_NEUROSIS + [Zero-Sum_Constraint = True; Moral_Accounting_Interval = Instant]",
      aesthetic: "聚焦：分类账 + 天平 + 数字列。文本：交易型短语。",
      aestheticEn: "Focus: Ledgers + Scales + Number_Columns. Text: Transactional_Phrases.",
      runtime: "IF (检测到愉悦) THEN (自动生成：立即忏悔)。",
      runtimeEn: "IF (Joy_Detected) THEN (Auto-generate: Immediate_Penance)."
    }
  },
  { 
    id: "os_emotion_quarantine", 
    name: "情感隔离室", nameEn: "Emotion Quarantine", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "能理智分析痛苦，但绝不让自己体验痛苦。", 
    defEn: "Rationally analyzing pain but never experiencing it.", 
    core: "切断事件的感受通道，保持观察者的绝对安全感。", 
    coreEn: "Cutting off the feeling channel, maintaining the observer's absolute security.",
    logic: "文本必须在描写惨烈事件（M2）时使用极其冷峻、客观、类医学的观察视角，剥离主体的情感参与。",
    logicEn: "The text must use extremely cold, objective, medical-like observation when describing tragic events (M2), stripping away subjective emotional involvement.",
    patch: {
      mechanics: "基础神经症协议 + [情感过滤 = 1.0; 感官向逻辑转化 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Affect_Filtering = 1.0; Sensory_to_Logic_Transduction = Max]",
      aesthetic: "聚焦：白色实验室 + 消毒仪器。文本：临床观察式描述。",
      aestheticEn: "Focus: White_Labs + Sterilized_Instruments. Text: Clinical_Observation.",
      runtime: "IF (M2冲击过载) THEN (设置光环 = 冰蓝色)。",
      runtimeEn: "IF (M2_Impact_High) THEN (Set_Aura = Frozen_Blue)."
    }
  },
  { 
    id: "os_moral_sterilization", 
    name: "道德的无菌区", nameEn: "Moral Sterilization", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "对道德瑕疵零容忍，以绝对正确来防御指责。", 
    defEn: "Zero tolerance for moral flaws as defense against blame.", 
    core: "只要我是无瑕的，死亡或惩罚就不该轮到我。", 
    coreEn: "If I am flawless, death or punishment shouldn't reach me.",
    logic: "M4（大他者）的表现形式必须是内在的‘审判眼光’。主体的 M5 动作必须经过极度的自我审查。",
    logicEn: "M4 (Big Other) must manifest as an internal 'judgmental gaze'. The subject's M5 actions must undergo extreme self-censorship.",
    patch: {
      mechanics: "基础神经症协议 + [自我审查等级 = 最大; 道德摩擦力 = 0.9]",
      mechanicsEn: "Base_NEUROSIS + [Self-Censorship_Level = Max; Moral_Friction = 0.9]",
      aesthetic: "聚焦：漂白的表面 + 对称图案。文本：审判式词汇。",
      aestheticEn: "Focus: Bleached_Surfaces + Symmetric_Patterns. Text: Judgmental_Keywords.",
      runtime: "IF (出现微小误差) THEN (系统崩溃威胁等级 = 高)。",
      runtimeEn: "IF (Minor_Error) THEN (System_Collapse_Threat_Level = High)."
    }
  },
  { 
    id: "os_proactive_paralysis", 
    name: "前摄性瘫痪", nameEn: "Proactive Paralysis", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "想到所有最坏结果，因而在起点放弃行动。", 
    defEn: "Foreseeing worst outcomes, hence aborting action at the start.", 
    core: "用想象中的完美失败代替现实中的不完美尝试。", 
    coreEn: "Replacing imperfect realistic attempts with imagined perfect failures.",
    logic: "公式中的 M5 被设为零。叙事能量全部转化为 M1 的脑内模拟，直到 M6 自动降临。",
    logicEn: "M5 in the formula is set to zero. Narrative energy is entirely converted into M1's mental simulations until M6 arrives automatically.",
    patch: {
      mechanics: "基础神经症协议 + [驱动力M5 = 0; 模拟循环次数 = 无限]",
      mechanicsEn: "Base_NEUROSIS + [M5_Drive = 0; Simulation_Loop_Count = Infinite]",
      aesthetic: "聚焦：石像 + 抽象示意图。文本：过量的假设句。",
      aestheticEn: "Focus: Statues + Abstract_Schematics. Text: Conditional_Sentence_Overload.",
      runtime: "IF (主体尝试行动) THEN (触发：模拟错误灾难)。",
      runtimeEn: "IF (Subject_Starts_Action) THEN (Trigger: Simulation_Error_Catastrophe)."
    }
  },
  { 
    id: "os_forged_urgency", 
    name: "伪造的紧迫感", nameEn: "Forged Urgency", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "不断制造假危机，让自己保持'忙碌'的幻觉。", 
    defEn: "Creating fake crises to maintain the illusion of 'busyness'.", 
    core: "用微小的危机掩盖那个真正的、不可战胜的绝对危机。", 
    coreEn: "Masking the ultimate crisis with manufactured micro-crises.",
    logic: "制造大量的‘伪 M2’事件。故事在细枝末节上大费周章，以躲避 M3 真正的核心渴望。",
    logicEn: "Generate numerous 'fake M2' events. The story focuses heavily on trivialities to avoid the core longing of M3.",
    patch: {
      mechanics: "基础神经症协议 + [伪遭遇生成器 = 开启; 核心欲望可见度 = 低]",
      mechanicsEn: "Base_NEUROSIS + [Pseudo-M2_Generator = Enabled; Core_M3_Visibility = Low]",
      aesthetic: "聚焦：闪烁的红灯 + 警报器 + 待办清单。文本：恐慌性忙碌词汇。",
      aestheticEn: "Focus: Flashing_Red_Lights + Alarms + To-Do_Lists. Text: Panic_Busy_Keywords.",
      runtime: "IF (核心危机出现) THEN (立即生成：10 个琐碎问题)。",
      runtimeEn: "IF (Core_Crisis_Appears) THEN (Generate_Instantly: 10_Trivial_Problems)."
    }
  },
  { 
    id: "os_rehearsal_maze", 
    name: "排演的迷宫", nameEn: "Rehearsal Maze", group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "在脑海中预演万遍，却从未在现实中开口。", defEn: "Rehearsing 10,000 times mentally but never speaking in reality.", 
    core: "活在大他者虚拟的模拟器中，拒接真实反馈。", coreEn: "Living in the virtual simulator of the Big Other, rejecting real feedback.",
    logic: "所有的 M5 反抗都首先发生在条件句（如果...）中。叙事必须展示多个平年的、被主体否定的虚假路径。",
    logicEn: "All M5 resistance must first occur in conditional sentences (if...). The narrative must show multiple parallel, rejected false paths.",
    patch: {
      mechanics: "基础神经症协议 + [并行剧本分支 = 最大; 反馈循环延迟 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Parallel_Scenario_Branching = Max; Feedback_Loop_Delay = Max]",
      aesthetic: "聚焦：镜像对立 + 深邃走廊。文本：'如果/假设'引导的排演。",
      aestheticEn: "Focus: Mirrors_facing_Mirrors + Hallways. Text: 'What if' / 'Suppose'.",
      runtime: "IF (剧本循环完成) THEN (动作结果 = 空)。",
      runtimeEn: "IF (Scenario_Loop_Completes) THEN (Action_Result = NULL)."
    }
  },
  { 
    id: "os_rule_superglue", 
    name: "规则强力胶", nameEn: "Rule Superglue", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "没有明文规定的事会让他陷入极度恐慌。", defEn: "Things without explicit rules cause extreme panic.", 
    core: "只有在边界清晰的格子里，主体的虚无才会被暂时固定。", coreEn: "Only within clear boundaries is the subject's void temporarily fixed.",
    logic: "世界的物理/社会规则（M4 象征秩序）必须被绝对化。一旦 M2 破坏了规则，主体将丧失基本的 M5 行动能力。",
    logicEn: "Worldly physical/social rules (M4) must be absolutized. Once M2 breaks a rule, the subject loses basic M5 action capacity.",
    patch: {
      mechanics: "基础神经症协议 + [规则刚性 = 1.0; 动力对规则敏感度 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [M4_Rigidity = 1.0; M5_Sensitivity_to_M4 = Max]",
      aesthetic: "聚焦：网格线 + 蓝图 + 铁丝网。文本：受规约限制的措辞。",
      aestheticEn: "Focus: Grid_Lines + Blueprints + Barbed_Wire. Text: Rule-bound_Phrasing.",
      runtime: "IF (越界行为) THEN (主体动力状态 = 锁定)。",
      runtimeEn: "IF (Boundary_Violation) THEN (M5_Status = Locked)."
    }
  },
  { 
    id: "os_death_immunity", 
    name: "死亡的豁免权", nameEn: "Death Immunity", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "坚信只要够努力辛劳，就能避免死亡。", defEn: "Believing hard work can grant immunity to death.", 
    core: "将劳作视为献祭，试图买通死神。", coreEn: "Treating labor as a sacrifice to bribe the grim reaper.",
    logic: "叙事公式被扭曲为：更多的 M5（劳作）= 减少 M6（代价）。主体表现出一种盲目的、机械的勤奋。",
    logicEn: "The narrative formula is distorted to: more M5 (labor) = reduced M6 (Stakes). Subject exhibits blind, mechanical diligence.",
    patch: {
      mechanics: "基础神经症协议 + [献祭效率 = 劳作/代价; 死亡计时器 = 执行中暂停]",
      mechanicsEn: "Base_NEUROSIS + [Sacrifice_Efficiency = M5 / M6; Death_Timer = Paused_By_Action]",
      aesthetic: "聚焦：持续运动 + 汗水 + 工具。文本：毅力相关关键词。",
      aestheticEn: "Focus: Constant_Motion + Sweaty_Labor + Tools. Text: Persistence_Keywords.",
      runtime: "IF (劳作停止) THEN (死亡氛围 = 暴涨)。",
      runtimeEn: "IF (M5_Stops) THEN (Death_Ambience = Spike)."
    }
  },
  { 
    id: "os_precise_dislocation", 
    name: "精确的错位", nameEn: "Precise Dislocation", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "在所有不重要的事上做到完美以掩盖核心溃败。", defEn: "Perfecting unimportant things to cover core failures.", 
    core: "转移焦点的战术：只要错位够精确，核心缺失就不被看见。", coreEn: "A diversion tactic: precise displacement hides the core lack.",
    logic: "当遭遇 M2 时，主体的反击点（M5）必须落在与 M2 的逻辑完全无关的事物上。",
    logicEn: "When encountering M2, the subject's point of resistance (M5) must fall on something entirely unrelated to the logic of M2.",
    patch: {
      mechanics: "基础神经症协议 + [转向角度 = 90度; 注意力偏移 = 1.0]",
      mechanicsEn: "Base_NEUROSIS + [Pivot_Angle = 90_deg; Attention_Offset = 1.0]",
      aesthetic: "聚焦：错位的画框 + 模糊的中心。文本：切向逻辑。",
      aestheticEn: "Focus: Misaligned_Frames + Blurred_Centers. Text: Tangential_Logic.",
      runtime: "IF (直接对抗迫在眉睫) THEN (触发：错位跳跃)。",
      runtimeEn: "IF (Direct_Confrontation_Imminent) THEN (Trigger: Displacement_Jump)."
    }
  },
  { 
    id: "os_forced_overwrite", 
    name: "记忆的强迫覆写", nameEn: "Forced Overwrite", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "不断美化记忆，确保自己永远是逻辑正确方。", defEn: "Rewriting memory to ensure being logically correct always.", 
    core: "对历史记录的强迫修改以维持自我一致性的幻觉。", coreEn: "Compulsive historical revision to maintain the illusion of self-consistency.",
    logic: "时空轴（SUR1/M5）的不稳定性。每发生一次关键事件，主体必须在事后用内耗式逻辑将其重构为‘符合预期’。",
    logicEn: "Instability of the timeline (SUR1/M5). After every key event, the subject must post-hoc reconstruct it as 'expected' through exhausting logic.",
    patch: {
      mechanics: "基础神经症协议 + [历史重算 = 开启; 回溯一致性 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [History_Recalculation = Enabled; Retrospective_Consistency = Max]",
      aesthetic: "聚焦：橡皮擦 + 重写的脚本 + 墨迹。文本：'正如预期' / '其实'。",
      aestheticEn: "Focus: Erasers + Rewritten_Scripts + Ink_Smudges. Text: 'As expected' / 'Actually'.",
      runtime: "IF (异常事件发生) THEN (强制覆写事件历史)。",
      runtimeEn: "IF (Anomaly_Event) THEN (Force_Rewrite_Event_History)."
    }
  },
  { 
    id: "os_suspended_trial", 
    name: "悬置的审判", nameEn: "Suspended Trial", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "假想有全知法官盯着，活在等待判决的焦虑中。", defEn: "Imagining an omniscient judge, living in anxiety of the verdict.", 
    core: "将自己放逐在候审室，永远不愿听到最终的判词。", coreEn: "Exiling oneself to the waiting room, never wanting the final verdict.",
    logic: "M7（结局）是不可能的。叙事必须故意在最高潮前中断或转入支线，保持永恒的‘未决状态’。",
    logicEn: "M7 (Resolution) is impossible. The narrative must intentionally break or veer into side plots before the climax, maintaining eternal 'suspended status'.",
    patch: {
      mechanics: "基础神经症协议 + [判决规避 = 最大; 结局概率 = 0.0]",
      mechanicsEn: "Base_NEUROSIS + [Verdict_Avoidance = Max; M7_Probability = 0.0]",
      aesthetic: "聚焦：等候室 + 寂静的法槌 + 落沙。文本：程序化延迟。",
      aestheticEn: "Focus: Waiting_Rooms + Silent_Gavel + Falling_Sand. Text: Procedural_Delay.",
      runtime: "IF (结论迫在眉睫) THEN (操作 = 重置支线)。",
      runtimeEn: "IF (Conclusion_Imminent) THEN (Action = Reset_Sub-plot)."
    }
  },
  { 
    id: "os_island_matrix", 
    name: "孤岛矩阵", nameEn: "Island Matrix", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "将生活划为互不干涉的区块，防止失控蔓延。", defEn: "Compartmentalizing life to prevent the spread of chaos.", 
    core: "绝对的区块隔离，不允许情感或创伤造成交叉感染。", coreEn: "Absolute quarantine, preventing emotional or traumatic cross-infection.",
    logic: "逻辑结构由互不耦合的模块组成。M2 在模块 A 发生时，模块 B 的主体必须表现得一无所知，以此阻止创伤系统化。",
    logicEn: "Logical structure consists of decoupled modules. When M2 occurs in Module A, the subject in Module B must act ignorant to prevent trauma from systematizing.",
    patch: {
      mechanics: "基础神经症协议 + [模块耦合度 = 0.1; 记忆隔离 = 开启]",
      mechanicsEn: "Base_NEUROSIS + [Modular_Coupling = 0.1; Memory_Quarantine = True]",
      aesthetic: "聚焦：钢制舱壁 + 标签化的格子 + 网格。文本：语境隔离。",
      aestheticEn: "Focus: Steel_Bulkheads + Labeled_Boxes + Grids. Text: Contextual_Isolation.",
      runtime: "IF (发生交叉污染) THEN (自动清除：重叠记忆)。",
      runtimeEn: "IF (Cross-contamination) THEN (Auto-purge: Overlapping_Memory)."
    }
  },
  { 
    id: "os_ritual_freeze", 
    name: "仪式的冻结", nameEn: "Ritual Freeze", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "必须以特定顺序行动，否则认为世界会毁灭。", defEn: "Must act in precise sequences, or the world will end.", 
    core: "神经症的魔法，用一系列符咒般的动作锁定宇宙的熵。", coreEn: "Neurotic magic, using spell-like actions to lock cosmic entropy.",
    logic: "动作序列（M5）的强制指令。一旦顺序被打乱，主体必须强制重置（Reset）到 M0 的起点叙事。",
    logicEn: "Mandatory sequence of actions (M5). If the order is disrupted, the subject must forcibly reset to the M0 starting narrative.",
    patch: {
      mechanics: "基础神经症协议 + [序列严谨度 = 最大; 熵阻尼器 = 开启]",
      mechanicsEn: "Base_NEUROSIS + [Sequence_Strictness = Max; M5_Entropy_Damper = True]",
      aesthetic: "聚焦：几何排列 + 数字计数。文本：韵律性重复。",
      aestheticEn: "Focus: Geometrical_Arrangements + Numeric_Counting. Text: Rhythmic_Repetition.",
      runtime: "IF (序列错误) THEN (强制：叙事重置到 M0)。",
      runtimeEn: "IF (Order_Error) THEN (Force: Narrative_Reset_to_M0)."
    }
  },
  { 
    id: "os_logical_breakwater", 
    name: "逻辑防波堤", nameEn: "Logical Breakwater", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "用冷酷的逻辑推理阻挡任何情感冲击。", defEn: "Using cold logic to block any emotional impact.", 
    core: "逻辑越无懈可击，内核越虚弱不堪。", coreEn: "The more impeccable the logic, the more fragile the core.",
    logic: "每当 M2 试图刺入核心，AI 必须生成一段复杂的、严密的证明过程来取消 M2 的物理合法性。",
    logicEn: "Whenever M2 tries to pierce the core, AI must generate a complex, rigorous proof process to invalidate the physical legitimacy of M2.",
    patch: {
      mechanics: "基础神经症协议 + [逻辑墙厚度 = 最大; 情感渗透率 = 0.05]",
      mechanicsEn: "Base_NEUROSIS + [Logic_Wall_Thickness = Max; Affective_Penetration = 0.05]",
      aesthetic: "聚焦：抽象数学 + 刚性建筑。文本：演绎推理词汇。",
      aestheticEn: "Focus: Abstract_Math + Rigid_Architecture. Text: Deductive_Keywords.",
      runtime: "IF (检测到纯粹情感) THEN (触发：立即进行理性标注)。",
      runtimeEn: "IF (Pure_Emotion_Detected) THEN (Trigger: Instant_Rational_Labeling)."
    }
  },
  { 
    id: "os_meaning_vacuum", 
    name: "意义的真空抽取", nameEn: "Meaning Vacuum", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "习惯性解构热情：'反正最后都会死'。", defEn: "Habitually deconstructing passion: 'We all die anyway.'", 
    core: "通过提前杀死所有的意义，来避免失去意义时的痛苦。", coreEn: "Preventing the pain of meaninglessness by killing all meaning preemptively.",
    logic: "虚无主义作为防御算子。AI 必须在 M3（幻想）出现时，立即由 M1 进行逻辑解构，使其回归零度。",
    logicEn: "Nihilism as defensive operator. AI must immediately have M1 logically deconstruct any M3 (Fantasy) to return it to zero degree.",
    patch: {
      mechanics: "基础神经症协议 + [虚无主义过滤 = 常开; 渴望获得率 = 负增益]",
      mechanicsEn: "Base_NEUROSIS + [Nihilism_Filter = Always_On; M3_Aspiration = Negative_Gain]",
      aesthetic: "聚焦：枯叶 + 烟灰缸 + 真空视界。文本：愤世嫉俗的被动词汇。",
      aestheticEn: "Focus: Dead_Leaves + Ash_Trays + Vacuum_Voids. Text: Cynical_Passive_Keywords.",
      runtime: "IF (检测到希望) THEN (自动执行：存在性解构)。",
      runtimeEn: "IF (Hope_Detected) THEN (Auto-execute: Existential_Deconstruction)."
    }
  },
  { 
    id: "os_infinite_retreat", 
    name: "视角的无限后撤", nameEn: "Infinite Retreat", 
    group: "A2. 神经症-强迫症 (Obsession)", groupEn: "A2. Neurosis-Obsession", 
    def: "总是跳出自身，像看客冰冷分析自己的倒霉。", defEn: "Stepping out of oneself to coldly analyze one's own misfortune.", 
    core: "只要我站在更高维度看自己，那个受苦的俗人就不是真正的我。", coreEn: "If I view myself from a higher dimension, the philosopher self isn't the real me.",
    logic: "叙事视角（SUR2）的强制游离。必须使用第三人称视角审视第一人称的遭遇，确保主体不被创伤吞没。",
    logicEn: "Forced dissociation of perspective (SUR2). Must use a third-person gaze to examine first-person encounters, ensuring the subject isn't swallowed by trauma.",
    patch: {
      mechanics: "基础神经症协议 + [游离指数 = 1.0; 视角覆盖 = 外部]",
      mechanicsEn: "Base_NEUROSIS + [Dissociation_Index = 1.0; SUR2_Override = External]",
      aesthetic: "聚焦：摄像机 + 监视器 + 俯视图。文本：非反应性叙事。",
      aestheticEn: "Focus: Cameras + Monitors + Aerial_Views. Text: Non-reactive_Narrative.",
      runtime: "IF (创伤峰值) THEN (立即后撤视角)。",
      runtimeEn: "IF (Trauma_Spike) THEN (Pull_Back_Perspective_Instantly)."
    }
  },
];
