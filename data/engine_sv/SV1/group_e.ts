import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_E: LibraryCategoryDef = {
  id: 'cat_sv1_space_pressure',
  name: `空间·压力·对峙`,
  nameEn: 'Space & Pressure & Confrontation',
  items: [
    {
      id: 'CHAMBER',
      name: '密室/高压锅',
      nameEn: 'The Chamber / Pressure Cooker',
      group: 'E. 空间·压力·对峙',
      groupEn: 'Space & Pressure & Confrontation',

      def: '故事被封闭在一个物理空间中（电梯/车内/房间/荒岛）。无法离开。通过空间的物理挤压迫使角色之间发生高强度的化学反应。空间即结构。',
      defEn: 'Story confined to one physical space (elevator/car/room/island). No exit. Physical spatial compression forces high-intensity chemical reactions between characters. Space IS structure.',

      core: `【场景排列】全部叙事发生在单一封闭空间内，或在极有限的相邻空间之间。M1=空间的建立——在第一分钟内完成空间的物理描述（尺寸、光源、出口位置、温度）。M2=封闭的确立——出口被锁死/道路被切断/逃离变得不可能。从M2开始，叙事的所有动力来自空间内部的人际关系变化，不来自外部事件。M3-M4=空间内的角色开始互动，关系逐渐升温。M5-M6=空间压力达到临界，角色做出在外部世界永远不会做出的行为。M7=空间被打开（外力打开/角色自己打开/永远不打开），或空间不变但内部关系已彻底重构。
【信息规则】空间的物理限制决定信息的流通方式——角色无法离开也无法获取外部信息，他们只拥有彼此和空间中已有的物件。秘密在封闭空间中被物理性地挤压出来——因为无处可逃，角色最终会说出在开放空间中永远不会说的话。信息揭示的节奏服从空间压力曲线：压力越大，揭示越深。空间中的每一个物件都必须被使用——枪/电话/食物/水龙头，封闭空间中的物件是稀缺资源，每一个都必须在叙事中发挥功能。
【M参数映射】M1=空间+人物的初始配置（谁在哪个角落、谁靠近门、谁靠近窗）。M2=封闭事件（门锁了/桥断了/暴风雪来了），必须是不可逆的物理事件。M3=被困后的第一个目标（逃出去/修好通讯/撑到天亮）。M4=空间内的障碍——不是外部敌人，而是空间内角色之间的冲突（意见分歧/过去的恩怨/身份暴露）。M5=空间压力临界点的行动选择——通常涉及空间内的物理资源分配（最后的氧气/唯一的武器/仅有的食物）。M6=密闭环境中代价具有即时性和不可回避性——伤害发生在一臂之内。M7=开放时刻或永恒封闭。
【节奏规则】空间感决定节奏。前段（空间刚封闭）：角色维持社会性距离，对话礼貌，节奏缓慢。中段（时间推移）：社会面具开始脱落，对话变得直接/攻击性，节奏加速。后段（压力临界）：物理距离极近（面对面/肉搏），语言退化为喊叫或沉默，节奏极端化（极快的暴力 或 极长的死寂）。空间中的物理环境应当随时间恶化——灯光暗下来/氧气变少/温度升高——环境衰变是节奏的物理驱动器。
【禁忌】严禁引入空间外部的新角色——一旦封闭确立，角色名单就锁定了。严禁让空间变大——空间只能缩小（水在涨/墙在压缩/可用区域在减少）。严禁在中段打开空间让角色「透口气」——一旦释放压力，再封闭就无法恢复同等的紧迫感。角色的「秘密揭示」不可由外部电话/信件带入——必须由空间内的互动自然挤出。`,

      coreEn: `[Scene Order] All narrative within a single enclosed space or extremely limited adjacent spaces. M1=space established — physical description in first minute (dimensions, light source, exit positions, temperature). M2=closure confirmed — exit locked/road cut/escape impossible. From M2: all narrative drive from interpersonal changes within space, not external events. M3-M4=characters begin interacting, relationships heat up. M5-M6=spatial pressure reaches critical, characters act in ways impossible in open space. M7=space opens (externally/by characters/never), or space unchanged but internal relationships fully restructured.
[Info Rule] Physical limits determine info flow — characters can't leave or access outside info, they have only each other and objects in the space. Secrets are physically squeezed out by enclosure — nowhere to escape, characters eventually say what they'd never say in open space. Revelation rhythm follows pressure curve: more pressure, deeper reveals. Every object in space must be used — gun/phone/food/faucet, objects are scarce resources, each must serve narrative function.
[M-Param Mapping] M1=initial spatial configuration (who near door, who near window). M2=closure event (door locks/bridge breaks/blizzard arrives), must be irreversible physical event. M3=first goal after entrapment (escape/repair communications/survive until dawn). M4=obstacles within space — not external enemies but inter-character conflict (disagreements/past grudges/identity exposure). M5=critical-point action — usually involves physical resource allocation (last oxygen/only weapon/remaining food). M6=cost is immediate and unavoidable in enclosed environment — harm occurs within arm's reach. M7=opening moment or eternal closure.
[Pacing] Spatial sense determines rhythm. Early (just closed): social distance maintained, polite dialogue, slow pace. Mid (time passes): social masks falling, dialogue direct/aggressive, pace accelerates. Late (pressure critical): extreme physical proximity (face-to-face/grappling), language degrades to shouting or silence, extreme pacing (rapid violence OR extended dead silence). Physical environment should deteriorate over time — lights dimming/oxygen depleting/temperature rising — environmental decay is rhythm's physical driver.
[Prohibitions] No new characters from outside after closure. Space can only shrink, never expand. No mid-story pressure release — once released, re-closure can't restore equal urgency. Character secret reveals must NOT arrive via external phone/letter — must be naturally squeezed out by spatial interaction.`,

      skeletons: [
        'space_sealed_空间封闭',
        'pressure_builds_压力升级',
        'masks_fall_面具脱落',
        'eruption_or_implosion_爆发或内爆',
      ],
      reference: '《十二怒汉》(12 Angry Men)；《活埋》(Buried)；《电锯惊魂》(Saw)；《恐怖号》(The Terror)；《萨特·密室》(No Exit, Sartre)',
      referenceEn: '12 Angry Men; Buried; Saw; The Terror; No Exit (Sartre)',
    },

    {
      id: 'MEETING',
      name: '遭遇战/双人博弈',
      nameEn: 'The Meeting / Two-Person Game',
      group: 'E. 空间·压力·对峙',
      groupEn: 'Space & Pressure & Confrontation',

      def: '两个陌生人在一个特定空间（车站/电梯/候诊室）相遇。在有限的时间窗口内，通过对话和微小动作改变彼此的状态。一切发生在两人之间。',
      defEn: 'Two strangers meet in a specific space (station/elevator/waiting room). Within a limited time window, they alter each other\'s state through dialogue and micro-actions. Everything happens between two people.',

      core: `【场景排列】叙事浓缩为一次相遇的完整过程。M1=两人各自进入空间，尚未互动——用空间位置/身体语言/随身物品建立两个独立的人物。M2=接触的触发——一个微小事件打破隔阂（掉落的东西/一个眼神/一句被无意听到的话）。M3=对话开始，目标模糊浮现——两人各自有自己的潜台词和隐藏需求。M4=对话深入，表层话题之下是两人权力关系的试探和博弈。M5=某个瞬间，一方做出了超越社交常规的举动（突然说出真话/物理接触/沉默中的注视）。M6=代价——这个举动打破了两人精心维持的伪装，有人暴露了脆弱。M7=分离——两人离开空间，但已经与进入时不同。分离可以是：永别（再也不会相见）、承诺（约定重逢）、或悬置（开放结局）。
【信息规则】两人之间存在层叠的信息结构：①表层对话（天气/时间/社交客套）②潜台词（真正想说但不直说的）③身体语言（无法控制的真实信号）。观众的任务是同时追踪三层。关键信息机制：两人各自隐藏一个秘密/需求，对话的推进就是这些秘密被逐步暴露的过程——但不是通过「我告诉你我的秘密」，而是通过无意的口误、反应过度、或突然的沉默。
【M参数映射】M1=两个独立的人物建置，不通过背景故事，而通过在场的物理状态（衣着/疲惫程度/携带物品/占据空间的方式）。M2=接触触发事件，必须小到不起眼（大事件会把结构推向动作片）。M3=对话的目标——表面目标（打发等待时间/问路）vs.隐藏目标（寻求连接/确认/告别）。M4=博弈——两人之间的权力天平在每句话中微移（谁在问/谁在答/谁控制话题/谁在回避）。M5=越界瞬间——必须是具体的物理/语言行为，不可以是内心想法。M6=暴露的代价——脆弱被看见后的不适/释放。M7=分离时刻——最后的动作/表情承担全部情绪重量。
【节奏规则】全程控制在一个物理时间窗口内（等车的20分钟/电梯的2分钟/航班延误的3小时）。前段缓慢——两人保持社交距离，对话有大量间隔和沉默。中段渐快——话题变得私密，语速微升，身体距离缩小。后段节奏分裂：最密集的情感交换发生在分离前的最后30秒——然后突然切断。
【禁忌】严禁给两人预设「关系」——他们必须是陌生人，一切关系在这个空间中从零建立。严禁引入第三个人——双人博弈的张力在于排他性。严禁让对话直接说出潜台词——「我很孤独」不可以被说出来，只能被对话的形状暗示出来。分离不可以被取消——如果最终两人决定一起离开，遭遇结构就变成了爱情片第一幕。`,

      coreEn: `[Scene Order] Narrative condensed into one complete encounter. M1=both enter space separately, no interaction yet — establish two independent characters through spatial position/body language/belongings. M2=contact trigger — a micro-event breaks isolation (dropped item/a glance/an overheard phrase). M3=dialogue begins, goals vaguely emerge — each has subtext and hidden needs. M4=dialogue deepens, power dynamics probed beneath surface topics. M5=a moment where one makes a move beyond social convention (sudden truth/physical contact/held gaze). M6=cost — this move shatters carefully maintained pretense, someone's vulnerability exposed. M7=separation — both leave space, changed from when they entered. Separation can be: farewell (never again), promise (planned reunion), or suspended (open ending).
[Info Rule] Layered info structure between two people: ①surface dialogue (weather/time/pleasantries) ②subtext (what they really mean) ③body language (uncontrollable true signals). Audience tracks all three simultaneously. Key mechanism: each hides a secret/need; dialogue progression IS gradual exposure — not through 'let me tell you my secret' but through Freudian slips, overreactions, or sudden silence.
[M-Param Mapping] M1=two independent character establishments via present physical state (clothing/fatigue/belongings/spatial occupation), not backstory. M2=contact trigger, must be inconspicuously small. M3=dialogue goal — surface (killing time/asking directions) vs. hidden (seeking connection/confirmation/farewell). M4=game — power balance micro-shifts with each line (who asks/who answers/who controls topic/who evades). M5=boundary-crossing moment — must be concrete physical/verbal act, not internal thought. M6=exposure cost — discomfort/release of being seen vulnerable. M7=separation moment — final action/expression carries all emotional weight.
[Pacing] Entire narrative within one physical time window (20min wait/2min elevator/3hr delay). Early: slow, social distance, pauses and silences in dialogue. Mid: topics become personal, speech slightly faster, physical distance shrinks. Late: rhythm splits — densest emotional exchange in final 30 seconds before separation — then abrupt cut.
[Prohibitions] No preset relationship — must be strangers, all connection built from zero in this space. No third person — dual-person tension requires exclusivity. Subtext must NEVER be spoken directly — 'I'm lonely' cannot be said, only implied by dialogue's shape. Separation cannot be cancelled — if they leave together, encounter structure becomes romance Act 1.`,

      skeletons: [
        'two_strangers_enter_两人进入',
        'contact_trigger_接触触发',
        'power_game_权力博弈',
        'boundary_crossed_越界时刻',
        'separation_分离',
      ],
      reference: '《爱在黎明破晓前》(Before Sunrise)；《迷失东京》(Lost in Translation, 酒吧遭遇)；《两辆车一夜》(Two Cars, One Night)；契诃夫短篇(Chekhov\'s short stories)',
      referenceEn: 'Before Sunrise; Lost in Translation (bar encounter); Two Cars, One Night; Chekhov short stories',
    },

    {
      id: 'CHASE',
      name: '猫鼠追逐',
      nameEn: 'The Chase / Pure Kinesis',
      group: 'E. 空间·压力·对峙',
      groupEn: 'Space & Pressure & Confrontation',

      def: 'A追B。几乎没有对白，完全靠物理运动、空间穿越和剪辑节奏驱动叙事。叙事的动能态——动作即语言。',
      defEn: 'A chases B. Near-zero dialogue, driven entirely by physical movement, spatial traversal, and editing rhythm. Narrative kinetic state — action IS language.',

      core: `【场景排列】极简的二元结构：追者(Hunter)和逃者(Prey)。M1=追逐前的静止状态（猎手在观察/猎物不知道危险），必须短暂。M2=追逐的触发——一个启动动作（发现/逃跑/枪响/引擎启动）。M3=追逐的方向确立——猎物有一个目的地（安全屋/边境/车站），追逐有一个物理终点。M4=追逐过程中的障碍序列——每个障碍都是物理性的（墙/河/人群/交通/地形变化），不是心理性的。M5=追逐中的角色反转瞬间——猎物反击/猎手陷入困境/两人暂时胶着。M6=追逐的物理代价——消耗（体力/燃料/弹药）和损伤（伤口/损坏/坠落）。M7=追逐的终点——被抓住/逃脱/两人同时到达终点/坠落深渊。
【信息规则】信息完全通过物理状态传递：距离（两人之间的差距在缩小还是扩大）、速度（谁在加速谁在减速）、地形（前方是死胡同还是分叉路）、物理状态（谁在流血/谁在喘气/谁的车在冒烟）。不需要对话来解释角色的感受——身体本身就是表达媒介。观众的信息优势：可以同时看到猎手和猎物的位置，制造「他就在身后！」的焦虑。
【M参数映射】M1=静止起点（短暂到可以只是一个画面/一句话）。M2=动能释放（0到100的加速，这个加速必须是突然的）。M3=方向/目标通过奔跑的方向暗示，不通过对话。M4=物理障碍序列，每个障碍改变追逐的空间性质（从室内到室外/从地面到屋顶/从城市到荒野）。M5=角色反转——追逐的核心戏剧性不在于「跑得快」而在于权力关系的动态变化。M6=物理消耗的累积——追逐越长，两人的身体越破碎。M7=动能的终点——急停/碰撞/坠落/精疲力竭的瘫倒。
【节奏规则】节奏由物理速度和剪辑频率双重控制。基本曲线：加速→最高速→障碍减速→再加速→更高速→...→终极减速。每次障碍后的再加速必须比上一次更快。剪辑频率（场景切换速度）与物理速度同步：追逐激烈时镜头切换极快（每个画面不超过2秒），暂时胶着时镜头停留（5-8秒），制造呼吸节奏。声音设计是节奏的关键层：脚步/心跳/引擎/风声/呼吸构成「追逐的音乐」。
【禁忌】追逐中严禁插入超过一句话的对话——一旦角色开始交谈，动能中断。严禁让追逐在平坦无障碍的空间中进行——没有障碍的追逐就是两人在赛跑，没有叙事性。严禁让猎手始终在追上的边缘——距离必须有明确的波动（拉开→缩近→拉开→几乎追上→再次拉开），否则节奏变成匀速。追逐不可无限延长——物理消耗必须可信地限制追逐的持续时间。`,

      coreEn: `[Scene Order] Minimal binary structure: Hunter and Prey. M1=pre-chase stillness (hunter observing/prey unaware), must be brief. M2=chase trigger — an initiating action (discovery/flight/gunshot/engine start). M3=chase direction established — prey has a destination (safe house/border/station), chase has a physical endpoint. M4=obstacle sequence during chase — every obstacle is physical (wall/river/crowd/traffic/terrain change), not psychological. M5=role reversal moment — prey counter-attacks/hunter gets trapped/temporary stalemate. M6=physical cost of chase — depletion (stamina/fuel/ammo) and damage (wounds/breakage/falls). M7=chase endpoint — caught/escaped/both arrive simultaneously/fall into abyss.
[Info Rule] Info transmitted entirely through physical state: distance (gap shrinking or widening), speed (who accelerating/decelerating), terrain (dead end or fork ahead), physical condition (who bleeding/panting/smoking engine). No dialogue needed to explain feelings — body IS the expressive medium. Audience info advantage: sees both hunter and prey positions simultaneously, creating 'they're right behind you!' anxiety.
[M-Param Mapping] M1=static start (can be just one image/line). M2=kinetic release (0-to-100 acceleration, must be sudden). M3=direction/goal implied by running direction, not dialogue. M4=physical obstacle sequence, each changing chase's spatial nature (indoor→outdoor/ground→rooftop/city→wilderness). M5=role reversal — chase drama isn't about speed but dynamic power shifts. M6=cumulative physical depletion — longer chase, more broken bodies. M7=kinetic endpoint — abrupt stop/collision/fall/exhausted collapse.
[Pacing] Rhythm controlled by physical speed AND edit frequency. Base curve: accelerate→peak→obstacle deceleration→re-accelerate→higher peak→...→ultimate deceleration. Each post-obstacle re-acceleration faster than previous. Edit frequency syncs with physical speed: intense chase=rapid cuts (≤2s per shot), temporary stalemate=held shots (5-8s), creating breathing rhythm. Sound design is key rhythm layer: footsteps/heartbeat/engine/wind/breathing form 'chase music.'
[Prohibitions] No dialogue longer than one sentence during chase — conversation kills kinetic energy. No chasing on flat, obstacle-free terrain — obstacle-free chase is just a race, no narrative. Distance must fluctuate clearly (widen→narrow→widen→almost caught→widen again) — uniform gap creates uniform pace. Chase cannot extend indefinitely — physical depletion must credibly limit duration.`,

      skeletons: [
        'chase_ignites_追逐点燃',
        'obstacle_terrain_障碍地形',
        'role_reversal_角色反转',
        'kinetic_endpoint_动能终点',
      ],
      reference: '《法国贩毒网》(The French Connection)；《疯狂的麦克斯4》(Mad Max: Fury Road)；《谍影重重》(The Bourne Ultimatum)；《城市之光》追逐段(City of God)',
      referenceEn: 'The French Connection; Mad Max: Fury Road; The Bourne Ultimatum; City of God (chase sequences)',
    },

    {
      id: 'ARGUMENT',
      name: '语言博弈/论辩',
      nameEn: 'The Argument / Verbal Duel',
      group: 'E. 空间·压力·对峙',
      groupEn: 'Space & Pressure & Confrontation',

      def: '两个或多个人在一个空间里争吵。语言作为武器，每句话都在改变权力天平。物理动作极少，叙事能量完全由对白驱动。',
      defEn: 'Two or more people argue in one space. Language as weapon, every line shifts the power balance. Minimal physical action, narrative energy driven entirely by dialogue.',

      core: `【场景排列】单一空间内的对话拉锯。M1=表面的平静——争吵之前的「安全话题」（吃饭/寒暄/公事），但潜台词已经在涌动。M2=导火索——一句话/一个词/一个动作引爆了积压的张力。可以是直接的指控，也可以是无意的口误。M3=争吵的焦点确立——表面上在吵什么（晚餐/钱/工作），真正在吵什么（权力/尊严/过去的伤害）。M4=攻防序列——每一轮交锋都在升级：从讽刺→指责→翻旧账→人身攻击→核弹级的揭底（「你从来没有爱过我」/「你跟你爸一模一样」）。M5=某一方做出了不可撤回的语言行为——说出了不能收回的话。M6=话语的代价——关系在那一句话之后不可逆地改变了。M7=争吵的结束——沉默/摔门/崩溃/和解/疲惫的停战。
【信息规则】语言博弈的核心信息机制是「层级递进」——每一轮交锋揭示更深一层的隐藏信息。第一层：当前事件（今天发生的事）。第二层：模式（这不是第一次了）。第三层：根源（为什么你总是这样→童年/创伤/价值观冲突）。第四层：核弹（从未被说出的终极真相）。观众跟随每一层的揭示，理解这场争吵远比表面更深。未说出的话比说出的话更重要——沉默/停顿/话到嘴边又咽回的时刻是关键信息。
【M参数映射】M1=人物关系的初始权力分配（谁在示弱/谁在控制/谁在回避）。M2=导火索，越小越好——大导火索会让争吵看起来「合理」，小导火索才能暴露冰山之下。M3=争吵焦点的表里分裂——AI必须生成两层：角色以为在吵的 vs. 角色真正在吵的。M4=攻防序列，每轮权力天平必须微移（A先占上风→B反击→A再压→B抛出核弹→A崩溃）。M5=不可撤回的话语——这句话的力量在于它是真的。M6=语言造成的伤害——关系裂缝不可修复或永久改变了形态。M7=结束形式本身是信息：摔门=未解决，和解=暂时缝合，沉默=最深的裂缝。
【节奏规则】对话节奏模拟音乐的动态变化。开场(piano)：对话缓慢，大量间隔，话题安全。升温(crescendo)：台词越来越短，回应越来越快，停顿越来越少。高潮(fortissimo)：台词退化为单词/咆哮/哭喊——语言的碎裂本身是结构效果。尾声(decrescendo或突然中断)：漫长的沉默/离开的脚步声/一个不相关的日常动作（关灯/洗碗）。身体动作极度克制——整场争吵中最多一个物理性动作（摔杯子/站起来/抓住手臂），这个动作必须是全场唯一的物理高潮。
【禁忌】严禁让角色「理性地论辩」——争吵不是辩论赛，角色必须犯逻辑谬误、偷换概念、回避论点、答非所问，因为他们在保护自己而不是追求真理。严禁让权力天平始终偏向一方——必须有至少两次反转。严禁用旁白/画外音解释角色的真实想法——真实想法只能通过对话的缝隙泄露。严禁在争吵中途插入回忆闪回——一切都必须发生在当下、在这个房间里、通过声音传递。`,

      coreEn: `[Scene Order] Dialogue tug-of-war within single space. M1=surface calm — 'safe topics' before eruption (dinner/small talk), but subtext already surging. M2=fuse — one line/word/action ignites accumulated tension. Can be direct accusation or unintentional slip. M3=argument focus established — surface issue (dinner/money/work) vs. real issue (power/dignity/past wounds). M4=attack-defense sequence escalating: sarcasm→accusation→dredging up old fights→personal attacks→nuclear reveal ('you never loved me'/'you're exactly like your father'). M5=one party commits an irrevocable speech act — says the unsayable. M6=cost of words — relationship irreversibly changed after that line. M7=argument ends — silence/door slam/breakdown/reconciliation/exhausted ceasefire.
[Info Rule] Core mechanism: 'layer-by-layer escalation.' Each exchange round reveals deeper hidden info. Layer 1: current event (what happened today). Layer 2: pattern (this isn't the first time). Layer 3: root cause (why you always do this → childhood/trauma/value conflict). Layer 4: nuclear truth (never-before-spoken ultimate truth). What's NOT said is more important than what IS — silences/pauses/words swallowed back are key info moments.
[M-Param Mapping] M1=initial power distribution (who submits/who controls/who avoids). M2=fuse, smaller is better — big fuse makes argument seem 'justified,' small fuse exposes the iceberg beneath. M3=surface/depth split — AI must generate two layers: what characters think they're fighting about vs. what they're really fighting about. M4=attack-defense rounds, power balance must micro-shift each round. M5=irrevocable line — its power lies in being TRUE. M6=linguistic damage — relationship crack unrepairable or permanently reshaped. M7=ending form IS information: door slam=unresolved, reconciliation=temporary suture, silence=deepest crack.
[Pacing] Dialogue rhythm simulates musical dynamics. Opening(piano): slow dialogue, long pauses, safe topics. Building(crescendo): lines shorten, responses quicken, pauses vanish. Climax(fortissimo): lines degrade to single words/shouts/sobs — linguistic fragmentation IS structural effect. Coda(decrescendo or abrupt cut): long silence/departing footsteps/an unrelated domestic action (turning off light/washing dishes). Physical action extremely restrained — at most ONE physical act during entire argument (smashing glass/standing up/grabbing arm), must be the sole physical climax.
[Prohibitions] Characters must NOT argue 'rationally' — arguments aren't debates; characters must commit logical fallacies, deflect, dodge points, because they're protecting themselves not seeking truth. Power balance must NOT stay one-sided — minimum two reversals required. No voiceover explaining true feelings — true feelings leak only through dialogue gaps. No memory flashbacks mid-argument — everything must happen now, in this room, through sound.`,

      skeletons: [
        'surface_calm_表面平静',
        'fuse_lit_导火索',
        'escalation_layers_层级升级',
        'irrevocable_words_不可撤回的话',
        'aftermath_争吵之后',
      ],
      reference: '《杀戮》(Carnage, Polanski)；《婚姻故事》(Marriage Story)；《革命之路》(Revolutionary Road)；《谁害怕弗吉尼亚·伍尔夫》(Who\'s Afraid of Virginia Woolf?)',
      referenceEn: 'Carnage (Polanski); Marriage Story; Revolutionary Road; Who\'s Afraid of Virginia Woolf?',
    },

    {
      id: 'DILEMMA',
      name: '电车难题/道德困境',
      nameEn: 'The Dilemma / Moral Crucible',
      group: 'E. 空间·压力·对峙',
      groupEn: 'Space & Pressure & Confrontation',

      def: '主角必须在两个（或多个）同样糟糕的选项中做出选择。没有赢家。选择本身即是代价。结构的核心不是「对vs.错」而是「错vs.错」。',
      defEn: 'Protagonist must choose between two (or more) equally terrible options. No winning. The choice itself IS the cost. Structure\'s core is not right-vs-wrong but wrong-vs-wrong.',

      core: `【场景排列】M1=日常世界，建立主角的价值观和他珍视的东西。M2=困境的引入——一个不可回避的情境迫使主角面对选择，且选择有明确的时限。M3=困境的两个选项被完整呈现——两个选项必须同时清晰可见，且每个选项都有不可接受的代价。M4=主角的挣扎过程——尝试寻找第三条路（结果发现不存在）、向他人寻求建议（结果意见分裂）、拖延（结果时限逼近）。M5=选择的时刻——主角必须做出决定，且决定必须是一个具体的行动（扳道闸/签字/开枪/沉默），不可以是「决定不决定」。M6=选择的即时后果——被放弃的选项的代价立即兑现，主角必须面对它。M7=选择之后的世界——主角带着这个选择的重量继续生活。
【信息规则】困境的力量取决于两个选项的「等价性」——观众不能在M3就判断出哪个选项「更好」。实现方式：让两个选项服务于不同的价值维度（选项A保护了个人但牺牲了群体 vs. 选项B保护了群体但牺牲了个人），使得优劣无法在同一坐标系内比较。观众应当被分裂——一半会选A，一半会选B。主角获得的每一条新信息都应当同时为两个选项增加论据，而不是倾向某一个。
【M参数映射】M1=建立主角珍视的东西（这些东西将在M3的选项中被迫互相抵押）。M2=困境的物理化呈现——困境不是抽象的思考题，而是一个具体的情境（面前有两扇门/两个人都在水里但只能救一个/必须在两个孩子之间选择谁先手术）。M3=选项的完整展示，每个选项的代价必须是具体的、可视化的、不可协商的。M4=主角在选项之间摇摆的物理表现——不是内心独白，而是走向A又折返、拿起又放下、无法说出选择的身体反应。M5=选择的行动——M5在困境结构中是全片最重要的M参数，因为行动本身就是人格的证明。M6=被放弃的代价——主角必须亲眼看到/亲身承受另一个选项的后果。M7=选择之后的沉默——没有解释，没有辩护，只有重量。
【结构比例】困境建置(M1-M3)≈35% / 挣扎(M4)≈30% / 选择+后果(M5-M7)≈35%。M4(挣扎)不可省略——如果主角很快就做出了选择，观众会认为困境不够真实。
【禁忌】严禁提供第三选项——「两个都救」或「找到了更好的办法」会彻底消解困境结构的意义。严禁让一个选项有隐藏的好处——如果选A之后发现A其实更好，困境就变成了悬疑揭秘。严禁在M7中给出道德判断——叙事不可以告诉观众主角的选择「是对的」或「是错的」，这个判断必须留给观众。严禁让困境是可以用更多信息解决的——困境不是信息不足的问题，而是价值冲突的问题。`,

      coreEn: `[Scene Order] M1=ordinary world, establish protagonist's values and what they cherish. M2=dilemma introduced — unavoidable situation forces choice, with explicit deadline. M3=two options fully presented — both clearly visible, each with unacceptable cost. M4=protagonist's struggle — seeking third path (doesn't exist), asking advice (opinions split), stalling (deadline approaches). M5=choice moment — must be a concrete action (pull lever/sign paper/fire/stay silent), not 'deciding not to decide.' M6=immediate consequences — abandoned option's cost materializes instantly; protagonist must face it. M7=world after choice — protagonist continues living with the weight.
[Info Rule] Dilemma's power depends on options' 'equivalence' — audience can't judge which is 'better' at M3. Method: options serve different value dimensions (A protects individual but sacrifices group vs. B protects group but sacrifices individual), making comparison impossible on same axis. Audience should split — half would choose A, half B. Every new piece of info protagonist receives should simultaneously strengthen BOTH options, not tilt toward one.
[M-Param Mapping] M1=establish what protagonist cherishes (these will be mortgaged against each other in M3). M2=dilemma physically embodied — not abstract thought experiment but concrete situation (two doors/two people drowning but can only save one/choosing which child gets surgery first). M3=full option display, each cost must be concrete, visual, non-negotiable. M4=protagonist's oscillation physically manifested — not inner monologue but walking toward A then turning back, picking up then putting down, body unable to speak the choice. M5=choice action — in dilemma structure, M5 is the MOST important M-param because action IS proof of character. M6=abandoned cost — protagonist must witness/bear the other option's consequences firsthand. M7=post-choice silence — no explanation, no justification, only weight.
[Proportions] Dilemma setup(M1-M3)≈35% / Struggle(M4)≈30% / Choice+consequences(M5-M7)≈35%. M4 must NOT be skipped — quick choice makes audience doubt dilemma's authenticity.
[Prohibitions] No third option — 'save both' or 'found a better way' annihilates dilemma structure. No hidden benefits to either option — if choosing A later reveals A was better, dilemma becomes mystery. No moral judgment in M7 — narrative must NOT tell audience the choice was 'right' or 'wrong,' that judgment belongs to audience. Dilemma must NOT be solvable with more info — it's a value conflict, not an info deficit.`,

      skeletons: [
        'values_established_价值建立',
        'dilemma_presented_困境呈现',
        'oscillation_挣扎摇摆',
        'choice_made_做出选择',
        'weight_of_choice_选择的重量',
      ],
      reference: '《苏菲的选择》(Sophie\'s Choice)；《蝙蝠侠：黑暗骑士》双船困境(The Dark Knight)；《平衡》(Balance, 动画短片)；《密阳》(Secret Sunshine)',
      referenceEn: "Sophie's Choice; The Dark Knight (two boats); Balance (animated short); Prisoners (Villeneuve)",
    },

    {
      id: 'MACGUFFIN',
      name: '麦高芬追逐',
      nameEn: 'The MacGuffin',
      group: 'E. 空间·压力·对峙',
      groupEn: 'Space & Pressure & Confrontation',

      def: '所有角色都在争夺一个物件/信息/位置（手提箱/U盘/王位/宝藏）。物件的实际内容不重要——重要的是追逐本身揭示了每个角色的本性。欲望的客体是空的。',
      defEn: 'All characters compete for one object/info/position (briefcase/USB drive/throne/treasure). Object\'s actual content is irrelevant — what matters is the chase itself reveals each character\'s true nature. The object of desire is empty.',

      core: `【场景排列】M1=麦高芬的引入——物件/信息/位置首次出现，所有角色的注意力被它吸引。M2=争夺的启动——多方势力同时得知麦高芬的存在/位置，竞争开始。M3=各方确立各自的获取目标和策略。M4=争夺序列——麦高芬在不同角色之间反复转手，每次转手都伴随冲突和代价。核心结构规律：「拥有麦高芬的人」永远处于危险中，「追逐麦高芬的人」永远拥有主动权。M5=最终争夺——所有势力在同一时空中碰撞。M6=获得麦高芬的代价——赢得物件但失去了更重要的东西（关系/道德/生命）。M7=麦高芬的最终归属——或者被揭示为空虚的（打开箱子里面什么都没有），或者被摧毁，或者变得不再重要。
【信息规则】麦高芬的「内容」应当始终保持模糊——观众不需要知道箱子里是什么、U盘里有什么数据。如果内容被揭示，揭示本身应当制造反讽（拼死争夺的东西其实毫无价值）。每个角色「为什么想要麦高芬」的动机比麦高芬本身更重要——动机揭示人物。信息不对称驱动冲突：角色A知道麦高芬在哪但不知道它是什么，角色B知道它是什么但不知道在哪，角色C两者都不知道但拥有武力。
【M参数映射】M1=麦高芬的物理形态建立——它是什么样子、在哪里、谁最先看到它。M2=争夺开始，多方势力被激活。M3=每个势力的动机和策略——M3不是单一的，而是每个角色各有一个M3。M4=转手序列——每次转手是一个微型M4-M5-M6循环（A拥有→B夺取→A付出代价）。这个循环重复多次，每次的暴力/策略/代价升级。M5=最终碰撞中的关键选择——通常是「要麦高芬还是要某个人」。M6=获得者的代价——赢了物件输了灵魂。M7=麦高芬的命运——它的最终状态（被毁/被弃/被打开后发现是空的）是全片的隐喻总结。
【结构比例】引入(M1-M2)≈15% / 争夺序列(M3-M4)≈50% / 最终碰撞+结局(M5-M7)≈35%。争夺序列是结构主体——麦高芬必须至少转手3次才能建立「人人都想要→人人都得不到」的结构节奏。
【禁忌】严禁让麦高芬的内容成为叙事的核心——如果故事最终变成「揭秘箱子里是什么」，它就不再是麦高芬结构，而是悬疑片。严禁让一个角色轻松获得麦高芬——每次获得必须付出代价，每次拥有都伴随危险。严禁给麦高芬赋予超自然力量——它必须是一个普通的物件/信息，力量完全来自人们赋予它的欲望。最终获得者严禁是道德上最「好」的角色——麦高芬结构的讽刺在于：最在乎它的人往往被它毁灭。`,

      coreEn: `[Scene Order] M1=MacGuffin introduction — object/info/position first appears, all characters' attention drawn to it. M2=competition starts — multiple factions simultaneously learn MacGuffin's existence/location. M3=each faction establishes acquisition goal and strategy. M4=competition sequence — MacGuffin repeatedly changes hands, each transfer accompanied by conflict and cost. Core structural rule: whoever HAS the MacGuffin is in danger; whoever CHASES it has the initiative. M5=final confrontation — all factions collide in same spacetime. M6=cost of acquisition — win the object but lose something more important (relationship/morality/life). M7=MacGuffin's final fate — revealed as empty (box contains nothing), destroyed, or made irrelevant.
[Info Rule] MacGuffin's 'content' should remain perpetually vague — audience doesn't need to know what's in the case or on the drive. If content is revealed, revelation should create irony (fought to the death for something worthless). Each character's motivation for wanting MacGuffin matters more than MacGuffin itself — motive reveals character. Info asymmetry drives conflict: character A knows WHERE but not WHAT, B knows WHAT but not WHERE, C knows neither but has force.
[M-Param Mapping] M1=MacGuffin's physical form established. M2=competition activated, multiple factions triggered. M3=each faction's motive and strategy — M3 is not singular but one per character. M4=transfer sequence — each transfer is a micro M4-M5-M6 cycle (A has it→B takes it→A pays cost). Cycle repeats multiple times, violence/strategy/cost escalating each round. M5=key choice in final collision — usually 'MacGuffin or someone you love.' M6=winner's cost — won the object, lost the soul. M7=MacGuffin's fate — its final state (destroyed/abandoned/opened and found empty) is the film's metaphorical summary.
[Proportions] Introduction(M1-M2)≈15% / Competition sequence(M3-M4)≈50% / Final collision+resolution(M5-M7)≈35%. MacGuffin must change hands minimum 3 times to establish 'everyone wants it → no one can keep it' rhythm.
[Prohibitions] MacGuffin's content must NOT become narrative core — if story becomes 'reveal what's in the box,' it's mystery not MacGuffin structure. No easy acquisition — every gain has cost, every possession brings danger. No supernatural powers for MacGuffin — must be ordinary object/info, power comes entirely from desire projected onto it. Final possessor must NOT be the morally 'best' character — MacGuffin structure's irony: whoever cares most is usually destroyed by it.`,

      skeletons: [
        'macguffin_appears_麦高芬登场',
        'multi_faction_pursuit_多方争夺',
        'transfers_and_betrayals_转手与背叛',
        'macguffin_fate_麦高芬的命运',
      ],
      reference: '《低俗小说》(Pulp Fiction, 手提箱)；《马耳他之鹰》(The Maltese Falcon)；《夺宝奇兵》(Raiders of the Lost Ark)；《雇佣人生》(El Empleo)',
      referenceEn: 'Pulp Fiction (briefcase); The Maltese Falcon; Raiders of the Lost Ark; No Country for Old Men (satchel)',
    },
  ]
};
