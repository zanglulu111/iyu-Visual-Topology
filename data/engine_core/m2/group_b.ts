import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_B: LibraryItemDef[] = [
    {
        id: "cog_secret",
        name: "身世揭秘", nameEn: "Secret Origin",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现父母不是亲生，或者自己是领养/克隆的。",
        defEn: "Finding parents are not biological, or being adopted/cloned.",
        core: "起源的虚构。我是谁？我来自哪里？根基断裂。 | 实在界: 起源的空洞。",
        coreEn: "Fictionality of origins. Who am I? Where from? Root rupture. | The Real: Void of origin.",
        logic: "主体系逻辑中所有的‘血缘（M4）相关权重’发生瞬间反转。叙事中对于家庭、过去、故乡的 Slot3（能指）被强制标记为‘虚假’，主体必须重构其 M1 生命周期。",
        logicEn: "All 'kinship (M4) related weightings' in the logic undergo instant reversal. Signifiers (Slot3) for family, past, and hometown are forcibly marked as 'fake'; the subject must reconstruct their M1 lifecycle."
    },
    {
        id: "cog_infidelity",
        name: "发现出轨", nameEn: "The Affair",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "目击伴侣与他人亲密，或者发现秘密手机。",
        defEn: "Witnessing partner's intimacy with another, or finding a secret phone.",
        core: "爱情神话的破灭。最亲密的人变成了最陌生的他者。 | 实在界: 关系的谎言。",
        coreEn: "Shattering the love myth. The closest person becomes a stranger. | The Real: Lie of relationship.",
        logic: "主体的 M3（爱欲客体）发生‘降维坍塌’。叙事中原本被神化的客体（Slot7）必须被描述为‘一团无意义的肉’或‘背叛性的机械装置’，诱发主体产生强烈的 M7（解体）。",
        logicEn: "The subject's M3 (Erotic Object) undergoes 'dimensional collapse'. The previously deified object (Slot7) must be described as 'meaningless flesh' or 'atrickery device', inducing intense M7 (Disintegration)."
    },
    {
        id: "cog_matrix_glitch",
        name: "现实故障", nameEn: "The Glitch",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "看到重复的场景（既视感），或者物理法则瞬间失效。",
        defEn: "Seeing repeat scenes (déjà vu) or physical laws failing instantly.",
        core: "世界是虚拟的？怀疑感官，怀疑现实的质地。 | 实在界: 模拟的破绽。",
        coreEn: "Virtual world? Doubting senses and the texture of reality. | The Real: Flaws in simulation.",
        logic: "空间的‘纹理渲染逻辑’（Slot1）发生错误。文本描述中必须出现对‘不可思议之景象’的直接记录，禁止使用任何比喻修辞（M4 的中合作用），强制呈现纯粹的逻辑悖论。",
        logicEn: "Error in 'spatial texture rendering' Slot5. Text must record 'extraordinary scenes', forbidding metaphorical neutralization (M4) and forcing pure logical paradox."
    },
    {
        id: "cog_amnesia",
        name: "失忆苏醒", nameEn: "Amnesia",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "醒来不知道自己是谁，手里拿着枪或满身是血。",
        defEn: "Waking without knowing who you are, holding a gun or covered in blood.",
        core: "能指链的断裂。没有过去，只有赤裸的现在。 | 实在界: 历史的空白。",
        coreEn: "Rupture of signifiers. No past, just naked present. | The Real: Blank history.",
        logic: "主体的 M1 记忆库被强行设为 Read-Only 空白。所有的 M5 动作都必须处于‘猜测状态’。主体叙事中的名字和背景（Slot3）必须被‘待定标记’（[Name Missing]）取代。",
        logicEn: "Subject's M1 memory set to Read-Only blank. All M5 actions must be 'speculative'. Name and background (Slot3) in the narrative must be replaced by placeholders ([Name Missing])."
    },
    {
        id: "cog_betrayal",
        name: "盟友背叛", nameEn: "The Betrayal",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "最信任的伙伴在关键时刻背后捅刀。",
        defEn: "Most trusted partner stabs you in the back at a critical moment.",
        core: "信任的创伤。在这个世界上是绝对孤独的。 | 实在界: 他人的地狱。",
        coreEn: "Trauma of trust. Absolute solitude in the world. | The Real: Others are Hell.",
        logic: "作为‘合作契约’的 M4 瞬间无效。叙事中主体的逻辑优先级被迫设为‘绝对的自我防御’。主体不再生成对他人的信任，所有的交互都变成了‘权力的博弈’。",
        logicEn: "M4 'cooperation contract' instantly voided. Narrative priority set strictly to 'absolute self-defense'. Subject no longer generates trust; all interactions turn into 'power games'."
    },
    {
        id: "cog_false_accusation",
        name: "被诬陷", nameEn: "Framed",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "在你的包里发现了不属于你的毒品或凶器。",
        defEn: "Finding drugs or weapons not yours in your bag.",
        core: "真相与证据的脱节。你是清白的，但世界认为你有罪。 | 实在界: 证据的暴政。",
        coreEn: "Decoupling truth from evidence. Innocent but world declares guilty. | The Real: Tyranny of evidence.",
        logic: "主体的 M1 被强行嵌套进一个‘罪恶的剧本’中。主体的所有 M5 正向证明其清白的努力都必须被 M4（体制/观众）解读为其认罪的征兆。",
        logicEn: "The subject's M1 is forcibly nested within a 'criminal script'. All M5 efforts to prove innocence must be interpreted by M4 (System/Audience) as signs of guilt."
    },
    {
        id: "cog_letter",
        name: "神秘信件", nameEn: "The Letter",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "收到一封信，揭示了关于你过去的惊人秘密。",
        defEn: "Receiving a letter revealing shocking secrets from your past.",
        core: "压抑物的回归（Return of the Repressed）。过去没有死。 | 实在界: 文字的诅咒。",
        coreEn: "Return of the Repressed. The past isn't dead. | The Real: Curse of words.",
        logic: "一个外来的能指（信件）劫持了主体的 M0 启动流。文本描写必须表现出‘信息对主体的寄生性和污染性’，主体逻辑被迫转向解决这个‘文字的黑洞’。",
        logicEn: "An external signifier (letter) hijacks the subject's M0 boot stream. Text must manifest 'information parasitic/contamination', forcing logic toward resolving this 'black hole of words'."
    },
    {
        id: "cog_missing_person",
        name: "亲人失踪", nameEn: "Vanished",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "转身的瞬间，孩子或爱人凭空消失。",
        defEn: "Child or lover vanishing in the instant you turn around.",
        core: "丧失（Loss）。不仅是失去，而是“不知道去向”的悬置感。 | 实在界: 存在的缺席。",
        coreEn: "Loss. Not just losing, but the suspension of 'not knowing where'. | The Real: Absence of existence.",
        logic: "主体系逻辑中产生了一个无法缝合的‘位置黑洞’。所有的 M5 寻找动作都必须伴随着一种‘在空荡荡的空间中扑空’的描写逻辑，不断强调缺失。",
        logicEn: "A 'location black hole' emerges that cannot be sutured. All M5 search actions must be paired with 'missing the target in empty space', emphasizing lack."
    },
    {
        id: "cog_mandela",
        name: "曼德拉效应", nameEn: "Mandela Effect",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现所有人的记忆都和你不一样，历史被篡改了。",
        defEn: "Finding everyone's memory differs from yours; history rewritten.",
        core: "集体的疯狂 vs 个体的清醒。是我疯了还是世界疯了？ | 实在界: 记忆的虚构。",
        coreEn: "Collective madness vs individual sanity. Me or world crazy? | The Real: Fiction of memory.",
        logic: "主体的 M4 锚点（常识）与集体的 M4 发生剧烈冲突。文本中必须表现出这种‘孤独的真相’如何使得所有的语际沟通（M4 链路）在逻辑上断裂。",
        logicEn: "Subject's M4 anchor (common sense) conflicts violently with the collective's. Text must show how this 'lonely truth' logically breaks all inter-linguistic communications (M4 links)."
    },
    {
        id: "cog_doppelganger",
        name: "双重身", nameEn: "Doppelgänger",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "在街角看到了另一个自己。",
        defEn: "Seeing another self at the street corner.",
        core: "独特性的丧失。恐怖谷效应。如果他在那，那我是谁？ | 实在界: 自我的分裂。",
        coreEn: "Loss of uniqueness. Uncanny valley. If he's there, who am I? | The Real: Splitting of the self.",
        logic: "主体被定义为‘可替代的复本’。其唯一地位（M1 的排他性）由于 M2 的视觉出现而坍塌。强制执行一种‘身份吞噬’逻辑——两者的行动趋向于同步。",
        logicEn: "Subject defined as 'replaceable copy'. Its unique status (M1 exclusivity) collapses due to M2's visual appearance. Enforce 'identity devouring'—actions tend to sync."
    },
    {
        id: "cog_prophecy",
        name: "死亡预言", nameEn: "The Prophecy",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "算命师、AI或神秘人准确预言了你的死亡时间。",
        defEn: "Fortune-teller, AI, or stranger accurately predicting your death date.",
        core: "宿命论的重压。未来的确定性杀死了现在的自由。 | 实在界: 命运的锁定。",
        coreEn: "Weight of fatalism. Future certainty kills present freedom. | The Real: Locking of destiny.",
        logic: "主体的‘未来时序（Slot1、M1）’被锁死。文本逻辑转变为一种‘通往终点的倒计时’描写，所有的 M5 动作都必须被赋予一种‘无力反抗宿命’的讽刺色调。",
        logicEn: "Subject's 'future timing (Slot1, M1)' is locked. Text logic turns into a 'countdown to the end'; every M5 action must carry an ironic tone of 'impotent resistance to fate'."
    },
    {
        id: "cog_voice",
        name: "听见幻听", nameEn: "The Voice",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "脑海里出现不属于自己的声音，下达指令。",
        defEn: "Voices in your head, not your own, issuing commands.",
        core: "精神分裂的开端。主体被寄生，主权丧失。 | 实在界: 内部的他者。",
        coreEn: "Beginning of schizophrenia. Subject parasitized; loss of sovereignty. | The Real: Internal Other.",
        logic: "主体的 M0 OS 受到外部能指流的‘内部溢出’。行动 M5 处于‘主体的意志’与‘外来意志’的随机博弈中，其对话台词必须包含大量的自言自语。",
        logicEn: "Subject's M0 OS suffers from 'internal overflow' of external signifier streams. M5 actions are in a random game between 'Subject Will' and 'Foreign Will'; dialogue must include extensive soliloquies."
    },
    {
        id: "cog_conspiracy",
        name: "发现阴谋", nameEn: "Conspiracy",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "无意中看到了不该看的文件或会议。",
        defEn: "Accidentally seeing documents or meetings not for your eyes.",
        core: "世界的后台被揭开。日常生活的表面下是巨大的谎言。 | 实在界: 结构的恶意。",
        coreEn: "World's backstage revealed. Huge lies beneath daily surface. | The Real: Structural malice.",
        logic: "主体的 Slot0（环境视野）突然具有了‘多重语义’（透视性）。所有的日常生活 M5 都必须附带一种‘对背后深意的过度解析（妄想症）’，破坏正常的叙事推进。",
        logicEn: "Subject's Slot0 (Environmental Vision) suddenly gains 'multiple semantics' (perspective). All daily M5 must involve 'over-analysis of hidden meanings (paranoia)', disrupting normal narrative progress."
    },
    {
        id: "cog_wrong_reality",
        name: "误入异界", nameEn: "Wrong Reality",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "回家发现家具位置反了，或者家人不认识自己。",
        defEn: "Home furniture reversed, or family doesn't recognize you.",
        core: "平行宇宙。熟悉的陌生感 (The Uncanny)。 | 实在界: 家园的异化。",
        coreEn: "Parallel universe. The Uncanny. Alienation of home. | The Real: Alienation of Homeland.",
        logic: "对‘最熟悉处（M4 的基石）’的异化。强制使用一种描述‘错位’的文本逻辑（例如镜像描写），主体在这种环境下由于无法建立‘认同感’而持续丧失生命力。",
        logicEn: "Alienating the 'most familiar (Pillar of M4)'. Forcibly use text logic describing 'displacement' (e.g., mirror descriptions); subject loses vitality due to inability to establish 'identification'."
    },
    {
        id: "cog_gaslighting",
        name: "煤气灯操纵", nameEn: "Gaslighting",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "被周围人不断告知你的记忆是错的，你是疯子。",
        defEn: "Constantly told your memory is wrong, you are crazy.",
        core: "认知抹杀。对理性的自信被系统性摧毁。 | 实在界: 真理的动摇。",
        coreEn: "Cognitive erasure. Confidence in rationality systematically destroyed. | The Real: Shaking of truth.",
        logic: "主体系逻辑中所有的‘记忆权标’在对比集（M4）中均被返回‘谬误’。主体的任何逻辑输出（M1 -> M5）都必须在文本中被他者的‘关切/否定’而中和掉。",
        logicEn: "All 'memory tokens' in the system's logic return 'error' in comparison sets (M4). Any subject logical output (M1 -> M5) must be neutralized in the text by Others' 'concern/denial'."
    },
    {
        id: "cog_time_loop",
        name: "时间循环", nameEn: "Time Loop",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "醒来发现日期重置，同一天重复开始。",
        defEn: "Waking to find the date reset, the same day repeating.",
        core: "因果律失效。没有未来，只有永恒的现在。 | 实在界: 时间的监狱。",
        coreEn: "Causality failure. No future, only eternal present. | The Real: Prison of time.",
        logic: "叙事逻辑强制性地拒绝 M6（结果/反馈）。主体所有的 M5 努力在次日的‘清零逻辑’面前表现出极端虚无性。实在界表现为这种‘不可逃脱的重复’。",
        logicEn: "Narrative logic forcibly rejects M6 (Result/Feedback). All M5 efforts exhibit extreme nihilism before the next day's 'reset logic'. The Real manifests as this 'inescapable repetition'."
    },
    {
        id: "cog_imposter_syndrome",
        name: "冒充者恐惧", nameEn: "Imposter",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "突然确信自己是一个骗子，所有成就都是运气。",
        defEn: "Suddenly convinced you're a fraud; all achievements lucky.",
        core: "自我价值的崩塌。害怕被大他者拆穿的焦虑。 | 实在界: 能力的虚构。",
        coreEn: "Self-worth collapse. Anxiety of being exposed by the Other. | The Real: Fictionality of ability.",
        logic: "主体的 M1 产生‘虚空自我认同’。主体的动作 M5 必须被赋予一种‘在冰上行走’的小心翼翼感，逻辑核心在于这种由于‘缺乏根基’导致的极速跌落感。",
        logicEn: "M1 subject produces 'empty self-identification'. M5 actions must bear the 'walking on ice' caution; logic centers on this rapid falling sensation due to 'lack of ground'."
    },
    {
        id: "cog_language_loss",
        name: "失语症", nameEn: "Aphasia",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "突然听不懂别人的语言，或者无法说话。",
        defEn: "Suddenly can't understand others' language or can't speak.",
        core: "符号界的驱逐。无法进入意义的交换系统。 | 实在界: 语言的断裂。",
        coreEn: "Expulsion from the Symbolic. Cannot enter meaning exchange. | The Real: Rupture of language.",
        logic: "禁止主体的台词逻辑（Slot6 离线）。所有的叙事转为一种纯粹的、无声的物理动作描写，强调符号（语言）崩溃后留下的那种具有‘原始暴力感’的静默。",
        logicEn: "Disable subject dialogue logic (Slot6 offline). All narrative shifts to pure, silent physical action descriptions, emphasizing the 'primordially violent' silence after the collapse of symbols (language)."
    },
    {
        id: "cog_idol_fall",
        name: "偶像崩塌", nameEn: "Idol Fall",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "崇拜的导师/父亲被揭露是罪犯或伪君子。",
        defEn: "Worshipped mentor/father exposed as a criminal or fraud.",
        core: "理想我（Ideal Ego）的破碎。精神支柱的断裂。 | 实在界: 父亲的堕落。",
        coreEn: "Shattering of Ideal Ego. Rupture of spiritual pillar. | The Real: Fall of the Father.",
        logic: "作为‘理想化镜像’的 M4 遭到物理粉碎。主体的 M1 必须通过对该偶像的‘逆向亵渎’或‘剧烈模仿’来尝试填补那个原本作为精神支柱的空洞。",
        logicEn: "Physical shattering of M4 as 'idealized mirror'. Subject's M1 must attempt to fill the spiritual pillar void through 'reverse desecration' or 'intense imitation' of the idol."
    },
    {
        id: "cog_murder_witness",
        name: "目击谋杀", nameEn: "The Witness",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "透过窗户或门缝，看到了凶杀现场。",
        defEn: "Seeing a murder through a window or door crack.",
        core: "纯真的丧失。被迫卷入暴力的因果链条。 | 实在界: 罪恶的注视。",
        coreEn: "Loss of innocence. Forced into the causality chain of violence. | The Real: Gaze of evil.",
        logic: "视线（Gaze）的创伤逻辑。主体在 M2 中的‘看见’导致了其 M1 与‘暴力真实界面’的对接，被迫取消所有‘日常生活’的平静逻辑权重。",
        logicEn: "Traumatic logic of the Gaze. The 'seeing' in M2 connects M1 with the 'inter-face of violent Real', forcing the cancellation of all 'daily life' peaceful logic weightings."
    },
    {
        id: "cog_forbidden_desire",
        name: "禁忌觉醒", nameEn: "Taboo",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "意识到自己爱上了不该爱的人（乱伦/仇人/同性）。",
        defEn: "Realizing you love someone taboo (incest/enemy/same-sex).",
        core: "欲望与律法的冲突。内在的冲动对抗外在的规则。 | 实在界: 欲望的越界。",
        coreEn: "Conflict of desire and Law. Inner impulse vs outer rules. | The Real: Transgression of desire.",
        logic: "主体系逻辑中‘原乐（Jouissance）’冲出 M4 进行违规扩张。所有的 M5 动作都必须包含一种‘对律法的挑衅与恐惧’的共振描写，产生剧烈的排异反应逻辑。",
        logicEn: "Jouissance bursts from M4 for illegal expansion in logic. All M5 actions must include a resonant description of 'provocation and fear of the Law', generating intense rejection logic."
    },
    {
        id: "cog_fake_world",
        name: "楚门的世界", nameEn: "Truman Show",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现天空是画出来的，或者周围人是演员。",
        defEn: "Finding the sky is painted, or people are actors.",
        core: "被监视的客体。生活是一场巨大的表演。 | 实在界: 存在的虚假。",
        coreEn: "Monitored object. Life as a grand performance. | The Real: Falsity of existence.",
        logic: "空间的‘舞台化’逻辑。所有的背景元素（Slot4）被标记为‘道具’。主体的 M5 不再是对现实的改变，而变成了对这种‘虚构墙壁’的触碰与挑战。",
        logicEn: "Spatial 'staging' logic. All background elements (Slot4) marked as 'props'. M5 is no longer about changing reality but touching and challenging these 'fictional walls'."
    },
    {
        id: "cog_diary_read",
        name: "被读日记", nameEn: "Exposed",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现有人读了你最私密的日记。",
        defEn: "Finding someone read your most private diary.",
        core: "内心世界的强行曝光。精神上的强奸。 | 实在界: 隐私的死亡。",
        coreEn: "Forced exposure of inner world. Psychic violation. | The Real: Death of privacy.",
        logic: "主体的 M0（最后堡垒）由于象征（文字）的泄露而失阈。主体的所有叙事内部独白在逻辑上必须由于‘羞耻感’而发生扭曲或变得难以理解。",
        logicEn: "Subject's M0 (last fortress) loses threshold due to signifier (text) leak. All internal narrative monologues must logically distort or become unintelligible due to 'shame'."
    },
    {
        id: "cog_sleepwalking",
        name: "梦游行凶", nameEn: "Sleepwalking",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "醒来发现手上拿着刀，但毫无记忆。",
        defEn: "Waking with a knife but no memory.",
        core: "潜意识的接管。我身体里的那个“它”做了什么？ | 实在界: 主体的缺席。",
        coreEn: "Subconscious takeover. What did the 'It' in me do? | The Real: Absence of Subject.",
        logic: "主体的 M1 被划分为‘Slot1 时刻’与‘睡眠时刻’的回避冲突。叙事重点在于这种‘身体主权的不可知空白’。主体在逻辑上的无辜感与其结果的罪恶感的割裂描写。",
        logicEn: "Subject's M1 split into 'Slot1 Moment' and 'Sleep Moment' avoidance conflict. Focus on the 'unknowable void of bodily sovereignty'. Divide between logical innocence and resulting guilt."
    }
];
