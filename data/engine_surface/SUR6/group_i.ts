import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_I: LibraryCategoryDef = {
  id: "loc_industrial_labor",
  name: "09. 工业与劳动空间 (Industrial & Labor)",
  nameEn: "Industrial & Labor Spaces",
  desc: "承载生产、提炼、储存和废弃的功能性空间。人体在此处被缩小到机器比例尺的零头——巨大的齿轮、管道和烟囱提醒你：这个空间不是为你设计的。",
  items: [
    {
      id: "foundry_forge",
      name: "锻造炉/熔炉",
      nameEn: "Foundry / Forge",
      def: "一个以极高温度的明火为中心的开放或半封闭空间。金属在这里从固态变为液态。空气扭曲发抖。人体暴露在热辐射中时皮肤会变红。火星像暴雨一样飞溅。",
      defEn: "An open or semi-enclosed space centered on extremely high-temperature open flame. Metal transitions from solid to liquid here. Air distorts and trembles. Skin reddens under heat radiation. Sparks fly like rain.",
      core: "他把铁条伸进火里，火焰把他的影子拉成了三倍长。铁变软的那一刻，他用锤子把它砸成了想要的形状——他突然意识到，这也是世界对他做的事。",
      coreEn: "He thrust the iron bar into the fire, flames stretching his shadow threefold. The moment the iron softened, he hammered it into shape — suddenly realizing this was also what the world did to him.",
      reference: "《指环王》(2001, 彼得·杰克逊) 索伦的锻造 / 《幽灵公主》(1997, 宫崎骏) 达达拉城炼铁厂",
      referenceEn: "\"The Lord of the Rings\" (2001, Peter Jackson) Sauron's Forge / \"Princess Mononoke\" (1997, Miyazaki) Tatara Ironworks"
    },
    {
      id: "mine_shaft",
      name: "矿井/矿洞",
      nameEn: "Mine Shaft",
      def: "一条从地表向地球内部持续下降的人工通道。越往下空气越稀薄，温度越高，光线越少。头灯是唯一的光源。顶部岩层的重量压在每一寸头顶上方。",
      defEn: "An artificial passage descending continuously from the surface into the Earth's interior. Deeper means thinner air, higher temperature, less light. The headlamp is the only light source. The weight of overhead rock presses on every inch above.",
      core: "他在地下八百米的地方挖了十二个小时。抬头看见的不是天空，是五亿年前的石头。地球不关心他叫什么名字——地球只关心他能挖多快。",
      coreEn: "He dug for twelve hours 800 meters underground. Looking up, he saw not sky but 500-million-year-old rock. The Earth doesn't care about his name — it only cares how fast he can dig.",
      reference: "《血钻》(2006, 爱德华·兹威克) 塞拉利昂钻石矿 / 《日尔曼尼亚》(文学) 煤矿深井",
      referenceEn: "\"Blood Diamond\" (2006, Edward Zwick) Sierra Leone Diamond Mine / \"Germinal\" (Literature) Coal Mine Depths"
    },
    {
      id: "assembly_line",
      name: "流水线/装配线",
      nameEn: "Assembly Line",
      def: "一条以固定速度持续移动的传送带，人体被分配到传送带两侧的固定工位上。每个人只负责一个动作，重复到肌肉记忆取代意识。速度由你无法触及的开关控制。",
      defEn: "A conveyor belt moving at fixed speed continuously, with bodies assigned to fixed stations on either side. Each person performs one action, repeated until muscle memory replaces consciousness. Speed is controlled by a switch beyond your reach.",
      core: "他拧了八千颗螺丝。每一颗用时三秒。三秒乘以八千等于六个半小时——但他的脑子在第二百颗的时候就已经关机了。流水线不需要你的灵魂，只需要你的手指。",
      coreEn: "He tightened 8,000 screws. Three seconds each. Three times 8,000 equals six and a half hours — but his brain shut off at the 200th. The assembly line doesn't need your soul, only your fingers.",
      reference: "《摩登时代》(1936, 查理·卓别林) 工厂流水线 / 《美国工厂》(2019, 纪录片) 福耀玻璃厂",
      referenceEn: "\"Modern Times\" (1936, Charlie Chaplin) Factory Line / \"American Factory\" (2019, Documentary) Fuyao Glass"
    },
    {
      id: "warehouse",
      name: "仓库",
      nameEn: "Warehouse",
      def: "一个屋顶极高、地面极空的巨型矩形空间。货物被堆叠至远超人体高度。光从屋顶的缝隙或高窗射入形成光柱。声音在空旷中产生多重回声。存在的空洞感。",
      defEn: "A giant rectangular space with extremely high ceiling and empty floor. Goods stacked far beyond human height. Light enters through roof gaps forming light columns. Sound produces multiple echoes in the void. A hollow sense of existence.",
      core: "他推开仓库的门，灰尘在光柱里旋转。里面什么都有——除了人。仓库是物品的天堂和人类的沙漠：东西越多，人越孤独。",
      coreEn: "He pushed open the warehouse door, dust spinning in light columns. Everything inside — except people. A warehouse is paradise for objects and desert for humans: the more things, the lonelier you are.",
      reference: "《夺宝奇兵》(1981, 史蒂文·斯皮尔伯格) 政府仓库结尾 / 《低俗小说》(1994, 昆汀·塔伦蒂诺) 仓库对峙",
      referenceEn: "\"Raiders of the Lost Ark\" (1981, Spielberg) Government Warehouse Ending / \"Pulp Fiction\" (1994, Tarantino) Warehouse Standoff"
    },
    {
      id: "boiler_room",
      name: "锅炉房/机房",
      nameEn: "Boiler Room / Engine Room",
      def: "建筑物的心脏——一个充满管道、阀门、仪表盘和压力容器的封闭空间。机器的震动通过地板传到骨骼。泄压阀不定时发出尖锐嘶声。这里的温度永远比其他地方高十度。",
      defEn: "The building's heart — an enclosed space full of pipes, valves, gauges, and pressure vessels. Machine vibrations travel through the floor into bones. Pressure valves hiss sharply at random. Temperature is always ten degrees higher than elsewhere.",
      core: "他是唯一知道这栋楼如何运转的人——但他的办公室在地下室，没有窗户。大楼里两千个白领不知道他的名字，但没有他，两千人连暖气都没有。",
      coreEn: "He's the only person who knows how this building works — but his office is in the basement, windowless. Two thousand white-collar workers don't know his name, but without him, none of them have heating.",
      reference: "《泰坦尼克号》(1997, 詹姆斯·卡梅隆) 锅炉房工人 / 《闪灵》(1980, 斯坦利·库布里克) 重叠酒店锅炉房",
      referenceEn: "\"Titanic\" (1997, James Cameron) Boiler Room Workers / \"The Shining\" (1980, Kubrick) Overlook Boiler Room"
    },
    {
      id: "slaughterhouse",
      name: "屠宰场",
      nameEn: "Slaughterhouse",
      def: "一个将活的生物转化为可消费肉类的工业化流程空间。入口是活的，出口是死的。中间的地面有排水槽。空气中有铁锈和体温混合的腥甜味。效率是唯一的美德。",
      defEn: "An industrialized process space converting living creatures into consumable meat. Alive at the entrance, dead at the exit. Drainage channels in the floor between. Air carries a sweet-metallic scent of rust and body heat. Efficiency is the only virtue.",
      core: "他在第一天把胃里的东西全吐出来了。第二天只吐了一半。第三十天他可以一边切割一边吃三明治。习惯是比刀更锋利的工具。",
      coreEn: "Day one he vomited everything. Day two only half. Day thirty he could eat a sandwich while cutting. Habit is a sharper tool than the knife.",
      reference: "《血色将至》(2007, 保罗·托马斯·安德森) 油田屠宰式开采 / 《快餐国家》(2006, 理查德·林克莱特) 肉联厂",
      referenceEn: "\"There Will Be Blood\" (2007, PTA) Oil Field Slaughter-Style Extraction / \"Fast Food Nation\" (2006, Linklater) Meatpacking Plant"
    },
    {
      id: "dock_loading",
      name: "装卸码头/货运站",
      nameEn: "Loading Dock",
      def: "一个位于建筑物背面、面向货车或船舶的开放平台。货物在这里被机械或人力搬上搬下。这是所有消费品进入光鲜世界之前最后一个肮脏灰暗的空间。",
      defEn: "An open platform at a building's rear, facing trucks or ships. Goods are loaded and unloaded here by machine or human labor. The last dirty, dim space before consumer products enter the glamorous world.",
      core: "所有你在橱窗里看到的漂亮东西，都是从这个长满油渍的后门被扛进来的。装卸码头是消费主义的后台——你不该看到厨房里的蟑螂。",
      coreEn: "Everything beautiful in the shop window was carried through this grease-stained back door. The loading dock is consumerism's backstage — you're not supposed to see the cockroaches in the kitchen.",
      reference: "《码头风云》(1954, 伊利亚·卡赞) 纽约码头 / 《爱尔兰人》(2019, 马丁·斯科塞斯) 卡车装卸点",
      referenceEn: "\"On the Waterfront\" (1954, Elia Kazan) New York Docks / \"The Irishman\" (2019, Scorsese) Truck Loading Point"
    },
    {
      id: "scrapyard",
      name: "废品场/垃圾堆",
      nameEn: "Scrapyard / Junkyard",
      def: "大量被消费社会淘汰的物品堆叠成山丘状的露天空间。金属在阳光下反射出刺眼的光。乌鸦和拾荒者是这里唯一的常住居民。一切曾经被珍视的物品在此等价。",
      defEn: "An open space where masses of objects discarded by consumer society pile into hills. Metal reflects blinding light in sun. Crows and scavengers are the only permanent residents. All once-cherished objects are equal here.",
      core: "他在废品堆里找到了一把和他小时候一模一样的椅子。他坐上去的时候椅子塌了——不是因为椅子坏了，是因为他长大了。废品场是时间的垃圾桶。",
      coreEn: "He found a chair in the scrapyard identical to the one from his childhood. When he sat down it collapsed — not because the chair was broken, but because he'd grown up. The scrapyard is time's trash can.",
      reference: "《机器人总动员》(2008, 安德鲁·斯坦顿) 瓦力的垃圾地球 / 《贫民窟的百万富翁》(2008, 丹尼·博伊尔) 孟买垃圾山",
      referenceEn: "\"WALL·E\" (2008, Andrew Stanton) WALL·E's Garbage Earth / \"Slumdog Millionaire\" (2008, Danny Boyle) Mumbai Garbage Mountain"
    },
    {
      id: "construction_site",
      name: "工地/建筑现场",
      nameEn: "Construction Site",
      def: "一个正在从无变有的空间——钢筋裸露，混凝土未干，脚手架搭成临时的金属骨骼。一切都是半成品。安全帽是入场券。坠落是这里最常见的死法。",
      defEn: "A space in the process of becoming — rebar exposed, concrete uncured, scaffolding forming temporary metal skeletons. Everything is half-finished. Hard hats are admission tickets. Falling is the most common death here.",
      core: "他站在二十层楼的钢架上往下看——下面的人像蚂蚁。但蚂蚁不会从二十层楼掉下去。他系好安全绳的手比签合同的手更认真，因为合同骗不死人，重力可以。",
      coreEn: "He stood on the 20th-floor steel frame looking down — people below like ants. But ants don't fall from 20 floors. His hand fastening the safety rope was more serious than the one signing contracts, because contracts can't kill you; gravity can.",
      reference: "《摩天大楼》(建筑摄影) 纽约钢铁工人 / 《寄生虫》(2019, 奉俊昊) 朴社长豪宅的建造与阶级",
      referenceEn: "\"Lunch atop a Skyscraper\" (Photography) NYC Ironworkers / \"Parasite\" (2019, Bong Joon-ho) Park Mansion Construction & Class"
    },
    {
      id: "power_plant",
      name: "发电厂/能源核心",
      nameEn: "Power Plant / Energy Core",
      def: "一个将某种原始力量（水流、裂变、燃烧）转化为可传输能量的巨型封闭设施。机器的尺度远超人体。嗡嗡声低到你用身体听而不是用耳朵。这里的事故不是'坏了'，是'毁灭'。",
      defEn: "A massive enclosed facility converting primal forces (water, fission, combustion) into transmittable energy. Machine scale far exceeds human body. The hum is so low you hear it with your body, not ears. Accidents here aren't 'breakdowns' — they're 'annihilations.'",
      core: "他每天走过一排比他高三倍的涡轮机，机器震动让他的牙齿发痒。他是这座城市十万盏灯的幕后英雄——但他的名牌上写的不是名字，是工号。",
      coreEn: "He walked past turbines three times his height daily, vibrations making his teeth itch. He's the unseen hero behind 100,000 city lights — but his badge shows not a name, just a work number.",
      reference: "《切尔诺贝利》(2019, 剧集) 4号反应堆 / 《疯狂的麦克斯4》(2015, 乔治·米勒) 不死老乔的水力发电站",
      referenceEn: "\"Chernobyl\" (2019, Series) Reactor No. 4 / \"Mad Max: Fury Road\" (2015, George Miller) Immortan Joe's Hydroelectric Plant"
    }
  ]
};
