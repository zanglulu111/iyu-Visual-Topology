import { LibraryCategoryDef } from '../../../types';

export const SUR4_GROUP_C: LibraryCategoryDef = {
  id: "soc_tradition",
  name: "3. 传统与封建 (Tradition & Feudal)",
  nameEn: "Tradition & Feudal",
  desc: "基于血缘、土地和神圣等级的社会。M4（大他者阻断）表现为不可僭越的宿命论、名分制约与道德排斥。",
  defEn: "Based on bloodline, land, and sacred hierarchies. M4 manifests as immutable fatalism, caste restrictions, and ethical excommunication.",
  items: [
    {
      id: "feudal_system",
      name: "封建采邑",
      nameEn: "Feudal System",
      def: "领主与骑士。层层分封，效忠誓言，农民被物理和契约死死束缚在土地上。",
      defEn: "Lords and knights. Hierarchical vassalage, oaths of fealty. Peasants physically and legally bound to the land.",
      core: "【换喻】土地的重力 vs 效忠的契约 (The gravity of soil vs. the contract of fealty)",
      coreEn: "【Metonymy】Land acts as the ultimate tether; existence is defined by to whom you bow.",
      reference: "《权力的游戏》用冰狼旗帜死锁效忠、农民只能如蚁随主赴死的北境；《勇敢的心》英王向贵族分赐初夜权死死压制底层血脉的泥沼。",
      referenceEn: "\"Game of Thrones\" North bound by wolf banners where peasants die for lords; \"Braveheart\" England enforcing prima nocte."
    },
    {
      id: "caste_system",
      name: "种姓制度",
      nameEn: "Caste System",
      def: "出生即决定的命运。严格的职业与空间隔离，基于“不洁”设定的阶级固化。",
      defEn: "Destiny determined at birth. Strict occupational and spatial isolation, anchored by the concept of 'impurity'.",
      core: "【换喻】投胎的随机性与终生的赎罪 (The RNG of birth and a lifetime of atonement)",
      coreEn: "【Metonymy】The DNA of hierarchy wrapped in divine decree; karma as a totalitarian state.",
      reference: "《白虎》生为低种姓只能世代为地主洗脚连妄想反抗都受罪恶感折磨的底层；《雪国列车》按车厢定命、尾厢只配吃蟑螂膏的钢铁等级线。",
      referenceEn: "\"The White Tiger\" low-caste born to wash masters' feet forever; \"Snowpiercer\" a steel train dividing humanity by cars."
    },
    {
      id: "ancestor_worship",
      name: "宗法与家族统治",
      nameEn: "Patriarchal Clan Rule",
      def: "死人统治活人。一切必须遵循祖制，家族脸面/名分高于个人的生理存活。",
      defEn: "The dead rule the living. Obedience to 'Ancestor Law'; family 'Face' outweighs individual life.",
      core: "【换喻】牌位背后的凝视与无声的扼杀 (The gaze behind the ancestral tablets and the silent strangulation)",
      coreEn: "【Metonymy】The living are merely vessels to propagate the dead's honor.",
      reference: "《大红灯笼高高挂》用“陈院规矩”将女人们锁成争风互害活鬼的枯井祖宅；《仲夏夜惊魂》盲从祖先轮舞用血腥残杀献祭活人的死循环村庄。",
      referenceEn: "\"Raise the Red Lantern\" ancestral rules locking women as ghosts in a dry well; \"Midsommar\" a village repeating bloody ancestral loops."
    },
    {
      id: "empire_colonial",
      name: "殖民帝国",
      nameEn: "Colonial Empire",
      def: "宗主国与殖民地。掠夺，同化，二等公民。文明与“野蛮”的二元压迫。",
      defEn: "Metropole over colony. Plunder, assimilation, second-class citizens. Civilized vs 'Savage' oppression.",
      core: "【换喻】伪善的启蒙与实质的吸血 (Hypocritical enlightenment veiling literal vampirism)",
      coreEn: "【Metonymy】The 'White Man's Burden' as a disguise for total resource and ontological theft.",
      reference: "《赛德克·巴莱》用礼仪学校与枪炮按头让原住民屈作苦力的太阳旗；《启示录》外洋帆船携着火铳登陆瞬间宣告丛林法则终结的巨影。",
      referenceEn: "\"Seediq Bale\" forcing natives into logging via civilized schools and guns; \"Apocalypto\" Spanish galleons ending jungle law."
    },
    {
      id: "nomadic_tribe",
      name: "游牧部落",
      nameEn: "Nomadic Tribe",
      def: "逐水草而居。将移动视为生存法则，极度依赖自然，彪悍但脆弱。",
      defEn: "Chasing water and grass. Movement as survival; fierce reliance on nature, ruthless but fragile.",
      core: "【换喻】自然的无情刻度与迁徙的疲于奔命 (The merciless dial of nature and the relentless exhausting migration)",
      coreEn: "【Metonymy】Roots are death. The horizon is the only God.",
      reference: "《沙丘》视水为生命极度狂热、在深空死漠驾驭巨虫饮血求生的弗雷曼人；《疯狂的麦克斯2》驾着拼装油罐车在黄沙中逐汽油的狂野部族。",
      referenceEn: "\"Dune\" fierce Fremen riding giant worms hoarding water in deserts; \"Mad Max 2\" wild tribes chasing guzzoline across wasteland ruins."
    },
    {
      id: "matriarchy",
      name: "母系氏族",
      nameEn: "Matriarchy",
      def: "女性长者掌权，血缘按母亲计算。大地女神崇拜，排斥父权制的暴力逻辑。",
      defEn: "Elder women rule, matrilineal descent. Earth Goddess worship, rejecting the kinetic logic of patriarchy.",
      core: "【换喻】生命轮回矩阵与温和的绝对权威 (The matrix of life-cycle and the gentle but absolute authority)",
      coreEn: "【Metonymy】Authority stemming from creation; a softer, yet equally inescapable net.",
      reference: "《疯狂的麦克斯4》骑着机车只留女性枪手传承神枪种子的众母部落；《降临》以非线性语言包容宇宙、摒弃单向暴力的七肢桶母神式文明。",
      referenceEn: "\"Mad Max 4\" female sharpshooter matriarchs preserving seeds on bikes; \"Arrival\" Heptapods embracing non-linear matriarchal consciousness."
    },
    {
      id: "secret_society",
      name: "秘密结社",
      nameEn: "Secret Society / Brotherhood",
      def: "共济会、刺客大门或武林隐宗。只有圈内人懂的暗语，依靠极端仪式维持内部稳定。",
      defEn: "Freemasons, Assassins, hidden sects. Insiders only; extreme rituals to maintain hyper-stability.",
      core: "【换喻】门规的恐怖与被圈禁的安全感 (The terror of the code vs. the confined safety)",
      coreEn: "【Metonymy】The shadow state within the state; loyalty paid in blood.",
      reference: "《疾速追杀》用金币与血誓封印杀手、破铁律便遭全网死决的大陆酒店；《搏击俱乐部》从地下黑拳变为炸毁信用卡大厦的无名猴群。",
      referenceEn: "\"John Wick\" the Continental bound by gold coins and blood oaths; \"Fight Club\" underground monkeys morphing into Project Mayhem."
    },
    {
      id: "island_community",
      name: "孤岛社群",
      nameEn: "Isolationist Cult / Island Community",
      def: "与世隔绝，保留着古老甚至畸形的异教习俗。极度排外，内部伦理异化。",
      defEn: "Cut off from the world, retaining ancient/deformed pagan customs. Hyper-xenofobic, mutated ethics.",
      core: "【换喻】腐败的死水与对“外围”的恐惧 (Corrupt stagnant water and the dread of the 'Outside')",
      coreEn: "【Metonymy】Evolution paused; where local psychosis becomes universal law.",
      reference: "《柳条人》全岛欢唱民谣将警官锁入巨型草人活烧的异教社群；《灯塔》与世隔绝被怒海与死海鸥逼得守塔人伦常全丧的疯魔孤礁。",
      referenceEn: "\"The Wicker Man\" islanders singing hymns burning a cop in a straw idol; \"The Lighthouse\" madness consuming isolated wickies."
    },
    {
      id: "warrior_culture",
      name: "尚武/斯巴达文化",
      nameEn: "Warrior / Spartan Culture",
      def: "崇拜力量与荣誉。弱者被遗弃，全民皆兵，死亡是战士唯一的归宿。",
      defEn: "Worshipping strength and honor. The weak are discarded; everyone is a soldier. Death is the only true end.",
      core: "【换喻】肉体的熔炉与被美化的死亡 (The crucible of flesh and the beautification of demise)",
      coreEn: "【Metonymy】Pain is the only alphabet. A society that eats its own soft elements.",
      reference: "《斯巴达300勇士》掷死畸婴、唯尊肌肉以战死为终极美学的血红城邦；《阿凡达》以降服飞龙为成人礼、将伤痕视作图腾的纳美武士。",
      referenceEn: "\"300\" crimson city throwing weak infants worshipping muscle; \"Avatar\" Na'vi warriors wearing scars as totems honoring dragon-taming."
    },
    {
      id: "court_intrigue",
      name: "宫廷权谋",
      nameEn: "Court Intrigue",
      def: "凡尔赛或紫禁城。空间极度狭小，权力高度浓缩。礼仪繁琐，杀人不见血。",
      defEn: "Versailles or the Forbidden City. Hyper-concentrated power in claustrophobic luxury. Elaborate etiquette masking bloodless murder.",
      core: "【换喻】华袍下的虱子与微笑背后的毒刃 (Lice beneath the silk robes; venom behind the fan)",
      coreEn: "【Metonymy】Every polite gesture is a calculated strike. Etiquette as a weapon of mass destruction.",
      reference: "《宠儿》用华服泥浆战掩盖女王床榻权力倾轧的极度窒息深宫；《沙丘2》帕迪沙皇帝帐下不发一枪便微笑定夺行星生杀的算计。",
      referenceEn: "\"The Favourite\" Versailles-like courts using mud-fights to mask royal politics; \"Dune 2\" the Emperor smilingly dooming a planet."
    },
    {
      id: "agrarian_commune",
      name: "农业公社",
      nameEn: "Agrarian Commune",
      def: "日出而作，日落而息。集体劳作共享收成，极度推崇平均主义与去私有化。",
      defEn: "Sunrise to work, sunset to rest. Collective labor, absolute agalitarianism, stripping of private property.",
      core: "【换喻】集体的熔炉与被铲平的个性凸起 (The collective melting pot that flattens any individualized bump)",
      coreEn: "【Metonymy】The tyranny of the average. Privacy is theft.",
      reference: "《仲夏夜惊魂》表面长桌共享阳光实则毫无隐私集体作恶的畸笑农居；《小森林》完全依附四季刻度剥除城市杂念的纯素绝缘村落。",
      referenceEn: "\"Midsommar\" a smiling commune sharing tables enforcing horrific collective crimes; \"Little Forest\" absolute agrarian reliance stripping ego."
    },
    {
      id: "vassal_state",
      name: "朝贡体系",
      nameEn: "Tributary Vassal State",
      def: "中心与边缘的松散联盟。万国来朝，通过仪式、朝拜和上供来换取安全保证。",
      defEn: "Loose alliance of Center and Periphery. Bowing, rituals, and tribute in exchange for protection from the Empire.",
      core: "【换喻】磕头的汇率与买来的虚假和平 (The exchange rate of kowtows and purchased fake peace)",
      coreEn: "【Metonymy】Dignity externalized as tribute. Peace built on submissive rituals.",
      reference: "《沙丘》被迫向皇帝死交定额香料换取存活榨干全族的厄拉科斯采臣；《饥饿游戏》12区每年如抽签献上童子参加死斗以跪谢都城恩典。",
      referenceEn: "\"Dune\" Arrakis squeezing planetary veins to meet Emperor's spice quotas; \"Hunger Games\" 12th District offering tribute-teens."
    }
  ]
};
