import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 缠绕的驱力 (The Orbit) — 20 Items
    // 能量不直接撞击障碍，而是围绕它旋转、纠缠、吸附。
    // 缠绕不等于病态。守候是缠绕，奉献是缠绕，策略性的迂回也是缠绕。
    // 光谱：情感性缠绕(1-7) → 策略性缠绕(8-13) → 病理性缠绕(14-20)
    // ============================================================

    // ---- 情感性缠绕：用陪伴、忠诚和承诺环绕对方 ----

    {
        id: "drv_vigil",
        name: "守候", nameEn: "The Vigil",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "不离开，不催促，只是在那里等。用在场本身作为承诺。",
        defEn: "Not leaving, not urging, just being there. Presence itself as promise.",
        core: "A面：守候是最安静的爱——不要求对方任何事，只让他知道'无论何时回头我都在'。不带条件的在场比语言更有重量。/ B面：但守候也可能是隐性胁迫——你的'在场'变成了对方无法拒绝的道德压力。你以为在给自由，其实是用忠诚绑架。关键张力：你在等一个人，还是在等'被等本身'给你的存在感？ | 驱力脉动(Trieb): 驻守——不是因为有希望，而是因为离开比留下更不可忍受。",
        coreEn: "A-side: The vigil is the quietest love — you demand nothing, just let them know 'whenever you turn back, I'm here.' Unconditional presence weighs more than words. / B-side: But vigil can be covert coercion — your 'presence' becomes moral pressure they can't refuse. You think you're giving freedom; you're binding with loyalty. Key tension: Are you waiting for a person, or for the sense of existence that 'being waited for' gives you? | Drive Circuit (Trieb): Standing post — not from hope, but because leaving is more unbearable than staying.",
        reference: "《忠犬八公》在车站等待已故主人十年的秋田犬；《海边的曼彻斯特》无法离开悲剧现场的男人在小镇上无声守候。",
        referenceEn: "Hachi waiting ten years at the station for a dead master; a man silently standing vigil in the town of his tragedy in Manchester by the Sea."
    },
    {
        id: "drv_devotion",
        name: "奉献", nameEn: "Devotion",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "把自己的一切给予对方，不求回报。",
        defEn: "Giving everything of yourself to the other, expecting nothing in return.",
        core: "A面：奉献是爱最纯粹的形态——给出的不是多余的东西，而是你自己。把最后一口饭让给孩子的父母，他们的给予不是选择而是本能。/ B面：但无条件的给予也是权力——'我给了你一切'这句话本身就是无法偿还的债。越不求回报对方越无法自由。关键张力：你是在爱他，还是在用'无私'来证明自己的道德优越？ | 驱力脉动(Trieb): 倾注——必须把自己倒空，才能感到自己存在。",
        coreEn: "A-side: Devotion is love's purest form — you give not what's surplus, but yourself. Parents giving their last bite to a child don't choose; it's instinct. / B-side: But unconditional giving is also power — 'I gave you everything' is an unpayable debt. The more you expect nothing, the less free they become. Key tension: Are you loving them, or proving your moral superiority through 'selflessness'? | Drive Circuit (Trieb): Pouring out — you must empty yourself to feel you exist.",
        reference: "《美丽人生》在集中营里用全部生命为儿子编织谎言的父亲；《入殓师》默默为逝者恢复尊严不求任何人理解的师傅。",
        referenceEn: "A father weaving lies with his entire life to shield his son in the camp in Life Is Beautiful; a mortician silently restoring dignity to the dead in Departures."
    },
    {
        id: "drv_following",
        name: "追随", nameEn: "The Following",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "跟在某个人或理想后面走，不管他去哪。",
        defEn: "Following a person or an ideal wherever it leads.",
        core: "A面：追随是清醒的赌注——我不完全理解你要去哪，但相信跟着你比独自留下有意义。伟大事业是无数追随者的信念汇聚成的。/ B面：但追随和盲从的边界极脆弱。你跟随是因为判断他值得，还是因为害怕自己做选择？关键张力：如果你追随的人走向悬崖——你会跟着跳，还是那才是你独立思考的开始？ | 驱力脉动(Trieb): 跟从——把方向感托付给另一个人换取确定性。",
        coreEn: "A-side: Following is a lucid wager — 'I don't fully understand where you're going, but I believe following you is more meaningful than staying behind alone.' Great causes are built by the faith of countless followers. / B-side: But the line between following and blind obedience is fragile. Did you follow because you independently judged them worthy, or because you fear choosing alone? Key tension: If the one you follow walks toward a cliff — will you jump too, or is that where your independent thinking begins? | Drive Circuit (Trieb): Following — delegating your sense of direction to another in exchange for certainty.",
        reference: "《指环王》山姆跟随弗罗多走到末日火山的忠诚；《教父》凯在不理解中跟随迈克尔走入黑暗的妻子之路。",
        referenceEn: "Sam following Frodo to Mount Doom in LOTR; Kay following Michael into darkness without understanding in The Godfather."
    },
    {
        id: "drv_sheltering",
        name: "庇护", nameEn: "Sheltering",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "用自己的身体、权力或沉默为他人挡住风暴。",
        defEn: "Using your body, power, or silence to shield others from the storm.",
        core: "A面：庇护是最古老的爱——变成一面墙，让风暴打在你身上。母亲弓起身体挡住屋梁不是英雄主义，是生物层面的不可违抗。/ B面：但庇护者往往在保护中窒息了被保护者——你挡住了风暴也挡住了阳光，你的保护让他永远长不大。关键张力：你保护是为了他安全，还是因为'被需要'是你唯一确认自己价值的方式？ | 驱力脉动(Trieb): 遮蔽——把自己变成屋檐，哪怕自己在雨里。",
        coreEn: "A-side: Sheltering is love's oldest form — becoming a wall so the storm hits you instead of them. A mother arching to block a collapsing beam isn't heroism; it's biological imperative. / B-side: But the sheltering one often suffocates the sheltered — blocking the storm also blocks the sun. Your protection keeps them from growing. Key tension: Do you protect for their safety, or because 'being needed' is the only way you confirm your worth? | Drive Circuit (Trieb): Covering — becoming the eaves, even while standing in the rain.",
        reference: "《素媛》父亲穿上玩偶服默默守在受创女儿校门外的沉默庇护；《罗马》女佣用身体挡住海浪护住两个不属于自己的孩子。",
        referenceEn: "A father silently guarding his traumatized daughter in a mascot suit in Hope; the maid shielding two children from waves with her body in Roma."
    },
    {
        id: "drv_oath",
        name: "誓约", nameEn: "The Oath",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "许下不可撤回的承诺，用未来绑住现在。",
        defEn: "Making an irrevocable promise, binding the present with the future.",
        core: "A面：誓约是对抗时间的最古老武器——我不知道明天的我是谁，但我用今天的我向你担保。婚誓、效忠，都是试图用语言在时间之流中钉下不动的锚。/ B面：但誓约本质是预支无法保证的未来。许下诺言和未来兑现的不是同一个人。关键张力：如果你变了，守约是诚实还是欺骗？背约是背叛还是诚实？ | 驱力脉动(Trieb): 锚定——用语言在时间之流中钉下不动点。",
        coreEn: "A-side: The oath is humanity's oldest weapon against time — 'I don't know who I'll be tomorrow, but today's me guarantees you.' Vows, oaths of fealty, blood pacts all try to pin an anchor in time's river with words. / B-side: But an oath essentially borrows against a future you can't guarantee. The 'I' who promises and the 'I' who fulfills aren't the same person. Key tension: If you've changed, is keeping the oath honesty or deception? Is breaking it betrayal or truth? | Drive Circuit (Trieb): Anchoring — pinning a fixed point in time's flow with words.",
        reference: "《泰坦尼克号》'你跳我也跳'的即兴誓约；《霸王别姬》'说好了一辈子就是一辈子'的至死不渝。",
        referenceEn: "'You jump, I jump' as spontaneous oath in Titanic; 'A lifetime means a lifetime' as undying commitment in Farewell My Concubine."
    },
    {
        id: "drv_entangled_fate",
        name: "命运纠缠", nameEn: "Entangled Fate",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "两个人的命运缠在一起，谁也走不开。不是选择，是结构。",
        defEn: "Two fates wound around each other, neither able to leave. Not a choice, but a structure.",
        core: "A面：有些关系不是选择而是拓扑的必然——你们的命运在交叉点打了死结，牵一发而动全身。这种纠缠比爱更深，因为它不需要喜欢彼此。/ B面：但'命运'往往是'不敢离开'的美学包装。说是天注定，也许是你没勇气承认它可以结束。关键张力：如果你们真的是命中注定——还需要努力维持吗？ | 驱力脉动(Trieb): 纠结——两条绳子越挣扎越紧。",
        coreEn: "A-side: Some relationships result not from choice but topological necessity — your fates knotted at some crossing, each movement pulling the other. This entanglement can be deeper than love, because it doesn't require you to like each other. / B-side: But 'fate' is often aesthetic packaging for 'fear of leaving.' You call it destiny; perhaps you just lack the courage to end it. Key tension: If you're truly destined — do you still need to try? | Drive Circuit (Trieb): Entanglement — two ropes that tighten the more you struggle.",
        reference: "《东邪西毒》欧阳锋与大嫂一生互相折磨却无法分离的死结；《断背山》两个男人在时代夹缝中维持二十年无法割断的秘密。",
        referenceEn: "Ouyang Feng and his sister-in-law locked in lifelong torment yet inseparable in Ashes of Time; two men sustaining an unseverable secret for twenty years in Brokeback Mountain."
    },
    {
        id: "drv_accompanying_death",
        name: "陪葬", nameEn: "Accompanying to the End",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "因无法独活而选择一同消亡。'如果你不在了，世界对我没有意义。'",
        defEn: "'If you're gone, the world has no meaning for me.' Choosing to perish together.",
        core: "A面：陪葬是爱的绝对化——用消亡证明这段关系是'生活本身'。在所有缠绕中最彻底：拒绝让结局只属于一个人。/ B面：但往往不是爱而是恐惧——不是不能没有他，是不能独自面对没有他的世界。你的'殉情'是对孤独的逃避，而非献祭。关键张力：如果他能开口，是希望你跟来，还是希望你活下去？ | 驱力脉动(Trieb): 随葬——我的存在以你的存在为前提。",
        coreEn: "A-side: Accompanying to death is love's absolutization — your perishing proves this bond isn't 'part of life' but life itself. The most thorough orbit: refusing to let the ending belong to only one. / B-side: But it's often not love but fear — you can't face the world without them alone. Your 'dying for love' escapes loneliness, not honors love. Key tension: If they could speak, would they want you to follow, or to live? | Drive Circuit (Trieb): Burial — my existence is predicated on yours.",
        reference: "《罗密欧与朱丽叶》双双殉情的结局；《霸王别姬》程蝶衣在虞姬最后一幕中真的拔剑自刎。",
        referenceEn: "The double suicide in Romeo and Juliet; Cheng Dieyi truly drawing the sword in Yu Ji's final scene in Farewell My Concubine."
    },

    // ---- 策略性缠绕：用耐心、渗透和迂回间接接近目标 ----

    {
        id: "drv_infiltration",
        name: "渗透", nameEn: "Infiltration",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "慢慢进入对方的世界，不被觉察。当你被发现时已经是内部人了。",
        defEn: "Slowly entering their world unnoticed. By the time you're discovered, you're already inside.",
        core: "A面：渗透是最聪明的接近——不挑战防线，而是像水从缝隙流进。等他回神你已是世界的一部分，拔除比接受代价更大。/ B面：但渗透者永远活在被发现的恐惧中——身份建立在谎言上。越融入真实的你就越消失。关键张力：如果你在渗透中真的爱上了这个世界——还能完成原来的任务吗？ | 驱力脉动(Trieb): 浸入——像水一样无声地占据一切缝隙。",
        coreEn: "A-side: Infiltration is the smartest approach — you don't challenge defenses but flow through cracks like water. By the time they realize, removing you costs more than accepting you. / B-side: But the infiltrator lives in perpetual fear of exposure — identity built on lies. The deeper you merge, the more the real you vanishes. Key tension: If during infiltration you genuinely fall for this world — can you still complete your original mission? | Drive Circuit (Trieb): Seeping — occupying every crack silently, like water.",
        reference: "《无间道》深入黑帮内部直到分不清自己是谁的卧底；《寄生虫》一家四口逐步渗透进富人家庭的缝隙。",
        referenceEn: "An undercover so deep he forgets who he is in Infernal Affairs; a family of four gradually infiltrating a wealthy household in Parasite."
    },
    {
        id: "drv_pacification",
        name: "怀柔", nameEn: "Pacification",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "用善意、温和和让步瓦解对方的防线。不是打败他，而是让他自己放下武器。",
        defEn: "Dissolving defenses with kindness, gentleness, and concession. Not defeating them, but making them disarm themselves.",
        core: "A面：怀柔是最经济的胜利——不需要消灭对手，只需让他觉得合作比对抗更舒服。最持久的帝国不是靠征服，而是让被征服者'自愿'留下。/ B面：但怀柔本质是伪装成温柔的控制——你给了选择的自由，但选项都是你设计的。他以为在做决定，其实在走你的剧本。关键张力：真诚和操控能在同一个行为中共存吗？如果善意是真诚的，它算策略吗？ | 驱力脉动(Trieb): 软化——用温度代替力量。",
        coreEn: "A-side: Pacification is the most economical victory — you needn't destroy the opponent, just make cooperation more comfortable than resistance. History's most enduring empires survived not by conquest but by making the conquered 'choose' to stay. / B-side: But pacification is essentially control disguised as gentleness — you gave them freedom to choose, but all options were designed by you. Key tension: If your kindness is sincere, is it still strategy? Can sincerity and manipulation coexist in one act? | Drive Circuit (Trieb): Softening — replacing force with warmth.",
        reference: "《教父》用'不可拒绝的条件'让对手心甘情愿合作的柯里昂；《卧虎藏龙》李慕白对玉娇龙的耐心感化与引导。",
        referenceEn: "Corleone making opponents 'offers they can't refuse' in The Godfather; Li Mu Bai's patient persuasion of Jade Fox in Crouching Tiger."
    },
    {
        id: "drv_detour",
        name: "迂回", nameEn: "The Detour",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "绕过正面障碍，从侧面或背后接近目标。",
        defEn: "Bypassing the frontal obstacle, approaching from the side or behind.",
        core: "A面：迂回是智慧对力量的胜利——正面撞不开的墙，绕到后面也许有门。不是懦弱，是清醒判断：最短路径不一定最有效。/ B面：但迂回的人常常迷路——绕了太多弯后忘了去哪。路径本身变成了目的。关键张力：你是在迂回前进，还是在避免真正的对抗？ | 驱力脉动(Trieb): 绕行——当直线走不通，曲线也是路。",
        coreEn: "A-side: The detour is wisdom's victory over force — the wall you can't breach head-on might have an unlocked door around back. Not cowardice but clear-eyed assessment: the shortest path isn't always the most effective. / B-side: But the detourist often gets lost — after too many turns, you forget where you were heading. The path itself becomes the purpose. Key tension: Are you advancing indirectly, or avoiding true confrontation? | Drive Circuit (Trieb): Going around — when the straight line fails, a curve is still a path.",
        reference: "《琅琊榜》梅长苏用十年布局从侧面一步步接近真相的复仇迂回；《肖申克的救赎》安迪用十九年挖出一条不被发现的隧道。",
        referenceEn: "Mei Changsu's decade-long indirect approach to vengeance in Nirvana in Fire; Andy digging an undetected tunnel over nineteen years in Shawshank Redemption."
    },
    {
        id: "drv_lying_in_wait",
        name: "潜伏", nameEn: "Lying in Wait",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "隐藏自己的意图和能力，等待最佳时机一击致命。",
        defEn: "Hiding intent and capability, waiting for the optimal moment to strike decisively.",
        core: "A面：潜伏是耐心的极致——压下所有冲动，把自己变成石头。等的不是机会而是唯一的时刻。这比任何行动都更需力量。/ B面：但潜伏者常因等太久失去行动力——分不清是在等最佳时机还是逃避风险。关键张力：如果最佳时机永远不来——你是潜伏者还是逃避者？ | 驱力脉动(Trieb): 蛰伏——变成石头，直到世界忘记你。",
        coreEn: "A-side: Lying in wait is patience perfected — suppressing all impulse, pride, and expression, becoming a stone that blends into the background. You wait not for 'opportunity' but for THE moment. This restraint requires more strength than any action. / B-side: But the one in wait often waits so long they lose the capacity to act — you can't tell if you're waiting for the optimal moment or using 'waiting' to dodge the risk of acting. Key tension: If the perfect moment never comes — are you a hunter, or a fugitive? | Drive Circuit (Trieb): Hibernation — becoming stone until the world forgets you exist.",
        reference: "《基督山伯爵》在暗处隐忍十四年再一一摧毁仇敌的邓蒂斯；《潜伏》余则成在敌营中多年不露声色。",
        referenceEn: "Dantès enduring fourteen years in shadow before striking each enemy in The Count of Monte Cristo; Yu Zecheng hiding in plain sight for years in Lurk."
    },
    {
        id: "drv_web_weaving",
        name: "织网", nameEn: "Web-Weaving",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "编织关系、信息和利益的网络，让所有人不知不觉成为你棋盘上的棋子。",
        defEn: "Weaving networks of relationships, information, and interests, making everyone an unwitting piece on your board.",
        core: "A面：织网者无需在场即可控局——力量不来自己身，而来自网上的节点。最高明的棋手不下棋，让棋子自己走。/ B面：但网的维护成本会反噬你——每条线需喂养，每个节点都可能背叛。越控制一切，越被一切控制。关键张力：你是网的主人还是网的囚徒？蜘蛛也被困于己网。 | 驱力脉动(Trieb): 编织——让每根线都通向你。",
        coreEn: "A-side: The web-weaver controls situations without being present — power comes not from personal strength but from every node in the web. The greatest player doesn't play; the pieces move themselves. / B-side: But maintaining the web consumes you — every thread needs feeding, every node may betray. The more you control, the more you're controlled. Key tension: Are you master of the web, or its prisoner? The spider is also trapped on its own web. | Drive Circuit (Trieb): Weaving — making every thread lead to you.",
        reference: "《纸牌屋》弗兰克用人脉和信息编织出通往总统宝座的暗网；《琅琊榜》梅长苏以病弱之躯操纵朝堂的隐线。",
        referenceEn: "Frank weaving a dark web of contacts and intel toward the presidency in House of Cards; Mei Changsu manipulating court politics from the shadows in Nirvana in Fire."
    },
    {
        id: "drv_cultivation",
        name: "培植", nameEn: "Cultivation",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "长期投入时间和资源培养一个人，让他在未来成为你需要的样子。",
        defEn: "Investing time and resources over years to shape someone into what you'll need them to become.",
        core: "A面：培植是最有远见的缠绕——不是回应即时需求，而是为十年后的棋局布子。你在他身上看到了他自己都未见的可能。/ B面：但培植也意味着按你的图纸塑造他——他以为在自由生长，实则根系早已被定局。关键张力：你培养他是为他成为最好自己，还是对你最有用的人？ | 驱力脉动(Trieb): 栽种——在他人身上播下未来的种子。",
        coreEn: "A-side: Cultivation is the most far-sighted orbit — you're not responding to present needs but placing pieces for the board ten years hence. Good teachers, parents, leaders are cultivators: seeing potential even the person themselves can't see. / B-side: But cultivation means shaping them to your blueprint from the start — they think they're growing freely, but their roots were guided in a specific direction long ago. Key tension: Do you cultivate them to become their best self, or the most useful version for you? | Drive Circuit (Trieb): Planting — sowing seeds of the future in another person.",
        reference: "《星球大战》帕尔帕廷用二十年培养阿纳金为自己的武器；《心灵捕手》数学教授看到了一个叛逆天才还没看到的自己。",
        referenceEn: "Palpatine spending twenty years cultivating Anakin as his weapon in Star Wars; a professor seeing what a rebellious genius couldn't see in himself in Good Will Hunting."
    },

    // ---- 病理性缠绕：当环绕变成束缚、侵蚀和吞噬 ----

    {
        id: "drv_stalking",
        name: "跟踪", nameEn: "Stalking",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "以'关注'为名的监视与追踪。对方的一切动向都在你的注视之下。",
        defEn: "Surveillance and pursuit in the name of 'caring.' Every move they make is under your gaze.",
        core: "A面：跟踪常源于真实关切——你需要知道他好不好。这种冲动来自深层不确定感：你不相信关系能在视线外存活。/ B面：但跟踪本质是单方面取消隐私的控制——将你的焦虑变成了他的牢笼。你越关心他越窒息。关键张力：你是在关心他，还是在管理自己的焦虑？ | 驱力脉动(Trieb): 凝视——如果我看不到你，你就不存在。",
        coreEn: "A-side: Stalking often originates in genuine concern — you need to know if they're safe, happy, if they still remember you. This 'must know' impulse stems from deep uncertainty: you don't trust the relationship to survive outside your sight. / B-side: But stalking essentially cancels the other's privacy unilaterally — your anxiety becomes their cage. The more you 'care,' the more they suffocate. Key tension: Are you caring for them, or managing your own anxiety? | Drive Circuit (Trieb): The gaze — if I can't see you, you don't exist.",
        reference: "《致命诱惑》'我不会被忽视'的经典缠绕式追踪；《你》以'爱'为名监控女友一切社交动态的书店店员。",
        referenceEn: "'I will not be ignored' as classic obsessive pursuit in Fatal Attraction; a bookshop clerk surveilling every social move 'for love' in You."
    },
    {
        id: "drv_parasitism",
        name: "寄生", nameEn: "Parasitism",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "附着在他人身上，悄悄榨取他的资源、能量和生命力。",
        defEn: "Attaching to another, quietly draining their resources, energy, and life force.",
        core: "A面：寄生不一定是恶意——有时你附着只因不知如何独立。你需要他的结构撑住你自己。这是结构性依赖而非选择。/ B面：但寄生终局是宿主衰竭或觉醒——养分有上限。当宿主意识到被消耗，你要么被驱逐，要么同枯死。关键张力：你有能力进化为共生吗？还是离开宿主就不存在了？ | 驱力脉动(Trieb): 吸附——必须附着，否则会蒸发。",
        coreEn: "A-side: Parasitism isn't necessarily malicious — sometimes you attach because you genuinely don't know how to exist independently. You need their structure to hold your own shape. A structural dependency, not a choice. / B-side: But parasitism's endgame is the host's exhaustion or awakening — there's a limit to what you can drain. When the host realizes your presence is consumption, you'll be expelled or wither together. Key tension: Can you evolve from parasite to symbiont — or without a host, do you cease to exist? | Drive Circuit (Trieb): Adhesion — I must attach to something, or I'll evaporate.",
        reference: "《寄生虫》从地下室向上攀附最终引发毁灭连锁的金家；《单身男子》失去伴侣后精神上寄生于过去记忆无法独立存活的教授。",
        referenceEn: "The Kim family climbing from basement to catastrophe in Parasite; a professor parasitically clinging to past memories, unable to survive alone in A Single Man."
    },
    {
        id: "drv_devouring_love",
        name: "吞噬之爱", nameEn: "Devouring Love",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "以爱的名义窒息对方。'我这么爱你，你怎么还嫌不够？'",
        defEn: "'I love you this much, how can you say it's not enough?' Suffocating in the name of love.",
        core: "A面：吞噬之爱源于极深的恐惧——你不完全属于我就会消失。所以我要吞没你，让你成为我，你就永远不会离开。这爱的强度与毁灭性同等真实。/ B面：但被吞噬者无法呼吸。你以为在给予，实则在掠夺他独立存在的权利。关键张力：你爱的是他，还是'由你定义的他'？如果他变了你还爱吗？ | 驱力脉动(Trieb): 吞噬——不能拥有全部，就什么都不要。",
        coreEn: "A-side: Devouring love stems from the deepest fear — if you don't belong entirely to me, you'll vanish. So I must swallow you whole, make you part of me, so you can never leave. The intensity is real; so is the destruction. / B-side: But the devoured cannot breathe. You think you're giving; you're taking — robbing them of the right to exist independently. Key tension: Do you love them, or the version of them you defined? If they become someone else, would you still love? | Drive Circuit (Trieb): Devouring — if I can't have all of you, I want nothing.",
        reference: "《黑天鹅》母亲以全方位控制来'保护'女儿的窒息之爱；《钢琴教师》在学生身上投射全部压抑欲望的绝望女教师。",
        referenceEn: "A mother 'protecting' her daughter through total control in Black Swan; a teacher projecting all repressed desire onto her student in The Piano Teacher."
    },
    {
        id: "drv_over_identification",
        name: "过度认同", nameEn: "Over-Identification",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "完全消除自己，成为另一个人的复制品。边界彻底溶解。",
        defEn: "Completely erasing yourself to become another's replica. Boundaries entirely dissolved.",
        core: "A面：过度认同源于极致的崇拜——他活出了你想要的样子，于是你放弃自己的形状去填充他的轮廓。这是一种存在论层面的投降。/ B面：但复制品永无法替代原件——越像他，越提醒自己不是他。你的存在成了没有面容的镜子。关键张力：消除自己是出于爱，还是出于自我厌恶？ | 驱力脉动(Trieb): 复写——把自己变成另一个人的影子。",
        coreEn: "A-side: Over-identification begins as ultimate admiration — they embody what you want to be, so you abandon your shape to fill their outline. Not imitation but ontological surrender: 'Your life is worth living more than mine.' / B-side: But the copy can never replace the original — the more you resemble them, the more you remind yourself you're not them. Your existence becomes a mirror, and mirrors have no face. Key tension: Did you erase yourself from love, or from self-loathing? | Drive Circuit (Trieb): Overwriting — becoming another person's shadow.",
        reference: "《天才雷普利》从模仿到替代到迷失自我的汤姆；《穆赫兰道》戴安娜将自己彻底投射进理想化'贝蒂'身份的致命融合。",
        referenceEn: "Tom's trajectory from imitation to replacement to losing himself in The Talented Mr. Ripley; Diane's fatal projection into the idealized 'Betty' identity in Mulholland Drive."
    },
    {
        id: "drv_emotional_blackmail",
        name: "情感勒索", nameEn: "Emotional Blackmail",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "用眼泪、威胁、自伤或负罪感来绑住对方。'如果你走了我就去死。'",
        defEn: "'If you leave, I'll die.' Binding through tears, threats, self-harm, or guilt.",
        core: "A面：情感勒索的可悲在于其痛苦往往是真实的。说'你走我就去死'的人常觉自己真的会死。这是一种无法区分被抛弃和被消灭的恐惧。/ B面：但真实痛苦不能成为控制的理由——你用脆弱做武器，把他变作人质。他留下只因被痛苦绑架。关键张力：若知这最终会让他恨你，还会做吗？ | 驱力脉动(Trieb): 绑架——用伤口做锁链。",
        coreEn: "A-side: The tragedy of emotional blackmail is that the blackmailer's pain is often real. Those who say 'I'll die if you leave' sometimes genuinely believe it. Not performance but a structural inability to distinguish 'abandonment' from 'annihilation.' / B-side: But real pain doesn't justify controlling others — you weaponize your fragility, turning them into your hostage. They stay not from love but because your pain holds them captive. Key tension: If you know this will ultimately make them hate you — would you still do it? | Drive Circuit (Trieb): Hostage-taking — using your own wounds as chains.",
        reference: "《革命之路》用一次又一次情感崩溃阻止丈夫离开的妻子；《婚姻故事》离婚过程中双方用孩子和内疚互相钳制。",
        referenceEn: "A wife using emotional collapse after collapse to prevent her husband from leaving in Revolutionary Road; both sides weaponizing children and guilt in Marriage Story."
    },
    {
        id: "drv_symbiotic_binding",
        name: "共生绑定", nameEn: "Symbiotic Binding",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "两个人互相寄生，谁也无法独立存在。不是爱情，是结构性的互锁。",
        defEn: "Two people parasitizing each other, neither able to exist alone. Not love, but structural interlocking.",
        core: "A面：共生绑定是奇特的稳定——两个不完整的人拼在一起刚好运转。各自都是残片，合体则是勉强的完整。/ B面：但这完整的代价是不能成长——你的成长意味着不再需要他。联结建立在彼此残缺之上。关键张力：如果你被治愈了，你们的关系还存在吗？ | 驱力脉动(Trieb): 互锁——两块碎片卡在一起，互为缺口。",
        coreEn: "A-side: Symbiotic binding is a peculiar stability — two incomplete people fitting together to barely function. You provide what they lack, they provide what you lack. Alone, each is a fragment; together, a barely whole person. / B-side: But 'wholeness' costs both growth — your healing means you no longer need them, their healing means they no longer need you. Your bond is built on mutual brokenness. Key tension: If you were healed, would the relationship still exist? | Drive Circuit (Trieb): Interlocking — two fragments jammed together, each the other's missing piece.",
        reference: "《两杆大烟枪》互相依赖的犯罪搭档谁也没法单干；《雌雄大盗》邦妮和克莱德在逃亡中成为彼此唯一的现实。",
        referenceEn: "Codependent criminal partners who can't function alone in Lock, Stock and Two Smoking Barrels; Bonnie and Clyde becoming each other's sole reality on the run."
    },
    {
        id: "drv_ghostly_haunting",
        name: "幽灵缠绕", nameEn: "Ghostly Haunting",
        group: "B. 缠绕的驱力", groupEn: "The Orbit",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "已经结束的关系中不散的残影。人走了，影子还在。",
        defEn: "The lingering shadow in a relationship that has ended. The person left, but the shadow remains.",
        core: "A面：幽灵缠绕是最温柔也最残忍的记忆——你走了但气味还在枕头，习惯刻在身体。不是我在想你，是肌肉在想你。这缠绕无需你在场。/ B面：但这终会让你丧失活在当下的能力——每一段新关系都在与不在场者竞争。你爱的成为回忆本身。关键张力：是在纪念，还是用影子逃避现在？ | 驱力脉动(Trieb): 残留——影子比本人更持久，因它不令人失望。",
        coreEn: "A-side: Ghostly haunting is memory's gentlest and cruelest form — they left, but their scent lingers on the pillow, their habits carved into your body. You're not thinking of them; your muscles are. This orbit needs no presence. / B-side: But the ghost eventually destroys your capacity to live in the present — every new relationship competes with an absent person. You love not who they were but memory itself. Key tension: Are you commemorating a person, or using their shadow to escape the present? | Drive Circuit (Trieb): Residue — shadows outlast people, because shadows never disappoint.",
        reference: "《人鬼情未了》死者以幽灵形态缠绕爱人不肯离去；《海边的曼彻斯特》已故家人的影子充满了每一个房间角落。",
        referenceEn: "A dead lover haunting in ghost form refusing to depart in Ghost; the shadow of lost family filling every corner in Manchester by the Sea."
    }
];
