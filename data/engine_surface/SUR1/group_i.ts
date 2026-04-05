import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_I: LibraryCategoryDef = {
  id: "type_i",
  name: "喜剧与幽默 (Comedy & Humor)",
  desc: "解构权威，夸张日常，用笑声作为反抗或防御机制。",
  items: [
    { 
      id: "slapstick", 
      name: "肢体/闹剧", nameEn: "Slapstick",
      def: "卓别林式、成龙式、滑倒、砸蛋糕、夸张肢体动作。", 
      defEn: "Chaplin-esque, Jackie Chan style, slipping, pie in the face, exaggerated physical comedy.",
      core: "理性的意图被肉体的笨拙或环境的恶意所破坏。痛苦被转化为笑声。 | 换喻 ($): 踩到香蕉皮后的腾空慢动作 (Slow-mo Airborne After Slipping on Banana Peel)",
      coreEn: "Rational intentions destroyed by physical clumsiness or environmental malice. Pain transmutated into laughter. | Metonymy ($): Slow-mo Airborne After Slipping on Banana Peel",
      logic: "【肉体失能】：M5（物理重力/物质环境）以最直接的方式摧毁了 M1（个人的尊严与理性计划）。混沌在此刻战胜了秩序。",
      logicEn: "[Physical Disablement]: M5 (Physical gravity/Material environment) destroys M1 (Personal dignity and rational planning) in the most direct way. Chaos conquers Order here.",
      patch: {
        mechanics: "基础重力失效协议 + [物理抗性 = 无限大; 尊严阈值 = 0]",
        mechanicsEn: "Base_GRAVITY_FAILURE + [Physical_Resistance = Infinity; Dignity_Threshold = 0]",
        aesthetic: "聚焦：像橡胶一样拉伸与反弹的身体 + 破坏极其昂贵且易碎的资产（如巨型瓷瓶） + 夸张的音效（如“Boing”）。文本：几乎没有对白，全靠滑稽的肢体语言和急促的呼吸声。",
        aestheticEn: "Focus: Elastic_Bouncing_Bodies_Like_Rubber + Destroying_Extremely_Expensive_Fragile_Assets_(e.g. Giant_Vases) + Exaggerated_SFX_('Boing'). Text: Almost_Zero_Dialogue_Relying_Entirely_On_Slapstick_Body_Language_And_Rapid_Breathing.",
        runtime: "IF (一个西装革履、极度傲慢的绅士端着一杯红酒走在红毯上) THEN (他必定会因为踩到一个极度荒谬的微小物体而以最难看的姿势滑倒并将酒泼到最重要的人脸上)。",
        runtimeEn: "IF (A_Highly_Arrogant_Gentleman_In_A_Suit_Holding_Wine_Walks_On_Red_Carpet) THEN (He_Must_Slip_On_An_Absurdly_Tiny_Object_In_The_Ugliest_Posture_And_Spill_Wine_On_The_Most_Important_Person's_Face)."
      }
    },
    { 
      id: "screwball", 
      name: "神经喜剧/斗嘴", nameEn: "Screwball",
      def: "快语速、男女主角的语言交锋、性别对抗、好莱坞黄金时代。", 
      defEn: "Fast-talking, linguistic sparring between leads, battle of the sexes, Hollywood Golden Age.",
      core: "通过密集的、带有性暗示的唇枪舌剑来推进恋爱关系。智力相当的欢喜冤家。 | 换喻 ($): 像是机关枪般发射的俏皮话 (Machine-Gun Fired Witticisms)",
      coreEn: "Advancing romantic relationship through dense, sexually layered linguistic sparring. Intellectually matched frenemies. | Metonymy ($): Machine-Gun Fired Witticisms",
      logic: "【语言交锋】：M5（智慧与语言机锋）被用来掩饰 M3（潜意识的情欲）。吵架就是调情，更聪明的人才能赢得对方的心。",
      logicEn: "[Linguistic Sparring]: M5 (Wit and linguistic sharp interplay) is used to mask M3 (Subconscious desire). Arguing is flirting; the smarter combatant wins the heart.",
      patch: {
        mechanics: "基础辩论协议 + [语速倍率 = 200%; 性暗示隐藏度 = 高]",
        mechanicsEn: "Base_DEBATE + [Speech_Speed_Multiplier = 200%; Innuendo_Stealth = High]",
        aesthetic: "聚焦：两人围绕着沙发或床进行的进攻与防守走位 + 极其优雅定制的复古服装 + 猛烈摔门而去的背影。文本：毫无停顿、严丝合缝的台词咬合，每一句话都带有双关语和反讽。",
        aestheticEn: "Focus: Offensive/Defensive_Pacing_Around_Sofas_Or_Beds + Extremely_Elegant_Custom_Retro_Wardrobes + Backs_Turned_Fiercely_Slamming_Doors. Text: Pauseless_Tightly_Overlapping_Dialogue_Bites_With_Puns_And_Irony_In_Every_Line.",
        runtime: "IF (男女主角处于一个相对私密且安静的空间，气氛刚要走向浪漫体验) THEN (其中一方必定会挑刺对方的品味或逻辑，瞬间将粉红气泡转化为高强度的辩论赛)。",
        runtimeEn: "IF (Leads_Are_In_A_Private_Quiet_Space_And_Atmosphere_Is_About_To_Turn_Romantic) THEN (One_Must_Nitpick_The_Other's_Taste_Or_Logic_Instantly_Turning_Pink_Bubbles_Into_High-Intensity_Debate)."
      }
    },
    { 
      id: "satire", 
      name: "讽刺/黑色幽默", nameEn: "Satire / Black Comedy",
      def: "解构政治或社会道德、笑着面对绝望、奇爱博士模式。", 
      defEn: "Deconstructing political or social morality, laughing in the face of despair, Dr. Strangelove mode.",
      core: "以最荒谬的方式呈现最严肃的事物（死亡/战争）。撕破文明的虚伪面具。 | 换喻 ($): 挂着笑脸气球的核弹头 (Smiling Face Balloon on a Nuclear Warhead)",
      coreEn: "Presenting the most serious things (death/war) in the most absurd ways. Tearing the hypocritical mask of civilization. | Metonymy ($): Smiling Face Balloon on a Nuclear Warhead",
      logic: "【荒诞镜像】：M5（极度的荒谬性）暴露了 M4（系统/体制的虚伪与冷血）。世界从根本上就是疯狂的，不笑就会发疯。",
      logicEn: "[Absurd Mirror]: M5 (Extreme Absurdity) exposes M4 (System/Institution's hypocrisy and cold-bloodedness). The world is fundamentally mad; if we don't laugh, we go crazy.",
      patch: {
        mechanics: "基础解构协议 + [道德严肃性 = 完全倒置; 死亡威胁 = 日常化]",
        mechanicsEn: "Base_DECONSTRUCTION + [Moral_Seriousness = Completely_Inverted; Death_Threat = Routine]",
        aesthetic: "聚焦：极度官僚化的冰冷空间设计（如无尽走廊或冷白色作战室） + 面对惨烈死亡时角色毫不关心的冷漠脸 + 欢快活泼的配乐与残酷画面的对位。文本：用极其正式且体面的术语讨论令人发指的暴行。",
        aestheticEn: "Focus: Hyper-Bureaucratized_Cold_Space_Design_(e.g. Endless_Halls/Cold-White_War_Rooms) + Characters'_Apathetic_Faces_Facing_Gruesome_Death + Upbeat_Score_Counterpointed_With_Cruel_Imagery. Text: Discussing_Heinous_Atrocities_Using_Extremely_Formal_And_Respectable_Jargon.",
        runtime: "IF (世界末日即将到来的倒数一分钟，高官们全部聚集在地堡) THEN (他们不会去寻找解救方案，而是会为了地堡里应该储藏多少瓶可口可乐而大打出手)。",
        runtimeEn: "IF (One_Minute_Countdown_To_World's_End_And_Officials_Gather_In_Bunker) THEN (They_Will_Not_Seek_Salvation_But_Will_Brawl_Over_How_Many_Cokes_Should_Be_Stored_In_The_Bunker)."
      }
    },
    { 
      id: "spoof", 
      name: "恶搞/解构", nameEn: "Spoof / Parody",
      def: "打破第四面墙、无厘头、密集的迷影梗、类型片嘲弄。", 
      defEn: "Breaking the 4th wall, nonsensical, dense cinephile tropes, genre mockery.",
      core: "寄生在经典作品上的狂欢。打破所有虚构的边界，暴露叙事套路本身。 | 换喻 ($): 戴着经典杀手面具却在玩手机的蠢蛋 (Idiot in Classic Killer Mask Playing on Phone)",
      coreEn: "Carnival parasitic on classics. Breaking all fictional boundaries, exposing narrative tropes themselves. | Metonymy ($): Idiot in Classic Killer Mask Playing on Phone",
      logic: "【元病毒】：M5（元修辞/解构）其权重远大于 M7（主线剧情）。没有什么神圣不可侵犯，规则本身就是笑料来源。",
      logicEn: "[Meta-Virus]: M5 (Meta-rhetoric/Deconstruction) weighs vastly more than M7 (Main Plot). Nothing is sacred, the rules themselves are the punchline.",
      patch: {
        mechanics: "基础寄生协议 + [第四面墙 = 不存在; 逻辑连贯性 = 0]",
        mechanicsEn: "Base_PARASITE + [Fourth_Wall = Nonexistent; Logical_Coherence = 0]",
        aesthetic: "聚焦：拙劣但又极其眼熟的打光与镜头构图（故意模仿经典） + 前后极度不接戏的穿帮道具 + 演员突然看向镜头（Jim Halpert式凝视）。文本：直接把电影剧作的套路说出声：“一般这个时候凶手就在门后。”",
        aestheticEn: "Focus: Shoddy_Yet_Extremely_Familiar_Lighting/Compositions_(Intentional_Mimicry) + Grotesquely_Inconsistent_Continuity_Props + Actors_Suddenly_Staring_Into_Lens_(Jim_Halpert_Look). Text: Directly_Vocalizing_Screenwriting_Tropes:-'Usually_The_Killer_Is_Behind_The_Door_Right_Now.'",
        runtime: "IF (主角为了躲避可怕的连环杀手疯狂逃进树林深处) THEN (主角必定会因为树林里突然出现的赞助商品展示牌或工作人员的盒饭绊倒)。",
        runtimeEn: "IF (Protagonist_Flees_Madly_Into_Deep_Woods_To_Escape_Terrifying_Serial_Killer) THEN (Protagonist_Must_Trip_Over_A_Suddenly_Appearing_Sponsor_Billboard_Or_Crew's_Lunchbox_In_The_Woods)."
      }
    },
    { 
      id: "cringe", 
      name: "尴尬喜剧", nameEn: "Cringe Comedy",
      def: "办公空间、打破社交边界、极度不适的沉默、让人脚趾扣地。", 
      defEn: "Office spaces, breaking social boundaries, extremely uncomfortable silence, toe-curling moments.",
      core: "强烈的社交边界感被无知者无情践踏。观众替角色感到深深的社交尴尬（二手尴尬）。 | 换喻 ($): 一场只有一个人在笑的冷笑话 (A Cold Joke Where Only One Person is Laughing)",
      coreEn: "Strong sense of social boundaries mercilessly trampled by the ignorant. The audience feels deep social embarrassment for the character (second-hand cringe). | Metonymy ($): A Cold Joke Where Only One Person is Laughing",
      logic: "【社交处刑场】：M1（缺乏自我认知的主体）不断打破 M4（社会默契礼仪）。这种社交礼仪的破裂带来了比肉身更可怕的精神凌迟。",
      logicEn: "[Social Execution Ground]: M1 (Subject lacking self-awareness) constantly breaks M4 (Implicit social etiquette). This rupture of manners brings spiritual lingering death far worse than physical pain.",
      patch: {
        mechanics: "基础冷场协议 + [自我意识 = 极度错位; 沉默时长 = +10秒]",
        mechanicsEn: "Base_AWKWARD_SILENCE + [Self-Awareness = Extremely_Misaligned; Silence_Duration = +10s]",
        aesthetic: "聚焦：伪纪录片式的粗糙变焦推拉镜头（Zoom in） + 僵硬且极不自然的面部肌肉抽搐 + 空旷房间中的死寂。文本：极不得体、带有潜意识冒犯却自以为幽默的灾难性演讲。",
        aestheticEn: "Focus: Mockumentary-Style_Rough_Zoom-Ins/Outs + Stiff_Highly_Unnatural_Facial_Muscle_Twitches + Dead_Silence_In_Spacious_Rooms. Text: Extremely_Inappropriate_Subconsciously_Offensive_Yet_Self-Perceived-Humorous_Disastrous_Speeches.",
        runtime: "IF (一个极度缺爱且没有眼力见的主管在大庭广众之下讲了一个极度冒犯的黄色笑话) THEN (整个办公室会陷入长达十五秒绝对的死寂，随后镜头迅速推向远处一个无语员工的白眼)。",
        runtimeEn: "IF (A_Highly_Attention-Starved_Clueless_Boss_Tells_A_Deeply_Offensive_Dirty_Joke_In_Public) THEN (Entire_Office_Falls_Into_15-Second_Absolute_Dead_Silence_Followed_By_Quick_Zoom_To_A_Speechless_Employee's_Eye-Roll)."
      }
    },
    { 
      id: "stoner", 
      name: "大麻/飞叶子", nameEn: "Stoner Comedy",
      def: "迷幻、懒散、为了微小的目标经历荒诞冒险、无脑快乐。", 
      defEn: "Trippy, lazy, absurd adventures for tiny goals, brainless fun.",
      core: "低下的认知能力 vs 被过度放大的微小困难（如去买个汉堡）。一切都很chill。 | 换喻 ($): 车厢里浓浓的烟雾与吃了一大半的披萨 (Thick Smoke in the Car and Half-Eaten Pizza)",
      coreEn: "Low cognitive ability vs hyper-magnified tiny difficulties (e.g., getting a burger). Everything is chill. | Metonymy ($): Thick Smoke in the Car and Half-Eaten Pizza",
      logic: "【降级重涂】：M0（改变的精神状态）重新涂抹了 M2（日常现实），让所有小事变得极度荒谬与宏大。没有真正的危机，只有饥饿感。",
      logicEn: "[Downgrade Overpaint]: M0 (Altered Mental State) overpaints M2 (Daily Reality), making all trivial matters extremely absurd and epic. No real crisis, only the munchies.",
      patch: {
        mechanics: "基础致幻协议 + [反应力 = 延迟3帧; 目标降级率 = 极低]",
        mechanicsEn: "Base_HALLUCINATION + [Reaction_Time = Delayed_3_Frames; Goal_Downgrade = Extremely_Low]",
        aesthetic: "聚焦：漂浮的彩色滤镜特效 + 堆满垃圾食品、烟灰和空啤酒瓶的昏暗车库 + 充血呆滞的红色眼睛。文本：语无伦次、拖长音节、将极简单的动作（如剥橘子）上升到宇宙起源的深度哲理探讨。",
        aestheticEn: "Focus: Floating_Color_Filter_FX + Dim_Garages_Piled_With_Junk_Food/Ashes/Empty_Beer_Bottles + Bloodshot_Glassy_Red_Eyes. Text: Incoherent_Drawn-Out_Syllables_Elevating_Simple_Actions_(e.g. Peeling_An_Orange)_To_Deep_Philosophical_Discussions_Of_Cosmic_Origins.",
        runtime: "IF (主角们面临被黑帮追杀的生死危机，正要躲进一个暗巷) THEN (他们必定会被路边一家发光的便利店热狗吸引，并在那里花费十分钟讨论哪种芥末酱更好)。",
        runtimeEn: "IF (Protagonists_Face_Life-Death_Crisis_Pursued_By_Mobsters_About_To_Hide_In_Alley) THEN (They_Must_Be_Attracted_By_A_Glowing_Convenience_Store_Hot_Dog_And_Spend_10_Mins_Discussing_Which_Mustard_Is_Better)."
      }
    },
    { 
      id: "romantic_comedy", 
      name: "浪漫喜剧/小妞", nameEn: "Rom-Com",
      def: "误会起手、闺蜜助攻、追逐真爱、完美的结局。", 
      defEn: "Starts with misunderstanding, bestie assists, chasing true love, perfect ending.",
      core: "一连串可笑的误会阻碍着两个注定相爱的人。爱是疯狂且盲目的。 | 换喻 ($): 机场安检口不顾一切的狂奔 (Reckless Sprint at the Airport Checkout)",
      coreEn: "A series of ridiculous misunderstandings keeping two destined lovers apart. Love is crazy and blind. | Metonymy ($): Reckless Sprint at the Airport Checkout",
      logic: "【粉色错位】：M5（阴差阳错的事件）作为屏障不断推迟 M3（真爱的确立）。命运注定他们相爱，而小失误让他们暂时分离。",
      logicEn: "[Pink Misalignment]: M5 (Comedy of Errors) acts as a barrier delaying M3 (Establishment of True Love). Fate ordains their union, while silly mistakes temporarily part them.",
      patch: {
        mechanics: "基础红线协议 + [误会生成率 = 100%; 完美和解率 = 100%]",
        mechanicsEn: "Base_RED_THREAD + [Misunderstanding_Generation_Rate = 100%; Perfect_Reconciliation_Rate = 100%]",
        aesthetic: "聚焦：伴随轻快流行乐的疯狂采购/换装蒙太奇 + 突发阵雨中两人躲进同一屋檐的特写 + 极其抢戏的幽默胖闺蜜或毒舌男配角。文本：从互相嫌弃的斗嘴转为酒后吐真言，在最具仪式感的场合大声宣告“我爱你”。",
        aestheticEn: "Focus: Energetic_Pop-Scored_Shopping/Makeover_Montages + Close-Ups_Of_Both_Hiding_Under_Same_Eaves_In_Sudden_Showers + Scene-Stealing_Humorous_Chubby_Bestie_Or_Sassy_Sidekick. Text: From_Mutual_Disgust_Banter_To_Drunken_Truths_Shouting_'I_Love_You'_At_The_Most_Ritualistic_Occasion.",
        runtime: "IF (女主正要登机离开这座伤心的城市) THEN (男主必定会骑着借来的、极其滑稽的交通工具（如粉色小马或儿童自行车）狂奔穿越整个城市并在安检口拦下她)。",
        runtimeEn: "IF (Female_Lead_Is_About_To_Board_Flight_Leaving_The_Heartbroken_City) THEN (Male_Lead_Must_Ride_A_Borrowed_Ridiculous_Vehicle_(e.g. Pink_Pony/Kids_Bike)_Sprinting_Across_City_To_Stop_Her_At_Security)."
      }
    },
    { 
      id: "road_comedy", 
      name: "公路喜剧", nameEn: "Road Trip Comedy",
      def: "倒霉的旅途、性格不合的旅伴、乌龙事件频发。", 
      defEn: "Cursed journey, mismatched companions, frequent mishaps.",
      core: "被抛掷到一个无法控制（在路上）且必须共处（车厢内）的幽闭倒霉环境。 | 换喻 ($): 引擎盖冒黑烟的一人多高破旧卡车 (Dilapidated Truck Smoking Black from the Hood)",
      coreEn: "Being thrown into an uncontrollable (on the road) and claustrophobically forced coexistence (in the car) unlucky environment. | Metonymy ($): Dilapidated Truck Smoking Black from the Hood",
      logic: "【移动盲盒】：M4（无常的公路环境与混乱事件）强行施加压力，逼迫 M1（两个性格南辕北辙的角色）在此磨合与成长。凡事都会出错。",
      logicEn: "[Mobile Blind Box]: M4 (Impervious road environment and chaotic events) forcefully applies pressure, forcing M1 (Two totally opposite characters) to bond and grow. Whatever can go wrong, will.",
      patch: {
        mechanics: "基础磨合协议 + [交通工具故障率 = 必现; 路线偏离度 = 极大]",
        mechanicsEn: "Base_BONDING + [Vehicle_Breakdown_Rate = Guaranteed; Route_Deviation = Extreme]",
        aesthetic: "聚焦：逼仄车厢内两人的肢体碰撞冲突 + 加油站遇到的怪胎路人 + 极其劣质但总在关键时刻播放搞笑金曲的车载收音机。文本：没完没了的关于冷气温度、吃什么、看错地图的相互埋怨与歇斯底里的尖叫。",
        aestheticEn: "Focus: Physical_Collisions_In_Cramped_Car_Cabin + Freak_Bystanders_Encountered_At_Gas_Stations + Terribly_Shitty_Car_Radio_That_Plays_Funny_Hits_At_Key_Moments. Text: Endless_Mutual_Complaining_About_AC_Temp/Food/Misreading_Maps_And_Hysterical_Screaming.",
        runtime: "IF (两人在沙漠中迷路三天，终于由于受不了饿肚子而达成真诚的和解拥抱) THEN (刚抱完就会发现其实公路就在他们背后那个沙丘不到十米的地方)。",
        runtimeEn: "IF (Lost_In_Desert_For_3_Days_Finally_Reaching_A_Sincere_Reconciliation_Hug_Due_To_Starvation) THEN (Immediately_After_Hugging_They_Discover_The_Highway_Was_Less_Than_10_Meters_Behind_Their_Dune)."
      }
    },
    { 
      id: "high_school", 
      name: "青春/校园喜剧", nameEn: "Teen / High School Comedy",
      def: "破处之旅、毕业舞会、书呆子逆袭、校园阶级。", 
      defEn: "Virginity quest, prom, nerd's revenge, high school caste system.",
      core: "荷尔蒙的冲动 vs 校园严苛的社交等级（酷小子/书呆子）。成年之前的最后狂欢。 | 换喻 ($): 倒满廉价啤酒的红色塑料杯 (Red Plastic Cups Filled with Cheap Beer)",
      coreEn: "Hormonal impulses vs rigid school social hierarchy (cool kids/nerds). The last carnival before adulthood. | Metonymy ($): Red Plastic Cups Filled with Cheap Beer",
      logic: "【荷尔蒙战场】：M4（学校的阶级划分如啦啦队/书呆子）是唯一的秩序，而 M1（个人通过性经验或舞会女王头衔获取归属感）的冲动（M5驱动）必须颠覆它。",
      logicEn: "[Hormone Battlefield]: M4 (School caste like cheerleaders/nerds) is the only order, and M1 (Individual's quest for belonging via sex or prom queen title) driven by impulses (M5) must subvert it.",
      patch: {
        mechanics: "基础派对协议 + [荷尔蒙浓度 = 爆炸级; 社交阶级压迫 = 严苛]",
        mechanicsEn: "Base_PARTY + [Hormone_Concentration = Explosive; Social_Class_Oppression = Rigid]",
        aesthetic: "聚焦：被彩带和气球装点的舞池Disco球 + 极其尴尬的偷拍与暗恋日记掉落灾难 + 父母提前回家带来的恐怖片式大逃亡。文本：充满了流行缩写语、夸张的身体器官隐喻以及极度戏剧化的女生塑料姐妹花互喷。",
        aestheticEn: "Focus: Disco_Balls_On_Dance_Floors_Decorated_With_Streamers_And_Balloons + Extremely_Awkward_Sneak_Shots_And_Crush_Diary_Drop_Disasters + Horror-Movie-Style_Mass_Exodus_When_Parents_Come_Home_Early. Text: Filled_With_Trendy_Acronyms_Exaggerated_Body_Metaphors_And_Hyper-Dramatic_Plastic_Sisterhood_Bickering.",
        runtime: "IF (一个书呆子终于在盛大的派对上鼓起勇气亲吻了他暗恋四年的校花) THEN (下一秒他必定会因为极度的紧张或喝了不明饮料而疯狂呕吐在校花的昂贵礼服上)。",
        runtimeEn: "IF (A_Nerd_Finally_Gathers_Courage_To_Kiss_His_4-Year_Crush_Prom_Queen_At_A_Massive_Party) THEN (Next_Second_He_Must_Vomit_Madly_All_Over_Her_Expensive_Dress_Due_To_Extreme_Nerves_Or_Mystery_Drink)."
      }
    },
    { 
      id: "sitcom", 
      name: "情景喜剧", nameEn: "Sitcom / Family",
      def: "琐事、亲属关系、节日聚会、温情与吵闹、罐头笑声。", 
      defEn: "Trivialities, relative dynamics, holiday gatherings, warmth and noise, laugh tracks.",
      core: "家庭成员间的小摩擦 vs 永恒的亲情纽带。一切问题都能在30分钟内解决。 | 换喻 ($): 几十年陈设从未变过的客厅沙发 (The Living Room Sofa Whose Decor Hasn't Changed in Decades)",
      coreEn: "Minor friction among family/friends vs eternal bonds. All problems solved in 30 minutes. | Metonymy ($): The Living Room Sofa Whose Decor Hasn't Changed in Decades",
      logic: "【回归基态】：M4（家庭或公寓的微观动态）会发生暂时的混乱，但核心设定（M1成员的紧密链接）永远不会崩溃。状况发生，然后恢复如初。",
      logicEn: "[Return to Baseline]: M4 (Micro-dynamics of family or apartment) will experience temporary chaos, but the core setup (M1 members' tight links) never collapses. Status Quo is disturbed, then restored.",
      patch: {
        mechanics: "基础客厅协议 + [矛盾化解期限 = 极快; 外部威胁 = 几乎为0]",
        mechanicsEn: "Base_LIVING_ROOM + [Conflict_Resolution_Time = Extremely_Fast; External_Threat = Almost_0]",
        aesthetic: "聚焦：永远亮堂且恒温的标准三面墙室内布景 + 群像成员在沙发上并排而坐的构图 + 重复的一百次的敲门进场动作。文本：密集的Punchline（包袱），每个角色都有高度标签化的口头禅或性格缺陷（如强迫症、花花公子）。",
        aestheticEn: "Focus: Always_Brightly_Lit_Temperature-Constant_Standard_3-Wall_Indoor_Sets + Ensemble_Members_Sitting_Side-By-Side_On_Sofas + Repeated_Knocking-And-Entering_Moves. Text: Dense_Punchlines_Where_Every_Character_Has_Highly_Tagged_Catchphrases_Or_Flaws_(e.g. OCD/Playboy).",
        runtime: "IF (老爸和儿子因为到底谁弄坏了割草机而大吵一架，甚至扬言断绝关系) THEN (在这一集的最后一分钟，他们必定会因为看着对方被同一个蠢问题绊倒而一起坐在台阶上傻笑和解)。",
        runtimeEn: "IF (Dad_And_Son_Have_A_Huge_Fight_Over_Who_Broke_The_Lawnmower_Threatening_Disownment) THEN (In_The_Last_Minute_Of_The_Episode_They_Must_Sit_On_Steps_And_Giggle_Together_After_Seeing_Each_Other_Trip_Over_The_Same_Stupid_Issue)."
      }
    },
    { 
      id: "workplace", 
      name: "职场喜剧", nameEn: "Workplace Comedy",
      def: "办公室政治幽默化、老板与员工、社畜共鸣的日常。", 
      defEn: "Humorous office politics, boss vs employees, wage-slave relatable daily life.",
      core: "荒谬的工作要求 vs 摸鱼的生存智慧。把无聊的职场异化为滑稽的战场。 | 换喻 ($): 永远在卡纸的复印机与过期的咖啡 (Eternally Jammed Copier and Stale Coffee)",
      coreEn: "Absurd work demands vs the survival wisdom of slacking off. Alienating boring workplaces into comic battlefields. | Metonymy ($): Eternally Jammed Copier and Stale Coffee",
      logic: "【无意义齿轮】：M4（公司官僚体系或奇葩老板）是荒谬的起源。M1（员工）在反抗无意义工作和维持基本生计中寻找微小乐趣。迪尔伯特法则的具象化。",
      logicEn: "[Meaningless Gears]: M4 (Corporate bureaucracy or bizarre boss) is the origin of absurdity. M1 (Employees) find tiny joys in rebelling against meaningless work while maintaining basic livelihoods. Dilbert principle embodied.",
      patch: {
        mechanics: "基础摸鱼协议 + [官僚无效性 = 顶格; 个人微反抗 = 隐蔽且持续]",
        mechanicsEn: "Base_SLACK_OFF + [Bureaucratic_Inefficiency = Maxed; Individual_Micro-Rebellion = Covert_And_Constant]",
        aesthetic: "聚焦：逼仄灰暗的压抑格子间 + 茶水间前做作闲聊的尴尬面部特写 + 老板站在会议桌前指点江山，底下人全在翻白眼或传纸条。文本：充满职场行话（Synergy, Pivot）的空洞废话输出，应对以敷衍至极的机械回应。",
        aestheticEn: "Focus: Cramped_Gray_Oppressive_Cubicles + Awkward_Facial_Close-Ups_During_Fake_Small_Talk_By_The_Pantry + Boss_Preaching_At_Conference_Table_While_Everyone_Below_Rolls_Eyes_Or_Passes_Notes. Text: Empty_Nonsense_Output_Full_Of_Corporate_Jargon_(Synergy_Pivot)_Met_With_Extremely_Perfunctory_Robotic_Responses.",
        runtime: "IF (老板极其严肃地召开全员大会宣布一项将“彻底改变公司命运”的全新狼性管理政策) THEN (政策推行不到半天，就会因为饮水机坏了或没有人会用新的打卡系统而彻底崩盘沦为闹剧)。",
        runtimeEn: "IF (Boss_Holds_A_Deadly_Serious_All-Hands_Meeting_Announcing_A_New_Wolf-Culture_Policy_That_Will_'Transform_The_Company') THEN (Policy_Collapses_Into_Farce_Within_Half_A_Day_Because_The_Water_Cooler_Broke_Or_No_One_Knows_How_To_Use_The_New_Punch-Clock)."
      }
    },
    { 
      id: "dramedy", 
      name: "悲喜剧", nameEn: "Dramedy",
      def: "笑中带泪、苦涩的幽默、生活流、真实人生的荒诞。", 
      defEn: "Laughing through tears, bitter humor, slice of life, the absurdity of real life.",
      core: "生活的悲剧底色 vs 幽默的应对方式。在葬礼上笑场，在婚礼上哭泣。 | 换喻 ($): 葬礼上一束形状极其可笑的花圈 (A Ridiculously Shaped Wreath at a Funeral)",
      coreEn: "The tragic undertone of life vs humorous coping mechanisms. Laughing at funerals, crying at weddings. | Metonymy ($): A Ridiculously Shaped Wreath at a Funeral",
      logic: "【微笑创可贴】：M1（复杂的情感主体）面对无法解决的 M2（人生本质困境：疾病/孤独）。幽默不是为了消解痛苦，而是作为对抗悲伤的防御机制。",
      logicEn: "[Smiling Band-Aid]: M1 (Complex Emotional Subject) faces unresolvable M2 (Essential Life Dilemmas: Disease/Loneliness). Humor is not to dissipate pain, but as a defense mechanism against sadness.",
      patch: {
        mechanics: "基础灰度协议 + [情感色谱 = 极光级复杂; 反转生硬度 = 柔焦]",
        mechanicsEn: "Base_GRAYSCALE + [Emotional_Spectrum = Aurora-Level_Complex; Twist_Abruptness = Soft-Focus]",
        aesthetic: "聚焦：温暖但极其脆弱的自然光黄昏 + 角色似笑非笑的持久特写凝视 + 平凡脏乱公寓里的一顿安静便饭。文本：日常琐碎与沉底悲伤的无缝衔接，上一秒在吐槽难吃的意面，下一秒声带突然哽咽。",
        aestheticEn: "Focus: Warm_Yet_Extremely_Fragile_Natural_Twilight + Character's_Lingering_Close-Up_Gaze_Half-Smiling + A_Quiet_Casual_Meal_In_An_Ordinary_Messy_Apartment. Text: Seamless_Connection_Of_Daily_Trivia_And_Bottomless_Sorrow_Complaining_About_Bad_Pasta_One_Second_Vocal_Cords_Suddenly_Choking_The_Next.",
        runtime: "IF (主角刚刚确诊了绝症，颤抖着走出医院大门，整个画面呈现极度悲伤的氛围) THEN (TA必定会重重地踩进一坨巨大的狗屎，让TA在绝望中不可抑制地笑出声来)。",
        runtimeEn: "IF (Protagonist_Just_Diagnosed_With_Terminal_Illness_Trembling_Exiting_Hospital_In_Deeply_Sad_Atmosphere) THEN (They_Must_Step_Heavily_Into_A_Giant_Pile_Of_Dog_Poop_Causing_Them_To_Laugh_Uncontrollably_In_Despair)."
      }
    }
  ]
};
