import { LibraryCategoryDef } from '../../../types';

export const IDEO_ORDER: LibraryCategoryDef = {
    id: "ideo_order",
    name: "3. 秩序与传统 (Order & Tradition)",
    nameEn: "3. Order & Tradition",
    desc: "关于稳定、等级、过去与神圣的信仰。",
    descEn: "Beliefs about stability, hierarchy, the past, and the sacred.",
    items: [
      {
        id: "fundamentalism",
        name: "原教旨主义", nameEn: "Fundamentalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "回归经典。字面解释教义，排斥现代性，世界非黑即白。",
        defEn: "Return to scripture. Literal interpretation, rejecting modernity, black-and-white worldview.",
        core: "绝对的信仰对抗复杂的现实。异教徒与异端必须被物理净化。",
        coreEn: "Absolute faith versus complex reality. Infidels and heretics must be physically purified.",
        logic: "将某本古老的书或教条彻底锚定为大他者（M4）的唯一正版发声。任何象征界的模糊与滑变都被视为 M2（实在界）的腐化威胁。通过物理献祭（M6）异端来反复缝补不断开裂的 M4。",
        logicEn: "Anchoring an ancient text as the sole authentic voice of the Big Other (M4). Any symbolic ambiguity is viewed as M2 (Real) corruption. Repeatedly stitching the tearing M4 via physical sacrifice (M6) of heretics.",
        patch: {
          mechanics: "基础设定协议 + [容错空间 = 0; 文本解释器 = 死锁; 纯洁度扫描仪 = 最高敏感]",
          mechanicsEn: "Base_Setting_Protocol + [Tolerance_Space = 0; Text_Interpreter = Deadlocked; Purity_Scanner = Max_Sensitivity]",
          aesthetic: "聚焦：字迹斑驳的经书、蒙面的狂徒、单一死寂的颜色、纯净的火刑柱。文本：高频使用‘必须’、‘审判’，充满排他性的圣洁词汇。",
          aestheticEn: "Focus: Mottled scriptures, masked zealots, single dead colors, pure stakes of fire. Text: Frequent 'must' and 'judgement', exclusive holy vocabulary.",
          runtime: "IF (遭遇教义盲区或现代科学冲击) THEN (触发：极度暴力的防御性圣战，拒绝对话)。",
          runtimeEn: "IF (Encounters_doctrinal_blind_spot_or_modern_science) THEN (Trigger: Extremely_violent_defensive_holy_war_refusing_dialogue)."
        }
      },
      {
        id: "asceticism",
        name: "禁欲主义", nameEn: "Asceticism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "受苦是高尚的。拒绝物质享受，通过肉体痛苦升华灵魂。",
        defEn: "Suffering is noble. Rejecting material pleasure, elevating the soul via fleshly pain.",
        core: "精神对肉体的暴政。越痛苦越神圣，用自我的摧残换取存在的确证。",
        coreEn: "The tyranny of spirit over flesh. The more painful, the holier; trading self-mutilation for existential proof.",
        logic: "主动引爆 M2（肉身创伤界），剥夺所有 M3（欲望幻象）的供给。主体试图通过抢先对自己执行大他者（M4）的惩罚，以此掏空大他者的制裁权，证明自我的终极掌控（M0）。",
        logicEn: "Proactively detonating M2 (fleshly trauma) and depriving all M3 (desire fantasy). Subject tries to preemptively execute M4's punishment on oneself, emptying M4's sanctioning power to prove ultimate self-control (M0).",
        patch: {
          mechanics: "基础设定协议 + [痛觉收益 = 正向转化; 物质渴望 = 强制衰减; 精神护甲 = 随痛苦提升]",
          mechanicsEn: "Base_Setting_Protocol + [Pain_Yield = Positive_Conversion; Material_Desire = Forced_Decay; Spiritual_Armor = Scales_with_Pain]",
          aesthetic: "聚焦：鲜血淋漓的苦行僧背部、只剩骨架的面庞、生锈的铁丝内衣。文本：剥去所有修辞，仅保留干瘪、克制的短句。",
          aestheticEn: "Focus: Bloody ascetic backs, skeletal faces, rusty barbed lingerie. Text: Stripped of all rhetoric, keeping only dry, restrained short sentences.",
          runtime: "IF (被强行赋予极致的快乐与丰饶) THEN (执行：强烈的精神崩溃指控，视其为最大的恶毒诅咒)。",
          runtimeEn: "IF (Forced_with_extreme_pleasure_and_abundance) THEN (Execute: Severe_mental_breakdown_accusation_treating_it_as_the_most_vicious_curse)."
        }
      },
      {
        id: "patriarchalism",
        name: "宗法统治", nameEn: "Patriarchalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "长辈永远是对的。等级森严的家族与伦理结构，依靠孝道与绝对服从运转。",
        defEn: "Elders are always right. Strict familial & ethical structures functioning on filial piety and absolute obedience.",
        core: "极其压抑的爱与恨。权力的代际剥削与伪善，伴随着不可言说的反抗。",
        coreEn: "Extremely repressed love and hate. Intergenerational exploitation of power and hypocrisy, accompanied by unspeakable rebellion.",
        logic: "大他者（M4）被降神并具体化为‘长辈/族长’的凝视。主体的 M0（身份合法性）完全依赖于被嵌合在复杂的血缘网格中。越界者将面临社会性死亡之 M6 惩戒。",
        logicEn: "The Big Other (M4) is embodied as the gaze of 'Elders/Patriarch'. Subject's M0 (identity legitimacy) relies entirely on being embedded in complex blood grids. Transgressors face social death (M6).",
        patch: {
          mechanics: "基础设定协议 + [辈分压制力 = 绝对破防; 伦理锁链 = 不可见但坚不可摧]",
          mechanicsEn: "Base_Setting_Protocol + [Seniority_Suppression = Absolute_Guardbreak; Ethical_Chain = Invisible_but_Unbreakable]",
          aesthetic: "聚焦：斑驳威严的太师椅、沉重的祠堂大门、跪在地上的长影子与无声的流泪。文本：充满了‘规矩’‘体统’等陈腐词汇，表面温和实则吃人。",
          aestheticEn: "Focus: Mottled majestic armchairs, heavy shrine doors, kneeling long shadows, silent tears. Text: Stale vocabulary of 'rules' and 'propriety', mild on surface but man-eating inside.",
          runtime: "IF (子一代试图建立超出家族范畴的独立主体性 M0) THEN (触发：道德绑架与全面联合绞杀机制)。",
          runtimeEn: "IF (Younger_generation_attempts_independent_M0_outside_family) THEN (Trigger: Moral_kidnapping_and_comprehensive_joint_strangulation)."
        }
      },
      {
        id: "fatalism",
        name: "宿命论", nameEn: "Fatalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "一切事物皆已在宇宙剧本中注定。反抗是最大的徒劳，接受是绝对的智慧。",
        defEn: "All things are predetermined in the cosmic script. Rebellion is maximum futility; acceptance is absolute wisdom.",
        core: "俄狄浦斯式的深邃悲剧：越是拼命挣扎，越是加速陷入早已织好的大网之中。",
        coreEn: "Oedipal deep tragedy: the more one struggles, the faster one falls into the pre-woven net.",
        logic: "主体承认大他者（M4）并非某个教条或个体，而是一个无比巨大、不可理喻的混沌时空算法。主体的任何 M5（行动欲望）在其面前都被降维至零。M2（灾难）被剥除了恐惧感，化为麻木的景观。",
        logicEn: "Subject admits M4 is not a dogma but an immensely huge, unreasonable chaotic spacetime algorithm. Any M5 (action desire) is reduced to zero. M2 (disaster) is stripped of fear, turning into a numb spectacle.",
        patch: {
          mechanics: "基础设定协议 + [命运引力场 = 无法逃逸; 抵抗意志力 = 不断遭受减益Debuff]",
          mechanicsEn: "Base_Setting_Protocol + [Fate_Gravity_Field = Inescapable; Resistance_Willpower = Constant_Debuff]",
          aesthetic: "聚焦：缓缓转动的星盘、落满灰尘的预言书、不断重演的悲剧残骸。文本：充满疲惫、沧桑感，多使用第三人称的上帝视角描述灾难。",
          aestheticEn: "Focus: Slowly turning astrolabes, dusty prophecy books, repeating tragic debris. Text: Exhausted, weathered, using third-person god-view to describe disaster.",
          runtime: "IF (获得一个看似能改变命运的最终选项) THEN (操作：微笑着放弃选择，让车轮如期碾过)。",
          runtimeEn: "IF (Obtains_a_final_choice_seemingly_altering_fate) THEN (Action: Smile_and_abandon_choice_letting_the_wheel_crush_as_scheduled)."
        }
      },
      {
        id: "collectivism",
        name: "集体主义", nameEn: "Collectivism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "蜂巢意志最高。个人仅仅是巨大工程机器上的螺丝钉，牺牲小我是至高荣耀。",
        defEn: "Hive mind supreme. Individuals are mere cogs; sacrificing the minor self is the highest glory.",
        core: "在极具美学的整齐划一中，压抑着令人窒息的个体消亡与面目模糊的狂热。",
        coreEn: "In highly aesthetic uniformity represses suffocating individual decay and faceless fanaticism.",
        logic: "主体的 M0（身份）被强制上缴并熔铸成一个巨大的聚合体。大他者（M4）被显化为一个神圣的‘集体’。在此，M1（个人私欲缺失）被定义为道德犯罪，必须通过不断的 M6（自我奉献）来洗刷。",
        logicEn: "Subject's M0 (identity) is forcibly surrendered and smelted into a giant aggregate. M4 manifests as a holy 'Collective'. Here, M1 (personal desire) is defined as a moral crime, requiring constant M6 (self-dedication) to wash away.",
        patch: {
          mechanics: "基础设定协议 + [同频共振系数 = 最大; 离群值 = 自动剔除; 痛苦分担 = 全体均摊]",
          mechanicsEn: "Base_Setting_Protocol + [Sync_Resonance = Max; Outliers = Auto_Culled; Pain_Sharing = Distributed]",
          aesthetic: "聚焦：完美的几何方阵、整齐的劳动号子、密密麻麻没有名字的银色墓碑。文本：不使用‘我’，永远是‘我们’，庞大、高亢且缺少温度。",
          aestheticEn: "Focus: Perfect geometric squares, synchronized labor chants, dense nameless silver tombstones. Text: Never use 'I', always 'We', colossal, pitched yet devoid of warmth.",
          runtime: "IF (发现某个单体产生了脱离矩阵的自由意志) THEN (执行：以集体的名义执行雷霆般的物理与系统性格式化)。",
          runtimeEn: "IF (Discovers_an_individual_developing_matrix-divergent_free_will) THEN (Execute: Thunderous_physical_and_systemic_formatting_in_the_name_of_the_collective)."
        }
      },
      {
        id: "nationalism",
        name: "民族主义", nameEn: "Nationalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "我们对决他们。对血统与假想共同体的极度狂热，外部的仇恨是内部团结的地基。",
        defEn: "Us vs. Them. Extreme fanaticism for bloodline and imagined communities; external hatred grounds internal unity.",
        core: "高度排外的激情与仇恨凝视。神圣的边境线上流淌着被妖魔化的他者的血。",
        coreEn: "Highly xenophobic passion and hateful gaze. The holy border flows with the demonized others' blood.",
        logic: "通过划定一条不可逾越的地理和认同边界，来稳固脆弱疲惫的大他者（M4）。主体将自身的全部不安全感与 M1 投射到边界之外的‘替罪羊’身上，以此制造 M3 的高昂士气。",
        logicEn: "Stabilizing a fragile Big Other (M4) by establishing an insurmountable geographic and identity boundary. Subject projects all M1 insecurities onto scapegoats beyond the border, crafting high M3 morale.",
        patch: {
          mechanics: "基础设定协议 + [敌我识别雷达 = 二极管模式; 边界张力 = 随时引爆; 仇恨算力 = 指数级]",
          mechanicsEn: "Base_Setting_Protocol + [Friend_Foe_Radar = Binary_Mode; Border_Tension = Imminent; Hatred_Compute = Exponential]",
          aesthetic: "聚焦：烈士纪念碑、燃烧的敌国旗帜、边境铁丝网与巡逻犬。文本：煽动性极强、充满了鲜血、泥土与历史神话的粗粝词汇。",
          aestheticEn: "Focus: Martyr monuments, burning enemy flags, border barbed wires and patrol dogs. Text: Highly inflammatory, gritty vocabulary of blood, soil, and historical myth.",
          runtime: "IF (边境被跨越或荣誉遭受想象性侮辱) THEN (触发：不计后果的全员玉碎冲锋或战争动员)。",
          runtimeEn: "IF (Border_crossed_or_honor_suffers_imaginary_insult) THEN (Trigger: Reckless_all-out_banzai_charge_or_war_mobilization)."
        }
      },
      {
        id: "conformism",
        name: "从众主义", nameEn: "Conformism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "出头的钉子必须挨锤。平庸才是最安全的护城河，竭尽全力融入灰色的背景。",
        defEn: "The nail that sticks out gets hammered. Mediocrity is the safest moat, trying hard to blend into the gray background.",
        core: "对哪怕一丝‘不同’的极度恐惧。在沉默的螺旋中亲手掐死所有的色彩与变异。",
        coreEn: "Extreme fear of even a sliver of 'difference'. Strangling all colors and mutations in the spiral of silence.",
        logic: "这是一种消极的防御态势。主体试图在象征界（M4）的无尽监视中彻底隐身。通过消灭自己的 M3（出格欲望）与 M5（创造行动），来换取免于实在界打击（M2）的安全通行证。主体是一种迷彩颜色的空洞。",
        logicEn: "A passive defensive posture. Subject attempts to turn completely invisible within M4's endless surveillance. Destroying own M3 (transgressive desire) and M5 (creative act) in exchange for a safe pass from M2. Subject is a camouflage-colored void.",
        patch: {
          mechanics: "基础设定协议 + [拟态隐身度 = 最大; 偏离均值报警 = 极高; 责任分散 = 100%生效]",
          mechanicsEn: "Base_Setting_Protocol + [Mimicry_Invisibility = Max; Deviation_from_Mean_Alert = Extreme; Diffusion_of_Responsibility = 100%_Active]",
          aesthetic: "聚焦：一模一样的廉价西服背影、变色龙、窃窃私语指指点点的人群、空洞的复制瞳孔。文本：使用大量的冗余、模糊、毫无主见的从句掩盖真实判断。",
          aestheticEn: "Focus: Identical cheap suit backs, chameleons, whispering pointing crowds, empty replicated pupils. Text: Heavy use of redundant, vague, opinion-less subordinate clauses to mask true judgment.",
          runtime: "IF (不幸被聚光灯照亮或点名) THEN (执行：立刻出卖他人转移视线或装死宕机)。",
          runtimeEn: "IF (Unluckily_illuminated_by_spotlight_or_called_out) THEN (Execute: Immediately_sell_out_others_to_divert_attention_or_play_dead)."
        }
      },
      {
        id: "conservatism",
        name: "保守主义", nameEn: "Conservatism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "深信过去永远比现在好。警惕任何形式的加速与变革，死气沉沉地守护着遗迹。",
        defEn: "Convinced the past is always better. Wary of any acceleration and change, lifelessly guarding relics.",
        core: "怀旧的滤镜对抗冰冷变化的现实。在一场注定失败的抗争中试图冻结时间之河。",
        coreEn: "Nostalgic filters battling the cold changing reality. Attempting to freeze the river of time in a doomed struggle.",
        logic: "将某一个逝去的历史切片神圣化为没有 M1 缺失的黄金时代（虚幻的大他者乐园）。一切当下的推进系统（M5）都被看作带来 M2 灾难的潘多拉魔盒。其实质是抵御熵增的悲情抵抗。",
        logicEn: "Sanctifying a lost historical slice as a golden age without M1 lack (illusory Big Other paradise). Any present driving system (M5) is seen as Pandora's box bringing M2 trauma. Essentially a tragic resistance against entropy.",
        patch: {
          mechanics: "基础设定协议 + [时间流速抵抗 = 满负荷; 结构稳定性 = 僵化锁死; 新生事物防御罩 = 默认开启]",
          mechanicsEn: "Base_Setting_Protocol + [Time_Flow_Resistance = Max_Load; Structural_Stability = Rigidly_Locked; New_Thing_Shield = Default_On]",
          aesthetic: "聚焦：泛黄的老照片、保养完好但无法发射的老爷枪、散发着陈腐气息的羊皮纸与绅士拐杖。文本：悠长、舒缓，充满着挽歌式的哀叹与精致礼仪。",
          aestheticEn: "Focus: Yellowing old photos, well-kept but unfirable antique guns, stale parchment and gentleman canes. Text: Long, soothing, full of elegiac sighs and exquisite etiquette.",
          runtime: "IF (面临时代滚滚向前的暴力碾压) THEN (触发：宁可抱着旧世界的牌坊一同粉碎也绝不退让升级)。",
          runtimeEn: "IF (Facing_violent_crushing_by_marching_era) THEN (Trigger: Rather_shatter_along_with_the_old_world_archway_than_concede_and_upgrade)."
        }
      },
      {
        id: "bureaucratism",
        name: "形式官僚", nameEn: "Bureaucratism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "程序正义与免责高于一切生命价值。将世界裁剪成符合表格与章程的死板形状。",
        defEn: "Procedural justice and exoneration surpass all life value. Cropping the world into rigid shapes fitting forms and statutes.",
        core: "卡夫卡式的庞大荒谬。活生生的人被迷宫般的公文流转彻底困死、抽干。",
        coreEn: "Kafkaesque colossal absurdity. Living humans completely trapped and drained dry by labyrinthine document flows.",
        logic: "大他者（M4）退化为一套由无穷签章和批复构成的符号永动机。主体放弃了所有实质意义上的 M3 与 M5，将避免承担责任（回避 M6 代价）作为最高指令。对 M2 灾难置若罔闻，只要流程合规。",
        logicEn: "The Big Other (M4) degenerates into a symbolic perpetual motion machine of endless stamps and approvals. Subject abandons all substantial M3 and M5, making avoiding liability (M6 avoidance) the prime directive. Ignores M2 disasters if procedures comply.",
        patch: {
          mechanics: "基础设定协议 + [形式审核逻辑 = 100%遮蔽实质; 责任溯源 = 黑盒推诿; 系统冷血指数 = 最大]",
          mechanicsEn: "Base_Setting_Protocol + [Formal_Audit_Logic = 100%_Mask_Substance; Liability_Traceability = Blackbox_Buck_Passing; System_Cold-bloodedness = Max]",
          aesthetic: "聚焦：厚达一米的红头文件、办事窗口隔绝声音的防弹玻璃、面无表情规律敲打的键盘手。文本：全是由被动语态、长句、术语堆砌的废话迷宫。",
          aestheticEn: "Focus: Meter-thick redheaded docs, bulletproof glass of service windows, emotionless typing hands. Text: Nonsense mazes piled with passive voice, long sentences, and jargon.",
          runtime: "IF (面临急需要情感决断的人道灾难) THEN (执行：递上一份需要五个工作日审批的冰冷表格)。",
          runtimeEn: "IF (Facing_humanitarian_disaster_needing_urgent_emotional_resolve) THEN (Execute: Hand_over_a_cold_form_requiring_5_business_days_to_approve)."
        }
      },
      {
        id: "feudal_loyalty",
        name: "封建愚忠", nameEn: "Feudal Loyalty",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "士为知己者死。建立在绝对人身依附上的主从关系，为了“义气”进行无条件的献肉。",
        defEn: "Scholars die for their confidants. Master-servant relation built on absolute personal attachment; unconditional flesh sacrifice for 'loyalty'.",
        core: "浪漫化了的极度不平等。一旦主君表现出轻蔑的背叛，会遭遇最深的不可愈合创伤。",
        coreEn: "Romanticized extreme inequality. Once the lord shows contemptuous betrayal, it incurs the deepest unhealable trauma.",
        logic: "主体的心灵结构是一个缺失的半圆（M1 极大显化）。大他者（M4）被彻底具象为一个实体的主人。主体通过主动将自身物化为剑或盾牌（M6 全盘献祭），换取虚假的光荣 M3 填补。",
        logicEn: "Subject's mental structure is a missing half-circle (massive M1). Big Other (M4) is totally embodied as a physical Lord. Subject actively objectifies self into sword/shield (total M6 sacrifice) for fake glorious M3 fill.",
        patch: {
          mechanics: "基础设定协议 + [人身依附阈值 = 锁死高位; 自我保全机制 = 随时可被覆盖断路; 誓言回路 = 不可篡改]",
          mechanicsEn: "Base_Setting_Protocol + [Personal_Attachment = Locked_High; Self-Preservation = Overridable_Short-circuit; Vow_Circuit = Immutable]",
          aesthetic: "聚焦：重重磕下的带血额头、替人挡下子弹的肉盾、背后复杂的家纹刺青与切掉的无名指。文本：充满悲壮、沉郁的大义凛然，词汇古老且血腥。",
          aestheticEn: "Focus: Heavy bloody prostrations, meat shields taking bullets, complex back tattoos and severed fingers. Text: Tragic, gloomy righteousness, archaic and bloody vocabulary.",
          runtime: "IF (主君下达了明显违背道德常理或送死的命令) THEN (触发：强行压抑一切怀疑流着泪微笑着去执行)。",
          runtimeEn: "IF (Lord_issues_immoral_or_suicidal_command) THEN (Trigger: Force-repress_all_doubts_and_execute_smiling_with_tears)."
        }
      },
      {
        id: "purity_culture",
        name: "纯洁文化", nameEn: "Purity Culture",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "对“脏污与污染”的病态恐惧。从处女情结到严酷的思想审查，要求环境绝对的一尘不染。",
        defEn: "Pathological fear of 'filth/pollution'. From virgin complexes to harsh thought policing, demanding an absolutely spotless environment.",
        core: "极度压抑的潜台词是变态的渴望。越是狂热洗刷纯洁，越容易被泥沼深处的污秽所吸引。",
        coreEn: "The extreme repressed subtext is perverse desire. The more fanatically one scrubs purity, the easier one is drawn to the filth in the deep bog.",
        logic: "大他者（M4）在此呈现为‘无菌室’的凝视。任何本能的流露（尤其是SUR5的性或越界念头）都会引申为 M2 级别的致命系统污染。主体通过近乎自虐的排查（剥削自我 M6）来维系脆弱边界。",
        logicEn: "M4 presents as the gaze of a 'sterile room'. Any instinctual slip (especially SUR5 sex/transgression) is scaled to M2-level fatal systemic pollution. Subject uses masochistic purges (M6 self-exploitation) to hold fragile borders.",
        patch: {
          mechanics: "基础设定协议 + [污染敏感警报 = 破音尖叫; 精神洁癖防御机制 = 过载; 排异反应 = 极端变态]",
          mechanicsEn: "Base_Setting_Protocol + [Pollution_Alarm = Shrieking; Mental_Mysophobia_Defense = Overload; Rejection_Response = Extreme_Perversion]",
          aesthetic: "聚焦：刺鼻的消毒水池、被粗暴涂黑的历史书、锁紧的贞操带、洁白床单上惊恐的带泪眼球。文本：歇斯底里，对于排泄与交媾词汇存在病态的防御与隐喻替换。",
          aestheticEn: "Focus: Pungent chlorine pools, crudely blacked-out history books, locked chastity belts, panicked teary eyes on white sheets. Text: Hysterical, with pathological defenses and metaphors for excretion and copulation.",
          runtime: "IF (自身不可逆转地沾染上了体制定义下的某种隐秘污点) THEN (触发：从极度圣洁瞬间堕落为狂暴贪婪的最深恶魔)。",
          runtimeEn: "IF (Irreversibly_tainted_by_a_system-defined_hidden_stain) THEN (Trigger: Instant_fall_from_extreme_holiness_to_the_most_frenzied_greedy_demon)."
        }
      },
      {
        id: "honor_culture",
        name: "荣誉文化", nameEn: "Honor Culture",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "面子比生命权柄更重要。一旦受到言语或行动的阶级性侮辱，必须用鲜血与决斗来清算洗刷。",
        defEn: "Face is more vital than the right to live. Class insults must be settled and washed with blood and duels.",
        core: "建立在火药桶上的脆弱纸糊自尊。一次漫不经心的对视就能引发家族诛灭级别的血案。",
        coreEn: "Fragile paper self-esteem built on a powder keg. A careless glance triggers family-annihilation-level bloodshed.",
        logic: "这是一种前现代的 M4 维系方式。主体的存在感（M0）100% 挂载于外部符号（“面子”与荣誉名册）。外界的一句嘲讽能直接穿透象征界引发主体的 M2 存在性崩塌。必须以 M6 级别的暴力流血反拉来重建坐标。",
        logicEn: "Pre-modern M4 maintenance. Subject's existence (M0) is 100% mounted on external symbols ('face'/honor roll). A mocking remark pierces symbolic order causing M2 existential collapse. Demands M6-level violent bleeding to pull coordinates back.",
        patch: {
          mechanics: "基础设定协议 + [自尊护甲厚度 = 0; 侮辱损伤乘数 = x99; 决斗复仇引擎 = 强行切入]",
          mechanicsEn: "Base_Setting_Protocol + [Self-Esteem_Armor_Thickness = 0; Insult_Damage_Multiplier = x99; Duel_Revenge_Engine = Force_Interrupt]",
          aesthetic: "聚焦：被狠狠摔在脸上的白手套、决斗天明前擦拭的左轮手枪、被钉在耻辱柱上的流血刻字。文本：极度敏感、神经质地检视每一个标点符号中是否包含不敬。",
          aestheticEn: "Focus: White glove slapped on face, revolver wiped before dawn, bleeding letters carved in pillory. Text: Extremely sensitive, neurotically inspecting every punctuation for disrespect.",
          runtime: "IF (在公开场合被略微降维调侃或反驳) THEN (操作：将桌子掀翻并立刻发起必死其一的物理决斗挑战)。",
          runtimeEn: "IF (Slightly_diminished_teased_or_refuted_in_public) THEN (Action: Flip_table_and_issue_duel_to_the_death_challenge_instantly)."
        }
      }
    ]
  };
