import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_H: LibraryCategoryDef = {
  id: "loc_confinement_punishment",
  name: "08. 囚禁与惩罚空间 (Confinement & Punishment)",
  nameEn: "Confinement & Punishment Spaces",
  desc: "承载关押、审讯、肉体惩罚和强制劳动的功能性空间。空间在此处被武器化——墙壁、铁栏和光照时长本身就是刑具。",
  items: [
    {
      id: "prison_cell",
      name: "牢房",
      nameEn: "Prison Cell",
      def: "一个面积被精确计算到刚好容纳一只床、一只桶和一具人体的密封石室或金属箱。门从外面锁。窗户（如果有的话）小到只能看见一小块天空。时间在这里被墙壁切碎。",
      defEn: "A sealed stone or metal chamber precisely calculated to fit one bed, one bucket, and one body. Door locked from outside. The window (if any) is small enough to show only a sliver of sky. Time is shredded by walls here.",
      core: "他在墙上刻了第七百三十道划痕。每一道都代表一天——但从第五百道开始，他已经分不清是在数剩余的刑期，还是在数自己还剩多少。",
      coreEn: "He carved the 730th scratch on the wall. Each represents a day — but from the 500th, he couldn't tell if he was counting the remaining sentence or counting how much of himself was left.",
      reference: "《肖申克的救赎》(1994, 弗兰克·德拉邦特) 安迪的牢房 / 《基督山伯爵》(文学) 伊夫堡囚室",
      referenceEn: "\"The Shawshank Redemption\" (1994, Darabont) Andy's Cell / \"The Count of Monte Cristo\" (Literature) Château d'If Cell"
    },
    {
      id: "interrogation_room",
      name: "审讯室",
      nameEn: "Interrogation Room",
      def: "一张桌子、两把椅子、一盏灯。灯的角度被调整到直射被审者的脸。房间里没有窗户，没有时钟。空调可以被从外部控制——让你冷到发抖或热到出汗。",
      defEn: "One table, two chairs, one lamp. The lamp angle is adjusted to shine directly on the interrogated face. No windows, no clock. Air conditioning controllable from outside — making you shiver with cold or sweat with heat.",
      core: "他已经被问了同一个问题十七遍。每次他的回答都一样，但提问者的表情让他开始怀疑自己是不是记错了。审讯室不需要使用暴力——重复本身就是酷刑。",
      coreEn: "He'd been asked the same question seventeen times. His answer was the same each time, but the questioner's expression made him doubt his own memory. The interrogation room needs no violence — repetition itself is torture.",
      reference: "《十二怒汉》(1957, 西德尼·吕美特) 密室对峙 / 《黑暗骑士》(2008, 克里斯托弗·诺兰) 蝙蝠侠审讯小丑",
      referenceEn: "\"12 Angry Men\" (1957, Sidney Lumet) Locked Room / \"The Dark Knight\" (2008, Nolan) Batman Interrogates Joker"
    },
    {
      id: "arena",
      name: "竞技场/斗兽场",
      nameEn: "Arena / Colosseum",
      def: "一个环形观众席围合的中央圆形沙地。阳光从正上方照入，沙地上没有阴影可以躲藏。出口的铁门从外面控制。观众的欢呼和嘘声是第三种武器。",
      defEn: "A central circular sand pit enclosed by ring-shaped spectator tiers. Sunlight enters from directly above; no shadows to hide in on the sand. Exit gates controlled from outside. The crowd's cheers and boos are a third weapon.",
      core: "他站在沙地中央，四面都是观众。他不知道今天要面对的是狮子还是另一个和他一样害怕的人。但观众不在乎——他们只在乎血。",
      coreEn: "He stood at the center of the sand, audience on all sides. He didn't know if today he'd face a lion or another person as scared as him. But the audience didn't care — they only cared about blood.",
      reference: "《角斗士》(2000, 雷德利·斯科特) 罗马竞技场 / 《饥饿游戏》(2012, 加里·罗斯) 竞技场",
      referenceEn: "\"Gladiator\" (2000, Ridley Scott) Roman Colosseum / \"The Hunger Games\" (2012, Gary Ross) The Arena"
    },
    {
      id: "solitary_confinement",
      name: "禁闭室/独囚房",
      nameEn: "Solitary Confinement",
      def: "一个比普通牢房更小、完全剥夺人际接触和感官刺激的密封空间。没有声音、没有光线变化、没有其他人类。唯一的陪伴是你自己的呼吸声。",
      defEn: "A space smaller than a regular cell, completely depriving human contact and sensory stimulation. No sound, no light variation, no other humans. The only companion is the sound of your own breathing.",
      core: "第一天他数天花板的裂缝。第七天他开始和裂缝说话。第二十一天裂缝开始回话了。禁闭不是让你失去自由——是让你失去自己。",
      coreEn: "Day one he counted ceiling cracks. Day seven he started talking to them. Day twenty-one the cracks talked back. Solitary doesn't take your freedom — it takes yourself.",
      reference: "《老男孩》(2003, 朴赞郁) 十五年禁闭 / 《巴比龙》(2017, 迈克尔·诺尔) 独囚石窟",
      referenceEn: "\"Oldboy\" (2003, Park Chan-wook) Fifteen Years' Confinement / \"Papillon\" (2017, Michael Noer) Solitary Stone Cell"
    },
    {
      id: "pillory_stocks",
      name: "枷锁示众台",
      nameEn: "Pillory / Stocks",
      def: "一个将犯人的身体固定在公共空间中央、使其无法遮挡面部和身体的惩罚装置。所有路过的人都可以观看、嘲笑或投掷物品。受刑者无法还手也无法遮脸。",
      defEn: "A punishment device fixing the convict's body at the center of public space, unable to shield face or body. All passersby can watch, mock, or throw objects. The punished can neither fight back nor cover their face.",
      core: "他被锁在广场中央，脸上沾满了烂菜叶。最痛的不是菜叶——是他认出了投掷者里面有他昨天还叫'朋友'的人。",
      coreEn: "He was locked at the plaza's center, face covered in rotten leaves. The worst pain wasn't the leaves — it was recognizing among the throwers someone he'd called 'friend' yesterday.",
      reference: "《红字》(1995, 罗兰·约菲) 海斯特·白兰示众 / 《权力的游戏》(2011, 剧集) 瑟曦的赎罪之路",
      referenceEn: "\"The Scarlet Letter\" (1995, Roland Joffé) Hester Prynne's Pillory / \"Game of Thrones\" (2011, Series) Cersei's Walk of Shame"
    },
    {
      id: "torture_chamber",
      name: "刑讯室",
      nameEn: "Torture Chamber",
      def: "一个墙壁上挂满金属工具的地下密室。排水沟嵌在地面中央。灯光可以被调到刺眼或完全关闭。这个房间的建筑学只有一个目的：让人体无处可藏。",
      defEn: "An underground sealed room with metal implements on walls. A drain embedded in the center floor. Lights adjustable to blinding or total darkness. This room's architecture has one purpose: leaving the body nowhere to hide.",
      core: "他还没被碰到就已经开始说了——因为房间本身就是第一轮审讯。那些挂在墙上的工具不需要被使用，它们只需要被看见。",
      coreEn: "He started talking before he was touched — because the room itself was the first round of interrogation. The tools on the wall don't need to be used; they just need to be seen.",
      reference: "《1984》(1984, 迈克尔·雷德福) 101房间 / 《潘神的迷宫》(2006, 吉尔莫·德尔·托罗) 上尉的审讯地下室",
      referenceEn: "\"Nineteen Eighty-Four\" (1984, Radford) Room 101 / \"Pan's Labyrinth\" (2006, Del Toro) Captain's Interrogation Basement"
    },
    {
      id: "labor_camp",
      name: "劳改营/苦工场",
      nameEn: "Labor Camp",
      def: "大量人体被围栏圈定在一块露天区域内，从事重复性体力劳动。哨塔从四角俯瞰。出入口只有一个且有武装看守。身体在这里被降格为生产工具。",
      defEn: "Masses of bodies penned by fencing in an open area performing repetitive physical labor. Watchtowers overlook from four corners. Only one entrance/exit with armed guards. Bodies here are reduced to production tools.",
      core: "他搬了一整天的石头，从左边搬到右边。第二天命令是从右边搬回左边。第三天他明白了：石头不是重点，重点是让你知道你的时间一文不值。",
      coreEn: "He moved stones all day, left to right. Next day the order was right to left. Day three he understood: the stones aren't the point; the point is making you know your time is worthless.",
      reference: "《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 克拉科夫劳动营 / 《古拉格》(历史) 西伯利亚苦工营",
      referenceEn: "\"Schindler's List\" (1993, Spielberg) Kraków Labor Camp / \"Gulag\" (History) Siberian Labor Camps"
    },
    {
      id: "cage_kennel",
      name: "笼子/兽栏",
      nameEn: "Cage / Kennel",
      def: "一个用金属条或木栅构成的、允许外部目光自由穿透但阻止内部身体自由移动的容器。被关在里面的生物可以被所有人观看，但不能决定谁来看自己。",
      defEn: "A container of metal bars or wooden slats allowing outside gazes to freely penetrate but preventing the body inside from moving freely. The creature inside can be viewed by all but cannot decide who views them.",
      core: "他透过铁栅看着外面自由走动的人——他们也在看他，但眼神不一样。看笼子里的东西和看笼子外的东西，用的是两种完全不同的眼睛。",
      coreEn: "He watched freely walking people through the bars — they watched him too, but with different eyes. Watching things inside a cage and outside a cage uses two entirely different pairs of eyes.",
      reference: "《金刚》(2005, 彼得·杰克逊) 百老汇展览笼 / 《猩球崛起》(2011, 鲁伯特·瓦耶特) 灵长类庇护所铁笼",
      referenceEn: "\"King Kong\" (2005, Peter Jackson) Broadway Exhibition Cage / \"Rise of the Planet of the Apes\" (2011, Rupert Wyatt) Primate Shelter Cage"
    },
    {
      id: "gallows",
      name: "绞刑架/刑柱",
      nameEn: "Gallows / Stake",
      def: "一根或两根从地面垂直升起的柱体，顶端有横梁或绳圈。功能是将人体悬挂在其自身重力的方向上，使其被地球本身杀死。结构极其简单：一根绳子就够了。",
      defEn: "One or two vertical posts rising from the ground with a crossbeam or noose at top. Function: suspending the body in the direction of its own gravity, letting the Earth itself kill it. Structure extremely simple: one rope suffices.",
      core: "他们给他最后说一句话的机会。他张了张嘴，但什么都没说——因为他发现站在底下看他的那群人，没有一个在听。最后一句话的真实观众不是活人，是天花板。",
      coreEn: "They gave him one last chance to speak. He opened his mouth but said nothing — because he realized not one person standing below was listening. The real audience for last words isn't the living; it's the ceiling.",
      reference: "《西部往事》(1968, 塞尔吉奥·莱昂内) 开场绞刑 / 《加勒比海盗》(2003, 戈尔·维宾斯基) 港口绞刑架",
      referenceEn: "\"Once Upon a Time in the West\" (1968, Sergio Leone) Opening Hanging / \"Pirates\" (2003, Gore Verbinski) Port Gallows"
    },
    {
      id: "exile_ground",
      name: "流放地/放逐荒野",
      nameEn: "Exile Ground",
      def: "一片远离任何已知聚居地的空旷地带。没有屋顶、没有围墙、没有道路标识。惩罚不是关住你——是打开所有的门然后把你推出去：你自由了，而自由就是你的刑罚。",
      defEn: "An open expanse far from any known settlement. No roof, no walls, no road markers. The punishment isn't confining you — it's opening all doors and pushing you out: you're free, and freedom is your sentence.",
      core: "他被赶出城门的时候，门在他身后关上了。面前是无边无际的荒野——没有镣铐，没有狱卒，只有四面的地平线。他是世界上最自由的犯人，也是世界上最大的监狱里唯一的囚犯。",
      coreEn: "When he was driven out the gate, it closed behind him. Before him: boundless wilderness — no shackles, no guards, only horizon in every direction. He was the world's freest convict, and the sole prisoner in the world's largest prison.",
      reference: "《荒野猎人》(2015, 亚利桑德罗·冈萨雷斯) 格拉斯被遗弃 / 《疯狂的麦克斯4》(2015, 乔治·米勒) 废土放逐",
      referenceEn: "\"The Revenant\" (2015, Iñárritu) Glass Abandoned / \"Mad Max: Fury Road\" (2015, George Miller) Wasteland Exile"
    }
  ]
};
