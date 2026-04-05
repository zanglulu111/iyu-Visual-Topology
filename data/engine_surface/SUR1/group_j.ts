import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_J: LibraryCategoryDef = {
  id: "type_j",
  name: "爱情与罗曼史 (Romance & Intimacy)",
  desc: "为了满足“极致细分”，专注于亲密关系的建立与拉扯。",
  items: [
    { 
      id: "first_love", 
      name: "初恋/纯爱", nameEn: "First Love",
      def: "校园、青涩、暗恋、无疾而终、白色系。", 
      defEn: "Campus setting, innocent, secret crush, dying without a trace, white color palette.",
      core: "第一次心动 vs 不敢触碰的羞涩。纯洁无暇但往往以遗憾告终。 | 换喻 ($): 被阳光穿透的白色窗帘与飘落的樱花 (White Curtains Pierced by Sunlight and Falling Cherry Blossoms)",
      coreEn: "First heartbeat vs the shyness of not daring to touch. Pure and flawless but often ending in regret. | Metonymy ($): White Curtains Pierced by Sunlight and Falling Cherry Blossoms",
      logic: "【纯洁悬置】：M3（最原初的情动）被悬置在 M5（青涩与胆怯）之中。逻辑在于‘未完成’：正是因为没有发生肉体关系（未完全对象化），初恋才保持了永恒的纯洁。",
      logicEn: "[Pure Suspension]: M3 (The most generic affection) is suspended within M5 (Innocence and timidity). The logic lies in 'incompleteness': precisely because no physical relationship occurred (not fully objectified), first love remains eternally pure.",
      patch: {
        mechanics: "基础心动协议 + [触碰阈值 = 极高; 视觉高光度 = +50%]",
        mechanicsEn: "Base_HEARTBEAT + [Touch_Threshold = Extremely_High; Visual_Highlight = +50%]",
        aesthetic: "聚焦：强烈曝光的柔和逆光 + 慢镜头中的发丝飞舞 + 单车后座上轻轻抓着衣角的手。文本：只言片语的试探，大量的内心独白（Voice Over）与没有递出去的情书。",
        aestheticEn: "Focus: Overexposed_Soft_Backlight + Hair_Flying_In_Slow_Motion + Hands_Gently_Grasping_Shirt_Hem_On_Bike_Backseat. Text: Fragmented_Probing_Words_Massive_Internal_Monologue_(VO)_And_Undelivered_Love_Letters.",
        runtime: "IF (女主在洒满阳光的图书馆里偷偷看向熟睡的男主) THEN (男主的睫毛必须在微风的吹拂下颤动，女主在惊慌中收回视线并红了耳朵)。",
        runtimeEn: "IF (Female_Lead_Secretly_Looks_At_Sleeping_Male_Lead_In_Sunlit_Library) THEN (Male_Lead's_Eyelashes_Must_Flutter_In_Breeze_Female_Lead_Panics_Averts_Gaze_With_Red_Ears)."
      }
    },
    { 
      id: "tragic", 
      name: "虐恋/绝恋", nameEn: "Tragic Romance",
      def: "绝症、阶级阻碍、生离死别、催泪弹。", 
      defEn: "Terminal illness, class obstacles, life and death separation, tear-jerker.",
      core: "至死不渝的爱 vs 无法抗拒的命运（死亡/阶级）。爱得越深，痛得越切。 | 换喻 ($): 鲜血染红的白色定情信物 (White Token of Love Stained with Blood)",
      coreEn: "Undying love vs unyielding fate (death/class). The deeper the love, the sharper the pain. | Metonymy ($): White Token of Love Stained with Blood",
      logic: "【死亡升华】：M3（绝对的爱）只有通过摧毁 M2（现实肉身/社会关系）甚至死亡（M4终极命运），才能证明其无限性。这就是罗密欧与朱丽叶的逻辑。",
      logicEn: "[Sublimation by Death]: M3 (Absolute Love) can only prove its infinity by destroying M2 (Physical reality/Social relations) or even facing Death (M4 Ultimate Fate). This is the logic of Romeo & Juliet.",
      patch: {
        mechanics: "基础殉情协议 + [生还概率 = 0%; 情感浓度 = 过载]",
        mechanicsEn: "Base_MARTYRDOM + [Survival_Probability = 0%; Emotion_Density = Overload]",
        aesthetic: "聚焦：苍白的病容配上极度深情的眼眸 + 倾盆大雨中声嘶力竭的呼喊与拥抱 + 心电图拉平成直线的冰冷滴答声。文本：用尽最后一口气的深情告白，对来生、星星或永恒的宏大承诺。",
        aestheticEn: "Focus: Pale_Sickly_Face_Matched_With_Deeply_Affectionate_Eyes + Hoarse_Screaming_And_Hugging_In_Pouring_Rain + Cold_Beeping_As_EKG_Flatlines. Text: Using_The_Last_Breath_For_Affectionate_Confession_Grand_Promises_Of_Next_Life/Stars/Eternity.",
        runtime: "IF (一方因为绝症或不可抗力即将死去，另一方死死抓住TA的手) THEN (濒死方必定会笑着流下一滴眼泪说“不要为我哭泣，你要好好活下去”，然后在最煽情的配乐高潮处闭上眼睛)。",
        runtimeEn: "IF (One_Party_Is_Dying_From_Illness/Fate_While_Other_Holds_Their_Hand_Tightly) THEN (Dying_Party_Must_Smile_Shed_A_Tear_Saying_'Don't_Cry_For_Me_Live_Well'_And_Close_Eyes_At_Musical_Climax)."
      }
    },
    { 
      id: "adult", 
      name: "成熟/成人爱情", nameEn: "Adult Romance",
      def: "中年危机、出轨、复杂的伴侣关系、现实主义。", 
      defEn: "Midlife crisis, infidelity, complex partnerships, realism.",
      core: "激情消退后的倦怠 vs 寻找新的刺激。爱包含着责任、欺骗与妥协。 | 换喻 ($): 黑暗卧室中明灭的红色烟头 (Flickering Red Cigarette Ember in a Dark Bedroom)",
      coreEn: "Burnout after passion fades vs searching for new thrills. Love contains duty, deceit, and compromise. | Metonymy ($): Flickering Red Cigarette Ember in a Dark Bedroom",
      logic: "【冷性摩擦】：M3（爱情/激情）在 M2（枯燥琐碎的现实）的重压下衰变。逻辑在于爱不是童话，而是一场混合着欲望、疲惫与财产分割的长期谈判。",
      logicEn: "[Cold Friction]: M3 (Love/Passion) decays under the heavy pressure of M2 (Dull and trivial reality). Logic: Love is not a fairy tale, but a long-term negotiation mixed with desire, exhaustion, and division of property.",
      patch: {
        mechanics: "基础现实滤镜协议 + [激情维持时长 = 极短; 妥协系数 = 高]",
        mechanicsEn: "Base_REALITY_FILTER + [Passion_Duration = Extremely_Short; Compromise_Coefficient = High]",
        aesthetic: "聚焦：背对背睡觉时极其宽阔但冰冷的床铺中间地带 + 浴室镜子前审视自己衰老面容的冷光特写 + 车厢里沉默的烟圈。文本：充满言外之意的日常对话，借着讨论“今晚吃什么”来发泄多年的积怨。",
        aestheticEn: "Focus: The_Vast_But_Cold_Middle_Zone_Of_The_Bed_While_Sleeping_Back-To-Back + Cold-Lit_Close-Ups_Examining_Aging_Faces_In_Bathroom_Mirrors + Silent_Smoke_Rings_In_Cars. Text: Daily_Conversations_Full_Of_Subtext_Venting_Years_Of_Resentment_Through_Discussing_'What_To_Eat_Tonight'.",
        runtime: "IF (一对面临婚姻危机的夫妻在高级餐厅共进晚餐试图挽回关系) THEN (他们大概率不会接吻，而是会因为服务员上错了一份带着对方过敏原的菜而彻底陷入冷战，证明对方根本不关心自己)。",
        runtimeEn: "IF (A_Couple_Facing_Marriage_Crisis_Dines_At_Fancy_Restaurant_Trying_To_Save_Vows) THEN (They_Likely_Won't_Kiss_But_Will_Fall_Into_Cold_War_Because_Waiter_Served_Dish_With_Allergen_Proving_Total_Lack_Of_Care)."
      }
    },
    { 
      id: "fantasy_romance", 
      name: "奇幻/跨物种", nameEn: "Fantasy Romance",
      def: "人鬼恋、人兽恋、吸血鬼恋、跨越物种与时空的爱。", 
      defEn: "Human-ghost, human-beast, vampire romance, love transcending species and time.",
      core: "两个不同物种/世界间的吸引力 vs 物理与生理法则的阻隔。爱能超越肉体与形态。 | 换喻 ($): 野兽锋利的爪子小心翼翼地抚摸柔软的人类脸颊 (Sharp Beast Claws Carefully Caressing Soft Human Cheek)",
      coreEn: "Attraction between two different species/worlds vs barriers of physical and biological laws. Love transcends body and form. | Metonymy ($): Sharp Beast Claws Carefully Caressing Soft Human Cheek",
      logic: "【本体僭越】：M3（爱）作为最强大的连接力，能够缝合 M6（完全不同的本体论物种——人与怪物/不死生物）。对“异类”的恐惧被转化为极致的浪漫诱惑。",
      logicEn: "[Ontological Transgression]: M3 (Love) as the most powerful connecting force can staple together M6 (Completely different ontological species—Humans and Monsters/Undead). The fear of the 'Other' is transmuted into extreme romantic seduction.",
      patch: {
        mechanics: "基础异种交配协议 + [物种壁垒 = 坚不可摧; 禁忌吸引力 = MAX]",
        mechanicsEn: "Base_XENO_MATING + [Species_Barrier = Indestructible; Taboo_Attraction = MAX]",
        aesthetic: "聚焦：半透明水下/幽暗森林中发光的奇异生物质感与人类肌肤的强烈对比 + 带有危险性（如獠牙/触手）的极其轻柔的触碰。文本：关于永生、灵魂和超越人类经验的诗意对白。",
        aestheticEn: "Focus: Strong_Contrast_Between_Glowing_Bizarre_Biomass_And_Human_Skin_In_Translucent_Water/Dark_Forests + Extremely_Gentle_Touches_With_Dangerous_Appendages_(Fangs/Tentacles). Text: Poetic_Dialogue_About_Immortality_Souls_And_Transcending_Human_Experience.",
        runtime: "IF (脆弱的人类主角在极度危险的环境下即将受伤) THEN (那个强大的、冷血的异种生物必定会违背其物种天性，以一种极其暴力又绝美的方式降临并用身体为其抵挡伤害)。",
        runtimeEn: "IF (Fragile_Human_Lead_Is_About_To_Be_Hurt_In_Extreme_Danger) THEN (The_Powerful_Cold-Blooded_Xeno-Creature_Must_Defy_Its_Species_Nature_Descending_In_Violent_Yet_Gorgeous_Fashion_To_Shield_Them)."
      }
    },
    { 
      id: "enemies_to_lovers", 
      name: "欢喜冤家", nameEn: "Enemies to Lovers",
      def: "从互相讨厌到相爱、吵架公鸡模式、傲慢与偏见。", 
      defEn: "From hating to loving each other, fighting rooster mode, Pride and Prejudice.",
      core: "表面的敌意 vs 潜意识的吸引。通过争吵来确认对方是唯一能接住自己招数的势均力敌的伴侣。 | 换喻 ($): 在雨中为了抢一把伞而导致的意外跌倒拥抱 (Accidental Falling Embrace Caused by Fighting for an Umbrella in the Rain)",
      coreEn: "Surface hostility vs subconscious attraction. Confirming through arguments that the other is the only evenly matched partner who can parry one's attacks. | Metonymy ($): Accidental Falling Embrace Caused by Fighting for an Umbrella in the Rain",
      logic: "【势能转化】：M4（意识层面的剧烈冲突与极度厌恶）聚集了极高的势能，在某一个脆弱瞬间瞬间翻转（拓扑翻转）为 M3（极度的性吸引力与爱情）。恨其实是最高浓度的关注。",
      logicEn: "[Potential Energy Conversion]: M4 (Intense conflict and extreme disgust at the conscious level) gathers profound potential energy, flipping (topologically) in a vulnerable moment into M3 (Extreme sexual attraction and love). Hate is actually the highest concentration of attention.",
      patch: {
        mechanics: "基础弹簧协议 + [初始敌意 = 100; 软化阈值 = 突发危机]",
        mechanicsEn: "Base_SPRING_TENSION + [Initial_Hostility = 100; Softening_Threshold = Sudden_Crisis]",
        aesthetic: "聚焦：双方面部靠得极近、咬牙切齿时交错的呼吸 + 被意外困在极小空间（电梯/壁橱）带来的肢体紧贴 + 某一方卸下防备时瞬间的眼神软化。文本：充满攻击性的刻薄讽刺，直到其中一方因为太在乎而失言暴露真心。",
        aestheticEn: "Focus: Intertwined_Breathing_When_Faces_Are_Extremely_Close_Through_Gritted_Teeth + Physical_Pressed-Togetherness_When_Accidentally_Trapped_In_Tiny_Spaces_(Elevator/Closet) + Instant_Softening_Of_Gaze_When_Defenses_Drop. Text: Aggressively_Biting_Sarcasm_Until_One_Slips_Up_Exposing_True_Heart_Because_They_Care_Too_Much.",
        runtime: "IF (两人在暴雨中再次爆发激烈的关于自尊与偏见的争吵，谁也不肯让步) THEN (当两人骂到词穷、喘着粗气死死盯着对方的嘴唇时，必定会爆发极为热烈且粗暴的强吻)。",
        runtimeEn: "IF (They_Explode_Into_Fierce_Argument_Over_Pride_And_Prejudice_In_Pouring_Rain_Yielding_Nothing) THEN (When_They_Run_Out_Of_Curse_Words_Panting_While_Staring_Deadly_At_Each_Other's_Lips_They_Must_Erupt_Into_An_Intensely_Passionate_Rough_Kiss)."
      }
    },
    { 
      id: "taboo", 
      name: "禁忌之爱", nameEn: "Taboo Romance",
      def: "师生、乱伦边缘、不被社会接受的爱、背德感。", 
      defEn: "Teacher-student, borderline incest, socially unacceptable love, sense of immorality.",
      core: "强烈的原始欲望 vs 严厉的社会道德（大他者）。在毁灭边缘试探的快感。 | 换喻 ($): 紧闭的教务处门缝里透出凌乱的衣角 (Messy Hem of Clothes Peeking Through the Closed Dean's Office Door)",
      coreEn: "Intense primal desire vs strict social morality (The Big Other). The thrill of probing the edge of destruction. | Metonymy ($): Messy Hem of Clothes Peeking Through the Closed Dean's Office Door",
      logic: "【律法诱惑】：M3（欲望）是由 M4（社会禁忌/大他者的律法）创造出来的。越是禁止，越是渴望。这是关于打破规矩的终极快感与毁灭焦虑的结合。",
      logicEn: "[Seduction of the Law]: M3 (Desire) is created precisely by M4 (Social Taboo / Law of the Big Other). The more forbidden, the more desired. A combination of the ultimate thrill of breaking rules and the anxiety of destruction.",
      patch: {
        mechanics: "基础僭越协议 + [社会道德压力 = 泰山压顶; 感官放大倍率 = 致命]",
        mechanicsEn: "Base_TRANSGRESSION + [Social_Moral_Pressure = Crushing; Sensory_Amplification = Fatal]",
        aesthetic: "聚焦：透过百叶窗洒在半裸身体上的条纹阴影 + 门外有人走过时屏住呼吸的极度紧张感特写 + 象征权威的物品（如眼镜、教鞭、神职项圈）被扯落或亵渎。文本：压低声音的喘息，以及关于“我们不能这样”、“我们会被毁掉的”的无效拒绝。",
        aestheticEn: "Focus: Striped_Shadows_From_Blinds_Spilled_On_Half-Naked_Bodies + Extreme_Tension_Close-Up_Holding_Breath_While_Footsteps_Pass_Outside_Door + Authoritative_Objects_(Glasses_Pointer_Clerical_Collar)_Being_Torn_Off_Or_Desecrated. Text: Whispered_Panting_And_Futile_Rejections_Like_'We_Can't_Do_This'_'We_Will_Be_Ruined'.",
        runtime: "IF (两人在某个象征权威的绝对禁区（如教堂的告解室或校长的办公桌下）发生了身体接触) THEN (外面绝对会传来清教徒或权威代表（如修女/教导主任）走近并询问的皮鞋声，将偷情的刺激感推至临界点)。",
        runtimeEn: "IF (They_Make_Physical_Contact_In_An_Absolute_Forbidden_Zone_Of_Authority_(e.g. Confessional_Or_Under_Principal's_Desk)) THEN (Puritan/Authority_Figure_(Nun/Dean)_Must_Approach_With_Clicking_Shoes_And_Ask_A_Question_Pushing_The_Thrill_Of_Affair_To_Critical_Mass)."
      }
    },
    { 
      id: "period_romance", 
      name: "历史/古典爱情", nameEn: "Period Romance",
      def: "古典礼仪、信物、宫廷或庄园背景、含蓄与克制。", 
      defEn: "Classical etiquette, tokens of love, court or manor background, implicit and restrained.",
      core: "压抑的礼教 vs 汹涌的内心。爱意只能通过眼神和微小的动作传达，没有露骨的肉体触碰却张力无限。 | 换喻 ($): 舞会上戴着丝绸手套的指尖极其轻微的颤抖触碰 (Trembling Slight Touch of Fingertips Wearing Silk Gloves at a Ball)",
      coreEn: "Repressed etiquette vs surging inner heart. Love expressed only through eyes and microscopic actions; enormous tension without explicit flesh. | Metonymy ($): Trembling Slight Touch of Fingertips Wearing Silk Gloves at a Ball",
      logic: "【紧身胸衣效应】：M4（维多利亚式的社会礼仪与阶级规范）像紧身胸衣一样勒紧了 M1（个人的欲望），导致微小的触碰（M3）都能产生核爆级别的情感波动。克制是为了最大的释放。",
      logicEn: "[Corset Effect]: M4 (Victorian social etiquette and class norms) tightens M1 (individual desire) like a corset, causing even microscopic touches (M3) to trigger nuclear-level emotional waves. Restraint serves ultimate release.",
      patch: {
        mechanics: "基础古典克制协议 + [肢体接触限制 = 最严; 眼神信息量 = 1GB/秒]",
        mechanicsEn: "Base_CLASSICAL_RESTRAINT + [Physical_Contact_Limit = Strictest; Eye_Contact_Bandwidth = 1GB/s]",
        aesthetic: "聚焦：油画般的极其考究的庄园自然光 + 笔尖划过羊皮纸写信的沙沙声特写 + 厚重裙摆与笔挺燕尾服在跳舞时精准的社交距离。文本：用极其冗长、华丽、拐弯抹角的书面语调情，在天气与风景的讨论中隐藏着生死相随的告白。",
        aestheticEn: "Focus: Oil-Painting_Exquisitely_Researched_Manor_Natural_Light + Close-Up_Of_Quill_Scratching_Parchment_Writing_Letter + Precise_Social_Distance_Between_Heavy_Gowns_And_Stiff_Tails_While_Dancing. Text: Flirting_In_Extremely_Lengthy_Ornate_Oblique_Written_Tone_Hiding_Life-And-Death_Confessions_Within_Discussions_Of_Weather_And_Scenery.",
        runtime: "IF (在一场极其体面的古典舞会上，男女主角被迫根据队形转换握住了彼此的手) THEN (虽然周围有几百人，但画面的焦点必定只缩小到那交叠的戴着白手套的手指上，周围的声音完全褪去，只剩下压抑的心跳声)。",
        runtimeEn: "IF (At_A_Highly_Respectable_Classical_Ball_Leads_Are_Forced_To_Hold_Hands_Due_To_Formation_Change) THEN (Despite_Hundreds_Around_Visual_Focus_Must_Narrow_Only_To_Those_Overlapping_White-Gloved_Fingers_Ambient_Sound_Fades_Leaving_Only_Muffled_Heartbeats)."
      }
    },
    { 
      id: "queer", 
      name: "同志/LGBTQ+", nameEn: "Queer Romance",
      def: "同性觉醒、社会压力、自我认同、彩虹色调、隐秘的爱。", 
      defEn: "Same-sex awakening, social pressure, self-identifications, rainbow tones, secret love.",
      core: "真实的自我欲望 vs 异性恋霸权的压迫社会。在痛苦与隐藏中完成自我发现与身份认同的旅程。 | 换喻 ($): 夏日水池边偷瞄对方被打湿的衬衫 (Secretly Glancing at the Other's Wet Shirt by the Summer Pool)",
      coreEn: "True self desire vs oppressive heteronormative society. Completing the journey of self-discovery and identity in pain and hiding. | Metonymy ($): Secretly Glancing at the Other's Wet Shirt by the Summer Pool",
      logic: "【倒影重构】：M3（对同性的爱欲）不仅是指向他者，更是 M1（重新确认自我身份）的最短路径。爱不仅是罗曼史，爱是政治抗争与自我确立。",
      logicEn: "[Reflection Reconstruction]: M3 (Homosexual Eros) is not just directed at the Other, but the shortest path to M1 (reconfirming one's self-identity). Love is not just romance; love is political rebellion and self-establishment.",
      patch: {
        mechanics: "基础身份觉醒协议 + [自我投射 = 重叠; 社会审查机制 = 高危]",
        mechanicsEn: "Base_IDENTITY_AWAKENING + [Self_Projection = Overlapping; Social_Censorship_Mechanism = High_Risk]",
        aesthetic: "聚焦：充满水汽或暧昧光影的更衣室/浴室/泳池等隐秘边缘空间 + 皮肤机理的极其细腻的特写长镜头（如《请以你的名字呼唤我》里的桃子） + 含有暗喻的色彩构图（如暖色与冷色冲撞）。文本：试探性的问句，很多时候沉默与呼吸比台词传达了更多痛苦的纠结。",
        aestheticEn: "Focus: Steamy_Or_Ambiguously_Lit_Locker_Rooms/Bathrooms/Pools_As_Secret_Liminal_Spaces + Extremely_Delicate_Long_Take_Close-Ups_Of_Skin_Texture_(e.g. Call_Me_By_Your_Name_Peach) + Metaphorical_Color_Compositions_(Warm_vs_Cold_Collision). Text: Probing_Questions_Frequently_Silence_And_Breathing_Convey_More_Agonizing_Tangle_Than_Dialogue.",
        runtime: "IF (在八十年代或某个保守的夏日小镇，主角凝视着同性好友在阳光下熟睡的脸庞) THEN (TA的手指会在半空中停留许久，想要触碰却又因巨大的恐惧而像触电般收回，最后只能通过亲吻对方留下的衣物来释放压抑)。",
        runtimeEn: "IF (In_The_80s_Or_A_Conservative_Summer_Town_Protagonist_Gazes_At_Sleeping_Face_Of_Same-Sex_Friend_In_Sunlight) THEN (Their_Fingers_Will_Hover_In_Mid-Air_For_A_Long_Time_Wanting_To_Touch_But_Retracting_Like_Shocked_By_Tremendous_Fear_Finally_Releasing_Repression_By_Kissing_The_Clothes_Left_Behind)."
      }
    },
    { 
      id: "holiday", 
      name: "假日/邂逅", nameEn: "Holiday / Encounter Romance",
      def: "旅途中的短暂爱情、意外的异国邂逅、倒计时的浪漫。", 
      defEn: "Brief love during a trip, accidental foreign encounter, countdown romance.",
      core: "有限的时间（假期） vs 无限的浪漫。一段注定要结束（因为假期结束/列车到站）的恋情，像梦一样完美且没有现实负担。 | 换喻 ($): 即将检票离站的列车时钟与最后的深情对视 (Departing Train Clock and the Final Deep Stare)",
      coreEn: "Limited time (holiday) vs infinite romance. A romance destined to end (holiday over/train arrives), perfect like a dream without realistic burdens. | Metonymy ($): Departing Train Clock and the Final Deep Stare",
      logic: "【时间胶囊】：M4（绝对的倒计时/时间限制）剔除了 M2（庸常的婚后生活与柴米油盐）。因为注定没有未来，所以这一刻的 M3（激情）达到了纯粹的最高峰。",
      logicEn: "[Time Capsule]: M4 (Absolute countdown/Time limit) extracts M2 (Mundane post-marriage life and chores). Because a future is destined to lack, M3 (Passion) in this precise moment peaks into absolute purity. (Before Sunrise effect)",
      patch: {
        mechanics: "基础《爱在》协议 + [倒计时压迫感 = +1/秒; 现实责任负担 = 0]",
        mechanicsEn: "Base_BEFORE_SUNRISE + [Countdown_Oppression = +1/sec; Reality_Burden = 0]",
        aesthetic: "聚焦：异国风情的陌生街头漫步长镜头（Walk and Talk） + 极其松弛且随性的服装质感 + 随着第一缕曙光/列车鸣笛声而突然变得清冷的打光。文本：两个陌生人抛开社会身份，进行毫无保留的灵魂对话（因为明天就不再相见）。",
        aestheticEn: "Focus: Long_Takes_Wandering_On_Exotic_Unknown_Foreign_Streets_(Walk_And_Talk) + Extremely_Relaxed_And_Casual_Wardrobe_Texture + Lighting_Suddenly_Turning_Cold_With_The_First_Ray_Of_Dawn_Or_Train_Whistle. Text: Two_Strangers_Discarding_Social_Identities_For_Unreserved_Soul_Conversations_(Because_They_Won't_Meet_Tomorrow).",
        runtime: "IF (两人在异国度过了完美的一夜，此时远处传来了火车的汽笛声或熹微的晨光亮起) THEN (氛围必定瞬间从迷醉转为极度的不舍与哀凉，他们会站在月台上进行一个长达一分钟、试图把对方嵌进记忆深处的诀别拥吻)。",
        runtimeEn: "IF (They_Spent_A_Perfect_Night_In_A_Foreign_Land_And_Distant_Train_Whistle_Blows_Or_Faint_Dawn_Breaks) THEN (Atmosphere_Must_Instantly_Shift_From_Intoxicated_To_Extremely_Reluctant_And_Sorrowful_They_Will_Stand_On_Platform_For_A_1-Minute_Farewell_Kiss_Trying_To_Embed_Mates_Into_Memory)."
      }
    },
    { 
      id: "triangle", 
      name: "三角/多角关系", nameEn: "Love Triangle",
      def: "选择的困境、嫉妒、修罗场、红玫瑰与白玫瑰。", 
      defEn: "The dilemma of choice, jealousy, shura field, red vs white rose.",
      core: "欲望的竞争性。我爱他，他爱她。红白玫瑰两难的抉择，嫉妒与占有欲的修罗场博弈。 | 换喻 ($): 三个人共桌吃饭时桌下暗流涌动的视线交错与假笑 (Undercurrent of Shifting Glances and Fake Smiles Under the Table While Three Eat Together)",
      coreEn: "Competitiveness of desire. I love him, he loves her. Red vs white rose dilemma, the shura field of jealousy and possessiveness. | Metonymy ($): Undercurrent of Shifting Glances and Fake Smiles Under the Table While Three Eat Together",
      logic: "【模仿欲望】：M3（渴望）往往不是原本自带的，而是通过 M4（第三者的介入）激发的。主体想要客体，仅仅是因为另一个竞争者也想要那个客体。（勒内·基拉尔理论）",
      logicEn: "[Mimetic Desire]: M3 (Desire) is often not innate, but triggered by M4 (Intervention of the third party). The subject desires the object simply because another competitor also desires it. (René Girard's theory)",
      patch: {
        mechanics: "基础修罗场协议 + [嫉妒燃烧值 = 爆表; 选择困难度 = 绝对对等]",
        mechanicsEn: "Base_SHURA_FIELD + [Jealousy_Burn_Value = Exploding; Choice_Difficulty = Absolutely_Equal]",
        aesthetic: "聚焦：永远把三个人同时放进画面的景深构图，通过焦点转移强调心理距离 + 捕捉到另外两人亲密动作时局外人极其落寞或燃起妒火的眼神特写。文本：充满试探、阴阳怪气、双重含义的饭局对白机制。",
        aestheticEn: "Focus: Depth-Of-Field_Compositions_Always_Enframing_All_Three_Using_Rack_Focus_To_Emphasize_Psychological_Distance + Extreme_Close-Up_Of_The_Outsider's_Desolate_Or_Jealous_Eyes_Catching_The_Other_Two's_Intimate_Actions. Text: Dinner_Dialogue_Mechanisms_Full_Of_Probing_Passive-Aggressiveness_And_Double_Meanings.",
        runtime: "IF (在一次看似平常的三人聚会中，A不经意间极其自然地帮B擦掉了嘴角的污渍) THEN (C作为被冷落的第三方，其手中的玻璃杯必定会因为用力过度险些捏碎，随后借口去洗手间掩饰情绪的崩溃)。",
        runtimeEn: "IF (During_A_Seemingly_Normal_Trio_Gathering_A_Casually_And_Naturally_Wipes_A_Stain_Off_B's_Mouth) THEN (C_As_The_Neglected_Third_Party_Must_Grip_Their_Glass_So_Hard_It_Almost_Shatters_Then_Excuse_Themselves_To_The_Restroom_To_Hide_Emotional_Collapse)."
      }
    },
    { 
      id: "soulmates", 
      name: "灵魂伴侣", nameEn: "Soulmates",
      def: "精神契合、命中注定、跨越轮回、超越肉体语言、柏拉图。", 
      defEn: "Mental sync, destined, crossing reincarnations, transcending body language, platonic.",
      core: "两个半圆终于拼成一个绝对完整的圆。超越繁衍和肉体欲望的极致默契，一种甚至令人感到宿命般恐惧的绝对归属感。 | 换喻 ($): 在茫茫人海中即使只是一个背影也能瞬间认出彼此并落泪 (Instantly Recognizing Each Other's Backs in a Crowded Sea of People and Shedding a Tear)",
      coreEn: "Two half-circles finally form an absolute whole. Supreme tacit understanding transcending reproduction and carnal desire, an absolute belonging that almost inspires fatalistic dread. | Metonymy ($): Instantly Recognizing Each Other's Backs in a Crowded Sea of People and Shedding a Tear",
      logic: "【同一性补完】：M1（主体）在遇到另一个 M1' 之前，永远体验着 M2（存在性虚无缺损）。灵魂伴侣的逻辑意味着自我必须在绝对镜像的另一个人身上才能找回缺失的另一半。",
      logicEn: "[Identity Completion]: M1 (Subject) before meeting another M1', eternally experiences M2 (Existential Void/Deficiency). The logic of soulmates means the self can only recover its missing half in the absolute mirror of the other.",
      patch: {
        mechanics: "基础柏拉图协议 + [精神同步率 = 100%; 肉体依赖度 = 可忽略]",
        mechanicsEn: "Base_PLATONIC + [Mental_Sync_Rate = 100%; Physical_Dependency = Negligible]",
        aesthetic: "聚焦：并没有身体接触但感觉极其亲密的画面氛围（如相隔几公里的神交蒙太奇） + 经常出现对方说完上半句，自己下意识接出下半句的对话剪辑 + 充满神性光辉的金黄色调。文本：仿佛在和另一个自己对话，高度抽象但深刻触及灵魂创伤的词汇交流。",
        aestheticEn: "Focus: Scenes_With_No_Physical_Contact_Yet_Feeling_Extremely_Intimate_(e.g. Telepathic_Montage_Miles_Apart) + Dialogue_Editing_Where_One_Finishes_Another's_Sentence_Subconsciously + Divine_Golden_Hue_Lighting. Text: Speaking_As_If_To_Another_Self_Highly_Abstract_Yet_Profoundly_Touching_Soul-Trauma_Vocabulary_Exchange.",
        runtime: "IF (女主因为极其隐秘甚至自己都无法言说的心理创痛而在午夜突然惊醒感到窒息) THEN (此时门铃必定响起，男主站在门外只因为“我感觉你刚才在呼救”，两人无需任何言语只是对视便治愈了一切)。",
        runtimeEn: "IF (Female_Lead_Wakes_Up_Suffocating_At_Midnight_Due_To_Extremely_Secret_Unspeakable_Psychological_Trauma) THEN (Doorbell_Must_Ring_Male_Lead_Stands_Outside_Simply_Saying_'I_Felt_You_Call_For_Help'_Healing_Everything_Just_By_Locking_Eyes_Without_Any_Words)."
      }
    },
    { 
      id: "fake_dating", 
      name: "契约/假戏真做", nameEn: "Fake Dating",
      def: "先婚后爱、为了利益假装情侣、玛丽苏或偶像剧高频模式。", 
      defEn: "Marriage first love later, faking couple for benefit, Mary Sue/Idol drama high-freq mode.",
      core: "虚假的契约关系 vs 真实的情感滋生。为了骗过外界而进行的亲密表演，最终欺骗了他们自己的大脑。 | 换喻 ($): 在外人面前假装亲吻但只有侧面角度借位，镜头拉近却看到疯狂跳动的颈部脉搏 (Fake Kissing for Outsiders Using Angle Tricks, but Camera Zooms in to Show Madly Pounding Neck Pulse)",
      coreEn: "Fake contractual relation vs real emotional growth. Intimate performance meant to deceive the outside world eventually tricks their own brains. | Metonymy ($): Fake Kissing for Outsiders Using Angle Tricks, but Camera Zooms in to Show Madly Pounding Neck Pulse",
      logic: "【倒置成真】：行为先于意识。M4（外在的契约规定/社会强迫）迫使两人做出属于 M3（相爱之人）的符号动作（牵手、亲吻）。根据帕斯卡尔的祈祷赌注逻辑：“你跟着做祈祷的动作，信仰自然就来了。”",
      logicEn: "[Inverted Actualization]: Action precedes consciousness. M4 (External contractual rules/social coercion) forces them into symbolic actions of M3 (lovers: hand-holding, kissing). Per Pascal's wager logic: 'Kneel and move your lips in prayer, and you will believe.'",
      patch: {
        mechanics: "基础帕斯卡尔协议 + [初始情感 = 零或负数; 假动作感染力 = 极强]",
        mechanicsEn: "Base_PASCALS_WAGER + [Initial_Emotion = 0_Or_Negative; Fake_Action_Infectiousness = Extremely_Strong]",
        aesthetic: "聚焦：厚重的一叠标注各类严苛禁止条款的婚前/恋爱契约纸张特写 + 在公众场合营业假笑并在桌子底下互相踢对方的小腿 + 意外跌倒或突如其来的必须发生肢体接触（如一张只能睡两人的小床）。文本：频繁划清界限的台词“别忘了我们只是在演戏”，然后在一秒钟后被无法控制的真实醋意打脸。",
        aestheticEn: "Focus: Close-Up_Of_A_Thick_Stack_Of_Prenup/Dating_Contracts_Marked_With_Strict_Prohibitions + Faking_Smiles_In_Public_While_Kicking_Each_Other's_Shins_Under_The_Table + Accidental_Falls_Or_Forced_Physical_Contact_(e.g. Only_One_Small_Bed_Available). Text: Frequent_Boundary-Setting_Lines_'Don't_Forget_We_Are_Just_Acting'_Immediately_Slapped_In_The_Face_By_Uncontrollable_Real_Jealousy_A_Second_Later.",
        runtime: "IF (两人在一场盛大的家族晚宴上被迫需要向怀疑的长辈证明他们“如胶似漆的爱情”) THEN (男主必定会以极为霸道且生硬的姿态将女主抵在墙角来一个真实的强吻，导致女主甚至忘了抗拒并且事后心跳加速到一夜未眠)。",
        runtimeEn: "IF (They_Must_Prove_Their_'Deeply_In_Love_Status'_To_Skeptical_Elders_At_A_Grand_Family_Dinner) THEN (Male_Lead_Must_Forcefully_And_Awkwardly_Pin_Female_Lead_To_Corner_For_A_Real_Kiss_Causing_Her_To_Forget_To_Resist_And_Stay_Awake_All_Night_With_Pounding_Heart)."
      }
    }
  ]
};
