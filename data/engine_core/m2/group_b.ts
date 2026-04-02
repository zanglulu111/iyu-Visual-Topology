import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_B: LibraryItemDef[] = [
    {
        id: "cog_secret",
        name: "身世揭秘", nameEn: "Secret Origin",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现父母不是亲生，或者自己是领养/克隆的。",
        defEn: "Finding parents are not biological, or being adopted/cloned.",
        core: "起源的虚构。我是谁？我来自哪里？根基断裂。 | 实在界: 起源的空洞。",
        coreEn: "Fictionality of origins. Who am I? Where from? Root rupture. | The Real: Void of origin.",
        logic: "【起源能指反转器】：主体系逻辑中所有的'血缘（M4）相关权重'发生瞬间反转。叙事中对于家庭、过去、故乡的能指被强制标记为'虚假'，主体必须重构其 M1 生命周期。Tuchē以'起源的空洞'形式降临——我是谁？我来自哪里？根基本身是虚构的。",
        logicEn: "[Origin Signifier Inverter]: All 'kinship (M4) related weightings' undergo instant reversal. Signifiers for family, past, and hometown are forcibly marked 'fake'; subject must reconstruct M1 lifecycle. Tuchē descends as 'void of origin'—Who am I? Where from? The root itself is fiction.",
        patch: {
            mechanics: "基础创伤协议 + [M4血缘权重 = 瞬间反转; 家庭/过去/故乡能指 = 标记虚假; M1生命周期 = 强制重构]",
            mechanicsEn: "Base_TRAUMA + [M4_Kinship_Weight = Instant_Reversal; Family/Past/Hometown_Signifiers = Marked_Fake; M1_Lifecycle = Force_Reconstruct]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：被撕开的旧信封 + 不属于你的血型报告。文本：根基被抽空的、身份向虚无坠落的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Torn_Old_Envelope + Blood_Type_Report_Not_Yours. Text: Foundation_Hollowed_Identity_Falling_into_Void_Narration.",
            runtime: "IF (主体试图维持原有身份认同) THEN (强制：新的证据持续否定原有身份)。严禁已被标记为'虚假'的血缘能指恢复有效性。",
            runtimeEn: "IF (Subject_Attempts_Maintaining_Original_Identity) THEN (Force: New_Evidence_Continuously_Denies_Original_Identity). FORBID_Kinship_Signifiers_Marked_Fake_From_Restoring_Validity."
        }
    },
    {
        id: "cog_infidelity",
        name: "发现出轨", nameEn: "The Affair",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "目击伴侣与他人亲密，或者发现秘密手机。",
        defEn: "Witnessing partner's intimacy with another, or finding a secret phone.",
        core: "爱情神话的破灭。最亲密的人变成了最陌生的他者。 | 实在界: 关系的谎言。",
        coreEn: "Shattering the love myth. The closest person becomes a stranger. | The Real: Lie of relationship.",
        logic: "【爱欲客体降维器】：主体的 M3（爱欲客体）发生'降维坍塌'。叙事中原本被神化的客体必须被描述为'一团无意义的肉'或'背叛性的装置'，诱发主体产生强烈的 M7（解体冲动）。Tuchē以'爱情神话的破灭'形式降临——最亲密的人变成了最陌生的他者。",
        logicEn: "[Erotic Object Dimension-Collapse Device]: Subject's M3 (Erotic Object) undergoes 'dimensional collapse'. Previously deified object must be described as 'meaningless flesh' or 'treacherous apparatus', inducing intense M7 (Disintegration). Tuchē descends as 'shattering of love myth'—the closest becomes the most alien.",
        patch: {
            mechanics: "基础创伤协议 + [M3爱欲客体 = 降维坍塌; 神化客体 = 降格为无意义之肉; M7解体 = 强烈诱发]",
            mechanicsEn: "Base_TRAUMA + [M3_Erotic_Object = Dimensional_Collapse; Deified_Object = Downgraded_to_Meaningless_Flesh; M7_Disintegration = Intensely_Induced]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：秘密的通讯记录 + 曾经温暖的体温变成陌生人的热度。文本：爱情从内部爆炸的、神话崩碎碾成粉末的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Secret_Messages + Once_Warm_Body_Heat_Becoming_Stranger_Warmth. Text: Love_Exploding_from_Within_Myth_Crushed_to_Dust_Narration.",
            runtime: "IF (主体试图合理化伴侣行为) THEN (强制：新的背叛证据浮出水面)。严禁M3爱欲客体在本次遭遇周期内恢复神化地位。",
            runtimeEn: "IF (Subject_Attempts_Rationalizing_Partner_Behavior) THEN (Force: New_Betrayal_Evidence_Surfaces). FORBID_M3_Erotic_Object_Restoring_Deified_Status_in_Current_Cycle."
        }
    },
    {
        id: "cog_matrix_glitch",
        name: "现实故障", nameEn: "The Glitch",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "看到重复的场景（既视感），或者物理法则瞬间失效。",
        defEn: "Seeing repeat scenes (déjà vu) or physical laws failing instantly.",
        core: "世界是虚拟的？怀疑感官，怀疑现实的质地。 | 实在界: 模拟的破绽。",
        coreEn: "Virtual world? Doubting senses and the texture of reality. | The Real: Flaws in simulation.",
        logic: "【现实纹理渲染错误器】：空间的'纹理渲染逻辑'发生错误。文本描述中必须出现对'不可思议之景象'的直接白描记录，禁止使用任何比喻修辞（M4的中和作用），强制呈现纯粹的逻辑悖论。Tuchē以'模拟的破绽'形式降临——世界的底层代码暴露了缝隙。",
        logicEn: "[Reality Texture Rendering Error]: Error in spatial 'texture rendering logic'. Text must directly record 'extraordinary scenes', forbidding metaphorical neutralization (M4), forcing pure logical paradox. Tuchē descends as 'flaws in simulation'—the world's underlying fabric reveals its seams.",
        patch: {
            mechanics: "基础创伤协议 + [空间纹理 = 渲染错误; 修辞 = 禁止比喻中和; 呈现 = 纯逻辑悖论]",
            mechanicsEn: "Base_TRAUMA + [Spatial_Texture = Rendering_Error; Rhetoric = Forbid_Metaphor_Neutralization; Presentation = Pure_Logical_Paradox]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：重复出现的场景 + 背景中不该存在的裂缝。文本：以白描方式记录不可能之事，不作任何解释的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Repeating_Scenes + Cracks_That_Should_Not_Exist. Text: Plain_Description_of_Impossible_Things_Without_Explanation_Narration.",
            runtime: "IF (主体试图用理性解释异常) THEN (强制：新的更剧烈的现实故障出现)。严禁M4的比喻修辞对实在界景象进行任何形式的中和或合理化。",
            runtimeEn: "IF (Subject_Attempts_Rational_Explanation) THEN (Force: New_More_Violent_Reality_Glitch_Appears). FORBID_M4_Metaphor_Neutralizing_or_Rationalizing_Real_Phenomena."
        }
    },
    {
        id: "cog_amnesia",
        name: "失忆苏醒", nameEn: "Amnesia",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "醒来不知道自己是谁，手里拿着枪或满身是血。",
        defEn: "Waking without knowing who you are, holding a gun or covered in blood.",
        core: "能指链的断裂。没有过去，只有赤裸的现在。 | 实在界: 历史的空白。",
        coreEn: "Rupture of signifiers. No past, just naked present. | The Real: Blank history.",
        logic: "【记忆库清空器】：主体的 M1 记忆库被强行设为空白。所有的 M5 动作都必须处于'猜测状态'。主体叙事中的名字和背景必须被'待定标记'取代。Tuchē以'历史的空白'形式降临——没有过去，只有赤裸的、充满线索的现在。",
        logicEn: "[Memory Bank Wipe Device]: Subject's M1 memory forcibly blanked. All M5 actions must be 'speculative'. Name and background replaced by placeholders. Tuchē descends as 'blank history'—no past, just a naked, clue-filled present.",
        patch: {
            mechanics: "基础创伤协议 + [M1记忆库 = 强制清空; M5动作 = 猜测状态; 名字/背景 = 待定标记]",
            mechanicsEn: "Base_TRAUMA + [M1_Memory = Force_Blanked; M5_Action = Speculative_State; Name/Background = Placeholder_Tagged]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：手中不明来源的物件 + 镜中陌生的面孔。文本：能指链断裂的、在碎片中摸索身份的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Unknown_Object_in_Hand + Stranger_Face_in_Mirror. Text: Signifier_Chain_Broken_Groping_for_Identity_in_Fragments_Narration.",
            runtime: "IF (主体试图回忆过去) THEN (强制：回忆返回空白或矛盾的碎片)。严禁M1记忆库在本次遭遇周期内恢复连续性。",
            runtimeEn: "IF (Subject_Attempts_Recalling_Past) THEN (Force: Memory_Returns_Blank_or_Contradictory_Fragments). FORBID_M1_Memory_Restoring_Continuity_in_Current_Cycle."
        }
    },
    {
        id: "cog_betrayal",
        name: "盟友背叛", nameEn: "The Betrayal",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "最信任的伙伴在关键时刻背后捅刀。",
        defEn: "Most trusted partner stabs you in the back at a critical moment.",
        core: "信任的创伤。在这个世界上是绝对孤独的。 | 实在界: 他人的地狱。",
        coreEn: "Trauma of trust. Absolute solitude in the world. | The Real: Others are Hell.",
        logic: "【信任契约废除器】：作为'合作契约'的 M4 瞬间无效。叙事中主体的逻辑优先级被迫设为'绝对的自我防御'。主体不再生成对他人的信任，所有的交互都变成了'权力的博弈'。Tuchē以'他人的地狱'形式降临——在这个世界上是绝对孤独的。",
        logicEn: "[Trust Contract Annihilator]: M4 'cooperation contract' instantly voided. Narrative priority forcibly set to 'absolute self-defense'. Subject no longer generates trust; all interactions become 'power games'. Tuchē descends as 'Others are Hell'—absolute solitude in the world.",
        patch: {
            mechanics: "基础创伤协议 + [M4合作契约 = 瞬间废除; 逻辑优先级 = 绝对自我防御; 交互模式 = 权力博弈]",
            mechanicsEn: "Base_TRAUMA + [M4_Cooperation_Contract = Instantly_Voided; Logic_Priority = Absolute_Self_Defense; Interaction_Mode = Power_Game]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：背后的刀刃 + 最熟悉的笑容变成最恐怖的面具。文本：信任地基坍塌的、世界变成丛林的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Blade_Behind_the_Back + Familiar_Smile_Becoming_Terrifying_Mask. Text: Trust_Foundation_Collapsed_World_Becoming_Jungle_Narration.",
            runtime: "IF (主体试图重新信任他人) THEN (强制：新的信任对象再次背叛)。严禁M4合作契约在本次遭遇周期内恢复有效性。",
            runtimeEn: "IF (Subject_Attempts_Re-Trusting_Others) THEN (Force: New_Trust_Target_Betrays_Again). FORBID_M4_Cooperation_Contract_Restoring_Validity_in_Current_Cycle."
        }
    },
    {
        id: "cog_false_accusation",
        name: "被诬陷", nameEn: "Framed",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "在你的包里发现了不属于你的毒品或凶器。",
        defEn: "Finding drugs or weapons not yours in your bag.",
        core: "真相与证据的脱节。你是清白的，但世界认为你有罪。 | 实在界: 证据的暴政。",
        coreEn: "Decoupling truth from evidence. Innocent but world declares guilty. | The Real: Tyranny of evidence.",
        logic: "【罪恶剧本嵌套器】：主体的 M1 被强行嵌套进一个'罪恶的剧本'中。主体的所有 M5 正向证明其清白的努力都必须被 M4（体制/观众）解读为其认罪的征兆。Tuchē以'证据的暴政'形式降临——你是清白的，但世界认为你有罪。",
        logicEn: "[Criminal Script Nesting Device]: Subject's M1 forcibly nested within a 'criminal script'. All M5 efforts to prove innocence must be interpreted by M4 (System/Audience) as signs of guilt. Tuchē descends as 'tyranny of evidence'—you are innocent but the world declares guilty.",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 被嵌套进罪恶剧本; M5清白证明 = 被M4解读为认罪; 体制/观众 = 反向解码]",
            mechanicsEn: "Base_TRAUMA + [M1 = Nested_in_Criminal_Script; M5_Innocence_Proof = M4_Decodes_as_Confession; System/Audience = Reverse_Decoding]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：不属于你的物件 + 所有人同时转头看你的目光。文本：真相与表象彻底脱节的、漂白变成自证的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Object_Not_Yours + Everyone_Turning_to_Stare. Text: Truth_and_Evidence_Completely_Decoupled_Acquittal_Becoming_Self-Incrimination_Narration.",
            runtime: "IF (主体试图证明清白) THEN (强制：证明行为被解读为更强的认罪证据)。严禁主体通过M5行动洗脱嫌疑。",
            runtimeEn: "IF (Subject_Attempts_Proving_Innocence) THEN (Force: Proof_Decoded_as_Stronger_Confession_Evidence). FORBID_Subject_Clearing_Suspicion_via_M5_Actions."
        }
    },
    {
        id: "cog_letter",
        name: "神秘信件", nameEn: "The Letter",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "收到一封信，揭示了关于你过去的惊人秘密。",
        defEn: "Receiving a letter revealing shocking secrets from your past.",
        core: "压抑物的回归（Return of the Repressed）。过去没有死。 | 实在界: 文字的诅咒。",
        coreEn: "Return of the Repressed. The past isn't dead. | The Real: Curse of words.",
        logic: "【压抑物回归劫持器】：一个外来的能指（信件）劫持了主体的 M0 启动流。文本描写必须表现出'信息对主体的寄生性和污染性'，主体逻辑被迫转向解决这个'文字的黑洞'。Tuchē以'文字的诅咒'形式降临——压抑物回归，过去没有死。",
        logicEn: "[Repressed Return Hijacker]: An external signifier (letter) hijacks subject's M0 boot stream. Text must manifest 'information parasitism and contamination'; subject logic forced toward resolving this 'black hole of words'. Tuchē descends as 'curse of words'—Return of the Repressed, the past isn't dead.",
        patch: {
            mechanics: "基础创伤协议 + [外来能指 = 劫持M0启动流; 信息 = 寄生性/污染性; 主体逻辑 = 被迫转向文字黑洞]",
            mechanicsEn: "Base_TRAUMA + [External_Signifier = Hijacks_M0_Boot; Information = Parasitic/Contaminating; Subject_Logic = Forced_Toward_Word_Black_Hole]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：发黄的纸张 + 无法停止重读的强迫感。文本：过去的幽灵通过文字复活的、无法逎出的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Yellowed_Paper + Compulsion_to_Reread. Text: Ghost_of_Past_Resurrected_Through_Words_Inescapable_Narration.",
            runtime: "IF (主体试图销毁信件) THEN (强制：信件内容已永久寄生在主体意识中)。严禁主体通过任何手段消除信息的寄生性污染。",
            runtimeEn: "IF (Subject_Attempts_Destroying_Letter) THEN (Force: Letter_Content_Permanently_Parasitized_in_Subject_Consciousness). FORBID_Subject_Eliminating_Information_Parasitic_Contamination."
        }
    },
    {
        id: "cog_missing_person",
        name: "亲人失踪", nameEn: "Vanished",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "转身的瞬间，孩子或爱人凭空消失。",
        defEn: "Child or lover vanishing in the instant you turn around.",
        core: "丧失（Loss）。不仅是失去，而是“不知道去向”的悬置感。 | 实在界: 存在的缺席。",
        coreEn: "Loss. Not just losing, but the suspension of 'not knowing where'. | The Real: Absence of existence.",
        logic: "【位置黑洞生成器】：主体系逻辑中产生了一个无法缝合的'位置黑洞'。所有的 M5 寻找动作都必须伴随着一种'在空荡荡的空间中扑空'的描写逻辑，不断强调缺失。Tuchē以'存在的缺席'形式降临——不仅是失去，而是'不知道去向'的永久悬置感。",
        logicEn: "[Location Black Hole Generator]: A 'location black hole' emerges that cannot be sutured. All M5 search actions must be paired with 'missing the target in empty space', emphasizing lack. Tuchē descends as 'absence of existence'—not just losing, but the permanent suspension of 'not knowing where'.",
        patch: {
            mechanics: "基础创伤协议 + [位置 = 产生不可缝合黑洞; M5寻找 = 强制扑空; 叙事基调 = 持续强调缺失]",
            mechanicsEn: "Base_TRAUMA + [Location = Unsuturable_Black_Hole; M5_Search = Force_Miss; Narrative_Tone = Continuously_Emphasize_Lack]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：空荡的床铺 + 转身后无人的空气。文本：在缺席中不断寻找的、永远找不到的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Empty_Bedding + Air_Where_No_One_Stands_After_Turning. Text: Endlessly_Searching_in_Absence_Never_Finding_Narration.",
            runtime: "IF (主体试图定位失踪者) THEN (强制：线索指向更深的空白)。严禁失踪者的位置被确定或下落被知晓。",
            runtimeEn: "IF (Subject_Attempts_Locating_Missing_Person) THEN (Force: Clues_Lead_to_Deeper_Void). FORBID_Missing_Person_Location_Being_Determined_or_Fate_Being_Known."
        }
    },
    {
        id: "cog_mandela",
        name: "曼德拉效应", nameEn: "Mandela Effect",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现所有人的记忆都和你不一样，历史被篡改了。",
        defEn: "Finding everyone's memory differs from yours; history rewritten.",
        core: "集体的疯狂 vs 个体的清醒。是我疯了还是世界疯了？ | 实在界: 记忆的虚构。",
        coreEn: "Collective madness vs individual sanity. Me or world crazy? | The Real: Fiction of memory.",
        logic: "【集体记忆冲突器】：主体的 M4 锚点（常识）与集体的 M4 发生剧烈冲突。文本中必须表现出这种'孤独的真相'如何使得所有的语际沟通（M4 链路）在逻辑上断裂。Tuchē以'记忆的虚构'形式降临——是我疯了还是世界疯了？",
        logicEn: "[Collective Memory Conflict Device]: Subject's M4 anchor (common sense) conflicts violently with the collective's M4. Text must show how this 'lonely truth' logically breaks all inter-linguistic communications (M4 links). Tuchē descends as 'fiction of memory'—Am I crazy or is the world crazy?",
        patch: {
            mechanics: "基础创伤协议 + [M4个体锚点 = 与集体M4剧烈冲突; M4沟通链路 = 逻辑断裂; 主体 = 被迫进入孤独真相]",
            mechanicsEn: "Base_TRAUMA + [M4_Individual_Anchor = Violent_Conflict_with_Collective_M4; M4_Communication_Links = Logically_Broken; Subject = Forced_into_Lonely_Truth]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：所有人都在否认你记得的事实 + 篡改过的书页。文本：个体和集体之间真相裂缝的、孤独地坚持却无法证明的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Everyone_Denying_Facts_You_Remember + Tampered_Pages. Text: Truth_Rift_Between_Individual_and_Collective_Lonely_Insistence_Without_Proof_Narration.",
            runtime: "IF (主体试图证明自己记忆的正确性) THEN (强制：更多的集体证据否定主体记忆)。严禁主体的记忆被集体承认为正确。",
            runtimeEn: "IF (Subject_Attempts_Proving_Memory_Correct) THEN (Force: More_Collective_Evidence_Denies_Subject_Memory). FORBID_Subject_Memory_Being_Acknowledged_Correct_by_Collective."
        }
    },
    {
        id: "cog_doppelganger",
        name: "双重身", nameEn: "Doppelgänger",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "在街角看到了另一个自己。",
        defEn: "Seeing another self at the street corner.",
        core: "独特性的丧失。恐怖谷效应。如果他在那，那我是谁？ | 实在界: 自我的分裂。",
        coreEn: "Loss of uniqueness. Uncanny valley. If he's there, who am I? | The Real: Splitting of the self.",
        logic: "【身份排他性坍塌器】：主体被定义为'可替代的复本'。其唯一地位（M1 的排他性）由于另一个自我的视觉出现而坍塌。强制执行一种'身份吞噬'逻辑——两者的行动趋向于同步。Tuchē以'自我的分裂'形式降临——如果他在那，那我是谁？",
        logicEn: "[Identity Exclusivity Collapse Device]: Subject defined as 'replaceable copy'. Unique status (M1 exclusivity) collapses due to the other self's visual appearance. Enforced 'identity devouring' logic—actions tend to sync. Tuchē descends as 'splitting of the self'—if he's there, who am I?",
        patch: {
            mechanics: "基础创伤协议 + [M1排他性 = 坍塌; 主体 = 可替代复本; 行动逻辑 = 身份吞噬/同步]",
            mechanicsEn: "Base_TRAUMA + [M1_Exclusivity = Collapsed; Subject = Replaceable_Copy; Action_Logic = Identity_Devouring/Sync]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：镜像般的另一个自己 + 恐怖谷效应中的细微差异。文本：独特性被剥夺的、两个自我互相吞噬的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Mirror-Like_Other_Self + Subtle_Differences_in_Uncanny_Valley. Text: Uniqueness_Stripped_Two_Selves_Devouring_Each_Other_Narration.",
            runtime: "IF (主体试图证明自己是'真品') THEN (强制：复体同时做出相同的证明动作)。严禁主体的M1排他性地位被确认。",
            runtimeEn: "IF (Subject_Attempts_Proving_Authenticity) THEN (Force: Doppelgänger_Simultaneously_Makes_Same_Proof_Gesture). FORBID_Subject_M1_Exclusivity_Being_Confirmed."
        }
    },
    {
        id: "cog_prophecy",
        name: "死亡预言", nameEn: "The Prophecy",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "算命师、AI或神秘人准确预言了你的死亡时间。",
        defEn: "Fortune-teller, AI, or stranger accurately predicting your death date.",
        core: "宿命论的重压。未来的确定性杀死了现在的自由。 | 实在界: 命运的锁定。",
        coreEn: "Weight of fatalism. Future certainty kills present freedom. | The Real: Locking of destiny.",
        logic: "【未来时序锁死器】：主体的'未来时序（M1）'被锁死。文本逻辑转变为一种'通往终点的倒计时'描写，所有的 M5 动作都必须被赋予一种'无力反抗宿命'的讽刺色调。Tuchē以'命运的锁定'形式降临——未来的确定性杀死了现在的自由。",
        logicEn: "[Future Timeline Lock Device]: Subject's 'future timing (M1)' is locked. Text logic turns into a 'countdown to the end'; every M5 action must carry an ironic tone of 'impotent resistance to fate'. Tuchē descends as 'locking of destiny'—future certainty kills present freedom.",
        patch: {
            mechanics: "基础创伤协议 + [未来时序 = 锁死; 文本逻辑 = 倒计时描写; M5动作 = 宿命讽刺色调]",
            mechanicsEn: "Base_TRAUMA + [Future_Timeline = Locked; Text_Logic = Countdown_Description; M5_Action = Fatalist_Ironic_Tone]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：不断逼近的日期 + 每一个动作都像是最后一次。文本：在确定的终点前一切努力都变得讽刺的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Approaching_Date + Every_Action_Feels_Like_the_Last. Text: All_Efforts_Becoming_Ironic_Before_Certain_End_Narration.",
            runtime: "IF (主体试图改变命运) THEN (强制：改变行为本身成为实现预言的环节)。严禁预言的时间线被打破或延迟。",
            runtimeEn: "IF (Subject_Attempts_Changing_Fate) THEN (Force: Change_Attempt_Becomes_Link_in_Fulfilling_Prophecy). FORBID_Prophecy_Timeline_Being_Broken_or_Delayed."
        }
    },
    {
        id: "cog_voice",
        name: "听见幻听", nameEn: "The Voice",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "脑海里出现不属于自己的声音，下达指令。",
        defEn: "Voices in your head, not your own, issuing commands.",
        core: "精神分裂的开端。主体被寄生，主权丧失。 | 实在界: 内部的他者。",
        coreEn: "Beginning of schizophrenia. Subject parasitized; loss of sovereignty. | The Real: Internal Other.",
        logic: "【内部他者溢出器】：主体的 M0 OS 受到外部能指流的'内部溢出'。行动 M5 处于'主体的意志'与'外来意志'的随机博弈中，其对话台词必须包含大量的自言自语。Tuchē以'内部的他者'形式降临——主体被寄生，主权丧失。",
        logicEn: "[Internal Other Overflow Device]: Subject's M0 OS suffers 'internal overflow' from external signifier streams. M5 actions trapped in random game between 'Subject Will' and 'Foreign Will'; dialogue must include extensive soliloquies. Tuchē descends as 'Internal Other'—subject parasitized, sovereignty lost.",
        patch: {
            mechanics: "基础创伤协议 + [M0 OS = 外部能指流内部溢出; M5行动 = 主体意志vs外来意志博弈; 对话 = 强制自言自语]",
            mechanicsEn: "Base_TRAUMA + [M0_OS = External_Signifier_Internal_Overflow; M5_Action = Subject_Will_vs_Foreign_Will_Game; Dialogue = Forced_Soliloquy]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：脑海中不属于自己的声音 + 指令与自我意志的拉扯。文本：主权被寄生的、内部他者争夺控制权的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Voice_Not_Yours_in_Head + Command_vs_Self-Will_Tug. Text: Sovereignty_Parasitized_Internal_Other_Contesting_Control_Narration.",
            runtime: "IF (主体试图忽略幻听) THEN (强制：声音变得更大更具强制性)。严禁主体的M0主权恢复完整控制。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Voice) THEN (Force: Voice_Becomes_Louder_More_Commanding). FORBID_Subject_M0_Sovereignty_Restoring_Full_Control."
        }
    },
    {
        id: "cog_conspiracy",
        name: "发现阴谋", nameEn: "Conspiracy",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "无意中看到了不该看的文件或会议。",
        defEn: "Accidentally seeing documents or meetings not for your eyes.",
        core: "世界的后台被揭开。日常生活的表面下是巨大的谎言。 | 实在界: 结构的恶意。",
        coreEn: "World's backstage revealed. Huge lies beneath daily surface. | The Real: Structural malice.",
        logic: "【环境透视化装置】：主体的 M7（叙事视野）突然具有了'多重语义'（透视性）。所有的日常生活 M5 都必须附带一种'对背后深意的过度解析（妄想症）'，破坏正常的叙事推进。Tuchē以'结构的恶意'形式降临——世界的后台被揭开，日常生活的表面下是巨大的谎言。",
        logicEn: "[Environment Perspectival Device]: Subject's M7 (Narrative Vision) suddenly gains 'multiple semantics' (perspective). All daily M5 must involve 'over-analysis of hidden meanings (paranoia)', disrupting normal narrative progress. Tuchē descends as 'structural malice'—world's backstage revealed, huge lies beneath daily surface.",
        patch: {
            mechanics: "基础创伤协议 + [M7叙事视野 = 多重语义/透视; M5日常行动 = 强制附带妄想解析; 叙事推进 = 被破坏]",
            mechanicsEn: "Base_TRAUMA + [M7_Narrative_Vision = Multiple_Semantics/Perspective; M5_Daily_Action = Forced_Paranoid_Analysis; Narrative_Progress = Disrupted]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：不该看到的文件 + 每个日常场景都充满暗示。文本：常态表面下阴谋流动的、万事都是线索的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Documents_Not_for_Your_Eyes + Every_Scene_Filled_with_Hints. Text: Conspiracy_Flowing_Beneath_Normality_Everything_Is_a_Clue_Narration.",
            runtime: "IF (主体试图忽略阴谋) THEN (强制：更多的证据自动出现强迫主体关注)。严禁M5日常行动脱离妄想解析逻辑。",
            runtimeEn: "IF (Subject_Attempts_Ignoring_Conspiracy) THEN (Force: More_Evidence_Auto-Surfaces_Demanding_Attention). FORBID_M5_Daily_Actions_Escaping_Paranoid_Analysis_Logic."
        }
    },
    {
        id: "cog_wrong_reality",
        name: "误入异界", nameEn: "Wrong Reality",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "回家发现家具位置反了，或者家人不认识自己。",
        defEn: "Home furniture reversed, or family doesn't recognize you.",
        core: "平行宇宙。熟悉的陌生感 (The Uncanny)。 | 实在界: 家园的异化。",
        coreEn: "Parallel universe. The Uncanny. Alienation of home. | The Real: Alienation of Homeland.",
        logic: "【家园异化装置】：对'最熟悉处（M4 的基石）'的异化。强制使用一种描述'错位'的文本逻辑（例如镜像描写），主体在这种环境下由于无法建立'认同感'而持续丧失生命力。Tuchē以'家园的异化'形式降临——熟悉的陌生感 (The Uncanny)。",
        logicEn: "[Homeland Alienation Device]: Alienating the 'most familiar (pillar of M4)'. Forcibly use text logic describing 'displacement' (e.g., mirror descriptions); subject loses vitality due to inability to establish 'identification'. Tuchē descends as 'alienation of homeland'—The Uncanny.",
        patch: {
            mechanics: "基础创伤协议 + [M4基石 = 异化; 文本逻辑 = 错位/镜像描写; 主体 = 无法建立认同感/生命力丧失]",
            mechanicsEn: "Base_TRAUMA + [M4_Pillar = Alienated; Text_Logic = Displacement/Mirror_Description; Subject = Cannot_Establish_Identification/Vitality_Lost]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：左右反转的家具 + 不认识你的家人。文本：最熟悉的地方变成最陌生的地方的、聪明感崩溃的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Reversed_Furniture + Family_Not_Recognizing_You. Text: Most_Familiar_Place_Becoming_Most_Alien_Uncanny_Collapse_Narration.",
            runtime: "IF (主体试图确认环境的熟悉性) THEN (强制：更多的细节差异被发现)。严禁M4基石的熟悉感被恢复。",
            runtimeEn: "IF (Subject_Attempts_Confirming_Environment_Familiarity) THEN (Force: More_Detail_Discrepancies_Discovered). FORBID_M4_Pillar_Familiarity_Being_Restored."
        }
    },
    {
        id: "cog_gaslighting",
        name: "煤气灯操纵", nameEn: "Gaslighting",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "被周围人不断告知你的记忆是错的，你是疯子。",
        defEn: "Constantly told your memory is wrong, you are crazy.",
        core: "认知抹杀。对理性的自信被系统性摧毁。 | 实在界: 真理的动摇。",
        coreEn: "Cognitive erasure. Confidence in rationality systematically destroyed. | The Real: Shaking of truth.",
        logic: "【记忆权标谬误器】：主体系逻辑中所有的'记忆权标'在对比集（M4）中均被返回'谬误'。主体的任何逻辑输出（M1 -> M5）都必须在文本中被他者的'关切/否定'而中和掉。Tuchē以'真理的动摇'形式降临——对理性的自信被系统性摧毁。",
        logicEn: "[Memory Token Error Device]: All 'memory tokens' in system logic return 'error' in comparison sets (M4). Any subject logical output (M1 -> M5) must be neutralized in text by Others' 'concern/denial'. Tuchē descends as 'shaking of truth'—confidence in rationality systematically destroyed.",
        patch: {
            mechanics: "基础创伤协议 + [记忆权标 = 在M4对比集中返回谬误; M1->M5逻辑输出 = 被他者关切/否定中和; 理性自信 = 系统性摧毁]",
            mechanicsEn: "Base_TRAUMA + [Memory_Tokens = Return_Error_in_M4; M1->M5_Output = Neutralized_by_Others_Concern/Denial; Rational_Confidence = Systematically_Destroyed]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：所有人温柔地否定你 + 不断被告知'你记错了'。文本：认知地基被一砖一砖拆除的、自我怀疑吞噬一切的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Everyone_Gently_Denying_You + Constantly_Told_You_Misremember. Text: Cognitive_Foundation_Dismantled_Brick_by_Brick_Self-Doubt_Consuming_All_Narration.",
            runtime: "IF (主体试图坚持自己的记忆) THEN (强制：更多的他者加入否定队列)。严禁主体的记忆权标在M4对比集中被确认为正确。",
            runtimeEn: "IF (Subject_Insists_on_Own_Memory) THEN (Force: More_Others_Join_Denial_Queue). FORBID_Subject_Memory_Tokens_Being_Confirmed_Correct_in_M4."
        }
    },
    {
        id: "cog_time_loop",
        name: "时间循环", nameEn: "Time Loop",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "醒来发现日期重置，同一天重复开始。",
        defEn: "Waking to find the date reset, the same day repeating.",
        core: "因果律失效。没有未来，只有永恒的现在。 | 实在界: 时间的监狱。",
        coreEn: "Causality failure. No future, only eternal present. | The Real: Prison of time.",
        logic: "【因果律拒绝器】：叙事逻辑强制性地拒绝 M6（结果/反馈）。主体所有的 M5 努力在次日的'清零逻辑'面前表现出极端虚无性。Tuchē以'时间的监狱'形式降临——没有未来，只有永恒的现在，不可逃脱的重复。",
        logicEn: "[Causality Rejection Device]: Narrative logic forcibly rejects M6 (Result/Feedback). All M5 efforts exhibit extreme nihilism before next day's 'reset logic'. Tuchē descends as 'prison of time'—no future, only eternal present, inescapable repetition.",
        patch: {
            mechanics: "基础创伤协议 + [M6结果/反馈 = 强制拒绝; M5努力 = 次日清零/极端虚无; 时间 = 永恒循环]",
            mechanicsEn: "Base_TRAUMA + [M6_Result/Feedback = Forcibly_Rejected; M5_Effort = Next_Day_Reset/Extreme_Nihilism; Time = Eternal_Loop]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：重置的日期 + 相同场景的微妙重复。文本：一切努力在清零面前化为虚无的、西西弗斯式的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Reset_Date + Subtle_Repetition_of_Same_Scene. Text: All_Efforts_Nullified_Before_Reset_Sisyphean_Narration.",
            runtime: "IF (主体试图打破循环) THEN (强制：打破行为本身成为循环的一部分)。严禁M6结果在循环周期内产生任何持久性变化。",
            runtimeEn: "IF (Subject_Attempts_Breaking_Loop) THEN (Force: Breaking_Act_Becomes_Part_of_Loop). FORBID_M6_Results_Producing_Lasting_Change_Within_Cycle."
        }
    },
    {
        id: "cog_imposter_syndrome",
        name: "冒充者恐惧", nameEn: "Imposter",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "突然确信自己是一个骗子，所有成就都是运气。",
        defEn: "Suddenly convinced you're a fraud; all achievements lucky.",
        core: "自我价值的崩塌。害怕被大他者拆穿的焦虑。 | 实在界: 能力的虚构。",
        coreEn: "Self-worth collapse. Anxiety of being exposed by the Other. | The Real: Fictionality of ability.",
        logic: "【虚空自我认同器】：主体的 M1 产生'虚空自我认同'。主体的动作 M5 必须被赋予一种'在冰上行走'的小心翼翼感，逻辑核心在于这种由于'缺乏根基'导致的极速跌落感。Tuchē以'能力的虚构'形式降临——害怕被大他者拆穿的焦虑。",
        logicEn: "[Void Self-Identification Device]: Subject's M1 produces 'empty self-identification'. M5 actions must bear 'walking on ice' caution; logic centers on rapid falling sensation due to 'lack of ground'. Tuchē descends as 'fictionality of ability'—anxiety of being exposed by the Other.",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 虚空自我认同; M5动作 = 在冰上行走/小心翼翼; 逻辑核心 = 缺乏根基的极速跌落]",
            mechanicsEn: "Base_TRAUMA + [M1 = Void_Self-Identification; M5_Action = Walking_on_Ice/Extreme_Caution; Logic_Core = Rapid_Fall_from_Lack_of_Ground]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：每一个成就背后的空虚感 + 随时被拆穿的恐惧。文本：虚假外壳下随时崩塌的、冰面行走般的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Emptiness_Behind_Every_Achievement + Fear_of_Exposure_at_Any_Moment. Text: False_Shell_About_to_Collapse_Walking_on_Ice_Narration.",
            runtime: "IF (主体获得新的成就或认可) THEN (强制：空虚感与跌落恐惧同步加剧)。严禁M1的虚空自我认同被真实的成就感填充。",
            runtimeEn: "IF (Subject_Gains_Achievement_or_Recognition) THEN (Force: Emptiness_and_Fall_Fear_Intensify_Simultaneously). FORBID_M1_Void_Identity_Being_Filled_by_Real_Achievement."
        }
    },
    {
        id: "cog_language_loss",
        name: "失语症", nameEn: "Aphasia",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "突然听不懂别人的语言，或者无法说话。",
        defEn: "Suddenly can't understand others' language or can't speak.",
        core: "符号界的驱逐。无法进入意义的交换系统。 | 实在界: 语言的断裂。",
        coreEn: "Expulsion from the Symbolic. Cannot enter meaning exchange. | The Real: Rupture of language.",
        logic: "【符号界驱逐器】：禁止主体的台词逻辑（SUR5 离线）。所有的叙事转为一种纯粹的、无声的物理动作描写，强调符号（语言）崩溃后留下的那种具有'原始暴力感'的静默。Tuchē以'语言的断裂'形式降临——无法进入意义的交换系统，被符号界驱逐。",
        logicEn: "[Symbolic Expulsion Device]: Disable subject dialogue logic (SUR5 offline). All narrative shifts to pure, silent physical action descriptions, emphasizing 'primordially violent' silence after collapse of symbols (language). Tuchē descends as 'rupture of language'—cannot enter meaning exchange, expelled from the Symbolic.",
        patch: {
            mechanics: "基础创伤协议 + [SUR5台词逻辑 = 离线; 叙事模式 = 纯物理动作/无声描写; 符号系统 = 崩溃/原始暴力静默]",
            mechanicsEn: "Base_TRAUMA + [SUR5_Dialogue = Offline; Narrative_Mode = Pure_Physical_Action/Silent; Symbol_System = Collapsed/Primordial_Violent_Silence]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：无法发出声音的嘴 + 听不懂的语言变成纯粹噪音。文本：语言崩溃后的纯动作、纯静默、纯肉体的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Mouth_That_Cannot_Speak + Language_Becoming_Pure_Noise. Text: Post-Language_Collapse_Pure_Action_Pure_Silence_Pure_Body_Narration.",
            runtime: "IF (主体试图用语言沟通) THEN (强制：语言输出为乱码或沉默)。严禁SUR5台词逻辑在本次遭遇周期内恢复上线。",
            runtimeEn: "IF (Subject_Attempts_Verbal_Communication) THEN (Force: Language_Output_Garbled_or_Silent). FORBID_SUR5_Dialogue_Logic_Restoring_Online_in_Current_Cycle."
        }
    },
    {
        id: "cog_idol_fall",
        name: "偶像崩塌", nameEn: "Idol Fall",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "崇拜的导师/父亲被揭露是罪犯或伪君子。",
        defEn: "Worshipped mentor/father exposed as a criminal or fraud.",
        core: "理想我（Ideal Ego）的破碎。精神支柱的断裂。 | 实在界: 父亲的堕落。",
        coreEn: "Shattering of Ideal Ego. Rupture of spiritual pillar. | The Real: Fall of the Father.",
        logic: "【理想化镜像粉碎器】：作为'理想化镜像'的 M4 遭到物理粉碎。主体的 M1 必须通过对该偶像的'逆向亵渎'或'剧烈模仿'来尝试填补那个原本作为精神支柱的空洞。Tuchē以'父亲的堕落'形式降临——理想我（Ideal Ego）破碎，精神支柱断裂。",
        logicEn: "[Idealized Mirror Shatter Device]: Physical shattering of M4 as 'idealized mirror'. Subject's M1 must attempt to fill the spiritual pillar void through 'reverse desecration' or 'intense imitation' of the idol. Tuchē descends as 'Fall of the Father'—Ideal Ego shattered, spiritual pillar ruptured.",
        patch: {
            mechanics: "基础创伤协议 + [M4理想化镜像 = 物理粉碎; M1 = 逆向亵渎或剧烈模仿填补空洞; 精神支柱 = 断裂]",
            mechanicsEn: "Base_TRAUMA + [M4_Idealized_Mirror = Physically_Shattered; M1 = Reverse_Desecration_or_Intense_Imitation_Filling_Void; Spiritual_Pillar = Ruptured]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：崇拜对象的真面目 + 从神坛跌落的碎片。文本：信仰支柱坍塌的、在亵渎与模仿之间摇摆的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: True_Face_of_Idol + Fragments_Falling_from_Pedestal. Text: Faith_Pillar_Collapsed_Oscillating_Between_Desecration_and_Imitation_Narration.",
            runtime: "IF (主体试图维持偶像的理想化形象) THEN (强制：更多的罪行证据暴露)。严禁M4的理想化镜像在本次遭遇周期内被修复。",
            runtimeEn: "IF (Subject_Attempts_Maintaining_Idol_Image) THEN (Force: More_Criminal_Evidence_Exposed). FORBID_M4_Idealized_Mirror_Being_Repaired_in_Current_Cycle."
        }
    },
    {
        id: "cog_murder_witness",
        name: "目击谋杀", nameEn: "The Witness",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "透过窗户或门缝，看到了凶杀现场。",
        defEn: "Seeing a murder through a window or door crack.",
        core: "纯真的丧失。被迫卷入暴力的因果链条。 | 实在界: 罪恶的注视。",
        coreEn: "Loss of innocence. Forced into the causality chain of violence. | The Real: Gaze of evil.",
        logic: "【凝视创伤对接器】：视线（Gaze）的创伤逻辑。主体在 M2 中的'看见'导致了其 M1 与'暴力真实界面'的对接，被迫取消所有'日常生活'的平静逻辑权重。Tuchē以'罪恶的注视'形式降临——纯真丧失，被迫卷入暴力的因果链条。",
        logicEn: "[Gaze Trauma Interface Device]: Traumatic logic of the Gaze. The 'seeing' in M2 connects M1 with the 'inter-face of violent Real', forcing cancellation of all 'daily life' peaceful logic weightings. Tuchē descends as 'gaze of evil'—loss of innocence, forced into the causality chain of violence.",
        patch: {
            mechanics: "基础创伤协议 + [M2视线 = 创伤性看见; M1 = 与暴力真实界面对接; 日常生活逻辑 = 平静权重取消]",
            mechanicsEn: "Base_TRAUMA + [M2_Gaze = Traumatic_Seeing; M1 = Interface_with_Violent_Real; Daily_Life_Logic = Peaceful_Weighting_Cancelled]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：窗户或门缝中的暴力场景 + 无法从视网膜上擦除的画面。文本：目击之后一切日常都被暴力污染的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Violence_Through_Window_or_Crack + Image_Impossible_to_Erase_from_Retina. Text: All_Normalcy_Contaminated_by_Violence_After_Witnessing_Narration.",
            runtime: "IF (主体试图忘记目击场景) THEN (强制：画面以闪回形式反复入侵)。严禁日常生活的平静逻辑权重被恢复。",
            runtimeEn: "IF (Subject_Attempts_Forgetting_Witnessed_Scene) THEN (Force: Images_Flashback_Repeatedly_Invade). FORBID_Daily_Life_Peaceful_Logic_Weighting_Being_Restored."
        }
    },
    {
        id: "cog_forbidden_desire",
        name: "禁忌觉醒", nameEn: "Taboo",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "意识到自己爱上了不该爱的人（乱伦/仇人/同性）。",
        defEn: "Realizing you love someone taboo (incest/enemy/same-sex).",
        core: "欲望与律法的冲突。内在的冲动对抗外在的规则。 | 实在界: 欲望的越界。",
        coreEn: "Conflict of desire and Law. Inner impulse vs outer rules. | The Real: Transgression of desire.",
        logic: "【原乐违规扩张器】：主体系逻辑中'原乐（Jouissance）'冲出 M4 进行违规扩张。所有的 M5 动作都必须包含一种'对律法的挑衅与恐惧'的共振描写，产生剧烈的排异反应逻辑。Tuchē以'欲望的越界'形式降临——内在的冲动对抗外在的规则。",
        logicEn: "[Jouissance Illegal Expansion Device]: Jouissance bursts from M4 for illegal expansion in logic. All M5 actions must include resonant description of 'provocation and fear of the Law', generating intense rejection logic. Tuchē descends as 'transgression of desire'—inner impulse vs outer rules.",
        patch: {
            mechanics: "基础创伤协议 + [原乐 = 冲出M4违规扩张; M5动作 = 包含律法挑衅与恐惧共振; 反应逻辑 = 剧烈排异]",
            mechanicsEn: "Base_TRAUMA + [Jouissance = Bursts_M4_Illegal_Expansion; M5_Action = Law_Provocation_and_Fear_Resonance; Reaction_Logic = Intense_Rejection]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：不可言说的欲望 + 律法的阴影与诱惑的光。文本：在禁忌边缘颤抖的、欲望与恐惧共振的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Unspeakable_Desire + Shadow_of_Law_and_Light_of_Temptation. Text: Trembling_at_Edge_of_Taboo_Desire_and_Fear_Resonating_Narration.",
            runtime: "IF (主体试图压制禁忌欲望) THEN (强制：欲望以更扭曲的形式回归)。严禁原乐被M4律法成功压制回符号秩序内。",
            runtimeEn: "IF (Subject_Attempts_Suppressing_Taboo_Desire) THEN (Force: Desire_Returns_in_More_Distorted_Form). FORBID_Jouissance_Being_Successfully_Repressed_Back_into_Symbolic_Order_by_M4."
        }
    },
    {
        id: "cog_fake_world",
        name: "楚门的世界", nameEn: "Truman Show",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现天空是画出来的，或者周围人是演员。",
        defEn: "Finding the sky is painted, or people are actors.",
        core: "被监视的客体。生活是一场巨大的表演。 | 实在界: 存在的虚假。",
        coreEn: "Monitored object. Life as a grand performance. | The Real: Falsity of existence.",
        logic: "【空间舞台化装置】：空间的'舞台化'逻辑。所有的背景元素（SUR2 场景元素）被标记为'道具'。主体的 M5 不再是对现实的改变，而变成了对这种'虚构墙壁'的触碰与挑战。Tuchē以'存在的虚假'形式降临——生活是一场巨大的表演，主体是被监视的客体。",
        logicEn: "[Spatial Staging Device]: Spatial 'staging' logic. All background elements (SUR2) marked as 'props'. M5 no longer about changing reality but touching and challenging 'fictional walls'. Tuchē descends as 'falsity of existence'—life as grand performance, subject as monitored object.",
        patch: {
            mechanics: "基础创伤协议 + [SUR2场景元素 = 全部标记为道具; M5 = 从改变现实转为触碰虚构墙壁; 主体 = 被监视的客体]",
            mechanicsEn: "Base_TRAUMA + [SUR2_Background = All_Marked_as_Props; M5 = From_Changing_Reality_to_Touching_Fictional_Walls; Subject = Monitored_Object]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：画出来的天空 + 表演般的周围人群。文本：一切都是布景的、存在本身是谎言的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Painted_Sky + Actor-Like_Surrounding_Crowd. Text: Everything_Is_Set_Design_Existence_Itself_Is_a_Lie_Narration.",
            runtime: "IF (主体试图触碰'虚构墙壁') THEN (强制：墙壁背后是更深层的虚构)。严禁M5行动触及任何'真实'层面。",
            runtimeEn: "IF (Subject_Attempts_Touching_Fictional_Walls) THEN (Force: Deeper_Fiction_Behind_the_Wall). FORBID_M5_Action_Reaching_Any_Real_Layer."
        }
    },
    {
        id: "cog_diary_read",
        name: "被读日记", nameEn: "Exposed",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "发现有人读了你最私密的日记。",
        defEn: "Finding someone read your most private diary.",
        core: "内心世界的强行曝光。精神上的强奸。 | 实在界: 隐私的死亡。",
        coreEn: "Forced exposure of inner world. Psychic violation. | The Real: Death of privacy.",
        logic: "【M0堡垒泄露器】：主体的 M0（最后堡垒）由于象征（文字）的泄露而失阈。主体的所有叙事内部独白在逻辑上必须由于'羞耻感'而发生扭曲或变得难以理解。Tuchē以'隐私的死亡'形式降临——内心世界的强行曝光，精神上的强奸。",
        logicEn: "[M0 Fortress Breach Device]: Subject's M0 (last fortress) loses threshold due to signifier (text) leak. All internal narrative monologues must logically distort or become unintelligible due to 'shame'. Tuchē descends as 'death of privacy'—forced exposure of inner world, psychic violation.",
        patch: {
            mechanics: "基础创伤协议 + [M0最后堡垒 = 因文字泄露失阈; 内部独白 = 因羞耻感扭曲/难以理解; 隐私 = 死亡]",
            mechanicsEn: "Base_TRAUMA + [M0_Last_Fortress = Threshold_Lost_via_Text_Leak; Internal_Monologue = Distorted/Unintelligible_by_Shame; Privacy = Dead]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：被翻开的日记本 + 他人眼中的窥视与审判。文本：最私密的内核被暴露的、羞耻感吞噬思维的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Opened_Diary + Voyeuristic_Judgement_in_Others_Eyes. Text: Most_Private_Core_Exposed_Shame_Consuming_Thought_Narration.",
            runtime: "IF (主体试图重建内心隐私) THEN (强制：已泄露的内容被更多人知晓)。严禁M0堡垒的阈值在本次遭遇周期内被修复。",
            runtimeEn: "IF (Subject_Attempts_Rebuilding_Inner_Privacy) THEN (Force: Leaked_Content_Known_by_More_People). FORBID_M0_Fortress_Threshold_Being_Repaired_in_Current_Cycle."
        }
    },
    {
        id: "cog_sleepwalking",
        name: "梦游行凶", nameEn: "Sleepwalking",
        group: "B. 认知的裂痕", groupEn: "Cognitive",
        def: "醒来发现手上拿着刀，但毫无记忆。",
        defEn: "Waking with a knife but no memory.",
        core: "潜意识的接管。我身体里的那个“它”做了什么？ | 实在界: 主体的缺席。",
        coreEn: "Subconscious takeover. What did the 'It' in me do? | The Real: Absence of Subject.",
        logic: "【身体主权空白器】：主体的 M1 被划分为'清醒时刻'与'睡眠时刻'的回避冲突。叙事重点在于这种'身体主权的不可知空白'。主体在逻辑上的无辜感与其结果的罪恶感的割裂描写。Tuchē以'主体的缺席'形式降临——潜意识接管，'它'做了什么？",
        logicEn: "[Bodily Sovereignty Void Device]: Subject's M1 split into 'Waking Moment' and 'Sleep Moment' avoidance conflict. Focus on the 'unknowable void of bodily sovereignty'. Divide between logical innocence and resulting guilt. Tuchē descends as 'absence of subject'—subconscious takeover, what did 'It' do?",
        patch: {
            mechanics: "基础创伤协议 + [M1 = 清醒/睡眠时刻回避冲突; 叙事重点 = 身体主权不可知空白; 逻辑 = 无辜感vs罪恶感割裂]",
            mechanicsEn: "Base_TRAUMA + [M1 = Waking/Sleep_Moment_Avoidance_Conflict; Narrative_Focus = Unknowable_Void_of_Bodily_Sovereignty; Logic = Innocence_vs_Guilt_Split]",
            aesthetic: "[GENRE_ADAPTIVE] 聚焦：手中不明来源的凶器 + 身上不属于自己的伤痕或血迹。文本：对空白时间里'它'做了什么的恐惧的叙述。",
            aestheticEn: "[GENRE_ADAPTIVE] Focus: Weapon_of_Unknown_Origin_in_Hand + Wounds_or_Blood_Not_Yours. Text: Fear_of_What_It_Did_During_Blank_Time_Narration.",
            runtime: "IF (主体试图回忆空白期) THEN (强制：记忆返回更恐怖的碎片暗示)。严禁身体主权的空白期被完整还原。",
            runtimeEn: "IF (Subject_Attempts_Recalling_Blank_Period) THEN (Force: Memory_Returns_More_Terrifying_Fragment_Hints). FORBID_Bodily_Sovereignty_Void_Being_Fully_Reconstructed."
        }
    }
];
