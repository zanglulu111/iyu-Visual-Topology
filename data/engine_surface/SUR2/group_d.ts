import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_D: LibraryCategoryDef = {
    id: "era_renaissance",
    name: "04. 觉醒与扩张 (Renaissance & Expansion)",
    desc: "人性的回归，新大陆的发现。理性的启蒙伴随着野蛮的殖民与对未知的贪婪。",
    items: [
      {
        id: "renaissance_it_court",
        name: "意大利文复", nameEn: "Italian Court",
        def: "美第奇，毒药与画笔，人文诞生的摇篮。",
        defEn: "Medici, poison & brushes, cradle of humanism.",
        core: "美的代价。肮脏权谋中诞生极度圣洁。 | 锚定 ($): M3 毒花绽放 (Poison_Bloom)",
        coreEn: "Cost of beauty. Dirty plots birthed holy art. | Anchor ($): M3 Poison_Bloom",
        logic: "【能指挪用与洗白】：新兴资产阶级（美第奇）没有神授权柄。他们必须购买最天才的艺术脑力，用绝美的视觉画面去缝合并掩盖他们做高利贷起家的“肮脏实在界”。",
        logicEn: "[Signifier Hijack & Wash]: New bourgeois (Medici) have no divine mandate. They buy top genius art brains, using stunning visuals to suture and hide their 'dirty Real' of usury.",
        patch: {
            mechanics: "艺术赎罪券协议 + [赞助金 = 无底洞; 刺杀频率 = 极高; 审美需求 = 绝对挑剔]",
            mechanicsEn: "Art_Indulgence_Protocol + [Patronage = Bottomless; Assassination = V.High; Aesthetic = Absolute_Picky]",
            aesthetic: "大理石雕塑的完美肌肉线条与天鹅绒下渗出的黑色毒血。极其高雅的讨论伴杂着后巷的割喉。",
            aestheticEn: "Marble perfect muscles vs black poison blood seeping under velvet. High elegant chats mixed with alley throat-slits.",
            runtime: "IF (画作因隐喻了不该说的话触怒金主) THEN (触发：在收到丰厚赏金的当晚被秘密沉入阿诺河)",
            runtimeEn: "IF (Painting angers patron via hidden metaphor) THEN (Trigger: Secretly drowned in Arno river the night after a huge reward)"
        }
      },
      {
        id: "renaissance_north_decay",
        name: "北方文复", nameEn: "Northern Style",
        def: "炼金术，版画质感，宗教改革的阴郁。",
        defEn: "Alchemy, print textures, gloomy Reformation.",
        core: "理性的阵痛。思想大爆炸与旧体制反弹。 | 锚定 ($): M1 蚀刻幽灵 (Etched_Ghost)",
        coreEn: "Pains of reason. Mind boom vs old sys kickback. | Anchor ($): M1 Etched_Ghost",
        logic: "【机械复制危机】：活字印刷术（物理协议升级）解除了神职人员对“真理大他者”的垄断。普通人直面文本，引发了解码的多样性危机（宗教战争），一切都被版画般刻进死亡焦虑中。",
        logicEn: "[Mechanical Copy Crisis]: Printing press (phys protocol upgrade) breaks clergy monopoly on 'Truth Other'. Laymen face text, causing multi-decode crisis (religious wars), all etched in death anxiety like prints.",
        patch: {
            mechanics: "文本解权协议 + [印刷传播率 = 呈指数; 教条分裂 = Max; 死亡焦虑投射 = 强烈]",
            mechanicsEn: "Text_Deprivilege_Protocol + [Print_Spread = Exp; Dogma_Split = Max; Death_Anxiety = Strong]",
            aesthetic: "丢勒式的黑白细密线条，骷髅、沙漏、骑士与魔鬼共舞。阴冷潮湿的尼德兰风情。",
            aestheticEn: "Dürer-esque dense black-white lines. Skeletons, hourglasses, knights dancing with devils. Cold damp Netherland vibe.",
            runtime: "IF (平民阅读了本地方言版圣经) THEN (触发：因自我解读与教会不符而产生的存在主义眩晕和烈火审判)",
            runtimeEn: "IF (Peasant reads local vernacular Bible) THEN (Trigger: Existential vertigo & fire trial due to self-interpretation defying Church)"
        }
      },
      {
        id: "age_of_discovery_sea",
        name: "大航海时代", nameEn: "Discovery Era",
        def: "帆船由于坏血病发臭。新大陆，傲慢与掠夺。",
        defEn: "Galleons stink of scurvy. New World, awe & loot.",
        core: "地缘膨胀。人类认知边界突破，旧神凋亡。 | 锚定 ($): M6 视野超载 (Horizon_Overload)",
        coreEn: "Geopolitic bloat. Human ego breaks borders, old gods die. | Anchor ($): M6 Horizon_Overload",
        logic: "【主体边界溢出】：地球的数学拓扑（圆的）物理推翻了中世纪文本神学（平的）。大他者的话语权在香料利润面积前崩塌，导致欧洲人在美洲时彻底解除了道德锁，沦为狂念野兽。",
        logicEn: "[Subject Border Overflow]: Earth math topology (round) physically overturns medieval text theology (flat). Other's voice collapses before spice profit margins, causing Euros to drop moral locks in Americas and act like beasts.",
        patch: {
            mechanics: "地球解包协议 + [地理探索欲 = Max; 人权阈值 = 原住民设为0; 坏血病掉血 = 持续]",
            mechanicsEn: "Earth_Unpack_Protocol + [Geo_Explore = Max; Human_Rights = 0_for_Natives; Scurvy_Bleed = Continuous]",
            aesthetic: "深蓝无垠的绝望航程。船底布满藤壶，舱内充满香料香气和坏死的牙龈恶臭的极度对立。",
            aestheticEn: "Endless deep blue despairing voyage. Barnacle hulls, holds filled with extreme contrast of spice scent & necrotic gums.",
            runtime: "IF (在绝望的航行中远方终于出现陆地) THEN (触发：极度狂喜，随后立刻转化为抢劫与拔刀的条件反射)",
            runtimeEn: "IF (Land finally appears on doomed voyage) THEN (Trigger: Extreme ecstasy instantly turning to looting/stabbing reflex)"
        }
      },
      {
        id: "pirate_golden_nassau",
        name: "海盗黄金期", nameEn: "Piracy Golden",
        def: "拿骚黑旗，无法之徒的浪漫与反社会结构。",
        defEn: "Nassau black flags, outlaw romance, anti-society.",
        core: "短暂自由梦。拒绝大他者的注定覆灭乌托邦。 | 锚定 ($): M5 逆流黑旗 (Reverse_Blackflow)",
        coreEn: "Brief freedom dream. Doomed utopia rejecting Other. | Anchor ($): M5 Reverse_Blackflow",
        logic: "【解连接宣言】：海盗是系统的黑客。他们主动断开了与欧洲君主的“主奴链接”，建立粗糙的民主模块（海盗法典）。然而，没有大他者的系统无法长久，最终被帝国海军的庞大算力碾碎。",
        logicEn: "[Unlink Manifesto]: Pirates are sys hackers. They manually disconnect 'Master-Slave link' with Euro monarchs, building crude democracy modules (Pirate Code). But Othler-less sys can't last, crushed by massive Navy compute.",
        patch: {
            mechanics: "脱机狂欢协议 + [自由意志 = 极高; 私掠收入 = 波形震荡; 系统追捕等级 = 随时间Max]",
            mechanicsEn: "Offline_Revelry_Protocol + [Free_Will = V.High; Privateer_Income = Sine_Wave; Sys_Hunt_Level = Max_Over_Time]",
            aesthetic: "朗姆酒，断木腿，与挂在绞刑架上的风干发黑尸体。极端自由下极不稳定的高危生活质感。",
            aestheticEn: "Rum, peg legs, and blackened dry corpses hung on gibbets. Extremely unstable high-risk life texture under extreme freedom.",
            runtime: "IF (面对压倒性的皇家海军包围) THEN (触发：微笑着引爆火药桶拖带全员下地狱的终极解脱)",
            runtimeEn: "IF (Facing overwhelming Royal Navy siege) THEN (Trigger: Smilingly igniting powder keg dragging all to hell in release)"
        }
      },
      {
        id: "ming_forbidden_city",
        name: "大明锦衣", nameEn: "Ming Dynasty",
        def: "宦官政治与锦衣千户。官僚专制与市井繁荣。",
        defEn: "Eunuchs & Jin Yi Wei. Despotism vs vibrant folk.",
        core: "庙堂死板 vs 江湖活力。欲望在祖制前的扭曲。 | 锚定 ($): M4 密印镇压 (Seal_Suppression)",
        coreEn: "Stiff court vs active rivers-lakes. Desire twisted by Ancestral Law. | Anchor ($): M4 Seal_Suppression",
        logic: "【祖制的格式化与溢出】：“大明律”试图将社会写成一台不可更改的静态服务器。但人类的欲望在长期压抑中，通过宦官（去势者的反噬）和特务暴力（锦衣卫的法外实在界）发生了严重的畸形溢出。",
        logicEn: "[Ancestral Format & Overflow]: 'Ming Code' tries to write society as unchangeable static server. But human desire, repressed long, deformed-overflows via eunuchs (castrati backlash) and secret police (extra-judicial Real).",
        patch: {
            mechanics: "静态锁死框架 + [思想审查 = Max; 酷刑创新 = 极高; 地下繁荣 = 隐性生长]",
            mechanicsEn: "Static_Lock_Frame + [Thought_Filter = Max; Torture_Innovate = V.High; Underground_Boom = Stealth_Grow]",
            aesthetic: "飞鱼服绣春刀的阴冷艳丽，对比诏狱中血肉模糊的受刑者。江南水乡的脂粉气与紫禁城上空的血腥气叠印。",
            aestheticEn: "Cold gorgeous Flying-Fish suits & embroidered swords vs bloody victims in imperial jail. Jiangnan rogue powder layered with Forbidden City blood breath.",
            runtime: "IF (在青楼讨论了一句关于首辅的笑话) THEN (触发：夜半三更门被敲响，全家物理消失的系统清理)",
            runtimeEn: "IF (Cracking a joke about Grand Sec in brothel) THEN (Trigger: Midnight knock, whole family physically erased in sys wipe)"
        }
      },
      {
        id: "edo_isolation",
        name: "江户锁国", nameEn: "Edo Isolation",
        def: "浮世绘，吉原。封闭年代的颓废迷幻极简。",
        defEn: "Ukiyo-e, Yoshiwara. Decadent delicate minimal isolation.",
        core: "被冻结阶级。在浮世中寻找瞬间刺激的存在感。 | 锚定 ($): M3 浮世虚花 (Ukiyo_Hollow)",
        coreEn: "Frozen classes. Seeking instant ticks in floating world. | Anchor ($): M3 Ukiyo_Hollow",
        logic: "【系统休眠沙盒】：德川幕府切断了外部网络（锁国），冻结了阶层跃迁接口。武士无仗可打沦为冗余代码，主体只能在名为“浮世”（剧院/游郭/俳句）的虚拟内存中疯狂消耗多余的欲力。",
        logicEn: "[Sys Hibernate Sandbox]: Tokugawa cut ext-net (Sakoku) and froze class-climb APIs. Samurai with no wars become bloat-code. Subjects madly burn excess libido in virtual memory called 'Ukiyo' (theaters/brothels/haiku).",
        patch: {
            mechanics: "时间凝滞隔离网 + [社会流动率 = 0; 感官刺激需求 = Max; 武士虚无感 = 极高]",
            mechanicsEn: "Time_Stasis_Iso_Net + [Social_Mobility = 0; Sense_Stim_Need = Max; Samurai_Nihilism = V.High]",
            aesthetic: "色彩鲜艳平铺的浮世绘风格。艺伎惨白的面容背后、没有灵魂却极其精致的风教仪式感。",
            aestheticEn: "Bright flat Ukiyo-e vector colors. Geisha's pale facade hiding soulless but ultra-refined ritual vibe.",
            runtime: "IF (下级武士因贫穷无法偿还债务) THEN (触发：在樱花树下体面切腹以掩盖其实质被饿死的卑微)",
            runtimeEn: "IF (Low samurai cannot pay debts due to poverty) THEN (Trigger: Dignified seppuku under sakura to mask dying of base hunger)"
        }
      },
      {
        id: "sun_king_baroque",
        name: "太阳王/凡尔赛", nameEn: "Baroque Court",
        def: "绝对君主，假发礼仪。表面华丽背面腐烂。",
        defEn: "Absolute monarch, wig rites. Fancy cover, rotting back.",
        core: "景观统治力。极致视觉铺张让臣民交出主权。 | 锚定 ($): M4 炫目威权 (Dazzling_Auth)",
        coreEn: "Spectacle rule. Ultimate visual lavish disarming subjects. | Anchor ($): M4 Dazzling_Auth",
        logic: "【视觉大他者过载】：路易十四将“权力”转化为一出极度昂贵的芭蕾舞。通过巴洛克式无用但繁复的宫廷礼仪（给国王穿衣等），挤占了贵族大脑的全部内存，使其放弃了叛乱运算。",
        logicEn: "[Vis-Other Overload]: Louis XIV compiles 'power' into ultra-expensive ballet. Via useless but complex Baroque rites (dressing king), it hogs nobles' total RAM, making them drop uncalcable rebellion thought.",
        patch: {
            mechanics: "宫廷景观洗脑协议 + [表面奢华度 = Max; 卫生状况 = 极度恶臭; 发际线防御 = 依赖假发]",
            mechanicsEn: "Court_Spectacle_Brainwash + [Surface_Luxury = Max; Hygiene = Max_Stench; Hairline_Def = Depends_Wig]",
            aesthetic: "满天倒影和金箔的凡尔赛宫镜厅，但华丽长裙底下隐藏着随地大小便的臭气冲天。虚假强权的极致代表。",
            aestheticEn: "Versailles Mirror Hall full of gold/reflections, but massive ballgowns hide foul stench of public defecation. Peak fake power.",
            runtime: "IF (因穿刺礼服的一丝不符合规矩) THEN (触发：在数千人的目光下瞬间社会性死亡，剥夺一切特权)",
            runtimeEn: "IF (Lace protocol missed by a millimeter) THEN (Trigger: Instant social death under 1000 gazes, stripping all perks)"
        }
      },
      {
        id: "enlightenment_guillotine",
        name: "法国大革命", nameEn: "French Revolution",
        def: "断头台，失控的理性，雅各宾派。",
        defEn: "Guillotine, runaway reason, Jacobins.",
        core: "理想的暴政。理性重组社会导致残酷杀戮。 | 锚定 ($): M1 理性斩首 (Rational_Beheading)",
        coreEn: "Tyranny of ideals. Rational society remake births cruelty. | Anchor ($): M1 Rational_Beheading",
        logic: "【纯粹理性的死机】：当启蒙思想试图用绝对的“几何与逻辑”来硬编码人类社会（废除宗教/改行十进制历法），这种对完美乌托邦的神圣执念，只能通过“快速切除所有不完美零件（断头台）”来实现。",
        logicEn: "[Pure Reason Crash]: When Enlightenment tries to hardcode society via absolute 'geo & logic' (abolish god/base-10 cal), this holy obsession with perfect Utopia can only execute by 'fast clipping of imperfect parts (guillotine)'.",
        patch: {
            mechanics: "绝对无菌化净化 + [革命道德阈值 = 突破云霄; 切除执行力 = 机械级精准; 同志转反贼率 = 极高]",
            mechanicsEn: "Abs_Sterile_Purge + [Rev_Moral_Thresh = Sky_High; Sever_Execution = Mech_Aimbot; Comrade_To_Traitor = V.High]",
            aesthetic: "高呼自由平等博爱的人群冷漠地看着暗红的断头台铡刀机械地、高效地每分钟滑落一次。理性的工业化杀人。",
            aestheticEn: "Crowds shouting Lib-Ega-Fra watch dark-red guillotine blade mechanically, efficiently drop per minute. Rational industrial kill.",
            runtime: "IF (被发现其言辞中有一句话不够‘革命’) THEN (触发：最纯洁的领袖昨天还在发表演讲，今天就在欢呼中人头落地)",
            runtimeEn: "IF (Found saying one word lacking 'revolution') THEN (Trigger: Purest leader cheering today, head dropping to crowd cheers tomorrow)"
        }
      },
      {
        id: "tudor_betrayal",
        name: "都铎王朝", nameEn: "Tudor Court",
        def: "亨利八世修妻，多次婚姻改变国家宗教底色。",
        defEn: "Henry VIII divorce divorces, marriages change state faith.",
        core: "肉欲即政治。国王个人欲望倒逼法律基础重组。 | 锚定 ($): M2 权欲镜像 (Power_Desire_Mirror)",
        coreEn: "Lust is politic. King's desire forces law remake. | Anchor ($): M2 Power_Desire_Mirror",
        logic: "【超我服从于本我】：君主（M4服务器节点）为了满足下半身的生殖与欲望焦虑，不惜脱离罗马教廷系统（强行分叉网络）。整个国家的信仰与无数人头，只是为了填补君主对“继承人绝对不安全感”的黑洞。",
        logicEn: "[Superego Submits to Id]: Monarch (M4 node) to satisfy genital/heir anxiety, forks off Roman network (hard fork break). Nation's faith and countless heads just fuel to fill his 'absolute lack of heir security' blackhole.",
        patch: {
            mechanics: "本我强制重写协议 + [子嗣焦虑 = Max; 教派网络分叉 = 强制; 伴侣砍头率 = 极高]",
            mechanicsEn: "Id_Force_Rewrite + [Heir_Anxiety = Max; Sect_Net_Fork = Forced; Spouse_Behead_Rate = V.High]",
            aesthetic: "华贵的红丝绒与巨大的体态，背后是阴雨绵绵的伦敦塔内，绝望等待处刑的前任王后。",
            aestheticEn: "Lush red velevet & massive regal bodies, behind heavily raining Tower of London where ex-queens wait to die in despair.",
            runtime: "IF (新王后未能生下男性继承人或流产) THEN (触发：启动极其复杂的法律罗织过程以叛国罪将其送上断头台)",
            runtimeEn: "IF (New queen fails male heir drops/miscarries) THEN (Trigger: Complex law framing sequence starts logging treason till beheading)"
        }
      },
      {
        id: "mughal_splendor",
        name: "莫卧儿红城", nameEn: "Mughal India",
        def: "泰姬陵与巨大红城，波斯文化在印度的混合。",
        defEn: "Taj Mahal & Red Fort, Persian-India mix.",
        core: "不朽渴望。耗尽国库建最美坟墓。 | 锚定 ($): M6 亡灵华盖 (Undead_Canopy)",
        coreEn: "Longing for immortal. Draining treasury for tomb. | Anchor ($): M6 Undead_Canopy",
        logic: "【死亡的符号化超载】：统治者试图用最完美的几何对称（大理石）来抵御实在界的消亡（爱人的死）。当整个帝国的算力（财富与劳动力）都涌向一块死人墓碑时，活着的帝国开始崩塌。",
        logicEn: "[Death S-Overload]: Ruler tries repelling decaying Real (dead lover) with perfect marble geometry. When empire's hash (wealth/labor) all pours into a dead-rock, the living empire begins to crash.",
        patch: {
            mechanics: "亡者纪念碑死锁 + [建筑对称强迫症 = Max; 国库消耗 = 指数漏水; 宫廷骨肉相残 = 极高]",
            mechanicsEn: "Dead Monument Deadlock + [Build_Sym_OCD = Max; Treasury_Burn = Exp_Leak; Royal_Kinslaying = High]",
            aesthetic: "在无暇纯白的泰姬陵大理石水池倒影下，是周围饥饿的印度平民与为了夺权互相挖眼的王子残暴。",
            aestheticEn: "Flawless white Taj Mahal pools reflect hungry Indian masses & brutally eye-gouging princes taking power.",
            runtime: "IF (绝美纪念碑落成的当日) THEN (触发：老皇帝被成功夺权的残忍儿子永远软禁，只能隔窗眺望)",
            runtimeEn: "IF (Monument finished day 1) THEN (Trigger: Old king dethroned & jailed by cruel son, forever staring through window)"
        }
      },
      {
        id: "elizabeth_exp",
        name: "伊丽莎白航线", nameEn: "Elizabethan Age",
        def: "莎士比亚与环球剧场，海盗与新教间谍网。",
        defEn: "Shakespeare & Globe dict, pirates & Protestant spy network.",
        core: "新旧权力更迭。文化爆炸下的特务暗战。 | 锚定 ($): M3 蔷薇刺网 (Rose_Thorn_Web)",
        coreEn: "Power shift. Introvert explosion under spy web. | Anchor ($): M3 Rose_Thorn_Web",
        logic: "【双重进程的纠缠】：表层是戏剧艺术（大他者的重构）爆发，底层是对天主教残余的残酷物理清除（沃尔辛厄姆情报网）。优雅的诗行与断头台上的血构成了这个时代完美的双星平衡。",
        logicEn: "[Dual Process Entanglement]: Surface is drama art (Other's rebuild) boom, bottom is cruel phys purge of Catholic residue (Walsingham spy net). Elegant poetry & guillotine blood form a perfect binary star balance.",
        patch: {
            mechanics: "双轨文化情报网 + [戏剧洗脑力 = Max; 间谍眼线 = 遍布酒馆; 宗教阵营敌意 = 绝不妥协]",
            mechanicsEn: "Dual_Track_Intel_Net + [Drama_Brainwash = Max; Spy_Eyes = Pub_Wide; Sect_Hostility = No_Mercy]",
            aesthetic: "穿着极其夸张拉夫领的无情女王。油木舞台上的哈姆雷特独白与伦敦塔下被拔掉指甲的神父。",
            aestheticEn: "Ruthless queen in ultra-exaggerated ruff. Hamlet soliloquies on oiled stages vs priests missing nails in London Tower.",
            runtime: "IF (在剧院中被发现持有西班牙金币) THEN (触发：在散场时被无声溺死于泰晤士河的泥沼中)",
            runtimeEn: "IF (Found holding Spanish gold in theater) THEN (Trigger: Silently drowned in Thames mud after show)"
        }
      },
      {
        id: "spanish_armada",
        name: "无敌舰队", nameEn: "The Armada",
        def: "天主教守卫者，重型宝船与美洲白银通胀。",
        defEn: "Catholic defender, heavy treasure galleons & Americas silver inflation.",
        core: "财富的诅咒。白银流入导致的帝国虚弱。 | 锚定 ($): M1 白银滞涨 (Silver_Stagflation)",
        coreEn: "Wealth's curse. Imperial weakness from silver influx. | Anchor ($): M1 Silver_Stagflation",
        logic: "【通货膨胀式自噬】：帝国获得了看似无限的“实在界财富（白银）”，但这反而摧毁了其自身的生产系统与经济符号。当无敌舰队的庞大体积遭遇灵活的英国火船时，旧式尊严在全球化贸易算法前显得如此笨拙。",
        logicEn: "[Inflationary Autophagy]: Empire gains seemingly infinite 'Real wealth (silver)', but it wrecks own prod-sys & econ-signifiers. When Armada's massive bulk meets nimble UK fire-ships, old dignity looks so clumsy before global trade algos.",
        patch: {
            mechanics: "金银过载瘫痪协议 + [硬通货持有量 = 爆仓; 国内生产力 = 萎缩崩坏; 战术灵活性 = 负数]",
            mechanicsEn: "Bullion_Overload_Paralysis + [Hard_Currency = Overflow; Home_Production = Wither; Tactic_Flex = Negative]",
            aesthetic: "堆满阿兹特克金灿灿艺术品的巨大笨重木船，在英吉利海峡暴风雨与火攻下缓慢燃烧沉没的末日感。",
            aestheticEn: "Giant clunky galleons stuffed with bright Aztec art, slowly burning & sinking in stormy English Channel fire-assault.",
            runtime: "IF (美洲运银船队连续三年安全抵达) THEN (触发：马德里物价飞涨导致的深层社会饥荒与乞丐满街)",
            runtimeEn: "IF (Americas silver fleet arrives safely for 3 years) THEN (Trigger: Madrid prices skyrocket causing deep famine & beggars everywhere)"
        }
      },
      {
        id: "witch_hunt_salem",
        name: "塞勒姆审巫", nameEn: "Salem Witch",
        def: "清教徒社区，极度压抑下指控他人的集体癔症。",
        defEn: "Puritan community, collective hysteria accusing others under extreme repression.",
        core: "道德的病态。通过投射罪恶感猎杀邻房。 | 锚定 ($): M4 歇斯底里投射 (Hysteric_Projection)",
        coreEn: "Moral pathology. Hunting neighbors via guilt projection. | Anchor ($): M4 Hysteric_Projection",
        logic: "【超我压抑的爆破】：在极度严苛、试图剥除一切欲望的清教徒社会中，无孔不入的“罪恶感”无法被系统消化。只能通过制造虚构的“女巫（替罪羊）”来建立物理排风口，释放集体的力比多张力。",
        logicEn: "[Superego Repression Burst]: In ultra-strict Puritan society trying to strip all desire, pervasive 'guilt' can't be digested. Must create fictional 'witches (scapegoats)' as physical vents to release collective libido tension.",
        patch: {
            mechanics: "欲力投射排雷网 + [清规戒律 = 窒息级; 谎言连锁 = 病毒扩散; 证据需求 = 梦境/幻觉有效]",
            mechanicsEn: "Libido_Project_Mine_Net + [Strict_Rules = Choking; Lie_Chain = Viral; Evidence_Req = Dreams/Hallucinations_Valid]",
            aesthetic: "阴暗寒冷的新英格兰小镇。黑色高礼帽与苍白面庞的审判官，伴随着少女的尖叫与村庄广场的绞刑架。",
            aestheticEn: "Dark cold New England town. Black top hats & pale inquisitors, mixed with girls screaming & town square gibbits.",
            runtime: "IF (某个压抑很久的少女做了一个关于性与魔鬼的梦) THEN (触发：第二天指控隔壁寡妇在汤里下毒，导致其被吊死)",
            runtimeEn: "IF (Repressed girl dreams of sex & devils) THEN (Trigger: Next day accuses neighbor widow of poisoning soup, getting her hanged)"
        }
      },
      {
        id: "shogun_bakufu",
        name: "幕府体制", nameEn: "Bakufu Order",
        def: "参勤交代，武士贫困化，儒家等级格式化。",
        defEn: "Sankin-kotai, samurai poverty, Confucian rank format.",
        core: "荣誉的贬值。武士变官僚的结构性错位。 | 锚定 ($): M3 身份死锁 (Status_Deadlock)",
        coreEn: "Honor devalued. Samurai-to-bureaucrat structural mismatch. | Anchor ($): M3 Status_Deadlock",
        logic: "【身份类库弃用（Deprecated）】：江户时代和平降临，原本为杀戮设计的接口（武士阶层）被强行塞入官僚文书系统。这种功能与形式的脱节，导致了极度的心理内耗与通过仪式性切腹来挽尊的可悲现象。",
        logicEn: "[Identity Library Deprecated]: Edo peace arrives; the API designed for killing (samurai) is forced into bureau-doc sys. This function-form disconnect causes extreme psych friction, leading to sad face-saving via ritual seppuku.",
        patch: {
            mechanics: "阶级降维软禁 + [账本技能需求 = Max; 拔刀豁免权 = 仅限斩舍御免; 精神内耗 = 晚期]",
            mechanicsEn: "Class_Dim_Drop_House_Arrest + [Ledger_Skill_Need = Max; Sword_Exempt = Kiri_Sute_Gomen_Only; Psych_Friction = Terminal]",
            aesthetic: "穿着一丝不苟的裃，手握无法出鞘的名刀的贫困武士。在深夜对着账本叹气的曾经的杀人鬼。",
            aestheticEn: "Poor samurai in meticulous kamishimo, holding unsheathable famous swords. Ex-killers sighing at ledgers late at night.",
            runtime: "IF (因为买不起好米而不得不典当家传宝刀) THEN (触发：在极度屈辱中维持表面体面并在日记中痛骂商人)",
            runtimeEn: "IF (Pawning heirloom sword because can't afford good rice) THEN (Trigger: Maintaining fake dignity in extreme humiliation while cursing merchants in diary)"
        }
      },
      {
        id: "new_amsterdam",
        name: "新阿姆斯特丹", nameEn: "Old New York",
        def: "皮草，泥泞，多国移民，公司野性统治。",
        defEn: "Fur, mud, multi-national immigrants, wild company rule.",
        core: "资本的原始野性。无历史只有交换的边疆。 | 锚定 ($): M1 无根代码 (Rootless_Code)",
        coreEn: "Capital's raw wildness. No history, just swap frontier. | Anchor ($): M1 Rootless_Code",
        logic: "【零历史初始化】：这里被硬启动为纯粹的交易沙盒。没有欧洲沉重的宗教与血统包袱，一切主体都被简化为商业合同上的ID。这是资本主义最原初、最泥泞也最具活力的暴力启动。",
        logicEn: "[Zero-History Boot]: Booted hard as pure trade sandbox. No heavy Euro religious/blood baggage; all subjects simplified to IDs on biz contracts. It's capitalism's earliest, muddiest, most lively violent boot.",
        patch: {
            mechanics: "纯商业驱动内核 + [历史包袱 = 0; 利益敏锐度 = Max; 道德底线 = 与利润挂钩]",
            mechanicsEn: "Pure_Biz_Drive_Kernel + [History_Baggage = 0; Profit_Sense = Max; Moral_Base = Linked_to_Profit]",
            aesthetic: "木轮车压过泥泞街道留下的深沟，海狸皮堆积如山的仓库。操着十几种不同语言互相咆哮讨价还价的喧闹酒馆。",
            aestheticEn: "Wooden wheels leaving deep ruts in muddy streets, beaver pelts piled in huge warehouses. Noisy taverns roaring in 10+ languages bargaining.",
            runtime: "IF (发现某个印第安部落愿意用极低价格出售曼哈顿岛) THEN (触发：毫不犹豫地用一箱廉价玻璃珠买下这个世界未来的中心)",
            runtimeEn: "IF (Finds Indian tribe willing to sell Manhattan super cheap) THEN (Trigger: Hesitates zero buying the world's future center with a box of cheap beads)"
        }
      },
      {
        id: "cossack_steppes",
        name: "哥萨克草原", nameEn: "Cossack Freedom",
        def: "乌克兰平原的骑兵，游离于沙皇之外的暴力与自由。",
        defEn: "Ukrainian plains cavalry, violence & freedom defying Tsars.",
        core: "边界的野性自由。大国夹缝中的强权脱域。 | 锚定 ($): M5 游牧脱域 (Nomadic_Deterritorialization)",
        coreEn: "Wild frontier freedom. Power deterritorialization in super-power crevices. | Anchor ($): M5 Nomadic_Deterritorialization",
        logic: "【系统边缘越狱】：在三大地缘板块（波斯克/奥斯曼/沙俄）互相碰撞的未定义区域（Null Zone），一群逃亡农奴通过将马镫和马刀重新编译，形成了一个拒绝被中心大他者合并的野性移动宽带。",
        logicEn: "[Sys Edge Jailbreak]: In undefined Null Zone where 3 geo plates (Pol-Lith/Ottoman/Tsardoms) collide, fugitive serfs recompile stirrups & sabers to form a wild mobile broadband refusing central Other merge.",
        patch: {
            mechanics: "边缘游击狂欢 + [大国依附度 = 随心所欲; 战马适应性 = 极高; 定居倾向 = 低]",
            mechanicsEn: "Edge_Guerilla_Revelry + [Power_Attach = Whimsical; Horse_Adapt = V.High; Settle_Tendency = Low]",
            aesthetic: "辽阔萧瑟的黑色土地，狂风扬起哥萨克人的长发与马鬃。一边弹奏班杜拉琴一边磨刀的豪迈与血腥。",
            aestheticEn: "Vast bleak black earth, wild wind blowing Cossack hair & horse manes. Grand & bloody scenes of strumming banduras while sharpening blades.",
            runtime: "IF (沙皇派来税务官要求登记户口纳税) THEN (触发：将税务官绑在马尾上拖行十里并给莫斯科写一封充满下流脏话的回信)",
            runtimeEn: "IF (Tsar sends taxman to register rolls) THEN (Trigger: Drag taxman by frose tail 10 miles & write Moscow a reply full of filthy swearing)"
        }
      },
      {
        id: "alchemy_scientific",
        name: "炼金术黄昏", nameEn: "Alchemy's End",
        def: "牛顿实验室，科学革命前夕。贤者之石的绝响。",
        defEn: "Newton's lab, eve of Sci Rev. Last gasp of Philosopher's Stone.",
        core: "范式跃迁。神性退场，灵魂被冰冷数学除魅。 | 锚定 ($): M4 方程溶解 (Equation_Dissolution)",
        coreEn: "Paradigm leap. Divinity exits, soul disenchants to cold math. | Anchor ($): M4 Equation_Dissolution",
        logic: "【内核算法替换】：长期指导人类精神的神秘主义（万物有灵）试图进行最后一次越权运算时，被刚挂载的“微积分引擎”物理压制。宇宙从一个有情感的神灵，降维成了一个极其精密但冷漠刺骨的发条齿轮模型。",
        logicEn: "[Kernel Algo Replace]: Mysticism (animism) guiding human spirit long tries one last root-level prompt, but gets physically suppressed by newly mounted 'Calculus Engine'. Universe drops dim from emotional god to ultra-precise but bone-chilling clockwork gear model.",
        patch: {
            mechanics: "魔法除魅升级档 + [神秘学变量 = 清零; 数学精确度 = 绝对支配; 浪漫想象 = 跌停]",
            mechanicsEn: "Magic_Disenchant_Patch + [Occult_Vars = Zeroed; Math_Accuracy = Abs_Domination; Romantic_Imagination = Limit_Down]",
            aesthetic: "暗室中摆满装满水银和尿液的玻璃瓶，旁边却工整地写满了力学三大定律的草稿纸。旧神与新神的疯狂交棒期。",
            aestheticEn: "Dark room full of mercury & urine glass vials, next to neatly written drafts of 3 laws of mechanics. Crazy baton pass of old & new gods.",
            runtime: "IF (用数学算出了彗星的精确返回轨道时间) THEN (触发：人类在确认理性的伟大胜利时，也同时感到了被抛弃在机械宇宙中的极度深寒)",
            runtimeEn: "IF (Math calculates exact comet return orbit) THEN (Trigger: Humanity feeling deep freeze of being abandoned in mechanical universe amidst great rational victory)"
        }
      },
      {
        id: "florence_medici",
        name: "美第奇暗战", nameEn: "Medici Finance",
        def: "高利贷改画笔。买艺术洗原罪，隐形统治。",
        defEn: "Usury to brush. Buying art to wash sin, stealth rule.",
        core: "金钱变现大他者。神权社会向资本惊险跳跃。 | 锚定 ($): M1 债务救赎 (Debt_Salvation)",
        coreEn: "Money monetizes Other. Thrilling leap from theocracy to capital. | Anchor ($): M1 Debt_Salvation",
        logic: "【系统底层重构】：佛罗伦萨的银行家破解了教会的“原罪”防火墙——既然高利贷会下地狱，那就花钱雇人画最绝美的圣母像。这是资本首次证明：连进天堂的IP地址都是可以被金钱算力强行重定向的。",
        logicEn: "[Sys Base Rebuild]: Florence bankers cracked Church's 'Original Sin' firewall -- if usury goes to hell, just hire artists to paint the most stunning Madonnas. Cap first proves: even IP addresses to heaven can be forcefully redirected by money hash.",
        patch: {
            mechanics: "原罪资本洗白网 + [账房算力 = 统治一切; 神学防火墙 = 被重金穿透; 隐形成本 = Max]",
            mechanicsEn: "Org_Sin_Cap_Laundering + [Ledger_Hash = Rules_All; Theo_Firewall = Pierced_by_Gold; Stealth_Cost = Max]",
            aesthetic: "巨大的黑色厚重账本翻开，每一页记载的血淋淋利息，都能兑换成穹顶上一片最璀璨的天使壁画。",
            aestheticEn: "Giant thick black ledger opens; every page of bloody interest equates a piece of glowing angel fresco on the dome.",
            runtime: "IF (教皇因亏空需要大量借款时) THEN (触发：在表面上亲吻教皇戒指的同时，在脑中给整个梵蒂冈标上了抵押物价格)",
            runtimeEn: "IF (Pope needs massive loan for deficit) THEN (Trigger: Kissing ring on surface, pricing entire Vatican as collateral in mind)"
        }
      },
      {
        id: "maya_colonial",
        name: "殖民地玛雅", nameEn: "Spanish Maya",
        def: "倒塌的神庙与原址教堂。文化层累与混血痉挛。",
        defEn: "Fallen temples & churches on site. Cultural strata & mestizo spasms.",
        core: "灵魂殖民。本土崇拜在天主教外壳下的诡秘存续。 | 锚定 ($): M3 信仰套娃 (Faith_Matryoshka)",
        coreEn: "Soul colonization. Local worship subtly survives in Catholic shell. | Anchor ($): M3 Faith_Matryoshka",
        logic: "【UI覆盖层越狱】：征服者用天主教的UI（教堂/圣徒）强行覆盖了玛雅人的底层系统（金字塔/羽蛇神）。但被压抑的本土代码依然在后台运行，导致圣母玛利亚的雕像被供奉上染血的玉米，产生了极度怪诞的异端报错（Syncretism）。",
        logicEn: "[UI Overlay Jailbreak]: Conquistadors force-overlay Catholic UI (churches/saints) on Maya base sys (pyramids/Quetzalcoatl). But repressed native code still runs in background, so Virgin Mary gets bloody corn offered, returning grotesque heretic errs (Syncretism).",
        patch: {
            mechanics: "皮囊替换协议 + [物理毁灭 = 彻底; 精神遗留 = 顽固; 代码混血 = 缝合怪级]",
            mechanicsEn: "Skin_Replace_Protocol + [Phys_Destroy = Total; Spirit_Remnant = Stubborn; Code_Mix = Abomination]",
            aesthetic: "建立在巨大印第安石块基座上的华丽巴洛克教堂。印第安面孔的圣母雕像留下红色的眼泪。",
            aestheticEn: "Fancy Baroque church built on giant Indian stone bases. Indian-faced Virgin statue crying red tears.",
            runtime: "IF (总督强令土著庆祝复活节) THEN (触发：在背诵拉丁文祈祷词的同时，土著在心底向雨神恰克祈求血的雨水)",
            runtimeEn: "IF (Viceroy forces natives to do Easter) THEN (Trigger: Reciting Latin prayers while silently begging rain god Chaac for bloody rain)"
        }
      },
      {
        id: "safavid_persia",
        name: "萨法维波斯", nameEn: "Safavid Iran",
        def: "什叶派国教，精美细密画。地毯与丝路余晖。",
        defEn: "Shia state-religion, exquisite miniatures. Carpets & Silk Road sunset.",
        core: "教法严酷包囊下的感官极致。帝国同一性的暴力重写。 | 锚定 ($): M4 细纹强迫症 (Miniature_OCD)",
        coreEn: "Sensory peak encapsulated by harsh dogma. Violent rewrite of Empire identity. | Anchor ($): M4 Miniature_OCD",
        logic: "【格式统一化审查】：为对抗奥斯曼的大他者流量，萨法维强行将全国代码格式化为什叶派（一次充满血腥的清盘行动）。然后在这高度压抑、统一的网栅上，他们渲染出了全世界最极度精美、细腻到病态的图形界面（波斯地毯与细密画）。",
        logicEn: "[Format Unify Check]: To fight Ottoman Other traffic, Safavids force-format nation to Shia (a bloody disk wipe). Then on this highly repressed/unified grid, they render the world's most hyper-exquisite, sickly delicate GUI (Persian carpets & miniatures).",
        patch: {
            mechanics: "教派格式化清洗 + [内部异见 = 强除; 审美精细度 = 像素级变态; 地缘防御感 = 极高]",
            mechanicsEn: "Sect_Format_Wipe + [Internal_Dissent = Force_Del; Aesthetic_Detail = Pixel_Pervert; Geo_Def_Sense = V.High]",
            aesthetic: "放大百倍才能看清的细密画里的残忍杀戮场面。繁复华丽到令人眩晕的蓝色清真寺穹顶网络。",
            aestheticEn: "Cruel kill scenes in miniature paintings only visible at 100x zoom. Complex gorgeous blue mosque dome webs that cause vertigo.",
            runtime: "IF (在绘制细密画时错了一根线条的走向) THEN (触发：画师可能被严酷的宗教法庭以‘扭曲真理’为名斩首)",
            runtimeEn: "IF (One line goes wrong while drawing miniature) THEN (Trigger: Artist might be beheaded by harsh religious court for 'twisting truth')"
        }
      }
    ]
};
