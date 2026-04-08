import { LibraryCategoryDef } from '../../../types';

export const SUR4_GROUP_A: LibraryCategoryDef = {
  id: "soc_authority",
  name: "1. 极权与独裁 (Totalitarian & Dictatorship)",
  nameEn: "Totalitarian & Dictatorship",
  desc: "权力高度集中，个人服从集体，恐惧作为统治工具。M4（大他者阻断）表现为不可僭越的国家机器与物理剥权。",
  defEn: "Concentrated power mapping to absolute Other. M4 (The Big Other) manifests as an untransgressable state apparatus.",
  items: [
    {
      id: "absolute_monarchy",
      name: "绝对君主制",
      nameEn: "Absolute Monarchy",
      def: "朕即国家。君权神授，皇帝的身体就是法律，不可质疑的权威。",
      defEn: "L'État, c'est moi. Emperor's body is the law, an unquestionable authority.",
      core: "【换喻】皇权的任性 vs 臣民的恐惧 (The arbitrary power of the crown vs. the fear of the subjects)",
      coreEn: "【Metonymy】The throne is the ultimate Big Other; the arbitrary power of the crown vs. the fear of the subjects.",
      reference: "《末代皇帝》拥太和殿生杀大权、圣体即国法的孤绝真龙；《疯狂的麦克斯4》垄断水源将臣民视作血袋的不死老乔。",
      referenceEn: "\"The Last Emperor\" isolated emperor holding absolute power; \"Mad Max\" Immortan Joe monopolizing water as bloodbags."
    },
    {
      id: "military_junta",
      name: "军政府",
      nameEn: "Military Junta",
      def: "戒严令常态化。军队掌权，宵禁，街头的坦克，绝对的暴力压制。",
      defEn: "Normalized martial law. Tanks on streets, absolute violence, curfews.",
      core: "【换喻】枪杆子里的秩序 vs 市民生活的凋敝 (Order from the barrel of a gun vs. blighted civil life)",
      coreEn: "【Metonymy】Order built on sheer ballistic threat vs. the crushing of daily existence.",
      reference: "《迷墙》用铁斧劈门、将不顺从者投入绞肉机的铁棍暴徒；《人类之子》街头坦克布控、将难民锁入铁笼的持枪网。",
      referenceEn: "\"The Wall\" uniformed thugs smashing non-conformists; \"Children of Men\" tanks guarding streets rounding up immigrants."
    },
    {
      id: "police_state",
      name: "警察国家",
      nameEn: "Police State",
      def: "秘密警察，告密文化，每个人都是嫌疑人。为了安全牺牲一切自由。",
      defEn: "Secret police, informant culture. Everyone is a suspect; freedom traded for security.",
      core: "【换喻】无处不在的猜忌 vs 封闭的家庭空间 (Omnipresent paranoia vs. suffocated private sphere)",
      coreEn: "【Metonymy】Paranoia bleeding into everything; the microscopic gaze of the state.",
      reference: "《窃听风暴》在阁楼死死监听楼下伴侣耳语心跳的灰衣国安；《V字仇杀队》黑车载走每一名嫌疑者榨取秘密的极权红手。",
      referenceEn: "\"The Lives of Others\" Stasi phantoms wiretapping every whisper; \"V for Vendetta\" Fingermen black-bagging suspects."
    },
    {
      id: "theocracy_radical",
      name: "极端神权",
      nameEn: "Radical Theocracy",
      def: "教法即国法。宗教警察，公开处刑，禁止娱乐，通过恐惧维持圣洁。",
      defEn: "Dogma is law. Religious police, public executions, maintaining 'holiness' through absolute fear.",
      core: "【换喻】人性的欲望 vs 神性的戒律 (Human desire vs. Divine commandment)",
      coreEn: "【Metonymy】The impossible purity of dogma pressing against the inevitability of human bodily desire.",
      reference: "《使女的故事》红衣死裹女性、以挖眼狂热捍卫教义的吉列国；《仲夏夜惊魂》披着白衣鲜花活活烧死外人的畸态公社。",
      referenceEn: "\"The Handmaid's Tale\" red-robed women mutilated for dogma; \"Midsommar\" flower-crowned villagers burning outsiders alive."
    },
    {
      id: "cult_compound",
      name: "邪教公社",
      nameEn: "Cult Compound",
      def: "封闭的小型极权社会。魅力型领袖，洗脑，集体自杀的阴影。",
      defEn: "Enclosed micro-totalitarianism. Charismatic leader, brainwashing, shadow of mass suicide.",
      core: "【换喻】虚假的归属感 vs 剥削与控制 (False belonging vs. Parasitic control)",
      coreEn: "【Metonymy】Eden-like façade masking hell; false belonging compensating for absolute exploitation.",
      reference: "《曼迪》血红灯光下靠致幻剂与扭曲经文吸干少女的魔尊；《双面玛莎》用虚假归属与洗脑将女孩逼至终生惊恐的农庄。",
      referenceEn: "\"Mandy\" hippie demagogue draining a soul via LSD; \"Martha Marcy May Marlene\" a smiling commune shattering a girl's sanity."
    },
    {
      id: "surveillance_state",
      name: "全景监控",
      nameEn: "Surveillance State",
      def: "边沁式全景监狱。无处不在的摄像头、信用分与预犯罪系统。隐私即背叛。",
      defEn: "Bentham's Panopticon. Omnipresent cameras, social credit, pre-crime algorithms.",
      core: "【换喻】看不见的观察者与内化的自我审查 (The invisible watcher and the internalized self-censorship)",
      coreEn: "【Metonymy】The gaze of the Big Other internalized into the subject's own psychological matrix.",
      reference: "《1984》墙上从不阖眼死盯每丝微表情的巨大老大哥电幕；《全民公敌》调控全城天眼追捕得受害者无处遁形的铁云网络。",
      referenceEn: "\"1984\" Big Brother telescreens assessing every micro-expression; \"Enemy of the State\" inescapable satellites tracking a victim."
    },
    {
      id: "gerontocracy",
      name: "老人政治",
      nameEn: "Gerontocracy",
      def: "统治者全在生理残喘。社会停滞，压抑年轻人的生命力，依靠输血维持秩序。",
      defEn: "Rulers on life support. Social stagnation suppressing youth's vitality, sustained by blood-siphoning.",
      core: "【换喻】腐朽的肉体 vs 新生的渴望 (Rotten, decaying flesh vs. desperate craving for rebirth)",
      coreEn: "【Metonymy】The nation as a giant hospice; the dead clutching the living.",
      reference: "《疯狂的麦克斯4》插着无菌管吸男童鲜血续命的溃烂军阀；《银翼杀手》金字塔顶端因肉身垂死怒瞎双眼的生化财阀泰瑞尔。",
      referenceEn: "\"Mad Max\" rotting warlord sustained by blood transfusions; \"Blade Runner\" decaying tycoon Tyrell violently blinded at the top."
    },
    {
      id: "patriarchy_absolute",
      name: "绝对父权",
      nameEn: "Absolute Patriarchy",
      def: "《使女的故事》。女性作为财产或生育工具，建立在性别等级之上的终极压迫。",
      defEn: "Gilead-like society. Women strictly as property or breeding tools; gendered totalitarianism.",
      core: "【换喻】性别的阶级化与子宫的国有化 (Classification of gender and nationalization of wombs)",
      coreEn: "【Metonymy】Phallocentric Big Other rendering bodies strictly into state apparatus tools.",
      reference: "《使女的故事》剥夺真名强冠以父族代号的行走生育红袍；《疯狂的麦克斯4》锁上铁面罩困于密室专供统治者产子的种母。",
      referenceEn: "\"The Handmaid's Tale\" red wombs branded with patriarchal codes; \"Mad Max\" breeders locked in iron masks strictly for bearing heirs."
    },
    {
      id: "ethnostate",
      name: "种族血统国",
      nameEn: "Ethnostate / Genetic Caste",
      def: "基于血脉、肤色或基因的极其严格等级体系。纯血者为天，混血等为贱民。",
      defEn: "Strict caste system based on blood, DNA, or race. Purebloods rule; mutants/hybrids are untouchable.",
      core: "【换喻】基因层面的傲慢与隔离墙 (Genetic arrogance and the segregation walls)",
      coreEn: "【Metonymy】The segregation algorithm encoded in DNA; cleaning the 'impurities'.",
      reference: "《千钧一发》验血死卡阶梯、令自然分娩洗一辈子马桶的琉璃殿；《第九区》将外星大虾绝情赶入残败隔离营的武装白人。",
      referenceEn: "\"Gattaca\" glass city filtering elites via DNA; \"District 9\" armed units forcing alien refugees into squalid concentration camps."
    },
    {
      id: "bureaucracy_hell",
      name: "官僚地狱",
      nameEn: "Bureaucratic Hell",
      def: "没有面孔的暴政。卡夫卡式的城堡。无尽的审批、排队，一切皆流程。",
      defEn: "Kafkaesque tyranny. Faceless, endless approvals, stamp-collecting; nobody is responsible but everyone is trapped.",
      core: "【换喻】系统空转的绝望与责任的消散 (The despair of idling systems and diffusion of responsibility)",
      coreEn: "【Metonymy】The ultimate faceless tyrant; individual life worn down by an infinite loop of paperwork.",
      reference: "《妙想天开》因系统打错一字便将良民送入绞肉椅的无头案牍部；《审判》迷宫长廊里永远冷眼互推皮球的面瘫卷宗员。",
      referenceEn: "\"Brazil\" a typo sending an innocent citizen to a torture chair; \"The Trial\" paralyzed clerks in endless mazes shifting blame."
    },
    {
      id: "prison_colony",
      name: "监狱殖民地",
      nameEn: "Prison Colony",
      def: "整个大陆/星球都是犯人流放地，只有野蛮的丛林法则。",
      defEn: "Entire planet/continent is a penal colony. Bare survival and jungle law.",
      core: "【换喻】底线的探底实验 (An experiment probing the absolute bottom line of morality)",
      coreEn: "【Metonymy】The social construct collapsed; violence as the only universal currency.",
      reference: "《纽约大逃亡》曼哈顿圈以高墙死水任由暴徒建国的极黑监牢；《异形3》深空尽头塞满最凶戾剃头狂徒的废弃熔炉矿星。",
      referenceEn: "\"Escape from New York\" Manhattan walled off into a thug-ruled kingdom; \"Alien 3\" a deep-space foundry infested with violent inmates."
    },
    {
      id: "puppet_state",
      name: "傀儡政权",
      nameEn: "Puppet State",
      def: "表面独立，实为深层代理人或外国附庸。国家尊严被贩卖。",
      defEn: "Ostensibly independent, practically a vassal. National dignity sold by compradors.",
      core: "【换喻】虚假的王冠与隐秘的牵线手 (The fake crown and the hidden puppeteer's strings)",
      coreEn: "【Metonymy】Absence of actual sovereignty; the ruler is just a glorified slave to an off-screen Master.",
      reference: "《攻壳机动队2》在美帝资本暗线拉扯下毫无主体尊严的极东诸国；《人类之子》徒有政府宣告实则早被全球大国绞烂的英伦。",
      referenceEn: "\"Ghost in the Shell 2\" Far East nations as disposable chess pieces; \"Children of Men\" Britain reduced to rubble and puppet-broadcasts."
    }
  ]
};
