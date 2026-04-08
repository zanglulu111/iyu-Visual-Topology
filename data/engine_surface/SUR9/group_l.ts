import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_L: LibraryCategoryDef = {
  id: "orig_labor",
  name: "4. 劳工与底层 (Working Class & Poor)",
  nameEn: "Working Class & Poor",
  desc: "出卖体力，处于生存线边缘。粗砺的生命力。",
  descEn: "Selling physical labor, teetering on the edge of survival. Raw, coarse vitality.",
  items: [
    {
      id: "factory_hand",
      name: "蓝领工人", nameEn: "Blue Collar",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "流水线上的操作工，将肉体作为齿轮嵌入大他者的工业机器中日复一日地磨损。",
      defEn: "Assembly-line operators embedding their flesh as gears into the Other's industrial machine, grinding day after day.",
      core: "我的脊椎就是这台机器的传动轴，磨断了再换一根。 | 代偿 ($): 阶级兄弟的情义 (Brotherhood of Class)",
      coreEn: "My spine is the machine's drive shaft; grind it down and replace it. | Compensation ($): Brotherhood of Class",
      reference: "《摩登时代》(1936, 查理·卓别林) 查理；《现代启示录》(1979, 弗朗西斯·福特·科波拉) 兵工厂劳工",
      referenceEn: "\"Modern Times\" (1936, Charlie Chaplin) The Tramp; \"Apocalypse Now\" (1979, Francis Ford Coppola) Armory Laborers; \"Modern Times\" Charlie completely losing human rhythm under manic assembly-line acceleration, swallowed alive by huge snapping gears turning into a human wrench; \"Apocalypse Now\" armories where numb coal-black bodies swing heavy hammers, their lungs force-fed with toxic flying dust-parts."
    },
    {
      id: "farmer_peasant",
      name: "农民", nameEn: "Peasant",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "依附于土地的古老存在，肉身被绑定在季节的轮回与大他者天候的暴政之下。",
      defEn: "An ancient existence tethered to the soil, flesh bound to the cycle of seasons and the tyranny of the Other's climate.",
      core: "这片地比我的命还重，但它只听老天的话。 | 代偿 ($): 土地的深情 (Bond with the Land)",
      coreEn: "This land is heavier than my life, but it obeys only heaven. | Compensation ($): Bond with the Land",
      reference: "《一九四二》(2012, 冯小刚) 饥荒灾民；《星际穿越》(2014, 克里斯托弗·诺兰) 库珀",
      referenceEn: "\"Back to 1942\" (2012, Feng Xiaogang) Famine Victims; \"Interstellar\" (2014, Christopher Nolan) Cooper; \"Back to 1942\" millions swarming like starving locusts tearing off dead bark in the yellow dust, praying cracked earth yields one drop of blood-streaked mud-water; \"Interstellar\" desperate farmers choking on blood/dirt maskless in doomsday dust-storms just to save dead crops."
    },
    {
      id: "miner_deep",
      name: "深井矿工", nameEn: "Miner",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "在黑暗和危险中工作，用肉身在地壳的伤口里挖掘大他者的财富。",
      defEn: "Working in darkness and danger, excavating the Other's wealth with bare flesh inside the earth's wounds.",
      core: "我们下去的时候，谁也不确定还能不能上来。 | 缺失 ($): 阳光 (Sunlight)",
      coreEn: "When we go down, nobody knows if we'll come back up. | Lack ($): Sunlight",
      reference: "《盲井》(2003, 李杨) 井下矿工；《切尔诺贝利》(2019, 系列剧) 图拉矿工",
      referenceEn: "\"Blind Shaft\" (2003, Li Yang) Underground Miners; \"Chernobyl\" (2019, Series) Tula Miners; \"Blind Shaft\" dark laborers smashing coal hundreds of meters in absolute pitch-black, facing 10,000 tons of rock squashing them into bloody pulp at any second; \"Chernobyl\" naked Tula miners digging like desperate rats in 50-degree lethal-radiation mud directly under the burning core."
    },
    {
      id: "service_staff",
      name: "服务员", nameEn: "Service Staff",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "餐厅与酒店的底层服务人员，被训练成一具对客人隐形的微笑机器。",
      defEn: "Bottom-tier restaurant and hotel staff, trained into smiling machines invisible to guests.",
      core: "我端着盘子走过他们身边，他们的目光穿过我，仿佛我是空气。 | 缺失 ($): 被看见 (Being Seen)",
      coreEn: "I walk past them carrying plates; their eyes pass through me as if I were air. | Lack ($): Being Seen",
      reference: "《寄生虫》(2019, 奉俊昊) 菊光/女佣；《菜单》(2022, 马克·米罗) 餐厅服务生",
      referenceEn: "\"Parasite\" (2019, Bong Joon Ho) Gook-moon / Maid; \"The Menu\" (2022, Mark Mylod) Restaurant Waiters; \"Parasite\" maids dropping violently to their knees on icy hardwood floors apologizing like beaten dogs the second rich owners frown in the hyper-luxe villa; \"The Menu\" waiters intentionally tripped while carrying boiling-hot soup, forced to scream 'Sorry!' in agonizing pools of their own blood/burns."
    },
    {
      id: "driver",
      name: "司机/运输工", nameEn: "Driver",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "卡车或出租车司机，永远在路上，将生命消耗在漫无尽头的公路与夜色中。",
      defEn: "Truck or taxi drivers, perpetually on the road, consuming life on endless highways and nights.",
      core: "方向盘是我唯一的家，但它从不让我停下。 | 代偿 ($): 流动的孤独 (Solitude in Motion)",
      coreEn: "The steering wheel is my only home, but it never lets me stop. | Compensation ($): Solitude in Motion",
      reference: "《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 芙莉欧莎；《出租车司机》(1976, 马丁·斯科塞斯) 特拉维斯·比克尔",
      referenceEn: "\"Mad Max: Fury Road\" (2015, George Miller) Furiosa; \"Taxi Driver\" (1976, Martin Scorsese) Travis Bickle; \"Mad Max: Fury Road\" Furiosa one-arming a colossal heavy War Rig, maniacally stomping the gas amidst blood-red sandstorms and hails of exploding spears; \"Taxi Driver\" lonely Travis gliding his yellow cab through NY's filthy neon-slicked rain, hallucinating madly at the rotting sewer-world in his rearview."
    },
    {
      id: "migrant_worker",
      name: "外来务工/民工", nameEn: "Migrant Worker",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "离开家乡进城打工，没有户口，作为城市的建设者却不属于城市的幽灵劳动力。",
      defEn: "Leaving hometowns for city work without residency papers, ghost laborers who build the city but never belong to it.",
      core: "我用双手堆起了这些高楼，但没有一扇窗户属于我。 | 缺失 ($): 归属 (Belonging)",
      coreEn: "I built these towers with my hands, but not a single window belongs to me. | Lack ($): Belonging",
      reference: "《天注定》(2013, 贾樟柯) 大海/民工；《南方车站的聚会》(2019, 刁亦男) 周泽农",
      referenceEn: "\"A Touch of Sin\" (2013, Jia Zhangke) Dahai / Migrant Workers; \"The Wild Goose Lake\" (2019, Diao Yinan) Zhou Zenong; \"A Touch of Sin\" a migrant worker denied severed-finger compensation and brutally beaten, whipping out a shotgun to blow the boss's skull off in front of everyone; \"The Wild Goose Lake\" doomed laborers hunted like feral dogs by cops and gangs through hyper-muddy neon slums, unable to find even a dry straw-pile."
    },
    {
      id: "street_vendor",
      name: "街头小贩", nameEn: "Street Vendor",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "摆摊维持生计、与城管玩猫鼠游戏的底层烟火气承载者。",
      defEn: "Sustaining livelihood through street stalls, playing cat-and-mouse with enforcers; carriers of ground-level earthly vitality.",
      core: "推车上的这锅汤，就是我全家今晚的命。 | 代偿 ($): 市井生存智慧 (Street Survival Wisdom)",
      coreEn: "The soup on this cart is my whole family's lifeline tonight. | Compensation ($): Street Survival Wisdom",
      reference: "《银翼杀手》(1982, 雷德利·斯科特) 大排档摊主；《无人区》(2013, 宁浩) 戈壁小贩",
      referenceEn: "\"Blade Runner\" (1982, Ridley Scott) Food Stall Owner; \"No Man's Land\" (2013, Ning Hao) Desert Vendor; \"Blade Runner\" white-haired stall-owners numbly chopping weird noodles in oppressive acid-rain cyberpunk alleys, coldly watching cops blow the hero's head off splattering blood into the broth; \"No Man's Land\" desolate highway fly-vendors extorting water, instantly getting their skulls smashed by passing despardos with wrenches."
    },
    {
      id: "cleaner_janitor",
      name: "清洁工", nameEn: "Janitor",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "清理城市的排泄物与垃圾，是文明社会最不愿承认却不可或缺的隐形地基。",
      defEn: "Cleaning the city's excrement and waste; the invisible foundation civilization refuses to acknowledge yet cannot live without.",
      core: "我每天触碰你们最不愿面对的东西，所以你们假装看不见我。 | 缺失 ($): 尊严 (Dignity)",
      coreEn: "I touch what you refuse to face every day, so you pretend I don't exist. | Lack ($): Dignity",
      reference: "《水形物语》(2017, 吉尔莫·德尔·托罗) 伊丽莎；《闪灵》(1980, 斯坦利·库布里克) 迪克·哈洛兰",
      referenceEn: "\"The Shape of Water\" (2017, Guillermo del Toro) Elisa Esposito; \"The Shining\" (1980, Stanley Kubrick) Dick Hallorann; \"The Shape of Water\" mute cleaners with ragged mops in freezing totalitarian mold-pipe labs, silently wiping away horrific electric-torture blood pools; \"The Shining\" the elderly black chef/cleaner risking his life warning of madness in gargantuan spooky hotel halls, only to be brutally axed to a bloody death."
    },
    {
      id: "sex_worker_street",
      name: "街头性工作者", nameEn: "Streetwalker",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "出卖身体换取生存，在尊严被剥离的暗巷中与危险和死亡为邻。",
      defEn: "Selling the body for survival, neighboring danger and death in alleys where dignity has been stripped away.",
      core: "他们买的是我的肉，但偷走的是我的名字。 | 缺失 ($): 主体的完整性 (Integrity of Self)",
      coreEn: "They buy my flesh, but steal my name. | Lack ($): Integrity of Self",
      reference: "《悲惨世界》(2012, 汤姆·霍珀) 芳汀；《罪恶之城》(2005, 罗伯特·罗德里格兹等) 老城妓女",
      referenceEn: "\"Les Misérables\" (2012, Tom Hooper) Fantine; \"Sin City\" (2005, Robert Rodriguez & Frank Miller) Old Town Prostitutes; \"Les Misérables\" Fantine squeezed to desperation, having her teeth pulled and hair ripped in freezing mud-alleys, selling her flesh to be violently ravaged by drunks; \"Sin City\" the Old Town hooker-militia in stark hyper-cold black/white red-light districts, holding Uzis in dominatrix-straps physically headshot-counterattacking corrupt system-cops."
    },
    {
      id: "soldier_grunt",
      name: "大兵/炮灰", nameEn: "Grunt",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "军队的最底层，作为消耗品被填入战争绞肉机的编号化肉体。",
      defEn: "The lowest rank of the military, numbered flesh fed into the war meat grinder as consumables.",
      core: "狗牌上刻的不是我的名字，是一个弹药消耗统计编号。 | 缺失 ($): 个人意义 (Personal Meaning)",
      coreEn: "The dog tag doesn't bear my name; it's an ammo expenditure serial number. | Lack ($): Personal Meaning",
      reference: "《拯救大兵瑞恩》(1998, 史蒂文·斯皮尔伯格) 抢滩登陆大兵；《全金属外壳》(1987, 斯坦利·库布里克) 傻瓜派",
      referenceEn: "\"Saving Private Ryan\" (1998, Steven Spielberg) Omaha Beach Grunts; \"Full Metal Jacket\" (1987, Stanley Kubrick) Private Pyle; \"Saving Private Ryan\" Omaha beach doors dropping, countless soldiers instantly shredded by horrific MG-fire into flying bloody red meat-chunks and pulverized organs; \"Full Metal Jacket\" the fat grunt driven past extreme insane limits by sick brutal drill-instructors, finally deep-throating a rifle loaded with full-metal-jacket rounds in a pitch-black latrine."
    },
    {
      id: "fisher_folk",
      name: "渔民", nameEn: "Fisher Folk",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "靠海吃海，将生命悬挂在风浪与潮汐的喜怒无常之上的水上游牧民。",
      defEn: "Living off the sea, suspending life upon the capricious moods of winds, waves, and tides; aquatic nomads.",
      core: "大海给我鱼吃，也随时会把我吞掉，这就是我们的契约。 | 代偿 ($): 与自然的原始契约 (Primal Covenant with Nature)",
      coreEn: "The sea feeds me fish and can swallow me whole at any moment; that is our covenant. | Compensation ($): Primal Covenant with Nature",
      reference: "《老人与海》(1958, 约翰·斯特奇斯) 圣地亚哥(老人)；《海王》(2018, 温子仁) 海沟族渔民",
      referenceEn: "\"The Old Man and the Sea\" (1958, John Sturges) Santiago; \"Aquaman\" (2018, James Wan) The Trench Fishers; \"The Old Man and the Sea\" the tough old man under a horrific vast deep-sea sun, his hands shredded to the bone by fishing lines, relentlessly plunging the harpoon into the giant fish's heart; \"Aquaman\" the absolute bottom-trench fishers in violent dark tsunami-vortexes, hugging silver-filled baskets tight plunging into the abyss even while monsters bite off half their bodies."
    },
    {
      id: "lumberjack",
      name: "伐木工", nameEn: "Lumberjack",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "在深山老林工作，与世隔绝，将原始的力量消耗在巨木与孤独之间。",
      defEn: "Working in deep forests, cut off from the world, expending primal strength between giant trees and solitude.",
      core: "电锯的声音比人声更亲切，树倒下的时候比人说话更真实。 | 代偿 ($): 原始的沉默力量 (Primal Silent Strength)",
      coreEn: "The chainsaw's sound is more intimate than human voices; a falling tree speaks truer than people. | Compensation ($): Primal Silent Strength",
      reference: "《血钻》(2006, 爱德华·兹维克) 钻石矿工/苦工；《荒野猎人》(2015, 亚利桑德罗·冈萨雷斯·伊纳里图) 休·格拉斯",
      referenceEn: "\"Blood Diamond\" (2006, Edward Zwick) Diamond Miners; \"The Revenant\" (2015, Alejandro G. Iñárritu) Hugh Glass; \"Blood Diamond\" laborers in boiling parasite-infested African jungles brutally forced by mercs' gun-barrels to manic-swing machetes at giant trees in mud, shot point-blank if they stop; \"The Revenant\" Leo in absolute-zero deep forests violently ripped open by a terrifying grizzly, dragging his spilling intestines through icy mud-pits to barely survive."
    },
    {
      id: "docker",
      name: "码头工人", nameEn: "Docker",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "在港口搬运货物、连接世界却被遗忘在铁锈与海风中的力量型底层。",
      defEn: "Hauling cargo at ports, connecting the world yet forgotten amid rust and sea winds; power-type proletarians.",
      core: "我的脊背扛过了五大洲的货物，但我连一张出港的船票都买不起。 | 缺失 ($): 远方 (The Horizon)",
      coreEn: "My back has carried cargo from five continents, but I can't afford a single departure ticket. | Lack ($): The Horizon",
      reference: "《码头风云》(1954, 伊利亚·卡赞) 特里·马洛伊；《海边的曼彻斯特》(2016, 肯尼斯·罗纳根) 李·钱德勒",
      referenceEn: "\"On the Waterfront\" (1954, Elia Kazan) Terry Malloy; \"Manchester by the Sea\" (2016, Kenneth Lonergan) Lee Chandler; \"On the Waterfront\" Marlon Brando facing brutal mob-union bullying in freezing bleak sea-winds, smashed by dozens of iron pipes yet standing rigidly with a fractured skull and face dripping blood; \"Manchester by the Sea\" the deeply dead-inside protagonist mindlessly tossing rock-hard freezing dead fish into plastic bins on hyper-frozen loading docks like a numb zombie."
    },
    {
      id: "maid_servant",
      name: "家仆/佣人", nameEn: "Servant",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "依附于主人家中，没有私人空间，以近距离窥视权贵秘密为代价出卖尊严的附庸存在。",
      defEn: "Attached to the master's household with no private space, an appendage existence selling dignity for the price of glimpsing the elite's secrets up close.",
      core: "我知道他们所有的秘密，但我连说'不'的权利都没有。 | 代偿 ($): 窥探的隐性权力 (Covert Power of Voyeurism)",
      coreEn: "I know all their secrets, but I don't even have the right to say 'no'. | Compensation ($): Covert Power of Voyeurism",
      reference: "《罗马》(2018, 阿方索·卡隆) 克莱奥；《唐顿庄园》(2010, 系列剧) 庄园仆人",
      referenceEn: "\"Roma\" (2018, Alfonso Cuarón) Cleo; \"Downton Abbey\" (2010, Series) Estate Servants; \"Roma\" the humble nanny sweeping dog-shit in a giant bright elite courtyard while the employers hysterically break down, her water breaking during insanely dangerous street-riots; \"Downton Abbey\" downstairs in dark servant-quarters, coughing up lung-blood but forcing himself to polish to lord's silver platters to hyper-reflection before daring to die."
    },
    {
      id: "apprentice",
      name: "学徒", nameEn: "Apprentice",
      group: "D. 劳工与底层", groupEn: "Working Class & Poor",
      def: "跟着师傅学手艺，地位低下，在传承的渴望与压制的暴力之间被碾磨的前主体。",
      defEn: "Learning a trade under a master, low in status, a pre-subject ground between the longing for inheritance and the violence of suppression.",
      core: "师傅的巴掌比他的技术打得更狠，但我只能跪着接。 | 缺失 ($): 被认可的出师 (Acknowledged Mastery)",
      coreEn: "Master's slaps strike harder than his technique, but I can only kneel and take it. | Lack ($): Acknowledged Mastery",
      reference: "《霸王别姬》(1993, 陈凯歌) 小豆子/程蝶衣；《千与千寻》(2001, 宫崎骏) 千寻",
      referenceEn: "\"Farewell My Concubine\" (1993, Chen Kaige) Xiaodouzi / Cheng Dieyi; \"Spirited Away\" (2001, Hayao Miyazaki) Chihiro; \"Farewell My Concubine\" Xiaodouzi getting his lips utterly burned by the cruel master's pipe and a supernumerary finger brutally chopped off in agonizing screams, warped into a perfect opera Diva; \"Spirited Away\" Chihiro at the very horrific bottom of a monster-infested bathhouse, viciously cursed by the evil boss for being slow and nearly drowned alive by the colossal stench-mud spirit."
    }
  ]
};
