import { LibraryCategoryDef } from '../../../types';

export const SV2_GROUP_D: LibraryCategoryDef = {
  id: 'cat_sv2_long',
  name: 'D. 长篇体量 (45m–90m+)',
  nameEn: 'D. Long Volume (45m–90m+)',
  items: [
    {
      id: 'vol_episode_45m',
      name: '剧集单集 (45m)',
      nameEn: 'TV Episode (45m)',
      group: 'D. 长篇体量',
      groupEn: 'Long Volume',

      def: '美剧单集标准体量。必须同时服务「本集闭环」和「系列悬念」——本集有独立的满足感，同时推进更大的未解之谜。',
      defEn: 'Standard TV episode. Must serve both episodic closure and serial mystery — standalone satisfaction plus bigger unresolved thread.',

      core: `【体量本质】45分钟 = 可以承载多线叙事的完整生态。A-Plot(主线)必须在本集内闭环。B-Plot(副线)可以跨集延续。C-Line(暗线)可以只推进一步。这三个层次的嵌套是剧集体量的核心技术。
【M参数策略】A-Plot拥有完整的M1-M7。B-Plot拥有M1-M4(本集不闭环——悬置到下一集)。C-Line只需要一个M2(暗示级别的新信息)。
A-Plot比例分配：M1(3m) → M2(3m) → M3(2m) → M4(15m，含中点反转) → M5(5m) → M6(5m) → M7(3m)。
B-Plot穿插在A-Plot的「呼吸段落」中，总计占10-12分钟。
C-Line隐藏在场景过渡或看似无关的对白中，总计不超过3分钟。
必须引入副线展示同一个SUR4(律法)如何压榨不同阶层。
【密度】正常电视剧密度。允许4-6个场景。允许5-8个角色（但每个场景不超过4个角色同时在场）。允许闪回但总量不超过3分钟。
【禁忌】A-Plot严禁不闭环——观众需要单集满足感。B-Plot严禁本集内闭环——它的功能是制造「下集预告」效应。C-Line严禁被角色讨论——它只对观众可见。`,

      coreEn: `[Volume Essence] 45min = multi-thread narrative ecosystem. A-Plot closes this episode. B-Plot carries over. C-Line advances one step. This nesting is the core technique.
[M-Param Strategy] A-Plot: full M1-M7. B-Plot: M1-M4(suspended). C-Line: one M2(hint-level new info).
A-Plot: M1(3m)→M2(3m)→M3(2m)→M4(15m with midpoint)→M5(5m)→M6(5m)→M7(3m). B-Plot in A-Plot breathing passages, 10-12min total. C-Line hidden in transitions, max 3min.
[Density] Normal TV density. 4-6 scenes. 5-8 characters (max 4 per scene). Flashbacks max 3min total.
[Prohibitions] A-Plot must close. B-Plot must NOT close this episode. C-Line must not be discussed by characters.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 800-1200字。必须分别写出：A-Plot完整弧光 + B-Plot本集进展 + C-Line暗示内容。三卡的A-Plot风格互不雷同。\n【创意圣经】≈ 6000-8000字。标准剧集剧本体量，多线交织。',
        mechanicsEn: '[Pitch] ~800-1200 chars each. Must specify: A-Plot full arc + B-Plot this-episode progress + C-Line hint. Three pitches must have distinct A-Plot styles.\n[Bible] ~6000-8000 chars. Standard episode script volume, multi-thread.',
      },

      reference: '《绝命毒师》(Breaking Bad)单集；《真探》(True Detective)S1单集；《黑镜》长篇集',
      referenceEn: 'Breaking Bad single episode; True Detective S1 episode; Black Mirror feature-length episodes',
    },

    {
      id: 'vol_thriller_45m',
      name: '惊悚/悬疑单元 (45m)',
      nameEn: 'Thriller / Suspense Unit (45m)',
      group: 'D. 长篇体量',
      groupEn: 'Long Volume',

      def: '以信息操控为核心驱动力的45分钟。观众、主角、反派三方的信息差异构成全部张力。每一个新信息都重写已知世界。',
      defEn: 'Info manipulation as core drive for 45min. Info asymmetry between audience, protagonist, and antagonist creates all tension. Every new info rewrites the known world.',

      core: `【体量本质】45分钟的悬疑 = 需要至少5层信息翻转。每层翻转之间需要足够的「消化时间」让观众重新校准理解。翻转不能匀速——必须加速（间隔越来越短）。
【M参数策略】M1(5m表面世界) → M2(3m异常出现) → M4(25m调查/追踪——每5分钟一次信息翻转，共5层：半真相→误导→更深真相→以为到底了→真正的底) → M5(5m带着完整信息做出抉择) → M6(3m抉择的代价) → M7(4m新世界+可选的最终钩子)。
信息翻转节奏：前3层各间隔5-7分钟，后2层间隔2-3分钟——制造加速感。
【密度】对白必须有双重含义——表面含义和观众回溯后的真实含义。场景转换可以多（6-8个场景），因为地理移动是调查类故事的自然结构。视觉线索必须在画面中被种下但不被画面强调。
【禁忌】严禁任何翻转依赖「主角突然想起了什么」——信息必须从外部来。严禁反派的动机在最后5分钟才揭示——反派动机的线索必须从第二层翻转起就开始种。严禁超过2个反派。`,

      coreEn: `[Volume Essence] 45min suspense = minimum 5 info-flip layers. Digest time between flips. Must accelerate (intervals shorten).
[M-Param Strategy] M1(5m)→M2(3m)→M4(25m investigation, info flip every 5min: half-truth→misdirect→deeper truth→false bottom→real bottom)→M5(5m)→M6(3m)→M7(4m).
Flip rhythm: first 3 at 5-7min intervals, last 2 at 2-3min — acceleration.
[Density] Dialogue must have dual meaning. 6-8 scenes allowed. Visual clues planted but not emphasized.
[Prohibitions] No flip from 'protagonist suddenly remembers.' Antagonist motive clues must start from layer 2. Max 2 antagonists.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 800-1200字。必须明确写出5层信息翻转的具体内容，以及每层如何改写前面的理解。\n【创意圣经】≈ 6000-8000字。信息密集型剧本，双重含义对白。',
        mechanicsEn: '[Pitch] ~800-1200 chars each. Must specify 5 info-flip layers and how each rewrites prior understanding.\n[Bible] ~6000-8000 chars. Info-dense script with dual-meaning dialogue.',
      },

      reference: '《消失的爱人》(Gone Girl)；《穆赫兰道》(Mulholland Drive)；《记忆碎片》(Memento)',
      referenceEn: 'Gone Girl; Mulholland Drive; Memento',
    },

    {
      id: 'vol_feature_90m',
      name: '标准长片 (90m)',
      nameEn: 'Feature Film (90m)',
      group: 'D. 长篇体量',
      groupEn: 'Long Volume',

      def: '电影的标准体量。每一个M参数都能发育为一整幕。完整的世界观铺陈、多层人物关系、连锁反应式的剧情推进。主角的挣扎引发系统的震荡。',
      defEn: 'Standard film volume. Every M-param can grow into a full act. Complete world building, multi-layered relationships, chain-reaction plot. Protagonist\'s struggle shakes the system.',

      core: `【体量本质】90分钟 = 所有叙事元素达到「工业标准」的展开空间。不再有体量压迫——每个选择都是美学选择而非被迫压缩。
【M参数策略】经典三幕全展开——
第一幕(22m)：M1(10m完整世界建设) → M2(5m催化事件) → PP1(2m情节点1) → M3(5m新世界+目标确立)
第二幕前半(23m)：M4a(18m上升动作，4-6个递进障碍) → Midpoint(5m中点反转，赌注翻倍)
第二幕后半(23m)：M4b(10m中点后果+压力加剧) → M6(8m代价兑现序列，All Is Lost) → PP2(5m情节点2，主角被逼到绝境)
第三幕(22m)：M5(10m最终行动/对决) → M7(12m结局+余韵+终场画面)
B-Plot贯穿全片占20%。C-Line占5%。
SUR层完整展开：SUR1(人物)、SUR2(场域)、SUR4(律法)、SUR5(欲望物)、SUR6(空间)全部可用。
【密度】允许10-15个场景。允许10+角色。允许多次闪回。允许平行剪辑。对白可以有「废话」——闲聊段落提供质感。沉默和留白是工具不是缺陷。
【禁忌】第一幕严禁超过总时长30%。中点不可省略。第三幕严禁比第一幕长。M7终场画面必须与M1开场画面形成可测量的视差。B-Plot必须在第三幕与A-Plot产生实质性交汇（不只是主题呼应）。`,

      coreEn: `[Volume Essence] 90min = all elements at 'industry standard' expansion. No volume pressure — every choice is aesthetic, not forced compression.
[M-Param Strategy] Full three-act deployment —
Act1(22m): M1(10m world)→M2(5m catalyst)→PP1(2m)→M3(5m new world+goal)
Act2a(23m): M4a(18m rising, 4-6 obstacles)→Midpoint(5m reversal)
Act2b(23m): M4b(10m consequences)→M6(8m All Is Lost)→PP2(5m cornered)
Act3(22m): M5(10m final action)→M7(12m resolution+aftermath)
B-Plot 20%. C-Line 5%. Full SUR layer deployment.
[Density] 10-15 scenes. 10+ characters. Multiple flashbacks. Parallel editing. Idle dialogue for texture.
[Prohibitions] Act1 max 30%. Midpoint mandatory. Act3 shorter than Act1. Final image must parallax-shift from opening. B-Plot must substantively converge with A-Plot in Act3.`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 1000-1500字。完整的三幕+两个情节点+中点+B线+C暗线。每个M参数都必须有具体展开描述。\n【创意圣经】≈ 8000-12000字。完整电影级文学剧本。',
        mechanicsEn: '[Pitch] ~1000-1500 chars each. Full 3 acts + 2 plot points + midpoint + B-line + C-line. Every M-param with specific expansion.\n[Bible] ~8000-12000 chars. Complete feature-film literary script.',
      },

      reference: '《教父》(The Godfather)；《寄生虫》(Parasite)；《银翼杀手2049》(Blade Runner 2049)；《花样年华》(In the Mood for Love)',
      referenceEn: 'The Godfather; Parasite; Blade Runner 2049; In the Mood for Love',
    },

    {
      id: 'vol_epic_90m',
      name: '史诗长片 (90m+)',
      nameEn: 'Epic Feature (90m+)',
      group: 'D. 长篇体量',
      groupEn: 'Long Volume',

      def: '超过90分钟的宏大叙事。不只是「更长的电影」——是一个可自我生长的叙事生态系统。多代际、多阵营、跨时空。个体命运与历史洪流缠绕。',
      defEn: 'Beyond 90min epic narrative. Not just a longer film — a self-growing narrative ecosystem. Multi-generational, multi-faction, cross-temporal. Individual fate entangled with historical tide.',

      core: `【体量本质】90分钟+ = 叙事的「开放世界」。可以有自己的编年史、自己的地理、自己的宪法。个体故事是更大系统故事的切面。
【M参数策略】主线A拥有完整M1-M7。但每个M参数本身可以展开为一个独立的「章」：
章一·日常帝国(M1,15-20m)：不急于进入故事——用足够时间展示这个世界的物理质感、社会分层、权力运作。M1本身就可以是一部短片。
章二·裂缝(M2,10m)：帝国的第一道裂缝。
章三·欲望与阵营(M3+M4a,20-25m)：多个阵营/势力围绕同一目标展开博弈。
章四·中场战争(Midpoint,10-15m)：全面翻牌——所有表面联盟暴露真实意图。
章五·代价加速(M4b+M6,20-25m)：连锁反应——一个人的选择引发系统性震荡。
章六·终局(M5+M7,15-20m)：不是「解决问题」而是「建立新秩序」或「秩序彻底崩溃」。
B/C/D多条副线独立运行，通过共享的SUR4(律法/系统规则)连接。
【密度】可以有20+场景、20+角色。可以有多个时间线。世界的「规则」本身是一个角色。允许章节式结构（章与章之间有标题卡或时间跳跃）。
【禁忌】严禁无中心——即使是史诗，也必须有一个主角或主线作为观众的情感锚点。严禁均匀分配篇幅——必须有节奏的呼吸。严禁所有线索都在结尾汇合——允许部分线索成为「未来的种子」。`,

      coreEn: `[Volume Essence] 90min+ = narrative 'open world.' Can have its own chronicle, geography, constitution. Individual story is a cross-section of system story.
[M-Param Strategy] Main line full M1-M7. Each M-param can expand into a chapter:
Ch1·Empire(M1,15-20m): world texture, social strata, power mechanics.
Ch2·Crack(M2,10m): first crack in empire.
Ch3·Desire+Factions(M3+M4a,20-25m): multi-faction game.
Ch4·Midpoint War(10-15m): all surface alliances reveal true intent.
Ch5·Cost Acceleration(M4b+M6,20-25m): one choice triggers systemic shock.
Ch6·Endgame(M5+M7,15-20m): new order established or total collapse.
[Density] 20+ scenes, 20+ characters. Multiple timelines. Chapter structure allowed.
[Prohibitions] Must have a protagonist/emotional anchor. Must have rhythmic breathing. Not all threads converge — some become 'future seeds.'`,

      patch: {
        mechanics: '【三卡大纲】每卡 ≈ 1200-2000字。章节式结构。必须写出：世界观的核心法则 + 3-4条线的各自走向 + 系统性连锁反应的逻辑链。\n【创意圣经】≈ 10000-15000字。史诗级文学剧本/大纲，章节式展开。',
        mechanicsEn: '[Pitch] ~1200-2000 chars each. Chapter structure. Core world laws + 3-4 thread trajectories + chain reaction logic.\n[Bible] ~10000-15000 chars. Epic literary script/treatment, chapter-based.',
      },

      reference: '《教父》三部曲；《指环王》(LOTR)；《2001太空漫游》；《权力的游戏》；《百年孤独》',
      referenceEn: 'The Godfather trilogy; LOTR; 2001: A Space Odyssey; Game of Thrones; One Hundred Years of Solitude',
    },
  ]
};
