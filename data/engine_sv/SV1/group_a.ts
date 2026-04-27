import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_A: LibraryCategoryDef = {
  id: 'cat_sv1_classic_arc',
  name: `经典弧光结构`,
  nameEn: 'Classic Arc Structures',
  items: [
    {
      id: 'HERO_JOURNEY',
      name: '英雄之旅',
      nameEn: "The Hero's Journey",
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '坎贝尔12步单神话。主体从日常世界被召唤、跨越门槛、经历试炼、直面深渊、携变化归来。',
      defEn: "Campbell's 12-step monomyth. Departure → Initiation → Return.",

      core: `【节点序列（12步压缩为7锚点）】
1. 日常世界(M1) → 2. 召唤/遭遇(M2) → 3. 跨越门槛(M3确立) → 4. 试炼+盟友+敌人(M4展开) → 5. 最深处考验(M5+M6) → 6. 奖赏与归路 → 7. 复活/归来(M7)
【信息规则】观众与主角同步——不知道前方有什么。悬念是「他能不能完成」。导师角色拥有比主角更多的信息但不完全透露。
【M参数映射】M1=日常世界必须具体化为一个可触摸的空间。M2=召唤必须打破M1的日常性。M3=跨越门槛是物理性的空间转移（不同的地面质地、温度、光线）。M4=试炼+敌人构成上升动作的主体。M5=最深处的行动抉择。M6=代价在最深处兑现。M7=归来但主体已变——落点与起点存在偏移。
【结构比例】建置(M1-M2)≈15% / 上升动作(M3-M4)≈50% / 高潮+归来(M5-M7)≈35%
【禁忌】导师不可全知——必须携带自身未解决的缺陷。严禁在跨越门槛前花费超过20%篇幅。归来不等于回到原样——M7的空间必须与M1形成视差。`,

      coreEn: `[Node Sequence (12 steps compressed to 7 anchors)]
1. Ordinary World(M1) → 2. Call/Encounter(M2) → 3. Threshold Crossing(M3) → 4. Trials+Allies+Enemies(M4) → 5. Innermost Ordeal(M5+M6) → 6. Reward & Return Path → 7. Resurrection/Return(M7)
[Info Rule] Audience syncs with protagonist — unknown ahead. Suspense: 'can they make it?' Mentor holds more info but withholds.
[M-Param Mapping] M1=tangible ordinary space. M2=call that shatters M1's routine. M3=physical spatial transition. M4=trials as rising action body. M5=deepest choice. M6=cost paid at the deepest point. M7=return with parallax shift from M1.
[Proportions] Setup(M1-M2)≈15% / Rising(M3-M4)≈50% / Climax+Return(M5-M7)≈35%
[Prohibitions] Mentor must carry unresolved flaws. No more than 20% before threshold crossing. Return ≠ restoration — M7 space must parallax-shift from M1.`,

      skeletons: [
        'call_to_adventure_召唤与跨越',
        'trials_and_allies_试炼与盟友',
        'innermost_ordeal_深渊考验',
        'return_with_change_携变化归来',
      ],

      reference: '《星球大战》(Star Wars)；《黑客帝国》(The Matrix)；《狮子王》(The Lion King)',
      referenceEn: 'Star Wars; The Matrix; The Lion King',
    },

    {
      id: 'SAVE_THE_CAT',
      name: '救猫咪节拍',
      nameEn: 'Save the Cat (15 Beats)',
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '斯奈德15节拍工业模板。精确到页码/分钟的结构骨架，每个节拍有明确功能定位。',
      defEn: "Snyder's 15-beat industrial template. Each beat has a precise function and timing target.",

      core: `【节点序列（15拍映射M参数）】
1. 开场画面(M1视觉锚) → 2. 主题呈现(M1潜台词) → 3. 铺垫(M1日常展开) → 4. 催化剂(M2遭遇) → 5. 争执(M2-M3间的犹豫) → 6. 进入第二幕(M3跨越) → 7. 副线(B-story,通常是爱情/友谊线) → 8. 游戏时间(M4展开的「承诺段」，展示前提的趣味) → 9. 中点(假胜利或假失败，赌注升级) → 10. 坏蛋逼近(M4压力加剧) → 11. 一无所有(M6代价初现) → 12. 灵魂暗夜(M6全额兑现) → 13. 进入第三幕(M5行动决断) → 14. 结局(M5-M7高潮) → 15. 终场画面(M7，必须与Beat1形成对比)
【信息规则】Beat2(主题呈现)中必须有一句台词或画面暗示全片主题，但主角此刻不理解其含义。中点(Beat9)制造信息反转——观众以为故事走向A，实际转向B。
【M参数映射】M1=Beat1-3（日常世界三拍展开）。M2=Beat4催化剂，必须是外部事件而非内心决定。M3=Beat6进入新世界。M4=Beat7-10四拍构成上升动作的主体。M6=Beat11-12两拍完成代价序列。M5=Beat13行动。M7=Beat14-15。
【结构比例】第一幕(Beat1-5)≈25% / 第二幕前半(Beat6-9)≈25% / 第二幕后半(Beat10-12)≈25% / 第三幕(Beat13-15)≈25%
【禁忌】催化剂(Beat4)严禁超过总篇幅12%处。中点不可省略——它是第二幕的脊柱。终场画面必须与开场画面形成可测量的视觉反差（色调、构图、或主体姿态）。`,

      coreEn: `[Node Sequence (15 beats mapped to M-params)]
1. Opening Image(M1) → 2. Theme Stated(M1 subtext) → 3. Setup(M1 unfold) → 4. Catalyst(M2) → 5. Debate(M2-M3 hesitation) → 6. Break into Two(M3) → 7. B-Story → 8. Fun & Games(M4 'promise of the premise') → 9. Midpoint(false victory/defeat, stakes rise) → 10. Bad Guys Close In(M4 pressure) → 11. All Is Lost(M6 initial cost) → 12. Dark Night of the Soul(M6 full payment) → 13. Break into Three(M5 decision) → 14. Finale(M5-M7 climax) → 15. Final Image(M7, must contrast Beat1)
[Info Rule] Beat2 must contain a line/image hinting at theme — protagonist doesn't understand it yet. Midpoint(Beat9) creates info reversal.
[M-Param Mapping] M1=Beats1-3. M2=Beat4(external event, not internal decision). M3=Beat6. M4=Beats7-10. M6=Beats11-12. M5=Beat13. M7=Beats14-15.
[Proportions] Act1(Beats1-5)≈25% / Act2a(Beats6-9)≈25% / Act2b(Beats10-12)≈25% / Act3(Beats13-15)≈25%
[Prohibitions] Catalyst must land before 12% mark. Midpoint cannot be skipped. Final Image must measurably contrast Opening Image (color, composition, or subject posture).`,

      skeletons: [
        'catalyst_催化剂',
        'break_into_two_进入第二幕',
        'midpoint_and_bad_guys_中点与逼近',
        'dark_night_灵魂暗夜',
        'finale_终局与终场画面',
      ],

      reference: '《疯狂动物城》(Zootopia)；漫威电影宇宙(MCU)；《律政俏佳人》(Legally Blonde)',
      referenceEn: 'Zootopia; MCU; Legally Blonde',
    },

    {
      id: 'STORY_CIRCLE',
      name: '哈蒙故事环',
      nameEn: "Harmon's Story Circle",
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '丹·哈蒙8步循环。英雄之旅的极简压缩版，强调「舒适区→陌生→代价→改变」的闭环。',
      defEn: "Dan Harmon's 8-step circle. Minimalist Hero's Journey: comfort → unfamiliar → cost → change → return changed.",

      core: `【节点序列（8步环映射M参数）】
1. 舒适区(M1) → 2. 欲望浮现(M1→M2过渡) → 3. 进入陌生境地(M3) → 4. 适应(M4) → 5. 得到想要的(M4→M5) → 6. 付出代价(M6) → 7. 返回(M7) → 8. 已经改变(M7落点偏移)
【信息规则】步骤2的欲望必须是主角自己意识到的(conscious want)。步骤6的代价必须与步骤2的欲望直接相关——得到想要的，但代价恰好击中其脆弱处。步骤8的改变必须是观众可以与步骤1比对的——相同空间、不同的人。
【M参数映射】M1=步骤1-2。M2=步骤2中的欲望即是遭遇。M3=步骤3跨入陌生。M4=步骤4-5上升动作与获得。M5=步骤5中隐含的行动选择。M6=步骤6代价。M7=步骤7-8归来+偏移。
【结构比例】上半环(步骤1-4,秩序→混乱)≈50% / 下半环(步骤5-8,混乱→新秩序)≈50%。环的顶部(步骤1)和底部(步骤5)是对称锚点。
【禁忌】步骤8严禁等于步骤1——如果回到完全相同的状态，环就塌陷为无效循环。步骤6的代价不可外部强加——必须是步骤5的选择的内在后果。`,

      coreEn: `[Node Sequence (8-step circle mapped to M-params)]
1. Comfort Zone(M1) → 2. Want emerges(M1→M2) → 3. Enter unfamiliar(M3) → 4. Adapt(M4) → 5. Get what wanted(M4→M5) → 6. Pay the price(M6) → 7. Return(M7) → 8. Changed(M7 with offset)
[Info Rule] Step2 want must be conscious. Step6 cost must directly relate to Step2 want. Step8 change must be measurable against Step1 — same space, different person.
[M-Param Mapping] M1=Steps1-2. M2=want as encounter. M3=Step3. M4=Steps4-5. M5=implicit in Step5. M6=Step6. M7=Steps7-8.
[Proportions] Upper half(Steps1-4, order→chaos)≈50% / Lower half(Steps5-8, chaos→new order)≈50%. Top(Step1) and bottom(Step5) are symmetric anchors.
[Prohibitions] Step8 ≠ Step1 — identical return collapses the circle into null loop. Step6 cost must be intrinsic consequence of Step5 choice, not externally imposed.`,

      skeletons: [
        'comfort_zone_舒适区与欲望',
        'unfamiliar_world_陌生境地',
        'getting_what_wanted_得到与代价',
        'return_changed_归来已变',
      ],

      reference: '《瑞克和莫蒂》(Rick and Morty)；《社区》(Community)；《废柴联盟》',
      referenceEn: 'Rick and Morty; Community',
    },

    {
      id: 'THREE_ACT',
      name: '经典三幕剧',
      nameEn: 'Three-Act Paradigm',
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '菲尔德范式。建置→对抗→结局，由两个情节点(Plot Point)驱动幕间转换。所有弧光结构的元模型。',
      defEn: "Syd Field's paradigm. Setup → Confrontation → Resolution, driven by two Plot Points. The meta-model of all arc structures.",

      core: `【节点序列（3幕+2情节点）】
第一幕·建置(M1-M2)：建立日常世界(M1)、引入遭遇(M2)。情节点1(PP1)=M2的遭遇迫使主角做出不可逆的选择，进入第二幕。
第二幕·对抗(M3-M4-M5-M6)：M3确立目标。M4构成障碍序列，每个障碍比上一个更难。中点(Midpoint)在第二幕正中将赌注翻倍。M5在中后段构成关键行动。M6在PP2前兑现代价。情节点2(PP2)=主角被逼到绝境。
第三幕·结局(M5→M7)：PP2之后的最终对决与结局落点。
【信息规则】PP1必须改变问题本身——不是「困难升级」而是「游戏规则改变」。中点(Midpoint)制造观众与角色之间的信息不对称。PP2剥夺主角此前依赖的所有资源。
【M参数映射】M1=第一幕前半。M2=PP1及其触发。M3=第二幕开场确立。M4=第二幕上升序列的主体。M5=PP2之后的决断行动。M6=第二幕末段代价兑现。M7=第三幕结局。
【结构比例】第一幕≈25% / 第二幕≈50% / 第三幕≈25%。PP1落在≈25%处，中点落在≈50%处，PP2落在≈75%处。
【禁忌】第二幕严禁「匀速推进」——必须有中点作为结构支点将第二幕劈成两半。PP1不是「更大的困难」，而是问题性质的改变。第三幕严禁超过总篇幅30%。`,

      coreEn: `[Node Sequence (3 acts + 2 plot points)]
Act1·Setup(M1-M2): Establish ordinary world(M1), introduce encounter(M2). PP1=M2 encounter forces irreversible choice into Act2.
Act2·Confrontation(M3-M4-M5-M6): M3 establishes goal. M4=escalating obstacle sequence. Midpoint doubles stakes. M5=key action mid-late Act2. M6=cost before PP2. PP2=protagonist cornered.
Act3·Resolution(M5→M7): Final confrontation and landing after PP2.
[Info Rule] PP1 must change the question itself — not 'harder difficulty' but 'different game.' Midpoint creates info asymmetry between audience and character. PP2 strips all resources.
[M-Param Mapping] M1=early Act1. M2=PP1 trigger. M3=Act2 opening. M4=Act2 rising body. M5=post-PP2 decision. M6=late Act2 cost. M7=Act3 resolution.
[Proportions] Act1≈25% / Act2≈50% / Act3≈25%. PP1 at ≈25%, Midpoint at ≈50%, PP2 at ≈75%.
[Prohibitions] Act2 must not be uniform — Midpoint is mandatory structural fulcrum. PP1 is a change of problem nature, not degree. Act3 must not exceed 30%.`,

      skeletons: [
        'inciting_incident_激励事件',
        'rising_action_上升动作',
        'climax_高潮',
        'resolution_余痕收束',
      ],

      reference: '《教父》(The Godfather)；《泰坦尼克号》(Titanic)；《唐人街》(Chinatown)',
      referenceEn: 'The Godfather; Titanic; Chinatown',
    },

    {
      id: 'SEQUENCE_8',
      name: '八序列法',
      nameEn: 'The Sequence Approach',
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '将长片切分为8个10-15分钟的独立序列(Reel)。每个序列拥有独立的悬念-张力-高潮闭环。三幕剧的颗粒化执行方案。',
      defEn: '8 independent sequences of 10-15min each. Every sequence has its own hook-tension-climax. Granular execution of Three-Act.',

      core: `【节点序列（8序列映射M参数）】
Seq1·铺垫(M1): 建立世界规则和主角日常。序列悬念=「这个人的生活有什么裂缝？」
Seq2·遭遇(M2): 催化事件打破日常。序列高潮=主角被迫做出反应。
Seq3·进入新世界(M3): 跨越门槛，确立目标。序列悬念=「新世界的规则是什么？」
Seq4·第一次考验(M4前半): 第一个真正的障碍。序列高潮=中点(Midpoint)，赌注翻转。
Seq5·深入困境(M4后半): 中点后果展开，压力持续加码。序列悬念=「还能更糟吗？」
Seq6·代价兑现(M6): 主角失去最重要的东西。序列高潮=最低谷。
Seq7·最终行动(M5): 从废墟中决断。序列悬念=「用什么方式反击？」
Seq8·结局(M7): 终极对决与落点。序列高潮=全片高潮。
【信息规则】每个序列开头必须设置独立悬念(「这个序列要解决什么？」)。序列内部信息闭环——观众在序列结束时获得该序列承诺的答案，同时产生下一个序列的新问题。
【M参数映射】M1=Seq1。M2=Seq2。M3=Seq3。M4=Seq4-5(两个序列展开)。M6=Seq6。M5=Seq7。M7=Seq8。每个M参数获得一个完整序列的展开空间。
【结构比例】每个序列≈12.5%（严格等分）。第一幕=Seq1-2(25%)。第二幕=Seq3-6(50%)。第三幕=Seq7-8(25%)。
【禁忌】任何一个序列不可缺少独立的悬念-高潮弧——扁平序列会导致节奏塌陷。Seq4的中点不可模糊——它是全片的结构轴心。严禁在单个序列中塞入超过一个M参数的完整展开。`,

      coreEn: `[Node Sequence (8 sequences mapped to M-params)]
Seq1·Setup(M1): World rules + protagonist routine. Hook='what crack exists in this life?'
Seq2·Encounter(M2): Catalyst breaks routine. Climax=forced reaction.
Seq3·New World(M3): Threshold + goal. Hook='what are the new rules?'
Seq4·First Test(M4a): First real obstacle. Climax=Midpoint, stakes flip.
Seq5·Deepening(M4b): Midpoint consequences, escalating pressure.
Seq6·Cost(M6): Protagonist loses what matters most. Climax=lowest point.
Seq7·Final Action(M5): Decision from ruins. Hook='how to fight back?'
Seq8·Resolution(M7): Ultimate confrontation + landing.
[Info Rule] Each sequence opens with independent hook. Info closes within sequence — audience gets the answer promised, plus a new question for next sequence.
[M-Param Mapping] M1=Seq1. M2=Seq2. M3=Seq3. M4=Seq4-5. M6=Seq6. M5=Seq7. M7=Seq8.
[Proportions] Each sequence≈12.5% (strict equal division). Act1=Seq1-2. Act2=Seq3-6. Act3=Seq7-8.
[Prohibitions] Every sequence must have its own hook-climax arc. Seq4 Midpoint must be unambiguous. No sequence may contain more than one full M-param deployment.`,

      skeletons: [
        'setup_sequence_铺垫序列',
        'first_test_and_midpoint_首考与中点',
        'deepening_and_cost_深入与代价',
        'final_action_and_resolution_终局序列',
      ],

      reference: '《夺宝奇兵》(Raiders of the Lost Ark)；希区柯克电影(Hitchcock)；《虎豹小霸王》(Butch Cassidy)',
      referenceEn: 'Raiders of the Lost Ark; Hitchcock films; Butch Cassidy and the Sundance Kid',
    },

    {
      id: 'TRUBY_22',
      name: '特鲁比22步',
      nameEn: "Truby's 22 Steps",
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '以「道德前提」为核心的有机22步结构。从弱点/需求出发，经由假盟友、对手、启示，达成新平衡。比三幕剧更注重人物内部逻辑链。',
      defEn: "Organic 22-step structure centered on 'moral premise.' From weakness/need through false ally, opponent, revelation to new equilibrium. Character-logic-driven.",

      core: `【节点序列（22步压缩为7锚点+关键机制）】
1. 弱点+需求(M1): 主角有一个自己意识不到的致命弱点(need)和一个自己意识到的欲望(want)。Need≠Want。
2. 欲望浮现(M1→M2): want被具体化为一个可追逐的目标。
3. 对手登场(M2→M4): 对手不是「坏人」——对手是与主角追求同一目标但方法/价值观相反的人。对手迫使主角面对自己的弱点。
4. 假盟友/伪装(M4): 主角或对手伪装自己。信息欺骗层——观众可能也被骗。
5. 启示/揭面(M5→M6): 伪装被剥离，真实的弱点暴露。这是全片的道德论点(moral argument)的论证时刻。
6. 对决(M5+M6): 不仅是物理对决，更是两种价值观的碰撞。代价在碰撞中兑现。
7. 新平衡(M7): 主角的弱点被解决(或未被解决)。世界达成新的平衡态——不是「回到原样」而是「重新排列」。
【信息规则】Need(真实需求)在开场就埋设线索，但主角和观众都可能忽略。对手必须是主角弱点的镜像——对手做了主角不敢做的事。启示(Beat5)必须同时对主角和观众揭示被隐藏的信息。
【M参数映射】M1=弱点+需求（need/want分裂是M1的核心驱动力）。M2=want的具象化。M3=通过对手确立冲突轴线。M4=假盟友+伪装构成的上升障碍。M5=揭面+对决。M6=对决中的代价（need/want只能择一）。M7=新平衡。
【结构比例】弱点建置(M1-M2)≈20% / 对手+伪装+上升(M3-M4)≈40% / 启示+对决+新平衡(M5-M7)≈40%
【禁忌】对手不可是纯粹的恶——对手必须有自己的合理逻辑。Need和Want严禁合一——如果主角一开始就知道自己真正需要什么，22步结构失效。启示不可来自外部巧合——必须从对手关系中有机生长。`,

      coreEn: `[Node Sequence (22 steps compressed to 7 anchors + key mechanisms)]
1. Weakness+Need(M1): Protagonist has unconscious fatal weakness(need) and conscious desire(want). Need≠Want.
2. Desire surfaces(M1→M2): Want becomes a pursuable goal.
3. Opponent enters(M2→M4): Opponent pursues same goal with opposing values — forces protagonist to face weakness.
4. False ally/disguise(M4): Protagonist or opponent masks true self. Info deception layer.
5. Revelation/unmasking(M5→M6): Disguise stripped, true weakness exposed. Moral argument moment.
6. Battle(M5+M6): Value collision, not just physical. Cost paid in collision.
7. New equilibrium(M7): Weakness resolved (or not). World rearranged, not restored.
[Info Rule] Need is seeded at opening but overlooked. Opponent mirrors protagonist's weakness. Revelation(Beat5) must disclose hidden info to both protagonist AND audience simultaneously.
[M-Param Mapping] M1=weakness+need(need/want split is core drive). M2=want objectified. M3=conflict axis via opponent. M4=false ally+disguise as rising obstacles. M5=unmasking+battle. M6=cost(must choose need OR want). M7=new equilibrium.
[Proportions] Weakness setup(M1-M2)≈20% / Opponent+disguise+rising(M3-M4)≈40% / Revelation+battle+equilibrium(M5-M7)≈40%
[Prohibitions] Opponent must not be pure evil — must have coherent logic. Need and Want must never merge — if protagonist knows true need from start, the 22-step structure collapses. Revelation must grow organically from opponent relationship, not from coincidence.`,

      skeletons: [
        'weakness_and_need_弱点与需求',
        'opponent_and_disguise_对手与伪装',
        'revelation_and_battle_启示与对决',
        'new_equilibrium_新平衡',
      ],

      reference: '《教父》(The Godfather)；《卡萨布兰卡》(Casablanca)；《美丽心灵》(A Beautiful Mind)',
      referenceEn: 'The Godfather; Casablanca; A Beautiful Mind',
    },

    {
      id: 'VIRGIN_PROMISE',
      name: '处女承诺',
      nameEn: "The Virgin's Promise",
      group: 'A. 经典弧光结构',
      groupEn: 'Classic Arc Structures',

      def: '与英雄之旅互补的内省弧光。主体不是外出征战，而是在束缚性环境中觉醒自我。从依赖的世界→秘密绽放→被发现→混乱→最终抉择。',
      defEn: "Complement to Hero's Journey — inward arc. Not outward quest but self-awakening within a constraining world. Dependent world → secret bloom → exposure → chaos → final choice.",

      core: `【节点序列（13步压缩为7锚点）】
1. 依赖的世界(M1): 主角生活在一个为其定义好身份的世界（家庭/社会/体制）。M1是这个世界的规则和主角在其中的「被指定角色」。
2. 代价浮现(M1→M2): 主角感到不适——被指定角色与内在自我之间产生裂缝。M2=这个裂缝首次显现的具体时刻。
3. 秘密世界(M3): 主角开始在秘密中实践真实自我——偷偷跳舞/写作/恋爱。M3=两个世界的双重生活开始。
4. 闪耀(M4): 秘密世界中的成就让主角体验到从未有过的存在感。M4=这种闪耀的具体呈现。
5. 被发现/坠落(M5→M6): 秘密暴露。依赖的世界要求主角回到被指定角色。M6=必须在两个世界之间做出不可逆的选择。
6. 混乱/流浪(M6): 两个世界都不再容纳主角。旧身份已碎，新身份未成。
7. 最终抉择/重生(M7): 主角以完整的自我重新面对世界——不是逃离依赖的世界，而是在其中以新身份站立。
【信息规则】观众从一开始就能看到主角的被指定角色是压迫性的——但主角最初不觉得。秘密世界对观众可见，对依赖世界中的其他角色不可见。被发现的时刻（Beat5）制造信息爆炸——依赖世界的角色突然获得了秘密信息。
【M参数映射】M1=依赖的世界及其规则。M2=裂缝/不适的具体时刻。M3=秘密世界的建立。M4=闪耀（秘密世界中的上升动作）。M5=被发现后的行动抉择。M6=两个世界之间的代价——选择一个必然失去另一个。M7=以新身份在原世界中重新站立。
【结构比例】依赖世界建置(M1-M2)≈20% / 秘密世界+闪耀(M3-M4)≈35% / 暴露+混乱+重生(M5-M7)≈45%
【禁忌】严禁把依赖世界写成纯粹的「恶」——它必须提供真实的安全感和归属感，否则离开它就没有代价。主角不可在Beat3之前就完全觉醒——觉醒是渐进的。M7不可是「逃离」——必须是在原有关系中重新定位，否则结构退化为英雄之旅。`,

      coreEn: `[Node Sequence (13 steps compressed to 7 anchors)]
1. Dependent World(M1): Protagonist lives in a world that defines their identity. M1=world's rules + assigned role.
2. Cost surfaces(M1→M2): Discomfort — gap between assigned role and inner self. M2=first visible crack.
3. Secret World(M3): Protagonist practices true self in secret. M3=double life begins.
4. Shining(M4): Achievement in secret world yields unprecedented aliveness. M4=concrete manifestation.
5. Exposure/Fall(M5→M6): Secret revealed. Dependent world demands return to assigned role. M6=irreversible choice between worlds.
6. Chaos/Wandering(M6): Neither world accommodates. Old identity shattered, new one unformed.
7. Final Choice/Rebirth(M7): Protagonist stands in original world with new identity — not escape but re-positioning.
[Info Rule] Audience sees oppressive assigned role from start — protagonist doesn't. Secret world visible to audience, invisible to dependent world characters. Exposure(Beat5) creates info explosion.
[M-Param Mapping] M1=dependent world+rules. M2=crack moment. M3=secret world. M4=shining(rising action in secret). M5=post-exposure decision. M6=cost of choosing one world over the other. M7=new identity within original world.
[Proportions] Dependent world(M1-M2)≈20% / Secret world+shining(M3-M4)≈35% / Exposure+chaos+rebirth(M5-M7)≈45%
[Prohibitions] Dependent world must not be pure evil — it must offer real security/belonging, or leaving carries no cost. No full awakening before Beat3. M7 must not be escape — must be repositioning within existing relationships, else it degrades to Hero's Journey.`,

      skeletons: [
        'dependent_world_依赖的世界',
        'secret_world_and_shining_秘密世界与闪耀',
        'exposure_and_chaos_暴露与混乱',
        'rebirth_以新身份站立',
      ],

      reference: '《冰雪奇缘》(Frozen)；《黑天鹅》(Black Swan)；《芭比》(Barbie)；《小妇人》(Little Women)',
      referenceEn: 'Frozen; Black Swan; Barbie; Little Women',
    },
  ]
};
