import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_C: LibraryItemDef[] = [
    // ============================================================
    // GROUP C. 死锁的齿轮 (The Deadlocked Gear) - 20 Items
    // M7B 实在余痕：那个扣住三界的东西没有凝固成任何具体的符号，
    // 而是变成了一种停不下来的运动——
    // 一个永远在转的闭合回路，一种无法中止的重复。
    // ============================================================
    {
        id: "res_compulsive_check",
        name: "强迫性确认", nameEn: "Compulsive Verification",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始反复确认某件事——锁好了没、还在不在、是不是真的。停不下来。",
        defEn: "After the dust settles, you begin endlessly verifying something — is it locked, still there, really true. You can't stop.",
        core: "A面：反复确认是你对不确定性的最后抵抗——你在用行动堵住焦虑的缝隙。每确认一次就安心一秒。/ B面：但安心只持续一秒。然后你又要确认一次。你的确认在喂养它试图消灭的焦虑。关键张力：你确认的是事实——还是在重复一个永远无法完成的仪式？ | 实在余痕(Σ): 你已经检查了三遍。你知道没问题。但手还是伸了出去。",
        coreEn: "A-side: Compulsive checking is your last stand against uncertainty — you use action to seal anxiety's gaps. Each check buys one second of peace. / B-side: But peace lasts only a second. Then you check again. Your verification feeds the anxiety it tries to kill. Key tension: Are you confirming reality — or repeating a ritual that can never be complete? | Residuum: You've checked three times. You know it's fine. But your hand reached out again.",
        topology: "回路的输出端直接回接输入端。确认行为的终点即刻重置为起点——闭环无法标记'已完成'。",
        topologyEn: "The output terminal feeds directly back into the input. The endpoint of each verification instantly resets to the starting point — the closed loop cannot register 'complete'.",
        directive: {
            bright: "他把手放在门锁上。冰凉的金属给了他一秒钟的确定感。在那一秒里，世界是安全的，一切都在它该在的位置上。让读者感受到那一秒的平静是真实的——他不是疯了，他只是在用手指确认世界还没有崩塌。那一秒的安心，是他能给自己的最温柔的东西。",
            dark: "他的手刚离开门锁，确定感就蒸发了。不是减弱——是消失。好像他从来没有摸过那把锁。于是他又伸手。又确认。又蒸发。让读者看见一台永动机：他的手在喂养它试图杀死的那只怪物。每一次确认都让下一次确认更加必要。他被困在一个自己亲手焊死的回路里。",
            tension: "他站在门前。他知道锁是好的。他的手知道锁是好的。但他的手还是伸了出去。让读者悬在这个瞬间——这到底是一种清醒的仪式，还是一种他已经无法分辨的囚禁？他的脸上没有恐惧，也没有安心。只有一种机械的、无限的、安静的重复。不要告诉读者这是病还是药。让他们自己决定。"
        },
        reference: "《飞行家》霍华德·休斯反复洗手、反复检查门锁——驱力回路把天才困在了卫生间里；《火柴人》尼古拉斯·凯奇扮演的骗子反复开关门三次才能出门。",
        referenceEn: "Howard Hughes repeatedly washing hands and checking locks — the drive circuit trapping genius in the bathroom in The Aviator; Cage's con man opening and closing the door three times before leaving in Matchstick Men."
    },
    {
        id: "res_rehearsal_loop",
        name: "复盘执念", nameEn: "Rehearsal Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在脑子里一遍遍重演那个场景——如果当时换一种做法，一切会不会不同。",
        defEn: "After the dust settles, you replay that scene in your head endlessly — if you'd done it differently, would everything have changed.",
        core: "A面：你在试图找到那个分岔点——如果你能精确地定位错误发生的瞬间，你就还有改正的可能。复盘是拒绝放弃的表现。/ B面：但你在修改一个不存在的草稿。真实只发生了一次，它不接受编辑。关键张力：你是在分析——还是在用思维替代行动？ | 实在余痕(Σ): 你又想到了那句话。如果当时说的是另一句。如果。如果。如果。",
        coreEn: "A-side: You're trying to locate the fork — if you can pinpoint the exact moment it went wrong, correction is still possible. Rehearsal is refusal to give up. / B-side: But you're editing a draft that doesn't exist. Reality happened once; it doesn't accept revisions. Key tension: Are you analyzing — or using thought to replace action? | Residuum: You thought of that sentence again. If you'd said something else. If. If. If.",
        topology: "时间轴折叠为莫比乌斯环。过去的某个节点成为永久的吸引子——意识被反复回卷到同一坐标。",
        topologyEn: "The timeline folds into a Möbius strip. A specific past node becomes a permanent attractor — consciousness is repeatedly rewound to the same coordinate.",
        directive: {
            bright: "他坐在窗边，脑子里又回到了那个下午。他不是在折磨自己——他是在寻找那个分岔口。如果找到了，一切还有修改的可能。让读者感到他的执着里有一种不肯放弃的勇气。他在用思维的手指一寸一寸摸索那面墙，试图找到一扇还没有关死的门。这种不甘心，本身就是活着的证据。",
            dark: "他又回到了那个下午。第三百次。他改了台词、改了走位、改了表情——但现实只发生了一次，而且不接受修改。让读者慢慢意识到：他不是在分析过去，他是在用思考替代行动。每一次复盘都是一次逃避。他在脑中修改一份不存在的草稿，而真正的生活正从他身边流走。他被困在一个他自己建造的时间牢房里。",
            tension: "他又想起了那句话。如果当时换一种说法。如果。让读者和他一起停在那个'如果'上——不确定这到底是不放弃的最后努力，还是一种已经脱离现实的执念。那个下午已经过去了。但他还站在那里。也许他正在慢慢找到什么。也许他永远找不到。把这个'也许'留在那里。"
        },
        reference: "《海边的曼彻斯特》李永远在脑中重演那个忘记挡火炉的夜晚；《赎罪》布莱奥尼用一生的写作反复改写那个她撒谎的午后。",
        referenceEn: "Lee endlessly replaying the night he forgot the fireplace guard in Manchester by the Sea; Briony rewriting the afternoon she lied through a lifetime of writing in Atonement."
    },
    {
        id: "res_overwork_engine",
        name: "过载运转", nameEn: "Overwork Engine",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始用不停地工作来填满所有的空隙。停下来就会想起来。所以不能停。",
        defEn: "After the dust settles, you fill every gap with relentless work. Stopping means remembering. So you don't stop.",
        core: "A面：你把痛苦转化成了生产力——每一份加班都是一道防线。忙碌让你没有时间崩溃。这是一种有效的自我管理。/ B面：但你不是在工作，你是在逃。工作是你发明的麻醉剂。一旦停下来，所有东西会一次性涌回来。关键张力：你是在建设什么——还是在躲避什么？ | 实在余痕(Σ): 凌晨三点。你不困。你只是不敢关灯。",
        coreEn: "A-side: You converted pain into productivity — every overtime is a barricade. Busyness leaves no room to collapse. Effective self-management. / B-side: But you're not working; you're fleeing. Work is anesthesia you invented. Once you stop, everything floods back at once. Key tension: Are you building something — or hiding from something? | Residuum: 3 AM. You're not tired. You just don't dare turn off the light.",
        topology: "驱力回路以加速度运转——转速本身成为目的。齿轮的高速旋转掩盖了轴心是空的。",
        topologyEn: "The drive circuit runs at accelerating speed — velocity itself becomes the purpose. The gear's high-speed rotation conceals a hollow axle.",
        directive: {
            bright: "凌晨三点，他还在工作。不是因为deadline——是因为只要手在动，脑子就不会飘到那个地方。他用加班筑起一道一道防线。让读者看见他把碎片拼成了一面盾牌：忙碌不是逃避，是他找到的最有尊严的活法。每一份产出都是他对自己的证明——我还在，我还能做事，我还没有倒下。",
            dark: "他不是在工作。他是在逃。让读者慢慢看见：屏幕上的数据、报表、邮件——都是他自己给自己开的麻醉药。他发明了一台永远不停的机器，然后把自己绑在了上面。因为一旦停下来，所有他用忙碌挡住的东西会在一秒钟内全部涌回来。他不敢停。他不敢关灯。他不敢安静。凌晨三点的办公室是他最后的防空洞。",
            tension: "凌晨三点。他不困。或者说——他不知道自己困不困。让读者看着他坐在那里，然后问自己：这个人是在建设什么，还是在躲避什么？他的产出是真实的。但他停不下来也是真实的。这两件事同时成立。不要替他选择。让读者自己判断那盏灯是一座灯塔还是一面挡住深渊的墙。"
        },
        reference: "《穿普拉达的女王》米兰达用永不停歇的工作节奏把私人生活的废墟掩埋在日程表下；《华尔街之狼》贝尔福特用疯狂的交易节奏填满内心的荒芜。",
        referenceEn: "Miranda burying personal ruins under an unstoppable work schedule in The Devil Wears Prada; Belfort filling inner desolation with frantic trading pace in The Wolf of Wall Street."
    },
    {
        id: "res_apology_circuit",
        name: "道歉回路", nameEn: "Apology Circuit",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在心里不停地对那个人道歉。虽然他可能已经听不到了。",
        defEn: "After the dust settles, you keep apologizing to that person in your mind. Even though they may no longer hear.",
        core: "A面：道歉是你对他最后能做的事——虽然迟了，但你在用不断的忏悔证明你知道自己做了什么。/ B面：但道歉已经变成了自我安慰的仪式。你不是在赎罪，你是在用道歉喂养自己的内疚回路。关键张力：你渴望的是他的原谅——还是自己原谅自己？ | 实在余痕(Σ): 对不起。对不起。对不起。他听不到。但你停不下来。",
        coreEn: "A-side: Apologizing is the last thing you can do for them — though late, your constant penance proves you know what you did. / B-side: But the apology became a self-soothing ritual. You're not atoning; you're feeding your own guilt circuit. Key tension: Do you crave their forgiveness — or to forgive yourself? | Residuum: I'm sorry. I'm sorry. I'm sorry. They can't hear. But you can't stop.",
        topology: "信号发送到一个已断开的接收端。回声在封闭空间内无限反弹——道歉成为单向回路中的驻波。",
        topologyEn: "Signal is sent to a disconnected receiver. The echo bounces infinitely within a sealed chamber — apology becomes a standing wave in a one-way circuit.",
        directive: {
            bright: "他在心里又说了一遍对不起。虽然那个人听不到了。但他还在说。让读者感到这里面有一种笨拙的忠诚——他没有忘记，他没有假装没发生过。每一句道歉都是他对那个人最后能做的事。虽然迟了，虽然没有人在听，但他说出来的这个动作本身，就是他还在乎的证明。",
            dark: "对不起。对不起。对不起。让读者听到这三个字开始变味——它不再是说给那个人的了。它变成了他自己的止痛药。他不是在赎罪，他是在用道歉喂养内疚，让内疚喂养下一次道歉。一个自给自足的回路。他以为自己在偿还什么，但那个人从来没有收到过任何一笔还款。他只是在和自己的回声说话。",
            tension: "他又说了一遍对不起。让读者停在这一刻——这句话到底是说给谁听的？是给那个已经不在的人，还是给他自己？也许两者都是。也许两者都不是。也许道歉已经变成了一种呼吸——不再有方向，不再有目的，只是一种他停不下来的节律。不要判断这是忠诚还是执念。让读者自己在这两个词之间找到落脚点。"
        },
        reference: "《海边的曼彻斯特》李对前妻说'我心里什么都没有了'——道歉回路已经空转到齿轮磨平；《入殓师》男主在父亲遗体前终于说出一辈子没说的那句话。",
        referenceEn: "Lee telling his ex-wife 'there's nothing there' — the apology circuit worn smooth in Manchester by the Sea; the protagonist finally saying the unsaid words before his father's body in Departures."
    },
    {
        id: "res_vigilance_lock",
        name: "警觉锁死", nameEn: "Vigilance Lock",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你再也无法放松下来。身体一直处于警戒状态，好像随时会有什么发生。",
        defEn: "After the dust settles, you can never relax again. Your body stays on alert, as if something could happen any moment.",
        core: "A面：你的警觉曾经救过你——在那个最危险的时刻，是你的过度敏感让你活了下来。你的身体学到了教训。/ B面：但危险已经过去了。你的身体不知道。它还在按战时标准运转，每一个门响都是警报。关键张力：你的警觉是在保护你——还是危险已经结束但你的身体拒绝停战？ | 实在余痕(Σ): 门响了。没什么事。但你的心已经跳到了嗓子眼。",
        coreEn: "A-side: Your vigilance once saved you — at the most dangerous moment, your hypersensitivity kept you alive. Your body learned the lesson. / B-side: But the danger is over. Your body doesn't know. It's still running on wartime protocol; every door sound is an alarm. Key tension: Is your vigilance protecting you — or has danger ended but your body refuses ceasefire? | Residuum: The door clicked. Nothing happened. But your heart was already in your throat.",
        topology: "警报系统的复位开关被焊死在'开'的位置。信号回路持续激活，无法降级至待机状态。",
        topologyEn: "The alarm system's reset switch is welded in the 'on' position. The signal circuit remains perpetually activated, unable to downgrade to standby.",
        directive: {
            bright: "他听到了门响。心跳立刻加速。让读者知道——这个反应曾经救过他的命。在那个最危险的夜晚，正是这种过度敏感让他活了下来。他的身体是一台精密的预警系统，它学会了永远不掉以轻心。那种警觉里有一种动物性的智慧：在丛林里，放松的那个先死。他的身体在替他记住那些他的意识已经忘记的事情。",
            dark: "战争结束了。但他的身体不知道。让读者看见：他坐在家里的沙发上，但他的肌肉还在伊拉克。每一个门响都是一颗子弹。每一次汽车回火都是一枚炸弹。他的身体拒绝相信和平——因为上一次它相信和平的时候，差点死了。他被困在一具永远按战时标准运转的身体里。安全本身成了最大的威胁，因为他不知道该拿安全怎么办。",
            tension: "门响了。什么事都没有。但他的心已经跳到了嗓子眼。让读者和他一起停在那一秒——这到底是一具被创伤锁死的身体，还是一具至今仍在保护他的身体？他不知道。读者也不应该知道。也许他的警觉是多余的。也许下一次门响就是真正的危险。把他留在那个无法判断的状态里。那种不确定本身，就是他活着的全部重量。"
        },
        reference: "《拆弹部队》威廉回到超市站在麦片货架前——他的身体还在伊拉克；《钢琴家》斯皮尔曼战后多年仍然无法听到突然的声响。",
        referenceEn: "William standing before cereal shelves at the supermarket — his body is still in Iraq in The Hurt Locker; Szpilman unable to endure sudden sounds years after the war in The Pianist."
    },    {
        id: "res_search_compulsion",
        name: "搜索强迫", nameEn: "Search Compulsion",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你忍不住反复去查那个人的消息——社交媒体、朋友圈、任何碎片。",
        defEn: "After the dust settles, you compulsively check that person's traces — social media, mutual friends, any fragments.",
        core: "A面：搜索是你和那个人最后的连接方式——虽然触不到，但你还能知道他在继续。你没有完全失去他。/ B面：但每一次搜索都会再割你一刀。他过得好你痛，过得不好你也痛。关键张力：你在维持连接——还是在反复揭开伤口？ | 实在余痕(Σ): 你又打开了那个页面。看了。放下手机。然后又拿起来了。",
        coreEn: "A-side: Searching is your last connection — though you can't reach them, you can still know they continue. You haven't fully lost them. / B-side: But every search cuts you again. Their happiness hurts; their unhappiness hurts too. Key tension: Maintaining connection — or repeatedly reopening the wound? | Residuum: You opened that page again. Looked. Put the phone down. Then picked it up again.",
        topology: "注意力回路被锁定在已断开的信息源上——主体持续向一个不再更新的终端发送查询请求，每次获取的碎片强化下一次查询的冲动。",
        topologyEn: "The attention circuit locks onto a disconnected information source — the subject continuously sends query requests to a no-longer-updating terminal, each fragment retrieved reinforcing the next query's impulse.",
        directive: {
            bright: "他又打开了那个页面。看了。放下手机。然后又拿起来了。让读者感到那种搜索里的忠诚：他还在乎。他还想知道那个人是否继续着。只要他还在搜索，那个人就没有完全从他的世界里消失。每一次点击都是一次微小的不放手。",
            dark: "她又看了。过得很好。新的照片，新的人。她的胃翻了一下。但她放不下手机——她被自己的手指绑架了。每一次搜索都是一刀——过得好痛，过得不好也痛。她的手机变成了一把她反复递给自己的刀。让读者感到那种数字时代的自残：你的伤口在屏幕上。",
            tension: "他又打开了。又关上了。又打开了。他在找什么？也许是想确认那个人还在——也许是想找到一个理由彻底放下。但每一次搜索都没给他答案，只是喂养了下一次搜索的冲动。让读者看着那个无限循环：搜索→痛苦→搜索。出口在哪？也许没有出口。也许搜索本身就是目的。"
        },
        reference: "《社交网络》马克反复刷新前女友的主页——创造了Facebook的人被困在自己发明的搜索回路里；《她》西奥多不断查看萨曼莎留下的语音记录碎片。",
        referenceEn: "Mark refreshing his ex's page — Facebook's creator trapped in his own search loop in The Social Network; Theodore checking Samantha's voice log fragments in Her."
    },
    {
        id: "res_self_punishment",
        name: "自我惩罚回路", nameEn: "Self-Punishment Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始不断惩罚自己——用各种方式。好像只有受苦才能抵消什么。",
        defEn: "After the dust settles, you keep punishing yourself — in various ways. As if only suffering can offset something.",
        core: "A面：自我惩罚是你唯一剩下的公正——既然没人惩罚你，你自己来。你在用痛苦证明你不是无所谓的人。/ B面：但惩罚永远不够。因为你不知道'够'是什么标准。回路没有终点。关键张力：你是在赎罪——还是在用痛苦替代你不敢面对的另一种感受？ | 实在余痕(Σ): 你又对自己做了那件事。然后恨自己做了。然后又做了。",
        coreEn: "A-side: Self-punishment is the only justice left — since no one punishes you, you do it yourself. You use pain to prove you care. / B-side: But punishment is never enough. Because you don't know what 'enough' means. The loop has no endpoint. Key tension: Are you atoning — or using pain to replace a feeling you dare not face? | Residuum: You did that thing to yourself again. Hated yourself. Then did it again.",
        topology: "惩罚回路的终止条件被设为不可达——'够'的阈值随每次执行而上移，形成永远无法清偿的递归债务。",
        topologyEn: "The punishment loop's termination condition is set to unreachable — the 'enough' threshold rises with each execution, forming a recursive debt that can never be cleared.",
        directive: {
            bright: "他又做了那件事。不是别人要求的——是他自己。让读者感到那种自我惩罚里的正直：没人判他有罪，他自己来了。他用痛苦证明他不是一个无所谓的人。那种不放过自己的方式里有一种残酷的尊严。也许有一天他会原谅自己。但今天不是那天。",
            dark: "她又惩罚了自己。然后恨自己惩罚了自己。然后又惩罚了自己。回路没有出口。她不知道'够'是什么——因为标准在每一次惩罚之后都会上移。她在追一条永远到不了的终点线。让读者感到那种回路的窒息：她不是在赎罪——她是被一台她自己启动的机器困住了。",
            tension: "他又对自己做了那件事。为什么？他说不出来。也许是赎罪——也许只是一种他已经无法停止的惯性。让读者分不清那是良知还是强迫症。那种痛苦到底在修复什么——还是它只是在制造更多需要被惩罚的事？让那个回路转着。不要替他找到出口。"
        },
        reference: "《黑天鹅》妮娜在追求完美的过程中不断伤害自己的身体；《鞭打》安德鲁练鼓练到手流血——惩罚变成了驱力本身的燃料。",
        referenceEn: "Nina harming her body pursuing perfection in Black Swan; Andrew drumming until his hands bleed — punishment becoming the drive's fuel in Whiplash."
    },
    {
        id: "res_relationship_replay",
        name: "关系重演", nameEn: "Relationship Replay",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在新的关系里不断重复同一种模式——同一种人、同一种结局。",
        defEn: "After the dust settles, you repeat the same pattern in new relationships — same type, same ending.",
        core: "A面：你在试图把上一次搞砸的东西这一次做对——每段新关系都是一次重考，你在用新人修正旧答案。/ B面：但你不是在修正，你是在重复。你选的人、犯的错——结构一模一样。关键张力：你以为在找新的爱——但你只是在用不同的脸重演同一出戏？ | 实在余痕(Σ): 又是同一种人。又是同一种痛。你说下次不会了。但你知道会。",
        coreEn: "A-side: You're trying to get right what you ruined last time — each new relationship is a retake, using new people to correct old answers. / B-side: But you're not correcting; you're repeating. Same people, same mistakes — identical structure. Key tension: You think you're finding new love — but are you restaging the same play with different faces? | Residuum: Same type. Same pain. You said never again. But you know you will.",
        topology: "关系模板被固化为不可变的运动方程——新的变量被代入同一个公式，输出相同的轨迹和终点。",
        topologyEn: "The relationship template is solidified into an immutable equation of motion — new variables are substituted into the same formula, outputting identical trajectories and endpoints.",
        directive: {
            bright: "她又遇到了同一种人。又走到了同一个路口。但这一次她停下来了——她看到了那个模式。让读者感到识别本身就是突破的开始：她不是在重复，她是在用新的关系重考旧的试卷。也许这一次她能把答案改对。识别模式的那一秒，齿轮松了一下。",
            dark: "又是同一种人。又是同一种开头。她知道结局会是什么——和上次一样。和上上次一样。但她停不下来。她不是在选择——她是被一条看不见的轨道拖着走。让读者感到那种结构性重复的恐怖：她以为自己在恋爱，其实她在上演同一出戏的第十七次复排。换了演员，剧本没变。",
            tension: "又是那种感觉。又是那种人。她想：这次不一样。但她上次也这么想的。让读者和她一起站在那个路口，分不清这次是真的不同了还是同一个循环的新一圈。也许她在学——也许她只是在重复。让那个判断悬着。让她走进去。让我们看看。"
        },
        reference: "《蓝色情人节》一对恋人从甜蜜走到崩坏——然后你意识到和你上一段一模一样；《革命之路》两个发誓不重蹈父母覆辙的人走上了同一条路。",
        referenceEn: "A couple going from sweetness to ruin — identical to your last one in Blue Valentine; two people swearing not to repeat their parents' mistakes walking the same path in Revolutionary Road."
    },
    {
        id: "res_speech_rehearsal",
        name: "语言排演", nameEn: "Speech Rehearsal",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在心里排练一段话——打算说的、应该说的、想说但永远说不出口的。",
        defEn: "After the dust settles, you rehearse a speech — what you plan to say, should have, want to but never will.",
        core: "A面：排练是你对那段未完成对话的尊重——你在寻找最精确的语言来配得上那个时刻的重量。/ B面：但你排练了一千遍也没说出口。排练本身变成了替代品——你用想象中的说取代了真实的说。关键张力：你还打算说吗——还是排练本身已经成了目的？ | 实在余痕(Σ): 这次我要告诉他。这次一定。然后你又沉默了。",
        coreEn: "A-side: Rehearsal is respect for the unfinished conversation — seeking the most precise language for that moment's weight. / B-side: But you rehearsed a thousand times without speaking. Rehearsal became the substitute — imagined speech replaced real speech. Key tension: Do you still intend to speak — or has rehearsal become the goal? | Residuum: This time I'll tell them. Definitely. Then you fell silent again.",
        topology: "语言生成系统在输出端被阻断——信号在发声前被拦截并回送到排演区，形成内部无限排练但永不执行的闭合回路。",
        topologyEn: "The language generation system is blocked at the output end — signals are intercepted before vocalization and rerouted to the rehearsal zone, forming a closed loop of infinite internal rehearsal but never execution.",
        directive: {
            bright: "他在心里排练了一千遍那句话。每一遍都更精确。他在寻找最配得上那个时刻的语言。让读者感到那种排练里的认真：他不是说不出口——他是在等一个足够好的版本。那种对语言的尊重本身就是他对那段关系的尊重。也许有一天他会找到那句话。也许那句话就是沉默。",
            dark: "她又在心里排练了一遍。'这次一定说出来。'然后她又沉默了。排练本身变成了替代品——她用想象中的说取代了真实的说。她排练了一千遍，但那个人一遍也没听到。让读者感到那种回路的悲哀：她的嘴和她的心之间有一道永远跨不过去的鸿沟。",
            tension: "他排练了那句话。完美的版本。但他没说。也许明天说。也许后天。让读者跟着他一起犹豫：他还打算说吗——还是排练本身已经成了目的？那句永远说不出口的话，到底是因为不够好——还是因为一旦说出来，一切就要变了？让那句话停在嘴边。永远。"
        },
        reference: "《迷失东京》结尾那句永远听不到的耳语——整部电影是一场说不出口的排练；《花样年华》周慕云对着树洞说出永远不会说给苏丽珍听的话。",
        referenceEn: "The forever-inaudible whisper — the entire film a rehearsal for the unspeakable in Lost in Translation; Chow whispering into a tree hole words he'll never say to Su in In the Mood for Love."
    },
    {
        id: "res_emotional_tide",
        name: "情绪潮汐", nameEn: "Emotional Tide",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，情绪像潮水一样来去——你以为好了，它又回来了。周而复始。",
        defEn: "After the dust settles, emotions ebb and flow like tides — you thought it was over, then it returns. Cyclical.",
        core: "A面：潮汐说明你还活着——只有有感觉的人才会有潮汐。每一次退潮都是一小段平静。/ B面：但每次涨潮都回到同一个高度。你以为在好转，其实只是在退潮。好转是假象，周期是真的。关键张力：你在愈合——还是只是在两次疼痛之间休息？ | 实在余痕(Σ): 今天好多了。你刚这么想。然后傍晚又来了。",
        coreEn: "A-side: The tide means you're alive — only those who feel have tides. Each ebb is a brief calm. / B-side: But each high tide reaches the same height. You think you're improving; you're just ebbing. Recovery is illusion; the cycle is real. Key tension: Are you healing — or resting between pains? | Residuum: Today was better. You just thought that. Then evening came again.",
        topology: "情绪系统呈正弦波震荡——振幅恒定，频率固定。每次退潮制造愈合假象，每次涨潮证明振幅未衰减。",
        topologyEn: "The emotional system oscillates in sine waves — constant amplitude, fixed frequency. Each ebb creates the illusion of healing; each flood proves the amplitude has not attenuated.",
        directive: {
            bright: "今天好多了。她以为好了。然后傍晚又来了。但让读者感到：潮汐说明她还活着。只有有感觉的人才有潮汐。每一次退潮都是一小段真实的平静。也许振幅在慢慢变小——也许她只是还没注意到。那种来去本身不是敌人——是她的系统还在运转的证据。",
            dark: "他以为好了。连续三天没想那件事了。然后第四天傍晚，一切像第一天一样涌回来了。同样的高度。同样的力度。他不是在愈合——他只是在退潮。好转是假象，周期是真的。让读者感到那种潮汐的残忍：你以为站在了岸上，其实你还在海里。你只是被暂时放下了。",
            tension: "今天好多了。真的好多了。——她刚这么想。让读者和她一起停在那个瞬间，不确定这次是真的好转还是又一个退潮。也许这次是真的。也许傍晚又会来。让那个'好多了'悬在午后的阳光里。不要预报下一次涨潮的时间。让她享受这一秒。不管下一秒是什么。"
        },
        reference: "《海边的曼彻斯特》李以为自己麻木了——偶遇前妻，一切像第一天涌回来；《蓝》朱丽叶以为丧夫之痛已过——一段音乐让她在游泳池里静止了。",
        referenceEn: "Lee thinking he was numb — running into his ex-wife, everything flooding back like day one in Manchester by the Sea; Julie thinking grief had passed — music freezing her still in the pool in Blue."
    },
    {
        id: "res_caretaker_loop",
        name: "照看者回路", nameEn: "Caretaker Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你不自觉地照顾所有人——好像只有在被需要的时候你才存在。",
        defEn: "After the dust settles, you compulsively take care of everyone — as if you only exist when needed.",
        core: "A面：照顾别人是你找到的最有尊严的活法——你的痛苦变成了别人的安慰。你把碎片拼成了一面盾牌。/ B面：但你用别人的需求填满了自己的空洞。一旦没人需要你，你就坍塌了。关键张力：你在给予——还是在用给予逃避面对自己？ | 实在余痕(Σ): 所有人都说你太好了。但没人问过你好不好。",
        coreEn: "A-side: Caring for others is the most dignified way you found to live — your pain became others' comfort. You forged fragments into a shield. / B-side: But you filled your own void with others' needs. Once no one needs you, you collapse. Key tension: Are you giving — or using giving to avoid facing yourself? | Residuum: Everyone says you're so good. But no one asked if you're okay.",
        topology: "主体通过维持他者的依赖性来确认自身存在——一旦外部需求信号消失，自我的拓扑结构失去支撑点而坍塌。",
        topologyEn: "The subject confirms their own existence by maintaining others' dependency — once external demand signals vanish, the self's topological structure loses its support point and collapses.",
        directive: {
            bright: "所有人都说她太好了。她把自己碎掉的部分拼成了一面盾牌——替别人挡住了她知道有多痛的东西。让读者感到那种照顾的尊严：她的痛苦变成了别人的安慰。她在给予中找到了活下去的理由。那不是软弱——是她能找到的最体面的方式。",
            dark: "她照顾了所有人。所有人都好了。然后她一个人坐在空荡荡的客厅里——忽然不知道自己是谁了。没人需要她的时候，她就不存在了。让读者感到那种给予者的空洞：她用别人的需求填满了自己的空洞。一旦需求消失，空洞露出来了。比以前更大。",
            tension: "她又帮了一个人。那个人好了。她微笑着。但没人问过她好不好。让读者在那个微笑里犹豫：她在给予——还是在用给予逃避面对自己？如果所有人都不再需要她了，她还是她吗？让那个问题安静地坐在她帮完最后一个人之后的空房间里。"
        },
        reference: "《东京物语》老母亲一辈子照顾所有人——唯独没有人照顾她；《三块广告牌》米尔德里德把全部能量投入替女儿讨公道——因为停下来就要面对空荡荡的家。",
        referenceEn: "The old mother caring for everyone her whole life — nobody caring for her in Tokyo Story; Mildred pouring all energy into justice for her daughter — because stopping means facing the empty house in Three Billboards."
    },
    {
        id: "res_numbness_cycle",
        name: "麻木周期", nameEn: "Numbness Cycle",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在'什么都感觉不到'和'突然感觉到一切'之间反复切换。没有中间地带。",
        defEn: "After the dust settles, you oscillate between feeling nothing and feeling everything. No middle ground.",
        core: "A面：麻木是你的紧急制动——当感受太多的时候，关掉感觉是你仅存的自保手段。/ B面：但麻木不是真的不痛——它只是延迟了付款。等它退去的时候，所有感受一次性涌回来，比之前更猛。关键张力：你在自我保护——还是在积攒一次更大的崩溃？ | 实在余痕(Σ): 整个星期什么都不觉得。然后某个周日下午，毫无征兆地，全部回来了。",
        coreEn: "A-side: Numbness is your emergency brake — when feeling is too much, shutting down sensation is your last self-preservation. / B-side: But numbness isn't truly painless — it just defers payment. When it lifts, all feelings flood back at once, harder than before. Key tension: Are you self-protecting — or accumulating a bigger collapse? | Residuum: All week you felt nothing. Then one Sunday afternoon, without warning, everything returned.",
        topology: "感知系统在过载与宕机之间做二值切换——没有中间缓冲区。信号要么全量涌入，要么完全截断。",
        topologyEn: "The perception system toggles binary between overload and shutdown — no intermediate buffer. Signals either flood in at full volume or are completely cut off.",
        directive: {
            bright: "整个星期什么都不觉得。像一台被拔了电源的机器。然后某个周日下午，毫无征兆地，全部回来了。让读者感到那种麻木的本质：不是没感觉——是感觉太多了，系统选择了临时关机。那不是冷漠——是她的紧急制动。等它重启的时候，说明她的系统还在工作。",
            dark: "他在两种状态之间切换——什么都感觉不到，或者什么都感觉到。没有中间地带。麻木的时候他像行尸走肉。解冻的时候他像被打开了消防栓——一切同时涌出来，比上一次更猛。让读者感到那种循环的加速：每一次麻木都在积攒更大的崩溃。他不是在恢复——他是在充电。",
            tension: "这个星期她什么都不觉得了。好事吗？还是更糟了？让读者和她一起站在那个麻木的中间，判断不了这是愈合的开始还是下一次洪水前的退潮。她的感觉什么时候会回来？会以什么形式回来？让那种空白悬着。让我们一起等。"
        },
        reference: "《海边的曼彻斯特》李在大部分时间里是一台行走的冰箱——然后在派出所崩溃那一秒全部解冻；《革命之路》艾普丽尔在长期的情绪压抑后突然做出了不可挽回的决定。",
        referenceEn: "Lee as a walking refrigerator most of the time — then everything defrosts in one second at the police station in Manchester by the Sea; April making an irrevocable decision after prolonged emotional suppression in Revolutionary Road."
    },
    {
        id: "res_proximity_avoidance",
        name: "趋避震荡", nameEn: "Approach-Avoidance Oscillation",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在'想靠近'和'害怕靠近'之间反复拉扯。远了想念，近了恐惧。",
        defEn: "After the dust settles, you oscillate between wanting closeness and fearing it. Far feels lonely, near feels terrifying.",
        core: "A面：你还有想靠近的冲动——说明你没有完全关闭自己。你还相信连接是值得的。/ B面：但每次靠近到一定距离你就逃走了。你在安全距离和渴望之间做永远的钟摆。关键张力：你怕的是被拒绝——还是怕被接受之后再次失去？ | 实在余痕(Σ): 你走近了一步。然后退了两步。然后又走近了一步。",
        coreEn: "A-side: You still have the impulse to approach — meaning you haven't fully shut down. You still believe connection is worthwhile. / B-side: But every time you get close enough, you flee. You're a permanent pendulum between safety and desire. Key tension: Do you fear rejection — or being accepted and then losing again? | Residuum: You stepped one step closer. Then two steps back. Then one step closer again.",
        topology: "趋近向量与回避向量同时激活且等幅——主体被锁定在两个力的交汇点上，无法趋近也无法远离，形成拓扑意义上的鞍点。",
        topologyEn: "Approach vector and avoidance vector activate simultaneously at equal amplitude — the subject is locked at the intersection of two forces, unable to approach or retreat, forming a topological saddle point.",
        directive: {
            bright: "她走近了一步。然后退了两步。然后又走近了一步。让读者感到那种震荡里的希望：她还想靠近。她没有完全关闭自己。那种来回不是软弱——是她在一个被烧过的人身上找到的最勇敢的方式：一步一步试。每一次趋近都是一次微小的赌注。",
            dark: "他想靠近。但每次到了那个距离就逃走了。不是不想——是他的身体在那个距离自动启动了警报。上一次靠近到这个距离的时候，他失去了一切。让读者感到那种距离性的恐怖：他被困在一个看不见的圆圈的边缘。里面是他想要的。但里面也是他害怕的。他绕着那个圆走了一辈子。",
            tension: "远了想念。近了恐惧。她在两者之间做永远的钟摆。让读者跟着她摆——靠近的时候心跳加速，退开的时候松了口气但也空了。她怕的是被拒绝，还是怕被接受之后再次失去？让那个钟摆继续摆。不要给它一个停下来的理由。"
        },
        reference: "《花样年华》周慕云和苏丽珍在楼梯间擦肩而过无数次——永远差最后一步；《迷失东京》两个人在酒店里无限靠近又无限退缩的微妙舞蹈。",
        referenceEn: "Chow and Su passing each other countless times on the staircase — always one step short in In the Mood for Love; two people infinitely approaching and retreating in the hotel in Lost in Translation."
    },
    {
        id: "res_savior_drive",
        name: "拯救驱力", nameEn: "Savior Drive",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始不断去'拯救'别人——好像拯救了他们就等于拯救了当初的自己。",
        defEn: "After the dust settles, you compulsively 'save' others — as if saving them equals saving the self you once were.",
        core: "A面：你把自己没被拯救的痛苦转化成了拯救别人的能力——你不想让任何人经历你经历过的事。/ B面：但你拯救的不是他们，是过去的自己。你在别人身上反复修复一个已经无法修复的人。关键张力：你在帮他们——还是在用他们完成你自己未完成的剧本？ | 实在余痕(Σ): 你又帮了一个人。他好了。但你的那个洞还在。",
        coreEn: "A-side: You converted the pain of not being saved into the ability to save others — you don't want anyone to go through what you did. / B-side: But you're not saving them; you're saving your past self. You repeatedly repair an irreparable person through others. Key tension: Are you helping them — or using them to complete your own unfinished script? | Residuum: You saved another one. They're fine now. But your hole is still there.",
        topology: "主体将自身未被修复的创伤投射到他者身上——通过修复他者来执行一次代理性自我修复。但代理修复不传导回原始创伤，形成永远的修复偏移。",
        topologyEn: "The subject projects their unrepaired trauma onto the other — performing vicarious self-repair by repairing the other. But proxy repair does not transmit back to the original wound, forming permanent repair offset.",
        directive: {
            bright: "他又帮了一个人。那个人站起来了。他站在旁边看着，眼睛里有一种温柔的满足。让读者感到那种拯救的转化：他不想让任何人经历他经历过的事。他的伤口变成了别人的药。那不是投射——是他找到的唯一一种让痛苦有意义的方式。",
            dark: "她又救了一个人。第三个了。他们都好了。她还是那个样子。她洞里的东西没有因为拯救别人而减少——甚至更大了。让读者感到那种拯救回路的空洞：她修复的不是他们——是过去的自己。但过去的自己无法被修复。她在用别人的痊愈替代自己的痊愈。代理修复永远传不回来。",
            tension: "他又帮了一个人。那个人好了。他的洞还在。他在帮他们——还是在用他们完成自己的剧本？让读者看着他满足的眼神，分不清那是慷慨还是一种伪装成善良的自我麻醉。被拯救的人走了。他还站在原地。比之前更空。"
        },
        reference: "《辛德勒的名单》辛德勒在最后崩溃地说'我还能再多救一个'——拯救回路在终点仍然停不下来；《出租车司机》特拉维斯把拯救雏妓当成了自我救赎——但枪放下之后他还是那个人。",
        referenceEn: "Schindler collapsing at the end saying 'I could have saved one more' — the savior loop unable to stop even at the finish in Schindler's List; Travis treating the rescue of a child prostitute as self-redemption — but after the gun he's still the same man in Taxi Driver."
    },
    {
        id: "res_confession_urge",
        name: "告白冲动", nameEn: "Confession Urge",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你有一种不断想把真相说出来的冲动——不管对谁说、在哪里说。",
        defEn: "After the dust settles, you feel an urge to tell the truth — to anyone, anywhere. It wants to come out.",
        core: "A面：告白冲动说明你的良知还在工作——真相在你体内产生了压力，它需要一个出口。这种不安是正直的证据。/ B面：但你想说出来不是为了对方——是为了卸下你自己的重量。告白是一种转嫁，你把你的负担变成了别人的。关键张力：你想说出真相——是为了诚实，还是为了让自己好受？ | 实在余痕(Σ): 你张了张嘴。又闭上了。真相在嘴边转了一圈又咽了回去。",
        coreEn: "A-side: The confession urge means your conscience is working — truth has built pressure inside, needing an outlet. That unease is proof of integrity. / B-side: But you want to speak not for the other — but to unload your own weight. Confession is transference; you turn your burden into theirs. Key tension: Do you want truth — for honesty, or to feel better? | Residuum: You opened your mouth. Closed it. The truth circled your lips and was swallowed back.",
        topology: "真相在主体内部产生了持续增长的压力——告白冲动是泄压阀的反复启闭。但每次闭合都让压力进一步积累。",
        topologyEn: "Truth generates continuously growing pressure inside the subject — the confession urge is the pressure valve's repeated opening and closing. But each closure further accumulates pressure.",
        directive: {
            bright: "她张了张嘴。又闭上了。那不是懦弱——是她的良知在工作。真相在她体内产生了压力，它需要出口。让读者感到那种不安的正直：一个对秘密不安的人，就是一个有良知的人。她还没说出来——但她想说，这本身就是证据。",
            dark: "他想告诉她真相。他每天都想。但他想说出来不是为了她——是为了卸下他自己的重量。告白是一种转嫁。他把自己背了十年的东西扔到她身上，然后自己走了。让读者感到那种告白的自私：有些真相说出来是为了解放说的人——但接住的人会被压垮。",
            tension: "他又张了张嘴。又咽回去了。他想说出来——为了诚实？为了解脱？为了对方？他自己说不清。让读者悬在那三种可能性之间：告白到底是勇气、自私、还是一种无法控制的生理反应？让那个真相在嘴边转了又转。不要让它出来。也不要让它安静下去。"
        },
        reference: "《赎罪》布莱奥尼一生的写作都是一种不断变形的告白——但她永远说不出那个最核心的'对不起'；《罪与罚》拉斯柯尔尼科夫在整部小说里都在和告白冲动搏斗。",
        referenceEn: "Briony's lifetime of writing as an ever-mutating confession — yet she can never say the core 'I'm sorry' in Atonement; Raskolnikov wrestling with the confession urge throughout Crime and Punishment."
    },
    {
        id: "res_phantom_dialogue",
        name: "幽灵对话", nameEn: "Phantom Dialogue",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在脑子里不断和那个人对话——虽然他从来没有在另一头回应过。",
        defEn: "After the dust settles, you keep talking to that person in your head — though they never respond on the other end.",
        core: "A面：幽灵对话让那个人还活在你的内部世界里——你用想象维持了一段不存在的关系。这说明你还在乎。/ B面：但你对话的对象是你自己——你在替他说话。那个'他'已经完全是你的构造。关键张力：你在和他对话——还是在和自己对话的镜像说话？ | 实在余痕(Σ): 你又在脑子里问了他一句话。然后自己替他回答了。",
        coreEn: "A-side: Phantom dialogue keeps that person alive in your inner world — you use imagination to maintain a non-existent relationship. It means you still care. / B-side: But you're talking to yourself — you speak for them. That 'them' is entirely your construct. Key tension: Are you talking to them — or to a mirror of yourself? | Residuum: You asked them a question in your head again. Then answered it for them.",
        topology: "主体在内部空间创建了一个虚拟对话者——用自己的语料模拟对方的回应。对话在封闭系统内运转，永远无法获得外部验证。",
        topologyEn: "The subject creates a virtual interlocutor in internal space — simulating the other's responses with their own linguistic corpus. The dialogue runs within a closed system, never obtaining external verification.",
        directive: {
            bright: "他在心里又问了她一句话。然后自己替她回答了。他知道那不是她——是他构造的她。但这是他唯一还能和她说话的方式。让读者感到那种内部对话的温柔：他用想象维持着一段已经不存在的关系。那不是病——是他的心在替他的手做它做不到的事：握住一个不在的人。",
            dark: "他又和她说话了。在脑子里。她回答了。但那个'她'完全是他的构造——他在和自己的投影对话。他听到的不是她的声音——是他以为她会说的话。他越说越信，越信越真。让读者感到那种幽灵对话的恐怖：他在和一面镜子争吵，以为镜子里是别人。",
            tension: "他又在脑子里问了她一句话。他替她回答了。那个回答是她会说的吗？还是他想让她说的？让读者和他一起分不清那个内心的声音到底是记忆的忠实回放——还是他的愿望伪装成了她的声音。让那场对话继续。让两个声音都在他一个人的脑子里。让边界模糊。"
        },
        reference: "《入殓师》男主在心里不断和缺席的父亲对话——直到最后握住遗体的手才真正说出那句话；《她》西奥多和AI的对话本质上就是一个人和自己内心投射的幽灵对话。",
        referenceEn: "The protagonist endlessly talking to his absent father in his mind — until finally holding the body's hand in Departures; Theodore's conversation with the AI being essentially a phantom dialogue with his own inner projection in Her."
    },
    {
        id: "res_control_spiral",
        name: "控制螺旋", nameEn: "Control Spiral",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始疯狂地控制一切能控制的东西——计划、日程、饮食、规则。不能有意外。",
        defEn: "After the dust settles, you frantically control everything controllable — plans, schedules, diet, rules. No surprises allowed.",
        core: "A面：控制是你从混乱中抢回来的一小块秩序——你失去了最重要的东西，至少剩下的不能再乱。/ B面：但你控制的半径在不断扩大——越控制越焦虑，越焦虑越控制。你活在一张自己编织的网里。关键张力：你在创造秩序——还是在用秩序逃避那个你控制不了的东西？ | 实在余痕(Σ): 所有东西都摆好了。一切都在计划内。但你的手在发抖。",
        coreEn: "A-side: Control is a small piece of order you seized from chaos — you lost the most important thing; at least what remains can't fall apart too. / B-side: But your control radius keeps expanding — more control, more anxiety, more control. You live in a web you wove yourself. Key tension: Are you creating order — or using order to flee what you can't control? | Residuum: Everything is arranged. All according to plan. But your hands are shaking.",
        topology: "控制域的半径以加速度扩张——每一个被控制的变量产生新的不可控变量，驱动控制域进一步扩张。自增长的闭环回路。",
        topologyEn: "The control domain's radius expands at acceleration — each controlled variable produces new uncontrollable variables, driving further domain expansion. A self-growing closed-loop circuit.",
        directive: {
            bright: "所有东西都摆好了。计划、日程、每一顿饭的卡路里。他从混乱中抢回了一小块秩序。让读者感到那种控制的尊严：他失去了最重要的东西，至少剩下的不能再乱了。他的计划表是他的最后一道防线。每一个被安排好的细节都是一块他亲手放好的砖。",
            dark: "她控制了饮食。然后控制了作息。然后控制了社交。然后控制了呼吸的节奏。控制的半径在不断扩大——越控制越焦虑，越焦虑越控制。她活在一张自己编织的网里。让读者感到那种螺旋的窒息：她不是在创造秩序——她是在用秩序筑一座越来越小的牢房。",
            tension: "一切都在计划内。但他的手在发抖。让读者看着那双发抖的手：他在创造秩序——还是在用秩序逃避那个他控制不了的东西？他安排好了所有能安排的——但那个他真正害怕的东西不在任何清单上。让那双手继续抖着。让计划表继续完美着。让两者同时存在。"
        },
        reference: "《黑天鹅》妮娜对每一个动作的完美控制——控制螺旋最终吞噬了她自己；《寄生虫》朴社长一家对生活每个细节的精密安排——越控制越脆弱。",
        referenceEn: "Nina's perfect control of every movement — the control spiral eventually consuming her in Black Swan; the Park family's meticulous arrangement of every detail — the more control, the more fragile in Parasite."
    },
    {
        id: "res_anger_circuit",
        name: "怒气回路", nameEn: "Anger Circuit",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，一种持续低烧般的愤怒一直在你体内运转。它不爆发，但也从不消失。",
        defEn: "After the dust settles, a low-grade anger keeps running inside you. It never explodes, but never disappears.",
        core: "A面：愤怒说明你还没有接受——你认为发生的事情是不公正的。这种不屈服是有力量的。/ B面：但怒气已经变成了你的基调。你不是因为某件事生气——你只是一直在生气。它在慢慢烧你。关键张力：你的愤怒是一种反抗——还是一种你已经无法关闭的后台程序？ | 实在余痕(Σ): 没什么特别的事。但你就是烦。一直烦。说不出为什么。",
        coreEn: "A-side: Anger means you haven't accepted — you believe what happened was unjust. That refusal to submit has power. / B-side: But anger has become your baseline. You're not angry about something — you're just always angry. It's slowly burning you. Key tension: Is your anger resistance — or a background process you can no longer shut down? | Residuum: Nothing special happened. But you're irritated. Always. Can't say why.",
        topology: "愤怒信号在系统中维持恒温低功率运行——不触发爆发阈值但也不归零，成为一种持续的背景噪音占据全部带宽。",
        topologyEn: "Anger signal maintains constant low-power operation in the system — never triggering the explosion threshold but never zeroing, becoming persistent background noise occupying all bandwidth.",
        directive: {
            bright: "他一直在生气。不是因为某件事——是一种持续低烧般的存在。但那种怒气也是一种拒绝投降。让读者感到那种愤怒的力量：他还没有接受。他认为发生的事情是不公正的。那种不屈服有一种倔强的尊严——即使它在慢慢烧他。至少他还在燃烧。",
            dark: "没什么特别的事。但他就是烦。一直烦。说不出为什么。那种怒气已经不是因为什么了——它变成了他的基调。他看什么都有气。他对什么都不耐烦。让读者感到那种低温灼烧的恐怖：他不是在生气——他已经变成了愤怒本身。一台忘记了自己为什么在运转的机器。",
            tension: "他一直在生气。也许是因为世界欠他一个公正——也许那种怒气已经和原因脱钩了。让读者分不清那是反抗还是一种他已经无法关闭的后台程序。如果原因消失了，怒气会停吗？也许不会。也许它已经不需要原因了。让那种低烧继续烧着。不要给他退烧药。"
        },
        reference: "《三块广告牌》米尔德里德的愤怒已经脱离了具体目标——它变成了她唯一的运行系统；《老无所依》安东·奇格尔不是在生气，他就是愤怒本身——一台已经忘记了自己为什么在运转的机器。",
        referenceEn: "Mildred's anger detached from any specific target — it became her sole operating system in Three Billboards; Chigurh isn't angry, he is anger itself — a machine that forgot why it's running in No Country for Old Men."
    },
    {
        id: "res_accumulation_drive",
        name: "囤积驱力", nameEn: "Accumulation Drive",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始不断囤积某种东西——信息、物品、关系——好像永远不够。",
        defEn: "After the dust settles, you keep accumulating — information, objects, relationships — as if there's never enough.",
        core: "A面：囤积是你对匮乏的本能反应——你失去过太多，现在你确保手边永远有余量。安全感需要库存。/ B面：但'够'的标准在不断提高。你有了十个还想要第十一个。你填不满的不是仓库——是那个洞。关键张力：你在储备安全——还是在用数量麻痹那个'不够'的感觉？ | 实在余痕(Σ): 你又买了一个。加上之前的够了吗？不够。从来不够。",
        coreEn: "A-side: Accumulation is your instinctive response to scarcity — you've lost too much, now you ensure surplus is always at hand. Security requires inventory. / B-side: But the threshold of 'enough' keeps rising. Ten, then you want eleven. What you can't fill isn't the warehouse — it's the hole. Key tension: Are you stockpiling safety — or numbing the 'not enough' feeling with quantity? | Residuum: You bought another one. With the others, is it enough? No. Never enough.",
        topology: "匮乏感驱动的获取回路没有饱和阈值——每次获取后'够'的标准自动上移，保持恒定的不足态。",
        topologyEn: "The acquisition loop driven by scarcity has no saturation threshold — the 'enough' standard auto-elevates after each acquisition, maintaining a constant state of insufficiency.",
        directive: {
            bright: "他又买了一个。加上之前的，够了吗？他停顿了一秒——也许够了。让读者感到那种囤积背后的逻辑：他失去过太多，他的本能在确保手边永远有余量。那不是贪婪——是一个被匮乏烧过的人的自我保护。安全感需要库存。也许有一天他会学会相信'足够'。",
            dark: "她有了十个还想要第十一个。衣柜满了。储藏室满了。但她心里还是空的。她填不满的不是仓库——是那个洞。让读者感到那种积攒的绝望：她用数量来对抗一种永远不会消失的匮乏感。东西越多她越不安。因为东西越多就越证明那个洞有多大。",
            tension: "他又收集了一个。够了吗？他说不出来。也许永远不够——也许'不够'本身就是驱力。让读者看着他不断增长的收藏，分不清那是安全还是症状。他在储备安全——还是在用数量麻痹那个'永远不够'的声音？让那个声音继续说。让他继续收集。"
        },
        reference: "《公民凯恩》凯恩用一生的收藏填满了一整座宫殿——但他至死都在找那辆雪橇；《了不起的盖茨比》盖茨比的豪宅和派对只是他用来填满和黛西之间距离的物质。",
        referenceEn: "Kane filling an entire palace with a lifetime of collections — yet searching for that sled until death in Citizen Kane; Gatsby's mansion and parties merely material to fill the distance between him and Daisy in The Great Gatsby."
    },
    {
        id: "res_waiting_loop",
        name: "等待回路", nameEn: "Waiting Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你一直在等——等一个电话、一封信、一个回头。你知道不会来了。但你还在等。",
        defEn: "After the dust settles, you keep waiting — for a call, a letter, a look back. You know it won't come. But you wait.",
        core: "A面：等待是你对那段关系最后的忠诚——你还没有单方面宣布结束。只要你还在等，一切就还没有定论。/ B面：但等待已经变成了你逃避往前走的借口。你不是在等他——你是在用等待拒绝接受。关键张力：你在等他回来——还是在用'等'来避免承认他不会回来了？ | 实在余痕(Σ): 手机响了。不是他。你放下。继续等。",
        coreEn: "A-side: Waiting is your final loyalty to that relationship — you haven't unilaterally declared it over. As long as you wait, nothing is final. / B-side: But waiting has become your excuse not to move forward. You're not waiting for them — you're using waiting to refuse acceptance. Key tension: Are you waiting for their return — or using 'waiting' to avoid admitting they won't? | Residuum: Phone rang. Not them. You put it down. Kept waiting.",
        topology: "主体将自身锁定在接收模式——持续监听一个已经永久离线的信号源。等待占据了全部带宽，阻止任何新输入的接入。",
        topologyEn: "The subject locks itself in receive mode — continuously monitoring a signal source that has permanently gone offline. Waiting occupies all bandwidth, blocking any new input from connecting.",
        directive: {
            bright: "手机响了。不是他。她放下。继续等。让读者感到那种等待里的忠诚：她还没有单方面宣布结束。只要她还在等，一切就还没有定论。等待是她对那段关系最后的不放手。也许有一天她会放下手机——但今天她还在等。那种等待是爱的惯性。",
            dark: "她等了三年了。她知道不会来了。但她还在等。等待已经变成了她逃避往前走的借口——只要她还在'等'，她就不用面对'他不会回来了'这个事实。让读者感到那种等待的毒性：她不是在等他——她是在用等待把自己钉在原地。等待变成了她的麻醉剂。",
            tension: "手机响了。不是他。她放下了。但她没有关机。让读者和她一起停在那个瞬间：她在等他回来——还是在用'等'来避免承认他不会回来了？如果她关掉手机，她就自由了。但那种自由太重了。让手机开着。让她继续等。让那个'也许'悬在屏幕上。"
        },
        reference: "《花样年华》苏丽珍在2046号房间等一个永远不会来的人；《等待戈多》两个人等了一辈子——戈多从来没有来过，但他们也从来没有离开过。",
        referenceEn: "Su waiting in Room 2046 for someone who will never come in In the Mood for Love; two men waiting a lifetime — Godot never came, but they never left either in Waiting for Godot."
    },
];
