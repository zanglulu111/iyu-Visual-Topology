import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_K: LibraryCategoryDef = {
  id: "orig_middle",
  name: "11. 中产与市民 (Middle Class & Civil)",
  nameEn: "Middle Class & Civil",
  desc: "追求稳定、秩序与体面的城市中间阶层。被悬置在上升之梦与坠落恐惧之间的温吞群体。",
  defEn: "Urban middle strata pursuing stability, order, and decency. Tepid groups suspended between the dream of ascent and the fear of falling.",
  items: [
    {
      id: "suburban_family",
      name: "郊区中产",
      nameEn: "Suburbanite",
      def: "居住在城市郊区住宅区、以家庭为核心的中产阶级典型生活方式践行者。",
      defEn: "Typical middle-class lifestyle practitioner residing in suburban residential areas with family as the core unit.",
      core: "必须维持这块草坪的平整，否则深渊就会从地下爬出来。体面是唯一的护城河。",
      coreEn: "This lawn must remain flat, or the abyss crawls from below. Decency is the only moat.",
      reference: "《美国丽人》(1999, 萨姆·门德斯) 莱斯特·伯恩汉姆 / 《绝望主妇》(2004, 剧集) 紫藤社区主妇",
      referenceEn: "\"American Beauty\" (1999, Sam Mendes) Lester Burnham / \"Desperate Housewives\" (2004, Series) Wisteria Lane Housewives"
    },
    {
      id: "civil_servant",
      name: "公务员",
      nameEn: "Civil Servant",
      def: "在政府机关中从事行政管理与公共服务的国家正式雇员。",
      defEn: "Formal state employee engaged in administrative management and public service within government agencies.",
      core: "我只是在照章办事，恶与我无关。规则是他的盾牌，也是他的棺材板。",
      coreEn: "I'm just following the rules; evil has nothing to do with me. Rules are his shield and his coffin lid.",
      reference: "《审判》(1962, 奥逊·威尔斯) 约瑟夫·K / 《切尔诺贝利》(2019, 剧集) 底层官僚",
      referenceEn: "\"The Trial\" (1962, Orson Welles) Josef K. / \"Chernobyl\" (2019, Series) Low-level Bureaucrats"
    },
    {
      id: "small_business",
      name: "小店主",
      nameEn: "Shopkeeper",
      def: "经营小型零售店铺或餐饮摊点的个体工商户。以一间铺面维系家庭生计。",
      defEn: "Individual business owner operating a small retail shop or food stall. Sustaining family livelihood with a single storefront.",
      core: "只要卷帘门还拉得开，生活就还没散架。收银台是他的城堡，找零是他的战场。",
      coreEn: "As long as the rolling door opens, life hasn't fallen apart. The register is his castle, making change his battlefield.",
      reference: "《寄生虫》(2019, 奉俊昊) 金基泽 / 《肖申克的救赎》(1994, 弗兰克·德拉邦特) 布鲁克斯·哈特伦",
      referenceEn: "\"Parasite\" (2019, Bong Joon Ho) Kim Ki-taek / \"The Shawshank Redemption\" (1994, Frank Darabont) Brooks Hatlen"
    },
    {
      id: "salaryman",
      name: "社畜/白领职员",
      nameEn: "Salaryman",
      def: "在企业中从事日常办公工作的普通雇员。以固定薪资换取劳动时间。",
      defEn: "Ordinary employee performing daily office work in companies. Trading labor time for a fixed salary.",
      core: "如果我在地铁上死了，打卡记录会救我吗？通勤是他的轮回，工位是他的坟墓。",
      coreEn: "If I die on the subway, will the clock-in records save me? The commute is his cycle, the cubicle his grave.",
      reference: "《搏击俱乐部》(1999, 大卫·芬奇) 叙述者 / 《未麻的部屋》(1997, 今敏) 通勤人群",
      referenceEn: "\"Fight Club\" (1999, David Fincher) The Narrator / \"Perfect Blue\" (1997, Satoshi Kon) Commuter Crowd"
    },
    {
      id: "academic",
      name: "知识分子/教师",
      nameEn: "Intellectual / Teacher",
      def: "在学校或学术机构中从事教学与研究工作的教育从业者。",
      defEn: "Education practitioner engaged in teaching and research at schools or academic institutions.",
      core: "书籍是我的盾牌，但我防不住通货膨胀。讲台是他的王座，粉笔灰是他的王冠。",
      coreEn: "Books are my shields, but they can't defend against inflation. The podium is his throne, chalk dust his crown.",
      reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 弗莱彻 / 《死亡诗社》(1989, 彼得·威尔) 约翰·基汀",
      referenceEn: "\"Whiplash\" (2014, Damien Chazelle) Terence Fletcher / \"Dead Poets Society\" (1989, Peter Weir) John Keating"
    },
    {
      id: "doctor_lawyer",
      name: "专业人士(医/律)",
      nameEn: "Professional",
      def: "通过长期专业训练获得执业资格的高技能服务提供者（医生、律师等）。",
      defEn: "Highly skilled service providers (doctors, lawyers, etc.) obtaining practice qualifications through extended professional training.",
      core: "我不是上帝，我只按小时收费。白大褂和西装是通行证，账单是真正的诊断书。",
      coreEn: "I'm not God, I just bill by the hour. The white coat and suit are passes; the bill is the real diagnosis.",
      reference: "《风骚律师》(2015, 剧集) 索尔·古德曼 / 《良医》(2017, 剧集) 肖恩·墨菲",
      referenceEn: "\"Better Call Saul\" (2015, Series) Saul Goodman / \"The Good Doctor\" (2017, Series) Shaun Murphy"
    },
    {
      id: "housewife",
      name: "家庭主妇",
      nameEn: "Housewife",
      def: "全职负责家务劳动、子女养育与家庭管理的非就业配偶。",
      defEn: "Non-employed spouse responsible full-time for housework, child-rearing, and household management.",
      core: "地板擦得越亮，属于我自己的影子就越模糊。厨房是她的舞台，也是她的牢房。",
      coreEn: "The brighter the floor is scrubbed, the blurrier my own shadow. The kitchen is her stage and her cell.",
      reference: "《时时刻刻》(2002, 史蒂芬·戴德利) 劳拉·布朗 / 《消失的爱人》(2014, 大卫·芬奇) 艾米·邓恩",
      referenceEn: "\"The Hours\" (2002, Stephen Daldry) Laura Brown / \"Gone Girl\" (2014, David Fincher) Amy Dunne"
    },
    {
      id: "student",
      name: "学生",
      nameEn: "Student",
      def: "在教育机构中接受系统化知识训练的在校学习者。",
      defEn: "In-school learner receiving systematized knowledge training at educational institutions.",
      core: "如果考卷没有答案，那我该怎么活？校服是标准化的皮肤，分数是唯一的器官。",
      coreEn: "If the exam paper has no answer, how should I live? The uniform is standardized skin, scores the only organ.",
      reference: "《大象》(2003, 格斯·范·桑特) 校园受害者 / 《死亡诗社》(1989, 彼得·威尔) 尼尔·佩里",
      referenceEn: "\"Elephant\" (2003, Gus Van Sant) School Victims / \"Dead Poets Society\" (1989, Peter Weir) Neil Perry"
    },
    {
      id: "artist_struggling",
      name: "落魄艺术家",
      nameEn: "Starving Artist",
      def: "尚未获得市场认可、以贫困状态坚持创作的自由艺术从业者。",
      defEn: "Freelance art practitioner persisting in creation in a state of poverty without market recognition.",
      core: "饿死之前，我还差一笔红色。画布上的颜料比他的晚餐更丰盛。",
      coreEn: "Before I starve, I'm just one stroke of red short. The paint on the canvas is richer than his dinner.",
      reference: "《梵高传》(1956, 文森特·明奈利) 梵高 / 《黑天鹅》(2010, 达伦·阿伦诺夫斯基) 妮娜",
      referenceEn: "\"Lust for Life\" (1956, Vincente Minnelli) Vincent van Gogh / \"Black Swan\" (2010, Darren Aronofsky) Nina Sayers"
    },
    {
      id: "journalist",
      name: "记者",
      nameEn: "Journalist",
      def: "为新闻媒体采集、核实与报道信息的新闻从业者。",
      defEn: "News practitioner gathering, verifying, and reporting information for news media outlets.",
      core: "就算他们剪断我的舌头，照片也会发声。真相是他的弹药，截稿日是他的审判日。",
      coreEn: "Even if they cut my tongue, the photos will speak. Truth is his ammo, the deadline his judgment day.",
      reference: "《夜行者》(2014, 丹·吉尔罗伊) 路易斯·布鲁姆 / 《聚焦》(2015, 汤姆·麦卡锡) 聚焦小组",
      referenceEn: "\"Nightcrawler\" (2014, Dan Gilroy) Louis Bloom / \"Spotlight\" (2015, Tom McCarthy) Spotlight Team"
    },
    {
      id: "start_up_founder",
      name: "创业者",
      nameEn: "Start-up Founder",
      def: "以自有或融资资金创建新企业的商业冒险者。在产品开发与资金链之间走钢丝。",
      defEn: "Business venturer founding new enterprises with personal or raised capital. Walking a tightrope between product development and funding.",
      core: "再给我一轮融资，我能把这个破碎的世界拼起来。PPT是他的圣经，烧钱是他的祈祷。",
      coreEn: "One more funding round and I can reconstruct this broken world. The PPT is his bible, burning cash his prayer.",
      reference: "《硅谷》(2014, 剧集) 理查德·亨德里克斯 / 《滴血成金》(2022, 剧集) 伊丽莎白·霍姆斯",
      referenceEn: "\"Silicon Valley\" (2014, Series) Richard Hendricks / \"The Dropout\" (2022, Series) Elizabeth Holmes"
    },
    {
      id: "middle_manager",
      name: "中层管理",
      nameEn: "Middle Manager",
      def: "在企业组织架构中处于上下级之间的管理人员。承上传下、执行决策。",
      defEn: "Manager positioned between upper and lower levels in corporate hierarchy. Relaying directives and executing decisions.",
      core: "我拥有开除人的权力，但我不敢生病。上面是刀，下面是火，他站在中间。",
      coreEn: "I have the power to fire people, but I don't dare get sick. Above is the blade, below the fire; he stands in between.",
      reference: "《华尔街之狼》(2013, 马丁·斯科塞斯) 华尔街中层 / 《人生切割术》(2022, 剧集) 被切割员工",
      referenceEn: "\"The Wolf of Wall Street\" (2013, Martin Scorsese) Mid-level Managers / \"Severance\" (2022, Series) Severed Employees"
    },
    {
      id: "social_worker",
      name: "社工",
      nameEn: "Social Worker",
      def: "在社会福利体系中为弱势群体提供援助、咨询与资源对接的专业服务人员。",
      defEn: "Professional service worker providing assistance, counseling, and resource connection for vulnerable groups within the social welfare system.",
      core: "我的共情能力已经被用光了，但我还是要敲开下一扇门。每一个案例都是一道伤口。",
      coreEn: "My empathy is depleted, but I still have to knock on the next door. Every case is an open wound.",
      reference: "《小丑》(2019, 托德·菲利普斯) 社工黛布拉 / 《我是布莱克》(2016, 肯·洛奇) 丹尼尔·布莱克",
      referenceEn: "\"Joker\" (2019, Todd Phillips) Social Worker Debra / \"I, Daniel Blake\" (2016, Ken Loach) Daniel Blake"
    },
    {
      id: "nurse",
      name: "护士",
      nameEn: "Nurse",
      def: "在医疗机构中执行护理、监测与辅助治疗任务的医疗从业者。",
      defEn: "Medical practitioner performing nursing, monitoring, and auxiliary treatment tasks at healthcare facilities.",
      core: "每一晚都有人死去，但床单必须在明早换新。她的双手比医生的更常触碰死亡。",
      coreEn: "Every night someone dies, but the bedsheets must be renewed by morning. Her hands touch death more often than the doctor's.",
      reference: "《飞越疯人院》(1975, 米洛斯·福尔曼) 瑞秋护士长 / 《寂静岭》(2006, 克里斯多夫·甘斯) 暗黑护士",
      referenceEn: "\"One Flew Over the Cuckoo's Nest\" (1975, Miloš Forman) Nurse Ratched / \"Silent Hill\" (2006, Christophe Gans) Dark Nurse"
    },
    {
      id: "coach",
      name: "教练",
      nameEn: "Coach",
      def: "负责训练运动员或学员、提升其竞技水平的体育或技能指导者。",
      defEn: "Sports or skill instructor responsible for training athletes or trainees to improve competitive performance.",
      core: "你的肌肉里必须流淌着我的血液，去替我赢！他的荣耀只能通过别人的身体兑现。",
      coreEn: "My blood must flow in your muscles — go win for me! His glory can only be redeemed through another's body.",
      reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 弗莱彻 / 《摔跤吧！爸爸》(2016, 尼特什·提瓦里) 马哈维亚",
      referenceEn: "\"Whiplash\" (2014, Damien Chazelle) Terence Fletcher / \"Dangal\" (2016, Nitesh Tiwari) Mahavir Singh Phogat"
    }
  ]
};
