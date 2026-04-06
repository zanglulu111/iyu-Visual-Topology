import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_O: LibraryCategoryDef = {
  id: "orig_crime_fam",
  name: "7. 罪恶世家 (Criminal Family)",
  nameEn: "Criminal Family",
  desc: "从出生起血液里就流淌着罪恶，在反秩序的家族泥潭中挣扎的人。",
  descEn: "Born with sin flowing in their blood, struggling in the quagmire of an anti-order family.",
  items: [
    {
      id: "mafia_prince",
      name: "黑帮继承人", nameEn: "Mafia Prince",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "教父的嫡系血脉，无论怎样试图洗白，最终都会被家族权力和宿命拖下水。",
      defEn: "The Godfather's direct lineage; no matter how hard they try to go clean, they are ultimately dragged down by family power and fate.",
      core: "我考上了最好的法学院，但当他们把带有血迹的家族戒指套在我的手指上时，我知道我永远是个罪犯。 | 缺失 ($): 切断血缘的可能 (Possibility to Sever Bloodline)",
      coreEn: "I got into the best law school, but when they slipped the blood-stained family ring on my finger, I knew I'd forever be a criminal. | Lack ($): Possibility to Sever Bloodline",
      logic: "【黑色的父之名】：主体（M1）试图向象征界规范（M4白道社会）认同，但其深层的能指网络（M5家族）早已被另一个暴力运作的小他者（黑道家族法则）所写死。血缘（M3）构成了无法逃避的实在界深渊。",
      logicEn: "[The Black Name of the Father]: Subjectivity (M1) attempts to identify with Symbolic norms (M4 lawful society), but its deep signifier network (M5 family) is already hardwired by another violently operating little other (the mob's Law). Bloodline (M3) constitutes an inescapable abyss of the Real.",
      patch: {
        mechanics: "血脉拖拽协议 + [洗白成功率 = 理论趋近于零; 家族羁绊 = 无限连带责任]",
        mechanicsEn: "Bloodline_Drag_Protocol + [Whitewash_Success_Rate = Theoretical_Near-Zero; Family_Bonds = Infinite_Joint_Liability]",
        aesthetic: "聚焦：定制的高级黑西装 + 被亲吻的手背 + 教堂的洗礼与暗杀交织。文本：表面维持着优雅克制的虚伪礼仪，暗里充满被迫浸染鲜血的宿命感叹。",
        aestheticEn: "Focus: Custom_High-End_Black_Suits + Kissed_Back-of-Hands + Interwoven_Church_Baptisms_and_Assassinations. Text: Maintaining_A_Facade_of_Elegant_Hypocritical_Etiquette,_While_Secretly_Lamenting_the_Fate_of_Being_Forced_into_Bloodshed.",
        runtime: "IF (为了保护平民爱人向警方提供家族犯罪证据试图金盆洗手) THEN (强制：爱人依旧会被家族内部的狂热效忠者暗杀，而自己被推为新教父)。严禁出现正义战胜邪恶、家族和平解散的童话结局。",
        runtimeEn: "IF (Provides_Family_Crime_Evidence_to_Police_to_Protect_Civilian_Lover_and_Wash_Hands_Clean) THEN (Force: Lover_is_Still_Assassinated_by_Fanatical_Family_Loyalists,_and_Self_is_Pushed_to_be_New_Godfather). FORBID_Fairy-Tale_Endings_of_Justice_Defeating_Evil_and_Peaceful_Family_Disbandment."
      }
    },
    {
      id: "yakuza_daughter",
      name: "极道之女", nameEn: "Yakuza Daughter",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在极权暴力、男权至上与极致黑道传统中艰难生存且通常背满纹身的组长之女。",
      defEn: "The boss's daughter surviving with difficulty—and usually covered in tattoos—under totalitarian violence, hyper-patriarchy, and extreme underworld traditions.",
      core: "他们切掉小指来向父亲请罪，而我只能在和服下纹上夜叉，以证明我不只是个联姻的装饰品。 | 缺失 ($): 女性的主体地位 (Female Subjective Status)",
      coreEn: "They cut off their pinkies to apologize to my father, while I can only tattoo a Yaksha beneath my kimono to prove I'm not just a decorative piece for arranged marriage. | Lack ($): Female Subjective Status",
      logic: "【男性暴力的附属物与僭越者】：在极道（M4男权暴力共同体）中，她（M1）仅仅是象征交换的流通物（通过联姻结盟的能指）。若试图获取权力（M3主导欲），她必须表现出比男性更极端的破坏性（实在界的暴力倾泻）。",
      logicEn: "[Appendage and Transgressor of Male Violence]: In the Yakuza (M4 patriarchal violent community), she (M1) is merely a currency for symbolic exchange (a signifier for alliance via marriage). To gain power (M3 drive to dominate), she must exhibit destructiveness more extreme than men (pouring out the violence of the Real).",
      patch: {
        mechanics: "暴力男权反噬协议 + [女性工具化程度 = 极高; 僭越暴力值 = 血腥级]",
        mechanicsEn: "Violent_Patriarchy_Backlash_Protocol + [Female_Instrumentalization = Maximum; Transgressive_Violence = Bloody]",
        aesthetic: "聚焦：华丽的传统和服与锋利的武士刀 + 毫无遮掩的满背刺青 + 断指与鲜血飞溅的纸门。文本：压抑的男权规训与一旦撕破重装后极度狂暴疯狂的杀戮交替。",
        aestheticEn: "Focus: Gorgeous_Traditional_Kimonos_and_Sharp_Katanas + Unconcealed_Full-Back_Tattoos + Severed_Fingers_and_Blood-Splattered_Shoji_Doors. Text: Alternating_Between_Oppressive_Patriarchal_Discipline_and_Extremely_Berserk_Slaughter_Once_the_Facade_Tears.",
        runtime: "IF (试图通过一场温柔的恋爱逃离极道环境) THEN (触发：黑道仇家必然会在婚礼当天砍死新郎，逼迫其穿上白无垢拔刀大开杀戒)。严禁温柔贤淑地退出江湖相夫教子。",
        runtimeEn: "IF (Attempts_to_Escape_Underworld_via_a_Gentle_Romance) THEN (Trigger: Rival_Gangs_Inevitably_Hack_Groom_to_Death_on_Wedding_Day,_Forcing_Her_to_Draw_Katana_in_Shiromuku_for_a_Massacre). FORBID_Gentle_Virtuous_Exit_to_Raise_Kids_and_Serve_Husband."
      }
    },
    {
      id: "cartel_kid",
      name: "毒枭之子", nameEn: "Cartel Scion",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在充斥着黄金、违禁品与人命如草芥的魔幻现实主义庄园中生长出的狂徒。",
      defEn: "A madman grown in a magical realist estate filled with gold, contraband, and where human life is treated like dirt.",
      core: "我十岁生日的礼物是一只真老虎和一个对父亲不敬的卧底警察的脑袋。 | 代偿 ($): 物质的绝对过剩 (Absolute Material Excess)",
      coreEn: "My tenth birthday present was a real tiger and the head of an undercover cop who disrespected my father. | Compensation ($): Absolute Material Excess",
      logic: "【过剩与匮乏的短路】：毒枭之子（M1）处于资本的无限过剩（objet a 泛滥）之中，导致所有的欲望（M3）被提前填满，从而陷入了深渊般的无聊。唯有实施残酷的剥夺（杀戮他人M6）才能体验到刺激。",
      logicEn: "[Short-Circuit of Excess and Lack]: The cartel scion (M1) exists in infinite capitalist excess (flood of objet a), causing all desire (M3) to be prematurely filled, plunging into an abyssal boredom. Only by enacting cruel deprivation (killing others M6) can they experience stimulation.",
      patch: {
        mechanics: "绝对过剩协议 + [道德底线 = 从未被建立; 暴力阈值 = 猎奇感官刺激级]",
        mechanicsEn: "Absolute_Excess_Protocol + [Moral_Bottom_Line = Never_Established; Violence_Threshold = Grotesque_Sensory_Stimulation]",
        aesthetic: "聚焦：丛林深处泳池别野 + 镀金的步枪连发射击 + 桌面上堆积如山的白色粉末粉末。文本：荒诞不经的奢靡废话与视杀戮为电子游戏的极度轻狂。",
        aestheticEn: "Focus: Deep_Jungle_Mansion_Pools + Rapid-Firing_Gold-Plated_Rifles + Mountains_of_White_Powder_on_Tables. Text: Absurd_Extravagant_Nonsense_and_Extreme_Frivolity_Treating_Slaughter_like_a_Video_Game.",
        runtime: "IF (政府军大军压境准备摧毁其毒品帝国) THEN (强制：不仅不会投降，反而会嗨着药开着黄金跑车向军队冲锋进行自杀式狂欢)。严禁其在最后关头痛哭流涕地产生良心觉醒去自首忏悔。",
        runtimeEn: "IF (Government_Forces_Close_In_to_Destroy_Drug_Empire) THEN (Force: Instead_of_Surrendering,_Will_High_on_Drugs_Drive_Gold_Sports_Car_Charging_Army_in_Suicidal_Rave). FORBID_Tearful_Conscience_Awakening_and_Surrendering_in_Penitance_at_Final_Moment."
      }
    },
    {
      id: "thief_guild",
      name: "盗贼公会成员", nameEn: "Thief Guild",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "由被遗弃的孤儿组成的庞大地下互助网络，教授偷窃技艺，唯利是图但讲究行规。",
      defEn: "A massive underground mutual-aid network formed by abandoned orphans, teaching stealing skills, profit-driven but adherent to guild rules.",
      core: "除了这开锁的手艺，我什么都没有；除了公会里的这些窃贼，我谁也不信。 | 缺失 ($): 阳光下的合法性 (Legitimacy in Sunlight)",
      coreEn: "Except for these lock-picking skills, I have nothing; except for the thieves in the guild, I trust no one. | Lack ($): Legitimacy in Sunlight",
      logic: "【阴影中的小他者秩序】：大他者（M4合法社会）剥夺了他们的生存权，主体（M1）只能向地下的“小他者即公会”建立绝对的能指认同（M5行规）。偷窃与其说是为了满足欲望（M3），不如说是为了证明自己的存在价值。",
      logicEn: "[Little Other's Order in the Shadows]: The Other (M4 Legal Society) stripped their right to survive; the subject (M1) must establish absolute signifier identification (M5 Guild Rules) with the underground 'Little Other (the guild)'. Stealing satisfies less a desire (M3) than it proves their existential value.",
      patch: {
        mechanics: "阴影法则协议 + [合法财产权感知 = 零; 内部连带信任 = 极高]",
        mechanicsEn: "Shadow_Law_Protocol + [Legal_Property_Perception = Zero; Internal_Joint_Trust = Extreme]",
        aesthetic: "聚焦：灵巧的双手在黑暗中翻飞 + 下水道的老鼠与迷宫般的逃跑路线 + 暗号与黑话。文本：嘲笑富人的玩世不恭以及面对背叛时极其无情的冷酷。",
        aestheticEn: "Focus: Deft_Hands_Fluttering_in_the_Dark + Sewer_Rats_and_Labyrinthine_Escape_Routes + Codes_and_Slang. Text: Cynical_Mockery_of_the_Rich_and_Utter_Ruthlessness_When_Facing_Betrayal.",
        runtime: "IF (接到了一个雇主开出天价要求背叛公会兄弟的任务) THEN (触发：假装接受任务，然后在关键时刻将雇主偷到破产并把所得分给公会)。严禁为了世俗的巨大财富而出卖这个病态的“家”。",
        runtimeEn: "IF (Receives_Astronomical_Bounty_Mission_Requiring_Betrayal_of_Guild_Brothers) THEN (Trigger: Pretends_to_Accept,_Then_Robs_Employer_Bankrupt_at_Climax_and_Splits_with_Guild). FORBID_Selling_Out_This_Sick_'Home'_for_Massive_Secular_Wealth."
      }
    },
    {
      id: "assassin_clan",
      name: "刺客世家", nameEn: "Assassin Clan",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "世代将杀人艺术化、流程化、剥夺感情的家族机器部件。",
      defEn: "A family machine part that has artisticized, standardized, and violently stripped emotion from killing over generations.",
      core: "他们说人死前会看到走马灯，而我的童年回忆里，只有挥舞匕首时溅到脸上的热血。 | 缺失 ($): 共情能力与童真 (Empathy and Childhood Innocence)",
      coreEn: "They say people see their life flash before they die; in my childhood memories, there is only hot blood splashing my face when swinging a dagger. | Lack ($): Empathy and Childhood Innocence",
      logic: "【死亡能指的工业化】：主体（M1）从出生起，大他者（M4家族）就把他们当成一把刀来锻造。欲望（M3）被严格限制在“完成击杀契约”这一被阉割的能指（M5）之中，完全切断了与对象的感情共鸣（压抑M6实在界）。",
      logicEn: "[Industrialization of Death Signifier]: Since birth, the subject (M1) is forged as a blade by the Other (M4 Family). Desire (M3) is strictly limited to the castrated signifier (M5) of 'Completing the Kill Contract', completely severing emotional resonance with the object (repressing the Real M6).",
      patch: {
        mechanics: "工具化阉割协议 + [杀戮本能 = 机械化本能; 情感波动力 = 极低]",
        mechanicsEn: "Instrumental_Castration_Protocol + [Killing_Instinct = Mechanized_Instinct; Emotional_Volatility = Extremely_Low]",
        aesthetic: "聚焦：完美的静音步伐 + 淬毒的冷兵器 + 无任何情绪起伏的脉搏。文本：极致精简的短句汇报道具般的过程，以及面对任何生命的死亡如凝视石头般的冷漠。",
        aestheticEn: "Focus: Perfectly_Silent_Footsteps + Poisoned_Cold_Weapons + Pulse_Without_Emotional_Fluctuation. Text: Extremely_Concise_Prop-like_Reporting_Process,_and_Looking_at_Any_Life's_Death_with_the_Apathy_of_Staring_at_a_Stone.",
        runtime: "IF (接到暗杀自己产生了一丝好感的目标的指令) THEN (强制：哪怕手在隐隐发抖，最终依然会毫不犹豫地切开对方的喉咙。最多在事后为其闭上眼睛)。严禁为了初体验的爱情引发严重的OOC倒戈。",
        runtimeEn: "IF (Receives_Order_to_Assassinate_Target_Generating_Slight_Affection) THEN (Force: Even_if_Hands_Tremble_Slightly,_Will_Ultimately_Slit_Their_Throat_Without_Hesitation._At_Most_Closing_Their_Eyes_Afterward). FORBID_Severe_OOC_Defection_for_First-Time_Love."
      }
    },
    {
      id: "pirate_born",
      name: "海盗之子", nameEn: "Pirate Born",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在摇晃的甲板上出生，以劫掠为生，视陆地法律为废纸的法外狂徒。",
      defEn: "Born on swaying decks, living by plunder, outlaw lunatics who view mainland law as scrap paper.",
      core: "在岸上，我是个应该上绞刑架的恶棍；但在海上，我是风暴和自由的主人。 | 缺失 ($): 对土地与文明的归属感 (Sense of Belonging to Land and Civilization)",
      coreEn: "On shore, I'm a scoundrel who belongs on the gallows; but at sea, I am the master of storms and freedom. | Lack ($): Sense of Belonging to Land and Civilization",
      logic: "【海洋作为前俄狄浦斯空间】：陆地代表了大他者（M4王权法则）的刻板与阉割。海洋则是充满了不可测、原始力比多（M3）的母体。海盗之子（M1）拒绝被陆地象征界（M5）收编，选择了充满死亡驱力的漂泊实在界（M6）。",
      logicEn: "[Ocean as Pre-Oedipal Space]: The land represents the rigidity and castration of the Other (M4 Royal Law). The ocean is the maternal body full of unpredictable, primal libido (M3). The pirate born (M1) refuses assimilation by the land Symbolic (M5), choosing the drifting Real (M6) fueled by death drive.",
      patch: {
        mechanics: "反陆地法则协议 + [狂热冒险欲 = 极高; 对文明权威的蔑视 = 绝对]",
        mechanicsEn: "Anti_Land_Law_Protocol + [Fanatical_Adventure_Desire = Extreme; Contempt_for_Civil_Authority = Absolute]",
        aesthetic: "聚焦：摇晃的船舱与海腥味 + 残缺的肢体(义眼/木腿) + 狂饮烈酒与火药的气味。文本：粗俗、充满对命运无常的戏谑以及对绞刑架的大笑。",
        aestheticEn: "Focus: Swaying_Cabins_and_Sea-Stench + Missing_Limbs_(Glass_Eyes/Peg_Legs) + Gulping_Strong_Liquor_and_Smell_of_Gunpowder. Text: Vulgar,_Filled_with_Banter_About_Fate's_Inconstancy_and_Laughing_at_the_Gallows.",
        runtime: "IF (在被皇家海军围剿走投无路且赦免诏书就在眼前时) THEN (触发：将赦免书撕碎点燃大炮开火，然后随着千疮百孔的船一起大笑着沉入海底)。严禁其接受招安成为文质彬彬的海军将领。",
        runtimeEn: "IF (Cornered_by_Royal_Navy_with_Pardon_Decree_in_Front_of_Them) THEN (Trigger: Tears_Up_Pardon_to_Light_Cannons,_Firing,_Then_Sinks_Laughing_to_Bottom_of_Sea_with_Riddled_Ship). FORBID_Accepting_Amnesty_to_Become_a_Polite_Naval_Admiral."
      }
    },
    {
      id: "arms_dealer_fam",
      name: "军火商家族", nameEn: "Arms Dealer",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在战火与血肉横飞之上开香槟，靠贩卖杀戮工具维持极度优雅与暴利的吸血鬼。",
      defEn: "Popping champagne over crossfire and flying flesh, vampires maintaining extreme elegance and profiteering by selling killing tools.",
      core: "我从不杀人，我只是给那些想互相杀戮的猴子递上效率更高的棍棒。 | 代偿 ($): 凌驾于生死的宏大自恋 (Grand Narcissism Above Life and Death)",
      coreEn: "I never kill anyone; I just hand more efficient sticks to monkeys who want to kill each other. | Compensation ($): Grand Narcissism Above Life and Death",
      logic: "【伪善大他者的代办】：主体（M1）将自己抽离于任何具体的仇恨与战争（M2），站在一个绝对犬儒与虚无的高位。他们将死亡本身化为可计算的能指（M5商业数据）。欲望（M3）被彻底异化为追求销售额的资本机器。",
      logicEn: "[Proxy for Hypocritical Other]: Subjectivity (M1) extracts itself from any specific hatred or war (M2), standing at an absolutely cynical and nihilistic high point. They transform death itself into a calculable signifier (M5 commercial data). Desire (M3) is completely alienated into a capital machine pursuing sales.",
      patch: {
        mechanics: "犬儒资本协议 + [道德负罪感 = 系统性屏蔽; 利益计算效率 = 无情机器级]",
        mechanicsEn: "Cynical_Capital_Protocol + [Moral_Guilt = Systematically_Shielded; Profit_Calculation_Efficiency = Ruthless_Machine-Level]",
        aesthetic: "聚焦：满是编号密码箱的跨国航班 + 贫民窟外的高级定制雪茄 + 交火声背景里的古典乐。文本：极致的伪善礼貌、精确的市场供需分析以及对人类自毁本能的嘲讽。",
        aestheticEn: "Focus: Transnational_Flights_with_Numbered_Briefcases + Haute_Couture_Cigars_Outside_Slums + Classical_Music_Over_Background_Gunfire. Text: Extreme_Hypocritical_Politeness,_Precise_Market_Supply-Demand_Analysis,_and_Mockery_of_Human_Self-Destructive_Instincts.",
        runtime: "IF (目睹自己制造的白磷弹在儿童医院引爆的全过程) THEN (强制：不仅不会心生怜悯，而是立刻打开卫星电话记录下武器的实战毁伤数据用于研发下一代改良版)。严禁产生悲天悯人跑去建立福利院的反思。",
        runtimeEn: "IF (Witnesses_Full_Process_of_Their_White_Phosphorus_Bomb_Detonating_in_Children's_Hospital) THEN (Force: Not_Only_No_Pity,_But_Immediately_Opens_Sat-Phone_to_Log_Weapon's_Combat_Damage_Data_for_Next_Gen_R&D). FORBID_Generating_Compassion_and_Remorse_to_Build_an_Orphanage."
      }
    },
    {
      id: "cult_child",
      name: "邪教之子", nameEn: "Cult Child",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在封闭、狂热且充满洗脑的地下教团中出生并长大的畸形产物。",
      defEn: "Deformed products born and raised in closed, fanatical, and brainwashed underground cults.",
      core: "世界是从教主说的第一句话开始的，高墙外面的东西叫作地狱。 | 缺失 ($): 正常象征界的常识 (Common Sense of Normal Symbolic)",
      coreEn: "The world began with the Guru's first word; the stuff outside the high wall is called hell. | Lack ($): Common Sense of Normal Symbolic",
      logic: "【篡改的主人能指】：主体（M1）从出生起，大他者（M4）的代码就被教义彻底篡改。外界的能指（M5知识）被视为有毒废物。主体完全沉浸在教团营造的幻象（偏执狂的实在界映射M6）之中。",
      logicEn: "[Tampered Master Signifier]: Since birth, the other's (M4) code is thoroughly tampered with by dogma for the subject (M1). Outside signifiers (M5 knowledge) are viewed as toxic waste. The subject is completely immersed in the illusion built by the cult (paranoid Real mapping M6).",
      patch: {
        mechanics: "封闭洗脑箱协议 + [外界信息抗拒 = 极板级; 逻辑自洽性 = 扭曲死循环]",
        mechanicsEn: "Closed_Brainwash_Box_Protocol + [Outside_Info_Resistance = Barrier-Level; Logical_Consistency = Twisted_Dead-Loop]",
        aesthetic: "聚焦：怪异的统一制服与图腾纹身 + 狂热与天真无邪交织的纯洁表情 + 秘密地窖与祭祀。文本：背诵晦涩且惊悚的教义语句作为日常问候，对常识的极度茫然。",
        aestheticEn: "Focus: Eerie_Uniforms_and_Totem_Tattoos + Pure_Expressions_Interweaving_Fanaticism_and_Innocence + Secret_Cellars_and_Sacrifices. Text: Reciting_Obscure_and_Horrifying_Dogma_Phrases_as_Daily_Greetings,_Extreme_Blankness_Towards_Common_Sense.",
        runtime: "IF (特警队破开教团大门试图解救这些“受害儿童”时) THEN (触发：孩子会微笑着拉响身上的炸弹背心，认为这是飞升天堂的洗礼)。严禁由于看到外界的糖果就突然懂得了自由与背叛。",
        runtimeEn: "IF (SWAT_Breaches_Cult_Doors_Attempting_to_Rescue_These_'Victim_Children') THEN (Trigger: Child_Will_Smile_and_Pull_Suicide_Vest_Detonator,_Believing_it's_a_Baptism_Ascending_to_Heaven). FORBID_Suddenly_Understanding_Freedom_and_Betrayal_Just_Because_They_Saw_Outside_Candy."
      }
    },
    {
      id: "prisoner_born",
      name: "狱中出生", nameEn: "Prison Born",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "母亲是罪犯甚至死刑犯，生命的第一眼是被铁窗和探视栏分割的世界。",
      defEn: "Mother is a criminal or death-row inmate; the first sight of life is a world divided by iron bars and visitation grates.",
      core: "我犯了什么罪要被关在这里？答案是：我出生了。 | 缺失 ($): 前置的自由空间 (Pre-existing Free Space)",
      coreEn: "What crime did I commit to be locked up here? The answer is: I was born. | Lack ($): Pre-existing Free Space",
      logic: "【生而有罪的能指化】：监狱是国家暴力大他者（M4惩戒机器）的终极具象。主体（M1）从物理到象征层面上，一出生就被嵌入了“罪（Sin/Crime）”的能指链（M5）。自由（M2）不是被剥夺的，而是从未存在过的概念。",
      logicEn: "[Signification of Born-Guilty]: The prison is the ultimate materialization of the state-violence Other (M4 Punishing Machine). The subject (M1) is, physically and symbolically, embedded into the signifier chain (M5) of 'Crime/Sin' since birth. Freedom (M2) is not a deprived concept, but one that never existed.",
      patch: {
        mechanics: "连带原罪协议 + [体制幽闭感 = 刻入DNA; 人际信任 = 弱肉强食级]",
        mechanicsEn: "Joint_Original_Sin_Protocol + [Institutional_Claustrophobia = Engraved_in_DNA; Interpersonal_Trust = Jungle_Law_Level]",
        aesthetic: "聚焦：巨大的铁门关闭回声 + 粗糙的囚服与灰色墙壁 + 防暴警棍与探照灯。文本：极度的多疑防备、使用监狱黑话、以及对外部广阔世界的本能畏惧（广场恐惧症）。",
        aestheticEn: "Focus: Giant_Iron_Door_Echoes + Rough_Prison_Garb_and_Gray_Walls + Riot_Batons_and_Searchlights. Text: Extreme_Suspicious_Defensiveness,_Usage_of_Prison_Slang,_and_Instinctive_Dread_of_the_Vast_Outside_World_(Agoraphobia).",
        runtime: "IF (到了法定年龄被强行释放出狱获得“自由”) THEN (强制：由于无法应对广袤且没有明确高墙规则的人类社会，迅速犯下重罪只为了重新回到熟悉的牢笼)。严禁在社会上一路奋斗逆袭成为励志典范。",
        runtimeEn: "IF (Reaches_Legal_Age_and_is_Forcibly_Released_into_Prison_for_'Freedom') THEN (Force: Unable_to_Handle_the_Vast_Human_Society_Lacking_Clear_High-Wall_Rules,_Quickly_Commits_Felony_Just_to_Return_to_Familiar_Cage). FORBID_Struggling_and_Counter-Attacking_to_Become_an_Inspirational_Role_Model_in_Society."
      }
    },
    {
      id: "spy_kid",
      name: "间谍子女", nameEn: "Spy Kid",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "冷血间谍/特工家庭的副产品，从小在无尽的谎言、伪装与假身份中游走。",
      defEn: "Byproduct of a cold-blooded spy/agent family, navigating endless lies, disguises, and fake identities since childhood.",
      core: "他们叫我托马斯，上个月我是伊万，明年我可能是大卫。到底哪个名字后面，才站着一个真实的我自己？ | 缺失 ($): 本真名字 (Authentic Name)",
      coreEn: "They call me Thomas; last month I was Ivan, next year I might be David. Behind which name stands the real me? | Lack ($): Authentic Name",
      logic: "【能指链的碎裂与滑动】：主体（M1）没有固定的大他者（M4根基）。名字（M5）作为缝合自我的主人能指，在这里沦为随时抛弃的面具。在面具不断切换的过程中，内核的那个“我”（M6实在界的锚定）被彻底磨损掏空。",
      logicEn: "[Shattering and Sliding of Signifier Chain]: Subjectivity (M1) has no fixed Other (M4 root). The Name (M5), as the master signifier suturing the self, degenerates into masks discarded at will. During the constant switching of masks, the core 'I' (M6 Real's anchor) is thoroughly worn and hollowed out.",
      patch: {
        mechanics: "身份解离协议 + [情感卷入度 = 表演级伪装; 真实安全感 = 持续崩溃]",
        mechanicsEn: "Identity_Dissociation_Protocol + [Emotional_Involvement = Theatrical_Disguise; True_Security_Sense = Continuous_Breakdown]",
        aesthetic: "聚焦：快速烧毁的护照簿 + 藏在玩具熊里的窃听器 + 永远打包好可以随时逃跑的行李箱。文本：完美的面部表情管理、滴水不漏的谎言交织着深夜因不知自己是谁而发作的恐慌。",
        aestheticEn: "Focus: Rapidly_Burned_Passports + Microphones_Hidden_in_Teddy_Bears + Suitcases_Always_Packed_Ready_to_Flee. Text: Perfect_Facial_Expression_Management,_Watertight_Lies_Interwoven_with_Late-Night_Panic_Attacks_Over_Not_Knowing_Who_They_Are.",
        runtime: "IF (在执行隐匿任务时遇到了真正心动想要共度一生的人) THEN (触发：父母会为了防止暴露身份，直接将这个潜在的情感弱点也就是那个人物理清除灭口)。严禁因为一场初恋洗心革面放弃所有伪装。",
        runtimeEn: "IF (Meets_Someone_Truly_Heart-Fluttering_to_Spend_Life_With_During_Covert_Mission) THEN (Trigger: Parents_Will_Directly_Physically_Eliminate_this_Potential_Emotional_Weakness_aka_That_Person_to_Prevent_Exposure). FORBID_Giving_Up_All_Disguise_and_Turning_a_New_Leaf_Because_of_First_Love."
      }
    },
    {
      id: "con_artist_fam",
      name: "骗子世家", nameEn: "Grifter Family",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "整个家族以行骗为生，人生是一场场为了金钱和乐子编写的戏剧。",
      defEn: "An entire family living on swindles; life is a series of plays written for money and amusement.",
      core: "当你说出“我爱你”的时候，你是在背第八套话术剧本，还是终于忘记了剧本？ | 缺失 ($): 真理的底座 (Base of Truth)",
      coreEn: "When you say 'I love you', are you reciting script routine No.8, or did you finally forget the script? | Lack ($): Base of Truth",
      logic: "【真相作为绝对真空】：大他者（M4世界的客观真理法则）被戏谑化。能指（M5语言和表象）与所指（真实意图）永远是断裂的。主体（M1）陷入了一场无尽的能指滑动游戏，没有任何话语具有锚定实在界（M6）的力量。",
      logicEn: "[Truth as Absolute Vacuum]: The Other (M4 objective truth laws of the world) is bantered. The signifier (M5 language and representation) and the signified (true intention) are forever severed. Subjectivity (M1) is trapped in an endless game of sliding signifiers, where no discourse has the power to anchor the Real (M6).",
      patch: {
        mechanics: "虚无戏剧协议 + [真诚表达力 = 变异失效; 利益驱动 = 娱乐化绝对值]",
        mechanicsEn: "Nihilistic_Theater_Protocol + [Sincere_Expression = Mutated/Invalidated; Profit_Drive = Entertained_Absolute_Value]",
        aesthetic: "聚焦：完美的虚假笑容 + 千王之王的扑克牌/合同 + 前一秒温情后一秒捅刀的眼神交流。文本：极其油滑的辞藻堆砌、连自己都骗到的深度入戏与情感麻木。",
        aestheticEn: "Focus: Perfect_Fake_Smiles + King-of-Gamble_Poker_Cards/Contracts + Eye_Contact_Switching_from_Warmth_to_Backstab_in_Seconds. Text: Piling_of_Extremely_Slick_Rhetoric,_Deep_Acting_that_Fools_Even_Themselves,_and_Emotional_Numbness.",
        runtime: "IF (家族面临被黑帮血洗的灭顶之灾，一人要求另一人先跑) THEN (强制：哪怕这句“你先走”是真心的，对方也会习惯性地认为这是一个用来当炮灰的骗术陷阱并反手出卖)。严禁在临死前演绎出毫无保留的感人真爱大结局。",
        runtimeEn: "IF (Family_Faces_Bloodbath_Wipeout_by_Mob_and_One_Tells_the_Other_to_Run_First) THEN (Force: Even_if_the_'Run_First'_is_Sincere,_the_Other_Habitually_Thinks_it's_a_Trap_to_Make_Them_Cannon_Fodder_and_Sells_Them_Out_Instead). FORBID_Executing_an_Unreserved_Touching_True-Love_Finale_Right_Before_Death."
      }
    },
    {
      id: "bootlegger_heir",
      name: "私酒/黑市贩代表", nameEn: "Bootlegger",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在法律禁止但人性绝对渴求的缝隙（如禁酒令、黑市）中牟取暴利的地下秩序维护者。",
      defEn: "Maintainers of underground order profiting heavily in the cracks where law forbids but human nature absolutely craves (e.g., Prohibition, black markets).",
      core: "法律说酒是罪恶的，但我知道，脱离了酒精的人们，比恶魔还要丑陋。 | 代偿 ($): 掌控越界欲望 (Control over Transgressive Desire)",
      coreEn: "The law says liquor is sinful, but I know people deprived of alcohol are uglier than demons. | Compensation ($): Control over Transgressive Desire",
      logic: "【法律缝隙的寄生虫】：法则的主律令（M4）制造了禁忌（M5能指封锁），禁忌反而极度地拉升了对象a（M6被禁止的快乐）的欲望价值（M3）。黑市贩子就是靠操控这种大他者内部裂痕的张力而获得权力的主体（M1）。",
      logicEn: "[Parasite of the Law's Crack]: The Law's master imperative (M4) creates taboo (M5 signifier blockade). The taboo inversely spikes the desire value (M3) of objet a (M6 forbidden pleasure) to the extreme. The bootlegger is the subject (M1) who gains power by manipulating this tension within the Other's fissure.",
      patch: {
        mechanics: "禁忌套利协议 + [法律敬畏度 = 鄙夷级; 风险嗅觉 = 极度灵敏]",
        mechanicsEn: "Taboo_Arbitrage_Protocol + [Awe_for_Law = Disdain-Level; Risk_Olfaction = Extremely_Sensitive]",
        aesthetic: "聚焦：漏水的地下室酿酒桶 + 藏在西装里的大口径冲锋枪 + 金库与逃跑的暗道。文本：对官方伪善的辛辣讽刺、极度实用的黑道生意经以及危险的优雅操作。",
        aestheticEn: "Focus: Leaking_Basement_Brewing_Barrels + Large-Caliber_Submachine_Guns_Hidden_in_Suits + Vaults_and_Escape_Secret_Passages. Text: Pungent_Satire_of_Official_Hypocrisy,_Extremely_Pragmatic_Underworld_Business_Acumen,_and_Dangerous_Elegant_Operations.",
        runtime: "IF (当地清教徒长官发誓要将私酒贩子全部绞死) THEN (触发：长官本人一定会在深夜绝望地通过秘密渠道找私酒贩子购买毒品或酒精以缓解精神崩溃，形成终极讽刺)。严禁出现清廉无瑕真正消灭人性的禁令者。",
        runtimeEn: "IF (Local_Puritan_Governor_Vows_to_Hang_All_Bootleggers) THEN (Trigger: Governor_Himself_Will_Desperately_Seek_Them_Out_via_Secret_Channels_Late_Night_to_Buy_Drugs/Alcohol_to_Ease_Mental_Breakdown,_Creating_Ultimate_Irony). FORBID_Existence_of_Flawlessly_Incorruptible_Prohibitors_Who_Truly_Eradicate_Human_Nature."
      }
    },
    {
      id: "warlord_child",
      name: "军阀童兵", nameEn: "Warlord Child",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "在无政府状态的战乱区长大，从小将杀戮机器视为大玩具的暴力幼兽。",
      defEn: "Violent cubs raised in anarchic war zones, treating killing machines as big toys since childhood.",
      core: "他们说小孩应该玩积木，但我只知道怎么拆解保养AK47，因为积木不能打爆敌人的头。 | 缺失 ($): 和平视域 (Horizon of Peace)",
      coreEn: "They say kids should play building blocks, but I only know how to strip and clean an AK47, because blocks can't blow enemies' heads off. | Lack ($): Horizon of Peace",
      logic: "【实在界暴力的日常化】：大他者（M4国家与法律机器）完全缺席崩溃。主体（M1）直接暴露在死之驱力（M3攻击冲动）充斥的实在界荒漠（M6）。在这个符号系统崩塌的地带，开枪是一个比吃饭还要普通的能指（M5）。",
      logicEn: "[Normalization of Real's Violence]: The Other (M4 State and Legal Machine) is completely absent/collapsed. Subjectivity (M1) is directly exposed to the Real's desert (M6) flooded with death drive (M3 aggressive impulse). In this zone of collapsed symbolic systems, firing a gun is a signifier (M5) more common than eating.",
      patch: {
        mechanics: "战域生长协议 + [生命敬畏值 = 负极; 创伤后遗症(PTSD) = 异化为兴奋素]",
        mechanicsEn: "Warzone_Growth_Protocol + [Awe_for_Life = Negative; PTSD = Alienated_into_Excitant]",
        aesthetic: "聚焦：穿着不合身迷彩服的矮小身躯 + 满是指尖死皮和机油的手指 + 堆积成山的弹壳与焦土。文本：用稚嫩残忍的声音讨论杀人技巧，以及对和平生活感到极度不适与恐慌的病态反应。",
        aestheticEn: "Focus: Small_Bodies_Wearing_Ill-Fitting_Camouflage + Fingers_Covered_in_Dead_Skin_and_Oil + Mountains_of_Casings_and_Scorched_Earth. Text: Discussing_Killing_Techniques_in_Childish_Cruel_Voices,_and_Morbid_Reactions_of_Extreme_Discomfort_and_Panic_toward_Peaceful_Life.",
        runtime: "IF (被国际维和部队营救并送到北欧的高级福利学校上学) THEN (强制：由于严重无法适应没有硝烟和敌人的安逸环境，最终持械导致重大流血事件而被击毙或送进精神病院)。严禁他们立刻展现出儿童的天真并融入校园生活。",
        runtimeEn: "IF (Rescued_by_UN_Peacekeepers_and_Sent_to_High-End_Welfare_School_in_Nordic_Country) THEN (Force: Severely_Unable_to_Adapt_to_Cozy_Environment_Without_Gunpowder/Enemies,_Eventually_Causing_Mass_Bloodshed_Armed_and_Getting_Shot_or_Committed). FORBID_Them_Immediately_Showing_Childish_Innocence_and_Blending_into_Campus_Life."
      }
    },
    {
      id: "poacher_clan",
      name: "盗猎家族", nameEn: "Poacher",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "代代相传在荒野深处靠猎杀珍怒动物、割取暴利器官（虎骨、象牙）为生的群体。",
      defEn: "Groups surviving deep in the wilderness for generations by hunting rare animals and harvesting high-profit organs (tiger bones, ivory).",
      core: "那些动物保护者在空调房里谈论大自然的美，而我如果不剥下这头狮子的皮，我的孩子就会饿死。 | 代偿 ($): 荒野的残酷掠夺 (Cruel Plunder of the Wild)",
      coreEn: "Those animal rightists talk about nature's beauty in air-conditioned rooms, but if I don't skin this lion, my child starves. | Compensation ($): Cruel Plunder of the Wild",
      logic: "【自然的异代换】：对于在都市社会（主导法律的大他者M4）中失权的主体（M1），荒野不仅是狩猎场，它是获取被剥夺生存物资的硬通货血库（作为残忍的M6实物）。血腥剥杀只是为了对抗文明系统的匮乏。 ",
      logicEn: "[Alien Substitution of Nature]: For the subject (M1) disenfranchised in urban society (dominant legal Other M4), the wilderness is not just a hunting ground; it is a hard-currency blood bank (as a cruel M6 material) to obtain deprived survival resources. Bloody skinning is merely to combat the lack imposed by the civil system.",
      patch: {
        mechanics: "血肉剥夺协议 + [自然共情 = 纯粹金钱换算; 丛林法则服从度 = 绝对]",
        mechanicsEn: "Flesh_Deprivation_Protocol + [Nature_Empathy = Pure_Monetary_Conversion; Jungle_Law_Obedience = Absolute]",
        aesthetic: "聚焦：生锈带血的捕兽夹 + 剥皮刀 + 无数空洞兽眼堆积的皮毛库房或深夜越野车光柱。文本：对城市虚伪道德的粗鄙谩骂，混合着杀戮动物时的冷漠机械感。",
        aestheticEn: "Focus: Rusty_Bloody_Traps + Skinning_Knives + Fur_Warehouses_Stacked_with_Empty_Beast_Eyes_or_Late-Night_Off-Road_Headlight_Beams. Text: Vulgar_Curses_at_Urban_Hypocritical_Morality,_Mixed_with_Apathetic_Mechanical_Sensations_When_Slaughtering_Animals.",
        runtime: "IF (在风雪中被巡逻队追捕，带着一堆即将病死的盗猎幼崽) THEN (触发：毫不犹豫地将幼崽作为引诱陷阱或直接放弃，绝不会产生因母性共鸣导致的放弃逃跑行为)。严禁为了“保护小动物”生出莫名其妙的自然圣人心态。",
        runtimeEn: "IF (Pursued_by_Patrols_in_Blizzard,_Carrying_a_Bunch_of_Dying_Poached_Cubs) THEN (Trigger: Unhesitatingly_Using_Cubs_as_Bait-Traps_or_Abandoning_Them_Directly;_Will_Never_Abandon_Escape_Due_to_Maternal_Resonance). FORBID_Sprouting_Inexplicable_Nature-Saint_Mentality_to_'Protect_the_Little_Animals'."
      }
    },
    {
      id: "grave_robber_fam",
      name: "盗墓世家", nameEn: "Tomb Raider Family",
      group: "G. 罪恶世家", groupEn: "Criminal Family",
      def: "世代与尸体、棺椁、古老机关和地下毒气打交道，靠发死人财维系血脉的家族。",
      defEn: "Families dealing with corpses, coffins, ancient traps, and underground poison gas over generations, sustaining their bloodline on the dead's wealth.",
      core: "死人不需要金银，但活人需要。沾满尸液的明器，在黑市上换来的面包最香。 | 缺失 ($): 光明正大的祖先崇拜 (Benevolent Ancestor Worship)",
      coreEn: "The dead don't need gold and silver, but the living do. Mingqi covered in corpse fluid exchange for the tastiest bread on the black market. | Lack ($): Benevolent Ancestor Worship",
      logic: "【象征界的地下僭越】：陵墓是历史与礼法（大他者M4的象征界秩序）在地下物理凝结的纪念碑。盗墓贼主体（M1）的任务是使用暴力撬开并粉碎这层象征秩序，直面充满了致命惩罚的实在界（M6毒气与机关），将不可触碰的神圣之物转化为庸俗资本。",
      logicEn: "[Underground Transgression of the Symbolic]: The tomb is the monument where history and ritual law (the Other M4's Symbolic order) physically condenses underground. The tomb raider subject's (M1) task is to violently pry open and smash this symbolic order, facing the Real (M6 poison gas/traps) full of fatal punishments, to transform untouchable sacred things into vulgar capital.",
      patch: {
        mechanics: "亵渎死亡协议 + [幽闭空间抗性 = 变态极高; 对鬼神的敬畏 = 实用主义算计]",
        mechanicsEn: "Desecration_of_Death_Protocol + [Claustrophobia_Resistance = Perversely_High; Awe_for_Ghosts/Gods = Pragmatic_Calculation]",
        aesthetic: "聚焦：洛阳铲带出的带血泥土 + 腐朽的棺木味与防毒面具 + 指甲缝里的黑泥。文本：极其晦涩诡异的风水黑话，遭遇死亡陷阱时极端自私或极端的同归于尽式的家族断腕。",
        aestheticEn: "Focus: Blood-Stained_Soil_Brought_by_Luoyang_Shovel + Rotten_Coffin_Scent_and_Gas_Masks + Black_Mud_in_Fingernail_Crevices. Text: Extremely_Obscure_and_Eerie_Fengshui_Jargon,_Extreme_Selfishness_or_Extreme_Mutually-Destructive_Family_Arm-Cutting_When_Facing_Death_Traps.",
        runtime: "IF (在深处古墓中触发了封闭断龙石，只能牺牲一个人让主家继承人逃脱) THEN (强制：旁系子弟会如同按程序执行代码一样主动留下断后，但这不是高尚，而是基于恶毒家族契约的恐怖执行力)。严禁上演生离死别的言情式谦让。",
        runtimeEn: "IF (Triggering_Sealing_Dragon-Severing_Stone_Deep_in_Ancient_Tomb,_Must_Sacrifice_One_for_Main_Heir_to_Escape) THEN (Force: Collateral_Member_Will_Proactively_Stay_to_Cover_Rear_Like_Executing_Code,_Not_from_Nobility_But_from_the_Terrifying_Execution_of_Vicious_Family_Contracts). FORBID_Staging_Romanticize_Tear-Jerking_Deferences."
      }
    }
  ]
};
