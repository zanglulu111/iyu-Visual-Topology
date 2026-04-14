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
 * v3.1: 更名（原"象征界缝合度"），清除 M 层术语，对齐 SUR 标准
 */
export const SYNTHESIZER_SUR10X: LibraryItemDef[] = [
    {
        id: "sur10x_level_1",
        name: "L1.虔信",
        nameEn: "Total Devotion",
        group: "SUR10X. 信念裂度",
        def: "主体与信仰之间没有任何缝隙。教条即呼吸，规训即本能——他不是在'遵守'规则，他就是规则长出来的人形容器。任何外部质疑都会被生理性地排斥，如同身体排异移植器官。",
        defEn: "Zero gap between subject and belief. Doctrine is breathing, discipline is instinct — he does not 'follow' the rules, he is the human-shaped container grown from the rules themselves. Any external doubt is physiologically rejected, like the body rejecting a transplant organ.",
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
        def: "主体仍然戴着信徒的面具参与仪式，但身体已经开始发出不服从的信号：失眠、恶心、无法集中注意力。信仰的墙壁出现了头发丝般的裂缝——还不足以坍塌，但每次风吹过都会发出令人不安的嘎吱声。",
        defEn: "The subject still wears the believer's mask and participates in rituals, but the body has begun sending signals of disobedience: insomnia, nausea, inability to concentrate. Hairline cracks appear in the walls of faith — not enough to collapse, but every gust of wind produces an unsettling creak.",
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
        def: "主体彻底看穿了信仰的虚构性，但选择继续扮演信徒。他以一种冷静的犬儒姿态留在体制内部——不是因为相信，而是因为离开的代价太高，或者因为在废墟里寄生比在荒野里独行更舒适。",
        defEn: "The subject has completely seen through the fictional nature of the belief, but chooses to keep playing the believer. They remain inside the system with calm cynical composure — not because they believe, but because the cost of leaving is too high, or because parasitizing in ruins is more comfortable than walking alone in the wilderness.",
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
        def: "主体不再表演了。他像蛇蜕皮一样安静地从信仰的外壳中滑出来，把所有社会赋予的荣誉、头衔和意义系统留在身后。他没有愤怒，也没有宣言——只是不再回应了，像一个拔掉网线的服务器。",
        defEn: "The subject stops performing. Like a snake shedding skin, he quietly slides out of the shell of belief, leaving behind all socially granted honors, titles, and meaning systems. No anger, no manifesto — just stops responding, like a server with the cable unplugged.",
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
        def: "主体从信仰的尸体上站起来，调转枪口对准了曾经供奉它的神殿。这不是冷漠的退出，而是一场浸透了仇恨与背叛感的暴力清算——因为他曾经比任何人都虔诚，所以他现在比任何人都想亲手把它烧成灰。",
        defEn: "The subject rises from the corpse of faith, turning the gun on the temple that once enshrined it. This is not cold withdrawal, but a violent reckoning soaked in hatred and betrayal — because he was once more devout than anyone, he now wants more than anyone to burn it to ashes with his own hands.",
        core: "他把十五年前的入党申请书从抽屉底部翻出来，用打火机点着，看火焰慢慢烧到自己写的那句'我愿为组织献出一切'。他没有哭。他微笑了。比哭更可怕的那种微笑。",
        coreEn: "He digs out his fifteen-year-old party membership application from the bottom of the drawer, lights it with a lighter, watches the flame slowly reach the line he wrote: 'I am willing to give everything for the organization.' He doesn't cry. He smiles. The kind of smile more terrifying than crying.",
        reference: "《V字仇杀队》(2005, 詹姆斯·麦克特格) V对政权的系统性毁灭 / 《第一次归来》(2014, 张艺谋) 陆焉识对曾信仰体制的无声控诉",
        referenceEn: "\"V for Vendetta\" (2005, McTeigue) V's systematic regime destruction / \"Coming Home\" (2014, Zhang Yimou) Lu Yanshi's silent indictment of the once-trusted system"
    }
];
