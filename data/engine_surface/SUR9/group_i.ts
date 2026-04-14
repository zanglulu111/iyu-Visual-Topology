import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_I: LibraryCategoryDef = {
  id: "orig_nobility",
  name: "09. 权贵与血统 (Nobility & Bloodline)",
  nameEn: "Nobility & Bloodline",
  desc: "拥有古老姓氏、土地和特权的身份群落。以血脉、家族与世袭制度为核心的社会上层。",
  defEn: "Identity groups possessing ancient surnames, lands, and privileges. Social upper strata centered on bloodline, family, and hereditary systems.",
  items: [
    {
      id: "monarch_heir",
      name: "王储/皇族",
      nameEn: "The Heir",
      def: "皇位或最高权柄的第一顺位继承人。自出生起便作为国家象征被培养。",
      defEn: "First in line to the throne or supreme authority. Groomed as a national symbol from birth.",
      core: "我的存在是王冠的延伸，而非我本身。肉身即国家，呼吸即政治。",
      coreEn: "My existence is an extension of the crown, not myself. The body is the state, every breath is politics.",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 保罗·厄崔迪 / 《王冠》(2016, 剧集) 伊丽莎白二世",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Paul Atreides / \"The Crown\" (2016, Series) Queen Elizabeth II"
    },
    {
      id: "fallen_aristocrat",
      name: "没落贵族",
      nameEn: "Fallen Aristocrat",
      def: "失去封地与财富、仅靠旧日荣耀维系尊严的衰败世家后裔。",
      defEn: "Descendant of a declining noble house, having lost estates and wealth, maintaining dignity only through remnants of past glory.",
      core: "为了擦亮银器，我卖掉了灵魂。头衔是金色的，但钱包是空的。",
      coreEn: "I sold my soul just to polish the silverware. The title is golden, but the wallet is empty.",
      reference: "《欲望号街车》(1951, 伊利亚·卡赞) 布兰奇·杜波依斯 / 《没落狂花》(1975, 阿尔伯特·梅索斯) 埃迪母女",
      referenceEn: "\"A Streetcar Named Desire\" (1951, Elia Kazan) Blanche DuBois / \"Grey Gardens\" (1975, Albert Maysles) Big Edie & Little Edie"
    },
    {
      id: "feudal_lord",
      name: "封建领主",
      nameEn: "Feudal Lord",
      def: "拥有土地、私兵和对治下臣民生杀大权的封建地区统治者。",
      defEn: "Feudal regional ruler possessing land, private armies, and the power of life and death over subjects.",
      core: "这片土地上流淌的每一滴血均属于我。疆界是用骨头划的。",
      coreEn: "Every drop of blood on this land belongs to me. Borders are drawn with bones.",
      reference: "《权力的游戏》(2011, 剧集) 泰温·兰尼斯特 / 《勇敢的心》(1995, 梅尔·吉布森) 英格兰贵族领主",
      referenceEn: "\"Game of Thrones\" (2011, Series) Tywin Lannister / \"Braveheart\" (1995, Mel Gibson) English Nobles"
    },
    {
      id: "courtier",
      name: "宫廷权臣",
      nameEn: "Courtier",
      def: "寄生于皇权阴影之下、依靠信息操控与利益编织掌握实权的宫廷政治家。",
      defEn: "Palace politician parasitizing royal shadows, holding real power via information manipulation and interest-weaving.",
      core: "真理只存在于陛下耳边的低语之中。刀不在手里，在舌头上。",
      coreEn: "Truth exists only in whispers by His Majesty's ear. The blade is not in the hand, but on the tongue.",
      reference: "《权力的游戏》(2011, 剧集) 瓦里斯 / 《琅琊榜》(2015, 剧集) 梅长苏",
      referenceEn: "\"Game of Thrones\" (2011, Series) Varys / \"Nirvana in Fire\" (2015, Series) Mei Changsu"
    },
    {
      id: "old_money",
      name: "老钱家族",
      nameEn: "Old Money",
      def: "经历数代沉淀的资本权贵家族。以隐秘的社交网络、品味与传统隔绝新贵。",
      defEn: "Capital elite family settled over generations. Insulating from nouveau riche via hidden social networks, taste, and tradition.",
      core: "我们不谈钱，我们只谈血统的纯净与礼节。门槛不是价格，是时间。",
      coreEn: "We don't talk about money; we talk of pure bloodlines and etiquette. The threshold is not price, but time.",
      reference: "《了不起的盖茨比》(2013, 巴兹·鲁赫曼) 汤姆·布坎南 / 《继承之战》(2018, 剧集) 洛根·罗伊",
      referenceEn: "\"The Great Gatsby\" (2013, Baz Luhrmann) Tom Buchanan / \"Succession\" (2018, Series) Logan Roy"
    },
    {
      id: "bastard",
      name: "私生子",
      nameEn: "The Bastard",
      def: "携带高贵血统却被正统宗法秩序拒之门外的非婚生后裔。",
      defEn: "Illegitimate offspring carrying noble blood but locked out of the orthodox patriarchal order.",
      core: "我血管里的血与他一样红，但我只能坐在阴影里。名字是借来的，姓氏是偷来的。",
      coreEn: "The blood in my veins is as red as his, but I can only sit in shadows. The name is borrowed, the surname stolen.",
      reference: "《权力的游戏》(2011, 剧集) 琼恩·雪诺 / 《李尔王》(2018, 理查德·艾尔) 爱德蒙",
      referenceEn: "\"Game of Thrones\" (2011, Series) Jon Snow / \"King Lear\" (2018, Richard Eyre) Edmund"
    },
    {
      id: "religious_leader",
      name: "圣职世家",
      nameEn: "Religious Scion",
      def: "出生于教廷或神圣秩序顶端的宗教世家后裔。被期许为信仰体系的纯洁化身。",
      defEn: "Descendant of a religious dynasty born at the apex of the theocracy. Expected to embody the pure incarnation of the faith system.",
      core: "我是经文的载体，神不允许我拥有肉身。每一次心跳都是渎神。",
      coreEn: "I am a vessel for scriptures; God forbids me flesh. Every heartbeat is blasphemy.",
      reference: "《教宗的继承》(2019, 费尔南多·梅里尔斯) 教宗方济各 / 《年轻的教宗》(2016, 保罗·索伦蒂诺) 庇护十三世",
      referenceEn: "\"The Two Popes\" (2019, Fernando Meirelles) Pope Francis / \"The Young Pope\" (2016, Paolo Sorrentino) Pope Pius XIII"
    },
    {
      id: "warlord_clan",
      name: "军阀后代",
      nameEn: "Warlord Clan",
      def: "在战火、铁腕与火药统治下崛起的军事强人家族继承者。",
      defEn: "Heir to a military strongman family risen through war, iron fists, and gunpowder.",
      core: "真理只在射程之内。我不开枪，我就不存在。",
      coreEn: "Truth exists only within range. If I don't shoot, I don't exist.",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 哈克南男爵 / 《疯狂的麦克斯4》(2015, 乔治·米勒) 不死老乔",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Baron Harkonnen / \"Mad Max: Fury Road\" (2015, George Miller) Immortan Joe"
    },
    {
      id: "political_dynasty",
      name: "政治门阀",
      nameEn: "Political Dynasty",
      def: "世代操控政局、将家族声望与公共权力绑定的政治世家。",
      defEn: "Political dynasty manipulating governance for generations, binding family prestige with public power.",
      core: "我们的一举一动都是教科书上的编年史。没有私我，只有选票。",
      coreEn: "Our every move constitutes the chronicles. No private self, only votes.",
      reference: "《纸牌屋》(2013, 剧集) 弗兰克·安德伍德 / 《教父》(1972, 弗朗西斯·福特·科波拉) 维托·柯里昂",
      referenceEn: "\"House of Cards\" (2013, Series) Frank Underwood / \"The Godfather\" (1972, Francis Ford Coppola) Vito Corleone"
    },
    {
      id: "vampire_elder",
      name: "吸血鬼/永生长老",
      nameEn: "Vampire Elder",
      def: "跨越数个世纪、积累了庞大财富但生命已彻底停滞的永生种族统治者。",
      defEn: "Immortal race ruler crossing centuries, amassing vast wealth but with existence utterly stagnated.",
      core: "永生不过是一场没有出口的无聊漫步。时间是他的牢房，血是他的餐票。",
      coreEn: "Immortality is merely a tedious stroll with no exit. Time is his cell, blood his meal ticket.",
      reference: "《黑夜传说》(2003, 伦·怀斯曼) 维克多 / 《夜访吸血鬼》(1994, 尼尔·乔丹) 阿曼德",
      referenceEn: "\"Underworld\" (2003, Len Wiseman) Viktor / \"Interview with the Vampire\" (1994, Neil Jordan) Armand"
    },
    {
      id: "exiled_royal",
      name: "流亡皇室",
      nameEn: "Exiled Royal",
      def: "国家已亡、王座倾覆，带着仅存的象征印记在异国他乡流浪的前朝正统。",
      defEn: "The nation has fallen; wandering foreign lands holding only the symbolic seals of a defunct orthodox dynasty.",
      core: "我随身携带的行李箱里装着一个死掉的帝国。护照是假的，血统是真的。",
      coreEn: "My suitcase holds a dead empire. The passport is fake, the bloodline is real.",
      reference: "《权力的游戏》(2011, 剧集) 丹妮莉丝·坦格利安 / 《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 溥仪",
      referenceEn: "\"Game of Thrones\" (2011, Series) Daenerys Targaryen / \"The Last Emperor\" (1987, Bernardo Bertolucci) Puyi"
    },
    {
      id: "secret_heir",
      name: "秘密继承人",
      nameEn: "Secret Heir",
      def: "在底层长大、不知道自己真实身世，却随时可能引爆顶层权力洗牌的隐藏血脉。",
      defEn: "Raised at the bottom, unaware of true lineage; a hidden bloodline capable of triggering a power reshuffle at any time.",
      core: "我以为我是一根野草，直到他们拿着王座来杀我。",
      coreEn: "I thought I was a weed, until they came with a throne to kill me.",
      reference: "《星球大战》(1977, 乔治·卢卡斯) 卢克·天行者 / 《亚瑟王》(2017, 盖·里奇) 亚瑟",
      referenceEn: "\"Star Wars\" (1977, George Lucas) Luke Skywalker / \"King Arthur: Legend of the Sword\" (2017, Guy Ritchie) Arthur"
    },
    {
      id: "tribal_chief",
      name: "部落酋长",
      nameEn: "Tribal Chief",
      def: "古老、原始或神秘部落的最高掌舵者。其权威源于神话传说与自然的契约。",
      defEn: "Supreme helmsman of an ancient or mystical tribe. Authority derived from covenants with myth and nature.",
      core: "祖先的眼睛在林间看着我们，而你们的钢铁正铲断树根。",
      coreEn: "The ancestors' eyes watch us from the woods, while your steel severs the roots.",
      reference: "《黑豹》(2018, 瑞恩·库格勒) 特查拉 / 《阿凡达》(2009, 詹姆斯·卡梅隆) 杰克·萨利",
      referenceEn: "\"Black Panther\" (2018, Ryan Coogler) T'Challa / \"Avatar\" (2009, James Cameron) Jake Sully"
    },
    {
      id: "oligarch_scion",
      name: "寡头之子",
      nameEn: "Oligarch Scion",
      def: "垄断能源、军工或核心科技的独裁型资本帝国的直接继承者。",
      defEn: "Direct heir to a dictatorial capital empire monopolizing energy, arms, or core tech.",
      core: "法律是可以购买的条款，而我是连印钞机都能买下的人。",
      coreEn: "Laws are purchasable clauses; I can buy the printing press itself.",
      reference: "《蝙蝠侠：侠影之谜》(2005, 克里斯托弗·诺兰) 布鲁斯·韦恩 / 《钢铁侠》(2008, 乔恩·费儒) 托尼·斯塔克",
      referenceEn: "\"Batman Begins\" (2005, Christopher Nolan) Bruce Wayne / \"Iron Man\" (2008, Jon Favreau) Tony Stark"
    },
    {
      id: "cult_messiah",
      name: "邪教弥赛亚",
      nameEn: "Cult Messiah",
      def: "自出生便被狂热信徒视为神圣降临容器的被动圣婴。没有个人自由，只有符号价值。",
      defEn: "Passive holy infant viewed since birth by fanatics as the sacred vessel of divine descent. No personal freedom, only symbolic value.",
      core: "我的每一次呼吸都是他们的启示，但我不过是只没有名字的鸟。",
      coreEn: "My every breath is their revelation, but I am just a nameless bird.",
      reference: "《沙丘2》(2024, 丹尼斯·维伦纽瓦) 保罗·厄崔迪 / 《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥",
      referenceEn: "\"Dune: Part Two\" (2024, Denis Villeneuve) Paul Atreides / \"The Matrix\" (1999, The Wachowskis) Neo"
    }
  ]
};
