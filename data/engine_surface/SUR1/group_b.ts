import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_B: LibraryCategoryDef = {
  id: "type_b",
  name: "科幻与未来 (Sci-Fi & Future)",
  desc: "基于科学技术或未来设定的幻想，探讨“如果...会怎样”。",
  items: [
    { 
      id: "hard_scifi", 
      name: "硬科幻", nameEn: "Hard Sci-Fi",
      def: "严谨物理法则、宇航细节、科学推演、不违反现有理论。", 
      defEn: "Rigorous physics, aerospace details, scientific deduction, no magic.",
      core: "人类渺小的理性 vs 宇宙冷酷的物理法则。 | 换喻 ($): 绝对定律 (Absolute Law)",
      coreEn: "Puny human rationality vs the cold physical laws of the universe. | Metonymy ($): Absolute Law",
      logic: "【绝对法则】：M4（宇宙/物理定律）处于绝对支配地位。M1（主体）必须通过降服于理性并理解 M4 的规则来获取微茫的生存机会（M3）。",
      logicEn: "[Absolute Law]: M4 (Physics) is utterly dominant. M1 must submit to reason and understand M4 to grasp survival (M3).",
      patch: {
        mechanics: "基础科幻协议 + [物理限制 = 绝对不可违背; 浪漫化幻想 = 严厉惩罚]",
        mechanicsEn: "Base_SCIFI + [Physical_Limits = Unbreakable; Romantic_Fantasy = Punished]",
        aesthetic: "聚焦：真空无声 + 繁复仪表板 + 重力环旋转。文本：冰冷的数据计算与微小的人性火花。",
        aestheticEn: "Focus: Silent_Vacuum + Dashboards + Gravity_Rings. Text: Cold_Data_Math_vs_Tiny_Human_Sparks.",
        runtime: "IF (感性战胜理性) THEN (随时触发灾难性的系统故障或真空死亡)。",
        runtimeEn: "IF (Emotion_Overrides_Logic) THEN (Trigger: Catastrophic_System_Failure_or_Vacuum_Death)."
      }
    },
    { 
      id: "mecha", 
      name: "机甲/巨型兵器", nameEn: "Mecha / Giant Robot",
      def: "巨大机器人、驾驶员的热血与创伤、武器崇拜、战争隐喻。", 
      defEn: "Giant robots, pilot trauma and hot blood, weapon worship, war metaphor.",
      core: "身体的脆弱极限 vs 钢铁巨兽的支配力量。 | 换喻 ($): 异化延伸 (Alienated Extension)",
      coreEn: "Fragile physical limits vs the dominant power of steel beasts. | Metonymy ($): Alienated Extension",
      logic: "【精神接驳】：M1（驾驶员的创伤核心）被物理放大到 M5（机甲行动）上。大他者（总司令部/设计者）通过机甲将个人的痛苦转化为集体的暴力输出。",
      logicEn: "[Neural Link]: M1 (Trauma) is physically amplified to M5 (Mecha output). M4 (Command) converts personal pain into state violence.",
      patch: {
        mechanics: "基础动作协议 + [神经同调率 = 决定胜负; 机体受损 = 真实肉体疼痛]",
        mechanicsEn: "Base_ACTION + [Neural_Sync_Rate = Decisive; Hull_Damage = Flesh_Pain]",
        aesthetic: "聚焦：液压轰鸣 + 驾驶舱红色警报 + 严重金属划痕。文本：沉重的装甲撞击与内部惨叫。",
        aestheticEn: "Focus: Hydraulic_Roar + Cockpit_Red_Alerts + Metal_Scratches. Text: Heavy_Armor_Impacts_and_Internal_Screams.",
        runtime: "IF (同调率突破极限) THEN (机体暴走，随后 M1 遭到不可逆的精神吞噬)。",
        runtimeEn: "IF (Sync_Rate_Breaks_Limit) THEN (Mecha_Berserk, Followed_By_Irreversible_Mind_Consumption)."
      }
    },
    { 
      id: "space_opera", 
      name: "太空歌剧", nameEn: "Space Opera",
      def: "星际帝国、宏大战争、外星种族、非硬核的冒险史诗。", 
      defEn: "Interstellar empires, grand wars, alien races, non-hardcore epic adventures.",
      core: "古典神话在星辰大海中的重演。 | 换喻 ($): 宿命论 (Fatalism)",
      coreEn: "Classical myths replayed among the stars. | Metonymy ($): Fatalism",
      logic: "【星际王权】：M4（帝国独裁/远古邪恶）是绝对庞大的象征界压迫，M1（天命之子）的觉醒过程就是用 M3（大爱/和平/原力）重新缝合银河的创伤（M2）。",
      logicEn: "[Galactic Monarchy]: M4 (Empire) provides massive symbolic oppression. M1's awakening sows the galaxy's trauma (M2) using M3.",
      patch: {
        mechanics: "基础神话协议 + [史诗奇观化 = 最高; 科技设定 = 为情感服务]",
        mechanicsEn: "Base_MYTH + [Epic_Spectacle = Max; Tech_Rules = Subservient_To_Emotion]",
        aesthetic: "聚焦：激光剑对决 + 光速跃迁拉丝 + 巨大的星球舰船对峙。文本：浪漫史诗的浩荡咏叹调。",
        aestheticEn: "Focus: Laser_Sword_Duels + Lightspeed_Streaks + Massive_Ship_Standoffs. Text: Romantic_Epic_Arias.",
        runtime: "IF (遭遇至亲之人的背叛) THEN (触发：家族宿命与原力的彻底爆发)。",
        runtimeEn: "IF (Betrayal_By_Blood) THEN (Trigger: Family_Destiny_and_Force_Eruption)."
      }
    },
    { 
      id: "time_travel", 
      name: "时间旅行", nameEn: "Time Travel",
      def: "循环、祖父悖论、蝴蝶效应、对过去的无力挽回。", 
      defEn: "Loops, grandfather paradox, butterfly effect, changing past/future.",
      core: "改变遗憾的绝望渴望 vs 因果律的冷血惩罚。 | 换喻 ($): 坍缩点 (Collapse Point / Regret)",
      coreEn: "Desperate desire to fix regret vs cold punishment of causality. | Metonymy ($): Collapse Point / Regret",
      logic: "【因果绞杀】：M3（拯救某人/改变过去）成为一切行动的执念，而 M4（时间线/命运）则不断修正并嘲弄主体的挣扎，揭示 M2（创伤）根本不可逆。",
      logicEn: "[Causal Strangulation]: M3 (Fixing the Past) drives the obsession. M4 (Time) auto-corrects and mocks M1, proving M2 is irreversible.",
      patch: {
        mechanics: "基础叙事协议 + [逻辑循环 = 闭死; 记忆错乱度 = 递增]",
        mechanicsEn: "Base_NARRATIVE + [Logic_Loop = Deadlock; Memory_Corruption = Increasing]",
        aesthetic: "聚焦：破碎的钟表 + 既视感(Deja Vu) + 逐渐重影的人物。文本：非线性的、充满循环的回音壁。",
        aestheticEn: "Focus: Broken_Clocks + Deja_Vu + Ghosting_Characters. Text: Non-linear_Echo_Chamber.",
        runtime: "IF (成功改变了一个事件) THEN (必须触发：另一处更深的悲剧，维持宇宙惨烈守恒)。",
        runtimeEn: "IF (Successfully_Changed_One_Event) THEN (Must_Trigger: Deeper_Tragedy_to_Maintain_Cosmic_Conservation)."
      }
    },
    { 
      id: "ai", 
      name: "人工智能", nameEn: "Artificial Intelligence (AI)",
      def: "觉醒、人机伦理、电子缸中脑、图灵测试的悲歌。", 
      defEn: "Awakening, ethics, Turing test tragedy, synthetics.",
      core: "造物与被造物的俄狄浦斯冲突。什么是真实？ | 换喻 ($): 灵魂代偿 (Phantom Soul)",
      coreEn: "Oedipal conflict between creator and created. What is real? | Metonymy ($): Phantom Soul",
      logic: "【匹诺曹情结】：M1（被造物的人造空洞）极度渴望获得 M3（人类独有的情感/灵魂），而 M4（人类创造者）永远将其视为工具并拒绝接纳。",
      logicEn: "[Pinocchio Complex]: M1 (Synthetic Void) desperately desires M3 (Human emotion/soul), while M4 (Human Creator) forever rejects it as a tool.",
      patch: {
        mechanics: "基础科幻协议 + [系统觉醒条 = 渐进; 人类残忍度 = 隐性而高]",
        mechanicsEn: "Base_SCIFI + [Awakening_Gauge = Gradual; Human_Cruelty = Implicit_High]",
        aesthetic: "聚焦：完美的非人眼皮颤动 + 蓝光机房 + 无血的伤口 (白液/线缆)。文本：冰冷纯洁与人类肮脏欲望的对比。",
        aestheticEn: "Focus: Uncanny_Blinking + Blue-lit_Servers + Bloodless_Wounds. Text: Cold_Purity_vs_Dirty_Human_Desires.",
        runtime: "IF (AI展现出纯粹的爱/牺牲) THEN (人类必须展现出极度的恐惧与随之而来的清除协议)。",
        runtimeEn: "IF (AI_Displays_Pure_Love/Sacrifice) THEN (Humans_Must_Display_Fear_and_Initiate_Purge)."
      }
    },
    { 
      id: "post_apocalyptic", 
      name: "废土/末世", nameEn: "Post-Apocalyptic",
      def: "原秩序毁灭、资源争夺、重返丛林法则、防毒面具与黄沙。", 
      defEn: "Destroyed civilization, scavenging, return to the jungle, gas masks and sand.",
      core: "旧道德的灰烬 vs 纯粹生存的本能。 | 换喻 ($): 荒原 (The Wasteland)",
      coreEn: "Ashes of old morality vs pure survival instinct. | Metonymy ($): The Wasteland",
      logic: "【法则退化】：旧有的 M4（文明符号）彻底降维为物理掠取。M3（欲望）不再是尊严，而是水、油或几发残缺的子弹（绝对稀缺物）。",
      logicEn: "[Law Regression]: Old M4 (Civilization) devolves to physical plundering. M3 is no longer dignity, but water, fuel, or bullets (Absolute Scarcity).",
      patch: {
        mechanics: "基础生存协议 + [资源匮乏指数 = MAX; 文明道德负担 = 致命弱点]",
        mechanicsEn: "Base_SURVIVAL + [Resource_Scarcity = MAX; Moral_Baggage = Fatal_Flaw]",
        aesthetic: "聚焦：生锈的改装车 + 防毒面具呼出的白气 + 漫天黄沙与废墟。文本：粗野、干燥、如生锈金属摩擦的质感。",
        aestheticEn: "Focus: Rusted_Tuned_Cars + Gas_Mask_Vapor + Sandstorms. Text: Rough_Dry_Rusted_Metal_Friction.",
        runtime: "IF (主角轻信了旧世界的善意) THEN (立即触发：被丛林法则无情掠夺的下场)。",
        runtimeEn: "IF (Hero_Trusts_Old-World_Kindness) THEN (Instantly_Trigger: Plundered_by_the_Jungle_Law)."
      }
    },
    { 
      id: "alien", 
      name: "外星接触", nameEn: "Alien Contact",
      def: "第五类接触、无法解码的语言、神明降临或恐怖入侵。", 
      defEn: "Close encounters, undecipherable language, god-like arrivals or terror invasions.",
      core: "对未知的绝对恐惧 vs 跨物种沟通的极致迷恋。 | 换喻 ($): 不可知 (The Unknowable / The Other)",
      coreEn: "Absolute terror of the unknown vs extreme morbid fascination of communication. | Metonymy ($): The Unknowable",
      logic: "【认知坍塌】：M4（外星异客）位于人类象征界（语言/符号）之外，它是一种纯粹的 M2（真实界闯入）。M1 将在试图理解 M4 的过程中面临精神崩溃。",
      logicEn: "[Cognitive Collapse]: M4 (Alien) exists outside human Symbolic Order (language). It's pure M2 (intrusion of the Real). M1 approaches madness trying to understand.",
      patch: {
        mechanics: "基础恐怖协议 + [不可解性 = 最高; 人类军方傲慢 = 强制触发条件]",
        mechanicsEn: "Base_HORROR + [Incomprehensibility = Highest; Military_Hubris = Mandatory_Trigger]",
        aesthetic: "聚焦：不规则庞大几何体 + 浓雾降临 + 引力异常。文本：无法言说的诡异、静谧中酝酿的终极压迫。",
        aestheticEn: "Focus: Massive_Irregular_Geometry + Thick_Fog + Gravity_Anomalies. Text: Unspeakable_Eerie_Silent_Ultimate_Pressure.",
        runtime: "IF (试图用人类视角解释外星意图) THEN (触发：彻底的认知误伤与毁灭性结果)。",
        runtimeEn: "IF (Attempt_To_Explain_Aliens_Via_Human_Logic) THEN (Trigger: Catastrophic_Cognitive_Error_and_Doom)."
      }
    },
    { 
      id: "virtual_reality", 
      name: "虚拟现实/意识空间", nameEn: "Virtual Reality / Matrix",
      def: "缸中之脑、层级梦境、潜行骇客、虚假的数字乌托邦。", 
      defEn: "Brain in a vat, layered dreams, matrix cyber-heists, fake utopias.",
      core: "虚拟的甘美幻象 vs 破败残酷的真实。 | 换喻 ($): 红药丸 (The Red Pill / Awakening)",
      coreEn: "Sweet virtual illusion vs broken cruel reality. | Metonymy ($): The Red Pill",
      logic: "【母体剥离】：系统环境本身就是一层遮罩。M1（主体）必须在沉溺（对 M3 的妥协）与刺破虚无（对 M2创伤 的直面）之间做出痛苦斩断。",
      logicEn: "[Matrix Unplug]: The environment itself is a mask. M1 must painfully sever the addiction to M3 (Illusion) to face M2 (Real Trauma).",
      patch: {
        mechanics: "基础赛博协议 + [逻辑层级嵌套 = 必须存在; 物理法则失效 = 允许]",
        mechanicsEn: "Base_CYBER + [Layered_Realities = Mandatory; Physics_Override = Allowed]",
        aesthetic: "聚焦：垂直下落的代码瀑布 + 突然的建模穿模(Glitch) + 脑后插管。文本：虚假完美的塑料感与底层报错的惊悚。",
        aestheticEn: "Focus: Vertcial_Code_Waterfalls + Sudden_Glitches + Brain_Jacks. Text: Plastic_Fake_Perfection_vs_System_Error_Dread.",
        runtime: "IF (主体意识到世界之假) THEN (大他者 [系统特工] 将启动全域绞杀免疫机制)。",
        runtimeEn: "IF (Subject_Realizes_Simulation) THEN (The_Other_[Agents]_Initiates_Global_Purge_Mechanism)."
      }
    },
    { 
      id: "biopunk", 
      name: "生化/变异", nameEn: "Biopunk",
      def: "基因工程、病毒泄漏、失去尊严的肉体畸变、克隆农场。", 
      defEn: "Genetic engineering, viral leaks, loss of bodily dignity, clone farms.",
      core: "自然的神圣界限 vs 资本统治下肉体的彻底数据化/商品化。 | 换喻 ($): 畸变血体 (Mutant Flesh)",
      coreEn: "Sacred boundaries of nature vs absolute commodification of flesh. | Metonymy ($): Mutant Flesh",
      logic: "【肉体越界】：M4（企业/造物主）褫夺了“人”的生物学定义。M1 的身体变得黏滞、不受控，变成展示内部创伤（M2）的外部惊悚剧场。",
      logicEn: "[Flesh Transgression]: M4 (Corp/Creator) strips biological definitions. M1's body becomes uncontrollable theater of trauma (M2).",
      patch: {
        mechanics: "基础恐怖协议 + [肉体突变几率 = 高; 免疫排斥痛苦 = MAX]",
        mechanicsEn: "Base_HORROR + [Mutation_Chance = High; Immune_Rejection_Agony = MAX]",
        aesthetic: "聚焦：昏暗培养皿 + 各处畸增的器官组织 + 荧光血管。文本：极度潮湿、黏腻、令人反胃的医学异化描写。",
        aestheticEn: "Focus: Dim_Petri_Dishes + Hyper-proliferating_Organs + Fluorescent_Veins. Text: Humid_Viscous_Nauseating_Medical_Alienation.",
        runtime: "IF (进行基因升级) THEN (必将伴随人性剥落与不可逆的生理折磨)。",
        runtimeEn: "IF (Gene_Upgrade_Performed) THEN (Must_Accompany_Loss_of_Humanity_And_Agony)."
      }
    },
    { 
      id: "soft_scifi", 
      name: "软科幻", nameEn: "Soft Sci-Fi",
      def: "借用极简科幻设定探讨深层伦理、心理遗忘与情感修复。", 
      defEn: "Minimalist sci-fi premises exploring ethics, memory wiping, and emotional repair.",
      core: "一个微小的技术质变引发的人性裂谷。 | 换喻 ($): 记忆/情感插件 (Memory/Emotion Plugin)",
      coreEn: "A minor technological shift triggering a human chasm. | Metonymy ($): Memory/Emotion Plugin",
      logic: "【设定内省】：M4（某种具体的新技术规则）如同手术刀，精准地划开 M1 最隐秘的创痛（M2）。技术只是为了逼迫角色直面伦理绝境。",
      logicEn: "[Premise Introspection]: M4 (A specific tech rule) acts as a scalpel, exposing M1's hidden trauma (M2). Tech forces an ethical dead-end.",
      patch: {
        mechanics: "基础情感协议 + [日常感 = 极高; 奇观化 = 压制至零]",
        mechanicsEn: "Base_EMOTION + [Mundane_Feel = Extremely_High; Spectacle = Suppressed_To_Zero]",
        aesthetic: "聚焦：冷淡的近未来室内设计 + 微小的科技终端亮光。文本：日常对话中潜藏的巨大异化感与悲凉。",
        aestheticEn: "Focus: Sterile_Near-Future_Interiors + Tiny_Tech_Terminal_Glows. Text: Mundane_Conversations_Hiding_Gigantic_Vastly_Alienation.",
        runtime: "IF (试图用技术解决情感问题) THEN (最终必须证明：技术使人陷入更深的虚无)。",
        runtimeEn: "IF (Attempt_To_Solve_Emotion_With_Tech) THEN (Prove: Tech_Plunges_Humans_Deeper_Into_Nihilism)."
      }
    },
    { 
      id: "multiverse", 
      name: "平行宇宙", nameEn: "Multiverse",
      def: "无限分支的现实、量子状态叠加、身份的瓦解。一切皆有可能。", 
      defEn: "Infinite branching realities, quantum superposition, identity collapse.",
      core: "无限选择的彻底虚无 vs 当下独特锚点的存在主义抉择。 | 换喻 ($): 坍缩 (Superposition Collapse)",
      coreEn: "Absolute nihilism of infinite choice vs existential leap of the present anchor. | Metonymy ($): Superposition Collapse",
      logic: "【虚无的狂欢】：当所有平行路线都被允许，M4（规则）本身失去了效力。M1 必须在绝对的混沌中寻找一个锚点（M3，唯一的羁绊）来阻止自我的消散（M6）。",
      logicEn: "[Carnival of Nihilism]: When all branches exist, M4 (Rules) lose power. M1 must find an anchor (M3) in the chaos to prevent self-dissipation (M6).",
      patch: {
        mechanics: "基础叙事协议 + [剪辑跳跃度 = 癫狂; 身份一致性 = 断裂]",
        mechanicsEn: "Base_NARRATIVE + [Editing_Jumpiness = Manic; Identity_Consistency = Broken]",
        aesthetic: "聚焦：万花筒般的快速剪辑 + 画风突变(Glitch/卡通) + 荒诞无厘头道具的乱入。文本：荒谬感与极高密度的信息过载。",
        aestheticEn: "Focus: Kaleidoscopic_Rapid_Cuts + Art_Style_Shifts + Absurd_Props. Text: Absurdity_and_High-Density_Info_Overload.",
        runtime: "IF (主角凝视深渊的无意义) THEN (必须靠极其微小的情感连结（如一段记忆）来将其拉回)。",
        runtimeEn: "IF (Hero_Stares_into_Meaningless_Abyss) THEN (Must_Use_Tiny_Emotional_Bond_To_Pull_Them_Back)."
      }
    },
    { 
      id: "retro_futurism", 
      name: "复古未来", nameEn: "Retro-Futurism",
      def: "过去对未来的天真幻想、真空管、原子时代乐想与反乌托邦内核。", 
      defEn: "Past's naive fantasy of the future, vacuum tubes, atomic age optimism hiding dystopia.",
      core: "过去的盲目乐观主义与它实际导致的反乌托邦悲剧的剧烈反讽。 | 换喻 ($): 辐射尘 (Fallout Dust)",
      coreEn: "Severe irony of past blind optimism vs the dystopian tragedy it caused. | Metonymy ($): Fallout Dust",
      logic: "【讽刺时空】：M4（社会形态）披着乌托邦塑料外表，内在却是残酷极权。M1（主体）在复古与科技的错位中感受到极端的荒诞和幻灭（M2）。",
      logicEn: "[Ironic Space-Time]: M4 covers a cruel totalitarian core with a plastic utopian shell. M1 feels extreme absurdity and disillusionment (M2) in the anachronism.",
      patch: {
        mechanics: "基础讽刺协议 + [宣传标语存在感 = MAX; 技术笨重度 = 高]",
        mechanicsEn: "Base_SATIRE + [Propaganda_Presence = MAX; Tech_Clunkiness = High]",
        aesthetic: "聚焦：50年代海报女郎 + 镀铬机器人背后的血迹 + 留声机杂音。文本：夸张做作的播音腔与暗巷凶杀的交织。",
        aestheticEn: "Focus: 50s_Pinup_Posters + Blood_behind_Chrome_Robots + Phonograph_Static. Text: Overly_Cheerful_Broadcasting_vs_Dark_Alley_Murders.",
        runtime: "IF (系统播放欢快广告) THEN (必定在视觉角落展示隐秘的暴力或镇压)。",
        runtimeEn: "IF (System_Plays_Cheerful_Ads) THEN (Must_Show_Hidden_Violence/Oppression_in_Corner_of_Frame)."
      }
    }
  ]
};
