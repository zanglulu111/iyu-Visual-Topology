import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_C: LibraryItemDef[] = [
    // ============================================================
    // GROUP C. 死锁的齿轮 (The Deadlocked Gear) - 20 Items
    // 痕迹落点：那个扣住三界的东西，没有凝固成任何具体的符号，
    // 而是变成了一种停不下来的运动——
    // 一个永远在转的闭合回路，一种无法中止的重复。
    // ============================================================
    {
        id: "res_compulsive_check",
        name: "强迫性确认", nameEn: "Compulsive Verification",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始反复确认某件事——锁好了没、还在不在、是不是真的。停不下来。",
        defEn: "After the dust settles, you begin endlessly verifying something — is it locked, still there, really true. You can't stop.",
        core: "A面：反复确认是你对不确定性的最后抵抗——你在用行动堵住焦虑的缝隙。每确认一次就安心一秒。/ B面：但安心只持续一秒。然后你又要确认一次。你的确认在喂养它试图消灭的焦虑。关键张力：你确认的是事实——还是在重复一个永远无法完成的仪式？ | 结局回路 (Residuum): 你已经检查了三遍。你知道没问题。但手还是伸了出去。",
        coreEn: "A-side: Compulsive checking is your last stand against uncertainty — you use action to seal anxiety's gaps. Each check buys one second of peace. / B-side: But peace lasts only a second. Then you check again. Your verification feeds the anxiety it tries to kill. Key tension: Are you confirming reality — or repeating a ritual that can never be complete? | Residuum: You've checked three times. You know it's fine. But your hand reached out again.",
        reference: "《飞行家》霍华德·休斯反复洗手、反复检查门锁——驱力回路把天才困在了卫生间里；《火柴人》尼古拉斯·凯奇扮演的骗子反复开关门三次才能出门。",
        referenceEn: "Howard Hughes repeatedly washing hands and checking locks — the drive circuit trapping genius in the bathroom in The Aviator; Cage's con man opening and closing the door three times before leaving in Matchstick Men."
    },
    {
        id: "res_rehearsal_loop",
        name: "复盘执念", nameEn: "Rehearsal Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在脑子里一遍遍重演那个场景——如果当时换一种做法，一切会不会不同。",
        defEn: "After the dust settles, you replay that scene in your head endlessly — if you'd done it differently, would everything have changed.",
        core: "A面：你在试图找到那个分岔点——如果你能精确地定位错误发生的瞬间，你就还有改正的可能。复盘是拒绝放弃的表现。/ B面：但你在修改一个不存在的草稿。真实只发生了一次，它不接受编辑。关键张力：你是在分析——还是在用思维替代行动？ | 结局回路 (Residuum): 你又想到了那句话。如果当时说的是另一句。如果。如果。如果。",
        coreEn: "A-side: You're trying to locate the fork — if you can pinpoint the exact moment it went wrong, correction is still possible. Rehearsal is refusal to give up. / B-side: But you're editing a draft that doesn't exist. Reality happened once; it doesn't accept revisions. Key tension: Are you analyzing — or using thought to replace action? | Residuum: You thought of that sentence again. If you'd said something else. If. If. If.",
        reference: "《海边的曼彻斯特》李永远在脑中重演那个忘记挡火炉的夜晚；《赎罪》布莱奥尼用一生的写作反复改写那个她撒谎的午后。",
        referenceEn: "Lee endlessly replaying the night he forgot the fireplace guard in Manchester by the Sea; Briony rewriting the afternoon she lied through a lifetime of writing in Atonement."
    },
    {
        id: "res_overwork_engine",
        name: "过载运转", nameEn: "Overwork Engine",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始用不停地工作来填满所有的空隙。停下来就会想起来。所以不能停。",
        defEn: "After the dust settles, you fill every gap with relentless work. Stopping means remembering. So you don't stop.",
        core: "A面：你把痛苦转化成了生产力——每一份加班都是一道防线。忙碌让你没有时间崩溃。这是一种有效的自我管理。/ B面：但你不是在工作，你是在逃。工作是你发明的麻醉剂。一旦停下来，所有东西会一次性涌回来。关键张力：你是在建设什么——还是在躲避什么？ | 结局回路 (Residuum): 凌晨三点。你不困。你只是不敢关灯。",
        coreEn: "A-side: You converted pain into productivity — every overtime is a barricade. Busyness leaves no room to collapse. Effective self-management. / B-side: But you're not working; you're fleeing. Work is anesthesia you invented. Once you stop, everything floods back at once. Key tension: Are you building something — or hiding from something? | Residuum: 3 AM. You're not tired. You just don't dare turn off the light.",
        reference: "《穿普拉达的女王》米兰达用永不停歇的工作节奏把私人生活的废墟掩埋在日程表下；《华尔街之狼》贝尔福特用疯狂的交易节奏填满内心的荒芜。",
        referenceEn: "Miranda burying personal ruins under an unstoppable work schedule in The Devil Wears Prada; Belfort filling inner desolation with frantic trading pace in The Wolf of Wall Street."
    },
    {
        id: "res_apology_circuit",
        name: "道歉回路", nameEn: "Apology Circuit",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在心里不停地对那个人道歉。虽然他可能已经听不到了。",
        defEn: "After the dust settles, you keep apologizing to that person in your mind. Even though they may no longer hear.",
        core: "A面：道歉是你对他最后能做的事——虽然迟了，但你在用不断的忏悔证明你知道自己做了什么。/ B面：但道歉已经变成了自我安慰的仪式。你不是在赎罪，你是在用道歉喂养自己的内疚回路。关键张力：你渴望的是他的原谅——还是自己原谅自己？ | 结局回路 (Residuum): 对不起。对不起。对不起。他听不到。但你停不下来。",
        coreEn: "A-side: Apologizing is the last thing you can do for them — though late, your constant penance proves you know what you did. / B-side: But the apology became a self-soothing ritual. You're not atoning; you're feeding your own guilt circuit. Key tension: Do you crave their forgiveness — or to forgive yourself? | Residuum: I'm sorry. I'm sorry. I'm sorry. They can't hear. But you can't stop.",
        reference: "《海边的曼彻斯特》李对前妻说'我心里什么都没有了'——道歉回路已经空转到齿轮磨平；《入殓师》男主在父亲遗体前终于说出一辈子没说的那句话。",
        referenceEn: "Lee telling his ex-wife 'there's nothing there' — the apology circuit worn smooth in Manchester by the Sea; the protagonist finally saying the unsaid words before his father's body in Departures."
    },
    {
        id: "res_vigilance_lock",
        name: "警觉锁死", nameEn: "Vigilance Lock",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你再也无法放松下来。身体一直处于警戒状态，好像随时会有什么发生。",
        defEn: "After the dust settles, you can never relax again. Your body stays on alert, as if something could happen any moment.",
        core: "A面：你的警觉曾经救过你——在那个最危险的时刻，是你的过度敏感让你活了下来。你的身体学到了教训。/ B面：但危险已经过去了。你的身体不知道。它还在按战时标准运转，每一个门响都是警报。关键张力：你的警觉是在保护你——还是危险已经结束但你的身体拒绝停战？ | 结局回路 (Residuum): 门响了。没什么事。但你的心已经跳到了嗓子眼。",
        coreEn: "A-side: Your vigilance once saved you — at the most dangerous moment, your hypersensitivity kept you alive. Your body learned the lesson. / B-side: But the danger is over. Your body doesn't know. It's still running on wartime protocol; every door sound is an alarm. Key tension: Is your vigilance protecting you — or has danger ended but your body refuses ceasefire? | Residuum: The door clicked. Nothing happened. But your heart was already in your throat.",
        reference: "《拆弹部队》威廉回到超市站在麦片货架前——他的身体还在伊拉克；《钢琴家》斯皮尔曼战后多年仍然无法听到突然的声响。",
        referenceEn: "William standing before cereal shelves at the supermarket — his body is still in Iraq in The Hurt Locker; Szpilman unable to endure sudden sounds years after the war in The Pianist."
    },    {
        id: "res_search_compulsion",
        name: "搜索强迫", nameEn: "Search Compulsion",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你忍不住反复去查那个人的消息——社交媒体、朋友圈、任何碎片。",
        defEn: "After the dust settles, you compulsively check that person's traces — social media, mutual friends, any fragments.",
        core: "A面：搜索是你和那个人最后的连接方式——虽然触不到，但你还能知道他在继续。你没有完全失去他。/ B面：但每一次搜索都会再割你一刀。他过得好你痛，过得不好你也痛。关键张力：你在维持连接——还是在反复揭开伤口？ | 结局回路 (Residuum): 你又打开了那个页面。看了。放下手机。然后又拿起来了。",
        coreEn: "A-side: Searching is your last connection — though you can't reach them, you can still know they continue. You haven't fully lost them. / B-side: But every search cuts you again. Their happiness hurts; their unhappiness hurts too. Key tension: Maintaining connection — or repeatedly reopening the wound? | Residuum: You opened that page again. Looked. Put the phone down. Then picked it up again.",
        reference: "《社交网络》马克反复刷新前女友的主页——创造了Facebook的人被困在自己发明的搜索回路里；《她》西奥多不断查看萨曼莎留下的语音记录碎片。",
        referenceEn: "Mark refreshing his ex's page — Facebook's creator trapped in his own search loop in The Social Network; Theodore checking Samantha's voice log fragments in Her."
    },
    {
        id: "res_self_punishment",
        name: "自我惩罚回路", nameEn: "Self-Punishment Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始不断惩罚自己——用各种方式。好像只有受苦才能抵消什么。",
        defEn: "After the dust settles, you keep punishing yourself — in various ways. As if only suffering can offset something.",
        core: "A面：自我惩罚是你唯一剩下的公正——既然没人惩罚你，你自己来。你在用痛苦证明你不是无所谓的人。/ B面：但惩罚永远不够。因为你不知道'够'是什么标准。回路没有终点。关键张力：你是在赎罪——还是在用痛苦替代你不敢面对的另一种感受？ | 结局回路 (Residuum): 你又对自己做了那件事。然后恨自己做了。然后又做了。",
        coreEn: "A-side: Self-punishment is the only justice left — since no one punishes you, you do it yourself. You use pain to prove you care. / B-side: But punishment is never enough. Because you don't know what 'enough' means. The loop has no endpoint. Key tension: Are you atoning — or using pain to replace a feeling you dare not face? | Residuum: You did that thing to yourself again. Hated yourself. Then did it again.",
        reference: "《黑天鹅》妮娜在追求完美的过程中不断伤害自己的身体；《鞭打》安德鲁练鼓练到手流血——惩罚变成了驱力本身的燃料。",
        referenceEn: "Nina harming her body pursuing perfection in Black Swan; Andrew drumming until his hands bleed — punishment becoming the drive's fuel in Whiplash."
    },
    {
        id: "res_relationship_replay",
        name: "关系重演", nameEn: "Relationship Replay",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在新的关系里不断重复同一种模式——同一种人、同一种结局。",
        defEn: "After the dust settles, you repeat the same pattern in new relationships — same type, same ending.",
        core: "A面：你在试图把上一次搞砸的东西这一次做对——每段新关系都是一次重考，你在用新人修正旧答案。/ B面：但你不是在修正，你是在重复。你选的人、犯的错——结构一模一样。关键张力：你以为在找新的爱——但你只是在用不同的脸重演同一出戏？ | 结局回路 (Residuum): 又是同一种人。又是同一种痛。你说下次不会了。但你知道会。",
        coreEn: "A-side: You're trying to get right what you ruined last time — each new relationship is a retake, using new people to correct old answers. / B-side: But you're not correcting; you're repeating. Same people, same mistakes — identical structure. Key tension: You think you're finding new love — but are you restaging the same play with different faces? | Residuum: Same type. Same pain. You said never again. But you know you will.",
        reference: "《蓝色情人节》一对恋人从甜蜜走到崩坏——然后你意识到和你上一段一模一样；《革命之路》两个发誓不重蹈父母覆辙的人走上了同一条路。",
        referenceEn: "A couple going from sweetness to ruin — identical to your last one in Blue Valentine; two people swearing not to repeat their parents' mistakes walking the same path in Revolutionary Road."
    },
    {
        id: "res_speech_rehearsal",
        name: "语言排演", nameEn: "Speech Rehearsal",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在心里排练一段话——打算说的、应该说的、想说但永远说不出口的。",
        defEn: "After the dust settles, you rehearse a speech — what you plan to say, should have, want to but never will.",
        core: "A面：排练是你对那段未完成对话的尊重——你在寻找最精确的语言来配得上那个时刻的重量。/ B面：但你排练了一千遍也没说出口。排练本身变成了替代品——你用想象中的说取代了真实的说。关键张力：你还打算说吗——还是排练本身已经成了目的？ | 结局回路 (Residuum): 这次我要告诉他。这次一定。然后你又沉默了。",
        coreEn: "A-side: Rehearsal is respect for the unfinished conversation — seeking the most precise language for that moment's weight. / B-side: But you rehearsed a thousand times without speaking. Rehearsal became the substitute — imagined speech replaced real speech. Key tension: Do you still intend to speak — or has rehearsal become the goal? | Residuum: This time I'll tell them. Definitely. Then you fell silent again.",
        reference: "《迷失东京》结尾那句永远听不到的耳语——整部电影是一场说不出口的排练；《花样年华》周慕云对着树洞说出永远不会说给苏丽珍听的话。",
        referenceEn: "The forever-inaudible whisper — the entire film a rehearsal for the unspeakable in Lost in Translation; Chow whispering into a tree hole words he'll never say to Su in In the Mood for Love."
    },
    {
        id: "res_emotional_tide",
        name: "情绪潮汐", nameEn: "Emotional Tide",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，情绪像潮水一样来去——你以为好了，它又回来了。周而复始。",
        defEn: "After the dust settles, emotions ebb and flow like tides — you thought it was over, then it returns. Cyclical.",
        core: "A面：潮汐说明你还活着——只有有感觉的人才会有潮汐。每一次退潮都是一小段平静。/ B面：但每次涨潮都回到同一个高度。你以为在好转，其实只是在退潮。好转是假象，周期是真的。关键张力：你在愈合——还是只是在两次疼痛之间休息？ | 结局回路 (Residuum): 今天好多了。你刚这么想。然后傍晚又来了。",
        coreEn: "A-side: The tide means you're alive — only those who feel have tides. Each ebb is a brief calm. / B-side: But each high tide reaches the same height. You think you're improving; you're just ebbing. Recovery is illusion; the cycle is real. Key tension: Are you healing — or resting between pains? | Residuum: Today was better. You just thought that. Then evening came again.",
        reference: "《海边的曼彻斯特》李以为自己麻木了——偶遇前妻，一切像第一天涌回来；《蓝》朱丽叶以为丧夫之痛已过——一段音乐让她在游泳池里静止了。",
        referenceEn: "Lee thinking he was numb — running into his ex-wife, everything flooding back like day one in Manchester by the Sea; Julie thinking grief had passed — music freezing her still in the pool in Blue."
    },
    {
        id: "res_caretaker_loop",
        name: "照看者回路", nameEn: "Caretaker Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你不自觉地照顾所有人——好像只有在被需要的时候你才存在。",
        defEn: "After the dust settles, you compulsively take care of everyone — as if you only exist when needed.",
        core: "A面：照顾别人是你找到的最有尊严的活法——你的痛苦变成了别人的安慰。你把碎片拼成了一面盾牌。/ B面：但你用别人的需求填满了自己的空洞。一旦没人需要你，你就坍塌了。关键张力：你在给予——还是在用给予逃避面对自己？ | 结局回路 (Residuum): 所有人都说你太好了。但没人问过你好不好。",
        coreEn: "A-side: Caring for others is the most dignified way you found to live — your pain became others' comfort. You forged fragments into a shield. / B-side: But you filled your own void with others' needs. Once no one needs you, you collapse. Key tension: Are you giving — or using giving to avoid facing yourself? | Residuum: Everyone says you're so good. But no one asked if you're okay.",
        reference: "《东京物语》老母亲一辈子照顾所有人——唯独没有人照顾她；《三块广告牌》米尔德里德把全部能量投入替女儿讨公道——因为停下来就要面对空荡荡的家。",
        referenceEn: "The old mother caring for everyone her whole life — nobody caring for her in Tokyo Story; Mildred pouring all energy into justice for her daughter — because stopping means facing the empty house in Three Billboards."
    },
    {
        id: "res_numbness_cycle",
        name: "麻木周期", nameEn: "Numbness Cycle",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在'什么都感觉不到'和'突然感觉到一切'之间反复切换。没有中间地带。",
        defEn: "After the dust settles, you oscillate between feeling nothing and feeling everything. No middle ground.",
        core: "A面：麻木是你的紧急制动——当感受太多的时候，关掉感觉是你仅存的自保手段。/ B面：但麻木不是真的不痛——它只是延迟了付款。等它退去的时候，所有感受一次性涌回来，比之前更猛。关键张力：你在自我保护——还是在积攒一次更大的崩溃？ | 结局回路 (Residuum): 整个星期什么都不觉得。然后某个周日下午，毫无征兆地，全部回来了。",
        coreEn: "A-side: Numbness is your emergency brake — when feeling is too much, shutting down sensation is your last self-preservation. / B-side: But numbness isn't truly painless — it just defers payment. When it lifts, all feelings flood back at once, harder than before. Key tension: Are you self-protecting — or accumulating a bigger collapse? | Residuum: All week you felt nothing. Then one Sunday afternoon, without warning, everything returned.",
        reference: "《海边的曼彻斯特》李在大部分时间里是一台行走的冰箱——然后在派出所崩溃那一秒全部解冻；《革命之路》艾普丽尔在长期的情绪压抑后突然做出了不可挽回的决定。",
        referenceEn: "Lee as a walking refrigerator most of the time — then everything defrosts in one second at the police station in Manchester by the Sea; April making an irrevocable decision after prolonged emotional suppression in Revolutionary Road."
    },
    {
        id: "res_proximity_avoidance",
        name: "趋避震荡", nameEn: "Approach-Avoidance Oscillation",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在'想靠近'和'害怕靠近'之间反复拉扯。远了想念，近了恐惧。",
        defEn: "After the dust settles, you oscillate between wanting closeness and fearing it. Far feels lonely, near feels terrifying.",
        core: "A面：你还有想靠近的冲动——说明你没有完全关闭自己。你还相信连接是值得的。/ B面：但每次靠近到一定距离你就逃走了。你在安全距离和渴望之间做永远的钟摆。关键张力：你怕的是被拒绝——还是怕被接受之后再次失去？ | 结局回路 (Residuum): 你走近了一步。然后退了两步。然后又走近了一步。",
        coreEn: "A-side: You still have the impulse to approach — meaning you haven't fully shut down. You still believe connection is worthwhile. / B-side: But every time you get close enough, you flee. You're a permanent pendulum between safety and desire. Key tension: Do you fear rejection — or being accepted and then losing again? | Residuum: You stepped one step closer. Then two steps back. Then one step closer again.",
        reference: "《花样年华》周慕云和苏丽珍在楼梯间擦肩而过无数次——永远差最后一步；《迷失东京》两个人在酒店里无限靠近又无限退缩的微妙舞蹈。",
        referenceEn: "Chow and Su passing each other countless times on the staircase — always one step short in In the Mood for Love; two people infinitely approaching and retreating in the hotel in Lost in Translation."
    },
    {
        id: "res_savior_drive",
        name: "拯救驱力", nameEn: "Savior Drive",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始不断去'拯救'别人——好像拯救了他们就等于拯救了当初的自己。",
        defEn: "After the dust settles, you compulsively 'save' others — as if saving them equals saving the self you once were.",
        core: "A面：你把自己没被拯救的痛苦转化成了拯救别人的能力——你不想让任何人经历你经历过的事。/ B面：但你拯救的不是他们，是过去的自己。你在别人身上反复修复一个已经无法修复的人。关键张力：你在帮他们——还是在用他们完成你自己未完成的剧本？ | 结局回路 (Residuum): 你又帮了一个人。他好了。但你的那个洞还在。",
        coreEn: "A-side: You converted the pain of not being saved into the ability to save others — you don't want anyone to go through what you did. / B-side: But you're not saving them; you're saving your past self. You repeatedly repair an irreparable person through others. Key tension: Are you helping them — or using them to complete your own unfinished script? | Residuum: You saved another one. They're fine now. But your hole is still there.",
        reference: "《辛德勒的名单》辛德勒在最后崩溃地说'我还能再多救一个'——拯救回路在终点仍然停不下来；《出租车司机》特拉维斯把拯救雏妓当成了自我救赎——但枪放下之后他还是那个人。",
        referenceEn: "Schindler collapsing at the end saying 'I could have saved one more' — the savior loop unable to stop even at the finish in Schindler's List; Travis treating the rescue of a child prostitute as self-redemption — but after the gun he's still the same man in Taxi Driver."
    },
    {
        id: "res_confession_urge",
        name: "告白冲动", nameEn: "Confession Urge",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你有一种不断想把真相说出来的冲动——不管对谁说、在哪里说。",
        defEn: "After the dust settles, you feel an urge to tell the truth — to anyone, anywhere. It wants to come out.",
        core: "A面：告白冲动说明你的良知还在工作——真相在你体内产生了压力，它需要一个出口。这种不安是正直的证据。/ B面：但你想说出来不是为了对方——是为了卸下你自己的重量。告白是一种转嫁，你把你的负担变成了别人的。关键张力：你想说出真相——是为了诚实，还是为了让自己好受？ | 结局回路 (Residuum): 你张了张嘴。又闭上了。真相在嘴边转了一圈又咽了回去。",
        coreEn: "A-side: The confession urge means your conscience is working — truth has built pressure inside, needing an outlet. That unease is proof of integrity. / B-side: But you want to speak not for the other — but to unload your own weight. Confession is transference; you turn your burden into theirs. Key tension: Do you want truth — for honesty, or to feel better? | Residuum: You opened your mouth. Closed it. The truth circled your lips and was swallowed back.",
        reference: "《赎罪》布莱奥尼一生的写作都是一种不断变形的告白——但她永远说不出那个最核心的'对不起'；《罪与罚》拉斯柯尔尼科夫在整部小说里都在和告白冲动搏斗。",
        referenceEn: "Briony's lifetime of writing as an ever-mutating confession — yet she can never say the core 'I'm sorry' in Atonement; Raskolnikov wrestling with the confession urge throughout Crime and Punishment."
    },
    {
        id: "res_phantom_dialogue",
        name: "幽灵对话", nameEn: "Phantom Dialogue",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你在脑子里不断和那个人对话——虽然他从来没有在另一头回应过。",
        defEn: "After the dust settles, you keep talking to that person in your head — though they never respond on the other end.",
        core: "A面：幽灵对话让那个人还活在你的内部世界里——你用想象维持了一段不存在的关系。这说明你还在乎。/ B面：但你对话的对象是你自己——你在替他说话。那个'他'已经完全是你的构造。关键张力：你在和他对话——还是在和自己对话的镜像说话？ | 结局回路 (Residuum): 你又在脑子里问了他一句话。然后自己替他回答了。",
        coreEn: "A-side: Phantom dialogue keeps that person alive in your inner world — you use imagination to maintain a non-existent relationship. It means you still care. / B-side: But you're talking to yourself — you speak for them. That 'them' is entirely your construct. Key tension: Are you talking to them — or to a mirror of yourself? | Residuum: You asked them a question in your head again. Then answered it for them.",
        reference: "《入殓师》男主在心里不断和缺席的父亲对话——直到最后握住遗体的手才真正说出那句话；《她》西奥多和AI的对话本质上就是一个人和自己内心投射的幽灵对话。",
        referenceEn: "The protagonist endlessly talking to his absent father in his mind — until finally holding the body's hand in Departures; Theodore's conversation with the AI being essentially a phantom dialogue with his own inner projection in Her."
    },
    {
        id: "res_control_spiral",
        name: "控制螺旋", nameEn: "Control Spiral",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始疯狂地控制一切能控制的东西——计划、日程、饮食、规则。不能有意外。",
        defEn: "After the dust settles, you frantically control everything controllable — plans, schedules, diet, rules. No surprises allowed.",
        core: "A面：控制是你从混乱中抢回来的一小块秩序——你失去了最重要的东西，至少剩下的不能再乱。/ B面：但你控制的半径在不断扩大——越控制越焦虑，越焦虑越控制。你活在一张自己编织的网里。关键张力：你在创造秩序——还是在用秩序逃避那个你控制不了的东西？ | 结局回路 (Residuum): 所有东西都摆好了。一切都在计划内。但你的手在发抖。",
        coreEn: "A-side: Control is a small piece of order you seized from chaos — you lost the most important thing; at least what remains can't fall apart too. / B-side: But your control radius keeps expanding — more control, more anxiety, more control. You live in a web you wove yourself. Key tension: Are you creating order — or using order to flee what you can't control? | Residuum: Everything is arranged. All according to plan. But your hands are shaking.",
        reference: "《黑天鹅》妮娜对每一个动作的完美控制——控制螺旋最终吞噬了她自己；《寄生虫》朴社长一家对生活每个细节的精密安排——越控制越脆弱。",
        referenceEn: "Nina's perfect control of every movement — the control spiral eventually consuming her in Black Swan; the Park family's meticulous arrangement of every detail — the more control, the more fragile in Parasite."
    },
    {
        id: "res_anger_circuit",
        name: "怒气回路", nameEn: "Anger Circuit",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，一种持续低烧般的愤怒一直在你体内运转。它不爆发，但也从不消失。",
        defEn: "After the dust settles, a low-grade anger keeps running inside you. It never explodes, but never disappears.",
        core: "A面：愤怒说明你还没有接受——你认为发生的事情是不公正的。这种不屈服是有力量的。/ B面：但怒气已经变成了你的基调。你不是因为某件事生气——你只是一直在生气。它在慢慢烧你。关键张力：你的愤怒是一种反抗——还是一种你已经无法关闭的后台程序？ | 结局回路 (Residuum): 没什么特别的事。但你就是烦。一直烦。说不出为什么。",
        coreEn: "A-side: Anger means you haven't accepted — you believe what happened was unjust. That refusal to submit has power. / B-side: But anger has become your baseline. You're not angry about something — you're just always angry. It's slowly burning you. Key tension: Is your anger resistance — or a background process you can no longer shut down? | Residuum: Nothing special happened. But you're irritated. Always. Can't say why.",
        reference: "《三块广告牌》米尔德里德的愤怒已经脱离了具体目标——它变成了她唯一的运行系统；《老无所依》安东·奇格尔不是在生气，他就是愤怒本身——一台已经忘记了自己为什么在运转的机器。",
        referenceEn: "Mildred's anger detached from any specific target — it became her sole operating system in Three Billboards; Chigurh isn't angry, he is anger itself — a machine that forgot why it's running in No Country for Old Men."
    },
    {
        id: "res_accumulation_drive",
        name: "囤积驱力", nameEn: "Accumulation Drive",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你开始不断囤积某种东西——信息、物品、关系——好像永远不够。",
        defEn: "After the dust settles, you keep accumulating — information, objects, relationships — as if there's never enough.",
        core: "A面：囤积是你对匮乏的本能反应——你失去过太多，现在你确保手边永远有余量。安全感需要库存。/ B面：但'够'的标准在不断提高。你有了十个还想要第十一个。你填不满的不是仓库——是那个洞。关键张力：你在储备安全——还是在用数量麻痹那个'不够'的感觉？ | 结局回路 (Residuum): 你又买了一个。加上之前的够了吗？不够。从来不够。",
        coreEn: "A-side: Accumulation is your instinctive response to scarcity — you've lost too much, now you ensure surplus is always at hand. Security requires inventory. / B-side: But the threshold of 'enough' keeps rising. Ten, then you want eleven. What you can't fill isn't the warehouse — it's the hole. Key tension: Are you stockpiling safety — or numbing the 'not enough' feeling with quantity? | Residuum: You bought another one. With the others, is it enough? No. Never enough.",
        reference: "《公民凯恩》凯恩用一生的收藏填满了一整座宫殿——但他至死都在找那辆雪橇；《了不起的盖茨比》盖茨比的豪宅和派对只是他用来填满和黛西之间距离的物质。",
        referenceEn: "Kane filling an entire palace with a lifetime of collections — yet searching for that sled until death in Citizen Kane; Gatsby's mansion and parties merely material to fill the distance between him and Daisy in The Great Gatsby."
    },
    {
        id: "res_waiting_loop",
        name: "等待回路", nameEn: "Waiting Loop",
        group: "C. 死锁的齿轮", groupEn: "The Deadlocked Gear",
        def: "尘埃落定后，你一直在等——等一个电话、一封信、一个回头。你知道不会来了。但你还在等。",
        defEn: "After the dust settles, you keep waiting — for a call, a letter, a look back. You know it won't come. But you wait.",
        core: "A面：等待是你对那段关系最后的忠诚——你还没有单方面宣布结束。只要你还在等，一切就还没有定论。/ B面：但等待已经变成了你逃避往前走的借口。你不是在等他——你是在用等待拒绝接受。关键张力：你在等他回来——还是在用'等'来避免承认他不会回来了？ | 结局回路 (Residuum): 手机响了。不是他。你放下。继续等。",
        coreEn: "A-side: Waiting is your final loyalty to that relationship — you haven't unilaterally declared it over. As long as you wait, nothing is final. / B-side: But waiting has become your excuse not to move forward. You're not waiting for them — you're using waiting to refuse acceptance. Key tension: Are you waiting for their return — or using 'waiting' to avoid admitting they won't? | Residuum: Phone rang. Not them. You put it down. Kept waiting.",
        reference: "《花样年华》苏丽珍在2046号房间等一个永远不会来的人；《等待戈多》两个人等了一辈子——戈多从来没有来过，但他们也从来没有离开过。",
        referenceEn: "Su waiting in Room 2046 for someone who will never come in In the Mood for Love; two men waiting a lifetime — Godot never came, but they never left either in Waiting for Godot."
    },
];
