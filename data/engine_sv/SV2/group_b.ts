import { LibraryCategoryDef } from '../../../types';

export const SV2_GROUP_B: LibraryCategoryDef = {
  id: 'cat_sv2_short',
  name: 'B. 短篇体量 (90s–5m)',
  nameEn: 'B. Short Volume (90s–5m)',
  items: [
    {
      id: 'vol_mood_90s',
      name: '氛围短片 (90s)',
      nameEn: 'Atmosphere Short (90s)',
      group: 'B. 短篇体量',
      groupEn: 'Short Volume',

      def: '情绪延展——允许一段无叙事性的纯情绪留白。不要求完整弧光，但要求观众在90秒后感觉「被改变了」。',
      defEn: 'Mood extension — a non-narrative emotional pause. No full arc required, but viewer must feel altered after 90s.',

      core: `【体量本质】90秒 = 60秒情绪循环的升级版。多了30秒意味着可以有一次「情绪转折」——从A情绪渐变到B情绪。不是事件转折，是氛围的潮汐。
【M参数策略】M1(世界质感)为主体。可选引入M2(裂缝)作为情绪转折的触发器——但M2不展开为事件，只展开为氛围变化（如光线渐暗、温度下降）。SUR2(背景场域)增加一条视觉线索。
【密度】前60秒建立情绪基调，后30秒允许一次微妙偏移。声音设计和色彩变化是主要叙事工具。
【禁忌】严禁有明确情节。严禁用对白推进——可以有环境音中的人声碎片。情绪转折不可突兀——必须是渐变。`,

      coreEn: `[Volume Essence] 90s = upgraded 60s mood loop. Extra 30s allows one mood shift — A to B. Not event shift, but atmospheric tide.
[M-Param Strategy] M1(world texture) as main body. Optional M2(crack) as mood shift trigger — not expanded into event, only atmosphere change. Extra SUR2 visual clue.
[Density] First 60s establishes emotional baseline, last 30s allows subtle drift. Sound design and color are primary tools.
[Prohibitions] No clear plot. No dialogue-driven progression. Mood shift must be gradual, never abrupt.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-350字。写清：初始情绪 → 什么触发了偏移 → 终点情绪。三卡是同一空间的三种「情绪天气」。\n【创意圣经】≈ 500-800字。感官散文，允许一次情绪转弯。',
        mechanicsEn: '[Pitch] ~150-350 chars each. Initial mood → shift trigger → landing mood.\n[Bible] ~500-800 chars. Sensory prose with one mood turn.',
      },

      reference: 'Terrence Malick式自然影像；Chris Marker《堤》的静照段落；深夜城市航拍',
      referenceEn: 'Terrence Malick nature footage; Chris Marker La Jetée stills sequences; late-night city aerials',
    },

    {
      id: 'vol_anecdote_90s',
      name: '轶事/段子 (90s)',
      nameEn: 'Anecdote (90s)',
      group: 'B. 短篇体量',
      groupEn: 'Short Volume',

      def: '一个可以在饭桌上讲的完整故事——有人物、有事件、有结尾，但不需要深刻。重点是「好听」和「节奏感」。',
      defEn: 'A complete story you could tell at dinner — characters, events, ending, but no need for depth. Key: entertaining rhythm.',

      core: `【体量本质】90秒 = 足够讲一个有起承转合的小故事。比60秒微弧光多了「加码」的空间——可以让困境升级一次再解决。
【M参数策略】M1(10s设定) → M2(15s遭遇) → M4(30s困境+升级一次) → M7(35s解决+落点)。允许M4有一轮展开，但只能一轮。M6(代价)可以折叠进M7——轻体量故事的代价往往是落点本身。
【密度】叙述者的「声音」很重要——这种体量的故事依赖讲述风格。节奏比深度重要。
【禁忌】严禁深挖心理复杂度。严禁超过3个角色。严禁有超过2个场景。结尾必须干净利落——不可留悬念。`,

      coreEn: `[Volume Essence] 90s = enough for a small complete story. More escalation space than 60s micro arc — one obstacle round.
[M-Param Strategy] M1(10s setup) → M2(15s encounter) → M4(30s obstacle+one escalation) → M7(35s resolution+landing). M6 can fold into M7.
[Density] Narrator's 'voice' matters — this volume relies on storytelling style. Rhythm over depth.
[Prohibitions] No deep psychological complexity. Max 3 characters. Max 2 scenes. Clean ending, no cliffhanger.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 150-450字。写清：谁 → 遇到什么 → 怎么加码 → 怎么收场。\n【创意圣经】≈ 500-800字。口语化短篇，节奏明快。',
        mechanicsEn: '[Pitch] ~150-450 chars each. Who → encounter → escalation → resolution.\n[Bible] ~500-800 chars. Conversational short, brisk rhythm.',
      },

      reference: '《一千零一夜》单篇；饭桌段子；播客故事片段；《纽约客》小品文',
      referenceEn: 'One Thousand and One Nights single tales; dinner-table stories; podcast story segments',
    },

    {
      id: 'vol_mv_3m',
      name: 'MV/概念循环 (3m)',
      nameEn: 'MV / Concept Loop (3m)',
      group: 'B. 短篇体量',
      groupEn: 'Short Volume',

      def: '依靠强烈的节奏和视觉重复推进，而非线性情节。核心是展示主体在两种状态之间的反复冲撞——不解决，只呈现。',
      defEn: 'Driven by rhythm and visual repetition, not linear plot. Shows the subject colliding between two states — no resolution, only presentation.',

      core: `【体量本质】3分钟 = MV标准长度。足够建立一个视觉概念并将其变奏3-4次。不需要叙事弧光，需要「概念的音乐性」。
【M参数策略】核心是M3(欲望)与M4(阻碍)之间的反复冲撞——像副歌一样回来。每次冲撞可以略有变化（角度/强度/细节），但基本结构重复。不需要M7(结局)——循环本身就是落点。
【密度】画面节奏与音乐节奏同步。视觉motif的重复与变奏是叙事的主要手段。每30秒一个段落（verse/chorus/verse/chorus/bridge/chorus）。
【禁忌】严禁用对白讲故事——对白只能作为声音材质。严禁线性情节推进。严禁追求「结局」——如果它有结局，它就不是概念循环。`,

      coreEn: `[Volume Essence] 3min = standard MV length. Enough to establish a visual concept and vary it 3-4 times. Need 'musicality of concept.'
[M-Param Strategy] Core is M3(desire) vs M4(obstacle) in repeated collision — returns like a chorus. Each collision varies slightly but repeats structure. No M7 needed — the loop IS the landing.
[Density] Visual rhythm syncs with musical rhythm. Motif repetition and variation is primary narrative tool. ~30s per segment.
[Prohibitions] No dialogue-driven story. No linear plot progression. No pursuit of 'ending' — if it ends, it's not a concept loop.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 400-600字。写清：核心视觉概念 → 概念的三次变奏 → 情绪的累积方向。三卡应是同一概念的三种「演奏方式」。\n【创意圣经】≈ 900-1200字。段落式结构（verse/chorus），侧重画面节奏。',
        mechanicsEn: '[Pitch] ~400-600 chars each. Core visual concept → three variations → emotional accumulation.\n[Bible] ~900-1200 chars. Verse/chorus structure, visual rhythm focused.',
      },

      reference: 'Björk《All Is Full of Love》；Childish Gambino《This Is America》；OK Go系列MV',
      referenceEn: 'Björk "All Is Full of Love"; Childish Gambino "This Is America"; OK Go MVs',
    },

    {
      id: 'vol_complete_short_3m',
      name: '完整短故事 (3m)',
      nameEn: 'Complete Short Story (3m)',
      group: 'B. 短篇体量',
      groupEn: 'Short Volume',

      def: '麻雀虽小五脏俱全。这是第一个可以承载完整三幕结构的体量——有铺垫、有发展、有高潮、有余韵。',
      defEn: 'Small but complete. First volume that can hold a full three-act structure — setup, development, climax, aftermath.',

      core: `【体量本质】3分钟 = 可以承载一个有「上升动作」的完整故事。比60秒微弧光的关键区别：有时间展开M4(障碍序列)，不再需要从遭遇直接跳到代价。
【M参数策略】M1(20s) → M2(20s) → M3(10s确立) → M4(60s展开,允许2-3个障碍) → M5+M6(30s高潮+代价) → M7(20s落点)。M4首次获得真正的展开空间——可以有2-3个递进的障碍。
【密度】紧凑但有呼吸。每个M参数压缩但不跳过。对白可以出现但必须承载叙事功能——不可闲聊。
【禁忌】严禁引入副线(B-Plot)——3分钟只够一条主线。严禁超过2个场景。严禁M1(铺垫)超过30秒。`,

      coreEn: `[Volume Essence] 3min = first volume with real 'rising action.' Key difference from 60s: time to expand M4(obstacle sequence).
[M-Param Strategy] M1(20s) → M2(20s) → M3(10s) → M4(60s, 2-3 obstacles) → M5+M6(30s) → M7(20s). M4 gets real expansion — 2-3 escalating obstacles.
[Density] Tight but breathing. Every M-param compressed but not skipped. Dialogue must serve narrative function.
[Prohibitions] No subplot. Max 2 scenes. M1 setup must not exceed 30s.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 500-700字。写清完整的：日常 → 遭遇 → 欲望 → 障碍(2-3层) → 高潮 → 代价 → 落点。\n【创意圣经】≈ 1500-2000字。完整三幕短篇。',
        mechanicsEn: '[Pitch] ~500-700 chars each. Complete: ordinary → encounter → desire → obstacles(2-3) → climax → cost → landing.\n[Bible] ~1500-2000 chars. Complete three-act short.',
      },

      reference: '皮克斯短片合集；《调音师》；YouTube短片节获奖作品',
      referenceEn: 'Pixar Shorts Collection; The Piano Tuner; YouTube short film festival winners',
    },

    {
      id: 'vol_duel_5m',
      name: '双人博弈 (5m)',
      nameEn: 'Two-Person Game (5m)',
      group: 'B. 短篇体量',
      groupEn: 'Short Volume',

      def: '锁定一个空间、两个人。火力全部集中在对话和肢体微表情上。极致的主体间性挖掘。',
      defEn: 'Lock one space, two people. All firepower on dialogue and micro-expression. Ultimate intersubjectivity excavation.',

      core: `【体量本质】5分钟 = 足够展开一场完整的心理博弈。比3分钟的关键升级：有时间让双方「交换位置」——权力关系可以翻转一次。
【M参数策略】M1(30s双方初始关系) → M2(30s博弈触发) → M4(120s博弈展开，至少3轮攻防) → M5(30s决断) → M6(30s代价) → M7(60s新关系落点)。限制物理空间，火力全转化为高密度对话。M4的每一轮攻防必须改变双方的权力关系。
【密度】对白密度极高。每句话都是武器或盾牌。沉默段落和对白段落交替产生节奏。肢体语言承载潜台词。
【禁忌】严禁有第三个角色打断。严禁场景转换。严禁让任何一方从头到尾占据优势——必须有至少一次攻守转换。`,

      coreEn: `[Volume Essence] 5min = enough for a complete psychological game. Key upgrade from 3min: time for power reversal.
[M-Param Strategy] M1(30s initial relationship) → M2(30s game trigger) → M4(120s game unfolds, 3+ rounds) → M5(30s decision) → M6(30s cost) → M7(60s new relationship). M4 rounds must shift power balance.
[Density] Extreme dialogue density. Every line is weapon or shield. Silence and dialogue alternate for rhythm. Body language carries subtext.
[Prohibitions] No third character interruption. No scene change. No unilateral dominance — at least one power reversal required.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 500-700字。写清：双方初始位置 → 博弈展开(攻防轮次) → 权力翻转 → 最终格局。\n【创意圣经】≈ 1500-2000字。对话驱动的单场景剧本。',
        mechanicsEn: '[Pitch] ~500-700 chars each. Initial positions → game rounds → power flip → final configuration.\n[Bible] ~1500-2000 chars. Dialogue-driven single-scene script.',
      },

      reference: '《十二怒汉》单段；《社交网络》存证场景；王家卫双人对峙；《婚姻故事》争吵戏',
      referenceEn: '12 Angry Men segments; The Social Network deposition; Wong Kar-wai duels; Marriage Story argument scene',
    },

    {
      id: 'vol_essay_5m',
      name: '散文/独白 (5m)',
      nameEn: 'Essay / Monologue (5m)',
      group: 'B. 短篇体量',
      groupEn: 'Short Volume',

      def: '一个人的思绪流动。不需要外部事件——内在的认知变化就是全部的动作。从A想法出发，经过漫游，抵达意想不到的B想法。',
      defEn: 'One person\'s thought flow. No external events needed — inner cognitive shift is all the action. Departs from thought A, wanders, arrives at unexpected thought B.',

      core: `【体量本质】5分钟 = 足够让一个思绪完成一次完整的漫游和着陆。比90秒氛围片的关键区别：有一个认知起点和一个不同的认知终点——思维旅程有方向。
【M参数策略】M1(60s内在世界初始状态) → 自由漫游段(120s，思绪在不同记忆/意象间跳跃) → M2(30s某个想法/记忆击中了要害) → M7(90s新认知的沉淀)。不需要M3-M6。「遭遇」是内在的——一个突然浮现的记忆或念头。
【密度】内心独白或画外音主导。画面是思绪的视觉化——不需要写实。意象跳跃可以大胆。时间可以是非线性的。
【禁忌】严禁有外部冲突。严禁有其他角色的实质性互动。严禁结论先行——认知变化必须是漫游过程中的意外发现。`,

      coreEn: `[Volume Essence] 5min = enough for a complete thought-wander and landing. Unlike 90s mood piece: has cognitive departure and different arrival.
[M-Param Strategy] M1(60s initial inner state) → free wander(120s, jumping between memories/images) → M2(30s a thought hits the nerve) → M7(90s new cognition settles). No M3-M6. 'Encounter' is internal.
[Density] Inner monologue or voiceover led. Images visualize thought — not realist. Bold image jumps. Non-linear time allowed.
[Prohibitions] No external conflict. No substantial interaction with others. No thesis-first — cognitive shift must be an accidental discovery during wandering.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 400-700字。写清：从什么想法出发 → 经过哪些意象/记忆 → 被什么击中 → 抵达什么新认知。\n【创意圣经】≈ 1200-1500字。意识流散文。',
        mechanicsEn: '[Pitch] ~400-700 chars each. Starting thought → images/memories → what struck → new cognition arrived at.\n[Bible] ~1200-1500 chars. Stream of consciousness essay.',
      },

      reference: '塔可夫斯基《镜子》；王家卫独白段落；Chris Marker《日月无光》；TED演讲叙事段',
      referenceEn: 'Tarkovsky Mirror; Wong Kar-wai monologue sections; Chris Marker Sans Soleil; TED talk narrative segments',
    },
  ]
};
