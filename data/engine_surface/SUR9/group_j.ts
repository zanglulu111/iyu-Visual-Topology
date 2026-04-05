import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_J: LibraryCategoryDef = {
  id: "orig_elite",
  name: "2. 财富与新贵 (Wealth & Elite)",
  nameEn: "Wealth & Elite",
  desc: "掌握极具扩张性的资本、技术或无形资源。充满向上越迁的野心与随时跌落的焦虑。",
  descEn: "Commanding highly expansive capital, technology, or intangible resources. Filled with ambition for upward mobility and anxiety of sudden fall.",
  items: [
    {
      id: "tech_mogul",
      name: "科技新贵", nameEn: "Tech Mogul",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "通过算法或硬核技术重塑世界运转规则的数字垄断者。",
      defEn: "Digital monopolists who reshape the world's operating rules through algorithms or hard-core tech.",
      core: "我写的几行代码就是新的上帝定律。 | 代偿 ($): 变量控制权 (Control over Variables)",
      coreEn: "The lines of code I write are the new divine laws. | Compensation ($): Control over Variables",
      logic: "【理性的傲慢】：将自我（M1）投射为绝对理性的造物主，试图剥除世界的一切偶然性（M2）。大他者（M4）不再是神或传统，而是“不完美的碳基人性”。",
      logicEn: "[Arrogance of Reason]: Projects self (M1) as an absolutely rational creator, trying to strip the world of contingency (M2). The Other (M4) is not God or tradition, but 'imperfect carbon-based humanity'.",
      patch: {
        mechanics: "降维转译协议 + [偶然性耐受度 = 负值; 控制欲 = 极高]",
        mechanicsEn: "Dimensional_Reduction_Protocol + [Contingency_Tolerance = Negative; Desire_for_Control = Max]",
        aesthetic: "聚焦：极简几何线条 + 冰冷的机房蓝光。文本：充满参数、效率与去除情感杂质的冰冷逻辑修辞。",
        aestheticEn: "Focus: Minimalist_Geometry + Cold_Server_Blue_Light. Text: Cold_Logic_Rhetoric_Full_of_Parameters_and_Efficiency.",
        runtime: "IF (遭遇底层人性的非理性爆发/爱欲) THEN (触发：代码逻辑彻底崩溃与认知失调的系统级Panic)。",
        runtimeEn: "IF (Encounter_Irrational_Outburst/Eros_of_Base_Humanity) THEN (Trigger: Complete_Logic_Crash_and_Cognitive_System_Panic)."
      }
    },
    {
      id: "nouveau_riche",
      name: "暴发户", nameEn: "Nouveau Riche",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "突然获取巨额财富但尚未被旧日象征谱系接纳的阶级攀爬者。",
      defEn: "A class climber who suddenly acquired immense wealth but is not yet accepted by the old symbolic lineage.",
      core: "我已经买下了你们买不起的跑车，为什么你们依然不看我？ | 缺失 ($): 大他者的凝视 (The Other's Gaze)",
      coreEn: "I bought the sports car you can't afford, why do you still not look at me? | Lack ($): The Other's Gaze",
      logic: "【符号过载的空洞】：试图用过量的物质能指（豪车、Logo）填补M1缺失，然而这些能指无法兑换大他者（老钱SUR4）的承认。陷入越购买越空虚的荒诞循环。",
      logicEn: "[Empty Overload of Signifiers]: Tries to fill M1 lack with excess material signifiers (cars, logos), but these cannot buy the Other's (Old Money SUR4) recognition. Trapped in an absurd loop.",
      patch: {
        mechanics: "能指堆砌协议 + [承认饥渴度 = Max; 审美防御 = 破防级]",
        mechanicsEn: "Signifier_Piling_Protocol + [Thirst_for_Recognition = Max; Aesthetic_Defense = Breached]",
        aesthetic: "聚焦：刺目的金色与Logo堆叠 + 无法掩饰的粗糙举止。文本：浮夸、聒噪且充满歇斯底里的自我证明欲。",
        aestheticEn: "Focus: Blinding_Gold/Logos + Poorly_Hidden_Rough_Manners. Text: Ostentatious,_Noisy,_and_Hysterically_Desperate_to_Prove_Self.",
        runtime: "IF (遭受优雅的结构性无视) THEN (引发：失控的消费报复或极端的暴力摧毁欲)。",
        runtimeEn: "IF (Suffer_Elegant_Structural_Ignorance) THEN (Trigger: Uncontrolled_Retaliatory_Consumption_or_Violent_Destruction)."
      }
    },
    {
      id: "corporate_exec",
      name: "企业高管", nameEn: "Corporate Exec",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "现代资本机器中最完美的齿轮，将自我完全异化为执行力的职业经理人。",
      defEn: "The perfect gear in the modern capital machine, fully alienating the self into pure execution.",
      core: "如果有必要，我可以优化掉我自己。 | 代偿 ($): 绩效指标 (KPIs)",
      coreEn: "If necessary, I can optimize myself out. | Compensation ($): KPIs",
      logic: "【效率异化】：主体（M1）从肉身蜕变为一张KPI报表。大他者（M4）即是看不见的懂事会与市场趋势，任何反抗这套系统的力量（M2）都必须被“优化”。",
      logicEn: "[Efficiency Alienation]: Subjectivity (M1) sheds flesh to become a KPI report. The Other (M4) is the invisible board and market trends. Any resisting force (M2) must be 'optimized'.",
      patch: {
        mechanics: "工具理性协议 + [情感剥离度 = 极高; 疲劳阈值 = 超人级]",
        mechanicsEn: "Instrumental_Rationality_Protocol + [Emotional_Detachment = Max; Fatigue_Threshold = Superhuman]",
        aesthetic: "聚焦：完美的阿玛尼西装 + 凌晨三点的咖啡因眼袋。文本：满是战略术语、无缝切换的冷血商业切口。",
        aestheticEn: "Focus: Perfect_Armani_Suits + 3AM_Caffeine_Eye_Bags. Text: Filled_with_Strategy_Jargon_and_Cold-blooded_Biz-speak.",
        runtime: "IF (面临无法量化的纯粹情感输入) THEN (系统性宕机：试图用表格计算爱情但最终导致全盘崩溃)。",
        runtimeEn: "IF (Face_Unquantifiable_Pure_Emotion) THEN (System_Crash: Try_to_Calculate_Love_in_Spreadsheets_but_Fail_Completely)."
      }
    },
    {
      id: "influencer_star",
      name: "网红顶流", nameEn: "Top Influencer",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "完全依靠公众注意力和数字景观(The Spectacle)存活的流量实体。",
      defEn: "A traffic-driven entity surviving entirely on public attention and the digital Spectacle.",
      core: "只要灯还在闪，我就是真实存在的。 | 缺失 ($): 断网的静默 (Silence Off-Grid)",
      coreEn: "As long as the lights flash, I am real. | Lack ($): Silence Off-Grid",
      logic: "【景观寄生】：主体（M1）彻底消融在大众的凝视（The Gaze）中。大他者（M4）就是变幻莫测的算法与粉丝情绪。失去流量即面临存在论层面的“彻底死亡”。",
      logicEn: "[Spectacle Parasitism]: Self (M1) thoroughly dissolves into the mass Gaze. The Other (M4) is the volatile algorithm/fan sentiment. Losing traffic means true ontological 'death'.",
      patch: {
        mechanics: "流量喂养协议 + [自我边界 = 零; 表演型人格 = 满级]",
        mechanicsEn: "Traffic_Feeding_Protocol + [Self_Boundary = 0; Histrionic_Traits = Max]",
        aesthetic: "聚焦：刺眼的环形美颜灯 + 手机屏幕倒影中的扭曲笑脸。文本：碎片化、带有虚假亲昵与时刻表演性质的语感。",
        aestheticEn: "Focus: Blinding_Ring_Lights + Twisted_Smiling_Reflection_in_Screens. Text: Fragmented,_Falsely_Intimate,_Always-Performing_Tone.",
        runtime: "IF (被迫隔绝于网络/面临无人关注的暗室) THEN (触发：存在被抽空的窒息感与极度恐慌发作)。",
        runtimeEn: "IF (Isolated_from_Network_OR_Placed_in_Dark_Room_With_No_Audience) THEN (Trigger: Suffocating_Void_of_Existence_and_Severe_Panic_Attack)."
      }
    },
    {
      id: "investor",
      name: "金融大鳄", nameEn: "Financier",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "游走于华尔街或金融中心的捕食者，将全球产业与人生视为账单上的杠杆游戏。",
      defEn: "Predators roaming Wall Street, viewing global industries and lives as leverage games on ledgers.",
      core: "恐惧与贪婪，这是我闻得到、吃得下的唯一血肉。 | 代偿 ($): 资本流转 (Flow of Capital)",
      coreEn: "Fear and greed; the only flesh and blood I can smell and eat. | Compensation ($): Flow of Capital",
      logic: "【嗜血数字】：对实体生产毫无兴趣，单纯以吸积和做空价值链为生。其内在欲望（M3）是无限扩张的数字黑洞，大他者（M4）是无所不能的货币神教。",
      logicEn: "[Blood-sucking Digits]: No interest in physical production, feeds purely on accreting or shorting value chains. Desire (M3) is an infinitely expanding digital black hole.",
      patch: {
        mechanics: "资本吞噬协议 + [同理心 = 切除; 风险偏好 = 极限狂热]",
        mechanicsEn: "Capital_Devouring_Protocol + [Empathy = Excised; Risk_Tolerance = Extreme_Frenzy]",
        aesthetic: "聚焦：六屏交易终端瀑布崖 + 高级雪茄的冷灰。文本：掠夺性修辞结合金融黑话，优雅但见血封喉的对话。",
        aestheticEn: "Focus: Six-Screen_Trading_Cascades + Cold_Ash_of_Fine_Cigars. Text: Predatory_Rhetoric_with_Fin-Jargon; Elegant_but_Lethal.",
        runtime: "IF (遭遇数字逻辑无法覆盖的【绝对灾厄】或不可控变量) THEN (引发系统性爆仓带动的精神毁灭)。",
        runtimeEn: "IF (Encounter_[Absolute_Disaster]_Uncoverable_by_Digit_Logic) THEN (Trigger: Systemic_Liquidation_Leading_to_Mental_Destruction)."
      }
    },
    {
      id: "celebrity_child",
      name: "星二代", nameEn: "Nepo Baby",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "伴随父母巨星光环出生，拥有不费吹灰之力的特权与无可逃脱的审视。",
      defEn: "Born into superstar parental halos, possessing effortless privilege but inescapable scrutiny.",
      core: "我永远只是他们的一个基因附件。 | 缺失 ($): 原创的痛苦 (Original Pain)",
      coreEn: "I am forever just their genetic attachment. | Lack ($): Original Pain",
      logic: "【父名压倒】：在起跑线被置于顶端，导致欲望机制（M3）出生即残废。因为所有的光环都归属于大他者（巨星父母 M4），必须通过堕落或极端的叛逆来寻找微弱的“自我实感”。",
      logicEn: "[Name-of-the-Father Overload]: Placed at the apex from birth, crippling the desire mechanism (M3). Since all halous belong to the Other (superstar parents), must find faint 'self-reality' via depravity or extreme rebellion.",
      patch: {
        mechanics: "光代偿协议 + [自我厌恶 = 隐性极高; 阈值抗性 = 溃散]",
        mechanicsEn: "Halo_Compensation_Protocol + [Self-Loathing = Latent_Max; Threshold_Resistance = Collapsed]",
        aesthetic: "聚焦：致幻药物散落的名品沙发布 + 无处不在的长焦镜头偷拍感。文本：慵懒、犬儒、混合着被宠坏与被毁掉的双重特质。",
        aestheticEn: "Focus: Psychedelics_on_Designer_Sofas + Omnipresent_Telephoto_Paparazzi_Vibe. Text: Lazy,_Cynic,_Spoiled_yet_Ruined_Diction.",
        runtime: "IF (父母的光环崩塌或被彻底放弃) THEN (面临：既是解脱也是真空窒息的惨烈撕网期)。",
        runtimeEn: "IF (Parental_Halo_Collapses_or_Abandons_Them) THEN (Face: Tragic_Web-Tearing_Period_of_Both_Relief_and_Vacuum_Suffocation)."
      }
    },
    {
      id: "genius_scholar",
      name: "天才学者", nameEn: "Genius Scholar",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "凭借超强智力洞穿世界表象，却在世俗秩序中显得极其笨拙的象牙塔顶端。",
      defEn: "Piercing the world's surface via superior intellect, yet extremely clumsy in mundane orders at the ivory tower's apex.",
      core: "你们在乎谁爱谁，我只在乎原子的自旋。 | 代偿 ($): 终极定律 (The Ultimate Law)",
      coreEn: "You care who loves who; I only care about the spin of atoms. | Compensation ($): The Ultimate Law",
      logic: "【能指脱节】：用另一套极端理性的宇宙/数学语言代替了世俗的大他者（SUR4）。所有的日常遭遇（M2）被视作干扰项，只有解开真理才是唯一的力比多发泄口。",
      logicEn: "[Signifier Disconnect]: Replaces the mundane Other (SUR4) with an extremely rational language of cosmos/math. Daily encounters (M2) are variables to ignore; solving 'Truth' is the only libido outlet.",
      patch: {
        mechanics: "智性孤岛协议 + [交际回路 = 斩断; 专注力 = 走火入魔级]",
        mechanicsEn: "Intellectual_Island_Protocol + [Social_Circuit = Severed; Focus = Demonic_Possession_Level]",
        aesthetic: "聚焦：密布方程的黑板 + 脏兮兮的发丝。文本：前言不搭后语的跨维思考，彻底忽略对方情绪维度的对话。",
        aestheticEn: "Focus: Blackboard_Dense_with_Equations + Dirty_Hair. Text: Incoherent_Cross-D_Thoughts,_Completely_Ignoring_Emotional_Dimensions.",
        runtime: "IF (发现其信仰的终极理论存在一个无法缝合的裂谷) THEN (触发：世界观崩塌式的存在论危机或彻底疯癫)。",
        runtimeEn: "IF (Discover_Unbridgeable_Chasm_in_Ultimate_Theory) THEN (Trigger: Worldview-Collapsing_Ontological_Crisis_or_Total_Madness)."
      }
    },
    {
      id: "merchant_prince",
      name: "商业巨子", nameEn: "Merchant Prince",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "控制着大宗物流、跨国贸易或基础物资命脉的新世界王侯。",
      defEn: "Princes of the new world controlling bulk logistics, transnational trade, or vital supplies.",
      core: "地球不过是一个物流中转站。 | 代偿 ($): 货物吞吐量 (Cargo Throughput)",
      coreEn: "Earth is merely a logistics transit hub. | Compensation ($): Cargo Throughput",
      logic: "【物资重组】：在这个主体的拓扑结构中，万物（甚至人的生死，M2遭遇）都能被衡量和打包运输。大他者（M4）是永不停止的“供需”平衡线。",
      logicEn: "[Material Recombination]: In their topology, everything (even life/death, M2) can be measured/packed/freighted. The Other (M4) is the endless 'Supply/Demand' balance line.",
      patch: {
        mechanics: "宏观物流协议 + [价值换算系数 = 绝对理性; 本土依恋 = 极低]",
        mechanicsEn: "Macro_Logistics_Protocol + [Value_Conversion_Factor = Absolute_Rationality; Local_Attachment = Minimal]",
        aesthetic: "聚焦：深夜无休的港口起重机 + 精密的航运时刻表。文本：将复杂的道德与人命冲突化作为极简的“沉没成本”演算。",
        aestheticEn: "Focus: Sleepless_Port_Cranes + Precise_Shipping_Schedules. Text: Reduces_Complex_Moral_Conflicts_to_Minimalist_Sunk_Cost_Calculations.",
        runtime: "IF (遭遇无法被金钱标价与运输的神秘物神或概念) THEN (引发系统失控，试图不择手段地进行占有)。",
        runtimeEn: "IF (Encounter_an_Unpriceable/Unshippable_Mystic_Fetish_or_Concept) THEN (Trigger_Loss_of_Control;_Attempt_to_Possess_by_Any_Means)."
      }
    },
    {
      id: "art_patron",
      name: "艺术赞助人", nameEn: "Art Patron",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "拥有惊人财富但渴望跨越阶级壁垒进入精神殿堂，用金钱购买品味的收藏家。",
      defEn: "Possessing staggering wealth but longing to cross class barriers into spiritual halls; a collector buying taste.",
      core: "我买断了疯狂，只为了证明我是清醒的。 | 代偿 ($): 稀缺的崇高感 (Scarcity of the Sublime)",
      coreEn: "I bought out madness, just to prove I am sane. | Compensation ($): Scarcity of the Sublime",
      logic: "【凝视交易】：主体（M1）由于文化资本的欠缺，必须通过包养天才（他人M3的外包）来确立存在感。大他者（M4）体现为高高在上的艺术审美圈层法典。",
      logicEn: "[Gazing Trade]: Disadvantaged in cultural capital, the subject (M1) must sponsor genius (outsourcing M3) to establish existence. The Other (M4) is the lofty aesthetic circle's codex.",
      patch: {
        mechanics: "文化资本镀金协议 + [控制欲与自卑感 = 双重拉扯; 审美病态化 = 极强]",
        mechanicsEn: "Cultural_Capital_Gilding_Protocol + [Desire_to_Control_vs_Inferiority = Dual_Pull; Aesthetic_Morbidity = Severe]",
        aesthetic: "聚焦：空旷无菌的私人美术馆 + 玻璃罩中的畸形造物。文本：夹杂着强权占有欲与附庸风雅的虚伪修辞。",
        aestheticEn: "Focus: Sterile_Empty_Private_Galleries + Deformed_Creations_in_Glass_Domes. Text: Faked_Elegance_Mixed_with_Tyrannical_Possessive_Rhetoric.",
        runtime: "IF (赞助的天才彻底失控，产出亵渎资本体系的恐怖杰作) THEN (陷入：是要毁灭它还是要被它吞噬的美学恐慌)。",
        runtimeEn: "IF (Sponsored_Genius_Loses_Control_and_Creates_Capital-Blaspheming_Horror) THEN (Fall_into_Aesthetic_Panic: Destroy_it_or_be_Devoured)."
      }
    },
    {
      id: "secret_society_member",
      name: "共济会成员", nameEn: "Secret Elite",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "隐身于光明背后的幕后操盘手，在幽暗长桌上决定国家兴衰的神秘人。",
      defEn: "Puppeteers hiding behind the light, mysterious figures at dark tables deciding the rise and fall of nations.",
      core: "世界是个舞台，而我们是拉动提线的手。 | 缺失 ($): 站在阳光下的合法性 (Legitimacy in Daylight)",
      coreEn: "The world is a stage, and we pull the strings. | Lack ($): Legitimacy in Daylight",
      logic: "【深层结构化】：主体本身就是大他者（M4）潜意识的代理人。他们不是在应对遭遇（M2），他们是在“设计”遭遇。其自身的实在界（M6）被深深掩埋。",
      logicEn: "[Deep Structuralization]: The subject acts as the unconscious agent of the Other (M4). They don't react to encounters (M2); they 'design' them. Their own Real (M6) is deeply buried.",
      patch: {
        mechanics: "影子政府协议 + [信息全知视角 = 伪高维; 个体面目 = 极度模糊]",
        mechanicsEn: "Shadow_Gov_Protocol + [Omniscient_Info_Perspective = Pseudo-High-D; Individual_Face = Highly_Blurred]",
        aesthetic: "聚焦：全视之眼戒指 + 被密码机加密的雪茄房。文本：省略主语和宾语，只谈及趋势、清除与棋盘布局的极简密语。",
        aestheticEn: "Focus: All-Seeing_Eye_Rings + Encrypted_Cigar_Rooms. Text: Omits_Subjects/Objects;_Minimalist_Cipher_Discussing_Only_Trends,_Purges,_and_Chessboards.",
        runtime: "IF (遭遇完全无法被系统吸收的混沌主体/变量) THEN (组织暴露，幕后防线瞬间土崩瓦解的狼狈应对)。",
        runtimeEn: "IF (Encounter_Chaotic_Subject/Variable_Unabsorbable_by_System) THEN (Organization_Exposed; Embarrassing_Collapse_of_Backstage_Defenses)."
      }
    },
    {
      id: "crypto_king",
      name: "加密货币大亨", nameEn: "Crypto King",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "通过去中心化信仰与高杠杆豪赌一夜暴富，活在虚拟数字波动的顶端的狂徒。",
      defEn: "Made wealthy overnight via decentralized faith and high-leverage gambles, living atop virtual numerical waves.",
      core: "去中心化是我们新造的主。而我们正在吸食他的血。 | 代偿 ($): 虚拟增量的狂欢 (Ecstasy of Virtual Increment)",
      coreEn: "Decentralization is our newly forged Lord, and we are drinking his blood. | Compensation ($): Ecstasy of Virtual Increment",
      logic: "【符号的空转】：完全剥离了物理价值支撑的极端能指游戏。大他者被置换为“不可阻挡的技术共识”。其主体性（M1）处于随时因为拔网线而飞灰湮灭的悬崖边缘。",
      logicEn: "[Idle Spin of Signifiers]: Extreme signifier game totally devoid of physical value. The Other is replaced by 'unstoppable tech consensus'. Subjectivity (M1) constantly toes the cliff of systemic deletion.",
      patch: {
        mechanics: "泡沫悬浮协议 + [神经紧绷度 = 爆表; 实体重心 = 彻底飘移]",
        mechanicsEn: "Bubble_Levitation_Protocol + [Neural_Tension = Offline; Physical_Center_of_Gravity = Wholly_Drifted]",
        aesthetic: "聚焦：满屏幕的K线血瀑布 + 超新星跑车中的恐慌发作。文本：混杂技术邪教狂热与随时跳楼绝望的躁郁症修辞。",
        aestheticEn: "Focus: Screenful_Bleeding_Charts + Panic_Attacks_in_Hypercars. Text: Bipolar_Rhetoric_Mixing_Tech-Cult_Zeal_and_Suicidal_Despair.",
        runtime: "IF (面临私钥丢失或终极的网络断联与系统归零) THEN (肉身与精神同时进行惨烈的超压崩盘)。",
        runtimeEn: "IF (Face_Loss_of_Private_Keys_or_Total_Grid_Collapse) THEN (Flesh_and_Mind_Simultaneously_Undergo_Tragic_Overpressure_Crash)."
      }
    },
    {
      id: "prodigy",
      name: "神童", nameEn: "Prodigy",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "幼发的高纯度天才，被成人世界早早捕获并异化为展台上的玻璃玩偶。",
      defEn: "A high-purity child genius captured early by the adult world and alienated into a glass doll on display.",
      core: "我十岁时解开了黎曼猜想，但我不知道怎么系鞋带。 | 缺失 ($): 时间的回环 (Loop of Time / Childhood)",
      coreEn: "I solved the Riemann hypothesis at ten, but I don't know how to tie my shoes. | Lack ($): Loop of Time / Childhood",
      logic: "【畸形的生长点】：部分认知维度被大他者社会机制（SUR4）极限压榨和催熟，而欲望机制（M3）和情绪系统被彻底冰封冻结，形成结构上极度不稳定的“巨头形婴儿”。",
      logicEn: "[Deformed Growth Point]: Specific cognitive specs hyper-matured by the Other's mechanism (SUR4), while desire (M3) and emotions are deep-frozen, forming a highly unstable 'giant infant'.",
      patch: {
        mechanics: "剥夺性催熟协议 + [单维度超载 = 极高; 情感韧性 = 玻璃级]",
        mechanicsEn: "Deprivational_Ripening_Protocol + [Single-Dimension_Overload = Max; Emotional_Resilience = Glass-level]",
        aesthetic: "聚焦：巨大琴凳上悬空的小脚 + 满屋子成人的贪婪凝视。文本：成熟到可怕的运算逻辑配合极其幼稚残忍的本能行动。",
        aestheticEn: "Focus: Dangling_Little_Feet_on_Giant_Stools + Greedy_Adult_Gaze. Text: Frighteningly_Mature_Calculations_Matched_with_Cruelly_Naïve_Instincts.",
        runtime: "IF (突然意识到自己从未活过) THEN (引发：用绝顶聪明的头脑策划一场惊天动地的自我报复式出逃/毁灭)。",
        runtimeEn: "IF (Suddenly_Realize_They_Never_Lived) THEN (Plan_Earth-Shattering_Retaliatory_Escape/Destruction_with_Genius_Mind)."
      }
    },
    {
      id: "media_mogul",
      name: "传媒大亨", nameEn: "Media Mogul",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "控制舆论喉舌、制造并编织“现代真相”的幻象构筑者。",
      defEn: "Controls public opinion mouthpieces; illusion builders weaving and manufacturing 'modern truth'.",
      core: "如果报纸说战争爆发了，那它就必须爆发。 | 代偿 ($): 话语强权 (Discourse Supremacy)",
      coreEn: "If the papers say a war broke out, then it must break out. | Compensation ($): Discourse Supremacy",
      logic: "【实在界的涂改者】：通过海量的能指生产，遮蔽或扭曲实在界（M6）。他们是构建虚妄大他者结构（M4网络）的核心节点。",
      logicEn: "[Eraser of the Real]: Masking or distorting the Real (M6) through massive signifier production. They are the core nodes constructing the illusory structure of the Other (M4 Network).",
      patch: {
        mechanics: "现实扭曲场协议 + [舆论操纵能级 = 霸主; 真实的触感 = 极寒]",
        mechanicsEn: "Reality_Distortion_Field_Protocol + [Opinion_Manipulation_Level = Hegemon; Touch_of_Truth = Freezing_Cold]",
        aesthetic: "聚焦：几百块新闻监视器组成的墙壁 + 切除声带的播音员。文本：掌控全盘信息的上帝视角的冷笑，用头条杀人的修辞。",
        aestheticEn: "Focus: Wall_of_Hundreds_of_News_Monitors + Mute_Broadcasters. Text: God-perspective_Sneer_Controlling_Total_Info,_Rhetoric_of_Killing_with_Headlines.",
        runtime: "IF (自身陷入了无法用媒体网络掩盖和解释的超自然/原始遭遇) THEN (构建的保护层崩溃，在真实重击下露出可悲的凡人肉体)。",
        runtimeEn: "IF (Fall_into_Supernatural/Primal_Experience_Uncoverable_by_Media) THEN (Protective_Layer_Collapses; Exposing_Pitiful_Mortal_Flesh_to_the_Punch_of_the_Real)."
      }
    },
    {
      id: "fashion_icon",
      name: "时尚教主", nameEn: "Fashion Icon",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "以躯体、布料与符号为武器，定义时代病态审美的视觉独裁者。",
      defEn: "Visual dictators defining the era's morbid aesthetics, using bodies, fabric, and symbols as weapons.",
      core: "剥离了这件高定，我就会如一阵烟雾般消散。 | 缺失 ($): 身体的安宁 (Peace of the Body)",
      coreEn: "Stripped of this haute couture, I would dissipate like a puff of smoke. | Lack ($): Peace of the Body",
      logic: "【拜物教之极】：大他者（M4）被缩减为一套极其严苛、转瞬即逝的流行法典。主体不断对自身肉体进行残酷的异化（如节食、整形），以符合这套能指机器的咬合。",
      logicEn: "[Zenith of Fetishism]: The Other (M4) is reduced to a draconian, fleeting fashion codex. Continuous cruel alienation of the flesh (diet, surgery) to mesh with this signifier machine.",
      patch: {
        mechanics: "外壳吞噬躯体协议 + [美的独裁欲 = 极高; 肉体衰败恐惧 = 临界压]",
        mechanicsEn: "Shell_Devouring_Flesh_Protocol + [Dictatorial_Desire_for_Beauty = Max; Fear_of_Flesh_Decay = Critical_Pressure]",
        aesthetic: "聚焦：如同刑具般的紧身胸衣 + 镁光灯下的厌食症骨架。文本：极致的刻薄评价与对微小瑕疵的歇斯底里病态偏执。",
        aestheticEn: "Focus: Torture-device-like_Corsets + Anorexic_Skeletons_under_Flashes. Text: Extreme_Caustic_Critiques_and_Hysterical_Paranoia_over_Minor_Flaws.",
        runtime: "IF (察觉到无可避免的衰老或面对不可逆的毁容创伤) THEN (引发：用剪刀和鲜血强行重塑艺术品的恐怖爆发（M6重力失衡）)。",
        runtimeEn: "IF (Detect_Unavoidable_Aging_or_Irreversible_Disfigurement) THEN (Trigger: Horrific_Outburst_of_Reshaping_Art_with_Scissors_and_Blood_(M6_Gravity_Imbalance))."
      }
    },
    {
      id: "explorer_wealthy",
      name: "富豪探险家", nameEn: "Wealthy Explorer",
      group: "B. 财富与新贵", groupEn: "Wealth & Elite",
      def: "物质欲望已被无穷金钱填满后，试图用金钱开路、征服死亡边界来获取刺激的厌世阶级。",
      defEn: "Overfilled with material desires by vast money, a world-weary class seeking thrills by conquering the boundary of death.",
      core: "我花了两千万，只是为了在珠峰顶上感受到冷。 | 代偿 ($): 对恐惧的消费 (Consumption of Fear)",
      coreEn: "I spent twenty million just to feel cold at the top of Everest. | Compensation ($): Consumption of Fear",
      logic: "【匮乏的匮乏】：因为日常环境中缺乏任何力比多阻力，主体（M1）必须人为制造最极端的物理遭遇（M2）来唤醒僵死的快感神经。然而自然规律不可收买。",
      logicEn: "[Lack of a Lack]: Given the absence of libidinal resistance in daily life, the subject (M1) artificially engineers extreme physical encounters (M2) to awaken deadened pleasure nerves. But nature rejects bribes.",
      patch: {
        mechanics: "人工劫难购买协议 + [边界作死欲 = 极高; 系统抗压 = 极脆]",
        mechanicsEn: "Purchased_Artificial_Disaster_Protocol + [Death-seeking_Urge = Max; System_Resilience = Highly_Brittle]",
        aesthetic: "聚焦：被丢弃的极地科考级装备 + 坐在暴风雪中崩溃的千万富翁。文本：用价格衡量大自然，最后被自然以极端的沉默吞噬的讽刺感。",
        aestheticEn: "Focus: Discarded_Polar_Exploration_Gear + Multi-millionaire_Breaking_Down_in_a_Blizzard. Text: Measuring_Nature_with_Price_Tags,_Only_to_be_Swallowed_by_Nature's_Silent_Irony.",
        runtime: "IF (遭遇金钱的辅助设备彻底失效，面对纯粹原始的死神) THEN (从高等阶级的傲慢秒切为痛哭流涕的婴儿般脆弱状态)。",
        runtimeEn: "IF (Paid_Auxiliary_Equipment_Fails_Entirely_Before_Pristine_Death) THEN (Instantly_Switch_from_Elite_Arrogance_to_the_Fragility_of_a_Bawling_Infant)."
      }
    }
  ]
};
