import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 异化的倒影 (The Alienated Reflection) - 20 Items
    // 痕迹落点：那个扣住三界的东西，没有凝固成符号，也没有变成重复行为，
    // 而是改变了主体的拓扑结构本身——
    // 你还是你，但你的形状已经不一样了。
    // ============================================================
    {
        id: "res_trust_collapse",
        name: "信任坍塌", nameEn: "Trust Collapse",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你发现自己再也无法像以前那样信任任何人了。不是不想，是做不到了。",
        defEn: "After the dust settles, you find you can never trust anyone the way you once did. Not unwilling — unable.",
        core: "A面：你的不信任是经验教你的——你被骗过，你的警觉是有理由的。你用怀疑保护了自己。/ B面：但你同时也把所有可能的真诚关在了门外。你的防线保护了你，也隔绝了你。关键张力：你变得更聪明了——还是更孤独了？ | 圣状余痕(Σ): 他对你很好。你知道。但你的第一反应是：他想要什么？",
        coreEn: "A-side: Your distrust is experience's lesson — you were deceived, your vigilance is justified. Suspicion protected you. / B-side: But you also locked out all possible sincerity. Your defense protected and isolated you. Key tension: Did you become wiser — or lonelier? | Residuum: They're kind to you. You know. But your first thought is: what do they want?",
        topology: "内部的开放通道被永久封闭：曾经向外敞开的信任拓扑折叠成一个闭合曲面，所有入口都变成了单向出口。",
        topologyEn: "The internal open channel sealed permanently: the once-outward-facing trust topology folded into a closed surface where every entrance became a one-way exit.",
        directive: {
            bright: "他看人的眼神变了。不是冷，是清醒。他能在三秒内看穿一个人的意图，像一台被训练过的扫描仪。让读者感受到这种清醒的力量——他再也不会被骗了，他的判断力是用真实的伤疤换来的。这种精准让他安全。",
            dark: "他坐在对面，对方在说真心话。他知道对方是认真的。但他的身体已经自动启动了防御程序——心跳平稳，表情礼貌，内心的门关得严严实实。让读者感到那种无法关闭的警报声：世界上所有的善意都在敲他的门，但门已经从里面焊死了。",
            tension: "他看着对面那个人。那个人对他很好，没有理由怀疑。他也知道。但他的手没有伸出去。让读者同时看到两样东西：一个因为聪明而安全的人，和一个因为安全而永远孤独的人。不要告诉读者哪个更真。让他们自己坐在那个位置上。"
        },
        reference: "《老无所依》整部电影之后你会像那个老警长一样——再也不相信世界是讲道理的；《动物农庄》经历过革命的动物们再也无法相信任何承诺。",
        referenceEn: "After the whole film you'll be like the old sheriff — never believing the world is reasonable again in No Country for Old Men; animals who lived through revolution never believing any promise again in Animal Farm."
    },
    {
        id: "res_smile_changed",
        name: "笑容变质", nameEn: "The Changed Smile",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你还会笑。但你的笑和以前不一样了。你自己知道。",
        defEn: "After the dust settles, you still smile. But your smile is different now. You know it.",
        core: "A面：你的笑里多了一层东西——经历过的人才有的质感。它不再天真，但更真实。/ B面：但你也笑不回去了。那种来自肚子里的、毫无防备的笑，你再也找不到了。你的笑变成了一种表演。关键张力：你的笑更有深度了——还是你永远失去了那种纯粹的快乐？ | 圣状余痕(Σ): 有人说你笑起来不一样了。你说没有。但你知道有。",
        coreEn: "A-side: Your smile gained a layer — a texture only the experienced have. No longer naive, but more real. / B-side: But you can't smile back to how it was. That belly-deep, unguarded laugh — you can't find it anymore. Your smile became a performance. Key tension: Is your smile deeper — or did you permanently lose pure joy? | Residuum: Someone said your smile is different. You said no. But you know it is.",
        topology: "表情的底层映射被重写：笑容从内部直通外部的单纯管道，变成了一个带有折叠层的莫比乌斯面——快乐和苦涩永远贴在同一条曲面的正反两面。",
        topologyEn: "The deep mapping of expression was rewritten: the smile changed from a simple pipe connecting inside to outside into a Möbius surface with a fold layer — joy and bitterness forever bonded on opposite sides of the same strip.",
        directive: {
            bright: "她笑起来的时候眼角有一种光——不是天真的光，是经历过暴风雨之后黎明的那种光。让读者看到她的笑里有重量，有质感，像一瓶陈了很久的酒。这种笑比任何灿烂的大笑都更打动人——因为它是真的。",
            dark: "她在笑。嘴角的弧度完美。但如果你仔细看她的眼睛，那里面什么都没有。她的笑成了一个面具，戴得太久已经长在了脸上。让读者感到不安：她已经分不清自己是在笑还是在表演笑了。那种从肚子里冒出来的、毫无防备的傻笑，她再也找不到了。",
            tension: "她笑了。旁边的人也跟着笑了。但有一个人看着她，愣了一下。那个人说不出哪里不对——只是觉得她的笑比以前多了一层什么东西。让读者悬在那个瞬间：那一层是深度，还是伤疤？不要回答。让笑容自己说话。"
        },
        reference: "《活着》福贵在片尾的笑——你知道那不是快乐，是活下来的人特有的苦味弧度；《小丑》亚瑟那个不自主的笑——一个被现实扭曲到连笑都变了形的人。",
        referenceEn: "Fugui's smile at the end — not happiness, but the bitter curve only survivors have in To Live; Arthur's involuntary laugh — a man whose smile was deformed by reality in Joker."
    },
    {
        id: "res_intimacy_ceiling",
        name: "亲密天花板", nameEn: "Intimacy Ceiling",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你发现自己和任何人的亲密度都到了某个点就上不去了。好像有一堵透明的墙。",
        defEn: "After the dust settles, intimacy with anyone hits a ceiling you can't break through. Like an invisible wall.",
        core: "A面：那堵墙保护了你——你不会再因为太近而被伤到。你学会了保持安全距离。/ B面：但安全距离也是孤独的距离。你永远只能让人走到这里——不能再近了。关键张力：那堵墙是你的铠甲——还是你的牢房？ | 圣状余痕(Σ): 他想再近一步。你退了。不是不喜欢。是不能。",
        coreEn: "A-side: That wall protects you — you'll never be hurt by closeness again. You learned safe distance. / B-side: But safe distance is also lonely distance. You can only let anyone this close — no further. Key tension: Is that wall your armor — or your cell? | Residuum: They wanted one step closer. You pulled back. Not dislike. Inability.",
        topology: "亲密的度量空间被截断：主体周围生成了一个固定半径的不可穿越球面，他人只能渐近趋近但永远无法抵达。",
        topologyEn: "The metric space of intimacy was truncated: a fixed-radius impenetrable sphere formed around the subject — others can asymptotically approach but never arrive.",
        directive: {
            bright: "他在人群中很自在。他微笑，聊天，甚至会拥抱。但如果你仔细观察，他和每个人之间都保持着同一个精确的距离——不冷不热，刚好够舒适。让读者感受到这种控制的优雅：他不会再被任何人伤到了，因为没有人能走到那么近。",
            dark: "她想靠近他。她往前走了一步。他往后退了一步。不是讨厌——他的眼睛里有温度。但他的身体像装了一个自动弹开的弹簧。让读者感受那堵透明的墙：他被关在里面，她被挡在外面，两个人隔着一臂的距离互相看着，都知道再近一厘米就会有什么碎掉。",
            tension: "他们坐在沙发上。之间隔了一个靠垫的距离。她没有移过去。他也没有。那个距离不大不小，刚好够两个人同时觉得安全和悲伤。让读者待在那个靠垫的宽度里——那是铠甲还是牢房？不要说。让那个距离自己呼吸。"
        },
        reference: "《海边的曼彻斯特》李对每一个试图靠近他的人都保持着同一个距离——不冷不热，刚好让人进不来；《在切瑟尔海滩上》弗洛伦斯对亲密接触的恐惧毁掉了她唯一真实的爱。",
        referenceEn: "Lee maintaining identical distance from everyone who tries to get close — neither cold nor warm, just enough to keep them out in Manchester by the Sea; Florence's fear of intimacy destroying her only real love in On Chesil Beach."
    },
    {
        id: "res_value_inversion",
        name: "价值反转", nameEn: "Value Inversion",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你以前觉得重要的东西突然不重要了，以前不在意的东西变得无比重要。",
        defEn: "After the dust settles, what once mattered suddenly doesn't, and what you once ignored now matters immensely.",
        core: "A面：你的优先级被重写了——你看到了什么才是真正重要的。你不再为虚假的东西浪费时间。/ B面：但你也可能在矫枉过正——你把旧世界全部否定了，新的也未必是对的。关键张力：你看清了——还是你只是换了一种偏见？ | 圣状余痕(Σ): 以前拼命追的东西摆在面前。你看着它。什么感觉都没有了。",
        coreEn: "A-side: Your priorities were rewritten — you see what truly matters. No more wasting time on false things. / B-side: But you may be overcorrecting — you rejected the old world entirely, and the new isn't necessarily right. Key tension: Did you see clearly — or just switch biases? | Residuum: The thing you once chased desperately sits before you. You look at it. Feel nothing.",
        topology: "价值的坐标轴发生了180度翻转：原来的引力中心变成了排斥点，原来的边缘变成了新的中心——整个欲望地形倒置了。",
        topologyEn: "The value coordinate axis flipped 180 degrees: the former gravitational center became a repulsion point, the former periphery became the new center — the entire desire-terrain inverted.",
        directive: {
            bright: "他站在以前拼命想要的东西面前。升职信、大房子、所有人的羡慕。他看着这些，像看一堆塑料玩具。然后他转身走了。让读者感受到那种轻盈——他终于知道什么才是重要的了。那种清醒带着一种解脱的重量。",
            dark: "他把旧世界全部推翻了。以前相信的、追求的、珍惜的——全部清零。但新的地图上什么都没标。他站在一片空白里，以为自己看清了，其实只是换了一种失明。让读者感到那种悬空的恐惧：他否定了一切，但没有找到任何东西来替代。",
            tension: "他曾经为之拼命的东西摆在桌上。他拿起来看了看，又放下了。他的表情不是鄙视，也不是怀念——是一种更复杂的东西，像一个人看着自己旧皮肤的蜕壳。让读者分不清这是成长还是丧失。他看清了吗？还是他只是累了？把两种可能同时放在读者手里。"
        },
        reference: "《美国丽人》莱斯特在中年危机后觉得职业和体面全是幻觉——但他拥抱的'自由'也不过是另一种幻象；《遁入虚无》男主死后回看一生，发现所有的追求都在死亡面前等值为零。",
        referenceEn: "Lester finding career and respectability illusory after his midlife crisis — but the 'freedom' he embraces is another illusion in American Beauty; the protagonist reviewing life after death, finding all pursuits equally zero before death in Enter the Void."
    },
    {
        id: "res_language_thinning",
        name: "语言瘦化", nameEn: "Language Thinning",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你的话变少了。不是没话说——是你觉得大部分话都没有说的必要了。",
        defEn: "After the dust settles, you speak less. Not speechless — you just feel most words are unnecessary now.",
        core: "A面：你的沉默是一种精炼——经历过的人不需要那么多词来装饰。你的每个字都比以前重。/ B面：但你也在慢慢退出和世界的交流。你的沉默可能不是从容——是你已经放弃了被理解。关键张力：你是变得更深了——还是你在慢慢消失？ | 圣状余痕(Σ): 他问你怎么了。你说没事。你确实觉得'没事'已经够了。",
        coreEn: "A-side: Your silence is distillation — the experienced don't need many words to decorate. Each word weighs more. / B-side: But you're also slowly withdrawing from communication. Your silence may not be composure — it may be giving up on being understood. Key tension: Are you becoming deeper — or slowly disappearing? | Residuum: They asked what's wrong. You said nothing. You genuinely felt 'nothing' was enough.",
        topology: "语言的输出通道持续收窄：符号系统从宽频带退化为窄频——能通过的意义越来越少，但每个通过的词都被压缩到了极高的密度。",
        topologyEn: "The language output channel continuously narrowed: the symbolic system degraded from wideband to narrowband — fewer meanings pass through, but each word that does is compressed to extreme density.",
        directive: {
            bright: "他说话越来越少了。但每次开口，整个房间都安静下来。他的沉默不是空洞——是浓缩。像一个老猎人，不浪费一颗子弹。让读者感受到那种沉默的分量：他的每个字都比别人的一段话更重。经历教会了他，大部分话都不需要说。",
            dark: "他不说话了。不是找不到词——是他已经放弃了被理解这件事。他坐在人群里，听着别人说话，嘴巴闭着，像一扇慢慢生锈的门。让读者感到那种缓慢的消失：他不是变沉默了，他是在从语言世界里撤退，一个词一个词地退出人类的对话。",
            tension: "他说'没事'。就两个字。对面的人不知道那两个字里装了多少东西——可能是一整个宇宙的疲倦，也可能真的就是没事。让读者悬在那两个字上面。他是精炼了，还是放弃了？他的沉默是深度的证明，还是消失的开始？不要替他回答。"
        },
        reference: "《老人与海》圣地亚哥一个人在海上几乎不说话——但他的沉默比任何台词都重；《入殓师》男主越来越少说话，用手和眼神完成了语言做不到的事。",
        referenceEn: "Santiago barely speaking alone at sea — but his silence weighs more than any dialogue in The Old Man and the Sea; the protagonist speaking less, accomplishing with hands and eyes what language couldn't in Departures."
    },    {
        id: "res_empathy_shift",
        name: "共情阈值位移", nameEn: "Empathy Threshold Shift",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你对别人痛苦的感受方式永远变了——要么过敏，要么麻木。没有中间挡。",
        defEn: "After the dust settles, how you feel others' pain changed forever — either hypersensitive or numb. No middle gear.",
        core: "A面：你的共情被重新校准了——你比任何人都懂痛苦是什么，所以你对别人的痛有更精确的感受力。/ B面：但精确也会累。你要么对一切痛苦过敏，要么干脆关掉了那个频道。关键张力：你的共情是变深了——还是变形了？ | 圣状余痕(Σ): 有人在哭。你感受到了一切。或者什么也没感受到。没有中间。",
        coreEn: "A-side: Your empathy was recalibrated — you understand suffering better than anyone, giving you more precise sensitivity to others' pain. / B-side: But precision is exhausting. You're either allergic to all suffering or shut that channel entirely. Key tension: Did your empathy deepen — or deform? | Residuum: Someone is crying. You felt everything. Or nothing. No middle.",
        topology: "共情的增益旋钮被卡在两个极端之间——要么全开（过敏），要么全关（麻木），中间的渐变区域被创伤焊死了。",
        topologyEn: "The empathy gain knob is jammed between two extremes — either fully open (hypersensitive) or fully shut (numb), the gradient zone between them welded shut by trauma.",
        directive: {
            bright: "她在医院走廊里看到一个陌生人在哭。她的身体立刻起了反应——不是同情，是一种精确到毫米的共振。她知道那种哭是什么味道的。让读者感受到她的共情是一种被磨过的仪器——比任何人都精准，因为她亲自校准过。她的敏感不是脆弱，是一种付过学费的超能力。",
            dark: "有人在他面前崩溃了。他看着。什么都感觉不到。不是冷血——他的共情线路已经烧穿了。他能完美地描述对方的痛苦，用最精准的词。但他的身体没有任何反应。他变成了一台诊断机器——能识别所有症状，但已经不会疼了。让读者感到这种麻木比冷酷更可怕。",
            tension: "有人在哭。她感受到了一切——或者什么也没感受到。她自己分不清。让读者悬在那个瞬间：她的眼眶湿了是因为共情，还是因为肌肉记忆？她的共情是变深了还是变形了？不要给答案。让她的眼泪和她的干燥同时存在。"
        },
        reference: "《辛德勒的名单》辛德勒从冷漠商人变成了一个连一条生命都无法放弃的人——共情阈值被永久改写；《超脱》男教师的共情系统已经烧穿了——他什么都懂，但什么都感受不到了。",
        referenceEn: "Schindler transforming from cold profiteer to someone unable to abandon a single life — empathy threshold permanently rewritten in Schindler's List; the teacher's empathy system burned out — understanding everything, feeling nothing in Detachment."
    },
    {
        id: "res_time_distortion",
        name: "时间感变形", nameEn: "Time Distortion",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你对时间的感知永久地改变了——有些时刻无限长，有些年份一闪而过。",
        defEn: "After the dust settles, your perception of time is permanently altered — some moments stretch forever, some years flash by.",
        core: "A面：你的时间感被那件事重新校准了——你知道了一秒钟可以装下一辈子的重量。你比别人更懂时间的密度。/ B面：但你也活在一个扭曲的时钟里。该快的慢，该慢的快。你和别人不在同一个时间流速里了。关键张力：你感知到了更深的时间——还是你的时间坏了？ | 圣状余痕(Σ): 五年过去了。感觉像五天。又像五十年。",
        coreEn: "A-side: Your time-sense was recalibrated by that event — you know a single second can hold a lifetime's weight. You understand time's density better than anyone. / B-side: But you also live in a warped clock. What should be fast is slow; what should be slow, fast. You're no longer in the same timeflow as others. Key tension: Did you perceive deeper time — or is your clock broken? | Residuum: Five years passed. Feels like five days. Also like fifty years.",
        topology: "时间的度量标尺被创伤事件弯曲——某些坐标点附近时间密度趋向无穷，其余区域被压缩至近零。主体活在一个非均匀的时间流形中。",
        topologyEn: "The metric ruler of time is warped by the traumatic event — near certain coordinates time-density approaches infinity while remaining zones compress to near-zero. The subject inhabits a non-uniform temporal manifold.",
        directive: {
            bright: "他知道一秒钟可以装下一辈子的重量。别人觉得'就那么一瞬间'的事情，他知道那一瞬间有多厚。让读者感到他对时间的理解比任何人都深——他的钟不是坏了，是被重新校准到了一种更真实的刻度。他比所有人都更懂密度。",
            dark: "五年过去了。他觉得像五天。又像五十年。他的时钟被那件事弄坏了——该快的地方慢得像糖浆，该慢的地方一闪就没了。他和所有人都不在同一个时间流速里了。他坐在生日聚会上，感觉自己隔着一层厚玻璃看别人的时间在正常流动。他的时间是弯的。",
            tension: "五年了。他说不清这五年是长还是短。让读者感受到那种时间的畸变——有些下午长得像一辈子，有些年份薄得像一张纸。他的时钟是修好了还是永远坏了？也许两者都是。也许时间本身就没有一个'正确'的速度。让那种畸变悬浮着。"
        },
        reference: "《降临》路易斯学会了外星语言之后时间变成了非线性的——她同时活在过去现在和未来；《星际穿越》库珀在黑洞附近的一小时等于地球上的七年——他回来时女儿已经比他老了。",
        referenceEn: "Louise's time becoming non-linear after learning the alien language — living simultaneously in past, present, and future in Arrival; Cooper's one hour near the black hole equaling seven Earth years — his daughter older than him upon return in Interstellar."
    },
    {
        id: "res_humor_mutation",
        name: "幽默变质", nameEn: "Humor Mutation",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你的幽默感变了——更黑、更冷、或者干脆消失了。别人笑的东西你觉得不好笑了。",
        defEn: "After the dust settles, your humor changed — darker, colder, or simply gone. What others laugh at no longer amuses you.",
        core: "A面：你的幽默里多了一根刺——你能看到别人看不到的荒诞。你笑的东西更真实了，只是更少人能一起笑。/ B面：但你也可能失去了笑的能力。不是不想笑——是你的幽默器官被改造了，旧频率接收不到了。关键张力：你的笑变深了——还是你和快乐之间隔了一层什么？ | 圣状余痕(Σ): 大家在笑。你知道那很好笑。但你笑不出来。",
        coreEn: "A-side: Your humor grew a thorn — you see absurdity others miss. What you laugh at is more real; just fewer people laugh with you. / B-side: But you may have lost the ability to laugh. Not unwilling — your humor organ was rebuilt, and old frequencies can't be received. Key tension: Did your laughter deepen — or is something now between you and joy? | Residuum: Everyone's laughing. You know it's funny. But you can't laugh.",
        topology: "幽默的频率接收器被重新调谐——旧频段永久失灵，新频段接收到的信号带有原始频段不存在的噪音和暗色调。",
        topologyEn: "The humor frequency receiver was retuned — the old band permanently failed, and the new band receives signals carrying noise and dark tones absent from the original.",
        directive: {
            bright: "他笑的东西别人听不懂。不是他变了——是他的频率升级了。他能看到别人看不到的荒诞，那种笑里有一根刺，但那根刺是真实的。让读者感到他的幽默变深了，只是能一起笑的人更少了。他的笑是一种只有经历者才能解锁的暗频道。",
            dark: "大家在笑。他知道那很好笑。但他笑不出来。不是不想——是他的幽默器官被改造了。旧的频率接收不到了，新的频率别人又听不到。他坐在笑声中间，像一台被调错频道的收音机。让读者感到那种错位的孤独——不是悲伤，是一种更深的隔绝。",
            tension: "有人讲了一个笑话。所有人都笑了。他也笑了——慢了半拍。让读者分不清他是真的觉得好笑，还是在模仿笑的形状。他的幽默是变深了，还是中间隔了一层什么？那半拍的延迟里装了多少东西？不要说。让那个笑自己说话。"
        },
        reference: "《鬼子来了》从头笑到尾——然后笑容在最后一秒结冰；《寄生虫》基宇的笑在地下室那场戏之后永远变了味道。",
        referenceEn: "Laughing the whole way through — then the smile freezing in the last second in Devils on the Doorstep; Ki-woo's laughter permanently changing flavor after the basement scene in Parasite."
    },
    {
        id: "res_solitude_topology",
        name: "独处拓扑", nameEn: "Solitude Topology",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你和'独处'的关系永远变了——要么无法忍受，要么无法离开。",
        defEn: "After the dust settles, your relationship with solitude changed permanently — either unbearable or inescapable.",
        core: "A面：你在独处中找到了一种别人给不了的安全——没有人的空间就没有伤害的可能。你的孤独是一种选择。/ B面：但你的'选择'可能已经变成了'无法'。你不是喜欢独处——你是不会和人相处了。关键张力：你享受孤独——还是你已经忘了怎么不孤独？ | 圣状余痕(Σ): 一个人待着。很安静。可以了。可以了。",
        coreEn: "A-side: In solitude you found a safety no one else provides — empty space means no possibility of harm. Your loneliness is a choice. / B-side: But your 'choice' may have become 'inability.' You don't prefer solitude — you've forgotten how to be with people. Key tension: Do you enjoy being alone — or have you forgotten how not to be? | Residuum: Alone. Very quiet. That's enough. That's enough.",
        topology: "独处与共处的拓扑边界发生了不可逆形变——原本可自由穿越的膜硬化成了单向阀，主体只能朝孤独方向通行。",
        topologyEn: "The topological boundary between solitude and togetherness underwent irreversible deformation — the once freely permeable membrane hardened into a one-way valve, permitting passage only toward isolation.",
        directive: {
            bright: "他一个人待着。很安静。没有人的空间里没有任何可能的伤害。让读者感到他的独处不是逃避——是一种经过筛选后的选择。他在所有可能的存在方式里选了最安全的那一种。那种安静里有一种动物性的智慧：他知道什么对他好。",
            dark: "他说他喜欢一个人。但'喜欢'这个词已经不准确了。他不是喜欢——他是不会和人在一起了。社交的肌肉萎缩了，对话的频率生锈了。他坐在人群里的时候感到窒息，不是因为人多，是因为他已经忘了怎么呼吸别人的空气。让读者感到他的独处已经从选择变成了无法。",
            tension: "一个人待着。很安静。够了。——但'够了'是满足还是投降？让读者在这两个字上停住。他享受这种安静吗？还是他已经不记得不安静是什么样子了？也许孤独本身已经变成了他的母语，而他忘了自己曾经会说另一种语言。"
        },
        reference: "《荒野生存》克里斯走进了阿拉斯加——直到临死才在书上写下'幸福只有在分享时才是真实的'；《她》西奥多离开AI之后——他已经不知道怎么和真人在一起了。",
        referenceEn: "Chris walking into Alaska — writing 'happiness is only real when shared' only at death in Into the Wild; Theodore after leaving the AI — no longer knowing how to be with a real person in Her."
    },
    {
        id: "res_identity_fault",
        name: "身份断层", nameEn: "Identity Fault Line",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你心里有一条清晰的线——把你切成了'那件事之前的我'和'之后的我'。",
        defEn: "After the dust settles, a clear line inside you divides 'the me before' and 'the me after.'",
        core: "A面：断层说明你经历了真正的事件——你不再是同一个人，这本身就是深度的证明。/ B面：但断层两边的你互相不认识。你翻看旧照片像在看一个陌生人。你和自己的过去失联了。关键张力：你进化了——还是你断裂了？ | 圣状余痕(Σ): 有人提起你以前的样子。你听着。好像在听别人的故事。",
        coreEn: "A-side: The fault line proves you lived through a real event — you're no longer the same person, and that itself is proof of depth. / B-side: But the you on each side doesn't recognize the other. Old photos show a stranger. You lost contact with your own past. Key tension: Did you evolve — or fracture? | Residuum: Someone mentioned how you used to be. You listened. Like hearing someone else's story.",
        topology: "身份的连续性流形被事件切成两个不连通的分支——'之前'和'之后'的自我无法通过任何路径互相抵达。",
        topologyEn: "The continuity manifold of identity is severed by the event into two disconnected branches — the 'before' and 'after' selves cannot reach each other via any path.",
        directive: {
            bright: "有人提起他以前的样子。他听着，像在听一个陌生人的故事。但他不难过——那个断裂本身就是他经历过真实事件的证据。他不再是同一个人了。让读者感到这种断裂里有一种进化的尊严：他的旧壳已经装不下现在的他了。",
            dark: "他翻看旧照片。那个人在笑。他认不出那个笑容。不是因为时间久了——是因为那个人和他之间隔了一道无法跨越的裂缝。他和自己的过去失联了。他的记忆还在，但记忆里的那个人已经是个陌生人。让读者感到那种自我的断裂比失去别人更可怕。",
            tension: "有人说'你变了'。他没有否认。但他也说不出自己是变好了还是变坏了——他只知道那条线是真实的，清晰的，像一把刀一样把他切成了两个人。让读者悬在那条线上：这到底是进化还是断裂？也许这个问题本身就是那条断层线。"
        },
        reference: "《少年时代》梅森从6岁到18岁——你看着同一个人变成了另一个人，但你说不出他是在哪一帧变的；《2001太空漫游》鲍曼穿越星门后——那个在另一边的人还是鲍曼吗？",
        referenceEn: "Mason from 6 to 18 — you watch the same person become someone else, unable to pinpoint which frame it changed in Boyhood; Bowman after the star gate — is the one on the other side still Bowman in 2001: A Space Odyssey?"
    },
    {
        id: "res_crying_shift",
        name: "泪点位移", nameEn: "Crying Threshold Shift",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，能让你哭的东西完全变了——以前不在意的小事突然能让你崩溃。",
        defEn: "After the dust settles, what makes you cry completely changed — trivial things that never mattered now break you.",
        core: "A面：你的情感阈值被重新校准了——你对某些微小的善意变得极度敏感。你的眼泪更诚实了。/ B面：但你在大事面前反而哭不出来了。悲剧来的时候你是干的，广告里一个陌生人的微笑却让你崩了。关键张力：你的眼泪变准了——还是你的情感线路接错了？ | 圣状余痕(Σ): 一个陌生人帮你捡了东西。你差点哭了。你不知道为什么。",
        coreEn: "A-side: Your emotional threshold was recalibrated — you became hypersensitive to tiny kindnesses. Your tears are more honest now. / B-side: But you can't cry at big things. Tragedy comes and you're dry; a stranger's smile in an ad breaks you. Key tension: Did your tears become more accurate — or did your emotional wiring get crossed? | Residuum: A stranger picked something up for you. You almost cried. You don't know why.",
        topology: "情感阈值的触发函数被重新定义——原来需要高强度输入才激活的响应，现在被微小信号触发；反之，原来的低阈值通道在高强度输入面前反而失灵。",
        topologyEn: "The trigger function of the emotional threshold was redefined — responses once requiring high-intensity input are now triggered by minimal signals; conversely, the former low-threshold channel malfunctions under high-intensity input.",
        directive: {
            bright: "一个陌生人帮她捡了东西。她差点哭了。她的泪腺被重新校准过了——对微小的善意变得极度敏感。让读者感到她的眼泪比以前更诚实了：它们不再为大事哭，因为大事她已经扛得住了。它们为小事哭，因为小事里的温度她现在能感受到了。",
            dark: "葬礼上所有人都哭了。她没有。她的眼睛干得发疼。大悲的时候她是关着的——情绪太大了，她的身体拒绝处理。但后来在超市听到一首广告歌，眼泪毫无征兆地掉下来了。她的情感线路接错了。该哭的时候干，不该哭的时候崩。让读者感到这种错位的残忍。",
            tension: "一个陌生人对她笑了一下。她的眼眶热了。她不知道为什么。让读者悬在那个瞬间——她的泪腺是变得更精准了，还是彻底失控了？也许两者之间没有区别。也许眼泪自己知道什么时候该来。她不知道。但它来了。"
        },
        reference: "《寻梦环游记》你可能不会为宏大的死亡哭——但那首《Remember Me》的旋律能让你在电影院崩溃；《东京物语》老人的丧妻不催泪——但儿媳递过来的一杯茶让你哭了。",
        referenceEn: "You may not cry at grand death — but the melody of Remember Me breaks you in the theater in Coco; the old man's bereavement isn't tearful — but a cup of tea from his daughter-in-law makes you weep in Tokyo Story."
    },
    {
        id: "res_decision_paralysis",
        name: "决断变形", nameEn: "Decision Deformation",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你做决定的方式永远变了——要么极快、要么再也做不了任何选择。",
        defEn: "After the dust settles, how you make decisions changed forever — either lightning fast, or unable to choose anything.",
        core: "A面：你获得了一种决断力——见过最坏的之后，小事不再纠结。你的优先级清晰得像刀。/ B面：但你也可能被永久地卡住了——你害怕每个选择都会像上次一样带来灾难。关键张力：你是更果断了——还是被恐惧冻住了？ | 圣状余痕(Σ): 菜单摆在面前。你看了很久。点什么都觉得会错。",
        coreEn: "A-side: You gained decisiveness — having seen the worst, small things no longer paralyze. Your priorities are sharp as a blade. / B-side: But you may be permanently stuck — fearing every choice will bring disaster like last time. Key tension: Are you more decisive — or frozen by fear? | Residuum: The menu sits before you. You stare a long time. Every choice feels like it could be wrong.",
        topology: "决策的分叉树被创伤重塑——要么所有分支瞬间坍缩为一条（极快），要么分支无限增殖至无法收敛（瘫痪）。中间的正常剪枝功能失效。",
        topologyEn: "The decision-tree was reshaped by trauma — either all branches instantly collapse to one (lightning speed), or branches proliferate infinitely without convergence (paralysis). The normal pruning function between these extremes has failed.",
        directive: {
            bright: "他在超市三秒钟选完了午餐。不犹豫。见过最坏的之后，选错一顿饭算什么？他的优先级清晰得像刀。让读者感到那种果断里有一种残酷的效率——他不是不在乎，是他已经知道什么值得在乎，什么不值得。他的决断力是用真实的灾难买来的。",
            dark: "菜单摆在面前。他看了很久。他不是在选——他是被卡住了。每一个选项都可能是一个错误，而上一次他做错了选择，一切都崩了。他的手悬在空中，像一台死机的电脑。让读者感到那种被恐惧冻住的质感：不是优柔寡断，是每一次选择都让他重新经历一次那个后果。",
            tension: "他在三秒钟内做了决定。或者他站在那里站了十分钟。让读者不确定——也许这两种状态在他身上交替出现。他的决策系统是修好了还是坏了？也许果断和瘫痪是同一枚硬币的正反面。也许两者都来自同一个伤口。"
        },
        reference: "《拆弹部队》威廉在战场上决断如机器——回到超市面对四十种麦片却无法选择；《革命之路》弗兰克在一个离开还是留下的选择前永远卡住了。",
        referenceEn: "William deciding like a machine on the battlefield — unable to choose among forty cereals at the supermarket in The Hurt Locker; Frank permanently stuck on the choice to leave or stay in Revolutionary Road."
    },
    {
        id: "res_sleep_terrain",
        name: "睡眠地形改写", nameEn: "Sleep Terrain Rewrite",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你和睡眠的关系永久改变了——要么睡不着，要么不敢醒，要么害怕做梦。",
        defEn: "After the dust settles, your relationship with sleep changed permanently — can't sleep, dread waking, or fear dreaming.",
        core: "A面：你的失眠是一种守夜——你的身体在替你值班，因为你睡着的时候发生过可怕的事。/ B面：但你也在用清醒惩罚自己。你不是睡不着——你是不允许自己睡着。关键张力：你的身体在保护你——还是你在用疲劳自我折磨？ | 圣状余痕(Σ): 凌晨四点。天快亮了。你的眼睛是睁着的。又是一夜。",
        coreEn: "A-side: Your insomnia is a vigil — your body stands guard because something terrible happened while you slept. / B-side: But you're also punishing yourself with wakefulness. You can sleep — you won't allow yourself to. Key tension: Is your body protecting you — or are you torturing yourself with exhaustion? | Residuum: 4 AM. Almost dawn. Your eyes are open. Another night.",
        topology: "意识与无意识之间的过渡界面（睡眠）被创伤永久改写——入口被封锁、出口被恐惧把守、或通道本身变成了重演创伤的回路。",
        topologyEn: "The transition interface between conscious and unconscious (sleep) was permanently rewritten by trauma — the entrance sealed, the exit guarded by fear, or the passage itself turned into a loop replaying trauma.",
        directive: {
            bright: "凌晨四点。他的眼睛是睁着的。他的身体在替他站岗——因为上一次他睡着的时候，发生了不该发生的事。他的失眠是一种守夜。让读者感到那种清醒里有一种原始的忠诚：他的身体记住了他的意识已经忘记的危险，然后替他值班。那些不眠之夜是他的身体给他的保护。",
            dark: "他不敢闭眼。不是因为不困——是因为闭上眼睛就要走进那个地方。梦变成了一间他每晚必须进入的审讯室。他用清醒惩罚自己，用疲惫替代恐惧。让读者感到睡眠本身变成了一个陷阱：别人在夜里修复，他在夜里重新受伤。他的枕头是战场。",
            tension: "凌晨四点。天快亮了。他的眼睛是睁着的。又是一夜。让读者分不清他是在保护自己还是在折磨自己——也许他的身体在做正确的事，也许他的身体已经分不清和平和战争了。那双睁着的眼睛里到底是警觉还是恐惧？不要回答。让黎明替他说话。"
        },
        reference: "《搏击俱乐部》杰克的失眠不是疾病——是他的身体在拒绝接受他白天过的生活；《穆赫兰道》整部电影可以理解为一个失眠者在黎明前最后几个小时的裂变。",
        referenceEn: "Jack's insomnia isn't illness — it's his body refusing to accept the life he lives by day in Fight Club; the entire film readable as an insomniac's fission in the last hours before dawn in Mulholland Drive."
    },
    {
        id: "res_moral_gravity",
        name: "道德重力位移", nameEn: "Moral Gravity Shift",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你的道德判断标准永远变了——你不再用以前的尺子量任何事了。",
        defEn: "After the dust settles, your moral compass shifted permanently — you no longer measure anything by the old ruler.",
        core: "A面：你的道德观被现实磨过了一遍——你不再用非黑即白来看世界。你的宽容不是软弱，是见过灰色之后的深度。/ B面：但你也可能滑向了相对主义——如果一切都有道理，那就没有道理。你的宽容可能只是判断力的瘫痪。关键张力：你是变得更宽容了——还是你已经不在乎了？ | 圣状余痕(Σ): 你听到一个人做了坏事。你没有生气。你只是想：我理解。",
        coreEn: "A-side: Your morality was ground by reality — no more black and white. Your tolerance isn't weakness; it's depth from having seen the gray. / B-side: But you may have slipped into relativism — if everything is justified, nothing is. Your tolerance may just be judgment paralysis. Key tension: Are you more tolerant — or have you stopped caring? | Residuum: You heard someone did something bad. You weren't angry. You just thought: I understand.",
        topology: "道德判断的坐标系整体旋转——原来的垂直轴（是非分明）倾斜成了倾斜面，黑白之间出现了一片原来不存在的灰色连续体。",
        topologyEn: "The moral judgment coordinate system rotated wholesale — the once-vertical axis (clear right/wrong) tilted into an inclined plane, revealing a gray continuum that previously did not exist between black and white.",
        directive: {
            bright: "他听到一个人做了坏事。他没有生气。他只是想：我理解。他的道德观被现实磨过了一遍——黑白分明的世界在他眼里变成了一片灰色的连续光谱。让读者感到他的宽容不是软弱——是见过所有颜色之后的深度。他比大多数人更接近真相。",
            dark: "他什么都能理解了。杀人的，背叛的，说谎的——他都能找到理由。但'理解一切'可能只是'不在乎一切'的另一个名字。他的道德罗盘不是变得更精确了——是指针掉了。让读者感到那种失重感：如果一切都有道理，那就没有道理。他的宽容可能只是判断力的尸体。",
            tension: "他听到了一件坏事。他的反应是'我理解'。让读者停在这两个字上——这到底是智慧还是麻木？他是看到了别人看不到的灰色，还是他已经分辨不出颜色了？也许宽容和冷漠之间的距离，比任何人以为的都要短。"
        },
        reference: "《教父》迈克尔在片头还是一个正直的大兵——到片尾他已经可以在教堂里为教子受洗的同时下令杀人；《罗生门》看完之后你的道德罗盘永远多了一根针。",
        referenceEn: "Michael as an honest soldier at the start — by the end ordering murders while standing as godfather in church in The Godfather; your moral compass permanently gaining an extra needle after watching Rashomon."
    },
    {
        id: "res_memory_filter",
        name: "记忆筛选器改写", nameEn: "Memory Filter Rewrite",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你记住和遗忘的逻辑完全变了——重要的记不住，不重要的忘不掉。",
        defEn: "After the dust settles, what you remember and forget reversed — the important fades, the trivial won't leave.",
        core: "A面：你的记忆系统有了自己的优先级——它替你保存了你理智不愿意面对的东西。记忆比你更诚实。/ B面：但你也失去了对记忆的控制。你想记住的淡了，不想记住的清晰得像照片。关键张力：你的记忆在帮你——还是在跟你作对？ | 圣状余痕(Σ): 你忘了他的生日。但你记得那天下午的光线。",
        coreEn: "A-side: Your memory system developed its own priorities — it preserved what your reason refused to face. Memory is more honest than you. / B-side: But you lost control over memory. What you want to remember fades; what you don't stays sharp as a photo. Key tension: Is your memory helping you — or working against you? | Residuum: You forgot their birthday. But you remember the afternoon light that day.",
        topology: "记忆的筛选拓扑被翻转——重要性权重与存储持久性之间的正相关被打断，高权重记忆衰减，低权重碎片反而获得了异常的持久性。",
        topologyEn: "The memory's filtering topology was inverted — the positive correlation between importance-weight and storage-persistence was severed; high-weight memories decay while low-weight fragments gain anomalous persistence.",
        directive: {
            bright: "他忘了她的生日。但他记得那天下午的光线——打在桌角上的那种角度，金色的，带一点灰。他的记忆系统有自己的优先级，比他的理智更诚实。让读者感到那种不受控制的精准：他的记忆替他保存了他的理性不愿承认的东西。那束光比任何日期都更真实。",
            dark: "他想记住的淡了。不想记住的清晰得像照片。他失去了对记忆的控制权——记忆不再听他的指挥，它有自己的逻辑，而那个逻辑和他的意志背道而驰。他想记住她的笑，记不住。但那天下午的光线，他忘不掉。让读者感到记忆的背叛：它选择了他不想要的东西。",
            tension: "他忘了重要的事。他记住了不重要的细节。让读者分不清他的记忆是在帮他还是在跟他作对——也许他的记忆知道什么是真正重要的，也许它只是坏了。那束光线到底是答案还是噪音？他不知道。他只知道它还在那里。"
        },
        reference: "《美丽心灵的永恒阳光》即使删掉了全部记忆——身体的记忆筛选器仍然把你拉向蒙托克海滩；《追忆似水年华》整套小说就是一个记忆筛选器被一块蛋糕触发的结果。",
        referenceEn: "Even with all memories erased — the body's memory filter still pulls you toward Montauk beach in Eternal Sunshine; the entire novel is a memory filter triggered by a cake in In Search of Lost Time."
    },
    {
        id: "res_taste_rewrite",
        name: "味觉改写", nameEn: "Taste Rewrite",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你的口味和偏好永久改变了——曾经喜欢的不喜欢了，曾经讨厌的变得可以接受。",
        defEn: "After the dust settles, your tastes and preferences permanently changed — what you loved you don't; what you hated, acceptable.",
        core: "A面：偏好的改变说明你在生长——你的品味跟着你的经历一起进化了。旧的口味装不下新的你。/ B面：但你也失去了那些旧的快乐。你最喜欢的歌不再让你感动了。你怀念那个还能被简单事物打动的自己。关键张力：你的品味升级了——还是你失去了被打动的能力？ | 圣状余痕(Σ): 你尝了一口以前最喜欢的菜。还是那个味道。但你什么都没感觉到。",
        coreEn: "A-side: Changed preferences mean growth — your taste evolved with your experience. Old flavors can't hold the new you. / B-side: But you lost old joys. Your favorite song no longer moves you. You miss the self that was touched by simple things. Key tension: Did your taste upgrade — or did you lose the ability to be moved? | Residuum: You tasted your old favorite dish. Same flavor. But you felt nothing.",
        topology: "偏好的吸引子景观被整体翻转——原来的吸引盆地变成了排斥区域，原来的排斥高地变成了新的吸引盆地。整个欲望地形经历了相变。",
        topologyEn: "The attractor landscape of preference was inverted wholesale — former basins of attraction became repulsive zones, former repulsive highlands became new basins. The entire desire-terrain underwent a phase transition.",
        directive: {
            bright: "他尝了一口以前最喜欢的菜。还是那个味道。但他什么都没感觉到。他没有失落——他只是意识到自己的舌头已经毕业了。旧的快乐装不下新的他。让读者感到那种蜕皮的轻盈：他不是失去了味觉，是他的味觉进化了。旧口味是旧皮肤，他已经不需要了。",
            dark: "他的最喜欢的歌不再让他感动了。他怀念那个还能被简单事物打动的自己——但那个自己已经不在了。他在一个什么都不好吃、什么都不好听、什么都不好看的世界里走着。他不是挑剔——他是那个能被打动的器官坏了。让读者感到那种品味升级背后的荒凉。",
            tension: "他拿起以前最喜欢的书。翻了两页。放下了。他的表情不是厌恶，也不是怀念。让读者在那个放下的动作里看到两种可能：他成长了，超越了旧的品味；或者他失去了被打动的能力。哪一种更真？也许他自己也不知道。也许两种同时发生。"
        },
        reference: "《美国往事》面条时隔三十年回到那家餐厅——同一道菜，同一个座位，但味道已经完全不同了；《千与千寻》千寻吃到饭团后痛哭——味觉的记忆比意识的记忆更深。",
        referenceEn: "Noodles returning to the restaurant after thirty years — same dish, same seat, but the taste is completely different in Once Upon a Time in America; Chihiro crying while eating a rice ball — taste memory runs deeper than conscious memory in Spirited Away."
    },
    {
        id: "res_relationship_capacity",
        name: "关系容量", nameEn: "Relationship Capacity",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你能同时维持的关系数量永久改变了——变少了，但每一个都更重。",
        defEn: "After the dust settles, how many relationships you can hold changed permanently — fewer, but each one heavier.",
        core: "A面：你学会了精简——你不再浪费精力在不值得的人身上。你的圈子小了，但每段关系都是真的。/ B面：但你的容量可能不是变精了——是缩小了。你承受不了太多连接了。多一个人就多一份可能的失去。关键张力：你是在筛选——还是在回避？ | 圣状余痕(Σ): 你只剩下三个还联系的人。够了。或者说，已经是极限了。",
        coreEn: "A-side: You learned to streamline — no wasting energy on unworthy people. Smaller circle, but every bond is real. / B-side: But your capacity may not be refined — just shrunk. You can't bear many connections. One more person means one more potential loss. Key tension: Are you filtering — or retreating? | Residuum: Only three people left you still talk to. Enough. Or rather, the limit.",
        topology: "关系连接的带宽被永久压缩——可同时维持的拓扑连接数下降，但每条存活连接的信号密度大幅增加。",
        topologyEn: "The bandwidth for relational connections was permanently compressed — the number of simultaneous topological links decreased, but the signal density of each surviving connection increased substantially.",
        directive: {
            bright: "他只剩三个还联系的人。但这三个人每一个都是真的。没有客套，没有表演，没有应酬。他用减法筛掉了所有噪音。让读者感到那种精简的力量：他的圈子小了，但每一根线都能承重。质量替代了数量。他终于知道谁值得。",
            dark: "他的通讯录越来越短。不是他在筛选——是他承受不了了。多一个人就多一份可能的失去，每一段新的连接都是一根可能断裂的弦。他不是在精简，他是在收缩。三个人是他的极限。不是因为够了——是因为再多一个他就要碎了。让读者感到那种容量萎缩的恐惧。",
            tension: "他只剩三个人了。够了。或者说——已经是极限了。让读者分不清'够了'是满足还是投降。他是在筛选真正重要的人，还是在回避所有可能的失去？也许三个人是他精心挑选的结果。也许三个人是他能承受的上限。两者之间可能没有区别。"
        },
        reference: "《入殓师》男主能亲密的人只剩一个死去的人和一个不说话的同事——关系容量被压到了最小单位；《挪威的森林》渡边在直子和绿子之间——他的容量刚好是一个人，而他要面对两个。",
        referenceEn: "The protagonist's close circle reduced to one dead person and one silent colleague — capacity compressed to minimum in Departures; Watanabe between Naoko and Midori — capacity for exactly one, facing two in Norwegian Wood."
    },
    {
        id: "res_body_posture",
        name: "身体姿态改写", nameEn: "Body Posture Rewrite",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你的身体姿态永久改变了——肩膀更低或更紧，步伐更快或更慢。",
        defEn: "After the dust settles, your body posture permanently changed — shoulders lower or tighter, pace faster or slower.",
        core: "A面：你的身体忠实地记录了你的经历——你的姿态就是你活过的证据。身体不会说谎。/ B面：但你可能已经不认识自己的身体了。你曾经昂首走路，现在你低着头。你的身体在替你表达你不承认的东西。关键张力：你的身体在保护你——还是在代替你说出你不愿承认的状态？ | 圣状余痕(Σ): 你在橱窗里看到了自己的影子。那个轮廓不太像你记得的那个人。",
        coreEn: "A-side: Your body faithfully recorded your experience — your posture is proof of what you've lived. The body doesn't lie. / B-side: But you may no longer recognize your own body. You once walked with chin up; now your head is down. Your body expresses what you won't admit. Key tension: Is your body protecting you — or speaking the state you refuse to acknowledge? | Residuum: You saw your reflection in a shop window. That silhouette doesn't look like who you remember.",
        topology: "身体的空间构型被经验直接改写——姿态从意识层面下沉到了肌肉记忆层，成为不可逆的结构性形变。身体变成了一份活的地形图。",
        topologyEn: "The body's spatial configuration was directly rewritten by experience — posture sank from the conscious level into muscle memory, becoming an irreversible structural deformation. The body became a living topographic map.",
        directive: {
            bright: "他走路的方式不一样了。肩膀微微前倾，步伐更沉。他的身体忠实地记录了他的全部经历——每一个姿势都是他活过的证据。让读者看到他的身体不会说谎：他的脊柱比任何自传都更诚实。那种沉稳是用真实的重量换来的。",
            dark: "他曾经昂首挺胸走路。现在他低着头。他的身体在替他表达他不愿承认的东西——那种下沉不是谦逊，是累。他的肩膀记住了他的意识已经忘记的负重。他在橱窗里看到自己的影子，愣了一下。那个轮廓不像他记得的那个人。让读者感到身体对主人的背叛。",
            tension: "他在橱窗里看到了自己的影子。那个轮廓——肩膀的角度、脖子的弧度——他不太认识。他的身体在保护他，还是在代替他说出他不愿承认的状态？让读者自己判断那个影子是铠甲的形状还是坍塌的形状。不要说。让影子自己讲。"
        },
        reference: "《钢琴家》斯皮尔曼战后走路的方式和战前完全不一样——肩膀永远是缩的；《拆弹部队》威廉穿回便装后在超市里的步态——那不是在逛超市，是在巡逻。",
        referenceEn: "Szpilman walking completely differently after the war — shoulders permanently hunched in The Pianist; William's gait at the supermarket in civilian clothes — not shopping, patrolling in The Hurt Locker."
    },
    {
        id: "res_future_ceiling",
        name: "未来感坍缩", nameEn: "Future Ceiling Collapse",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你对未来的想象力永久缩小了——你不再能想象很远的以后。",
        defEn: "After the dust settles, your ability to imagine the future permanently shrank — you can no longer picture far ahead.",
        core: "A面：你活在了当下——你不再为不存在的未来焦虑，每一天都过完整了。这是强者的活法。/ B面：但你也失去了期待——没有盼头的日子不是自由，是平坦的荒原。你不是活在当下，是被困在当下。关键张力：你是学会了活在此刻——还是你对明天绝望了？ | 圣状余痕(Σ): 有人问你五年后的计划。你愣了。五年后？你想不出来。",
        coreEn: "A-side: You learned to live in the present — no more anxiety about futures that don't exist. Each day lived completely. A strong way to be. / B-side: But you also lost anticipation — days without something to look forward to aren't freedom, but flat wasteland. You're not living in the present; you're trapped in it. Key tension: Did you learn to live in the moment — or did you give up on tomorrow? | Residuum: Someone asked your five-year plan. You paused. Five years? You can't picture it.",
        topology: "时间轴的前向延伸被截断——未来维度从无限缩短为有限，主体的时间视界坍缩至可触及的近距离。",
        topologyEn: "The forward extension of the timeline is truncated — the future dimension contracted from infinite to finite, the subject's temporal horizon collapsing to touchable near-range.",
        directive: {
            bright: "有人问他五年后的计划。他愣了一下，然后笑了。他不再为不存在的未来焦虑了——每一天都过完整了。让读者感到一种活在当下的力量：他不是没有未来，是他学会了不预支恐惧。今天的太阳够了。明天的再说。他的短视距是一种被训练过的智慧。",
            dark: "有人问他五年后的计划。五年后？他想不出来。他的想象力在三个月以外就断了——像一条修到一半的路，前面没有了。他不是活在当下——他是被困在当下。没有盼头的日子不是自由，是平坦的荒原。让读者感到那种没有地平线的恐惧。",
            tension: "有人问他五年后的计划。他停了一下。让读者分不清他是在思考还是在放弃思考。他是学会了珍惜当下，还是他的时间已经缩到了看不见明天？活在此刻是智慧——还是一种被伪装成选择的绝望？让那个停顿替他回答。"
        },
        reference: "《活着》福贵到最后只想着明天那头牛能不能吃上草——他的未来感已经缩到了二十四小时以内；《路》父亲带着儿子走在灰烬中——唯一的计划是今天活过去。",
        referenceEn: "Fugui at the end only thinking about whether the ox eats tomorrow — his future sense compressed to 24 hours in To Live; the father walking with his son through ashes — the only plan is surviving today in The Road."
    },
    {
        id: "res_love_grammar",
        name: "爱的语法改写", nameEn: "Love Grammar Rewrite",
        group: "D. 异化的倒影", groupEn: "The Alienated Reflection",
        def: "尘埃落定后，你表达和接受爱的方式永远变了——以前觉得自然的，现在做不出来了。",
        defEn: "After the dust settles, how you give and receive love changed permanently — what felt natural before, you can no longer do.",
        core: "A面：你发展出了一套新的爱的语法——可能更安静、更谨慎，但每个字都是称过的。你不再挥霍感情了。/ B面：但新的语法别人不一定读得懂。你以为你在爱——对方觉得你冷漠。你的深情变成了别人眼里的距离。关键张力：你的爱变得更真了——还是变得没人能收到了？ | 圣状余痕(Σ): 你很爱他。但你说不出来。你送的东西他也不懂。你们隔着同一种感情互相陌生。",
        coreEn: "A-side: You developed a new grammar of love — quieter, more cautious, but every word weighed. You no longer squander emotion. / B-side: But others can't read the new grammar. You think you're loving — they feel coldness. Your depth became distance in their eyes. Key tension: Did your love become more true — or unreceivable? | Residuum: You love them deeply. But can't say it. Your gifts aren't understood. You're strangers across the same feeling.",
        topology: "爱的编码-解码协议被单方面重写——发送端的信号格式改变了，但接收端仍在使用旧协议，导致持续的通信失败。",
        topologyEn: "The encoding-decoding protocol of love was unilaterally rewritten — the sender's signal format changed, but the receiver still uses the old protocol, causing persistent communication failure.",
        directive: {
            bright: "他不说'我爱你'了。但他会在凌晨三点起来给她盖被子。他发展出了一套新的语法——更安静、更小心，每一个动作都是称过的。让读者看到那种新语法的分量：他不再挥霍感情，但他给出的每一点都是真金。那条被子比任何情话都重。",
            dark: "他很爱她。但他说不出来。他送的东西她不懂。他表达关心的方式她读不到。他以为自己在爱——她觉得他冷漠。他们隔着同一种感情互相陌生。他的深情变成了她眼里的距离。让读者感到那种翻译失败的绝望：两个人说着不同版本的爱，却以为对方什么都没说。",
            tension: "他给她倒了杯水。她没注意到。他没说什么。让读者自己去看那杯水的重量——那到底是一种深沉到不需要语言的爱，还是一种已经没人能收到的信号？他的爱变得更真了——还是变得没人能读了？让那杯水在桌上凉掉。让读者自己决定它的含义。"
        },
        reference: "《花样年华》周慕云和苏丽珍发明了一套只有他们两个人懂的暗语——但这套语言的代价是他们永远不能直说；《断背山》恩尼斯一辈子都不会说'我爱你'——他的爱写在衬衫上，叠在衣柜深处。",
        referenceEn: "Chow and Su inventing a code only they understood — but the price of that language is they can never speak directly in In the Mood for Love; Ennis never saying 'I love you' — his love written on a shirt, folded deep in the closet in Brokeback Mountain."
    },
];
