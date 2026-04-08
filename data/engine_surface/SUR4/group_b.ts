import { LibraryCategoryDef } from '../../../types';

export const SUR4_GROUP_B: LibraryCategoryDef = {
  id: "soc_capital",
  name: "2. 资本与公司 (Capital & Corporate)",
  nameEn: "Capital & Corporate",
  desc: "金钱至上，效率驱动。M4（大他者阻断）表现为利润算法、KPI与无情的资本异化。",
  defEn: "Money above all, efficiency-driven. M4 manifests as profit algorithms, KPIs, and ruthless alienation of capital.",
  items: [
    {
      id: "corp_state",
      name: "企业国家",
      nameEn: "Corporatocracy",
      def: "政府私有化。三星/荒坂接管一切，绩效即法律，被解雇等于被流放。",
      defEn: "Privatized government. Arasaka-style takeover. Performance is law; being fired equals exile.",
      core: "【换喻】公民向员工的降维 (The degradation of citizens into employees)",
      coreEn: "【Metonymy】Rights traded for corporate dependency. The Company is the omnipotent Big Other.",
      reference: "《异形》为捕获异种视无数船员如草芥随意报废的维兰德公司；《银翼杀手》霓虹全息大妈下只手遮天垄断克隆命脉的财阀。",
      referenceEn: "\"Alien\" Weyland-Yutani casually scrapping crews for bioweapons; \"Blade Runner\" Tyrell monopolizing clone lifelines globally."
    },
    {
      id: "cyberpunk_dystopia",
      name: "高科技低生活",
      nameEn: "High Tech Low Life / Cyberpunk",
      def: "极度的贫富差距。技术发达但社会腐烂。生命廉价，义体高昂。",
      defEn: "Extreme wealth gap. High tech, rotting society. Life is cheap, chrome is expensive.",
      core: "【换喻】血肉的贬值与机械的神圣 (The devaluation of flesh vs. the sanctity of machinery)",
      coreEn: "【Metonymy】Technology scaling up while the human soul scales down.",
      reference: "《边缘行者》全息广告下交不起医保绝望停机的流落义体人；《银翼杀手》酸雨浇灌、街头满是人造霓虹与煮面摊的底层棚户。",
      referenceEn: "\"Cyberpunk: Edgerunners\" a chrome-junkie flatlining for unpaid insurance; \"Blade Runner\" slums drenched in acid rain and neon."
    },
    {
      id: "consumer_hive",
      name: "消费蜂巢",
      nameEn: "Consumerist Hive",
      def: "整个社会是一座巨大的商场。存在的唯一意义是消费，娱乐至死。",
      defEn: "Society as a mega-mall. Existing solely to consume; amusing ourselves to death.",
      core: "【换喻】快乐的奴隶与填不满的空虚 (Happy slaves and the unfillable void)",
      coreEn: "【Metonymy】Commodity fetishism replacing all spiritual longing; amusing oneself into the abyss.",
      reference: "《恐怖黎明》商场里麻木徘徊只为残存购物本能的丧尸群；《华尔街之狼》用毒品和漫天美钞将肉欲狂欢撑至极限的金条派对。",
      referenceEn: "\"Dawn of the Dead\" zombies numbly wandering malls via consumer instinct; \"The Wolf of Wall Street\" roaring parties stretching greed."
    },
    {
      id: "gig_economy_hell",
      name: "零工地狱",
      nameEn: "Gig Economy Hell",
      def: "所有人都是算法的奴隶。没有雇佣关系，只有任务、倒计时与罚款。",
      defEn: "Slaves to the algorithm. No employment, just gigs, countdowns, and fines.",
      core: "【换喻】原子化的狂奔 (Atomized frenzy in the digital hamster wheel)",
      coreEn: "【Metonymy】The gamification of survival; racing against a red progress bar.",
      reference: "《对不起我们错过了你》狂赶包裹倒计时吐惨鲜血的快递员；《黑镜》骑在单车上死死踩踏板只为换取虚拟观影币的底层肉肺。",
      referenceEn: "\"Sorry We Missed You\" bleeding deliveryman beating courier countdowns; \"Black Mirror\" pedal-slaves grinding bikes for ad-currency."
    },
    {
      id: "plutocracy",
      name: "金权政治",
      nameEn: "Plutocracy",
      def: "有钱即正义。法律明码标价，贫穷是唯一的罪行，极致的物理隔离。",
      defEn: "Wealth is justice. Law has a price tag; poverty is the only sin. Extreme physical insulation.",
      core: "【换喻】可购买的生命权 (Purchasable right to life)",
      coreEn: "【Metonymy】Everything, including gravity and oxygen, is behind a paywall.",
      reference: "《时间规划局》富人不老而贫民一秒交不齐便心火猝绝的惨景；《饥饿游戏》涂脂抹粉的都城贵族狂笑观赏贫童荒野互杀直播。",
      referenceEn: "\"In Time\" slum-dwellers dropping dead lacking time currency; \"Hunger Games\" painted Capitol aristocrats cheering slaughtered teens."
    },
    {
      id: "neo_feudalism",
      name: "新封建主义",
      nameEn: "Neo-Feudalism",
      def: "极少数巨富寡头拥有所有资源，现代人实质上是依附于公司领主的农奴。",
      defEn: "Tech-lords own all resources. Modern humans are essentially serfs bound to corporate lords.",
      core: "【换喻】科技包裹的依附关系 (Feudal dependency wrapped in tech)",
      coreEn: "【Metonymy】A return to the Middle Ages, but the castles are made of server racks.",
      reference: "《沙丘》横跨星系垄断香料将平民视作收割机前飞沙蝼蚁的贵族；《阿丽塔》汲取下方废铁城垃圾以维持奢靡神权的撒冷浮岛。",
      referenceEn: "\"Dune\" Intergalactic Houses monopolizing Spice leaving commoners to dust; \"Alita\" floating utopia Zalem bleeding the Scrap City."
    },
    {
      id: "casino_capitalism",
      name: "赌场资本主义",
      nameEn: "Casino Capitalism",
      def: "投机盛行，实体空心化。所有人都在赌博杠杆，梦想一夜暴富，随时满盘皆输。",
      defEn: "Rampant speculation, hollow real economy. Everyone leverages on gambles, risking total ruin for overnight riches.",
      core: "【换喻】泡沫的绚烂与坠落 (The neon brilliance of the bubble and the splatter of the fall)",
      coreEn: "【Metonymy】The total financialization of reality; where labor is mocked and luck is worshipped.",
      reference: "《大空头》暴徒对崩塌数字狂笑无视千万家庭流离失所的癫狂算盘；《未切割的钻石》满屏滚动的比分里疯狂押上全家的赌徒。",
      referenceEn: "\"The Big Short\" Wall Street laughing at collapsing numbers while millions lose homes; \"Uncut Gems\" jeweler betting life on scores."
    },
    {
      id: "debt_bondage",
      name: "债务奴役",
      nameEn: "Debt Bondage",
      def: "出生即负债。一生都在还贷，甚至连氧气和器官分期都需要打工偿还。",
      defEn: "Born into debt. A life of installments, paying off the loan for organs and oxygen.",
      core: "【换喻】被透支的未来 (The future heavily overdrawn)",
      coreEn: "【Metonymy】Freedom is just the gap between two billing cycles.",
      reference: "《重生男人》因分期断供被冷血铁汉当街剖腹摘取脏腑的破产者；《鱿鱼游戏》身负血债连扇耳光签下卖身契投身死亡游戏的大叔。",
      referenceEn: "\"Repo Men\" a bankrupt man sliced open for unpaid artificial organs; \"Squid Game\" a debt-drowned loser signing for a deadly playground."
    },
    {
      id: "attention_economy",
      name: "注意力经济体",
      nameEn: "Attention Economy",
      def: "流量即货币。为了博取眼球可以抛弃一切底线。不被看见就等于不存在。",
      defEn: "Traffic is currency. Bottom lines abandoned for views. Not being perceived equals non-existence.",
      core: "【换喻】景观社会下的数字剥削 (Digital exploitation within the Society of the Spectacle)",
      coreEn: "【Metonymy】The screen as the ultimate altar; bleeding out for likes and subscriptions.",
      reference: "《楚门的世界》全城演戏将真人的悲喜活压成收视率的偷窥穹顶；《夜行者》游荡午夜毫不施救只为拍血腥尸体换取沸腾点击的狂人。",
      referenceEn: "\"The Truman Show\" fake city extorting a man's tears for global ratings; \"Nightcrawler\" ghoul capturing corpses for shock-news."
    },
    {
      id: "pharma_state",
      name: "药物控制",
      nameEn: "Pharma State",
      def: "全民嗑药。《美丽新世界》的苏摩。情绪被制药巨头通过化学配方精准管理。",
      defEn: "Brave New World's Soma. Emotions meticulously managed by Big Pharma via chemical cocktails.",
      core: "【换喻】被化学阉割的精神痛苦 (Spiritual suffering chemically castrated)",
      coreEn: "【Metonymy】Erasing the Real (Trauma) by rewriting the biological receptors.",
      reference: "《撕裂的末日》冷酷液每日按时气压注射换取全城面瘫铁律的修道院；《美丽新世界》吞微甜苏摩强行抹平一切反叛的流水线温床。",
      referenceEn: "\"Equilibrium\" daily emotion-suppressant injections enforcing expressionless order; \"Brave New World\" Soma pills overwriting rebel angst."
    },
    {
      id: "resource_curse",
      name: "资源诅咒",
      nameEn: "Resource Curse",
      def: "富得流油却极度落后腐败。完全依赖单一资源（石油/香料），引来无尽觊觎。",
      defEn: "Filthy rich yet brutally backwards. Dependent on a single resource (Oil/Spice) drawing endless warfare.",
      core: "【换喻】地下的宝藏与地上的鲜血 (The treasures below and the blood above)",
      coreEn: "【Metonymy】The land itself is the curse; geography dictating a bloody destiny.",
      reference: "《疯狂的麦克斯4》垄断水闸对准灾民如施舍般恩赐泄洪的不死堡垒；《血钻》从烂泥抠出粉钻招致整个村庄被突击步枪剿碎的焦土。",
      referenceEn: "\"Mad Max\" Immortan Joe hoarding hydro-valves dripping mercy; \"Blood Diamond\" sparkling stones from mud drawing rifle massacres."
    },
    {
      id: "black_market",
      name: "黑市社会",
      nameEn: "Black Market",
      def: "地上秩序崩坏。一切皆可买卖（枪支、器官、记忆），地下交易维持社会运转。",
      defEn: "Surface order collapsed. Everything has a price (guns, organs, memories).",
      core: "【换喻】罪恶中的生机与灰白地带 (Vitality within sin and the ultimate gray zone)",
      coreEn: "【Metonymy】The total commodification of taboos. Morality replaced by exchange value.",
      reference: "《银翼杀手》雨夜白炽灯管下叫卖人造眼球和毒蛇的阴冷亚裔地摊；《攻壳机动队》逼仄缝隙里强行接入劣质废弃电子脑芯片的暗巷。",
      referenceEn: "\"Blade Runner\" stallholders peddling vat-grown eyeballs under rain; \"Ghost in the Shell\" back-alleys splicing cheap cyber-brains."
    }
  ]
};
