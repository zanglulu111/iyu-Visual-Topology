import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_C: LibraryItemDef[] = [
    {
        id: "stake_monster",
        name: "屠龙者的深渊（成为怪物）", nameEn: "Abyss Gaze / Becoming the Monster",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "为了对抗极致的恶，主动穿越了道德幻象，启用了与非人相同的残忍手段，彻底异化。",
        defEn: "To fight extreme evil, actively traversing the moral fantasy, employing non-human cruelty and becoming entirely alienated.",
        core: "凝视深渊的代价，是以深渊作为自己的内胆。 | The Castration: 道德底线的结构性坍塌。",
        coreEn: "The cost of gazing into the abyss is using the abyss as one's core. | The Castration: Structural collapse of the moral baseline.",
        logic: "在拉康视角中，大他者（The Big Other）原本是维系‘正常人类交互’的律法防线。当主体为了对抗体制外侧的‘实在界恐怖’而违背律法时，他就成为了那个被象征界驱逐的怪兽本身。",
        logicEn: "When the subject breaches the Big Other's law to fight Real terror, they embody the very monster exiled by the Symbolic order.",
        patch: {
            mechanics: "Base_ABYSS_CROSSED + [Moral_Compass = Inverted; Cruelty_Capacity = Unbound]",
            mechanicsEn: "Base_ABYSS_CROSSED + [Moral_Compass = Inverted; Cruelty_Capacity = Unbound]",
            aesthetic: "聚焦：用敌人曾经虐待自己的同款残忍手法肢解投降者 + 镜子里那双不带任何怜悯的死寂眼神。",
            aestheticEn: "Focus: Dismembering a surrendering enemy using the exact cruel methods they once suffered + Dead, merciless eyes in the mirror.",
            runtime: "IF (曾经发誓保护的弱者因恐惧而向自己求饶) THEN (主体不会升起怜悯，而是鄙夷地看着对方的软弱，像看虫子一样将其踢开)。",
            runtimeEn: "IF (The_Weak_Once_Sworn_to_Protect_Begs_for_Mercy) THEN (Subject feels no pity, only contempt for their weakness, kicking them aside like a bug)."
        }
    },
    {
        id: "stake_betrayal",
        name: "犹大的献祭（背叛挚爱）", nameEn: "The Judas Paradox (Betrayal of True Love)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "在极端逼迫下，或是为了某种无法言说的‘大局’，亲手出卖或杀死了自己唯一的小客体（Objet a）。",
        defEn: "Under extreme coercion or for an unspeakable 'greater good', personally betraying or killing one's only Objet petit a.",
        core: "活着比地狱更冷，因为亲自砍断了连接天堂的唯一绳索。 | The Castration: 绝对信任与挚爱的被动献祭。",
        coreEn: "Living is colder than hell because you cut the only rope to heaven. | The Castration: Passive sacrifice of absolute trust and love.",
        logic: "背叛是一个拓扑学翻转。为了维持象征秩序的继续运作（救多数人/完成使命），主体必须用最至高的‘善’作为血祭，从而将自己永远钉在无解的罪名上。",
        logicEn: "Betrayal is a topological flip. To sustain the Symbolic order, the subject blood-sacrifices their highest 'Good', eternally nailing themselves to insolvable guilt.",
        patch: {
            mechanics: "Base_JUDAS_KISS + [Objet_a = Slain_by_Self; Guilt_Engine = Overdriven]",
            mechanicsEn: "Base_JUDAS_KISS + [Objet_a = Slain_by_Self; Guilt_Engine = Overdriven]",
            aesthetic: "聚焦：扣响扳机的手指停止颤抖的冰冷瞬间 + 爱人临死前充满不解却依然温柔的倒影。",
            aestheticEn: "Focus: The cold instant the trigger-pulling finger stops trembling + Lover's incomprehensible yet gentle reflection before dying.",
            runtime: "IF (受到敌人的最高嘉奖或路人的称赞) THEN (每一句赞美都会自动转化为爱人死前那句叹息在脑内回放，引发心理性呕吐)。",
            runtimeEn: "IF (Receives_Highest_Award_or_Praise) THEN (Every compliment auto-translates into the lover's dying sigh replaying in the brain, inducing psychological vomiting)."
        }
    },
    {
        id: "stake_assimilation",
        name: "平庸之恶（机制同化）", nameEn: "Banality of Evil",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "放弃了所有的反抗和棱角，完全认同并内化了大他者的压迫性法则，成为了那个运转良好且沾满鲜血的齿轮。",
        defEn: "Abandoning all resistance, fully identifying with and internalizing the Big Other's oppressive law, becoming a well-oiled, blood-stained cog.",
        core: "《1984》式的终极妥协——‘他战胜了自己，他热爱老大哥’。 | The Castration: 主体批判性（Critical Distance）的完全消除。",
        coreEn: "'He loved Big Brother.' The ultimate compromise. | The Castration: Complete elimination of Critical Distance.",
        logic: "这并非洗脑，而是主体为了躲避‘实在界压力’而主动进行的缝合手术（Suture）。将自己贬低为机制的一部分，从而免除个人的道德责任。",
        logicEn: "Not brainwashing, but an active 'Suture' by the subject to evade the Real's pressure. Regressing to a mechanism part exempts personal moral responsibility.",
        patch: {
            mechanics: "Base_EICHMANN_SYNDROME + [Systemic_Alignment = 100%; Moral_Responsibility = Outsourced]",
            mechanicsEn: "Base_EICHMANN_SYNDROME + [Systemic_Alignment = 100%; Moral_Responsibility = Outsourced]",
            aesthetic: "聚焦：以极其高效且公事公办的态度按下处决数万人的按钮 + 随后平静地给家里打电要求晚上吃牛排。",
            aestheticEn: "Focus: Pressing the button to execute tens of thousands with business-like efficiency + Calmly calling home right after to request steak for dinner.",
            runtime: "IF (受害者家属质问其良心) THEN (主体只会用绝对标准的官方话术重复‘我只是在履行职务’，内心没有一丝波澜)。",
            runtimeEn: "IF (Victim_Families_Question_Their_Conscience) THEN (Subject merely repeats 'I was just performing my duties' with absolute official rhetoric, completely unbothered)."
        }
    },
    {
        id: "stake_blue_pill",
        name: "虚幻的安抚（吃下蓝药丸）", nameEn: "The Blue Pill Suture",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "在面对血淋淋的残酷真相时，由于无法承受其重量而选择退行（Regression），主动躲回美好的谎言温室中。",
        defEn: "Unable to bear the bloody truth, regressing to actively hide back in the greenhouse of beautiful lies.",
        core: "逃避自由的懦弱。明知道是假的，这块牛排也要吃下去。 | The Castration: 真实界对峙能力（Confrontation with the Real）的放弃。",
        coreEn: "The cowardice of escaping freedom. Knowing it's fake, yet eating the steak. | The Castration: Giving up Confrontation with the Real.",
        logic: "齐泽克式的意识形态妥协。在象征界（Matrix）中获得安逸的代价，是把‘寻找真实’的好奇心彻底割掉。这是一种自发的心智阉割。",
        logicEn: "Zizekian ideological compromise. The price of Matrix comfort is excising the curiosity for 'Truth'. A spontaneous mental castration.",
        patch: {
            mechanics: "Base_MATRIX_REGRESSION + [Truth_Seeking = Blocked; Fantasy_Suture = Max_Yield]",
            mechanicsEn: "Base_MATRIX_REGRESSION + [Truth_Seeking = Blocked; Fantasy_Suture = Max_Yield]",
            aesthetic: "聚焦：带上VR眼镜时嘴角渗出的无奈却又享受的垂液 + 将曾经冒死带出的真相卷宗亲手投入焚化炉。",
            aestheticEn: "Focus: Helpless but enjoying drool at the corner of mouth when donning VR glasses + Personally throwing the death-defying truth files into the incinerator.",
            runtime: "IF (昔日的战友满身是血地来凿破这层虚幻的门寻求支援) THEN (主体会报警让系统治安官将其抓走，以保护自己这来之不易的虚假宁静)。",
            runtimeEn: "IF (Former_Comrade_Bleeding_Knocks_on_Illusion_Door_for_Help) THEN (Subject calls system police to arrest them, protecting their hard-won fake peace)."
        }
    },
    {
        id: "stake_faith_loss",
        name: "大他者的死亡（信仰崩塌）", nameEn: "Death of the Big Other",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "发现了自己奉献一生去捍卫的神明、正义、组织，其背后仅仅是由极度自私丑陋的阴谋或荒诞维系的骗局。",
        defEn: "Discovering that the god, justice, or organization defended lifelong is merely a scam sustained by selfish, ugly conspiracies or absurdities.",
        core: "精神基石被抽空，坠入失去重力的深渊。 | The Castration: 意义生成器（Meaning Generator）的物理破产。",
        coreEn: "Mental cornerstone hollowed out, falling into a gravity-less abyss. | The Castration: Physical bankruptcy of the Meaning Generator.",
        logic: "‘大他者不存在’的创伤性揭露。当天空中的星星被证明只是画上去的像素点，主体过去为此流的血都变成了一出劣质喜剧的笑料。",
        logicEn: "Traumatic disclosure that 'The Big Other does not exist'. When stars are proven to be painted pixels, the subject's spilled blood becomes a cheap comedy joke.",
        patch: {
            mechanics: "Base_ICONOCLASM_SHOCK + [Belief_Anchor = Snapped; Cosmic_Irony = Maximized]",
            mechanicsEn: "Base_ICONOCLASM_SHOCK + [Belief_Anchor = Snapped; Cosmic_Irony = Maximized]",
            aesthetic: "聚焦：在神圣雕像背后发现一条用来操纵神迹的生锈铁链 + 拿着教义在雨中狂笑直到声带撕裂。",
            aestheticEn: "Focus: Discovering a rusty chain behind the sacred statue used to manipulate miracles + Holding the doctrine in rain, laughing wildly until vocal cords tear.",
            runtime: "IF (依然有信徒向他虔诚地请教教义) THEN (他无法像恶魔一样毁灭信徒的梦，只能用比哭还难看百倍的扭曲表情继续讲述那个他明知道是假的谎言)。",
            runtimeEn: "IF (Devotees_Still_Piously_Ask_for_Preachings) THEN (Unable to ruin their dream like a demon, he continues telling the known lie with a twisted expression hundred times uglier than crying)."
        }
    },
    {
        id: "stake_shame",
        name: "本体论羞耻（无法面对）", nameEn: "Ontological Shame",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "在极端情境下做出了令自己绝对无法原谅的懦弱或下贱的举动，这道伤疤深深刻入自我认同的核心。",
        defEn: "Committing an absolutely unforgivable act of cowardice or debasement under extreme context, scarred deeply into the core of self-identity.",
        core: "被大他者的凝视（The Gaze）彻底拷问。不仅是别人觉得你脏，是你自己觉得你脏透了。 | The Castration: 道德自我标榜的粉碎。",
        coreEn: "Thoroughly interrogated by The Gaze. Not just others thinking you dirty; you think you are utterly filthy. | The Castration: Crushing of moral self-proclamation.",
        logic: "羞耻源于内化的他者凝视。主体的自我建构（Ego）因为那个行为被彻底否定。每次照镜子看到的都是一个恶心的叛徒。",
        logicEn: "Shame stems from the internalized gaze. The Ego is negated by the act. Every mirror reflection is a disgusting traitor.",
        patch: {
            mechanics: "Base_INTERNALIZED_GAZE + [Self_Esteem = Negative_Infinite; Scapegoat_Reflex = Directed_Inward]",
            mechanicsEn: "Base_INTERNALIZED_GAZE + [Self_Esteem = Negative_Infinite; Scapegoat_Reflex = Directed_Inward]",
            aesthetic: "聚焦：反复用钢丝球拼命刷洗那只曾经求饶（或作恶）的手直到深可见骨 + 在人群中永远佝偻着背不敢与任何人对视。",
            aestheticEn: "Focus: Frantically scrubbing the hand that begged (or did evil) with steel wool to the bone + Forever slouching in crowds, afraid to lock eyes.",
            runtime: "IF (有人真诚地当众夸奖他的高洁) THEN (这种夸奖会像王水一样直接腐蚀他的灵魂，迫使他当场崩溃逃离现场进行自残倒错)。",
            runtimeEn: "IF (Someone_Sincerenly_Praises_Their_Nobility_in_Public) THEN (The praise corrodes their soul like aqua regia, forcing them to break down, flee, and self-harm)."
        }
    },
    {
        id: "stake_corruption",
        name: "符号的腐烂（被资本与权力异化）", nameEn: "Symbolic Rot (Corruption)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "并非一次性堕落，而是为了换取系统内的生存或特权，一点点将自己的底线切下用以交易。",
        defEn: "Not a one-time fall, but slicing off one's baseline piece by piece to trade for survival or systemic privilege.",
        core: "温水煮青蛙中的法乌士之契。理想的死亡不是轰然倒塌，而是被白蚁蛀空。 | The Castration: 理想主义（Idealism）的侵蚀。",
        coreEn: "Faustian pact in boiling water. Ideals don't collapse; they are hollowed out by termites. | The Castration: Erosion of Idealism.",
        logic: "主体的享乐（Jouissance）被悄然转移。过去追寻的是崇高的快感，如今被资本或权力提供的现世小恩小惠填满，从而主动堵死了通向超越性的裂缝。",
        logicEn: "Subject's Jouissance is quietly diverted. From sublime thrills to systemic petty favors, actively sealing the crack toward transcendence.",
        patch: {
            mechanics: "Base_BOILED_FROG_PACT + [Compromise_Threshold = Lowered_Incrementally; Material_Suture = Active]",
            mechanicsEn: "Base_BOILED_FROG_PACT + [Compromise_Threshold = Lowered_Incrementally; Material_Suture = Active]",
            aesthetic: "聚焦：熟练地将受贿的黑金塞入口袋并对着反光的镜子整理昂贵的领带 + 将曾经写下豪言壮语的日记本用来垫桌角。",
            aestheticEn: "Focus: Skilfully pocketing bribe money while adjusting an expensive tie in the mirror + Using the diary of past heroic vows to level a table leg.",
            runtime: "IF (曾经与自己有一样眼神的新生代试图发起抗争挑战体制) THEN (主体会用长辈的口吻，运用老练的体制内手段极其残忍且合法地将年轻人送进地狱，以维护这个让自己舒适的茅坑)。",
            runtimeEn: "IF (New_Gen_with_Same_Old_Eyes_Tries_to_Rebel) THEN (Subject uses elder tone and systemic tactics to ruthlessly and legally send the youth to hell, preserving their comfortable cesspool)."
        }
    },
    {
        id: "stake_cowardice",
        name: "背对实在界（懦弱溃散）", nameEn: "Flight from the Real (Cowardice)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "在需要做出‘行动（The Act）’来担纲历史或命运重量的关键时刻，选择了逃跑或闭眼。",
        defEn: "Choosing to run or close eyes at the critical moment demanding 'The Act' to shoulder the weight of history or destiny.",
        core: "吉姆爷式的逃亡。不是主动作恶，而是未能行动的罪孽如影随形。 | The Castration: 行动能力（The Act）的瘫痪。",
        coreEn: "Lord Jim style flight. Not acting evil, but the sin of failing to act haunts forever. | The Castration: Paralysis of The Act.",
        logic: "面对‘实在界’的恐怖现身（怪物、灾难、极权的刀），主体为了保全那个脆弱的自恋镜像，临阵脱逃了这唯一能使其成为真正主体的契机。",
        logicEn: "Facing the Real's terror, the subject flees to preserve their fragile narcissistic mirror, abandoning the only chance to become a true subject.",
        patch: {
            mechanics: "Base_FLIGHT_RESPONSE + [Act_Refusal = True; Phobic_Object = The_Real]",
            mechanicsEn: "Base_FLIGHT_RESPONSE + [Act_Refusal = True; Phobic_Object = The_Real]",
            aesthetic: "聚焦：在战友求救的哀嚎声中捂住耳朵拼命狂奔的泥泞双腿 + 后半生每一次听到类似的杂音都会引起痉挛性的神经发抖。",
            aestheticEn: "Focus: Muddy legs running frantically while covering ears to comrade's screams + Spasmodic nervous shaking whenever hearing similar static noises for the rest of life.",
            runtime: "IF (余生中再次面临哪怕最微小的需要挺身而出的选择) THEN (那个巨大的懦弱创伤会像黑洞一样吸干他所有的勇气，甚至让他连喝止一个正在行窃的小偷都不敢)。",
            runtimeEn: "IF (Faces_Even_Tiny_Choice_to_Stand_Up_Later_in_Life) THEN (The massive cowardice trauma acts like a black hole, draining courage so they can't even yell at a petty thief)."
        }
    },
    {
        id: "stake_hypocrisy",
        name: "裂隙的主体（伪善面具）", nameEn: "Split Subjectivity (Hypocrisy)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "建立起一个绝对伟光正的外部社会面具，而在面具之下进行着男盗女娼的极致勾当。",
        defEn: "Erecting an absolutely flawless public mask while operating extreme depravity underneath.",
        core: "表里不一的完美割裂。借用道德的高地来进行大快朵颐的施虐。 | The Castration: 诚实镜像（Honest Mirroring）的断裂。",
        coreEn: "Perfect split of inner/outer. Using moral high ground for sadistic feasting. | The Castration: Breaking of Honest Mirroring.",
        logic: "在犬儒主义的高级形态中，主体的两套系统并行不悖。大他者（社会道德）是被用来操纵的工具，而主体的‘欲力’只在那个隐蔽的密室中喷发。",
        logicEn: "In advanced cynicism, two systems run parallel. The Big Other (social morality) is a tool for manipulation, while the drive erupts solely in the hidden chamber.",
        patch: {
            mechanics: "Base_PHARISEE_SPLIT + [Public_Sigh = Virtuous; Private_Jouissance = Sadistic]",
            mechanicsEn: "Base_PHARISEE_SPLIT + [Public_Sigh = Virtuous; Private_Jouissance = Sadistic]",
            aesthetic: "聚焦：在阳光下流着同情的眼泪为穷人布道，转头进入暗室后立刻露出看极品肉猪般贪婪的眼神审视受难者。 + 镜面上一分为二的两种微表情抽搐。",
            aestheticEn: "Focus: Weeping in sympathy while preaching to the poor, turning into a dark room and instantly showing greedy eyes assessing victims like meat + Twitching micro-expressions on a bisected mirror.",
            runtime: "IF (有人即将揭穿他的双面生活) THEN (他会毫不犹豫地以上帝或正义的名义，煽动不明真相的民众将揭穿者送上火刑架)。",
            runtimeEn: "IF (Someone_is_about_to_Expose_the_Double_Life) THEN (He unhesitatingly incites the ignorant public, in the name of God/Justice, to burn the whistleblower at the stake)."
        }
    },
    {
        id: "stake_cruelty",
        name: "萨德式刽子手（残忍）", nameEn: "Sadean Executioner (Cruelty)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "从暴行中开始汲取审美愉悦和至高快感，完全将他人降格为提供痛苦反馈的工具血肉。",
        defEn: "Deriving aesthetic pleasure and supreme enjoyment from atrocities, fully degrading others into flesh-tools for pain-feedback.",
        core: "服务于邪恶大他者的终极快感代理人。不仅杀人，还要摧毁其意志。 | The Castration: 普世仁慈（Universal Mercy）的抹杀。",
        coreEn: "Ultimate pleasure agent for the evil Big Other. Not just killing, but destroying will. | The Castration: Erasure of Universal Mercy.",
        logic: "萨德幻象的核心：刽子手认为自己是代表自然或宇宙残酷法则的执行工具，他通过无底线的施虐来证明自己不受任何道德律法的阉割。",
        logicEn: "Core of Sadean fantasy: the executioner sees himself as an instrument of nature's cruel law, proving through boundless sadism that no moral law castrates him.",
        patch: {
            mechanics: "Base_SADE_JOUISSANCE + [Empathy = Translated_to_Pleasure; Other_as_Object = Absolute]",
            mechanicsEn: "Base_SADE_JOUISSANCE + [Empathy = Translated_to_Pleasure; Other_as_Object = Absolute]",
            aesthetic: "聚焦：听着骨头断裂的声音如同在品鉴一首古典交响乐，手指在空气中优雅地打着拍子 + 手术刀下那张带着非人狂喜的脸庞。",
            aestheticEn: "Focus: Interpreting bone-breaking sounds like classical symphony, fingers tapping rhythm elegantly + Face bearing inhuman ecstasy over the scalpel.",
            runtime: "IF (受害者展现出极其惊人的宁死不屈) THEN (这不仅不会让他罢手，反而会像打到了最极品的猎物一样激发其千百倍的施虐创造欲)。",
            runtimeEn: "IF (Victim_Displays_Astounding_Indomitable_Will) THEN (Instead of stopping, this excites a thousand-fold sadistic creativity like finding the finest prey)."
        }
    },
    {
        id: "stake_greed",
        name: "无限瘴气（贪婪吞噬）", nameEn: "Infinite Miasma (Greed)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "欲望的客体化无限增殖。为了填补那个永远填不满的黑洞，可以按斤两卖掉灵魂、朋友甚至是世界。",
        defEn: "Infinite proliferation of objectified desire. To fill an unfillable black hole, ready to sell soul, friends, or world by the pound.",
        core: "斯毛戈的死敌。欲望不再有目标，唯一的目标就是‘更多’。 | The Castration: 节制标尺（Scale of Temperance）的熔毁。",
        coreEn: "Smaug the dragon. Desire without target, the only target is 'more'. | The Castration: Meltdown of the Scale of Temperance.",
        logic: "欲驱（Drive）绕过了大他者的限速器，陷入了闭环空转。金钱、权力或生命力失去了其实际用途，完全变成填补那个‘创伤性匮乏’的纯粹符号量。",
        logicEn: "The Drive bypasses the Big Other's speed limiter, trapped in a closed loop. Money/power loses practical use, becoming pure symbolic mass filling the 'traumatic lack'.",
        patch: {
            mechanics: "Base_ENDLESS_VORACITY + [Lack_Void = Unfillable; Commodification_of_All = True]",
            mechanicsEn: "Base_ENDLESS_VORACITY + [Lack_Void = Unfillable; Commodification_of_All = True]",
            aesthetic: "聚焦：坐在堆放如同山脉般财宝的最顶端，却依然伸出干枯得像骷髅一般的手去抠死人嘴里的金牙 + 眼白布满血丝的极度空虚。",
            aestheticEn: "Focus: Sitting atop mountain-high treasures, yet reaching a skeletal hand to pry a gold tooth from a corpse + Extremely hollow, bloodshot eyes.",
            runtime: "IF (只要有人出价稍微高过他的底线) THEN (即使是亲生骨肉或救命恩人，也会被他加上一个条形码打包递给魔鬼以换取筹码)。",
            runtimeEn: "IF (Someone_Offers_Bids_Slightly_Over_Baseline) THEN (Even biological children or saviors get barcode-tagged and handed to demons for chips)."
        }
    },
    {
        id: "stake_addiction",
        name: "毒性极乐（强制沉沦）", nameEn: "Toxikomania (Addiction)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "面对世界的荒谬，选择短路掉所有象征界的追求，通过低级化学物质、虚拟极乐或绝对的肉欲来直接获取快感。",
        defEn: "Facing an absurd world, choosing to short-circuit all Symbolic pursuits, gaining direct pleasure through chemicals, virtual bliss, or pure carnality.",
        core: "将自我淹没在化学水槽中。一种缓慢的、带着微笑的慢性自杀。 | The Castration: 延迟满足（Delayed Gratification）机制的破坏。",
        coreEn: "Drowning self in a chemical vat. Slow, smiling, chronic suicide. | The Castration: Destruction of Delayed Gratification mechanism.",
        logic: "这是一种绕过大他者律法、直接攫取‘实在界享乐’的违规操作。由于没有任何意义作为缓冲，这种过高的电流最终会把主体的神经中枢直接烧毁。",
        logicEn: "A rule-breaking bypass around Big Other's law to grab 'Real Jouissance' directly. With no buffer of meaning, the extreme voltage burns out the neural center.",
        patch: {
            mechanics: "Base_CHEMICAL_SHORT_CIRCUIT + [Symbolic_Bypass = True; Degradation_Rate = 200%]",
            mechanicsEn: "Base_CHEMICAL_SHORT_CIRCUIT + [Symbolic_Bypass = True; Degradation_Rate = 200%]",
            aesthetic: "聚焦：注射泵推到底时犹如升入天堂般的迷离眼神，背景音却是现实中房间门被债主暴力砸烂的声音 + 溃烂皮肤上的脏污针孔。",
            aestheticEn: "Focus: Ethereal eyes ascending to heaven as syringe depresses, background audio is debt-collectors violently smashing the door + Dirty needle marks on festering skin.",
            runtime: "IF (在极少数清醒瞬间看到曾经爱人的遗照) THEN (只会有微秒级的愧疚，随后大脑会不可理喻地尖叫着渴求下一发剂量的注入以抹除这份痛苦)。",
            runtimeEn: "IF (Sees_Dead_Lover_Photo_in_Rare_Lucid_Moment) THEN (Microsecond guilt, followed immediately by brain screaming illogically for next dose to erase the pain)."
        }
    },
    {
        id: "stake_indifference",
        name: "激进冷漠（共情的死亡）", nameEn: "Radical Apathy",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "对整个世界的痛苦、毁灭与挣扎彻底关闭了接收天线，退行到一块没有任何温度的石头状态。",
        defEn: "Completely shutting receiver antennas to the world's pain/destruction, regressing to a stonelike, temperatureless state.",
        core: "世界即使在眼前毁灭爆炸，也能心无旁骛地喝完最后一口咖啡。 | The Castration: 感情触角（Affective Antenna）的彻底割除。",
        coreEn: "If the world explodes in front of them, they'll undisturbed finish the last sip of coffee. | The Castration: Total excision of Affective Antenna.",
        logic: "创伤过载后产生的一种精神病性撤退（Psychotic Withdrawal）。大他者的苦难被判定为‘与我无关的冗余代码’。这比仇恨更令人绝望，因为仇恨依然包含连接。",
        logicEn: "Psychotic Withdrawal triggered by trauma overload. The Other's suffering is evaluated as 'irrelevant redundant code'. More desperate than hate, for hate involves connection.",
        patch: {
            mechanics: "Base_EMPATHY_FLATLINE + [External_Stimuli_Filter = 100%; Emotional_Delta = 0]",
            mechanicsEn: "Base_EMPATHY_FLATLINE + [External_Stimuli_Filter = 100%; Emotional_Delta = 0]",
            aesthetic: "聚焦：面前是血肉横飞的屠杀现场，他却只是在专心致志地清除指甲缝里的泥垢，且没有丝毫刻意伪装。",
            aestheticEn: "Focus: Blood and flesh flying in slaughter scene before them, yet they neurotically clean mud from fingernails, with zero deliberate pretense.",
            runtime: "IF (需要跨过一具还有气在求救的躯体才能拔出自己需要的钥匙) THEN (他会毫无感觉地直接踩在对方断裂的肋骨上拿到钥匙扬长而去，连低头看一眼都不会)。",
            runtimeEn: "IF (Needs_to_Step_Over_Gasping_Victim_to_Get_Key) THEN (Steps indifferently on broken ribs to grab the key and leaves, without glancing down)."
        }
    },
    {
        id: "stake_complicity",
        name: "旁观者的享乐（沉默的共犯）", nameEn: "The Bystander's Jouissance (Complicity)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "虽没亲自握刀，但在关键时刻选择了扭过头去保持沉默，用不作为的方式纵容了极恶的发生，并从中暗自收割安全与私利。",
        defEn: "Though holding no knife, turned the head to remain silent at the critical moment, condoning extreme evil through inaction while reaping safety/profit.",
        core: "平庸的罪。‘我什么都没做’是最大的恶意谎言。 | The Castration: 清白感（Innocence）的隐秘丧失。",
        coreEn: "The crime of banality. 'I did nothing' is the greatest malicious lie. | The Castration: Secret loss of Innocence.",
        logic: "在拉康语境里，主体对作恶的旁观，往往隐藏着一种窥视癖的淫荡快感（Obscene Enjoyment）。你不杀伯仁，但你通过观看伯仁的死巩固了你的体制内特权安全感。",
        logicEn: "In Lacanian terms, bystander observation of evil hides a voyeuristic obscene enjoyment. You don't kill them, but watching consolidates your systemic privilege.",
        patch: {
            mechanics: "Base_SILENT_COMPLICITY + [Action_Omission = True; Covert_Jouissance = Extracted]",
            mechanicsEn: "Base_SILENT_COMPLICITY + [Action_Omission = True; Covert_Jouissance = Extracted]",
            aesthetic: "聚焦：紧闭的百叶窗背后那一双颤抖却又死死盯着施暴现场的眼睛 + 事后清洗并没有沾血的手牌。",
            aestheticEn: "Focus: Trembling eyes peering through tightly shut blinds at the atrocity + Washing hands obsessively afterward though no blood is on them.",
            runtime: "IF (事后有人质问当初为何不发声) THEN (主体会立刻表现出极大的委屈与道德绑架反扑，声称自己也是由于巨大的恐惧而无奈的受害者)。",
            runtimeEn: "IF (Questioned_Later_Why_No_Voice) THEN (Subject instantly shows immense grievance, counter-attacking with moral coercion: 'I was a helpless victim of immense fear too')."
        }
    },
    {
        id: "stake_selling_out",
        name: "理想的折现（出卖灵魂）", nameEn: "Sublation of Ideal (Selling Out)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "将曾经视若神明的艺术天赋、救世理想或革命火种，明码标价变现换取了世俗的豪宅与地位。",
        defEn: "Pricing and cashing in God-given artistic talent, savior ideals, or revolutionary sparks for profane mansions and status.",
        core: "诗人的笔杆被换成了金打的算盘。高贵精神在铜臭味中的憋屈死亡。 | The Castration: 崇高性（The Sublime）的降维打折。",
        coreEn: "Poet's pen traded for gold abacus. Noble spirit suffocating in copper stench. | The Castration: Dimensional discounting of The Sublime.",
        logic: "主体用经验界的‘物’（金钱地位），置换了本体界的那一抹‘空’（崇高理想）。一旦交易达成，原本那个发光的主体就自我宣告了破产。",
        logicEn: "Subject trades empirical 'Things' (money/status) for ontological 'Void' (Sublime Ideals). Once traded, the glowing subject declares self-bankruptcy.",
        patch: {
            mechanics: "Base_IDEAL_MONETIZATION + [Sublime_Aura = Liquidated; Earthly_Rewards = Granted]",
            mechanicsEn: "Base_IDEAL_MONETIZATION + [Sublime_Aura = Liquidated; Earthly_Rewards = Granted]",
            aesthetic: "聚焦：沾满香槟与红唇的支票被随意丢在铺满灰尘的残缺初稿上 + 在极度奢华的宴席上突然涌上无法抑制的极其恶心的干呕感。",
            aestheticEn: "Focus: Cheque smeared with champagne/red lips tossed casually on dusty incomplete first draft + Uncontrollable nauseating dry heaving amidst hyper-luxurious banquet.",
            runtime: "IF (看到有贫穷但眼睛里有光的年轻人重复走上自己曾经的路) THEN (内心会升起一股阴暗的嫉恨，不择手段地想用金钱直接将其买断砸烂，以证明所有的光最终都会屈服)。",
            runtimeEn: "IF (Sees_Poor_Youth_with_Light_in_Eyes_Walking_Own_Past_Path) THEN (Dark envy arises, using money unscrupulously to buy out and crush them to prove all light succumbs)."
        }
    },
    {
        id: "stake_tyrant",
        name: "铁狱的主宰（成为暴君）", nameEn: "Master Signifier (Becoming Tyrant)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "为了建立或维持认为的绝对秩序，将自我无限膨胀为压碎一切自由和个体的巨型利维坦。",
        defEn: "Swelling ego infinitely into a giant Leviathan crushing all freedom/individuals just to establish or maintain absolute 'order'.",
        core: "从屠龙者蜕变为化身‘律法本身’的主人能指。 | The Castration: 对他者之自由（Other's Freedom）的全面抹杀。",
        coreEn: "Transformed from dragon-slayer to Master Signifier embodying 'The Law'. | The Castration: Total obliteration of Other's Freedom.",
        logic: "当对失序混乱的恐惧达到极点，主体就会退化为‘绝对主人’。他不再具有人类的温度，而是成为了大他者残酷齿轮的拟人化替身。",
        logicEn: "When fear of chaos peaks, subject regresses to 'Absolute Master'. Lacking human warmth, they become the anthropomorphic avatar of the Big Other's cruel gears.",
        patch: {
            mechanics: "Base_LEVIATHAN_ASCENSION + [Order_Param = Max; Individual_Rights = Eradicated]",
            mechanicsEn: "Base_LEVIATHAN_ASCENSION + [Order_Param = Max; Individual_Rights = Eradicated]",
            aesthetic: "聚焦：高坐在纯银与枯骨堆砌成的王座上，面对下方如海啸般的哀嚎不带任何表情地下达射杀令 + 永远不会取下阻隔目光的冰冷金属面罩。",
            aestheticEn: "Focus: Sitting high on throne of pure silver and bones, issuing execution orders expressionlessly against tsunami-like wailing + Never removing the cold metal mask blocking gaze.",
            runtime: "IF (昔日的亲兄弟由于忍受不了暴政而发声劝谏) THEN (为了证明绝对绝对律法的唯一性，会用比对付敌人还要残忍十倍的刑罚亲自腰斩亲人)。",
            runtimeEn: "IF (Former_Blood_Brother_Pleads_Against_Tyranny) THEN (To prove absolute exclusivity of law, uses punishment 10x crueler than on enemies to personally cleave the sibling)."
        }
    },
    {
        id: "stake_false_prophet",
        name: "空心布道者（伪先知）", nameEn: "The Impostor's Sermon (False Prophet)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "利用他人的恐惧和精神匮乏，贩卖自己根本不相信的信仰，打造出一个嗜血的狂热邪教帝国。",
        defEn: "Exploiting others' fear/mental lack to hawk un-believed faith, building a bloodthirsty, fanatical cult empire.",
        core: "操弄大他者以骗取羔羊的血肉。终极的象征界诈骗犯。 | The Castration: 神圣真理（Sacred Truth）的亵渎与降级。",
        coreEn: "Manipulating Big Other to scam meat from lambs. Ultimate Symbolic fraudster. | The Castration: Sacrilege and degrading of Sacred Truth.",
        logic: "知道神明不存在，但深谙群众需要被填补漏洞（Lack）。主体站在大他者的真空位置上，伪装成能指的主人来收割信徒的剩余享乐（Surplus Jouissance）。",
        logicEn: "Knowing god doesn't exist but mastering the masses' need to fill the Lack. Subject stands in the Big Other's vacuum, disguising as signifier master to harvest believers' surplus Jouissance.",
        patch: {
            mechanics: "Base_CULT_MANIPULATOR + [Faith_Belief = 0; Charisma_Exploitation = Max]",
            mechanicsEn: "Base_CULT_MANIPULATOR + [Faith_Belief = 0; Charisma_Exploitation = Max]",
            aesthetic: "聚焦：在万人体育场上声泪俱下地布道，镜头切至后台却在对着账单爆出最肮脏下流的狂笑辱骂信徒 + 用圣水洗手却洗不下代表掠夺的油污。",
            aestheticEn: "Focus: Tearfully preaching to stadium, cutting backstage to vulgar laughter cursing believers over ledgers + Washing hands with holy water failing to remove predatory grease.",
            runtime: "IF (信徒为了证明教义准备集体跳下悬崖殉道) THEN (他会高声唱赞歌欢送每一只替罪羊，并同时派人下去将尸体上的金饰全部扒光入库)。",
            runtimeEn: "IF (Believers_Prepare_Mass_Suicide_Off_Cliff_for_Doctrine) THEN (Loudly sings hymns seeing off every scapegoat, while sending men down to strip gold from corpses for vault)."
        }
    },
    {
        id: "stake_parasite_moral",
        name: "欲望吸血鬼（隐性寄生）", nameEn: "Vampiric Extimacy (Parasitism)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "自己失去了生活的能力或意志，但像藤蔓或水蛭一样死死缠绕在一个有光芒的载体身上，甚至通过操控其负罪感来吸干对方的生命力。",
        defEn: "Losing ability/will to live independently, wrapping like a vine/leech onto a shining carrier, draining vitality by manipulating their guilt.",
        core: "情感恐怖分子式的附生者。通过展示自己的溃烂来绑架有力量的人。 | The Castration: 独立生命力（Autonomous Vitality）的主动弃绝。",
        coreEn: "Emotional-terrorist epiphyte. Holding strong people hostage by flaunting their own rot. | The Castration: Active renunciation of Autonomous Vitality.",
        logic: "在精神分析中这叫利用他者的症状（Symptom）寄生。通过让宿主产生“你是因为我才变好的/你有义务养我”的负罪回路，达成永续剥削。",
        logicEn: "Exploiting the Other's symptom to parasitize. Fostering a guilt loop in the host: 'You owe me/You are well because of me' for perpetual exploitation.",
        patch: {
            mechanics: "Base_SYMPTOMATIC_PARASITE + [Guilt_Trip = Weaponized; Autonomous_Drive = Nullified]",
            mechanicsEn: "Base_SYMPTOMATIC_PARASITE + [Guilt_Trip = Weaponized; Autonomous_Drive = Nullified]",
            aesthetic: "聚焦：宿主眼圈发黑几近猝死，寄生者却在黑暗中像巨型白色蛀虫一般在床上发出满足的鼾声 + 手腕上展示给对方看的旧割痕。",
            aestheticEn: "Focus: Host with dark circles nearing sudden death, parasite snoring contentedly like giant white grub in bed + Wrists flashing old cut scars to the host.",
            runtime: "IF (宿主终于痛下决心试图切断关系重新开始生活) THEN (寄生者会在其家门口上演极其惨烈血腥但不致死的自残大戏，重新将宿主拽回负罪感与责任的泥潭，重新锁死螺丝)。",
            runtimeEn: "IF (Host_Finally_Resolves_to_Cut_Ties_to_Start_Over) THEN (Parasite stages dramatic bloody nonlethal self-harm at their doorstep, dragging host back into guilt/duty mud, locking screws back)."
        }
    },
    {
        id: "stake_revenge_consume",
        name: "死冲动的木偶（被复仇吞噬）", nameEn: "The Death Drive (Consumed by Revenge)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "本是为了伸张正义而复仇，但最后复仇本身异化为了比仇人更恐怖的嗜血引擎，不惜踩碎地球也要杀死对方。",
        defEn: "Revenge aimed for justice mutates into a bloodthirsty engine worse than the enemy, crushing the Earth just to kill the target.",
        core: "被死本能（Thanatos）完全接管的疯狂幽灵。没有未来，只剩下同归于尽的荒芜。 | The Castration: 生之本能（Eros）的绝对燃烧殆尽。",
        coreEn: "Crazy ghost hijacked by Thanatos. No future, just desolate mutual destruction. | The Castration: Absolute burnout of Eros.",
        logic: "目标的毁灭已经成为了主体唯一的实在界锚点。一旦这个仇恨被拔出，主体内部就只剩空壳。因此为了维持这股张力，复仇手段必然失控变态化。",
        logicEn: "The target's ruin is the subject's sole Real anchor. Unplugged, only empty shell remains. Thus, to maintain tension, revenge methods necessarily spiral into hyper-perversion.",
        patch: {
            mechanics: "Base_THANATOS_OVERDRIVE + [Eros_Instinct = Burned_Out; Collateral_Damage_Limit = Infinity]",
            mechanicsEn: "Base_THANATOS_OVERDRIVE + [Eros_Instinct = Burned_Out; Collateral_Damage_Limit = Infinity]",
            aesthetic: "聚焦：连瞳孔都变成了犹如随时会自爆的红色超载光芒 + 即使仇人已经碎成肉泥，依然在用石头狂砸那滩血泊几百下直到累到肌肉溶解。",
            aestheticEn: "Focus: Pupils glaring with red overload like ready-to-detonate bomb + Smashing the bloody paste of enemy with rock hundreds of times until muscles melt.",
            runtime: "IF (发现仇人的无辜幼女挡在炸药桶前) THEN (为了贯彻复仇，主体的大脑会强行切断人伦回路，连着带满屋子的孤儿和这半座城市一起夷为平地，不留一丝灰烬)。",
            runtimeEn: "IF (Finds_Enemy's_Innocent_Daughter_Shielding_Explosives) THEN (To fulfill revenge, brain forcibly cuts ethical circuit, leveling the room full of orphans and half the city to ashes)."
        }
    },
    {
        id: "stake_cynicism",
        name: "犬儒的铁甲（绝对愤世嫉俗）", nameEn: "Defensive Disavowal (Cynicism)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "因为被世界重伤，索性披上了什么都不再相信的刺猬铁甲，把所有高尚的行为全部分析为自私的基因运作。",
        defEn: "Heavily wounded by the world, donning hedgehog armor of believing in nothing, analyzing all noble acts as selfish gene operations.",
        core: "‘我看透了世界上没有光。’这是最傲慢的怯懦。 | The Castration: 信任（Symbolic Trust）的永久性缝合。",
        coreEn: "'I saw through that there is no light in the world'. The most arrogant cowardice. | The Castration: Permanent suturing of Symbolic Trust.",
        logic: "极其典型的防御性否认（Disavowal）。主体知道事实（我知道有人在行善），但行为上假装不知（但我依然认为那是装逼）。借此逃避被再次伤害的风险。",
        logicEn: "Defensive Disavowal. Subject knows the fact (I know people do good) but acts otherwise (but I think it's pretension). A shield against getting hurt again.",
        patch: {
            mechanics: "Base_CYNICAL_SHIELD + [Hope_Reception = Blocked; Deconstruction_Virus = Active]",
            mechanicsEn: "Base_CYNICAL_SHIELD + [Hope_Reception = Blocked; Deconstruction_Virus = Active]",
            aesthetic: "聚焦：嘴角常年挂着充满讥讽和疲惫的冷笑 + 习惯性地将所有的崇高牺牲用充满恶俗字眼的段子去消解污名化。",
            aestheticEn: "Focus: Corners of mouth permanently hung with cynical, exhausted sneer + Habitually deconstructing proper sublime sacrifices utilizing vulgar jokes to stigmatize.",
            runtime: "IF (真正能救赎他的那一束光犹如奇迹般投射到他身上时) THEN (他会下意识地拔出枪将光源打碎，甚至嘲笑光源‘你肯定另有所图’)。",
            runtimeEn: "IF (Actual_Light_of_Redemption_Miraculously_Shines_On_Him) THEN (He reflexively draws gun, shoots the light source, mocking 'You must have an ulterior motive')."
        }
    },
    {
        id: "stake_sloth",
        name: "符号界的沉没（怠惰与遗忘）", nameEn: "Oblivion in the Symbolic (Sloth)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "彻底倒在了大他者编织的精神沙发里，放弃了所有的对抗和向上的演化可能性，任由肉体和精神烂成一滩泥。",
        defEn: "Completely sinking into the Big Other's mental couch, abandoning all conflicts/upward evolution, letting flesh and spirit rot into a mud puddle.",
        core: "最温水煮蛙的死亡。用无尽的消遣淹没真实界存在的刺痛。 | The Castration: 生命张力（Tension of Becoming）的流失。",
        coreEn: "Slowest death. Drowning the sting of Real existence in endless amusement. | The Castration: Drain of the Tension of Becoming.",
        logic: "这不是身体的疲惫，而是欲望引擎在充沛的资本糖衣炮弹下彻底熄火。主体主动躺进了被消费主义等小他者喂养的软性子宫中，拒绝出生。",
        logicEn: "Not physical fatigue, but desire engine stalling under capitalist sugar-bullets. Subject actively lies in the soft womb fed by little others (consumerism), refusing birth.",
        patch: {
            mechanics: "Base_ENTROPIC_SLOTH + [Action_Potential = Zero; Comfort_Zone = Insulated_Tomb]",
            mechanicsEn: "Base_ENTROPIC_SLOTH + [Action_Potential = Zero; Comfort_Zone = Insulated_Tomb]",
            aesthetic: "聚焦：在堆满高端游戏与垃圾食品的昏暗房间内因极速发胖而产生的一滩充满油腻感的死肉 + 眼睛里倒映着毫无营养的娱乐频段雪花。",
            aestheticEn: "Focus: Puddle of greasy dead meat ballooning in dim room piled with high-end gaming/junk food + Eyes reflecting nutrientless entertainment channel static.",
            runtime: "IF (外面爆发了关乎其生死的战争警报) THEN (主体只是烦躁地拉上极具隔音效果的厚重窗帘，喝下致幻剂继续在一坨烂泥里打滚)。",
            runtimeEn: "IF (Life-or-Death_War_Siren_Explodes_Outside) THEN (Subject just irritably pulls ultra-soundproof heavy curtains, downs hallucinogens, rolling back into mud)."
        }
    },
    {
        id: "stake_envy",
        name: "盗取享乐（极度嫉妒）", nameEn: "The Stolen Jouissance (Envy)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "产生了一种极端妄想：认为别人偷走了本该属于自己的完美和幸福。因此不惜一切代价要将比自己美好的人摧毁撕烂以达到平衡。",
        defEn: "Extreme delusion that others stole the perfection/happiness meant for them. Ready to tear down anyone better to reach twisted equilibrium.",
        core: "萨列里毒杀莫扎特。无法忍受他者占据了大他者（The Other）的位置。 | The Castration: 自我匮乏（Self-Lack）的疯狂外投。",
        coreEn: "Salieri poisoning Mozart. Unable to bear the other occupying Big Other's position. | The Castration: Frantic external projection of Self-Lack.",
        logic: "嫉妒的核心不是‘我想要拥有你拥有的’，而是‘我因为我没有而痛苦，所以我绝对不能让你拥有’。这是一种通过毁灭他者客体来填补自己黑洞的死本能。",
        logicEn: "Envy's core isn't 'I want what you have', but 'My lack hurts, so I absolutely cannot let you have it'. Thanatos destroying the other to fill one's own black hole.",
        patch: {
            mechanics: "Base_DESTRUCTIVE_ENVY + [Other_Completeness = Unbearable; Sabotage_Drive = Maximum]",
            mechanicsEn: "Base_DESTRUCTIVE_ENVY + [Other_Completeness = Unbearable; Sabotage_Drive = Maximum]",
            aesthetic: "聚焦：躲在暗处盯着别人发光的奖杯时眼角因为极度扭曲而崩裂出的细小血丝 + 在别人看不到的角度偷偷用硫酸泼向那幅完美的画作。",
            aestheticEn: "Focus: Lurking in shadows, capillaries bursting from hyper-contorted glaring at another's shining trophy + Secretly splashing acid on perfect portrait out of sight.",
            runtime: "IF (那个由于才华横溢而被自己嫉妒的人好心将资源分给他以示提携) THEN (这种被怜悯的暴击会直接引爆主体所有的隐性火药库，他会当场翻脸并用淬毒的刀刺向好人)。",
            runtimeEn: "IF (The_Talented_Envy-Target_Kindly_Offers_Resources_to_Help) THEN (This critical hit of pity detonates subject's hidden powder kegs, instantly flipping out to stab the do-gooder with poisoned dagger)."
        }
    },
    {
        id: "stake_pride",
        name: "水仙花之死（傲慢的封锁）", nameEn: "Narcissistic Blockade (Pride)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "拒绝接受象征界的任何律法（阉割），陷入了极端的自大狂妄症，最终导致无可挽回的惨绝剧变。",
        defEn: "Refusing to accept any law of Symbolic Order (Castration), plunging into extreme megalomania ending in irreversible catastrophic tragedy.",
        core: "古希腊神话中的‘Hubris’（僭妄）。自以为是神明，结果被不可抗力碾成粉末。 | The Castration: 象征界阉割（Symbolic Castration）的否认。",
        coreEn: "Greek 'Hubris'. Mistaking self for god, crushed by force majeure. | The Castration: Denial/Foreclosure of Symbolic Castration.",
        logic: "拉康精神病理学中的（Foreclosure）。因为拒绝承认自己是有缺陷的，世界为了修正这个庞大的漏洞，必须通过毁天灭地的灾难来强行对其进行客观‘物理阉割’。",
        logicEn: "Lacanian psychopathology (Foreclosure). By refusing to admit lack, the world, to correct this massive bug, must enforce objective 'physical castration' via apocalyptic disaster.",
        patch: {
            mechanics: "Base_HUBRIS_TOWER + [Symbolic_Law = Foreclosed; Reality_Correction = Incoming_Lethal]",
            mechanicsEn: "Base_HUBRIS_TOWER + [Symbolic_Law = Foreclosed; Reality_Correction = Incoming_Lethal]",
            aesthetic: "聚焦：站在将倾的大厦顶端狂妄地指着天大骂雷霆降临的不可一世 + 下一秒被闪电劈中化为黑炭前那还来不及转化惊恐的傲慢面孔。",
            aestheticEn: "Focus: Standing atop tilting skyscraper arrogantly pointing and cursing the descending thunder + The arrogant face unable to translate into shock a split second before lightning turns it into char.",
            runtime: "IF (明知前面是悬崖且所有家臣以死进谏求其退缩) THEN (他会为了维护那不可一世的、绝对正确的自尊，亲自将进谏者割喉，然后带着全军义无反顾地踏空堕入深渊)。",
            runtimeEn: "IF (Knows_Cliff_is_Ahead_and_Ministers_Plead_with_Death_to_Retreat) THEN (To preserve omnipotent correct ego, personally slits pleader's throat, marching entire army off into the abyss without hesitation)."
        }
    },
    {
        id: "stake_lust",
        name: "客体的胜利（沉没于色欲）", nameEn: "The Object's Triumph (Lust)",
        group: "C. 道德的堕落", groupEn: "Moral",
        def: "主体的理智被大他者的部分客体（乳房、眼眸、权力幻象的替代物等）完全征服，沦为追逐交配与低级感官刺激的野兽。",
        defEn: "Subject's reason conquered by Big Other's partial objects (breasts, eyes, power-illusion substitutes), degrading to a beast chasing copulation and base sensorial spikes.",
        core: "失去作为人的总体性。被碎片化的肉欲控制了中枢轴。 | The Castration: 精神升华（Sublimation）架构的融毁。",
        coreEn: "Losing human totality. Fragmented carnal lust controls the central axis. | The Castration: Meltdown of the Sublimation architecture.",
        logic: "在性化的精神结构中，部分客体替代了完整主体。人不再为了爱或信仰而活，而是为了那个具体的洞口、气味而活，彻底被客体的引力捕获而堕落。",
        logicEn: "In hyper-sexualized mental structures, partial objects replace the whole subject. One no longer lives for love/faith, but for the specific hole/scent, totally captured by object gravity.",
        patch: {
            mechanics: "Base_PARTIAL_OBJECT_CAPTURE + [Subjective_Totality = Broken; Drive_Circuit = Shorted_to_Lust]",
            mechanicsEn: "Base_PARTIAL_OBJECT_CAPTURE + [Subjective_Totality = Broken; Drive_Circuit = Shorted_to_Lust]",
            aesthetic: "聚焦：犹如野狗一般在泥地里爬行只为了舔舐某张带有特定体香的丢弃手帕 + 脑中只剩下类似脉冲般的粉色肉体碎片的疯狂蒙太奇。",
            aestheticEn: "Focus: Crawling in mud like a wild dog just to lick a discarded handkerchief carrying a specific scent + Brain reduced to pulsing frantic montage of pink flesh fragments.",
            runtime: "IF (在极为庄严肃穆的国家公祭或葬礼上) THEN (只要某个触发他性欲客体的身影走过，他立刻会在台下撕破伪装的尊严犹如发情的猛兽般扑上去撕扯其衣物丢尽身家败名)。",
            runtimeEn: "IF (During_Solemn_State_Funeral_or_Memorial) THEN (If a figure triggering his lust object passes by, instantly tears the facade of dignity, lunging like rutting beast to rip clothes down, losing all reputation)."
        }
    }
];
