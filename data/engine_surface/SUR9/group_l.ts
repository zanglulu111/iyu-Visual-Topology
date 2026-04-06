import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_L: LibraryCategoryDef = {
  id: "orig_labor",
  name: "4. 劳工与底层 (Working Class & Poor)",
  nameEn: "Working Class & Poor",
  desc: "出卖体力，处于生存线边缘。粗砺的生命力。",
  descEn: "Selling physical labor, teetering on the edge of survival. Raw, coarse vitality.",
  items: [
    {
      id: "factory_hand",
      name: "蓝领工人", nameEn: "Blue Collar",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "流水线上的操作工，将肉体作为齿轮嵌入大他者的工业机器中日复一日地磨损。",
      defEn: "Assembly-line operators embedding their flesh as gears into the Other's industrial machine, grinding day after day.",
      core: "我的脊椎就是这台机器的传动轴，磨断了再换一根。 | 代偿 ($): 阶级兄弟的情义 (Brotherhood of Class)",
      coreEn: "My spine is the machine's drive shaft; grind it down and replace it. | Compensation ($): Brotherhood of Class",
      logic: "【肉体齿轮化】：主体（M1）被完全异化为生产工具。大他者（M4）是流水线的节拍器与绩效表。其生命的所有遭遇（M2）都受限于工厂围墙内的物理空间，欲望（M3）被压缩至最低限度的生理需求。",
      logicEn: "[Flesh Gearification]: Subjectivity (M1) is fully alienated into a production tool. The Other (M4) is the assembly line's metronome and performance sheet. All encounters (M2) are confined to the factory's physical walls; desire (M3) is compressed to minimal physiological needs.",
      patch: {
        mechanics: "肉体耗材协议 + [磨损系数 = 不可逆累积; 阶级流动性 = 接近零]",
        mechanicsEn: "Flesh_Consumable_Protocol + [Wear_Factor = Irreversible_Accumulation; Class_Mobility = Near_Zero]",
        aesthetic: "聚焦：工装油污 + 安全帽下的汗水 + 机器轰鸣。文本：粗糙、短促、充斥着身体疼痛与疲惫的机械感呓语。",
        aestheticEn: "Focus: Greasy_Overalls + Sweat_Under_Hard_Hats + Machine_Roar. Text: Coarse,_Curt,_Mechanical_Murmurs_Full_of_Bodily_Pain_and_Exhaustion.",
        runtime: "IF (身体在流水线上出现不可逆损伤) THEN (强制：被系统作为废弃零件丢弃，无任何补偿)。严禁工厂对耗材产生人道主义怜悯。",
        runtimeEn: "IF (Body_Suffers_Irreversible_Injury_on_Line) THEN (Force: Discarded_as_Broken_Part_with_Zero_Compensation). FORBID_Factory_Showing_Humanitarian_Mercy."
      }
    },
    {
      id: "farmer_peasant",
      name: "农民", nameEn: "Peasant",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "依附于土地的古老存在，肉身被绑定在季节的轮回与大他者天候的暴政之下。",
      defEn: "An ancient existence tethered to the soil, flesh bound to the cycle of seasons and the tyranny of the Other's climate.",
      core: "这片地比我的命还重，但它只听老天的话。 | 代偿 ($): 土地的深情 (Bond with the Land)",
      coreEn: "This land is heavier than my life, but it obeys only heaven. | Compensation ($): Bond with the Land",
      logic: "【前现代的锚定】：主体的时间线（M1）与自然节律完全同步，其大他者（M4）是气候和地主组成的双重暴君。现代文明的介入（SUR4）不断侵蚀其赖以生存的土地根基。",
      logicEn: "[Pre-modern Anchoring]: Subjectivity's timeline (M1) syncs entirely with natural rhythms. The Other (M4) is the dual tyrant of climate and landlords. Modern civilization (SUR4) relentlessly erodes the land they depend on.",
      patch: {
        mechanics: "土地绑定协议 + [对天候的依赖度 = 绝对; 知识壁垒 = 极高]",
        mechanicsEn: "Land_Binding_Protocol + [Climate_Dependency = Absolute; Knowledge_Barrier = Extreme]",
        aesthetic: "聚焦：龟裂的泥土 + 布满老茧的双手 + 丰收或饥荒的极端对比。文本：质朴、沉默、带有泥土腥气的古老宿命感。",
        aestheticEn: "Focus: Cracked_Earth + Calloused_Hands + Extreme_Contrast_of_Harvest/Famine. Text: Plain,_Silent,_Ancient_Fatalism_Smelling_of_Soil.",
        runtime: "IF (土地被强制征收或遭遇灭顶自然灾害) THEN (触发：根基崩塌后的原始暴怒或彻底的精神失序)。严禁农民在失去土地后还能理性冷静。",
        runtimeEn: "IF (Land_Forcibly_Seized_or_Total_Natural_Disaster) THEN (Trigger: Primal_Rage_or_Total_Mental_Breakdown_After_Root_Collapse). FORBID_Rational_Calm_After_Land_Loss."
      }
    },
    {
      id: "miner_deep",
      name: "深井矿工", nameEn: "Miner",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "在黑暗和危险中工作，用肉身在地壳的伤口里挖掘大他者的财富。",
      defEn: "Working in darkness and danger, excavating the Other's wealth with bare flesh inside the earth's wounds.",
      core: "我们下去的时候，谁也不确定还能不能上来。 | 缺失 ($): 阳光 (Sunlight)",
      coreEn: "When we go down, nobody knows if we'll come back up. | Lack ($): Sunlight",
      logic: "【地底的活棺】：主体（M1）被物理性地埋入大他者（M4，矿业资本）的体内。塌方的恐惧是M2遭遇的纯粹物理形态。地下的团结是在死亡阴影中被迫结成的创伤性共同体。",
      logicEn: "[Living Coffin Underground]: Subjectivity (M1) is physically buried inside the Other (M4, mining capital). Fear of collapse is the pure physical form of M2 encounters. Underground solidarity is a traumatic community forged under death's shadow.",
      patch: {
        mechanics: "地底封闭协议 + [塌方概率 = 常态性; 肺部损伤 = 不可逆]",
        mechanicsEn: "Subterranean_Closure_Protocol + [Collapse_Probability = Chronic; Lung_Damage = Irreversible]",
        aesthetic: "聚焦：头灯微光 + 煤黑面孔 + 金丝雀的沉默。文本：窒闷、压抑、充斥着矿井深处的死寂与闷响。",
        aestheticEn: "Focus: Faint_Headlamp + Coal-Blackened_Faces + Silent_Canary. Text: Suffocating,_Oppressive,_Filled_with_Dead_Silence_and_Dull_Rumbles_from_Deep_Shafts.",
        runtime: "IF (矿井发生坍塌或瓦斯泄漏) THEN (强制：所有制度性救援必定迟到，矿工只能靠彼此的肉身互救)。严禁资方在灾难中展现出人道关怀。",
        runtimeEn: "IF (Mine_Collapse_or_Gas_Leak) THEN (Force: All_Institutional_Rescue_Inevitably_Delayed; Miners_Rely_Only_on_Each_Other). FORBID_Capital_Showing_Humanitarian_Care."
      }
    },
    {
      id: "service_staff",
      name: "服务员", nameEn: "Service Staff",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "餐厅与酒店的底层服务人员，被训练成一具对客人隐形的微笑机器。",
      defEn: "Bottom-tier restaurant and hotel staff, trained into smiling machines invisible to guests.",
      core: "我端着盘子走过他们身边，他们的目光穿过我，仿佛我是空气。 | 缺失 ($): 被看见 (Being Seen)",
      coreEn: "I walk past them carrying plates; their eyes pass through me as if I were air. | Lack ($): Being Seen",
      logic: "【隐形劳动者】：主体（M1）被大他者的服务业秩序（M4）训练成一具'不存在的肉体'。其存在的所有价值被缩减为端盘子的双手。忍气吞声是系统运转的润滑油。",
      logicEn: "[Invisible Laborer]: Subjectivity (M1) is trained by the service-industry Other (M4) into 'non-existent flesh'. All existential value is reduced to plate-carrying hands. Swallowing humiliation is the system's lubricant.",
      patch: {
        mechanics: "隐形耗材协议 + [自尊磨损 = 持续性; 反抗成本 = 立即失业]",
        mechanicsEn: "Invisible_Consumable_Protocol + [Dignity_Erosion = Chronic; Rebellion_Cost = Instant_Termination]",
        aesthetic: "聚焦：统一制服 + 疲惫的双脚 + 后厨的脏乱。文本：卑微、隐忍、在微笑表面下藏着咬碎牙齿的窒息感。",
        aestheticEn: "Focus: Uniforms + Exhausted_Feet + Filthy_Kitchens. Text: Servile,_Enduring,_Suffocation_Hidden_Beneath_Smiling_Surfaces.",
        runtime: "IF (被客人当众极度羞辱且管理层要求下跪道歉) THEN (触发：隐忍到极限后的突然爆发或精神崩溃)。严禁管理层站在服务员一边。",
        runtimeEn: "IF (Publicly_Humiliated_by_Guest_AND_Management_Demands_Kneeling_Apology) THEN (Trigger: Sudden_Eruption_or_Breakdown_After_Maximal_Endurance). FORBID_Management_Siding_with_Staff."
      }
    },
    {
      id: "driver",
      name: "司机/运输工", nameEn: "Driver",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "卡车或出租车司机，永远在路上，将生命消耗在漫无尽头的公路与夜色中。",
      defEn: "Truck or taxi drivers, perpetually on the road, consuming life on endless highways and nights.",
      core: "方向盘是我唯一的家，但它从不让我停下。 | 代偿 ($): 流动的孤独 (Solitude in Motion)",
      coreEn: "The steering wheel is my only home, but it never lets me stop. | Compensation ($): Solitude in Motion",
      logic: "【流动的监牢】：主体（M1）看似自由地穿梭于空间，实则被物流系统大他者（M4）的时刻表和绩效考核死锁在驾驶座上。公路既是逃离也是囚笼的拓扑等价物。",
      logicEn: "[Mobile Prison]: The subject (M1) appears free traversing space, but is deadlocked to the driver's seat by the logistics Other's (M4) timetables and KPIs. The highway is the topological equivalent of both escape and cage.",
      patch: {
        mechanics: "公路封闭协议 + [疲劳驾驶风险 = 极高; 社会痕迹 = 几乎真空]",
        mechanicsEn: "Highway_Lockdown_Protocol + [Fatigue_Driving_Risk = Extreme; Social_Footprint = Near_Vacuum]",
        aesthetic: "聚焦：方向盘 + 公路白线 + 对讲机的杂讯 + 汽车旅馆的孤灯。文本：漫长、单调、带有催眠般的公路呢喃与突发惊醒的节奏。",
        aestheticEn: "Focus: Steering_Wheel + Highway_White_Lines + CB_Radio_Static + Motel_Lone_Lights. Text: Long,_Monotonous,_Hypnotic_Highway_Murmurs_Punctuated_by_Sudden_Awakenings.",
        runtime: "IF (疲劳驾驶到极限后在暴风雪中遭遇致命路况) THEN (强制：孤立无援的物理性死亡倒计时)。严禁在荒野公路上获得及时的外部救援。",
        runtimeEn: "IF (Fatigue_Driving_Maxed_Out_in_Blizzard_with_Fatal_Road_Conditions) THEN (Force: Isolated_Physical_Death_Countdown). FORBID_Timely_Outside_Rescue_on_Desolate_Highway."
      }
    },
    {
      id: "migrant_worker",
      name: "外来务工/民工", nameEn: "Migrant Worker",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "离开家乡进城打工，没有户口，作为城市的建设者却不属于城市的幽灵劳动力。",
      defEn: "Leaving hometowns for city work without residency papers, ghost laborers who build the city but never belong to it.",
      core: "我用双手堆起了这些高楼，但没有一扇窗户属于我。 | 缺失 ($): 归属 (Belonging)",
      coreEn: "I built these towers with my hands, but not a single window belongs to me. | Lack ($): Belonging",
      logic: "【悬浮的幽灵】：主体（M1）处于故乡（旧大他者M4）与城市（新大他者SUR4）的双重驱逐之中。既无法回归也无法融入，其存在被彻底悬置为纯粹的劳动力商品。",
      logicEn: "[Suspended Ghost]: Subjectivity (M1) is doubly expelled by hometown (old Other M4) and city (new Other SUR4). Unable to return or integrate, their existence is wholly suspended as a pure labor commodity.",
      patch: {
        mechanics: "双重驱逐协议 + [户籍壁垒 = 不可突破; 漂泊系数 = 永恒]",
        mechanicsEn: "Dual_Expulsion_Protocol + [Residency_Barrier = Impenetrable; Drift_Factor = Permanent]",
        aesthetic: "聚焦：编织袋 + 工地脚手架 + 大通铺 + 春运火车。文本：沉默、坚忍、带有故乡方言碎片的粗粝叙事。",
        aestheticEn: "Focus: Woven_Bags + Scaffolding + Bunk_Beds + Spring_Festival_Trains. Text: Silent,_Stoic,_Coarse_Narrative_with_Fragments_of_Hometown_Dialect.",
        runtime: "IF (城市在需要时榨尽其劳力后将其驱逐回乡) THEN (强制：回去的家乡也已面目全非，无处容身)。严禁城市或故乡对其产生真正的接纳。",
        runtimeEn: "IF (City_Squeezes_Labor_Dry_Then_Deports_Back) THEN (Force: Hometown_Also_Unrecognizable,_Nowhere_to_Belong). FORBID_Genuine_Acceptance_by_City_or_Hometown."
      }
    },
    {
      id: "street_vendor",
      name: "街头小贩", nameEn: "Street Vendor",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "摆摊维持生计、与城管玩猫鼠游戏的底层烟火气承载者。",
      defEn: "Sustaining livelihood through street stalls, playing cat-and-mouse with enforcers; carriers of ground-level earthly vitality.",
      core: "推车上的这锅汤，就是我全家今晚的命。 | 代偿 ($): 市井生存智慧 (Street Survival Wisdom)",
      coreEn: "The soup on this cart is my whole family's lifeline tonight. | Compensation ($): Street Survival Wisdom",
      logic: "【灰色地带的游牧者】：主体（M1）的生存完全依赖于在大他者法则（M4，城管/市政）的缝隙中见缝插针。其全部叙事驱动力（M5）是为了维持最低限度的日常存续。",
      logicEn: "[Nomad of the Grey Zone]: Subjectivity's (M1) survival depends entirely on exploiting cracks in the Other's regulations (M4: enforcement/municipality). All narrative drive (M5) is solely to maintain minimal daily existence.",
      patch: {
        mechanics: "灰色求生协议 + [执法规避嗅觉 = 极强; 资本积累 = 近乎归零]",
        mechanicsEn: "Grey_Zone_Survival_Protocol + [Enforcement_Evasion_Sense = Max; Capital_Accumulation = Near_Zero]",
        aesthetic: "聚焦：推车吆喝 + 夜市灯光 + 城管制服的阴影。文本：充斥着烟火气、零钱叮当与随时逃跑的紧迫感。",
        aestheticEn: "Focus: Cart_Hawking + Night_Market_Lights + Shadow_of_Enforcement_Uniforms. Text: Filled_with_Earthly_Vitality,_Clinking_Coins,_and_Ever-Ready-to-Flee_Urgency.",
        runtime: "IF (城管暴力执法没收全部家当并当众砸毁推车) THEN (触发：在绝望中用菜刀捍卫最后一口锅的玉石俱焚)。严禁执法者展现同情。",
        runtimeEn: "IF (Enforcers_Violently_Confiscate_All_and_Publicly_Smash_Cart) THEN (Trigger: Desperate_Defense_of_Last_Pot_with_Kitchen_Knife_in_Mutual_Destruction). FORBID_Enforcers_Showing_Sympathy."
      }
    },
    {
      id: "cleaner_janitor",
      name: "清洁工", nameEn: "Janitor",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "清理城市的排泄物与垃圾，是文明社会最不愿承认却不可或缺的隐形地基。",
      defEn: "Cleaning the city's excrement and waste; the invisible foundation civilization refuses to acknowledge yet cannot live without.",
      core: "我每天触碰你们最不愿面对的东西，所以你们假装看不见我。 | 缺失 ($): 尊严 (Dignity)",
      coreEn: "I touch what you refuse to face every day, so you pretend I don't exist. | Lack ($): Dignity",
      logic: "【实在界的清道夫】：主体（M1）每日直面社会排泄出的实在界残渣（M6），是离象征界虚伪表面最远的存在。大他者（M4, 城市文明）需要他们但拒绝承认他们。",
      logicEn: "[Scavenger of the Real]: Subjectivity (M1) daily confronts the Real's residue (M6) excreted by society; the existence furthest from the Symbolic's false surface. The Other (M4: city/civility) needs them but refuses acknowledgment.",
      patch: {
        mechanics: "污秽接触协议 + [社会可见度 = 零; 实在界触感 = 最高]",
        mechanicsEn: "Filth_Contact_Protocol + [Social_Visibility = Zero; Real_Tactility = Maximum]",
        aesthetic: "聚焦：橙色马甲 + 凌晨的空荡街道 + 垃圾车的轰隆声。文本：沉默、无声、带有一种被整个世界无视后的空洞回响。",
        aestheticEn: "Focus: Orange_Vests + Empty_Streets_at_Dawn + Garbage_Truck_Rumble. Text: Silent,_Voiceless,_Carrying_an_Empty_Echo_of_Being_Ignored_by_the_Entire_World.",
        runtime: "IF (在恶劣天气中清理有毒废物导致身体中毒) THEN (强制：无人问津的默默死去，连新闻都不会报道)。严禁城市对其牺牲产生任何公开悼念。",
        runtimeEn: "IF (Cleaning_Toxic_Waste_in_Harsh_Weather_Causes_Poisoning) THEN (Force: Die_Silently_Unnoticed,_Not_Even_News_Coverage). FORBID_City_Publicly_Mourning_Their_Sacrifice."
      }
    },
    {
      id: "sex_worker_street",
      name: "街头性工作者", nameEn: "Streetwalker",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "出卖身体换取生存，在尊严被剥离的暗巷中与危险和死亡为邻。",
      defEn: "Selling the body for survival, neighboring danger and death in alleys where dignity has been stripped away.",
      core: "他们买的是我的肉，但偷走的是我的名字。 | 缺失 ($): 主体的完整性 (Integrity of Self)",
      coreEn: "They buy my flesh, but steal my name. | Lack ($): Integrity of Self",
      logic: "【商品化的肉身】：主体（M1）的身体被直接降格为可消费/可丢弃的物神（objet a）。大他者（M4）包括嫖客的兽性凝视与法律的蔑视性驱逐。其欲望（M3）被外力彻底扭曲为生存本能。",
      logicEn: "[Commodified Flesh]: Subjectivity's (M1) body is directly demoted to a consumable/disposable fetish (objet a). The Other (M4) includes the bestial gaze of clients and the contemptuous expulsion of law. Desire (M3) is wholly distorted into survival instinct.",
      patch: {
        mechanics: "肉身商品化协议 + [暴力暴露度 = 持续性; 法律庇护 = 负值]",
        mechanicsEn: "Flesh_Commodification_Protocol + [Violence_Exposure = Chronic; Legal_Protection = Negative]",
        aesthetic: "聚焦：浓妆 + 街角阴影 + 廉价旅馆的霉斑 + 药片。文本：在麻木与恐惧之间摇摆的断裂碎片，带有深夜的腐朽甜腻气息。",
        aestheticEn: "Focus: Heavy_Makeup + Street_Corner_Shadows + Mold-Stained_Cheap_Hotels + Pills. Text: Fractured_Fragments_Oscillating_Between_Numbness_and_Terror,_Carrying_a_Rotten_Sweet_Smell_of_Late_Night.",
        runtime: "IF (遭遇施虐型嫖客的致命暴行) THEN (强制：无人报警、无人搜救，尸体被当做垃圾处理)。严禁法律对其遭遇给予正义。",
        runtimeEn: "IF (Encounter_Sadistic_Client's_Fatal_Violence) THEN (Force: No_One_Calls_Police,_No_Search,_Body_Treated_as_Waste). FORBID_Law_Granting_Justice_for_Their_Ordeal."
      }
    },
    {
      id: "soldier_grunt",
      name: "大兵/炮灰", nameEn: "Grunt",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "军队的最底层，作为消耗品被填入战争绞肉机的编号化肉体。",
      defEn: "The lowest rank of the military, numbered flesh fed into the war meat grinder as consumables.",
      core: "狗牌上刻的不是我的名字，是一个弹药消耗统计编号。 | 缺失 ($): 个人意义 (Personal Meaning)",
      coreEn: "The dog tag doesn't bear my name; it's an ammo expenditure serial number. | Lack ($): Personal Meaning",
      logic: "【编号化的死亡】：主体（M1）被军事大他者（M4）彻底编号化，成为战略棋盘上可随意消耗的单位。战友的情义（M3残存的力比多）是唯一阻止彻底精神崩溃的锚点。",
      logicEn: "[Numbered Death]: Subjectivity (M1) is completely serialized by the military Other (M4), becoming a freely expendable unit on the strategic chessboard. Comrade bonds (M3's residual libido) are the only anchor preventing total psychic collapse.",
      patch: {
        mechanics: "步兵耗材协议 + [生命权重 = 统计学噪音; 恐惧阈值 = 被训练性压制]",
        mechanicsEn: "Infantry_Consumable_Protocol + [Life_Weight = Statistical_Noise; Fear_Threshold = Trained_Suppression]",
        aesthetic: "聚焦：狗牌 + 泥泞战壕 + 家书上的血指纹。文本：粗糙的军令式短句夹杂着梦呓般的思乡独白。",
        aestheticEn: "Focus: Dog_Tags + Muddy_Trenches + Bloodstained_Fingerprints_on_Home_Letters. Text: Rough_Military_Short_Sentences_Mixed_with_Dream-like_Homesick_Monologues.",
        runtime: "IF (在绝境中收到战友阵亡且家中噩耗的双重打击) THEN (触发：要么发疯式的孤胆冲锋，要么举枪自杀)。严禁高层军官对其个体死亡产生一秒钟的情感波澜。",
        runtimeEn: "IF (Receive_Double_Blow_of_Comrade_KIA_and_Home_Tragedy_in_Desperate_Situation) THEN (Trigger: Either_Berserker_Solo_Charge_or_Self-Inflicted_Gunshot). FORBID_Senior_Officers_Feeling_One_Second_of_Emotion_for_Their_Individual_Death."
      }
    },
    {
      id: "fisher_folk",
      name: "渔民", nameEn: "Fisher Folk",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "靠海吃海，将生命悬挂在风浪与潮汐的喜怒无常之上的水上游牧民。",
      defEn: "Living off the sea, suspending life upon the capricious moods of winds, waves, and tides; aquatic nomads.",
      core: "大海给我鱼吃，也随时会把我吞掉，这就是我们的契约。 | 代偿 ($): 与自然的原始契约 (Primal Covenant with Nature)",
      coreEn: "The sea feeds me fish and can swallow me whole at any moment; that is our covenant. | Compensation ($): Primal Covenant with Nature",
      logic: "【海洋赌徒】：大他者（M4）不是人造系统，而是不可预测的自然海洋本体。每一次出海都是与实在界（M6）的直接肉搏赌博。妈祖像是其唯一的象征界缝合物。",
      logicEn: "[Ocean Gambler]: The Other (M4) is not a man-made system, but the unpredictable oceanic entity itself. Each voyage is a direct flesh-and-blood gamble with the Real (M6). Mazu statues serve as the sole Symbolic suture.",
      patch: {
        mechanics: "自然赌博协议 + [不可控变量 = 极度不可控; 陆地适应力 = 极弱]",
        mechanicsEn: "Natural_Gamble_Protocol + [Uncontrollable_Variables = Extreme; Land_Adaptability = Minimal]",
        aesthetic: "聚焦：渔网 + 船舱的鱼腥味 + 嘶吼的风暴。文本：苍凉、豪迈、带有海水咸涩与宿命感的粗犷低吟。",
        aestheticEn: "Focus: Fishing_Nets + Fish_Stench_in_Hulls + Howling_Storms. Text: Desolate,_Bold,_Rough_Low_Murmurs_Tasting_of_Seawater_and_Fatalism.",
        runtime: "IF (风暴将整条渔船撕碎) THEN (强制：大海不接受谈判，幸存者靠啃同伴尸体漂流)。严禁海洋对虔诚的祈祷作出任何回应。",
        runtimeEn: "IF (Storm_Tears_the_Entire_Boat_Apart) THEN (Force: Sea_Accepts_No_Negotiation; Survivors_Drift_Chewing_Comrades). FORBID_Ocean_Responding_to_Devout_Prayers."
      }
    },
    {
      id: "lumberjack",
      name: "伐木工", nameEn: "Lumberjack",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "在深山老林工作，与世隔绝，将原始的力量消耗在巨木与孤独之间。",
      defEn: "Working in deep forests, cut off from the world, expending primal strength between giant trees and solitude.",
      core: "电锯的声音比人声更亲切，树倒下的时候比人说话更真实。 | 代偿 ($): 原始的沉默力量 (Primal Silent Strength)",
      coreEn: "The chainsaw's sound is more intimate than human voices; a falling tree speaks truer than people. | Compensation ($): Primal Silent Strength",
      logic: "【前语言的退行】：主体（M1）被物理性地隔绝在象征界（M5）之外，退行至前语言的原始肉身状态。大他者（M4）缩减为森林的物理法则。孤独导致语言能力和社交功能的缓慢萎缩。",
      logicEn: "[Pre-linguistic Regression]: Subjectivity (M1) is physically isolated from the Symbolic (M5), regressing to a pre-linguistic primal flesh state. The Other (M4) is reduced to the forest's physical laws. Solitude causes slow atrophy of language and social function.",
      patch: {
        mechanics: "荒野退行协议 + [语言衰退系数 = 递增; 生理危险系数 = 极高]",
        mechanicsEn: "Wilderness_Regression_Protocol + [Language_Atrophy_Factor = Progressive; Physical_Danger_Factor = Extreme]",
        aesthetic: "聚焦：电锯 + 巨木倒塌的慢镜 + 法兰绒衬衫上的木屑。文本：极度精简、半兽化的内心独白，充斥着吐息声与木头的碎裂。",
        aestheticEn: "Focus: Chainsaw + Slow-Mo_Giant_Tree_Falling + Wood_Chips_on_Flannel. Text: Extremely_Sparse,_Semi-Feral_Inner_Monologue_Filled_with_Breathing_and_Splintering_Wood.",
        runtime: "IF (被困在深山中遭遇致命伤且无人知晓) THEN (强制：只有树木见证其死亡，不存在任何人类搜救的可能)。严禁文明世界的信号在此地生效。",
        runtimeEn: "IF (Trapped_in_Deep_Mountains_with_Fatal_Injury_and_No_One_Knows) THEN (Force: Only_Trees_Witness_Death; Zero_Chance_of_Human_Search). FORBID_Civilization's_Signal_Reaching_This_Place."
      }
    },
    {
      id: "docker",
      name: "码头工人", nameEn: "Docker",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "在港口搬运货物、连接世界却被遗忘在铁锈与海风中的力量型底层。",
      defEn: "Hauling cargo at ports, connecting the world yet forgotten amid rust and sea winds; power-type proletarians.",
      core: "我的脊背扛过了五大洲的货物，但我连一张出港的船票都买不起。 | 缺失 ($): 远方 (The Horizon)",
      coreEn: "My back has carried cargo from five continents, but I can't afford a single departure ticket. | Lack ($): The Horizon",
      logic: "【节点的囚徒】：主体（M1）身处全球化物流链的物理节点，是连接世界的血管，却永远被钉死在码头上。工会是其集体力比多（M3）的唯一组织形态。",
      logicEn: "[Prisoner of the Node]: Subjectivity (M1) is at the physical node of global logistics, the blood vessel connecting the world, yet permanently nailed to the dock. The union is the sole organizational form of their collective libido (M3).",
      patch: {
        mechanics: "节点锁定协议 + [体力消耗 = 极限; 全球视野/个体视野 = 极度反差]",
        mechanicsEn: "Node_Lock_Protocol + [Physical_Expenditure = Maximum; Global_vs_Individual_Horizon = Extreme_Contrast]",
        aesthetic: "聚焦：集装箱钢铁色泽 + 起重机剪影 + 工号牌。文本：粗犷、有力、带有海风与铁锈的蓝领韵律。",
        aestheticEn: "Focus: Container_Steel_Hues + Crane_Silhouettes + ID_Badges. Text: Rugged,_Forceful,_Blue-collar_Rhythms_Carrying_Sea_Wind_and_Rust.",
        runtime: "IF (港口自动化取消了所有人工岗位) THEN (触发：毕生技能瞬间归零的结构性毁灭与工会的绝望罢工)。严禁资方在裁员中表现出丝毫人情味。",
        runtimeEn: "IF (Port_Automation_Eliminates_All_Manual_Jobs) THEN (Trigger: Structural_Annihilation_of_Lifelong_Skills_and_Union's_Desperate_Strike). FORBID_Capital_Showing_Any_Humanity_in_Layoffs."
      }
    },
    {
      id: "maid_servant",
      name: "家仆/佣人", nameEn: "Servant",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "依附于主人家中，没有私人空间，以近距离窥视权贵秘密为代价出卖尊严的附庸存在。",
      defEn: "Attached to the master's household with no private space, an appendage existence selling dignity for the price of glimpsing the elite's secrets up close.",
      core: "我知道他们所有的秘密，但我连说'不'的权利都没有。 | 代偿 ($): 窥探的隐性权力 (Covert Power of Voyeurism)",
      coreEn: "I know all their secrets, but I don't even have the right to say 'no'. | Compensation ($): Covert Power of Voyeurism",
      logic: "【附庸寄生体】：主体（M1）的物理空间被彻底从属于主人的领地。其大他者（M4）就是主人及其家族秩序。窥探主人的秘密是其唯一的、被动的力比多补偿回路。",
      logicEn: "[Vassal Parasite]: Subjectivity's (M1) physical space is entirely subordinated to the master's territory. The Other (M4) is the master and their family order. Voyeuristically glimpsing the master's secrets is the sole passive libido compensation circuit.",
      patch: {
        mechanics: "附庸寄生协议 + [自主空间 = 零; 信息囤积 = 隐性核弹]",
        mechanicsEn: "Vassal_Parasite_Protocol + [Autonomous_Space = Zero; Information_Hoarding = Latent_Nuke]",
        aesthetic: "聚焦：围裙 + 后楼梯的阴暗 + 主人背影的压迫感。文本：卑微、低语、带有仆从视角特有的锁孔窥视感与屈辱。",
        aestheticEn: "Focus: Aprons + Shadowy_Back_Stairs + Oppressive_Master_Silhouettes. Text: Servile,_Whispered,_Carrying_the_Keyhole_Voyeurism_and_Humiliation_Unique_to_the_Servant's_Perspective.",
        runtime: "IF (掌握了足以毁灭主人家族的致命秘密但被发现) THEN (强制：主人立刻以最私密残酷的方式灭口)。严禁主人对其忠诚产生信任。",
        runtimeEn: "IF (Possess_Family-Destroying_Secret_but_Discovered) THEN (Force: Master_Immediately_Silences_in_Most_Private_Cruel_Way). FORBID_Master_Trusting_Their_Loyalty."
      }
    },
    {
      id: "apprentice",
      name: "学徒", nameEn: "Apprentice",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "跟着师傅学手艺，地位低下，在传承的渴望与压制的暴力之间被碾磨的前主体。",
      defEn: "Learning a trade under a master, low in status, a pre-subject ground between the longing for inheritance and the violence of suppression.",
      core: "师傅的巴掌比他的技术打得更狠，但我只能跪着接。 | 缺失 ($): 被认可的出师 (Acknowledged Mastery)",
      coreEn: "Master's slaps strike harder than his technique, but I can only kneel and take it. | Lack ($): Acknowledged Mastery",
      logic: "【父性暴力传承】：师傅占据了绝对的父性大他者（M4）位置。主体的欲望（M3）是有朝一日超越师傅，但这一欲望本身就构成对大他者权威的僭越，必然引来更猛烈的打压。",
      logicEn: "[Paternal Violence of Succession]: The master occupies the absolute paternal Other (M4) position. The subject's desire (M3) is to one day surpass the master, but this very desire constitutes transgression against the Other's authority, inevitably inviting harsher suppression.",
      patch: {
        mechanics: "师徒暴力协议 + [服从度 = 被迫性满级; 出师条件 = 永远不够格]",
        mechanicsEn: "Master-Apprentice_Violence_Protocol + [Obedience = Coerced_Max; Qualification_for_Mastery = Perpetually_Insufficient]",
        aesthetic: "聚焦：工具 + 被劈头盖脸泼来的脏水 + 角落里偷师的眼神。文本：隐忍、充满屈辱、在粗暴师训中夹杂着对手艺近乎宗教般的虔诚渴望。",
        aestheticEn: "Focus: Tools + Dirty_Water_Thrown_in_Face + Furtive_Eyes_Stealing_Technique. Text: Enduring,_Full_of_Humiliation,_Mixing_Brutal_Master-Training_with_Near-Religious_Devotion_to_the_Craft.",
        runtime: "IF (技艺已超越师傅但师傅拒绝承认并试图销毁其作品) THEN (触发：弑父性的暴力反叛或携带技艺的出走放逐)。严禁师傅欣然认输放手。",
        runtimeEn: "IF (Skill_Surpasses_Master_but_Master_Refuses_to_Acknowledge_and_Tries_to_Destroy_Work) THEN (Trigger: Patricidal_Violent_Rebellion_or_Exile_Carrying_the_Craft). FORBID_Master_Gracefully_Conceding."
      }
    }
  ]
};
