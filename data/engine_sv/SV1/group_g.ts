import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_G: LibraryCategoryDef = {
  id: 'cat_sv1_avantgarde_sensory',
  name: `先锋·感官·梦境`,
  nameEn: 'Avant-garde / Sensory / Dream',
  items: [
    {
      id: 'WAITING',
      name: '静态等待',
      nameEn: 'Static Waiting / Beckettian Stasis',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '等待戈多式结构。角色在等待某事发生（或不发生），叙事的驱动力不是行动而是等待本身的质感——无聊、焦虑、微互动、时间的凝滞。什么都没发生，但一切都在发生。',
      defEn: "Beckettian structure. Characters wait for something to happen (or not). Narrative drive is not action but the texture of waiting itself — boredom, anxiety, micro-interactions, time's congealment. Nothing happens, yet everything happens.",

      core: `【场景排列】叙事由「等待的各个阶段」组成，而非事件序列。M1=等待开始——角色到达等待的场所（车站/医院走廊/空房间/路边），等待的对象被说明或暗示（某个人/某个结果/某个信号/某个不确定的东西）。空间被建立为一个封闭或半封闭的「等待容器」。M2=第一阶段·乐观等待——角色相信等待很快会结束。他们消磨时间的方式带着从容感（看表/看风景/闲聊）。节奏正常。M3=第二阶段·焦虑渗透——时间开始变慢。角色的消磨方式变得机械（反复看表/来回踱步/无意义地整理物品）。空间开始收缩——之前没注意到的细节变得刺眼（墙上的裂缝/灯管的嗡嗡声/椅子的硬度）。M4=第三阶段·微互动——角色之间（或角色与空间之间）开始产生微小的互动——一段无意义的对话/一个游戏/一次争吵/一次沉默的对视。这些互动不推动任何情节，但揭示人物的深层状态。M5=第四阶段·崩溃边缘——等待的荒谬性被充分感知。角色开始质疑等待本身（为什么还在等？等的东西真的会来吗？不等会怎样？）。时间感知彻底扭曲——一分钟像一小时。M6=虚假信号——似乎等待要结束了（一个声音/一个人影/一个电话），但是虚惊。角色被打回等待状态，但状态已经不同了——他们现在知道等待可能永远不会结束。M7=等待的结局（三种可能）：a)等待的对象到来但已无意义——等待本身消耗了等待的意义。b)等待的对象永远没来——角色仍在等。c)角色离开了——但离开本身也不构成解决，只是另一种形式的等待的开始。
【信息规则】等待的对象可以是模糊的——观众不需要确切知道在等什么，重要的是「等待」这个状态本身。时间信息是最重要的叙事材料——几点了/过了多久/还要等多久，这些信息的精确度随着等待的深入而降低（从「还有十分钟」到「不知道」）。空间信息随等待加深而增密——角色对等待空间的感知越来越细（开始注意到之前没看到的东西），但这些信息不服务于任何情节。
【M参数映射】M1=等待的空间和对象。M2=正常时间感中的等待。M3=时间变形开始。M4=人际互动作为等待的副产品。M5=等待的存在论危机。M6=虚假信号与落空。M7=等待的结局或非结局。
【结构比例】乐观等待(M1-M2)≈15% / 焦虑渗透(M3)≈20% / 微互动(M4)≈25% / 崩溃边缘(M5)≈20% / 虚假信号+结局(M6-M7)≈20%
【禁忌】严禁让等待中发生「真正的事件」——如果有外部事件打断等待，结构就退化为普通三幕剧。严禁让等待有明确的截止时间——「五点钟火车到」式的明确性会消解等待的存在论重量。严禁让角色在等待中获得成长/领悟——等待不教你任何东西，它只消耗你。严禁加速——等待的节奏必须接近实时，让观众也体验到等待的质感。`,

      coreEn: `[Scene Order] Narrative composed of 'phases of waiting,' not event sequence. M1=waiting begins — characters arrive at waiting place (station/hospital corridor/empty room/roadside), object of waiting stated or implied. Space established as a closed or semi-closed 'waiting container.' M2=Phase1·optimistic waiting — character believes wait will end soon. Time-killing is relaxed (checking watch/looking around/chatting). Normal rhythm. M3=Phase2·anxiety seeps in — time slows. Time-killing becomes mechanical (repeatedly checking watch/pacing/meaninglessly rearranging objects). Space contracts — previously unnoticed details become glaring (crack in wall/fluorescent hum/chair hardness). M4=Phase3·micro-interactions — small interactions between characters (or character and space) — meaningless conversation/a game/an argument/silent eye contact. These advance no plot but reveal deep character states. M5=Phase4·edge of collapse — waiting's absurdity fully perceived. Character questions waiting itself (why still waiting? will it come? what if I stop?). Time perception fully distorted — one minute feels like an hour. M6=false signal — wait seems about to end (a sound/a figure/a phone call), but false alarm. Character thrown back into waiting, but changed — they now know waiting might never end. M7=waiting's end (three possibilities): a) object arrives but is now meaningless — waiting consumed its own meaning. b) object never comes — character still waits. c) character leaves — but leaving is not resolution, just another form of waiting beginning.
[Info Rule] Object of waiting can be vague — audience need not know exactly what's awaited; the state of 'waiting' itself matters. Time info is the most important narrative material — what time/how long/how much longer, precision decreasing as waiting deepens (from 'ten more minutes' to 'no idea'). Spatial info intensifies with waiting — character perceives waiting space in ever-finer detail, but this info serves no plot.
[M-Param Mapping] M1=waiting space and object. M2=waiting in normal time. M3=time distortion begins. M4=interpersonal interaction as waiting's byproduct. M5=existential crisis of waiting. M6=false signal and letdown. M7=waiting's ending or non-ending.
[Proportions] Optimistic(M1-M2)≈15% / Anxiety(M3)≈20% / Micro-interaction(M4)≈25% / Collapse edge(M5)≈20% / False signal+ending(M6-M7)≈20%
[Prohibitions] No 'real events' during waiting — external events breaking the wait degrade structure to standard three-act. No definite deadline — 'train at 5pm' certainty dissolves waiting's existential weight. No growth/insight from waiting — waiting teaches nothing, it only consumes. No acceleration — waiting's rhythm must approach real-time so audience feels the texture.`,

      skeletons: [
        'waiting_begins_等待开始',
        'time_distortion_时间变形',
        'micro_interaction_微互动',
        'false_signal_虚假信号',
        'non_ending_非结局',
      ],

      reference: '贝克特《等待戈多》(Waiting for Godot)；阿基·考里斯马基(Kaurismäki)；吉姆·贾木许《神秘列车》(Mystery Train)；蔡明亮《你那边几点》(What Time Is It There?)',
      referenceEn: 'Beckett, Waiting for Godot; Kaurismäki films; Jarmusch, Mystery Train; Tsai Ming-liang, What Time Is It There?',
    },

    {
      id: 'DREAM_LOGIC',
      name: '梦逻辑',
      nameEn: 'Dream Logic / Oneiric Narrative',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '超现实叙事结构。空间变形、身份流动、时间非线性。因果关系被潜意识关联（凝缩/置换/象征化）取代。叙事不遵循物理法则而遵循梦的法则。',
      defEn: "Surrealist narrative structure. Space morphs, identity flows, time is non-linear. Causality replaced by unconscious associations (condensation/displacement/symbolization). Narrative follows dream-logic, not physics.",

      core: `【场景排列】场景之间的连接不是因果而是「梦的逻辑」——凝缩(condensation)：两个不相关的元素融合为一（一个人同时是母亲和陌生人/一个房间同时是教室和法庭）。置换(displacement)：重要的情感转移到无关紧要的物件上（全部焦虑集中在一把钥匙/一只鞋/一个数字上）。象征化(symbolization)：抽象状态变为具象场景（被追赶=焦虑/牙齿脱落=失控/飞行=欲望）。
M1=表面世界——一个看似正常的场景，但有一个「不对」的细节（光线的角度不可能/人物的影子朝错误的方向/一个不该在这里的物件）。这个细节是梦的入口标记。M2=第一次变形——空间开始不服从物理法则（走廊无限延长/房间的门打开后是另一个房间的天花板/窗外的风景每次看都不同）。角色可能不觉得异常——梦中人不知道自己在做梦。M3=身份流动——角色的身份开始不稳定（面孔变化/说着别人的台词/发现自己在一个从未去过但完全熟悉的地方）。「我是谁」的边界溶解。M4=欲望场景——梦的核心——一个被压抑的欲望/恐惧以具象化的方式呈现（一个不可能的重逢/一个被放大到荒谬的日常场景/一个从未发生但像记忆一样真实的事件）。M5=梦的逻辑高潮——所有之前的变形和象征汇聚成一个不可能的场景——一个在清醒时绝对不可能存在的时刻，但在梦中拥有绝对的真实感。M6=开始醒来（或拒绝醒来）——世界开始闪烁/边缘模糊/声音失真。角色可能意识到这是梦（lucid moment），面临选择：继续留在梦中还是醒来。M7=醒来（或永远没醒来）——如果醒来：回到M1的空间但某个细节永久改变了。如果没醒来：梦的世界成为新的现实。
【信息规则】信息不遵循逻辑一致性——同一个事实可以同时为真和为假。角色知道又不知道某件事。过去和未来可以同时发生。核心机制是「情感一致性」代替「逻辑一致性」——场景之间的连接不需要逻辑上说得通，但情感上必须是同一条线（都指向同一个欲望/同一个恐惧/同一个创伤）。梦中的对话服从诗的逻辑而非散文的逻辑——跳跃、重复、断裂、非sequitur。
【M参数映射】M1=梦的入口/表面现实。M2=空间变形开始。M3=身份边界溶解。M4=核心欲望/恐惧场景。M5=梦的逻辑高潮（不可能场景）。M6=醒来的阈值。M7=醒来或永远留在梦中。
【结构比例】入口(M1)≈10% / 变形+流动(M2-M3)≈30% / 欲望场景(M4)≈25% / 梦高潮(M5)≈15% / 醒来(M6-M7)≈20%
【禁忌】严禁在梦中使用因果逻辑——「因为A所以B」是清醒逻辑，梦中用「A然后突然B」。严禁让角色在梦中分析梦——「这一定象征着什么」是清醒的行为。严禁在M7解释梦的含义——梦不需要被翻译。严禁让梦中的恐惧是具体的外部威胁（怪物/杀手）——梦的恐惧是氛围性的、无名的、从空间本身渗出的。`,

      coreEn: `[Scene Order] Scene connections follow dream-logic, not causality — Condensation: two unrelated elements fuse (a person is simultaneously mother and stranger/a room is both classroom and courtroom). Displacement: important emotion transfers to irrelevant object (all anxiety focused on a key/a shoe/a number). Symbolization: abstract states become concrete scenes (being chased=anxiety/teeth falling=loss of control/flying=desire).
M1=surface world — seemingly normal scene with one 'wrong' detail (impossible light angle/shadow facing wrong way/object that shouldn't be here). This detail marks the dream's entrance. M2=first morphing — space stops obeying physics (corridor extends infinitely/door opens to another room's ceiling/view from window changes each time). Character may not notice — dreamers don't know they're dreaming. M3=identity flow — character's identity destabilizes (face changes/speaking others' lines/finding oneself in a never-visited but completely familiar place). Boundaries of 'who am I' dissolve. M4=desire scene — dream's core — a repressed desire/fear manifested concretely (impossible reunion/daily scene amplified to absurdity/event that never happened but feels like memory). M5=dream-logic climax — all prior morphings and symbols converge into an impossible scene — a moment absolutely impossible while awake, but possessing absolute reality within the dream. M6=beginning to wake (or refusing to) — world starts flickering/edges blur/sounds distort. Character may realize it's a dream (lucid moment), facing choice: stay in dream or wake. M7=waking (or never waking) — if waking: return to M1's space but one detail permanently changed. If not waking: dream-world becomes new reality.
[Info Rule] Information doesn't follow logical consistency — same fact can be simultaneously true and false. Character knows and doesn't know something. Past and future can happen simultaneously. Core mechanism: 'emotional consistency' replaces 'logical consistency' — scene connections need not be logically coherent but must follow the same emotional thread (pointing to same desire/fear/trauma). Dream dialogue follows poetic logic, not prose logic — leaps, repetition, rupture, non-sequitur.
[M-Param Mapping] M1=dream entrance/surface reality. M2=spatial morphing begins. M3=identity boundary dissolution. M4=core desire/fear scene. M5=dream-logic climax (impossible scene). M6=waking threshold. M7=waking or staying forever.
[Proportions] Entrance(M1)≈10% / Morphing+flow(M2-M3)≈30% / Desire scene(M4)≈25% / Dream climax(M5)≈15% / Waking(M6-M7)≈20%
[Prohibitions] No causal logic in dream — 'because A therefore B' is waking logic; dream uses 'A then suddenly B.' No dream-analysis within the dream — 'this must symbolize something' is waking behavior. No explaining dream's meaning in M7 — dreams don't need translation. Dream-fear must not be concrete external threat (monster/killer) — dream-fear is atmospheric, nameless, seeping from space itself.`,

      skeletons: [
        'dream_entrance_梦的入口',
        'spatial_morphing_空间变形',
        'desire_scene_欲望场景',
        'waking_threshold_醒来的阈值',
      ],

      reference: '大卫·林奇《穆赫兰道》(Mulholland Drive)；布努埃尔《一条安达鲁狗》(Un Chien Andalou)；今敏《红辣椒》(Paprika)；塔可夫斯基《镜子》(Mirror)',
      referenceEn: 'Lynch, Mulholland Drive; Buñuel, Un Chien Andalou; Kon Satoshi, Paprika; Tarkovsky, Mirror',
    },

    {
      id: 'KAFKAESQUE',
      name: '卡夫卡荒谬',
      nameEn: 'Kafkaesque Absurd',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '世界的运行规则完全无逻辑但所有角色严肃对待。主角试图在一个不可理解的系统中完成一件看似简单的事，却不断被荒谬的规则、官僚程序、自相矛盾的权威阻挡。黑色幽默从绝望中自然生长。',
      defEn: "The world operates on completely illogical rules but all characters treat them seriously. Protagonist tries to accomplish something seemingly simple within an incomprehensible system, constantly blocked by absurd rules, bureaucratic procedures, and self-contradicting authorities. Black humor grows naturally from despair.",

      core: `【场景排列】M1=一个简单的目标——角色需要完成一件极其普通的事（拿到一份文件/进入一栋建筑/见一个人/确认一个事实）。角色本人是「正常」的——他的逻辑、情感、期望都符合常理。这建立了对比基准。M2=第一道荒谬墙——角色遇到第一个不可理解的障碍（需要填一份不存在的表格/被告知必须先完成尚未被通知的步骤/工作人员拒绝解释拒绝的原因）。关键：障碍不是恶意的，而是系统性的——执行规则的人也不理解规则，但严格执行。M3=绕道尝试——角色试图绕过障碍，却发现绕道本身引发了新的、更荒谬的障碍（询问另一个部门被告知需要第一个部门的批准/找到负责人发现负责人正在等待角色的许可）。系统的自我指涉性——每个节点都指向另一个节点，形成闭环。M4=荒谬升级——障碍不仅没减少反而倍增。角色越努力越陷越深——他的合理行为在这个系统中反而产生不合理的后果（投诉导致被调查/正确回答导致更多问题/沉默被视为承认）。M5=角色开始怀疑自己——最可怕的时刻不是系统荒谬，而是角色开始觉得也许是自己的问题——「也许规则是对的，是我不理解」。正常与荒谬的边界开始模糊。M6=荒谬的日常化——角色已经在系统中太久，开始适应荒谬——他不再觉得规则荒谬，开始用系统的逻辑思考。这是真正的恐惧——不是被系统压碎而是被系统吸收。M7=结局（两种可能）：a)角色最终「成功」了——但成功的方式比失败更荒谬（文件到手但已经不需要了/终于见到的人就是自己/门开了但里面什么都没有）。b)角色仍在系统中——没有出口，继续遵循荒谬的规则，而且不再觉得荒谬。
【信息规则】角色获得的每一条信息都是自相矛盾的或者与之前的信息冲突的。没有「可靠信息源」——每个权威都声称自己是对的但说法互相矛盾。信息越多越混乱——知道得越多离真相越远。系统的规则似乎存在但无人能完整陈述——每个人只知道自己那一环的规则。
【M参数映射】M1=正常人+简单目标。M2=第一道系统性荒谬。M3=绕道产生的新荒谬。M4=行动产生反效果。M5=自我怀疑——正常与荒谬的边界溶解。M6=被系统吸收。M7=荒谬的成功或无限循环。
【结构比例】目标建立(M1)≈10% / 第一道墙+绕道(M2-M3)≈25% / 荒谬升级(M4)≈25% / 自我怀疑+日常化(M5-M6)≈25% / 结局(M7)≈15%
【禁忌】严禁让系统有一个「幕后黑手」——荒谬不是阴谋，是系统的自然属性。严禁让角色「战胜系统」——英雄式突围会消解荒谬的存在论重量。严禁解释系统为什么荒谬——可解释的荒谬就不是荒谬。严禁让角色发疯——角色必须始终保持理性（正是理性在荒谬世界中的无效性构成了恐惧）。`,

      coreEn: `[Scene Order] M1=a simple goal — character needs to do something utterly ordinary (get a document/enter a building/see a person/confirm a fact). Character IS 'normal' — their logic, emotions, expectations are reasonable. This establishes contrast baseline. M2=first absurd wall — incomprehensible obstacle (must fill a nonexistent form/told to complete a step not yet notified/staff refuse to explain refusal). Key: obstacle is not malicious but systemic — rule enforcers don't understand the rules either, but enforce strictly. M3=detour attempt — trying to bypass creates new, more absurd obstacles (asking another department told need first department's approval/finding the person in charge who is waiting for character's permission). System's self-referentiality — every node points to another, forming a closed loop. M4=absurdity escalation — obstacles multiply. The harder character tries, the deeper they sink — reasonable actions produce unreasonable consequences (complaint triggers investigation/correct answer triggers more questions/silence treated as admission). M5=character begins doubting self — the most terrifying moment: not that the system is absurd, but character starts thinking maybe it's their own fault — 'maybe the rules ARE right, I just don't understand.' Normal/absurd boundary blurs. M6=absurdity becomes routine — character has been in system too long, starts adapting — no longer finds rules absurd, begins thinking in system's logic. The real horror — not being crushed by system but being absorbed. M7=ending (two possibilities): a) character 'succeeds' — but success is more absurd than failure (document obtained but no longer needed/person finally met is themselves/door opens to nothing). b) character remains in system — no exit, continuing to follow absurd rules, no longer finding them absurd.
[Info Rule] Every piece of info is self-contradictory or conflicts with prior info. No 'reliable source' — every authority claims correctness but statements contradict each other. More info = more confusion. System's rules seem to exist but no one can state them completely — each person knows only their own link's rules.
[M-Param Mapping] M1=normal person + simple goal. M2=first systemic absurdity. M3=detour generates new absurdity. M4=action produces counter-effect. M5=self-doubt — normal/absurd boundary dissolves. M6=absorbed by system. M7=absurd success or infinite loop.
[Proportions] Goal(M1)≈10% / First wall+detour(M2-M3)≈25% / Escalation(M4)≈25% / Self-doubt+normalization(M5-M6)≈25% / Ending(M7)≈15%
[Prohibitions] No 'mastermind' behind the system — absurdity is not conspiracy but system's natural property. No 'defeating the system' — heroic breakthrough dissolves absurdity's existential weight. No explaining why the system is absurd — explainable absurdity isn't absurd. No character going mad — character must remain rational throughout (it's precisely reason's ineffectiveness in an absurd world that constitutes the horror).`,

      skeletons: [
        'simple_goal_简单目标',
        'absurd_wall_荒谬之墙',
        'escalation_loop_升级循环',
        'self_doubt_自我怀疑',
        'absorption_or_loop_吸收或循环',
      ],

      reference: '卡夫卡《审判》(The Trial)；卡夫卡《城堡》(The Castle)；特瑞·吉列姆《巴西》(Brazil)；奉俊昊《寄生虫》(Parasite)部分段落',
      referenceEn: 'Kafka, The Trial; Kafka, The Castle; Gilliam, Brazil; Bong Joon-ho, Parasite (select passages)',
    },

    {
      id: 'HIGH_CONCEPT',
      name: '高概念寓言',
      nameEn: 'High Concept Parable',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '改变一条物理或社会规则（重力反转/人无法撒谎/记忆可交易/情感有颜色），然后严格推演这个改变对世界和人物的全部后果。概念本身是叙事的引擎——情节从规则的逻辑推演中自然生长。',
      defEn: "Change one physical or social rule (gravity inverts / people can't lie / memories are tradable / emotions have color), then rigorously extrapolate all consequences for world and characters. The concept itself is the narrative engine — plot grows naturally from logical deduction of the rule.",

      core: `【场景排列】M1=正常世界+规则揭示——先建立一个与现实世界高度相似的日常世界，然后在一个精确的时刻揭示「这个世界有一条不同的规则」。揭示可以是突然的（公告/事件）也可以是自然的（角色把这条规则当作理所当然，观众从细节中推断出来）。关键：只改变一条规则——不是一个全面的奇幻世界，而是「我们的世界+一个变量」。M2=规则的日常应用——展示这条规则如何影响普通人的日常生活。不是极端案例而是平凡案例——如果人无法撒谎，那他们怎么社交？如果记忆可交易，菜市场的记忆值多少？如果情感有颜色，地铁里是什么景象？M3=规则的社会结构——更大尺度的后果：这条规则如何塑造了法律/经济/阶层/权力结构？谁从这条规则中获益？谁受损？新的不平等如何产生？M4=规则的漏洞/边界案例——每条规则都有边界——极端情况下规则如何运作？是否有人试图绕过/利用/打破这条规则？漏洞的发现推动情节进入冲突。M5=规则与人性的碰撞——规则推演到极致时触碰到人性的核心——爱/自由/尊严/真实在这条规则下意味着什么？主角面临一个只有在这个世界中才会存在的道德困境。M6=选择的代价——在这条规则下做出选择的后果——因为规则的存在，代价的形式与现实世界不同。M7=新平衡或规则的重新认知——角色和观众对这条规则有了新的理解。不是取消规则而是学会在规则中活着。
【信息规则】规则本身必须在叙事前10%完全透明——不是悬念，而是前提。叙事的悬念来自「推演」而非「揭示」——观众知道规则是什么，但不知道规则的全部后果。角色对规则的态度必须多元——有人视为自然，有人试图反抗，有人从中牟利。规则的每一个后果都必须是逻辑上可推导的——不可出现「规则的意外效果」——所有效果都应该是观众事后想想能推出来的。
【M参数映射】M1=正常世界+唯一规则变量。M2=规则的日常层面。M3=规则的结构层面。M4=规则的漏洞/极端。M5=规则与人性的碰撞。M6=选择在规则中的代价。M7=对规则的新认知。
【结构比例】规则建立(M1-M2)≈25% / 社会推演(M3-M4)≈35% / 人性碰撞+代价+结局(M5-M7)≈40%
【禁忌】严禁改变超过一条规则——多规则变量会让推演失焦。严禁让规则有例外——「只有主角不受规则约束」会消解整个结构。严禁让规则被取消——「最后大家恢复正常」是对概念的背叛。严禁让规则只是背景——如果去掉这条规则故事仍然成立，那就不是高概念寓言。`,

      coreEn: `[Scene Order] M1=normal world + rule reveal — establish a world highly similar to reality, then at a precise moment reveal 'this world has one different rule.' Reveal can be sudden (announcement/event) or natural (characters take it for granted, audience infers from details). Key: change only ONE rule — not a full fantasy world, but 'our world + one variable.' M2=rule's daily application — how this rule affects ordinary people's daily life. Not extreme but mundane cases — if people can't lie, how do they socialize? If memories are tradable, what's a grocery memory worth? If emotions have color, what does the subway look like? M3=rule's social structure — larger-scale consequences: how has this rule shaped law/economy/class/power? Who benefits? Who suffers? How does new inequality emerge? M4=rule's loopholes/edge cases — every rule has boundaries — how does it work in extreme cases? Does anyone try to circumvent/exploit/break it? Loophole discovery drives plot into conflict. M5=rule vs. human nature — rule extrapolated to extremes touches human core — what do love/freedom/dignity/truth mean under this rule? Protagonist faces a moral dilemma that could only exist in this world. M6=cost of choice under the rule — consequences shaped differently by the rule's existence. M7=new equilibrium or rule re-cognition — character and audience gain new understanding. Not canceling the rule but learning to live within it.
[Info Rule] Rule must be fully transparent within first 10% — not suspense but premise. Narrative suspense comes from 'extrapolation' not 'revelation.' Character attitudes toward rule must be diverse — some accept, some resist, some profit. Every consequence must be logically derivable — no 'surprise effects' — all effects should be retrospectively deducible by audience.
[M-Param Mapping] M1=normal world + single rule variable. M2=rule's daily layer. M3=rule's structural layer. M4=rule's loopholes/extremes. M5=rule vs. humanity. M6=cost of choice within rule. M7=new cognition of rule.
[Proportions] Rule establishment(M1-M2)≈25% / Social extrapolation(M3-M4)≈35% / Human collision+cost+ending(M5-M7)≈40%
[Prohibitions] No changing more than one rule — multi-variable defocuses extrapolation. No exceptions to the rule — 'only protagonist is exempt' dissolves entire structure. No canceling the rule — 'everyone returns to normal' betrays the concept. Rule must not be mere background — if story works without the rule, it's not high concept.`,

      skeletons: [
        'rule_reveal_规则揭示',
        'daily_extrapolation_日常推演',
        'systemic_consequence_结构后果',
        'rule_vs_humanity_规则与人性',
        'living_within_the_rule_在规则中活着',
      ],

      reference: '《黑镜》(Black Mirror)系列；《楚门的世界》(The Truman Show)；萨拉马戈《失明症漫记》(Blindness)；特德·姜《你一生的故事》(Story of Your Life)',
      referenceEn: 'Black Mirror series; The Truman Show; Saramago, Blindness; Ted Chiang, Story of Your Life',
    },

    {
      id: 'KULESHOV',
      name: '库里肖夫蒙太奇',
      nameEn: 'Kuleshov Montage / Juxtaposition Engine',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '画面并置产生意义：A+B=C。单独的画面A无意义，单独的画面B无意义，但A与B的并置在观众心中产生第三种意义C。叙事不在画面之内而在画面之间——剪辑即叙事。',
      defEn: "Juxtaposition creates meaning: A+B=C. Image A alone is neutral, image B alone is neutral, but their juxtaposition produces a third meaning C in the viewer's mind. Narrative exists not within images but between them — editing IS narrative.",

      core: `【场景排列】叙事由一系列「并置对」(juxtaposition pairs)组成。每一对包含两个画面/场景，它们之间没有因果关系、没有时间连续性、没有空间相邻性——但它们的并置产生一个超越两者之和的意义。
M1=第一个并置对——建立「并置阅读」的规则。A画面（比如一张面孔）+ B画面（比如一碗汤）= C意义（饥饿）。观众学会了：不要在单个画面中寻找意义，意义在画面之间。M2=第二个并置对——使用同一个A画面（同一张面孔）+ 不同的B画面（比如一个棺材）= 不同的C意义（悲伤）。观众确认：意义不在画面中而在并置中。M3=并置序列——一系列并置对快速呈现，每对产生不同的C意义，这些C意义开始形成一个叙事弧——不是通过情节而是通过「意义的累积」。M4=复杂并置——A+B不再是简单的两个画面，而是两个场景/两段音乐/两种质感的并置。C意义变得更复杂、更暧昧、更多义。观众需要更多的认知参与来「完成」意义的建构。M5=对撞并置——两个相互矛盾的画面/场景被并置——美+丑/生+死/圣洁+亵渎。C意义不是A也不是B而是一种张力——一种不可调和的同时性。M6=意义翻转——之前建立的某个C意义被新的并置推翻——同一个A画面与新的B画面并置后，观众发现之前的C意义是误读。M7=最终并置——全片最后一个并置对，它回溯性地重新定义所有之前的并置关系。
【信息规则】单个画面必须是「中性」的——不携带固有的叙事信息。信息完全产生于画面之间的缝隙。观众是意义的共同创作者——叙事不给出答案，只给出材料（画面），意义（C）是观众在自己的认知中完成的。同一个并置对在不同观众那里可能产生不同的C意义——这不是缺陷而是特征。
【M参数映射】M1=第一个并置对（建立规则）。M2=变奏并置（确认规则）。M3=并置序列（意义积累）。M4=复杂并置（多义性）。M5=对撞并置（张力）。M6=意义翻转。M7=最终并置（回溯重定义）。
【结构比例】规则建立(M1-M2)≈20% / 序列+复杂(M3-M4)≈35% / 对撞+翻转(M5-M6)≈30% / 最终并置(M7)≈15%
【禁忌】严禁在画面内放置「解释性」元素（文字/旁白/角色的解说）——意义只能在画面之间产生。严禁让A和B有明显的逻辑关联——关联越弱，并置的创造力越强。严禁固定C意义——必须保留观众的阐释空间。严禁只用视觉——声音、音乐、质感的并置同样有效。`,

      coreEn: `[Scene Order] Narrative composed of 'juxtaposition pairs.' Each pair contains two images/scenes with no causal relation, no temporal continuity, no spatial adjacency — but their juxtaposition creates meaning exceeding their sum.
M1=first pair — establishes 'juxtaposition reading' rule. Image A (e.g., a face) + Image B (e.g., a bowl of soup) = Meaning C (hunger). Audience learns: don't seek meaning within single images; meaning exists between them. M2=second pair — same A image (same face) + different B (e.g., a coffin) = different C (grief). Audience confirms: meaning is in juxtaposition, not in images. M3=juxtaposition sequence — rapid series of pairs, each producing different C meaning; these C meanings form a narrative arc through 'meaning accumulation,' not plot. M4=complex juxtaposition — A+B no longer simple images but two scenes/two musics/two textures. C meaning becomes more complex, ambiguous, polysemous. Audience needs more cognitive participation to 'complete' meaning construction. M5=collision juxtaposition — two contradictory images/scenes juxtaposed — beauty+ugliness/life+death/sacred+profane. C meaning is neither A nor B but a tension — an irreconcilable simultaneity. M6=meaning reversal — a previously established C meaning overturned by new juxtaposition — same A with new B reveals prior C was misreading. M7=final juxtaposition — the last pair retroactively redefines all prior juxtaposition relationships.
[Info Rule] Single images must be 'neutral' — carrying no inherent narrative info. Info produced entirely in gaps between images. Audience co-creates meaning — narrative provides material (images), meaning (C) is completed in viewer's cognition. Same pair may produce different C for different viewers — feature, not bug.
[M-Param Mapping] M1=first pair (establish rule). M2=variation pair (confirm rule). M3=juxtaposition sequence (meaning accumulation). M4=complex juxtaposition (polysemy). M5=collision juxtaposition (tension). M6=meaning reversal. M7=final juxtaposition (retroactive redefinition).
[Proportions] Rule establishment(M1-M2)≈20% / Sequence+complex(M3-M4)≈35% / Collision+reversal(M5-M6)≈30% / Final juxtaposition(M7)≈15%
[Prohibitions] No 'explanatory' elements within images (text/voiceover/character exposition) — meaning only between images. No obvious logical connection between A and B — weaker the connection, stronger the creative juxtaposition. No fixing C meaning — must preserve audience's interpretive space. Not visual only — sound, music, texture juxtapositions equally valid.`,

      skeletons: [
        'first_pair_第一个并置',
        'sequence_accumulation_序列积累',
        'collision_pair_对撞并置',
        'final_juxtaposition_最终并置',
      ],

      reference: '库里肖夫实验(Kuleshov Effect)；爱森斯坦《战舰波将金号》(Battleship Potemkin)；戈达尔《精疲力尽》(Breathless)；克里斯·马克《堤》(La Jetée)',
      referenceEn: 'Kuleshov Effect experiment; Eisenstein, Battleship Potemkin; Godard, Breathless; Chris Marker, La Jetée',
    },

    {
      id: 'SILENT',
      name: '默片纯视觉',
      nameEn: 'Silent / Pure Visual Narrative',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '零对白叙事。故事完全通过肢体语言、面部表情、构图、光影、运动、音效和音乐讲述。语言的缺席迫使视觉承载全部叙事功能——每一帧都是一个叙事单位。',
      defEn: "Zero-dialogue narrative. Story told entirely through body language, facial expression, composition, light/shadow, movement, sound design, and music. Language's absence forces visuals to carry all narrative weight — every frame is a narrative unit.",

      core: `【场景排列】场景排列由「视觉动词」驱动——每个场景的核心不是「说了什么」而是「做了什么」和「看到了什么」。
M1=视觉建立——通过环境、光线、空间比例建立世界的基调和角色的状态。不是「展示角色在做什么」而是「让观众感受到空间的重量/光线的温度/角色的体积」。开场的构图定义全片的视觉语法。M2=动作引入——一个可见的动作打破M1的静态——角色走向某处/拿起某物/一个外部物件进入画面。这个动作不需要解释——观众从动作的方向、速度、力度读取意图。M3=关系可视化——如果有两个角色：他们之间的空间距离=情感距离。靠近/远离/面对面/背对背，每个空间配置都是叙事信息。如果只有一个角色：角色与空间的关系（被空间包围/与空间对抗/在空间中迷失）传达内在状态。M4=视觉升级——动作的幅度/速度/密度增加。或者相反——动作的极度缩减（一个越来越小的手势/越来越慢的步伐）制造张力。构图从稳定走向不稳定（倾斜/失焦/极端角度）。M5=视觉高潮——全片视觉信息密度最高的一刻——一个动作/一个表情/一个构图承载了前面所有积累的情感重量。这一刻必须是一个静帧也能传达故事的时刻。M6=视觉代价——高潮之后的画面变化——光线变了/空间变了/角色的姿态变了。代价不是被说出来的而是被看到的。M7=视觉落点——最后一帧与第一帧形成对比——相同的构图元素但关键变量改变（光线方向/角色位置/空间的开放或封闭/物件的有无）。
【信息规则】所有信息必须是可看见的——内心世界通过外部表征传达（手的颤抖=紧张/视线方向=欲望/身体的蜷缩=恐惧/背部的僵硬=倔强）。声音设计替代对白成为「第二叙事层」——环境音（风/雨/机器/脚步）承载情绪，音乐承载节奏。字卡(如果使用)仅限于时间/地点等最基本的定位信息，严禁用于传达情节或情感。道具和物件是「沉默的台词」——一杯没喝完的水/一把空椅子/一面起雾的镜子，每个物件都是一个叙事信号。
【M参数映射】M1=空间+光线+角色姿态。M2=第一个叙事动作。M3=关系的空间配置。M4=动作的升级或缩减。M5=视觉的高潮帧。M6=视觉的代价帧。M7=首尾对比帧。
【结构比例】视觉建立(M1)≈15% / 动作+关系(M2-M3)≈25% / 视觉升级(M4)≈25% / 高潮+代价+落点(M5-M7)≈35%
【禁忌】严禁使用任何对白——包括画外音、旁白、字幕对话。严禁用字卡传达情节信息——如果必须用字卡才能让观众理解，说明视觉叙事失败了。严禁让音乐「解释」画面——音乐和画面应该是两条独立的信息流，它们的并置产生第三层意义（同库里肖夫原理）。严禁连续静止——默片不是幻灯片，即使在最安静的时刻也必须有微运动（呼吸/风/光线移动）。`,

      coreEn: `[Scene Order] Scenes driven by 'visual verbs' — each scene's core is 'what was done/seen,' not 'what was said.'
M1=visual establishment — world's tone and character's state built through environment, light, spatial proportions. Not 'showing what character does' but 'letting audience feel space's weight/light's temperature/character's volume.' Opening composition defines the film's visual grammar. M2=action introduction — a visible action breaks M1's stasis — character walks somewhere/picks something up/external object enters frame. Action needs no explanation — audience reads intent from direction, speed, force. M3=relationship visualization — two characters: spatial distance = emotional distance. Approaching/retreating/face-to-face/back-to-back, each configuration is narrative info. One character: relationship with space (surrounded/resisting/lost in space) conveys inner state. M4=visual escalation — action amplitude/speed/density increases. Or opposite: extreme reduction (ever-smaller gesture/ever-slower pace) creates tension. Composition moves from stable to unstable (tilt/defocus/extreme angle). M5=visual climax — highest visual info density — one action/expression/composition carries all accumulated emotional weight. Must work even as a single still frame. M6=visual cost — post-climax image change: light changed/space changed/character's posture changed. Cost is seen, not spoken. M7=visual landing — last frame contrasts first frame — same compositional elements but key variable changed (light direction/character position/space open-or-closed/object presence-or-absence).
[Info Rule] All info must be visible — inner world conveyed through external signs (hand tremor=tension/gaze direction=desire/body curling=fear/rigid back=stubbornness). Sound design replaces dialogue as 'second narrative layer' — ambient sound carries emotion, music carries rhythm. Title cards (if used) limited to time/place basics only, never plot or emotion. Props are 'silent lines' — half-drunk water/empty chair/fogged mirror, each object is a narrative signal.
[M-Param Mapping] M1=space+light+posture. M2=first narrative action. M3=spatial configuration of relationship. M4=action escalation or reduction. M5=visual climax frame. M6=visual cost frame. M7=first-last frame contrast.
[Proportions] Visual establishment(M1)≈15% / Action+relationship(M2-M3)≈25% / Visual escalation(M4)≈25% / Climax+cost+landing(M5-M7)≈35%
[Prohibitions] No dialogue — including voiceover, narration, subtitle dialogue. No title cards for plot info — if needed for comprehension, visual narrative has failed. No music 'explaining' images — music and image must be independent info streams whose juxtaposition creates third-layer meaning (Kuleshov principle). No continuous stillness — silent film is not slideshow; even in quietest moments, micro-movement required (breathing/wind/light shift).`,

      skeletons: [
        'visual_establishment_视觉建立',
        'action_and_relation_动作与关系',
        'visual_climax_视觉高潮',
        'first_last_contrast_首尾对比',
      ],

      reference: '《红气球》(The Red Balloon)；《雨中曲》无对白段落；皮克斯《机器人总动员》前40分钟(WALL·E)；《艺术家》(The Artist)',
      referenceEn: 'The Red Balloon (Lamorisse); Singin\' in the Rain silent sequences; WALL·E first 40 minutes; The Artist',
    },

    {
      id: 'MONOLOGUE',
      name: '内心独白',
      nameEn: 'Interior Monologue / Stream of Voice',
      group: 'G. 先锋·感官·梦境',
      groupEn: 'Avant-garde / Sensory / Dream',

      def: '画面呈现外部状态，声音（旁白/独白）呈现角色的意识流自白。视觉与听觉两条线索平行运行：眼睛看到角色在做什么，耳朵听到角色在想什么——两者可能一致也可能完全矛盾。',
      defEn: "Visuals present external state, voice (narration/monologue) presents character's stream-of-consciousness confession. Visual and audio tracks run in parallel: eyes see what character does, ears hear what character thinks — the two may align or completely contradict.",

      core: `【场景排列】双轨叙事——视觉轨道(V-track)和声音轨道(A-track)各自独立运行，它们之间的关系（同步/偏移/对撞）构成叙事的核心张力。
M1=双轨建立——V-track：角色在一个日常环境中做一件平凡的事（走路/做饭/坐公交）。A-track：角色的内心独白开始——声音揭示的内在状态与外部行为可能一致（边走路边想着路上的事）也可能不一致（边微笑边想着死亡）。第一个30秒就建立两条轨道的关系模式。M2=偏移开始——V-track和A-track的距离开始拉大。外部行为是社交性的（点头/回应/工作），内心独白是私密的（欲望/恐惧/秘密/对眼前事物的真实感受）。偏移本身就是角色的核心特征——他是一个表里不一的人，或者说，他是一个有内在生活的人。M3=独白深化——A-track开始脱离当下——从对眼前事物的评论漫游到记忆/幻想/抽象思考。意识流的特征出现：跳跃/联想/自我矛盾/未完成的句子/突然的情感转向。V-track保持日常的连续性——外部世界不知道内部发生了什么。M4=双轨碰撞——某个外部事件（一个画面/一句别人的话/一个意外）突然刺穿了两条轨道之间的隔膜——内心的想法几乎泄露到外部行为中（差点说出心里话/表情失控一瞬/动作的犹豫暴露了真实意图）。M5=独白的高潮——A-track到达最深/最真实/最不可说的层面——角色对自己承认了一个他从未对任何人承认的事实。这个承认只存在于声音中——画面中的角色脸上什么都没表现出来。M6=沉默——A-track突然中断。独白停止。只剩下V-track——日常的环境音和画面。沉默本身成为最有力的叙事——在充满独白之后的沉默比任何话语都更沉重。M7=最后一句——独白以一句最终的话回来，这句话改变了我们对之前所有画面和独白的理解。或者：独白再也没有回来——沉默延续到结尾，留下角色被困在自己的内在世界中。
【信息规则】A-track（内心独白）是唯一的「可靠信息源」——角色在心里对自己说的话比对外部世界说的话更接近真实（但不一定是真实本身——人也会对自己撒谎）。V-track（画面）提供的信息是「社会面具」——其他角色和观众看到的表面。两条轨道的信息差=角色的「内在深度」。独白不遵循散文逻辑而遵循意识流逻辑——跳跃、断裂、重复、自我否定、语法的溶解。独白中的「停顿」和「犹豫」是信息——说不出来的比说出来的更重要。
【M参数映射】M1=双轨建立（V-track日常+A-track开始）。M2=偏移（表里不一）。M3=独白深化（意识流漫游）。M4=双轨碰撞（内外几乎穿透）。M5=独白高潮（最深的自白）。M6=沉默（A-track中断）。M7=最后一句或永久沉默。
【结构比例】双轨建立(M1)≈10% / 偏移+深化(M2-M3)≈30% / 碰撞(M4)≈15% / 高潮+沉默+结局(M5-M7)≈45%
【禁忌】严禁让独白变成「解说」——独白不是在向观众解释剧情，而是角色在和自己说话。严禁让V-track和A-track完全一致——如果外部行为和内心想法完全同步，独白就退化为画外解说。严禁让独白过于清晰——真实的内心独白是混乱的、矛盾的、充满未完成的句子的。严禁让其他角色听到独白——独白是绝对私密的，任何泄露都会破坏双轨结构。`,

      coreEn: `[Scene Order] Dual-track narrative — Visual track (V-track) and Audio track (A-track) run independently; their relationship (sync/offset/collision) constitutes core narrative tension.
M1=dual-track establishment — V-track: character does something mundane in everyday setting (walking/cooking/riding bus). A-track: interior monologue begins — revealed inner state may align with external behavior (thinking about the walk while walking) or contradict (smiling while thinking about death). First 30 seconds establish the two tracks' relationship mode. M2=offset begins — V-track and A-track distance grows. External behavior is social (nodding/responding/working), inner monologue is private (desire/fear/secrets/true feelings about what's in front of them). The offset itself IS the character's core trait — they are someone whose inside and outside differ, or simply someone with an interior life. M3=monologue deepens — A-track detaches from the present — drifts from commenting on immediate things to memory/fantasy/abstract thought. Stream-of-consciousness features emerge: leaps/associations/self-contradiction/unfinished sentences/sudden emotional turns. V-track maintains daily continuity — external world doesn't know what's happening inside. M4=dual-track collision — an external event (an image/someone's words/an accident) suddenly punctures the membrane between tracks — inner thought nearly leaks into external behavior (almost saying what they think/momentary expression loss/hesitation revealing true intent). M5=monologue climax — A-track reaches deepest/truest/most unspeakable layer — character admits to themselves something never admitted to anyone. This admission exists only in sound — the character's face on screen shows nothing. M6=silence — A-track suddenly stops. Monologue ceases. Only V-track remains — ambient sound and image. Silence itself becomes the most powerful narrative — silence after sustained monologue is heavier than any words. M7=last line — monologue returns with one final line that changes our understanding of all prior images and monologue. Or: monologue never returns — silence extends to the end, leaving character trapped in their interior world.
[Info Rule] A-track (inner monologue) is the only 'reliable info source' — what character tells themselves is closer to truth than what they tell the world (but not necessarily truth itself — people lie to themselves too). V-track provides 'social mask' info. Info gap between tracks = character's 'interior depth.' Monologue follows stream-of-consciousness logic — leaps, ruptures, repetitions, self-denial, grammar dissolution. 'Pauses' and 'hesitations' in monologue ARE info — what can't be said matters more than what is said.
[M-Param Mapping] M1=dual-track established (V-track daily + A-track begins). M2=offset (inside ≠ outside). M3=monologue deepens (consciousness roaming). M4=dual-track collision (inside nearly pierces outside). M5=monologue climax (deepest confession). M6=silence (A-track stops). M7=last line or permanent silence.
[Proportions] Dual-track establishment(M1)≈10% / Offset+deepening(M2-M3)≈30% / Collision(M4)≈15% / Climax+silence+ending(M5-M7)≈45%
[Prohibitions] Monologue must not become 'exposition' — it's character talking to themselves, not explaining plot to audience. V-track and A-track must never fully align — if external behavior and inner thought are identical, monologue degrades to voiceover explanation. Monologue must not be too clear — real inner monologue is chaotic, contradictory, full of unfinished sentences. Other characters must never hear the monologue — monologue is absolutely private; any leakage breaks the dual-track structure.`,

      skeletons: [
        'dual_track_established_双轨建立',
        'offset_deepening_偏移与深化',
        'collision_moment_碰撞时刻',
        'silence_and_last_line_沉默与最后一句',
      ],

      reference: '《出租车司机》(Taxi Driver)；伍尔夫《达洛维夫人》(Mrs Dalloway)；王家卫《重庆森林》旁白；马力克《细细的红线》(The Thin Red Line)',
      referenceEn: 'Taxi Driver (Scorsese); Woolf, Mrs Dalloway; Wong Kar-wai, Chungking Express narration; Malick, The Thin Red Line',
    },
  ]
};
