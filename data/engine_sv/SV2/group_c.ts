import { LibraryCategoryDef } from '../../../types';

export const SV2_GROUP_C: LibraryCategoryDef = {
  id: 'cat_sv2_medium',
  name: 'C. 中篇体量 (10m–30m)',
  nameEn: 'C. Medium Volume (10m–30m)',
  items: [
    {
      id: 'vol_short_film_10m',
      name: '标准短片 (10m)',
      nameEn: 'Standard Short Film (10m)',
      group: 'C. 中篇体量',
      groupEn: 'Medium Volume',

      def: '短片电影的黄金体量。足够承载一个人物的完整心理弧光——从幻觉到幻灭（或从幻灭到重构）。这是「人物研究」的最佳尺寸。',
      defEn: 'Golden volume for short film. Full psychological arc — from illusion to disillusionment (or disillusion to reconstruction). Ideal size for character study.',

      core: `【体量本质】10分钟 = 第一个可以让人物「改变」的体量。此前所有体量的人物都是静态的（展示一个状态），10分钟起人物可以是动态的（经历一次变化）。
【M参数策略】所有M参数(M1-M7)首次全部可用。M1(60s建置) → M2(60s遭遇) → M3(30s欲望确立) → M4(180s上升动作,3-5个障碍,允许一次重大挫折) → M5(60s决断) → M6(60s代价) → M7(60s落点)。M4获得充分展开空间——障碍序列可以有节奏变化（松-紧-松-紧-爆）。
【密度】允许「呼吸段落」——不推进情节但深化人物或氛围的留白。SUR(表层)元素可以展开为具体的物理空间和社会关系。允许一个B-Story暗线（但不展开为完整副线）。
【禁忌】严禁超过3个场景。严禁引入完整副线——只能有暗示。M1建置严禁超过90秒。结尾必须有余韵但不可留开放式悬念。`,

      coreEn: `[Volume Essence] 10min = first volume where characters can 'change.' All prior volumes show static states; 10min allows dynamic transformation.
[M-Param Strategy] All M-params (M1-M7) fully available. M1(60s) → M2(60s) → M3(30s) → M4(180s, 3-5 obstacles, one major setback allowed) → M5(60s) → M6(60s) → M7(60s). M4 gets full rhythm variation (loose-tight-loose-tight-explode).
[Density] 'Breathing passages' allowed — deepening character/atmosphere without advancing plot. SUR elements expand into specific spaces and social relations. One B-Story hint allowed (not full subplot).
[Prohibitions] Max 3 scenes. No full subplot. M1 setup max 90s. Ending needs resonance but no open cliffhanger.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 500-800字。完整七步弧光。障碍序列写出具体的3-5个递进节点。\n【创意圣经】≈ 1800-2800字。完整短片文学剧本。',
        mechanicsEn: '[Pitch] ~500-800 chars each. Complete 7-step arc. Obstacle sequence with 3-5 escalating nodes.\n[Bible] ~1800-2800 chars. Complete short film literary script.',
      },

      reference: '戛纳短片金棕榈获奖作品；《肤色》(Skin)；《邻居的窗》(The Neighbors\' Window)；《宵禁》(Curfew)',
      referenceEn: 'Cannes Short Film Palme d\'Or winners; Skin; The Neighbors\' Window; Curfew',
    },

    {
      id: 'vol_investigation_15m',
      name: '调查/揭秘 (15m)',
      nameEn: 'Investigation / Unveiling (15m)',
      group: 'C. 中篇体量',
      groupEn: 'Medium Volume',

      def: '主角不知道真相——全片就是寻找真相的过程。信息的逐步释放构成叙事的脊柱。每一层揭露都改变前面所有信息的含义。',
      defEn: 'Protagonist doesn\'t know the truth — the entire film is the search. Gradual info release IS the narrative spine. Each revelation recontextualizes everything before it.',

      core: `【体量本质】15分钟 = 第一个可以「藏信息」的体量。此前体量太短无法设置有效的信息迷宫。15分钟起可以有3-4层信息释放，每层都改写观众对事件的理解。
【M参数策略】M1(60s表面日常) → M2(60s异常信号/触发调查) → M4(360s调查过程：线索A→死胡同→线索B→半真相→线索C→接近核心) → M5(60s面对真相的行动抉择) → M6(120s真相的代价) → M7(60s带着真相的新世界)。M4不再是「障碍序列」而是「信息释放序列」——每个节点释放一层信息。M3(欲望)= 想知道真相。
【密度】允许20%篇幅展现SUR10(前史)和SUR9(秘密)。对白可以承载大量信息但必须通过冲突而非说教传递。观众与主角的信息差是核心设计——观众可以比主角多知道一些（悬念）或少知道（悬疑）。
【禁忌】严禁信息释放匀速——必须有突然加速和突然停滞。严禁最终真相是全新信息——必须从前面的线索中可以回溯推导。严禁超过4个场景。`,

      coreEn: `[Volume Essence] 15min = first volume that can 'hide information.' Too short before for effective info maze. 3-4 info release layers possible.
[M-Param Strategy] M1(60s surface) → M2(60s anomaly/trigger) → M4(360s investigation: clue A→dead end→clue B→half-truth→clue C→near core) → M5(60s truth-facing decision) → M6(120s truth's cost) → M7(60s new world with truth). M4 = info release sequence, not obstacle sequence.
[Density] 20% on SUR10(backstory) and SUR9(secrets) allowed. Dialogue carries info through conflict. Info asymmetry between audience and protagonist is core design.
[Prohibitions] No uniform info release pace. Final truth must be retroactively traceable from earlier clues. Max 4 scenes.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 500-800字。必须明确：信息释放的3-4层各是什么 → 每层如何改写理解 → 最终真相 → 回溯效应。\n【创意圣经】≈ 1800-2800字。信息驱动叙事，节奏有张弛。',
        mechanicsEn: '[Pitch] ~500-800 chars each. Must specify: 3-4 info layers → how each recontextualizes → final truth → retroactive effect.\n[Bible] ~1800-2800 chars. Info-driven narrative with rhythmic variation.',
      },

      reference: '《调音师》(The Piano Tuner)完整版；《恐怖分子》短片；纪录片单集',
      referenceEn: 'The Piano Tuner full version; short thriller films; documentary single episodes',
    },

    {
      id: 'vol_ensemble_15m',
      name: '群像交织 (15m)',
      nameEn: 'Ensemble Weave (15m)',
      group: 'C. 中篇体量',
      groupEn: 'Medium Volume',

      def: '2-3条人物线在同一时空内平行展开，最终交汇。每条线都不完整——只有当它们碰撞时，全景才浮现。',
      defEn: '2-3 character lines run parallel in same time-space, converging at the end. Each line is incomplete — full picture only emerges at collision.',

      core: `【体量本质】15分钟 = 第一个可以承载「多线叙事」的体量。2-3条线各分得5分钟——刚好够每条线完成一个微型弧光（M1→M2→M4→M7）。
【M参数策略】每条线独立拥有M1-M2-M4-M7。但所有线共享同一个M6(代价)——代价在交汇点兑现。交汇本身就是M5(行动)。线与线之间的切换规则：在每条线的张力峰值处切到另一条线——利用悬置制造推进力。
【密度】平行剪辑是主要叙事工具。每条线的人物不超过2个。场景总数不超过4个。共享的SUR4(律法/规则)将不同线连接——同一个系统性压力以不同方式作用于不同人。
【禁忌】严禁任何一条线占总篇幅超过50%。严禁线与线之间无因果关联——它们必须共享至少一个SUR元素。严禁交汇是巧合——交汇必须是各线自身逻辑推导的必然结果。`,

      coreEn: `[Volume Essence] 15min = first volume for multi-thread narrative. 2-3 threads at ~5min each — enough for micro arc per thread.
[M-Param Strategy] Each thread has independent M1-M2-M4-M7. All share one M6(cost) — cost paid at convergence. Convergence IS M5. Cut between threads at tension peaks.
[Density] Parallel editing is primary tool. Max 2 characters per thread. Max 4 total scenes. Shared SUR4(law) connects threads.
[Prohibitions] No thread exceeds 50%. Threads must share at least one SUR element. Convergence must be logical consequence, not coincidence.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 600-800字。必须明确：每条线的微型弧光 → 共享的SUR元素 → 交汇点 → 交汇后的全景。\n【创意圣经】≈ 2500-3500字。交织叙事，平行剪辑结构。',
        mechanicsEn: '[Pitch] ~600-800 chars each. Each thread\'s micro arc → shared SUR → convergence → post-convergence panorama.\n[Bible] ~2500-3500 chars. Interwoven narrative, parallel editing structure.',
      },

      reference: '《通天塔》(Babel)浓缩版；《撞车》(Crash)浓缩版；《爱情是狗娘》(Amores Perros)浓缩版',
      referenceEn: 'Babel condensed; Crash condensed; Amores Perros condensed',
    },

    {
      id: 'vol_arc_30m',
      name: '完整人物弧光 (30m)',
      nameEn: 'Full Character Arc (30m)',
      group: 'C. 中篇体量',
      groupEn: 'Medium Volume',

      def: '标准中篇。一个人物从A状态到B状态的完整旅程——有充分的铺垫、有层层递进的考验、有不可逆的抉择、有沉甸甸的余韵。',
      defEn: 'Standard medium length. Complete journey from state A to state B — full setup, escalating trials, irreversible choice, weighty aftermath.',

      core: `【体量本质】30分钟 = 可以承载一部「迷你电影」。所有叙事元素都有舒适的展开空间。人物不再被体量压迫——可以有犹豫、有反复、有沉默。
【M参数策略】全参数最舒适的展开比例——M1(3m建置) → M2(2m遭遇) → M3(1m欲望确立) → M4(12m上升动作，5-8个障碍节点，包含中点反转) → M5(3m行动决断) → M6(3m代价兑现) → M7(3m落点+余韵)。中点(Midpoint)在第15分钟处——可以是假胜利或假失败，将第二幕劈成两半。允许一条完整的B-Plot副线（占20%篇幅）。
【密度】正常电影密度。允许沉默段落和情绪留白。SUR10(前史)可以通过闪回展现。对白可以闲聊——只要闲聊揭示人物性格。
【禁忌】M4(上升动作)的障碍不可匀速递进——必须有节奏变化（松-紧-松-紧-最紧-爆）。M7(结局)严禁草率——至少90秒的余韵。B-Plot必须与A-Plot在主题上呼应。`,

      coreEn: `[Volume Essence] 30min = 'mini movie.' All narrative elements have comfortable space. Character can hesitate, repeat, be silent.
[M-Param Strategy] All params at comfortable ratio — M1(3m) → M2(2m) → M3(1m) → M4(12m, 5-8 obstacles with midpoint reversal) → M5(3m) → M6(3m) → M7(3m+aftermath). Midpoint at 15min. One complete B-Plot allowed (20%).
[Density] Normal film density. Silent passages and emotional pauses allowed. SUR10(backstory) via flashback. Idle dialogue allowed if it reveals character.
[Prohibitions] M4 obstacles must vary rhythm. M7 needs 90s+ aftermath. B-Plot must thematically echo A-Plot.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 700-1200字。完整的三幕+中点+B线。需要写出5-8个障碍节点的具体内容。\n【创意圣经】≈ 4000-6000字。迷你电影级完整剧本。',
        mechanicsEn: '[Pitch] ~700-1200 chars each. Full 3 acts + midpoint + B-line. 5-8 obstacle nodes specified.\n[Bible] ~4000-6000 chars. Mini-movie complete script.',
      },

      reference: '《月球》(Moon)；HBO短剧单集；《黑镜》(Black Mirror)单集；中篇小说',
      referenceEn: 'Moon; HBO short series episodes; Black Mirror single episodes; novellas',
    },

    {
      id: 'vol_lecture_30m',
      name: '思辨论文 (30m)',
      nameEn: 'Philosophical Essay Film (30m)',
      group: 'C. 中篇体量',
      groupEn: 'Medium Volume',

      def: '不以人物弧光为驱动，以一个「命题」为驱动。通过具体案例/场景逐步论证或瓦解一个哲学命题。视觉论文/散文电影。',
      defEn: 'Driven by a thesis, not character arc. Gradually proves or dismantles a philosophical proposition through concrete cases/scenes. Visual essay / essay film.',

      core: `【体量本质】30分钟 = 足够展开一个完整的论证链条。不是故事，是「用影像思考」。每个段落是一个论点或案例，段落之间有逻辑递进。
【M参数策略】不使用传统M参数序列。取而代之：命题(M1) → 第一个案例/反例(M2) → 命题深化(M3) → 第二个案例+命题修正(M4) → 命题的极端推演(M5) → 命题的崩塌或升华(M6) → 新命题或开放提问(M7)。每个「案例」可以是一个微型场景、一段采访、一组影像。
【密度】允许大段画外音/旁白。画面与旁白可以形成反差(画面展示A，旁白说B)。引用和互文是叙事工具。节奏可以很慢——思考需要时间。
【禁忌】严禁结论先行——论证过程中命题本身必须至少被挑战一次。严禁所有案例都支持同一方向——必须有反例。严禁变成课件——画面必须有独立的美学价值。`,

      coreEn: `[Volume Essence] 30min = full argument chain. Not story but 'thinking with images.' Each paragraph is a point or case with logical progression.
[M-Param Strategy] Non-traditional: Thesis(M1) → Case/counterexample(M2) → Thesis deepened(M3) → Second case+thesis revision(M4) → Extreme derivation(M5) → Thesis collapse or transcendence(M6) → New thesis or open question(M7).
[Density] Extended voiceover allowed. Image-narration counterpoint. Citations and intertextuality as tools. Slow pace — thinking takes time.
[Prohibitions] No thesis-first — thesis must be challenged at least once. Must include counterexamples. Images must have independent aesthetic value, not lecture slides.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 600-1000字。写清：核心命题 → 论证路径(正例+反例) → 命题的修正/崩塌 → 最终开放提问。\n【创意圣经】≈ 4000-6000字。散文电影体，交织论述与影像描写。',
        mechanicsEn: '[Pitch] ~600-1000 chars each. Core thesis → argument path(examples+counterexamples) → thesis revision → final open question.\n[Bible] ~4000-6000 chars. Essay film style, weaving argument with image description.',
      },

      reference: '阿伦·雷乃《夜与雾》；Chris Marker《日月无光》；亚当·柯蒂斯纪录片；赵亮《悲兮魔兽》',
      referenceEn: 'Alain Resnais Night and Fog; Chris Marker Sans Soleil; Adam Curtis documentaries; Zhao Liang Behemoth',
    },
  ]
};
