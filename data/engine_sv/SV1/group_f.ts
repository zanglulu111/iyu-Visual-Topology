import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_F: LibraryCategoryDef = {
  id: 'cat_sv1_eastern_essay',
  name: `东方·散文·静观`,
  nameEn: 'Eastern / Essay / Contemplation',
  items: [
    {
      id: 'KISHOTENKETSU',
      name: '起承转合',
      nameEn: 'Kishōtenketsu / Four-Phase Without Conflict',
      group: 'F. 东方·散文·静观',
      groupEn: 'Eastern / Essay / Contemplation',

      def: '四段式结构：起（引入）、承（延展）、转（错位）、合（融合）。没有对立的敌人，没有上升的冲突曲线。叙事的推进力不来自冲突而来自「转」——一个意外的视角偏移让前两段的含义发生质变。',
      defEn: 'Four-phase structure: Ki (introduce), Shō (develop), Ten (twist/shift), Ketsu (reconcile). No antagonist, no rising conflict curve. Narrative drive comes not from conflict but from Ten — an unexpected perspective shift that transforms the meaning of the first two phases.',

      core: `【场景排列】严格四段。起(Ki/M1-M2)=引入一个世界/人物/状态，建立一种平稳的基调。这里没有「问题需要解决」，只有「一种存在被呈现」。承(Shō/M3-M4)=沿着「起」建立的方向继续延展，加深对同一世界的理解。不引入矛盾，而是让观众更深地浸入。承是起的回声和放大。转(Ten/M5)=全片最关键的节点——一个看似无关的元素、一个意外的视角、一个并置突然出现，迫使观众重新审视前面所有的画面。转不是冲突，是错位（ずれ/zure）。它不推翻起承，而是在它们之上叠加一层新的意义。合(Ketsu/M6-M7)=将起承和转融合成一个新的整体。不是解决了什么问题，而是看到了一种新的状态。合的情绪是「啊，原来如此」，不是「终于赢了」。
【信息规则】起承阶段的信息呈现必须是自洽的——观众应该认为「这就是全部」。转的引入不否定起承的信息，而是增加一个新的信息维度，使得旧信息在新维度下呈现不同的含义。核心机制是「再看一遍」——转之后，观众如果回头看起承，会发现同样的画面/细节现在有了完全不同的意味。合不提供额外的解释——融合是观众自己完成的认知过程，叙事只提供并置，不提供结论。
【M参数映射】M1=世界的第一个画面/第一个感觉，不需要冲突因子。M2=同一世界的第二个面向，与M1形成延展而非对立。M3=M1-M2建立的状态的进一步深化。M4=浸入最深处——观众最舒适/最确信自己理解了这个世界的时刻。M5=转(Ten)——一个完全出乎意料的元素。它与前面的内容没有因果关系，但有隐秘的共鸣关系。M5是全片的结构枢纽——它不解决任何问题，而是改变观看的方式。M6=融合开始——起承的世界和转的世界开始在同一个画面中共存。M7=新的整体——一种被转改变了的、包含了更多维度的平静。
【结构比例】起≈20% / 承≈30% / 转≈15% / 合≈35%。承必须足够长，让观众完全浸入；转必须足够短，制造认知震荡；合必须足够长，让融合自然发生。
【禁忌】严禁在「转」中引入冲突/敌人/危机——转是视角偏移，不是冲突注入。严禁让「合」变成「解决问题」——合是认知融合，不是戏剧解决。严禁在起承阶段暗示「即将出事」的紧张感——前两段的基调必须是平稳甚至日常的。严禁用因果逻辑连接「转」与前面的内容——转的力量在于它的非因果性（无缘性/えん）。`,

      coreEn: `[Scene Order] Strict four phases. Ki(M1-M2)=introduce a world/character/state, establish a steady tone. No 'problem to solve,' only 'a mode of being presented.' Shō(M3-M4)=continue extending in Ki's direction, deepen understanding of the same world. No contradiction introduced; audience immerses deeper. Shō is Ki's echo and amplification. Ten(M5)=the film's most critical node — a seemingly unrelated element, an unexpected perspective, a juxtaposition suddenly appears, forcing audience to re-examine everything preceding it. Ten is not conflict but displacement (ずれ/zure). It doesn't overturn Ki-Shō but overlays a new layer of meaning. Ketsu(M6-M7)=fuse Ki-Shō and Ten into a new whole. Not problem-solved but new-state-seen. Ketsu's emotion is 'ah, so that's what it was,' not 'finally won.'
[Info Rule] Ki-Shō information must be self-consistent — audience should believe 'this is everything.' Ten doesn't negate Ki-Shō info but adds a new dimension, making old info carry different meaning under new dimension. Core mechanism: 'watch again' — after Ten, looking back at Ki-Shō reveals same images/details now carry entirely different significance. Ketsu provides no extra explanation — fusion is a cognitive process completed by the audience; narrative offers juxtaposition, not conclusion.
[M-Param Mapping] M1=world's first image/sensation, no conflict needed. M2=same world's second facet, extending M1 not opposing it. M3=further deepening of M1-M2's state. M4=deepest immersion — the moment audience is most comfortable/most certain they understand this world. M5=Ten — a completely unexpected element. No causal relation to preceding content, but secret resonance. M5 is the structural pivot — it solves nothing but changes the way of seeing. M6=fusion begins — Ki-Shō's world and Ten's world start coexisting in the same frame. M7=new whole — a calm that has been transformed by Ten, containing more dimensions.
[Proportions] Ki≈20% / Shō≈30% / Ten≈15% / Ketsu≈35%. Shō must be long enough for full immersion; Ten must be brief enough to create cognitive shock; Ketsu must be long enough for fusion to occur naturally.
[Prohibitions] No conflict/enemy/crisis in Ten — Ten is perspective displacement, not conflict injection. No 'problem solving' in Ketsu — Ketsu is cognitive fusion, not dramatic resolution. No tension-building ('something's about to happen') in Ki-Shō — first two phases must be steady, even mundane. No causal logic connecting Ten to preceding content — Ten's power lies in its non-causality (無縁/えん).`,

      skeletons: [
        'ki_起',
        'sho_承',
        'ten_转',
        'ketsu_合',
      ],
      reference: `四コマ漫画结构传统；《千与千寻》(Spirited Away)；芥川龙之介短篇；小津安二郎中段结构(Ozu's mid-sections)`,
      referenceEn: `Four-panel manga (4-koma) structural tradition; Spirited Away; Akutagawa short stories; Ozu Yasujirō mid-film structures`,
    },

    {
      id: 'SLICE_OF_LIFE',
      name: '生活流/日常散点',
      nameEn: 'Slice of Life / Quotidian Drift',
      group: 'F. 东方·散文·静观',
      groupEn: 'Eastern / Essay / Contemplation',

      def: '截取生活中的一段时间，不设起因不给结局。没有高潮的弧线，只有日常的质感——吃饭、等待、走路、沉默。叙事的价值不在事件而在状态的精确描摹。',
      defEn: 'Extract a segment of life, no inciting incident, no resolution. No climactic arc, only the texture of dailiness — eating, waiting, walking, silence. Narrative value lies not in events but in precise rendering of states.',

      core: `【场景排列】没有传统的M1-M7弧线。叙事由一系列松散连接的「生活切片」组成，每个切片是一个完整的日常瞬间（一餐饭/一段路/一个等待/一次沉默的相处）。M1=进入一个人物的日常——不是「故事开始」而是「镜头刚好在这个时刻切入」。M2-M6=日常的持续——场景之间不通过因果关系连接，而通过时间的自然流动、空间的相邻性、或情绪的微妙共振。没有「发展」的方向感，只有存在的持续感。M7=离开——不是「故事结束」而是「镜头刚好在这个时刻移开」。进入和离开是人为的切割，生活在镜头之外继续。
【信息规则】信息以极低密度、极高精度分布。每一个生活切片中只提供少量的「事实」，但这些事实的物理质感必须极度精确——光线的角度/食物的温度/衣服的褶皱/声音的质地。拒绝解释——人物不会说「我很孤独」，但观众可以从他吃饭的方式看出来。没有秘密、没有悬念、没有隐藏信息——一切都在表面，但表面本身就是深度。「枕词」（まくらことば）式信息——看似无意义的重复细节（每次出现的同一条街道/同一个动作），在累积之后自然生成意义。
【M参数映射】M1=一个人在做一件日常的事。不建立「世界观」，不介绍「背景」，只呈现一个正在发生的动作。M2=另一个日常片段，与M1可能有人物关联也可能没有。M3=日常中的一个微小变化——不是事件而是感觉的微移（今天的光线不一样了/路上的人变少了/食物的味道变了）。M4=日常的深处——最「无聊」的一段，但恰恰是结构的锚点。一个长镜头/一段无对话的等待/一个持续的环境音。M5=如果存在，一个微小的断裂——不是危机而是日常表面的一道细纹（一个不寻常的眼神/一封没打开的信/一次比平时长的停顿）。M6=断裂之后的日常继续——什么都没有改变，或者什么都改变了，但改变不被命名。M7=日常的继续——镜头移开，生活不停。
【节奏规则】节奏由自然时间驱动——吃一顿饭需要多长时间，走一段路需要多长时间。不压缩，不省略「无聊」的部分。沉默是结构材料——对话之间的间隔和对话本身等重。声音设计以环境音为主体——风/水/锅铲/脚步/远处的电视，构成「生活的音乐」。整体节奏接近呼吸——缓慢、均匀、偶有一次不规则的深吸气。
【禁忌】严禁注入外部事件打破日常——不可以突然来一个电话/一个意外/一个冲突。严禁让角色反思自己的生活——自我分析属于心理剧，不属于生活流。严禁压缩时间——蒙太奇和时间跳跃破坏日常的连续质感。严禁在结尾赋予意义——生活流不给出「原来这一天教会了我什么」的顿悟。`,

      coreEn: `[Scene Order] No traditional M1-M7 arc. Narrative composed of loosely connected 'life slices,' each a complete quotidian moment (a meal/a walk/a wait/silent company). M1=entering a character's daily life — not 'story begins' but 'camera happens to cut in at this moment.' M2-M6=dailiness continues — scenes connected not by causality but by natural time flow, spatial adjacency, or subtle emotional resonance. No directional 'development,' only continued existence. M7=departure — not 'story ends' but 'camera happens to move away.' Entry and exit are artificial cuts; life continues beyond the frame.
[Info Rule] Information at ultra-low density, ultra-high precision. Each life slice provides minimal 'facts,' but physical texture of those facts must be extremely precise — light angle/food temperature/fabric wrinkles/sound texture. Refuse explanation — character won't say 'I'm lonely,' but audience sees it in how they eat. No secrets, no suspense, no hidden info — everything is on the surface, but surface itself IS depth. 'Pillow-word' (枕詞/makurakotoba) information — seemingly meaningless repeated details (same street appearing each time/same gesture), naturally generating meaning through accumulation.
[M-Param Mapping] M1=a person doing a daily thing. No worldbuilding, no exposition, just a present action. M2=another daily fragment, may or may not share characters with M1. M3=a micro-change in dailiness — not event but sensation shift (today's light is different/fewer people on the street/food tastes different). M4=the depth of dailiness — the 'most boring' segment, yet the structural anchor. A long take/an unspoken wait/sustained ambient sound. M5=if present, a micro-fracture — not crisis but a fine crack in dailiness's surface (an unusual glance/an unopened letter/a pause longer than normal). M6=dailiness continues after fracture — nothing has changed, or everything has, but the change goes unnamed. M7=dailiness continues — camera moves away, life doesn't stop.
[Pacing] Rhythm driven by natural time — how long a meal takes, how long a walk takes. No compression, no skipping 'boring' parts. Silence is structural material — gaps between dialogue weigh as much as dialogue itself. Sound design: ambient sound as primary layer — wind/water/spatula/footsteps/distant TV forming 'life's music.' Overall rhythm resembles breathing — slow, steady, with occasional irregular deep inhale.
[Prohibitions] No external events injected to break dailiness — no sudden phone call/accident/conflict. No character self-reflection — self-analysis belongs to psychological drama, not slice of life. No time compression — montage and time jumps destroy dailiness's continuous texture. No meaning-assignment at ending — slice of life doesn't deliver 'so this day taught me...' epiphanies.`,

      skeletons: [
        'entering_dailiness_进入日常',
        'texture_accumulation_质感积累',
        'micro_fracture_微小断裂',
        'dailiness_continues_日常继续',
      ],
      reference: `小津安二郎(Ozu Yasujirō)；侯孝贤《童年往事》(A Time to Live, A Time to Die)；是枝裕和《步履不停》(Still Walking)；阿巴斯《何处是我朋友的家》(Where Is the Friend's House?)`,
      referenceEn: `Ozu Yasujirō; Hou Hsiao-hsien, A Time to Live, A Time to Die; Kore-eda, Still Walking; Kiarostami, Where Is the Friend's House?`,
    },

    {
      id: 'SHANSHUI',
      name: '散点透视/游观',
      nameEn: 'Shanshui Gaze / Roaming Perspective',
      group: 'F. 东方·散文·静观',
      groupEn: 'Eastern / Essay / Contemplation',

      def: '借用中国山水画「散点透视」的空间逻辑：没有固定的消失点，视点在空间中漫游。叙事不围绕一个中心角色或一条情节线，而是像卷轴展开一样，缓缓呈现一个空间/社群/世界的全貌。',
      defEn: `Borrows the spatial logic of Chinese shanshui painting's "shifting perspective" (散点透视): no fixed vanishing point, viewpoint roams through space. Narrative doesn't orbit one central character or plot line but unfurls like a scroll, gradually revealing the full panorama of a space/community/world.`,

      core: `【场景排列】叙事如卷轴展开——视点从一个人物/空间「漫步」到下一个，没有主次之分。M1=进入一个空间（村庄/街区/建筑群/河流沿岸），视点从空间的一端开始。M2=第一组人物/事件——视点短暂停留，观察一个局部的生活。M3=视点漫游到相邻的空间，遇到第二组人物/事件——与第一组之间没有因果关系，但共享同一个空间生态。M4=视点继续漫游，更多的局部被呈现。每个局部之间的关系不是情节连接而是空间连接（隔壁/对面/上游/下游/同一条路的不同路段）。M5=视点到达某个空间的「深处」——最偏远/最隐蔽/最被忽略的角落。M6=视点开始回程或升起——从局部回到整体。M7=全景——所有之前观察过的局部在一个视角中同时呈现，各自独立又共同构成一个整体。
【信息规则】信息平等分布——没有「主要信息」和「次要信息」的等级，每个局部的生活/事件/人物拥有同等的叙事权重。视点的移动本身就是信息——从A到B的路径（穿过什么/经过什么/听到什么）构成一种隐性叙事。空间关系代替因果关系——「他们是邻居」比「他们有仇」更重要。人物不需要被完整介绍——视点经过时看到的那个瞬间就是他们的全部。「留白」（空白处的意义）——视点故意跳过某些空间，未被看到的部分和被看到的部分共同构成完整的画面。
【M参数映射】M1=空间入口——不是角色入口。首先建立的是空间本身（地形/光线/气候/声音生态），人物是空间的一部分而非空间的主人。M2=第一个局部——一个具体的人在做一件具体的事，视点以第三方观察者的距离停留。M3=第二个局部——视点的漫游路径本身（经过的小巷/看到的墙上的痕迹/听到的远处声音）是M3的重要组成部分。M4=更多局部——每个局部之间不设转场，视点的移动就是转场。M5=空间的隐藏层——每个空间都有一个观光客看不到的角落，M5进入那里。M6=视点后退/升高——空间的尺度从微观切换到中观。M7=全景呈现——不是总结而是一种包含性的凝视：所有局部同时在场。
【节奏规则】节奏由空间距离驱动——视点停留的时间与该局部的空间深度成正比（一条小巷30秒，一个院落2分钟，一片田野5分钟）。无需高潮——节奏曲线接近水平线，有微小的起伏但没有山峰。视点移动时的速度是恒定的——不赶路，不加速，模拟步行/行船/骑行的物理节奏。声音设计跟随空间变化——每进入一个新的局部，环境音完全更换（市场的喧嚣→小巷的安静→河边的水声→远处的狗吠）。
【禁忌】严禁设立主角——所有人物的叙事权重平等。严禁在局部之间建立因果关系——A局部发生的事不可以「导致」B局部发生的事。严禁使用主观视角——视点必须保持第三方漫游者的距离，不进入任何角色的内心。严禁在M7中给出「这个空间的意义」——意义是空间自身散发的，不是叙事赋予的。`,

      coreEn: `[Scene Order] Narrative unfurls like a scroll — viewpoint 'strolls' from one character/space to the next, none prioritized. M1=enter a space (village/neighborhood/complex/riverbank), viewpoint begins at one end. M2=first cluster of characters/events — viewpoint briefly pauses, observes a local slice of life. M3=viewpoint roams to adjacent space, encounters second cluster — no causal link to first, but shared spatial ecology. M4=viewpoint continues roaming, more localities presented. Relations between localities are spatial, not causal (next door/across the way/upstream/downstream/different stretches of same road). M5=viewpoint reaches space's 'depths' — most remote/hidden/overlooked corner. M6=viewpoint begins return or ascent — from local to whole. M7=panorama — all previously observed localities simultaneously present in a single perspective, each independent yet composing a whole.
[Info Rule] Information equally distributed — no hierarchy of 'main info' and 'side info'; each locality's life/events/people carry equal narrative weight. The viewpoint's movement itself IS info — the path from A to B (what it crosses/passes/overhears) forms implicit narrative. Spatial relation replaces causal relation — 'they are neighbors' matters more than 'they have a grudge.' Characters need not be fully introduced — the moment the viewpoint passes by IS their entirety. 'Negative space' (留白) — viewpoint deliberately skips certain spaces; the unseen and the seen together compose the complete picture.
[M-Param Mapping] M1=spatial entry — not character entry. Space itself established first (terrain/light/climate/sound ecology); people are part of space, not owners of it. M2=first locality — a specific person doing a specific thing, viewpoint at third-party observer distance. M3=second locality — the roaming path itself (alley traversed/marks on walls/distant sounds heard) is a key component. M4=more localities — no transitions between them; viewpoint movement IS the transition. M5=space's hidden layer — every space has a corner tourists don't see; M5 enters it. M6=viewpoint pulls back/rises — scale shifts from micro to meso. M7=panoramic presence — not summary but an inclusive gaze: all localities simultaneously present.
[Pacing] Rhythm driven by spatial distance — dwell time proportional to each locality's spatial depth (alley 30s, courtyard 2min, field 5min). No climax needed — rhythm curve nearly flat, with micro-undulations but no peaks. Viewpoint movement speed is constant — no rushing, no accelerating, simulating walking/boating/cycling's physical rhythm. Sound design follows spatial change — entering each new locality completely replaces ambient sound (market bustle→alley quiet→riverside water→distant barking).
[Prohibitions] No protagonist — all characters carry equal narrative weight. No causal relations between localities — what happens in locality A must NOT 'cause' events in B. No subjective POV — viewpoint must maintain third-party roamer distance, never entering any character's interiority. No 'meaning of this space' in M7 — meaning emanates from space itself, not assigned by narrative.`,

      skeletons: [
        'spatial_entry_空间入口',
        'locality_A_局部A',
        'locality_B_局部B',
        'panoramic_gaze_全景凝视',
      ],
      reference: '贾樟柯《三峡好人》(Still Life)；《清明上河图》(Along the River During Qingming)；侯孝贤《恋恋风尘》(Dust in the Wind)；蔡明亮《郊游》(Stray Dogs)',
      referenceEn: 'Jia Zhangke, Still Life; Along the River During Qingming Festival (scroll painting); Hou Hsiao-hsien, Dust in the Wind; Tsai Ming-liang, Stray Dogs',
    },

    {
      id: 'KOAN',
      name: '公案/顿悟',
      nameEn: 'Kōan / Sudden Awakening',
      group: 'F. 东方·散文·静观',
      groupEn: 'Eastern / Essay / Contemplation',

      def: '禅宗公案式结构：叙事提出一个不可用逻辑解答的问题/情境，角色在困惑中挣扎，最终通过一个非理性的瞬间（棒喝/荒谬事件/沉默）获得某种超越概念框架的领悟。领悟不可被语言复述。',
      defEn: 'Zen kōan structure: narrative poses a question/situation unsolvable by logic, character struggles in confusion, finally achieves a trans-conceptual realization through a non-rational moment (a shout/an absurd event/silence). The realization cannot be restated in words.',

      core: `【场景排列】三段式，但不是「起承转合」也不是「三幕剧」——是「惑→困→破」。惑(M1-M2)=角色遭遇一个不可理解的情境/问题/人物。这个情境的特征是：看似简单但无法用已有的认知框架处理。它可能是一句矛盾的话（「杀佛」/「无门关」）、一个不合逻辑的要求、一个无法解释的事件。角色（和观众）试图用理性去理解它，但每一次尝试都失败。困(M3-M5)=角色被困在这个问题中。所有理性的出路都被堵死——逻辑分析无效/经验不适用/权威给不出答案。角色经历一系列的「错误领悟」——每次以为理解了，都被新的矛盾推翻。困的过程是「概念框架的崩溃」。破(M6-M7)=顿悟的瞬间——不是通过推理得到答案，而是认知框架本身被击碎。触发顿悟的可以是：一个荒谬的物理事件（棒喝/石头落水/花开的声音）、一个看似无关的日常动作（吃饭/扫地/过桥）、或纯粹的沉默。顿悟之后角色的行为发生了质变——但他无法解释发生了什么。
【信息规则】公案的核心信息规则是「不可说」（不立文字）。叙事提出问题但严禁提供答案——答案存在于问题被溶解的瞬间，而非被解决的瞬间。惑阶段的信息设计：给出足够的细节让观众相信「这应该有一个理性答案」，然后逐一关闭所有理性路径。困阶段的信息设计：每一次「错误领悟」必须是合理的——角色不是愚蠢，而是框架本身有限。破阶段：零解释。顿悟的瞬间不配旁白、不配音乐高潮、不配「我终于明白了」的台词。只有一个行为/表情的变化。
【M参数映射】M1=日常世界，角色的认知框架被建立——他是一个「靠理性运作的人」（学者/工程师/怀疑论者）。M2=公案的出现——不可解的情境/问题，它必须简单到可以一句话说清，但复杂到无法穷尽。M3=第一次理性尝试——用已有知识去解答，失败。M4=更深的困境——放弃了第一个框架，尝试新框架，再次失败。角色开始质疑自己而非问题。M5=最深的困——所有框架都崩溃了，角色处于「不知道自己不知道什么」的状态。这是最痛苦但最关键的节点。M6=触发瞬间——一个极其微小的物理事件打破了僵局。不是答案来了，而是问题消失了。M7=顿悟之后——角色回到日常世界，做着和M1同样的事情，但一切都不同了。
【结构比例】惑≈20% / 困≈50% / 破≈30%。困必须占最大比例——捷径式的顿悟是虚假的。角色必须在困中真正受苦，顿悟才有重量。
【禁忌】严禁让顿悟是一个「答案」——「我明白了，原来答案是X」完全违背公案结构。严禁让触发顿悟的事件与公案有逻辑关联——逻辑关联会把顿悟降格为「推理」。严禁在顿悟后让角色用语言解释自己的领悟——能说出来的就不是顿悟。严禁让顿悟是「情感释放」（哭泣/拥抱/和解）——顿悟是认知事件，不是情感事件。`,

      coreEn: `[Scene Order] Three phases, neither kishōtenketsu nor three-act — it is 'Confusion → Entrapment → Breakthrough.' Confusion(M1-M2)=character encounters an incomprehensible situation/question/person. Its hallmark: seemingly simple but unprocessable by existing cognitive frameworks. It may be a contradictory phrase ('kill the Buddha'/'the Gateless Gate'), an illogical demand, an inexplicable event. Character (and audience) tries rational understanding; every attempt fails. Entrapment(M3-M5)=character trapped in this question. All rational exits blocked — logic doesn't work/experience doesn't apply/authority can't answer. Character undergoes a series of 'false realizations' — each time thinking they understand, new contradiction overturns it. Entrapment IS the collapse of conceptual frameworks. Breakthrough(M6-M7)=sudden awakening — not an answer arrived at through reasoning, but the cognitive framework itself shatters. Trigger can be: an absurd physical event (a shout/stone hitting water/sound of a flower blooming), a seemingly unrelated daily action (eating/sweeping/crossing a bridge), or pure silence. After awakening, character's behavior qualitatively changes — but they cannot explain what happened.
[Info Rule] Kōan's core info rule: 'the unspeakable' (不立文字/no reliance on words). Narrative poses a question but strictly prohibits providing an answer — the answer exists in the moment the question dissolves, not when it's solved. Confusion stage: provide enough detail for audience to believe 'there should be a rational answer,' then close all rational paths one by one. Entrapment stage: each 'false realization' must be reasonable — character isn't stupid, the framework itself is limited. Breakthrough stage: zero explanation. Awakening moment gets no voiceover, no musical climax, no 'I finally understand.' Only a behavioral/expression change.
[M-Param Mapping] M1=ordinary world, character's cognitive framework established — they are 'someone who operates on reason' (scholar/engineer/skeptic). M2=kōan appears — unsolvable situation/question, simple enough for one sentence yet impossible to exhaust. M3=first rational attempt — using existing knowledge, fails. M4=deeper entrapment — abandons first framework, tries new one, fails again. Character begins questioning themselves rather than the question. M5=deepest entrapment — all frameworks collapsed, character in 'doesn't know what they don't know' state. Most painful yet most critical node. M6=trigger moment — an extremely small physical event breaks the deadlock. Not that the answer arrived, but the question vanished. M7=post-awakening — character returns to ordinary world, doing the same things as M1, but everything is different.
[Proportions] Confusion≈20% / Entrapment≈50% / Breakthrough≈30%. Entrapment must be largest — shortcut awakening is false. Character must truly suffer in entrapment for awakening to carry weight.
[Prohibitions] Awakening must NOT be an 'answer' — 'I see, the answer is X' completely violates kōan structure. Trigger event must NOT have logical connection to the kōan — logical connection downgrades awakening to 'reasoning.' Character must NOT verbally explain their realization post-awakening — if it can be spoken, it's not awakening. Awakening must NOT be 'emotional release' (crying/hugging/reconciliation) — awakening is a cognitive event, not an emotional one.`,

      skeletons: [
        'confusion_惑',
        'entrapment_困',
        'trigger_moment_触发瞬间',
        'post_awakening_顿悟之后',
      ],
      reference: '《春夏秋冬又一春》(Spring, Summer, Fall, Winter... and Spring)；公案集《碧岩录》(The Blue Cliff Record)；赫尔曼·黑塞《悉达多》(Siddhartha)；塔可夫斯基《潜行者》(Stalker)',
      referenceEn: 'Spring, Summer, Fall, Winter... and Spring (Kim Ki-duk); The Blue Cliff Record (kōan collection); Hesse, Siddhartha; Tarkovsky, Stalker',
    },

    {
      id: 'LONG_GOODBYE',
      name: '漫长告别',
      nameEn: 'The Long Goodbye / Drawn-Out Farewell',
      group: 'F. 东方·散文·静观',
      groupEn: 'Eastern / Essay / Contemplation',

      def: '整个叙事是一次被拉长的分离。两个人（或一个人与一个地方/时代/身份）之间的告别不是一个事件而是一个漫长的过程——从意识到要失去，到试图挽留，到逐渐接受，到最终松手。',
      defEn: 'The entire narrative is a prolonged separation. Farewell between two people (or a person and a place/era/identity) is not an event but a drawn-out process — from realizing loss, to attempting to hold on, to gradual acceptance, to finally letting go.',

      core: `【场景排列】M1=共处——两人（或人与地方）仍在一起，但分离的阴影已经存在（即将搬走/诊断结果/季节在变/时代在结束）。M1的关键是：分离尚未发生但已经不可避免——这个「尚未」和「不可避免」之间的张力是全片的基调。M2=第一次试图不去想——两人做平常的事（吃饭/散步/工作），假装一切如常，但每个日常动作都被「这是最后一次」的意识染色。M3=无法假装了——分离的现实开始渗透日常，某个物理信号打破了伪装（收拾行李/签文件/身体的衰退变得可见）。M4=挽留的尝试——不是戏剧性的「别走」，而是一系列微小的挽留动作（多做一道菜/多说一个故事/找借口延长在一起的时间）。挽留者知道挽留是无效的，但仍然在做。M5=最后的共处时光——两人都知道这是最后了，不再假装也不再挽留。这是全片最安静也最重的一段——做最后一件一起做的事（最后一顿饭/最后一次散步/最后一个夜晚）。M6=分离的物理发生——火车开了/门关了/人走了/呼吸停了。这个时刻必须短暂——因为真正的告别在M5已经完成，M6只是物理确认。M7=独自留下——留下来的人回到同一个空间，但空间已经空了。一个没有对方的日常动作（一个人吃饭/一个人走那条路）。
【信息规则】分离的原因不需要被详细解释——重要的不是「为什么要分开」而是「分开的过程是什么质感的」。核心信息机制是「最后一次」的光晕效应——当你知道这是最后一次做这件事时，这件事的每一个细节都变得异常清晰。日常动作被放大为仪式——洗碗不再是洗碗，是「最后一次一起洗碗」。未说出的话比说出的话更重要——角色想说「不要走」但说出来的是「路上小心」。时间感知的扭曲——共处的时间在主观感受中越来越快（想要抓住但抓不住），分离后的时间越来越慢。
【M参数映射】M1=两人的空间配置——谁在哪里、他们之间的物理距离、他们共享什么物件/习惯/空间。M2=日常的伪装——具体的日常动作，但描述中要带着「最后一次」的意识。M3=伪装破裂的物理信号——必须是视觉/触觉可感知的，不是对话。M4=微小挽留动作——不是语言行为而是物理行为（多倒一杯茶/把他的衣服再洗一遍/修一个早就该修的东西）。M5=最后的共处——全片最慢的场景，时间几乎停滞。两人之间的对话（如果有）只涉及眼前的事物，不涉及分离本身。M6=分离的物理瞬间——极短，不超过全片的5%。M7=空间中的缺席——同一个空间、同样的光线，但少了一个人。物件成为缺席的证据（对方的杯子还在桌上/对方的气味还在枕头上）。
【节奏规则】整体节奏是减速——从M1到M7，叙事速度持续降低。M1接近正常生活速度，M5接近静止。M6是全片唯一的「快」——分离的瞬间是突然的（即使漫长的告别，门关上的那一刻也是一瞬间）。M7再次减速到极慢——沉默和空间本身成为叙事。
【禁忌】严禁让分离被取消——「留下来了」/「回来了」/「没有死」会彻底消解告别的重量。严禁戏剧化挽留——哭喊/跪下/「我不让你走」属于情节剧，不属于漫长告别。严禁在M7中引入新的关系/希望——告别之后的空间必须保持空的，不可以被新的存在填满。严禁解释分离的「意义」——分离没有意义，只有重量。`,

      coreEn: `[Scene Order] M1=togetherness — two people (or person and place) still together, but separation's shadow already present (about to move/diagnosis/season changing/era ending). M1's key: separation hasn't happened yet but is inevitable — the tension between 'not yet' and 'inevitable' IS the film's tone. M2=first attempt not to think about it — doing normal things (eating/walking/working), pretending normalcy, but every daily action colored by 'this is the last time' awareness. M3=can't pretend anymore — separation's reality seeps into dailiness, a physical signal breaks the pretense (packing/signing papers/visible physical decline). M4=attempts to hold on — not dramatic 'don't go' but a series of micro-retention gestures (cooking one more dish/telling one more story/finding excuses to extend time together). The one holding on knows it's futile but does it anyway. M5=last shared time — both know it's the end, no more pretending or holding on. The quietest and heaviest segment — doing the last thing together (last meal/last walk/last night). M6=physical separation — train leaves/door closes/person departs/breathing stops. Must be brief — the real goodbye completed in M5, M6 is just physical confirmation. M7=left behind alone — remaining person returns to same space, now empty. A daily action without the other (eating alone/walking that road alone).
[Info Rule] Separation's cause needs no detailed explanation — what matters isn't 'why separate' but 'what texture does separating have.' Core mechanism: 'last time' halo effect — when you know this is the last time, every detail becomes abnormally vivid. Daily actions magnified into ritual — washing dishes is no longer washing dishes, it's 'last time washing dishes together.' Unspoken words matter more than spoken ones — character wants to say 'don't go' but says 'be safe on the road.' Time perception distortion — shared time subjectively accelerates (wanting to hold but can't), post-separation time decelerates.
[M-Param Mapping] M1=spatial configuration of two — who is where, physical distance between them, what objects/habits/spaces they share. M2=daily pretense — specific daily actions, described with 'last time' consciousness. M3=physical signal of pretense breaking — must be visual/tactile, not dialogue. M4=micro-retention gestures — physical acts not speech (pouring one more cup of tea/re-washing their clothes/fixing something long overdue). M5=last togetherness — the film's slowest scene, time nearly frozen. Dialogue (if any) concerns only immediate objects, never separation itself. M6=physical moment of separation — extremely brief, no more than 5% of total. M7=absence in space — same space, same light, minus one person. Objects become evidence of absence (their cup still on the table/their scent still on the pillow).
[Pacing] Overall rhythm: deceleration — from M1 to M7, narrative speed continuously decreases. M1 near normal life speed, M5 approaching stillness. M6 is the film's only 'fast' moment — separation is sudden (even after a long goodbye, the door closing IS instant). M7 decelerates again to extreme slow — silence and space become narrative.
[Prohibitions] Separation must NOT be cancelled — 'they stayed'/'they came back'/'they didn't die' annihilates farewell's weight. No dramatic retention — wailing/kneeling/'I won't let you go' belongs to melodrama, not long goodbye. No new relationship/hope in M7 — the space after farewell must remain empty, not filled by new presence. No explaining separation's 'meaning' — separation has no meaning, only weight.`,

      skeletons: [
        'togetherness_共处',
        'last_time_awareness_最后一次的意识',
        'micro_retention_微小挽留',
        'separation_moment_分离瞬间',
        'absence_in_space_空间中的缺席',
      ],
      reference: '《父与女》(Father and Daughter, 动画短片)；雷蒙德·卡佛《当我们谈论爱情时我们在谈论什么》(What We Talk About When We Talk About Love)；《漫长的告别》(The Long Goodbye, Chandler)；《东京物语》(Tokyo Story)',
      referenceEn: 'Father and Daughter (animated short); Carver, What We Talk About When We Talk About Love; Chandler, The Long Goodbye; Ozu, Tokyo Story',
    },
  ]
};
