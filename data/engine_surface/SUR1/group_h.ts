import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_H: LibraryCategoryDef = {
  id: "type_h",
  name: "剧情与伦理 (Drama & Ethics)",
  desc: "深挖社会结构、道德困境与人际关系的幽微之处。",
  items: [
    { 
      id: "family_drama", 
      name: "家庭伦理", nameEn: "Family Drama",
      def: "代际冲突、遗产争夺、婆媳关系、原生家庭创伤。", 
      defEn: "Generational conflict, inheritance battles, in-law dynamics, origin family trauma.",
      core: "血缘既是纽带也是枷锁。最深的伤害往往来自最亲近的人。相爱相杀。 | 换喻 ($): 碎裂的旧全家福 (Shattered Old Family Portrait)",
      coreEn: "Blood is both a bond and a shackle. The deepest wounds often come from the closest people. Love-hate relationship. | Metonymy ($): Shattered Old Family Portrait",
      logic: "【高压氧舱】：M4（家庭血缘结构）是一个高压容器，M2（过往创伤）在其中不断发酵，最终挤压并扭曲了 M1（个体成员的自我认同）。",
      logicEn: "[Hyperbaric Chamber]: M4 (Family blood structure) is a high-pressure vessel where M2 (Past Trauma) ferments, eventually crushing and distorting M1 (Individual's self-identity).",
      patch: {
        mechanics: "基础血亲协议 + [情感绑架系 = 满级; 沟通成本 = 极高]",
        mechanicsEn: "Base_BLOODLINE + [Emotional_Blackmail = Maxed; Communication_Cost = Extremely_High]",
        aesthetic: "聚焦：饭桌上令人窒息的沉默与突然爆发的争吵 + 幽暗且充满杂物的旧房间 + 长辈威严且带有控制欲的凝视。文本：极尽刻薄、专挑彼此最痛楚的软肋肆意攻击的家常对话。",
        aestheticEn: "Focus: Suffocating_Silence_At_The_Dinner_Table_To_Sudden_Explosive_Arguments + Dark_Cluttered_Old_Rooms + Elders'_Authoritative_And_Controlling_Gaze. Text: Extremely_Mean_Casual_Discussions_Deliberately_Attacking_Each_Others'_Most_Painful_Vulnerabilities.",
        runtime: "IF (一家人好不容易其乐融融地坐下来准备吃顿团圆饭) THEN (席间必定会有人“不经意”地提起几十年前的旧烂账，导致饭局彻底掀桌)。",
        runtimeEn: "IF (Family_Finally_Sits_Down_Happily_For_A_Reunion_Dinner) THEN (Someone_Must_'Accidentally'_Bring_Up_Decades-Old_Grievances_Leading_To_Total_Table-Flipping_Chaos)."
      }
    },
    { 
      id: "melodrama", 
      name: "通俗情节剧/狗血", nameEn: "Melodrama / Soap",
      def: "极度夸张的情感、失忆、绝症、出轨、多角恋、情绪化。", 
      defEn: "Hyper-exaggerated emotions, amnesia, terminal illness, infidelity, polyamory, emotionality.",
      core: "命运的过度巧合与主角情绪的极度放大。理智完全让位于剧烈的情感起伏。 | 换喻 ($): 雨中掉落的诊断书 (Diagnosis Dropped in the Rain)",
      coreEn: "Over-coincidences of fate and extreme amplification of protagonist's emotions. Reason completely gives way to violent emotional swings. | Metonymy ($): Diagnosis Dropped in the Rain",
      logic: "【情绪海啸】：在这个协议中，M5（理智逻辑）被完全废弃。世界由绝对的 M1（极端情感起伏）驱动。所有事件的发生仅仅是为了触发角色的巨大情绪反应。",
      logicEn: "[Emotional Tsunami]: In this protocol, M5 (Rational Logic) is entirely deprecated. The world is driven by absolute M1 (Extreme emotional swings). Events occur solely to trigger massive emotional reactions from characters.",
      patch: {
        mechanics: "基础滥情协议 + [巧合发生率 = 300%; 绝症/车祸/失忆触发率 = 极高]",
        mechanicsEn: "Base_MELODRAMA + [Coincidence_Rate = 300%; Terminal_Illness/Crash/Amnesia_Trigger = Extremely_High]",
        aesthetic: "聚焦：雨中下跪的慢动作大特写 + 极其浮夸的连环扇巴掌 + 医院抢救室门外绝望的瘫倒。文本：声泪俱下的哀求与咆哮，伴随着“为什么老天要这样对我”的绝对苦情宣告。",
        aestheticEn: "Focus: Slow-Motion_Close-Ups_Of_Kneeling_In_Rain + Extremely_Exaggerated_Chain-Slapping + Desperate_Collapsing_Outside_ER_Doors. Text: Tearful_Pleading_And_Roaring_Accompanied_By_Absolute_Melodramatic_Declarations_Of_'Why_Does_God_Do_This_To_Me'.",
        runtime: "IF (男女主终于历经千辛万苦解除误会并在马路对面相视一笑准备拥抱) THEN (其中一方必定会被一辆突然冲出来的失控卡车撞飞)。",
        runtimeEn: "IF (Leads_Finally_Resolve_Misunderstanding_And_Smile_At_Each_Other_Across_Street_Ready_To_Embrace) THEN (One_Of_Them_Must_Be_Sent_Flying_By_A_Suddenly_Speeding_Out-Of-Control_Truck)."
      }
    },
    { 
      id: "social_realism", 
      name: "现实主义", nameEn: "Social Realism",
      def: "底层生活、社会不公、阶级固化、纪实感、达内兄弟风格。", 
      defEn: "Bottom-rung life, social injustice, class stagnation, documentary feel, Dardenne brothers style.",
      core: "渺小的个体在巨大且冷漠的社会机器中的艰难喘息。生存本身即是搏斗。 | 换喻 ($): 沾满油污的记账本 (Grease-Stained Ledger)",
      coreEn: "Tiny individual gasping in a massive, indifferent social machine. Survival itself is a struggle. | Metonymy ($): Grease-Stained Ledger",
      logic: "【碾压磨盘】：M4（无情的阶级与体制环境）像磨盘一样碾压着结构最底层的 M1（穷人）。贫穷是一种隐形的暴力（M0），没有魔法般的出路。",
      logicEn: "[Crushing Millstone]: M4 (Ruthless class and systemic environment) grinds the bottom-tier M1 (The Poor) like a millstone. Poverty is invisible violence (M0), with no magical way out.",
      patch: {
        mechanics: "基础纪实协议 + [贫困枷锁 = 无法解除; 奇迹发生率 = 0]",
        mechanicsEn: "Base_DOCUMENTARY + [Poverty_Shackle = Unremovable; Miracle_Rate = 0]",
        aesthetic: "聚焦：极少配乐的环境底噪（如工厂机器轰鸣）+ 尾随人物的背影跟拍手持镜头 + 疲惫的面容与重复繁重的体力劳动。文本：干瘪的日常琐碎对话，几毛钱的讨价还价，以及被生活压垮的深深叹息。",
        aestheticEn: "Focus: Ambient_Noise_With_Zero_Score_(e.g. Factory_Hum) + Handheld_Tracking_Shots_Following_Characters'_Backs + Exhausted_Faces_And_Heavy_Repetitive_Manual_Labor. Text: Dry_Daily_Trivia_Haggling_Over_Pennies_And_Deep_Sighs_Crushed_By_Life.",
        runtime: "IF (主角为了救命或维持生计，东拼西凑终于凑齐了一笔至关重要的钱) THEN (这笔钱在交款前必定会因为一个极为琐碎且荒谬的意外被偷窃或罚没)。",
        runtimeEn: "IF (Protagonist_Finally_Scrapes_Together_A_Vital_Sum_Of_Money_For_Survival) THEN (The_Money_Must_Be_Stolen_Or_Confiscated_Due_To_A_Trivial_Absurd_Accident_Before_Payment)."
      }
    },
    { 
      id: "biographical", 
      name: "传记", nameEn: "Biographical",
      def: "真实人物生平、名人传记、历史节点。", 
      defEn: "Real historical biographies, memoirs, historical turning points.",
      core: "个人命运与时代浪潮的交汇。伟大成就背后的凡人瑕疵。 | 换喻 ($): 落满灰尘的日记与老打字机 (Dusty Diary and Old Typewriter)",
      coreEn: "The intersection of personal fate and the tide of the times. Mortal flaws behind great achievements. | Metonymy ($): Dusty Diary and Old Typewriter",
      logic: "【铸像凿痕】：M1（伟人/主角）试图改变 M4（历史进程/世俗认知），但 M6（命运的时间跨度）会以疾病、背叛等方式向其索取代价。伟大源于撕裂。",
      logicEn: "[Sculpting Chisel Marks]: M1 (Great Figure/Protagonist) tries to change M4 (Course of History/Secular Cognition), but M6 (Time span of fate) exacts a toll via disease, betrayal, etc. Greatness stems from tearing.",
      patch: {
        mechanics: "基础编年史协议 + [历史必然性 = 不可抗拒; 内在消耗率 = 极高]",
        mechanicsEn: "Base_CHRONICLE + [Historical_Inevitability = Irresistible; Internal_Burn_Rate = Extremely_High]",
        aesthetic: "聚焦：跨越几十年的时代服化道精准变迁 + 历史性高光时刻的重塑还原 + 晚年苍老孤独的面部大特写。文本：宏大叙事的演说词与私密日记独白的重叠，带有事后回望的宿命感苍凉声线。",
        aestheticEn: "Focus: Precise_Evolution_Of_Wardrobes_Over_Decades + Re-creation_Of_Historical_Highlight_Moments + Close-Ups_Of_Aged_Lonely_Faces_In_Twilight_Years. Text: Overlap_Of_Grand_Narrative_Speeches_And_Private_Diary_Monologues_With_Fatalistic_Bleak_Hindsight_Voiceovers.",
        runtime: "IF (主角在万众瞩目下达成了他/她改变世界的最高峰成就) THEN (下一刻镜头必然切向TA最亲近之人离去或自身身体彻底恶化的孤独阴影)。",
        runtimeEn: "IF (Protagonist_Achieves_Peak_World-Changing_Success_Under_Global_Spotlight) THEN (Next_Shot_Must_Cut_To_The_Lonely_Shadow_Of_Closest_Ones_Leaving_Or_Total_Physical_Deterioration)."
      }
    },
    { 
      id: "politics", 
      name: "政治惊悚", nameEn: "Political Thriller",
      def: "竞选内幕、新闻调查、权力交易、深层政府 (Deep State)。", 
      defEn: "Campaign secrets, journalism, power trading, deep state.",
      core: "光鲜的政治口号背后的肮脏交易。权力是如何腐蚀人性的。 | 换喻 ($): 碎纸机里的机密文件 (Classified Files in a Shredder)",
      coreEn: "Dirty deals behind shining political slogans. How power corrupts humanity. | Metonymy ($): Classified Files in a Shredder",
      logic: "【纸牌屋】：M4（系统权力）是一个绞肉机，M3（真相/理想主义）在这里是致命的弱点。M5（政治手腕/欺骗）是唯一的生存与攀爬工具。",
      logicEn: "[House of Cards]: M4 (Systemic Power) is a meat grinder, M3 (Truth/Idealism) is a fatal weakness here. M5 (Political maneuvering/Deception) is the sole tool for survival and climbing.",
      patch: {
        mechanics: "基础权谋协议 + [道德感 = 负数; 阴谋层级 = 深不可测]",
        mechanicsEn: "Base_MACHIAVELLIAN + [Morality_Level = Negative; Conspiracy_Depth = Unfathomable]",
        aesthetic: "聚焦：地下车库里昏暗车灯下的情报交接 + 华盛顿宏伟穹顶与冰冷办公桌的对比 + 新闻发布会上一秒变脸的伪善假笑。文本：没有一句真话、充满政治黑话与隐晦威胁的外交辞令交锋。",
        aestheticEn: "Focus: Intel_Handoffs_Under_Dim_Headlights_In_Underground_Garages + Contrast_Of_Grand_Washington_Domes_And_Cold_Desks + Hypocritical_Fake_Smiles_Flipping_In_A_Second_At_Press_Conferences. Text: Interplays_Of_Diplomatic_Jargon_With_Not_A_Single_True_Word_Full_Of_Political_Slang_And_Veiled_Threats.",
        runtime: "IF (某个满腔热血的底层调查记者即将把惊天猛料交给最高法院的正直法官) THEN (法官已被深深腐蚀或在见面前被伪造成完美自杀)。",
        runtimeEn: "IF (A_Passionate_Gonzo_Journalist_Is_About_To_Hand_Bombshell_To_Upright_Supreme_Court_Judge) THEN (Judge_Has_Already_Been_Deeply_Corrupted_Or_Is_Framed_As_A_Perfect_Suicide_Before_Meeting)."
      }
    },
    { 
      id: "school_bullying", 
      name: "校园/霸凌", nameEn: "School & Bullying",
      def: "青春期的残酷、小社会、排挤、群体暴力。", 
      defEn: "Cruelty of adolescence, micro-society, exclusion, mob violence.",
      core: "校园作为一个微缩的极权社会。群体对异类的排斥与系统性的施暴。 | 换喻 ($): 课桌上被涂花的涂鸦 (Defaced Scribbles on a School Desk)",
      coreEn: "The school as a miniature totalitarian society. The mob's rejection of anomalies and systemic abuse. | Metonymy ($): Defaced Scribbles on a School Desk",
      logic: "【微型法西斯】：M4（校园里的金字塔阶级群体）依靠残忍来维持秩序。M1（受害者/局外人）被不断剥削尊严。沉默的大多数构成了最坚固的恐怖高墙。",
      logicEn: "[Micro-Fascism]: M4 (Pyramid class groups in school) relies on cruelty to maintain order. M1 (Victim/Outcast) is constantly stripped of dignity. The silent majority forms the strongest wall of terror.",
      patch: {
        mechanics: "基础排异协议 + [从众心理 = 绝对压倒性; 反抗代价 = 物理/社会性死亡]",
        mechanicsEn: "Base_EXCLUSION + [Mob_Mentality = Absolutely_Overwhelming; Resistance_Cost = Physical/Social_Death]",
        aesthetic: "聚焦：厕所隔间上方倒下来的冷水/脏水 + 加害者天真残酷的笑脸与受害者麻木空洞的眼神对比 + 阳光明媚的操场上无人靠近的孤立体。文本：伪装成恶作剧的尖锐侮辱，以及受害者在求救前无数次的无声张嘴。",
        aestheticEn: "Focus: Cold/Dirty_Water_Poured_Over_Toilet_Stall_Doors + Contrast_Of_Abusers'_Naive_Cruel_Smiles_And_Victim's_Numb_Hollow_Eyes + The_Isolated_Entity_No_One_Approaches_On_A_Sunny_Playground. Text: Piercing_Insults_Disguised_As_Pranks_And_The_Victim's_Countless_Silent_Openings_Of_Mouth_Before_Crying_For_Help.",
        runtime: "IF (受害者终于鼓起勇气向看似最温和的老师或家长求救) THEN (成年人必定会轻飘飘地说出“同学之间开玩笑而已，为什么他们只欺负你”这句终极补刀)。",
        runtimeEn: "IF (Victim_Finally_Gathers_Courage_To_Seek_Help_From_The_Gentlest-Seeming_Teacher_Or_Parent) THEN (Adult_Must_Lightly_Deliver_The_Ultimate_Fatal_Blow:-'It's_Just_Kids_Joking,_Why_Do_They_Only_Pick_On_You?')."
      }
    },
    { 
      id: "medical", 
      name: "医疗/生老病死", nameEn: "Medical Drama",
      def: "医院百态、医患纠纷、伦理生死抉择、生命的脆弱。", 
      defEn: "Hospital panorama, doctor-patient disputes, ethical life/death choices, fragility of life.",
      core: "冰冷的医疗技术 vs 滚烫的生命意志。医生在扮演上帝时的无力感。 | 换喻 ($): 归零的心电图机 (Flatlining ECG Monitor)",
      coreEn: "Cold medical tech vs burning will to live. The helplessness of doctors playing God. | Metonymy ($): Flatlining ECG Monitor",
      logic: "【迟延命运】：M5（医学科技）与 M1（医生）绝望地试图拖延 M6（自然死亡）。每一次决定既是科学判断，也是背负着极大罪责感的伦理审判。",
      logicEn: "[Delaying Fate]: M5 (Medical Tech) and M1 (Monarch/Doctor) desperately try to delay M6 (Natural Death). Every decision is both scientific judgment and ethical trial burdened with massive guilt.",
      patch: {
        mechanics: "基础急救协议 + [生死概率 = 随时反转; 道德困境 = 电车难题级]",
        mechanicsEn: "Base_ER + [Life/Death_Probability = Instant_Reversal; Moral_Dilemma = Trolley_Problem_Level]",
        aesthetic: "聚焦：急诊室无影灯惨白的强光 + 从沾血的手套滴落的血迹特效 + 手术室绿布上方那双只露在外面且布满血丝的眼睛。文本：伴随心电监护仪报警声的极速专业医学术语，与下达死亡宣告时极度克制的低语。",
        aestheticEn: "Focus: Ghastly_Bright_Lights_Of_ER_Surgical_Lamps + Dripping_Blood_FX_From_Stained_Gloves + Bloodshot_Eyes_Solely_Visible_Above_Green_Surgical_Drapes. Text: Hyper-Fast_Professional_Medical_Jargon_Accompanied_By_ECG_Alarms_And_Extremely_Restrained_Whispers_When_Pronouncing_Death.",
        runtime: "IF (一场经历了十几个小时、堪称医学奇迹的手术宣告成功，医生疲惫地瘫坐在走廊) THEN (下一秒警报声必定再次响起，病人因为最微小不可控的术后并发症瞬间猝死)。",
        runtimeEn: "IF (A_10+Hour_Medical-Miracle_Surgery_Breaks_Success_And_Doctor_Collapses_In_Hallway_Exhausted) THEN (Alarm_Must_Blare_Again_Next_Second_And_Patient_Dies_Instantly_From_The_Tiniest_Uncontrollable_Post-Op_Complication)."
      }
    },
    { 
      id: "lgbt_drama", 
      name: "性别/酷儿", nameEn: "Gender & Queer Drama",
      def: "跨性别、同性平权运动、身份认同的社会挣扎。", 
      defEn: "Transgender, gay rights movement, social struggle of identity.",
      core: "真实的内在自我 vs 异性恋霸权的社会规范。为了“做自己”而付出的巨大代价。 | 换喻 ($): 撕裂的柜门/缝了一半的衣裳 (Splintered Closet Door / Half-Sewn Dress)",
      coreEn: "True inner self vs heteronormative social norms. The massive price paid simply 'to be oneself'. | Metonymy ($): Splintered Closet Door / Half-Sewn Dress",
      logic: "【破茧炼狱】：M1（真实的酷儿自我）被关在 M4（传统的性别规范与社会压迫）的深柜中。破柜而出即是自由，但也意味着要面对被主流排斥的社会性死亡。",
      logicEn: "[Purgatory of the Cocoon]: M1 (True queer self) is locked in the deep closet of M4 (Traditional gender norms and social oppression). Breaking out is freedom, but also means facing social death rejected by the mainstream.",
      patch: {
        mechanics: "基础觉醒协议 + [主流规范压力 = 窒息级; 自我接纳壁垒 = 极高]",
        mechanicsEn: "Base_AWAKENING + [Mainstream_Norm_Pressure = Suffocating; Self-Acceptance_Barrier = Extremely_High]",
        aesthetic: "聚焦：霓虹闪烁的地下变装舞会的高饱和色彩 vs 白天乏味压抑的灰色工作空间 + 镜子前痛苦撕扯不符性别认同衣物的特写。文本：从极度自我否定的压抑低语，到骄傲游行人群中勇敢而出挑的热烈呐喊。",
        aestheticEn: "Focus: High-Sat_Neon-Lit_Underground_Drag_Balls_Vs_Dull_Oppressive_Grey_Daytime_Workspaces + Close-Ups_Painfully_Tearing_Off_Gender-Dissonant_Clothes_Before_Mirrors. Text: From_Extremely_Self-Denying_Suppressed_Whispers_To_Brave_Stand-Out_Fiery_Shouts_In_Pride_Parades.",
        runtime: "IF (主角终于穿上了自己最渴望的衣服/做回自己，并小心翼翼地走进白天的街道) THEN (必定会遇到最无法理解TA们的至亲长辈，迎来最惨烈的凝视与精神切割)。",
        runtimeEn: "IF (Protagonist_Finally_Wears_Their_Deepest_Desired_Attire/Self_And_Cautiously_Walks_Onto_Daylight_Streets) THEN (Must_Run_Into_The_Most_Un-Understanding_Closest_Elder_Receiving_The_Most_Brutal_Stare_And_Spiritual_Severing)."
      }
    },
    { 
      id: "religious", 
      name: "宗教辩证", nameEn: "Religious & Faith",
      def: "信仰危机、神职人员的挣扎、原罪探敲、伯格曼式的拷问。", 
      defEn: "Crisis of faith, clergy struggle, probing original sin, Bergmanesque interrogation.",
      core: "对绝对信仰的渴望 vs 上帝的沉默（苦难的现实）。神性与人性的冲突。 | 换喻 ($): 斑驳且沾血的荆棘十字架 (Mottled and Bloodstained Crown of Thorns)",
      coreEn: "Yearning for absolute faith vs God's silence (reality of suffering). Conflict of divinity and humanity. | Metonymy ($): Mottled and Bloodstained Crown of Thorns",
      logic: "【沉默苍穹】：M1（充满疑惑的信徒/牧师）向 M6（绝对存在的上帝/虚无）发出诘问。M4（冰冷的宗教教条）无法解释现实的苦难，引爆了关于存在意义的终极危机。",
      logicEn: "[Silent Firmament]: M1 (Doubtful believer/priest) interrogates M6 (Absolute God/The Void). M4 (Cold religious dogma) cannot explain real suffering, detonating the ultimate crisis of existential meaning.",
      patch: {
        mechanics: "基础求道协议 + [神启概率 = 0; 精神折磨度 = 极具哲学性]",
        mechanicsEn: "Base_SEEKER + [Divine_Revelation_Probability = 0; Mental_Torture = Highly_Philosophical]",
        aesthetic: "聚焦：空荡教堂里从高窗射下的廷达尔冷光 + 荒原或大海上孤独的人影（伯格曼构图） + 磨破皮的膝盖与枯萎的树木。文本：大段的带有莎士比亚戏剧质感的冗长神学思辨自白，最后变为绝望的嘶吼。",
        aestheticEn: "Focus: Tyndall_Cold_Light_Piercing_High_Windows_In_Empty_Churches + Lonely_Silhouettes_On_Wastelands_Or_Seas_(Bergman_Composition) + Skinned_Knees_And_Withered_Trees. Text: Lengthy_Shakespearean-Textured_Theological_Speculative_Monologues_End_Up_As_Desperate_Roars.",
        runtime: "IF (一位神父为了拯救一个受苦者而做出了违背核心教义的自我牺牲) THEN (镜头必定拉远，凝视这一巨大付出的天地间依然寂静无声，没有任何神迹降临)。",
        runtimeEn: "IF (A_Priest_Makes_A_Self-Sacrifice_Violating_Core_Dogma_To_Save_A_Sufferer) THEN (Camera_Must_Pull_Back_To_Stare_At_This_Massive_Cost_While_Heaven_And_Earth_Remain_Silent_With_No_Miracle_Descending)."
      }
    },
    { 
      id: "legal_ethics", 
      name: "法理与伦理", nameEn: "Legal Ethics",
      def: "情理法的冲突、辛普森案模式、电车难题具象化。", 
      defEn: "Conflict of emotion/logic/law, OJ case model, trolley problem manifestation.",
      core: "法理的正义（程序）往往无法满足朴素的道德正义。制度的盲区。 | 换喻 ($): 倾斜的天平与厚厚的法典 (Tilted Scales and Thick Law Books)",
      coreEn: "Legal justice (procedure) often fails to satisfy basic moral justice. Blind spots of the system. | Metonymy ($): Tilted Scales and Thick Law Books",
      logic: "【盲眼天平】：M4（法律程序）是一台没有感情的机器。当它与 M1（朴素的道德共情）产生严重错位时，整个社会将陷入一场无法给出标准答案的困局。",
      logicEn: "[Blind Scales]: M4 (Legal Procedure) is an emotionless machine. When it severely misaligns with M1 (Basic moral empathy), the whole society falls into a dilemma with no standard answer.",
      patch: {
        mechanics: "基础庭审协议 + [法律漏洞利用率 = 极高; 道德倒错感 = 极强]",
        mechanicsEn: "Base_TRIAL + [Legal_Loophole_Exploitation = Extremely_High; Moral_Inversion = Extremely_Strong]",
        aesthetic: "聚焦：法官敲击木槌的沉闷回音特写 + 辩护律师在陪审团前极具煽动性的走动 + 受害人家属席上扭曲愤怒的面孔。文本：严谨冰冷的法律术语与极致煽情、诉诸公众情绪的演讲形成巨大的张力对比。",
        aestheticEn: "Focus: Close-Ups_Of_Judge_Banging_Gavel_With_Dull_Echoes + Defense_Attorney's_Highly_Provocative_Pacing_Before_Jury + Distorted_Angry_Faces_In_Victims'_Families'_Seats. Text: Massive_Tension_Between_Rigorous_Cold_Legal_Jargon_And_Extremely_Sentimental_Appeals_To_Public_Emotion.",
        runtime: "IF (律师用尽了所有最肮脏但合法的程序手段终于帮一个明知有罪的人脱罪) THEN (在走出法院大门面对狂热闪光灯的瞬间，律师必定会在玻璃反光中看到自己堕落如魔鬼的脸)。",
        runtimeEn: "IF (Lawyer_Uses_Filthiest_But_Legal_Procedural_Means_To_Successfully_Free_A_Known_Guilty_Person) THEN (Upon_Stepping_Out_To_Frenzied_Camera_Flashes_Lawyer_Must_See_Own_Demonic_Fallen_Face_In_Glass_Reflection)."
      }
    },
    { 
      id: "war_trauma", 
      name: "创伤治愈", nameEn: "Trauma & Healing",
      def: "PTSD、战后综合症、车祸丧亲、漫长的告别。", 
      defEn: "PTSD, post-war syndrome, bereavement, a long goodbye.",
      core: "过去的时间被冻结在创伤那一刻。角色如何重新学习与世界建立联系。 | 换喻 ($): 一块停止走动的碎玻璃怀表 (Shattered Pocket Watch Stopped Ticking)",
      coreEn: "Past time frozen at the moment of trauma. How characters relearn to build connections with the world. | Metonymy ($): Shattered Pocket Watch Stopped Ticking",
      logic: "【琥珀梦境】：M2（过去的巨大创伤）如同琥珀般封印了 M1（主角的现在）。治愈的过程就是极为缓慢地打碎这层琥珀，被迫直视深渊（M6）。",
      logicEn: "[Amber Dreamscape]: M2 (Massive Past Trauma) seals M1 (Protagonist's Present) like amber. The healing process is the excruciatingly slow shattering of this amber, forcing them to face the abyss (M6).",
      patch: {
        mechanics: "基础疗愈协议 + [应激触发机制 = 且不可控; 内心重建速度 = 像素级龟速]",
        mechanicsEn: "Base_HEALING + [Trigger_Mechanism = Uncontrollable; Inner_Rebuilding_Speed = Pixel-Level_Snail_Pace]",
        aesthetic: "聚焦：日常物品引发的暴风雨般的碎片化闪回视听 + 空荡房间里的灰尘丁达尔效应 + 颤抖着却始终不敢握住另一只手的特写。文本：极少对话，大量无声的哽咽、深深的呼吸声以及自我厌恶的潜台词。",
        aestheticEn: "Focus: Everyday_Objects_Triggering_Stormy_Fragmented_Flashback_A/V + Tyndall_Effect_In_Dust-Filled_Empty_Rooms + Close-Ups_Of_Trembling_Hands_Afraid_To_Grasp_Another. Text: Minimal_Dialogue_Lots_Of_Silent_Choking_Deep_Breaths_And_Self-Loathing_Subtext.",
        runtime: "IF (创伤者刚刚在新朋友/爱人的帮助下露出了久违的真心笑容) THEN (下一个场景只要听到类似于枪声或轮胎摩擦的日常噪音，TA就会立刻不可控地发抖并缩回绝对防卫的硬壳中)。",
        runtimeEn: "IF (Traumatized_Person_Finally_Shows_A_Genuine_Smile_With_New_Friend/Lover's_Help) THEN (In_Next_Scene_Any_Routine_Noise_Like_A_Pop_Or_Tire_Screech_Will_Instantly_Make_Them_Uncontrollably_Shake_And_Retreat_Into_Absolute_Defense_Shell)."
      }
    },
    { 
      id: "road_drama", 
      name: "公路/寻找", nameEn: "Road Trip Drama",
      def: "物理旅程与心理旅程的重合、在路上找寻自我。", 
      defEn: "Overlap of physical and psychological journeys, finding oneself on the road.",
      core: "逃离凝固的社会网络，在移动的空间中重新拼凑破碎的自我。 | 换喻 ($): 后视镜里的落日与笔直的黄线 (Sunset in Rearview Mirror and Straight Yellow Lines)",
      coreEn: "Fleeing rigid social networks, reassembling shattered fragments of self in a moving space. | Metonymy ($): Sunset in Rearview Mirror and Straight Yellow Lines",
      logic: "【移动道场】：M5（物理上的空间移动过程）成为了治愈或重构 M1（精神自我）的药引。终点（M2的目标）并不重要，重要的是过程剥落了 M4（社会伪装）。",
      logicEn: "[Mobile Dojo]: M5 (The process of physical spatial movement) becomes the catalyst to heal or reconstruct M1 (Spiritual Self). The destination (M2's target) is irrelevant; what matters is how the process strips away M4 (Social Disguise).",
      patch: {
        mechanics: "基础放逐协议 + [随机事件遭遇率 = 100%; 目的性逐渐削弱 = 强制]",
        mechanicsEn: "Base_EXILE + [Random_Event_Encounter_Rate = 100%; Goal_Dilution = Forced]",
        aesthetic: "聚焦：无限延伸的荒野公路全景 + 车窗反光与人物失焦面容的叠影 + 在破旧汽车旅馆霓虹灯下的孤独抽烟。文本：漫无边际、随性跳跃的车内谈话，夹带着引擎的低频轰鸣与电台沙沙声。",
        aestheticEn: "Focus: Panoramic_Endlessly_Stretching_Wilderness_Highways + Superimposition_Of_Window_Reflections_And_Out-Of-Focus_Faces + Lonely_Smoking_Under_Run-Down_Motel_Neon_Lights. Text: Rambling_Jumping_In-Car_Conversations_Mixed_With_Low-Frequency_Engine_Rumbles_And_Radio_Static.",
        runtime: "IF (车子在距离那个承载着“终极目的”的地点只有一公里的地方彻底抛锚) THEN (主角们必定不会因焦急而暴怒，反而会在引擎盖上坐下，相视一笑，彻底释怀放下了这段执念)。",
        runtimeEn: "IF (The_Car_Breaks_Down_Completely_Just_One_Kilometer_From_The_Location_Holding_The_'Ultimate_Goal') THEN (Protagonists_Will_Not_Rage_But_Sit_On_Hood_Smile_At_Each_Other_And_Let_Go_Of_The_Obsession_Completely)."
      }
    }
  ]
};
