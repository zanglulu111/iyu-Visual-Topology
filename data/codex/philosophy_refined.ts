import { LacanCategory } from './lacan_dictionary';

/**
 * 哲学核心辞典 (New Structure 2024)
 * Based on the user provided outline for Hegel, Marx, Lacan, and Zizek.
 */

// 1. 黑格尔思想索引 (HEGEL)
export const HEGEL_INDEX: LacanCategory[] = [
    {
        id: "hegel_core",
        name: "一、核心命题与方法论",
        enName: "Core & Methodology",
        desc: "精神演化的核心驱动力与辩证法则。",
        concepts: [
            { id: "h_substance_subject", name: "实体即主体", enName: "Substance is Subject", category: "Core", shortDef: "真理不仅被理解为实体，且同样被理解为主体。" },
            { id: "h_dialectic", name: "辩证法", enName: "Dialectics", category: "Core", shortDef: "正-反-合的内在运动逻辑。" },
            { id: "h_aufhebung", name: "扬弃", enName: "Aufhebung", category: "Core", shortDef: "既克服又保留，在更高层面达成统一。" },
            { id: "h_negativity", name: "否定性", enName: "Negativity", category: "Core", shortDef: "主体的核心力量，通过否定确立自身。" },
            { id: "h_negation_negation", name: "否定之否定", enName: "Negation of Negation", category: "Core", shortDef: "通过双重否定达成更高层面的肯定。" },
            { id: "h_unity_opposites", name: "矛盾的统一", enName: "Unity of Opposites", category: "Core", shortDef: "对立面在统一体中相互包含与转化。" },
            { id: "h_concrete_universal", name: "具体的普遍性", enName: "Concrete Universality", category: "Core", shortDef: "包含所有特殊性的具体整体。" },
            { id: "h_teleology", name: "内在目的论", enName: "Intrinsic Teleology", category: "Core", shortDef: "事物发展的目的蕴含在其自身逻辑中。" }
        ]
    },
    {
        id: "hegel_logic_being",
        name: "二、逻辑学",
        enName: "Science of Logic",
        desc: "1、存在论（Sein）",
        concepts: [
            { id: "h_pure_being_nothing", name: "存在与虚无（纯有/无）", enName: "Being and Nothing", category: "Logic", shortDef: "绝对起点的真空状态：极致的饱满在逻辑原点塌缩为绝对的空无。" },
            { id: "h_becoming", name: "变", enName: "Becoming", category: "Logic", shortDef: "有与无之间的辩证统一，生成的法则。" },
            { id: "h_dasein", name: "定在", enName: "Determinate Being", category: "Logic", shortDef: "具体的、有规定性的存在。" },
            { id: "h_being_for_self", name: "自为存在", enName: "Being-for-self", category: "Logic", shortDef: "否定了外部限制、回到自身的存在。" },
            { id: "h_quality_quantity_measure", name: "质量度", enName: "Quality, Quantity, Measure", category: "Logic", shortDef: "存在论的三个演化阶段。" }
        ]
    },
    {
        id: "hegel_logic_essence",
        name: "二、逻辑学",
        enName: "Science of Logic",
        desc: "2、本质论（Wesen）",
        concepts: [
            { id: "h_identity_difference", name: "同一与差异", enName: "Identity & Difference", category: "Logic", shortDef: "本质的反思运动。" },
            { id: "h_contradiction", name: "矛盾", enName: "Contradiction", category: "Logic", shortDef: "本质运动的真理，发展的动力。" },
            { id: "h_ground", name: "根据", enName: "Ground", category: "Logic", shortDef: "事物存在的根本支撑。" },
            { id: "h_essence_appearance", name: "现象与本质", enName: "Appearance & Essence", category: "Logic", shortDef: "本质及其表现形式的辩证关系。" },
            { id: "h_actuality", name: "现实性", enName: "Actuality", category: "Logic", shortDef: "本质与现象的统一。" }
        ]
    },
    {
        id: "hegel_logic_concept",
        name: "二、逻辑学",
        enName: "Science of Logic",
        desc: "3、概念论（Begriff）",
        concepts: [
            { id: "h_subjective_concept", name: "主观概念", enName: "Subjective Concept", category: "Logic", shortDef: "判断与推论的逻辑形式。" },
            { id: "h_objectivity", name: "客观性", enName: "Objectivity", category: "Logic", shortDef: "概念在客体中的外化。" },
            { id: "h_idea", name: "理念", enName: "The Idea", category: "Logic", shortDef: "主观性与客观性的绝对统一。" }
        ]
    },
    {
        id: "hegel_phen_consciousness",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "1、意识",
        concepts: [
            { id: "h_sense_certainty", name: "感性确定性", enName: "Sensuous Certainty", category: "Phenomenology", shortDef: "直接经验的匮乏及其真理。" },
            { id: "h_perception", name: "知觉", enName: "Perception", category: "Phenomenology", shortDef: "事物作为多重属性的统一。" },
            { id: "h_understanding", name: "知性", enName: "Understanding", category: "Phenomenology", shortDef: "透过现象看本质的规律运作。" }
        ]
    },
    {
        id: "hegel_phen_self_consciousness",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "2、自我意识",
        concepts: [
            { id: "h_desire_phen", name: "欲望", enName: "Desire", category: "Phenomenology", shortDef: "意识确立自身的原动力。" },
            { id: "h_master_slave", name: "主奴辩证法", enName: "Master-Slave", category: "Phenomenology", shortDef: "通过承认实现自我意识的生死斗争。" },
            { id: "h_recognition", name: "承认", enName: "Recognition", category: "Phenomenology", shortDef: "主体性确立的社会条件，在对他者的承认中实现自身。" },
            { id: "h_alienation", name: "异化", enName: "Alienation", category: "Phenomenology", shortDef: "自我的残酷外化：主体通过制造一个敌对的客观世界来确证自身的创造伟力。" },
            { id: "h_ansich_fursich", name: "自在与自为", enName: "In-itself & For-itself", category: "Phenomenology", shortDef: "精神的觉醒律点：从混沌的潜能（自在）向彻底、清醒且痛苦的自我实现（自为）的质变。" },
            { id: "h_stoicism", name: "斯多葛主义", enName: "Stoicism", category: "Phenomenology", shortDef: "退回思想内里的抽象自由。" },
            { id: "h_skepticism", name: "怀疑主义", enName: "Skepticism", category: "Phenomenology", shortDef: "对外部现实的否定性力量。" },
            { id: "h_unhappy_consciousness", name: "苦恼意识", enName: "Unhappy Consciousness", category: "Phenomenology", shortDef: "内部分裂的主体及其彼岸投射。" }
        ]
    },
    {
        id: "hegel_phen_reason",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "3、理性",
        concepts: [
            { id: "h_observing_reason", name: "观察的理性", enName: "Observing Reason", category: "Phenomenology", shortDef: "将自然视为客体的认知阶段。" },
            { id: "h_practical_reason", name: "实践的理性", enName: "Practical Reason", category: "Phenomenology", shortDef: "理性的暴力降临：通过行动消解现状，将世界强制扭曲为主体的镜像。" },
            { id: "h_individuality_all", name: "个体性与普遍性", enName: "Individuality & Universality", category: "Phenomenology", shortDef: "精神动物园的生存游戏：个体 Vanity 向虚假普遍性能指的危险跃迁。" }
        ]
    },
    {
        id: "hegel_phen_spirit",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "4、精神",
        concepts: [
            { id: "h_ethical_world", name: "伦理世界", enName: "Ethical World", category: "Phenomenology", shortDef: "静默的绝对权力：个体在习俗与法律的无形网格中，作为“零件”而获得的神圣整体性。" },
            { id: "h_culture_alienation", name: "教化", enName: "Culture (Bildung)", category: "Phenomenology", shortDef: "人格的自我破碎与重组：主体通过投身于异己的文明秩序，在自我的彻底丧失中换取社会性的通行证。" },
            { id: "h_morality_view", name: "道德世界观", enName: "Moral Worldview", category: "Phenomenology", shortDef: "伪君子的最高语法：主体通过推迟‘至善’的实现，在无休止的道德表演中维持一种虚假的内心圆满。" }
        ]
    },
    {
        id: "hegel_phen_religion",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "5、宗教",
        concepts: [
            { id: "h_religion_phen", name: "宗教（精神现象学阶段）", enName: "Religion in Phenomenology", category: "Phenomenology", shortDef: "精神的自我投影：主体通过将自身力量异化为神圣表象，在‘彼岸’的幻象中寻找‘此岸’的真相。" },
        ]
    },
    {
        id: "hegel_phen_absolute",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "6、绝对知识",
        concepts: [
            { id: "h_absolute_knowing", name: "绝对知识", enName: "Absolute Knowing", category: "Phenomenology", shortDef: "莫比乌斯环的闭合：精神彻底剥离感性外壳，意识到整个异化的世界史不过是它自身逻辑的波澜。" }
        ]
    },
    {
        id: "hegel_obj_right",
        name: "四、客观精神（《法哲学原理》）",
        enName: "Objective Spirit",
        desc: "1、抽象法",
        concepts: [
            { id: "h_property", name: "所有权", enName: "Property", category: "Objective Spirit", shortDef: "意志的首次拓殖：主体通过对外部物的占有，将空洞的自由意志转化为客观的人格存在。" },
            { id: "h_contract", name: "契约", enName: "Contract", category: "Objective Spirit", shortDef: "欲望的和平协议：两个隔离的意志通过物的转让达成公认，是主体在客观世界中互相捕获的法律仪式。" },
            { id: "h_wrong", name: "不法", enName: "Wrong (Unrecht)", category: "Objective Spirit", shortDef: "法的崩裂缝隙：意志对普遍契约的背叛，从无意识的偏离、精致的欺诈到挑战系统主权的暴力犯罪。" },
        ]
    },
    {
        id: "hegel_obj_morality",
        name: "四、客观精神（《法哲学原理》）",
        enName: "Objective Spirit",
        desc: "2、道德",
        concepts: [
            { id: "h_purpose_responsibility", name: "意图与责任", enName: "Purpose & Responsibility", category: "Objective Spirit", shortDef: "行动的判决书：主体通过对其致动范围内因果链的认领，在残酷的历史后果中确证自身的道德存有。" },
            { id: "h_good_conscience", name: "善与良心", enName: "The Good & Conscience", category: "Objective Spirit", shortDef: "内心的最高独裁：主观意志在‘至善’旗帜下的自我法庭，是个体对抗外部世界的最后一道虚妄或神圣的防线。" }
        ]
    },
    {
        id: "hegel_obj_sittlichkeit",
        name: "四、客观精神（《法哲学原理》）",
        enName: "Objective Spirit",
        desc: "3、伦理生活（Sittlichkeit）",
        concepts: [
            { id: "h_ethical_life", name: "伦理生活", enName: "Sittlichkeit", category: "Objective Spirit", shortDef: "客观精神的终极归宿：个体在制度、习俗与法律的无形网络中，通过彻底的‘去主观化’而获得的、与绝对者的血肉共生。" },
            { id: "h_family", name: "家庭", enName: "Family", category: "Objective Spirit", shortDef: "温柔的共有祭坛：个体在爱与血缘的无意识统一中彻底溶解，是人格进入社会前最后的、也是最危险的生物防空洞。" },
            { id: "h_civil_society", name: "市民社会", enName: "Civil Society", category: "Objective Spirit", shortDef: "精神动物园的生存博弈：个体作为互为手段的原子，在匮乏与依赖的精密齿轮中进行的一场永无止境的利己战争。" },
            { id: "h_state", name: "国家", enName: "The State", category: "Objective Spirit", shortDef: "地上的神物：伦理理念的最后执行者，通过对个体偶然性的绝对吞噬，实现自由在历史中的最高闭环。" }
        ]
    },
    {
        id: "hegel_absolute_spirit",
        name: "五、绝对精神",
        enName: "Absolute Spirit",
        desc: "精神在其终极形式中的自我认知。",
        concepts: [
            { id: "h_absolute_spirit_key", name: "绝对精神", enName: "Absolute Spirit", category: "Absolute Spirit", shortDef: "全知视角的终极闭环：精神剥离主客差异，在艺术、宗教与哲学的莫比乌斯环中完成对自身的绝对占有与逻辑归乡。" },
            { id: "h_art", name: "艺术", enName: "Art", category: "Absolute Spirit", shortDef: "绝对真理的感性闪烁：精神通过物质外壳进行的一场自我凝视，是理念在肉身与石头中的短暂受难。" },
            { id: "h_religion_abs", name: "宗教", enName: "Religion", category: "Absolute Spirit", shortDef: "彼岸的逻辑补偿：主体在表象的朦胧光影中，通过神圣符号的祭祀完成对绝对深渊的间接献祭。" },
            { id: "h_philosophy_abs", name: "哲学", enName: "Philosophy", category: "Absolute Spirit", shortDef: "莫比乌斯环的逻辑闭合：精神彻底剥离感性和表象的残骸，以纯粹概念的形式实现对宇宙总体律动的冷峻掌握与自我回归。" }
        ]
    },
    {
        id: "hegel_history",
        name: "六、历史哲学",
        enName: "Philosophy of History",
        desc: "世界历史作为自由意识进步的记录。",
        concepts: [
            { id: "h_hist_teleology", name: "历史目的论", enName: "Historical Teleology", category: "History", shortDef: "理性的血腥杀戮台：偶然性的尸骸堆砌成通往绝对自由的必然阶梯，个体的挣扎仅是‘理性的机巧’所播下的棋子。" },
            { id: "h_world_spirit", name: "世界精神", enName: "World Spirit", category: "History", shortDef: "跨越文明废墟的寄生幽灵：当它降临于‘世界历史个人’，个体便异化为承载时代总体意志的冰冷容器，在完成使命后被作为枯壳弃置。" },
            { id: "h_historical_freedom", name: "历史中的自由发展", enName: "Freedom in History", category: "History", shortDef: "自由意识的进步过程。" },
            { id: "h_historical_stages", name: "历史分期", enName: "Historical Periods", category: "History", shortDef: "从东方走向西方的精神演进之路。" }
        ]
    }
];

export const MARX_INDEX: LacanCategory[] = [
    {
        id: "marx_methodology",
        name: "一、核心命题与方法论",
        enName: "Core & Methodology",
        desc: "唯物主义的暴力翻转：将颠倒的世界重新安置于坚硬的生产大地之上。",
        concepts: [
            { id: "m_hist_mat", name: "历史唯物主义", enName: "Historical Materialism", category: "Methodology", shortDef: "社会存在决定社会意识，物质生产是历史进步的最终裁决者。" },
            { id: "m_dialectical_mat", name: "辩证唯物主义", enName: "Dialectical Materialism", category: "Methodology", shortDef: "物质在矛盾中运动，辩证法是物质自我演化的硬核逻辑。" },
            { id: "m_praxis", name: "实践优先", enName: "Praxis", category: "Methodology", shortDef: "真理不在冥想中，而在对现实的暴烈改造中显现。" },
            { id: "m_critique_weapon", name: "批判的武器与武器的批判", enName: "Critique of Weapon", category: "Methodology", shortDef: "物质力量只能用物质力量来摧毁，理论一经掌握群众就会变成物质力量。" },
            { id: "m_change_world", name: "改变世界", enName: "Changing the World", category: "Methodology", shortDef: "哲学家以往只是解释世界，而问题在于改变世界。" }
        ]
    },
    {
        id: "marx_economics_commodity",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "1.商品理论",
        concepts: [
            { id: "m_commodity_duality", name: "商品的二重性", enName: "Commodity Duality", category: "Economics", shortDef: "使用价值与价值的对峙：物在其有用性与可交换性之间的撕裂。" },
            { id: "m_value_form", name: "价值形式", enName: "Form of Value", category: "Economics", shortDef: "价值的幽灵式存在：从个别等价物向一般等价物的逻辑飞跃。" },
            { id: "m_commodity_fetishism", name: "商品拜物教", enName: "Commodity Fetishism", category: "Economics", shortDef: "物的拟人化与人的物化：社会关系异华为物与物之间的神秘统治。" }
        ]
    },
    {
        id: "marx_economics_money",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "2.货币理论",
        concepts: [
            { id: "m_money_origin", name: "货币的起源与职能", enName: "Origin & Function of Money", category: "Economics", shortDef: "一般等价物的凝固：欲望的绝对尺度及其在流通中的主权。" },
            { id: "m_money_fetishism", name: "货币拜物教", enName: "Money Fetishism", category: "Economics", shortDef: "金钱作为神之肉身：对抽象财富的这种盲目崇拜与主体异化。" }
        ]
    },
    {
        id: "marx_economics_capital",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "3.资本理论",
        concepts: [
            { id: "m_capital_formula", name: "资本的一般公式 (G-W-G')", enName: "General Formula of Capital", category: "Economics", shortDef: "增殖的贪欲：货币转化为资本的莫比乌斯环，价值在运动中自我扩张。" },
            { id: "m_constant_variable_capital", name: "不变资本与可变资本", enName: "Constant & Variable Capital", category: "Economics", shortDef: "死劳动与活劳动：机器对工人的吞噬，以及唯有活劳动才能创造价值的真理。" },
            { id: "m_surplus_value", name: "剩余价值", enName: "Surplus Value", category: "Economics", shortDef: "资本的绝对之血：雇佣劳动无偿为资本家创造的剩余劳动价值。" },
            { id: "m_exploitation_rate", name: "剥削率", enName: "Rate of Exploitation", category: "Economics", shortDef: "掠夺的数学：剩余价值与可变资本的比率，揭示资本的残酷效率。" },
            { id: "m_capital_accumulation", name: "资本积累", enName: "Capital Accumulation", category: "Economics", shortDef: "剩余价值的再生产：资本规模在剥夺中无限扩张的狂热过程。" },
            { id: "m_organic_composition", name: "资本的有机构成", enName: "Organic Composition", category: "Economics", shortDef: "机器取代肉身：不变资本相对于可变资本的占比提升，技术进步带来的社会性排挤。" },
            { id: "m_falling_profit_rate", name: "利润率下降趋势", enName: "Falling Rate of Profit", category: "Economics", shortDef: "资本的自我诅咒：由于由于有机构成提高而导致的内在盈利困境与危机。" }
        ]
    },
    {
        id: "marx_economics_labor",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "4.劳动理论",
        concepts: [
            { id: "m_labor_power_commodity", name: "劳动力商品化", enName: "Commoditization of Labor Power", category: "Economics", shortDef: "主体能量的挂牌上市：劳动者被迫以出卖自身生命时间换取生存资料的仪式。" },
            { id: "m_abstract_concrete_labor", name: "抽象劳动与具体劳动", enName: "Abstract & Concrete Labor", category: "Economics", shortDef: "劳动的二重性：创造使用价值的感性活动与创造价值的生理量耗费。" },
            { id: "m_socially_necessary_labor_time", name: "社会必要劳动时间", enName: "Socially Necessary Labor Time", category: "Economics", shortDef: "价值的隐形尺标：在平均生产条件下，社会通过时间成本确立的交换标准。" },
            { id: "m_alienated_labor_key", name: "异化劳动", enName: "Alienated Labor", category: "Economics", shortDef: "生命力的自我剥夺：劳动者在生产中沦为工具，由于创造的越多而变得越匮乏。" }
        ]
    },
    {
        id: "marx_alienation",
        name: "三、异化理论",
        enName: "Theory of Alienation",
        desc: "《1844年经济学哲学手稿》的核心剖析。",
        concepts: [
            { id: "m_alienation_general", name: "异化", enName: "Alienation", category: "Alienation", shortDef: "主体性在客体化过程中的丧失：原本属于主体的力量转化为一种独立于主体的、敌对的异己力量。" },
            { id: "m_alienation_product", name: "与劳动产品的异化", enName: "Alienation from Product", category: "Alienation", shortDef: "创造物作为敌对力量：劳动者生产出的世界越辉煌，其自身世界就越贫瘠。" },
            { id: "m_alienation_process", name: "与劳动过程的异化", enName: "Alienation from Process", category: "Alienation", shortDef: "劳动的自我否定：劳动不再是需要的满足，而只是满足肉体需要的一种强迫手段。" },
            { id: "m_alienation_species", name: "类本质", enName: "Species-being", category: "Alienation", shortDef: "主体性的这种由于非人化：人类特性的有意识的生命活动被降格为维持生存的畜生本能。" },
            { id: "m_alienation_others", name: "与他人的异化", enName: "Alienation from Others", category: "Alienation", shortDef: "社会连接的断裂：在异化劳动中，人与人的关系在竞争中彻底转化为利益的互相捕获与排斥。" },
            { id: "m_alienation_aufhebung", name: "异化的扬弃：共产主义", enName: "Aufhebung of Alienation", category: "Alienation", shortDef: "对人的本质的这种回归：通过私有财产的彻底废除，达成主体与其自身及自然的这种和解。" }
        ]
    },
    {
        id: "marx_history",
        name: "四、历史理论",
        enName: "Historical Theory",
        desc: "历史作为生产力与生产关系决斗的竞技场。",
        concepts: [
            { id: "m_production_mode", name: "生产方式", enName: "Mode of Production", category: "History", shortDef: "社会生存的这种总体架构：生产力与生产关系的辩证统一，规定了整个时代的影调。" },
            { id: "m_forces_relations_production", name: "生产关系", enName: "Relations of Production", category: "History", shortDef: "社会演进的这种底层齿轮：生产工具的质变终将撑破陈旧的所有制外壳。" },
            { id: "m_base_superstructure", name: "经济基础与上层建筑", enName: "Base & Superstructure", category: "History", shortDef: "建筑学的社会隐喻：生产关系总和支撑起法权与政治的华丽宫殿，并决定其意识形态的影调。" },
            { id: "m_social_formations", name: "社会形态演变", enName: "Social Formations", category: "History", shortDef: "从原始公社到共产主义：由于由于自由度的这种规律性扩张与所有制的颠覆性跨越。" },
            { id: "m_class_struggle", name: "阶级斗争", enName: "Class Struggle", category: "History", shortDef: "至今一切社会的历史都是阶级斗争的历史。" },
            { id: "m_proletariat", name: "无产阶级", enName: "Proletariat", category: "History", shortDef: "历史的这种决斗者：除了自身的劳动力以外一无所有的阶级，由于由于极致的这种匮乏而承载了绝对的这种革命潜能。" },
            { id: "m_revolution_theory", name: "革命", enName: "Revolution", category: "History", shortDef: "阶级统治的这种剧烈断裂：通过暴力打破国家机器，作为通往新世界的逻辑中点。" }
        ]
    },
    {
        id: "marx_ideology",
        name: "五、意识形态理论",
        enName: "Ideology Theory",
        desc: "统治秩序的这种视觉滤镜。",
        concepts: [
            { id: "m_ideology_false", name: "意识形态作为虚假意识", enName: "Ideology as False Consciousness", category: "Ideology", shortDef: "被遮蔽的真实：主体由于通过扭曲的观念框架来解释自身的处境，从而由于由于在服从而不自知。" },
            { id: "m_ruling_class_ideas", name: "统治阶级的思想", enName: "Ruling Class Ideas", category: "Ideology", shortDef: "话语的霸权：占统治地位的物质力量在观念领域中同步确立的霸权形式。" },
            { id: "m_isa_althusser", name: "意识形态国家机器", enName: "ISA", category: "Ideology", shortDef: "无形的纠偏：学校、家庭、传媒等机构在潜意识层面完成的这种主体呼唤与功能性服从。" },
            { id: "m_commodity_fetishism_ideology", name: "商品拜物教作为意识形态", enName: "Commodity Fetishism as Ideology", category: "Ideology", shortDef: "商品的这种神学魅力：市场交换的这种客观性假象对社会阶级关系的这种系统性遮蔽。" }
        ]
    },
    {
        id: "marx_politics",
        name: "六、政治理论",
        enName: "Political Theory",
        desc: "权力夺取与国家机器的消亡。",
        concepts: [
            { id: "m_state_theory", name: "国家理论", enName: "State Theory", category: "Politics", shortDef: "阶级统治的工具：管理阶级共同事务的这种专门的行政委员会。" },
            { id: "m_dictatorship_proletariat", name: "无产阶级专政", enName: "Dictatorship of the Proletariat", category: "Politics", shortDef: "过渡时期的这种硬核权力：通过对旧剥削阶级的这种强制压制，保护革命成果。" },
            { id: "m_paris_commune", name: "巴黎公社经验", enName: "Paris Commune", category: "Politics", shortDef: "彻底民主的这种暴烈尝试：通过官员普选与职业化常备军的这种废除，建立人民的主权。" },
            { id: "m_two_stages_communism", name: "共产主义的两个阶段", enName: "Two Stages of Communism", category: "Politics", shortDef: "从按劳分配向按需分配的跨越，是人类从必然王国向自由王国的惊险跃迁。" }
        ]
    },
    {
        id: "marx_hegel_relation",
        name: "七、与黑格尔的关系",
        enName: "Relation with Hegel",
        desc: "颠倒与扬弃：在迷雾中寻找逻辑的肉身。",
        concepts: [
            { id: "m_marx_hegel_inversion", name: "颠倒黑格尔", enName: "Hegelian Inversion", category: "Hegel", shortDef: "从头立地：让原本在云端飞行的辩证法重新着陆于现实的物质生产过程。" },
            { id: "m_retaining_dialectics", name: "保留辩证法", enName: "Retaining Dialectics", category: "Hegel", shortDef: "剥离唯心主义的死皮，取其否定性与发展性的这种合理内核。" },
            { id: "m_alienation_reconstruction", name: "异化概念的改造", enName: "Reconstructing Alienation", category: "Hegel", shortDef: "从绝对精神的自我外化转向人类劳动的这种现实性被剥夺过程。" },
            { id: "m_aufhebung_civil_society", name: "扬弃市民社会理论", enName: "Aufhebung of Civil Society", category: "Hegel", shortDef: "超越霍布斯式的原子化斗争，在更高维度的联合体中达成个体的这种真正丰富性。" }
        ]
    }
];

// 3. 拉康思想索引 (LACAN)

export const LACAN_INDEX: LacanCategory[] = [
    {
        id: "lacan_topology_1",
        name: "一、第一拓扑（RSI 三界）",
        enName: "The First Topology (RSI)",
        desc: "拉康理论的基石。",
        concepts: [
            { id: "l_imaginary", name: "想象界", enName: "The Imaginary", category: "RSI", shortDef: "镜像阶段、自我的误认、幻觉的完整性。" },
            { id: "l_symbolic", name: "符号界", enName: "The Symbolic", category: "RSI", shortDef: "大他者、语言、律法、能指链。" },
            { id: "l_real", name: "实在界", enName: "The Real", category: "RSI", shortDef: "不可能之物、创伤、剩余、无法符号化的核心。" },
            { id: "l_borromean", name: "博罗米结", enName: "Borromean Knot", category: "RSI", shortDef: "三界互相扣连的拓扑结构。" }
        ]
    },
    {
        id: "lacan_topology_2",
        name: "二、第二拓扑（主体结构）",
        enName: "The Second Topology",
        desc: "主体的分裂与形成。",
        concepts: [
            { id: "l_barred_subject", name: "被划杠的主体 ($)", enName: "The Barred Subject", category: "Subject", shortDef: "进入语言后必然的分裂与缺失。" },
            { id: "l_object_a", name: "对象 a", enName: "objet petit a", category: "Subject", shortDef: "欲望的原因，实在界的剩余，掉落的客体。" },
            { id: "l_other", name: "大他者 / 小他者", enName: "Big Other / little other", category: "Subject", shortDef: "象征秩序 vs 镜像认同对象。" },
            { id: "l_unconscious", name: "潜意识的语言结构", enName: "Unconscious structured like a language", category: "Subject", shortDef: "隐喻与换喻在主体中的运作。" }
        ]
    },
    {
        id: "lacan_drive",
        name: "三、欲望与驱力动力学",
        enName: "Desire & Drives",
        desc: "主体的动力机制。",
        concepts: [
            { id: "l_desire", name: "欲望的图表", enName: "Graph of Desire", category: "Dynamics", shortDef: "“Che vuoi?”（你想要什么？）" },
            { id: "l_jouissance", name: "享乐 (Jouissance)", enName: "Jouissance", category: "Dynamics", shortDef: "痛爽，超越快乐原则的致命快感。" },
            { id: "l_death_drive", name: "死亡驱力", enName: "Death Drive", category: "Dynamics", shortDef: "不死者的强迫性重复，生命的过度。" },
            { id: "l_fantasy", name: "基本幻想 ($ <> a)", enName: "Fundamental Fantasy", category: "Dynamics", shortDef: "主体与对象 a 的关系公式，支撑现实的屏障。" }
        ]
    },
    {
        id: "lacan_clinical",
        name: "四、临床结构与话语",
        enName: "Clinical Structures & Discourses",
        desc: "社会连接与病理结构。",
        concepts: [
            { id: "l_structures", name: "三大结构", enName: "Three Structures", category: "Clinical", shortDef: "神经症（压抑）、性倒错（否认）、精神病（排除）。" },
            { id: "l_discourses", name: "四大话语", enName: "Four Discourses", category: "Clinical", shortDef: "主人、大学、歇斯底里、分析家话语。" },
            { id: "l_paternal", name: "父之名 / 父性隐喻", enName: "Name-of-the-Father", category: "Clinical", shortDef: "进入符号界的关键钥匙。" },
            { id: "l_sinthome", name: "圣状 (Sinthome)", enName: "Sinthome", category: "Clinical", shortDef: "晚期拉康：自我加冕与艺术化的生活方式。" }
        ]
    }
];

// 4. 齐泽克思想索引 (ZIZEK)
export const ZIZEK_INDEX: LacanCategory[] = [
    {
        id: "zizek_ideology",
        name: "一、意识形态批判",
        enName: "Critique of Ideology",
        desc: "《意识形态的崇高客体》核心命题。",
        concepts: [
            { id: "z_cynical", name: "犬儒主义", enName: "Cynical Reason", category: "Ideology", shortDef: "“他们知道，但依然在做。”" },
            { id: "z_sublime_object", name: "意识形态的崇高客体", enName: "Sublime Object of Ideology", category: "Ideology", shortDef: "支撑社会现实的空洞能指。" },
            { id: "z_interpassivity", name: "交互被动性", enName: "Interpassivity", category: "Ideology", shortDef: "外包享乐，让对象替我感受。" },
            { id: "z_commodity_fetishism", name: "商品拜物教的拉康化", enName: "Lacanian Commodity Fetishism", category: "Ideology", shortDef: "商品作为对象 a 的幻象。" }
        ]
    },
    {
        id: "zizek_politics_violence",
        name: "二、政治、暴力与阶级斗争",
        enName: "Politics & Violence",
        desc: "当代权力的运作机制。",
        concepts: [
            { id: "z_violence", name: "暴力的三种形态", enName: "Three Forms of Violence", category: "Politics", shortDef: "主观暴力、符号暴力、系统性（客观）暴力。" },
            { id: "z_intruder", name: "入侵者 / 邻居", enName: "The Intruder / Neighbor", category: "Politics", shortDef: "对他人享乐方式的恐惧与种族主义。" },
            { id: "z_class_struggle", name: "作为视差的阶级斗争", enName: "Class Struggle as Parallax", category: "Politics", shortDef: "社会整体中无法弥合的缝隙。" },
            { id: "z_state_law", name: "法律的淫秽补充", enName: "Obscene Supplement of Law", category: "Politics", shortDef: "权力运作背后的非正式、压抑性享乐规则。" }
        ]
    },
    {
        id: "zizek_ontology",
        name: "三、本体论与真实遭遇",
        enName: "Ontology & The Real",
        desc: "视差、虚无与绝对者。",
        concepts: [
            { id: "z_parallax", name: "视差之见", enName: "The Parallax View", category: "Ontology", shortDef: "观察位置改变导致的客体断裂。" },
            { id: "z_less_than_nothing", name: "少于无", enName: "Less Than Nothing", category: "Ontology", shortDef: "黑格尔与拉康的本体论综合：虚无本身的不稳定。" },
            { id: "z_desert_real", name: "实在界的荒漠", enName: "The Desert of the Real", category: "Ontology", shortDef: "剥离意识形态滤镜后的噩梦式现实。" },
            { id: "z_big_other_void", name: "大他者的空无", enName: "Void of the Big Other", category: "Ontology", shortDef: "没有人在开飞机：没有保障真相的最终他者。" }
        ]
    },
    {
        id: "zizek_culture_act",
        name: "四、文化研究与革命行动",
        enName: "Culture & The Act",
        desc: "电影解构与真实行动。",
        concepts: [
            { id: "z_looking_awry", name: "斜目而视", enName: "Looking Awry", category: "Culture", shortDef: "通过流行文化垃圾寻找真理的方法论。" },
            { id: "z_decaf", name: "无咖啡因的现实", enName: "Decaf Reality", category: "Culture", shortDef: "拒绝致命内核的虚假多元主义。" },
            { id: "z_authentic_act", name: "真实的行动", enName: "The Authentic Act", category: "Culture", shortDef: "改变可能性坐标的、创伤性的自杀式飞跃。" },
            { id: "z_christian_atheism", name: "基督教无神论", enName: "Christian Atheism", category: "Culture", shortDef: "上帝之死带来的激进自由与共同体。" }
        ]
    }
];