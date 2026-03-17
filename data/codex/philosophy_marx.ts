
import { LacanCategory } from './lacan_dictionary';

// --- 5. 马克思辞典 (MARX) ---
export const MARX_DICTIONARY: LacanCategory[] = [
    {
        id: "marx_hist_mat",
        name: "I. 历史唯物主义 (The Engine of History)",
        enName: "Historical Materialism",
        desc: "并不是人们的意识决定了人们的存在，相反，是人们的社会存在决定了人们的意识。",
        concepts: [
            {
                id: "base_superstructure",
                name: "经济基础与上层建筑",
                enName: "Base & Superstructure",
                category: "History",
                shortDef: "经济生产方式（地基）决定了法律、政治、宗教、艺术（房子）。",
                detailed: {
                    definition: "社会就像一座大厦。底层是**经济基础**（谁拥有工厂，怎么生产）。上层是**上层建筑**（法律、国家、哲学、艺术）。\n地基动摇了（比如蒸汽机发明了），上面的房子结构也会随之改变（封建制变成资本主义，骑士精神变成自由贸易）。",
                    analogy: "**案例：版权法**\n在古代没有版权法，因为那是手抄书时代（经济基础）。印刷术普及后（生产力变化），才产生了版权法（上层建筑）来保护出版商利益。",
                    application: "世界观构建：在设定一个世界时，先设定它的生产方式（如蒸汽朋克/AI奴隶），再推导它的法律和道德。"
                }
            },
            {
                id: "forces_production",
                name: "生产力",
                enName: "Forces of Production",
                category: "History",
                shortDef: "人类改造自然的能力。技术、工具、劳动者的技能。",
                detailed: {
                    definition: "历史发展的最终动力。手推磨产生的是封建主为首的社会，蒸汽磨产生的是工业资本家为首的社会。\n生产力是最活跃、最革命的因素，它总是试图突破旧的生产关系。",
                    analogy: "**案例：互联网**\n互联网技术（生产力）的出现，正在摧毁传统的雇佣制（生产关系），产生了零工经济和数字游民。",
                    application: "M2 (遭遇)：新技术的发明往往是打破旧世界平衡的那个“事件”。"
                }
            },
            {
                id: "relations_production",
                name: "生产关系",
                enName: "Relations of Production",
                category: "History",
                shortDef: "人们在生产过程中结成的社会关系（谁拥有生产资料，谁出卖劳动力）。",
                detailed: {
                    definition: "当生产力发展到一定阶段，旧的生产关系（如地主-农奴）就会成为阻碍。这时社会革命就会爆发，打碎旧锁链，建立适应新生产力的关系（如资本家-工人）。",
                    analogy: "**案例：穿不下的衣服**\n孩子长大了（生产力发展），衣服小了勒得慌（生产关系阻碍）。必须换新衣服（革命）。",
                    application: "M4 (大他者)：反派往往代表着“旧的、僵死的生产关系”，试图压制新力量的崛起。"
                }
            },
            {
                id: "social_being",
                name: "社会存在",
                enName: "Social Being",
                category: "History",
                shortDef: "“不是意识决定生活，而是生活决定意识。”",
                detailed: {
                    definition: "你的价值观、审美、道德判断，不是你天生就有的，而是由你的阶级地位、经济状况决定的。\n一个坐在办公室里的白领和一个煤矿工人，他们的“意识”必然不同，因为他们的“存在”不同。",
                    analogy: "**案例：何不食肉糜**\n皇帝无法理解百姓为什么饿死，不是因为他笨，是因为他的“社会存在”限制了他的想象力。",
                    application: "角色塑造：角色的性格和信仰必须扎根于他的经济地位（M1），否则就是悬浮的。"
                }
            },
            {
                id: "primitive_accumulation",
                name: "原始积累",
                enName: "Primitive Accumulation",
                category: "History",
                shortDef: "资本来到世间，从头到脚，每个毛孔都滴着血和肮脏的东西。",
                detailed: {
                    definition: "资本主义起步时的第一桶金，通常通过暴力掠夺完成（圈地运动、殖民、奴隶贸易）。它剥夺了劳动者的生产资料，迫使他们变成无产者。",
                    analogy: "**案例：圈地运动**\n羊吃人。把农民赶出土地，他们无路可走，只能进工厂做工。",
                    application: "前传/背景：豪门家族（M4）的财富起源往往隐藏着一段血腥的原始积累罪恶。"
                }
            },
            {
                id: "materialism",
                name: "唯物主义",
                enName: "Materialism",
                category: "History",
                shortDef: "世界是物质的，物质第一性。先有胃口，后有哲学。",
                detailed: {
                    definition: "反对唯心主义（认为精神创造世界）。马克思认为，我们首先必须吃喝住穿，然后才能从事政治、科学、艺术、宗教。",
                    analogy: "**案例：鲁滨逊**\n鲁滨逊在荒岛上首先考虑的是找水和食物（物质），而不是思考上帝是否存在（精神）。",
                    application: "生存类剧情：将角色还原到最基础的物质需求层面，剥去文明的矫饰。"
                }
            },
            {
                id: "historical_necessity",
                name: "历史必然性",
                enName: "Historical Necessity",
                category: "History",
                shortDef: "历史有其内在规律，不以个人意志为转移。",
                detailed: {
                    definition: "个人（哪怕是拿破仑）只是历史的工具。时势造英雄。如果拿破仑没出现，历史也会造出另一个像他一样的人来完成任务。",
                    analogy: "**案例：剧本**\n演员（个人）可以发挥，但剧本的大纲（历史规律）是写好的。",
                    application: "M4 (宿命)：一种不可抗拒的时代洪流感，个人在大时代面前的无力。"
                }
            },
            {
                id: "asiatic_mode",
                name: "亚细亚生产方式",
                enName: "Asiatic Mode of Production",
                category: "History",
                shortDef: "基于灌溉农业的东方专制主义。国家是最高地主，个人依附于共同体。",
                detailed: {
                    definition: "马克思用来描述古代东方（中国/印度）的一种特殊模式。由于需要组织大规模水利工程，导致了强大的中央集权。土地公有（归皇帝），村社自给自足，社会结构长期停滞。",
                    analogy: "**案例：治水**\n为了修长城或大运河，必须有一个绝对强权来调动百万劳工。",
                    application: "世界观：用于构建古代东方或奇幻帝国的社会结构。"
                }
            }
        ]
    },
    {
        id: "marx_pol_econ",
        name: "II. 资本的逻辑 (Critique of Political Economy)",
        enName: "Capital & Value",
        desc: "解剖资本主义的运作机制：金钱、劳动与价值的秘密。",
        concepts: [
            {
                id: "commodity",
                name: "商品",
                enName: "The Commodity",
                category: "Economy",
                shortDef: "资本主义的细胞。用于交换的劳动产品。",
                detailed: {
                    definition: "商品包含矛盾：\n1. **使用价值**：它能干什么（衣服能保暖）。\n2. **交换价值**：它值多少钱（一件衣服=两双鞋）。\n在资本主义中，交换价值压倒了使用价值。我们生产不是为了用，而是为了卖。",
                    analogy: "**案例：倒牛奶**\n大萧条时，资本家把牛奶倒进河里（为了保住交换价值），也不给穷人喝（无视使用价值）。",
                    application: "M3 (欲望对象)：所有的麦高芬都是一个绝对化的“交换价值”符号。"
                }
            },
            {
                id: "labor_theory_value",
                name: "劳动价值论",
                enName: "Labor Theory of Value",
                category: "Economy",
                shortDef: "价值的唯一源泉是无差别的人类劳动。",
                detailed: {
                    definition: "商品的价值量取决于生产它所需的“社会必要劳动时间”。机器不创造价值，它只是转移价值。只有活劳动（人）才能创造新价值。",
                    analogy: "**案例：全自动工厂**\n如果工厂里全是机器人，没有工人，那么产品的价格最终会跌到只有机器折旧费和电费，利润会归零。",
                    application: "赛博朋克设定：即使科技再发达，底层人类依然被剥削，因为系统需要“活人”的痛苦来产生价值。"
                }
            },
            {
                id: "surplus_value",
                name: "剩余价值",
                enName: "Surplus Value",
                category: "Economy",
                shortDef: "工人创造的价值 > 工人得到的工资。差额就是资本家的利润。",
                detailed: {
                    definition: "资本家没抢也没偷，但他剥削了。秘密在于：劳动力这种商品很特殊，它能创造出比它自身价值更大的价值。\n你干8小时活，前4小时是为自己干（工资），后4小时是白白为老板干（剩余价值）。",
                    analogy: "**案例：吸血鬼**\n马克思常把资本比作吸血鬼，它是死的劳动，只有吸吮活劳动才能复活。",
                    application: "M4 (大他者) 的动机：体制的唯一目的就是榨取剩余价值（M6 代价）。"
                }
            },
            {
                id: "m_c_m",
                name: "资本循环 (M-C-M')",
                enName: "M-C-M'",
                category: "Economy",
                shortDef: "钱(M) -> 商品(C) -> 更多的钱(M')。为生产而生产，为积累而积累。",
                detailed: {
                    definition: "前资本主义是 C-M-C（卖粮换钱买布），目的是消费（C）。\n资本主义是 M-C-M'（用钱买原料造货卖更多的钱），目的是增殖（M'）。\n这个循环不能停，一旦停止，资本就死了（经济危机）。",
                    analogy: "**案例：红舞鞋**\n资本就像穿上红舞鞋，必须不停地跳舞（增长），直到累死。",
                    application: "M5 (驱力)：一种停不下来的、盲目的增长冲动（如无限扩张的AI或病毒）。"
                }
            },
            {
                id: "abstract_labor",
                name: "抽象劳动",
                enName: "Abstract Labor",
                category: "Economy",
                shortDef: "劳动失去了具体形式（织布/打铁），变成了可以计算的时间耗费。",
                detailed: {
                    definition: "在计时工资下，你的劳动不再是独特的创造，而是一滴水汇入大海。所有人的劳动都被抹平了，变成了同质化的“时间流”。",
                    analogy: "**案例：打卡机**\n打卡机记录的只是时间。它不在乎你在想什么，它只在乎你把这8小时卖给了谁。",
                    application: "M1 (主体)：被异化为时间单位的角色（如《时间规划局》）。"
                }
            },
            {
                id: "falling_rate_profit",
                name: "利润率下降趋势",
                enName: "Tendency of the Rate of Profit to Fall",
                category: "Economy",
                shortDef: "技术越进步，利润率越低。资本主义的绝症。",
                detailed: {
                    definition: "因为只有人能创造剩余价值，随着机器（不变资本）越来越多，人（可变资本）比例下降，利润率必然下降。\n为了维持利润，资本家必须疯狂扩大生产、卷入更多市场、加倍剥削。",
                    analogy: "**案例：内卷**\n越努力越穷。系统为了维持运转，不得不自我吞噬。",
                    application: "末世背景：解释为什么在一个科技高度发达的世界里，人们反而过得更惨。"
                }
            },
            {
                id: "industrial_reserve_army",
                name: "产业后备军",
                enName: "Industrial Reserve Army",
                category: "Economy",
                shortDef: "失业者是系统必需的。他们用来恐吓在职者压低工资。",
                detailed: {
                    definition: "资本主义需要始终保持一部分人失业。如果你不听话，门外有无数饥饿的人等着顶替你的位置。",
                    analogy: "**案例：外卖骑手**\n“你不干有的是人干。” 这句话就是产业后备军的威力。",
                    application: "M6 (代价)：随时可能被替代的恐惧。"
                }
            },
            {
                id: "money_universal",
                name: "货币/一般等价物",
                enName: "Universal Equivalent",
                category: "Economy",
                shortDef: "货币是激进的平均主义者。它抹平了一切质的区别。",
                detailed: {
                    definition: "钱能买到良心，能买到荣誉。在钱面前，圣骨和妓女是一样的，都有价格。\n货币将万物可通约化，它是世俗的神。",
                    analogy: "**案例：金钱万能**\n莎士比亚：“这黄色的奴隶……可以使黑的变成白的，丑的变成美的。”",
                    application: "M3 (幻想)：金钱作为一种绝对力量的象征。"
                }
            }
        ]
    },
    {
        id: "marx_alienation",
        name: "III. 异化与拜物教 (Alienation & Fetishism)",
        enName: "The Human Condition",
        desc: "人如何变成鬼，物如何变成神。",
        concepts: [
            {
                id: "alienation_labor",
                name: "异化劳动 (Estranged Labor)",
                enName: "Estranged Labor",
                category: "Alienation",
                shortDef: "劳动本是人的本质，现在却变成了对人的否定。越劳动，越丧失自我。",
                detailed: {
                    definition: "马克思区分了四种异化：\n1. **与产品异化**：造出的东西不属于我，甚至变成反过来控制我的力量（如造出机器取代自己）。\n2. **与生产活动异化**：工作是受罪，只有下班吃喝拉撒时才觉得自己是人。\n3. **与类本质异化**：人变成了仅求生存的动物。\n4. **人与人异化**：他人不是伙伴，而是竞争对手或工具。",
                    analogy: "**案例：卓别林**\n《摩登时代》里拧螺丝的工人，下班后看到女工衣服上的扣子也想拧。人变成了机器的副产品。",
                    application: "M1 (主体)：Visionary 的核心设定。主角在开场时往往处于这种极度异化的状态。"
                }
            },
            {
                id: "commodity_fetishism_marx",
                name: "商品拜物教 (Commodity Fetishism)",
                enName: "Commodity Fetishism",
                category: "Alienation",
                shortDef: "人与人的关系被掩盖在物与物的关系之下。物获得了神性。",
                detailed: {
                    definition: "桌子跳起舞来了。商品在市场上仿佛有自己的意志和生命。\n我们看不见背后的劳动者，只看见商品的价格。\n物统治了人。我们崇拜名牌，仿佛它们自带光环，其实那只是某种社会关系的投射。",
                    analogy: "**案例：神像**\n本来是人造的木头，人却跪下来拜它，求它保佑。商品也是如此，本来是人造的，人却成了它的奴隶。",
                    application: "M3 (欲望对象)：所有让主角着迷的物品（魔戒、限量版球鞋），本质上都是社会关系的幽灵。"
                }
            },
            {
                id: "reification",
                name: "物化 (Reification)",
                enName: "Reification (Verdinglichung)",
                category: "Alienation",
                shortDef: "卢卡奇的概念。不仅商品被拜物，人的意识结构也被“物化”了。",
                detailed: {
                    definition: "把流动的过程变成静止的物。把人变成数字、图表、绩效。\n当你看着一个人，计算他的“身价”、“颜值分”时，你就在物化他。你也把自己物化为待价而沽的商品（人力资源）。",
                    analogy: "**案例：相亲角**\n把人的身高、学历、收入列成表格，像买卖牲口一样匹配。这就是彻底的物化。",
                    application: "M4 (大他者)：系统看待主角的方式——不是作为人，而是作为数据包。"
                }
            },
            {
                id: "species_being",
                name: "类存在 (Species-Being)",
                enName: "Gattungswesen",
                category: "Alienation",
                shortDef: "人是自由自觉的活动者。人的本质在于创造性的、社会性的劳动。",
                detailed: {
                    definition: "这是马克思的人本主义理想。人不同于动物，动物和它的生命活动是直接同一的，人则把生命活动本身当作对象。\n异化就是剥夺了这种“类本质”，把人降级为动物。",
                    analogy: "**案例：艺术创作**\n当你忘我地画画、写作，不为钱，只为表达时，你就是在体验“类存在”。",
                    application: "M7 (结局)：真正的解放结局，是主角找回了“类存在”，哪怕只是瞬间。"
                }
            },
            {
                id: "money_fetishism",
                name: "货币拜物教",
                enName: "Money Fetishism",
                category: "Alienation",
                shortDef: "金钱被视为财富本身，而不仅仅是交换媒介。",
                detailed: {
                    definition: "原本钱是通往目的的桥梁，现在钱成了目的本身。\n守财奴宁愿饿死也要守着金币，因为金币代表了“抽象权力的可能性”。",
                    analogy: "**案例：葛朗台**\n金子是他活着的唯一动力。这是一种精神错乱，但也是资本主义的常态。",
                    application: "反派动机：纯粹的贪婪，为了数字增长而毁灭世界。"
                }
            }
        ]
    },
    {
        id: "marx_politics",
        name: "IV. 阶级与斗争 (Class & Struggle)",
        enName: "Political Praxis",
        desc: "至今一切社会的历史都是阶级斗争的历史。",
        concepts: [
            {
                id: "class_struggle",
                name: "阶级斗争",
                enName: "Class Struggle",
                category: "Politics",
                shortDef: "社会变革的引擎。压迫者和被压迫者之间永恒的战争。",
                detailed: {
                    definition: "社会不是和谐的整体，而是分裂的战场。\n自由民和奴隶、贵族和平民、资产阶级和无产阶级，处于不断的对立中。\n每一次斗争的结局，要么是社会的革命改造，要么是斗争各方同归于尽。",
                    analogy: "**案例：寄生虫**\n富人家庭和穷人家庭之间，哪怕表面客气，底层有着不可调和的气味（阶级）冲突。",
                    application: "M4 (冲突)：故事的核心冲突不应是个人的恩怨，而是阶级位置的冲突。"
                }
            },
            {
                id: "bourgeoisie",
                name: "资产阶级",
                enName: "Bourgeoisie",
                category: "Politics",
                shortDef: "现代社会的统治阶级。拥有生产资料，雇佣劳动。",
                detailed: {
                    definition: "马克思也赞扬过他们：“资产阶级在历史上曾经起过非常革命的作用。”他们推翻了封建制度，创造了巨大的生产力。\n但他们现在变成了阻碍，为了利润不得不剥削。",
                    analogy: "**案例：钢铁侠**\n托尼·斯塔克既是创造者（生产力），也是军火商（资本）。他的悲剧在于试图用资本的方式解决资本带来的问题。",
                    application: "M4 (反派)：不要把他们写成单纯的坏人，他们是资本人格化的载体，身不由己。"
                }
            },
            {
                id: "proletariat",
                name: "无产阶级",
                enName: "Proletariat",
                category: "Politics",
                shortDef: "除了锁链一无所有的人。资本主义的掘墓人。",
                detailed: {
                    definition: "他们没有生产资料，只能靠出卖劳动力为生。\n他们不仅是受苦的阶级，更是肩负历史使命的阶级——通过解放自己来解放全人类。",
                    analogy: "**案例：斯巴达克斯**\n奴隶起义。他们代表了普遍的真理，因为他们的利益与全人类的解放一致。",
                    application: "M1 (主角)：觉醒的工人、底层黑客。"
                }
            },
            {
                id: "lumpenproletariat",
                name: "流氓无产阶级",
                enName: "Lumpenproletariat",
                category: "Politics",
                shortDef: "旧社会的腐化物。乞丐、小偷、皮条客。容易被收买的暴徒。",
                detailed: {
                    definition: "他们虽然穷，但缺乏阶级意识。他们没有原则，谁给钱就跟谁走，常被反动派利用来充当打手。",
                    analogy: "**案例：黑帮打手**\n底层互害的典型工具。他们对同阶级的工人最狠。",
                    application: "配角/阻碍：那些为反派卖命的底层人。"
                }
            },
            {
                id: "petite_bourgeoisie",
                name: "小资产阶级",
                enName: "Petite Bourgeoisie",
                category: "Politics",
                shortDef: "小店主、自由职业者。摇摆不定，既羡慕大资产阶级，又害怕跌落成无产阶级。",
                detailed: {
                    definition: "他们的立场是矛盾的。经济繁荣时他们想往上爬，经济危机时他们变得激进（甚至变成法西斯）。\n狂热与绝望并在。",
                    analogy: "**案例：中产焦虑**\n拼命鸡娃，害怕阶层滑落，容易产生极右翼情绪。",
                    application: "M1 (主角)：最容易产生戏剧性内心冲突的阶层。"
                }
            },
            {
                id: "ideology_camera",
                name: "意识形态 (倒立成像)",
                enName: "Ideology (Camera Obscura)",
                category: "Politics",
                shortDef: "统治阶级的思想占统治地位。颠倒的现实映像。",
                detailed: {
                    definition: "就像照相机暗箱（Camera Obscura）把外面的景物倒立呈现在底片上。\n意识形态把现实颠倒了：把剥削说成是“自由契约”，把历史的偶然说成是“永恒的自然”。\n它是让我们戴着锁链还能心安理得跳舞的幻觉。",
                    analogy: "**案例：美国梦**\n“只要努力就能成功”——这是一个意识形态幻象，它掩盖了阶级固化的现实，让失败者怪自己不努力。",
                    application: "M0 (精神底色)：揭示故事世界中普遍相信的谎言。"
                }
            },
            {
                id: "religion_opium",
                name: "宗教/鸦片",
                enName: "Religion as Opium",
                category: "Politics",
                shortDef: "“宗教是人民的鸦片。” 是被压迫生灵的叹息，是无情世界的感情。",
                detailed: {
                    definition: "马克思并非单纯反宗教。他认为宗教是一种止痛药。人们现实太苦了，所以需要宗教来麻醉。\n要废除宗教，首先要废除产生宗教需求的那个苦难现实。",
                    analogy: "**案例：止痛药**\n你不治病（社会变革），只没收病人的止痛药（强行禁教），是残忍的。",
                    application: "M3 (幻想)：任何一种精神寄托（包括追星、二次元）都可以被视为现代鸦片。"
                }
            },
            {
                id: "class_consciousness",
                name: "阶级意识",
                enName: "Class Consciousness",
                category: "Politics",
                shortDef: "从“自在阶级”变成“自为阶级”。意识到我们是一个整体，并有共同的敌人。",
                detailed: {
                    definition: "工人一开始只是为了工资斗争（自在）。后来他们发现，所有工人的命运是连在一起的，要改变的是整个制度（自为）。\n这是一种觉醒。",
                    analogy: "**案例：工会成立**\n单个筷子易折断，一把筷子难折断。意识到团结的力量。",
                    application: "M7 (结局)：主角不仅自己赢了，还唤醒了周围的人。"
                }
            },
            {
                id: "state_committee",
                name: "国家 (委员会)",
                enName: "The State",
                category: "Politics",
                shortDef: "“现代国家政权不过是管理整个资产阶级的共同事务的委员会罢了。”",
                detailed: {
                    definition: "国家不是中立的仲裁者，它是统治阶级的暴力工具（军队、警察、监狱）。\n它的存在是为了维护既定的财产秩序。",
                    analogy: "**案例：保安**\n小区的保安是为业主（实际上是物业公司）服务的，不是为路人服务的。",
                    application: "M4 (大他者)：当主角触动核心利益时，国家机器会露出獠牙。"
                }
            },
            {
                id: "praxis",
                name: "实践 (Praxis)",
                enName: "Praxis",
                category: "Politics",
                shortDef: "“哲学家们只是用不同的方式解释世界，而问题在于改变世界。”",
                detailed: {
                    definition: "理论与行动的统一。真理不是在书斋里思考出来的，而是在改造世界的行动中被证实的。\n不仅要认识，更要行动。",
                    analogy: "**案例：学游泳**\n你在岸上读再多书也没用，必须跳下水（实践）。",
                    application: "M5 (驱力)：主角必须从“想”转变为“做”。"
                }
            }
        ]
    },
    {
        id: "marx_future",
        name: "V. 共产主义视界 (The Horizon)",
        enName: "The Realm of Freedom",
        desc: "关于未来的构想，从必然王国走向自由王国。",
        concepts: [
            {
                id: "communism",
                name: "共产主义",
                enName: "Communism",
                category: "Future",
                shortDef: "“共产主义对我们来说不是应当确立的状况……而是那种消灭现存状况的现实的运动。”",
                detailed: {
                    definition: "私有制的消灭。人的全面发展。不是一种乌托邦的终点，而是一个不断的运动过程。\n是人与自然、人与人之间矛盾的真正解决。",
                    analogy: "**案例：星际迷航**\n在《星际迷航》的未来，没有货币，人们工作是为了自我实现，这就是一种共产主义想象。",
                    application: "M7 (结局)：一种超越了现有矛盾的社会构想。"
                }
            },
            {
                id: "realm_freedom",
                name: "自由王国",
                enName: "Realm of Freedom",
                category: "Future",
                shortDef: "在必要劳动（必然王国）的彼岸，人类能力的发挥成为目的本身。",
                detailed: {
                    definition: "必然王国：为了生存必须干的活（种地、织布）。\n自由王国：生存解决后，为了兴趣干的活（写诗、科研、交际）。\n缩短工作日是根本条件。",
                    analogy: "**案例：周末**\n工作日是必然王国，周末是自由王国（理想状态下）。共产主义就是把全人类带入永恒的周末。",
                    application: "M7 (结局)：主角获得的终极自由——不再为生存焦虑，只为创造而活。"
                }
            },
            {
                id: "withering_state",
                name: "国家消亡",
                enName: "Withering Away of the State",
                category: "Future",
                shortDef: "当阶级消失，作为阶级压迫工具的国家也将不复存在。对人的统治由对物的管理取代。",
                detailed: {
                    definition: "国家不会被“废除”，它会自然“消亡”。当社会不再需要暴力来维持秩序时，国家就变成了博物馆里的古董（像青铜斧一样）。",
                    analogy: "**案例：家委会**\n理想的社区自治，不需要警察，大家商量着办。",
                    application: "M7 (结局)：无政府主义或高度自治的社群结局。"
                }
            },
            {
                id: "from_each_ability",
                name: "各尽所能，按需分配",
                enName: "From each according to his ability...",
                category: "Future",
                shortDef: "共产主义高级阶段的原则。劳动成为第一需要，而非负担。",
                detailed: {
                    definition: "当集体财富极大丰富，劳动变成了像呼吸、运动一样的快乐时，就不需要计件工资了。\n每个人自由发挥才智，每个人自由获取所需。",
                    analogy: "**案例：自助餐**\n你可以随便吃（按需），但因为你肚量有限且文明，你不会浪费。",
                    application: "M7 (结局)：资源无限/后稀缺社会的设定。"
                }
            },
            {
                id: "abolition_private_property",
                name: "消灭私有制",
                enName: "Abolition of Private Property",
                category: "Future",
                shortDef: "私有制是异化的根源。拥有变成了存在的对立面。",
                detailed: {
                    definition: "不是要剥夺个人的生活资料，而是要剥夺利用财产去奴役他人的权力（资本）。\n让世界重新成为“我们的”，而不是“我的”。",
                    analogy: "**案例：公园**\n公园是公有的，谁都可以去享受阳光和草地。没人能把公园圈起来收门票。",
                    application: "M6 (代价)：主角放弃占有欲，拥抱共享。"
                }
            }
        ]
    }
];
