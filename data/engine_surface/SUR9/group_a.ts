import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_A: LibraryCategoryDef = {
  id: "prof_violence",
  name: "01. 暴力与执法 (Violence & Enforcer)",
  nameEn: "Violence & Enforcer",
  desc: "以暴力为合法职业工具的身份群落。执法、战斗、处决——国家或雇主授权下的武力执行者。",
  defEn: "Professions wielding violence as a sanctioned tool. Enforcers, combatants, executors — authorized force under state or employer mandate.",
  items: [
    {
      id: "detective_noir",
      name: "私家侦探",
      nameEn: "Private Eye (Noir)",
      def: "无官方授权的独立调查者。受雇于私人委托，在执法体系之外运作。",
      defEn: "Unlicensed independent investigator. Hired by private clients, operating outside the official law enforcement system.",
      core: "真相的执念 vs 泥沼的吞噬。每揭开一层谎言，自己就多沉一寸。",
      coreEn: "Obsession with truth vs. the swamp's pull. Each lie peeled back drags you deeper.",
      reference: "《唐人街》(1974, 罗曼·波兰斯基) 杰克·吉蒂斯 / 《马耳他之鹰》(1941, 约翰·休斯顿) 萨姆·斯佩德",
      referenceEn: "\"Chinatown\" (1974, Roman Polanski) Jake Gittes / \"The Maltese Falcon\" (1941, John Huston) Sam Spade"
    },
    {
      id: "homicide_cop",
      name: "重案刑警",
      nameEn: "Homicide Detective",
      def: "隶属执法系统的凶案调查员。直面死亡现场与犯罪证据，在程序框架内追凶。",
      defEn: "Homicide investigator within the law enforcement system. Confronting crime scenes and evidence, pursuing killers within procedural frameworks.",
      core: "制度的齿轮 vs 现场的血腥。每一具尸体都是系统的账目，结案率是唯一的绩效。",
      coreEn: "Cog of the system vs. the gore at the scene. Every corpse is a ledger entry; clearance rate is the only metric.",
      reference: "《七宗罪》(1995, 大卫·芬奇) 威廉·沙摩塞 / 《真探》(2014, 剧集) 拉斯廷·科尔",
      referenceEn: "\"Se7en\" (1995, David Fincher) William Somerset / \"True Detective\" (2014, Series) Rust Cohle"
    },
    {
      id: "sniper",
      name: "狙击手",
      nameEn: "Sniper",
      def: "远距离精确射手。独立部署，在目标不知情的前提下执行消灭。",
      defEn: "Long-range precision shooter. Deployed independently, eliminating targets without their awareness.",
      core: "绝对的距离 vs 绝对的亲密。准星里比任何人都看得清楚，却永远触不到那张脸。",
      coreEn: "Absolute distance vs. absolute intimacy. The crosshair sees clearer than anyone, yet can never touch the face.",
      reference: "《美国狙击手》(2014, 克林特·伊斯特伍德) 克里斯·凯尔 / 《兵临城下》(2001, 让-雅克·阿诺) 瓦西里·扎伊采夫",
      referenceEn: "\"American Sniper\" (2014, Clint Eastwood) Chris Kyle / \"Enemy at the Gates\" (2001, Jean-Jacques Annaud) Vasily Zaitsev"
    },
    {
      id: "riot_police",
      name: "防暴警察",
      nameEn: "Riot Police",
      def: "大规模群体事件中的前线镇压力量。列阵、推进、隔离，执行国家维稳指令。",
      defEn: "Frontline suppression force in mass civil unrest. Formation, advance, containment — executing state stability orders.",
      core: "匿名的黑色甲壳 vs 街头的愤怒浪潮。盾牌后面没有面孔，只有编号。",
      coreEn: "Anonymous black carapace vs. the furious tide of the streets. Behind the shield, no face — only a serial number.",
      reference: "《精英部队》(2007, 若泽·帕迪里亚) 纳西门托 / 《新特警判官》(2012, 皮特·特拉维斯) 判官德雷德",
      referenceEn: "\"Elite Squad\" (2007, José Padilha) Nascimento / \"Dredd\" (2012, Pete Travis) Judge Dredd"
    },
    {
      id: "mercenary",
      name: "雇佣兵",
      nameEn: "Mercenary",
      def: "以战斗技能换取报酬的武装承包商。无政治立场，为出价最高者作战。",
      defEn: "Armed contractor exchanging combat skills for payment. No political allegiance; fighting for the highest bidder.",
      core: "标了价的弹道 vs 剥落了信仰的纯粹暴力。忠诚只存在于合同有效期内。",
      coreEn: "Priced ballistics vs. violence stripped of faith. Loyalty lasts only as long as the contract.",
      reference: "《敢死队》(2010, 西尔维斯特·史泰龙) 巴尼·罗斯 / 《血钻》(2006, 爱德华·兹威克) 丹尼·阿彻",
      referenceEn: "\"The Expendables\" (2010, Sylvester Stallone) Barney Ross / \"Blood Diamond\" (2006, Edward Zwick) Danny Archer"
    },
    {
      id: "hitman",
      name: "职业杀手",
      nameEn: "Hitman",
      def: "受雇执行定点清除的专业人员。匿名接单，匿名完成，不留痕迹。",
      defEn: "Professional hired for targeted elimination. Anonymous contracts, anonymous execution, no traces left.",
      core: "匠人的精密 vs 对象的虚无。把杀人做成手艺活，干净到连自己的感觉也一并消了音。",
      coreEn: "Artisan precision vs. the void of the target. Murder refined into craft, so clean it silences even your own feeling.",
      reference: "《这个杀手不太冷》(1994, 吕克·贝松) 里昂 / 《疾速追杀》(2014, 查德·斯塔赫斯基) 约翰·威克",
      referenceEn: "\"Léon: The Professional\" (1994, Luc Besson) Léon / \"John Wick\" (2014, Chad Stahelski) John Wick"
    },
    {
      id: "bounty_hunter",
      name: "赏金猎人",
      nameEn: "Bounty Hunter",
      def: "以追捕逃犯或指定目标为生的独立猎手。凭悬赏令行动，在法律灰色地带运作。",
      defEn: "Independent hunter tracking fugitives or designated targets for bounties. Operating in legal gray zones by warrant.",
      core: "追逐赏金的鬣狗 vs 荒野中的齿轮。猎物是商品，追踪是日常，正义只是发票上的抬头。",
      coreEn: "Bounty-chasing hyena vs. badlands gear. Prey is merchandise, tracking is routine, justice is just the invoice header.",
      reference: "《被解救的姜戈》(2012, 昆汀·塔伦蒂诺) 舒尔茨医生 / 《星际牛仔》(1998, 渡边信一郎) 斯派克·斯皮格尔",
      referenceEn: "\"Django Unchained\" (2012, Quentin Tarantino) Dr. King Schultz / \"Cowboy Bebop\" (1998, Shinichirō Watanabe) Spike Spiegel"
    },
    {
      id: "bodyguard",
      name: "保镖",
      nameEn: "Bodyguard",
      def: "受雇保护特定人物人身安全的武装护卫。以身体为屏障，拦截一切物理威胁。",
      defEn: "Armed guard hired to protect a specific individual's physical safety. Body as barrier, intercepting all physical threats.",
      core: "高薪的肉盾 vs 随时终结的倒计时。生命的价值被折算成雇主的安全系数。",
      coreEn: "High-paid meat-shield vs. an ever-ticking countdown. Life's value converted into the employer's safety coefficient.",
      reference: "《保镖》(1992, 米克·杰克逊) 弗兰克·法默 / 《怒火救援》(2004, 托尼·斯科特) 约翰·克里西",
      referenceEn: "\"The Bodyguard\" (1992, Mick Jackson) Frank Farmer / \"Man on Fire\" (2004, Tony Scott) John Creasy"
    },
    {
      id: "interrogator",
      name: "审讯官",
      nameEn: "Interrogator",
      def: "专职从嫌疑人或俘虏口中提取情报的审讯专家。运用心理施压与审讯技术。",
      defEn: "Specialist extracting intelligence from suspects or captives via psychological pressure and interrogation techniques.",
      core: "语言作为解剖刀 vs 沉默作为堡垒。对面那个人的嘴是唯一的战场。",
      coreEn: "Language as scalpel vs. silence as fortress. The mouth across the table is the only battlefield.",
      reference: "《无耻混蛋》(2009, 昆汀·塔伦蒂诺) 汉斯·兰达 / 《猎杀本·拉登》(2012, 凯瑟琳·毕格罗) 丹",
      referenceEn: "\"Inglourious Basterds\" (2009, Quentin Tarantino) Hans Landa / \"Zero Dark Thirty\" (2012, Kathryn Bigelow) Dan"
    },
    {
      id: "prison_guard",
      name: "狱卒",
      nameEn: "Prison Guard",
      def: "监禁设施的日常管理者。负责看管、巡逻与执行纪律处分。",
      defEn: "Daily administrator of incarceration facilities. Responsible for custody, patrol, and disciplinary enforcement.",
      core: "看守者与被囚者的镜像。同一道墙、同一份时间表，只是制服颜色不同。",
      coreEn: "Mirror of keeper and kept. Same walls, same schedule — only the uniform color differs.",
      reference: "《绿里奇迹》(1999, 弗兰克·德拉邦特) 保罗·埃奇科姆 / 《肖申克的救赎》(1994, 弗兰克·德拉邦特) 哈德利队长",
      referenceEn: "\"The Green Mile\" (1999, Frank Darabont) Paul Edgecomb / \"The Shawshank Redemption\" (1994, Frank Darabont) Captain Hadley"
    },
    {
      id: "samurai_ronin",
      name: "浪人武士",
      nameEn: "Ronin",
      def: "脱离主从效忠体系的持刀者。有武力但无合法雇主，游走于各藩之间。",
      defEn: "Swordsman detached from the feudal loyalty system. Armed but without a legitimate lord, drifting between domains.",
      core: "自由的代价 vs 效忠的废墟。主君已死，刀还在手——不知为谁而斩，却无法放下。",
      coreEn: "The price of freedom vs. the ruins of fealty. The lord is dead, the blade remains — swung for no one, yet impossible to sheathe.",
      reference: "《七武士》(1954, 黑泽明) 岛田勘兵卫 / 《切腹》(1962, 小林正树) 津云半四郎",
      referenceEn: "\"Seven Samurai\" (1954, Akira Kurosawa) Kambei Shimada / \"Harakiri\" (1962, Masaki Kobayashi) Hanshiro Tsugumo"
    },
    {
      id: "knight",
      name: "骑士",
      nameEn: "Knight",
      def: "封建领主的宣誓武装效忠者。以重甲与战马为工具，执行军事与仪式性任务。",
      defEn: "Sworn armed vassal of a feudal lord. Heavy armor and warhorses as tools, carrying out military and ceremonial duties.",
      core: "圣光裹挟的铁壳 vs 碾入淤泥的马蹄铁。荣誉是铠甲上的铭文，也是绞肉机的商标。",
      coreEn: "Holy-light iron shell vs. horseshoes grinding in muck. Honor is both the inscription on armor and the brand of the meat grinder.",
      reference: "《天国王朝》(2005, 雷德利·斯科特) 贝里昂 / 《圣战骑士》(2001, 布莱恩·海尔格兰德) 威廉·撒切尔",
      referenceEn: "\"Kingdom of Heaven\" (2005, Ridley Scott) Balian / \"A Knight's Tale\" (2001, Brian Helgeland) William Thatcher"
    },
    {
      id: "executioner",
      name: "刽子手",
      nameEn: "Executioner",
      def: "国家授权的法定处刑执行者。代表公权力对死刑犯实施终极惩罚。",
      defEn: "State-authorized legal executioner. Administering capital punishment on behalf of public authority.",
      core: "断头台上的无面黑罩 vs 国家机器的罪恶沉淀池。最合法的杀人者，也是最不可见的。",
      coreEn: "Faceless hood on the scaffold vs. the sin-repository of state machinery. The most lawful killer, and the most invisible.",
      reference: "《死囚之舞》(2001, 马克·福斯特) 汉克·格罗托 / 《末代刽子手》(2014, 汤姆·沃勒) 查瓦雷",
      referenceEn: "\"Monster's Ball\" (2001, Marc Forster) Hank Grotowski / \"The Last Executioner\" (2014, Tom Waller) Chavoret"
    },
    {
      id: "gladiator",
      name: "角斗士",
      nameEn: "Gladiator",
      def: "在竞技场中以命搏斗供观众娱乐的职业斗士。通常为奴隶或战俘出身。",
      defEn: "Professional fighter battling to the death in arenas for audience entertainment. Typically of slave or prisoner-of-war origin.",
      core: "飞溅黄沙中的血肉商品 vs 虚假封神的斗兽场图腾。欢呼声越大，枷锁越紧。",
      coreEn: "Flesh commodity in flying sand vs. the colosseum's false deity totem. The louder the cheers, the tighter the chains.",
      reference: "《角斗士》(2000, 雷德利·斯科特) 马克西姆斯 / 《斯巴达克斯》(1960, 斯坦利·库布里克) 斯巴达克斯",
      referenceEn: "\"Gladiator\" (2000, Ridley Scott) Maximus / \"Spartacus\" (1960, Stanley Kubrick) Spartacus"
    },
    {
      id: "secret_agent",
      name: "特工",
      nameEn: "Secret Agent",
      def: "隶属国家情报机构的秘密行动人员。执行渗透、监视、暗杀等非公开任务。",
      defEn: "Covert operative under a national intelligence agency. Conducting infiltration, surveillance, and assassination missions.",
      core: "不存在的零号档案 vs 燕尾服袖口的毒刃。身份是假的，权限是真的，人是消耗品。",
      coreEn: "Non-existent zero-archive vs. toxic blade in tuxedo cuffs. Identity is fake, clearance is real, the person is expendable.",
      reference: "《007：大战皇家赌场》(2006, 马丁·坎贝尔) 詹姆斯·邦德 / 《碟中谍》(1996, 布莱恩·德·帕尔玛) 伊森·亨特",
      referenceEn: "\"Casino Royale\" (2006, Martin Campbell) James Bond / \"Mission: Impossible\" (1996, Brian De Palma) Ethan Hunt"
    }
  ]
};
