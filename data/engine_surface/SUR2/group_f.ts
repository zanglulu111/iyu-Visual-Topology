import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_F: LibraryCategoryDef = {
    id: "era_20th",
    name: "06. 20世纪风云 (20th Century Conflicts)",
    desc: "世界大战，冷战对峙。意识形态的钢铁碰撞。宏大叙事的巅峰与幻灭。",
    items: [
      {
        id: "ww1_mud",
        name: "一战战壕", nameEn: "WWI Trenches",
        def: "毒气。机枪。绞肉机。旧世界骑士精神的彻底终结，机械化屠杀。",
        defEn: "Gas, machine guns, meat grinder. End of chivalry, mechanized slaughter.",
        core: "虚无的开端。在泥泞中漫长等待与无意义的牺牲。 | 锚定 ($): M1 泥沙绞肉 (Mud_Grinder)",
        coreEn: "Dawn of nihilism. Long waits in mud & senseless sacrifice. | Anchor ($): M1 Mud_Grinder",
        logic: "【古典大他者的物理粉碎】：列强的“荣誉帝国”驱使青年进入战壕，却被机枪毫无感情的工业算力瞬间切割。人类主体在刺网与毒气中完全沦为消耗品，导致了战后深刻的精神创伤与虚无主义爆发。",
        logicEn: "[Physical Smash of Classic Other]: Powers' 'Honor Empires' drive youth to trenches, instantly sliced by emotionless ind-hash of machine guns. Subjects turn to pure consumables, sparking deep post-war trauma.",
        patch: {
            mechanics: "工业堑壕死锁 + [冲锋生还率 = 近乎零; 创伤后遗症 = 爆发; 荣誉感 = 毒气溶解]",
            mechanicsEn: "Ind_Trench_Deadlock + [Charge_Survive = Near_Zero; PTSD = Explosive; Honor = Gas_Dissolved]",
            aesthetic: "灰暗天空下被炸成月球坑的泥泞大地。防毒面具后绝望的喘息。铁丝网上挂着的残尸。",
            aestheticEn: "Lunar-cratered muddy earth under grey sky. Desperate gasps behind gas masks. Corpses hung on barbed wire.",
            runtime: "IF (听到指令翻出战壕冲锋) THEN (触发：在机枪声中意识到自己的生命只值半秒的时间差)",
            runtimeEn: "IF (Hear orders to charge over the top) THEN (Trigger: Amidst machine guns, realizing life is worth just a half-second delay)"
        }
      },
      {
        id: "roaring_20s_jazz",
        name: "咆哮20年代", nameEn: "Roaring 20s",
        def: "爵士。禁酒令。盖茨比。大萧条前夜的狂欢，消费主义萌芽。",
        defEn: "Jazz, Prohibition, Gatsby. Eve of Depression, consumerism budding.",
        core: "过度的补偿。对战争创伤集体逃避而产生的病态享乐。 | 锚定 ($): M2 泡沫爵士 (Bubble_Jazz)",
        coreEn: "Over-compensation. Sick hedonism from fleeing war trauma. | Anchor ($): M2 Bubble_Jazz",
        logic: "【内存溢出的狂欢】：一战的死亡实在界过于恐怖，系统只能通过极度的消费主义来强行纵欲以压抑创伤。禁酒令反而刺激了黑帮地下繁荣。这是一个在破裂前急速膨胀的气泡。",
        logicEn: "[Mem Overflow Revelry]: WW1 death Real was so horrific, sys must force-occupy bandwidth via extreme consumerism to repress trauma. Prohibition just spikes mafia boom. A bubble rapidly bloating before burst.",
        patch: {
            mechanics: "创伤后代偿期 + [消费信用 = 透支无限; 股市繁荣 = 虚幻峰值; 黑帮财富 = 野蛮生长]",
            mechanicsEn: "Post-Trauma_Compensate + [Consumer_Credit = Infinite_Overdraft; Stock_Boom = Illusion_Peak; Mafia_Wealth = Wild_Growth]",
            aesthetic: "流苏裙与萨克斯风，暗室里用金字塔堆叠的走私香槟与冲锋枪的火花。",
            aestheticEn: "Flapper dresses & sax. Dark rooms pyramiding smuggled champagne vs submachine gun sparks.",
            runtime: "IF (在盖茨比极其奢靡的派对上跳舞) THEN (触发：在喧闹停歇的瞬间感受到无可名状的空虚)",
            runtimeEn: "IF (Dancing at Gatsby's ultra-lavish party) THEN (Trigger: In a quiet pause sensing indescribable void)"
        }
      },
      {
        id: "depression_30s",
        name: "大萧条", nameEn: "Great Depression",
        def: "失业。尘暴碗。流浪。美国梦的破裂。生存极度艰难。",
        defEn: "Unemployed, Dust Bowl, hobos. US Dream burst, extreme struggle.",
        core: "匮乏的真实。在系统崩坏后尊严与生存的博弈。 | 锚定 ($): M1 尘暴断档 (Dust_Crash)",
        coreEn: "Reality of lack. Dignity vs survival after sys crash. | Anchor ($): M1 Dust_Crash",
        logic: "【信用服务器宕机】：明天会更好的大他者承诺瞬间灰飞烟灭。股市崩盘砸碎了符号界的滤镜，露出了连饭都吃不起的残酷实在界。漫天黄沙吞噬了农场，人类回归赤裸生命。",
        logicEn: "[Credit Server Crash]: Other's promise of better tomorrow vaporizes instantly. Stock crash smashes symbolic filters, exposing cruel Real where people starve. Dust swallows farms, humanity returns to bare life.",
        patch: {
            mechanics: "经济硬着陆断电 + [失业率 = 指数飙升; 银行信用 = 归零; 生存本能 = 触发]",
            mechanicsEn: "Econ_Hard_Landing + [Jobless = Exp_Surge; Bank_Credit = Zeroed; Survival_Instinct = Triggered]",
            aesthetic: "排着长队领救济汤的沉默人群。风滚草吹过被遗弃的干旱农庄。",
            aestheticEn: "Silent crowds queuing for soup. Tumbleweeds blowing through abandoned dry farms.",
            runtime: "IF (昨天还是股票经纪人) THEN (触发：今天为了半块发霉的面包在街角大打出手)",
            runtimeEn: "IF (Yesterday a stock broker) THEN (Trigger: Today fighting on corner for mouldy bread)"
        }
      },
      {
        id: "shanghai_noir_rep",
        name: "民国上海/孤岛", nameEn: "Shanghai Noir",
        def: "十里洋场，租界间谍，黑帮。东方巴黎的虚假繁荣。",
        defEn: "Bund, concession spies, mafias. Paris of the East fake boom.",
        core: "身份的模糊。多方势力交错下的灰色地带。 | 锚定 ($): M3 孤岛霓虹 (Island_Neon)",
        coreEn: "Identity blur. Grey zone under crossed powers. | Anchor ($): M3 Island_Neon",
        logic: "【多系统挂载的冲突点】：东方与西方、资本与暗杀交汇。没有唯一的大他者能掌控全局。主体戴上多重面具，在霓虹灯与血泊中寻找缝隙生存。",
        logicEn: "[Multi-Sys Mount Clash]: East/West, cap/assassinate intersect. No single Other controls all. Subject wears multi-masks, finding cracks to live amid neon & blood.",
        patch: {
            mechanics: "租界夹缝模拟器 + [政治阵营 = 混沌重叠; 暗杀 = 日常化; 消费幻境 = 极致]",
            mechanicsEn: "Concession_Trench_Sim + [Political_Camp = Chaos_Overlap; Assassinate = Routine; Consume_Illusion = Max]",
            aesthetic: "雨夜的黄包车，穿旗袍抽烟的绝色女谍。吴侬软语与租界外炮火交错。",
            aestheticEn: "Rickshaw in rain, stunning spy in qipao smoking. Soft Wu accent mixed with artillery outside.",
            runtime: "IF (与迷人的交际花共舞) THEN (触发：意识到她手包里有带消音器的枪和你的坐标)",
            runtimeEn: "IF (Dancing with top escort) THEN (Trigger: Realize her purse holds silenced gun and your target coords)"
        }
      },
      {
        id: "ww2_auschwitz",
        name: "二战/大屠杀", nameEn: "WWII / Shoah",
        def: "奥斯威辛，系统性邪恶。平庸之恶，工厂化死亡。",
        defEn: "Auschwitz, systemic evil. Banality of evil, factory death.",
        core: "人性的至暗。剥夺一切身份后的机械化抹除。 | 锚定 ($): M1 焚尸炉灰 (Furnace_Ash)",
        coreEn: "Humanity's dark hour. Mechanized wipe after stripping identity. | Anchor ($): M1 Furnace_Ash",
        logic: "【官僚化屠宰运行】：这不是野蛮，而是理智极端化的产物。纳粹将“劣等种族”视为Bug，通过极度官僚化、工业化的流水线进行安静高效的物理清空。",
        logicEn: "[Bureau-Slaughter Run]: Not barbary, but extreme rationality. Nazis treat 'inferiors' as bugs, using ultra-bureaucratic, industrial pipelines for quiet efficient phys deletion.",
        patch: {
            mechanics: "死亡流水线 + [同理心 = 系统屏蔽; 杀人效率 = 工业优化; 人之痕迹 = 炼成肥皂]",
            mechanicsEn: "Death_Line + [Empathy = Sys_Muted; Kill_Efficiency = Ind_Optimize; Human_Trace = Soap_Made]",
            aesthetic: "冰冷有序的铁丝网。记录死亡数字的整齐表格，与堆积如山的遇害者金牙。",
            aestheticEn: "Cold ordered barbed wire. Neat spreadsheets logging deaths, next to mountains of victims' gold teeth.",
            runtime: "IF (被盖章不适合劳动) THEN (触发：被礼貌高效地指引进入毒气伪装的淋浴室)",
            runtimeEn: "IF (Stamped unfit for labor) THEN (Trigger: Politely guided into shower-disguised gas abyss)"
        }
      },
      {
        id: "cold_war_berlin",
        name: "冷战/柏林墙", nameEn: "Cold War Berlin",
        def: "斯塔西，窃听，核威慑。偏执狂社会的极致警戒。",
        defEn: "Stasi, wiretaps, nuke fear. Paranoid society peak alert.",
        core: "猜忌的统治。全能监视网对个人真诚的降维腐蚀。 | 锚定 ($): M4 铁幕静噪 (Iron_Curtain_Static)",
        coreEn: "Rule by suspicion. Omnipotent spy net corroding personal sincerity. | Anchor ($): M4 Iron_Curtain_Static",
        logic: "【双核心镜像死锁】：美苏两极形成不兼容局域网。恐惧迫使内部极度审查。斯塔西成为大他者的全息监听器，举报使信任彻底破产。",
        logicEn: "[Dual-Core Mirror Deadlock]: US/Soviet form incompatible LANs. Fear forces extreme internal checks. Stasi is Other's rootlet; spy reports bankrupt all trust.",
        patch: {
            mechanics: "零信任博弈 + [末日时钟 = 逼近午夜; 监听覆盖 = 100%; 私人领域 = 消失]",
            mechanicsEn: "Zero_Trust_Game + [Doomsday_Clock = Nears_Midnite; Bug_Coverage = 100%; Privacy_Domain = Extinct]",
            aesthetic: "灰白色墙体，深夜耳机中刺耳电流声。咖啡馆里每个人都在隐藏名字。",
            aestheticEn: "Grey-white walls, harsh static in late night headphones. Everyone hiding their name in cafes.",
            runtime: "IF (向最好的朋友抱怨物价) THEN (触发：当晚一份翔实的监听报告出现在上级桌上)",
            runtimeEn: "IF (Complain about prices to best friend) THEN (Trigger: Detailed wiretap report lands on boss's desk that night)"
        }
      },
      {
        id: "hippies_vietnam",
        name: "越战/嬉皮士", nameEn: "Vietnam & Hippies",
        def: "丛林战与反战摇滚。迷幻药与垮掉的一代。",
        defEn: "Jungle war & anti-war rock. Acid & beat generation.",
        core: "幻想的冲突。前线地狱与后方反建制乌托邦的割裂。 | 锚定 ($): M6 迷幻凝固汽油 (Psychedelic_Napalm)",
        coreEn: "Illusion clash. Frontline hell vs rear anti-establishment utopia. | Anchor ($): M6 Psychedelic_Napalm",
        logic: "【大他者的极化失效】：“为自由而战”在电视直播的惨状前彻底穿帮。被征兆的青年拒绝充当API接口，用致幻剂和爱与和平摧毁父辈符号界。",
        logicEn: "[Other's Polarized Fail]: 'Fight for freedom' exposed by live TV horror. Drafted youth refuse to be API ports, using acid & peace to smash fathers' symbolic realm.",
        patch: {
            mechanics: "意识形态脱机狂欢 + [反战情绪 = 病毒式; 传统道德 = 致幻剂融化]",
            mechanicsEn: "Id_Offline_Rave + [Anti-War_Sent = Viral; Trad_Moral = Acid-Melted]",
            aesthetic: "直升机轰鸣混杂吉他失真。泥泞雨林里绝望的大兵与赤裸戴花的青年交错。",
            aestheticEn: "Chopper roars mixed with guitar fuzz. Desperate GIs in muddy rainforest vs naked flower-crown youth.",
            runtime: "IF (在前线看着战友被炸碎) THEN (触发：强烈的创伤在脑海中扭曲成彩虹色致幻拼图)",
            runtimeEn: "IF (Watching comrade blown to bits) THEN (Trigger: Trauma twists it into swirling rainbow hallucinogenic jigsaw)"
        }
      },
      {
        id: "soviet_construct",
        name: "红色巨像", nameEn: "Soviet Brutalism",
        def: "巨大的列宁像，混凝土，集体的崇高与个体的卑微。",
        defEn: "Giant Lenin statues, concrete, collective sublime vs small individual.",
        core: "理想的僵化。结构性暴力与庞大尺度对微观的压抑。 | 锚定 ($): M4 铸铁心脏 (Cast_Iron_Heart)",
        coreEn: "Stiffened ideal. Structural violence & endless scale pressing micro. | Anchor ($): M4 Cast_Iron_Heart",
        logic: "【硬编码暴力】：为实现终极平等，系统强行彻底删除了个人边界。重工业是权力的物理具象，主体在粗野主义建筑中感到神圣但被极度透支的枯燥。",
        logicEn: "[Hardcode Violence]: To reach ult-equality, sys force-deletes all personal borders. Heavy ind is power avatar. True sublime but draining dullness in Brutalist bldgs.",
        patch: {
            mechanics: "重工业格式化覆写 + [指令 = 绝对不容置疑; 生活品 = 匮乏; 集体荣誉 = 沉重]",
            mechanicsEn: "Heavy_Ind_Format + [Cmd = Abs_Unquestionable; Consumer_Goods = Shortage; Collective_Honor = Heavy]",
            aesthetic: "粗糙混凝土，高耸宣传画。阅兵履带碾过的声音，与雪地买面包排队的沉默。",
            aestheticEn: "Rough concrete, towering propaganda. Treads crushing parades, vs silence of bread queues in snow.",
            runtime: "IF (仰望数百吨祖国母亲雕像) THEN (触发：在极端的崇高感中体会到个体如蝼蚁般无价值)",
            runtimeEn: "IF (Looking up at 100-ton Motherland statue) THEN (Trigger: In extreme sublime feeling one's ant-like worthlessness)"
        }
      },
      {
        id: "hk_97_impulse",
        name: "港风末日", nameEn: "HK 90s Fever",
        def: "王家卫式霓虹，古惑仔，回归焦虑。借来的时间与地方。",
        defEn: "Wong Kar-wai neon, triads, handover anxiety. Borrowed time/place.",
        core: "末世狂欢感。预感终结而产生的极速迷离与剥离。 | 锚定 ($): M3 浮光掠影 (Fleeting_Neon)",
        coreEn: "Doomsday rave. Fast hazy peeling prompted by sensed end. | Anchor ($): M3 Fleeting_Neon",
        logic: "【即将断电的缓存区】：在倒计时的狂飙中，资本、暴力与无根爱情在极度压缩的时空中碰撞，形成艳丽迷离的世纪末错觉。",
        logicEn: "[Soon-Unplugged Cache]: In countdown rush, cap, violence & rootless love collide in hyper-compressed spacetime, forming vivid hazy fin-de-siècle illusion.",
        patch: {
            mechanics: "倒计时狂飙 + [金钱流转速 = 极限; 迷失感 = 标配; 黑道江湖 = 浪漫泡沫]",
            mechanicsEn: "Countdown_Rush + [Money_Velo = Limit; Loss_Sense = Default; Triad_World = Romant_Bubble]",
            aesthetic: "冷雨夜红绿霓虹，凤梨罐头保质期。穿风衣持刀火并的年轻人。",
            aestheticEn: "Cold rainy night neons, pineapple expiry dates. Youth in trench coats clashing with blades.",
            runtime: "IF (在拥挤茶餐厅和杀手擦肩过) THEN (触发：对时间流逝的剧烈疼痛感与极速恋爱的冲动)",
            runtimeEn: "IF (Brushing past hitman in crowded diner) THEN (Trigger: Sharp pain of passing time & urge for fast romance)"
        }
      },
      {
        id: "japan_bubble_pop",
        name: "泡沫东京", nameEn: "City Pop Tokyo",
        def: "金钱永不眠，迪斯科，奢靡与空虚。永远的夏天。",
        defEn: "Money never sleeps, disco, extreme luxury & void. Endless summer.",
        core: "欲望的虚假巅峰。在崩塌前夜沉溺于消费系统的完满。 | 锚定 ($): M5 塑料夏夜 (Plastic_Summer_Night)",
        coreEn: "Fake peak of desire. Drowning in consumer perfection before crash eve. | Anchor ($): M5 Plastic_Summer_Night",
        logic: "【多巴胺内存泄漏】：系统给所有子节点分配了无尽的信用额度。人们在挥霍的节拍中，只有表面铺满金箔的物欲符号，没有宏大叙事。",
        logicEn: "[Dopamine Mem Leak]: Sys assigns endless credit lines to child nodes. People splurge to beats, only gold-leafed object-desire signifiers, zero grand narrative.",
        patch: {
            mechanics: "信用欺骗狂热 + [物欲满足度 = 120%; 深度思考 = 禁绝; 表面繁荣 = 蜃楼]",
            mechanicsEn: "Credit_Spoof_Fever + [Goods_Desire_Fill = 120%; Deep_Thought = Banned; Surface_Boom = Mirage]",
            aesthetic: "穿高级西装在东京塔下挥大钞打车，背景是无比轻快的合成器流行乐。",
            aestheticEn: "Waving big bills for cabs under Tokyo Tower in high suits, BGM is ultra-breezy synth pop.",
            runtime: "IF (用巨款买下梵高名画) THEN (触发：只是觉得填补无聊黑洞的物质又少了一丁点)",
            runtimeEn: "IF (Buying Van Gogh with fortune) THEN (Trigger: Just feeling one less material exists to fill boredom hole)"
        }
      },
      {
        id: "spanish_civil_war",
        name: "西班牙内战", nameEn: "Spanish Civil War",
        def: "海明威，国际纵队，格尔尼卡。意识形态的极刑场。",
        defEn: "Hemingway, Int'l Brigades, Guernica. Ideology execution ground.",
        core: "纯粹理想的牺牲。全世界浪漫主义者在法西斯与民主的血腥预演。 | 锚定 ($): M1 染血丰碑 (Bloodie_Monument)",
        coreEn: "Sacrifice of pure ideal. Romantics' bloody preview of Fascism vs Democracy. | Anchor ($): M1 Bloodie_Monument",
        logic: "【理念死磕】：狂热知识分子带着“必须为某种乌托邦流血”的超我指令，在干旱的土地上，与无情的法西斯轰炸机进行了惨烈硬碰硬。",
        logicEn: "[Idea Clash]: Fanatic intellectuals bearing 'must bleed for utopia' superego prompts violently clash with ruthless fascist bombers on dry soil.",
        patch: {
            mechanics: "志愿军热血协议 + [左翼理想充沛度 = Max; 法西斯狂轰 = 碾压压降; 被出卖感 = 极高]",
            mechanicsEn: "Volunteer_Blood_Protocol + [Leftist_Ideal = Max; Fascist_Bombing = Crush_Drop; Betray_Sense = High]",
            aesthetic: "破碎的嘶鸣马匹与残肢。战壕里读诗的诗人被无情爆头。",
            aestheticEn: "Broken screaming horses & limbs. Poets reading poetry in trenches getting headshot.",
            runtime: "IF (相信共产主义援助能击退法西斯) THEN (触发：在内斗大国博弈中，被当做棋子无情抛弃在马德里)",
            runtimeEn: "IF (Believing Commie aid beats Fascists) THEN (Trigger: In proxy chess, ruthlessly dumped as pawn in Madrid)"
        }
      },
      {
        id: "space_race_apollo",
        name: "太空竞赛/阿波罗", nameEn: "Space Race",
        def: "冷战顶峰登月。理性的极致追求中包含着狂热的国家崇拜。",
        defEn: "Cold war peak moon landing. Extreme reason masks fanatic state cult.",
        core: "神话的科技外包。人类通过火箭喷射突破地球规则。 | 锚定 ($): M6 逃逸速度 (Escape_Velocity)",
        coreEn: "Tech outsource of myth. Humans breach Earth logic via rockets. | Anchor ($): M6 Escape_Velocity",
        logic: "【大他者的物理升维攻击】：登月不是科学探索，而是一场耗尽国力的炫耀性“符号输出”。人类用最极端的理性工具完成最不理性的政治狂热。",
        logicEn: "[Ascension Attack on Other]: Moon landing isn't sci-explore, but a wealth-draining flex of 'symbolic output'. Man uses extreme rational tools to fulfill irrational polit-fever.",
        patch: {
            mechanics: "星辰征服强迫症 + [算力聚焦 = 全球极值; 个体牺牲 = 英雄化; 寂静宇宙 = 暴击认识]",
            mechanicsEn: "Star_Conquer_OCD + [Hash_Focus = Global_Max; Solo_Sacrifice = Heroified; Silent_Universe = Crit_Hit]",
            aesthetic: "极度干净的金属太空舱。宇航员从死寂灰暗的月球，回望那充满战争的脆弱蓝点。",
            aestheticEn: "Ultra-clean metal capsules. Astronauts look back from dead grey moon at the fragile war-filled blue dot.",
            runtime: "IF (踏上月球灰尘的一瞬) THEN (触发：全人类陷入狂喜之后面对无尽虚空感到的刺骨孤独)",
            runtimeEn: "IF (Stepping on moon dust) THEN (Trigger: Humanity briefly raptured, then feels bone-deep loneliness facing infinite void)"
        }
      },
      {
        id: "iranian_revolution",
        name: "伊朗革命/1979", nameEn: "Iran 1979",
        def: "德黑兰，宗教反扑，世俗化倒退，黑袍席卷。",
        defEn: "Tehran, religious backlash, secular revert, black robes surge.",
        core: "时间的逆流。现代性在原教旨神明怒吼下的粉碎。 | 锚定 ($): M4 倒悬神谕 (Inverted_Oracle)",
        coreEn: "River of time reverses. Modernity crushed under fundamental deity roar. | Anchor ($): M4 Inverted_Oracle",
        logic: "【旧版内核复活】：超级管理员唤醒了古老教规底座算法，将世俗的现代性在一夜之间全部标记为“病毒”并予以全盘格式化清场。",
        logicEn: "[Old Kernel Revive]: Superadmin wakes ancient faith base-code, marking secular modernity as 'virus' overnight and formatting it completely.",
        patch: {
            mechanics: "原教旨物理降落 + [世俗享乐 = 封禁; 信仰狂热 = 溢出; 着装指令 = 强制]",
            mechanicsEn: "Fundament_Phys_Drop + [Secular_Joy = Banned; Faith_Fever = Overflow; Dress_Cmd = Forced]",
            aesthetic: "昨天听摇滚的街头，今天瞬间被涌动的黑色查多尔和反美标语淹没。",
            aestheticEn: "Rock music streets yesterday, instantly flooded today by black chadors & anti-US slogans.",
            runtime: "IF (在被洗劫的大使馆前高呼) THEN (触发：一种近乎失控的神圣感，命运彻底交还给无形的真主)",
            runtimeEn: "IF (Shouting outside looted embassy) THEN (Trigger: Near-feral holy sense, fate totally yielded to unseen Allah)"
        }
      },
      {
        id: "korean_war_split",
        name: "板门店/朝鲜战争", nameEn: "Korea Split",
        def: "38线，冻土，战俘营。意识形态地理硬切口。",
        defEn: "38th parallel, permafrost, POW camps. Ideology geo hard-slice.",
        core: "地理化伤口。将民族镜像为永恒敌对的虚拟两界。 | 锚定 ($): M3 冻土镜像 (Tundra_Mirror)",
        coreEn: "Geological wound. Mirroring nation into forever-hostile virtual dual-zones. | Anchor ($): M3 Tundra_Mirror",
        logic: "【板块拼接切断】：大博弈强行将同一个文明数据库一分为二。极寒与死尸成了虚拟边界最残酷的物理奠基。镜像双方为了大他者进行绞杀互消。",
        logicEn: "[Plate Slice Cut]: Grand game forces same civ DB into two. Freeze & corpses form brutal physical foundation for virtual border. Mirrors slaughter each other for Other.",
        patch: {
            mechanics: "无尽绞肉战 + [气候冻伤 = 敌我双爆; 死锁防线 = 相互渗透; 终战 = 永恒搁置]",
            mechanicsEn: "Endless_Grind + [Climate_Frost = Double_Kill; Deadlock_Line = Mutual_Pene; End_State = Eternal_Shelve]",
            aesthetic: "零下三十度冻成冰雕的持枪士兵，与蓝白相间的冷酷谈判铁皮平房。",
            aestheticEn: "-30C gun-holding soldiers frozen to ice-sculpts, vs cold blue-white treaty cabins.",
            runtime: "IF (发现对面被炸飞一半的人是自己亲哥哥) THEN (触发：在极度创伤中依然本能地开火确保彻底死亡)",
            runtimeEn: "IF (Finding half-blown enemy is real brother) THEN (Trigger: In extreme trauma still instinctively firing to ensure death)"
        }
      },
      {
        id: "hollywood_mccarthy",
        name: "麦卡锡黑名单", nameEn: "Red Scare",
        def: "好莱坞审查，人人自危。为自保出卖好友。",
        defEn: "Hollywood censor, general panic. Betraying friends to survive.",
        core: "背叛的伦理。符号恐怖扩张导致的道德炼狱。 | 锚定 ($): M4 恐红检举 (Red_Scare_Snitch)",
        coreEn: "Ethics of betrayal. Moral purgatory from symbolic terror expansion. | Anchor ($): M4 Red_Scare_Snitch",
        logic: "【信任节点的物理切断】：系统怕“红病毒”，启动过敏杀毒机制。主体必须出卖同事证明接口纯洁。梦工厂变成剩下恐惧和出卖的黑箱。",
        logicEn: "[Trust Node Sever]: Sys fears 'Red virus', starts allergic antivirus. Subject must sell colleagues to prove pure API. Dream factory turns to blackbox of fear & sellouts.",
        patch: {
            mechanics: "忠诚自证系统 + [思想病毒点名 = 莫须有; 友谊 = 一碰即碎; 行业封杀 = 绝对执行]",
            mechanicsEn: "Loyalty_Prove_Sys + [Thought_Virus_Name = Trumped_Up; Friendship = Fragile; Industry_Ban = Abs_Execute]",
            aesthetic: "强光下流汗的导演在国会艰难发言，前排是面无表情的听证官。",
            aestheticEn: "Sweating director speaking hard at Congress under harsh lights; front row has emotionless auditors.",
            runtime: "IF (被威胁若不说出编剧名字就永遭封杀) THEN (触发：挣扎后说出名字换来了复工但灵魂永远彻底枯萎)",
            runtimeEn: "IF (Threatened with perm-ban if writer name not given) THEN (Trigger: Struggled then spoke name to work again, but soul perm-withers)"
        }
      },
      {
        id: "balkans_war_snipers",
        name: "萨拉热窝/波黑", nameEn: "Balkans War",
        def: "种族仇恨，狙击手，昔日聚餐的邻居今日爆头。",
        defEn: "Ethnic hate, snipers, ex-neighbors dining now headshotting.",
        core: "邻居的他者性。现代和谐社会被原始仇恨瞬间撕裂。 | 锚定 ($): M1 碎窗猎场 (Shattered_Hunt)",
        coreEn: "Neighbor's Otherness. Modern harmony instantly torn by raw hate. | Anchor ($): M1 Shattered_Hunt",
        logic: "【底层身份协议的崩溃重建】：大一统面具一揭开，被压抑的民族主义（恶魔程序）瞬间接管硬件。同在超市排队的人因口音宗教不同，瞬间将对方降级为需要物理销毁的非人物种。",
        logicEn: "[Base Identity Protocol Crash-Rebuild]: Unify-mask lifted, repressed nationalism (demon exe) instantly takes over hardware. Supermarket queuers degrade each other to non-human targets due to accent/religion.",
        patch: {
            mechanics: "多态种族清理算法 + [邻里互害率 = Max; 狙击爆头 = 日常化; 国际干预 = 极度迟缓]",
            mechanicsEn: "Poly-Race_Cleansing_Algo + [Neighbor_Grief = Max; Sniper_Headshot = Routine; Int'l_Intervene = V_Slow]",
            aesthetic: "残破建筑群中燃烧的婴儿车。狙击手躲在布满弹孔的酒店高层，瞄准平民。",
            aestheticEn: "Burning stroller amid ruined bldgs. Sniper hides in bullet-holed hotel, aiming at civilians.",
            runtime: "IF (废墟对面开火的是曾经的室友) THEN (触发：毫不犹豫扔出强装药手榴弹并咒骂其邪恶血统)",
            runtimeEn: "IF (Enemy firing from ruins is ex-roommate) THEN (Trigger: Throw high-ex grenade w/o hesitating, cursing their evil blood)"
        }
      },
      {
        id: "wall_street_80s",
        name: "80年代华尔街", nameEn: "Wall Street 80s",
        def: "贪婪是美德，垫肩西装与可卡因。股票经纪人的资本狂飙。",
        defEn: "Greed is good, padded suits & coke. Stock brokers' cap surge.",
        core: "金钱的物神化。人沦为资本膨胀载体的极度亢奋。 | 锚定 ($): M5 贪婪多巴胺 (Greed_Dopamine)",
        coreEn: "Money fetishized. Man reduced to hyper-aroused cap-bloat vessel. | Anchor ($): M5 Greed_Dopamine",
        logic: "【多巴胺金融代码覆盖】：实体经济在屏幕数字中变得无意义。资本不再需要工厂，而是纯粹金融杠杆增殖。交易员吸食物理加速的药物来跟上异化高频算法，抹除道德抑制。",
        logicEn: "[Dopa-Finance Code Override]: Real econ becomes meaningless amid screen digits. Cap no longer needs factories, breeds via pure finance leverage. Traders use drugs to keep up with alien HFT algo, wiping moral breaks.",
        patch: {
            mechanics: "杠杆放大协议 + [良心阻断剂 = 实时注射; 财富幻觉 = 指数; 内幕交易罪 = 战绩]",
            mechanicsEn: "Leverage_Amp_Protocol + [Conceit_Blocker = Realtime_Dose; Wealth_Mirage = Exp; Insider_Trade = Badge_of_Honor]",
            aesthetic: "刺耳的电话交易室。西装革履、双眼血红的年轻大亨在玻璃办公室吸食成瘾物质。",
            aestheticEn: "Harsh ringing trade room. Suited young moguls with bloodshot eyes snorting addictives in glass offices.",
            runtime: "IF (几秒内做空摧毁百年制造企业) THEN (触发：爆发欢呼并预定最贵的高级应召女郎)",
            runtimeEn: "IF (Destroying century-old factory in seconds of shorts) THEN (Trigger: Cheer & book priciest escorts)"
        }
      },
      {
        id: "cultural_rev_china",
        name: "文革/红卫兵", nameEn: "Red Fever",
        def: "背诵语录，狂热批斗。砸烂一切旧世界，子告父。",
        defEn: "Reciting quotes, fanatic struggle. Smashing old world, son betrays father.",
        core: "语言的核爆武器化。绝对意志强制重构社会的毁灭性实验。 | 锚定 ($): M6 语词猎杀 (Word_Hunt)",
        coreEn: "Language nuke-weaponized. Destructive experiment of absolute will forcing societal rebuild. | Anchor ($): M6 Word_Hunt",
        logic: "【宏大语法的指令注入】：大他者（先知）绕过官僚中间件，向底层发布最高级“砸碎一切”执行码。狂热个体被注入正确光环，使伦理常识全线崩溃，人际词语变成狙击枪。",
        logicEn: "[Grand Syntax Inject]: Other (prophet) bypasses middleware, pushing highest 'smash all' code to base. Fanatic solos get truth aura, causing collapse of ethic common sense. Every word turns into sniper rifle.",
        patch: {
            mechanics: "对立高敏判定网 + [传统销毁率 = 近乎清零; 大义灭亲倍率 = Max; 理性辩论 = 非法]",
            mechanicsEn: "Pol_Camp_High-Sens_Net + [Trad_Cult_Destroy = Near_Zero; Kin_Betrayal_Mult = Max; Rational_Debate = Illegal]",
            aesthetic: "漫天飞舞的红袖章。墨水泼在头发花白的老教授脸上，背景是燃烧的古籍字画与高音喇叭。",
            aestheticEn: "Swirling red armbands. Ink splashed on white-haired professor; background burning scrolls & blaring loudspeakers.",
            runtime: "IF (母亲抱怨菜价太贵) THEN (触发：十岁儿子立刻记日记并在第二天向革委会冷酷举报)",
            runtimeEn: "IF (Mother complains veg prices high) THEN (Trigger: 10yo son logs in diary & coldly reports to committee next day)"
        }
      },
      {
        id: "cuban_missile",
        name: "古巴导弹危机", nameEn: "Missile Crisis",
        def: "核武器对峙。末日时钟停在午夜前几秒。十三天的极度焦虑。",
        defEn: "Nuke standoff. Doomsday clock halts seconds to midnight. 13 Days anxiety.",
        core: "末日的博弈。数十亿人的命运悬在两位掌权者出汗的指尖。 | 锚定 ($): M4 核威吓死锁 (Nuke_Terror_Deadlock)",
        coreEn: "Doomsday game. Billions' fate hangs on two leaders' sweaty fingertips. | Anchor ($): M4 Nuke_Terror_Deadlock",
        logic: "【边缘测试】：把“互相保证毁灭”推演到临界溢出值。两个有毁灭世界能力的算力中心互相读取底牌。地球存亡不取决于勇气，而取决于防空洞的电报频率。",
        logicEn: "[Edge Case Test]: Pushes 'MAD' to near-overflow. Two world-ending hash-centers read each other's hands. Earth's survival depends not on courage, but bunker telegraph freq.",
        patch: {
            mechanics: "灭世博弈沙盒 + [决策黑箱度 = 极暗; 军方好战冲动 = 压抑极限; 生还概率 = 抛硬币]",
            mechanicsEn: "Doomsday_Sandbox + [Decise_Blackbox = Super_Dark; Mil_War_Urge = Limit_Repressed; Survive_Rate = Coin_Flip]",
            aesthetic: "深海中幽闭发臭的核潜艇，艇长握着发射钥匙。防空洞烟雾缭绕全是布满红丝盯紧地图的眼睛。",
            aestheticEn: "Claustrophobic foul nuke sub in deep sea, cap holding launch key. Smoky bunker full of bloodshot eyes staring at maps.",
            runtime: "IF (无害深水炸弹砸晕潜艇电报员) THEN (触发：舰长误认三战爆发，差点插下钥匙终止历史)",
            runtimeEn: "IF (Harmless depth charge knocks out radioman) THEN (Trigger: Cap assumes WW3 began, almost turns key to end history)"
        }
      },
      {
        id: "apartheid_safrica",
        name: "南非种族隔离", nameEn: "Apartheid",
        def: "隔离区，通行证制。可见性即原罪的空间物理隔绝。",
        defEn: "Bantustans, passbooks. Visibility as sin via phys-space isolate.",
        core: "分类的极致压迫。肤色被编码成不平等的本体论差异。 | 锚定 ($): M3 黑白切割 (B/W_Split)",
        coreEn: "Peak oppressive taxonomy. Color encoded into unequal ontology. | Anchor ($): M3 B/W_Split",
        logic: "【肤色作为Root特权】：白人少数统治者将种族主义进行了无情的底层物理分区。通过通行证将黑人降级为只在白天提供廉价劳动力的下等组件，在特定区域视作非法废码清扫。",
        logicEn: "[Skin as Root Privilege]: White minority rulers mercilessly phys-partitioned racism. Passbooks down-grade blacks to lower comps supplying cheap labor by day, wiped as illegal garbage code in restricted zones.",
        patch: {
            mechanics: "鉴别强制防火墙 + [活动许可 = 极其严苛; 镇压阈值 = 触警即发; 全球孤立感 = 加剧]",
            mechanicsEn: "ID_Force_Firewall + [Range_Permit = Ultra_Harsh; Supress_Thresh = Hair_Trigger; Global_Iso = Worsened]",
            aesthetic: "开阔的白人高尔夫球场旁边，隔着高压电网就是污水横流的铁皮贫民窟。",
            aestheticEn: "Vast white golf course; across high-volt wire are dark shanties with raw sewage.",
            runtime: "IF (未携通行证的黑人为躲雨进入白人海滩) THEN (触发：被全副武装的防暴警察疯狗般殴打)",
            runtimeEn: "IF (Passless black man shields from rain on whites beach) THEN (Trigger: Beaten like mad dog by armored riot cops)"
        }
      }
    ]
};
