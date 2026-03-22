export interface LacanConcept {
  id: string;
  name: string;
  enName: string;
  category: string;
  shortDef: string;
  author?: string;
  source?: string;
  tags?: string[];
  related?: string[];
  detailed?: {
      definition: string;
      analogy: string;
      application: string;
  };
}

export interface LacanCategory {
  id: string;
  name: string;
  enName: string;
  desc: string;
  concepts: LacanConcept[];
}

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
            { id: "h_good_conscience", name: "善与良心", enName: "The Good & Conscience", category: "Objective Spirit", shortDef: "内心的最高独裁：主观意志在'至善'旗帜下的自我法庭，是个体对抗外部世界的最后一道虚妄或神圣的防线。" }
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
            { id: "m_hist_mat", name: "历史唯物主义", enName: "Historical Materialism", category: "Methodology", shortDef: "垂直切割的社会解剖：社会存在决定社会意识，生产力与生产关系的矛盾运动作为历史演进的绝对重力场。" },
            { id: "m_dialectical_mat", name: "辩证唯物主义", enName: "Dialectical Materialism", category: "Methodology", shortDef: "物质内部矛盾驱动的演化逻辑：否定之否定的螺旋式上升，揭示物质世界在不断自我断裂与重构中达成的螺旋式飞跃。" },
            { id: "m_praxis", name: "实践", enName: "Praxis", category: "Methodology", shortDef: "从解释世界到改变世界的革命转向：它是真理唯一的感性确证，是主体在改造世界中改造自身的物质性活动。" },
            { id: "m_critique_weapon", name: "批判的武器与武器的批判", enName: "Critique of Weapon", category: "Methodology", shortDef: "理论如何转化为重工业力量：批判的武器不能代替武器的批判，理论一经掌握群众便成为摧毁大他者叙事的物质重力。" }
        ]
    },
    {
        id: "marx_economics_commodity",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "1.商品理论",
        concepts: [
            { id: "m_commodity_duality", name: "商品的二重性", enName: "Commodity Duality", category: "Economics", shortDef: "有用性与价值之血的对峙：物在其物质载体与作为爱欲拓扑折叠的‘价值’之间的剧烈撕裂。" },
            { id: "m_value_form", name: "价值形式", enName: "Form of Value", category: "Economics", shortDef: "价值的幽灵式肉身：揭示价值如何通过镜像（等价物）获取外部肉身，并最终在货币中达成符号霸权的逻辑飞跃。" },
            { id: "m_commodity_fetishism", name: "商品拜物教", enName: "Commodity Fetishism", category: "Economics", shortDef: "客观幻象的社会学演咒：社会关系被物与物之间的神秘统治所掩盖，物体获得了主人的神性，而人堕落为劳动的耗材。" }
        ]
    },
    {
        id: "marx_economics_money",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "2.货币理论",
        concepts: [
            { id: "m_money_origin", name: "货币的起源与职能", enName: "Origin & Function of Money", category: "Economics", shortDef: "一般等价物的凝固：价值形式异化产生的独立神性权力，作为万物量化尺标的冷酷主权。" },
            { id: "m_money_fetishism", name: "货币拜物教", enName: "Money Fetishism", category: "Economics", shortDef: "金钱作为神之肉身：对抽象财富的盲目膜拜，金钱不再是交换的中介，而成为了世界本身的目的。" }
        ]
    },
    {
        id: "marx_economics_capital",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "3.资本理论",
        concepts: [
            { id: "m_capital_formula", name: "资本的一般公式 (M-C-M')", enName: "General Formula of Capital (M-C-M')", category: "Economics", shortDef: "增殖的贪欲与莫比乌斯环：货币转化为资本后开启的无限螺旋，价值在吞噬物质中自我扩张的吸血鬼逻辑。" },
            { id: "m_constant_variable_capital", name: "不变资本与可变资本", enName: "Constant & Variable Capital", category: "Economics", shortDef: "死劳动与活劳动的受难平衡：冰冷的机器外壳（c）对人类活性能量（v）的精准抽吸。" },
            { id: "m_surplus_value", name: "剩余价值", enName: "Surplus Value", category: "Economics", shortDef: "资本的绝对之血：被盗窃的劳动时间，主体支付的生命溢出与大他者的享乐结晶。" },
            { id: "m_absolute_relative_surplus", name: "绝对剩余价值与相对剩余价值", enName: "Absolute & Relative Surplus Value", category: "Economics", shortDef: "剥削进化的双重技法：物理极限的暴力拉开与算法效率的无痕挤压。" },
            { id: "m_cooperation_industry", name: "协作、分工与大工业", enName: "Cooperation, Division of Labor & Modern Industry", category: "Economics", shortDef: "主体零件化的组织演变：从手艺之美到机器作为主权的“技术性反转”，人类沦为总机系统的生物接口。" },
            { id: "m_exploitation_rate", name: "剥削率", enName: "Rate of Exploitation", category: "Economics", shortDef: "掠夺的数学测准：剩余价值与可变资本的比率，揭示资本逻辑对主体压榨的残酷效率。" },
            { id: "m_capital_accumulation", name: "资本积累", enName: "Capital Accumulation", category: "Economics", shortDef: "剩余价值的再生产螺旋：资本规模在不断剥夺与再投资中无限扩张、直至吞噬所有外部性的狂热过程。" },
            { id: "m_primitive_accumulation", name: "原始积累", enName: "Primitive Accumulation", category: "Economics", shortDef: "资本的血腥地基：将生产者与生产资料暴力切割的史前史，资本来到世间每个毛孔都滴着血与肮脏的东西。" },
            { id: "m_reserve_army", name: "产业后备军", enName: "Reserve Army of Labor", category: "Economics", shortDef: "失业者作为系统的阻断阀：通过制造生存焦虑来压低主权工资、维持剥削弹性的库存生命管理机制。" },
            { id: "m_organic_composition", name: "资本的有机构成", enName: "Organic Composition", category: "Economics", shortDef: "系统重力的超载：不变资本相对于可变资本的占比提升，技术进步对人类活性的无情排挤。" },
            { id: "m_profit_rate_falling", name: "利润率趋于下降的规律", enName: "The Law of the Tendency of the Rate of Profit to Fall", category: "Economics", shortDef: "资本的熵死之咒：由于有机构成提高而导致的必然利润困境，揭示了系统愈高效愈接近自毁的逻辑终局。" }
        ]
    },
    {
        id: "marx_economics_crisis",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "5.危机与动态",
        concepts: [
            { id: "m_economic_crisis", name: "经济危机", enName: "Economic Crisis", category: "Economics", shortDef: "资本循环的断裂爆发：生产过剩导致的财富暴力毁灭，作为系统无法调和内部矛盾时的自我解构瞬间。" },
            { id: "m_reproduction_theory", name: "再生产理论", enName: "Reproduction Theory", category: "Economics", shortDef: "系统的整体代谢逻辑：社会总资本在两大部类交换中实现循环与更新，揭示了系统维持自身存在的深层稳态。" }
        ]
    },
    {
        id: "marx_economics_labor",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "4.劳动理论",
        concepts: [
            { id: "m_labor_power_commodity", name: "劳动力商品化", enName: "Commoditization of Labor Power", category: "Economics", shortDef: "主体能量的挂牌上市：人类生命潜能被剥离为可标价的交换价值，主体在自我变现中完成自我丧失。" },
            { id: "m_abstract_concrete_labor", name: "抽象劳动与具体劳动", enName: "Abstract & Concrete Labor", category: "Economics", shortDef: "劳动的二重性：感性活动的具体丰富性被均质化的工作时间所强行格式化、提纯为单一的价值量。" },
            { id: "m_socially_necessary_labor_time", name: "社会必要劳动时间", enName: "Socially Necessary Labor Time", category: "Economics", shortDef: "社会平均效率的绝对权力：作为抹除个体节奏的时间尺标，规定了主体在竞争场域中的生存重力。" },
            { id: "m_alienated_labor_key", name: "异化劳动", enName: "Alienated Labor", category: "Economics", shortDef: "生命力的镜像反扑：劳动者通过创造制造出反向主宰自身的敌对力量，陷入本体论层面的空洞与受难。" }
        ]
    },
    {
        id: "marx_alienation",
        name: "三、异化理论",
        enName: "Theory of Alienation",
        desc: "《1844年经济学哲学手稿》的核心剖析。",
        concepts: [
            { id: "m_alienation_general", name: "异化", enName: "Alienation", category: "Alienation", shortDef: "主体性在客体化过程中的丧失：原本属于主体的力量转化为一种独立于主体的、敌对的异己力量。" },
            { id: "m_private_property", name: "私有财产", enName: "Private Property", category: "Alienation", shortDef: "异化的物质形式：既是异化劳动的结果，又是异化劳动的原因，形成自我强化的循环。" },
            { id: "m_alienation_product", name: "与劳动产品的异化", enName: "Alienation from Product", category: "Alienation", shortDef: "创造物作为敌对力量：劳动者生产出的世界越辉煌，其自身世界就越贫瘠。" },
            { id: "m_alienation_process", name: "与劳动过程的异化", enName: "Alienation from Process", category: "Alienation", shortDef: "劳动的自我否定：劳动不再是需要的满足，而只是满足肉体需要的强迫手段。" },
            { id: "m_alienation_species", name: "类本质的异化", enName: "Alienation from Species-being", category: "Alienation", shortDef: "主体性的非人化：人类特有的自由自觉的生命活动被降格为维持生存的动物本能。" },
            { id: "m_alienation_others", name: "与他人的异化", enName: "Alienation from Others", category: "Alienation", shortDef: "社会连接的断裂：在异化劳动中，人与人的关系在竞争中彻底转化为利益的互相捕获与排斥。" },
            { id: "m_alienation_aufhebung", name: "异化的扬弃：共产主义", enName: "Aufhebung of Alienation", category: "Alienation", shortDef: "对人的本质的真正回归：通过私有财产的彻底废除，达成主体与其自身及自然的和解。" }
        ]
    },
    {
        id: "marx_history",
        name: "四、历史理论",
        enName: "Historical Theory",
        desc: "历史作为生产力与生产关系决斗的竞技场。",
        concepts: [
            { id: "m_production_mode", name: "生产方式", enName: "Mode of Production", category: "History", shortDef: "社会生存的总体架构：生产力与生产关系的辩证统一，规定了整个时代的基调。" },
            { id: "m_forces_relations_production", name: "生产力与生产关系", enName: "Forces & Relations of Production", category: "History", shortDef: "社会演进的底层齿轮：生产工具的质质变终将撑破陈旧的所有制外壳。" },
            { id: "m_base_superstructure", name: "经济基础与上层建筑", enName: "Base & Superstructure", category: "History", shortDef: "建筑学的社会隐喻：生产关系总和支撑起法权与政治的华丽宫殿，并决定其意识形态的基调。" },
            { id: "m_social_formations", name: "社会形态演变", enName: "Social Formations", category: "History", shortDef: "从原始公社到共产主义：自由度的规律性扩张与所有制的颠覆性跨越。" },
            { id: "m_class_struggle", name: "阶级斗争", enName: "Class Struggle", category: "History", shortDef: "历史引擎的暴力解码：压迫者与被压迫者之间不可调和的结构性拉锯，揭示了每一份和谐背后的血腥真相。" },
            { id: "m_proletariat", name: "无产阶级", enName: "Proletariat", category: "History", shortDef: "历史的决斗者：除了自身的劳动力以外一无所有的阶级，因极致的匮乏而承载了绝对的革命潜能。" },
            { id: "m_communism", name: "共产主义", enName: "Communism", category: "History", shortDef: "人类史的真实开端：对私有财产的积极扬弃，作为自由人联合体对深度异化的最后克服。" },
            { id: "m_two_inevitabilities", name: "两个必然", enName: "Two Inevitabilities", category: "History", shortDef: "资本主义必然灭亡，社会主义必然胜利：生产力与生产关系矛盾的历史性解决方案。" },
            { id: "m_revolution_theory", name: "革命", enName: "Revolution", category: "History", shortDef: "阶级统治的剧烈断裂：通过暴力打破国家机器，作为通往新世界的逻辑中点。" }
        ]
    },
    {
        id: "marx_ideology",
        name: "五、意识形态理论",
        enName: "Ideology Theory",
        desc: "统治秩序的视觉滤镜。",
        concepts: [
            { id: "m_ideology_base", name: "意识形态", enName: "Ideology", category: "Ideology", shortDef: "统治秩序的照相机暗箱：通过观念的颠倒映射自然化压迫关系，将历史性的剥削包装为不可跨越的自然法则。" },
            { id: "m_false_consciousness", name: "虚假意识", enName: "False Consciousness", category: "Ideology", shortDef: "心智层面的病理脱节：主体动机与客观利益的暴力置换，使得被剥削者在幻觉中为压迫者提供辩护。" },
            { id: "m_camera_obscura", name: "意识形态的颠倒（暗箱隐喻）", enName: "Camera Obscura", category: "Ideology", shortDef: "如同暗箱成像，意识形态将现实关系颠倒呈现：不是意识决定生活，而是生活决定意识。" },
            { id: "m_ruling_class_ideas", name: "统治阶级的思想", enName: "Ruling Class Ideas", category: "Ideology", shortDef: "话语的霸权：占统治地位的物质力量在观念领域中同步确立的霸权形式。" },
            { id: "m_religion_critique", name: "宗教批判", enName: "Critique of Religion", category: "Ideology", shortDef: "宗教是人民的鸦片：被压迫生灵的叹息，是无情世界的感情，苦难现实的幻想补偿。" },
            { id: "m_isa_althusser", name: "意识形态国家机器", enName: "ISA", category: "Ideology", shortDef: "无形的纠偏：学校、家庭、传媒等机构在潜意识层面完成的主体呼唤与功能性服从。" }
        ]
    },
    {
        id: "marx_politics",
        name: "六、政治理论",
        enName: "Political Theory",
        desc: "权力夺取与国家机器的消亡。",
        concepts: [
            { id: "m_state_theory", name: "国家理论", enName: "State Theory", category: "Politics", shortDef: "阶级统治的工具：管理阶级共同事务的专门行政委员会。" },
            { id: "m_dictatorship_proletariat", name: "无产阶级专政", enName: "Dictatorship of the Proletariat", category: "Politics", shortDef: "通往未来的临时暴力主权：过渡时期的硬核权力，作为彻底铲除剥削根基的暴力清算期调控。" },
            { id: "m_paris_commune", name: "巴黎公社经验", enName: "Paris Commune", category: "Politics", shortDef: "彻底民主的暴烈尝试：通过官员普选与职业化常备军的废除，建立人民的主权。" },
            { id: "m_two_stages_communism", name: "共产主义的两个阶段", enName: "Two Stages of Communism", category: "Politics", shortDef: "从按劳分配向按需分配的跨越，是人类从必然王国向自由王国的惊险跃迁。" }
        ]
    },
    {
        id: "marx_hegel_relation",
        name: "七、与黑格尔的关系",
        enName: "Relation with Hegel",
        desc: "对导师的暴力清算：从辩证法到唯物主义的倒转。",
        concepts: [
            { id: "m_hegel_triad_critique", name: "对黑格尔三段论的批判", enName: "Critique of Hegel's Triad", category: "Hegel", shortDef: "撕碎思维的平滑综合：拒绝脱离物质的逻辑体操，将辩证法投掷入不可调和的阶级博弈真实之中。" },
            { id: "m_negation_negation_marx", name: "马克思的否定之否定", enName: "Negation of the Negation", category: "Hegel", shortDef: "重建主体的主权：剥夺者被剥夺，作为对私有制这一异化环节的革命性终结。" }
        ]
    },
    {
        id: "marx_human_theory",
        name: "八、人的理论",
        enName: "Theory of Human Being",
        desc: "共产主义视野下的人的解放与全面发展。",
        concepts: [
            { id: "m_free_association", name: "自由人联合体", enName: "Free Association", category: "Human", shortDef: "每个人的自由发展是一切人自由发展的条件：超越资本主义原子化的真正共同体。" },
            { id: "m_all_round_development", name: "人的全面发展", enName: "All-round Development", category: "Human", shortDef: "摆脱分工束缚，个体在多样化活动中实现体力与智力、个性与社会性的完整统一。" },
            { id: "m_free_time", name: "自由时间", enName: "Free Time", category: "Human", shortDef: "真正财富的尺度：超越必要劳动时间的自由支配时间，是人的发展与创造的真正空间。" },
            { id: "m_necessity_freedom", name: "必然王国与自由王国", enName: "Realm of Necessity & Freedom", category: "Human", shortDef: "从受物质需要支配的必然王国，跃迁至人类潜能充分展开的自由王国。" }
        ]
    }
];

// 3. 拉康思想索引 (LACAN)


export const LACAN_INDEX: LacanCategory[] = [
/*
  {
    id: 'lacan-schema',
    name: '零、拉康图式',
    enName: '0. Lacan Schema',
    desc: '核心结构模型与拓扑演示',
    concepts: [
      {
        id: 'rsi-topology-card',
        name: '三界拓扑',
        enName: 'RSI Topology',
        category: 'Methodology',
        shortDef: '想象界(I)、象征界(S)与实在界(R)的波罗米纽结结构演示。通过拓扑学视角理解主体结构的动态平衡。'
      },
      {
        id: 'desire-graph-card',
        name: '欲望图式',
        enName: 'Graph of Desire',
        category: 'Methodology',
        shortDef: '拉康欲望图式的动态交互。揭示大他者、符号化与剩余享乐如何在主体路径中交织。'
      }
    ]
  },
*/
    {
        id: "l_methodology",
        name: "一、核心命题与方法论",
        enName: "Core Propositions & Methodology",
        desc: "拉康理论的本体论前提：语言、分裂与不可能性。",
        concepts: [
            { 
                id: "l_unconscious_language", 
                name: "无意识结构如语言", 
                enName: "The Unconscious as Language", 
                category: "Methodology", 
                shortDef: "无意识不是本能，而是关于能指的某些遵循语言学规律（隐喻/转喻）的组织形式。",
                author: "Jacques Lacan",
                source: "《文集》(Écrits) / 研讨班 (Seminars)",
                tags: ["SIGNIFIER", "METAPHOR", "METONYMY", "STRUCTURE"],
                related: ["大他者 (The Other)", "能指链 (Signifier Chain)", "隐喻与转喻"]
            },
            { 
                id: "l_barred_subject", 
                name: "主体是分裂的 ($)", 
                enName: "The Barred Subject", 
                category: "Methodology", 
                shortDef: "进入语言后主体必然的异化与裂离，主体无法在语言中找回真实的自身。",
                author: "Jacques Lacan",
                source: "《研讨班 XI：精神分析的四个基本概念》",
                tags: ["SUBJECT", "ALIENATION", "FADING", "LACK"],
                related: ["异化与分离", "镜像阶段", "对象小a (objet a)"]
            },
            { 
                id: "l_desire_other", 
                name: "欲望是他者的欲望", 
                enName: "Desire is the Other's", 
                category: "Methodology", 
                shortDef: "主体的欲望并非源于内在，而是由大他者的象征秩序所塑造和中介的。",
                author: "Jacques Lacan",
                source: "《研讨班 XI：精神分析的四个基本概念》 / 《文集》",
                tags: ["DESIRE", "THE OTHER", "LACK", "DEMAND"],
                related: ["大他者 (The Other)", "对象小a (objet a)", "剥夺 (Privation)"]
            },
            { 
                id: "l_no_sexual_relation", 
                name: "性关系不存在", 
                enName: "No Sexual Relation", 
                category: "Methodology", 
                shortDef: "主体之间在实在界层面不存在合意的、互补的比例关系，性关系仅存在于幻想与象征秩序中。",
                author: "Jacques Lacan",
                source: "《研讨班 XX：再来一次》(Encore)",
                tags: ["SEXUAL RELATION", "THE REAL", "IMPOSSIBLE", "MATHEME"],
                related: ["女人不存在", "性别化公式", "享乐 (Jouissance)"]
            },
            { 
                id: "l_woman_not_exist", 
                name: "女人不存在", 
                enName: "Woman Doesn't Exist", 
                category: "Methodology", 
                shortDef: "这并非性别歧视，而是指在象征界逻辑中，并不存在一个涵盖所有女性且对应统一能指的母集中心。",
                author: "Jacques Lacan",
                source: "《研讨班 XX：再来一次》(Encore)",
                tags: ["WOMAN", "NOT-ALL", "SYMBOLIC ORDER", "EXCESS"],
                related: ["没有性关系", "非全 (Pas-tout)", "大他者的享乐"]
            },
            { 
                id: "l_real_impossible", 
                name: "实在界不可能被象征化", 
                enName: "Real as Impossible", 
                category: "Methodology", 
                shortDef: "实在界并非现实，而是指那些永远无法被语言网格捕获、拒绝被符号化的创伤性残留与硬核。",
                author: "Jacques Lacan",
                source: "《研讨班 XI：精神分析的四个基本概念》 / 《研讨班 XX》",
                tags: ["THE REAL", "IMPOSSIBLE", "TRAUMA", "MATTER"],
                related: ["实在界的创伤", "对象小a (objet a)", "享乐 (Jouissance)"]
            },
            { 
                id: "l_alienation_separation", 
                name: "异化与分离", 
                enName: "Alienation & Separation", 
                category: "Methodology", 
                shortDef: "主体在进入象征界（语言）过程中必经的双重逻辑步骤：首先是由于能指代表而产生的异化，其次是通过捕捉他者欲望缝隙而实现的分离。",
                author: "Jacques Lacan",
                source: "《研讨班 XI：精神分析的四个基本概念》",
                tags: ["ALIENATION", "SEPARATION", "V-VEL", "CHE VUOI"],
                related: ["主体是分裂的 ($)", "大他者 (The Other)", "对象小a (objet a)"]
            },
        ]
    },
    {
        id: "l_rsi",
        name: "二、三界理论（RSI）",
        enName: "The Three Orders (RSI)",
        desc: "人类经验的三种寄存器及其拓扑扣连。",
        concepts: [
            { 
                id: "l_imaginary", 
                name: "想象界", 
                enName: "The Imaginary", 
                category: "RSI", 
                shortDef: "主体的第一个维度，涉及镜像阶段的自我误认、对完整性的幻觉、以及二元关系的对映与迷恋。",
                author: "Jacques Lacan",
                source: "《文集》 / 《研讨班 I：弗洛伊德的技术性著作》",
                tags: ["IMAGINARY", "MIRROR STAGE", "MISRECOGNITION", "EGO"],
                related: ["镜像阶段", "自我 (Ego)", "二元关系"]
            },
            { 
                id: "l_mirror_stage", 
                name: "镜像阶段", 
                enName: "The Mirror Stage", 
                category: "RSI", 
                shortDef: "主体在镜像中首次获得虚假统一性的瞬间，通过这种“由于惊喜而产生”的误认，奠定了‘自我’作为异化结构的基石。",
                author: "Jacques Lacan",
                source: "《文集》(Écrits) - 关于作为‘我’之功能形成的镜像阶段",
                tags: ["MIRROR STAGE", "IDEAL-I", "IDENTIFICATION", "EGO FORMATION"],
                related: ["想象界", "理想我 (Ideal-I)", "误认 (Méconnaissance)"]
            },
            { 
                id: "l_symbolic", 
                name: "象征界", 
                enName: "The Symbolic", 
                category: "RSI", 
                shortDef: "主体经验的符号维度，由大他者、语言律法与能指链构成，是由于人类进入文明社会而必须服从的结构性场所。",
                author: "Jacques Lacan",
                source: "《研讨班 II》 / 《研讨班 III：精神病》 / 《文集》",
                tags: ["SYMBOLIC", "BIG OTHER", "LANGUAGE", "LAW", "SIGNIFIER"],
                related: ["大他者 (The Other)", "能指链", "元语言不存在"]
            },
            { 
                id: "l_big_other", 
                name: "大他者", 
                enName: "The Big Other", 
                category: "RSI", 
                shortDef: "象征秩序的保证者，它是语言、法律和规则的共同体场所，也是主体欲望之源的‘秘密见证者’。",
                author: "Jacques Lacan",
                source: "《研讨班 II》 / 《研讨班 VII：精神分析的伦理》",
                tags: ["BIG OTHER", "THE OTHER", "WITNESS", "SYMBOLS", "DESIRE"],
                related: ["象征界", "欲望是他者的欲望", "主人能指"]
            },
            { 
                id: "l_signifier_chain", 
                name: "能指链", 
                enName: "Signifier Chain", 
                category: "RSI", 
                shortDef: "语言符号在时间维度上的线性滑动序列，意义通过能指间的差异生成，主体被这一非人的符号矩阵所捕获并代表。",
                author: "Jacques Lacan",
                source: "《研讨班 III》 / 《文集》(能指在无意识中的主权)",
                tags: ["SIGNIFIER", "CHAIN", "METONYMY", "METAPHOR", "S1-S2"],
                related: ["大他者 (The Big Other)", "主体是分裂的 ($)", "缝合点"]
            },
            { 
                id: "l_master_signifier", 
                name: "主人能指 (S1)", 
                enName: "Master Signifier", 
                category: "RSI", 
                shortDef: "象征秩序中的核心奇点，是一个由于其空洞和无意义而能缝合整条能指链的符号，是权力、认同与法律的基石。",
                author: "Jacques Lacan",
                source: "《研讨班 XVII：精神分析的反面》",
                tags: ["MASTER SIGNIFIER", "S1", "QUILTING POINT", "IDENTIFICATION", "AUTHORITY"],
                related: ["能指链", "知识 (S2)", "大他者 (The Big Other)"]
            },
            { 
                id: "l_knowledge_s2", 
                name: "知识 (S2)", 
                enName: "Knowledge", 
                category: "RSI", 
                shortDef: "由能指组成的逻辑网络，它是象征秩序的操作手册和百科全书，在主人话语中扮演劳动的、负责解释与防御的从属角色。",
                author: "Jacques Lacan",
                source: "《研讨班 XVII：精神分析的反面》",
                tags: ["KNOWLEDGE", "S2", "BUREAUCRACY", "SLAVE'S DISCOURSE", "ENCYCLOPEDIA"],
                related: ["主人能指 (S1)", "大他者 (The Big Other)", "对象小a (objet a)"]
            },
            { 
                id: "l_name_of_father", 
                name: "父之名", 
                enName: "Name-of-the-Father", 
                category: "RSI", 
                shortDef: "象征秩序中的最高能指和法律功能，它通过一席禁令切断了主体与母亲的想象界迷恋，建立了人类进入文明的底层契约。",
                author: "Jacques Lacan",
                source: "《研讨班 III》 / 《文集》(关于精神病的一种可能处理)",
                tags: ["NAME OF THE FATHER", "PATERNAL METAPHOR", "LAW", "PROHIBITION", "AUTHORITY"],
                related: ["大他者 (The Big Other)", "能指链", "阉割"]
            },
            { 
                id: "l_castration", 
                name: "阉割", 
                enName: "Castration", 
                category: "RSI", 
                shortDef: "主体进入象征界必须缴纳的本体论关税，指主体舍弃原初全能感与极致享乐，接受符号法律的限制，从而产生欲望。同时也涉及发现大他者本身的欠缺。",
                author: "Jacques Lacan",
                source: "《研讨班 IV：对象关系》 / 《研讨班 X：焦虑》",
                tags: ["CASTRATION", "LACK ($)", "JOUISSANCE", "SYMBOLIC LAW", "DESIRE"],
                related: ["父之名", "缺失 (Lack)", "对象小a (objet a)"]
            },
            { 
                id: "l_phallus", 
                name: "菲勒斯", 
                enName: "The Phallus", 
                category: "RSI", 
                shortDef: "象征界中的至高能指，代表了欲望的缺失与权力的逻辑占位。它是调节主体间关系和性差异认同的核心中介，其权威源于其自身的空洞性。",
                author: "Jacques Lacan",
                source: "《文集》(菲勒斯的意义) / 《研讨班 XX：再来一次》",
                tags: ["PHALLUS", "SIGNIFIER OF DESIRE", "LACK", "BEING/HAVING", "SEXUAL DIFFERENCE"],
                related: ["阉割", "大他者 (The Big Other)", "主人能指 (S1)"]
            },
            { 
                id: "l_real", 
                name: "实在界", 
                enName: "The Real", 
                category: "RSI", 
                shortDef: "主体经验中那个拒绝被符号化和想象化的、不可消化的物质性硬核。它是创伤的源头，也是所有象征秩序最终会撞击而不复存在的‘不可能之墙’。",
                author: "Jacques Lacan",
                source: "《研讨班 XI：精神分析的四个基本概念》",
                tags: ["THE REAL", "IMPOSSIBLE", "TRAUMA", "MATTER", "TUCHÉ"],
                related: ["实在界的创伤", "对象小a (objet a)", "享乐 (Jouissance)"]
            },
            { 
                id: "l_trauma_real", 
                name: "实在界的创伤", 
                enName: "Trauma of the Real", 
                category: "RSI", 
                shortDef: "主体与不可象征化的实在界发生的偶然撞击（Tuché），它在象征秩序中留下一个永久的空洞，导致主体产生强迫性的重复行为以试图捕获这一无法言说的真实。",
                author: "Jacques Lacan",
                source: "《研讨班 XI：精神分析的四个基本概念》",
                tags: ["TRAUMA", "REAL", "TUCHÉ", "REPETITION", "HOLE"],
                related: ["实在界", "享乐 (Jouissance)", "对象小a (objet a)"]
            },
            { 
                id: "l_jouissance", 
                name: "享乐", 
                enName: "Jouissance", 
                category: "RSI", 
                shortDef: "超越快乐原则的致命快感，是一种带有痛苦质感的极致充盈。它不服从法律的调节，代表了实在界对主体的入侵与异化，是主体欲望与自毁倾向的动力源。",
                author: "Jacques Lacan",
                source: "《研讨班 VII：精神分析的伦理》 / 《研讨班 XX》",
                tags: ["JOUISSANCE", "SURPLUS-ENJOYMENT", "BEYOND PLEASURE", "PAIN", "REAL"],
                related: ["实在界", "实在界的创伤", "对象小a (objet a)"]
            },
            { 
                id: "l_object_a", 
                name: "对象小a", 
                enName: "objet petit a", 
                category: "RSI", 
                shortDef: "欲望的原因（而非对象），是实在界在主体进入象征界时脱落的残余碎屑，表现为凝视、声音等，它通过自身的‘不可得’驱动了无止境的欲望链条。",
                author: "Jacques Lacan",
                source: "《研讨班 X：焦虑》 / 《研讨班 XI：精神分析的四个基本概念》",
                tags: ["OBJET A", "CAUSE OF DESIRE", "THE GAZE", "SURPLUS-ENJOYMENT", "LACK"],
                related: ["欲望是他者的欲望", "幻象 ($ <> a)", "剩余享乐"]
            },
            { 
                id: "l_symptom", 
                name: "症状 / 圣状", 
                enName: "Symptom / Sinthome", 
                category: "RSI", 
                shortDef: "主体用来弥补三界裂痕的独特发明。圣状是博罗米纽结中的第四个环，它将实在、象征与想象强行扣连在一起，是主体在虚无中赖以生存的最后支柱。",
                author: "Jacques Lacan",
                source: "《研讨班 XXIII：圣状》(Le Sinthome)",
                tags: ["SINTHOME", "SYMPTOM", "BORROMEAN KNOT", "JOYCE", "IDENTIFICATION"],
                related: ["博罗米结", "实在是、象征、想象", "享乐 (Jouissance)"]
            },
            { id: "l_borromean", name: "博罗米结", enName: "Borromean Knot", category: "RSI", shortDef: "三界互相扣连的拓扑结构。" }
        ]
    },
    {
        id: "l_subject_theory",
        name: "三、主体理论",
        enName: "Theory of the Subject",
        desc: "主体的分裂、消隐及其与能指的辩证关系。",
        concepts: [
            { 
                id: "l_subject_signifier", 
                name: "能指代表主体面向另一个能指", 
                enName: "Signifier and Subject", 
                category: "Subject", 
                shortDef: "拉康关于主体的基本定义。主体并非先于语言存在的实体，而是在能指链的替换运动中被短暂代表并随即消隐的‘消失的主体’效应。",
                author: "Jacques Lacan",
                source: "《研讨班 XI》(Seminar XI) / 《文集》(Écrits)",
                tags: ["SIGNIFIER", "S1-S2", "FADING", "SUBJECT"],
                related: ["分裂主体 ($)", "能指链", "消隐 (Fading)"]
            },
            { 
                id: "l_moi_sujet", 
                name: "自我 (moi) 与主体 (sujet) 的区别", 
                enName: "Ego vs Subject", 
                category: "Subject", 
                shortDef: "拉康精神分析的核心临床界线。自我（moi）是想象界的误认产物与防御盔甲；主体（sujet）则是象征界能指缝隙中的分裂存在，是欲望的真实承担者。",
                author: "Jacques Lacan",
                source: "《研讨班 II》(Seminar II) / 《文集》(Écrits)",
                tags: ["EGO", "SUBJECT", "IMAGINARY", "SYMBOLIC", "MIRROR STAGE"],
                related: ["镜像阶段", "大他者", "对象小a"]
            },
            { 
                id: "l_fading", 
                name: "主体的消隐 (fading)", 
                enName: "Fading of Subject", 
                category: "Subject", 
                shortDef: "主体在能指链条的替换运动中瞬间显现并随即被遮蔽的‘闪烁’效应，揭示了主体作为‘无’的本体论硬核。",
                author: "Jacques Lacan",
                source: "《研讨班 XI》(Seminar XI)",
                tags: ["FADING", "APHANISIS", "PULSE", "UNCONSCIOUS"],
                related: ["分裂主体 ($)", "能指代表主体", "异化与分离"]
            }
        ]
    },
    {
        id: "l_desire_theory",
        name: "四、欲望理论",
        enName: "Theory of Desire",
        desc: "需要、要求与欲望的辨析，驱力的圆周运动。",
        concepts: [
                        { 
                id: "l_need_demand_desire", 
                name: "需要/要求/欲望的区分", 
                enName: "Need, Demand, Desire", 
                category: "Desire", 
                shortDef: "拉康欲望理论的基础架构。需要（Need）是生物性的稳态要求；要求（Demand）是经由大他者能指表达的对爱的无条件请求；欲望（Desire）则是要求剔除需要后的纯粹剩余，是永恒滑动的转喻运动。",
                author: "Jacques Lacan",
                source: "《研讨班 XI》(Seminar XI) / 《文集》(Écrits)",
                tags: ["DESIRE", "DEMAND", "NEED", "METONYMY", "LACK"],
                related: ["大他者之欲望", "对象小a", "异化 (Alienation)"]
            },
            { id: "l_desire_metonymy", name: "欲望是转喻的", enName: "Desire as Metonymy", category: "Desire", shortDef: "欲望永远在能指之间滑动而无法停步。" },
            { id: "l_graph_desire", name: "欲望的图表", enName: "Graph of Desire", category: "Desire", shortDef: "描绘主体与他者欲望交互纠缠的拓扑图。" },
            { id: "l_fantasy_formula", name: "幻象 ($ ◇ a)", enName: "Fundamental Fantasy", category: "Desire", shortDef: "支撑主体现实的象征性屏障。" },
            { id: "l_drive", name: "驱力", enName: "The Drive", category: "Desire", shortDef: "绕行而无法触及目标的永恒重复运动。" },
            { id: "l_drive_forms", name: "驱力的四种形式", enName: "Drive Forms", category: "Desire", shortDef: "口腔、肛门、凝视、声音。" },
            { id: "l_superego_enjoy", name: "超我的享乐指令", enName: "Superego's Command to Enjoy", category: "Desire", shortDef: "超我不再是禁令的发出者，而成为了强迫主体去享乐的暴虐源头。" }
        ]
    },
    {
        id: "l_signifier_theory",
        name: "五、语言与能指理论",
        enName: "Language & Signifier Theory",
        desc: "索绪尔结构的改造：能指的主权与话语的社会纽带。",
        concepts: [
            { id: "l_signifier_primacy", name: "能指优先于所指", enName: "Primacy of Signifier", category: "Language", shortDef: "意义是由能指的排布所决定的。" },
            { id: "l_metaphor_metonymy", name: "隐喻与转喻", enName: "Metaphor & Metonymy", category: "Language", shortDef: "凝缩与移情在语言中的运作方式。" },
            { id: "l_suture", name: "缝合", enName: "Suture", category: "Language", shortDef: "主体通过能指在象征系统中确立位置的过程。" },
            { id: "l_point_de_capiton", name: "点钮", enName: "Point de Capiton", category: "Language", shortDef: "固定能指滑动的锚点。" },
            { id: "l_four_discourses", name: "四种话语", enName: "Four Discourses", category: "Language", shortDef: "主人、大学、歇斯底里、分析家话语。" }
        ]
    },
    {
        id: "l_sexuation",
        name: "六、性别化理论（性别公式）",
        enName: "Formulas of Sexuation",
        desc: "关于两性主体的非关系逻辑。",
        concepts: [
            { id: "l_sexuation_male", name: "男性侧：全部受阉割", enName: "Masculine Formula", category: "Sexuation", shortDef: "依赖于特定例外的普遍性法则。" },
            { id: "l_sexuation_female", name: "女性侧：非全部", enName: "Feminine Formula", category: "Sexuation", shortDef: "不依赖于例外、无边界的享乐逻辑。" },
            { id: "l_jouissance_difference", name: "享乐的性别差异", enName: "Sexed Jouissance", category: "Sexuation", shortDef: "菲勒斯享乐与女性享乐的区别。" }
        ]
    },
    {
        id: "l_psychopathology",
        name: "七、精神病理学",
        enName: "Psychopathology",
        desc: "结构性诊断：压抑、排除与否认。",
        concepts: [
            { id: "l_neurosis", name: "神经症 (癔症/强迫症)", enName: "Neurosis", category: "Psychopathology", shortDef: "承认法律但陷入欲望疑问的状态。" },
            { id: "l_psychosis_foreclosure", name: "精神病与排除", enName: "Psychosis & Foreclosure", category: "Psychopathology", shortDef: "父之名能指被剔除导致的秩序崩溃。" },
            { id: "l_perversion", name: "倒错 (Perversion)", enName: "Perversion", category: "Psychopathology", shortDef: "否认阉割、使自己成为大他者工具。" }
        ]
    },
    {
        id: "l_marx_relation",
        name: "八、与马克思的关系",
        enName: "Lacan and Marx",
        desc: "剩余价值与剩余享乐的结构同源性。",
        concepts: [
            { id: "l_plus_de_jouir", name: "剩余享乐 (Plus-de-jouir)", enName: "Surplus-Jouissance", category: "Marx", shortDef: "对应剩余价值的享乐溢出。" },
            { id: "l_ideological_fantasy", name: "意识形态幻象的结构", enName: "Ideological Fantasy", category: "Marx", shortDef: "支撑社会现实的无意识框架。" },
            { id: "l_commodity_fetish_a", name: "商品拜物教与对象小a", enName: "Commodity Fetishism & objet a", category: "Marx", shortDef: "物化的商品作为欲望诱因的机制。" },
            { id: "l_capitalist_discourse", name: "资本主义话语", enName: "Capitalist Discourse", category: "Marx", shortDef: "封闭的、不断循环的当代支配话语。" }
        ]
    }
];


// 4. 齐泽克思想索引 (ZIZEK)
export const ZIZEK_INDEX: LacanCategory[] = [
    {
        id: "z_methodology",
        name: "一、核心命题与方法论",
        enName: "Core Propositions & Methodology",
        desc: "新辩证唯物主义与本体论（《少于无》与《绝对反冲》核心）。",
        concepts: [
            { id: "z_less_than_nothing", name: "少于无", enName: "Less Than Nothing", category: "Methodology", shortDef: "虚无不是单纯的“没有”，而是带负值的空洞；存在是为了掩盖这个创伤而分泌的幻象。" },
            { id: "z_absolute_recoil", name: "绝对反冲", enName: "Absolute Recoil", category: "Methodology", shortDef: "退行或撤回的动作本身，创生了它所要撤回的那个源头。结果在时间中回溯性地创造了原因。" },
            { id: "z_quantum_ontology", name: "量子本体论与实在界的未完成", enName: "Quantum Ontology", category: "Methodology", shortDef: "宇宙/客体本身就是未编程完整的、不一致的；现实在观察之前没有确定的状态。" },
            { id: "z_materialist_negation", name: "否定之否定的唯物主义", enName: "Materialist Negation of Negation", category: "Methodology", shortDef: "第二次否定不是找回失去的东西，而是主体意识到自己根本不想要那个曾经失去的东西。" },
            { id: "z_parallax_ontology", name: "视差本体论", enName: "Parallax Ontology", category: "Methodology", shortDef: "视差不仅是视角的差异，更是存在物自身的内在裂纹，任何客体都无法与自身同一。" },
            { id: "z_divine_atheism", name: "神圣的无神论 (大他者的死亡)", enName: "Divine Atheism", category: "Methodology", shortDef: "基督在十字架上的绝望呼喊意味着神意识到自身非存在，唯物主义出路是穿透这种绝望。" },
            { id: "z_death_drive_undead", name: "死亡驱力与“非僵尸”状态", enName: "Death Drive and the Undead", category: "Methodology", shortDef: "一种永远无法死去的、盲目且机械的重复冲动，这是生命力深处的冷酷引擎。" },
            { id: "z_event_creatio", name: "事件", enName: "The Event", category: "Methodology", shortDef: "从虚无中突然降临的断裂，它重写了现实世界中“什么是可能”的先验坐标系。" }
        ]
    },
    {
        id: "z_ideology_theory",
        name: "二、意识形态理论",
        enName: "Theory of Ideology",
        desc: "幻象如何支撑现实，以及空洞能指的政治效力。",
        concepts: [
            { id: "z_ideological_fantasy", name: "意识形态幻象", enName: "Ideological Fantasy", category: "Ideology", shortDef: "支撑社会现实的无意识架构。" },
            { id: "z_sublime_object", name: "崇高客体", enName: "The Sublime Object", category: "Ideology", shortDef: "能指由于其位置而获得的超验质感。" },
            { id: "z_empty_signifier", name: "空洞能指", enName: "Empty Signifier", category: "Ideology", shortDef: "没有固定所指、用以缝合社会整体的符号。" },
            { id: "z_traversing_fantasy", name: "幻象的穿越", enName: "Traversing the Fantasy", category: "Ideology", shortDef: "承认大他者的不可能性和认同的偶然性。" },
            { id: "z_symptom_truth", name: "症状作为意识形态的真相", enName: "Symptom as Truth", category: "Ideology", shortDef: "社会不一致性的物质化体现。" },
            { id: "z_isa_rereading", name: "意识形态国家机器的再读", enName: "ISA Rereading", category: "Ideology", shortDef: "结合分析理论重新定义阿尔都塞的机器。" },
            { id: "z_ideology_fantasy_core", name: "意识形态批判的核心：幻象而非幻觉", enName: "Critique as Fantasy", category: "Ideology", shortDef: "意识形态不仅是虚假意识，更是支撑现实的社会幻象。" },
            { id: "z_cynical_reason", name: "犬儒主义：他们知道自己在做什么，但他们仍然在做", enName: "Cynical Reason", category: "Ideology", shortDef: "主体在行为上服从而非信仰上认同。" }
        ]
    },
    {
        id: "z_subject_theory",
        name: "三、主体理论",
        enName: "Theory of the Subject",
        desc: "主体不是实体，而是实在界的裂缝与视差的差距。",
        concepts: [
            { id: "z_subject_crack", name: "主体作为实在界的裂缝", enName: "Subject as Crack", category: "Subject", shortDef: "主体即是象征秩序无法闭合的那个空位。" },
            { id: "z_cartesian_subject", name: "笛卡尔主体的保留与改造", enName: "Cartesian Subject", category: "Subject", shortDef: "找回作为纯粹Cogito（空洞点）的主体。" },
            { id: "z_authentic_act", name: "行动 (Act)", enName: "The Act", category: "Subject", shortDef: "切断符号链条、重写现实规则的决断。" },
            { id: "z_parallax_gap", name: "平行差距", enName: "Parallax Gap", category: "Subject", shortDef: "由于视角转换导致的客体本体论断裂。" },
            { id: "z_subject_universality", name: "主体与普遍性", enName: "Subject & Universality", category: "Subject", shortDef: "主体代表了整体中由于排斥而产生的真理性位置。" },
            { id: "z_universality_failure", name: "普遍性只能通过特殊性的失败来显现", enName: "Universality through Failure", category: "Subject", shortDef: "真理存在于系统无法整合的那一点。" },
            { id: "z_act_moment", name: "行动 (Act) 作为主体性的真正时刻", enName: "The Act", category: "Subject", shortDef: "真正的行动改变了可能性的坐标。" }
        ]
    },
    {
        id: "z_hegel_rereading",
        name: "四、黑格尔重读",
        enName: "Rereading Hegel",
        desc: "激进化的否定性：实体即主体的唯物主义归宿。",
        concepts: [
            { id: "z_radical_negativity", name: "否定性的激进化", enName: "Radical Negativity", category: "Hegel", shortDef: "黑格尔式的辩证法本质上是处理自相关的裂痕。" },
            { id: "z_substance_subject", name: "实体即主体的唯物主义读法", enName: "Substance is Subject", category: "Hegel", shortDef: "实体并不是完美的上帝，而是主体分裂的投射。" },
            { id: "z_hegel_non_teleology", name: "黑格尔不是目的论者", enName: "Non-Teleological Hegel", category: "Hegel", shortDef: "辩证法是处理偶然性而非预设终点。" },
            { id: "z_absolute_knowing_failure", name: "绝对知识作为失败的承认", enName: "Absolute Knowing", category: "Hegel", shortDef: "绝对知识意味着认识到真理的本质是这种失败。" },
            { id: "z_master_slave_today", name: "主奴辩证法的当代意义", enName: "Master-Slave", category: "Hegel", shortDef: "在当代消费社会中主奴关系的变体。" }
        ]
    },
    {
        id: "z_marx_rereading",
        name: "五、马克思重读",
        enName: "Rereading Marx",
        desc: "剩余价值的拉康化：资本主义作为实在界的循环。",
        concepts: [
            { id: "z_commodity_fetish_a", name: "商品拜物教与对象小a", enName: "Commodity Fetishism & objet a", category: "Marx", shortDef: "商品被物化为欲望原因的过程。" },
            { id: "z_surplus_jouissance_econ", name: "剩余价值与剩余享乐的同构", enName: "Surplus-Value/Jouissance", category: "Marx", shortDef: "资本增殖与主体驱动力的同源性。" },
            { id: "z_capitalism_real", name: "资本主义作为实在界", enName: "Capitalism as Real", category: "Marx", shortDef: "作为某种客观、非人的自动化驱动机制。" },
            { id: "z_communism_idea", name: "共产主义理念的坚持", enName: "Idea of Communism", category: "Marx", shortDef: "在全球化僵局中重申共同体的理念。" }
        ]
    },
    {
        id: "z_real_theory",
        name: "六、实在界理论",
        enName: "Theory of the Real",
        desc: "创伤性内核：实在界的三种辩证形态。",
        concepts: [
            { id: "z_real_trauma", name: "实在界作为创伤性内核", enName: "Real as Trauma", category: "Real", shortDef: "无法被语言缝合的生命真相。" },
            { id: "z_real_three_forms", name: "实在界的三种形态", enName: "Three Forms of Real", category: "Real", shortDef: "象征前、象征失败、象征后。" },
            { id: "z_politics_real", name: "实在界的政治", enName: "Politics of Real", category: "Real", shortDef: "在政治领域直面无法化约的冲突点。" },
            { id: "z_disaster_real", name: "灾难与实在界", enName: "Disaster & Real", category: "Real", shortDef: "灾难作为日常实在界崩塌的瞬间。" },
            { id: "z_real_core", name: "实在界是意识形态的核心，而非外部", enName: "The Real in Ideology", category: "Real", shortDef: "意识形态是为了掩盖实在界的僵局。" }
        ]
    },
    {
        id: "z_political_philosophy",
        name: "七、政治哲学",
        enName: "Political Philosophy",
        desc: "民主的悖论与革命的重复：激进政治的坐标。",
        concepts: [
            { id: "z_democracy_paradox", name: "民主的悖论", enName: "Paradoxes of Democracy", category: "Politics", shortDef: "民主如何与其自身的非民主内核共存。" },
            { id: "z_multiculturalism_critique", name: "多元文化主义批判", enName: "Multiculturalism Critique", category: "Politics", shortDef: "这种文化尊重往往隐藏着深层的欧洲中心论和距离感。" },
            { id: "z_human_rights_critique", name: "人权意识形态批判", enName: "Human Rights Critique", category: "Politics", shortDef: "人权往往作为干预他国内政的犬儒工具。" },
            { id: "z_tolerance_violence", name: "宽容的暴力", enName: "Violence of Tolerance", category: "Politics", shortDef: "这种强制性的博爱是对真正冲突的压制。" },
            { id: "z_lenin_repetition", name: "列宁的重复", enName: "Repeating Lenin", category: "Politics", shortDef: "在新的历史条件下重复那种决断的姿态。" },
            { id: "z_communism_hypothesis", name: "共产主义假设", enName: "Communist Hypothesis", category: "Politics", shortDef: "作为一种引导政治实践的先验假设。" }
        ]
    },
    {
        id: "z_cultural_criticism",
        name: "八、文化批评方法",
        enName: "Cultural Criticism",
        desc: "斜目而视：作为哲学实验室的通俗文化。",
        concepts: [
            { id: "z_pop_culture_text", name: "通俗文化作为哲学文本", enName: "Pop Culture", category: "Culture", shortDef: "电影、笑话和科幻小说是思想的真实场所。" },
            { id: "z_symptomatic_reading", name: "症状式阅读", enName: "Symptomatic Reading", category: "Culture", shortDef: "关注文本中那些由于压抑而产生的断裂和滑脱。" },
            { id: "z_parallax_montage", name: "平行蒙太奇方法", enName: "Parallax Montage", category: "Culture", shortDef: "通过异质视角的并置来揭示真相。" }
        ]
    },
    {
        id: "z_lacan_relation",
        name: "九、与拉康的关系",
        enName: "Zizek and Lacan",
        desc: "拉康的政治化：将分析室的发现推向全球战场。",
        concepts: [
            { id: "z_lacan_hegel", name: "用拉康读黑格尔", enName: "Hegel with Lacan", category: "Lacan", shortDef: "通过拉康的拓扑学找回黑格尔的否定性内核。" },
            { id: "z_lacan_marx", name: "用拉康读马克思", enName: "Marx with Lacan", category: "Lacan", shortDef: "分析资本作为一种死亡驱力的逻辑。" },
            { id: "z_politicizing_real", name: "对拉康的修正：实在界的政治化", enName: "Politicizing Real", category: "Lacan", shortDef: "不再仅仅是精神分析，而是集体的行动。" },
            { id: "z_politics_jouissance", name: "享乐政治学", enName: "Politics of Jouissance", category: "Lacan", shortDef: "社会群体认同背后的享乐凝缩点。" }
        ]
    }
];