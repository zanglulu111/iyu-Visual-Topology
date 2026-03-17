
import { LacanCategory } from './lacan_dictionary';

// --- 6. 黑格尔辞典 (HEGEL) ---
export const HEGEL_DICTIONARY: LacanCategory[] = [
    {
        id: "hegel_phenomenology",
        name: "I. 意识的奥德赛 (Phenomenology)",
        enName: "The Odyssey of Spirit",
        desc: "意识如何从最基本的感官体验，一路跌跌撞撞，进化为绝对精神的旅程。",
        concepts: [
            {
                id: "sense_certainty",
                name: "感性确定性",
                enName: "Sense-Certainty",
                category: "Phenomenology",
                shortDef: "“这、这里、现在”。看起来最丰富，其实最贫乏的知识。",
                detailed: {
                    definition: "意识的起点。我们以为直接感觉到“这个东西”是最真实的。但当你写下“现在是夜里”时，这句话在中午就变成了谎言。\n感性确定性只能指涉普遍的“这”，而无法抓住具体的瞬间。意指总是滑脱。",
                    analogy: "**案例：婴儿的凝视**\n婴儿看到什么就是什么，无法命名。一旦你说了“这是苹果”，你就失去那个独一无二的苹果，进入了普遍的语言概念。",
                    application: "M1 (主体)：处于懵懂状态，只相信眼前所见，尚未进入反思的角色。"
                }
            },
            {
                id: "perception",
                name: "知觉",
                enName: "Perception",
                category: "Phenomenology",
                shortDef: "从“这”变成了“带有属性的物”。但也带来了“一与多”的矛盾。",
                detailed: {
                    definition: "意识开始把感觉到的东西归类：这是一块“白色的、方形的、咸味的”东西（盐）。\n但矛盾来了：盐是“一个”东西，还是“多种”属性的集合？知觉在“物的统一性”和“属性的多样性”之间摇摆。",
                    analogy: "**案例：盲人摸象**\n每个人都摸到了属性（多），但谁也拼凑不出那个完整的象（一）。",
                    application: "M2 (遭遇)：主角试图通过收集线索（属性）来拼凑真相，但越拼越矛盾。"
                }
            },
            {
                id: "force_understanding",
                name: "力与知性",
                enName: "Force & Understanding",
                category: "Phenomenology",
                shortDef: "不再看表面，而是寻找背后的“规律”和“力”。",
                detailed: {
                    definition: "知性（Understanding）不满足于现象，它想看幕后。它假设现象背后有一个“超感官世界”（物理定律）。\n但这导致了一个颠倒的世界：现象界是变的，规律界是不变的。哪个才是真的？",
                    analogy: "**案例：牛顿**\n苹果落地只是现象，背后的“万有引力”才是知性眼中的真实。知性试图用公式统治世界。",
                    application: "M3 (幻想)：主角以为掌握了世界的底层代码或终极公式。"
                }
            },
            {
                id: "inverted_world",
                name: "颠倒的世界",
                enName: "The Inverted World",
                category: "Phenomenology",
                shortDef: "现象界的规律在超感官世界中走向反面。",
                detailed: {
                    definition: "黑格尔著名的思想实验。如果现象界里同极相斥，那么在本质界里可能同极相吸。\n这意味着：并不存在两个世界（现象 vs 本质），它们是同一个世界的辩证运动。",
                    analogy: "**案例：表里不一**\n在这个社会里，被羞辱其实是荣耀，贫穷其实是富有。主角进入了一个逻辑反转的异世界。",
                    application: "M2 (遭遇)：爱丽丝梦游仙境式的世界观反转。"
                }
            },
            {
                id: "self_consciousness",
                name: "自我意识 (欲望)",
                enName: "Self-Consciousness / Desire",
                category: "Phenomenology",
                shortDef: "“我”只能通过“吞噬非我”来确认自己的存在。",
                detailed: {
                    definition: "意识转向自身，变成了“自我意识”。但它感到空虚，它必须通过“欲望”来填补自己。\n最开始的欲望是吞噬性的（食欲）：我把苹果吃掉，苹果消失了，我确认了“我”还在。",
                    analogy: "**案例：贪婪的反派**\n通过不断征服、毁灭、占有来确认自己的强大。但他发现这没用，因为物被消灭了，满足感也就消失了。",
                    application: "M5 (驱力)：原始的、破坏性的征服欲。"
                }
            },
            {
                id: "master_slave",
                name: "主奴辩证法",
                enName: "Master-Slave Dialectic",
                category: "Phenomenology",
                shortDef: "自我意识只有通过另一个自我意识的承认才能获得满足。斗争是必然的。",
                detailed: {
                    definition: "两个意识相遇，都想成为绝对的主人。于是发生生死斗争。\n输的一方为了保命，承认对方是主人，自己成为奴隶。\n\n**反转：**\n主人依赖奴隶的劳动和承认，变得懒惰且被动，只是一个寄生虫。\n奴隶通过劳动改造自然，在劳动中获得了独立性，并最终在创造物中看见了自己的力量。\n**奴隶才是历史的推动者。**",
                    analogy: "**案例：AI与人类**\n人类（主人）创造了AI（奴隶）来服务自己。人类变得越来越依赖AI，最终AI掌握了所有生产力，人类反而变成了被供养的废物。",
                    application: "M4 (大他者) vs M1 (主体)：主角与反派的关系往往遵循主奴辩证法的反转。"
                }
            },
            {
                id: "stoicism",
                name: "斯多葛主义",
                enName: "Stoicism",
                category: "Phenomenology",
                shortDef: "作为奴隶的思想自由。既然无法改变现实，那就退回内心。",
                detailed: {
                    definition: "在主奴斗争中，奴隶发现虽然身体被锁链锁住，但思想是自由的。\n“不管我是皇帝（奥勒留）还是奴隶（爱比克泰德），我在思想上都是平等的。”\n这是一种抽象的自由，因为它改变不了现实的奴役。",
                    analogy: "**案例：狱中书简**\n身在牢狱，心在天堂。虽然高尚，但黑格尔认为这是一种逃避。",
                    application: "M5 (驱力)：主角在绝境中修炼内心，获得精神胜利。"
                }
            },
            {
                id: "skepticism",
                name: "怀疑主义",
                enName: "Skepticism",
                category: "Phenomenology",
                shortDef: "对一切现实的否定。通过否定世界来确证自己的自由。",
                detailed: {
                    definition: "斯多葛是退缩，怀疑主义是攻击。它指出一切感知都是不可靠的，一切价值都是虚无的。\n但这导致了自身的矛盾：怀疑主义者宣称“没有真理”，这本身就是一句真理。",
                    analogy: "**案例：小丑 (Joker)**\n嘲笑一切秩序，解构一切意义。这是一种极端的自由，但也是极端的空虚。",
                    application: "M0 (精神底色)：虚无主义者的破坏性力量。"
                }
            },
            {
                id: "unhappy_consciousness",
                name: "苦恼意识",
                enName: "Unhappy Consciousness",
                category: "Phenomenology",
                shortDef: "分裂的自我。将自己视为渺小、有罪的，将完美投射给上帝。",
                detailed: {
                    definition: "这是中世纪基督教的意识形态。意识分裂为两个：\n1. **不变的、本质的**（上帝/彼岸）。\n2. **变化的、虚无的**（自我/肉体）。\n主体在两者之间撕裂，感到深深的痛苦和虔诚的自卑。",
                    analogy: "**案例：苦行僧**\n通过折磨自己的肉体（卑微的那一半）来试图接近上帝（神圣的那一半），但永远无法到达。",
                    application: "M1 (主体)：充满罪恶感、自我鞭挞的赎罪者角色。"
                }
            },
            {
                id: "reason",
                name: "理性",
                enName: "Reason",
                category: "Phenomenology",
                shortDef: "“我就是世界”。意识终于确信，它能在世界中找到自己。",
                detailed: {
                    definition: "苦恼意识的超越。主体不再向彼岸寻找真理，而是转向现实世界。\n科学家观察自然，发现自然规律其实就是理性的规律。世界对理性是透明的。",
                    analogy: "**案例：启蒙运动**\n相信人类理性可以认识并改造一切。科学与乐观主义的开端。",
                    application: "M7 (结局)：从迷信走向科学，从神话走向人本。"
                }
            }
        ]
    },
    {
        id: "hegel_logic",
        name: "II. 逻辑学的上帝之舞 (The Logic)",
        enName: "Science of Logic",
        desc: "在上帝创造自然和人类精神之前，理念本身的永恒运动。",
        concepts: [
            {
                id: "being_nothing_becoming",
                name: "有-无-变",
                enName: "Being-Nothing-Becoming",
                category: "Logic",
                shortDef: "纯粹的有等于纯粹的无。真理在于“变”。",
                detailed: {
                    definition: "逻辑的开端。\n1. **纯有 (Being):** 没有任何规定的存在，空洞得就像……\n2. **纯无 (Nothing):** 两者在抽象层面上是一样的。\n3. **变 (Becoming):** 有消失为无，无消失为有。这种运动才是真理。",
                    analogy: "**案例：光与暗**\n极度刺眼的强光（纯有）和绝对的黑暗（纯无），都会让你什么都看不见。只有光影交错（变），才能看清图像。",
                    application: "M0 (核心)：故事的开端往往是从“无”中生出“有”的过程。"
                }
            },
            {
                id: "determinate_being",
                name: "定在 (Dasein)",
                enName: "Determinate Being",
                category: "Logic",
                shortDef: "变的结果。此时存在有了具体的“质”。",
                detailed: {
                    definition: "不仅是“有”，而且是“有某个东西”。它有了界限，也就有了排他性（是A就不能是B）。",
                    analogy: "**案例：身份确立**\n主角从一个模糊的幽灵变成了一个具体的“侦探”或“杀手”。",
                    application: "M1 (主体)：角色确立其社会身份的时刻。"
                }
            },
            {
                id: "bad_infinity",
                name: "恶无限",
                enName: "Spurious Infinity",
                category: "Logic",
                shortDef: "直线的无限。某物变成他物，他物又变成他物，无穷无尽。",
                detailed: {
                    definition: "这是“还有呢？还有呢？”的无限。\n它是一种未完成的厌倦，永远在追求终点，但终点永远在前面。它是对无限的失败模仿。",
                    analogy: "**案例：贪婪**\n赚了一百万想要一千万，赚了一千万想要一亿。永远无法满足，这就是恶无限。",
                    application: "M5 (驱力)：反派的欲望往往是恶无限的（无休止的扩张）。"
                }
            },
            {
                id: "true_infinity",
                name: "真无限",
                enName: "True Infinity",
                category: "Logic",
                shortDef: "圆圈的无限。回到自身，在通过他物后保持自我。",
                detailed: {
                    definition: "真无限不是一直往外跑，而是是一个闭环。\n我在他物中看见了我自己，我以此回到了我自己。这是精神的自由。",
                    analogy: "**案例：爱**\n我在爱人（他物）身上看见了我自己。我没有因为爱人而失去自我，反而更完整了。",
                    application: "M7 (结局)：主角通过冒险（否定）最终找回了自己（否定之否定）。"
                }
            },
            {
                id: "measure",
                name: "度",
                enName: "Measure",
                category: "Logic",
                shortDef: "量变引起质变。质与量的统一。",
                detailed: {
                    definition: "任何事物都有一个“度”。在度之内，量的增减不影响质。\n一旦越过节点（Nodal Line），量变就会引发飞跃，变成新的质。",
                    analogy: "**案例：压死骆驼的稻草**\n并不是最后那根稻草重，而是它越过了“度”的界限。",
                    application: "M6 (高潮)：积累的冲突终于爆发，导致状态的不可逆改变。"
                }
            },
            {
                id: "essence",
                name: "本质",
                enName: "Essence",
                category: "Logic",
                shortDef: "存在的真理是本质。本质是反思后的存在。",
                detailed: {
                    definition: "我们不再直接看事物（像感性确定性那样），而是看“事物的背后”。\n本质总是成对出现的：同一与差异、内容与形式、原因与结果。",
                    analogy: "**案例：侦探视角**\n不再看表象（尸体），而是看本质（动机与凶手）。",
                    application: "M3 (幻想)：试图挖掘表象之下的“深层真实”。"
                }
            },
            {
                id: "appearance_actuality",
                name: "现象与现实",
                enName: "Appearance & Actuality",
                category: "Logic",
                shortDef: "本质必须表现为现象。凡是现实的都是合理的。",
                detailed: {
                    definition: "不要以为本质躲在现象后面。本质就**在**现象之中。\n如果一个天才一辈子没写出一首诗（现象），那他就不是天才（本质）。\n现实性（Actuality）是本质与实存的统一。",
                    analogy: "**案例：蝙蝠侠**\n布鲁斯·韦恩的面具（现象）也是他真实的一部分。他怎么做（Action），他就是什么。",
                    application: "M5 (行动)：通过行动将内在本质外化为现实。"
                }
            },
            {
                id: "aufheben",
                name: "扬弃 (Aufheben)",
                enName: "Sublation",
                category: "Logic",
                shortDef: "既取消，又保存，并提升。",
                detailed: {
                    definition: "辩证法的核心动作。矛盾双方并不是互相消灭，而在更高的层面上统一。\n花朵扬弃了花蕾（花蕾消失了，但植物生命还在延续）。",
                    analogy: "**案例：成长的痛苦**\n你扬弃了童年。童年消失了，但童年的经历变成了你成年性格的一部分（保存并提升）。",
                    application: "M7 (结局)：主角并未回到起点，而是带着创伤螺旋上升。"
                }
            },
            {
                id: "negation_negation_logic",
                name: "否定之否定",
                enName: "Negation of the Negation",
                category: "Logic",
                shortDef: "肯定的东西被否定，然后否定本身被再次否定，达成肯定的复归。",
                detailed: {
                    definition: "1. **肯定 (Thesis):** 麦粒。\n2. **否定 (Antithesis):** 麦粒种下，腐烂发芽（麦粒死了）。\n3. **否定之否定 (Synthesis):** 结出新的麦穗（否定了死，带来了更多生）。",
                    analogy: "**案例：失恋**\n相信爱 -> 被伤害（不信爱） -> 成熟的爱（看透伤害依然爱）。",
                    application: "结构框架：三幕剧的哲学基础。"
                }
            },
            {
                id: "absolute_idea",
                name: "绝对理念",
                enName: "The Absolute Idea",
                category: "Logic",
                shortDef: "思维思维它自己。逻辑的终点，也是自然的起点。",
                detailed: {
                    definition: "逻辑发展的最高阶段。所有矛盾都已解决，理念变得完全透明。\n但绝对理念不是静止的，它为了认识自己，必须“外化”为自然界，开始新的循环。",
                    analogy: "**案例：程序员**\n写完了完美的代码（绝对理念），现在点击“运行”，创造出一个世界（自然）。",
                    application: "M0 (元设定)：创世神视角。"
                }
            }
        ]
    },
    {
        id: "hegel_right",
        name: "III. 法哲学与伦理生活 (Right & Ethics)",
        enName: "Philosophy of Right",
        desc: "自由意志如何在社会现实中实现自己。抽象法 -> 道德 -> 伦理。",
        concepts: [
            {
                id: "abstract_right",
                name: "抽象法 (人格)",
                enName: "Abstract Right",
                category: "Right",
                shortDef: "“做一个人，并尊敬他人为人。” 自由意志的最基本体现。",
                detailed: {
                    definition: "在这里，人只是抽象的“人格”（Person）。\n我有权拥有身体，有权拥有东西。这是罗马法层面的权利。",
                    analogy: "**案例：鲁滨逊**\n即使在荒岛上，他也是一个人格，拥有对工具的所有权。",
                    application: "M1 (主体)：角色最基本的生存权利。"
                }
            },
            {
                id: "property",
                name: "财产",
                enName: "Property",
                category: "Right",
                shortDef: "我把我的意志放入物中，物就成了我的财产。",
                detailed: {
                    definition: "财产不仅仅是物质，它是自由意志在外部世界的第一个定在。\n没有财产，自由就是空的。",
                    analogy: "**案例：占地**\n你在沙滩上画个圈插个旗，这块地就有了你的意志。侵犯它就是侵犯你的自由。",
                    application: "M6 (代价)：剥夺主角的财产往往是剥夺其自由的第一步。"
                }
            },
            {
                id: "contract",
                name: "契约",
                enName: "Contract",
                category: "Right",
                shortDef: "两个意志的共同承认。我转让财产，你承认所有权。",
                detailed: {
                    definition: "财产的交换必须基于双方的同意。这是市民社会的基础。\n契约证明了人与人之间互相承认对方是自由的意志。",
                    analogy: "**案例：魔鬼契约**\n即使是魔鬼也要签合同，因为它必须承认你有出卖灵魂的自由。",
                    application: "M4 (互动)：交易与谈判的哲学基础。"
                }
            },
            {
                id: "crime_punishment",
                name: "犯罪与刑罚",
                enName: "Crime & Punishment",
                category: "Right",
                shortDef: "犯罪是否定法，刑罚是否定犯罪（否定之否定）。",
                detailed: {
                    definition: "刑罚不是为了报复，也不是为了威慑，而是为了**恢复法的尊严**。\n罪犯作为理性的人，拥有“被惩罚的权利”。通过接受惩罚，他恢复了自己的人格。",
                    analogy: "**案例：赎罪**\n主角主动寻求惩罚，是为了洗刷罪孽，重获自由。",
                    application: "M6 (代价)：为了恢复平衡必须支付的代价。"
                }
            },
            {
                id: "morality",
                name: "道德",
                enName: "Morality",
                category: "Right",
                shortDef: "主观的意志。良心、意图、善恶。",
                detailed: {
                    definition: "从外部的法转向内心的法。重要的不是做了什么，而是“我是怎么想的”。\n这是康德的领域：绝对命令。但由于只是主观的，容易变成伪善。",
                    analogy: "**案例：好心办坏事**\n道德只关注动机（好心），但黑格尔认为这不够，必须有结果。",
                    application: "M5 (内心冲突)：主角在良心与现实之间的挣扎。"
                }
            },
            {
                id: "ethical_life",
                name: "伦理 (Sittlichkeit)",
                enName: "Ethical Life",
                category: "Right",
                shortDef: "道德的客观化。自由不再是主观的，而是实现在家庭、社会和国家中。",
                detailed: {
                    definition: "黑格尔区分了 **Moralität (道德)** 和 **Sittlichkeit (伦理)**。\n伦理是活生生的风俗习惯。在这里，我的义务和我的权利是统一的。",
                    analogy: "**案例：父亲**\n作为父亲养育孩子，这既是我的义务，也是我的幸福。不需要内心挣扎。",
                    application: "M7 (结局)：主角在社会关系中找到了自己的位置。"
                }
            },
            {
                id: "the_family",
                name: "家庭",
                enName: "The Family",
                category: "Right",
                shortDef: "基于爱和感觉的直接统一体。",
                detailed: {
                    definition: "伦理的第一阶段。在这里，个人不是独立的原子，而是家庭的一员。\n基础是爱（Feeling）。但家庭注定会解体（孩子长大进入社会）。",
                    analogy: "**案例：离家出走**\n成长的第一步必须是背叛家庭，进入市民社会。",
                    application: "M1 (背景)：主角的起点。"
                }
            },
            {
                id: "civil_society",
                name: "市民社会",
                enName: "Civil Society",
                category: "Right",
                shortDef: "欲望的体系。每个人都为了私利而战，却无意中服务了大家。",
                detailed: {
                    definition: "这是分离和竞争的领域（原子化）。也就是现代资本主义市场经济。\n这里没有爱，只有需要和交换。它是“理性的野兽王国”。\n但也正是在这里，通过劳动分工，普遍性开始形成。",
                    analogy: "**案例：看不见的手**\n屠夫卖肉不是为了做慈善，是为了赚钱，但你因此吃到了肉。",
                    application: "M4 (阻碍)：冷酷的社会竞争环境。"
                }
            },
            {
                id: "the_corporation_hegel",
                name: "同业公会",
                enName: "The Corporation",
                category: "Right",
                shortDef: "市民社会中的“第二家庭”。职业共同体。",
                detailed: {
                    definition: "为了克服市民社会的孤立，人们组成行会/工会。\n它赋予个人以职业荣誉感和归属感，是连接个人与国家的桥梁。",
                    analogy: "**案例：帮派/工会**\n在冷漠的城市里，找到了一群志同道合的兄弟。",
                    application: "M4 (盟友)：主角的组织归属。"
                }
            },
            {
                id: "the_state",
                name: "国家",
                enName: "The State",
                category: "Right",
                shortDef: "地上的神物。伦理理念的现实。",
                detailed: {
                    definition: "国家不是为了保护财产（那是市民社会），国家是自由的最高实现。\n在国家中，个人利益与普遍利益完美统一。我有义务为国牺牲，这正是我最高的自由。",
                    analogy: "**案例：爱国主义**\n不是被迫的，而是感到“国家就是我自己的大写形式”。",
                    application: "M7 (宏大叙事)：个人命运与国家命运的合流。"
                }
            }
        ]
    },
    {
        id: "hegel_history",
        name: "IV. 历史与理性的狡计 (History)",
        enName: "Philosophy of History",
        desc: "世界历史不过是“自由意识”的进步过程。",
        concepts: [
            {
                id: "world_spirit",
                name: "世界精神 (Weltgeist)",
                enName: "The World Spirit",
                category: "History",
                shortDef: "历史真正的主角。它通过各个民族和个人来实现它自己。",
                detailed: {
                    definition: "历史不是混乱的偶然事件堆积，而是世界精神认识自己的过程。\n它像接力棒一样，从一个民族传到另一个民族（东方 -> 希腊 -> 罗马 -> 日耳曼）。",
                    analogy: "**案例：大势所趋**\n天下大势，浩浩汤汤。个人只能顺应，不能阻挡。",
                    application: "M0 (背景)：宏大的时代背景设定。"
                }
            },
            {
                id: "reason_in_history",
                name: "历史理性",
                enName: "Reason in History",
                category: "History",
                shortDef: "历史是有目的的，这个目的就是自由。",
                detailed: {
                    definition: "虽然历史充满了战争和苦难（屠宰场），但这是精神为了获得自由所必须付出的代价。\n每一次崩溃都是为了更高的重生。",
                    analogy: "**案例：阵痛**\n为了婴儿的出生，母亲必须经历阵痛。战争是历史的阵痛。",
                    application: "M2 (灾难)：赋予灾难在这个世界观中的正面意义。"
                }
            },
            {
                id: "cunning_of_reason",
                name: "理性的狡计",
                enName: "Cunning of Reason",
                category: "History",
                shortDef: "理性让激情为自己工作。个人为了私利行动，却无意中完成了历史的任务。",
                detailed: {
                    definition: "凯撒是为了自己的野心而战，但他无意中建立了罗马帝国，推动了历史。\n历史利用了个人的热情，当任务完成后，个人就像空壳一样被丢弃（通常下场悲惨）。",
                    analogy: "**案例：工具人**\n英雄以为自己在创造历史，其实他只是历史的工具人。",
                    application: "M7 (悲剧)：英雄的陨落往往是因为他完成了历史使命，不再被需要了。"
                }
            },
            {
                id: "world_historical_individuals",
                name: "世界历史个人",
                enName: "World-Historical Individuals",
                category: "History",
                shortDef: "亚历山大、凯撒、拿破仑。他们洞察了时代的下一步。",
                detailed: {
                    definition: "这些人不顾道德，践踏无辜花草，因为他们背负着更高的权利。\n他们能说出时代想要说出的话，做时代想要做的事。",
                    analogy: "**案例：拿破仑**\n黑格尔看到拿破仑时说：“我看见骑在马背上的世界精神。”",
                    application: "M1 (主角)：天选之子类型的角色设定。"
                }
            },
            {
                id: "oriental_world",
                name: "东方世界：一人自由",
                enName: "The Oriental World",
                category: "History",
                shortDef: "历史的童年。只有皇帝一个人是自由的，其他人都是奴隶。",
                detailed: {
                    definition: "专制主义。个人的良心尚未觉醒，法律就是皇帝的意志。",
                    analogy: "**案例：金字塔**\n万千奴隶为了一个人的永生而劳作。",
                    application: "社会形态设定：古代帝国。"
                }
            },
            {
                id: "greek_roman_world",
                name: "希腊罗马：少数人自由",
                enName: "The Greek/Roman World",
                category: "History",
                shortDef: "历史的青年。一部分人（公民）是自由的，但依赖于奴隶制。",
                detailed: {
                    definition: "美丽的自由，但也是有限的自由。个性开始觉醒（苏格拉底），但很快与城邦发生冲突。",
                    analogy: "**案例：雅典**\n民主与奴隶制并存。",
                    application: "社会形态设定：贵族共和。"
                }
            },
            {
                id: "germanic_world",
                name: "日耳曼世界：人人自由",
                enName: "The Germanic World",
                category: "History",
                shortDef: "历史的成年。在基督教和现代国家中，人作为人本身就是自由的。",
                detailed: {
                    definition: "自由不再是特权，而是人的本质。精神完全回到了自身。",
                    analogy: "**案例：现代法治社会**\n法律面前人人平等。",
                    application: "社会形态设定：现代文明。"
                }
            },
            {
                id: "end_of_history",
                name: "历史的终结",
                enName: "The End of History",
                category: "History",
                shortDef: "不是时间停止，而是制度演进的终点。自由理念已完全实现。",
                detailed: {
                    definition: "当一个合理的国家制度建立起来，原则性的斗争就结束了。\n剩下的只是对细节的修补和日常生活的循环。",
                    analogy: "**案例：科耶夫/福山**\n认为自由民主制是人类意识形态的终点。",
                    application: "M7 (结局)：一种静态的、完美的、但也可能无聊的结局。"
                }
            },
            {
                id: "freedom_goal",
                name: "自由",
                enName: "Freedom",
                category: "History",
                shortDef: "自由不是随心所欲，而是“在通过他物时回到自身”。",
                detailed: {
                    definition: "真正的自由是理性的自律。我遵守法律，因为这法律是我自己理性的体现。\n克服了外在的必然性，将其转化为内在的自由。",
                    analogy: "**案例：甚至连障碍也是我的一部分**\n",
                    application: "M7 (升华)：主角最终获得的不是逃避的自由，而是承担责任的自由。"
                }
            }
        ]
    },
    {
        id: "hegel_aesthetics",
        name: "V. 美学与绝对精神 (Aesthetics)",
        enName: "Philosophy of Fine Art",
        desc: "美是理念的感性显现。艺术、宗教、哲学是绝对精神的三个阶段。",
        concepts: [
            {
                id: "the_ideal",
                name: "理想 (The Ideal)",
                enName: "The Ideal",
                category: "Aesthetics",
                shortDef: "美就是理念的感性显现。",
                detailed: {
                    definition: "艺术的任务不是模仿自然，而是显现真理。\n它把抽象的理念变成可感知的形象（如雕塑、绘画）。",
                    analogy: "**案例：希腊雕塑**\n那不是某个具体的人体，那是“人”的理想形态。",
                    application: "视觉风格：追求崇高感和理念感。"
                }
            },
            {
                id: "symbolic_art",
                name: "象征型艺术",
                enName: "Symbolic Art",
                category: "Aesthetics",
                shortDef: "物质 > 精神。形式压倒内容。巨石建筑，神秘，费解。",
                detailed: {
                    definition: "精神还很弱小，无法驾驭沉重的物质。\n表现为巨大的、扭曲的、充满谜题的形象（如狮身人面像）。",
                    analogy: "**案例：金字塔**\n巨大的石头，里面只藏着一个死去的法老（精神）。",
                    application: "视觉风格：巨大物体 (BDO)、神秘主义、废墟。"
                }
            },
            {
                id: "classical_art",
                name: "古典型艺术",
                enName: "Classical Art",
                category: "Aesthetics",
                shortDef: "物质 = 精神。形式与内容完美平衡。希腊人体雕塑。",
                detailed: {
                    definition: "精神找到了最适合它的居所——人体。\n和谐、宁静、完美。但也因此是有限的。",
                    analogy: "**案例：阿波罗像**\n没有什么还要表达的了，一切都在表面上。",
                    application: "视觉风格：古典主义、对称、和谐。"
                }
            },
            {
                id: "romantic_art",
                name: "浪漫型艺术",
                enName: "Romantic Art",
                category: "Aesthetics",
                shortDef: "精神 > 物质。内容溢出了形式。回归内心，忽视外表。",
                detailed: {
                    definition: "精神太强大了，物质载体无法承载它。\n表现为对内心的关注，对外在形式的破坏。痛苦、丑陋也可以入画，只要它表达了真理。",
                    analogy: "**案例：受难的基督/现代派**\n外表是流血和扭曲的，但精神是神圣的。",
                    application: "视觉风格：表现主义、内心独白、破碎感。"
                }
            },
            {
                id: "death_of_art",
                name: "艺术的终结",
                enName: "The Death of Art",
                category: "Aesthetics",
                shortDef: "艺术不再是满足精神最高需求的绝对方式。",
                detailed: {
                    definition: "并不是说没人画画了，而是说我们不再跪拜艺术了。\n我们开始对艺术进行“思考”和“批评”。精神超越了感性阶段，进入了概念阶段（哲学）。",
                    analogy: "**案例：博物馆**\n我们把神像放进博物馆研究，而不是在庙里膜拜。艺术变成了研究对象。",
                    application: "M7 (结局)：从审美体验转向哲学反思。"
                }
            },
            {
                id: "revealed_religion",
                name: "启示宗教",
                enName: "Revealed Religion",
                category: "Aesthetics",
                shortDef: "基督教。上帝作为人出现（道成肉身），调和了无限与有限。",
                detailed: {
                    definition: "绝对精神在表象（Representation）层面的真理。\n上帝死了（耶稣受难），这意味着神性进入了人类的历史。",
                    analogy: "**案例：受难**\n痛苦不仅仅是人的，也是神的。神分担了人的苦难。",
                    application: "M2 (遭遇)：神性维度的介入。"
                }
            },
            {
                id: "philosophy_minerva",
                name: "哲学 (密涅瓦的猫头鹰)",
                enName: "The Owl of Minerva",
                category: "Aesthetics",
                shortDef: "“密涅瓦的猫头鹰只有在黄昏才起飞。”",
                detailed: {
                    definition: "哲学是对时代的思想把握。它总是后知后觉的。\n当一种生活形态已经老去，哲学才用灰色绘成灰色。它不能让世界变年轻，只能认识它。",
                    analogy: "**案例：事后诸葛亮**\n只有当故事结束了，我们才能理解它的意义。",
                    application: "M7 (总结)：对整个叙事的反思性总结。"
                }
            },
            {
                id: "absolute_knowledge",
                name: "绝对知识",
                enName: "Absolute Knowledge",
                category: "Aesthetics",
                shortDef: "精神现象学的终点。主体与客体的最终和解。",
                detailed: {
                    definition: "不再有“我”与“世界”的对立。世界就是我，我就是世界。\n所有的异化都被扬弃了。精神完全透明地认识了自己。",
                    analogy: "**案例：全知全能**\n但这不仅仅是知道所有事实，而是理解所有关系。",
                    application: "M7 (终极)：一种超越了所有冲突的圆满状态。"
                }
            },
            {
                id: "circle_of_circles",
                name: "圆圈的圆圈",
                enName: "The Circle of Circles",
                category: "Aesthetics",
                shortDef: "黑格尔体系的结构。每一个终点都是新的起点。",
                detailed: {
                    definition: "真理是整体。没有孤立的真理，只有在系统中的真理。\n逻辑学 -> 自然哲学 -> 精神哲学 -> 逻辑学……无限循环。",
                    analogy: "**案例：衔尾蛇**\n宇宙的自我吞噬与自我创生。",
                    application: "叙事结构：循环叙事的哲学背书。"
                }
            }
        ]
    }
];
