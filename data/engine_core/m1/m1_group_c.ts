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
        logic: "双重视差力学。主体的社交参数表现为“高”，但其内部稳定性参数表现为“极低”。",
        logicEn: "Double parallax. High social parameters, yet extremely low internal stability.",
        patch: {
            mechanics: "Anxiety_Coefficient = High; Performance = Max.",
            mechanicsEn: "Anxiety_Coefficient = High; Performance = Max.",
            aesthetic: "Visuals: Trembling_Overlay; Eyes: Flickering.",
            aestheticEn: "Visuals: Trembling_Overlay; Eyes: Flickering.",
            runtime: "Logic: IF (Compliment) THEN Trigger(Anxiety_Spike)."
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
        logic: "流浪力学。主体的存在本身会触发场景的“驱逐性反应”，使其无法在任何区域长期停留。",
        logicEn: "Wandering mechanics. Triggers 'expulsion' responses, preventing long-term stays.",
        patch: {
            mechanics: "Hostility_Multiplier = High; Mobility = Max.",
            mechanicsEn: "Hostility_Multiplier = High; Mobility = Max.",
            aesthetic: "Atmosphere: Dusty; Palette: Desaturated.",
            aestheticEn: "Atmosphere: Dusty; Palette: Desaturated.",
            runtime: "Timer: IF (Stay_Duration > 10) THEN Spawn(Chasers)."
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
        logic: "从动力学。主体的所有 M5（行动）必须经过大他者（或者由玩家控制的 M4 角色）的确认。",
        logicEn: "Follower dynamics. All M5 actions must be confirmed by the Other (or M4 controller).",
        patch: {
            mechanics: "Action_Dependency = 1.0; Resilience = Null.",
            mechanicsEn: "Action_Dependency = 1.0; Resilience = Null.",
            aesthetic: "Movement: Staccato; Animation: Floating.",
            aestheticEn: "Movement: Staccato; Animation: Floating.",
            runtime: "Check: IF (No_Command) THEN Play(Limp_Animation)."
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
        logic: "依赖性增长。其属性数值随着主体的“宿主”的数值波动而发生镜像偏移。",
        logicEn: "Dependent growth. Parameters shift based on the 'host's' fluctuations.",
        patch: {
            mechanics: "Sync_Ratio = 0.8; Collision = Null.",
            mechanicsEn: "Sync_Ratio = 0.8; Collision = Null.",
            aesthetic: "Opacity: Low; Color: Dark/Flat.",
            aestheticEn: "Opacity: Low; Color: Dark/Flat.",
            runtime: "Logic: IF (Host_Gone) THEN Fade_to_Null()."
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
        logic: "动态拟合力学。每进入一个新的场景，其 M1 的所有视觉和对白参数会自动重构。",
        logicEn: "Dynamic fitting. Reconstructs visual/dialogue parameters upon entering new scenes.",
        patch: {
            mechanics: "Adaptability = Max; Identity_Stability = 0.1.",
            mechanicsEn: "Adaptability = Max; Identity_Stability = 0.1.",
            aesthetic: "Texture: Shifting; Visuals: Chameleon_Effect.",
            aestheticEn: "Texture: Shifting; Visuals: Chameleon_Effect.",
            runtime: "Logic: IF (Target_Speak) THEN Echo(Target_Keywords)."
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
        logic: "社会性死区力学。所有的 NPC（M4）均会无视主体的正面请求，甚至表现为本能的恐惧。",
        logicEn: "Social dead-zone. NPCs (M4) ignore requests or react with primal fear.",
        patch: {
            mechanics: "Recognition = -1.0; Stigma = Max.",
            mechanicsEn: "Recognition = -1.0; Stigma = Max.",
            aesthetic: "Visuals: Blurry_Distortion; Palette: Bile_Green.",
            aestheticEn: "Visuals: Blurry_Distortion; Palette: Bile_Green.",
            runtime: "Interaction: IF (Approach) THEN NPC_Flee()."
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
        logic: "碎片化叙事力学。主体在不同段落对同一事件的描述往往存在逻辑自相矛盾。",
        logicEn: "Fragmented narrative. Conflicting descriptions of the same event across segments.",
        patch: {
            mechanics: "Cohesion = Low; Deception_Skill = Max.",
            mechanicsEn: "Cohesion = Low; Deception_Skill = Max.",
            aesthetic: "Visuals: Multi-layered; Animation: Glitched_Transitions.",
            aestheticEn: "Visuals: Multi-layered; Animation: Glitched_Transitions.",
            runtime: "Check: IF (Alone) THEN State(Identity_Crisis)."
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
        logic: "惩罚吸引力学。在该主体存活的场景中，所有的“随机厄运（M2）”会自动向其偏转。",
        logicEn: "Punishment attraction. Random bad luck (M2) deflects toward this subject.",
        patch: {
            mechanics: "Luck = -Max; Damage_Tolerance = High.",
            mechanicsEn: "Luck = -Max; Damage_Tolerance = High.",
            aesthetic: "Visuals: Scarred/Worn; Palette: Industrial_Grim.",
            aestheticEn: "Visuals: Scarred/Worn; Palette: Industrial_Grim.",
            runtime: "Logic: IF (Bad_Event) THEN Target(Scapegoat)."
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
        logic: "脆弱性力学。其物理抵抗力（Slot15）虽高，但其对社会羞辱的精神抵抗力为 0。",
        logicEn: "Fragility mechanics. High physical resistance (Slot15), zero psychic resistance to shame.",
        patch: {
            mechanics: "Protection_Index = 0; Survival_Instinct = Max.",
            mechanicsEn: "Protection_Index = 0; Survival_Instinct = Max.",
            aesthetic: "Visuals: Tattered; Animation: Shaking/Cold.",
            aestheticEn: "Visuals: Tattered; Animation: Shaking/Cold.",
            runtime: "Check: IF (Admin_Query) THEN State(Terror)."
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
        logic: "反噬力学。主体的所有 M5（行动）总是带有一定概率的对友军及原定目标的背刺效果。",
        logicEn: "Backlash mechanics. M5 actions carry a probability of betraying allies/original targets.",
        patch: {
            mechanics: "Backstab_Freq = 0.3; Deception = High.",
            mechanicsEn: "Backstab_Freq = 0.3; Deception = High.",
            aesthetic: "Visuals: Sharp/Jagged; Eyes: Cold_Glint.",
            aestheticEn: "Visuals: Sharp/Jagged; Eyes: Cold_Glint.",
            runtime: "Logic: IF (Commitment_Made) THEN Queue(Betrayal_Plan)."
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
        logic: "侵入性力学。主体的出现总是伴随着对已有稳态叙事的破坏和“噪声化”。",
        logicEn: "Intrusive mechanics. Presence always accompanies disruption and narrative 'noise'.",
        patch: {
            mechanics: "Disruption_Index = High; Resilience = High.",
            mechanicsEn: "Disruption_Index = High; Resilience = High.",
            aesthetic: "VFX: Cracking_Glass; Palette: High_Contrast.",
            aestheticEn: "VFX: Cracking_Glass; Palette: High_Contrast.",
            runtime: "Logic: IF (Inheritance_Event) THEN Show(Stigma)."
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
        logic: "镜像冲突。主体的所有数值优势仅在面对其“原件”角色时生效。",
        logicEn: "Mirror conflict. Value advantages apply only when facing the 'original' character.",
        patch: {
            mechanics: "Duel_Efficiency_v_Self = Max; Panic = High.",
            mechanicsEn: "Duel_Efficiency_v_Self = Max; Panic = High.",
            aesthetic: "Visuals: Symmetrical_Glitches; Frame: Dual-View.",
            aestheticEn: "Visuals: Symmetrical_Glitches; Frame: Dual-View.",
            runtime: "Trigger: IF (Original_Found) THEN Start(Existence_War)."
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
        logic: "投射性力学。该主体的性格标签（Slot3）动态取决于当前观测者的最高属性值。",
        logicEn: "Projection mechanics. Personality tags (Slot3) shift based on observers.",
        patch: {
            mechanics: "Feature_Variance = Max; Memory_Trace = 0.",
            mechanicsEn: "Feature_Variance = Max; Memory_Trace = 0.",
            aesthetic: "Visuals: Smoke/Mirror; Texture: Liquid.",
            aestheticEn: "Visuals: Smoke/Mirror; Texture: Liquid.",
            runtime: "Logic: IF (Observed) THEN Match(Observer_Fear)."
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
        logic: "不可追踪力学。主体对所有基于逻辑追踪（M4）的效果具有天然免疫。",
        logicEn: "Untraceable mechanics. Immune to effects based on logical tracking (M4).",
        patch: {
            mechanics: "Stealth = Infinite; Social_Value = 0.",
            mechanicsEn: "Stealth = Infinite; Social_Value = 0.",
            aesthetic: "Visuals: Low_Resolution; Lighting: Shadow-less.",
            aestheticEn: "Visuals: Low_Resolution; Lighting: Shadow-less.",
            runtime: "Logic: IF (Captured) THEN Trigger(Data_Corrupt)."
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
        logic: "因果破坏。主体的存在会随机构成与其背景逻辑完全不符的偶发事件。",
        logicEn: "Causality disruption. Presence triggers random events inconsistent with background logic.",
        patch: {
            mechanics: "Indeterminacy = High; Logic_Weight = 0.",
            mechanicsEn: "Indeterminacy = High; Logic_Weight = 0.",
            aesthetic: "Visuals: Pixelated; Animation: Broken.",
            aestheticEn: "Visuals: Pixelated; Animation: Broken.",
            runtime: "Update: EVERY(10s) DO Randomly_Shift(Location)."
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
        logic: "滞后力学。主体的所有反应均基于一个已经不存在的旧秩序（Legacy M4）。",
        logicEn: "Lag mechanics. Responses based on a non-existent old order (Legacy M4).",
        patch: {
            mechanics: "Context_Mismatch = Max; Obsolescence = High.",
            mechanicsEn: "Context_Mismatch = Max; Obsolescence = High.",
            aesthetic: "Visuals: Dusty; Palette: Sepia.",
            aestheticEn: "Visuals: Dusty; Palette: Sepia.",
            runtime: "Check: IF (New_Rule_Applied) THEN Trigger(Confusion)."
        }
    }
];
