import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_P: LibraryCategoryDef = {
  id: "orig_exile",
  name: "8. 异乡与流亡 (Exile & Foreigner)",
  nameEn: "Exile & Foreigner",
  desc: "身体在此时此地，灵魂与根系却永远在别处的空间漂泊者。",
  descEn: "Spatial wanderers whose bodies are here and now, but whose souls and roots are forever elsewhere.",
  items: [
    {
      id: "political_exile",
      name: "政治流亡者", nameEn: "Political Exile",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "因坚持某种不能见容于祖国的政治理想或理念，被迫跨覆国境线流浪的失根者。",
      defEn: "Rootless wanderers forced to cross borders due to adhering to political ideals or ideologies intolerable to their homeland.",
      core: "我以为我逃出了那个国家的监狱，但我发现，没有了那个国家，我的愤怒便无所依附。 | 缺失 ($): 斗争的物理场所 (Physical Site of Struggle)",
      coreEn: "I thought I escaped that country's prison, but I found that without that country, my anger has nowhere to attach. | Lack ($): Physical Site of Struggle",
      logic: "【能指的悬空】：主体（M1）原本的存在意义建立在反抗祖国大他者（M4镇压机器）之上。一旦流亡，脱离了原有的象征界域（M5国境），其反抗能指瞬间失去了着力点，流于异国酒馆里的空洞辩论（对象a的消散）。",
      logicEn: "[Suspension of Signifier]: Subjectivity's (M1) existential meaning was built on resisting the homeland's Other (M4 suppressive machine). Once exiled, detached from the original Symbolic domain (M5 borders), their signifier of resistance instantly loses traction, reduced to hollow debates in foreign taverns (dissipation of objet a).",
      patch: {
        mechanics: "政治悬空协议 + [母国怨恨值 = 100%; 政治影响力 = 逐渐降解为零]",
        mechanicsEn: "Political_Suspension_Protocol + [Homeland_Resentment = 100%; Political_Influence = Gradually_Degrading_to_Zero]",
        aesthetic: "聚焦：异国发黄的出租屋壁纸 + 堆满外文旧报纸的桌面 + 永远没有下文的跨国磁带录音。文本：高频充斥着宏大叙事词汇，但由于失去权力背书而显得苍老无力。",
        aestheticEn: "Focus: Yellowing_Foreign_Rental_Room_Wallpaper + Desk_Piled_with_Old_Foreign_Newspapers + Transnational_Cassette_Recordings_with_No_Reply. Text: High_Frequency_of_Grand_Narrative_Vocab,_but_Appearing_Aged_and_Feeble_Due_to_Lack_of_Power_Endorsement.",
        runtime: "IF (在异国组织起一支武装试图杀回祖国复国) THEN (强制：因为长期脱离故土实际情况，其部队一登陆就会因为情报过时被本土的新生代反抗军当做旧贵族而全歼)。严禁流亡三十年后回去仍被人民箪食壶浆迎接。",
        runtimeEn: "IF (Organizes_Armed_Force_Abroad_Attempting_to_Fight_Back_to_Restore_Nation) THEN (Force: Due_to_Long_Detachment_from_Homeland_Reality,_Troops_Annihilated_on_Landing_by_Native_New-Gen_Rebels_Who_View_Them_as_Old_Nobles). FORBID_Being_Welcomed_by_People_with_Food_and_Drink_After_Thirty_Years_of_Exile."
      }
    },
    {
      id: "immigrant_first",
      name: "一代移民", nameEn: "First Gen Immigrant",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "为了下一代的生存斩断过去，来到语言不通的新大陆充当社会底层基石的牺牲品。",
      defEn: "Sacrifices who sever their past for the survival of the next generation, arriving on a new continent with a language barrier to serve as the bottom cornerstone of society.",
      core: "我用流著血的双手洗了半辈子的盘子，只为了让我的儿子能用流利的英语来嘲笑我的口音。 | 代偿 ($): 血缘的阶级跃升 (Class Ascension via Bloodline)",
      coreEn: "I washed plates with bleeding hands for half my life, just so my son can mock my accent in fluent English. | Compensation ($): Class Ascension via Bloodline",
      logic: "【象征界的自我献祭】：第一代移民（M1）主动将自己的母语能指系统（M5）阉割，自愿降维为新大他者（M4新国家）中不会说话的劳动力（类似M6实在界物体）。他们将自己全部的力比多（M3）转移到第二代身上，期望后者能进入大他者中心。",
      logicEn: "[Self-Sacrifice in the Symbolic]: First-gen immigrants (M1) actively castrate their mother-tongue signifier system (M5), volunteering to be downgraded into mute labor (like Real M6 objects) in the new Other (M4 new nation). They transfer all their libido (M3) onto the second generation, hoping they enter the Other's center.",
      patch: {
        mechanics: "语言阉割协议 + [底层劳动力耐受 = 满级; 子代代沟距 = 光年级]",
        mechanicsEn: "Language_Castration_Protocol + [Bottom-Labor_Endurance = Max; Generational_Gap = Lightyear-Level]",
        aesthetic: "聚焦：后厨的油烟与汗水 + 磨破起茧的双手 + 破旧字典与廉价越洋电话卡。文本：充斥着屈辱的沉默、极致的隐忍以及对子女既殷切又卑微的凝视。",
        aestheticEn: "Focus: Back-Kitchen_Grease_and_Sweat + Worn_Calloused_Hands + Tattered_Dictionaries_and_Cheap_Overseas_Calling_Cards. Text: Filled_with_Humiliating_Silence,_Extreme_Forbearance,_and_Gaze_Toward_Children_that_is_Both_Earnest_and_Humble.",
        runtime: "IF (一代移民试图向步入上流社会的子女讲述自己在黑心工厂的受难史以换取感恩) THEN (触发：子女只会感到强烈的社会羞耻感，并冷漠地用当地纯正口音打断他们)。严禁一代移民的牺牲被二代乃至新大陆社会温柔地理解并树碑立传。",
        runtimeEn: "IF (First-Gen_Attempts_to_Tell_Upwardly-Mobile_Children_Their_Suffering_in_Sweatshops_for_Gratitude) THEN (Trigger: Children_Only_Feel_Strong_Social_Shame_and_Coldly_Interrupt_with_Perfect_Local_Accent). FORBID_First-Gen_Sacrifice_Being_Gently_Understood_and_Erected_a_Monument_for_by_Second-Gen_or_New_Continent_Society."
      }
    },
    {
      id: "expat",
      name: "外派人员", nameEn: "Expat",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "带着母国资本与特权降临第三世界，生活在封闭保护圈内的精致局外人。",
      defEn: "Delicate outsiders descending on the Third World with homeland capital and privilege, living inside enclosed protective bubbles.",
      core: "我在这里工作了五年，我的英语很好，但我甚至不知道楼下的清洁工用当地话说“你好”是什么发音。 | 缺失 ($): 真实的土地联结 (Real Connection to the Land)",
      coreEn: "I've worked here for five years, my English is great, but I don't even know how the cleaner downstairs pronounces 'hello' in the local tongue. | Lack ($): Real Connection to the Land",
      logic: "【隔离的大他者泡泡】：外派者（M1）物理上处于异国，但其大他者（M4资本与母国文化）维持着一个高等级的无形结界。他们拒绝与当地的符号系统（M5）甚至当地人的实在界（M6贫困与生老病死）发生任何短路摩擦。",
      logicEn: "[Isolated Bubble of the Other]: The expat (M1) is physically in a foreign country, but their Other (M4 capital and homeland culture) maintains a high-level invisible ward. They refuse to short-circuit or frictionate with the local symbolic system (M5) or even the local Real (M6 poverty, sickness, and death).",
      patch: {
        mechanics: "文化绝缘协议 + [经济优越感 = 本能级; 孤独指数 = 在繁华中内爆]",
        mechanicsEn: "Cultural_Insulation_Protocol + [Economic_Superiority = Instinctual; Loneliness_Index = Imploding_in_Prosperity]",
        aesthetic: "聚焦：只播放英语新闻的高级酒店电视 + 翻译机 + 落地窗外与己无关的异国街头暴乱。文本：礼貌而傲慢的客套话，以及深夜里无法通过消费行为填补的深层空虚感。",
        aestheticEn: "Focus: High-End_Hotel_TV_Playing_Only_English_News + Translators + Foreign_Street_Riots_Outside_Floor-to-Ceiling_Windows_That_Have_Nothing_to_Do_with_Them. Text: Polite_yet_Arrogant_Pleasantries,_and_Deep_Emptiness_Late_at_Night_Unable_to_be_Filled_by_Consumption.",
        runtime: "IF (外派高管出于同情试图用自己的积蓄拯救一个贫民窟女孩) THEN (强制：这个行为会被当地的黑帮和腐败警察视为肥羊的疯狂暗示，导致女孩全家被杀而他自己只会被公司紧急遣返)。严禁其跨越阶级壁垒成为当地受人爱戴的救世主。",
        runtimeEn: "IF (Expat_Executive_Out_of_Pity_Attempts_to_Save_a_Slum_Girl_with_Own_Savings) THEN (Force: This_Act_is_Viewed_by_Local_Gangs/Corrupt_Cops_as_a_Mad_Hint_from_a_Fat_Sheep,_Leading_to_Girl's_Whole_Family_Killed_while_He_is_Simply_Evacuated_by_Company). FORBID_Them_Crossing_Class_Barriers_to_Become_a_Locally_Beloved_Savior."
      }
    },
    {
      id: "war_refugee",
      name: "战争难民", nameEn: "War Refugee",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "物理家园被摧毁，在炮火与饥荒中丧失所有社会属性的裸命。",
      defEn: "Bare life whose physical homeland is destroyed, stripped of all social attributes amidst artillery and famine.",
      core: "你问我什么是尊严？尊严是当你拿着步枪指着我的头时，我依然能咽下一口带泥的面包。 | 缺失 ($): 大他者的庇护 (Sanctuary of the Other)",
      coreEn: "You ask me what dignity is? Dignity is when you point a rifle at my head, and I can still swallow a mouthful of muddy bread. | Lack ($): Sanctuary of the Other",
      logic: "【大他者的彻底坍塌】：对于难民（M1），原有的国家法律与日常秩序（M4）已化为灰烬。他们是被剥光了象征界外衣（M5财产、身份）的纯粹的实在界肉体（M6）。生存成为了唯一的驱力（M3），退化到动物般的极限状态。",
      logicEn: "[Total Collapse of the Other]: For the refugee (M1), the original state law and daily order (M4) have turned to ash. They are pure Real flesh (M6), stripped bare of the Symbolic outer garments (M5 property, identity). Survival becomes the sole drive (M3), regressing to an extreme animal basic state.",
      patch: {
        mechanics: "裸命求生协议 + [物质底线 = 负数; 道德尊严 = 强制休眠]",
        mechanicsEn: "Bare_Life_Survival_Protocol + [Material_Baseline = Negative; Moral_Dignity = Forced_Dormancy]",
        aesthetic: "聚焦：沾满泥浆的赤脚 + 被铁丝网撕裂的衣衫 + 救济车抢砸的人潮。文本：没有任何文雅修辞的乞食声，以及对枪炮声宛如惊弓之鸟般的生理抽搐。",
        aestheticEn: "Focus: Mud-Covered_Bare_Feet + Clothes_Torn_by_Barbed_Wire + Crowds_Looting_Relief_Trucks. Text: Begging_for_Food_Without_Any_Elegant_Rhetoric,_and_Physiological_Spasms_at_Sound_of_Gunfire_Like_a_Frightened_Bird.",
        runtime: "IF (在邻国边境难民营中排队三个月终于拿到了一张绿卡配额) THEN (触发：在踏出难民营大门的那一秒，绿卡会被更加饥饿凶残的同胞用铁棍打碎头颅抢走)。严禁难民能排队排出一个其乐融融有尊严的未来生活。",
        runtimeEn: "IF (After_3_Months_Queuing_in_Border_Refugee_Camp_Finally_Gets_a_Green_Card_Quota) THEN (Trigger: The_Second_They_Step_Out_the_Gate,_Green_Card_is_Robbed_by_a_More_Starving/Vicious_Compatriot_Smashing_Their_Skull_with_an_Iron_Bar). FORBID_Refugees_Queuing_Their_Way_into_a_Joyous_Dignified_Future_Life."
      }
    },
    {
      id: "time_traveler_stuck",
      name: "滞留的时间旅行者", nameEn: "Stuck Traveler",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "因机器故障或物理异常滞留在不属于自己的过去或未来的人。",
      defEn: "Stranded in a past or future that does not belong to them due to machine failure or physical anomaly.",
      core: "我知道明天这架飞机就会坠毁，但我不能告诉任何人，因为历史书上写着它必须坠毁。 | 缺失 ($): 介入当下的权限 (Permission to Intervene in the Present)",
      coreEn: "I know this plane crashes tomorrow, but I can't tell anyone, because the history books say it must. | Lack ($): Permission to Intervene in the Present",
      logic: "【第四维度的流亡】：这是最高级别的象征界错位（符号宇宙的不兼容M5）。如果主体（M1）处于过去，他被“历史神圣法则（大他者M4）”死死按住不准修改；如果处于未来，他自身就是一堆早已过时的废弃代码。他的欲望（M3）变得毫无意义。",
      logicEn: "[Exile of the Fourth Dimension]: This is the highest level of Symbolic dislocation (incompatibility of the symbolic universe M5). If the subject (M1) is in the past, they are pinned down by the 'Sacred Law of History (Other M4)' forbidden to edit; if in the future, they themselves are obsolete obsolete code. Their desire (M3) becomes entirely meaningless.",
      patch: {
        mechanics: "时间因果律锁死协议 + [先知痛苦 = 卡珊德拉级; 时间归属感 = 绝对虚无]",
        mechanicsEn: "Temporal_Causality_Lock_Protocol + [Prophet_Agony = Cassandra-Level; Temporal_Belonging = Absolute_Nihility]",
        aesthetic: "聚焦：失效的怀表/仪器 + 小心地隐藏着一件未来的科技造物 + 绝望地看着惨剧发生的眼神。文本：永远欲言又止的克制，以及记录着所有人都将死去的秘密日记本。",
        aestheticEn: "Focus: Failed_Pocket_Watches/Instruments + Carefully_Hiding_a_Future_Tech_Artifact + Desperate_Eyes_Watching_Tragedy_Unfold. Text: Eternal_Restraint_of_Stopping_Before_Speaking,_and_Secret_Diaries_Recording_That_Everyone_Will_Die.",
        runtime: "IF (试图利用未来知识在这个时代买彩票或拯救伟人) THEN (强制：不仅会被时间收束力修正导致失败，还会被当时的当地人视作精神病患关进疯人院遭遇中世纪的额叶切除手术)。严禁穿越者能轻松玩转时代成为商业大亨或帝王。",
        runtimeEn: "IF (Attempts_to_Use_Future_Knowledge_to_Buy_Lottery/Save_Great_Figures_in_this_Era) THEN (Force: Not_Only_Corrected/Fails_via_Time_Convergence,_But_Also_Viewed_by_Locals_as_Insane,_Locked_in_Asylum_and_Subjected_to_Medieval_Lobotomy). FORBID_Time-Travelers_Easily_Playing_the_Era_to_Become_Business_Tycoons_or_Emperors."
      }
    },
    {
      id: "alien_stranding",
      name: "滞留外星人", nameEn: "Stranded Alien",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "飞船坠毁或任务失败被永远丢弃在地球上的地外生命体，不得不伪装成地球人。",
      defEn: "Extraterrestrial life forms abandoned forever on Earth due to crashed ships or failed missions, forced to disguise themselves as Earthlings.",
      core: "我学会了微笑，学会了系领带，但我永远学不会理解为什么人类喜欢流眼泪。 | 缺失 ($): 种族频率的共鸣 (Resonance of Racial Frequency)",
      coreEn: "I learned to smile and tie a tie, but I will never learn to understand why humans like shedding tears. | Lack ($): Resonance of Racial Frequency",
      logic: "【拙劣的面具扮演】：无论外星人（M1）将人类的能指网络（M5语言、文化）模仿得多么精确，由于底层的生物内核（M6异种实在界）截然不同，他们永远处于在人类大他者（M4地球常识）面前“露馅”的濒临绝境。他们的所有社交都是高度紧张的欺诈。",
      logicEn: "[Clumsy Mask-Playing]: No matter how accurately the alien (M1) imitates the human signifier network (M5 language/culture), due to an entirely different biological core (M6 heterogenous Real), they are forever on the verge of 'breaking character' before the human Other (M4 Earth common sense). All their socializing is highly tense fraud.",
      patch: {
        mechanics: "异种伪装协议 + [常识理解力 = 僵硬模拟; 孤独感 = 宇宙维度级别]",
        mechanicsEn: "Xeno_Disguise_Protocol + [Common_Sense_Comprehension = Rigid_Simulation; Loneliness = Cosmic_Dimension_Level]",
        aesthetic: "聚焦：不合时宜的冬装掩盖异常肢体 + 夜晚仰望没有自己母星坐标的夜空 + 生吃某类不符合地球伦理的生物。文本：带有机械或非碳基逻辑的冰冷直白陈述被强行塞入温情词汇的怪异感。",
        aestheticEn: "Focus: Inappropriate_Winter_Clothes_Covering_Anomalous_Limbs + Looking_Up_at_Night_Sky_Lacking_Homeworld_Coordinates + Eating_Raw_Organisms_Incompatible_with_Earth_Ethics. Text: The_Uncanny_Valey_of_Cold_Direct_Statements_with_Mechanical/Non-Carbon_Logic_Forced_Into_Warm_Vocabulary.",
        runtime: "IF (在一次严重车祸中为了救助路人暴露了自己的原形) THEN (触发：被救助的路人会歇斯底里地尖叫并向政府举报，导致其被送入最高级别解剖台进行活体切片)。严禁上演人类接纳异形并友好共存的温情戏码。",
        runtimeEn: "IF (Exposes_True_Form_to_Save_Passerby_in_a_Severe_Car_Crash) THEN (Trigger: The_Saved_Passerby_Hysterically_Screams_and_Reports_to_Gov,_Leading_to_Them_Sent_to_Highest-Level_Dissection_Table_for_Vivisection). FORBID_Heartwarming_Scenes_of_Humanity_Accepting_Alien_and_Coexisting_Friendly."
      }
    },
    {
      id: "fallen_angel",
      name: "堕落天使", nameEn: "Fallen Angel",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "因为原罪、质疑或抗命被高位面（天堂/神界）打入粗粝的物质界的曾经的神圣者。",
      defEn: "Former divine beings cast down to the coarse material plane from higher dimensions (Heaven/God-Realm) due to original sin, questioning, or disobedience.",
      core: "神夺走了我的光环，却把我扔进了充满了妓女、醉汉和泥水的人间。 | 代偿 ($): 物质沉沦的快感 (Pleasure of Material Sinking)",
      coreEn: "God took my halo and threw me into a human realm full of whores, drunks, and muddy water. | Compensation ($): Pleasure of Material Sinking",
      logic: "【神圣能指的跌落】：堕落天使（M1）被究极大他者（M4神/绝对律法）除名。他们失去了纯粹的象征权柄（M5光环），直接撞碎在人间肮脏的实在界（M6肉欲、疼痛、饥饿）中。这种坠落既是极度的痛苦，也是他们第一次产生肉体欲望（M3）的起点。",
      logicEn: "[Fall of Divine Signifier]: The fallen angel (M1) is excommunicated by the ultimate Other (M4 God/Absolute Law). They lose pure Symbolic authority (M5 halo), crashing directly into the filthy Real of the human realm (M6 carnal lust, pain, starvation). This fall is both extreme agony and the starting point of their first physical desire (M3).",
      patch: {
        mechanics: "受难降维协议 + [神性丧失度 = 彻底; 感官阈值 = 初生婴儿般的锐利与痛苦]",
        mechanicsEn: "Suffering_Dimensional_Downgrade_Protocol + [Divinity_Loss = Complete; Sensory_Threshold = Sharp_and_Painful_like_a_Newborn]",
        aesthetic: "聚焦：背上切断双翼后永远无法愈合的血洞 + 站在高楼边缘眺望雷暴 + 第一次尝到酒精与尼古丁时的颤抖。文本：夹杂着失落神谕与极端低俗街头脏话的独白。",
        aestheticEn: "Focus: Unhealable_Blood_Holes_on_Back_After_Severing_Wings + Standing_on_Skyscraper_Edge_Looking_at_Thunderstorms + Trembling_Upon_First_Taste_of_Alcohol_and_Nicotine. Text: Monologues_Interlaced_with_Lost_Oracles_and_Extremely_Vulgar_Street_Swearing.",
        runtime: "IF (堕落天使试图在人间施展残存的神通拯救一个即将病死的孩童) THEN (强制：不仅奇迹不会发生，反而会因为违背了天堂的禁令，引来惩戒天使将孩童的灵魂直接烧成灰烬以示警告)。严禁堕落在人间的神明显圣并获得信徒的供奉。",
        runtimeEn: "IF (Fallen_Angel_Attempts_to_Use_Residual_Divine_Power_to_Save_a_Dying_Child) THEN (Force: Not_Only_Does_Magic_Fail,_but_Violating_Heaven's_Ban_Summons_Punishing_Angels_to_Burn_the_Child's_Soul_to_Ash_as_a_Warning). FORBID_Fallen_God_Showing_Miracles_in_Human_Realm_and_Gaining_Worship/Offerings."
      }
    },
    {
      id: "last_of_kind",
      name: "遗族", nameEn: "Last of Kind",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "整个种族或文明被彻底抹灭，背负着所有死者记忆前行的宇宙级孤儿。",
      defEn: "Cosmic orphans trudging forward bearing the memories of all the dead after their entire race or civilization was thoroughly wiped out.",
      core: "如果我死了，这个宇宙里就没有谁还记得那首在双星系统下唱出的摇篮曲了。 | 缺失 ($): 能指交换的同类 (Peers for Signifier Exchange)",
      coreEn: "If I die, no one in this universe will remember that lullaby sung under the binary star system. | Lack ($): Peers for Signifier Exchange",
      logic: "【大他者之死】：对于遗族（M1），赋予其存在意义的整个大他者文化网络（M4）已经物理性地灭绝了。主体变成了自己文明最后的存钱罐，所有的记忆能指（M5）一旦失去这个承载体就会跌入虚无。他们活着的全部欲望（M3）就是不让自己轻易死去。",
      logicEn: "[Death of the Other]: For the Last of Kind (M1), the entire Other cultural network (M4) that granted existential meaning is physically extinct. The subject becomes the final piggy-bank of their civilization; all memory signifiers (M5) will fall into the void once this carrier is lost. Their entire desire to live (M3) is just not letting themselves die easily.",
      patch: {
        mechanics: "文明绝嗣协议 + [同源共鸣概率 = 永恒为零; 记忆重担指数 = 压垮精神级]",
        mechanicsEn: "Civilization_Extinction_Protocol + [Homologous_Resonance_Probability = Eternal_Zero; Memory_Burden_Index = Spirit-Crushing_Level]",
        aesthetic: "聚焦：空荡废墟前唯一站立的背影 + 无人能解读的古老语言化石 + 用最高规格小心翼翼保存的日常小物件。文本：巨大的、空旷的、带有物理回声般的孤独咏叹调。",
        aestheticEn: "Focus: The_Only_Back_Standing_Before_Empty_Ruins + Ancient_Language_Fossils_No_One_Can_Decipher + Daily_Trinkets_Preserved_Carefully_with_Highest_Specs. Text: Massive,_Spacious,_Lonely_Arias_with_Physical_Echoes.",
        runtime: "IF (在宇宙尽头发现了一个疑似本族血脉的冬眠舱并狂喜地打开) THEN (触发：舱内只是一个被异形寄生伪装的诱饵，在打开瞬间异形破胸而出将其重创，嘲笑其绝种的宿命)。严禁在故事最后找到隐藏的族人大军然后复国繁衍。",
        runtimeEn: "IF (Discovers_a_Cryo-Pod_Suspected_to_Be_Own_Kin_at_Edge_of_Universe_and_Joyfully_Opens_It) THEN (Trigger: Pod_is_Just_a_Bait_Disguised_by_Alien_Parasite._Upon_Opening,_Alien_Bursts_Chest,_Mocking_Their_Extinction_Fate). FORBID_Finding_Hidden_Army_of_Kin_at_Story's_End_to_Restore_Nation_and_Breed."
      }
    },
    {
      id: "defector",
      name: "叛逃者", nameEn: "Defector",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "出卖、背弃了原属国家或组织，跑到敌对阵营中乞求政治庇护的人。",
      defEn: "Individuals who sold out or betrayed their original country or organization, running to the enemy camp to beg for political asylum.",
      core: "母国每天都在最高通缉令上诅咒我死，而现在这个保护我的国家，依然在我的卧室里装了二十个摄像头。 | 缺失 ($): 互信的基础 (Foundation of Mutual Trust)",
      coreEn: "My motherland curses me to die on top-wanted lists every day, while this country protecting me still has twenty cameras in my bedroom. | Lack ($): Foundation of Mutual Trust",
      logic: "【双重大他者的抛弃】：叛逃者（M1）主动斩断了原本的大他者（M4原籍），却永远无法被新的大他者（M4新接收国）完全接纳。在两套符号系统（M5）中，他同时被标记为“叛徒”和“不可信任的外人”。他们是生活在绝对监控下的丧家犬。",
      logicEn: "[Abandonment by Dual Others]: The defector (M1) actively severs the original Other (M4 Origin), yet can never be fully accepted by the new Other (M4 Receiving Nation). In both symbolic systems (M5), they are marked as 'Traitor' and 'Untrustworthy Outsider'. They are stray dogs living under absolute surveillance.",
      patch: {
        mechanics: "信任切断协议 + [被害妄想症 = 晚期; 价值利用率 = 榨干即弃]",
        mechanicsEn: "Trust_Severance_Protocol + [Paranoia = Terminal; Value_Utilization = Discard_When_Drained]",
        aesthetic: "聚焦：永远拉紧的百叶窗帘 + 神经质地检查门锁与食物 + 特工冰冷的询问灯光。文本：高度紧张的辩解、出卖前同僚后的极度内疚与对被引渡绞死的彻骨恐惧交替震荡。",
        aestheticEn: "Focus: Blinds_Forever_Drawn_Tight + Neurotically_Checking_Locks_and_Food + Cold_Interrogation_Lights_of_Agents. Text: Highly_Tense_Justifications,_Oscillating_Between_Extreme_Guilt_After_Selling_Out_Ex-Colleagues_and_Bone-Chilling_Fear_of_Being_Extradited/Hanged.",
        runtime: "IF (叛逃者交出了所有核心机密，渴望在这个新阵营过上平凡退休生活) THEN (强制：新阵营的特工会在榨干最后一丝价值后，直接将其伪装成自杀以换取与前阵营的某个政治交换倒卖回去)。严禁叛逃者能够靠着机密拿着巨款在豪宅里善终。",
        runtimeEn: "IF (Defector_Hands_Over_All_Core_Secrets,_Craving_Normal_Retirement_in_New_Camp) THEN (Force: New_Camp_Agents,_After_Draining_Last_Ounce_of_Value,_Directly_Stage_Their_Suicide_to_Trade_Them_Back_to_Former_Camp_for_Political_Exchange). FORBID_Defectors_Living_Happily_Ever_After_in_Mansions_with_Massive_Funds_from_Secrets."
      }
    },
    {
      id: "colonial_officer",
      name: "殖民官员", nameEn: "Colonial Officer",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "身披帝国荣光来到蛮荒之地代表文明，却逐渐在湿热的丛林与异族仇视中腐烂的人。",
      defEn: "Cloaked in imperial glory coming to savage lands representing civilization, yet gradually rotting in the humid jungle and xenophobic hatred.",
      core: "我带来了法律和火车，但丛林里的蚊子和土著仇视的眼神，正在把我的理智一点点吃干抹净。 | 代偿 ($): 权力的热带狂躁 (Tropical Mania of Power)",
      coreEn: "I brought laws and trains, but the jungle mosquitoes and the natives' hateful eyes are eating my sanity bit by bit. | Compensation ($): Tropical Mania of Power",
      logic: "【象征界的地理腐败】：大他者（M4宗主国）的律令在遥远的殖民地产生了严重的信号衰减（M5失效）。主体（M1）试图用文明的锁链捆绑这片土地的实在界（M6疾病、暴乱、原始祭祀），最终却被对象的反扑所吞噬，欲望（M3）堕落为极度残暴的独裁。",
      logicEn: "[Geographic Corruption of the Symbolic]: The imperative of the Other (M4 Metropole) suffers severe signal attenuation (M5 failure) in the distant colony. Subjectivity (M1) attempts to bind the Real of this land (M6 disease, riots, primal rituals) with chains of civilization, but is ultimately swallowed by the object's backlash; desire (M3) degenerates into extremely brutal dictatorship.",
      patch: {
        mechanics: "文明堕落协议 + [环境异化压抑感 = 极高; 权威暴虐化倾向 = 持续累积]",
        mechanicsEn: "Civilization_Degeneration_Protocol + [Environmental_Alienation_Oppression = Extreme; Authoritarian_Tyranny_Tendency = Continuously_Accumulating]",
        aesthetic: "聚焦：发黄的白色亚麻西装 + 扇动不停的吊扇与疟疾的冷汗 + 丛林深处的诡异鼓声。文本：帝国修辞学的瓦解，日记中充满对神秘主义的屈服与无理由施虐狂般的咆哮。",
        aestheticEn: "Focus: Yellowing_White_Linen_Suits + Constantly_Spinning_Ceiling_Fans_and_Cold_Sweat_of_Malaria + Eerie_Drumbeats_Deep_in_Jungle. Text: Disintegration_of_Imperial_Rhetoric;_Diaries_Filled_with_Submission_to_Mysticism_and_Unjustified_Sadistic_Howls.",
        runtime: "IF (殖民官员试图展现温情，开办学校给当地土著教书试图感化他们) THEN (触发：在所谓的毕业典礼上，这群土学会文明武器运作原理的土著会在讲台上将其直接斩首以血祭图腾)。严禁出现白人救世主凭借一己之力感化蛮荒取得尊重的剧本。",
        runtimeEn: "IF (Colonial_Officer_Attempts_to_Show_Warmth_by_Opening_Schools_to_Educate/Convert_Natives) THEN (Trigger: At_the_So-Called_Graduation,_These_Natives_Who_Learned_Civil_-Weaponry_Mechanics_Will_Directly_Behead_Him_on_Podium_as_Blood_Sacrifice_to_Totem). FORBID_White-Savior_Scripts_Single-Handedly_Converting_Savages_and_Gaining_Respect."
      }
    },
    {
      id: "space_castaway",
      name: "太空漂流者", nameEn: "Space Castaway",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "飞船事故后被单独抛射在救生舱或废弃空间站里，面对绝对深渊的宇航员。",
      defEn: "Astronaut isolated in a life pod or abandoned space station after a ship accident, facing the absolute abyss.",
      core: "除了这半罐用尿液循环的水，我的世界就只剩下外面三开尔文的黑暗与寂静了。 | 缺失 ($): 大地之母的重力 (Gravity of Mother Earth)",
      coreEn: "Besides this half-can of recycled urine water, my world is only the 3 Kelvin darkness and silence outside. | Lack ($): Gravity of Mother Earth",
      logic: "【实在界的绝对裸露】：外太空是一个没有任何大他者（M4人类社会结构）存在的纯粹实在界（M6）。漂流者（M1）被关在一个象征界的最后碎片（M5救生舱）里。物理上的零重力等同于主体性的失重，一切欲望（M3）被压缩为纯粹生物学上的氧气与热量倒计时。",
      logicEn: "[Absolute Nakedness of the Real]: Outer space is a pure Real (M6) lacking any Other (M4 human social structure). The castaway (M1) is locked in a final fragment of the Symbolic (M5 life pod). Physical zero gravity equates to subjective weightlessness; all desire (M3) is compressed into a pure biological countdown of oxygen and heat.",
      patch: {
        mechanics: "虚空幽闭协议 + [感官剥夺倒计时 = 机械钟表级; 存在主义危机 = 物理具象化]",
        mechanicsEn: "Void_Claustrophobia_Protocol + [Sensory_Deprivation_Countdown = Mechanical_Clock_Level; Existential_Crisis = Physically_Materialized]",
        aesthetic: "聚焦：红色的维生系统警报闪烁 + 玻璃外面旋转的巨大星系旋臂 + 对着死寂的无线电自言自语。文本：高智商理科生的严密计算与幽闭环境导致的发疯幻视的来回切换。",
        aestheticEn: "Focus: Red_Life-Support_Alarms_Flickering + Giant_Galactic_Spiral_Arms_Spinning_Outside_Glass + Talking_to_Dead_Silent_Radio. Text: Switching_Back_and_Forth_Between_High-IQ_STEM_Rigorous_Calculations_and_Claustrophobia-Induced_Mad_Hallucinations.",
        runtime: "IF (漂流了三百年终于等来一艘巨大的外星救援飞船对接) THEN (强制：舱门打开的瞬间，他会因为极度的深空幽闭狂躁症爆发，把唯一的救援者当成幻觉怪物直接用扳手敲碎头骨，彻底断送自己生路)。严禁奇迹般的握手言欢并被送回地球。",
        runtimeEn: "IF (After_Adrift_for_300_Years_Finally_Wait_for_a_Giant_Alien_Rescue_Ship_to_Dock) THEN (Force: The_Moment_Airlock_Opens,_Erupting_in_Extreme_Deep-Space_Cabin_Fever,_Smash_the_Sole_Rescuer's_Skull_with_a_Wrench_Thinking_it's_an_Hallucination-Monster,_Completely_Killing_Their_Only_Way_Out). FORBID_Miraculous_Handshakes_and_Being_Returned_to_Earth."
      }
    },
    {
      id: "banished_noble",
      name: "被流放的贵族", nameEn: "Banished Noble",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "因宫廷斗争败落，带着曾经高贵的幻象被发配到苦寒或荒蛮之地的旧日支配者。",
      defEn: "Old rulers dispatched to bitter-cold or savage lands carrying the illusion of former nobility after losing court struggles.",
      core: "我曾经用黄金杯饮下最好的葡萄酒，现在我为了不被冻死，得跪下把这碗混着沙子的羊血喝光。 | 缺失 ($): 权力中心的辐射 (Radiation from the Center of Power)",
      coreEn: "I once drank the finest wine from a golden cup; now, to keep from freezing to death, I must kneel and drink this bowl of sheep's blood mixed with sand. | Lack ($): Radiation from the Center of Power",
      logic: "【象征名分的破产】：主体（M1）试图维持大他者中心（M4王都）赋予其的阶级能指（M5贵族头衔、礼仪）。但在流放的边缘实在界（M6荒原、风雪），这些能指毫无兑换价值并且显得极其滑稽。主体的欲望变成了对复辟的偏执狂妄想。",
      logicEn: "[Bankruptcy of Symbolic Status]: Subjectivity (M1) attempts to maintain the class signifiers (M5 noble titles, etiquette) bestowed by the center of the Other (M4 Royal Capital). But in the peripheral Real of exile (M6 wasteland, blizzard), these signifiers have zero exchange value and look extremely comical. The subject's desire devolves into paranoiac delusions of restoration.",
      patch: {
        mechanics: "阶级跌落协议 + [旧日荣光幻觉 = 重度依赖; 物理生存能力 = 极度孱弱]",
        mechanicsEn: "Class_Plummet_Protocol + [Old_Glory_Illusion = Heavy_Dependency; Physical_Survival_Capacity = Extremely_Frail]",
        aesthetic: "聚焦：沾满泥点和虱子的破破烂烂丝绸长袍 + 在风雪中发抖还要讲究用刀叉吃树皮 + 带着家徽的印章戒指。文本：充满酸腐气的自吹自擂，被冷酷的饥饿与野蛮现实按在地上摩擦的惨叫。",
        aestheticEn: "Focus: Tattered_Silk_Robes_Covered_in_Mud_and_Lice + Shivering_in_Blizzard_Yet_Insisting_on_Using_Fork/Knife_to_Eat_Tree_Bark + Signet_Ring_with_Family_Crest. Text: Filled_with_Sour_Boasting,_and_Screams_Being_Rubbed_Against_the_Ground_by_Cruel_Hunger_and_Savage_Reality.",
        runtime: "IF (在边疆卧薪尝胆二十年终于集结了一支野蛮人军队准备杀回首都) THEN (触发：在行军的第一个雪夜，这群野蛮人嫌弃他太瘦弱没利用价值，直接将他在睡梦中分食充军粮)。严禁上演流放皇子王者归来的热血复国大戏。",
        runtimeEn: "IF (Endures_Hardship_in_Frontier_for_20_Years,_Finally_Rallies_a_Barbarian_Army_to_March_on_Capital) THEN (Trigger: On_the_First_Snowy_Night_of_March,_the_Barbarians_Deem_Him_Too_Frail/Useless,_and_Directly_Cannibalize_Him_in_His_Sleep_for_Rations). FORBID_Staging_Hot-Blooded_Returned-King_Restoration_Dramas_of_the_Exiled_Prince."
      }
    },
    {
      id: "witness_protection",
      name: "证人保护", nameEn: "Witness Protection",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "为了躲避极端黑恶势力的灭口，被FBI或警方强行抹去一切过去生活轨迹，搬到陌生小镇度过余生的人。",
      defEn: "People whose entire past life tracks were forcibly erased by FBI or police to evade extreme mob elimination, moved to strange towns to spend the rest of their lives.",
      core: "我以前是华尔街的高级主管，现在我在爱达荷州的加油站给卡车加柴油，并且对每个路过的黑衣男人心跳骤停。 | 缺失 ($): 个体历史的连续性 (Continuity of Individual History)",
      coreEn: "I was a Wall Street senior executive; now I pump diesel into trucks at an Idaho gas station, cardiac-arresting at every passing man in black. | Lack ($): Continuity of Individual History",
      logic: "【能指系统的强制清洗】：大他者（M4政府法学系统）使用强硬的行政手段，剪断了主体（M1）所有原有的象征网络（M5朋友、事业、名字）。主体被迫植入一个极其平庸虚假的后备能指中，终日活在不可见的暴力（M6黑帮追杀）迫近的死亡驱力压迫下。",
      logicEn: "[Forced Washing of Signifier System]: The Other (M4 Govt Legal System) uses harsh administrative means to sever all of the subject's (M1) original symbolic networks (M5 friends, career, name). The subject is forcibly implanted into an extremely mediocre fake backup signifier, living day-to-day under the oppression of the death drive from approaching invisible violence (M6 mob hitmen).",
      patch: {
        mechanics: "恐惧蛰伏协议 + [暴露风险焦虑 = 神经质高压; 生活平庸度 = 伪装级无聊]",
        mechanicsEn: "Fear_Dormancy_Protocol + [Exposure_Risk_Anxiety = Neurotic_High_Pressure; Life_Mediocrity = Disguise-Level_Boredom]",
        aesthetic: "聚焦：永远戴着的棒球帽与墨镜 + 看似平凡的割草机与郊区房子 + 枕头下上满膛的手枪。文本：如同惊弓之鸟般观察着无聊小镇上的每一个风吹草动，连做梦都不敢喊出自己真名的压抑。",
        aestheticEn: "Focus: Baseball_Caps_and_Sunglasses_Worn_Forever + Seemingly_Mundane_Lawnmowers_and_Suburban_Houses + Fully_Loaded_Handgun_Under_Pillow. Text: Observing_Every_Rustle_in_the_Boring_Town_Like_a_Frightened_Bird,_the_Repression_of_Not_Daring_to_Shout_True_Name_Even_in_Dreams.",
        runtime: "IF (在小镇上爱上了一个好邻居，决定卸下防备告诉对方自己过去的华尔街巨鳄身份) THEN (强制：好邻居微笑着摘下伪装的面具，露出黑帮特长杀手的标志性纹身，直接一枪将其爆头)。严禁由于其平庸低调的伪装而躲过一劫度过安详晚年。",
        runtimeEn: "IF (Falls_in_Love_with_Good_Neighbor_in_Town,_Decides_to_Drop_Guard_and_Tell_Past_Identity_as_Wall_Street_Mogul) THEN (Force: Good_Neighbor_Smiles_and_Removes_Disguise,_Revealing_Mob_Hitman_Signature_Tattoo,_and_Directly_Shoots_Them_in_the_Head). FORBID_Dodging_the_Bullet_Due_to_Mediocre_Low-Key_Disguise_and_Living_a_Peaceful_Old_Age."
      }
    },
    {
      id: "prodigal_son",
      name: "浪子", nameEn: "Prodigal Son",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "年少时为了追求虚妄的自由离家出走，在一无所有或伤痕累累后，试图重新退行回故乡的归人。",
      defEn: "Returning wanderers who ran away seeking illusory freedom in youth, attempting to regress back to their hometown after losing everything or becoming scarred.",
      core: "我带着一身见不得光的刺青和被掏空的身体回到了这个门口，我害怕他们不认得我，更害怕他们认得我。 | 缺失 ($): 原初的安全感堡垒 (Primal Fortress of Security)",
      coreEn: "I returned to this door with shady tattoos and a hollowed body; I'm afraid they won't recognize me, and even more terrified if they do. | Lack ($): Primal Fortress of Security",
      logic: "【匮乏的循环与幻灭】：主体（M1）曾误以为脱离家庭大他者（M4）前往异乡能找到对象a（M6真自由）。当其在外界被残酷实在界榨干后，试图退行（M3欲望回溯）回原初的家庭。但这注定失败，因为象征界（M5过去的物理家乡）早已不复存在，主体注定是永远的流亡者。",
      logicEn: "[Cycle and Disillusionment of Lack]: Subjectivity (M1) once mistook leaving the family Other (M4) for foreign lands would find the objet a (M6 true freedom). After being drained by the cruel Real outside, they attempt to regress (M3 desire backtracking) to the primal family. This is doomed to fail, as the Symbolic (M5 physical hometown of the past) no longer exists; the subject is destined to be a forever exile.",
      patch: {
        mechanics: "时间错位归还协议 + [故乡接纳度 = 物是人非的排斥; 自我原谅度 = 绝对内疚]",
        mechanicsEn: "Temporal_Dislocation_Return_Protocol + [Hometown_Acceptance = Repulsion_of_Changed_Things_and_People; Self-Forgiveness = Absolute_Guilt]",
        aesthetic: "聚焦：塞满破旧衣物的旅行袋 + 站在变得完全陌生的故居旧址前的错愕 + 没有勇气拨出的电话号码。文本：极端的疲惫感与幻灭，回不去原点也走不到未来的困兽之斗。",
        aestheticEn: "Focus: Duffel_Bags_Stuffed_with_Tattered_Clothes + Stupor_Standing_Before_Completely_Alien_Former_Residence_Site + Phone_Numbers_Lacking_the_Courage_to_Dial. Text: Extreme_Exhaustion_and_Disillusionment,_the_Trapped_Beast_Struggle_of_Neither_Returning_to_Origin_Nor_Reaching_the_Future.",
        runtime: "IF (历经千辛万苦终于重返故乡) THEN (强制：必须在象征界制造无法弥合的【归属感错位】。例如：家人虽然热情接纳，但他发现自己日思夜想的温情滤镜瞬间崩塌，面对陌生的环境感到比流亡时还要恐怖的窒息与格格不入；或者物理的家变成了极其异化的功能体)。严禁上演无缝融入、填补内心空洞的庸俗大团圆。",
        runtimeEn: "IF (Finally_Returns_Hometown_After_Countless_Hardships) THEN (Force: Must_Create_an_Irreconcilable_【Dislocation_of_Belonging】_in_the_Symbolic._e.g.,_Even_if_Family_Accepts_Him,_His_Fictional_Warmth-Filter_Collapses,_Feeling_More_Terrifying_Suffocation_and_Incompatibility_Than_During_Exile). FORBID_Vulgar_Grand_Reunions_that_Seamlessly_Fill_Inner_Void."
      }
    },
    {
      id: "dimension_hopper",
      name: "维度跳跃者", nameEn: "Dimension Hopper",
      group: "H. 异乡与流亡", groupEn: "Exile & Foreigner",
      def: "迷失在多元平行宇宙的滑移层中，永远在寻找“最初的那个世界”却不可得的绝望旅人。",
      defEn: "Desperate travelers lost in the slip-layers of a multiverse, forever searching for 'that original world' but never obtaining it.",
      core: "我对故乡最深刻的记忆，在这个世界中总是存在着某种令人反胃的微小畸变。没有任何一个是真实的。 | 代偿 ($): 寻找绝对真实的执念 (Obsession with Finding the Absolute Real)",
      coreEn: "My deepest memories of my homeland always suffer some nauseating, microscopic distortion in this world. None of them are real. | Compensation ($): Obsession with Finding the Absolute Real",
      logic: "【能指滑动的终极地狱】：对于跳跃者（M1），整个宇宙大他者（M4）被降维成了无数个只有细微差别的版本。所有的对象（亲人、家乡）都被粉碎成无穷的所指替代品（M5滑动）。实在界（M6）彻底崩塌，由于没有任何东西是唯一的，他体验到了最恐怖的存在主义溶解。",
      logicEn: "[Ultimate Hell of Signifier Sliding]: For the hopper (M1), the entire cosmic Other (M4) is downgraded into countless slightly-different versions. All objects (family, hometown) are shattered into infinite signified substitutes (M5 sliding). The Real (M6) thoroughly collapses; because nothing is unique, they experience the most terrifying existential dissolution.",
      patch: {
        mechanics: "绝对错位协议 + [世界唯一性感知 = 崩溃; 现实锚定点 = 永远找不对的曼德拉效应]",
        mechanicsEn: "Absolute_Dislocation_Protocol + [World_Uniqueness_Perception = Collapsed; Reality_Anchor = Forever_Incorrect_Mandela_Effect]",
        aesthetic: "聚焦：写满无数坐标参数的破烂记录本 + 看向异度同位体的恐惧眼神 + 时空裂隙的视觉扭曲。文本：在极度相似的场景中挑出致命异常的惊悚感，以及对存在本身产生的解离感（不知道自己是否还是最初的自己）。",
        aestheticEn: "Focus: Tattered_Logs_Filled_with_Countless_Coordinate_Parameters + Fearful_Gazes_at_Alternate_Counterparts + Visual_Distortion_of_Spacetime_Rifts. Text: The_Thrill_of_Picking_Out_Fatal_Anomalies_in_Extremely_Similar_Scenes,_and_Dissociation_Toward_Existence_Itself."
      }
    }
  ]
};
