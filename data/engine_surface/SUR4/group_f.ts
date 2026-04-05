import { LibraryCategoryDef } from '../../../types';

export const SUR4_GROUP_F: LibraryCategoryDef = {
  id: "soc_utopia",
  name: "6. 乌托邦与实验 (Utopia & Experiment)",
  nameEn: "Utopia & Experiment",
  desc: "试图构建完美社会，堵死所有意义缺失的漏洞。M4（大他者阻断）表现为极度洁癖的强迫症与压抑到极致后的反噬爆发。",
  defEn: "Attempts at building a perfect society, sealing all ontological gaps. M4 manifests as hyper-neurotic hygiene and the explosive backlash resulting from absolute repression.",
  items: [
    {
      id: "eco_utopia",
      name: "生态乌托邦",
      nameEn: "Eco-Utopia / Solarpunk",
      def: "科技与自然完美融合，返璞归真。高度自律的道德社区，万物和谐共生。",
      defEn: "Solarpunk. Perfect fusion of tech and nature. Highly disciplined moral communities in harmony.",
      core: "【换喻】闪耀着阳光的透明牢笼与被阉割的破坏欲 (Sunlit transparent cages and the castration of destructive drives)",
      coreEn: "【Metonymy】The tyranny of the 'Green'; harmony enforced through the surgical removal of human grit.",
      logic: "【光合作用压迫】：M4（生态平衡）要求绝对的清洁、和谐与克制。主体的 M3（包含破坏与消耗成分的原始欲望）被归类为“病毒行为”，必须被系统同化。这里没有罪犯，只有需要接受心理“治疗”的病患。",
      logicEn: "[Photosynthetic Oppression]: M4 (Eco-Balance) demands absolute cleanliness and restraint. M1's M3 (primal consuming desire) is flagged as 'viral'. There are no criminals here, only patients needing 'therapy'.",
      patch: {
        mechanics: "基础自然协议 + [自律监控约束 = 软性高压; 负面情绪容忍度 = 几近于无]",
        mechanicsEn: "Base_NATURE + [Self-Discipline_Monitor = Soft_High_Pressure; Negative_Emotion_Tolerance = Near_Zero]",
        aesthetic: "聚焦：被植物覆盖的流线型白塔、彩色玻璃光影、微笑互助的人群、绝对没有垃圾的街道。文本：一种因为过度明亮祥和而产生的晕眩刺痛感。",
        aestheticEn: "Focus: Vine-draped white towers + Stained glass sunbeams + Smiling helpers. Text: A vertiginous sting caused by excessive, abrasive serenity.",
        runtime: "IF (在社区中发泄暴力或故意破坏一片树叶) THEN (会被温柔地推上手术台，进行根除攻击性的额叶调整手术)。",
        runtimeEn: "IF (Displaying_Violence_or_Intentionally_Destroying_a_Leaf) THEN (Gently placed on an operating table for lobotomy-lite aggression-removal)."
      }
    },
    {
      id: "direct_democracy",
      name: "激进民主",
      nameEn: "Direct Democracy",
      def: "绝对的雅典式公投。没有官僚，全体网民决定一切决议甚至别人的生死。",
      defEn: "Absolute Athenian mob rule. No bureaucrats; netizens vote on everything, including life and death.",
      core: "【换喻】群盲的狂欢与暴君“多数派”的绝对意志 (The carnival of the blind mob and the absolute will of the 'Majority' tyrant)",
      coreEn: "【Metonymy】Tyranny crowd-sourced. The guillotine operated by push-notifications.",
      logic: "【多数的无面暴政】：M4 变成了一个不断闪烁的“占比百分比”。个体的 M5（异见行动）一旦与 51% 的主流不符，立刻会被合法的 M6（多数判决物理铲除）。没有上诉机制。",
      logicEn: "[Faceless Mob Tyranny]: M4 becomes a flickering 'Voting Percentage'. If M1's M5 (dissent) diverges from the 51%, it triggers immediate legal M6 (execution by majority). Zero appeal.",
      patch: {
        mechanics: "基础公投协议 + [情绪传染速率 = 瞬时; 判决缓冲期 = 0]",
        mechanicsEn: "Base_REFERENDUM + [Emotional_Contagion_Rate = Instant; Verdict_Buffer_Time = 0]",
        aesthetic: "聚焦：手机屏幕上跳动的赞成/反对数字红绿条、狂热聚集的虚拟或现实广场、被无情驱逐的少数派背影。文本：键盘敲击声汇聚成海啸般的死刑判决。",
        aestheticEn: "Focus: Flickering red/green app polls + Frenzied plazas + Backs of the exiled minority. Text: The clatter of keyboards merging into a tsunami of death sentences.",
        runtime: "IF (个别理智者的辩解激怒了正在情绪浪头上的群体) THEN (触发：公投支持率秒速通过，将其当场施以极刑)。",
        runtimeEn: "IF (Voice_of_Reason_Angers_the_Emotional_Mob) THEN (Trigger: Approval rating hits 99% in seconds, executing the subject on the spot)."
      }
    },
    {
      id: "anarcho_syndicalism",
      name: "无政府工团",
      nameEn: "Anarcho-Syndicalism",
      def: "由工人自治行会拼接而成的社会矩阵，没有中央政府，极度扁平化与去中心。",
      defEn: "Guild/Union autonomous matrix. Zero central government, extremely flat and decentralized.",
      core: "【换喻】永无止境的辩论会与精密咬合的轴承 (Endless debate councils and the tightly meshed gears)",
      coreEn: "【Metonymy】Utopia strangled by its own endless committees and consensus overhead.",
      logic: "【网状制衡法则】：虽然消灭了顶部的 M4，但横向的牵制编织出了极其细密的 M4（公序良俗网）。任何 M5（越界大动作）都需要极其繁琐的横向调解，效率低下导致了对危机极度脆弱。",
      logicEn: "[Mesh Gridlock Law]: Top-down M4 is destroyed, but horizontal constraints weave an ultra-dense M4 (Consensus Web). Any M5 (big action) requires agonizing horizontal mediation, breeding fatal inefficiency against crises.",
      patch: {
        mechanics: "基础工团协议 + [决策消耗周期 = 极长; 互助纠察面 = 全覆盖]",
        mechanicsEn: "Base_SYNDICATE + [Decision_Cycle = Painfully_Long; Mutual_Surveillance_Net = Complete]",
        aesthetic: "聚焦：高挂的红黑旗帜、喧闹的工厂大会、缺少统一部署导致的奇怪基础设施断层、带着扳手辩论的工人。文本：充满人情味但嘈杂无序的铁锤敲击声。",
        aestheticEn: "Focus: Red/Black flags + Boisterous factory councils + Potholes from lack of central planning. Text: Warm, chaotic clanking of hammers and shouting debate.",
        runtime: "IF (遭遇外部果断极其锋利的极权攻击) THEN (触发：陷入无休止且可悲的抗战联合决议导致战线崩溃)。",
        runtimeEn: "IF (Attacked_by_a_Decisive_Totalitarian_Force) THEN (Trigger: Paralyzed by endless coalition votes, leading to rapid front-line collapse)."
      }
    },
    {
      id: "scientific_dictatorship",
      name: "科学专政",
      nameEn: "Scientific Dictatorship",
      def: "基于纯粹逻辑、优生学和冰冷计算运转。为了物种长远的“真理”，没有任何实验伦理限制。",
      defEn: "Run by pure logic, eugenics, and cold calculation. For the 'Truth' and long-term tech tree, zero ethical boundaries exist.",
      core: "【换喻】手术刀切除的是情感盲肠 (The scalpel removing the appendix of emotion)",
      coreEn: "【Metonymy】Ethics as a rounding error. Humanity treated as a Petri dish.",
      logic: "【真理覆盖法则】：M4（科学真理）超越了所有的政治与信仰。对于 M4 来说，M1 主体只是“耗材/样本”。主体的痛苦（M2）不仅被无视，甚至被视为测量受压极限的有趣数据。",
      logicEn: "[Truth Override Law]: M4 (Scientific Truth) transcends politics and faith. M1 is merely a 'consumable sample'. Trauma (M2) is ignored or treated as fascinating data on stress limits.",
      patch: {
        mechanics: "基础实验协议 + [科技突破权重 = 绝对; 伦理损失判定 = 0]",
        mechanicsEn: "Base_EXPERIMENT + [Tech_Breakthrough_Weight = Absolute; Ethical_Loss_Value = 0]",
        aesthetic: "聚焦：苍白的无菌室、令人战栗的巨大离心机、泡在防腐剂里的畸变器官、冷漠推眼镜的白大褂。文本：完全不带一丝恶意的残酷剥离。",
        aestheticEn: "Focus: Pale sterile rooms + Giant centrifuges + Mutated organs in formalin jars. Text: Unflinching, perfectly polite horrific vivisection.",
        runtime: "IF (某组实验体的毁灭能够带来0.01%的理论突破进展) THEN (强制触发：毫无情绪波动的批量销毁与记录归档)。",
        runtimeEn: "IF (Destroying_A_Batch_Yields_0.01%_Theoretical_Progress) THEN (Force_Trigger: Emotionless mass-cull, sweep, and log it to archives)."
      }
    },
    {
      id: "artist_colony",
      name: "艺术家公社",
      nameEn: "Artist Colony",
      def: "反建制的极致乌托邦。只有追求绝对自由与美的疯狂灵魂，性、致幻药物与荒诞的感性统治一切。",
      defEn: "Anti-establishment utopia. Madness, sex, hallucinogens, and art rule. Logic is a sin.",
      core: "【换喻】绚烂画布底下的精神崩溃与深渊 (The mental breakdown and abyss beneath the resplendent canvas)",
      coreEn: "【Metonymy】Drowning in the juice of freedom. The ecstasy that burns the nervous system to ash.",
      logic: "【感性超载法则】：彻底砸碎了理性的 M4 锁扣。系统的 M3（欲望流）完全没有阀门约束，导致主体 M1 迅速被过量的多巴胺与灵感洪流冲垮，M0（拓扑）处于永远的解体高潮状态。",
      logicEn: "[Sensory Overload Law]: The Rational M4 lock is smashed. M3 (Desire flow) has zero valves. M1 is instantly swamped by dopamine and mania, M0 remaining in a perpetual state of ecstatic dissolution.",
      patch: {
        mechanics: "基础放纵协议 + [理性结构 = 濒危; 致幻沉溺度 = 满点]",
        mechanicsEn: "Base_DIONYSIAN + [Rational_Structure = Endangered; Hallucinogenic_Drowning = MAX]",
        aesthetic: "聚焦：融化的钟表、颜料与呕吐物混合的画布、赤身裸体的狂舞、不断变换色彩的液态建筑。文本：没有逻辑主语的疯狂呓语和极致的感官刺痛。",
        aestheticEn: "Focus: Melting clocks + Canvas mixed with paint and vomit + Naked rave dancing. Text: Mad ravings without logical subjects and extreme sensory sting.",
        runtime: "IF (主体试图建立常规的生活作息或储蓄计划) THEN (会被指控为“平庸的叛徒”，用致幻剂强行洗脑回归狂欢)。",
        runtimeEn: "IF (Attempting_to_Establish_Routine_or_Savings) THEN (Accused as a 'Mediocre Traitor', force-fed hallucinogens to regress back into the rave)."
      }
    },
    {
      id: "religious_utopia",
      name: "信仰之城",
      nameEn: "Religious Utopia / Theocracy of Purity",
      def: "原教旨清教徒的绝对纯洁城邦。不允许有一丝罪恶和阴暗的想法，人们生活在对降临的预支喜悦中。",
      defEn: "Puritanical city of absolute purity. No sin or dark thoughts allowed; living in the preemptive joy of the Rapture.",
      core: "【换喻】表面上擦得锃亮的光环与地下室发酵的浓烈恶意 (The gleaming halo above and the fiercely fermenting malice in the basement)",
      coreEn: "【Metonymy】The brighter the light of the Lord, the darker and more perverse the shadows cast.",
      logic: "【阴影反噬法则】：M4（神圣乌托邦属性）不允许 M1 有任何缺失，强行填满。但人类内置的 M2 阴暗面无法被消灭，只能被强行压抑，从而导致任何轻微的越界都会引爆海啸般变态的破坏欲（M5倒错）。",
      logicEn: "[Shadow Backlash Law]: M4 (Divine Utopia) violently fills all of M1's lacks. The repressed human shadow (M2) ferments, meaning any slight transgression detonates a tsunami of perverted destructive drive (Inverted M5).",
      patch: {
        mechanics: "基础纯净协议 + [道德压强 = 破碎级; 底层溃烂隐蔽度 = 极高]",
        mechanicsEn: "Base_PURITY + [Moral_Pressure = Shattering; Underground_Rot_Concealment = Extreme]",
        aesthetic: "聚焦：完美的白色唱诗班长袍、一尘不染的石板路、极其僵硬的善良微笑、夜晚门缝里渗透出的隐秘血水。文本：赞美诗的合唱掩盖住了骨骼被折断的闷响。",
        aestheticEn: "Focus: Perfect white choir robes + Spotless cobblestone + Rigid 'friendly' smiles + Blood seeping under doors at night. Text: Hymns masking the muffled snap of bones.",
        runtime: "IF (表面纯洁的信徒独处并且面临微小的诱惑) THEN (极大概率触发：压抑释放导致的难以名状的残忍犯罪狂热)。",
        runtimeEn: "IF (A_Pure_Believer_is_Alone_and_Faces_Minor_Temptation) THEN (High_Probability_Trigger: Repression blow-out leading to unspeakable, frenzied cruel crimes)."
      }
    },
    {
      id: "libertarian_sea",
      name: "海上自由城",
      nameEn: "Seasteading / Anarcho-Capitalist Utopia",
      def: "不受任何主权管辖的加密公海飞地。没有税收与公法，只有自由合同和“我的地盘我做主”。",
      defEn: "Unregulated crypto-enclaves on the high seas. No taxes, no public law. Only private contracts and NAP (Non-Aggression Principle) violations.",
      core: "【换喻】绝对自由的下限探底与私人武装的契约碰撞 (Probing the bottom line of absolute freedom and collisions of private PMCs)",
      coreEn: "【Metonymy】Ancap paradise; freedom measured solely in Bitcoin and ammunition.",
      logic: "【合同丛林法则】：传统的国家 M4 退位，取而代之的是冰冷复杂的 M4（自由交易合约）。当底层 M1 无法拿出任何货币/资产证明时，直接遭到系统的无视和重力抛弃，变成被随意倾倒入海的垃圾（M6）。",
      logicEn: "[Contract Jungle Law]: State M4 resigns, replaced by the complicated M4 (Private Free Contract). When base M1 has zero crypto/assets, they are dropped by systemic gravity, dumped into the ocean (M6) like trash.",
      patch: {
        mechanics: "基础安资协议 + [政府监管 = 绝对0; 金钱防壁度 = 命脉级]",
        mechanicsEn: "Base_ANCAP + [Gov_Regulation = Absolute_0; Money_Firewall = Lifeline]",
        aesthetic: "聚焦：人造浮岛、疯狂生长的摩天大楼、全频段交易终端、游艇与满载武装的私人直升机。文本：华丽冷酷的加密术语结合了海风的腥咸。",
        aestheticEn: "Focus: Modular seapods + Unregulated sprawling high-rises + Crypto terminals + Armed private yachts. Text: Glamorous sterile crypto-jargon mixed with salty sea-breeze.",
        runtime: "IF (在岛链上发生纠纷且原告支付不起私人法庭与执法队的雇佣费) THEN (触发：被告即便承认杀人亦可合法逍遥法外)。",
        runtimeEn: "IF (Dispute_Occurs_and_Plaintiff_Cannot_Afford_Private_Courts/PMCs) THEN (Trigger: Defendant walks free legally even after admitting murder)."
      }
    },
    {
      id: "mathematic_world",
      name: "数学世界",
      nameEn: "Geometric Society",
      def: "反乌托邦如《我们》。生活的一切都用数学公式编排安排，甚至散步时间与发生关系的对象。",
      defEn: "Zamyatin's 'We'. Life orchestrated strictly by math formulas—walking hours, sex partners, everything reduced to geometry.",
      core: "【换喻】被拉直的血肉图元与无法容忍的圆周率无理数 (Flesh straightened into vector lines and the intolerable irrationality of Pi)",
      coreEn: "【Metonymy】The straight line is the only morality; curves and feelings are mathematical crimes.",
      logic: "【拓扑扁平化】：这是直接对 M0（人类复杂的内源空间）的熨平。M4（大他者）表现为绝对的数值。M1 被剥夺了姓名，代之为代数编号。M3（潜意识冲动）被视为“不合逻辑的计算错误”。",
      logicEn: "[Topological Flattening]: M0 (Complex inner space) is violently ironed out flat. M4 acts as absolute integer logic. M1 has an algebraic designation, not a name. M3 is an 'illogical calculation error'.",
      patch: {
        mechanics: "基础常量协议 + [非标差容忍度 = 极其严苛; 逻辑一致性要求 = 变态级]",
        mechanicsEn: "Base_CONSTANT + [Variance_Tolerance = Strict_Zero; Logical_Consistency = Psychopathic]",
        aesthetic: "聚焦：完全透明玻璃建造的城市、统一迈着正步的编号人群、毫无装饰的直线条、精确到秒的作息报时。文本：令人窒息的整洁感与毫无发音顿挫的陈述句。",
        aestheticEn: "Focus: Transparent glass cities + Marching numbered herds + Only straight lines + Second-exact ticking. Text: Suffocating tidiness and monotone declarative sentences.",
        runtime: "IF (某主体表现出了不规则的情绪起伏或对弧线的迷恋) THEN (必然触发：隔离至“修正中心”进行重塑其逻辑闭环的洗脑方程注入)。",
        runtimeEn: "IF (Subject_Exhibits_Irregular_Emotions_or_Fascination_with_Curves) THEN (Must_Trigger: Extraction to 'Correction Centers' for logic-loop reprogramming via equation injection)."
      }
    },
    {
      id: "dream_share",
      name: "梦境共享",
      nameEn: "Dream Share / Solipsism Chamber",
      def: "物理现实破败不堪，全人类在深度的潜意识层相连共创一个幻影世界，拒绝醒来。",
      defEn: "Physical reality is barren. Humanity connects in the deep subconscious layer to co-create phantoms, refusing to wake up.",
      core: "【换喻】盛开在物理废墟上的海市蜃楼朵颜 (The mirage bloom flourishing on the physical ruins of Earth)",
      coreEn: "【Metonymy】Reality is a nightmare; the dream is the only true waking state.",
      logic: "【M2拒绝法则】：整个物理宇宙（作为M2实在界）被打包隔离。M4 也就是这个精神矩阵，其核心律令就是“绝对隔绝现实”。谁试图把人拉出舱门回到 M2（物理降维），谁就是最大的邪魔。",
      logicEn: "[M2 Rejection Law]: The physical universe (M2 Real) is zipped away. M4 (Dream Matrix) has one supreme command: 'Deny The Real'. Anyone attempting unplugging (Returning to M2) is the ultimate demon.",
      patch: {
        mechanics: "基础梦魇协议 + [现实触感 = 0; 幻觉延展性 = 主观意志无限化]",
        mechanicsEn: "Base_DREAMSCAPE + [Reality_Tactility = 0; Hallucination_Malleability = Infinite_Subjective]",
        aesthetic: "聚焦：现实中布满灰尘的破败人体维生管仓 vs 梦境中反物理定律的水流、悬空的陆地、随意剪辑的时间感。文本：如梦呓般跳跃的蒙太奇。",
        aestheticEn: "Focus: Dusty real-world life-support tubes vs dream-logic inverted waterfalls, floating islands, and cut-scene time logic. Text: Jump-cut montages reading like somniloquy.",
        runtime: "IF (某些信号导致做梦者在梦境中察觉到“这是一场梦”) THEN (触发：极其可怕的集体潜意识防御机制实体化将其吞噬，防止醒来)。",
        runtimeEn: "IF (Signals_Cause_Dreamer_To_Realize_It_Is_A_Dream) THEN (Trigger: Horrifying materialized collective-subconscious defense mechanisms devour them to prevent waking)."
      }
    },
    {
      id: "no_death_society",
      name: "无死社会",
      nameEn: "No-Death Society (Immortality)",
      def: "借助纳米技术或基因端粒彻底攻克了死亡。相应的，生育成为最严重的犯罪。",
      defEn: "Death conquered via nanotech. Because nobody dies, childbirth becomes the ultimate existential crime.",
      core: "【换喻】被封死的结局刻度与漫长到令人发指的无聊长廊 (The sealed-off ending marker and the horrifyingly endless corridor of boredom)",
      coreEn: "【Metonymy】A world where the clock ticks forever but time has stopped.",
      logic: "【负熵停滞法则】：M6（死亡）的缺席，直接导致 M5（人类改变现状的驱力）完全熄火。没有死亡这个最终的 M4 边界，主体的 M3 欲望变得极度黏稠缓慢，社会进入一种令人毛骨悚然的古井无波状态。",
      logicEn: "[Negentropy Stagnation]: The absence of M6 (Death) totally stalls M5 (Drive to change). Without Death's bounding border, M3 (Desire) becomes viscous and agonizingly slow. Society flatlines into eerie stagnation.",
      patch: {
        mechanics: "基础永生协议 + [迭代更新率 = 绝对零度; 厌世指数 = 年代累积飙升]",
        mechanicsEn: "Base_IMMORTAL + [Iteration_Rate = Absolute_Zero; World-Weariness = Scales_With_Centuries]",
        aesthetic: "聚焦：毫无改变的面容、堆满几百年历史的起居室、非法怀孕检查哨、高崖边寻求刺激但不死的病态聚会。文本：极其疲惫、仿佛灵魂脱水的叹息。",
        aestheticEn: "Focus: Static unaging faces + Living rooms hoarding 300 years of clutter + Illegal pregnancy checkpoints + Morbid thrill-seeker clubs. Text: Extremely exhausted, soul-dehydrated sighs.",
        runtime: "IF (出现非法的自然怀孕与新生命体) THEN (必然触发：长生老人们极其恐慌且暴烈的绞杀程序，维护不朽的固态)。",
        runtimeEn: "IF (Illegal_Natural_Pregnancy_and_New_Life_Appears) THEN (Must_Trigger: The Immortals enact frenzied, violent strangulation protocols to protect the static forever)."
      }
    },
    {
      id: "genderless_society",
      name: "无性别社会",
      nameEn: "Genderless Society",
      def: "物理或基因层面清除了第一与第二性征。基于消除区别的乌托邦，没有荷尔蒙的冲撞。",
      defEn: "Biological sex eradicated. A utopia built on erasing dimorphism; no hormonal collisions.",
      core: "【换喻】平滑顺流的湖面之下被阉割的二元张力波峰 (The castrated peaks of binary tension beneath a perfectly smooth lake)",
      coreEn: "【Metonymy】Equality achieved by amputating the axes of difference.",
      logic: "【结构性去势法则】：在拉康理论中，性别不仅仅是生物学，而是M3（欲望）结构的核心空洞制造机之一。M4（无性律令）抹除了这一制造机，导致文明虽然没有了相关压迫，但彻底丧失了激荡灵魂的爱欲动能。",
      logicEn: "[Structural Castration Law]: In Lacanian terms, Sex is a core engine for M3's (Desire) structural Lack. M4 (Genderless Command) erases this engine. Oppression is gone, but the churning kinetic energy of Eros is completely lost.",
      patch: {
        mechanics: "基础中性协议 + [荷尔蒙起伏线 = 恒定直线; 差异性吸引力 = 降阶为0]",
        mechanicsEn: "Base_NEUTRAL_SEX + [Hormonal_Variance = Flatline; Differential_Attraction = Degraded_to_0]",
        aesthetic: "聚焦：宽松中性的制服、培养皿繁衍工程、平缓低沉并且无法分辨男女的合成音色。文本：像温水一般无害却没有任何高潮体验的世界。",
        aestheticEn: "Focus: Flowy neutral uniforms + Cloning vats + Modulated androgynous vocal tones. Text: A world harmless like lukewarm water, eternally devoid of climax.",
        runtime: "IF (试图通过非法手术寻回性征与对应的原初痛苦) THEN (被系统视为感染了“旧代狂躁病毒”，被送入回收池中和)。",
        runtimeEn: "IF (Attempt_To_Surgically_Reclaim_Sex_Organs_and_Primal_Pain) THEN (Flagged as infected by 'Old-Era Mania' and dumped into neutralization vats)."
      }
    },
    {
      id: "time_loop_society",
      name: "循环社会",
      nameEn: "Time Loop Society",
      def: "整个小镇或地球被锁死在一天之中，时间永远重置。极少数清醒者面对无尽重演。",
      defEn: "Town/World locked in a single repeating day. Memories wipe. Only a few awakened face the endless theater.",
      core: "【换喻】咬住自己尾巴的衔尾蛇与剥夺后果的绝对虚无 (The Ouroboros biting its tail and the absolute void caused by consequence-deprivation)",
      coreEn: "【Metonymy】When tomorrow dies, every action today becomes a ghost.",
      logic: "【M5失效死锁】：在这个世界中，M4（时间的终点墙）每隔24小时就回滚一次。由于 M5（一切行为）都不会产生延递到“明天”的后果，这导致 M3（期待感）被根除。清醒者的心灵会在经历了无数次疯狂后走向绝对的枯竭。",
      logicEn: "[M5 Action Deadlock]: M4 (The Time Wall) rolls back every 24 hours. Since M5 (Action) produces zero consequences for 'Tomorrow', M3 (Expectation) is rooted out. Awakened minds cycle through madness into absolute spiritual desiccation.",
      patch: {
        mechanics: "基础莫比乌斯协议 + [因果链延迟 = 只能存在24H; 记忆保留权 = 极端稀有变异]",
        mechanicsEn: "Base_MOBIUS + [Causality_Chain = Max_24H; Memory_Retention = Extreme_Rare_Mutation]",
        aesthetic: "聚焦：每天同一秒经过窗外的红车、杯子在同样的位置摔碎、路人公式化的对话录音、清醒者绝望到麻木的眼神。文本：卡带般的破损跳针感与溺水感。",
        aestheticEn: "Focus: The same red car passing at 7:00 AM + Glass breaking on cue + NPC-like dialogue loops + The numbed despair of the awakened. Text: Dripping water torture combined with a skipping record.",
        runtime: "IF (清醒者试图通过极致的毁灭或拯救来寻找打破循环的破局点) THEN (触发：在最高潮的爆炸/接吻瞬间，场景再次无情地黑屏重置于原点清晨)。",
        runtimeEn: "IF (Awakened_Uses_Extreme_Violence_or_Love_to_Break_Loop) THEN (Trigger: Climax explosion/kiss instantly hard-cuts to black, resetting to the same bland morning)."
      }
    }
  ]
};
