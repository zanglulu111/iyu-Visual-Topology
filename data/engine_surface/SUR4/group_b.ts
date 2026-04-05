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
      logic: "【全责外包法则】：M4（律令）不再是法律，而是劳动合同。主体 M1 被彻底客体化为人事资源（HR），M6（死亡）的降临往往是因为失去了商业剩余价值。",
      logicEn: "[Total Outsourcing]: M4 is a labor contract, not law. M1 is objectified into a Human Resource. M6 (Death) strikes when surplus value hits zero.",
      patch: {
        mechanics: "基础公司协议 + [绩效压迫指数 = MAX; 人身依附度 = 极高]",
        mechanicsEn: "Base_CORPORATE + [KPI_Oppression = MAX; Personal_Dependency = Very_High]",
        aesthetic: "聚焦：巨型企业Logo、高耸入云的总部、霓虹广告、无处不在的工牌与安保。文本：光伏玻璃后的冰冷傲慢。",
        aestheticEn: "Focus: Giant Corp Logos + Towering HQs + Pervasive ID Badges. Text: Cold arrogance behind tinted glass.",
        runtime: "IF (绩效连续三次不达标或触犯核心资产) THEN (立即触发：从社群中物理抹除并剥夺医保/居住权)。",
        runtimeEn: "IF (Missing_KPIs_or_Threatening_Assets) THEN (Immediate_Trigger: Physical erasure and revoking of healthcare/housing)."
      }
    },
    {
      id: "cyberpunk_dystopia",
      name: "高科技低生活",
      nameEn: "High Tech Low Life / Cyberpunk",
      def: "极度的贫富差距。技术发达但社会腐烂。生命廉价，义体高昂。",
      defEn: "Extreme wealth gap. High tech, rotting society. Life is cheap, chrome is expensive.",
      core: "【换喻】血肉的贬值与机械的神圣 (The devaluation of flesh vs. the sanctity of machinery)",
      coreEn: "【Metonymy】Technology scaling up while the human soul scales down.",
      logic: "【肉体折旧法则】：在 M4（赛博资本）眼中，M2（真实肉体）是充满Bug的劣质品。M5（行动）的强化必须通过购买义体，从而让主体陷入永远欠债的循环。",
      logicEn: "[Flesh Depreciation]: To M4 (Cyber-Capital), M2 (The Body) is a buggy inferior product. Enhancing M5 (Action) requires chrome, trapping M1 in infinite debt.",
      patch: {
        mechanics: "基础朋克协议 + [贫富隔离度 = 绝望级; 生物资产化比率 = 1.0]",
        mechanicsEn: "Base_PUNK + [Wealth_Segregation = Despair; Bio-Capitalization_Ratio = 1.0]",
        aesthetic: "聚焦：酸雨、街头黑诊所、全息女郎、拾荒者身上的发光管线。文本：繁华虚影下的肮脏泥泞。",
        aestheticEn: "Focus: Acid rain + Ripperdocs + Holographic girls + Neo-kitsch vs Entropism. Text: Grimy mud beneath neon illusions.",
        runtime: "IF (无法支付抗免疫抑制剂的费用) THEN (强制触发：义体赛博精神病式的身体背叛)。",
        runtimeEn: "IF (Cannot_Pay_for_Immunosuppressants) THEN (Force_Trigger: Cyberpsychosis/Body betraying the mind)."
      }
    },
    {
      id: "consumer_hive",
      name: "消费蜂巢",
      nameEn: "Consumerist Hive",
      def: "整个社会是一座巨大的商场。存在的唯一意义是消费，娱乐至死。",
      defEn: "Society as a mega-mall. Existing solely to consume; amusing ourselves to death.",
      core: "【换喻】快乐的奴隶与填不满的空虚 (Happy slaves and the unfillable void)",
      coreEn: "【Metonymy】Commodity fetishism replacing all spiritual longing; amusing oneself into the abyss.",
      logic: "【软性绞杀法则】：M4 不使用暴力，而是提供无限廉价的多巴胺（商品）。它提前填满了 M1 的“缺失”，让主体永远无法产生真正有破坏力的 M3（欲望）。",
      logicEn: "[Soft Strangulation]: M4 uses cheap dopamine, not violence. It preemptively plugs M1's 'hole', preventing any truly disruptive M3 (Desire) from forming.",
      patch: {
        mechanics: "基础景观协议 + [多巴胺供给率 = 过载; 深度思考衰减 = 极快]",
        mechanicsEn: "Base_SPECTACLE + [Dopamine_Supply = Overload; Deep_Thought_Decay = Rapid]",
        aesthetic: "聚焦：色彩斑斓的包装、网红直播间、堆积如山的快递盒、永不熄灭的广告屏。文本：欢快的背景音与令人作呕的糖精味。",
        aestheticEn: "Focus: Colorful packaging + Live streams + Mountains of packages + Endless screens. Text: Cheerful BGM masking saccharine nausea.",
        runtime: "IF (试图停止消费或进行断网冥想) THEN (触发：系统判定为抑郁症并强制推送“快乐胶囊”商品)。",
        runtimeEn: "IF (Attempt_To_Stop_Consuming) THEN (Trigger: System flags as depressed -> Force ad delivery of 'Joy Pills')."
      }
    },
    {
      id: "gig_economy_hell",
      name: "零工地狱",
      nameEn: "Gig Economy Hell",
      def: "所有人都是算法的奴隶。没有雇佣关系，只有任务、倒计时与罚款。",
      defEn: "Slaves to the algorithm. No employment, just gigs, countdowns, and fines.",
      core: "【换喻】原子化的狂奔 (Atomized frenzy in the digital hamster wheel)",
      coreEn: "【Metonymy】The gamification of survival; racing against a red progress bar.",
      logic: "【时间剥削法则】：M4 被隐藏在一个不会流汗的“云端派单系统”背后。M5（行动）被精确切割为毫无意义的碎片任务，个体的疲惫被数据的准时性彻底抹平。",
      logicEn: "[Time Exploitation]: M4 hides behind a cloud algorithm. M5 (Action) is sliced into meaningless micro-tasks. Exhaustion is erased by data punctuality.",
      patch: {
        mechanics: "基础零工协议 + [时间压迫感 = 致命; 个体原子化程度 = 绝对]",
        mechanicsEn: "Base_GIG + [Time_Pressure = Lethal; Atomization = Absolute]",
        aesthetic: "聚焦：手机接单界面、奔跑的外卖员、倒计时红条、格子间、共享单车坟场。文本：喘着粗气与冰冷的“已超时”提示音。",
        aestheticEn: "Focus: Gig-app UI + Running couriers + Red countdowns + Cubicles. Text: Heavy panting vs cold 'Timed Out' beeps.",
        runtime: "IF (任务超时或出现同情心导致延误) THEN (立刻触发：积分清零与信用破产的双重碾压)。",
        runtimeEn: "IF (Order_Times_Out_or_Delayed_By_Pity) THEN (Immediate_Trigger: Points wiped and credit bankruptcy)."
      }
    },
    {
      id: "plutocracy",
      name: "金权政治",
      nameEn: "Plutocracy",
      def: "有钱即正义。法律明码标价，贫穷是唯一的罪行，极致的物理隔离。",
      defEn: "Wealth is justice. Law has a price tag; poverty is the only sin. Extreme physical insulation.",
      core: "【换喻】可购买的生命权 (Purchasable right to life)",
      coreEn: "【Metonymy】Everything, including gravity and oxygen, is behind a paywall.",
      logic: "【资本折现法则】：M4（法律与正义）彻底向金钱投降，失去其超越性。在这样的世界里，M6（死亡/惩罚）是仅仅留给穷人的特权。",
      logicEn: "[Capital Discounting]: M4 (Law/Justice) surrenders entirely to money. Therefore, M6 (Death/Punishment) becomes an exclusive 'privilege' solely for the poor.",
      patch: {
        mechanics: "基础金权协议 + [执法双标率 = 100%; 金钱万能指数 = 破格]",
        mechanicsEn: "Base_WEALTH + [Law_Double_Standard = 100%; Money_Omnipotence = Broken]",
        aesthetic: "聚焦：富人区的气候穹顶 vs 穷人区的毒气球、黄金信用卡、私人雇佣兵。文本：丝滑的傲慢与粗粝的绝望。",
        aestheticEn: "Focus: Climate domes for the rich vs toxic slums + Golden credit cards + Private PMCs. Text: Silky arrogance vs gritty despair.",
        runtime: "IF (穷人视图跨越物理隔离区) THEN (系统自动触发：无需审判的防卫性射击)。",
        runtimeEn: "IF (Poor_Attempt_To_Cross_Zones) THEN (Auto_Trigger: Lethal defensive firing without trial)."
      }
    },
    {
      id: "neo_feudalism",
      name: "新封建主义",
      nameEn: "Neo-Feudalism",
      def: "极少数巨富寡头拥有所有资源，现代人实质上是依附于公司领主的农奴。",
      defEn: "Tech-lords own all resources. Modern humans are essentially serfs bound to corporate lords.",
      core: "【换喻】科技包裹的依附关系 (Feudal dependency wrapped in tech)",
      coreEn: "【Metonymy】A return to the Middle Ages, but the castles are made of server racks.",
      logic: "【数字采邑法则】：这是一种倒退。M4（象征界）放弃了资本主义的“自由贸易”伪装，直接转为“人身依附”。M3（欲望）的最高级仅仅是获得领主的庇护。",
      logicEn: "[Digital Fiefdom]: M4 abandons 'free market' illusions for direct vassalage. M3's highest peak is merely gaining the Lord's shelter.",
      patch: {
        mechanics: "基础封建协议 + [阶级流动性 = 冻结; 效忠宣誓 = 现代变体]",
        mechanicsEn: "Base_FEUDAL + [Class_Mobility = Frozen; Oath_of_Fealty = Modernized]",
        aesthetic: "聚焦：封闭的科技园区、严格的等级制服（工装）、无法偿还的世代债务契约。文本：用PPT和OKR包装的农奴制规范。",
        aestheticEn: "Focus: Walled tech campuses + Stratified uniforms + Generational debt contracts. Text: Serfdom disguised as OKRs and synergy.",
        runtime: "IF (试图退出领地的系统生态) THEN (必须触发：犹如失去中世纪封地保护一样的彻底社会性蒸发)。",
        runtimeEn: "IF (Attempt_To_Opt_Out_Of_Ecosystem) THEN (Must_Trigger: Complete social evaporation, like a banished serf)."
      }
    },
    {
      id: "casino_capitalism",
      name: "赌场资本主义",
      nameEn: "Casino Capitalism",
      def: "投机盛行，实体空心化。所有人都在赌博杠杆，梦想一夜暴富，随时满盘皆输。",
      defEn: "Rampant speculation, hollow real economy. Everyone leverages on gambles, risking total ruin for overnight riches.",
      core: "【换喻】泡沫的绚烂与坠落 (The neon brilliance of the bubble and the splatter of the fall)",
      coreEn: "【Metonymy】The total financialization of reality; where labor is mocked and luck is worshipped.",
      logic: "【概率膜拜法则】：M4（稳定的秩序）被随机数和K线图彻底抹除。主体 M5 的努力显得可笑，唯有通过极度疯狂的下注来触碰 M6（破产/死亡之渊）。",
      logicEn: "[Probability Worship]: M4 is obliterated by RNG and stick charts. M5 (Hard work) is a joke; only frantic betting brushing against M6 (Ruin) matters.",
      patch: {
        mechanics: "基础金融协议 + [市场波动率 = 天灾级; 劳动收益比 = 趋近于0]",
        mechanicsEn: "Base_FINANCE + [Volatility = Natural_Disaster; Labor_Return_Ratio = Near_0]",
        aesthetic: "聚焦：红绿交织的股指数字、老虎机拉杆、发狂的交易员、天台上的皮鞋。文本：刺耳的开盘铃声与绝望的寂静。",
        aestheticEn: "Focus: Red/Green tickers + Slot machines + Frantic traders + Shoes on the rooftop. Text: Piercing opening bells and deafening silence.",
        runtime: "IF (拒绝加杠杆参与游戏) THEN (会被通货膨胀和阶层跌落的系统重力直接碾死)。",
        runtimeEn: "IF (Refusal_To_Leverage) THEN (Crushed instantly by the systemic gravity of hyper-inflation and class dropping)."
      }
    },
    {
      id: "debt_bondage",
      name: "债务奴役",
      nameEn: "Debt Bondage",
      def: "出生即负债。一生都在还贷，甚至连氧气和器官分期都需要打工偿还。",
      defEn: "Born into debt. A life of installments, paying off the loan for organs and oxygen.",
      core: "【换喻】被透支的未来 (The future heavily overdrawn)",
      coreEn: "【Metonymy】Freedom is just the gap between two billing cycles.",
      logic: "【未来抵押法则】：M1 的“存在”本身就是一种过错（负资产）。大他者 M4 通过一套精密的复利系统锁死了主体的一生，M2（肉体）变成了抵押物。",
      logicEn: "[Future Mortgage]: M1's very existence is a negative asset. M4 locks the subject into compound interest, turning M2 (The Body) into collateral.",
      patch: {
        mechanics: "基础债务协议 + [利息增速 = 吸血级; 负债继承 = 强制]",
        mechanicsEn: "Base_DEBT + [Interest_Rate = Vampiric; Hereditary_Debt = Mandatory]",
        aesthetic: "聚焦：体内植入的收账追踪器、倒计时账单、拍卖行、器官被强制回收的手术台。文本：催收员冰冷而有礼帽的威胁。",
        aestheticEn: "Focus: Debt-tracker implants + Countdown bills + Repo surgical tables. Text: Cold, dangerously polite repo threats.",
        runtime: "IF (逾期未还款达到阈值) THEN (强制触发：从外肢体开始的物理回收程序)。",
        runtimeEn: "IF (Default_Threshold_Reached) THEN (Force_Trigger: Physical repossession protocol starting from extremities)."
      }
    },
    {
      id: "attention_economy",
      name: "注意力经济体",
      nameEn: "Attention Economy",
      def: "流量即货币。为了博取眼球可以抛弃一切底线。不被看见就等于不存在。",
      defEn: "Traffic is currency. Bottom lines abandoned for views. Not being perceived equals non-existence.",
      core: "【换喻】景观社会下的数字剥削 (Digital exploitation within the Society of the Spectacle)",
      coreEn: "【Metonymy】The screen as the ultimate altar; bleeding out for likes and subscriptions.",
      logic: "【凝视即存在】：真正的 M4 退场，取而代之的是由“大众的凝视”组成的无面目巨怪。主体为了填补 M1 的空虚，必须不断通过猎奇的 M5 动作来讨好系统。",
      logicEn: "[Gaze Equals Existence]: The true M4 exits, replaced by the faceless monster of 'The Crowd's Gaze'. M1 attempts to fill the void via increasingly grotesque M5 (Actions).",
      patch: {
        mechanics: "基础媒体协议 + [流量波动致死率 = 高; 道德下限 = 负数]",
        mechanicsEn: "Base_MEDIA + [Metric_Drop_Lethality = High; Moral_Floor = Negative]",
        aesthetic: "聚焦：刺眼的环形补光灯、夸张堆叠的点赞特效、直播意外死亡的镜头。文本：狂欢式的弹幕掩盖了主体的呼救。",
        aestheticEn: "Focus: Blinding ring lights + Exploding like-buttons + Live-streamed deaths. Text: Carnivalesque chat streams drowning out cries for help.",
        runtime: "IF (遭遇断网或失去热度连续24小时) THEN (触发：因数字身份消亡引发的深刻精神崩溃与社会学死亡)。",
        runtimeEn: "IF (Disconnected_or_Irrelevant_for_24_Hours) THEN (Trigger: Existential meltdown and sociological death via algorithmic irrelevance)."
      }
    },
    {
      id: "pharma_state",
      name: "药物控制",
      nameEn: "Pharma State",
      def: "全民嗑药。《美丽新世界》的苏摩。情绪被制药巨头通过化学配方精准管理。",
      defEn: "Brave New World's Soma. Emotions meticulously managed by Big Pharma via chemical cocktails.",
      core: "【换喻】被化学阉割的精神痛苦 (Spiritual suffering chemically castrated)",
      coreEn: "【Metonymy】Erasing the Real (Trauma) by rewriting the biological receptors.",
      logic: "【神经劫持法则】：M4 直接绕过了法律与文化，侵入了 M2（肉体的神经递质）。悲伤、愤怒等可能引发革命的 M5（前驱力）都被合法地“治愈”了。",
      logicEn: "[Neurological Hijack]: M4 bypasses law and culture, hacking M2 (neurotransmitters). Grief and anger—catalysts for M5—are legally 'cured'.",
      patch: {
        mechanics: "基础生化协议 + [情绪阻断力 = 绝对; 戒断致死率 = 高]",
        mechanicsEn: "Base_PHARMA + [Emotion_Block = Absolute; Withdrawal_Lethality = High]",
        aesthetic: "聚焦：五颜六色的胶囊、放大的无神瞳孔、毫无缘由的整齐微笑、阴暗角落的抽搐者。文本：宁静得令人毛骨悚然。",
        aestheticEn: "Focus: Pastel capsules + Dilated vacant pupils + Uniform, baseless smiles + Twitching in dark corners. Text: A horrifying, artificial serenity.",
        runtime: "IF (试图停止服药以感受真实的痛苦) THEN (触发：戒断反应与被医疗系统定性为“精神危险分子”的追捕)。",
        runtimeEn: "IF (Attempt_To_Stop_Meds_To_Feel_Pain) THEN (Trigger: Lethal withdrawal and being hunted as a 'Mental Hazard' by medical units)."
      }
    },
    {
      id: "resource_curse",
      name: "资源诅咒",
      nameEn: "Resource Curse",
      def: "富得流油却极度落后腐败。完全依赖单一资源（石油/香料），引来无尽觊觎。",
      defEn: "Filthy rich yet brutally backwards. Dependent on a single resource (Oil/Spice) drawing endless warfare.",
      core: "【换喻】地下的宝藏与地上的鲜血 (The treasures below and the blood above)",
      coreEn: "【Metonymy】The land itself is the curse; geography dictating a bloody destiny.",
      logic: "【单维榨取法则】：社会的 M4 律令简化为极其粗暴的唯一指标：控制资源（M3）。谁控制资源谁就是主宰，其他所有的文明建构均是海市蜃楼。",
      logicEn: "[Mono-Extraction]: M4 is simplified to the violent control of one raw material (M3). Civilization is just a mirage covering the extraction rig.",
      patch: {
        mechanics: "基础地缘协议 + [财富失衡度 = MAX; 武装冲突频次 = 日常]",
        mechanicsEn: "Base_GEOPOLITICS + [Wealth_Imbalance = MAX; Armed_Conflict = Daily]",
        aesthetic: "聚焦：巨大的钻井管道、黑色的石油（或异星发光矿物）、拿着AK的童兵与远处的黄金跑车。文本：刺鼻的硫磺味与腥味。",
        aestheticEn: "Focus: Massive drilling rigs + Black oil / glowing ore + Child soldiers w/ AKs next to golden supercars. Text: Stench of sulfur and blood.",
        runtime: "IF (这片土地被探测出存在更大储量的资源) THEN (必然触发：外部大国的直接武装干涉或政变)。",
        runtimeEn: "IF (Larger_Resource_Deposits_Detected) THEN (Must_Trigger: Immediate armed intervention or coup by foreign superpowers)."
      }
    },
    {
      id: "black_market",
      name: "黑市社会",
      nameEn: "Black Market",
      def: "地上秩序崩坏。一切皆可买卖（枪支、器官、记忆），地下交易维持社会运转。",
      defEn: "Surface order collapsed. Everything has a price (guns, organs, memories).",
      core: "【换喻】罪恶中的生机与灰白地带 (Vitality within sin and the ultimate gray zone)",
      coreEn: "【Metonymy】The total commodification of taboos. Morality replaced by exchange value.",
      logic: "【逆向律令法则】：传统的白道 M4 已经死去，真正的支配者是隐秘而残酷的“市场法则”。M6（死亡/拆解）在这里仅仅是一道普通的供应链工序。",
      logicEn: "[Inverse Law]: The traditional light M4 is dead. The true ruler is the brutal 'Market Law' in the dark. M6 (Death/Dismemberment) is just a supply chain procedure.",
      patch: {
        mechanics: "基础交易协议 + [禁忌商品化程度 = 100%; 契约暴力担保 = 满级]",
        mechanicsEn: "Base_TRADE + [Taboo_Commodification = 100%; Violent_Contract_Enforcement = MAX]",
        aesthetic: "聚焦：滴水的地下通道、装满冰块和器官的浴缸、持枪的蛇头、面无表情的估价师。文本：阴暗、潮湿与毫无波澜的讨价还价。",
        aestheticEn: "Focus: Dripping tunnels + Bathtubs with ice/organs + Armed smugglers. Text: Damp, dark, and utterly nonchalant haggling over lives.",
        runtime: "IF (没有足够的硬通货却试图索取) THEN (交易对象自动转换为你的身体器官或寿命)。",
        runtimeEn: "IF (Attempting_To_Acquire_Without_Hard_Currency) THEN (Currency defaults to your organs or lifespan)."
      }
    }
  ]
};
