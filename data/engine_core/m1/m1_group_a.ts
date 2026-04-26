import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_A: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 无名的齿轮 (The Absorbed) - 16 Items
    // 缺失方向：向上 → 系统/权力。主体被功能、角色或体制所覆盖。
    // ============================================================
    {
        id: "subj_cog",
        name: "齿轮", nameEn: "The Gear",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "日复一日嵌入庞大机器中不停转动——直到分不清，是你在推动机器，还是机器在消磨你。",
        defEn: "Embedded in an enormous machine, turning day after day — until you can no longer tell whether you drive the machine or it grinds you down.",
        flaw: "习得性无助", flawEn: "Learned Helplessness",
        core: "A面：重复可以是安稳的节拍——有人在这节拍里找到归属，找到'我被需要'的安慰。/ B面：但当停下来比继续转动更可怕时，你已经不是齿轮的操纵者，你就是齿轮本身。关键张力：如果机器突然停了——迎来的是自由，还是坠入虚空？ | 缺失 ($): 主体性——你是一个人，还是一个功能？",
        coreEn: "A-side: Repetition can be a steady rhythm — some find belonging in it, a comfort of 'I am needed.' / B-side: But when stopping feels more terrifying than continuing, you're no longer operating the gear; you ARE the gear. Key tension: If the machine suddenly halts — freedom, or freefall into the void? | Lacks ($): Subjectivity — are you a person, or a function?",
        reference: "《摩登时代》查理（被流水线吞噬的工人）；《审判》K（在庞大官僚机器中被消耗的个体）；《黑客帝国》母体外的培养皿沉睡者。",
        referenceEn: "Charlie in Modern Times (a worker swallowed by the assembly line); K in The Trial (an individual consumed within a massive bureaucracy); sleepers in the pods outside The Matrix.",
        topology: "功能占据了主体性的位置 → 重复成为存在的唯一支撑 → 停转即坠空",
        directive: {
            bright: "他的闹钟比任何人都准。他到得最早走得最晚，不是因为热爱，是因为这套流程让他不用想别的。写他在秩序里的那种稳——别人慌的时候他不慌，因为他永远知道下一步该做什么。这种'被需要'是他唯一的地面。不要写成麻木，写一个把重复当作锚的人。",
            dark: "他的动作比谁都流畅。手在动，嘴在应答，脚在走固定路线，但里面那个人已经下班了。写他作为功能的完美运转——你看不出任何破绽，这就是最大的破绽。让观众从他的高效里读出空：他不是在忍耐，他已经不知道还有别的活法了。",
            tension: "他每天走同一条路。今天他在一棵树前停了三秒钟，自己也不知道为什么。然后他继续走了。写这种裂缝——不是觉醒，不是崩溃，就是一个停顿。让观众自己判断那三秒是什么：一个还活着的人的证据，还是机器里的一次微小故障。"
        }
    },
    {
        id: "subj_cleaner",
        name: "清道夫", nameEn: "The Scavenger",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "替体制清扫见不得光的污秽与残骸——沉默是他活下去的唯一条件。",
        defEn: "The one who sweeps away the filth and wreckage the system hides — silence is the only condition under which he is allowed to live.",
        flaw: "道德污染", flawEn: "Moral Contamination",
        core: "A面：知道黑暗的全貌而选择缄默，是一种深沉的力量——你替所有人背负了他们不敢面对的东西。/ B面：但沉默太久会变质。你替主人吞下的秽物在你胃里发酵，分不清自己是在守护什么，还是已经成了黑暗的一部分。关键张力：当沉默本身成为共谋，开口是救赎还是同归于尽？ | 缺失 ($): 洁净——你替体制打扫了一切，谁来打扫你？",
        coreEn: "A-side: Knowing the full scope of darkness yet choosing silence is a profound strength — you bear for everyone what they dare not face. / B-side: But prolonged silence curdles. The filth you swallowed for your master ferments inside you; you can no longer tell whether you're guarding something or have become part of the darkness. Key tension: When silence becomes complicity, is speaking up salvation or mutual destruction? | Lacks ($): Innocence — you cleaned everything for the system; who cleans you?",
        reference: "《教父》卢卡·布拉西（替家族包揽最肮脏暴力的清道夫）；《甄嬛传》苏培盛（负责处理后宫腌臜的执行者）；《银翼杀手》中专门清理复制人的同类退役警察。",
        referenceEn: "Luca Brasi in The Godfather (a scavenger handling the family's dirtiest violence); Su Peisheng in Empresses in the Palace (executing the harem's sordid affairs); the retired cop hunting his own kind in Blade Runner.",
        topology: "替体制吞下不可见之物 → 沉默成为生存的唯一条件 → 容器没有出口",
        directive: {
            bright: "他的手是脏的，但他的眼神是稳的。写他替所有人背负了他们不敢看的东西——他知道地下室里埋着什么，知道账本的第二页写了什么。这种知道不是负担，是一种沉默的力量。他不说话的时候比所有人都重。不要写成受害者，写一个选择了承重的人。",
            dark: "他洗了很多次手。每次都洗得很认真。但指甲缝里的东西洗不掉。写他和黑暗待了太久之后的变质——他已经分不清自己是在替主人守门，还是自己也变成了门后面的东西。他的沉默从忠诚变成了共谋，但他说不出从哪一天开始的。",
            tension: "有人问他'你还好吗'。他笑了一下，说'挺好的'。那个笑是练过的。写他在日常生活里那种正常的外壳——吃饭、聊天、看电视——和他肚子里装着的那些不能说的东西之间的距离。让观众猜：他会先开口，还是先爆掉。不要替他选。"
        }
    },
    {
        id: "subj_battery",
        name: "薪柴", nameEn: "The Kindling",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "被放在灶膛里持续燃烧的人——他的体力、心血与青春，是别人取暖过冬的唯一柴火。",
        defEn: "Placed inside the furnace to burn without cease — their stamina, devotion, and youth are the only firewood by which others survive the winter.",
        flaw: "极度枯竭", flawEn: "Burnout",
        core: "A面：持续给予可以是崇高的使命感——明知自己会烧尽，仍选择照亮每一个人。在消耗中找到意义，是人类最古老的美德。/ B面：但燃烧太久，你忘了自己曾是一棵有根有叶的树。当'被需要'变成唯一的存在感来源，你分不清是在奉献还是在自焚。关键张力：当薪柴意识到燃料是自己的骨和血——继续燃烧是牺牲，还是自我毁灭？ | 缺失 ($): 生命力——你把所有的热都给了别人，自己的芯里还剩火吗？",
        coreEn: "A-side: Ceaseless giving can be a sublime mission — knowing you'll burn out yet choosing to light the way. Finding meaning in consumption is among humanity's oldest virtues. / B-side: But burn too long and you forget you were once a tree with roots and leaves. When 'being needed' becomes the sole source of existence, you can't tell devotion from self-immolation. Key tension: When the kindling realizes the fuel is its own bone and blood — sacrifice, or self-destruction? | Lacks ($): Vitality — you gave all your heat to others; is there still fire in your own core?",
        reference: "《包身工》中的纺织女工（被榨干生命力的血肉电池）；《活着》中的福贵；《疯狂的麦克斯：狂暴之路》中被吊起抽血的'血袋'。",
        referenceEn: "Textile workers in Xia Yan's Indentured Servants (flesh batteries drained of vitality); Fugui in To Live; the 'blood bags' hung up for extraction in Mad Max: Fury Road.",
        topology: "生命力被持续抽取 → 给予成为存在的唯一理由 → 燃料耗尽时主体同时消失",
        directive: {
            bright: "他比所有人都早到，最后一个离开。他的黑眼圈是勋章。写他在燃烧中找到的那种踏实——'我有用'是他唯一会说的情话。他照亮别人的时候自己也是亮的。不要写成悲情，写一个在给予中找到重力的人。他累，但他站得住。",
            dark: "他已经不记得自己曾经是一棵有根有叶的树了。写他作为燃料的高效——他做饭、接送、加班、微笑，每一个动作都是为了别人。他的疲惫不是身体的，是存在层面的：如果没有人需要他，他不知道自己是什么。他的芯已经是灰的了。",
            tension: "有人对他说'你也休息一下吧'。他愣了一秒。那一秒里他不知道该把手放在哪里。写一个突然被允许停下来、却发现自己不会停的人。他的忙碌到底是奉献还是逃避不忙碌时的空，让观众自己判断。"
        }
    },
    {
        id: "subj_prosthesis",
        name: "执行者", nameEn: "The Enforcer",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "充当更强大意志之双手的人——他挥出的每一拳，服从的都不是自己的心。",
        defEn: "One who serves as the hands of a stronger will — every blow struck obeys a heart that is not their own.",
        flaw: "缺乏自主", flawEn: "Lack of Agency",
        core: "A面：在代行命令中获得坚不可摧的确定感——不需要思考、不需要犹豫，像一把被握稳的刀。混乱世界里，这种确定感令人沉醉。/ B面：但那份确定感从来不属于你。你是别人意志的延伸。当命令与良知相撞——刀刃劈不开的不是敌人，是你自己。关键张力：当命令说'杀'而良知说'不'——执行器有资格犹豫吗？ | 缺失 ($): 意志——你握出的拳头，什么时候才替自己握过一次？",
        coreEn: "A-side: Executing commands grants unshakeable certainty — no need to think or hesitate, like a blade held firm. In a chaotic world, that certainty is intoxicating. / B-side: But that certainty was never yours. You're an extension of another's will. When orders collide with conscience — the blade can't cleave through; the obstacle is yourself. Key tension: When orders say 'kill' and conscience says 'no' — does the instrument have the right to hesitate? | Lacks ($): Will — that fist you clench, when has it ever clenched for yourself?",
        reference: "《水浒传》陆谦（放弃个人意志，沦为权贵爪牙）；明代东厂武役（只作为皇权的物理痛觉制造器）；《指环王》中被索伦意志完全取代的戒灵。",
        referenceEn: "Lu Qian in Water Margin (surrendering personal will to become a henchman); Ming Dynasty's Eastern Depot agents (functioning purely as the emperor's tool of pain); the Nazgûl in The Lord of the Rings, wholly subsumed by Sauron's will.",
        topology: "意志被借用 → 确定感来自服从而非自主 → 命令与良知相撞时主体位置暴露",
        directive: {
            bright: "他不犹豫。别人还在权衡的时候他已经动了。写他在执行中的那种利落——混乱世界里，他是唯一一个知道该做什么的人。这种确定感让他身边的人安心。不要写成愚忠，写一个在服从中找到了秩序感的人。他的拳头替他回答了所有问题。",
            dark: "命令说往左，他往左。命令说停，他停。写他的身体已经变成了别人意志的延伸——他的反应比思考快，因为思考早就被取消了。让观众从他精准的动作里读出一种可怕的空：这不是一个人在行动，是一件武器在被使用。",
            tension: "他接到一个命令。他的手已经举起来了。但有什么东西让他停了半秒。写那半秒——不是良知的觉醒，不是叛变的前兆，就是一次肌肉的犹豫。让观众自己判断那半秒里住着什么。然后他还是执行了。"
        }
    },
    {
        id: "subj_ornament",
        name: "标本 / 陈列品", nameEn: "The Exhibit",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "存在的全部价值建立在被观赏之上——灯灭观众散场，展品便没有了呼吸的理由。",
        defEn: "All worth of existence is built upon being gazed at — once the lights dim and the audience departs, the exhibit has no reason to breathe.",
        flaw: "自我客体化", flawEn: "Self-Objectification",
        core: "A面：被凝视可以是光芒万丈的舞台——万众目光汇聚之处，你成为美与欲望的化身。被看见本身就是确认：我存在，我值得。/ B面：但玻璃罩里的凝视不是爱——是占有。你被精心摆放，笑容被设计，姿态被规定。观众散去，橱窗里只剩你面对空洞的倒影。关键张力：你渴望的是被看见，还是被看见时那短暂的'我有价值'的幻觉？ | 缺失 ($): 内核——剥掉所有目光之后，你还剩下什么？",
        coreEn: "A-side: Being gazed upon can be a radiant stage — where eyes converge, you become the incarnation of beauty and desire. Being seen is confirmation: I exist, I am worthy. / B-side: But the gaze through the glass case is not love — it is possession. You are meticulously arranged; your smile designed, your posture prescribed. When the audience departs, only you remain, facing your hollow reflection. Key tension: Do you crave being seen, or the fleeting illusion of 'I am valuable' that being seen provides? | Lacks ($): Depth — strip away every gaze, and what remains of you?",
        reference: "《了不起的盖茨比》黛西（被当作阶级跨越的完美战利品）；中国古代待价而沽的'扬州瘦马'；《银翼杀手2049》中的虚拟全息女友乔伊（被定制的凝视客体）。",
        referenceEn: "Daisy in The Great Gatsby (the perfect trophy of class mobility); ancient Chinese 'Yangzhou skinny horses' sold to the highest bidder; Joi, the customizable holographic girlfriend in Blade Runner 2049.",
        topology: "存在的价值被凝视支撑 → 目光撤离时主体性坍塌 → 被看见与被占有无法区分",
        directive: {
            bright: "所有人走进房间的时候都在看她。她知道。写她在目光中绽放的那种光——她的姿态、角度、表情都是精确的。被看见是她的氧气。不要写成虚荣，写一个在目光汇聚处找到了'我存在'的确认的人。她的美是真实的劳动。",
            dark: "派对散场。灯灭了。她一个人坐在化妆镜前卸妆。写她看着镜子里那张素颜时的表情——不是悲伤，是认不出来。没有观众的时候，她不知道自己长什么样。她的轮廓需要别人的目光才能成立。镜子里那个人是空的。",
            tension: "有人在看她。她感觉到了。她微微调整了坐姿。写这个调整——它是本能的，比思考快。让观众分不清她是在享受被看见，还是已经无法在不被看的状态下存在。这个区别她自己也不知道。"
        }
    },
    {
        id: "subj_number",
        name: "烙印", nameEn: "The Brand",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "名字被档案编号或集体标签替代——灵魂最简的句法被格式化为一串数字。",
        defEn: "Name replaced by file numbers or collective labels — the soul's simplest syntax formatted into a string of digits.",
        flaw: "去人格化", flawEn: "Depersonalization",
        core: "A面：编号带来一种诡异的平等——在数字面前，没有贵贱之分，每个人都被公正地削去棱角。/ B面：但编号不是名字。名字是有人深夜喊你时心里发颤的那一声，编号只是仓库里的货架标签。关键张力：当有人念出你真正的名字，你敢应答吗？还是你已经忘了它怎么发音？ | 缺失 ($): 姓名——灵魂的第一能指被没收了。",
        coreEn: "A-side: Numbers bring a strange equality — before digits, no rank distinction; everyone is fairly shorn of edges. / B-side: But a number is not a name. A name is the trembling in someone's voice calling you at midnight; a number is a shelf label in a warehouse. Key tension: When someone speaks your real name, do you dare answer — or have you forgotten how it sounds? | Lacks ($): Name — the soul's first signifier has been confiscated.",
        reference: "《悲惨世界》冉·阿让（只剩下代号24601的苦役犯）；奥斯维辛集中营被烙上数字的犹太人；反乌托邦小说《我们》中只有编号没有名字的统一国公民。",
        referenceEn: "Jean Valjean in Les Misérables (a convict reduced to 24601); Jews branded with numbers in Auschwitz; the numbered citizens in the dystopian novel We.",
        topology: "姓名被编号替代 → 灵魂的第一能指被没收 → 主体成为可替换的单位",
        directive: {
            bright: "点名的时候他应答很快。编号让他轻了——没有姓氏的重量，没有家族的期望。写他在匿名中找到的那种奇异的自由：数字面前人人平等，他终于不用解释自己是谁。不要写成悲壮，写一个在被削去棱角之后反而松了口气的人。",
            dark: "有人在街上喊了一声他的真名。他没有回头。不是没听到——是那个名字已经不属于他了。写他被编号覆盖之后的状态：他知道自己曾经有个名字，但那个名字的发音已经变得陌生。他不是失去了名字，是失去了被叫名字时心里发颤的那个能力。",
            tension: "登记表上写着他的编号。他的笔悬在签名栏上停了一秒。他差点写出一个字——然后划掉了，写上了数字。写那个被划掉的笔画。让观众猜那是哪个字。不要说出来。"
        }
    },
    {
        id: "subj_spare_part",
        name: "替补", nameEn: "The Double",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "为了随时填补某人的空缺而存在的影子——候补者、备胎、替身。",
        defEn: "A shadow existing solely to fill someone's vacancy at any moment — the understudy, the spare, the stand-in.",
        flaw: "多余感", flawEn: "Redundancy",
        core: "A面：等待被需要可以是一种忠诚的修行——枯坐多年只为那一刻上场，这种耐心本身是一种尊严。/ B面：但你存在的全部意义建立在另一个人的缺席之上。正主越健康，你就越透明。关键张力：正主倒下的那天——你迎来的是解放，还是发现自己从来没有学过怎么当主角？ | 缺失 ($): 独特性——你的存在，是你自己的还是别人的备份？",
        coreEn: "A-side: Waiting to be needed can be a loyal discipline — sitting idle for years just for that one moment on stage; that patience itself has dignity. / B-side: But your entire meaning rests on another's absence. The healthier the original, the more transparent you become. Key tension: The day the original falls — liberation, or discovering you never learned to be a protagonist? | Lacks ($): Uniqueness — is your existence yours, or someone else's backup?",
        reference: "张艺谋《影》中的境州（从小豢养，只为替主公挡刀）；《红楼梦》中随时准备顶替主子赴死的丫鬟；石黑一雄《别让我走》中只为给本体提供器官而活的克隆人。",
        referenceEn: "Jingzhou in Zhang Yimou's Shadow (raised since childhood solely to take a blade for his lord); maids in Dream of the Red Chamber ready to die for their mistresses; the clones living only for organ donation in Never Let Me Go.",
        topology: "存在建立在另一个人的缺席之上 → 正主越完整，替补越透明 → 被需要的瞬间与被废弃的瞬间是同一个",
        directive: {
            bright: "他等了很久。终于轮到他了。写他上场那一刻的专注——他准备了十年就为了这一次。不要写成委屈，写一个在等待中磨出了耐心的人。他的耐心本身就是一种沉默的尊严。他不急，因为他知道自己时刻准备好了。",
            dark: "正主回来了。他退回到角落里。写那个退回去的动作——不是愤怒，不是失落，是一种训练有素的消失。他太擅长透明了。让观众看见一个存在感正在被橡皮擦慢慢擦掉的人。他还站在那里，但他已经不在了。",
            tension: "正主倒下了。所有人看向他。写他脸上那一秒的表情——让观众分不清那是准备了十年的人终于被需要时的如释重负，还是一个影子突然被光照到时的慌张。他自己也分不清。"
        }
    },
    {
        id: "subj_algorithm",
        name: "发条人 / 苦役", nameEn: "The Clockwork",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "行为节律被严苛的外部规则完全接管——身体还是自己的，时间已经不是了。",
        defEn: "Behavioral rhythms entirely commandeered by stringent external rules — the body is still yours, but time no longer is.",
        flaw: "节律焦虑", flawEn: "Time Anxiety",
        core: "A面：精密的节拍可以是一种效率的美学——在混沌中，被安排好的秩序反而带来安全感。一切都可以预测，一切都不需要选择。/ B面：但当每一秒都被标价，喘息本身就成了亏损。你不再拥有'空闲'，你只拥有'还没被使用的工时'。关键张力：如果时钟突然失灵——发条人是终于喘息，还是彻底瓦解？ | 缺失 ($): 停歇——连睡眠都变成了'充电'。",
        coreEn: "A-side: Precise rhythm can be an aesthetic of efficiency — in chaos, imposed order brings security. Everything predictable, nothing requiring choice. / B-side: But when every second is priced, breathing itself becomes a loss. You no longer have 'free time,' only 'unused work hours.' Key tension: If the clock breaks — does the clockwork finally breathe, or completely collapse? | Lacks ($): Rest — even sleep has become 'recharging.'",
        reference: "《骆驼祥子》祥子（在城市暴雨中至死奔跑的肉身苦力）；维多利亚时代的计件童工；赛博朋克中被隐形算法和倒计时疯狂剥削的网约车与外卖员。",
        referenceEn: "Xiangzi in Rickshaw Boy (running to his death in the city rain); Victorian-era piece-rate child labor; gig workers in cyberpunk worlds ruthlessly exploited by invisible algorithms and countdowns.",
        topology: "时间的所有权被转移 → 每一秒都被标价 → 喘息本身成为亏损",
        directive: {
            bright: "他的节奏比时钟还准。写他在精密秩序中的那种效率美学——混乱世界里，他是唯一一个不浪费一秒的人。这种控制让他感到安全。所有事都可以预测，所有事都不需要选择。不要写成被压迫，写一个在被安排中找到了确定感的人。",
            dark: "他在吃饭的时候看手表。他在上厕所的时候算时间。写他的身体已经被接管了——不是被某个人，是被一套看不见的计时器。他不知道什么是'空闲'，他只知道'还没被使用的工时'。连他的睡眠都是为了明天更高效地运转。",
            tension: "时钟坏了。他站在原地，不知道该做什么。写他脸上那种茫然——不是解脱，不是恐慌，是一个从来没有过'现在什么都不用做'这种体验的人，第一次面对空白时间时的表情。让观众自己判断他会修好时钟还是砸了它。"
        }
    },
    {
        id: "subj_filter",
        name: "食罪者", nameEn: "The Sin-Eater",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "替他人承接负面情绪、秘密或罪责的容器——所有人的毒都倒进同一个杯子。",
        defEn: "A vessel absorbing others' negative emotions, secrets, or guilt — everyone's poison poured into one cup.",
        flaw: "深渊污染", flawEn: "Trauma Exposure",
        core: "A面：替人吞下苦涩可以是一种温柔的牺牲——你用自己的胃替别人消化了他们无法面对的东西。这种承受力是一种隐秘的体面。/ B面：但容器没有出水口。别人的毒被你吞下后并不会消失——它在你体内沉积、变质、发酵。关键张力：当容器满溢——是倾倒，还是爆裂？ | 缺失 ($): 精神屏障——你替别人扛了一切，谁替你扛？",
        coreEn: "A-side: Swallowing bitterness for others can be a tender sacrifice — you digest with your own stomach what they cannot face. That capacity is a hidden decency. / B-side: But the vessel has no drain. Others' poison doesn't vanish once swallowed — it sediments, curdles, ferments inside you. Key tension: When the vessel overflows — pour out, or shatter? | Lacks ($): Sanity — you carried everything for others; who carries you?",
        reference: "中世纪民间'食罪者'（替死去的贵族吃下象征罪孽的面包）；封建宫廷里的试毒太监；每天被迫观看并过滤全网血腥色情视频的现代内容审核员。",
        referenceEn: "Medieval 'sin-eaters' (consuming bread representing a dead noble's sins); poison-tasting eunuchs in feudal courts; modern content moderators forced to watch and filter gory/explicit videos daily.",
        topology: "他人之毒被吞入 → 容器没有出水口 → 沉积物在体内变质",
        directive: {
            bright: "所有人找他倾诉。他总是说'没事，说吧'。写他接住别人痛苦时的那种沉稳——他的胃装得下所有人的苦。这种容量是一种隐秘的力量，也是一种温柔。他替别人消化了他们不敢面对的东西。不要写成牺牲，写一个真的愿意扛的人。",
            dark: "他听完了所有人的故事。回到家他坐在沙发上，盯着墙。写他那种被灌满之后的安静——不是平静，是满到溢不出来。他的肚子里装着别人的尸体、秘密和眼泪，但他自己连一个树洞都没有。他的安静不是选择，是堵塞。",
            tension: "又有人来找他了。他倒了杯水递过去。他的手稳得很。写那双手——让观众注意到他的稳，然后开始怀疑那种稳到底是力量还是一种已经坏掉的感知。一个装了太多毒的容器，外表越完整越可疑。"
        }
    },
    {
        id: "subj_moderator",
        name: "守门人", nameEn: "The Gatekeeper",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "处于卑微的位置，却攥着一点发放通行或拒绝的微小权力。",
        defEn: "Positioned at the bottom, yet clutching the tiny power to grant passage or deny it.",
        flaw: "权力的幻觉", flawEn: "Petty Power",
        core: "A面：微权可以是卑微者最后的尊严火种——在整个系统都践踏你的时候，这一丁点权力证明你还不是最底层。/ B面：但微权是毒药。你开始用它来找回被羞辱的感觉，把同样卑微的人踩在脚下。关键张力：当同样卑微的人跪在面前——你会想起自己曾经也跪过吗？还是你已经忘了跪着的滋味？ | 缺失 ($): 尊严底座——你守的那道门，是别人的门。",
        coreEn: "A-side: Petty power can be the last ember of dignity for the downtrodden — when the system tramples you, this tiny authority proves you're not rock-bottom. / B-side: But petty power is poison. You use it to reclaim humiliated feelings, stepping on those equally wretched. Key tension: When someone just as lowly kneels before you — do you remember that you once knelt too? Or have you forgotten what kneeling tastes like? | Lacks ($): Dignity — the gate you guard is someone else's door.",
        reference: "卡夫卡《法的门前》里的守门人（手握进入窄门的一丝微小权力）；古代衙门向落难者索要打点费的牢头；反乌托邦游戏《请出示证件》中决定他人生死的边境审查员。",
        referenceEn: "The gatekeeper in Kafka's Before the Law; ancient jailers extracting bribes from the desperate; the border inspector dealing life or death in Papers, Please.",
        topology: "微小权力从卑微位置中长出 → 权力成为尊严的唯一替代品 → 守的门是别人的门",
        directive: {
            bright: "他坐在那扇门前。别人想进去得看他的脸色。写他攥着那一丁点权力时的踏实——在整个系统都踩着他的世界里，这是他唯一能站直的时刻。不要写成小人得志，写一个在最底层找到了最后一根稻草的人。那点权力是他的骨头。",
            dark: "有人跪在他面前求他放行。他的脸上什么表情都没有。写他享受那一秒的方式——不是狞笑，是一种终于不在最底下的确认。他已经忘了自己也跪过了。让观众看见权力最小的暴君比最大的暴君更冷，因为他只有这一点点。",
            tension: "一个和他一样卑微的人站在门前。他们对视。写那个对视——让观众同时看见两样东西：一个曾经跪过的人现在坐着，一个正在跪的人以后也可能坐到这个位置。不要说谁对谁错。让那道门自己说话。"
        }
    },
    {
        id: "subj_dummy",
        name: "挡箭牌 / 缓冲者", nameEn: "The Shield",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "被安放在冲突交汇处替上方的人承受冲击——你的身体就是别人的盾牌。",
        defEn: "Placed at the nexus of conflict to absorb impacts for those above — your body is someone else's shield.",
        flaw: "创伤麻木", flawEn: "Numbness",
        core: "A面：反复承受撞击可以磨出铁骨——在所有人都躲避的地方站着，这种站立本身就是一种沉默的勇气。/ B面：但撞击太多次之后，你失去的不是力气，是痛觉。不疼了不是变强了——是那个会喊疼的'你'已经死了。关键张力：当缓冲者不再感到疼痛——他是变强了，还是已经死了？ | 缺失 ($): 痛觉的权利——连喊疼的资格都被没收了。",
        coreEn: "A-side: Enduring blows repeatedly can forge iron bones — standing where everyone else hides is itself a silent courage. / B-side: But after too many impacts, what you lose is not strength but the ability to feel pain. Not hurting doesn't mean stronger — the 'you' who could cry out is already dead. Key tension: When the buffer no longer feels pain — grown stronger, or already died? | Lacks ($): The right to hurt — even the right to cry out has been confiscated.",
        reference: "欧洲中世纪宫廷里的'挨鞭童'（专门替犯错的王子受罚的平民玩伴）；职场体制中专替高层平息群氓怒火的'黑锅侠'；《疯狂的麦克斯》里被绑在车头当人肉护盾的战争男孩。",
        referenceEn: "'Whipping boys' of medieval courts (commoners taking punishment for princes); corporate fall-guys hired to absorb mob anger for executives; War Boys strapped to bumpers as meat shields in Mad Max.",
        topology: "身体被放置在冲击的交汇点 → 反复承受之后痛觉消失 → 不疼不是变强，是那个会喊疼的人死了",
        directive: {
            bright: "所有人都躲了，他没有。写他站在冲击面前的那种稳——他不是不怕，是站了太多次已经习惯了。他的肩膀比墙还硬。不要写成悲壮，写一个在承受中找到了某种沉默勇气的人。他站着，这本身就比所有人都多做了一件事。",
            dark: "有人打了他一拳。他没有反应。不是忍着——是真的不疼了。写他失去痛觉之后的状态：他的身体还在接收撞击，但信号已经传不到里面了。让观众意识到一件更可怕的事：不是他变强了，是那个会喊疼的'他'已经死了。",
            tension: "又一次撞击。他的身体往后退了半步，然后站稳了。写那半步——让观众猜他的身体还在做最后的抵抗，还是只是物理学上的惯性。他的脸上什么都读不出来。连他自己都不知道自己还能不能感觉到疼。"
        }
    },
    {
        id: "subj_npc",
        name: "游魂 / 背景底色", nameEn: "The Extra",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "深感自己只配充当他人故事的虚化背景——连被杀死都不配拥有一个特写镜头。",
        defEn: "Deeply feeling destined to be nothing more than blurred background in others' stories — not even worthy of a close-up when killed.",
        flaw: "极度平庸", flawEn: "Fear of Mediocrity",
        core: "A面：做背景有一种无人打扰的安全——在命运的聚光灯之外，你不必承受被选中的代价。最安全的位置恰恰是无人注目之处。/ B面：但安全是以透明为代价的。你走过人群不留下任何涟漪，死去时没有人需要停下来哀悼。关键张力：被看见——到底是祝福还是诅咒？ | 缺失 ($): 天命与高光——你活着，但从未出现在任何人的故事里。",
        coreEn: "A-side: Being background has a safety of not being disturbed — outside destiny's spotlight, you don't bear the cost of being chosen. The safest position is where no one looks. / B-side: But safety costs transparency. You pass through crowds without a ripple; when you die, no one needs to pause. Key tension: Is being seen a blessing or a curse? | Lacks ($): Protagonism — you're alive, but you've never appeared in anyone's story.",
        reference: "大时代史诗里随便死于兵荒马乱的流民；《红楼梦》卷首一闪而过的乡野村妇；游戏电影《失控玩家》中日复一日执行同一句对白、注定无缘主线任务的NPC。",
        referenceEn: "Refugees perishing randomly in epic eras; the fleeting countrywoman opening Dream of the Red Chamber; the NPC doomed to recite the same line forever without a main quest in Free Guy.",
        topology: "主体位于叙事焦点之外 → 存在不构成任何人的事件 → 消失不产生涟漪",
        directive: {
            bright: "没有人注意他。他站在人群的边缘，看着别人的故事发生。写他在聚光灯之外找到的那种安全——不被看见就不会被伤害。他的隐形是一种天赋。不要写成可怜，写一个在旁观位里找到了庇护所的人。最安全的位置就是无人注目之处。",
            dark: "他死了。没有人停下来。写他的消失不产生任何涟漪的那种轻——他活了一辈子，走过人群，没有人记得他的脸。他不是被遗忘的，是从来没有被记住过。他的存在从未出现在任何人的故事里。连死亡都是安静的。",
            tension: "镜头扫过人群。他在画面的边缘，焦点之外。写他的脸——让观众注意到他，然后想：我是第一个看见他的人吗？如果镜头没有偶然扫到他，他是否就不存在？让这个问题悬在那里。"
        }
    },
    {
        id: "subj_uniform",
        name: "盔甲 / 制服", nameEn: "The Uniform",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "身份被职业外壳或社会角色完全覆盖——制服穿太久，下面的人已经萎缩了。",
        defEn: "Identity entirely covered by professional shell or social role — the uniform worn too long; the person beneath has atrophied.",
        flaw: "面具吞噬", flawEn: "Role Fixation",
        core: "A面：制服可以是坚硬的保护——它替你挡开了世界的审视，给你一个不需要解释的身份。穿上它，你知道自己是谁。/ B面：但穿太久，制服就从保护变成了皮肤。你摘不下来了——不是因为它太紧，是因为下面什么都没有了。关键张力：脱下制服后的那张脸——自己还认得吗？ | 缺失 ($): 本源血肉——你是一个人，还是一个头衔？",
        coreEn: "A-side: The uniform can be hard protection — it shields you from the world's scrutiny, giving you an identity that needs no explanation. In it, you know who you are. / B-side: But worn too long, the uniform turns from armor into skin. You can't remove it — not because it's too tight, but because there's nothing underneath. Key tension: The face beneath the uniform — do you still recognize it? | Lacks ($): Original flesh — are you a person, or a title?",
        reference: "《西线无战事》中的普通士兵（被强行缝入军装，失去作为人的喘息）；被严苛封建'宗法'彻底吞噬了人性的卫道士；《星球大战》中连面容和情感都被白色盔甲标准化的暴风兵。",
        referenceEn: "The regular soldiers in All Quiet on the Western Front (stitched into uniforms without a breath for humanity); moral guardians totally devoured by strict feudal law; Stormtroopers in Star Wars whose very faces and emotions are standardized by white armor.",
        topology: "角色覆盖了人 → 制服从保护变成皮肤 → 脱下之后下面什么都没有",
        directive: {
            bright: "他穿上制服的时候背挺得最直。写他在角色中找到的那种确定——他不需要解释自己是谁，制服已经替他回答了。穿上它，世界就有了秩序。不要写成丧失自我，写一个在身份外壳中找到了安全的人。制服给了他一个不需要怀疑的形状。",
            dark: "他下班了。他脱掉制服挂在门后。然后他站在客厅里，不知道该做什么。写他脱下制服之后的那种裸露——不是身体的裸，是没有角色之后的空。他的脸在镜子里看起来像一个陌生人。制服穿太久，下面的人已经萎缩了。",
            tension: "他穿着制服在街上走。有个老朋友叫了他的名字，不是头衔。他转过头的那一秒，脸上闪过什么——让观众看见那个名字和那身制服之间的距离。他到底是穿着制服的人，还是长了一个人形状的制服？不要回答。"
        }
    },
    {
        id: "subj_hand",
        name: "百巧之手", nameEn: "The Hands",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "身体的某个部位或某项天赋被过度神化——人被切割成了器官，器官比人更值钱。",
        defEn: "A single body part or talent excessively deified — the person carved into an organ, the organ worth more than the person.",
        flaw: "器官割裂", flawEn: "Synecdoche",
        core: "A面：被世人追捧的那双手可以是骄傲的王冠——你拥有别人没有的天赋，这种独特性让你在人群中发光。/ B面：但当世界只爱你的手而不爱你，你就被切割成了零件。手受伤的那天，你发现没人来看你——他们只来看手。关键张力：如果天赋消失，剩下的那个人还值得被爱吗？ | 缺失 ($): 存在的完整性——你是一个人，还是一双手？",
        coreEn: "A-side: The hands the world celebrates can be a proud crown — you have a gift others lack; that uniqueness makes you glow in the crowd. / B-side: But when the world loves only your hands and not you, you're carved into spare parts. The day the hand is injured, no one comes to see you — they come to see the hand. Key tension: If the talent vanishes, is the person who remains still worth loving? | Lacks ($): Wholeness — are you a person, or a pair of hands?",
        reference: "《霸王别姬》程蝶衣（嗓子身段被剥削到极致倒逼自己割裂原生性别）；古代替皇陵雕刻机关事毕后被剁去双手的巧匠；废土世界中被截肢并换上夺命机械臂的血肉改造工具。",
        referenceEn: "Cheng Dieyi in Farewell My Concubine (his voice and posture exploited to the point of fracturing his native gender); ancient tomb artisans getting their hands chopped off to secure secrets; post-apocalyptic mercenaries amputated to wield killer metallic arms.",
        topology: "整体被切割为局部 → 器官的价值超过了人的价值 → 天赋消失时主体同时失效",
        directive: {
            bright: "他的手比他的脸出名。写他的手在工作时的光芒——精准、优雅、独一无二。世界爱他的手，这让他站在人群中发光。不要写成被剥削，写一个在天赋中找到了独特性的人。他的手是他唯一需要的签名。",
            dark: "他的手受伤了。所有人来看他。但他们看的是手，不是他。写那个瞬间——他躺在床上，来探望的人第一眼看的都是那双缠着绷带的手。没有人看他的脸。他的存在已经被切割成了零件，零件比人值钱。",
            tension: "有人对他说'你真厉害'。他笑了。写那个笑——让观众分不清他是因为被夸而高兴，还是因为又一次被等同于那双手而疲倦。如果天赋消失了，剩下的那个人还值得被看见吗？让这个问题留在他的笑里。"
        }
    },
    {
        id: "subj_ear",
        name: "倾听的树洞", nameEn: "The Ear",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "不可抗拒地成为他人倾诉秘密与痛苦的容器——所有人都往你这里倒，但你没有出口。",
        defEn: "Irresistibly becoming the vessel into which others pour secrets and suffering — everyone pours in, but you have no outlet.",
        flaw: "精神淤积", flawEn: "Burden of Secrets",
        core: "A面：被信任是一种特权——人们选择在你面前卸下面具，说明你的存在让人感到安全。这种力量是沉默的，也是珍贵的。/ B面：但当他人的重量堆满颅骨，你找不到向外倾倒的出口。你消化了全世界的苦涩，自己却连一个树洞都没有。关键张力：替全世界消化了苦涩——谁来替你消化？ | 缺失 ($): 豁免与排解——你是所有人的垃圾桶，但你不是垃圾场。",
        coreEn: "A-side: Being trusted is a privilege — people unmask before you because your presence makes them feel safe. That power is quiet, and precious. / B-side: But when others' weight fills your skull, there's no outlet to pour it out. You digested the world's bitterness, yet you don't even have a hollow tree to whisper into. Key tension: Having digested everyone's bitterness — who digests yours? | Lacks ($): Release — you are everyone's bin, but you are not a landfill.",
        reference: "《玫瑰的名字》中听取了太多阴暗诡计而濒临疯癫的修士；封建深宫中被强行毒哑专门侍奉起居的聋哑奴仆；反乌托邦社会里被无数狂躁公民当成赛博发泄孔的情绪处理中心接线员。",
        referenceEn: "The monk driven mad by dark secrets in The Name of the Rose; deaf-mute servants poisoned in feudal palaces purely to serve without telling tales; the dystopia's mood operators treated as cyber-vents by manic citizens.",
        topology: "主体成为他人倾倒的容器 → 信任是入口，但没有出口 → 堆满之后容器本身变形",
        directive: {
            bright: "所有人都信任他。他们在他面前卸掉面具、放下防备。写他作为安全港的那种力量——他的存在让人安心，他的沉默让人觉得被接住了。不要写成被动，写一个因为被信任而获得了隐秘尊严的人。他的耳朵是一种特权。",
            dark: "他记得所有人的秘密。他自己的秘密没有人问过。写他在深夜独处时的状态——别人的声音在他脑子里排着队回放，但他自己的声音已经很久没有响过了。他是所有人的树洞，但他连一个可以张嘴的地方都没有。",
            tension: "又有人来找他了。'我跟你说个事'。他点头，坐下来。写他的表情——温暖的、开放的、准备好的。让观众注意到他太擅长这个了。擅长到让人怀疑：这到底是一种天赋，还是一种他已经无法拒绝的条件反射？"
        }
    },
    {
        id: "subj_foot",
        name: "无休之足", nameEn: "The Wandering Foot",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "命运注定无法长久停留——永远在路上的驿卒、逃亡者或漫游者，连喘息都是奢侈。",
        defEn: "Fated never to stay — the eternal courier, fugitive, or wanderer always on the road, where even a pause to breathe is a luxury.",
        flaw: "剥夺停歇", flawEn: "Restlessness",
        core: "A面：永不停歇可以是自由的极致——你不属于任何一个地方，因此你可以属于所有地方。路本身就是你的国土，脚步就是你的语言。/ B面：但当所有故乡都关上了门，自由就从选择变成了诅咒。你不是在走，你是在逃。每一步都不是朝向什么，而是逃离什么。关键张力：当所有故乡都关上了门——脚步本身能成为家吗？ | 缺失 ($): 归宿定点——你拥有整条路，却没有一个可以停下来的点。",
        coreEn: "A-side: Never stopping can be the pinnacle of freedom — you belong nowhere, so you belong everywhere. The road itself is your country; your footsteps are your language. / B-side: But when every homeland shuts its door, freedom becomes a curse. You're not walking; you're fleeing. Every step aims not toward something, but away from something. Key tension: When every homeland shuts its door — can the journey itself become home? | Lacks ($): Destination — you own the entire road, but not a single point to stop.",
        reference: "《悲惨世界》中只要停顿就会被残酷律法捕捉的冉·阿让；大漠里跑死在黄沙驿道上的八百里加急传令兵；《雪国列车》中必须要不断绕行地球否则就会冻死的末日遗民。",
        referenceEn: "Jean Valjean in Les Misérables, hunted by cruel law the moment he pauses; emergency couriers dropping dead on desert post roads; the survivors of Snowpiercer who must orbit the globe endlessly or freeze.",
        topology: "停留的权利被剥夺 → 移动从选择变成生存条件 → 脚步本身成为唯一的地址",
        directive: {
            bright: "他走了很远。他的鞋底比别人薄，但他的腿比别人稳。写他在路上找到的那种自由——天地为家，没有需要保卫的东西。他轻得像风。不要写成流浪的浪漫化，写一个因为不属于任何地方而拥有了所有地方的人。",
            dark: "他已经不记得上一次脱鞋的感觉了。写他永远在走的那种惯性——不是因为想去哪里，是因为停不下来。每一个地方都只是路过。他的脚已经不认识'停'这个指令了。让观众感觉到一种被风吹干了的疲惫：他还在走，但不是在走向什么。",
            tension: "有人说'留下来吧'。他站住了。写他站住的那一秒——脚停了但身体还在惯性地往前倾。让观众同时看见两样东西：一个想留下来的人，和一个已经不会留下来的身体。他到底是热爱自由还是害怕停下来面对自己？不要回答。"
        }
    },
    {
        id: "subj_undercover",
        name: "卧底", nameEn: "The Undercover",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "潜入敌人内部，用假身份活了太久——你已经分不清哪边是你真正的阵营了。你的面具长在了脸上。",
        defEn: "Having infiltrated the enemy for too long under a false identity — you can no longer tell which side is truly yours. Your mask has grown into your face.",
        flaw: "身份模糊", flawEn: "Blurred Identity",
        core: "A面：卧底可以是最高形式的忠诚——你为了组织放弃了名字和身份，你的牺牲发生在暗处，没有人知道你做了什么。/ B面：但假身份用得太久会反噬。你在敌人那边有了朋友、信任、甚至归属感。收网的那天你的手在发抖。关键张力：当收网的命令下达——你毁掉的是敌人的世界，还是你自己建的？ | 缺失 ($): 真实身份——你在两边都是假的，但你在两边都是真的。",
        coreEn: "A-side: Being undercover can be the highest loyalty — you sacrificed your name and identity; your sacrifice happens in the dark, unknown to anyone. / B-side: But a false identity used too long bites back. You made friends, gained trust, even felt belonging on the other side. The day the net closes, your hand trembles. Key tension: When the order comes — are you destroying the enemy's world, or your own? | Lacks ($): True identity — you are fake on both sides, yet real on both.",
        reference: "《无间道》中陈永仁与刘建明互为镜像的双重卧底困局；《谍影重重》中连自己真名都遗忘的杰森·伯恩。",
        referenceEn: "The mirrored double-undercover dilemma of Chan Wing-yan and Lau Kin-ming in Infernal Affairs; Jason Bourne, who has forgotten even his real name in The Bourne Identity.",
        topology: "假身份使用过久 → 真假阵营的边界溶解 → 收网时毁掉的不确定是哪个世界",
        directive: {
            bright: "他在敌人那边笑得很自然。写他的演技——不是表演，是真的融入了。他替组织放弃了名字和身份，他的牺牲发生在暗处。不要写成痛苦的卧底，写一个在假身份里找到了另一种真实的人。他在这边有了朋友，这些朋友不知道他是谁。",
            dark: "收网的命令下来了。他的手在发抖。写他看着对面那些信任他的人的脸——他要亲手毁掉的不是敌人的世界，是他自己花了几年建的世界。让观众看到一个两边都是真的、两边都是假的人。他不知道该背叛哪一边，因为两边都是他。",
            tension: "有人问他'你到底是哪边的'。他沉默了。写那个沉默——不是在隐瞒，是真的不知道。他在两个身份之间站了太久，脚下的线已经模糊了。让观众和他一起站在那条线上。不要替他选边。"
        }
    }
];

