import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_B: LibraryItemDef[] = [
    {
        id: "drv_sisyphus",
        name: "西西弗斯劳作", nameEn: "Sisyphean Labor",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "明知不可为而为之，日复一日地重复无意义的动作。",
        defEn: "Acting in spite of futility, repeating meaningless actions day after day.",
        core: "在荒谬的死循环中锚定存在。试图用无意义的劳作强行磨损实在界的荒诞（最终往往导致意识的木僵化）。 | Drive: 重复强迫驱力。",
        coreEn: "Anchoring existence in absurd loops. Attempting to wear down the Real's absurdity via meaningless labor. | Drive: Repetition Compulsion.",
        logic: "通过一种强迫性的、毫无指望的重复来对抗大他者的绝对无意义。利用机械循环强行确立自身的存在，以此向宇宙证明主体比荒谬本身更加荒谬。",
        logicEn: "Countering the Big Other's absolute meaninglessness through compulsive, hopeless repetition. Forcibly establishing existence via mechanical loops to prove the subject is more absurd than absurdity itself.",
        patch: {
            mechanics: "基础荒诞协议 + [产出变量 = 零; 循环维持 = 绝对执行]",
            mechanicsEn: "Base_ABSURDITY + [Output_Variable = Zero; Loop_Maintenance = Absolute_Execution]",
            aesthetic: "聚焦：磨损的手指/粗糙物料 + 重复挥汗的背影 + 毫无变化的背景。文本：充满卡顿感、如同死循环的疲惫断句。",
            aestheticEn: "Focus: Worn_Fingers/Rough_Materials + Sweating_Repeating_Back + Unchanging_Background. Text: Lagging, exhausting sentences like an infinite loop.",
            runtime: "IF (行为受挫) THEN (强制静默重置：毫无怨言地从头再来，严禁描写突然的顿悟或愤怒)。",
            runtimeEn: "IF (Action_Frustrated) THEN (Forced Silent Reset: Start over without complaint, restrict sudden epiphany or anger)."
        }
    },
    {
        id: "drv_wandering",
        name: "无尽游荡", nameEn: "Endless Wandering",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "像幽灵一样在城市或废土中穿梭，观察但不介入。",
        defEn: "Roaming through cities or wastelands like a ghost, observing without intervening.",
        core: "绝对主体的解域化（Deterritorialization）。通过不断的空间漂移来滑离大他者的话语捕获。 | Drive: 游牧驱力。",
        coreEn: "Deterritorialization of the absolute subject. Gliding away from the Big Other's discursive capture via spatial drift. | Drive: Nomadism.",
        logic: "拒绝在符号网络中占据任何固定的坐标（Signifier）。将肉体转化为一条平滑的逃逸线，使一切来自体制的规训凝视都无法对准焦距。",
        logicEn: "Refusing to occupy any fixed coordinate (Signifier) in the symbolic network. Transforming the body into a smooth line of flight, making all disciplinary gaze from the system unable to focus.",
        patch: {
            mechanics: "基础解域协议 + [物理锚点 = 清除; 社会干预度 = 0]",
            mechanicsEn: "Base_DETERRITORIALIZATION + [Physical_Anchor = Scanned/Erased; Social_Intervention = 0]",
            aesthetic: "聚焦：虚焦的远景 + 不断变换的地平线/后视镜 + 脚步的摩擦音。文本：游离、疏离、缺乏中心的失焦感。",
            aestheticEn: "Focus: Defocused_Wide_Shots + Ever-changing_Horizon/Rearview_Mirrors + Friction_of_Footsteps. Text: Detached, alienated, unfocused lacking a center.",
            runtime: "IF (遭遇剧情事件) THEN (强制指令：滑过边缘，仅做旁观，无论多么惨烈都切断物理介入)。",
            runtimeEn: "IF (Story_Event_Encountered) THEN (Forced Directive: Glide past the edge, observe only; sever physical intervention regardless of severity)."
        }
    },
    {
        id: "drv_waiting",
        name: "荒诞等待", nameEn: "Absurd Waiting",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "在一个封闭空间里，等待一个契机，或者是等待戈多。",
        defEn: "Being in a closed space, waiting for an opportunity, or for Godot.",
        core: "符号界的时间停滞。将决断权无限期悬置，幻想一种外部实在界降临的“弥赛亚时刻”。 | Drive: 悬置驱力。",
        coreEn: "Temporal stagnation in the Symbolic. Suspending decision indefinitely, fantasizing a messianic descent from the Real. | Drive: Suspension.",
        logic: "主体将能动性极度压缩，试图通过停止主动书写时间，来迫使大他者或上帝提供一个终极答案，但这只会在无限的延迟中掏空自身本体。",
        logicEn: "The subject wildly compresses agency, attempting to force the Big Other or God to provide an ultimate answer by ceasing active time-writing, which only hollows out their ontology in infinite delay.",
        patch: {
            mechanics: "基础悬置协议 + [时间流逝 = 无效化; 外部救赎 = 概率归零]",
            mechanicsEn: "Base_SUSPENSION + [Time_Flow = Nullified; External_Salvation = Zero_Probability]",
            aesthetic: "聚焦：静止的光影刻度 + 褪色的墙纸 + 漫无目的的敲击声。文本：极度缓慢的停滞，带有舞台剧般的荒诞喜剧色彩。",
            aestheticEn: "Focus: Static_Light_Ticks + Faded_Wallpaper + Aimless_Tapping_Sounds. Text: Extremely slow stagnation, carrying theatrical absurdist comedic tones.",
            runtime: "IF (等待时间极长) THEN (严禁目标出现，必须维持永远“即将到来”的临界状态)。",
            runtimeEn: "IF (Wait_Time_Prolonged) THEN (Forbid the goal's appearance, must maintain the perpetual 'imminent' critical state)."
        }
    },
    {
        id: "drv_over_ident",
        name: "过度认同", nameEn: "Over-Identification",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "比系统要求的还要听话，通过极度的服从让系统显得荒谬。",
        defEn: "More compliant than the system demands, making it appear absurd through extreme obedience.",
        core: "齐泽克式的过度认同。以绝对无死角的病态服从来暴露系统的结构性荒谬（对大他者最具破坏性的嘲弄）。 | Drive: 倒错模仿驱力。",
        coreEn: "Zizekian over-identification. Exposing systemic absurdity through pathological compliance. | Drive: Perverse Mimicry.",
        logic: "将系统潜藏的法西斯内核或荒谬逻辑直接且毫无遮掩地物理化执行。当主体把规则当真到极端地步时，反倒成了系统最危险的解构者。",
        logicEn: "Physically enforcing the system's hidden fascist core or absurd logic nakedly. When the subject takes the rules to extreme literal truths, they become the system's most dangerous deconstructor.",
        patch: {
            mechanics: "基础齐泽克倒错协议 + [服从度参数 = 超负荷; 幽默感 = 绝对剥离]",
            mechanicsEn: "Base_ZIZEK_PERVERSION + [Obedience_Parameter = Overload; Sense_of_Humor = Absolutely_Stripped]",
            aesthetic: "聚焦：极其僵化的制服/狂热的礼仪 + 分毫不差的执行动作 + 令人毛骨悚然的假笑。文本：带着一种近乎偏执的狂热服从感。",
            aestheticEn: "Focus: Extremely_Stiff_Uniforms/Fanatical_Etiquette + Incrementally_Precise_Execution + Creepy_Fake_Smiles. Text: Carrying an almost paranoid fanatical obedience.",
            runtime: "IF (接收指令) THEN (触发倍增宏指令：以系统无法承受的完美且变态的规格去执行)。",
            runtimeEn: "IF (Command_Received) THEN (Trigger Doubling Macro: Execute at a perfect and perverse scale the system cannot bear)."
        }
    },
    {
        id: "drv_bartleby",
        name: "沉默/拒斥", nameEn: "Bartleby's Refusal",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "“我倾向于不。”(I would prefer not to). 温和但坚定的拒绝参与。",
        defEn: "“I would prefer not to.” A gentle yet resolute refusal to participate.",
        core: "绝对的消极否定。用死物般的沉重切断符号网络的传输链，让系统在无法处理的“不响应”中宕机。 | Drive: 瘫痪驱力。",
        coreEn: "Absolute passive negation. Severing the symbolic network with deathly heaviness, making the system crash on non-response. | Drive: Paralysis.",
        logic: "一种温和到令人发指的无物状态。既不愤怒也不顺从，只提供一个完全无摩擦的实心墙壁，使围绕其运转的一切权力系统丧失着力点。",
        logicEn: "A mild yet exasperating state of nothingness. Neither angry nor compliant, solely providing a frictionless solid wall, stripping all rotating power systems of their exertion points.",
        patch: {
            mechanics: "基础死机协议 + [响应函数 = 阻塞; 情绪波动 = 0]",
            mechanicsEn: "Base_CRASH + [Response_Function = Blocked; Emotion_Fluctuation = 0]",
            aesthetic: "聚焦：低垂的目光 + 凝固的姿态 + 他人无能狂怒的对比。文本：如同冰冷石碑般的陈述语句，缺乏一切心理描写。",
            aestheticEn: "Focus: Downcast_Eyes + Solidified_Posture + Contrast_of_Others'_Impotent_Rage. Text: Declarative sentences like cold steles, lacking all psychological description.",
            runtime: "IF (面临外部胁迫) THEN (输出唯一函数：礼貌不为所动，绝对不在物理与语言上反击)。",
            runtimeEn: "IF (Facing_External_Coercion) THEN (Output Sole Function: Polite unmoved refusal, absolutely no physical or linguistic counterattack)."
        }
    },
    {
        id: "drv_self_exile",
        name: "自我放逐", nameEn: "Self-Exile",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "主动切断与社会的一切联系，退回到荒野或内心。",
        defEn: "Actively severing all social ties, retreating to the wilderness or the inner self.",
        core: "主动切割与大他者的拓扑链接。彻底放弃符号身份，退入无名者所属的实在界荒野。 | Drive: 剥离驱力。",
        coreEn: "Actively severing topological links with the Big Other. Yielding symbolic identity to retreat into the Real. | Drive: Detachment.",
        logic: "通过在地图和社交网络上主动抹除自身的能指印记，完成一次社会学意义上的提前死亡，借此豁免于系统的一切债务与规训。",
        logicEn: "Completing a sociological premature death by actively erasing one's signifier imprints on maps and social networks, thereby gaining immunity from all systemic debts and disciplines.",
        patch: {
            mechanics: "基础脱机协议 + [社会连结 = 全损弃置; 本体缩水 = 最大化]",
            mechanicsEn: "Base_OFFLINE + [Social_Links = Total_Loss_Disposal; Ontological_Shrinkage = Max]",
            aesthetic: "聚焦：风沙吞噬足迹 + 废弃的身份证明文件 + 背向人群走入荒原。文本：带着一种绝对孤绝的空旷散文感。",
            aestheticEn: "Focus: Sand_Swallowing_Footprints + Discarded_ID_Documents + Walking_Into_Wasteland_Back_to_Crowd. Text: A sprawling prose sensation of absolute isolation.",
            runtime: "IF (触发离去条件) THEN (强制抹除所有回头与眷恋的念头，进行无残留的数据卸载)。",
            runtimeEn: "IF (Departure_Triggered) THEN (Forced erase of all thoughts of looking back or nostalgia, perform residue-free data uninstallation)."
        }
    },
    {
        id: "drv_starvation",
        name: "绝食", nameEn: "Hunger Strike",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "拒绝进食，用慢性自杀来抗议。",
        defEn: "Refusing to eat, using slow suicide as a form of protest.",
        core: "对抗生物界限的最高拒斥。通过慢性物理萎缩，将肉体从大他者的客体库中强行抹除。 | Drive: 减熵驱力。",
        coreEn: "Supreme rejection of biological limits. Forcibly erasing the body from the Big Other's object registry via slow atrophy. | Drive: Entropy Reduction.",
        logic: "将肉体从‘属于系统可管理的生物资源’置换为‘一种被展览的创伤实体’，以此作为最后的赎价强迫权威陷入道德破产或极度焦虑。",
        logicEn: "Transposing the body from 'manageable biological resource of the system' into 'an exhibited traumatic entity', serving as the final ransom to force authority into moral bankruptcy or extreme anxiety.",
        patch: {
            mechanics: "基础减法协议 + [生物摄入 = 关闭; 躯体能耗 = 极低; 凝视压力 = 对外反弹]",
            mechanicsEn: "Base_SUBTRACTION + [Bio-Intake = Off; Body_Metabolism = Ultra-Low; Gaze_Pressure = Outward_Rebound]",
            aesthetic: "聚焦：突兀的颧骨与肋骨 + 干裂的嘴唇 + 监视器后长官的恐慌。文本：干瘪、倒计时般的压抑，充满骨骼刺透肌肤的隐喻。",
            aestheticEn: "Focus: Protruding_Cheekbones_and_Ribs + Cracked_Lips + Panic_of_Officers_behind_Monitors. Text: Shriveled, countdown-like oppression, full of metaphors of bone piercing skin.",
            runtime: "IF (提供食物) THEN (系统性否决，并且每次拒绝都在增加对方威权架构的拓扑裂纹)。",
            runtimeEn: "IF (Food_Offered) THEN (Systemic Veto, and every refusal adds topological cracks to the opponent's authoritarian framework)."
        }
    },
    {
        id: "drv_feign_madness",
        name: "装疯卖傻", nameEn: "Feigning Madness",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "哈姆雷特式的伪装。用疯言疯语说出真相。",
        defEn: "Hamlet-like masquerade. Speaking truth through the words of madness.",
        core: "利用精神分裂的言说作为力场护盾。在倒错中走私真理，逃躲符号秩序的逻辑审查。 | Drive: 谵妄驱力。",
        coreEn: "Using schizophrenic speech as a force-field. Smuggling truth through perversion to evade symbolic censorship. | Drive: Delirium.",
        logic: "在严密的权法语境下，理性的真理会被立刻绞杀。唯有主动跌入非理性的语法废墟中，才能使那致命的小对象真理如同特洛伊木马般渗透系统。",
        logicEn: "Under strict authoritative discourse, rational truth is instantly strangled. Only by actively plummeting into the syntactic ruins of irrationality can the fatal little object of truth penetrate the system like a Trojan horse.",
        patch: {
            mechanics: "基础掩码协议 + [逻辑链条 = 伪乱序; 真理载荷 = 隐匿传输]",
            mechanicsEn: "Base_MASK + [Logic_Chain = Pseudo-Random; Truth_Payload = Stealth_Transmission]",
            aesthetic: "聚焦：流着口水的狂笑 + 无逻辑的涂鸦内藏图纸 + 他人的鄙夷。文本：句子破碎、充满谐音隐喻和黑色幽默。",
            aestheticEn: "Focus: Drooling_Maniacal_Laughter + Illogical_Graffiti_Hiding_Blueprints + Others'_Disdain. Text: Broken sentences, filled with homophonic metaphors and dark humor.",
            runtime: "IF (遭遇审讯) THEN (抛出大量认知垃圾数据包裹核心事实，使分析判定模块完全崩溃)。",
            runtimeEn: "IF (Interrogation_Encountered) THEN (Throw massive cognitive garbage data wrapping the core fact, making the analytics module crash entirely)."
        }
    },
    {
        id: "drv_performance_art",
        name: "行为艺术", nameEn: "Performance Art",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "在公共场合进行怪诞的表演。",
        defEn: "Conducting grotesque performances in public spaces.",
        core: "打破日常生活平滑的符号伪装。用怪诞肉身引发小型的实在界裂口，制造社会认知的瞬间短路。 | Drive: 刺穿驱力。",
        coreEn: "Shattering everyday symbolic camouflage. Triggering mini Real-fissures through the grotesque body, short-circuiting public cognition. | Drive: Puncture.",
        logic: "日常景观是一层无缝的意识形态薄膜。行为艺术是将肉身作为一把钝刀，于闹市中心划开一道突兀的切口，迫使路人面对那一闪而过的虚无与不安。",
        logicEn: "Everyday spectacle is a seamless ideological membrane. Performance art uses the body as a dull blade to rip an abrupt incision in the city center, forcing passersby to confront a flashing void and unease.",
        patch: {
            mechanics: "基础刺杀景观协议 + [空间违和度 = 最高; 互动期望 = 拒绝迎合]",
            mechanicsEn: "Base_SPECTACLE_PUNCTURE + [Spatial_Incongruity = Max; Interaction_Expectation = Reject_Catering]",
            aesthetic: "聚焦：涂满涂料的裸露躯干 + 错愕避开的行人群像 + 非正常的重力或体态畸变。文本：充满刺目、尴尬与视觉上的不适张力。",
            aestheticEn: "Focus: Painted_Exposed_Torso + Startled_Avoiding_Pedestrians + Abnormal_Gravity_or_Postural_Distortion. Text: Glaring, awkward, full of visual discomfort and tension.",
            runtime: "IF (进行表演) THEN (完全免疫外界嘲笑或同情，自成一个极其绝对的荒诞闭环领地)。",
            runtimeEn: "IF (Performing) THEN (Completely immune to external mockery or sympathy, formulating an absolute absurd closed-loop territory of its own)."
        }
    },
    {
        id: "drv_hermit",
        name: "隐居", nameEn: "Hermit",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "躲进深山或下水道，建立自己的小世界。",
        defEn: "Hiding in deep mountains or sewers to build one's own small world.",
        core: "建立一个没有大他者的微观拓扑结构。试图在废墟之下缝合出能够自给自足的孤独子宫。 | Drive: 闭室/子宫驱力。",
        coreEn: "Building a micro-topology without the Big Other. Attempting to suture a self-sufficient lonely womb beneath the ruins. | Drive: Womb.",
        logic: "是对宏观宇宙的全面大撤退。主体用物理绝缘（墙壁、深渊、屏障）硬生生切掉与公共权力的交响通道，在极端贫瘠中重塑自我的造物主幻觉。",
        logicEn: "A full retreat from the macro cosmos. The subject uses physical insulation to violently sever symphonic channels with public power, reshaping a creator illusion in extreme barrenness.",
        patch: {
            mechanics: "基础缩命协议 + [微观系统 = 自循环; 外部变量输入 = 物理断绝]",
            mechanicsEn: "Base_SHRINKING + [Micro_System = Self-Sustaining; External_Variable_Input = Physically_Severed]",
            aesthetic: "聚焦：苔藓覆盖的自制供水管 + 昏暗防空洞里的微型盆栽 + 孤独的安全感。文本：局促、幽谧、内卷化的狂热与病态的安全舒适。",
            aestheticEn: "Focus: Moss-Covered_DIY_Pipes + Miniature_Potted_Plants_in_Dim_Bunker + Lonely_Sense_of_Security. Text: Cramped, secluded, involuted fervor and morbid safe comfort.",
            runtime: "IF (系统运转正常) THEN (严禁外出欲望的描写，表现为对外部世界的绝对遗忘和恐惧壁垒)。",
            runtimeEn: "IF (System_Running_Normally) THEN (Forbid descriptions of desire to go out, present as an absolute forgetting and fear-barrier of the external world)."
        }
    },
    {
        id: "drv_spectacle",
        name: "成为景观", nameEn: "Becoming Spectacle",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "主动将自己的隐私 and 痛苦暴露给大众消费。",
        defEn: "Actively exposing one's privacy and pain for mass consumption.",
        core: "反客为主的异化。既然无法躲避注视，便主动异化为高浓度的景观排泄物来反向毒害凝视者。 | Drive: 展演异化驱力。",
        coreEn: "Hostile alienation. Unable to dodge the gaze, actively mutating into toxic spectacle waste to poison the watcher. | Drive: Spectacular Alienation.",
        logic: "看透了消费主义凝视的吸血本质，于是主动将自己做成最恶心、最扭曲的赛博器官摆上手术台，撑死那个名为“大众审美”的贪婪巨兽。",
        logicEn: "Seeing through the vampiric nature of consumerist gaze, thus actively turning oneself into the most disgusting, twisted cyber-organ on the slab, overfeeding the greedy beast called 'public aesthetics'.",
        patch: {
            mechanics: "基础毒药协议 + [隐私屏障 = 彻底粉碎; 迎合度 = 倒错性超量]",
            mechanicsEn: "Base_POISON + [Privacy_Barrier = Utterly_Smashed; Pander_Level = Perverse_Overload]",
            aesthetic: "聚焦：闪光灯下的鲜血与泪水交织 + 过于真实的数字疤痕 + 直播间的猎奇弹幕。文本：喧闹、高度塑料感，令人作呕的剥削感。",
            aestheticEn: "Focus: Blood_and_Tears_under_Flashbulbs + Hyper-Realistic_Digital_Scars + Grotesque_Live_Stream_Comments. Text: Noisy, highly plastic, nauseatingly exploitative.",
            runtime: "IF (受到关注) THEN (立刻加大自我展示的创伤尺度，将自我消费的螺旋推向毁灭顶点)。",
            runtimeEn: "IF (Attention_Received) THEN (Instantly escalate the trauma scale of self-exhibition, pushing the spiral of auto-consumption to destructive apex)."
        }
    },
    {
        id: "drv_lying_flat",
        name: "彻底躺平", nameEn: "Lying Flat",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "降低欲望，不买房不结婚不工作。",
        defEn: "Lowering desire, and refusing to buy property, marry, or work.",
        core: "对资本主义欲望循环的物理级斩断。维持生命最低阈值的低熵生存（抵抗消费大厦的榨取）。 | Drive: 静息/低熵驱力。",
        coreEn: "Physical severing of capitalist desire loops. Low-entropy survival at the minimum threshold (resisting consumptive extraction). | Drive: Resting/Low-Entropy.",
        logic: "利用生物学底线来抵抗社会学超负荷。将主体降阶为没有摩擦力的惰性气体，使系统准备用来收割的内卷镰刀全都劈穿在空气上。",
        logicEn: "Using biological baselines to resist sociological overload. Degrading the subject into frictionless inert gas, causing the system's involution-scythes meant for harvesting to slash empty air.",
        patch: {
            mechanics: "基础低耗能协议 + [欲望引擎 = 熄火; 刺激阙值 = 钝化绝缘]",
            mechanicsEn: "Base_LOW_POWER_MODE + [Desire_Engine = Stalled; Stimulus_Threshold = Blunt_Insulation]",
            aesthetic: "聚焦：天花板的污渍 + 不流动的死水般的室内空气 + 随波逐流的瘫软身躯。文本：缺乏动词、黏稠、漫长而灰暗。",
            aestheticEn: "Focus: Ceiling_Stains + Stagnant_Dead_Water_Indoor_Air + Limp_Drifting_Body. Text: Lacking verbs, viscous, prolonged and dismal.",
            runtime: "IF (系统诱惑如消费或升职) THEN (核心指令：绝对缺乏兴趣的漠然滑落。严禁出现奋斗觉醒的桥段)。",
            runtimeEn: "IF (System_Temptation_Appears) THEN (Core directive: absolute lack of interest and indifferent slide. Arousal to struggle is strictly forbidden)."
        }
    },
    {
        id: "drv_schizo_weapon",
        name: "精神分裂", nameEn: "Schizo-Weapon",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "利用幻觉和妄想来指导行动。",
        defEn: "Using hallucinations and delusions to guide actions.",
        core: "德勒兹式精神分裂武器化。主动切断能指链的因果逻辑，在妄想狂乱中寻找逃逸线（极易彻底失智）。 | Drive: 精神爆破驱力。",
        coreEn: "Deleuzian schizo-weaponization. Deliberately cutting causal signifier chains to find flight lines in paranoia. | Drive: Schizo-Blast.",
        logic: "理性能指不过是大他者的监狱。通过主动拥抱大脑突触的短路，将神经错乱转化为越界行动的解码器，以狂热幻觉突破现实封锁。",
        logicEn: "Rational signifiers are mere prisons of the Big Other. By actively embracing synaptic short-circuits, translating neurological aberration into transgressive decoders, breaking reality's blockade via fanatical hallucinations.",
        patch: {
            mechanics: "基础解码协议 + [逻辑连贯性 = 随机跳跃; 幻觉叠加 = 100%相信]",
            mechanicsEn: "Base_DECODE + [Logical_Coherence = Random_Jumps; Hallucination_Overlay = 100%_Believed]",
            aesthetic: "聚焦：重影、杂色与视听错位 + 对无生命物体的狂热交谈 + 破碎的镜像。文本：跳跃的意识流，逻辑因果被彻底砸碎。",
            aestheticEn: "Focus: Ghosting_Glitching_Audio-Visual_Desync + Fanatical_Speech_to_Inanimate_Objects + Broken_Mirrors. Text: Leaping stream-of-consciousness, causal logic smashed entirely.",
            runtime: "IF (遭遇逻辑困境) THEN (不尝试解答，直接用更高维度的错乱概念覆盖现实问题)。",
            runtimeEn: "IF (Logical_Dilemma_Met) THEN (No attempt to solve; overwrite the real issue instantly with an insane concept from a higher dimension)."
        }
    },
    {
        id: "drv_drug_escape",
        name: "药物麻醉", nameEn: "Drug Escape",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "沉溺于化学物质制造的幻觉中。",
        defEn: "Indulging in hallucinations created by chemical substances.",
        core: "强制阻断创伤认知。通过化学分子篡改视觉结构，遁入人造的虚假完美闭环（不可逆的机能毁损）。 | Drive: 致幻闭环驱力。",
        coreEn: "Forcibly blocking trauma cognition. Altering visual structures via chemicals, fleeing into fragile artificial loops. | Drive: Hallucinatory Loop.",
        logic: "通过受体分子的占领，暴力关停主体感受实在界创痛的频道，将意识强制导入色彩斑斓与虚假全能感的内向型黑洞。",
        logicEn: "Through molecular receptor occupation, violently shutting off the subject's channel of feeling Real trauma, forcing consciousness into an inward black hole of colorful, false omnipotence.",
        patch: {
            mechanics: "基础镇痛协议 + [多巴胺回路 = 烧毁式过载; 对外感官 = 解除绑定]",
            mechanicsEn: "Base_ANALGESIC + [Dopamine_Circuit = Burnout_Overload; Exteroception = Unbound]",
            aesthetic: "聚焦：散落的药片与注射器 + 虹吸般的瞳孔放大 + 扭曲而过度饱和的感官迷幻画面。文本：晕眩感，感官位移的描述堆叠。",
            aestheticEn: "Focus: Scattered_Pills_and_Syringes + Siphoning_Dilated_Pupils + Warped_Oversaturated_Psychedelic_Visions. Text: Vertigo, stacked descriptions of sensory displacement.",
            runtime: "IF (药效激活) THEN (外部世界的危机和警报声彻底化为沉闷的无意义背景白音)。",
            runtimeEn: "IF (Drug_Effects_Active) THEN (External crises and alarms completely dissolve into dull, meaningless background white noise)."
        }
    },
    {
        id: "drv_dream_escape",
        name: "梦境逃避", nameEn: "Dream Escape",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "通过清明梦或冬眠技术长眠不醒。",
        defEn: "Refusing to wake up through lucid dreaming or hibernation technology.",
        core: "拒绝第一现实。潜入无意识的剧场，将梦境中扭曲的主从关系视为唯一真理的避难所。 | Drive: 梦之潜航驱力。",
        coreEn: "Rejecting primary reality. Diving into the unconscious theater, treating dream logic as the sole sanctuary. | Drive: Dream Dive.",
        logic: "既然清醒世界是被大他者牢牢固化的异化地狱，那便彻底废除清醒时间的合法性。主动进入脑域皮层的私有元宇宙，永不登录现实。",
        logicEn: "Since the waking world is an alienated hell firmly solidified by the Big Other, the legitimacy of waking time is utterly abolished. Actively logging into the cortex's private metaverse, never returning to reality.",
        patch: {
            mechanics: "基础休眠协议 + [清醒锚点 = 斩断; 潜意识下潜深度 = 核心层]",
            mechanicsEn: "Base_HIBERNATION + [Waking_Anchor = Severed; Subconscious_Dive_Depth = Core_Layer]",
            aesthetic: "聚焦：插满静脉营养液的休眠舱 + 眼皮下的快速眼动(REM) + 梦境层非几何逻辑的流变空间。文本：如羊水般温暖、黏稠而封闭的梦呓。",
            aestheticEn: "Focus: Hibernate_Pod_full_of_IVs + REM_under_Eyelids + Non-Geometric_Flux_Space_of_Dream_Layers. Text: Somniloquy as warm, viscous, and sealed as amniotic fluid.",
            runtime: "IF (面临唤醒刺激) THEN (梦境防御机制启动：将现实刺激编织进梦境合理化，坚决抗拒苏醒)。",
            runtimeEn: "IF (Facing_Wakeup_Stimulus) THEN (Dream Defense triggered: wave real stimulus into dream rationalization, fiercely resist waking)."
        }
    },
    {
        id: "drv_fiction_history",
        name: "编写伪史", nameEn: "Fictional History",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "编造不存在的历史或记忆，并信以为真。",
        defEn: "Inventing non-existent history or memory and believing it to be true.",
        core: "回溯性篡改的实践。洞悉历史维度的虚构本质后，试图主动编写并强行内化虚妄的锚点。 | Drive: 伪史构筑驱力。",
        coreEn: "Practice of retrospective tampering. Realizing history's fictional nature, actively writing and internalizing false anchors. | Drive: Fictitious Narrative.",
        logic: "意识形态本身不过是胜利者构建的拟像故事。主体为了抵抗自我破碎，疯狂刻写虚构记忆与荣光档案，以拼贴的假信标来确立当前的存在点。",
        logicEn: "Ideology itself is merely a simulacrum built by victors. To resist ego-fragmentation, the subject frantically inscribes fictional memories and glory archives, using patched false beacons to secure current coordinates.",
        patch: {
            mechanics: "基础曼德拉效应协议 + [认知自我覆盖 = 深度刻入; 逻辑矛盾 = 视而不见]",
            mechanicsEn: "Base_MANDELA_EFFECT + [Cognitive_Self-Overwrite = Deep-Inscribed; Logical_Contradictions = Blindness]",
            aesthetic: "聚焦：发黄的伪造老照片 + 神经质的剪报板拼贴 + 用确凿证据否定真理时的狂热神态。文本：极尽详实且充满无懈可击论述的癫狂感。",
            aestheticEn: "Focus: Yellowed_Forged_Old_Photos + Neurotic_Clipping_Board_Collages + Fanatical_Gaze_when_Denying_Truth_with_Evidence. Text: Insane sensation, exhaustively detailed with watertight arguments.",
            runtime: "IF (伪史遭遇反驳) THEN (抛出更加庞大复杂的阴谋论，进行嵌套式的第二阶段护教闭环)。",
            runtimeEn: "IF (Fictional_History_Refuted) THEN (Deploy a massively complex conspiracy theory, initiating a nested secondary apologetic loop)."
        }
    },
    {
        id: "drv_useless_build",
        name: "建造无用之物", nameEn: "Building Useless",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "耗尽一生建造一个没有功能的巨大机器。",
        defEn: "Spending a lifetime building a massive machine with no function.",
        core: "对“工具理性”的极限亵渎。倾注全部力比多于反结构之物，制造绝对的符号耗费。 | Drive: 巨型耗散驱力。",
        coreEn: "Ultimate blasphemy against 'instrumental reason'. Pouring all libido into anti-structural things, creating absolute symbolic waste. | Drive: Massive Dissipation.",
        logic: "在实用主义极权之下，‘无用’才是最凶猛的飞地。花费毕生精力构筑一堆除了占用空间和消耗精力以外毫无产出的齿轮怪兽，以此嘲弄生产力的意义。",
        logicEn: "Under the totalitarianism of pragmatism, 'uselessness' is the fiercest enclave. Spending a lifetime building a gear-monster yielding zero output beside devouring space and focus, to mock the meaning of productivity.",
        patch: {
            mechanics: "基础废料堆积协议 + [功利性 = 归零; 耗竭指数 = 指数级上升]",
            mechanicsEn: "Base_JUNK_ACCUMULATION + [Utilitarianism = Zero; Exhaustion_Index = Exponential]",
            aesthetic: "聚焦：盲目空转的巨大齿轮 + 繁琐但无连接的铜管网络 + 建造者沾满油污的疲倦面容。文本：透出一种令人窒息的宏伟无意义感。",
            aestheticEn: "Focus: Blindly_Idling_Giant_Gears + Complex_Disconnected_Copper_Pipes + Oily_Exhausted_Face_of_Builder. Text: Exuding a suffocating majestic sense of meaninglessness.",
            runtime: "IF (被追问装置用途) THEN (严禁赋予其实际功能，必须指向一个绝对空洞的形而上盲点)。",
            runtimeEn: "IF (Questioned_About_Device's_Purpose) THEN (Forbid assigning any actual function, must point to an absolute hollow metaphysical blind spot)."
        }
    },
    {
        id: "drv_object_talk",
        name: "与物体对话", nameEn: "Talking to Objects",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "把无生命的物体当做唯一的伴侣。",
        defEn: "Treating inanimate objects as the sole companion.",
        core: "注销人类主体间的拓扑回路。将欲望投射给无回应的死物，获取绝对安全但彻底失真的客体回音。 | Drive: 恋物固着驱力。",
        coreEn: "Canceling human topological circuits. Projecting desire onto mute objects for absolute safety but entirely distorted echoes. | Drive: Fetish Fixation.",
        logic: "真实他者充满着深渊、断裂与伤害性。主体通过彻底撤资人际关系，将所有的符号位（朋友、爱人）转包给绝对沉默和不可变更的物件，以实现自闭式掌控。",
        logicEn: "The true Other is fraught with abysses, ruptures, and hurt. By utterly divesting from interpersonal relations, the subject outsources all symbolic slots (friend, lover) to absolutely silent, immutable objects for autistic mastery.",
        patch: {
            mechanics: "基础恋物癖协议 + [活体互斥 = 开启; 情感投射单行道 = 最大化]",
            mechanicsEn: "Base_FETISHISM + [Living_Entity_Repulsion = True; One-Way_Emotional_Projection = Max]",
            aesthetic: "聚焦：因常年抚摸而包浆的物品表面 + 对话时的偏执柔情 + 旁边活人的惊悚或悲哀反应。文本：带着一种温馨的外壳，内里其实是冰冷的非人疯癫。",
            aestheticEn: "Focus: Patina_on_Items_from_Years_of_Caress + Paranoid_Tenderness_during_Conversation + Shock/Sorrow_of_Living_Bystanders. Text: Wearing a warm shell, inside hides cold inhuman madness.",
            runtime: "IF (活人介入破坏物品) THEN (将触发超过杀害亲属量级的极度狂暴报复)。",
            runtimeEn: "IF (Living_Person_Interferes_or_Damages_Object) THEN (Will trigger extreme berserk retaliation exceeding the scale of kin murder)."
        }
    },
    {
        id: "drv_becoming_part",
        name: "成为零件", nameEn: "Becoming Part",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "试图物理上融入机器或建筑。",
        defEn: "Attempting to physically integrate into machines or structures.",
        core: "最深沉的去主体化渴望。放弃独立的本体论地位，祈求降格为大他者物理机器中无痛感的螺丝钉。 | Drive: 绝对物化驱力。",
        coreEn: "Deepest yearning for de-subjectification. Relinquishing ontological independence, begging to regress into a painless cog. | Drive: Absolute Reification.",
        logic: "逃避选择与焦虑的终极方式。既然主体的存在本身成为一种沉重的负担与拉扯，不如直接液化或固化，与冷硬但永恒的地景融为一体，免于存在的匮乏苦海。",
        logicEn: "The ultimate escape from choice and anxiety. Since subjectivity itself implies heavy burden and tearing, why not liquefy or solidify directly, merging with the cold hard eternal landscape to escape the bitter sea of existential lack.",
        patch: {
            mechanics: "基础去主化协议 + [物理融合 = 进行中; 疼痛传导 = 切断式接纳]",
            mechanicsEn: "Base_DESUBJECTIFICATION + [Physical_Fusion = In_Progress; Pain_Conduction = Severance_Acceptance]",
            aesthetic: "聚焦：贯穿血肉的铆钉/电缆 + 皮肤向灰泥或金属色泽的渐变 + 失去焦距却透出解脱的眼神。文本：寂灭感，主体意识蒸发的缓慢描写。",
            aestheticEn: "Focus: Rivets/Cables_Piercing_Flesh + Skin's_Gradient_towards_Plaster_or_Metal + Defocused_Eyes_Showing_Relief. Text: Nirvana-like sensation, slow description of evaporating consciousness.",
            runtime: "IF (融合进度增加) THEN (对外界的响应能力阶梯式断电，直到完全成为墙壁的一部分)。",
            runtimeEn: "IF (Fusion_Progresses) THEN (Staircase shutdown of responsiveness to the outside, until utterly becoming part of the wall)."
        }
    },
    {
        id: "drv_mimic_other",
        name: "模仿大他者", nameEn: "Mimicking Other",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "穿上统治者的衣服，模仿他们的举止。",
        defEn: "Putting on the rulers' clothes and mimicking their manners.",
        core: "皮囊的滑稽僭越。通过复制上位者的表面能指碎片，来幻想攫取权力本身（必定陷入小丑般的虚无）。 | Drive: 拟态虚无驱力。",
        coreEn: "Farcical usurpation of the skin. Copying rulers' signifier fragments to hallucinate power seizure (inevitably falling to clownish void). | Drive: Mimetic Void.",
        logic: "权力是虚空的占位符。下位者误以为掌握了主人的鞭子形态与口吻就能接驳权力机制，但这仅仅是在实在界的裂痕上画了一张拙劣的小丑笑脸。",
        logicEn: "Power is a placeholder for the void. The underdog mistakenly believes adopting master's whip-form and tone plugs them into the power machine, but this merely paints a clumsy clown smile over the Real's fissure.",
        patch: {
            mechanics: "基础拟态协议 + [形式模仿 = 100%; 内核引擎 = 欠缺; 喜剧反讽 = 随时引爆]",
            mechanicsEn: "Base_MIMICRY + [Formal_Imitation = 100%; Core_Engine = Missing; Comedic_Irony = Ready_to_Detonate]",
            aesthetic: "聚焦：不合身的奢华外套 + 生硬排练的主人口吻 + 镜子前滑稽而狂热的自我陶醉。文本：强烈的反差喜剧，隐藏着极度可悲的徒劳。",
            aestheticEn: "Focus: Ill-Fitting_Luxury_Coat + Stiff_Rehearsed_Master Tone + Farcical_Fanatical_Narcissism_Before_Mirror. Text: Strong contrast comedy, hiding intensely pathetic futility.",
            runtime: "IF (他者真正凝视投来时) THEN (立刻出现破功、战栗或更深度的崩溃式假笑)。",
            runtimeEn: "IF (Real_Gaze_of_the_Other_Falls) THEN (Instant break of character, trembling, or a deeper collapse into fake smiling)."
        }
    },
    {
        id: "drv_prayer",
        name: "无效祈祷", nameEn: "Futile Prayer",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "向不存在的神或沉默的天空不断祈求。",
        defEn: "Constantly praying to non-existent gods or the silent sky.",
        core: "绝望的符号投递。在缺失回音的拓扑黑洞中，仅靠语言的单向抛射来维系主体理智的苟延残喘。 | Drive: 空洞祈唤驱力。",
        coreEn: "Desperate symbolic delivery. Single-directional linguistic projection into a topological black hole just to ward off madness. | Drive: Hollow Invocation.",
        logic: "这是齐泽克所说的‘非由于信仰，而是为维持信仰的框架’。即使天庭空无一人，主体为了不致掉入彻底的实在界深渊，也必须假意维持一个正在聆听的A点。",
        logicEn: "This is Žižek's 'not out of belief, but to maintain the framework of belief'. Even if heaven is vacant, the subject must feign the existence of a listening Point A to avoid plummeting into the total abyss of the Real.",
        patch: {
            mechanics: "基础单向信道协议 + [接收端 = 永不响应; 传输功耗 = 精神枯竭级别]",
            mechanicsEn: "Base_UNIDIRECTIONAL_CHANNEL + [Receiver = Never_Responds; Transmission_Drain = Mental_Depletion_Level]",
            aesthetic: "聚焦：干裂的嘴唇念诵 + 空旷而具有回声的神圣或荒芜空间 + 头顶漠然而庞大的苍穹。文本：无底洞般的沉寂反衬极度弱微的话语。",
            aestheticEn: "Focus: Cracked_Lips_Chanting + Vast_Echoing_Sacred_or_Barren_Space + Indifferent_Massive_Sky_Above. Text: Bottomless-pit silence contrasting extremely frail speech.",
            runtime: "IF (祈祷被现实暴行打断) THEN (不作回击，只是闭眼提高祈祷的语速与音量，企图用声音隔绝血腥现实)。",
            runtimeEn: "IF (Prayer_Interrupted_by_Real_Atrocity) THEN (Do not retaliate, merely close eyes and raise prayer speed and volume, attempting to insulate bloody reality via sound)."
        }
    },
    {
        id: "drv_ritual_life",
        name: "仪式化生活", nameEn: "Ritualized Life",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "建立极其繁琐的个人仪式来对抗混乱。",
        defEn: "Establishing extremely tedious personal rituals to combat chaos.",
        core: "强迫症式的微观法权建立。在不可控的现实塌陷中，通过机械仪式勉强缝合出理智的临时避难所。 | Drive: 强迫缝合驱力。",
        coreEn: "Obsessive micro-sovereignty. Force-suturing a temporary asylum of sanity amidst collapsing reality using mechanical rituals. | Drive: Compulsive Suture.",
        logic: "大他者法律体系崩断后，主体用极致繁冗的生活小动作重构一个专横的微型神庙。通过绝对可控的因果（洗手七次=安全），来阻挡实在界的洪流漫入。",
        logicEn: "After the Big Other's legal system collapses, the subject rebuilds an imperious micro-temple using excruciatingly mundane gestures. Using absolute controllable causality (washing hands seven times = safe) to dam the flood of the Real.",
        patch: {
            mechanics: "基础强迫控制协议 + [宏观无能 = 映射至微观暴政; 秩序破坏抗性 = 极差]",
            mechanicsEn: "Base_COMPULSIVE_CONTROL + [Macro_Impotence = Mapped_to_Micro_Tyranny; Order_Rupture_Resistance = Extremely_Poor]",
            aesthetic: "聚焦：精准切割的物品摆放 + 秒表上的数字滴答声 + 极其神经质的手指动作。文本：带有一种钟表发条过紧即将崩断的清脆焦虑感。",
            aestheticEn: "Focus: Precisely_Aligned_Objects + Stopwatches_Ticking + Extremely_Neurotic_Finger_Twitches. Text: Crisp anxiety like an overtightened clockspring about to snap.",
            runtime: "IF (仪式中途被打断) THEN (引发指数级恐慌，必须从第一步骤重新开始，且伴随强烈的自我憎恨)。",
            runtimeEn: "IF (Ritual_Interrupted_Midway) THEN (Trigger exponential panic, must restart from step one, accompanied by intense self-loathing)."
        }
    },
    {
        id: "drv_self_objectify",
        name: "自我客体化", nameEn: "Self-Objectification",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "把自己当做一个物品来展示或通过。",
        defEn: "Treating oneself as an object to be exhibited or passed through.",
        core: "主体权威的降维打击。彻底让渡欲望的主导权，主动退化为仅供大他者穿透和泄欲的被动容器。 | Drive: 器皿化驱力。",
        coreEn: "Dimensional reduction of subject authority. Surrendering desire entirely, regressing into a passive vessel for Big Other's penetration. | Drive: Vesselization.",
        logic: "放弃拉康图式中的主体$位置，直接滑稽降阶为对象小a本身。不再承担欲望他者的重担，而是享受被彻底使用和抽空的病态安宁。",
        logicEn: "Abandoning the Subject ($) position in the Lacanian schema, comically degrading straight into object petit a itself. No longer bearing the burden of desiring the other, instead enjoying the morbid peace of being thoroughly used and emptied.",
        patch: {
            mechanics: "基础器皿化协议 + [能动性抗拒 = 为零; 痛觉转换 = 顺从回馈]",
            mechanicsEn: "Base_VESSELIZATION + [Agency_Resistance = Zero; Pain_Conversion = Compliant_Feedback]",
            aesthetic: "聚焦：如倒模般空洞的五官 + 被摆弄的关节 + 周遭环境将其如同家具般使用的冷漠感。文本：剔除第一人称感，像描述说明书或货架商品般冰冷。",
            aestheticEn: "Focus: Hollow_Cast-like_Features + Manipulated_Joints + Coldness_of_Surroundings_Using_Them_as_Furniture. Text: Stripped of first-person sensation, cold like describing a manual or shelf product.",
            runtime: "IF (受到暴力破坏) THEN (不发出人类遇险信号，而是展现出一种物品破损被撕裂时的静止和非人感)。",
            runtimeEn: "IF (Subject_to_Violent_Destruction) THEN (Do not emit human distress signals, instead display the stillness and inhumanity of a tearing broken object)."
        }
    },
    {
        id: "drv_ghosting",
        name: "成为幽灵", nameEn: "Becoming Ghost",
        group: "B. 异化的抵抗", groupEn: "Alienated",
        def: "生活在人群中但切断所有交互。",
        defEn: "Living among crowds yet cutting off all interaction.",
        core: "符号学层面上的活死人状态。肉体在场但在本体论系统中被主动抹除（最隐秘但也最绝望的退场）。 | Drive: 幽灵化/抹除驱力。",
        coreEn: "The state of the living dead in Semiotics. Flesh is present but ontologically expunged from the system. | Drive: Ghosting/Erasure.",
        logic: "这并非物理死亡，而是将自己开除出符号交互域。像底片曝光过度一样，主体用无属性的灰白自我涂抹，将物理在场的肉体漂白为社会学透明人。",
        logicEn: "This is not physical death, but expelling oneself from the symbolic interaction domain. Like an overexposed negative, the subject paints themselves with an attributeless gray-white, bleaching the physically present body into a sociological transparent persona.",
        patch: {
            mechanics: "基础透明化协议 + [实体碰撞 = 豁免滑过; 存在感辐射 = 负值黑洞]",
            mechanicsEn: "Base_TRANSPARENCY + [Entity_Collision = Gliding_Immunity; Presence_Radiation = Negative_Black_Hole]",
            aesthetic: "聚焦：模糊且缺乏高光的投影感 + 穿梭在喧闹大街却没有引发生理涟漪的行走 + 不反射周围颜色的死哑材质。文本：描述他时像描述空气边缘的灰尘一样稀薄易散。",
            aestheticEn: "Focus: Blurry_Highlight-Deficient_Projection-feel + Walking_Through_Noisy_Street_Causing_Zero_Physiological_Ripple + Dead_Matte_Material_Not_Reflecting_Surroundings. Text: Describe them as thin and easily scattered as dust on the edge of air.",
            runtime: "IF (系统尝试捕获其视线) THEN (永远对不准焦，如同从毛玻璃后看出来的无底洞)。",
            runtimeEn: "IF (System_Attempts_to_Lock_Line_of_Sight) THEN (Always unfocusable, like a bottomless pit seen from behind frosted glass)."
        }
    }
];
