import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_E: LibraryCategoryDef = {
  id: "prof_art",
  name: "05. 艺术与表达 (Art & Expression)",
  nameEn: "Art & Expression",
  desc: "以创作为职业的表达者群落。绘画、写作、表演、音乐——用技艺将内在转化为可感知的作品。",
  defEn: "Professional communities of creative expression. Painting, writing, performing, music — converting the internal into perceivable works through craft.",
  items: [
    {
      id: "painter",
      name: "画家",
      nameEn: "Painter",
      def: "以颜料与画布为媒介创作视觉艺术作品的职业创作者。",
      defEn: "Professional creator of visual artworks using pigment and canvas as medium.",
      core: "绝望撕裂的带血画布 vs 染满颜料如严重皮癣的双手。颜色是他唯一的语言，画面是他唯一的出口。",
      coreEn: "Desperately torn bloody canvases vs. hands stained with paint like severe psoriasis. Color is the only language, the canvas the only exit.",
      reference: "《狂人皮埃罗》(1965, 让-吕克·戈达尔) 费迪南 / 《梵高传》(1956, 文森特·明奈利) 梵高",
      referenceEn: "\"Pierrot le Fou\" (1965, Jean-Luc Godard) Ferdinand / \"Lust for Life\" (1956, Vincente Minnelli) Vincent van Gogh"
    },
    {
      id: "writer",
      name: "小说家/作家",
      nameEn: "Writer",
      def: "以文字为工具构建虚构或非虚构叙事的职业写作者。将经验、想象与语言编织成文本。",
      defEn: "Professional writer constructing fictional or non-fictional narratives via text. Weaving experience, imagination, and language into written form.",
      core: "浸泡在烟灰缸里的墨水笔 vs 堆叠成物理迷宫的废弃草稿。每个故事都是从自己身上割下来的肉。",
      coreEn: "Fountain pens drowning in ashtrays vs. discarded drafts forming physical labyrinths. Every story is flesh cut from the self.",
      reference: "《闪灵》(1980, 斯坦利·库布里克) 杰克·托伦斯 / 《危情十日》(1990, 罗伯·莱纳) 保罗·谢尔顿",
      referenceEn: "\"The Shining\" (1980, Stanley Kubrick) Jack Torrance / \"Misery\" (1990, Rob Reiner) Paul Sheldon"
    },
    {
      id: "musician",
      name: "器乐家",
      nameEn: "Musician",
      def: "以演奏乐器为专业的音乐表演者。通过器乐技巧诠释或即兴创造音乐作品。",
      defEn: "Professional music performer specializing in instrument performance. Interpreting or improvising musical works through instrumental technique.",
      core: "琴弦上勒出的深切血痕 vs 可以砸碎一切文明的狂躁音箱。声音是武器，也是祈祷。",
      coreEn: "Deep bloody grooves on strings vs. manic amps capable of shattering civilization. Sound is both weapon and prayer.",
      reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 安德鲁·内曼 / 《海上钢琴师》(1998, 朱塞佩·托纳多雷) 1900",
      referenceEn: "\"Whiplash\" (2014, Damien Chazelle) Andrew Neiman / \"The Legend of 1900\" (1998, Giuseppe Tornatore) 1900"
    },
    {
      id: "actor",
      name: "演员",
      nameEn: "Actor",
      def: "以身体、声音与情感为工具扮演角色的表演艺术从业者。在舞台或镜头前诠释他人的生命。",
      defEn: "Performing artist using body, voice, and emotion as tools to portray characters. Interpreting other lives on stage or before camera.",
      core: "撕不下来的面具皮肉 vs 化妆镜中不属于自己的陌生眼珠。演得太深，就找不到回去的路。",
      coreEn: "Un-peelable skin masks vs. alien eyeballs staring back from makeup mirrors. Too deep into the role, and there's no way back.",
      reference: "《黑天鹅》(2010, 达伦·阿伦诺夫斯基) 妮娜·塞耶斯 / 《霸王别姬》(1993, 陈凯歌) 程蝶衣",
      referenceEn: "\"Black Swan\" (2010, Darren Aronofsky) Nina Sayers / \"Farewell My Concubine\" (1993, Chen Kaige) Cheng Dieyi"
    },
    {
      id: "dancer",
      name: "舞者",
      nameEn: "Dancer",
      def: "以身体运动为表达媒介的舞蹈艺术从业者。通过极致的肢体控制实现编舞或即兴表演。",
      defEn: "Dance artist using bodily movement as expressive medium. Achieving choreography or improvisation through extreme physical control.",
      core: "缠满绷带还在渗血的足尖 vs 对抗重力的非人滞空悬停。美是用骨折换来的。",
      coreEn: "Bleeding toes wrapped in tight bandages vs. inhuman airborne hovers defying gravity. Beauty is purchased with fractures.",
      reference: "《阴风阵阵》(1977, 达里奥·阿基多) 莎拉·班农 / 《红菱艳》(1948, 迈克尔·鲍威尔) 佩吉·辛克莱",
      referenceEn: "\"Suspiria\" (1977, Dario Argento) Suzy Bannion / \"The Red Shoes\" (1948, Michael Powell) Victoria Page"
    },
    {
      id: "photographer",
      name: "摄影师",
      nameEn: "Photographer",
      def: "通过操控光学设备捕捉与定格影像的视觉记录者。将瞬间从时间流中切割出来。",
      defEn: "Visual recorder capturing and freezing images through optical equipment operation. Cutting instants from the flow of time.",
      core: "如黑色枪管般的长焦镜头 vs 暗房红光里慢慢浮现的隐秘真相。取景框是一扇只进不出的门。",
      coreEn: "Telephoto lenses like black gun barrels vs. hidden truths slowly emerging in darkroom red lights. The viewfinder is a one-way door.",
      reference: "《后窗》(1954, 阿尔弗雷德·希区柯克) 杰弗里斯 / 《夜行者》(2014, 丹·吉尔罗伊) 卢·布鲁姆",
      referenceEn: "\"Rear Window\" (1954, Alfred Hitchcock) L.B. Jefferies / \"Nightcrawler\" (2014, Dan Gilroy) Lou Bloom"
    },
    {
      id: "poet",
      name: "诗人",
      nameEn: "Poet",
      def: "以高度凝练的语言形式创作韵文或自由诗的文学创作者。在最少的字数中压缩最大的张力。",
      defEn: "Literary creator crafting verse or free poetry in highly condensed language. Compressing maximum tension into minimum words.",
      core: "肺痨般咳出的猩红词句 vs 用酒瓶渣割腕换取的灵感。诗是最短的形式，也是最烈的毒。",
      coreEn: "Scarlet verses coughed up like TB blood vs. inspiration traded via bottle-shard wrist-cuts. Poetry is the shortest form and the deadliest poison.",
      reference: "《心之全蚀》(1995, 阿格涅丝卡·霍兰) 兰波 / 《死亡诗社》(1989, 彼得·威尔) 尼尔·佩里",
      referenceEn: "\"Total Eclipse\" (1995, Agnieszka Holland) Arthur Rimbaud / \"Dead Poets Society\" (1989, Peter Weir) Neil Perry"
    },
    {
      id: "sculptor",
      name: "雕塑家",
      nameEn: "Sculptor",
      def: "以切削、塑形或铸造等方式创作三维造型艺术的创作者。从物质中剥离或堆积形态。",
      defEn: "Creator of three-dimensional art through carving, shaping, or casting. Stripping or accumulating form from matter.",
      core: "金属凿子敲击大理石崩出的火星 vs 被石粉掩埋到窒息的口鼻。减法的艺术——剥到最后剩下的才是作品。",
      coreEn: "Sparks from chisels on marble vs. nose and mouth buried to suffocation in stone dust. Art of subtraction — what remains after all is stripped is the work.",
      reference: "《罗丹的情人》(1988, 布鲁诺·努坦) 卡米尔·克洛岱尔 / 《剪刀手爱德华》(1990, 蒂姆·伯顿) 爱德华",
      referenceEn: "\"Camille Claudel\" (1988, Bruno Nuytten) Camille Claudel / \"Edward Scissorhands\" (1990, Tim Burton) Edward"
    },
    {
      id: "singer",
      name: "歌手/歌唱家",
      nameEn: "Singer",
      def: "以人声为主要表演工具的音乐表演者。通过声带控制与气息技巧传达音乐与情感。",
      defEn: "Music performer using the human voice as primary instrument. Conveying music and emotion through vocal control and breathing technique.",
      core: "飙入超高音时充血的颈部血管 vs 被万众狂迷泪水淹没的华丽长裙。声带是最脆弱的乐器，用一次少一次。",
      coreEn: "Congested neck veins hitting altissimo vs. gorgeous gowns drowned in mass fanatic tears. Vocal cords are the most fragile instrument — every use diminishes them.",
      reference: "《第五元素》(1997, 吕克·贝松) 外星歌姬 / 《歌剧魅影》(2004, 乔·舒马赫) 克里斯汀·戴伊",
      referenceEn: "\"The Fifth Element\" (1997, Luc Besson) Diva Plavalaguna / \"The Phantom of the Opera\" (2004, Joel Schumacher) Christine Daaé"
    },
    {
      id: "composer",
      name: "作曲家",
      nameEn: "Composer",
      def: "创作音乐作品的专业人员。设计旋律、和声、节奏与配器，将声音组织为有结构的作品。",
      defEn: "Professional creating musical works. Designing melody, harmony, rhythm, and orchestration to organize sound into structured compositions.",
      core: "琴键边缘滴落的冷汗 vs 五线谱上如蚂蚁般吞噬理智的黑色音符。完美的乐章先杀死作曲家，再杀死听众。",
      coreEn: "Cold sweat dripping off piano keys vs. black notes eating sanity like ants on staves. The perfect score kills the composer first, then the audience.",
      reference: "《莫扎特传》(1984, 米洛斯·福尔曼) 萨列里 / 《海上钢琴师》(1998, 朱塞佩·托纳多雷) 1900",
      referenceEn: "\"Amadeus\" (1984, Miloš Forman) Antonio Salieri / \"The Legend of 1900\" (1998, Giuseppe Tornatore) 1900"
    },
    {
      id: "illusionist",
      name: "魔术师/幻术师",
      nameEn: "Illusionist",
      def: "通过手法、机关与视觉欺骗制造不可能现象的表演者。在观众眼前违反物理常识。",
      defEn: "Performer creating impossible phenomena through sleight of hand, mechanisms, and visual deception. Defying physics before the audience's eyes.",
      core: "飞转的纸牌割破现实的咽喉 vs 水箱中真实的濒死窒息。每一场魔术都是一次赌命的骗局。",
      coreEn: "Spinning cards slitting reality's throat vs. genuine near-death choking in water tanks. Every trick is a life-wagering con.",
      reference: "《致命魔术》(2006, 克里斯托弗·诺兰) 罗伯特·安吉尔 / 《惊天魔盗团》(2013, 路易斯·莱特里尔) 丹尼尔·阿特拉斯",
      referenceEn: "\"The Prestige\" (2006, Christopher Nolan) Robert Angier / \"Now You See Me\" (2013, Louis Leterrier) J. Daniel Atlas"
    },
    {
      id: "fashion_designer",
      name: "时装设计师",
      nameEn: "Fashion Designer",
      def: "设计服装与配饰的创意专业人员。通过面料、剪裁与造型定义穿着者的视觉身份。",
      defEn: "Creative professional designing clothing and accessories. Defining the wearer's visual identity through fabric, tailoring, and styling.",
      core: "勒紧皮质束腰的窒息感 vs 满地华丽而残缺的人体模特残肢。时尚是对身体最优雅的暴力。",
      coreEn: "Suffocation of corset leathers vs. gorgeous yet amputated mannequin limbs scattered on the floor. Fashion is the most elegant violence against the body.",
      reference: "《霓裳魅影》(2017, 保罗·托马斯·安德森) 雷诺兹·伍德科克 / 《黑白魔女库伊拉》(2021, 克雷格·吉勒斯佩) 库伊拉",
      referenceEn: "\"Phantom Thread\" (2017, Paul Thomas Anderson) Reynolds Woodcock / \"Cruella\" (2021, Craig Gillespie) Cruella de Vil"
    },
    {
      id: "tattoo_artist",
      name: "纹身师",
      nameEn: "Tattoo Artist",
      def: "使用纹身机将墨水注入皮肤真皮层以创作永久图案的人体装饰专家。",
      defEn: "Body decoration specialist injecting ink into the dermis layer via tattoo machine to create permanent patterns.",
      core: "马达嗡嗡作响的钻心剧痛 vs 洗不掉的深层皮下印记。皮肤是最私人的画布，每一针都不可逆。",
      coreEn: "Buzzing motors bringing piercing pain vs. indelible deep sub-dermal marks. Skin is the most private canvas; every needle stroke is irreversible.",
      reference: "《红龙》(2002, 布莱特·拉特纳) 弗朗西斯·多拉海德 / 《极恶非道》(2010, 北野武) 黑帮成员",
      referenceEn: "\"Red Dragon\" (2002, Brett Ratner) Francis Dolarhyde / \"Outrage\" (2010, Takeshi Kitano) Yakuza Members"
    },
    {
      id: "critic",
      name: "评论家/影评人",
      nameEn: "Critic",
      def: "对文学、影视、音乐或其他艺术形式进行专业分析与公开评价的职业评论者。",
      defEn: "Professional reviewer conducting expert analysis and public evaluation of literature, film, music, or other art forms.",
      core: "沾满毒液的无情钢笔 vs 将炽热心脏放在秤上估值的冰冷眼镜。创作者的天敌，观众的代理人。",
      coreEn: "Ruthless pens soaked in venom vs. cold glasses appraising a beating heart on scales. The creator's nemesis, the audience's proxy.",
      reference: "《料理鼠王》(2007, 布拉德·伯德) 安东·伊戈 / 《鸟人》(2014, 亚历杭德罗·伊纳里图) 塔比莎·迪金森",
      referenceEn: "\"Ratatouille\" (2007, Brad Bird) Anton Ego / \"Birdman\" (2014, Alejandro G. Iñárritu) Tabitha Dickinson"
    },
    {
      id: "makeup_artist",
      name: "特效化妆师",
      nameEn: "SFX Makeup",
      def: "使用硅胶、乳胶与特殊材料在演员面部和身体上制造视觉特效的影视技术人员。",
      defEn: "Film/TV technician creating visual effects on actors' faces and bodies using silicone, latex, and special materials.",
      core: "发臭硅胶倒模中被剥夺的面目 vs 黏糊胶乳里涌出的虚假尸斑。他制造的恐惧比真实更逼真。",
      coreEn: "Stolen faces inside foul silicon molds vs. fake livor mortis seeping from sticky latex. The horror he creates is more real than reality.",
      reference: "《科学怪人》(1931, 詹姆斯·惠尔) 杰克·皮尔斯 / 《小丑》(2019, 托德·菲利普斯) 亚瑟·弗莱克",
      referenceEn: "\"Frankenstein\" (1931, James Whale) Jack Pierce / \"Joker\" (2019, Todd Phillips) Arthur Fleck"
    }
  ]
};
