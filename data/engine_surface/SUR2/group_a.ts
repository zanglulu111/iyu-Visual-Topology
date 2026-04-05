import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_A: LibraryCategoryDef = {
    id: "era_mythic",
    name: "01. 起源与神话 (Origins & Mythic)",
    desc: "文明的童年。逻辑未立，人神共居，生存法则极其原始且带有神圣的残酷。",
    items: [
      {
        id: "primordial_chaos",
        name: "原初混沌", nameEn: "Primordial Chaos",
        def: "天地未分。物理定律尚未固化，物质与意志直接碰撞。",
        defEn: "Heaven and earth unseparated. Physical laws unfixed, direct collision of matter and will.",
        core: "无序的自然伟力与微弱秩序萌芽间的零和博弈。 | 锚定 ($): M2 美学底色-无序 (Chaos)",
        coreEn: "Zero-sum game between chaotic natural forces and budding order. | Anchor ($): M2 Aesthetic-Chaos",
        logic: "【前符号期坍缩】：大他者（M4）尚未诞生，象征界法则完全失效，实在界（Real）的创伤直接裸露。毫无“名字”的怪物横行，主体被抛入没有缝合点的深渊，体验没有滤镜的绝对重力。",
        logicEn: "[Pre-Symbolic Collapse]: The Other (M4) is unborn; symbolic laws fail. The trauma of the Real is exposed. Nameless monsters roam; subjects are cast into a suture-less abyss, experiencing absolute gravity.",
        patch: {
            mechanics: "无定形侵蚀协议 + [物理定律 = 随机跃迁; 秩序抗性 = 0; 符号有效率 = 极微]",
            mechanicsEn: "Amorphous_Corrosion_Protocol + [Physics = Random_Jump; Order_Resist = 0; Symbol_Validity = Minimal]",
            aesthetic: "无法定型的流体、无边际的暗泽。光影呈现狂乱的无向性分布，材质表现出缺乏确定的几何轮廓与边缘消溶感。",
            aestheticEn: "Unformable fluids, boundless dark swamps. Frantic non-directional lighting; textures show lack of geometric outlines and dissolving edges.",
            runtime: "IF (尝试建立秩序符号) THEN (执行：以压倒性的自然巨力瞬间无视并抹除)；IF (脱离防线) THEN (触发：主观形态的液化与自我溶解)",
            runtimeEn: "IF (Try to build order symbol) THEN (Execute: Instant erasing backflow by crushing nature); IF (Leave defense) THEN (Trigger: Subjective liquefaction and self-dissolution)"
        }
      },
      {
        id: "golden_age",
        name: "伊甸园/黄金时代", nameEn: "Golden Age",
        def: "人类堕落前的完满状态。无罪，无死，与大他者（自然/神）无缝连接。",
        defEn: "Flawless state before the Fall. Sinless, deathless, seamlessly connected to the Other (Nature/God).",
        core: "完美的静止被打破的前夜。对“禁忌”的渴望与失去乐园的预感。 | 锚定 ($): M4 绝对缝合 (Absolute_Suture)",
        coreEn: "The eve of breaking perfect stasis. Thirst for taboo and premonition of losing Paradise. | Anchor ($): M4 Absolute_Suture",
        logic: "【母体驻留】：处于镜像阶段之前的完满（Jouissance）。绝对大他者包办一切，主体毫无裂痕，因此也严重缺乏欲望锚点（SUR5）。唯一的张力来自于突破这一完美牢笼的死之驱力萌芽（尝下禁果）。",
        logicEn: "[Maternal Retention]: Flawlessness (Jouissance) before the mirror stage. The Absolute Other provides all; subject lacks rifts and desire anchors (SUR5). Tension only from the budding death drive to break this perfect cage (tasting forbidden fruit).",
        patch: {
            mechanics: "永恒停滞协议 + [完美度 = 100%; 匮乏感 = 0; 越界诱惑率 = Max]",
            mechanicsEn: "Eternal_Stasis_Protocol + [Perfection = 100%; Lack = 0; Transgression_Temptation = Max]",
            aesthetic: "极度饱和的柔和高光，绝对和谐的对称自然画面。没有阴影的乌托邦色彩，带有因过于完美而令人窒息的塑料不实感。",
            aestheticEn: "Oversaturated soft highlights, absolutely harmonious symmetric nature. Shadowless Utopian colors, with suffocating plastic unreality due to over-perfection.",
            runtime: "IF (发生欲望萌动) THEN (执行：系统提供即时且无痛的安全干预)；IF (彻底触碰禁忌) THEN (触发：瞬间跌落至失乐园的绝对落差剥夺感)",
            runtimeEn: "IF (Desire stirs) THEN (Execute: Instant painless safe intervention); IF (Touch taboo) THEN (Trigger: Instant plunging deprivation of Paradise Lost)"
        }
      },
      {
        id: "stone_age_logic",
        name: "蛮荒石器", nameEn: "Paleolithic Survival",
        def: "狩猎采集，火的图腾。语言尚未成型，血缘是唯一的律法。",
        defEn: "Hunter-gatherer, totem of fire. Language unformed, bloodline as the sole law.",
        core: "脆弱的肉体 vs 冷酷的环境。对火的崇拜是对“理性”的初次渴望。 | 锚定 ($): M1 躯体极度匮乏 (Flesh_Lack)",
        coreEn: "Fragile flesh vs Cold environment. Worship of fire is the first thirst for reason. | Anchor ($): M1 Flesh_Lack",
        logic: "【物自体压迫】：在符号系统极度贫乏的前夜。所有的阻带（Sur4X物理阶层阻力）不来自阶级，而来自卡在脖子上的环境死结。火作为最初的[能指代偿]，成为了区隔人类与实在界野兽边界的绝对重力。",
        logicEn: "[Thing-in-Itself Oppression]: The eve of symbol systems. Physical resistance (Sur4X) doesn't come from class, but the environmental chokehold. Fire, as the first signifier substitute, acts as absolute gravity parting humans from the beasts of the Real.",
        patch: {
            mechanics: "基因生存协议 + [物理损耗 = Max; 符号系统 = 不完整; 部落凝聚度 = 绝对]",
            mechanicsEn: "Genetic_Survival_Protocol + [Physical_Attrition = Max; Symbol_System = Incomplete; Tribal_Cohesion = Absolute]",
            aesthetic: "粗糙的岩石质感，泥泞与未加工的血肉残骸。火光作为唯一的高对比度光源，刺破极为浓重的暗沉阴影。",
            aestheticEn: "Rough rocky textures, mud and unprocessed gory remains. Firelight as the only high-contrast light piercing heavily dense shadows.",
            runtime: "IF (遭遇环境剧变) THEN (执行：以生命减员为代价的物种级迁移尝试)；IF (火种熄灭) THEN (触发：失去象征边界退行回实在界野兽状态的极速恐慌)",
            runtimeEn: "IF (Env upheaval) THEN (Execute: Species-level migration attempt costing lives); IF (Fire dies) THEN (Trigger: Rapid panic of losing symbolic borders and regressing to beasts)"
        }
      },
      {
        id: "neolithic_shaman",
        name: "新石器萨满", nameEn: "Neolithic Shamanism",
        def: "定居点出现。通过仪式与不可见的灵界沟通。万物有灵。",
        defEn: "Settlements emerge. Rituals communicate with unseen spirit worlds. Animism.",
        core: "物质匮乏 vs 精神通灵。祭祀开始成为分配权力的符号控制律。 | 锚定 ($): M4 幽灵大他者 (Ghostly_Other)",
        coreEn: "Material scarcity vs spirit channeling. Sacrifice becomes the symbolic law for power distribution. | Anchor ($): M4 Ghostly_Other",
        logic: "【幻象缝合】：最初的 M4（大他者）以不可见的“先祖/自然之灵”形式被建立。人类发明了祭祀，通过自我剥夺（献祭）来给大他者喂食，试图掌握控制实在界（天气/收成）的规律。",
        logicEn: "[Phantasmatic Suture]: The first M4 (Other) forms as unseen 'Ancestor/Nature spirits'. Humans invent sacrifice, self-depriving to feed the Other, attempting to master the laws of the Real (weather/harvest).",
        patch: {
            mechanics: "图腾律令协议 + [迷幻指数 = High; 仪式强迫性 = 100%; 现实折射率 = 扭曲]",
            mechanicsEn: "Totem_Law_Protocol + [Psychedelic_Index = High; Ritual_Compulsion = 100%; Reality_Refraction = Distorted]",
            aesthetic: "大量的烟雾、几何图腾涂装与动物骨骼头饰。视觉伴随致幻的叠影、失焦以及非自然的红绿脉冲闪烁感。",
            aestheticEn: "Massive smoke, geometric totem paints, animal bone headdresses. Visuals with hallucinogenic ghosting, out-of-focus, and unnatural red-green pulse flickering.",
            runtime: "IF (自然降下灾祸) THEN (执行：强制归咎于祭祀不足并加码血祭)；IF (通灵仪式启动) THEN (触发：通过药剂与狂舞进入意识脱域的幻境叠层)",
            runtimeEn: "IF (Natural disaster strikes) THEN (Execute: Forcibly blame insufficient sacrifice and double down); IF (Channeling ritual starts) THEN (Trigger: Enter consciousness-deterritorializing illusion layers via drugs and trance)"
        }
      },
      {
        id: "bronze_collapse",
        name: "青铜崩溃", nameEn: "The Bronze Collapse",
        def: "英雄史诗的终结。旧神不再回应祈祷，贸易网断裂，文明在战火中液化。",
        defEn: "End of heroic epics. Old gods ignore prayers, trade nets snap, civilization liquefies in war.",
        core: "系统性崩塌下个体尊严的虚妄。大他者（神/帝国）突然大规模死机。 | 锚定 ($): M4 缺席 (Absence_of_Other)",
        coreEn: "Vain individual dignity mid systemic collapse. The Other (God/Empire) massively crashes. | Anchor ($): M4 Absence_of_Other",
        logic: "【秩序大断电】：高度复杂的青铜官僚体制与神权矩阵在不可抗力（海之民/旱灾）面前瞬间解体。这是第一次经历“大他者不存在”的集体性实在界创伤，文明从符号秩序直接坠跌入丛林法则（SUR4X Level 1）。",
        logicEn: "[Order Blackout]: Highly complex bronze bureaucracy and theocracy instantly disintegrate facing force majeure (Sea Peoples/Drought). The first collective Real trauma of 'The Other does not exist'; civilization plunges from symbolic order to jungle law.",
        patch: {
            mechanics: "多骨牌崩解协议 + [旧系统响应 = 0; 动乱传染度 = Max; 结构挽救率 = Null]",
            mechanicsEn: "Domino_Collapse_Protocol + [Old_System_Response = 0; Riot_Contagion = Max; Structure_Salvation = Null]",
            aesthetic: "宏伟宫殿被黑烟熏燎的断壁。蒙尘的青铜器与满地散落且无人认领的泥板文书。夕阳西下时弥漫着极度荒凉干涸的末世黄昏色调。",
            aestheticEn: "Grand palaces as smoke-stained ruins. Dusted bronzeware and unowned clay tablets scattered. Apocalyptic dusk tones filled with extreme barren dryness at sunset.",
            runtime: "IF (坚守旧有法律与神谕) THEN (执行：被狂暴的历史动能无情碾压并化为齑粉)；IF (城市城墙被突破) THEN (触发：文明档案彻底销毁的绝对失能感)",
            runtimeEn: "IF (Hold to old laws and oracles) THEN (Execute: Ruthlessly crushed into powder by raging historical kinetic energy); IF (City walls breached) THEN (Trigger: Absolute impotence of total civilization archive deletion)"
        }
      },
      {
        id: "egypt_old_theo",
        name: "古王国神权", nameEn: "Old Kingdom Egypt",
        def: "大金字塔建造期。法老是现世神，对死亡与来世的迷恋超过现世。",
        defEn: "Great Pyramid era. Pharaohs as living gods; obsession with death/afterlife eclipses reality.",
        core: "短暂的呼吸 vs 永恒的石碑。巨大的尺度感压迫着每个微小的个体。 | 锚定 ($): M4 极权巨物 (Totalitarian_Colossus)",
        coreEn: "Brief breath vs Eternal stone. Massive sense of scale oppressing each tiny individual. | Anchor ($): M4 Totalitarian_Colossus",
        logic: "【石化符号体制】：M4 被具象化为遮天蔽日的纪念碑建筑。主体在此被剥夺了现世的意义，生命的全部剩余价值（驱力）被抽干，用于去修建一座只服务于“死后大他者之眼”的完美几何坟墓，是绝对固态统治（SUR4X Level 5）。",
        logicEn: "[Petrified Symbolic Regime]: M4 materialized as monumental buildings blotting the sun. Subjects are stripped of worldly meaning; all surplus life value (drive) is drained to build a perfect geometric tomb serving only the 'eye of the dead Other'. Absolute solid rule (SUR4X Level 5).",
        patch: {
            mechanics: "金字塔榨取协议 + [生命折现率 = 接近0; 几何强迫症 = Max; 阶级变动 = 绝对禁止]",
            mechanicsEn: "Pyramid_Extortion_Protocol + [Life_Discount = Near 0; Geometric_Compulsion = Max; Class_Mobility = Absolute_Ban]",
            aesthetic: "刺目的沙漠烈日，极其规整、强迫症般的巨大几何体阴影。人和黄金一样，仅作为冷酷石块体系中的填缝剂，呈现出被晒干的枯竭质感。",
            aestheticEn: "Blinding desert sun, extremely tidy OCD-like massive geometric shadows. Humans, like gold, serve only as fillers in the cold stone system, presenting a sun-dried exhausted texture.",
            runtime: "IF (质疑生前苦役的意义) THEN (执行：被系统判定为破坏永恒几何的污点而秘密抹除)；IF (面对巨石与神庙) THEN (触发：尺度极差引发的深度存在论自卑)",
            runtimeEn: "IF (Question meaning of lifetime toil) THEN (Execute: Secretly erased as a stain ruining eternal geometry); IF (Face megaliths and temples) THEN (Trigger: Deep ontological inferiority induced by extreme scale disparity)"
        }
      },
      {
        id: "sumerian_clay",
        name: "苏美尔泥板", nameEn: "Sumerian City-State",
        def: "最早的城市，泥砖建筑，楔形文字。法律与债务的起源。",
        defEn: "Earliest cities, mudbricks, cuneiform. The origin of law and debt.",
        core: "符号系统的统治。人第一次被记录在“账单”上，身份开始数字化异化。 | 锚定 ($): M4 抽象契约 (Abstract_Contract)",
        coreEn: "Rule of symbol systems. Humans first recorded on 'bills', identities digitally alienated. | Anchor ($): M4 Abstract_Contract",
        logic: "【刻录异化】：世界在这里首次完成了“文字化缝合”。人与人的血缘被账单与契约取代，匮乏（Lack）从吃不饱的胃部，转移到了那块烧结的泥板上的欠款数字。这是[象征界]确立霸主地位的历史性节点。",
        logicEn: "[Engraved Alienation]: The world completes its first 'textual suture'. Kinship is replaced by bills and contracts; Lack shifts from empty stomachs to debt numbers on baked clay. The historic node where the [Symbolic] establishes supremacy.",
        patch: {
            mechanics: "契约降维协议 + [债务约束力 = 绝对大他者; 物化率 = High; 符号统治 = 初次觉醒]",
            mechanicsEn: "Contract_Downscale_Protocol + [Debt_Binding = Absolute_Other; Objectification_Rate = High; Symbol_Rule = First_Awakening]",
            aesthetic: "尘土飞扬的街道，密集的土黄色方形建筑。特写中充满笔画锋利如刀的楔形泥板烙印，带有把人压平为数据的干燥文书氛围。",
            aestheticEn: "Dusty streets, dense ochre square buildings. Close-ups filled with sharp, knife-like cuneiform brandings, carrying a dry clerical vibe that flattens humans into data.",
            runtime: "IF (无法偿还泥板契约) THEN (执行：被剥夺自由民肉身，降级为可交易工具)；IF (试图用暴力反抗账本) THEN (触发：被全城邦的逻辑围剿，证实符号之重)",
            runtimeEn: "IF (Cannot repay clay contract) THEN (Execute: Stripped of freedman flesh, downgraded to tradable tool); IF (Try violent revolt against ledgers) THEN (Trigger: Logical siege by entire city-state, proving the weight of symbols)"
        }
      },
      {
        id: "shanhai_myth",
        name: "山海经/上古", nameEn: "Mythic China (Shanhaijing)",
        def: "巫术，图腾，洪水，部族战争。人神混居。天命的初次显现。",
        defEn: "Sorcery, totems, floods, tribal wars. Gods and mortals mix. First reveal of Heaven's Mandate.",
        core: "由“治水/射日”确立的集体意志。对抗自然异象的英雄史诗。 | 锚定 ($): M5 愚公向力 (Sisyphus_Vector)",
        coreEn: "Collective will forged by 'Flood-taming/Sun-shooting'. Heroic epic against nature. | Anchor ($): M5 Sisyphus_Vector",
        logic: "【悲壮拒斥】：有别于屈服神权，这里的 M5（行动驱力）展现出一种对大他者横暴（洪水/烈日）的愤怒物理反击。肉身虽微，却试图通过“填海/移山”的永恒死磕，强行在实在界中咬出一个属于人类的空间。",
        logicEn: "[Tragic Rejection]: Unlike submitting to theocracy, M5 (Action Drive) shows an angry physical counterattack against the Other's tyranny (floods/suns). Tiny flesh attempts eternal attrition ('filling seas/moving mountains') to forcibly bite human space out of the Real.",
        patch: {
            mechanics: "逆天改命协议 + [自然压溃力 = Max; 意志折损率 = 0; 集体同频度 = 100%]",
            mechanicsEn: "Defy_Heaven_Protocol + [Nature_Crush = Max; Will_Attrition = 0; Collective_Synch = 100%]",
            aesthetic: "水流席卷大地的洪荒感与遮天蔽日的巨兽暗影。以粗犷的线条、极具张力的人体肌肉青筋抗争大自然灾变的史诗定格图景。",
            aestheticEn: "Primordial floods sweeping land, giant beast shadows blotting the sun. Epic freeze-frames of rough lines, tense human muscles and veins resisting natural cataclysms.",
            runtime: "IF (遭遇不可抗的巨大灾变) THEN (执行：无视死亡率的大规模集体投身抵抗)；IF (领袖倒下/牺牲) THEN (触发：其身体化为山川长河，完成意志向物理环境的拓扑转变)",
            runtimeEn: "IF (Face irresistible mega-cataclysm) THEN (Execute: Mass collective suicide-resistance ignoring death rates); IF (Leader falls/sacrifices) THEN (Trigger: Body turning into mountains/rivers, topological shift of will to physical environment)"
        }
      },
      {
        id: "maya_blood",
        name: "玛雅献祭", nameEn: "Classic Maya",
        def: "丛林神庙。活人祭祀以维持太阳运行。对时间循环的极度恐惧。",
        defEn: "Jungle temples. Human sacrifices to sustain the sun. Extreme dread of circular time.",
        core: "为群体生存支付惨痛血税。宗教狂热下的利他主义。 | 锚定 ($): M1 赎罪引擎 (Atonement_Engine)",
        coreEn: "Heavy blood tax for group survival. Altruism under religious zeal. | Anchor ($): M1 Atonement_Engine",
        logic: "【血之齿轮】：M4 律法被设定为一个“必须靠人的鲜血润滑的时钟”。如果不把滚烫的心脏剖出，宇宙就会在某一个历法极点崩塌停滞。主体的肉体毁灭在此构成了维系大宇宙物理定律的最高齿轮。",
        logicEn: "[Gears of Blood]: M4 Law is set as a 'clock that must be lubricated by human blood'. Without carving out a hot heart, the cosmos stalls at a calendar pole. The subject's physical destruction forms the supreme gear sustaining macrophysical laws.",
        patch: {
            mechanics: "深渊历法协议 + [循环恐慌 = Max; 血祭收益 = 稳定宇宙; 道德抑制 = 倒错]",
            mechanicsEn: "Abyssal_Calendar_Protocol + [Cyclic_Panic = Max; Blood_Sacrifice_Yield = Cosmic_Stability; Moral_Inhib = Perverted]",
            aesthetic: "郁郁葱葱但令人窒息的热带雨林，陡峭金字塔顶端流淌下粘稠的暗红血瀑布。黄金与玉石装饰在火炬下折射出歇斯底里的狂热光芒。",
            aestheticEn: "Lush but suffocating rainforests, steep pyramids leaking sticky dark red blood waterfalls. Gold and jade ornaments refracting hysterical fanatical glimmers under torches.",
            runtime: "IF (历法末日节点逼近) THEN (执行：系统化搜捕祭品并执行极其精确的手术刀式献祭)；IF (心脏被举向天空) THEN (触发：人群集体陷入秩序被挽救的残酷高潮)",
            runtimeEn: "IF (Calendar doomsday node nears) THEN (Execute: Systemic hunt for prey; ultra-precise scalpel sacrifices); IF (Heart held to sky) THEN (Trigger: Crowd falls into cruel climax of saved order)"
        }
      },
      {
        id: "norse_ragnarok",
        name: "北欧黄昏", nameEn: "Norse Mythos",
        def: "世界树。冰冷，宿命论。勇士们在必败的末日之前狂欢。",
        defEn: "Yggdrasil. Freezing, fatalistic. Warriors revel before certain doomsday defeat.",
        core: "向死而生的美学。明知终结将至，依然选择战斗到底的悲剧性自由。 | 锚定 ($): M0 宿命拓扑 (Fatal_Topology)",
        coreEn: "Aesthetics of being-towards-death. Knowing the end is nigh, choosing tragic freedom to fight anyway. | Anchor ($): M0 Fatal_Topology",
        logic: "【必毁宣告】：剧本的大结局（Ragnarok）是一并写在创世代码里的。主体（神或人）的全部 M5 驱力不是为了避免死亡，而是为了“死得配得上碑铭”。这是一种将“不可能的反抗”化作绝对自由的悲壮拓扑学。",
        logicEn: "[Foreordained Destruction]: The finale (Ragnarok) is hardcoded into Genesis. The subject's entire M5 drive isn't to avert death, but to 'die worthy of an epitaph'. A tragic topology turning 'impossible resistance' into absolute freedom.",
        patch: {
            mechanics: "注定归零协议 + [预言命中率 = 100%; 妥协选项 = 锁死; 战斗快感 = 逆境倍增]",
            mechanicsEn: "Destined_Zeroing_Protocol + [Prophecy_Hit= 100%; Compromise_Options = Locked; Combat_Jouissance = Double_in_Adversity]",
            aesthetic: "无尽的冰原、暴风雪。色调极其压抑的灰蓝调中，突然爆发的猩红血光与刺眼雷电。体现粗野、抗拒物理极寒的极度硬核感。",
            aestheticEn: "Endless icefields, blizzards. Extremely oppressive gray-blue tones punctured by sudden scarlet blood and blinding lightning. Brutal, hardcore vibe resisting extreme physical cold.",
            runtime: "IF (末世前兆芬布尔之冬显现) THEN (执行：抛弃所有世俗积蓄，举杯狂欢并擦亮武器)；IF (面对不可战胜的魔狼/巨蛇) THEN (触发：毫无惧色地踏入被吞噬的必然结局)",
            runtimeEn: "IF (Fimbulwinter doom omen appears) THEN (Execute: Discard mundane savings, drink wildly and polish weapons); IF (Facing unbeatable Wolf/Serpent) THEN (Trigger: Fearlessly stride into the inevitable swallowed end)"
        }
      },
      {
        id: "atlantis_hubris",
        name: "亚特兰蒂斯", nameEn: "Atlantis Legacy",
        def: "超古代高等文明。水晶能源，技术的傲慢。被大洪水封印的乌托邦。",
        defEn: "Super ancient highly advanced civ. Crystal energy, technological hubris. Utopia sealed by flood.",
        core: "科技与道德失衡。掌握神力却无法控制贪婪时的毁灭。 | 锚定 ($): M6 僭越极限 (Transgression_Limit)",
        coreEn: "Tech vs Moral imbalance. Destruction when wielding divine power without greed control. | Anchor ($): M6 Transgression_Limit",
        logic: "【理性过载】：凭借极端的理性与技术突破了 M1（匮乏）的设定限制，但在符号界边缘（M6 越界阈值）因为狂妄地触碰终极黑盒数据，导致实在界重置洪水的瞬间爆发。乌托邦直接引爆其内核病灶。",
        logicEn: "[Rational Overload]: Breaching M1 (Lack) limits via extreme reason/tech, but arrogantly touching ultimate black-box data at the Symbolic edge (M6 threshold), triggering instant Real reset floods. Utopia directly detonating its core lesion.",
        patch: {
            mechanics: "傲慢溢出协议 + [能源汲取 = Max; 控制错觉 = 100%; 灾变延时 = 瞬间爆发]",
            mechanicsEn: "Hubris_Overflow_Protocol + [Energy_Drain = Max; Illusion_of_Control = 100%; Cataclysm_Delay = Instant_Burst]",
            aesthetic: "流线型发光几何体，晶莹剔透但空洞的超级都市。洪水降临前带有极度致幻的彩虹色色散错象，随后被深渊般的深海幽暗彻底吞没。",
            aestheticEn: "Fluid glowing geometry, crystal clear but hollow supercities. Pre-flood hallucinatory rainbow chromatic aberrations, followed by total engulfment by abyssal deep-sea gloom.",
            runtime: "IF (启动超出安全阈值的水晶过载) THEN (执行：无视底层协议警告的盲目自信推演)；IF (地壳开始全线撕裂) THEN (触发：绝对完美的城市在几秒内崩为瓦砾的终极虚无)",
            runtimeEn: "IF (Activate crystal overload past safe threshold) THEN (Execute: Blindly confident push ignoring low-level warnings); IF (Crust totally tears) THEN (Trigger: Ultimate void of perfect city crumbling in seconds)"
        }
      },
      {
        id: "babylon_tower",
        name: "通天塔/巴比伦", nameEn: "Tower of Babel",
        def: "语言多样性的诞生。奢靡的城市与对神权发起的终极挑战。",
        defEn: "Birth of linguistic diversity. Opulent city mounting an ultimate challenge to theocracy.",
        core: "沟通的断裂。不同文化之间的不可能性与大他者的惩罚。 | 锚定 ($): M4 语言离散 (Linguistic_Scatter)",
        coreEn: "Severance of communication. The impossibility between cultures and the Other's punishment. | Anchor ($): M4 Linguistic_Scatter",
        logic: "【能指爆破】：全人类曾通过相同的编译环境（单一语言）试图建立一个物理覆盖至实在界的阶梯。大他者（上帝）的降维打击不是雷电，而是摧毁了“协议层（Protocol）”。语言四分五裂，造成主体之间永久的“无法理解（M1核心）”。",
        logicEn: "[Signifier Detonation]: Humanity shared a compile environment (one language) to build a physical stair covering the Real. The Other's (God) strike wasn't lightning but destroying the 'Protocol layer'. Language shattered, causing permanent 'incomprehensibility (M1 core)' between subjects.",
        patch: {
            mechanics: "协议乱码协议 + [同频沟通几率 = 瞬间归零; 协作链条 = 断裂; 符号碎片化 = Max]",
            mechanicsEn: "Protocol_Gibberish_Protocol + [Sync_Comms = Inst_Zero; Collab_Chain = Broken; Symbol_Fragmentation = Max]",
            aesthetic: "高耸入云的宏大烂尾奇观。画面中人群因无法沟通而面部肌肉扭曲、疯狂比划，声音环境从一致雄伟的号子声变成刺耳杂乱的亿万种噪音浪潮。",
            aestheticEn: "Cloud-piercing grand unfinished spectacles. Crowds with twisted facial muscles, frantically gesturing due to comm failure. Audio shifts from unified majestic chants to chaotic billions of noise waves.",
            runtime: "IF (工程触及天穹临界点) THEN (执行：触发系统内核强行下发的加密乱码污染)；IF (旁人说出无法解码的音节) THEN (触发：同类在一秒钟内异化为外星怪物的深度猜忌与敌视)",
            runtimeEn: "IF (Project hits firmament horizon) THEN (Execute: Trigger system-core forced crypto-gibberish pollution); IF (Neighbor speaks un-decodable syllables) THEN (Trigger: Kin morphing into alien monsters in 1 sec, deep paranoia/hostility)"
        }
      },
      {
        id: "lemuria_lost",
        name: "利莫里亚", nameEn: "Lemuria",
        def: "传说中的太平洋沉没大陆。注重精神感知而非物质技术。",
        defEn: "Legendary sunken Pacific continent. Focuses on psychic perception rather than material tech.",
        core: "感官退化。一个依靠共情连接的社会如何在暴力前崩毁。 | 锚定 ($): M1 屏障缺失 (Barrier_Defect)",
        coreEn: "Sensory atrophy. How a society linked by empathy crumbles before violence. | Anchor ($): M1 Barrier_Defect",
        logic: "【去硬体化悲剧】：社会完全依赖高度神经互联（绝对共情），摒弃了隔离机制（物理防御与暴力律法）。当遭遇外部微小的“实在界硬核冲击（如地震/外敌）”时，共情网络瞬间转变为放大痛楚的反馈环，文明集体神经痛休克。",
        logicEn: "[Tragedy of De-hardware]: Society relies totally on neural sync (absolute empathy), discarding isolation mechanisms (defense/violence laws). When hit by a tiny 'Real hardcore impact (quake/enemy)', the empathy net becomes a pain-amplifying feedback loop, causing collective civilization neuralgia shock.",
        patch: {
            mechanics: "触觉共振协议 + [防御力 = 0; 痛苦连锁倍率 = 指数级; 物理反制手段 = Null]",
            mechanicsEn: "Tactile_Resonance_Protocol + [Def = 0; Pain_Chain_Multiplier = Exponential; Physical_Counter = Null]",
            aesthetic: "柔软、发光的海绵状生物质感环境，缺乏锐角与金属。面临毁灭时，不是物理层面的破碎，而是全部发光体同步变暗的集体神经衰竭过程。",
            aestheticEn: "Soft, glowing spongy biomaterial environments, lacking sharp angles and metal. Facing doom, not physical shattering, but a collective neural failure where all glowing bodies synchronously dim.",
            runtime: "IF (某个体遭受外域暴力创伤) THEN (执行：痛觉沿精神网路瞬间无损耗超导传导全大陆)；IF (感受全频段绝望) THEN (触发：由于缺乏物理抵抗模块只能原地溶解死亡)",
            runtimeEn: "IF (Individual hit by alien violent trauma) THEN (Execute: Pain conducts losslessly via psychic web across continent); IF (Feel full-band despair) THEN (Trigger: In-place dissolution death due to no physical resist module)"
        }
      },
      {
        id: "mu_continent",
        name: "姆大陆", nameEn: "Mu Continent",
        def: "太阳文明，阶级严明，由于地壳变动而消失的帝国。",
        defEn: "Sun civilization, strict class hierarchy, vanished due to crust shifts.",
        core: "权力固化。完美的层级系统在一夜之间被灾难清零。 | 锚定 ($): M4 等级刚性 (Hierarchy_Rigidity)",
        coreEn: "Power fossilization. A perfect hierarchy wiped out by disaster overnight. | Anchor ($): M4 Hierarchy_Rigidity",
        logic: "【晶体脆断】：建立在极度固化的 M4 形态（SUR4X Level 4 阶层绝缘）之上的高度有序帝国。这种极致的秩序抵抗一切内部革命，但面对实在界的纯粹物理底板（板块沉陷）毫无韧性。系统是脆性的死锁，在不可抗压强下碎为粉末。",
        logicEn: "[Crystalline Brittle-Fracture]: Highly ordered empire built on extremely frozen M4 (SUR4X Level 4 insulated classes). This extreme order resists all internal revolution but has zero resilience against the Real's pure physics (tectonic sinking). The system is a brittle deadlock, crushed to powder under overwhelming pressure.",
        patch: {
            mechanics: "刚性碎裂协议 + [阶级流动性 = 0; 地质抗拉强度 = 不及格; 崩溃模式 = 垂直坠落]",
            mechanicsEn: "Rigid_Shatter_Protocol + [Class_Mobility = 0; Geo_Tensile_Strength = F; Collapse_Mode = Vertical_Drop]",
            aesthetic: "太阳图腾的巨大石雕组合出无懈可击的三维矩阵城市。毁灭瞬间没有任何曲线过渡，而是如同大块玻璃般沿平整的断裂线垂直坠入沸腾的深渊。",
            aestheticEn: "Sun-totem giant stone carvings forming an impeccable 3D matrix city. Doom moment has no curved transitions, falling vertically into boiling abyss along clean fracture lines like massive glass.",
            runtime: "IF (底层奴隶发起反抗) THEN (执行：以极高效率的冷酷碾压维稳)；IF (脚下的整块大陆倾斜) THEN (触发：高级祭司与奴隶同时平等于万丈海沟的绝对荒诞感)",
            runtimeEn: "IF (Slaves riot) THEN (Execute: Highly efficient cold crushing to maintain stability); IF (Entire continent tilts) THEN (Trigger: Absolute absurdity of High Priests and slaves equating in the abyssal trench)"
        }
      },
      {
        id: "hyperborea",
        name: "极北之地", nameEn: "Hyperborea",
        def: "永恒阳光的极北，长生不老，音乐作为唯一的法律。",
        defEn: "Extreme north of eternal sun, eternal life, music as the only law.",
        core: "永生的无聊。环境完美时，主体驱动力如何产生？ | 锚定 ($): M5 驱力真空 (Drive_Vacuum)",
        coreEn: "Boredom of immortality. In a perfect environment, how is subject drive sparked? | Anchor ($): M5 Drive_Vacuum",
        logic: "【无症状地狱】：没有匮乏（M1=0）也没有严苛压迫（M4=谐波）。实在界（衰老与黑夜）被彻底屏蔽。这就导致了精神系统的彻底宕机——由于没有创伤，甚至连‘自恋’都无法成立。这是比死亡更可怕的均匀散布的无聊。",
        logicEn: "[Symptomless Hell]: No Lack (M1=0) and no harsh oppression (M4=Harmonics). The Real (aging/night) is totally blocked. This causes absolute psychic system halt—without trauma, even 'narcissism' fails to form. A homogeneously distributed boredom scarier than death.",
        patch: {
            mechanics: "均匀无聊协议 + [光照偏移 = 0; 欲望生成率 = Null; 死亡机制 = 剥夺]",
            mechanicsEn: "Homogeneous_Boredom_Protocol + [Light_Deviation = 0; Desire_Gen_Rate = Null; Death_Mech = Deprived]",
            aesthetic: "永远不变的不落白夜（Midnight Sun）。环境极其优美空灵，但在长时间的观察下散发出类似精神病院的过曝死寂，风没有温度。",
            aestheticEn: "Unchanging Midnight Sun. Beautiful ethereal environment, but under prolonged observation emits an overexposed asylum-like deathly stillness; wind has no temperature.",
            runtime: "IF (长时间存活) THEN (执行：音乐旋律带来的重复洗脑催眠，消解任何微弱抵抗动机)；IF (尝试寻找阴影或痛苦) THEN (触发：发现世界没有外面的真空窒息崩溃)",
            runtimeEn: "IF (Survive long-term) THEN (Execute: Repetitive brainwashing hypnosis via melodies, dissolving weak motives); IF (Try to seek shadows/pain) THEN (Trigger: Vacuum suffocation breakdown upon finding 'there is no outside')"
        }
      }
    ]
  };
