import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_C: LibraryItemDef[] = [
    // ============================================================
    // GROUP C. 被驱逐的主体 (The Exiled) - 16 Items
    // 缺失方向：向外 → 社会。"我不属于任何地方"——放逐、排斥、边缘、他者。
    // ============================================================
    {
        id: "subj_stranger",
        name: "异乡人", nameEn: "The Stranger",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "闯入封闭系统的外来者，语言不通、规矩不懂的人。",
        defEn: "An outsider intruding into a closed system, unable to speak its language or grasp its rules.",
        flaw: "沟通断裂", flawEn: "Alienation",
        core: "身为异乡人可以是孤立无援的困境，也可以是不受旧规矩约束的自由。关键张力：我该学会融入，还是保持自己面目走过？ | 缺失 ($): 语言",
        coreEn: "Being a stranger can be a helpless plight or a freedom from old rules. Key tension: should I learn to blend in, or walk through with my own face intact? | Lacks ($): Language",
        reference: "加缪《局外人》中与主流情感结构格格不入的默尔索；卡夫卡《城堡》里永远无法进入核心的K。",
        referenceEn: "Meursault in Camus's The Stranger, totally out of tune with mainstream emotional structures; K in Kafka's The Castle, forever unable to enter the core."
    },
    {
        id: "subj_refugee",
        name: "难民", nameEn: "The Refugee",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "家园被毁或不可归返，被迫向陌生的世界寻求庇护的人。",
        defEn: "One whose home is destroyed or unreturnable, forced to seek shelter in a strange world.",
        flaw: "赤裸生命", flawEn: "Bare Life",
        core: "失去一切后，剩下的要么是彻底的脆弱，要么是什么都不怕的坚韧。关键张力：在废墟中拾起的第一块砖，是用来建房还是投掷？ | 缺失 ($): 权利",
        coreEn: "After losing everything, what remains is either total vulnerability or a fearlessness born of having nothing left to lose. Key tension: the first brick picked from the rubble — is it for building or throwing? | Lacks ($): Rights",
        reference: "卡夫卡《美国》中被推来搡去的卡尔；《第九区》中流亡地球却被圈养底层的外星人。",
        referenceEn: "Karl in Kafka's Amerika, pushed around constantly; the aliens in District 9, exiled to Earth but confined to the slums."
    },
    {
        id: "subj_scapegoat",
        name: "替罪羊", nameEn: "The Scapegoat",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "背负了集体罪恶或系统性错误而被驱逐的人。",
        defEn: "A person bearing the collective guilt or systemic failures and subsequently expelled.",
        flaw: "冤屈", flawEn: "Injustice",
        core: "被冤枉可以是最深的绝望，也可以淬炼出铁一般的正义感。关键张力：洗清冤屈之后，那份愤怒会消散，还是已经改变了你的本质？ | 缺失 ($): 清白",
        coreEn: "Being wronged can be the deepest despair or forge an iron sense of justice. Key tension: after clearing your name, does the fury dissolve — or has it already changed who you are? | Lacks ($): Innocence",
        reference: "《巴黎圣母院》中承担着世人所有恶念的卡西莫多；《雪国列车》中背负系统重压的底层。",
        referenceEn: "Quasimodo in The Hunchback of Notre-Dame, bearing all the malice of the world; the lower-class passengers bearing the systemic weight in Snowpiercer."
    },
    {
        id: "subj_monster",
        name: "怪物", nameEn: "The Monster",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "被他人定义为异类或非人的存在——无论这个定义是否公正。",
        defEn: "An existence defined by others as alien or non-human — regardless of whether this definition is just.",
        flaw: "内化丑陋", flawEn: "Monstrosity",
        core: "被叫做怪物的人可以认命（成为他们恐惧的样子），也可以反证（用行动证明定义是错的）。关键张力：如果证明了自己的善良，他们会接纳你，还是更加恐惧？ | 缺失 ($): 人性",
        coreEn: "One called a monster can either accept the role (becoming what they fear) or disprove it (proving the definition wrong). Key tension: if you prove your goodness, will they accept you — or fear you even more? | Lacks ($): Humanity",
        reference: "雨果《笑面人》中被摧残得只能狞笑的格温普兰；《黑客帝国》中异化为系统病毒的史密斯。",
        referenceEn: "Gwynplaine in Hugo's The Man Who Laughs, mutilated to forever grin; Agent Smith in The Matrix, mutated into a system virus."
    },
    {
        id: "subj_heretic",
        name: "异端", nameEn: "The Heretic",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "持有不同信仰或真理，被正统世界视为危险的人。",
        defEn: "One holding different beliefs or truths, deemed dangerous by the orthodox world.",
        flaw: "被诅咒", flawEn: "Anathema",
        core: "异端可以是先驱（真理总是先被当作异端），也可以只是执念太深的疯子。关键张力：如果你的真理需要别人付出代价才能实现——你还坚持吗？ | 缺失 ($): 正统",
        coreEn: "A heretic can be a pioneer (truth is always heresy first) or simply a madman too deep in obsession. Key tension: if your truth requires others to pay the price for its realization — do you still insist? | Lacks ($): Orthodoxy",
        reference: "乔治·奥威尔《1984》中在真理部里心怀背叛的温斯顿；各类展现正统迫害文本中走向火刑架的布道者。",
        referenceEn: "Winston harboring treason in the Ministry of Truth in Orwell's 1984; the preachers walking to the stake in various texts of orthodox persecution."
    },
    {
        id: "subj_witch",
        name: "女巫", nameEn: "The Witch",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "拥有令主流秩序恐惧的力量或知识的人——尤其是女性。",
        defEn: "One possessing power or knowledge that terrifies the mainstream order — especially women.",
        flaw: "禁忌力量", flawEn: "Taboo Power",
        core: "被恐惧可以是诅咒（你永远活在猎杀之下），也可以是一种反向权力（他们怕你，说明你拥有他们没有的东西）。关键张力：力量的代价是孤独——值得吗？ | 缺失 ($): 安全",
        coreEn: "Being feared can be a curse (living forever under the hunt) or a reverse power (they fear you because you have what they lack). Key tension: the price of power is solitude — is it worth it? | Lacks ($): Safety",
        reference: "霍桑《红字》中被清教徒社区挂上耻辱标识的海丝特·白兰；各种中世纪女巫审判中被献祭的边缘女性群体。",
        referenceEn: "Hester Prynne branded with shame by the Puritan community in Hawthorne's The Scarlet Letter; marginalized women sacrificed in medieval witch trials."
    },
    {
        id: "subj_bastard",
        name: "私生子", nameEn: "The Bastard",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "血统不纯或出身不正，被家族或体制拒于门外的继承人。",
        defEn: "Of impure bloodline or illegitimate birth, an heir locked out by family or institution.",
        flaw: "怨恨", flawEn: "Resentment",
        core: "不被承认可以是终生的伤疤，也可以是不欠任何人的自由。关键张力：如果那扇从未为你打开的门突然开了——你是走进去，还是转身离开？ | 缺失 ($): 名分",
        coreEn: "Being unacknowledged can be a lifelong wound or the freedom of owing no one. Key tension: if the door that never opened for you suddenly swings wide — do you walk in, or turn away? | Lacks ($): Title",
        reference: "《权力的游戏》中终生蒙受杂种耻辱的琼恩·雪诺；曹禺《雷雨》里饱含怨恨的私生关系者鲁大海。",
        referenceEn: "Jon Snow in Game of Thrones, carrying the lifelong stigma of a bastard; the resentful illegitimate son Lu Dahai in Cao Yu's Thunderstorm."
    },
    {
        id: "subj_orphan",
        name: "孤儿", nameEn: "The Orphan",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "没有父母庇护，被世界的起跑线抛在身后的人。",
        defEn: "Without parental shelter, left behind at the starting line of the world.",
        flaw: "被遗弃恐惧", flawEn: "Abandonment",
        core: "没有根可以是最深的伤（我从未被选择过），也可以是最轻的行囊（我不欠任何血脉一个交代）。关键张力：你是在寻找一个家，还是在证明你不需要？ | 缺失 ($): 根源",
        coreEn: "Having no roots can be the deepest wound (I was never chosen) or the lightest baggage (I owe no bloodline an explanation). Key tension: are you searching for a home, or proving you don't need one? | Lacks ($): Roots",
        reference: "狄更斯《雾都孤儿》中在孤儿院挣扎求生的奥利弗；《孤星血泪》里永远在寻找根与尊严的匹普。",
        referenceEn: "Oliver struggling to survive in the orphanage in Dickens's Oliver Twist; Pip forever searching for roots and dignity in Great Expectations."
    },
    {
        id: "subj_criminal",
        name: "罪犯", nameEn: "The Criminal",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "触犯了规则，被系统追捕或标记的人。",
        defEn: "One who has broken the rules, pursued or marked by the system.",
        flaw: "负罪", flawEn: "Guilt",
        core: "犯罪可以是堕落的起点，也可以是反抗不义的唯一出路。关键张力：如果法律本身就是不公的——违法者和执法者，谁更有罪？ | 缺失 ($): 合法性",
        coreEn: "Crime can be the starting point of falling or the only way to resist injustice. Key tension: if the law itself is unjust — who is more guilty, the lawbreaker or the enforcer? | Lacks ($): Legitimacy",
        reference: "《悲惨世界》里因偷面包一生都在逃亡与救赎的冉阿让；陀思妥耶夫斯基《罪与罚》中深受良心折磨的拉斯柯尔尼科夫。",
        referenceEn: "Jean Valjean in Les Misérables, fleeing and seeking redemption his whole life for stealing bread; Raskolnikov tormented by his conscience in Dostoevsky's Crime and Punishment."
    },
    {
        id: "subj_prisoner",
        name: "囚徒", nameEn: "The Prisoner",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "被物理性或制度性地剥夺自由的人——牢房、婚姻、契约或疾病都可以是监狱。",
        defEn: "One physically or institutionally deprived of freedom — a cell, a marriage, a contract, or illness can all be prisons.",
        flaw: "幽闭", flawEn: "Confinement",
        core: "围墙可以摧毁一个人，也可以让一个人在极有限的空间内发现无限的精神自由。关键张力：出狱后的世界比牢里更大——但真的更自由吗？ | 缺失 ($): 空间",
        coreEn: "Walls can destroy a person or let them discover infinite spiritual freedom within the most limited space. Key tension: the world outside is larger than the cell — but is it truly freer? | Lacks ($): Space",
        reference: "《肖申克的救赎》中二十年如一日挖墙寻自由的安迪；大仲马《基督山伯爵》里在伊夫堡地牢被活埋的唐泰斯。",
        referenceEn: "Andy digging through walls for twenty years aiming for freedom in The Shawshank Redemption; Dantès buried alive in the Château d'If dungeon in Dumas's The Count of Monte Cristo."
    },
    {
        id: "subj_exile",
        name: "流放者", nameEn: "The Exile",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "曾经身居中心，现在被赶到边缘的人。",
        defEn: "Once at the center, now driven to the margins.",
        flaw: "落差", flawEn: "Fall",
        core: "流放可以是漫长的折磨（回忆着过去的辉煌），也可以是第二次人生的起点（没有了王座的重量，肩膀终于松了）。关键张力：如果给你机会回到中心——你还是以前那个人吗？ | 缺失 ($): 地位",
        coreEn: "Exile can be a long torment (haunted by past glory) or the starting point of a second life (without the weight of the throne, the shoulders finally relax). Key tension: if given the chance to return to the center — are you still the same person? | Lacks ($): Status",
        reference: "被贬黜江阁写出极渊之词的东方文人；马尔克斯《百年孤独》中在无休止的内战与流亡中消耗的奥雷里亚诺上校。",
        referenceEn: "Demoted Eastern literati writing verses of extreme abyss; Colonel Aureliano consumed in endless civil wars and exile in Márquez's One Hundred Years of Solitude."
    },
    {
        id: "subj_nomad",
        name: "游牧者", nameEn: "The Nomad",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "主动或被迫选择了流浪——拒绝任何一种定居的人。",
        defEn: "Choosing — by will or by force — to wander, refusing any form of settlement.",
        flaw: "漂泊", flawEn: "Drifting",
        core: "流浪可以是最彻底的自由（天地为家），也可以是最隐秘的逃避（我只是不敢停下来面对自己）。关键张力：如果有人说'留下来'——你会觉得温暖，还是恐惧？ | 缺失 ($): 安定",
        coreEn: "Wandering can be the most radical freedom (the world as home) or the most covert evasion (I just don't dare stop and face myself). Key tension: if someone says 'stay' — do you feel warmth, or fear? | Lacks ($): Stability",
        reference: "凯鲁亚克《在路上》中驱车狂奔没有终点的迪安；《荒野生存》里摒弃现代文明步入荒野的克里斯多夫。",
        referenceEn: "Dean driving endlessly with no destination in Kerouac's On the Road; Christopher abandoning modern civilization for the wild in Into the Wild."
    },
    {
        id: "subj_traitor",
        name: "叛徒", nameEn: "The Traitor",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "背叛了曾经效忠的阵营——无论出于自私还是觉醒。",
        defEn: "Having betrayed the side once served — whether out of selfishness or awakening.",
        flaw: "信任破产", flawEn: "Distrust",
        core: "背叛可以是最卑劣的自保，也可以是最孤独的觉醒。关键张力：如果你背叛的阵营本身就是邪恶的——你依然是叛徒吗？ | 缺失 ($): 信任",
        coreEn: "Betrayal can be the most craven self-preservation or the loneliest awakening. Key tension: if the side you betrayed was itself evil — are you still a traitor? | Lacks ($): Trust",
        reference: "《无间道》中在黑白两道之间游走、最后想做好人而不得的刘建明；三十枚银币就背叛真神的犹大。",
        referenceEn: "Lau Kin-ming walking between the underworld and police force, unable to be a good man in Infernal Affairs; Judas betraying the true God for thirty pieces of silver."
    },
    {
        id: "subj_survivor",
        name: "幸存者", nameEn: "The Survivor",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "从灾难中活下来的人——活着本身成了一种需要解释的罪。",
        defEn: "One who survived a disaster — where being alive itself becomes a guilt requiring explanation.",
        flaw: "幸存者愧疚", flawEn: "Survivor's Guilt",
        core: "活下来可以是奇迹的礼物，也可以是最沉重的负担。关键张力：你是带着死者的嘱托活下去，还是被他们的沉默压垮？ | 缺失 ($): 同伴",
        coreEn: "Surviving can be a miracle's gift or the heaviest burden. Key tension: do you live on carrying the wishes of the dead, or are you crushed by their silence? | Lacks ($): Companions",
        reference: "威廉·戈尔丁《蝇王》中见证了纯真彻底毁灭而痛哭的拉尔夫；《泰坦尼克号》中孤独存活的露丝。",
        referenceEn: "Ralph weeping at the complete destruction of innocence in Golding's Lord of the Flies; Rose surviving in solitude in Titanic."
    },
    {
        id: "subj_ronin",
        name: "浪人", nameEn: "The Ronin",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "失去了效忠对象或使命的人——曾经有主、有旗、有方向，现在什么都没有了。",
        defEn: "One who has lost the object of allegiance or mission — once having a lord, a banner, a direction, now having nothing.",
        flaw: "无主", flawEn: "Masterless",
        core: "失去使命可以是最大的丧失（剑不知为谁而拔），也可以是唯一的自由（终于可以为自己决定了）。关键张力：如果一个新的主人出现，你是欣慰还是警惕？ | 缺失 ($): 荣誉",
        coreEn: "Losing one's mission can be the greatest loss (the sword doesn't know whom to draw for) or the only freedom (finally able to decide for oneself). Key tension: if a new master appears, do you feel relief or alarm? | Lacks ($): Honor",
        reference: "黑泽明《七武士》里只为一口饭与底线而拔刀的无主浪人；《银魂》里失去大义的坂田银时。",
        referenceEn: "The masterless samurai drawing swords just for a meal and their basic morals in Kurosawa's Seven Samurai; Sakata Gintoki who lost his grand cause in Gintama."
    },
    {
        id: "subj_mutant",
        name: "异数", nameEn: "The Anomaly",
        group: "C. 被驱逐的主体", groupEn: "The Exiled",
        def: "先天本能、天赋或形质异于常人，超越了主流秩序的理解阈值。",
        defEn: "Whose innate instincts, talents, or forms are abnormal, exceeding the threshold of mainstream comprehension.",
        flaw: "异类标定", flawEn: "Freak",
        core: "异于常人可以是天赋（所有先知都曾被叫做疯子），也可以是诅咒（没有同类的人生是漫长的独白）。关键张力：我究竟是超越这个世界的下一步，还是被秩序排出的错误？ | 缺失 ($): 常态的接纳",
        coreEn: "Being abnormal can be a gift (every prophet was once called mad) or a curse (a life without peers is a long monologue). Key tension: am I the next step beyond this world, or an error expelled by the order? | Lacks ($): Normality",
        reference: "杰克·伦敦《海狼》里的沃尔夫·拉森；《香水》里嗅觉通神但没有属于自己体味的格雷诺耶。",
        referenceEn: "Wolf Larsen in Jack London's The Sea-Wolf; Grenouille the scent-genius with no body odor of his own in Perfume."
    }
];

