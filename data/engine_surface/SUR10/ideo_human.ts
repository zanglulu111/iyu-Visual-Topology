import { LibraryCategoryDef } from '../../../types';

export const IDEO_HUMAN: LibraryCategoryDef = {
  id: "ideo_human",
  name: "6. 人本与超越 (Humanism & Spirit)",
  nameEn: "Humanism & Spirit",
  desc: "关于爱、自然、存在与灵魂超越的信仰体系。用于定义主角如何看待人的价值、自然秩序与精神终局。",
  defEn: "Belief systems about love, nature, existence, and spiritual transcendence. Defines how the protagonist views human value, natural order, and spiritual endgames.",
  items: [
    {
      id: "radical_humanism",
      name: "激进人本",
      nameEn: "Radical Humanism",
      def: "将人的价值置于一切系统（国家、神权、市场）之上的信念。极度警惕任何将人工具化的力量。",
      defEn: "Belief placing human value above all systems (state, theocracy, market). Extremely vigilant against any force instrumentalizing humans.",
      core: "他倾家荡产从焚尸炉里买回了一千个名字——但第一千零一个名字的价格，是他自己。",
      coreEn: "He spent everything to buy back a thousand names from the furnace — but the price for the 1001st name was himself.",
      reference: "《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 辛德勒 / 《银翼杀手》(1982, 雷德利·斯科特) 罗伊·巴蒂",
      referenceEn: "\"Schindler's List\" (1993, Steven Spielberg) Oskar Schindler / \"Blade Runner\" (1982, Ridley Scott) Roy Batty"
    },
    {
      id: "deep_ecology",
      name: "深层生态",
      nameEn: "Deep Ecology",
      def: "认为万物具有同等内在价值、人类不过是生态网络中一个节点的信念。自然权利高于人类利益。",
      defEn: "Belief that all things possess equal intrinsic value; humans are merely nodes in the ecological web. Nature's rights supersede human interests.",
      core: "她为了保护一头山兽神举刀砍向人类的炼铁厂——但山兽神死后，她发现自己既不属于森林，也不属于人类。",
      coreEn: "She raised her blade at ironworks to protect a forest god — but after the god died, she belonged neither to forest nor to humans.",
      reference: "《幽灵公主》(1997, 宫崎骏) 桑 / 《阿凡达》(2009, 詹姆斯·卡梅隆) 纳美人",
      referenceEn: "\"Princess Mononoke\" (1997, Hayao Miyazaki) San / \"Avatar\" (2009, James Cameron) The Na'vi"
    },
    {
      id: "existentialism",
      name: "存在主义",
      nameEn: "Existentialism",
      def: "存在先于本质。世界没有预设意义，人被抛掷于此，必须在绝对自由与绝对焦虑中自行选择存在的方式。",
      defEn: "Existence precedes essence. The world has no preset meaning; humans are thrown here and must self-choose their mode of being in absolute freedom and anxiety.",
      core: "他用一把小锤子凿了二十年的墙——没有上帝帮忙，没有人给他剧本，出口是他自己用指甲刨出来的。",
      coreEn: "He chiseled the wall with a small hammer for twenty years — no god helped, no one gave him a script; the exit was carved with his own nails.",
      reference: "《肖申克的救赎》(1994, 弗兰克·德拉邦特) 安迪·杜佛兰 / 《局外人》(1967, 卢奇诺·维斯康蒂) 默尔索",
      referenceEn: "\"The Shawshank Redemption\" (1994, Frank Darabont) Andy Dufresne / \"The Stranger\" (1967, Luchino Visconti) Meursault"
    },
    {
      id: "stoicism",
      name: "斯多葛主义",
      nameEn: "Stoicism",
      def: "控制可控之事、接受不可控之事的古典哲学信念。建立坚不可摧的内部堡垒，追求不动心（apatheia）。",
      defEn: "Classical philosophy of controlling what you can and accepting what you cannot. Building an indestructible inner fortress, pursuing apatheia (tranquility).",
      core: "他在家人全部被斩首之后依然心如止水地举起剑——但止水之下，是一座永远沸腾的活火山。不流泪是他最贵的盔甲。",
      coreEn: "He raised his sword with a still heart after his entire family was beheaded — but beneath still water, a volcano eternally boils. Not crying is his most expensive armor.",
      reference: "《角斗士》(2000, 雷德利·斯科特) 马克西姆斯 / 《蝙蝠侠：黑暗骑士》(2008, 克里斯托弗·诺兰) 布鲁斯·韦恩",
      referenceEn: "\"Gladiator\" (2000, Ridley Scott) Maximus / \"The Dark Knight\" (2008, Christopher Nolan) Bruce Wayne"
    },
    {
      id: "romanticism",
      name: "浪漫狂飙",
      nameEn: "Romanticism",
      def: "将情感、激情与直觉置于冰冷理性之上的信念。追求崇高的痛苦、天才的闪光与燃烧殆尽的生命力。",
      defEn: "Belief placing emotion, passion, and intuition above cold reason. Pursuing sublime suffering, genius flashes, and life force burned to ashes.",
      core: "他们用三天的绝美爱情赌上了一辈子的安稳——船沉的时候，他发现赌赢的代价是冰水，赌输的代价也是冰水。",
      coreEn: "They wagered a lifetime of security on three days of stunning love — when the ship sank, he found the cost of winning and losing was both ice water.",
      reference: "《泰坦尼克号》(1997, 詹姆斯·卡梅隆) 杰克与露丝 / 《死亡诗社》(1989, 彼得·威尔) 基廷老师与学生们",
      referenceEn: "\"Titanic\" (1997, James Cameron) Jack & Rose / \"Dead Poets Society\" (1989, Peter Weir) Mr. Keating & Students"
    },
    {
      id: "animism",
      name: "泛灵神契",
      nameEn: "Animism",
      def: "相信万物——山川、石头、机器、网络节点——都拥有灵魂并彼此相连的原始信仰体系。",
      defEn: "Primal belief system that all things — mountains, stones, machines, network nodes — possess souls and are interconnected.",
      core: "她相信大树里住着毛茸茸的神——直到推土机来的那天，她发现人类眼里，神也不过是一根木头。",
      coreEn: "She believed fuzzy gods lived in the great trees — until the bulldozer came, and she found that in humans' eyes, even gods are just lumber.",
      reference: "《龙猫》(1988, 宫崎骏) 小月与龙猫 / 《风之谷》(1984, 宫崎骏) 娜乌西卡与王虫",
      referenceEn: "\"My Neighbor Totoro\" (1988, Hayao Miyazaki) Satsuki & Totoro / \"Nausicaä\" (1984, Hayao Miyazaki) Nausicaä & Ohmu"
    },
    {
      id: "pacifism",
      name: "和平主义",
      nameEn: "Pacifism",
      def: "信奉非暴力不合作的绝对道德信条。深信只有爱能融化恨的锁链，宁愿承受毁灭也拒绝拿起武器。",
      defEn: "Absolute moral creed of non-violent non-cooperation. Convinced only love melts chains of hate; would rather suffer destruction than pick up weapons.",
      core: "他在枪林弹雨里背出了七十五个人，一枪没开——但第七十六个人死在了他怀里，因为他没有枪。",
      coreEn: "He carried 75 people out of gunfire without firing a shot — but the 76th died in his arms, because he had no gun.",
      reference: "《血战钢锯岭》(2016, 梅尔·吉布森) 戴斯蒙德·多斯 / 《甘地传》(1982, 理查德·阿滕伯勒) 甘地",
      referenceEn: "\"Hacksaw Ridge\" (2016, Mel Gibson) Desmond Doss / \"Gandhi\" (1982, Richard Attenborough) Mahatma Gandhi"
    },
    {
      id: "gnosticism",
      name: "诺斯替逃逸",
      nameEn: "Gnosticism",
      def: "深信物质世界是一位伪神（造物主）创造的邪恶监狱的古老信念。唯一的救赎是获取隐藏的'灵知'，逃脱肉体牢笼。",
      defEn: "Ancient belief that the material world is an evil prison created by a false god (Demiurge). Sole salvation is acquiring hidden 'Gnosis' to escape the flesh cage.",
      core: "他吞下红色药丸后从黏液培养舱里醒来——真相是自由的，但自由的味道像下水道。醒来是最贵的酷刑。",
      coreEn: "He swallowed the red pill and woke from the slime pod — truth is free, but freedom tastes like sewage. Waking up is the most expensive torture.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥 / 《异次元杀阵》(1997, 文森佐·纳塔利) 困于魔方的人们",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) Neo / \"Cube\" (1997, Vincenzo Natali) The Trapped"
    },
    {
      id: "ubermensch",
      name: "超人意志",
      nameEn: "Übermensch",
      def: "尼采式的重估一切既有价值的信念。上帝已死，主体必须依靠纯粹的'强力意志'如闪电般自我立法。",
      defEn: "Nietzschean belief in the revaluation of all values. God is dead; the subject must self-legislate like lightning through pure 'Will to Power'.",
      core: "他看穿了整个世界的谎言，决定用自己的双手改写规则——但新规则的第一条，是杀死所有不同意他的人。",
      coreEn: "He saw through the world's lies and decided to rewrite all rules — but Rule One of the new order was to kill everyone who disagreed.",
      reference: "《进击的巨人》(2013, 剧集) 艾伦·耶格尔 / 《蝙蝠侠：黑暗骑士》(2008, 克里斯托弗·诺兰) 蝙蝠侠的私刑正义",
      referenceEn: "\"Attack on Titan\" (2013, Series) Eren Yeager / \"The Dark Knight\" (2008, Christopher Nolan) Batman's Vigilante Justice"
    },
    {
      id: "pantheism",
      name: "泛神论",
      nameEn: "Pantheism",
      def: "斯宾诺莎式的'神即自然'信念。神不是人格实体，而是宇宙本身——从最微的细胞到最宏的星网都是同一实体的表达。",
      defEn: "Spinozist 'God is Nature' belief. God is not a personal entity but the universe itself — from the smallest cell to the vastest star web, all expressions of one substance.",
      core: "他在五维空间的书架后面找到了上帝——上帝就是他自己，或者说，上帝就是所有人的总和。答案比问题更让人绝望。",
      coreEn: "He found God behind the bookshelf in five-dimensional space — God was himself, or rather, the sum of everyone. The answer was more despairing than the question.",
      reference: "《星际穿越》(2014, 克里斯托弗·诺兰) 库珀 / 《沙丘》(2021, 丹尼斯·维伦纽瓦) 保罗·厄崔迪的预知",
      referenceEn: "\"Interstellar\" (2014, Christopher Nolan) Cooper / \"Dune\" (2021, Denis Villeneuve) Paul Atreides' Prescience"
    },
    {
      id: "altruism_pathological",
      name: "病态利他",
      nameEn: "Pathological Altruism",
      def: "将助人冲动推至自毁乃至伤及无辜的极端信念。为了'拯救全局'可以牺牲任何个体，包括自己。",
      defEn: "Extreme belief pushing the urge to help to self-destruction and harming innocents. Willing to sacrifice any individual, including self, to 'save the whole'.",
      core: "他流着眼泪按下了毁灭一百万人的按钮——因为他计算过，这是拯救十亿人的唯一方法。眼泪是真的，按钮也是真的。",
      coreEn: "He pressed the button killing a million while weeping — because he calculated it was the only way to save a billion. The tears were real; so was the button.",
      reference: "《守望者》(2009, 扎克·施奈德) 法老王 / 《复仇者联盟3》(2018, 罗素兄弟) 灭霸",
      referenceEn: "\"Watchmen\" (2009, Zack Snyder) Ozymandias / \"Avengers: Infinity War\" (2018, Russo Brothers) Thanos"
    },
    {
      id: "mysticism",
      name: "神秘主义",
      nameEn: "Mysticism",
      def: "深信终极真理不可言说、只能通过直接体验与神性融合来领悟的信念。语言和逻辑在此失效。",
      defEn: "Belief that ultimate truth is unspeakable, comprehensible only through direct experiential fusion with divinity. Language and logic fail here.",
      core: "他穿过黑石碑后，语言和逻辑全部粉碎——他变成了一个婴儿，漂浮在星海中。他找到了答案，但答案不是一个词。",
      coreEn: "After passing through the monolith, language and logic shattered — he became an infant floating in the star sea. He found the answer, but the answer wasn't a word.",
      reference: "《2001太空漫游》(1968, 斯坦利·库布里克) 大卫·鲍曼/星孩 / 《第七封印》(1957, 英格玛·伯格曼) 骑士与死神",
      referenceEn: "\"2001\" (1968, Stanley Kubrick) Dave Bowman / Star Child / \"The Seventh Seal\" (1957, Ingmar Bergman) The Knight & Death"
    }
  ]
};
