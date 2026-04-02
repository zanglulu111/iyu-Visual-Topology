import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_C: LibraryItemDef[] = [
    {
        id: "m1_imposter_ego",
        name: "冒充者", nameEn: "The Imposter",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "深信自己的身份是一个谎言。即使获得了大他者的最高认可，其内部的内核依然被“虚假感”占据。",
        defEn: "Believing one's identity is a lie; an inner sense of falsity despite the Other's recognition.",
        core: "我偷了一张皮，但我不知道原主在哪。 | 缺失 ($): 合法性 (Legitimacy)",
        coreEn: "I stole a skin, but I don't know the owner. | Lack ($): Legitimacy",
        logic: "【双重视差】：欺诈力学。必须强制其社交参数保持满载（最高伪装），同时将内核稳定性硬性锁死在0，任何来自大他者的认同都会自动转化为同等当量的自我怀疑与恐慌。",
        logicEn: "[Double Parallax]: Fraud mechanics. Must legally keep social parameters maximized while hardcoding internal stability at 0. Any Other's recognition translates to proportional self-doubt.",
        patch: {
            mechanics: "基础欲望协议 + [伪装效能 = 最大; 稳定性阈值 = 0]",
            mechanicsEn: "Base_DESIRE + [Camouflage_Efficiency = Max; Stability_Threshold = 0]",
            aesthetic: "聚焦：高频重影 + 游移不定的视觉焦点。文本：华丽表现下的内部颤抖语调。",
            aestheticEn: "Focus: High-Freq_Ghosting + Shifting_Visual_Focus. Text: Trembling_Inner_Tone_Under_Gorgeous_Performance.",
            runtime: "IF (获得外界赞誉) THEN (强制触发：极度恐慌反应)。严禁主体获得自我和解。",
            runtimeEn: "IF (Outer_Praise_Received) THEN (Force_Trigger: Extreme_Panic_Reaction). FORBID_Self-Reconciliation."
        }
    },
    {
        id: "m1_exile",
        name: "流亡者", nameEn: "The Exile",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "被符号界版图驱逐出去的主体。他失去了属于他的语言节点，现在是一块无根的漫游码。",
        defEn: "A subject expelled from the symbolic map; a rootless code fragment.",
        core: "地图上没有我的坐标。 | 缺失 ($): 故乡 (Symbolic_Home)",
        coreEn: "No coordinates for me on the map. | Lack ($): Symbolic_Home",
        logic: "【拓扑驱逐】：绝对流浪力学。系统（M4）被强制要求无法在任何可用节点中为该主体生成『合法坐标』。他必须永远处于被地图排斥的状态中。",
        logicEn: "[Topological Expulsion]: Absolute wandering mechanics. M4 system must be forced never to generate 'legal coordinates' for this subject.",
        patch: {
            mechanics: "基础欲望协议 + [合法坐标容纳度 = 零绝对排斥; 强制漂移性 = 最大]",
            mechanicsEn: "Base_DESIRE + [Legal_Coordinate_Capacity = Absolute_Zero_Rejection; Forced_Drift = Max]",
            aesthetic: "聚焦：严重失真的饱和度 + 沙尘笼罩。文本：被消音与抹涂的隔离感修辞。",
            aestheticEn: "Focus: Severe_Desaturation + Dust-covered_Shrouds. Text: Silenced_and_Smudged_Isolation_Rhetoric.",
            runtime: "IF (在同一区域停留过久) THEN (强制生成：排异风暴与无端驱逐事件)。严禁长期驻留。",
            runtimeEn: "IF (Stay_in_Zone_Too_Long) THEN (Force_Generate: Rejection_Storm_and_Eviction). FORBID_Long-term_Stay."
        }
    },
    {
        id: "m1_puppet_ego",
        name: "傀儡/提线之物", nameEn: "The Puppet",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "通过感知到背后的“线”来确证自己的存在。如果线断了，他的整个主体性将瘫痪。",
        defEn: "Verifying existence via the 'strings' behind; snapping them paralyses the subject.",
        core: "别松手，我怕我会倒下。 | 缺失 ($): 自发力量 (Spontaneity)",
        coreEn: "Don't let go; I'm afraid I'll fall. | Lack ($): Spontaneity",
        logic: "【从动力学】：绝对他律逻辑。主体的能量回路（M5）被物理截断，必须且只能等待被外部操作线（M4或玩家指令）接管才能恢复存在指标。",
        logicEn: "[Subordinate Dynamics]: Absolute heteronomy logic. Subject's M5 energy loop is physically severed; it must rely solely on external strings (M4/Player) to exist.",
        patch: {
            mechanics: "基础欲望协议 + [自发性能量 = 0; 指令依赖度 = 1.0]",
            mechanicsEn: "Base_DESIRE + [Spontaneous_Energy = 0; Instruction_Dependency = 1.0]",
            aesthetic: "聚焦：僵硬的机械停滞感 + 悬浮状态。文本：无机物的断裂与听命语调。",
            aestheticEn: "Focus: Stiff_Mechanical_Stasis + Suspended_State. Text: Inorganic_Fractured_Subservient_Tone.",
            runtime: "IF (失去外部指令连接超过时限) THEN (立即触发：物理瘫痪与机能彻底停摆)。",
            runtimeEn: "IF (External_Command_Link_Lost_Timeout) THEN (Trigger_Instantly: Physical_Paralysis_and_Total_Shutdown)."
        }
    },
    {
        id: "m1_shadow_ego",
        name: "影子/衍生品", nameEn: "The Shadow",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "作为另一个强势主体的附属品存在。只有当对方的光亮足够强时，他才能拥有实体感。",
        defEn: "Existing as an accessory to a stronger subject; physicality depends on their light.",
        core: "我是你留下的唯一负数。 | 缺失 ($): 实体 (Substance)",
        coreEn: "I am the only negative number you left. | Lack ($): Substance",
        logic: "【依赖增殖】：寄生镜像力学。其自身毫无数值实体，必须完全通过硬链接某个『光芒万丈』的宿主（M4核心人物），随其波动而进行等比收缩或膨胀。",
        logicEn: "[Dependent Proliferation]: Parasitic mirror mechanics. Owning zero parameter substance, must hard-link to a 'luminous' host (M4 core).",
        patch: {
            mechanics: "基础欲望协议 + [自发数值 = 0; 宿主同步率 = 1.0]",
            mechanicsEn: "Base_DESIRE + [Spontaneous_Parameter = 0; Host_Sync_Ratio = 1.0]",
            aesthetic: "聚焦：深不见底的低透明度暗斑 + 扁平化质感。文本：附庸且毫无存在感的低语。",
            aestheticEn: "Focus: Bottomless_Low-Opacity_Dark_Spots + Flattened_Texture. Text: Subservient_Non-existent_Whispers.",
            runtime: "IF (宿主死亡或离开视线) THEN (强制介入：完全褪色并被物理除根)。",
            runtimeEn: "IF (Host_Dead_or_Out_of_Sight) THEN (Force: Total_Fade_and_Physical_Eradication)."
        }
    },
    {
        id: "m1_mimic_ego",
        name: "模仿者", nameEn: "The Mimic",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "主体的内部是中空的，通过不断吞噬并复制周围人的表情、方言和欲望来存活。",
        defEn: "Hollow interior; surviving by copying surrounding expressions, accents, and desires.",
        core: "我正在练习你的呼吸。 | 缺失 ($): 原件 (Originality)",
        coreEn: "I am practicing your breathing. | Lack ($): Originality",
        logic: "【动态空洞拟合】：剥皮逻辑。内部被强制定义为一个不含任何原件属性的空槽，必须以最高优先级读取并复制周围所有存在的参数来填补自我。",
        logicEn: "[Dynamic Hollow Fitting]: Flaying logic. Interior is forced as a null-slot; must read & copy ambient parameters at max priority.",
        patch: {
            mechanics: "基础欲望协议 + [属性原件保留度 = 0; 即时同化极速 = 最大]",
            mechanicsEn: "Base_DESIRE + [Original_Property_Retention = 0; Instant_Assimilation_Speed = Max]",
            aesthetic: "聚焦：快速闪烁的变色龙噪点 + 拼凑感折射轮廓。文本：粗劣且毫无个性的复读机式对话。",
            aestheticEn: "Focus: Fast_Flickering_Chameleon_Noise + Patchwork_Refracted_Contours. Text: Cheap_Personality-less_Parroting_Dialogue.",
            runtime: "IF (处于无目标可模仿的环境) THEN (爆发性触发：找不到自我的完全解构与乱码反应)。",
            runtimeEn: "IF (Environment_Has_No_Mimic_Target) THEN (Explosive_Trigger: Total_Deconstruction_and_Gibberish_Reaction_Due_to_No_Self)."
        }
    },
    {
        id: "m1_pariah_outcast",
        name: "贱民/排异物", nameEn: "The Pariah",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "被诅咒为“不可接触者”。其存在本身即是秩序的一个不可被清理的逻辑污点。",
        defEn: "Cursed as 'untouchable'; an uncleansable logical stain on the order.",
        core: "我甚至不配拥有名字。 | 缺失 ($): 姓名 (Symbolic_Name)",
        coreEn: "I don't even deserve a name. | Lack ($): Symbolic_Name",
        logic: "【排异污染源】：社会性死区力学。系统（M4）的防病毒机制导致所有正常主体无法解析其请求，正面接触会直接引发NPC的底层恐慌。",
        logicEn: "[Rejection Pollutant]: Social dead-zone mechanics. M4's anti-virus mechanism renders its requests unparseable; frontal contact directly induces base-level NPC panic.",
        patch: {
            mechanics: "基础欲望协议 + [系统识别率 = -1.0; 社交感染恐慌度 = 最大]",
            mechanicsEn: "Base_DESIRE + [System_Recognition = -1.0; Social_Infection_Panic = Max]",
            aesthetic: "聚焦：病态的低分辨率马赛克 + 胆汁色的污染光斑。文本：带有恶臭感与令人生理不适的错位陈述。",
            aestheticEn: "Focus: Sickly_Low-Res_Mosaic + Bile-colored_Pollution_Spots. Text: Foul-smelling_and_Physiologically_Uncomfortable_Displaced_Statements.",
            runtime: "IF (强制与目标正面交互) THEN (立即引发：NPC的强迫症式逃离或暴力清洗)。",
            runtimeEn: "IF (Forced_Frontal_Interaction_with_Target) THEN (Instantly_Trigger: NPC_Compulsive_Fleeing_or_Violent_Purge)."
        }
    },
    {
        id: "m1_spy_masked",
        name: "多重身份者/间谍", nameEn: "The Spy",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "由于扮演过太多的角色，导致真理的内核发生永久性破裂，无法再认同任何一个单一自我。",
        defEn: "Permanent kernel rupture from playing too many roles; unable to identify with any single self.",
        core: "我有很多张脸，但我没有一张脸敢在镜子里停留。 | 缺失 ($): 一致性 (Consistency)",
        coreEn: "I have many faces, but none dare stay in the mirror. | Lack ($): Consistency",
        logic: "【记忆碎裂】：碎片化叙事力学。在各个身份容器间过度跳转后，原初镜像彻底破裂，导致其对过去事件的调用在每一帧都会发生逻辑互斥。",
        logicEn: "[Memory Shatter]: Fragmented narrative mechanics. Over-jumping between identity vessels has shattered the primal mirror, causing logically mutually exclusive recall per frame.",
        patch: {
            mechanics: "基础欲望协议 + [身份连贯性 = 极低; 伪装渗透率 = 最大]",
            mechanicsEn: "Base_DESIRE + [Identity_Cohesion = Extremely_Low; Stealth_Infiltration_Rate = Max]",
            aesthetic: "聚焦：层叠错乱的面膜投影 + 过载的频闪转场。文本：由于撒谎过多而导致的前提背景不断自我推翻的口吃讲述。",
            aestheticEn: "Focus: Overlapping_Disordered_Mask_Projections + Overloaded_Strobe_Transitions. Text: Stuttering_Narration_Self-Overturning_Premises_Due_to_Excessive_Lying.",
            runtime: "IF (脱离任何大他者注视而独处时) THEN (触发：剧烈的多重人格崩溃与身份空转)。",
            runtimeEn: "IF (Alone_Without_Other's_Gaze) THEN (Trigger: Violent_Multi-Personality_Collapse_and_Identity_Idling)."
        }
    },
    {
        id: "m1_scapegoat_entity",
        name: "替罪羊", nameEn: "The Scapegoat",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "主体存在的唯一正当理由，就是替大他者承载所有那些不可言说的秘密和肮脏。",
        defEn: "The sole justification for existence is bearing the Other's unspeakable secrets.",
        core: "我是所有罪恶的排水沟。 | 缺失 ($): 无辜 (Innocence)",
        coreEn: "I am the drainage for all sins. | Lack ($): Innocence",
        logic: "【罪业磁柱】：惩罚吸引力学。系统默认将所有尚未分配『原因』的结构性破坏和随机厄运（M2），强制锁定并偏转至该主体身上以维持其余部分的正常算力。",
        logicEn: "[Sin Magnet]: Punishment attraction mechanics. System defaults to forcing all unassigned structural damage and random doom (M2) onto this subject to maintain global computation speed.",
        patch: {
            mechanics: "基础欲望协议 + [厄运引力阈 = 最大绝对值; 被动承受韧性 = 锁死高位]",
            mechanicsEn: "Base_DESIRE + [Doom_Gravity_Threshold = Max_Absolute; Passive_Endurance = Locked_High]",
            aesthetic: "聚焦：遍布全身的结痂与烧伤 + 工业废土般的灰暗滤镜。文本：沉默地吸收所有指控的哑巴式无力感。",
            aestheticEn: "Focus: Scabs_and_Burns_All_Over + Industrial_Wasteland_Grim_Filter. Text: Mute_Powerlessness_Silently_Absorbing_All_Accusations.",
            runtime: "IF (任何系统性灾难在范围内发生) THEN (系统判定：强制该主体承担全部损失反馈)。",
            runtimeEn: "IF (Any_Systemic_Disaster_Occurs_in_Range) THEN (System_Judges: Force_Subject_to_Bear_All_Loss_Feedback)."
        }
    },
    {
        id: "m1_refugee_ego",
        name: "难民/无证件者", nameEn: "The Refugee",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "失去了所有的法律和社会保障的主体性，处于一种“裸命（Bare Life）”状态。",
        defEn: "Stripped of legal/social protections; in a state of 'Bare Life'.",
        core: "我只是这团还在动的肉。 | 缺失 ($): 权力 (Symbolic_Rights)",
        coreEn: "I am just this moving meat. | Lack ($): Symbolic_Rights",
        logic: "【裸命漂浮】：脆弱性力学。其物理抵抗力虽高（纯属生存本能），但对社会羞辱与行政暴力的精神抵抗力被强制归零。任何来自符号权力（M4）的质询都将诱发瘫痪级恐惧。",
        logicEn: "[Bare Life Drift]: Fragility mechanics. Physical resistance is high (pure survival instinct), but psychic resistance to social humiliation is forced to zero. Any query from symbolic power (M4) induces paralytic terror.",
        patch: {
            mechanics: "基础欲望协议 + [保护指数 = 0; 生存本能 = 最大; 符号防护层 = 彻底剥离]",
            mechanicsEn: "Base_DESIRE + [Protection_Index = 0; Survival_Instinct = Max; Symbolic_Shield = Stripped]",
            aesthetic: "聚焦：褴褛撕裂的织物 + 不停颤抖的冻结动作。文本：极度紧缩的、带有动物性警觉的低语。",
            aestheticEn: "Focus: Tattered_Torn_Fabric + Ceaseless_Shivering_Freeze. Text: Animal-Alert_Whispers.",
            runtime: "IF (遭遇任何行政盘问或身份校验) THEN (强制触发：冰冻级恐惧与本能逃窜反应)。严禁给予安全感。",
            runtimeEn: "IF (Admin_Query_or_ID_Check) THEN (Force_Trigger: Glacial_Terror_and_Flight_Response). FORBID_Security."
        }
    },
    {
        id: "m1_traitor_rebel",
        name: "叛徒/分裂之刺", nameEn: "The Traitor",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "通过背叛自己所属的母体秩序来定义他的主体性。他唯一的忠心就是对“背叛”本身。",
        defEn: "Defining identity by betraying the parent order; loyalty only to 'betrayal'.",
        core: "我唯一的家，就是背对你们的一瞬间。 | 缺失 ($): 归属感 (Belonging)",
        coreEn: "My only home is the moment I turn my back on you. | Lack ($): Belonging",
        logic: "【反噬寄生】：反噬力学。主体的所有行动（M5）总是带有一定概率的对友军及原定目标的背刺效果。其存在的唯一确证方式就是撕裂自身所属的符号共同体（M4）。",
        logicEn: "[Backlash Parasite]: Backlash mechanics. All M5 actions carry a probability of backstabbing allies. Existence is confirmed solely by tearing the symbolic community (M4) it belongs to.",
        patch: {
            mechanics: "基础欲望协议 + [背刺频率 = 0.3; 伪装亲密度 = 极高; 忠诚阈值 = 恒定为零]",
            mechanicsEn: "Base_DESIRE + [Backstab_Freq = 0.3; Camouflage_Intimacy = High; Loyalty_Threshold = Constant_Zero]",
            aesthetic: "聚焦：锋利的锯齿轮廓 + 暗处闪烁的冷光瞳孔。文本：表面柔和但内置绝对背弃暗语的修辞。",
            aestheticEn: "Focus: Sharp_Serrated_Silhouette + Cold_Glinting_Pupils. Text: Surface_Soft_but_Coded_Betrayal_Rhetoric.",
            runtime: "IF (对任何对象做出承诺) THEN (后台强制排队：等价背叛计划)。严禁任何持续性的忠诚感产生。",
            runtimeEn: "IF (Commitment_Made) THEN (Backend_Queue: Equivalent_Betrayal_Plan). FORBID_Sustained_Loyalty."
        }
    },
    {
        id: "m1_bastard_ego",
        name: "私生子/非法主体", nameEn: "The Bastard",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "在大他者的继承逻辑中是一个无法被识别的多余符。他的存在即是对血缘/逻辑正当性的挑战。",
        defEn: "An unrecognizable redundant signifier in the Other's logic; a challenge to legitimacy.",
        core: "你们甚至不想让我出生。 | 缺失 ($): 被允许度 (Permission)",
        coreEn: "You didn't even want me born. | Lack ($): Permission",
        logic: "【侵入性噪声】：侵入性力学。主体的出现总是伴随着对已有稳态叙事的破坏和“噪声化”。其存在本身即是对大他者继承逻辑（M4）的结构性挑衅，任何容纳尝试都会引发合法性危机。",
        logicEn: "[Intrusive Noise]: Intrusion mechanics. Presence always accompanies disruption and narrative 'noise'. Existence is a structural provocation to the Other's inheritance logic (M4); any accommodation triggers a legitimacy crisis.",
        patch: {
            mechanics: "基础欲望协议 + [破坏指数 = 高; 韧性 = 极高; 合法性回执 = 永久缺省]",
            mechanicsEn: "Base_DESIRE + [Disruption_Index = High; Resilience = High; Legitimacy_Receipt = Permanently_Missing]",
            aesthetic: "聚焦：碎裂的玻璃纹理 + 极端明暗对比的分裂画面。文本：带有原始愤怒与被践踏尊严的粗粝陈述。",
            aestheticEn: "Focus: Cracking_Glass_Texture + Extreme_Chiaroscuro_Split_Frame. Text: Raw_Rage_and_Trampled_Dignity.",
            runtime: "IF (触发任何继承或资格判定事件) THEN (强制显现：污名标记与合法性质疑风暴)。严禁获得无条件的身份承认。",
            runtimeEn: "IF (Inheritance_or_Qualification_Event) THEN (Force_Show: Stigma_Marker_and_Legitimacy_Storm). FORBID_Unconditional_Recognition."
        }
    },
    {
        id: "m1_double_ego",
        name: "替身/镜像囚徒", nameEn: "The Double",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "主体发现自己其实是某个外部原件的复刻。他一直在为了夺回那个被窃取的独特性而疯狂战斗。",
        defEn: "Discovery of being a replica; fighting madly to reclaim a stolen uniqueness.",
        core: "谁才是那个该死的回音？ | 缺失 ($): 唯一性 (Uniqueness)",
        coreEn: "Who is the damned echo? | Lack ($): Uniqueness",
        logic: "【镜像死斗】：镜像冲突力学。主体的所有数值优势仅在面对其“原件”角色时生效，形成寄生性的自我毁灭对称战争。脱离原件后，主体将陷入存在论层面的空转。",
        logicEn: "[Mirror Deathmatch]: Mirror conflict mechanics. All stat advantages activate only when facing the 'original', creating a parasitic self-destructive symmetrical war. Without the original, subject falls into ontological idle spin.",
        patch: {
            mechanics: "基础欲望协议 + [对自体战斗效能 = 最大; 恐慌指数 = 高; 独立存在值 = 0]",
            mechanicsEn: "Base_DESIRE + [Duel_Efficiency_vs_Self = Max; Panic_Index = High; Independent_Existence = 0]",
            aesthetic: "聚焦：强迫对称的画面故障 + 双重视角的撕裂感。文本：不停在“我”与“他”之间做代词混淆的混乱叙述。",
            aestheticEn: "Focus: Forced_Symmetrical_Glitches + Dual-View_Tearing. Text: Constant_Pronoun_Confusion_Chaotic_Narration.",
            runtime: "IF (发现或遭遇原件) THEN (立即启动：存在战争协议与对称性毁灭)。严禁和平共存。",
            runtimeEn: "IF (Original_Found_or_Encountered) THEN (Start: Existence_War_and_Symmetrical_Destruction). FORBID_Peaceful_Coexistence."
        }
    },
    {
        id: "m1_faceless_ego",
        name: "无面人", nameEn: "The Faceless",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "拒绝任何固定形象。他的面部是一团模糊的符号风暴，随着凝视者的投射而变幻。",
        defEn: "Rejecting fixed images; a blurry symbolic storm changing with the observer's projection.",
        core: "我就是你想要我成为的那种空虚。 | 缺失 ($): 定型面相 (Fixed_Feature)",
        coreEn: "I am the void you want me to be. | Lack ($): Fixed_Feature",
        logic: "【投射性空壳】：投射性力学。该主体的性格标签动态取决于当前观测者的最高属性值。本质上他不是“谁”，而是一面会液化的镜子，永远反映着观测者自身的恐惧与欲望。",
        logicEn: "[Projective Hollow Shell]: Projection mechanics. Personality tags dynamically depend on the current observer's dominant attribute. Not 'someone' but a liquefying mirror, forever reflecting the observer's own fears and desires.",
        patch: {
            mechanics: "基础欲望协议 + [面部特征方差 = 最大; 记忆痕迹 = 0; 观测者依赖 = 1.0]",
            mechanicsEn: "Base_DESIRE + [Feature_Variance = Max; Memory_Trace = 0; Observer_Dependency = 1.0]",
            aesthetic: "聚焦：烟雾状的液态面孔 + 不断变形的轮廓。文本：永远无法被引述的、自我消解的话语。",
            aestheticEn: "Focus: Smoke-like_Liquid_Face + Constantly_Morphing_Contours. Text: Un-quotable_Self-Dissolving_Speech.",
            runtime: "IF (被凝视或观测) THEN (强制匹配：观测者最深恐惧的面部参数)。严禁任何面部定型或固化。",
            runtimeEn: "IF (Observed_or_Gazed_At) THEN (Force_Match: Observer_Deepest_Fear_Facial_Parameters). FORBID_Facial_Fixation."
        }
    },
    {
        id: "m1_anonymous_reject",
        name: "匿名拒绝者", nameEn: "Anonymous",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "在这个大数据记录一切的时代，他通过有意识地抹除自己的行踪来维持一种“空洞的自由”。",
        defEn: "Maintaining a 'hollow freedom' by consciously erasing traces in the big-data era.",
        core: "别在数据库里找我，我从未登入。 | 缺失 ($): 数据轨迹 (Trace)",
        coreEn: "Don't look for me in databases; I never logged in. | Lack ($): Trace",
        logic: "【不可追踪者】：不可追踪力学。主体对所有基于逻辑追踪（M4）的效果具有天然免疫。但这种免疫的代价是——他在社会符号系统中的价值被永久归零，成为一个“不存在的自由人”。",
        logicEn: "[The Untraceable]: Untraceable mechanics. Subject is naturally immune to all tracking effects (M4). The cost: social symbolic value is permanently zeroed, becoming a 'free person who doesn't exist'.",
        patch: {
            mechanics: "基础欲望协议 + [隐匿性 = 无限; 社会价值 = 0; M4追踪抗性 = 绝对免疫]",
            mechanicsEn: "Base_DESIRE + [Stealth = Infinite; Social_Value = 0; M4_Tracking_Resistance = Absolute_Immunity]",
            aesthetic: "聚焦：极低分辨率的马赛克人影 + 无影照明。文本：被消音和抹除过的空白感修辞。",
            aestheticEn: "Focus: Ultra_Low-Res_Mosaic_Figure + Shadow-less_Lighting. Text: Silenced_and_Erased_Blank_Rhetoric.",
            runtime: "IF (被任何系统捕获或记录) THEN (立即触发：数据腐蚀与自毁式痕迹清洗)。严禁留下任何可追溯记录。",
            runtimeEn: "IF (Captured_or_Recorded) THEN (Trigger: Data_Corruption_and_Self-Destructive_Trace_Wipe). FORBID_Traceable_Records."
        }
    },
    {
        id: "m1_glitch_residue",
        name: "系统码误", nameEn: "The Glitch",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "他是大他者在编码世界时产生的一个微小的语法错误，一个不合逻辑的存活者。",
        defEn: "A minor syntax error in encoded reality; an illogical survivor.",
        core: "我是你们世界观里的那个错别字。 | 缺失 ($): 可理解性 (Intelligibility)",
        coreEn: "I am the typo in your worldview. | Lack ($): Intelligibility",
        logic: "【因果破裂点】：因果破坏力学。主体的存在会随机构成与其背景逻辑完全不符的偶发事件。他不是故意搞破坏——他本身就是系统编译时残留的随机逻辑坏道，其在场即是对确定性的亵渎。",
        logicEn: "[Causality Fracture Point]: Causality disruption mechanics. Presence triggers random events inconsistent with background logic. Not deliberate sabotage—the subject IS a random logic bad sector left from system compilation; its presence is sacrilege against determinism.",
        patch: {
            mechanics: "基础欲望协议 + [不确定性 = 极高; 逻辑权重 = 0; 随机位移频率 = 高]",
            mechanicsEn: "Base_DESIRE + [Indeterminacy = High; Logic_Weight = 0; Random_Displacement_Freq = High]",
            aesthetic: "聚焦：严重像素化的撕裂画面 + 断裂的动画帧。文本：语法错乱、自相矛盾的碎片化陈述。",
            aestheticEn: "Focus: Severe_Pixelation_Torn_Frame + Broken_Animation_Frames. Text: Grammatically_Disordered_Self-Contradicting_Fragments.",
            runtime: "EVERY (10秒) DO (强制执行：随机位移位置与属性乱码)。严禁任何稳定的因果逻辑链条生成。",
            runtimeEn: "EVERY (10s) DO (Force: Random_Displacement_and_Attribute_Scramble). FORBID_Stable_Causal_Chains."
        }
    },
    {
        id: "m1_residual_entity",
        name: "弃置余数", nameEn: "The Residual",
        group: "C. 认同分裂者", groupEn: "Divided Identities",
        def: "在一次巨大的整体性叙事转型（如战争结束或政权更迭）后被遗忘在那里的过时主体。",
        defEn: "An obsolete subject left behind after a major narrative shift (e.g., end of war).",
        core: "演出结束了，但我还没下台。 | 缺失 ($): 撤场许可 (Exit_Permission)",
        coreEn: "The play ended, but I haven't left the stage. | Lack ($): Exit_Permission",
        logic: "【时代废片】：滞后力学。主体的所有反应均基于一个已经不存在的旧秩序（Legacy M4）。他像一段被遗忘在已拆除舞台上的独角戏代码，执行着再也没有观众的协议。",
        logicEn: "[Era's Debris]: Lag mechanics. All responses are based on a non-existent old order (Legacy M4). Like forgotten monologue code on a demolished stage, executing protocols for an audience that no longer exists.",
        patch: {
            mechanics: "基础欲望协议 + [语境错配度 = 最大; 过时性 = 极高; 新规则适配 = 彻底失败]",
            mechanicsEn: "Base_DESIRE + [Context_Mismatch = Max; Obsolescence = High; New_Rule_Adaptation = Total_Failure]",
            aesthetic: "聚焦：积满灰尘的棕褐滤镜 + 褰色的老照片质感。文本：充满时代错位感的过时礼仪与陈旧措辞。",
            aestheticEn: "Focus: Dust-covered_Sepia_Filter + Faded_Vintage_Photo_Texture. Text: Anachronistic_Outdated_Etiquette.",
            runtime: "IF (新规则或新秩序广播被接收) THEN (强制触发：认知失调与时代性恐慌)。严禁适应新体系。",
            runtimeEn: "IF (New_Rule_or_Order_Broadcast) THEN (Force_Trigger: Cognitive_Dissonance_and_Temporal_Panic). FORBID_Adapting_to_New_System."
        }
    }
];
