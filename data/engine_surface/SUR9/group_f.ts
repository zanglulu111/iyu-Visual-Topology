import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_F: LibraryCategoryDef = {
  id: "prof_faith",
  name: "06. 信仰与秘术 (Faith & Occult)",
  nameEn: "Faith & Occult",
  desc: "围绕超自然信仰与神秘实践运作的职业群落。布道、驱魔、占卜、苦修——在神圣与禁忌之间行走。",
  defEn: "Professional communities operating around supernatural belief and mystical practice. Preaching, exorcism, divination, asceticism — walking between the sacred and the forbidden.",
  items: [
    {
      id: "priest",
      name: "神父/牧师",
      nameEn: "Priest",
      def: "宗教团体的正式授权神职人员。主持礼拜、施行圣事、提供灵性指导与告解服务。",
      defEn: "Formally ordained clergy of a religious body. Conducting worship, administering sacraments, providing spiritual guidance and confession.",
      core: "告解室格栅后深不见底的黑洞 vs 被无数眼泪浸泡到发酸的圣经。他是上帝的代言人，也是信徒秘密的保险柜。",
      coreEn: "The bottomless black hole behind confessional grilles vs. Bibles sour from endless tears. God's spokesperson and the vault of believers' secrets.",
      reference: "《驱魔人》(1973, 威廉·弗莱德金) 卡拉斯神父 / 《聚焦》(2015, 汤姆·麦卡锡) 神父群体",
      referenceEn: "\"The Exorcist\" (1973, William Friedkin) Father Karras / \"Spotlight\" (2015, Tom McCarthy) The Priests"
    },
    {
      id: "cult_leader",
      name: "邪教教主",
      nameEn: "Cult Leader",
      def: "自立教派并对追随者实施精神控制的非正统宗教领袖。通过隔离、洗脑与仪式维持绝对权威。",
      defEn: "Unorthodox religious leader founding a sect and exerting psychological control over followers. Maintaining absolute authority through isolation, indoctrination, and ritual.",
      core: "混合了致幻毒药的浑浊圣水 vs 无数狂信徒空洞流血的眼眶。神是他发明的，天堂是他定价的。",
      coreEn: "Cloudy holy water laced with hallucinogens vs. thousands of bleeding hollow fanatic eye sockets. God is his invention, heaven has his price tag.",
      reference: "《仲夏夜惊魂》(2019, 阿里·艾斯特) 西芙 / 《双瞳》(2002, 陈国富) 谢亚理",
      referenceEn: "\"Midsommar\" (2019, Ari Aster) Siv / \"Double Vision\" (2002, Chen Kuo-fu) Hsieh Ya-li"
    },
    {
      id: "nun",
      name: "修女",
      nameEn: "Nun",
      def: "发愿加入女修会并遵守贞洁、贫穷、服从三誓的女性宗教修行者。",
      defEn: "Female religious practitioner taking vows to join a convent, observing the triple vows of chastity, poverty, and obedience.",
      core: "紧密包裹皮肤的刺人黑白布料 vs 石砖地上重磕发红的双膝。围墙之内，世界被缩减为祈祷与沉默。",
      coreEn: "Suffocating prickling black-and-white fabric vs. red knees crashing on stone tiles. Within these walls, the world is reduced to prayer and silence.",
      reference: "《修女艾达》(2013, 保罗·帕夫利克夫斯基) 艾达 / 《招魂2》(2016, 温子仁) 瓦拉克",
      referenceEn: "\"Ida\" (2013, Paweł Pawlikowski) Ida / \"The Conjuring 2\" (2016, James Wan) Valak"
    },
    {
      id: "exorcist",
      name: "驱魔人",
      nameEn: "Exorcist",
      def: "接受宗教授权对被附体者施行驱魔仪式的神职人员或灵媒。以经文与圣物为工具。",
      defEn: "Clergy or medium authorized by religion to perform exorcism on the possessed. Using scripture and relics as tools.",
      core: "死死抵住狂暴扭曲肉身的带血十字架 vs 被不明液体腐蚀烧毁的圣经残页。信仰是他的盾，也是他的赌注。",
      coreEn: "Bloody crucifix pressed against thrashing twisted flesh vs. Bible pages burned by unknown fluids. Faith is both shield and wager.",
      reference: "《康斯坦丁》(2005, 弗朗西斯·劳伦斯) 约翰·康斯坦丁 / 《邪恶力量》(2005, 剧集) 温彻斯特兄弟",
      referenceEn: "\"Constantine\" (2005, Francis Lawrence) John Constantine / \"Supernatural\" (2005, Series) Winchester Brothers"
    },
    {
      id: "shaman",
      name: "萨满/巫医",
      nameEn: "Shaman",
      def: "原始宗教中沟通人界与灵界的中介者。通过仪式、致幻植物与身体苦行进入出神状态。",
      defEn: "Intermediary between the human and spirit worlds in primal religions. Entering trance states via ritual, psychoactive plants, and physical ordeal.",
      core: "浸泡着草药与死物的滚烫坩埚 vs 火堆前癫痫抽搐翻白眼的肉身。他是两个世界之间的活电线。",
      coreEn: "Boiling cauldrons of herbs and dead matter vs. epileptic eye-rolling thrashes before the fire. A living wire between two worlds.",
      reference: "《启示》(2006, 梅尔·吉布森) 大祭司 / 《疯狂的麦克斯4》(2015, 乔治·米勒) 战争男孩",
      referenceEn: "\"Apocalypto\" (2006, Mel Gibson) High Priest / \"Mad Max: Fury Road\" (2015, George Miller) War Boys"
    },
    {
      id: "prophet",
      name: "先知/预言家",
      nameEn: "Prophet",
      def: "宣称接收到超自然启示并向世人传达预警或神谕的人物。声称能预见未来或解读天意。",
      defEn: "Figure claiming to receive supernatural revelation and convey warnings or divine messages. Claiming foresight of the future or interpretation of divine will.",
      core: "眼眶流出血泪的苍茫目盲者 vs 被巨石砸倒却仍在低语末日的可怜虫。没有人想听到真相，尤其当真相是末日。",
      coreEn: "Blind elder weeping blood tears vs. crushed bug whispering the Apocalypse. No one wants to hear the truth, especially when the truth is the end.",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 保罗·厄崔迪 / 《黑客帝国》(1999, 沃卓斯基姐妹) 先知",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Paul Atreides / \"The Matrix\" (1999, The Wachowskis) The Oracle"
    },
    {
      id: "monk",
      name: "苦行僧",
      nameEn: "Ascetic Monk",
      def: "通过严格的禁欲、断食与肉体折磨追求灵性净化的极端修行者。",
      defEn: "Extreme practitioner pursuing spiritual purification through strict abstinence, fasting, and physical mortification.",
      core: "钉在满是锈钉木板上残破的背部 vs 饿至皮包骨的躯干。用最大的痛苦交换最小的神性。",
      coreEn: "Broken spine nailed to rusty spike-boards vs. torsos starved to stretched skin. Trading maximum pain for minimum divinity.",
      reference: "《达芬奇密码》(2006, 朗·霍华德) 塞拉斯 / 《新少林寺》(2011, 陈木胜) 净能",
      referenceEn: "\"The Da Vinci Code\" (2006, Ron Howard) Silas / \"Shaolin\" (2011, Benny Chan) Jing Neng"
    },
    {
      id: "inquisitor",
      name: "异端审判官",
      nameEn: "Inquisitor",
      def: "宗教机构授权的信仰执法者。负责调查、审判并惩罚被认定为异端的个人或群体。",
      defEn: "Faith enforcer authorized by religious institutions. Responsible for investigating, trying, and punishing individuals or groups deemed heretical.",
      core: "烧得通红烙铁上滋滋冒烟的人皮 vs 面具后冷酷无极的金属寒光。以神的名义行使地狱的刑罚。",
      coreEn: "Human skin smoking on red-hot brands vs. cold metallic glare behind iron masks. Wielding hell's punishments in God's name.",
      reference: "《玫瑰的名字》(1986, 让-雅克·阿诺) 伯尔纳多·圭 / 《星球大战：义军崛起》(2014, 剧集) 帝国判官",
      referenceEn: "\"The Name of the Rose\" (1986, Jean-Jacques Annaud) Bernardo Gui / \"Star Wars Rebels\" (2014, Series) Inquisitor"
    },
    {
      id: "oracle",
      name: "神谕者",
      nameEn: "Oracle",
      def: "在古代宗教中担任神意传达者的祭司或女祭司。通过入神仪式接收并传递神的旨意。",
      defEn: "Priest or priestess serving as divine mouthpiece in ancient religions. Receiving and conveying divine will through trance rituals.",
      core: "深渊裂缝中喷涌的绿色氤氲毒气 vs 被毒性熏瞎翻白的抽搐双眼。她是神的嘴巴，但声音经过她的时候会灼伤她的喉咙。",
      coreEn: "Green miasma spewing from abyss-rifts vs. convulsing white eyes blinded by toxic fumes. She is God's mouth, but the voice burns her throat passing through.",
      reference: "《斯巴达克斯》(2010, 剧集) 预言者 / 《斯巴达300勇士》(2006, 扎克·施奈德) 预言童女",
      referenceEn: "\"Spartacus\" (2010, Series) Oracle / \"300\" (2006, Zack Snyder) The Oracle Girl"
    },
    {
      id: "witch",
      name: "女巫",
      nameEn: "Witch",
      def: "实践巫术、草药学与民间仪式的非正统灵性从业者。通常在主流宗教体系之外独立运作。",
      defEn: "Unorthodox spiritual practitioner of witchcraft, herbalism, and folk ritual. Typically operating independently outside mainstream religious systems.",
      core: "黑锅里搅动的纠缠残肢 vs 黑夜森林中燃烧扭曲红光的五芒星。她的力量来自秩序不愿正视的角落。",
      coreEn: "Entangled limbs stirred in black pots vs. pentagrams burning twisted red in dark woods. Her power comes from the corners order refuses to face.",
      reference: "《女巫》(2015, 罗伯特·艾格斯) 汤玛辛 / 《韩赛尔与格蕾特：女巫猎人》(2013, 托米·维尔科拉) 穆里尔",
      referenceEn: "\"The Witch\" (2015, Robert Eggers) Thomasin / \"Hansel & Gretel: Witch Hunters\" (2013, Tommy Wirkola) Muriel"
    },
    {
      id: "occultist",
      name: "秘术师",
      nameEn: "Occultist",
      def: "研究与实践神秘学、炼金术或禁忌知识的学者型从业者。通常拥有高等教育背景。",
      defEn: "Scholar-practitioner studying and practicing occultism, alchemy, or forbidden knowledge. Typically with higher education background.",
      core: "高级定制西服袖口下隐藏的割腕血痂 vs 塞满拉丁文与宇宙几何的泛黄书卷。文明的外壳包裹着最野蛮的渴望。",
      coreEn: "Cut-wrist scabs hidden under bespoke suit cuffs vs. yellowing scrolls stuffed with Latin and cosmic geometry. Civilization's shell wrapping the most savage yearning.",
      reference: "《第九道门》(1999, 罗曼·波兰斯基) 迪恩·科索 / 《钢之炼金术师》(2009, 入江泰浩) 父亲大人",
      referenceEn: "\"The Ninth Gate\" (1999, Roman Polanski) Dean Corso / \"Fullmetal Alchemist: Brotherhood\" (2009, Yasuhiro Irie) Father"
    },
    {
      id: "televangelist",
      name: "电视布道家",
      nameEn: "Televangelist",
      def: "利用电视、网络等大众传媒进行宗教布道并募集资金的公众宗教人物。",
      defEn: "Public religious figure using television, internet, and mass media for religious preaching and fundraising.",
      core: "刺眼的电视演播室大光灯 vs 在千万绝症信徒前浮夸倒地的假装神迹。信仰被包装成了黄金时段的付费节目。",
      coreEn: "Blinding TV studio lamps vs. exaggerated fake miracles before millions of dying faithful. Faith repackaged as prime-time pay-per-view.",
      reference: "《塔米·菲的眼泪》(2021, 迈克尔·肖沃特) 塔米·菲·贝克 / 《黑袍纠察队》(2019, 剧集) 以西结",
      referenceEn: "\"The Eyes of Tammy Faye\" (2021, Michael Showalter) Tammy Faye Bakker / \"The Boys\" (2019, Series) Ezekiel"
    },
    {
      id: "paladin",
      name: "狂信骑士/圣教军",
      nameEn: "Paladin/Crusader",
      def: "受宗教授权以武力捍卫信仰的军事化信徒。以教义为战争理由，以圣战为职业。",
      defEn: "Militarized believer authorized by religion to defend the faith by force. Using doctrine as casus belli, holy war as profession.",
      core: "沾满脑浆的沉重十字大剑 vs 被绝对信仰洗白的盲目眼神。他杀人的时候真心相信自己在行善。",
      coreEn: "Heavy crusader-sword plastered with brain matter vs. blind eyes bleached by absolute faith. He genuinely believes he is doing good while killing.",
      reference: "《天国王朝》(2005, 雷德利·斯科特) 十字军 / 《战锤40K》(游戏) 黑色圣堂武士",
      referenceEn: "\"Kingdom of Heaven\" (2005, Ridley Scott) Crusaders / \"Warhammer 40,000\" (Game) Black Templars"
    },
    {
      id: "flagellant",
      name: "鞭笞者",
      nameEn: "Flagellant",
      def: "通过公开自我鞭打进行赎罪或宗教狂热表达的极端苦修者。中世纪瘟疫时期尤为常见。",
      defEn: "Extreme penitent performing public self-flagellation for atonement or fanatical religious expression. Especially common during medieval plague eras.",
      core: "每一次甩动都撕下自己后背一片烂肉的倒刺皮鞭 vs 染满鲜血走过的黑色石板路。他的血是给上帝的收据。",
      coreEn: "Barbed whips tearing back-flesh every swing vs. bleeding trails on black cobblestone. His blood is the receipt for God.",
      reference: "《第七封印》(1957, 英格玛·伯格曼) 苦行者 / 《达芬奇密码》(2006, 朗·霍华德) 塞拉斯",
      referenceEn: "\"The Seventh Seal\" (1957, Ingmar Bergman) Flagellants / \"The Da Vinci Code\" (2006, Ron Howard) Silas"
    },
    {
      id: "mortician",
      name: "入殓师/防腐者",
      nameEn: "Mortician",
      def: "对遗体进行清洁、防腐处理与美容修复的殡葬专业人员。在死亡与告别之间提供最后的服务。",
      defEn: "Funeral professional performing cleaning, embalming, and cosmetic restoration of remains. Providing final services between death and farewell.",
      core: "用防腐剂填充空洞的巨大注射器 vs 为惨白嘴唇涂上娇艳红色的化妆刷。他让死者看起来像睡着了。",
      coreEn: "Giant syringes filling hollows with embalming fluid vs. makeup brushes painting pale lips bright red. He makes the dead look only asleep.",
      reference: "《入殓师》(2008, �的田洋二郎) 小林大悟 / 《无名女尸》(2016, 安德烈·艾弗道夫) 汤米·蒂尔登",
      referenceEn: "\"Departures\" (2008, Yojiro Takita) Daigo Kobayashi / \"The Autopsy of Jane Doe\" (2016, André Øvredal) Tommy Tilden"
    }
  ]
};
