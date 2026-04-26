import { LibraryCategoryDef } from '../../../types';

export const SV2_GROUP_A: LibraryCategoryDef = {
  id: 'cat_sv2_micro',
  name: 'A. 极微体量 (15s–60s)',
  nameEn: 'A. Micro Volume (15s–60s)',
  items: [
    {
      id: 'vol_haiku_15s',
      name: '视觉俳句 (15s)',
      nameEn: 'Visual Haiku (15s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '只有一个镜头的时间。不讲故事，只定格一个「令人无法移开目光的瞬间」。一切信息通过画面构成传递。',
      defEn: 'One shot, one moment. No story — just a single image that refuses to let go.',

      core: `【体量本质】15秒 = 1-2个镜头。没有时间铺垫，没有时间解释。观众看到的第一帧就是全部。
【M参数策略】只激活1个M参数。推荐M7(落点)或M2(遭遇)——直接展示结果或冲击。其余M全部折叠进画面暗示。
【密度】每一帧都必须过载。一个表情、一个物件、一个光影关系——承载全部叙事重量。
【禁忌】严禁叙事铺垫。严禁对白超过一句。严禁出现超过2个角色。`,

      coreEn: `[Volume Essence] 15s = 1-2 shots. No setup, no explanation. First frame is everything.
[M-Param Strategy] Activate only 1 M-param. Recommend M7(landing) or M2(encounter). All others fold into visual implication.
[Density] Every frame must overload. One expression, one object, one light relationship carries all narrative weight.
[Prohibitions] No narrative setup. No dialogue beyond one line. No more than 2 characters.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 100-250字。只写：一个画面 + 一句话的情绪落点。\n【创意圣经】≈ 150-300字。纯画面诗，不超过3个段落。',
        mechanicsEn: '[Pitch] ~100-250 chars each. One image + one emotional landing.\n[Bible] ~150-300 chars. Pure visual poem, max 3 paragraphs.',
      },

      reference: 'Instagram Reels 封面帧；Bumper Ads；俳句；Edward Hopper 单幅画',
      referenceEn: 'Instagram Reels cover frames; Bumper Ads; Haiku; Edward Hopper paintings',
    },

    {
      id: 'vol_punchline_15s',
      name: '段子/反转钉 (15s)',
      nameEn: 'Punchline / Reversal Nail (15s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '一个预期 + 一个反转。前10秒建立假设，后5秒粉碎它。笑话、恐怖stinger、广告reveal都属此类。',
      defEn: 'One expectation + one reversal. 10s builds assumption, 5s shatters it.',

      core: `【体量本质】15秒内完成一次认知翻转。核心不是故事，是「落差」。
【M参数策略】只用M1(日常假象) → M2(遭遇/反转)。M2必须在最后3秒内引爆。
【密度】前段的日常越「正常」，反转越致命。
【禁忌】严禁把反转放在中间——必须在最后。严禁反转后再加解释。`,

      coreEn: `[Volume Essence] One cognitive flip in 15s. Not story — it's the gap.
[M-Param Strategy] Only M1(false normal) → M2(reversal). M2 must detonate in final 3s.
[Density] The more 'normal' the setup, the more lethal the flip.
[Prohibitions] Reversal must be at the end. No explanation after reversal.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 100-250字。写清：假象是什么 → 反转是什么。\n【创意圣经】≈ 150-250字。两段式：铺垫段 + 反转段。',
        mechanicsEn: '[Pitch] ~100-250 chars each. State: what is the false assumption → what is the flip.\n[Bible] ~150-250 chars. Two-part: setup + reversal.',
      },

      reference: 'Vine经典6秒；TikTok反转；恐怖片stinger；广告twist ending',
      referenceEn: 'Classic Vine 6s; TikTok reversals; horror stingers; ad twist endings',
    },

    {
      id: 'vol_vignette_30s',
      name: '生活切片 (30s)',
      nameEn: 'Life Vignette (30s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '截取一个正在进行的生活片段。没有开始没有结束——观众中途闯入，中途离开。重点是质感而非情节。',
      defEn: 'A slice of life in progress. No beginning, no ending. Audience arrives mid-scene, leaves mid-scene. Texture over plot.',

      core: `【体量本质】30秒 = 3-5个镜头。足够展现一个连续动作或一段情绪弧度，但不够讲一个完整故事。
【M参数策略】M1(日常世界)为主体，用单一SUR(表层设定)渲染质感。可选M2暗示裂缝但不展开。
【密度】环境细节 > 人物动作 > 对白。声音设计承载50%的叙事。
【禁忌】严禁有明确的起承转合。严禁有画外音解说。这不是故事，是一个被捕捉的瞬间。`,

      coreEn: `[Volume Essence] 30s = 3-5 shots. Enough for a continuous action or emotional curve, not a full story.
[M-Param Strategy] M1(ordinary world) as main body, single SUR for texture. Optional M2 crack implied but unexpanded.
[Density] Environment detail > character action > dialogue. Sound design carries 50%.
[Prohibitions] No clear beginning-middle-end. No voiceover narration. Not a story — a captured moment.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 100-250字。写清：什么场景 + 什么质感 + 观众离开时的感觉。\n【创意圣经】≈ 400-500字。散文体，侧重感官描写。',
        mechanicsEn: '[Pitch] ~100-250 chars each. Scene + texture + feeling upon exit.\n[Bible] ~400-500 chars. Essay style, sensory-focused.',
      },

      reference: '是枝裕和日常镜头；侯孝贤长镜头片段；ASMR视频；街头摄影',
      referenceEn: 'Koreeda daily life shots; Hou Hsiao-hsien long takes; ASMR videos; street photography',
    },

    {
      id: 'vol_drop_30s',
      name: '落差弹 (30s)',
      nameEn: 'Drop Bomb (30s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '一半时间构建幻象，一半时间粉碎幻象。比15秒反转钉拥有更多铺垫空间——虚假安宁可以更具体、更诱人。',
      defEn: 'Half builds illusion, half shatters it. More setup space than 15s — the false peace can be more concrete and seductive.',

      core: `【体量本质】30秒 = 15s铺垫 + 15s坍塌。铺垫段不是浪费时间，它在积累势能。
【M参数策略】M1(虚假安宁,15s) → M2(遭遇/暴露,瞬间) → M6(代价,剩余时间)。跳过M3-M5。
【密度】前15秒的安宁必须是可信的、有触感的。后15秒的崩塌必须从前段的具体细节中生长出来。
【禁忌】严禁前后段无关——反转必须从铺垫的细节中来。严禁反转后给出解决方案。`,

      coreEn: `[Volume Essence] 30s = 15s setup + 15s collapse. Setup is not wasted time — it accumulates potential energy.
[M-Param Strategy] M1(false peace,15s) → M2(encounter/exposure,instant) → M6(cost,remaining). Skip M3-M5.
[Density] First 15s peace must be believable, tactile. Last 15s collapse must grow from specific setup details.
[Prohibitions] Setup and reversal must be causally connected. No resolution after reversal.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-400字。写清：幻象是什么 → 裂缝从哪来 → 坍塌后的画面。\n【创意圣经】≈ 400-500字。两幕结构：虚假安宁 + 暴露。',
        mechanicsEn: '[Pitch] ~150-400 chars each. Illusion → crack source → post-collapse image.\n[Bible] ~400-500 chars. Two-act: false peace + exposure.',
      },

      reference: '《落差法则》系广告；恐怖片开场杀；Radiohead MV《Just》',
      referenceEn: 'Drop-style ads; horror opening kills; Radiohead "Just" MV',
    },

    {
      id: 'vol_joke_30s',
      name: '完整笑话 (30s)',
      nameEn: 'Complete Joke (30s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '铺垫→ 加码 → 抖包袱。经典三拍喜剧节奏。有完整的设定、升级和落点。',
      defEn: 'Setup → escalation → punchline. Classic three-beat comedy rhythm. Complete premise, build, and payoff.',

      core: `【体量本质】30秒 = 10s建立逻辑 + 10s推向荒谬 + 10s引爆。三拍节奏是时间的骨架。
【M参数策略】M1(正常世界的一个逻辑) → M4(这个逻辑被推到极端) → M7(逻辑自爆的落点)。喜剧的M7不是悲剧的代价，是荒谬的自洽。
【密度】每一拍都在加码同一个前提。不引入新信息——只把已有信息推向极端。
【禁忌】严禁三拍之间换主题。严禁punchline需要解释。严禁说教。`,

      coreEn: `[Volume Essence] 30s = 10s establish logic + 10s push to absurd + 10s detonate. Three-beat rhythm is the time skeleton.
[M-Param Strategy] M1(a normal logic) → M4(logic pushed to extreme) → M7(logic self-destructs). Comedy's M7 is not tragic cost but absurd self-consistency.
[Density] Each beat escalates the same premise. No new info — just existing info pushed further.
[Prohibitions] No topic switch between beats. Punchline needs no explanation. No moralizing.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-400字。写清：什么前提 → 怎么加码 → punchline是什么。\n【创意圣经】≈ 400-500字。三段式：建立 + 升级 + 引爆。',
        mechanicsEn: '[Pitch] ~150-400 chars each. Premise → escalation → punchline.\n[Bible] ~400-500 chars. Three-part: establish + escalate + detonate.',
      },

      reference: '单口喜剧经典段子；《老友记》冷开场；短视频喜剧',
      referenceEn: 'Stand-up classic bits; Friends cold opens; short-form comedy',
    },

    {
      id: 'vol_micro_arc_60s',
      name: '极微弧光 (60s)',
      nameEn: 'Micro Arc (60s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '在一个连续时空内，走完一次简陋但完整的主体缝合。有起点、有遭遇、有代价、有落点——只是每一步都被极度压缩。',
      defEn: 'A crude but complete subject suture within one continuous space-time. Beginning, encounter, cost, landing — each extremely compressed.',

      core: `【体量本质】60秒 = 可以承载一个完整的微型故事。这是「故事」的最低体量门槛。
【M参数策略】强制在单一场景内完成 M1→M2→M6→M7。跳过M3(欲望确立)和M4(上升动作)——没有时间展开障碍序列，直接从遭遇跳到代价。M5(行动)折叠进M6。
【密度】一个空间、一到两个人物、一个事件。用空间变化(光线/温度/声音)代替场景切换来标记叙事转折。
【禁忌】严禁超过一个物理空间。严禁引入副线。严禁展开M4(不够时间)。`,

      coreEn: `[Volume Essence] 60s = minimum threshold for a complete micro-story.
[M-Param Strategy] Force M1→M2→M6→M7 within single scene. Skip M3(desire) and M4(rising action). Jump from encounter to cost. M5 folds into M6.
[Density] One space, 1-2 characters, one event. Use spatial changes (light/temperature/sound) instead of scene cuts.
[Prohibitions] No more than one physical space. No subplots. No M4 expansion.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-450字。写清：日常 → 遭遇 → 代价 → 落点。四步必须完整但极简。\n【创意圣经】≈ 500-700字。单场景完整短篇。',
        mechanicsEn: '[Pitch] ~150-450 chars each. Ordinary → encounter → cost → landing. Four steps complete but minimal.\n[Bible] ~500-700 chars. Single-scene complete short.',
      },

      reference: '皮克斯短片；《调音师》(13分钟版的核心段落)；一分钟恐怖短片',
      referenceEn: 'Pixar shorts; The Piano Tuner (core segment); one-minute horror shorts',
    },

    {
      id: 'vol_mood_loop_60s',
      name: '情绪循环 (60s)',
      nameEn: 'Mood Loop (60s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '不讲故事。用重复的视觉/声音motif构建一个可以无限循环的情绪空间。开始即结束，结束即开始。',
      defEn: 'No story. Repeating visual/audio motifs build an infinitely loopable mood space. Beginning is ending, ending is beginning.',

      core: `【体量本质】60秒的情绪循环 = 一段可以repeat播放的氛围影像。重点不在「发生了什么」而在「这里的空气是什么味道」。
【M参数策略】只激活M1(世界质感)。不需要M2-M7。用SUR2(背景场域)和SUR6(物理空间)构建沉浸感。整个60秒是一个扩展的M1。
【密度】节奏 > 叙事。音乐性 > 戏剧性。最后一帧必须能无缝接回第一帧。
【禁忌】严禁有明确的事件发生。严禁有角色说话。严禁有不可循环的线性进展。`,

      coreEn: `[Volume Essence] 60s mood loop = repeatable atmosphere footage. Not 'what happened' but 'what the air tastes like.'
[M-Param Strategy] Only M1(world texture). No M2-M7. Use SUR2(background field) and SUR6(physical space) for immersion. The entire 60s is an expanded M1.
[Density] Rhythm > narrative. Musicality > drama. Last frame must seamlessly loop to first.
[Prohibitions] No clear events. No character speech. No non-loopable linear progression.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-450字。写清：什么空间 + 什么质感 + 循环的节奏感。三卡应是同一空间的三种「呼吸方式」。\n【创意圣经】≈ 500-700字。纯感官散文，描写一个静止世界的呼吸。',
        mechanicsEn: '[Pitch] ~150-450 chars each. Space + texture + loop rhythm. Three cards = three "breathing modes" of the same space.\n[Bible] ~500-700 chars. Pure sensory prose, a breathing still world.',
      },

      reference: 'Lo-fi beats背景动画；Bill Viola影像装置；雨声/壁炉/城市白噪音视频',
      referenceEn: 'Lo-fi beats background animation; Bill Viola video installations; rain/fireplace/city white noise videos',
    },

    {
      id: 'vol_reveal_60s',
      name: '概念揭示 (60s)',
      nameEn: 'Concept Reveal (60s)',
      group: 'A. 极微体量',
      groupEn: 'Micro Volume',

      def: '用60秒完成一次认知升级。从「你以为是A」到「原来是B」。广告、预告片、产品发布的核心逻辑。',
      defEn: '60s cognitive upgrade. From "you thought A" to "actually B." Core logic of ads, trailers, product reveals.',

      core: `【体量本质】60秒的概念揭示 = 40s误导 + 5s转折 + 15s新真相展开。比30秒落差弹多了「新真相展开」的空间——观众不只震惊，还来得及理解。
【M参数策略】M1(表面逻辑,40s) → M2(真相遭遇,5s) → M7(新认知落点,15s)。M7必须让观众带着新理解重新回看M1——产生「原来如此」的回溯效应。
【密度】误导段的逻辑必须自洽到观众毫无怀疑。转折必须从误导段的某个细节生长。新真相段必须简洁有力，不需要解释太多。
【禁忌】严禁转折是凭空冒出的新信息。严禁揭示后再加第二层反转（贪心）。`,

      coreEn: `[Volume Essence] 60s reveal = 40s misdirection + 5s pivot + 15s new truth. More space than 30s drop — audience has time to understand.
[M-Param Strategy] M1(surface logic,40s) → M2(truth encounter,5s) → M7(new understanding,15s). M7 must create retroactive reinterpretation of M1.
[Density] Misdirection must be airtight. Pivot grows from a setup detail. New truth must be clean and powerful.
[Prohibitions] Pivot cannot be new info from nowhere. No second twist after reveal.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-400字。写清：误导逻辑 → 哪个细节是伏笔 → 真相是什么 → 回溯效应。\n【创意圣经】≈ 500-700字。三段：误导 + 转折 + 新认知。',
        mechanicsEn: '[Pitch] ~150-400 chars each. Misdirection logic → which detail is foreshadowing → truth → retroactive effect.\n[Bible] ~500-700 chars. Three parts: misdirection + pivot + new understanding.',
      },

      reference: '苹果发布会reveal；电影预告片；公益广告反转；《万万没想到》',
      referenceEn: 'Apple keynote reveals; movie trailers; PSA twist ads',
    },
  ]
};
