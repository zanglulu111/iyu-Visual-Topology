import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_C: LibraryItemDef[] = [
    {
        id: "bod_diagnosis",
        name: "绝症确诊", nameEn: "The Diagnosis",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "看着X光片，医生宣判生命倒计时。",
        defEn: "Facing the X-ray, the doctor pronounces the countdown.",
        core: "死亡的具象化。身体不再是容器，而是定时炸弹。 | 实在界: 生命的有限。",
        coreEn: "Embodiment of death. Body as a time bomb. | The Real: Finiteness of life.",
        logic: "【器官异质化装置】：主体的 M1 权重被迫从'社会性规划'转向'肉体性存续'的死磕。文本必须表现出'器官的异质化'——身体部位在叙事中以一种'具有威胁性的他者'身份出现。Tuchē以'生命的有限'形式降临——死亡具象化，身体不再是容器，而是定时炸弹。",
        logicEn: "[Organ Heterogeneity Device]: M1 weight shifts from 'social planning' to 'bodily survival'. Text must manifest 'organ heterogeneity'—body parts appear as 'threatening Others'. Tuchē descends as 'finiteness of life'—death embodied, body as time bomb.",
        patch: {
            mechanics: "基础创伤协议 + [M1权重 = 从社会性规划转向肉体性存续; 器官 = 异质化/威胁性他者; 身体 = 定时炸弹]",
            mechanicsEn: "Base_TRAUMA + [M1_Weight = From_Social_Planning_to_Bodily_Survival; Organs = Heterogenized/Threatening_Others; Body = Time_Bomb]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：X光片上的阴影 + 器官发出的威胁性节拍。文本：身体部位逐一背叛的、倒计时般的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Shadow_on_X-Ray + Threatening_Rhythm_of_Organs. Text: Body_Parts_Betraying_One_by_One_Countdown_Narration.",
            runtime: "IF (主体试图忽略病情) THEN (强制：器官以更剧烈的症状提醒存在)。严禁M1恢复社会性规划的逻辑权重。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Diagnosis) THEN (Force: Organs_Remind_Existence_with_Intensified_Symptoms). FORBID_M1_Restoring_Social_Planning_Logic_Weighting."
        }
    },
    {
        id: "bod_accident",
        name: "严重车祸", nameEn: "The Crash",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "金属撞击声，剧痛，肢体扭曲或截肢。",
        defEn: "Metal impact, intense pain, twisted limbs or amputation.",
        core: "完整的破碎。瞬间从健全人变成残缺者。 | 实在界: 身体的脆弱。",
        coreEn: "Shattering of wholeness. Instant transition to brokenness. | The Real: Fragility of body.",
        logic: "【身体完整性重写器】：对'身体完整（M0 的基准）'的物理重写。所有的 M5 动作都必须伴随着一种'物理障碍'的计算。Tuchē以'身体的脆弱'形式降临——完整的破碎，瞬间从健全人变成残缺者，不可逆的残缺感。",
        logicEn: "[Bodily Integrity Rewriter]: Physical rewriting of 'bodily wholeness (M0 baseline)'. All M5 actions must include 'physical barrier' calculations. Tuchē descends as 'fragility of body'—shattering of wholeness, instant transition to brokenness, irreversible fragmentation.",
        patch: {
            mechanics: "基础创伤协议 + [M0基准 = 身体完整性被物理重写; M5动作 = 强制伴随物理障碍计算; 残缺 = 不可逆]",
            mechanicsEn: "Base_TRAUMA + [M0_Baseline = Bodily_Wholeness_Physically_Rewritten; M5_Action = Forced_Physical_Barrier_Calculation; Fragmentation = Irreversible]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：金属撞击的瞬间 + 扭曲的肢体轮廓。文本：每一个动作都被残缺感拖拽的、物理障碍式的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Moment_of_Metal_Impact + Contorted_Limb_Silhouettes. Text: Every_Action_Dragged_by_Fragmentation_Physical_Barrier_Narration.",
            runtime: "IF (主体试图执行健全时的动作) THEN (强制：物理障碍计算使动作失败或变形)。严禁M0的身体完整性基准被恢复。",
            runtimeEn: "IF (Subject_Attempts_Pre-Injury_Actions) THEN (Force: Physical_Barrier_Causes_Failure_or_Deformation). FORBID_M0_Bodily_Wholeness_Baseline_Being_Restored."
        }
    },
    {
        id: "bod_pregnancy",
        name: "意外怀孕", nameEn: "Pregnancy",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "验孕棒的两道杠。体内有了异物/生命。",
        defEn: "Two lines on the test. Alien object/life inside.",
        core: "身体的被征用。对未来的不可逆改变。异形感。 | 实在界: 内部的入侵。",
        coreEn: "Body requisitioned. Irreversible change. Alienation. | The Real: Internal intrusion.",
        logic: "【并行指令集注入器】：主体系逻辑中产生了'另一套并行指令集'。主体的 M1 被迫分担一部分叙事权重给那个'内部的他者'（SUR5 内化客体），逻辑压力在于这种无法摆脱的'寄生/共生'。Tuchē以'内部的入侵'形式降临——身体被征用，未来不可逆改变，异形感。",
        logicEn: "[Parallel Instruction Set Injector]: A 'parallel instruction set' emerges in logic. M1 must share narrative weight with the 'internal Other' (SUR5); pressure on inescapable 'parasitism/symbiosis'. Tuchē descends as 'internal intrusion'—body requisitioned, irreversible change, alienation.",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 被迫分担叙事权重给SUR5内部他者; 逻辑压力 = 寄生/共生不可摆脱; 身体 = 被征用]",
            mechanicsEn: "Base_TRAUMA + [M1 = Forced_Sharing_Narrative_Weight_with_SUR5_Internal_Other; Logic_Pressure = Inescapable_Parasitism/Symbiosis; Body = Requisitioned]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：验孕棒的两道杠 + 腹中异物/生命的律动。文本：身体被另一套指令集征用的、无法独占肉身的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Two_Lines_on_Test + Alien_Life_Rhythm_Inside. Text: Body_Requisitioned_by_Another_Instruction_Set_Cannot_Own_Flesh_Narration.",
            runtime: "IF (主体试图无视内部他者的存在) THEN (强制：内部他者以更强烈的生理反应宣示存在)。严禁M1的叙事权重独占恢复。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Internal_Other) THEN (Force: Internal_Other_Asserts_Presence_via_Stronger_Physiological_Reaction). FORBID_M1_Narrative_Weight_Monopoly_Being_Restored."
        }
    },
    {
        id: "bod_rape",
        name: "性暴力", nameEn: "Violation",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "被强行侵犯，身体主权的彻底丧失。",
        defEn: "Forced violation, total loss of bodily sovereignty.",
        core: "极致的创伤。主体沦为纯粹的客体/肉块。 | 实在界: 尊严的剥夺。",
        coreEn: "Extreme trauma. Subject reduced to pure object/flesh. | The Real: Deprivation of dignity.",
        logic: "【M0屏障强力穿透器】：主体的 M0 屏障遭到强力穿透。文本描写必须表现出'意志与肉体的暴力解离'。主体在事后的所有逻辑 M5 都必须呈现出一种'碎片化'或'退行'的结构特征。Tuchē以'尊严的剥夺'形式降临——极致创伤，主体沦为纯粹的客体/肉块。",
        logicEn: "[M0 Barrier Forceful Penetration Device]: Strong penetration of M0 barrier. Text must manifest 'violent dissociation of will and flesh'. Post-incident M5 must exhibit 'fragmented' or 'regressive' structure. Tuchē descends as 'deprivation of dignity'—extreme trauma, subject reduced to pure object/flesh.",
        patch: {
            mechanics: "基础创伤协议 + [M0屏障 = 强力穿透; 意志与肉体 = 暴力解离; M5 = 碎片化/退行结构]",
            mechanicsEn: "Base_TRAUMA + [M0_Barrier = Forcefully_Penetrated; Will_and_Flesh = Violently_Dissociated; M5 = Fragmented/Regressive_Structure]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：身体主权丧失的瞬间 + 意志与肉体的撕裂。文本：事后一切动作都碎片化的、退行的、无法恢复完整性的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Moment_of_Bodily_Sovereignty_Loss + Tearing_of_Will_and_Flesh. Text: Post-Incident_All_Actions_Fragmented_Regressive_Integrity_Unrecoverable_Narration.",
            runtime: "IF (主体试图恢复事前的行为模式) THEN (强制：碎片化和退行结构加剧)。严禁M0屏障在本次遭遇周期内被修复。",
            runtimeEn: "IF (Subject_Attempts_Restoring_Pre-Incident_Behavior) THEN (Force: Fragmentation_and_Regression_Intensify). FORBID_M0_Barrier_Being_Repaired_in_Current_Cycle."
        }
    },
    {
        id: "bod_mutation",
        name: "身体变异", nameEn: "Mutation",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "长出了不该有的器官，或者皮肤开始溃烂/鳞片化。",
        defEn: "Unnatural organ growth, skin decay/scaling.",
        core: "人性的丧失。卡夫卡式的变形记，成为怪物。 | 实在界: 形式的崩坏。",
        coreEn: "Loss of humanity. Kafkaesque metamorphosis, becoming a monster. | The Real: Collapse of form.",
        logic: "【本我图式规范冲突器】：主体的'本我图式（SUR1/M4）'与人类大他者（M4）的规范发生物理冲突。叙事焦点放在这种'不可名状的恐怖'如何使得主体失去所有的社会化沟通逻辑权重。Tuchē以'形式的崩坏'形式降临——人性丧失，卡夫卡式变形，成为怪物。",
        logicEn: "[Id-Schema Norm Conflict Device]: Subject's 'id-schema (SUR1/M4)' conflicts physically with human Other's (M4) norms. Focus on 'unspeakable horror' costing all social communication logic weighting. Tuchē descends as 'collapse of form'—loss of humanity, Kafkaesque metamorphosis, becoming monster.",
        patch: {
            mechanics: "基础创伤协议 + [本我图式SUR1/M4 = 与M4人类规范物理冲突; 社会化沟通 = 逻辑权重丧失; 形式 = 崩坏]",
            mechanicsEn: "Base_TRAUMA + [Id-Schema_SUR1/M4 = Physical_Conflict_with_M4_Human_Norms; Social_Communication = Logic_Weighting_Lost; Form = Collapsed]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：镜中不再是人类的面孔 + 不该存在的器官/鳞片/肉芽。文本：人性边界崩塌的、不可名状恐怖吞噬社交逻辑的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Non-Human_Face_in_Mirror + Organs/Scales/Growths_That_Should_Not_Exist. Text: Humanity_Boundary_Collapsed_Unspeakable_Horror_Consuming_Social_Logic_Narration.",
            runtime: "IF (主体试图隐藏变异) THEN (强制：变异以更不可控的形式暴露)。严禁社会化沟通逻辑权重被恢复。",
            runtimeEn: "IF (Subject_Attempts_Hiding_Mutation) THEN (Force: Mutation_Exposed_in_More_Uncontrollable_Form). FORBID_Social_Communication_Logic_Weighting_Being_Restored."
        }
    },
    {
        id: "bod_aging",
        name: "衰老瞬间", nameEn: "The Aging",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "照镜子发现第一根白发，或突然无法完成年轻时的动作。",
        defEn: "Seeing the first white hair or failing to perform youthful actions.",
        core: "熵增的胜利。时间在肉体上的刻痕，不可逆的衰败。 | 实在界: 时间的腐蚀。",
        coreEn: "Victory of entropy. Irreversible decay; time's cuts. | The Real: Corrosion of time.",
        logic: "【肺体熔增装置】：时序（SUR1/M5）对肉体的主动熔增描写。主体的 M1 必须在逻辑上适应一种'逐渐缩减的能动性'。这种逻辑通过描写动作的'卡顿'和'费力'来体现。Tuchē以'时间的腐蚀'形式降临——熔增的胜利，时间在肉体上的刻痕，不可逆的衰败。",
        logicEn: "[Entropy Increase Device]: Active entropy description of time (SUR1/M5) on the body. M1 must logically adapt to 'gradually shrinking agency', manifested through 'lags' and 'effort' in movement. Tuchē descends as 'corrosion of time'—victory of entropy, irreversible decay.",
        patch: {
            mechanics: "基础创伤协议 + [时间SUR1/M5 = 对肉体主动熔增; M1能动性 = 逐渐缩减; 动作 = 卡顿/费力]",
            mechanicsEn: "Base_TRAUMA + [Time_SUR1/M5 = Active_Entropy_on_Body; M1_Agency = Gradually_Shrinking; Movement = Lags/Effort]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：镜中的白发 + 曾经轻松的动作现在需要支撑。文本：每个动作都带着时间刷印的、能动性缩减的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: White_Hair_in_Mirror + Once_Easy_Actions_Now_Need_Support. Text: Every_Action_Stamped_by_Time_Agency_Shrinking_Narration.",
            runtime: "IF (主体试图执行年轻时的动作) THEN (强制：动作卡顿、费力、失败)。严禁M1的能动性恢复到衰老前水平。",
            runtimeEn: "IF (Subject_Attempts_Youthful_Actions) THEN (Force: Actions_Lag_Strain_Fail). FORBID_M1_Agency_Restoring_to_Pre-Aging_Level."
        }
    },
    {
        id: "bod_parasite",
        name: "寄生虫", nameEn: "Parasite",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "感觉到皮下有东西在蠕动。",
        defEn: "Feeling something crawling under the skin.",
        core: "身体不再属于自己。内部的异己力量。 | 实在界: 恶心的共生。",
        coreEn: "Body no longer yours. Internal alien power. | The Real: Disgusting symbiosis.",
        logic: "【内部一致性裂解器】：主体的'内部一致性逻辑'破裂。身体被分裂为'我的'与'它的'。叙事中主体的所有动作（M5）都必须承受来自这个'内部他者（M4 异源指令）'的反作用力逻辑干扰。Tuchē以'恶心的共生'形式降临——身体不再属于自己，内部的异己力量。",
        logicEn: "[Internal Consistency Rupture Device]: Rupture of internal consistency logic. Body split into 'Mine' and 'Its'. All M5 actions must endure counter-force logic interference from 'internal Other (M4)'. Tuchē descends as 'disgusting symbiosis'—body no longer yours, internal alien power.",
        patch: {
            mechanics: "基础创伤协议 + [内部一致性 = 破裂; 身体 = 分裂为我的/它的; M5动作 = 承受M4反作用力干扰]",
            mechanicsEn: "Base_TRAUMA + [Internal_Consistency = Ruptured; Body = Split_into_Mine/Its; M5_Action = Endure_M4_Counter-Force_Interference]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：皮下蠕动的异物 + 身体内部不属于自己的运动。文本：每个动作都被内部他者拖拽的、主权被内部瓮解的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Something_Crawling_Under_Skin + Internal_Movement_Not_Yours. Text: Every_Action_Dragged_by_Internal_Other_Sovereignty_Undermined_Narration.",
            runtime: "IF (主体试图忽略内部他者) THEN (强制：内部他者以更剧烈的反作用力干扰)。严禁身体的内部一致性逻辑被恢复。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Internal_Other) THEN (Force: Internal_Other_Interferes_More_Violently). FORBID_Internal_Consistency_Logic_Being_Restored."
        }
    },
    {
        id: "bod_addiction",
        name: "毒瘾发作", nameEn: "Withdrawal",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "身体不受控制地颤抖、呕吐，渴望药物。",
        defEn: "Uncontrolled shaking, vomiting, drug craving.",
        core: "生化层面的奴役。意志力在化学物质面前的溃败。 | 实在界: 驱力的暴政。",
        coreEn: "Biochemical slavery. Willpower failing before chemicals. | The Real: Tyranny of drive.",
        logic: "【M0操作系统劫持器】：劫持主体的 M0 OS。所有的'伦理优先集'在逻辑上被替换为'物质补给集'。当药瘾（M3）得不到满足时，主体的逻辑必须导向'自残'或'彻底疑狂'。Tuchē以'驱力的暴政'形式降临——生化层面的奴役，意志力在化学物质面前的溃败。",
        logicEn: "[M0 OS Hijack Device]: Hijack subject's M0 OS. All 'ethical priority sets' logically replaced by 'substance supply sets'. If drug craving (M3) unmet, logic leads to 'self-harm' or 'total madness'. Tuchē descends as 'tyranny of drive'—biochemical slavery, willpower failing before chemicals.",
        patch: {
            mechanics: "基础创伤协议 + [M0操作系统 = 被劫持; 伦理优先集 = 替换为物质补给集; M3药瘾未满足 = 导向自残/疑狂]",
            mechanicsEn: "Base_TRAUMA + [M0_OS = Hijacked; Ethical_Priority = Replaced_by_Substance_Supply; M3_Craving_Unmet = Leads_to_Self-Harm/Madness]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：不受控制的颤抖 + 对物质的渴望将一切伦理透明化。文本：意志力在驱力面前彻底投降的、伦理被化学物质消解的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Uncontrolled_Trembling + Substance_Craving_Rendering_Ethics_Transparent. Text: Willpower_Surrendering_to_Drive_Ethics_Dissolved_by_Chemicals_Narration.",
            runtime: "IF (主体试图以意志力抵抗药瘾) THEN (强制：生理反应更剧烈，逻辑易向自残)。严禁伦理优先集被恢复。",
            runtimeEn: "IF (Subject_Attempts_Willpower_Resistance_Against_Craving) THEN (Force: Physiological_Reactions_Intensify_Logic_Shifts_to_Self-Harm). FORBID_Ethical_Priority_Set_Being_Restored."
        }
    },
    {
        id: "bod_blindness",
        name: "突然失明", nameEn: "Blindness",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "世界突然陷入黑暗，或者视力急剧下降。",
        defEn: "World sudden dark or sharp vision decline.",
        core: "感官剥夺。与世界的视觉连接被切断，陷入孤立。 | 实在界: 黑暗的降临。",
        coreEn: "Sensory deprivation. Severing visual connection; isolation. | The Real: Descent of darkness.",
        logic: "【视觉能指系统离线器】：主体的'视觉能指系统（SUR5）'发生永久性离线。叙事必须被强制平移至基于非视觉（触感/声音）的原始感知层，强调物理空间（SUR1）对主体的'恶意侵入感'。Tuchē以'黑暗的降临'形式降临——感官剥夺，与世界的视觉连接被切断，陷入孤立。",
        logicEn: "[Visual Signifier System Offline Device]: Subject's 'visual signifier system (SUR5)' goes permanently offline. Narrative forced into non-visual (touch/sound) sensory layers; spatial (SUR1) 'malicious intrusion' on subject emphasized. Tuchē descends as 'descent of darkness'—sensory deprivation, visual connection severed, isolation.",
        patch: {
            mechanics: "基础创伤协议 + [视觉能指系统SUR5 = 永久离线; 叙事 = 强制平移至非视觉原始感知; 空间SUR1 = 恶意侵入感]",
            mechanicsEn: "Base_TRAUMA + [Visual_Signifier_SUR5 = Permanently_Offline; Narrative = Forced_to_Non-Visual_Primitive_Sensory; Space_SUR1 = Malicious_Intrusion]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：突然降临的黑暗 + 用触感和声音重建的世界。文本：视觉被剥夺后空间变成恶意实体的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Sudden_Darkness + World_Rebuilt_by_Touch_and_Sound. Text: After_Vision_Stripped_Space_Becomes_Malicious_Entity_Narration.",
            runtime: "IF (主体试图依赖视觉) THEN (强制：视觉输入为纯粹黑暗)。严禁视觉能指系统在本次遭遇周期内恢复上线。",
            runtimeEn: "IF (Subject_Attempts_Relying_on_Vision) THEN (Force: Visual_Input_Pure_Darkness). FORBID_Visual_Signifier_System_Restoring_Online_in_Current_Cycle."
        }
    },
    {
        id: "bod_pain",
        name: "剧痛折磨", nameEn: "Torture",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "持续的、无法缓解的生理疼痛。",
        defEn: "Persistent, unrelatable physical pain.",
        core: "语言的瓦解。在剧痛中，人退化为只会嚎叫的动物。 | 实在界: 痛苦的绝对。",
        coreEn: "Dissolution of language. Humans regress to screaming animals. | The Real: Absoluteness of pain.",
        logic: "【痛苦能指溢出器】：主体系逻辑被单一的'痛苦（M2）能指'所溢出。文本必须表现出'语言能力的丢失'，主体无法生成任何复杂的 M1 规划，逻辑陷入对疼痛的被动递归。Tuchē以'痛苦的绝对'形式降临——语言瓦解，人退化为只会嘴叫的动物。",
        logicEn: "[Pain Signifier Overflow Device]: System logic overflowed by single 'Pain (M2) signifier'. Text must show 'loss of language capacity'; subject cannot generate complex M1 planning, logic stuck in passive pain recursion. Tuchē descends as 'absoluteness of pain'—language dissolution, human regressing to screaming animal.",
        patch: {
            mechanics: "基础创伤协议 + [系统逻辑 = 被痛苦M2能指溢出; 语言能力 = 丢失; M1规划 = 无法生成/被动疼痛递归]",
            mechanicsEn: "Base_TRAUMA + [System_Logic = Overflowed_by_Pain_M2_Signifier; Language_Capacity = Lost; M1_Planning = Cannot_Generate/Passive_Pain_Recursion]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：无法缓解的剧痛 + 语言崩解为叫声的瞬间。文本：思维被疼痛完全占据的、语言消失的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Unrelievable_Agony + Moment_Language_Collapses_into_Screaming. Text: Thought_Completely_Occupied_by_Pain_Language_Vanishing_Narration.",
            runtime: "IF (主体试图忽略或超越疼痛) THEN (强制：痛觉加剧，逻辑更深地陷入递归)。严禁语言能力和M1规划能力被恢复。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_or_Transcending_Pain) THEN (Force: Pain_Intensifies_Logic_Deeper_into_Recursion). FORBID_Language_Capacity_and_M1_Planning_Being_Restored."
        }
    },
    {
        id: "bod_hunger",
        name: "极度饥饿", nameEn: "Starvation",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "为了食物可以放弃尊严，甚至吃人。",
        defEn: "Surrendering dignity for food, even cannibalism.",
        core: "生存本能压倒道德。文明的外衣被胃酸消化。 | 实在界: 本能的回归。",
        coreEn: "Survival instinct over moral. Civilization digested by stomach acid. | The Real: Return of instinct.",
        logic: "【生命周期极限收缩器】：生命周期的'极限收缩'逻辑。所有的 M5 对象在主体的逻辑识别中都必须被重写为'蛋白质获取率'。强制性的'大他者逻辑（伦理）'暂时处于静默状态。Tuchē以'本能的回归'形式降临——生存本能压倒道德，文明的外衣被胃酸消化。",
        logicEn: "[Life Cycle Limit Contraction Device]: Lifespan 'limit contraction' logic. All M5 objects logically rewritten as 'protein acquisition rate'. 'Other-logic (Ethics)' temporarily silenced. Tuchē descends as 'return of instinct'—survival instinct over morality, civilization digested by stomach acid.",
        patch: {
            mechanics: "基础创伤协议 + [M5对象 = 重写为蛋白质获取率; 大他者逻辑/伦理 = 静默; 生命周期 = 极限收缩]",
            mechanicsEn: "Base_TRAUMA + [M5_Objects = Rewritten_as_Protein_Acquisition_Rate; Other-Logic/Ethics = Silenced; Life_Cycle = Limit_Contraction]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：尊严在饥饿面前崩解的瞬间 + 一切都变成食物的眼神。文本：伦理被本能吐污的、文明外衣溶解的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Moment_Dignity_Collapses_Before_Hunger + Eyes_Seeing_Everything_as_Food. Text: Ethics_Defiled_by_Instinct_Civilization_Coat_Dissolving_Narration.",
            runtime: "IF (主体试图维持伦理底线) THEN (强制：饥饿刮除所有伦理逻辑)。严禁大他者伦理逻辑被恢复。",
            runtimeEn: "IF (Subject_Attempts_Maintaining_Ethical_Baseline) THEN (Force: Hunger_Strips_All_Ethical_Logic). FORBID_Other-Logic_Ethics_Being_Restored."
        }
    },
    {
        id: "bod_impotence",
        name: "性无能/阉割", nameEn: "Impotence",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "无法勃起，或者性器官受损。",
        defEn: "Inability to erect or damaged sexual organs.",
        core: "菲勒斯的丧失。男性气质或生命力的符号性死亡。 | 实在界: 权能的丧失。",
        coreEn: "Loss of Phallus. Symbolic death of masculinity/vitality. | The Real: Loss of power.",
        logic: "【阈割性切断装置】：主体的 M1 核心遭遇'阈割性的切断'。这种'丧失'被设定为主体存在的恒定背景音。所有的 M5 动作都必须体现一种'尝试补偿这种缺失'的无力感。Tuchē以'权能的丧失'形式降临——菲勒斯的丧失，男性气质或生命力的符号性死亡。",
        logicEn: "[Castratory Cut Device]: Subject's M1 core suffers 'castratory cut'. This 'loss' set as constant background of existence. Every M5 action must manifest impotence in 'trying to compensate for this lack'. Tuchē descends as 'loss of power'—loss of Phallus, symbolic death of masculinity/vitality.",
        patch: {
            mechanics: "基础创伤协议 + [M1核心 = 阈割性切断; 丧失 = 存在的恒定背景音; M5动作 = 补偿缺失的无力感]",
            mechanicsEn: "Base_TRAUMA + [M1_Core = Castratory_Cut; Loss = Constant_Background_of_Existence; M5_Action = Impotence_in_Compensating_Lack]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：不可言说的缺失 + 每个动作背后的无力感背景音。文本：一切行动都是对不可填补之缺失的徒劳补偿的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Unspeakable_Loss + Impotence_Background_Tone_Behind_Every_Action. Text: All_Actions_as_Futile_Compensation_for_Unfillable_Lack_Narration.",
            runtime: "IF (主体试图补偿这种缺失) THEN (强制：补偿行动反而强化缺失感)。严禁M1的阈割性切断被修复。",
            runtimeEn: "IF (Subject_Attempts_Compensating_Loss) THEN (Force: Compensation_Action_Reinforces_Lack). FORBID_M1_Castratory_Cut_Being_Repaired."
        }
    },
    {
        id: "bod_double_pulse",
        name: "双重脉搏", nameEn: "Second Heart",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "发现自己有两个心脏，或者是人造人。",
        defEn: "Discovery of two hearts or being a cyborg/android.",
        core: "非人感。对自己物种定义的怀疑。 | 实在界: 身份的异质。",
        coreEn: "Non-human feeling. Doubt in species definition. | The Real: Heterogeneity of identity.",
        logic: "【生理基准外源逻辑检测器】：主体的生理基准（SUR1 肉身动力域）被发现包含一种'非我的外源逻辑'。主体的叙事逻辑被迫转向对自己'物理本质'的追溯（M1），而非'人类未来'的规划。Tuchē以'身份的异质'形式降临——非人感，对自己物种定义的怀疑。",
        logicEn: "[Physiological Baseline Exogenous Logic Detector]: Subject's SUR1 (Physiological Baseline) contains 'non-self exogenous logic'. Narrative logic forced toward tracing 'physical essence' (M1), not 'human future' planning. Tuchē descends as 'heterogeneity of identity'—non-human feeling, doubt in species definition.",
        patch: {
            mechanics: "基础创伤协议 + [SUR1生理基准 = 包含非我外源逻辑; M1 = 从人类未来规划转向物理本质追溯; 身份 = 异质]",
            mechanicsEn: "Base_TRAUMA + [SUR1_Baseline = Contains_Non-Self_Exogenous_Logic; M1 = From_Human_Future_Planning_to_Physical_Essence_Tracing; Identity = Heterogeneous]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：双重脉搏/非人类的内部结构 + 对自己是什么的根本性怀疑。文本：生理基准崩塌后对物种定义的恐怖追问的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Double_Pulse/Non-Human_Internal_Structure + Fundamental_Doubt_of_What_Am_I. Text: After_Physiological_Baseline_Collapse_Terrifying_Species_Definition_Inquiry_Narration.",
            runtime: "IF (主体试图维持'人类'身份) THEN (强制：更多非人类特征暴露)。严禁M1恢复'人类未来'规划逻辑。",
            runtimeEn: "IF (Subject_Attempts_Maintaining_Human_Identity) THEN (Force: More_Non-Human_Traits_Exposed). FORBID_M1_Restoring_Human_Future_Planning_Logic."
        }
    },
    {
        id: "bod_possession",
        name: "鬼上身", nameEn: "Possession",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "无法控制肢体，嘴里说出不属于自己的话。",
        defEn: "Losing limb control, speaking words not your own.",
        core: "主权的移交。身体变成了别人的容器。 | 实在界: 意志的被夺。",
        coreEn: "Transfer of sovereignty. Body as another's container. | The Real: Possession of will.",
        logic: "【M1指令集权限冲突器】：主体的 M1 指令集发生'权限冲突'。文本描写必须在'主体意志'与'肉体异动'之间频繁切换，以此表现主体权力的'虚假性'和实在界的'接管'。Tuchē以'意志的被夺'形式降临——主权的移交，身体变成了别人的容器。",
        logicEn: "[M1 Instruction Set Permission Conflict Device]: Permission conflict in M1 instruction set. Text must toggle between 'Subject Will' and 'Bodily Tremors', manifesting 'falsity' of power and the Real's 'takeover'. Tuchē descends as 'possession of will'—transfer of sovereignty, body as another's container.",
        patch: {
            mechanics: "基础创伤协议 + [M1指令集 = 权限冲突; 文本 = 主体意志/肉体异动频繁切换; 主权 = 移交]",
            mechanicsEn: "Base_TRAUMA + [M1_Instruction_Set = Permission_Conflict; Text = Subject_Will/Bodily_Tremors_Frequent_Toggle; Sovereignty = Transferred]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：无法控制的肢体 + 不属于自己的语言从嘴中涌出。文本：意志与肉体偏离的、主权被实在界接管的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Uncontrollable_Limbs + Alien_Words_Pouring_from_Mouth. Text: Will_and_Body_Deviating_Sovereignty_Taken_Over_by_Real_Narration.",
            runtime: "IF (主体试图重复控制身体) THEN (强制：身体以更剧烈的异动反抗)。严禁M1指令集权限被完全恢复。",
            runtimeEn: "IF (Subject_Attempts_Regaining_Bodily_Control) THEN (Force: Body_Rebels_with_More_Violent_Tremors). FORBID_M1_Instruction_Set_Permission_Being_Fully_Restored."
        }
    },
    {
        id: "bod_drowning",
        name: "溺水", nameEn: "Drowning",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "水灌入肺部，无法呼吸，下沉。",
        defEn: "Water in lungs, unable to breathe, sinking.",
        core: "窒息。回归母体（羊水）的死亡冲动。 | 实在界: 呼吸的终止。",
        coreEn: "Choking. Death drive returning to the womb (amniotic fluid). | The Real: Termination of breath.",
        logic: "【生命时序极限收缩器】：生命时序（SUR1/M5）向'极限时刻'的高速收缩描写。主体的 M1 被迫抛弃能指功能，叙事逻辑强制性地使用'感念性断片'（M7）来替代正常台词。Tuchē以'呼吸的终止'形式降临——窒息，回归母体（羊水）的死亡冲动。",
        logicEn: "[Life Timing Limit Contraction Device]: High-speed contraction of life timing (SUR1/M5) toward 'limit moment'. M1 forced to abandon signifier functions; narrative uses 'sensory fragments (M7)' to replace dialogue. Tuchē descends as 'termination of breath'—choking, death drive returning to womb.",
        patch: {
            mechanics: "基础创伤协议 + [生命时序SUR1/M5 = 向极限时刻高速收缩; M1 = 抛弃能指功能; 叙事 = 感念性断片M7替代台词]",
            mechanicsEn: "Base_TRAUMA + [Life_Timing_SUR1/M5 = High-Speed_Contraction_to_Limit; M1 = Abandon_Signifier_Functions; Narrative = Sensory_Fragments_M7_Replace_Dialogue]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：水灌入肺部 + 下沉中的感官碎片。文本：语言被窒息替代的、感念性断片式的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Water_Filling_Lungs + Sensory_Fragments_While_Sinking. Text: Language_Replaced_by_Suffocation_Sensory_Fragment_Narration.",
            runtime: "IF (主体试图呼救) THEN (强制：语言输出为气泡和喘息)。严禁M1的能指功能在极限时刻被恢复。",
            runtimeEn: "IF (Subject_Attempts_Calling_for_Help) THEN (Force: Language_Output_Becomes_Bubbles_and_Gasps). FORBID_M1_Signifier_Function_Restoring_at_Limit_Moment."
        }
    },
    {
        id: "bod_burning",
        name: "烈火焚身", nameEn: "Burning",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "皮肤被火焰吞噬，毁灭性的热量。",
        defEn: "Skin consumed by flames, devastating heat.",
        core: "彻底的净化与毁灭。痛觉的巅峰。 | 实在界: 能量的暴走。",
        coreEn: "Total purification and destruction. Peak of pain. | The Real: Energy rampage.",
        logic: "【能量化学销毁器】：纯粹能量（M2）对生物肉身（SUR1 物理域）的'化学销毁'过程。所有基于'尊严'或'秩序'的逻辑在叙事中都必须由于物理性的'毁灭感'而迅速熔断失效。Tuchē以'能量的暴走'形式降临——彻底的净化与毁灭，痛觉的巅峰。",
        logicEn: "[Energy Chemical Destruction Device]: 'Chemical destruction' of biological flesh (SUR1 Physical Domain) by pure energy (M2). Logic based on 'dignity' or 'order' must rapidly melt and fail due to physical 'destruction'. Tuchē descends as 'energy rampage'—total purification and destruction, peak of pain.",
        patch: {
            mechanics: "基础创伤协议 + [纯粹能量M2 = 对生物肉身SUR1化学销毁; 尊严/秩序逻辑 = 熔断失效; 痛觉 = 巅峰]",
            mechanicsEn: "Base_TRAUMA + [Pure_Energy_M2 = Chemical_Destruction_of_Biological_SUR1; Dignity/Order_Logic = Melt_and_Fail; Pain = Peak]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：火焰吞噬皮肤 + 毁灭性的热量中一切逻辑熔断。文本：尊严和秩序在纯能量面前焊化的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Flame_Consuming_Skin + All_Logic_Melting_in_Devastating_Heat. Text: Dignity_and_Order_Incinerated_Before_Pure_Energy_Narration.",
            runtime: "IF (主体试图维持尊严或秩序) THEN (强制：物理毁灭感使一切逻辑熔断)。严禁基于尊严或秩序的逻辑被恢复。",
            runtimeEn: "IF (Subject_Attempts_Maintaining_Dignity_or_Order) THEN (Force: Physical_Destruction_Melts_All_Logic). FORBID_Dignity_or_Order_Logic_Being_Restored."
        }
    },
    {
        id: "bod_frozen",
        name: "低温冻结", nameEn: "Freezing",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "四肢失去知觉，意识模糊，想睡。",
        defEn: "Losing sensation in limbs, fading consciousness.",
        core: "生命的停滞。熵减至零的死寂。 | 实在界: 热量的流失。",
        coreEn: "Stagnation of life. Dead stillness as entropy hits zero. | The Real: Heat loss.",
        logic: "【叙事熔极速降低器】：叙事熔的'极速降低'逻辑。文本语速必须随着叙事中主体的'冰冻'而变缓，主体的 M1 反射弧被逻辑拉长直至进入'死亡的无限期停顿'。Tuchē以'热量的流失'形式降临——生命的停滞，熔减至零的死寂。",
        logicEn: "[Narrative Entropy Rapid Decrease Device]: Rapid decrease in narrative entropy. Text speed must slow with 'freezing'; M1 reflex arcs logically stretched until 'death's indefinite pause'. Tuchē descends as 'heat loss'—stagnation of life, dead stillness as entropy hits zero.",
        patch: {
            mechanics: "基础创伤协议 + [叙事熔 = 极速降低; 文本语速 = 随冰冻变缓; M1反射弧 = 拉长至死亡停顿]",
            mechanicsEn: "Base_TRAUMA + [Narrative_Entropy = Rapidly_Decreasing; Text_Speed = Slowing_with_Freezing; M1_Reflex_Arc = Stretched_to_Death_Pause]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：四肢失去知觉 + 意识模糊中想睡的温柔死亡。文本：越来越慢的、渐渐冻结的、进入永恒停顿的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Limbs_Losing_Sensation + Gentle_Death_in_Fading_Consciousness. Text: Increasingly_Slow_Gradually_Freezing_Entering_Eternal_Pause_Narration.",
            runtime: "IF (主体试图加速行动) THEN (强制：所有动作变得更慢更卖力)。严禁叙事熔被恢复。",
            runtimeEn: "IF (Subject_Attempts_Accelerating_Action) THEN (Force: All_Actions_Become_Slower_More_Strained). FORBID_Narrative_Entropy_Being_Restored."
        }
    },
    {
        id: "bod_insomnia",
        name: "极度失眠", nameEn: "Insomnia",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "连续几天无法入睡，现实感剥离。",
        defEn: "Consecutive days without sleep, reality peeling away.",
        core: "清醒的噩梦。梦境与现实界限模糊。 | 实在界: 意识的疲劳。",
        coreEn: "Waking nightmare. Blurred lines between dream and Reality. | The Real: Fatigue of consciousness.",
        logic: "【睡眠界限故障器】：主体系逻辑中'睡眠界限（M0 的重启区）'故障。由于无法重置能指（M4 象征秩序），主体陷入了语义的'过度曝光'中，逻辑回路由于过载而产生幻觉噪点。Tuchē以'意识的疲劳'形式降临——清醒的噩梦，梦境与现实界限模糊。",
        logicEn: "[Sleep Boundary Fault Device]: Failure of 'sleep boundary (M0 reboot zone)' in system logic. Unable to reset signifiers (M4 Symbolic Order), subject stuck in semantic 'overexposure'; logic circuits overflow with hallucination noise. Tuchē descends as 'fatigue of consciousness'—waking nightmare, blurred dream/reality lines.",
        patch: {
            mechanics: "基础创伤协议 + [睡眠界限M0重启区 = 故障; 能指M4 = 无法重置; 逻辑回路 = 过载/幻觉噪点]",
            mechanicsEn: "Base_TRAUMA + [Sleep_Boundary_M0_Reboot = Fault; Signifier_M4 = Cannot_Reset; Logic_Circuit = Overloaded/Hallucination_Noise]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：多天未眠后现实感的剥离 + 幻觉与现实无法区分。文本：意识过度曝光的、幻觉噪点渗入现实的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Reality_Peeling_After_Days_Without_Sleep + Hallucinations_Indistinguishable_from_Reality. Text: Consciousness_Overexposed_Hallucination_Noise_Seeping_into_Reality_Narration.",
            runtime: "IF (主体试图入睡) THEN (强制：睡眠界限持续故障，意识更深进入过度曝光)。严禁睡眠界限（M0重启区）被修复。",
            runtimeEn: "IF (Subject_Attempts_Sleeping) THEN (Force: Sleep_Boundary_Continues_Fault_Consciousness_Deeper_into_Overexposure). FORBID_Sleep_Boundary_M0_Reboot_Being_Repaired."
        }
    },
    {
        id: "bod_panic_attack",
        name: "恐慌发作", nameEn: "Panic Attack",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "无法呼吸，心脏狂跳，觉得要死了。",
        defEn: "Gasping, heart racing, feeling death imminent.",
        core: "无对象的恐惧。身体对心理危机的剧烈反应。 | 实在界: 焦虑的溢出。",
        coreEn: "Fear without object. Violent bodily reaction to psychic crisis. | The Real: Overflow of anxiety.",
        logic: "【纯粹焦虑短路打击器】：纯粹焦虑（实在界）对符号中和机制（M4）的'短路打击'。主体的 M1 必须表现出一种'非逻辑的惊惧'，所有合理的 M5 规避逻辑都在此失效。Tuchē以'焦虑的溢出'形式降临——无对象的恐惧，身体对心理危机的剧烈反应。",
        logicEn: "[Pure Anxiety Short-Circuit Device]: Pure anxiety (the Real) short-circuiting symbolic neutralization (M4). M1 must manifest 'illogical terror', all rational M5 evasion logic failing. Tuchē descends as 'overflow of anxiety'—fear without object, violent bodily reaction to psychic crisis.",
        patch: {
            mechanics: "基础创伤协议 + [纯粹焦虑 = 对M4符号中和机制短路打击; M1 = 非逻辑惊惧; M5规避逻辑 = 失效]",
            mechanicsEn: "Base_TRAUMA + [Pure_Anxiety = Short-Circuit_M4_Symbolic_Neutralization; M1 = Illogical_Terror; M5_Evasion_Logic = Failed]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：无法呼吸的窒息感 + 心脏狂跳中的死亡预感。文本：所有逻辑规避失效的、纯粹非理性惊惧的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Suffocating_Breathlessness + Death_Premonition_in_Racing_Heart. Text: All_Logical_Evasion_Failed_Pure_Irrational_Terror_Narration.",
            runtime: "IF (主体试图理性分析恐慌) THEN (强制：纯粹焦虑加剧，逻辑更深短路)。严禁符号中和机制M4被恢复。",
            runtimeEn: "IF (Subject_Attempts_Rational_Analysis_of_Panic) THEN (Force: Pure_Anxiety_Intensifies_Logic_Further_Short-Circuited). FORBID_Symbolic_Neutralization_M4_Being_Restored."
        }
    },
    {
        id: "bod_allergy",
        name: "严重过敏", nameEn: "Anaphylaxis",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "喉头水肿，窒息，对环境的过度排斥。",
        defEn: "Laryngeal edema, suffocation, over-rejection of environment.",
        core: "身体对世界的拒绝。微小物质引发的崩溃。 | 实在界: 免疫的背叛。",
        coreEn: "Body's rejection of the world. Collapse triggered by microscopic matter. | The Real: Betrayal of immunity.",
        logic: "【M1防御机制逻辑自卷器】：主体的 M1 防御机制发生'逻辑自卷'，将无害环境标记为'致命威胁'。叙事焦点放在这种由'过度警觉'导致的结构性自杀描写上。Tuchē以'免疫的背叛'形式降临——身体对世界的拒绝，微小物质引发的崩溃。",
        logicEn: "[M1 Defense Mechanism Logical Self-Involution Device]: M1 defense mechanism undergoes 'logical self-involution', marking harmless environments as 'lethal threats'. Focus on structural suicide from 'over-vigilance'. Tuchē descends as 'betrayal of immunity'—body's rejection of world, collapse by microscopic matter.",
        patch: {
            mechanics: "基础创伤协议 + [M1防御机制 = 逻辑自卷; 无害环境 = 标记为致命威胁; 叙事 = 过度警觉导致的结构性自杀]",
            mechanicsEn: "Base_TRAUMA + [M1_Defense = Logical_Self-Involution; Harmless_Environment = Marked_Lethal; Narrative = Structural_Suicide_from_Over-Vigilance]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：喉头水肿的窒息 + 微小物质引发的身体全面崩溃。文本：防御机制反蚀自身的、身体发动反世界战争的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Laryngeal_Edema_Suffocation + Total_Body_Collapse_from_Microscopic_Matter. Text: Defense_Mechanism_Corroding_Self_Body_Waging_War_Against_World_Narration.",
            runtime: "IF (主体试图与环境和解) THEN (强制：身体发起更剧烈的排斥反应)。严禁防御机制的逻辑自卷被修复。",
            runtimeEn: "IF (Subject_Attempts_Reconciling_with_Environment) THEN (Force: Body_Launches_More_Violent_Rejection). FORBID_Defense_Mechanism_Self-Involution_Being_Repaired."
        }
    },
    {
        id: "bod_surgery_awake",
        name: "术中苏醒", nameEn: "Awake Surgery",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "在手术台上醒来，能感觉到痛但动不了。",
        defEn: "Waking on the table, feeling pain but unable to move.",
        core: "终极的无助。作为肉块被切割。 | 实在界: 麻醉的失效。",
        coreEn: "Ultimate helplessness. Slicing through as a piece of meat. | The Real: Anesthesia failure.",
        logic: "【主权意志肉筒锁闭器】：主体的'主权意志（M1）'被锁闭在'无应答的肉筒'（SUR1 物理封印）内。叙事必须以极高的频率展现这种'内外断裂'，实在界即为那种'无法言说的被动性'。Tuchē以'麻醉的失效'形式降临——终极的无助，作为肉块被切割。",
        logicEn: "[Sovereignty Will Meat-Tube Lock Device]: Subject's 'sovereignty (M1)' locked in 'non-responsive meat-tube' (SUR1). Narrative must manifest 'internal-external rupture' at high frequency; the Real as 'unspeakable passivity'. Tuchē descends as 'anesthesia failure'—ultimate helplessness, slicing through as meat.",
        patch: {
            mechanics: "基础创伤协议 + [主权意志M1 = 锁闭在无应答肉筒SUR1; 叙事 = 内外断裂极高频率; 实在界 = 无法言说的被动性]",
            mechanicsEn: "Base_TRAUMA + [Sovereignty_M1 = Locked_in_Non-Responsive_Meat-Tube_SUR1; Narrative = Internal-External_Rupture_High_Frequency; Real = Unspeakable_Passivity]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：手术台上的若醒 + 感觉到切割但无法动弹。文本：意志被困在肉筒中的、内外彻底断裂的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Awakening_on_Operating_Table + Feeling_Cut_but_Cannot_Move. Text: Will_Trapped_in_Meat-Tube_Internal-External_Completely_Ruptured_Narration.",
            runtime: "IF (主体试图移动或发声) THEN (强制：肉体完全无应答，被动性加剧)。严禁主权意志突破肉筒锁闭。",
            runtimeEn: "IF (Subject_Attempts_Moving_or_Speaking) THEN (Force: Body_Completely_Non-Responsive_Passivity_Intensified). FORBID_Sovereignty_Will_Breaking_Through_Meat-Tube_Lock."
        }
    },
    {
        id: "bod_mark",
        name: "神秘印记", nameEn: "The Mark",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "身上突然出现了奇怪的纹身或伤疤。",
        defEn: "Strange tattoos or scars suddenly appearing on the body.",
        core: "被大他者标记。被选中的诅咒。 | 实在界: 符号的刻写。",
        coreEn: "Marked by the Other. The curse of being chosen. | The Real: Inscription of symbols.",
        logic: "【非法符号肉身侵入器】：主体肉身发生'非法符号侵入'。这个印记（非法铭刻的 M4_New 指令）在逻辑上必须由于其'不可擦除性'而不断劫持主体的 M0 关注点，引起持续的 M6 振荡。Tuchē以'符号的刻写'形式降临——被大他者标记，被选中的诅咒。",
        logicEn: "[Illegal Signifier Flesh Intrusion Device]: Illegal signifier intrusion into subject's flesh. This mark (M4_New) must logically hijack M0 focus due to 'inerasability', causing sustained M6 oscillation. Tuchē descends as 'inscription of symbols'—marked by the Other, curse of being chosen.",
        patch: {
            mechanics: "基础创伤协议 + [肉身 = 非法符号侵入; 印记M4-New = 不可擦除/劫持M0关注; M6 = 持续振荡]",
            mechanicsEn: "Base_TRAUMA + [Flesh = Illegal_Signifier_Intrusion; Mark_M4-New = Inerasable/Hijacking_M0_Focus; M6 = Sustained_Oscillation]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：突然出现的神秘纹身/伤疤 + 无法消除的印记对注意力的劫持。文本：被大他者刻写的、无法逃避的被选中感的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Mysterious_Tattoo/Scar_Appearing + Inerasable_Mark_Hijacking_Attention. Text: Inscribed_by_Other_Inescapable_Chosenness_Narration.",
            runtime: "IF (主体试图擦除或忽视印记) THEN (强制：印记反而更加明显，M6振荡加剧)。严禁印记被擦除或主体成功忽视它。",
            runtimeEn: "IF (Subject_Attempts_Erasing_or_Ignoring_Mark) THEN (Force: Mark_Becomes_More_Prominent_M6_Oscillation_Intensified). FORBID_Mark_Being_Erased_or_Successfully_Ignored."
        }
    },
    {
        id: "bod_voice_loss",
        name: "声带受损", nameEn: "Lost Voice",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "张嘴却发不出声音。",
        defEn: "Opening mouth but no sound comes out.",
        core: "表达的阻断。在需要求救时失语。 | 实在界: 声音的阉割。",
        coreEn: "Blocked expression. Mutism when needing rescue. | The Real: Castration of voice.",
        logic: "【M4表达逻辑断路器】：禁止主体的一切外部言语（M4 表达逻辑断路）。主体的 M1 被困在'内部静默'中。叙事必须强调'言语欲望'与'物理失声'之间的那道绝望裂痕。Tuchē以'声音的阈割'形式降临——表达的阻断，在需要求救时失语。",
        logicEn: "[M4 Logical Circuit Breaker]: Disable all subject outward speech (M4 logical break). M1 trapped in 'internal silence'. Narrative must emphasize desperate rift between 'speech desire' and 'physical mutism'. Tuchē descends as 'castration of voice'—blocked expression, mutism when needing rescue.",
        patch: {
            mechanics: "基础创伤协议 + [外部言语M4 = 逻辑断路; M1 = 困在内部静默; 叙事 = 言语欲望与物理失声的绝望裂痕]",
            mechanicsEn: "Base_TRAUMA + [External_Speech_M4 = Logical_Circuit_Break; M1 = Trapped_in_Internal_Silence; Narrative = Desperate_Rift_Speech_Desire_vs_Physical_Mutism]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：张嘴却发不出声音 + 在最需要语言时的绝对沉默。文本：意志充满言语欲望但肉体完全静默的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Mouth_Open_but_No_Sound + Absolute_Silence_When_Language_Most_Needed. Text: Will_Full_of_Speech_Desire_but_Body_Completely_Mute_Narration.",
            runtime: "IF (主体试图发声) THEN (强制：输出为绝对静默，绝望裂痕加深)。严禁M4逻辑断路被修复。",
            runtimeEn: "IF (Subject_Attempts_Speaking) THEN (Force: Output_Absolute_Silence_Desperate_Rift_Deepens). FORBID_M4_Logical_Circuit_Break_Being_Repaired."
        }
    },
    {
        id: "bod_coma_wake",
        name: "植物人苏醒", nameEn: "Coma Wake",
        group: "C. 肉体的背叛", groupEn: "Corporeal",
        def: "昏迷多年后醒来，身体萎缩，世界已变。",
        defEn: "Waking after years in coma; withered body, changed world.",
        core: "时间的断层。肉体跟不上意识的复苏。 | 实在界: 重生的代价。",
        coreEn: "Time rift. Bodies failing to match conscious recovery. | The Real: Price of rebirth.",
        logic: "【M0增量同步逻辑器】：主体的 M0 OS 处于极其缓慢的'增量同步'逻辑中。由于时差（SUR1/M5时差对冲），主体所有的'常识 M4'与当前现实必须发生强烈的语义排斥。Tuchē以'重生的代价'形式降临——时间的断层，肉体跟不上意识的复苏。",
        logicEn: "[M0 Incremental Sync Logic Device]: M0 OS in extremely slow 'incremental sync' logic. Due to time lag (SUR1/M5 hedge), all 'common-sense M4' and current reality must undergo intense semantic rejection. Tuchē descends as 'price of rebirth'—time rift, body failing to match conscious recovery.",
        patch: {
            mechanics: "基础创伤协议 + [M0 OS = 极缓慢增量同步; SUR1/M5时差对冲; 常识M4 = 与当前现实强烈语义排斥]",
            mechanicsEn: "Base_TRAUMA + [M0_OS = Extremely_Slow_Incremental_Sync; SUR1/M5_Time_Lag_Hedge; Common-Sense_M4 = Intense_Semantic_Rejection_with_Current_Reality]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：多年昨迷后的若醒 + 萎缩的身体与已变的世界的冲突。文本：意识与现实发生强烈时差排斥的、缓慢重建的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Awakening_After_Years_in_Coma + Withered_Body_Clashing_with_Changed_World. Text: Consciousness_and_Reality_in_Intense_Time-Lag_Rejection_Slow_Rebuilding_Narration.",
            runtime: "IF (主体试图快速适应新世界) THEN (强制：语义排斥加剧，常识与现实冲突更深)。严禁M0的增量同步被快速完成。",
            runtimeEn: "IF (Subject_Attempts_Quick_Adaptation_to_New_World) THEN (Force: Semantic_Rejection_Intensifies_Common-Sense_Reality_Conflict_Deepens). FORBID_M0_Incremental_Sync_Being_Quickly_Completed."
        }
    }
];
