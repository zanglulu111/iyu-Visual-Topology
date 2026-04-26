import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_H: LibraryCategoryDef = {
  id: 'cat_sv1_micro_event',
  name: `微型事件结构`,
  nameEn: 'Micro-Event Structures',
  items: [
    {
      id: 'SETUP_PAYOFF',
      name: '铺垫反转',
      nameEn: 'Setup & Payoff / Rug Pull',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '前80%的叙事建立一个看似稳固的前提——世界观、关系、身份、规则——最后20%以一个信息揭示彻底推翻该前提。观众被迫用新信息回溯重读整个叙事。',
      defEn: "80% of narrative builds a seemingly solid premise — worldview, relationship, identity, rules — the final 20% demolishes it with a single info reveal. Audience forced to retroactively re-read the entire narrative.",

      core: `【场景排列】M1=建立「可信前提」——一个看起来完全正常的世界/关系/身份。可信度是这个结构的核心资产——前提越真实、越被接受，反转越有力。场景必须在建立可信性上投入大量细节（具体的日常/可触摸的质感/角色之间自然的互动）。M2=前提深化——在可信前提上叠加情感投资。观众开始关心角色、代入情境。这一阶段的叙事必须是「好看的」——不是在等反转，而是独立成立的好叙事。M3=植入伏笔——在前提中埋设微小的「不对劲」信号。这些信号必须满足双重阅读：首次观看时被合理解释（「只是个巧合」），反转后被识别为早期线索。伏笔密度不能过高——3-5个足够。M4=加速认同——叙事推向情感高点（主角即将成功/关系即将圆满/谜团即将解开）。观众在这个阶段的认同感最强——他们完全相信前提，并期待前提的逻辑结局。M5=反转触发——一个具体的信息揭示（一个物件/一句话/一个画面/一个视角切换）瞬间推翻整个前提。这不是「意外转折」而是「前提坍塌」——之前建立的一切突然有了完全不同的含义。M6=回溯冲击——反转之后，叙事给予观众2-3秒的沉默/空白，让回溯重读自然发生。前面埋设的伏笔此刻全部激活——观众意识到线索一直在那里。M7=新现实落点——以反转后的新前提重新定义一个画面/场景/关系。不解释太多——让新前提自己说话。
【信息规则】整个结构的核心是「信息控制」。观众和主角拥有相同的（错误的）信息。反转的本质是：一个被隐藏的关键信息被揭示，导致所有已知信息的含义反转。伏笔是「双重编码信息」——同一个细节在两个前提下有不同含义。反转后严禁长篇解释——如果需要解释，说明伏笔没埋好。
【M参数映射】M1=可信前提建立（日常世界的虚假版本）。M2=情感投资深化。M3=双重编码伏笔。M4=认同加速。M5=信息揭示=反转。M6=回溯冲击（伏笔激活）。M7=新现实落点。
【结构比例】前提建立+深化(M1-M2)≈35% / 伏笔+加速(M3-M4)≈40% / 反转+冲击+落点(M5-M7)≈25%
【禁忌】反转不可依赖「之前没展示的信息」——必须从已展示的信息中生长（只是观众没看出来）。严禁多重反转——一次反转的力度远大于两次。前提建立阶段严禁有意误导——必须是自然呈现，只是省略了某个关键信息。反转后严禁让主角长篇解释「原来如此」——沉默比解释更有力。`,

      coreEn: `[Scene Order] M1=establish 'credible premise' — a seemingly normal world/relationship/identity. Credibility is the core asset — the more real and accepted the premise, the more powerful the reversal. Invest heavy detail in credibility (specific dailiness/tangible texture/natural character interaction). M2=premise deepening — layer emotional investment onto credible premise. Audience begins caring and projecting. This phase must work as good standalone narrative, not merely waiting for the twist. M3=plant foreshadowing — embed small 'something's off' signals. These must satisfy dual reading: on first watch, reasonably explained ('just a coincidence'); post-reversal, recognized as early clues. 3-5 plants sufficient; don't over-seed. M4=accelerate identification — push toward emotional peak (protagonist about to succeed/relationship about to complete/mystery about to solve). Audience identification peaks here — they fully believe the premise and expect its logical conclusion. M5=reversal trigger — one specific info reveal (an object/a line/an image/a POV shift) instantly demolishes the entire premise. Not a 'surprise twist' but a 'premise collapse' — everything built before suddenly means something entirely different. M6=retroactive shock — after reversal, 2-3 seconds of silence/blankness for retroactive re-reading. All planted foreshadowing activates — audience realizes clues were always there. M7=new reality landing — redefine a single image/scene/relationship under the new premise. Don't over-explain — let the new premise speak for itself.
[Info Rule] Core is 'information control.' Audience and protagonist share the same (wrong) information. Reversal = a hidden key piece of info revealed, inverting the meaning of all known info. Foreshadowing = 'dual-coded info' — same detail means different things under each premise. No lengthy explanation after reversal — if explanation is needed, foreshadowing was insufficient.
[M-Param Mapping] M1=credible premise (false version of ordinary world). M2=emotional investment deepening. M3=dual-coded foreshadowing. M4=identification acceleration. M5=info reveal = reversal. M6=retroactive shock (foreshadowing activation). M7=new reality landing.
[Proportions] Premise+deepening(M1-M2)≈35% / Foreshadowing+acceleration(M3-M4)≈40% / Reversal+shock+landing(M5-M7)≈25%
[Prohibitions] Reversal must not rely on previously unshown info — must grow from what was shown (audience just didn't see it). No multiple reversals — one reversal's force far exceeds two. Premise phase must not deliberately mislead — must be natural presentation, just omitting one key piece. No protagonist explaining 'so that's what it was' after reversal — silence is more powerful than explanation.`,

      skeletons: [
        'credible_premise_可信前提',
        'foreshadow_plant_伏笔植入',
        'reversal_trigger_反转触发',
        'new_reality_新现实落点',
      ],

      reference: '《第六感》(The Sixth Sense)；《搏击俱乐部》(Fight Club)；《看不见的客人》(The Invisible Guest)；《致命魔术》(The Prestige)',
      referenceEn: 'The Sixth Sense; Fight Club; The Invisible Guest; The Prestige',
    },

    {
      id: 'INVERSION',
      name: '身份置换',
      nameEn: 'Identity Inversion',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '猎人变猎物、审讯者变嫌疑人、拯救者变被困者。叙事在某个节点将主体与客体的位置对调，通过视角反转揭示被遮蔽的真相。权力关系的拓扑翻转。',
      defEn: "Hunter becomes prey, interrogator becomes suspect, rescuer becomes trapped. Narrative swaps subject/object positions at a pivot point, revealing hidden truth through perspective inversion. Topological flip of power relations.",

      core: `【场景排列】M1=建立初始权力关系——明确谁是主动方、谁是被动方。猎人/猎物、审问者/嫌疑人、医生/病人、老师/学生——权力不对称必须清晰可感。主动方拥有信息/权力/能动性上的优势。被动方看似弱势、受控、等待裁决。M2=权力行使——主动方开始行使权力（追踪/审问/诊断/教导）。叙事在这个阶段完全从主动方的视角展开。被动方的反应被解读为「弱势方的反应」（恐惧/顺从/困惑/抵抗）。M3=裂缝信号——主动方在行使权力的过程中遇到「不对劲」。被动方的某些反应不符合弱势方的模式（过于冷静/过于精准/过于配合/过于了解情况）。这些信号被主动方合理化（「可能只是……」），但观众开始警觉。M4=权力动摇——更多裂缝出现。主动方发现自己掌握的信息可能不完整/不正确。被动方开始展示出不应该拥有的能力/信息/资源。权力天平开始微微倾斜。M5=置换时刻——一个决定性的信息/事件/揭示将权力关系彻底翻转。猎人发现自己才是猎物。审问者发现自己才是被审问的人。拯救者发现自己才是需要被救的人。这个翻转必须是拓扑性的——不是「力量对比变化」而是「位置本身互换」。M6=新权力关系的代价——置换之后，原主动方体验到作为被动方的全部代价。之前行使权力的每一个动作此刻都被回溯为「陷阱的一部分」。原被动方展示出完整的主导权。M7=最终定位——新的权力格局被确立（或第二次翻转将关系推向更复杂的拓扑）。落点必须回答：权力关系的本质是什么？谁在最初就决定了结局？
【信息规则】初始权力关系中，主动方拥有更多信息（或自以为拥有）。被动方实际上从一开始就拥有关键信息——但将自己伪装成信息匮乏者。置换时刻的核心是信息反转：观众发现被动方一直知道主动方不知道的事。置换之后，之前所有的「弱势反应」被重新编码为「策略行为」。
【M参数映射】M1=初始权力关系建立（主动/被动位置明确）。M2=权力行使（从主动方视角展开）。M3=裂缝信号（被动方的反常反应）。M4=权力动摇（天平开始倾斜）。M5=置换时刻（拓扑翻转）。M6=新权力关系下的代价。M7=最终权力格局。
【结构比例】初始关系+权力行使(M1-M2)≈30% / 裂缝+动摇(M3-M4)≈30% / 置换+代价+落点(M5-M7)≈40%
【禁忌】置换不可是纯物理力量的逆转（「弱者突然变强」不是身份置换）——必须是位置/角色/身份本身的互换。被动方的伪装不可是事后解释——必须在回看时从细节中生长出来。严禁在置换后让原主动方轻易接受新位置——必须有反抗/否认/崩溃的过程。严禁双方同时意识到置换——必须是一方先于另一方意识到。`,

      coreEn: `[Scene Order] M1=establish initial power relation — who is active, who is passive. Hunter/prey, interrogator/suspect, doctor/patient, teacher/student — power asymmetry must be palpable. Active party holds advantage in info/power/agency. Passive party appears weak, controlled, awaiting judgment. M2=power exercise — active party begins exercising power (tracking/interrogating/diagnosing/teaching). Narrative unfolds entirely from active party's POV. Passive party's responses read as 'weak party reactions' (fear/compliance/confusion/resistance). M3=crack signals — active party encounters 'something off' during power exercise. Passive party's responses don't match weak-party patterns (too calm/too precise/too cooperative/too informed). Active party rationalizes ('probably just...'), but audience grows alert. M4=power wobble — more cracks. Active party discovers their info may be incomplete/incorrect. Passive party begins displaying capabilities/info/resources they shouldn't have. Power balance begins to tilt. M5=inversion moment — a decisive info/event/reveal completely flips power relation. Hunter discovers they are the prey. Interrogator discovers they are the one being interrogated. Rescuer discovers they need rescuing. This flip must be topological — not 'force rebalance' but 'position swap itself.' M6=cost under new power relation — post-inversion, original active party experiences full cost of being passive. Every prior power exercise is retroactively recoded as 'part of the trap.' Original passive party reveals full control. M7=final positioning — new power configuration established (or second flip pushes into more complex topology). Must answer: what is the nature of power here? Who determined the outcome from the start?
[Info Rule] In initial relation, active party holds more info (or believes so). Passive party actually held key info from the start — but disguised as info-poor. Inversion's core is info reversal: audience discovers passive party always knew what active party didn't. Post-inversion, all 'weak responses' are recoded as 'strategic behavior.'
[M-Param Mapping] M1=initial power relation (active/passive positions clear). M2=power exercise (active party's POV). M3=crack signals (passive party's anomalous responses). M4=power wobble (balance tilting). M5=inversion moment (topological flip). M6=cost under new power relation. M7=final power configuration.
[Proportions] Initial relation+power exercise(M1-M2)≈30% / Cracks+wobble(M3-M4)≈30% / Inversion+cost+landing(M5-M7)≈40%
[Prohibitions] Inversion must not be pure physical force reversal ('weak becomes strong' is not identity inversion) — must be swap of position/role/identity itself. Passive party's disguise must not be post-hoc explained — must grow from details on re-watch. Original active party must not easily accept new position — must resist/deny/collapse. Both parties must not realize inversion simultaneously — one must recognize it before the other.`,

      skeletons: [
        'power_established_权力建立',
        'crack_signals_裂缝信号',
        'inversion_moment_置换时刻',
        'final_positioning_最终定位',
      ],

      reference: '《沉默的羔羊》(The Silence of the Lambs)；《老男孩》(Oldboy)；《消失的爱人》(Gone Girl)；《寄生虫》(Parasite)',
      referenceEn: 'The Silence of the Lambs; Oldboy; Gone Girl; Parasite',
    },

    {
      id: 'DISCOVERY',
      name: '发现异物',
      nameEn: 'Discovery of the Foreign Object',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '在一个平凡、熟悉的环境中，发现了一个不该存在的东西——一封信/一具尸体/一个符号/一个声音/一个人。异物的存在撕裂日常的因果逻辑，叙事围绕「这是什么？它为什么在这里？」展开。',
      defEn: "In a mundane, familiar environment, something is found that should not exist — a letter/a body/a symbol/a sound/a person. The foreign object tears the causal logic of the everyday; narrative unfolds around 'What is this? Why is it here?'",

      core: `【场景排列】M1=日常的精确建立——环境必须是极度平凡的（厨房/办公室/卧室/公园长椅/通勤列车）。平凡性需要通过重复性动作来建立（每天走同一条路/每天打开同一扇门/每天看到同样的人）。这个阶段的功能是让观众彻底信任「这里什么都不会发生」。M2=异物出现——在日常空间中突然出现一个不属于这里的东西。异物的核心特征是「不可解释的在场」——它的存在违反了M1建立的日常逻辑。异物可以是物理的（墙上突然出现的门/地板下的声音/信箱里没有署名的包裹）、人的（一个不认识的人坐在你的位置上/一个死去的人出现在街角）、或信息的（手机里出现一张你没拍的照片/镜子里映出不是你的脸）。关键：异物必须是静态的——它不主动做任何事，只是「在那里」。M3=初始反应·合理化——发现者的第一反应是将异物纳入日常逻辑（「可能是别人放的」/「我记错了」/「这是恶作剧」）。合理化必须是真诚的——角色真的相信自己的解释。但合理化解释留下一个无法填补的缝隙。M4=异物的持续在场——合理化失败。异物没有消失、没有被解释、继续存在。角色开始围绕异物产生行为改变（反复回去查看/开始调查/试图移除/开始害怕）。日常节奏开始被异物的存在扭曲——角色做日常事务时总是被异物吸引注意力。M5=异物的含义浮现——通过调查/偶然/联想，异物的可能含义开始显现。这个含义必须指向角色自身——异物不是外来的偶然事件，而是角色被压抑的过去/欲望/恐惧的物质化显现。异物是角色的症状。M6=面对异物——角色必须对异物做出最终决定（接受/销毁/理解/逃避）。无论选择什么，异物已经永久改变了M1的日常——你不可能假装没看见过它。日常的裂缝无法修复。M7=异物之后的日常——角色回到M1的空间，但空间已经不同了。异物可能已经消失，但它留下的痕迹（物理的或心理的）永久嵌入了日常。落点是「被异物标记的平凡」。
【信息规则】异物本身是一个纯粹的「能指」——它的含义不在自身，而在它与日常环境的关系中。观众和角色同步——都不知道异物是什么。信息的生长方向是从外向内：起初异物看起来是外来的/偶然的，最终被揭示为内在的/必然的。异物的「答案」不必完整——保留30%的不可解释性比100%的解释更有力。
【M参数映射】M1=日常世界的精确建立（平凡性=信任基础）。M2=异物出现（不可解释的在场）。M3=合理化尝试（日常逻辑的防御反应）。M4=异物的持续在场（日常被扭曲）。M5=含义浮现（异物=角色的症状）。M6=面对异物的最终抉择。M7=被异物标记的新日常。
【结构比例】日常建立(M1)≈15% / 异物出现+合理化(M2-M3)≈20% / 持续在场+扭曲(M4)≈25% / 含义浮现(M5)≈20% / 面对+新日常(M6-M7)≈20%
【禁忌】异物严禁有即时解释——如果角色立刻知道它是什么，结构就退化为「线索-破案」。异物严禁是主动威胁——它不攻击、不追逐、不说话，它只是「在那里」（主动威胁会把结构推向恐怖/惊悚）。严禁让异物的含义100%明确——完全的解释会消解异物的存在论重量。严禁让日常在异物消失后完全恢复——异物必须留下永久痕迹。`,

      coreEn: `[Scene Order] M1=precise establishment of the everyday — environment must be extremely mundane (kitchen/office/bedroom/park bench/commuter train). Mundanity established through repetitive action (same route daily/same door/same faces). Function: make audience fully trust 'nothing will happen here.' M2=foreign object appears — something that doesn't belong suddenly present in the everyday space. Core trait: 'inexplicable presence' — its existence violates M1's daily logic. Can be physical (door that wasn't in the wall/sound beneath the floor/unsigned package in mailbox), human (unknown person in your seat/dead person on street corner), or informational (photo on phone you didn't take/face in mirror that isn't yours). Key: foreign object must be static — it doesn't actively do anything, it just 'is there.' M3=initial response·rationalization — discoverer's first response is to fit the object into daily logic ('someone probably left it'/'I misremember'/'it's a prank'). Rationalization must be sincere — character genuinely believes their explanation. But a gap remains unfilled. M4=persistent presence — rationalization fails. Object hasn't disappeared, hasn't been explained, continues to exist. Character's behavior changes around the object (repeatedly checking/investigating/trying to remove/growing afraid). Daily rhythm distorted — the object pulls attention during routine tasks. M5=meaning surfaces — through investigation/chance/association, the object's possible meaning emerges. This meaning must point to the character themselves — the object isn't external coincidence but materialized manifestation of repressed past/desire/fear. The object is the character's symptom. M6=confronting the object — character must make final decision about the object (accept/destroy/understand/flee). Whatever the choice, the object has permanently altered M1's everyday — you cannot pretend you never saw it. The crack in the everyday cannot be repaired. M7=everyday after the object — character returns to M1's space, but the space is different. Object may have disappeared, but its trace (physical or psychological) is permanently embedded in the everyday. Landing: 'the mundane, marked by the foreign object.'
[Info Rule] The object itself is a pure 'signifier' — its meaning is not in itself but in its relation to the everyday environment. Audience and character are synchronized — neither knows what the object is. Info grows from outside inward: initially the object appears external/accidental, ultimately revealed as internal/necessary. The object's 'answer' need not be complete — 30% inexplicability is more powerful than 100% explanation.
[M-Param Mapping] M1=precise everyday (mundanity=trust foundation). M2=object appears (inexplicable presence). M3=rationalization attempt (everyday logic's defense). M4=persistent presence (everyday distorted). M5=meaning surfaces (object=character's symptom). M6=final confrontation with object. M7=new everyday marked by the object.
[Proportions] Everyday(M1)≈15% / Object+rationalization(M2-M3)≈20% / Persistent presence(M4)≈25% / Meaning(M5)≈20% / Confrontation+new everyday(M6-M7)≈20%
[Prohibitions] Object must not have instant explanation — if character immediately knows what it is, structure degrades to 'clue-solving.' Object must not be an active threat — it doesn't attack, chase, or speak; it just 'is there' (active threat pushes structure toward horror/thriller). Object's meaning must not be 100% clear — full explanation dissolves its existential weight. Everyday must not fully recover after object disappears — object must leave permanent trace.`,

      skeletons: [
        'mundane_established_日常建立',
        'object_appears_异物出现',
        'meaning_surfaces_含义浮现',
        'marked_everyday_被标记的日常',
      ],

      reference: '《蓝丝绒》(Blue Velvet)；《完美的世界》(A Perfect World)；《红气球》(The Red Balloon)；《2001太空漫游》(2001: A Space Odyssey)',
      referenceEn: 'Blue Velvet; A Perfect World; The Red Balloon; 2001: A Space Odyssey',
    },

    {
      id: 'HORROR_STING',
      name: '恐怖刺点',
      nameEn: 'Horror Sting / Dread Puncture',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '长时间的静默、压抑、低信息密度构成漫长的铺垫，一切指向最后一秒的单一惊吓/揭示/刺点。恐惧不来自刺点本身，而来自等待刺点的过程。',
      defEn: "Prolonged silence, suppression, and low info density build a vast runway — everything points toward a single final-second scare/reveal/puncture. Fear comes not from the sting itself, but from the process of waiting for it.",

      core: `【场景排列】M1=安全假象——建立一个看似安全但隐含不安的环境。不安不来自明确的威胁，而来自空间本身的质感（过于安静/过于空旷/过于整洁/光线不对/温度不对）。角色此刻是安全的——但观众的身体已经开始紧张。声音设计在这个阶段极其重要：环境音的每一个细节都被放大（时钟滴答/水龙头滴水/远处的狗叫/自己的呼吸）。M2=第一个不安信号——一个微小的、可能是错觉的异常（好像有什么动了/好像听到了什么/好像门没关好/好像镜子里有什么）。角色注意到了，但选择忽略。这个信号的功能不是推进情节，而是让观众进入「警觉模式」——从此每一帧都在扫描画面寻找威胁。M3=压抑积累——长时间的「什么都没发生」。角色做日常动作（走路/开灯/倒水/打开柜子），但每一个动作都被恐惧污染。观众在等待——每一个转角/每一扇门/每一个暗处都可能是刺点出现的位置。但刺点迟迟不来。这个阶段的核心是「延迟」——越长越好。节奏必须慢到让人不舒服。每一秒都在积蓄恐惧的势能。M4=虚假释放——似乎威胁被证伪了（原来是猫/原来是风/原来是自己的影子）。角色松了一口气。观众也短暂松弛。但这个释放是虚假的——它的功能是让观众放下防御，为真正的刺点清场。M5=最终接近——角色进入最危险的空间/位置/动作（走向地下室/打开最后一扇门/回头看/低头看手机又抬头）。镜头开始限制信息——景框收窄/背景虚化/声音消失。观众知道刺点就在下一秒——但不知道从哪个方向来。M6=刺点——单一的、猛烈的、不可回避的冲击。一张脸/一个身影/一双手/一个声音/一个画面——出现在最意想不到的位置。刺点的持续时间极短（0.5-2秒），但之前的全部积蓄在这一刻释放。刺点的内容不重要——重要的是它出现的时机和位置。M7=刺点之后——两种可能：a)切黑/沉默——留给观众自己消化恐惧。b)揭示刺点的含义——恐惧转化为更深的不安（原来不是鬼，是人；原来不是外面的威胁，是里面的）。
【信息规则】信息密度随时间递减——开场时有正常的环境信息，中段信息越来越少（画面越来越暗/声音越来越少/对话消失），刺点前达到信息最低点（几乎只剩角色的呼吸和黑暗）。信息匮乏=控制丧失=恐惧。虚假释放(M4)是一次短暂的信息恢复（「哦，原来是这样」），功能是重置观众的防御以让刺点更有效。刺点本身是瞬间的信息爆炸——从极低密度到极高密度的跳跃。
【M参数映射】M1=安全假象（不安的空间建立）。M2=第一个异常信号。M3=压抑积累（延迟=势能积蓄）。M4=虚假释放。M5=最终接近（信息收窄）。M6=刺点（瞬间释放）。M7=刺点后的沉默或揭示。
【结构比例】安全假象(M1)≈10% / 第一信号(M2)≈5% / 压抑积累(M3)≈40% / 虚假释放(M4)≈10% / 最终接近(M5)≈20% / 刺点+余波(M6-M7)≈15%
【禁忌】严禁在刺点前给予任何明确的威胁展示——如果观众已经看到了怪物/凶手/威胁源，刺点就失去了「未知恐惧」的力量。严禁多次刺点——一次性的单一冲击远大于反复吓。虚假释放不可超过一次——多次「狼来了」会让观众产生免疫。压抑积累阶段严禁用配乐制造紧张——必须用沉默和环境音。严禁在刺点后立即解释——让恐惧在沉默中发酵。`,

      coreEn: `[Scene Order] M1=false safety — establish an apparently safe but subtly unsettling environment. Unease comes not from explicit threat but from spatial texture (too quiet/too empty/too neat/wrong light/wrong temperature). Character is safe — but audience's body is already tense. Sound design critical: every environmental detail amplified (clock ticking/faucet dripping/distant dog/own breathing). M2=first unease signal — a tiny, possibly imagined anomaly (something seemed to move/seemed to hear something/door seems ajar/something in the mirror). Character notices but chooses to ignore. Function: put audience into 'alert mode' — every frame scanned for threat from this point on. M3=suppression accumulation — long stretch of 'nothing happens.' Character performs routine actions (walking/switching lights/pouring water/opening cabinets), but every action contaminated by dread. Audience waits — every corner/door/shadow could be the sting's location. But the sting doesn't come. Core is 'delay' — the longer the better. Pace must be uncomfortably slow. Every second stores fear's potential energy. M4=false release — threat seems disproved (it was a cat/wind/own shadow). Character relaxes. Audience briefly relaxes. But release is false — its function is to lower defenses, clearing the field for the real sting. M5=final approach — character enters the most dangerous space/position/action (walking toward basement/opening last door/looking back/looking down at phone then up). Camera restricts info — frame narrows/background blurs/sound disappears. Audience knows the sting is next — but not from which direction. M6=the sting — single, violent, unavoidable impact. A face/a figure/hands/a sound/an image — appearing in the most unexpected position. Duration extremely short (0.5-2 sec), but all accumulated energy releases in this instant. Content matters less than timing and placement. M7=after the sting — two options: a) cut to black/silence — let audience digest fear alone. b) reveal the sting's meaning — fear transforms into deeper unease (it wasn't a ghost, it was a person; threat wasn't outside, it was inside).
[Info Rule] Info density decreases over time — normal environmental info at opening, less and less through the middle (darker image/fewer sounds/dialogue disappears), reaching info minimum before sting (nearly only character's breathing and darkness). Info poverty=loss of control=fear. False release(M4) is brief info restoration ('oh, it was just that'), function is resetting audience defense for more effective sting. The sting itself is instant info explosion — jump from extreme low to extreme high density.
[M-Param Mapping] M1=false safety (unsettling space). M2=first anomaly signal. M3=suppression accumulation (delay=potential energy). M4=false release. M5=final approach (info narrows). M6=the sting (instant release). M7=post-sting silence or reveal.
[Proportions] False safety(M1)≈10% / First signal(M2)≈5% / Suppression(M3)≈40% / False release(M4)≈10% / Final approach(M5)≈20% / Sting+aftermath(M6-M7)≈15%
[Prohibitions] No explicit threat display before sting — if audience has already seen the monster/killer/threat source, the sting loses 'fear of the unknown.' No multiple stings — single impact far exceeds repeated scares. False release must not exceed once — multiple 'wolf cries' create audience immunity. Suppression phase must not use score to create tension — must use silence and ambient sound only. No immediate explanation after sting — let fear ferment in silence.`,

      skeletons: [
        'false_safety_安全假象',
        'suppression_buildup_压抑积累',
        'the_sting_刺点释放',
        'aftermath_silence_余波沉默',
      ],

      reference: '《闪灵》(The Shining)；《遗传厄运》(Hereditary)；《午夜凶铃》(Ringu)；《万能钥匙》(The Skeleton Key)',
      referenceEn: 'The Shining; Hereditary; Ringu; The Skeleton Key',
    },

    {
      id: 'FALLOUT',
      name: '灾难余波',
      nameEn: 'Fallout / Aftermath',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '不展示灾难本身，只展示灾难之后的废墟、幸存者、反应和重建尝试。核心事件是一个永远缺席的「零点」——叙事围绕这个空洞展开，通过余波反推灾难的形状。',
      defEn: "Never shows the disaster itself — only the ruins, survivors, reactions, and rebuilding attempts that follow. The core event is a permanently absent 'ground zero' — narrative orbits this void, inferring the disaster's shape through its aftermath.",

      core: `【场景排列】M1=余波的第一个画面——叙事直接从灾难之后开始。没有闪回、没有交代、没有「之前发生了什么」。观众被丢进一个已经被改变的世界——烟尘/碎片/沉默/混乱/受伤的人/空无一人的街道。M1的功能是让观众通过废墟的形状反推灾难的规模。灾难是什么？不知道。什么时候发生的？刚刚——或者很久以前。M2=幸存者的状态——角色出现。他们的状态本身就是叙事：震惊的沉默/机械的动作/不合时宜的冷静/崩溃的哭泣/反复确认某个信息。角色不解释发生了什么——他们的身体和行为就是解释。M2的核心是「身体叙事」：受伤的方式/衣服的状态/眼神的方向/手的位置，每个细节都在说话。M3=碎片拼图——通过角色的对话碎片/环境细节/新闻片段/电话通话，灾难的轮廓开始浮现。但信息是碎片化的、矛盾的、不完整的。不同角色拥有不同的碎片——没有人掌握全貌。观众在这个阶段做的是「拼图」——从余波的碎片中重建灾难。M4=余波中的人际——灾难剥离了所有社会表演。人际关系在极端状态下暴露真实结构：谁在找谁/谁在帮谁/谁在崩溃/谁异常冷静/谁消失了。余波不是「团结」的时刻——它同时暴露人性的慷慨和残忍。M5=关键选择——在废墟中必须做出的决定（救谁/走向哪里/带什么离开/告诉谁真相/是否回到零点）。这个选择没有好选项——每个选择都有不可接受的代价。选择本身定义角色是谁。M6=零点的回声——灾难的某个后续效应到达（余震/第二波/坏消息/确认死亡/发现真相）。零点不是过去的——它仍在向现在辐射。余波不会结束，因为灾难仍在继续。M7=新常态的轮廓——不是「重建」而是「在废墟上生活」。角色开始执行新的日常动作（清理/寻找/等待/记录/遗忘）。这些动作既是生存也是哀悼。落点是一个具体的、微小的日常动作——但这个动作在灾难之前不存在，它是余波的产物。
【信息规则】灾难本身永远不被完整展示——它是叙事的「结构性缺席」。观众获得的所有信息都是间接的：通过余波推断原因。信息碎片之间存在矛盾——不同角色的版本不同。随着叙事推进，灾难的轮廓越来越清晰，但永远不完整——总有一块拼图缺失。这个缺失不是叙事的缺陷，而是结构的核心：灾难的不可完全认知性。
【M参数映射】M1=余波的第一画面（废墟=灾难的负形）。M2=幸存者的身体叙事。M3=碎片拼图（灾难轮廓浮现）。M4=极端状态下的人际真相。M5=废墟中的关键选择。M6=零点的持续辐射。M7=新常态（在废墟上的日常）。
【结构比例】余波+幸存者(M1-M2)≈25% / 碎片拼图+人际(M3-M4)≈35% / 选择+回声+新常态(M5-M7)≈40%
【禁忌】严禁展示灾难本身——一旦展示，结构就退化为灾难片。严禁用闪回补全灾难——零点必须保持缺席。严禁让角色完整讲述「发生了什么」——碎片化是结构的本质，不是需要被修复的问题。严禁让余波走向「大团圆」式的重建——废墟上的新常态不是恢复，是变异。严禁让灾难有单一明确的原因——灾难的因果链必须保持部分不可追溯。`,

      coreEn: `[Scene Order] M1=first image of aftermath — narrative begins directly after the disaster. No flashback, no exposition, no 'what happened before.' Audience dropped into an already-changed world — dust/debris/silence/chaos/injured people/empty streets. M1's function: let audience infer disaster's scale from the ruins' shape. What was the disaster? Unknown. When? Just now — or long ago. M2=survivor states — characters appear. Their condition IS the narrative: shocked silence/mechanical actions/inappropriate calm/breakdown/repeatedly confirming information. Characters don't explain what happened — their bodies and behavior are the explanation. M2's core is 'body narrative': how they're hurt/clothing state/gaze direction/hand position — every detail speaks. M3=fragment puzzle — through dialogue fragments/environmental details/news clips/phone calls, the disaster's outline begins to emerge. But info is fragmented, contradictory, incomplete. Different characters hold different fragments — no one holds the full picture. Audience 'puzzles' — reconstructing the disaster from aftermath fragments. M4=interpersonal in aftermath — disaster strips all social performance. Relationships reveal true structure under extreme conditions: who seeks whom/who helps whom/who collapses/who is eerily calm/who has vanished. Aftermath is not a 'unity' moment — it simultaneously exposes human generosity and cruelty. M5=critical choice — decision that must be made in the ruins (who to save/where to go/what to take/who to tell the truth/whether to return to ground zero). No good options — every choice carries unacceptable cost. The choice itself defines who the character is. M6=ground zero's echo — a subsequent effect of the disaster arrives (aftershock/second wave/bad news/confirmed death/truth discovered). Ground zero is not past — it still radiates into the present. Aftermath doesn't end because the disaster is still continuing. M7=new normal's outline — not 'rebuilding' but 'living on the ruins.' Characters begin new routine actions (clearing/searching/waiting/recording/forgetting). These actions are both survival and mourning. Landing is a specific, small daily action — one that didn't exist before the disaster, a product of the aftermath.
[Info Rule] The disaster itself is never fully shown — it is the narrative's 'structural absence.' All audience info is indirect: inferring cause from aftermath. Fragments contradict each other — different characters hold different versions. As narrative progresses, disaster's outline clarifies but never completes — one puzzle piece always missing. This absence is not a narrative flaw but the structure's core: the disaster's fundamental unknowability.
[M-Param Mapping] M1=first aftermath image (ruins=disaster's negative form). M2=survivor body narrative. M3=fragment puzzle (disaster outline emerges). M4=interpersonal truth under extremity. M5=critical choice in the ruins. M6=ground zero's continuing radiation. M7=new normal (everyday on the ruins).
[Proportions] Aftermath+survivors(M1-M2)≈25% / Fragment puzzle+interpersonal(M3-M4)≈35% / Choice+echo+new normal(M5-M7)≈40%
[Prohibitions] Never show the disaster itself — showing it degrades structure to disaster film. No flashbacks to fill in the disaster — ground zero must remain absent. No character may fully narrate 'what happened' — fragmentation is structural essence, not a problem to fix. No 'happy ending' rebuilding — new normal on the ruins is not recovery, it is mutation. Disaster must not have single clear cause — causal chain must remain partially untraceable.`,

      skeletons: [
        'aftermath_image_余波画面',
        'fragment_puzzle_碎片拼图',
        'critical_choice_废墟抉择',
        'new_normal_新常态',
      ],

      reference: '《广岛之恋》(Hiroshima Mon Amour)；《切尔诺贝利》(Chernobyl)；《海啸奇迹》(The Impossible)；《余震》(Aftershock)',
      referenceEn: 'Hiroshima Mon Amour; Chernobyl; The Impossible; Aftershock',
    },

    {
      id: 'OPEN_ENDING',
      name: '开放结局',
      nameEn: 'Open Ending / Suspended Closure',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '叙事在最高张力点戛然而止，不提供明确答案。观众被留在未解决的状态中——结局不在银幕上，而在每个观众的头脑中。拒绝闭合本身就是意义。',
      defEn: "Narrative halts at peak tension, providing no clear answer. Audience left in an unresolved state — the ending is not on screen but in each viewer's mind. Refusal of closure is itself the meaning.",

      core: `【场景排列】M1=建立一个有明确方向的叙事——观众被训练去期待一个结局（谁赢/谁死/在一起还是分开/真相是什么/选择A还是B）。叙事的前期必须是「传统的」——它需要建立足够强的闭合期待，否则开放结局只是「没写完」。M2=冲突加剧——叙事推向决定性时刻。所有线索汇聚、所有关系紧张、所有选项摆在桌面上。观众的期待达到峰值——他们确信下一场戏就是答案。M3=最后的信息——在悬停之前给出最后一块信息。这块信息必须是「够用但不够」的——它让观众可以构建至少两个同样合理的结局，但无法确定哪个是「对的」。这是开放结局与「没写完」的本质区别：开放结局提供了足够的材料让每个观众构建自己的闭合。M4=悬停时刻——叙事到达最高张力点。角色做出了某个动作/说了某句话/看向某个方向/伸出了手——但叙事在动作完成之前/之后的一瞬间停止。这个停止必须是「在顶点」而不是「在过程中」——观众必须感到叙事已经走到了它能走到的最远处。M5=切断——画面切黑/声音消失/字幕出现。切断必须是干净利落的——不是渐隐，不是淡出，而是突然的终止。切断的时机必须精确到帧——早一秒太突兀，晚一秒就给出了答案。M6（不存在）=结构性缺席——M6在这个结构中被刻意省略。没有代价的兑现，因为叙事拒绝走到兑现的位置。这个缺席本身就是结构的核心论点：有些代价/答案/结局不是叙事有权给出的。M7=观众的结局——每个观众在离开之后（或在黑暗中坐着的那几秒）在自己的头脑中完成叙事。M7不在银幕上——它在观众的想象/记忆/讨论中。开放结局的真正结局是「关于结局的对话」。
【信息规则】开放结局的信息策略是「精确的不完整」。叙事必须提供足够的信息让观众构建结局——但不提供足以确定唯一结局的信息。关键信息在最后时刻被分裂为两个（或更多）同样合理的解读方向。最后一个镜头/最后一句话必须是「双义的」——在两个对立的解读中都成立。信息的缺失不是偶然的（忘了交代），而是刻意的（拒绝交代）。
【M参数映射】M1=建立闭合期待（传统叙事作为诱饵）。M2=冲突推向决定性时刻。M3=最后的双义信息。M4=悬停时刻（最高张力点）。M5=切断（干净终止）。M6=结构性缺席（刻意省略）。M7=观众的头脑中完成（银幕外的结局）。
【结构比例】闭合期待建立(M1)≈20% / 冲突加剧(M2)≈25% / 最后信息+悬停(M3-M4)≈30% / 切断(M5)≈5% / 观众完成(M7)≈20%（这20%不在银幕上）
【禁忌】严禁在切断后加「后续字幕」解释结局——任何解释都摧毁开放结局的意义。严禁让开放结局成为「续集预告」——开放结局是完成的，不是未完的。严禁在叙事中暗示「正确答案」——如果观众能判断哪个解读是「导演想要的」，开放性就是虚假的。严禁在决定性时刻之前使用开放结局——叙事必须走到它的最远处才有权停下。严禁用开放结局掩盖叙事的无能——开放结局不是「不知道怎么结尾」，而是「知道不应该给出结尾」。`,

      coreEn: `[Scene Order] M1=establish a narrative with clear direction — audience trained to expect an ending (who wins/who dies/together or apart/what's the truth/choice A or B). The early narrative must be 'traditional' — it needs to build strong enough closure expectation, or the open ending is just 'unfinished.' M2=conflict escalation — narrative pushes toward decisive moment. All threads converge, all relationships tense, all options on the table. Audience expectation peaks — they're certain the next scene is the answer. M3=final piece of info — before suspension, one last piece of information. This piece must be 'sufficient but insufficient' — it lets audience construct at least two equally plausible endings, but cannot determine which is 'right.' This is the essential difference between open ending and 'unfinished': open ending provides enough material for each viewer to construct their own closure. M4=suspension moment — narrative reaches peak tension. Character makes an action/says a line/looks in a direction/reaches out a hand — but narrative stops the instant before/after the action completes. This stop must be 'at the apex,' not 'mid-process' — audience must feel the narrative has gone as far as it can go. M5=the cut — screen goes black/sound vanishes/credits appear. Cut must be clean and sharp — not fade, not dissolve, but sudden termination. Timing must be frame-precise — one second early is too abrupt, one second late gives the answer. M6(absent)=structural absence — M6 is deliberately omitted. No cost is paid because the narrative refuses to reach the position of payment. This absence is the structure's core argument: some costs/answers/endings are not the narrative's right to give. M7=audience's ending — each viewer, after leaving (or sitting in darkness for those few seconds), completes the narrative in their own mind. M7 is not on screen — it exists in audience imagination/memory/discussion. The true ending of an open ending is 'the conversation about the ending.'
[Info Rule] Open ending's info strategy is 'precise incompleteness.' Narrative must provide enough info for audience to construct an ending — but not enough to determine a single ending. Key info splits at the last moment into two (or more) equally plausible interpretive directions. Last shot/last line must be 'ambiguous' — valid under two opposing readings. Info absence is not accidental (forgot to address) but deliberate (refused to address).
[M-Param Mapping] M1=establish closure expectation (traditional narrative as bait). M2=conflict pushed to decisive moment. M3=final ambiguous info. M4=suspension moment (peak tension). M5=the cut (clean termination). M6=structural absence (deliberate omission). M7=completed in audience's mind (off-screen ending).
[Proportions] Closure expectation(M1)≈20% / Conflict escalation(M2)≈25% / Final info+suspension(M3-M4)≈30% / The cut(M5)≈5% / Audience completion(M7)≈20%(this 20% is off-screen)
[Prohibitions] No post-cut text/title cards explaining the ending — any explanation destroys open ending's meaning. Open ending must not become 'sequel bait' — it is complete, not unfinished. No hinting at a 'correct answer' in the narrative — if audience can tell which reading the director intended, openness is false. No open ending before reaching the decisive moment — narrative must go as far as it can before earning the right to stop. Open ending must not mask narrative incompetence — it is not 'didn't know how to end' but 'knew it shouldn't give an ending.'`,

      skeletons: [
        'closure_expectation_闭合期待',
        'final_convergence_最终汇聚',
        'suspension_point_悬停时刻',
        'the_cut_切断',
      ],

      reference: '《盗梦空间》(Inception)；《迷失东京》(Lost in Translation)；《春光乍泄》(Happy Together)；《索菲亚的选择》(Sophie\'s Choice)',
      referenceEn: "Inception; Lost in Translation; Happy Together; Sophie's Choice",
    },

    {
      id: 'MEET_CUTE',
      name: '浪漫邂逅',
      nameEn: 'Meet Cute',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '两个人如何相遇——巧合、尴尬、冲突、错位中迸发的火花。相遇的方式预言了关系的命运。不是「两人认识了」，而是「两人以这种方式认识了」——方式本身就是故事。',
      defEn: "How two people meet — sparks ignited by coincidence, awkwardness, conflict, or misalignment. The manner of meeting prophesies the relationship's fate. Not 'they met' but 'they met THIS way' — the way itself is the story.",

      core: `【场景排列】M1=两个独立轨道——在相遇之前，分别建立两个角色各自的世界/状态/方向。他们此刻不知道彼此的存在。两条轨道必须有某种结构性的对称或对立（一个在赶路一个在等待/一个在上楼一个在下楼/一个在说话一个在沉默/一个在哭一个在笑）。M1的功能是让观众同时看到两条轨道正在向同一个交叉点汇聚——观众知道他们会相遇，但角色不知道。M2=碰撞——两条轨道在一个具体的物理瞬间交叉。碰撞必须是物理性的——撞到/泼到/绊到/挡到/同时伸手拿同一个东西/同时说出同一句话。碰撞产生一个「微型危机」：咖啡洒了/东西掉了/计划被打乱/尴尬发生。这个微型危机迫使两个陌生人必须互动。M3=第一次互动——碰撞后的即时反应决定了关系的基调。三种可能的化学反应：a)敌意·火花型——互相指责/争吵/不满，但在敌意中有一个被两人都忽略的吸引信号（多看了一眼/嘴角微动/声音变软）。b)尴尬·温暖型——慌乱/道歉/试图补救，在笨拙中展现真实的人格（他帮她捡东西时说了一句意外真诚的话/她在混乱中笑了出来）。c)错位·好奇型——两人的反应完全不在同一频道（一个在道歉一个在发呆/一个在着急一个在观察），但正是这种错位产生了好奇。M4=延长接触——微型危机创造了一个被迫共处的短暂时间窗口（等待清理/一起找丢失的东西/同路一段/被困在同一个空间）。在这个窗口中，两人从「处理事故」过渡到「认识彼此」。一个关键细节在这个阶段被交换——不是名字或身份，而是一个意外的个人信息（一个习惯/一个偏好/一个弱点/一个秘密），这个信息成为后续关系的种子。M5=分离信号——时间窗口即将关闭（咖啡擦干净了/电梯到了/雨停了/朋友打来电话）。两人面临一个微型选择：让这次相遇成为一次性的偶然，还是创造重逢的可能？这个选择不需要被明确做出——可能只是一个犹豫/一个回头/一个没说出口的话。M6=分离时刻的代价——选择的瞬间。要号码/不要号码。说「再见」/说「也许会再见」。走开/留下。这个微型代价不是戏剧性的——但它在两人之间创造了一个微小的、脆弱的「可能性空间」。M7=余味——分离之后的独处时刻。角色回到自己的轨道，但轨道已经被轻微偏移了。一个微笑/一个回头/一个把对方的名字存进手机/一个突然想起刚才说的话而笑出来的瞬间。M7不是结局——它是一个开始的形状。
【信息规则】观众拥有上帝视角——同时看到两条轨道汇聚，而角色只看到自己的轨道。碰撞之后，两人之间存在信息不对称——每人都注意到了对方没注意到的细节（她看到他的手在抖/他注意到她鞋带是松的）。这些不对称的观察是关系种子——它们让每人拥有了关于对方的一个独特的、对方自己不知道的信息。
【M参数映射】M1=两条独立轨道（对称/对立建立）。M2=物理碰撞（微型危机）。M3=第一次化学反应（敌意/尴尬/错位）。M4=被迫共处的窗口（关键细节交换）。M5=分离信号（微型选择）。M6=分离的微型代价（可能性空间）。M7=余味（被偏移的轨道）。
【结构比例】双轨道(M1)≈15% / 碰撞+反应(M2-M3)≈25% / 延长接触(M4)≈30% / 分离+代价+余味(M5-M7)≈30%
【禁忌】碰撞严禁是纯偶然——巧合可以制造相遇，但相遇中的化学反应必须来自角色的人格特质，不是命运的安排。严禁在邂逅中给出「灵魂伴侣」信号——邂逅的魅力在于不确定性，不是确定性。严禁让两人在第一次相遇中就完全了解对方——邂逅只是打开一扇门，不是走完整条路。严禁让邂逅完全顺利——没有摩擦的相遇没有记忆点。`,

      coreEn: `[Scene Order] M1=two independent tracks — before meeting, establish each character's world/state/direction separately. Neither knows the other exists. Two tracks must have structural symmetry or opposition (one rushing, one waiting/one going up, one going down/one talking, one silent/one crying, one laughing). M1's function: let audience see both tracks converging toward the same intersection — audience knows they'll meet, characters don't. M2=collision — two tracks intersect at a specific physical moment. Collision must be physical — bumping/spilling/tripping/blocking/reaching for the same thing/saying the same sentence simultaneously. Collision creates a 'micro-crisis': coffee spilled/things dropped/plans disrupted/awkwardness occurs. This micro-crisis forces two strangers to interact. M3=first interaction — immediate post-collision reaction sets the relationship's tone. Three possible chemistries: a) hostility·spark — mutual blame/argument/annoyance, but within hostility an attraction signal both ignore (a lingering look/lips twitching/voice softening). b) awkwardness·warmth — flustered/apologizing/trying to fix, clumsiness reveals authentic personality (he says something unexpectedly sincere while picking up her things/she laughs in the middle of chaos). c) misalignment·curiosity — two reactions on completely different wavelengths (one apologizing while other daydreaming/one panicking while other observing), but this misalignment generates curiosity. M4=extended contact — micro-crisis creates a forced-proximity time window (waiting for cleanup/searching together for lost item/walking same direction/trapped in same space). Within this window, two shift from 'handling the incident' to 'getting to know each other.' One key detail exchanged — not name or identity, but an accidental personal fact (a habit/a preference/a weakness/a secret) that becomes the seed for future relationship. M5=separation signal — time window closing (coffee wiped clean/elevator arrived/rain stopped/friend calling). Two face a micro-choice: let this meeting be a one-time coincidence, or create possibility for reunion? This choice needn't be explicitly made — perhaps just a hesitation/a look back/an unsaid word. M6=separation moment's cost — the instant of choice. Ask for number/don't. Say 'goodbye'/say 'maybe see you again.' Walk away/stay. This micro-cost isn't dramatic — but it creates a small, fragile 'possibility space' between them. M7=aftertaste — solitary moment after separation. Character returns to their track, but the track has been slightly deflected. A smile/a glance back/saving their name in the phone/suddenly laughing remembering something they said. M7 is not an ending — it is the shape of a beginning.
[Info Rule] Audience has god's-eye view — seeing both tracks converge while characters see only their own. Post-collision, info asymmetry exists between the two — each notices a detail the other didn't (she saw his hand trembling/he noticed her shoelace untied). These asymmetric observations are relationship seeds — they give each person a unique piece of information about the other that the other doesn't know about themselves.
[M-Param Mapping] M1=two independent tracks (symmetry/opposition). M2=physical collision (micro-crisis). M3=first chemistry (hostility/awkwardness/misalignment). M4=forced-proximity window (key detail exchange). M5=separation signal (micro-choice). M6=separation's micro-cost (possibility space). M7=aftertaste (deflected track).
[Proportions] Dual tracks(M1)≈15% / Collision+reaction(M2-M3)≈25% / Extended contact(M4)≈30% / Separation+cost+aftertaste(M5-M7)≈30%
[Prohibitions] Collision must not be pure coincidence — chance can create the meeting, but chemistry must come from character personality, not fate. No 'soulmate' signals in the meet — charm lies in uncertainty, not certainty. Two must not fully understand each other in first meeting — the meet-cute only opens a door, doesn't walk the whole path. Meeting must not go completely smoothly — frictionless encounters leave no memory trace.`,

      skeletons: [
        'dual_tracks_双轨道',
        'collision_moment_碰撞时刻',
        'forced_proximity_被迫共处',
        'aftertaste_余味',
      ],

      reference: '《诺丁山》(Notting Hill)；《爱在黎明破晓前》(Before Sunrise)；《当哈利遇到莎莉》(When Harry Met Sally)；《怦然心动》(Flipped)',
      referenceEn: 'Notting Hill; Before Sunrise; When Harry Met Sally; Flipped',
    },

    {
      id: 'ROAD_MICRO',
      name: '公路微缩',
      nameEn: 'Road Micro / Journey Compression',
      group: 'H. 微型事件结构',
      groupEn: 'Micro-Event Structures',

      def: '从A点到B点，路途即成长。空间的位移等于内心的位移——出发时的人和到达时的人不是同一个人。旅程的终点不重要，重要的是路上发生了什么改变了旅行者。',
      defEn: "From point A to point B, the journey IS the growth. Spatial displacement equals inner displacement — the person who departs and the person who arrives are not the same. The destination doesn't matter; what matters is what changed the traveler on the road.",

      core: `【场景排列】M1=出发——角色从一个具体的地点出发，带着一个明确的目的（去见某人/去某个地方/逃离某个地方/送某个东西/回家）。出发的空间必须被精确建立——它是「旅程之前的状态」的物质锚点。角色出发时的状态是可测量的（表情/姿态/携带的物品/说话的方式）——这些参数在终点时必须发生偏移。交通工具/移动方式是重要的叙事材料（步行/驾车/火车/搭便车/骑马/漂流），因为它决定了旅途的节奏和角色与空间的关系。M2=第一段路——旅途开始。角色仍然带着出发时的状态在移动——心不在路上，而在目的地或出发点。风景被忽略或被当作背景。这个阶段的功能是建立「旅途的日常」——移动的节奏/空间的流过/时间的消耗。M3=路上的遭遇——旅途中发生了计划外的事。遭遇可以是：a)人的遭遇（同行者/搭便车者/路边的陌生人/加油站的老板/小旅馆的房客）。b)事件遭遇（车坏了/路断了/暴风雨/迷路/被迫绕行）。c)空间遭遇（一个从未见过的景观/一个意外的地方/一个不该在这里的东西）。遭遇的核心功能是打断角色的「目的驱动」——迫使他们停下来、看看周围、进入一个非计划的时空。M4=滞留——遭遇导致的非自愿停留。角色被困在一个不是出发点也不是目的地的「中间地带」。在滞留中，角色被迫面对没有目的地可以逃避的自己。对话在这个阶段变得真实——因为没有地方可去，没有事情可做，只能面对彼此或面对自己。M4是整个结构的核心——「路上」不是从A到B的过渡，而是一个独立的存在状态。M5=启程决定——角色决定继续上路。但这个决定已经不同了——继续走是一个主动选择，不再是惯性。角色可能改变了目的地/改变了路线/改变了到达后要做的事/或者只是改变了自己与目的地的关系。出发是被动的，但继续是主动的。M6=最后一段路——接近目的地。风景不再被忽略——角色开始看到路上的东西（之前一直在那里但没有被看到）。速度可能变慢——接近终点时反而不急了。因为终点已经不是最重要的了。M7=到达（或不到达）——角色到达目的地（或放弃了目的地/到达了一个不同的地方/发现目的地已经不存在了）。无论哪种，角色的到达状态与出发状态之间的偏移是可测量的。落点不是目的地本身——而是到达时角色的表情/姿态/第一个动作，与M1出发时的对照。
【信息规则】空间信息是叙事的主材料——地形/天气/光线/路况/距离/方向，这些物理信息同时承载角色的内在状态。出发时角色拥有关于目的地的某种期待/信息——这个信息在路上被修正/推翻/深化。路上遭遇的人往往携带角色需要但不知道自己需要的信息（一句话/一个故事/一个问题）。
【M参数映射】M1=出发（状态锚点+目的建立）。M2=第一段路（目的驱动的移动）。M3=路上的遭遇（计划打断）。M4=滞留（中间地带的存在）。M5=启程决定（主动选择继续）。M6=最后一段路（看见风景）。M7=到达/偏移落点。
【结构比例】出发+第一段路(M1-M2)≈15% / 遭遇(M3)≈20% / 滞留(M4)≈25% / 启程+最后一段路(M5-M6)≈25% / 到达(M7)≈15%
【禁忌】严禁让目的地成为故事的核心——如果到达后发生的事比路上重要，结构就退化为「交通段落」。严禁让路途只是「背景」——空间的变化必须是叙事的主动材料。严禁让角色在出发时就知道自己会改变——改变是路上被迫发生的，不是计划内的。严禁跳过滞留阶段——没有滞留的公路叙事只是位移，不是旅程。严禁让到达等于成功——公路结构的要点不是「到达」而是「路上变成了谁」。`,

      coreEn: `[Scene Order] M1=departure — character leaves from a specific place with a clear purpose (to see someone/go somewhere/flee somewhere/deliver something/go home). Departure space must be precisely established — it is the material anchor of 'pre-journey state.' Character's departure state is measurable (expression/posture/carried items/speech manner) — these parameters must shift at the destination. Vehicle/mode of travel is important narrative material (walking/driving/train/hitchhiking/horseback/drifting), as it determines journey rhythm and character-space relationship. M2=first stretch — journey begins. Character still moves with departure-state mindset — mind not on the road but on destination or origin. Scenery ignored or treated as background. Function: establish 'journey's routine' — movement rhythm/space flowing past/time consumed. M3=encounter on the road — something unplanned happens. Can be: a) human encounter (fellow traveler/hitchhiker/roadside stranger/gas station owner/motel guest). b) event encounter (breakdown/road blocked/storm/lost/forced detour). c) spatial encounter (never-before-seen landscape/unexpected place/something that shouldn't be here). Core function: interrupt character's 'purpose-driven' mode — force them to stop, look around, enter unplanned spacetime. M4=stranding — involuntary stay caused by encounter. Character stuck in a 'between-place' that is neither origin nor destination. In stranding, character forced to face themselves without a destination to escape into. Dialogue becomes real — nowhere to go, nothing to do, only facing each other or oneself. M4 is the structure's core — 'on the road' is not a transition from A to B but an independent state of being. M5=departure decision — character decides to continue. But this decision is different — continuing is now an active choice, no longer inertia. Character may have changed the destination/route/what they'll do upon arrival/or simply changed their relationship to the destination. Departure was passive; continuing is active. M6=last stretch — approaching destination. Scenery no longer ignored — character begins seeing things on the road (always there but unseen before). Speed may slow — no rush as the end approaches. Because the destination is no longer what matters most. M7=arrival (or non-arrival) — character reaches destination (or abandons it/arrives somewhere different/finds destination no longer exists). Either way, the offset between arrival state and departure state is measurable. Landing is not the destination itself — but the character's expression/posture/first action upon arrival, contrasted with M1's departure.
[Info Rule] Spatial info is the primary narrative material — terrain/weather/light/road conditions/distance/direction, these physical facts simultaneously carry character's inner state. At departure, character holds expectation/info about destination — this info is corrected/overturned/deepened on the road. People encountered on the road often carry info the character needs but doesn't know they need (a sentence/a story/a question).
[M-Param Mapping] M1=departure (state anchor+purpose). M2=first stretch (purpose-driven movement). M3=road encounter (plan interrupted). M4=stranding (between-place existence). M5=departure decision (active choice to continue). M6=last stretch (seeing the scenery). M7=arrival/offset landing.
[Proportions] Departure+first stretch(M1-M2)≈15% / Encounter(M3)≈20% / Stranding(M4)≈25% / Decision+last stretch(M5-M6)≈25% / Arrival(M7)≈15%
[Prohibitions] Destination must not be the story's core — if what happens after arrival outweighs the road, structure degrades to 'travel segment.' Road must not be mere 'background' — spatial change must be active narrative material. Character must not know at departure that they'll change — change is forced by the road, not planned. Stranding phase must not be skipped — road narrative without stranding is displacement, not journey. Arrival must not equal success — the point is not 'arriving' but 'who you became on the road.'`,

      skeletons: [
        'departure_出发',
        'road_encounter_路上遭遇',
        'stranding_滞留',
        'arrival_offset_到达偏移',
      ],

      reference: '《逍遥骑士》(Easy Rider)；《雨人》(Rain Man)；《菊次郎的夏天》(Kikujiro)；《荒野生存》(Into the Wild)',
      referenceEn: 'Easy Rider; Rain Man; Kikujiro; Into the Wild',
    },
  ]
};
