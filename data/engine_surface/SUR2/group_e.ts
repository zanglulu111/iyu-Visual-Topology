import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_E: LibraryCategoryDef = {
    id: "era_industry",
    name: "05. 蒸汽与钢铁 (Industry & Empire)",
    desc: "机器的轰鸣。资本取代血缘。对自然的彻底征服与人类自身的机械化异化。",
    items: [
      {
        id: "regency_dance",
        name: "摄政舞会", nameEn: "Regency Era",
        def: "简奥斯汀庄园，精致礼仪，婚姻作为唯一阶梯。",
        defEn: "Austen manors, fine etiquette, marriage as only ladder.",
        core: "微观社交战争。舞会礼节中进行的残酷阶级筛选。 | 锚定 ($): M3 蕾丝绞刑 (Lace_Noose)",
        coreEn: "Micro social war. Cruel class filtering in ball rites. | Anchor ($): M3 Lace_Noose",
        logic: "【象征界的密室逃脱】：在没有宏大战争的年代，女性被锁定在一个全是“潜规则（大他者语用学）”的封闭网络中。每一场舞会都是一次算力极高的黑客攻防，眼神、扇子与裙带关系决定了主体的生死存亡（婚姻）。",
        logicEn: "[Symbolic Escape Room]: In an era without grand war, women are locked in a closed network full of 'unspoken rules (Other's pragmatics)'. Every ball is a high-hash hack defense; gazes, fans & nepotism decide subject's life/death (marriage).",
        patch: {
            mechanics: "微表情解析算法 + [声誉值 = 生命条; 结婚焦虑 = 每秒掉血; 遗产继承权 = 物理断网]",
            mechanicsEn: "Micro_Expr_Parse_Algo + [Reputation = HP; Marriage_Anx = DPS; Heir_Right = Phys_Disconnect]",
            aesthetic: "极其明亮的乡间庄园与精致骨瓷茶具。隐藏在微笑背后、比刀剑更锋利的言辞交锋。",
            aestheticEn: "Extremely bright country manors & fine bone china. Verb clashes sharper than swords hidden behind smiles.",
            runtime: "IF (在舞会上连续三支舞没有绅士邀约) THEN (触发：在周围贵妇优雅的窃窃私语中感到社会性窒息)",
            runtimeEn: "IF (3 straight dances with no gent invite at ball) THEN (Trigger: Social suffocation amid elegant whispers of surrounding ladies)"
        }
      },
      {
        id: "wild_west_frontier",
        name: "西部拓荒", nameEn: "Wild West Frontier",
        def: "左轮手枪，法律真空。铁路与淘金热。",
        defEn: "Revolvers, law vacuum. Railroads & gold rush.",
        core: "秩序的暴力扩张。铁路入侵野性时的绝对牺牲。 | 锚定 ($): M5 荒野除轨 (Wild_Derail)",
        coreEn: "Violent order expansion. Absolute sacrifice when rail invades wild. | Anchor ($): M5 Wild_Derail",
        logic: "【外周网络强行接入】：西部是尚未被“东部秩序（大他者）”格式化的保留地。牛仔与法外狂徒在此享受着暴力的实在界。但随着铁路（工业算力与法律符号）强行铺设，这种游牧自由很快被资本网络暴力收编。",
        logicEn: "[Peripheral Net Force-Connect]: West is a reserve not yet formatted by 'East Order (Other)'. Cowboys & outlaws enjoy violent Real here. But as railroads (ind. hash & law signifiers) force-lay, this nomad freedom is violently annexed by cap net.",
        patch: {
            mechanics: "资本铁轨铺设协议 + [拔枪速度 = 唯一仲裁; 印第安地权 = 强制抹除; 秩序化速度 = 指数极]",
            mechanicsEn: "Cap_Rail_Lay_Protocol + [Draw_Speed = Only_Arbiter; Indian_Land = Force_Wipe; Format_Speed = Exp]",
            aesthetic: "漫天黄沙与风滚草。孤独的警长面对三个法外狂徒，远处传来代表工业文明末日审判般的蒸汽火车轰鸣。",
            aestheticEn: "Dusty sky & tumbleweeds. Lonely sheriff vs 3 outlaws; distant steam train roar roaring like industrial doomsday trial.",
            runtime: "IF (在没有任何法律的镇子边缘发现了金矿) THEN (触发：在三天内建立起一座充满妓院、赌场并最终互相杀戮的瞬息繁荣)",
            runtimeEn: "IF (Gold found on edge of lawless town) THEN (Trigger: In 3 days building flash-boom town full of brothels/casinos ending in mutual slaughter)"
        }
      },
      {
        id: "victorian_fog",
        name: "维多利亚雾都", nameEn: "Victorian Fog",
        def: "工业革命，开膛手。体面外表与肮脏底层。",
        defEn: "Ind. Rev, Ripper. Decent facade vs dirty slums.",
        core: "双重道德分裂。上流虚伪与底层的绝对赤裸。 | 锚定 ($): M2 煤烟镜像 (Soot_Mirror)",
        coreEn: "Dual moral split. High-class hypocrisy vs slum total nakedness. | Anchor ($): M2 Soot_Mirror",
        logic: "【系统架构的物理割裂】：伦敦被切分为两个子网。上层是极度繁复的道德超我（束腰/晚宴），下层是被工业废水排毒的本我垃圾场（东区白教堂）。开膛手杰克就是从潜意识（东区）溢出、用手术刀向表层（西区）报错的幽灵。",
        logicEn: "[Sys Arch Phys Split]: London partitioned into 2 subnets. Upper is ultra-complex moral superego (corsets/dinners), lower is id dump poisoned by industrial waste (East End Whitechapel). Jack the Ripper is the ghost overflowing from ID (East End) throwing errors at UI (West End) with a scalpel.",
        patch: {
            mechanics: "阶级防火墙隔离 + [虚伪值 = 社交必需品; 物理可见度 = 浓雾遮蔽; 贫民预期寿命 = 极低]",
            mechanicsEn: "Class_Firewall_Iso + [Hypocrisy = Social_Req; Phys_Vis = Smog_Blind; Slum_Life_Exp = V.Low]",
            aesthetic: "煤气灯在浓厚的黄色伦敦雾中闪烁。穿着燕尾服的绅士在黑巷中与满身泥垢的暗娼进行肮脏交易。",
            aestheticEn: "Gaslights flickering in thick yellow London smog. Tailcoated gents in dark alleys doing dirty trades with mud-caked whores.",
            runtime: "IF (白天在议会发表演讲痛斥道德沦丧的议员) THEN (触发：夜晚戴上高帽子潜入东区鸦片馆寻找变态刺激)",
            runtimeEn: "IF (MP giving daytime speeches bashing moral decay) THEN (Trigger: Nights wearing top hat sneaking to East End opium dens for sick kicks)"
        }
      },
      {
        id: "gilded_age_mogul",
        name: "镀金时代", nameEn: "Gilded Age USA",
        def: "垄断大亨，摩天大厦初现。极度贫富分化。",
        defEn: "Monopoly moguls, first skyscrapers. Extreme wealth split.",
        core: "资本无限制膨胀。金钱成为重组人性的唯一算法。 | 锚定 ($): M1 黄金异化 (Gold_Alienation)",
        coreEn: "Cap inflates limitlessly. Money as sole algo rebuilding humanity. | Anchor ($): M1 Gold_Alienation",
        logic: "【唯物算法覆盖】：所有的神学与旧贵族礼法被暴力的“垄断资本（洛克菲勒/卡内基）”彻底覆盖。金钱从工具变成了大他者本身，人类主体沦为资本高速增殖的宿主与肉鸡。",
        logicEn: "[Material Algo Override]: All theology & old noble rites forcefully overridden by violent 'monopoly cap (Rockefeller/Carnegie)'. Money turns from tool to Other itself, human subjects reduced to fast-breeding hosts/bots for cap.",
        patch: {
            mechanics: "无监管赢家通吃 + [托拉斯垄断率 = 100%; 劳工可消耗性 = 耗材级; 财富炫耀 = 极其恶俗]",
            mechanicsEn: "Unreg_Winner_Take_All + [Trust_Monopoly = 100%; Labor_Consume = Discardable; Wealth_Flex = V.Vulgar]",
            aesthetic: "镶满黄金的暴发户豪宅。窗外不远处是钢铁厂冒出的遮天蔽日的黑烟与因工伤断腿的罢工工人。",
            aestheticEn: "Gold-plated nouveau riche mansions. Just outside windows, steel mills belching sky-blocking black smoke & striking workers with severed legs.",
            runtime: "IF (在华尔街利用内幕交易摧毁了竞争对手的铁路公司) THEN (触发：晚上在豪华舞会上用美元点燃雪茄庆祝)",
            runtimeEn: "IF (Destroying rival rail corp via Wall St insider trade) THEN (Trigger: Lighting cigars with dollar bills at luxury ball celebrating at night)"
        }
      },
      {
        id: "late_qing_shame",
        name: "晚清余晖", nameEn: "Late Qing",
        def: "辫子与洋枪，鸦片与租界。衰败文明与强权的荒诞交汇。",
        defEn: "Queues & foreign guns, opium & concessions. Decaying civ meets power in absurdity.",
        core: "范式的剧痛。旧文明在全方位代差打击下的精神解体。 | 锚定 ($): M6 碎梦溃崩 (Shatter_Collapse)",
        coreEn: "Pains of paradigm. Old civ spirit collapse under full gen-gap strikes. | Anchor ($): M6 Shatter_Collapse",
        logic: "【大他者的强制外包】：天朝上国的封闭内网被工业化坚船利炮强行凿穿（Root破防）。传统儒家的“天下”大他者轰然倒塌，士大夫阶层被迫将意义的定义权外包给西方的丛林法则，导致极度的精神分裂。",
        logicEn: "[Force Outsourcing Other]: Celestial Empire's closed intranet forcefully breached by industrialized ironclads & guns (Root hacked). Traditional Confucian 'Tianxia' Other collapses, scholars forced to outsource meaning def to Western jungle law, causing extreme schizophrenia.",
        patch: {
            mechanics: "降维打击报错循环 + [磕头协议 = 无效; 割地赔款 = 例行任务; 民族自卑感 = Max]",
            mechanicsEn: "Dim_Drop_Err_Loop + [Kowtow_Protocol = Null; Cede_Pay = Routine; Nation_Inferiority = Max]",
            aesthetic: "极其荒诞的视觉缝合。穿着马褂拖着长辫的官员，局促地坐在西方照相机前；背后是冒烟的租界蒸汽船。",
            aestheticEn: "Extremely absurd visual suture. Officials in magua with long queues sitting awkwardly before Western cameras; smoking concession steamships behind.",
            runtime: "IF (熟读四书五经的状元看到洋人的开花弹瞬间摧毁了城墙) THEN (触发：长达千年的认知框架瞬间粉碎，陷入无法修补的虚无)",
            runtimeEn: "IF (Top scholar deeply read in Four Books sees foreign shell instantly destroy wall) THEN (Trigger: 1000-year cog-frame instantly shatters into unfixable void)"
        }
      },
      {
        id: "meiji_western",
        name: "明治维新", nameEn: "Meiji Restoration",
        def: "全盘西化，最后武士。蒸汽机车穿线古稻田。",
        defEn: "Total westernize, last samurai. Steam trains thread old paddies.",
        core: "身份的物理剥除。为强国割断灵魂记忆的剧烈阵痛。 | 锚定 ($): M3 维新切腹 (Restoration_Seppuku)",
        coreEn: "Phys stripping of identity. Severe pains of cutting soul memory to strengthen nation. | Anchor ($): M3 Restoration_Seppuku",
        logic: "【操作系统的暴力重装】：为防止像清朝一样被降维打击，日本政府选择“自毁原配内核”。废刀令强行卸载了武士阶层的所有权限。这是一种极度实用主义的格式化，但也导致了旧主体的哀鸣与迅速崛起的军国主义变异。",
        logicEn: "[OS Violent Reinstall]: To avoid Qing-style dim-drop strike, Jap gov selects 'auto-destruct native kernel'. Sword-Ban force-uninstalls all samurai privs. It's highly pragmatist format, but causes wail of old subjects and rapid mutant rise of militarism.",
        patch: {
            mechanics: "自毁升级强行推送 + [西装普及率 = 强制; 传统厌弃 = 系统级; 军功渴望 = 爆发]",
            mechanicsEn: "Self_Destruct_Update_ForcePush + [Suit_Adopt = Forced; Trad_Disgust = Sys_Level; Mil_Merit_Thirst = Boom]",
            aesthetic: "穿着不合身西装和和服混搭的官员。木屐与皮鞋的踏步声叠杂。加特林机枪扫射冲锋的旧武士。",
            aestheticEn: "Officials mixing ill-fitting suits with kimonos. Geta and leather shoes stomping overlapping. Gatling guns mowing down charging old samurai.",
            runtime: "IF (曾经主宰生死的高级武士被要求剪掉发髻) THEN (触发：在失去所有社会存在感后，决定拔刀走向早已布好火炮的政府军阵地)",
            runtimeEn: "IF (High samurai once dictating life/death told to cut topknot) THEN (Trigger: Losing all social presence, deciding to draw sword and walk to pre-laid gov cannon lines)"
        }
      },
      {
        id: "belle_epoque_paris",
        name: "美好年代", nameEn: "Belle Époque",
        def: "1900巴黎红磨坊，新艺术运动。一战前乐观与颓废。",
        defEn: "1900 Paris Moulin Rouge, Art Nouveau. Pre-WW1 optimism & decadence.",
        core: "暴风雨前静谧。表面繁荣享乐掩盖地下反抗与虚无。 | 锚定 ($): M2 世纪末回光 (Fin_de_Siecle_Glow)",
        coreEn: "Calm before storm. Vaneer of boom joy hides underground rebel/void. | Anchor ($): M2 Fin_de_Siecle_Glow",
        logic: "【内存溢出的幻觉】：欧洲迎来了极度和平与科技爆发。电灯将夜晚变为白昼，人类以为自己已经用无穷的“消费品（大他者恩赐）”战胜了死亡。但这种享乐主义实际上是对即将到来的世界大战屠宰厂的无意识回避（压抑机制）。",
        logicEn: "[Mem Leak Illusion]: Europe gets extreme peace & tech boom. Electric lights turn night to day, man thinks they beat death via endless 'consumer goods (Other's boon)'. But this hedonism is actually an unconscious evade (repress mech) of upcoming WW1 slaughterhouse.",
        patch: {
            mechanics: "世纪末享乐屏蔽罩 + [咖啡馆艺术辩论 = 狂热; 无政府炸弹危机 = 隐秘潜伏; 乐观指数 = 虚高]",
            mechanicsEn: "Fin-de-Siecle_Joy_Shield + [Cafe_Art_Debate = Feverish; Anarchist_Bomb_Crisis = Stealth_Lurk; Optimism = Bubble]",
            aesthetic: "红磨坊的康康舞大腿。马卡龙般粉嫩甜美的裙摆。但角落的阴影里，一个无政府主义者正在组装定时炸弹。",
            aestheticEn: "Moulin Rouge can-can thighs. Macaron pastel sweet skirts. But in shadow corners, an anarchist assembles a time bomb.",
            runtime: "IF (在满是香槟与欢笑的世博会展厅内) THEN (触发：突然听到远处传来萨拉热窝几声沉闷的枪响，宣告梦境强制结束)",
            runtimeEn: "IF (Inside Expo hall full of champagne & laughs) THEN (Trigger: Suddenly hearing muted gunshots from Sarajevo afar, announcing dream's forced end)"
        }
      },
      {
        id: "colonial_exp_india",
        name: "英属印度", nameEn: "Raj Era",
        def: "大英帝国与土邦王公。殖民者傲慢与丛林异域反噬。",
        defEn: "Brit Emp & Maharajas. Colonist awe vs jungle exotic backlash.",
        core: "黑暗之心。文明人在异域逐渐丧失人性的本我吞噬。 | 锚定 ($): M4 丛林异变 (Jungle_Mutate)",
        coreEn: "Heart of darkness. Civilized man loses humanity to Id in alien wild. | Anchor ($): M4 Jungle_Mutate",
        logic: "【秩序沙盒在高温下的融化】：带着“白人负担（超我指令）”去统治印度的英国佬，在脱离了伦敦灰蒙蒙的道德凝视后，被印度极度浓烈的色彩、香料和阶级顺从所包围。他们的超我迅速溶解在地平线上，沦为被热带疾病与极权欲望控制的变态狂。",
        logicEn: "[Order Sandbox Melting in Heat]: Brits taking 'White Man's Burden (superego prompt)' to rule India, once detached from London's grey moral gaze, are engulfed by India's ultra-dense colors, spices, and rank submission. Their superego dissolves on the horizon, sinking into psychos ruled by tropic disease and total-power lust.",
        patch: {
            mechanics: "热带滤镜腐蚀协议 + [白人负罪感 = 逐渐关闭; 当地人依附 = 毒性; 疟疾致幻率 = 高]",
            mechanicsEn: "Tropic_Filter_Corrupt_Protocol + [White_Guilt = Gradual_Off; Local_Attach = Toxic; Malaria_Hallucine = High]",
            aesthetic: "骑着挂满珠宝的大象进入茂密丛林打大猫。满头大汗的英国军官在华盖下喝着兑了奎宁的金酒，双眼布满血丝。",
            aestheticEn: "Riding jewel-draped elephants into dense jungle to hunt big cats. Sweaty Brit officers drinking quinine gin under canopies, eyes bloodshot.",
            runtime: "IF (年轻的理查德被派往偏远土邦统治五万人) THEN (触发：三年后他不再穿英国军装，而是穿着当地长袍在密室中向卡利女神献祭)",
            runtimeEn: "IF (Young Richard sent to rule 50k in remote Raj state) THEN (Trigger: 3 yrs later stops wearing UK uniform, wears local robes doing Kali blood sacrifices in secret room)"
        }
      },
      {
        id: "opium_war_canton",
        name: "鸦片战争/广州", nameEn: "Opium Canton",
        def: "十三行与禁烟，中西逻辑错位与全球化血腥开端。",
        defEn: "13 Factories & opium ban, East-West logic mismatch & bloody global start.",
        core: "不平等交换的暴力。自由贸易包装下的世界观强制缝合。 | 锚定 ($): M6 毒雾接口 (Toxic_API_Port)",
        coreEn: "Violence of unequal swap. Free trade mask force-suturing worldviews. | Anchor ($): M6 Toxic_API_Port",
        logic: "【API协议暴力冲突】：大清的“天朝朝贡体系（封建JSON）”与大英的“自由贸易体系（资本主义RESTAPI）”无法互通。当正常商品无法平衡贸易逆差时，大英直接注入了能瘫痪主体神经系统的“物理病毒（鸦片）”，并用大炮强行开通了接口。",
        logicEn: "[API Protocol Violent Clash]: Qing's 'Celestial Tribute Sys (Feudal JSON)' and Brit's 'Free Trade Sys (Cap REST API)' cannot handshake. When normal goods fail to balance deficit, Brits inject 'phys virus (opium)' paraylzing subject's nervous sys, and force open ports via cannons.",
        patch: {
            mechanics: "炮舰强制开流 + [外源毒品依赖 = 极高; 天朝傲慢崩溃 = 瞬间; 贸易关税 = 被动归零]",
            mechanicsEn: "Gunboat_Force_Stream + [Foreign_Drug_Depend_Rate = V.High; Celestial_Awe_Crash = Instant; Trade_Tariff = Passive_Zeroed]",
            aesthetic: "散发着浓烈烟膏香气的昏暗大床，骨瘦如柴的贵族烟鬼旁边，是广州港口外停泊着的漆黑锃亮的英国铁甲舰。",
            aestheticEn: "Dark beds smelling of thick opium paste. Skeletal noble addicts next to dark shiny Brit ironclads docked outside Canton port.",
            runtime: "IF (大清钦差大臣愤怒地烧毁了所有走私鸦片) THEN (触发：大他者的法律对不讲武德的资本暴力彻底无效，换来的是炮弹犁地)",
            runtimeEn: "IF (Qing imperial envoy angrily burns all smuggled opium) THEN (Trigger: Other's law totally void against cap violence no-rules, yielding cannon-plowed earth instead)"
        }
      },
      {
        id: "industrial_manchester",
        name: "曼彻斯特工厂", nameEn: "Factory Hell",
        def: "煤烟，童工，人作为机器零件。狄更斯炼狱。",
        defEn: "Soot, child labor, man as machine part. Dickensian purgatory.",
        core: "肉体机械化。人被降格为时间单位后的底线反抗。 | 锚定 ($): M1 齿轮吞噬 (Gear_Devour)",
        coreEn: "Flesh mechanization. Man downgraded to time units pushing bottom-line react. | Anchor ($): M1 Gear_Devour",
        logic: "【主体肉体的物理降维】：资本主义工厂剥夺了工人的“作品所有权与创意”。主体不再是完整的人（手工业者），而被切割为负责单一肌肉收缩的“肉体齿轮”。在震耳欲聋的蒸汽机噪音中，语言与人性被彻底碾碎。",
        logicEn: "[Subject's Phys Dim-Drop]: Cap factory strips worker 'prod-ownership & idea'. Subject no longer whole person (artisan), sliced into 'flesh gears' doing single muscle flexes. Under deafening steam noise, language & humanity get crushed.",
        patch: {
            mechanics: "血汗极值榨取 + [肺结核率 = 飙升; 剩余价值压溃 = 临界点; 卢德分子破坏 = 频发]",
            mechanicsEn: "Sweat_Max_Extract + [TB_Rate = Soaring; Surplus_Value_Crush = Tipping_Point; Luddite_Break = Freq]",
            aesthetic: "看不见太阳的黑灰色天空。满脸煤灰、手指残缺的七岁童工在巨大的纺织机下爬行。冷酷的包工头拿着皮鞭。",
            aestheticEn: "Grey-black skies blocking sun. 7yo child labor with soot faces & missing fingers crawling under giant looms. Cold bosses holding whips.",
            runtime: "IF (一个疲惫的工人被卷入传动带搅碎) THEN (触发：不仅没有任何赔偿，工厂主还会扣除他弄脏机器的清洗费用)",
            runtimeEn: "IF (Tired worker sucked into belt & shredded) THEN (Trigger: Not only zero comp, owner deducts cleaning fee for dirtying machine)"
        }
      },
      {
        id: "american_civil_war",
        name: "南北战争", nameEn: "US Civil War",
        def: "种植园与奴隶制，工业北对抗农业南。",
        defEn: "Plantations & slavery, Ind North vs Agri South.",
        core: "正义的代价。为废除邪恶释放更巨大的工业战暴力。 | 锚定 ($): M5 伦理重炮 (Ethics_Artillery)",
        coreEn: "Cost of justice. Releasing greater ind-war violence to abolish an evil. | Anchor ($): M5 Ethics_Artillery",
        logic: "【双重实在界碰撞】：南方维持着种植园奴隶制的“前现代实在界”，北方为了强迫其并入“资本主义统一大图景”，不得不启动了人类历史上第一场真正意义的工业化屠杀（铁甲舰、加特林、战地外科锯断）。为了抽象的正义，肉体付出了极端的物理代价。",
        logicEn: "[Dual Real Collide]: South keeps plantation slavery 'pre-modern Real', North force-merges it into 'Cap unified big picture', sparking humanity's first truly industrialized slaughter (ironclads, Gatlings, field bone saws). For abstract justice, flesh pays extreme phys price.",
        patch: {
            mechanics: "工业绞肉机协议 + [废奴合法性 = 绝对掩护; 步兵排队枪毙 = 极高损耗; 兄弟阵营敌对 = 锁定]",
            mechanicsEn: "Ind_Meat_Grinder_Protocol + [Abolish_Legitimacy = Abs_Cover; Line_Infantry_Shootout = V.High_Loss; Brother_Camp_Hostile = Locked]",
            aesthetic: "穿着血迹斑斑蓝灰军服的年轻人。泥泞的战壕中堆满被锯下的截肢，远处的黑奴在燃烧的庄园里唱歌。",
            aestheticEn: "Young men in blood-stained blue/grey uniforms. Muddy trenches full of sawn-off limbs, distant slaves singing in burning manors.",
            runtime: "IF (北军占领了南方的某个繁华城市) THEN (触发：为了摧毁敌方的战争意志，执行谢尔曼式的焦土政策，烧毁一切可见建筑)",
            runtimeEn: "IF (North captures rich South city) THEN (Trigger: To break enemy war will, execute Sherman's scorched earth, burning all visible bldgs)"
        }
      },
      {
        id: "russian_serfdom",
        name: "沙俄农奴制", nameEn: "Russian Serfdom",
        def: "冬宫与冻土，说法语的贵族与绝望农奴。",
        defEn: "Winter Palace & permafrost, French-speaking nobles & desperate serfs.",
        core: "文明的脱节。极度西化贵族统治绝望的落后农民。 | 锚定 ($): M3 折叠雪原 (Folded_Snowfield)",
        coreEn: "Civ disconnect. Ultra-western nobles ruling desperate backward peasants. | Anchor ($): M3 Folded_Snowfield",
        logic: "【UI与底层的语言互斥】：沙俄上层（圣彼得堡）强行安装了欧洲启蒙运动的UI，贵族们用流利的法语谈论伏尔泰；而底层系统（广袤农奴）却依然运行着中世纪的泥土代码。这种极端脱节的带宽使得沟通完全不可能，剩下的只有冰冷的皮鞭与在酒馆里酝酿的刺杀。",
        logicEn: "[UI-Base Lang Mutex]: Tsardom upper (St. Petersburg) force-installs Euro Enlightenment UI, nobles speak fluent French debating Voltaire; base sys (vast serfs) runs medieval mud code. This extreme desync leaves zero bandwidth for comms, only cold whips and pub-brewed assassinations.",
        patch: {
            mechanics: "阶层断网报错隔离 + [法语流利度 = 阶级凭证; 农奴生存线 = 踩在死亡边界; 革命潜能 = 持续充能]",
            mechanicsEn: "Class_Disconnect_Err_Iso + [French_Fluency = Class_Token; Serf_Survive_Line = Tread_Death; Revolut_Potent = Contin_Charge]",
            aesthetic: "灯火辉煌的冬宫内正随着圆舞曲旋转。窗外零下四十度的风雪中，冻死的农夫尸体被野狗啃食。",
            aestheticEn: "Brilliant Winter Palace spinning to waltzes. Outside in -40C blizzard, frozen peasant corpses chewed by wild dogs.",
            runtime: "IF (受过西方教育的青年军官看到农奴被当做牲口买卖) THEN (触发：十二月党人的觉醒，在冰天雪地的广场上发动注定失败但极其诗意的兵变)",
            runtimeEn: "IF (West-educated young officer sees serfs traded as cattle) THEN (Trigger: Decembrist awakening, launching doomed but ultra-poetic mutiny in snowy square)"
        }
      },
      {
        id: "austro_hungarian",
        name: "奥匈帝国/茨威格", nameEn: "Yesterday World",
        def: "维也纳蓝色多瑙河，多民族帝国的瓦解前夜。",
        defEn: "Vienna Blue Danube, multi-ethnic empire's eve of collapse.",
        core: "怀旧的陷阱。在精致文化中对毁灭的优雅麻木。 | 锚定 ($): M2 华尔兹安眠 (Waltz_Sleep)",
        coreEn: "Trap of nostalgia. Elegant numbness to doom amidst refined culture. | Anchor ($): M2 Waltz_Sleep",
        logic: "【系统进入只读缓刑期】：这是一个知道自己即将崩溃、但决定用最优美的姿态走向死亡的陈旧服务器。维也纳的知识分子（弗洛伊德、茨威格）用极其敏锐的咖啡馆谈话，精准分析了自己的病症，但拒绝（也无力）进行任何物理阻断。这是一种华丽的系统性抑郁。",
        logicEn: "[Sys Enters Read-Only Probation]: An old server knowing it will crash, but deciding to die in peak grace. Vienna intellectuals (Freud, Zweig) use hyper-sharp cafe talks to perfectly diagnose their illness, but refuse (and lack power) to do phys block. It's gorgeous systemic depression.",
        patch: {
            mechanics: "多民族兼容死锁 + [艺术鉴赏力 = 全球巅峰; 政治行动力 = 瘫痪; 末日优雅度 = 必须满分]",
            mechanicsEn: "Multi-Ethnic_Compat_Deadlock + [Art_Apprec = Global_Peak; Polit_Action = Paralyzed; Doom_Elegance = Must_Max]",
            aesthetic: "华丽的金色大厅飘荡着斯特劳斯。白发的老皇帝在美泉宫批阅文件。外省的民族主义炸弹正在倒计时。",
            aestheticEn: "Gorgeous Musikverein echoing Strauss. White-haired old emperor signs papers in Schönbrunn. Provincial nationalist bombs ticking.",
            runtime: "IF (收到了帝国边缘可能爆发战争的急电) THEN (触发：在咖啡馆点一杯萨赫蛋糕，写下一篇悲伤忧郁的绝美散文)",
            runtimeEn: "IF (Receives urgent wire of likely war at empire edge) THEN (Trigger: Orders Sachertorte at cafe, writing sad melancholic gorgeous prose)"
        }
      },
      {
        id: "zulu_war",
        name: "祖鲁战争", nameEn: "Zulu War",
        def: "红制服步枪对土著长矛。部落主权与帝国扩张相撞。",
        defEn: "Red coats & rifles vs native spears. Tribe sovereignty vs emp expansion.",
        core: "血肉与钢铁的强对撞。原始勇气在火器面前的悲歌。 | 锚定 ($): M1 血肉盾牌 (Flesh_Shield)",
        coreEn: "Hard collide of flesh & steel. Sad song of raw courage vs firearms. | Anchor ($): M1 Flesh_Shield",
        logic: "【大他者不可通约的物理绞断】：当装备了马蒂尼-亨利步枪（工业算力）的英军，遭遇了拥有极度纪律与勇气的祖鲁战士（肉体算力极值）。这是资本主义帝国机甲与前现代部落狂战士的正面硬刚，个人的勇敢和荣耀在子弹初速面前被残酷除魅。",
        logicEn: "[Other's Incommensurable Phys Shear]: When Brits armed with Martini-Henry rifles (ind hash) meet highly disciplined/brave Zulu warriors (flesh hash max). It's Cap Empire mecha vs pre-modern tribe berserkers; personal bravery & honor are cruelly disenchanted by bullet muzzle velocity.",
        patch: {
            mechanics: "冷热兵器代差碾压 + [火力压制 = 绝对优势; 肉体突进意志 = 不怕死; 荣耀感 = 均等但异质]",
            mechanicsEn: "Cold_Hot_Weapon_Gap_Crush + [Fire_Suppress = Abs_Advantage; Flesh_Rush_Will = Fearless; Honor_Sense = Equal_But_Alien]",
            aesthetic: "烈日下的非洲荒原。戴着白色防冰帽排成整齐两列的红衣方阵，面对漫山遍野举着牛皮盾牌如黑色海浪般涌来的战士。",
            aestheticEn: "Blistering African savanna. White-helmeted redcoat square in neat 2 rows, facing mountains of warriors surging like black waves holding ox-hide shields.",
            runtime: "IF (在伊散德尔瓦纳三千祖鲁人冲破了英军防线) THEN (触发：在肉搏战中，现代军队的工业傲慢被原始的投枪瞬间清零)",
            runtimeEn: "IF (At Isandlwana 3k Zulus break Brit lines) THEN (Trigger: In melee, modern army's ind arrogance instantly zeroed by raw throwing spears)"
        }
      },
      {
        id: "boxer_rebellion",
        name: "庚子国变", nameEn: "Boxer Uprising",
        def: "刀枪不入的幻觉，大使馆被围，八国联军末日狂欢。",
        defEn: "Invulnerability illusion, embassies besieged, 8-Nation Alliance doom party.",
        core: "迷信的疯狂反弹。屈辱致幻造成的深重自残。 | 锚定 ($): M4 神打漏洞 (God_Strike_Exploit)",
        coreEn: "Superstition's mad bounce. Humiliation causes hallucinogenic deep self-harm. | Anchor ($): M4 God_Strike_Exploit",
        logic: "【精神内核的系统故障（Panicked）】：当传统中国（旧主体）无法用理智解析接连不断的现代沉重打击时，底层意识直接崩溃跳闸，调用了最荒谬的民间迷幻插件（刀枪不入）。这是一种因极度屈辱导致的集体精神分裂式的“应激免疫风暴”。",
        logicEn: "[Spirit Kernel Sys Fault (Panicked)]: When trad China (old subject) fails to rationally parse constant modern heavy blows, base consciousness crashes & trips, invoking absurd folk hallucinogen plugins (invulnerability). This is a collective schizophrenic 'stress immune storm' from extreme humiliation.",
        patch: {
            mechanics: "绝望致幻狂热网 + [神怪Buff信度 = 100%; 物理防御力 = 实际为0; 仇外纯度 = 排除一切洋物]",
            mechanicsEn: "Despair_Hallucine_Fever_Net + [God_Buff_Trust = 100%; Phys_Def = Actual_0; Xenophobe_Purity = Purge_All_Foreign]",
            aesthetic: "画着奇怪符文、穿着红肚兜在火枪阵前挥舞大刀的迷信拳民。紫禁城内燃烧的荒凉与八国联军在龙椅上的嘲笑合影。",
            aestheticEn: "Superstitious Boxers with weird runes & red aprons waving big swords before firing lines. Forb City burning bleakness vs 8-Nation forces laughing posing on Dragon Throne.",
            runtime: "IF (大师兄喝下符水宣称子弹会化为泥水) THEN (触发：成百上千人盲信着冲向机关枪然后像割麦子一样倒下)",
            runtimeEn: "IF (Master drinks runic water claiming bullets turn to mud) THEN (Trigger: Hundreds blindly charge machine guns & fall like chopped wheat)"
        }
      },
      {
        id: "taiping_heavenly",
        name: "太平天国", nameEn: "Taiping Rebellion",
        def: "上帝之子，拜上帝教，江南血肉磨坊与乌托邦腐化。",
        defEn: "Son of God, God Worshiping, Jiangnan meat grinder & utopia rot.",
        core: "信仰异化怪胎。救世乌托邦演变为疯狂屠杀。 | 锚定 ($): M6 伪天国崩溃 (False_Heaven_Crash)",
        coreEn: "Mutant faith alienation. Savior utopia devolves into mad slaughters. | Anchor ($): M6 False_Heaven_Crash",
        logic: "【外来代码的乱码编译】：一个落第秀才获取了西方基督教神学的残缺源码（天父天兄），将其在极度贫困压抑的广西底层中强行编译。最终生成了一个缝合了“狂热平等主义”与“极度残暴极权”的恐怖大一统BUG，使得中国最富庶的江南化为焦土。",
        logicEn: "[Alien Code Gibberish Compile]: A failed scholar gets broken source code of West Christian theology (God Father/Brother), force-compiles it in ultra-poor repressed Guangxi base. Generates a terrifying unity BUG suturing 'fanatical egalitarianism' & 'ultra-brutal totalitarianism', burning China's richest Jiangnan to ash.",
        patch: {
            mechanics: "异端邪说狂热分发 + [男女隔离 = 严酷; 天王神权 = 绝对不可侵犯; 人口损耗率 = 千万级]",
            mechanicsEn: "Heretic_Fever_Distribut + [Gender_Segreg = Harsh; Heavenly_King_Rule = Abs_Inviolable; Pop_Loss = Tens_of_Millions]",
            aesthetic: "留着长毛的狂热信徒在圣歌中攻城略地。天京（南京）城内奢靡后宫与城外饿死骨堆垒的荒诞对比。",
            aestheticEn: "Long-haired fanatic believers taking cities singing hymns. Absurd contrast of Nanjing's lavish harems vs starved bone piles outside walls.",
            runtime: "IF (攻陷一座被认为是‘清妖’盘踞的城市) THEN (触发：以上帝的名义进行不分老幼的物理清空以‘净化世间’)",
            runtimeEn: "IF (Capturing generic city deemed held by 'Qing demons') THEN (Trigger: In God's name doing phys clear out young/old to 'purify world')"
        }
      },
      {
        id: "crimean_war",
        name: "克里米亚战争", nameEn: "Crimean War",
        def: "电报与战地摄影，南丁格尔与前线指挥极度混乱。",
        defEn: "Telegraphs & war photos, Nightingale vs extreme front chaos.",
        core: "技术介入战争。第一次“被直播”战事的后方残酷牵制。 | 锚定 ($): M3 直播死路 (Live_Broadcast_Doom)",
        coreEn: "Tech intervenes war. Rear's cruel drag on the first 'live-streamed' conflict. | Anchor ($): M3 Live_Broadcast_Doom",
        logic: "【战争API全面曝光】：由于“电报”的接通，前线的残忍流血（实在界）第一次几乎没有延迟地传输到伦敦中产阶级的报纸上。这导致军方的“官僚遮掩程序”失效。公众情绪的神经过敏开始反向操控军事决策。这是人类被媒介技术绑架的先兆。",
        logicEn: "[War API Full Expose]: With 'telegraph' connected, front's cruel bleeding (Real) is first transmitted w/o delay to London middle-class papers. Military 'bureau cover-up routine' fails. Public neurosis reverse-steers mil decisions. It's the omen of humanity hijacked by media tech.",
        patch: {
            mechanics: "战地透明化直连 + [后方舆论压力 = 实时暴击; 将帅指挥 = 畏首畏尾; 医疗护理意识 = 初次觉醒]",
            mechanicsEn: "Battle_Transp_DirectConn + [Rear_Opinion_Press = Realtime_Crit; Gen_Cmd = Timid; Med_Care_Aware = First_Awake]",
            aesthetic: "寒冷泥泞的战壕中爆发霍乱。但旁边却架着早期的笨重照相机记录死尸；轻骑兵在愚蠢的命令下向俄军大炮进行自杀式冲锋。",
            aestheticEn: "Cold muddy trenches erupt with cholera. Yet bulky early cameras nearby record corpses; Light Brigade does suicide charge into Russian guns on stupid orders.",
            runtime: "IF (战地记者发回了一篇关于士兵冻伤且无补给的惨烈报道) THEN (触发：伦敦爆发大规模游行，内阁倒台，前线被迫在错误天气发动进攻以平息民愤)",
            runtimeEn: "IF (War reporter sends back tragic piece on frostbitten unsupplied troops) THEN (Trigger: Mass London protests, cabinet falls, front forced to attack in bad weather to calm public)"
        }
      },
      {
        id: "french_indochina",
        name: "法属印支", nameEn: "French Indochina",
        def: "西贡热带，殖民官邸橡胶园，东南亚优雅与反叛。",
        defEn: "Saigon tropic, col-mansions & rubber plants, SE Asia elegance & rebel.",
        core: "异国毒素侵略。殖民者腐朽与原住民在压抑中觉醒。 | 锚定 ($): M4 橡胶麻药 (Rubber_Narcotic)",
        coreEn: "Exotic toxin invasion. Colonist rot vs native awakening under repress. | Anchor ($): M4 Rubber_Narcotic",
        logic: "【潮湿的代码霉变】：法国人试图用笛卡尔式的几何花园和优雅的法式面包来统治湄公河的泥沼。但热带气候的高熵值缓慢分解了欧洲的结构。白人主体的权力在这里变成了一种慵懒、黏稠的悲情毒药（如杜拉斯的情人）。",
        logicEn: "[Humid Code Mildew]: French try to rule Mekong swamps with Cartesian geo-gardens and elegant baguettes. But tropic climate's high entropy slowly rots Euro structures. White subject power here turns into a lazy, viscous tragic poison (like Duras' Lover).",
        patch: {
            mechanics: "热带慵懒侵蚀网 + [法式优雅滤镜 = 强行维持; 橡胶利润 = 极度血汗; 反殖民意识 = 地下增殖]",
            mechanicsEn: "Tropic_Lazy_Erosi_Net + [French_Ele_Filter = Forced_Maint; Rubber_Profit = Uber_Sweat; Anti-Col_Aware = Undergrad_Breed]",
            aesthetic: "百叶窗后慢慢旋转的吊扇。穿着白色麻布西服流汗的官员。隐藏在郁郁葱葱橡胶林深处的反抗游击队。",
            aestheticEn: "Ceiling fans spinning slowly behind louvers. Sweaty officials in white linen suits. Rebel guerillas hidden deep in lush rubber forests.",
            runtime: "IF (一个富有的法国园主爱上了一个贫穷的安南少女) THEN (触发：在混合着鸦片香气与湄公河腥味的午后，体会到帝国权力即将衰败的虚无)",
            runtimeEn: "IF (Rich French planter falls for poor Annamite girl) THEN (Trigger: In afternoon mixing opium scent & Mekong fishy smell, realizing void of soon-decaying emp power)"
        }
      },
      {
        id: "darwin_galapagos",
        name: "达尔文/进化论", nameEn: "Origin Age",
        def: "孤岛科考，物竞天择。对圣经神创的终极叛逆。",
        defEn: "Isle survey, natural selection. Ult rebellion vs Bible creation.",
        core: "真理的残酷。发现人类只是进化偶然造成的精神危机。 | 锚定 ($): M4 物种除魅 (Species_Disenchant)",
        coreEn: "Cruelty of truth. Discovering man is just random evolution causing psych crisis. | Anchor ($): M4 Species_Disenchant",
        logic: "【人类API接口的生物学降级】：几千年来，宗教大他者向人类保证：你们是神按照自己的Image（绝对特权）设计的。进化论则冷酷地提交了一份补丁：人类仅仅是盲目的“突变与随机筛选”产生的无意义肉体代码。这彻底敲碎了人类自恋的镜子。",
        logicEn: "[Human API Bio-Downgrade]: For millennia, Religious Other assured: you are designed in God's Image (abs privilege). Evolution coldly submits a patch: humans are just meaning-less flesh code bred by blind 'mutate & random select'. This thoroughly smashes human narc mirror.",
        patch: {
            mechanics: "神创图景粉碎机 + [生命意义 = 归零; 生物学残酷属性 = 揭露; 维多利亚信仰崩溃 = 连锁反应]",
            mechanicsEn: "Theo-Creation_Pic_Smasher + [Life_Meaning = Zeroed; Bio_Cruel_Prop = Revealed; Vic_Faith_Crash = Chain_React]",
            aesthetic: "加拉帕戈斯群岛上奇形怪状的巨龟与鸟喙。剑桥大学教士们面对骨骼化石时混合着恐惧与愤怒的扭曲面庞。",
            aestheticEn: "Weird giant tortoises & bird beaks on Galapagos. Twisted faces of Cambridge clerics mixing fear & anger facing fossils.",
            runtime: "IF (详细对比了人类头骨与猿类头骨的结构完全一致时) THEN (触发：突然意识到自己并非天使的后裔，而是一个赤裸的、充满焦虑的高级猿类)",
            runtimeEn: "IF (Detailing human skull vs ape skull finding exact structural match) THEN (Trigger: Suddenly realizing not angel's scion, but a naked, anxious advanced ape)"
        }
      },
      {
        id: "invention_lightbulb",
        name: "爱迪生/光电", nameEn: "Age of Tesla",
        def: "交直流电之争，黑夜被消灭，二次工业革命。",
        defEn: "AC/DC war, night eliminated, 2nd Ind Rev.",
        core: "第二次阉割自然。消灭黑夜后的永恒商业化劳作。 | 锚定 ($): M5 霓虹白昼 (Neon_Daylight)",
        coreEn: "2nd castration of nature. Eternal comm-labor after killing night. | Anchor ($): M5 Neon_Daylight",
        logic: "【时间轴的强制解锁】：电灯的发明杀死了“黑夜（由神与自然主宰的休息停机时间）”。资本主义系统实现了真正意义上的24/7全天候不间断读写。世界（实在界）最后保留的一块黑暗的神秘主义飞地，被商业电缆彻底连通点亮并异化了。",
        logicEn: "[Timeline Force-Unlock]: Lightbulb invents kills 'Night (downtime ruled by God & nature)'. Cap sys achieves true 24/7 uninterrupted read/write. The last dark mystic enclave kept by the world (Real) is fully wired, lit up & alienated by biz cables.",
        patch: {
            mechanics: "时间边界抹除网 + [黑夜神话度 = 大幅掉落; 人类睡眠时间 = 被资本无限挪用; 交流电网络 = 覆盖地球]",
            mechanicsEn: "Time_Border_Erase_Net + [Night_Mythos = Plunge; Human_Sleep = Infinite_Stolen_by_Cap; AC_Net = Covers_Earth]",
            aesthetic: "密布着危险电线的纽约曼哈顿实验室。巨大的特拉斯线圈在发出足以电死大象的人造闪电。不夜城的荒诞初现。",
            aestheticEn: "NY Manhattan labs webbed with dangerous wires. Giant Tesla coils spitting man-made lightning strong enough to kill elephants. Absurd dawn of sleepless city.",
            runtime: "IF (当整个城市的街灯在同一个开关下瞬间亮起时) THEN (触发：星空从此退潮，人类将永远生存在自己制造的廉价光源牢笼中)",
            runtimeEn: "IF (When whole city streetlights click on via one switch) THEN (Trigger: Stars recede forever, humanity lives in caged cage of its own cheap light)"
        }
      }
    ]
};
