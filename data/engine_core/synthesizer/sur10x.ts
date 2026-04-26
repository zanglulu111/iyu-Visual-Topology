import { LibraryItemDef } from '../../../types';

/**
 * SUR10X. 信念裂度 (Belief Fracture Degree)
 *
 * 定义：主体对自己所持信仰/意识形态的"当真程度"——从完全内化到彻底决裂的连续谱。
 *
 * 正交关系：
 *   SUR10 决定"信什么" → SUR10X 决定"信到什么程度"
 *   同一个信念 × 不同裂度 = 完全不同的叙事人物
 *
 * v3.2: 重写 def 为操作性描述，新增 directive 字段（bright/dark/tension）
 */
export const SYNTHESIZER_SUR10X: LibraryItemDef[] = [
    {
        id: "sur10x_level_1",
        name: "L1.虔信",
        nameEn: "Total Devotion",
        group: "SUR10X. 信念裂度",
        def: "主体与信念完全融合，没有任何间距。角色不会反思、不会犹豫——信念就是他的感知滤镜，所有经验都通过信念的语言被翻译后才进入意识。外部质疑触发的不是思考，而是敌意。",
        defEn: "Subject and belief fully fused with zero distance. The character never reflects or hesitates — belief is the perceptual filter through which all experience is translated before entering consciousness. External questioning triggers hostility, not thought.",
        directive: {
            bright: "角色的虔信给予他绝对的行动力和清澈感。他从不犹豫，因为信念提供了所有答案。写出这种确定性的力量感——在混乱中，他是唯一知道该怎么做的人。",
            dark: "角色的虔信使他成为信念的执行工具。他无法区分'我想要'和'教义要求'。写出这种融合的恐怖感——他伤害别人时毫无罪恶感，因为在他的语言里这不叫伤害。",
            tension: "角色的虔信在外部压力下既是铠甲又是牢笼。他用信念的确定性抵御一切怀疑，但正是这种不可穿透性使他无法接收任何真实信号。写出坚不可摧与完全封闭之间的张力。"
        },
        core: "他从未觉得自己有过选择。信仰不是他接受的东西，而是他睁开眼就已经在里面的东西——像羊水，像重力，像母语。你不能质疑重力。",
        coreEn: "He never felt he had a choice. Faith is not something he accepted, but something he's already inside when he opens his eyes — like amniotic fluid, like gravity, like a mother tongue. You cannot question gravity.",
        reference: "《沉默》(2016, 马丁·斯科塞斯) 洛特里哥神父的早期狂信 / 《使女的故事》(2017, 剧集) 嬷嬷莉迪亚的教义执行",
        referenceEn: "\"Silence\" (2016, Scorsese) Father Rodrigues' early fanaticism / \"The Handmaid's Tale\" (2017, Series) Aunt Lydia's doctrinal enforcement"
    },
    {
        id: "sur10x_level_2",
        name: "L2.微裂",
        nameEn: "Hairline Crack",
        group: "SUR10X. 信念裂度",
        def: "主体仍在信念系统内部运作，但身体和注意力开始不服从。角色会注意到以前被忽略的细节（仪式的荒谬、权威的瑕疵），会出现失眠或走神，但还不敢把这些信号组织成怀疑。裂缝存在，但角色还在否认裂缝。",
        defEn: "Subject still operates within the belief system, but body and attention begin disobeying. Character notices previously ignored details (absurdity of rituals, flaws of authority), experiences insomnia or distraction, but dares not yet organize these signals into doubt. The crack exists, but the character still denies it.",
        directive: {
            bright: "角色对信念的微小松动打开了感知的新通道。他第一次注意到教条之外的世界——不是作为威胁，而是作为新鲜的空气。写出裂缝带来的感官觉醒：颜色变得更亮，声音变得更清晰。",
            dark: "角色感受到信念在松动，但这个松动本身令他恐惧。他加倍投入仪式来压制怀疑，但身体在反抗——失眠、恶心、无法专注。写出自我审查的焦虑：他把每个念头都当作叛教来恐惧。",
            tension: "角色卡在两个世界之间：信念的语言还在运转，但身体已经开始发出不匹配的信号。他用理性维持信仰，同时用感官接收怀疑。写出认知失调的具体感觉——不是抽象的矛盾，而是生理性的不适。"
        },
        core: "他继续跪着祈祷，但膝盖上的淤青让他分心了。他开始注意到祭坛上的灰尘、布道者嘴角的唾液、捐款箱上的锈迹。这些细节以前从来不存在。",
        coreEn: "He keeps kneeling in prayer, but the bruises on his knees distract him. He starts noticing the dust on the altar, the saliva at the corner of the preacher's mouth, the rust on the donation box. These details never existed before.",
        reference: "《大开眼戒》(1999, 斯坦利·库布里克) 比尔对婚姻忠诚的第一次动摇 / 《冬眠》(2014, 努里·比格·锡兰) 知识分子的信念磨损",
        referenceEn: "\"Eyes Wide Shut\" (1999, Kubrick) Bill's first shake of marital fidelity / \"Winter Sleep\" (2014, Nuri Bilge Ceylan) intellectual's faith erosion"
    },
    {
        id: "sur10x_level_3",
        name: "L3.反讽",
        nameEn: "Ironic Distance",
        group: "SUR10X. 信念裂度",
        def: "主体已看穿信念的虚构性，但选择留在系统内继续扮演信徒。角色会配合一切外部仪式（开会、表态、社交），但内心保持冷静的观察者距离。他不反抗是因为反抗的代价高于伪装的代价。行为上合规，精神上已经离场。",
        defEn: "Subject has seen through the fictional nature of belief but chooses to stay inside the system performing as a believer. Character complies with all external rituals (meetings, declarations, social acts) while maintaining calm observer distance internally. No rebellion because the cost of rebellion exceeds the cost of pretense. Behaviorally compliant, spiritually absent.",
        directive: {
            bright: "角色的反讽距离赋予他看穿系统的智慧和存活其中的灵活。他能读懂所有人的信号，能在体制缝隙中为自己和他人创造微小的自由空间。写出这种精明的温柔——他知道游戏是假的，但他在假游戏里保护真的人。",
            dark: "角色的反讽距离使他成为一个永久的旁观者——他什么都看穿了，但这个'看穿'本身成了最深的牢笼。他无法真正投入任何事物，因为投入意味着'不再聪明'。写出犬儒主义的空洞感——他在车里坐四十分钟不是因为在思考，而是因为没有任何事情值得他走出车门。",
            tension: "角色的反讽同时是他的自由和他的麻痹。他比虔信者看得更清楚，但这种清醒剥夺了他行动的能力。写出清醒与瘫痪的悖论——他知道一切是假的，但'知道是假的'并没有给他任何出路。"
        },
        core: "他在会议上带头鼓掌，鼓得比任何人都响。散会后他独自回到车里，在方向盘上坐了四十分钟，什么都没做。他知道这一切是假的。他也知道'知道这是假的'并不能帮他辞职。",
        coreEn: "He leads the applause at the meeting, clapping louder than anyone. After the meeting he sits alone in his car, forty minutes at the steering wheel, doing nothing. He knows all of it is fake. He also knows that 'knowing it is fake' does not help him resign.",
        reference: "《大佛普拉斯》(2017, 黄信尧) 肚财对底层生存的冷幽默接受 / 《局内人》(2015, 禹民镐) 在腐败体制中清醒求存的记者",
        referenceEn: "\"The Great Buddha+\" (2017, Huang Hsin-yao) Belly Button's cold humor acceptance / \"Inside Men\" (2015, Woo Min-ho) journalist surviving lucidly inside a corrupt system"
    },
    {
        id: "sur10x_level_4",
        name: "L4.脱落",
        nameEn: "Detachment",
        group: "SUR10X. 信念裂度",
        def: "主体已完全退出信念系统，不反抗也不解释。角色对原信念的符号系统（术语、仪式、权威人物）不再有情感反应——既不愤怒也不怀念，只是无关。他的退出是安静的、单方面的，不寻求被理解。周围人的困惑和追问对他来说已经是另一个世界的噪音。",
        defEn: "Subject has fully exited the belief system — no rebellion, no explanation. Character has zero emotional reaction to the original belief's symbol system (terminology, rituals, authority figures) — neither anger nor nostalgia, just irrelevance. The exit is quiet and unilateral, not seeking to be understood. Others' confusion and questioning are noise from another world.",
        directive: {
            bright: "角色的脱落带来一种彻底的轻盈。他不需要对抗任何东西，因为他已经走出了对抗的坐标系。写出这种自由的安静质感——不是空虚，而是一个人终于不再为别人的剧本演出之后的身体松弛。",
            dark: "角色的脱落切断了他与所有社会连接的通道。他不只是退出了信念——他退出了'需要被理解'本身。写出这种彻底断联的孤绝：他的沉默不是抗议，而是一个已经不在信号覆盖范围内的人发出的静电噪声。",
            tension: "角色的脱落在他和周围人之间制造了一个无法弥合的认知鸿沟。他已经走出去了，但走出去这件事本身对留在里面的人构成了一种无声的审判。写出脱落者的宁静与周围人焦虑之间的不对称——他越平静，别人越不安。"
        },
        core: "他的手机响了七十二次，全是同事和亲戚的。他看了一眼，放回桌上，然后继续用叉子把盘子里的意面卷成一个完美的圆柱体。没有人理解他为什么不接电话。他自己也不打算解释。",
        coreEn: "His phone rang seventy-two times, all from colleagues and relatives. He glanced at it, put it back on the table, and continued rolling the pasta on his plate into a perfect cylinder with his fork. Nobody understands why he won't answer. He doesn't plan to explain either.",
        reference: "《醉乡民谣》(2013, 科恩兄弟) 勒维恩·戴维斯对音乐行业的系统性退出 / 《帕特森》(2016, 贾木许) 公交司机对社会期待的沉默拒绝",
        referenceEn: "\"Inside Llewyn Davis\" (2013, Coen Brothers) Davis's systemic withdrawal / \"Paterson\" (2016, Jarmusch) bus driver's silent refusal of social expectations"
    },
    {
        id: "sur10x_level_5",
        name: "L5.决裂",
        nameEn: "Violent Rupture",
        group: "SUR10X. 信念裂度",
        def: "主体对原信念发动暴力清算。角色不是冷漠地离开，而是带着背叛者特有的仇恨回头摧毁。他的攻击精准且系统性，因为他曾经深度内化过这个系统的每一个结构——只有前信徒才知道神殿的承重墙在哪里。决裂的强度与曾经的虔诚成正比。",
        defEn: "Subject launches violent reckoning against the former belief. Character does not leave coldly but returns with a betrayer's hatred to destroy. Attacks are precise and systematic because they once deeply internalized every structure of the system — only a former believer knows where the load-bearing walls of the temple are. Rupture intensity is proportional to former devotion.",
        directive: {
            bright: "角色的决裂是一次净化性的毁灭——他烧掉旧世界是为了让新世界有生长的空间。写出破坏中的创造性：他拆解信念的动作精确而优美，因为他比任何外人都更了解这个结构，他的摧毁本身就是一种终极的理解。",
            dark: "角色的决裂吞噬了他自己。他对旧信念的仇恨变成了新的信仰——'毁灭它'成了他唯一的身份。写出复仇的自我消耗：他以为自己在反抗，但他已经变成了他所反抗之物的镜像，只是正负号翻转了。",
            tension: "角色的决裂同时是解放和自毁。他终于可以对曾经压制他的东西开枪了，但这杆枪是用他自己的骨头做的。写出暴力清算的双刃性——每一次精准的攻击都证明他对这个系统的了解深入骨髓，而这种了解本身就是他无法完全脱身的证据。"
        },
        core: "他把十五年前的入党申请书从抽屉底部翻出来，用打火机点着，看火焰慢慢烧到自己写的那句'我愿为组织献出一切'。他没有哭。他微笑了。比哭更可怕的那种微笑。",
        coreEn: "He digs out his fifteen-year-old party membership application from the bottom of the drawer, lights it with a lighter, watches the flame slowly reach the line he wrote: 'I am willing to give everything for the organization.' He doesn't cry. He smiles. The kind of smile more terrifying than crying.",
        reference: "《V字仇杀队》(2005, 詹姆斯·麦克特格) V对政权的系统性毁灭 / 《第一次归来》(2014, 张艺谋) 陆焉识对曾信仰体制的无声控诉",
        referenceEn: "\"V for Vendetta\" (2005, McTeigue) V's systematic regime destruction / \"Coming Home\" (2014, Zhang Yimou) Lu Yanshi's silent indictment of the once-trusted system"
    }
];
