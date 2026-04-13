import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_C: LibraryItemDef[] = [
    // ============================================================
    // GROUP C. 旷野的弃子 (The Exiled) - 16 Items
    // 缺失方向：向外 → 社会。"我不属于任何地方"——放逐、排斥、边缘、他者。
    // ============================================================
    {
        id: "subj_stranger",
        name: "异乡人", nameEn: "The Stranger",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "闯入封闭系统的外来者——语言不通、规矩不懂，你的存在本身就是对秩序的冒犯。",
        defEn: "An outsider intruding into a closed system — unable to speak the language or grasp the rules; your very presence offends the order.",
        flaw: "沟通断裂", flawEn: "Alienation",
        core: "A面：身为异乡人可以是不受旧规矩约束的自由——你不欠这里任何人情，你可以用自己的眼睛看一切，不带任何滤镜。/ B面：但自由的另一面是孤立无援。没有人替你翻译，没有人替你作证。你犯的每一个错都不会被原谅为'不知道'。关键张力：你该学会融入，还是保持自己的面目走过去？ | 缺失 ($): 语言——你有话要说，但没人听得懂。",
        coreEn: "A-side: Being a stranger can be a freedom from old rules — you owe no one here; you see everything with naked eyes, no filters. / B-side: But the flip side of freedom is helplessness. No one translates for you, no one vouches for you. Every mistake you make won't be forgiven as 'not knowing.' Key tension: Learn to blend in, or walk through with your own face intact? | Lacks ($): Language — you have something to say, but no one understands.",
        reference: "加缪《局外人》中与主流情感结构格格不入的默尔索；卡夫卡《城堡》里永远无法进入核心的K。",
        referenceEn: "Meursault in Camus's The Stranger, totally out of tune with mainstream emotional structures; K in Kafka's The Castle, forever unable to enter the core."
    },
    {
        id: "subj_refugee",
        name: "难民", nameEn: "The Refugee",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "家园被毁或不可归返——被迫向陌生的世界赤身裸体地求一个容身之处。",
        defEn: "Home destroyed or unreturnable — forced naked into a strange world to beg for a place to stand.",
        flaw: "赤裸生命", flawEn: "Bare Life",
        core: "A面：失去一切之后剩下的可以是什么都不怕的坚韧——你已经没有什么可以再失去了，这种彻底的轻反而成了一种力量。/ B面：但赤裸的人没有谈判筹码。你的恳求总是被当作乞讨，你的愤怒总是被当作威胁。你活着，但没有任何制度承认你有活着的权利。关键张力：在废墟中拾起的第一块砖——是用来建房，还是投掷？ | 缺失 ($): 权利——你活着，但没有人承认你有活着的资格。",
        coreEn: "A-side: What remains after losing everything can be a fearlessness born of having nothing left — that total lightness becomes a kind of strength. / B-side: But the naked have no bargaining chips. Your plea is always mistaken for begging; your anger is always mistaken for threat. You're alive, but no institution admits your right to live. Key tension: The first brick from the rubble — for building or throwing? | Lacks ($): Rights — you're alive, but no one acknowledges your right to be.",
        reference: "卡夫卡《美国》中被推来搡去的卡尔；《第九区》中流亡地球却被圈养底层的外星人。",
        referenceEn: "Karl in Kafka's Amerika, pushed around constantly; the aliens in District 9, exiled to Earth but confined to the slums."
    },
    {
        id: "subj_scapegoat",
        name: "替罪羊", nameEn: "The Scapegoat",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "背负了集体的罪恶或系统的过失而被驱逐——你的清白不重要，他们需要一个人来承认有罪。",
        defEn: "Bearing collective guilt or systemic failures and expelled — your innocence doesn't matter; they need someone to plead guilty.",
        flaw: "冤屈", flawEn: "Injustice",
        core: "A面：被冤枉可以淬炼出铁一般的正义感——当你亲身经历了系统的谎言，你对真相的渴望比任何人都强烈。/ B面：但在证明清白之前，你已经被烤焦了。憎恨像酸一样腐蚀着你的内脏，有一天你发现自己已经不是在追求正义了——你只想要复仇。关键张力：洗清冤屈后，那份愤怒会消散——还是已经改变了你的本质？ | 缺失 ($): 清白——所有人都需要你有罪，包括你自己。",
        coreEn: "A-side: Being wronged can forge an iron sense of justice — having experienced the system's lies firsthand, your thirst for truth is fiercer than anyone's. / B-side: But before proving innocence, you're already charred. Resentment corrodes like acid inside; one day you realize you're no longer pursuing justice — you just want revenge. Key tension: After clearing your name, does the fury dissolve — or has it already changed who you are? | Lacks ($): Innocence — everyone needs you to be guilty, including yourself.",
        reference: "《巴黎圣母院》中承担着世人所有恶念的卡西莫多；《雪国列车》中背负系统重压的底层。",
        referenceEn: "Quasimodo in The Hunchback of Notre-Dame, bearing all the malice of the world; the lower-class passengers bearing the systemic weight in Snowpiercer."
    },
    {
        id: "subj_monster",
        name: "怪物", nameEn: "The Monster",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "被他人定义为异类或非人的存在——无论这个定义是否公正，标签一旦贴上就再也撕不掉。",
        defEn: "An existence defined by others as alien or non-human — whether just or not, once the label is affixed it can never be peeled off.",
        flaw: "内化丑陋", flawEn: "Monstrosity",
        core: "A面：被叫做怪物的人可以用行动反证——证明定义是错的，证明容貌和本质无关。这种反抗本身就是一种尊严。/ B面：但叫得太久，你自己也开始相信了。你把别人的恐惧内化成了自我认知——也许我真的是怪物，也许善良才是伪装。关键张力：如果证明了自己的善良，他们会接纳你——还是更加恐惧？ | 缺失 ($): 人性——你是一个人，但没有人这么看你。",
        coreEn: "A-side: One called a monster can disprove it through action — proving the definition wrong, proving appearance has nothing to do with essence. That defiance is itself dignity. / B-side: But called it long enough, you start believing. You internalize others' fear as self-knowledge — maybe I really am a monster; maybe kindness is the disguise. Key tension: If you prove your goodness, will they accept you — or fear you more? | Lacks ($): Humanity — you are a person, but no one sees you as one.",
        reference: "雨果《笑面人》中被摧残得只能狞笑的格温普兰；《黑客帝国》中异化为系统病毒的史密斯。",
        referenceEn: "Gwynplaine in Hugo's The Man Who Laughs, mutilated to forever grin; Agent Smith in The Matrix, mutated into a system virus."
    },
    {
        id: "subj_heretic",
        name: "异端", nameEn: "The Heretic",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "持有不同信仰或真理，被正统世界视为必须铲除的危险——你的罪名是'看到了他们不让看的东西'。",
        defEn: "Holding different beliefs or truths, deemed by the orthodox world as a danger to be eradicated — your crime is 'seeing what they forbid.'",
        flaw: "被诅咒", flawEn: "Anathema",
        core: "A面：异端可以是先驱——真理在被接受之前总是先被当作疯话。所有正统都曾经是异端，所有异端都在等待属于自己的时代。/ B面：但你等不到那个时代了。或者更残酷的可能——你不是先驱，你只是一个执念太深的疯子。关键张力：如果你的真理需要别人付出代价才能实现——你还坚持吗？ | 缺失 ($): 正统——你说的也许是对的，但这不能救你。",
        coreEn: "A-side: A heretic can be a pioneer — truth is always called madness before it's accepted. Every orthodoxy was once heresy; every heresy waits for its own era. / B-side: But you won't live to see that era. Or more cruelly — you're not a pioneer; you're just a madman too deep in obsession. Key tension: If your truth requires others to pay the price — do you still insist? | Lacks ($): Orthodoxy — you may be right, but that won't save you.",
        reference: "乔治·奥威尔《1984》中在真理部里心怀背叛的温斯顿；各类展现正统迫害文本中走向火刑架的布道者。",
        referenceEn: "Winston harboring treason in the Ministry of Truth in Orwell's 1984; the preachers walking to the stake in various texts of orthodox persecution."
    },
    {
        id: "subj_witch",
        name: "女巫", nameEn: "The Witch",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "拥有令主流秩序恐惧的力量或知识——尤其是女性。他们烧你不是因为你邪恶，是因为你强大。",
        defEn: "Possessing power or knowledge that terrifies the mainstream order — especially women. They burn you not for being evil, but for being powerful.",
        flaw: "禁忌力量", flawEn: "Taboo Power",
        core: "A面：被恐惧可以是一种反向权力——他们怕你，说明你拥有他们没有的东西。你的力量是真实的，他们的仇恨恰恰证明了这一点。/ B面：但力量的代价是永远的孤独。你不被允许拥有朋友、爱人或邻居——靠近你的人也会被火烧。关键张力：力量的代价是孤独——值得吗？ | 缺失 ($): 安全——你越强大，离火刑架就越近。",
        coreEn: "A-side: Being feared can be a reverse power — they fear you because you have what they lack. Your power is real; their hatred proves it. / B-side: But the price of power is eternal solitude. You're not allowed friends, lovers, or neighbors — anyone close to you will also burn. Key tension: The price of power is solitude — is it worth it? | Lacks ($): Safety — the more powerful you are, the closer to the stake.",
        reference: "霍桑《红字》中被清教徒社区挂上耻辱标识的海丝特·白兰；各种中世纪女巫审判中被献祭的边缘女性群体。",
        referenceEn: "Hester Prynne branded with shame by the Puritan community in Hawthorne's The Scarlet Letter; marginalized women sacrificed in medieval witch trials."
    },
    {
        id: "subj_bastard",
        name: "私生子", nameEn: "The Bastard",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "血统不纯或出身不正，被家族或体制拒于门外——你流着他们的血，但他们不认你。",
        defEn: "Of impure bloodline or illegitimate birth, locked out by family or institution — you carry their blood, but they won't claim you.",
        flaw: "怨恨", flawEn: "Resentment",
        core: "A面：不被承认可以是不欠任何人的自由——你不需要维护家族的体面，不需要继承任何人的债务。你是干净的。/ B面：但自由的底色是伤疤。那扇门从来没有为你打开过，门里面的笑声你听了一辈子。关键张力：如果那扇从未为你打开的门突然开了——你是走进去，还是转身离开？ | 缺失 ($): 名分——你流着他们的血，但你不配拥有他们的姓。",
        coreEn: "A-side: Being unacknowledged can be a freedom of owing no one — no family honor to uphold, no inherited debts. You are clean. / B-side: But freedom's backdrop is a scar. That door never opened for you; you listened to the laughter inside your whole life. Key tension: If the door that never opened suddenly swings wide — do you walk in, or turn away? | Lacks ($): Title — you carry their blood, but you don't deserve their name.",
        reference: "《权力的游戏》中终生蒙受杂种耻辱的琼恩·雪诺；曹禺《雷雨》里饱含怨恨的私生关系者鲁大海。",
        referenceEn: "Jon Snow in Game of Thrones, carrying the lifelong stigma of a bastard; the resentful illegitimate son Lu Dahai in Cao Yu's Thunderstorm."
    },
    {
        id: "subj_orphan",
        name: "孤儿", nameEn: "The Orphan",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "没有父母庇护，被世界的起跑线抛在身后——你从一开始就欠这个世界一个解释。",
        defEn: "Without parental shelter, left behind at the starting line — you owe the world an explanation from the very beginning.",
        flaw: "被遗弃恐惧", flawEn: "Abandonment",
        core: "A面：没有根可以是最轻的行囊——你不欠任何血脉一个交代，你可以从零开始定义自己。没有人给你的剧本，意味着你可以写自己的。/ B面：但最深的伤是'我从未被选择过'。每个人都有来处，只有你是被残世界遗落的。关键张力：你是在寻找一个家，还是在证明你不需要？ | 缺失 ($): 根源——每个人都有名字被叫出的第一个瞬间，你没有。",
        coreEn: "A-side: No roots can be the lightest baggage — you owe no bloodline an explanation; you can define yourself from scratch. No one else's script means you can write your own. / B-side: But the deepest wound is 'I was never chosen.' Everyone has an origin; only you were left behind by a cruel world. Key tension: Are you searching for a home, or proving you don't need one? | Lacks ($): Roots — everyone has a first moment of being called by name; you don't.",
        reference: "狄更斯《雾都孤儿》中在孤儿院挣扎求生的奥利弗；《孤星血泪》里永远在寻找根与尊严的匹普。",
        referenceEn: "Oliver struggling to survive in the orphanage in Dickens's Oliver Twist; Pip forever searching for roots and dignity in Great Expectations."
    },
    {
        id: "subj_criminal",
        name: "罪犯", nameEn: "The Criminal",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "触犯了规则，被系统追捕或标记的人——但规则本身是否公正，没人问过。",
        defEn: "One who has broken the rules, pursued or marked by the system — but whether the rules themselves are just, no one asked.",
        flaw: "负罪", flawEn: "Guilt",
        core: "A面：犯罪可以是反抗不义的唯一出路——当法律本身就是压迫的工具时，违法恰恰是最后的正义。/ B面：但违法者的理由再正当，罪的重量也不会消失。你选择的是最短的路，但最短的路往往是最黑的。关键张力：如果法律本身就是不公的——违法者和执法者，谁更有罪？ | 缺失 ($): 合法性——你做的也许是对的，但法律不这么认为。",
        coreEn: "A-side: Crime can be the only way to resist injustice — when the law itself is a tool of oppression, breaking it is the last act of justice. / B-side: But no matter how righteous the reason, the weight of guilt doesn't disappear. You chose the shortest path, but the shortest path is often the darkest. Key tension: If the law itself is unjust — who is guiltier, the lawbreaker or the enforcer? | Lacks ($): Legitimacy — what you did may be right, but the law disagrees.",
        reference: "《悲惨世界》里因偷面包一生都在逃亡与救赎的冉阿让；陀思妥耶夫斯基《罪与罚》中深受良心折磨的拉斯柯尔尼科夫。",
        referenceEn: "Jean Valjean in Les Misérables, fleeing and seeking redemption his whole life for stealing bread; Raskolnikov tormented by his conscience in Dostoevsky's Crime and Punishment."
    },
    {
        id: "subj_prisoner",
        name: "囚徒", nameEn: "The Prisoner",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "被物理性或制度性地剥夺自由——牢房、婚姻、契约或疾病都可以是监狱。",
        defEn: "Physically or institutionally deprived of freedom — a cell, a marriage, a contract, or illness can all be prisons.",
        flaw: "幽闭", flawEn: "Confinement",
        core: "A面：围墙可以让一个人在极有限的空间内发现无限的精神自由——当肉体被锁死，灵魂反而走得更远。/ B面：但那是幸运者的故事。更多的人被墙磨成了墙的一部分，出狱后发现自己已经不会在没有墙的世界里走路了。关键张力：出狱后的世界比牢里更大——但真的更自由吗？ | 缺失 ($): 空间——你的身体在牢里，你的灵魂呢？",
        coreEn: "A-side: Walls can let a person discover infinite spiritual freedom in the most limited space — when flesh is locked, the soul travels further. / B-side: But that's the lucky one's story. Most are ground into part of the wall; after release, they discover they've forgotten how to walk in a world without walls. Key tension: The world outside is larger than the cell — but is it truly freer? | Lacks ($): Space — your body is in the cell; where is your soul?",
        reference: "《肖申克的救赎》中二十年如一日挖墙寻自由的安迪；大仲马《基督山伯爵》里在伊夫堡地牢被活埋的唐泰斯。",
        referenceEn: "Andy digging through walls for twenty years aiming for freedom in The Shawshank Redemption; Dantès buried alive in the Château d'If dungeon in Dumas's The Count of Monte Cristo."
    },
    {
        id: "subj_exile",
        name: "流放者", nameEn: "The Exile",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "曾经身居中心，现在被赶到边缘——你记得那个位置的温度，这让流放更加刺骨。",
        defEn: "Once at the center, now driven to the margins — you remember the warmth of that position, which makes the exile all the more biting.",
        flaw: "落差", flawEn: "Fall",
        core: "A面：流放可以是第二次人生的起点——没有了王座的重量，肩膀终于松了。你第一次以平民的身份看这个世界，看到了以前看不到的东西。/ B面：但回忆着过去的辉煌是一种漫长的折磨。你知道那个位置的温度、气味和质地,这让此刻的寒冷更加难以忍受。关键张力：如果给你机会回到中心——你还是以前那个人吗？ | 缺失 ($): 地位——你记得顶端的风景，但那道路已经被炸毁了。",
        coreEn: "A-side: Exile can be the starting point of a second life — without the throne's weight, shoulders finally relax. For the first time you see the world as a commoner, noticing what you never saw. / B-side: But remembering past glory is a slow torment. You know that position's temperature, scent, and texture; it makes the present cold even harder to bear. Key tension: If given the chance to return to the center — are you still the same person? | Lacks ($): Status — you remember the view from the top, but the road back has been destroyed.",
        reference: "被贬黜江阁写出极渊之词的东方文人；马尔克斯《百年孤独》中在无休止的内战与流亡中消耗的奥雷里亚诺上校。",
        referenceEn: "Demoted Eastern literati writing verses of extreme abyss; Colonel Aureliano consumed in endless civil wars and exile in Márquez's One Hundred Years of Solitude."
    },
    {
        id: "subj_nomad",
        name: "游牧者", nameEn: "The Nomad",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "主动或被迫选择了流浪，拒绝任何一种定居——你的地址永远是'在路上'。",
        defEn: "Choosing — by will or by force — to wander, refusing any form of settlement; your address is always 'on the road.'",
        flaw: "漂泊", flawEn: "Drifting",
        core: "A面：流浪可以是最彻底的自由——天地为家，没有需要保卫的东西，也就没有可以被要挟的软肋。你轻得像风。/ B面：但风不会被任何人记住。你不敢交出心——因为明天你就走了。有时候你怀疑自己不是热爱自由，只是害怕停下来面对自己。关键张力：如果有人说'留下来'——你会觉得温暖，还是恐惧？ | 缺失 ($): 安定——你拥有全部的路，但没有一个叫'家'的点。",
        coreEn: "A-side: Wandering can be the most radical freedom — the world as home; with nothing to defend, there is no soft spot to be held hostage. You are light as wind. / B-side: But wind is never remembered. You dare not give your heart — because tomorrow you leave. Sometimes you suspect you don't love freedom; you're just afraid of stopping to face yourself. Key tension: If someone says 'stay' — do you feel warmth, or fear? | Lacks ($): Stability — you own every road, but not a single point called 'home.'",
        reference: "凯鲁亚克《在路上》中驱车狂奔没有终点的迪安；《荒野生存》里摒弃现代文明步入荒野的克里斯多夫。",
        referenceEn: "Dean driving endlessly with no destination in Kerouac's On the Road; Christopher abandoning modern civilization for the wild in Into the Wild."
    },
    {
        id: "subj_traitor",
        name: "叛徒", nameEn: "The Traitor",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "背叛了曾经效忠的阵营——无论出于自私还是觉醒，从此两边都不再接纳你。",
        defEn: "Having betrayed the side once served — whether from selfishness or awakening, neither side accepts you anymore.",
        flaw: "信任破产", flawEn: "Distrust",
        core: "A面：背叛可以是最孤独的觉醒——你是唯一一个看清了阵营真面目的人，你的'叛变'恰恰是你良知最清醒的时刻。/ B面：但觉醒的代价是永恒的孤独。旧阵营恨你是叛徒，新阵营疑你是间谍。你两边都不属于——你成了一个没有国籍的人。关键张力：如果你背叛的阵营本身就是邪恶的——你依然是叛徒吗？ | 缺失 ($): 信任——你的每一句话都会被怀疑，包括'我是真心的'。",
        coreEn: "A-side: Betrayal can be the loneliest awakening — you alone saw the side's true face; your 'defection' was your conscience at its sharpest. / B-side: But the price of awakening is eternal loneliness. The old side hates you as a traitor; the new side suspects you as a spy. You belong nowhere — a person without a country. Key tension: If the side you betrayed was itself evil — are you still a traitor? | Lacks ($): Trust — every word of yours is doubted, including 'I am sincere.'",
        reference: "《无间道》中在黑白两道之间游走、最后想做好人而不得的刘建明；三十枚银币就背叛真神的犹大。",
        referenceEn: "Lau Kin-ming walking between the underworld and police force, unable to be a good man in Infernal Affairs; Judas betraying the true God for thirty pieces of silver."
    },
    {
        id: "subj_survivor",
        name: "幸存者", nameEn: "The Survivor",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "从灾难中活下来的人——活着本身成了一种需要解释的罪。",
        defEn: "One who survived a disaster — where being alive itself becomes a guilt requiring explanation.",
        flaw: "幸存者愧疚", flawEn: "Survivor's Guilt",
        core: "A面：活下来可以是奇迹的礼物——你被赋予了替死者完成未竟之事的使命。你的每一天都是借来的，因此每一天都是珍贵的。/ B面：但那些没有活下来的人的脸在夜里会来找你。你不知道为什么是你而不是他们——这个问题没有答案，但它会吃掉你。关键张力：你是带着死者的嘱托活下去，还是被他们的沉默压垮？ | 缺失 ($): 同伴——你活了下来，但他们没有。",
        coreEn: "A-side: Surviving can be a miracle's gift — you're given the mission of completing what the dead left unfinished. Every day of yours is borrowed, thus every day is precious. / B-side: But the faces of those who didn't survive visit you at night. You don't know why you and not them — that question has no answer, but it will eat you alive. Key tension: Do you live carrying the wishes of the dead, or are you crushed by their silence? | Lacks ($): Companions — you survived, but they didn't.",
        reference: "威廉·戈尔丁《蝇王》中见证了纯真彻底毁灭而痛哭的拉尔夫；《泰坦尼克号》中孤独存活的露丝。",
        referenceEn: "Ralph weeping at the complete destruction of innocence in Golding's Lord of the Flies; Rose surviving in solitude in Titanic."
    },
    {
        id: "subj_ronin",
        name: "浪人", nameEn: "The Ronin",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "失去了效忠对象或使命——曾经有主、有旗、有方向，现在剑还在，但不知道为谁而拔。",
        defEn: "Having lost the object of allegiance or mission — once having a lord, a banner, a direction; now the sword remains, but for whom to draw it?",
        flaw: "无主", flawEn: "Masterless",
        core: "A面：失去使命可以是唯一的自由——你终于可以为自己决定了。没有旗帜的剑客，是唯一一个可以选择不杀人的人。/ B面：但自由对一个只会拔剑的人来说是诅咒。你的一生都在服从中获得意义——现在意义消失了，你的手还在抖。关键张力：如果一个新的主人出现——你是欣慰，还是警惕？ | 缺失 ($): 荣誉——剑还在，但持剑的理由已经死了。",
        coreEn: "A-side: Losing one's mission can be the only true freedom — you can finally decide for yourself. A swordsman without a banner is the only one who can choose not to kill. / B-side: But freedom is a curse for someone who only knows how to draw a sword. Your whole life found meaning in obedience — now meaning is gone, and your hand still shakes. Key tension: If a new master appears — do you feel relief, or alarm? | Lacks ($): Honor — the sword remains, but the reason for holding it is dead.",
        reference: "黑泽明《七武士》里只为一口饭与底线而拔刀的无主浪人；《银魂》里失去大义的坂田银时。",
        referenceEn: "The masterless samurai drawing swords just for a meal and their basic morals in Kurosawa's Seven Samurai; Sakata Gintoki who lost his grand cause in Gintama."
    },
    {
        id: "subj_mutant",
        name: "异数", nameEn: "The Anomaly",
        group: "C. 旷野的弃子", groupEn: "The Exiled",
        def: "先天本能、天赋或形质异于常人——你超越了主流秩序的理解阈值，你的存在让他们不安。",
        defEn: "Whose innate instincts, talents, or forms are abnormal — you exceed the mainstream's threshold of comprehension; your existence unsettles them.",
        flaw: "异类标定", flawEn: "Freak",
        core: "A面：异于常人可以是天赋——所有先知都曾被叫做疯子。你看见了他们看不见的东西，这种视野本身就是一种超越。/ B面：但没有同类的人生是漫长的独白。你无法解释自己的感受，因为你感受的东西没有任何现成的词汇可以命名。关键张力：你究竟是超越这个世界的下一步——还是被秩序排出的错误？ | 缺失 ($): 常态的接纳——你也许是进化，但没有人能陪你证明这一点。",
        coreEn: "A-side: Being abnormal can be a gift — every prophet was once called mad. You see what they cannot; that vision itself is a transcendence. / B-side: But a life without peers is a long monologue. You can't explain your feelings because no existing words can name what you feel. Key tension: Are you the next step beyond this world — or an error expelled by the order? | Lacks ($): Normality — you may be evolution, but no one can accompany you to prove it.",
        reference: "杰克·伦敦《海狼》里的沃尔夫·拉森；《香水》里嗅觉通神但没有属于自己体味的格雷诺耶。",
        referenceEn: "Wolf Larsen in Jack London's The Sea-Wolf; Grenouille the scent-genius with no body odor of his own in Perfume."
    }
];

