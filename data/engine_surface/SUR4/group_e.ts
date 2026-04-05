import { LibraryCategoryDef } from '../../../types';

export const SUR4_GROUP_E: LibraryCategoryDef = {
  id: "soc_chaos",
  name: "5. 混乱与边缘 (Chaos & Edge)",
  nameEn: "Chaos & Edge",
  desc: "秩序崩塌后的世界，弱肉强食与法外之地。M4（大他者阻断）退行成为残酷的物理环境与帮派丛林丛林法则。",
  defEn: "Post-collapse, lawless zones of pure survival. M4 regresses into the ruthless physical environment and brutal jungle mechanics.",
  items: [
    {
      id: "warlordism",
      name: "军阀割据",
      nameEn: "Warlordism",
      def: "废土逻辑。谁有枪和水谁就是王，小团体的绝对暴力统治与领地划分。",
      defEn: "Wasteland logic. Guns and water equal sovereignty. Micro-factions ruled by absolute kinetic violence.",
      core: "【换喻】野蛮的生命力与被武器重新定义的“合法性” (Brutal vitality and 'legitimacy' redefined by weaponry)",
      coreEn: "【Metonymy】The state monopoly on violence shattered into tribal shards.",
      logic: "【退行动力学】：随着宏观 M4（国家法理）的崩溃，M5（纯粹动能行动）上升为唯一的通用货币。主体 M1 必须把 M5 献祭给局部军阀（微缩型暴戾大他者），否则立刻触发 M6（物理死亡）。",
      logicEn: "[Regressive Kinetics]: As macro M4 (State Law) collapses, M5 (Pure kinetic action) becomes the only currency. M1 must surrender M5 to local warlords (Micro-Big Others) or face immediate M6 (Death).",
      patch: {
        mechanics: "基础丛林协议 + [宏观约束力 = 0; 局部暴力上限 = 满级]",
        mechanicsEn: "Base_JUNGLE + [Macro_Law = 0; Localized_Violence_Cap = MAX]",
        aesthetic: "聚焦：改装战车、莫霍克发型、骷髅装饰、燃烧的油桶、废墟堡垒。文本：汗水、机油与毫无掩饰的嗜血狂笑。",
        aestheticEn: "Focus: Modded war-rigs + Mohawks + Skull motifs + Burning oil drums. Text: Sweat, motor oil, and unmasked bloodlust.",
        runtime: "IF (在不同军阀领地边缘徘徊或展示软弱) THEN (必须触发：成为两帮火拼的消耗品或直接被掠夺为奴隶)。",
        runtimeEn: "IF (Lingering_At_Borders_or_Showing_Weakness) THEN (Must_Trigger: Becoming cannon fodder for rival skirmishes or instant enslavement)."
      }
    },
    {
      id: "failed_state",
      name: "失败国家",
      nameEn: "Failed State",
      def: "政府名存实亡。法律条文仍在但无人执行，极其危险的灰色生存地带。",
      defEn: "Government in name only. Laws exist but are utterly unenforced. A deadly gray zone of survival.",
      core: "【换喻】徒有其表的法典与满地横流的私刑 (Hollow codexes vs. overflowing vigilante justice)",
      coreEn: "【Metonymy】The ghost of the State haunting a cannibalistic reality.",
      logic: "【能指脱水法则】：M4 变成了一具虚无的空壳（失效的宪法）。系统不会惩罚主体的僭越，但同样不会提供任何庇护。M2（实在界的暴力创伤）如同暴雨般随时毫无逻辑地砸向 M1。",
      logicEn: "[Dehydrated Signifier Law]: M4 is an empty shell (dead constitution). It neither punishes nor protects. M2 (Trauma of the Real) strikes M1 randomly like toxic rain.",
      patch: {
        mechanics: "基础灰区协议 + [官方效能 = 濒死; 私人武装自卫需求 = 绝对]",
        mechanicsEn: "Base_GRAY_ZONE + [Official_Efficacy = Dying; Private_Armed_Defense = Absolute]",
        aesthetic: "聚焦：满街的垃圾、持枪的平民、停电的城市、黑市美元、废弃的警局。文本：绝望的麻木与突如其来的无逻辑交火。",
        aestheticEn: "Focus: Trash-filled streets + Armed civilians + Blackouts + Derelict police stations. Text: Desperate numbness punctured by senseless shootouts.",
        runtime: "IF (试图寻求报警或官方系统干预争端) THEN (触发：黑警的二次敲诈或彻底的寂静无人响应)。",
        runtimeEn: "IF (Attempt_To_Call_Police_or_Seek_State_Help) THEN (Trigger: Secondary extortion by corrupt cops or absolute dead silence)."
      }
    },
    {
      id: "anarchy_zone",
      name: "无政府飞地",
      nameEn: "Anarchy Zone / Cyber-Slum",
      def: "九龙城寨式的巨型自发社区。藏污纳垢亦藏龙卧虎，极端拥挤下的自治乌托邦。",
      defEn: "Kowloon Walled City mega-slums. A chaotic but functional autonomous utopia bred in extreme density.",
      core: "【换喻】极限的空间内爆与混沌中的有机秩序 (Extreme spatial implosion breeding organic chaotic order)",
      coreEn: "【Metonymy】Life finding a way through the cracks of concrete and illegal power cables.",
      logic: "【拓扑折叠法则】：在此处，M4 不是自上而下的法条，而是“邻里距离”挤压出的不成文默契。主体 M1 的任何 M5（行动）都会瞬间牵扯数百人的神经，形成极其粘稠的局部伦理场。",
      logicEn: "[Topological Fold Law]: M4 is not top-down law, but unwritten consensus squeezed from extreme proximity. M1's M5 (Action) instantly tugs at hundreds of neighbors, creating a highly viscous ethical field.",
      patch: {
        mechanics: "基础飞地协议 + [人口密度 = 爆表; 野生秩序韧性 = 极高]",
        mechanicsEn: "Base_ENCLAVE + [Population_Density = Broken; Wild_Order_Resilience = Very_High]",
        aesthetic: "聚焦：私搭乱建的立体迷宫、滴水的空调外机、霓虹神龛、帮派纹身、地下赛博诊所。文本：噪音、潮湿与令人窒息的勃勃生机。",
        aestheticEn: "Focus: 3D maze of illegal additions + Dripping AC units + Neon shrines + Cyber-clinics. Text: Noise, dampness, and a suffocating, terrifying vitality.",
        runtime: "IF (试图打破社区的地下平衡或引来外部强权) THEN (必然触发：被整个立体贫民窟如免疫系统般联手吞噬)。",
        runtimeEn: "IF (Attempt_To_Break_Underground_Balance_or_Bring_Cops) THEN (Must_Trigger: Swallowed whole by the mega-slum acting as a unified immune system)."
      }
    },
    {
      id: "tribalism_post_apoc",
      name: "末世部落",
      nameEn: "Post-Apoc Tribes",
      def: "文明崩溃，意识形态倒退回图腾阶段，人们将旧世界的科技遗物奉为神明。",
      defEn: "Civilization collapses; ideology regresses to Totemism. Old World tech scraps worshipped as divine artifacts.",
      core: "【换喻】科技尸体的异教化与历史的强制失忆 (Paganizing the corpses of technology and enforced amnesia)",
      coreEn: "【Metonymy】Cargo cults praying to the rusted servers of a dead world.",
      logic: "【能指错位法则】：废弃的科技物品脱离了原有的 M4，被重新编码进入了原始的部落大他者（假神）。主体的 M1 通过极其荒谬但严肃的仪式，试图与一台死去的电脑建立 M3（命运感应）。",
      logicEn: "[Signifier Dislocation Law]: Dead tech detaches from the old M4 and is re-coded as a Totem Big Other. M1 performs absurd but deadly serious rituals to establish M3 (Destiny connection) with a dead PC.",
      patch: {
        mechanics: "基础图腾协议 + [知识断层度 = 绝对; 崇拜暴力转化率 = 高]",
        mechanicsEn: "Base_TOTEM + [Knowledge_Fault_Line = Absolute; Worship-to-Violence_Ratio = High]",
        aesthetic: "聚焦：用电路板做成的萨满护甲、废弃地铁站里的血祭、把可乐瓶当神像、使用现代俚语的野蛮战歌。文本：神圣感与工业垃圾的荒诞拼接。",
        aestheticEn: "Focus: Circuit-board shaman armor + Blood sacrifices in subways + Modern slang used as war chants. Text: The absurd splicing of holiness and industrial trash.",
        runtime: "IF (用科学原理解释神器的本质) THEN (触发：被祭司判定为触犯禁忌的最高异端，执行火刑)。",
        runtimeEn: "IF (Explaining_The_Artifact_With_Science) THEN (Trigger: Judged as the ultimate heretic by the High Priest, execution by fire)."
      }
    },
    {
      id: "frontier_town",
      name: "边境小镇",
      nameEn: "Frontier Town",
      def: "西部淘金热或星际扩张的边缘带。没有成文法，只有快枪手与赏金猎人。",
      defEn: "Wild West or outer-rim space colonies. No written law; disputes settled by quick-draws and bounty hunters.",
      core: "【换喻】文明真空区的赌徒逻辑与左轮仲裁 (Gambler logic in the civilizational vacuum and revolver arbitration)",
      coreEn: "【Metonymy】Where the map ends, the gun begins. Justice has a caliber.",
      logic: "【契约悬空法则】：M4 的投影在这里极其微弱。人与人之间的 M3（欲望交织）不再通过法庭结算，而是直接被简化为 M5（一发子弹）。“名誉”成为了小镇中唯一的临时 M4。",
      logicEn: "[Suspended Contract Law]: M4's projection is weak here. M3 (Intertwined Desires) is not settled in courts but compressed into M5 (A single bullet). 'Reputation' acts as the only temporary M4.",
      patch: {
        mechanics: "基础边境协议 + [仲裁距离 = 射程距离; 风险回报倍率 = 极速飙升]",
        mechanicsEn: "Base_FRONTIER + [Arbitration_Distance = Weapon_Range; Risk-Reward_Ratio = Skyrocketing]",
        aesthetic: "聚焦：推门而入的酒馆、风沙飞舞的决斗街、通缉令、陌生的异乡客。文本：烈酒烧喉的粗粝感与几句废话后的果断击杀。",
        aestheticEn: "Focus: Kicking open saloon doors + Dusty duel streets + Wanted posters + Strangers. Text: Whiskey burns and swift kills after brief laconic dialogue.",
        runtime: "IF (在酒馆展现出令人觊觎的财富且毫无防备) THEN (必然触发：夜间的暗杀或公然的死亡挑衅决斗)。",
        runtimeEn: "IF (Flashing_Wealth_In_Saloon_Without_Defenses) THEN (Must_Trigger: Midnight assassination or a public death duel provocation)."
      }
    },
    {
      id: "criminal_underworld",
      name: "地下社会",
      nameEn: "Criminal Underworld / Shadow Mafia",
      def: "刺客联盟或极道世界。有自己独立的货币、法庭体系和严苛的“规矩”。",
      defEn: "John Wick-style assassin networks or Yakuza. Independent currency, shadow courts, and ruthless 'Rules'.",
      core: "【换喻】暗黑镜面的庄严与优雅的残暴 (The solemnity of the dark mirror and elegant brutality)",
      coreEn: "【Metonymy】Crime sanitized by bespoke suits and gold coins; savagery bound by etiquette.",
      logic: "【倒影大他者】：表面世界的 M4 被完全排斥，地下世界建立起了一个更加专制、绝不可违逆的暗面 M4（“规矩”）。主体的 M5 一旦逾越规矩边缘，面临的是比警察更恐怖的全域追杀。",
      logicEn: "[Mirrored Big Other]: The surface M4 is rejected, replaced by a hyper-totalitarian shadow M4 ('The Rules'). If M5 steps over the line, the universal hunt is far worse than any police.",
      patch: {
        mechanics: "基础黑道协议 + [契约精神神圣化 = MAX; 违约抹杀程序 = 绝对]",
        mechanicsEn: "Base_UNDERWORLD + [Contract_Sanctity = MAX; Breach_Erasure = Absolute]",
        aesthetic: "聚焦：金币、定制西装、消音器、地下俱乐部的华丽穹顶、只有特定暗号能开的门。文本：极端优雅的暴力与不能讨价还价的血偿。",
        aestheticEn: "Focus: Gold coins + Bespoke suits + Suppressors + Lavish shadow clubs + Password doors. Text: Elegantly choreographed violence and non-negotiable blood debts.",
        runtime: "IF (在系统规定的“安全屋/和平区”内见血) THEN (触发：全网最高级通缉，自身被整个地下系统物理切除)。",
        runtimeEn: "IF (Spilling_Blood_Within_Designated_Safe_Zones) THEN (Trigger: Excommunicado; universal highest-tier bounty and systemic erasure)."
      }
    },
    {
      id: "quarantine_zone",
      name: "隔离区",
      nameEn: "Quarantine Zone",
      def: "因绝症、丧尸、辐射或灵能爆发而被高墙和军队封死的弃地。",
      defEn: "Sealed off by high walls and military due to plagues, zombies, or anomalies. Abandoned to die.",
      core: "【换喻】被抛弃的创伤与内外强权的夹击 (The trauma of abandonment trapped between internal rot and external barricades)",
      coreEn: "【Metonymy】The physical embodiment of the un-dead; containment of the contaminated.",
      logic: "【存在切除法则】：宏观 M4 为了保全自身，物理上划定了绝命线。墙内的主体 M1 不仅要面对 M2（病毒/怪物的绝对撕裂），还要面对墙外狙击手的 M4（防线律令）。这是最极端的双重绝望。",
      logicEn: "[Existential Excision Law]: Macro M4 draws a physical deathline to save itself. M1 inside faces dual horrors: M2 (The virus/monsters ripping flesh) and M4 (The sniper's bullet enforcing containment).",
      patch: {
        mechanics: "基础封锁协议 + [越界生还率 = 0; 内部熵增速度 = 几何级]",
        mechanicsEn: "Base_QUARANTINE + [Border_Survival_Rate = 0; Internal_Entropy = Exponential]",
        aesthetic: "聚焦：防毒面具、高墙外的探照灯、黄色的生化警告带、空投的有限物资箱、感染者的哀嚎。文本：极端的幽闭恐惧与人性溃烂。",
        aestheticEn: "Focus: Gas masks + Searchlights + Yellow BIOHAZARD tape + Airdrops + Infected wails. Text: Extreme claustrophobia and the festering of humanity.",
        runtime: "IF (试图攀爬高墙或接触外界) THEN (必须触发：无口头警告的饱和式重火力抹杀及焚烧)。",
        runtimeEn: "IF (Attempting_to_Climb_the_Wall_or_Signal_Outside) THEN (Must_Trigger: Saturation fire without warning followed by incineration)."
      }
    },
    {
      id: "scavenger_world",
      name: "拾荒世界",
      nameEn: "Scavenger World",
      def: "基础生产力全部停止，人类完全依靠挖掘和拆解前纪元的遗骸维生。垃圾即财富。",
      defEn: "Zero base production. Humanity survives purely by unearthing and scrapping the husks of previous epochs. Trash is wealth.",
      core: "【换喻】嚼食远古残骸的寄生时代 (The parasitic epoch chewing on ancient husks)",
      coreEn: "【Metonymy】Living in the ruins of giants; civilization as endless recycling of the past.",
      logic: "【零和溃缩法则】：由于不再有创造，M3（欲望对象）的获取就是绝对的掠夺。在这个 M4（秩序）完全死亡的沙盒里，主体的 M1 只是围绕着“残物”打转的食腐动物。",
      logicEn: "[Zero-sum Collapse Law]: With zero creation, acquiring M3 (Desire) is absolute plunder. In a sandbox where M4 is dead, M1 is just a scavenger circling 'the remains'.",
      patch: {
        mechanics: "基础拾荒协议 + [资源刷新率 = 负数; 物品拼凑魔改度 = MAX]",
        mechanicsEn: "Base_SCAVENGE + [Resource_Respawn = Negative; Item_Frankensteining = MAX]",
        aesthetic: "聚焦：一望无际的垃圾山、生锈金属刺、防风沙的破布衣物、探测器的滴滴声。文本：空气里悬浮的铁锈味与为半瓶纯净水暴起的杀机。",
        aestheticEn: "Focus: Endless trash mountains + Rusted spikes + Rags + Metal detector beeps. Text: Rust dust in the air and sudden murder over half a bottle of dirty water.",
        runtime: "IF (在这个世界中暴露出一颗未腐败的旧时代完好电池或净水器) THEN (触发：百里之内拾荒群体的疯狂猎杀行动)。",
        runtimeEn: "IF (Revealing_an_Intact_Old-World_Battery_or_Purifier) THEN (Trigger: Frenzied manhunt by all scavengers within a 100-mile radius)."
      }
    },
    {
      id: "mercenary_state",
      name: "佣兵国度",
      nameEn: "Mercenary State / PMC Hegemony",
      def: "战争彻底商业化。没有保家卫国的军队，只有受雇于巨头公司的私人武装。",
      defEn: "War is fully commodified. No patriot armies, only Private Military Contractors (PMCs) hired by mega-corps.",
      core: "【换喻】明码标价的死亡与扣动扳机的外包合同 (Death with a barcode and outsourced trigger-pulls)",
      coreEn: "【Metonymy】Bullets billed per trigger pull; patriotism replaced by profit margins.",
      logic: "【血酬交易法则】：M4（宏大叙事与正义）完全失效，取代它的是 M4（账单与合同）。主体的 M5（杀戮行动）被异化为 KPI 结算，M6（阵亡）仅仅代表违约金的赔付条件。",
      logicEn: "[Blood-Price Exchange Law]: M4 (Patriotism/Justice) is dead, replaced by M4 (The Contract). M1's M5 (Killing) is alienated into KPI. M6 (KIA) just triggers a payout clause.",
      patch: {
        mechanics: "基础战团协议 + [忠诚维系 = 纯资金结转; 伦理限度 = 视合同金额而定]",
        mechanicsEn: "Base_PMC + [Loyalty_Tether = Funds_Transfer_Only; Ethical_Limit = Defined_By_Contract_Value]",
        aesthetic: "聚焦：模块化战术装具、无人机航带、多国语言混杂频段、发薪日的狂欢与宿醉。文本：专业且冷酷的战术指令与支票上的零。",
        aestheticEn: "Focus: Modular tactical gear + Drone swarms + Multi-lingual comms + Payday binges. Text: Cold, professional tactical jargon overlaid on wire transfers.",
        runtime: "IF (雇主账户资金被冻结或尾款未到) THEN (立刻触发：战线当场停火，甚至直接将枪口对准前雇主进行索赔)。",
        runtimeEn: "IF (Employer_Funds_Frozen_or_Deposit_Fails) THEN (Immediate_Trigger: Mid-battle ceasefire, followed by turning guns on the former employer for extraction)."
      }
    },
    {
      id: "refugee_camp",
      name: "难民营",
      nameEn: "Refugee Camp / Stateless Zone",
      def: "临时搭建却成为永恒的塑料布网栏。挤满失去“国家身份”的生灵，等待不可知的命运。",
      defEn: "Temporary tarps becoming eternal prisons. Packed with stateless ghosts waiting for unknowable fates.",
      core: "【换喻】悬置的法权与被剥除国籍的透明人 (Suspended ontology and stateless invisible ghosts)",
      coreEn: "【Metonymy】To the world, you are a statistic; to the camp, you are a ration slot in the mud.",
      logic: "【阿甘本裸命法则】：M4（主权国家）将这群人踢出了律法保护。他们成为了“赤裸生命”（M1完全被剥除象征外衣），他们怎么死（M6）都不会引起法律的共鸣，只剩生物学的求生驱力。",
      logicEn: "[Agamben's Bare Life Law]: M4 (Sovereign State) excludes them from legal protection. M1 is reduced to 'Bare Life' stripped of all symbolic clothing. Their M6 (Death) resonates purely biologically, not legally.",
      patch: {
        mechanics: "基础流亡协议 + [象征界身份 = 归零; 生存资源获取 = 乞讨/极度内卷]",
        mechanicsEn: "Base_REFUGEE + [Symbolic_Identity = Zero; Resource_Acquisition = Begging/Vicious_In-fighting]",
        aesthetic: "聚焦：漫延无尽的帐篷海洋、铁丝网外的冷漠维和部队、泥泞的泥坑、排队领水的空洞眼神。文本：无根飘零的绝望与极度拥挤中爆发的恶毒撕咬。",
        aestheticEn: "Focus: Endless seas of tarps + Indifferent UN guards + Mud + Vacant stares at water lines. Text: Rootless despair colliding with venomous overcrowding.",
        runtime: "IF (发生饥饿或传染病蔓延) THEN (必须触发：外部势力物理封死出路，并以人道主义名义坐视内部互屠生灭)。",
        runtimeEn: "IF (Famine_or_Plague_Breaks_Out) THEN (Must_Trigger: External powers weld the gates shut, watching them perish under the guise of 'humanitarian containment')."
      }
    },
    {
      id: "mobile_city",
      name: "移动都市",
      nameEn: "Mobile City / Predatory Engines",
      def: "掠食大都市（Mortal Engines）。城市建立在巨型履带或气囊上，如同巨兽般在荒野中互相追逐与吞噬。",
      defEn: "Mortal Engines. Mega-cities on giant treads or blimps, hunting and devouring each other across the wastes.",
      core: "【换喻】社会达尔文主义的巨构化实体 (Social Darwinism materialized as architectural mega-beasts)",
      coreEn: "【Metonymy】The literal machine of society chewing through the earth and its smaller neighbors.",
      logic: "【市政捕食法则】：M4（市政法）异化为纯粹的大鱼吃小鱼公式。M5（狩猎）不仅是个人的行为，而是整个城市引擎保持运转（避免全城 M6）的唯一动力。停下即是死亡。",
      logicEn: "[Municipal Predation Law]: M4 mutates into pure macro engine physics. M5 (Hunting) isn't individual—the entire city must chase to feed its furnace (avoiding M6). Stopping equals death.",
      patch: {
        mechanics: "基础游动捕食协议 + [城市动能衰减 = 致命; 资源转化手段 = 拆解吞噬]",
        mechanicsEn: "Base_MOBILE + [Kinetic_Decay = Lethal; Resource_Conversion = Disassembly_Devouring]",
        aesthetic: "聚焦：遮天蔽日的排气黑烟、震耳欲聋的地质撕裂声、巨大的城墙履带、被碾成粉末的小城镇遗骸。文本：重金属摩擦的宏大交响与蒸汽轰鸣。",
        aestheticEn: "Focus: Sun-blocking exhaust clouds + Deafening earth-tearing + Mega-treads crushing towns. Text: The grand symphony of grinding heavy metal and roaring steam.",
        runtime: "IF (城市侦测到小型定居点或引擎开始熄火) THEN (触发：全城进入狂热的加速掠食状态，撕裂前方一切)。",
        runtimeEn: "IF (Small_Settlement_Detected_or_Engine_Stalling) THEN (Trigger: City-wide frenzied acceleration to tear apart and swallow whatever is ahead)."
      }
    },
    {
      id: "underground_resistance",
      name: "地下抵抗军",
      nameEn: "Underground Resistance",
      def: "隐藏在下水道、废土洞穴或反叛信道中的游击网络。依靠信仰和牺牲在庞大强权下凿光。",
      defEn: "Guerrilla networks hiding in sewers, caves, or shadow nets. Chipping at colossal tyranny through faith and sacrifice.",
      core: "【换喻】极限黑暗中的火种与以肉身对抗铁幕的悲壮 (Sparks in the abyss and the tragic clash of flesh against the Iron Curtain)",
      coreEn: "【Metonymy】The virus within the system. M1 weaponizing its own lack against the Big Other.",
      logic: "【牺牲超载法则】：M4（地面政权）的压迫力已达顶峰，主体 M1 承认自身的绝对弱势。在这里，主体的 M3（欲望）就是破坏 M4，而 M6（殉道）不再是失败，而是唤醒他人的最高级 M5（代码）。",
      logicEn: "[Sacrificial Overload Law]: Facing peak M4 compression, M1's sole M3 (Desire) is the destruction of M4. M6 (Martyrdom) is not defeat; it is the ultimate M5 (Action) intended to viral-infect the masses.",
      patch: {
        mechanics: "基础游击协议 + [资源极度剥笋 = 破衣烂衫级; 信仰穿透力 = 爆表]",
        mechanicsEn: "Base_GUERRILLA + [Resource_Scarcity = Rags_Level; Ideological_Piercing = MAX]",
        aesthetic: "聚焦：微弱的防风打火机火光、墙面加密涂鸦、滴水的回音地下管道、随时引爆的自制C4。文本：屏住呼吸的隐忍与按下引爆器时的视死如归。",
        aestheticEn: "Focus: Flickering Zippo lights + Encrypted graffiti + Dripping sewers + Homemade C4. Text: Breath-holding endurance detonating into suicidal, triumphant roars.",
        runtime: "IF (安全屋的位置被地表清剿部队锁定) THEN (必然触发：留守者拉响光荣弹掩护主机撤退的壮烈结语)。",
        runtimeEn: "IF (Safehouse_Location_Locked_by_Surface_Sweep) THEN (Must_Trigger: The rearguard pulling the pin to buy time for the core to escape)."
      }
    }
  ]
};
