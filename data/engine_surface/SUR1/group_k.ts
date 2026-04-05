import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_K: LibraryCategoryDef = {
  id: "type_k",
  name: "艺术与先锋 (Art House & Avant-Garde)",
  desc: "打破常规叙事，强调导演个人风格与视听实验。",
  items: [
    { 
      id: "surrealism", 
      name: "超现实主义", nameEn: "Surrealism",
      def: "梦境逻辑、潜意识、达利式意象、非理性。", 
      defEn: "Dream logic, subconscious, Daliesque imagery, irrational.",
      core: "梦境逻辑 vs 物理现实。潜意识的欲望直接具象化为视觉奇观，无因果律。 | 换喻 ($): 在空旷沙漠中融化的流着血的巨大怀表 (Giant Melting Bleeding Pocket Watch in an Empty Desert)",
      coreEn: "Dream logic vs physical reality. Subconscious desires directly manifest as visual spectacles without causality. | Metonymy ($): Giant Melting Bleeding Pocket Watch in an Empty Desert",
      logic: "【潜意识倒灌】：M0（无意识深渊）直接涌入并扭曲了 M2（物理现实）。因果律（M1理性建构）完全失效，以联想和隐喻代替时间线推进。布努埃尔的割眼球逻辑。",
      logicEn: "[Subconscious Backflow]: M0 (Abyss of the Unconscious) directly floods and distorts M2 (Physical Reality). Causality (M1 rational construct) fails completely; progression is driven by association and metaphor. Buñuel's sliced eyeball logic.",
      patch: {
        mechanics: "基础梦境协议 + [重力系数 = 随机; 逻辑连贯性 = 0]",
        mechanicsEn: "Base_DREAM_PROTOCOL + [Gravity_Coefficient = Random; Logical_Coherence = 0]",
        aesthetic: "聚焦：原本具有特定功能的日常物品（如电话、椅子）变成有机体（如流血、长出毛发） + 空间尺度的极度不合理（如巨大人脸塞满房间） + 色彩对撞。文本：毫无依据的梦呓台词。",
        aestheticEn: "Focus: Everyday_Objects_Functionless/Organic_(Bleeding/Growing_Hair) + Extremely_Irrational_Spatial_Scales_(Giant_Human_Face_Stuffing_Room) + Clashing_Colors. Text: Unfounded_Sleep-Talking_Dialogue.",
        runtime: "IF (男主角打开一扇普通的卧室门) THEN (门后必定是一片浩瀚的大海，水面上漂浮着一架正在燃烧的大提琴，且场景中没有任何人对此感到惊讶)。",
        runtimeEn: "IF (Male_Lead_Opens_An_Ordinary_Bedroom_Door) THEN (Behind_Door_Must_Be_Vast_Ocean_With_A_Burning_Cello_Floating_On_Waves_And_No_One_In_Scene_Is_Surprised)."
      }
    },
    { 
      id: "experimental", 
      name: "实验影像", nameEn: "Experimental",
      def: "无叙事、胶片划痕、纯视觉、装置艺术、概念大于内容。", 
      defEn: "Non-narrative, film scratches, pure visuals, installation art, concept over content.",
      core: "形式本身即内容。挑战观众的观看习惯，探索影像的边界。 | 换喻 ($): 持续闪烁五分钟的黑白噪点画面并伴随刺耳白噪音 (Five Minutes of Flashing Black-and-White Noise with Piercing White Noise)",
      coreEn: "Form itself is content. Challenging viewing habits, exploring the boundaries of moving images. | Metonymy ($): Five Minutes of Flashing Black-and-White Noise with Piercing White Noise",
      logic: "【媒介自反性】：M5（形式/质感/媒介本身）完全压倒了 M7（叙事意义）。电影不再是讲故事的工具，而是对其自身物质属性（像素、胶片、光影）的反思。",
      logicEn: "[Medium Reflexivity]: M5 (Form/Texture/Medium itself) completely overrides M7 (Narrative meaning). Cinema is no longer a storytelling tool, but a reflection on its own material properties (pixels, film, light/shadow).",
      patch: {
        mechanics: "基础反叙事协议 + [观众耐心消耗度 = MAX; 信息熵 = 极高或极低]",
        mechanicsEn: "Base_ANTI_NARRATIVE + [Audience_Patience_Depletion = MAX; Information_Entropy = Extremely_High_Or_Low]",
        aesthetic: "聚焦：对电影物质材料的破坏（用针刮擦胶片、曝光过度） + 完全抽象的光影运动规律 + 极度重复的机械性动作切割。文本：极可能完全没有对白，只有结构性的音效（如工业刺耳声）。",
        aestheticEn: "Focus: Destruction_Of_Film_Material_(Scratching_With_Needles/Overexposure) + Completely_Abstract_Light/Shadow_Movement + Extremely_Repetitive_Mechanical_Action_Cuts. Text: Likely_Zero_Dialogue_Only_Structural_Sound_Effects_(e.g. Industrial_Screeches).",
        runtime: "IF (镜头对准一个正在削苹果的动作) THEN (不展示人脸或完整动作，而是将苹果皮掉落的0.5秒画面循环播放200次，每一帧的色彩都被粗暴地反转)。",
        runtimeEn: "IF (Camera_Aims_At_Someone_Peeling_An_Apple) THEN (No_Face_Or_Complete_Action_Shown_Instead_The_0.5s_Of_Apple_Peel_Falling_Loops_200_Times_With_Colors_Brutally_Inverted_Each_Frame)."
      }
    },
    { 
      id: "new_wave", 
      name: "新浪潮", nameEn: "New Wave",
      def: "跳接、即兴表演、打破规则、自由风格、作者电影。", 
      defEn: "Jump cuts, improvisation, breaking rules, free style, auteur cinema.",
      core: "即兴的自由 vs 剧本的束缚。打破第四面墙，强调“这是在拍电影”。 | 换喻 ($): 两个年轻人叼着烟在博物馆里奔跑，毫无理由且伴随着大量跳接 (Two Youngsters Cigarette In Mouth Running Through Museum for No Reason With Heavy Jump Cuts)",
      coreEn: "Improvisational freedom vs script constraints. Breaking the 4th wall, emphasizing 'this is a movie'. | Metonymy ($): Two Youngsters Cigarette In Mouth Running Through Museum for No Reason With Heavy Jump Cuts",
      logic: "【规则破坏】：用 M5（态度、即兴、跳接）去粉碎好莱坞的古典叙事连贯性（M1逻辑）。这是关于青春、反叛和打破虚伪再现（Representation）的电影。",
      logicEn: "[Rule Destruction]: Using M5 (Attitude, Improvisation, Jump cuts) to shatter Hollywood's classical narrative coherence (M1 Logic). This entails youth, rebellion, and breaking hypocritical representation.",
      patch: {
        mechanics: "基础戈达尔协议 + [连贯性检查 = OFF; 破除第四面墙概率 = 高]",
        mechanicsEn: "Base_GODARD_PROTOCOL + [Coherence_Check = OFF; Fourth_Wall_Break_Probability = High]",
        aesthetic: "聚焦：突兀的跳接（Jump Cut）打断流畅的时空 + 手持摄影机仿佛跟拍路人一样随意的构图 + 角色突然转头直视镜头对观众说话。文本：极其随性的、漫无目的的哲学与政治闲聊。",
        aestheticEn: "Focus: Abrupt_Jump_Cuts_Interrupting_Smooth_Space-Time + Hand-Held_Camera_With_Casual_Framing_Like_Tracking_Passersby + Character_Suddenly_Turning_To_Look_At_Lens_Addressing_Audience. Text: Extremely_Casual_Aimless_Philosophical/Political_Chit-Chat.",
        runtime: "IF (男女主在汽车上进行漫长的公路旅行对话) THEN (绝不使用正反拍，而是将镜头对准女主角的后脑勺，并在同一句话中间毫不留情地跳接三次，背景音乐随时突兀地掐断)。",
        runtimeEn: "IF (Leads_Have_Long_Road_Trip_Conversation_In_Car) THEN (Never_Use_Shot-Reverse-Shot_Instead_Aim_At_Back_Of_Female_Lead's_Head_And_Jump_Cut_Yieldlessly_Three_Times_Mid-Sentence_With_BGM_Abruptly_Cut_Off)."
      }
    },
    { 
      id: "cult", 
      name: "邪典/CULT", nameEn: "Cult",
      def: "小众狂热、怪诞审美、B级片趣味、Camp风格。", 
      defEn: "Niche fanaticism, grotesque aesthetics, B-movie flavor, Camp style.",
      core: "糟糕的品味 vs 极致的狂欢。故意挑战主流审美，拥抱怪诞与恶趣味。 | 换喻 ($): 穿着华丽紧身胸衣和网眼袜的外星人一边唱歌一边挥舞电锯 (Alien in Gorgeous Corset and Fishnets Singing While Wielding a Chainsaw)",
      coreEn: "Bad taste vs ultimate carnival. Deliberately challenging mainstream aesthetics, embracing grotesque and bad taste. | Metonymy ($): Alien in Gorgeous Corset and Fishnets Singing While Wielding a Chainsaw",
      logic: "【坎普狂欢】：M5（过度夸张的做作/Camp）溢出，以致于它变得“因为太烂所以太好”。用 M4（越界/冒犯）来建立起小众群体极其坚固的身份认同（M1）。",
      logicEn: "[Camp Carnival]: M5 (Over-exaggerated artificiality / Camp) overflows to the point of 'so bad it's good'. Using M4 (Transgression / Offense) to establish an extremely solid identity (M1) for an underground niche group.",
      patch: {
        mechanics: "基础洛基恐怖秀协议 + [荒诞指数 = 爆表; 主流迎合度 = -100]",
        mechanicsEn: "Base_ROCKY_HORROR + [Absurdity_Index = Over_Limit; Mainstream_Pandering = -100]",
        aesthetic: "聚焦：刻意廉价却色彩极度饱和的布景特效 + 带有恋物癖倾向的畸形服化道（如漆皮、厚底鞋、怪胎妆） + 莫名其妙插入的歌舞或极度夸张的暴力。文本：能让影迷在午夜场背诵并一起大喊的经典废话台词。",
        aestheticEn: "Focus: Deliberately_Cheap_Yet_Extremely_Saturated_Sets/VFX + Fetishistic/Deformed_Wardrobe_(Patent_Leather_Platform_Shoes_Freak_Makeup) + Inexplicably_Inserted_Musical_Numbers_Or_Ultra-Exaggerated_Violence. Text: Cult_Classic_Nonsense_Lines_For_Midnight_Screening_Fans_To_Recite_And_Shout_Together.",
        runtime: "IF (一个严肃的政客在发表演讲准备揭露阴谋) THEN (他讲到一半必定会脱下西装露出里面的亮片比基尼并开始大跳踢踏舞，最后被天上掉下来的巨大火腿砸死)。",
        runtimeEn: "IF (A_Serious_Politician_Gives_Speech_To_Expose_Conspiracy) THEN (Mid-Speech_He_Must_Strip_Off_Suit_Revealing_A_Sequin_Bikini_Start_Tap_Dancing_And_Finally_Get_Crushed_By_A_Giant_Ham_Falling_From_Sky)."
      }
    },
    { 
      id: "minimalism", 
      name: "极简主义", nameEn: "Minimalism",
      def: "少对白、固定长镜头、生活流、留白。", 
      defEn: "Less dialogue, fixed long takes, slice of life, blank space.",
      core: "极少的动作 vs 丰富的情感潜流。此时无声胜有声，剥离一切多余修饰。 | 换喻 ($): 固定镜头里一个男人在灰暗的厨房里默默吃完一整碗面，无配乐 (Fixed Shot of a Man Silently Finishing a Whole Bowl of Noodles in a Dim Kitchen, No Music)",
      coreEn: "Minimal action vs rich emotional undercurrents. Silence speaks louder than words, stripping away all excess decoration. | Metonymy ($): Fixed Shot of a Man Silently Finishing a Whole Bowl of Noodles in a Dim Kitchen, No Music",
      logic: "【剥离还原】：通过无限减少 M5（繁复的视听刺激和外部戏剧冲突），逼迫观众将注意力转移到 M1（内部微小的心理波纹）和 M4（纯粹时间的流逝感）上。",
      logicEn: "[Stripping to Essence]: By infinitely reducing M5 (Complex audio-visual stimuli and external drama), forcing the audience to shift attention to M1 (Tiny internal psychological ripples) and M4 (The pure passage of time).",
      patch: {
        mechanics: "基础布列松协议 + [戏剧煽情度 = 0; 表演克制力 = 最高]",
        mechanicsEn: "Base_BRESSON + [Melodrama_Degree = 0; Acting_Restraint = Max]",
        aesthetic: "聚焦：空无一物的白墙或极致简单的构图极简 + 长时间的沉默与静态画面的完美结合 + 人物像没有感情的模特（Model）一样面无表情。文本：日常到近乎枯燥的短句对答，拒绝任何背景交代。",
        aestheticEn: "Focus: Empty_White_Walls_Or_Perfectly_Simple_Minimalist_Compositions + Perfect_Marriage_Of_Prolonged_Silence_And_Static_Frames + Characters_Expressionless_Like_Emotionless_Models. Text: Everyday_Almost_Boring_Short_Sentence_Exchanges_Rejecting_Any_Exposition.",
        runtime: "IF (女主角得知了父亲去世的噩耗电话) THEN (不会有大哭和煽情配乐，此时画面必定切换到一个空无一人的房间固定镜头长达三分钟，只听见外面街道微弱的车流声)。",
        runtimeEn: "IF (Female_Lead_Receives_Call_About_Father's_Death) THEN (No_Crying_Or_Melodramatic_Music_Shot_Must_Cut_To_A_Fixed_Take_Of_An_Empty_Room_For_Three_Minutes_Only_Hearing_Faint_Traffic_Outside)."
      }
    },
    { 
      id: "stream", 
      name: "意识流", nameEn: "Stream of Consciousness",
      def: "思维的具象化，时空破碎、梦与现实交织。", 
      defEn: "Manifestation of thoughts, shattered space-time, dreams intertwined with reality.",
      core: "主观意识的流动 vs 客观时间的线性。过去、现在、未来在脑海中并置。 | 换喻 ($): 走廊上一扇门推开，里面是三十年前童年家里的景象，而自己正看着童年的自己 (Pushing a Corridor Door to Find the Childhood Home Scene from 30 Years Ago, Looking at One's Childhood Self)",
      coreEn: "Flow of subjective consciousness vs linear objective time. Past, present, future juxtaposed in mind. | Metonymy ($): Pushing a Corridor Door to Find the Childhood Home Scene from 30 Years Ago, Looking at One's Childhood Self",
      logic: "【拓扑折叠】：M1（内部意识）彻底折叠了 M4（外部时间线性）。回忆、幻觉、预见在同一个画面或同一次剪辑中发生拓扑学上的并存。",
      logicEn: "[Topological Folding]: M1 (Internal consciousness) completely folds M4 (External linear time). Memories, hallucinations, and premonitions co-exist topologically in the same frame or single edit.",
      patch: {
        mechanics: "基础普鲁斯特协议 + [时间线性 = 乱序; 视角主体切换频率 = 高]",
        mechanicsEn: "Base_PROUST + [Time_Linearity = Scrambled; POV_Subject_Switch_Freq = High]",
        aesthetic: "聚焦：毫无征兆的闪回（无转场特效直接切换时空） + 多重叠化的重影面孔，暗示记忆的迷雾 + 旁白（VO）与画面内容完全不同步甚至互相矛盾。文本：絮絮叨叨的心理活动描述，句子结构破碎冗长。",
        aestheticEn: "Focus: Unannounced_Flashbacks_(Direct_Space-Time_Cut_Without_Transition_VFX) + Multi-Superimposed_Ghostly_Faces_Signaling_Fog_Of_Memory + Voice-Over_(VO)_Completely_Asynchronous/Contradictory_To_Image. Text: Rambling_Mental_Activity_Descriptions_Fractured_And_Lengthy_Sentence_Structures.",
        runtime: "IF (男主正坐在咖啡馆看着眼前的爱人) THEN (画面同时叠化出他小时候看着母亲离去的背影，配音全是他在思考宇宙起源的内心独白)。",
        runtimeEn: "IF (Male_Lead_Sits_In_Cafe_Looking_At_His_Lover) THEN (Image_Simultaneously_Superimposes_His_Childhood_View_Of_Mother's_Departing_Back_While_Audio_Is_Entirely_His_Inner_Monologue_Pondering_The_Origin_Of_Universe)."
      }
    },
    { 
      id: "dogme95", 
      name: "道格玛95", nameEn: "Dogme 95",
      def: "手持、自然光、无配乐、追求极致真实、去人工化。", 
      defEn: "Handheld, natural light, no score, pursuing extreme realism, de-artificialization.",
      core: "绝对的真实 vs 电影的虚构本质。拒绝一切技术修饰，迫使观众直面赤裸的表演。 | 换喻 ($): 粗糙晃动DV镜头里因为没有补光而显得颗粒感极重的家暴现场 (Rough Shaky DV Camera Showing Heavily Grainy Domestic Violence Scene Due to Zero Lighting)",
      coreEn: "Absolute truth vs cinematic fictional nature. Rejecting all technical modifications, forcing audience to face naked acting. | Metonymy ($): Rough Shaky DV Camera Showing Heavily Grainy Domestic Violence Scene Due to Zero Lighting",
      logic: "【苦修誓约】：通过设立极端的 M4（禁欲技术法则：如不准使用脚架、不准后期配音物、不准黑白等），剥落电影的谎言外衣，以求逼近 M1（最原始赤裸的真实情感）。",
      logicEn: "[Vow of Chastity]: By establishing extreme M4 (Ascetic tech rules: no tripods, no post-sync sound, no B&W, etc.), stripping away cinema's coat of lies to approach M1 (The most primal, naked, truthful emotion).",
      patch: {
        mechanics: "基础纯洁誓言协议 + [工业修饰度 = 0; 现场偶发性 = 强制接受]",
        mechanicsEn: "Base_VOW_OF_CHASTITY + [Industrial_Decoration = 0; On-Set_Contingency = Mandatory_Acceptance]",
        aesthetic: "聚焦：让人晕眩的极其混乱的手持DV跟拍 + 演员面部粗糙真实的油脂与瑕疵（拒绝化妆） + 麦克风摩擦衣服的噪音。文本：剧本极为松散，演员极具爆发力的临时脏话与嘶吼。",
        aestheticEn: "Focus: Dizzyingly_Chaotic_Hand-Held_DV_Tracking_Shots + Rough_Authentic_Oil_And_Blemishes_On_Actors'_Faces_(No_Makeup) + Noise_Of_Microphone_Rubbing_Against_Clothes. Text: Extremely_Loose_Script_Actors'_Explosive_Improvised_Swearing_And_Screaming.",
        runtime: "IF (家庭聚会上爆出了骇人的丑闻（如乱伦）) THEN (不会有特写推进和惊悚音乐，而是镜头剧烈摇晃，焦点突然失焦，只录下远处杂乱的推搡声和摔碎盘子的声音)。",
        runtimeEn: "IF (Horrifying_Scandal_(e.g. Incest)_Is_Exposed_At_Family_Gathering) THEN (No_Slow_Close-Ups_Or_Shock_Music_Camera_Must_Shake_Violently_Focus_Randomly_Blurs_Only_Capturing_Messy_Shoving_And_Breaking_Plates_From_Afar)."
      }
    },
    { 
      id: "grindhouse", 
      name: "磨坊/剥削", nameEn: "Grindhouse / Exploitation",
      def: "暴力、色情、胶片颗粒、低成本美学、复古垃圾片。", 
      defEn: "Violence, sex, film grain, low budget aesthetic, retro trash films.",
      core: "感官刺激的剥削 vs 道德底线的挑战。纯粹为了快感而存在的暴力与色情。 | 换喻 ($): 屏幕正中间突然出现一条黑色的胶片烧毁痕迹，配上极其夸张的喷血断肢 (A Black Film Burn Mark Suddenly Appears in the Center Frame, Paired with Grotesquely Exaggerated Squib Blood)",
      coreEn: "Exploitation of sensory stimulation vs challenge of moral bottom lines. Violence and porn existing purely for pleasure. | Metonymy ($): A Black Film Burn Mark Suddenly Appears in the Center Frame, Paired with Grotesquely Exaggerated Squib Blood",
      logic: "【粗劣奇观】：放弃所有 M7（深度意义），将 M5（剥削性的感官刺激——血浆、裸露、异形）推到极致，并且刻意保留 M2（低劣材质的质感：漏光、跳帧）作为美学标签。",
      logicEn: "[Crude Spectacle]: Abandoning all M7 (deep meaning), pushing M5 (exploitative sensory stimuli—gore, nudity, oddities) to the limit, while deliberately retaining M2 (cheap material texture: light leaks, skipped frames) as an aesthetic signifier.",
      patch: {
        mechanics: "基础昆汀与罗德里格兹协议 + [血浆喷射量 = 无限; 胶片磨损度 = 极高]",
        mechanicsEn: "Base_TARANTINO_RODRIGUEZ + [Blood_Squib_Volume = Infinite; Film_Wear_And_Tear = Extremely_High]",
        aesthetic: "聚焦：复古的宽银幕比例配上粗糙的胶片噪点与漏光 + 喷射状如红色油漆般的高压血浆 + 极具挑逗性的镜头构图。文本：充斥着毫无意义但极具节奏感的低俗脏话狂飙。",
        aestheticEn: "Focus: Retro_Widescreen_Ratio_With_Rough_Film_Grain_And_Light_Leaks + High-Pressure_Blood_Squibs_Spraying_Like_Red_Paint + Highly_Provocative_Camera_Framing. Text: Filled_With_Meaningless_But_Highly_Rhythmic_Vulgar_Profanity_Tirades.",
        runtime: "IF (一个拿着武士刀的女杀手砍掉反派的头脑) THEN (画面必定在此刻因为“胶片掉帧（Missing Reel）”直接卡顿，并插入一张带着划痕的“本段遗失”字卡，然后直接跳到反派已经身首异处)。",
        runtimeEn: "IF (A_Female_Assassin_With_Katana_Decapitates_Villain) THEN (Frame_Must_Stutter_Due_To_'Missing_Reel'_Insert_A_Scratched_Title_Card_Saying_MISSING_REEL_Then_Jump_Cut_To_Villain_Already_Headless)."
      }
    },
    { 
      id: "poetic", 
      name: "诗意电影", nameEn: "Poetic Cinema",
      def: "塔可夫斯基式，雕刻时光，精神性、自然元素。", 
      defEn: "Tarkovskian, sculpting in time, spirituality, natural elements.",
      core: "时间的流逝本身就是主角。在凝视中寻找精神性的超越。 | 换喻 ($): 在积水的破败教堂遗址前缓慢走过一匹白马，雨水穿透屋顶 (A White Horse Walking Slowly in Front of a Ruined Flooded Church, Rain Piercing the Roof)",
      coreEn: "The passage of time itself is the protagonist. Seeking spiritual transcendence through gazing. | Metonymy ($): A White Horse Walking Slowly in Front of a Ruined Flooded Church, Rain Piercing the Roof",
      logic: "【神圣凝视】：M4（时间）不再是线性推动情节的工具，而是一种需要被“雕刻”的物质。通过长时间的凝视自然隐喻（M6），唤醒主体的 M1（终极精神超越）。",
      logicEn: "[Sacred Gaze]: M4 (Time) is no longer a tool for linear plot progression, but a substance to be 'sculpted'. Through prolonged gazing at natural metaphors (M6), awakening the subject's M1 (Ultimate spiritual transcendence).",
      patch: {
        mechanics: "基础塔可夫斯基协议 + [镜头运动速度 = 地质级缓慢; 隐喻浓度 = 绝对值]",
        mechanicsEn: "Base_TARKOVSKY + [Camera_Movement_Speed = Geologically_Slow; Metaphor_Density = Absolute_Value]",
        aesthetic: "聚焦：融合了水、火、泥土、风的史诗感自然空镜 + 废墟、腐朽之中散发的崇高感光线 + 摄影机在空间中极其平缓的推移（Tracking）。文本：大量引用古老的诗歌，探寻信仰、痛苦与救赎。",
        aestheticEn: "Focus: Epic_Natural_Empty_Shots_Fusing_Water_Fire_Earth_Wind + Sublime_Lighting_Emanating_From_Ruins_And_Decay + Camera_Tracking_Through_Space_With_Extreme_Slowness. Text: Heavy_Quoting_Of_Ancient_Poetry_Exploring_Faith_Suffering_And_Redemption.",
        runtime: "IF (主角在经历巨大的心理痛苦后陷入沉思) THEN (画面会慢慢摇开，一连三分钟只拍摄水滴落在长满青苔的石头上的特写，伴随着极远的狗吠声与风声，没有一句台词)。",
        runtimeEn: "IF (Protagonist_Falls_Into_Contemplation_After_Immense_Psychological_Pain) THEN (Camera_Will_Slowly_Pan_Away_Shooting_A_3-Minute_Close-Up_Of_Water_Dripping_On_Mossy_Stones_Accompanied_Only_By_Distant_Dog_Barks_And_Wind_Without_A_Single_Word)."
      }
    },
    { 
      id: "silent", 
      name: "默片/新默片", nameEn: "Silent",
      def: "无声胜有声，肢体与配乐驱动、复古致敬。", 
      defEn: "Silence speaks volumes, driven by body language and music, retro homage.",
      core: "纯视觉叙事。剥离语言后，肢体语言和表情成为唯一的信息载体。 | 换喻 ($): 黑白画面中卓别林式极其夸张的惊恐大眼与手舞足蹈 (Chaplinesque Exaggerated Terrified Big Eyes and Flailing Limbs in Black-and-White Screen)",
      coreEn: "Pure visual narrative. After stripping language, body language and expressions become the sole information carrier. | Metonymy ($): Chaplinesque Exaggerated Terrified Big Eyes and Flailing Limbs in Black-and-White Screen",
      logic: "【符号还乡】：退回到 M5（纯粹的肢体与视觉面孔，无声界）来剥离 M7（复杂的现代语言逻辑）。这是对电影最原初身体性（Body）和面庞（Face）的回归。",
      logicEn: "[Symbolic Homecoming]: Regressing to M5 (Pure physical and visual faces, the silent realm) to strip away M7 (Complex modern language logic). This is a return to cinema's most primordial corporeality (Body) and Face.",
      patch: {
        mechanics: "基础卓别林协议 + [语言通道 = 已切断; 肢体表达力 = 扩大三倍]",
        mechanicsEn: "Base_CHAPLIN + [Language_Channel = Severed; Body_Expressiveness = Tripled]",
        aesthetic: "聚焦：带黑边的4:3黑白画幅 + 过度化妆（深色眼圈、白脸）以强化表情对比度 + 字幕卡（Intertitles）作为唯一的信息补充。文本：除了必要的说明词或关键台词字卡，完全依靠即兴伴奏乐（钢琴/管弦）烘托情绪。",
        aestheticEn: "Focus: 4:3_Black-And-White_Frame_With_Vignette + Over-Makeup_(Dark_Eyes_White_Face)_To_Enhance_Expression_Contrast + Intertitles_As_Sole_Information_Supplement. Text: Apart_From_Necessary_Intertitles_Completely_Relies_On_Improvised_Score_(Piano/Orchestra)_For_Emotion.",
        runtime: "IF (男主被一只恶狗追赶) THEN (他必定会做出脚下打滑、在原地空跑三秒才冲出去的极其夸张物理动作，并且动作帧率微微加快（18格/秒的古早感）)。",
        runtimeEn: "IF (Male_Lead_Is_Chased_By_A_Vicious_Dog) THEN (He_Must_Perform_Exaggerated_Physical_Action_Of_Slipping_And_Running_In_Place_For_3_Seconds_Before_Dashing_Off_With_Frame_Rate_Slightly_Sped_Up_(18_fps_Antique_Feel))."
      }
    },
    { 
      id: "psychedelic", 
      name: "迷幻", nameEn: "Psychedelic",
      def: "视觉致幻、色彩爆炸、感官过载、药物体验。", 
      defEn: "Visual hallucinations, color explosion, sensory overload, drug experience.",
      core: "理性的丧失 vs 感官的狂欢。模拟药物致幻体验，进入万花筒般的世界。 | 换喻 ($): 在霓虹灯刺眼的迪厅中视线完全液化拉丝的人脸 (Completely Liquefied and Stringy Faces in a Glaring Neon Disco)",
      coreEn: "Loss of rationality vs sensory carnival. Simulating drug hallucinatory experience, entering a kaleidoscopic world. | Metonymy ($): Completely Liquefied and Stringy Faces in a Glaring Neon Disco",
      logic: "【神经融断】：完全放弃 M1（逻辑架构），使用极端的 M5（色彩/频闪/电音）强制短路观众的神经系统。世界不再是客体，而是沸腾的荧光质料。",
      logicEn: "[Neural Meltdown]: Completely abandoning M1 (Logical Architecture), using extreme M5 (Color/Strobe/Electro-music) to forcibly short-circuit the audience's nervous system. The world is no longer an object, but boiling fluorescent matter.",
      patch: {
        mechanics: "基础强酸迷幻协议 + [色彩饱和度 = 突破色域限制; 空间折叠率 = 极高]",
        mechanicsEn: "Base_ACID_TRIP + [Color_Saturation = Breaking_Gamut_Limits; Spatial_Folding_Rate = Extremely_High]",
        aesthetic: "聚焦：剧烈晃动的霓虹灯光海 + 液化、扭曲、带有彩色拖拽尾迹（Trails）的视觉特效 + 具有压迫感的合成器低音或尖锐刺耳反馈。文本：完全解构的语词碎片，回音（Delay）极重。",
        aestheticEn: "Focus: Violently_Shaking_Neon_Light_Sea + Liquefied_Distorted_VFX_With_Colored_Trails + Oppressive_Synth_Bass_Or_Piercing_Feedback. Text: Completely_Deconstructed_Word_Fragments_With_Heavy_Delay_Echo.",
        runtime: "IF (主角刚刚服下一颗致幻剂并看向镜子里的自己) THEN (镜子里的脸必定会开始像热蜡一样融化，眼球分离并漂浮在空中，周围的声音变成巨大的橡胶摩擦般的轰鸣声)。",
        runtimeEn: "IF (Protagonist_Drops_Acid_And_Looks_In_Mirror) THEN (Face_In_Mirror_Must_Start_Melting_Like_Hot_Wax_Eyeballs_Detaching_And_Floating_Ambient_Sound_Turns_Into_Deafening_Rubber-Friction_Roars)."
      }
    },
    { 
      id: "slow", 
      name: "慢电影", nameEn: "Slow Cinema",
      def: "极慢节奏、长镜头凝视、冥想感、时间的重量。", 
      defEn: "Extremely slow pace, long take gaze, meditative state, weight of time.",
      core: "对观众耐心的挑战 vs 沉浸式的体验。让观众感受到时间的物理重量。 | 换喻 ($): 固定镜头凝视一滴水在生锈管道上积聚十分钟才最终剥落 (Fixed Camera Staring at a Drop of Water Accumulating on a Rusty Pipe for 10 Minutes Before Finally Falling)",
      coreEn: "Challenge to audience patience vs immersive experience. Making the audience feel the physical weight of time. | Metonymy ($): Fixed Camera Staring at a Drop of Water Accumulating on a Rusty Pipe for 10 Minutes Before Finally Falling",
      logic: "【时间物质化】：当 M5（外部动作）趋近于零时，M4（时间）本身获得了惊人的物质性与压迫感。无聊（Boredom）变成了通向超验的唯一也是最艰难的阶梯。",
      logicEn: "[Materialization of Time]: When M5 (External Action) approaches zero, M4 (Time) itself gains staggering materiality and oppression. Boredom becomes the only, and hardest, ladder to the transcendent.",
      patch: {
        mechanics: "基础蔡明亮协议 + [动作速率 = 0.1x; 环境音细腻度 = 显微级]",
        mechanicsEn: "Base_TSAI_MING-LIANG + [Action_Speed = 0.1x; Ambient_Sound_Detail = Microscopic]",
        aesthetic: "聚焦：极少甚至没有摄影机移动的大远景长镜头 + 对人物极其日常、重复、甚至生理活动的漫长注视（如缓慢地吃完一个盒饭） + 极其潮湿或破败的空间质感。文本：几乎是零对白，对话间隙能长达数分钟。",
        aestheticEn: "Focus: Very_Long_Wide_Shots_With_Little_To_No_Camera_Movement + Lengthy_Observation_Of_Extremely_Mundane_Repetitive/Physiological_Actions_(e.g. Slowly_Finishing_A_Box_Lunch) + Extremely_Damp_Or_Dilapidated_Spatial_Textures. Text: Near_Zero_Dialogue_Conversational_Pauses_Can_Last_Minutes.",
        runtime: "IF (剧情发展到男主角因为极度空虚而不知道做什么) THEN (画面必定切到一个长达十二分钟的定镜头，表现他坐在昏暗漏水的房间里抽烟，除了偶尔的呼吸声和水滴声外没有任何事件发生，直到观众产生生理性的坐立难安)。",
        runtimeEn: "IF (Plot_Reaches_Point_Where_Male_Lead_Is_So_Empty_He_Doesn't_Know_What_To_Do) THEN (Shot_Must_Cut_To_A_12-Minute_Static_Take_Of_Him_Sitting_Smoking_In_Dim_Leaky_Room_With_No_Events_Except_Breathing_And_Dripping_Until_Audience_Feels_Physiological_Restlessness)."
      }
    }
  ]
};
