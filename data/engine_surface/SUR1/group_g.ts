import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_G: LibraryCategoryDef = {
  id: "type_g",
  name: "犯罪与黑帮 (Crime & Gangster)",
  desc: "地下秩序、帮派火拼、道德堕落与权力的腐蚀。",
  items: [
    { 
      id: "mafia", 
      name: "黑手党/家族", nameEn: "Mafia / Syndicate",
      def: "教父模式、家族传承、西西里潜规则、背叛。 ", 
      defEn: "Godfather model, family legacy, omertà, betrayal.",
      core: "血缘家族 vs 犯罪家族。在罪恶的泥潭中试图维持某种古老的荣誉与秩序。 | 换喻 ($): 亲吻教父的戒指 (Kissing the Don's Ring)",
      coreEn: "Blood family vs crime family. Trying to maintain ancient honor and order in a mire of sin. | Metonymy ($): Kissing the Don's Ring",
      logic: "【血脉契约】：M4（黑手党家族的绝对律法）超越了世俗法律，死死绑定着 M1（家族成员）。M3（背叛/出卖）是唯一能真正摧毁这套封闭系统的因素。",
      logicEn: "[Blood Contract]: M4 (Absolute law of the Mafia family) transcends secular law, tightly binding M1 (Family Member). M3 (Betrayal/Ratting) is the only factor that can truly destroy this closed system.",
      patch: {
        mechanics: "基础帮派协议 + [忠诚度测试 = 极端; 权力更迭 = 必须流血]",
        mechanicsEn: "Base_GANGSTER + [Loyalty_Test = Extreme; Power_Transition = Must_Bleed]",
        aesthetic: "聚焦：逆光的百叶窗阴影 + 威士忌杯上的冰块碰撞 + 教堂洗礼与黑帮暗杀的平行剪辑。文本：极简而充满隐喻的对白，关于“保护”与“生意”的家常便饭般的讨论。",
        aestheticEn: "Focus: Backlit_Blinds_Shadows + Ice_Clinking_In_Whiskey_Glasses + Parallel_Montage_Of_Baptism_And_Assassination. Text: Minimalist_Metaphor-Rich_Dialogue_Casual_Discussions_About_'Protection'_And_'Business'.",
        runtime: "IF (某位老头目开始频繁谈论退休和美好的田园生活) THEN (他必定在下一场戏中遭到最亲密手下的惨烈背叛或暗杀)。",
        runtimeEn: "IF (An_Old_Boss_Starts_Talking_Frequently_About_Retirement_And_Idyllic_Life) THEN (He_Must_Suffer_Brutal_Assassination_Or_Betrayal_By_Closest_Underling_In_Next_Scene)."
      }
    },
    { 
      id: "yakuza", 
      name: "极道/任侠", nameEn: "Yakuza / Triad",
      def: "日式或港式黑帮、纹身、断指、兄弟情义、街头火拼。", 
      defEn: "Japanese or Hong Kong gangs, tattoos, severed fingers, brotherhood, street shootouts.",
      core: "传统的侠义精神（仁义） vs 现代资本主义黑帮的逐利本质。被时代抛弃的边缘人。 | 换喻 ($): 浴血的断指 (Bloodied Severed Finger)",
      coreEn: "Traditional chivalry (Jingi) vs pursuit of profit in modern capitalist gangs. Marginals abandoned by the times. | Metonymy ($): Bloodied Severed Finger",
      logic: "【樱花凋零】：M1（坚守传统任侠的老派极道）夹在 M4（向利益看齐的新派帮派体系）与 M6（现代法律社会的挤压）之间。最终只能走向暴力绚烂的毁灭（M7）。",
      logicEn: "[Wilting Sakura]: M1 (Old-school yakuza sticking to traditional chivalry) is squeezed between M4 (Profit-driven new syndicate system) and M6 (Modern legal society's pressure). It ultimately leads to violent, glorious destruction (M7).",
      patch: {
        mechanics: "基础任侠协议 + [兄弟羁绊 = 宿命级; 存活率 = 极低]",
        mechanicsEn: "Base_NINKYO + [Brotherhood_Bond = Fatal; Survival_Rate = Extremely_Low]",
        aesthetic: "聚焦：背后大面积的般若/樱花刺青 + 倾盆大雨中的武士刀与手枪对决 + 霓虹灯下死不瞑目的横尸。文本：伴随着极道粗口的高度情绪化的嘶吼与对“义理”的悲壮咏叹。",
        aestheticEn: "Focus: Large_Back_Tattoos_Of_Hannya/Sakura + Katana_Vs_Gun_Duels_In_Pouring_Rain + Neon-Lit_Corpses_With_Open_Eyes. Text: Highly_Emotional_Roars_Mixed_With_Yakuza_Slang_And_Tragic_Arias_Of_'Giri'.",
        runtime: "IF (两个曾经同生共死的结拜兄弟走上了不同的道路) THEN (他们最终必定要在废弃仓库或雨夜天台进行一场只有一人能活下来的决斗)。",
        runtimeEn: "IF (Two_Blood_Brothers_Take_Different_Paths) THEN (They_Must_Have_A_One-Survives_Duel_In_Abandoned_Warehouse_Or_Rainy_Rooftop_At_The_End)."
      }
    },
    { 
      id: "cartel", 
      name: "毒枭/边境", nameEn: "Cartel / Narco",
      def: "拉美毒枭、极其残酷的暴力、边境墙、腐败。", 
      defEn: "Latin American cartels, extremely brutal violence, border walls, corruption.",
      core: "绝对的暴力恐怖 vs 国家机器的无力。没有道德底线，只有金钱与权力。 | 换喻 ($): 成堆的美钞与白粉 (Mountains of Cash and Cocaine)",
      coreEn: "Absolute violent terror vs impotence of state machines. No moral bottom line, only money and power. | Metonymy ($): Mountains of Cash and Cocaine",
      logic: "【修罗屠场】：M4（毒网系统）是一个吞噬一切的黑洞。任何试图整顿它的 M1（警察/政客），要么被其天量的 M2（利益）腐蚀，要么遭到纯粹的 M0（物理抹杀）。",
      logicEn: "[Slaughterhouse]: M4 (Narco network system) is an all-consuming black hole. Any M1 (Police/Politician) attempting to cleanse it is either corrupted by its massive M2 (Profit) or faces pure M0 (Physical Erasure).",
      patch: {
        mechanics: "基础无政府协议 + [暴力尺度 = 处刑级无限制; 道德系统 = 崩坏]",
        mechanicsEn: "Base_ANARCHY + [Violence_Scale = Execution-Level_Unlimited; Moral_System = Collapsed]",
        aesthetic: "聚焦：烈日下墨西哥荒漠的黄滤镜 + 桥上悬挂的残缺尸体 + 镀金的AK-47与堆成山的美元现金。文本：粗砺的西班牙语咒骂，夹杂着对生死极致冷漠的丛林法则宣言。",
        aestheticEn: "Focus: Yellow_Filter_Over_Mexican_Desert_Under_Blazing_Sun + Mutilated_Corpses_Hanging_From_Bridges + Gold-Plated_AK47s_And_Mountains_Of_USD. Text: Gritty_Spanish_Curses_Mixed_With_Jungle_Law_Declarations_Of_Extreme_Apathy_Force_Life_And_Death.",
        runtime: "IF (某个毒网边缘的小喽啰试图私吞一袋哪怕很小的货) THEN (他及其全家必定会遭到被割去首级的残忍报复式的灭门)。",
        runtimeEn: "IF (A_Low-Level_Thug_Tries_To_Skim_Even_A_Tiny_Bag_Of_Product) THEN (He_And_His_Entire_Family_Must_Be_Brutally_Decapitated_In_A_Retaliatory_Wipeout)."
      }
    },
    { 
      id: "prison_gang", 
      name: "监狱/街头帮派", nameEn: "Prison / Hood Gangs",
      def: "种族隔离、狱帮、底层的互相残杀、逃不出的循环。", 
      defEn: "Racial segregation, prison gangs, bottom-tier slaughter, inescapable cycle.",
      core: "在极端封闭或贫民窟环境中唯一的生存法则就是加入帮派。出生即被诅咒。 | 换喻 ($): 铁网丝与手甲 (Barbed Wire and Knuckledusters)",
      coreEn: "In extreme confinement or slum environments, joining a gang is the only survival rule. Cursed from birth. | Metonymy ($): Barbed Wire and Knuckledusters",
      logic: "【养蛊瓮】：M4（监狱/街区）是高度压缩的社会模型，被 M5（种族/帮派）严格划界。M1（主角）必须通过出卖 M3（人性）来换取 M0（生存）。",
      logicEn: "[Gu Vessel]: M4 (Prison/Neighborhood) is a highly compressed social model rigidly divided by M5 (Race/Gang). M1 (Protagonist) must trade M3 (Humanity) to buy M0 (Survival).",
      patch: {
        mechanics: "基础丛林协议 + [派系站队 = 强制; 背叛成本 = 凌迟]",
        mechanicsEn: "Base_JUNGLE + [Faction_Choice = Forced; Betrayal_Cost = Death_By_Thousand_Cuts]",
        aesthetic: "聚焦：潮湿阴沉的牢房栅栏 + 监狱食堂里等级森严的座位分布 + 磨尖的牙刷柄特写。文本：充满黑话的街头俚语，以及被压抑到极致后爆发的野兽般的咆哮。",
        aestheticEn: "Focus: Damp_Gloomy_Cell_Bars + Strictly_Hierarchical_Seating_In_Prison_Cafeteria + Close-Up_Of_Sharpened_Toothbrush_Shivs. Text: Slang-Heavy_Street_Jargon_And_Beast-Like_Roars_Erupting_From_Extreme_Suppression.",
        runtime: "IF (主角为了明哲保身拒绝加入任何一方的帮派斗争) THEN (两头的势力必将他当成第一个要抹杀或献祭的“肉鸡”)。",
        runtimeEn: "IF (Protagonist_Stays_Neutral_To_Protect_Themselves_From_Gang_War) THEN (Both_Sides_Will_Target_Them_As_The_First_Sacrificial_Lamb_To_Be_Slaughtered)."
      }
    },
    { 
      id: "vigilante", 
      name: "私刑/义警", nameEn: "Vigilante",
      def: "体制失效后的个人复仇、替天行道、蝙蝠侠/惩罚者模式。", 
      defEn: "Personal revenge after system failure, delivering justice, Batman/Punisher model.",
      core: "个体代替法律执行正义（私刑）的合法性。屠龙者是否会变成恶龙？ | 换喻 ($): 滴血的蝙蝠镖/制裁者战衣 (Bleeding Batarang / Punisher Suit)",
      coreEn: "The legitimacy of an individual executing justice (vigilantism) in place of the law. Will the dragonslayer become the dragon? | Metonymy ($): Bleeding Batarang / Punisher Suit",
      logic: "【暗夜天平】：由于 M4（法制系统）的腐败或无能，M1（义警）用个人的绝对 M5（暴力制裁）去填补系统漏洞。但这将导致 M1 本身成为一种非法的 M0（恐怖源头）。",
      logicEn: "[Dark Scale]: Because M4 (Legal System) is corrupt or incompetent, M1 (Vigilante) uses absolute personal M5 (Violent Sanction) to plug the gap. But this turns M1 into an illegal M0 (Source of Terror) themselves.",
      patch: {
        mechanics: "基础惩戒协议 + [法律约束力 = 0; 暴力爽感 = 高]",
        mechanicsEn: "Base_PUNISHMENT + [Legal_Constraint = 0; Violence_Catharsis = High]",
        aesthetic: "聚焦：站在滴水滴水兽或高楼边缘俯瞰城市的孤独背影+罪犯在幽暗小巷里绝望的求饶+从罪犯口中逼问情报的残酷手段。文本：关于腐烂体制的深刻绝望以及纯粹的“血债血偿”愤怒宣言。",
        aestheticEn: "Focus: Lonely_Silhouette_Looking_Down_From_Gargoyles_Or_Rooftops + Criminals'_Desperate_Begging_In_Dark_Alleys + Brutal_Interrogation_Tactics. Text: Profound_Despair_Over_Rotten_Systems_And_Pure_Declarations_Of_'Blood_For_Blood'_Anger.",
        runtime: "IF (义警在残杀一个极恶之人时被至亲或警察当场目击) THEN (必定会引发一场关于“私刑是否正义”的极其惨烈的道德与肢体冲突)。",
        runtimeEn: "IF (Vigilante_Is_Caught_Red-Handed_Executing_A_Heinous_Villain_By_A_Loved_One_Or_Cop) THEN (Must_Trigger_A_Tragic_Moral_And_Physical_Clash_Over_Whether_Vigilantism_Is_Justice)."
      }
    },
    { 
      id: "police_corruption", 
      name: "黑警/体制腐败", nameEn: "Bad Lieutenant / Corruption",
      def: "黑白通吃、执法者的堕落、内部审查。", 
      defEn: "Playing both sides, degradation of enforcers, internal affairs.",
      core: "权力的寻租与执法者的绝对腐败。保护者变成了最危险的掠夺者。 | 换喻 ($): 被可卡因污染的警徽 (Badge Tainted with Cocaine)",
      coreEn: "Rent-seeking of power and absolute corruption of law enforcers. Protectors become the most dangerous predators. | Metonymy ($): Badge Tainted with Cocaine",
      logic: "【制服之恶】：M4（警察体制的遮羞布）为 M1（黑警）提供了合法施暴的权力外衣，使其能毫无顾忌地攫取 M2（黑金）。只有更高级的内务部（更高层的系统）能够制衡。 ",
      logicEn: "[Uniform Evil]: M4 (Police Institution's Fig Leaf) gives M1 (Dirty Cop) the cloak of legal violence, allowing reckless seizure of M2 (Black Gold). Only Internal Affairs (A higher system) can check them.",
      patch: {
        mechanics: "基础寻租协议 + [伪装度测试 = 频繁; 道德底线 = 穿透底线]",
        mechanicsEn: "Base_RENT-SEEKING + [Camouflage_Test = Frequent; Moral_Baseline = Pierced_Through]",
        aesthetic: "聚焦：警徽边缘摩擦出的划痕 + 用警车后备箱偷运毒品的特写 + 主角因吸毒或极度焦虑而布满红血丝的双眼。文本：满嘴仁义道德与扫黑除恶，背地里却是最极致的贪婪与肮脏咆哮。",
        aestheticEn: "Focus: Scratches_On_The_Edge_Of_A_Police_Badge + Close-Up_Of_Smuggling_Drugs_In_Cruiser_Trunks + Protagonist's_Bloodshot_Eyes_From_Drugs_Or_Anxiety. Text: Mouth_Full_Of_Justice_And_Anti-Crime_Rhetoric_While_Secretly_Roaring_With_Utter_Greed_And_Filth.",
        runtime: "IF (一个初出茅庐且充满正义感的菜鸟警察被分配给黑警做搭档) THEN (黑警必定要在前三幕内用非常手段拉他下水，否则只能将其灭口)。",
        runtimeEn: "IF (A_Rookie_Cop_Full_Of_Justice_Is_Assigned_To_Partner_With_The_Dirty_Cop) THEN (Dirty_Cop_Must_Use_Extreme_Means_To_Drag_Them_Down_In_First_Three_Acts_Or_Silence_Them)."
      }
    },
    { 
      id: "assassin", 
      name: "杀手/职业人", nameEn: "Hitman / Assassin",
      def: "冷酷的职业杀手、退休后被卷入、规则与打破规则。", 
      defEn: "Cold professional killers, pulled back after retirement, rules and breaking rules.",
      core: "把杀人当成精确的“工作”，却因为一丝残存的人性（如保护小女孩）而打破规则。 | 换喻 ($): 沉甸甸的消音器 (Heavy Silencer)",
      coreEn: "Treating murder as a precise 'job', but breaking rules due to a sliver of remaining humanity (e.g. protecting a girl). | Metonymy ($): Heavy Silencer",
      logic: "【故障钟表】：M1（杀手）原本作为 M4（暗杀机构）的完美零件（M5机制运行），却因为突现的 M3（不可控的情感锚点，如仇恨或救赎）导致系统宕机，从而倒戈对抗整个 M4。",
      logicEn: "[Broken Clockwork]: M1 (Assassin) was a perfect cog in M4 (Assassination Syndicate) running on M5 (Mechanisms). The sudden appearance of M3 (Uncontrollable emotional anchor, like hate or redemption) causes a system crash, turning M1 against M4.",
      patch: {
        mechanics: "基础猎入协议 + [战斗技能 = 满级; 规则约束力 = 在破裂边缘]",
        mechanicsEn: "Base_HITMAN + [Combat_Skills = Maxed; Rule_Constraint = On_Brink_Of_Shattering]",
        aesthetic: "聚焦：慢动作下的弹壳飞溅与潇洒换弹匣 + 定制西服的笔挺线条沾染鲜血 + 杀手独自面对空寂植物或猫的沉默时刻（如《这个杀手不太冷》）。文本：几乎没有废话的极度致命冷静，只在保护目标时显露情绪波澜。",
        aestheticEn: "Focus: Slow-Motion_Shell_Casings_Flying_And_Slick_Reloads + Crisp_Lines_Of_Bespoke_Suits_Stained_With_Blood + Silent_Moments_Of_Assassin_With_Plants_Or_Cats. Text: Almost_No_Nonsense_Extremely_Fatal_Coolness_Only_Showing_Emotion_When_Protecting_The_Target.",
        runtime: "IF (退隐江湖多年的第一杀手被某个不知天高地厚的黑帮大少爷抢了车或杀了狗) THEN (该黑帮老大的整个帝国必定将在接下来的一小时内被杀手孤身屠灭)。",
        runtimeEn: "IF (Retired_Number_One_Assassin_Gets_Car_Stolen_Or_Dog_Killed_By_Arrogant_Mob_Kid) THEN (The_Mob_Boss's_Entire_Empire_Must_Be_Solo-Slaughtered_Within_The_Next_Hour)."
      }
    },
    { 
      id: "buddy_cop", 
      name: "双雄/警匪伙伴", nameEn: "Buddy Cop",
      def: "性格迥异的搭档、插科打诨、共同对抗犯罪。", 
      defEn: "Mismatched partners, banter, teaming up against crime.",
      core: "两个完全不同的体系（大意/随便 vs 严谨/刻板）在对抗第三方时的奇妙化学反应。 | 换喻 ($): 一副手铐拷着的两个人 (Two People Handcuffed Together)",
      coreEn: "Amazing chemistry between two completely different systems (careless vs rigorous) fighting a third party. | Metonymy ($): Two People Handcuffed Together",
      logic: "【镜式咬合】：M1 (A) 和 M1 (B) 互为补充（M5）。通过高频的冲突与磨合达成同步，最终克服 M4（系统性官僚危机）并消灭 M0（终极反派）。",
      logicEn: "[Mirror Interlocking]: M1 (A) and M1 (B) complement each other (M5). Through high-frequency conflict and friction they sync, finally overcoming M4 (Systemic Bureaucracy) and eliminating M0 (Ultimate Villain).",
      patch: {
        mechanics: "基础羁绊协议 + [人物性格对立度 = MAX; 化学反应值 = 破表]",
        mechanicsEn: "Base_BONDING + [Character_Contrast = MAX; Chemistry_Value = Off_The_Charts]",
        aesthetic: "聚焦：两人在监视车里吃着甜甜圈无休止的互怼拌嘴 + 一人疯狂飙车另一人尖叫抓紧扶手 + 绝命关头两把手枪交叉掩护的背影。文本：密集的、极具喜剧色彩与美式脱口秀风格的尖酸嘲讽式对话。",
        aestheticEn: "Focus: Endless_Bickering_While_Eating_Donuts_In_Stakeout_Van + One_Driving_Crazily_While_Other_Screams_Holding_Handle + Back-To-Back_Covering_Fire_In_Driest_Moments. Text: Dense_Highly_Comedic_Stand-Up-Style_Sarcastic_Banter.",
        runtime: "IF (两人在查案过程中陷入绝境并停止了斗嘴) THEN (接下来必定会有一次性命相托的热血拯救，奠定一生的友谊)。",
        runtimeEn: "IF (The_Two_Fall_Into_Desperate_Straits_During_Investigation_And_Stop_Bickering) THEN (There_Must_Be_A_Blood-Pumping_Life-Entrusting_Rescue_Solidifying_Lifelong_Friendship)."
      }
    },
    { 
      id: "true_crime", 
      name: "真实取材/纪实犯罪", nameEn: "True Crime",
      def: "改编自真实案件、连环杀手、世纪大案、庭审实录。", 
      defEn: "Adapted from real cases, serial killers, trial records.",
      core: "现实远比虚构更荒诞与残酷。对真实暴力源头的剥洋葱式追问。 | 换喻 ($): 真实的粗糙卷宗纪实 (Gritty Authentic Case Files)",
      coreEn: "Reality is far more absurd and cruel than fiction. Peeling the onion of the true source of violence. | Metonymy ($): Gritty Authentic Case Files",
      logic: "【现实镜像】：M4（真实发生过的历史案件）不可被篡改其结果。叙事的重心在于向内挖掘导致 M0（极端犯罪）的真实心理 M6 与社会土壤，而非虚构解谜（摒弃M5虚荣）。",
      logicEn: "[Reality Mirror]: M4 (Real historical cases) has outcomes that cannot be altered. Narrative weight lies in digging into the real psychology M6 and social soil leading to M0 (Extreme Crime), rather than fictional puzzles (discarding M5 vanity).",
      patch: {
        mechanics: "基础纪实协议 + [事件可控度 = 完全受制于历史; 情感压抑感 = 极强]",
        mechanicsEn: "Base_DOCUMENTARY + [Event_Control = Totally_Subject_To_History; Emotional_Suppression = Extremely_Strong]",
        aesthetic: "聚焦：晃动写实的手持粗糙影像（如伪纪录片角度） + 真实的庭审原声或档案照片插入 + 冰冷的时间与地点字幕打字机效果。文本：克制、去小说化、甚至稍显干瘪的证人供述与警方笔录复述。",
        aestheticEn: "Focus: Shaky_Realistic_Handheld_Footage_(Mockumentary_Style) + Insertion_Of_Real_Trial_Audio_Or_Archival_Photos + Cold_Time_And_Location_Typewriter_Subtitles. Text: Restrained_De-Fictionalized_Even_Dry_Witness_Testimonies_And_Police_Report_Reiterations.",
        runtime: "IF (片尾出现了打字机音效伴随着最后的黑屏) THEN (必定会有几行交代真实案件后续（往往是凶手仍未伏法或轻判）的令人窒息的字幕)。",
        runtimeEn: "IF (Typewriter_SFX_Plays_With_Final_Black_Screen_At_End) THEN (Must_Be_Suffocating_Text_Explaining_Real_Aftermath_(Often_Killer_Uncaught_Or_Lightly_Sentenced))."
      }
    },
    { 
      id: "con_artist", 
      name: "骗术/千王", nameEn: "Con Artist / Grifter",
      def: "骗局、老千、庞氏骗局、心理操控。 ", 
      defEn: "Scams, grifters, Ponzi schemes, psychological manipulation.",
      core: "利用贪婪来惩罚贪婪。不用暴力，而是用智力和信息差摧毁对手。 | 换喻 ($): 飞旋的背面同花顺 (Spinning Royal Flush Backs)",
      coreEn: "Using greed to punish greed. No violence, destroying opponents with pure intellect and info gaps. | Metonymy ($): Spinning Royal Flush Backs",
      logic: "【镜像套娃】：M1（骗子团队）针对 M4（贪婪目标或严密系统）构建了一套虚幻的 M5（套路机制）。当 M4 以为自己在收割利益时，其实正走向 M7（底裤被骗光的深渊）。",
      logicEn: "[Mirror Matryoshka]: M1 (Con team) builds an illusory M5 (Scam Mechanism) against M4 (Greedy Target or Tight System). When M4 thinks they are harvesting profit, they are walking into M7 (Abyss of losing everything).",
      patch: {
        mechanics: "基础操纵协议 + [谎言完美度 = 要求无缝衔接; 暴力依赖度 = 0]",
        mechanicsEn: "Base_MANIPULATION + [Lie_Perfection = Boundless; Violence_Dependency = 0]",
        aesthetic: "聚焦：指间快速切换的假钞与扑克牌特写 + 极其自信的伪装微笑 + 多视角对同一个骗局过程的反转回放。文本：语速极快的推销话术，用心理学概念对受害者的欲望进行精准打击。",
        aestheticEn: "Focus: Close-Ups_Of_Fake_Cash_And_Playing_Cards_Flipped_Quickly_In_Fingers + Extremely_Confident_Disguised_Smiles + Multi-POV_Reversal_Replays_Of_The_Same_Con. Text: Rapid-Fire_Sales_Pitches_Using_Psychological_Concepts_To_Precisely_Target_Victims'_Desires.",
        runtime: "IF (看似完美骗局在最后时刻被警察包围且主角团队被戴上手铐) THEN (百分之百这是局中局，连假扮警察的都是同伙，目标将在他们被“押走”后才发现自己被彻底洗劫)。",
        runtimeEn: "IF (Seemingly_Perfect_Con_Is_Surrounded_By_Cops_At_Last_Minute_And_Team_Is_Cuffed) THEN (100%_A_Con-Within-A-Con_Cops_Are_Accomplices_Target_Realizes_Ruin_After_They_Are_'Taken_Away')."
      }
    },
    { 
      id: "juvenile", 
      name: "青少年犯罪", nameEn: "Juvenile Delinquency",
      def: "街头混混、无因的反叛、未成年犯、原生家庭创伤。", 
      defEn: "Street punks, rebel without a cause, juvenile offenders, family trauma.",
      core: "青春的迷茫与无处安放的精力，转化为破坏力。社会规训的彻底失败。 | 换喻 ($): 沾血的棒球棍 (Bloodstained Baseball Bat)",
      coreEn: "Youthful confusion and restless energy turned destructive. Total failure of social discipline. | Metonymy ($): Bloodstained Baseball Bat",
      logic: "【狂躁发条】：缺失了 M4（父权/家庭引导）庇护的 M1（边缘少年），只剩下用过剩的荷尔蒙去反抗成人世界的 M5（破坏行为）。这是一场没有目的地的毁灭狂奔。",
      logicEn: "[Manic Clockwork]: M1 (Marginal youth) lacking protection of M4 (Patriarchy/Family guidance) only has excess hormones to rebel against adult world via M5 (Destructive behavior). A destructive dash with no destination.",
      patch: {
        mechanics: "基础反叛协议 + [行为逻辑性 = 极差且冲动; 后果评估能力 = 0]",
        mechanicsEn: "Base_REBELLION + [Behavior_Logic = Poor_And_Impulsive; Consequence_Assessment_Cap = 0]",
        aesthetic: "聚焦：手持镜头下刺眼的阳光或杂乱的涂鸦天台 + 满脸是血但无所谓的大笑 + 大马力摩托车后座上飞舞的头发。文本：充满脏话的、逻辑混乱却极具原生破坏性情绪的发泄式台词。",
        aestheticEn: "Focus: Glaring_Sunlight_In_Handheld_Shots_Or_Messy_Graffiti_Rooftops + Carefree_Laughter_Despite_Bloodied_Faces + Hair_Flying_On_Back_Of_High-Power_Motorcycles. Text: Swear-Heavy_Logically_Chaotic_But_Viscerally_Destructive_Vent-Style_Lines.",
        runtime: "IF (这群少年在一次失控的恶作剧中不小心真的杀了人或引发了重案) THEN (原本看似牢不可破的“兄弟义气”将在警察介入和成年人的恐惧中迅速土崩瓦解)。",
        runtimeEn: "IF (The_Youths_Accidentally_Kill_Someone_In_An_Out-Of-Control_Prank) THEN (The_Seemingly_Unbreakable_'Brotherhood'_Will_Rapidly_Crumble_Amidst_Police_Intervention_And_Adult_Fear)."
      }
    },
    { 
      id: "cyber_crime", 
      name: "高科技犯罪/暗网", nameEn: "Cyber Crime",
      def: "加密货币窃取、网络诈骗、勒索软件、虚拟世界的实体伤害。", 
      defEn: "Crypto theft, cyber scams, ransomware, real-world harm from virtual realms.",
      core: "看不见的数字暴力对现实生活的毁灭性打击。隐私的彻底丧失。 | 换喻 ($): 发出荧光的深网路由器 (Glowing Deep Web Router)",
      coreEn: "Devastating impacts on real life from invisible digital violence. Total loss of privacy. | Metonymy ($): Glowing Deep Web Router",
      logic: "【幽灵蠕虫】：M1（幽灵黑客）利用 M5（代码漏洞）轻易穿透传统界限，摧毁个人或公司的 M4（数字资产/隐私底裤）。物理防御面临降维打击的绝对无力感。",
      logicEn: "[Phantom Worm]: M1 (Ghost Hacker) uses M5 (Code Vulns) to easily pierce traditional boundaries, destroying M4 (Digital Assets/Privacy) of individuals/corps. Physical defense faces absolute impotence against low-dimensional strikes.",
      patch: {
        mechanics: "基础赛博犯罪协议 + [物理防御免疫率 = 99%; 数据篡改能力 = 神级]",
        mechanicsEn: "Base_CYBER_CRIME + [Physical_Defense_Immunity = 99%; Data_Tampering_Cap = God-Level]",
        aesthetic: "聚焦：全息投影或多屏幕包围下的极管人像 + 电脑摄像头视角的偷窥画面 + 数据进度条在 99% 时卡住的刺眼红色警示框。文本：几乎全是极客暗语交流，用敲击键盘声代替了传统的肢体语言。",
        aestheticEn: "Focus: Hacker_Silhouettes_Surrounded_By_Multi-Screens_Or_Holograms + Voyeuristic_Webcam_POVs + Glaring_Red_Error_Boxes_When_Progress_Bars_Stuck_At_99%. Text: Almost_Exclusively_Geek_Jargon_Using_Typing_Sounds_To_Replace_Traditional_Body_Language.",
        runtime: "IF (探员找到了黑客用来隐藏自己真实IP的最后肉鸡服务器所在地) THEN (当他们踹开门时，发现里面只有一台倒计时的自毁硬盘和满墙的嘲讽动画)。",
        runtimeEn: "IF (Agents_Find_Location_Of_Hacker's_Final_Zombie_Server_Hiding_Real_IP) THEN (When_They_Kick_The_Door_All_They_Find_Is_A_Self-Destructing_Hard_Drive_And_A_Wall_Full_Of_Mocking_Animations)."
      }
    }
  ]
};
