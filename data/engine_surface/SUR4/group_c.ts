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
      logic: "【土地绑定法则】：M4（律令）是神圣的效忠关系与物理地缘。主体的 M1 被转化为“某人的附庸”，失去这种依附关系即意味着 M5（行动合法性）的完全丧失。",
      logicEn: "[Land Unification Law]: M4 is sacred fealty and geography. M1 is converted to 'Someone's vassal'. Losing this tie negates all M5 (Legitimacy of action).",
      patch: {
        mechanics: "基础封建协议 + [空间流动性 = 极低; 道德契约约束力 = 致命]",
        mechanicsEn: "Base_FEUDAL + [Spatial_Mobility = Low; Moral_Contract_Force = Lethal]",
        aesthetic: "聚焦：高耸的城堡与泥泞的麦田、领主的纹章、锁子甲、沉重的税收文书。文本：粗野的尊卑分明与骑士的矫饰。",
        aestheticEn: "Focus: Castles vs Muddy fields + Heraldry + Chainmail. Text: Brutal hierarchy matched with knightly affectation.",
        runtime: "IF (平民试图离开领地或背离效忠) THEN (必然触发：被宣布为“逃奴/叛逆者”面临合法的无底线私刑处决)。",
        runtimeEn: "IF (Peasant_Attempts_to_Flee_or_Break_Oath) THEN (Must_Trigger: Declared an outlaw; faces legal and limitless vigilante execution)."
      }
    },
    {
      id: "caste_system",
      name: "种姓制度",
      nameEn: "Caste System",
      def: "出生即决定的命运。严格的职业与空间隔离，基于“不洁”设定的阶级固化。",
      defEn: "Destiny determined at birth. Strict occupational and spatial isolation, anchored by the concept of 'impurity'.",
      core: "【换喻】投胎的随机性与终生的赎罪 (The RNG of birth and a lifetime of atonement)",
      coreEn: "【Metonymy】The DNA of hierarchy wrapped in divine decree; karma as a totalitarian state.",
      logic: "【宿命闭环法则】：M4（种姓律令）宣布主体 M1 在物理上是天生“有罪/不洁”的。M3（任何向上的欲望）不仅是非法的，更被定义为对宇宙平衡的亵渎。",
      logicEn: "[Karmic Loop Law]: M4 declares M1 physically 'impure' from birth. M3 (Upward Desire) is not just illegal; it is a blasphemy against cosmic balance.",
      patch: {
        mechanics: "基础等级协议 + [跨界污染恐慌度 = MAX; 身份不可逃避性 = 1.0]",
        mechanicsEn: "Base_CASTE + [Cross-Boundary_Pollution_Panic = MAX; Identity_Inescapability = 1.0]",
        aesthetic: "聚焦：不同颜色的标记/服饰、隔离的阶级饮水井、虔诚而麻木的低首、金字塔型的聚落。文本：用因果报应包装的极度欺凌。",
        aestheticEn: "Focus: Color-coded garments + Segregated water wells + Numb servility. Text: Extreme bullying wrapped in Karma.",
        runtime: "IF (发生跨越种姓的接触/相爱) THEN (触发：荣誉谋杀与宗教意义上的宗族抹除)。",
        runtimeEn: "IF (Cross-Caste_Contact_or_Romance_Occurs) THEN (Trigger: Honor killings and religious erasure of the bloodline)."
      }
    },
    {
      id: "ancestor_worship",
      name: "宗法与家族统治",
      nameEn: "Patriarchal Clan Rule",
      def: "死人统治活人。一切必须遵循祖制，家族脸面/名分高于个人的生理存活。",
      defEn: "The dead rule the living. Obedience to 'Ancestor Law'; family 'Face' outweighs individual life.",
      core: "【换喻】牌位背后的凝视与无声的扼杀 (The gaze behind the ancestral tablets and the silent strangulation)",
      coreEn: "【Metonymy】The living are merely vessels to propagate the dead's honor.",
      logic: "【世代寄生法则】：M4（大他者）是一个不存在的“祖先幽灵”。主体（M1）只是家族名分的延续载体，主体的反常行为（M5）会被宗族执行者施加 M6（沉塘/家法）。",
      logicEn: "[Generational Parasitism]: M4 is the 'Ancestor Ghost'. M1 is merely a vessel for the Clan Title. M5 (Deviance) invites M6 (Lethal Clan Law/Drowning).",
      patch: {
        mechanics: "基础宗法协议 + [集体荣誉压迫 = 满级; 个体隐私权 = 负数]",
        mechanicsEn: "Base_CLAN + [Collective_Honor = MAX; Personal_Privacy = Negative]",
        aesthetic: "聚焦：阴森的祠堂、刻满名字的牌位、沉闷的家法棍、大宅门深处的哭泣。文本：长幼之序织成的窒息巨网。",
        aestheticEn: "Focus: Eerie ancestral halls + Wooden name tablets + Cries deep within the estate. Text: A suffocating net woven of seniority.",
        runtime: "IF (为了个体的爱情或私欲损害家族名誉) THEN (强制触发：族内密审剥夺身份，对外宣称病故)。",
        runtimeEn: "IF (Personal_Desire_Damages_Clan_Face) THEN (Force_Trigger: Secret clan trial, identity stripped, proclaimed dead to outsiders)."
      }
    },
    {
      id: "empire_colonial",
      name: "殖民帝国",
      nameEn: "Colonial Empire",
      def: "宗主国与殖民地。掠夺，同化，二等公民。文明与“野蛮”的二元压迫。",
      defEn: "Metropole over colony. Plunder, assimilation, second-class citizens. Civilized vs 'Savage' oppression.",
      core: "【换喻】伪善的启蒙与实质的吸血 (Hypocritical enlightenment veiling literal vampirism)",
      coreEn: "【Metonymy】The 'White Man's Burden' as a disguise for total resource and ontological theft.",
      logic: "【文明代偿剥削】：M4（中心帝国）通过强行定义何为“文明”，将殖民地主体判定为 M1（先天缺陷的次等人类），从而赋予对他们进行物理掠夺的合法性。",
      logicEn: "[Civilizational Gaslighting]: M4 defines 'Civilization', rendering colonial subjects as inherently defective M1s, thus legitimizing maximum physical plunder.",
      patch: {
        mechanics: "基础殖民协议 + [文化剥夺速率 = 快; 身份认同撕裂感 = 高]",
        mechanicsEn: "Base_COLONIAL + [Cultural_Deprivation_Rate = Fast; Identity_Schism = High]",
        aesthetic: "聚焦：总督府的下午茶 vs 烈日下的种植园劳工、蒸汽船的轰鸣、不同语言的粗暴混杂。文本：精致礼服下的食人逻辑。",
        aestheticEn: "Focus: Governor's tea vs Sun-baked plantation workers + Steamboats. Text: Cannibal logic beneath elegant formalwear.",
        runtime: "IF (原住民试图主张平等的法理权利) THEN (必然触发：“文明法则”以镇暴之名进行的合法屠杀)。",
        runtimeEn: "IF (Natives_Claim_Equal_Legal_Rights) THEN (Must_Trigger: 'Civilized Law' executing sanctioned massacres under the guise of riot control)."
      }
    },
    {
      id: "nomadic_tribe",
      name: "游牧部落",
      nameEn: "Nomadic Tribe",
      def: "逐水草而居。将移动视为生存法则，极度依赖自然，彪悍但脆弱。",
      defEn: "Chasing water and grass. Movement as survival; fierce reliance on nature, ruthless but fragile.",
      core: "【换喻】自然的无情刻度与迁徙的疲于奔命 (The merciless dial of nature and the relentless exhausting migration)",
      coreEn: "【Metonymy】Roots are death. The horizon is the only God.",
      logic: "【生态从属法则】：M4（大他者）从某种社会建构退位，直接变成了绝对无情的“自然气候”。主体的 M3（欲望）被压缩为纯粹的“迁徙/活到下一个春天”。",
      logicEn: "[Ecological Subordination]: M4 devolves into the absolute, merciless 'Natural Climate'. M3 is compressed strictly into 'Migrate and survive until spring'.",
      patch: {
        mechanics: "基础游牧协议 + [环境威胁度 = 极高; 资源流动性 = 1.0]",
        mechanicsEn: "Base_NOMAD + [Environmental_Threat = Very_High; Resource_Fluidity = 1.0]",
        aesthetic: "聚焦：寒风中的皮帐篷、疲惫的驼马队、围绕篝火的古老传说、大地尽头的风沙。文本：粗犷生存与对自然神力的敬畏。",
        aestheticEn: "Focus: Hide tents in frigid winds + Exhausted caravans + Campfire myths. Text: Rugged survival and dread of elemental nature.",
        runtime: "IF (选择在一个地方永久定居或贪恋旧物) THEN (触发：被自然灾变吞噬或被同族视为异端抛弃)。",
        runtimeEn: "IF (Choosing_Permanent_Settlement_or_Hoarding) THEN (Trigger: Swallowed by anomaly or abandoned as a heretic)."
      }
    },
    {
      id: "matriarchy",
      name: "母系氏族",
      nameEn: "Matriarchy",
      def: "女性长者掌权，血缘按母亲计算。大地女神崇拜，排斥父权制的暴力逻辑。",
      defEn: "Elder women rule, matrilineal descent. Earth Goddess worship, rejecting the kinetic logic of patriarchy.",
      core: "【换喻】生命轮回矩阵与温和的绝对权威 (The matrix of life-cycle and the gentle but absolute authority)",
      coreEn: "【Metonymy】Authority stemming from creation; a softer, yet equally inescapable net.",
      logic: "【生育垄断法则】：M4（大地之母法则）基于不可反驳的繁衍神圣性建立统治。任何诉诸于纯粹蛮力（M5偏向暴力属性）的个体将被温和但坚决地边缘化。",
      logicEn: "[Reproductive Monopoly Law]: M4 rules via the irrefutable sanctity of creation. Any subject resorting to sheer kinetic force (violent M5) is gently but firmly marginalized.",
      patch: {
        mechanics: "基础氏族协议 + [暴力解决问题倾向 = 低; 血脉网络压变力 = 高]",
        mechanicsEn: "Base_CLAN + [Violent_Resolution_Tendency = Low; Bloodline_Network_Power = High]",
        aesthetic: "聚焦：神秘的编织符号、女性长者的洞穴、公共育儿的篝火、没有高墙的奇异聚落。文本：母性的包容混杂着无法逃脱的粘稠感。",
        aestheticEn: "Focus: Woven mystic symbols + Elder's cave + Communal childcare fires. Text: Maternal inclusion mixed with inescapable viscousness.",
        runtime: "IF (雄性或特立独行者试图主导群体的战略方向) THEN (触发：非暴力的社会排斥导致其失去一切资源配给)。",
        runtimeEn: "IF (Male_or_Maverick_Attempts_to_Dominate_Strategy) THEN (Trigger: Non-violent but total social exile, losing all rations)."
      }
    },
    {
      id: "secret_society",
      name: "秘密结社",
      nameEn: "Secret Society / Brotherhood",
      def: "共济会、刺客大门或武林隐宗。只有圈内人懂的暗语，依靠极端仪式维持内部稳定。",
      defEn: "Freemasons, Assassins, hidden sects. Insiders only; extreme rituals to maintain hyper-stability.",
      core: "【换喻】门规的恐怖与被圈禁的安全感 (The terror of the code vs. the confined safety)",
      coreEn: "【Metonymy】The shadow state within the state; loyalty paid in blood.",
      logic: "【仪式性献祭法则】：由于处于地下隐匿状态，M4（学会/帮规）必须通过极其严厉且私刑化的 M6（清理门户）来验证主体的绝对忠诚，主体的 M1 彻底上交给组织。",
      logicEn: "[Ritual Sacrifice Law]: Existing in the shadows, M4 (The Code) demands excruciating, vigilante M6 (Cleansing) to verify loyalty. M1 is entirely surrendered to the Society.",
      patch: {
        mechanics: "基础帮阀协议 + [忠诚审查频率 = 日常化; 信息不对称 = 极高]",
        mechanicsEn: "Base_SECT + [Loyalty_Checks = Routine; Information_Asymmetry = Extreme]",
        aesthetic: "聚焦：暗号、面具、刺青、不见光的地下室审判、歃血为盟的酒碗。文本：黑话连篇与极其隐蔽的杀机。",
        aestheticEn: "Focus: Passwords + Masks/Tattoos + Blood-oath bowls in dark cellars. Text: Heavy cant/jargon loaded with hidden lethality.",
        runtime: "IF (对外泄露门派机密哪怕只是无意) THEN (强制触发：三刀六洞式的物理重创及全网追杀)。",
        runtimeEn: "IF (Leaking_Secrets_Even_Accidentally) THEN (Force_Trigger: Extreme physical mutilation and eternal manhunt)."
      }
    },
    {
      id: "island_community",
      name: "孤岛社群",
      nameEn: "Isolationist Cult / Island Community",
      def: "与世隔绝，保留着古老甚至畸形的异教习俗。极度排外，内部伦理异化。",
      defEn: "Cut off from the world, retaining ancient/deformed pagan customs. Hyper-xenofobic, mutated ethics.",
      core: "【换喻】腐败的死水与对“外围”的恐惧 (Corrupt stagnant water and the dread of the 'Outside')",
      coreEn: "【Metonymy】Evolution paused; where local psychosis becomes universal law.",
      logic: "【系统内卷崩坏】：M4（孤岛传统）在长期的封闭中由于缺乏外部校准，产生了自噬性的畸变。外来者作为不可测的 M2（真实降临）会引发社群排异反应的暴力高潮。",
      logicEn: "[Systemic Implosion]: M4 (Island Tradition), lacking external calibration, mutates into self-cannibalization. Outsiders arrive as M2 (The Real), triggering extreme violent immune responses.",
      patch: {
        mechanics: "基础孤岛协议 + [排外杀意指数 = 满级; 伦常扭曲度 = 严重]",
        mechanicsEn: "Base_ISLAND + [Xenophobic_Lethality = MAX; Ethical_Distortion = Severe]",
        aesthetic: "聚焦：阴沉迷雾的海滩、古怪的祭孔、村民统一死板的凝视、近亲繁殖的畸形特征。文本：粘稠潮湿的惊悚压迫感。",
        aestheticEn: "Focus: Foggy bleak beaches + Grotesque idols + Unison blank stares + Inbred anomalies. Text: Viscous, damp dread.",
        runtime: "IF (外来者试图用现代常识指认岛内的谎言) THEN (必然触发：借“神明”之旨的集体猎杀活祭)。",
        runtimeEn: "IF (Outsider_Points_Out_Island_Lies_With_Modern_Logic) THEN (Must_Trigger: Mass hunt and human sacrifice in the name of the 'Gods')."
      }
    },
    {
      id: "warrior_culture",
      name: "尚武/斯巴达文化",
      nameEn: "Warrior / Spartan Culture",
      def: "崇拜力量与荣誉。弱者被遗弃，全民皆兵，死亡是战士唯一的归宿。",
      defEn: "Worshipping strength and honor. The weak are discarded; everyone is a soldier. Death is the only true end.",
      core: "【换喻】肉体的熔炉与被美化的死亡 (The crucible of flesh and the beautification of demise)",
      coreEn: "【Metonymy】Pain is the only alphabet. A society that eats its own soft elements.",
      logic: "【生本能压抑法则】：M4（荣誉法典）强行颠倒了生物的求生本能。M5（行为）如果偏向逃跑或妥协，将被判定为比 M6 还要糟糕的“存在抹除”，因此主体必须主动奔向死神。",
      logicEn: "[Death Drive Override]: M4 (Code of Honor) reverses survival instincts. M5 (Flight/Compromise) is worse than M6 (Death), forcing M1 to actively sprint toward their own annihilation.",
      patch: {
        mechanics: "基础尚武协议 + [疼痛抗性 = 变态级; 同理心阈值 = 濒临失效]",
        mechanicsEn: "Base_WARRIOR + [Pain_Tolerance = Abnormal; Empathy_Threshold = Failing]",
        aesthetic: "聚焦：遍布全身的伤疤、红披风与盾形阵列、严酷的冰雪训练营、崇高的死者火葬。文本：血肉撞击钝器的钝痛感。",
        aestheticEn: "Focus: Scar-covered bodies + Shield walls + Brutal snow camps + Grand cremation pyres. Text: The dull thud of flesh on blunt weapons.",
        runtime: "IF (在战斗中表现出怯懦或为救弱者而破坏了荣誉对决) THEN (触发：被最高长官物理驱逐或赐死谢罪)。",
        runtimeEn: "IF (Showing_Cowardice_or_Breaking_Duel_To_Save_The_Weak) THEN (Trigger: Physical exile or forced ritual suicide)."
      }
    },
    {
      id: "court_intrigue",
      name: "宫廷权谋",
      nameEn: "Court Intrigue",
      def: "凡尔赛或紫禁城。空间极度狭小，权力高度浓缩。礼仪繁琐，杀人不见血。",
      defEn: "Versailles or the Forbidden City. Hyper-concentrated power in claustrophobic luxury. Elaborate etiquette masking bloodless murder.",
      core: "【换喻】华袍下的虱子与微笑背后的毒刃 (Lice beneath the silk robes; venom behind the fan)",
      coreEn: "【Metonymy】Every polite gesture is a calculated strike. Etiquette as a weapon of mass destruction.",
      logic: "【隐秩序绞除法则】：表面的 M4（繁文缛节）是伪装，真实的 M4 是残酷零和博弈的主子凝视。主体的 M5（攻击）绝不诉诸动能，而是通过情报构陷让大他者代为降下 M6。",
      logicEn: "[Hidden Order Strangling]: Surface M4 (Etiquette) masks the true M4 (Master's ruthless zero-sum Gaze). M5 (Attack) avoids kinetic force, using framed info so the Big Other executes M6.",
      patch: {
        mechanics: "基础权谋协议 + [暴力成本极高 = 暗算为主; 社交破防值 = 致命]",
        mechanicsEn: "Base_INTRIGUE + [Kinetic_Violence_Cost = Extreme; Social_Assassination = Lethal]",
        aesthetic: "聚焦：精美的折扇、屏风后闪烁的人影、御膳房的毒药、金丝鸟笼特写。文本：句句不带脏字的阴毒与猜忌。",
        aestheticEn: "Focus: Elegant fans + Silhouettes behind screens + Poisoned feasts + Golden birdcages. Text: Venomous logic without uttering a single curse word.",
        runtime: "IF (在公共场合发生失态或暴露真实情绪倾向) THEN (立刻触发：被敌对派系抓住把柄，面临满门抄斩的构陷)。",
        runtimeEn: "IF (Losing_Composure_or_Revealing_True_Emotion_Publicly) THEN (Immediate_Trigger: Enemy faction exploits it, leading to framing and clan extermination)."
      }
    },
    {
      id: "agrarian_commune",
      name: "农业公社",
      nameEn: "Agrarian Commune",
      def: "日出而作，日落而息。集体劳作共享收成，极度推崇平均主义与去私有化。",
      defEn: "Sunrise to work, sunset to rest. Collective labor, absolute agalitarianism, stripping of private property.",
      core: "【换喻】集体的熔炉与被铲平的个性凸起 (The collective melting pot that flattens any individualized bump)",
      coreEn: "【Metonymy】The tyranny of the average. Privacy is theft.",
      logic: "【集体均质化】：M4（公社意志）要求彻底抹除 M1（个体差异）。任何 M3（私人占有欲或浪漫爱情）都会被视作“资产阶级/外部的腐蚀破坏”，招致全村的批斗。",
      logicEn: "[Collective Homogenization]: M4 (Commune Will) demands the erasure of M1 (Individual differences). Any M3 (Private ownership/romance) is viewed as toxic external corruption, inciting public struggle sessions.",
      patch: {
        mechanics: "基础反私人协议 + [个体差异容忍度 = 0; 集体狂热系数 = 高]",
        mechanicsEn: "Base_COLLECTIVIST + [Tolerance_For_Difference = 0; Collective_Fervor = High]",
        aesthetic: "聚焦：金色的麦浪、大锅饭食堂、泥土味的破旧工装、整齐划一的大喇叭广播。文本：阳光下无处可逃的透明感与疲惫。",
        aestheticEn: "Focus: Golden wheat + Communal dining halls + Muddy overalls + Blaring megaphones. Text: The inescapable, exhausting transparency under the open sun.",
        runtime: "IF (被人发现保留了旧时代的私人信件或口粮) THEN (触发：深夜的举报与残酷的广场批斗)。",
        runtimeEn: "IF (Discovered_Hoarding_Private_Letters_or_Rations) THEN (Trigger: Midnight reporting followed by brutal public denunciation sessions)."
      }
    },
    {
      id: "vassal_state",
      name: "朝贡体系",
      nameEn: "Tributary Vassal State",
      def: "中心与边缘的松散联盟。万国来朝，通过仪式、朝拜和上供来换取安全保证。",
      defEn: "Loose alliance of Center and Periphery. Bowing, rituals, and tribute in exchange for protection from the Empire.",
      core: "【换喻】磕头的汇率与买来的虚假和平 (The exchange rate of kowtows and purchased fake peace)",
      coreEn: "【Metonymy】Dignity externalized as tribute. Peace built on submissive rituals.",
      logic: "【尊严结算机制】：M4（天朝/宗主国神威）是远程投射的巨型重力。藩属国的主体 M1 必须通过常态化的 M5（自辱/献祭当地资源）来维持其在当地的统治基础。",
      logicEn: "[Dignity Settlement]: M4 (Imperial Majesty) is a massive remote gravity well. The vassal M1 must constantly perform M5 (Self-humiliation/Tribute) to maintain their local rule.",
      patch: {
        mechanics: "基础朝贡协议 + [中心依赖度 = 强; 面子工程系数 = MAX]",
        mechanicsEn: "Base_TRIBUTE + [Center_Dependence = Strong; Hegemonic_Face-saving = MAX]",
        aesthetic: "聚焦：沉重的贡品车队、叩拜大殿的使者、边疆防线的烽火台、异域特产。文本：外表恭顺实则暗流涌动的国书与密报。",
        aestheticEn: "Focus: Heavy tribute caravans + Kowtowing envoys + Frontier beacon towers. Text: Ostensibly submissive diplomacy masking boiling undercurrents.",
        runtime: "IF (未能按时上缴指定的奇珍异兽哪怕是因为天灾) THEN (触发：宗主国降罪，引发内部将领为求自保的政变)。",
        runtimeEn: "IF (Failing_To_Deliver_Tribute_Even_Due_To_Disaster) THEN (Trigger: Imperial condemnation, prompting an internal coup by terrified generals)."
      }
    }
  ]
};
