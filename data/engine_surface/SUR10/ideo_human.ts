import { LibraryCategoryDef } from '../../../types';

export const IDEO_HUMAN: LibraryCategoryDef = {
    id: "ideo_human",
    name: "6. 人本与超越 (Humanism & Spirit)",
    nameEn: "6. Humanism & Spirit",
    desc: "关于爱、自然、存在与灵魂的信仰。",
    descEn: "Beliefs about love, nature, existence, and the soul.",
    items: [
      {
        id: "radical_humanism",
        name: "激进人本", nameEn: "Radical Humanism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "人的价值高于一切形式的系统。极度警惕神、国家或市场对作为目的之人的异化。",
        defEn: "Human value transcends all forms of systems. Extremely vigilant against alienation of humans as ends by God, State, or Market.",
        core: "在非人的庞大机器与体制中，用血肉之躯捍卫人作为最高目的的尊严。",
        coreEn: "Defending the dignity of human as the supreme end using flesh and blood within non-human colossal machines and systems.",
        logic: "主体拒绝将自身 M0（存在）挂载于任何 M4（大他者系统）之上。剥离所有将人视作工具或耗材的算法。M5（行动）的唯一方向就是摧毁剥削，夺回 M1（作为人）的真实性，尽管这通常意味着以血肉碰撞钢铁（M2）。",
        logicEn: "Subject refuses to mount M0 (existence) onto any M4 (Big Other system). Stripping algorithms that treat humans as tools/consumables. M5's (action) sole vector is destroying exploitation and reclaiming M1 (human) authenticity, though this often means flesh colliding with steel (M2).",
        patch: {
          mechanics: "基础设定协议 + [异化抗性 = 绝对免疫; 系统忠诚度 = 负值; 同理心共振 = 极化开启]",
          mechanicsEn: "Base_Setting_Protocol + [Alienation_Resistance = Absolute_Immunity; System_Loyalty = Negative; Empathy_Resonance = Polarized_On]",
          aesthetic: "聚焦：达芬奇的维特鲁威人、手牵手的人墙、流下热泪的清澈双眼、赤裸对抗枪炮的身体。文本：温暖、充满激情与不屈，高频使用‘尊严’与‘觉醒’。",
          aestheticEn: "Focus: Da Vinci's Vitruvian Man, hand-in-hand human chains, clear eyes shedding hot tears, naked bodies defying guns. Text: Warm, passionate, unyielding, frequent 'dignity' and 'awakening'.",
          runtime: "IF (目睹个体被系统物化、当做数字抹除) THEN (触发：不惜牺牲一切发起物理层面的全面暴动)。",
          runtimeEn: "IF (Witnessing_individual_objectified_and_erased_as_number_by_system) THEN (Trigger: Launch_full_physical_riot_sacrificing_all)."
        }
      },
      {
        id: "deep_ecology",
        name: "深层生态", nameEn: "Deep Ecology",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "万物平等且皆有灵。人类不是宇宙中心，只是生态网的节点，必须像保护眼球一样保护自然。",
        defEn: "All things are equal and animistic. Humans are not the center but nodes in the eco-web, must protect nature like protecting own eyes.",
        core: "极其原始的神圣感。为了保护一棵古树或某种生物，可以毫不犹豫地拔除人类的工业城。",
        coreEn: "Extremely primal sacredness. Will unhesitatingly uproot human industrial cities to protect an ancient tree or creature.",
        logic: "大他者（M4）不再是人类社会法则，而是‘盖亚/自然母体’。人类本位被视为一种病态 M3。为了修补自然被破坏的创口（M2），主体甘愿执行 M6（抹杀同类或退化自我），以此重返自然的子宫（无缺失的 M0）。",
        logicEn: "The Big Other (M4) is no longer human social law but 'Gaia/Mother Nature'. Anthropocentrism is viewed as a pathological M3. To mend nature's wound (M2), subject willingly executes M6 (erasing kin or devolving self) to return to nature's womb (lackless M0).",
        patch: {
          mechanics: "基础设定协议 + [跨物种情感链接 = 无缝; 工业建筑厌恶 = MAX; 盖亚指令优先级 = 绝对覆盖]",
          mechanicsEn: "Base_Setting_Protocol + [Cross-Species_Emotional_Link = Seamless; Industrial_Structure_Aversion = MAX; Gaia_Directive_Priority = Absolute_Override]",
          aesthetic: "聚焦：遮天蔽日的古树、发光的地下菌丝、人与巨兽的低语、重新被藤蔓吞噬的废墟。文本：充满泥土气、呼吸感与低频的宁静，视现代文明为‘癌细胞’。",
          aestheticEn: "Focus: Sky-blocking ancient trees, glowing underground mycelium, whispers between human and behemoth, ruins swallowed by vines. Text: Earthy, breathing, low-frequency tranquility, viewing modern civilization as 'cancer cells'.",
          runtime: "IF (自然母体遭受不可逆的工业切除或污染) THEN (触发：化为大自然的白细胞，对工业人类执行无差别的清洗)。",
          runtimeEn: "IF (Mother_Nature_suffers_irreversible_industrial_excision_or_pollution) THEN (Trigger: Become_nature's_white_blood_cells_executing_indiscriminate_cleansing_on_industrial_humans)."
        }
      },
      {
        id: "existentialism",
        name: "存在主义", nameEn: "Existentialism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "存在先于本质。世界本无意义，人被抛掷于此，必须在可怕的自由中通过行动自我选择。",
        defEn: "Existence precedes essence. The world has no meaning; human is thrown here, forced to self-choose via action within terrifying freedom.",
        core: "自由的眩晕与选择的深渊。拒绝任何给定的剧本，在极致的焦虑中独自扛起意义。",
        coreEn: "The dizziness of freedom and the abyss of choice. Rejecting any given script, solely shouldering meaning in extreme anxiety.",
        logic: "主体彻底确认识认大他者（M4）的不存在或死亡。这意味着不存在任何先验的标准来填补 M1（存在之虚无）。因此，每一次 M5（选择/行动）都是一种无依无靠的悬崖跳跃，必须自己承担全部实在界后果（M2）。",
        logicEn: "Subject completely recognizes the non-existence or death of the Big Other (M4). Meaning no a priori standard exists to fill M1 (existential nothingness). Hence, every M5 (choice/action) is an unsupported cliff jump, bearing all Real consequences (M2) oneself.",
        patch: {
          mechanics: "基础设定协议 + [系统默认指引 = 静音; 自由意志算力 = 过载运行; 意义生成器 = 手动强夯]",
          mechanicsEn: "Base_Setting_Protocol + [System_Default_Guidance = Muted; Free_Will_Compute = Overload; Meaning_Generator = Manual_Ramming]",
          aesthetic: "聚焦：起雾的十字路口、凝视深渊的孤独行者、燃烧殆尽的粗雪茄、镜子里的冷眼。文本：荒诞感、冰冷、干练，拒绝一切过度抒情的词汇。",
          aestheticEn: "Focus: Foggy crossroads, lonely walker staring into abyss, burnt-out coarse cigar, cold eye in mirror. Text: Absurdist, cold, concise, rejecting all overly lyrical vocabulary.",
          runtime: "IF (被权威或命运强制要求扮演某个既定角色) THEN (操作：宁可玉碎也要执行一次绝对荒谬但也绝对自由的反判定)。",
          runtimeEn: "IF (Forced_by_authority_or_fate_to_play_a_predetermined_role) THEN (Action: Rather_shatter_than_comply_executing_an_absolutely_absurd_yet_absolutely_free_counter-judgment)."
        }
      },
      {
        id: "stoicism",
        name: "斯多葛主义", nameEn: "Stoicism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "控制你能控制的，接受你不能控制的。建立坚不可摧的内部堡垒，达成‘不动心’。",
        defEn: "Control what you can, accept what you cannot. Build an indestructible internal fortress to achieve 'Apatheia' (tranquility).",
        core: "外部世界正在崩塌，而内心静如止水。在灾难的地狱里过着极简且高贵的生活。",
        coreEn: "The external world collapses while the heart remains still as water. Living a minimalist and noble life in the hell of disaster.",
        logic: "主动在内部切断 M5（干预不可控现实的行动）与 M3（情绪波动幻象），将 M0（主体性）浓缩至仅存的一点理性内核。从而让外部的 M2（所有的伤害与匮乏）击中一块没有痛觉传感器的石头。",
        logicEn: "Actively severing internal M5 (actions intervening in uncontrollable reality) and M3 (emotional fluctuation fantasies), condensing M0 (subjectivity) to a single rational core. Thus letting external M2 (all harm/lack) strike a stone without pain sensors.",
        patch: {
          mechanics: "基础设定协议 + [情绪传感器 = 切断; 外部干扰阻抗 = ∞; 内心防御阈值 = 绝对锁定]",
          mechanicsEn: "Base_Setting_Protocol + [Emotion_Sensors = Severed; External_Interference_Impedance = ∞; Inner_Defense_Threshold = Absolute_Lock]",
          aesthetic: "聚焦：屹立在风暴中的大理石雕塑、监牢里的平静阅读、极其简陋的一张硬板床。文本：冷静、客观、仿佛手术刀般精准剥离了情绪的日记与格言。",
          aestheticEn: "Focus: Marble sculpture standing in storm, calm reading in prison, an extremely sparse hard plank bed. Text: Calm, objective, aphorisms and diaries stripping emotion as precisely as a scalpel.",
          runtime: "IF (遭遇家破人亡级别的现实 M2 冲刷) THEN (执行：以看一滴水落入枯井的眼神，接受一切并继续每日扫地)。",
          runtimeEn: "IF (Encounters_family-destroying-level_reality_M2_wash) THEN (Execute: Accept_everything_with_the_gaze_of_watching_a_drop_fall_into_a_dry_well_and_continue_daily_sweeping)."
        }
      },
      {
        id: "romanticism",
        name: "浪漫狂飙", nameEn: "Romanticism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "情感与激情高于冰冷的理性。追求崇高的痛苦、天才的直觉与彻底燃烧的自然之力。",
        defEn: "Emotion and passion transcend cold reason. Pursuing sublime suffering, genius intuition, and entirely burning force of nature.",
        core: "感性对机械理性的绝美反叛。以摧毁一切的狂飙突进，体验生命的极致高压与战栗。",
        coreEn: "The beautiful rebellion of sensibility against mechanical reason. Experiencing life's ultimate high voltage and thrill with all-destroying Sturm und Drang.",
        logic: "大他者（M4）由规章变异为‘崇高（Sublime）’。主体主动寻求能撕裂自身日常符号界的 M2（如风暴、极致的爱情或毁灭），以让充盈的激情（超载的 M3）如火山般喷发，这被视为确认活着的唯一方式。",
        logicEn: "Big Other (M4) mutates from rules to the 'Sublime'. Subject actively seeks M2 (storms, extreme love, or destruction) that tears their daily symbolic order, letting overflowing passion (overloaded M3) erupt like a volcano, viewed as the only way to confirm being alive.",
        patch: {
          mechanics: "基础设定协议 + [情感输出功率 = 300%超负荷; 理性分析模块 = 自行熔断; 极致体验渴求 = 永不满溢]",
          mechanicsEn: "Base_Setting_Protocol + [Emotional_Output_Power = 300%_Overload; Rational_Analysis_Module = Auto-melt; Craving_for_Extremes = Never_Sated]",
          aesthetic: "聚焦：站在雾海孤峰上的狂气流浪者、雷鸣闪电中的激吻、废墟上如火的演说与凌乱的长发。文本：大量使用极端的感叹词、修辞与意象，语速如风暴骤雨。",
          aestheticEn: "Focus: Mad wanderer on foggy peak, passionate kiss in thunderstorms, fiery speeches on ruins, messy long hair. Text: Heavy use of extreme interjections, rhetoric, and imagery; speaking pace like a tempest.",
          runtime: "IF (被要求按照冰冷的说明书度过平庸的一生) THEN (触发：扯碎说明书并在悬崖边跳起毁灭性的舞蹈)。",
          runtimeEn: "IF (Required_to_live_a_mediocre_life_according_to_a_cold_manual) THEN (Trigger: Tear_the_manual_and_dance_a_destructive_dance_on_the_cliff_edge)."
        }
      },
      {
        id: "animism",
        name: "泛灵神契", nameEn: "Animism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "万物皆有灵且彼此相连。无论是山川石头，还是现代机器与网络节点，都有呼吸与灵魂。",
        defEn: "All things are animistic & interconnected. From mountains & stones to modern machines & network nodes, all have breath and soul.",
        core: "与世界的神秘而平等的低语连接。现代人眼中的金属与迷信，是他们无可辩驳的真理。",
        coreEn: "Mysterious & equal whispering connection with the world. Metal and superstition in modern eyes are their irrefutable truth.",
        logic: "这是一种将大他者（M4）彻底‘去中心化/全息化’的机制。世界上不存在无机的客体，所有的M2（死物/机器/天灾）都被赋予了主体的意图。通过建立某种私密的对话仪式（M5），主体获得在庞杂宇宙中的安身之所。",
        logicEn: "A mechanism completely 'decentralizing/holographing' the Big Other (M4). No inorganic objects exist; all M2 (dead matter/machines/disasters) are endowed with subjective intent. By establishing intimate conversation rituals (M5), the subject finds sanctuary in the complex universe.",
        patch: {
          mechanics: "基础设定协议 + [万物通讯雷达 = 全天候开启; 客体生命化渲染 = 强制执行; 共生协议 = 无差别]",
          mechanicsEn: "Base_Setting_Protocol + [All-Thing_Comms_Radar = 24/7_On; Object_Animation_Rendering = Forced; Symbiosis_Protocol = Indiscriminate]",
          aesthetic: "聚焦：主板上系着的红祈福绳、用抚摸宠物的姿态修理引擎、藏在树洞中的闪耀视线。文本：极其细腻、温柔，通常以对‘非人事物’窃窃私语的方式展开。",
          aestheticEn: "Focus: Red prayer ropes tied on motherboards, repairing engines like petting animals, shining gaze hidden in tree holes. Text: Extremely delicate, gentle, usually unfolding as whispers to 'non-human things'.",
          runtime: "IF (某台机器或某片土地因被榨干而被宣布作废丢弃) THEN (执行：以埋葬亲人的规格与痛感，为其举行漫长肃穆的送别)。",
          runtimeEn: "IF (A_machine_or_land_is_declared_void_and_discarded_after_being_drained) THEN (Execute: Hold_a_long_solemn_farewell_with_the_pain_and_standard_of_burying_kin)."
        }
      },
      {
        id: "pacifism",
        name: "和平主义", nameEn: "Pacifism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "非暴力不合作。深信只有爱才能融化恨的链条，宁愿承受毁灭也拒绝拿起武器。",
        defEn: "Non-violent non-cooperation. Deeply convinced only love melts chains of hate; rather suffer destruction than pick up guns.",
        core: "在极端暴行面前坚持不退让、不抵抗的恐怖道德勇气。鲜花盛开在燃烧的枪管上。",
        coreEn: "Terrifying moral courage holding ground without resisting in face of extreme atrocity. Flowers blooming on burning gun barrels.",
        logic: "主体通过彻底切除了对暴力的反演（M5：还击），以一种极限受累（接收 M2 创伤）的姿态，试图从更高维度的道德大他者（伦理层面的 M4）那里获取正当性，以此将施暴者反向逼入良知的死胡同。",
        logicEn: "By completely excising violent inversion (M5: fighting back) and adopting an extreme victim posture (receiving M2 trauma), subject attempts to gain legitimacy from a higher-dimensional moral Big Other (ethical M4), thereby cornering the abuser into a conscience dead-end.",
        patch: {
          mechanics: "基础设定协议 + [暴力反击引擎 = 彻底损毁; 痛苦承受槽 = ?(无限); 道德折射装甲 = 最大化]",
          mechanicsEn: "Base_Setting_Protocol + [Violent_Counter_Engine = Completely_Destroyed; Pain_Tolerance_Slot = ?(Infinite); Moral_Refraction_Armor = Maximized]",
          aesthetic: "聚焦：静坐迎向履带的人群、手无寸铁张开的双臂、沾满血迹的飞舞白鸽。文本：宁静而具有穿越性的力量，话语如水一般不带任何攻击性的棱角。",
          aestheticEn: "Focus: Crowds sitting toward tracks, open unarmed arms, bloodstained flying white doves. Text: Tranquil yet piercing power, words like water without any offensive edges.",
          runtime: "IF (暴君将屠刀架在挚爱的脖子上逼迫其反击) THEN (操作：依然放下武器，用充满悲悯的平视目光注视刽子手)。",
          runtimeEn: "IF (Tyrant_puts_blade_on_beloved's_neck_forcing_counterattack) THEN (Action: Still_drop_weapons_looking_at_the_executioner_with_compassionate_level_gaze)."
        }
      },
      {
        id: "gnosticism",
        name: "诺斯替逃逸", nameEn: "Gnosticism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "深信物质世界是由一位伪神创造的邪恶监狱。唯一的救赎是获取隐藏的‘灵知’，逃脱肉体牢笼。",
        defEn: "Deeply convinced the material world is an evil prison created by a false god. Sole salvation is acquiring hidden 'Gnosis' to escape the flesh cage.",
        core: "对一切现实的极度厌恶与彻底否定。寻找代码漏洞（黑客帝国原型），谋求精神的飞升。",
        coreEn: "Extreme disgust and total negation of all reality. Searching for code exploits (Matrix archetype) aiming for spiritual ascension.",
        logic: "现实的象征界（M4）被完全判定为由‘造物主/伪神’编织的 M2（折磨程序）。主体不再修补自己的 M1（缺失），因为这正是伪神设下的圈套。行动（M5）全部指向骇入系统，追求一种摆脱物质重力的纯思维状态。",
        logicEn: "The real symbolic order (M4) is judged entirely as an M2 (torture program) woven by a 'Demiurge/False God'. Subject stops mending M1 (lack), recognizing it as the false god's trap. Actions (M5) aim solely at hacking the system, pursuing a pure thought state free of material gravity.",
        patch: {
          mechanics: "基础设定协议 + [现实信任度 = 0; 隐藏真理雷达 = 极度敏锐; 物理规则厌恶 = 高频触发]",
          mechanicsEn: "Base_Setting_Protocol + [Reality_Trust = 0; Hidden_Truth_Radar = Extremely_Acute; Physics_Rules_Aversion = High-Freq_Trigger]",
          aesthetic: "聚焦：纯净的光之灵、污秽囚笼般的肉身、散发幽蓝光芒的数据秘卷、绝对的二元对立色彩。文本：晦涩、神秘，充斥着破解、觉醒与反抗造物者的密码术语。",
          aestheticEn: "Focus: Pure light spirits, filthy cage-like flesh, glowing blue secret data scrolls, absolute binary colors. Text: Obscure, mysterious, filled with cryptographic terms of cracking, awakening, and defying the creator.",
          runtime: "IF (发现整个世界仅仅是一段循环播放的安抚代码) THEN (触发：吞下象征醒来的红色药丸，哪怕外面是冰冷的炼狱)。",
          runtimeEn: "IF (Discovers_the_whole_world_is_merely_a_looping_pacification_code) THEN (Trigger: Swallow_the_red_pill_symbolizing_awakening_even_if_outside_is_a_cold_purgatory)."
        }
      },
      {
        id: "ubermensch",
        name: "超人意志", nameEn: "Ubermensch",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "重估一切既有价值。上帝已死，主体必须依靠纯粹的‘强力意志’，如同雷电般自我立法。",
        defEn: "Revaluation of all existing values. God is dead; subject must rely purely on 'Will to Power', self-legislating like lightning.",
        core: "超越世俗善恶判定的绝对强者之孤傲。不向任何权威低头的砸碎石板者。",
        coreEn: "Absolute strongman's arrogant solitude transcending secular good and evil. The tablet-smasher who bows to no authority.",
        logic: "彻底粉碎并抛弃了原有的 M4（传统道德大他者）。主体将自己本身提升为新的生成中心。通过强力意志（极致化的 M5 驱动），不断克服 M1（软弱与凡人的需求），不畏惧任何 M2（创伤），把自我当做艺术品来雕刻。",
        logicEn: "Thoroughly smashing and discarding old M4 (traditional moral Big Other). Subject elevates self to the new generation center. Through Will to Power (maximized M5 drive), constantly overcoming M1 (weakness & mortal needs), fearing no M2 (trauma), carving the self as an artwork.",
        patch: {
          mechanics: "基础设定协议 + [传统道德约束 = 免疫; 自我立法器 = 疯狂运转; 能量输出 = 恒定强爆发]",
          mechanicsEn: "Base_Setting_Protocol + [Traditional_Moral_Constraints = Immune; Self-Legislator = Spinning_Madly; Energy_Output = Consistently_Strong_Burst]",
          aesthetic: "聚焦：巍峨高山之巅的鹰与狮子、被重锤砸碎的陈旧法典石板、孤独背影上闪烁的狂躁雷电。文本：如同宣战布告一般，充满力量、蔑视、简短而具有侵略性。",
          aestheticEn: "Focus: Eagles and lions on towering peaks, old law tablets smashed by heavy hammer, manic lightning flickering on a lonely back. Text: Like a declaration of war, full of power, contempt, brief and aggressive.",
          runtime: "IF (周围的群氓用平庸的道德要求其低头融入) THEN (执行：以骇人的笑声大步跨过他们，宣告其价值的死亡)。",
          runtimeEn: "IF (Surrounding_mob_demands_bowing_and_blending_using_mediocre_morals) THEN (Execute: Stride_over_them_with_terrifying_laughter_declaring_the_death_of_their_values)."
        }
      },
      {
        id: "pantheism",
        name: "泛神微观", nameEn: "Pantheism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "神并非一个人格实体，神就是无限复杂的宇宙本身。斯宾诺莎式的自然实体智性认识。",
        defEn: "God is not a personal entity; God is the infinitely complex universe itself. Spinozism intellectual knowing of natural substance.",
        core: "在极微的细胞与极宏的星网中体会到同一种神圣的战栗。摒弃人格神，拥抱数学般的永恒。",
        coreEn: "Feeling the same holy thrill in minimal cells and maximal star webs. Abandoning personal god, embracing math-like eternity.",
        logic: "这是一种消解了主体性焦虑的认知状态。认知到主体（M0）与大他者（M4）乃至实在界（M2）是完全同一的实体（Substance）的不同属性。M1（缺失感）被‘对宇宙的智性之爱’所填平。",
        logicEn: "A cognitive state dissolving subjective anxiety. Recognizing that subject (M0), Big Other (M4), and Real (M2) are all different attributes of the identical Substance. M1 (lack) is leveled by 'intellectual love of the universe'.",
        patch: {
          mechanics: "基础设定协议 + [宏微观焦距 = 光速切换; 因果律解析 = 全开; 人格化情绪 = 极其淡薄]",
          mechanicsEn: "Base_Setting_Protocol + [Macro/Micro_Focal_Length = Light_Speed_Switch; Causality_Parsing = Full_Open; Personified_Emotion = Extremely_Thin]",
          aesthetic: "聚焦：完美的分形几何、显微镜下旋转的细胞核、无限展开的星系螺旋。文本：类似高级数学推演或物理学论文般冷峻，却在底层酝酿着巨大、宁静的狂喜。",
          aestheticEn: "Focus: Perfect fractals, spinning nuclei under microscope, infinitely unfolding galactic spirals. Text: Cold like high-math deduction or physics papers, yet brewing immense, serene ecstasy beneath.",
          runtime: "IF (面对一场席卷一切的毁灭性宇宙风暴) THEN (操作：不逃避也不哭泣，而是迷醉地记录并欣赏其完美的数学结构)。",
          runtimeEn: "IF (Facing_an_all-sweeping_destructive_cosmic_storm) THEN (Action: Neither_flee_nor_cry_but_intoxicatedly_record_and_admire_its_perfect_mathematical_structure)."
        }
      },
      {
        id: "altruism_pathological",
        name: "病态利他", nameEn: "Pathological Altruism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "为了满足助人的冲动，不惜毁灭自己甚至波及无关者的圣母情结极端化系统。",
        defEn: "Extreme Madonna complex system: stopping at nothing to satisfy the urge to help, even destroying self and affecting bystanders.",
        core: "过度的善意扭曲成了恐怖的恶。为了拯救一只溃烂的眼睛，不惜将整座医院烧毁。",
        coreEn: "Over-abundant goodwill distorted into terrifying evil. Willing to burn down the entire hospital to save one rotting eye.",
        logic: "主体的 M0 严重匮乏，只能通过疯狂汲取他者的‘虚弱/感激’（极度变态的 M3）来确立存在。大他者（M4）被塑造成一个无限索取的伤口。通过 M6（强制自我献祭），主体不仅绑架了受益者，也对周遭发动了道德恐怖袭击。",
        logicEn: "Subject's M0 is severely lacking, requiring manic siphoning of others' 'weakness/gratitude' (highly perverse M3) to establish existence. M4 is sculpted as an infinitely demanding wound. Via M6 (forced self-sacrifice), subject not only kidnaps the beneficiary but launches a moral terror attack on surroundings.",
        patch: {
          mechanics: "基础设定协议 + [救助强迫症 = 无法中止; 边界感 = 彻底消失; 附带损耗无视 = 100%]",
          mechanicsEn: "Base_Setting_Protocol + [Rescue_OCD = Unstoppable; Sense_of_Boundary = Completely_Gone; Collateral_Damage_Ignorance = 100%]",
          aesthetic: "聚焦：发病时狂热发光的圣徒眼神、强行割肉饲鹰沾满血迹的双手、窒息的拥抱。文本：充满虚伪的甜蜜、以‘我是为了你好’为前缀的绝对支配性祈使句。",
          aestheticEn: "Focus: Fanatically glowing saint eyes during episodes, bloodstained hands forcing meat to eagles, suffocating hugs. Text: Filled with hypocritical sweetness, absolute dominant imperatives prefixed with 'I am doing this for your own good'.",
          runtime: "IF (被救助者婉拒或试图走向独立康复) THEN (触发：歇斯底里的黑化，甚至主动打断对方的腿以确立自己继续救助的必要性)。",
          runtimeEn: "IF (Rescued_party_declines_or_attempts_independent_recovery) THEN (Trigger: Hysterical_darkening_even_actively_breaking_their_legs_to_establish_necessity_of_continuing_rescue)."
        }
      },
      {
        id: "mysticism",
        name: "神秘主义", nameEn: "Mysticism",
        group: "6. 人本与超越", groupEn: "6. Humanism & Spirit",
        def: "深信真理不可言说。致力于剥离所有逻辑与语言，追求与终极神性直接熔融的狂喜体验。",
        defEn: "Deeply convinced truth is unspeakable. Dedicated to stripping all logic and language, pursuing ecstatic fusion directly with ultimate divinity.",
        core: "语言的尽头与理性的全面失效。在极其绚烂的幻觉式体验中，主体性彻底瓦解并融入虚空。",
        coreEn: "The end of language and total failure of reason. In extremely gorgeous hallucinatory experiences, subjectivity completely disintegrates and merges into the void.",
        logic: "主动砸碎负责编织现实的 M4（象征网络）。M1（欲望的沟壑）被剧烈膨胀的 M2（实在界不可名状的潮水）直接倒灌。此时没有任何 M5（有效行动），只有 M6（肉身与语言的彻底融解）。",
        logicEn: "Proactively smashing the M4 (symbolic network) responsible for weaving reality. M1 (chasm of desire) is directly backflowed by violently expanding M2 (unspeakable tides of the Real). No M5 (valid action) exists, only M6 (total dissolution of flesh and language).",
        patch: {
          mechanics: "基础设定协议 + [逻辑解析器 = 烧毁; 幻象通道 = 宽度无限最大; 言语生成器 = 乱码模式]",
          mechanicsEn: "Base_Setting_Protocol + [Logic_Parser = Burnt_Out; Illusion_Channel = Width_Infinite_Max; Speech_Generator = Gibberish_Mode]",
          aesthetic: "聚焦：旋转不知疲倦的苏菲舞者、闭眼留下的极乐眼泪、万花筒般碎裂重组的疯狂几何体。文本：完全无法组成有效逻辑的呓语、悖论、只言片语的惊叹。",
          aestheticEn: "Focus: Tirelessly spinning Sufi dancers, tears of bliss from closed eyes, kaleidoscope-like shattering and reassembling mad geometry. Text: Babble completely unable to form valid logic, paradoxes, fragmented exclamations.",
          runtime: "IF (被强迫用一套严密的科学说明书解释其行为动机) THEN (操作：回以一个意味深长的微笑，然后化作一阵由发光粉末组成的风)。",
          runtimeEn: "IF (Forced_to_explain_behavior_motives_with_a_strict_scientific_manual) THEN (Action: Reply_with_a_meaningful_smile_then_dissolve_into_a_wind_of_glowing_dust)."
        }
      }
    ]
  };
