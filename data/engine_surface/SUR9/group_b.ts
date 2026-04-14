import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_B: LibraryCategoryDef = {
  id: "prof_crime",
  name: "02. 罪恶与地下 (Crime & Underground)",
  nameEn: "Crime & Underground",
  desc: "法律与秩序的阴暗面。偷窃、贩毒、诈骗、销赃——在合法体系之外建立自己的规则与生态。",
  defEn: "The dark side of law and order. Theft, trafficking, fraud, fencing — building autonomous rules and ecosystems outside the legal framework.",
  items: [
    {
      id: "thief_master",
      name: "怪盗/大盗",
      nameEn: "Master Thief",
      def: "以盗窃高价值目标为职业的技术型罪犯。精通潜入、破解安保系统与脱身技术。",
      defEn: "Technical criminal specializing in high-value theft. Expert in infiltration, security bypassing, and clean extraction.",
      core: "穿越红外矩阵的白手套 vs 嘲笑保险库的魅影。优雅是手段，贪婪是燃料，消失是艺术。",
      coreEn: "White glove phasing through infrared matrices vs. the phantom mocking vaults. Elegance is the method, greed the fuel, vanishing the art.",
      reference: "《十一罗汉》(2001, 史蒂文·索德伯格) 丹尼·奥申 / 《偷天游侠》(1999, 约翰·麦克蒂尔南) 托马斯·克朗",
      referenceEn: "\"Ocean's Eleven\" (2001, Steven Soderbergh) Danny Ocean / \"The Thomas Crown Affair\" (1999, John McTiernan) Thomas Crown"
    },
    {
      id: "drug_lord",
      name: "毒枭",
      nameEn: "Drug Lord",
      def: "控制成瘾物质生产与分销网络的犯罪组织首脑。以暴力和化学依赖垄断地下市场。",
      defEn: "Crime syndicate leader controlling production and distribution of addictive substances. Monopolizing underground markets via violence and chemical dependency.",
      core: "溶解在白色粉末里的狂喜 vs 堆积如山的血腥美钞。帝国建立在瘾君子的静脉之上。",
      coreEn: "Ecstasy dissolved in white powder vs. mountainous stacks of bloody cash. An empire built upon addicts' veins.",
      reference: "《疤面煞星》(1983, 布莱恩·德·帕尔玛) 托尼·蒙塔纳 / 《毒枭》(2015, 剧集) 巴勃罗·埃斯科巴",
      referenceEn: "\"Scarface\" (1983, Brian De Palma) Tony Montana / \"Narcos\" (2015, Series) Pablo Escobar"
    },
    {
      id: "hacker_black",
      name: "黑帽黑客",
      nameEn: "Black Hat Hacker",
      def: "非法入侵计算机系统与网络的技术犯罪者。窃取数据、瘫痪基础设施或勒索目标。",
      defEn: "Technical criminal illegally breaching computer systems and networks. Stealing data, crippling infrastructure, or extorting targets.",
      core: "暴雨中的赛博神明 vs 屏幕上闪烁的注入代码。一行指令摧毁一座堡垒，然后消失在日志里。",
      coreEn: "Cyber-deity in a torrential storm vs. injection code flickering on screens. One command topples a fortress, then vanishes from the logs.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥 / 《我是谁：没有绝对安全的系统》(2014, 巴伦·博·欧达尔) 本杰明",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) Neo / \"Who Am I\" (2014, Baran bo Odar) Benjamin"
    },
    {
      id: "smuggler",
      name: "走私贩",
      nameEn: "Smuggler",
      def: "非法跨境运输违禁品的物流操作者。利用隐蔽通道穿越边境管控与海关封锁。",
      defEn: "Logistics operator illegally transporting contraband across borders. Exploiting hidden routes past border control and customs blockades.",
      core: "双层夹板中的致命暗货 vs 穿透探照灯的冷笑。边境线是牢笼，也是提款机。",
      coreEn: "Lethal cargo in false bottoms vs. the cold sneer piercing searchlights. Borders are both cage and cash machine.",
      reference: "《星球大战：新希望》(1977, 乔治·卢卡斯) 韩·索罗 / 《战争之王》(2005, 安德鲁·尼科尔) 尤里·奥尔洛夫",
      referenceEn: "\"Star Wars: Episode IV\" (1977, George Lucas) Han Solo / \"Lord of War\" (2005, Andrew Niccol) Yuri Orlov"
    },
    {
      id: "con_artist",
      name: "欺诈师",
      nameEn: "Con Artist",
      def: "通过伪造身份与编造情境操控他人信任的职业骗子。以社会工程学为核心手段。",
      defEn: "Professional swindler manipulating trust through fabricated identities and scenarios. Social engineering as the primary weapon.",
      core: "迷人微笑后面的深渊 vs 每一张印满谎言的名片。信任是原材料，背叛是成品。",
      coreEn: "The abyss behind a charming smile vs. business cards printed with lies. Trust is the raw material, betrayal the finished product.",
      reference: "《猫鼠游戏》(2002, 史蒂文·斯皮尔伯格) 弗兰克·阿巴内尔 / 《骗中骗》(1973, 乔治·罗伊·希尔) 亨利·冈多夫",
      referenceEn: "\"Catch Me If You Can\" (2002, Steven Spielberg) Frank Abagnale / \"The Sting\" (1973, George Roy Hill) Henry Gondorff"
    },
    {
      id: "gang_leader",
      name: "帮派头目",
      nameEn: "Gang Leader",
      def: "街头犯罪组织的领导者。通过暴力、义气与地盘控制维持非正式权力结构。",
      defEn: "Leader of street criminal organizations. Maintaining informal power structures through violence, brotherhood, and territorial control.",
      core: "流血的水泥地 vs 刻在皮肉上的兄弟盟约。规矩是拳头写的，背叛用命偿还。",
      coreEn: "Bleeding concrete floors vs. brotherhood pacts carved into skin. Rules written by fists, betrayal repaid with life.",
      reference: "《教父》(1972, 弗朗西斯·福特·科波拉) 维托·柯里昂 / 《美国黑帮》(2007, 雷德利·斯科特) 弗兰克·卢卡斯",
      referenceEn: "\"The Godfather\" (1972, Francis Ford Coppola) Vito Corleone / \"American Gangster\" (2007, Ridley Scott) Frank Lucas"
    },
    {
      id: "forger",
      name: "伪造者",
      nameEn: "Forger",
      def: "专门制造假证件、假货币或赝品艺术品的技术型犯罪者。以极致工艺模糊真伪边界。",
      defEn: "Technical criminal specializing in counterfeit documents, currency, or art forgeries. Blurring the real-fake boundary through extreme craftsmanship.",
      core: "比真品更精细的赝品 vs 油墨气味中异化的双手。造假是一门超越原作的手艺。",
      coreEn: "The fake, finer than the original vs. hands alienated in the scent of ink. Forgery demands craft surpassing the authentic.",
      reference: "《无双》(2018, 庄文强) 李问 / 《伪造者》(2014, 菲利普·马丁) 雷蒙德·卡特",
      referenceEn: "\"Project Gutenberg\" (2018, Felix Chong) Lee Man / \"The Forger\" (2014, Philip Martin) Raymond Cutter"
    },
    {
      id: "fence",
      name: "销赃人",
      nameEn: "The Fence",
      def: "连接盗窃者与买家的地下中间商。负责赃物估价、洗白与转手。",
      defEn: "Underground middleman connecting thieves to buyers. Responsible for appraising, laundering, and reselling stolen goods.",
      core: "称量血腥重量的古董天平 vs 满是灰尘的暗账本。每件赃物都有两个价格——市价和血价。",
      coreEn: "Antique scale weighing bloody mass vs. dust-covered dark ledgers. Every stolen item has two prices — market and blood.",
      reference: "《偷拐抢骗》(2000, 盖·里奇) \"砖头\" / 《疾速追杀2》(2017, 查德·斯塔赫斯基) 鲍厄里之王",
      referenceEn: "\"Snatch\" (2000, Guy Ritchie) Brick Top / \"John Wick: Chapter 2\" (2017, Chad Stahelski) The Bowery King"
    },
    {
      id: "getaway_driver",
      name: "逃亡车手",
      nameEn: "Getaway Driver",
      def: "为犯罪团队提供高速撤离服务的专业驾驶员。精通路线规划与极限车辆操控。",
      defEn: "Professional driver providing high-speed extraction for criminal teams. Expert in route planning and extreme vehicle handling.",
      core: "嘶吼过弯的橡胶轮胎 vs 倒视镜里闪烁的红蓝警灯。方向盘是唯一的乐器，逃亡是唯一的乐章。",
      coreEn: "Screaming rubber tires around bends vs. red-blue sirens flashing in the rearview. The wheel is the only instrument, escape the only score.",
      reference: "《亡命驾驶》(2011, 尼古拉斯·温丁·雷弗恩) 车手 / 《极盗车神》(2017, 埃德加·赖特) 宝宝",
      referenceEn: "\"Drive\" (2011, Nicolas Winding Refn) The Driver / \"Baby Driver\" (2017, Edgar Wright) Baby"
    },
    {
      id: "pimp",
      name: "皮条客",
      nameEn: "Pimp",
      def: "组织与管理性交易的中间商。从性工作者的劳动中抽取利润。",
      defEn: "Middleman organizing and managing sex trade operations. Extracting profit from sex workers' labor.",
      core: "浮夸毛料大衣下的腐烂核心 vs 将一切感情折算成时薪的钟表。欲望是商品，身体是流水线。",
      coreEn: "Rotting core under a garish fur coat vs. the clock converting all emotion into hourly rates. Desire is merchandise, bodies the assembly line.",
      reference: "《出租车司机》(1976, 马丁·斯科塞斯) 马修 / 《川流熙攘》(2005, 克雷格·布鲁尔) 迪杰",
      referenceEn: "\"Taxi Driver\" (1976, Martin Scorsese) Sport / \"Hustle & Flow\" (2005, Craig Brewer) Djay"
    },
    {
      id: "gambler",
      name: "职业赌徒",
      nameEn: "Pro Gambler",
      def: "以博弈为生计的职业玩家。依靠概率计算、心理博弈或纯粹胆量从赌局中获利。",
      defEn: "Professional player making a living from gambling. Profiting through probability calculation, psychological warfare, or sheer nerve.",
      core: "绿呢桌上的滴血底牌 vs 永不停转的轮盘声。每一把都是全部身家的押注。",
      coreEn: "Bleeding hole cards on green baize vs. the eternal spinning of the roulette. Every hand is an all-in bet.",
      reference: "《赌神》(1989, 王晶) 高进 / 《决战21点》(2008, 罗伯特·路克蒂克) 本·坎贝尔",
      referenceEn: "\"God of Gamblers\" (1989, Wong Jing) Ko Chun / \"21\" (2008, Robert Luketic) Ben Campbell"
    },
    {
      id: "bookie",
      name: "博彩经纪",
      nameEn: "Bookie",
      def: "组织赌局并从中抽成的庄家。设定赔率、接受投注、追讨欠债。",
      defEn: "Bookmaker organizing gambling operations and taking a cut. Setting odds, accepting bets, collecting debts.",
      core: "记号笔画下的断指威胁 vs 账本堆叠的血肉提款机。概率是他的，风险是别人的。",
      coreEn: "Marker-drawn amputation threats vs. the flesh ATM built from ledger stacks. The odds are his, the risk is theirs.",
      reference: "《原钻》(2019, 萨弗迪兄弟) 霍华德·拉特纳 / 《浴血黑帮》(2013, 剧集) 汤米·谢尔比",
      referenceEn: "\"Uncut Gems\" (2019, Safdie Brothers) Howard Ratner / \"Peaky Blinders\" (2013, Series) Tommy Shelby"
    },
    {
      id: "cleaner_crime",
      name: "清道夫",
      nameEn: "The Cleaner",
      def: "犯罪现场的善后专家。负责在案发后清除一切物理痕迹，使现场恢复未发生状态。",
      defEn: "Crime scene cleanup specialist. Erasing all physical traces post-incident, restoring scenes to an unoccurred state.",
      core: "强酸侵蚀一切痕迹的刺鼻气味 vs 让死亡物理消失的黑洞。最完美的工作是让一切从未存在。",
      coreEn: "Pungent acid fumes eroding all traces vs. the black hole rendering death physically absent. The perfect job means nothing ever happened.",
      reference: "《低俗小说》(1994, 昆汀·塔伦蒂诺) 温斯顿·沃夫 / 《疾速追杀》(2014, 查德·斯塔赫斯基) 查理",
      referenceEn: "\"Pulp Fiction\" (1994, Quentin Tarantino) Winston Wolfe / \"John Wick\" (2014, Chad Stahelski) Charlie"
    },
    {
      id: "info_broker",
      name: "情报贩子",
      nameEn: "Info Broker",
      def: "在地下网络中买卖机密信息的中间人。出售弱点、秘密与关键数据，不问买家身份。",
      defEn: "Underground middleman trading classified information. Selling weaknesses, secrets, and critical data without questioning buyer identity.",
      core: "闪烁的服务器硬盘 vs 永远无法回拨的匿名电话。信息是武器，沉默是保险。",
      coreEn: "Blinking server drives vs. the untraceable anonymous phone. Information is the weapon, silence is the insurance.",
      reference: "《权力的游戏》(2011, 剧集) 瓦里斯 / 《黑客帝国》(1999, 沃卓斯基姐妹) 塞弗",
      referenceEn: "\"Game of Thrones\" (2011, Series) Lord Varys / \"The Matrix\" (1999, The Wachowskis) Cypher"
    },
    {
      id: "grave_robber",
      name: "盗墓贼",
      nameEn: "Tomb Raider",
      def: "非法掘取古墓葬中陪葬品的盗掘者。寻找与变卖地下沉淀的历史文物。",
      defEn: "Illegal excavator looting burial goods from ancient tombs. Locating and selling historically deposited underground artifacts.",
      core: "打穿阴阳两界的洛阳铲 vs 撬开骷髅下巴寻找金币的冰冷的手。死者的安宁是他的开采成本。",
      coreEn: "The Luoyang shovel breaching the boundary between worlds vs. cold hands prying skulls for coins. The dead's peace is his mining cost.",
      reference: "《夺宝奇兵》(1981, 史蒂文·斯皮尔伯格) 印第安纳·琼斯 / 《木乃伊》(1999, 斯蒂芬·索莫斯) 理查·奥康纳",
      referenceEn: "\"Raiders of the Lost Ark\" (1981, Steven Spielberg) Indiana Jones / \"The Mummy\" (1999, Stephen Sommers) Rick O'Connell"
    }
  ]
};
