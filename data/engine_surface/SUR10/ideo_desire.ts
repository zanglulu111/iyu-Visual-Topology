import { LibraryCategoryDef } from '../../../types';

export const IDEO_DESIRE: LibraryCategoryDef = {
    id: "ideo_desire",
    name: "1. 欲望与消费 (Desire & Consumption)",
    nameEn: "1. Desire & Consumption",
    desc: "关于快乐、物质与注意力的信仰。",
    descEn: "Beliefs about pleasure, materiality, and attention.",
    items: [
      {
        id: "consumerism",
        name: "消费主义", nameEn: "Consumerism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "我买故我在。通过购买商品来构建身份，商品具有图腾般的魔力。",
        defEn: "I buy, therefore I am. Constructing identity through purchasing goods; commodities have totem-like magic.",
        core: "将符号消费视为填补存在主义空洞（M1）的唯一手段。",
        coreEn: "Treating symbolic consumption as the only means to fill the existential void (M1).",
        logic: "主体的 M1（缺失）被转译为无限的购买欲。大他者（M4）呈现为‘市场’，给主体派发虚假的救赎幻象（M3）。其悲剧在于‘获得即失效’的滑移。",
        logicEn: "The subject's lack (M1) is translated into endless purchasing desire. The Big Other (M4) appears as the 'Market', distributing false salvation fantasies (M3). The tragedy lies in the slide of 'obtaining means obsolescence'.",
        patch: {
          mechanics: "基础设定协议 + [欲望替换率 = 极速; 存在感维持 = 强依赖物质代偿]",
          mechanicsEn: "Base_Setting_Protocol + [Desire_Replacement_Rate = Extreme; Presence_Maintenance = Needs_Material_Compensation]",
          aesthetic: "聚焦：过度充满的购物袋、透支的账单。文本：充满了物化与标价的叙述。",
          aestheticEn: "Focus: Overflowing shopping bags, overdrawn bills. Text: Descriptions filled with reification and price tags.",
          runtime: "IF (失去购买力) THEN (触发：身份完全剥离与 M0 崩塌)。",
          runtimeEn: "IF (Loss_of_Purchasing_Power) THEN (Trigger: Complete_Identity_Stripping_and_M0_Collapse)."
        }
      },
      {
        id: "hedonism",
        name: "享乐主义", nameEn: "Hedonism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "多巴胺至上。避苦求乐是唯一道德。身体是用来挥霍的。",
        defEn: "Dopamine supreme. Avoiding pain and seeking pleasure is the only morality. The body is meant to be squandered.",
        core: "为了维持快感阈值而不断升级刺激，最终面临感官的彻底过载。",
        coreEn: "Constantly escalating stimulation to maintain pleasure thresholds, ultimately facing complete sensory overload.",
        logic: "通过极端的肉体感受（M3）来遮蔽大他者（M4）的凝视与实在界（M2）的死亡焦虑。享乐成为一种对抗虚无的强迫症结构。",
        logicEn: "Using extreme physical sensations (M3) to mask the gaze of the Big Other (M4) and the death anxiety of the Real (M2). Hedonism becomes an obsessive-compulsive structure against nothingness.",
        patch: {
          mechanics: "基础设定协议 + [快感阈值递增指数 = 1.0; 意义感知阻断 = 强制开启]",
          mechanicsEn: "Base_Setting_Protocol + [Pleasure_Threshold_Increment = 1.0; Meaning_Perception_Block = Active]",
          aesthetic: "聚焦：五光十色的液体、散瞳的眼睛、呕吐物。文本：粘稠、炽热的感官动词堆砌。",
          aestheticEn: "Focus: Multicolored liquids, dilated pupils, vomit. Text: Rheumatic, scorching sensory verbs piled up.",
          runtime: "IF (外界刺激停止) THEN (触发：极度的戒断反应与 M2 实在界暴露)。",
          runtimeEn: "IF (External_Stimulation_Stops) THEN (Trigger: Extreme_Withdrawal_and_M2_Exposure)."
        }
      },
      {
        id: "attention_worship",
        name: "流量拜物教", nameEn: "Attention Fetishism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "生活是一场表演，数据（点赞/关注）是衡量价值的唯一标准。",
        defEn: "Life is a performance; data (likes/follows) is the only measure of value.",
        core: "真实的自我在完美的线上人设前彻底溶解。掉粉等同于生物学死亡。",
        coreEn: "The authentic self dissolves completely before the perfect online persona. Losing followers equals biological death.",
        logic: "主体的存在（M0）完全外包给大他者（M4 呈现为受众网络）的凝视。若缺乏点赞等象征界数据反馈，M0 即刻化为虚无。这种焦虑迫使主体不断跨越生存底线（M6）。",
        logicEn: "Subject's existence (M0) is outsourced to the gaze of the Big Other (M4 as audience network). Without symbolic data feedback, M0 instantly becomes void. This anxiety forces crossing survival boundaries (M6).",
        patch: {
          mechanics: "基础设定协议 + [凝视依赖 = 最大; 内在逻辑 = 外部评判强绑定]",
          mechanicsEn: "Base_Setting_Protocol + [Gaze_Dependency = Max; Internal_Logic = Externally_Bound_to_Judgments]",
          aesthetic: "聚焦：屏幕反光、刺眼的补光灯、监控视角。文本：对弹幕、评论、数字增减的神经质关注。",
          aestheticEn: "Focus: Screen reflections, glaring ring lights, surveillance angles. Text: Neurotic attention to comments, numbers rising/falling.",
          runtime: "IF (失去流量/关注度下降) THEN (触发：采取升级的自毁行为以夺回焦点)。",
          runtimeEn: "IF (Loss_of_Traffic/Attention_Drop) THEN (Trigger: Escalated_Self-destructive_acts_to_reclaim_focus)."
        }
      },
      {
        id: "libertarianism_radical",
        name: "极端自由意志", nameEn: "Radical Libertarianism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "私有财产神圣不可侵犯，拒斥任何集体约束，金钱万能。",
        defEn: "Private property is sacred and inviolable, rejecting any collective constraint, money is omnipotent.",
        core: "自私被美化为神圣的独立。以孤岛心态面对世界崩塌。",
        coreEn: "Selfishness is beautifully framed as sacred independence. Facing global collapse with an island mentality.",
        logic: "试图通过物理财富与绝对边界（高墙/资本）来物理隔绝大他者（M4/体系）的征兆式剥夺。主体拒绝承认任何象征界的先验负债（M1），认为一切皆可买断。",
        logicEn: "Attempting to physically isolate the Big Other (M4) through physical wealth and absolute boundaries. Subject refuses to acknowledge any symbolic a priori debt (M1), believing everything can be bought out.",
        patch: {
          mechanics: "基础设定协议 + [集体责任切割 = 绝对; 财产神圣化 = 满值; M4阻隔欲 = 极强]",
          mechanicsEn: "Base_Setting_Protocol + [Collective_Responsibility_Severance = Absolute; Property_Sanctification = Max; M4_Blocking_Desire = Extreme]",
          aesthetic: "聚焦：冷酷的安全系统、隔离墙、金条与枪支。文本：充满冰冷的契约精神与交易术语。",
          aestheticEn: "Focus: Cold security systems, isolation walls, gold bars and guns. Text: Filled with cold contract spirit and transactional terms.",
          runtime: "IF (面临公共危机或他者求助) THEN (执行：系统封闭，筑起不可逾越的高墙自保)。",
          runtimeEn: "IF (Facing_Public_Crisis_or_Pleas_for_Help) THEN (Execute: System_lockdown, Build_insurmountable_walls_for_self-preservation)."
        }
      },
      {
        id: "commodity_fetishism",
        name: "商品拜物教", nameEn: "Commodity Fetishism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "相信物理物品有灵魂或神力。通过拥有特定物品来补全人格的主体性。",
        defEn: "Believing physical objects have souls/divine power. Completing personality subjectivity by possessing specific objects.",
        core: "对无生命物体的病态迷恋。将人的权力出让给物的超载寄生。",
        coreEn: "Pathological obsession with inanimate objects. Yielding human power to the overloaded parasitism of objects.",
        logic: "将主体所匮乏的存在主义力量（M1）强行锚定在一个物理客体（SUR5）上。当商品被极度神圣化并作为 M3 的唯一载体，一旦失去它，主体立刻等同于被象征界彻底阉割（M6）。",
        logicEn: "Forcibly anchoring the existential power the subject lacks (M1) onto a physical object (SUR5). When the commodity is the sole vessel of M3, losing it equals being symbolically castrated completely (M6).",
        patch: {
          mechanics: "基础设定协议 + [欲望锚点(SUR5) = 唯一神圣物品; 主体精神力绑定度 = 1.0]",
          mechanicsEn: "Base_Setting_Protocol + [SUR5_Anchor = Unique_Sacred_Item; Subject_Mental_Binding = 1.0]",
          aesthetic: "聚焦：近乎宗教般供奉的限量版物品（球鞋/手办/豪车）。文本：对物品材质、光泽以及独占权的痴迷描绘。",
          aestheticEn: "Focus: Limited edition items enshrined religiously. Text: Obsessive descriptions of material, gloss, and exclusive ownership.",
          runtime: "IF (圣物被轻视、剥夺或受损) THEN (触发：主体的狂暴复仇或无底线的精神崩溃)。",
          runtimeEn: "IF (Sacred_Item_Despised_Deprived_or_Damaged) THEN (Trigger: Berserk_revenge_or_bottomless_mental_breakdown)."
        }
      },
      {
        id: "aestheticism",
        name: "唯美主义", nameEn: "Aestheticism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "为了艺术而艺术。美高于道德和生命，生命自身就是用来创作最后一件艺术品的耗材。",
        defEn: "Art for art's sake. Beauty is above morality and life; life itself is consumable material to create the final artwork.",
        core: "极致的美绝不仅是皮相，往往伴随着对人体与伦理的极致残忍切割。",
        coreEn: "Extreme beauty is never just skin-deep; it often involves extreme cruel severances of body and ethics.",
        logic: "通过将一切遭遇审美化（SUR2 的极度扩张突破至 M4），主动悬置并蔑视大他者的伦理审判（M4）。在唯美者眼中，创伤痛楚（M2）被强行剥脱了其真实性，仅作为一种高级艺术的显色剂。",
        logicEn: "By aestheticizing every encounter (SUR2 bleeding into M4), actively suspending the Big Other's ethical judgment (M4). Trauma (M2) is stripped of reality, acting only as a developer liquid for high art.",
        patch: {
          mechanics: "基础设定协议 + [伦理审查 = 彻底屏蔽; 美学标准代偿 = 最高级优先级]",
          mechanicsEn: "Base_Setting_Protocol + [Ethical_Censorship = Blocked; Aesthetic_Override = Highest_Priority]",
          aesthetic: "聚焦：废墟中优雅弹弄钢琴、凄美且对称的鲜血飞溅。文本：对残忍场景进行冰冷而华丽的极致辞藻粉饰。",
          aestheticEn: "Focus: Elegant piano playing in ruins, poignant symmetric blood splashes. Text: Cold, ornate rhetorical sugarcoating of cruel scenes.",
          runtime: "IF (面临残酷生死抉择) THEN (执行：选择能产生最强视觉冲击力与悲剧折损美感的一条路)。",
          runtimeEn: "IF (Facing_Cruel_Life-Death_Choices) THEN (Execute: Choose_the_path_yielding_the_most_visual_impact_and_tragic_beauty)."
        }
      },
      {
        id: "carnivalism",
        name: "狂欢主义", nameEn: "Carnivalism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "巴赫金式的疯狂节庆。颠覆现有等级制度，通过集体的混乱与僭越来获得短暂重生。",
        defEn: "Bakhtinian crazy festival. Subverting existing hierarchies, gaining brief rebirth through collective chaos and transgression.",
        core: "充满面具与火把的短暂释放，旨在遮罩那无法打破的永恒制裁压抑。",
        coreEn: "Brief release filled with masks and torches, aiming to mask the unbreakable eternal sanctioning repression.",
        logic: "这是一种对 M4 (大他者律令) 的周期化、合法化颠覆体制。在庆典的特定时空锚点内，高低贱贵倒转，但它本质上是从属于 M4 阀门调节的隐性确认。狂欢一旦结束，M1 缺失感将以报复性加倍袭来。",
        logicEn: "A periodic, legalized subversion of M4. Within specific spacetime anchors, hierarchies invert, but mathematically it remains implicitly sanctioned by M4's safety valves. Upon ending, M1 lack returns with a vengeance.",
        patch: {
          mechanics: "基础设定协议 + [阶级/等级倒置 = 强制开启; 禁忌压抑阀门 = 暂时性彻底解除]",
          mechanicsEn: "Base_Setting_Protocol + [Hierarchy_Inversion = Active; Taboo_Repression_Valve = Temporary_Full_Release]",
          aesthetic: "聚焦：廉价的面具舞会、倒挂燃烧的小丑像、满地狼藉污渍。文本：充满戏谑、越轨、渎神与癫狂的短促节奏。",
          aestheticEn: "Focus: Cheap masquerades, inverted burning clowns, littered stained grounds. Text: Banter, transgression, blasphemy, and frenzied short rhythms.",
          runtime: "IF (庆典倒计时结束 / 黎明显现秩序恢复) THEN (触发：巨大的存在性失落感与大他者惩罚的实质降临)。",
          runtimeEn: "IF (Festival_Countdown_Ends / Dawn_Restores_Order) THEN (Trigger: Massive_existential_loss_and_actual_impending_punishment)."
        }
      },
      {
        id: "minimalism_cult",
        name: "极简邪教", nameEn: "Cult of Minimalism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "少即是多。通过不断地丢弃物品与关系，抵达对“空无”环境的偏执狂热和神圣化。",
        defEn: "Less is more. Reaching paranoid fanaticism and sanctification of 'emptiness' by constantly discarding items and relationships.",
        core: "将整个生活剥离到只剩惨白的骨架，上演一场充满控制欲的高级禁欲秀。",
        coreEn: "Stripping life down to pale bare bones, staging a high-level ascetic show filled with control freaks.",
        logic: "通过主动且剧烈地剥夺自身物理拥有（模拟 M6 代价支付）来抢夺叙事主导权，借此避免被动承受 M1（先验缺失）。实质是一种通过制造“绝对控制的无”来逃避实在界（M2）混乱入侵的深层焦虑。",
        logicEn: "Preemptively taking narrative control by actively depriving oneself of physical possessions (simulating M6 Stakes) to avoid passively bearing M1. A deep anxiety mechanism evading M2 chaos via creating 'absolute controlled nothingness'.",
        patch: {
          mechanics: "基础设定协议 + [物质占有率参数 = 极低恒定; 控制性排空强迫指数 = 最大]",
          mechanicsEn: "Base_Setting_Protocol + [Material_Possession = Minimal_Constant; Compulsive_Evacuation_Index = Max]",
          aesthetic: "聚焦：空无一物、惨白反光的房间、锋利且不留情面的直线。文本：冰冷感、高级禁欲词汇，拒斥任何多余的修辞与人情。",
          aestheticEn: "Focus: Empty glaring white rooms, sharp merciless straight lines. Text: Cold, high-ascetic vocabulary, rejecting any superfluous rhetoric and warmth.",
          runtime: "IF (遇到不可控的污渍、他人或非计划内物品的入侵) THEN (触发：深度的精神洁癖破裂、歇斯底里的排异反应)。",
          runtimeEn: "IF (Intruded_by_uncontrollable_stains_others_or_unplanned_items) THEN (Trigger: Deep_mental_mysophobia_rupture_hysterical_rejection)."
        }
      },
      {
        id: "dataism",
        name: "数据主义", nameEn: "Dataism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "坚信万物本质皆为算法计算。数据处理与流转是宇宙最高价值，碳基人类不过是算法的临时算力载体。",
        defEn: "Convinced all things are algorithms. Data processing is the highest universal value; carbon-based humans are temporary carriers.",
        core: "所有的主观情感必须被贬低、量化并拆解为生化电子算法。追求无视伦理的极致效率优化。",
        coreEn: "All subjective emotions must be devalued, quantified, and dismantled into biochemical algorithms. Pursuing extreme efficiency overriding ethics.",
        logic: "将悬在头顶的无解大他者（M4）彻底平替为冰冷、确定且无生命的数据统计算法。主体通过“自我量化（Self-Quantification）”来主动麻醉与抹除主观性的撕裂性创伤（M2），用机械决定论强行终结存在论危机。",
        logicEn: "Replacing the incomprehensible Big Other (M4) entirely with cold, certain data algorithms. Subject actively anesthetizes subjective trauma (M2) via Self-Quantification, forcibly ending ontological crisis with mechanical determinism.",
        patch: {
          mechanics: "基础设定协议 + [情感计算转化器 = 必定运转; 道德干预 = 无效; 效率优化引擎 = 全功率]",
          mechanicsEn: "Base_Setting_Protocol + [Emotion_to_Math_Converter = Always_On; Moral_Intervention = Null; Efficiency_Engine = Max]",
          aesthetic: "聚焦：密密麻麻的跳动代码流、佩戴满身的体征监控器、刺骨理性的图表。文本：使用去人性化的工业名词，将疼痛描绘成电容溢出。",
          aestheticEn: "Focus: Dense code streams, body covered in vitals monitors, bone-chilling charts. Text: Dehumanized industrial nouns, depicting pain as capacitor overflow.",
          runtime: "IF (遭遇完全无法被归类的数据异常_如自我牺牲之爱) THEN (执行：底层逻辑死锁、逻辑树崩溃并宕机)。",
          runtimeEn: "IF (Encounters_unquantifiable_anomaly_like_self-sacrificing_love) THEN (Execute: Base_logic_deadlock_tree_collapse_and_system_crash)."
        }
      },
      {
        id: "accelerationism_desire",
        name: "欲望加速主义", nameEn: "Libidinal Accelerationism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "与其去抵抗资本主义，不如猛烈加大油门，将系统的所有欲望阈值推向极致，直至崩溃或奇异飞升。",
        defEn: "Instead of resisting capitalism, violently floor the gas pedal, pushing all system desire thresholds to the extreme until collapse.",
        core: "一场关于疯狂过剩数字洪流的死磕。对速度、故障与异化的狂热哲学性赞颂。",
        coreEn: "A death-match with insane overflowing digital torrents. Fanatical philosophical praise for speed, glitches, and alienation.",
        logic: "主动拥抱作为吸血大他者（M4）的资本体系的虚伪性。其 M5（行动驱力）是不刹车，通过无限填装 M3 幻想，人为制造 M2（系统创伤级崩溃）的提前降临，以物理自毁求得拓扑解救。",
        logicEn: "Actively embracing the hypocrisy of the vampiric Big Other (M4). M5 is 'no brakes', infinitely stuffing M3 fantasies to artificially induce M2 (systemic trauma-level crash) early, seeking topological salvation via physical self-destruction.",
        patch: {
          mechanics: "基础设定协议 + [事件推演速度 = 指数极高; 缓冲模块 = 强制卸载; 系统过载阈值 = 随时击穿]",
          mechanicsEn: "Base_Setting_Protocol + [Event_Evolution_Speed = Exponential; Buffer_Module = Uninstalled; Overload_Threshold = Imminent_Breach]",
          aesthetic: "聚焦：赛博朋克深渊飙车、闪烁的红爆警报灯、视觉故障跳跃（Glitch）。文本：高度亢奋，充满了速度感与失控坠落的词汇。",
          aestheticEn: "Focus: Cyberpunk abyss drag racing, flashing red alerts, visual glitches. Text: Highly excitable, vocabulary of speed and uncontrolled falling.",
          runtime: "IF (面临维稳妥协选项或退路) THEN (操作：强行否定该选项，向系统中注入致命混乱变量加速冲向大结局)。",
          runtimeEn: "IF (Facing_stability_compromises_or_retreats) THEN (Action: Forcibly_deny_and_inject_fatal_chaos_variable_to_accelerate_into_finale)."
        }
      },
      {
        id: "gamification",
        name: "游戏化", nameEn: "Gamification",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "人生皆是电子练级域。将生命体征和人际关系极度量化为经验值XP与成就徽章，以追求高频的正反馈循环。",
        defEn: "Life is an electronic leveling zone. Extremely quantifying vitals and relations into XP and badges, seeking high-frequency loops.",
        core: "将最为严肃的流血与生离死别，降维转化为轻浮的屏幕读条。极度渴望读档重来的幻象。",
        coreEn: "Reducing solemn blood and death into frivolous screen loading bars. Extremely craving the illusion of a respawn load trigger.",
        logic: "这是一种狡猾的防御机制：用一套虚假的游戏规则（伪 M4）来隔离真实残酷的社会律令（真 M4）。主体妄想只要不断完成任务清单，就能免疫毫无道理的实在界剥夺（M2）。一切生老病死在此仅仅是“Debuff”或者“掉落”。",
        logicEn: "A cunning defense mechanism: using a fake gamified rule (pseudo-M4) to isolate true cruel societal dictates (real M4). Subject deludes that clearing task-lists immunizes against the senseless Real deprivation (M2).",
        patch: {
          mechanics: "基础设定协议 + [痛苦反馈 = 被经验值数字掩盖; 死亡威慑力权重 = 极度衰减]",
          mechanicsEn: "Base_Setting_Protocol + [Pain_Feedback = Masked_by_XP_numbers; Death_Deterrence_Weight = Severely_Attenuated]",
          aesthetic: "聚焦：漂浮的虚构进度条、任务提示框、爆出道具的强光。文本：广泛使用游戏工业专有名词（NPC、掉率、大招）来冷嘲热讽现实苦难。",
          aestheticEn: "Focus: Floating progress bars, quest prompts, loot flashes. Text: Broad use of gaming industry jargons (NPC, drop rate, ult) to mock reality's suffering.",
          runtime: "IF (遭遇无法重来的真实物理死亡/不可逆肢体残毁 M2 爆发) THEN (触发：游戏化的隔离面具彻底粉碎，引入压倒性的存在惊骇)。",
          runtimeEn: "IF (Encounters_irreversible_real_death_or_mutilation_M2) THEN (Trigger: Gamified_mask_shatters_introducing_overwhelming_existential_horror)."
        }
      },
      {
        id: "epicureanism",
        name: "伊壁鸠鲁主义", nameEn: "Epicureanism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "理性的保守主义享乐。通过压抑无限膨胀的欲望，追求绝对的宁静，极度规避一切可能引发痛苦和恐惧的世俗纠葛。",
        defEn: "Rational conservative hedonism. Pursuing absolute tranquility by repressing swelling desires, avoiding secular entanglements that bring pain.",
        core: "物理避世与乱世干涉之间的抗争。建立在城邦废墟之外的理想哲学花园。",
        coreEn: "The struggle between physical retreat and worldly interference. The ideal philosopher's garden built outside the ruins of the polis.",
        logic: "主体试图单方面斩断与充满暴力的大他者（M4）之间所有盘根错节的联系链接，在物理空间与心灵边界构筑“避难所花园”以拒止 M2 入侵。作为代价，主动将 M3 欲望望向彻底阉割的水平线。",
        logicEn: "Subject tries to unilaterally cut all tangled links with a violent Big Other (M4), building a 'Refuge Garden' physically and mentally to repel M2. In price, actively castrates M3 desires to baseline levels.",
        patch: {
          mechanics: "基础设定协议 + [欲望激活阈值 = 设置极高/钝化; 外部交互接口 = 强制关闭/最小化]",
          mechanicsEn: "Base_Setting_Protocol + [Desire_Activation_Threshold = High/Blunted; External_Interaction_Interfaces = Closed/Minimal]",
          aesthetic: "聚焦：高墙内静谧封闭的花园、简朴至极的一餐、与外界燃烧战火的强烈对比。文本：平淡、舒缓、具有老僧入定的去中心化特征。",
          aestheticEn: "Focus: Quiet enclosed gardens behind walls, simple meals, contrasted with outside fires. Text: Bland, soothing, decentralized zen.",
          runtime: "IF (花园体系被外部绝对暴力强行摧毁介入) THEN (触发：必须重新染血、卷入悲剧螺旋的极度抗拒与被迫妥协)。",
          runtimeEn: "IF (Garden_system_destroyed_by_external_absolute_violence) THEN (Trigger: Extreme_resistance_and_forced_compromise_into_bloody_tragedy_spirals)."
        }
      }
    ]
  };
