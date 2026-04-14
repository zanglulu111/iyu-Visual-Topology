import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_G: LibraryCategoryDef = {
  id: "prof_spirit",
  name: "07. 灵性与死亡 (Spirit & Death)",
  nameEn: "Spirit & Death",
  desc: "与死亡、灵异、瘟疫和彼岸直接打交道的职业群落。通灵、占卜、送葬、看守——在生死边界上执勤。",
  defEn: "Professional communities dealing directly with death, the supernatural, plague, and the beyond. Channeling, divination, burial, watching — stationed at the boundary of life and death.",
  items: [
    {
      id: "medium",
      name: "灵媒/通灵者",
      nameEn: "Medium",
      def: "声称能与亡灵沟通的灵性从业者。通过降灵会或感应为生者传递逝者的信息。",
      defEn: "Spiritual practitioner claiming communication with the dead. Conveying messages from the deceased to the living through séances or psychic sensing.",
      core: "眼白完全上翻渗血的瞳孔 vs 发出完全不属于自己的诡异声线的裂开喉管。她是两个世界之间的活电话线。",
      coreEn: "Eyes rolled back bleeding white vs. split tracheas emitting impossibly eerie voices. She is the live phone line between two worlds.",
      reference: "《潜伏》(2010, 温子仁) 伊莉斯·雷尼尔 / 《第六感》(1999, M·奈特·沙马兰) 科尔·西尔",
      referenceEn: "\"Insidious\" (2010, James Wan) Elise Rainier / \"The Sixth Sense\" (1999, M. Night Shyamalan) Cole Sear"
    },
    {
      id: "fortune_teller",
      name: "占卜师",
      nameEn: "Fortune Teller",
      def: "通过塔罗牌、星盘、骨卦等工具为委托人推演命运走向的神秘学从业者。",
      defEn: "Occult practitioner divining fate trajectories for clients via tarot, astrolabe, bone casting, and similar tools.",
      core: "翻开死神牌时痉挛翻倒的茶杯 vs 水晶球中正在重演的血光凶兆。看到了结局，却无权改写剧本。",
      coreEn: "Tea cups spilled in spasms upon flipping the Death card vs. blood-gore omens replaying in crystal spheres. Seeing the ending, but with no authority to rewrite the script.",
      reference: "《哈利·波特与阿兹卡班的囚徒》(2004, 阿方索·卡隆) 特里劳妮教授 / 《西部世界》(2016, 剧集) 塔罗牌老妇",
      referenceEn: "\"Harry Potter and the Prisoner of Azkaban\" (2004, Alfonso Cuarón) Professor Trelawney / \"Westworld\" (2016, Series) Tarot Woman"
    },
    {
      id: "grave_keeper",
      name: "守墓人",
      nameEn: "Grave Keeper",
      def: "负责墓地日常维护、安葬协助与场地看管的殡葬服务人员。",
      defEn: "Funeral service worker responsible for daily cemetery maintenance, burial assistance, and grounds supervision.",
      core: "常年握铲导致严重变形的双手 vs 阴森暴雨墓地里摇晃的昏暗马灯。与上万具白骨日夜共生的沉默看门人。",
      coreEn: "Shoveling-deformed calloused hands vs. dim storm-lanterns swaying in eerie rain-graveyards. The silent gatekeeper coexisting with ten thousand skeletons.",
      reference: "《活死人之夜》(1968, 乔治·罗梅罗) 守墓人 / 《哈利·波特与火焰杯》(2005, 迈克·内威尔) 弗兰克·布莱斯",
      referenceEn: "\"Night of the Living Dead\" (1968, George A. Romero) Gravedigger / \"Harry Potter and the Goblet of Fire\" (2005, Mike Newell) Frank Bryce"
    },
    {
      id: "plague_doctor",
      name: "鸟嘴医生",
      nameEn: "Plague Doctor",
      def: "中世纪瘟疫时期佩戴鸟喙面具、使用香料防护的疫病治疗者。在死尸堆中施治。",
      defEn: "Medieval plague-era healer wearing beaked masks filled with aromatic herbs for protection. Treating patients amidst piles of corpses.",
      core: "面具长喙里充满刺鼻香料却挡不住滔天尸臭 vs 用来翻拣溃烂尸体的手杖。他是死神的会计，逐户清点账目。",
      coreEn: "Mask-beaks stuffed with pungent spices failing to block tidal corpse-stench vs. canes used to poke ulcerating bodies. He is Death's accountant, tallying door to door.",
      reference: "《第七封印》(1957, 英格玛·伯格曼) 死神 / 《达芬奇星空下》(2013, 剧集) 鸟嘴医生",
      referenceEn: "\"The Seventh Seal\" (1957, Ingmar Bergman) Death / \"Da Vinci's Demons\" (2013, Series) Plague Doctor"
    },
    {
      id: "taoist",
      name: "道士",
      nameEn: "Taoist Priest",
      def: "道教体系中主持斋醮科仪、驱邪镇煞的宗教职业者。以符箓、法器与咒语为工具。",
      defEn: "Religious practitioner in the Taoist system conducting rituals, exorcism, and evil-warding. Using talismans, ritual instruments, and incantations as tools.",
      core: "咬破中指在黄纸上拖拽出深红咒言的指尖 vs 在极端邪祟面前崩裂成粉屑的八卦木镜。阴阳之间，他是最后一道人工闸门。",
      coreEn: "Fingertips bitten open dragging crimson runes on yellow paper vs. wooden Bagua mirrors shattering before extreme evil. Between yin and yang, he is the last manual floodgate.",
      reference: "《僵尸先生》(1985, 刘观伟) 九叔 / 《阴阳师》(2001, �的田洋二郎) 安倍晴明",
      referenceEn: "\"Mr. Vampire\" (1985, Ricky Lau) Uncle Nine / \"Onmyoji\" (2001, Yojiro Takita) Abe no Seimei"
    },
    {
      id: "missionary",
      name: "传教士",
      nameEn: "Missionary",
      def: "受宗教组织派遣前往异域传播信仰的神职人员。在陌生文化环境中建立教区与发展信徒。",
      defEn: "Clergy dispatched by religious organizations to spread faith in foreign lands. Establishing parishes and developing converts in unfamiliar cultural environments.",
      core: "紧紧攥在手中的老旧皮面圣经 vs 被剧毒部落箭矢穿心钉在巨树上的身躯。文明的第一滴血，往往是传教士的。",
      coreEn: "Tightly gripped old leather Bible vs. body nailed through the heart to a giant tree by toxic tribal arrows. Civilization's first blood is often the missionary's.",
      reference: "《沉默》(2016, 马丁·斯科塞斯) 罗德里格斯神父 / 《食人族大屠杀》(1980, 鲁格罗·德奥达托) 传教团",
      referenceEn: "\"Silence\" (2016, Martin Scorsese) Father Rodrigues / \"Cannibal Holocaust\" (1980, Ruggero Deodato) Missionaries"
    },
    {
      id: "embalmer",
      name: "防腐师",
      nameEn: "Embalmer",
      def: "对死者遗体进行化学防腐处理以延缓腐败的殡葬技术人员。",
      defEn: "Funeral technician performing chemical preservation on deceased remains to delay decomposition.",
      core: "用防腐剂填充空洞的巨大注射器 vs 为惨白嘴唇涂上红色的化妆刷。他的工作是让腐烂暂停，让告别还来得及。",
      coreEn: "Giant syringes filling hollows with embalming fluid vs. makeup brushes painting pale lips red. His job is to pause decay so farewell can still happen.",
      reference: "《入殓师》(2008, 泷田洋二郎) 小林大悟 / 《六尺之下》(2001, 剧集) 费舍尔家族",
      referenceEn: "\"Departures\" (2008, Yojiro Takita) Daigo Kobayashi / \"Six Feet Under\" (2001, Series) The Fishers"
    },
    {
      id: "herbalist",
      name: "草药师",
      nameEn: "Herbalist",
      def: "以采集、调配天然植物药材为生的民间医疗从业者。凭经验辨识药性与毒性。",
      defEn: "Folk medical practitioner gathering and compounding natural plant remedies. Identifying medicinal and toxic properties through experience.",
      core: "捣碎毒性曼陀罗的石臼 vs 晾满屋顶的干枯药草。治病与杀人之间，只差一味药的剂量。",
      coreEn: "Stone mortar grinding toxic datura vs. dried herbs blanketing the roof. Between cure and kill, only a dose separates them.",
      reference: "《公主新娘》(1987, 罗伯·莱纳) 奇迹麦克斯 / 《权力的游戏》(2011, 剧集) 学城学士",
      referenceEn: "\"The Princess Bride\" (1987, Rob Reiner) Miracle Max / \"Game of Thrones\" (2011, Series) Citadel Maesters"
    },
    {
      id: "undertaker",
      name: "送葬人/掘墓人",
      nameEn: "Undertaker",
      def: "负责遗体运送、墓穴挖掘与葬礼后勤的殡葬体力劳动者。",
      defEn: "Funeral laborer responsible for body transport, grave digging, and burial logistics.",
      core: "肩膀上永远扛着的沉重棺木 vs 新翻泥土中露出的旧白骨。他是死亡流水线的最后一道工序。",
      coreEn: "Heavy coffin perpetually on the shoulder vs. old white bones surfacing from freshly turned earth. He is the last step on the death assembly line.",
      reference: "《哈姆雷特》(1996, 肯尼斯·布拉纳) 掘墓人 / 《黄金三镖客》(1966, 赛尔乔·莱昂内) 掘墓人",
      referenceEn: "\"Hamlet\" (1996, Kenneth Branagh) Gravedigger / \"The Good, the Bad and the Ugly\" (1966, Sergio Leone) Gravedigger"
    },
    {
      id: "sin_eater",
      name: "食罪人",
      nameEn: "Sin Eater",
      def: "在临终仪式中通过进食象征性食物来吸收死者罪孽的民间宗教从业者。",
      defEn: "Folk religious practitioner absorbing the sins of the dying by consuming symbolic food during last rites.",
      core: "沾满死者唾液的发霉面包 vs 每吞一口就更沉一分的灵魂。他吃下的不是食物，是别人一辈子的噩梦。",
      coreEn: "Moldy bread soaked in the dying's saliva vs. a soul growing heavier with every swallow. What he eats is not food, but a lifetime of other people's nightmares.",
      reference: "《食罪人》(2003, 布莱恩·海尔格兰德) 亚历山大 / 《康斯坦丁》(2005, 弗朗西斯·劳伦斯) 约翰·康斯坦丁",
      referenceEn: "\"The Order\" (2003, Brian Helgeland) Alexander / \"Constantine\" (2005, Francis Lawrence) John Constantine"
    },
    {
      id: "resurrectionist",
      name: "盗尸人",
      nameEn: "Resurrectionist",
      def: "为医学院或黑市供应尸体的非法掘尸者。在19世纪解剖学需求下大量活跃。",
      defEn: "Illegal body-snatcher supplying corpses to medical schools or black markets. Highly active during 19th-century anatomy demand.",
      core: "月光下撬开的新坟棺盖 vs 裹在油布里运走的僵冷肢体。死者的安息是他的营业额。",
      coreEn: "Freshly pried coffin lids under moonlight vs. stiff limbs wrapped in oilcloth. The dead's rest is his revenue.",
      reference: "《科学怪人》(1931, 詹姆斯·惠尔) 弗里茨 / 《乱世妙人》(2010, 约翰·乔恩·兰达尔) 盗尸团伙",
      referenceEn: "\"Frankenstein\" (1931, James Whale) Fritz / \"Burke and Hare\" (2010, John Landis) Burke & Hare"
    },
    {
      id: "psychopomp",
      name: "引渡者/摆渡人",
      nameEn: "Psychopomp",
      def: "在神话与民间信仰中负责引导亡灵前往彼岸世界的超自然存在或职能者。",
      defEn: "Supernatural being or functionary in myth and folklore responsible for guiding souls of the dead to the afterworld.",
      core: "永远停靠在雾中渡口的黑色小船 vs 递出去就再也握不住的冰冷船桨。他是最后一程的司机，目的地不可退票。",
      coreEn: "Black boat forever moored at the fog-shrouded ferry vs. the cold oar, once handed over, never grasped again. The driver of the final journey — destination non-refundable.",
      reference: "《寻梦环游记》(2017, 李·安克里奇) 引渡者 / 《哈利·波特与死亡圣器》(2011, 大卫·叶茨) 邓布利多(国王十字站)",
      referenceEn: "\"Coco\" (2017, Lee Unkrich) Guide / \"Harry Potter and the Deathly Hallows\" (2011, David Yates) Dumbledore (King's Cross)"
    },
    {
      id: "exhumator",
      name: "验尸官",
      nameEn: "Coroner",
      def: "在司法程序中负责确认死因、签发死亡证明的官方医务人员。",
      defEn: "Official medical officer responsible for determining cause of death and issuing death certificates within judicial procedures.",
      core: "解剖台的冷白灯光 vs 拉链合上的那声金属碰撞。每一具尸体都是一个没说完的故事。",
      coreEn: "Cold white light of the autopsy table vs. the metallic click of the zipper closing. Every corpse is an unfinished story.",
      reference: "《开膛街》(2001, 休斯兄弟) 弗雷德里克·阿伯莱恩 / 《犯罪心理》(2005, 剧集) 验尸官团队",
      referenceEn: "\"From Hell\" (2001, Hughes Brothers) Frederick Abberline / \"Criminal Minds\" (2005, Series) Coroner Team"
    },
    {
      id: "crypt_keeper",
      name: "地窖看守",
      nameEn: "Crypt Keeper",
      def: "教堂或家族地下墓穴的专职看管人。维护石棺、管理墓室通道与防止盗掘。",
      defEn: "Dedicated custodian of church or family underground crypts. Maintaining sarcophagi, managing catacombs, and preventing desecration.",
      core: "永远照不亮尽头的地窖走廊 vs 石棺上渗出的不明液体。在地下，时间是另一种质地。",
      coreEn: "Crypt corridors whose ends never catch light vs. unknown fluid seeping from sarcophagi. Underground, time has a different texture.",
      reference: "《范海辛》(2004, 斯蒂芬·索莫斯) 地窖看守 / 《魔宫传奇》(1984, 史蒂文·斯皮尔伯格) 地下神庙守卫",
      referenceEn: "\"Van Helsing\" (2004, Stephen Sommers) Crypt Keeper / \"Indiana Jones and the Temple of Doom\" (1984, Steven Spielberg) Temple Guards"
    },
    {
      id: "professional_mourner",
      name: "哭灵人",
      nameEn: "Professional Mourner",
      def: "在葬礼上受雇以恸哭嚎啕渲染悲伤氛围的仪式性从业者。以表演性悲痛完成丧葬程序的情感需求。",
      defEn: "Ritual practitioner hired to wail and weep at funerals, intensifying the atmosphere of grief. Fulfilling the emotional demands of burial rites through performative sorrow.",
      core: "每一滴眼泪都是明码标价的商品 vs 哭到失控时分不清哪些是演的。她是悲伤的代工厂，用嗓子替陌生人偿还眼泪的债。",
      coreEn: "Every tear is a price-tagged commodity vs. losing track of what's performed when the wailing spirals. She is grief's subcontractor, repaying a stranger's debt in tears with her throat.",
      reference: "《大红灯笼高高挂》(1991, 张艺谋) 丧仪哭灵 / 《阿玛柯德》(1973, 费德里科·费里尼) 葬礼哭灵队列",
      referenceEn: "\"Raise the Red Lantern\" (1991, Zhang Yimou) Funeral Keening / \"Amarcord\" (1973, Federico Fellini) Funeral Mourning Procession"
    }
  ]
};
