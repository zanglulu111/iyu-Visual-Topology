import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_C: LibraryCategoryDef = {
  id: 'cat_sv1_loop_parallel',
  name: `循环·平行·分形`,
  nameEn: 'Loop / Parallel / Fractal',
  items: [
    {
      id: 'LOOP',
      name: '宿命轮回',
      nameEn: 'The Loop',
      group: 'C. 循环·平行·分形',
      groupEn: 'Loop / Parallel / Fractal',

      def: '结局M7揭示它就是开头M1。主角回到了原点，或发现自己被困在时间/逻辑的闭环中。叙事的莫比乌斯带。',
      defEn: 'M7 reveals it IS M1. Protagonist returns to origin or discovers entrapment in a temporal/logical closed loop. Narrative Möbius strip.',

      core: `【场景排列】M1→M2→M3→M4→M5→M6→M7=M1。表面上是线性推进，但M7的最后一个画面/台词/动作必须与M1的开场完全一致——观众在M7瞬间意识到这是一个闭环。如果结构是「主角意识到循环」的类型，则在M5-M6阶段加入「似曾相识」的信号（重复的台词、相同的物件出现在不该出现的地方）。如果结构是「主角不知道循环」的类型，则M7=M1的对接只对观众可见。
【信息规则】关键机制是「重复中的微小差异」。第一轮循环中，观众不知道自己在看循环——一切看起来是正常的线性叙事。M7=M1的揭示是对观众认知框架的颠覆。如果叙事包含多轮循环（如《土拨鼠之日》），则每一轮必须有且仅有一个变量改变——主角的一个选择不同——其余所有元素保持一致。观众通过追踪「哪个变量变了」来理解主角的成长/衰败。
【M参数映射】M1=循环的入口点，必须包含至少3个可辨认的「锚定细节」（一句特定的台词、一个特定的声音、一个特定的物件位置），这些细节将在M7中完全复现。M2=循环中的遭遇/触发事件，每轮相同。M3=目标，每轮可以改变（因为主角的认知在变）。M4=障碍，每轮相同但主角应对方式不同。M5=关键行动，这是每轮循环中唯一允许主角改变的决策点。M6=代价，随主角选择变化而变化。M7=回到M1，但如果是最终轮，M7在复现M1的细节后必须出现一个「逸出信号」——某个锚定细节不再相同。
【节奏规则】如果是单轮循环（只在M7揭示闭环）：全程按线性结构的正常节奏推进，M7的闭合是一个突然的结构震撼。如果是多轮循环：第一轮最慢最详细，第二轮开始加速（省略已知的重复段落），后续每轮更快，只呈现「差异」部分。最终轮恢复第一轮的完整节奏——慢下来让观众确认每一个细节。
【禁忌】M7=M1的对接严禁模糊——必须是精确的视觉/文本复现，不能是「类似」或「隐喻性的回到原点」。多轮循环中严禁同时改变两个以上变量——否则观众无法追踪因果。严禁在循环外部设置一个「旁观者」解释循环机制——循环的原因可以不解释，但不能被外部叙述框架消解。`,

      coreEn: `[Scene Order] M1→M2→M3→M4→M5→M6→M7=M1. Surface linear, but M7's final image/line/action must exactly match M1's opening — audience realizes the loop at M7. If 'protagonist aware' type: déjà vu signals at M5-M6 (repeated lines, objects in wrong places). If 'protagonist unaware' type: M7=M1 junction visible only to audience.
[Info Rule] Key mechanism: 'micro-difference within repetition.' First loop appears normal linear narrative. M7=M1 reveal subverts audience's cognitive frame. In multi-loop versions: each loop changes exactly ONE variable — one different choice by protagonist — all else identical. Audience tracks 'what changed' to understand growth/decay.
[M-Param Mapping] M1=loop entry point, must contain ≥3 recognizable anchor details (specific line, sound, object position) that fully recur in M7. M2=trigger event, identical each loop. M3=goal, may change across loops (protagonist's cognition evolves). M4=obstacles, identical but protagonist responds differently. M5=key action, the ONLY decision point allowed to change per loop. M6=cost, varies with M5 choice. M7=return to M1; in final loop, must include an 'escape signal' — one anchor detail no longer matches.
[Pacing] Single-loop: normal linear pace, M7 closure is sudden structural shock. Multi-loop: first loop slowest and most detailed; second loop accelerates (skip known repetitions); each subsequent loop faster, showing only differences. Final loop returns to first-loop's full pace — slow down to let audience verify every detail.
[Prohibitions] M7=M1 junction must be exact visual/textual recurrence, not 'similar' or 'metaphorical return.' Multi-loop: never change more than two variables simultaneously. No external observer explaining the loop mechanism — loop's cause may remain unexplained but must not be dissolved by an outer narrative frame.`,

      skeletons: [
        'loop_entry_循环入口',
        'pattern_established_模式建立',
        'variable_changed_变量改变',
        'escape_signal_逸出信号',
      ],
      reference: '《土拨鼠之日》(Groundhog Day)；《恐怖游轮》(Triangle)；《源代码》(Source Code)；《忌日快乐》(Happy Death Day)',
      referenceEn: 'Groundhog Day; Triangle; Source Code; Happy Death Day',
    },

    {
      id: 'SPIRAL',
      name: '螺旋下坠',
      nameEn: 'The Downward Spiral',
      group: 'C. 循环·平行·分形',
      groupEn: 'Loop / Parallel / Fractal',

      def: '重复相似的情节单元，但每次重复时M6(代价)更惨重、M1(日常)更破碎。不是闭环，而是向深渊旋转的开环。',
      defEn: 'Repeats similar plot units, but each repetition deepens M6 (cost) and degrades M1 (routine). Not a closed loop but an open spiral into the abyss.',

      core: `【场景排列】由多个「旋转单元」(Spiral Units)构成，每个单元内部是微型的 M1→M2→M4→M6 循环。单元序列：SU1[M1a→M2a→M4a→M6a] → SU2[M1b→M2b→M4b→M6b] → SU3[...] → ... → 最终单元[M5→M6_final→M7]。关键结构规则：每个单元的M1比上一个单元的M1更低（上一轮的M6后果成为下一轮的M1起点），每个单元的M6比上一个更惨重。M3(目标)在每个单元中相同——主角每次都试图「回到正常」或「再来一次」，但每次的「正常」标准已经下移。
【信息规则】观众必须能识别出重复的模式——相似的触发(M2)、相似的应对(M4)、相似但更坏的结果(M6)。模式识别是这个结构的核心体验——观众看到主角「又来了」时产生的无力感即是结构效果。每个单元中可以加入一个「这次不一样」的虚假希望信号，但结果必须证明「还是一样，只是更糟」。
【M参数映射】M1=第一个单元的日常，是全片最高的「正常」水位线——后续每个单元的起点都在此之下。M2=触发模式，每个单元的触发在本质上相同（同一种诱惑/同一种冲突/同一种失控），但表面形式可以变化。M3=不独立出现，被压缩为每个单元开头主角「试图恢复」的动作。M4=障碍模式相似但强度递增。M5=只出现在最终单元——主角在最底部做出的最终选择（继续下坠/试图逃离螺旋）。M6=每个单元的代价，严格递增序列。M7=螺旋的终点——彻底毁灭、或在最底部找到某种异质的东西。
【节奏规则】前几个旋转单元较长（建立模式），中段单元逐渐缩短（模式已建立，加速即可），最终单元再次拉长（最底部需要完整展开）。单元之间的过渡时间也在缩短——第一次「恢复」花三个月，第二次花三周，第三次花三天。
【禁忌】严禁在中间单元给予真正的救赎——任何「这次好了」的信号都必须在同一单元内被推翻。M2(触发)严禁每个单元都完全不同——模式的重复可辨认性是结构的基石。最终单元(M7)严禁是简单的「死亡」——如果主角只是死了，螺旋就被简化为一条下降直线；终点必须揭示螺旋本身的某种意义。`,

      coreEn: `[Scene Order] Multiple 'Spiral Units' (SU), each containing micro M1→M2→M4→M6. Sequence: SU1[M1a→M2a→M4a→M6a] → SU2[M1b→M2b→M4b→M6b] → ... → Final SU[M5→M6_final→M7]. Key rule: each SU's M1 is lower than previous (last M6 becomes next M1), each M6 is worse. M3(goal) is the same in every unit — protagonist tries to 'return to normal' or 'try again,' but 'normal' has downshifted.
[Info Rule] Audience must recognize the repeating pattern — similar triggers(M2), similar responses(M4), similar-but-worse results(M6). Pattern recognition is the core experience. Each unit may include a false 'this time it's different' signal, but outcome must prove 'same pattern, worse result.'
[M-Param Mapping] M1=first unit's routine, the highest 'normal' watermark — all subsequent starting points below this. M2=trigger pattern, essentially identical across units (same temptation/conflict/loss of control) with surface variations. M3=compressed into each unit's opening 'recovery attempt.' M4=similar obstacle pattern, escalating intensity. M5=appears only in final unit — ultimate choice at the bottom. M6=strictly increasing cost sequence. M7=spiral endpoint — total destruction, or discovering something heterogeneous at the very bottom.
[Pacing] Early SUs longer (establishing pattern), mid SUs shorten (pattern established, accelerate), final SU lengthens again (bottom requires full deployment). Recovery time between units also shrinks: first recovery takes months, second weeks, third days.
[Prohibitions] No real redemption in middle units — any 'it's better now' signal must be overturned within the same unit. M2 triggers must not be completely different each unit — recognizable pattern repetition is structural foundation. Final unit(M7) must not be simple death — death reduces spiral to a straight declining line; endpoint must reveal something about the spiral itself.`,

      skeletons: [
        'first_descent_首次下坠',
        'false_recovery_虚假恢复',
        'deeper_descent_更深下坠',
        'bottom_revelation_深渊揭示',
      ],
      reference: '《梦之安魂曲》(Requiem for a Dream)；《被嫌弃的松子的一生》；《坠落的审判》(Anatomy of a Fall)；《酒精计划》(Another Round)',
      referenceEn: 'Requiem for a Dream; Leaving Las Vegas; Another Round; A Star Is Born',
    },

    {
      id: 'PARALLEL_LIVES',
      name: '滑动门/平行线',
      nameEn: 'Sliding Doors / Parallel Lives',
      group: 'C. 循环·平行·分形',
      groupEn: 'Loop / Parallel / Fractal',

      def: '基于M2的一个微小选择，分裂出两条（或多条）完全不同的时间线，交叉叙述。同一个主体的不同可能性同时展开。',
      defEn: 'A tiny choice at M2 splits into two (or more) completely different timelines, narrated in alternation. Different possibilities of the same subject unfold simultaneously.',

      core: `【场景排列】共享段：M1→M2(分裂点)。分裂后：时间线A[M3a→M4a→M5a→M6a→M7a] 与 时间线B[M3b→M4b→M5b→M6b→M7b] 交替呈现。交替规则：A段和B段交替出现，每次切换发生在一个「对位时刻」——两条时间线中主角正在经历结构上对称的事件（A线的婚礼对位B线的孤独晚餐，A线的成功对位B线的失败）。M7处两条线可以汇合（主角最终到达相同终点）、分离（两个完全不同的结局）、或相互干涉（一条线影响另一条线）。
【信息规则】观众同时拥有两条线的全部信息——这是上帝视角。结构效果来自观众在两条线之间做比较时产生的思考：「一个微小选择竟然导致如此不同的人生」。分裂点(M2)的选择必须足够小（赶上/没赶上一班地铁），两条线的差异必须足够大。两条线中不可有任何信息交叉——它们是完全隔离的平行宇宙（除非结构设计为「干涉型」）。
【M参数映射】M1=共享的日常世界（只写一次）。M2=分裂点，必须是一个二元选择（是/否、左/右、去/留），且选择本身不含道德判断——两个选项在选择瞬间看起来等价。M3a/M3b=两条线分别确立不同的目标。M4a/M4b=两条线各自的障碍，可以完全不同。M5a/M5b=两条线各自的行动选择。M6a/M6b=两条线各自的代价（关键：两条线的代价性质不同，但重量应当对等）。M7a/M7b=两个终点。
【结构比例】共享段(M1-M2)≈10% / 平行交替段(M3-M6)≈70% / 汇合或终点(M7)≈20%。两条线的篇幅应当严格对等——任何一条线占比超过60%都会让另一条退化为副线。
【禁忌】分裂点的选择严禁是一个明显的「对vs.错」——如果观众在M2就知道哪个选择「更好」，平行结构的张力消失。两条线严禁在中段合流——一旦合流就变成了普通的「选择→后果」线性叙事。两条线中主角的核心性格必须一致——变化的是境遇和选择，不是人格。`,

      coreEn: `[Scene Order] Shared segment: M1→M2(split point). After split: Timeline A[M3a→M4a→M5a→M6a→M7a] alternates with Timeline B[M3b→M4b→M5b→M6b→M7b]. Switching rule: A and B segments alternate at 'counterpoint moments' — structurally symmetric events across timelines (A's wedding counterpoints B's lonely dinner). M7: timelines may converge (same endpoint), diverge (different endings), or interfere (one affects the other).
[Info Rule] Audience has god's-eye view across both lines. Structural effect comes from audience comparing lines: 'one tiny choice led to such different lives.' Split choice(M2) must be small enough; resulting differences must be large enough. No info crossover between lines — fully isolated parallel universes (unless 'interference' type).
[M-Param Mapping] M1=shared ordinary world (written once). M2=split point, must be binary choice (yes/no, left/right, stay/go) with no moral judgment — both options appear equivalent at choice moment. M3a/M3b=different goals. M4a/M4b=different obstacles. M5a/M5b=different action choices. M6a/M6b=different costs (key: different in kind but equivalent in weight). M7a/M7b=two endpoints.
[Proportions] Shared(M1-M2)≈10% / Parallel alternation(M3-M6)≈70% / Convergence or endpoints(M7)≈20%. Both lines must be strictly equal in length — either exceeding 60% degrades the other to subplot.
[Prohibitions] Split choice must NOT be obviously right/wrong — if audience knows which is 'better' at M2, parallel tension collapses. No mid-story convergence — that reduces to linear 'choice→consequence.' Protagonist's core personality must be consistent across lines — circumstances and choices vary, not character.`,

      skeletons: [
        'split_point_分裂点',
        'timeline_A_时间线A',
        'timeline_B_时间线B',
        'convergence_or_divergence_汇合或分离',
      ],
      reference: '《滑动门》(Sliding Doors)；《罗拉快跑》(Run Lola Run)；《双面薇罗妮卡》(The Double Life of Véronique)；《暗物质》(Dark Matter, Blake Crouch)',
      referenceEn: 'Sliding Doors; Run Lola Run; The Double Life of Véronique; Dark Matter (Blake Crouch)',
    },

    {
      id: 'PARALLEL_EDITING',
      name: '平行剪辑',
      nameEn: 'Parallel Editing / Cross-Cutting',
      group: 'C. 循环·平行·分形',
      groupEn: 'Loop / Parallel / Fractal',

      def: '两条或多条独立叙事线在同一时间段内交替呈现，最终在一个「汇合点」碰撞。不是平行宇宙，而是同一世界中不同空间的同时行动。',
      defEn: 'Two or more independent narrative lines alternate within the same time period, colliding at a convergence point. Not parallel universes but simultaneous actions in different spaces of the same world.',

      core: `【场景排列】叙事线A[场景A1→A2→A3→...] 与 叙事线B[场景B1→B2→B3→...] 交替呈现。两条线共享同一个时间轴但占据不同的物理空间。交替规则：A段→B段→A段→B段，每次切换发生在一个「悬念切口」——A段在紧张处中断切到B段，B段在紧张处中断切回A段。两条线的节奏互相咬合：A线加速时B线可以减速（对比切换），或A线B线同时加速（同步切换）。汇合点=两条线的人物/事件在物理空间中相遇。
【信息规则】观众拥有两条线的信息，但A线的角色不知道B线在发生什么（反之亦然）——信息不对称产生戏剧反讽。如果B线的角色正赶往A线角色所在地，观众知道「他在路上」但A线角色不知道——这就是平行剪辑的核心张力。汇合点是信息不对称被消解的时刻——两条线的角色突然共享信息。
【M参数映射】两条叙事线各有独立的M参数序列，但它们共享M7(汇合点/结局)。线A的M参数：M1a→M2a→M3a→M4a→M5a→M6a。线B的M参数：M1b→M2b→M3b→M4b→M5b→M6b。汇合点M7=线A和线B的M5/M6在同一物理空间中碰撞。两条线不必在结构上同步——A线可能已经到M5而B线还在M3。
【节奏规则】交替频率随剧情推进而加速——开头每段较长（建立各线独立的世界），中段每段缩短（张力加码），临近汇合时切换频率极高（A3秒→B3秒→A2秒→B2秒），制造呼吸急促的紧迫感。汇合后停止交替，进入单一视角。
【禁忌】两条线之间严禁有因果关系（在汇合前）——它们是独立运行的，只在汇合点碰撞。严禁让一条线沦为「等待另一条线」的填充——每条线必须有独立的叙事驱动力。汇合点严禁是偶然巧合——两条线的碰撞必须有结构上的必然性（它们从一开始就注定相遇，只是观众不知道）。`,

      coreEn: `[Scene Order] Line A[A1→A2→A3→...] alternates with Line B[B1→B2→B3→...]. Both share the same timeline but occupy different spaces. Switching rule: A→B→A→B, each switch at a 'suspense cut' — A interrupted at tension peak to cut to B, and vice versa. Rhythm interlocks: A accelerates while B decelerates (contrast switch), or both accelerate simultaneously (sync switch). Convergence point = characters/events physically meet.
[Info Rule] Audience has both lines' info, but A's characters don't know about B (and vice versa) — asymmetry produces dramatic irony. If B's character is heading toward A's location, audience knows 'they're coming' but A doesn't — this IS the core tension. Convergence dissolves the asymmetry — characters suddenly share info.
[M-Param Mapping] Each line has independent M-params but shares M7(convergence/resolution). Line A: M1a→M2a→M3a→M4a→M5a→M6a. Line B: M1b→M2b→M3b→M4b→M5b→M6b. Convergence M7=A and B's M5/M6 collide in same physical space. Lines need not be structurally synchronized — A may reach M5 while B is at M3.
[Pacing] Alternation frequency accelerates with plot progression — long segments early (establish independent worlds), shorter mid (tension built), near-convergence extremely rapid (A:3s→B:3s→A:2s→B:2s), creating breathless urgency. After convergence: stop alternating, enter single POV.
[Prohibitions] No causal relationship between lines before convergence — they run independently, collide only at convergence. Neither line may degrade to 'waiting filler' for the other — each must have independent narrative drive. Convergence must not be coincidental — collision must be structurally inevitable (destined to meet from the start, audience just didn't know).`,

      skeletons: [
        'thread_A_established_线A建立',
        'thread_B_established_线B建立',
        'interweaving_acceleration_交织加速',
        'collision_point_碰撞点',
      ],
      reference: '《盗梦空间》(Inception, 多层梦境)；《教父》(The Godfather, 洗礼蒙太奇)；《不可饶恕》(Unforgiven)；《敦刻尔克》(Dunkirk)',
      referenceEn: 'Inception (multi-layer dreams); The Godfather (baptism montage); Dunkirk (land/sea/air); The Silence of the Lambs',
    },

    {
      id: 'FRACTAL',
      name: '分形/俄罗斯套娃',
      nameEn: 'Fractal / Mise en Abyme',
      group: 'C. 循环·平行·分形',
      groupEn: 'Loop / Parallel / Fractal',

      def: '微观结构与宏观结构自相似。个人命运的M1-M7在更大的尺度上被家族/城市/宇宙的命运重复。故事中嵌套着结构相同的子故事。',
      defEn: 'Micro-structure and macro-structure are self-similar. Personal M1-M7 is repeated at the scale of family/city/cosmos. Stories nested within structurally identical sub-stories.',

      core: `【场景排列】至少两个嵌套层级。外层(Macro)：M1_macro→M2_macro→...→M7_macro。内层(Micro)：M1_micro→M2_micro→...→M7_micro。内层故事嵌套在外层的某个M节点中（通常是M4或M5的位置）。关键规则：内层的M参数序列与外层同构——M2_micro的遭遇本质与M2_macro相同，M6_micro的代价类型与M6_macro相同。观众在阅读内层故事时，同时在理解外层故事的命运走向。内层可以是：一个角色讲的故事、一本书中的书、一部电影中的电影、一个梦中的梦、一个微观世界对宏观世界的镜像。
【信息规则】内层故事比外层先到达M7——它是外层命运的预演/预言。观众通过内层的结局推测外层的结局，产生「预见性悬念」(anticipatory suspense)。如果内层M7是毁灭性的，观众会恐惧外层也走向毁灭；如果内层M7是救赎性的，观众会期待外层同样获救。关键设计选择：外层是否重复内层的结局？重复=宿命感，不重复=自由意志。
【M参数映射】外层M参数正常展开。内层M参数与外层同构映射：M1_micro反映M1_macro的日常（相同类型的空间/关系），M2_micro反映M2_macro的遭遇（相同类型的事件），M6_micro反映M6_macro的代价（相同类型的损失）。但内层的具体内容不是外层的复制——它是「同构但不相同」的变奏。嵌套点=内层故事在外层时间线中出现的位置，通常在M4_macro(障碍阶段)——主角在面对障碍时遇到了一个与自身处境同构的故事。
【结构比例】外层≈65% / 内层≈35%。内层不可超过外层的50%——否则观众会把内层误认为主线。嵌套点应出现在外层的40%-60%位置（外层的结构中点附近）。
【禁忌】内层与外层的同构必须是结构性的（相同的M参数序列类型），不是表面性的（不是「角色名字一样」或「发生在同一个地点」）。严禁超过三层嵌套——两层已经是观众认知负荷的上限，三层需要极强的视觉区分。内层故事严禁仅仅是「一个角色在讲故事」——它必须对外层的情节产生结构性的影响（主角从内层故事中获得了改变外层命运的信息或勇气）。`,

      coreEn: `[Scene Order] At least two nested levels. Outer(Macro): M1_macro→...→M7_macro. Inner(Micro): M1_micro→...→M7_micro. Inner story nests within outer's M4 or M5 position. Key rule: inner M-param sequence is isomorphic to outer — M2_micro's encounter is essentially the same type as M2_macro, M6_micro's cost is the same type as M6_macro. Reading inner = understanding outer's destiny. Inner can be: a character's story, a book within a book, a film within a film, a dream within a dream, a micro-world mirroring macro.
[Info Rule] Inner story reaches M7 before outer — it's a preview/prophecy of outer's fate. Audience infers outer's ending from inner's: if inner M7 is destructive, audience fears outer will follow; if redemptive, audience hopes for rescue. Key design choice: does outer repeat inner's ending? Repeat=fate, deviation=free will.
[M-Param Mapping] Outer M-params unfold normally. Inner M-params map isomorphically: M1_micro reflects M1_macro's routine (same type of space/relationship), M2_micro reflects M2_macro's encounter (same type of event), M6_micro reflects M6_macro's cost (same type of loss). Inner content is NOT a copy — it's 'isomorphic but not identical' variation. Nesting point=where inner appears in outer timeline, usually at M4_macro — protagonist encounters an isomorphic story while facing obstacles.
[Proportions] Outer≈65% / Inner≈35%. Inner must not exceed 50% of outer — audience would mistake inner for main line. Nesting point at outer's 40%-60% position (near structural midpoint).
[Prohibitions] Isomorphism must be structural (same M-param sequence type), not superficial (not 'same character names' or 'same location'). No more than three nesting levels — two is cognitive load ceiling, three requires extreme visual differentiation. Inner story must not be merely 'a character telling a story' — it must structurally impact outer plot (protagonist gains info or resolve from inner that changes outer fate).`,

      skeletons: [
        'outer_story_外层叙事',
        'inner_story_内层叙事',
        'isomorphic_resonance_同构共振',
        'layers_converge_层级汇合',
      ],
      reference: '《盗梦空间》(Inception)；《布达佩斯大饭店》(Grand Budapest Hotel)；《一千零一夜》(One Thousand and One Nights)；《云图》(Cloud Atlas)',
      referenceEn: 'Inception; The Grand Budapest Hotel; One Thousand and One Nights; Cloud Atlas',
    },

    {
      id: 'CIRCULAR',
      name: '首尾呼应',
      nameEn: 'The Circular / Bookend',
      group: 'C. 循环·平行·分形',
      groupEn: 'Loop / Parallel / Fractal',

      def: '结尾的台词/动作/画面与开头完全一致，但因为中间经历的一切，相同的元素承载了完全不同的含义。形式闭合，意义开裂。',
      defEn: 'Ending line/action/image matches the opening exactly, but carries entirely different meaning due to everything between. Form closes; meaning fractures.',

      core: `【场景排列】M1设置一个「锚定元素」(Anchor Element)——一句台词、一个动作、一个画面构图、一段音乐。这个元素在M1中具有含义X。M2→M3→M4→M5→M6正常线性推进。M7用完全相同的锚定元素收尾——但此时它的含义已从X变为Y。核心效果：形式上的「相同」+意义上的「不同」=观众同时感到闭合（结构完整）和开裂（意义翻转）。
【信息规则】M1中的锚定元素必须看起来「普通」——观众在M1阶段不会特别注意它。全片的叙事在M2-M6中给观众积累了足够的信息，使得M7中同一个元素被完全重新解读。信息积累是渐进的——不是M7突然给一个新信息改变解读，而是M2-M6的经历已经改变了观众的认知框架，M7只是「呈现」了这个变化。锚定元素本身不变，变的是观众。
【M参数映射】M1=锚定元素的首次出现，嵌入日常语境中。M2-M6=正常的叙事推进，不需要特别服务于首尾呼应——中间段的力量在于它自身的故事性，不在于它「为了改变锚定元素的含义」。M7=锚定元素的完全复现。复现的精度越高（同一个词、同一个角度、同一段旋律），含义翻转的冲击越强。M7可以在锚定元素复现后立即结束（硬切），也可以在复现后给一段静默让含义沉淀。
【节奏规则】M1中锚定元素的呈现节奏应当是日常的、不加重音的——不要让观众觉得「这个元素很重要」。M7中锚定元素的呈现节奏应当是缓慢的、有仪式感的——让观众有时间意识到「这跟开头一模一样」然后感受含义的裂变。M1和M7之间的叙事中，可以在M4或M5处「不经意地」再次提及锚定元素（但处于不同语境），作为中间回声。
【禁忌】锚定元素严禁在M1中就被特别强调——如果观众在开头就知道「这个东西会在结尾重现」，惊奇感消失。M7的复现严禁改变锚定元素的任何表面形式——不能换一个词、不能换一个角度；必须是精确复现，意义翻转全部来自观众内心的变化。中间叙事(M2-M6)严禁为了「服务呼应」而扭曲自然剧情走向——呼应是结构礼物，不是结构枷锁。`,

      coreEn: `[Scene Order] M1 establishes an 'Anchor Element' — a line, action, visual composition, or music. This element carries meaning X in M1. M2→M3→M4→M5→M6 progress linearly. M7 closes with the exact same anchor element — but its meaning has shifted from X to Y. Core effect: formal 'sameness' + semantic 'difference' = audience feels both closure (structure complete) and fracture (meaning inverted).
[Info Rule] Anchor element must appear 'ordinary' in M1 — audience won't especially notice it. M2-M6 accumulate enough info to completely reframe the same element in M7. Accumulation is gradual — M7 doesn't suddenly introduce new info, it merely 'presents' the change. The anchor doesn't change; the audience changes.
[M-Param Mapping] M1=anchor's first appearance, embedded in routine context. M2-M6=normal narrative progression, not specifically serving the bookend — middle's power is its own story, not 'preparing to change the anchor's meaning.' M7=exact anchor recurrence. Higher precision of recurrence (same word, same angle, same melody) = stronger meaning-shift impact. M7 may hard-cut after recurrence, or hold silence to let meaning settle.
[Pacing] M1 anchor presented at routine tempo — no emphasis, audience shouldn't feel 'this matters.' M7 anchor presented slowly, ceremonially — audience needs time to recognize 'this is identical to the opening' and feel meaning fracture. Between M1 and M7: anchor may be casually referenced once at M4 or M5 in different context, as a mid-echo.
[Prohibitions] Anchor must NOT be emphasized in M1 — if audience knows 'this returns at the end,' surprise dies. M7 recurrence must NOT alter the anchor's surface form — same word, same angle, exact match; all meaning shift comes from within the audience. Middle narrative(M2-M6) must NOT distort natural plot to 'serve the bookend' — the bookend is a structural gift, not a structural cage.`,

      skeletons: [
        'anchor_element_锚定元素',
        'narrative_journey_叙事旅程',
        'meaning_accumulated_意义积累',
        'anchor_returns_transformed_锚定回归意义翻转',
      ],
      reference: '《降临》(Arrival)；《美国丽人》(American Beauty)；《公民凯恩》(Citizen Kane, "Rosebud")；《百年孤独》开篇结构(One Hundred Years of Solitude)',
      referenceEn: 'Arrival; American Beauty; Citizen Kane ("Rosebud"); One Hundred Years of Solitude (opening structure)',
    },
  ]
};
