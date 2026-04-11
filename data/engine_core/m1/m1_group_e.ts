import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_E: LibraryItemDef[] = [
    // ============================================================
    // GROUP E. 空洞的主体 (The Hollow) - 16 Items
    // 缺失方向：向意义 → 时间/存在。"这一切是为了什么？"
    // 不一定痛苦，可能只是安静的、日常的空。
    // ============================================================
    {
        id: "subj_nihilist",
        name: "虚无主义者", nameEn: "The Nihilist",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "看穿了世界的荒谬，拒绝赋予任何事物价值。",
        defEn: "Has seen through the absurdity of the world and refuses to assign value to anything.",
        flaw: "无意义", flawEn: "Meaninglessness",
        core: "虚无可以是最彻底的自由（既然没有意义，我就可以自己创造），也可以是最沉重的诅咒（明知没有意义还要继续）。关键张力：如果什么都不重要——为什么你还活着？ | 缺失 ($): 意义",
        coreEn: "Nihilism can be the most radical freedom (since nothing matters, I can create my own meaning) or the heaviest curse (knowing nothing matters yet continuing). Key tension: if nothing matters — why are you still alive? | Lacks ($): Meaning",
        reference: "屠格涅夫《父与子》中对一切权威与信仰嗤之以鼻的巴扎罗夫；电影《超脱》中以抽离姿态面对系统性崩溃的男主亨利。",
        referenceEn: "Bazarov in Turgenev's Fathers and Sons, scoffing at all authority and faith; Henry in Detachment, facing systemic collapse with total detachment."
    },
    {
        id: "subj_melancholic",
        name: "忧郁者", nameEn: "The Melancholic",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "被一种无法命名的悲伤笼罩——不是因为失去了什么，而是从一开始就觉得少了点什么。",
        defEn: "Shrouded in an unnameable sorrow — not from losing something, but from always feeling that something was missing from the start.",
        flaw: "自我废弃", flawEn: "Self-Abjection",
        core: "忧郁可以是一种深刻的敏感（看见别人看不见的阴影），也可以是缓慢的沉没。关键张力：那种无法命名的空缺——到底是需要被治愈的疾病，还是你比别人多看到了一层真实？ | 缺失 ($): 存在的充实感",
        coreEn: "Melancholy can be a profound sensitivity (seeing shadows others cannot) or a slow sinking. Key tension: that unnameable void — is it a disease to be cured, or a deeper layer of truth you see that others don't? | Lacks ($): Fullness of Being",
        reference: "太宰治《人间失格》中失去做人资格的大庭叶藏；拉斯·冯·提尔《忧郁症》中心死如灰的贾斯汀。",
        referenceEn: "Oba Yozo who lost his qualification as a human in Dazai Osamu's No Longer Human; Justine, dead inside, in Lars von Trier's Melancholia."
    },
    {
        id: "subj_cynic",
        name: "犬儒", nameEn: "The Cynic",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "看穿了一切虚伪，只相信利益——或者说，只承认利益是唯一诚实的语言。",
        defEn: "Seeing through all hypocrisy, believing only in self-interest — or rather, admitting interest as the only honest language.",
        flaw: "冷漠", flawEn: "Callousness",
        core: "犬儒可以是一种来之不易的智慧（经历过理想主义的幻灭之后），也可以是一种精致的逃避（嘲笑一切就不用冒险相信什么了）。关键张力：如果犬儒遇到了一个真正无私的人——他会被打动，还是更加恐惧？ | 缺失 ($): 希望",
        coreEn: "Cynicism can be hard-won wisdom (after the disillusionment of idealism) or a refined evasion (mocking everything so you never risk believing). Key tension: if the cynic meets someone truly selfless — will they be moved, or even more afraid? | Lacks ($): Hope",
        reference: "动画《瑞克和莫蒂》中洞见破灭极度厌世的瑞克外公；《纸牌屋》里将民主与道德全盘视为筹码的弗兰克。",
        referenceEn: "Rick Sanchez, deeply misanthropic and disillusioned in Rick and Morty; Frank Underwood seeing democracy and morals as mere chips in House of Cards."
    },
    {
        id: "subj_stoic",
        name: "斯多葛", nameEn: "The Stoic",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "主动压抑所有情感，像石头一样承受一切。",
        defEn: "Actively repressing all emotions, enduring everything like a stone.",
        flaw: "压抑", flawEn: "Repression",
        core: "不痛可以是强大的证明，也可以是感受力已经死了的信号。关键张力：你的不动声色——是钢铁意志，还是内心已经结冰？如果冰融化了，下面是什么？ | 缺失 ($): 情感",
        coreEn: "Not hurting can be proof of strength or a signal that the capacity to feel has died. Key tension: your composure — is it iron will, or a frozen interior? If the ice melts, what lies beneath? | Lacks ($): Emotion",
        reference: "雷德利·斯科特《角斗士》里坚如磐石的罗马旧将马西姆斯；《银翼杀手2049》里冷漠执行清理任务的K。",
        referenceEn: "The rock-solid former Roman general Maximus in Ridley Scott's Gladiator; K apathetically executing 'retirement' missions in Blade Runner 2049."
    },
    {
        id: "subj_dreamer",
        name: "做梦者", nameEn: "The Dreamer",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "活在幻想里，用梦境替代了现实。",
        defEn: "Living in fantasy, having replaced reality with dreams.",
        flaw: "逃避", flawEn: "Escapism",
        core: "做梦可以是创造力的源泉（所有艺术都始于白日梦），也可以是现实的永久逃避。关键张力：如果梦比现实更好——醒来是清醒，还是堕落？ | 缺失 ($): 现实",
        coreEn: "Dreaming can be the wellspring of creativity (all art begins with daydreams) or a permanent escape from reality. Key tension: if the dream is better than reality — is waking up sobriety, or a fall? | Lacks ($): Reality",
        reference: "《盗梦空间》中迷恋造梦空间的乌托邦的科布之妻；《穆赫兰道》里用梦境替代残酷好莱坞现实的戴安。",
        referenceEn: "Cobb's wife addicted to the dream utopia in Inception; Diane replacing harsh Hollywood reality with dreams in Mulholland Drive."
    },
    {
        id: "subj_observer",
        name: "观察者", nameEn: "The Observer",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "记录世界，但不介入——永远站在生活的岸边看着河流过。",
        defEn: "Recording the world but never intervening — forever standing on the bank watching the river flow.",
        flaw: "抽离", flawEn: "Detachment",
        core: "旁观可以是一种保护（不入戏就不会受伤），也可以是一种最深的遗憾（看了一辈子别人的人生，自己的呢？）。关键张力：如果有一天你想从观众席走上舞台——还来得及吗？ | 缺失 ($): 参与",
        coreEn: "Watching from the side can be protection (staying out of the drama means never getting hurt) or the deepest regret (watching others' lives all one's life — what about your own?). Key tension: if one day you want to step from the audience onto the stage — is it too late? | Lacks ($): Participation",
        reference: "维姆·文德斯《柏林苍穹下》只能倾听人类心声却无法介入的隐形天使；《了不起的盖茨比》里的尼克。",
        referenceEn: "The invisible angels who only listen and cannot intervene in Wim Wenders' Wings of Desire; Nick in The Great Gatsby."
    },
    {
        id: "subj_waiter",
        name: "等待者", nameEn: "The Waiter",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "耗尽一生等待一个也许不会来的东西——救赎、回信、那个人、或者一个信号。",
        defEn: "Exhausting one's whole life waiting for something that may never come — salvation, a reply, that person, or a sign.",
        flaw: "停滞", flawEn: "Stasis",
        core: "等待可以是一种信仰的坚守（他会来的），也可以是行动力的自我阉割（只要我还在等，我就不用面对可能永远不会来的真相）。关键张力：如果你等的东西今天就来了——你真的准备好了吗？ | 缺失 ($): 行动",
        coreEn: "Waiting can be a faithful devotion (they will come) or a self-castration of agency (as long as I'm still waiting, I don't have to face the truth that it may never come). Key tension: if what you're waiting for arrived today — are you truly ready? | Lacks ($): Action",
        reference: "贝克特《等待戈多》中在萧瑟乡间永远驻足的弗拉季米尔与爱斯特拉冈；《忠犬八公》里死守约定的八公。",
        referenceEn: "Vladimir and Estragon waiting forever in the bleak countryside in Beckett's Waiting for Godot; Hachiko holding fast to the final promise in Hachi: A Dog's Tale."
    },
    {
        id: "subj_prophet",
        name: "先知", nameEn: "The Prophet",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "看见了别人看不见的真相或未来，但无人相信。",
        defEn: "Seeing a truth or future invisible to others, but believed by no one.",
        flaw: "被误解", flawEn: "Misunderstood",
        core: "预见可以是使命（我被选中来传递警告），也可以是最孤独的诅咒（看得见终点却无法改变方向）。关键张力：如果没有人听——你是继续呐喊，还是安静地看着预言成真？ | 缺失 ($): 听众",
        coreEn: "Prophecy can be a mission (I was chosen to deliver a warning) or the loneliest curse (seeing the end yet unable to change course). Key tension: if no one listens — do you keep screaming, or quietly watch the prophecy come true? | Lacks ($): Audience",
        reference: "希腊神话中洞悉危局却无人相信的卡珊德拉；《沙丘》里饮下生命之水看穿时间的保罗。",
        referenceEn: "Cassandra in Greek mythology foreseeing perilous downfalls with no one believing her; Paul Atreides drinking the Water of Life and seeing through time in Dune."
    },
    {
        id: "subj_martyr",
        name: "殉道者", nameEn: "The Martyr",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "渴望通过自我牺牲来证明存在的价值——只有我的死亡才能让活着变得有意义。",
        defEn: "Craving to prove the value of existence through self-sacrifice — only through my death does living become meaningful.",
        flaw: "牺牲情结", flawEn: "Sacrifice Complex",
        core: "殉道可以是最崇高的信仰表达（我的死将唤醒他们），也可以是最隐蔽的自毁（我活着找不到理由，但死可以）。关键张力：如果你的牺牲没有人看见——你还愿意吗？ | 缺失 ($): 存在的价值",
        coreEn: "Martyrdom can be the most sublime expression of faith (my death will awaken them) or the most covert self-destruction (I can't find a reason to live, but I can find a reason to die). Key tension: if no one sees your sacrifice — would you still do it? | Lacks ($): Worth",
        reference: "《勇敢的心》中死前受尽折磨依然高呼自由的华莱士；《受难记》里的耶稣。",
        referenceEn: "William Wallace enduring torture before death yet shouting 'Freedom' in Braveheart; Jesus in The Passion of the Christ."
    },
    {
        id: "subj_solipsist",
        name: "唯我论者", nameEn: "The Solipsist",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "怀疑只有自己是真实的，世界和他人都可能是幻象。",
        defEn: "Suspecting that only the self is real, while the world and others may be illusions.",
        flaw: "孤独", flawEn: "Loneliness",
        core: "如果一切都是幻象，那就没有什么能真正伤到我——但也没有什么能真正抵达我。关键张力：你愿意承认世界是真的吗？承认了就要承担痛苦。 | 缺失 ($): 真实世界",
        coreEn: "If everything is an illusion, nothing can truly hurt me — but nothing can truly reach me either. Key tension: are you willing to admit the world is real? Admitting it means accepting pain. | Lacks ($): Real World",
        reference: "《新世纪福音战士》中试图将全人类退回橘子汁的碇真嗣；《矩阵》中那些拒绝认知外界的沉睡者。",
        referenceEn: "Shinji Ikari attempting to revert all humanity into LCL in Neon Genesis Evangelion; the sleepers in The Matrix who refuse to acknowledge the outside world."
    },
    {
        id: "subj_insomniac",
        name: "失眠者", nameEn: "The Insomniac",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "无法入睡——在永恒清醒中，现实与幻觉的边界溶解了。",
        defEn: "Unable to sleep — in eternal wakefulness, the border between reality and hallucination dissolves.",
        flaw: "清醒过载", flawEn: "Waking Overload",
        core: "失眠可以制造天才（夜里最清醒的时刻也是思维最锋利的时刻），也可以制造废人。关键张力：你不睡觉，是因为不敢闭眼——还是因为清醒本身成了一种上瘾？ | 缺失 ($): 休整",
        coreEn: "Insomnia can create genius (the clearest hours of night are also the sharpest for thought) or create ruin. Key tension: do you stay awake because you're afraid to close your eyes — or because wakefulness itself has become an addiction? | Lacks ($): Rest",
        reference: "《搏击俱乐部》早期彻底麻木、终夜无眠的杰克；《机械师》里一年多没睡濒临解体的男主。",
        referenceEn: "The totally numb, perpetually sleepless Jack in early Fight Club; the protagonist on the verge of breakdown after a year without sleep in The Machinist."
    },
    {
        id: "subj_ghost_self",
        name: "空壳感", nameEn: "The Hollow Shell",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "虽然活着，但内心感觉自己已经死了——只是躯壳在惯性地运转。",
        defEn: "Alive, yet internally feeling already dead — just a shell running on inertia.",
        flaw: "虚死", flawEn: "Pseudo-Death",
        core: "感觉自己已经死了可以是最深的绝望，也可以是一种奇异的平静（最坏的事已经发生了，还有什么好怕的？）。关键张力：如果有什么东西能让你重新'感觉到活着'——你敢接受那种痛觉的回归吗？ | 缺失 ($): 活着的感觉",
        coreEn: "Feeling already dead can be the deepest despair or a strange calm (the worst has already happened, what's left to fear?). Key tension: if something could make you 'feel alive' again — do you dare accept the return of pain? | Lacks ($): Aliveness",
        reference: "《活着》后期亲人死绝后仅剩肉体本能的福贵；《搏击俱乐部》早期对现实完全失去痛觉的杰克。",
        referenceEn: "Fugui in To Live, left with nothing but bodily instinct after losing all family; Jack in early Fight Club, who has lost all physical sensation in reality."
    },
    {
        id: "subj_midlife",
        name: "中年危机者", nameEn: "The Midlife Crisis",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "人生走到一半，突然发现不知道下半场该怎么过。",
        defEn: "Halfway through life, suddenly realizing there's no script for the second half.",
        flaw: "方向丧失", flawEn: "Lost Direction",
        core: "中年危机可以是崩溃的开始（我浪费了前半生），也可以是觉醒的契机（终于可以问自己真正想要什么了）。关键张力：你是要回去修补旧生活，还是彻底重来？ | 缺失 ($): 方向感",
        coreEn: "A midlife crisis can be the start of a breakdown (I wasted the first half) or an awakening (finally able to ask what I truly want). Key tension: do you go back and mend the old life, or start over entirely? | Lacks ($): Direction",
        reference: "《美国丽人》中对郊区生活彻底厌倦的莱斯特；《革命之路》中困在中产梦里窒息的惠勒夫妇。",
        referenceEn: "Lester, completely fed up with suburban life in American Beauty; the Wheelers suffocating in the middle-class dream in Revolutionary Road."
    },
    {
        id: "subj_regret",
        name: "遗憾者", nameEn: "The Regretful",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "心中有一条从未走过的路、一个从未实现的梦、或一句从未说出的话。",
        defEn: "Carrying an untaken path, an unrealized dream, or an unspoken word in the heart.",
        flaw: "如果当初", flawEn: "What-If",
        core: "遗憾可以是最温柔的痛（至少我曾经渴望过），也可以是最残忍的刑罚（每天醒来都被那个分岔路口的影子追赶）。关键张力：如果给你一次重来的机会——你真的会做不同的选择吗？ | 缺失 ($): 另一种可能",
        coreEn: "Regret can be the gentlest pain (at least I once longed for something) or the cruelest punishment (waking up every day chased by the shadow of that fork in the road). Key tension: if given a chance to do it over — would you truly choose differently? | Lacks ($): The Other Possibility",
        reference: "《大鱼》中用幻想替代遗憾的父亲；《本杰明·巴顿奇事》中在时间逆流中与所爱之人不断错过的本杰明。",
        referenceEn: "The father replacing regret with fantasy in Big Fish; Benjamin endlessly missing his beloved in the reverse flow of time in The Curious Case of Benjamin Button."
    },
    {
        id: "subj_burnout",
        name: "倦怠者", nameEn: "The Burned Out",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "曾经充满热情，但燃料已经用完——不是不想做，是真的做不动了。",
        defEn: "Once full of passion, but the fuel has run out — not unwilling, but genuinely unable to go on.",
        flaw: "枯竭", flawEn: "Depletion",
        core: "倦怠可以是身体发出的最后警报（你需要停下来），也可以是灵魂的永久退场（我再也回不到从前了）。关键张力：休息之后——热情会回来吗？还是你发现自己根本就不喜欢那件事？ | 缺失 ($): 热情",
        coreEn: "Burnout can be the body's final alarm (you need to stop) or the soul's permanent exit (I can never go back to what I was). Key tension: after resting — will the passion return? Or will you discover you never truly loved that thing at all? | Lacks ($): Passion",
        reference: "《爆裂鼓手》中被极端训练逼到崩溃边缘的安德鲁；《灵魂急转弯》中对音乐失去感觉的乔。",
        referenceEn: "Andrew pushed to the edge of breakdown by extreme training in Whiplash; Joe losing his feeling for music in Soul."
    },
    {
        id: "subj_absurdist",
        name: "荒诞者", nameEn: "The Absurdist",
        group: "E. 空洞的主体", groupEn: "The Hollow",
        def: "认清了世界没有意义，但依然选择活下去——带着一种清醒的微笑。",
        defEn: "Having recognized the meaninglessness of the world, yet choosing to live on — with a lucid smile.",
        flaw: "抗拒绝望的疲劳", flawEn: "Defiant Fatigue",
        core: "荒诞者和虚无主义者看到了同样的深渊，但做出了相反的选择：既然没有意义——我就自己造一个。关键张力：这份'自造的意义'，到底是真正的勇气，还是又一层更精致的自欺？ | 缺失 ($): 被赋予的意义",
        coreEn: "The absurdist and the nihilist see the same abyss, but make opposite choices: since there is no meaning — I'll create my own. Key tension: is this 'self-made meaning' genuine courage, or just another layer of more elegant self-deception? | Lacks ($): Given Meaning",
        reference: "加缪《西西弗斯的神话》中反复推石上山的西西弗斯；《土拨鼠之日》中在无限循环中逐渐找到活法的菲尔。",
        referenceEn: "Sisyphus rolling his boulder up the hill again and again in Camus's The Myth of Sisyphus; Phil gradually finding a way to live within the infinite loop in Groundhog Day."
    }
];


