import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_C: LibraryItemDef[] = [
    {
        id: "res_pyrrhic",
        name: "真理的昂贵对价", nameEn: "The Cost of Truth",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体撕裂了虚假的和平赢得了胜利，但作为物理实体的肉身、财产或爱人作为“实在界的代价”被永久销毁。",
        defEn: "The subject tears apart the false peace to claim victory, but their physical body, properties, or lover as a physical entity is permanently destroyed as the 'cost of the Real'.",
        core: "惨胜。在斩断大他者枷锁的同时，必定会切断自己的某条动脉。获得了绝对的真理，但永久失去了日常的生活。 | Outcome: 结构性截肢。",
        coreEn: "Pyrrhic victory. Severing the Big Other's shackles inevitably cuts one's own artery. Gaining absolute truth while permanently forfeiting daily life. | Outcome: Structural amputation.",
        patch: {
            mechanics: "结算所有正面主线任务，但强制没收玩家的一项核心能力或最珍贵的绑定伙伴，且无法在二周目继承。",
            mechanicsEn: "Resolves all positive main quests, but forcibly confiscates one of the player's core abilities or most precious bonded companion, uninheritable in New Game+.",
            aesthetic: "战场废墟上的绝美阳光。主角满身血污地拿着原本追寻的信物，眼神平和但永远缺少了焦点中的某样东西。微风吹过断壁残垣。",
            aestheticEn: "Breathtaking sunlight over the battlefield ruins. The blood-stained protagonist holds the sought-after token, eyes peaceful but forever missing something in their focus. A breeze blows through the rubble.",
            runtime: "M6阶段如果【代价变量】溢出，将在胜利界面的渲染管线中永久施加一道细微的【屏幕裂痕（Screen Tear）】。",
            runtimeEn: "If the [Cost Variable] overflows during M6, a subtle [Screen Tear] will be permanently applied to the render pipeline of the victory screen."
        }
    },
    {
        id: "res_martyr",
        name: "纯粹行动的殉道", nameEn: "The Absolute Act",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体以自身肉体的灰飞烟灭为代价，向大他者投掷了无法被同化的真实，用死亡在严密的逻辑网上烧出一个无法愈合的洞。",
        defEn: "At the cost of physical obliteration, the subject hurls an unassimilable Real at the Big Other, using death to burn an unhealable hole into the airtight logical net.",
        core: "《安提戈涅》式的壮烈悲剧。肉体的毁灭不再是惩罚，而是主体彻底豁免于符号界凝视的最强音。 | Outcome: 精神的不朽化锚点。",
        coreEn: "An Antigone-esque sublime tragedy. The destruction of the flesh is no longer a punishment, but the subject's ultimate exemption from the Gaze of the Symbolic. | Outcome: Immortal anchor of spirit.",
        patch: {
            mechanics: "主角在一场绝对实力悬殊的压制中主动选择引爆内核。画面全白，随后的过场动画只展示世界因为他的死而产生的不归谬变。",
            mechanicsEn: "In an absolutely overwhelming suppression, the protagonist actively chooses to detonate their core. Screen turns solid white, following cutscenes only show the irreversible mutation of the world due to their death.",
            aesthetic: "没有悲鸣，只有一声极其清脆的玻璃碎裂音阶。光芒从内部炸开，将所有威权的反派阴影瞬间蒸发为负底色。",
            aestheticEn: "No lamentation, only a supremely crisp glass-shattering scale. Light detonates from within, evaporating all authoritarian villainous shadows instantly into negative background colors.",
            runtime: "执行死亡协议（KillProcess）前，强行将主角的【命名变量】注入系统的全局基类（Global Base Class），无法被覆盖。",
            runtimeEn: "Before executing the KillProcess, forcibly injecting the protagonist's [Naming Variable] into the system's Global Base Class, un-overridable."
        }
    },
    {
        id: "res_acceptance",
        name: "主体的罢黜", nameEn: "Subjective Destitution",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体彻底放弃了自我补全的狂想，承认了匮乏（Lack）的绝对必然性，从而停止了对“对象a”的神经症追逐。",
        defEn: "The subject entirely abandons the delirium of self-completion, acknowledging the absolute necessity of Lack, thereby ceasing the neurotic chase after 'object a'.",
        core: "精神分析的终点：与自身的残缺和解。不在于填补那个洞，而在于绕着洞优雅地散步。放下的瞬间，大他者随即解体。 | Outcome: 和解的真空态。",
        coreEn: "The endpoint of psychoanalysis: reconciling with one's own incompleteness. It is not about filling the hole, but pacing elegantly around it. The moment of letting go, the Big Other immediately dissolves. | Outcome: Vacuum state of reconciliation.",
        patch: {
            mechanics: "面对终极诱惑或反派的挑衅，主角选择丢下武器。不战也不降，只是转身离开了判定区域，使得系统的强迫症循环报错停机。",
            mechanicsEn: "Facing the ultimate temptation or villain's provocation, the protagonist drops their weapon. Neither fighting nor surrendering, merely turning and leaving the trigger zone, causing the system's OCD loop to crash.",
            aesthetic: "一种令人极度舒适的卸力感。紧张的弦乐被极其松弛的长音取代。主角深吸一口气，原本身上背负的叙事重压如有实质般溃散。",
            aestheticEn: "An immensely comfortable sensation of releasing tension. Tense strings replaced by extremely relaxed long notes. The protagonist takes a deep breath; the narrative gravity they bore dissipates tangibly.",
            runtime: "角色状态栏里的所有【焦虑（Anxiety）】与【追求（Quest）】标记全部隐去不显示。事件栈强行清空。",
            runtimeEn: "All [Anxiety] and [Quest] markers in the character's status bar are hidden from display. Event stack forcibly cleared."
        }
    },
    {
        id: "res_flight",
        name: "正交逃逸", nameEn: "Orthogonal Escape",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "看穿了游戏规则的闭环，主体选择既不顺从也不反抗，而是垂直于现有的世界轴线，逃向未知的“维度外”。",
        defEn: "Seeing through the closed loop of the game rules, the subject chooses neither compliance nor rebellion, but takes an orthogonal flight perpendicular to the existing world axis into the unknown 'outside'.",
        core: "《楚门的世界》结尾那一鞠躬。真正的自由不是在笼子里打赢监狱长，而是找到那扇不存在的门并走进去，去承受没有剧本的真实寒风。 | Outcome: 边界的僭越。",
        coreEn: "The bow at the end of The Truman Show. True freedom is not beating the warden inside the cage, but finding the door that doesn't exist and walking out to endure the unscripted real wind. | Outcome: Transgression of the boundary.",
        patch: {
            mechanics: "放弃了终极Boss战或王座，主角用某种非传统的方式（如摧毁承重墙、黑入底层后台）走出了渲染区。",
            mechanicsEn: "Forfeiting the final Boss fight or the throne, the protagonist uses an unconventional method (e.g., destroying a load-bearing wall, hacking the backend) to walk out of the rendered zone.",
            aesthetic: "极度震撼的舞台边缘感。主角手触碰到带有马赛克或胶片质感的“天空边界”。开门的一瞬间，光线将他吞没。不播放任何制作人员名单。",
            aestheticEn: "Profoundly shocking sense of the stage's edge. The protagonist touches 'sky boundaries' with pixelated or filmic textures. The moment the door opens, light swallows them. No end credits roll.",
            runtime: "将角色的坐标强行修改为超越场景 `BoundingBox` 的极值（如 `X: Infinity`），引发引擎关于“对象越界”的美学崩溃。",
            runtimeEn: "Forcibly modifying the character's coordinates to extremes transcending the scene's `BoundingBox` (e.g., `X: Infinity`), sparking an aesthetic engine crash of 'object out of bounds'."
        }
    },
    {
        id: "res_new_order",
        name: "重结波罗米恩", nameEn: "Re-knotting the Borromean",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "在象征界与想象界双双崩塌的废墟中，主体运用自身的特异性（Sinthome），为世界强行打上了一个新的、前所未有的结。",
        defEn: "Amidst the ruins of both the Symbolic and the Imaginary collapsing, the subject utilizes their own singularity (Sinthome) to forcibly tie a new, unprecedented knot for the world.",
        core: "极度罕见的结构重组。主体成为了那个建立新规则的“原父”，但这不是权力的重复，而是某种基于匮乏的新生态法则的确立。 | Outcome: 新律法的奠基。",
        coreEn: "Extremely rare structural reorganization. The subject becomes the 'primal father' who establishes the new rules, but this is not a repetition of power, but the establishment of a new ecological law based on lack. | Outcome: Founding of the New Law.",
        patch: {
            mechanics: "利用之前收集的所有散落碎片（无论是友方的还是敌方的残骸），构建出一个在规则面板上原本不存在的选项并执行。",
            mechanicsEn: "Using all scattered fragments collected previously (whether friendly or enemy wreckage), constructing an option that originally did not exist on the rule panel and executing it.",
            aesthetic: "万物复苏但具有异化感的黎明。世界并未恢复原状，而是长出了违反常规常理但美丽的新事物（如从钢铁废墟中长出的巨大发光植物）。",
            aestheticEn: "A dawn of things reviving but with a sense of alienation. The world does not revert; rather, unconventional yet beautiful new things grow (like giant glowing plants sprouting from steel ruins).",
            runtime: "系统抛弃原本的判定库，将主角的私有方法升格为全局类。UI界面发生彻底的重绘与改版。",
            runtimeEn: "The system discards its original evaluation library, escalating the protagonist's private methods to global classes. The UI undergoes a thorough redraw and revamp."
        }
    },
    {
        id: "res_true_love",
        name: "匮乏的相互赠予", nameEn: "Sharing the Lack",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "拉康意义上真正的爱：“把你没有的东西，给一个不想要它的人”。两个不再试图从对方身上索取圆满的残缺主体，在绝境中达成了连接。",
        defEn: "True love in the Lacanian sense: 'Giving what you don't have to someone who doesn't want it.' Two fragmented subjects who no longer try to extract completeness from each other forge a connection in the abyss.",
        core: "不是灵魂伴侣的童话，而是两个创伤内核的互相照见。因为我们都一无所有，所以我们拥有了对抗虚无的彼此。 | Outcome: 爱作为终极圣状。",
        coreEn: "Not the fairy tale of soulmates, but the mutual illumination of two traumatic cores. Because we both have absolutely nothing, we possess each other against the void. | Outcome: Love as the ultimate Sinthome.",
        patch: {
            mechanics: "在所有物资清零、血量见底且无法通关的窘境中，主角将最后一丝毫无功能效用的“动作”（如一个微笑、一朵纸花）传递给伴侣。",
            mechanicsEn: "In the direst straits with zero resources, bottomed HP, and impossible clearance, the protagonist passes the last, functionally useless 'action' (e.g., a smile, a paper flower) to the partner.",
            aesthetic: "末日崩塌的背景，巨响与火焰铺天盖地。但在景深极浅的画面中央，只有两人交握的双手，时间仿佛为这一瞬间而停顿。",
            aestheticEn: "Apocalyptic collapsing background, deafening roar and fire overwhelming. But in the ultra-shallow depth of field center, only two clasped hands; time seems to halt for this instant.",
            runtime: "绕过【生存逻辑（Survival Logic）】，使两名角色的坐标在引力引擎内永久锚定在一起，即使场景被销毁亦不分离。",
            runtimeEn: "Bypassing [Survival Logic], permanently anchoring both characters' coordinates together within the gravity engine, inseparable even if the scene is destroyed."
        }
    },
    {
        id: "res_sinthome",
        name: "圣状的独立命名", nameEn: "The Sinthome",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体不再试图治愈自己的强迫/创伤症状，而是将其作为自己独特的存在之锚，用这个无法被同化的疯狂特质发明了自己。",
        defEn: "The subject no longer attempts to cure their obsessive/traumatic symptoms; instead, they use it as their unique existential anchor, inventing themselves with this unassimilable crazy trait.",
        core: "乔伊斯式的胜利。既然世界是荒谬的大他者残次品，那么我就用我的“病”写出一本属于我自己的天书。我是我自己的结。 | Outcome: 第四环的锁定。",
        coreEn: "The Joycean victory. Since the world is an absurd defective product of the Big Other, I will use my 'illness' to write my own incomprehensible tome. I am my own knot. | Outcome: Locking of the fourth ring.",
        patch: {
            mechanics: "将原本处于De-buff栏位里的一个极其负面的特质（如幻听、偏执）翻转为对抗系统终极同化抹杀的核心防御机制。",
            mechanicsEn: "Flipping an extremely negative trait originally in the De-buff slot (e.g., auditory hallucinations, paranoia) into the core defense mechanism against the system's ultimate assimilation/erasure.",
            aesthetic: "光怪陆离但极其自信的个人宇宙展示。主角怪异的抽搐动作此时带有某种浑然天成的舞蹈感。外界的攻击在他独特的逻辑场里滑开。",
            aestheticEn: "A bizarre yet extremely confident display of a personal universe. The protagonist's weird twitches now bear an uncanny natural dance-like quality. External attacks slide off within their unique logic field.",
            runtime: "提取一个私有的 `Bug` 变量，将其强行注册为不被任何 `Try/Catch` 捕获的底层特性，并以此重构主角的方法类。",
            runtimeEn: "Extracting a private `Bug` variable, forcibly registering it as a base feature uncaught by any `Try/Catch`, and refactoring the protagonist's method classes upon it."
        }
    },
    {
        id: "res_event",
        name: "对事件的忠诚", nameEn: "Fidelity to the Event",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "巴迪欧意义上的“事件（Event）”。发生了一件完全外在于常理的奇迹断裂，而主体用尽余生去忠诚并维护这个瞬间的真实性。",
        defEn: "The 'Event' in the Badiouian sense. A miraculous rupture entirely external to common sense occurred, and the subject spends the rest of their life being faithful to and maintaining the truth of this instant.",
        core: "世界嘲笑这是疯癫，但主体曾瞥见过真理的闪光。这不再是关于结果的输赢，而是关于对那个“不可能的发生”的无尽守望。 | Outcome: 真理的主体化。",
        coreEn: "The world mocks it as madness, but the subject once glimpsed the flash of truth. It is no longer about winning or losing but about the endless vigilance over that 'impossible happening'. | Outcome: Subjectivization of truth.",
        patch: {
            mechanics: "游戏主线早已结束，一切看似恢复平静。但主角每日重复进行着一个在外人看来毫无意义的仪式，以确保那份“真实”永不消散。",
            mechanicsEn: "The main game ended long ago; all seems to return to calm. But the protagonist repeats a daily ritual—seemingly meaningless to outsiders—to ensure that 'truth' never dissipates.",
            aesthetic: "极简的长镜头。岁月流逝，周围的人物都在世俗化，唯有主角的眼神如磐石般闪耀着一种近乎宗教的痴迷和清澈。",
            aestheticEn: "Minimalist long take. As years pass, surrounding characters secularize, while only the protagonist's eyes shine like bedrock with an almost religious obsession and clarity.",
            runtime: "在时间轴系统里锁定特定的某一个时间戳（Timestamp），令主体的指针永远向该变量发送无回应的致敬。",
            runtimeEn: "Locking onto a specific Timestamp within the timeline system, ensuring the subject's pointer eternally sends unrequited homage to that variable."
        }
    },
    {
        id: "res_the_act",
        name: "精神分析性行动", nameEn: "The Psychoanalytic Act",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体做出了一个纯粹的、无先例的、没有任何功利考量和安全网兜底的绝对动作。此动作直接爆破了符号界的因果链。",
        defEn: "The subject makes a pure, unprecedented, absolute act with zero utilitarian calculations or safety nets. This act directly blows up the causal chain of the Symbolic.",
        core: "齐泽克式的革命行动。不是“计算后觉得能赢才做”，而是“正因为不可能，所以必须这么做”。主体在行动中被悬空重塑。 | Outcome: 因果律的断裂。",
        coreEn: "A Zizekian revolutionary Act. Not 'doing it because calculations show a win', but 'precisely because it is impossible, it must be done'. The subject is suspended and reshaped within the act. | Outcome: Rupture of causality.",
        patch: {
            mechanics: "在毫无预警的情况下，突然抛弃所有积累的优势与计划，以一种近乎荒诞的直接方式面对庞大的反派机制，一击致命。",
            mechanicsEn: "Without any warning, abruptly abandoning all accumulated advantages and plans, confronting the massive villain mechanism in an almost absurdly direct manner, striking lethally.",
            aesthetic: "极度干脆的动作设计，没有任何前摇动画。周围的敌人（乃至整个环境）因为无法理解这一行径的逻辑而陷入彻底的呆滞僵持。",
            aestheticEn: "Extremely crisp motion design, absolutely no wind-up animation. Surrounding enemies (and the entire environment) fall into complete dumbfounded paralysis, unable to process the logic of this act.",
            runtime: "将角色的【决策权重】在这一瞬间推至无限大，越狱跳过所有系统的校验方法（Validation Method）。",
            runtimeEn: "Pushing the character's [Decision Weight] to infinity in this instant, jailbreaking to skip all systemic Validation Methods."
        }
    },
    {
        id: "res_sublimation",
        name: "物【Das Ding】的升华", nameEn: "Aesthetic Elevation of Das Ding",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "将那不可直视的、极度危险的驱力（创伤、乱伦的欲望、毁灭欲）提升到了“物（Das Ding）”的尊严位置，转化为了美的创造。",
        defEn: "Elevating that unlookable, terribly dangerous drive (trauma, incestuous desire, destructive urge) to the dignity of 'The Thing (Das Ding)', transforming it into the creation of beauty.",
        core: "《死于威尼斯》或极端的艺术狂热。不杀死恶魔，而是将恶魔用纯金与大理石雕刻。从最深的痛苦与污秽中开出不朽的崇高之花。 | Outcome: 驱力的艺术容器。",
        coreEn: "Death in Venice or extreme artistic fanaticism. Not killing the demon, but sculpting the demon with pure gold and marble. Cultivating an immortal flower of sublimity from the deepest pain and filth. | Outcome: Artistic vessel for Drive.",
        patch: {
            mechanics: "将原本会导致 Game Over 的致命深渊值，全部注入到一个名为“作品”的非战斗道具中。代价是主角肉体的快速干瘪。",
            mechanicsEn: "Injecting all lethal abyss value that would have caused Game Over into a non-combat item called 'The Work'. The cost is the rapid shriveling of the protagonist's physical body.",
            aesthetic: "病态且极致的唯美主义。绝境中诡异但令人屏息的艺术造物（一幅画、一首曲子）。周围的残酷环境都被这件造物的神圣感压制失色。",
            aestheticEn: "Morbid and ultimate aestheticism. A bizarre but breathtaking artistic creation (a painting, a melody) amid desperation. The cruel surrounding environment is eclipsed by the sacredness of this creation.",
            runtime: "强行触发引擎的【光斑溢出渲染（Bloom Overflow）】，用极度繁杂华美的粒子效果包裹那个代表伤痛的基础几何体。",
            runtimeEn: "Forcibly triggering the engine's [Bloom Overflow] rendering, wrapping the primitive geometry representing trauma in intensely complex, gorgeous particle effects."
        }
    },
    {
        id: "res_symbolic_pact",
        name: "清醒的符号承担", nameEn: "The Conscious Fictionality",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体已然看穿了所有体制理念的虚伪与空洞，但出于对具体他者的爱护，选择主动戴上那沉重的枷锁，替众人承担起大他者的虚构责任。",
        defEn: "The subject has seen through the hypocrisy and emptiness of all institutional ideals, but out of love for specific others, chooses to actively don the heavy shackles, bearing the Big Other's fictional responsibility for the multitude.",
        core: "《黑暗骑士》的蝙蝠侠离场。成熟的悲观主义。我明知真理不存在，但我愿意为了保护你们在黑夜里酣睡，而成为那个背负骂名缝补谎言的工匠。 | Outcome: 虚构神话的道成肉身。",
        coreEn: "Batman's exit in The Dark Knight. Mature pessimism. Knowing truth does not exist, I am willing to become the reviled artisan patching the lies, just to protect your slumber in the dark night. | Outcome: Incarnation of the fictional myth.",
        patch: {
            mechanics: "背下所有反派的罪行，放弃原本属于自己的洗白证据。任由民众的憎恨值拉满，从而换取城市数据结构的稳定。",
            mechanicsEn: "Taking the fall for all the villain's crimes, abandoning the evidence that would clear their name. Allowing the populace's hatred value to maximize, thereby ensuring the stability of the city's data structure.",
            aesthetic: "雨夜奔跑的孤独背影。无视背后警灯的追捕与恶言。配乐宏大但充满了压抑的男低音与极端的孤独感。",
            aestheticEn: "A solitary silhouette running in a rainy night. Ignoring the tracking sirens and verbal abuse behind. The soundtrack is epic but filled with oppressive bass and extreme loneliness.",
            runtime: "主动将自己标记为 `Enemy` 派系，同时触发事件给整个公共集群套上无法击穿的 `Invincible` 保护罩。",
            runtimeEn: "Proactively flagging oneself as the `Enemy` faction, simultaneously triggering an event that buffs the entire public cluster with an impenetrable `Invincible` shield."
        }
    },
    {
        id: "res_ex_nihilo",
        name: "无中生有的创造", nameEn: "Creation ex nihilo",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "在一切既有价值都被摧毁的焦土之上，不依赖任何过去的蓝图与法则，如同尼采的超人般，纯粹凭空设定了一套崭新的生存词汇。",
        defEn: "Upon scorched earth where all pre-existing values have been destroyed, relying on no past blueprints or laws, like Nietzsche's Übermensch, establishing a brand-new vocabulary of survival purely out of nothing.",
        core: "上帝死了之后主体的绝对责任。不依靠现成的积木，自己烧土造砖。用绝对的生命肯定，踏入未被命名的大地。 | Outcome: 原初命名的权力。",
        coreEn: "The absolute responsibility of the subject after the death of God. Not relying on ready-made blocks, but baking clay to make bricks. With absolute affirmation of life, stepping into unnamed lands. | Outcome: The power of primal naming.",
        patch: {
            mechanics: "拒绝所有现成的天赋树/派系选择。甚至游戏界面UI化作尘埃。主角在空旷的大地上用最基础的操作留下了第一行新的互动指令。",
            mechanicsEn: "Refusing all ready-made talent trees/faction choices. Even the UI dissolves to dust. The protagonist leaves the first line of new interactive commands on the immense empty wasteland using the most basic actions.",
            aesthetic: "极简的荒野视效，没有任何人造物。日出时分的广角镜头。主角的每一个脚印都伴随着浑厚的环境回声。生机在脚下萌芽。",
            aestheticEn: "Ultra-minimalist wilderness VFX, zero artificial objects. A wide-angle shot at sunrise. Every footprint of the protagonist resonates with a deep environmental echo. Vitality sprouts beneath their feet.",
            runtime: "清空全局的 `Dictionaries`，并在引擎日志中由玩家的主体操作触发 `InitRoot()`，成为一切的新源头。",
            runtimeEn: "Clearing global `Dictionaries`, and having the player's subjective action trigger `InitRoot()` in the engine log, becoming the new origin of everything."
        }
    },
    {
        id: "res_forgiveness",
        name: "仇恨链条的解脱", nameEn: "Untying the Karmic Knot",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "在握有绝对的复仇权力的那一秒，主体松开了紧握刀柄的手。并非出于懦弱，而是为了从“被施虐欲绑定”的无尽轮回中强行剪断因果。",
        defEn: "In the very second of holding absolute power for revenge, the subject loosens their grip on the blade. Not out of cowardice, but to forcibly snip causality from the endless cycle 'bound by sadism'.",
        core: "真正的宽恕是对大他者剧本的最强蔑视。你越是折磨对方，你就越受到对方的奴役。解脱就是宣告：你不配占用我余生的一丝算力。 | Outcome: 剥夺反派的绝对反击。",
        coreEn: "True forgiveness is the strongest contempt toward the Big Other's script. The more you torture them, the more you are enslaved by them. Release is declaring: you are unworthy of even a single flop of my remaining computing power. | Outcome: Absolute counter-deprivation of the villain.",
        patch: {
            mechanics: "在狂按攻击键即可处决仇人的QTE提示中，什么都不按。时间停滞结束后，主角扔掉武器，越过跪地的反派离开。",
            mechanicsEn: "During the QTE prompt where mashing attack executes the sworn enemy, pressing nothing. After the time-freeze ends, the protagonist drops the weapon, stepping past the kneeling villain and leaving.",
            aesthetic: "反派极度错愕且由于失去存在意义而崩溃大哭。主角的背影则被温暖的侧逆光勾勒得轮廓分明。宽恕如同利刃般刺耳。",
            aestheticEn: "The villain reacts with profound astonishment and breaks into weeping collapse due to the loss of existential meaning. The protagonist's silhouette from behind is starkly outlined by warm rim light. Forgiveness is as piercing as a blade.",
            runtime: "将目标身上的【仇恨锚点（Aggro Anchor）】强制 `Dispose`，导致与之相关的复仇算法因空指针而永久失效。",
            runtimeEn: "Forcibly calling `Dispose` on the target's [Aggro Anchor], causing related vengeance algorithms to permanently fail due to null pointers."
        }
    },
    {
        id: "res_connection",
        name: "跨维度的拓扑连接", nameEn: "Topological Bridge",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "打破了常规的时间与物理屏障，通过一种极度纯粹的情感（爱或意志），在原本不可通约的不同维度、黑洞间建立起了交流桥梁。",
        defEn: "Breaking conventional temporal and physical barriers; through extremely pure emotion (love or will), establishing a bridge of communication between originally incommensurable dimensions or black holes.",
        core: "《星际穿越》的高维书房。物理法则被人类的终极爱欲（Eros）暂时压制弯曲。人类的脆弱成为突破冰冷宇宙法则的唯一杠杆。 | Outcome: 物理主义的溃败。",
        coreEn: "The high-dimensional library in Interstellar. Physical laws are temporarily suppressed and bent by humanity's ultimate Eros. Human fragility becomes the sole lever to breach the universe's frigid laws. | Outcome: Rout of physicalism.",
        patch: {
            mechanics: "主角在必死的绝境外太空或高维空隙中，通过极其微弱的交互（拨动指针、敲击墙壁）解开了遥远过去某人的死局。",
            mechanicsEn: "In fatal deep space or high-dimensional gaps, the protagonist solves someone's dead end in the distant past through immensely faint interactions (ticking a watch hand, tapping a wall).",
            aesthetic: "极致宏大的深空黑暗与细微如发丝的家庭物件特写并置。汉斯季默式的管风琴将视听体验推向宗教级的震颤。",
            aestheticEn: "Juxtaposition of impossibly massive deep space darkness alongside hair-thin close-ups of domestic objects. Hans Zimmer-esque pipe organs push the audio-visual experience to an almost religious tremor.",
            runtime: "在底层引擎中调用了非法跨表查询（Cross-Dimensional Query），用极其荒谬的时空穿透指针链接了两个场景。",
            runtimeEn: "Calling an illegal Cross-Dimensional Query in the base engine, linking two scenes with an utterly absurd spatio-temporal penetrating pointer."
        }
    },
    {
        id: "res_legend",
        name: "神话级能指", nameEn: "The Mythic Signifier",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体的肉身彻底破碎，但他的行为与名字摆脱了血肉的局限，升维成一串纯粹的能指，被刻在整个族群潜意识的石板上。",
        defEn: "The subject's physical body is entirely shattered, but their actions and name transcend the confines of flesh, ascending dimensions into a string of pure signifiers, carved into the subconscious stone slab of the whole species.",
        core: "《V字仇杀队》。理念是刀枪不入的。当大他者杀死了那具脆弱的躯壳，它其实犯了最愚蠢的错误：它帮英雄完成了不朽的神话化过程。 | Outcome: 符号的反噬病毒。",
        coreEn: "V for Vendetta. Ideas are bulletproof. When the Big Other kills the fragile shell, it actually commits the stupidest error: it helps finalize the hero's immortal mythologization. | Outcome: The Symbolic's backlash virus.",
        patch: {
            mechanics: "主角战死，但下一秒，成千上万原本平庸的NPC戴上了和主角相同的面具，拿起了同样的武器，数据如病毒一样暴增蔓延。",
            mechanicsEn: "The protagonist dies in battle, but the next second, thousands of originally mediocre NPCs don the same mask as the protagonist, picking up the same weapons. Data multiplies and spreads like a virus.",
            aesthetic: "极其惨烈的阵亡特写，无缝切换为城市各个角落燎原般的星星之火。面具的符码如同海啸般淹没了统治者的视网膜。",
            aestheticEn: "Extremely gruesome close-up of dying in action, seamlessly transitioning to a prairie fire of sparks across every corner of the city. The mask's code floods the ruler's retina like a tsunami.",
            runtime: "将主角的【方法模板】设为 `Static`，并强行向场景内的所有普通节点 `Broadcast`。引发系统内存对该理念的极度过载充血。",
            runtimeEn: "Making the protagonist's [Method Template] `Static`, and forcibly calling `Broadcast` to all normal nodes in the scene. Inducing extreme memory congestion overhead for this ideal."
        }
    },
    {
        id: "res_spiritual",
        name: "超越想象界的飞升", nameEn: "Ascension beyond the Imaginary",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体剥离了由于想象界（镜子阶段）产生的那个虚荣的“自我（Ego）”，意识消散于浩瀚的实在网格中，达成了一种去人格化的绝对清澈。",
        defEn: "The subject sheds the vain 'Ego' produced by the Imaginary (mirror stage); consciousness dissipates into the vast grid of the Real, achieving a depersonalized absolute clarity.",
        core: "攻壳机动队的草薙素子或者露西。不再留恋人类那具带有限制与成见的小小的躯壳模型，网络/宇宙有多辽阔，我的外延就有多广。 | Outcome: 容器的最终溶解。",
        coreEn: "Motoko Kusanagi in Ghost in the Shell or Lucy. No longer clinging to the small human shell model with its limits and prejudices; however vast the network/universe, my extension is that broad. | Outcome: Final dissolution of the vessel.",
        patch: {
            mechanics: "放弃最后保全面貌的挣扎，主动跳入数字海洋或能量风暴，主角的血条与模型彻底蒸发，但却能以全知视角操控场景。",
            mechanicsEn: "Abandoning the last struggle to preserve appearance, actively jumping into the digital oceanic or energy storm. The protagonist's health bar and model totally evaporate, yet they can control the scene from an omniscient view.",
            aesthetic: "物质形态像风化沙子一样剥落。镜头从极微观拉到极宏观（细胞直到星爆）。充满几何美感的赛博线条，冷酷但浩瀚的大神定力。",
            aestheticEn: "Material form flaking away like weathered sand. Camera pulls from ultra-microscopic to ultra-macroscopic (cells up to a starburst). Cyber lines full of geometric aesthetics, cold yet showing vast divine composure.",
            runtime: "摧毁 `PlayerController` 的碰撞体积与 Mesh，但将其 `InputReceiver` 映射到了环境控制对象树的最顶层节点。",
            runtimeEn: "Destroying the `PlayerController`'s collision volume and Mesh, yet mapping its `InputReceiver` to the topmost node of the environmental control object tree."
        }
    },
    {
        id: "res_masterpiece",
        name: "驱力的物化结晶", nameEn: "Crystallization of the Drive",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "在极端凄惨绝望或燃烧寿命的高压下，毫无保留地排放了一生浓烈的爱欲与死欲，凝结成一件震古烁今的宏大造物。",
        defEn: "Under the high pressure of extreme miserly despair or burning one's lifespan, unreservedly venting a lifetime of intense Eros and Thanatos, congealing into a grandiose creation that astounds history.",
        core: "梵高的星夜。主体已经彻底燃烧成了焦炭，但那幅燃烧着疯狂与真理的画作，将永远灼伤大他者那平庸无聊的视网膜。 | Outcome: 才华的绝对变现。",
        coreEn: "Van Gogh's Starry Night. The subject is completely burnt to charcoal, but that painting ablaze with madness and truth will forever scorch the mediocre, boring retinas of the Big Other. | Outcome: Absolute monetization of talent.",
        patch: {
            mechanics: "牺牲角色的生命上限、理智值直至归零。在倒地的一刻，一件发着异光的传奇物品或文献自动填入历史陈列馆的中心。",
            mechanicsEn: "Sacrificing the character's max HP and sanity until zeroed. At the moment of collapsing, a legendary artifact or document glowing weirdly automatically slots into the center of the historical gallery.",
            aesthetic: "瘦骨嶙峋、因疯狂而丑陋不堪的面容，与那件美到令人战栗的作品形成极其震撼的对比。背景音乐犹如唱诗班的泣血之歌。",
            aestheticEn: "An emaciated, monstrously ugly face from madness, contrasting shatteringly with the creation that is so beautiful it forces a shudder. Background music resembles a choir crying blood.",
            runtime: "检测到角色对象的 `garbage_collect` 销毁事件时，伴生触发生成一个具有无限时效的 `GrandArtifact` 节点。",
            runtimeEn: "Detecting the character object's `garbage_collect` destruction event, symbiotically triggering the generation of a `GrandArtifact` node with infinite lifespan."
        }
    },
    {
        id: "res_seed",
        name: "弥赛亚式的播种", nameEn: "The Messianic Promise",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "由于条件的物理限制或寿命耗尽，主体明知自己绝对等不到花开的那天，却怀着对未来他人的一种不含杂质的期许，埋下了至关重要的火种。",
        defEn: "Due to physical limits or exhausted lifespan, the subject knows with absolute certainty they will never see the day the flower blooms, yet harboring an unadulterated expectation for future others, buries the crucial fire-seed.",
        core: "极其纯粹的利他主义。不在于“我”能否得救，而在于从结构内挖下一块石头充当地基，好让后来者能在洪水中有一处落脚。 | Outcome: 结构裂隙的延时炸弹。",
        coreEn: "Exceedingly pure altruism. Not about whether 'I' can be saved, but gouging a stone from the structure to act as a foundation, so latecomers have a foothold in the flood. | Outcome: Time bomb in the structural fissure.",
        patch: {
            mechanics: "在毒气蔓延或倒计时为零的密室里，主角用身体挡住闸门，只为把一枚小小的芯片抛给即将脱逃的后来者。",
            mechanicsEn: "In a sealed room with spreading poison gas or a zeroing countdown, the protagonist blocks the blast door with their body, just to toss a tiny chip to the escaping latecomer.",
            aesthetic: "密闭的黑暗空间。主角微笑着闭上眼，画面渐渐淡出。而下一组镜头则是几年后，那枚芯片在一个明亮的实验室里被读取引发了欢呼。",
            aestheticEn: "Confined dark space. Protagonist smiles and closes eyes, screen slowly fades out. The next montage cuts to years later: that chip is read in a bright lab, igniting cheers.",
            runtime: "将携带着【解密秘钥】的微型对象隐秘地 `Push` 进入延迟渲染的消息队列，跨度为几代主程序的生命周期。",
            runtimeEn: "Covertly executing a `Push` of a micro-object carrying the [Decryption Key] into the deferred rendering message queue, spanning the lifecycle of several master program generations."
        }
    },
    {
        id: "res_freedom",
        name: "激进的绝对自由", nameEn: "Radical Freedom",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体主动斩断了所有的牵挂、羁绊与社会联系，连衣服甚至名字都一同当成垃圾抛弃，进入了一种如同野兽般但完全自洽的飞翔状态。",
        defEn: "The subject actively severs all attachments, bonds, and social ties, discarding even clothes and names like trash, entering an autonomous flying state akin to a beast yet entirely self-consistent.",
        core: "《勇敢的心》或荒野生存。自由的代价是极致的孤独与贫困，但那挣脱大他者锁链的狂飙时刻，其动能足以让整个符号界感到恐怖。 | Outcome: 属性面板的物理砸毁。",
        coreEn: "Braveheart or Into the Wild. The cost of freedom is extreme loneliness and poverty, but the kinetic roar of breaking the Big Other's chains carries enough momentum to terrify the entire Symbolic order. | Outcome: Physical smashing of the attributes panel.",
        patch: {
            mechanics: "丢弃背包里几乎全部的史诗级装备、金钱以及称号。仅仅赤手空拳走向地图以外的荒蛮之地，不再回头。",
            mechanicsEn: "Discarding practically all epic-tier gear, money, and titles from the inventory. Walking out barehanded into the savage lands beyond the map, never looking back.",
            aesthetic: "风中凌乱的长发、粗糙但野性迸发的肌肉特写。大他者的通缉令在脚底被踩过。极速奔跑的推轨镜头，风声呼啸盖过一切。",
            aestheticEn: "Messy long hair in the wind, extreme close-up of rough but savagely surging muscles. The Big Other's wanted poster is trampled underfoot. High-speed tracking shot running, howling wind drowning out everything.",
            runtime: "注销主体的【Inventory】模块与【Social/Faction】联系。将该对象的路径计算法改为完全随机的不可控随机游走。",
            runtimeEn: "Deregistering the subject's [Inventory] module and [Social/Faction] ties. Changing the object's pathfinding algorithm to a totally random, uncontrollable random walk."
        }
    },
    {
        id: "res_miracle_love",
        name: "爱欲的奇迹悖论", nameEn: "Paradox of Eros",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "在冷冰冰的概率法则推算出“百分之百不可能”失败的瞬间，因为爱产生的非理性能量，发生了一次违背物理常识的小概率宕机穿透。",
        defEn: "At the moment when cold probability laws calculate a '100% impossible' failure, an irrational energy generated by love prompts a low-probability crash penetration contrary to physical common sense.",
        core: "由于爱欲（Eros）极其反逻辑，它本质是实在界爆发出的超新星。它证明了宇宙的底层源代码中存在一行无法被大他者解析的后门。 | Outcome: 逻辑树的异常返回。",
        coreEn: "Because Eros is extremely anti-logic, it is fundamentally a supernova bursting from the Real. It proves there is a backdoor line in the universe's base source code that the Big Other cannot parse. | Outcome: Exceptional return of the logic tree.",
        patch: {
            mechanics: "在主角承受致命秒杀判定时，平时极其柔弱的羁绊角色突然瞬移或违背了状态机死锁，代为承担了这不可思议的一击。",
            mechanicsEn: "When the protagonist suffers a fatal 1-hit-KO verdict, a normally exceedingly weak bonded character suddenly teleports or defies the state machine deadlock to intercept this inconceivable strike.",
            aesthetic: "子弹时间的极致慢放。数学方程式和准星的冷峻UI在瞬间碎裂，取而代之的是纯粹的炽热光芒与慢动作的拥抱。",
            aestheticEn: "Extreme slow-motion bullet time. The cold UI of math equations and crosshairs shatter instantly, replaced by a pure fervent brilliance and a slow-motion embrace.",
            runtime: "系统底层算法在执行 `Math.random()` 时遭遇了由【爱意值（Affection）】引起的强制除零错误（Divide by Zero），导致保护罩奇迹般触发。",
            runtimeEn: "The base system algorithm running `Math.random()` encounters a forced Divide by Zero error induced by [Affection], causing a miraculous shield trigger."
        }
    },
    {
        id: "res_understanding",
        name: "辩证的超越", nameEn: "Dialectical Synthesis",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体并未单纯消灭了反派，而是在厮杀的最顶点，突然完全理解了反派的创伤。用一种视角的俯瞰，将正邪统一进了更高的认知平面。",
        defEn: "The subject does not merely annihilate the villain, but at the very apex of slaughter, suddenly completely understands the villain's trauma. Employing a bird's-eye perspective, unifying good and evil onto a higher cognitive plane.",
        core: "黑格尔式的“扬弃（Aufheben）”。不再是对立面上互相泼洒死欲，而是我看到了你心中的地狱，恰如我心中的深渊。大悲悯。 | Outcome: 二元对立的溶解。",
        coreEn: "Hegelian 'Aufheben'. No longer splashing death-drive on opposite sides, but I see the hell in your heart exactly like the abyss in mine. Grand compassion. | Outcome: Dissolution of binary opposition.",
        patch: {
            mechanics: "最后一刀挥下前，系统强制进入长对话选择。主角选择了最体现出跨越立场理解的选项，反派手中的武器因此滑落。",
            mechanicsEn: "Before the final slash comes down, the system forces an extended dialogue selection. The protagonist picks the option embodying cross-stance understanding, causing the weapon to slip from the villain's hand.",
            aesthetic: "暴风雪或火墙停止。极度混乱的交响乐退去，唯有一声平稳的单簧管。两位仇敌仿佛在大师级的棋盘边相对惨笑。",
            aestheticEn: "Blizzards or walls of fire cease. Intensely chaotic symphony recedes, leaving a steady clarinet. The two mortal enemies smile miserably at each other across a master-class chessboard.",
            runtime: "在状态机内强行将反派的【绝对仇恨标记（Absolute Hate Tag）】抹除，触发两个独立阵营（Faction）的罕见融合处理。",
            runtimeEn: "Forcibly erasing the villain's [Absolute Hate Tag] inside the state machine, triggering a rare fusion processing of two independent Factions."
        }
    },
    {
        id: "res_traverse_fantasy",
        name: "穿越幻象", nameEn: "Traversing the Fantasy",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "不仅粉碎了外在的大他者，主体更是将用来保护自己的最后一点防御性幻象碾碎，以近乎恐怖的清醒直面并承担生命那种虚无的本质。",
        defEn: "Not only smashing the external Big Other, the subject grinds down the very last defensive illusion used to protect themselves, facing and shouldering the void essence of life with almost terrifying lucidity.",
        core: "齐泽克常提的精神分析最高成就：学会如何在没有幻想滤镜的保护下，凝视实在界而不发疯。 | Outcome: 绝对清醒者的诞生。",
        coreEn: "The highest psychoanalytic achievement Zizek frequently mentions: learning how to gaze into the Real without the protection of fantasy filters and not go insane. | Outcome: Birth of the absolutely lucid one.",
        patch: {
            mechanics: "游戏关闭了所有的屏幕滤镜和引导提示，主角直愣愣地站在极其丑陋、穿模满天的原始渲染管线场景内，却没有倒下。",
            mechanicsEn: "The game kills all screen filters and guide prompts; the protagonist stands stiffly in an incredibly ugly, clipping-filled raw render pipeline scene, yet does not fall.",
            aesthetic: "撕掉画皮。音乐彻底关闭，只保留枯燥的机器风扇底噪或风声。角色那原本由于剧情高光而显得俊美的脸庞变得沧桑且极度写实。",
            aestheticEn: "Tearing off the painted skin. Music is completely cut, leaving only the dull white noise of machine fans or wind. the character's face, originally handsome, becomes weather-beaten and hyper-realistic.",
            runtime: "系统的后处理（Post-Processing）全面禁用，卸载所有美化与代入感Shader。将玩家强行推回操作终端的第四面墙内。",
            runtimeEn: "System Post-Processing fully disabled, unloading all beautification and immersion Shaders. Forcibly pushing the player back into the fourth wall of the operation terminal."
        }
    },
    {
        id: "res_post_human",
        name: "人类学断裂", nameEn: "Anthropological Rupture",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "在承受了无法计算的信息量或进化压力后，主体在刹那间超越了碳基生物的悲惨框架，向后人类甚至神明般的新物种跃迁。",
        defEn: "After bearing incalculable information load or evolutionary pressure, the subject transcends the miserable framework of carbon-based biology in an instant, taking a quantum leap toward a post-human or god-like new species.",
        core: "《2001太空漫游》的星童。原有的恐惧与迷惘是因为身为人类太弱小。既然局内无法解开死结，那便扯碎棋盘向下一个维度飞升。 | Outcome: 本体架构的重写。",
        coreEn: "The Star Child in 2001: A Space Odyssey. The original fear and bewilderment were because being human is too weak. Since the deadlock can't be solved within, shred the board and ascend to the next dimension. | Outcome: Rewrite of the ontological architecture.",
        patch: {
            mechanics: "主角在超立方体或光柱中，旧肉体化为齑粉，重组为一个散发着高等几何光辉的能量图腾或幼体形态。原有的血条和魔法条碎裂消失。",
            mechanicsEn: "Within a tesseract or light pillar, the protagonist's old flesh turns to powder, reconstituting into an energy totem or larval form radiating advanced geometric brilliance. The original HP and MP bars shatter and vanish.",
            aesthetic: "极度克制然而恢弘的视效。脱离重力的漂浮感。主角的双眼不再聚焦于某个具体物体，而是仿佛洞穿了时间本身。纯电子音的鸣响。",
            aestheticEn: "Highly restrained yet grandiose VFX. The floating sensation of zero gravity. The protagonist's eyes no longer focus on a specific object but seem to pierce through time itself. Ringing of pure electronic tones.",
            runtime: "销毁旧有类的实例，用极小量代码生成一个几乎占用内存极少的 `PostHuman` 单例对象，并赋予其超越主存的读写权限。",
            runtimeEn: "Destroying old class instances, generating an almost zero-memory footprint `PostHuman` singleton object with minimal code, granting it read/write permissions transcending main memory."
        }
    },
    {
        id: "res_cosmic_resonance",
        name: "绝对共鸣态", nameEn: "The Universal Harmonic",
        group: "C. 圣状", groupEn: "Sinthome",
        def: "主体的微小执念在极特殊的机缘下，与整个宇宙或生态系统的某个底层震动频率发生了绝对同步，达到了真正的“梵我合一”。",
        defEn: "Under exceedingly unique serendipity, the subject's minuscule obsession achieves absolute synchronization with some base oscillatory frequency of the entire universe or ecosystem, achieving true 'Brahma-Atman unity'.",
        core: "极其罕见的道家式大圆满。主体并未消除自身，而是把自己无限放大至整个背景声场中，用微沙般的一生弹响了宏大和弦。 | Outcome: 微观与宏观的坍缩。",
        coreEn: "An immensely rare Daoist great perfection. The subject does not eliminate themselves but infinitely amplifies themselves into the entire background acoustic field, plucking a massive chord with a sand-like lifetime. | Outcome: Collapse of the micro and macro.",
        patch: {
            mechanics: "主角敲出一记微小的和弦或在雪地里闭上眼睛。整个世界的环境变化（风声、陨石划过、敌人倒下）突然与他的动作节奏产生共振反馈。",
            mechanicsEn: "The protagonist strikes a tiny chord or closes eyes in the snow. All environmental changes in the world (wind howling, meteors crossing, enemies falling) suddenly resonate with their action rhythm.",
            aesthetic: "视效色彩上的水乳交融。一种巨大的圆满与释怀感。光晕开始同步呼吸。音乐在此刻达到了极致的和谐壮丽，再无不协和音。",
            aestheticEn: "A perfect blending of VFX colors. A massive sense of completion and relief. The light halos begin a synchronized breathing. Music reaches ultimate harmonious magnificence, stripped of all dissonance.",
            runtime: "将场景内千万个独立的粒子特效发射器的 `seed` 强制与主角最后残留的一个 `HeartbeatValue` 绑定同频同步。",
            runtimeEn: "Forcibly binding the `seed` of tens of millions of independent particle emitters in the scene to be synchronously co-frequential with the protagonist's final remaining `HeartbeatValue`."
        }
    }
];
