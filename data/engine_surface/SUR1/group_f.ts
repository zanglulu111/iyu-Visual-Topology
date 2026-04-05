import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_F: LibraryCategoryDef = {
  id: "type_f",
  name: "悬疑与推理 (Suspense & Mystery)",
  desc: "智力的迷宫，真相的剥离，强调“解谜”与“紧张感”。",
  items: [
    { 
      id: "whodunit", 
      name: "本格推理", nameEn: "Whodunit",
      def: "逻辑至上、解谜游戏、侦探vs凶手、给观众公平线索。", 
      defEn: "Logic supreme, puzzle games, detective vs killer, fair clues for audience.",
      core: "混乱的犯罪现场 vs 侦探的绝对理性。智力拼图，还原唯一的真相。 | 换喻 ($): 放大镜与机械锁 (Magnifying Glass and Mechanical Lock)",
      coreEn: "Chaotic crime scene vs detective's absolute rationality. Intellectual puzzle, restoring the sole truth. | Metonymy ($): Magnifying Glass",
      logic: "【思维拼图】：M4（凶手制造的假象）是需要被解构的迷宫。M1（侦探）运用绝对客观的 M5（逻辑框架）对 M2（零散线索）进行重组，最终揭示真相。",
      logicEn: "[Mind Puzzle]: M4 (Killer's illusion) is a maze to be deconstructed. M1 (Detective) uses absolute objective M5 (Logic Framework) to reconstruct M2 (Scattered Clues), finally revealing the truth.",
      patch: {
        mechanics: "基础侦探协议 + [线索透明度 = 100%; 动机重要性 = 低]",
        mechanicsEn: "Base_DETECTIVE + [Clue_Transparency = 100%; Motive_Importance = Low]",
        aesthetic: "聚焦：嫌疑人一字排开的对称构图 + 沾有血迹的精巧怀表特写 + 错综复杂的图纸。文本：严谨如数学公式般的排他法推理过程与克制的情感。",
        aestheticEn: "Focus: Symmetrical_Lineup_Of_Suspects + Close-up_Of_Bloodstained_Pocket_Watch + Intricate_Blueprints. Text: Rigorous_Math-Like_Deductive_Reasoning_And_Restrained_Emotion.",
        runtime: "IF (所有的不可能都被排除) THEN (剩下的唯一项，无论多么令人难以置信，必定是真相)。",
        runtimeEn: "IF (All_Impossibilities_Eliminated) THEN (The_Remaining_Option_However_Improbable_Must_Be_Truth)."
      }
    },
    { 
      id: "social_mystery", 
      name: "社会派推理", nameEn: "Social Mystery",
      def: "借案件剖析人性与社会问题、动机大于诡计、现实主义。", 
      defEn: "Analyzing humanity and society via crime, motive > trick, realism.",
      core: "个体罪行 vs 社会体制的结构性压迫。凶手也是受害者。 | 换喻 ($): 沾血的旧报纸 (Bloodstained Old Newspaper)",
      coreEn: "Individual crime vs structural oppression of social systems. Killer is also a victim. | Metonymy ($): Bloodstained Old Newspaper",
      logic: "【体制之殇】：M5（查案过程）不断向 M4（社会背景/阶级矛盾）深挖。发现 M1（凶手）往往是因为 M6（绝望的处境）而被迫行凶。",
      logicEn: "[Systemic Tragedy]: M5 (Investigation) digs deep into M4 (Social Background/Class Conflict). Discovers M1 (Killer) was forced by M6 (Desperate Situation).",
      patch: {
        mechanics: "基础社会批判 + [诡计复杂度 = 低; 情感共鸣度 = MAX]",
        mechanicsEn: "Base_SOCIAL_CRITIQUE + [Trick_Complexity = Low; Emotional_Resonance = MAX]",
        aesthetic: "聚焦：潮湿阴暗的贫民窟小巷 + 受害者家属疲惫绝望的面容 + 被遗弃的生锈工厂。文本：对底层生活的细腻白描，充满沉重感与对体制的拷问。",
        aestheticEn: "Focus: Damp_Dark_Slum_Alleys + Tired_Despairing_Faces_Of_Victims'_Families + Abandoned_Rusty_Factories. Text: Delicate_Descriptions_Of_Bottom-Tier_Life_Heavy_With_Institutional_Interrogation.",
        runtime: "IF (破案到了最后阶段) THEN (真相必定会引发侦探对法律与道德的巨大困惑与无力感)。",
        runtimeEn: "IF (Investigation_Reaches_Final_Stage) THEN (Truth_Must_Trigger_Detective's_Immense_Confusion_And_Helplessness_Regarding_Law_And_Morality)."
      }
    },
    { 
      id: "noir", 
      name: "硬汉/黑色", nameEn: "Hardboiled / Noir",
      def: "孤独的侦探、道德模糊的城市、烟酒与宿命、蛇蝎美人。", 
      defEn: "Lonely detective, morally ambiguous city, smoke/booze/fate, femme fatale.",
      core: "道德沦丧的城市 vs 坚守底线的孤独侦探。不仅是查案，是查人性。 | 换喻 ($): 威士忌与风衣 (Whiskey and Trench Coat)",
      coreEn: "Morally decayed city vs lonely detective holding the line. Investigating humanity, not just crimes. | Metonymy ($): Whiskey and Trench Coat",
      logic: "【泥沼行走】：M4（整个城市的腐败系统）是无法被彻底清除的。M1（侦探）凭借有限的 M5（老拳/手枪）只能拯救个别人的灵魂（或失败）。",
      logicEn: "[Walking in Muck]: M4 (City's corrupt system) cannot be fully cleansed. M1 (Detective) using limited M5 (Fists/Gun) can only save individual souls (or fail).",
      patch: {
        mechanics: "基础犬儒协议 + [肉体受难频率 = 高; 浪漫背叛率 = 极高]",
        mechanicsEn: "Base_CYNICAL + [Physical_Suffering_Freq = High; Romance_Betrayal_Rate = Extremely_High]",
        aesthetic: "聚焦：百叶窗切割的阴影 + 雨夜反射霓虹的柏油路 + 蛇蝎美人红唇吐出的烟圈。文本：带点自嘲、看透一切却又无可奈何的第一人称冷硬念白。",
        aestheticEn: "Focus: Shadows_Cut_By_Blinds + Wet_Asphalt_Reflecting_Neon + Femme_Fatale_Blowing_Smoke_Rings. Text: Self-Deprecating_World-Weary_Yet_Helpless_1st-Person_Hardboiled_Monologue.",
        runtime: "IF (美丽的委托人向侦探寻求保护) THEN (她有90%的概率是最终的幕后黑手或引诱侦探入局的诱饵)。",
        runtimeEn: "IF (Beautiful_Client_Seeks_Detective's_Protection) THEN (90%_Probability_She_Is_The_Mastermind_Or_Bait)."
      }
    },
    { 
      id: "locked_room", 
      name: "密室/暴风雪山庄", nameEn: "Locked Room",
      def: "封闭空间、全员嫌疑人、不可能犯罪、孤岛模式、猜疑链。", 
      defEn: "Closed space, everyone is a suspect, impossible crimes, isolated island, chain of suspicion.",
      core: "物理上的绝对封闭 vs 心理上的无限猜忌。连环死亡的倒计时。 | 换喻 ($): 从内部反锁的门 (Door Locked from Inside)",
      coreEn: "Absolute physical confinement vs infinite psychological suspicion. Countdown of serial deaths. | Metonymy ($): Door Locked from Inside",
      logic: "【高压锅】：M4（物理隔绝的天气/结界）切断了外部救援。M1 内部因未知的 M0（凶手）产生剧烈的不信任，M5（推理）在绝望中加速进行。",
      logicEn: "[Pressure Cooker]: M4 (Physical isolation/weather) cuts off rescue. M1 group distrusts each other due to unknown M0 (Killer). M5 (Deduction) accelerates in despair.",
      patch: {
        mechanics: "基础隔离协议 + [环境脱逃概率 = 0; 伤亡率 = 随时间线性上升]",
        mechanicsEn: "Base_ISOLATION + [Escape_Probability = 0; Casualty_Rate = Linear_Increase_Over_Time]",
        aesthetic: "聚焦：狂风撞击着古堡的玻璃 + 微弱跳动的烛火 + 众人充满敌意又惊恐的对视。文本：极具压迫感的时间推移记录与每个人潜藏的恶意暴露。",
        aestheticEn: "Focus: Howling_Wind_Hitting_Castle_Glass + Flickering_Candlelight + Panicked_Hostile_Glances_Between_Everyone. Text: Oppressive_Time-Passing_Records_And_Exposure_Of_Everyone's_Hidden_Malice.",
        runtime: "IF (两人决定单独行动去寻找线索) THEN (其中一人必定在下一个场景成为一具诡异的尸体)。",
        runtimeEn: "IF (Two_People_Decide_To_Search_For_Clues_Alone) THEN (One_Of_Them_Must_Become_A_Bizarre_Corpse_In_The_Next_Scene)."
      }
    },
    { 
      id: "police", 
      name: "警察程序", nameEn: "Police Procedural",
      def: "真实的破案流程、取证、法医、体制内部协作、连环案。", 
      defEn: "Realistic investigation process, forensics, institutional collaboration, serial cases.",
      core: "繁琐的程序正义 vs 狡猾的罪犯。体制内的官僚主义也是阻力。 | 换喻 ($): 警戒线与证物袋 (Police Tape and Evidence Bag)",
      coreEn: "Tedious procedural justice vs cunning criminals. Institutional bureaucracy is also a hurdle. | Metonymy ($): Police Tape and Evidence Bag",
      logic: "【机器运转】：对抗 M0（犯罪）的不是某个天才 M1，而是 M4（整个警务系统的流程）。证据链（M2）的拼接依靠集体的系统性劳动（M5）。",
      logicEn: "[Machine Running]: Combating M0 (Crime) isn't a genius M1, but M4 (The entire police system procedure). Piecing Evidence (M2) relies on collective systemic labor (M5).",
      patch: {
        mechanics: "基础团队协议 + [程序合法性 = 强制; 官僚干预频率 = 中高]",
        mechanicsEn: "Base_TEAMWORK + [Procedural_Legality = Mandatory; Bureaucratic_Interference = Med-High]",
        aesthetic: "聚焦：冰冷的法医解剖台 + 白板上贴满的照片红线网络 + 泛着蓝光的审讯室玻璃。文本：高度专业的法医术语流与冗长无奈的口供笔录。",
        aestheticEn: "Focus: Cold_Autopsy_Table + Whiteboard_Full_Of_Photos_And_Red_String + Blue-Tinted_Interrogation_Glass. Text: Highly_Professional_Forensic_Jargon_And_Long_Tedious_Interrogation_Transcripts.",
        runtime: "IF (探员找到了关键证据但获取手段违法) THEN (证据必会在法庭或上级干预下被判无效，导致罪犯逍遥法外)。",
        runtimeEn: "IF (Detective_Finds_Key_Evidence_Instantly_But_Illegally) THEN (Evidence_Must_Be_Ruled_Inadmissible_Letting_Criminal_Go_Free)."
      }
    },
    { 
      id: "psychological_thriller", 
      name: "心理惊悚", nameEn: "Psychological Thriller",
      def: "精神操控、不可靠叙述、记忆碎片、反转再反转。", 
      defEn: "Mind games, unreliable narrators, memory fragments, twist after twist.",
      core: "叙述者自己的认知 vs 客观现实。观众被误导，直到最后一刻。 | 换喻 ($): 旋转的陀螺 (Spinning Top)",
      coreEn: "Narrator's own perception vs objective reality. Audience misled until the last moment. | Metonymy ($): Spinning Top",
      logic: "【认知迷宫】：M1（主角视角）是残缺或被 M4（煤气灯操控者）污染的。M5（寻找真相）的过程其实是解构 M1 自身现实的过程，边界模糊。",
      logicEn: "[Cognitive Maze]: M1 (Protagonist POV) is fractured or corrupted by M4 (Gaslighter). M5 (Seeking Truth) is actually deconstructing M1's own reality, borders blur.",
      patch: {
        mechanics: "基础幻象协议 + [信息对称度 = 严重不对称; 精神状态 = 持续下滑]",
        mechanicsEn: "Base_ILLUSION + [Info_Symmetry = Severely_Asymmetric; Mental_State = Continuous_Decline]",
        aesthetic: "聚焦：虚焦的双重叠影镜头 + 墙壁上的飞蚊症视觉 + 画面突跳带来的错位感。文本：前后矛盾的记忆陈述，分不清现实与梦境的焦虑呓语。",
        aestheticEn: "Focus: Out-Of-Focus_Double_Exposures + Floaters_Vision_On_Walls + Jump-Cut_Displacement. Text: Inconsistent_Memory_Statements_Anxious_Ramblings_Blurring_Dream_And_Reality.",
        runtime: "IF (主角终于揭开了所谓施虐者的阴谋) THEN (通常会发现自己才是那个制造了一切悲剧的疯子)。",
        runtimeEn: "IF (Protagonist_Finally_Uncovers_The_Abuser's_Plot) THEN (Usually_Finds_Out_They_Themselves_Are_The_Lunatic_Who_Caused_Everything)."
      }
    },
    { 
      id: "serial_killer", 
      name: "连环杀手", nameEn: "Serial Killer",
      def: "侧写、猫鼠游戏、变态心理学、猎捕怪物、仪式感犯罪。", 
      defEn: "Profiling, cat and mouse, abnormal psychology, hunting monsters, ritualistic crimes.",
      core: "探员为了抓住怪物，必须理解怪物的思维，甚至凝视深渊。 | 换喻 ($): 仪式性的案发现场 (Ritualistic Crime Scene)",
      coreEn: "To catch the monster, the agent must understand its mind, peering into the abyss. | Metonymy ($): Ritualistic Crime Scene",
      logic: "【深渊镜像】：M1（侧写师）为了抓捕 M4（连环杀手），其 M5（思考方式）必须与 M4 同步。导致 M1 面临被转化为 M4 的巨大 M0（心理异化）风险。",
      logicEn: "[Abyss Mirror]: M1 (Profiler) must sync M5 (Thought Process) with M4 (Serial Killer) to catch them. M1 faces huge M0 (Mental Alienation) risk of becoming M4.",
      patch: {
        mechanics: "基础猎杀协议 + [共情能力要求 = 极高但致命; 罪犯智商 = 绝顶]",
        mechanicsEn: "Base_HUNT + [Empathy_Requirement = Extremely_High_But_Fatal; Criminal_IQ = Genius]",
        aesthetic: "聚焦：摆成特定姿势的冰冷尸体特写 + 昏暗录像带里的恐怖审讯 + 探员布满血丝的双眼。文本：充满病态美学的犯罪动机陈述与极度理性的心理分析碰撞。",
        aestheticEn: "Focus: Close-up_Of_Cold_Corpses_Posed_Specifically + Terrifying_Interrogations_In_Dim_Tapes + Agent's_Bloodshot_Eyes. Text: Morbidly_Aesthetic_Motive_Statements_Clashing_With_Hyper-Rational_Psych-Analysis.",
        runtime: "IF (探员完全预测了杀手的下一步行动) THEN (代价往往是他自己身边最亲近的人成为了猎物)。",
        runtimeEn: "IF (Agent_Perfectly_Predicts_Killer's_Next_Move) THEN (The_Cost_Is_Often_Their_Closest_Loved_One_Becoming_The_Prey)."
      }
    },
    { 
      id: "espionage", 
      name: "间谍/谍战", nameEn: "Espionage",
      def: "身份伪装、双重间谍、情报窃取、国家安全、冷战暗影。", 
      defEn: "Identity disguise, double agents, intel theft, national security, cold war shadows.",
      core: "信任的绝对缺失。每个人都戴着面具，爱人可能是敌人。国家机器下的幽灵。 | 换喻 ($): 伪造的护照 (Forged Passport)",
      coreEn: "Absolute lack of trust. Everyone wears masks, lovers might be enemies. Ghosts within the state machine. | Metonymy ($): Forged Passport",
      logic: "【面具迷宫】：M1（特工）不存在真实的身份， M2（情报）是唯一的流通硬通货。M4（国家利益）随时会献祭 M1，M3（爱情）是致命的弱点。",
      logicEn: "[Mask Maze]: M1 (Agent) has no real identity, M2 (Intel) is the only currency. M4 (State Interest) can sacrifice M1 at any time, M3 (Love) is a fatal flaw.",
      patch: {
        mechanics: "基础博弈协议 + [谎言级别 = 国家维度; 情感剥离要求 = MAX]",
        mechanicsEn: "Base_GAME_THEORY + [Lie_Level = State_Dimension; Emotion_Stripping = MAX]",
        aesthetic: "聚焦：冷战时期压抑的水泥建筑 + 桥头的浓雾交接 + 装上消音器的手枪特写。文本：充斥接头暗号、情报黑话与隐晦的试探，真假难辨的对白。",
        aestheticEn: "Focus: Oppressive_Cold_War_Concrete_Architecture + Foggy_Bridge_Handoffs + Silenced_Pistol_Close-Ups. Text: Codenames_Intel_Jargon_And_Obscure_Probing_Indistinguishable_Truth_And_Lies.",
        runtime: "IF (特工对敌方某人动了真情试图带其叛逃) THEN (情报局高层会立刻下达将两人同时抹杀的清除指令)。",
        runtimeEn: "IF (Agent_Falls_In_Love_With_Enemy_And_Tries_To_Defect) THEN (Agency_Brass_Immediately_Orders_Erasure_Of_Both)."
      }
    },
    { 
      id: "legal", 
      name: "法庭/律政", nameEn: "Legal Thriller",
      def: "控辩博弈、证据反转、程序正义、语言的战斗、陪审团心理学。", 
      defEn: "Prosecution vs defense, evidence twists, procedural justice, verbal combat, jury psychology.",
      core: "法律事实 vs 客观真相。语言和逻辑成为武器，法庭是角斗场。 | 换喻 ($): 敲击的法槌 (Gavel Strike)",
      coreEn: "Legal facts vs objective truth. Language and logic become weapons, court is the arena. | Metonymy ($): Gavel Strike",
      logic: "【语言角斗】：客体 M2（真相）并不重要，重要的是 M5（控辩双方的语言建构能力）如何去说服 M4（法官/陪审团）。这是关于定性的文字游戏。",
      logicEn: "[Verbal Arena]: Objective M2 (Truth) is irrelevant, what matters is M5's (Lawyers' rhetoric construct) ability to persuade M4 (Judge/Jury). It is a word game of definition.",
      patch: {
        mechanics: "基础辩论协议 + [证据合法性要求 = 刚性; 共情操纵 = 胜负手]",
        mechanicsEn: "Base_DEBATE + [Evidence_Legality = Rigid; Empathy_Manipulation = Decisive]",
        aesthetic: "聚焦：堆积如山的文件卷宗 + 律师猛然起立抗议的凌厉动作 + 证人席上崩溃流泪的特写。文本：逻辑严密的交叉询问，充满攻击性的连珠炮排比句与法理科普。",
        aestheticEn: "Focus: Mountains_Of_Case_Files + Sharp_Motion_Of_Lawyer_Standing_To_Object + Close-Up_Of_Witness_Breaking_Down. Text: Logically_Tight_Cross-Examinations_Aggressive_Rapid-Fire_Parallelisms_And_Legal_Explanations.",
        runtime: "IF (辩方律师在最后十分钟拿出了足以颠覆案件的完美新证据) THEN (必定会被控方以“程序不当”为由强烈阻击，引发全场哗然)。",
        runtimeEn: "IF (Defense_Produces_Perfect_Case-Flipping_New_Evidence_In_Last_10_Mins) THEN (Must_Be_Fiercely_Blocked_By_Prosecution_Over_'Improper_Procedure'_Causing_Uproar)."
      }
    },
    { 
      id: "heist", 
      name: "高智商犯罪/侠盗", nameEn: "Heist / Caper",
      def: "精密计划的抢劫或骗局、团队合作、炫技、反套路、多线并进。", 
      defEn: "Meticulously planned robberies or cons, teamwork, showing off, anti-tropes, multi-threaded.",
      core: "完美的计划 vs 突发的变数。团队配合的节奏感，盗亦有道的浪漫。 | 换喻 ($): 保险箱倒计时 (Safe Countdown)",
      coreEn: "Perfect plan vs sudden variables. Rhythm of teamwork, the romance of honor among thieves. | Metonymy ($): Safe Countdown",
      logic: "【精密钟表】：M1（盗贼团队）用极限的 M5（技术与计划）去突破 M4（绝对的物理/数字安防系统）。其核心乐趣在于系统性的时间与空间错位魔术。",
      logicEn: "[Precision Clockwork]: M1 (Heist team) uses extreme M5 (Tech and Plan) to breach M4 (Absolute physical/digital security). The core joy is systemic magic of time and space displacement.",
      patch: {
        mechanics: "基础攻略协议 + [计划复杂度 = 极高; 团队容错率 = 极低]",
        mechanicsEn: "Base_STRATEGY + [Plan_Complexity = Extremely_High; Team_Error_Tolerance = Extremely_Low]",
        aesthetic: "聚焦：快速剪辑的装置组装过程 + 同步对表的分屏画面 + 躲过红外激光的柔韧人体。文本：极快的语速，充满黑话的行动倒数与潇洒的幽默调侃。",
        aestheticEn: "Focus: Fast-Cut_Device_Assembly + Split-Screens_Syncing_Watches + Flexible_Bodies_Dodging_Lasers. Text: Very_Fast_Speech_Operation_Countdowns_Full_Of_Jargon_And_Suave_Humorous_Banter.",
        runtime: "IF (计划执行到最关键一步时触发突然警报) THEN (必定会揭示这其实是A计划失败后的B计划的诱饵环)。",
        runtimeEn: "IF (Sudden_Alarm_Triggers_At_Most_Critical_Step_Of_Plan) THEN (Must_Reveal_This_Is_Actually_The_Decoy_Loop_Of_Plan_B_After_Plan_A's_Failure)."
      }
    },
    { 
      id: "techno", 
      name: "科技/网络悬疑", nameEn: "Techno-Thriller",
      def: "黑客攻击、暗网、监控、高科技犯罪、赛博空间的致命博弈。", 
      defEn: "Hacking, dark web, surveillance, high-tech crimes, deadly games in cyberspace.",
      core: "隐形的数字幽灵 vs 现实世界的物理性破坏。由于看不见敌人而产生的技术恐慌。 | 换喻 ($): 滚动的绿色代码 (Scrolling Green Code)",
      coreEn: "Invisible digital ghost vs physical destruction in real world. Tech panic from unseen enemies. | Metonymy ($): Scrolling Green Code",
      logic: "【数字战争】：主战场从物理空间转移到 M4（数字基础设施）。M1（黑客/工程师）依靠 M5（代码/算力）对抗未知势力的赛博降维打击。",
      logicEn: "[Digital War]: The main battlefield shifts from physical space to M4 (Digital Infrastructure). M1 (Hacker) relies on M5 (Code/Computing Power) against cyber low-dimensional strikes from unknown forces.",
      patch: {
        mechanics: "基础赛博协议 + [虚拟伤害溢出 = 极强; 隐私边界 = 不存在]",
        mechanicsEn: "Base_CYBER + [Virtual_Damage_Spillover = Extreme; Privacy_Boundaries = Nonexistent]",
        aesthetic: "聚焦：极速敲击键盘的残影特写 + 满屏报错弹窗的红光反射在脸上 + 服务器机房的冷光走廊。文本：密集的IT极客术语轰炸与倒计时带来的焦虑喘息。",
        aestheticEn: "Focus: Blurred_Close-Ups_Of_Fast_Typing + Red_Glow_Of_Error_Popups_On_Faces + Cold_Light_Corridors_Of_Server_Farms. Text: Dense_IT_Geek_Jargon_Bombardment_And_Anxious_Breath_From_Countdowns.",
        runtime: "IF (防火墙被成功建立或黑客锁定了IP) THEN (对方必定启动了足以引发城市停电或核弹发射的物理后门)。",
        runtimeEn: "IF (Firewall_Successfully_Built_Or_IP_Locked) THEN (Opponent_Must_Trigger_Physical_Backdoor_Capable_Of_City_Blackout_Or_Nuke_Launch)."
      }
    },
    { 
      id: "hitchcockian", 
      name: "希区柯克式", nameEn: "Hitchcockian",
      def: "悬念大于惊吓、麦高芬(MacGuffin)、偷窥、无辜者蒙冤、逃亡。", 
      defEn: "Suspense > scare, MacGuffin, voyeurism, innocent wrongly accused, runaways.",
      core: "观众知道炸弹在哪但角色不知道的极致焦灼。普通人卷入巨大的阴谋网。 | 换喻 ($): 眩晕的楼梯 (Vertigo Stairs)",
      coreEn: "Extreme anxiety when audience knows where the bomb is but character doesn't. Ordinary people caught in vast webs. | Metonymy ($): Vertigo Stairs",
      logic: "【全知焦虑】：系统（观众视角）拥有 M4（全知信息），看着处于信息劣势的 M1（无辜的主角）一步步走向 M0（死亡陷阱），产生极大的心理拉扯。",
      logicEn: "[Omniscient Anxiety]: System (Audience POV) has M4 (Omniscient Info), watching M1 (Innocent Protagonist) w/ info disadvantage walk toward M0 (Death Trap), creating massive psychological tension.",
      patch: {
        mechanics: "基础悬念协议 + [信息差倒置 = 观众>角色; 麦高芬价值 = 任意但绝对]",
        mechanicsEn: "Base_SUSPENSE + [Info_Gap_Inversion = Audience_>_Character; MacGuffin_Value = Arbitrary_But_Absolute]",
        aesthetic: "聚焦：经典的推拉变焦镜头（眩晕感） + 光影切割出的惊恐眼睛特写 + 极其缓慢逼近的危险源（如门把手转动）。文本：看似日常的对话下掩藏着随时可能爆发的杀机与极度紧绷的弦。",
        aestheticEn: "Focus: Classic_Dolly_Zoom_(Vertigo) + Terrified_Eyes_Cut_By_Light_And_Shadow + Extremely_Slow_Approaching_Danger. Text: Seemingly_Mundane_Dialogue_Hiding_Imminent_Murder_And_Extremely_Taut_Tension.",
        runtime: "IF (主角拿起某个看似不起眼的日常物件) THEN (必须给该物件一个特写，暗示其就是引发杀戮的MacGuffin)。",
        runtimeEn: "IF (Protagonist_Picks_Up_Seemingly_Unremarkable_Everyday_Item) THEN (Must_Give_It_A_Close-Up_Implying_It_Is_The_Murder-Inducing_MacGuffin)."
      }
    }
  ]
};
