import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_C: LibraryCategoryDef = {
  id: "loc_discipline_education",
  name: "03. 教育与规训空间 (Discipline & Education)",
  nameEn: "Discipline & Education Spaces",
  desc: "承载知识传授、身体训练、考核筛选与精神改造的功能性空间。空间通过单向凝视、标准化座席和封闭边界，将自由人体压缩为可考核的标准单元。",
  items: [
    {
      id: "classroom",
      name: "教室",
      nameEn: "Classroom",
      def: "一个面向多人进行知识单向传授的封闭空间。讲台高于座席，所有目光汇向同一焦点。座位被固定在地面上，身体被限制在标准尺寸内。后排是权力的盲区。",
      defEn: "An enclosed space for unidirectional knowledge transmission to many. The podium stands above seating, all gazes converge on one focal point. Seats are fixed to the floor; bodies constrained to standard dimensions. The back row is authority's blind spot.",
      core: "坐在第一排的人被老师的目光钉死在椅子上，坐在最后一排的人正在用课本挡住脸策划一场无声的叛变。教室的秘密是——规训和反叛共享同一个屋顶。",
      coreEn: "Front-row students are pinned to chairs by the teacher's gaze; back-row students hide behind textbooks plotting a silent mutiny. The classroom's secret — discipline and rebellion share the same roof.",
      reference: "《死亡诗社》(1989, 彼得·威尔) 基廷站上课桌 / 《浪潮》(2008, 丹尼斯·甘塞尔) 教室内的法西斯实验",
      referenceEn: "\"Dead Poets Society\" (1989, Peter Weir) Keating on the Desk / \"The Wave\" (2008, Dennis Gansel) Fascism Experiment"
    },
    {
      id: "library_archive",
      name: "图书馆/藏经阁",
      nameEn: "Library / Archive",
      def: "大量信息载体（书籍、卷轴、数据）按特定编码系统被垂直堆叠至远超人体高度的封闭空间。取用最高处的知识需要梯子。空间要求绝对安静。",
      defEn: "Vast information carriers (books, scrolls, data) vertically stacked far beyond human height by specific coding systems in enclosed space. Accessing the highest knowledge requires a ladder. Absolute silence is required.",
      core: "他在第七排书架的最高层找到了那本禁书——梯子在他脚下吱呀作响，他知道：越高的知识越危险，不是因为内容，是因为摔下来会死。",
      coreEn: "He found the forbidden book on the top shelf of the seventh row — the ladder creaked beneath him. He knew: the higher the knowledge, the more dangerous — not for its content, but because the fall kills.",
      reference: "《玫瑰之名》(1986, 让-雅克·阿诺) 修道院迷宫图书馆 / 《星际穿越》(2014, 克里斯托弗·诺兰) 五维书架",
      referenceEn: "\"The Name of the Rose\" (1986, Jean-Jacques Annaud) Monastery Labyrinth Library / \"Interstellar\" (2014, Nolan) Five-Dimensional Bookshelf"
    },
    {
      id: "exam_hall",
      name: "考场",
      nameEn: "Examination Hall",
      def: "大量单人桌椅以精确等距排列在巨大空间中。每个人被分配一个编号。所有人同时开始、同时结束。监考者在过道中缓慢巡视。目光的任何横向移动都是犯罪。",
      defEn: "Numerous single desks arranged at precise equal intervals in a vast space. Each person assigned a number. All begin and end simultaneously. Proctors patrol the aisles slowly. Any lateral eye movement is a crime.",
      core: "钟声响起的那一秒，三百支笔同时落下来——三百颗心脏在同一个节拍里跳动。这不是考试，这是一场用分数进行的集体处决。",
      coreEn: "The second the bell rang, three hundred pens dropped simultaneously — three hundred hearts beating in one rhythm. This isn't a test; it's mass execution by score.",
      reference: "《三傻大闹宝莱坞》(2009, 拉库马·希拉尼) 印度工学院考场 / 《大逃杀》(2000, 深作欣二) 考场变杀场",
      referenceEn: "\"3 Idiots\" (2009, Rajkumar Hirani) IIT Exam Hall / \"Battle Royale\" (2000, Kinji Fukasaku) Exam-to-Kill Field"
    },
    {
      id: "drill_yard",
      name: "操练场",
      nameEn: "Drill Yard",
      def: "一块被围墙或栅栏封闭的露天平地。地面被无数双脚踩成硬质。空间中没有任何可以依靠或躲藏的物体。每个人的身体都暴露在教官和同伴的全方位视线中。",
      defEn: "An open flat enclosed by walls or fences. Ground hardened by countless feet. No objects to lean on or hide behind. Every body is exposed to the full-spectrum gaze of instructors and peers.",
      core: "他做了五十个俯卧撑之后手臂开始发抖——教官站在他头顶说，抖的不是你的手臂，是你的自尊心。操练场教你的第一课是：你的身体不属于你。",
      coreEn: "After fifty push-ups his arms shook — the instructor stood over him: it's not your arms trembling, it's your pride. The drill yard's first lesson: your body doesn't belong to you.",
      reference: "《全金属外壳》(1987, 斯坦利·库布里克) 海军陆战队训练营 / 《光荣之路》(1957, 斯坦利·库布里克) 一战操练场",
      referenceEn: "\"Full Metal Jacket\" (1987, Kubrick) Marine Boot Camp / \"Paths of Glory\" (1957, Kubrick) WWI Drill Ground"
    },
    {
      id: "amphitheater",
      name: "阶梯讲堂",
      nameEn: "Amphitheater / Lecture Hall",
      def: "座位沿半圆或扇形逐级升高围绕一个中心低洼舞台。坐在高处的人俯视低处的表演者。声音从低处向上方辐射。演说者被包围但无法还击。",
      defEn: "Seating rises in tiers along a semicircle or fan around a central sunken stage. Those seated above look down at the performer below. Sound radiates upward from the low point. The speaker is surrounded but cannot strike back.",
      core: "他站在最低处开始演讲，三百张脸从上方俯瞰他——他突然意识到这个空间和斗兽场的结构一模一样。唯一的区别是，这里的野兽用打分来吃人。",
      coreEn: "He stood at the lowest point to speak, three hundred faces looking down — he suddenly realized this space is structurally identical to the arena. The only difference: here the beasts eat people with scores.",
      reference: "《心灵捕手》(1997, 格斯·范·桑特) MIT大讲堂 / 《社交网络》(2010, 大卫·芬奇) 哈佛阶梯教室",
      referenceEn: "\"Good Will Hunting\" (1997, Gus Van Sant) MIT Lecture Hall / \"The Social Network\" (2010, David Fincher) Harvard Amphitheater"
    },
    {
      id: "reformatory_cell",
      name: "改造室/感化室",
      nameEn: "Reformatory Cell",
      def: "一个用隔离和感官剥夺迫使被关押者'自我反省'的小型密闭空间。墙壁是白色或灰色的，没有窗户，灯永远亮着或永远暗着。",
      defEn: "A small sealed space using isolation and sensory deprivation to force the confined into 'self-reflection.' Walls are white or gray, no windows, lights always on or always off.",
      core: "他们说这不是惩罚，是帮助你'看清自己'。但在一面白墙面前坐了七十二小时之后，他确实看清了——他看清的是墙，不是自己。",
      coreEn: "They said this isn't punishment, it's helping you 'see yourself clearly.' After seventy-two hours facing a white wall, he did see clearly — he saw the wall, not himself.",
      reference: "《发条橙》(1971, 斯坦利·库布里克) 路德维科疗法 / 《飞越疯人院》(1975, 米洛斯·福尔曼) 隔离室",
      referenceEn: "\"A Clockwork Orange\" (1971, Kubrick) Ludovico Treatment / \"One Flew Over the Cuckoo's Nest\" (1975, Miloš Forman) Isolation Room"
    },
    {
      id: "boarding_dormitory",
      name: "宿舍/集体寝室",
      nameEn: "Dormitory",
      def: "多张床铺以平行线排列在同一空间中，个人领地被压缩至一张床和一个柜子。所有人在同一时间熄灯。呼吸声、翻身声和梦话构成夜间的真实自白。",
      defEn: "Multiple beds arranged in parallel lines in one space; personal territory compressed to one bed and one locker. Lights out at the same time for all. Breathing, turning, and sleep-talking form the night's true confessions.",
      core: "熄灯后他假装睡着，听见隔壁床在哭。他不敢翻身安慰——因为在这个空间里，脆弱是一种会传染的疾病。",
      coreEn: "After lights out he pretended to sleep, hearing the next bed crying. He didn't dare turn to comfort — because in this space, vulnerability is a contagious disease.",
      reference: "《全金属外壳》(1987, 斯坦利·库布里克) 军营宿舍 / 《哈利·波特》(2001, 克里斯·哥伦布) 霍格沃茨宿舍",
      referenceEn: "\"Full Metal Jacket\" (1987, Kubrick) Barracks / \"Harry Potter\" (2001, Chris Columbus) Hogwarts Dormitory"
    },
    {
      id: "blackboard_wall",
      name: "黑板/公示墙",
      nameEn: "Blackboard / Notice Wall",
      def: "一面垂直表面，承载着可被所有在场者同时阅读的书写内容。书写权通常被垄断——只有站在它面前的人有资格在上面留下痕迹。",
      defEn: "A vertical surface bearing written content readable by all present simultaneously. Writing rights are usually monopolized — only those standing before it have the privilege to leave marks.",
      core: "老师在黑板上写下了正确答案，然后转身问谁的答案不一样。没有人举手——不是因为都对了，是因为黑板上的字比真相更有权力。",
      coreEn: "The teacher wrote the correct answer on the blackboard, then turned and asked who had a different answer. No one raised a hand — not because all were right, but because the words on the board held more power than truth.",
      reference: "《浪潮》(2008, 丹尼斯·甘塞尔) 口号上墙 / 《美丽心灵》(2001, 朗·霍华德) 纳什的窗户公式",
      referenceEn: "\"The Wave\" (2008, Dennis Gansel) Slogans on the Wall / \"A Beautiful Mind\" (2001, Ron Howard) Nash's Window Formulas"
    },
    {
      id: "uniform_factory",
      name: "制服分发处",
      nameEn: "Uniform Distribution Point",
      def: "一个流水线式的窄长空间。入口一端是各种尺寸和形状的个体，出口一端是穿着完全相同衣物的标准化人体。名字在此被替换为编号。",
      defEn: "A narrow, assembly-line-style space. At the entry end: individuals of various sizes and shapes. At the exit end: standardized bodies in identical clothing. Names are replaced by numbers here.",
      core: "他把自己的衣服放进一个写着编号的纸袋里——衣服是有温度的，编号是冰冷的。从这一秒起，他不再是他，他是7号。",
      coreEn: "He placed his clothes in a numbered paper bag — the clothes were warm, the number was cold. From this second on, he was no longer him; he was No. 7.",
      reference: "《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 集中营登记处 / 《全金属外壳》(1987, 斯坦利·库布里克) 入伍剃头线",
      referenceEn: "\"Schindler's List\" (1993, Spielberg) Camp Registration / \"Full Metal Jacket\" (1987, Kubrick) Enlistment Shave Line"
    },
    {
      id: "headmaster_office",
      name: "校长室/训导室",
      nameEn: "Headmaster's Office",
      def: "一扇通常紧闭的门后面的小型封闭空间。桌子的一侧坐着有权力的人，另一侧是一把故意矮半截的椅子。被叫进来的人永远不知道自己犯了什么错——直到门关上。",
      defEn: "A small enclosed space behind a usually closed door. On one side of the desk sits the authority; on the other, a chair deliberately half a head shorter. Those summoned never know what they did wrong — until the door shuts.",
      core: "门在他身后关上的那一声脆响，比任何惩罚都更有效。他还没坐下就已经在道歉了——他甚至不知道自己在为什么道歉。",
      coreEn: "The crisp click of the door closing behind him was more effective than any punishment. He was apologizing before he even sat down — he didn't even know what he was apologizing for.",
      reference: "《哈利·波特》(2001, 克里斯·哥伦布) 邓布利多办公室 / 《早餐俱乐部》(1985, 约翰·休斯) 训导主任办公室",
      referenceEn: "\"Harry Potter\" (2001, Chris Columbus) Dumbledore's Office / \"The Breakfast Club\" (1985, John Hughes) Principal's Office"
    }
  ]
};
