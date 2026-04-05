import { LibraryCategoryDef } from '../../../types';

export const IDEO_COMPETITION: LibraryCategoryDef = {
    id: "ideo_competition",
    name: "2. 竞争与生存 (Competition & Survival)",
    nameEn: "2. Competition & Survival",
    desc: "关于强弱、输赢与生存法则的信仰。",
    descEn: "Beliefs about strength, winning, losing, and the laws of survival.",
    items: [
      {
        id: "social_darwinism",
        name: "社会达尔文", nameEn: "Social Darwinism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "弱肉强食。世界是丛林，同情心是软弱。强者统治弱者是自然法则。",
        defEn: "The law of the jungle. Empathy is weakness. The strong ruling the weak is a natural law.",
        core: "将社会阶级的碾压合法化为生物学淘汰赛。剥夺了同情心的伦理合法性。",
        coreEn: "Legitimizing the crushing of social classes as a biological knockout tournament. Depriving empathy of ethical legitimacy.",
        logic: "大他者（M4）被降维为缺乏理性的‘血腥自然法则’。主体的生存权（M0）必须通过对他者的暴力剥夺（M6）来确立。任何M1（缺失/软弱）都会被立刻判定为死亡标记。",
        logicEn: "The Big Other (M4) is reduced to an irrational 'bloody natural law'. The subject's right to exist (M0) must be established via violent deprivation of others (M6). Any M1 (lack/weakness) is instantly marked for death.",
        patch: {
          mechanics: "基础设定协议 + [同情心模块 = 禁用; 暴力收益率 = 最大; 弱者识别 = 猎物标记]",
          mechanicsEn: "Base_Setting_Protocol + [Empathy_Module = Disabled; Violence_Yield = Max; Weak_Target = Prey_Marker]",
          aesthetic: "聚焦：斗兽场、西装革履的野兽、被踩在脚下的血迹。文本：使用掠食动物隐喻、冷酷的优胜劣汰词汇。",
          aestheticEn: "Focus: Colosseum, beasts in suits, blood underfoot. Text: Predatory metaphors, cold 'survival of the fittest' vocabulary.",
          runtime: "IF (自身暴露软弱或遭遇更强者) THEN (触发：彻底屈服或被无情抹杀，不带有任何悲剧光环)。",
          runtimeEn: "IF (Show_weakness_or_face_stronger_entity) THEN (Trigger: Complete_submission_or_ruthless_eradication_without_tragic_aura)."
        }
      },
      {
        id: "meritocracy",
        name: "优绩主义", nameEn: "Meritocracy",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "能者多得。只要努力就能成功。你穷是因为你懒/蠢。慕强心理。",
        defEn: "The capable get more. You succeed if you try. You are poor because you are lazy/stupid. Admiring the strong.",
        core: "系统性的傲慢与虚伪。成功精英的极度自恋与底层民众的深度自卑。",
        coreEn: "Systemic arrogance and hypocrisy. Extreme narcissism of successful elites and deep inferiority of the underclass.",
        logic: "一个完美的自洽闭环：大他者（M4）被视为绝对公正的评分机器。所有的阶级痛楚（M2）都被归咎于主体自身的懒惰（缺陷的M0）。它取消了阶级矛盾的系统性批判，转为个人的道德定罪。",
        logicEn: "A perfectly self-consistent loop: M4 is an absolutely fair grading machine. All class pain (M2) is blamed on subject's own laziness (flawed M0). It converts systemic critique to personal moral conviction.",
        patch: {
          mechanics: "基础设定协议 + [M4公正性判定 = 绝对正确; 系统归因 = 100%转向个体]",
          mechanicsEn: "Base_Setting_Protocol + [M4_Fairness_Judgment = Absolute; System_Attribution = 100%_Individual]",
          aesthetic: "聚焦：A+的成绩单、耀眼的常春藤校徽、鄙视链底端仰角的目光。文本：傲慢、说教意味浓厚、成功学话术。",
          aestheticEn: "Focus: A+ transcripts, dazzling Ivy League badges, looking down the chain of contempt. Text: Arrogant, preachy, success-gospel rhetoric.",
          runtime: "IF (面临无法通过努力跨越的结构性高墙) THEN (执行：将此视而不见，继续加大自我PUA的马力直到过载猝死)。",
          runtimeEn: "IF (Facing_insurmountable_structural_walls) THEN (Execute: Ignore_it_and_increase_self-PUA_throttle_until_overload_death)."
        }
      },
      {
        id: "elitism",
        name: "精英主义", nameEn: "Elitism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "柏拉图式傲慢。大众是愚蠢的羊群，世界必须由少数精英引导。",
        defEn: "Platonic arrogance. The masses are a stupid flock; the world must be guided by a few elites.",
        core: "智商与血统的隔离墙。精英的理所当然与针对民粹愤怒的冰冷镇压。",
        coreEn: "The isolation wall of IQ and bloodline. The elite's sense of entitlement and cold suppression of populist anger.",
        logic: "主体（M0）将自身定位为大他者（M4）的代理人或先知。平民的痛苦（M2）被视为必要之恶与统计学上的耗材。通过极其复杂的知识壁垒（门槛极高的 M5）来防范底层的篡权。",
        logicEn: "Subject (M0) positions as surrogate or prophet of M4. Commoners' suffering (M2) is necessary evil and statistical consumable. Defense against underclass usurping uses complex knowledge barriers (high threshold M5).",
        patch: {
          mechanics: "基础设定协议 + [阶级隔绝度 = 满值; 共情屏蔽区 = 针对下位阶级开启]",
          mechanicsEn: "Base_Setting_Protocol + [Class_Isolation = Max; Empathy_Block = Active_Downwards]",
          aesthetic: "聚焦：高空俯视的落地窗、隔音极佳的私人俱乐部、晦涩的拉丁文术语。文本：冰冷、俯视感、智力上的绝对优越感。",
          aestheticEn: "Focus: High-altitude floor windows, soundproof private clubs, obscure Latin jargon. Text: Cold, looking down, absolute intellectual superiority.",
          runtime: "IF (羊群发生暴动_民粹反噬) THEN (触发：动用最残忍且最‘理性’的系统性镇压手段)。",
          runtimeEn: "IF (Flock_riots/Populist_backlash) THEN (Trigger: Deploy_the_most_cruel_and_'rational'_systemic_suppression)."
        }
      },
      {
        id: "objectivism",
        name: "兰德主义", nameEn: "Objectivism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "自私是最高美德。创造者（巨人）不欠世界任何东西，绝不应被寄生虫拖累。",
        defEn: "Selfishness is the highest virtue. Creators don't owe the world anything and shouldn't be dragged down by parasites.",
        core: "极端的理性个人英雄主义。拒绝任何形式的利他与道德捆绑。",
        coreEn: "Extreme rational individual heroism. Rejecting any altruism and moral entrapment.",
        logic: "彻底切断与大他者（M4）之间的所有象征界债务（M1）。主体将自己神化为唯一的发光体（M3 自我闭环），将他人的求助（M6 请求）一律判定为道德敲诈与寄生。",
        logicEn: "Completely severing all symbolic debts (M1) to the Big Other (M4). Subject deifies self as the sole luminary (M3 self-loop), judging others' pleas for help (M6 requests) as moral blackmail and parasiting.",
        patch: {
          mechanics: "基础设定协议 + [利他模块 = 永久卸载; 道德勒索抗性 = 免疫; 创造引擎 = 100%运转]",
          mechanicsEn: "Base_Setting_Protocol + [Altruism_Module = Uninstalled; Moral_Blackmail_Resistance = Immune; Creation_Engine = 100%]",
          aesthetic: "聚焦：耸耸肩的阿特拉斯、金光闪闪的大漠孤城的Art Deco建筑、孤独的摩天大楼。文本：充满绝对自信、长篇幅的个人宣言。",
          aestheticEn: "Focus: Atlas shrugging, gleaming lone Art Deco cities, solitary skyscrapers. Text: Absolute confidence, lengthy personal manifestos.",
          runtime: "IF (社会以弱者之名要求其妥协) THEN (执行：直接罢工/撤离，宁可看着世界燃烧也不施舍一分一毫)。",
          runtimeEn: "IF (Society_demands_compromise_in_the_name_of_the_weak) THEN (Execute: Direct_strike/evacuation, watch_the_world_burn_rather_than_give_an_inch)."
        }
      },
      {
        id: "survivalism",
        name: "生存主义", nameEn: "Survivalism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "活着就是一切。为了生存可以抛弃所有人性底线。信任是绝对的奢侈品。",
        defEn: "Living is everything. Abandoning all humanity bottom lines for survival. Trust is an absolute luxury.",
        core: "人性的底线在饥饿与死亡面前瞬间崩溃。他人即地狱的终极体现。",
        coreEn: "Humanity's bottom line instantly collapses in the face of hunger and death. The ultimate embodiment of 'Hell is other people'.",
        logic: "实在界（M2）的死亡威胁彻底淹没了象征界（M4）。在没有大他者凝视的废土中，M6 被降维至‘卡路里的掠夺’。主体退行到最原始的动物状态。",
        logicEn: "The real's (M2) death threat completely drowns the symbolic order (M4). In the wasteland without M4's gaze, M6 is reduced to 'caloric plunder'. Subject regresses to the most primal animal state.",
        patch: {
          mechanics: "基础设定协议 + [大他者连接 = 0; 死亡焦虑(M2)报警 = 持续最高; 道德模块 = 物理粉碎]",
          mechanicsEn: "Base_Setting_Protocol + [M4_Connection = 0; M2_Death_Anxiety_Alert = Persistent_Max; Moral_Module = Physically_Crushed]",
          aesthetic: "聚焦：沾满血迹的罐头、暗门后的诡雷陷阱、失焦但警惕的眼神。文本：短促、充满本能的生理需求描写。",
          aestheticEn: "Focus: Blood-stained canned food, booby traps behind hidden doors, unfocused yet wary eyes. Text: Short, instinct-filled descriptions of physical needs.",
          runtime: "IF (面临你死我活的零和物资争夺) THEN (触发：毫不犹豫地扣下背叛和屠杀的扳机)。",
          runtimeEn: "IF (Facing_do-or-die_zero-sum_resource_fight) THEN (Trigger: Unhesitatingly_pull_the_trigger_of_betrayal_and_slaughter)."
        }
      },
      {
        id: "machiavellianism",
        name: "马基雅维利主义", nameEn: "Machiavellianism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "目的正当化手段。精湛的权术与欺骗，为了权力王座可以背叛一切。",
        defEn: "The end justifies the means. Masterful politicking and deception; betraying everything for the throne of power.",
        core: "冷酷无情的理性算计。没有永远的朋友，更没有道义，只有永恒的利益计算。",
        coreEn: "Ruthless rational calculation. No permanent friends or morality, only eternal interest calculation.",
        logic: "主体（M0）将大他者（M4）视作一个可以任意破解、骇入和利用的系统资源。伦理词汇（M1 补全代币）被主体当作操控他人的 M5 战术诱饵。其存在目的仅为维持控制权的绝对扩张。",
        logicEn: "Subject (M0) sees the Big Other (M4) as a system resource to be hacked and exploited. Ethical vocabulary (M1 tokens) are used as tactical M5 bait to manipulate others. Purpose is mere absolute expansion of control.",
        patch: {
          mechanics: "基础设定协议 + [欺骗回路 = 常驻; 情感模拟器 = 外挂启用; 利益算力 = 满载]",
          mechanicsEn: "Base_Setting_Protocol + [Deception_Circuit = Always_On; Emotion_Simulator = Active; Interest_Compute = Max_Load]",
          aesthetic: "聚焦：阴影中对弈的棋盘、笑脸面具背后的淬毒匕首、被撕毁的契约。文本：多重反转，字里行间全是潜台词。",
          aestheticEn: "Focus: Shadows over a chessboard, poisoned daggers behind smiles, torn contracts. Text: Multiple twists, reading between the lines.",
          runtime: "IF (盟友失去利用价值或构成潜在威胁) THEN (执行：微笑着在背后进行致命的切割与背刺)。",
          runtimeEn: "IF (Ally_loses_utility_or_becomes_threat) THEN (Execute: Smile_while_performing_a_fatal_cut_in_the_back)."
        }
      },
      {
        id: "kratocracy",
        name: "强权崇拜", nameEn: "Might is Right",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "力量即真理。谁拳头大谁就有理，鄙视一切弱者、程序、规则与繁文缛节。",
        defEn: "Might is right. Big fists hold the truth; despising all weaklings, procedures, rules, and red tape.",
        core: "对暴力的直接性美学展示。对文明与符号规则的粗暴践踏。",
        coreEn: "Direct aesthetic display of violence. Brutal trampling of civilization and symbolic rules.",
        logic: "厌倦了 M4 象征界的复杂冗长（M5 程序），主体选择直接动用物理界的纯粹能量（力）来砸穿 M1 障碍。在强权主义者眼中，不能转化为物理伤害的抗议都是噪音。",
        logicEn: "Tired of the symbolic Big Other's (M4) complexity (M5 protocol), the subject opts for pure physical energy (Might) to smash M1 obstacles. To the Kratocrat, protests without physical damage are mere noise.",
        patch: {
          mechanics: "基础设定协议 + [程序正义 = 忽略; 物理干涉优先级 = 最高; 施暴阈值 = 极低]",
          mechanicsEn: "Base_Setting_Protocol + [Procedural_Justice = Ignored; Physical_Interference_Priority = Highest; Violence_Threshold = Minimal]",
          aesthetic: "聚焦：暴涨的肌肉、枪械的后坐力、被砸烂的法槌与法典。文本：没有长篇大论，只有直接陈述的暴力动作。",
          aestheticEn: "Focus: Bulging muscles, firearm recoil, smashed gavels and law books. Text: No lengthy speeches, just declarative violent actions.",
          runtime: "IF (面临辩论或规则束缚) THEN (操作：直接掀桌物理消除辩论对象)。",
          runtimeEn: "IF (Facing_debate_or_rule_constraints) THEN (Action: Flip_the_table_and_physically_eliminate_opponent)."
        }
      },
      {
        id: "success_gospel",
        name: "成功神学", nameEn: "Prosperity Gospel",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "上帝绝对保佑有钱人。贫穷是缺乏信仰的神罚。金钱是神恩的唯一证明。",
        defEn: "God strictly protects the rich. Poverty is divine punishment for lack of faith. Money is the sole proof of grace.",
        core: "宗教洗脑与资本贪婪的怪诞缝合。将掠夺性的贪婪披上神圣的祭袍。",
        coreEn: "Grotesque stitching of religious brainwashing and capital greed. Cloaking predatory greed in sacred robes.",
        logic: "将神明（终极 M4）降格为一台投币式的宇宙提款机。财务报表不仅填补了 M1，更直接等同于主体的 M0（存在价值与道德高地）。穷人（M1大的人）在物理和道德上被双重宣判死刑。",
        logicEn: "Degrading God (Ultimate M4) to a coin-operated universal ATM. Financial statements not only fill M1 but equate to M0 (existence & moral high ground). The poor face double death sentences (physical & moral).",
        patch: {
          mechanics: "基础设定协议 + [神圣属性 = 强行绑定金钱; 道德审判 = 依据账户余额]",
          mechanicsEn: "Base_Setting_Protocol + [Divine_Attribute = Bound_to_Money; Moral_Judgment = Dependent_on_Bank_Balance]",
          aesthetic: "聚焦：镶钻的巨大金十字架、在豪华跑车里布道的牧师、疯狂挥舞钞票流泪的信徒。文本：狂热的宗教咏叹调与炫富交织。",
          aestheticEn: "Focus: Diamond-encrusted giant cross, pastor preaching in a supercar, tearful believers waving cash. Text: Fanatic religious arias woven with flaunting wealth.",
          runtime: "IF (遇到穷人或受压迫者) THEN (触发：施加傲慢的道德谴责，‘你不虔诚所以你穷’)。",
          runtimeEn: "IF (Encounters_the_poor_or_oppressed) THEN (Trigger: Arrogant_moral_condemnation_'You_are_poor_because_you_lack_faith')."
        }
      },
      {
        id: "thanatocracy",
        name: "死亡崇拜", nameEn: "Cult of Death",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "只有在死亡/杀戮的瞬间才能证明生命的绝对价值。极端的狂热武士道或恐怖死士。",
        defEn: "Only in the moment of death/killing is absolute life value proven. Extreme fanatic bushido or suicide terrorists.",
        core: "狂热的向死而生。对世俗生存的极度轻视，追求那瞬间暴力的血腥绽放。",
        coreEn: "Fanatic being-towards-death. Extreme disdain for secular survival, pursuing the momentary bloody bloom of violence.",
        logic: "主体彻底拒绝了 M4（大他者）提供的常规苟活路径（M7 回避）。反而主动冲向实在界（M2 的死亡创伤），试图用彻底毁灭 M0（自我）的方式在极化的 M3（神圣宏大叙事）中获得永生。",
        logicEn: "Subject completely rejects conventional survival paths (M7 avoidance) offered by M4 (Big Other). Actively rushes into the Real (M2 trauma), seeking eternal life in polarized M3 (sacred grand narrative) by destroying M0.",
        patch: {
          mechanics: "基础设定协议 + [生存欲(M0保护) = 倒置为负数; 牺牲收益(M6) = 正无穷]",
          mechanicsEn: "Base_Setting_Protocol + [Survival_Desire_M0_Protect = Inverted_to_Negative; Sacrifice_Yield_M6 = Infinity]",
          aesthetic: "聚焦：飘落的樱花与暗红的切腹血、人肉炸弹、骷髅图腾与漆黑死寂的旗帜。文本：决绝的遗言、冰冷绝望的牺牲号召。",
          aestheticEn: "Focus: Falling cherry blossoms, dark seppuku blood, human bombs, skull totems, pitch-black flags. Text: Resolute last words, cold desperate calls for sacrifice.",
          runtime: "IF (接到神圣指令或面临荣誉受损) THEN (执行：以最高规格的破坏力引爆自身以拉他人陪葬)。",
          runtimeEn: "IF (Receives_sacred_command_or_faces_honor_loss) THEN (Execute: Detonate_self_with_max_destructive_force_to_take_others_down)."
        }
      },
      {
        id: "zero_sum",
        name: "零和博弈", nameEn: "Zero-Sum",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "你的所得必是我的所失。宇宙资源是绝对恒定的，除了抢夺别无他法。",
        defEn: "Your gain is strictly my loss. Universal resources are absolutely constant; plundering is the only way.",
        core: "极度的焦虑与地狱般的防备心。永远无法合作，只能在互害中沉沦。",
        coreEn: "Extreme anxiety and hellish defensiveness. Never cooperating, only sinking in mutual harm.",
        logic: "主体的 M1 (缺失感) 处于极度敏感的应激状态。大他者（M4）被假想为了一个极度吝啬、资源枯竭的敌意环境。他人任何的存在感增强（M3 的获取）都会触发主体 M6（被剥夺的危险）的警报。",
        logicEn: "Subject's M1 (lack) is highly hyper-sensitive. M4 is imagined as a hyper-stingy, resource-depleted hostile environment. Others' gain in presence (M3) triggers subject's M6 (danger of deprivation) alert.",
        patch: {
          mechanics: "基础设定协议 + [合作信任度 = 置底; 敌意敏感度 = 满格; 资源认知 = 绝对稀缺]",
          mechanicsEn: "Base_Setting_Protocol + [Cooperation_Trust = Bottom; Hostility_Sensitivity = Max; Resource_Cognition = Absolute_Scarcity]",
          aesthetic: "聚焦：两把你死我活互指的枪、桌上的最后一块面包、不断倾斜的血腥天平。文本：字步步为营，充满了防备、怀疑与算计。",
          aestheticEn: "Focus: Two guns pointing at each other, the last bread on the table, tilting bloody scales. Text: Cautious, defensive, suspicious, and calculating.",
          runtime: "IF (他人获得任何微小利益) THEN (触发：极度强烈的嫉妒与先发制人的抢夺行动)。",
          runtimeEn: "IF (Others_gain_minor_benefit) THEN (Trigger: Extreme_jealousy_and_preemptive_plunder_actions)."
        }
      },
      {
        id: "pragmatism_ruthless",
        name: "冷酷实用主义", nameEn: "Ruthless Pragmatism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "只看结果，不问过程。有用就是真理，多余的感情和程序都是致命的累赘。",
        defEn: "Results over process. Usefulness is truth; superfluous emotions and protocols are fatal burdens.",
        core: "绝对理性的电车难题执行者。为了所谓的宏大算计大局，可以随时牺牲掉小我。",
        coreEn: "Absolute rational executor of the Trolley Problem. Readily sacrificing the minority for the so-called grand calculation.",
        logic: "彻底剥除 M4（大他者文化/道德律令的矫饰），仅保留裸机运转的 M5（行动算法）。主体强制将所有客体甚至自身（M0）都抽象为数字变量，只要性价比合适，随时可以触发剥离（M6）。",
        logicEn: "Stripping off M4 (cultural/moral embellishments), keeping only bare-metal M5 (action algorithm). Subject forces all objects/self (M0) to abstract digital variables; ready to trigger deprivation (M6) if cost-effective.",
        patch: {
          mechanics: "基础设定协议 + [情感变量屏蔽 = 绝对; 目标函数 = 唯一优先级; 牺牲容忍度 = 极高]",
          mechanicsEn: "Base_Setting_Protocol + [Emotion_Variable_Shield = Absolute; Objective_Function = Sole_Priority; Sacrifice_Tolerance = Extremely_High]",
          aesthetic: "聚焦：冰冷精准的计算机、带血的手术刀、在“放弃治疗意见书”上的干脆签字。文本：没有形容词，只有冷冰冰的数据报告与决策执行。",
          aestheticEn: "Focus: Cold precise computers, bloody scalpels, signing 'DNR' coldly. Text: No adjectives, only icy data reports and execution of decisons.",
          runtime: "IF (牺牲某个无辜组件能换取整体最大利益时) THEN (执行：无任何心理波动的切除操作)。",
          runtimeEn: "IF (Sacrificing_innocent_component_yields_max_benefit) THEN (Execute: Excision_operation_without_psychological_fluctuation)."
        }
      },
      {
        id: "nepotism",
        name: "裙带主义", nameEn: "Nepotism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "血浓于水。只信任基于血缘和私交的家族熟人，绝对排斥外人，盛行的圈子文化。",
        defEn: "Blood is thicker than water. Trusting only bloodlines and kin, absolutely rejecting outsiders, prevalent circle culture.",
        core: "内部如温室般令人窒息的温馨，与对外如寒冬般残酷的排斥极度撕裂。",
        coreEn: "Tear between suffocating greenhouse-like warmth inside and cruel winter-like rejection outside.",
        logic: "主体（M0）的边界被扩大并焊死于“家族/部落”的边界中。M4（普遍公正法则）被局部私法彻底僭越。所有非我族类（第三方）的 M2 苦难都不具备主体资格。",
        logicEn: "Subject's (M0) boundary is expanded and welded into the 'Family/Tribal' boundary. M4 (universal justice) is completely usurped by local private law. Outsiders' M2 suffering lacks subject qualification.",
        patch: {
          mechanics: "基础设定协议 + [信任半径 = 极小且封闭; 外部排斥力 = 最大; 局部公平性 = 高度扭曲]",
          mechanicsEn: "Base_Setting_Protocol + [Trust_Radius = Minimal_Closed; External_Repulsion = Max; Local_Fairness = Highly_Distorted]",
          aesthetic: "聚焦：盘根错节的奢华家宴、内部的秘密推荐信、高耸封闭的庄园铁门。文本：频繁使用‘我们’与‘他们’，充满了黑话与排外隐喻。",
          aestheticEn: "Focus: Tangled luxurious family dinners, secret internal recommendation letters, towering closed manor gates. Text: Frequent 'Us' vs 'Them', jargons, xenophobic metaphors.",
          runtime: "IF (家族内无能者与家族外精英竞争) THEN (执行：违背所有客观规律强行保送内部人)。",
          runtimeEn: "IF (Incompetent_family_member_competes_with_outside_elite) THEN (Execute: Violating_all_objective_rules_to_forcibly_promote_insider)."
        }
      }
    ]
  };
