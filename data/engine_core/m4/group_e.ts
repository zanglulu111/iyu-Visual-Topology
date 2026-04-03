import { LibraryItemDef } from '../../../types';

export const OPPRESSION_GROUP_E: LibraryItemDef[] = [
    {
        id: "m4_limit_deadline",
        name: "绝对死线", nameEn: "The Absolute Deadline",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "痛苦不源于自然的时间流逝，而是系统人为设立的倒计时，让你的存在从下一秒起不再合法。",
        defEn: "Pain does not stem from natural time passing, but from a system-imposed countdown that renders your existence illegal from the very next second.",
        core: "将时间武器化。不是因为你老了所以输了，而是因为‘表走完了’，所以系统合法地抹杀你。 | 形式：还款倒计时、签证到期日、行刑时刻。",
        coreEn: "Weaponizing time. You don't lose because you aged, but because 'time is up,' authorizing the system's legal erasure of you. | Forms: Repayment countdowns, visa expirations, the execution hour.",
        logic: "时间刻度的符号暴政。实在界的时间（M2）是无意义的流逝，而死线是大他者将剥夺行为附着在时针上。时间变成了刽子手，主体的每一次呼吸都在为自己的绞刑架拧紧螺丝。",
        logicEn: "Symbolic tyranny of time metrics. Real time (M2) is meaningless flow; a deadline is the Big Other attaching deprivation to the clock's hands. Time becomes the executioner, and the subject's every breath tightens screws on their own gallows.",
        patch: {
            mechanics: "基础时间暴政协议 + [生存合法性 = 倒计时绑定; 时限归零 = 系统合法抹杀; 物理续命 = 被判定无效]",
            mechanicsEn: "Base_TIME_TYRANNY + [Survival_Legitimacy = Bound_to_Countdown; Time_Zero = System_Legal_Erasure; Physical_Extension = Ruled_Invalid]",
            aesthetic: "聚焦：巨大的红字倒计时牌/沙漏 + 滴答作响的声效。文本：机械、精确、带着无法讨价还价的死神特质。",
            aestheticEn: "Focus: Giant_Red_Countdown/Hourglass + Ticking_Sound_Effects. Text: Mechanical_Precise_with_Non-negotiable_Reaper_Traits.",
            runtime: "IF (倒计时归零) THEN (强制：物理环境瞬间坍缩为致命的处决场)。严禁倒计时可以通过哀求被修改。",
            runtimeEn: "IF (Countdown_Hits_Zero) THEN (Force: Physical_Environment_Instantly_Collapses_into_Fatal_Execution_Ground). FORBID_Countdown_Being_Modified_via_Begging."
        }
    },
    {
        id: "m4_limit_border_wall",
        name: "不可见的高墙", nameEn: "The Invisible Border Wall",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "阻挡你的不是物理维度的十万公里，而是一道剥夺了你‘通行许可’的空间切断线。",
        defEn: "What blocks you is not 100,000 kilometers of physical distance, but a spatial severing line that strips away your 'clearance.'",
        core: "空间的私有化与符号隔离。对面分明近在咫尺，但在未经系统授权时，它就是无底深渊。 | 形式：带有电网的国境线、拒绝平民进入的富人区堡垒、不可见的安保防线。",
        coreEn: "Privatization and symbolic isolation of space. The other side is inches away, but without system authorization, it is a bottomless abyss. | Forms: Electrified national borders, elite fortress zones denying civilians, invisible security barriers.",
        logic: "空间拓扑的权力折叠。大他者强行在平滑的实在界大地上画出裂痕。这种距离感不仅是物理上的，更是本体论上的不互通——你在墙这头，即意味着你已被开除了那头的人籍。",
        logicEn: "Power folding of spatial topology. The Big Other forcibly carves fissures into the smooth earth of the Real. This distance isn't merely physical, it is ontological incomparability—being on this side of the wall means your humanity on the other side has been revoked.",
        patch: {
            mechanics: "基础空间区隔协议 + [通行授权 = 绝对垄断; 物理距离 = 符号深渊; 越境 = 触发免疫反制]",
            mechanicsEn: "Base_SPATIAL_SEGREGATION + [Clearance_Authorization = Monopoly; Physical_Distance = Symbolic_Abyss; Trespass = Immune_Countermeasure]",
            aesthetic: "聚焦：横亘地平线的高墙/电网 + 对称而冷漠的检查站。文本：冰冷、生硬、强调阶级与空间双重隔离的压迫。",
            aestheticEn: "Focus: Horizon-spanning_Walls/Grids + Cold_Symmetrical_Checkpoints. Text: Rigid_Cold_Oppressive_Emphasis_on_Dual_Class-Spatial_Isolation.",
            runtime: "IF (主体尝试物理翻越) THEN (强制：系统部署降维级空间打击或无视其物理位置进行判定)。严禁主体通过简单的体能轻易翻越边界。",
            runtimeEn: "IF (Subject_Attempts_Physical_Crossing) THEN (Force: System_Deploys_Dimensional_Spatial_Strikes). FORBID_Subject_Easily_Vaulting_Border_via_Mere_Stamina."
        }
    },
    {
        id: "m4_limit_engineered_scarcity",
        name: "人为饥荒", nameEn: "Engineered Scarcity",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "你缺乏生存资源，并非世界本身贫瘠，而是由于系统极度精密的供应链封锁与配给制设计。",
        defEn: "You lack survival resources not because the world is barren, but due to the system's hyper-precise supply chain blockages and rationing designs.",
        core: "用饿肚子来实现社会规训。仓库里食物堆积如山，但大他者从数学逻辑上切断了你获取它的途径。 | 形式：被垄断的水源、只向上层供应的特效药、针对特定区域的经济制裁。",
        coreEn: "Social discipline via starvation. Warehouses overflow with food, but the Big Other mathematically severs your access to it. | Forms: Monopolized water sources, elite-only cures, economic sanctions targeting specific sectors.",
        logic: "剩余价值的极限挤压逻辑。饥饿不再是由于风调雨顺（实在界）决定，而是由符号界的表单决定。系统刻意制造生存必须品的缺口，强迫主体用尊严甚至底线去填补这个虚构的差值。",
        logicEn: "Extreme extraction of surplus value logic. Starvation is no longer dictated by the weather (the Real) but by a Symbolic spreadsheet. The system engineers a gap in necessities, forcing the subject to plug this fictitious deficit with dignity and ethical baselines.",
        patch: {
            mechanics: "基础剩余榨取协议 + [资源配给 = 算法断供; 饥饿感 = 规训工具; 物理获取 = 强制切断]",
            mechanicsEn: "Base_SURPLUS_EXTRACTION + [Resource_Rationing = Algorithmic_Cutoff; Starvation = Disciplinary_Tool; Physical_Access = Force_Severed]",
            aesthetic: "聚焦：堆积如山的封闭粮仓 + 电子锁与红色警告射灯。文本：绝对理性且充满报表数字感的饥饿宣判。",
            aestheticEn: "Focus: Mountains_of_Hoarded_Grain_in_Sealed_Silos + E-Locks_and_Red_Warning_Lights. Text: Absolutely_Rational_Starvation_Verdicts_Full_of_Spreadsheet_Metrics.",
            runtime: "IF (主体试图暴力夺取资源) THEN (强制：资源被锁死或系统直接摧毁补给以展示绝对控制)。严禁系统表现出对资源的匮乏。",
            runtimeEn: "IF (Subject_Attempts_Violent_Resource_Seizure) THEN (Force: Resources_Locked_Down_or_Destroyed_to_Flaunt_Absolute_Control). FORBID_System_Showing_Actual_Resource_Scarcity."
        }
    },
    {
        id: "m4_limit_hostile_architecture",
        name: "敌意建筑", nameEn: "Hostile Architecture",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "将大他者排斥某些人类群体（如流浪汉、反抗者）的恶意，冷冰冰地硬编码进城市规划与建筑结构中。",
        defEn: "Coldly hardcoding the Big Other's malice toward excluding certain demographics (e.g., the homeless, rebels) directly into urban planning and structural blueprints.",
        core: "物理现实的阶级暴力。空间本身长出了獠牙，剥夺你在其中的栖息权。 | 形式：装有防卧挡板的公园长椅、无法停留的桥洞地刺、狭窄压抑的穷人社区道路。",
        coreEn: "Class violence embedded in physical reality. Space itself grows fangs, stripping your right to inhabit it. | Forms: Anti-homeless park benches with dividers, spikes under bridges, oppressively narrow slums.",
        logic: "环境规训。大他者的淫荡性在于它不需要派出警察驱赶你，它只是让“躺下”这个简单的物理动作在这一千平方公里内变得不可能。这是静默的、抹杀性的实在界结构排斥。",
        logicEn: "Environmental discipline. The Big Other's obscenity is that it needs no police to evict you; it simply renders the basic physical action of 'lying down' impossible within a 1000-square-km radius. It is silent, obliterating structural expulsion.",
        patch: {
            mechanics: "基础环境规训协议 + [空间形态 = 本质排斥; 物理栖息 = 逻辑断绝; 互动反噬 = 即时刺痛]",
            mechanicsEn: "Base_ENVIRONMENTAL_DISCIPLINE + [Spatial_Morphology = Intrinsic_Exclusion; Physical_Inhabiting = Logical_Severance; Interaction_Backlash = Instant_Pain]",
            aesthetic: "聚焦：带地刺的桥洞/无法防抱的长椅 + 冰冷锋利的几何切割。文本：一种不言自明、逼退主体的空间傲慢感。",
            aestheticEn: "Focus: Spiked_Overpasses/Hostile_Benches + Cold_Sharp_Geometric_Cuts. Text: Self-Evident_Spatial_Arrogance_Forcing_the_Subject_to_Retreat.",
            runtime: "IF (主体试图在这个空间内休息) THEN (强制：物理结构造成持续失血或推挤迫使主体移动)。严禁空间存在对底层的任何柔软和隐藏庇护。",
            runtimeEn: "IF (Subject_Attempts_Resting_in_this_Space) THEN (Force: Physical_Structure_Causes_Continuous_Bleeding_or_Shoving_to_Force_Movement). FORBID_Space_Harboring_Any_Softness_or_Hidden_Asylum_for_the_Poor."
        }
    },
    {
        id: "m4_limit_biological_threshold",
        name: "生理阈值清洗", nameEn: "Biological Threshold Audit",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "一项强制性的健康或体能指标测试。一旦你的血常规差了0.1，你就不再被视为‘有用的人’。",
        defEn: "A mandatory health or fitness metric test. The instant your bloodwork is off by 0.1, you are no longer considered a 'useful human.'",
        core: "生命指数的福特化生产线。将肉体状况量化为系统免责抛弃你的直接借口。 | 形式：贫民窟的强制基因筛查、被判定为‘次品’的工厂残疾测试、老年人由于医疗配额而被强制拔管。",
        coreEn: "Fordist assembly lines for life metrics. Quantifying bodily states as direct excuses for the system to legally discard you without guilt. | Forms: Slum genetic audits, factory impairment tests grading you 'defective', elderly unplugged due to medical quotas.",
        logic: "生命政治学（Biopolitics）。大他者夺取了对“活着”这一定义的解释权。你的痛觉是真实的（M2），但它在系统中只是一组被划分为“抛弃区”的符号数据（M4）。人被还原为不达标的零件。",
        logicEn: "Biopolitics. The Big Other usurps the right to define 'being alive.' Your pain is Real (M2), but to the system, it is merely symbolic data categorized in the 'Discard' pile (M4). The human is reduced to a non-compliant spare part.",
        patch: {
            mechanics: "基础生命政治协议 + [生命体征 = 报废指标; 标准差 = 系统合法抛弃; 痛觉 = 数据无效化]",
            mechanicsEn: "Base_BIOPOLITICS + [Vitals = Obsolescence_Metrics; Standard_Deviation = Legal_Discard; Pain = Data_Invalidation]",
            aesthetic: "聚焦：高科技扫描仪的蓝色激光 + 刺眼的红字“不合格”。文本：完全去人性化、格式化的冷冰冰医学报表腔调。",
            aestheticEn: "Focus: Blue_Lasers_of_High-Tech_Scanners + Glaring_Red-'DEFECTIVE'. Text: Completely_Dehumanized_Formatted_Cold_Medical_Report_Tones.",
            runtime: "IF (主体的体征低于红线) THEN (强制：环境的氧气或资源供给直接切断)。严禁系统对个人的病痛存有哪怕一丝怜悯。",
            runtimeEn: "IF (Subject_Vitals_Drop_Below_Redline) THEN (Force: Environmental_Oxygen_or_Resources_Instantly_Cut_Off). FORBID_System_Showing_a_Shred_of_Pity_for_Personal_Illness."
        }
    },
    {
        id: "m4_limit_bandwidth_choke",
        name: "带宽窒息", nameEn: "The Bandwidth Choke",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "不是因为你没有声带，而是由于系统在物理和协议层面掐断了你发散求救信号的频段。",
        defEn: "Not because you have no vocal cords, but because the system chokes the very frequencies and protocols through which your distress signals travel.",
        core: "言说权利的物理性切除。你喊得撕心裂肺，但大他者拔掉了你的麦克风线。 | 形式：大面积的网络封锁信号屏蔽器、被精准切断的求救对讲机频率。",
        coreEn: "Physical excision of the right to speak. You scream your lungs out, but the Big Other unplugs your microphone. | Forms: Mass network blackouts, signal jammers, precision-sliced distress radio channels.",
        logic: "能指传输链打断。主体发出了能指，但大他者粉碎了“接收终端”。这种阻断让所有的哭喊变成了真空中的噪音。主体的孤独感被物理性地放大到了宇宙级别，因为他的存在无法在任何他者那里产生回响。",
        logicEn: "Severing the signifier transmission chain. The subject emits a signifier, but the Big Other shatters the 'receiving terminal.' This blockage turns all screams into vacuum noise. The subject's loneliness is physically magnified to cosmic scales because their existence cannot echo in any Other.",
        patch: {
            mechanics: "基础能指阻断协议 + [发声频段 = 物理切断; 求救 = 真空杂音; 存在感 = 回响抹杀]",
            mechanicsEn: "Base_SIGNIFIER_BLOCKAGE + [Vocal_Frequency = Physically_Cut; SOS = Vacuum_Noise; Presence = Echo_Erased]",
            aesthetic: "聚焦：被切断的物理线缆 + 刺耳的电波白噪声。文本：充满信息真空感、无法与任何他者建立连接的幽闭恐怖。",
            aestheticEn: "Focus: Severed_Physical_Cables + Piercing_Radio_White_Noise. Text: Claustrophobia_Filled_with_Information_Vacuum_Unable_to_Connect_to_Any_Other.",
            runtime: "IF (主体试图放大求救信号) THEN (强制：系统降维释放信息屏蔽场，将一切转化为静音)。严禁主体的声音被高维度存在接收。",
            runtimeEn: "IF (Subject_Attempts_Amplifying_Distress_Signal) THEN (Force: System_Releases_Dimensional_Interference_Field_Muting_Everything). FORBID_Subject_Voice_Reached_by_High_Dimensional_Entities."
        }
    },
    {
        id: "m4_limit_currency_starvation",
        name: "货币断供", nameEn: "Currency Starvation",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "物理世界的一切对你紧闭大门，因为系统在一夜之间冻结或清零了你账户里的那串数字。",
        defEn: "The entire physical world shuts its doors to you, because overnight the system froze or zeroed out a string of numbers in your account.",
        core: "流通权的抹杀。你四肢健全，却因为卡里没有那些符号而买不到一口续命的水。 | 形式：被系统列入黑名单的银行卡冻结、底层账户被黑客恶意清零、身份注销导致的全面失信。",
        coreEn: "Erasure of circulation rights. Limbs fully intact, yet because your card lacks those symbols, you cannot buy a sip of life-sustaining water. | Forms: System-blacklisted bank freezes, hacker-zeroed accounts of the poor, identity deletion causing total loss of credit.",
        logic: "等价物的暴政。在一个被大他者彻底格式化的世界里，“钱”是对实在界物资进行赎买的唯一通行证。剥夺货币，即是进行一场优雅的、无需动刀的杀人游戏。主角的肉身在符号匮乏面前连一条狗都不如。",
        logicEn: "Tyranny of the universal equivalent. In a world totally formatted by the Big Other, 'money' is the only pass to redeem materials from the Real. Depriving currency is an elegant, bloodless murder game. Facing symbolic poverty, the protagonist's physical body becomes worth less than a stray dog.",
        patch: {
            mechanics: "基础等价物垄断协议 + [流通权 = 清零/冻结; 符号匮乏 = 物理饿死; 货币 = 生命唯一通行证]",
            mechanicsEn: "Base_UNIVERSAL_EQUIVALENCE_MONOPOLY + [Circulation_Rights = Zeroed/Frozen; Symbolic_Lack = Physical_Starvation; Currency = Sole_Life_Pass]",
            aesthetic: "聚焦：显示为零余额的全息面板 + 拒绝交易亮起的红灯闸机。文本：嘲弄式的、将肉体贬低至不如一串符号数据的机械提示。",
            aestheticEn: "Focus: Holographic_Panels_Showing_Zero_Balance + Trading_Gates_Flashing_Red_Denials. Text: Mocking_Mechanical_Prompts_Devaluing_Flesh_Below_Symbolic_Strings.",
            runtime: "IF (主体试图用肉体或实物强行交易) THEN (强制：所有交易终端封闭并召唤秩序暴力)。严禁在此系统内“钱”存在以物易物的替代品。",
            runtimeEn: "IF (Subject_Attempts_Forced_Trade_via_Flesh_or_Goods) THEN (Force: All_Terminals_Lock_Down_Summoning_Orderly_Violence). FORBID_Bartering_Alternatives_for_'Money'_Existing_in_This_System."
        }
    },
    {
        id: "m4_limit_asymmetric_weaponry",
        name: "降维武力霸权", nameEn: "Asymmetric Weapon Supremacy",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "对手并不比你勇敢或聪明，他只是拥有独家授权的轨道炮，而你手里只有石头。",
        defEn: "The opponent isn't braver or smarter; he merely possesses exclusive authorization to an orbital cannon while you hold rocks.",
        core: "暴力的准入权限。大他者将最具毁灭性的物理法则垄断在自己手中，这是令人绝望的技术壁垒。 | 形式：对平民使用军用级外骨骼的镇暴部队、只由高层掌握权限的城防系统攻击。",
        coreEn: "Access rights to violence. The Big Other monopolizes the most destructive physical laws—a deeply despairing technological barrier. | Forms: Riot police using military exoskeletons on civilians, orbital defense lasers locked to high-command keys.",
        logic: "力量的符号化豁免。物理定律的破纪录破坏力，在这里不再是平等的重力，而是“阶级的特权”。主体对抗的不是肉体凡胎，而是数以万亿计的工业倾销与只对特权阶级敞开的物理外挂。",
        logicEn: "Symbolic immunity of power. Record-breaking destructiveness of physical laws is no longer an equal gravity, but 'class privilege.' The subject fights not flesh and bone, but trillions in industrial dumping and physical aim-bots open solely to the privileged.",
        patch: {
            mechanics: "基础降维打击协议 + [系统武力 = 授权物理外挂; 主体抵抗 = 微尘级; 破坏法则 = 阶级垄断]",
            mechanicsEn: "Base_DIMENSIONAL_STRIKE + [System_Force = Authorized_Physics_Aim-bot; Subject_Resistance = Dust-Level; Destructive_Law = Class_Monopoly]",
            aesthetic: "聚焦：天空中的巨型炮塔投影对比地面的弱小肉体 + 毫无悬念的毁灭光束。文本：傲慢、不可逾越、充满工业降维碾压感的宣告。",
            aestheticEn: "Focus: Colossal_Orbital_Turret_Projections_Contrasting_Weak_Flesh + Suspense-free_Destruction_Beams. Text: Arrogant_Insurmountable_Declarations_of_Industrial_Crushing.",
            runtime: "IF (主体发起战术性对抗) THEN (强制：系统启动改变当地物理法则级武器如反重力将抵抗彻底无效化)。严禁出现系统仅仅使用对等步兵火力进行公平决斗。",
            runtimeEn: "IF (Subject_Initiates_Tactical_Confrontation) THEN (Force: System_Activates_Physics-Altering_Weapons_Nullifying_Resistance). FORBID_System_Engaging_in_Fair_Duels_Using_Symmetrical_Infantry_Fire."
        }
    },
    {
        id: "m4_limit_panoptic_light",
        name: "绝对白光", nameEn: "The Panoptic Light",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "在物理上不留下一丝阴影。你被迫在没有隐私的全视角曝光下进行反抗。",
        defEn: "Leaving not a single physical shadow. You are forced to rebel under total, omni-directional, privacy-stripped exposure.",
        core: "隐匿权的剥夺。你连在心里骂一句大他者，心率监测仪也会立刻上报。 | 形式：没有卫生间门的牢房、无死角的监控广场、必须植入的生理监测芯片。",
        coreEn: "Deprivation of the right to hide. Even if you curse the Big Other solely in your mind, the heart-rate monitor instantly reports it. | Forms: Cells without bathroom doors, blind-spot-free panoptic plazas, mandatory bio-metric chips.",
        logic: "视觉强暴逻辑。大他者的凝视从心理层面（超我）直接坠入了物理层面（摄像头与白炽灯）。主体丧失了退回内心的黑暗子宫的权利，被迫时刻处于“被规训对象”的过曝状态，这种光亮比彻底的黑暗更致郁。",
        logicEn: "Visual rape logic. The Big Other's gaze plummets from the psychological plane (Superego) directly into the physical plane (cameras and fluorescent lights). The subject loses the right to retreat into the dark womb of the interior, permanently subjected to the overexposure of a 'disciplined object.' This light is far more depressing than pitch black darkness.",
        patch: {
            mechanics: "基础全景凝视协议 + [物理阴影 = 强制剥夺; 隐私黑暗 = 系统性禁绝; 视觉强暴 = 维持过曝]",
            mechanicsEn: "Base_PANOPTIC_GAZE + [Physical_Shadow = Force_Stripped; Private_Darkness = Systemic_Ban; Visual_Rape = Maintained_Overexposure]",
            aesthetic: "聚焦：刺目无死角的医疗级白炽灯 + 无数泛着红光的追踪摄像头。文本：极其眩目、毫无遮掩的安全检查级别透明压抑感。",
            aestheticEn: "Focus: Blinding_Medical-Grade_Fluorescent_Lights + Myriad_Red-Glowing_Tracking_Cameras. Text: Blindingly_Oppressive_Transparency_of_Security-Check_Levels.",
            runtime: "IF (主体试图躲进暗处) THEN (强制：聚光灯与无人机扫描射线立刻刺破阴影)。严禁给主体留下哪怕一秒钟能够从监控视野中隐形的盲区。",
            runtimeEn: "IF (Subject_Attempts_Hiding_in_Darkness) THEN (Force: Spotlights_and_Drone_Scanners_Instantly_Pierce_the_Shadows). FORBID_Leaving_a_Single_Second_of_Blind-Spot_Respite_from_Observation."
        }
    },
    {
        id: "m4_limit_algorithmic_distance",
        name: "算法折叠空间", nameEn: "Algorithmic Distance",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "两个地点在物理上只有五百米，但由于行程码规则、权限关卡或算法分流，变成了一生无法跨越的距离。",
        defEn: "Two locations separated by 500 meters physically, yet transformed into an uncrossable lifetime distance due to trace-codes, clearance gates, or algorithmic rerouting.",
        core: "空间的官僚化弯曲。近在咫尺的被困者因为大他者不批准路线而彻底失去希望。 | 形式：看得见对街却过不去的高架桥封锁矩阵、由于健康码红码而寸步难行的隔离政策。",
        coreEn: "Bureaucratic warping of space. The trapped are inches away, yet utterly hopeless because the Big Other refuses to authorize the route. | Forms: Blockade matrices on overpasses making the opposite street inaccessible, isolation policies halting all movement due to a red digital barcode.",
        logic: "空间拓扑重写。纯天然的距离（实在界）变得毫无意义，大他者用算法脚本重写了地图的几何学。这是一种极具赛博庞克色彩的绝望——物理的接近并不能导致事实上的拥抱。",
        logicEn: "Spatial topology rewrite. Natural distance (Real) becomes meaningless as the Big Other rewrites map geometry via algorithmic scripts. A deeply cyberpunk despair: physical proximity cannot result in a factual embrace.",
        patch: {
            mechanics: "基础拓扑重写协议 + [物理距离 = 算法计算前无效; 授权关卡 = 绝对切断; 近在咫尺 = 终生深渊]",
            mechanicsEn: "Base_TOPOLOGICAL_REWRITE + [Physical_Distance = Invalidatd_Before_Algorithm; Clearance_Gate = Absolute_Cutoff; Inches_Away = Lifetime_Abyss]",
            aesthetic: "聚焦：近在对街却被错综的红线隔离带分割的城市 + 冰冷的导航改道提示。文本：充满毫无生气的官僚代码与卡夫卡路线迷宫的绝望感。",
            aestheticEn: "Focus: Opposite_Street_Visible_But_Divided_by_Maze-like_Red_Tape + Cold_Rerouting_Prompts. Text: Despair_Filled_with_Lifeless_Bureaucratic_Code_and_Kafkaesque_Labyrinths.",
            runtime: "IF (主体试图无视路线走直线捷径垮过) THEN (强制：算法立刻将前方路段重置为不可通行甚至触发警戒机关)。严禁物理层面的冲刺能够突破算法定义的几何墙。",
            runtimeEn: "IF (Subject_Attempts_Straight-Line_Shortcuts_Ignoring_Routes) THEN (Force: Algorithm_Resets_Path_to_Impassable_or_Triggers_Alarms). FORBID_Physical_Sprints_Breaking_Through_Algorithm-Defined_Geometry_Walls."
        }
    },
    {
        id: "m4_limit_mandatory_velocity",
        name: "强制性超速", nameEn: "Mandatory Velocity",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "你脚下的履带绝不会停止。系统不要求你跑多快，但只要你短暂停下甚至摔倒，大机器就会立刻把你绞碎。",
        defEn: "The treadmill under your feet will never stop. The system doesn't demand you outrun a bullet, just that the moment you trip, the gears will shred you.",
        core: "动态的停顿惩罚。你不是在主动追逐什么，你是在为了不被剥夺而耗尽最后的力气。 | 形式：永远停不下来的外卖骑手算法限制时间、末日列车只有不断加速才能供暖的设定。",
        coreEn: "Dynamic halting penalty. You aren't chasing a prize; you are burning your final ounce of strength merely to avoid extraction. | Forms: Unstoppable delivery rider algorithm countdowns, Snowpiercer-esque trains that freeze if they stop accelerating.",
        logic: "剥削的前置合法化。大他者没有直接向你挥舞鞭子，它只是物理性地切断了‘刹车’。主体被抛入一种不断被速度异化的恐怖中。在这里，‘停下来思考’成为了一种致命的物理奢侈品。",
        logicEn: "Preemptive legalization of exploitation. The Big Other doesn't raise a whip directly; it merely physically disables the 'brakes.' The subject is thrown into the terror of being continuously alienated by velocity. Here, 'stopping to think' is a lethal, exorbitant physical luxury.",
        patch: {
            mechanics: "基础动态剥削协议 + [停止物理位移 = 即时处决; 速度维持 = 生命维系底线; 耗竭状态 = 系统的默认设置]",
            mechanicsEn: "Base_DYNAMIC_EXPLOITATION + [Stop_Physical_Displacement = Instant_Execution; Velocity_Maintenance = Vital_Baseline; Depleted_State = System_Default]",
            aesthetic: "聚焦：脚下失控加速的传送带/列车 + 狂飙的仪表盘红色刻度。文本：令人喘息困难、容不得半分停顿的心跳逼迫感。",
            aestheticEn: "Focus: Conveyor_Belts/Trains_Accelerating_Out_of_Control + Revving_Red_Gauges. Text: Breath-stifling_Heartbeat-Pounding_Tension_Allowing_Zero_Hesitation.",
            runtime: "IF (主体尝试减速或停止移动来休息) THEN (强制：后方的齿轮、寒潮或追兵立刻涌上撕碎一切)。严禁系统允许任何形式的安全停靠与静态栖息。",
            runtimeEn: "IF (Subject_Attempts_Slowing_or_Halting_to_Rest) THEN (Force: Gears/Cold_Waves/Pursuers_Behind_Instantly_Surge_to_Shred). FORBID_System_Allowing_Any_Safe_Docking_or_Static_Inhabiting."
        }
    },
    {
        id: "m4_limit_institutional_sensory_deprivation",
        name: "系统性官能剥夺", nameEn: "Systemic Sensory Deprivation",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "物理环境不仅锁住肉身，更是一把消音器，将反抗者的知觉输入切断到发疯的边缘。",
        defEn: "The physical environment doesn't just lock the flesh; it acts as a silencer, severing the rebel's sensory input to the brink of insanity.",
        core: "人工制造的虚无监狱。剥夺一切时间感、空间感与声音，逼迫主体自我解体。 | 形式：被关入完全隔音且纯白的审讯禁闭室、剥夺一切电子屏与光源的铁皮箱惩罚。",
        coreEn: "An artificially manufactured prison of the void. Stripping all sense of time, space, and sound, forcing the subject's self-disintegration. | Forms: Confinement in soundproof, pure-white interrogation rooms, the metal-box punishment cutting off all screens and light.",
        logic: "知觉的符号饥饿。大他者极为淫荡地明白：主体需要依靠接收外界信号（哪怕是施虐的信号）来维持自我连贯性。彻底切断感官并非自然耳聋（M2），而是系统使用最深邃的建筑学暴力对主体进行心理格式化。",
        logicEn: "Symbolic starvation of perception. The Big Other obscenely understands: the subject relies on receiving external signals (even sadistic ones) to maintain self-coherence. Total sensory deprivation is not natural deafness (M2); it is the system's most profound architectural violence formatting the psyche.",
        patch: {
            mechanics: "基础感官饥饿协议 + [外界知觉输入 = 物理切断; 环境 = 绝对虚无隔离箱; 主体本我相符性 = 强制解体]",
            mechanicsEn: "Base_SENSORY_STARVATION + [External_Perception_Input = Force_Severed; Environment = Absolute_Void_Box; Subject_Ego_Cohesion = Force_Disintegration]",
            aesthetic: "聚焦：没有任何棱角的纯白空间 + 隔绝心跳外一切声音。文本：极度静谧、但充满了能把大脑磨至疯癫的极高压强。",
            aestheticEn: "Focus: Edgeless_Pure_White_Space + Silence_Blocking_All_But_Heartbeats. Text: Extremely_Silent_Yet_Filled_With_High_Pressure_Grinding_the_Brain_Mad.",
            runtime: "IF (主体试图制造碰撞声或自残获取刺激) THEN (强制：空间吸音频段与束缚带完美化解一切努力，让主体坠入全真空)。严禁此空间留存能让主体感知时间的参考物。",
            runtimeEn: "IF (Subject_Attempts_Making_Noise_or_Self-Harm_for_Stimuli) THEN (Force: Space_Acoustics_and_Restraints_Nullify_Efforts_Dropping_Subject_to_Total_Vacuum). FORBID_This_Space_Retaining_A_Single_Time-Reference_for_the_Subject."
        }
    },
    {
        id: "m4_limit_quarantine_zone",
        name: "疫区封锁", nameEn: "The Quarantine Zone",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "为了保证上层或大多数的安全，系统毫不犹豫地画定一个圈，宣布里面所有人都是可牺牲的耗材。",
        defEn: "To guarantee the safety of the elites or the majority, the system unhesitatingly draws a circle, declaring everyone inside as expendable consumables.",
        core: "生命价值的粗暴切割。在红线内的个体连申诉的资格都被物理抹杀。 | 形式：强行焊死所有出口的生化爆发城市、只有富人能逃出的辐射隔离圈。",
        coreEn: "Brutal segmentation of life value. Individuals within the red line are physically erased of even the right to appeal. | Forms: Cities with all exits welded shut during bio-outbreaks, radiation exclusion zones where only the rich can escape.",
        logic: "纯粹的功利主义弃子逻辑。系统面临危机时，大他者展现出最冷酷的面貌——为了维护整体符号界的不崩塌，可以名正言顺地将一部分真实活着的肉体（M2）划拔为死罪区。这种边界往往被赋予“大义”的外衣。",
        logicEn: "Pure utilitarian discard logic. Facing crisis, the Big Other reveals its coldest visage—to maintain the total Symbolic's stability, it justly condemns a portion of actual living flesh (M2) into a death zone. This boundary is often cloaked in the guise of 'the greater good.'",
        patch: {
            mechanics: "基础功利切割协议 + [求生欲 = 判定为人类罪恶; 边界 = 焊死/绝对封禁; 局部 = 强制陪葬]",
            mechanicsEn: "Base_UTILITARIAN_SEVERANCE + [Survival_Will = Deemed_Human_Sin; Border = Welded/Absolute_Lockdown; Local_Sector = Forced_Collateral_Damage]",
            aesthetic: "聚焦：焊死的铁门/生化警示牌 + 穿着厚重防化服的冷酷执法者。文本：披着最高道德外衣、极致功利无情的牺牲宣判。",
            aestheticEn: "Focus: Welded_Iron_Doors/Biohazard_Signs + Unfeeling_Enforcers_in_Heavy_Hazmat_Suits. Text: Extreme_Utilitarian_Ruthless_Sacrifice_Verdicts_Cloaked_in_Highest_Morality.",
            runtime: "IF (主体尝试打破封锁求生) THEN (强制：触发系统的焦土打击并扣上‘反人类’的道义大罪)。严禁系统为了局部个体的凄惨放弃切断性原则。",
            runtimeEn: "IF (Subject_Attempts_Breaking_Lockdown_to_Survive) THEN (Force: Triggers_System_Scorched-Earth_Strike_and_Labeled_as_'Anti-Human'_Sin). FORBID_System_Abandoning_Severance_Principle_Due_to_Local_Individual_Misery."
        }
    },
    {
        id: "m4_limit_toxic_runoffs",
        name: "工业排泄区", nameEn: "Toxic Runoffs",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "系统的所有肮脏与副产品都被合法地引流到这里，底层人在这个废料池中挣扎求生。",
        defEn: "All of the system's filth and byproducts are legally funneled here, leaving the underclass to struggle for survival in this waste pool.",
        core: "污染分配的阶级性。他们的干净，建立在你们的空间被注满毒液的基础上。 | 形式：终日见不到阳光只下酸雨的赛博朋克下城、堆满全宇宙电子垃圾的废星。",
        coreEn: "The class nature of pollution distribution. Their cleanliness is built on your space being filled with venom. | Forms: Cyberpunk undercities perpetually drowning in acid rain without sunlight, scrap planets piled with the whole universe's e-waste.",
        logic: "剩余（surplus）的空间性转移。大他者（上层秩序）的运作必然产生剩余/排泄物。为了维持自身的“洁净”幻象，系统利用空间壁垒将所有结构性的恶与毒素物理转移给那些丧失发声渠道的下水道阶层。",
        logicEn: "Spatial transference of surplus. The Big Other's (upper order's) operation inevitably produces surplus/excrement. To maintain its illusion of 'cleanliness,' the system uses spatial barriers to physically transfer all structural evil and toxins to the voiceless sewer classes.",
        patch: {
            mechanics: "基础剩余转移协议 + [高维污染 = 强制倾倒至底层; 慢性致死 = 合法化; 生存空间 = 变更为废液池]",
            mechanicsEn: "Base_SURPLUS_TRANSFERENCE + [High-Dimension_Pollution = Force_Dumped_to_Bottom; Chronic_Lethality = Legalized; Inhabitable_Space = Modified_to_Waste_Pool]",
            aesthetic: "聚焦：漫过脚踝的暗绿色毒液/放射雾 + 上层建筑投下的光鲜倒影。文本：带有浓烈腐蚀性气味、绝望且不可逆的生存空间溃烂。",
            aestheticEn: "Focus: Ankle-deep_Dark_Green_Venom/Radiation_Fog + Glamorous_Reflections_Cast_by_Upper_Architecture. Text: Hopeless_Irreversible_Ulceration_of_Living_Space_With_Pungent_Corrosive_Odors.",
            runtime: "IF (主体试图净化区域) THEN (强制：上层继续以十倍的速度倾泻工业排泄物将其淹没)。严禁生态系统能够自然地化解大他者的工业毒素。",
            runtimeEn: "IF (Subject_Attempts_Purifying_the_Area) THEN (Force: Upper_Levels_Dump_Industrial_Waste_at_Ten-fold_Speed_Drowning_Them). FORBID_Ecosystem_Naturally_Neutralizing_the_Big_Other's_Industrial_Toxins."
        }
    },
    {
        id: "m4_limit_planned_obsolescence",
        name: "生物钟报废指令", nameEn: "Planned Obsolescence Directive",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "即使你拥有完美的生活，系统也在你出生时硬编码了出厂报废日期；期限一到，系统就开始从内向外溶解你。",
        defEn: "Even if you possess a perfect life, the system hardcoded a factory obsolescence date at your birth; once the deadline arrives, the system begins dissolving you from the inside out.",
        core: "作为产权租赁的肉体。你并没有完全拥有自己，你的衰老甚至不是大自然的产物，而是企业产品迭代的报废逻辑。 | 形式：到了30岁强制自毁的克隆人设定、未按时注入续命权限密钥导致的基因崩溃。",
        coreEn: "Flesh as leased property rights. You don't fully own yourself; your aging isn't even nature's product but the obsolescence logic of corporate product iteration. | Forms: Clone settings enforcing self-destruction at 30, genome collapse triggered by missing the on-time life-extension authorization key.",
        logic: "对象权归属（Ownership）的主客颠倒。主体以为自己是一切能指的主人，而真相是大他者在制造主体时就植入了死亡木马（Death Drive Implant）。生命不再是向自然借来的，而是向资本/大他者租赁的抵押品。",
        logicEn: "Subject-object inversion of Ownership. The subject thinks they master all signifiers, but the truth is the Big Other implanted a Death Drive Trojan during manufacture. Life is no longer borrowed from nature, but a mortgaged lease from Capital/the Big Other.",
        patch: {
            mechanics: "基础客体骇入协议 + [身体权限 = 附带自毁代码; 报废期限 = 绝对锁死; 内部崩溃 = 不可逆行]",
            mechanicsEn: "Base_OBJECT_HACKING + [Body_Permissions = Come_with_Self-Destruct_Code; Obsolescence_Date = Absolute_Locked; Internal_Collapse = Irreversible]",
            aesthetic: "聚焦：皮下发着红光的倒数计时器/失效条形码 + 逐渐机械化的僵硬四肢。文本：冰冷的产品召回通告与肉体朽坏交织的深度绝望。",
            aestheticEn: "Focus: Red-glowing_Subcutaneous_Countdowns/Invalidation_Barcodes + Gradually_Mechanizing_Stiff_Limbs. Text: Deep_Despair_Interweaving_Cold_Product_Recall_Notices_with_Flesh_Decay.",
            runtime: "IF (主体尝试续命或破解) THEN (强制：激活更为痛苦的底层排异反应加速消亡)。严禁系统赋予这个肉身自我修复或超越程序的奇迹。",
            runtimeEn: "IF (Subject_Attempts_Life-Extension_or_Hacking) THEN (Force: Activates_Even_More_Painful_Base_Rejection_Reactions_Accelerating_Demise). FORBID_System_Granting_this_Flesh_Self-Healing_or_Program-Transcending_Miracles."
        }
    },
    {
        id: "m4_limit_spatial_maze",
        name: "折叠迷宫的绝对幽闭", nameEn: "The Folded Spatial Maze",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "周围有无数条道路，但全都被算法和围墙设计成了完美的闭环，你永远走不出这三平方公里。",
        defEn: "Countless roads surround you, but all are mathematically modeled by algorithms and walls into a perfect closed loop; you can never transcend this three-square-kilometer zone.",
        core: "空间的卡夫卡式暴政。这不是物理上的无路可走，而是规则上的自我循环。 | 形式：走不出首尾相连通道的贫民区、由于红码永远被导航导回原地的车辆。",
        coreEn: "Kafkaesque tyranny of space. Not a physical dead end, but a topological self-loop dictated by rules. | Forms: Slums with ouroboros-like interconnected alleys, vehicles forever rerouted back to the start due to digital red-codes.",
        logic: "莫比乌斯环式的拓扑囚禁。大他者（社会控制）通过对物理空间的重新剪裁，将单向的逃亡变成了漫无目的的内卷。主体的冲动（Drive）在没有出口的空间内持续空转，最终被剥夺了任何指向外部的超越性（Transcendence）。",
        logicEn: "Möbius-strip topological imprisonment. The Big Other (social control) recuts physical space, warping outward escapism into aimless involution. The subject's drive idles continuously in an exit-less space, ultimately stripped of all transcendence toward the outside.",
        patch: {
            mechanics: "基础拓扑囚禁协议 + [物理扩张 = 重定向为内卷; 逃生出口 = 算法抹除; 运动量 = 耗散归零]",
            mechanicsEn: "Base_TOPOLOGICAL_IMPRISONMENT + [Physical_Expansion = Redirected_to_Involution; Escape_Exits = Algorithmically_Erased; Kinetic_Energy = Dissipated_to_Zero]",
            aesthetic: "聚焦：永远延伸却毫无尽头的相似长廊建筑群。文本：卡夫卡式、令人窒息的官僚主义路标与物理空间的错乱感。",
            aestheticEn: "Focus: Endlessly_Extending_Yet_Identical_Corridor_Complexes. Text: Kafkaesque_Suffocating_Bureaucratic_Signs_and_Spatial_Derangement.",
            runtime: "IF (主体试图暴力破坏墙壁以走直线) THEN (强制：被击碎的墙后只是更厚重的一堵墙或直接引发物理崩塌)。严禁主体通过单纯的几何暴力穿透大他者的迷宫。",
            runtimeEn: "IF (Subject_Attempts_to_Violently_Break_Walls_to_Walk_Straight) THEN (Force: Behind_the_Shattered_Wall_is_Merely_a_Thicker_Wall_or_It_Triggers_Physical_Collapse). FORBID_Subject_Penetrating_the_Big_Other's_Maze_Through_Mere_Geometric_Violence."
        }
    },
    {
        id: "m4_limit_oxygen_commodity",
        name: "呼吸权商品化", nameEn: "Commodified Oxygen",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "原本属于自然的馈赠被大他者强制打包，你的每一次肺部扩张都需要支付相应的符号账单。",
        defEn: "What was once nature's gift is forcibly packaged by the Big Other; every expansion of your lungs requires paying a corresponding symbolic bill.",
        core: "维生系统的极限榨取。只要你还想呼吸，你就已经是系统的奴役对象。 | 形式：被严重污染的大气下按秒计费的供氧面罩、在深海矿区一旦停止工作就停止供氧的潜水服。",
        coreEn: "Extreme extraction via life-support systems. As long as you wish to breathe, you are already enslaved by the system. | Forms: Oxygen masks billed by the second in heavily polluted atmospheres, deep-sea diving suits that cut air the moment work stops.",
        logic: "生物学底线的强行符号化。将 M2 (呼吸这个纯粹实在界的动物需求) 强行接入 M4 的剥削链条，是大他者权力的终极形态。“免费的空气”被视作资本的漏洞，将其堵死意味着主体的任何生存挣扎都是在为系统创造利润。",
        logicEn: "Forced symbolization of biological baselines. Jacking M2 (breathing—a pure Real animal need) forcibly into M4's exploitation chain represents the ultimate form of Big Other power. 'Free air' is viewed as a loophole for capital; plugging it means any survival struggle by the subject inherently generates profit for the system.",
        patch: {
            mechanics: "基础生命私有化协议 + [基础代谢 = 挂钩金融扣费; 氧气配额 = 与劳动产出强制绑定; 违约 = 物理窒息]",
            mechanicsEn: "Base_LIFE_PRIVATIZATION + [Basal_Metabolism = Pegged_to_Financial_Deductions; Oxygen_Quota = Forced-Bound_to_Labor_Output; Default = Physical_Suffocation]",
            aesthetic: "聚焦：倒计时滴答作响的氧气计数器表盘 + 污浊不可呼吸的背景大气。文本：极度残酷的、将生命的最基本节律兑换成财务赤字的机械声。",
            aestheticEn: "Focus: Ticking_Oxygen_Counter_Dials + Foul_Unbreathable_Background_Atmospheres. Text: Extremely_Cruel_Mechanical_Voices_Converting_Basic_Life_Rhythms_into_Financial_Deficits.",
            runtime: "IF (主体的账户停发或额度归零) THEN (强制：哪怕肺部再强健也必须面临即时的物理阀门锁死)。严禁自然界存在即使不交费也能躲避苟延残喘的“呼吸漏洞”。",
            runtimeEn: "IF (Subject's_Account_Suspends_or_Quota_Hits_Zero) THEN (Force: Even_with_the_Strongest_Lungs_Subject_Faces_Immediate_Physical_Valve_Lockdown). FORBID_Nature_Containing_'Breathing_Loopholes'_Where_One_Can_Scrape_By_Without_Paying."
        }
    },
    {
        id: "m4_limit_social_gravity",
        name: "阶层重力阱", nameEn: "The Class Gravity Well",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "你出身地的物理坐标携带着巨大的重力场，试图脱离底层的每一步都会遭遇指数级增长的物理压迫。",
        defEn: "The physical coordinates of your birthplace carry a massive gravity field; every step attempted to escape the bottom class meets exponentially growing physical oppression.",
        core: "垂直空间的不可僭越。上面的人像羽毛一样漂浮，而哪怕你是天才，在下层光是站直都要耗尽一生。 | 形式：引力被人工调节导致穷人区寸步难行的科幻巨构、跨区通行时对下位者施加剧痛的纳米毒索。",
        coreEn: "Insurmountability of vertical space. Those above float like feathers, while even a genius below must exhaust a lifetime merely to stand straight. | Forms: Sci-fi mega-structures where artificial gravity crushes the slum sectors, nano-toxins inflicting searing pain during cross-zone transit by lower classes.",
        logic: "阶级壁垒的物理化转译。大他者用物理定律（重力/痛觉）来固化它设定的符号差异（阶级）。主角越是向上攀爬，他体会到的压迫力就越是呈几何倍数爆裂，这是整个系统为了维持“上方洁净”所进行的排异反应。",
        logicEn: "Physical translation of class barriers. The Big Other uses physical laws (gravity/pain) to hardcode symbolic differences (class). The higher the protagonist climbs, the more geometrically explosive the pressure becomes—an immune rejection by the entire system designed to maintain the 'cleanliness of the above.'",
        patch: {
            mechanics: "基础阶级排异协议 + [垂直移动 = 触发指数级重力/阻力; 底层坐标 = 物理锚点; 向上僭越 = 视同病毒入侵]",
            mechanicsEn: "Base_CLASS_REJECTION + [Vertical_Movement = Triggers_Exponential_Gravity/Resistance; Bottom_Coordinate = Physical_Anchor; Upward_Transgression = Treated_as_Viral_Invasion]",
            aesthetic: "聚焦：向上望不到顶的冰冷高塔 + 主体因不堪重负而碎裂出血的膝盖与指甲。文本：带着一种不言而喻的傲慢，以上帝视角的物理碾压宣告越轨的无效。",
            aestheticEn: "Focus: Cold_Towers_with_No_Visible_Top + Subject's_Shattering_Knees_and_Nails_from_Overwhelming_Weight. Text: An_Unspoken_Arrogance_Declaring_the_Futility_of_Transgression_via_God's-Eye_Physical_Crushing.",
            runtime: "IF (主体试图强行跨越阶级物理分界线) THEN (强制：物理环境的重力场或防护网瞬间加码，迫使其骨骼断裂)。严禁主角依靠一腔热血轻松完成跨越。",
            runtimeEn: "IF (Subject_Attempts_to_Forcibly_Cross_Class_Physical_Boundaries) THEN (Force: The_Gravity_Field_or_Defense_Net_Instantly_Increases_Pressure_Breaking_Their_Bones). FORBID_Protagonist_Easily_Completing_the_Crossing_Solely_on_Passion."
        }
    },
    {
        id: "m4_limit_pain_quota",
        name: "痛苦配额制", nameEn: "The Pain Quota",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "为了维持上层建筑的无痛极乐，系统精确计算了总量守恒的痛苦，并全部配发给了基层肉体。",
        defEn: "To maintain the upper architecture's painless bliss, the system precisely calculates the conserved total amount of pain and distributed it entirely to the grassroots flesh.",
        core: "熵的强制转移。这个世界并没有消除痛苦，只是它把痛苦以KPI的形式转移到了你的静脉里。 | 形式：所有上等人的疾病都要由克隆人代为承受、穷人必须在疼痛模拟器里劳作以换取配给。",
        coreEn: "Forced transference of entropy. The world hasn't eradicated pain; it merely transferred it via KPIs directly into your veins. | Forms: Clones forced to endure the illnesses of nobles, the poor required to labor in pain simulators to earn rations.",
        logic: "享乐（Jouissance）的负数分配。拉康精神分析视角的“快感盗窃”最高级：大他者不仅剥削劳动剩余，更剥削了你的“无痛权”。上层社会的“天堂状态”是靠不断将灾厄与痛觉物理折叠并强塞给底层所稳固的。",
        logicEn: "Negative distribution of Jouissance. The ultimate form of 'theft of enjoyment' in Lacanian psychoanalysis: the Big Other exploits not only surplus labor but your 'right to be pain-free.' The 'heavenly state' of the upper crust is stabilized by continuously folding disasters and physical trauma and forcefully stuffing it into the lower classes.",
        patch: {
            mechanics: "基础熵转移协议 + [上层无痛 = 底层代偿; 痛苦配额 = 每日强制注入; 系统享乐 = 建立于下层生理战栗]",
            mechanicsEn: "Base_ENTROPY_TRANSFERENCE + [Upper_Painless = Lower_Compensation; Pain_Quota = Mandatory_Daily_Injection; System_Jouissance = Built_on_Lower_Physiological_Tremors]",
            aesthetic: "聚焦：满载惨叫的导管连接着上方歌舞升平的光环。文本：充斥着一种反乌托邦式精算师的冷血，将痛觉等同于可分配电力的暴政。",
            aestheticEn: "Focus: Tubes_Filled_with_Screams_Connecting_to_the_Festive_Halos_Above. Text: Cold-blooded_Dystopian_Actuary_Tyranny_Equating_Pain_to_Distributable_Electricity.",
            runtime: "IF (主体试图拒绝接收当天的痛苦配额) THEN (强制：系统判定为消极怠工，直接切断维生网络或施加双倍电击)。严禁底层个体可以通过意志屏蔽这种代偿式神经折磨。",
            runtimeEn: "IF (Subject_Attempts_to_Refuse_Today's_Pain_Quota) THEN (Force: System_Deems_It_Sabotage_Directly_Cutting_Life-Support_or_Applying_Double_Shocks). FORBID_Lower-Class_Individuals_Using_Willpower_to_Shield_this_Compensatory_Neural_Torture."
        }
    },
    {
        id: "m4_limit_forced_insomnia",
        name: "强制性失眠", nameEn: "Mandatory Insomnia",
        group: "05. 人造边界", groupEn: "The Constructed Limits",
        def: "梦境也是一种不被允许的逃避，系统利用化学或光污染，剥夺了你闭上眼睛的最后防线。",
        defEn: "Even dreams are unpermitted escapes; the system utilizes chemical or light pollution to strip away the final defense line of closing your eyes.",
        core: "疲惫的极度剥削。连睡眠这种最小单位的休假，都被判定为对生产力的背叛。 | 形式：永远被刺眼白光笼罩且服用防睡剂的赛博黑客血汗工厂、一旦脑波进入深睡就会被强制唤醒的奴隶项圈。",
        coreEn: "Extreme exploitation of exhaustion. Even sleep—the smallest unit of vacation—is deemed a betrayal of productivity. | Forms: Sweatshops perpetually bathed in glaring white light forcing anti-sleep drugs onto cyber-hackers, slave collars that shock the wearer upon entering deep sleep.",
        logic: "对无意识庇护所的物理摧毁。弗洛伊德认为梦是无意识对抗现实的缓冲。大他者（资本/体制）最恶毒的一点在于：它不许你拥有任何缓冲。当主体被迫 24 小时清醒地面对实在界（M2）的榨取，主体的精神防线会在极度脆弱中脆断。",
        logicEn: "Physical destruction of the unconscious asylum. Freud posits dreams are the unconscious buffering against reality. Capital/The Big Other's most vicious aspect is forbidding any buffer. Forced to stay awake 24/7 facing the Real's (M2) extraction, the subject's mental defenses snap in extreme fragility.",
        patch: {
            mechanics: "基础无意识摧毁协议 + [睡眠需求 = 视作反叛; 脑波监控 = 强制唤醒干预; 梦境避难所 = 物理抹除]",
            mechanicsEn: "Base_UNCONSCIOUS_DESTRUCTION + [Sleep_Need = Viewed_as_Rebellion; Brainwave_Monitoring = Forced_Wake-Up_Intervention; Dream_Asylum = Physically_Erased]",
            aesthetic: "聚焦：充血着恐怖红血丝的眼球 + 永远闪烁亮光的强对抗环境。文本：伴随着咖啡因和肾上腺素过载带来的心律失常与神经质崩溃感。",
            aestheticEn: "Focus: Terrifyingly_Bloodshot_Eyeballs + Environments_Endlessly_Flashing_with_Aggressive_Lights. Text: Arrythmia_and_Neurotic_Breakdowns_Brought_on_by_Caffeine_and_Adrenaline_Overload.",
            runtime: "IF (主体试图切断光源或摘除项圈以获取睡眠) THEN (强制：触发高分贝刺激音波或直接注入痛苦神经递质强制开机)。严禁系统给予主体超过生理极限的安全深睡时间。",
            runtimeEn: "IF (Subject_Attempts_to_Cut_Lights_or_Remove_Collars_for_Sleep) THEN (Force: Triggers_High-Decibel_Sonic_Blasts_or_Injects_Pain_Neurotransmitters_Forcing_Bootup). FORBID_System_Granting_Subject_Safe_Deep-Sleep_Exceeding_Physiological_Limits."
        }
    }
];
