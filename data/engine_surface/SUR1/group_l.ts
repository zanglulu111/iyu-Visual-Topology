import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_L: LibraryCategoryDef = {
  id: "type_l",
  name: "音乐与舞台 (Music & Performance)",
  desc: "以听觉节奏、舞台表演或音乐为核心驱动力的类型。",
  items: [
    { 
      id: "musical", 
      name: "百老汇/歌舞片", nameEn: "Broadway / Musical",
      def: "唱跳叙事、华丽舞台、群舞、经典改编。", 
      defEn: "Singing & dancing narrative, gorgeous stages, group dances, classic adaptations.",
      core: "现实的压抑 vs 歌舞的释放。当语言无法表达情感时，角色开始唱歌。 | 换喻 ($): 在雨中路灯下突然开始踢踏舞的西装男 (Man in Suit Suddenly Tap Dancing Under Streetlight in the Rain)",
      coreEn: "Reality's suppression vs musical's release. When language fails to express emotion, characters sing. | Metonymy ($): Man in Suit Suddenly Tap Dancing Under Streetlight in the Rain",
      logic: "【情感溢出法则】：M1（深层情感）的浓度超出了 M5（常规语言与动作）的表达极限，从而强制将 M2（现实世界）转变为 M5（高度程式化的舞台空间）。",
      logicEn: "[Emotion Overflow Law]: M1 (Deep emotion) concentration exceeds the expression limit of M5 (Normal language and action), thereby forcibly transforming M2 (Reality) into M5 (Highly stylized stage space).",
      patch: {
        mechanics: "基础百老汇协议 + [情感溢出阈值 = 50%; 世界物理规则 = 音乐剧化]",
        mechanicsEn: "Base_BROADWAY_PROTOCOL + [Emotion_Overflow_Threshold = 50%; World_Physics = Musicalized]",
        aesthetic: "聚焦：路人瞬间变成整齐划一的伴舞者（群舞） + 现实场景（如街道、车顶）无缝变成打着高光聚光灯的舞台 + 对口型的完美演唱。文本：大段押韵的、表达明确动机（如'I Want'）的歌词。",
        aestheticEn: "Focus: Passersby_Instantly_Becoming_Synchronized_Backup_Dancers + Real_World_Sets_(Streets/Car_Roofs)_Seamlessly_Turning_Into_Spotlighted_Stages + Perfect_Lip-Sync_Singing. Text: Large_Blocks_Of_Rhyming_Lyrics_Expressing_Clear_Motives_(e.g. 'I_Want'_Song).",
        runtime: "IF (男女主在深夜的公园长椅上互表心意且情绪达到高潮) THEN (天空必须突然下起粉色的雪，公园所有的路灯依次亮起成为舞美灯光，两人开始用长镜头进行一段三分钟的华尔兹长调)。",
        runtimeEn: "IF (Leads_Confess_Love_On_Bench_And_Emotion_Peaks) THEN (Pink_Snow_Must_Suddenly_Fall_All_Streetlights_Must_Turn_On_Sequentially_As_Stage_Lights_And_Pair_Starts_A_3-Minute_Waltz_Tracking_Shot)."
      }
    },
    { 
      id: "music_biopic", 
      name: "音乐传记", nameEn: "Music Biopic",
      def: "传奇歌手生平、成名与堕落、演唱会重现。", 
      defEn: "Legendary singer's life, fame and fall, concert recreations.",
      core: "凡人的脆弱 vs 舞台上的神性。成名带来的毁灭与孤独。 | 换喻 ($): 后台镜子里满是可卡因的疲惫倒影与前台几万人的狂热尖叫 (Exhausted Cocaine-Covered Reflection in Backstage Mirror vs Frantic Screams of Tens of Thousands Frontstage)",
      coreEn: "Mortal fragility vs onstage divinity. Destruction and loneliness brought by fame. | Metonymy ($): Exhausted Cocaine-Covered Reflection in Backstage Mirror vs Frantic Screams of Tens of Thousands Frontstage",
      logic: "【双重人格拓扑】：M1（台上的巨星神话）与 M1（台下的脆弱凡人）发生严重撕裂。用 M4（不可阻挡的成名时间线与药物滥用）摧毁后者，成就前者。",
      logicEn: "[Dual Persona Topology]: M1 (Onstage Superstar Myth) and M1 (Offstage Fragile Mortal) undergo severe tearing. Using M4 (Unstoppable timeline of fame and substance abuse) to destroy the latter to achieve the former.",
      patch: {
        mechanics: "基础波西米亚狂想曲协议 + [星光耀眼度 = MAX; 自毁倾向 = 高]",
        mechanicsEn: "Base_BOH_RHAP_PROTOCOL + [Stardom_Blinding_Degree = MAX; Self-Destructive_Tendency = High]",
        aesthetic: "聚焦：1:1复刻的经典演唱会机位与服装 + 后台化妆间昏暗幽闭的压抑感与大量白粉特写 + 闪光灯如机关枪般爆闪的记者群。文本：经典金曲的切片插入，伴以经纪人的剥削与爱人的哭诉。",
        aestheticEn: "Focus: 1:1_Recreated_Classic_Concert_Angles_And_Wardrobe + Dark_Claustrophobic_Backstage_Dressing_Rooms_With_Heavy_Cocaine_Close-Ups + Flashbulbs_Exploding_Like_Machine_Guns_From_Press. Text: Snippets_Of_Classic_Hits_Intercut_With_Exploitative_Managers_And_Crying_Lovers.",
        runtime: "IF (主角刚刚在体育场完成了震撼世界的演出) THEN (下一个镜头必定切到他一个人缩在巨大的豪华酒店浴缸中，目光呆滞，周围散落着空酒瓶和药丸，背景音只剩尖锐的耳鸣)。",
        runtimeEn: "IF (Protagonist_Just_Finished_A_World-Shaking_Stadium_Performance) THEN (Next_Shot_Must_Cut_To_Them_Shrunk_Alone_In_A_Giant_Luxury_Bathtub_Dead-Eyed_Surrounded_By_Empty_Bottles/Pills_With_Piercing_Tinnitus_As_Ambient_Sound)."
      }
    },
    { 
      id: "dance", 
      name: "舞蹈电影", nameEn: "Dance",
      def: "街舞、芭蕾、肢体表达、斗舞竞技。", 
      defEn: "Street dance, ballet, physical expression, dance battles.",
      core: "肉体的极限 vs 灵魂的自由。通过舞蹈动作来完成对话和战斗。 | 换喻 ($): 在积水的地下车库中用后空翻溅起水花的街舞少年 (B-Boy Splashing Water with a Backflip in a Flooded Underground Garage)",
      coreEn: "Physical limits vs soul's freedom. Dialogue and combat completed through dance moves. | Metonymy ($): B-Boy Splashing Water with a Backflip in a Flooded Underground Garage",
      logic: "【肢体替代语言】：M5（舞蹈动作的动能）直接替代了 M7（叙事语言）和 M4（暴力冲突）。角色不吵架，不打架，他们“斗舞”。躯体成为唯一定理。",
      logicEn: "[Body Replacing Language]: M5 (Kinetic energy of dance) directly replaces M7 (Narrative language) and M4 (Violent conflict). Characters don't argue or fight, they 'dance battle'. The body is the only axiom.",
      patch: {
        mechanics: "基础街舞协议 + [重力约束 = 松弛; 肢体张力 = 极大值]",
        mechanicsEn: "Base_STEP_UP_PROTOCOL + [Gravity_Constraint = Relaxed; Physical_Tension = Maximum]",
        aesthetic: "聚焦：对肌肉收缩、汗水飞溅和脚步摩擦地面的极端特写 + 慢动作（Slow-Mo）捕捉腾空的最高点 + 围绕舞者360度旋转的环形轨道镜头（Orbit）。文本：极少的对白，以强劲的Beat和呼吸声为主。",
        aestheticEn: "Focus: Extreme_Close-Ups_Of_Muscle_Contractions_Splashing_Sweat_And_Sneakers_Scraping_Floor + Slow-Motion_Capturing_The_Apex_Of_Jumps + 360-Degree_Orbit_Track_Shots_Around_Dancers. Text: Minimal_Dialogue_Dominated_By_Heavy_Beats_And_Panting_Breath.",
        runtime: "IF (两个帮派在街头狭路相逢产生矛盾) THEN (他们绝对不会掏枪，而是立刻在中线上滑步、倒立旋转，用肢体的侵略性逼退对方，同时场景必定响起巨大的低音炮BGM)。",
        runtimeEn: "IF (Two_Gangs_Clash_In_A_Narrow_Alley) THEN (They_Will_Never_Draw_Guns_But_Instantly_Moonwalk_And_Headspin_On_The_Center_Line_Using_Physical_Aggression_To_Push_Opponent_Back_While_Massive_Bass_BGM_Drops)."
      }
    },
    { 
      id: "animated_musical", 
      name: "迪士尼/动画歌舞", nameEn: "Animated Musical",
      def: "公主电影、主题曲驱动、合家欢。", 
      defEn: "Princess movies, theme song driven, family friendly.",
      core: "纯真的愿望 vs 魔法的阻碍。通过歌曲表达“我想要 (I Want Song)”。 | 换喻 ($): 在冰雪悬崖上边唱高音边一键换装并召唤城堡的闪亮女王 (Sparkling Queen Singing High Notes on an Ice Cliff While One-Click Changing Clothes and Summoning a Castle)",
      coreEn: "Innocent wishes vs magical obstacles. Expressing desires through 'I Want' songs. | Metonymy ($): Sparkling Queen Singing High Notes on an Ice Cliff While One-Click Changing Clothes and Summoning a Castle",
      logic: "【渴望的具象化】：M3（角色的核心渴望，如自由/真爱）作为叙事引擎，在唱出\"I Want Song\"时，最高级权限召唤出 M6（魔法/奇观）彻底改变 M2（环境地貌）。",
      logicEn: "[Materialization of Yearning]: M3 (Character's core desire, e.g., Freedom/True Love) acts as narrative engine. When singing the 'I Want Song', it calls highest clearance M6 (Magic/Spectacle) to utterly alter M2 (Environmental Topography).",
      patch: {
        mechanics: "基础公主神话协议 + [善恶二元对立 = 绝对; 动物通灵性 = 100%]",
        mechanicsEn: "Base_PRINCESS_MYTH_PROTOCOL + [Good_Evil_Binary = Absolute; Animal_Empathy = 100%]",
        aesthetic: "聚焦：反牛顿物理学的华丽魔法粒子特效（如冰雪、星光） + 配角动物提供夸张的喜剧拟人化反应（Comic Relief） + 角色面对广阔远景张开双臂的抒情大摇臂镜头。文本：通俗易懂的百老汇流行曲式，直抒胸臆的爱与成长。",
        aestheticEn: "Focus: Anti-Newtonian_Gorgeous_Magic_Particle_VFX_(Ice/Stardust) + Sidekick_Animals_Providing_Exaggerated_Anthropomorphic_Comic_Relief + Sweeping_Crane_Shots_Of_Character_Opening_Arms_To_Vast_Vistas. Text: Mass-Appeal_Broadway_Pop_Tunes_Directly_Expressing_Love_And_Growth.",
        runtime: "IF (女主角被困在绝境中感到绝望) THEN (此时必定会有一束柔和的月光或晨曦打在她脸上，她开始轻声唱歌，随后周围的树木/冰雪/动物开始和声共舞，瞬间解除原本的物理困境)。",
        runtimeEn: "IF (Female_Lead_Is_Trapped_And_Despairing) THEN (A_Soft_Beam_Of_Moonlight_Or_Dawn_Must_Hit_Her_Face_She_Starts_Singing_Softly_Then_Surrounding_Trees/Ice/Animals_A_Cappella_And_Dance_Instantly_Resolving_The_Physical_Dilemma)."
      }
    },
    { 
      id: "concert", 
      name: "演唱会电影", nameEn: "Concert Film",
      def: "纯粹的舞台记录、现场感、粉丝向。", 
      defEn: "Pure stage documentation, live feel, fan-oriented.",
      core: "偶像与粉丝的能量交换。纯粹的现场氛围记录，去叙事化。 | 换喻 ($): 从舞台后方拍摄偶像背影与台下几万片荧光海的巨大视差 (Giant Parallax Shot from Behind the Idol Looking at Tens of Thousands of Glowing Lights in the Crowd)",
      coreEn: "Energy exchange between idol and fans. Pure live atmosphere documentation, de-narrativized. | Metonymy ($): Giant Parallax Shot from Behind the Idol Looking at Tens of Thousands of Glowing Lights in the Crowd",
      logic: "【能量共振】：完全摒弃 M7（叙事剧情），将摄像机作为 M5（现场能量与感官张力）的传输导体。核心拓扑是台上（神/发光物）与台下（信徒/接收物）的单向或双向反馈回路。",
      logicEn: "[Energy Resonance]: Completely abandoning M7 (Narrative plot), using the camera as a transmission conductor for M5 (Live energy and sensory tension). The core topology is the feedback loop between onstage (God/Emitter) and offstage (Believers/Receiver).",
      patch: {
        mechanics: "基础纪录片协议 + [叙事性 = 0; 现场氛围感 = 200%]",
        mechanicsEn: "Base_DOCU_PROTOCOL + [Narrative = 0; Live_Atmosphere = 200%]",
        aesthetic: "聚焦：数十个机位快速切换的极快剪辑节奏 + 大量运用带有重度炫光的逆光（Backlight）勾勒歌手轮廓 + 满头大汗的乐手特写与泪流满面的粉丝特写交替。文本：只有歌词、互动式的口号（“Let me hear you!”）以及巨大的欢呼声。",
        aestheticEn: "Focus: Frantic_Editing_Pace_Cutting_Between_Dozens_Of_Cameras + Heavy_Use_Of_Extreme_Lens_Flare_Backlights_To_Silhouette_The_Singer + Intercutting_Sweat-Drenched_Musician_Close-Ups_With_Tearful_Fan_Close-Ups. Text: Only_Lyrics_Interactive_Shouts_('Let_me_hear_you!')_And_Massive_Cheering.",
        runtime: "IF (一首快歌即将进入最炸裂的副歌环节) THEN (画面必定切到俯冲入观众席的重型摇臂镜头（Cable Cam），伴随舞台上喷射出漫天彩带或火焰，剪辑速度达到1秒3切)。",
        runtimeEn: "IF (A_Fast_Song_Is_About_To_Hit_The_Explosive_Chorus) THEN (Shot_Must_Cut_To_A_Cable_Cam_Diving_Over_The_Audience_Accompanied_By_Confetti_Or_Flames_Erupting_On_Stage_Editing_Speed_Hits_3_Cuts_Per_Second)."
      }
    },
    { 
      id: "opera", 
      name: "古典/歌剧", nameEn: "Opera / Classical",
      def: "严肃音乐、宏大叙事、高雅艺术、悲剧色彩。", 
      defEn: "Serious music, grand narrative, high art, tragic undertones.",
      core: "极端的情感（爱/死） vs 极致的形式美。宏大的悲剧宿命感。 | 换喻 ($): 穿着厚重天鹅绒长裙的女高音在洒满干冰的巨大倾斜舞台上吐血高歌 (Soprano in Heavy Velvet Dress Singing High Notes While Coughing Blood on a Giant Slanted Dry-Ice Stage)",
      coreEn: "Extreme emotion (Love/Death) vs ultimate formal beauty. Grand tragic fatalism. | Metonymy ($): Soprano in Heavy Velvet Dress Singing High Notes While Coughing Blood on a Giant Slanted Dry-Ice Stage",
      logic: "【古典崇高】：用 M5（巴洛克式的华丽与巨大声压）包裹 M6（死亡/神罚的宿命）。这里没有微小的情感，所有的 M1（爱恨）都被放大为神祇般的绝对法则。",
      logicEn: "[Classical Sublime]: Wrapping M6 (Fate of Death/Divine Retribution) in M5 (Baroque opulence and massive acoustic pressure). No minor emotions here; all M1 (Love/Hate) are magnified into absolute, god-like laws.",
      patch: {
        mechanics: "基础瓦格纳协议 + [情感极化度 = 100%; 死亡神圣化 = 触发]",
        mechanicsEn: "Base_WAGNER_PROTOCOL + [Emotion_Polarization = 100%; Death_Sanctification = Triggered]",
        aesthetic: "聚焦：具有压倒性空间体积感的古典剧院建筑对称构图 + 极其繁复且不具日常功能性的华服（如金属胸甲、五米长的披风） + 深红色与暗金色的天鹅绒质感光影。文本：用古方言演唱的、宣告死亡、背叛与永恒爱的史诗咏叹调。",
        aestheticEn: "Focus: Overwhelming_Symmetrical_Compositions_Of_Classical_Theater_Architecture + Extremely_Complex_Non-Functional_Opulent_Costumes_(Metal_Breastplates/15-Foot_Capes) + Deep_Red_And_Dark_Gold_Velvet_Textured_Lighting. Text: Epic_Arias_Sung_In_Archaic_Dialects_Declaring_Death_Betrayal_And_Eternal_Love.",
        runtime: "IF (女主角喝下了致命的毒药) THEN (她绝对不会立刻倒下，而是爆发出超人类的肺活量，在舞台正中央的唯一高光下演唱长达七分钟的咏叹调，直到管弦乐轰鸣到最高点才优雅倒地)。",
        runtimeEn: "IF (Female_Lead_Drinks_Fatal_Poison) THEN (She_Will_Absolutely_Not_Drop_Instantly_But_Burst_Forth_With_Superhuman_Lung_Capacity_Singing_An_Aria_For_7_Minutes_In_The_Sole_Center_Spotlight_Only_Collapsing_Elegantly_When_The_Orchestra_Peaks)."
      }
    },
    { 
      id: "hiphop", 
      name: "嘻哈/街头", nameEn: "Hip Hop / Street",
      def: "说唱文化、地下斗争、真实街头、节奏感。", 
      defEn: "Rap culture, underground battles, authentic streets, sense of rhythm.",
      core: "街头的残酷 vs 麦克风前的尊严。用韵脚作为武器进行战斗。 | 换喻 ($): 在废弃列车场被一群穿着连帽衫的黑人青年围在中间的Rap Battle (Rap Battle Surrounded by Hooded Black Youths in an Abandoned Train Yard)",
      coreEn: "Cruelty of streets vs dignity before microphones. Using rhymes as weapons in combat. | Metonymy ($): Rap Battle Surrounded by Hooded Black Youths in an Abandoned Train Yard",
      logic: "【话语霸权】：M4（街头的贫穷与暴力）是背景画布，M5（Flow、Punchline的火力输出）是唯一能置换 M1（尊严与生存）的筹码。这是语言的角斗士场。",
      logicEn: "[Discursive Hegemony]: M4 (Poverty and violence of the streets) is the background canvas; M5 (Firepower of Flow and Punchline) is the only chip that can exchange for M1 (Dignity and Survival). This is a gladiator arena of language.",
      patch: {
        mechanics: "基础8英里协议 + [脏话密度 = 极高; 节奏卡点对齐 = 强制]",
        mechanicsEn: "Base_8_MILE_PROTOCOL + [Profanity_Density = Extremely_High; Rhythm_Beat_Alignment = Mandatory]",
        aesthetic: "聚焦：强烈的鱼眼镜头或低机位仰拍（凸显霸气） + 粗糙的工业/街头废墟场景（生锈的铁丝网、涂鸦、燃烧的塑料桶） + 带有进攻性的夸张手势与直逼镜头的特写。文本：充满俚语、双关、极具攻击性的Rap Verse与挑衅。",
        aestheticEn: "Focus: Aggressive_Fisheye_Lenses_Or_Low_Angle_Shots_(To_Exude_Dominance) + Gritty_Industrial/Street_Ruin_Sets_(Rusty_Fence_Graffiti_Burning_Trash_Cans) + Offensive_Exaggerated_Hand_Gestures_And_In-Your-Face_Close-Ups. Text: Slang-Filled_Pun-Heavy_Highly_Aggressive_Rap_Verses_And_Provocations.",
        runtime: "IF (两个死对头在地下室争夺话语权) THEN (摄影机会像拳击转播一样在两人之间快速推拉横摇，每次有人爆出Punchline（绝杀句），周围的背景人群就会像被真实物理声波击中一样全体向后仰并发出巨大的欢呼)。",
        runtimeEn: "IF (Two_Rivals_Battle_For_Dominance_In_A_Basement) THEN (Camera_Whips_And_Pans_Rapidly_Between_Them_Like_A_Boxing_Broadcast_Every_Time_A_Punchline_Drops_The_Surrounding_Crowd_Must_Lean_Back_As_If_Hit_By_A_Real_Sonic_Wave_Roaring)."
      }
    },
    { 
      id: "rock", 
      name: "摇滚/金属", nameEn: "Rock / Metal",
      def: "叛逆、乐队生活、公路巡演、躁动。", 
      defEn: "Rebellion, band life, road tours, restlessness.",
      core: "对体制的愤怒 vs 自我毁灭的倾向。性、毒品与摇滚乐。 | 换喻 ($): 在充满烟雾、汗水与啤酒味的逼仄地下室里砸碎一把冒火的电吉他 (Smashing a Flaming Electric Guitar in a Cramped, Smoke, Sweat, and Beer Smelling Basement)",
      coreEn: "Anger against the system vs self-destructive tendencies. Sex, drugs, and rock 'n' roll. | Metonymy ($): Smashing a Flaming Electric Guitar in a Cramped, Smoke, Sweat, and Beer Smelling Basement",
      logic: "【噪音暴乱】：M5（失真的噪音、狂躁的鼓点）作为武器，用于对抗并砸碎 M2（虚伪中产阶级现实或资本体系）。其拓扑必然导向一种英雄主义的 M6（飞蛾扑火式的毁灭）。",
      logicEn: "[Noise Riot]: M5 (Distorted noise, manic drumbeats) acts as a weapon to resist and smash M2 (Hypocritical middle-class reality or capitalist system). Its topology inevitably leads to a heroic M6 (Moth-to-flame destruction).",
      patch: {
        mechanics: "基础几乎成名协议 + [道德约束力 = 解除; 噪音失真度 = MAX]",
        mechanicsEn: "Base_ALMOST_FAMOUS_PROTOCOL + [Moral_Constraint = Lifted; Noise_Distortion = MAX]",
        aesthetic: "聚焦：高对比度、高噪点的粗糙摄影 + 吉他拨片在琴弦上划出的火花特写或被砸烂的架子鼓 + 极度混乱的、充满呕吐物与涂鸦的汽车旅馆房间。文本：对体制的怒骂（“F**k the system”）、虚无主义的宣泄与破碎的情话。",
        aestheticEn: "Focus: High-Contrast_High-Grain_Gritty_Cinematography + Close-Ups_Of_Guitar_Picks_Sparking_On_Strings_Or_Smashed_Drum_Kits + Extremely_Chaotic_Motel_Rooms_Filled_With_Vomit_And_Graffiti. Text: Raging_Against_System_('F**k_The_System')_Nihilistic_Venting_And_Broken_Love_Words.",
        runtime: "IF (经理人要求乐队唱一首讨好赞助商的流行商业歌曲) THEN (主唱必定会在演唱会最高潮撕毁合同，突然踩下重型失真效果器，在观众的尖叫中把话筒架砸向音箱爆出刺耳的反馈噪音（Feedback）)。",
        runtimeEn: "IF (Manager_Demands_Band_Play_A_Pop_Sellout_Song_For_Sponsors) THEN (Lead_Singer_Must_Rip_Up_Contract_At_Concert_Climax_Stomp_A_Heavy_Distortion_Pedal_And_Under_Fan_Screams_Smash_The_Mic_Stand_Into_The_Amp_Causing_Piercing_Feedback)."
      }
    },
    { 
      id: "bollywood", 
      name: "宝莱坞", nameEn: "Bollywood",
      def: "印度歌舞、色彩斑斓、超长篇幅、悲喜交加。", 
      defEn: "Indian songs and dances, colorful, ultra-long runtime, blending joy and sorrow.",
      core: "极度的通俗娱乐。爱情、动作、喜剧、悲剧的无缝（生硬）切换。 | 换喻 ($): 三百名穿着明黄与亮粉色纱丽的舞者在瑞士雪山前整齐划一地跳舞 (Three Hundred Dancers in Bright Yellow and Hot Pink Saris Dancing Synthetically in Front of Swiss Snow Mountains)",
      coreEn: "Extreme popular entertainment. Love, action, comedy, tragedy changing seamlessly (or abruptly). | Metonymy ($): Three Hundred Dancers in Bright Yellow and Hot Pink Saris Dancing Synthetically in Front of Swiss Snow Mountains",
      logic: "【全拼盘（Masala）】：不按逻辑连贯性（M1）运作，而是按观众情绪按摩的点位（M5/M7）运作。任何极端情境（谋杀、分离）都可以且必须通过一场群舞奇观（M6）来消解或升华。",
      logicEn: "[Masala Platter]: Operates not on logical coherence (M1), but on audience emotional massage points (M5/M7). Any extreme situation (murder, separation) can and must be dissolved or sublimated by a mass dance spectacle (M6).",
      patch: {
        mechanics: "基础玛莎拉协议 + [情感切换延迟 = 0; 视觉饱和度 = 溢出]",
        mechanicsEn: "Base_MASALA_PROTOCOL + [Emotion_Switch_Delay = 0; Visual_Saturation = Overflowing]",
        aesthetic: "聚焦：令人目眩的绝对高饱和色彩（金、红、品红） + 人物回头时突然改变帧率加自带强风的定格特写（Slow-Mo Hair Flip） + 无限延伸的宏伟置景（如不存在的宫殿庭院）。文本：极度夸张的情感对白，突然开始用极其高亢的女嗓伴唱。",
        aestheticEn: "Focus: Dazzling_Absolute_High-Saturation_Colors_(Gold/Red/Magenta) + Characters_Looking_Back_With_Sudden_Frame_Rate_Change_And_Magical_Wind_For_Hair_Flips + Infinitely_Extending_Grand_Sets_(Like_Non-Existent_Palace_Courtyards). Text: Highly_Exaggerated_Emotional_Dialogue_Suddenly_Transitioning_Into_Extremely_High-Pitched_Female_Playback_Vocals.",
        runtime: "IF (穷小子与富家女在市集偶遇，虽然五分钟前刚死了一个配角) THEN (两人眼神交汇的瞬间，BGM必须响起，随后整个市集的商贩立刻放下工作，组成完美的方阵给他们伴舞，进行长达十分钟毫不喘气的歌舞表演)。",
        runtimeEn: "IF (Poor_Boy_Meets_Rich_Girl_In_Bazaar_Even_Though_A_Side-Character_Died_5_Mins_Ago) THEN (The_Moment_Eyes_Meet_BGM_Must_Drop_And_All_Market_Vendors_Instantly_Drop_Work_Form_Perfect_Grid_Formation_And_Perform_A_10-Minute_Breathless_Dance_Number_With_Them)."
      }
    },
    { 
      id: "mv_style", 
      name: "MV风格/视觉专辑", nameEn: "Music Video Style",
      def: "碎片化、强视觉、音乐驱动画面、概念片。", 
      defEn: "Fragmented, strong visuals, music-driven visuals, concept film.",
      core: "视觉服务于听觉节奏。非线性的概念展示，强调氛围而非逻辑。 | 换喻 ($): 穿着高定西装的男人在一秒内通过快速剪辑穿梭落日沙漠、水下空间与燃烧的废墟 (Man in Haute Couture Suit Traversing Sunset Desert, Underwater Space, and Burning Ruins via Rapid Editing in One Second)",
      coreEn: "Visuals serve auditory rhythms. Non-linear conceptual display, emphasizing mood over logic. | Metonymy ($): Man in Haute Couture Suit Traversing Sunset Desert, Underwater Space, and Burning Ruins via Rapid Editing in One Second",
      logic: "【BPM从属定理】：M2（画面空间）与 M4（叙事时间）完全沦为 BPM（音乐节拍/M5）的奴隶。每一次切片（Cut）必须严丝合缝地落在鼓点或低音BASS上。",
      logicEn: "[BPM Subordination Theorem]: M2 (Visual Space) and M4 (Narrative Time) completely become slaves to the BPM (Musical Beating/M5). Every cut must land perfectly on the drum beat or bass drop.",
      patch: {
        mechanics: "基础视觉专辑协议 + [剪辑点位 = 锁定音频峰值; 叙事连贯度 = 碎片化]",
        mechanicsEn: "Base_VISUAL_ALBUM_PROTOCOL + [Cut_Points = Locked_To_Audio_Peaks; Narrative_Coherence = Fragmented]",
        aesthetic: "聚焦：完全不顾空间连贯性的跳跃视觉（如前一秒在宇宙，后一秒在浴缸） + 极度风格化的调色镜与夸张的视觉特效（光晕、重影） + 表演者直视镜头做对口型或摆出时装大片Pose。文本：无需对白，全部依靠歌词作为一种文本符号悬浮在视觉之上。",
        aestheticEn: "Focus: Jumpy_Visuals_Ignoring_Spatial_Coherence_(Space_One_Sec_Bathtub_The_Next) + Extremely_Stylized_Color_Grading_And_Exaggerated_VFX_(Halos/Ghosts) + Performer_Looking_Directly_At_Lens_Lip-Syncing_Or_Striking_High-Fashion_Poses. Text: No_Need_For_Dialogue_Rely_Entirely_On_Lyrics_Hovering_Like_Textual_Signs_Over_Visuals.",
        runtime: "IF (副歌前有一个长达一秒的安静停顿，然后是沉重的贝斯爆发) THEN (这一秒必须切入极端的慢动作或全黑画面，当贝斯砸下时，画面立刻切入主角一拳击碎玻璃的特写，碎片的速度与节奏完美吻合)。",
        runtimeEn: "IF (There_Is_A_1-Second_Quiet_Drop_Before_Chorus_Then_A_Heavy_Bass_Explosion) THEN (That_Second_Must_Cut_To_Extreme_Slow-Mo_Or_Pure_Black_When_Bass_Hits_Image_Instantly_Cuts_To_Protagonist_Shattering_Glass_With_A_Punch_Shards_Flying_In_Perfect_Sync_With_Rhythm)."
      }
    },
    { 
      id: "backstage", 
      name: "后台/演艺圈", nameEn: "Backstage Drama",
      def: "舞台背后的勾心斗角、成名的代价、台上一分钟。", 
      defEn: "Backstage scheming, price of fame, one minute on stage.",
      core: "台前的光鲜 vs 台后的肮脏。表演者的人格分裂。 | 换喻 ($): 在拥挤昏暗的走廊里，刚互推互骂的女演员在听到“上场”口令后瞬间切换出完美营业笑容冲向高光 (In a Cramped Dim Hallway, Actresses Swearing at Each Other Instantly Switch to Perfect Service Smiles and Rush into the Spotlight Upon Hearing 'Action')",
      coreEn: "Frontstage glamour vs backstage filth. Split personality of performers. | Metonymy ($): In a Cramped Dim Hallway, Actresses Swearing at Each Other Instantly Switch to Perfect Service Smiles and Rush into the Spotlight Upon Hearing 'Action'",
      logic: "【光阴双面界】：设置一道不可逾越的拓扑缝隙（幕布/化妆室门）。门外（M5）是完美人设的光明高台，门内（M1）是充满嫉妒、自私与腐烂的黑暗坑洞。张力在于角色如何在这两端频繁穿梭直至崩溃。",
      logicEn: "[Light/Dark Dual Realm]: Setting an insurmountable topological gap (the curtain/dressing room door). Outside (M5) is the bright altar of perfect personas; Inside (M1) is the dark pit of jealousy, selfishness, and rot. Tension lies in characters shuttling between until collapse.",
      patch: {
        mechanics: "基础黑天鹅协议 + [虚伪面具厚度 = MAX; 后台空间压抑度 = 极度幽闭]",
        mechanicsEn: "Base_BLACK_SWAN_PROTOCOL + [Hypocritical_Mask_Thickness = MAX; Backstage_Space_Oppression = Extremely_Claustrophobic]",
        aesthetic: "聚焦：具有偷窥感的肩上跟拍（Over the shoulder tracking）穿梭在挂满戏服的狭长通道 + 化妆镜前带有一圈冰冷灯泡的多重映像（隐喻人格分裂） + 控制台、对讲机、混乱的准备指令。文本：刻薄的业界黑话、极其专业的排练指令与崩溃的尖叫交织。",
        aestheticEn: "Focus: Voyeuristic_Over-The-Shoulder_Tracking_Shots_Navigating_Narrow_Corridors_Hung_With_Costumes + Multiple_Reflections_In_Cold_Bulb-Lit_Makeup_Mirrors_(Metaphorizing_Split_Personality) + Consoles_Walkie-Talkies_And_Chaotic_Standby_Directives. Text: Mean_Industry_Jargon_Extremely_Professional_Rehearsal_Commands_Intertwined_With_Mental_Breakdown_Screams.",
        runtime: "IF (一个已经快被精神压力逼疯的女主角听到了上台提示音) THEN (她会猛地擦掉流出的鼻血，深吸一口气，推开门进入一束刺眼的白色聚光灯中，同时剧场的雷鸣掌声瞬间将后台的抽泣声彻底淹没)。",
        runtimeEn: "IF (A_Female_Lead_Nearly_Driven_Insane_By_Stress_Hears_The_Stage_Cue) THEN (She_Violently_Wipes_Away_A_Nosebleed_Takes_A_Deep_Breath_Pushes_The_Door_Into_A_Blinding_White_Spotlight_While_Thunderous_Applause_Instantly_Drowns_Out_Backstage_Sobbing)."
      }
    },
    { 
      id: "audiovisual", 
      name: "实验声画", nameEn: "Audio-Visual Experimental",
      def: "纯音乐与抽象画面的结合、通感体验。", 
      defEn: "Combination of pure music and abstract visuals, synesthesia experience.",
      core: "联觉 (Synesthesia)。声音直接转化为视觉，视觉直接转化为情绪。 | 换喻 ($): 随着一组极为沉重的低音频率，画面中央的纯黑方块开始发生不规则液体沸腾 (With a Set of Extremely Heavy Bass Frequencies, a Solid Black Square in the Center Begins to Boil like Irregular Liquid)",
      coreEn: "Synesthesia. Sound directly converts to vision; vision directly converts to emotion. | Metonymy ($): With a Set of Extremely Heavy Bass Frequencies, a Solid Black Square in the Center Begins to Boil like Irregular Liquid",
      logic: "【通感转译波】：废除所有的具象客体（M2）。将音频数据（频率、音量、音色/M5）作为直接输入参数，实时扭曲几何体（M5/图形）。这是一个不需要人类角色的纯粹参数世界。",
      logicEn: "[Synesthetic Translation Wave]: Abolishing all figurative objects (M2). Using audio data (frequency, volume, timbre/M5) as direct input parameters to real-time distort geometric shapes (M5/graphics). This is a purely parametric world needing no human characters.",
      patch: {
        mechanics: "基础视听联觉协议 + [具象实体存在度 = 0; 参数映射敏感度 = MAX]",
        mechanicsEn: "Base_SYNESTHESIA_PROTOCOL + [Figurative_Entity_Presence = 0; Parametric_Mapping_Sensitivity = MAX]",
        aesthetic: "聚焦：完全由算法生成的分形几何（Fractals）或纯粹的颜色块（如罗斯科画作）在时间轴上的演变 + 极其精确的示波器波纹颤动 + 极简的黑底高频光束（Lasers/Strobes）。文本：没有任何台词，语言被彻底消灭，只有纯粹的声音质感。",
        aestheticEn: "Focus: Algorithm-Generated_Fractal_Geometry_Or_Pure_Color_Blocks_(Like_Rothko_Paintings)_Evolving_On_Timeline + Extremely_Precise_Oscilloscope_Wave_Tremors + Minimalist_High-Freq_Light_Beams_On_Black_Background. Text: Absolutely_Zero_Words_Language_Is_Erased_Only_Pure_Sonic_Textures_Exist.",
        runtime: "IF (一段极其刺耳且高频的电子噪音袭来) THEN (画面绝对不会展示是谁发出的噪音，而是满屏密布极细的白线，它们像受到强电流刺激般疯狂抽搐，最后在音频中断的瞬间凝固为一条冰冷的白色直线)。",
        runtimeEn: "IF (An_Extremely_Piercing_High-Freq_Electronic_Noise_Attacks) THEN (Image_Will_Never_Show_Who_Made_The_Noise_But_Screen_Will_Fill_With_Microscopically_Thin_White_Lines_Convulsing_Like_Shocked_By_High_Voltage_Freezing_Into_A_Cold_Dead_Straight_Line_The_Millisecond_Audio_Cuts_Off)."
      }
    }
  ]
};
