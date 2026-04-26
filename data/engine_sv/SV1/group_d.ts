import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_D: LibraryCategoryDef = {
  id: 'cat_sv1_pov_narration',
  name: `视角与叙述层`,
  nameEn: 'POV & Narration Layer',
  items: [
    {
      id: 'RASHOMON',
      name: '罗生门',
      nameEn: 'Rashomon / Multi-POV',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: '同一事件被多个视角叙述，且各版本之间存在不可调和的矛盾。没有客观真相，只有主观真实。叙事的量子叠加态。',
      defEn: 'Same event narrated from multiple POVs with irreconcilable contradictions between versions. No objective truth, only subjective realities. Narrative quantum superposition.',

      core: `【场景排列】框架层：一个「审判/回溯」的当下场景作为容器（法庭/审讯室/围坐回忆）。嵌套层：同一核心事件(M2)被叙述N次（通常3-4次），每次来自不同视角。版本A[M1a→M2a→M3a→...→M7a] → 版本B[M1b→M2b→M3b→...→M7b] → 版本C[...] → 框架层结尾。核心事件(M2)在每个版本中的物理事实大致相同，但关键细节（谁先动手、表情含义、动机）截然不同。后一个版本必须推翻前一个版本中观众已经建立的某个核心判断。
【信息规则】每个版本都是「完整的」——在单独阅读时，每个版本都能自圆其说。矛盾只在版本之间产生。观众的认知状态随版本推进而变化：版本A后确信事实X → 版本B推翻X确立Y → 版本C推翻Y但不确立新的真相 → 最终观众被迫接受「没有真相」或「自行选择相信哪个」。每个叙述者都有隐瞒/美化的动机——没有「中立」视角。框架层可以提供物证（与所有版本都矛盾的物理证据），进一步解构真相的可能性。
【M参数映射】M2=核心事件，是所有版本共享的锚点——物理骨架相同（同一时间、同一地点、同一组人），但肌肉完全不同。M1在每个版本中呈现不同的日常——每个叙述者眼中的「正常世界」不一样，这暴露了他们的价值观。M4-M6在每个版本中呈现不同的障碍-行动-代价序列——每个叙述者都把自己的行为合理化。M7在每个版本中不同——每个叙述者都给出了对自己最有利的结局解释。框架层的M7=所有版本讲完后的当下时刻，通常是一个悬置——不裁判、不总结。
【结构比例】框架层(开头+结尾)≈15% / 版本A≈25% / 版本B≈25% / 版本C≈25% / 框架层回应≈10%。各版本篇幅严格对等——任何一个版本明显更长，观众会默认它是「真相」。
【禁忌】严禁设置一个「客观真相版本」——如果最后一个版本被呈现为真相，整个结构退化为普通的悬疑揭秘。严禁让叙述者之间的矛盾只是「记忆模糊」——矛盾必须是系统性的、源于利益和立场的。严禁所有版本共享相同的情绪基调——每个叙述者的版本应当有不同的节奏和氛围（一个版本是惊悚片，另一个是爱情片，第三个是喜剧）。`,

      coreEn: `[Scene Order] Frame layer: a present-tense 'trial/retrospection' scene as container (courtroom, interrogation room, campfire). Nested layer: same core event(M2) narrated N times (usually 3-4), each from different POV. Version A[M1a→M2a→...→M7a] → Version B[...] → Version C[...] → Frame ending. Core event's physical facts roughly shared, but key details (who struck first, expression meaning, motive) are contradictory. Each subsequent version must overturn a core judgment audience established from previous version.
[Info Rule] Each version is 'complete' — self-consistent when read alone. Contradictions emerge only between versions. Audience cognition shifts: after A, believes X → B overturns X, establishes Y → C overturns Y without establishing replacement → audience forced to accept 'no truth' or 'choose what to believe.' Every narrator has motive to conceal/embellish — no 'neutral' POV. Frame layer may provide physical evidence contradicting ALL versions.
[M-Param Mapping] M2=core event, shared anchor across all versions — same physical skeleton (time, place, people) but entirely different flesh. M1 differs per version — each narrator's 'normal world' reveals their values. M4-M6 differ per version — each narrator rationalizes their own behavior. M7 differs per version — each narrator gives self-serving ending explanation. Frame layer M7=present moment after all versions, usually suspended — no verdict, no summary.
[Proportions] Frame(opening+closing)≈15% / Version A≈25% / Version B≈25% / Version C≈25% / Frame response≈10%. Versions must be strictly equal length — a noticeably longer version reads as 'the truth.'
[Prohibitions] No 'objective truth version' — if the last version is presented as truth, structure degrades to ordinary mystery reveal. Contradictions must not be mere 'fuzzy memory' — must be systematic, rooted in interest and position. No shared emotional tone across versions — each should have different rhythm and atmosphere (one version is thriller, another romance, another comedy).`,

      skeletons: [
        'version_A_视角A',
        'version_B_视角B',
        'version_C_视角C',
        'irreconcilable_不可调和',
      ],
      reference: '《罗生门》(Rashomon)；《最后的决斗》(The Last Duel)；《消失的爱人》(Gone Girl)；《喧哗与骚动》(The Sound and the Fury, Faulkner)',
      referenceEn: 'Rashomon; The Last Duel; Gone Girl; The Sound and the Fury (Faulkner)',
    },

    {
      id: 'FRAME',
      name: '套层/戏中戏',
      nameEn: 'Frame Narrative / Story-within-Story',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: '故事开始于某人「讲故事」。核心的M1-M7被包裹在另一个叙事框架里。框架与内层互相注释、互相渗透。',
      defEn: 'Story begins with someone "telling a story." Core M1-M7 is wrapped inside another narrative frame. Frame and inner layer annotate and permeate each other.',

      core: `【场景排列】框架层(Frame)：F1(讲述的起因)→ F2(开始讲故事)→ [内层故事展开] → F3(讲述的中断/回到框架)→ [内层继续] → F4(讲述结束/框架层结局)。内层(Inner)：正常的M1→M2→M3→M4→M5→M6→M7。框架层与内层之间可以有多次切换——内层讲到关键时刻，切回框架层（听众反应/讲述者犹豫/外部事件打断），再切回内层继续。框架层的时间通常远短于内层时间（框架是一个晚上，内层是几十年）。
【信息规则】框架层的「讲述者」对内层故事拥有全知视角——他已经知道结局。但他选择以什么顺序、省略什么细节来讲述，本身就是一种信息操控。观众需要同时追踪两个问题：①内层故事本身的悬念 ②讲述者为什么要讲这个故事（框架层的动机）。框架层的听众与电影/文本的观众形成镜像——听众的反应暗示观众应有的反应，或故意误导。
【M参数映射】内层M参数正常展开。框架层有独立的微型M参数序列：F-M1=讲述者的当下状态，F-M2=触发讲述的原因（为什么此刻要讲这个故事），F-M7=讲述完成后讲述者的状态变化。框架层的F-M2必须与内层M2存在共振——讲述者当下遭遇了与内层故事相似的困境。框架层的F-M7必须因为「讲述了这个故事」而发生改变——讲述本身是一个行动(M5)。
【结构比例】框架层总计≈15-20%（分散在首尾和中间切换点） / 内层≈80-85%。框架层的切入点不应超过3次（开头、中间、结尾），否则会碎片化内层的沉浸感。
【禁忌】框架层严禁只是一个「引入装置」然后消失——如果框架层只出现在开头一段旁白然后再也不回来，它就不是套层结构，只是一个引子。讲述者严禁是完全可靠的——他的讲述必须有可被质疑的空间。内层故事的结局严禁完全在框架层中被预告——框架层可以暗示方向，但内层M7必须在自己的叙事逻辑中自然到达。`,

      coreEn: `[Scene Order] Frame layer: F1(reason for telling)→ F2(begins telling)→ [Inner story unfolds] → F3(interruption/return to frame)→ [Inner continues] → F4(telling ends/frame resolution). Inner: normal M1→M2→...→M7. Multiple switches between frame and inner allowed — inner interrupted at key moments, cut to frame (listener reactions/narrator hesitation/external events), then back. Frame time usually far shorter than inner time (frame=one evening, inner=decades).
[Info Rule] Frame narrator has omniscient view of inner story — already knows the ending. But what order they tell it in, what details they omit, IS info manipulation. Audience tracks two questions simultaneously: ①inner story suspense ②why is narrator telling this story now (frame motivation). Frame listener mirrors the text's audience — listener reactions hint at intended audience response, or deliberately mislead.
[M-Param Mapping] Inner M-params unfold normally. Frame has independent micro M-params: F-M1=narrator's current state, F-M2=trigger for telling (why tell this story now), F-M7=narrator's state change after telling. F-M2 must resonate with inner M2 — narrator currently faces a dilemma similar to inner story's. F-M7 must change because of having told the story — telling IS an action(M5).
[Proportions] Frame total≈15-20% (distributed across opening, mid-switches, ending) / Inner≈80-85%. Frame intrusions should not exceed 3 (opening, middle, ending) — more fragments inner immersion.
[Prohibitions] Frame must NOT be just an 'intro device' that disappears — if frame appears only as opening voiceover and never returns, it's not frame narrative, just a prologue. Narrator must NOT be fully reliable — their telling must have questionable space. Inner story's ending must NOT be fully spoiled in frame — frame may hint at direction, but inner M7 must arrive through its own narrative logic.`,

      skeletons: [
        'frame_opens_框架开启',
        'inner_story_内层故事',
        'frame_intrusion_框架侵入',
        'frame_closes_框架闭合',
      ],
      reference: '《布达佩斯大饭店》(Grand Budapest Hotel)；《一千零一夜》(One Thousand and One Nights)；《呼啸山庄》(Wuthering Heights)；《公主新娘》(The Princess Bride)',
      referenceEn: 'The Grand Budapest Hotel; One Thousand and One Nights; Wuthering Heights; The Princess Bride',
    },

    {
      id: 'META',
      name: '元叙事/打破第四墙',
      nameEn: 'Meta-Narrative / Fourth Wall Break',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: '角色意识到自己身处「故事」之中——对话观众、试图修改剧本、讨论叙事惯例。叙事自我指涉，结构裸露其自身的建造过程。',
      defEn: 'Characters aware they\'re inside a "story" — addressing audience, attempting to modify script, discussing narrative conventions. Narrative self-reference, structure exposes its own construction.',

      core: `【场景排列】两种基本模式。模式A「间歇性打破」：正常叙事M1→M2→M3→...→M7进行中，角色在某些节点暂停叙事、面向观众/读者说话（解释、吐槽、请求帮助），然后叙事继续。模式B「持续性元意识」：角色从一开始就知道自己在故事中，整个叙事就是角色试图与故事本身博弈的过程——M4(障碍)就是叙事惯例本身（「按照类型片规则我现在应该死了」），M5(行动)就是试图改写自己的剧本。
【信息规则】角色与观众之间的信息壁垒被主动拆除。元叙事角色拥有「类型意识」——他知道自己在什么类型的故事中，知道类型惯例是什么，可以预判情节走向。这制造了双层悬念：①故事内部的悬念（会发生什么） ②元层悬念（角色能否改变注定的故事走向）。观众的认同目标从「角色的命运」转移到「角色与叙事结构之间的博弈」。
【M参数映射】M1=日常世界的建立 + 元意识的首次显露（角色第一次意识到/表示自己在故事中）。M2=遭遇，可以是故事内部的事件，也可以是「发现自己在故事中」这件事本身。M3=目标分裂为两层：故事内目标（拯救/逃离/爱）+ 元目标（改写结局/逃出叙事/与作者对话）。M4=障碍同时存在于两层：故事内障碍 + 叙事惯例的约束（「我想活下来但类型片规则说我必须死」）。M5=行动在两层上同时发生。M6=代价——元叙事角色的代价往往是「打破第四墙后再也无法回到天真的故事沉浸中」。M7=结局必须同时回应两层：故事内结局 + 元层结局（角色最终接受了叙事/改写了叙事/摧毁了叙事）。
【节奏规则】第四墙打破的频率应当有控制：开头稀疏（让观众先进入故事世界），中段增加（元意识加深），高潮处密集或完全消失（完全消失=角色最终选择全情投入故事，放弃元意识，这本身就是M5的选择）。每次打破第四墙必须提供信息——不能只是「对着观众眨眼」，必须揭示角色无法在故事内表达的东西。
【禁忌】第四墙打破严禁变成纯粹的搞笑插科打诨——每次打破必须服务于叙事功能（信息传递/角色揭示/结构评论）。严禁让元意识角色成为全知者——他可以意识到自己在故事中，但不可以知道故事的全部走向（否则悬念消失）。严禁在结尾用「这一切都只是一个故事」来消解前面的一切情感投入——元叙事的终点不是虚无主义，而是对「虚构」的重新尊重。`,

      coreEn: `[Scene Order] Two basic modes. Mode A 'intermittent break': normal M1→M2→...→M7, character pauses at certain nodes to address audience (explain, complain, ask for help), then narrative continues. Mode B 'persistent meta-awareness': character knows from the start they're in a story; entire narrative is character vs. story itself — M4(obstacle)=narrative conventions ('by genre rules I should die now'), M5(action)=attempting to rewrite their own script.
[Info Rule] Info barrier between character and audience actively dismantled. Meta character has 'genre awareness' — knows what type of story they're in, knows conventions, can predict plot direction. Creates dual suspense: ①story-internal (what happens) ②meta-level (can character change their destined story arc). Audience identification shifts from 'character's fate' to 'character's struggle against narrative structure.'
[M-Param Mapping] M1=ordinary world + first meta-awareness signal. M2=encounter, can be story-internal event OR 'discovering one is in a story' itself. M3=goal splits into two layers: story-internal goal + meta-goal (rewrite ending/escape narrative/dialogue with author). M4=obstacles on both layers: story-internal + narrative convention constraints. M5=action on both layers simultaneously. M6=cost — often 'after breaking the fourth wall, can never return to naive story immersion.' M7=must resolve both layers: story ending + meta ending (character accepts/rewrites/destroys the narrative).
[Pacing] Fourth-wall-break frequency must be controlled: sparse early (let audience enter story world), increasing mid (deepening meta-awareness), dense or completely absent at climax (complete absence=character chooses to fully commit to story, abandoning meta-awareness — that IS the M5 choice). Each break must provide info — not just 'winking at audience,' must reveal something inexpressible within the story.
[Prohibitions] Breaks must NOT become pure comic relief — each must serve narrative function (info/character reveal/structural commentary). Meta-aware character must NOT be omniscient — may know they're in a story but cannot know the full plot (suspense dies). Ending must NOT use 'it was all just a story' to dissolve all emotional investment — meta-narrative's endpoint is not nihilism but renewed respect for fiction.`,

      skeletons: [
        'story_surface_故事表层',
        'fourth_wall_break_打破第四墙',
        'meta_struggle_元层博弈',
        'meta_resolution_元层落点',
      ],
      reference: '《死侍》(Deadpool)；《楚门的世界》(The Truman Show)；《改编剧本》(Adaptation)；《如果在冬夜，一个旅人》(If on a Winter\'s Night a Traveler, Calvino)',
      referenceEn: 'Deadpool; The Truman Show; Adaptation; If on a Winter\'s Night a Traveler (Calvino)',
    },

    {
      id: 'UNRELIABLE',
      name: '不可靠叙述',
      nameEn: 'Unreliable Narrator',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: '叙述者在撒谎，或者叙述者的认知本身是扭曲的。观众接收到的全部信息都经过了一个不可信的过滤器。M7揭示之前的叙述部分或全部是虚构/幻觉/自欺。',
      defEn: 'Narrator is lying, or narrator\'s cognition is itself distorted. All information reaches audience through an unreliable filter. M7 reveals prior narration was partially or fully fabricated/hallucinated/self-deceptive.',

      core: `【场景排列】表面层：M1→M2→M3→M4→M5→M6→M7，看起来是一个完整的线性叙事。真实层：在M7(或M6-M7交界)，一个「揭示时刻」(Revelation Moment)暴露表面层的某些关键信息是虚假的——叙述者在欺骗观众，或叙述者在欺骗自己。揭示后，观众被迫回溯全部叙事，用新信息重新解读每一个场景。结构的核心效果是「第二次阅读」——观众在M7之后脑中自动重放全片，发现之前「正常」的场景中满是线索。
【信息规则】不可靠性的两种类型需要不同的信息策略。类型A「意识清醒的谎言」：叙述者知道自己在撒谎（如罪犯对警察的供述），必须在叙述中埋设「缝隙」——前后矛盾的小细节，观众第一遍看会忽略，揭示后回想会恍然大悟。类型B「无意识的扭曲」：叙述者真心相信自己的叙述（如精神分裂患者），必须在叙述的视觉/感官层面埋设「裂缝」——画面中出现不可能的元素（影子方向不对、镜中反射缺失），但叙述声音对此不做任何反应。两种类型都要求：线索必须公平——观众在揭示后能回忆起线索的存在。
【M参数映射】表面层M参数正常展开——这是叙述者「想让观众看到」的版本。真实层M参数在揭示后重构：真实的M2(遭遇)可能与叙述的M2完全不同；真实的M6(代价)可能远比叙述的惨重；真实的M1(日常)可能不是叙述者描述的那样。关键映射：叙述者的「不可靠」本身就是M4(障碍)——观众与真相之间的障碍是叙述者的过滤器。M5(行动)在揭示后被重新定义——叙述者选择说谎/自欺本身就是一个行动。M7=揭示时刻+观众的认知重构。
【结构比例】表面层叙事≈80-85% / 揭示+重构≈15-20%。线索应均匀分布在表面层全程——不可集中在揭示前才密集出现（那样太刻意）。至少需要3个独立的线索点，且分布在叙事的前段、中段、后段各一个。
【禁忌】揭示严禁依赖一个从未被暗示过的信息——「他其实一直是鬼」必须有前面的线索支撑，否则是欺骗读者。叙述者的不可靠严禁覆盖一切——至少部分叙述必须是真实的，否则观众会感到被完全愚弄。严禁在揭示后给出一个「稳定的真实版本」——最好的不可靠叙述在揭示后让观众不确定到底什么是真什么是假。`,

      coreEn: `[Scene Order] Surface layer: M1→M2→...→M7, appears to be complete linear narrative. True layer: at M7 (or M6-M7 junction), a 'Revelation Moment' exposes certain key surface-layer info as false — narrator deceiving audience, or narrator deceiving self. Post-revelation, audience forced to retroactively reinterpret every scene with new info. Core effect is 'second reading' — audience auto-replays entire narrative, discovering previously 'normal' scenes were full of clues.
[Info Rule] Two unreliability types require different info strategies. Type A 'conscious lies': narrator knows they're lying (criminal's confession to police); must embed 'seams' — small contradictions audience overlooks first time, recognizes after revelation. Type B 'unconscious distortion': narrator genuinely believes their narration (schizophrenic patient); must embed 'cracks' in visual/sensory layer — impossible elements (wrong shadow direction, missing mirror reflection) that narrative voice doesn't acknowledge. Both types require: clues must be fair — audience can recall them post-revelation.
[M-Param Mapping] Surface M-params unfold normally — this is the version narrator 'wants audience to see.' True layer M-params reconstructed post-revelation: true M2 may differ completely from narrated M2; true M6 may be far worse; true M1 may not be as described. Key mapping: narrator's unreliability IS M4(obstacle) — the barrier between audience and truth is the narrator's filter. M5(action) redefined post-revelation — choosing to lie/self-deceive IS an action. M7=revelation moment + audience cognitive reconstruction.
[Proportions] Surface narration≈80-85% / Revelation+reconstruction≈15-20%. Clues evenly distributed throughout surface — not clustered before revelation. Minimum 3 independent clue points, distributed one each in early/mid/late sections.
[Prohibitions] Revelation must NOT depend on info never hinted at — 'he was a ghost all along' needs prior clue support, otherwise it's cheating. Unreliability must NOT cover everything — at least part of narration must be true, else audience feels completely fooled. No 'stable true version' after revelation — best unreliable narration leaves audience uncertain about what was real and what wasn't.`,

      skeletons: [
        'surface_narration_表面叙述',
        'embedded_clues_埋设线索',
        'revelation_moment_揭示时刻',
        'cognitive_reconstruction_认知重构',
      ],
      reference: '《搏击俱乐部》(Fight Club)；《少年派的奇幻漂流》(Life of Pi)；《禁闭岛》(Shutter Island)；《洛丽塔》(Lolita, Nabokov)',
      referenceEn: 'Fight Club; Life of Pi; Shutter Island; Lolita (Nabokov)',
    },

    {
      id: 'O_HENRY',
      name: '欧亨利式反转',
      nameEn: 'The O. Henry Twist',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: 'M1-M6都在进行误导。结局M7揭示一个关键信息，彻底推翻之前的假设，产生「情理之中，意料之外」的结构震荡。反转不是欺骗——回看时一切都有迹可循。',
      defEn: 'M1-M6 misdirect. M7 reveals key info that overturns all prior assumptions, producing "logical in hindsight, shocking in the moment." The twist is not deception — everything traces back on re-read.',

      core: `【场景排列】M1→M2→M3→M4→M5→M6→M7(反转)→可选尾声。全程线性推进，表面上是一个标准故事。M7的最后时刻——通常是最后一句台词、最后一个画面、或最后一个动作——揭示一个被隐藏的信息。这个信息使得M1-M6的全部含义发生180度翻转。观众在M7之后经历「认知地震」：之前建立的因果理解全部失效，必须用新信息重建因果链。
【信息规则】反转的力量取决于两个反向要求的平衡：①最大惊奇——观众在M7之前绝对猜不到 ②最大合理——观众在M7之后回看时发现「所有线索都在那里」。实现方式：利用观众的认知偏见(cognitive bias)进行系统性误导——让观众基于类型惯例/日常常识做出错误假设，然后用同一组事实的另一种解释推翻它。关键技巧是「双重编码」：每一个关键场景/台词/物件都同时支持两种解读（误导解读和真实解读），观众自然会选择更符合惯例的解读，直到M7迫使他们切换到另一种。
【M参数映射】表面的M参数序列=观众被误导后理解的版本。真实的M参数序列=M7揭示后重新理解的版本。两个版本共享完全相同的物理事件，但M2的含义不同（遭遇的真实性质被隐藏）、M3的目标不同（主角的真实动机被隐藏）、M6的代价不同（真实的代价比表面更重或更轻）。M7=反转的揭示时刻，必须是一个具体的、可感知的信息（一个物件/一句话/一个身份），不能是抽象的领悟。
【结构比例】误导段(M1-M6)≈85% / 反转+尾声(M7)≈15%。但双重编码线索必须在M2(≈15%位置)就开始埋设——不能只在M6才开始铺垫反转。
【禁忌】反转严禁依赖观众不知道的信息——所有支撑反转的线索必须在M1-M6中出现过。反转严禁只是「更大的困难」或「更坏的消息」——它必须是对前提本身的重新定义（不是「情况更糟了」而是「情况根本不是你以为的那样」）。反转后严禁需要大段解释——如果M7之后需要角色花5分钟解释「其实是这样的」，说明双重编码没做好。反转本身应当是瞬间的领悟，不需要解说。`,

      coreEn: `[Scene Order] M1→M2→M3→M4→M5→M6→M7(twist)→optional epilogue. Linear progression, surface appears standard. M7's final moment — last line, image, or action — reveals hidden info. This info flips ALL meaning of M1-M6 by 180°. Audience experiences 'cognitive earthquake': prior causal understanding invalidated, must rebuild with new info.
[Info Rule] Twist power depends on balancing two opposing requirements: ①maximum surprise — audience absolutely can't guess before M7 ②maximum logic — audience finds 'all clues were there' on re-read. Method: systematically exploit audience cognitive bias — let them assume based on genre conventions/common sense, then overturn with alternative interpretation of SAME facts. Key technique: 'double encoding' — every key scene/line/object simultaneously supports two readings (misdirecting and true); audience naturally picks convention-matching reading until M7 forces switch.
[M-Param Mapping] Surface M-param sequence = audience's misdirected version. True M-param sequence = post-M7 reinterpretation. Both share identical physical events, but M2's meaning differs (encounter's true nature hidden), M3's goal differs (protagonist's true motive hidden), M6's cost differs (true cost heavier or lighter than apparent). M7=twist reveal moment, must be a concrete, perceivable piece of info (an object/line/identity), not abstract realization.
[Proportions] Misdirection(M1-M6)≈85% / Twist+epilogue(M7)≈15%. But double-encoded clues must begin at M2(≈15% mark) — can't start laying twist groundwork only at M6.
[Prohibitions] Twist must NOT depend on info audience never received — all supporting clues must appear in M1-M6. Twist must NOT be merely 'bigger problem' or 'worse news' — must redefine the premise itself ('situation isn't what you thought' not 'situation got worse'). No extended post-twist explanation — if M7 needs 5 minutes of 'actually what happened was...', double encoding failed. Twist should be instant realization, needing no commentary.`,

      skeletons: [
        'misdirection_setup_误导铺设',
        'double_encoded_clues_双重编码线索',
        'twist_moment_反转时刻',
        'recontextualization_全部改写',
      ],
      reference: '《麦琪的礼物》(The Gift of the Magi)；《第六感》(The Sixth Sense)；《致命魔术》(The Prestige)；《调音师》(L\'Accordeur)',
      referenceEn: 'The Gift of the Magi (O. Henry); The Sixth Sense; The Prestige; L\'Accordeur (The Piano Tuner)',
    },

    {
      id: 'MOCKUMENTARY',
      name: '伪纪录/访谈体',
      nameEn: 'Mockumentary / Found Footage',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: '伪装成纪录片/采访/监控录像/手持摄影的虚构叙事。通过模拟「非虚构」的形式惯例来制造真实感或反差幽默。摄影机本身是叙事中的角色。',
      defEn: 'Fiction disguised as documentary/interview/surveillance/found footage. Simulates non-fiction formal conventions to create verisimilitude or comedic contrast. The camera itself is a character in the narrative.',

      core: `【场景排列】叙事由两种素材类型交替构成。类型A「实况段」(Vérité)：手持/固定机位拍摄的「真实」场景，角色表现出「不知道在被拍」或「假装自然」的状态。类型B「采访/独白段」(Talking Heads)：角色面对镜头直接说话，评论/解释/回忆类型A中发生的事件。M参数主要在类型A中推进，类型B提供评论和反讽。M1-M7按时间正序展开，但类型B的采访可以是事后回溯的（角色已经知道结局，从未来回看过去）。
【信息规则】核心信息机制是「实况与评论之间的裂缝」。类型A展示「发生了什么」，类型B展示「角色认为发生了什么」——两者之间的差距产生反讽或悲剧效果。观众拥有两种素材的全部信息，可以自行判断「谁在自欺」「谁在说谎」「谁在美化」。摄影机的存在是信息规则的一部分——角色在镜头前的表现与镜头外不同，这种差异本身是信息。「伪纪录」形式制造一种认知陷阱：观众倾向于相信「纪录片格式=真实」，这种信任可以被利用或颠覆。
【M参数映射】M1=实况段建立日常世界 + 采访段介绍人物（角色面对镜头自我描述，但描述与观众看到的实况可能矛盾）。M2=实况段中的遭遇事件 + 采访段中角色对事件的反应/解释。M3-M4=实况段推进情节 + 采访段提供评论、暗示结局方向。M5=实况段中的关键行动——此时采访段可以消失（角色太投入忘记了镜头的存在），或者摄影机本身被卷入事件。M6=实况段中代价发生——「纪录片」格式让代价具有原始的、未经修饰的冲击力。M7=最后一个采访段——角色面对镜头总结，但观众已经拥有比角色更多的信息。
【节奏规则】实况段与采访段的比例决定节奏：前半段采访比例高（建立人物、制造幽默/反讽），后半段实况比例高（情节加速，评论来不及跟上事件）。高潮处应当是纯实况——摄影机变成沉默的目击者。
【禁忌】严禁让摄影机的存在变得不自然——如果角色在极端危险中仍然完美地举着摄影机，可信度崩塌。严禁采访段变成纯粹的「信息转述」——每个采访段必须揭示角色的性格而非仅仅解释剧情。严禁在结尾揭示「这不是纪录片」——伪纪录结构的力量在于始终维持形式的真实幻觉。`,

      coreEn: `[Scene Order] Two material types alternate. Type A 'Vérité': handheld/fixed-camera 'real' scenes, characters appearing unaware of filming or pretending naturalness. Type B 'Talking Heads': characters face camera directly, commenting/explaining/recalling Type A events. M-params primarily advance in Type A; Type B provides commentary and irony. M1-M7 chronological, but Type B interviews may be retrospective (character already knows ending).
[Info Rule] Core mechanism: 'gap between footage and commentary.' Type A shows 'what happened,' Type B shows 'what character thinks happened' — gap produces irony or tragedy. Audience has all info from both types, judges who is self-deceiving/lying/embellishing. Camera presence is part of info rules — characters perform differently on/off camera; this difference IS information. 'Documentary' format creates cognitive trap: audience tends to believe documentary format = truth; this trust can be exploited or subverted.
[M-Param Mapping] M1=vérité establishes world + interviews introduce characters (self-description may contradict observed footage). M2=vérité encounter + interview reaction/explanation. M3-M4=vérité advances plot + interviews provide commentary hinting at outcome. M5=vérité key action — interviews may disappear (character too engaged to remember camera), or camera itself gets involved. M6=vérité cost — documentary format gives cost raw, unprocessed impact. M7=final interview — character faces camera to summarize, but audience has more info than character.
[Pacing] Interview-to-vérité ratio controls rhythm: more interviews early (establish character, create humor/irony), more vérité late (plot accelerates beyond commentary's ability to keep up). Climax should be pure vérité — camera as silent witness.
[Prohibitions] Camera presence must not become implausible — if characters hold camera perfectly during extreme danger, credibility collapses. Interviews must NOT be pure 'info dumps' — each must reveal character, not just explain plot. No ending reveal of 'this wasn't a documentary' — mockumentary's power lies in maintaining formal verisimilitude throughout.`,

      skeletons: [
        'verite_footage_实况段',
        'talking_heads_采访段',
        'gap_between_layers_实况与评论的裂缝',
        'raw_climax_原始高潮',
      ],
      reference: '《办公室》(The Office)；《吸血鬼生活》(What We Do in the Shadows)；《第九区》(District 9)；《女巫布莱尔》(The Blair Witch Project)',
      referenceEn: 'The Office; What We Do in the Shadows; District 9; The Blair Witch Project',
    },

    {
      id: 'OBJECT_GAZE',
      name: '物之凝视',
      nameEn: 'Object Gaze / Non-Human POV',
      group: 'D. 视角与叙述层',
      groupEn: 'POV & Narration Layer',

      def: '叙事视角不属于任何人类角色，而属于一个物件（硬币/信件/房屋）、动物、或抽象实体（死神/时间）。通过非人视角折射人类世界的陌生化观看。',
      defEn: 'Narrative POV belongs not to any human character but to an object (coin/letter/house), animal, or abstract entity (Death/Time). Human world refracted through non-human gaze, producing defamiliarization.',

      core: `【场景排列】视角锚(POV Anchor)=物件/生物/实体，它在人类世界中流转或静止。叙事按照视角锚的经历排列——不是按照人类角色的戏剧弧线，而是按照物件的「旅程」或空间的「经历」。如果视角锚是流动的（一枚硬币从手到手传递），叙事是串联结构：场景1(持有者A)→场景2(持有者B)→...。如果视角锚是静止的（一间房屋），叙事是时间叠层：场景1(住户A,1960年代)→场景2(住户B,1990年代)→...。M参数不再属于单一主角——每个「持有者/住户」都有各自的微型M1-M7片段，视角锚只是冷静的观察者/传递者。
【信息规则】视角锚的「感知能力」决定信息过滤方式。物件：只能感知物理接触（温度、压力、光线），不能理解语言——人类的对话必须被物件视角「翻译」为物理现象（声波的震动/嘴唇的运动/空气的变化）。动物：感知基于该动物的生物特征（狗的嗅觉优先/鸟的视觉高度）。抽象实体：可以全知，但有自己的关注偏见（死神只注意时间/命运只注意选择）。观众通过非人过滤器看人类世界，产生陌生化效果——熟悉的行为在非人视角下变得奇异。
【M参数映射】M参数被分配给视角锚经历的多个人类角色。视角锚自身没有M3(目标)和M5(行动)——它是被动的观察者/无意识的存在。但视角锚有自己的物理M1(初始状态)和M7(最终状态)——一枚新硬币变成磨损的旧币，一栋新房变成废墟。视角锚的物理衰变/变化是全叙事的隐性时间轴。人类角色的M2(遭遇)、M6(代价)等通过视角锚的有限感知被呈现——观众只能看到视角锚「能感知到」的部分。
【节奏规则】场景之间的切换由视角锚的「转移时刻」决定——硬币被花掉的瞬间、房屋被卖掉的瞬间、信件被传递的瞬间。这些转移时刻本身就是节奏标记。每个持有者/住户的段落长度不需要均等——视角锚在某些持有者手中停留更久（更多故事），在某些持有者手中一闪而过（快速的物理流转）。
【禁忌】视角锚严禁获得人类意识——它可以有感知（温度、光、震动），但不可以有思想、情感或判断。一旦物件「想了什么」，它就变成了一个人类角色的皮肤，非人视角的陌生化力量消失。严禁让所有持有者的故事趋同——不同持有者必须展示不同类型的人生片段。严禁给视角锚一个「目的」——它的无目的性是结构的核心。`,

      coreEn: `[Scene Order] POV Anchor = object/creature/entity, flowing through or stationary in human world. Narrative arranged by anchor's experience — not human character's dramatic arc, but object's 'journey' or space's 'experience.' If anchor flows (a coin passed hand to hand): serial structure, Scene1(holder A)→Scene2(holder B)→... If anchor is stationary (a house): temporal layers, Scene1(occupant A, 1960s)→Scene2(occupant B, 1990s)→... M-params don't belong to a single protagonist — each holder/occupant has their own micro M1-M7 fragment; anchor is cold observer/carrier.
[Info Rule] Anchor's 'perceptual capacity' determines info filtering. Object: perceives only physical contact (temperature, pressure, light), cannot understand language — dialogue translated into physical phenomena (vibration/lip movement/air change). Animal: perception based on species biology (dog's olfactory priority/bird's altitude vision). Abstract entity: may be omniscient but with its own attention bias (Death notices time/Fate notices choices). Audience sees human world through non-human filter, producing defamiliarization.
[M-Param Mapping] M-params distributed across multiple human characters the anchor encounters. Anchor itself has no M3(goal) or M5(action) — it's passive observer/unconscious existence. But anchor has physical M1(initial state) and M7(final state) — new coin becomes worn, new house becomes ruin. Anchor's physical decay/change is the implicit timeline. Human characters' M2(encounter), M6(cost) etc. presented through anchor's limited perception — audience sees only what anchor 'can perceive.'
[Pacing] Scene transitions determined by anchor's 'transfer moments' — coin spent, house sold, letter passed. These moments ARE rhythm markers. Holder/occupant segment lengths need not be equal — anchor lingers with some (more story), flashes past others (rapid physical transfer).
[Prohibitions] Anchor must NEVER acquire human consciousness — may have perception (temperature, light, vibration) but not thought, emotion, or judgment. Once the object 'thinks,' it becomes a human character's skin, and non-human defamiliarization dies. Different holders must show different life-fragment types — no convergence. No 'purpose' for the anchor — its purposelessness is structurally essential.`,

      skeletons: [
        'anchor_object_introduced_视角锚登场',
        'holder_A_持有者A',
        'holder_B_持有者B',
        'object_remains_物在人非',
      ],
      reference: '《塑料袋》(Plastic Bag, Ramin Bahrani)；《万物理论》(The Theory of Everything, 从轮椅视角)；《死神的精确度》(伊坂幸太郎)；《偷书贼》(The Book Thief, 死神叙述)',
      referenceEn: 'Plastic Bag (Ramin Bahrani); The Book Thief (Death as narrator, Markus Zusak); The Red Violin; A History of the World in 10½ Chapters (Julian Barnes)',
    },
  ]
};
