import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_D: LibraryCategoryDef = {
  id: "type_d",
  name: "武侠与古装 (Wuxia & Period)",
  desc: "东方的浪漫主义，江湖与庙堂，历史的厚重感。",
  items: [
    { 
      id: "classic_wuxia", 
      name: "传统武侠", nameEn: "Classic Wuxia",
      def: "家国情怀、名门正派、江湖规矩、成长史诗。", 
      defEn: "Nationalism, orthodox sects, Jianghu rules, epic growth.",
      core: "个人恩怨 vs 家国大义。在江湖规矩与自由天性之间的道德抉择。 | 换喻 ($): 断剑与狂歌 (Broken Sword and Wild Song)",
      coreEn: "Personal grudges vs National duty. Moral choices between Jianghu codes and free nature. | Metonymy ($): Broken Sword",
      logic: "【江湖大义】：M4（儒家伦理/家国大义）处于至高支配地位。M1（侠客）必须压抑 M3（私人情欲）来成全 M6（大侠的社会价值）。",
      logicEn: "[Jianghu Duty]: M4 (Confucian ethics/Nation) is dominant. M1 (Xia) must suppress M3 (Personal Desire) to fulfill M6 (Hero's social value).",
      patch: {
        mechanics: "基础武侠协议 + [道德束缚 = 极强; 门派阶级 = 森严]",
        mechanicsEn: "Base_WUXIA + [Moral_Binding = Extreme; Sect_Hierarchy = Strict]",
        aesthetic: "聚焦：竹林落叶 + 白衣翻飞 + 剑气纵横。文本：正气凛然与身不由己的悲怆交织。",
        aestheticEn: "Focus: Falling_Leaves_in_Bamboo_Forests + Fluttering_White_Robes + Sword_Aura. Text: Righteousness_Mixed_With_Involuntary_Pathos.",
        runtime: "IF (面临私情与大义的冲突) THEN (必须触发：牺牲所在乎之人以保全大局的悲剧)。",
        runtimeEn: "IF (Conflict_Between_Love_and_Duty) THEN (Must_Trigger: Tragedy_of_Sacrificing_Loved_Ones_for_the_Greater_Good)."
      }
    },
    { 
      id: "ronin", 
      name: "浪子/新派武侠", nameEn: "Ronin / New Wave",
      def: "古龙/徐克式。极简主义、孤独、快意恩仇、视觉风格化。", 
      defEn: "Minimalism, absolute loneliness, instant vengeance, highly stylized visual.",
      core: "绝对的孤独与虚无。出刀只在一瞬间，生与死的界限极度模糊。 | 换喻 ($): 飞沙与烈酒 (Flying Sand and Strong Liquor)",
      coreEn: "Absolute loneliness and nihilism. The strike is instant, the line between life and death blurred. | Metonymy ($): Flying Sand",
      logic: "【刹那虚无】：剥离了传统的 M4（家国）。M1 仅依靠一种执念（M3，复仇或某个承诺）存在。M5（拔刀）是对存在主义虚无（M6）的瞬间反抗。",
      logicEn: "[Instant Nihilism]: Stripped of traditional M4 (Nation). M1 exists solely on an obsession (M3). M5 (Drawing sword) is an instant rebellion against existential void (M6).",
      patch: {
        mechanics: "基础浪漫协议 + [动作致死率 = 极高; 情感表达 = 极度克制]",
        mechanicsEn: "Base_ROMANCE + [Action_Lethality = Extremely_High; Emotion_Expression = Extremely_Restrained]",
        aesthetic: "聚焦：残阳如血 + 极度特写的眼神对峙 + 漫画式定格。文本：极其简短、跳跃、如刀锋般冰冷的对话。",
        aestheticEn: "Focus: Blood_Red_Sunsets + Extreme_Eye_Close_Ups + Comic_Freeze_Frames. Text: Very_Short_Edgy_Cold_Conversations.",
        runtime: "IF (两大高手决战) THEN (胜负只在一招，且胜利者往往感到更加空虚)。",
        runtimeEn: "IF (Two_Masters_Duel) THEN (Decided_in_One_Move_And_Winner_Feels_Emptier)."
      }
    },
    { 
      id: "xianxia", 
      name: "仙侠/修真", nameEn: "Xianxia / Cultivation",
      def: "气与道、三界六道、飞升渡劫、宿命轮回、神仙打架。", 
      defEn: "Qi and Dao, three realms, ascending tribulations, reincarnations, immortal combat.",
      core: "逆天改命的意志 vs 天道宿命的无情压制。 | 换喻 ($): 劫雷 (Tribulation Lightning)",
      coreEn: "Will to defy heaven vs ruthless suppression by Heaven's Dao. | Metonymy ($): Tribulation Lightning",
      logic: "【逆天而行】：M1（凡人/散修）的整个 M5（修炼）过程，就是不断对抗 M4（天道法则，即物理法则的修仙版）的过程，目的是实现维度的跨越。",
      logicEn: "[Defying Heaven]: M1's (Mortal) entire M5 (Cultivation) process is a constant battle against M4 (Heaven's Dao), aiming for a dimensional leap.",
      patch: {
        mechanics: "基础升级协议 + [力量层级 = 呈指数爆炸; 业力惩罚 = 必然降临]",
        mechanicsEn: "Base_LEVELUP + [Power_Scaling = Exponential; Karma_Punishment = Inevitable]",
        aesthetic: "聚焦：漫天发光剑阵 + 浮空仙岛 + 遮天蔽日的劫雷。文本：充满道教术语的宏大力量播报与前世今生的痴缠。",
        aestheticEn: "Focus: Glowing_Sword_Arrays_in_Sky + Floating_Islands + Sky-Covering_Tribulation_Lightning. Text: Grand_Power_Scales_With_Daoist_Terms_and_Karma_Love.",
        runtime: "IF (主角突破极高境界) THEN (必须引来足以毁灭其肉体与所爱之人的天罚)。",
        runtimeEn: "IF (Hero_Breaks_Through_High_Realm) THEN (Must_Attract_Heavenly_Punishment_That_Could_Destroy_Him_And_Loved_Ones)."
      }
    },
    { 
      id: "court", 
      name: "宫廷/权谋", nameEn: "Court Politics",
      def: "庙堂之高、夺嫡、后宫争斗、朝堂博弈、帝王心术。", 
      defEn: "High court, succession wars, harem intrigue, imperial mind games.",
      core: "极度压抑的礼教 vs 极度膨胀的权力欲望。密闭空间内的生死博弈。 | 换喻 ($): 鸩酒 (Poisoned Wine)",
      coreEn: "Extremely repressed etiquette vs maximally inflated power lust. Life/death games in enclosed spaces. | Metonymy ($): Poisoned Wine",
      logic: "【权力牢笼】：M4（皇权/礼教）是无法被物理摧毁的绝对环境。M1 只能使用 M5（语言/阴谋）而不是武力。系统是吃人的。",
      logicEn: "[Power Cage]: M4 (Imperial Power/Etiquette) is an absolute environment that cannot be physically destroyed. M1 can only use M5 (Language/Scheme) instead of force.",
      patch: {
        mechanics: "基础博弈协议 + [语言杀伤力 = 物理级别; 信任值 = 致命陷阱]",
        mechanicsEn: "Base_GAME_THEORY + [Language_Lethality = Physical; Trust_Value = Fatal_Trap]",
        aesthetic: "聚焦：巨大的对称重檐建筑 + 屏风后的剪影 + 华丽却窒息的深色朝服。文本：没有脏字但字字见血的隐喻交锋。",
        aestheticEn: "Focus: Massive_Symmetrical_Architecture + Silhouettes_Behind_Screens + Gorgeous_Choking_Dark_Robes. Text: Polite_Metaphorical_Conversations_That_Draw_Blood.",
        runtime: "IF (对某人展露了真实的善意) THEN (这份善意会立刻成为敌对派系手中最致命的把柄)。",
        runtimeEn: "IF (Showed_True_Kindness_To_Someone) THEN (This_Kindness_Immediately_Becomes_The_Deadliest_Leverage_For_Enemies)."
      }
    },
    { 
      id: "historical", 
      name: "历史/演义", nameEn: "Historical Epic",
      def: "基于真实历史的戏剧化演绎、战争史诗、帝王将相。", 
      defEn: "Dramatized true history, war epics, emperors and generals.",
      core: "英雄人物在滚滚历史车轮前的挣扎与抉择。天下大势分久必合。 | 换喻 ($): 染血的战旗 (Blood-Stained Banner)",
      coreEn: "Heroes struggling before the rolling wheels of history. The empire long divided must unite. | Metonymy ($): Blood-Stained Banner",
      logic: "【历史车轮】：M4（历史唯物主义进程）大于一切。M1（无论多伟大的英雄）的局部 M5（胜利）最终都无法阻止 M6（历史宿命）的碾压。",
      logicEn: "[Wheels of History]: M4 (Historical Process) > all. M1's (Hero) local M5 (Victories) cannot stop the crushing of M6 (Historical Destiny).",
      patch: {
        mechanics: "基础史诗协议 + [大局观要求 = MAX; 个人寿命与影响力 = 渺小]",
        mechanicsEn: "Base_EPIC + [Macro_Perspective_Requirement = MAX; Inter-generational_Lifespan = Tiny]",
        aesthetic: "聚焦：广角下的千军万马阵列 + 战鼓齐鸣 + 夕阳下的长城/废墟。文本：带有沧桑感、旁观者视角的列传体叙事。",
        aestheticEn: "Focus: Wide-Angle_Massive_Armies + War_Drums + Great_Wall_in_Sunset. Text: Weathered_Biographical_Narrative_from_Bystander.",
        runtime: "IF (英雄达到了其权力的巅峰) THEN (系统立即开始铺垫其因自身性格缺陷导致的悲剧败亡)。",
        runtimeEn: "IF (Hero_Reaches_Peak_Power) THEN (System_Immediately_Foreshadows_Tragic_Downfall_Due_To_Character_Flaw)."
      }
    },
    { 
      id: "period_mystery", 
      name: "古装探案/公案", nameEn: "Period Mystery",
      def: "古代背景下的悬疑推理、神探、悬冤昭雪。", 
      defEn: "Suspense deduction in ancient times, legendary detectives, clearing false charges.",
      core: "理性逻辑 vs 封建迷信/官场潜规则。在没有现代技术下对真相的挖掘。 | 换喻 ($): 验尸银针 (Silver Autopsy Needle)",
      coreEn: "Rational logic vs Feudal superstition/corruption. Digging for truth without tech. | Metonymy ($): Silver Autopsy Needle",
      logic: "【拨云见日】：M4（权力腐败/鬼神传说）布置了一层迷雾。M1（神探）依靠极高的 M5（逻辑推理能力），将 M2（混乱的尸体/现场）重新缝合为秩序。",
      logicEn: "[Clearing Clouds]: M4 (Corruption/Superstition) lays fog. M1 (Detective) uses high M5 (Logic) to stitch M2 (Chaotic Crime Scene) back into order.",
      patch: {
        mechanics: "基础侦探协议 + [证据搜集难度 = 受制于时代; 凶手权力地位 = 通常高于主角]",
        mechanicsEn: "Base_DETECTIVE + [Evidence_Difficulty = Era-Restricted; Culprit_Power = Often_Higher_Than_Hero]",
        aesthetic: "聚焦：夜雨中狂奔的马蹄 + 昏暗烛光下的仵作验尸 + 森严的衙门。文本：缜密的推导与对时代官场黑暗的讽刺。",
        aestheticEn: "Focus: Hooves_in_Night_Rain + Candlelight_Autopsy + Imposing_Yamen_Gates. Text: Rigorous_Deduction_Mixed_With_Satire_Of_Bureaucracy.",
        runtime: "IF (真凶被完美推理出) THEN (通常发现真凶是权倾朝野的大人物，进而陷入司政绝境)。",
        runtimeEn: "IF (True_Culprit_Perfectly_Deduced) THEN (Usually_Revealed_As_Untouchable_Aristocrat_Leading_To_Political_Deadlock)."
      }
    },
    { 
      id: "shenmo", 
      name: "志怪/神魔", nameEn: "Shenmo / Mythic",
      def: "聊斋式、妖魔鬼怪、民间传说、人妖之恋、因果报应。", 
      defEn: "Strange tales, spirits and demons, folktales, interspecies love, karma.",
      core: "人与异类（妖/鬼）的情感纠葛。礼教对跨界之爱的审判。 | 换喻 ($): 狐火与孤坟 (Fox Fire and Lonely Grave)",
      coreEn: "Emotional entanglement between human and other (Yaoguai). Trial of interspecies love by etiquette. | Metonymy ($): Fox Fire",
      logic: "【越界之恋】：M1（人类）与 M2（非人的异类）互相吸引。M4（道德礼教/法海式降妖者）代表僵化的旧秩序，对这种 M3（纯粹的自然欲望）进行暴力绞杀。",
      logicEn: "[Transgressional Love]: M1 (Human) and M2 (Other) attract. M4 (Moral Dogma/Monk) represents rigid old order violently strangling this M3 (Pure natural desire).",
      patch: {
        mechanics: "基础浪漫协议 + [种族隔离墙 = 绝对; 业报循环 = 自动触发]",
        mechanicsEn: "Base_ROMANCE + [Species_Wall = Absolute; Karma_Loop = Auto-triggered]",
        aesthetic: "聚焦：荒山破庙的夜雨 + 绝美女子的画皮褪下 + 幽暗的绿色狐火。文本：凄美、哀艳、带有因果说教的诗意描写。",
        aestheticEn: "Focus: Night_Rain_at_Ruined_Temples + Peeling_Painted_Skin_of_Beauties + Eerie_Green_Fox_Fire. Text: Poignant_Sorrowful_Poetic_Karma.",
        runtime: "IF (人妖试图过上平凡生活) THEN (天雷或捉妖师必定抵达，逼迫其以死明志)。",
        runtimeEn: "IF (Human_and_Demon_Attempt_Normal_Life) THEN (Heavenly_Lightning_or_Exorcists_Must_Arrive_Forcing_Death_Oath)."
      }
    },
    { 
      id: "alt_history", 
      name: "穿越/架空", nameEn: "Time Travel / Alt-History",
      def: "现代人回古代、利用现代知识降维打击、改变历史的幻梦。", 
      defEn: "Modern person in ancient times, low-dimensional strike with modern knowledge, rewriting history.",
      core: "现代思维与古代制度的剧烈摩擦。降维打击的爽感亦或无法改变历史的无力感。 | 换喻 ($): 燧发枪与文言文 (Flintlock and Classical Chinese)",
      coreEn: "Severe friction between modern thought and ancient system. Power fantasy or historical helplessness. | Metonymy ($): Flintlock Match",
      logic: "【文明错位】：前期 M1（现代知识）对 M4（古代技术/制度）形成爽快碾压。后期 M4（历史强大的惯性/封建皇权重力）反噬，证明个体的微小。",
      logicEn: "[Civilizational Anachronism]: Early on, M1 (Modern logic) crushes M4 (Ancient tech). Later, M4 (inertia of history/feudal power) bites back, proving individual insignificance.",
      patch: {
        mechanics: "基础系统化协议 + [科技差红利 = 极高; 制度阻力 = 随时间递增]",
        mechanicsEn: "Base_SYSTEM + [Tech_Gap_Dividend = Extreme; Institutional_Resistance = Escalating_Over_Time]",
        aesthetic: "聚焦：古代场景中突兀出现的玻璃/肥皂/火枪 + 朝堂上的现代白话演讲。文本：轻松爽文语调与后期试图撬动历史的沉重感切换。",
        aestheticEn: "Focus: Flintlocks/Glass_In_Ancient_Courts + Modern_Slang_Speech_to_Emperors. Text: Light_Power-Fantasy_Switching_To_Heavy_Historical_Leverage.",
        runtime: "IF (主角试图推行现代民主或废除皇权) THEN (必将遭遇古代最血腥的反扑甚至身边人的背叛)。",
        runtimeEn: "IF (Hero_Attempts_to_Implement_Democracy_or_Abolish_Monarchy) THEN (Will_Suffer_Bloodiest_Backlash_and_Betrayal_from_Allies)."
      }
    },
    { 
      id: "republic", 
      name: "民国/传奇", nameEn: "Republic Era",
      def: "军阀混战、十里洋场、家族兴衰、乱世佳人、谍战风云。", 
      defEn: "Warlords, foreign concessions, changing fortunes, wartime romance, espionage.",
      core: "新旧时代的剧烈撕裂。东方的传统与西方的摩登在乱世废墟上的诡异交响。 | 换喻 ($): 留声机与碎玻璃 (Phonograph and Broken Glass)",
      coreEn: "Violent tearing of old and new eras. Traditional East vs Modern West on wartime ruins. | Metonymy ($): Phonograph and Broken Glass",
      logic: "【乱世浮萍】：M4是极度动荡的（军阀/侵略者/革命）。M1的任何 M3（私人爱情或财富积累）在 M6（大时代的崩塌）面前都如薄纸般脆弱。",
      logicEn: "[Drifting in Chaos]: M4 is hyper-volatile (war/revolution). Any M3 (Personal Love/Wealth) of M1 is as fragile as wet paper against M6 (Era Collapse).",
      patch: {
        mechanics: "基础折叠协议 + [命运无常感 = MAX; 新旧文化冲突 = 显性]",
        mechanicsEn: "Base_FOLD + [Fate_Volatility = MAX; East_West_Conflict = Explicit]",
        aesthetic: "聚焦：雨中奔跑的旗袍 + 枪战打碎的百乐门霓虹灯 + 氤氲的鸦片烟雾。文本：张爱玲式的华丽苍凉与无情的枪炮声乱炖。",
        aestheticEn: "Focus: Qipao_Running_in_Rain + Tommy_Guns_Shattering_Neon_Signs + Opium_Smoke. Text: Gorgeous_Desolation_Stewed_With_Relentless_Gunfire.",
        runtime: "IF (男女主在乱世中立下未来的誓言) THEN (第二天的战火必将把他们永远冲散)。",
        runtimeEn: "IF (Lovers_Make_Vows_For_The_Future_Amidst_Chaos) THEN (Next_Day's_Artillery_Must_Separate_Them_Forever)."
      }
    },
    { 
      id: "manor", 
      name: "种田/宅斗", nameEn: "Manor Drama",
      def: "古代庶民或贵族后宅、家族矛盾、嫡庶之争、家长里短的微观政治。", 
      defEn: "Ancient domestic life, family feuds, micropolitics of the inner courtyard.",
      core: "家族秩序下的生存内耗。螺蛳壳里做道场，一碗药汤里的生死博弈。 | 换喻 ($): 刺绣与藏针 (Embroidery and Hidden Needle)",
      coreEn: "Survival attrition under family hierarchy. Life and death schemes in a bowl of medicine. | Metonymy ($): Hidden Needle",
      logic: "【微观政治】：M4不再是天下，而是“家族礼法”。M1 被物理禁锢在深宅（后院），M5战斗变成了克制的语言试探、毒药、以及母凭子贵等生物学规训。",
      logicEn: "[Micro Politics]: M4 is the 'Family Hierarchy'. M1 is confined to the courtyard. M5 (Combat) is verbal probing, poison, and biological discipline.",
      patch: {
        mechanics: "基础博弈协议 + [物理活动范围 = 极小; 细节压迫感 = 极强]",
        mechanicsEn: "Base_GAME_THEORY + [Physical_Radius = Tiny; Detail_Oppression = Extreme]",
        aesthetic: "聚焦：精致而封闭的四方院落 + 茶杯盖划过茶水的刺耳声 + 四季衣饰的繁复更迭。文本：极度琐碎、绵里藏针的日常白描。",
        aestheticEn: "Focus: Exquisite_Closed_Courtyards + Tea_Cover_Scraping_Harshly + Endless_Wardrobe_Changes. Text: Extremely_Trivial_Needle_In_Cotton_Daily_Descriptions.",
        runtime: "IF (某角色表现出极致的温柔与退让) THEN (这绝对是一次致命反杀的前置布局)。",
        runtimeEn: "IF (Character_Shows_Extreme_Gentleness_and_Yielding) THEN (This_Is_Absolutely_A_Setup_For_A_Lethal_Counterkill)."
      }
    },
    { 
      id: "kungfu", 
      name: "功夫/技击", nameEn: "Kung Fu",
      def: "强调身体格斗技巧、擂台比武、门派传承、民族气节（清末民初为多）。", 
      defEn: "Martial arts technique, ring combat, lineage, national integerity (mostly late Qing).",
      core: "肉体的极限修炼 vs 精神尊严的捍卫。用拳脚来完成哲学对话。 | 换喻 ($): 木人桩 (Wooden Dummy)",
      coreEn: "Extreme flesh training vs defense of spiritual dignity. Philosophic dialogue through fists. | Metonymy ($): Wooden Dummy",
      logic: "【拳脚布道】：M5（格斗术）不仅是暴力，而是 M1 的人生哲学(M3)的物理延展。打败对手（M4）就是让自己的“道”在肉体层面确立合法性。",
      logicEn: "[Fist Preaching]: M5 (Combat) is not just violence, it's the physical extension of M1's philosophy (M3). Defeating M4 validates one's 'Dao' physically.",
      patch: {
        mechanics: "基础动作协议 + [肉体对抗细节 = 满级; 武德/规则感 = 必须有]",
        mechanicsEn: "Base_ACTION + [Flesh_Combat_Detail = MAX; Martial_Virtue = Mandatory]",
        aesthetic: "聚焦：布鞋踩踏飞扬的尘土 + 汗水被打飞的慢动作 + 抱拳行礼的静止态。文本：对发力技巧（寸劲/气）的精准描写，拳拳到肉的钝痛感。",
        aestheticEn: "Focus: Dust_Flying_From_Cloth_Shoes + Sweat_Flying_Slow-Mo + Salute_Freeze_Frame. Text: Precise_Kinetic_Force_Description_and_Blunt_Flesh_Impact.",
        runtime: "IF (遭遇蛮力型外国力士/毫无底线的暴徒) THEN (主角必须用蕴含东方哲学的以柔克刚完成反杀)。",
        runtimeEn: "IF (Encounters_Brute_Foreign_Fighter_or_Thug) THEN (Hero_Must_Counter-Kill_Using_Soft-Overcomes-Hard_Eastern_Philosophy)."
      }
    },
    { 
      id: "unofficial", 
      name: "戏说/野史", nameEn: "Unofficial History",
      def: "借古讽今、轻松解构、不拘泥于史实的民间狂欢与喜剧化表达。", 
      defEn: "Satire via history, light deconstruction, comedic folk narrative not strictly factual.",
      core: "严肃权力的荒诞化。历史大人物被拉下神坛变成世俗跳梁小丑。 | 换喻 ($): 龙袍上的油渍 (Grease Stain on Dragon Robe)",
      coreEn: "Absurdification of serious power. Great historical figures pulled down into vulgar clowns. | Metonymy ($): Grease Stain on Hubris",
      logic: "【权力祛魅】：M4（历史/皇权）原本是威严的，但被系统强制赋予了 M0（喜剧逻辑）。M1 通过市井打诨在逻辑层面瓦解了 M4 的神圣性。",
      logicEn: "[Disenchantment of Power]: M4 (Imperial Power) is normally majestic but forced into M0 (Comedy logic). M1 dismantles M4's sacredness via vulgar banter.",
      patch: {
        mechanics: "基础喜剧协议 + [第四面墙 = 虚设; 现代价值观投射 = 随意]",
        mechanicsEn: "Base_COMEDY + [Fourth_Wall = Illusory; Modern_Value_Projection = Free]",
        aesthetic: "聚焦：极其鲜亮夸张的民间服饰 + 挤眉弄眼的表情反馈 + 滑稽的追逐战。文本：充满谐音梗、现代网络用语转换的古装相声。",
        aestheticEn: "Focus: Exaggerated_Bright_Folk_Costumes + Winking_Expressions + Slapstick_Chases. Text: Ancient_Stand-up_Comedy_Filled_With_Modern_Puns.",
        runtime: "IF (皇帝即将下达一项残酷的死刑指令) THEN (必因为某个极为可笑的生理原因（如打嗝/拉肚子）而中断)。",
        runtimeEn: "IF (Emperor_About_To_Order_Cruel_Execution) THEN (Must_Be_Interrupted_By_A_Ridiculous_Biological_Reason_Like_Hiccups)."
      }
    }
  ]
};
