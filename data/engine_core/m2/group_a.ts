import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_A: LibraryItemDef[] = [
    {
        id: "sys_crash",
        name: "金融熔断", nameEn: "Financial Crash",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "银行倒闭，股市归零，数字财富瞬间蒸发。",
        defEn: "Banks failing, stock markets zeroing out, digital wealth evaporating instantly.",
        core: "符号价值的清零。一生积累的“意义”变成了无意义的数字。 | 实在界: 价值的虚构性。",
        coreEn: "Clearing of symbolic value. Life's 'meaning' turns into meaningless numbers. | The Real: Fictionality of value.",
        logic: "【符号价值清零器】：叙事中所有的价值能指（金钱、地位等）被强制标记为'无效'。主体（M1）之前的 M5 努力必须在逻辑上被证伪，迫使其寻找非符号化的生存价值。Tuchē以数字蒸发的形式撞击主体，揭露价值的虚构性。",
        logicEn: "[Symbolic Value Zeroing Device]: All value signifiers (money, status, etc.) must be forcibly marked as 'invalid'. The subject's previous M5 efforts must be logically falsified, forcing non-symbolic survival. Tuchē strikes via digital evaporation, exposing fictionality of value.",
        patch: {
            mechanics: "基础创伤协议 + [价值能指 = 强制无效; M5历史努力 = 逻辑证伪; 符号秩序裂口 = 经济层]",
            mechanicsEn: "Base_TRAUMA + [Value_Signifiers = Force_Invalid; M5_Historical_Effort = Logically_Falsified; Symbolic_Breach = Economic_Layer]",
            aesthetic: "聚焦：归零的数字屏幕 + 蒸发的账户余额。文本：符号价值瞬间蒸发的、如金融黑洞般的叙述。",
            aestheticEn: "Focus: Zeroing_Digital_Screens + Evaporating_Balances. Text: Symbolic_Value_Instant_Evaporation_Financial_Black_Hole_Narration.",
            runtime: "IF (主体试图通过旧有价值体系重建安全感) THEN (强制：所有重建尝试返回零值)。严禁通过经济手段恢复符号秩序的完整性。",
            runtimeEn: "IF (Subject_Attempts_Rebuilding_via_Old_Value_System) THEN (Force: All_Rebuilding_Returns_Zero). FORBID_Economic_Restoration_of_Symbolic_Order_Integrity."
        }
    },
    {
        id: "sys_blackout",
        name: "全城停电", nameEn: "The Blackout",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "电网瘫痪，城市陷入绝对黑暗，通讯中断。",
        defEn: "The grid collapses, the city falls into absolute darkness, communications cut.",
        core: "现代文明的维生系统断开。人退化为黑暗中的野兽。 | 实在界: 技术的脆弱。",
        coreEn: "Modern civilization's life support disconnected. Humans regress to beasts in the dark. | The Real: Fragility of technology.",
        logic: "【文明断电器】：强制关闭所有基于'可见性'的 M4 系统。主体的感知必须被限制在触觉和听觉内，叙事逻辑强调'文明外壳'在黑暗中的瞬间剥落。Tuchē以光的消失撞击，暴露技术的脆弱性。",
        logicEn: "[Civilization Blackout Switch]: Forcibly disable all visibility-based M4 systems. Perception limited to touch and hearing; narrative logic emphasizes instant stripping of 'civilization shell' in the dark. Tuchē strikes via light-extinction, exposing fragility of technology.",
        patch: {
            mechanics: "基础创伤协议 + [可见性M4 = 强制关闭; 感知通道 = 仅触觉/听觉; 文明壳 = 即时剥落]",
            mechanicsEn: "Base_TRAUMA + [Visibility_M4 = Force_Shutdown; Perception_Channel = Touch/Hearing_Only; Civilization_Shell = Instant_Strip]",
            aesthetic: "聚焦：绝对黑暗 + 仅有触感和声音的感官残留。文本：文明退化为野兽本能的、黑暗中摸索的叙述。",
            aestheticEn: "Focus: Absolute_Darkness + Tactile/Auditory_Residue_Only. Text: Civilization_Regressing_to_Beast_Instinct_Groping_in_Dark_Narration.",
            runtime: "IF (主体试图恢复视觉主导的秩序) THEN (强制：所有视觉依赖的系统返回黑屏)。严禁通过技术手段恢复光明或文明秩序。",
            runtimeEn: "IF (Subject_Attempts_Visual_Order_Restoration) THEN (Force: All_Visual_Systems_Return_Blackscreen). FORBID_Technological_Restoration_of_Light_or_Civilized_Order."
        }
    },
    {
        id: "sys_fired",
        name: "突然解雇", nameEn: "The Layoff",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "工卡失效，被保安护送离开，并没有理由。",
        defEn: "ID card failing, escorted out by security without reason.",
        core: "被大他者（公司）像排泄物一样丢弃。社会功能的丧失。 | 实在界: 工具人的真相。",
        coreEn: "Discarded by the Big Other (the firm) like waste. Loss of social function. | The Real: The truth of being a tool.",
        logic: "【符号排泄装置】：主体与 M4（秩序）之间的符号关联被彻底切断。主体在文本中必须表现出一种'无位置者'的眩晕感，此前的专业台词库在逻辑上被禁用。Tuchē以排泄的形式降临——主体被大他者作为废物排出。",
        logicEn: "[Symbolic Excretion Device]: The symbolic link between the subject and M4 (Order) is severed. The subject must exhibit 'placeless' vertigo; previous professional dialogue pools are disabled. Tuchē descends as excretion—subject expelled by the Big Other as waste.",
        patch: {
            mechanics: "基础创伤协议 + [符号关联 = 彻底切断; 专业台词库 = 逻辑禁用; 社会位置 = 强制清空]",
            mechanicsEn: "Base_TRAUMA + [Symbolic_Link = Completely_Severed; Professional_Dialogue_Pool = Logically_Disabled; Social_Position = Force_Emptied]",
            aesthetic: "聚焦：失效的工卡 + 保安护送的走廊。文本：如排泄物般被丢弃的、丧失一切社会坐标的叙述。",
            aestheticEn: "Focus: Deactivated_ID_Card + Security_Escort_Corridor. Text: Discarded-as-Waste_All_Social_Coordinates_Lost_Narration.",
            runtime: "IF (主体试图重新激活职业身份) THEN (强制：身份系统返回'已注销')。严禁通过职业手段恢复符号位置。",
            runtimeEn: "IF (Subject_Attempts_Professional_Identity_Reactivation) THEN (Force: Identity_System_Returns_Deactivated). FORBID_Professional_Means_Restoring_Symbolic_Position."
        }
    },
    {
        id: "sys_eviction",
        name: "强制驱逐", nameEn: "Eviction",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "房东或银行收回房子，行李被扔在街上。",
        defEn: "Landlord or bank reclaiming the house, belongings thrown on the street.",
        core: "庇护所的丧失。物理空间上的“无家可归”。 | 实在界: 归属感的剥夺。",
        coreEn: "Loss of shelter. Physical 'homelessness'. | The Real: Deprivation of belonging.",
        logic: "【庇护所溶解器】：主体的'内部空间'逻辑崩溃。所有的动作 M5 都必须在'公共曝光'下完成，无法进入私人领域的隐蔽性。实在界表现为对'气候'和'他者凝视'的无力抗拒。Tuchē以空间剥夺的形式攻击归属感的根基。",
        logicEn: "[Shelter Dissolution Device]: The subject's 'internal space' logic collapses. All M5 actions must be performed under 'public exposure'; no private concealment. The Real manifests as helpless resistance to 'weather' and 'the Other's gaze'. Tuchē attacks belonging via spatial deprivation.",
        patch: {
            mechanics: "基础创伤协议 + [内部空间 = 逻辑崩溃; M5执行条件 = 强制公共曝光; 私密领域 = 不可进入]",
            mechanicsEn: "Base_TRAUMA + [Internal_Space = Logic_Collapse; M5_Execution = Force_Public_Exposure; Private_Domain = Inaccessible]",
            aesthetic: "聚焦：街上的行李 + 暴露在天气中的身体。文本：无处藏身的、每个动作都被他者凝视的叙述。",
            aestheticEn: "Focus: Luggage_on_Street + Body_Exposed_to_Weather. Text: Nowhere-to-Hide_Every_Action_Under_Other_Gaze_Narration.",
            runtime: "IF (主体试图寻找私密空间) THEN (强制：所有空间返回'公共/开放')。严禁恢复任何形式的私密庇护所。",
            runtimeEn: "IF (Subject_Seeks_Private_Space) THEN (Force: All_Spaces_Return_Public/Open). FORBID_Restoration_of_Any_Private_Shelter."
        }
    },
    {
        id: "sys_arrest",
        name: "错误逮捕", nameEn: "False Arrest",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "警察破门而入，被戴上手铐，虽然你是无辜的。",
        defEn: "Police breaking in, handcuffed despite being innocent.",
        core: "卡夫卡式的噩梦。法律不再保护你，而是变成压迫你的机器。 | 实在界: 律法的荒谬。",
        coreEn: "Kafkaesque nightmare. The Law no longer protects but oppresses. | The Real: Absurdity of the Law.",
        logic: "【律法暴力翻转器】：大他者（M4）被解析为'纯粹的暴力能指'。主体的辩解台词在逻辑设定中必须被系统性地误读或忽略，强制表现律法的无差异性攻击。Tuchē以'法'的倒转形式降临——保护者成为迫害者，秩序成为恐怖。",
        logicEn: "[Law-Violence Inverter]: The Big Other (M4) is parsed as 'pure violent signifier'. The subject's pleas must be systematically misread or ignored, forcing a demonstration of the Law's indifferent assault. Tuchē descends as the Law's inversion—protector becomes persecutor, order becomes terror.",
        patch: {
            mechanics: "基础创伤协议 + [M4功能 = 暴力翻转; 辩解系统 = 系统性误读; 法保护性 = 完全反转]",
            mechanicsEn: "Base_TRAUMA + [M4_Function = Violence_Inversion; Defense_System = Systematic_Misread; Law_Protection = Fully_Reversed]",
            aesthetic: "聚焦：破门而入的靴子 + 冰冷的手铐金属触感。文本：卡夫卡式的、逻辑失效的审判叙述。",
            aestheticEn: "Focus: Door-Crashing_Boots + Cold_Handcuff_Metal_Touch. Text: Kafkaesque_Logic-Void_Trial_Narration.",
            runtime: "IF (主体尝试依据法律为自己辩护) THEN (强制：辩护被系统重新编码为'罪证')。严禁法律系统对主体产生保护效果。",
            runtimeEn: "IF (Subject_Attempts_Legal_Defense) THEN (Force: Defense_Recoded_as_Evidence_of_Guilt). FORBID_Legal_System_Producing_Protective_Effect_on_Subject."
        }
    },
    {
        id: "sys_scandal",
        name: "丑闻曝光", nameEn: "Public Scandal",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "私密信息被公开，名誉扫地，社会性死亡。",
        defEn: "Private info made public, reputation ruined, social death.",
        core: "面具（Persona）被撕碎。在大众凝视下的赤裸感。 | 实在界: 荣誉的毁灭。",
        coreEn: "Persona torn apart. Nakedness under mass gaze. | The Real: Destruction of honor.",
        logic: "【人格面具粉碎器】：主体的 M3（幻想形象/Persona）被强制坍塌。主体的所有 M5 动作都必须背负着'自我厌恶'的修饰语，直到建立新的掩盖机制。Tuchē以公众凝视的形式，将主体的'秘密内核'暴力翻出——面具之下的虚空被迫面对日光。",
        logicEn: "[Persona Shredder]: The subject's M3 (Fantasy Image/Persona) is forced to collapse. All M5 actions must carry 'self-loathing' modifiers until a new concealment mechanism is established. Tuchē arrives as public gaze, violently inverting the secret core—the void beneath the mask forced into daylight.",
        patch: {
            mechanics: "基础创伤协议 + [M3幻想形象 = 强制坍塌; M5修饰语 = 自我厌恶(持续); 公共凝视 = 锁定穿透]",
            mechanicsEn: "Base_TRAUMA + [M3_Fantasy_Image = Force_Collapse; M5_Modifier = Self-Loathing(Persistent); Public_Gaze = Locked_Penetrating]",
            aesthetic: "聚焦：刷屏的截图 + 无处可逃的评论弹幕。文本：面具碎裂后赤裸暴露的、社会性死亡叙述。",
            aestheticEn: "Focus: Scrolling_Screenshots + Inescapable_Comment_Barrage. Text: Post-Mask_Shatter_Naked_Exposure_Social_Death_Narration.",
            runtime: "IF (主体试图用新面具覆盖旧丑闻) THEN (强制：新面具被即时穿透)。严禁M3幻想形象在本次遭遇周期内自动修复。",
            runtimeEn: "IF (Subject_Attempts_New_Mask_Over_Old_Scandal) THEN (Force: New_Mask_Instantly_Penetrated). FORBID_M3_Fantasy_Image_Auto-Repair_in_Current_Encounter_Cycle."
        }
    },
    {
        id: "sys_no_signal",
        name: "断网孤岛", nameEn: "No Signal",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "在荒野或封锁区，手机失去信号，与世界失联。",
        defEn: "In the wilderness or a lock-zone, no phone signal, disconnected.",
        core: "数字脐带断裂。现代主体在离线状态下的存在焦虑。 | 实在界: 连接的断裂。",
        coreEn: "Digital umbilical cord severed. Existence anxiety in the offline state. | The Real: Rupture of connection.",
        logic: "【数字脐带切断器】：主体的 M1 认知模型被剥夺了'远程确认'能力。叙事视野被强制锁定在物理范围，主体必须通过最原始的 M5（行走、叫喊）来尝试重建 M4 连接。Tuchē以'信号消失'的形式，切断主体与象征界之间的数字脐带。",
        logicEn: "[Digital Umbilical Cutter]: The subject's M1 cognitive model is stripped of 'remote confirmation'. Narrative field forcibly locked to physical range, requiring primitive M5 (walking, shouting) to attempt M4 reconnection. Tuchē severs the digital umbilical cord between subject and Symbolic via signal death.",
        patch: {
            mechanics: "基础创伤协议 + [远程确认 = 剥夺; 叙事视野 = 锁定物理范围; M5降级 = 原始模式(行走/叫喊)]",
            mechanicsEn: "Base_TRAUMA + [Remote_Confirmation = Stripped; Narrative_Field = Locked_Physical_Range; M5_Downgrade = Primitive_Mode(Walking/Shouting)]",
            aesthetic: "聚焦：无信号的手机屏幕 + 荒野中的孤立身影。文本：数字化存在感崩溃的、退化为原始感知的叙述。",
            aestheticEn: "Focus: No-Signal_Phone_Screen + Isolated_Figure_in_Wilderness. Text: Digital_Existence_Collapse_Regressing_to_Primitive_Perception_Narration.",
            runtime: "IF (主体试图通过数字手段恢复连接) THEN (强制：所有数字通道返回'无信号')。严禁任何远程通信手段恢复功能。",
            runtimeEn: "IF (Subject_Attempts_Digital_Reconnection) THEN (Force: All_Digital_Channels_Return_No_Signal). FORBID_Any_Remote_Communication_Channel_Restoration."
        }
    },
    {
        id: "sys_identity_theft",
        name: "身份被盗", nameEn: "Identity Theft",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "有人用你的名字生活、贷款、犯罪。你成了冒牌货。",
        defEn: "Someone using your name—living, borrowing, committing crimes. You're a fake.",
        core: "我是谁？如果档案说我不是我，那我就真的不存在了。 | 实在界: 身份的符号性。",
        coreEn: "Who am I? If the records say I am not me, I don't exist. | The Real: Symbolicity of identity.",
        logic: "【身份拓扑置换器】：主体（M1）与自身的能指'名字'发生置换——'我'变成了一个指向他者的符号。文本逻辑中必须出现'合法化危机'，所有权威系统在识别主体时必须首先输出'非我/冒名'的结果。Tuchē以'能指的被盗'攻击主体存在的根基——如果名字不是我的，'我'也不存在。",
        logicEn: "[Identity Topology Displacer]: The M1 subject and its signifier 'name' undergo displacement—'I' becomes a symbol pointing to an Other. Text logic must manifest 'legitimacy crisis'; all authority systems must first output 'not-self/impostor' when identifying the subject. Tuchē attacks existence via signifier-theft—if name is not mine, 'I' ceases to exist.",
        patch: {
            mechanics: "基础创伤协议 + [名字能指 = 置换/被盗; 权威系统 = 输出'非我'; 合法性 = 彻底悬置]",
            mechanicsEn: "Base_TRAUMA + [Name_Signifier = Displaced/Stolen; Authority_System = Output_Not-Self; Legitimacy = Completely_Suspended]",
            aesthetic: "聚焦：错误的证件照 + 系统中'不存在'的红色警告。文本：身份的符号性坍塌、存在被否定的叙述。",
            aestheticEn: "Focus: Wrong_ID_Photo + System_Nonexistent_Red_Warning. Text: Symbolic_Identity_Collapse_Existence_Denied_Narration.",
            runtime: "IF (主体出示自我身份证明) THEN (强制：系统将其识别为'冒名者')。严禁权威系统确认主体的真实身份。",
            runtimeEn: "IF (Subject_Presents_Identity_Proof) THEN (Force: System_Identifies_as_Impostor). FORBID_Authority_System_Confirming_Subject_True_Identity."
        }
    },
    {
        id: "sys_quarantine",
        name: "强制隔离", nameEn: "Quarantine",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "突发疫情封锁，被困在狭小空间，物资短缺。",
        defEn: "Sudden pandemic lockdown, trapped in tight quarters, shortages.",
        core: "例外状态 (State of Exception)。生物生存权压倒了自由权。 | 实在界: 自由的幻觉。",
        coreEn: "State of Exception. Surviving biological rights over freedom. | The Real: Illusion of freedom.",
        logic: "【例外状态封锁器】：空间的'拓扑闭合'逻辑。叙事必须围绕这块极其狭窄的物理边界展开，主体的 M1 欲望被暴力缩减为'最底层的生理需求'。Tuchē以'例外状态'的形式降临——生物生存权压倒自由权，暴露自由的幻加性。",
        logicEn: "[State of Exception Lockdown]: Topological closure of space. Narrative must center on extremely narrow physical boundary; the subject's M1 desire is violently reduced to 'bottom-tier biological needs'. Tuchē descends as 'State of Exception'—biological survival overrides freedom, exposing freedom's illusory nature.",
        patch: {
            mechanics: "基础创伤协议 + [空间拓扑 = 强制闭合; M1欲望 = 暴力缩减至生理层; 自由参数 = 归零]",
            mechanicsEn: "Base_TRAUMA + [Spatial_Topology = Force_Closure; M1_Desire = Violently_Reduced_to_Biological; Freedom_Parameter = Zeroed]",
            aesthetic: "聚焦：口罩下的呼吸 + 密闭空间的壁。文本：生存空间急剧压缩的、纯籹生物学叙述。",
            aestheticEn: "Focus: Breathing_Through_Mask + Sealed_Room_Walls. Text: Living_Space_Violently_Compressed_Pure_Biological_Narration.",
            runtime: "IF (主体试图突破隔离边界) THEN (强制：边界返回'强化封锁')。严禁主体通过任何手段恢复超出生理维度的欲望。",
            runtimeEn: "IF (Subject_Attempts_Boundary_Breach) THEN (Force: Boundary_Returns_Enhanced_Lockdown). FORBID_Subject_Restoring_Desire_Beyond_Biological_Dimension."
        }
    },
    {
        id: "sys_draft",
        name: "战争征召", nameEn: "The Draft",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "收到入伍通知书，被迫卷入一场不属于你的战争。",
        defEn: "Draft notice received, forced into a war not your own.",
        core: "身体充公。个人命运被宏大叙事强行劫持。 | 实在界: 权力的暴力。",
        coreEn: "Body requisitioned. Personal fate hijacked by grand narratives. | The Real: Violence of power.",
        logic: "【身体征用装置】：主体的 M1 指令集被 M4（军队/宏大叙事）强行覆写。所有的个体意图在叙事中必须表现为'对命令的服从或无效的挣扎'。身体被物化为'单位'。Tuchē以'征召令'的形式降临——个人命运被宏大叙事强行劫持。",
        logicEn: "[Body Requisition Device]: The subject's M1 instruction set is overridden by M4 (Army/Grand Narrative). All individual intentions must manifest as 'obedience to orders or futile struggle'. Body reified as a 'unit'. Tuchē descends as 'draft notice'—personal fate hijacked by grand narrative.",
        patch: {
            mechanics: "基础创伤协议 + [M1指令集 = M4强制覆写; 个体意志 = 强制服从/无效; 身体 = 物化为单位]",
            mechanicsEn: "Base_TRAUMA + [M1_Instructions = M4_Force_Override; Individual_Will = Force_Obey/Futile; Body = Reified_as_Unit]",
            aesthetic: "聚焦：入伍通知书的红色印章 + 制服的粗糙质感。文本：个体被机器吐出的号码吞噬的叙述。",
            aestheticEn: "Focus: Draft_Notice_Red_Stamp + Uniform_Coarse_Texture. Text: Individual_Swallowed_by_Machine_Generated_Numbers_Narration.",
            runtime: "IF (主体试图表达个人意志) THEN (强制：个人意志被重新编码为'抵抗命令'并受罚)。严禁主体的个体叙事压过宏大叙事。",
            runtimeEn: "IF (Subject_Expresses_Individual_Will) THEN (Force: Individual_Will_Recoded_as_Insubordination_and_Punished). FORBID_Subject_Individual_Narrative_Overriding_Grand_Narrative."
        }
    },
    {
        id: "sys_censorship",
        name: "作品被禁", nameEn: "The Ban",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "毕生心血被系统删除、销毁或封禁。",
        defEn: "Life's work deleted, destroyed, or banned by the system.",
        core: "话语权的阉割。你的声音被判定为噪音。 | 实在界: 表达的窒息。",
        coreEn: "Castration of voice. Your sound judged as noise. | The Real: Suffocation of expression.",
        logic: "【话语权阑割器】：主体的 M3（精神产出）在符号界消失。叙事强调一种'虚无的努力'——主体说话，但其言说在 M4 系统中返回的是'404'或空白。Tuchē以'禁言'的形式攻击——声音被判定为噪音，表达被判定为违禁。",
        logicEn: "[Voice Castration Device]: The subject's M3 (Spiritual Output) vanishes from the Symbolic. Narrative emphasizes 'futile effort'—subject speaks, but speech returns '404' or blank in M4 system. Tuchē attacks as 'silencing'—sound judged as noise, expression judged as transgression.",
        patch: {
            mechanics: "基础创伤协议 + [M3精神产出 = 符号界消失; 言说系统 = 返回404/空白; 话语权 = 阑割]",
            mechanicsEn: "Base_TRAUMA + [M3_Spiritual_Output = Vanished_from_Symbolic; Speech_System = Returns_404/Blank; Voice_Authority = Castrated]",
            aesthetic: "聚焦：被删除的页面 + 消失的书架。文本：声音被系统性吸收的、如对着墙壁说话的叙述。",
            aestheticEn: "Focus: Deleted_Pages + Vanished_Bookshelves. Text: Voice_Systematically_Absorbed_Speaking-to-a-Wall_Narration.",
            runtime: "IF (主体试图重新发布作品) THEN (强制：发布被系统即时删除/封禁)。严禁主体的M3产出在符号界获得任何可见性。",
            runtimeEn: "IF (Subject_Attempts_Republishing) THEN (Force: Publication_Instantly_Deleted/Banned). FORBID_Subject_M3_Output_Gaining_Any_Visibility_in_Symbolic."
        }
    },
    {
        id: "sys_ai_replace",
        name: "AI替代", nameEn: "Obsolete",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "发现机器能比你做得更好、更快、更便宜。",
        defEn: "Finding a machine that does it better, faster, cheaper.",
        core: "价值归零。人类在技术进化面前的无用感。 | 实在界: 能力的过时。",
        coreEn: "Value zeroed. Feeling useless in the face of tech evolution. | The Real: Obsolescence of ability.",
        logic: "【能力淀多河装置】：主体的所有专业技能被强制重新定义为'低效率的冗余'。叙事焦点放在主体逐渐失去'行动逻辑'（M5）的过程——不是被解雇，而是被证明为多余。Tuchē以'替代'的形式降临，存在不是被拒绝而是被无视。",
        logicEn: "[Ability Obsolescence Device]: All subject's professional skills are forcibly redefined as 'inefficient redundancy'. Narrative focuses on the subject's gradual loss of 'action logic' (M5)—not fired, but proved redundant. Tuchē descends as 'replacement'—existence not rejected but ignored.",
        patch: {
            mechanics: "基础创伤协议 + [专业技能 = 重定义为冗余; M5行动逻辑 = 逐渐失效; 存在价值 = 被证伪而非被拒绝]",
            mechanicsEn: "Base_TRAUMA + [Professional_Skills = Redefined_as_Redundancy; M5_Action_Logic = Gradually_Invalidated; Existential_Value = Falsified_Not_Rejected]",
            aesthetic: "聚焦：比人快七倍的机械臂 + 被清空的工位。文本：能力渐变为无用的、被技术无声取代的叙述。",
            aestheticEn: "Focus: Robotic_Arm_Seven_Times_Faster + Emptied_Workstation. Text: Ability_Becoming_Useless_Silently_Replaced_by_Technology_Narration.",
            runtime: "IF (主体试图证明自己仍有价值) THEN (强制：机器即时展示更优结果)。严禁主体的M5动作在效率上超越或匹敌机器。",
            runtimeEn: "IF (Subject_Attempts_Proving_Still_Valuable) THEN (Force: Machine_Instantly_Demonstrates_Superior_Result). FORBID_Subject_M5_Actions_Exceeding_or_Matching_Machine_Efficiency."
        }
    },
    {
        id: "sys_visa_denied",
        name: "签证拒签", nameEn: "Visa Denied",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "被拒绝入境或驱逐出境，滞留在机场/边境。",
        defEn: "Entry denied or deported, stranded at airport/border.",
        core: "无国籍者。被困在两个法律体系的缝隙中。 | 实在界: 边界的冷酷。",
        coreEn: "Stateless. Stuck in the rifts between two legal systems. | The Real: Coldness of borders.",
        logic: "【边界拓扑死循环器】：主体的 M1 逻辑处于'无主之地'的死循环中。动作 M5 被物理边界强行阻断，主体在符号界变成了一个'待处理的数据包'。Tuchē以边界的冷酷形式降临——主体被困在两个法律体系的缝雙中，成为无国籍的侧外者。",
        logicEn: "[Border Topology Dead-Loop]: The subject's M1 logic is in a 'no-man's-land' dead loop. M5 actions are physically blocked by boundaries; subject becomes a 'packet pending processing' in the Symbolic. Tuchē descends as border's coldness—subject trapped between two legal systems, becoming a stateless outsider.",
        patch: {
            mechanics: "基础创伤协议 + [M1逻辑 = 死循环; M5动作 = 物理边界阻断; 符号位置 = 待处理包]",
            mechanicsEn: "Base_TRAUMA + [M1_Logic = Dead_Loop; M5_Action = Physically_Blocked; Symbolic_Position = Packet_Pending]",
            aesthetic: "聚焦：机场转机区的无尽等待 + 边境铁丝网。文本：被困在缝雙中的、既不属于此处也不属于彼处的叙述。",
            aestheticEn: "Focus: Airport_Transit_Zone_Endless_Wait + Border_Barbed_Wire. Text: Trapped-in-Rift_NoBelong-Here-Nor-There_Narration.",
            runtime: "IF (主体试图穿越边界) THEN (强制：双向拒绝——同时被两个系统排斥)。严禁任何法律系统接纳主体。",
            runtimeEn: "IF (Subject_Attempts_Border_Crossing) THEN (Force: Dual_Rejection—Both_Systems_Repel). FORBID_Any_Legal_System_Accepting_Subject."
        }
    },
    {
        id: "sys_bankruptcy",
        name: "破产清算", nameEn: "Bankruptcy",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "债务违约，资产被贴上封条，一无所有。",
        defEn: "Debt default, assets sealed, nothing left.",
        core: "信用体系的死亡。在资本主义社会中的“肉体消灭”。 | 实在界: 匮乏的降临。",
        coreEn: "Death of the credit system. 'Physical annihilation' in a capitalist society. | The Real: Descent of lack.",
        logic: "【符号负债占领器】：主体的 M1 被'负债（缺失）'彻底占领。每一处资产的剥离在文本逻辑中都必须在M7层面呼应主体人格的一次'部分剥离'。Tuchē以物质的绝对匾乏降临——信用体系死亡，主体在资本主义中被'肉体消灭'。",
        logicEn: "[Symbolic Debt Occupation Device]: Subject's M1 is occupied by 'debt (lack)'. Each asset stripping must echo a 'partial detachment' of subject's personality at M7 level. Tuchē descends as absolute material deprivation—credit system death, subject 'physically annihilated' in capitalism.",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 负债/缺失占领; 资产剥离 = 对应M7人格剥离; 信用系统 = 死亡]",
            mechanicsEn: "Base_TRAUMA + [M1 = Debt/Lack_Occupation; Asset_Strip = Maps_to_M7_Personality_Detachment; Credit_System = Dead]",
            aesthetic: "聚焦：贴着封条的家具 + 归零的银行卫星。文本：存在被一层层剥离的、缺失如潮水涌入的叙述。",
            aestheticEn: "Focus: Furniture_with_Sealing_Tape + Zeroed_Bank_Statement. Text: Existence_Stripped_Layer_by_Layer_Lack_Flooding_In_Narration.",
            runtime: "IF (主体试图重建信用) THEN (强制：每次重建尝试都生成更大的债务)。严禁信用体系对主体产生任何正值反馈。",
            runtimeEn: "IF (Subject_Attempts_Credit_Rebuilding) THEN (Force: Each_Rebuild_Generates_Greater_Debt). FORBID_Credit_System_Producing_Any_Positive_Feedback_for_Subject."
        }
    },
    {
        id: "sys_betrayal_corp",
        name: "组织背叛", nameEn: "Agency Betrayal",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "一直效忠的组织/公司决定牺牲你作为替罪羊。",
        defEn: "The organization you served decides to sacrifice you as a scapegoat.",
        core: "大他者的恶意。信仰体系的崩塌. | 实在界: 忠诚的虚妄。",
        coreEn: "The Other's malice. Collapse of the belief system. | The Real: Vanity of loyalty.",
        logic: "【M4→M2创伤源翻转器】：主体的 M4 支柱（信仰体系/组织）突然转变为 M2 攻击源。这种逻辑翻转必须导致 M1 运行核心产生极其剧烈的'内部冲突'和'方向感失陷'。Tuchē以“徽号的反噬”形式降临——你的俠义莫过于大他者的一句笑话。",
        logicEn: "[M4→M2 Trauma Source Inverter]: The subject's M4 pillar (belief system/organization) suddenly transforms into M2 attack source. This logical flip must cause M1 core to generate extreme 'internal conflict' and 'loss of direction'. Tuchē descends as 'the badge biting back'—your loyalty is nothing but the Big Other's joke.",
        patch: {
            mechanics: "基础创伤协议 + [M4支柱 = 突变为M2攻击源; M1核心 = 极度内部冲突; 信仰体系 = 坍塌为威胁]",
            mechanicsEn: "Base_TRAUMA + [M4_Pillar = Transforms_to_M2_Attack_Source; M1_Core = Extreme_Internal_Conflict; Belief_System = Collapses_into_Threat]",
            aesthetic: "聚焦：曾经的徽章变成射向你的子弹 + 组织后门前的废弃数据。文本：忠诚被背叛的、大他者的恶意全面爆发的叙述。",
            aestheticEn: "Focus: Badge_Turned_into_Bullet_Aimed_at_You + Discarded_Data_Outside_Organization_Backdoor. Text: Loyalty_Betrayed_Big_Other_Malice_Full_Eruption_Narration.",
            runtime: "IF (主体试图重新信任组织) THEN (强制：组织再次以更残酷的方式背叛)。严禁M4支柱在本次遭遇周期内恢复保护功能。",
            runtimeEn: "IF (Subject_Attempts_Re-Trusting_Organization) THEN (Force: Organization_Betrays_Again_More_Cruelly). FORBID_M4_Pillar_Restoring_Protective_Function_in_Current_Encounter_Cycle."
        }
    },
    {
        id: "sys_lawsuit",
        name: "天价诉讼", nameEn: "The Lawsuit",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "收到律师函，面临巨额赔偿或牢狱之灾。",
        defEn: "Legal notice received, facing huge fines or prison.",
        core: "语言的暴力。生活被卷入繁琐而致命的法律程序。 | 实在界: 规则的重压。",
        coreEn: "Linguistic violence. Life caught in fatal legal procedures. | The Real: Weight of rules.",
        logic: "【语言暴力缚罢器】：主体的 M1 被卷入'文字的游戏'。所有的动作 M5 都必须受到相关法律条款（M4）的后台检测和拖累，行动力被严重的文书工作逻辑削减。Tuchē以语言的暴力形式降临——生活被繁琐而致命的法律程序吸干。",
        logicEn: "[Linguistic Violence Snare]: The subject's M1 is embroiled in a 'game of words'. All M5 actions are back-checked and dragged by legal clauses (M4); agency is reduced by heavy paperwork logic. Tuchē descends as linguistic violence—life drained by tedious, lethal legal procedures.",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 卷入文字游戏; M5行动 = M4后台检测拖累; 行动力 = 文书逻辑削减]",
            mechanicsEn: "Base_TRAUMA + [M1 = Embroiled_in_Word_Game; M5_Action = M4_Backdoor_Check_and_Drag; Agency = Paperwork_Logic_Reduced]",
            aesthetic: "聚焦：邮箱中的律师函 + 印刷的法律条文海洋。文本：被语言的构建反噬的、词语变成牢笼的叙述。",
            aestheticEn: "Focus: Lawyer_Letter_in_Mailbox + Ocean_of_Printed_Legal_Clauses. Text: Devoured_by_Linguistic_Constructs_Words_Becoming_Prison_Narration.",
            runtime: "IF (主体试图忽略法律程序) THEN (强制：程序自动升级为更严厉的惩罚)。严禁主体的M5行动绕过法律条款的后台检测。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Legal_Process) THEN (Force: Process_Auto-Escalates_to_Harsher_Penalty). FORBID_Subject_M5_Actions_Bypassing_Legal_Clause_Backdoor_Check."
        }
    },
    {
        id: "sys_exam_fail",
        name: "落榜", nameEn: "Exam Failure",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "高考/公考失败，阶级跃升的通道关闭。",
        defEn: "Failing high-stakes exams; social mobility pathways closed.",
        core: "被筛选机制淘汰。对未来的预期瞬间坍塌。 | 实在界: 命运的判决。",
        coreEn: "Eliminated by screening. Future expectations collapse instantly. | The Real: Verdict of fate.",
        logic: "【升维幻想爆破器】：主体的 M3（升维幻想/阶级跃升）破灭。叙事强制进入'下坠逻辑'，所有的环境描写都必须表现出对主体的排斥和'平庸化'压力。Tuchē以筛选机制的形式降临——命运的判决以一个数字定义未来的边界。",
        logicEn: "[Ascension Fantasy Detonator]: The subject's M3 (Ascension Fantasy/Class Leap) shatters. Narrative forces entry into 'descending logic'; all environmental descriptions must reflect exclusion and 'mediocritization' pressure on subject. Tuchē descends as screening mechanism—fate's verdict defines future's boundary with a single number.",
        patch: {
            mechanics: "基础创伤协议 + [M3升维幻想 = 爆破; 叙事方向 = 强制下坠; 环境压力 = 平庸化攻击]",
            mechanicsEn: "Base_TRAUMA + [M3_Ascension_Fantasy = Detonated; Narrative_Direction = Force_Descending; Environmental_Pressure = Mediocritization_Attack]",
            aesthetic: "聚焦：红色的不及格三个字 + 戮拉开的分数线。文本：下坠的、未来被一个数字封堵的叙述。",
            aestheticEn: "Focus: Red_FAIL_Three_Characters + Score_Line_Pulling_Apart. Text: Descending_Future_Sealed_by_a_Single_Number_Narration.",
            runtime: "IF (主体试图重新进入升维通道) THEN (强制：通道返回'已关闭'且无法重新打开)。严禁M3升维幻想在本次遭遇周期内重建。",
            runtimeEn: "IF (Subject_Attempts_Re-entering_Ascension_Channel) THEN (Force: Channel_Returns_Closed_Cannot_Reopen). FORBID_M3_Ascension_Fantasy_Rebuilding_in_Current_Encounter_Cycle."
        }
    },
    {
        id: "sys_inflation",
        name: "恶性通胀", nameEn: "Hyperinflation",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "钱变成了废纸，毕生积蓄买不到一块面包。",
        defEn: "Money turns to waste; life savings buy no bread.",
        core: "符号与现实的脱钩。社会契约的失效。 | 实在界: 货币的谎言。",
        coreEn: "Decoupling signifiers from reality. Failure of social contracts. | The Real: The lie of currency.",
        logic: "【能指-所指脱钩器】：主体系逻辑中所有的'数量关系'发生畸变。文本中对物品的估价必须表现出一种疯狂的多变性，强制 M5（交换业务）进入非理性的物物互换阶段。Tuchē以'货币的谎言'降临——符号与现实脱钩，社会契约失效。",
        logicEn: "[Signifier-Signified Decoupler]: All 'quantitative relationships' in system logic are distorted. Item evaluations must exhibit frantic volatility, forcing M5 (Exchange) into irrational bartering. Tuchē descends as 'the lie of currency'—signifiers decoupled from reality, social contract void.",
        patch: {
            mechanics: "基础创伤协议 + [数量关系 = 畸变; 物品估价 = 疯狂多变; M5交换 = 降级为物物互换]",
            mechanicsEn: "Base_TRAUMA + [Quantity_Relations = Distorted; Item_Valuation = Frantic_Volatility; M5_Exchange = Downgraded_to_Bartering]",
            aesthetic: "聚焦：一叠只能当引火纸的铞票 + 超市货架上的空白。文本：价值系统爆炸的、如资本主义末日般的叙述。",
            aestheticEn: "Focus: Banknotes_Only_Good_for_Kindling + Empty_Supermarket_Shelves. Text: Value_System_Explosion_Capitalist_Apocalypse_Narration.",
            runtime: "IF (主体试图用货币进行交换) THEN (强制：货币被拒收，仅接受物物互换)。严禁货币在叙事中保持任何交换价值。",
            runtimeEn: "IF (Subject_Attempts_Currency_Exchange) THEN (Force: Currency_Refused_Only_Bartering_Accepted). FORBID_Currency_Maintaining_Any_Exchange_Value_in_Narrative."
        }
    },
    {
        id: "sys_surveillance_leak",
        name: "隐私泄露", nameEn: "Data Leak",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "私密照片或聊天记录被全网公开。",
        defEn: "Private photos or chats made public online.",
        core: "全景敞视。没有死角，没有秘密，只有羞耻。 | 实在界: 隐私的消亡。",
        coreEn: "Panopticon. No blind spots, no secrets, only shame. | The Real: Death of privacy.",
        logic: "【全景敞视外化器】：主体的 M1 彻底'外化'。所有的私人情绪逻辑在叙事中必须同时伴随着'他者的实时评论'（M4），主体失去了对自己精神疆域的控制。Tuchē以全景敞视的形式降临——没有死角，没有秘密，只有羞耻。",
        logicEn: "[Panopticon Externalization Device]: Total 'externalization' of the subject's M1. All private emotional logic must be accompanied by 'real-time commentary from others' (M4); subject loses control of psychic domain. Tuchē descends as panopticon—no blind spots, no secrets, only shame.",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 彻底外化; 私人情绪 = 强制伴随M4实时评论; 精神疆域 = 失控]",
            mechanicsEn: "Base_TRAUMA + [M1 = Total_Externalization; Private_Emotion = Force_Accompanied_by_M4_Realtime_Commentary; Psychic_Domain = Lost_Control]",
            aesthetic: "聚焦：滚动的弹幕评论 + 被放大的私密截图。文本：内心被强制外翻的、如被活体解剖的叙述。",
            aestheticEn: "Focus: Scrolling_Comment_Barrage + Enlarged_Private_Screenshots. Text: Inner_World_Forcibly_Everted_Vivisection_Narration.",
            runtime: "IF (主体试图恢复内心私密性) THEN (强制：新的私密内容被即时泄露)。严禁主体的精神疆域恢复任何形式的私密性。",
            runtimeEn: "IF (Subject_Attempts_Restoring_Inner_Privacy) THEN (Force: New_Private_Content_Instantly_Leaked). FORBID_Subject_Psychic_Domain_Restoring_Any_Privacy."
        }
    },
    {
        id: "sys_transport_fail",
        name: "交通瘫痪", nameEn: "Transport Fail",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "地铁停运，航班取消，被困在异乡或途中。",
        defEn: "Subway stoppages, flights canceled, stranded abroad or en route.",
        core: "流动的停滞。现代社会血管堵塞时的焦虑。 | 实在界: 距离的阻隔。",
        coreEn: "Stagnation of flow. Anxiety when modern society's vessels clog. | The Real: Obstruction of distance.",
        logic: "【位移逻辑瘫痪器】：主体的 M1 追求'位移逻辑'的失败。所有试图到达目标的 M5 动作都必须遭到环境的被动抵抗，叙事焦点在于'等待'中的精神磨损。Tuchē以流动性的停滞形式降临——现代社会的血管堵塞，距离变成不可跨越的鸿沟。",
        logicEn: "[Displacement Logic Paralysis]: Failure of subject's M1 'displacement logic'. All M5 attempts to reach a goal must face passive environmental resistance; narrative focuses on psychic erosion during 'waiting'. Tuchē descends as stagnation of flow—modern society's vessels clog, distance becomes an uncrossable gulf.",
        patch: {
            mechanics: "基础创伤协议 + [M1位移逻辑 = 失败; M5动作 = 环境被动抵抗; 叙事焦点 = 等待/精神磨损]",
            mechanicsEn: "Base_TRAUMA + [M1_Displacement_Logic = Failed; M5_Action = Environmental_Passive_Resistance; Narrative_Focus = Waiting/Psychic_Erosion]",
            aesthetic: "聚焦：停滞的出发屏幕 + 拥挤的人群中的孤立。文本：时间被冻结的、精神在等待中慢慢崩解的叙述。",
            aestheticEn: "Focus: Stalled_Departure_Screen + Isolation_in_Packed_Crowd. Text: Time_Frozen_Psyche_Slowly_Disintegrating_in_Waiting_Narration.",
            runtime: "IF (主体试图寻找替代路线) THEN (强制：所有替代路线同样瘫痪)。严禁主体通过任何M5动作实现空间位移。",
            runtimeEn: "IF (Subject_Attempts_Alternative_Routes) THEN (Force: All_Alternatives_Also_Paralyzed). FORBID_Subject_Achieving_Spatial_Displacement_via_Any_M5_Action."
        }
    },
    {
        id: "sys_inheritance_lost",
        name: "遗产被夺", nameEn: "Disinherited",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "遗嘱被篡改，原本属于你的财富落入他人之手。",
        defEn: "Will forged; original wealth falls to others.",
        core: "家族契约的背叛。血缘关系在利益面前的脆弱。 | 实在界: 继承的断裂。",
        coreEn: "Betrayal of family contracts. Fragility of kinship before interests. | The Real: Rupture of inheritance.",
        logic: "【象征性继承断裂器】：主体的名号/身份无法继承其对应的 M3（财富/权力）。叙事中必须展示一种'象征性错位'：主体虽有其名，但无其权，逻辑核心在于这种'空转'状态。Tuchē以'家族契约的背叛'形式降临——血缘在利益面前的脆弱被暴露。",
        logicEn: "[Symbolic Inheritance Rupture Device]: Subject's name/identity fails to inherit its corresponding M3 (Wealth/Power). Narrative must show 'symbolic misalignment': subject has name but not power; logic focuses on this 'idling' state. Tuchē descends as 'betrayal of family contract'—fragility of kinship before interests exposed.",
        patch: {
            mechanics: "基础创伤协议 + [名号/身份 = 与M3脱钩; 象征性 = 错位空转; 家族契约 = 被背叛]",
            mechanicsEn: "Base_TRAUMA + [Name/Identity = Decoupled_from_M3; Symbolic = Misalignment_Idling; Family_Contract = Betrayed]",
            aesthetic: "聚焦：篡改的遗嘱墨迹 + 纸箱里尘封的家族照片。文本：名存实亡的、象征性空转的叙述。",
            aestheticEn: "Focus: Forged_Will_Ink + Dusty_Family_Photos_in_Cardboard_Box. Text: Name_Exists_Substance_Gone_Symbolic_Idling_Narration.",
            runtime: "IF (主体试图通过法律手段追回遗产) THEN (强制：法律系统判定篡改遗嘱为合法)。严禁象征性继承关系的恢复。",
            runtimeEn: "IF (Subject_Attempts_Legal_Recovery_of_Inheritance) THEN (Force: Legal_System_Rules_Forged_Will_as_Legitimate). FORBID_Symbolic_Inheritance_Relationship_Restoration."
        }
    },
    {
        id: "sys_bridge_collapse",
        name: "设施坍塌", nameEn: "Bridge Collapse",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "正在经过的大桥或建筑突然断裂。",
        defEn: "Passing bridge or building suddenly snaps.",
        core: "物质基础的不可靠。坚固的东西烟消云散。 | 实在界: 物理的偶然性。",
        coreEn: "Unreliability of physical foundations. Solid things melt into air. | The Real: Physical contingency.",
        logic: "【物质时空取消器】：对物质时空逻辑的瞬间取消。主体的 M5（行动）必须从'可规划'降级为'对万有引力的被动顺从'。Tuchē以一种纯粹的加速度形式降临——坚固的东西烟消云散，物质基础的不可靠被暴露。",
        logicEn: "[Physical Spacetime Cancellation Device]: Instant cancellation of physical space-time logic. Subject's M5 (Action) must downgrade from 'plannable' to 'passive compliance with gravity'. Tuchē descends as pure acceleration—solid things melt into air, unreliability of physical foundations exposed.",
        patch: {
            mechanics: "基础创伤协议 + [物质时空 = 瞬间取消; M5行动 = 降级为被动顺引力; 物质地基 = 不可靠]",
            mechanicsEn: "Base_TRAUMA + [Physical_Spacetime = Instant_Cancel; M5_Action = Downgrade_to_Passive_Gravity_Compliance; Physical_Foundation = Unreliable]",
            aesthetic: "聚焦：断裂的模板 + 垂直下坠时的失重感。文本：坚固世界瞬间液化的、如万物融解般的叙述。",
            aestheticEn: "Focus: Fracturing_Concrete + Weightlessness_During_Vertical_Fall. Text: Solid_World_Instant_Liquefaction_Everything_Dissolving_Narration.",
            runtime: "IF (主体试图依赖物质结构的稳定性) THEN (强制：结构即时发生断裂)。严禁物质空间对主体提供任何可预测的稳定支撑。",
            runtimeEn: "IF (Subject_Relies_on_Physical_Structure_Stability) THEN (Force: Structure_Instantly_Fractures). FORBID_Physical_Space_Providing_Any_Predictable_Stable_Support."
        }
    },
    {
        id: "sys_food_crisis",
        name: "断粮", nameEn: "Food Crisis",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "超市货架空空如也，抢购潮。",
        defEn: "Empty supermarket shelves, panic buying.",
        core: "文明外壳剥落。重回原始的生存竞争。 | 实在界: 饥饿的恐惧。",
        coreEn: "Civilization shell peels off. Return to primitive survival competition. | The Real: Fear of hunger.",
        logic: "【代谢维护OS降级器】：主体的 M0 OS 切换至'代谢维护逻辑'。所有的能指（M4）被简化为'可食用/不可食用'的二元对立。强制性的动物化描写剥夺主体的审美能力。Tuchē以饥饿恐惧的形式降临，文明外壳剥落，重回原始的生存竞争。",
        logicEn: "[Metabolic Maintenance OS Downgrader]: Subject's M0 OS switches to 'metabolic maintenance logic'. All signifiers (M4) simplified into edible/inedible binary. Forced animalization strips subject of aesthetic capacity. Tuchē descends as hunger-terror, civilization shell peels off, return to primitive survival competition.",
        patch: {
            mechanics: "基础创伤协议 + [M0 OS = 代谢维护模式; M4能指 = 二元简化(可食/不可食); 审美能力 = 剥夺]",
            mechanicsEn: "Base_TRAUMA + [M0_OS = Metabolic_Maintenance_Mode; M4_Signifiers = Binary_Simplified(Edible/Inedible); Aesthetic_Capacity = Stripped]",
            aesthetic: "聚焦：空荡的货架 + 抢购人群中的动物性疆狂。文本：文明外壳剥落的、退化为纯生物学生存的叙述。",
            aestheticEn: "Focus: Empty_Shelves + Animal_Frenzy_in_Panic_Buying_Crowd. Text: Civilization_Shell_Stripped_Regression_to_Pure_Biological_Survival_Narration.",
            runtime: "IF (主体试图维持文明化行为) THEN (强制：代谢压力压倒一切文化约束)。严禁叙事中出现超越生存维度的任何审美行为。",
            runtimeEn: "IF (Subject_Attempts_Civilized_Behavior) THEN (Force: Metabolic_Pressure_Overrides_All_Cultural_Constraints). FORBID_Any_Aesthetic_Behavior_Beyond_Survival_Dimension_in_Narrative."
        }
    },
    {
        id: "sys_plague_outbreak",
        name: "瘟疫爆发", nameEn: "Outbreak",
        group: "A. 系统的崩塌", groupEn: "Systemic",
        def: "身边的人突然倒下，封锁线拉起。",
        defEn: "People nearby collapsing suddenly, quarantine perimeters up.",
        core: "不可见的敌人。他人即地狱（传染源）。 | 实在界: 接触的禁忌。",
        coreEn: "Invisible enemy. Others are hell (sources of infection). | The Real: Taboo of contact.",
        logic: "【接触禁忌异化器】：社会交互逻辑（M4）因'物理接触'而产生的恐怖异化。主体的所有 M5 对外行动都被附加了极其严重的'致死风险测算'，叙事中充满了对他者的生理性厌弃。Tuchē以'不可见的敌人'形式降临——他人即地狱（传染源），接触变成禁忌。",
        logicEn: "[Contact Taboo Alienation Device]: Social interaction logic (M4) horribly alienated by 'physical contact'. All subject's M5 outward actions appended with severe 'death-risk calculations'; narrative filled with physiological loathing of others. Tuchē descends as 'invisible enemy'—others are hell (infection sources), contact becomes taboo.",
        patch: {
            mechanics: "基础创伤协议 + [M4社会交互 = 接触恐惧异化; M5对外行动 = 附加致死风险; 他者 = 生理性厌弃对象]",
            mechanicsEn: "Base_TRAUMA + [M4_Social_Interaction = Contact_Terror_Alienation; M5_Outward_Action = Appended_Death_Risk; Others = Physiological_Loathing_Object]",
            aesthetic: "聚焦：消毒液的气味 + 尸体袋的拉链声。文本：他人变成生物危险源的、拥抱变成自杀的叙述。",
            aestheticEn: "Focus: Disinfectant_Smell + Body_Bag_Zipper_Sound. Text: Others_Becoming_Biohazard_Embrace_Becoming_Suicide_Narration.",
            runtime: "IF (主体试图与他人进行物理接触) THEN (强制：接触被重新编码为'致死风险')。严禁叙事中出现任何无风险的人际接触。",
            runtimeEn: "IF (Subject_Attempts_Physical_Contact_with_Others) THEN (Force: Contact_Recoded_as_Lethal_Risk). FORBID_Any_Risk-Free_Interpersonal_Contact_in_Narrative."
        }
    }
];
