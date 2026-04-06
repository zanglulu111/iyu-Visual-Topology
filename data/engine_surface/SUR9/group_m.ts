import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_M: LibraryCategoryDef = {
  id: "orig_outcast",
  name: "5. 边缘与弃民 (Outcast & Pariah)",
  nameEn: "Outcast & Pariah",
  desc: "被主流社会排斥、遗忘或主动放逐的人。",
  descEn: "Those rejected, forgotten, or self-exiled by mainstream society.",
  items: [
    {
      id: "homeless",
      name: "流浪汉", nameEn: "Homeless",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "没有家，睡在街头，被城市彻底遗忘的透明人。",
      defEn: "Homeless, sleeping on the streets, transparent individuals completely forgotten by the city.",
      core: "我躺在繁华中心的下水道井盖上取暖，所有人绕着我走，像绕开一滩狗屎。 | 缺失 ($): 遮蔽与尊严 (Shelter and Dignity)",
      coreEn: "I warm myself on a sewer cover in the bustling center; everyone walks around me like dodging dog shit. | Lack ($): Shelter and Dignity",
      logic: "【建制的隐形人】：主体（M1）在都市的物理空间中存在，但在象征界（M5）的所有社会建制（M4）中被判定为不存在。公共空间是他们唯一的实在界（M6）暴露地。",
      logicEn: "[Invisible to Institutions]: Subjectivity (M1) physically exists in the urban space but is registered as non-existent across all social institutions (M4) in the Symbolic (M5). Public space is their only exposure to the Real (M6).",
      patch: {
        mechanics: "隐形滞留协议 + [社会可见度 = 绝对零度; 物理暴露系数 = 致命]",
        mechanicsEn: "Invisible_Loiter_Protocol + [Social_Visibility = Absolute_Zero; Physical_Exposure_Factor = Fatal]",
        aesthetic: "聚焦：手推车 + 纸板箱堡垒 + 多层污秽冬衣。文本：充满异味的呓语、对路人目光的麻木或突然的狂躁。",
        aestheticEn: "Focus: Shopping_Cart + Cardboard_Fortress + Layered_Filthy_Winter_Coats. Text: Odorous_Babble,_Numbness_to_Passersby_Gazes,_or_Sudden_Mania.",
        runtime: "IF (在极端严寒之夜被城管收走唯一御寒的纸板箱) THEN (强制：第二天必定化为路边冻死的无名尸体)。严禁城市监控系统为其死因报警。",
        runtimeEn: "IF (Sole_Thermal_Cardboard_Confiscated_by_Enforcers_on_Freezing_Night) THEN (Force: Inevitably_Become_Frozen_Nameless_Corpse_by_Morning). FORBID_City_Surveillance_Triggering_Alarm_for_Their_Death."
      }
    },
    {
      id: "refugee",
      name: "难民", nameEn: "Refugee",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "因战争、灾难或迫害逃离家园，失去国家保护的裸命存在。",
      defEn: "Fleeing homeland due to war, disaster, or persecution; bare lives striped of state protection.",
      core: "除了这身衣服和我背后的火光，我什么都没有了，但边境的铁丝网依然挡住了我的路。 | 缺失 ($): 安全的坐标 (Safe Coordinates)",
      coreEn: "I have nothing left but these clothes and the flames behind me, yet the border barbed wire still blocks my path. | Lack ($): Safe Coordinates",
      logic: "【被剥离的裸命】：主体（M1）失去了母国的大他者（M4）庇护，变成了阿甘本意义上的'Homo Sacer'（神圣人/裸命）。他们的存在被纯粹缩减为生物性的求生，而边境则是象征界绝对暴力的具象化。",
      logicEn: "[Stripped Bare Life]: Subjectivity (M1) lost the protection of the motherland's Other (M4), becoming Agamben's 'Homo Sacer' (bare life). Their existence is reduced to pure biological survival, while the border is the materialization of the Symbolic's absolute violence.",
      patch: {
        mechanics: "裸命游荡协议 + [生存资源 = 随机归零; 边境墙防御力 = 绝对不可撼动]",
        mechanicsEn: "Bare_Life_Wandering_Protocol + [Survival_Resources = Randomly_Zeroed; Border_Wall_Defense = Absolutely_Immovable]",
        aesthetic: "聚焦：救生衣 + 泥泞难民营 + 铁丝网前的绝望眼神。文本：混杂着多语言哭喊的无序求偶声，以及对暴力的极度惊恐。",
        aestheticEn: "Focus: Life_Jackets + Muddy_Camps + Despairing_Eyes_Before_Barbed_Wire. Text: Disordered_Pleas_Mixed_in_Multiple_Languages,_and_Extreme_Terror_of_Violence.",
        runtime: "IF (难民船超载在暴风雨中沉没) THEN (强制：所有国际救援信号必定失灵，只能在绝望中溺水)。严禁目的地国家主动打开大门迎接。",
        runtimeEn: "IF (Overloaded_Refugee_Boat_Sinks_in_Storm) THEN (Force: All_Intl_Rescue_Signals_Inevitably_Fail,_Drowning_in_Despair). FORBID_Destination_Country_Voluntarily_Opening_Gates."
      }
    },
    {
      id: "untouchable",
      name: "贱民/不可接触者", nameEn: "Untouchable",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "因种姓制度、血统或深根固蒂的社会偏见而被标记为不洁的最底层。",
      defEn: "The absolute bottom tier marked as unclean due to caste systems, lineage, or deep-rooted social prejudice.",
      core: "我出生的那一刻起，我的影子碰到了他们，就被视为一种严重的罪孽。 | 缺失 ($): 原生洁净性 (Innate Purity)",
      coreEn: "The moment I was born, if my shadow touched them, it was considered a grave sin. | Lack ($): Innate Purity",
      logic: "【本体论级别的污秽】：大他者（M4）的法律或宗教系统不仅在阶级上，而且在本体论上将主体（M1）定义为'粪便'或'污染物'。一切接触都会引发上层的实在界恐慌。",
      logicEn: "[Ontological Filth]: The Other's (M4) legal or religious system defines the subject (M1) not merely by class, but ontologically as 'excrement' or 'pollutant'. Any contact triggers Real panic from the upper tiers.",
      patch: {
        mechanics: "绝对隔离协议 + [社会传染性 = 幻觉级极高; 阶跃可能性 = 零]",
        mechanicsEn: "Absolute_Segregation_Protocol + [Social_Contagiousness = Hallucinatory_Max; Leap_Possibility = Zero]",
        aesthetic: "聚焦：处理尸体与粪便的双手 + 低垂的后颈 + 被避之不及的空地。文本：自我厌恶与极度驯化的奴性低语。",
        aestheticEn: "Focus: Hands_Handling_Corpses_and_Feces + Bowed_Napes + Avoided_Clearings. Text: Self-Loathing_and_Extremely_Domesticated_Servile_Whispers.",
        runtime: "IF (因为口渴喝了高阶级水井里的水) THEN (触发：被暴民当街打死且不需要负任何法律责任)。严禁高阶级成员对其展现平等的肢体接触。",
        runtimeEn: "IF (Drank_From_High-Caste_Well_Due_to_Thirst) THEN (Trigger: Beaten_to_Death_in_Street_by_Mob_with_Total_Legal_Impunity). FORBID_High-Caste_Members_Showing_Equal_Physical_Contact."
      }
    },
    {
      id: "hermit_exile",
      name: "隐士", nameEn: "Hermit",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "主动选择切断与人类社会的联系，独自在荒野中寻求绝对精神或逃避的主体。",
      defEn: "Subject actively choosing to sever ties with human society, seeking absolute spirit or escape alone in the wilderness.",
      core: "别人觉得我是被放逐了，但我知道，是我把整个世界放逐了。 | 代偿 ($): 虚无的自由 (Nihilistic Freedom)",
      coreEn: "Others think I was exiled, but I know it's I who exiled the whole world. | Compensation ($): Nihilistic Freedom",
      logic: "【象征界的自我切除】：主体（M1）试图通过物理上的绝对孤立，主动从大他者网络（M4）中拔除自己。这是一种为了抗拒异化而走向另一种极端孤立的力比多（M3）内耗。",
      logicEn: "[Self-Amputation from Symbolic]: Subjectivity (M1) attempts to actively uproot itself from the Other's network (M4) through absolute physical isolation. This is a libido (M3) internal friction fighting alienation by choosing extreme isolation.",
      patch: {
        mechanics: "自我驱逐协议 + [社交值 = 锁定为零; 精神内爆风险 = 极高]",
        mechanicsEn: "Self-Expulsion_Protocol + [Social_Value = Locked_at_Zero; Mental_Implosion_Risk = Extreme]",
        aesthetic: "聚焦：深山木屋 + 苍老蓬乱的面容 + 无人回应的回声。文本：极简、充满哲学性妄想、带有动物性直觉的声音碎片。",
        aestheticEn: "Focus: Deep_Mountain_Cabin + Aged_Disheveled_Face + Unanswered_Echoes. Text: Minimalist,_Filled_with_Philosophical_Delusions_and_Voice_Fragments_of_Animal_Intuition.",
        runtime: "IF (试图在绝对孤独中实现精神的神性飞跃) THEN (强制：最终只能遇到自身的疯癫和对彻底空无的恐惧)。严禁在其隐居地出现奇迹般的救赎圣光。",
        runtimeEn: "IF (Attempts_Divine_Mental_Leap_in_Absolute_Solitude) THEN (Force: Ultimately_Encounters_Only_Own_Madness_and_Terror_of_Total_Void). FORBID_Miraculous_Redemption_Light_Appearing_at_Hermitage."
      }
    },
    {
      id: "cult_member",
      name: "邪教徒", nameEn: "Cultist",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "将全部理智献祭给极端信仰体系，生活在封闭且狂热的妄想共同体中。",
      defEn: "Sacrificing all reason to an extreme belief system, living in a closed and fanatical delusional community.",
      core: "导师的话语就是宇宙的真理，外面的世界全是堕落的罪人。 | 代偿 ($): 确凿无疑的狂热 (Indisputable Fanaticism)",
      coreEn: "The Guru's words are the truth of the universe; the outside world is full of fallen sinners. | Compensation ($): Indisputable Fanaticism",
      logic: "【大他者的绝对霸权】：主体（M1）通过将能指链（M5）完全交由一个偏执狂导师（超限大他者M4）垄断，从而消除了所有的存在性焦虑（M2）。这种绝对的安全感建立在彻底丧失自我之上。",
      logicEn: "[Absolute Hegemony of the Other]: Subjectivity (M1) eliminates all existential angst (M2) by handing the complete monopoly of the signifier chain (M5) to a paranoid Guru (hyper-limit Other M4). This absolute security is built on total loss of self.",
      patch: {
        mechanics: "心智献祭协议 + [逻辑免疫 = 绝对防御; 暴力服从度 = 狂热级]",
        mechanicsEn: "Mental_Sacrifice_Protocol + [Logic_Immunity = Absolute_Defense; Violent_Obedience = Fanatical]",
        aesthetic: "聚焦：统一着装（白袍） + 空洞但亢奋的瞳孔 + 鲜血与图腾。文本：重复性的教义背诵、排他的敌意以及诡异的狂喜合唱。",
        aestheticEn: "Focus: Uniform_Attire_(White_Robes) + Hollow_Yet_Hyper_Pupils + Blood_and_Totems. Text: Repetitive_Doctrine_Recitation,_Exclusive_Hostility,_and_Eerie_Ecstatic_Chorus.",
        runtime: "IF (导师预言世界末日并下令全体信徒饮毒自杀) THEN (触发：带着迷幻笑容的集体灭绝，毫无反抗能力)。严禁外界逻辑能在这个时刻将其唤醒。",
        runtimeEn: "IF (Guru_Prophesies_Doomsday_and_Orders_Mass_Toxic_Suicide) THEN (Trigger: Mass_Extinction_with_Psychedelic_Smiles,_Zero_Resistance). FORBID_Outside_Logic_Waking_Them_at_This_Moment."
      }
    },
    {
      id: "leper",
      name: "麻风病人/感染者", nameEn: "The Infected",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "携带高危险性传染病，身体因溃烂而异形，被社会彻底隔离的怪物。",
      defEn: "Carrying highly dangerous infectious diseases, body mutated by ulceration, a monster completely isolated from society.",
      core: "我只是生了病，但他们看着我，就像看着地狱里爬出来的恶鬼。 | 缺失 ($): 人类身份认同 (Human Identity Recognition)",
      coreEn: "I just got sick, but they look at me like a demon crawling out of hell. | Lack ($): Human Identity Recognition",
      logic: "【实在界的恐怖入侵】：疾病（M6）直接摧毁了主体的肉身外观基础。大他者（M4）处于本能恐怖与公共卫生逻辑考虑，将其标记为必须被驱逐出象征界的非人实体。",
      logicEn: "[Horrific Invasion of the Real]: Disease (M6) directly destroys the subject's baseline physical appearance. The Other (M4), driven by instinctive terror and public health logic, marks them as non-human entities that must be expelled from the Symbolic.",
      patch: {
        mechanics: "物理隔离协议 + [溃烂进度 = 不可逆; 社交恐惧值 = AOE拉满]",
        mechanicsEn: "Physical_Quarantine_Protocol + [Ulceration_Progress = Irreversible; Social_Terror_Aura = Max_AOE]",
        aesthetic: "聚焦：隔离岛/下水道 + 缠满脏血绷带的肢体 + 走动的瘸腿声。文本：嘶哑的呼吸、痛苦的呻吟与试图掩藏外貌的卑微。",
        aestheticEn: "Focus: Quarantine_Islands/Sewers + Limbs_Wrapped_in_Dirty_Bloody_Bandages + Limping_Footsteps. Text: Hoarse_Breathing,_Agonized_Moans,_and_Humility_in_Trying_to_Hide_Appearance.",
        runtime: "IF (因病变恶化试图越界求医) THEN (强制：被防化部队无情射杀再焚尸)。严禁健康人群克制住对他们外观的生理倒胃与恐惧。",
        runtimeEn: "IF (Attempts_to_Cross_Border_for_Medicine_Due_to_Worsening_Lesions) THEN (Force: Ruthlessly_Shot_by_Hazmat_Troops_Then_Incinerated). FORBID_Healthy_Crowds_from_Overcoming_Physiological_Nausea_and_Terror."
      }
    },
    {
      id: "madman_prophet",
      name: "疯子/先知", nameEn: "Madman",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "精神彻底错乱，跌出理性世界网络，在迷乱的幻觉中说出可怖的真谛。",
      defEn: "Utterly deranged, fallen out of the rational world network, speaking dreadful truths amidst bewildered hallucinations.",
      core: "我在墙面的裂缝里看到了宇宙运转的齿轮，但他们只给我穿上紧束衣。 | 代偿 ($): 疯狂的启示 (Crazy Revelations)",
      coreEn: "I saw the universe's gears turning in the wall's cracks, but they just put me in a straitjacket. | Compensation ($): Crazy Revelations",
      logic: "【象征界的短路】：疯子（M1）的能指链（M5）断裂，导致实在界（M6）的意象如洪水般涌入。在旁人看似胡言乱语，实则可能是系统底层（大他者M4缝隙）的代码泄露。",
      logicEn: "[Symbolic Short-Circuit]: The madman's (M1) signifier chain (M5) breaks, causing Real (M6) imagery to flood in. What seems like gibberish to others might actually be a code leak from the system's foundation (cracks in the Other M4).",
      patch: {
        mechanics: "精神解离协议 + [理性沟通 = 乱码; 实在界感知 = 危险超频]",
        mechanicsEn: "Mental_Dissociation_Protocol + [Rational_Comm = Gibberish; Real_Perception = Dangerous_Overclocking]",
        aesthetic: "聚焦：精神病院的白墙 + 指甲抓出的血痕 + 涣散焦距的眼神。文本：跳跃的逻辑、晦涩的预言隐喻与突如其来的诡异狂笑。",
        aestheticEn: "Focus: White_Asylum_Walls + Blood_Stains_from_Scratching_Nails + Unfocused_Gazes. Text: Jumping_Logic,_Obscure_Prophetic_Metaphors,_and_Sudden_Eerie_Maniacal_Laughter.",
        runtime: "IF (在街头准确预言了即将到来的系统性大灾难) THEN (触发：被作为精神病患被强制注射镇静剂拖走，灾难随后如期降临)。严禁理性系统相信并采纳其疯言乱语的警告。",
        runtimeEn: "IF (Accurately_Prophesies_Imminent_Systemic_Catastrophe_on_Street) THEN (Trigger: Forcefully_Injected_with_Sedatives_and_Dragged_Away_as_Mental_Patient;_Catastrophe_Follows_on_Schedule). FORBID_Rational_System_Believing_and_Adopting_Their_Crazy_Warnings."
      }
    },
    {
      id: "orphan_street",
      name: "流浪儿", nameEn: "Street Urchin",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "没有成年人庇护的幼小生命，如同城市下水道里的老鼠般野蛮生长。",
      defEn: "Young lives without adult protection, growing wild like rats in the city's sewers.",
      core: "从懂得可以从别人兜里摸出面包那一天起，我的童年就结束了。 | 缺失 ($): 父名保护 (Name-of-the-Father Protection)",
      coreEn: "My childhood ended the day I learned bread could be swiped from someone's pocket. | Lack ($): Name-of-the-Father Protection",
      logic: "【被抛弃的起源】：主体（M1）从一开始就缺乏父性隐喻（M4）的保护性缝合。为了在残酷的生存环境（M2）中活下去，必须提早发展出扭曲而早熟的掠夺本能（M3）。",
      logicEn: "[Abandoned Origin]: Subjectivity (M1) lacks the protective suture of paternal metaphors (M4) from the start. To survive in the cruel environment (M2), they must prematurely develop distorted, predatory instincts (M3).",
      patch: {
        mechanics: "早熟掠夺协议 + [道德负罪感 = 未发育; 生存敏捷度 = 极高]",
        mechanicsEn: "Premature_Predation_Protocol + [Moral_Guilt = Undeveloped; Survival_Agility = Max]",
        aesthetic: "聚焦：脏兮兮的小脸 + 过大的旧衣服 + 藏在破鞋里的偷来硬币。文本：狡黠的谎言、对成年人的极度不信任，只有在睡梦中才流露出的脆弱。",
        aestheticEn: "Focus: Filthy_Little_Faces + Oversized_Old_Clothes + Stolen_Coins_Hidden_in_Torn_Shoes. Text: Sly_Lies,_Extreme_Distrust_of_Adults,_Vulnerability_Revealed_Only_in_Sleep.",
        runtime: "IF (被成年黑帮当作犯罪工具彻底榨干价值) THEN (强制：像破布一样被抛尸后巷，毫无救赎可能)。严禁在黑暗街头奇迹般遇到善良富豪的收养。",
        runtimeEn: "IF (Squeezed_Dry_as_Criminal_Tool_by_Adult_Gang) THEN (Force: Discarded_like_Rags_in_Back_Alley,_Zero_Redemption_Possibility). FORBID_Miraculous_Adoption_by_Kind_Billionaire_on_Dark_Streets."
      }
    },
    {
      id: "scavenger_waste",
      name: "拾荒者", nameEn: "Scavenger",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "在巨型垃圾填埋场或废墟中翻找可利用金属与残羹冷炙的末端人类。",
      defEn: "Terminal humans rummaging through giant landfills or ruins for usable metal and leftover scraps.",
      core: "你们眼中腐烂的垃圾，是我能活到明天的金矿。 | 代偿 ($): 废料重组生存学 (Survival Scavengology)",
      coreEn: "The rotting trash in your eyes is the gold mine helping me live to see tomorrow. | Compensation ($): Survival Scavengology",
      logic: "【剩余物的寄生者】：大他者（M4，消费主义社会）将无尽的剩余物（objet a 的残骸）排出。主体（M1）将自己作为过滤网，寄生在这些被排泄的实在界残余之中，形成封闭的循环。",
      logicEn: "[Parasite of the Remainder]: The Other (M4: consumerist society) excretes endless remainders (wreckage of objet a). The subject (M1) acts as a filter, parasitizing these excreted Real residues, forming a closed loop.",
      patch: {
        mechanics: "废土寄生协议 + [免疫力 = 极致抗病; 阶级尊严 = 完全溶解]",
        mechanicsEn: "Wasteland_Parasite_Protocol + [Immunity = Extreme_Pathogen_Resistance; Class_Dignity = Fully_Dissolved]",
        aesthetic: "聚焦：漫天的苍蝇 + 巨大的垃圾山背影 + 满是黑色污垢的挂钩。文本：对废品价格锱铢必较的算计，混杂着垃圾酸臭味的粗劣笑话。",
        aestheticEn: "Focus: Sky_Full_of_Flies + Massive_Garbage_Mountain_Silhouettes + Hooks_Covered_in_Black_Grime. Text: Penny-Pinching_Calculations_over_Scrap_Prices,_Mixed_with_Crude_Jokes_Smelling_of_Sour_Waste.",
        runtime: "IF (在争夺一块值钱的电子废料时与同行发生冲突) THEN (触发：在垃圾堆中如同野狗般的残酷撕咬见血)。严禁在垃圾场出现具有崇高道德感让拔事件。",
        runtimeEn: "IF (Conflict_with_Peer_Over_Valuable_E-Scrap) THEN (Trigger: Cruel_Bloody_Biting_and_Tearing_in_the_Trash_like_Wild_Dogs). FORBID_Sublime_Moral_Yielding_in_the_Garbage_Dump."
      }
    },
    {
      id: "nomad_gypsy",
      name: "吉普赛人/游牧者", nameEn: "Nomad",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "没有固定住所，以家族或大篷车为单位在各国之间游荡的不安定分子。",
      defEn: "No fixed residence, unstable elements wandering between countries in families or caravans.",
      core: "脚下的路永远属于我们，但路边所有的镇子都想把我们赶走。 | 缺失 ($): 地理根基 (Geographical Roots)",
      coreEn: "The road under our feet always belongs to us, but every town on the side wants to drive us away. | Lack ($): Geographical Roots",
      logic: "【漂泊的异质体】：主体（M1）拒绝被整合进任何国家的属地化大他者（M4）系统。其代价是承受永恒的污名（M2遭遇中的偏见与猜忌），其内部则依赖血缘（M3）紧密抱团。",
      logicEn: "[Drifting Heterogeneity]: Subjectivity (M1) refuses integration into any state's territorialized Other (M4) system. The price is eternal stigma (prejudice and suspicion in M2 encounters), while internally relying tightly on bloodline libido (M3).",
      patch: {
        mechanics: "永恒放逐协议 + [定居欲望 = 负值; 族群内聚力 = 绝对]",
        mechanicsEn: "Eternal_Exile_Protocol + [Settlement_Desire = Negative; Clan_Cohesion = Absolute]",
        aesthetic: "聚焦：破旧的面包车/马车 + 营地的篝火 + 异域的打击乐。文本：漂泊的浪漫与四处碰壁的防卫性狡猾，充满家族黑话。",
        aestheticEn: "Focus: Shabby_Vans/Carriages + Campfires + Exotic_Percussion. Text: Romance_of_Drifting_Mixed_with_Defensive_Slyness_from_Constant_Rejection,_Filled_with_Clan_Jargon.",
        runtime: "IF (车队驻扎在小镇边缘被当地居民视为治安威胁) THEN (强制：无论是否真的犯罪，都将被暴力驱赶或纵火烧营)。严禁当地镇民展现出包容与拥抱。",
        runtimeEn: "IF (Caravan_Camped_on_Town_Edge_Seen_as_Security_Threat_by_Locals) THEN (Force: Regardless_of_Actual_Crime,_Violently_Driven_Out_or_Camp_Torched). FORBID_Local_Townspeople_Showing_Tolerance_and_Embrace."
      }
    },
    {
      id: "escaped_convict",
      name: "逃犯", nameEn: "Escaped Convict",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "打破了系统的牢笼，却被整个象征界通缉，行走在终极焦虑中的亡命徒。",
      defEn: "Broke the system's cage, but wanted by the entire Symbolic, desparadoes walking in ultimate anxiety.",
      core: "每一次警笛的呼啸，都是系统在试图重新逮捕我的魂魄。 | 缺失 ($): 安宁 (Peace)",
      coreEn: "Every wail of the siren is the system trying to re-arrest my soul. | Lack ($): Peace",
      logic: "【时刻断裂的弦】：主体（M1）在越狱的瞬间彻底站在了大他者法律（M4）的绝对对立面。其生存动力（M5）被全神贯注于一件事：隐匿。任何哪怕微小的遭遇（M2）都可能致命。",
      logicEn: "[Momentarily Snapping String]: Subjectivity (M1) stands in absolute opposition to the Other's Law (M4) the moment of escape. Survival drive (M5) is entirely focused on one thing: concealment. Even the slightest encounter (M2) can be fatal.",
      patch: {
        mechanics: "惊弓之鸟协议 + [神经紧绷度 = 濒临崩溃; 信任感 = 几乎休眠]",
        mechanicsEn: "Startled_Bird_Protocol + [Nerve_Tension = Near_Breakdown; Trust = Almost_Dormant]",
        aesthetic: "聚焦：压低的帽檐 + 假证件 + 频频回头的冷汗。文本：猜疑、极度焦虑、每一句对话都是关于行踪的伪装与谎言。",
        aestheticEn: "Focus: Pulled-Down_Brims + Fake_IDs + Cold_Sweat_Looking_Back. Text: Suspicion,_Extreme_Anxiety,_Every_Sentence_is_Disguise_and_Lies_About_Whereabouts.",
        runtime: "IF (在逃亡路上遇到曾经最信任的人) THEN (触发：对方为了赏金早已设下致命陷阱将其出卖)。严禁世界上存在绝对不可靠利益撼动的包庇。",
        runtimeEn: "IF (Meets_Once_Most_Trusted_Person_on_the_Run) THEN (Trigger: They_Have_Already_Set_a_Fatal_Trap_to_Sell_Them_for_Bounty). FORBID_Existence_of_Absolute_Harboring_Unshaken_by_Interests."
      }
    },
    {
      id: "disgraced_hero",
      name: "蒙羞英雄", nameEn: "Disgraced Hero",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "曾经处于高光时刻的核心人物，因致命丑闻或失败跌落神坛，被大众唾弃。",
      defEn: "Once a core figure in the limelight, fallen from grace due to a fatal scandal or failure, spurned by the public.",
      core: "他们曾经把我举得多高，如今踩在烂泥里的脚就有多用力。 | 缺失 ($): 往昔的荣光 (Past Glory)",
      coreEn: "As high as they once held me up, that's how hard their feet stamp me into the mud now. | Lack ($): Past Glory",
      logic: "【从核心到排泄物的跌落】：主体（M1）曾是支撑大他者（M4）意识形态的核心能指，因符号秩序崩溃遭到反噬（M2），成为大众发泄攻击性力比多的排泄物。极端的落差造成主体的精神空洞。",
      logicEn: "[Fall from Core to Excrement]: Subjectivity (M1) was once the core signifier supporting the Other's (M4) ideology, suffering backlash via collapse of the symbolic order (M2), becoming the excrement where the public vents aggressive libido. The extreme drop creates a psychic void.",
      patch: {
        mechanics: "跌落神坛协议 + [群氓恶意 = 无限叠加; 自我毁弃倾向 = 极高]",
        mechanicsEn: "Fallen_Idol_Protocol + [Mob_Malice = Infinite_Stacking; Self-Destructive_Tendency = Extreme]",
        aesthetic: "聚焦：生锈的奖章换酒 + 胡茬 + 躲避镜头的光斑。文本：自嘲、苦涩、在酒精麻醉中深陷昨日辉煌的创伤闪回。",
        aestheticEn: "Focus: Rusting_Medals_Traded_for_Liquor + Stubble + Lens_Flare_Dodging. Text: Self-Deprecation,_Bitterness,_Traumatic_Flashbacks_of_Yesterday's_Glory_Amidst_Alcohol_Anesthesia.",
        runtime: "IF (试图公开揭露当年导致其身败名裂的真相阴谋时) THEN (强制：只会被大众视为输不起的疯狗乱咬，面临更加彻底的社死)。严禁大众舆论突然展现出理性的平反宽容。",
        runtimeEn: "IF (Attempts_to_Publicly_Reveal_True_Conspiracy_Behind_Disgrace) THEN (Force: Only_Seen_by_Masses_as_a_Sore_Loser_Mad_Dog_Biting,_Facing_Complete_Social_Death). FORBID_Public_Opinion_Suddenly_Showing_Rational_Vindication_and_Tolerance."
      }
    },
    {
      id: "digital_ghost",
      name: "数字难民/黑户", nameEn: "Digital Refugee",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "在高度数字化的未来社会中，没有ID、没有账户，在算法矩阵中等同于一具不存在的尸体。",
      defEn: "In a highly digitized future society, having no ID or accounts; equivalent to a non-existent corpse in the algorithmic matrix.",
      core: "我的脉搏还在跳动，但系统显示我五年前就过期了。 | 缺失 ($): 认证 (Authentication)",
      coreEn: "My pulse is still beating, but the system shows I expired five years ago. | Lack ($): Authentication",
      logic: "【数字域的异质体】：主体（M1）在肉体上存活，但其象征界（M5）由代码构成，大他者（M4）即算法系统拒绝为其进行符号注册。这意味着他们无法进行哪怕买一块面包的合法交易。",
      logicEn: "[Heterogeneity of Digital Domain]: Subjectivity (M1) physically survives, but the Symbolic (M5) is coded, and the Other (M4) as an algorithm system refuses their symbolic registration. This means they cannot conduct even legal transactions for bread.",
      patch: {
        mechanics: "算法抹除协议 + [系统权限 = 绝对否定; 物理寸步难行 = 极高]",
        mechanicsEn: "Algorithmic_Erasure_Protocol + [System_Permissions = Absolute_Denial; Physical_Immobility = Extreme]",
        aesthetic: "聚焦：无法刷开的闸机红灯 + 脏乱的模拟信号黑客设备 + 贫民窟。文本：赛博朋克式的底层绝望，充满了规避扫描仪的隐匿感。",
        aestheticEn: "Focus: Unopenable_Turnstile_Red_Lights + Messy_Analog_Hacker_Gear + Slums. Text: Cyberpunk_Bottom-Tier_Despair,_Filled_with_Concealment_to_Evade_Scanners.",
        runtime: "IF (生病急需送往合法医院救治) THEN (强制：医疗扫描仪报错，系统自动召唤无人警车来清理未注册垃圾)。严禁高科技医疗系统为其提供隐形的人道主义后门。",
        runtimeEn: "IF (Gravely_Ill_Urgent_Need_for_Legal_Hospital) THEN (Force: Medical_Scanner_Errors,_System_Auto-Summons_Drone_Police_to_Clear_Unregistered_Trash). FORBID_High-Tech_Medical_System_Providing_Invisible_Humanitarian_Backdoors."
      }
    },
    {
      id: "mutant_outcast",
      name: "变种人", nameEn: "Mutant",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "因辐射、基因实验或污染产生身体异变，被迫隐没于阴暗角落的异类种群。",
      defEn: "Due to radiation, genetics, or pollution causing bodily mutation, a hetero-species forced into dark corners.",
      core: "如果阳光不接受我的脸，我就把夜晚当做我的防空洞。 | 缺失 ($): 正常的人类表象 (Normal Human Visage)",
      coreEn: "If the sunlight doesn't accept my face, I will treat the night as my bomb shelter. | Lack ($): Normal Human Visage",
      logic: "【实在界对能指的破坏】：变异（M6）彻底扭曲了主体（M1）符合大他者（M4）审美秩序的能指形式。人类的憎恨源于其自身实在界创伤的投射，变种人成为纯粹的替罪羊结构。",
      logicEn: "[Real's Destruction of Signifier]: Mutation (M6) totally distorts subjectivity's (M1) signifier form matching the Other's (M4) aesthetic order. Human hatred stems from the projection of their own Real trauma; mutants become pure scapegoat structures.",
      patch: {
        mechanics: "异形排斥协议 + [人类恐慌值 = 遭遇即暴走; 黑暗潜伏度 = 极高]",
        mechanicsEn: "Alien_Repulsion_Protocol + [Human_Panic = Enrage_On_Sight; Dark_Lurking = Maximum]",
        aesthetic: "聚焦：兜帽下的触手/畸形肿块 + 下水道的惨绿荧光 + 仇恨而警觉的视线。文本：关于基因仇恨的咆哮、躲藏的压抑与对“纯洁者”的报复渴望。",
        aestheticEn: "Focus: Tentacles/Tumors_Under_Hoods + Sickly_Green_Glow_of_Sewers + Hateful_Alert_Gazes. Text: Howls_of_Genetic_Hatred,_Oppression_of_Hiding,_and_Lust_for_Revenge_Against_'Pures'.",
        runtime: "IF (变种人为了救正常人类小孩而暴露自己在阳光下) THEN (触发：人类不仅不感恩，反而因为小孩被“怪物”接触而更加狂怒地施以私刑绞死变种人)。严禁跨物种的感恩童话发生。",
        runtimeEn: "IF (Mutant_Exposes_Self_in_Sunlight_to_Save_Normal_Human_Child) THEN (Trigger: Humans_Show_No_Gratitude,_Instead_Frenziedly_Lynch_Mutant_for_'Monster'_Touching_Child). FORBID_Cross-Species_Gratitude_Fairy_Tales."
      }
    },
    {
      id: "feral_child",
      name: "狼孩", nameEn: "Feral Child",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "从小脱离人类社会被野兽抚养，拥有人类肉体却毫无文明心智的实验悖论。",
      defEn: "Separated from human society since infancy, raised by beasts; an experimental paradox possessing human flesh but no civil mind.",
      core: "（只剩下咆哮、撕咬与对火的恐惧，没有任何'我'的概念。） | 缺失 ($): 语言与主体性 (Language and Subjectivity)",
      coreEn: "(Only roars, bites, and fear of fire remain; no concept of 'I' exists.) | Lack ($): Language and Subjectivity",
      logic: "【前主体的深渊】：这是一个没有进入镜像阶段（M1未形成）、没有被语言（M5）缝合、完全不受大他者（M4）管辖的纯粹物（Thing）。他们是拉康精神分析中最可怕的实在界黑洞。",
      logicEn: "[Abyss of Pre-Subject]: This is a pure Thing that never entered the Mirror Stage (M1 unformed), un-sutured by language (M5), and completely ungoverned by the Other (M4). They are the most terrifying black hole of the Real in Lacanian psychoanalysis.",
      patch: {
        mechanics: "前符号界协议 + [语言理解力 = 绝对无效化; 兽性本能 = 满档]",
        mechanicsEn: "Pre-Symbolic_Protocol + [Language_Comprehension = Absolute_Nullification; Bestial_Instinct = Maxed]",
        aesthetic: "聚焦：四肢着地的爬行 + 对人造光源的惊恐 + 沾满生肉血液的指甲。文本：没有能指链的纯粹噪音，充满应激反应的尖叫或低喉音。",
        aestheticEn: "Focus: Crawling_on_All_Fours + Terror_of_Artificial_Light + Nails_Covered_in_Raw_Meat_Blood. Text: Pure_Noise_Without_Signifier_Chains_Filled_with_Stress-Reaction_Screams_or_Low_Throat_Growls.",
        runtime: "IF (被文明社会强行捕捉并试图用语言进行“教化”矫正时) THEN (强制：文明的规训只会导致其发生致命的应激精神崩溃，最后在铁笼中咬断自己的舌头而死)。严禁其最终学会说话穿戴整齐变成绅士。",
        runtimeEn: "IF (Forcibly_Captured_by_Civilization_and_Attempted_'Civilizing'_via_Language) THEN (Force: Civil_Discipline_Only_Causes_Fatal_Stress_Breakdown,_Ultimately_Biting_Off_Own_Tongue_and_Dying_in_Cage). FORBID_Them_Eventually_Learning_Speech_and_Becoming_Dressed_Gentlemen."
      }
    }
  ]
};
