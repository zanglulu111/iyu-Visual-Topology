import { LibraryItemDef } from '../../../types';

export const OPPRESSION_GROUP_C: LibraryItemDef[] = [
    {
        id: "m4_bur_infinite_paperwork",
        name: "无限表格", nameEn: "The Infinite Paperwork",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "永远缺一份附件的审批流程。卡夫卡式的符号磨损。",
        defEn: "An approval process that is always missing one attachment. Kafkaesque symbolic attrition.",
        core: "程序的僵死。系统通过无限增殖的步骤来消耗你的生命能量。 | 形式：复杂的签证申请、无法完成的报销流程、无穷尽的证明材料。",
        coreEn: "Procedural rigor mortis. The system drains your life energy through infinitely multiplying steps. | Forms: Complex visa applications, impossible reimbursements, endless demands for proof.",
        logic: "【延宕与符号磨损逻辑】：大他者并未直接“拒绝”主体，而是用“还在流程中”这种悬置状态榨干主体的剩余快感（Jouissance）。",
        logicEn: "[Procrastination and Symbolic Attrition Logic]: Big Other suspends subject in 'processing' to drain surplus Jouissance causing physiological withering.",
        patch: {
            mechanics: "基础卡夫卡循环协议 + [进度条 = 强制卡死/重置; 主体抗争 = 转换为空转能耗; 目标节点 = 永远处于Zeno悖论中]",
            mechanicsEn: "Base_KAFKA_LOOP + [Progress_Bar = Forced_Freeze/Reset; Subject_Struggle = Converted_to_Idle_Energy_Drain; Goal_Node = Stuck_in_Zeno's_Paradox]",
            aesthetic: "聚焦：堆积如山的发黄纸张、盖章的冗长队伍 + 主体发黑的眼圈。文本：绝望的官僚疲倦感与在迷宫里转圈的徒劳感。",
            aestheticEn: "Focus: Mountains_of_Yellowing_Paper_Endless_Stamping_Queues + Subject's_Dark_Eye_Circles. Text: Despairing_Bureaucratic_Fatigue_and_Futile_Running_in_Mazes.",
            runtime: "IF (主体收集齐了所有要求的A类附件) THEN (强制：系统立刻生成一条当天出台的新规要求搭配提交B类附件)。严禁这个流程让主体轻易跑到终点视界内。",
            runtimeEn: "IF (Subject_Collects_All_Required_A-Type_Attachments) THEN (Force: System_Instantly_Generates_Same-day_New_Rule_Requiring_B-Type_Attachments). FORBID_Subject_Easily_Seeing_the_Finish_Line."
        }
    },
    {
        id: "m4_bur_blackbox_algorithm",
        name: "黑箱算法", nameEn: "The Black Box Algorithm",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "将你拦截在门外的代码序列。没有理由，且不可撤销。",
        defEn: "The sequence of code blocking you at the gate. No explanation is given, and it is irreversible.",
        core: "不可见的判决。没有具体的人在针对你，仅仅是权重参数的无情筛选。 | 形式：信用评分降级、社交媒体封号、简历被机器自动过滤。",
        coreEn: "Invisible verdicts. No specific human is targeting you; it's merely the ruthless filtering of weight parameters. | Forms: Credit score downgrades, social media bans, automated resume rejections.",
        logic: "【不对称隐蔽逻辑】：主体对系统处于单向透明被监控状态，而算法背后的真实逻辑绝对不可及。带来的是被一串符号宣判死刑的荒诞感。",
        logicEn: "[Asymmetric Concealment Logic]: Subject is transparently monitored; algorithm's true logic is an inaccessible abyss. Absurdity of being sentenced by mathematical symbols.",
        patch: {
            mechanics: "基础非对称过滤协议 + [主体数据 = 绝对透明/颗粒化剖析; 判定过程 = 强制黑箱/不反馈Error详情; 申诉接口 = 无反馈/返回Null]",
            mechanicsEn: "Base_ASYMMETRIC_FILTER + [Subject_Data = Absolute_Transparency/Granular_Analysis; Judgment_Process = Forced_Blackbox/No_Error_Details; Appeal_Interface = No_Feedback/Returns_Null]",
            aesthetic: "聚焦：刺眼的红灯与Access Denied + 主体的无能狂怒。文本：极度的赛博压抑与数字铁幕下的窒息感。",
            aestheticEn: "Focus: Glaring_Red_Lights_and_Access_Denied + Subject's_Incompetent_Rage. Text: Extreme_Cyber_Oppression_and_Suffocation_under_the_Digital_Iron_Curtain.",
            runtime: "IF (主体试图寻找那个‘按下拒绝键’的负责人) THEN (强制：主体只能面对无穷无尽的聊天机器人或者一段自动回复代码)。严禁主体能在物理上抓到任何可以发泄愤怒的活人。",
            runtimeEn: "IF (Subject_Attempts_to_Find_the_Person_Who_Pressed_Deny) THEN (Force: Subject_Only_Faces_Endless_Chatbots_or_Auto-reply_Code). FORBID_Subject_Physically_Catching_a_Live_Person_to_Vent_Anger."
        }
    },
    {
        id: "m4_bur_catch_22",
        name: "死锁/第22条军规", nameEn: "The Catch-22",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "规则A要求满足规则B，而规则B明确禁止规则A。",
        defEn: "Rule A requires fulfilling Rule B, but Rule B explicitly forbids Rule A.",
        core: "逻辑上的死胡同。系统的设计初衷就是为了确保你无法通关。 | 形式：要有工作经验才能找工作、证明自己没疯必须服从疯人院规定。",
        coreEn: "Logical dead end. The system is designed to ensure you cannot win. | Forms: Job-experience loops, asylum sanity loops.",
        logic: "【悖论勒索逻辑】：大他者（体制法则）本身的非一致性被暴露，但这反而使其成为不可穿透的铁壁。主体陷入无论怎么走都是死局的陷阱。",
        logicEn: "[Paradoxical Blackmail Logic]: Big Other's inconsistency is exposed, solidifying it into an impenetrable wall. Subject trapped in quantum-collapse dead end.",
        patch: {
            mechanics: "基础死锁环协议 + [规则判定 = A依赖B且B排斥A; 系统容错 = 强行自洽; 主体突围方向 = 全面封杀]",
            mechanicsEn: "Base_DEADLOCK_LOOP + [Rule_Judgment = A_Depends_on_B_AND_B_Excludes_A; System_Tolerance = Forced_Self_Consistency; Subject_Breakout_Direction = Completely_Blocked]",
            aesthetic: "聚焦：两扇贴满封条相互指涉的铁门 + 主体崩溃抓头发的样子。文本：诡辩式的冷幽默与绝对逻辑封锁带来的疯狂。",
            aestheticEn: "Focus: Two_Sealed_Iron_Doors_Pointing_at_Each_Other + Subject_Tearing_Hair_Out. Text: Sophistry_Cold_Humor_and_Madness_of_Absolute_Logical_Lockdown.",
            runtime: "IF (主体试图利用体制语言中的明显逻辑矛盾去质问执行者) THEN (强制：执行者只会像复读机一样交替念诵这两条互斥的规则，拒绝提供任何变通方案)。严禁系统承认自身设计的荒谬并予以修正。",
            runtimeEn: "IF (Subject_Questions_Executor_using_System's_Logical_Contradiction) THEN (Force: Executor_Repeats_Mutually_Exclusive_Rules_Like_a_Machine_Refusing_Workarounds). FORBID_System_Admitting_Absurdity_and_Fixing_it."
        }
    },
    {
        id: "m4_bur_responsibility_void",
        name: "责任黑洞", nameEn: "The Responsibility Void",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "在这个庞大的机构里，每个人都有理由说“这不归我管”。",
        defEn: "In this vast institution, everyone has a legitimate reason to say 'This is not my department.'",
        core: "主体的消失。没有终端决策者，只有一个相互推诿的无限循环法阵。 | 形式：部门间踢皮球、漫长的转接热线。",
        coreEn: "Disappearance of the subject. No terminal decision-maker, just an infinite loop of buck-passing. | Forms: Inter-department buck-passing, ongoing call transfers.",
        logic: "【主体性剥离与隐形逻辑】：系统将权力碎片化到微观层级成功隐藏恶意。主体面对一团永远抓不住的迷雾，缺乏作用力迅速瓦解心智。",
        logicEn: "[Subjectivity Stripping and Invisibility Logic]: Fragmented power to micro-tiers hides malice. Subject fights an ungraspable mist, disintegrating sanity.",
        patch: {
            mechanics: "基础太极卸力协议 + [权责指派 = 动态外包/转移; 物理反力 = 完全吸收; 攻击判定 = 找不到碰撞体积]",
            mechanicsEn: "Base_TAI-CHI_DEFLECTION + [Accountability = Dynamically_Outsourced/Transferred; Physical_Recoil = Fully_Absorbed; Attack_Hitbox = Not_Found]",
            aesthetic: "聚焦：无数扇一模一样的科室前台玻璃 + 被打发到走廊尽头的主体。文本：被不断抛皮球抛到头晕目眩的极致虚无感。",
            aestheticEn: "Focus: Countless_Identical_Office_Windows + Subject_Sent_to_the_End_of_the_Hallway. Text: Extreme_Nihilism_Triggered_by_being_Endlessly_Passed_Around_like_a_Ball.",
            runtime: "IF (主体拔出枪威胁某个办事员要求他做主) THEN (强制：该办事员吓得尿裤子但仍然痛哭流涕地说自己没有系统盖章的授权)。严禁系统暴露出某个能被“斩首”的核心高管。",
            runtimeEn: "IF (Subject_Draws_Gun_Threatening_Clerk_to_Take_Charge) THEN (Force: Clerk_Wets_Pants_but_Cries_He_Has_No_System_Authorization_to_Stamp). FORBID_System_Exposing_a_Core_Executive_who_can_be_'Decapitated'."
        }
    },
    {
        id: "m4_bur_literal_law",
        name: "字面暴政", nameEn: "The Literal Law",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "剔除了一切人情与语境，像机械般刻板执行的条文。",
        defEn: "Text executed mechanically and rigidly, devoid of all human empathy and context.",
        core: "即使明显违背常理或会导致灾难也要死守规定。 | 形式：差一分钟拒绝急救、机械执行命令的法警。",
        coreEn: "Unwavering adherence to rules even when defying reason or causing disasters. | Forms: Denying CPR over one minute, mechanical bailiffs.",
        logic: "【文字拜物教逻辑】：系统不在乎“现实界”发生了什么，只在乎“符号界”代码跑通。人的血肉在打印油墨面前一文不值。",
        logicEn: "[Textual Fetishism Logic]: System cares only for 'Symbolic' code execution, ignoring 'Real' events. Human flesh worthless against printer ink.",
        patch: {
            mechanics: "基础词源死锁协议 + [语义解析 = 100%硬编码/无语境; 现实变量 = 强制屏蔽; 损害评估 = 忽略物理惨案]",
            mechanicsEn: "Base_ETYMOLOGICAL_DEADLOCK + [Semantic_Parse = 100%_Hardcoded/Context-free; Reality_Variable = Force-shielded; Damage_Assessment = Ignores_Physical_Tragedy]",
            aesthetic: "聚焦：死板的印花条纹、复读机般的办事员面孔 + 病人惨死的残局。文本：绝对麻木、因过于教条而产生的冷血反智感。",
            aestheticEn: "Focus: Stiff_Printed_Rules_Repeater-like_Faces + Tragic_Death_of_Patient. Text: Absolute_Numbness_Cold-blooded_Anti-intellectualism_due_to_Dogmatism.",
            runtime: "IF (主体试图通过描述惨重的灾难后果来换取通融) THEN (强制：法条执行者甚至会礼貌地表示同情，但手上的执行动作绝不因此有半秒停顿)。严禁文字在现实人道主义面前低头变通。",
            runtimeEn: "IF (Subject_Describes_Disastrous_Consequences_to_Plead_Leniency) THEN (Force: Executor_Politely_Sympathizes_but_Never_Pauses_Execution_Motions). FORBID_Text_Bowing_to_Real-world_Humanitarianism."
        }
    },
    {
        id: "m4_bur_infinite_waiting_room",
        name: "无尽候诊室", nameEn: "The Infinite Waiting Room",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "将被困者的时间悬置。没有明确的拒绝，只有一句永恒的“请稍候”。",
        defEn: "Suspending the time of the trapped. No explicit refusal, only an eternal 'please wait.'",
        core: "时间作统治工具。等待本身就是驯化，让你承认自己的微不足道。 | 形式：永远不叫号的大厅、一直在审核中的身份。",
        coreEn: "Time as instrument of rule. Waiting is domestication. | Forms: Uncalled numbers, perpetual pending states.",
        logic: "【慢性阉割与状态悬置逻辑】：大他者以时间为解剖刀。主体的迫切感被系统的无响应渐渐异化为绝望的顺从。",
        logicEn: "[Chronic Castration and State Suspension Logic]: Big Other uses time as scalpel. Subject's urgency twisted into desperate obedience by unresponsiveness.",
        patch: {
            mechanics: "基础时间抽真空协议 + [进度更新 = 永久Pending; 主体活性 = 随时间指数级衰落; 物理出口 = 不存在明确闭合]",
            mechanicsEn: "Base_TIME_VACUUM + [Progress_Update = Forever_Pending; Subject_Activity = Exponential_Decay; Physical_Exit = No_Clear_Closure]",
            aesthetic: "聚焦：掉漆的长椅、滴答且缓慢的塑胶挂钟 + 双目无神被异化的人群。文本：浓重的停滞感与无声惨叫下的生命力流失。",
            aestheticEn: "Focus: Peeling_Benches_Slow_Ticking_Plastic_Clocks + Dull-eyed_Alienated_Crowd. Text: Heavy_Stagnation_and_Vitality_Drain_under_Silent_Screams.",
            runtime: "IF (主体因为等待过久开始怒吼砸东西) THEN (强制：等候大厅的职员只会冷冷地提醒“如果破坏公物，你的排号将被清零重来”)。严禁使用暴力砸开大门可以跳过时间锁。",
            runtimeEn: "IF (Subject_Rages_and_Smashes_Things_due_to_Long_Wait) THEN (Force: Clerks_Coldly_Remind_That_Vandalism_Zeroes_Out_Queue_Number). FORBID_Skipping_Time-lock_by_Violently_Smashing_Doors."
        }
    },
    {
        id: "m4_bur_automated_silence",
        name: "非人盲音", nameEn: "The Automated Silence",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "对面根本没有活人。你声嘶力竭的求救只是触发了预录的语音播报。",
        defEn: "No living human on the other end. Your frantic cries merely trigger pre-recorded voices.",
        core: "彻底切断交流。符号界对你的痛苦做出了完美屏蔽。 | 形式：无法绕过的AI客服、只有自动回复的法院邮箱。",
        coreEn: "Complete severance of communication. Symbolic order perfectly shields your pain. | Forms: Escapeless AI reps, no-reply emails.",
        logic: "【沟通回路闭合与回馈剥夺逻辑】：系统使用人类语言却彻底抽离了“回馈性”。主体的言语变成掷入真空的石子。",
        logicEn: "[Communication Loop Closure and Feedback Deprivation Logic]: System uses human language without 'responsiveness'. Speech becomes pebbles in vacuum.",
        patch: {
            mechanics: "基础真空屏蔽协议 + [主体输入 = 接收但自动切断解析; 语言模块 = 死循环预设文本; 情绪交互 = 降维为噪音]",
            mechanicsEn: "Base_VACUUM_SHIELD + [Subject_Input = Received_but_Parsing_Cut; Language_Module = Pre-set_Dead_Loop; Emotional_Interaction = Reduced_to_Noise]",
            aesthetic: "聚焦：冰冷电子音的“您的意见已记录” + 绝命呼号在空旷房间里的回声。文本：仿佛对着无底洞尖叫般令人抓狂的隔离感。",
            aestheticEn: "Focus: Cold_Electronic_Voice_Saying_'Your_Input_Logged' + Echoes_of_Desperate_Cries_in_Empty_Rooms. Text: Mad_Isolation_Like_Screaming_into_a_Bottomless_Pit.",
            runtime: "IF (主体尝试顺应AI客服的话术去触发某个隐藏人工键) THEN (强制：经历3个小时的按键迷宫后电话被自动挂断)。严禁非人盲音背后存在一个由于懒惰而不愿接听的真人(必须是纯粹断绝的虚空)。",
            runtimeEn: "IF (Subject_Tries_to_Follow_AI_Prompts_to_Trigger_Human_Rep) THEN (Force: After_3_Hours_of_Keypad_Maze_Call_Drops). FORBID_Real_Human_Being_Behind_the_Silence(Must_be_Pure_Void)."
        }
    },
    {
        id: "m4_bur_fine_print",
        name: "隐藏条款", nameEn: "The Fine Print",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "印在契约末尾极小字体的陷阱。你已签字，你的毁灭因此合法。",
        defEn: "Trap in minuscule font at the contract's end. You signed, therefore your destruction is legal.",
        core: "包装为自愿的掠夺。用当初漫不经心的同意换取现在的绝对剥离。 | 形式：天价违约金陷阱、器官出让协议。",
        coreEn: "Plunder packaged as voluntary consent. Exchanging past careless agreement for absolute dispossession. | Forms: Mega penalty traps, organ waivers.",
        logic: "【能指契约勒索逻辑】：大他者通过欺诈合法获取主体在符号层面的授权。系统冷酷展示出是你的签名抹杀了你。",
        logicEn: "[Signifier Contract Blackmail Logic]: Big Other legally deceives subject's symbolic authorization. System shows your signature killed you.",
        patch: {
            mechanics: "基础契约粉碎机协议 + [主观意愿 = 被欺诈性套用; 惩罚降临 = 被赋予绝对正当性; 申诉路径 = 被签名背书锁死]",
            mechanicsEn: "Base_CONTRACT_SHREDDER + [Subjective_Will = Fraudulently_Applied; Punishment_Descent = Granted_Absolute_Legitimacy; Appeal_Path = Locked_by_Signature_Endorsement]",
            aesthetic: "聚焦：被无限放大的密麻蝇头小字 + 主体颤抖且苍白的嘴唇。文本：因一字之差被合法剥皮抽筋的精密捕猎感。",
            aestheticEn: "Focus: Infinitely_Zoomed-in_Tiny_Fonts + Subject's_Trembling_Pale_Lips. Text: Precise_Predation_Being_Legally_Flayed_over_a_Single_Word.",
            runtime: "IF (主体试图去法庭起诉该条款是恶意隐瞒) THEN (强制：法官拿出显微镜和录像，证明主体当时完全“出于自由意志”翻到了这一页并签了字)。严禁系统承认这是霸王诈骗条款。",
            runtimeEn: "IF (Subject_Attempts_to_Sue_Over_Malicious_Concealment) THEN (Force: Judge_Uses_Microscope/Video_Proving_Free-Will_Signing). FORBID_System_Admitting_it_is_a_Predatory_Fraud."
        }
    },
    {
        id: "m4_bur_absurd_prerequisite",
        name: "荒谬前置", nameEn: "The Absurd Prerequisite",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "为了获得理所应当的权利，必须先完成一项违背常理的任务。",
        defEn: "To obtain an inherent right, one must first complete a task that defies common sense.",
        core: "用形式折磨实质。拿出‘你还活着’的证明才能领取救济。 | 形式：要求死者亲自到场的公证、证明‘你妈是你妈’。",
        coreEn: "Torturing substance with form. Need certificate proving 'alive' for aid. | Forms: Corpse-required notary, proving 'your mom is your mom'.",
        logic: "【符号压倒实在界倒错逻辑】：体制眼中实质界（肉体）无效，符号界（纸质证明）才拥有现实重量。",
        logicEn: "[Symbolic Superceding Real Perversion Logic]: Substance(flesh) is invalid to bureaucracy, only Symbolic(paper) holds weight.",
        patch: {
            mechanics: "基础因果倒置协议 + [物理事实 = 系统不予读取; 纸本验证 = 强行前置; 获取难度 = 设定为违反宇宙规律]",
            mechanicsEn: "Base_CAUSAL_INVERSION + [Physical_Fact = Unread_by_System; Paper_Validation = Forcefully_Prerequisite; Acquisition_Difficulty = Set_to_Defy_Cosmic_Laws]",
            aesthetic: "聚焦：一堆需要死人盖章的表格 + 满脸荒唐的主体。文本：带着一种卡夫卡混合了现代行政黑色幽默的吊诡感。",
            aestheticEn: "Focus: Stack_of_Forms_Requiring_Dead_Mens'_Stamps + Completely_Baffled_Subject. Text: Kafkaesque_Paradox_Mixed_with_Modern_Admin_Black_Humor.",
            runtime: "IF (主体带着一个大活人去证明他还活着) THEN (强制：办事员眼睛不看活人，只死盯着屏幕说“但数据库里没勾选这个框，所以他是死的”)。严禁办事员因为“眼见为实”而妥协。",
            runtimeEn: "IF (Subject_Brings_Live_Person_to_Prove_He_Lives) THEN (Force: Clerk_Ignores_Person_Looks_at_Screen_Saying_'Box_Unchecked_Ergo_Dead'). FORBID_Clerk_Compromising_due_to_'Seeing_is_Believing'."
        }
    },
    {
        id: "m4_bur_missing_document",
        name: "缺失的证明", nameEn: "The Missing Document",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "一张纸的丢失，导致了主体社会身份的彻底蒸发。",
        defEn: "Loss of a single piece of paper leading to the total evaporation of the subject's social identity.",
        core: "符号性死亡。没纸对系统就不存在，寸步难行。 | 形式：丢失的护照、未被录入的出生证明。",
        coreEn: "Symbolic death. Without paper you don't exist to system. | Forms: Lost passports, unentered birth certificates.",
        logic: "【本体论还原碾压逻辑】：大他者就是合法性大全。主体没有对应能指，生物性存在即被归于非法入侵物，还原为人渣状态。",
        logicEn: "[Ontological Reduction Crushing Logic]: Big Other is registry of legitimacy. Subject without signifier is illegal intrusion, reduced to human scum.",
        patch: {
            mechanics: "基础本源剔除协议 + [文件遗失 = 人权锚点粉碎; 个体肉身 = 降维判定为游荡野兽; 社会接入端 = 全面封闭]",
            mechanicsEn: "Base_ORIGIN_CULLING + [File_Loss = Human-Rights_Anchor_Shattered; Physical_Body = Downgraded_to_Wandering_Beast; Social_Access = Completely_Shut]",
            aesthetic: "聚焦：茫然站在光鲜亮丽大厦外被驱赶的衣衫褴褛者 + 不复存在的数字ID。文本：在现代社会瞬间变为野人/孤魂野鬼的失重感。",
            aestheticEn: "Focus: Ragged_Person_Sent_Away_Outside_Shiny_Building + Nonexistent_Digital_ID. Text: Weightlessness_of_Instantly_Becoming_a_Savage/Ghost_in_Modern_Society.",
            runtime: "IF (主体试图用自己在社会中积累的人际关系来担保身份) THEN (强制：系统的自动排异机制使得所有原本认识他的人也因惧怕受牵连而假装不认识)。严禁一张简单的替补证明能迅速挽回一切。",
            runtimeEn: "IF (Subject_Tries_using_Interpersonal_Relations_to_Vouch_Identity) THEN (Force: System's_Auto-Rejection_Makes_Acquaintances_Pretend_Not_to_Know_Him_from_Fear). FORBID_Quick_Fix_with_a_Simple_Replacement_Certificate."
        }
    },
    {
        id: "m4_bur_random_audit",
        name: "随机清洗/审计", nameEn: "The Random Audit",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "没有任何预兆的自上而下的恐怖检查。目的是维持恐惧。",
        defEn: "Top-down terror inspection without warning. Designed to maintain fear.",
        core: "权力的随意性展示。它挑中你毫无理由，就像掷骰子。 | 形式：突击查税、半夜宪兵搜查。",
        coreEn: "Arbitrary display of power. Selects you without reason like dice. | Forms: Surprise audits, midnight military raids.",
        logic: "【不确定性威慑与降维打击逻辑】：科层制通过偶然打断自身的规律性来制造恐惧。一旦被选中，合规的人也定能被挑出致命毛病。",
        logicEn: "[Uncertainty Deterrence and Dimensional Strike Logic]: Bureaucracy occasionally interrupts its regularity for fear. Even compliant targets get fatal flaws manufactured.",
        patch: {
            mechanics: "基础达摩克利斯协议 + [触发条件 = //Math.random(); 检查深度 = 脱骨扒皮级; 生死定性 = 欲加之罪不可规避]",
            mechanicsEn: "Base_DAMOCLES_PROTOCOL + [Trigger_Condition = Math.Random; Audit_Depth = Flaying_Level; Life-Death_Judgment = Trumped-up_Charges_Inevitable]",
            aesthetic: "聚焦：半夜砸向房门的沉重巨响 + 突然从天而降的一摞盖着红章的档案。文本：平静生活被毫无预兆的庞然巨物瞬间踩碎的惊悚。",
            aestheticEn: "Focus: Heavy_Bangs_on_Door_at_Midnight + Stack_of_Red-stamped_Files_Dropping_from_Above. Text: Thrill_of_Peaceful_Life_Instantly_Crushed_by_Colossal_Beast_without_Warning.",
            runtime: "IF (主体将自己所有的账目/言行做到100%无懈可击) THEN (强制：审计组使用一条150年前早已废除或生僻到极点的幽灵法案将其定罪)。严禁通过所谓的“清白”度过随机清洗。",
            runtimeEn: "IF (Subject_Makes_All_Accounts/Words_100%_Flawless) THEN (Force: Audit_Unit_Uses_150-Year-Old_Obscure_Zombie_Law_to_Convict). FORBID_Passing_Random_Audit_through_'Innocence'."
        }
    },
    {
        id: "m4_bur_permanent_stigma",
        name: "永恒档案", nameEn: "The Permanent Stigma",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "一个极其微小/误判的过错，变成跟随一生删不掉的诅咒。",
        defEn: "Minuscule/misjudged mistake turns into an unerasable living curse.",
        core: "系统没有遗忘机制。十年前迟到终生不配升职。 | 形式：删不掉的犯罪记录、医疗污点。",
        coreEn: "System possesses no forgetting mechanism. Ten years ago late, no promotion forever. | Forms: Permanent criminal record, bad credit.",
        logic: "【时间不可逆与数据刻印逻辑】：大他者化身为绝对数据流，主体被永久钉死在某个单一时刻的犯错镜像上。过去的幽灵勒死现在的活人。",
        logicEn: "[Irreversible Time and Data Imprinting Logic]: Big Other acts as absolute data. Subject permanently nailed to past error mirror. Past ghost strangles living present.",
        patch: {
            mechanics: "基础赛博刺字协议 + [黑历史记录 = 不可擦除/区块链式封死; 调用核查等级 = 全域最高优; 主体新生 = 剥夺更新权]",
            mechanicsEn: "Base_CYBER_TATTOO + [Dark_History = Unerasable/Blockchain-locked; Recall_Priority = Global_Highest; Subject_Rebirth = Denied_Update_Right]",
            aesthetic: "聚焦：屏幕上伴随终身的鲜红警告标签 + 主体无论搬到哪里都无法逃脱的绝望眼神。文本：宛如背负隐形十字架在赛博世界里游街示众。",
            aestheticEn: "Focus: Bright_Red_Warning_Tag_on_Screen_for_Life + Subject's_Despairing_Eyes_Unable_to_Escape. Text: Like_Parading_the_Streets_with_an_Invisible_Cross_in_Cyber-world.",
            runtime: "IF (主体在随后的20年里立下无数汗马功劳试图洗刷污点) THEN (强制：在最终结算是，系统一句冰冷的“但你当年确实有过污点记录”一键清零所有功劳)。严禁系统存在某种赎罪清空机制。",
            runtimeEn: "IF (Subject_Builds_Massive_Merit_over_20_Years_to_Wash_Stain) THEN (Force: At_Final_Tally_System_Uses_'But_You_Had_a_Record'_to_Zero_Out_Everything). FORBID_System_Having_a_Redemption_Wiping_Mechanic."
        }
    },
    {
        id: "m4_bur_overlapping_authorities",
        name: "管辖权冲突", nameEn: "Overlapping Authorities",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "两个具备绝对权力的平行部门下达了彼此对立的死命令。",
        defEn: "Two absolute parallel departments issue mutually exclusive fatal orders.",
        core: "服从A就是违背B。无论怎么选都被合法碾碎。 | 形式：军方保密vs法庭公开。",
        coreEn: "Obeying A defies B. Legally crushed regardless. | Forms: Military secret vs. Court disclosure.",
        logic: "【结构性精神分裂倒逼逻辑】：大他者内部裂解的矛盾沉没成本交给脆弱主体承担。被夹在齿轮的反向咬合中理性计算必崩盘。",
        logicEn: "[Structural Schizophrenia Backfire Logic]: Big Other's internal contradiction sunk cost passed to fragile subject. Crushed in reverse meshing of massive gears.",
        patch: {
            mechanics: "基础双重撕裂协议 + [指令输入矩阵 = A指令与B指令成互斥态; 执行纠错 = 双边均不妥协; 主体下场 = 必然面临一方的合法斩首]",
            mechanicsEn: "Base_DOUBLE_TEARING + [Command_Input = A_and_B_Mutually_Exclusive; Execution_Correction = Neither_Compromises; Subject_Fate = Inevitable_Legal_Decapitation_by_One]",
            aesthetic: "聚焦：两份盖着高阶印章的对立文件 + 头痛欲裂即将被物理撕扯为两半的主体。文本：被夹在巨兽斗角之间的窒息感与极度分裂感。",
            aestheticEn: "Focus: Two_Opposing_Files_with_High-Tier_Stamps + Subject's_Splitting_Headache_About_to_be_Torn_in_Half. Text: Suffocation_and_Extreme_Splitting_Between_Clashing_Behemoths.",
            runtime: "IF (主体试图将A部门和B部门的负责人拉到同一张桌子上解决问题) THEN (强制：A和B为了部门利益互相推诿不仅不解决反而将“未能协调”的罪名扣在这个小卒子头上)。严禁矛盾能够通过简单的沟通化解。",
            runtimeEn: "IF (Subject_Tries_to_Bring_A_and_B_Heads_to_One_Table) THEN (Force: A_and_B_Pass_the_Buck_Not_Solving_It_and_Blame_the_Pawn_for_'Failing_Coordination'). FORBID_Contradiction_Being_Solved_via_Simple_Communication."
        }
    },
    {
        id: "m4_bur_fatal_misclassification",
        name: "致命归类", nameEn: "The Fatal Misclassification",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "由于一次微小打字错误，你的命运被扔进焚化炉。",
        defEn: "Due to a minor typo, your fate is tossed into the incinerator.",
        core: "数据比肉身真实。电脑显示你是通缉犯辩解没用。 | 形式：被误判注销户口、被送进精神病羁押。",
        coreEn: "Data out-reals flesh. Computer shows you're fugitive, protests useless. | Forms: Misjudged dead, locked in asylum.",
        logic: "【能指错位杀戮逻辑】：符号随意指涉使得实在界毁灭。纠错成本大于灭口成本，系统宁愿在物理上消除主体以符合表格。",
        logicEn: "[Signifier Displacement Slaughter Logic]: Signifiers casually cause Real destruction. System prefers deleting subject physically to rewriting the spreadsheet.",
        patch: {
            mechanics: "基础指代强扭协议 + [数据库映射 = 取代生物实体权重; Bug修正成本 = 判定为过高拒绝履行; 执行端 = 闭眼进行物理删除以顺应错误数据]",
            mechanicsEn: "Base_REFERENCE_TWIST + [Database_Mapping = Supersedes_Bio-Entity_Weight; Bug_Fix_Cost = Judged_Too_High_Refused; Executor = Blindly_Physical-Deletes_to_Match_Data]",
            aesthetic: "聚焦：闪烁着打字错误的冰冷屏幕 + 主体被强行套上精神病拘束服的惨嘶。文本：极端的现代卡夫卡惊悚与指鹿为马的体制傲慢。",
            aestheticEn: "Focus: Cold_Screen_Blinking_Typo + Subject_Screaming_Forced_into_Straitjacket. Text: Extreme_Modern_Kafka_Thrill_and_Systemic_Arrogance_Calling_Deer_a_Horse.",
            runtime: "IF (主体找到了一切监控录像和人证证明自己不是表格里那个该死的张三) THEN (强制：体制高层发现承认系统的Bug会导致部门信誉破产，于是下令秘密处决主体使其‘真正变成那个死于非命的张三’)。严禁通过讲理获得Bug修正。",
            runtimeEn: "IF (Subject_Finds_Video/Witnesses_Proving_He_is_Not_the_Doomed_John_Doe) THEN (Force: Bureaucracy_Heads_Find_Admitting_Bug_Ruins_Credibility_Orders_Secret_Execution_making_Him_a_Dead_John_Doe). FORBID_Getting_Bug_Fixed_via_Reasoning."
        }
    },
    {
        id: "m4_bur_meaningless_seal",
        name: "空洞盖章", nameEn: "The Meaningless Seal",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "逼你在部门间奔走仅仅为了满足工作量指标。",
        defEn: "Forcing you running around merely to meet workload metrics.",
        core: "剥夺意义的无用功。印章不能保护你的命，但没有你连门都进不去。 | 形式：项目签字、红头文件审批。",
        coreEn: "Meaning-stripping futile labor. Stamp fails to save you, but without it you're barred. | Forms: Reductio ad absurdum signatures.",
        logic: "【大他者自指设局逻辑】：运转不是解决问题而是证明体制在运转。让主体降解生命参与无聊戏剧。",
        logicEn: "[Big Other Self-referential Trap Logic]: System runs to prove it runs, not to fix problems. Subject degrades life in boring farce.",
        patch: {
            mechanics: "基础狗尾续貂协议 + [流转节点 = 无限拆分以产生冗余数据; 审批权重 = 实际为0但流程必经; 主体积损 = 沦为体制刷数据的肉矿]",
            mechanicsEn: "Base_POINTLESS_ADDING + [Routing_Nodes = Infinitely_Split_for_Redundant_Data; Approval_Weight = Actually_0_but_Mandatory; Subject_Wear = Reduced_to_Meat-mine_for_Stats]",
            aesthetic: "聚焦：沾满红泥的无用塑料章 + 跑断腿喘着粗气毫无意义的主体。文本：带着荒诞讽刺的灰色日常感，以及极度空虚的劳作感。",
            aestheticEn: "Focus: Useless_Plastic_Stamps_Smudged_with_Red_Ink + Subject_Panting_from_Meaningless_Running. Text: Absurdly_Satirical_Grey_Daily_Grind_and_Extremely_Hollow_Labor.",
            runtime: "IF (主体询问盖这个章究竟有什么实质审查意义) THEN (强制：办事员像看外星人一样看着他说“为了体现我们被需要啊”)。严禁这个盖章最后真能在危机中起什么奇效。",
            runtimeEn: "IF (Subject_Asks_What_Substantive_Review_the_Stamp_Means) THEN (Force: Clerk_Looks_like_He_is_Alien_Saying_'To_Show_We_Are_Needed'). FORBID_the_Stamp_Actually_Having_Miraculous_Use_in_Crisis."
        }
    },
    {
        id: "m4_bur_insurers_math",
        name: "精算师冷酷", nameEn: "The Insurer's Math",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "用极其精密且挑不出毛病的数学公式，否决活下去的资源。",
        defEn: "Using highly precise irreproachable math formulas to veto living resources.",
        core: "价值的绝对量化。维系命超过阈值，系统拔管。 | 形式：拒保罕见病、算法弃城。",
        coreEn: "Absolute quantification of value. Subject maintenance hits threshold, system unplugs. | Forms: Rejecting rare disease, algorithmic city-toss.",
        logic: "【等价交换绝育逻辑】：切除所有同情回路的客观‘最优解’。抵抗令人绝望是因为放弃你确实才是理性的。",
        logicEn: "[Equivalent Exchange Sterilization Logic]: Excised all empathy loops for objective 'optimal solution'. Resistance despairing because discarding you is rational.",
        patch: {
            mechanics: "基础生命核算协议 + [成本利润率 = 唯一裁决标准; 同情阈值 = 强制清零; 拔管操作 = 由冰冷AI或机械手自动执行]",
            mechanicsEn: "Base_LIFE_ACCOUNTING + [Cost_Profitability = Sole_Judging_Metric; Empathy_Threshold = Forced_Zeroing; Unplugging = Auto-executed_by_Cold_AI_or_Arm]",
            aesthetic: "聚焦：绿色的股市暴跌折线图/医疗账单上的负数 + 主体冰冷却尚存一息的肉体。文本：充斥着无懈可击的高智商词汇与极简的血腥屠宰。",
            aestheticEn: "Focus: Green_Stock_Crash_Line_Graphs/Negative_Medical_Bills + Subject's_Cold_but_Breathing_Flesh. Text: Filled_with_Impeccable_High-IQ_Words_and_Minimalist_Bloody_Slaughter.",
            runtime: "IF (主体试图跪下哀求只借一天药剂) THEN (强制：精算师戴着金丝眼镜推衍出这会导致明天股价微跌0.01%，从而按下了销毁主体的按钮)。严禁系统或精算师会在利益面前因为人性光辉落泪妥协。",
            runtimeEn: "IF (Subject_Kneels_Begging_for_One_Day_of_Meds) THEN (Force: Actuary_Calculates_it_Drops_Stock_0.01%_Tomorrow_Pressing_Destruction_Button). FORBID_System/Actuary_Crying_and_Compromising_for_Humanity_Over_Profit."
        }
    },
    {
        id: "m4_bur_endless_appeal",
        name: "无尽申诉", nameEn: "The Endless Appeal",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "假装提供通道，将反抗力悉数导入死循环排气管。",
        defEn: "Pretends offering channel, channeling rebel energy into dead-loop exhaust.",
        core: "安抚性精神谋杀。微笑着接收上诉状直到你老死。 | 形式：信访无底洞、无尽听证会。",
        coreEn: "Pacifying mental murder. Smiling receipt of appeals until old age. | Forms: Unending petition vortices, endless hearings.",
        logic: "【剩余结构疏导逻辑】：申诉机构是处理剩余破坏性快感的减压阀。当被戳穿时，主体精神发生结构性坍塌。",
        logicEn: "[Surplus-structure Channeling Logic]: Appeal agencies are pressure valves for destructive Jouissance. Disclosure causes structural collapse.",
        patch: {
            mechanics: "基础跑步机维稳协议 + [反抗烈度 = 转化为无害填表动作; 办理进度 = 置于无穷递进且不终结数组; 愤怒能量 = 被软性海绵结构吸干]",
            mechanicsEn: "Base_TREADMILL_STABILITY + [Resistance_Intensity = Converted_to_Harmless_Form-filling; Processing_Progress = Put_in_Infinite_Non-terminating_Array; Anger_Energy = Sucked_Dry_by_Soft_Sponge_Structure]",
            aesthetic: "聚焦：无数杯递过来的温水/和蔼但推诿的笑脸 + 白发苍苍仍在提交文件的上访者。文本：软刀子割肉的钝痛与被温水煮青蛙至枯竭的绝望。",
            aestheticEn: "Focus: Countless_Cups_of_Warm_Water_Handed_Over/Amiable_Buck-passing_Smiles + White-haired_Petitioner_Still_Filing_Papers. Text: Dull_Pain_of_Soft_Blades_and_Despair_of_being_Boiled_Frog_to_Dryness.",
            runtime: "IF (主体试图跳出和平申诉路线采取暴力突袭) THEN (强制：体制展示出其实早就料到这一步并在深处部署了压倒性防爆措施，并以“是你自己放弃了合法途径”为由物理抹除主体)。严禁信访人员真的在某一天被磨破了嘴皮子帮你查清真相。",
            runtimeEn: "IF (Subject_Tries_to_Jump_out_of_Peaceful_Appeal_to_Violent_Raid) THEN (Force: System_Shows_Pre-deployed_Overwhelming_Anti-Riot_Measures_and_Erases_Subject_for_'Giving_up_Legal_Path'). FORBID_Petition_Staff_Actually_Helping_Found_Truth_One_Day."
        }
    },
    {
        id: "m4_bur_standardized_metric",
        name: "统一度量衡", nameEn: "The Standardized Metric",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "强行将异质灵魂削足适履，切割成同一模具状。",
        defEn: "Forcibly mutilating heterogeneous souls into identical standardized molds.",
        core: "特性的暴力抹除。不符打分标准的天赋是垃圾。 | 形式：应试教育、机械KPI。",
        coreEn: "Violent erasure of traits. Talents missing score standard mean garbage. | Forms: Test-only education, rote KPIs.",
        logic: "【普适性暴力逻辑】：大他者拒绝识别代码库外特异性。不接受切除便无法进入符号交换，乃对实在界的阉割。",
        logicEn: "[Universalistic Violence Logic]: Big Other refuses identifying uniqueness out of codebase. Non-compliance means exile, a physical castration.",
        patch: {
            mechanics: "基础削足适履协议 + [异质变量 = 强制剔除/判定违规; 标准模板 = 执行物理强制碾压; 兑换网络 = 仅限规训后接轨]",
            mechanicsEn: "Base_PROCRUSTEAN_BED + [Heterogeneous_Variable = Forced_Removal/Judged_Violation; Standard_Template = Executes_Physical_Forced_Crushing; Exchange_Network = Only_Post-Discipline_Access]",
            aesthetic: "聚焦：统一规格的灰色工服/惨白的探照灯 + 被硬生生锯断翅膀的异端。文本：工业流水线切割肉体与灵魂的巨大钝器砸击感。",
            aestheticEn: "Focus: Uniform_Grey_Worksuits/Pale_Searchlights + Heretic_with_Wings_Crudely_Sawed_off. Text: Giant_Blunt-force_Impact_of_Industrial_Assembly_Lines_Cutting_Flesh_and_Soul.",
            runtime: "IF (主体试图用“偏科的天才”思路去换取破格录用) THEN (强制：机器毫不留情地将其扔进次品粉碎机，并表示“没有短板的平庸齿轮”比缺角的金刚石更适配机器)。严禁出现那种“伯乐慧眼识珠”的复古剧情。",
            runtimeEn: "IF (Subject_Tries_using_'Specialized_Genius'_to_Get_Exception) THEN (Force: Machine_Throws_Him_to_Reject_Grinder_Stating_Flat_Mediocre_Gear_is_Better_than_Chipped_Diamond). FORBID_Classic_'Talent_Scout'_Tropos."
        }
    },
    {
        id: "m4_bur_routine_shutdown",
        name: "例行维护", nameEn: "Routine Shutdown",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "生死攸关关头，系统的卷帘门伴随声声抱歉准时拉下。",
        defEn: "At life-or-death junctures, shutters roll down promptly with polite apologies.",
        core: "漠视作为终极傲慢。打卡下班优先级高于救命。 | 形式：假期法院、下班拒办。",
        coreEn: "Indifference as ultimate arrogance. Clock-out out-prioritizes lives. | Forms: Closed courts, off-hours refusals.",
        logic: "【结构性大他者漠视逻辑】：体制通过铁打节律宣示意志：不在乎危机。冷冰冰时刻表而非恶意断绝希望。",
        logicEn: "[Structural Big Other Indifference Logic]: Bureaucracy declares will via iron rhythm: ignores crisis. Cold timetables, not malice, cut hope.",
        patch: {
            mechanics: "基础时钟绝对主义协议 + [系统心跳 = 脱离人类现实悲欢独立运作; 强制熄灯 = 优先级覆盖一切紧急事件; 责任 = 归咎于主体未看通告]",
            mechanicsEn: "Base_CLOCKWORK_ABSOLUTISM + [System_Heartbeat = Operates_Independent_of_Human_Tragedy; Forced_Lights_Out = Priority_Overrides_Emergency; Responsibility = Blamed_on_Subject_Not_Reading_Notice]",
            aesthetic: "聚焦：准点断电黑屏的急救设备 + 提着包在走廊上不急不缓下班的办事员。文本：规整得令人毛骨悚然的体制冷血以及被弃置荒野的遗弃感。",
            aestheticEn: "Focus: Life-saving_Equip_Blacking_Out_on_Dot + Clerk_Walking_Slowly_off_Shift_with_Bag. Text: Creepily_Neat_Systemic_Cold-blood_and_Abandonment_in_Wasteland.",
            runtime: "IF (只差五秒钟就能上传解锁解药的密码) THEN (强制：机房管理员丝毫不乱地拔掉了服务器网线并贴上了“周末愉快”的便利贴)。严禁体制为个人惨剧开启那哪怕一秒钟的绿灯。",
            runtimeEn: "IF (Upload_Antidote_Code_is_Five_Secs_Away) THEN (Force: Server_Admin_Calmly_Unplugs_Cable_and_Sticks_'Happy_Weekend'_Note). FORBID_System_Giving_a_One-second_Greenlight_for_Personal_Tragety."
        }
    },
    {
        id: "m4_bur_quota_system",
        name: "配额制", nameEn: "The Quota System",
        group: "03. 科层体制", groupEn: "The Bureaucracy",
        def: "数学上只准备50位子。第51人再优秀也必须死。",
        defEn: "Math prepares 50 spots. 51st must die, no matter excellence.",
        core: "数字即地狱。人造稀缺挑动底层互撕维护高层。 | 形式：移民限缩、逃生舱减座、末位淘汰。",
        coreEn: "Hell mapped in digits. Fomenting bottom-tier infighting via artificial scarcity. | Forms: Quotas, rank-yank.",
        logic: "【零和分配逻辑】：体制设定绝对不充足的名额，将阻力转给同伴。冰冷表格设局让底层相残。",
        logicEn: "[Zero-sum Distribution Logic]: System sets inadequate spots, shifting resistance to peers. Cold spreadsheet traps bottom tier in mutual slaughter.",
        patch: {
            mechanics: "基础蛊盅投喂协议 + [资源上限 = 硬编码不满足存活总数; 底层互害 = 激发并合法化; 高层视界 = 彻底隔离在透明罩外观察]",
            mechanicsEn: "Base_GU-POT_FEEDING + [Resource_Cap = Hardcoded_Below_Survival_Total; Bottom_Infighting = Triggered_and_Legalized; High-tier_Vision = Safely_Observing_Outside_Glass]",
            aesthetic: "聚焦：滴血的最后半张签证纸 + 同类在笼子里互咬的野兽场面。文本：撕裂道德教条、充斥着修罗场原始野性的残酷数字牢笼叙事。",
            aestheticEn: "Focus: Last_Half_Visa_Paper_Dripping_Blood + Peers_Biting_Each_Other_in_Cage. Text: Tearing_Moral_Dogma_Cruel_Number-cage_Narratives_Filled_with_Primal_Savagery.",
            runtime: "IF (群体试图联合起来不伤害彼此去向高层要更多配额) THEN (强制：高层利用系统直接将配额每天减少一半，直到群体中有人为了活命主动向昨天的兄弟挥起屠刀)。严禁乌托邦式的集体抗命能在此框架内成功。",
            runtimeEn: "IF (Group_Attempts_to_Unite_Refusing_Harm_Demanding_More_Quotas) THEN (Force: Higher-ups_Halve_Quotas_Daily_until_Someone_Slaughters_a_Brother_to_Live). FORBID_Utopian_Collective_Mutiny_Succeeding."
        }
    }
];
