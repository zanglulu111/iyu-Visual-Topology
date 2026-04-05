import { LibraryCategoryDef } from '../../../types';

export const SUR4_GROUP_A: LibraryCategoryDef = {
  id: "soc_authority",
  name: "1. 极权与独裁 (Totalitarian & Dictatorship)",
  nameEn: "Totalitarian & Dictatorship",
  desc: "权力高度集中，个人服从集体，恐惧作为统治工具。M4（大他者阻断）表现为不可僭越的国家机器与物理剥权。",
  defEn: "Concentrated power mapping to absolute Other. M4 (The Big Other) manifests as an untransgressable state apparatus.",
  items: [
    {
      id: "absolute_monarchy",
      name: "绝对君主制",
      nameEn: "Absolute Monarchy",
      def: "朕即国家。君权神授，皇帝的身体就是法律，不可质疑的权威。",
      defEn: "L'État, c'est moi. Emperor's body is the law, an unquestionable authority.",
      core: "【换喻】皇权的任性 vs 臣民的恐惧 (The arbitrary power of the crown vs. the fear of the subjects)",
      coreEn: "【Metonymy】The throne is the ultimate Big Other; the arbitrary power of the crown vs. the fear of the subjects.",
      logic: "【君权神授法则】：M4（大他者阻断）被具象化为一个肉身实体。主体的 M1（缺失）只能通过向这个有缺陷但拥有神权的实体的绝对服从来填补。",
      logicEn: "[Divine Right Override]: M4 is condensed into a flesh entity. M1's hole is masked by absolute subjugation to this flawed but godly entity.",
      patch: {
        mechanics: "基础社会协议 + [法度独裁 = MAX; 个体抗命阈值 = 0]",
        mechanicsEn: "Base_SOCIETY + [Dictatorial_Law = MAX; Insubordination_Threshold = 0]",
        aesthetic: "聚焦：巨大的王座、跪拜的人群、金碧辉煌与阴暗角落的对比、斩首台。文本：神圣感混杂着物理恐怖。",
        aestheticEn: "Focus: Giant Thrones + Kneeling Crowds + Guillotines. Text: Holiness mixed with visceral physical terror.",
        runtime: "IF (质询君父决断) THEN (严禁解释，必须触发：雷霆般的肉体摧毁与家族连坐)。",
        runtimeEn: "IF (Questioning_the_Crown) THEN (FORBID_Explanation, MUST_Trigger: Physical Extermination & Collective Punishment)."
      }
    },
    {
      id: "military_junta",
      name: "军政府",
      nameEn: "Military Junta",
      def: "戒严令常态化。军队掌权，宵禁，街头的坦克，绝对的暴力压制。",
      defEn: "Normalized martial law. Tanks on streets, absolute violence, curfews.",
      core: "【换喻】枪杆子里的秩序 vs 市民生活的凋敝 (Order from the barrel of a gun vs. blighted civil life)",
      coreEn: "【Metonymy】Order built on sheer ballistic threat vs. the crushing of daily existence.",
      logic: "【暴力剥离法则】：M4（大他者）从伪善的法律直接退化为纯粹的动能与热兵器威慑，使得所有的社会纠纷最终由 M6（物理死亡）结算。",
      logicEn: "[Violence Stripping]: M4 regresses from law to sheer kinetic/ballistic deterrence, settling all social disputes via M6 (Death).",
      patch: {
        mechanics: "基础军事协议 + [武力镇压指数 = 1.0; 民用资源占比 = 极低]",
        mechanicsEn: "Base_MILITARY + [Suppression_Index = 1.0; Civilian_Resources = Minimal]",
        aesthetic: "聚焦：墨镜将军、路障、军用卡车、军礼、广播中的进行曲。文本：粗暴的命令与冰冷的金属碰撞声。",
        aestheticEn: "Focus: Sunglass_Generals + Barricades + Marching_Bands. Text: Abrupt commands and cold metal clangs.",
        runtime: "IF (群体集结超过三人) THEN (立刻触发：火力驱散或无理由的宵禁逮捕)。",
        runtimeEn: "IF (Crowd_>_3) THEN (Trigger: Armed Suppression or Curfew Arrests without pretext)."
      }
    },
    {
      id: "police_state",
      name: "警察国家",
      nameEn: "Police State",
      def: "秘密警察，告密文化，每个人都是嫌疑人。为了安全牺牲一切自由。",
      defEn: "Secret police, informant culture. Everyone is a suspect; freedom traded for security.",
      core: "【换喻】无处不在的猜忌 vs 封闭的家庭空间 (Omnipresent paranoia vs. suffocated private sphere)",
      coreEn: "【Metonymy】Paranoia bleeding into everything; the microscopic gaze of the state.",
      logic: "【猜疑网链】：M4 渗透并瓦解了所有私人空间与血缘连结，使得 M1（主体）无法与任何人建立真实的 M3（欲望连结），因为每一个对象都可能是系统的眼睛。",
      logicEn: "[Paranoia Network]: M4 penetrates private spaces, making it impossible for M1 to harbor authentic M3 (Desire) since the object could be the State's eye.",
      patch: {
        mechanics: "基础监控协议 + [信任度衰减 = 极快; 告密奖励倍率 = 高]",
        mechanicsEn: "Base_SURVEILLANCE + [Trust_Decay = Rapid; Informant_Bounty = High]",
        aesthetic: "聚焦：深夜的敲门声、审讯室的灯光、档案袋、无处不在的制服。文本：压低的声音，眼神的闪躲。",
        aestheticEn: "Focus: Midnight knocks + Interrogation lamps + Dossiers. Text: Hushed whispers and averted gazes.",
        runtime: "IF (袒露私人痛苦/情绪) THEN (极大概率触发：被最近亲属/挚友出卖或记录)。",
        runtimeEn: "IF (Revealing_Private_Pains) THEN (High_Probability_Trigger: Betrayal by closest kin/friends)."
      }
    },
    {
      id: "theocracy_radical",
      name: "极端神权",
      nameEn: "Radical Theocracy",
      def: "教法即国法。宗教警察，公开处刑，禁止娱乐，通过恐惧维持圣洁。",
      defEn: "Dogma is law. Religious police, public executions, maintaining 'holiness' through absolute fear.",
      core: "【换喻】人性的欲望 vs 神性的戒律 (Human desire vs. Divine commandment)",
      coreEn: "【Metonymy】The impossible purity of dogma pressing against the inevitability of human bodily desire.",
      logic: "【道义超载】：M4（律令）以“神圣”之名单方面切断了主体 M3（本能欲望）的合法性，任何世俗快感均被定性为罪恶，需经受极其痛苦的 M6（肉体剥夺）来洗赎。",
      logicEn: "[Moral Overload]: M4 delegitimizes M3 (Desire) entirely in the name of the divine, punishing earthly pleasure via M6 (Corporal deprivation).",
      patch: {
        mechanics: "基础宗教协议 + [道德洁癖 = MAX; 异端惩罚 = 物理毁灭]",
        mechanicsEn: "Base_RELIGION + [Moral_Purity = MAX; Heresy_Punishment = Physical_Annihilation]",
        aesthetic: "聚焦：黑袍、石刑、燃烧的书籍、巨大的宗教符号。文本：祈祷声交织着惨叫声的诡异狂热。",
        aestheticEn: "Focus: Black robes + Stonings + Burning books. Text: Creepy fervor interlacing prayers with screams.",
        runtime: "IF (展示任何非教派准许的享乐) THEN (触发：道德审判与公开施刑)。",
        runtimeEn: "IF (Showing_Unsanctioned_Pleasure) THEN (Trigger: Moral Inquisition and Public Punishment)."
      }
    },
    {
      id: "cult_compound",
      name: "邪教公社",
      nameEn: "Cult Compound",
      def: "封闭的小型极权社会。魅力型领袖，洗脑，集体自杀的阴影。",
      defEn: "Enclosed micro-totalitarianism. Charismatic leader, brainwashing, shadow of mass suicide.",
      core: "【换喻】虚假的归属感 vs 剥削与控制 (False belonging vs. Parasitic control)",
      coreEn: "【Metonymy】Eden-like façade masking hell; false belonging compensating for absolute exploitation.",
      logic: "【温水煮蛙法则】：M4（领袖意志）伪装成 M3（终极慰藉）包裹住主体。主体的 M1 完全向领袖上交自由意志，导致 M6 (死亡/剥削) 被内化为一种恩赐。",
      logicEn: "[Boiling Frog Law]: M4 (Leader) masquerades as M3 (Ultimate Solace). M1 surrenders entirely, internalizing M6 (Death/Exploitation) as a blessing.",
      patch: {
        mechanics: "基础社群协议 + [洗脑指数 = 极高; 外部隔绝性 = 全封闭]",
        mechanicsEn: "Base_COMMUNITY + [Brainwash_Index = MAX; External_Insulation = Total]",
        aesthetic: "聚焦：白衣、整齐划一的微笑、铁丝网、领袖的画像、有毒的圣餐。文本：表面甜蜜实则令人作呕的亲昵。",
        aestheticEn: "Focus: White robes + Uniform smiles + Barbed wire + Spiked chalices. Text: Sickly sweet, suffocating intimacy.",
        runtime: "IF (产生离开公社的念头) THEN (必然触发：集体批斗式的“爱之拯救”或暗杀)。",
        runtimeEn: "IF (Ideation_of_Leaving) THEN (Must_Trigger: Collective 'Intervention of Love' or Assassination)."
      }
    },
    {
      id: "surveillance_state",
      name: "全景监控",
      nameEn: "Surveillance State",
      def: "边沁式全景监狱。无处不在的摄像头、信用分与预犯罪系统。隐私即背叛。",
      defEn: "Bentham's Panopticon. Omnipresent cameras, social credit, pre-crime algorithms.",
      core: "【换喻】看不见的观察者与内化的自我审查 (The invisible watcher and the internalized self-censorship)",
      coreEn: "【Metonymy】The gaze of the Big Other internalized into the subject's own psychological matrix.",
      logic: "【目光内化】：M4 的“凝视/Gaze”彻底弥散。系统无需再实施外部惩罚，因为主体（M1）早已预判了算法的判决并主动斩断了 M5（行动可能性）。",
      logicEn: "[Internalized Gaze]: M4 (The Gaze) is fully diffused. M1 anticipates algorithm judgments and amputates own M5 (Action).",
      patch: {
        mechanics: "基础数据协议 + [隐私值 = 0; 行为预测干预 = 先发制人]",
        mechanicsEn: "Base_DATA + [Privacy = 0; Predictive_Intervention = Preemptive]",
        aesthetic: "聚焦：满墙的监视器、人脸识别的红框、无人机、透明的幕墙。文本：冰冷的电子音效与神经质的自我修正。",
        aestheticEn: "Focus: Monitor walls + Red facial tracking boxes + Drones. Text: Cold electronic tones and neurotic self-correction.",
        runtime: "IF (行为特征偏离基准参数) THEN (触发：社会信用分暴跌及系统级的隐性排斥)。",
        runtimeEn: "IF (Behavior_Deviates_From_Baseline) THEN (Trigger: Social Credit Crash and System-wide Shadow Banning)."
      }
    },
    {
      id: "gerontocracy",
      name: "老人政治",
      nameEn: "Gerontocracy",
      def: "统治者全在生理残喘。社会停滞，压抑年轻人的生命力，依靠输血维持秩序。",
      defEn: "Rulers on life support. Social stagnation suppressing youth's vitality, sustained by blood-siphoning.",
      core: "【换喻】腐朽的肉体 vs 新生的渴望 (Rotten, decaying flesh vs. desperate craving for rebirth)",
      coreEn: "【Metonymy】The nation as a giant hospice; the dead clutching the living.",
      logic: "【时空停滞法则】：M4（律令）变成了对“时间与生命力”的吸血狂热。一切年轻的 M5（行动/创新）都会被衰老的系统视为剧毒并强行抽干。",
      logicEn: "[Temporal Stagnation]: M4 becomes a vampiric hunger for 'Time'. Any youthful M5 (Action) is viewed as toxic to the geriatric system and drained.",
      patch: {
        mechanics: "基础衰变协议 + [迭代更新率 = 0; 生命力虹吸 = 极高]",
        mechanicsEn: "Base_DECAY + [Iteration_Rate = 0; Vitality_Siphon = MAX]",
        aesthetic: "聚焦：轮椅与导尿管、防腐剂味、复古但积灰的装饰、年轻侍者的麻木。文本：令人窒息的缓慢动作与沉闷咳嗽声。",
        aestheticEn: "Focus: Wheelchairs/Catheters + Formalin smell + Dusty retro decor. Text: Suffocating slowness and dull coughing.",
        runtime: "IF (出现破坏旧秩序的活力火苗) THEN (必须触发：通过官僚与岁月的双重惯性将其溺死)。",
        runtimeEn: "IF (Sparks_of_Vitality_Threaten_Order) THEN (Must_Trigger: Drowning them through the dual inertia of bureaucracy and age)."
      }
    },
    {
      id: "patriarchy_absolute",
      name: "绝对父权",
      nameEn: "Absolute Patriarchy",
      def: "《使女的故事》。女性作为财产或生育工具，建立在性别等级之上的终极压迫。",
      defEn: "Gilead-like society. Women strictly as property or breeding tools; gendered totalitarianism.",
      core: "【换喻】性别的阶级化与子宫的国有化 (Classification of gender and nationalization of wombs)",
      coreEn: "【Metonymy】Phallocentric Big Other rendering bodies strictly into state apparatus tools.",
      logic: "【生殖工具化】：M4（父权律令）褫夺了一半人口的主体性，强行将 M2（身体遭遇）改造为国家的生产流水线。M5（反抗）首先是夺回身体的使用权。",
      logicEn: "[Reproductive Instrumentalization]: M4 strips subjectivity from half the population, making M2 (Body) a state factory. M5 (Rebellion) is reclaiming the flesh.",
      patch: {
        mechanics: "基础性别协议 + [角色固化 = 绝对; 生育义务约束力 = 致命级]",
        mechanicsEn: "Base_GENDER + [Role_Rigidity = Absolute; Reproductive_Duty = Lethal_Enforcement]",
        aesthetic: "聚焦：遮盖面容的制服、无声的餐桌、家庭暴力的隐秘暗示。文本：极其拘谨的礼仪与背后狂暴的压迫。",
        aestheticEn: "Focus: Face-covering uniforms + Silent dining tables + Suppressed domestic violence. Text: Rigid etiquette masking brutal coercion.",
        runtime: "IF (试图主张个体拥有权或发声) THEN (触发：基于道德、伦常与物理的三重审判体制)。",
        runtimeEn: "IF (Attempt_To_Claim_Autonomy_or_Voice) THEN (Trigger: Triple Trials via Morality, Tradition, and Physical Force)."
      }
    },
    {
      id: "ethnostate",
      name: "种族血统国",
      nameEn: "Ethnostate / Genetic Caste",
      def: "基于血脉、肤色或基因的极其严格等级体系。纯血者为天，混血等为贱民。",
      defEn: "Strict caste system based on blood, DNA, or race. Purebloods rule; mutants/hybrids are untouchable.",
      core: "【换喻】基因层面的傲慢与隔离墙 (Genetic arrogance and the segregation walls)",
      coreEn: "【Metonymy】The segregation algorithm encoded in DNA; cleaning the 'impurities'.",
      logic: "【先天裁决】：M4（基因/血缘法则）决定了一切，任何主体的努力（M5）都无法跨越宿命设定的起跑线。M1 永远被困在“出生之罪”的焦虑中。",
      logicEn: "[Congenital Verdict]: M4 (Genetic Law) pre-determines everything; M5 (Effort) cannot overwrite destiny. M1 is trapped in the 'Sin of Birth'.",
      patch: {
        mechanics: "基础基因协议 + [身份不可篡改性 = 1.0; 跨阶层流动 = 闭锁]",
        mechanicsEn: "Base_GENETICS + [Identity_Immutability = 1.0; Cross-Caste_Mobility = Locked]",
        aesthetic: "聚焦：发光的基因检测仪、消毒室、血统证书、高墙外的贫民窟。文本：医学用语式的冷漠排斥。",
        aestheticEn: "Focus: Glowing DNA Scanners + Disinfection Rooms + Pedigree Papers + Slums outside Walls. Text: Cold, clinical exclusion.",
        runtime: "IF (跨阶层的污染或通婚发生) THEN (必须触发：净化程序的全面清洗与抹杀)。",
        runtimeEn: "IF (Cross-Class_Pollution_or_Marriage_Occurs) THEN (Must_Trigger: Full Cleansing/Erasing Protocol)."
      }
    },
    {
      id: "bureaucracy_hell",
      name: "官僚地狱",
      nameEn: "Bureaucratic Hell",
      def: "没有面孔的暴政。卡夫卡式的城堡。无尽的审批、排队，一切皆流程。",
      defEn: "Kafkaesque tyranny. Faceless, endless approvals, stamp-collecting; nobody is responsible but everyone is trapped.",
      core: "【换喻】系统空转的绝望与责任的消散 (The despair of idling systems and diffusion of responsibility)",
      coreEn: "【Metonymy】The ultimate faceless tyrant; individual life worn down by an infinite loop of paperwork.",
      logic: "【空洞的能指链】：这里没有具体的暴君，M4（官僚系统）是一个巨大的空转黑箱。主体的 M5（行动）在寻找责任人的无尽推诿中被消耗至零。",
      logicEn: "[Empty Signifier Chain]: No specific tyrant here. M4 is an idling black box. M5 crashes searching for the responsible node.",
      patch: {
        mechanics: "基础管理协议 + [流程繁琐度 = 荒谬级; 系统响应速率 = 几近停滞]",
        mechanicsEn: "Base_ADMIN + [Process_Redundancy = Absurd; System_Response = Near_Stagnation]",
        aesthetic: "聚焦：堆积如山的发黄文件、印章的回音、灰暗灯光下的无尽走廊。文本：荒诞无解的公文辞令。",
        aestheticEn: "Focus: Mountains of yellowed files + Echoes of stamps + Endless gray corridors. Text: Absurd, unbreakable official jargon.",
        runtime: "IF (试图加速流程或寻找真正的高层解决问题) THEN (触发：被扔回流程起点的荒诞死结)。",
        runtimeEn: "IF (Attempt_To_Bypass_or_Reach_Management) THEN (Trigger: Absurd Deadlock, thrown back to square one)."
      }
    },
    {
      id: "prison_colony",
      name: "监狱殖民地",
      nameEn: "Prison Colony",
      def: "整个大陆/星球都是犯人流放地，只有野蛮的丛林法则。",
      defEn: "Entire planet/continent is a penal colony. Bare survival and jungle law.",
      core: "【换喻】底线的探底实验 (An experiment probing the absolute bottom line of morality)",
      coreEn: "【Metonymy】The social construct collapsed; violence as the only universal currency.",
      logic: "【退行法则】：M4（国家机器）退居高墙之上，抛弃了内部。墙内的主体退化到前拉康的“镜像阶段（攻击性）”，只有最极端的暴力才能确立存在。",
      logicEn: "[Regression Law]: M4 isolates itself above the wall. Inside, subjects regress to the aggressive Mirror Stage; violence alone proves existence.",
      patch: {
        mechanics: "基础丛林协议 + [外部干预 = 0; 暴力效用值 = 满级]",
        mechanicsEn: "Base_JUNGLE + [External_Intervention = 0; Violence_Utility = MAX]",
        aesthetic: "聚焦：带刺铁丝网、编号服、自制的粗糙武器、以物易物的黑市。文本：极简的求生动作与沉默的对峙。",
        aestheticEn: "Focus: Barbed wire + Uniform numbers + Crude shivs + Barter markets. Text: Minimal survival gestures and silent standoffs.",
        runtime: "IF (展示不符合当前武力的同情心) THEN (不可避免地触发：被即刻掠夺乃至分食)。",
        runtimeEn: "IF (Showing_Compassion_Without_Force_Backing) THEN (Must_Trigger: Immediate plunder or being devoured)."
      }
    },
    {
      id: "puppet_state",
      name: "傀儡政权",
      nameEn: "Puppet State",
      def: "表面独立，实为深层代理人或外国附庸。国家尊严被贩卖。",
      defEn: "Ostensibly independent, practically a vassal. National dignity sold by compradors.",
      core: "【换喻】虚假的王冠与隐秘的牵线手 (The fake crown and the hidden puppeteer's strings)",
      coreEn: "【Metonymy】Absence of actual sovereignty; the ruler is just a glorified slave to an off-screen Master.",
      logic: "【双重他者畸变】：主体的面前有一个伪 M4（傀儡政府），背后有一个真 M4（宗主国）。M5 的反抗由于找错了靶子而显得悲剧而无力。",
      logicEn: "[Dual Other Distortion]: Facing a Fake M4 (Puppet) while a True M4 (Master) lurks offstage. M5's rebellion is tragically misdirected.",
      patch: {
        mechanics: "基础代理协议 + [主权自由度 = 极低; 秘密干预隐蔽性 = 强]",
        mechanicsEn: "Base_PROXY + [Sovereign_Freedom = Very_Low; Secretive_Intervention = Strong]",
        aesthetic: "聚焦：奢华外宾宴会与窗外贫民、签署卖国条约的暗室、不合时宜的外国军队制服。文本：屈辱的伪装。",
        aestheticEn: "Focus: Lavish foreigner banquets vs slums + Dark rooms signing treaties + Out-of-place foreign uniforms. Text: Humiliating facades.",
        runtime: "IF (发生触及底线的民族/自我觉醒) THEN (触发：来自隐藏的“真大他者”的降维打击暗杀)。",
        runtimeEn: "IF (Awakening_Threatening_the_Bottom_Line) THEN (Trigger: Dimensional-strike assassination by the True Big Other)."
      }
    }
  ]
};
