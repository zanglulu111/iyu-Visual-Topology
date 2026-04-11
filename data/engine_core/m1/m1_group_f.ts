import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_F: LibraryItemDef[] = [
    // ============================================================
    // GROUP F. 过剩的主体 (The Excessive) - 16 Items
    // 缺失方向：向驱力 → 享乐/成瘾/执念。"停不下来"
    // 不是缺少什么，而是被太多的欲望、快感或冲动淹没。
    // ============================================================
    {
        id: "subj_hedonist",
        name: "享乐者", nameEn: "The Hedonist",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "沉溺于感官刺激，用快感填满一切空隙——但快感的保质期越来越短。",
        defEn: "Drowning in sensory stimulation, filling every gap with pleasure — but pleasure's expiration date grows ever shorter.",
        flaw: "成瘾", flawEn: "Addiction",
        core: "享乐可以是对生命最热烈的拥抱（活在当下），也可以是最精致的麻醉（我不敢在安静中独处）。关键张力：当快感停止的那一秒——你听见下面的空洞了吗？ | 缺失 ($): 满足",
        coreEn: "Hedonism can be the most passionate embrace of life (live in the moment) or the most exquisite anesthesia (I dare not be alone in silence). Key tension: the second pleasure stops — do you hear the void beneath? | Lacks ($): Satisfaction",
        reference: "王尔德《道林·格雷的画像》中用青春换取无尽感官堕落的道林·格雷；《了不起的盖茨比》中日日狂欢却内心空洞的宾客群像。",
        referenceEn: "Dorian Gray trading youth for endless sensory corruption in Oscar Wilde's The Picture of Dorian Gray; the hollow guests partying daily in The Great Gatsby."
    },
    {
        id: "subj_addict",
        name: "渴求者", nameEn: "The Craver",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "被某种物质、行为或关系彻底控制——明知是毒药，但手停不下来。",
        defEn: "Thoroughly controlled by a substance, behavior, or relationship — knowing it's poison, but unable to stop.",
        flaw: "奴役", flawEn: "Slavery",
        core: "上瘾可以是唯一能让世界'正常'的方式（没有它我活不了），也可以是最清晰的自毁。关键张力：如果戒了——你能承受那个没有滤镜的、赤裸的现实吗？ | 缺失 ($): 自控",
        coreEn: "Addiction can be the only thing that makes the world 'normal' (I can't live without it) or the clearest self-destruction. Key tension: if you quit — can you bear the raw, unfiltered reality? | Lacks ($): Control",
        reference: "《猜火车》中靠海洛因逃避一切的苏格兰青年；《美丽男孩》里被冰毒彻底摧毁生活与意志的尼克。",
        referenceEn: "The Scottish youths running from reality with heroin in Trainspotting; Nic, whose life and will are destroyed by meth in Beautiful Boy."
    },
    {
        id: "subj_perfectionist",
        name: "完美主义者", nameEn: "The Perfectionist",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "对细节有病态的控制欲，无法容忍任何一丝瑕疵。",
        defEn: "Having a pathological need to control every detail, intolerant of the slightest flaw.",
        flaw: "强迫", flawEn: "Compulsion",
        core: "完美主义可以制造杰作（只有极端追求才能触及神作），也可以摧毁一切（永远完不成的作品比没有更残忍）。关键张力：你追求完美——是为了创造，还是为了控制焦虑？ | 缺失 ($): 宽容",
        coreEn: "Perfectionism can create masterpieces (only extreme pursuit touches the divine) or destroy everything (a never-finished work is crueler than none at all). Key tension: do you pursue perfection to create, or to control anxiety? | Lacks ($): Mercy",
        reference: "电影《黑天鹅》里为了绝对完美而逼疯自己的妮娜；《莫扎特传》中因忍受不了瑕疵与平庸而极度嫉妒的萨列里。",
        referenceEn: "Nina driving herself mad for absolute perfection in Black Swan; Salieri consumed by extreme jealousy, unable to tolerate flaws or mediocrity in Amadeus."
    },
    {
        id: "subj_narcissist",
        name: "自恋者", nameEn: "The Narcissist",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "世界是一面镜子，只映照自己——他人的存在仅仅是为了确认'我'的伟大。",
        defEn: "The world is a mirror reflecting only the self — others exist solely to confirm 'my' greatness.",
        flaw: "唯我", flawEn: "Solipsism",
        core: "自恋可以是强大的自信源泉（我就是值得），也可以是最脆弱的堡垒（镜子一旦碎了，'我'就不存在了）。关键张力：如果有人真正看穿了你——你会崩溃，还是终于松一口气？ | 缺失 ($): 他者",
        coreEn: "Narcissism can be a powerful source of confidence (I am worth it) or the most fragile fortress (once the mirror breaks, 'I' cease to exist). Key tension: if someone truly sees through you — will you collapse, or finally breathe in relief? | Lacks ($): The Other",
        reference: "希腊神话中因迷恋水中倒影而憔悴死去的纳西索斯；《美国精神病人》里对身份阶层与容颜迷恋到病态的杀手。",
        referenceEn: "Narcissus in Greek mythology, pining away for his own reflection; the killer morbidly obsessed with status and his face in American Psycho."
    },
    {
        id: "subj_gambler",
        name: "赌徒", nameEn: "The Gambler",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "只有在风险中才能感觉到活着——赌的不是钱，是命。",
        defEn: "Can only feel alive through risk — what's at stake is not money, but life itself.",
        flaw: "死亡驱力", flawEn: "Death Drive",
        core: "赌可以是最极端的乐观（一切都可能翻盘），也可以是最隐蔽的自毁（我在测试命运到底有多恨我）。关键张力：如果你赢了一切——你会停手，还是加倍？ | 缺失 ($): 安全感",
        coreEn: "Gambling can be the most extreme optimism (everything can turn around) or the most covert self-destruction (I'm testing how much fate hates me). Key tension: if you win everything — will you stop, or double down? | Lacks ($): Security",
        reference: "陀思妥耶夫斯基《赌徒》里深陷轮盘的阿列克谢；《鱿鱼游戏》中用命做筹码的底层众生。",
        referenceEn: "Alexei deeply immersed in roulette in Dostoevsky's The Gambler; the underclass gambling with their lives in Squid Game."
    },
    {
        id: "subj_collector",
        name: "收藏家", nameEn: "The Collector",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "试图通过收集客体来填满内心的空洞——对象可以是物品、人、成就或经验。",
        defEn: "Attempting to fill an inner void by collecting objects — items, people, achievements, or experiences.",
        flaw: "恋物", flawEn: "Fetishism",
        core: "收藏可以是对美的虔诚保存（我守护着别人忽视的珍宝），也可以是一种替代亲密的方式（物不会背叛）。关键张力：你的收藏品如果全部被烧毁——那个没有藏品的你，是谁？ | 缺失 ($): 亲密",
        coreEn: "Collecting can be a devout preservation of beauty (I guard treasures others overlook) or a substitute for intimacy (objects do not betray). Key tension: if your entire collection were burned — who is the you without it? | Lacks ($): Intimacy",
        reference: "《香水》里执拗地收集少女体香的格雷诺耶；《蝴蝶春梦》中收集蝴蝶进而囚禁少女的弗雷德。",
        referenceEn: "Grenouille obsessively collecting the scent of maidens in Perfume; Freddie collecting butterflies and proceeding to cage a girl in The Collector."
    },
    {
        id: "subj_fanatic",
        name: "笃信者", nameEn: "The Devoted",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "为了某种信仰、理想或事业，可以牺牲一切理性与温柔。",
        defEn: "For a belief, ideal, or cause, willing to sacrifice all reason and tenderness.",
        flaw: "盲目", flawEn: "Blindness",
        core: "狂信可以是人类最强大的精神力量（正义的烈焰），也可以是最危险的——因为狂信者不是没有道德，而是有一套自洽到无法穿透的道德。关键张力：你的信仰和你的良心，哪一次冲突了？你听了哪个? | 缺失 ($): 理性",
        coreEn: "Fanaticism can be humanity's mightiest spiritual power (the flame of righteousness) or its most dangerous — because the fanatic doesn't lack morals, but possesses a self-consistent morality impenetrable from outside. Key tension: when did your faith and your conscience clash — and which did you obey? | Lacks ($): Reason",
        reference: "大卫·芬奇《七宗罪》里借宗教肃清原罪的约翰；《悲惨世界》中死守法律绝不通融的沙威。",
        referenceEn: "John Doe cleansing original sin through religious killings in David Fincher's Se7en; Javert clinging to pure legalism in Les Misérables."
    },
    {
        id: "subj_hoarder",
        name: "囤积者", nameEn: "The Hoarder",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "无法丢弃任何东西——每一件物品都是一段不敢告别的过去。",
        defEn: "Unable to throw anything away — every object is a past one dares not bid farewell to.",
        flaw: "无法告别", flawEn: "Inability to Mourn",
        core: "囤积可以是一种朴素的安全感（有就比没有好），也可以是对时间流逝的最绝望的抵抗（只要不扔，那段记忆就还在）。关键张力：如果把一切都清空——你会觉得解脱，还是觉得自己也被扔掉了？ | 缺失 ($): 告别",
        coreEn: "Hoarding can be a humble sense of security (having is better than not) or the most desperate resistance to the passage of time (as long as I don't throw it away, the memory remains). Key tension: if everything were cleared away — would you feel liberated, or discarded yourself? | Lacks ($): Letting Go",
        reference: "马尔克斯《百年孤独》中在晚年强迫般反复打造小金鱼的奥雷里亚诺；《千与千寻》中吞噬一切、不断膨胀的无脸男。",
        referenceEn: "Aureliano obsessively forging little gold fishes in his old age in One Hundred Years of Solitude; No-Face, swallowing everything and constantly expanding in Spirited Away."
    },
    {
        id: "subj_voyeur",
        name: "窥视者", nameEn: "The Voyeur",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "通过偷窥他人的生活获得快感——看见别人的隐私成了一种无法戒掉的瘾。",
        defEn: "Deriving pleasure from peeping into others' lives — seeing others' privacy has become an unbreakable addiction.",
        flaw: "被动过剩", flawEn: "Passive Excess",
        core: "窥视可以是理解人性的窗口（作家和导演都是窥视者），也可以是行动力的彻底瘫痪（我只敢看，不敢活）。关键张力：如果被窥视的人突然看向你——你是逃跑，还是终于走出去？ | 缺失 ($): 介入的勇气",
        coreEn: "Voyeurism can be a window to understanding human nature (writers and directors are all voyeurs) or a total paralysis of agency (I only dare watch, not live). Key tension: if the person being watched suddenly looks back at you — do you run, or finally step forward? | Lacks ($): Courage to Act",
        reference: "希区柯克《后窗》里断了腿只能拿着望远镜沉迷于别家窗户的男主；《楚门的世界》里的电视观众。",
        referenceEn: "The wheelchair-bound protagonist obsessed with his neighbors' windows through binoculars in Hitchcock's Rear Window; the TV audience in The Truman Show."
    },
    {
        id: "subj_paranoiac",
        name: "过度解读者", nameEn: "The Over-Interpreter",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "在所有事物中寻找针对自己的阴谋——过度的解读能力成了一种无法关闭的诅咒。",
        defEn: "Finding conspiracies targeting oneself in everything — an excessive capacity for interpretation becomes an unstoppable curse.",
        flaw: "过度诠释", flawEn: "Over-interpretation",
        core: "偏执可以是一种洞察力（在别人放松警惕时你最先发现危险），也可以是把整个世界都变成敌人的自我实现预言。关键张力：如果你的怀疑有一次是对的——你会更安心，还是更加疑神疑鬼？ | 缺失 ($): 信任",
        coreEn: "Paranoia can be a form of insight (you spot danger first when others relax) or a self-fulfilling prophecy that turns the entire world into an enemy. Key tension: if your suspicion turns out to be right just once — will you feel safer, or even more paranoid? | Lacks ($): Trust",
        reference: "库布里克《闪灵》中逐渐被孤绝逼疯的杰克；《禁闭岛》里坚定认为整座岛都在对他下药骗他的泰迪。",
        referenceEn: "Jack gradually driven mad by isolation in Kubrick's The Shining; Teddy firmly believing the entire island is drugging and deceiving him in Shutter Island."
    },
    {
        id: "subj_workaholic",
        name: "工作狂", nameEn: "The Workaholic",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "用不停的忙碌填满所有缝隙——停下来等于坍塌。",
        defEn: "Filling every gap with relentless busyness — stopping means collapsing.",
        flaw: "空转焦虑", flawEn: "Idle Anxiety",
        core: "工作狂可以是最高效的创造者（没有人比永不停歇的人产出更多），也可以是最精巧的逃避者（忙到没空面对自己）。关键张力：如果强制休假一个月——你会发现什么？放松？还是一个你不认识的自己？ | 缺失 ($): 静止",
        coreEn: "A workaholic can be the most efficient creator (no one produces more than the one who never stops) or the most sophisticated evader (too busy to face the self). Key tension: if forced to take a month off — what would you discover? Relaxation? Or a self you don't recognize? | Lacks ($): Stillness",
        reference: "《穿普拉达的女王》中用极致效率掩盖人生裂痕的米兰达；《社交网络》中用代码逃避人际失败的扎克伯格。",
        referenceEn: "Miranda masking life's cracks with extreme efficiency in The Devil Wears Prada; Zuckerberg escaping interpersonal failure through code in The Social Network."
    },
    {
        id: "subj_avenger",
        name: "复仇者", nameEn: "The Avenger",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "被一种不可遏止的恨意驱动——复仇成了活下去的唯一理由。",
        defEn: "Driven by an unstoppable hatred — vengeance has become the sole reason to live.",
        flaw: "恨的奴隶", flawEn: "Slave to Hatred",
        core: "复仇可以是正义的最后手段（当法律失效时），也可以是把自己也烧尽的火。关键张力：当仇人死了——你是解脱，还是发现自己已经空了？ | 缺失 ($): 宽恕/放下",
        coreEn: "Vengeance can be the last resort of justice (when law fails) or a fire that burns the avenger too. Key tension: when the enemy is dead — is it liberation, or the discovery that you've become hollow? | Lacks ($): Forgiveness",
        reference: "大仲马《基督山伯爵》中耗尽半生策划天罗地网复仇的唐泰斯；朴赞郁《老男孩》中被操纵完成以复仇为名的毁灭闭环的主角。",
        referenceEn: "Dantès spending half his life weaving an elaborate web of vengeance in The Count of Monte Cristo; the protagonist manipulated into a loop of destruction in the name of revenge in Park Chan-wook's Oldboy."
    },
    {
        id: "subj_people_pleaser",
        name: "讨好者", nameEn: "The People-Pleaser",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "对所有人说'好'——因为'不'这个字从小就意味着被抛弃。",
        defEn: "Saying 'yes' to everyone — because 'no' has meant abandonment since childhood.",
        flaw: "边界消融", flawEn: "Boundary Erosion",
        core: "讨好可以维持和平（至少所有人都不生气），也可以慢慢把自己腐蚀到只剩一个空壳。关键张力：如果你说了一次'不'，而那个人因此离开了——你会后悔，还是终于知道谁值得留下？ | 缺失 ($): 边界",
        coreEn: "People-pleasing can maintain peace (at least no one is angry) or slowly corrode the self into an empty shell. Key tension: if you say 'no' once and that person leaves — will you regret it, or finally know who's worth keeping? | Lacks ($): Boundaries",
        reference: "《被嫌弃的松子的一生》中把讨好变成生存本能的松子；《芳华》中因为太'好'反而成为被利用对象的刘峰。",
        referenceEn: "Matsuko in Memories of Matsuko, whose people-pleasing became a survival instinct; Liu Feng in Youth, exploited precisely because he is too 'good'."
    },
    {
        id: "subj_power_hungry",
        name: "权力饥渴者", nameEn: "The Power-Hungry",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "对控制和支配有着永远无法满足的渴望——不是为了享乐，而是因为只有在金字塔顶端才能感到安全。",
        defEn: "Possessing an insatiable craving for control and dominance — not for pleasure, but because safety is only felt at the top of the pyramid.",
        flaw: "永不知足", flawEn: "Insatiability",
        core: "权力欲可以建造帝国（只有最饥渴的人才能推动历史），也可以毁掉一切亲密关系（没有人愿意跟一台永动机做朋友）。关键张力：当你站到了最高处——还剩谁站在你身边？ | 缺失 ($): 对等关系",
        coreEn: "The hunger for power can build empires (only the most famished push history forward) or destroy all intimacy (no one wants to befriend a perpetual machine). Key tension: when you reach the top — who is left standing beside you? | Lacks ($): Equal Relationships",
        reference: "莎士比亚《麦克白》中被权力欲反噬到疯狂的麦克白夫妇；《教父》中逐步丧失人性的迈克尔·柯里昂。",
        referenceEn: "The Macbeths consumed by power's backlash into madness in Shakespeare's Macbeth; Michael Corleone progressively losing his humanity in The Godfather."
    },
    {
        id: "subj_thrill_seeker",
        name: "极限追求者", nameEn: "The Thrill-Seeker",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "只有在极端体验中——速度、高度、暴力或性——才能感觉到自己还活着。",
        defEn: "Only feeling alive in extreme experiences — speed, heights, violence, or sex.",
        flaw: "阈值升级", flawEn: "Escalating Threshold",
        core: "追求极限可以是对生命最勇敢的拥抱（大多数人不敢去的边界），也可以是一种伪装成冒险的自杀。关键张力：你需要的刺激阈值越来越高——下一次，需要多大的剂量才能感觉到？ | 缺失 ($): 日常的感受力",
        coreEn: "Seeking extremes can be the bravest embrace of life (boundaries most people dare not approach) or a suicide disguised as adventure. Key tension: the threshold keeps rising — how much will you need next time to feel something? | Lacks ($): Everyday Sensitivity",
        reference: "《搏击俱乐部》中靠肉体疼痛唤醒感知的搏击会成员；《荒野猎人》中在极限生存中找到意志的格拉斯。",
        referenceEn: "The fight club members awakening their senses through physical pain in Fight Club; Glass finding his will through extreme survival in The Revenant."
    },
    {
        id: "subj_performer",
        name: "展示者", nameEn: "The Performer",
        group: "F. 过剩的主体", groupEn: "The Excessive",
        def: "需要被看见、被注意、被鼓掌——没有观众的人生等于不存在。",
        defEn: "Needing to be seen, noticed, applauded — a life without an audience equals nonexistence.",
        flaw: "注意力饥渴", flawEn: "Attention Hunger",
        core: "表演欲可以是艺术的原动力（没有这份冲动就没有舞台），也可以是对真实自我的永久逃离（只有在聚光灯下的我才是'真的'）。关键张力：当掌声停了、观众散了——你独自一人时，做什么？ | 缺失 ($): 自足感",
        coreEn: "The drive to perform can be the prime mover of art (without this urge there would be no stage) or a permanent flight from the true self (only the 'me' under the spotlight is 'real'). Key tension: when the applause stops and the audience leaves — what do you do alone? | Lacks ($): Self-Sufficiency",
        reference: "《日落大道》中活在过去辉光里拒绝退场的诺玛·戴斯蒙德；《鸟人》里在百老汇上挣扎寻找艺术确认的过气明星。",
        referenceEn: "Norma Desmond living in past glory and refusing to exit in Sunset Boulevard; the faded star struggling for artistic validation on Broadway in Birdman."
    }
];

