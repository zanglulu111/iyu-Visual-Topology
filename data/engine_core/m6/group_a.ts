import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_A: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 意义的放逐 (Symbolic Severance) — 20 Items
    // 丧失维度：你在"大他者的档案簿"中的坐标被删除。
    // 核心感受：你物理上还活着，但社会学意义上你已经死了。
    // 光谱：名字丧失(1-5) → 信誉丧失(6-10) → 地位丧失(11-15) → 连接丧失(16-20)
    // ============================================================

    // ---- 名字丧失：主体在符号秩序中的"第一能指"被拔除 ----

    {
        id: "stake_erasure",
        name: "社会抹杀", nameEn: "Social Erasure",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "从社会登记簿中被彻底删除——物理存在被保留，但在大他者的档案中，你不再是一个'人'。",
        defEn: "Thoroughly deleted from the social registry — physical existence preserved, but in the Big Other's filing system, you cease to be a 'person'.",
        core: "A面：从名册上消失反而获得了诡异的自由——不被追踪、不被定义。'不存在的人'是最危险的人。/ B面：但这种自由的代价是永恒的孤独——没有人会来找你，没有人在你死后提起你的名字。你从世界上完整地蒸发了。关键张力：被社会抹杀之后——是终极自由，还是终极孤独？ | 代价切口(−Φ): 存在的坐标系被拔除。",
        coreEn: "A-side: Disappearing from the registry grants strange freedom — untracked, undefined. The one who 'doesn't exist' is the most dangerous. / B-side: But the cost is eternal solitude — no one comes looking, no one speaks your name after you die. You evaporate completely. Key tension: After social erasure — ultimate freedom, or ultimate loneliness? | Castration Circuit: The coordinate system of existence is uprooted.",
        reference: "《全民公敌》一夜之间所有身份记录被删除的律师；《黑镜·急转直下》评分归零后在公众视野中变为白噪音的被屏蔽者。",
        referenceEn: "The lawyer whose identity records vanish overnight in Enemy of the State; the blocked user becoming white noise at zero rating in Black Mirror: Nosedive.",

        topology: "交出的不是证件——而是'可被寻找'这个资格。收走方式不是没收而是注销，世界删除了坐标系本身",

        directive: {
            bright: "写他清醒地看着'被看见'从身上脱落的那一刻。街上所有目光穿过他，他感觉到这种穿透的凉。他对陌生人微笑，对方没有反应——他在这个空白里辨认出代价的精确形状。不要写他得到了什么，只写他注视着它离开。",

            dark: "写他买咖啡时撞见代价——系统查无此人。他不记得交出过这个。掏出身份证、驾照、旧照片，每一样都被退回。每一次'您不在系统里'都是他低头发现手又空了一点的瞬间。代价不是一次性收取的，它在日常里一笔一笔地扣。",

            tension: "他坐在自己沙发上，钥匙还能开门，照片还挂墙上。但他不确定是否已经付完——'社会存在'这个词太大，他不知道它有多少零件，不知道哪些零件会在未来某个早晨突然缺席。写他等下一笔扣款到来的姿势。不要给结局。"
        }
    },
    {
        id: "stake_name_loss",
        name: "剥夺姓名", nameEn: "Loss of Name",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "名字被没收，从此以编号、代称或蔑称替代——灵魂的最简句法被格式化。",
        defEn: "Name confiscated, permanently replaced by a number, alias, or slur — the simplest syntax of the soul is formatted.",
        core: "A面：名字是大他者给你的第一副镣铐——剥夺了它，'无名者'可以成为任何人。/ B面：但名字也是你与世界最基本的纽带。连'叫什么'都被收走，你就失去了被辨认、被思念的资格，变成了代号背后的空洞。关键张力：失去名字——是被剥夺了自我，还是卸下了别人赋予的身份？ | 代价切口(−Φ): 灵魂的第一能指被没收。",
        coreEn: "A-side: A name is the Big Other's first shackle — stripped of it, the 'nameless' can become anyone. / B-side: But a name is the most basic bond to the world. When even 'what to call you' is confiscated, you lose the right to be recognized or missed — a void behind a serial number. Key tension: Losing your name — robbed of self, or shedding assigned identity? | Castration Circuit: The soul's first signifier is confiscated.",
        reference: "《悲惨世界》冉·阿让沦为代号24601的苦役犯；《千与千寻》被抽走全名缩为'千'、失去归乡密码的少女。",
        referenceEn: "Jean Valjean reduced to prisoner 24601 in Les Misérables; Chihiro stripped of her full name to 'Sen,' losing the code to return home in Spirited Away.",

        topology: "交出的不是几个汉字——而是'可被呼唤'这项能力。名字走了之后，锁还在但钥匙没了",

        directive: {
            bright: "写他第一次被叫编号时张嘴想纠正，但停住了。写这个停顿里他看见的东西：名字和自己之间原来隔着一条缝，以前没注意过，现在名字被拿走了缝才暴露出来。写他盯着那个空位——空位的形状比名字本身更清晰。不要写他得到了什么。",

            dark: "写他在表格'姓名'栏前停下笔——这个最小的日常动作里撞上了代价。他在脑子里默念自己的名字，发现它正在变成空壳，像一个字重复太多遍后的语义饱和。他不记得什么时候付的这笔，但笔停下来这一秒，他知道账已经扣了。恐怖藏在填表里。",

            tension: "他站在镜子前试图不用名字描述自己——'这是一个……'后面接什么？他不确定是否付完：'被叫到'的能力已经没了，但'被想起'呢？'被写进遗嘱'呢？每个没想到的场景都可能藏着下一笔扣款。不要让他找到替代名字。"
        }
    },
    {
        id: "stake_replace",
        name: "身份顶替", nameEn: "Replacement",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "另一个人合法继承了你的全部能指——你的名字、你的位置、你的面孔。你变成了自己生命的冗余副本。",
        defEn: "Another person legally inherits all your signifiers — your name, your position, your face. You become the redundant copy of your own life.",
        core: "A面：被无缝顶替让你看清真相——系统从来不需要'你'，只需要一个填满位置的人。清醒本身是一种解放。/ B面：但你发现你全部的独特性其实可以被批量复制。你不是不可替代的，你只是碰巧先到。关键张力：发现自己可以被替代——摧毁你，还是让你停止从'被需要'中汲取存在感？ | 代价切口(−Φ): 独特性的幻象被戳破。",
        coreEn: "A-side: Seamless replacement reveals truth — the system never needed 'you,' just someone to fill the slot. Clarity itself is liberation. / B-side: But you discover all your uniqueness can be mass-produced. You weren't irreplaceable; you just arrived first. Key tension: Discovering you're replaceable — destroyed, or freed from extracting existence from 'being needed'? | Castration Circuit: The illusion of uniqueness is punctured.",
        reference: "《天才雷普利》完美顶替公子哥身份与生活的偷窥者；《我们》被地底克隆体彻底鸠占鹊巢的真身。",
        referenceEn: "The voyeur perfectly overriding a rich heir's identity in The Talented Mr. Ripley; the original self utterly usurped by underground clones in Us.",

        topology: "交出的不是位置——而是'不可替代'这个信念。你还站在原地，但全部坐标已经长在了另一个人身上",

        directive: {
            bright: "写他清醒地看着顶替者用自己的杯子喝水、坐自己的椅子、被自己的朋友叫自己的名字——那些人是真的没察觉区别。写他在这个发现里辨认出代价的轮廓：'我'不是不可复制的本体，'我'只是一组坐标。不要写他轻了或重了，只写他看着。",

            dark: "写他试图向旧友证明'我才是真的'——说出私密暗号、共同记忆。旧友的表情：不是认出，是困惑，然后一点不耐烦。他发现记忆不够——因为顶替者也有同样的记忆。他嘴里的话越来越快越来越碎。最后停下来，不是没话说，是突然不确定自己说的是不是真的。",

            tension: "他和顶替者面对面，两张同样的脸。他在对方眼里找证据——一个微表情、任何能证明'那个是假的'的细节。找不到。他不确定自己是否还在支付：如果所有外部标记都一样，'真的'这个词还指向什么？他往体内找，只找到一种无法验证的确信。不要回答够不够。"
        }
    },
    {
        id: "stake_forgotten",
        name: "世界遗忘", nameEn: "Being Forgotten",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你的存在没有留下任何痕迹——全世界关于你的记忆被强行抽取，仿佛你从未出生。",
        defEn: "Your existence leaves zero trace — the entire world's memory of you is forcibly extracted, as if you were never born.",
        core: "A面：被遗忘意味着你不再欠世界任何债——没有期待、没有角色。最彻底的'清零'。/ B面：但人类最深的恐惧不是死亡——是死后没人记得你活过。被遗忘比被杀更残酷，因为杀你的人至少承认你存在过。关键张力：如果全世界都忘了你——'你'和'从未存在过'有什么区别？ | 代价切口(−Φ): 比死亡更深的终极死亡。",
        coreEn: "A-side: Being forgotten means you owe the world nothing — no expectations, no roles. The most thorough 'reset.' / B-side: But humanity's deepest fear isn't death — it's nobody remembering you lived. Being forgotten is crueler than being killed; your killer at least acknowledged you existed. Key tension: If the world forgets you — what's the difference between 'you' and 'never existed'? | Castration Circuit: The ultimate death deeper than death.",
        reference: "《寻梦环游记》被活人集体遗忘后化为金屑消散的亡灵；《归来》站在火车站牌下终身无法被妻子认出的丈夫。",
        referenceEn: "The spirit dissolving into golden dust once all living memory fades in Coco; the husband standing under train station signs forever unrecognized by his wife in Coming Home.",

        topology: "交出的不是生命——而是'曾经活过'的证据。活着的人变成一条没有来源的数据，比死更深的删除",

        directive: {
            bright: "写他清醒地看着'被记住'从自己身上剥离。他走进母校，没人认识他，也没人驱赶。他坐在角落喝咖啡——他在注视这个正在发生的支付过程：每张面孔掠过他时，他看见又一条记忆线断开了。不要写他发现了什么自由，只写他看着那些线一根根松脱的眼神。",

            dark: "写他站在母亲面前——母亲礼貌微笑，像看一个陌生人。他说'妈'，嘴唇形状、声带震动都对，但这个字到达对方耳朵时已经失去了密码。母亲眼中没有拒绝也没有痛苦，只有空白。他在这个空白里撞见代价：不是被忘了，是'被记得'这个能力被连根拔了。",

            tension: "他翻开旧相册——照片还在，但他站过的位置变成了空白。他用手指触摸那个空位。他不确定这笔代价付到哪一步了：记忆没了，照片没了，还有什么会消失？他不知道代价的边界在哪，因为被遗忘没有底。不要让他找到一张还有自己影像的照片。"
        }
    },
    {
        id: "stake_language_loss",
        name: "母语剥夺", nameEn: "Language Loss",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "母语被强行斩断——被迫终生使用压迫者的语言来思考、发音和做梦。",
        defEn: "Mother tongue forcibly severed — compelled for life to think, pronounce, and dream in the oppressor's language.",
        core: "A面：失去母语有时反而获得局外人的洞察力——每一种语言都是一种看世界的方式。/ B面：但语言不是工具——语言是'存在的家'（海德格尔）。失去用母语骂人、祈祷和说梦话的能力，你失去的是灵魂深处那个不需要翻译的自己。关键张力：用敌人的语言思考——是被征服了，还是在敌人的语法里埋下了反叛的种子？ | 代价切口(−Φ): 文化潜意识的根基被拔除。",
        coreEn: "A-side: Losing mother tongue sometimes grants outsider clarity — each language is a way of seeing the world. / B-side: But language isn't a tool — it's 'the house of being' (Heidegger). Losing the ability to curse, pray, and sleep-talk in your mother tongue means losing the deepest self that needs no translation. Key tension: Thinking in the enemy's language — conquered, or planting rebellion inside their grammar? | Castration Circuit: The root of cultural subconsciousness is uprooted.",
        reference: "《赛德克·巴莱》被迫学习殖民者语言、放弃猎首文化的原住民；《1984》被'新话'洗刷掉反叛词汇的城民。",
        referenceEn: "Indigenous people forced to learn the colonizer's language and abandon their culture in Warriors of the Rainbow; citizens brainwashed by Newspeak erasing all rebel vocabulary in 1984.",

        topology: "交出的不是一种说话方式——而是做梦的语法。潜意识从此寄居在别人的房子里，你成了自己内部的房客",

        directive: {
            bright: "写他清醒地听到代价正在发生的声音：他用新语言写出一首诗，写完后愣住了——这首诗说出了母语从未让他说出的东西。他在注视这个支付过程：母语的一面墙正在倒塌，墙后面有一个角度。不要写成温情融合，写他盯着那面正在倒的墙。",

            dark: "写他深夜惊醒，听见自己梦里说的是新语言。他坐在床上试图用母语骂一句最脏的话——那个词卡在舌根上，发音变得陌生，像嘴里含着一颗不属于自己的牙。他在这个卡壳里撞见代价：母语不是被夺走的，它是从内部萎缩的。没有痛感的消失更不可逆。",

            tension: "他在街上偶然听到有人说母语——一句'小心台阶'。整个身体先于意识反应：心跳加速、泪腺启动。他不确定这笔代价付到哪一步了：身体还记得，大脑已经搬家。这道裂缝就是他无法清算的部分——他不知道身体的记忆算不算还没付完的余额。不要让他搭话。"
        }
    },

    // ---- 信誉丧失：名字还在，但被涂上了洗不掉的颜色 ----

    {
        id: "stake_stigma",
        name: "背负恶名", nameEn: "Stigmatization",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "不仅失去荣誉，还被迫替系统承担了最肮脏的罪名——永远被钉在耻辱柱上。",
        defEn: "Not merely losing honor, but forced to bear the system's dirtiest sins — nailed forever to the pillar of shame.",
        core: "A面：既然全世界认定你是最坏的那个，你反而不需要再讨好任何人了。最黑暗的自由藏在最深的耻辱里。/ B面：但恶名会像辐射一样污染靠近你的每一个人——孩子会被指着说'他爸是那个人'。关键张力：当全世界认定你是怪物——你是证明他们错了，还是索性活成他们害怕的样子？ | 代价切口(−Φ): 道德倒影被永久涂黑。",
        coreEn: "A-side: Since the world declared you the worst, you no longer need to please anyone. The darkest freedom hides in deepest shame. / B-side: But stigma radiates contamination to everyone near you — children get pointed at: 'his father is that person.' Key tension: When the world decrees you a monster — prove them wrong, or become what they fear? | Castration Circuit: The moral reflection permanently blackened.",
        reference: "《狩猎》因小女孩一句谎言被钉为恋童癖的无辜教师；《进击的巨人》替世人背下灭世原罪的艾伦。",
        referenceEn: "An innocent teacher crucified as a pedophile by a child's false claim in The Hunt; Eren bearing the sin of global annihilation for his people in Attack on Titan.",

        topology: "交出的不是名声——而是'名字被中性地念出'的权利。名字没丢，但词的温度被永久改写，每次被念出都拖着注脚",

        directive: {
            bright: "写他清醒地看着恶名附着在自己名字上的过程——有人叫他的名字，名字后面拖着一条影子，那条影子是新长出来的。他站在目光里没有移开，在辨认代价的精确形状：不是'别人怎么看我'，而是'名字被不带前缀地念出'的权利正在脱落。不要写他适应了，只写他测量那条影子的长度。",

            dark: "写他孩子从学校回来，书包上被马克笔写了一个词——这是他撞见代价的瞬间。他不记得签过这笔，但账已经扣到了孩子身上。他蹲下来擦那个词，擦不掉，墨渗进了布料纤维。他在这个擦的动作里发现代价的计量单位不是耻辱，而是辐射半径。越擦字迹越扩散。不要写他怎么解释。",

            tension: "超市结账，收银员通过会员卡认出他——职业微笑变僵硬。他不确定这笔代价付完没有：名字被染色是一次性事件，但每次被念出来都再结一次账。收银员的僵硬是今天那笔，明天在另一个柜台前还会有另一笔。代价没有总价，按次计费。不要让他解释或逃走。"
        }
    },
    {
        id: "stake_misunderstood",
        name: "千古误读", nameEn: "Eternal Misreading",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "明明是拯救一切的人，却背负着制造灾难的罪名——且永远无法公开辩解。",
        defEn: "The one who saved everything bears the stigma of causing the disaster — and can never publicly defend themselves.",
        core: "A面：沉默的英雄比喧哗的英雄更接近真相——解释会破坏你保护的东西。被误解本身就是正确代价的一部分。/ B面：但人类不是为独自承受真相而设计的。'我救了所有人，但所有人都恨我'——这种不可言说的孤独会从内部把你蛀空。关键张力：如果为你正名会毁掉你保护的一切——你选择真相还是继续被误解？ | 代价切口(−Φ): 正当性与功勋被永久剥夺。",
        coreEn: "A-side: The silent hero is closer to truth than the celebrated one — explanation would destroy what you protect. Being misunderstood is part of the correct price. / B-side: But humans aren't built to bear truth alone. 'I saved everyone, but everyone hates me' — that unspeakable loneliness hollows you from within. Key tension: If clearing your name destroys what you protected — truth, or staying misunderstood? | Castration Circuit: Legitimacy and merit permanently stripped.",
        reference: "《黑暗骑士》承下双面人罪名遁入暗夜的蝙蝠侠；《英雄》忍受暴君骂名、以万箭穿心守护天下大义的无名刺客。",
        referenceEn: "Batman bearing Harvey's crimes and fleeing into the storm in The Dark Knight; the nameless assassin enduring a tyrant's stigma to protect the greater good in Hero.",

        topology: "交出的不是功劳——而是'功劳和你之间的署名权'。功还在，但署名被改成了罪状，同一件事从内部翻转了极性",

        directive: {
            bright: "写他清醒地看着辩白的权利离开自己——他坐在没人认识他的公园长椅上，嘴是闭着的。他在注视这个支付过程：不用组织语言、不用校准措辞、不用维护一个'真实的我'。写他看着'解释自己'这个能力从手里放下去的动作。不要写释然，写身体层面正在发生的松弛。",

            dark: "写他在街上被陌生人拦住——'你就是那个……'后面接的是他从未做过的事。他嘴唇动了一下但没张开，不是忍耐，是计算过了：解释需要三十分钟，对方的判决只用了三秒。他在这个算术里撞见代价的计量单位：不是误解本身，而是每一次解释的成本永远高于判决。转身走开，背后那句定性像手指在脊椎上写字。",

            tension: "深夜，光标停在一份声明的空白文档上。他可以写出真相——每个细节、每条证据。手指悬在键盘上方。他不确定这笔代价是否还在继续：如果他说了，保护的东西就碎了；不说，碎的是他在所有人心中的样子。两种碎法只能选一种，而他不知道哪种碎得更贵。不要让他打字或关电脑。"
        }
    },
    {
        id: "stake_discredited",
        name: "信用破产", nameEn: "Discredited",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你是真相的预言家——但被系统永久打上了'妄想症骗子'的标签。没有人再信你说的任何一句话。",
        defEn: "A prophet of truth — but permanently labeled 'delusional liar' by the system. No one believes a single word you say.",
        core: "A面：不被相信反而验证了你的洞察——卡桑德拉的诅咒恰恰证明她看到的比所有人都真实。/ B面：但'看到真相却说不出来'比失明更深。你眼睁睁看着灾难降临，手里握着解决方案，但连最亲的人都望向别处。关键张力：如果你知道一切但没人信你——你还有义务继续预警吗？ | 代价切口(−Φ): 预言能力与信誉被双重废除。",
        coreEn: "A-side: Not being believed validates your insight — Cassandra's curse proves she saw more truly than anyone. / B-side: But 'seeing truth yet unable to convey it' is blindness deeper than blindness. You watch disaster approach holding the solution, while even your closest look away. Key tension: If you know everything but no one believes you — are you still obligated to warn? | Castration Circuit: Prophetic ability and credibility both abolished.",
        reference: "《大空头》看穿次贷危机却被全华尔街嘲笑为疯子的独眼投资人；《哈利·波特》目睹伏地魔归来却被魔法部扣上'妄想症'帽子的少年。",
        referenceEn: "The glass-eyed investor mocked as a maniac for seeing the housing crash in The Big Short; Harry labeled delusional by the Ministry despite facing Voldemort in Harry Potter.",

        topology: "交出的不是声音——而是'声音被当作信号接收'的能力。嘴没被堵，但你说出的每个字自动降格为噪音",

        directive: {
            bright: "写他预言的灾难真的发生了——他坐在电视前看新闻，画面和他三年前画的图表一模一样。他没有笑也没有哭，端着一杯凉了的茶喝了一口。他在注视代价正在被确认的那一刻：'被证实'没有带来快感，只有一种干燥的清醒。看到就是看到了。不要写复仇的快意。",

            dark: "写他最后一次预警——把数据摊在最信任他的人面前，一条一条讲。对方听完后的表情：不是反驳，是同情。他在这个同情里撞见代价：反驳至少把他的话当论点对待了，同情把他的话当成了症状。他收起文件时把每张纸折好放进信封，像在给自己写一封永远不会被打开的遗书。",

            tension: "他站在讲台上，底下一百个人。他知道地基有裂缝，四十八小时内不撤离楼会塌。写他张嘴的那一秒：他不确定这笔代价的边界在哪——说出来会引发恐慌，恐慌导致踩踏，踩踏先于坍塌杀人。沉默和开口都在继续支付，而他是唯一知道这件事的人。不要让他选择。"
        }
    },
    {
        id: "stake_mockery",
        name: "沦为笑柄", nameEn: "Public Mockery",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "毕生的追求和极致的痛苦，在大他者眼里被降格为一档滑稽喜剧供人消费。",
        defEn: "A lifetime of pursuit and extreme suffering downgraded into slapstick comedy for public consumption.",
        core: "A面：被嘲笑的人拥有小丑式的自由——尊严没了，你反而能说出体面人不敢说的真话。/ B面：但被嘲笑比被忽视更残酷——被忽视至少你的痛苦是私人的。被嘲笑意味着你的痛苦成了公共娱乐产品，你连悲剧的资格都没有。关键张力：当你的痛苦变成笑话——加入笑声自保，还是坚持痛苦是真实的？ | 代价切口(−Φ): 崇高性被褫夺——连悲剧的资格都没有。",
        coreEn: "A-side: The mocked possess jester's freedom — dignity gone, you can speak truths the respectable dare not. / B-side: But being mocked is crueler than being ignored — ignored, your pain is at least private. Mocked, your suffering becomes public entertainment. You don't even qualify for tragedy. Key tension: When pain becomes a joke — join the laughter, or insist it's real? | Castration Circuit: Sublimity stripped — not even qualified for tragedy.",
        reference: "《小丑》被名嘴当众当作笑料耍弄的底层人亚瑟；《阮玲玉》吞药自尽之际仍被小报嚼成花边谈资的名伶。",
        referenceEn: "Arthur paraded as a miserable punchline on live TV in Joker; the starlet whose suicide is chewed into tabloid gossip in Center Stage.",

        topology: "交出的不是尊严——而是'痛苦被严肃对待'的资格。痛苦还在，但它被重新编码为娱乐产品，你在自己的悲剧里成了喜剧角色",

        directive: {
            bright: "写他站在后台，掌声笑声从幕布后面传来。他脸上的妆还没卸，镜子里这张涂抹过的脸——他在注视代价正在被支付的过程：小丑是唯一被允许把痛苦画在脸上的人。写他看着镜子里那张脸的眼神，不是苦涩，是一种测量——面具后面还剩多少是他的。",

            dark: "写他在人群外围听到有人复述他的痛苦——作为段子，带着模仿他口音的夸张。笑声一波一波起来。他嘴角也动了一下——不是笑，是条件反射，他已经被训练出'听到关于自己的事就配合微笑'的回路。他在这个肌肉运动里撞见代价：脸在笑，但脸后面的东西已经不认识这张脸了。",

            tension: "他被邀请上台重演那个让他成为笑柄的时刻。灯光打在脸上，麦克风已经递到嘴边。他握住麦克风——他不确定代价是否还在继续：配合了，痛苦就被盖章为'不严重'；拒绝了，他成了'开不起玩笑的人'，这本身又是一个笑话。两条路都通向笑声。不要让他开口或放下麦克风。"
        }
    },
    {
        id: "stake_scandal",
        name: "身败名裂", nameEn: "Scandal",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "用极其难堪且不可辩驳的丑闻，全方位摧毁一个人建立了一辈子的公众信誉结构。",
        defEn: "Utterly destroying a lifetime of public credibility through an undeniable, devastating scandal.",
        core: "A面：丑闻是最暴力的诚实——把抛光的公共表面砸碎，露出下面不完美的血肉。被扒光有时比穿着皇帝的新衣更健康。/ B面：但丑闻不是手术刀是炸弹——不区分该揭露的真相和该保护的隐私，连同你脆弱的私人世界一起炸碎。关键张力：被丑闻摧毁——是终于面对真实自己，还是被远超比例的惩罚碾碎？ | 代价切口(−Φ): 名誉殿堂的爆破——比死亡更漫长的媒体凌迟。",
        coreEn: "A-side: Scandal is the most violent honesty — shattering polished public surfaces to reveal imperfect flesh beneath. Being stripped can be healthier than wearing the emperor's new clothes. / B-side: But scandal is a bomb, not a scalpel — it doesn't distinguish truths to expose from privacy to protect. Your fragile private world detonates alongside everything else. Key tension: Destroyed by scandal — finally facing yourself, or crushed by punishment exceeding? | Castration Circuit: The hall of fame detonated — media execution slower than death.",
        reference: "《社交网络》因背叛丑闻永远失去友谊的扎克伯格；《纸牌屋》因血腥丑闻导致百年基业瞬间崩塌的安德伍德。",
        referenceEn: "Zuckerberg permanently losing friendships through betrayal scandals in The Social Network; Underwood's century-long political empire crumbling to scandal in House of Cards.",

        topology: "交出的不是面具——而是'面具和脸之间那道缝被私密保管'的权利。撕开给所有人看的不是真脸，是那道缝本身",

        directive: {
            bright: "写丑闻后第三天早晨——他第一次不化妆就出门了。他在注视代价正在从身上脱落的过程：以前走路会侧身、低头、调表情，现在直直地走。这种'直'不是勇气——是维持弯曲的那根弹簧断了。他在看着那根弹簧的残件，不知道该拿省下来的力气做什么。",

            dark: "写第七天他划过手机评论区——速度很快，像在刷一个跟自己无关的人的新闻。他发现自己正在用第三人称想自己的事：'他做了什么'而不是'我做了什么'。他在这种解离里撞见代价：不是人格保护机制——是人格结构正在分裂的声音，只是这个声音太安静了，像冰面下的水流。",

            tension: "律师说'公开道歉可以控制范围'。他听到'道歉'这个词时停顿了。他不确定这笔代价的边界：道歉内容是真的，但动机是策略性的——因为策略而说出真话，这个真话还算真话吗？写他张嘴前那一秒：他在计算'真诚'的最优表演方式，这个计算本身已经杀死了真诚。不要让他说出那句话。"
        }
    },

    // ---- 地位丧失：你在权力阶梯上的支点被抽走 ----

    {
        id: "stake_rank_loss",
        name: "阶层坠落", nameEn: "Loss of Rank",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "从云端的位置瞬间跌入最底层——且保留着所有'曾经在上面'的记忆。",
        defEn: "Falling instantly from the pinnacle to the lowest layer — while retaining every memory of having been on top.",
        core: "A面：从底层看世界有顶层永远看不到的清晰——很多伟大的作品都是在坠落之后写出的。/ B面：但坠落最残酷的不是贫穷本身，而是'记得自己阔过'。身体还记得真丝触感，味蕾还记得那种酒，但口袋已经不允许你回去了。关键张力：记得曾经拥有的一切——是永恒折磨，还是证明你确实活过那样的人生？ | 代价切口(−Φ): 俯视的支点被抽走——被自己曾制定的法则反噬。",
        coreEn: "A-side: Seeing from below offers clarity the top never sees — many great works are written after the fall. / B-side: But the cruelest part isn't poverty — it's 'remembering you were rich.' Body recalls silk, palate recalls that wine, but pockets no longer permit re-entry. Key tension: Remembering everything you had — eternal torment, or proof you truly lived? | Castration Circuit: The pedestal removed — devoured by rules you once made.",
        reference: "《末代皇帝》前半生的真龙天子，暮年买票参观自己的宫殿；《第九区》昨日威风的人类管理者，一夜之间被变为被管理的异形。",
        referenceEn: "The dragon emperor who in old age buys tickets to visit his own palace in The Last Emperor; the smug human administrator transformed overnight into the managed alien in District 9.",

        topology: "交出的不是高度——而是'不带记忆地站在低处'的可能。你带着高处的全部记忆站在低处，记忆本身成了最沉的重力",

        directive: {
            bright: "写他清醒地看着阶层脱落的那一刻——第一次排队。以前所有门为他提前打开，现在他站在队伍中间，前后都是人，他是一个被夹住的普通编号。写他注视着'优先权'从身上脱落的过程：跟着前面的人往前挪。不要写成反思特权的道德叙事，只写他看着那个叫'地位'的东西离开时的眼神。",

            dark: "写他走进以前常去的餐厅——以前进门时所有服务员叫他的姓。现在站在门口等位，没人看他第二眼。他被安排到靠厕所的座位时嘴角微小的抽动——在这个抽动里他撞见代价：不是位置变了，是身体的记忆和现实之间的错位。翻开菜单，味蕾还记得口袋已经去不起的区域。他点了最便宜的菜，假装这是他想吃的。",

            tension: "他买票参观自己曾经住过的房子——现在变成了博物馆。他站在以前的卧室里，墙纸换了但窗户没换。他伸手摸窗框上一道旧划痕——这是他留下的唯一痕迹。他不确定代价付到哪一步：空间记得他，但这个'记得'不认识他。他还会不会在别的角落撞见另一道自己的痕迹？不要让他被认出。"
        }
    },
    {
        id: "stake_uniform_strip",
        name: "权力褫夺", nameEn: "Stripped of Power",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "在公共仪式上被强制剥夺象征权力的制服、勋章、头衔或法器——你的铠甲被当众撕碎。",
        defEn: "Forcibly stripped of uniforms, medals, titles, or instruments of power in a public ceremony — your armor is torn apart before all.",
        core: "A面：权力外壳剥除后，你终于看到没有头衔、制服、权杖的自己是谁。赤裸的人如果还能站立，他的站立比任何制服都有力量。/ B面：但大多数人失去外壳后无法站立——那个'赤裸的自己'从来没有被锻炼过。铠甲穿太久，下面的肌肉已经萎缩了。关键张力：脱下制服后——是终于获得人的形态，还是发现你早就忘了人的形态？ | 代价切口(−Φ): 权力幻象的收缴——铠甲撕碎后暴露的虚弱。",
        coreEn: "A-side: With the power shell removed, you finally see who you are without titles or scepters. If that naked person can still stand, their standing is more powerful than any uniform. / B-side: But most can't stand after losing the shell — the 'naked self' was never exercised. Armor worn too long; muscles beneath have atrophied. Key tension: After removing the uniform — finally human, or realizing you forgot what human form is? | Castration Circuit: Power fantasy confiscated — weakness exposed after armor torn.",
        reference: "《辛德勒的名单》被剥去党卫军制服的阿蒙·戈斯；《满城尽带黄金甲》在万人仪式前被扒脱金蟒龙袍的太子。",
        referenceEn: "Amon Goeth stripped of his SS uniform in Schindler's List; the crown prince publicly stripped of golden dragon robes before ten thousand in Curse of the Golden Flower.",

        topology: "交出的不是制服——而是'壳下面还有身体'这个假设。铠甲穿太久已经替代了骨骼，撕开后里面没长出肉",

        directive: {
            bright: "写扣子一颗一颗被解开的慢动作——他在清醒地注视代价离开自己的过程。每一颗扣子松开时胸口的感觉：呼吸变深了，像有什么在向外膨胀。最后一颗解开，他低头看自己的手：没变，但不再代表任何机构。写他注视着这双'不代表'的手，在测量它们脱离制服后的重量。",

            dark: "写仪式上勋章被摘下时的声音——金属离开布料的那一声轻响，比判决词更大。台下一千个人在看，有些人昨天还向他敬礼。他的目光找到人群中一个认识的脸——那人没移开目光，但目光的质地变了，从仰视变成考古学式的审视。他在那个质变里撞见代价：他从'人'退化为了'事件'。",

            tension: "他换上便服走出营房——二十年来第一次穿便服。走路姿势出了问题：脚步节奏找不到了，因为那个节奏是和制服一起训练进身体的。他不确定代价的边界：脱掉制服不等于脱掉被制服塑造的形状。他是一个没有壳的螺丝——形状还在，但没有东西可以拧进去了。不要让他找到新步伐。"
        }
    },

    {
        id: "stake_legacy_ruin",
        name: "基业毁灭", nameEn: "Legacy Ruin",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "眼睁睁看着自己亲手建立的庞大基业——公司、国家或组织——分崩离析，化为废墟。",
        defEn: "Watching helplessly as the massive foundation you built with your own hands — company, nation, or organization — crumbles into ruins.",
        core: "A面：废墟也是纪念碑——它证明这里曾矗立过伟大的东西。/ B面：但基业毁灭不仅是你的失败——是所有信任你、追随你的人的失败。关键张力：毕生心血化为灰烬——这是历史的必然，还是你个人的罪责？ | 代价切口(−Φ): '看我的丰功伟绩'化为荒漠碑文。",
        coreEn: "A-side: Ruins are monuments — proving something great once stood here. / B-side: But legacy ruin isn't your failure alone — it's everyone who trusted you. Key tension: Life's work turned to ash — historical inevitability, or personal sin? | Castration Circuit: 'Look on my Works' turned to desert epitaph.",
        reference: "《大明王朝》凝视国脉将空大江流尸巨局的嘉靖；《大都会》凝视下方金字塔钢基被火海倾覆的老掌权人。",
        referenceEn: "Emperor Jiajing watching the empire's veins crack into corpse rivers in Ming Dynasty; the master witnessing his tower's foundation snapped by fiery slave-blasts in Metropolis.",

        topology: "交出的不是一栋建筑——而是'我建造的东西会比我活得久'这个信念。坍塌沿着你砌墙时就埋进去的裂纹图谱自行展开",

        directive: {
            bright: "写他清醒地看着基业坍塌的过程——不是大火，是更慢的坍塌：墙上长出了草，屋顶一角塌了，会议室里有鸟在筑巢。他蹲下来看一棵从地板裂缝里长出的植物。写他注视代价的姿势：他在看着自己的永恒性正在从建筑里被一点一点回收。不要写感伤的怀旧。",

            dark: "写一个追随者来找他——不是指责，是问'为什么'。这个'为什么'比指责更沉，因为它预设了'你有理由'。他张嘴，发现不知道答案——不是太复杂，是他自己也一直在用'总有一天会好的'搪塞自己。他在这个搪塞里撞见代价的真正计量单位：不是废墟，是所有信任过他的嘴。写他闭嘴时喉咙的吞咽动作。",

            tension: "他站在基业最高处的窗前——窗户完好，但窗外已从帝国全景变成拆迁工地。他不确定代价的边界：窗户还在，视角还在，但被看的东西已经不承认这个视角了。他还站在'领导者的位置'上，但这个位置已经空了。不要让他离开窗户，也不要让工地停工。"
        }
    },
    {
        id: "stake_contract_void",
        name: "契约撕毁", nameEn: "Void Contract",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "毕生奋斗换来的一项终极承诺或契约，在大他者变脸的一刻被宣告为废纸。",
        defEn: "A sworn ultimate promise or contract, fought for lifelong, is declared invalid the moment the Big Other turns its face.",
        core: "A面：契约撕毁让你看清真相——规则制定权从来不在你手里，觉醒比虚假的公平更接近自由。/ B面：但努力不被承认比从未努力更崩溃，你拿到了那张纸，却被当面撕碎。关键张力：当规则本身不守规则——你接受游戏不公平，还是推翻整张牌桌？ | 代价切口(−Φ): 奋斗逻辑链条被彻底切断。",
        coreEn: "A-side: Torn contracts reveal truth: rules were never yours to make. Painful awakening brings more freedom than illusory fairness. / B-side: But unacknowledged effort destroys you—you earned the paper, only to see it shredded. Key tension: When rules break themselves—accept unfairness, or flip the table? | Castration Circuit: Severing the logic chain of struggle.",
        reference: "《大明劫》强护三军却遭天子一纸降诏拔为替罪羊的断头少保；《老无所依》无视交易贯颅飞铁的大漏斗杀手。",
        referenceEn: "A loyal general executed as a scapegoat instantly upon a whimsical decree in Fall of Ming; shot strictly via unbending coin-rules in No Country for Old Men.",

        topology: "交出的不是一份合同——而是'努力会被兑现'这个因果链。契约从来只对你这一侧有效，对方的签名是隐形墨水写的",

        directive: {
            bright: "写他清醒地看着契约碎片从手里散落——碎片上残存半个字：'永'，或'不可'，或某个承诺的开头。他把碎片放进口袋而不是扔掉。写他注视代价的姿势：他知道这张纸没用了，但手指还不知道。不要写成觉醒，写他口袋里纸片的触感——他在测量一个'我曾经相信过什么'的重量。",

            dark: "写告知契约无效的那个房间——告知者的语气职业、带着微笑，像在解释技术问题而不是一场背叛。他在那个微笑里撞见代价：撕毁他契约的人并不觉得这是一件大事，在对方坐标系里这只是今天的第三个会议议题。走出房间时门把手的温度——上一个被撕毁契约的人的体温还在金属上。",

            tension: "他面前放着一份新契约——条件更好，补偿了旧的损失。笔停在签名栏上方。他不确定这笔代价是否还在继续：签了，就证明旧契约的撕毁可以被补偿；不签，就坚持一个刚被证伪的原则。签字是接受'契约可以被交易'，不签是坚持一个已碎的信念。不要让笔尖触到纸面。"
        }
    },
    {
        id: "stake_last_one",
        name: "绝唱传承", nameEn: "The Last One",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你所守护的流派、家族、信仰或技艺，在你这里成为物理与精神意义上的绝唱。",
        defEn: "The lineage, family, faith, or craft you guarded becomes an absolute terminal point — physically and spiritually — with you.",
        core: "A面：成为最后一人意味你是最纯粹的结晶，不再被后来者稀释。/ B面：但此重量是绝对孤独，一旦倒下，你守护之物将以'从未存在过'的方式从宇宙蒸发。关键张力：你为传承而活，还是传承以你为最后燃料？ | 代价切口(−Φ): 未来历史被提前注销，成为活着的绝唱。",
        coreEn: "A-side: Being the last makes you the purest crystallization, undiluted by successors. / B-side: But this weight is absolute solitude. Once you fall, your legacy vanishes as if it never existed. Key tension: Living for legacy, or is legacy burning your life as its final fuel? | Castration Circuit: Future history prematurely cancelled.",
        reference: "《百鸟朝凤》泣血成最后一代吹歌人的焦三爷；《指环王》目送精灵西渡、封存远古魔法的最后一位精灵王。",
        referenceEn: "Master Jiao weeping blood as the last suona player in Song of the Phoenix; the final Elf-lord sealing Middle-earth's ancient magic in The Lord of the Rings.",

        topology: "交出的不是技艺——而是'这个东西会在我之后继续存在'的信念。你活着本身变成了倒计时的博物馆，心跳就是展品的保质期",

        directive: {
            bright: "写他清醒地看着传承的时间线在自己手上收束——教最后一课，普通的下午，对面坐着一个可能不会学完的学生。他教得比以前慢，不是因为学生笨，是他在每个动作里多停留一秒。写他注视代价正在被支付的过程：手指示范某个技巧时的精确度比年轻时更高，因为他知道这套动作在他手上之后可能不再有人做。",

            dark: "写他深夜独自练习——不是为了表演或教学，只是如果今晚不练这个动作就又少存在一天。空房间里完整做完全套，最后一个音落下后的沉默。他在这个沉默里撞见代价：他知道这个沉默有一天会变成永久的。每次放下器具都像在排练最后一次放下。没人知道哪一次是最后一次。",

            tension: "他在博物馆里看到自己流派的展品——封在玻璃柜里，解说牌用过去时态写。他的呼吸在玻璃上形成一小片雾气。他不确定代价付到哪一步了：展品被陈列意味着社会已经把它归类为'已结束的事物'。他还活着，但他守护的东西已经被提前宣布死亡。不要让他碰玻璃。"
        }
    },
    {
        id: "stake_secret_exposed",
        name: "秘密曝光", nameEn: "Secret Exposed",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "用来维持社会面具的最痛、最不齿的潜意识秘密，被大他者全屏广播。",
        defEn: "The deepest, most shameful subconscious secret that maintained the social mask is broadcast globally.",
        core: "A面：秘密曝光换来诡异的轻松，终结了维系谎言的无穷内耗。/ B面：但这并非坦白，是被剥夺展示自我的控制权，犹如扒光丢入广场。关键张力：秘密揭穿后，是喜迎解脱的自由，还是失去最后防线的彻底崩溃？ | 代价切口(−Φ): 心理防线被强行爆破的终极赤裸。",
        coreEn: "A-side: Exposure brings eerie relief, ending the endless exhaustion of maintaining lies. / B-side: This isn't confession; it's losing control over self-presentation, like being stripped in a plaza. Key tension: Does exposure bring liberating relief, or total collapse of your last defense? | Castration Circuit: Psychological defenses detonated into ultimate nakedness.",
        reference: "《朗读者》宁肯坐牢也要隐瞒自己不识字的女看守；《黑镜·国歌》被迫在全国直播中暴露最不堪行为的首相。",
        referenceEn: "The female guard accepting life imprisonment rather than exposing her illiteracy in The Reader; the PM forced into a degrading act on national broadcast in Black Mirror: The National Anthem.",

        topology: "交出的不是秘密——而是'选择何时展示自己'的控制权。面具没被摘，是面具和脸之间的缝被撕开给所有人看了",

        directive: {
            bright: "写他清醒地看着'自我审查'这个能力从身上脱落——秘密公开后第二天他出门，发现走路姿势变了：某种持续多年的微小紧张消失了，肩膀的角度、说话前零点几秒的审查延迟。写他注视代价正在离开的过程：他第一次说出一句不经过滤的话时的嘴唇触感。不要写释然。",

            dark: "写他回到家——门没锁，因为'隐私'这个概念已经不存在了。客厅里所有东西都在原位，但每件东西的含义变了：书架上的书成了'证据'，照片成了'时间线'。他在这些变了的含义里撞见代价：不是秘密没了，是私人空间被公共语言入侵了——连独处的方式都被污染了，因为独处时的样子也可以被描述。",

            tension: "他面对最在乎的人——对方已经知道了那个秘密。两人之间的沉默。他准备了一套解释，但对方没提问。他不确定代价付到哪一步了：关系必须在新的真实上重建，但这个真实比旧的谎言更难站稳——谎言至少有固定形状，真实是流动的。不要让任何一方先开口。"
        }
    },
    {
        id: "stake_ghosted",
        name: "联系切断", nameEn: "Disconnected",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "原本亲密的所有社会连接——亲人、爱人、朋友——如同被集体格式化般，同时对你关闭了大门。",
        defEn: "All formerly intimate social connections — family, lovers, friends — simultaneously shut their doors as if collectively formatted.",
        core: "A面：社会关系清零让你免于表演，获得无观众的旷野自由。/ B面：但人类非为独居进化，当最后的连接断绝，孤独便化作如饥饿般真实的物理剧痛。关键张力：全员离去，是因为你本身有毒，还是所有的爱都带有前提条件？ | 代价切口(−Φ): 被抛出社会重力场，沦为脱轨游星。",
        coreEn: "A-side: Zero connections mean no more performing, granting the vast freedom of an audienceless void. / B-side: But humans aren't meant for isolation. When the last link snaps, loneliness becomes physical pain. Key tension: Did everyone leave because you're toxic, or was love always conditional? | Castration Circuit: Thrown from the social gravity field into rogue orbit.",
        reference: "《伊尼舍林的报丧女妖》前日还共饮的挚友次日断指绝交的孤岛男人；《蜘蛛侠：英雄无归》被遗忘咒抽干所有人记忆的彼得·帕克。",
        referenceEn: "The island man whose only friend severs fingers and friendship overnight in The Banshees of Inisherin; Peter Parker erased from all memory by the forgetting spell in Spider-Man: No Way Home.",

        topology: "交出的不是朋友——而是'被允许进入'的资格。所有门同时关上，暴露出连接从来不是双向的，你一直是客人",

        directive: {
            bright: "写他清醒地看着社会连接断开的过程——所有人离开后的第一个周末，没有消息，手机屏幕黑着。他在注视代价：做了一件从来没时间做的事，坐在阳台上看了一整个下午的云。写他看着'被需要'这个能力离开自己时的注视——时间的质感变了，没被任何人节奏切割过的时间是连续的、黏稠的。",

            dark: "写他给最后一个还可能回复的人发了一条消息——'今天天气不错'。他盯着屏幕等回复，对话框底部的'正在输入'没有出现。他把手机翻过去扣在桌上，又翻过来看了一次。他在这个翻转的动作里撞见代价：沉默不是没有声音——沉默是对方选择不发出声音。最后关屏幕时手指比正常力度大一点点。",

            tension: "他站在派对门外——没被邀请，但能听到里面的笑声，其中有几个认识的声音。他不确定代价的边界在哪：他们不是在惩罚他，只是在正常生活，只是这个'正常'不包含他。他不是被驱逐的，是被省略的。被省略比被驱逐更深，因为驱逐至少需要意识到你的存在。不要让他敲门或离开。"
        }
    },
    {
        id: "stake_censored",
        name: "永久封杀", nameEn: "Censored",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你的思想、作品，甚至提到你的关键词，都被系统的底层算法永久屏蔽。",
        defEn: "Your thoughts, works, even keywords mentioning you are permanently banned by the system's core algorithms.",
        core: "A面：禁令赋予作品神秘光环，封杀成为最顶级的反向广告。/ B面：但现实绝非浪漫抵抗，而是漫长无声的窒息，你如无人林的倒树般悄无声息。关键张力：被封杀是证明你具威胁性的勋章，还是将你的声音彻底降维为无人可闻的死寂？ | 代价切口(−Φ): 话语权遭强行阉割，存在痕迹被404抹除。",
        coreEn: "A-side: Censorship grants a mysterious aura; the ban itself serves as ultimate reverse-advertising. / B-side: Reality isn't romantic resistance, but silent suffocation—falling like a tree in an empty forest. Key tension: Is censorship a medal of your threat, or the forced reduction of your voice to dead silence? | Castration Circuit: Discourse completely castrated, existence wiped by 404.",
        reference: "《窃听风暴》毕生心血手稿被封存不准面世的东德剧作家；《1984》日记与存在痕迹被'蒸发'化为零的温斯顿。",
        referenceEn: "The East German playwright whose life's manuscripts are sealed from publication in The Lives of Others; Winston whose diaries and existence are 'vaporized' to zero in 1984.",

        topology: "交出的不是声音——而是'声音被空气传递'的物理条件。嘴在动但空气不传声，你的信号在到达任何耳朵之前就被截断",

        directive: {
            bright: "写他清醒地看着'被听到'这个能力从身上脱落——被封杀后继续写作，凌晨三点书桌前，笔记本上的字只有灯光看得到。写他注视代价正在从身上离开的过程：合上笔记本时的手感——这本笔记本可能永远不会被打开，但里面的字比发表过的任何东西都更像他。不要写成地下文学的浪漫叙事。",

            dark: "写他在搜索引擎输入自己的名字——结果为零。不是'没有相关结果'，是这个名字触发了屏蔽，搜索栏自动清空。他试了不同关键词组合：作品名、发表日期——每条路都被堵死。最后在社交媒体发了一个字，刷新，那个字不在了。他在这个消失里确认代价：他的声音确实不存在了。",

            tension: "他在旧书店发现自己被封杀前出版的书——最后一本，塞在角落里，书脊发脏页面发黄。他拿起它时的手指。他不确定代价付到哪一步了：这本书同时在场和缺席——物理上在这里，但它证明的东西已被系统宣布为不存在。他是买下它还是放回去？不要让他做出选择。"
        }
    },
    {
        id: "stake_exile",
        name: "永久流放", nameEn: "Eternal Exile",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "被剥夺一切社会坐标，永远驱逐至边缘不毛之地——失去'故乡'的概念。",
        defEn: "Stripped of all social coordinates, forever banished to the barren edges — losing the very concept of 'home'.",
        core: "A面：流放者因不属于任何地方而拥有拥抱所有地方的视野。/ B面：但流放并不浪漫，它是永远找不到家乡味道的残酷剥夺，是永远等不到那句方言问候的失根之痛。关键张力：永远在路上的人生，是自由的游牧，还是找不到停靠点的无根漂流？ | 代价切口(−Φ): 空间归属感彻底阉割，故乡坐标永恒丢失。",
        coreEn: "A-side: Exiles gain a broadened vision, able to embrace everywhere by belonging nowhere. / B-side: Yet exile lacks romance; it's the cruel deprivation of home's flavors and the pain of a vanished dialect's welcome. Key tension: Is the eternal wanderer a free nomad, or a rootless message in a bottle? | Castration Circuit: Spatial belonging wholly castrated, home coordinates forever lost.",
        reference: "《陆犯焉识》被发配西北荒漠苦役多年的知识分子；《疯狂的麦克斯：狂暴之路》被抛入无垠废土的流亡者。",
        referenceEn: "The intellectual banished to northwestern desert labor for years in The Criminal Lu Yanshi; the exile thrown into endless wasteland in Mad Max: Fury Road.",

        topology: "交出的不是一个地址——而是'家'这个概念本身。坐标系里的原点被拔掉了，你走的每一步都没有方向因为没有起点",

        directive: {
            bright: "写他清醒地看着'故乡'从坐标系里被拔除——流放地的第一百个早晨，他已经不数日子了。他站在一片从未见过的地貌前，注视代价正在从身上离开的过程：他的脚已经认识了这里的泥土，但他的梦还在走另一条路。写他盯着脚和梦之间那道裂缝的姿势。不要写成诗意叙事。",

            dark: "写他在异乡厨房试图复制一道家乡菜——调料不对，火候不对，水的味道不对。做了三次，每次差一点。第三次坐在桌前，筷子夹起那道菜送进嘴里——味道七分像。他在那三分差距里撞见代价：那三分不是技术问题，是那块土地渗进食材的东西。咽下去时喉咙多了一个停顿，像身体在犹豫要不要接受'差不多'。",

            tension: "他收到一封信——流放令被撤销了，可以回去了。他拆开信时的手指。读完后坐了很久。他不确定代价的边界：他在流放中变成了另一个人，家里认识他的人也变了。他可以回到那个地方，但回不到'回家'这个概念——因为回家需要一个没变的自己和一个没变的家，两个都不存在了。不要让他买机票或扔信。"
        }
    },
    {
        id: "stake_unseen",
        name: "沦为透明", nameEn: "Invisibility",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "大他者撤回了对你的凝视——无论你做什么、说什么，都无法在任何人身上引起哪怕最微小的反馈。",
        defEn: "The Big Other withdraws its gaze — no matter what you do or say, you cannot elicit even the smallest reaction from anyone.",
        core: "A面：彻底透明让你免于被凝视与审判，获得过载社会中最奢侈的隐私。/ B面：但人需借由他者目光确认存在，完全不被注视会让你怀疑自己是否已是幽灵。关键张力：消失却无人察觉，是你确实不可见，还是你已从本体论层面上不存在？ | 代价切口(−Φ): 大他者凝视被彻底撤回，沦为本体论上的透明人。",
        coreEn: "A-side: Total transparency frees you from judgment, granting luxurious privacy in an over-watched society. / B-side: But existence requires the Other's gaze; utter invisibility makes you question if you're a ghost. Key tension: If you vanish unnoticed, are you just unseen, or ontologically erased? | Castration Circuit: The Big Other's gaze withdrawn, reduced to ontological transparency.",
        reference: "《第六感》在客厅对妻子呼喊却得不到任何眼神回应、不知自己已死的心理医生；《隐形人》因完全不被看见而被迫使用暴力来确认自存的绝望者。",
        referenceEn: "The psychologist screaming at his wife with zero response, unaware he's dead in The Sixth Sense; the desperate invisible man resorting to violence to confirm his existence in The Invisible Man.",

        topology: "交出的不是身体——而是'身体能在他人认知里注册'的能力。信号还在发射但没有天线在接收，你是有质量但没有引力的物体",

        directive: {
            bright: "写他清醒地看着'被注视'从身上脱落——他做了一件以前从不敢做的事：在公共场合大声唱歌，或在超市站着读完一本书。写他注视代价离开的过程：肩膀松下来了，脸上不需要维持表情了。他在橱窗倒影里看见自己——倒影还在，说明他物理存在着。不要写成自我安慰。",

            dark: "写他试图被看见——站在一个人面前说话，对方瞳孔没有对焦在他方向。他伸手碰对方肩膀——手触到布料，但对方只耸了一下肩，像感觉到一阵风。他蹲下看一个孩子的眼睛——孩子的目光穿过他看向后面的货架。他在这些穿透里撞见代价。最后站在镜子前：镜子里有他。这是唯一还在'看'他的表面。但镜子的看是物理的，不是承认。",

            tension: "他站在繁忙街道中央——人流从两侧绕过他，没人碰到他，也没人故意躲他。他不是障碍物，他是空气。他不确定代价付到哪一步了：身体占据着空间，但这个空间没被任何人的认知注册。他是一个有质量但没有引力的物体——在这里，但不影响这里的任何东西。不要让任何人看他一眼。"
        }
    }
];
