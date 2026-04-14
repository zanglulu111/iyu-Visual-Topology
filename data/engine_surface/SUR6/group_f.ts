import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_F: LibraryCategoryDef = {
  id: "loc_transit_passage",
  name: "06. 交通与过渡空间 (Transit & Passage)",
  nameEn: "Transit & Passage Spaces",
  desc: "承载移动、等待、过境和位移的功能性空间。人在此处永远处于'之间'状态——既不在起点也不在终点。身份在运动中悬浮。",
  items: [
    {
      id: "corridor",
      name: "走廊/长廊",
      nameEn: "Corridor",
      def: "一条两侧是墙壁、宽度仅容两人并行的线性通道。尽头通常有一扇门或一个转角。两侧的门全部关闭时，走廊就变成了一条没有出口的管道。",
      defEn: "A linear passage with walls on both sides, wide enough for two people abreast. Usually a door or corner at the end. When all side doors are closed, the corridor becomes a pipe with no exit.",
      core: "他走了整整一分钟还没走到尽头——走廊的灯泡每隔五米一盏，明暗交替像心电图。他开始怀疑不是他在走，是走廊在变长。",
      coreEn: "He walked for a full minute without reaching the end — bulbs every five meters, alternating light and dark like an ECG. He began suspecting it wasn't him walking, but the corridor growing longer.",
      reference: "《闪灵》(1980, 斯坦利·库布里克) 重叠酒店走廊 / 《老男孩》(2003, 朴赞郁) 走廊锤斗长镜头",
      referenceEn: "\"The Shining\" (1980, Kubrick) Overlook Hotel Corridor / \"Oldboy\" (2003, Park Chan-wook) Corridor Hammer Long Take"
    },
    {
      id: "elevator",
      name: "电梯",
      nameEn: "Elevator",
      def: "一个垂直移动的极小密封金属箱。容积固定、不可扩展。所有乘客面朝同一方向。数字在头顶跳动。按钮是唯一的控制权——但别人也可以按。",
      defEn: "A vertically moving, extremely small sealed metal box. Fixed, non-expandable volume. All passengers face the same direction. Numbers jump overhead. Buttons are the only control — but others can press them too.",
      core: "他和仇人站在同一部电梯里。三十二层，七十秒。两个人的目光死死盯着头顶的数字——谁先看对方谁就输了。电梯是世界上最短的冷战。",
      coreEn: "He and his enemy stood in the same elevator. Thirty-two floors, seventy seconds. Both stared at the numbers above — whoever looks first loses. The elevator is the world's shortest Cold War.",
      reference: "《亡命驾驶》(2011, 尼古拉斯·温丁·雷弗恩) 电梯之吻 / 《闪灵》(1980, 斯坦利·库布里克) 血浪电梯",
      referenceEn: "\"Drive\" (2011, Nicolas Winding Refn) Elevator Kiss / \"The Shining\" (1980, Kubrick) Blood Elevator"
    },
    {
      id: "bridge",
      name: "桥梁",
      nameEn: "Bridge",
      def: "一条悬空架设在两块被分隔的陆地之间的狭窄通道。脚下没有实地。从桥上只能前进或后退，不能左转或右转。风在桥面上比任何地方都更大。",
      defEn: "A narrow passage suspended between two separated landmasses. No solid ground underfoot. On a bridge you can only go forward or back, never left or right. Wind on the bridge surface is stronger than anywhere.",
      core: "他走到桥的正中间停下来——前面是他不确定的未来，后面是他确定的失败。桥栏杆的高度设计得刚刚好：高到不容易翻过去，低到你会想试试。",
      coreEn: "He stopped at the exact middle of the bridge — ahead, his uncertain future; behind, his certain failure. The railing height was designed just right: too high to easily climb, low enough to make you want to try.",
      reference: "《间谍之桥》(2015, 史蒂文·斯皮尔伯格) 格利尼克桥 / 《指环王1》(2001, 彼得·杰克逊) 矿坑桥之战",
      referenceEn: "\"Bridge of Spies\" (2015, Spielberg) Glienicke Bridge / \"Fellowship of the Ring\" (2001, Peter Jackson) Bridge of Khazad-dûm"
    },
    {
      id: "station_platform",
      name: "车站站台",
      nameEn: "Station Platform",
      def: "一个被铁轨隔断的狭长平台。人群在此聚集和离散。列车到来前是等待，到来时是选择（上还是不上），离开后是空旷。铁轨是不允许跨越的禁区。",
      defEn: "A narrow platform bisected by tracks. Crowds gather and disperse here. Before the train: waiting. During: choice (board or not). After: emptiness. Tracks are a forbidden zone that must not be crossed.",
      core: "列车驶来的时候她向前迈了半步——只有半步。然后她退回来了。站台是世界上离死亡最近的公共场所：你只需要再迈半步。",
      coreEn: "When the train approached she stepped forward half a step — just half. Then she stepped back. The platform is the world's public space closest to death: you only need half a step more.",
      reference: "《安娜·卡列尼娜》(2012, 乔·赖特) 火车站台 / 《哈利·波特》(2001, 克里斯·哥伦布) 九又四分之三站台",
      referenceEn: "\"Anna Karenina\" (2012, Joe Wright) Train Platform / \"Harry Potter\" (2001, Chris Columbus) Platform 9¾"
    },
    {
      id: "harbor_dock",
      name: "港口/码头",
      nameEn: "Harbor / Dock",
      def: "陆地与水的交界线。船在此处靠岸或离岸。绳索是被拴在最后一根系柱上的。解开绳索的那一秒，陆地上的一切就和你无关了。",
      defEn: "The boundary line between land and water. Ships dock or depart here. Ropes are tied to the last bollard. The second the rope is untied, everything on land becomes irrelevant to you.",
      core: "他站在码头上看着船越来越小——他知道船上有他这辈子最爱的人。但他解开绳索的那只手，一次都没有犹豫过。因为犹豫的话，他就上船了。",
      coreEn: "He stood on the dock watching the ship shrink — he knew the person he loved most was aboard. But the hand that untied the rope never hesitated once. Because if it had, he'd have boarded.",
      reference: "《泰坦尼克号》(1997, 詹姆斯·卡梅隆) 南安普顿港出发 / 《卡萨布兰卡》(1942, 迈克尔·柯蒂兹) 机场/码头告别",
      referenceEn: "\"Titanic\" (1997, James Cameron) Southampton Departure / \"Caserta\" (1942, Michael Curtiz) Airport Farewell"
    },
    {
      id: "staircase",
      name: "楼梯/阶梯",
      nameEn: "Staircase",
      def: "一组以固定间距垂直排列的水平踏面。向上需要体力，向下需要勇气。楼梯的宽度决定了两个人能否并行——大多数楼梯只够一个人走。",
      defEn: "A series of horizontal treads arranged vertically at fixed intervals. Going up requires strength; going down requires courage. Staircase width determines if two people can walk abreast — most allow only one.",
      core: "他在楼梯的转角和她擦肩而过——她在上楼，他在下楼。他们的世界线在这里交叉了整整一秒，然后永远分开。楼梯是最残忍的逻辑：你们必须朝相反方向移动。",
      coreEn: "He brushed past her at the staircase turn — she going up, he going down. Their world lines crossed for exactly one second, then separated forever. Stairs are the cruelest logic: you must move in opposite directions.",
      reference: "《敖德萨台阶》(1925, 谢尔盖·爱森斯坦) 婴儿车 / 《小丑》(2019, 托德·菲利普斯) 布朗克斯台阶之舞",
      referenceEn: "\"Battleship Potemkin\" (1925, Eisenstein) Odessa Steps / \"Joker\" (2019, Todd Phillips) Bronx Staircase Dance"
    },
    {
      id: "tunnel",
      name: "隧道/地下通道",
      nameEn: "Tunnel",
      def: "一条贯穿实体障碍物（山、地面、水底）的人工管道。入口处的光在中段完全消失。你不知道自己走了多远，也不知道还剩多远。唯一的参照物是你自己的脚步声。",
      defEn: "An artificial tube penetrating solid obstacles (mountain, ground, underwater). Light from the entrance completely vanishes midway. You don't know how far you've gone, nor how far remains. The only reference is your own footsteps.",
      core: "他在隧道正中间停下来——两端的光都变成了同样大小的圆点。他已经分不清哪边是入口哪边是出口了。隧道教会你一件事：世界上没有回头路，只有看起来像回头路的另一条前进路。",
      coreEn: "He stopped in the middle of the tunnel — light at both ends shrank to equal dots. He couldn't tell which was the entrance and which the exit. Tunnels teach one thing: there is no turning back, only another forward path that looks like one.",
      reference: "《肖申克的救赎》(1994, 弗兰克·德拉邦特) 下水道隧道 / 《潘神的迷宫》(2006, 吉尔莫·德尔·托罗) 地底通道",
      referenceEn: "\"The Shawshank Redemption\" (1994, Frank Darabont) Sewer Tunnel / \"Pan's Labyrinth\" (2006, Guillermo del Toro) Underground Passage"
    },
    {
      id: "crossroad",
      name: "十字路口",
      nameEn: "Crossroad",
      def: "两条或多条路径在同一平面上交汇的开放节点。在这里你必须选择方向。红灯亮起时所有人停下来，绿灯亮时所有人同时出发——但方向各不相同。",
      defEn: "An open node where two or more paths intersect on the same plane. You must choose a direction here. Red light: everyone stops. Green light: everyone moves simultaneously — but in different directions.",
      core: "四条路同时向他敞开。他站在正中间，被四面的车流围成了一座孤岛。选择恐惧症不是怕选错——是怕选了之后，才发现另外三条路都更好。",
      coreEn: "Four roads opened to him simultaneously. Standing dead center, traffic from four directions made him an island. Fear of choosing isn't fearing the wrong choice — it's fearing that after choosing, all three other roads were better.",
      reference: "《低俗小说》(1994, 昆汀·塔伦蒂诺) 命运交叉的十字路口 / 《罗拉快跑》(1998, 汤姆·提克威尔) 柏林街头岔路",
      referenceEn: "\"Pulp Fiction\" (1994, Tarantino) Fate's Crossroads / \"Run Lola Run\" (1998, Tom Tykwer) Berlin Street Fork"
    },
    {
      id: "border_checkpoint",
      name: "关卡/边境哨所",
      nameEn: "Border Checkpoint",
      def: "一个被栏杆、铁丝网或守卫分割成'此岸'与'彼岸'的狭窄空间。通过需要出示证件。你的身份在这里被降格为一张纸上的几行字。栏杆抬起和降下之间是整个世界的距离。",
      defEn: "A narrow space divided into 'this side' and 'that side' by barriers, wire, or guards. Passage requires showing papers. Your identity is reduced to a few lines on paper. Between the barrier rising and falling lies the distance of the entire world.",
      core: "他把护照递给窗口后面的人。那个人翻了三遍，然后抬起头用一种看寄生虫的眼神打量他。五秒钟的沉默决定了他是人还是非法入侵者。",
      coreEn: "He handed his passport to the person behind the window. That person flipped through it three times, then looked up with eyes that study parasites. Five seconds of silence determined whether he was a person or an illegal invader.",
      reference: "《间谍之桥》(2015, 史蒂文·斯皮尔伯格) 格利尼克桥 / 《卡萨布兰卡》(1942, 迈克尔·柯蒂兹) 签证办公室",
      referenceEn: "\"Bridge of Spies\" (2015, Spielberg) Glienicke Bridge / \"Casablanca\" (1942, Michael Curtiz) Visa Office"
    },
    {
      id: "vehicle_interior",
      name: "车厢内部",
      nameEn: "Vehicle Interior",
      def: "一个以特定速度移动的密封壳体。窗外的风景不断变化但无法触及。车内的人被座位绑定在固定位置。发动机的震动通过座椅传递到每个人的脊柱。停车前你不能离开。",
      defEn: "A sealed shell moving at a specific speed. Scenery outside changes constantly but is untouchable. Passengers are bound to fixed positions by seats. Engine vibration transmits through seats to every spine. You cannot leave before it stops.",
      core: "他坐在后座，司机不说话。车窗外的世界越来越陌生。他发现：在一辆行驶中的车里，你既不在出发地，也不在目的地——你在哪儿都不在。",
      coreEn: "He sat in the back seat; the driver said nothing. The world outside the window grew stranger. He realized: in a moving vehicle, you're neither at the origin nor the destination — you're nowhere.",
      reference: "《出租车司机》(1976, 马丁·斯科塞斯) 特拉维斯的出租车 / 《末路狂花》(1991, 雷德利·斯科特) 公路逃亡",
      referenceEn: "\"Taxi Driver\" (1976, Martin Scorsese) Travis's Cab / \"Thelma & Louise\" (1991, Ridley Scott) Road Escape"
    }
  ]
};
