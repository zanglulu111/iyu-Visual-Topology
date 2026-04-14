import { LibraryCategoryDef } from '../../../types';

export const IDEO_ORDER: LibraryCategoryDef = {
  id: "ideo_order",
  name: "3. 秩序与传统 (Order & Tradition)",
  nameEn: "Order & Tradition",
  desc: "关于稳定、等级、过去与神圣不可侵犯性的信仰体系。用于定义主角如何看待权威、教条与社会秩序。",
  defEn: "Belief systems about stability, hierarchy, the past, and sacred inviolability. Defines how the protagonist views authority, dogma, and social order.",
  items: [
    {
      id: "fundamentalism",
      name: "原教旨主义",
      nameEn: "Fundamentalism",
      def: "对宗教或意识形态经典文本进行字面化绝对解释的信念体系。排斥现代性与世俗化，将世界划分为信徒与异端。",
      defEn: "Belief system interpreting religious or ideological classics in absolute literal terms. Rejecting modernity and secularization; dividing the world into believers and heretics.",
      core: "他用教义的铁墙把自己封装成了刀枪不入的真理容器——但墙里封的不是真理，是恐惧。第一条裂缝出现的那一秒，整面墙塌成粉末。",
      coreEn: "He sealed himself in an iron wall of doctrine as an invulnerable vessel of truth — but what's sealed inside isn't truth, it's fear. The second the first crack appears, the whole wall crumbles to dust.",
      reference: "《使女的故事》(2017, 剧集) 基列国政权 / 《猎魔人》(2019, 剧集) 永恒之火教派",
      referenceEn: "\"The Handmaid's Tale\" (2017, Series) Gilead / \"The Witcher\" (2019, Series) Eternal Fire Cult"
    },
    {
      id: "asceticism",
      name: "禁欲主义",
      nameEn: "Asceticism",
      def: "通过拒绝物质享受和施加肉体痛苦来追求灵魂升华的信念。受苦是高尚的，快乐是堕落的入场券。",
      defEn: "Belief pursuing spiritual elevation by rejecting material pleasure and inflicting bodily pain. Suffering is noble; pleasure is the ticket to damnation.",
      core: "他用倒刺的铁链抽打自己的大腿来证明虔诚——但在第一千次抽打之后，他分不清是在赎罪，还是在上瘾。",
      coreEn: "He whipped his thigh with a barbed chain to prove devotion — after the thousandth lash, he couldn't tell if it was atonement or addiction.",
      reference: "《达芬奇密码》(2006, 朗·霍华德) 赛拉斯 / 《七宗罪》(1995, 大卫·芬奇) 约翰·杜",
      referenceEn: "\"The Da Vinci Code\" (2006, Ron Howard) Silas / \"Se7en\" (1995, David Fincher) John Doe"
    },
    {
      id: "patriarchalism",
      name: "宗法统治",
      nameEn: "Patriarchalism",
      def: "以家族长辈为绝对权力中心、依靠孝道与绝对服从维持的等级森严伦理结构。长辈永远是对的。",
      defEn: "Rigidly hierarchical ethical structure centering on family patriarchs, maintained through filial piety and absolute obedience. Elders are always right.",
      core: "老爷的脸甚至不需要出现在画面里——他的名字就够让所有偏房自觉地低下头去。恨他的人最终都变成了他。",
      coreEn: "The master's face doesn't even need to appear on screen — his name alone makes all concubines bow their heads. Everyone who hated him eventually became him.",
      reference: "《大红灯笼高高挂》(1991, 张艺谋) 陈老爷/偏房 / 《教父》(1972, 弗朗西斯·科波拉) 柯里昂家族序列",
      referenceEn: "\"Raise the Red Lantern\" (1991, Zhang Yimou) Master Chen / Concubines / \"The Godfather\" (1972, Coppola) Corleone Hierarchy"
    },
    {
      id: "fatalism",
      name: "宿命论",
      nameEn: "Fatalism",
      def: "相信一切事件皆在宇宙剧本中注定的信念。反抗是最大的徒劳，接受命运是唯一的智慧。",
      defEn: "Belief that all events are predetermined in the cosmic script. Rebellion is maximum futility; accepting fate is the sole wisdom.",
      core: "他为了躲避杀父娶母的神谕拼命逃离——每一步逃离都恰恰是在走向预言。剧本是写好的，逃跑本身就是剧本的第一幕。",
      coreEn: "He fled desperately to avoid the patricide prophecy — every step of flight was a step toward it. The script was written; the escape itself was Act One.",
      reference: "《俄狄浦斯王》(戏剧) 俄狄浦斯 / 《降临》(2016, 丹尼斯·维伦纽瓦) 路易丝·班克斯",
      referenceEn: "\"Oedipus Rex\" (Drama) Oedipus / \"Arrival\" (2016, Denis Villeneuve) Louise Banks"
    },
    {
      id: "collectivism",
      name: "集体主义",
      nameEn: "Collectivism",
      def: "将集体意志置于个人价值之上的信念体系。个人是巨大机器上的螺丝钉，牺牲小我是至高荣耀。",
      defEn: "Belief system placing collective will above individual value. Individuals are cogs in a massive machine; sacrificing the minor self is supreme glory.",
      core: "他在早操时和一万个人做着完全相同的动作——当他抬起的手比别人高出一厘米时，一万双眼睛同时转向了他。",
      coreEn: "He performed the exact same movements as ten thousand people during morning drills — when his hand rose one centimeter higher, ten thousand eyes turned toward him simultaneously.",
      reference: "《1984》(1984, 迈克尔·雷德福) 温斯顿·史密斯 / 《星河战队》(1997, 保罗·范霍文) 联邦士兵",
      referenceEn: "\"Nineteen Eighty-Four\" (1984, Michael Radford) Winston Smith / \"Starship Troopers\" (1997, Paul Verhoeven) Federal Soldiers"
    },
    {
      id: "nationalism",
      name: "民族主义",
      nameEn: "Nationalism",
      def: "将国族或种族共同体的纯洁性和优越性视为至高价值的信念。'我们对他们'的二元对立是社会凝聚力的地基。",
      defEn: "Belief holding purity and superiority of the nation or racial community as the supreme value. The 'Us vs. Them' binary is the foundation of social cohesion.",
      core: "他们在旗帜下热泪盈眶地高喊'血与土地'——旗帜的另一面，印着被他们称为'害虫'的邻居的照片。",
      coreEn: "They shouted 'blood and soil' with tears under the flag — on the other side of the flag were photos of neighbors they called 'vermin'.",
      reference: "《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 纳粹军官阿蒙·歌德 / 《斯巴达300勇士》(2006, 扎克·施奈德) 列奥尼达",
      referenceEn: "\"Schindler's List\" (1993, Spielberg) Amon Göth / \"300\" (2006, Zack Snyder) Leonidas"
    },
    {
      id: "conformism",
      name: "从众主义",
      nameEn: "Conformism",
      def: "将融入平均值视为最高安全策略的信念。出头的钉子必须挨锤，平庸是护城河，'不同'是死罪。",
      defEn: "Belief viewing blending into the average as the highest safety strategy. Nails that stick out get hammered; mediocrity is the moat; 'different' is a capital offense.",
      core: "他花了一辈子学习如何不被注意到——直到有一天他消失了，没有一个人发现。隐形是他的超能力，也是他的墓志铭。",
      coreEn: "He spent a lifetime learning how to not be noticed — until one day he vanished and nobody noticed. Invisibility was his superpower and his epitaph.",
      reference: "《楚门的世界》(1998, 彼得·威尔) 桃源岛邻居们 / 《黑镜：急转直下》(2016, 剧集) 评分社会",
      referenceEn: "\"The Truman Show\" (1998, Peter Weir) Seahaven Neighbors / \"Black Mirror: Nosedive\" (2016, Series) Rating Society"
    },
    {
      id: "conservatism",
      name: "保守主义",
      nameEn: "Conservatism",
      def: "深信过去的秩序优于当下一切变革的信念。警惕任何形式的加速与颠覆，守护传统即守护文明。",
      defEn: "Belief that past order is superior to all present change. Wary of any acceleration or subversion; guarding tradition is guarding civilization.",
      core: "他死死攥着旧世界的最后一把钥匙——锁已经被拆了，门已经被烧了，但他还是攥着。钥匙是他最后的身份证。",
      coreEn: "He clung to the last key of the old world — the lock was removed, the door was burned, but he still clung. The key was his last ID card.",
      reference: "《唐顿庄园》(2010, 剧集) 克劳利伯爵 / 《指环王》(2001, 彼得·杰克逊) 夏尔霍比特人",
      referenceEn: "\"Downton Abbey\" (2010, Series) Earl of Grantham / \"The Lord of the Rings\" (2001, Peter Jackson) Shire Hobbits"
    },
    {
      id: "bureaucratism",
      name: "形式官僚",
      nameEn: "Bureaucratism",
      def: "将程序正义和免责文书置于一切生命价值之上的信念。世界必须被裁剪成符合表格与章程的死板形状。",
      defEn: "Belief placing procedural justice and exoneration paperwork above all life value. The world must be cropped into rigid shapes fitting forms and statutes.",
      core: "一只死苍蝇飞进了打字机，名字敲错了一个字母——一个无辜的人因此被逮捕并消失了。错误是机器的，后果是人的。",
      coreEn: "A dead fly entered the typewriter, one letter was mistyped — an innocent person was arrested and vanished. The error was the machine's; the consequence was human.",
      reference: "《妙想天开》(1985, 特瑞·吉列姆) 山姆·劳瑞 / 《是，大臣》(1980, 剧集) 汉弗莱爵士",
      referenceEn: "\"Brazil\" (1985, Terry Gilliam) Sam Lowry / \"Yes Minister\" (1980, Series) Sir Humphrey"
    },
    {
      id: "feudal_loyalty",
      name: "封建忠义",
      nameEn: "Feudal Loyalty",
      def: "建立在绝对人身依附关系上的主从信条。士为知己者死，义气高于法律，为主君赴汤蹈火是最高美德。",
      defEn: "Master-servant creed built on absolute personal dependency. Dying for one's lord transcends law; self-immolation for the master is the highest virtue.",
      core: "他为了主人切掉了自己的小指——十年之后主人把他像用过的筷子一样扔了。小指是永远长不回来的，但忠诚可以。",
      coreEn: "He cut off his pinky for the master — ten years later the master discarded him like used chopsticks. The pinky never grows back, but loyalty can.",
      reference: "《极恶非道》(2010, 北野武) 黑帮小弟 / 《忠臣藏》(1962, �的场保) 四十七浪人",
      referenceEn: "\"Outrage\" (2010, Takeshi Kitano) Yakuza Underlings / \"47 Ronin\" (1962, Hiroshi Inagaki) The 47 Ronin"
    },
    {
      id: "purity_culture",
      name: "纯洁文化",
      nameEn: "Purity Culture",
      def: "对'脏污与污染'怀有病态恐惧的文化信念。从处女崇拜到思想审查，要求一切环境绝对一尘不染。",
      defEn: "Cultural belief with pathological fear of 'filth and contamination.' From virginity worship to thought policing, demanding absolute spotlessness.",
      core: "母亲用消毒水擦了女儿房间的每一寸墙壁——但女儿最渴望的，恰恰是那些被消毒水杀死的细菌。越干净的笼子，里面的动物越疯。",
      coreEn: "Mother scrubbed every inch of her daughter's walls with disinfectant — but what the daughter craved most was exactly the germs killed by it. The cleaner the cage, the madder the animal inside.",
      reference: "《黑天鹅》(2010, 达伦·阿罗诺夫斯基) 妮娜与母亲 / 《红字》(1995, 罗兰·约菲) 海斯特·白兰",
      referenceEn: "\"Black Swan\" (2010, Darren Aronofsky) Nina & Mother / \"The Scarlet Letter\" (1995, Roland Joffé) Hester Prynne"
    },
    {
      id: "honor_culture",
      name: "荣誉文化",
      nameEn: "Honor Culture",
      def: "将面子和家族声望视为高于生命的信念。任何言语或行为上的侮辱都必须用鲜血和决斗来清算。",
      defEn: "Belief holding face and clan reputation above life. Any verbal or behavioral insult must be settled with blood and duels.",
      core: "为了一句漫不经心的嘴炮，两个人拔剑互砍了三十年——他们都忘了当初那句话是什么了，但剑停不下来。",
      coreEn: "For a casual quip, two men slashed at each other for thirty years — both forgot what the original words were, but the swords couldn't stop.",
      reference: "《决斗的人》(1977, 雷德利·斯科特) 费罗与杜贝尔 / 《沙丘》(2021, 丹尼斯·维伦纽瓦) 厄崔迪家族的荣誉决斗",
      referenceEn: "\"The Duellists\" (1977, Ridley Scott) Féraud & d'Hubert / \"Dune\" (2021, Denis Villeneuve) Atreides Honor Duel"
    }
  ]
};
