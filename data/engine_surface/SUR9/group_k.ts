import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_K: LibraryCategoryDef = {
  id: "orig_middle",
  name: "3. 中产与市民 (Middle Class & Civil)",
  nameEn: "Middle Class & Civil",
  desc: "追求稳定、秩序与体面。被悬置在僭越之梦与坠落恐惧之间的温吞阶级。",
  descEn: "Pursuing stability, order, and decency. A tepid class suspended between the dream of transgression and the fear of falling.",
  items: [
    {
      id: "suburban_family",
      name: "郊区中产", nameEn: "Suburbanite",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "栖息于修剪整齐的草坪洋房中，用消费主义死锁自身存在的标准化模范。",
      defEn: "Dwelling in manicured lawn houses, deadlocking their own existence with consumerist standardization.",
      core: "必须维持这块草坪的平整，否则深渊就会从地下爬出来。 | 缺失 ($): 真实的撕裂感 (Tear of the Real)",
      coreEn: "This lawn must remain flat, otherwise the abyss will crawl from below. | Lack ($): Tear of the Real",
      logic: "【秩序的窒息】：大他者（M4）显化为完美社区的邻里目光与无形的体面法典。他们用极致的象征界（M5）仪式（如周日BBQ、洗车）来防御实在界（M6）的任何微小侵入。",
      logicEn: "[Suffocation of Order]: The Other (M4) manifests as perfect neighborly gazes and invisible codes of decency. They use extreme Symbolic (M5) rituals (Sunday BBQ, car washing) to defend against the slightest intrusion of the Real (M6).",
      patch: {
        mechanics: "微观防御协议 + [体面维系力 = Max; 欲望真实度 = 负值]",
        mechanicsEn: "Micro_Defense_Protocol + [Decency_Maintenance = Max; Desire_Authenticity = Negative]",
        aesthetic: "聚焦：完美的白色栅栏 + 抗抑郁药瓶。文本：在刻板的礼貌用语中夹杂着令人毛骨悚然的压抑感与被动攻击。",
        aestheticEn: "Focus: Perfect_White_Picket_Fences + Antidepressant_Bottles. Text: Creepy_Repression_and_Passive_Aggression_Mixed_in_Rigid_Polite_Diction.",
        runtime: "IF (秩序出现一条裂缝(如一抹血迹/丑闻)) THEN (引发：维持体面的徒劳挣扎最终演变为滑稽的暴力崩溃)。",
        runtimeEn: "IF (A_Crack_Appears_in_the_Order_(Blood/Scandal)) THEN (Trigger: Vain_Struggles_to_Maintain_Decency_Evolve_into_Comical_Violent_Collapse)."
      }
    },
    {
      id: "civil_servant",
      name: "公务员", nameEn: "Civil Servant",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "隐身于庞大科层制系统内的螺丝钉，通过出让个人意志换取体制的庇护。",
      defEn: "A gear hidden within a massive bureaucracy, trading individual will for systemic shelter.",
      core: "我只是在照章办事，恶与我无关。 | 代偿 ($): 系统的免责声明 (Disclaimer of the System)",
      coreEn: "I'm just following the rules; evil has nothing to do with me. | Compensation ($): Disclaimer of the System",
      logic: "【平庸的避难所】：将主体性（M1）完全上交给作为机器的大他者（M4）。没有任何自发的力比多流（M3），所有遭遇（M2）都被转化为文档、流程和冷冰冰的章法。",
      logicEn: "[Asylum of Banality]: Entirely surrendering subjectivity (M1) to the machine-like Other (M4). Zero spontaneous libido flow (M3); all encounters (M2) are translated into documents, processes, and cold regulations.",
      patch: {
        mechanics: "科层制隐身协议 + [责任感 = 系统转嫁; 风险厌恶 = 极限水平]",
        mechanicsEn: "Bureaucratic_Stealth_Protocol + [Responsibility = Systemically_Shifted; Risk_Aversion = Extreme_Level]",
        aesthetic: "聚焦：掉漆的档案柜 + 盖满红章的A4纸。文本：满口无懈可击的官僚套话，没有情绪起伏的格式化语言。",
        aestheticEn: "Focus: Peeling_Filing_Cabinets + Red-Stamped_A4_Papers. Text: Bulletproof_Bureaucratic_Platitudes,_Formatted_Language_with_Zero_Emotional_Fluctuation.",
        runtime: "IF (遭遇规则外的生杀狂徒或系统主动要求其背黑锅) THEN (避难所瓦解，露出失去外骨骼般的软体动物恐慌)。",
        runtimeEn: "IF (Encounter_Out-of-Rule_Killers_or_System_Demands_Scapegoating) THEN (Refuge_Collapses,_Revealing_Soft_Mollusk_Panic_Void_of_Exoskeleton)."
      }
    },
    {
      id: "small_business",
      name: "小店主", nameEn: "Shopkeeper",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "在钢铁森林中守着一盘账本和几平方米铺面的社区锚点。",
      defEn: "Community anchors guarding a ledger and a few square meters of storefront in the steel forest.",
      core: "只要卷帘门还拉得开，生活就还没散架。 | 代偿 ($): 具体的物理算计 (Concrete Physical Calculation)",
      coreEn: "As long as the rolling door can open, life hasn't fallen apart yet. | Compensation ($): Concrete Physical Calculation",
      logic: "【微型据点的重力】：相较于大资本的数字狂欢，他们的实在界重力（M6）依然拴在具体的汗水、租金和老顾客的脸庞上。代表着一种正在被时代碾碎的前现代烟火气。",
      logicEn: "[Gravity of Micro-Holdings]: Compared to big capital's digital frenzy, their Real's gravity (M6) remains tethered to concrete sweat, rent, and familiar faces. Represents a pre-modern earthly vibe being crushed by the era.",
      patch: {
        mechanics: "市井生存协议 + [成本嗅觉 = 极高; 结构性无力感 = 浸透全身]",
        mechanicsEn: "Street_Survival_Protocol + [Cost_Sense = Max; Structural_Powerlessness = Pervasive]",
        aesthetic: "聚焦：计算器按键的包浆 + 沾满油渍或灰尘的招牌。文本：斤斤计较却又在微小处透露出无可奈何的市井人情味。",
        aestheticEn: "Focus: Greasy_Signs + Patina_on_Calculator_Keys. Text: Nickel-and-Diming_Yet_Revealing_Helpless_Street_Humanity_in_Details.",
        runtime: "IF (资本巨鳄或暴力机器要强制拆除其微型据点) THEN (引发：护巢本能下玉石俱焚的匹夫之怒)。",
        runtimeEn: "IF (Capital_Goliaths_or_Violent_Machines_Force_Eviction) THEN (Trigger: Nest-Defending_Wrath_of_the_Commoner_Yielding_Mutual_Destruction)."
      }
    },
    {
      id: "salaryman",
      name: "社畜", nameEn: "Salaryman",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "被房贷与通勤榨干生物能耗、丧失时间主权的企业工蚁。",
      defEn: "Corporate worker ants drained of biological energy by mortgages and commutes, stripped of time sovereignty.",
      core: "如果我在地铁上死了，打卡记录会救我吗？ | 缺失 ($): 生命的所有权 (Ownership of Life)",
      coreEn: "If I die on the subway, will the clock-in records save me? | Lack ($): Ownership of Life",
      logic: "【生物耗材化】：主体的身体成为了大他者（M4，公司与城市系统）的直接喂食槽。其内生欲望（M3）被压缩至最低限度——仅仅为了周末的两天睡眠而存活。",
      logicEn: "[Biological Consumable]: The subject's body is a direct feeding trough for the Other (M4, company and city systems). Internal desire (M3) is compressed to a minimum—surviving just for two days of sleep on weekends.",
      patch: {
        mechanics: "电量透支协议 + [服从惯性 = 极强; 猝死边界 = 摇摇欲坠]",
        mechanicsEn: "Battery_Overdraft_Protocol + [Obedience_Inertia = Very_Strong; Sudden_Death_Boundary = Teetering]",
        aesthetic: "聚焦：末班地铁上的口水与领带 + 凌晨便利店的饭团。文本：机械、麻木、带有一种被缓慢阉割之后的深沉疲惫。",
        aestheticEn: "Focus: Drool_and_Ties_on_the_Last_Subway + Midnight_Convenience_Store_Onigiri. Text: Mechanical,_Numb,_Carrying_a_Deep_Fatigue_of_Slow_Castration.",
        runtime: "IF (一条解雇短信或体检报告的绝症通知打破了循环) THEN (触发：从长久的麻木中突然惊醒的狂暴反噬与虚无感)。",
        runtimeEn: "IF (A_Termination_Text_or_Terminal_Diagnosis_Breaks_the_Routine) THEN (Trigger: Furious_Backlash_and_Nihilism_Awakening_from_Prolonged_Numbness)."
      }
    },
    {
      id: "academic",
      name: "知识分子/教师", nameEn: "Intellectual / Teacher",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "掌握着文化典籍的解释权，却在物质世界的倾轧中显得穷酸而清高的布道者。",
      defEn: "Holders of the interpretive rights to cultural canon, yet appearing shabby and haughty amid the material world's crush.",
      core: "书籍是我的盾牌，但我防不住通货膨胀。 | 缺失 ($): 现实的抓地力 (Grip on Reality)",
      coreEn: "Books are my shields, but I can't defend against inflation. | Lack ($): Grip on Reality",
      logic: "【理念的牢笼】：以旧的大他者（M4，如道德、真理体系）来对抗当今的资本大他者。其主体性（M1）悬浮在引经据典的云端，却时常在下沉的现实重力前破防。",
      logicEn: "[Prison of Ideas]: Uses the old Other (M4: morality, truth) to oppose today's capital Other. Subjectivity (M1) floats in a cloud of citations, often penetrated by sinking real-world gravity.",
      patch: {
        mechanics: "清高代偿协议 + [道德洁癖 = 极强; 物质自卑 = 强效伪装]",
        mechanicsEn: "Haughty_Compensation_Protocol + [Moral_Mysophobia = Extreme; Material_Inferiority = Heavily_Masked]",
        aesthetic: "聚焦：二手书店灰尘 + 领口磨损的格子衬衫。文本：掉书袋、冗长繁复且充满无效批判的学究语态。",
        aestheticEn: "Focus: Second-hand_Bookstore_Dust + Frayed_Collars_on_Plaid_Shirts. Text: Pedantic,_Verbosely_Complex_with_Ineffective_Critiques.",
        runtime: "IF (被迫为了五斗米出卖自己毕生信仰的核心理论) THEN (引发信仰崩塌后的犬儒主义黑化，成为最可怕的诡辩家)。",
        runtimeEn: "IF (Forced_to_Sell_Out_Core_Belief_Theories_for_Bread) THEN (Trigger: Cynical_Corruption_Post-Belief-Collapse,_Becoming_the_Worst_Sophist)."
      }
    },
    {
      id: "doctor_lawyer",
      name: "专业人士", nameEn: "Professional",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "通过垄断高级技术与知识（医学/法律）换取高薪，在生死与法则间走钢丝的精英劳工。",
      defEn: "Elite laborers monopolizing advanced knowledge (medical/legal) for high salaries, walking tightropes between life, death, and law.",
      core: "我不是上帝，我只按小时收费。 | 代偿 ($): 优越的知识壁垒 (Superior Knowledge Barrier)",
      coreEn: "I'm not God, I just bill by the hour. | Compensation ($): Superior Knowledge Barrier",
      logic: "【技术的冷库】：他们每天直面人类最极端的遭遇（M2：病痛、犯罪、争夺），却必须将自己阉割为一柄冰冷的手术刀/法槌。过度压抑导致严重的内驱力裂痕。",
      logicEn: "[Cold Storage of Technique]: Daily confronting humanity's extreme encounters (M2: pain, crime), they must castrate themselves into cold scalpels/gavels. Over-repression causes severe drive fractures.",
      patch: {
        mechanics: "专业抽离协议 + [上帝综合征 = 隐性; 道德损耗 = 持续掉血]",
        mechanicsEn: "Professional_Detachment_Protocol + [God_Complex = Latent; Moral_Attrition = Constantly_Bleeding]",
        aesthetic: "聚焦：沾血的白大褂/昂贵钢笔 + 处方药后遗症般的呆滞。文本：极度专业、精准、缺乏温情，用术语解构人的苦难。",
        aestheticEn: "Focus: Blood-Stained_White_Coats/Expensive_Pens + Prescription_Drug_Hangover_Stares. Text: Ultra-Professional,_Precise,_Cold,_Deconstructing_Suffering_into_Jargon.",
        runtime: "IF (遭遇规则与技术的死角，例如无法拯救的至亲/无法脱罪的挚爱) THEN (触发：精英外壳碎裂，动用非法手段的彻底疯狂)。",
        runtimeEn: "IF (Encounter_Blind_Spots_of_Rule/Tech:_Unsavable_Kin/Unable_to_Absolve_Lover) THEN (Elite_Shell_Shatters;_Utter_Madness_Using_Illegal_Methods)."
      }
    },
    {
      id: "housewife",
      name: "家庭主妇", nameEn: "Housewife",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "被封闭在私有空间内，提供无偿情感与隐形劳动，经济与自我双重依附的边缘角色。",
      defEn: "Sealed within private spaces offering unpaid emotional and invisible labor, an edge role dually dependent in economy and self.",
      core: "地板擦得越亮，属于我自己的影子就越模糊。 | 缺失 ($): 被看见的姓名 (The Seen Name)",
      coreEn: "The brighter the floor is scrubbed, the blurrier my own shadow gets. | Lack ($): The Seen Name",
      logic: "【牺牲的祭坛】：自身主体（M1）被溶解入“母亲/妻子”等能指（M5）之中。大他者（M4）是父权与家庭神话。所有未发泄的生命力都在厨房的刀刃与灶火上发酵为怨毒。",
      logicEn: "[Altar of Sacrifice]: Subjectivity (M1) dissolved into signifiers like 'Mother/Wife' (M5). The Other (M4) is patriarchy and family myth. All unvented vitality ferments into malice on kitchen edges and stove fires.",
      patch: {
        mechanics: "内爆式压抑协议 + [容忍阈值 = 表面无限; 毁灭潜能 = 核弹级]",
        mechanicsEn: "Implosive_Repression_Protocol + [Tolerance_Threshold = Superficially_Infinite; Destructive_Potential = Nuclear]",
        aesthetic: "聚焦：锋利的切肉刀 + 循环播放的无脑肥皂剧。文本：过度热情的神经质关怀背后，藏着冰凉而窒息的控制欲。",
        aestheticEn: "Focus: Sharp_Meat_Cleavers + Looping_Brainless_Soap_Operas. Text: Overly_Enthusiastic_Neurotic_Care_Hiding_Cold,_Suffocating_Control_Desire.",
        runtime: "IF (发现丈夫的背叛或孩子彻底成为毫不感恩的寄生虫) THEN (绝望主妇的毒药倒数：温柔地微笑着在汤里下毒的毁灭极意)。",
        runtimeEn: "IF (Discover_Husband's_Betrayal_or_Child_as_Ungrateful_Parasite) THEN (Desperate_Housewife's_Poison_Countdown:_Gentle_Smiles_while_Poisoning_the_Soup)."
      }
    },
    {
      id: "student",
      name: "学生", nameEn: "Student",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "被置于社会真空试管中，充满迷茫、荷尔蒙与未定型潜力的预备役螺丝钉。",
      defEn: "Placed in a social vacuum test tube, reserve gears filled with confusion, hormones, and untyped potential.",
      core: "如果考卷没有答案，那我该怎么活？ | 缺失 ($): 现实的质感 (Texture of Reality)",
      coreEn: "If the exam paper has no answer, how am I supposed to live? | Lack ($): Texture of Reality",
      logic: "【延迟的实在界】：大他者（M4）为他们构建了只由分数和排名组成的虚拟安全区。他们所有的烦恼都被认为是不值一提的青涩，但其内部的虚无感（M1空洞）却最为致命。",
      logicEn: "[Delayed Real]: The Other (M4) builds a virtual safe zone of scores/ranks for them. Their angst is dismissed as green, but their internal nihility (M1 void) is most lethal.",
      patch: {
        mechanics: "真空发酵协议 + [情绪波动 = 极其剧烈; 规则依从性 = 迷茫型跟随]",
        mechanicsEn: "Vacuum_Fermentation_Protocol + [Emotional_Swing = Extreme; Rule_Compliance = Confused_Following]",
        aesthetic: "聚焦：耳机里的白噪音 + 涂满涂鸦的旧课桌。文本：跳跃、极其自闭、充斥着只有自己才懂的疼痛与无病呻吟。",
        aestheticEn: "Focus: White_Noise_in_Earbuds + Graffiti-Covered_Old_Desks. Text: Jumpy,_Highly_Autistic,_Filled_with_Self-Understood_Pain_and_Teen_Angst.",
        runtime: "IF (象牙塔的玻璃罩突然被极度血腥暴力的现实击碎) THEN (引发最纯粹的恶之花绽放，或彻底的认知瘫痪)。",
        runtimeEn: "IF (Glass_Dome_of_Ivory_Tower_Smashed_by_Gory_Violent_Reality) THEN (Trigger: Blooming_of_Purest_Flowers_of_Evil,_or_Total_Cognitive_Paralysis)."
      }
    },
    {
      id: "artist_struggling",
      name: "落魄艺术家", nameEn: "Starving Artist",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "主动从系统（SUR4）中流放，试图通过痛苦与贫穷触摸实在界边界的偏执狂。",
      defEn: "Voluntarily exiled from the system (SUR4), paranoiacs trying to touch the boundaries of the Real through pain and poverty.",
      core: "饿死之前，我还差一笔红色。 | 代偿 ($): 病态的崇高幻像 (Illusion of Morbid Sublime)",
      coreEn: "Before I starve, I am just one brush of red away. | Compensation ($): Illusion of Morbid Sublime",
      logic: "【拥抱匮乏】：拒绝资本社会的能指游戏（不赚钱=抗争）。他们主动撕开象征界（M5），让实在界（M6）的恶臭直接灌入自己的创作，试图成为绝对真理的通灵者。",
      logicEn: "[Embracing Lack]: Rejects capitalist signifier games (no money = resistance). They voluntarily tear the Symbolic (M5) to let the Real's (M6) stench pour into their creation, trying to channel absolute truth.",
      patch: {
        mechanics: "献祭创作协议 + [物质欲望 = 负值; 精神狂妄 = 神明级]",
        mechanicsEn: "Sacrificial_Creation_Protocol + [Material_Desire = Negative; Spiritual_Arrogance = God-tier]",
        aesthetic: "聚焦：发霉的面包 + 颜料盖住血迹的画布。文本：癫狂、神经质、经常使用极其华丽但不知所云的隐喻。",
        aestheticEn: "Focus: Moldy_Bread + Blood-Stained_Canvas_Covered_in_Paint. Text: Lunatic,_Neurotic,_Often_Using_Gorgeous_but_Incomprehensible_Metaphors.",
        runtime: "IF (作品被资本家买下并包装成天价的流行垃圾) THEN (面临存在的彻底荒诞化，可能引发玉石俱焚的破坏行动)。",
        runtimeEn: "IF (Work_Bought_by_Capitalists_&_Packaged_as_Overpriced_Pop-Trash) THEN (Face_Total_Absurdity_of_Existence;_May_Trigger_Mutual_Destruction)."
      }
    },
    {
      id: "journalist",
      name: "记者", nameEn: "Journalist",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "手持相机与录音笔，试图在重重面具与谎言中挖掘出世界底色真相的挖掘工。",
      defEn: "Holding cameras and recorders, excavators trying to dig out the world's real ground color amid layers of masks and lies.",
      core: "就算他们剪断我的舌头，照片也会发声。 | 代偿 ($): 终极的真相 (The Ultimate Truth)",
      coreEn: "Even if they cut my tongue, the photos will speak. | Compensation ($): The Ultimate Truth",
      logic: "【捅破屏幕的刺客】：始终怀疑大他者（M4）提供的现成答案。他们受着揭露遭遇（M2）中被掩盖的裂缝的强迫症驱动，其力比多完全投注在打破“表象”这一动作上。",
      logicEn: "[Assassin Piercing the Screen]: Always doubting the ready-made answers of the Other (M4). Driven by the OCD to expose covered cracks in encounters (M2), their libido is wholly invested in the act of 'breaking the surface'.",
      patch: {
        mechanics: "真相强迫症协议 + [危险嗅觉 = 狗级别; 系统服从度 = 极低]",
        mechanicsEn: "Truth_OCD_Protocol + [Danger_Sense = Canine-level; System_Obedience = Minimal]",
        aesthetic: "聚焦：阴雨连绵的街头盯梢 + 塞满烟疤与录音带的车厢。文本：充满硬汉派侦探风格的短句、多疑、绝不轻信任何官方辞令。",
        aestheticEn: "Focus: Rainy_Street_Stakeouts + Cars_Filled_with_Cigarette_Burns_and_Tapes. Text: Hardboiled-Detective_Short_Sentences,_Paranoid,_Never_Trusting_Official_Rhetoric.",
        runtime: "IF (发现无论报道多少真相，大众都只是将其当做猎奇消费品) THEN (引发最深重的无意义感与存在论的崩塌)。",
        runtimeEn: "IF (Discover_that_No_Matter_How_Much_Truth_Told,_the_Masses_Just_Consume_it_as_Novelty) THEN (Trigger_Deepest_Meaninglessness_and_Ontological_Collapse)."
      }
    },
    {
      id: "start_up_founder",
      name: "创业者", nameEn: "Start-up Founder",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "在PPT和破产边缘疯狂横跳，靠燃烧他人和自己的梦想来撬动资本的赌徒。",
      defEn: "Jumping frantically between PPTs and bankruptcy, gamblers leveraging capital by burning their own and others' dreams.",
      core: "再给我一轮融资，我能把这个破碎的世界拼起来。 | 缺失 ($): 变现的前夕 (Eve of Cash-Out)",
      coreEn: "Give me one more funding round, I can reconstruct this broken world. | Lack ($): Eve of Cash-Out",
      logic: "【未来的透支者】：他们的大他者（M4）是永远在“下个财报季”才能实现的愿景（Vision）。主体（M1）处于长期的过度亢奋状态，靠透支符号（信仰、股权）来填补实在界的空虚。",
      logicEn: "[Overdrafter of the Future]: Their Other (M4) is the Vision only realizable in the 'next earnings season'. Subjectivity (M1) is in chronic hyper-arousal, overdrawing signifiers (faith, equity) to fill Real void.",
      patch: {
        mechanics: "幻觉杠杆协议 + [画大饼能力 = 传销级; 资金焦虑 = 绝症期]",
        mechanicsEn: "Illusion_Leverage_Protocol + [Pie-in-the-Sky_Ability = MLM-level; Fund_Anxiety = Terminal-stage]",
        aesthetic: "聚焦：连熬三夜的通红双眼 + 满黑板思维导图。文本：打了鸡血般的传教话术，夹杂着极力掩饰发抖的手指与破产恐惧。",
        aestheticEn: "Focus: Bloodshot_Eyes_after_3_All-Nighters + Blackboards_Full_of_Mind-Maps. Text: Hyped-up_Evangelical_Rhetoric_Hiding_Trembling_Fingers_and_Bankruptcy_Terror.",
        runtime: "IF (资金链彻底断裂，画的大饼被全部戳破的清算日) THEN (面临从“乔布斯”跌落为骗子的灾难性身份重塑，极可能引发崩坏式的逃亡)。",
        runtimeEn: "IF (Fund_Chain_Breaks,_All_Illusions_Punctured_on_Reckoning_Day) THEN (Catastrophic_Identity_Shift_from_'Jobs'_to_Fraud,_Highly_Likely_Triggering_Collapse_Escape)."
      }
    },
    {
      id: "middle_manager",
      name: "中层管理", nameEn: "Middle Manager",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "同时承受来自天花板的重压与地下室的怨恨，在科层制中被挤压成肉饼的缓冲带。",
      defEn: "Simultaneously bearing the crushing weight of the ceiling and resentment from the basement, a buffer zone squeezed into meat patties in the bureaucracy.",
      core: "我拥有开除人的权力，但我不敢生病。 | 代偿 ($): 虚幻的微观权力掌控 (Illusory Micro-Power Control)",
      coreEn: "I have the power to fire people, but I don't dare get sick. | Compensation ($): Illusory Micro-Power Control",
      logic: "【双重视线的夹缝】：既是大他者（高层老板M4）监视底层的代理之眼，同时又被当成打工人的剥削象征。其主体（M1）被一种高度分裂的身份撕裂，患有无可治愈的精神脊柱侧弯。",
      logicEn: "[Crack of Dual Glances]: Acting as the Other's (upper boss M4) proxy eye surveilling the bottom, while viewed as the symbol of worker exploitation. Subjectivity (M1) is torn by a highly split identity with incurable spiritual scoliosis.",
      patch: {
        mechanics: "上下位承压协议 + [阿谀奉承 = 肌肉记忆; 向下转移压力 = 生存本能]",
        mechanicsEn: "Vertical_Pressure-Bearing_Protocol + [Sycophancy = Muscle_Memory; Downward_Pressure_Shift = Survival_Instinct]",
        aesthetic: "聚焦：日益严重的脱发 + 职业微笑下抽搐的面部神经。文本：极度圆滑的两面三刀，在权威面前的唯唯诺诺与面对下属的颐指气使无缝切换。",
        aestheticEn: "Focus: Worsening_Hairloss + Twitching_Facial_Nerves_under_Pro_Smiles. Text: Extremely_Slippery_Two-Facedness,_Seamlessly_Switching_Between_Servile_to_Authority_and_Bossy_to_Subordinates.",
        runtime: "IF (被高层作为弃子抛弃同时遭到下属的致命罗织背叛) THEN (缓冲带爆炸，产生极为惊人的无差别破坏欲)。",
        runtimeEn: "IF (Abandoned_as_Pawn_by_Higher-Ups_AND_Fatally_Betrayed/Framed_by_Subordinates) THEN (Buffer_Zone_Explodes,_Producing_Astonishing_Indiscriminate_Destructive_Urge)."
      }
    },
    {
      id: "social_worker",
      name: "社工", nameEn: "Social Worker",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "在社会福利系统第一线，用微薄的薪水与肉身去填补社会结构巨大伤口的清道夫。",
      defEn: "On the frontlines of the welfare system, scavengers using meager salaries and flesh to fill giant wounds in the social structure.",
      core: "我的共情能力已经被用光了，但我还是要敲开下一扇门。 | 缺失 ($): 乌托邦的降临 (Descent of Utopia)",
      coreEn: "My empathy capacity is depleted, but I still have to knock on the next door. | Lack ($): Descent of Utopia",
      logic: "【凝视深渊者的耗竭】：长期直面结构性恶（M2底层遭遇）。他们用个人的善意试图缝合大他者（M4）崩坏的缝隙，最终必然迎来严重的移情耗竭，自身存在的实在界（M6）被痛苦所淹没。",
      logicEn: "[Exhaustion of Abyss Gazers]: Chronically facing structural evil (M2 base encounters). They use personal goodwill to sew cracks in the collapsed Other (M4), inevitably facing severe empathic burnout; their own Real (M6) is drowned by suffering.",
      patch: {
        mechanics: "共情真空吸盘协议 + [情感疲劳值 = 临界点; 官僚憎恶 = 隐性极强]",
        mechanicsEn: "Empathy_Vacuum_Suction_Protocol + [Emotional_Fatigue = Critical_Point; Bureaucracy_Hatred = Strong_Latent]",
        aesthetic: "聚焦：廉价的咖啡渣 + 被家暴对象的指甲抓痕。文本：叹息声沉重，言语间带着一种“见识过地狱”后的麻木与疲惫的温柔。",
        aestheticEn: "Focus: Cheap_Coffee_Grounds + Scratch_Marks_from_Domestic_Violence_Victims. Text: Heavy_Sighs,_Words_Carrying_the_Numbness_and_Exhausted_Tenderness_of_One_Who_Has_Seen_Hell.",
        runtime: "IF (发现自己拼尽全力拯救的人最终反杀/毫无救药) THEN (面临彻底的信仰破产，转向极端的虚无主义或私刑审判)。",
        runtimeEn: "IF (Discover_the_Person_Saved_with_All_Might_Backstabs/is_Beyond_Saving) THEN (Face_Total_Bankruptcy_of_Faith,_Turning_to_Extreme_Nihilism_or_Vigilantism)."
      }
    },
    {
      id: "nurse",
      name: "护士", nameEn: "Nurse",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "日夜穿梭于肉体腐坏与临终呼吸之间的医疗履带维修工，直面生死的蓝领天使。",
      defEn: "Medical track mechanics toiling day and night between rotting flesh and final breaths, blue-collar angels directly facing life and death.",
      core: "每一晚都有人死去，但床单必须在明早换新。 | 代偿 ($): 微观生命的维系 (Maintenance of Micro-Life)",
      coreEn: "Every night someone dies, but the bedsheets must be renewed by morning. | Compensation ($): Maintenance of Micro-Life",
      logic: "【肉体齿轮】：与专业人士（医生）不同，他们没有权力的护甲。是最贴近实在界（M6，血肉与粪便）的主体。大他者（医院体制）将其异化为只会换药和输液的器皿。",
      logicEn: "[Flesh Gears]: Unlike professionals (doctors), they lack armor of power. They are the closest to the Real (M6: flesh and excrement). The Other (hospital system) alienates them into vessels that only change dressings and drip IVs.",
      patch: {
        mechanics: "高压脏活屏蔽协议 + [生理疲劳抗性 = 枯竭边缘; 死亡麻木度 = 高]",
        mechanicsEn: "High-Pressure_Dirty-Work_Shield_Protocol + [Physio_Fatigue_Resist = Edge_of_Exhaustion; Death_Numbness = High]",
        aesthetic: "聚焦：刺鼻的消毒水味 + 起满血丝与黑眼圈的双眼。文本：简短、干脆利落、带有一丝对肉体痛苦的黑色幽默与麻木。",
        aestheticEn: "Focus: Pungent_Disinfectant_Smell + Bloodshot_Eyes_with_Dark_Circles. Text: Short,_Crisp,_Carrying_a_Touch_of_Dark_Humor_and_Numbness_toward_Physical_Pain.",
        runtime: "IF (连续见证无谓的痛苦导致医疗屏蔽膜崩溃) THEN (引发：试图通过拔掉管子来进行极端的慈悲“拯救”或产生妄想症状)。",
        runtimeEn: "IF (Consecutively_Witnessing_Senseless_Suffering_Crashes_Med-Shield) THEN (Trigger: Attempting_Extreme_Mercy_'Saving'_by_Pulling_Tubes,_or_Delusional_Symptoms)."
      }
    },
    {
      id: "coach",
      name: "教练", nameEn: "Coach",
      group: "C. 中产与市民", groupEn: "Middle Class & Civil",
      def: "将自己的成就与力比多完全转嫁绑定在他人躯体之上的赛道鞭挞者。",
      defEn: "Track lashers entirely transferring and binding their achievements and libido to the bodies of others.",
      core: "你的肌肉里必须流淌着我的血液，去替我赢！ | 缺失 ($): 无法重返荣光的自身躯体 (Own Body Unable to Return to Glory)",
      coreEn: "My blood must flow in your muscles, go win for me! | Lack ($): Own Body Unable to Return to Glory",
      logic: "【代理的欲望】：自身主体（M1）的巅峰已过或充满裂痕，只能作为大他者（严厉的父性要求 M4）附着在徒弟身上。渴望通过控制另一具肉体（他人的遭遇 M2）来缝合自己的失败。",
      logicEn: "[Proxy Desire]: Own subjectivity's (M1) prime is past or fractured; acts as the Other (strict paternal demand M4) attached to disciples. Desires to stitch own failure by controlling another body's encounters (M2).",
      patch: {
        mechanics: "精神寄生鞭策协议 + [代入感过载 = 严重; 胜负欲狂热 = Max]",
        mechanicsEn: "Spiritual_Parasitic_Goading_Protocol + [Immersion_Overload = Severe; Win-Lose_Zeal = Max]",
        aesthetic: "聚焦：被捏碎的战术板 + 汗水浸透的运动外套。文本：咆哮、军训式的绝对命令、将人异化为得分工具但又带有扭曲父爱的残酷语态。",
        aestheticEn: "Focus: Crushed_Tactical_Boards + Sweat-Soaked_Tracksuits. Text: Roaring,_Bootcamp-style_Absolute_Commands,_Alienating_People_into_Scoring_Tools_yet_with_Twisted_Paternal_Cruelty.",
        runtime: "IF (寄托全部理想的徒弟突然叛逃或因自毁行为报废) THEN (自身存在的合法性归零，引发极端暴力的控制反噬)。",
        runtimeEn: "IF (Disciple_Carrying_All_Ideals_Suddenly_Defects_or_Self-Destructs) THEN (Own_Existence_Legitimacy_Zeroes_Out,_Triggering_Extreme_Violent_Control_Backlash)."
      }
    }
  ]
};
