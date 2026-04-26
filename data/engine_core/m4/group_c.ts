import { LibraryItemDef } from '../../../types';

export const OPPRESSION_GROUP_C: LibraryItemDef[] = [
    {
        id: "m4_machine_infinite_form",
        name: "无限表格", nameEn: "The Infinite Form",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "永远填不完的文书——每份表格的最后一栏要求你提交另一份表格。",
        defEn: "Paperwork that never ends — every form's last field requires submitting another form.",
        core: "A面：表格维持了系统的精确运作。没有记录就没有秩序,没有秩序就是弱肉强食。/ B面：但表格把人变成了数据条目。你的绝望、你的紧急、你的不可替代性——都被压缩进了一个文本框。关键张力：如果你的救命请求和别人的一样紧急——凭什么你先？表格至少保证了这种残忍是'公平的'。 | 秩序的裂隙(∄A): 表格背后没有一个'读表格的人'——只有下一张表格。系统不理解你写了什么,它只检查格式是否正确。",
        coreEn: "A-side: Forms maintain systemic precision. No records, no order; no order, law of the jungle. / B-side: Forms reduce you to a data entry. Your despair, urgency, irreplaceability — all compressed into one text box. Key tension: If your emergency is no more urgent than another's — why should you go first? Forms at least ensure this cruelty is 'fair.' | Rift(∄A): Behind the form there's no 'person reading it' — only the next form. The system doesn't understand what you wrote; it only checks if the format is correct.",
        reference: "《巴西》中被文书错误碾碎的人生；《卡夫卡·审判》永远走不出的官僚迷宫。",
        referenceEn: "A life crushed by paperwork errors in Brazil; the inescapable bureaucratic labyrinth in Kafka's The Trial.",

        topology: "无限递归的入口结构：表格不通向处理者——它通向下一张表格。你以为你在走廊里前进，但走廊本身就是目的地。系统不在表格后面，系统就是表格",

        directive: {
            bright: "写主体第一次拿到表格时的安心感——混乱中终于有了可以抓住的东西：一份清单，一个流程，一步一步来。写他在表格的空白处认真填写自己名字时的那种专注：只要我按规定做，事情就会被解决。不要写成讽刺，写这份安心是真实的——在你无能为力的时候，一张表格至少给了你一个'我正在做什么'的感觉。",

            dark: "写主体填完第十七张表格时的那个瞬间——他翻到最后一页，发现最后一栏写着'请附上表格F-18'。写他的笔停在纸上不动了，但身体还保持着书写的姿势。不要写成愤怒或绝望，写一种更精准的状态：他的身体已经学会了填表的动作，即使他的意识已经知道这没有终点。自动化的顺从比被强迫更可怕。",

            tension: "场景锚点：主体站在柜台前，手里拿着一摞填完的表格。工作人员看了一眼说'格式不对，请用新版本重填'。新版本和旧版本只有页眉不同。悖论不是'官僚主义'——而是：如果你拒绝重填，你就退出了系统；退出系统意味着你的问题不存在了——不是被解决了，是在系统的语言里从未发生过。不要让主体找到窗口。"
        }
    },
    {
        id: "m4_machine_black_box",
        name: "黑箱", nameEn: "The Black Box",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "决定你命运的算法,但没有人能解释它的逻辑——包括设计它的人。",
        defEn: "An algorithm deciding your fate, but no one can explain its logic — including its designer.",
        core: "A面：黑箱比人类更快、更准、更不受情绪干扰。它消除了偏见——至少消除了有意识的偏见。/ B面：但你无法质疑它的判决。当算法拒绝你时,没有人可以解释'为什么不是你'——因为没有人知道。关键张力：如果黑箱的判断统计上更准确但对你个人是错的——你服从统计还是服从你的真实？ | 秩序的裂隙(∄A): 黑箱是用过去的数据训练的——它不知道'应该是什么',只知道'过去是什么'。它不是在预测未来,它是在复制过去。",
        coreEn: "A-side: The black box is faster, more accurate, less emotionally biased. It eliminates prejudice — at least conscious prejudice. / B-side: You can't question its verdict. When the algorithm rejects you, no one can explain 'why not you' — because no one knows. Key tension: If the box is statistically more accurate but wrong about you — do you obey statistics or your reality? | Rift(∄A): The black box was trained on past data — it doesn't know 'what should be,' only 'what was.' It's not predicting the future; it's replicating the past.",
        reference: "《少数派报告》预测犯罪的不透明系统；《黑镜·急转直下》中社交评分算法控制人生的每一步。",
        referenceEn: "The opaque crime-prediction system in Minority Report; social credit algorithms controlling every life step in Black Mirror: Nosedive.",

        topology: "不可质询的判决结构：黑箱的权力不在于它是对的——在于它不可解释。你无法反驳一个连它自己都说不清自己在做什么的东西",

        directive: {
            bright: "写黑箱第一次给出正确判断时的那种效率之美——一个人类需要三个月审核的案件，算法在0.3秒内给出了答案，而且是对的。写在场所有人的表情：不是敬畏，是一种松弛——终于不用人来背这个决定的责任了。不要写成技术赞歌，写一种更深的渴望：人类一直想要一个比自己更公正的裁判，黑箱至少满足了这个幻想。",

            dark: "写主体被黑箱拒绝后去申诉的场景——他找到了技术部门，技术人员调出了他的数据，看了几分钟，然后说：'算法的决策路径是不可解释的，但从统计学上说它的准确率是94%。'写主体听到'94%'时的身体反应——他就是那6%。不要写成反技术叙事，写一种更精准的恐怖：系统不需要对你个人正确，它只需要总体上正确。你的冤屈是统计上可接受的误差。",

            tension: "场景锚点：一个法庭。法官宣布将采用黑箱的判断作为量刑依据。被告问'为什么'，法官说'算法显示你有78%的再犯概率'。被告说'但我没有犯过罪'。法官说'这就是为什么不是100%'。悖论不是'算法不公正'——而是：黑箱用你的过去（你的邮编、你的收入、你的社交圈）计算你的未来。你还没有做的事已经被预先定罪了。不要让被告获释。"
        }
    },
    {
        id: "m4_machine_deadlock",
        name: "死锁", nameEn: "The Deadlock",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "要A必须先有B,要B必须先有A——逻辑上不可能完成的循环前置条件。",
        defEn: "To get A you need B; to get B you need A — logically impossible circular prerequisites.",
        core: "A面：死锁是系统自我保护的机制——它阻止了未经验证的人进入危险区域。门槛的存在是合理的。/ B面：但死锁把合理变成了荒谬。你不是'不合格',你是'无法证明自己合格'——而证明的工具本身需要你已经合格。关键张力：系统不是故意刁难你——它只是按照逻辑运转,而逻辑恰好在这里形成了闭环。 | 秩序的裂隙(∄A): 死锁暴露了系统从来不是为'解决你的问题'而设计的——它是为'系统自身的一致性'而设计的。你只是输入,不是目的。",
        coreEn: "A-side: Deadlock is the system's self-protection — it blocks unverified entry into dangerous zones. Thresholds are reasonable. / B-side: Deadlock turns reasonable into absurd. You're not 'unqualified,' you're 'unable to prove qualification' — and the proof tools require you to already be qualified. Key tension: The system isn't deliberately obstructing — it just follows logic, and logic happens to form a closed loop here. | Rift(∄A): Deadlock exposes that the system was never designed 'to solve your problem' — it was designed for 'the system's own consistency.' You're input, not purpose.",
        reference: "《第二十二条军规》疯了才能停飞但申请停飞就证明没疯；《城堡》卡夫卡主人公永远无法进入的行政中心。",
        referenceEn: "Catch-22's insanity paradox; Kafka's protagonist never entering the administrative center in The Castle.",

        topology: "逻辑的自噬结构：死锁不是系统的故障——它是系统的逻辑在完美运转时产生的副作用。每一条规则都是对的，但它们加在一起变成了不可能",

        directive: {
            bright: "写门槛存在时的那种合理感——主体理解为什么需要资格证才能执业，为什么需要经验才能入职。每一条规则单独拿出来都说得通。写他点头的那个瞬间：'这是对的，不能让没准备好的人进来。'不要写成反讽铺垫，写这种合理性是真实的——门槛保护过人。",

            dark: "写主体在两个窗口之间来回跑的第三趟——A窗口说'先去B窗口开证明'，B窗口说'先拿到A窗口的批准'。写第三趟时他的步伐——不快不慢，不愤怒，是一种更可怕的东西：身体已经接受了循环，开始把来回跑当作正常的运动。不要写成荒诞讽刺，写一种更安静的恐怖：主体开始适应不可能。",

            tension: "场景锚点：主体终于找到一个'人'——不是窗口，是一个真正有决定权的人。他把情况解释了一遍。那个人听完，沉默了一会儿，说：'你说的对，这确实是个循环。但我没有权限打破它——打破规则的程序也有前置条件。'悖论不是'规则不合理'，而是：修改规则的规则也是一个死锁。系统的bug不能用系统自身的工具修复。不要让主体找到漏洞。"
        }
    },
    {
        id: "m4_machine_void",
        name: "责任黑洞", nameEn: "The Accountability Void",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "出了问题,但找不到任何一个负责的人——每个人都说'这不归我管'。",
        defEn: "Something went wrong, but no responsible person can be found — everyone says 'that's not my department.'",
        core: "A面：分工让专业性成为可能——每个人只负责自己的部分,才能把每个部分做到极致。/ B面：但分工也意味着没有人看到全貌。每个环节都完美执行了自己的任务——而你死在环节与环节之间的缝隙里。关键张力：如果每个人都'没错'——那错在哪里？ | 秩序的裂隙(∄A): 你以为系统背后有一个'总负责人'——但没有。每个位置上的人都只是在执行自己的那一格任务。大他者是所有人都在假装存在的那个'总指挥'。",
        coreEn: "A-side: Division of labor enables expertise — each person handles only their part, maximizing quality. / B-side: But division means no one sees the whole. Every link executes perfectly — and you die in the gap between links. Key tension: If everyone 'did nothing wrong' — where is the error? | Rift(∄A): You thought there was an 'overall person in charge' behind the system — but there isn't. Everyone in position is just executing their grid task. The Big Other is the 'supreme commander' everyone pretends exists.",
        reference: "《切尔诺贝利》每个人都在执行命令但没人对灾难负责；《官僚之死》契诃夫式的制度性碾压。",
        referenceEn: "Everyone following orders but no one responsible for disaster in Chernobyl; Chekhov's institutional crushing in The Death of a Government Clerk.",

        topology: "责任的蒸发结构：每个环节都在执行自己的职责——但责任在传递过程中蒸发了。它不在任何一个人手里，因为每个人只持有它的一个碎片，碎片太小，小到不构成'罪'",

        directive: {
            bright: "写分工运作良好时的那种精密之美——一个复杂的手术，每个人只负责自己的步骤：麻醉师、主刀、护士、器械师，每个人做好自己的部分，生命被救回来了。写这种协作的干净：没有人需要理解全部，但全部被理解了。不要写成团队颂歌，写一种结构性的优雅：比任何个人都聪明的是系统本身。",

            dark: "写出事之后主体挨个找人的过程——第一个人说'这不是我的环节'，第二个人说'我按规定操作的'，第三个人说'你需要找上级'，上级说'这要看具体是哪个环节的问题'。写主体在每一次被指向下一个人时的感觉：不是愤怒，是一种越来越清晰的认知——他在找的那个'负责的人'不存在。不是被隐藏了，是从来不存在。",

            tension: "场景锚点：调查组来了。每个人的证词都是真的——每个人确实按规定做了自己的部分。报告的结论写着'系统性失误'。主体看着这四个字——'系统性失误'没有主语。悖论不是'有人在撒谎'，而是：没有人撒谎，没有人犯错，一个人死了——而'系统性失误'这个词让所有人都不用为这个死亡负责。词语本身成了逃逸的工具。不要让任何人被追责。"
        }
    },
    {
        id: "m4_machine_inertia",
        name: "惯性", nameEn: "The Inertia",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "系统继续运转,不是因为有人在推动它,而是因为没有人有能力阻止它。",
        defEn: "The system keeps running not because anyone pushes it, but because no one can stop it.",
        core: "A面：惯性提供了稳定性——不是每件事都需要从头决定。昨天的规则今天继续有效,这让你可以预测明天。/ B面：但惯性让错误变得不朽。每个人都知道规则已经过时了,但修改规则的程序比规则本身更复杂。关键张力：如果停下来修理意味着整个系统崩溃——你继续在明知错误的轨道上运行吗？ | 秩序的裂隙(∄A): 没有人在驾驶这辆火车。你以为有人知道去哪——但驾驶舱是空的,火车只是沿着一百年前铺好的轨道在滑行。",
        coreEn: "A-side: Inertia provides stability — not everything needs re-deciding daily. Yesterday's rules still work, letting you predict tomorrow. / B-side: Inertia immortalizes errors. Everyone knows the rule is obsolete, but the procedure to modify it is more complex than the rule. Key tension: If stopping to repair means total system collapse — do you keep running on tracks you know are wrong? | Rift(∄A): No one is driving the train. You thought someone knew the destination — but the cabin is empty; the train is just coasting on tracks laid a century ago.",
        reference: "《巴西》中没有人记得为什么要这样做但所有人都在继续做的官僚机器；《雪国列车》永远不停的列车即惯性的终极隐喻。",
        referenceEn: "A bureaucratic machine where no one remembers why but everyone keeps doing in Brazil; the never-stopping train as inertia's ultimate metaphor in Snowpiercer.",

        topology: "无驾驶员的运动：惯性不是力——它是力消失之后的状态。系统的可怕不在于有人在推它，在于推它的人早就走了，但它自己不会停",

        directive: {
            bright: "写惯性提供的那种稳定感——主体每天走同一条路上班，买同一家店的早餐，在同一个位置坐下。不是因为喜欢，是因为不需要决定。写这种'不需要决定'的轻松：你的意识可以飘在别处，身体替你活着。不要写成批判，写一种真实的节能——生活中大多数事情不值得你去想。",

            dark: "写主体意识到规则已经过时的那个瞬间——他在执行一个所有人都知道没有意义的程序。他问旁边的同事'为什么我们还在做这个'，同事看了他一眼说'一直都是这样做的'。写主体点头继续做的那个动作——不是被说服了，是发现停下来比继续更难。因为停下来需要一个理由，而继续不需要。",

            tension: "场景锚点：有人终于按下了停止键——系统停了。所有人站在原地，看着静止的机器。悖论不是'终于停了'的解放，而是：没有人知道接下来该做什么。惯性不只是机器在运转——是所有人都忘了除了运转还能做什么。停下来暴露的不是自由，是一种更深的空白：你以为你是被惯性困住的——但也许惯性是你自己发明的，用来填充你不知道该放什么东西的那段时间。不要让任何人提出替代方案。"
        }
    },
    {
        id: "m4_machine_waiting_room",
        name: "候诊室", nameEn: "The Waiting Room",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "被要求等待,但没有人告诉你要等多久——也没有人保证你等到的东西还在。",
        defEn: "Asked to wait, but no one tells you how long — nor guarantees what you're waiting for still exists.",
        core: "A面：等待是秩序的代价——如果所有人同时冲进去,没有人能得到服务。排队是文明的基本单位。/ B面：但等待把你的时间变成了系统的燃料。你在消耗生命,而系统不觉得你的时间有价值。关键张力：如果你的等待和别人一样公平——那谁来为你失去的那些小时负责？ | 秩序的裂隙(∄A): 候诊室里没有一个'决定你什么时候被叫到'的人——只有一台号码机。系统不认识你的脸,只认识你的号码。",
        coreEn: "A-side: Waiting is order's cost — if everyone rushes in, no one gets served. Queuing is civilization's basic unit. / B-side: Waiting turns your time into the system's fuel. You're spending life; the system doesn't value your time. Key tension: If your wait is as fair as anyone's — who's responsible for the hours you lost? | Rift(∄A): In the waiting room there's no 'person deciding when you're called' — only a number machine. The system doesn't know your face, only your number.",
        reference: "《等待戈多》永远不会来的那个人；《肖申克的救赎》被迫在牢房中等待一个不确定的自由。",
        referenceEn: "The one who never arrives in Waiting for Godot; forced to wait for uncertain freedom in Shawshank Redemption.",

        topology: "悬置的主体性：候诊室把你从'正在做什么的人'变成'正在等什么的人'——你的存在被暂停了，但你的时间没有暂停。系统消费的不是你的劳动，是你的等待",

        directive: {
            bright: "写候诊室里那种奇特的平等——所有人都坐在一样的椅子上，拿着一样的号码牌，不管你是谁，在这里你只是一个序号。写主体看着周围的人：有人比他急，有人比他轻松，但号码牌不认识任何人的脸。不要写成对公平的赞美，写一种更朴素的发现：在某些场合，取消你的身份反而是一种保护。",

            dark: "写等待进入第三个小时时主体的身体变化——不是焦虑，是一种更缓慢的蜕化：他开始接受这就是他今天要做的全部事情——等。写他放弃看手机的那个瞬间，不是因为累了，是因为候诊室的时间和外面的时间已经脱钩了。外面在流动，这里在凝固。不要写成对效率的批判，写一种存在论层面的经验：你被系统从时间中取了出来，放在了一个没有刻度的地方。",

            tension: "场景锚点：号码被叫到了——但不是主体的号码。是他后面那个人的。工作人员解释说'系统跳号了，请继续等待'。悖论不是'不公平'，而是：你无法质疑号码——号码没有理由。它不是按谁来得早排的（你来得更早），不是按谁更紧急排的（你更紧急）——它只是一个数字，而数字不回答'为什么'。你在等的不是服务，是一个不知道自己在等什么的状态的结束。不要让号码被叫到。"
        }
    },
    {
        id: "m4_machine_hidden_clause",
        name: "隐藏条款", nameEn: "The Hidden Clause",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你签了合同时没注意到的那行小字——它在最坏的时刻激活,合法地剥夺你的一切。",
        defEn: "The fine print you missed when signing — activated at the worst moment, legally stripping everything.",
        core: "A面：条款保护了契约双方——没有细则,任何合作都可能变成欺诈。规则的精确性是信任的基础。/ B面：但条款的复杂性本身就是一种权力。你没有时间和专业知识去读完全部细则——'你签了名'就意味着你同意了你不理解的东西。关键张力：你'自愿'签了字——但自愿建立在知情之上,而你不知情。这还算自愿吗？ | 秩序的裂隙(∄A): 条款的制定者也不完全理解自己写的东西——法律文本复杂到连律师都在互相争论。规则系统已经超越了所有人的理解力。",
        coreEn: "A-side: Clauses protect both contractual parties — without specifics, all cooperation risks fraud. Rule precision is trust's foundation. / B-side: Clause complexity is itself power. You lacked time and expertise to read all terms — 'you signed' means you agreed to what you didn't understand. Key tension: You signed 'voluntarily' — but voluntariness requires being informed, and you weren't. Is it still voluntary? | Rift(∄A): Even clause creators don't fully understand what they wrote — legal texts are so complex lawyers argue with each other. The rule-system has exceeded everyone's comprehension.",
        reference: "《华尔街》中金融衍生品条款背后的致命陷阱；《浮士德》与魔鬼签订的那份灵魂契约。",
        referenceEn: "Lethal traps in financial derivative clauses in Wall Street; the soul-contract with the devil in Faust.",

        topology: "同意的空洞结构：你签名的那一刻，你同意的不是你读到的内容——是你没有读到的内容。'自愿'的前提是理解，但理解的成本被设计成高于你的支付能力",

        directive: {
            bright: "写签合同时的那种仪式感——双方坐下来，文件摊开，每一页都被翻过。写主体在最后一页签名时的感觉：一件事被正式化了，从此有了保障。不要写成天真叙事，写一种文明的基本需要：在一个人可以对另一个人说'我没有答应过'的世界里，签名是唯一的锚。",

            dark: "写条款被激活的那个瞬间——主体出了事，去找合同，翻到第47页的脚注，用6号字印着一行话，它合法地取消了主体以为自己拥有的一切。写他的眼睛在那行字上停留的那几秒钟。不要写成受骗叙事，写一种更精确的发现：这行字一直都在——他签名的那天就在那里。它不是被隐藏的——它只是被设计成不会被读到。",

            tension: "场景锚点：主体找到律师，律师看完合同说'从法律上说他们没有错——你签了字'。主体说'但我不知道这一条'。律师说'你应该知道的——这是你的责任'。悖论不是'条款不合理'，而是：系统把'你应该读完200页法律文本'定义为你的责任——但它知道没有人读得完。系统的运转依赖于你不读那些你'应该'读的东西。你的无知不是系统的疏忽，是系统的燃料。不要让主体获得赔偿。"
        }
    },
    {
        id: "m4_machine_quota",
        name: "配额", nameEn: "The Quota",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "系统预先设定了数量限制——无论你多优秀,名额满了就是满了。",
        defEn: "The system preset a numerical limit — no matter how excellent, when the quota's filled, it's filled.",
        core: "A面：配额防止了资源被少数人垄断——有限的东西必须被分配,数量限制是公平的底线。/ B面：但配额让你的命运与你的能力脱钩。你不是'不够好',你只是'来晚了'。关键张力：如果你恰好是第101个最优秀的人,而名额只有100个——系统对你做了什么？ | 秩序的裂隙(∄A): 配额的数字是谁定的？为什么是100不是101？追问下去,你发现这个数字不是计算出来的,是某个人在某个会议上'大约估了一下'。",
        coreEn: "A-side: Quotas prevent monopolization — limited resources must be allocated; numerical limits are fairness's baseline. / B-side: Quotas decouple your fate from your ability. You're not 'not good enough,' just 'too late.' Key tension: If you're the 101st most excellent but only 100 spots exist — what did the system do to you? | Rift(∄A): Who set the quota number? Why 100 not 101? Push further and you find the number wasn't calculated — someone in a meeting 'roughly estimated.'",
        reference: "《我不是药神》中药品配额制下的生死筛选；《饥饿游戏》每区必须贡献固定名额的残酷抽签。",
        referenceEn: "Life-and-death screening under drug quotas in Dying to Survive; cruel quota-based lottery in The Hunger Games.",

        topology: "任意切割的暴力：配额的数字把连续的人群切成'内'和'外'——第100名和第101名之间的差距可能是0.01分，但这条线被赋予了全有或全无的力量",

        directive: {
            bright: "写配额存在时的那种清晰——主体知道自己要竞争什么，标准是什么，数量是多少。写这种透明带来的公平感：至少规则是一样的，至少所有人看到的终点线在同一个位置。不要写成制度赞美，写一种更朴素的好处：在没有标准的世界里，得到的人也不知道自己为什么得到了。",

            dark: "写主体排在第101名——差0.5分。写他看着第100名的名字出现在通过名单上时的那种特殊的安静。他不恨第100名——他知道那个人也很努力。他恨的是那条线。但那条线不是一个人，不是一个机构，它只是一个数字——而你不能向一个数字喊冤。不要写成不甘心叙事，写一种更冷的认知：你的整个人生在这一刻被一个随机的整数定义了。",

            tension: "场景锚点：会议室里，有人提议'把名额从100增加到101'。所有人沉默了。悖论不是'多一个名额'这么简单，而是：如果101可以，为什么不是102？如果102可以，为什么不是200？线必须画在某个地方——但画在任何地方都是暴力。系统的运作需要这种暴力，但不能承认这种暴力。不要让名额增加。"
        }
    },
    {
        id: "m4_machine_actuarial",
        name: "精算表", nameEn: "The Actuarial Table",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你的生命被转化为一个数学期望值——系统不恨你,它只是算了一下,你不划算。",
        defEn: "Your life converted to a mathematical expected value — the system doesn't hate you; it just calculated you're not worth it.",
        core: "A面：精算让有限资源的分配变得理性——感情无法决定谁先得到器官,数据至少提供了一个可辩护的标准。/ B面：但当你的生命变成报表上的一行数字,你的独特性被完全抹除。你不是一个人,你是一个ROI。关键张力：如果救你的成本可以救十个别人——不救你是不是'正确'的？ | 秩序的裂隙(∄A): 精算表以'客观'自居——但变量权重是人设定的。谁决定'年龄'比'意愿'重要？客观性只是把主观偏好藏在了公式背后。",
        coreEn: "A-side: Actuarial analysis makes resource allocation rational — emotion can't decide who gets an organ first; data provides at least a defensible standard. / B-side: When your life becomes a spreadsheet row, your uniqueness is erased. You're not a person; you're an ROI. Key tension: If saving you costs what could save ten others — is not saving you 'correct'? | Rift(∄A): The actuarial table claims 'objectivity' — but variable weights are human-set. Who decided 'age' matters more than 'will'? Objectivity is just subjective bias hidden behind formulas.",
        reference: "《达拉斯买家俱乐部》被保险精算拒之门外的患者；《异形》韦兰总裁将船员生命精算为利润的冷血计算。",
        referenceEn: "Patients denied by insurance actuaries in Dallas Buyers Club; Weyland calculating crew lives as profit in Alien.",

        topology: "生命的可计算性假设：精算表的前提是你可以被换算为数字——但这个前提本身是不可证明的。它不是发现了你的价值，它是发明了一种让你可以被比较的语言",

        directive: {
            bright: "写精算拯救生命的一个场景——灾难中资源有限，精算让最可能存活的人先被救出。写一个医生看着数据做出决定时的表情：不是冷酷，是一种被减轻的负担——他不用自己选谁先死了，数据替他做了这个决定。不要写成效率赞歌，写一种更深的人性需要：人类无法承受'选择谁去死'的重量，精算把这个重量从个人转移到了系统。",

            dark: "写主体坐在桌子对面，保险员翻开他的档案，在一个表格里找到了他的年龄、病史、邮编，然后计算器按了三下。写计算器发出的声音——每一下都在给他的生命标价。最终的数字出来了：不够。不是因为他的病不严重——是因为治好他的成本超过了他被计算出的'剩余生产力'。不要写成控诉，写一种更深的冰冷：没有人恨他，机器不恨任何人——它只是做了减法。",

            tension: "场景锚点：一个伦理委员会在讨论是否采用新的精算模型。新模型更准确——它可以多救15%的人。但有人指出：多救的15%全部来自年轻群体，被放弃的全部是老年人。悖论不是'年轻vs.年老'，而是：精算表的'客观'藏着一个从未被投票表决过的价值判断——年轻的生命更值得活。谁授权了这个判断？不是任何一个人——是公式里一个叫'预期寿命年数'的变量。不要让委员会达成共识。"
        }
    },
    {
        id: "m4_machine_routine",
        name: "例行程序", nameEn: "The Routine",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "每天重复同样的动作、同样的流程。不是因为有意义,而是因为昨天也是这样做的。",
        defEn: "Repeating the same actions, same processes, daily. Not because meaningful, but because it was done yesterday too.",
        core: "A面：例行程序释放了你的认知资源——不是每件事都值得思考。自动化让你能把精力留给真正重要的决定。/ B面：但当所有事都变成了例行,你连'什么是重要的决定'都忘了。你以为自己在活着,其实你只是在运转。关键张力：如果打破例行意味着混乱——你选择有序的麻木还是混乱的清醒？ | 秩序的裂隙(∄A): 例行程序没有'发起者'——没有人命令你每天重复。你自己把自己编程了,然后忘了自己是程序员。",
        coreEn: "A-side: Routines free cognitive resources — not everything warrants thought. Automation saves energy for truly important decisions. / B-side: When everything becomes routine, you forget what 'important decisions' are. You think you're living; you're just running. Key tension: If breaking routine means chaos — do you choose orderly numbness or chaotic wakefulness? | Rift(∄A): Routine has no 'originator' — no one orders you to repeat daily. You programmed yourself, then forgot you're the programmer.",
        reference: "《土拨鼠之日》被困在永恒重复中的一天；《摩登时代》卓别林在流水线上被异化为机器零件。",
        referenceEn: "Trapped in eternal repetition in Groundhog Day; Chaplin alienated into a machine part on the assembly line in Modern Times.",

        topology: "自我编程的遗忘：例行程序的程序员是你自己——但你执行了太久，已经忘了自己写过这段代码。你以为这是'世界的运行方式'，其实这是你的运行方式",

        directive: {
            bright: "写例行程序中的那种安全感——每天早上同一时间醒来，同一个动作刷牙，同一条路上班。写身体在重复中获得的一种自信：不需要想就能做对。不要写成麻木的前兆，写一种真实的好处：你的身体替你记住了生活，让你的脑子可以去想别的事。",

            dark: "写主体在例行程序中突然'醒来'的一秒——他正在做一个他做了五年的动作（倒咖啡、打卡、走某段楼梯），突然意识到自己不记得这个动作是什么时候开始的。不是失忆——是这个动作从未被'记住'过，因为它从来不需要意识的参与。写这一秒的恐怖：如果你的大部分人生都不需要意识参与——你在那些时间里是'活着'的吗？",

            tension: "场景锚点：主体决定打破例行——今天不走那条路，不买那杯咖啡，不在那个时间到达。写他走到一条新路上时的身体反应：不是兴奋，是一种不成比例的恐慌。悖论不是'习惯的力量'，而是：你发现'你'这个人的边界和例行程序的边界完全重合——打破程序不是'你做了一个不同的选择'，是你暂时不知道'你'是谁了。你的身份住在你的习惯里。不要让主体发现自由。"
        }
    },
    {
        id: "m4_machine_archive",
        name: "永恒档案", nameEn: "The Archive",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你过去的一切都被记录在案——系统不会忘记,也不会原谅。你的历史就是你的牢笼。",
        defEn: "Everything from your past is on file — the system never forgets, never forgives. Your history is your cage.",
        core: "A面：档案保证了问责——没有记录,罪行就可以被否认。历史记忆是正义的前提条件。/ B面：但档案也意味着你永远无法重新开始。十年前的错误今天依然定义你——系统不相信'改变'。关键张力：如果过去的你和现在的你是两个人——凭什么过去的你要为现在的你定罪？ | 秩序的裂隙(∄A): 档案记录的不是'真正的你'——只是你在系统中的投影。档案里没有你的悔恨、你的成长、你做过的噩梦。它认识的是一个代码,不是一个人。",
        coreEn: "A-side: Archives guarantee accountability — without records, crimes can be denied. Historical memory is justice's precondition. / B-side: Archives mean you can never start over. A decade-old mistake still defines you — the system doesn't believe in 'change.' Key tension: If past-you and present-you are two people — why should past-you convict present-you? | Rift(∄A): The archive doesn't record 'the real you' — only your projection in the system. It has no record of your remorse, growth, or nightmares. It knows a code, not a person.",
        reference: "《悲惨世界》冉阿让一辈子都无法摆脱的19601号囚犯身份；《黑镜》中所有记忆都可被回放的社会。",
        referenceEn: "Jean Valjean unable to escape prisoner #19601 in Les Misérables; a society where all memories can be replayed in Black Mirror.",

        topology: "时间的冻结结构：档案把你的过去从时间流中切下来，固定在永恒的现在——你已经变了，但档案里的你永远停在那一刻。系统用你的切片审判你的整体",

        directive: {
            bright: "写档案拯救正义的一个瞬间——有人否认做过的事，但记录在那里：日期、地点、签名。受害者指着档案说'这是证据'。写那一刻档案的重量——它比任何人的嘴都可靠。不要写成监控赞美，写一种更基本的需要：在一个人可以否认一切的世界里，记录是唯一不会说谎的东西。",

            dark: "写主体去应聘——面试官翻开他的档案，目光停在某一行上。那一行是十年前的事——主体已经不是那个人了，但纸上的字没有跟着他一起变。写面试官抬头看他的眼神：不是鄙视，是一种更温和的、更不可撼动的东西——'我理解你变了，但系统不处理改变'。不要写成歧视叙事，写一种更深的捆绑：你可以改变你自己，但你无法改变你的记录。你活在两个时间里——你的身体在现在，你的档案在过去。",

            tension: "场景锚点：主体找到了删除记录的合法途径——经过三年申请，记录终于被'封存'了。但下一次背景调查时，审查员说'我们注意到有一段封存记录'。悖论不是'记录没被删除'——而是：删除的痕迹本身成了新的记录。你无法消除过去——因为消除本身就被记录在案。系统不会忘记你试图让它忘记。不要让主体获得清白的开始。"
        }
    },
    {
        id: "m4_machine_standard",
        name: "标准化", nameEn: "The Standard",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "系统要求所有人符合同一个模板。你的独特不是优势——是无法被处理的错误。",
        defEn: "The system requires everyone to fit one template. Your uniqueness isn't an asset — it's an unprocessable error.",
        core: "A面：标准保证了兼容性——如果每个人都用不同的接口,协作就不可能。统一是效率的代价。/ B面：但标准把不符合模板的人定义为'异常'。你不是'不好',你只是'和系统不兼容'。关键张力：你是改变自己去适应标准,还是坚持自己但被系统排斥？ | 秩序的裂隙(∄A): 标准是谁定的？它不是从自然中发现的——它是某一群人发明的,然后被强制推广为'唯一正确的'。每一个标准都是一次权力的行使。",
        coreEn: "A-side: Standards guarantee compatibility — if everyone uses different interfaces, collaboration is impossible. Uniformity is efficiency's price. / B-side: Standards define template-nonconformists as 'anomalies.' You're not 'bad,' just 'system-incompatible.' Key tension: Change yourself to fit the standard, or stay yourself but be excluded? | Rift(∄A): Who set the standard? It wasn't discovered in nature — it was invented by a group, then enforced as 'the only correct one.' Every standard is an exercise of power.",
        reference: "《飞越疯人院》被'标准化'碾碎的麦克墨菲；《三傻大闹宝莱坞》批判统一标准对个体差异的抹杀。",
        referenceEn: "McMurphy crushed by 'standardization' in One Flew Over the Cuckoo's Nest; critiquing uniform standards erasing individual difference in 3 Idiots.",

        topology: "模板的排异反应：标准不是在描述你——它是在规定你应该是什么形状。不符合模板的部分不被视为'个性'，而被视为'需要修剪的毛边'",

        directive: {
            bright: "写标准化运作良好的一个场景——一百个陌生人走进一个系统，标准化让他们在一小时内可以协作：统一的术语、统一的接口、统一的度量单位。写这种兼容性的力量：你不需要认识对方，你们只需要共享同一套格式。不要写成效率赞歌，写一种更深的文明成就：标准是陌生人之间信任的替代品。",

            dark: "写主体在标准化测试中被标记为'异常值'的那个瞬间——不是因为他做错了，是因为他的做法不在选项里。写他看着答题卡的那种感觉：四个选项，没有一个是他的答案。但答题卡不接受第五个选项。写他最终选了一个最接近的——那个'最接近的'和他的真实答案之间的距离，就是标准化从他身上切掉的东西。",

            tension: "场景锚点：一个孩子在标准化评估中被判定为'发展异常——建议干预'。他的父母看着报告，然后看着孩子——孩子在角落里专注地用积木搭一个所有人都没见过的结构。悖论不是'他是天才还是异常'，而是：标准化的评估工具无法区分这两者——因为它的设计就不包含'我们没有预料到的'这个类别。标准不认识惊喜。不要让孩子被诊断为正常。"
        }
    },
    {
        id: "m4_machine_auto_rejection",
        name: "自动拒绝", nameEn: "The Auto-Rejection",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你被机器拒绝了,但没有人类可以申诉——因为决策链上没有人类。",
        defEn: "Rejected by a machine with no human to appeal to — because the decision chain contains no humans.",
        core: "A面：自动化减少了人为错误和腐败——至少机器不会因为讨厌你的脸而拒绝你。/ B面：但你连对谁发怒都不知道。屏幕上只有一行字:'申请未通过'。没有名字,没有地址,没有解释。关键张力：如果机器的拒绝是最终的——你的怒火对准谁？ | 秩序的裂隙(∄A): 自动拒绝暴露了大他者最赤裸的真相——它甚至不需要一个'代理人'来执行拒绝。它直接就是一个没有面孔的'不'。",
        coreEn: "A-side: Automation reduces human error and corruption — at least machines won't reject you for disliking your face. / B-side: You don't even know who to be angry at. The screen shows one line: 'Application denied.' No name, no address, no explanation. Key tension: If the machine's rejection is final — at whom do you direct your rage? | Rift(∄A): Auto-rejection exposes the Big Other's barest truth — it doesn't even need an 'agent' to execute rejection. It simply is a faceless 'no.'",
        reference: "《上升》中AI系统自动拒绝底层人的所有社会申请；《我，丹尼尔·布莱克》被自动化审批系统碾碎的普通人。",
        referenceEn: "AI automatically rejecting all social applications from the underclass in Upturn; an ordinary man crushed by automated approval systems in I, Daniel Blake.",

        topology: "无面孔的否定：自动拒绝把'不'从一个人的行为变成了环境的属性——它不是某个人对你说不，而是世界本身在说不。你无法和世界谈判",

        directive: {
            bright: "写自动系统通过申请时的那种干净——没有人情世故，没有排队送礼，没有看脸色。屏幕上出现'申请通过'四个字时的那种不掺杂任何人类情绪的确认。写主体的轻松：没有人可以在这个过程中刁难他。不要写成技术乌托邦，写一种对人类弱点的逃离：在某些事情上，不和人打交道是一种恩赐。",

            dark: "写主体被拒绝后的操作路径——他点击'申诉'，屏幕跳转到一个表格。他填完表格，提交。三天后收到回复：'经系统重新审核，结果维持不变。'写他意识到'审核'他的申诉的也是同一个系统——他在向拒绝他的东西请求推翻拒绝。写他盯着屏幕时的那种特殊的安静：不是绝望，是发现自己面前没有'人'的那种孤独。你可以恨一个人，但你不能恨一个界面。",

            tension: "场景锚点：主体去找'人类客服'——经过四层自动语音菜单，终于接通了一个人。那个人听完情况，说'让我帮您查一下'，然后他听到键盘的敲击声——客服正在把他的情况输入同一个自动系统。悖论不是'找不到人'，而是：人类已经成了系统的输入终端——他们的工作不是'判断'，是把你的话翻译成机器可以处理的格式。人类客服不是系统的替代品，是系统的外设。不要让主体联系到有决定权的人。"
        }
    },
    {
        id: "m4_machine_debt_chain",
        name: "债务链", nameEn: "The Debt Chain",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你欠A的,A欠B的,B欠C的——没有人能还清,因为债务比所有人加起来还多。",
        defEn: "You owe A, A owes B, B owes C — no one can repay because debt exceeds everyone combined.",
        core: "A面：债务使合作成为可能——借贷意味着有人相信你的未来,这本身是一种信任。/ B面：但系统化的债务把信任变成了锁链。你不是在'偿还'——你只是在支付利息,而本金永远不减少。关键张力：如果全世界的债务同时消失——会迎来自由还是崩溃？ | 秩序的裂隙(∄A): 债务的总量已经超过了实际存在的财富——这意味着系统在运转的不是'真实的钱',而是'对未来的赌注'。大他者的基底是虚构的数字。",
        coreEn: "A-side: Debt makes cooperation possible — lending means someone believes in your future; that's trust. / B-side: Systematic debt turns trust into chains. You're not 'repaying' — just paying interest while principal never decreases. Key tension: If all debt worldwide vanished simultaneously — freedom or collapse? | Rift(∄A): Total debt exceeds total existing wealth — the system runs not on 'real money' but on 'bets on the future.' The Big Other's foundation is fictitious numbers.",
        reference: "《大空头》中金融系统建立在虚构数字上的终极赌博；《寄生虫》中贫困家庭在隐形债务链中的挣扎。",
        referenceEn: "The financial system's ultimate gamble on fictitious numbers in The Big Short; a poor family struggling in invisible debt chains in Parasite.",

        topology: "信任的锁链化：债务的原始形态是信任——'我借给你是因为我相信你的未来'。但当信任被利息量化，它就变成了一根越收越紧的绳子。你还的不是债，是你的未来",

        directive: {
            bright: "写借贷发生时的那种温暖——有人愿意把自己的钱交给你，因为他相信你会变好。写签下借条的那一刻：不是交易，是一种冒险的信任。不要写成金融叙事，写一种更原始的人类行为：我把我有的给你，因为我赌你的明天。这个赌注本身是美的。",

            dark: "写主体还完这个月的利息后算了一笔账——他已经还了三年，还的总额已经超过了本金，但本金几乎没有变。写他看着数字时的表情变化：从困惑到理解到安静。他明白了：这不是他欠了一笔钱——是他的未来被提前卖掉了。他每个月赚的钱先经过债务，然后到他手里的是剩余。他不是在'生活中还债'——他是在'债务中生活'。",

            tension: "场景锚点：主体欠A钱，A欠B钱，B欠C钱。主体终于还清了A——但A告诉他：'没用，我已经把你的欠条卖给D了，你现在欠D。'悖论不是'债务不合理'，而是：你的债务已经独立于你存在了——它在被交易、被打包、被转售，变成了一个你的名字贴在上面但你无法控制的金融产品。你欠的不再是一个人，是一个市场。你无法和市场谈判。不要让主体还清。"
        }
    },
    {
        id: "m4_machine_metric",
        name: "度量衡", nameEn: "The Metric",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "一切都必须被测量——不能被测量的就不存在。你的价值等于你的数据。",
        defEn: "Everything must be measured — what can't be measured doesn't exist. Your worth equals your data.",
        core: "A面：度量让比较变得客观——没有标尺,每个人都声称自己最好。数字至少提供了一个共同语言。/ B面：但度量把不可量化的东西(爱、尊严、灵感)排除在了'有价值'之外。系统只奖励可测量的成果。关键张力：你的最重要的工作恰好是不可测量的——你怎么证明它有价值？ | 秩序的裂隙(∄A): 度量本身不是'中性的'——选择测什么、不测什么,就已经做了价值判断。'客观数据'只是主观选择的下游产品。",
        coreEn: "A-side: Metrics make comparison objective — without a ruler, everyone claims to be best. Numbers provide a shared language. / B-side: Metrics exclude the unquantifiable (love, dignity, inspiration) from 'valuable.' The system rewards only measurable outcomes. Key tension: Your most important work happens to be unmeasurable — how do you prove its value? | Rift(∄A): Measurement isn't 'neutral' — choosing what to measure and what not already makes a value judgment. 'Objective data' is just a downstream product of subjective choices.",
        reference: "《黑镜·急转直下》社交评分量化人际关系；《死亡诗社》基廷撕掉课本上用公式衡量诗歌的那一页。",
        referenceEn: "Social scores quantifying relationships in Black Mirror: Nosedive; Keating tearing out the page measuring poetry by formula in Dead Poets Society.",

        topology: "可见性的暴政：度量衡不是在发现价值——它是在决定什么算作价值。不可测量的东西不是'无法证明有价值'，而是在度量衡的语言里根本不存在",

        directive: {
            bright: "写度量衡解决争端的一个瞬间——两个人都声称自己做得更好，度量衡终结了争论：数字在那里。写失败一方的沉默——不是不服，是无法反驳。不要写成数据崇拜，写一种更基本的文明功能：在一个所有人都可以自说自话的世界里，度量衡是唯一不参与争论的声音。",

            dark: "写主体做了一件他知道是重要的事——安慰了一个崩溃的同事，阻止了一场没有爆发的冲突，在无人注意的角落修复了一个别人会踩到的坑。写年终评估时这些事不出现在任何表格里。他的数据是：产出下降了3%。因为他把时间花在了'不计入绩效的事情'上。不要写成怀才不遇，写一种更精确的消失：他做的事情是真实的，但在度量衡的语言里，真实不是一个有效的类别。",

            tension: "场景锚点：一所学校决定用'快乐指数'来衡量学生的幸福感——每周填一次问卷，1到10分。三个月后数据显示'快乐指数'提升了12%。但有一个学生在问卷上一直填10分——因为他发现填高分可以避免被老师找谈话。悖论不是'数据被操纵'，而是：度量衡改变了它试图测量的东西。快乐被测量之后就不再是快乐了——它变成了一个需要被管理的指标。你测量什么，什么就异化。不要让学校发现问题。"
        }
    },
    {
        id: "m4_machine_jurisdiction",
        name: "管辖权缝隙", nameEn: "The Jurisdiction Gap",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你的问题恰好落在两个系统的边界上——A说归B管,B说归A管。你掉进了缝隙里。",
        defEn: "Your problem falls exactly on the border of two systems — A says it's B's job, B says it's A's. You fell into the gap.",
        core: "A面：权限划分防止了越权——每个机构只做自己擅长的事,这是制衡的基础。/ B面：但边界上没有人负责。两个系统各自完美运转,而你死在它们之间。关键张力：跨系统的问题需要跨系统的解决——但谁有权力跨系统？ | 秩序的裂隙(∄A): 你以为'系统'是一个整体——其实它是一堆碎片勉强拼在一起。每个碎片都以为别的碎片在管你。没有人管你。",
        coreEn: "A-side: Jurisdiction division prevents overreach — each institution does only what it's best at, the basis of checks and balances. / B-side: But at the border, no one is responsible. Two systems run perfectly while you die between them. Key tension: Cross-system problems need cross-system solutions — but who has cross-system authority? | Rift(∄A): You thought 'the system' was one whole — it's actually fragments barely held together. Each fragment thinks the other is handling you. No one is.",
        reference: "《我，丹尼尔·布莱克》在就业局和福利局之间来回踢皮球的布莱克；边境无人区的司法真空。",
        referenceEn: "Blake bounced between employment and welfare offices in I, Daniel Blake; legal vacuums in no-man's-land border zones.",

        topology: "碎片之间的无主地带：系统不是一个整体——它是很多碎片假装自己是一个整体。碎片之间的缝隙不被任何碎片认领，但你恰好站在缝隙里",

        directive: {
            bright: "写管辖权划分运作良好的一面——两个部门各司其职，不越界，不推诿。写一个具体的案例：一个复杂的问题被精准地分解成两部分，各自处理，最终在交接点无缝合并。写交接瞬间的那种精密。不要写成制度赞美，写一种系统设计的优雅：好的边界让专业性成为可能。",

            dark: "写主体被踢到第四个部门的那个下午——每个部门都给了他一个合理的解释为什么这不归他们管。写他手里攥着四张写着不同电话号码的纸条。每个号码都是真的，每个人都是对的——但他的问题在四个'对'之间的缝隙里，那个缝隙不属于任何一个部门的职责描述。不要写成行政批判，写一种更冷的发现：系统不是一张网——它是很多条线，线和线之间的空隙比线本身更多。",

            tension: "场景锚点：主体终于找到了两个部门的共同上级——这个人理论上可以解决跨部门问题。但那个人听完之后说：'这确实是缝隙，但处理缝隙的程序还没有被制定。'悖论不是'没人管'，而是：系统能认识到自己有缝隙——但填补缝隙的权力不在系统里。因为填补缝隙意味着重新划分管辖权，而重新划分的权力本身也有管辖权——你猜它在哪个部门？不要让问题被解决。"
        }
    },
    {
        id: "m4_machine_obsolescence",
        name: "淘汰", nameEn: "The Obsolescence",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "系统升级了,但你没有。不是你变差了——是标准变了,而你来不及跟上。",
        defEn: "The system upgraded but you didn't. You didn't worsen — the standard changed, and you couldn't keep up.",
        core: "A面：淘汰是进步的代价——如果不淘汰旧的,新的就无法生长。创造性毁灭是文明演化的引擎。/ B面：但你不是'旧的东西',你是一个人。系统把你和上一代产品归为同一类——过时、可丢弃。关键张力：如果跟上时代需要放弃你的全部经验——'进步'对你来说是升级还是自我毁灭？ | 秩序的裂隙(∄A): '新的就是好的'——但谁定义了'新'？十年前的'颠覆性创新'今天已经过时。标准本身也在被淘汰,证明了'标准'从来不是真理。",
        coreEn: "A-side: Obsolescence is progress's price — without discarding the old, the new cannot grow. Creative destruction is civilization's engine. / B-side: But you're not 'an old thing,' you're a person. The system classifies you with last-gen products — obsolete, disposable. Key tension: If keeping up means abandoning all your experience — is 'progress' upgrade or self-destruction? | Rift(∄A): 'New is good' — but who defines 'new'? Ten years ago's 'disruptive innovation' is now obsolete. The standard itself gets obsoleted, proving 'standards' were never truth.",
        reference: "《摩登时代》被机器淘汰的工人；《在云端》中专门替人传达被裁员消息的残酷系统。",
        referenceEn: "Workers obsoleted by machines in Modern Times; the cruel layoff-notification system in Up in the Air.",

        topology: "标准的漂移：淘汰不是因为你退步了——是因为终点线在你走的时候被向前移了。你站在原地，但'原地'的定义变了",

        directive: {
            bright: "写新系统替代旧系统时带来的那种解放——旧的方式笨重、低效、充满人为错误。写第一次用新系统完成工作时的流畅感：以前需要三天的事情现在两小时。不要写成进步叙事，写一种更朴素的体验：有些东西确实应该被替换——不是因为旧的不够好，是因为新的更适合现在。",

            dark: "写主体被通知'你的岗位已被优化'的那个下午——'优化'不是针对他个人的，是针对他的技能类别的。写他走出办公室时路过新员工的工位——那个人在做他做了十五年的工作，但用的是他完全不认识的工具。写他的眼睛在那个屏幕上停了两秒。不要写成时代悲歌，写一种更精准的错位：他没有做错任何事——他只是属于上一个版本的世界。",

            tension: "场景锚点：主体决定学习新技能——他坐在教室里，周围都是比他年轻二十岁的人。老师讲的内容他听得懂，但速度是按年轻人的节奏来的。悖论不是'学不会'，而是：他学会了——但市场已经不要'刚学会的人'了，市场要'生下来就会的人'。学习是可能的，但学习的时间成本被系统标记为'不划算'。你的努力在精算表上是一笔亏损。不要让主体成功转型。"
        }
    },
    {
        id: "m4_machine_loop",
        name: "循环", nameEn: "The Loop",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "你完成了所有步骤,结果被送回起点。不是惩罚——是系统的正常运作。",
        defEn: "You completed all steps but were sent back to start. Not punishment — just the system operating normally.",
        core: "A面：循环提供了反复确认的机会——也许你第一次确实漏了什么。系统的谨慎可以防止灾难性错误。/ B面：但当循环没有出口时,谨慎变成了折磨。你不是在'重新确认',你是在永恒的原地踏步中磨损自己。关键张力：你怎么区分'有意义的重复'和'无目的的循环'？ | 秩序的裂隙(∄A): 循环没有设计者——它是多个独立规则互相作用的意外结果。没有人故意让你重来,但也没有人能让你停下。",
        coreEn: "A-side: Loops offer retry opportunities — maybe you did miss something. System caution prevents catastrophic errors. / B-side: When the loop has no exit, caution becomes torture. You're not 're-confirming'; you're wearing yourself down in eternal stasis. Key tension: How do you distinguish 'meaningful repetition' from 'purposeless looping'? | Rift(∄A): The loop has no designer — it's an accidental result of multiple independent rules interacting. No one intentionally made you restart, but no one can make you stop.",
        reference: "《土拨鼠之日》被困在同一天中寻找出口；《恐怖游轮》中永远无法逃脱的时间循环。",
        referenceEn: "Searching for an exit while trapped in the same day in Groundhog Day; the inescapable time loop in Triangle.",

        topology: "意外的永动机：循环不是被设计的——它是多条规则互相咬合时意外产生的旋转。没有入口也没有出口，因为它不是一条路，是一个闭合的环",

        directive: {
            bright: "写重复第二次时的那种学习——主体回到起点，但这次他知道了第一次不知道的东西。写他在熟悉的流程中发现了一个之前忽略的细节。不要写成'成长叙事'，写一种更精确的体验：重复不总是惩罚——有时它是唯一能让你慢下来注意到你错过的东西的力量。",

            dark: "写主体回到起点的第五次。这一次他不再检查自己是否漏了什么——因为他什么都没漏。他完美地完成了每一步，但终点仍然把他送回了起点。写他第五次站在起点时的表情：不是愤怒，不是绝望，是一种更可怕的东西——适应。他开始自动执行第一步，像肌肉记忆。不要写成西西弗斯叙事，写一种更冷的观察：循环的真正胜利不是困住你的身体，是让你的抵抗变成流程的一部分。",

            tension: "场景锚点：主体在循环中发现了一个异常——第三步和第七步之间有一扇他以前没注意到的门。他推开它——门后面是循环的第一步。悖论不是'逃不出去'，而是：循环不是在一个平面上——它是一个莫比乌斯带。你以为你在走直线，但直线本身是弯的。你以为的'出口'是另一个'入口'。不是没有门——是所有的门都通向里面。不要让主体发现真正的出口。"
        }
    },
    {
        id: "m4_machine_market",
        name: "市场", nameEn: "The Market",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "没有人在控制它,但所有人都被它控制。它不是一个人,不是一个组织——它是所有人的欲望的总和。",
        defEn: "No one controls it, yet everyone is controlled by it. Not a person, not an organization — it's the sum of everyone's desires.",
        core: "A面：市场是人类最强大的信息处理器——它汇总了所有人的需求和偏好,比任何个体或委员会都更聪明。/ B面：但市场不考虑公平。它不问'你需不需要',只问'你买不买得起'。你的生命权和购买力直接挂钩。关键张力：如果市场认为你的生命'不值钱'——你用什么反驳？ | 秩序的裂隙(∄A): 所有人都以为市场是'自然规律'——但市场的规则是人制定的(货币、税率、交易法)。'看不见的手'背后是一大堆很可见的法律。",
        coreEn: "A-side: The market is humanity's most powerful information processor — it aggregates everyone's needs, smarter than any individual or committee. / B-side: But the market ignores fairness. It doesn't ask 'do you need it,' only 'can you afford it.' Your right to life is directly linked to purchasing power. Key tension: If the market decides your life 'isn't worth it' — with what do you argue? | Rift(∄A): Everyone thinks the market is 'natural law' — but market rules are human-made (currency, tax rates, trade law). Behind 'the invisible hand' lies a pile of very visible legislation.",
        reference: "《大空头》市场崩溃时每个人都在按规则运作但所有人都在坠落；《华尔街》贪婪作为市场引擎的双刃剑。",
        referenceEn: "Everyone operating by rules yet all falling when the market collapses in The Big Short; greed as market engine's double-edged sword in Wall Street.",

        topology: "无主体的主权者：市场是所有人的行为的总和——但它的行为不等于任何人的意图。它是一个没有意志的意志，一个没有人格的暴君，一个所有人共同制造但没有人能控制的力场",

        directive: {
            bright: "写市场分配资源时的那种无情但高效的美——一万个陌生人各自做出自己的选择，没有人在协调，但最终好的东西被更多人选择了，坏的东西被淘汰了。写这种自发秩序的优雅：没有指挥，但有乐章。不要写成经济学教科书，写一种更深的惊奇：复杂性从简单规则中涌现，这件事本身是令人敬畏的。",

            dark: "写市场不在乎你的那一面——主体的技能过时了，他的行业消失了，不是因为他做错了什么，是因为消费者的偏好变了。他去市场上找工作：市场说'你的价格太高了'。写他降价、再降价、再降价——直到他的价格低于他维持生存的成本。市场仍然说'太高了'。不要写成对资本主义的批判，写一种更冰冷的事实：市场不恨你——它甚至没有注意到你。你的消失对它来说是一次微不可察的效率提升。",

            tension: "场景锚点：市场崩溃了——所有人都在亏损，所有人都在恐慌。主体站在交易大厅里看着屏幕上的数字往下掉。悖论不是'市场失灵了'，而是：市场没有失灵——恐慌也是市场的正常运作。下跌和上涨一样'正确'，崩溃和繁荣一样'有效率'。市场不区分建设和毁灭——它只处理信号。你的房子、你的存款、你的退休计划——它们在市场的语言里不是'你的生活'，只是信号。不要让市场恢复。"
        }
    },
    {
        id: "m4_machine_protocol",
        name: "协议", nameEn: "The Protocol",
        group: "C. 机器的秩序", groupEn: "The Machine",
        def: "在你出生之前就已经签好的规则。你没有同意过,但你必须遵守——因为所有人都在遵守。",
        defEn: "Rules signed before you were born. You never agreed, but you must comply — because everyone else does.",
        core: "A面：协议让陌生人之间的合作成为可能——你不需要信任对方这个人,只需要信任你们共同遵守的规则。/ B面：但你从来没有选择过这些规则。你出生就被纳入了一套你不理解的协议(国籍、语言、法律体系)。关键张力：如果你不同意这些协议——你的'退出'按钮在哪里？ | 秩序的裂隙(∄A): 协议的第一版是谁签的？追溯到底,你会发现第一份'社会契约'从来没有被真正签署过——它只是被假定为'已签'。",
        coreEn: "A-side: Protocols make cooperation between strangers possible — you don't need to trust the person, just the shared rules. / B-side: You never chose these rules. You were born into protocols you don't understand (nationality, language, legal system). Key tension: If you disagree with these protocols — where is your 'exit' button? | Rift(∄A): Who signed the first version? Trace back and you find the original 'social contract' was never actually signed — it was simply assumed as 'already agreed.'",
        reference: "《社会契约论》卢梭的根本追问：你什么时候签过这份契约？《黑客帝国》中你出生就被插入的系统。",
        referenceEn: "Rousseau's fundamental question: when did you sign this contract? The system you were plugged into at birth in The Matrix.",

        topology: "先于你的同意：协议的暴力不在于它的内容——在于你从未被问过'你同意吗'。你出生时它已经在运行了，你的第一声呼吸就是在它的语法里发出的",

        directive: {
            bright: "写协议让陌生人合作的那种奇迹——两个从未见面的人，因为共享一套规则（语言、货币、交通信号），可以在三秒钟内完成一次交易。写红绿灯：所有人都停在红灯前，没有人互相确认过'我们都同意停'——但所有人都停了。不要写成社会契约论，写一种更日常的惊奇：你每天都在依赖你从未签署过的协议，而它每天都在工作。",

            dark: "写主体第一次意识到协议存在的那个瞬间——可能是在申请签证时，被问到'国籍'。他从来没有选择过出生在哪里，但这个他从未选择的事实决定了他可以去哪里、不可以去哪里、需要在哪些柜台前排队。写他填写'国籍'那一栏时的手——那只手在写一个他没有签署过的合同的条款。不要写成政治批判，写一种更安静的荒谬：你一生中最重要的几个'决定'（出生地、母语、法律身份）都不是你做的。",

            tension: "场景锚点：主体问'我可以退出这个协议吗'。回答是：可以——如果你能找到另一个协议加入。但所有协议都有同一个条款：你必须先退出上一个才能加入下一个，而退出需要上一个协议的批准。悖论不是'没有自由'，而是：自由本身被编码在协议里——你行使'退出权'的能力取决于你正在试图退出的那个系统。你的逃生舱的钥匙锁在舱里面。不要让主体找到另一个协议。"
        }
    },
];
