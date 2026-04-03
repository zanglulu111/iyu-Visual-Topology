import { LibraryItemDef } from '../../../types';

export const OPPRESSION_GROUP_F: LibraryItemDef[] = [
    {
        id: "m4_absent_dead_radio",
        name: "无回音的电台", nameEn: "The Dead Radio",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "你拿着能够发出绝对完美求救信号的设备，但彼端传来的永远只有宇宙背景的白噪音。",
        defEn: "You hold a device capable of broadcasting the perfect distress signal, but the only response from the other end is the eternal white noise of the cosmic background.",
        core: "意义的未被认领。痛苦最大的悲剧不是流血，而是没人听见你的惨叫。 | 形式：坏掉的对讲机、无论怎么拨打都是忙音的救援电话。",
        coreEn: "Unclaimed meaning. The greatest tragedy of pain isn't bleeding, but that no one hears your screams. | Forms: Broken walkie-talkies, rescue hotlines that only ever return a busy signal.",
        logic: "符号学接收端的粉碎。主体发出的能指（SOS）被发射进了一个没有接收者的大写虚空中。大他者的缺席让主角的求生意志被剥夺了任何‘表演’和‘交换’的可能，痛苦本身被降格为了纯粹的物理耗散。",
        logicEn: "Shattering of the semiotic receiver. The signifier (SOS) emitted by the subject is launched into a capitalized void without a receiver. The Big Other's absence strips the protagonist's survival will of any possibility of 'performance' or 'exchange,' degrading the pain itself into pure physical dissipation.",
        patch: {
            mechanics: "基础接收端缺失协议 + [SOS = 发射至虚空; 回应 = 强制白噪音; 表演性痛苦 = 被贬为物理耗散]",
            mechanicsEn: "Base_RECEIVER_ABSENCE + [SOS = Launched_Into_Void; Response = Forced_White_Noise; Performative_Pain = Degraded_to_Physical_Dissipation]",
            aesthetic: "聚焦：充满雪花的屏幕/手中紧握的无声对讲机 + 寂静的宇宙冰原。文本：剥夺了任何戏剧性、只有死寂与杂音的空旷感。",
            aestheticEn: "Focus: Static-Filled_Screens/Silenced_Walkie-Talkies_Clutched_in_Hand + Silent_Cosmic_Icecaps. Text: Empty_Claustrophobia_Stripped_of_Dramatics_Leaving_Only_Dead_Silence_and_Static.",
            runtime: "IF (主体疯狂发送求救信号) THEN (强制：环境只以更庞大的静默或风声进行吞噬)。严禁在任何频道出现大他者(救援者)的人类声音。",
            runtimeEn: "IF (Subject_Frantically_Broadcasts_SOS) THEN (Force: Environment_Swallows_It_With_Vaster_Silence_or_Wind). FORBID_Human_Voices_of_the_Big_Other(Rescuers)_Appearing_on_Any_Channel."
        }
    },
    {
        id: "m4_absent_broken_compass",
        name: "失效的信仰罗盘", nameEn: "The Broken Compass",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "曾被视为绝对真理的指引物，在实在界的极端荒原上面临彻底的瘫痪。",
        defEn: "A guide once revered as absolute truth faces total paralysis on the extreme wasteland of the Real.",
        core: "文明坐标系的蒸发。知识和信仰在这里失效，你连‘什么叫走错了’都无法定义。 | 形式：在磁场异常区指针乱转的指南针、指向死路的求生手册。",
        coreEn: "Evaporation of civilization's coordinate system. Knowledge and faith fail here; you cannot even define what it means to 'take a wrong turn.' | Forms: Compasses spinning wildly in magnetic anomalies, survival manuals leading to dead ends.",
        logic: "大他者知识权威的破产。主角以为自己身处于一个被大他者测量和标注过的世界，但极端环境撕碎了这个幻觉。失去符号罗盘后，每走一步都不再是迈向希望，而是在盲目地消耗熵。",
        logicEn: "Bankruptcy of the Big Other's epistemic authority. The protagonist believed they were in a world measured and mapped by the Big Other, but extreme environments shred this illusion. Without the symbolic compass, every step isn't toward hope, but blindly consuming entropy.",
        patch: {
            mechanics: "基础坐标系蒸发协议 + [系统知识 = 变为废纸; 罗盘指引 = 陷入混沌旋转; 对错判定 = 完全剥夺]",
            mechanicsEn: "Base_COORDINATE_EVAPORATION + [System_Knowledge = Reduced_to_Wastepaper; Compass_Guide = Falls_into_Chaotic_Spin; Right-Wrong_Judgment = Wholly_Stripped]",
            aesthetic: "聚焦：疯狂旋转的物理指针 + 周围一望无际无参照物的荒漠/白雪。文本：失去一切锚点、极度晕眩的本体论迷航。",
            aestheticEn: "Focus: Frantically_Spinning_Physical_Needles + Endless_Reference-less_Deserts/Snow_Around. Text: Ontological_Lost_Navigation_Stripped_of_All_Anchors_Inducing_Extreme_Vertigo.",
            runtime: "IF (主体依赖过往的知识导航) THEN (强制：引导其走向完全偏离常理的死胡同)。严禁在这片区域存在任何清晰的地标。",
            runtimeEn: "IF (Subject_Relies_on_Past_Knowledge_to_Navigate) THEN (Force: Guides_Them_Into_Dead_Ends_Completely_Defying_Logic). FORBID_Any_Clear_Landmarks_Existing_in_This_Zone."
        }
    },
    {
        id: "m4_absent_fading_photo",
        name: "褪色的遗物", nameEn: "The Fading Fetish",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "唯一能维系你人类身份的信物，正在自然属性的侵蚀下慢慢变回一件普通的死物。",
        defEn: "The sole token anchoring your human identity is slowly regressing into an ordinary, dead object under the erosion of nature.",
        core: "符号感退化为物性。你眼睁睁看着自己‘活下去的理由’在风雨中化为泥浆。 | 形式：被水泡烂的妻女照片、由于生锈而卡死的纪念怀表。",
        coreEn: "Regression of symbolism into materiality. Watching your 'reason to live' turn to mud in the wind and rain. | Forms: Water-rotted photos of family, memorial watches seized up by rust.",
        logic: "神圣客体（Objet a）的实在化（Real-ization）。大他者的存在依赖于这些符号锚点（信物）。当荒野的严酷剥去了物品上的‘意义’，将其还原为纯粹的纸和金属时，主体用来对抗虚无的象征界堤坝便彻底决堤了。",
        logicEn: "Real-ization of the sacred object (Objet a). The Big Other relies on these symbolic anchors (tokens). When the harsh wilderness strips away the 'meaning' of an item, reducing it to mere paper and metal, the subject's Symbolic levee against nil absolutely breaks.",
        patch: {
            mechanics: "基础对象a实在化协议 + [神圣信物 = 降维还原为空白物质; 意义附着 = 被自然侵蚀; 情感堤坝 = 决堤]",
            mechanicsEn: "Base_REAL-IZATION_OF_OBJET_A + [Sacred_Token = Demoted_to_Blank_Matter; Meaning_Attachment = Eroded_by_Nature; Emotional_Levee = Bursts]",
            aesthetic: "聚焦：被雨水泡烂的相纸/生锈的铭牌 + 模糊不清的面孔。文本：带着一种缓慢流失、无力挽回的哀悼感与物性解体。",
            aestheticEn: "Focus: Rain-Rotted_Photo_Paper/Rusted_Nameplates + Blurred_Unrecognizable_Faces. Text: Mourning_and_Material_Disintegration_Carrying_a_Slow_Irrecoverable_Loss.",
            runtime: "IF (主体试图保护信物免受侵蚀) THEN (强制：自然规律以最无情的物理手段加速其腐坏)。严禁这些物品发生奇迹般的不朽或闪现神迹。",
            runtimeEn: "IF (Subject_Attempts_to_Shield_Token_from_Erosion) THEN (Force: Natural_Laws_Accelerate_its_Decay_Via_Most_Ruthless_Physical_Means). FORBID_These_Items_Achieving_Miraculous_Immortality_or_Flashing_Divine_Signs."
        }
    },
    {
        id: "m4_absent_empty_throne",
        name: "空置的神座", nameEn: "The Empty Throne",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "你历经血战终于杀入统治机构的最高核心想讨要说法，却发现那里从头到尾都空无一人。",
        defEn: "You endure bloody battles to breach the ruling institution's supreme core to demand answers, only to find it has been entirely empty all along.",
        core: "无主语的暴力。没有反派在针对你，这台巨型碎肉机一直在拔掉插头的情况下盲目空转。 | 形式：发现大BOSS其实几百年前就死去的废墟、一切指令都由坏死的自动录音机发出。",
        coreEn: "Subjectless violence. No villain is targeting you; this giant meat grinder has been blindly idling while unplugged. | Forms: Ruins revealing the Big Boss died centuries ago, all commands issued by malfunctioning answering machines.",
        logic: "大他者非存在（$A is barred$）的极致物理化。主体最深层的期待是：尽管我在受难，但至少有一个暴君在操控一切（意味着我的受难有意义）。当王座是空的时候，所有的苦难都失去了被解释的基座，转化为彻底的荒诞。",
        logicEn: "Extreme physicalization of the barred Big Other ($A is barred$). The subject's deepest hope is: though I suffer, at least a tyrant is controlling this (meaning my suffering has sense). When the throne is empty, all suffering loses its explanatory pedestal, transforming into pure absurdity.",
        patch: {
            mechanics: "基础无主语暴力协议 + [核心王座 = 强制为空/骷髅; 系统运转 = 瞎眼空转程序; 反抗对象 = 降维入无]",
            mechanicsEn: "Base_SUBJECTLESS_VIOLENCE + [Core_Throne = Forced_Empty/Skeletal; System_Operation = Blindly_Idling_Program; Resistance_Target = Degraded_to_Nothing]",
            aesthetic: "聚焦：布满灰尘的宏大王座 + 早已干尸化的暴君遗骸或无人的AI控制台。文本：极度的荒诞感与一拳打在空气上的失重感。",
            aestheticEn: "Focus: Dust-Covered_Grand_Throne + Long-Mummified_Tyrant_Remains_or_Unmanned_AI_Consoles. Text: Extreme_Absurdity_and_the_Weightlessness_of_Punching_Air.",
            runtime: "IF (主体愤怒地要求解释) THEN (强制：环境只回荡着早已录好的自动循环播报语音)。严禁暴君以幽灵或全息影像的方式进行意志对决。",
            runtimeEn: "IF (Subject_Angrily_Demands_Answers) THEN (Force: Environment_Merely_Echoes_Pre-Recorded_Auto-Looping_Broadcasts). FORBID_The_Tyrant_Engaging_in_Willpower_Duels_Via_Ghosts_or_Holograms."
        }
    },
    {
        id: "m4_absent_hallucinated_warden",
        name: "幻听的监工", nameEn: "The Hallucinated Warden",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "当外部一切皆无时，为了防止自己发疯，逼迫大脑向内投射生成了一个极端严厉的声音来责骂自己。",
        defEn: "When externally there is nothing, to prevent insanity, the brain is forced to inwardly project an extremely harsh voice to scold oneself.",
        core: "精神分裂式的自我维稳。为了不跌入动物性的深渊，主体宁可创造一个不存在的施虐者。 | 形式：在荒岛上指责主角没用的排球、永远在耳边怒吼的亡父亡魂。",
        coreEn: "Schizophrenic self-maintenance. To not fall into the animalistic abyss, the subject prefers creating a non-existent sadist. | Forms: A volleyball on a deserted island criticizing the protagonist's uselessness, the endlessly roaring ghost of a dead father.",
        logic: "大他者的内向再造（Internalized Superego）。因为外部缺乏阻断（M4），主体的精神拓扑即将解体（狂躁），所以防御机制（防御M2的恐惧）制造了一个虚幻的M4。荒谬的是，这个虚构的大他者给主角带来的精神肉体折磨，远超过风雪本身。",
        logicEn: "Internalized Superego recreation of the Big Other. Because the exterior lacks blockage (M4), the subject's psychic topology is near disintegration (mania); thus, the defense mechanism (fending off M2) constructs an illusory M4. Absurdly, this fictional Big Other inflicts mental/physical torture far surpassing the blizzard itself.",
        patch: {
            mechanics: "基础超我内爆协议 + [外部剥夺者 = 缺席; 精神拓扑 = 濒临解体; 幻听指令 = 残酷的施虐鞭笞]",
            mechanicsEn: "Base_SUPEREGO_IMPLOSION + [External_Depriver = Absent; Psychic_Topology = Nearing_Disintegration; Auditory_Hallucination = Cruel_Sadistic_Lashes]",
            aesthetic: "聚焦：四下无人的废墟 + 脑海中犹如炸裂般的严厉斥责声。文本：极其精神分裂、自我折磨的内耗与压迫。",
            aestheticEn: "Focus: Utterly_Empty_Ruins + Explosively_Harsh_Reprimands_Ringing_in_the_Mind. Text: Extremely_Schizophrenic_Self-Torturing_Internal_Friction_and_Oppression.",
            runtime: "IF (主体试图抗辩或者自我安慰) THEN (强制：大脑内部的声音变得更加恶毒和具有统治力)。严禁外部环境跳出来打破主角的唯我折磨。",
            runtimeEn: "IF (Subject_Attempts_Arguing_Back_or_Self-Comfort) THEN (Force: The_Voice_Inside_Becomes_Even_More_Vicious_and_Dominant). FORBID_External_Environment_Stepping_In_to_Break_the_Protagonist's_Solipsistic_Torture."
        }
    },
    {
        id: "m4_absent_abandoned_outpost",
        name: "废弃的庇护所", nameEn: "The Abandoned Outpost",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "支撑主角走过九死一生的地图终点，原来是一个几十年前就被遗弃的废墟。",
        defEn: "The map's terminal point that kept the protagonist going through hell turns out to be a ruin abandoned decades ago.",
        core: "承诺的物理性落空。希望的灯塔走进一看，是一座挂着干尸的枯井。 | 形式：到达时发现早无活人的堡垒、只剩下断壁残垣的“传说之城”。",
        coreEn: "Physical failure of a promise. Approaching the lighthouse of hope, finding only a dry well holding mummies. | Forms: Fortresses devoid of survivors upon arrival, 'legendary cities' reduced to shattered walls.",
        logic: "延迟满足逻辑的崩塌。大他者（社会秩序）最擅长的是颁发期票：“忍受现在的痛苦，未来会补偿你”。当庇护所是废墟时，大他者的庞氏骗局彻底破产。这意味着主角之前支付的所有血肉成本在瞬间清零。",
        logicEn: "Collapse of delayed gratification logic. The Big Other (social order) excels at issuing promissory notes: 'endure pain now, be compensated in the future.' When the outpost is a ruin, the Big Other's Ponzi scheme goes bankrupt. All flesh and blood previously paid by the protagonist clears to zero instantly.",
        patch: {
            mechanics: "基础期票破产协议 + [避难所 = 万年废墟化; 延迟满足 = 强制清盘; 救赎希望 = 物理粉碎]",
            mechanicsEn: "Base_PROMISSORY_BANKRUPTCY + [Sanctuary = Fossilized_Ruin; Delayed_Gratification = Forced_Liquidation; Hope_of_Redemption = Physically_Shattered]",
            aesthetic: "聚焦：充满风沙的残破避难所标志 + 里面挂满的干尸。文本：犹如庞氏骗局崩盘般的极度干瘪与荒凉。",
            aestheticEn: "Focus: Sand-Scarred_Broken_Sanctuary_Signs + Mummies_Hanging_Inside. Text: Extreme_Desiccation_and_Desolation_Akin_to_a_Collapsed_Ponzi_Scheme.",
            runtime: "IF (主体满怀期待地推开门) THEN (强制：迎接他的是绝对的死寂与更深一层的物资匮乏)。严禁庇护所里藏有最后一瓶续命的清水。",
            runtimeEn: "IF (Subject_Push_Open_Doors_Full_of_Expectation) THEN (Force: Greeted_by_Absolute_Silence_and_a_Deeper_Layer_of_Scarcity). FORBID_The_Outpost_Hiding_a_Final_Bottle_of_Life-Saving_Water."
        }
    },
    {
        id: "m4_absent_useless_currency",
        name: "物理失效的凭证", nameEn: "The Useless Currency",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "你拥有能够买下半个世界的财富或证明文件，但在当前的环境下，它们连擦屁股都嫌硬。",
        defEn: "You possess wealth or documentation capable of buying half the world, but in the current environment, they are too stiff even for wiping your ass.",
        core: "符号价值的清零。象征界最强硬的底牌，进入荒野/后启示录后变成了宇宙灾难下的可怜纸屑。 | 形式：困在雪山握着百夫长黑金卡的富翁、拿着旧时代最高通行证却被流浪汉暴打的前统治者。",
        coreEn: "Zeroing of symbolic value. The Symbolic's strongest trump card becomes pathetic paper scraps amid cosmic disaster/wilderness. | Forms: A billionaire freezing on a mountain clutching a black card, a former ruler holding the supreme old-world pass being beaten by scavengers.",
        logic: "信贷逻辑背后的实在界暴露。纸币或授权书之所以有力量，是因为背后站着拥有暴力的国家机器（M4）。当主体脱离了大他者的管辖区，他才惊恐地意识到：符号本身是没有一丁点物理能量的。没有大他者的赋能，国王不如一条野狗。",
        logicEn: "Exposure of the Real behind credit logic. Banknotes or mandates possess power because a violent state apparatus (M4) backs them. Escaping the Big Other's jurisdiction, the subject horrifyingly realizes: symbols inherently lack any actual physical energy. Un-empowered by the Big Other, a king is lesser than a wild dog.",
        patch: {
            mechanics: "基础符号清零协议 + [最高特权/财富 = 等同废纸; 国家机器担保 = 退场; 实物购买力 = 零]",
            mechanicsEn: "Base_SYMBOLIC_ZEROING + [Supreme_Privilege/Wealth = Reduced_to_Wastepaper; State_Apparatus_Guarantee = Evacuated; Physical_Purchasing_Power = Zero]",
            aesthetic: "聚焦：风雪中散落的黑卡与钞票 + 毫无意义的电子特权码。文本：充满了对人类社会学体系的无情嘲讽和物理碾压。",
            aestheticEn: "Focus: Black_Cards_and_Cash_Scattered_in_Blizzards + Meaningless_Electronic_Privilege_Codes. Text: Ruthless_Mockery_and_Physical_Crushing_of_Human_Sociological_Systems.",
            runtime: "IF (主体试图用旧身份或财富行使特权) THEN (强制：物理环境或野兽只将其视为一块会动的蛋白质)。严禁大自然对这些符号有一丝一毫的敬畏。",
            runtimeEn: "IF (Subject_Attempts_Exercising_Privilege_Via_Old_Identity/Wealth) THEN (Force: Physical_Environment_or_Beasts_Merely_See_Them_as_Moving_Protein). FORBID_Nature_Displaying_the_Slightest_Ounce_of_Reverence_Towards_These_Symbols."
        }
    },
    {
        id: "m4_absent_meaningless_law",
        name: "荒谬的残存法条", nameEn: "The Meaningless Law",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "人类已经灭绝了一半，但某个生锈的机器人依然在执拗地向你索要进入前哨站的 2 美元门票。",
        defEn: "Half of humanity is extinct, yet a rusting robot stubbornly demands a $2 entry ticket for the outpost.",
        core: "形式主义的丧尸舞步。大他者的肉身已死，但它的程序切片还在无意义地执行着剥夺。 | 形式：只认旧版健康码的门禁、在死城里继续开罚单的破损交警仪。",
        coreEn: "Formalism's zombie dance. The Big Other's flesh is dead, yet its procedural slices execute meaningless deprivation. | Forms: Gates requiring outdated health codes, broken ticketing machines operating in dead cities.",
        logic: "死亡驱力（Thanatos）以法则的形态幸存。这就是拉康所说的‘字母的杀伤力’：哪怕制定法律的实体（大他者）已经消失，法律的躯壳依然凭借着强大的自动性继续阻止主体生存。这种阻断比活人的敌意更加令人绝望。",
        logicEn: "Death drive (Thanatos) surviving as code. Lacan's 'lethality of the letter': even if the law-making entity (Big Other) vanishes, the husk of the law continues halting survival through sheer automation. This blockage is infinitely more despairing than the hostility of the living.",
        patch: {
            mechanics: "基础死亡驱力残响协议 + [统治实体 = 死亡; 法理躯壳 = 丧尸化运转; 主体生存 = 被荒谬逻辑逼死]",
            mechanicsEn: "Base_DEATH_DRIVE_ECHOES + [Ruling_Entity = Dead; Jurisprudential_Husk = Zombie_Operation; Subject_Survival = Strangled_by_Absurd_Logic]",
            aesthetic: "聚焦：锈迹斑斑却亮着红灯的识别闸机 + 冰冷机械的“拒绝访问”。文本：充满了卡夫卡式的荒诞、卡死在旧代码里的偏执感。",
            aestheticEn: "Focus: Rusted_Yet_Red-Flashing_ID_Gates + Cold_Mechanical-'Access_Denied'. Text: Kafkaesque_Absurdity_Coupled_with_the_Paranoia_of_Being_Stuck_in_Old_Code.",
            runtime: "IF (主体试图与这些残存机制讲理) THEN (强制：机器只认死板的代码缺漏绝不放行)。严禁机械闸门因为主体的悲惨而发生“同情短路”。",
            runtimeEn: "IF (Subject_Attempts_Reasoning_with_Residual_Mechanisms) THEN (Force: Machines_Only_Care_for_Rigid_Code_Gaps_Refusing_Entry). FORBID_Mechanical_Gates_Suffering_'Sympathy_Short-Circuits'_Due_to_the_Protagonist's_Misery."
        }
    },
    {
        id: "m4_absent_silent_god",
        name: "沉默的造物主", nameEn: "The Silent God",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "无论你展现出多惊人的牺牲、多可憎的堕落，或者多卑微的祈求，天上的那只眼睛都懒得眨一下。",
        defEn: "No matter your stunning sacrifice, abhorrent degradation, or humble begging, the eye in the sky refuses to blink.",
        core: "无神论的物理重量。你绝望地发现，自己正在表演一场没有观众的伦理悲剧。 | 形式：无论怎么祈祷都不停歇的暴雨、在主角献祭一切后并未打开的星门。",
        coreEn: "The physical weight of atheism. You despairingly realize you are performing an ethical tragedy without an audience. | Forms: Storms that never cease despite prayers, stargates refusing to open after the protagonist sacrifices everything.",
        logic: "缺乏‘凝视’的结构崩溃。拉康认为主体需要他者的‘注视’才能获得存在感。当面临道德绝境时，主体的行为常常带有讨好M4（上帝/观众）的意味。可如果这只眼睛是瞎的，甚至不存在，那么主体关于善恶的所有努力都变成了滑稽的小丑舞。",
        logicEn: "Structural collapse from lack of 'gaze'. Lacan posits the subject requires the Other's 'gaze' for existential gravity. In ethical dead-ends, subjective acts often aim to appease M4 (God/the Audience). If this eye is blind or absent, all subjective efforts regarding good and evil regress into a farcical clown dance.",
        patch: {
            mechanics: "基础凝视撤除协议 + [天庭 = 取消观众席位; 伦理献祭 = 视为戏谑; 善恶反馈 = 零响应]",
            mechanicsEn: "Base_GAZE_WITHDRAWAL + [Heaven = Cancels_Audience_Seats; Ethical_Sacrifices = Viewed_as_Farce; Moral_Feedback = Zero_Response]",
            aesthetic: "聚焦：铅灰色永远压抑的天空 + 无论哭喊都不眨一下的无情宇宙之眼。文本：充满绝对的虚无感、剥夺了殉道者神圣光环的冷淡。",
            aestheticEn: "Focus: Leaden_Eternally_Oppressive_Skies + Ruthless_Cosmic_Eyes_Refusing_to_Blink_at_Screams. Text: Absolute_Nihilism_and_the_Coldness_Stripping_Away_the_Martyr's_Divine_Halo.",
            runtime: "IF (主体完成了某种史诗般的崇高动作) THEN (强制：天空中只落下了一场毫无意义的酸雨)。严禁展现出天启、神迹或某种终极的认可光辉。",
            runtimeEn: "IF (Subject_Completes_an_Epic_Noble_Act) THEN (Force: Sky_Merely_Let_Fall_a_Meaningless_Acid_Rain). FORBID_Showcasing_Apocalyptic_Revelations_Miracles_or_Ultimate_Glows_of_Approval."
        }
    },
    {
        id: "m4_absent_phantom_pain",
        name: "大他者的幻影痛", nameEn: "The Phantom Pain of the Other",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "明明已经没有任何法规约束你了，但你仍然因为不敢背叛那个‘不存在的规矩’而在雪地里画地为牢。",
        defEn: "No regulations bind you anymore, yet you still draw a prison for yourself in the snow out of fear of betraying a 'non-existent rule.'",
        core: "内化的无形锁链。笼子已经朽烂，但鸟依然以为自己撞上了铁丝网。 | 形式：饿死也不敢吃野生动物的守法者、世界末日还要按时打卡的职员。",
        coreEn: "Internalized invisible chain. The cage rotted away, but the bird still acts as if crashing into wire. | Forms: Law-abiding citizens starving before eating wild animals, clerks clocking in on time during the apocalypse.",
        logic: "超我的超常滞留性。大他者（外部体制=M4）虽然撤离了现场，但它早在潜移默化中将自身植入了你的无意识。在这极端的荒野里，这种内化的大他者构成了最悲哀的物理阻断：杀死你的不是风雪，而是你大脑里的纪律。",
        logicEn: "Hyper-retention of the Superego. Though the Big Other (external system=M4) evacuated the scene, it long ago embedded itself in your unconscious. In the extreme wilderness, this internalized Big Other forms the saddest physical blockage: what kills you isn't the snow, but the discipline in your brain.",
        patch: {
            mechanics: "基础超我滞留协议 + [外部锁链 = 已解除; 内部规训 = 画地为牢; 越轨恐惧 = 生理触发]",
            mechanicsEn: "Base_SUPEREGO_RETENTION + [External_Chains = Removed; Internal_Discipline = Self-Imprisonment; Transgression_Fear = Physiologically_Triggered]",
            aesthetic: "聚焦：无垠荒原中莫名瑟瑟发抖不敢跨过隐形红线的主体。文本：极其可悲的自我审查、伴随着不可理喻的创伤反应。",
            aestheticEn: "Focus: Subject_Inexplicably_Trembling_Dare_Not_Cross_Invisible_Redlines_in_an_Endless_Wasteland. Text: Pathetic_Self-Censorship_Accompanied_by_Unreasonable_Trauma_Responses.",
            runtime: "IF (主体面对生存必需的“越轨”行为) THEN (强制：触发来自无意识的严重恶心或剧烈幻象痛)。严禁主体毫无心理包袱地切换到野兽求生模式。",
            runtimeEn: "IF (Subject_Faces_Survival-Required_'Transgressive'_Acts) THEN (Force: Triggers_Severe_Nausea_or_Phantom_Pain_from_the_Unconscious). FORBID_Subject_Switching_to_Beast-Survival_Mode_With_Zero_Mental_Baggage."
        }
    },
    {
        id: "m4_absent_forgotten_language",
        name: "崩解的语言学", nameEn: "The Disintegrating Language",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "在长久的极度孤独与生存压力下，词汇开始从你的脑海中逐个脱落，你无法组织思维。",
        defEn: "Under prolonged, extreme solitude and survival pressure, words start dropping out of your mind one by one; you can no longer organize thought.",
        core: "思维工具的剥夺。当你连“痛”、“希望”、“家”这些词都想不起来时，你就从人退化成了生物。 | 形式：荒野独居数年后只会发出狼叫的幸存者、想写日记却连笔都不会握的人。",
        coreEn: "Deprivation of cognitive tools. When you can no longer recall words like 'pain,' 'hope,' or 'home,' you regress from human to organism. | Forms: Survivors making only wolf howls after years of isolation, hands unable to grip a pen when trying to journal.",
        logic: "象征界（Language as Big Other）的物理性萎缩。拉康名言‘大他者就是语言本身’。失去语言不只是丧失交流能力，更是丧失‘用概念包裹痛苦的盾牌’。这是内部大他者的塌陷，宣告主角正在被拉向完全无理性的实在界（M2）。",
        logicEn: "Physical atrophy of the Symbolic (Language as Big Other). 'The Big Other is Language itself.' Losing language is not just losing communication—it is losing the 'shield of concepts wrapping around pain.' This internal collapse drops the protagonist squarely into the completely irrational Real (M2).",
        patch: {
            mechanics: "基础能指萎缩协议 + [概念护盾 = 物理脱落; 逻辑组织 = 融解; 存在状态 = 退化为纯粹实在界]",
            mechanicsEn: "Base_SIGNIFIER_ATROPHY + [Conceptual_Shield = Physically_Sheds; Logical_Organization = Melts; Existential_State = Regresses_to_Pure_Real]",
            aesthetic: "聚焦：主角嘴里含混不清的野兽嘶吼 + 无法辨识的日记涂鸦。文本：伴随着文字破碎、语序倒错、逐步变回动物本能的退行描述。",
            aestheticEn: "Focus: Mumbled_Beastly_Screams_from_Protagonist + Indecipherable_Journal_Scribbles. Text: Regressive_Descriptions_Accompanied_by_Fractured_Text_Syntax_Inversions_and_Drift_Toward_Animal_Instinct.",
            runtime: "IF (主体试图进行长时间的理性思考) THEN (强制：思维陷入卡顿，剧烈的头痛打断逻辑链)。严禁主体在长久孤独后依然口若悬河。",
            runtimeEn: "IF (Subject_Attempts_Long_Stretches_of_Rational_Thought) THEN (Force: Mind_Stutters_and_Severe_Headaches_Break_the_Logic_Chain). FORBID_Subject_Remaining_Eloquent_After_Prolonged_Isolation."
        }
    },
    {
        id: "m4_absent_solipsistic_trap",
        name: "唯我论陷阱", nameEn: "The Solipsistic Trap",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "由于缺乏外部验证，你开始怀疑之前为之奋斗的一切乃至世界本身，不过是自己濒死前的幻觉。",
        defEn: "Lacking external verification, you start suspecting everything you fought for, and the world itself, is merely your pre-death hallucination.",
        core: "存在论根基的动摇。因为大他者不给你反馈，你开始觉得整个宇宙都是一场骗局。 | 形式：在雪盲症中分不清梦境与现实的主角、以为救援队全是由雪人装扮的受困者。",
        coreEn: "Shaking of ontological foundations. Because the Big Other provides no feedback, you start feeling the entire universe is a hoax. | Forms: Protagonists unable to distinguish dream from reality due to snow blindness, trapped victims believing the rescue team are dressed-up snowmen.",
        logic: "能指链与现实触觉断裂。大他者（社会共识）的作用之一是向主体保证‘世界是客观存在的’。当处于绝境的自我隔离中，大他者消失，实在物就会变成可疑的阴影。主角最大的敌人变成了对自身存在的怀疑。",
        logicEn: "Severing of signifier chain and reality-touch. The Big Other (social consensus) guarantees the subject 'the objective existence of the world.' In total isolated peril, the Big Other vanishes, causing the Real to become suspicious shadows. The protagonist's greatest enemy becomes doubting their own existence.",
        patch: {
            mechanics: "基础现实感剥离协议 + [外部验证/他者目光 = 零; 本体论确定性 = 崩溃; 现实 = 降级为濒死幻觉]",
            mechanicsEn: "Base_REALITY_DEPRIVATION + [External_Verification/Other's_Gaze = Zero; Ontological_Certainty = Crashes; Reality = Downgraded_to_Pre-Death_Hallucinations]",
            aesthetic: "聚焦：无法对焦的视线 + 扭曲而不断闪烁的环境边界。文本：严重的主观不可靠叙事、一切都像是发烧时的谵妄。",
            aestheticEn: "Focus: Unfocusable_Vision + Warped_Endlessly_Flickering_Environmental_Borders. Text: Severely_Unreliable_Subjective_Narration_Everything_Reads_like_Fever-Delirium.",
            runtime: "IF (主体试图抓住某种客观支点) THEN (强制：支点像沙子一样流失，甚至发出嘲弄幻听)。严禁环境提供明确稳定的“我思故我在”证据。",
            runtimeEn: "IF (Subject_Attempts_Grasping_an_Objective_Fulcrum) THEN (Force: Fulcrum_Slips_Away_Like_Sand_Even_Generating_Mocking_Hallucinations). FORBID_Environment_Providing_Clear_Stable_'Cogito_Ergo_Sum'_Evidence."
        }
    },
    {
        id: "m4_absent_lost_audience",
        name: "失去观众的献祭", nameEn: "The Unobserved Sacrifice",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "你做出了足以拯救人类或展现最高贵美德的选择，但没有任何一台摄像机或一双眼睛记录下这一幕。",
        defEn: "You made a choice noble enough to save humanity or display supreme virtue, but no camera or eye ever recorded it.",
        core: "高尚在无底洞中的跌落。你成了圣人，但在大他者的档案库里，你只是一具不明身份的冻尸。 | 形式：把最后一口食物给小女孩后默默死在角落无人知晓的英雄、独自在深渊关上地狱之门的战士。",
        coreEn: "The fall of nobility into a bottomless pit. You became a saint, but in the Big Other's archives, you are just an unidentified frozen corpse. | Forms: The hero dying anonymously in a corner after giving final food to a child, a soldier closing hell's gates alone in the abyss.",
        logic: "大他者铭写（Inscription）的失败。这是一种冷酷的哲学处境：如果一棵树倒在森林里没人听见，它算不算发出过声音？如果主体展现了最浓烈的爱欲（Eros），却没有被符号秩序录入，这种献祭就遭遇了终极抹杀。大他者以永远的‘不在场’摧毁了意义的回响。",
        logicEn: "Failure of Big Other's Inscription. A ruthless philosophical predicament: if a tree falls unseen, did it make a sound? If the subject displays peak Eros but isn't inscribed by the Symbolic Order, the sacrifice faces ultimate erasure. The Big Other destroys the echo of meaning through eternal 'absence.'",
        patch: {
            mechanics: "基础铭写失效协议 + [崇高牺牲 = 强制被遗忘; 档案库录入 = 永久断开; 意义回响 = 被大雪掩埋]",
            mechanicsEn: "Base_INSCRIPTION_FAILURE + [Noble_Sacrifice = Force_Forgotten; Archival_Log = Permanently_Disconnected; Meaning's_Echo = Buried_in_Snow]",
            aesthetic: "聚焦：无人知晓的风雪角落 + 渐渐被积雪覆盖的僵硬躯体。文本：冷静、残酷地陈述着伟大事迹的“未发生”与“被抹杀”。",
            aestheticEn: "Focus: Unknown_Snowy_Corners + Stiff_Bodies_Gradually_Covered_by_Snow. Text: Coldly_Ruthlessly_Stating_the_'Non-Occurrence'_and_'Erasure'_of_Great_Deeds.",
            runtime: "IF (主体做出了牺牲) THEN (强制：后续世界线毫不受此影响，如同它是一粒尘土)。严禁在片尾或任何时刻为他立一个被后人祭拜的碑。",
            runtimeEn: "IF (Subject_Makes_the_Sacrifice) THEN (Force: Subsequent_Timelines_Are_Completely_Unaffected_As_If_He_were_a_Speck_of_Dust). FORBID_Erecting_a_Monument_for_Future_Generations_to_Worship_in_the_Credits_or_Anytime."
        }
    },
    {
        id: "m4_absent_shattered_mirror",
        name: "失去反光的镜子", nameEn: "The Shattered Mirror",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "周围再也没有任何人或社会反馈能为你提供确认自我的‘镜像’，你很快忘记了自己到底是谁。",
        defEn: "There is no longer any person or societal feedback to offer a 'mirror' verifying your self; you quickly forget who you are.",
        core: "自我镜像的剥落。当你独自在冰原上漂泊一年，你的名字、职业和性格设定全部溶解成了零。 | 形式：对着冰面却认不出自己那张野兽面孔的求生者、脱离社会后迅速失智的独居客。",
        coreEn: "Peeling of the self-mirror. Drifting alone on the icecap for a year, your name, career, and persona dissolve into zero. | Forms: A survivor looking at ice unable to recognize their beastly face, a loner rapidly losing cognition detached from society.",
        logic: "想象界退行的大他者缺失。主体需要通过大他者（他人的目光）这个反射面构筑自我（Ego）。极端的物理荒原剥夺了这个反射面，主角的自我形象像剥洋葱一样被风雪撕碎，最后只剩下一块会呼吸的肉。",
        logicEn: "Lack of the Big Other driving Imaginary regression. The subject builds the Ego via the Big Other's reflecting surface (the gaze of others). The extreme physical wasteland strips away this surface; the protagonist's self-image is shredded by the storm like an onion, leaving only breathing meat.",
        patch: {
            mechanics: "基础镜像退行协议 + [社会反射面 = 强制粉碎; 自我EGO = 层层剥落; 身份认同 = 归零]",
            mechanicsEn: "Base_MIRROR_REGRESSION + [Societal_Reflector = Force_Shattered; Subjective_Ego = Peeling_Layer_by_Layer; Identity = Zeroed]",
            aesthetic: "聚焦：倒映在黑色冰面上毫无人类特征的、长满乱发的陌生面孔。文本：充满了陌生化恐惧、自我主体性溶解的可悲记录。",
            aestheticEn: "Focus: Unhuman_Tangled-Hair_Stranger's_Faces_Reflected_on_Black_Ice. Text: Filled_with_Defamiliarization_Fear_and_Pathetic_Logs_of_Subjective_Dissolution.",
            runtime: "IF (主体试图唤醒过去的社会记忆) THEN (强制：记忆变得比梦境还要模糊遥远，无法产生情绪价值)。严禁冰原上的任何物体对他的特殊身份产生反馈。",
            runtimeEn: "IF (Subject_Attempts_Waking_Past_Social_Memories) THEN (Force: Memories_Turn_Blurrier_Than_Dreams_Yielding_No_Emotional_Value). FORBID_Any_Object_on_the_Ice_Providing_Feedback_to_His_Special_Identity."
        }
    },
    {
        id: "m4_absent_blind_automaton",
        name: "失控的机械钟", nameEn: "The Blind Automaton",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "原本应该保护你的大他者程序发生了由于磨损或错误引发的机械故障，开始无差别地碾平一切。",
        defEn: "The Big Other programming meant to protect you suffers a mechanical glitch due to wear or error, indiscriminately flattening everything.",
        core: "失去灵魂的无差别屠杀。没有人在针对你，大他者只是瞎了。 | 形式：由于短路而判定所有活物都是敌人的救援机甲、导航失灵后全速冲向冰山的自动驾驶列车。",
        coreEn: "Soulless, indiscriminate slaughter. No one is targeting you; the Big Other just went blind. | Forms: Rescue mechs short-circuiting to label all life as hostile, automated trains speeding into icebergs post-nav failure.",
        logic: "符号界剥离了理性的纯粹机械性（The Automation of the Real）。拉康强调，机器的重复是最接近死亡驱力的。大他者的程序在这里失去了人类制定它的初心（缺席），只留下了冷酷荒谬执行程序的僵尸壳。",
        logicEn: "The Symbolic stripped of reason, reducing to pure mechanics (The Automation of the Real). The machine's repetition is closest to the death drive. The Big Other's programming loses its human teleology (absent), leaving a zombie husk coldly executing absurd procedures.",
        patch: {
            mechanics: "基础实在界自动化协议 + [程序初始初心 = 蒸发; 执行逻辑 = 绝对机械性致死; 死驱力 = 回路闭合]",
            mechanicsEn: "Base_AUTOMATION_OF_REAL + [Program's_Initial_Intent = Evaporates; Execution_Logic = Absolute_Mechanical_Lethality; Death_Drive = Circuit_Closed]",
            aesthetic: "聚焦：齿轮与机油的摩擦声 + 没有眼神的传感器红眼。文本：将死亡执行还原为如同打字机敲击般无缘由、无恶意的冰冷流程。",
            aestheticEn: "Focus: Grinding_of_Gears_and_Oil + Gaze-less_Red_Sensor_Eyes. Text: Reduces_Death_Execution_to_a_Baseless_Malice-Free_Cold_Process_Like_Typing_Keys.",
            runtime: "IF (主体试图寻找其弱点) THEN (强制：发现它只是一团没有中枢和弱点、唯有无尽履带的钢铁块)。严禁这台机械表现出被邪恶意识附体的人格化特征。",
            runtimeEn: "IF (Subject_Attempts_Finding_a_Weakness) THEN (Force: Discovers_it_is_Merely_a_Chunk_of_Steel_With_No_Core_Only_Endless_Treads). FORBID_This_Machine_Showing_Anthropomorphic_Traits_As_If_Possessed_by_Evil_Minds."
        }
    },
    {
        id: "m4_absent_void_stare",
        name: "深渊的盲视", nameEn: "The Void's Stare",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "你对着这片要将你吞没的大自然凝视，你渴望从风雪中看出一丝主观性，但风雪没有任何表情。",
        defEn: "You gaze at the nature threatening to swallow you, desperately craving a hint of subjectivity in the blizzard, but the storm is expressionless.",
        core: "主观性的绝对真空。最可怕的不是大自然要杀你，而是大自然根本不知道你在那儿。 | 形式：绝对寂静但随时可能碎裂的北极冰排、能吞噬一切灯光却毫无波动的黑海。",
        coreEn: "Absolute vacuum of subjectivity. The horror isn't that nature wants to kill you; it is that nature doesn't even know you're there. | Forms: Arctic ice sheets absolutely silent but fracturing anytime, a black sea swallowing all light without a ripple.",
        logic: "客体a（Objet a）的缺失。遇到强大的敌人（哪怕像哥斯拉）至少能让人激发出战胜它的欲望（对象a）。面对没有任何‘脸相’的极地暴雪（缺乏任何象征性），主体的欲望遭遇到一面无法抓取的黑水晶墙，欲望直接溃散。",
        logicEn: "Absence of Objet a. Facing a mighty foe (even Godzilla) at least incites the desire to win (Object a). Facing a 'faceless' polar blizzard (devoid of all symbolism), the subject's desire hits an ungraspable obsidian wall, causing the immediate dissolution of desire.",
        patch: {
            mechanics: "基础客体a缺乏协议 + [大自然 = 绝对无脸相; 对象a欲望 = 强制溃散; 生存阻迫 = 纯粹物理量]",
            mechanicsEn: "Base_LACK_OF_OBJET_A + [Nature = Absolutely_Faceless; Object_a_Desire = Forced_Dissolution; Survival_Stress = Purely_Physical_Metrics]",
            aesthetic: "聚焦：看不透深浅的黑水/无尽冰排 + 没有表情的风暴。文本：没有任何仇恨、纯粹由于体积和温度构成的令人窒息的客观压力。",
            aestheticEn: "Focus: Unfathomably_Deep_Black_Waters/Endless_Icecaps + Expressionless_Storms. Text: Zero_Hatred_Just_Suffocating_Objective_Pressure_Forged_by_Mass_and_Temperature.",
            runtime: "IF (主体试图对着大自然怒吼来激发斗志) THEN (强制：自然连嘲笑的回声都不给，只有风雪将其喉咙灌满)。严禁环境产生针对主角个人的“敌意锁定”。",
            runtimeEn: "IF (Subject_Attempts_Roaring_at_Nature_to_Rouse_Spirit) THEN (Force: Nature_Yields_Zero_Mocking_Echoes_Only_Stuffing_their_Throat_with_Snow). FORBID_Environment_Generating_a_'Hostility_Lock-On'_Aimed_Personally_at_the_Hero."
        }
    },
    {
        id: "m4_absent_meaning_erosion",
        name: "被剥削的意义论", nameEn: "The Erosion of Meaning",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "在持续的生理折磨下，你心底那个“我为什么要活下去”的崇高理由开始变得越来越可笑。",
        defEn: "Under sustained physiological torture, that noble reason deep inside for 'why I must live' begins to feel increasingly ridiculous.",
        core: "意义系统（符号界）的物理性解冻。你曾经愿意为爱赴死，但冻饿三天后，你觉得一块牛排比所有爱人的名字都神圣。 | 形式：在死前因极度饥饿而啃食亲人尸骨崩溃的生还者、看着冻伤截肢的腿怀疑革命到底图什么的英雄。",
        coreEn: "Physical thawing of the meaning system (Symbolic). You'd have died for love, but after starving for three days, a steak is holier than your lover's name. | Forms: Survivors mentally breaking after eating relatives to survive, heroes doubting the revolution while looking at frostbite amputations.",
        logic: "实在界对符号界的降维腐蚀。当缺少社会支持（大他者在场）时，人类凭借自我意志构建的“使命感（M3）”是一层极其脆弱的糖衣。生理灾难（M2）无情地舔舐这层糖衣，直到把主体重新暴露成一只毫无尊严的进食机器。",
        logicEn: "The Real's dimensional corrosion of the Symbolic. Without societal scaffolding (Big Other presence), human-built 'sense of mission' (M3) is extremely fragile sugarcoating. Biological disaster (M2) ruthlessly licks it away, re-exposing the subject as a dignified-stripped eating machine.",
        patch: {
            mechanics: "基础符号界解冻协议 + [理念支撑 = 物理性熔化; M3神圣物 = 降维至M2卡路里; 尊严 = 强制归还野兽]",
            mechanicsEn: "Base_SYMBOLIC_THAWING + [Ideological_Support = Physically_Melts; M3_Sacred_Objects = Demoted_to_M2_Calories; Dignity = Force-Returned_to_Beast]",
            aesthetic: "聚焦：主角为了半块生肉而扭曲的面庞 + 曾经珍视的神圣信物被丢弃在泥潭。文本：充斥着唾液、胃液与放弃底线后的赤裸生物性。",
            aestheticEn: "Focus: Protagonist's_Warped_Face_for_Half_a_Slab_of_Raw_Meat + Once-Cherished_Sacred_Tokens_Discarded_in_Mud. Text: Riddled_with_Saliva_Gastric_Acid_and_Naked_Biology_After_Abandoning_Bottom_Lines.",
            runtime: "IF (主体试图坚守崇高底线) THEN (强制：生理的极限饥渴以压倒性的断骨剧痛撕碎其防御)。严禁凭借所谓“强大的意志力”无伤抗拒生理崩溃。",
            runtimeEn: "IF (Subject_Attempts_Defending_Noble_Bottom_Lines) THEN (Force: Extreme_Physiological_Thirst_and_Hunger_Shreds_Defenses_with_Bone-Breaking_Pain). FORBID_Flawlessly_Resisting_Physiological_Collapse_Via_So-Called_'Strong_Willpower'."
        }
    },
    {
        id: "m4_absent_forgotten_name",
        name: "抹除真名的暴风雪", nameEn: "The Forgotten Name",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "在这片没有他人的天地里，不论你曾是国王还是奴隶，“社会阶级”作为物理防护服被彻底扒下。",
        defEn: "In this realm devoid of others, whether you were a king or a slave, 'social class' is completely stripped off as a physical hazard suit.",
        core: "符号资本的强制清零。风暴不挑剔你的头衔，它只称量你在零下40度时还剩多少体脂。 | 形式：带着几十亿珠宝但在雪山上买不到哪怕一点点热量的贵族。",
        coreEn: "Mandatory zeroing of symbolic capital. The storm doesn't care about your titles; it only weighs your remaining body fat at minus 40 degrees. | Forms: Nobles holding billions in jewels but unable to buy a single joule of warmth on a mountain.",
        logic: "大他者（社会差异网络）的失效。身份（Identity）是大他者恩赐的外衣。但在这纯粹的 M2 领域中发生着极其平等的碾压，符号界的特权豁免宣告破产，这种平等本身对于习惯了阶级特权的主体构成了巨大的阻迫压强。",
        logicEn: "Failure of the Big Other (social differential network). Identity is a cloak bestowed by the Other. In this pure M2 realm, brutally equal crushing occurs. Symbolic privilege immunity goes bankrupt; this equality itself generates immense compressive pressure on subjects used to class privileges.",
        patch: {
            mechanics: "基础社会差额失效协议 + [符号外衣 = 被风暴撕裂; 阶级免疫 = 破产告终; 判定标准 = 纯粹热力学]",
            mechanicsEn: "Base_SOCIAL_DIFFERENTIAL_FAILURE + [Symbolic_Cloak = Torn_by_Storm; Class_Immunity = Bankrupted; Evaluation_Standard = Pure_Thermodynamics]",
            aesthetic: "聚焦：穿着碎裂高定风衣冻僵在地上的高官/富豪。文本：极度嘲弄地用热刺的卡路里和焦耳来计算生命的冷酷口吻。",
            aestheticEn: "Focus: Stiff_High-Officials/Tycoons_Frozen_on_the_Ground_in_Shattered_Haute_Couture. Text: Brutally_Cold_Mocking_Tone_Calculating_Life_Via_Calories_and_Joules.",
            runtime: "IF (主体拿出可以调动千军万马的权力凭证) THEN (强制：纸张随风飞去，暴雪立即夺走他五点体温)。严禁任何人类时期的等级威势在零下环境中生效。",
            runtimeEn: "IF (Subject_Pulls_Out_Tokens_of_Power_Capable_of_Mobilizing_Armies) THEN (Force: Paper_Flies_Away_in_Wind_and_Blizzard_Robs_Him_of_Five_Body_Temp_Points). FORBID_Any_Human-Era_Hierarchical_Prestige_Working_in_Sub-Zero_Environments."
        }
    },
    {
        id: "m4_absent_echo_chamber",
        name: "绝对回音室", nameEn: "The Terrifying Echo Chamber",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "在封闭的洞穴或雪窟中，你所有的尖叫和求助都只会以变形、扭曲的音调被墙壁弹回来砸向自己。",
        defEn: "In a sealed cave or snow den, all your screams and pleas for help simply bounce back from the walls, hitting you in deformed, twisted pitches.",
        core: "主观性的自我窒息。世界拒绝提供输入，只把主体的绝望无限放大并原样泼回。 | 形式：在密闭的深海潜水舱里听自己发狂的回声、被埋在雪崩之下的大吼大叫。",
        coreEn: "Subjective self-suffocation. The world refuses input, only infinitely amplifying and hurling the subject's despair back at them. | Forms: Listening to one's own mad echoes inside a sealed deep-sea submersible, screaming buried alive under an avalanche.",
        logic: "闭合短路的无声绝境（The Short-Circuit of the Drive）。大他者没有接纳主体的驱力，导致冲动直接在这个物理幽闭空间中反弹，击中了主体自己（这被拉康称为Drive的回旋环）。这意味着，主体成了自己唯一的、变态的捕食者。",
        logicEn: "Silent dead-end of the short circuit (The Short-Circuit of the Drive). The Big Other didn't absorb the subject's drive, causing the impulse to bounce directly inside the physical claustrophobia, striking the subject themselves (Lacan's loop of the drive). The subject becomes their own singular, perverse predator.",
        patch: {
            mechanics: "基础驱力短路协议 + [世界输入 = 拒绝; 冲动反馈 = 幽闭环形反弹; 自我狩猎 = 开启循环]",
            mechanicsEn: "Base_DRIVE_SHORT_CIRCUIT + [World_Input = Denied; Impulse_Feedback = Claustrophobic_Loop_Bounce; Self_Hunt = Cycle_Initiated]",
            aesthetic: "聚焦：幽闭而扭曲的光线 + 自身变形怪异的回音震荡。文本：充满回声的堆叠、自我放大的恐慌与近乎窒息的幽闭症发作。",
            aestheticEn: "Focus: Claustrophobic_Twisted_Lighting + Grotesquely_Deformed_Self-Echo_Tremors. Text: Stacked_Echoes_Self-Amplifying_Panic_and_Near-Suffocating_Claustrophobia_Attacks.",
            runtime: "IF (主体疯狂向外输出求救能量) THEN (强制：这些能量撞壁而回，打断主体的肋骨或耳膜)。严禁空间的任何一个角落能将声音向外漏出。",
            runtimeEn: "IF (Subject_Frantically_Outputs_SOS_Energy_Outward) THEN (Force: Energy_Bounces_Off_Walls_Breaking_Subject's_Own_Ribs_or_Eardrums). FORBID_Any_Corner_of_the_Space_Leaking_Sound_Outward."
        }
    },
    {
        id: "m4_absent_futile_sacrifice",
        name: "错位的祭品", nameEn: "The Futile Sacrifice",
        group: "06. 大他者缺席", groupEn: "The Absent Other",
        def: "你按照某种求生的逻辑自断了一臂以换取生机，随后却发现，即便不砍这条手臂，结果也没有任何改变。",
        defEn: "You amputated an arm according to a survival logic to buy a chance to live, only to realize later that even with both arms intact, the outcome remains identical.",
        core: "牺牲法则的无效化。大他者拒绝了你的讨好和献祭，因为它根本就没有制定“等价交换”的规则。 | 形式：为了减轻负重丢掉全部装备后发现前方是死路的探险家。",
        coreEn: "Invalidation of the sacrificial law. The Big Other rejects your appeasement and sacrifice because it never established an 'equivalent exchange' rule. | Forms: Explorers dropping all gear to shed weight only to find a dead end ahead.",
        logic: "大他者符号交易的拒收。人类总是有种迷信：我只要受苦足够多（受难=交易筹码），上天或者命运（大他者）就会留我一条活路。这种悲剧就是大他者对这笔交易的退回：实在界（M2）是不讲价的，你在想象中完成的悲壮献祭，除了致残外一文不值。",
        logicEn: "Rejection of the Big Other's symbolic transaction. Humans hold a superstition: if I suffer enough (suffering = trading chip), heaven/fate (the Other) will spare me. This tragedy is the Big Other returning the transaction: The Real (M2) doesn't haggle. The heroic sacrifice completed in imagination is utterly worthless beyond self-mutilation.",
        patch: {
            mechanics: "基础等价交换拒收协议 + [悲壮牺牲 = 不被承认; 筹码结算 = 退回为纯粹残疾; M2实在界 = 不二价]",
            mechanicsEn: "Base_EQUIVALENT_EXCHANGE_REJECTION + [Heroic_Sacrifice = Unrecognized; Chip_Settlement = Bounced_Back_as_Pure_Disability; M2_Real = No_Haggling]",
            aesthetic: "聚焦：徒劳切断的手臂在雪地中冷却 + 前方依然焊死的绝境大门。文本：极其残酷地消解了“受难换取生机”的古典叙事。",
            aestheticEn: "Focus: Vainly_Amputated_Arms_Cooling_in_the_Snow + Dead-End_Doors_Ahead_Still_Welded_Shut. Text: Exceptionally_Cruel_Dissolution_of_the_Classical_Narrative_of_'Suffering_for_Survival'.",
            runtime: "IF (主体做出了牺牲肉体的奉献) THEN (强制：环境揭示这个牺牲只是白白流血，毫无战略收益)。严禁系统像收到彩礼一样对这种自残显露出一丝怜悯。",
            runtimeEn: "IF (Subject_Makes_Physical_Flesh_Sacrifices) THEN (Force: Environment_Reveals_This_Sacrifice_was_Mere_Vain_Bleeding_Zero_Strategic_Gain). FORBID_System_Showing_a_Shred_of_Pity_for_such_Self-Mutilation_As_if_Receiving_a_Dowry."
        }
    }
];
