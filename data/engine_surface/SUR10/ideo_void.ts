import { LibraryCategoryDef } from '../../../types';

export const IDEO_VOID: LibraryCategoryDef = {
  id: "ideo_void",
  name: "5. 虚无与反叛 (Void & Rebellion)",
  nameEn: "Void & Rebellion",
  desc: "关于无意义、混乱、破坏与消极抵抗的信仰体系。用于定义主角如何面对世界的荒谬与规则的暴政。",
  defEn: "Belief systems about meaninglessness, chaos, destruction, and passive resistance. Defines how the protagonist confronts the world's absurdity and the tyranny of rules.",
  items: [
    {
      id: "nihilism_active",
      name: "积极虚无",
      nameEn: "Active Nihilism",
      def: "尼采式的'上帝已死'后果论。既然旧有一切价值皆为虚妄，就要在废墟上以超人之姿创造属于自己的新价值。",
      defEn: "Nietzschean aftermath of 'God is dead.' Since all old values are delusional, one must create new values on the ruins in an Übermensch posture.",
      core: "他踩着上帝的葬礼狂笑着给自己加冕——王冠是纸做的，但他笑得太疯了，没有人敢告诉他。",
      coreEn: "He laughed wildly at God's funeral and crowned himself — the crown was paper, but he laughed too madly for anyone to tell him.",
      reference: "《小丑》(2019, 托德·菲利普斯) 亚瑟·弗莱克 / 《查拉图斯特拉如是说》(文学) 尼采的狂人",
      referenceEn: "\"Joker\" (2019, Todd Phillips) Arthur Fleck / \"Thus Spoke Zarathustra\" (Literature) Nietzsche's Madman"
    },
    {
      id: "nihilism_passive",
      name: "消极虚无",
      nameEn: "Passive Nihilism",
      def: "既然一切终将归于热寂和虚无，那么任何挣扎、努力和创造都毫无意义。活着只是一种惯性。",
      defEn: "Since everything will ultimately perish in heat death and void, any struggle, effort, or creation is meaningless. Living is mere inertia.",
      core: "他知道注射海洛因会让自己烂在下水道里——但既然全世界都是一坨狗屎，下水道也不比别处更脏。",
      coreEn: "He knew heroin would rot him in the gutter — but since the whole world is a pile of shit, the gutter isn't dirtier than anywhere else.",
      reference: "《猜火车》(1996, 丹尼·博伊尔) 马克·瑞顿 / 《马男波杰克》(2014, 动画) 波杰克",
      referenceEn: "\"Trainspotting\" (1996, Danny Boyle) Mark Renton / \"BoJack Horseman\" (2014, Anime) BoJack"
    },
    {
      id: "cynicism",
      name: "犬儒主义",
      nameEn: "Cynicism",
      def: "看穿了一切崇高理想背后的虚伪，但不做任何实质性改变的信念。通过辛辣嘲笑和自我贬低获取智力优越感。",
      defEn: "Belief seeing through the hypocrisy behind all noble ideals but making no substantive change. Gaining intellectual superiority through biting mockery and self-deprecation.",
      core: "他用打嗝和脏话揭穿了全宇宙的虚伪——但他从未对任何事物认真过一秒。清醒是他的牢笼，讽刺是他的铁栅栏。",
      coreEn: "He exposed the universe's hypocrisy with burps and profanity — but never took anything seriously for one second. Lucidity is his cage; sarcasm is the iron bars.",
      reference: "《瑞克和莫蒂》(2013, 动画) 瑞克·桑切斯 / 《神探夏洛克》(2010, 剧集) 夏洛克·福尔摩斯",
      referenceEn: "\"Rick and Morty\" (2013, Anime) Rick Sanchez / \"Sherlock\" (2010, Series) Sherlock Holmes"
    },
    {
      id: "anarchism",
      name: "安那其主义",
      nameEn: "Anarchism",
      def: "极端反对一切不合理权威（国家机器、无形资本）的信念。追求绝对去中心化、个体自治与底层互助。",
      defEn: "Extreme opposition to all illegitimate authority (state machines, invisible capital). Pursuing absolute decentralization, individual autonomy, and grassroots mutual aid.",
      core: "他戴上面具堵着炸药把整个议会大厦炸成了烟花——烟花散尽之后，废墟上没有长出自由。长出的是另一群议员。",
      coreEn: "He put on a mask and blew Parliament into fireworks — after the sparks faded, freedom didn't grow from the ruins. Another group of legislators did.",
      reference: "《V字仇杀队》(2005, 詹姆斯·麦克特格) V / 《搏击俱乐部》(1999, 大卫·芬奇) 泰勒·德顿",
      referenceEn: "\"V for Vendetta\" (2005, James McTeigue) V / \"Fight Club\" (1999, David Fincher) Tyler Durden"
    },
    {
      id: "antinatalism",
      name: "反出生主义",
      nameEn: "Antinatalism",
      def: "认为生命本身是一场被迫签署的残酷契约的信念。终止生育、阻断痛苦的代际传递，是对未出生者最大的慈悲。",
      defEn: "Belief that life itself is a cruel contract signed by force. Terminating reproduction and blocking intergenerational pain transmission is the greatest mercy to the unborn.",
      core: "他看着摇篮里的婴儿，眼里全是那个孩子七十年后必然经历的病痛、衰老和死亡。他的爱太大了，大到不敢让它出生。",
      coreEn: "He looked at the baby in the cradle and saw only the illness, aging, and death the child would inevitably face in seventy years. His love was so vast he dared not let it be born.",
      reference: "《真探》(2014, 剧集) 拉斯特·科尔 / 《进击的巨人》(2013, 动画) 吉克·耶格尔的安乐死计划",
      referenceEn: "\"True Detective\" (2014, Series) Rust Cohle / \"Attack on Titan\" (2013, Anime) Zeke Yeager's Euthanasia Plan"
    },
    {
      id: "absurdism",
      name: "荒诞主义",
      nameEn: "Absurdism",
      def: "加缪式的信念：世界是无理性的，人类寻找意义的本能与无意义的世界发生剧烈碰撞。不自杀、不皈依，在反抗本身中寻找快乐。",
      defEn: "Camusian belief: the world is irrational; human instinct to find meaning violently collides with a meaningless world. Neither suicide nor conversion, but finding joy in rebellion itself.",
      core: "石头又滚下来了。他第一万次弯腰去推——嘴角的笑意不是因为石头会到达山顶，而是因为诸神在看。",
      coreEn: "The boulder rolled down again. He bent to push for the ten-thousandth time — the smile wasn't because the stone would reach the top, but because the gods were watching.",
      reference: "《局外人》(1967, 卢奇诺·维斯康蒂) 默尔索 / 《等待戈多》(戏剧) 两个流浪汉",
      referenceEn: "\"The Stranger\" (1967, Luchino Visconti) Meursault / \"Waiting for Godot\" (Drama) Two Tramps"
    },
    {
      id: "punk_ideology",
      name: "叛逆朋克",
      nameEn: "Punk",
      def: "以DIY精神、反建制愤怒与美学暴力为核心的亚文化信念。用最粗糙脏乱差的方式撕碎社会精英的精致面具。",
      defEn: "Subcultural belief centered on DIY spirit, anti-establishment rage, and aesthetic violence. Tearing off elite refined masks with the roughest, dirtiest methods.",
      core: "他拿着吉他和核弹冲进了企业大厦——大厦炸成了灰烬，吉他也断了。但那三个和弦比整栋大楼活得更久。",
      coreEn: "He stormed the corporate tower with a guitar and a nuke — the tower turned to ash, the guitar broke too. But those three chords outlived the entire building.",
      reference: "《赛博朋克2077》(2020, 游戏) 强尼·银手 / 《疯狂的麦克斯4》(2015, 乔治·米勒) 喷火吉他战车",
      referenceEn: "\"Cyberpunk 2077\" (2020, Game) Johnny Silverhand / \"Mad Max: Fury Road\" (2015, George Miller) Doof Warrior's Flame Guitar"
    },
    {
      id: "misanthropy",
      name: "极端厌世",
      nameEn: "Misanthropy",
      def: "对人类物种怀有极度厌恶的信念。认为人类是地球的病毒——贪婪、愚蠢且不可救药，渴望看到文明的自我毁灭。",
      defEn: "Belief of extreme disgust toward the human species. Viewing humans as Earth's virus — greedy, stupid, and incurable; craving to witness civilization's self-destruction.",
      core: "他掐着人类的脖子说：你们的气味让我恶心。但他说这话的时候，手也在发抖——因为他也是人类。",
      coreEn: "He choked humanity's neck saying: your stench disgusts me. But his hand trembled as he spoke — because he was human too.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 史密斯特工 / 《七宗罪》(1995, 大卫·芬奇) 萨默塞特警探",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) Agent Smith / \"Se7en\" (1995, David Fincher) Detective Somerset"
    },
    {
      id: "fatalism_rebel",
      name: "反抗宿命",
      nameEn: "Rebelling Fate",
      def: "明知终将失败、明知命运已被写死，但仍然拔剑冲锋的极致悲剧英雄主义信念。知其不可而为之。",
      defEn: "Ultimate tragic heroism: knowing full well failure is inevitable and fate is sealed, yet still drawing the sword to charge. Doing it knowing it's impossible.",
      core: "他面对百万大军狂笑着举起长矛——不是因为他相信能赢，而是因为他不允许诸神拥有一个没有人反抗的宇宙。",
      coreEn: "He laughed and raised his spear against a million — not because he believed he could win, but because he wouldn't allow the gods a universe where no one fought back.",
      reference: "《斯巴达300勇士》(2006, 扎克·施奈德) 列奥尼达 / 《进击的巨人》(2013, 动画) 调查兵团的冲锋",
      referenceEn: "\"300\" (2006, Zack Snyder) Leonidas / \"Attack on Titan\" (2013, Anime) Scout Regiment's Charge"
    },
    {
      id: "chaos_magic",
      name: "混沌魔法",
      nameEn: "Chaos Magic",
      def: "信念即现实。彻底解构一切科学与宗教法则，用纯粹的主观意志扭曲客观世界的后现代巫术信条。",
      defEn: "Belief is reality. A postmodern sorcery creed thoroughly deconstructing all scientific and religious laws, warping the objective world with pure subjective will.",
      core: "她因为丧夫的极度悲痛直接改写了整个小镇的物理定律——每个居民都在微笑，因为她的悲伤不允许他们不微笑。",
      coreEn: "Her grief from losing her husband directly rewrote the physics of an entire town — every resident smiled, because her sorrow wouldn't allow them not to.",
      reference: "《旺达幻视》(2021, 剧集) 旺达·马克西莫夫 / 《奇异博士》(2016, 斯科特·德瑞克森) 史蒂芬·斯特兰奇",
      referenceEn: "\"WandaVision\" (2021, Series) Wanda Maximoff / \"Doctor Strange\" (2016, Scott Derrickson) Stephen Strange"
    },
    {
      id: "solipsism",
      name: "极端唯我",
      nameEn: "Solipsism",
      def: "笃定只有'我'的意识是唯一真实存在的信念。宇宙不过是'我'的一场梦，其他人都是没有灵魂的NPC。",
      defEn: "Belief certain that only 'my' consciousness is the sole true existence. The universe is but 'my' dream; everyone else are soulless NPCs.",
      core: "他闭着眼睛吃下一块假牛排——只要我的舌头说它是真的，那一百万个在培养舱里挣扎的影子就不关我的事。",
      coreEn: "He closed his eyes and ate a fake steak — as long as my tongue says it's real, a million shadows struggling in pods are none of my concern.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 叛徒塞弗 / 《楚门的世界》(1998, 彼得·威尔) 楚门触碰天幕边缘",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) Cypher / \"The Truman Show\" (1998, Peter Weir) Truman Touching the Sky-Canvas"
    },
    {
      id: "iconoclasm",
      name: "碎除偶像",
      nameEn: "Iconoclasm",
      def: "绝对不容忍任何神圣与权威象征存在的信念。必须暴力地砸碎一切神像、纪念碑与不可侵犯的教条。",
      defEn: "Belief absolutely intolerant of any symbols of the sacred or authority. All idols, monuments, and inviolable dogmas must be violently smashed.",
      core: "他在一首古典交响乐的高潮中把法院炸成了满天烟花——烟花太美了，以至于人们忘记了被炸掉的是什么。",
      coreEn: "He blew the courthouse into fireworks at the climax of a classical symphony — the fireworks were so beautiful that people forgot what had been destroyed.",
      reference: "《V字仇杀队》(2005, 詹姆斯·麦克特格) V炸毁旧贝利法院 / 《搏击俱乐部》(1999, 大卫·芬奇) 炸毁信用卡大楼",
      referenceEn: "\"V for Vendetta\" (2005, James McTeigue) V Bombing the Old Bailey / \"Fight Club\" (1999, David Fincher) Blowing Up Credit Card Buildings"
    }
  ]
};
