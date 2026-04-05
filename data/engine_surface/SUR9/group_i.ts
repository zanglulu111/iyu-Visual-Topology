import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_I: LibraryCategoryDef = {
  id: "orig_nobility",
  name: "1. 权贵与血统 (Nobility & Bloodline)",
  nameEn: " Nobility & Bloodline",
  desc: "拥有古老的姓氏、土地和特权。背负家族的荣耀与诅咒。",
  descEn: "Possessing ancient surnames, lands, and privileges. Bearing the glory and curse of bloodlines.",
  items: [
    {
      id: "monarch_heir",
      name: "王储/皇族", nameEn: "The Heir",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "皇位或最高权柄的第一继承人，肉身即是国家的象征界实体。",
      defEn: "First in line to the throne; the physical body is the Symbolic entity of the state.",
      core: "我的存在是王冠的眼神，而非我本身。 | 代偿 ($): 个人意志 (Personal Will)",
      coreEn: "My existence is an extension of the crown, not myself. | Compensation ($): Personal Will",
      logic: "【象征界之茧】：主体性（M1）早在出生前就被机器剥夺。任何反抗大他者国家机器（M4）的冲动都会立即转译为国本动摇的政治/物理危机。",
      logicEn: "[Cocoon of the Symbolic]: Subjectivity (M1) is stripped before birth. Rebellions against the Other (M4) translate to political/physical crises.",
      patch: {
        mechanics: "高维换喻 + [阶层阻力 = 极高; 遭遇代价 = 以天下为注]",
        mechanicsEn: "High-D_Metonymy + [Class_Resistance = Max; Encounter_Cost = Stakes_of_Realm]",
        aesthetic: "聚焦：权杖的重量 + 华丽的牢笼。文本：充斥着祭祀感与深宫重压的修辞。",
        aestheticEn: "Focus: Weight_of_Scepters + Ornate_Cages. Text: Ritualistic_and_State_Pressure_Rhetoric.",
        runtime: "IF (追求个人情爱或偏离礼法) THEN (触发：强制性的暗杀、软禁或全域抹杀)。严禁普通平民的轻微烦恼。",
        runtimeEn: "IF (Pursue_Personal_Love_OR_Deviate_From_Protocol) THEN (Trigger: Assassination, House_Arrest_or_Purge). FORBID_Ordinary_Troubles."
      }
    },
    {
      id: "fallen_aristocrat",
      name: "没落贵族", nameEn: "Fallen Aristocrat",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "失去封地与财富，仅靠旧日荣耀的幻象（能指）维系尊严的畸灵。",
      defEn: "Lost lands and wealth, maintaining dignity only through the phantom signifiers of past glory.",
      core: "为了擦亮银器，我卖掉了灵魂。 | 代偿 ($): 现实财富 (Material Wealth)",
      coreEn: "I sold my soul just to polish the silverware. | Compensation ($): Material Wealth",
      logic: "【虚妄凝视】：其欲望锚点（M3）永远定格在过去的辉煌。社会秩序（SUR4）通过物理上的贫穷不断击碎其精神的傲慢，形成惨烈的存在论错位。",
      logicEn: "[Delusional Gaze]: Desire (M3) frozen in past glory. Social order (SUR4) shatters their arrogance via physical poverty, causing severe ontological dislocation.",
      patch: {
        mechanics: "阶层下坠协议 + [虚荣乘数 = 极大; 适应力 = 负值]",
        mechanicsEn: "Class_Descent_Protocol + [Vanity_Multiplier = Max; Adaptability = Negative]",
        aesthetic: "聚焦：剥落的家纹壁画 + 发黄的蕾丝。文本：带有酸腐气息的华丽悲歌。",
        aestheticEn: "Focus: Peeling_Crests + Yellowed_Lace. Text: Sour_yet_Ornate_Elegy.",
        runtime: "IF (面对阶级滑落的实质确认) THEN (强制进入：歇斯底里的自我欺骗或自毁行为)。",
        runtimeEn: "IF (Confronted_with_Class_Drop) THEN (Force: Hysterical_Self-Deception_or_Self-Destruction)."
      }
    },
    {
      id: "feudal_lord",
      name: "封建领主", nameEn: "Feudal Lord",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "拥有土地、私兵和对治下臣民生杀大权的一方霸主。",
      defEn: "A regional overlord possessing land, private armies, and the power of life and death over subjects.",
      core: "这片土地上流淌的每一滴血均属于我。 | 代偿 ($): 边界感 (Sense of Boundary)",
      coreEn: "Every drop of blood on this land belongs to me. | Compensation ($): Sense of Boundary",
      logic: "【主权代入】：主体的自我认知无限膨胀至其领土边界。其面临的所有外部冲突（M2）均转译为对“绝对控制权”的边界侵蚀。",
      logicEn: "[Sovereign Projection]: The self inflates to the territory's borders. External conflicts (M2) translate to boundary erosion of 'absolute control'.",
      patch: {
        mechanics: "主权占有协议 + [领地绑定系数 = 1.0; 道德脱敏 = 极度]",
        mechanicsEn: "Sovereign_Ownership_Protocol + [Territory_Binding_Factor = 1.0; Moral_Desensitization = Extreme]",
        aesthetic: "聚焦：高墙深塔 + 猎犬长嚎。文本：绝对的命令句式与资源碾压感。",
        aestheticEn: "Focus: High_Walls + Howling_Hounds. Text: Absolute_Imperatives_and_Resource_Crushing.",
        runtime: "IF (领地或权威受挑衅) THEN (触发：完全不成比例的残酷物理清除行动)。",
        runtimeEn: "IF (Territory_or_Authority_Challenged) THEN (Trigger: Disproportionate_Cruel_Physical_Purge)."
      }
    },
    {
      id: "courtier",
      name: "宫廷权臣", nameEn: "Courtier",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "寄生于皇权阴影之下，依靠信息的操控与利益的编绕掌握实权的巨头。",
      defEn: "A magnate parasitizing the shadow of royal power, holding real authority via information manipulation.",
      core: "真理只存在于陛下耳边的低语之中。 | 代偿 ($): 直接暴力 (Direct Violence)",
      coreEn: "Truth exists only in the whispers by His Majesty's ear. | Compensation ($): Direct Violence",
      logic: "【能指寄生】：主体无法进行直接物理输出，必须通过操纵大他者（M4）的话语权杀人。在微小的宫廷仪程中掀起腥风血雨。",
      logicEn: "[Signifier Parasitism]: The subject cannot exert direct physical output; must kill by manipulating the Other's (M4) discourse within minute court protocols.",
      patch: {
        mechanics: "隐性操控协议 + [信息不对称性 = 最高; 正面防御 = 极弱]",
        mechanicsEn: "Latent_Manipulation_Protocol + [Information_Asymmetry = Max; Frontal_Defense = Minimal]",
        aesthetic: "聚焦：重重帷幔 + 折扇背后的阴冷微笑。文本：满是暗示、隐喻与双关语的致命对话。",
        aestheticEn: "Focus: Heavy_Curtains + Cold_Smiles_Behind_Fans. Text: Deadly_Dialogue_Filled_with_Innuendo.",
        runtime: "IF (其控制的谎言被彻底揭穿) THEN (失去大他者的保护，瞬间从权力巅峰跌落至死地)。",
        runtimeEn: "IF (Lies_Are_Fully_Exposed) THEN (Lose_Other's_Protection; Instantly_Fall_from_Zenith_to_Death)."
      }
    },
    {
      id: "old_money",
      name: "老钱家族", nameEn: "Old Money",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "经历数代沉淀的资本权贵，用隐秘的常春藤网络和品味隔绝新贵。",
      defEn: "Capital elite settled over generations, insulating themselves from nouveau riche via hidden networks and taste.",
      core: "我们不谈钱，我们只谈血统的纯净与礼节。 | 代偿 ($): 温度 (Warmth)",
      coreEn: "We don't talk about money; we talk of pure bloodlines and etiquette. | Compensation ($): Warmth",
      logic: "【晶体化绝缘】：通过看不见的社交礼仪构筑最高阶的物理/社会壁垒。外部冲击（M2）常因其庞大的隐性人脉被消减为“不体面的流言”。",
      logicEn: "[Crystallized Insulation]: Constructs maximal barriers via invisible etiquette. External shocks (M2) are reduced to 'indecent rumors' by their vast hidden network.",
      patch: {
        mechanics: "阶层壁垒协议 + [封闭性 = 极高; 表情控制力 = 绝对]",
        mechanicsEn: "Class_Barrier_Protocol + [Exclusivity = Max; Expression_Control = Absolute]",
        aesthetic: "聚焦：定制粗花呢 + 没有标识的古董车。文本：冷漠的端庄，隐藏在礼貌下的傲慢。",
        aestheticEn: "Focus: Bespoke_Tweed + Unmarked_Antique_Cars. Text: Cold_Prudency_and_Polite_Arrogance.",
        runtime: "IF (遭遇家族网络外的野蛮暴力介入) THEN (触发：原有阶级规则失效的结构性恐慌)。",
        runtimeEn: "IF (Encounter_Savage_Violence_Outside_Network) THEN (Trigger: Structural_Panic_as_Rules_Fail)."
      }
    },
    {
      id: "bastard",
      name: "私生子", nameEn: "The Bastard",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "携带高贵血统却被正统秩序拒之门外的边缘存在。",
      defEn: "Possessing noble blood but locked out of the orthodox order; a marginal existence.",
      core: "我血管里的血与他一样红，但我只能坐在阴影里。 | 代偿 ($): 承认 (Recognition)",
      coreEn: "The blood in my veins is as red as his, but I can only sit in the shadows. | Lack ($): Recognition",
      logic: "【缺省的承认】：主体的所有叙事动力（M5）都围绕着“打破血统隔离以获得家族/大他者的承认”。其身份处于合法与非法的永久断层线上。",
      logicEn: "[Default Non-Recognition]: All narrative drive (M5) revolves around breaking bloodline segregation to gain the Other's recognition. Identity lies on the fault line of legality.",
      patch: {
        mechanics: "边缘剥夺协议 + [野心系数 = 极高; 归属感 = 持续性失缺]",
        mechanicsEn: "Marginal_Deprivation_Protocol + [Ambition_Index = Max; Sense_of_Belonging = Chronic_Lack]",
        aesthetic: "聚焦：藏在泥泞中的信物 + 被推倒的私生子印记。文本：压抑的嫉妒与底层挣扎的粗糙感。",
        aestheticEn: "Focus: Token_in_the_Mud + Toppled_Bastard_Marks. Text: Suppressed_Jealousy_and_Rough_Struggle.",
        runtime: "IF (面临被正统接纳的虚假希望) THEN (必须经历一次屈辱的抛弃，引发更彻底的黑化或觉醒)。",
        runtimeEn: "IF (Face_False_Hope_of_Acceptance) THEN (MUST_Suffer_Humiliating_Abandonment, Triggering_Awakening_or_Darkening)."
      }
    },
    {
      id: "religious_leader",
      name: "圣职世家", nameEn: "Religious Scion",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "诞生在教廷或神圣秩序顶端，被期许为神在地上的纯洁代号。",
      defEn: "Born at the apex of the theocracy, expected to act as the pure vessel for God on Earth.",
      core: "我是经文的载体，神不允许我拥有肉身。 | 代偿 ($): 世俗情欲 (Secular Desires)",
      coreEn: "I am a vessel for scriptures; God forbids me flesh. | Compensation ($): Secular Desires",
      logic: "【超验压盖】：被庞大的神权意识形态（SUR4）完全缝合。其欲望（M3）一旦产生，就是对存在本身的渎神（M6），导致灵魂的极度撕裂。",
      logicEn: "[Transcendental Override]: Fully sutured by the ideological heavy-weight of Theocracy (SUR4). Any emerging desire (M3) is inherent blasphemy (M6), ripping the soul apart.",
      patch: {
        mechanics: "禁欲抹杀协议 + [神性伪装 = 完美; 内部撕裂度 = 临界点]",
        mechanicsEn: "Ascetic_Erasure_Protocol + [Divine_Camouflage = Perfect; Internal_Tear = Critical]",
        aesthetic: "聚焦：令人窒息的熏香 + 冷酷切割的圣坛光斑。文本：交织着神圣诗篇与肉体颤抖的矛盾语境。",
        aestheticEn: "Focus: Suffocating_Incense + Cold_Altar_Light. Text: Contradictory_Context_of_Holy_Psalms_and_Quivering_Flesh.",
        runtime: "IF (出现世俗诱惑的锚点) THEN (触发：在戒律与堕落之间的残酷自我净体或彻底疯魔)。",
        runtimeEn: "IF (Secular_Temptation_Appears) THEN (Trigger: Cruel_Self-Purification_or_Total_Madness_Between_Precept_and_Fall)."
      }
    },
    {
      id: "warlord_clan",
      name: "军阀后代", nameEn: "Warlord Clan",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "在战火、铁腕与火药统治下崛起的暴戾家族继承者。",
      defEn: "Heir to a brutal family risen through war, iron fists, and gunpowder.",
      core: "真理只在射程之内。我不开枪，我就不存在。 | 代偿 ($): 脆弱 (Vulnerability)",
      coreEn: "Truth exists only within range. If I don't shoot, I don't exist. | Compensation ($): Vulnerability",
      logic: "【暴力重力】：文明的礼法在其阶级认知中失效。主体的驱动力（M5）必须具有高度的破坏性，大他者（M4）体现为“永不磨顶的丛林法则压迫”。",
      logicEn: "[Gravity of Violence]: Civil protocols fail in their class cognition. Drives (M5) must be highly destructive; the Other (M4) is the 'eternal oppression of the jungle law'.",
      patch: {
        mechanics: "火药血系协议 + [暴力阈值 = 极高; 信任系数 = 极低]",
        mechanicsEn: "Gunpowder_Bloodline_Protocol + [Violence_Threshold = Max; Trust_Factor = Minimum]",
        aesthetic: "聚焦：刺鼻的硝烟 + 泛光的军靴。文本：粗粝、强硬、不容置疑的枪械质感修辞。",
        aestheticEn: "Focus: Pungent_Smoke + Gleaming_Military_Boots. Text: Gritty_Hardline_Firearm_Rhetoric.",
        runtime: "IF (面临情感暴露或脆弱时刻) THEN (强制用极端的暴力将这种软弱掩盖/毁灭)。",
        runtimeEn: "IF (Face_Emotional_Exposure) THEN (Force: Extreme_Violence_to_Cover_or_Destroy_Weakness)."
      }
    },
    {
      id: "political_dynasty",
      name: "政治门阀", nameEn: "Political Dynasty",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "世代操控政局、如精密齿轮般将家族声望与公共权力绑定的一环。",
      defEn: "Generations manipulating politics, binding family prestige with public power like precision gears.",
      core: "我们的一举一动都是教科书上的编年史。没有私我，只有选票。 | 代偿 ($): 真实面孔 (True Face)",
      coreEn: "Our every move constitutes the chronicles. No private self, only votes. | Lack ($): True Face",
      logic: "【符号性锁死】：主体的所有遭遇（M2）与人际关系均被无情转译为政治博弈的砝码。表面必须与“公众凝视”保持（M1的结构性异化）完美咬合。",
      logicEn: "[Symbolic Lock]: Encounters (M2) and relationships mercilessly translated into political leverage. The surface must perfectly mesh with 'public gaze' (M1 alienation).",
      patch: {
        mechanics: "宏观操纵协议 + [伪装完整度 = 100%; 私人空间 = 0]",
        mechanicsEn: "Macro_Manipulation_Protocol + [Camouflage_Integrity = 100%; Private_Space = 0]",
        aesthetic: "聚焦：完美的镁光灯虚假闪耀 + 黑房中的烟草交易。文本：圆滑、伪善但无懈可击的外交辞令。",
        aestheticEn: "Focus: Perfect_Fake_Flashes + Cigar_Deals_in_Dark_Rooms. Text: Slick_Hypocritical_Impeccable_Diplomatese.",
        runtime: "IF (爆出可能动摇家族基盘的私人丑闻) THEN (触发：物理层面的残酷切割或代罪羊弃绝)。",
        runtimeEn: "IF (Scandal_Threatens_Foundation) THEN (Trigger: Cruel_Physical_Segregation_or_Scapegoat_Abandonment)."
      }
    },
    {
      id: "vampire_elder",
      name: "吸血鬼/永生长老", nameEn: "Vampire Elder",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "跨越数个世纪，积累了庞大财富但灵魂已彻底停滞的永生血族统治者。",
      defEn: "Immortal ruler crossing centuries, amassing vast wealth but with a totally halted soul.",
      core: "永生不过是一场没有出口的无聊漫步。 | 代偿 ($): 终点/死亡 (An End/Death)",
      coreEn: "Immortality is merely a tedious stroll with no exit. | Lack ($): An End/Death",
      logic: "【时间坏死】：大他者的纪元更迭对其无效，其最大的冲突（M2）在于绝对的虚无与时间过载。只能通过病态的猎食欲求（M3）制造生存实感。",
      logicEn: "[Temporal Necrosis]: Eras of the Other hold no sway. Main conflict (M2) is absolute nihilism and time-overload. Only morbid predatory loops (M3) simulate the feeling of living.",
      patch: {
        mechanics: "永生深渊协议 + [痛觉感度 = 钝化; 嗜血驱动 = 周期性极高]",
        mechanicsEn: "Abyss_of_Immortality_Protocol + [Pain_Sensitivity = Dulled; Bloodlust_Drive = Periodically_High]",
        aesthetic: "聚焦：凝固的血迹与天鹅绒 + 毫无温度的叹息。文本：极度缓慢、厌倦且华丽的古典哥特长句。",
        aestheticEn: "Focus: Coagulated_Blood_on_Velvet + Cold_Sighs. Text: Extremely_Slow_Ennui-driven_Gothic_Phrases.",
        runtime: "IF (面对转瞬即逝的凡人真挚生命力) THEN (必定触发：残忍的摧毁欲与极致的病态迷恋的双轨拉扯)。",
        runtimeEn: "IF (Face_Fleeting_Mortal_Vitality) THEN (Trigger: Dual_Pull_of_Cruel_Destruction_and_Morbid_Infatuation)."
      }
    },
    {
      id: "exiled_royal",
      name: "流亡皇室", nameEn: "Exiled Royal",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "国家已亡，王座倾覆，带着仅存的象征印记在异国他乡流浪的前朝正统。",
      defEn: "The nation has fallen; wandering foreign lands holding only the symbolic seals of a defunct orthodox dynasty.",
      core: "我随身携带的行李箱里装着一个死掉的帝国。 | 代偿 ($): 实效主权 (Effective Sovereignty)",
      coreEn: "My suitcase holds a dead empire. | Lack ($): Effective Sovereignty",
      logic: "【悬空的能指】：拥有权力的所有象征物（印章、头衔），但全盘丧失物理约束力（SUR4剥夺）。其行动轨迹被疯狂的“复国执念”（M5）扭曲。",
      logicEn: "[Suspended Signifier]: Possesses all symbols of power (seals, titles) but completely stripped of physical enforcement (SUR4 deprived). Actions distorted by frantic 'restoration obsession' (M5).",
      patch: {
        mechanics: "幽灵王权协议 + [物理权威 = 0; 符号狂热度 = 过载]",
        mechanicsEn: "Phantom_Crown_Protocol + [Physical_Authority = 0; Symbolic_Zealotry = Overload]",
        aesthetic: "聚焦：发抖的手握紧的旧玉玺 + 褪色的华服。文本：荒诞的庄重与现实狼狈的强烈对比。",
        aestheticEn: "Focus: Trembling_Hand_on_Old_Seals + Faded_Regalia. Text: Absurd_Dignity_Contrasted_Sharply_with_Realistic_Misery.",
        runtime: "IF (被人用真实的世俗金钱随意践踏其皇家尊严) THEN (触发：极度的认知失调或爆发致命冷血杀机)。",
        runtimeEn: "IF (Royal_Dignity_Trampled_by_Mundane_Wealth) THEN (Trigger: Extreme_Cognitive_Dissonance_or_Fatal_Cold_Bloodedness)."
      }
    },
    {
      id: "secret_heir",
      name: "秘密继承人", nameEn: "Secret Heir",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "在底层长大，不知道自己真实身世，却随时可能引爆顶层权力洗牌的定时炸弹。",
      defEn: "Raised at the bottom, unaware of their true lineage; a ticking time bomb meant to trigger a reshuffle at the apex of power.",
      core: "我以为我是一根野草，直到他们拿着王座来杀我。 | 缺失 ($): 安全的过往 (Secure Past)",
      coreEn: "I thought I was a weed, until they came with a throne to kill me. | Lack ($): Secure Past",
      logic: "【迟到的重力】：前期在下层秩序中流转，一旦血统密码（M2遭遇）解锁，立刻被卷入最残酷的高阶层暴力漩涡，被迫承受非人的重力打击。",
      logicEn: "[Delayed Gravity]: Circulates in the lower order initially. Once the bloodline code (M2 encounter) unlocks, instantly sucked into the cruelest upper-class violent vortex.",
      patch: {
        mechanics: "延迟炸弹协议 + [身份认知错位 = 极强; 外部威胁烈度 = 急剧飙升]",
        mechanicsEn: "Delayed_Bomb_Protocol + [Identity_Misalignment = Severe; External_Threat_Intensity = Sharp_Spike]",
        aesthetic: "聚焦：平凡的双手 + 突如其来的巨额账户/顶级杀手。文本：从泥土般的日常猛然切入冰冷的集权修辞。",
        aestheticEn: "Focus: Ordinary_Hands + Sudden_Wealth/Elite_Killers. Text: Abrupt_Cut_from_Earthy_Daily_to_Cold_Totalitarian_Rhetoric.",
        runtime: "IF (身世信物在公众前暴露) THEN (强制终止平静生活，不可逆地进入猎杀与反抗进程)。",
        runtimeEn: "IF (Token_Exposed_in_Public) THEN (Force_Terminate_Peaceful_Life; Irreversibly_Enter_Hunted/Rebel_Process)."
      }
    },
    {
      id: "tribal_chief",
      name: "部落酋长", nameEn: "Tribal Chief",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "古老、原始或神秘部落的最高掌舵者，其权威源于神话与自然的契约。",
      defEn: "The supreme helmsman of an ancient or mystical tribe, whose authority stems from covenants with myth and nature.",
      core: "祖先的眼睛在林间看着我们，而你们的钢铁正铲断树根。 | 代偿 ($): 抵抗文明的实体力量 (Physical Force Over Modernity)",
      coreEn: "The ancestors' eyes watch us from the woods, while your steel severs the roots. | Compensation ($): Physical Force Over Modernity",
      logic: "【前现代抵抗】：绝对的自然/图腾大他者与现代技术秩序（外来SUR4）产生冲撞。其存在本身就是一块无法被工业文明消化的异物。",
      logicEn: "[Pre-modern Resistance]: Absolute Nature/Totem Other clashes with modern techno-order (foreign SUR4). Existence itself is a foreign body undigested by industrial civilization.",
      patch: {
        mechanics: "图腾屏障协议 + [文明相容性 = 最低; 信念装甲 = 不可动摇]",
        mechanicsEn: "Totem_Barrier_Protocol + [Civilization_Compatibility = Lowest; Belief_Armor = Unshakeable]",
        aesthetic: "聚焦：猛兽骨骸 + 纹身在机械/现代建筑前的渺小。文本：万物生灵的古老咏叹混杂着被推土机碾压的悲壮。",
        aestheticEn: "Focus: Beast_Bones_and_Tattoos_Before_Machines. Text: Ancient_Arias_of_Animism_Crushed_by_Bulldozers.",
        runtime: "IF (现代文明突破了最后的神圣禁地) THEN (触发：完全抛弃生命的图腾献祭式反击（M6）)。",
        runtimeEn: "IF (Modern_Civilization_Breaches_Last_Sacred_Ground) THEN (Trigger: Suicidal_Totem_Sacrificial_Counterattack_(M6))."
      }
    },
    {
      id: "oligarch_scion",
      name: "寡头之子", nameEn: "Oligarch Scion",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "垄断能源、军工或核心科技的独裁型资本帝国直接继承者。",
      defEn: "Direct heir to a dictatorial capital empire monopolizing energy, arms, or core tech.",
      core: "法律是可以购买的条款，而我是连印钞机都能买下的人。 | 代偿 ($): 真实的边界 (Real Boundaries)",
      coreEn: "Laws are purchasable clauses; I can buy the printing press itself. | Compensation ($): Real Boundaries",
      logic: "【全能的枯竭】：在极度充盈的物质和免罪特权中成长，导致底层欲望（M3）严重过载宕机。为了寻求哪怕一次真实的刺痛，必然走向极端的变态或僭越。",
      logicEn: "[Exhaustion of Omnipotence]: Growing up in extreme abundance and impunity overloads the base desire (M3). Seeking even a single real sting inevitably leads to extreme perversion or transgression.",
      patch: {
        mechanics: "绝对免疫协议 + [物理界限缺失 = Max; 欲望畸变度 = 极度放大]",
        mechanicsEn: "Absolute_Immunity_Protocol + [Absence_of_Physical_Bounds = Max; Desire_Distortion = Amplified]",
        aesthetic: "聚焦：空洞的豪华景观 + 防弹玻璃后的冷眼。文本：用数字衡量一切生灵的数据化狂妄。",
        aestheticEn: "Focus: Empty_Luxury_Landscapes + Cold_Eyes_Behind_Bulletproof_Glass. Text: Data-driven_Arrogance_Measuring_Lives_in_Digits.",
        runtime: "IF (遭遇用金钱和权力绝对无法买通的【超凡存在】) THEN (引发系统级别的崩溃与疯狂围猎)。",
        runtimeEn: "IF (Encounter_an_[Extraordinary_Entity]_Unpurchasable_by_Power) THEN (Trigger: System-level_Collapse_and_Mad_Hunt)."
      }
    },
    {
      id: "cult_messiah",
      name: "邪教弥赛亚", nameEn: "Cult Messiah",
      group: "A. 权贵与血统", groupEn: "Nobility & Bloodline",
      def: "自出生便被狂热信徒视为神圣降临的容器，没有个人自由，只有符号价值的圣婴。",
      defEn: "Viewed since birth by fanatics as the sacred vessel of descent; having no personal freedom, only the symbolic value of a holy infant.",
      core: "我的每一次呼吸都是他们的启示，但我不过是只没有名字的鸟。 | 缺失 ($): 人性/凡胎 (Humanity/Mortal Flesh)",
      coreEn: "My every breath is their revelation, but I am just a nameless bird. | Lack ($): Humanity/Mortal Flesh",
      logic: "【完美的空洞】：被信徒的“绝对信仰”（极端化大他者）彻底包裹，被剥夺吃喝拉撒的庸俗权利。是系统中纯粹被观赏和祭拜的“神圣之物（Das Ding）”。",
      logicEn: "[Perfect Void]: Thoroughly enveloped by believers' 'Absolute Faith' (Extremized Other), stripped of vulgar rights. The pure 'Das Ding' to be observed and worshipped.",
      patch: {
        mechanics: "神龛监禁协议 + [自由意志 = 0; 被凝视压力 = 引力崩塌级]",
        mechanicsEn: "Shrine_Imprisonment_Protocol + [Free_Will = 0; Gaze_Pressure = Gravitational_Collapse_Level]",
        aesthetic: "聚焦：无暇的白纱 + 堆积如山的狂热信件/尸体。文本：极其纯洁神圣却透出无尽血腥与压迫的句法。",
        aestheticEn: "Focus: Flawless_White_Veils + Mountains_of_Fanatic_Letters/Corpses. Text: Extremely_Pure_Syntax_Oozing_Blood_and_Oppression.",
        runtime: "IF (沾染了凡人的污秽或动了凡心) THEN (信徒的大他者幻象破灭，瞬间从神灵被贬为必须烧死的亵渎魔鬼)。",
        runtimeEn: "IF (Stained_with_Mortal_Filth_or_Desires) THEN (Illusion_Shatters; Instantly_Demoted_to_a_Demon_to_be_Burned)."
      }
    }
  ]
};
