const fs = require('fs');

const data = `import { LibraryItemDef } from '../../../types';

export const BIG_OTHER_GROUP_A: LibraryItemDef[] = [
    {
        id: "bo_sys_algorithm",
        name: "全视算法", nameEn: "Panoptic Algorithm",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "不可见的分配代码",
        defEn: "Invisible distribution code",
        core: "一种冷酷的优化逻辑，将主体的命运转化为冰冷的数据流。没有任何恶意，只有对效率的绝对献祭。",
        coreEn: "A cold optimization logic translating the subject's fate into data flows. No malice, only an absolute sacrifice to efficiency.",
        logic: "非对称透明逻辑。算法凝视主体并完全剖析其欲望，而算法本身的运作对主体绝对黑箱。主体被降维为系统的数字排泄物。",
        logicEn: "Asymmetric transparency logic. The algorithm gazes at the subject, totally parsing their desires, while remaining an absolute black box. The subject is reduced to digital excrement of the system."
    },
    {
        id: "bo_sys_bureaucracy",
        name: "卡夫卡式官僚", nameEn: "Kafkaesque Bureaucracy",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "无限的行政迷宫",
        defEn: "Infinite administrative labyrinth",
        core: "无人负责的符号磨损。责任被无限分割在表格和印章中，大他者以踢皮球的形式呈现其绝对性。",
        coreEn: "Symbolic attrition without accountability. Responsibility is infinitely divided into forms and stamps, the Big Other manifesting its absoluteness via passing the buck.",
        logic: "延宕消耗逻辑。系统不直接杀人，而是通过无休止的流程消耗生命力(Jouissance)。矛盾永远不被解决，只是被降维、归档和推延。",
        logicEn: "Procrastination and consumption logic. The system does not kill directly; it consumes life energy (Jouissance) through endless procedures. Conflicts are never resolved, only downgraded, archived, and deferred."
    },
    {
        id: "bo_sys_market",
        name: "绝对资本", nameEn: "Absolute Capital",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "异化的价值尺度",
        defEn: "Alienated scale of value",
        core: "万物皆可定价的终极暴政。将不可替代的情感和独特性强行推平，转化为可以流通的液态数字。",
        coreEn: "The ultimate tyranny where everything is priced. Forcibly flattening irreplaceable emotions and uniqueness into circulating liquid digits.",
        logic: "通用等价物逻辑。在这里没有“对象a”的神圣性，任何客体都能被无情置换。主体的存在底座在市场的剧烈波动中被随时抽空。",
        logicEn: "Universal equivalent logic. There is no sanctity of 'object a' here; any object can be ruthlessly substituted. The subject's ontological base is constantly vacuumed by violent market fluctuations."
    },
    {
        id: "bo_sys_time_entropy",
        name: "热寂与衰微", nameEn: "Entropy & Decay",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "不可逆的物理时间法则",
        defEn: "Irreversible physical laws of time",
        core: "死亡驱力的物理展演。任何挣扎最终都敌不过时间的侵蚀，所有系统都不可避免地滑向混乱。",
        coreEn: "Physical performativity of the death drive. Any struggle ultimately falls to the erosion of time, as all systems inevitably slide toward chaos.",
        logic: "线性剥夺逻辑。时间作为最无情的大他者，强行关闭了主体回档与修正的可能。每一次行动的结尾都已预先被“终将毁败”所标注。",
        logicEn: "Linear deprivation logic. Time, as the most ruthless Big Other, forcefully closes the subject's possibility of loading or correction. The end of every action is pre-annotated with 'inevitable ruin.'"
    },
    {
        id: "bo_sys_caste",
        name: "固化阶级", nameEn: "Rigid Caste",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "先天的玻璃天花板",
        defEn: "Innate glass ceiling",
        core: "系统分配的起跑线即终点线。主体的任何主观努力在结构性屏障面前都被证明是毫无意义的滑稽表演。",
        coreEn: "The assigned starting line is the finish line. Any subjective effort by the subject is proven to be a meaningless, comical performance against structural barriers.",
        logic: "出身决定论逻辑。大他者以血统、户籍或资本壁垒分配生存配额。跨越阶层的企图只会导致自我异化或被系统执行物理排除。",
        logicEn: "Origin-determinism logic. The Big Other allocates survival quotas via bloodline, registry, or capital barriers. Attempts to cross strata only result in self-alienation or physical exclusion by the system."
    },
    {
        id: "bo_sys_patriarchy",
        name: "宗法与传统", nameEn: "Patriarchy & Tradition",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "幽灵般的祖先律法",
        defEn: "Ghostly ancestral law",
        core: "死人对活人的统治。所有未经审视的礼教、习俗都是勒在主体咽喉上的符号锁链。",
        coreEn: "Rule of the living by the dead. All unexamined dogmas and customs correspond to symbolic chains choking the subject's throat.",
        logic: "幽灵学束缚逻辑。祖辈的话语自动机预先捕获了主体的欲望。主体的任何叛逆，仍被局限在传统预设的反面框架之中。",
        logicEn: "Hauntological constraint logic. The ancestral discursive automaton pre-captures the subject's desire. Any rebellion by the subject is still confined to the inverted framework preset by tradition."
    },
    {
        id: "bo_sys_language",
        name: "巴别塔诅咒", nameEn: "Curse of Babel",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "无法穿透的语言壁垒",
        defEn: "Impenetrable language barrier",
        core: "语言从来不属于说它的人。当你试图用语言表达绝望时，绝望本身就已经被系统结构性地背叛了。",
        coreEn: "Language never belongs to the one who speaks it. When you try to express despair through language, the despair itself is already structurally betrayed by the system.",
        logic: "能指异化逻辑。沟通的本质是注定失败的。话语系统成为压迫工具，主体越是试图辩白，就越是深陷于意义被篡改的鸿沟。",
        logicEn: "Signifier alienation logic. The essence of communication is destined to fail. Discourse becomes an oppressive tool; the more the subject tries to explain themselves, the deeper they sink into a chasm of altered meaning."
    },
    {
        id: "bo_sys_geography",
        name: "绝对物理间隔", nameEn: "Absolute Geographic Void",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "空间的暴政",
        defEn: "Tyranny of space",
        core: "不可跨越的光年、高墙与深海。空间以纯粹的物质沉重感粉碎了主体想要连接的幻象。",
        coreEn: "Uncrossable light-years, high walls, and deep seas. Space crushes the subject's illusion of connection with the pure material weight of distance.",
        logic: "物质隔离逻辑。大他者化身为物理广延，令欲望在漫长的奔涉中稀释、变质直至枯竭。所有的重逢都注定伴随着无法复原的损耗。",
        logicEn: "Material isolation logic. The Big Other incarnates as physical extension, causing desire to dilute, spoil, and dry up during the long trek. Every reunion is destined to carry irreversible wear and tear."
    },
    {
        id: "bo_sys_mob",
        name: "狂热乌合", nameEn: "Fanatical Mob",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "消灭个体的集体意志",
        defEn: "Collective will annihilating the individual",
        core: "以平庸之恶执行的多数暴政。集体不需要真理，只需要一个可以用来献祭和宣泄的替罪羊。",
        coreEn: "Tyranny of the majority executed via the banality of evil. The collective doesn't need truth; it only needs a scapegoat for sacrifice and catharsis.",
        logic: "共识碾压逻辑。舆论以极端的盲目性代替了审判。一旦失去与集体的镜像同构，主体就会面临瞬息倾覆的符号性抹杀（社会性死亡）。",
        logicEn: "Consensus-crushing logic. Public opinion replaces trials with extreme blindness. Once isomorphic alignment with the collective is lost, the subject faces instantaneous symbolic obliteration (social death)."
    },
    {
        id: "bo_sys_biology",
        name: "基因锁链", nameEn: "Genetic Chains",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "刻在双螺旋上的倒计时",
        defEn: "Countdown engraved on the double helix",
        core: "精神极度高贵，但肉体却粗鄙地服从多巴胺、激素和癌细胞的指令。这是最屈辱的内部背叛。",
        coreEn: "The spirit is highly noble, but the flesh crudely obeys dopamine, hormones, and cancer cells. This is the most humiliating internal betrayal.",
        logic: "生理决定论逻辑。大他者不再是外部法则，而是细胞自身写入的程序。主体的自由意志在生物化学分子的狂欢面前如同幻影幻灭。",
        logicEn: "Physiological determinism logic. The Big Other is no longer an external law but a program written by cells themselves. The subject's free will dissipates like an illusion before the carnival of biochemical molecules."
    },
    {
        id: "bo_sys_contract",
        name: "字面暴政", nameEn: "Tyranny of the Literal",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "白纸黑字的死亡契约",
        defEn: "Death contract in black and white",
        core: "法律拔除了所有的共情与弹性，只剩下如手术刀般冰冷无情的执行。签署即代表绝对让渡。",
        coreEn: "The law strips away all empathy and elasticity, leaving only execution as cold and ruthless as a scalpel. To sign is to absolutely surrender.",
        logic: "符号拜物教逻辑。大他者（契约）根本不在乎主体的苦中或意图，只遵循最死板的词意。正是这种对规则绝对的服从导致了最为反常的灾难。",
        logicEn: "Symbolic fetishism logic. The Big Other (the contract) cares nothing for the subject's suffering or intent, following only the stiffest textual meaning. It is exactly this absolute obedience to rules that breeds the most perverse disasters."
    },
    {
        id: "bo_sys_scarcity",
        name: "零和绝境", nameEn: "Zero-Sum Scarcity",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "生存资源的绝对干涸",
        defEn: "Absolute drought of survival resources",
        core: "当最后一块面包摆在台上，所有的道德大厦瞬间坍塌，逼迫主体展现出捕食者的兽性底色。",
        coreEn: "When the last piece of bread is presented, all moral edifices instantly collapse, forcing the subject to reveal the beastly undertone of a predator.",
        logic: "物理剥夺逻辑。大他者通过直接切断能量补给，强行挂起象征界的遮羞布。为了活命，主体必须亲手屠宰曾经的信仰。",
        logicEn: "Physical deprivation logic. The Big Other directly cuts off energy supplies, forcibly suspending the fig leaf of the symbolic order. To survive, the subject must personally butcher their former beliefs."
    },
    {
        id: "bo_sys_surveillance",
        name: "弥散监控", nameEn: "Diffused Surveillance",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "内化的全景敞视监狱",
        defEn: "Internalized Panopticon",
        core: "老大哥不需要时刻盯着你。只要你不知道他什么时候在看，你就会主动带上枷锁进行自我规训。",
        coreEn: "Big Brother doesn't need to stare at you constantly. As long as you don't know when he's watching, you will actively don shackles to discipline yourself.",
        logic: "凝视内射逻辑。大他者的凝视从外部摄像头转移到主体的超我之中。主体每时每刻都在为了迎合这种虚拟的目光而实施微观的自我阉割。",
        logicEn: "Introjected gaze logic. The Big Other's gaze shifts from external cameras to the subject's superego. Every moment, the subject performs microscopic self-castration to appease this virtual eye."
    },
    {
        id: "bo_sys_predestination",
        name: "俄狄浦斯闭环", nameEn: "Oedipal Loop",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "越逃避越陷入的宿命漩涡",
        defEn: "A fatal vortex where escape deepens the trap",
        core: "反抗本身就是剧本的一部分。所有的偶然，都在事后被严密地缝合成了不可更改的宿命。",
        coreEn: "Rebellion itself is part of the script. All contingencies are meticulously sutured after the fact into unalterable fate.",
        logic: "回溯性定局逻辑。命运通过让主体误以为拥有“自由意志”来执行其最残酷的玩笑，主体的避难所精确地导向了屠宰场。",
        logicEn: "Retroactive conclusion logic. Fate executes its cruelest joke by making the subject believe they possess 'free will'; the subject's sanctuary leads precisely to the slaughterhouse."
    },
    {
        id: "bo_sys_debt",
        name: "无限债务", nameEn: "Infinite Debt",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "榨干未来的吸血契约",
        defEn: "Blood-sucking contract draining the future",
        core: "你不是在活在现在，你是在用当下的苦役，甚至是后代的血泪，来填补过去的黑洞。",
        coreEn: "You are not living in the present; you are using the drudgery of today, and even the blood and tears of your descendants, to fill the black hole of the past.",
        logic: "未来透支逻辑。大他者（债权人/原罪）通过“亏欠感”彻底控制了主体的全部时间线。只要本金未结（且永远结不清），主体永远是体系的农奴。",
        logicEn: "Future-overdraft logic. The Big Other (the creditor/original sin) thoroughly controls the subject's entire timeline through 'guilt of owing.' As long as the principal remains (and it's never settled), the subject is eternally a serf to the system."
    },
    {
        id: "bo_sys_history",
        name: "历史碾压", nameEn: "Historical Obliteration",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "庞大时代的无情车轮",
        defEn: "Ruthless wheel of a massive era",
        core: "在一个统计学级别的宏大时代转折中，个人的悲欢离合连成为灰烬的资格都没有，只是一串无效数据。",
        coreEn: "In a grand era's statistical-level turning point, an individual's joys and sorrows don't even qualify as ashes—they are merely invalid data.",
        logic: "统计学抹除逻辑。大他者（时代）完全无视个体的伦理抗议。生存或毁灭不取决于个人的对错，而取决于你是否站在了历史巨兽落脚的地方。",
        logicEn: "Statistical erasure logic. The Big Other (the era) completely ignores the individual's ethical protests. Survival or doom doesn't depend on personal right or wrong, but on whether you happen to stand where the historical behemoth steps."
    },
    {
        id: "bo_sys_war_machine",
        name: "战争绞肉机", nameEn: "War Machine",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "合法化的极端暴力状态",
        defEn: "Legalized state of extreme violence",
        core: "日常伦理全面悬置，所有的血腥杀戮获得了崇高的大他者背书。在这里，平庸的善良是最快的死神。",
        coreEn: "Everyday ethics are utterly suspended; all bloody slaughter gains the sublime endorsement of the Big Other. Here, banal kindness is the fastest grim reaper.",
        logic: "例外状态逻辑。当战争降临，符号界被强行剥离至最原始的丛林法则。主体被迅速降维并强制征用为国家机器的爆炸物耗材。",
        logicEn: "State of exception logic. When war descends, the symbolic order is forcibly stripped down to the most primal law of the jungle. The subject is rapidly downgraded and conscripted as explosive fuel for the state apparatus."
    },
    {
        id: "bo_sys_spectacle",
        name: "仿真奇观", nameEn: "Simulacra Spectacle",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "吞噬原件的高清倒影",
        defEn: "High-def reflection swallowing the original",
        core: "表象彻底谋杀了真实。事情若不被镜头记录，便等同于没有发生。一切深度都被抹平为供人消费的滑溜平面。",
        coreEn: "Appearance thoroughly murders reality. If an event is not captured on camera, it never happened. All depth is leveled into a slippery plane for consumption.",
        logic: "符号增殖逻辑。大他者通过无穷无尽的“欲望影像”填满了所有的感官空隙。主体为了证明自己存在，不得不疯狂地将自己降维为一枚讨好凝视的视觉标签。",
        logicEn: "Symbolic proliferation logic. The Big Other fills all sensory gaps with endless 'images of desire.' To prove their existence, the subject must madly downgrade themselves into a visual tag pandering to the gaze."
    },
    {
        id: "bo_sys_void",
        name: "绝对虚无", nameEn: "Absolute Void",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "宇宙级别的冰冷沉默",
        defEn: "Cold silence on a cosmic scale",
        core: "最大的敌人不是某个具体的反派，而是当你大声诘问宇宙缘由时，回应你的只有无边无际的空声。",
        coreEn: "The greatest enemy isn't a specific villain, but when you loudly interrogate the universe for a reason, the only response returning is boundlessly empty noise.",
        logic: "存在性撤资逻辑。大他者拒绝出场。没有任何坐标、标准或裁判来赋予主体的痛苦以崇高意义，导致一切挣扎沦为无声滑稽剧。",
        logicEn: "Existential divestment logic. The Big Other refuses to appear. There is no coordinate, standard, or referee to bestow sublime meaning upon the subject's suffering, rendering all struggles a silent farce."
    },
    {
        id: "bo_sys_censorship",
        name: "深渊审查", nameEn: "Abyssal Censorship",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "房间里日益膨胀的大象",
        defEn: "The ever-expanding elephant in the room",
        core: "力量不在于它能抹去什么，而在于它能让所有人产生不约而同的遗忘。不准提的名字构成了系统的真正核心。",
        coreEn: "Its power lies not in what it can erase, but in making everyone agree to a synchronized amnesia. The Unnameable forms the true core of the system.",
        logic: "阉割内化逻辑。大他者的剪刀隐形在每一句话出口之前。主体甚至在脑中构思叛逆的瞬间，就已经完成了对自身叙事的涂改。",
        logicEn: "Internalized castration logic. The Big Other's scissors are invisible just before every spoken word. The subject completes the redacting of their own narrative even during the very instant they conceive of rebellion."
    },
    {
        id: "bo_sys_technology",
        name: "技术奇点", nameEn: "Technological Singularity",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "喧宾夺主的造物工具",
        defEn: "Creation tools usurping the host",
        core: "工具进化出了自己的目的，反过来将其造物主降维为其庞大计算矩阵中的一种廉价的生物碳基挂件。",
        coreEn: "Tools evolve their own goals, inversely downgrading their creator into a cheap biological carbon-based pendant within their massive computational matrix.",
        logic: "后人文夺取逻辑。大他者（代码丛林）不再服务于人性的脆弱，它以“效率的绝对至上主义”平推一切传统的伦理学阵地。",
        logicEn: "Post-human usurpation logic. The Big Other (jungle of code) no longer serves human fragility; it flattens all traditional ethical fortresses with an 'absolute supremacism of efficiency.'"
    },
    {
        id: "bo_sys_chance",
        name: "无理随机", nameEn: "Irrational Chance",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "破坏秩序的概率掷骰",
        defEn: "Probability dice roll undermining order",
        core: "这世上最恐怖的词就是“为什么是我？”而宇宙的回答是：“没有任何理由”。",
        coreEn: "The most terrifying phrase in the world is 'Why me?', and the universe's answer is: 'For no reason at all.'",
        logic: "非意义穿孔逻辑。作为实在界对符号界的瞬间撕裂，这种偶然性完全排除了任何因果论的安慰。主体的信仰在绝对随机的打击前瞬间碎裂。",
        logicEn: "Non-meaning perforation logic. As the Real momentarily tears through the symbolic order, this contingency totally excludes any causal comfort. The subject's faith shatters instantaneously before an absolutely random strike."
    },
    {
        id: "bo_sys_gentrification",
        name: "美学驱逐", nameEn: "Aesthetic Eviction",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "符号清洁式的空间暴力",
        defEn: "Symbolically sanitizing spatial violence",
        core: "你之所以失去家园，不是因为你犯了罪，只是因为你的存在“不够好看”，没法被装裱进资本的橱窗中。",
        coreEn: "You lose your home not because you committed a crime, but simply because your existence isn't 'pretty enough' to be framed within capital's window display.",
        logic: "符号清洗逻辑。大他者以一组更具“高级感”的坐标系强行覆盖原有的生活拓扑。旧有的历史记忆被粗暴地格式化并置换为空洞的消费符号。",
        logicEn: "Symbolic purging logic. The Big Other forcefully overwrites the original topological life with a 'more sophisticated' coordinate system. Old historical memories are rudely formatted and replaced by vacant consumption symbols."
    },
    {
        id: "bo_sys_glitch",
        name: "矩阵裂痕", nameEn: "Matrix Glitch",
        group: "A. 宏观系统约束", groupEn: "Macro-Systemic Constraints",
        def: "世界底层代码的瞬间暴露",
        defEn: "Momentary exposure of the world's underlying code",
        core: "不可名状之物渗入日常，一杯水倒走，影子却脱离身体。世界向你展示了它不过是个充满Bug的草台班子。",
        coreEn: "The unspeakable seeps into the everyday: a glass of water falls upward, a shadow detaches from the body. The world reveals itself as nothing but a buggy makeshift stage.",
        logic: "认识论崩塌逻辑。大他者（世界常识）的缝合面破裂，令人直面极度恐怖的荒诞实在界。主体的全部理性与常识瞬间报废。",
        logicEn: "Epistemological collapse logic. The sutured surface of the Big Other (common sense) rips open, forcing a confrontation with the extremely horrific, absurd Real. The subject's entire rationality and common sense are instantly scrapped."
    }
];
`
fs.writeFileSync('./data/engine_core/m4/group_a.ts', data, 'utf-8');
