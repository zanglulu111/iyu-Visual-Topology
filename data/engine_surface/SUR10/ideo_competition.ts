import { LibraryCategoryDef } from '../../../types';

export const IDEO_COMPETITION: LibraryCategoryDef = {
  id: "ideo_competition",
  name: "2. 竞争与生存 (Competition & Survival)",
  nameEn: "Competition & Survival",
  desc: "关于强弱、输赢与丛林法则的信仰体系。用于定义主角如何看待人与人之间的资源争夺和权力关系。",
  defEn: "Belief systems about strength, winning, and the law of the jungle. Defines how the protagonist views resource competition and power relations between people.",
  items: [
    {
      id: "social_darwinism",
      name: "社会达尔文",
      nameEn: "Social Darwinism",
      def: "将生物进化的自然选择法则套用于人类社会的信念体系。认为弱肉强食是自然法则，同情弱者是违背天意。",
      defEn: "Belief system applying biological natural selection to human society. The strong ruling the weak is natural law; empathy for the weak defies nature.",
      core: "他把对穷人的碾压包装成自然规律——直到他自己滑落到食物链底端，才发现丛林里没有规律，只有牙齿。",
      coreEn: "He packaged crushing the poor as natural law — until he slid to the bottom of the food chain and found the jungle has no laws, only teeth.",
      reference: "《饥饿游戏》(2012, 加里·罗斯) 施惠国特权阶层 / 《大逃杀》(2000, 深作欣二) 政府计划",
      referenceEn: "\"The Hunger Games\" (2012, Gary Ross) Panem's Elite / \"Battle Royale\" (2000, Kinji Fukasaku) Government Program"
    },
    {
      id: "meritocracy",
      name: "优绩主义",
      nameEn: "Meritocracy",
      def: "相信社会地位完全由个人能力和努力决定的信念。你穷是因为你蠢或懒，成功者理应享受一切特权。",
      defEn: "Belief that social status is entirely determined by individual ability and effort. You're poor because you're lazy; the successful deserve all privileges.",
      core: "他坚信自己的成功全靠双手——直到一场意外剥夺了他全部的特权，他才发现那双手其实一直站在别人的肩膀上。",
      coreEn: "He believed his success was all his own — until an accident stripped all privilege, revealing those hands always stood on others' shoulders.",
      reference: "《穿普拉达的女王》(2006, 大卫·弗兰克尔) 米兰达·普里斯特利 / 《寄生虫》(2019, 奉俊昊) 朴社长",
      referenceEn: "\"The Devil Wears Prada\" (2006, David Frankel) Miranda Priestly / \"Parasite\" (2019, Bong Joon-ho) Mr. Park"
    },
    {
      id: "elitism",
      name: "精英主义",
      nameEn: "Elitism",
      def: "认为社会应由少数智识或血统上的精英阶层治理的信念。大众是无法自治的愚昧羊群。",
      defEn: "Belief that society should be governed by an intellectual or bloodline elite. The masses are a mindless flock unable to self-govern.",
      core: "他在象牙塔的顶端俯瞰蝼蚁，自认为是上帝选中的牧羊人——直到羊群用牙齿投票，将牧羊犬撕成了碎片。",
      coreEn: "He looked down from the ivory tower at the ants, believing himself God's chosen shepherd — until the flock voted with teeth, tearing the sheepdog apart.",
      reference: "《了不起的盖茨比》(2013, 巴兹·鲁赫曼) 东蛋区老钱 / 《雪国列车》(2013, 奉俊昊) 头等车厢乘客",
      referenceEn: "\"The Great Gatsby\" (2013, Baz Luhrmann) East Egg Old Money / \"Snowpiercer\" (2013, Bong Joon-ho) First Class Passengers"
    },
    {
      id: "objectivism",
      name: "兰德主义",
      nameEn: "Objectivism",
      def: "安·兰德式的极端理性个人主义。自私是最高美德，创造者不欠世界任何东西，拒绝一切利他主义的道德绑架。",
      defEn: "Ayn Rand's extreme rational individualism. Selfishness is the highest virtue; creators owe the world nothing, rejecting all altruistic moral binding.",
      core: "他宁可炸掉自己一手建造的帝国也不许庸人插手——但帝国废墟下埋的，是唯一一个曾真心爱他的人。",
      coreEn: "He'd rather blow up his empire than let mediocrity touch it — but buried under the ruins was the only person who ever truly loved him.",
      reference: "《源泉》(1949, 金·维多) 霍华德·洛克 / 《生化奇兵》(2007, 游戏) 安德鲁·莱恩",
      referenceEn: "\"The Fountainhead\" (1949, King Vidor) Howard Roark / \"BioShock\" (2007, Game) Andrew Ryan"
    },
    {
      id: "survivalism",
      name: "生存主义",
      nameEn: "Survivalism",
      def: "将活着视为唯一绝对价值的信念。为了生存可以抛弃一切人性底线，信任是致命的奢侈品。",
      defEn: "Belief holding survival as the sole absolute value. Abandoning all moral baselines for life; trust is a lethal luxury.",
      core: "他为了活下去杀了所有信任他的人——活下去之后发现，活着本身已经是一种比死更慢的刑罚。",
      coreEn: "He killed everyone who trusted him to survive — then found that survival itself was a punishment slower than death.",
      reference: "《行尸走肉》(2010, 剧集) 瑞克·格莱姆斯 / 《末日之路》(2009, 约翰·希尔科特) 父亲",
      referenceEn: "\"The Walking Dead\" (2010, Series) Rick Grimes / \"The Road\" (2009, John Hillcoat) The Father"
    },
    {
      id: "machiavellianism",
      name: "马基雅维利主义",
      nameEn: "Machiavellianism",
      def: "目的正当化一切手段的权术信条。精通操纵、欺骗与背叛，将人际关系视为纯粹的利益博弈棋盘。",
      defEn: "The creed that ends justify all means. Mastering manipulation, deception, and betrayal; viewing relationships as pure interest-game chessboards.",
      core: "他用三十年的假笑换来了王座——但当他终于坐上去的那一秒，发现王座上全是前任们留下的刀痕。",
      coreEn: "He traded thirty years of fake smiles for the throne — the second he sat down, he found it covered in scars from all predecessors.",
      reference: "《纸牌屋》(2013, 剧集) 弗兰克·安德伍德 / 《权力的游戏》(2011, 剧集) 泰温·兰尼斯特",
      referenceEn: "\"House of Cards\" (2013, Series) Frank Underwood / \"Game of Thrones\" (2011, Series) Tywin Lannister"
    },
    {
      id: "kratocracy",
      name: "强权崇拜",
      nameEn: "Might is Right",
      def: "力量即真理的原始信条。谁的拳头大谁有理，鄙视一切规则、程序与弱者的求情。",
      defEn: "The primal creed of might equals right. Bigger fists hold truth; despising all rules, procedures, and the weak's pleas.",
      core: "他是斗兽场里最后站着的那头野兽——但斗兽场的门从外面锁着，观众才是真正的主人。",
      coreEn: "He's the last beast standing in the arena — but the arena door is locked from outside; the audience are the real masters.",
      reference: "《疯狂的麦克斯4》(2015, 乔治·米勒) 不死老乔 / 《北斗神拳》(1984, 动画) 废土拳王",
      referenceEn: "\"Mad Max: Fury Road\" (2015, George Miller) Immortan Joe / \"Fist of the North Star\" (1984, Anime) Wasteland Warlords"
    },
    {
      id: "success_gospel",
      name: "成功神学",
      nameEn: "Prosperity Gospel",
      def: "将财富视为神恩唯一证明的宗教化资本信仰。上帝眷顾有钱人，贫穷是信仰不够虔诚的惩罚。",
      defEn: "Religionized capital belief treating wealth as the sole proof of divine grace. God favors the rich; poverty is punishment for insufficient faith.",
      core: "他在镀金的教堂里感谢上帝赐予的一切——直到破产的那一天，他发现上帝的电话号码是付费的。",
      coreEn: "He thanked God for everything in the gilded church — until bankruptcy day, when he found God's phone number was premium-rate.",
      reference: "《黑金企业》(2007, 保罗·托马斯·安德森) 伊莱·桑迪牧师 / 《华尔街之狼》(2013, 马丁·斯科塞斯) 乔丹·贝尔福特",
      referenceEn: "\"There Will Be Blood\" (2007, PTA) Eli Sunday / \"The Wolf of Wall Street\" (2013, Scorsese) Jordan Belfort"
    },
    {
      id: "thanatocracy",
      name: "死亡崇拜",
      nameEn: "Cult of Death",
      def: "将死亡或杀戮的瞬间视为生命最高价值证明的极端信念。向死而生的狂热武士道或殉教精神。",
      defEn: "Extreme belief treating the moment of death or killing as supreme proof of life's value. Fanatic bushido or martyrdom of being-towards-death.",
      core: "他在冲锋的时候笑得最灿烂——但他从未问过自己，冲锋结束后，笑容应该给谁看。",
      coreEn: "He smiles brightest during the charge — but never asked who the smile is for after the charge ends.",
      reference: "《疯狂的麦克斯4》(2015, 乔治·米勒) 战争男孩纳克斯 / 《圣女贞德》(1999, 吕克·贝松) 贞德",
      referenceEn: "\"Mad Max: Fury Road\" (2015, George Miller) Nux / \"The Messenger\" (1999, Luc Besson) Joan of Arc"
    },
    {
      id: "zero_sum",
      name: "零和博弈",
      nameEn: "Zero-Sum",
      def: "坚信宇宙资源绝对恒定、你的所得必是我的所失的世界观。合作是幻觉，抢夺是唯一生存策略。",
      defEn: "Worldview insisting universal resources are absolutely constant; your gain is strictly my loss. Cooperation is illusion; plundering is the only strategy.",
      core: "他把每一个伸出的手都当成要偷东西的手——直到他在暴风雪中快要冻死时，再也没有手伸过来了。",
      coreEn: "He treated every extended hand as a thieving hand — until he almost froze to death in a blizzard and no hand reached out anymore.",
      reference: "《三体》(2024, 剧集) 黑暗森林法则 / 《饥饿游戏》(2012, 加里·罗斯) 竞技场生存赛",
      referenceEn: "\"3 Body Problem\" (2024, Series) Dark Forest Theory / \"The Hunger Games\" (2012, Gary Ross) Arena Survival"
    },
    {
      id: "pragmatism_ruthless",
      name: "冷酷实用主义",
      nameEn: "Ruthless Pragmatism",
      def: "只看结果、不问过程的极端功利主义。有用即真理，感情和道德都是影响效率的致命噪音。",
      defEn: "Extreme utilitarianism focused solely on results. Usefulness is truth; emotion and morality are lethal noise affecting efficiency.",
      core: "他在电车难题面前毫不犹豫地拉下了操纵杆——被碾死的那一个，是他自己的女儿。数学是对的，但答案是错的。",
      coreEn: "He pulled the trolley lever without hesitation — the one crushed was his own daughter. The math was right; the answer was wrong.",
      reference: "《守望者》(2009, 扎克·施奈德) 法老王 / 《模仿游戏》(2014, 莫滕·泰尔杜姆) 图灵",
      referenceEn: "\"Watchmen\" (2009, Zack Snyder) Ozymandias / \"The Imitation Game\" (2014, Morten Tyldum) Alan Turing"
    },
    {
      id: "nepotism",
      name: "裙带主义",
      nameEn: "Nepotism",
      def: "血浓于水的家族至上信条。只信任血缘和私交圈内的熟人，将外人视为潜在威胁而绝对排斥。",
      defEn: "Family-first creed of blood over water. Trusting only kin and inner circle; treating outsiders as threats to be absolutely excluded.",
      core: "他为了家族可以杀光一座城——但家族内部的刀子比外面的敌人更锋利，背后捅来的总是亲兄弟。",
      coreEn: "He'd kill a city for his family — but knives inside the family are sharper than outside enemies; the backstab always comes from a brother.",
      reference: "《教父》(1972, 弗朗西斯·科波拉) 柯里昂家族 / 《权力的游戏》(2011, 剧集) 兰尼斯特家族",
      referenceEn: "\"The Godfather\" (1972, Francis Ford Coppola) Corleone Family / \"Game of Thrones\" (2011, Series) House Lannister"
    }
  ]
};
