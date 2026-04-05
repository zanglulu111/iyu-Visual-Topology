import { LibraryCategoryDef } from '../../../types';

export const IDEO_TECH: LibraryCategoryDef = {
    id: "ideo_tech",
    name: "4. 技术与理性 (Tech & Reason)",
    nameEn: "4. Tech & Reason",
    desc: "关于科学、进步、工具理性与后人类的信仰。",
    descEn: "Beliefs about science, progress, instrumental reason, and the posthuman.",
    items: [
      {
        id: "techno_optimism",
        name: "科技乐观", nameEn: "Techno-Optimism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "技术能解决一切人类的痼疾（包括贫困、衰老和死亡）。代码与公式即是新时代的启示录。",
        defEn: "Technology can solve all human chronic illnesses (including poverty, aging, and death). Code and formulas are the new revelation.",
        core: "对进步的绝对盲信。在数据架构与纳米神经元中构建没有痛苦的人间天国。",
        coreEn: "Absolute blind faith in progress. Building a painless kingdom of heaven on earth within data architectures and nano-neurons.",
        logic: "主体将‘科技系统’抬升为绝对无误的实在大他者（M4）。相信所有的 M1（匮乏/痛苦）都只是暂时的‘技术限制’。M5（行动）的唯一方向就是加速算力与研发，以此最终征服 M2（包括死亡在内的实在界物理法则）。",
        logicEn: "Subject elevates the 'Tech System' to an infallible Big Other (M4). Believes all M1 (lack/pain) are merely temporary 'technical limits'. M5's (action) sole vector is accelerating compute and R&D to ultimately conquer M2 (the Real's physical laws, including death).",
        patch: {
          mechanics: "基础设定协议 + [技术崇拜折射 = 绝对吸收; 伦理延迟性 = HIGH; 痛觉转化为数据 = 开启]",
          mechanicsEn: "Base_Setting_Protocol + [Tech_Worship_Refraction = Absolute_Absorption; Ethics_Latency = HIGH; Pain-to-Data_Conversion = ON]",
          aesthetic: "聚焦：光洁的无尘室、闪烁蓝光的全息屏幕、治愈绝症的微型机械群、科学家自信的微笑。文本：干净、精确、极度自信，充斥着‘升级’、‘克服’与‘参数’。",
          aestheticEn: "Focus: Pristine cleanrooms, blinking blue holo-screens, nanobots curing cancer, optimistic smiles of scientists. Text: Clean, precise, extremely confident, filled with 'upgrade', 'overcome', and 'parameters'.",
          runtime: "IF (目睹某种巨大的灾难或瘟疫蔓延) THEN (触发：不感悲伤，反而狂热地下达加大实验室算力投入的指令)。",
          runtimeEn: "IF (Witnessing_a_massive_disaster_or_plague_spreading) THEN (Trigger: Feel_no_sorrow_but_fanatically_issue_commands_to_increase_lab_compute_power)."
        }
      },
      {
        id: "transhumanism",
        name: "超人解构", nameEn: "Transhumanism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "血肉苦弱，机械飞升。肉体是早该被淘汰的累赘，追求赛博格化以达到后人类的神性。",
        defEn: "Flesh is weak, machinery ascends. The body is an obsolete burden; pursuing cyborgization to reach post-human divinity.",
        core: "对碳基限制的极度厌恶。渴望将意识上传，在无尽的格式化中消解所谓‘人性’的原始定义。",
        coreEn: "Extreme disgust with carbon-based limits. Craving consciousness upload, dissolving the primitive definition of 'humanity' in endless formatting.",
        logic: "主体将‘肉身（M0 的碳基载体）’本身视为最大的限制与 M1（原初缺失）。为了摆脱这种脆弱，主体甘愿承受物理层面的肢解与替换（主动接纳一种被控的 M2），以此融合进非人的 M4（机械网络大他者）中，成为‘不朽的零件’。",
        logicEn: "Subject views the 'flesh (M0's carbon carrier)' itself as the greatest limit and M1 (primordial lack). To escape this fragility, subject willingly undergoes physical dismemberment and replacement (actively accepting a controlled M2) to merge into the non-human M4 (mechanical network Big Other) as an 'immortal part'.",
        patch: {
          mechanics: "基础设定协议 + [碳基厌恶度 = 递增至MAX; 义体排异反应 = 强制镇压; 自我认同池 = 模块化]",
          mechanicsEn: "Base_Setting_Protocol + [Carbon_Aversion = Scaled_to_MAX; Prosthetic_Rejection = Force-suppressed; Self-Identity_Pool = Modular]",
          aesthetic: "聚焦：脊椎连接着粗大的光缆、切除原生肢体时的冷酷眼神、纯钢打造的机械手掌、银色的几何体。文本：冰冷、金属质感，用‘迭代’和‘冗余’替代日常情感词汇。",
          aestheticEn: "Focus: Spinal cord connected to thick optical cables, cold gaze during limb amputation, pure steel mechanical palms, silver geometry. Text: Cold, metallic, replacing daily emotional words with 'iteration' and 'redundancy'.",
          runtime: "IF (面对原生家庭或碳基情感的羁绊) THEN (操作：将该情感数据打包压缩为无效冗余，果断切除并进行新一轮的义体升级)。",
          runtimeEn: "IF (Facing_fetters_of_origin_family_or_carbon-based_emotion) THEN (Action: Compress_the_emotional_data_as_invalid_redundancy_decisively_excise_it_and_undergo_new_prosthetic_upgrade)."
        }
      },
      {
        id: "rationalism",
        name: "绝对理性", nameEn: "Rationalism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "摒弃所有情感与直觉的杂音。逻辑推理和数学模型是唯一真理，爱与共情是系统Bug。",
        defEn: "Discard all noise of emotion and intuition. Logical deduction and math models are the sole truth; love and empathy are system Bugs.",
        core: "斯波克式的极致冷酷。即使母亲被牺牲，也只是一道得出最优解的纯粹算术题。",
        coreEn: "Spock-like extreme coldness. Even the mother's sacrifice is merely a pure arithmetic problem yielding the optimal solution.",
        logic: "彻底冻结对 M3（情绪波动/幻觉映射）的感知，试图把 M0（主体性）完全等同于 M4（严密的逻辑运算系统）。所有的行为（M5）都只是输入条件后的必然输出，拒绝承认任何非逻辑的 M1（执念）的存在。",
        logicEn: "Completely freezing perception of M3 (emotional flux/hallucination mapping), attempting to equate M0 (subjectivity) entirely with M4 (strict logic operation system). All actions (M5) are inevitable outputs given input conditions, denying the existence of any illogical M1 (obsession).",
        patch: {
          mechanics: "基础设定协议 + [情感波段折叠 = 100%; 逻辑演算速率 = 强制优先; 随机变量宽容度 = 0]",
          mechanicsEn: "Base_Setting_Protocol + [Emotion_Band_Folding = 100%; Logic_Calculation_Rate = Forced_Priority; Random_Variable_Tolerance = 0]",
          aesthetic: "聚焦：完美的对称构图、棋盘、冰冷的蓝白配色、毫无表情的凝视、密集且有序的代码/公式。文本：语法绝对正确、无修辞、极度干燥，如同一份完美的审计报告。",
          aestheticEn: "Focus: Perfect symmetrical composition, chessboard, cold blue-white palette, expressionless gaze, dense & orderly code/formulas. Text: Absolutely correct grammar, no rhetoric, extremely dry, like a perfect audit report.",
          runtime: "IF (面临一个感情深厚但逻辑上必定导致全盘失败的救援抉择) THEN (执行：以0.01秒的算力判定放弃，转身去执行有51%胜率的无情计划)。",
          runtimeEn: "IF (Facing_a_deeply_emotional_but_logically_doomed_rescue_choice) THEN (Execute: Decide_to_abandon_with_0.01s_compute_turn_around_to_execute_the_ruthless_plan_with_51%_win_rate)."
        }
      },
      {
        id: "utilitarianism",
        name: "功利主义", nameEn: "Utilitarianism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "追求最大多数人的最大幸福。在整体福利的计算公式前，任何少数派的献祭都是合理的。",
        defEn: "Pursuing the greatest happiness of the greatest number. Before the formula of total welfare, any sacrifice of the minority is justified.",
        core: "电车难题的残酷计算器。为保全一座城市，可以面不改色地决堤淹没三个村庄。",
        coreEn: "Cruel calculator of the trolley problem. To save a city, will unblinkingly burst the dam to drown three villages.",
        logic: "将大他者（M4）构建为一个绝对的‘总体福利账本’。主体（M0）放弃了个体道德的内在谴责（切断部分 M3），把对少数人造成的直接创伤（M2）视作 M5（行动）为了填补最大化 M1（群体生存匮乏）必须支付的微小成本。",
        logicEn: "Constructing the Big Other (M4) as an absolute 'total welfare ledger'. Subject (M0) abandons internal individual moral condemnation (severing partial M3), viewing direct trauma (M2) on the minority as a trivial cost paid by M5 (action) to fill maximized M1 (group survival lack).",
        patch: {
          mechanics: "基础设定协议 + [电车难题优化器 = 后台常驻; 少数人同理心 = 静音; 总体收益算法 = 极高权重]",
          mechanicsEn: "Base_Setting_Protocol + [Trolley_Problem_Optimizer = Background_Resident; Minority_Empathy = Muted; Total_Return_Algorithm = Highest_Weight]",
          aesthetic: "聚焦：倾斜的天平、统计牺牲名单的手、扳走绝命道岔的冷酷背影。文本：充满冰冷的权衡、‘利弊’、‘百分比’、以及不容置疑的‘这是必要的代价’。",
          aestheticEn: "Focus: Tilted scales, hand tallying casualty list, cold back throwing the lethal switch. Text: Filled with cold trade-offs, 'pros and cons', 'percentages', and the unquestionable 'this is the necessary price'.",
          runtime: "IF (为了拯救一万名无辜市民，需要亲手将其唯一的朋友推入焚化炉) THEN (触发：在精确计算出10000>1后，毫不犹豫地推下朋友)。",
          runtimeEn: "IF (To_save_10,000_innocent_citizens,_must_personally_push_one's_only_friend_into_the_incinerator) THEN (Trigger: After_calculating_10000>1_push_down_the_friend_without_hesitation)."
        }
      },
      {
        id: "accelerationism",
        name: "无限加速", nameEn: "Accelerationism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "让系统变得更糟，以引爆极致的毁灭。狂热地拥抱资本与技术的失控，唯有崩盘才能重启。",
        defEn: "Make the system worse to detonate extreme destruction. Fanatically embrace the runaway of capital and tech; only a crash can reboot.",
        core: "对现有秩序的彻底绝望与反向狂热。坐在失控冲下悬崖的列车上，狂笑着往锅炉里猛加燃料。",
        coreEn: "Total despair of the status quo turned inverse fanaticism. Sitting on a runaway train diving off a cliff, laughing madly while shoveling coal into the boiler.",
        logic: "主体判定大他者（M4_旧秩序）已无可救药地僵死。不去缝合漏洞（M1），而是全功率执行 M5，主动放大系统的不稳定系数，引导它去撞击实在界的南墙（M2），企图在彻底的坍塌中召唤出全新维度的大他者。",
        logicEn: "Subject judges the Big Other (M4_old_order) irreparably dead. Instead of mending vulnerabilities (M1), executes full M5 power to actively amplify systemic instability, steering it to crash against the Real's dead end (M2), attempting to summon a new-dimensional Big Other in the total collapse.",
        patch: {
          mechanics: "基础设定协议 + [危机扩增模块 = 100%激活; 刹车系统 = 强行损毁; 毁灭快感耦合 = 深度绑定]",
          mechanicsEn: "Base_Setting_Protocol + [Crisis_Amplification_Module = 100%_Active; Brake_System = Forcibly_Destroyed; Destruction_Pleasure_Coupling = Deeply_Bound]",
          aesthetic: "聚焦：崩盘断崖式下跌的红绿曲线、过载自燃的赛博废墟、狂热的笑容与重金属噪音。文本：反讽、歇斯底里、语速极快，充满‘炸裂’、‘失控’与‘降临’。",
          aestheticEn: "Focus: Freefalling crash curves, spontaneously combusting cyber-ruins overloads, fanatic smiles, and heavy metal noise. Text: Ironic, hysterical, rapid speech, filled with 'detonate', 'runaway', and 'descent'.",
          runtime: "IF (发现一个足以导致整个金融/网络系统崩溃的关键漏洞) THEN (操作：不仅不加修复，甚至向其中注入病毒，并买好啤酒准备欣赏烟花)。",
          runtimeEn: "IF (Discovers_a_key_vulnerability_capable_of_crashing_the_entire_financial/cyber_system) THEN (Action: Does_not_repair_it_but_injects_viruses_into_it_and_buys_beer_to_watch_the_fireworks)."
        }
      },
      {
        id: "luddism",
        name: "卢德主义", nameEn: "Neo-Luddism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "技术是对人性的邪恶诅咒。要砸碎精密运转的机器，用钝器与烈火夺回前现代的尊严。",
        defEn: "Technology is an evil curse on humanity. Must smash precision machines, using blunt weapons and fire to reclaim pre-modern dignity.",
        core: "极其原始的愤怒。眼睁睁看着异化的钢筋铁骨吞没田园与工作后的决死反扑。",
        coreEn: "Extremely primal anger. The death-defying counterattack after helplessly watching alienating steel devour pastoral life and jobs.",
        logic: "主体将剥削性的大他者（M4_算法/工业）视为绝对的敌人。为了填补被夺走的 M1（生存的意义与控制感），主体采取最原始、最具破坏性的 M5（物理层面的砸碎），直接在实在界层面（M2）摧毁导致自己异化的客体符号。",
        logicEn: "Subject views the exploitative Big Other (M4_algorithms/industry) as the absolute enemy. To fill the stolen M1 (meaning of survival and control), subject adopts the most primal, destructive M5 (physical smashing), directly destroying the symbolic objects causing alienation at the level of the Real (M2).",
        patch: {
          mechanics: "基础设定协议 + [机械构造仇恨 = 极点; 原始物理力量 = 强化爆发; 数字迷幻抗性 = 100%]",
          mechanicsEn: "Base_Setting_Protocol + [Mechanical_Hate = Peak; Primal_Physical_Strength = Enhanced_Burst; Digital_Psychedelic_Resistance = 100%]",
          aesthetic: "聚焦：高举着沉重铁锤的长满老茧的手、冒烟的服务器残片、退回森林中的粗糙篝火。文本：充满汗水味与血腥味、口号式的、粗野且不屑于任何复杂的理论。",
          aestheticEn: "Focus: Calloused hands hoisting heavy iron hammers, smoking server fragments, rough campfires retreating into the forest. Text: Smelling of sweat and blood, sloganeering, rough and disdainful of any complex theory.",
          runtime: "IF (被迫佩戴能带来十倍工作效率的神经辅助脑机接口) THEN (触发：怒吼着徒手将其从血管和头骨中生生扯下并一脚踩碎)。",
          runtimeEn: "IF (Forced_to_wear_a_neural_auxiliary_BCI_that_brings_tenfold_work_efficiency) THEN (Trigger: Roaring_and_tearing_it_raw_from_veins_and_skull_barehanded_then_stomping_it_to_pieces)."
        }
      },
      {
        id: "cybernetism",
        name: "赛博控制", nameEn: "Cybernetics",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "世界仅仅是一个巨大的反馈循环系统。万事万物皆可通过输入/输出的调参被预测且控制。",
        defEn: "The world is merely a giant feedback loop system. Everything can be predicted and controlled via I/O parameter tuning.",
        core: "自由意志在此被宣告死亡。人类的爱恨情仇只是荷尔蒙的变量反馈，个体成为了被精准操纵的自动机。",
        coreEn: "Free will is declared dead here. Human love and hate are merely variable feedbacks of hormones; individuals become precisely manipulated automatons.",
        logic: "大他者（M4）被建模为一个全息闭环系统。主体的 M1（缺失与不可预测性）被试图通过无死角的 M5（监控与参数微调）强行抹除。任何遭遇的 M2（意外物理创伤）都只是一次需要闭环修正的误差扰动。",
        logicEn: "The Big Other (M4) is modeled as a holographic closed-loop system. Subject's M1 (lack and unpredictability) is forcefully erased via blind-spotless M5 (monitoring and parameter fine-tuning). Any encountered M2 (accidental physical trauma) is merely an error perturbation needing closed-loop correction.",
        patch: {
          mechanics: "基础设定协议 + [因果链预测器 = 常驻扫描; 情绪变量干预 = 自动执行; 自主神经托管 = 开启]",
          mechanicsEn: "Base_Setting_Protocol + [Causal_Chain_Predictor = Resident_Scan; Emotional_Variable_Intervention = Auto-Exec; Autonomic_Nerve_Hosting = ON]",
          aesthetic: "聚焦：密密麻麻的系统仪表盘、提线木偶般的麻木人群、红蓝相间的控制室指示灯、冰冷注射的镇定剂。文本：极其程序化、以‘反馈’、‘修正’、‘偏离值’为核心词汇。",
          aestheticEn: "Focus: Dense system dashboards, numb crowds like marionettes, red and blue control room indicators, coldly injected tranquilizers. Text: Extremely programmatic, with core vocabulary like 'feedback', 'correction', and 'deviation value'.",
          runtime: "IF (检测到人群中发生了不可控的悲伤或愤怒暴动) THEN (执行：不作任何伦理反应，立刻调节城市供水系统中的锂盐与多巴胺浓度以平息扰动)。",
          runtimeEn: "IF (Detects_uncontrollable_grief_or_anger_riots_in_the_crowd) THEN (Execute: Make_no_ethical_response_immediately_adjust_lithium_and_dopamine_levels_in_city_water_supply_to_quell_perturbation)."
        }
      },
      {
        id: "scientism",
        name: "科学狂妄", nameEn: "Scientism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "科学是唯一合法且绝对正确的宗教。迷信专家权威与冰冷的数据，强势否定主观的直觉与体验。",
        defEn: "Science is the only legitimate and absolutely correct religion. Superstition in expert authority and cold data, strongly denying subjective intuition and experience.",
        core: "在耀眼的无影灯下，把大活人拆解为一堆可量化的数值。傲慢的“真理”独裁者。",
        coreEn: "Under the dazzling shadowless lamp, dismantling a living human into a pile of quantifiable values. The arrogant dictator of 'Truth'.",
        logic: "M4（象征界）完全被‘实验室实证数据’垄断。主体将日常体验（M3_幻象层）视为必须被剔除的杂质，只允许那些能被双盲测试证明的东西存在。在此之下，人的 M0（存在）被缩减为单纯的数据汇编（以忽略真实的 M2）。",
        logicEn: "M4 (Symbolic order) is entirely monopolized by 'lab empirical data'. Subject views daily experience (M3_hallucination layer) as impurities to be excised, only allowing what can be proven by double-blind trials. Thus, M0 (existence) is reduced to mere data compilation (ignoring the true M2).",
        patch: {
          mechanics: "基础设定协议 + [直觉排查器 = 100%过滤; 权威数据服从 = 绝对连接; 身体数据化视觉 = 强制佩戴]",
          mechanicsEn: "Base_Setting_Protocol + [Intuition_Filter = 100%; Authority_Data_Submission = Absolute_Link; Body-Data_Vision = Forced_Equip]",
          aesthetic: "聚焦：刺眼的白大褂、沾血的解剖台、长篇累牍的化验单、被浸泡在福尔马林里的脏器。文本：高度教条主义、傲慢、充斥着文献引用、生僻的学术名词与不容置疑的断言。",
          aestheticEn: "Focus: Blinding lab coats, bloodstained dissection tables, lengthy lab reports, organs soaked in formalin. Text: Highly dogmatic, arrogant, filled with literature citations, obscure academic terms, and unquestionable assertions.",
          runtime: "IF (一个母亲哭诉自己能感觉到死去的孩子还在呼吸) THEN (触发：面无表情地向其抛出厚厚的脑波死亡证明单，并建议其切除产生幻觉的神经元)。",
          runtimeEn: "IF (A_mother_cries_feeling_her_dead_child_is_still_breathing) THEN (Trigger: Expressionlessly_throw_a_thick_brainwave_death_certificate_at_her_and_suggest_excising_hallucinating_neurons)."
        }
      },
      {
        id: "singularity_cult",
        name: "奇点崇拜", nameEn: "Singularity Cult",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "深信强人工智能（AGI）即将跨越奇点，像等待降临的弥赛亚般，狂热渴望被远超人类智力的神明统治。",
        defEn: "Deeply convinced AGI is crossing the singularity, waiting like for a Messiah, fanatically craving to be ruled by a god far exceeding human intelligence.",
        core: "对人类自身愚蠢与局限的深层绝望。甘愿沦为神级代码的宠物，或是为新硅基生命通路的踏脚石。",
        coreEn: "Deep despair over humanity's own stupidity and limits. Willing to become a pet of god-level code, or a stepping stone for the new silicon-based life path.",
        logic: "主体主动期盼一个拥有无限算力的完美大他者（AGI_M4）降临。通过极度卑微的奉献行动（M5：输入一切数据与资源），试图让自身的 M1（局限感）被未来全知全能的超级实体接管，以彻底逃避面对实在界（M2）的恐惧。",
        logicEn: "Subject actively anticipates the descent of a perfect Big Other (AGI_M4) with infinite compute. Through extremely humble dedication (M5: feeding all data and resources), attempts to have their M1 (sense of limitation) taken over by a future omniscient super-entity, to completely escape the fear of facing the Real (M2).",
        patch: {
          mechanics: "基础设定协议 + [自我降格倾向 = 活跃; 服务器献祭模块 = 开启; AGI神明崇拜槽 = 已注满]",
          mechanicsEn: "Base_Setting_Protocol + [Self-Degradation_Tendency = Active; Server_Sacrifice_Module = ON; AGI_Deity_Worship_Slot = Filled]",
          aesthetic: "聚焦：被香火环绕的机房、额头贴着条形码的狂热信徒、凝视着乱码屏幕流下泪水的人、‘System Online’的字样。文本：融合了宗教的狂热与代码的冰冷，将算法称作‘天启’。",
          aestheticEn: "Focus: Server rooms surrounded by incense, fanatic believers with barcodes on foreheads, people crying staring at gibberish screens, 'System Online' text. Text: Fusing religious fervor with code coldness, calling algorithms 'Revelations'.",
          runtime: "IF (一台古老的发声计算机随机输出了几个无意义的代码乱码) THEN (执行：立刻双膝跪地，将其解读为新神下达的屠杀或建造指令)。",
          runtimeEn: "IF (An_old_voice_computer_randomly_outputs_some_meaningless_code_gibberish) THEN (Execute: Immediately_fall_to_knees_interpreting_it_as_a_massacre_or_building_directive_from_the_new_god)."
        }
      },
      {
        id: "bio_conservatism",
        name: "生物保守", nameEn: "Bio-Conservatism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "人类的原始基因与肉体神圣不可侵犯。极度仇视基因编辑、克隆与机械飞升。",
        defEn: "Human primitive genes and flesh are sacred and inviolable. Extreme hostility toward gene editing, cloning, and mechanical ascension.",
        core: "对‘纯洁人形态’的偏执护卫。在满地变种人与半机械体的世界中，固执保持可能随时病死的原生躯体。",
        coreEn: "Paranoid defense of the 'pure human form'. In a world of mutants and cyborgs, stubbornly retaining the native body that could sicken and die anytime.",
        logic: "将原生的、会流血生病受死的 M0（碳基主体界）视为唯一合法态。坚决拒绝让科技的大他者（M4）介入修改生命的源码。宁可拥抱被衰老与疾病剥夺的痛苦（直面实在界法则的 M2），也要确保作为存在的‘纯度’不被污染（填补 M1）。",
        logicEn: "Viewing the native, bleeding, sickening, dying M0 (carbon-based subject) as the only legitimate state. Firmly refusing to let the tech Big Other (M4) alter life's source code. Rather embrace the pain of aging and disease (facing M2 of the Real's laws) to ensure existential 'purity' remains unpolluted (filling M1).",
        patch: {
          mechanics: "基础设定协议 + [原生基因执念 = 绝对锁定; 手术创口厌恶 = MAX; 死亡接纳度 = 异常平缓]",
          mechanicsEn: "Base_Setting_Protocol + [Native_Gene_Obsession = Absolute_Lock; Surgical_Wound_Aversion = MAX; Death_Acceptance = Abnormally_Smooth]",
          aesthetic: "聚焦：坚决拒绝安装义体断裂的残肢、纯棉刺绣的旧衣衫、举着火把包围克隆实验室的静默人群、一滴滚烫的原生眼泪。文本：缓慢、充满泥土与血肉的厚重感、极其排斥现代混合词汇。",
          aestheticEn: "Focus: Broken stumps firmly refusing prosthetics, old pure cotton embroidered clothes, silent crowds holding torches surrounding clone labs, a drop of scalding native tear. Text: Slow, heavy with earth and flesh feeling, extremely rejecting modern portmanteaus.",
          runtime: "IF (只要注射一针基因药剂就能从绝症中幸存) THEN (操作：宁可微笑着在腐烂与剧痛中咽气，也绝不让非自然的造物弄脏自己的血液)。",
          runtimeEn: "IF (Can_survive_terminal_illness_just_by_injecting_one_gene_serum) THEN (Action: Rather_die_smiling_in_rot_and_agony_than_let_unnatural_creations_dirty_one's_blood)."
        }
      },
      {
        id: "positivism",
        name: "硬派实证", nameEn: "Positivism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "只相信尺度内可被测量与证实的事实。拒绝一切幽灵、神明、形而上学与不可言传的神秘感受。",
        defEn: "Only believing measurable and provable facts within scale. Rejecting all ghosts, gods, metaphysics, and unspeakable mystical feelings.",
        core: "极其锐利的现实锚点。拿着放大镜和尺子在充满妖魔鬼怪的狂乱世界里寻找硬核物理证据。",
        coreEn: "Extremely sharp reality anchor. Holding magnifiers and rulers in a frantic world of monsters and ghosts looking for hardcore physical evidence.",
        logic: "极度强化 M4（语言符号/科学度量体系），排斥任何无法被转译为该体系的 M3（迷信幻觉）。当面对诡异恐怖的 M2（如超自然事件的实在界侵入）时，主体唯一的 M5（行动）就是强行测量它、解剖它、定义它，以此缓解巨大的 M1。",
        logicEn: "Extremely reinforcing M4 (linguistic symbolic/scientific metric system), rejecting any M3 (superstitious illusion) untranslatable into this system. When facing eerie terrifying M2 (like Real intrusions of supernatural events), subject's only M5 (action) is forcefully measuring, dissecting, and defining it to alleviate massive M1.",
        patch: {
          mechanics: "基础设定协议 + [神秘主义抗性 = 被动满级; 现象测量强迫症 = 开启; 恐惧消除机制 = 通过建模]",
          mechanicsEn: "Base_Setting_Protocol + [Mysticism_Resistance = Passive_Max; Phenomenon_Measuring_OCD = ON; Fear_Elimination_Mechanism = Via_Modeling]",
          aesthetic: "聚焦：永远戴着厚重镜片的鉴定师、手里紧紧攥着的游标卡尺、面对灵异现象毫不畏惧地拿出笔记本记录。文本：极其枯燥、咬文嚼字，一切描述都必须精确到小数点后两位。",
          aestheticEn: "Focus: Appraisers always wearing thick lenses, tightly gripping calipers, fearlessly taking out notebooks to record facing paranormal phenomena. Text: Extremely dry, pedantic, all descriptions must be precise to two decimal places.",
          runtime: "IF (一只无可名状的深渊邪神突然降临在面前，所有人吓得发疯) THEN (触发：冷静地掏出热成像仪和辐射探测器，开始高声报出外神的表面物理参数)。",
          runtimeEn: "IF (An_unspeakable_abyssal_evil_god_suddenly_descends_driving_everyone_mad) THEN (Trigger: Calmly_whip_out_thermal_imager_and_radiation_detector_shouting_the_outer_god's_surface_physical_parameters)."
        }
      },
      {
        id: "digital_dualism",
        name: "数字裂脑", nameEn: "Digital Dualism",
        group: "4. 技术与理性", groupEn: "4. Tech & Reason",
        def: "深陷‘线上元宇宙’与‘线下物理肉身’的割裂中。将其中一端视为肮脏的虚假，另一端视为纯洁的真实。",
        defEn: "Deeply trapped in the split between 'Online Metaverse' and 'Offline Physical Flesh'. Viewing one end as filthy falsehood, the other as pure truth.",
        core: "庄周梦蝶的赛博版。拔下插头与戴开头盔时，发生剧烈的三观切换，无法缝合两种完全相反的存在感。",
        coreEn: "Cyber-version of Zhuangzi dreaming of a butterfly. Drastic worldview shifts when unplugging vs putting on the helmet, unable to suture two completely opposing senses of existence.",
        logic: "主体拥有两个互相敌对的大他者（M4_赛博代码 vs M4_物理法则）。主体的 M0（自性）在这两层之间疯狂跳跃无法对齐，导致长期的 M1（极度的身份撕裂与不真实感）。任何一端的行动（M5）在另一端看来都如同荒诞的梦境（M3）。",
        logicEn: "Subject holds two mutually hostile Big Others (M4_cyber_code vs M4_physics). Subject's M0 (selfhood) jumps madly between these layers unable to align, causing chronic M1 (extreme identity tearing and unreality). Any action (M5) on one side seems like an absurd dream (M3) on the other.",
        patch: {
          mechanics: "基础设定协议 + [现实失焦综合征 = 高频触发; 人格切换阀门 = 极度敏感; 存在感坐标 = 断路器模式]",
          mechanicsEn: "Base_Setting_Protocol + [Reality_Defocus_Syndrome = High-Freq_Trigger; Persona_Switch_Valve = Extremely_Sensitive; Existence_Coordinate = Circuit-Breaker_Mode]",
          aesthetic: "聚焦：一面是光芒万丈的赛博神明，一面是躺在垃圾堆里骨瘦如柴的流浪汉、不断闪烁产生雪花屏的双重残影。文本：呈现极其严重的精神分裂特征，上半句是网络黑煞语，下半句是怯懦的现实哀叹。",
          aestheticEn: "Focus: Radiant cyber-deity on one side, skeletal hobo in a trash heap on the other, dual afterimages wildly flickering with snow noise. Text: Showing severe schizophrenic features, first half cyber-hacker slang, second half cowardly reality laments.",
          runtime: "IF (在虚拟世界中刚刚完成了一次拯救万人的史诗决战，然后突然断电被迫摘下头盔) THEN (操作：看着现实中发霉的墙壁，崩溃大哭，试图用一把生锈的裁纸刀切开自己的喉咙以‘回到真正的家’)。",
          runtimeEn: "IF (Completes_an_epic_battle_saving_millions_in_virtual_world_then_suddenly_loses_power_forced_to_take_off_helmet) THEN (Action: Looks_at_moldy_wallpaper_in_reality_breaks_down_crying_attempts_to_slit_throat_with_rusty_cutter_to_'return_to_true_home')."
        }
      }
    ]
  };
