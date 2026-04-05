import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_B: LibraryCategoryDef = {
    id: "era_classical",
    name: "02. 古典与帝国 (Classical Antiquity)",
    desc: "理性的觉醒与帝国的疯狂并存。人类第一次试图用严密的法典和庞大的军队去定义“世界”。",
    items: [
      {
        id: "athens_agora",
        name: "雅典广场", nameEn: "Athenian Democracy",
        def: "苏格拉底，公民辩论。多数暴政的雏形。",
        defEn: "Socrates, debates. Early mob rule.",
        core: "理性之光 vs 民粹阴影。个人智力在城邦共谋前的脆弱。 | 锚定 ($): M3 诡辩黑洞 (Sophistry_Hole)",
        coreEn: "Reason vs populism. Intellect fragile. | Anchor ($): M3 Sophistry_Hole",
        logic: "【逻各斯越权】：语言取代暴力。M4从物理君主降级为抽象的“多数人共识”。缺乏绝对缝合，主体陷入无尽诡辩，终被多数人暴政合法谋杀。",
        logicEn: "[Logos Overreach]: Language replaces violence. M4 degrades to consensus. Subjects fall into sophistry, murdered by absolute mediocrity.",
        patch: {
            mechanics: "辩论绞肉机协议 + [言辞杀伤力 = Max; 真理稳定性 = 0; 多数暴政概率 = 高]",
            mechanicsEn: "Debate_Meatgrinder_Protocol + [Rhetoric_Lethality = Max; Truth_Stability = 0; Mob_Tyranny_Prob = High]",
            aesthetic: "沐浴在地中海阳光下的白色大理石柱廊。广场中心弥漫着嘈杂的多重阴影。",
            aestheticEn: "White marble colonnades in sun. Center filled with noisy multiple shadows.",
            runtime: "IF (发表悖离大众真理) THEN (触发：被判处流放或死刑，喧闹中独自饮下毒堇汁解体)",
            runtimeEn: "IF (Utter truth against mob) THEN (Trigger: Sentenced, mental disintegration drinking hemlock)"
        }
      },
      {
        id: "sparta_agoge",
        name: "斯巴达规训", nameEn: "Spartan Agoge",
        def: "绝对军国，优生学。身体被彻底收编为兵器。",
        defEn: "Absolute militarism. Bodies co-opted as weapons.",
        core: "集体荣誉 vs 亲情丧失。被压抑的情欲在军阵中寻找出口。 | 锚定 ($): M1 肢体充边 (Flesh_Cooptation)",
        coreEn: "Honor vs lost kinship. Repressed desire finds exit. | Anchor ($): M1 Flesh_Cooptation",
        logic: "【躯体国家化】：M1（肉体）从出生即剥夺，焊死在修补城邦漏洞的齿轮上。个体取消微观欲望（SUR5），转化为杀戮机件。性被异化为兵器生产任务。",
        logicEn: "[Somatic Nationalization]: M1 stripped at birth, welded into fixing Polis flaws. Subjects cancel micro-desires, becoming kill-machines.",
        patch: {
            mechanics: "斯巴达滤网协议 + [弱者淘汰率 = 近乎100%; 情感阀值 = 冻结; 杀戮协同 = 完美]",
            mechanicsEn: "Spartan_Filter_Protocol + [Weak_Cull_Rate = ~100%; Emotion_Threshold = Frozen; Kill_Synergy = Perfect]",
            aesthetic: "粗糙肌肉与血污。极简暴力美学与极端的阵列方阵。",
            aestheticEn: "Rough muscles & gore. Minimalist violence and extreme phalanx arrays.",
            runtime: "IF (身处绝境重装步兵方阵) THEN (触发：失去个人边界完全融为一台绞肉机的高潮)",
            runtimeEn: "IF (In doomed phalanx) THEN (Trigger: Jouissance of losing ego, melding into meatgrinder)"
        }
      },
      {
        id: "rome_republic_late",
        name: "罗马共和晚期", nameEn: "Late Roman Republic",
        def: "元老院暗流。演说家与刺客的博弈，法治崩塌。",
        defEn: "Senate undercurrents. Orators vs assassins, laws collapse.",
        core: "共和理想的衰败 vs 寡头野心。旧规则失效的真空。 | 锚定 ($): M4 律法坏死 (Law_Necrosis)",
        coreEn: "Republic decay vs ambition. Vacuum of failed rules. | Anchor ($): M4 Law_Necrosis",
        logic: "【能指脱位】：律法因为过度扩张而虚不受补。旧缝合点被军阀轻易撕碎。合法性解构，掌握城外军团暴力（实在界入侵）的人随意重写大他者底座。",
        logicEn: "[Signifier Dislocation]: Law hollow from over-expansion. Old sutures torn by warlords. He who controls legions rewrites the Other's base at will.",
        patch: {
            mechanics: "法理空心化协议 + [背刺几率 = 高; 律法约束 = 0; 暴力收益 = 指数级]",
            mechanicsEn: "Legal_Hollowing_Protocol + [Backstab_Prob = High; Law_Binding = 0; Violence_Yield = Exponential]",
            aesthetic: "阳光下光鲜亮丽的紫袍讲坛，阴影中则是闪烁寒光的匕首与政变血迹。",
            aestheticEn: "Bright purple rostrums in sun, cold daggers and coup blood in shadows.",
            runtime: "IF (在元老院中心演说) THEN (触发：随时被背后乱刀刺死的极致偏执与警惕)",
            runtimeEn: "IF (Speak in Senate) THEN (Trigger: Paranoia of being stabbed from behind anytime)"
        }
      },
      {
        id: "nero_insanity",
        name: "尼禄之火", nameEn: "Nero's Insanity",
        def: "暴君统治，火烧罗马。极致奢华腐臭与末日狂欢。",
        defEn: "Tyrant rule, Rome burns. Extreme luxury and doom revelry.",
        core: "权力病态审美 vs 替罪羊。末世狂欢。 | 锚定 ($): M6 病理狂欢 (Pathological_Revelry)",
        coreEn: "Pathological aesthetics vs scapegoats. Revelry. | Anchor ($): M6 Pathological_Revelry",
        logic: "【倒错凝视】：M4（皇帝）堕入精神分裂，权力单纯为了取悦皇帝自我神化的艺术冲动。罗马城变成纵火画布，平民（M1）仅是活体燃料。",
        logicEn: "[Perverted Gaze]: M4 (Emperor) descends into schizophrenia, power solely appeases his viral art urge. Rome is arson canvas, plebs are fuel.",
        patch: {
            mechanics: "狂乱美学协议 + [理性决策 = 失控; 纵火欲 = Max; 替罪羊产出 = 满载]",
            mechanicsEn: "Frantic_Aesthetics_Protocol + [Rational_Decision = OOC; Arson_Lust = Max; Scapegoat_Output = Overloaded]",
            aesthetic: "天满冲天大火染红病态夜空，疯癫诗人伴随惨叫声弹奏里拉琴的极乐特写。",
            aestheticEn: "Sky-high inferno dyes night red, macro shot of mad poet playing lyre merrily to screams.",
            runtime: "IF (灾后民怨沸腾) THEN (触发：将边缘群体点天灯的无逻辑残忍宣泄)",
            runtimeEn: "IF (Public rage boils) THEN (Trigger: Cruel catharsis of burning marginal groups)"
        }
      },
      {
        id: "qin_legalism",
        name: "大秦法家", nameEn: "Qin Legalism",
        def: "严苛律法，绝对秩序，兵马俑与长城。",
        defEn: "Harsh laws, absolute order, Terracottas & Great Wall.",
        core: "国家机器的绝对高效 vs 个体的兵马俑化。 | 锚定 ($): M4 绝对栅栏 (Absolute_Grid)",
        coreEn: "State machine efficiency vs personal terracottization. | Anchor ($): M4 Absolute_Grid",
        logic: "【全景监狱】：象征界网格致密到纳米级。M4吞噬血肉、吐出长城。人的个体性被格式化，恐惧本身都被法典化。",
        logicEn: "[Panopticon]: Symbolic grid dense to nano-scale. M4 swallows flesh. Individuality formatted, fear codified.",
        patch: {
            mechanics: "法网收紧协议 + [系统容错率 = 0; 举报收益 = Max; 异响消除 = 瞬间]",
            mechanicsEn: "Legal_Net_Tighten_Protocol + [System_Tolerance = 0; Snitching_Yield = Max; Noise_Elimination = Instant]",
            aesthetic: "无情玄青色军阵。横平竖直街区，视觉充满令人窒息的几何切割感。",
            aestheticEn: "Ruthless cyan military arrays. Straight streets, suffocating geometric slicing.",
            runtime: "IF (注视庞大帝国工程) THEN (触发：主体自我贬值为一粒符合标准规格的尘埃)",
            runtimeEn: "IF (Gaze at massive empire projects) THEN (Trigger: Subject self-devaluation into dust speck)"
        }
      },
      {
        id: "han_frontier",
        name: "强汉边疆", nameEn: "Han Dynasty Frontier",
        def: "帝国扩张自信与塞外风沙的苍凉。",
        defEn: "Empire expansion vs desolate frontier sand.",
        core: "拓荒暴力 vs 血脉稀释的孤独。 | 锚定 ($): M5 无尽远征 (Endless_Expedition)",
        coreEn: "Pioneering violence vs lonely blood dilution. | Anchor ($): M5 Endless_Expedition",
        logic: "【边界外扩】：皇权符号强行拉伸抵御实在界大漠。法度在文明极缘被风沙侵蚀，英雄主义驱力追求封侯，在死亡边缘狂舞。",
        logicEn: "[Border Outstretch]: Crown symbols stretched against Real desert. Laws erode, heroic drive dances on death's edge.",
        patch: {
            mechanics: "越界扩张协议 + [狂热同化率 = 极强; 后勤损耗 = 极高; 孤立感 = 临界]",
            mechanicsEn: "Transboundary_Expansion_Protocol + [Fanatic_Assimilation = Strong; Logistics_Attrition = High; Isolation = Critical]",
            aesthetic: "土黄荒漠上一抹鲜红军旗。对比极强的边塞风沙物理刮擦感。",
            aestheticEn: "Ochre deserts with bright red flags. Striking frontier sand physical scraping.",
            runtime: "IF (抵御极度深寒与饥荒) THEN (触发：在狼居胥山刻石记功确认存在的绝对巅峰)",
            runtimeEn: "IF (Endure extreme cold/famine) THEN (Trigger: Peak engraving on Mount to confirm existence)"
        }
      },
      {
        id: "three_kingdoms_loyalty",
        name: "三国忠义", nameEn: "Three Kingdoms Chaos",
        def: "礼崩乐坏，英雄权谋，连绵战火中的信义契约。",
        defEn: "Rites collapse, machinations, covenants in war.",
        core: "忠诚悖论。微观契约取代最高法统。 | 锚定 ($): M5 浪漫投射 (Romantic_Projection)",
        coreEn: "Loyalty paradox. Micro-covenant replaces supreme law. | Anchor ($): M5 Romantic_Projection",
        logic: "【能指替身】：天子沦为木偶。在血海中，象征界合法性降维投射到“结拜誓言”上，是无主世界中绝望的美学代偿。",
        logicEn: "[Signifier Stand-in]: Emperor becomes puppet. Symbolic legitimacy projects to 'blood-oaths', a desperate aesthetic substitute.",
        patch: {
            mechanics: "碎纸重组协议 + [最高统御约束 = 0; 私人羁绊加成 = Max; 道德背叛 = 随机]",
            mechanicsEn: "Shredded_Paper_Reorg_Protocol + [Supreme_Rule_Bind = 0; Private_Bond_Buff = Max; Moral_Betrayal = Random]",
            aesthetic: "满目疮痍焦土上闪耀的具有夸张辨识度的血红羁绊斩击。",
            aestheticEn: "Devastated earth with highly identifiable blood-red bond slashes.",
            runtime: "IF (面临绝境需要贯彻盟誓) THEN (触发：爆发无视物理定律的无双动能)",
            runtimeEn: "IF (Facing doom needing to fulfill oath) THEN (Trigger: Erupt 'Musou' kinetic energy ignoring physics)"
        }
      },
      {
        id: "persian_lux",
        name: "波斯万王之王", nameEn: "Persian Achaemenid",
        def: "东方的奢华，多民族共存与无尽黄金。",
        defEn: "Oriental luxury, multi-ethnic and endless gold.",
        core: "多元融合的脆弱与极度冗余。 | 锚定 ($): M4 繁复迷宫 (Complex_Labyrinth)",
        coreEn: "Fragile multi-cultural fusion & redundancy. | Anchor ($): M4 Complex_Labyrinth",
        logic: "【象征界通胀】：为了容纳多民族，M4膨胀为翻译一切方言的“巨型缓冲垫”。导致决策链无限延长，武德软化腐烂。",
        logicEn: "[Symbolic Inflation]: To hold multi-ethnics, M4 inflates into a 'giant buffer pad'. Leads to infinite decision chains and rotting martial vigor.",
        patch: {
            mechanics: "镀金缓冲协议 + [文化包容度 = Max; 动员迟滞率 = 高; 黄金贿赂防线 = 启用]",
            mechanicsEn: "Gilded_Buffer_Protocol + [Culture_Tolerance = Max; Mobilization_Lag = High; Gold_Defense = On]",
            aesthetic: "繁复的刺绣图案与成吨黄金配饰，视觉极度过载导致行动疲倦感。",
            aestheticEn: "Intricate embroideries and raw tons of gold, visual overload causing fatigue.",
            runtime: "IF (遭遇蛮族快速突袭) THEN (触发：庞大复杂的官僚与仆从军慢动作解体)",
            runtimeEn: "IF (Hit by fast barbarians) THEN (Trigger: Slow-motion disintegration of giant bureaucracy)"
        }
      },
      {
        id: "byzantium_intrigue",
        name: "拜占庭迷宫", nameEn: "Byzantine Court",
        def: "金镶嵌画，宦官政治，复杂的宗教辩论与阴谋。",
        defEn: "Gold mosaics, eunuchs, complex religious debates.",
        core: "形式主义巅峰。官僚系统复杂导致行动瘫痪。 | 锚定 ($): M3 无尽能指 (Endless_Signifiers)",
        coreEn: "Peak formalism. Complexity paralyzes action. | Anchor ($): M3 Endless_Signifiers",
        logic: "【协议冗余死结】：外交、宗教辩论充斥。能指生产远超所指，国家的强力驱动被内部齿轮无穷尽的空转耗尽。",
        logicEn: "[Protocol Redundancy Deadlock]: Filled with debates. Signifier production exceeds signified, driving forces idled to exhaustion internally.",
        patch: {
            mechanics: "拜占庭死锁协议 + [阴谋分支率 = 指数级; 实际落实力 = 趋近0; 辩论耗能 = Max]",
            mechanicsEn: "Byzantine_Deadlock_Protocol + [Plot_Branch_Rate = Exponential; Execution_Power = ~0; Debate_Energy_Cost = Max]",
            aesthetic: "华丽但僵硬的金底宗教镶嵌画，阴暗曲折走廊散发着陈腐羊皮纸交织的阴谋气息。",
            aestheticEn: "Stiff gold mosaics, dim corridors emitting stale parchment conspiracy vibes.",
            runtime: "IF (前线急需致命的军事决定) THEN (触发：陷入数月无意义的宗教教义字眼大辩论)",
            runtimeEn: "IF (Frontline needs vital choice) THEN (Trigger: Bogged down in months of meaningless dogma word debates)"
        }
      },
      {
        id: "maya_collapse",
        name: "玛雅废墟", nameEn: "Maya Abandonment",
        def: "环境崩溃，城市被弃，丛林占领祭坛。",
        defEn: "Env breakdown, cities abandoned to jungle.",
        core: "信仰破产与社会契约的瞬间液化。 | 锚定 ($): M4 符号掉线 (Symbolic_Offline)",
        coreEn: "Faith bankrupt and sudden liquefaction of social contract. | Anchor ($): M4 Symbolic_Offline",
        logic: "【核心协议拒载】：大他者物理输出（降雨）永久断线。献祭再多心脏也无法登录。神权沦为骗局，城市崩塌还原为纯粹的实在界。",
        logicEn: "[Core Protocol Rejected]: Other's physical output (rain) permanently unplugs. Hearts fail to log in. Theocracy drops to fraud, cities collapse to Real.",
        patch: {
            mechanics: "自然反噬停机协议 + [神启有效率 = 0; 生态承载力 = 破产; 逃离冲动 = 激活]",
            mechanicsEn: "Nature_Backlash_Halt_Protocol + [Oracle_Validity = 0; Eco_Capacity = Bankrupt; Flee_Urge = Active]",
            aesthetic: "枯黄的废弃都市被茂密强韧的热带藤蔓触手绞杀，历法巨石分崩离析。",
            aestheticEn: "Yellow dead cities strangled by dense tropical vine tentacles, calendar stones crumbling.",
            runtime: "IF (榨干资源执行最后大规模人祭失败) THEN (触发：人群毫无留恋散入丛林，格式化历史记忆)",
            runtimeEn: "IF (Final massive sacrifice fails) THEN (Trigger: Crowds scatter to jungle, formatting memories)"
        }
      },
      {
        id: "alexander_reach",
        name: "亚历山大远征", nameEn: "Hellenistic Empire",
        def: "希腊化全球扩张。东西方血缘强制交融，无尽远征。",
        defEn: "Hellenistic expansion. East-West mix, endless march.",
        core: "文化的暴力杂交。狂妄的边界跨越。 | 锚定 ($): M6 同化深渊 (Assimilation_Abyss)",
        coreEn: "Violent culture hybrid. Arrogant crossing. | Anchor ($): M6 Assimilation_Abyss",
        logic: "【超链接错乱】：马其顿体系强行把希腊、波斯、印度体系插在同一主板上。符号暴力杂交抵消了本来闭环的绝对真理，带来广阔但脆弱的虚无感。",
        logicEn: "[Hyperlink Confusion]: Forcible plug of diverse systems into one motherboard. Hybrid cancels closed-loop truths, bringing fragile nihilism.",
        patch: {
            mechanics: "全域覆盖协议 + [跨度 = 临界; 认同分裂 = 高; 反噬力 = 随距递增]",
            mechanicsEn: "Global_Coverage_Protocol + [Span = Critical; Identity_Split = High; Backlash = Dist_Inc]",
            aesthetic: "希腊铠甲打扮的佛陀雕像，沙漠风暴中密集的马其顿长矛。狂热与极度疲惫共存。",
            aestheticEn: "Buddhism statues in Greek armor, dense pikes in desert. Fanaticism and extreme fatigue.",
            runtime: "IF (前锋触及了当时认知的物理地图边缘) THEN (触发：从征服者转变为茫然失去目标的抑郁大崩溃)",
            runtimeEn: "IF (Vanguard hits physical map edge) THEN (Trigger: Conqueror crash into depressed breakdown)"
        }
      },
      {
        id: "ancient_carthage",
        name: "迦太基商贸", nameEn: "Carthaginian Empire",
        def: "地中海商业霸权，雇佣兵。金钱驱动的军事强权。",
        defEn: "Med business hegemony, mercs. Money-driven military.",
        core: "冷酷商业契约 vs 狂热民族忠诚。 | 锚定 ($): M1 剥头皮交易 (Scalp_Trade)",
        coreEn: "Cold commerce vs fanatic loyalty. | Anchor ($): M1 Scalp_Trade",
        logic: "【能指兑现危机】：一切被明码标价包括生命与献祭。当敌方是血缘绑定的非理性怪物时，只认钱的系统遇亏损会触发撤资解体。",
        logicEn: "[Signifier Cash-out Crisis]: Everything priced. Facing irrational blood-bound enemy, money-only system halts loss via mutiny.",
        patch: {
            mechanics: "金援外包协议 + [雇佣兵忠诚 = 随现金波动; 抗压 = 脆; 商业效率 = Max]",
            mechanicsEn: "Gold_Funding_Protocol + [Merc_Loyalty = Cash_Pegged; Stress_Res = Brittle; Biz_Efficiency = Max]",
            aesthetic: "紫染料与白银堆积的港口，战象与雇佣兵拼凑。末日神庙火焰充满拜金凄厉。",
            aestheticEn: "Ports piled with purple and silver, patchwork armies. Doomsday temples burn shrilly.",
            runtime: "IF (军费发放稍微延迟或挤兑) THEN (触发：装甲军团瞬间变为噬主的蝗虫)",
            runtimeEn: "IF (Pay delayed/bank run) THEN (Trigger: Armored legions instantly become master-eating locusts)"
        }
      },
      {
        id: "pre_islam_desert",
        name: "前伊斯兰荒原", nameEn: "Jahiliyyah",
        def: "贝都因部族，部落荣誉，长诗作为精神法律。",
        defEn: "Bedouin tribes, tribal honor. Poetry as spiritual law.",
        core: "无序的血亲复仇 vs 大一统渴望。 | 锚定 ($): M4 格式化渴望 (Format_Hunger)",
        coreEn: "Chaotic revenge vs unity thirst. | Anchor ($): M4 Format_Hunger",
        logic: "【象征界沙漠】：律法如流沙散碎。诗歌是抵抗实在界的唯一麻醉剂。等待绝对排他性的一神教降临，将散沙高温融为长剑。",
        logicEn: "[Symbolic Desert]: Law fragmented. Poetry resists Real. Awaits monotheistic descending to high-temp fuse sand into sword.",
        patch: {
            mechanics: "碎片血仇协议 + [统一性 = 0; 复仇冲动 = 永续; 诗意代偿 = Max]",
            mechanicsEn: "Fragment_Vendetta_Protocol + [Unity = 0; Vengeance = Eternal; Poetic_Subst = Max]",
            aesthetic: "极旱沙丘与刀剑冷光，干燥迷离，风中传来穿透力的嘶哑吟唱。",
            aestheticEn: "Dry dunes and cold glints, blurry vision, wind carries piercing chants.",
            runtime: "IF (统一性符号先知带着天启降临) THEN (触发：旧代码被强制清空，暴风雨般集体并网重置)",
            runtimeEn: "IF (Unity symbol prophet arrives) THEN (Trigger: Old codes force-cleared, stormy grid-sync reset)"
        }
      },
      {
        id: "aztec_tenochtitlan",
        name: "阿兹特克水城", nameEn: "Aztec Sun",
        def: "湖上的帝国。为了防止世界冻结必须流下鲜血。",
        defEn: "Lake empire. Blood must spill to keep world from freezing.",
        core: "残酷宇宙观倒置。屠戮神圣化后的日常。 | 锚定 ($): M5 倒错献身 (Perverted_Devotion)",
        coreEn: "Cruel cosmos inversion. Everyday psych of holy slaughter. | Anchor ($): M5 Perverted_Devotion",
        logic: "【精神病态缝合】：大他者（太阳）随时停摆，系统设为以心脏为燃料的内燃机。流水线剖胸成为最高尚荣耀，驱力彻底倒错。",
        logicEn: "[Psychopathic Suture]: Sun halts anytime, system runs on heart fuel. Assembly-line chest-carving is highest glory, pure drive inversion.",
        patch: {
            mechanics: "太阳充能协议 + [献祭KPI = 强制; 怜悯 = 已卸载; 文明压迫 = Max]",
            mechanicsEn: "Sun_Charge_Protocol + [Sac_KPI = Forced; Pity = Uninstalled; Civ_Oppress = Max]",
            aesthetic: "瑰丽湖城与阶梯堆积成吨白骨及黑血池。天堂背景配上极度战栗物理碎尸。",
            aestheticEn: "Glorious lake city atop steps of bones & black blood pools. Heavenly backdrop with shivering gore.",
            runtime: "IF (外星级科技的钢铁骑马者出现) THEN (触发：预言验证后神权防御瞬间跌为零，内心解体)",
            runtimeEn: "IF (Alien-tech steel horse-riders appear) THEN (Trigger: Prophecy verified, theocracy defense drops to zero)"
        }
      },
      {
        id: "incan_quipu",
        name: "印加结绳", nameEn: "Incan Empire",
        def: "无文字但有完美结绳账簿。极具压迫的计划经济。",
        defEn: "No text, knot ledgers. Oppressive planned economy.",
        core: "无声数字管理。集体主义对个性的彻底蒸发。 | 锚定 ($): M4 数据牢笼 (Data_Cage)",
        coreEn: "Silent numeric mgmt. Evaporation of personality. | Anchor ($): M4 Data_Cage",
        logic: "【绳结控制网】：结绳记事构建起高精度计算网络。劳役被大他者强制精准调配。前现代赛博朋克极权，主体的面孔完全消失在算力中。",
        logicEn: "[Knot Control Web]: Knot records build high-precision calc net. Corvée force-allocated. Pre-modern cyberpunk, faces vanish in hash power.",
        patch: {
            mechanics: "结绳计划协议 + [监控 = 100%; 个体自由 = 0; 物流畅通 = 锁死高位]",
            mechanicsEn: "Quipu_Plan_Protocol + [Monitor = 100%; Freedom = 0; Logistics = Locked]",
            aesthetic: "令人眩晕的高原冷空气，绝壁上的精密都市场景，蚂蚁般高效行军的无表情人群。",
            aestheticEn: "Vertigo plateau air, precise cliff cities, expressionless crowds in ant-like march.",
            runtime: "IF (皇帝中心节点被挟持) THEN (触发：庞大系统失去主节点瞬间无伤瘫痪)",
            runtimeEn: "IF (Emperor node hijacked) THEN (Trigger: Giant system halts instantly missing main node)"
        }
      },
      {
        id: "shang_oracle",
        name: "大商酒池", nameEn: "Shang Dynasty",
        def: "青铜面具，人牲甲骨。对鬼神恐惧的残暴美学。",
        defEn: "Bronze masks, oracles. Brutal aesthetic of ghost fear.",
        core: "人鬼血腥谈判。巫王暴政下的极致恐怖。 | 锚定 ($): M4 嗜血祖灵 (Blood_Spirits)",
        coreEn: "Human-ghost negotiation. Extreme terror under shaman-kings. | Anchor ($): M4 Blood_Spirits",
        logic: "【灵媒恐怖震慑】：商王是唯一能够解码实在界（甲骨）的端口。为换取微弱确定性，必须用俘虏首级投喂祖灵。",
        logicEn: "[Medium Terror Deterrence]: Shang kings act as sole port decoding the Real (bones). To buy faint certainty, they feed spirits with captive heads.",
        patch: {
            mechanics: "甲骨算命协议 + [神鬼随机性 = 强; 王权垄断 = 绝对; 血肉消耗 = Max]",
            mechanicsEn: "Oracle_Fortune_Protocol + [Ghost_RNG = Strong; Crown_Monopoly = Abs; Flesh_Cost = Max]",
            aesthetic: "阴森重甲泛着绿光，刻满饕餮纹的鼎沸腾肉汤。晦涩阴惨气氛。",
            aestheticEn: "Gloomy heavy armor in green light, taotie-carved tripods boil soup. Obscure grim vibe.",
            runtime: "IF (由于杀戮结下太多世仇) THEN (触发：被新兴伦理政权摧枯拉朽推翻)",
            runtimeEn: "IF (Massacre breeds too much vendetta) THEN (Trigger: Swiftly crushed by rising ethical regime)"
        }
      },
      {
        id: "indus_valley_plumb",
        name: "哈拉帕排水沟", nameEn: "Indus Valley",
        def: "标准化城市，没有王宫神庙，极度平等的规整。",
        defEn: "Standard cities, no palaces. Extreme egalitarian neatness.",
        core: "乌托邦死水。缺乏权力图腾产生的空洞安宁。 | 锚定 ($): M1 极度整齐 (Extreme_Uniformity)",
        coreEn: "Utopian dead water. Hollow peace from missing totems. | Anchor ($): M1 Extreme_Uniformity",
        logic: "【去势平权化】：压抑了建立神庙与王权的冲突。欲望被抹平无侵略驱力，文明活成了高度防腐且无心跳的平庸胶囊。",
        logicEn: "[Castrated Eglitarianism]: Represses temple/crown conflicts. Desire flattened with no aggro drive, civ acts as anti-rot zero-heartbeat capsule.",
        patch: {
            mechanics: "标准砖块协议 + [层级落差 = 极低; 攻击性驱动 = 缺失]",
            mechanicsEn: "Standard_Brick_Protocol + [Hierarchy_Drop = V.Low; Aggro_Drive = Missing]",
            aesthetic: "土红极其规整网格。没奇观，只有平庸卫生的街区，静得令人不安。",
            aestheticEn: "Earthern-red extremely uniform grids. No wonders, only mundane sanitary blocks, uneasily quiet.",
            runtime: "IF (遭遇蛮族暴力入侵) THEN (触发：缺乏抗击意志坐等被毁或外迁)",
            runtimeEn: "IF (Hit by violent barbarians) THEN (Trigger: Lacking resist will, wait for ruin/migration)"
        }
      },
      {
        id: "celtic_druids",
        name: "凯尔特德鲁伊", nameEn: "Celtic Tribes",
        def: "森林、献祭。拒绝文字的古老口述。",
        defEn: "Forests, sacrifices. Rejects texts.",
        core: "野蛮灵性。拒绝被坚固符号逻辑收编。 | 锚定 ($): M4 符号拒绝 (Symbol_Refusal)",
        coreEn: "Savage spirit. Refuses co-opt by solid sumbolic logic. | Anchor ($): M4 Symbol_Refusal",
        logic: "【反能指固化】：禁止固定知识为文字，防止象征界对生命的锁死。在幻象深处游荡直到被罗马碑文物理碾压。",
        logicEn: "[Anti-Signifier Setting]: Forbids text knowledge to prevent Symbolic lockdown of life. Wanders in phantasm until crushed by Roman epitaphs.",
        patch: {
            mechanics: "口授流变协议 + [记忆负载 = Max; 知识固定 = 0; 部落分离 = 高]",
            mechanicsEn: "Oral_Fluid_Protocol + [Mem_Load = Max; Knowledge_Fixed = 0; Tribe_Sep = High]",
            aesthetic: "符文蓝光原始橡树林。繁复螺旋金银饰品对撞半裸涂蓝野蛮躯体。",
            aestheticEn: "Rune blue-lit primal oak forest. Intricate gold spirals vs blue-painted half-naked savage bodies.",
            runtime: "IF (德鲁伊在岛屿被屠戮殆尽) THEN (触发：一整个精神宇宙毫无档案备份地格式化黑屏)",
            runtimeEn: "IF (Druids butchered on island) THEN (Trigger: Entire psychic universe wiped to black screen with zero archives)"
        }
      },
      {
        id: "maurya_ashoka",
        name: "孔雀阿育王", nameEn: "Mauryan Empire",
        def: "空前暴政杀戮后的突兀皈依。佛教统治。",
        defEn: "Sudden conversion post mega-killing. Buddhist rule.",
        core: "暴力止息的悖论。杀出尸山血海后的禁欲伪善。 | 锚定 ($): M1 血腥洗白 (Bloody_Whitewashing)",
        coreEn: "Violence stop paradox. Ascetic hypocrisy post bloodbath. | Anchor ($): M1 Bloody_Whitewashing",
        logic: "【超我满载】：血海中大他者过度杀戮导致自我崩溃，强制下载相反和平内核。极端嗜血瞬间跳转到极度自律。",
        logicEn: "[Superego Overloaded]: Overkill crashes Other in blood sea, forcing download of peace core. Shift from bloodlust to extreme ascetic.",
        patch: {
            mechanics: "强制和平协议 + [扩张机制 = 冻结; 宣讲石柱 = 全图; 杀戮负罪 = Max]",
            mechanicsEn: "Forced_Peace_Protocol + [Exp = Frozen; Moral_Pillars = Full_Map; Kill_Guilt = Max]",
            aesthetic: "焦土死骨战场上竖立圣洁铭文石柱。血腥红极速切到禁欲黄与金。",
            aestheticEn: "Holy inscribed pillars on scorched bone fields. Bloody red sharply cuts to ascetic yellow/gold.",
            runtime: "IF (帝王死后超我压制消失) THEN (触发：伪善和平外壳剥落，诸侯复刻修罗场)",
            runtimeEn: "IF (Emperor dies and superego goes) THEN (Trigger: Hypocritical peace shell peels, warlords replay bloodbath)"
        }
      },
      {
        id: "minoa_labyrinth",
        name: "米诺斯迷宫", nameEn: "Minoan Crete",
        def: "迷宫，女性崇拜。海洋繁荣与火山阴影。",
        defEn: "Labyrinths, female worship. Sea boom vs volcano.",
        core: "母系神话的崩盘。自然底板对文明的降维打击。 | 锚定 ($): M2 末日轻语 (Doomsday_Whisper)",
        coreEn: "Matriarchal myth crash. Nature dimension-drop on civ. | Anchor ($): M2 Doomsday_Whisper",
        logic: "【欢愉死角】：无城墙防御海洋乌托邦，商业发达且纵容享受。毁灭不来自内部，而是实在界火山降下毫无逻辑死刑。",
        logicEn: "[Corner of Jouissance]: Wall-less sea utopia, booming trade & indulgence. Doom comes not from within, but Real's illogical volcano execution.",
        patch: {
            mechanics: "敞开阈值协议 + [城防 = 0; 艺术享乐 = Max; 物理抗压 = 极脆]",
            mechanicsEn: "Open_Threshold_Protocol + [Defense = 0; Art_Hedonism = Max; Phys_Pressure = Brittle]",
            aesthetic: "鲜艳海蓝、赤红公牛与裸露女神。天光瞬间被灰白火山灰遮蔽转黑白死寂。",
            aestheticEn: "Bright sea-blues, crimson bulls, topless goddess. Sky instantly blotted by ash into B/W death.",
            runtime: "IF (海底火山引发海啸与灰雨) THEN (触发：在毫无防备的极度错愕中被抹除存在)",
            runtimeEn: "IF (Volcano triggers tsunami/ash) THEN (Trigger: Erased without warning in extreme shock)"
        }
      }
    ]
};
