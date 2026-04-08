import { LibraryCategoryDef } from '../../../types';

export const IDEO_COMPETITION: LibraryCategoryDef = {
    id: "ideo_competition",
    name: "2. 竞争与生存 (Competition & Survival)",
    nameEn: "2. Competition & Survival",
    desc: "关于强弱、输赢与生存法则的信仰。",
    descEn: "Beliefs about strength, winning, losing, and the laws of survival.",
    items: [
      {
        id: "social_darwinism",
        name: "社会达尔文", nameEn: "Social Darwinism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "弱肉强食。世界是丛林，同情心是软弱。强者统治弱者是自然法则。",
        defEn: "The law of the jungle. Empathy is weakness. The strong ruling the weak is a natural law.",
        core: "将社会阶级的碾压合法化为生物学淘汰赛。剥夺了同情心的伦理合法性。",
        coreEn: "Legitimizing the crushing of social classes as a biological knockout tournament. Depriving empathy of ethical legitimacy.",
        reference: "《饥饿游戏》把穷人孩子扔进斗兽场自相残杀供富人娱乐视为自然淘汰的特权阶层；《大逃杀》坚信只有杀光全班同学活下来的那一个才有资格在丛林社会立足的政府。",
        referenceEn: "\"The Hunger Games\" tossing poor kids into arenas for sport as natural selection; \"Battle Royale\" dictating that only the last standing student earns the right to live."
      },
      {
        id: "meritocracy",
        name: "优绩主义", nameEn: "Meritocracy",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "能者多得。只要努力就能成功。你穷是因为你懒/蠢。慕强心理。",
        defEn: "The capable get more. You succeed if you try. You are poor because you are lazy/stupid. Admiring the strong.",
        core: "系统性的傲慢与虚伪。成功精英的极度自恋与底层民众的深度自卑。",
        coreEn: "Systemic arrogance and hypocrisy. Extreme narcissism of successful elites and deep inferiority of the underclass.",
        reference: "《天空之城》凭借超高智商与古老血统傲慢俯视群氓理所当然认为应统治地球的慕斯卡；《穿普拉达的女王》坚信自己今天的时尚地位全靠极其严苛的努力与品味换来的主编。",
        referenceEn: "\"Castle in the Sky\" Muska using IQ and lineage to claim planetary rule; \"The Devil Wears Prada\" Miranda believing her cruel grind justifies elite status."
      },
      {
        id: "elitism",
        name: "精英主义", nameEn: "Elitism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "柏拉图式傲慢。大众是愚蠢的羊群，世界必须由少数精英引导。",
        defEn: "Platonic arrogance. The masses are a stupid flock; the world must be guided by a few elites.",
        core: "智商与血统的隔离墙。精英的理所当然与针对民粹愤怒的冰冷镇压。",
        coreEn: "The isolation wall of IQ and bloodline. The elite's sense of entitlement and cold suppression of populist anger.",
        reference: "《了不起的盖茨比》东蛋区的老钱权贵自视血统高贵把新钱和穷人看作不可触碰的低等物种；《雪国列车》头等车厢乘客每日吃着牛排认为尾车厢吃蟑螂块是理所应当的阶级隔离。",
        referenceEn: "\"The Great Gatsby\" East Egg old money treating poor as subhumans; \"Snowpiercer\" First Class elites eating steak believing Tail section roach-eaters deserve it."
      },
      {
        id: "objectivism",
        name: "兰德主义", nameEn: "Objectivism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "自私是最高美德。创造者（巨人）不欠世界任何东西，绝不应被寄生虫拖累。",
        defEn: "Selfishness is the highest virtue. Creators don't owe the world anything and shouldn't be dragged down by parasites.",
        core: "极端的理性个人英雄主义。拒绝任何形式的利他与道德捆绑。",
        coreEn: "Extreme rational individual heroism. Rejecting any altruism and moral entrapment.",
        reference: "《源泉》坚决不妥协修改图纸宁可炸毁建筑也不让庸人糟蹋自己杰作的极致个人主义建筑师；《阿特拉斯耸耸肩》世界上所有的精英同时罢工让寄生的平民在停摆中饿死的资本狂想。",
        referenceEn: "\"The Fountainhead\" an architect blowing up his building rather than let mediocrity ruin it; \"Atlas Shrugged\" all creators striking to starve the parasites."
      },
      {
        id: "survivalism",
        name: "生存主义", nameEn: "Survivalism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "活着就是一切。为了生存可以抛弃所有人性底线。信任是绝对的奢侈品。",
        defEn: "Living is everything. Abandoning all humanity bottom lines for survival. Trust is an absolute luxury.",
        core: "人性的底线在饥饿与死亡面前瞬间崩溃。他人即地狱的终极体现。",
        coreEn: "Humanity's bottom line instantly collapses in the face of hunger and death. The ultimate embodiment of 'Hell is other people'.",
        reference: "《行尸走肉》为了队伍能多一罐肉罐头毫不犹豫把外人推向丧尸群的末世求生队长；《末日之路》为了护住推车里的半箱物资在灰烬荒原里见人就杀的沧桑父亲。",
        referenceEn: "\"The Walking Dead\" pushing strangers to zombies just for a can of meat; \"The Road\" killing on sight in the ashen wasteland to protect a cart of goods."
      },
      {
        id: "machiavellianism",
        name: "马基雅维利主义", nameEn: "Machiavellianism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "目的正当化手段。精湛的权术与欺骗，为了权力王座可以背叛一切。",
        defEn: "The end justifies the means. Masterful politicking and deception; betraying everything for the throne of power.",
        core: "冷酷无情的理性算计。没有永远的朋友，更没有道义，只有永恒的利益计算。",
        coreEn: "Ruthless rational calculation. No permanent friends or morality, only eternal interest calculation.",
        reference: "《纸牌屋》满脸堆笑前一秒握手后一秒把女记者推下地铁轨道的极致政客下木总统；《权力的游戏》用一场血色婚礼背信弃义无情清洗史塔克全部主力的泰温·兰尼斯特。",
        referenceEn: "\"House of Cards\" Underwood shaking hands then pushing a reporter before a train; \"Game of Thrones\" Tywin mercilessly massacring Stark forces via the Red Wedding."
      },
      {
        id: "kratocracy",
        name: "强权崇拜", nameEn: "Might is Right",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "力量即真理。谁拳头大谁就有理，鄙视一切弱者、程序、规则与繁文缛节。",
        defEn: "Might is right. Big fists hold the truth; despising all weaklings, procedures, rules, and red tape.",
        core: "对暴力的直接性美学展示。对文明与符号规则的粗暴践踏。",
        coreEn: "Direct aesthetic display of violence. Brutal trampling of civilization and symbolic rules.",
        reference: "《北斗神拳》世纪末救世主流派里只信奉肌肉和铁拳谁打死首领谁就能占领绿洲的拳王；《疯狂的麦克斯》挥着V8发动机权杖用无敌车队直接碾碎所有讲理者的不死老乔。",
        referenceEn: "\"Fist of the North Star\" warlords seizing oases using pure muscle and dead leaders; \"Mad Max\" Immortan Joe crushing reason under V8 engine convoys."
      },
      {
        id: "success_gospel",
        name: "成功神学", nameEn: "Prosperity Gospel",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "上帝绝对保佑有钱人。贫穷是缺乏信仰的神罚。金钱是神恩的唯一证明。",
        defEn: "God strictly protects the rich. Poverty is divine punishment for lack of faith. Money is the sole proof of grace.",
        core: "宗教洗脑与资本贪婪的怪诞缝合。将掠夺性的贪婪披上神圣的祭袍。",
        coreEn: "Grotesque stitching of religious brainwashing and capital greed. Cloaking predatory greed in sacred robes.",
        reference: "《黑金企业》把开采石油包装成上帝对选民的无上恩典在教堂宣扬贪婪即是神意的狂热牧师；《华尔街之狼》把赚取佣金骗得倾家荡产包装成了神赐的黄金律条的贪婪经纪人。",
        referenceEn: "\"There Will Be Blood\" preaching oil drilling as divine grace masking greed; \"The Wolf of Wall Street\" brokers framing robbing clients as god-given golden rules."
      },
      {
        id: "thanatocracy",
        name: "死亡崇拜", nameEn: "Cult of Death",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "只有在死亡/杀戮的瞬间才能证明生命的绝对价值。极端的狂热武士道或恐怖死士。",
        defEn: "Only in the moment of death/killing is absolute life value proven. Extreme fanatic bushido or suicide terrorists.",
        core: "狂热的向死而生。对世俗生存的极度轻视，追求那瞬间暴力的血腥绽放。",
        coreEn: "Fanatic being-towards-death. Extreme disdain for secular survival, pursuing the momentary bloody bloom of violence.",
        reference: "《圣女贞德》在火刑架上依然视死如归渴求用烈焰证明信仰最高纯度的决死冲锋者；《疯狂的麦克斯》狂喊着“见证我”往嘴里喷射银色喷漆抱着雷管扑向敌车的战争男孩。",
        referenceEn: "\"Joan of Arc\" facing the pyre believing fire proves ultimate faith; \"Mad Max\" War Boys screaming 'Witness me!' diving with bombs covered in silver chrome."
      },
      {
        id: "zero_sum",
        name: "零和博弈", nameEn: "Zero-Sum",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "你的所得必是我的所失。宇宙资源是绝对恒定的，除了抢夺别无他法。",
        defEn: "Your gain is strictly my loss. Universal resources are absolutely constant; plundering is the only way.",
        core: "极度的焦虑与地狱般的防备心。永远无法合作，只能在互害中沉沦。",
        coreEn: "Extreme anxiety and hellish defensiveness. Never cooperating, only sinking in mutual harm.",
        reference: "《三体》宇宙是一座黑暗森林每个文明都带枪狩猎谁发声就灭掉谁的猜疑链法则；《饥饿游戏》只有一个人能活着离开为了最后一口水把盟友毒死的绝对互害博弈。",
        referenceEn: "\"The Three-Body Problem\" Dark Forest theory shooting any civilization that speaks; \"The Hunger Games\" poisoning allies for the last drop of water to escape alive."
      },
      {
        id: "pragmatism_ruthless",
        name: "冷酷实用主义", nameEn: "Ruthless Pragmatism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "只看结果，不问过程。有用就是真理，多余的感情和程序都是致命的累赘。",
        defEn: "Results over process. Usefulness is truth; superfluous emotions and protocols are fatal burdens.",
        core: "绝对理性的电车难题执行者。为了所谓的宏大算计大局，可以随时牺牲掉小我。",
        coreEn: "Absolute rational executor of the Trolley Problem. Readily sacrificing the minority for the so-called grand calculation.",
        reference: "《守望者》为了防止美苏核战核平几座大城市来制造共同敌人的绝对理性计算者法老王；《模仿游戏》破译了密码却眼睁睁看着民用船只被击沉坚决不暴露情报的图灵。",
        referenceEn: "\"Watchmen\" Ozymandias nuking cities to stop US-Soviet war via pure math; \"The Imitation Game\" Turing letting ships sink to protect the broken Enigma secret."
      },
      {
        id: "nepotism",
        name: "裙带主义", nameEn: "Nepotism",
        group: "2. 竞争与生存", groupEn: "2. Competition & Survival",
        def: "血浓于水。只信任基于血缘和私交的家族熟人，绝对排斥外人，盛行的圈子文化。",
        defEn: "Blood is thicker than water. Trusting only bloodlines and kin, absolutely rejecting outsiders, prevalent circle culture.",
        core: "内部如温室般令人窒息的温馨，与对外如寒冬般残酷的排斥极度撕裂。",
        coreEn: "Tear between suffocating greenhouse-like warmth inside and cruel winter-like rejection outside.",
        reference: "《教父》对于外人残酷射杀毫不留情但是永远把家族坐在一起吃意大利面当成最高信条的黑帮；《权力的游戏》兰尼斯特家族只要是为了保护血脉哪怕乱伦和杀光全城的冷酷护短。",
        referenceEn: "\"The Godfather\" killing rivals ruthlessly but treating family pasta dinners as sacred; \"Game of Thrones\" Lannisters committing incest and massacres solely to protect bloodlines."
      }
    ]
  };
