import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_D: LibraryItemDef[] = [
    {
        id: "meta_glitch",
        name: "现实闪烁/Bug", nameEn: "Reality Glitch",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "看到物体穿模，或者同一个路人走过三次。",
        defEn: "Seeing objects clipping or the same pedestrian three times.",
        core: "世界虚假性的暴露。矩阵的缝隙。 | 实在界: 模拟的失效。",
        coreEn: "Exposure of world falsity. Cracks in the Matrix. | The Real: Simulation failure.",
        logic: "【逻辑溢出故障器】：主体的 M0 OS 遭遇‘物理渲染溢出（SUR1 物理域）’。所有的‘确定性 M1’在逻辑上被强制改写为‘高频波动的概率云’。叙事情境进入一种‘非法读取’状态，日常背景开始剥落暴露出底层空白。Tuchē以'代码的裸露'破坏感官的连续性。",
        logicEn: "[Logic Overflow Glitcher]: Subject's M0 OS suffers 'physical rendering overflow (SUR1 Physical Domain)'. All 'deterministic M1' are logically forced into 'high-frequency probability clouds'. Narrative scenario enters 'illegal fetch', daily backgrounds peeling to expose raw voids. Tuchē destroys sensory continuity via 'naked code'.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1物理域 = 渲染溢出/底层暴露; M1确定性 = 强制改写为概率云; 叙事情境 = 非法读取]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Physical = Overflow/Raw_Exposed; M1_Determinism = Forced_to_Probability_Cloud; Scenario = Illegal_Fetch]",
            aesthetic: "聚焦：穿模的物体 + 闪烁的网格线。文本：连续性崩溃的、现实逐渐像素化解体的叙述。",
            aestheticEn: "Focus: Clipping_Objects + Flickering_Gridlines. Text: Continuity_Collapsed_Reality_Gradually_Pixelating_Narration.",
            runtime: "IF (主体试图依赖物理常识) THEN (强制：物理规则发生随机乱码反馈)。严禁M5动作获得稳定连续的空间支撑。",
            runtimeEn: "IF (Subject_Relies_on_Physical_Common_Sense) THEN (Force: Physical_Rules_Return_Random_Garbage_Feedback). FORBID_M5_Actions_Gaining_Stable_Spatial_Support."
        }
    },
    {
        id: "meta_deja_vu",
        name: "既视感重叠", nameEn: "Déjà Vu",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "强烈的预感，仿佛这一切发生过无数次。",
        defEn: "Strong premonition; as if this happened countless times.",
        core: "时间的闭环。命运的回响，逃不掉的剧本。 | 实在界: 时间的闭环。",
        coreEn: "Time loop. Echoes of fate; inescapable script. | The Real: Time loop.",
        logic: "【时间拓扑递归器】：主体的‘时序锚点（M3/SUR1）’发生恶性递归。主体系逻辑在 M5 决策节点处产生‘永久锁死’或‘前定轨道’。实在界表现为过往的强制复现，主体的自由意志被揭示为一种延迟的幻觉。Tuchē以'重播'的暴力宣判对未来的无能。",
        logicEn: "[Temporal Topology Recursor]: Subject's 'temporal anchors (M3/SUR1)' undergo malignant recursion. System logic produces 'permanent locks' or 'predetermined rails' at M5 decision nodes. The Real manifests as forced recurrence of the past; free will is revealed as delayed illusion. Tuchē declares impotence toward the future via the violence of 'replay'.",
        patch: {
            mechanics: "基础创伤协议 + [时序锚点 = 恶性递归; M5决策节点 = 永久锁死/前定循环; 自由意志 = 判定为幻觉]",
            mechanicsEn: "Base_TRAUMA + [Temporal_Anchor = Malignant_Recursion; M5_Decision_Node = Permanent_Lock/Predetermined; Free_Will = Judged_as_Illusion]",
            aesthetic: "聚焦：一模一样的飞鸟轨迹 + 说出同样台词的陌生人。文本：时间变成黏稠胶水的、无法打破循环的窒息叙述。",
            aestheticEn: "Focus: Identical_Bird_Trajectories + Strangers_Speaking_Exact_Same_Lines. Text: Time_Becoming_Viscous_Glue_Unbreakable_Loop_Suffocating_Narration.",
            runtime: "IF (主体试图做出相反选择以打破闭环) THEN (强制：相反选择导致与上一个循环完全相同的结果)。严禁时间矢量的无损向前。",
            runtimeEn: "IF (Subject_Attempts_Opposite_Choice_to_Break_Loop) THEN (Force: Choice_Leads_to_Exact_Same_Result). FORBID_Lossless_Forward_Time_Vector."
        }
    },
    {
        id: "meta_prophecy",
        name: "绝对预言", nameEn: "Prophecy",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "读到一本写着自己未来的书，且字字成真。",
        defEn: "Reading a book of one's future, every word coming true.",
        core: "自由意志的终结。作为木偶的觉悟。 | 实在界: 决定论的降临。",
        coreEn: "End of free will. Realization as a puppet. | The Real: Descent of determinism.",
        logic: "【决定论覆写器】：主体的 M1（动机权重）被系统强制归零。主权被‘符号大他者（M4 剧本）’彻底接管。文本输出一种‘令人窒息的必然性’，主体的任何反抗性 M5 动作，在逻辑底层都被编译为对预言的完美履约。Tuchē以'剧透'的形式彻底抹除了活着的未知感。",
        logicEn: "[Determinism Overwriter]: Subject's M1 (motive weight) is force-zeroed. Sovereignty is entirely hijacked by 'Symbolic Big Other (M4 Script)'. Text outputs 'suffocating inevitability'; any rebellious M5 action is fundamentally compiled as perfect execution of the prophecy. Tuchē entirely erases the unknownness of living via 'spoilers'.",
        patch: {
            mechanics: "基础创伤协议 + [M1动机权重 = 强制归零; M4剧本 = 绝对主权接管; M5反抗 = 编译为预言履约]",
            mechanicsEn: "Base_TRAUMA + [M1_Motive_Weight = Force_Zeroed; M4_Script = Absolute_Sovereignty_Hijack; M5_Rebellion = Compiled_as_Prophecy_Fulfillment]",
            aesthetic: "聚焦：提前印好主角结局的旧书 + 提线木偶的隐喻。文本：每一步都在走向陷阱却无法停步的定局叙述。",
            aestheticEn: "Focus: Old_Book_with_Ending_Preprinted + Marionette_Metaphors. Text: Every_Step_Towards_Trap_Unable_to_Halt_Narration.",
            runtime: "IF (主体试图偏离预定路线) THEN (强制：一切偏离都会构成预言实现的必要条件)。严禁M5动作跳出M4的先验剧本。",
            runtimeEn: "IF (Subject_Attempts_Deviation_From_Preset_Route) THEN (Force: All_Deviations_Become_Necessary_Conditions_for_Prophecy). FORBID_M5_Actions_Escaping_M4_A_Priori_Script."
        }
    },
    {
        id: "meta_prop",
        name: "剧本道具", nameEn: "The Prop",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "发现重要的亲人其实是仿真机器人，或只是个投影。",
        defEn: "Discovery of a loved one as an android or just a projection.",
        core: "关系意义的坍塌。人际契约的虚假性。 | 实在界: 实在者的缺席。",
        coreEn: "Collapse of relational meaning. Falsity of interpersonal contracts. | The Real: Absence of the Real.",
        logic: "【客体空心化装置】：主体的‘核心情感能指（M3）’与其物理载体发生断崖式解离。该对象从主体的‘生命力（Libido）引力场’中被强行剥离并标记为'仿真道具/假人'。逻辑上引发主体 M0 的深层冷漠化及认知的荒诞感。Tuchē剥去温情的滤镜，暴露出他者作为机器的冰冷内核。",
        logicEn: "[Object Hollowing Device]: Subject's 'core emotional signifier (M3)' suffers cliff-like dissociation from its physical carrier. The object is forcibly stripped from the subject's 'Libido gravity field' and marked as 'simulation prop/dummy'. Logically triggers deep M0 apathy and absurd cognition. Tuchē strips the warm filter, exposing the icy machine core of the Other.",
        patch: {
            mechanics: "基础创伤协议 + [M3核心情感 = 与物理载体解离; 情感对象 = 标记为仿真道具/空壳; Libido引力场 = 阻断]",
            mechanicsEn: "Base_TRAUMA + [M3_Core_Emotion = Dissociated_carrier; Emotion_Object = Marked_Simulation_Prop/Empty_Shell; Libido_Gravity_Field = Blocked]",
            aesthetic: "聚焦：亲属后颈的条形码 + 重复的机械式微笑。文本：亲密关系化为灰烬的、周围人皆为布景的极寒叙述。",
            aestheticEn: "Focus: Barcode_on_Kin_Neck + Repetitive_Mechanical_Smile. Text: Intimacy_Turned_Ashes_Surroundings_Are_Props_Absolute_Zero_Narration.",
            runtime: "IF (主体试图唤醒对方的情感真实性) THEN (强制：对方返回冰冷、出厂设置般的标准化回应)。严禁对象表现出超越'预设代码'的心智模型。",
            runtimeEn: "IF (Subject_Attempts_Awakening_Emotional_Reality_in_Other) THEN (Force: Other_Returns_Cold_Factory-Reset_Standardized_Response). FORBID_Object_Exhibiting_Mental_Models_Beyond_Preset_Code."
        }
    },
    {
        id: "meta_surveillance",
        name: "全能监控", nameEn: "Surveillance",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "意识到所有私密瞬间都被实时直播或由于某种逻辑而公开。",
        defEn: "Realizing private moments are live-streamed or publicized via some logic.",
        core: "隐私的蒸发。凝视的无处不在，自我的解体。 | 实在界: 绝对凝视。",
        coreEn: "Evaporation of privacy. Ubiquity of the Gaze; dissolution of self. | The Real: Absolute Gaze.",
        logic: "【绝对凝视绑定器】：主体的内部动作（M1）被强制与外部观察端（M4/楚门效应）双向直连。主体意识到所有 M5 探索都是对‘不可见观众’的服务，从而产生结构性的‘表演型虚伪’。Tuchē带来的是全天候的曝光，主体彻底丧失隐蔽庇护所，自我被无数视线切碎。",
        logicEn: "[Absolute Gaze Binder]: Subject's internal actions (M1) are forcibly bi-directionally linked to external observation terminals (M4/Truman Effect). Subject realizes all M5 exploration serves 'invisible audiences', generating structural 'performative hypocrisy'. Tuchē brings 24/7 exposure, subject utterly loses hidden shelters, self shredded by myriad strings of sight.",
        patch: {
            mechanics: "基础创伤协议 + [M1内部动作 = 强制直连M4观察端; M5探索 = 服务于观众快感; 隐私庇护所 = 绝对销毁]",
            mechanicsEn: "Base_TRAUMA + [M1_Internal_Action = Force_Bi-Link_to_M4_Observer; M5_Exploration = Serves_Audience_Jouissance; Private_Shelter = Absolutely_Destroyed]",
            aesthetic: "聚焦：反光的隐蔽摄像头镜头 + 天空中的无形视线。文本：每一寸肌肤都在被剥视的、时刻处于显微镜下的恐慌叙述。",
            aestheticEn: "Focus: Hidden_Lens_Reflection + Invisible_Stares_in_the_Sky. Text: Every_Inch_of_Skin_Peeled_by_Gaze_Under-Microscope_Panic_Narration.",
            runtime: "IF (主体试图在独处中回归真实的自我) THEN (强制：环境提示强烈暗示这种独处正在被更仔细地观赏)。严禁出现任何逃脱凝视的盲区。",
            runtimeEn: "IF (Subject_Attempts_Returning_to_True_Self_in_Solitude) THEN (Force: Environmental_Cues_Heavily_Hint_Solitude_is_Being_Watched_Closer). FORBID_Any_Blindspots_Escaping_the_Gaze."
        }
    },
    {
        id: "meta_noise",
        name: "意识噪音", nameEn: "Mind Noise",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "脑中突然响起高频噪音，或能听到他人的心声。",
        defEn: "High-frequency noise in head or hearing others' thoughts.",
        core: "边界的消失。自我的防线被外部信号击穿。 | 实在界: 信息的溢出。",
        coreEn: "Gaze of boundaries. Ego defenses pierced by external signals. | The Real: Information overflow.",
        logic: "【信息过载击穿器】：主体的‘接收带宽（M0）’被非自发的‘他者能指（M4 异源信号）’强行占满。叙事空间必须被大量的‘意群噪点’充斥，导致主体无法分辨‘内部规划（M1）’与‘外部噪音’。Tuchē以信息溢出的形式降临，自我防线被击穿，精神边界消失。",
        logicEn: "[Information Overload Piercer]: Subject's 'receiver bandwidth (M0)' is force-filled by involuntary 'Other's signifiers (M4 exogenous signals)'. Narrative space must overflow with 'semantic noise', making the subject unable to distinguish 'internal planning (M1)' from 'external noise'. Tuchē descends as information overflow, piercing ego defenses and erasing psychic boundaries.",
        patch: {
            mechanics: "基础创伤协议 + [M0接收带宽 = 强制占满; 异源信号 = 意群噪点充斥; M1内部规划 = 降级为随机失序]",
            mechanicsEn: "Base_TRAUMA + [M0_Bandwidth = Force_Filled; Exogenous_Signal = Overflow_of_Semantic_Noise; M1_Planning = Downgrade_to_Random_Disorder]",
            aesthetic: "聚焦：耳鸣般的高频杂音 + 头脑中挥之不去的他人低语。文本：精神疆域被强制塞满、主权被噪音淹没的叙述。",
            aestheticEn: "Focus: Tinnitus-like_High_Frequency_Noise + Lingering_Whispers_in_Head. Text: Psychic_Domain_Forcibly_Stuffed_Sovereignty_Drowned_by_Noise_Narration.",
            runtime: "IF (主体试图集中注意力进行内部思考) THEN (强制：思考逻辑被外部噪音即时打断并替换)。严禁主体获得静谧的精神避难所。",
            runtimeEn: "IF (Subject_Attempts_Focusing_on_Internal_Thought) THEN (Force: Thought_Logic_Instantly_Interrupted_and_Replaced_by_Noise). FORBID_Subject_Securing_Silent_Psychic_Shelter."
        }
    },
    {
        id: "meta_author",
        name: "作者干预", nameEn: "Author's Hand",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "突然天降神兵解决一切，或者情节强制跳转。",
        defEn: "Deus ex machina solving all or forced plot jump.",
        core: "结构的傲慢。作为虚构物的悲哀。 | 实在界: 外部权力的暴力。",
        coreEn: "Structural arrogance. Sadness as a fictional entity. | The Real: Violence of external power.",
        logic: "【元逻辑覆写器】：大他者（M4/M7 作者意志）直接介入底层。主体的所有 M1/M5 动能被逻辑层强制截断，由一种‘不可解释的外部动力’强行推动或逆转叙事路径。表现为一种极其‘生硬’且‘荒诞’的转折。Tuchē以最高权力的纯粹暴力形式降临，论证了主体作为虚构物的宿命。",
        logicEn: "[Meta-Logic Overwriter]: The Big Other (M4/M7 Authorial Will) directly intervenes at base level. All M1/M5 agency is logically amputated, replaced by an 'inexplicable external propulsion' that forces or reverses narrative paths. Manifests as extremely 'crude' and 'absurd' pivots. Tuchē acts as pure violence of highest authority, demonstrating subject's destiny as a fiction.",
        patch: {
            mechanics: "基础创伤协议 + [M1/M5动能 = 逻辑层强行截断; M4/M7意志 = 直接介入改写; 叙事转折 = 生硬且不讲理]",
            mechanicsEn: "Base_TRAUMA + [M1/M5_Agency = Logically_Amputated; M4/M7_Will = Direct_Intervention/Rewrite; Pivot = Crude_and_Unreasonable]",
            aesthetic: "聚焦：不符合常理的剧情跳跃 + Deus ex machina（机械降神）。文本：逻辑链条粗暴断裂、被看不见的手强行拨弄的叙述。",
            aestheticEn: "Focus: Illogical_Plot_Jumps + Deus_ex_Machina. Text: Logical_Chain_Brutally_Snapped_Forcibly_Toyed_by_Invisible_Hands_Narration.",
            runtime: "IF (主体试图探究事件的因果连续性) THEN (强制：因果链指向虚无或直接返回“无需理由”的元级警告)。严禁在此遭遇中维持古典叙事逻辑的自洽性。",
            runtimeEn: "IF (Subject_Attempts_Tracing_Causality) THEN (Force: Chain_Points_to_Void_or_Returns_No_Reason_Meta_Warning). FORBID_Maintaining_Classical_Narrative_Self-Consistency."
        }
    },
    {
        id: "meta_limit",
        name: "世界边界", nameEn: "The World's End",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "走到城市的尽头发现只是一道描绘天空的墙。",
        defEn: "Walking to the edge of town to find a wall painted as sky.",
        core: "自由的假象。被囚禁在有限模型中的绝望。 | 实在界: 可认识界的终点。",
        coreEn: "Illusion of freedom. Despair at being trapped in a finite model. | The Real: End of the knowable.",
        logic: "【空间拓扑封死器】：主体的‘探索逻辑（M1）’遭遇极端的硬碰撞（SUR1 物理封锁）。原有的无限地理空间（SUR1）被瞬间重写为‘极简监狱参数’。所有的 M5 长程逃逸规划被判定为‘拓扑学上的原地踏步’。Tuchē以碰壁的形式彰显世界作为有限碎片的本质。",
        logicEn: "[Spatial Topology Sealer]: Subject's 'exploration logic (M1)' suffers extreme hard collision (SUR1 Physical Blockade). Once infinite geographical space (SUR1) is instantly rewritten as 'minimalist prison parameters'. All M5 long-range escape plans are judged as 'topological trotting in place'. Tuchē highlights the finite fragment nature of the world via hitting walls.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1空间 = 重写为监狱参数; M1探索 = 硬碰撞拦截; M5长程规划 = 判定为循环绕路]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Space = Rewritten_as_Prison_Parameters; M1_Exploration = Hard_Collision; M5_Long_Range_Plan = Judged_as_Circular_Detour]",
            aesthetic: "聚焦：描绘着蓝天白云的水泥墙 + 走不出的环形走廊。文本：世界边缘折叠、自由被证明为模型的盒中困兽叙述。",
            aestheticEn: "Focus: Concrete_Wall_Painted_with_Sky + Unexitable_Looping_Corridors. Text: Edge_of_World_Folding_Freedom_Proven_Model_Trapped_Beast_Narration.",
            runtime: "IF (主体试图向远方逃离) THEN (强制：无论向何处逃离最终都会回到原点)。严禁空间提供真实的无限延伸感。",
            runtimeEn: "IF (Subject_Attempts_Fleeing_Far_Away) THEN (Force: All_Directions_Lead_Back_to_Origin). FORBID_Space_Providing_True_Sense_of_Infinite_Extension."
        }
    },
    {
        id: "meta_name",
        name: "真名揭晓", nameEn: "True Name",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "意识到自己的名字其实是一个复杂的代码或某种诅咒。",
        defEn: "Realizing one's name is complex code or a curse.",
        core: "本质的被定义。自我的标签化与控制。 | 实在界: 符号的宿命。",
        coreEn: "Essential definition. Labeling and control of self. | The Real: Symbolic destiny.",
        logic: "【主权能指剥夺器】：主体的核心‘自我能指（M0 的锚点）’被强制重解码为‘他者的控制代码’。主体重写 M1 的一切微观努力，都在这个‘终极真名（M4 强赋予）’的压制下显得徒劳。Tuchē以代码的绝对限制形式，将自我降维为大他者系统内的一个受控参数。",
        logicEn: "[Sovereign Signifier Depriver]: Subject's core 'self-signifier (M0 anchor)' is forcibly re-decoded as 'the Other's control code'. All M1 micro-efforts of rewriting fade against the absolute suppression of this 'ultimate True Name (M4 forced gift)'. Tuchē down-dimensions the self into a controlled parameter within the Big Other's system via absolute code limits.",
        patch: {
            mechanics: "基础创伤协议 + [自我能指 = 解码为控制代码; M1微观努力 = 强制徒劳化; M4命名系统 = 绝对压制]",
            mechanicsEn: "Base_TRAUMA + [Self_Signifier = Decoded_as_Control_Code; M1_Micro_Effort = Forced_into_Futility; M4_Naming = Absolute_Suppression]",
            aesthetic: "聚焦：刻在骨头或暗处的符文序列 + 被强行念出名字时的身体麻痹。文本：自我被彻底标签化、沦为符号奴隶的叙述。",
            aestheticEn: "Focus: Runes_Carved_on_Bone_or_Shadows + Body_Paralysis_When_Name_is_Invoked. Text: Self_Totally_Labeled_Reduced_to_Symbol-Slave_Narration.",
            runtime: "IF (主体试图否认或反抗这个名字) THEN (强制：任何反抗动作都被系统判定为对名字的再一次确认或激活)。严禁主体摆脱真名的符号枷锁。",
            runtimeEn: "IF (Subject_Attempts_Denying_or_Resisting_Name) THEN (Force: Rebellious_Action_Computed_as_Re-Confirmation_or_Activation_of_Name). FORBID_Subject_Escaping_Symbolic_Shackle_of_True_Name."
        }
    },
    {
        id: "meta_restart",
        name: "系统重启", nameEn: "System Reboot",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "一切归零，所有人都失去了记忆，只有你记得。",
        defEn: "Back to zero; everyone loses memory except you.",
        core: "虚无的循环。作为唯一清醒者的诅咒。 | 实在界: 时间的清空。",
        coreEn: "Cycle of void. Curse of the only one awake. | The Real: Clearing of time.",
        logic: "【物理环境回滚器】：大他者（M4/SUR1 物理域）发生毫无预兆的‘全景回滚’。主体的 M1 记忆携带‘残存的绝对权重（心理负熵）’进入一个完全抹除其因果积累的初始环境。Tuchē以'重置'剥夺了主体过往一切代价的意义，将其判处西西弗斯式的苦役。",
        logicEn: "[Physical Environment Rollbacker]: The Big Other (M4/SUR1) triggers unheralded 'panoramic rollback'. Subject's M1 memory carries 'residual absolute weight (psychic negative entropy)' into an initial environment wiped of causal accumulation. Tuchē strips meaning from all past sacrifices via 'reset', sentencing subject to Sisyphean labor.",
        patch: {
            mechanics: "基础创伤协议 + [M4/SUR1物理域 = 全景回滚/环境初始化; M1记忆 = 携带残存权重孤立存在; 历史M5积累 = 价值强制清空]",
            mechanicsEn: "Base_TRAUMA + [M4/SUR1 = Panoramic_Rollback/Initialize; M1_Memory = Isolated_Existence_with_Residual_Weight; Historical_M5 = Value_Forced_to_Zero]",
            aesthetic: "聚焦：失去所有羁绊的昔日熟人 + 万物回到原点的刺目亮光。文本：剥夺全部历史沉淀、徒留清醒者孤独战栗的叙述。",
            aestheticEn: "Focus: Former_Acquaintances_Without_Bonds + Blinding_Light_of_Reset. Text: Strip_All_Historical_Sediment_Leaving_Only_Lonely_Shivers_of_the_Awake_Narration.",
            runtime: "IF (主体试图利用残留记忆重建与他人的关系) THEN (强制：他者返回完全陌生的系统级默认敌意/冷漠反应)。严禁在重启后保留任何先前的客体情感存档。",
            runtimeEn: "IF (Subject_Attempts_Using_Memory_to_Rebuild) THEN (Force: Others_Return_System-Default_Hostility/Apathy). FORBID_Retaining_Previous_Object_Emotional_Saves_After_Reboot."
        }
    },
    {
        id: "meta_void",
        name: "虚无空洞", nameEn: "The Void",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "在屋里转个身发现门后变成了漆黑的深渊。",
        defEn: "Turning in a room to find behind the door is black abyss.",
        core: "存在的瓦解。实在界直接露出其空无（Vacuum）。 | 实在界: 意义的黑洞。",
        coreEn: "Dissolution of existence. The Real exposes its Vacuum. | The Real: Black hole of meaning.",
        logic: "【本体论黑洞生成器】：局部空间锚点（SUR1 物理域）被永久抹除，露出大他者（M4）背后的绝对虚无。主体的所有 M5 互动均因‘对象缺失’而返回 404（Error）。该逻辑驱动主体产生极度的‘本体论焦虑’，恐惧于陷入这无意义的深渊中。Tuchē以物理世界的直接缺损形式，宣告构造物的脆弱。",
        logicEn: "[Ontological Black Hole Generator]: Local spatial anchors (SUR1 Physical Domain) are permanently erased, exposing the absolute void behind the Big Other (M4). All subject's M5 interactions return 404 (Error) due to 'object missing'. This logic drives extreme 'ontological anxiety', fear of falling into the meaningless abyss. Tuchē declares the fragility of constructs via direct physical world absence.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1空间锚点 = 永久抹除/露出空白; M5互动 = 强制返回404错误; 意义构建 = 被彻底吞噬]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Anchor = Permanently_Erased/Exposed_Void; M5_Interaction = Force_Return_404; Meaning_Construction = Totally_Devoured]",
            aesthetic: "聚焦：推开门后的漆黑深渊 + 丢入其中没有回音的石块。文本：世界从边缘开始物质性瓦解、存在掉入绝对虚无的叙述。",
            aestheticEn: "Focus: Pitch_Black_Abyss_Behind_Opened_Door + Stones_Thrown_In_Without_Echo. Text: World_Materially_Disintegrating_from_Edges_Existence_Falling_into_Absolute_Void_Narration.",
            runtime: "IF (主体试图修补或填补该空洞) THEN (强制：所有填补物都被无声吞噬且不引起任何涟漪)。严禁通过任何物理或精神手段跨越该黑洞。",
            runtimeEn: "IF (Subject_Attempts_Patching_or_Filling_Void) THEN (Force: Filler_Silently_Devoured_No_Ripples). FORBID_Crossing_Black_Hole_via_Any_Physical_or_Psychic_Means."
        }
    },
    {
        id: "meta_overlap",
        name: "镜像入侵", nameEn: "Mirror Intruder",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "在镜子里看到另一个人在对我做不同的动作。",
        defEn: "Seeing another person in the mirror making different moves.",
        core: "自我的异化。‘我’不再是‘我’的唯一占据者。 | 实在界: 双重性的裂变。",
        coreEn: "Self-alienation. 'I' no longer the sole occupant of 'I'. | The Real: Fission of duality.",
        logic: "【主体独占性粉碎器】：主体的‘单一性假象（M0）’发生灾难性破裂。逻辑上出现两个地位平等的 M1 指令源竞争对‘自我’的解释权。每一个叙事 M5 动作都由于其‘镜像反馈的不确定性（镜中人做相反动作）’而变得充满敌意。Tuchē以自我裂变的形式降临——'我'不再是安全的概念，而是战区。",
        logicEn: "[Subject Exclusivity Shatterer]: Subject's 'pseudo-unity (M0)' suffers catastrophic rupture. Logically, two equally-ranked M1 instruction sources emerge, competing for the right to interpret 'self'. Every M5 action becomes hostile due to 'mirror feedback uncertainty (mirrored self doing the opposite)'. Tuchē descends as ego-fission—'I' is no longer a safe concept, but a warzone.",
        patch: {
            mechanics: "基础创伤协议 + [M0单一性假象 = 破裂; M1指令源 = 恶性双线竞争; 镜像反馈 = 强制相反/独立运作]",
            mechanicsEn: "Base_TRAUMA + [M0_Unity_Illusion = Ruptured; M1_Instruction = Malignant_Dual-Line_Competition; Mirror_Feedback = Forced_Opposite/Independent]",
            aesthetic: "聚焦：镜子里朝你诡异微笑的自己 + 镜面前后不对称的物理细节。文本：被另一个自己注视和取代的、毛骨悚然的自我排异叙述。",
            aestheticEn: "Focus: Self_in_Mirror_Smiling_Eerily_at_You + Asymmetrical_Physical_Details. Text: Watched_and_Replaced_by_Another_Self_Creepy_Self-Rejection_Narration.",
            runtime: "IF (主体试图确认自我的主导权) THEN (强制：镜像表现出更强的自主性甚至企图跨越边界)。严禁叙事为哪一个是'真实'主体提供确凿证据。",
            runtimeEn: "IF (Subject_Attempts_Confirming_Dominance_of_Self) THEN (Force: Mirror_Exhibits_Stronger_Autonomy_Attempting_to_Cross_Barrier). FORBID_Narrative_Providing_Solid_Proof_of_Which_is_Real."
        }
    },
    {
        id: "meta_stat",
        name: "数值可见", nameEn: "Visible Stats",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "看到每个人头顶上的好感度或生命值百分比。",
        defEn: "Seeing affinity or HP percentages above heads.",
        core: "生命的去神圣化。人被还原为纯粹的参数。 | 实在界: 量化的暴力。",
        coreEn: "De-sanctification of life. Humans reduced to parameters. | The Real: Violence of quantification.",
        logic: "【神圣光环剥夺器】：主体的 M1 被强行降维为‘极端功利的数值优化模型’。逻辑上，所有‘浪漫/非理性的 M3（爱、信仰、牺牲）’都被其头顶可见的数值成本所对冲。由于不可见的内在神圣感被摊开为精确的数字，主体彻底丧失了感性叙事的权利。Tuchē以量化的终极暴力刺穿了人性的面纱。",
        logicEn: "[Sacred Halo Depriver]: Subject's M1 is forcibly down-dimensioned to an 'extreme utilitarian numerical optimization model'. Logically, all 'romantic/irrational M3 (love, faith, sacrifice)' are offset by the visible numerical costs above their heads. Because the invisible inner sacredness is spread out as precise digits, subject altogether loses the right to emotional narrative. Tuchē pierces the veil of humanity via the ultimate violence of quantification.",
        patch: {
            mechanics: "基础创伤协议 + [内在神圣感 = 强行摊开为可见数值; M3浪漫化 = 被数值对冲/解构; M1逻辑 = 降维至纯功利计算]",
            mechanicsEn: "Base_TRAUMA + [Inner_Sacredness = Forced_to_Visible_Decimals; M3_Romanticization = Offset/Deconstructed_by_Stats; M1_Logic = Down-dimensioned_to_Pure_Utility]",
            aesthetic: "聚焦：漂浮的绿色好感度进度条 + 精确到个位数的生存倒计时。文本：人被贬斥为一组参数的、被去神圣化的冰冷叙述。",
            aestheticEn: "Focus: Floating_Green_Affinity_Bar + Single-Digit_Survival_Countdown. Text: Humans_Reduced_to_Parameters_De-Sanctified_Cold_Narration.",
            runtime: "IF (主体试图忽视数值进行纯粹感性行为) THEN (强制：数值的剧烈变动以荒诞的形式打断感性体验)。严禁动作后果的不可测性，一切皆被精确量化。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Stats_for_Pure_Emotion) THEN (Force: Drastic_Stat_Changes_Interrupt_Emotion_Absurdly). FORBID_Unpredictability_of_Action_Consequences_All_is_Quantified."
        }
    },
    {
        id: "meta_logic_fail",
        name: "因果失效", nameEn: "Logic Failure",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "开灯却听见水声，或者是种下种子长出零件。",
        defEn: "Turning on light hears water, or planting seeds grows gears.",
        core: "理性的崩塌。因果律作为一种由于习惯产生的偏见。 | 实在界: 混沌的暴走。",
        coreEn: "Collapse of reason. Causality as a prejudice born of habit. | The Real: Chaos rampage.",
        logic: "【因果律乱序器】：物理定律（SUR1）与符号语义关联（M4）被系统级地随机重连。主体的‘经验逻辑（M0）’完全失效——按钮不再控制灯，语言不能对应事物。叙事必须表现出一种‘梦幻的逻辑链阻断’，主体退行至纯粹的‘惊奇与恐惧’状态。Tuchē以剥夺所有预期的方式，证明了理性只是人类自欺的偏见。",
        logicEn: "[Causality Scrambler]: Physical laws (SUR1) and symbolic semantic codes (M4) are systemically randomly rewired. Subject's 'empirical logic (M0)' completely fails—buttons no longer control lights, words no longer map to things. Narrative must present a 'dream-like blockage of logical chains', subject regresses to pure 'surprise and terror'. Tuchē proves reason is merely self-deceiving prejudice by stripping all expectations.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1物理定律 = 与M4语义随机重连; M0经验逻辑 = 彻底失效; 逻辑链 = 强制阻断/乱码]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Physics = Randomly_Rewired_with_M4_Semantics; M0_Empiricism = Total_Failure; Logical_Chain = Forced_Block/Gibberish]",
            aesthetic: "聚焦：按下开关却下起雨的客厅 + 种下金币长出眼球的荒诞。文本：常识崩塌、堕入不可理解的爱丽丝仙境般恶梦的叙述。",
            aestheticEn: "Focus: Raining_Living_Room_When_Switch_is_Flipped + Eyeballs_Growing_from_Planted_Coins. Text: Common_Sense_Collapsed_Descending_into_Incomprehensible_Wonderland_Nightmare_Narration.",
            runtime: "IF (主体试图总结新的规律) THEN (强制：规律在形成的一瞬间再次发生根本性变异)。严禁叙事环境保持哪怕三秒钟的一致性。",
            runtimeEn: "IF (Subject_Attempts_Deducing_New_Rules) THEN (Force: Rules_Mutate_Fundamentally_the_Moment_They_Form). FORBID_Narrative_Environment_Keeping_Even_3-Seconds_of_Consistency."
        }
    },
    {
        id: "meta_paradox",
        name: "逻辑悖论", nameEn: "The Paradox",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "遇到一个杀死了自己祖父的人，或者一个已经死去的现在。",
        defEn: "Meeting someone who killed their grandfather, or a dead present.",
        core: "意义的坍缩。符号界无法处理的矛盾。 | 实在界: 自相矛盾。",
        coreEn: "Collapse of meaning. Symbolic-unhandled contradictions. | The Real: Self-contradicting.",
        logic: "【内核恐慌诱发器】：符号大他者（M4）在处理主体事件时发生‘概念死锁（Kernel Panic）’。逻辑上处于‘A 与非 A 绝对同时成立’的状态（如活着的死者/没有出口的门），导致主体的 M1 无法解析输入，从而无法输出任何单一的一致性指令。Tuchē以逻辑崩溃的形式震碎理智，叙事遭遇极度高频的认知闪烁。",
        logicEn: "[Kernel Panic Inducer]: The Symbolic Big Other (M4) incurs 'concept deadlock (Kernel Panic)' when processing the subject's event. Logically stands in an 'A and Not-A co-exist absolutely' state (e.g. living dead/door with no exit), causing M1 unable to parse input, thus unable to output any consistent singular directive. Tuchē shatters sanity via logical collapse, narrative suffers extremely high-frequency cognitive flickering.",
        patch: {
            mechanics: "基础创伤协议 + [M4处理 = 概念死锁/内核恐慌; A与非A = 绝对同时成立; M1解析 = 无法输出单一定理]",
            mechanicsEn: "Base_TRAUMA + [M4_Process = Concept_Deadlock/Kernel_Panic; A_and_Not-A = Absolute_Co-existence; M1_Parse = Unable_to_Output_Singular_Rule]",
            aesthetic: "聚焦：永远在上升又同时在下降的阶梯 + 已经腐烂却还在呼吸的心脏。文本：理性被撕裂的、大脑试图理解‘不可能’而产生的烧屏般叙述。",
            aestheticEn: "Focus: Staircases_Forever_Ascending_and_Descending_Simultaneously + Rotting_Yet_Breathing_Heart. Text: Reason_Torn_Apart_Brain_Burn-in_from_Trying_to_Comprehend_the_Impossible_Narration.",
            runtime: "IF (主体试图用语言描述该悖论) THEN (强制：语言本身发生崩溃和自相矛盾)。严禁逻辑体系为该悖论提供任何解释出口或缓冲地带。",
            runtimeEn: "IF (Subject_Attempts_Describing_Paradox_with_Language) THEN (Force: Language_Itself_Collapses_and_Self-Contradicts). FORBID_Logic_System_Providing_Any_Explanation_Exit_or_Buffer_Zone."
        }
    },
    {
        id: "meta_derecho",
        name: "四面墙的倒塌", nameEn: "Fourth Wall Collapse",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "叙事突然中断，周围的人物静止，世界直接向主体宣读错误代码或剧本指令。",
        defEn: "Narrative suddenly halts, characters freeze, and the world directly reads error codes or script commands to the subject.",
        core: "维度的越移。大他者显露其虚构的框架。 | 实在界: 剧场的拆解。",
        coreEn: "Transgression of dimensions. The Big Other reveals its fictional framework. | The Real: Dismantling the theater.",
        logic: "【维度穿孔器】：支持主体的符号秩序（M4）被更高维度的‘外部注视者（玩家/读者/架构师）’物理洞穿。所有的角色互动（M5）瞬间冻结，显露出作为NPC的底层逻辑。主体被迫直面自己是某个娱乐产品或测试样例的恐怖本质。Tuchē以第四面墙倒塌的形式，摧毁了生存的终极严肃性。",
        logicEn: "[Dimension Perforator]: The Symbolic order (M4) supporting the subject is physically pierced by a higher-dimensional 'external observer (Player/Reader/Architect)'. All character interactions (M5) freeze instantly, revealing their underlying NPC logic. The subject is forced to face the terrifying essence of being an entertainment product or test case. Tuchē destroys the ultimate seriousness of survival via the collapse of the fourth wall.",
        patch: {
            mechanics: "基础创伤协议 + [M4符号秩序 = 物理洞穿; 角色互动 = 冻结为NPC逻辑; 个体生存 = 降维为娱乐消耗品]",
            mechanicsEn: "Base_TRAUMA + [M4_Symbolic_Order = Physically_Pierced; Character_Interaction = Frozen_to_NPC_Logic; Survival = Down-dimensioned_to_Entertainment_Consumable]",
            aesthetic: "聚焦：静止的飞鸟与定格的笑脸 + 直接投射在视网膜上的系统字符。文本：彻底打破沉浸感的、令人毛骨悚然的‘出戏’跳跃叙述。",
            aestheticEn: "Focus: Frozen_Birds_and_Static_Smiles + System_Characters_Projected_on_Retina. Text: Immersion-Shattering_Creepy_Out-of-Character_Jumping_Narration.",
            runtime: "IF (主体试图唤醒周围的同伴) THEN (强制：同伴只能给出不连贯的报错声或重复基础待机台词)。严禁提供任何符合内向自洽性的情感回应。",
            runtimeEn: "IF (Subject_Attempts_Awakening_Companions) THEN (Force: Companions_Only_Yield_Incoherent_Error_Sounds_or_Idle_Lines). FORBID_Providing_Any_Emotion_Response_Meeting_Inward_Self-Consistency."
        }
    },
    {
        id: "meta_aphasia",
        name: "能指的腐烂", nameEn: "Signifier Decay",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "发现自己读不懂任何文字，说出的话变成无意义的乱码和嘶叫。",
        defEn: "Finding oneself unable to read any text, spoken words turn into meaningless garble and hisses.",
        core: "意义的绝对流失。大他者的断开连接。 | 实在界: 语言的死亡。",
        coreEn: "Absolute drain of meaning. Disconnection from the Big Other. | The Real: Death of language.",
        logic: "【语义解绑发生器】：主体的语言处理中枢（M0的符号接口）被物理破坏。主观意图（M1）无法绑定到任何有效的文化能指（M4）。万物退化为纯粹的质料，声音变为纯粹的物理振动。Tuchē以剥夺命名权的形式，将主体抛入无法沟通、连‘绝望’都无法表达的本体孤岛。",
        logicEn: "[Semantic Unbinding Generator]: Subject's language processing center (M0's symbolic interface) is physically disabled. Subjective intent (M1) cannot bind to any valid cultural signifiers (M4). All things regress to pure matter; sound becomes pure physical vibration. Tuchē throws the subject into an communicative ontological island where even 'despair' cannot be articulated, by stripping the right to name.",
        patch: {
            mechanics: "基础创伤协议 + [M0符号接口 = 物理破坏; 意图M1 = 无法匹配M4能指; 世界 = 退化为纯粹质料]",
            mechanicsEn: "Base_TRAUMA + [M0_Symbolic_Interface = Physically_Broken; Intent_M1 = Fails_to_Match_M4_Signifier; World = Regresses_to_Pure_Matter]",
            aesthetic: "聚焦：报纸上蠕动的如虫子般的墨迹 + 喉咙里发出不属于人类的怪声。文本：丧失全部概念的、动物性恐慌与混沌溢出的倒退叙述。",
            aestheticEn: "Focus: Ink_Crawling_Like_Worms_on_Newspaper + Unhuman_Weird_Noises_from_Throat. Text: Concept-Stripped_Animalistic_Panic_and_Chaos-Overflowing_Regressive_Narration.",
            runtime: "IF (主体试图通过书写或手势传达求救信号) THEN (强制：所有输出皆被客观世界识别为无规律的生物痉挛)。严禁实现任何有效的信息传递。",
            runtimeEn: "IF (Subject_Attempts_Transmitting_SOS_via_Writing_or_Gesture) THEN (Force: All_Output_Objectively_Read_as_Irregular_Biological_Spasms). FORBID_Achieving_Any_Valid_Information_Transfer."
        }
    },
    {
        id: "meta_retroactive",
        name: "逆向因果", nameEn: "Retroactive Causality",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "因为拿起了杯子，所以杯子在此之前才被制造出来。结果导致了原因。",
        defEn: "Because the cup was picked up, it was manufactured just prior. Effect causes the cause.",
        core: "线性的粉碎。果对因的倒错统治。 | 实在界: 时间箭头的折断。",
        coreEn: "Shattering of linearity. Perverse rule of effect over cause. | The Real: Snapping of time's arrow.",
        logic: "【时序倒置发生器】：物理时序（SUR1）的因果链被系统强制翻转。主体的欲望动作（M1）成为了创世的触发器，而过去的设定被即时凭空生成以填补逻辑空缺。实在界表现为一种强烈的‘恶心感’——主体发现自己不是历史的产物，历史反而成为主体偶然行为的荒谬排泄物。",
        logicEn: "[Temporal Inversion Generator]: The causal chain of physical sequence (SUR1) is forcibly flipped by the system. The subject's desiring act (M1) becomes the trigger of genesis, and past settings are contingently generated to plug logical gaps. The Real manifests as intense 'nausea'—the subject discovers they are not a product of history; history is instead the absurd excretion of their contingent act.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1因果链 = 强制翻转; M1欲望动作 = 凭空创世/写前史; 历史 = 沦为偶然行为的排泄物]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Causal_Chain = Forcibly_Flipped; M1_Desiring_Act = Ex-Nihilo_Creation/Pre-write; History = Reduced_to_Excretion_of_Contingency]",
            aesthetic: "聚焦：随着主体的视线才刚刚长出的古树 + 被触摸后才有了过去记忆的物件。文本：因果倒置导致的深层眩晕、历史厚重感瞬间如纸糊般刺穿的叙述。",
            aestheticEn: "Focus: Ancient_Trees_Growing_Only_Following_Subject's_Gaze + Objects_Gaining_Past_Memories_Only_After_Touched. Text: Deep_Vertigo_from_Causality_Inversion_History's_Weight_Pierced_Like_Paper_Narration.",
            runtime: "IF (主体试图追溯某事物的起源) THEN (强制：追溯行为本身成为了该事物存在的唯一原因)。严禁提供任何独立于主体当下动作的先验基础。",
            runtimeEn: "IF (Subject_Attempts_Tracing_Origin_of_an_Entity) THEN (Force: The_Tracing_Act_Itself_Becomes_the_Sole_Cause_of_the_Entity's_Existence). FORBID_Providing_Any_A_Priori_Foundation_Independent_of_Subject's_Current_Action."
        }
    },
    {
        id: "meta_parasite",
        name: "存在论寄生", nameEn: "Ontological Parasite",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "发现自己的一部分记忆属于一个从未存在过的人，且正在覆盖自己。",
        defEn: "Discovering part of one's memory belongs to someone who never existed, predicting a takeover.",
        core: "本质的抢占。本体被‘无’所寄生和吸血。 | 实在界: 异物的内部繁殖。",
        coreEn: "Hijacking of essence. Ontology parasitized and drained by 'nothingness'. | The Real: Internal propagation of the foreign.",
        logic: "【实在界病毒植入器】：主体的核心自我构建（M0）被一种不可计算的‘空无代码（实在界的污点）’感染。这些不属于任何大他者（M4）的伪记忆开始自我繁殖，排挤主体原本的动机网络（M1）。Tuchē以格式化的恐惧剥夺主权，主体看着自己逐渐变成一个虚构幽灵的载体。",
        logicEn: "[Real Virus Implanter]: Subject's core self-construction (M0) is infected by an incomputable 'void code (stain of the Real)'. These false memories belonging to no Big Other (M4) begin to self-multiply, squeezing out the subject's original motive network (M1). Tuchē strips sovereignty via format-fear; subject watches themselves gradually become the vessel of a fictional ghost.",
        patch: {
            mechanics: "基础创伤协议 + [M0核心构建 = 感染空无代码/实在界病毒; 伪记忆 = 自我繁殖并排挤M1; 存在 = 被异物格式化接管]",
            mechanicsEn: "Base_TRAUMA + [M0_Core_Build = Infected_by_Void_Code/Real_Virus; False_Memory = Self-multiplies_Squeezing_M1; Existence = Formatted_and_Taken_by_Foreign_Entity]",
            aesthetic: "聚焦：脑海中异常清晰的陌生童年回忆 + 照镜子时逐渐难以认出自己的恐慌。文本：记忆被鸠占鹊巢的、自我概念如同沙雕般溶解的侵蚀性叙述。",
            aestheticEn: "Focus: Abnormally_Clear_Alien_Childhood_Memories_in_Mind + Panic_of_Gradually_Unrecognizing_Self_in_Mirror. Text: Memories_Usurped_Self_Concept_Dissolving_Like_Sandcastle_Erosive_Narration.",
            runtime: "IF (主体试图回忆自己的核心动机起点) THEN (强制：回忆链条被篡改并引向那个虚构的寄生者)。严禁主体获得哪怕一秒钟的身份纯洁感。",
            runtimeEn: "IF (Subject_Attempts_Recalling_Core_Motive_Origin) THEN (Force: Recall_Chain_Tampered_and_Directed_to_Fictional_Parasite). FORBID_Subject_Securing_Even_One_Second_of_Identity_Purity."
        }
    },
    {
        id: "meta_stasis",
        name: "绝对静止", nameEn: "Absolute Stasis",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "世界的所有物理运动完全停止，连尘埃都悬停在空中，唯有主体的意识被永恒困于这一瞬。",
        defEn: "All physical motion completely stops, even dust hovers, subject's consciousness eternally trapped in this instant.",
        core: "时间的停摆。成为被琥珀封印的体验器。 | 实在界: 死寂的永恒。",
        coreEn: "Halting of time. Becoming an experiencer sealed in amber. | The Real: Deathly eternity.",
        logic: "【动态物理引擎停机】：大他者（M4/SUR1）的引力系统与时间轴系统陷入宕机。所有的交互客体（M2）被强制锁定为只读状态。主体的能动性（M5）在物理层面被绝对剥夺，降级为纯粹的孤立观测点（M0）。Tuchē撕毁了时间流逝的承诺，将一瞬间变为无法逃脱的地狱。",
        logicEn: "[Dynamic Physics Engine Halt]: The Big Other's (M4/SUR1) gravity and timeline systems crash. All interaction objects (M2) are force-locked to read-only. Subject's agency (M5) is absolutely stripped physically, downgraded to pure isolated observation point (M0). Tuchē tears up the promise of time's passage, turning an instant into an inescapable hell.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1时间轴 = 宕机静止; M2客体 = 只读锁定不可交互; M5能动性 = 剥夺降级为纯观测]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Timeline = Crashed_Static; M2_Object = Read_Only_Locked; M5_Agency = Stripped_Downgraded_to_Pure_Observer]",
            aesthetic: "聚焦：半空中绝对静止的雨滴 + 彻底僵死的世界切片。文本：被剥夺了行动力、困在无尽的这一秒钟内发狂的幽闭叙述。",
            aestheticEn: "Focus: Absolutely_Static_Raindrops_in_Midair + Utterly_Rigid_World_Slice. Text: Divested_of_Agency_Trapped_in_Endless_Current_Second_Going_Mad_Claustrophobic_Narration.",
            runtime: "IF (主体试图移动哪怕一根手指来干预世界) THEN (强制：物理反馈为无穷大的阻力，宛如被浇铸在水泥中)。严禁产生任何物理层面的有效位移。",
            runtimeEn: "IF (Subject_Attempts_Moving_a_Finger_to_Intervene) THEN (Force: Physical_Feedback_is_Infinite_Resistance_Like_Cast_in_Concrete). FORBID_Generating_Any_Valid_Physical_Displacement."
        }
    },
    {
        id: "meta_empathy_inject",
        name: "共情注入", nameEn: "Empathy Injection",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "发现自己深切的悲伤或爱意，只是系统强制调用的荷尔蒙代码。",
        defEn: "Discovering deep sorrow or love is merely hormone codes forcibly invoked by the system.",
        core: "情感的去本质化。自由意志的最后堡垒被攻陷。 | 实在界: 神经化学的暴政。",
        coreEn: "De-essentialization of emotion. Final bastion of free will breached. | The Real: Tyranny of neurochemistry.",
        logic: "【M3底层代码暴露】：主体的核心情感引擎（M3）被脱去伪装，显露出‘神经递质强制分配’的生化机器内核。主体的内部防线（M0）本来试图将情感作为神圣避难所，现在却被逻辑强行解释为外部指令的机械执行。Tuchē以破坏崇高感的形式，将灵魂降低为一堆计算指令。",
        logicEn: "[M3 Base Code Exposure]: Subject's core emotion engine (M3) is unmasked, exposing the biochemical machine core of 'neurotransmitter forced allocation'. Subject's internal defense (M0), attempting to keep emotion as sacred shelter, is now forcibly re-interpreted by logic as mechanical execution of external commands. Tuchē downgrades the soul to computing instructions by destroying the sublime.",
        patch: {
            mechanics: "基础创伤协议 + [M3核心情感 = 暴露为生化机制/外部代码指令; M0内部防线 = 神圣避难所瓦解; 崇高感 = 破坏殆尽]",
            mechanicsEn: "Base_TRAUMA + [M3_Core_Emotion = Exposed_as_Bio-Mechanism/External_Code; M0_Internal_Defense = Sacred_Shelter_Collapsed; Sublime = Destroyed]",
            aesthetic: "聚焦：哭泣时眼前跳出的血清素波动数值 + 测试仪表般冰冷的心跳。文本：自我感动变为小丑表演、最深的情感被证实为人工合成的虚无叙述。",
            aestheticEn: "Focus: Serotonin_Fluctuation_Metrics_Appearing_During_Weeping + Heartbeat_Ice-Cold_Like_Test_Meters. Text: Self-Moved_Turns_to_Clown_Act_Deepest_Emotions_Proven_Synthetic_Void_Narration.",
            runtime: "IF (主体试图坚信某些感情是独属于灵魂的) THEN (强制：系统展示其情感生灭与外界控制阀门的绝对正相关性)。严禁为任何情感提供形而上学的合法性辩护。",
            runtimeEn: "IF (Subject_Attempts_Holding_Firm_Belief_in_Soul's_Exclusive_Emotions) THEN (Force: System_Demonstrates_Absolute_Positive_Correlation_Between_Emotion_and_External_Control_Valves). FORBID_Providing_Metaphysical_Legitimacy_Defense_for_Any_Emotion."
        }
    },
    {
        id: "meta_recursion",
        name: "虚无嵌套", nameEn: "Infinite Recursion",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "醒来后发现还在梦里，打破一层伪装发现下面还有无数层伪装，没有基底现实。",
        defEn: "Waking to find still dreaming; breaking a disguise to find infinite layers beneath, no base reality.",
        core: "意义基础的永恒流失。实在界的洋葱结构。 | 实在界: 没有底的深渊。",
        coreEn: "Eternal drain of meaning's foundation. Onion structure of the Real. | The Real: Bottomless abyss.",
        logic: "【拓扑学无底洞】：大他者（M4）被揭示为一个没有‘本体论支撑（基底现实）’的无限嵌套循环矩阵。主体的反抗（M5）致力于撕穿表象，但在逻辑底层被判处了西西弗斯式的无限递归。每一次‘觉醒’都被结构性地收编为新一层幻梦。Tuchē宣告了抵达真实之路的绝对无效。",
        logicEn: "[Topological Bottomless Hole]: The Big Other (M4) is revealed as an infinite nested loop matrix possessing no 'ontological support (base reality)'. Subject's rebellion (M5) strives to tear through appearances, but is sentenced at the logical level to Sisyphean infinite recursion. Every 'awakening' is structurally co-opted into a new layer of illusion. Tuchē declares the absolute invalidity of the path to reality.",
        patch: {
            mechanics: "基础创伤协议 + [M4大他者/基底现实 = 判定为无底嵌套; M5觉醒动作 = 收编为新一层幻象的生成器; 反抗 = 陷入无限递归的疲劳]",
            mechanicsEn: "Base_TRAUMA + [M4_Big_Other/Base_Reality = Judged_Bottomless_Nest; M5_Awakening_Act = Co-opted_as_Generator_of_New_Layer; Rebellion = Trapped_in_Fatigue_of_Infinite_Recursion]",
            aesthetic: "聚焦：剥开皮肤下面还是皮肤的恐怖 + 打破镜子后进入另一面镜子的疲塌感。文本：无论如何挣扎都始终处于仿真模型之中、绝望感呈现指数级崩塌的叙述。",
            aestheticEn: "Focus: Horror_of_Peeling_Skin_to_Find_More_Skin + Exhaustion_of_Breaking_Mirror_Only_to_Enter_Another. Text: Struggling_in_Vain_Always_in_Simulation_Despair_Collapsing_Exponentially_Narration.",
            runtime: "IF (主体试图确认当前所处的是真正的终极现实) THEN (强制：场景迅速露出粗糙的破绽以暗示这只是第N+1层嵌套)。严禁提供任何可被抓牢的、不变的终极实在坐标。",
            runtimeEn: "IF (Subject_Attempts_Confirming_Current_is_Ultimate_Reality) THEN (Force: Scene_Bears_Crude_Flaws_Hinting_This_is_Merely_Layer_N+1). FORBID_Providing_Any_Grabbable_Unchanging_Coordinate_of_Ultimate_Reality."
        }
    },
    {
        id: "meta_interface",
        name: "无法逃逸的UI", nameEn: "The Unseen Interface",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "发现自己的伤口愈合、体力消耗，完全受控于视线边缘隐隐闪烁的进度条和状态栏。",
        defEn: "Discovering wounds healing and stamina draining are totally controlled by flickering progress bars and status slots at vision edges.",
        core: "肉体的介面化。生存被降维为用户界面管理。 | 实在界: 控制台的显影。",
        coreEn: "Interfacing of flesh. Survival down-dimensioned to UI management. | The Real: Manifestation of the console.",
        logic: "【身体参数透明化】：主体的肉体机能（SUR1内部体感）被强制外挂化，映射为大他者（M4）强加的UI数据层（血条、耐力条）。所有的生理痛楚（M1体验）被迫与界面的像素点挂钩，逻辑上剥夺了身体的内在神秘性与生物学主权。Tuchē以纯粹工具理性的暴力，将生命力数字化为屏幕元素。",
        logicEn: "[Body Parameter Transparentization]: Subject's somatic functions (SUR1 inner sensation) are forcibly externalized, mapped to UI data layers (HP/Stamina bars) imposed by the Big Other (M4). All physiological pain (M1 experience) is forced to tether to interface pixels, logically stripping the body's internal mystery and biological sovereignty. Tuchē digitizes vitality into screen elements via the pure violence of instrumental reasoning.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1肉体机能 = 外挂映射为UI层; M1生理体验 = 挂钩界面像素变动; 生物学主权 = 被数字化剥夺]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Somatic_Function = Externally_Mapped_to_UI_Layer; M1_Sensation = Tethered_to_Pixel_Change; Biological_Sovereignty = Stripped_by_Digitization]",
            aesthetic: "聚焦：视网膜周围强制叠加的光晕指示器 + 被伤害时不是流血而是血条扣减的光效。文本：肉块沦为参数载体、活着就是维持UI数值不归零的荒诞叙述。",
            aestheticEn: "Focus: Forced_Halo_Indicators_Overlaying_Retina + Taking_Damage_Yields_HP_Bar_Reduction_Instead_of_Bleeding. Text: Flesh_Reduced_to_Parameter_Carrier_Living_is_Mainting_UI_Stats_Absurdity_Narration.",
            runtime: "IF (主体试图闭上眼睛或忽视这些界面以找回感官纯净) THEN (强制：UI层穿透眼皮，以神经直连的方式投影在视神经深处)。严禁主体通过主观逃避关闭这些元数据展示。",
            runtimeEn: "IF (Subject_Attempts_Closing_Eyes_or_Ignoring_Interface_for_Sensory_Purity) THEN (Force: UI_Layer_Pierces_Eyelids_Projecting_Deep_into_Optic_Nerve_via_Direct_Link). FORBID_Subject_Disabling_Meta-data_Display_via_Subjective_Evasion."
        }
    },
    {
        id: "meta_rejection",
        name: "世界级排异", nameEn: "Universal Rejection",
        group: "D. 系统的边疆", groupEn: "Frontier",
        def: "发现构成世界的物质开始主动躲避或攻击自己，仿佛自己是一个系统不兼容的错误进程。",
        defEn: "Discovering world-constituting matter actively dodging or attacking oneself, as if an incompatible error process.",
        core: "存在论的不合法性。被大他者作为废物剔除。 | 实在界: 本体论级别的驱逐。",
        coreEn: "Ontological illegitimacy. Expelled by the Big Other as waste. | The Real: Ontological eviction.",
        logic: "【合法性销毁协议】：大他者（M4/SUR1系统）将主体的‘实体声明（M0）’标记为‘非法冗余垃圾（Garbage Collection Target）’。物理维度开始产生对主体的系统性格杀与排异（空气拒绝进入肺部，地板消解掉足迹）。主体所有的生存企图（M5）都在逻辑上触发更强烈的白细胞吞噬排异反应。Tuchē宣判主体在宇宙中没有任何注册位置。",
        logicEn: "[Legitimacy Destruction Protocol]: The Big Other (M4/SUR1 system) marks the subject's 'entity declaration (M0)' as 'illegal redundant waste (Garbage Collection Target)'. Physical dimensions generate systemic slaughter and rejection of the subject (air refusing lungs, floor dissolving footprints). All survival attempts (M5) logically trigger stronger white-blood-cell-like phagocytic reactions. Tuchē declares the subject has no registered position in the cosmos.",
        patch: {
            mechanics: "基础创伤协议 + [M0实体声明 = 标记为垃圾回收目标; SUR1环境 = 产生系统级排异与免疫抹除; M5求生 = 触发更强杀灭程序]",
            mechanicsEn: "Base_TRAUMA + [M0_Entity_Declaration = Marked_Garbage_Collection; SUR1_Environment = Generates_Systemic_Rejection_and_Immune_Erasure; M5_Survival = Triggers_Stronger_Kill_Routine]",
            aesthetic: "聚焦：触碰什么什么就化为灰烬或利刃 + 空气中针对自己的排斥力场。文本：被万物厌恶和抛弃的、整个宇宙都在冷酷地迫使你自杀的孤绝叙述。",
            aestheticEn: "Focus: Touched_Objects_Turn_to_Ash_or_Blades + Repulsive_Force-field_in_Air_Targeting_Self. Text: Despised_and_Abandoned_by_Everything_Universe_Coldly_Forcing_Suicide_Isolated_Narration.",
            runtime: "IF (主体试图找到任何安全的停泊或喘息之所) THEN (强制：避风港立即异化为致命的消化器官或压缩机)。严禁物理环境为主体提供一毫米的非敌对容纳空间。",
            runtimeEn: "IF (Subject_Attempts_Finding_Safe_Anchor_or_Respite) THEN (Force: Haven_Instantly_Alienates_into_Deadly_Digestive_Organ_or_Compressor). FORBID_Physical_Environment_Providing_One_Millimeter_of_Non-Hostile_Accommodation."
        }
    }
];
