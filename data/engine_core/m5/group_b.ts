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
        referenceEn: "Hachi waiting ten years at the station for a dead master; a man silently standing vigil in the town of his tragedy in Manchester by the Sea.",
        topology: "渐近线轨道：能量无限接近但永远不到达——距离不是障碍而是驱力的燃料，一旦到达，守候就坍缩",
        directive: {
            bright: "写他等待时身体的变化——坐姿从僵硬慢慢变成松弛，不是放松了而是等待已经长进了骨骼。写他对等待空间的熟悉：哪块砖翘起来、窗户什么时候透进光、街角的声音在几点改变。用感官细节表达：他已经和这个空间融为一体了。不要写他在等什么——写等待本身如何成为一种存在方式。他不是在消磨时间，时间在穿过他。",
            dark: "写等待如何慢慢吃掉他的轮廓——他的面孔越来越像等待本身，表情消失了，只剩一种朝向门口的姿态。用一个物理细节锚定异化：他的手一直保持着某个准备动作（半举着，准备挥手或递东西），这个姿势已经维持太久，手指发麻但没有放下。他已经分不清自己是在等一个人还是在等'等待结束'。不要写忠诚——写一种结构性的无法离开。",
            tension: "场景锚点：他等的人终于出现在视线里。但悖论在这一秒爆发：他发现自己不想站起来。不是不爱了——而是等待已经成为比重逢更确定的东西。等的时候他知道自己是谁（一个等待的人），重逢之后他是谁？写他犹豫了零点几秒——这个犹豫不要被解释，让它作为纯粹的身体事件存在。"
        }
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
        referenceEn: "A father weaving lies with his entire life to shield his son in the camp in Life Is Beautiful; a mortician silently restoring dignity to the dead in Departures.",
        topology: "单向倾倒：能量持续从一端流向另一端——流动本身成为存在的证明，一旦停止倾注，倾注者就失去了轮廓",
        directive: {
            bright: "写他递出最后一样东西时的手——动作很轻，像呼吸一样自然。写他的身体在倒空之后的状态：不是空虚而是一种极度的通透，像玻璃。不要写无私——写一种更原始的本能：给出去的不是多余的而是自己的一部分，像血液流向伤口不需要意志参与。",
            dark: "写'不求回报'如何成为最重的债——他说'你不需要还'，但这句话本身就是对方永远还不完的东西。写对方在他的无私面前越来越窒息：越不求回报，对方越无法自由地离开或拒绝。不要写牺牲的崇高——写一种更冷的发现：他的'无条件给予'是一种让对方永远亏欠的权力结构。",
            tension: "场景锚点：对方终于说出'你不用再给了'。但悖论是：他不知道不给的时候自己是什么。写他的手停在半空中——那个递东西的姿势已经成为他的默认姿态，放下来反而需要力气。他倾注不是因为爱，是因为停下来就会发现自己是空的——给予是他唯一的形状。"
        }
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
        referenceEn: "Sam following Frodo to Mount Doom in LOTR; Kay following Michael into darkness without understanding in The Godfather.",
        topology: "尾迹依附：能量不自主产生方向而是附着在前方矢量的尾流中——一旦前方停下，追随者就失去运动的理由",
        directive: {
            bright: "写他跟在后面走的那种节奏——不需要看路，只需要看前面那个人的背影。写他的脚步自动调整到和前者同频的身体默契。不要写崇拜——写一种更朴素的赌注：'我不完全理解你要去哪，但跟着你比独自留下有意义。'写他在跟随中的安心：方向感是借来的，但借来的确定性也是确定性。",
            dark: "写他跟了太久、已经忘了自己会走路——前方那个人停了一秒，他也停了。写他意识到自己的脚步声已经完全消失在对方的脚步声里：他不是一个独立的行走者，而是对方影子的延伸。不要写盲从——写一种更安静的消溶：他的轮廓在跟随中慢慢被磨掉了，像河床里的石头。",
            tension: "场景锚点：前面那个人走向悬崖——停在边缘。他也停在后面。悖论不是'跟vs.不跟'——而是：如果这一刻他选择不跟，那之前所有的跟随算什么？他用了半辈子来证明自己的跟随是有判断力的，现在这个判断力第一次被真正考验了。写他站在那里的脚：一只想停，一只想跟。"
        }
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
        referenceEn: "A father silently guarding his traumatized daughter in a mascot suit in Hope; the maid shielding two children from waves with her body in Roma.",
        topology: "伞形遮蔽：能量向外展开形成覆盖面——保护者用自身面积挡住外部力量，但展开的面积越大自身越薄",
        directive: {
            bright: "写他弓起身体挡在别人前面的那个弧度——脊椎弯成了屋顶的形状。写风暴打在他背上时他朝向被保护者的那一面是平静的，像什么都没发生。不要写英雄——写一种生物层面的不可违抗：母亲弓身挡住屋梁不是选择，是脊椎比大脑更快地做了决定。",
            dark: "写他挡住了风暴也挡住了阳光——被保护者在他的阴影下永远长不大。用一个时间跳跃：五年后他还在同一个姿势里，背已经直不起来了，但被保护的人已经不需要保护了——只是他不知道。不要写过度保护——写一种更深的绑定：他保护不是为了对方安全，是因为'被需要'是他唯一确认自己价值的方式。屋檐拆不下来，因为拆了他就没有形状了。",
            tension: "场景锚点：被保护的人说'我不需要你挡了'。他听到了但身体没有反应——那个弓起的姿势已经凝固成了骨骼的形状。悖论不是'保护vs.放手'——而是：他变成了屋檐之后就不再是人了。屋檐不会走路，不会有自己的方向，屋檐只有一个功能。写他试图直起腰来时脊椎发出的声音。"
        }
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
        referenceEn: "'You jump, I jump' as spontaneous oath in Titanic; 'A lifetime means a lifetime' as undying commitment in Farewell My Concubine.",
        topology: "时间钉锚：能量凝固为一个固定点——誓言试图在流动的时间中钉下不动的锚，但水流日夜冲刷锚的地基",
        directive: {
            bright: "写他说出誓词时声音的质地——比日常说话低半个音调，因为这些词需要重量。写他说'我发誓'时手的位置：可能放在对方手上、放在胸口、或者攥紧拳头——每一种都是在试图给语言找一个物理性的锚点。不要写庄严——写一种更诚实的赌注：他不知道明天的自己是谁，但用今天的声音向未来担保。",
            dark: "写誓言第五年的重量——当初说出那些话的人和今天履行的人已经不是同一个了。写他在某个瞬间意识到自己在'守约'而不是在'爱'：仪式性地执行承诺的动作，但动作里的温度不见了。不要写背叛——写一种更安静的恐惧：如果守约需要意志力来维持，那誓言保护的到底是关系还是他的自我形象？",
            tension: "场景锚点：他变了。不是变心，是变成了另一个人。悖论不是'守约vs.背约'——而是：守约和背约都是不诚实的。守约对不起现在的自己，背约对不起过去的自己。写他在这两个版本的自己之间的撕裂——誓言不是连接两个时间点的桥，而是一条同时切割过去和现在的线。"
        }
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
        referenceEn: "Ouyang Feng and his sister-in-law locked in lifelong torment yet inseparable in Ashes of Time; two men sustaining an unseverable secret for twenty years in Brokeback Mountain.",
        topology: "莫比乌斯互锁：两条轨迹在某个交叉点打了死结——从任何一端拉扯都只会让结更紧，解开需要切断其中一条",
        directive: {
            bright: "写他们在不同的城市、不同的生活里突然做了同一个动作——同时抬头看天、同时在梦里说了对方的名字。写这种同步性不需要联络就存在的诡异感。不要写浪漫——写一种更冷的结构：他们不是选择了彼此，是命运的几何让他们成为同一个方程的两个变量。动一个，另一个就变。",
            dark: "写'命运'其实是'不敢离开'的美学包装——他说这是注定的，但也许只是他没有勇气承认它可以结束。写他们互相折磨的具体场景：不是因为恨而是因为太近了，近到每一次呼吸都能感到对方的存在，近到窒息。不要写羁绊——写一种更诚实的困境：他不爱对方了但无法想象没有对方的坐标系。",
            tension: "场景锚点：其中一个人试图走了。但走了之后发现生活中到处是对方的形状——不是因为思念而是因为自己的习惯、喜好、甚至走路的姿势都是在对方身边长成的。悖论不是'在一起vs.分开'——而是：他们已经无法区分哪些部分是自己的、哪些是对方长进来的。分开不是失去对方，是失去自己的一部分。"
        }
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
        referenceEn: "The double suicide in Romeo and Juliet; Cheng Dieyi truly drawing the sword in Yu Ji's final scene in Farewell My Concubine.",
        topology: "存在论归零：一个主体的存在以另一个主体的存在为前提——前提消失时，寄生方的存在失去了地基",
        directive: {
            bright: "写他做出决定时的平静——不是绝望，是一种数学般的确定：如果A不存在了，建立在A之上的B也没有意义了。写他最后的动作带着仪式性的温柔——整理衣物、写完最后一行字、看一眼窗外。不要写殉情——写一种更冷的逻辑：他不是在追随对方去死，是在取消一个已经不成立的等式。",
            dark: "写'不能独活'其实是'不愿独自面对'——他害怕的不是没有对方，是没有对方之后那个他不认识的自己。写他在做决定之前的犹豫：不是在犹豫要不要，是在犹豫自己的理由到底是爱还是恐惧。不要写深情——写一种更诚实的自我审讯：如果对方能开口，是希望他跟来，还是希望他活下去？他选择不问这个问题。",
            tension: "场景锚点：他已经准备好了，但在最后一秒身体做了一个他没有命令过的动作——呼吸。身体自己在呼吸。悖论不是'死vs.活'——而是：他的意志说'跟着去'，但身体说'我还想呼吸'。写这两种力量在他体内的撕裂——不要给出结局。"
        }
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
        referenceEn: "An undercover so deep he forgets who he is in Infernal Affairs; a family of four gradually infiltrating a wealthy household in Parasite.",
        topology: "毛细渗透：能量不冲击表面而是从微观缝隙渗入——当渗透被发现时，拔除的成本已经高于容纳",
        directive: {
            bright: "写他进入对方世界时的速度——像水从砖缝里渗进去。写他模仿对方世界的节奏：说话的速度、笑的时机、沉默的长度。三个月后他已经是背景的一部分了，没有人记得他是什么时候出现的。不要写伪装——写一种更精确的技术：他不是在假装成别人，是在让自己的形状慢慢匹配这个空间的负空间。",
            dark: "写渗透者永远活在被发现的恐惧中——每一次有人多看他一眼他的心率就跳一下。写他在融入太深之后照镜子的恐惧：镜子里的人不是他原来的自己，也不完全是他伪装的那个人——是一个介于两者之间的第三个人，一个不属于任何一边的幽灵。不要写卧底的紧张——写一种更深的存在论危机：他已经分不清哪个版本才是原装的。",
            tension: "场景锚点：他在渗透过程中真的产生了归属感——这个世界接纳了他，虽然接纳的是一个假身份。悖论不是'任务vs.感情'——而是：如果他在假身份中活得比真身份更真实，那哪个才是假的？写他在必须暴露身份的那一刻的犹豫——不是在犹豫任务，是在犹豫要回到的那个'真实自己'是不是也是一种伪装。"
        }
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
        referenceEn: "Corleone making opponents 'offers they can't refuse' in The Godfather; Li Mu Bai's patient persuasion of Jade Fox in Crouching Tiger.",
        topology: "温度溶解：能量不以力而以热量传递——缓慢升温直到对方的防御结构自行软化，但软化过程也改变了施热者",
        directive: {
            bright: "写他递过去的那杯茶——温度刚好，不烫不凉。写他的声音如何一点一点把房间里的敌意溶解掉：不是通过说了什么而是通过说话的节奏——慢的、没有威胁的、留出空间的。写对方的肩膀在第三十分钟时不自觉地放下来了。不要写善意——写一种更精密的温度控制：他知道什么时候进、什么时候退、什么时候沉默本身就是最好的说服。",
            dark: "写'温柔的控制'——他给了选择的自由，但所有选项都是他设计的。写对方在他的怀柔中慢慢放下武器时的表情：以为是自己决定的，实则被温度引导到了预设的终点。不要写操控——写一种更让人不安的真相：他的善意可能是真诚的，但真诚和操控能在同一个动作中共存。他自己也不确定自己的温柔有多少是策略、多少是本能。",
            tension: "场景锚点：对方彻底放下了防御。但悖论在这一刻出现：他发现自己也被改变了。他花了太长时间扮演温柔的人，温柔已经长进了肌肉里。写他在任务完成后试图恢复'原来的自己'时的失败——那个冷硬的版本已经回不来了。怀柔者被自己的工具反向塑造了。"
        }
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
        referenceEn: "Mei Changsu's decade-long indirect approach to vengeance in Nirvana in Fire; Andy digging an undetected tunnel over nineteen years in Shawshank Redemption.",
        topology: "曲率接近：能量不直接连接起点和终点而是沿曲面运动——曲线更长但绕过了直线上的奇点",
        directive: {
            bright: "写他绕路时的特殊耐心——不是急着到达而是享受弯路上每一步的视野。写他在侧面发现的东西比正面更多：因为正面被防守着，侧面是裸露的。不要写策略——写一种更有机的运动：水从来不抱怨石头挡路，它只是流向石头没有覆盖的方向。",
            dark: "写绕了太多弯之后忘记了目的地——路径本身变成了目的。他已经不记得最初要去哪里了，但弯路上的风景太丰富了，他用'还在接近'来安慰自己。写他的脚步越来越慢但方向越来越模糊。不要写迷路——写一种更隐蔽的自欺：他用'迂回'来装饰'回避'。他绕的每一个弯都是在避免一次正面冲突。",
            tension: "场景锚点：他终于从侧面接近了目标——发现正面的门其实一直开着。悖论不是'直线vs.曲线'——而是：他的迂回不是因为门锁了，而是因为他害怕推门。弯路给了他一个永远不用面对'推门失败'的可能性——只要还在路上，就永远不用到达。写他站在侧门前回头看自己走过的弯路的长度。"
        }
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
        referenceEn: "Dantès enduring fourteen years in shadow before striking each enemy in The Count of Monte Cristo; Yu Zecheng hiding in plain sight for years in Lurk.",
        topology: "零存在态：能量压缩到外部探测不到的密度——潜伏者从环境中消失，但消失本身消耗的能量比存在更大",
        directive: {
            bright: "写他变成石头的过程——呼吸变浅、动作消失、表情归零。写他对时间的感知变了：一天和一年在潜伏中的重量完全一样。写他的眼睛：是房间里唯一还在运动的器官，其余一切都冻结了。不要写隐忍——写一种更精确的技术：他不是在压抑自己而是在将自己降维到背景的一部分。",
            dark: "写等了太久之后失去了行动的能力——他已经完美地变成了石头，但石头不会动。写他在某个深夜试图做一个简单的动作（举起手、站起来）却发现身体不记得怎么做了。不要写被消磨的意志——写一种更结构性的损伤：潜伏太久，'动'这个神经回路已经废弃了。他分不清自己是在等最佳时机还是在用'等待'逃避行动。",
            tension: "场景锚点：最佳时机来了。他看到了——窗口打开，所有条件对齐。但悖论是：他没有动。不是时机不对，是他的身体已经不会做'发动'这个动作了。写他看着窗口慢慢关闭时的眼睛——里面有清醒的判断但没有对应的身体反应。他是一个完美的等待者，但完美的等待者永远不会到达。"
        }
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
        referenceEn: "Frank weaving a dark web of contacts and intel toward the presidency in House of Cards; Mei Changsu manipulating court politics from the shadows in Nirvana in Fire.",
        topology: "中心辐射：所有线从一个中心点向外延伸——织网者的力量来自节点而非自身，但维护每条线的成本在指数增长",
        directive: {
            bright: "写他拉线的手——轻得像在弹琴。写他打一个电话的语气如何让对方自愿成为网上的一个节点，而对方还觉得是自己做的决定。写他在脑中看到的图：不是棋盘而是一个活的、脉动的网络，每一条线都在传递信息。不要写阴谋家——写一种更优雅的能力：最好的织网者不操控棋子，他让棋子以为自己在下棋。",
            dark: "写网的反噬——每一条线都需要喂养，每一个节点都需要维护。他以为自己是蜘蛛，但蜘蛛也被困在网上。写他在某个凌晨同时处理七条线的崩溃瞬间：一条断了，连锁反应让三条松动。不要写控制狂——写一种更本质的困境：越控制一切，越被一切控制。网的中心不是最自由的位置而是最不能移动的位置。",
            tension: "场景锚点：网上一个不重要的节点做了一个他没预料到的动作——整个网因此产生了他没有设计过的振动。悖论不是'控制vs.失控'——而是：足够复杂的网会产生自己的意志。他创造了一个他以为服从于他的系统，但系统在某个临界点开始按自己的逻辑运行。创造者对创造物的控制是有期限的。"
        }
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
        referenceEn: "Palpatine spending twenty years cultivating Anakin as his weapon in Star Wars; a professor seeing what a rebellious genius couldn't see in himself in Good Will Hunting.",
        topology: "定向生长：能量沿预设方向被缓慢注入另一个主体——被培植者以为在自由生长，实则根系方向早已被确定",
        directive: {
            bright: "写他看着对方成长时眼睛里的光——不是园丁看花而是雕塑家看石头：他在原石里看到了成品的轮廓，现在只是在把多余的部分去掉。写他的耐心：不催促、不着急、用年来计算进度。不要写教育——写一种更深的识别：他看到了对方自己都没看到的潜能，他的培养不是塑造而是'让它长出来'。",
            dark: "写'培养'和'按我的图纸塑造'之间的模糊边界——他给了对方自由选择的幻觉，但所有的选项范围都是他预先设定的。写对方在某一天用他没有预料到的方式成长了——长歪了？还是长对了？他不确定，因为那个方向不在他的蓝图里。不要写控制——写一种更温柔的暴力：以'为你好'为名的方向限定。",
            tension: "场景锚点：对方长成了。但长成的样子有百分之八十匹配蓝图、百分之二十的偏差。悖论不是'按计划vs.失控'——而是那百分之二十：那是对方自己的部分，他应该为之骄傲还是不安？他培养对方是为了对方成为最好的自己，还是对他最有用的人？写他看着'成品'时的复杂表情——像在看一幅别人帮他画完的画。"
        }
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
        referenceEn: "'I will not be ignored' as classic obsessive pursuit in Fatal Attraction; a bookshop clerk surveilling every social move 'for love' in You.",
        topology: "单向透镜：能量从一侧穿透到另一侧但不可逆——跟踪者看到一切却不被看到，这种不对称本身就是权力",
        directive: {
            bright: "写他站在街对面看着窗户里的灯光——他只是想知道对方好不好。写他在手机里翻对方社交动态时手指的速度：快速的、贪婪的、像在确认氧气还在。不要写变态——写一种更悲伤的真相：他不相信这段关系能在视线外存活。他的'关注'源于一种结构性的不安全感：看不到你的那几个小时里你可能消失。",
            dark: "写对方发现被跟踪时的那一秒——不是恐惧而是一种更深的厌恶。因为他的'关心'不是给予而是索取：他在用对方的隐私喂养自己的焦虑。写对方的空间被他的目光一点一点压缩：每一条街、每一个朋友、每一个独处的夜晚都不再属于对方了。不要写痴迷——写一种更精确的暴力：他用'我爱你'来装饰'你的自由让我不安'。",
            tension: "场景锚点：他突然意识到自己不是在看对方——是在看自己焦虑的投影。悖论不是'关心vs.控制'——而是：他看到的从来不是真实的对方，而是他需要对方成为的那个版本。真实的对方在他的凝视之外，恰恰在他看不到的地方。写他第一次意识到：他跟踪的不是一个人，是他对失去的恐惧。"
        }
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
        referenceEn: "The Kim family climbing from basement to catastrophe in Parasite; a professor parasitically clinging to past memories, unable to survive alone in A Single Man.",
        topology: "负压吸附：能量从宿主流向寄生体——寄生者的形状完全由宿主的结构决定，离开宿主就失去轮廓",
        directive: {
            bright: "写他附着的姿态——不是攻击性的而是柔软的，像藤蔓缠上树干。写他的需求不是恶意的：他真的不知道如何独立存在，他需要对方的结构来撑住自己的形状。不要写吸血鬼——写一种更让人心酸的真相：他不是在榨取，是在寻找一个自己没有的骨架。",
            dark: "写宿主慢慢变瘦的过程——不是突然的崩溃而是几乎不可察觉的消耗。每一次'帮我一下'都很小，但它们在累积。写宿主某一天照镜子时发现眼睛下面有了以前没有的阴影——不是因为一件大事，而是因为一千件小事。不要写吸血——写一种更安静的消耗：空气中的氧气在减少，但你说不清是谁在呼吸。",
            tension: "场景锚点：宿主说'我扛不动了'。悖论不是'寄生vs.共生'——而是：他有能力独立存在吗？如果有，为什么不？如果没有，那离开宿主就是蒸发。写他在被迫离开时的身体——不是愤怒而是一种液态的恐慌：没有了附着面，他感觉自己在融化，轮廓在消失。"
        }
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
        referenceEn: "A mother 'protecting' her daughter through total control in Black Swan; a teacher projecting all repressed desire onto her student in The Piano Teacher.",
        topology: "向心塌缩：能量不断向内收缩——爱的引力将对方拉向自己的中心，直到对方的独立轮廓被完全吞没",
        directive: {
            bright: "写他拥抱的力度——每一次都比上一次紧一点。写他的恐惧如此真实：对方不完全属于他就会消失。不要写病态——写这种爱的强度本身的真实性：他的确会因为失去对方而死，这不是修辞是他的身体结构。写他看着对方和别人说话时的生理反应：胸口的物理性收缩，像有人在拧一块湿毛巾。",
            dark: "写被吞噬者的窒息——他给了'一切'，但'一切'是一间没有窗户的房间。写对方试图做一件不包含他的事情时他的反应：不是愤怒而是受伤——'为什么你需要我以外的东西？'不要写控制——写一种更深层的悲剧：他的爱是真诚的，真诚地毁灭性的。他只有'全部'和'没有'两个档位。",
            tension: "场景锚点：对方说'我爱你但我无法呼吸'。悖论不是'爱vs.自由'——而是：他听懂了这句话但无法减轻力度。不是不愿意——是他的爱没有'轻'这个档位。写他试图松开手时手指的痉挛——意志在命令松开，肌肉在拒绝。"
        }
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
        referenceEn: "Tom's trajectory from imitation to replacement to losing himself in The Talented Mr. Ripley; Diane's fatal projection into the idealized 'Betty' identity in Mulholland Drive.",
        topology: "模板覆写：一个主体的模式被另一个主体的模式完全覆盖——原始数据没有被删除但已经无法被读取",
        directive: {
            bright: "写他模仿时的精确——不是表面的复制而是灵魂层面的校准。写他第一次用对方的方式笑时的惊讶：那个笑比他自己的笑更自然。不要写崇拜——写一种更深的投降：'你活出了我想要的样子，我放弃自己的形状去填充你的轮廓。'写他在成为对方的过程中感到的安心：终于不用做自己了。",
            dark: "写复制品的诅咒——越像对方，越提醒自己不是对方。写他照镜子时看到对方的脸但知道那是自己的——这种错位比任何痛苦都更让人发疯。写他原来的习惯、口头禅、走路的方式正在一个一个消失，像档案被逐行覆写。不要写迷失——写一种更精确的恐怖：原始自我还在某个地方，但已经被压在太多层复写之下，发不出声音了。",
            tension: "场景锚点：他遇到了另一个同样在模仿这个人的人。写他看到'另一个复制品'时的反应——不是竞争而是照镜子：他在对方身上看到了自己处境的荒诞。悖论不是'真我vs.假我'——而是：如果他在模仿中比做自己更快乐，那'真我'的价值在哪里？也许'真我'本来就是一个空位，等着被某个更有力量的模板填充。"
        }
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
        referenceEn: "A wife using emotional collapse after collapse to prevent her husband from leaving in Revolutionary Road; both sides weaponizing children and guilt in Marriage Story.",
        topology: "伤口锁链：能量从自身的伤口流向对方的负罪感——痛苦被转化为权力，但这种权力以自我损耗为燃料",
        directive: {
            bright: "写他的痛苦是真实的——这是最关键的一点。写他说'你走了我就去死'时眼睛里的恐惧不是表演：他真的相信自己会死。不要写操控——写一种更悲惨的无能：他不是在威胁而是在描述。他真的不知道如何在没有对方的世界里活着，这种不知道不是装出来的。写他的手在说这些话时的抖动——这抖动是他自己也无法控制的。",
            dark: "写对方被锁在原地的身体——想走但脚被负罪感钉住了。写对方的脸：不是同情而是疲惫，一种被反复消耗后的空洞。他的'脆弱'已经成为一种武器——每一滴眼泪都是一条看不见的绳子。不要写施害者——写一种更精确的结构：他用真实的痛苦制造了不真实的困境。对方留下不是因为爱而是因为'如果他出了事那就是我的错'。",
            tension: "场景锚点：对方终于走了。他没有死。悖论不是'勒索vs.真情'——而是：他发现自己活下来了，而'活下来'这个事实摧毁了他所有说过的话的可信度。他说过会死，但他没有。现在他该如何面对自己：那些话到底有多少是真的？写他独自坐着的房间——'不能没有你'变成了'原来可以没有你'，而这个发现比任何离开都更令人崩溃。"
        }
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
        referenceEn: "Codependent criminal partners who can't function alone in Lock, Stock and Two Smoking Barrels; Bonnie and Clyde becoming each other's sole reality on the run.",
        topology: "互补拼合：两个不完整的结构互为缺口——拼合后的稳态以双方都不成长为代价维持",
        directive: {
            bright: "写他们之间那种奇怪的默契——不需要语言就知道对方需要什么，因为对方需要的恰好是自己多余的。写他们在一起时的节奏：呼吸同步、沉默同步、连失眠都同步。不要写爱情——写一种更古老的拼图逻辑：两块碎片卡在一起，接缝处完美吻合。分开时各自是锯齿，合体时是一个勉强的圆。",
            dark: "写这种'完整'的代价——他的成长意味着不再需要对方，所以他不能成长。写他们之间微妙的互相牵制：不是任何一方故意的，而是结构性的。每一次他试图独立做一件事，对方都会（不是故意地）崩溃一点，让他不得不回来。不要写病态——写一种更冷的力学：关系建立在彼此残缺之上，治愈任何一方都会摧毁整个结构。",
            tension: "场景锚点：其中一个人开始变了——可能是好转、可能是恶化，总之平衡被打破了。悖论不是'在一起vs.分开'——而是：如果他被治愈了，关系就不存在了。他必须在'完整的自己'和'和对方组成的完整'之间选择。写他在好转的过程中感到的不是喜悦而是恐惧——因为接缝处正在松动。"
        }
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
        referenceEn: "A dead lover haunting in ghost form refusing to depart in Ghost; the shadow of lost family filling every corner in Manchester by the Sea.",
        topology: "时间残像：一个已经离场的存在在感知系统中持续产生信号——不是记忆在回放，而是身体还在接收一个已经不存在的频率",
        directive: {
            bright: "写他闻到一种气味时的身体反应——那是对方用过的洗发水，出现在一个完全不相关的地方。写他的身体比意识更快地回应了：心跳先于认知加速，手先于思考伸出去。不要写怀念——写一种更精确的生理现象：不是他在想对方，是肌肉在想。身体有自己的记忆，大脑删除了的东西骨骼还记得。",
            dark: "写影子如何杀死现在——每一段新的关系都在和一个不在场的人竞争。写他在新的人面前闪过的微表情：对方说了一句话，他的嘴角动了一下——那是对'前一个人会怎么说这句话'的无意识比较。不要写走不出来——写一种更精确的损伤：他爱的已经不是那个人而是记忆本身。记忆比人更完美，因为记忆不会再让他失望。",
            tension: "场景锚点：他回到他们曾经一起去过的地方——一切都没变，但一切都不对了。悖论不是'记住vs.忘掉'——而是：他抓住的那个影子已经和真实的对方无关了。影子是他自己编辑过的版本——删掉了争吵、删掉了失望、只留下了光。他缠绕的不是一个人，是他自己制造的一座纪念碑。写他在那个地方坐了一会儿然后站起来——影子没有跟着他站起来。"
        }
    }
];
