import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_B: LibraryCategoryDef = {
  id: 'cat_sv1_temporal',
  name: `时间拓扑`,
  nameEn: 'Temporal Topology',
  items: [
    {
      id: 'LINEAR',
      name: '经典线性',
      nameEn: 'Classic Linear',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '严格因果链。事件按时间顺序排列，每个场景的结果是下一个场景的起因。叙事的默认状态——所有非线性结构都是对它的偏离。',
      defEn: 'Strict causal chain. Events in chronological order, each scene\'s outcome causes the next. The default narrative state — all non-linear structures are deviations from it.',

      core: `【场景排列】M1→M2→M3→M4→M5→M6→M7，严格按时间先后。场景之间的跳转只允许省略（ellipsis），不允许回溯或并行。每个场景结尾的最后一个动作/状态必须是下一个场景的起始条件。
【信息规则】观众与主角完全同步——同时获得新信息，同时面对未知。悬念永远是「接下来会发生什么」(prospective suspense)，不是「之前发生了什么」(retrospective)。允许在省略中埋设信息缺口（主角在时间跳跃中经历了什么），但必须在后续场景中用行为暗示补全。
【M参数映射】M1=开场场景，必须在第一个视觉画面中建立空间+人物+状态。M2=打破M1日常的具体事件，因果关系必须清晰可追溯。M3=M2的直接后果迫使主角确立目标。M4=障碍序列，每个障碍与前一个存在因果递进（不是并列）。M5=M4压力积累到临界点后的行动抉择。M6=M5行动的直接后果（代价）。M7=M6之后世界的新状态。
【节奏规则】前段（M1-M2）节奏从容，允许环境描写和日常细节。中段（M3-M4）节奏逐渐加速，场景之间的省略时间越来越短。后段（M5-M7）节奏最密集，场景之间几乎无省略，趋近实时。
【禁忌】严禁闪回——如果需要交代前史，必须通过当前场景中的对话/物件/行为暗示。严禁跳切到未来。场景之间的因果链不可断裂——如果观众问「为什么从A跳到B」而答案不是「因为A导致了B」，则结构违规。`,

      coreEn: `[Scene Order] M1→M2→M3→M4→M5→M6→M7, strict chronological. Only ellipsis allowed between scenes — no flashbacks or parallels. Each scene's final action/state must be the next scene's starting condition.
[Info Rule] Audience fully syncs with protagonist — new info arrives simultaneously. Suspense is always prospective ('what next'), never retrospective ('what happened'). Info gaps from ellipsis must be implied through behavior in subsequent scenes.
[M-Param Mapping] M1=opening scene, must establish space+character+state in first visual. M2=specific event breaking M1 routine, causality must be traceable. M3=direct consequence of M2 forcing goal. M4=obstacle sequence with causal escalation (not parallel). M5=action decision at M4 pressure threshold. M6=direct consequence of M5 (cost). M7=new world state after M6.
[Pacing] Early(M1-M2): leisurely, allows environmental detail. Mid(M3-M4): accelerating, ellipsis shrinks. Late(M5-M7): densest, near real-time, minimal ellipsis.
[Prohibitions] No flashbacks — backstory via dialogue/objects/behavior in current scene only. No flash-forwards. Causal chain must never break between scenes.`,

      skeletons: [
        'inciting_incident_激励事件',
        'rising_action_上升动作',
        'climax_高潮',
        'resolution_存在落点',
      ],
      reference: '《肖申克的救赎》(The Shawshank Redemption)；《阿甘正传》(Forrest Gump)；《老人与海》(The Old Man and the Sea)',
      referenceEn: 'The Shawshank Redemption; Forrest Gump; The Old Man and the Sea',
    },

    {
      id: 'IN_MEDIA_RES',
      name: '开场即高潮',
      nameEn: 'In Medias Res',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '从故事的中段或高潮处开场，先展示结果或危机，再闪回交代来龙去脉。拉丁语「置于事物之中」。',
      defEn: 'Opens at the story\'s midpoint or climax, shows result/crisis first, then flashes back to explain. Latin: "into the middle of things."',

      core: `【场景排列】开场锚点(M5或M6的某个瞬间) → 时间标记「X小时/天/年前」→ M1→M2→M3→M4 → 追上开场锚点 → M5→M6→M7继续。叙事在「追上」锚点的瞬间产生结构性满足——观众终于理解了开场画面的全部含义。
【信息规则】开场锚点必须包含一个观众无法理解的视觉元素——一个带血的物件、一句没有上下文的台词、一个不明身份的人。这个元素是全片的「悬念钩子」，观众带着「这是怎么回事」的问题进入闪回段落。闪回中每接近一步，观众对开场画面的理解就更新一层。追上锚点的时刻，所有信息碎片拼合。
【M参数映射】开场锚点=M5(行动瞬间)或M6(代价瞬间)的一个切面，只呈现结果不呈现原因。M1=闪回起点，必须与开场锚点形成最大反差（安宁vs.毁灭）。M2=闪回中的遭遇。M3-M4=闪回中的上升动作。追上点=闪回追上开场，时间线合流。M5-M7=合流后正常推进。
【结构比例】开场锚点≈5%（快准狠，30秒到2分钟） / 闪回段(M1-M4)≈55% / 追上点+推进(M5-M7)≈40%
【禁忌】开场锚点严禁过度解释——它必须是一个视觉谜题，不是一个叙述总结。闪回段不可以「匀速」推进——必须在接近追上点时加速。追上点不可静默跳过——必须给观众一个「原来如此」的结构性释放时刻。严禁在闪回段中再嵌套闪回。`,

      coreEn: `[Scene Order] Opening anchor(a moment from M5 or M6) → time marker "X hours/days/years earlier" → M1→M2→M3→M4 → catch-up to anchor → M5→M6→M7 continues. Structural satisfaction when timeline merges — audience finally understands the opening's full meaning.
[Info Rule] Opening anchor must contain one incomprehensible visual element — a bloody object, a contextless line, an unidentified person. This element is the suspense hook; audience enters flashback asking 'what happened?' Each step closer updates understanding of the opening. At catch-up, all fragments assemble.
[M-Param Mapping] Opening anchor=cross-section of M5(action) or M6(cost), showing result without cause. M1=flashback start, maximum contrast with anchor(peace vs. destruction). M2=encounter in flashback. M3-M4=rising action in flashback. Catch-up=timelines merge. M5-M7=normal progression after merge.
[Proportions] Opening anchor≈5% / Flashback(M1-M4)≈55% / Catch-up+progression(M5-M7)≈40%
[Prohibitions] Opening anchor must not over-explain — visual puzzle, not narrative summary. Flashback must accelerate approaching catch-up point. Catch-up moment must not be silent — requires structural release. No nested flashbacks within the flashback.`,

      skeletons: [
        'opening_anchor_开场锚点',
        'flashback_origin_闪回起源',
        'rising_toward_anchor_追上锚点',
        'beyond_the_anchor_锚点之后',
      ],
      reference: '《绝命毒师》S1E1(Breaking Bad)；《碟中谍》(Mission: Impossible)；《日落大道》(Sunset Boulevard)；《伊利亚特》(Iliad)',
      referenceEn: 'Breaking Bad S1E1; Mission: Impossible; Sunset Boulevard; Iliad',
    },

    {
      id: 'REVERSE',
      name: '逆向回溯',
      nameEn: 'Reverse Chronology',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '果在因前。叙事从M7(结局)的现场开始，逐场倒退，最后结束于M2(最初的遭遇)。',
      defEn: 'Effect precedes cause. Starts at M7, traces backward scene by scene, ends at M2.',

      core: `【场景排列】按时间倒序：M7→M6→M5→M4→M3→M2→M1。每个场景的结尾是下一个场景（时间上更早）的起因。观众看到的是「结果→原因」的反向因果链。
【信息规则】观众从第一个场景起就知道最终结果。悬念不是「会发生什么」而是「为什么会发生」。每回退一步只揭示一层因果——不可一次性倾倒大量前因。场景之间的衔接依靠视觉/动作的「反向匹配剪辑」：上一个场景（时间上更晚）结尾的某个物件/伤口/状态，在下一个场景（时间上更早）中被解释其来源。
【M参数映射】M7作为开场锚点，必须在前30秒内呈现完毕——展示最终状态但不解释原因。M6紧随其后，展示代价是如何被支付的。M5展示导致代价的行动选择。M4展示迫使行动的障碍。M3展示目标的确立。M2作为终场揭示，必须承担全片最后的情绪重量——「一切的起点竟然是这个」。M1作为可选尾声，展示遭遇之前的日常世界。
【节奏规则】前段回退速度快（M7→M6→M5：结果→代价→动作，信息密度高），中段在关键选择点放慢（M4→M3：为什么做这个选择），末段（接近M2→M1）用大量感官细节减速——因为起点往往是最安静最日常的瞬间。
【禁忌】严禁在倒叙中插入正序闪前。严禁在每个回退节点加旁白解释因果——因果必须由场景本身的视觉/行动线暗示。M2(终场揭示)严禁是一个「大事件」——它必须是一个微小的、几乎不起眼的瞬间，反衬出因果链的残酷放大效应。`,

      coreEn: `[Scene Order] Reverse chronological: M7→M6→M5→M4→M3→M2→M1. Each scene's end is the cause of the next (earlier) scene. Audience sees effect→cause chain.
[Info Rule] Audience knows outcome from scene one. Suspense is 'why' not 'what.' Each step back reveals one causal layer — no info dumps. Scene transitions use reverse match cuts: an object/wound/state at the end of one scene is explained in the next (earlier) scene.
[M-Param Mapping] M7 as opening anchor, delivered within first 30s — final state without explanation. M6=how cost was paid. M5=action choice that caused cost. M4=obstacle that forced action. M3=goal establishment. M2 as final reveal, carries closing emotional weight — 'so THIS is where it all began.' M1 as optional epilogue, ordinary world before encounter.
[Pacing] Fast regression early (M7→M5: result→cost→action, high info density). Slow at key choice points (M4→M3). Extremely slow near M2→M1 with dense sensory detail — because the origin is often the quietest, most ordinary moment.
[Prohibitions] No forward flashbacks within reverse flow. No voiceover explaining causality — cause implied by scene action. M2(final reveal) must NOT be a big event — it must be a tiny, almost invisible moment, contrasting the cruel amplification of the causal chain.`,

      skeletons: [
        'ending_revealed_结局呈现',
        'cause_uncovered_因果回溯',
        'origin_discovered_起源揭示',
      ],
      reference: '《记忆碎片》(Memento)；《不可撤销》(Irréversible)；《背叛》(Betrayal, Harold Pinter)；《时间的箭》(Time\'s Arrow, Martin Amis)',
      referenceEn: 'Memento; Irréversible; Betrayal (Harold Pinter); Time\'s Arrow (Martin Amis)',
    },

    {
      id: 'REAL_TIME',
      name: '实时/一镜到底',
      nameEn: 'Real Time / One-Take',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '文本时间＝故事时间。无省略、无跳跃、无压缩。每一秒的物理动作和环境噪音都被记录。时间的零度写作。',
      defEn: 'Text time = story time. No ellipsis, no jumps, no compression. Every second of physical action and ambient sound is recorded.',

      core: `【场景排列】只有一个场景，或多个场景之间的转换是主角在物理空间中的连续移动（如从A房间走到B房间）。M1→M2→M3→M4→M5→M6→M7在一个不间断的时间流中完成。没有「下一天」「三个月后」——一切发生在此时此刻。
【信息规则】观众与主角共享完全相同的时间体验——等待时一起等待，奔跑时一起喘息。信息只能通过当前时空中可获取的方式传递：对话、电话、窗外的声音、角色的物理观察。不允许任何超越当前时空的信息来源（如闪回中的记忆画面）。
【M参数映射】M1=实时开场的第一秒，环境声先于画面或同步出现。M2=在实时流中突然闯入的事件——因为无法剪辑省略，M2的到来必须有物理前兆（远处的声音、光线变化）。M3=实时中的目标确立，通常通过一句简短决断的台词。M4=实时中的障碍，每个障碍必须有物理持续时间（开锁要花30秒，观众等30秒）。M5=行动选择，实时呈现犹豫的秒数。M6=代价在实时中发生，不可用蒙太奇压缩痛苦。M7=实时结束，画面/声音可以在最后一刻突然切断或持续到自然静默。
【节奏规则】节奏完全由物理动作的速度决定——快就是角色在跑，慢就是角色在等。不允许用剪辑/音乐制造人工节奏。空白时间（等待、沉默、发呆）是结构的一部分，不可删除。
【禁忌】严禁省略任何时间段——哪怕是「无聊的」等待。严禁使用蒙太奇或时间跳跃。严禁使用画外音解释角色心理——心理必须通过身体动作外化（坐立不安、反复看表、咬嘴唇）。如果故事需要超过一个物理空间，空间之间的移动时间必须被完整记录。`,

      coreEn: `[Scene Order] One continuous scene, or multiple spaces connected by protagonist's physical movement. M1→M7 completed in unbroken time flow. No 'next day' or 'three months later.'
[Info Rule] Audience shares protagonist's exact time experience — waiting together, breathing together. Info arrives only through current-spacetime channels: dialogue, phone, sounds outside, physical observation. No info sources beyond current spacetime.
[M-Param Mapping] M1=first second, ambient sound arrives with or before image. M2=event intruding into real-time flow, must have physical precursors (distant sound, light change). M3=goal stated via brief decisive line. M4=obstacles with physical duration (30s to pick a lock = audience waits 30s). M5=action choice, hesitation seconds shown in real time. M6=cost in real time, no montage compression. M7=real-time end, image/sound cuts abruptly or fades to natural silence.
[Pacing] Rhythm determined entirely by physical action speed — fast=character running, slow=character waiting. No artificial rhythm via editing/music. Dead time (waiting, silence) is structural, not deletable.
[Prohibitions] No time ellipsis — even 'boring' waiting stays. No montage or time jumps. No voiceover for psychology — internality externalized through body (fidgeting, checking watch, lip-biting). Travel time between spaces must be fully recorded.`,

      skeletons: [
        'real_time_setup_实时建置',
        'intrusion_闯入事件',
        'pressure_accumulation_压力积累',
        'real_time_release_实时释放',
      ],
      reference: '《1917》；《正午》(High Noon)；《鸟人》(Birdman)；《维多利亚》(Victoria)',
      referenceEn: '1917; High Noon; Birdman; Victoria',
    },

    {
      id: 'TIME_DILATION',
      name: '时间膨胀',
      nameEn: 'Time Dilation',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '将极短的一瞬间（如车祸前的3秒、一次对视、一颗子弹飞行的时间）无限拉长。在这一瞬间内展开大量的感官细节、回忆或心理活动。微观史诗。',
      defEn: 'Stretches an ultra-brief moment (3 seconds before a crash, one eye-contact, a bullet\'s flight) to infinite length. Deploys massive sensory detail, memory, or psychology within that instant.',

      core: `【场景排列】定位一个「膨胀锚点」——故事中物理时间最短但叙事密度最高的瞬间（通常是M5行动瞬间或M6代价瞬间）。锚点之前的叙事按正常速度推进：M1→M2→M3→M4→接近锚点。到达锚点后，时间减速100倍：一秒被拉伸为数页/数分钟的叙述。锚点之后，时间恢复正常速度或直接跳至M7。
【信息规则】膨胀段内的信息密度远超正常段。观众在膨胀段中同时接收：①当前瞬间的极致感官细节（光的角度、空气的温度、皮肤的触感）②主角的记忆闪回（不是完整回忆，而是碎片：一个手势、一句话、一种气味）③时间停滞中的微观物理变化（灰尘的轨迹、水滴的形变）。这三层信息同时涌入，制造感官过载。
【M参数映射】M1-M4=正常时间流，建置世界和人物，节奏从容。膨胀锚点=M5(行动的决定性瞬间)或M6(代价降临的瞬间)。在膨胀段内，M1-M4的碎片以记忆形式回闪——但每个碎片不超过一句话/一个画面。M7=膨胀结束后的落点，时间恢复正常，世界已因这一瞬间而改变。
【节奏规则】膨胀前的节奏必须是加速的——让观众习惯正常速度甚至快速剪辑，然后突然减速到近乎静止。膨胀段内部的节奏由感官密度控制：视觉细节→听觉→触觉→味觉→嗅觉→内心独白，逐层叠加。膨胀结束的瞬间用一个突然的声音/动作(如撞击声)将时间弹回正常速度。
【禁忌】膨胀锚点严禁超过一个——如果多个瞬间都被膨胀，结构的特异性消失。膨胀段内的记忆碎片严禁构成完整回忆——它们必须是感官碎片，不是叙述性的闪回段落。严禁在膨胀段内推进情节——膨胀段是纯粹的感知深度，不是新事件。`,

      coreEn: `[Scene Order] Locate a 'dilation anchor' — the physically shortest but narratively densest moment (usually M5 action or M6 cost). Pre-anchor narration at normal speed: M1→M2→M3→M4→approach anchor. At anchor, time decelerates 100x: one second stretched to pages/minutes. Post-anchor, time resumes or jumps to M7.
[Info Rule] Dilated segment has info density far exceeding normal. Audience receives simultaneously: ①extreme sensory detail of current instant (light angle, air temperature, skin texture) ②protagonist memory fragments (not full memories — a gesture, a phrase, a smell) ③micro-physical changes in frozen time (dust trajectory, water droplet deformation). Three layers flooding simultaneously creates sensory overload.
[M-Param Mapping] M1-M4=normal time flow. Dilation anchor=M5(decisive action instant) or M6(cost instant). Within dilation, M1-M4 fragments flash as memory — each no more than one sentence/image. M7=post-dilation landing, time resumes, world changed by this instant.
[Pacing] Pre-dilation must accelerate — accustom audience to normal/fast speed, then sudden deceleration to near-stillness. Within dilation: sensory layers stack progressively (visual→auditory→tactile→gustatory→olfactory→inner monologue). Dilation ends with a sudden sound/action (crash, impact) snapping time back to normal.
[Prohibitions] Only ONE dilation anchor allowed — multiple dilations destroy structural specificity. Memory fragments within dilation must not form complete memories — sensory shards only, not narrative flashback passages. No plot advancement within dilation — it is pure perceptual depth, not new events.`,

      skeletons: [
        'approach_接近锚点',
        'dilation_moment_膨胀瞬间',
        'sensory_flood_感官洪流',
        'snap_back_时间弹回',
      ],
      reference: '《走马灯株式会社》；《黑客帝国》子弹时间(The Matrix Bullet Time)；《安伯托·D》(Umberto D, 女佣清晨段落)；《达洛维夫人》(Mrs. Dalloway)',
      referenceEn: 'The Matrix Bullet Time; Umberto D (maid morning sequence); Mrs. Dalloway (Virginia Woolf)',
    },

    {
      id: 'SNOWBALL',
      name: '雪球/失控升级',
      nameEn: 'The Escalation / Snowball',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '一个微小的M2(起因)引发连锁反应。每个后果比上一个更严重，节奏越来越快，赌注越来越大，直至不可收拾的终点。失控的因果机器。',
      defEn: 'A tiny M2 (cause) triggers chain reaction. Each consequence more severe than the last, pace accelerating, stakes growing, until irreversible endpoint. A runaway causal machine.',

      core: `【场景排列】M1(日常)→M2(微小起因：一个谎言/一个错误/一个巧合)→连锁反应序列[R1→R2→R3→R4→...→Rn]→M7(荒谬的终点)。连锁反应序列是核心结构——每个R节点都是上一个R节点的直接后果，且严重程度指数增长。M3/M4/M5/M6不是独立阶段，而是被压缩进连锁反应序列中：M3=主角试图补救(R2-R3)、M4=补救反而加剧(R3-R5)、M5=最后的挣扎(R6-R7)、M6=代价在每个R节点中累积兑现。
【信息规则】观众比主角更早看到连锁反应的下一步——制造「不不不别这样做」的戏剧反讽。M2的微小起因必须小到荒谬——越小越好，因为终点的灾难性与起因的微小性之间的落差就是这个结构的力量。每个R节点必须有一个「如果主角在这里停下来就还来得及」的窗口——但主角总是错过或选择继续。
【M参数映射】M1=极度正常的日常（正常程度越高，反衬越强）。M2=微小到几乎不值一提的触发事件。M3-M5=被压缩进连锁反应的不同阶段，不独立占据结构空间。M6=不是单一时刻的代价，而是每一步都在支付一点代价，累积成最终的总账。M7=连锁反应的终点，必须与M1形成荒谬的反差——M1中最安全的元素在M7中变成最具毁灭性的。
【节奏规则】每个R节点的持续时间必须比上一个更短。R1可能占5分钟，R2占3分钟，R3占2分钟，Rn占10秒。节奏曲线是指数加速——不是匀速加速。场景之间的过渡时间也在压缩：从「三天后」→「第二天」→「一小时后」→「紧接着」。
【禁忌】M2严禁是一个「大事件」——如果起因本身就很严重，雪球效应的结构张力消失。连锁反应中严禁出现与前一个R节点无因果关系的巧合——每一步必须是前一步的逻辑后果。严禁给主角一个真正有效的补救机会——一旦雪球滚起来，每次补救都必须制造更大的问题。`,

      coreEn: `[Scene Order] M1(routine)→M2(tiny cause: a lie/mistake/coincidence)→chain reaction[R1→R2→R3→...→Rn]→M7(absurd endpoint). Chain reaction is core structure — each R node is direct consequence of previous, severity growing exponentially. M3-M6 compressed into the chain: M3=attempted fix(R2-R3), M4=fix worsens(R3-R5), M5=last struggle(R6-R7), M6=cost accumulates across R nodes.
[Info Rule] Audience sees next chain link before protagonist — dramatic irony of 'no no no don't do that.' M2 must be absurdly small — the smaller the trigger, the greater the structural power (gap between tiny cause and catastrophic effect). Each R node must have a 'could still stop here' window that protagonist misses or ignores.
[M-Param Mapping] M1=extremely normal routine (the more normal, the stronger the contrast). M2=trigger so small it's barely worth mentioning. M3-M5=compressed into chain phases, no independent structural space. M6=not single-moment cost but incremental payments accumulating into final bill. M7=chain endpoint, must absurdly contrast M1 — M1's safest element becomes M7's most destructive.
[Pacing] Each R node shorter than previous. R1≈5min, R2≈3min, R3≈2min, Rn≈10sec. Acceleration curve is exponential, not linear. Transition times also compress: 'three days later'→'next day'→'one hour later'→'immediately.'
[Prohibitions] M2 must NOT be a big event — large trigger kills snowball tension. No coincidences in chain — every step must logically follow from previous. No effective remedy — every fix attempt must create a bigger problem.`,

      skeletons: [
        'tiny_trigger_微小起因',
        'chain_reaction_连锁反应',
        'failed_remedy_补救失败',
        'absurd_endpoint_荒谬终点',
      ],
      reference: '《荒蛮故事》(Wild Tales)；《疯狂的石头》；《好时光》(Good Time)；《虐杀器官》；《血迷宫》(Blood Simple)',
      referenceEn: 'Wild Tales; Good Time; Blood Simple (Coen Brothers); After Hours (Scorsese)',
    },

    {
      id: 'COUNTDOWN',
      name: '实时倒数',
      nameEn: 'The Countdown',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '一个明确的死亡时限悬在头顶。故事的每一秒都在逼近终点线。时间本身是最大的反派。',
      defEn: 'An explicit deadline hangs overhead. Every second moves toward the finish line. Time itself is the ultimate antagonist.',

      core: `【场景排列】M1(日常) → M2(时限被宣布：炸弹/病毒/日落/航班) → M3-M7在倒计时框架内展开。时间标记必须是具体的、可视化的：屏幕上的数字、太阳的位置、沙漏的沙量、手表的秒针。叙事的物理长度与倒计时长度成正比——如果倒计时是24小时，最后1小时应占叙事的40%以上。
【信息规则】时限的存在必须从M2开始就对观众和主角同时公开——这个结构不玩信息不对称，而是用「已知的终点」制造纯粹的时间压迫感。每个障碍(M4)的紧迫性不来自障碍本身，而来自「处理这个障碍要花多少时间」——时间成本是一切决策的唯一度量。
【M参数映射】M1=时限宣布之前的日常，必须短暂。M2=时限被宣布的精确时刻——必须包含一个具体数字（「你还有72小时」「末班车18:30发车」「氧气剩余47分钟」）。M3=确立在时限内必须完成的目标。M4=每个障碍都在消耗时间——障碍的恐怖不在于难度而在于它吃掉了多少倒计时。M5=在时间快要用尽时的最终行动选择。M6=时间代价——为了完成M5，主角必须放弃某些东西以「换取时间」。M7=终点线：按时完成/未按时完成/时限本身被改变。
【节奏规则】节奏与剩余时间成反比：剩余时间越少，叙事节奏越快。前半段（剩余时间充裕）允许思考和计划，后半段（时间紧迫）只有行动。最后10%的倒计时应占叙事篇幅的25%以上——用时间膨胀手法让最后几秒变得无限漫长。
【禁忌】时限严禁模糊——「快没时间了」不是倒计时结构，必须有精确数字。严禁在中段暂停倒计时——一旦启动就不能停。严禁在最后一秒用巧合解救——如果有解救，必须是之前埋设的因果链的兑现。时限可以被提前（更紧迫），但严禁被推迟（那等于取消了结构本身）。`,

      coreEn: `[Scene Order] M1(routine) → M2(deadline announced: bomb/virus/sunset/flight) → M3-M7 unfold within countdown frame. Time markers must be concrete and visual: screen digits, sun position, hourglass sand, watch hands. Narrative length proportional to countdown — final hour of a 24h countdown should occupy 40%+ of narrative.
[Info Rule] Deadline must be public to both audience and protagonist from M2 — no info asymmetry, pure temporal pressure from known endpoint. Each obstacle(M4)'s urgency comes not from difficulty but from time cost — time is the only decision metric.
[M-Param Mapping] M1=pre-deadline routine, must be brief. M2=precise deadline moment with specific number ('72 hours,' 'last train at 18:30,' '47 minutes of oxygen'). M3=goal within deadline. M4=each obstacle consumes time — horror is not difficulty but clock drain. M5=final action when time nearly gone. M6=time cost — protagonist sacrifices something to 'buy time.' M7=finish line: on time / too late / deadline itself altered.
[Pacing] Pace inversely proportional to remaining time: more time left=slower, less=faster. First half allows thinking/planning, second half is pure action. Final 10% of countdown should occupy 25%+ of narrative — time dilation makes last seconds infinitely long.
[Prohibitions] Deadline must not be vague — 'running out of time' is not countdown structure, needs exact number. No pausing the countdown mid-story. No coincidental last-second rescue — if rescue exists, it must be a planted causal chain paying off. Deadline can be moved earlier (more urgent) but never later (that cancels the structure).`,

      skeletons: [
        'deadline_announced_时限宣布',
        'obstacles_consuming_time_障碍吞噬时间',
        'final_push_最后冲刺',
        'finish_line_终点线',
      ],
      reference: '《罗拉快跑》(Run Lola Run)；《24小时》(24)；《乘客》(Passengers)；《阿波罗13号》(Apollo 13)；《活埋》(Buried)',
      referenceEn: 'Run Lola Run; 24; Apollo 13; Buried; Speed',
    },

    {
      id: 'MONTAGE',
      name: '蒙太奇/一生',
      nameEn: 'The Montage / A Lifetime',
      group: 'B. 时间拓扑',
      groupEn: 'Temporal Topology',

      def: '极少对白，由视觉节奏和音乐驱动。快速掠过漫长的时间跨度（一段关系/一个季节/一生），在压缩中制造情感的密度积累。时间的浓缩写作。',
      defEn: 'Minimal dialogue, driven by visual rhythm and music. Sweeps across vast time spans (a relationship, a season, a lifetime), building emotional density through compression.',

      core: `【场景排列】由「瞬间切片」(Moment Slices)序列构成，不是完整的场景。每个切片=一个视觉画面+一个时间锚点（季节/年龄/物件的变化）。切片排列顺序是时间正序，但切片之间的时间间隔不均匀——重要的时段多放切片，平淡的时段一笔跳过。M参数不是按顺序展开，而是被压缩进切片序列的不同位置：M2可能只是一个3秒的对视，M6可能只是一个空椅子的画面。
【信息规则】信息传递完全依靠视觉而非对话。每个切片只允许传递一个信息单元——一个表情、一个手势、一个物件的状态变化。观众通过切片之间的「跳跃」自行推断中间发生了什么——省略即是叙述。音乐/音效是唯一的连续线索——它横跨所有切片，提供情绪的连贯性。
【M参数映射】M1=第一个切片，建立起点状态（年轻/相遇/新居）。M2=一个切片中的遭遇，通常是一个微小但改变一切的瞬间（一个笑容/一次回头）。M3-M4=若干切片展示日常的积累和变化，通过「重复但微变」的视觉母题呈现（同一张桌子上早餐从两份变一份、同一面镜子中面孔逐渐衰老）。M5=一个切片中的决定性瞬间。M6=代价通过「缺席」呈现——之前反复出现的元素突然消失。M7=最后一个切片，必须与第一个切片形成视觉对仗（相同构图，不同内容）。
【节奏规则】切片的持续时间和切换速度是主要的节奏工具。开头切片较长（4-6秒），中段逐渐加速（2-3秒），高潮处可以快至1秒/切片。关键的M参数切片允许减速——用更长的停留制造节奏中断。最后一个切片（M7）必须是全序列中最长的停留。
【禁忌】严禁在切片中插入完整的对话场景——一旦有超过两句对话，蒙太奇结构就被打破。严禁用字幕标注时间——时间的流逝必须通过视觉线索（季节/衰老/物件磨损）自然呈现。严禁让所有切片等时长——均匀的节奏会杀死蒙太奇的情感加速效应。`,

      coreEn: `[Scene Order] Composed of 'Moment Slices' — not full scenes. Each slice = one visual frame + one time anchor (season/age/object change). Slices in chronological order but unevenly spaced — dense at important periods, sparse at uneventful ones. M-params compressed into slice positions: M2 might be a 3-second gaze, M6 might be an empty chair.
[Info Rule] Info transmission is purely visual, not verbal. Each slice carries one info unit — an expression, gesture, object state change. Audience infers gaps between slices — omission IS narration. Music/sound is the only continuous thread, providing emotional continuity across all slices.
[M-Param Mapping] M1=first slice, establishes starting state (youth/meeting/new home). M2=encounter in one slice, usually a tiny world-changing instant (a smile, a glance back). M3-M4=slices showing daily accumulation via 'repeated but slightly changed' visual motifs (same table with breakfast going from two plates to one; same mirror with gradually aging face). M5=decisive moment in one slice. M6=cost shown through absence — a recurring element suddenly vanishes. M7=final slice, must visually rhyme with first slice (same composition, different content).
[Pacing] Slice duration and switching speed are primary rhythm tools. Opening slices longer (4-6s), mid-section accelerates (2-3s), climax as fast as 1s/slice. Key M-param slices may decelerate for rhythmic interruption. Final slice(M7) must be the longest hold in the entire sequence.
[Prohibitions] No complete dialogue scenes within slices — more than two lines of dialogue breaks montage structure. No time-stamp subtitles — passage of time must be conveyed visually (seasons/aging/object wear). No uniform slice duration — even rhythm kills montage's emotional acceleration.`,

      skeletons: [
        'first_slice_起点切片',
        'accumulation_日常积累',
        'absence_缺席',
        'final_echo_终场回响',
      ],
      reference: '《飞屋环游记》开头(Up, Opening)；《爱乐之城》结尾蒙太奇(La La Land)；《公民凯恩》早餐蒙太奇(Citizen Kane)；《百年孤独》(One Hundred Years of Solitude)',
      referenceEn: 'Up (opening montage); La La Land (ending montage); Citizen Kane (breakfast montage); One Hundred Years of Solitude (García Márquez)',
    },
  ]
};
