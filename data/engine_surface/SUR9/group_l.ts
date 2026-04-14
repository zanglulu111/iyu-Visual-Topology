import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_L: LibraryCategoryDef = {
  id: "orig_labor",
  name: "12. 劳工与底层 (Working Class & Poor)",
  nameEn: "Working Class & Poor",
  desc: "出卖体力、处于生存线边缘的劳动群体。粗砺的生命力，最低限度的尊严。",
  defEn: "Labor groups selling physical strength, teetering on the edge of survival. Raw vitality, minimal dignity.",
  items: [
    {
      id: "factory_hand",
      name: "蓝领工人",
      nameEn: "Blue Collar",
      def: "在工厂流水线上从事体力操作与装配的产业工人。",
      defEn: "Industrial worker performing manual operation and assembly on factory production lines.",
      core: "我的脊椎就是这台机器的传动轴，磨断了再换一根。流水线不分昼夜，人也不分。",
      coreEn: "My spine is the machine's drive shaft — grind it down and replace it. The assembly line doesn't distinguish day from night; neither does the person.",
      reference: "《摩登时代》(1936, 查理·卓别林) 流浪汉查理 / 《钢的琴》(2010, 张猛) 陈桂林",
      referenceEn: "\"Modern Times\" (1936, Charlie Chaplin) The Tramp / \"The Piano in a Factory\" (2010, Zhang Meng) Chen Guilin"
    },
    {
      id: "farmer_peasant",
      name: "农民",
      nameEn: "Peasant",
      def: "依附于土地从事农业生产的劳动者。以种植或畜牧为主要生计。",
      defEn: "Laborer tethered to the land for agricultural production. Subsisting primarily through cultivation or animal husbandry.",
      core: "这片地比我的命还重，但它只听老天的话。丰收与饥荒之间，只隔一场雨。",
      coreEn: "This land is heavier than my life, but it obeys only heaven. Between harvest and famine, there is only one rain.",
      reference: "《一九四二》(2012, 冯小刚) 饥荒灾民 / 《星际穿越》(2014, 克里斯托弗·诺兰) 库珀",
      referenceEn: "\"Back to 1942\" (2012, Feng Xiaogang) Famine Victims / \"Interstellar\" (2014, Christopher Nolan) Cooper"
    },
    {
      id: "miner_deep",
      name: "深井矿工",
      nameEn: "Miner",
      def: "在地下矿井中从事矿物开采的体力劳动者。在黑暗与高危环境中作业。",
      defEn: "Manual laborer mining minerals in underground shafts. Operating in dark, high-risk environments.",
      core: "我们下去的时候，谁也不确定还能不能上来。地面以下的世界不讲法律，只讲重力。",
      coreEn: "When we go down, nobody knows if we'll come back up. Below ground, the law doesn't apply — only gravity.",
      reference: "《盲井》(2003, 李杨) 井下矿工 / 《切尔诺贝利》(2019, 剧集) 图拉矿工",
      referenceEn: "\"Blind Shaft\" (2003, Li Yang) Underground Miners / \"Chernobyl\" (2019, Series) Tula Miners"
    },
    {
      id: "service_staff",
      name: "服务员",
      nameEn: "Service Staff",
      def: "在餐饮、酒店等服务行业中直接面向顾客提供服务的基层员工。",
      defEn: "Front-line employee directly serving customers in food service, hospitality, and similar service industries.",
      core: "我端着盘子走过他们身边，他们的目光穿过我，仿佛我是空气。微笑是工装的一部分。",
      coreEn: "I walk past them carrying plates; their eyes pass through me as if I were air. The smile is part of the uniform.",
      reference: "《寄生虫》(2019, 奉俊昊) 女佣菊光 / 《菜单》(2022, 马克·米罗) 餐厅服务生",
      referenceEn: "\"Parasite\" (2019, Bong Joon Ho) Moon-gwang / \"The Menu\" (2022, Mark Mylod) Restaurant Waiters"
    },
    {
      id: "driver",
      name: "司机/运输工",
      nameEn: "Driver",
      def: "驾驶卡车、出租车或其他载具从事运输服务的职业驾驶员。",
      defEn: "Professional driver operating trucks, taxis, or other vehicles for transport services.",
      core: "方向盘是我唯一的家，但它从不让我停下。公路没有尽头，油箱却有。",
      coreEn: "The steering wheel is my only home, but it never lets me stop. The highway has no end; the tank does.",
      reference: "《疯狂的麦克斯4》(2015, 乔治·米勒) 芙莉欧莎 / 《出租车司机》(1976, 马丁·斯科塞斯) 特拉维斯·比克尔",
      referenceEn: "\"Mad Max: Fury Road\" (2015, George Miller) Furiosa / \"Taxi Driver\" (1976, Martin Scorsese) Travis Bickle"
    },
    {
      id: "migrant_worker",
      name: "外来务工者",
      nameEn: "Migrant Worker",
      def: "离开家乡前往城市从事建筑、制造或服务业的流动劳动力。",
      defEn: "Mobile labor force leaving hometowns for cities to work in construction, manufacturing, or service industries.",
      core: "我用双手堆起了这些高楼，但没有一扇窗户属于我。城市是他建的，但城市不认识他。",
      coreEn: "I built these towers with my hands, but not a single window belongs to me. He built the city, but the city doesn't know him.",
      reference: "《天注定》(2013, 贾樟柯) 大海 / 《南方车站的聚会》(2019, 刁亦男) 周泽农",
      referenceEn: "\"A Touch of Sin\" (2013, Jia Zhangke) Dahai / \"The Wild Goose Lake\" (2019, Diao Yinan) Zhou Zenong"
    },
    {
      id: "street_vendor",
      name: "街头小贩",
      nameEn: "Street Vendor",
      def: "在街头摆摊售卖商品或食物的个体经营者。以流动摊位维持基本生计。",
      defEn: "Individual operator selling goods or food from street stalls. Sustaining basic livelihood via mobile stands.",
      core: "推车上的这锅汤，就是我全家今晚的命。城管来了就跑，城管走了再摆。",
      coreEn: "The soup on this cart is my whole family's lifeline tonight. When the inspectors come, run; when they leave, set up again.",
      reference: "《银翼杀手》(1982, 雷德利·斯科特) 大排档摊主 / 《无人区》(2013, 宁浩) 戈壁小贩",
      referenceEn: "\"Blade Runner\" (1982, Ridley Scott) Food Stall Owner / \"No Man's Land\" (2013, Ning Hao) Desert Vendor"
    },
    {
      id: "cleaner_janitor",
      name: "清洁工",
      nameEn: "Janitor",
      def: "负责建筑物、公共场所卫生清洁与维护的后勤服务人员。",
      defEn: "Logistics service worker responsible for sanitation and maintenance of buildings and public spaces.",
      core: "我每天触碰你们最不愿面对的东西，所以你们假装看不见我。干净是他的产品，隐形是他的代价。",
      coreEn: "I touch what you refuse to face every day, so you pretend I don't exist. Cleanliness is his product; invisibility his price.",
      reference: "《水形物语》(2017, 吉尔莫·德尔·托罗) 伊丽莎 / 《闪灵》(1980, 斯坦利·库布里克) 迪克·哈洛兰",
      referenceEn: "\"The Shape of Water\" (2017, Guillermo del Toro) Elisa Esposito / \"The Shining\" (1980, Stanley Kubrick) Dick Hallorann"
    },
    {
      id: "sex_worker_street",
      name: "街头性工作者",
      nameEn: "Streetwalker",
      def: "在街头以出卖身体为生的底层性服务从业者。",
      defEn: "Bottom-tier sex service worker surviving by selling the body on the streets.",
      core: "他们买的是我的肉，但偷走的是我的名字。暗巷是她的办公室，路灯是她的简历。",
      coreEn: "They buy my flesh but steal my name. The dark alley is her office, the streetlight her résumé.",
      reference: "《悲惨世界》(2012, 汤姆·霍珀) 芳汀 / 《罪恶之城》(2005, 罗伯特·罗德里格兹) 老城妓女",
      referenceEn: "\"Les Misérables\" (2012, Tom Hooper) Fantine / \"Sin City\" (2005, Robert Rodriguez) Old Town Prostitutes"
    },
    {
      id: "soldier_grunt",
      name: "大兵/炮灰",
      nameEn: "Grunt",
      def: "军队中执行一线作战任务的最低层级士兵。作为战争消耗品编入建制。",
      defEn: "Lowest-ranking soldier executing front-line combat missions in the military. Enrolled as war expendables.",
      core: "狗牌上刻的不是我的名字，是一个弹药消耗编号。子弹不认军衔，只认肉。",
      coreEn: "The dog tag doesn't bear my name — it's an ammo expenditure number. Bullets don't read rank; they read flesh.",
      reference: "《拯救大兵瑞恩》(1998, 史蒂文·斯皮尔伯格) 抢滩大兵 / 《全金属外壳》(1987, 斯坦利·库布里克) 傻瓜派尔",
      referenceEn: "\"Saving Private Ryan\" (1998, Steven Spielberg) Omaha Beach Grunts / \"Full Metal Jacket\" (1987, Stanley Kubrick) Private Pyle"
    },
    {
      id: "fisher_folk",
      name: "渔民",
      nameEn: "Fisher Folk",
      def: "以捕鱼为生的水上劳动者。依赖潮汐、风向与渔汛维持生计。",
      defEn: "Aquatic laborer subsisting on fishing. Depending on tides, winds, and fish runs for livelihood.",
      core: "大海给我鱼吃，也随时会把我吞掉，这就是我们的契约。网是他的手臂的延伸，风是他的老板。",
      coreEn: "The sea feeds me and can swallow me whole — that is our covenant. The net extends his arm; the wind is his boss.",
      reference: "《老人与海》(1958, 约翰·斯特奇斯) 圣地亚哥 / 《海王》(2018, 温子仁) 海沟族",
      referenceEn: "\"The Old Man and the Sea\" (1958, John Sturges) Santiago / \"Aquaman\" (2018, James Wan) The Trench"
    },
    {
      id: "lumberjack",
      name: "伐木工",
      nameEn: "Lumberjack",
      def: "在林区从事树木砍伐与木材初加工的林业体力劳动者。",
      defEn: "Forestry manual laborer felling trees and performing primary timber processing in forest areas.",
      core: "电锯的声音比人声更亲切，树倒下的时候比人说话更真实。森林是他的工厂，也是他的监狱。",
      coreEn: "The saw's sound is more intimate than voices; a falling tree speaks truer than people. The forest is his factory and his prison.",
      reference: "《荒野猎人》(2015, 亚利桑德罗·伊纳里图) 休·格拉斯 / 《双峰》(1990, 大卫·林奇) 伐木小镇",
      referenceEn: "\"The Revenant\" (2015, Alejandro G. Iñárritu) Hugh Glass / \"Twin Peaks\" (1990, David Lynch) Lumber Town"
    },
    {
      id: "docker",
      name: "码头工人",
      nameEn: "Docker",
      def: "在港口从事货物装卸与搬运的体力劳动者。",
      defEn: "Manual laborer loading, unloading, and hauling cargo at ports.",
      core: "我的脊背扛过了五大洲的货物，但我连一张出港的船票都买不起。码头是世界的门，他只是门槛。",
      coreEn: "My back has carried cargo from five continents, but I can't afford a departure ticket. The port is the world's door; he is just the threshold.",
      reference: "《码头风云》(1954, 伊利亚·卡赞) 特里·马洛伊 / 《海边的曼彻斯特》(2016, 肯尼斯·罗纳根) 李·钱德勒",
      referenceEn: "\"On the Waterfront\" (1954, Elia Kazan) Terry Malloy / \"Manchester by the Sea\" (2016, Kenneth Lonergan) Lee Chandler"
    },
    {
      id: "maid_servant",
      name: "家仆/佣人",
      nameEn: "Servant",
      def: "在雇主家庭中从事清洁、烹饪与日常家务的家政服务人员。",
      defEn: "Domestic service worker performing cleaning, cooking, and daily housework in the employer's household.",
      core: "我知道他们所有的秘密，但我连说'不'的权利都没有。钥匙开得了每扇门，唯独开不了自己的。",
      coreEn: "I know all their secrets, but I don't have the right to say 'no'. The key opens every door except her own.",
      reference: "《罗马》(2018, 阿方索·卡隆) 克莱奥 / 《唐顿庄园》(2010, 剧集) 庄园仆人",
      referenceEn: "\"Roma\" (2018, Alfonso Cuarón) Cleo / \"Downton Abbey\" (2010, Series) Estate Servants"
    },
    {
      id: "apprentice",
      name: "学徒",
      nameEn: "Apprentice",
      def: "跟随师傅学习手艺技能的初级从业者。在师徒体系中接受训练与考核。",
      defEn: "Junior practitioner learning craft skills under a master. Receiving training and evaluation within the master-apprentice system.",
      core: "师傅的巴掌比他的技术打得更狠，但我只能跪着接。出师的那一天，是他重生的日子。",
      coreEn: "Master's slaps strike harder than his technique, but I can only kneel and take it. The day of graduation is his day of rebirth.",
      reference: "《霸王别姬》(1993, 陈凯歌) 小豆子 / 《千与千寻》(2001, 宫崎骏) 千寻",
      referenceEn: "\"Farewell My Concubine\" (1993, Chen Kaige) Xiaodouzi / \"Spirited Away\" (2001, Hayao Miyazaki) Chihiro"
    }
  ]
};
