import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_I: LibraryCategoryDef = {
  id: "orig_nobility",
  name: "1. 权贵与血统 (Nobility & Bloodline)",
  nameEn: " Nobility & Bloodline",
  desc: "拥有古老的姓氏、土地和特权。背负家族的荣耀与诅咒。",
  descEn: "Possessing ancient surnames, lands, and privileges. Bearing the glory and curse of bloodlines.",
  items: [
    {
      id: "monarch_heir",
      name: "王储/皇族", nameEn: "The Heir",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "皇位或最高权柄的第一继承人，肉身即是国家的象征界实体。",
      defEn: "First in line to the throne; the physical body is the Symbolic entity of the state.",
      core: "我的存在是王冠的眼神，而非我本身。 | 代偿 ($): 个人意志 (Personal Will)",
      coreEn: "My existence is an extension of the crown, not myself. | Compensation ($): Personal Will",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 保罗·厄崔迪；《王冠》(2016, 系列剧) 伊丽莎白二世",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Paul Atreides; \"The Crown\" (2016, Series) Queen Elizabeth II; \"Dune\" Paul, forced into assassination plots since birth, marching toward a god-throne sacrificing all private emotion; \"The Crown\" the young Queen feeling her mortal self brutally strangled by the golden crown during a hyper-gorgeous coronation."
    },
    {
      id: "fallen_aristocrat",
      name: "没落贵族", nameEn: "Fallen Aristocrat",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "失去封地与财富，仅靠旧日荣耀的幻象（能指）维系尊严的畸灵。",
      defEn: "Lost lands and wealth, maintaining dignity only through the phantom signifiers of past glory.",
      core: "为了擦亮银器，我卖掉了灵魂。 | 代偿 ($): 现实财富 (Material Wealth)",
      coreEn: "I sold my soul just to polish the silverware. | Compensation ($): Material Wealth",
      reference: "《欲望号街车》(1951, 伊利亚·卡赞) 布兰奇·杜波依斯；《没落狂花》(1975, 阿尔伯特·梅索斯等) 埃迪母女",
      referenceEn: "\"A Streetcar Named Desire\" (1951, Elia Kazan) Blanche DuBois; \"Grey Gardens\" (1975, Albert Maysles) Big Edie & Little Edie; \"A Streetcar Named Desire\" Blanche breaking down clinging to upper-class illusions in dirty old gowns; \"Grey Gardens\" eerie mother/daughter squatting in a huge crumbling mansion relying on moldy memories of elite banquets."
    },
    {
      id: "feudal_lord",
      name: "封建领主", nameEn: "Feudal Lord",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "拥有土地、私兵和对治下臣民生杀大权的一方霸主。",
      defEn: "A regional overlord possessing land, private armies, and the power of life and death over subjects.",
      core: "这片土地上流淌的每一滴血均属于我。 | 代偿 ($): 边界感 (Sense of Boundary)",
      coreEn: "Every drop of blood on this land belongs to me. | Compensation ($): Sense of Boundary",
      reference: "《权力的游戏》(2011, 系列剧) 泰温·兰尼斯特；《勇敢的心》(1995, 梅尔·吉布森) 英格兰贵族领主",
      referenceEn: "\"Game of Thrones\" (2011, Series) Tywin Lannister; \"Braveheart\" (1995, Mel Gibson) English Nobles; \"Game of Thrones\" Tywin Lannister arrogantly enforcing pureblood hegemony even held at crossbow-point on a toilet; \"Braveheart\" nobles butchering peasants like firewood using heavy lances on vast greens enforcing Droit du Seigneur."
    },
    {
      id: "courtier",
      name: "宫廷权臣", nameEn: "Courtier",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "寄生于皇权阴影之下，依靠信息的操控与利益的编绕掌握实权的巨头。",
      defEn: "A magnate parasitizing the shadow of royal power, holding real authority via information manipulation.",
      core: "真理只存在于陛下耳边的低语之中。 | 代偿 ($): 直接暴力 (Direct Violence)",
      coreEn: "Truth exists only in the whispers by His Majesty's ear. | Compensation ($): Direct Violence",
      reference: "《权力的游戏》(2011, 系列剧) 瓦里斯；《琅琊榜》(2015, 系列剧) 梅长苏",
      referenceEn: "\"Game of Thrones\" (2011, Series) Varys; \"Nirvana in Fire\" (2015, Series) Mei Changsu; \"Game of Thrones\" Varys the toxic spider gliding in Red Keep secret passages gracefully ruining foes with little birds; \"Nirvana in Fire\" Mei Changsu beside dim braziers in a fur coat making lords bleed by flipping wooden tokens."
    },
    {
      id: "old_money",
      name: "老钱家族", nameEn: "Old Money",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "经历数代沉淀的资本权贵，用隐秘的常春藤网络和品味隔绝新贵。",
      defEn: "Capital elite settled over generations, insulating themselves from nouveau riche via hidden networks and taste.",
      core: "我们不谈钱，我们只谈血统的纯净与礼节。 | 代偿 ($): 温度 (Warmth)",
      coreEn: "We don't talk about money; we talk of pure bloodlines and etiquette. | Compensation ($): Warmth",
      reference: "《了不起的盖茨比》(2013, 巴兹·鲁赫曼) 汤姆·布坎南；《继承之战》(2018, 系列剧) 洛根·罗伊",
      referenceEn: "\"The Great Gatsby\" (2013, Baz Luhrmann) Tom Buchanan; \"Succession\" (2018, Series) Logan Roy; \"The Great Gatsby\" Tom and Daisy retreating into their unbreachable estate without a speck of guilt after fatal hit-and-runs; \"Succession\" ultra-classic hunting banquets deploying cold micro-aggressive stares to utterly crush nouveau-riche upstarts."
    },
    {
      id: "bastard",
      name: "私生子", nameEn: "The Bastard",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "携带高贵血统却被正统秩序拒之门外的边缘存在。",
      defEn: "Possessing noble blood but locked out of the orthodox order; a marginal existence.",
      core: "我血管里的血与他一样红，但我只能坐在阴影里。 | 代偿 ($): 承认 (Recognition)",
      coreEn: "The blood in my veins is as red as his, but I can only sit in the shadows. | Lack ($): Recognition",
      reference: "《权力的游戏》(2011, 系列剧) 琼恩·雪诺；《李尔王》(2018, 理查德·艾尔) 爱德蒙",
      referenceEn: "\"Game of Thrones\" (2011, Series) Jon Snow; \"King Lear\" (2018, Richard Eyre) Edmund; \"Game of Thrones\" Jon Snow forced to the table's edge denied the direwolf sigil, carving a brutal path in icy corpse-mountains; \"King Lear\" Edmund humiliated by birthright, driven to hyper-toxic madness burying all noble blood in graves."
    },
    {
      id: "religious_leader",
      name: "圣职世家", nameEn: "Religious Scion",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "诞生在教廷或神圣秩序顶端，被期许为神在地上的纯洁代号。",
      defEn: "Born at the apex of the theocracy, expected to act as the pure vessel for God on Earth.",
      core: "我是经文的载体，神不允许我拥有肉身。 | 代偿 ($): 世俗情欲 (Secular Desires)",
      coreEn: "I am a vessel for scriptures; God forbids me flesh. | Compensation ($): Secular Desires",
      reference: "《教宗的继承》(2019, 费尔南多·梅里尔斯) 教宗方济各；《年轻的教宗》(2016, 保罗·索伦蒂诺) 庇护十三世",
      referenceEn: "\"The Two Popes\" (2019, Fernando Meirelles) Pope Francis; \"The Young Pope\" (2016, Paolo Sorrentino) Pope Pius XIII; \"The Two Popes\" staring breathless beneath gargantuan Vatican frescoes burdened by centuries of humanity's filthy sins; \"The Young Pope\" smoking beautifully/arrogantly pushing cardinals to despair via manic, absolute theological tyranny."
    },
    {
      id: "warlord_clan",
      name: "军阀后代", nameEn: "Warlord Clan",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "在战火、铁腕与火药统治下崛起的暴戾家族继承者。",
      defEn: "Heir to a brutal family risen through war, iron fists, and gunpowder.",
      core: "真理只在射程之内。我不开枪，我就不存在。 | 代偿 ($): 脆弱 (Vulnerability)",
      coreEn: "Truth exists only within range. If I don't shoot, I don't exist. | Compensation ($): Vulnerability",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 弗拉迪米尔·哈克南男爵；《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 不死老乔",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Baron Vladimir Harkonnen; \"Mad Max: Fury Road\" (2015, George Miller) Immortan Joe; \"Dune\" Baron Harkonnen soaking in foul black oil, a greedy meat-mountain ruling via absolute bloody iron-fist bombardments; \"Mad Max: Fury Road\" Immortan Joe atop cliffs in skull-masks blessing thirsty slaves with flood-drops like a doom-warlord."
    },
    {
      id: "political_dynasty",
      name: "政治门阀", nameEn: "Political Dynasty",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "世代操控政局、如精密齿轮般将家族声望与公共权力绑定的一环。",
      defEn: "Generations manipulating politics, binding family prestige with public power like precision gears.",
      core: "我们的一举一动都是教科书上的编年史。没有私我，只有选票。 | 代偿 ($): 真实面孔 (True Face)",
      coreEn: "Our every move constitutes the chronicles. No private self, only votes. | Lack ($): True Face",
      reference: "《纸牌屋》(2013, 系列剧) 弗兰克·安德伍德；《教父》(1972, 弗朗西斯·福特·科波拉) 维托·柯里昂",
      referenceEn: "\"House of Cards\" (2013, Series) Frank Underwood; \"The Godfather\" (1972, Francis Ford Coppola) Vito Corleone; \"House of Cards\" generations rolling in the White House's blackest mud, maintaining pristine facades via cold marriages and dirty murders; \"The Godfather\" sliding Mafia blood into legit senator suits, an uncrowned king-family directly rigging US elections."
    },
    {
      id: "vampire_elder",
      name: "吸血鬼/永生长老", nameEn: "Vampire Elder",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "跨越数个世纪，积累了庞大财富但灵魂已彻底停滞的永生血族统治者。",
      defEn: "Immortal ruler crossing centuries, amassing vast wealth but with a totally halted soul.",
      core: "永生不过是一场没有出口的无聊漫步。 | 代偿 ($): 终点/死亡 (An End/Death)",
      coreEn: "Immortality is merely a tedious stroll with no exit. | Lack ($): An End/Death",
      reference: "《黑夜传说》(2003, 伦·怀斯曼) 维克多；《夜访吸血鬼》(1994, 尼尔·乔丹) 阿曼德",
      referenceEn: "\"Underworld\" (2003, Len Wiseman) Viktor; \"Interview with the Vampire\" (1994, Neil Jordan) Armand; \"Underworld\" Elder Viktor waking in hyper-cold ancient catacombs to rip armored lycans to bare shreds with bare hands; \"Interview with the Vampire\" vampires hiding murders as gorgeous high-theater in Paris for centuries like cold noble clockwork."
    },
    {
      id: "exiled_royal",
      name: "流亡皇室", nameEn: "Exiled Royal",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "国家已亡，王座倾覆，带着仅存的象征印记在异国他乡流浪的前朝正统。",
      defEn: "The nation has fallen; wandering foreign lands holding only the symbolic seals of a defunct orthodox dynasty.",
      core: "我随身携带的行李箱里装着一个死掉的帝国。 | 代偿 ($): 实效主权 (Effective Sovereignty)",
      coreEn: "My suitcase holds a dead empire. | Lack ($): Effective Sovereignty",
      reference: "《权力的游戏》(2011, 系列剧) 丹妮莉丝·坦格利安；《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 溥仪",
      referenceEn: "\"Game of Thrones\" (2011, Series) Daenerys Targaryen; \"The Last Emperor\" (1987, Bernardo Bertolucci) Puyi; \"Game of Thrones\" early Daenerys traded like cargo on savage grasslands carrying three petrified dead eggs and phantom royal-fires; \"The Last Emperor\" Puyi evicted in the desolate twilight of the Forbidden City, ending up a spectacle buying tickets to his own home."
    },
    {
      id: "secret_heir",
      name: "秘密继承人", nameEn: "Secret Heir",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "在底层长大，不知道自己真实身世，却随时可能引爆顶层权力洗牌的定时炸弹。",
      defEn: "Raised at the bottom, unaware of their true lineage; a ticking time bomb meant to trigger a reshuffle at the apex of power.",
      core: "我以为我是一根野草，直到他们拿着王座来杀我。 | 缺失 ($): 安全的过往 (Secure Past)",
      coreEn: "I thought I was a weed, until they came with a throne to kill me. | Lack ($): Secure Past",
      reference: "《星球大战》(1977, 乔治·卢卡斯) 卢克·天行者；《亚瑟王：斗兽争霸》(2017, 盖·里奇) 亚瑟",
      referenceEn: "\"Star Wars\" (1977, George Lucas) Luke Skywalker; \"King Arthur: Legend of the Sword\" (2017, Guy Ritchie) Arthur; \"Star Wars\" Luke scavenging in dusty Tatooine blind to the galaxy's most terrifying Darth Vader blood boiling in his veins; \"King Arthur: Legend of the Sword\" a brothel thug instantly exploding with world-shattering Excalibur-power the second he touches the hilt."
    },
    {
      id: "tribal_chief",
      name: "部落酋长", nameEn: "Tribal Chief",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "古老、原始或神秘部落的最高掌舵者，其权威源于神话与自然的契约。",
      defEn: "The supreme helmsman of an ancient or mystical tribe, whose authority stems from covenants with myth and nature.",
      core: "祖先的眼睛在林间看着我们，而你们的钢铁正铲断树根。 | 代偿 ($): 抵抗文明的实体力量 (Physical Force Over Modernity)",
      coreEn: "The ancestors' eyes watch us from the woods, while your steel severs the roots. | Compensation ($): Physical Force Over Modernity",
      reference: "《黑豹》(2018, 瑞恩·库格勒) 特查拉；《阿凡达》(2009, 詹姆斯·卡梅隆) 杰克·萨利",
      referenceEn: "\"Black Panther\" (2018, Ryan Coogler) T'Challa; \"Avatar\" (2009, James Cameron) Jake Sully; \"Black Panther\" gulping heart-herbs to brawl naked in ritual waterfalls asserting divine rights via broken bones despite hyper-tech; \"Avatar\" tribal leaders riding blood-spitting banshees thrusting wood-spears straight into giant metal gun-mechs."
    },
    {
      id: "oligarch_scion",
      name: "寡头之子", nameEn: "Oligarch Scion",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "垄断能源、军工或核心科技的独裁型资本帝国直接继承者。",
      defEn: "Direct heir to a dictatorial capital empire monopolizing energy, arms, or core tech.",
      core: "法律是可以购买的条款，而我是连印钞机都能买下的人。 | 代偿 ($): 真实的边界 (Real Boundaries)",
      coreEn: "Laws are purchasable clauses; I can buy the printing press itself. | Compensation ($): Real Boundaries",
      reference: "《蝙蝠侠：侠影之谜》(2005, 克里斯托弗·诺兰) 布鲁斯·韦恩；《钢铁侠》(2008, 乔恩·费儒) 托尼·斯塔克",
      referenceEn: "\"Batman Begins\" (2005, Christopher Nolan) Bruce Wayne; \"Iron Man\" (2008, Jon Favreau) Tony Stark; \"Batman\" Bruce Wayne posing as a playboy who buys out entire ballets causing hyper-corruption where even police chiefs bow to Wayne Corp; \"Iron Man\" early Tony Stark incredibly arrogant at craps-tables inheriting the world's deadliest missile factory."
    },
    {
      id: "cult_messiah",
      name: "邪教弥赛亚", nameEn: "Cult Messiah",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "自出生便被狂热信徒视为神圣降临的容器，没有个人自由，只有符号价值的圣婴。",
      defEn: "Viewed since birth by fanatics as the sacred vessel of descent; having no personal freedom, only the symbolic value of a holy infant.",
      core: "我的每一次呼吸都是他们的启示，但我不过是只没有名字的鸟。 | 缺失 ($): 人性/凡胎 (Humanity/Mortal Flesh)",
      coreEn: "My every breath is their revelation, but I am just a nameless bird. | Lack ($): Humanity/Mortal Flesh",
      reference: "《沙丘2》(2024, 丹尼斯·维伦纽瓦) 保罗·厄崔迪；《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥",
      referenceEn: "\"Dune: Part Two\" (2024, Denis Villeneuve) Paul Atreides; \"The Matrix\" (1999, The Wachowskis) Neo; \"Dune: Part Two\" Paul losing his self entirely while 10,000 fanatic Fremen scream 'Muad'Dib' demanding a bloody holy-war script; \"The Matrix\" Neo the 'One' actually just a statistical system-expendable to stabilize the Architect's millionth code-loop."
    }
  ]
};
