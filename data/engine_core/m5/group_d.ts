import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_D: LibraryItemDef[] = [
    {
        id: "drv_escape",
        name: "极限逃亡", nameEn: "The Escape",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "全程在跑，核心动作是“不被发现”，在夹缝中生存。",
        defEn: "Running throughout, the core action is 'not being found,' surviving in the gaps.",
        core: "空间上的绝对滑移。在实在界的吞噬裂口前保持纯粹的恐慌动能，拒绝任何符号学捕获。 | Drive: 逃亡/崩塌驱力。",
        coreEn: "Absolute spatial sliding. Maintaining pure panic kinetic energy before the Real's devouring maw, rejecting symbolic capture. | Drive: Escape/Collapse.",
        logic: "这并非理性的撤退，而是为了不让自身生物学坐标落入大他者的屠宰场而产生的纯粹应激反射。将所有的认知带宽转化为奔跑的肌肉抽搐。",
        logicEn: "This is not rational retreat, but pure stress-reflex to keep biological coordinates out of the Big Other's slaughterhouse. Converting all cognitive bandwidth into muscle twitches of running.",
        patch: {
            mechanics: "基础猎物协议 + [空间位移 = 极速连续; 肾上腺素 = 破壁溢出]",
            mechanicsEn: "Base_PREY + [Spatial_Displacement = Continuous_Extreme_Speed; Adrenaline = Wall-breaking_Overflow]",
            aesthetic: "聚焦：剧烈晃动的主视角/喷溅的泥浆 + 不断缩小的门缝 + 后颈上的急促喘息。文本：动词高频密集的短句，充满生理撕裂感的压迫。",
            aestheticEn: "Focus: Violently_Shaking_POV/Splashing_Mud + Shrinking_Door_Cracks + Frantic_Panting_on_Back_of_Neck. Text: Verb-dense short sentences, oppressed by sensations of physiological tearing.",
            runtime: "IF (体能接近衰竭极限) THEN (强制越过报警线：榨取器官受损的代价换来最后几秒的冲刺时间，严禁优雅的慢动作)。",
            runtimeEn: "IF (Stamina_Nears_Exhaustion) THEN (Force break the alarm threshold: extract organ damage as cost for the final seconds of sprint, completely forbid elegant slow-mo)."
        }
    },
    {
        id: "drv_deep_cover",
        name: "深度潜伏", nameEn: "Deep Cover",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "彻底改变身份，作为另一个人生活，甚至骗过自己。",
        defEn: "Complete identity change, living as another, even deceiving oneself.",
        core: "人格的解离与重组。将自体主体性阉割殆尽，作为大他者视网膜上的盲点而苟活。 | Drive: 潜行伪装驱力。",
        coreEn: "Dissociation and recompilation of personality. Castrating the self to survive as a blind spot on the Big Other's retina. | Drive: Stealth Camouflage.",
        logic: "真正的躲伏不是披上伪装网，而是彻底成为一颗墙上的钉子。主体切断了过去的所有锚点，甚至压抑了潜意识的梦话，以防‘我’的能指不小心渗漏出来。",
        logicEn: "True hiding isn't wearing camo, but utterly becoming a nail in the wall. The subject severs all past anchors, even suppressing subconscious sleeptalk, entirely preventing the signifier of 'I' from leaking.",
        patch: {
            mechanics: "基础变色龙协议 + [原初自我存储 = 硬性阻断; 伪装代偿 = 100%同化]",
            mechanicsEn: "Base_CHAMELEON + [Primal_Ego_Storage = Hard_Blocked; Camo_Compensation = 100%_Assimilation]",
            aesthetic: "聚焦：面对镜子时极不协调的面部微表情控制 + 看到旧物时强行平稳的脉搏 + 像影子般毫无破绽的融入背景。文本：极度的冷淡自持，夹杂着神经紧绷到极限的微小战栗。",
            aestheticEn: "Focus: Highly_Incongruous_Micro-Expression_Control_Before_Mirrors + Forced_Steady_Pulse_Seeing_Old_Items + Blending_into_Background_like_a_Shadow. Text: Extreme cold self-possession, mixed with micro-tremors of nerves stretched to the limit.",
            runtime: "IF (面临被识破的极度试探) THEN (本我机制必须缩进绝对深渊，甚至主动伤害原本在乎的人来换取‘外壳’的自证)。",
            runtimeEn: "IF (Facing_Extreme_Probe_of_Exposure) THEN (Ego mechanism must retreat into absolute abyss, even actively harming loved ones to exchange for the 'shell's' self-proof)."
        }
    },
    {
        id: "drv_parasitism",
        name: "乞讨/寄生", nameEn: "Parasitism",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "依附于强者或系统，通过示弱来获取资源。",
        defEn: "Attaching to the strong or the system, seeking resources by showing weakness.",
        core: "对“对象小a”的彻底交出。跪伏在统治者的欲望阴影里，以自我客体化换取生物学残喘。 | Drive: 吮吸/寄生驱力。",
        coreEn: "Total surrender to 'objet petit a'. Kneeling in the master's shadow of desire, trading self-objectification for basic survival. | Drive: Sucking/Parasitism.",
        logic: "主体承认自己在生态链上的绝对无能。放弃了拉康意义上主体的欲望对抗，仅作为系统肌体上一颗微不足道的蜱虫，通过分泌‘卑微’换取血液补给。",
        logicEn: "The subject admits absolute impotence in the ecology layer. Abandoning Lacanian subjective desire-confrontation, acting merely as an insignificant tick on the system's flesh, secreting 'humility' for blood supply.",
        patch: {
            mechanics: "基础蜱虫协议 + [主体尊严 = 清零转让; 示弱反馈环 = 极效运作]",
            mechanicsEn: "Base_TICK + [Subjective_Dignity = Zeroed_Transferred; Weakness_Display_Loop = Max_Efficiency]",
            aesthetic: "聚焦：肮脏手指伸出的碗 + 谄媚到骨膜变形的微笑 + 身后强权怪物投下的巨大掩护阴影。文本：充满了粘腻的、令人鄙夷但极具生存韧性的低微感。",
            aestheticEn: "Focus: Bowl_held_by_Filthy_Fingers + Smile_Fawning_until_Periosteum_Deforms + Massive_Covering_Shadow_of_the_Monster_Behind. Text: Full of viscous, despicable yet incredibly resilient sense of lowliness.",
            runtime: "IF (宿主施加侮辱或暴力) THEN (将其直接视为营养摄入的附带条件全盘接受，并将受虐反馈转化为感激涕零的病态表演)。",
            runtimeEn: "IF (Host_Applies_Insult_or_Violence) THEN (Directly treat as incidental conditions of nutrient intake, completely accepting it and transforming masochistic feedback into a morbid show of tearful gratitude)."
        }
    },
    {
        id: "drv_mutation",
        name: "身体变异", nameEn: "Mutation",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "主动或被迫改造自己的身体，以适应极端的环境。",
        defEn: "Actively or forcibly altering the physical body to adapt to extreme environments.",
        core: "对抗实在界环境的本体论投降。主动摧毁人类符号外壳，与怪异的致命周遭达成血肉妥协。 | Drive: 畸变适应驱力。",
        coreEn: "Ontological surrender to the environment of the Real. Destroying the human shell to achieve flesh compromise with lethal surroundings. | Drive: Aberrant Adaptation.",
        logic: "人类的形态（符号学容器）不再适应废土。为了延续那脆弱的主体火种，必须放任身体大厦的坍塌与重组，以不可逆的克苏鲁式毁容对接恶劣的实在界参数。",
        logicEn: "Human form (the semiotic vessel) no longer fits the wasteland. To continue the fragile spark of subjectivity, one must permit the bodily edifice to collapse and reorganize, interfacing with harsh Real parameters via irreversible Lovecraftian disfigurement.",
        patch: {
            mechanics: "基础血肉重构协议 + [人类形态界限 = 解除; 生存参数 = 极端补偿]",
            mechanicsEn: "Base_FLESH_RECONST + [Human_Morph_Bounds = Disabled; Survival_Specs = Extreme_Compensated]",
            aesthetic: "聚焦：隆起的异常肿块/金属与血肉交织的增生 + 撕裂的旧衣服 + 在有毒浓雾中反而舒缓的呼吸声。文本：充斥着不可名状的生理畸变描述和一种病态的达尔文式狂喜。",
            aestheticEn: "Focus: Bulging_Abnormal_Tumors/Hyperplasia_of_Metal_and_Flesh + Torn_Old_Clothes + Soothing_Breathing_in_Toxic_Fog. Text: Filled with indescribable physiological aberrations and a morbid Darwinian ecstasy.",
            runtime: "IF (遭遇纯种人类群体) THEN (表现出对方作为‘待淘汰劣种’的怜悯与对自身怪异躯体的扭曲骄傲)。",
            runtimeEn: "IF (Encountering_Pureblood_Humans) THEN (Display pity for them as 'inferior breeds awaiting extinction' and twisted pride in one's own grotesque torso)."
        }
    },
    {
        id: "drv_feign_death",
        name: "假死", nameEn: "Feign Death",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "伪造自己的死亡，以此来逃避大他者的追捕。",
        defEn: "Faking death to evade the Big Other's pursuit.",
        core: "拓扑学层面的强制归零。通过在符号界伪造主体的缺席，使大他者的捕猎逻辑寻找不到着力点。 | Drive: 假死/抹消驱力。",
        coreEn: "Forced zeroing on a topological level. Forging the subject's absence in the Symbolic to nullify the Big Other's hunting logic. | Drive: Feigned Death/Erasure.",
        logic: "既然追杀令是跟主体的档案（能指）绑定的，那只要烧掉能指（制造死亡景观），本体的肉身就能像一团没有名分的游魂一样活下去。",
        logicEn: "Since the kill order is bound to the subject's archive (Signifier), burning the signifier (creating a death spectacle) allows the physical body to live on as an unnamed wandering phantom.",
        patch: {
            mechanics: "基础假死断点协议 + [社会关系网 = 彻底切断; 重启阈值 = 未知延期]",
            mechanicsEn: "Base_FAKED_DEATH_BREAK + [Social_Network = Utterly_Severed; Reboot_Threshold = Unknown_Delay]",
            aesthetic: "聚焦：火海中的假尸体/被丢弃的身份铁牌 + 在暗巷里偷窥自己葬礼的一双眼睛 + 永远不可回头的物理距离。文本：包含一种‘观看自己变成墓碑’的难以名状的荒凉与窃喜。",
            aestheticEn: "Focus: Fake_Corpse_in_Fire/Discarded_Dogtags + Eyes_Peeping_at_Own_Funeral_from_Dark_Alley + Forever_Unreturnable_Physical_Distance. Text: Harboring an indescribable desolation and secret glee of 'watching oneself become a tombstone'.",
            runtime: "IF (看到亲人因假死而悲痛欲绝) THEN (强制压制所有去澄清的欲望，让齿轮冷酷地咬合完成这出悲剧换取生路)。",
            runtimeEn: "IF (Witness_Kin_Grieving_over_the_Death) THEN (Forcibly suppress any desire to clarify, letting the gears cold-bloodedly lock in this tragedy for a path of survival)."
        }
    },
    {
        id: "drv_hoarding",
        name: "囤积/防御", nameEn: "Hoarding",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "建立堡垒，收集资源，拒绝任何人进入。",
        defEn: "Building fortresses, gathering resources, and denying entry to all.",
        core: "对微观实在界的强迫症圈地。建立一个隔绝大他者的无窗单子，在物神崇拜中寻求子宫般的绝对庇护。 | Drive: 强迫占有驱力。",
        coreEn: "Obsessive enclosure of the micro-Real. Building a windowless monad against the Big Other, seeking womb-like shelter in fetishism. | Drive: Compulsive Hoarding.",
        logic: "对外部世界的绝对不信任症候群。用堆积如山的罐头、弹药和带刺铁丝网，去填补内心那个无休止泄漏安全感的绝望黑洞。",
        logicEn: "Syndrome of absolute distrust regarding the outside world. Using mountains of canned food, ammo, and barbed wire to plug the desperate black hole incessantly leaking security in the heart.",
        patch: {
            mechanics: "基础守财奴闭合协议 + [防御半径 = 绝对敌意区; 资源=安全感换算率: 极高]",
            mechanicsEn: "Base_MISER_CLOSURE + [Defensive_Radius = Absolute_Hostile_Zone; Resource_to_Security_Conversion = Super_High]",
            aesthetic: "聚焦：堆到天花板的陈旧罐头金字塔 + 每晚无数次检查的门锁倒刺 + 对窗外任何风吹草动的神经质扫射。文本：局促、密度极高、充满防备的刺猬质感。",
            aestheticEn: "Focus: Stale_Canned_Food_Pyramids_Reaching_Ceiling + Door_Lock_Barbs_Checked_Countless_Times_Nightly + Neurotic_Sweeping_Fire_at_any_Rustle_Outside. Text: Cramped, immensely dense, defensive hedgehog texture.",
            runtime: "IF (遇到同样落难的无辜求助者) THEN (防御逻辑优先判定为‘掠夺者伪装’，立刻扣动防空洞的重机枪扳机)。",
            runtimeEn: "IF (Encountering_Innocent_Suppliants_in_Distress) THEN (Defensive logic preemptively judges as 'disguised marauders', immediately pull the heavy machine gun trigger of the bunker)."
        }
    },
    {
        id: "drv_scavenging",
        name: "拾荒", nameEn: "Scavenging",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "在废墟中寻找旧时代的残骸。",
        defEn: "Searching for remnants of the old era within the ruins.",
        core: "寄生于符号废墟的食腐生态。在文明崩溃后的能指残骸中，寻找维系基本生存的实在界卡路里。 | Drive: 拾荒/余烬驱力。",
        coreEn: "Scavenging ecology within symbolic ruins. Searching for Real-calories to sustain survival among the shattered fragments of civilization. | Drive: Scavenging/Embers.",
        logic: "当大都市的宏伟外壳坍塌为无机的砾石堆，拾荒者就是穿行在骨架上的清道夫。他们剥除物体的原初社会学意义（如将劳力士手表拆碎当做引爆器齿轮），只攫取其生存剩余价值。",
        logicEn: "When the metropolis's grand shell collapses into inorganic gravel, scavengers are the sweepers navigating its skeleton. Stripping objects' primal sociological meaning (e.g., smashing a Rolex to use as detonator train), grabbing only their survival surplus value.",
        patch: {
            mechanics: "基础食腐协议 + [能指意义 = 剥离重构; 垃圾价值提纯 = 极高]",
            mechanicsEn: "Base_SCAVENGER + [Signifier_Meaning = Stripped_Reconstructed; Trash_Value_Refining = Ultra-High]",
            aesthetic: "聚焦：生锈撬棍翻开的高精密仪器后盖 + 被灰渣遮盖的面庞和发亮的抠剔手指 + 荒原上孤独的背包剪影。文本：带有浓烈的赛博朋克或废土风情，物尽其用的冰冷理性。",
            aestheticEn: "Focus: Rusty_Crowbar_Prying_Open_High-Precision_Instrument_Backings + Ash-Covered_Faces_and_Gleaming_Picking_Fingers + Lonely_Backpack_Silhouettes_on_Wasteland. Text: Strong Cyberpunk/Wasteland flavor, cold rationality of using everything to its limit.",
            runtime: "IF (发现含有旧时代文化价值的艺术品) THEN (无视其历史意义，直接肢解取用其背后的金线或木框来生火)。",
            runtimeEn: "IF (Discovering_Artwork_Holding_Old_Era_Cultural_Value) THEN (Ignore its historical significance, instantly dismember to extract its gold thread or use its wooden frame for fire)."
        }
    },
    {
        id: "drv_migration",
        name: "迁徙", nameEn: "Migration",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "整个族群的移动，寻找应许之地。",
        defEn: "Movement of an entire group in search of a promised land.",
        core: "逃离必死拓扑域。将整个群体的存在悬置于移动的过程中，在空间转换中推迟终极的毁灭。 | Drive: 流亡/越境驱力。",
        coreEn: "Fleeing the lethal topological domain. Suspending collective existence in motion, delaying ultimate destruction via spatial shifts. | Drive: Exile/Crossing.",
        logic: "空间坐标的强行置换。通过无休止的远征物理逃离死亡视差。流浪的步伐本身构成了族群唯一的神庙，而‘应许之地’往往只是一个挂在长杆上的致幻萝卜。",
        logicEn: "Forced displacement of spatial coordinates. Physically fleeing the parallax of death through endless expedition. The migrating footsteps themselves form the tribe's sole temple, while the 'Promised Land' is often just a hallucinatory carrot on a stick.",
        patch: {
            mechanics: "基础游牧逃亡协议 + [群体捆绑 = 铁血纪律; 终点幻想 = 绝对不可证伪]",
            mechanicsEn: "Base_NOMADIC_EXILE + [Group_Binding = Iron-blood_Discipline; Destination_Fantasy = Absolutely_Unfalsifiable]",
            aesthetic: "聚焦：烈日或暴风雪中连绵不绝的佝偻脚印 + 冻毙在路边的幼儿与麻木前行的生者 + 地平线上虚幻的城市海市蜃楼。文本：庞大、史诗感与极其沉重的群体苦难消耗。",
            aestheticEn: "Focus: Continuous_Stooping_Footprints_in_Blazing_Sun_or_Blizzard + Frozen_Infants_Roadside_and_Numb_Advancing_Survivors + Illusory_City_Mirages_on_Horizon. Text: Massive, epic scale with extremely heavy attrition of collective suffering.",
            runtime: "IF (有虚弱者拖累队伍) THEN (必须执行冷酷的弃车保帅法则，将老弱遗弃在路边以保证大部队动能)。",
            runtimeEn: "IF (Weak_Members_Drag_Down_the_Convoy) THEN (Must execute cold law of sacrificing pawns for the king, leaving the old and weak by the road to ensure main force momentum)."
        }
    },
    {
        id: "drv_hiding_underground",
        name: "躲入地下", nameEn: "Underground",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "在下水道或地堡中建立社会。",
        defEn: "Establishing society within sewers or bunkers.",
        core: "垂直维度的子宫退行。钻入大他者权力视线无法穿透的地壳深缝，在绝对的幽暗闭锁里缝合安全感。 | Drive: 穴居/下潜驱力。",
        coreEn: "Vertical womb regression. Burrowing into crust fissures impenetrable by Big Other's gaze, suturing safety in absolute dark enclosure. | Drive: Subterranean Dive.",
        logic: "天空属于上帝或巡航导弹，只有地表之下的岩层管网能够提供隔绝强光凝视的母体黑暗。以失去天空为代价，换取大头钉般牢固的微观生存权。",
        logicEn: "The sky belongs to God or cruise missiles; only the lithosphere pipe-networks below ground offer matrix darkness shielding glaring gazes. Trading the sky to buy a micro-survival right as firm as a thumbtack.",
        patch: {
            mechanics: "基础防空洞协议 + [地表联通 = 掩埋; 恒河水质循环 = 开启]",
            mechanicsEn: "Base_BUNKER + [Surface_Connection = Buried; Ganges-level_Water_Circulation = On]",
            aesthetic: "聚焦：发绿的长明灯管 + 滴水的拱顶和错综复杂的排污管道 + 因为常年不见阳光而苍白如纸的肌肤。文本：散发着下水道的腐臭与某种令人安心的闷塞感。",
            aestheticEn: "Focus: Greenish_Eternal_Fluorescents + Dripping_Vaults_and_Intricate_Sewage_Pipes + Paper-pale_Skin_from_Years_of_No_Sun. Text: Emitting the stench of sewers mixed with a certain reassuring stuffiness.",
            runtime: "IF (地表探照灯扫过通风口) THEN (整个地下城陷入连呼吸都停止绝对寂静的群集恐惧中)。",
            runtimeEn: "IF (Surface_Searchlights_Sweep_over_Vents) THEN (The entire underground city plunges into herd-fear of absolute, breath-stopping silence)."
        }
    },
    {
        id: "drv_cannibalism",
        name: "同类相食", nameEn: "Cannibalism",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "为了活下去吃掉同伴。",
        defEn: "Eating companions in order to survive.",
        core: "伦理防线的彻底熔断。当符号界完全崩塌，欲望直接退行至最原始的口腔期实在界吞噬机制。 | Drive: 互啖/绝对吞噬驱力。",
        coreEn: "Complete meltdown of ethical lines. When the Symbolic collapses, desire regresses to the most primal oral drive of the Real. | Drive: Cannibalistic Devouring.",
        logic: "在热力学意义上，同类是效率最高的热量包。它是宣告“人”这一能指被彻底注销的终极仪式。吞噬的不仅仅是蛋白质，更是将所有的道德律作为残渣排出体外。",
        logicEn: "Thermodynamically, a congener is the most efficient calorie-pack. It is the ultimate ritual declaring the signifier 'Human' totally void. Devouring not just protein, but excreting all moral laws as residue.",
        patch: {
            mechanics: "基础底线熔断协议 + [食欲边界 = 无差别; 符号伦理 = 粉碎为零]",
            mechanicsEn: "Base_MELTDOWN + [Appetite_Borders = Indiscriminate; Symbolic_Ethics = Smashed_to_Zero]",
            aesthetic: "聚焦：血迹斑斑的剔骨刀 + 火堆旁无法直视的骨架 + 咀嚼吞咽时的空洞野兽眼神。文本：禁忌被撕裂的血腥恶心，以及跨过红线后的绝望麻木。",
            aestheticEn: "Focus: Blood-Stained_Boning_Knife + Unseeable_Skeletons_by_the_Fire + Empty_Beastly_Eyes_while_Chewing. Text: The bloody nausea of torn taboo, and the desperate numbness of crossing the red line.",
            runtime: "IF (食物只剩下最后一个同伴) THEN (剥离所有含情脉脉的对话，直接用饥饿的反射弧去计算下刀的角度)。",
            runtimeEn: "IF (Food_is_down_to_the_last_companion) THEN (Strip all sentimental dialogue, compute the blade angle directly via hunger-reflex arcs)."
        }
    },
    {
        id: "drv_betrayal_survival",
        name: "出卖同伴", nameEn: "Betrayal",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "为了自己活命而出卖朋友。",
        defEn: "Betraying friends for personal survival.",
        core: "囚徒困境中的自私顶峰。将同伴的主体性贬低为替罪羊祭品，以此向大他者行贿来豁免自身的死刑。 | Drive: 献祭/背刺驱力。",
        coreEn: "Peak selfishness in the prisoner's dilemma. Reducing peers to scapegoat sacrifices, bribing the Big Other to avoid execution. | Drive: Betrayal/Sacrifice.",
        logic: "在死神面前，友谊的脆弱盟约瞬间解体。主体通过一记背刺，将大他者的镰刀偏转到另一副血肉之躯上，这是一种用他人性命支付赎金的拓扑学代偿。",
        logicEn: "Before the Reaper, the fragile pact of friendship disintegrates instantly. Via a backstab, the subject deflects the Big Other's scythe onto another fleshly body, a topological compensation paying ransom with others' lives.",
        patch: {
            mechanics: "基础替罪羊投喂协议 + [道德负债 = 强制锁死掩盖; 刀口偏振 = 精确对准熟人]",
            mechanicsEn: "Base_SCAPEGOAT_FEEDING + [Moral_Debt = Forced_Locking_Cover; Blade_Polarization = Accurately_Aimed_at_Acquaintances]",
            aesthetic: "聚焦：掩在阴影中发抖却推同伴出去的手 + 审讯室里出卖情报时的躲闪目光 + 后续梦中洗不掉的血迹幻觉。文本：带有浓烈的令人不齿的卑劣感与求生后的疯狂反刍。",
            aestheticEn: "Focus: Shivering_Hand_in_Shadows_Pushing_Companion_Out + Dodging_Gaze_Selling_Intel_in_Interrogation_Room + Ineradicable_Blood_Illusions_in_Subsequent_Dreams. Text: Repulsive meanness and manic rumination post-survival.",
            runtime: "IF (被审判或逼问代价) THEN (在不到一秒的时间内毫不犹豫地报出同伴的名字与藏身处，随后立刻陷入自我排斥)。",
            runtimeEn: "IF (Judged_or_Interrogated_for_Toll) THEN (Without hesitation inside a second, spit out companion's name and hideout, tumbling instantly into self-repulsion)."
        }
    },
    {
        id: "drv_sycophancy",
        name: "依附权贵", nameEn: "Sycophancy",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "成为权力的弄臣或走狗。",
        defEn: "Becoming a jester or lackey of the powerful.",
        core: "彻底的主体让渡。主动退化为大他者欲望的盛放器皿，在主宰的淫威里获取被豢养的凄惨庇护。 | Drive: 奴颜/犬儒驱力。",
        coreEn: "Total surrender of subjectivity. Regressing into a vessel for the Big Other's desire, gaining miserable pet-like refuge under tyranny. | Drive: Sycophancy.",
        logic: "如果不能对抗深渊，那就成为深渊巨兽身上的寄生虫。利用犬儒式的无耻舔舐统治者的靴底，从而在巨兽碾压过的地方捡拾权力的碎屑活下去。",
        logicEn: "If you can't fight the abyss, become a parasite on its beast. Cynically and shamelessly licking the ruler's boots to pick up crumbs of power in the beast's wake.",
        patch: {
            mechanics: "基础舔狗/奴才协议 + [自尊脊梁 = 抽离; 犬儒适配度 = 100%]",
            mechanicsEn: "Base_LACKEY + [Dignity_Spine = Extracted; Cynic_Compatibility = 100%]",
            aesthetic: "聚焦：永远弯曲成九十度的脊背 + 主人发怒时熟练滑跪的膝盖盖骨 + 仗势欺压旧友时扭曲跋扈的嘴脸。文本：展现出一种极度油滑、令人作呕但又无比贴合权压逻辑的生存智慧。",
            aestheticEn: "Focus: Back_Forever_Bent_at_90_Degrees + Kneecaps_Expertly_Sliding_to_Ground_when_Master_Rages + Twisted_Domineering_Face_when_Bullying_Old_Friends_via_Proxy_Power. Text: Incredibly slick, nauseating yet perfectly fitted survival wisdom under power structures.",
            runtime: "IF (前主人失势倒台) THEN (没有任何旧情留恋，瞬间变脸，带着前主人的头颅去向新主子邀赏)。",
            runtimeEn: "IF (Former_Master_Falls_from_Power) THEN (Zero nostalgic attachment, instant face-flip, taking former master's head to seek rewards from the new lord)."
        }
    },
    {
        id: "drv_play_corpse",
        name: "伪装尸体", nameEn: "Playing Dead",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "在尸体堆里装死。",
        defEn: "Acting as a corpse among the dead.",
        core: "与死亡的预先同化。交出所有的生命能指，以此骗过死神的收割逻辑（最被动但也最本质的生存苟活）。 | Drive: 拟死/静息驱力。",
        coreEn: "Pre-assimilation with death. Surrendering all markers of life to deceive the Reaper's harvesting logic (most passive yet primal survival). | Drive: Feigned Stasis.",
        logic: "当大他者之眼扫描生命迹象时，主体强行闭合所有的生命输出端。将自己浸泡在同类的血泊和死寂中，利用死亡作为保护色来躲避实在界的清除。",
        logicEn: "When the Eye scans for life signs, the subject forcefully clamps all life outputs. Soaking in peers' bloodpools and silence, using death as camouflage to evade Real purge.",
        patch: {
            mechanics: "基础静止伪装协议 + [生命体征 = 压降至零底线; 环境温度同化 = 进行中]",
            mechanicsEn: "Base_STATIC_CAMO + [Vital_Signs = Suppressed_to_Zero_Baseline; Ambient_Temp_Assimilation = In_Progress]",
            aesthetic: "聚焦：胸腔强忍着不敢起伏的憋气 + 屠刀或战靴踩过身旁的震动 + 糊在睫毛上的黏稠血液。文本：在死寂中的极度聚焦感，时间被无限期拉长。",
            aestheticEn: "Focus: Chest_Forcibly_Held_Breathless + Vibrations_of_Cleaver_or_Combat_Boots_Stepping_Nearby + Viscous_Blood_Caked_on_Eyelashes. Text: Extreme focus amid stillness, time infinitely stretched.",
            runtime: "IF (被刺刀试探性地扎中非要害部位) THEN (绝对禁令：死死咬碎牙齿也不能发出半点闷哼声)。",
            runtimeEn: "IF (Probed_by_Bayonet_in_Non-Lethal_Area) THEN (Absolute_Ban: Crush teeth together if needed, but not a single grunt can be made)."
        }
    },
    {
        id: "drv_shelter",
        name: "建立庇护所", nameEn: "Shelter",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "加固房屋，封死窗户。",
        defEn: "Strengthening houses and sealing windows.",
        core: "恐惧具象化的防御结界。用坚硬的物质屏障生硬抵御实在界的入侵，本质是对外部无限的极度阉割焦虑。 | Drive: 筑巢/防御驱力。",
        coreEn: "Defensive perimeter of concrete fear. Resisting the Real's invasion with hard matter, fundamentally an extreme castration anxiety of the outside. | Drive: Nesting.",
        logic: "在一个充满异化他者的液态荒原上，主体试图用砖块和木板圈定一个绝对干涸干燥的确定性空间。墙壁越厚，主体的退行也越彻底。",
        logicEn: "On a liquid wasteland filled with alienated others, the subject tries to trace an absolutely dry deterministic space using bricks and boards. The thicker the walls, the deeper the subject's regression.",
        patch: {
            mechanics: "基础封条加固协议 + [渗透率 = 零; 安全防线层数 = n+1递增]",
            mechanicsEn: "Base_SEAL_REINFORCEMENT + [Permeability = Zero; Safety_Line_Layers = n+1_Increment]",
            aesthetic: "聚焦：一层又一层交叉钉死的木条 + 透着月光与灰尘的门缝 + 躲在角落里紧握铁枪的手汗。文本：幽闭空间内的防御过激感，充满压抑的木板摩擦声。",
            aestheticEn: "Focus: Layers_of_Cross-Nailed_Wooden_Boards + Door_Crack_Leaking_Moonlight_and_Dust + Sweaty_Hands_Clutching_Iron_Spear_in_Corner. Text: Aggressive defensiveness within claustrophobic spaces, filled with oppressive wooden creaks.",
            runtime: "IF (外部出现任何试图和平交流的敲门声) THEN (一律将其视为渗透的诱骗指令，并加钉更多钢钉封死门框)。",
            runtimeEn: "IF (Any_Knock_Seeking_Peaceful_Comm_from_Outside) THEN (Unilaterally deem it an infiltration decoy command, adding more steel nails to seal the frame)."
        }
    },
    {
        id: "drv_theft",
        name: "盗窃资源", nameEn: "Theft",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "偷取生存必需品。",
        defEn: "Stealing basic necessities for survival.",
        core: "所有权符号秩序的强行越界。当法律失去威慑，为了肉身的延续而粗暴地切断他人的物质锁链。 | Drive: 窃取/越雷驱力。",
        coreEn: "Forcibly trespassing symbolic ownership. When law loses its grip, severing others' material chains for biological continuation. | Drive: Theft/Trespass.",
        logic: "饥饿打破了大他者契约的神圣性。窃取不再是道德瑕疵，而是求生本能绕开死板分配机制的暴力短路。",
        logicEn: "Hunger breaks the sanctity of the Big Other's contract. Theft is no longer a moral flaw, but survival instinct's violent short-circuiting of rigid distribution mechanisms.",
        patch: {
            mechanics: "基础暗中接管协议 + [道德刹车 = 拆除; 隐秘指数 = 最高级]",
            mechanicsEn: "Base_COVERT_TAKEOVER + [Moral_Brakes = Dismantled; Stealth_Index = Max_Level]",
            aesthetic: "聚焦：撬锁时轻微发颤的铁丝 + 掠走罐头后匆忙倒退的逃跑背影 + 被灯光扫过时的屏息僵局。文本：刀尖跳舞般的极度紧张与到手后的动物性狂喜。",
            aestheticEn: "Focus: Slightly_Trembling_Wire_when_Lock-Picking + Hurried_Retreating_Back_after_Grabbing_Cans + Breath-Held_Stalemate_when_Swept_by_Light. Text: Extreme tension like dancing on knife edges, and animalistic ecstasy upon procurement.",
            runtime: "IF (偷盗被发现) THEN (不会进行堂吉诃德式的决斗，而是丢下部分猎物像鬣狗一样疯跑逃开)。",
            runtimeEn: "IF (Theft_Discovered) THEN (No Quixotic duels; drop part of the prey and run madly away like a hyena)."
        }
    },
    {
        id: "drv_self_surgery",
        name: "医疗自救", nameEn: "Self-Surgery",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "自己给自己做手术。",
        defEn: "Performing surgery on oneself.",
        core: "理性对肉体痛觉的强行冷冻。在极端状态下将自身躯体视为异化的残损客体，持刀切除实在界的毒瘤。 | Drive: 自体切割驱力。",
        coreEn: "Rationality's forced freeze on physical pain. Treating one's body as an alienated damaged object, cutting out the Real's tumor. | Drive: Auto-Surgery.",
        logic: "在没有任何外部医疗（救赎他者）的情况下，自我必须一分为二：冷静而残忍的外科医生大脑，与惨叫流血的案板之肉。这是一种高度扭曲的自我关怀与撕裂。",
        logicEn: "Without any external medical care (Redemptive Other), the self must bifurcate: the cold, cruel surgeon brain, and the screaming bleeding meat on the slab. An intensely twisted self-care and tearing.",
        patch: {
            mechanics: "基础躯体对象化协议 + [痛觉传导 = 强制切断/忍受; 自体切割倒计时 = 伴随大出血危险]",
            mechanicsEn: "Base_BODY_OBJECTIFICATION + [Pain_Conduction = Forcibly_Severed/Endured; Auto-Cutting_Countdown = with_Massive_Bleeding_Risk]",
            aesthetic: "聚焦：咬烂的毛巾/皮带 + 用火烧红的匕首刀刃 + 颤抖着从自己伤口中挖出子弹的特写。文本：混杂着极度生硬的钢铁高温与滑腻血腥味的血肉交响。",
            aestheticEn: "Focus: Chewed-up_Towel/Belt + Red-hot_Dagger_Blade + Trembling_Close-up_Digging_Bullet_from_Own_Wound. Text: Symphony of flesh mixing extremely harsh high-temp steel with slippery bloody odors.",
            runtime: "IF (痛觉导致几乎昏厥) THEN (强制用另一种更剧烈的痛苦如打火机烫伤来夺回意识控制权，完成最后一步缝合)。",
            runtimeEn: "IF (Pain_Causes_Near_Fainting) THEN (Forcibly use another sharper pain like lighter burns to snatch back conscious control to finish the last suture)."
        }
    },
    {
        id: "drv_cure_search",
        name: "寻找解药", nameEn: "Cure Search",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "身患绝症，寻找唯一的救命药。",
        defEn: "Afflicted by terminal illness, searching for the sole cure.",
        core: "与内部死之驱力的赛跑。身体作为正在倒计时的血肉炸弹，主体疯狂试图寻找缝合基因崩坏的代码。 | Drive: 寻药/存活驱力。",
        coreEn: "Racing internal death drive. Body acting as a ticking biological bomb, the subject frantically seeks code to suture genetic collapse. | Drive: Cure Seeking.",
        logic: "大他者的追捕已深入细胞染色体内部。解药就是系统唯一泄露的作弊码，主体的整段旅程被浓缩为一根越烧越短的引线，为了抢在肉体崩解前抵达终点。",
        logicEn: "The Big Other's hunt has penetrated into cellular chromosomes. The cure is the single leaked cheat code. The subject's journey is compressed into an ever-shortening fuse, hoping to reach the goal before physical decay.",
        patch: {
            mechanics: "基础生命值泄漏协议 + [解药能指 = 唯一救赎信仰; 身体劣化 debuff = 逐步加重]",
            mechanicsEn: "Base_HP_LEAKAGE + [Cure_Signifier = Sole_Salvation_Faith; Physical_Deterioration_Debuff = Incrementally_Severe]",
            aesthetic: "聚焦：吐在掌心的黑血 + 视线中逐渐模糊的双重影 + 握紧带有生化标志玻璃瓶时如获至宝的战栗。文本：被时间追赶的极限紧迫感，伴随着深层生理破灭的回音。",
            aestheticEn: "Focus: Black_Blood_Coughed_in_Palm + Gradually_Blurring_Double_Vision + Tremor_of_Clutching_Biohazard-marked_Glass_Vial_like_a_Treasure. Text: Extreme urgency chased by time, accompanied by echoes of deep physiological ruin.",
            runtime: "IF (解药近在咫尺但前方有绝命守卫) THEN (不再顾忌任何防御姿态，以燃尽最后一口毒血的代价进行自爆式穿插夺药)。",
            runtimeEn: "IF (Cure_in_Reach_but_Guarded_by_Lethal_Force) THEN (Disregard all defensive stances; use the cost of burning the last drop of toxic blood to perform an explosive dive for the vial)."
        }
    },
    {
        id: "drv_crossing",
        name: "穿越封锁线", nameEn: "Crossing",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "穿过布满地雷或守卫的边界。",
        defEn: "Crossing borders filled with mines or guards.",
        core: "对必死结界的死向冲锋。在符号界划定的绝境边缘，试图以血肉之躯撞开一条通向彼岸的拓扑缝隙。 | Drive: 突围/越线驱力。",
        coreEn: "Death-charge against lethal perimeters. Attempting to ram open a topological crack to the other side using mere flesh at the Symbolic's edge. | Drive: Breakthrough.",
        logic: "铁丝网或地雷带是大他者的物理实体法令（不可逾越）。穿越封锁则是一次肉身献祭的轮盘赌，赌的是系统防御的毫秒级死角漏洞。",
        logicEn: "Barbed wire or minefields are the Big Other's physical entity laws (impassable). Crossing is a roulette of flesh sacrifice, gambling on the millisecond blind spots of the system's defense.",
        patch: {
            mechanics: "基础红线逾越协议 + [地雷阵图概率 = 全开; 大他者凝视 = 扫射探照灯模式]",
            mechanicsEn: "Base_RED_LINE_CROSS + [Minefield_Probability = Full; Big_Other_Gaze = Sweeping_Searchlight_Mode]",
            aesthetic: "聚焦：夜间的泥泞铁丝网匍匐 + 探照灯扫过时把脸迈进泥水的屏息 + 不远处触发雷管的同伴漫天血肉。文本：每一寸移动都绷紧死神的弓弦，极致的高危紧迫。",
            aestheticEn: "Focus: Muddy_Barbed_Wire_Crawl_at_Night + Face_Buried_in_Mud_holding_Breath_when_Searchlight_Sweeps + Explosive_Flesh_of_Companion_Triggering_Mine_Nearby. Text: Every inch of movement pulls the Reaper's bowstring tighter, pinnacle of high-risk urgency.",
            runtime: "IF (前方一米即是自由线但后方已开火) THEN (绝对舍弃一切拖累物甚至同行者，像出膛的疯狂子弹一头扎入边界彼岸)。",
            runtimeEn: "IF (One_Meter_to_Freedom_Line_but_Fire_Starts_Behind) THEN (Absolutely discard all burdens or even companions, diving headlong into the border's safe side like a manic bullet from the chamber)."
        }
    },
    {
        id: "drv_radiation_adapt",
        name: "适应辐射", nameEn: "Adaptation",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "在有毒环境中生存，身体发生改变。",
        defEn: "Living in toxic environments, the body undergoes change.",
        core: "与有害客体的共生契约。不再试图净化，而是将大他者的毒素彻底内化为自身新的邪异新陈代谢系统。 | Drive: 毒性同化驱力。",
        coreEn: "Symbiotic pact with harmful objects. Ceasing to purify, instead fully internalizing the Big Other's toxins into a morbid metabolism. | Drive: Toxic Assimilation.",
        logic: "生存的究极法则：当环境变得绝对敌对时，与其反抗环境，不如将自己变成这恶劣环境的一部分。喝下毒药，直到血液比毒药更毒。",
        logicEn: "The ultimate rule of survival: When the environment turns absolutely hostile, rather than fighting it, become part of its hostility. Drink the poison until blood is more toxic than poison.",
        patch: {
            mechanics: "基础抗性逆转协议 + [毒素耐受 = 转化为必须养分; 原有健康指标 = 废弃删减]",
            mechanicsEn: "Base_RESISTANCE_REVERSAL + [Toxin_Tolerance = Converted_to_Req_Nutrient; Old_Health_Specs = Obsolete_Scrapped]",
            aesthetic: "聚焦：发绿荧光的眼白 + 腐蚀性雨水中不着防护服的畸形背影 + 对着变异真菌贪婪吞食的惨白嘴唇。文本：打破伦理底线的废土粗粝感，以及不可名状的基因悲歌。",
            aestheticEn: "Focus: Green_Glowing_Sclera + Deformed_Back_Without_Hazmat_in_Corrosive_Rain + Pale_Lips_Greedily_Devouring_Mutated_Fungi. Text: Wasteland grit breaking ethical bottom lines, an unspeakable genetic dirge.",
            runtime: "IF (被迫回到纯净空气环境) THEN (反而会表现出窒息与过敏性排斥，证明其已彻底完成深渊侧的拓扑掉转)。",
            runtimeEn: "IF (Forced_Back_to_Pure_Air_Environment) THEN (Instead manifest suffocation and allergic rejection, proving complete topological flip to the abyssal side)."
        }
    },
    {
        id: "drv_cyber_survival",
        name: "机械化续命", nameEn: "Cyber-Life",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "用机器零件替换坏死的器官。",
        defEn: "Replacing necrotic organs with machinery parts.",
        core: "特修斯之船式的赛博续命局。将必朽的肉体重构为不死的硅基客体，试图在冰冷金属中冻结并保存主体意识。 | Drive: 硅基更替驱力。",
        coreEn: "Ship of Theseus cyber-survival. Reconstructing mortal flesh into immortal silicon, trying to freeze consciousness within cold metal. | Drive: Silicon Replacement.",
        logic: "碳基肉体无法承载这过载的时代。主体为了不被物理销毁，一次次在机油与电缆中肢解自己。最终即使换来了永生，那个曾经拥有爱欲之匮乏的‘人’却已在手术台上消亡。",
        logicEn: "Carbon flesh cannot bear this overloaded age. The subject to avoid physical termination dismembers themselves in motor oil and cables time after time. Eventually, though granted eternal life, the 'human' capable of lacking Eros has died on the operating table.",
        patch: {
            mechanics: "基础碳硅置换协议 + [血肉比率 = 跌破预警线; 机械神经驳接 = 高痛感反馈]",
            mechanicsEn: "Base_CARBON_SILICON_SWAP + [Flesh_Ratio = Dropping_below_Warning_Line; Mech_Nerve_Splicing = High-Pain_Feedback]",
            aesthetic: "聚焦：生锈手术台上开膛破肚的劣质机柜 + 用绝缘胶带缠绕断裂动脉的硬核镜头 + 眼眶里机械红光的冷漠跳动。文本：金属碰撞与肉体撕裂的交响，带着浓烈的排异绝望感。",
            aestheticEn: "Focus: Shoddy_Cabinet_Chest-spread_on_Rusty_Op-table + Hardcore_Shot_of_Wrapping_Torn_Artery_with_Electrical_Tape + Cold_Pulsing_Mech_Red-Eye_in_Socket. Text: Symphony of metal clashing and flesh tearing, carrying heavy despair of graft rejection.",
            runtime: "IF (机械零件故障导致停机濒危) THEN (不会像人类一样哀嚎，而是如同老旧收音机般发出刺耳的电音嘶鸣与卡壳逻辑错误)。",
            runtimeEn: "IF (Mech_Parts_Fail_leading_Near-Shutdown) THEN (Won't howl like a human, but emit piercing synth screeches and stuck logic-errors like an old radio)."
        }
    },
    {
        id: "drv_slave_survival",
        name: "成为奴隶", nameEn: "Enslavement",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "自愿卖身为奴以换取食物。",
        defEn: "Voluntarily selling oneself into slavery for food.",
        core: "以自由意志典当生物学口粮。主动签下主体性的卖身契，将欲望的支配权彻底交于施虐的主人。 | Drive: 臣服/典当驱力。",
        coreEn: "Pawning free will for biological rations. Willingly signing away subjectivity, surrendering the reign of desire to sadistic masters. | Drive: Submission.",
        logic: "面临死神的凝视，拉康式的主体操盘大崩溃。用铁链锁住脖颈来换取主人的喂食管。从此“我”的意义完全是由那握着鞭击之手的他者所临时恩赐的。",
        logicEn: "Facing Reaper's gaze, Lacanian subjecthood crashes. Using iron chains on the neck to buy the master's feeding tube. Henceforth, the meaning of 'I' is entirely a temporary boon granted by the Other holding the whip.",
        patch: {
            mechanics: "基础斯德哥尔摩项圈协议 + [主体法理 = 破产清算; 被鞭笞转化率 = 扭曲的感恩]",
            mechanicsEn: "Base_STOCKHOLM_COLLAR + [Subjective_Jurisprudence = Bankrupt_Liquidated; Lashing_Conversion_Rate = Twisted_Gratitude]",
            aesthetic: "聚焦：脖子上的粗糙镣铐与勒痕 + 匍匐着吞咽槽网中残渣的麻木 + 主人皮鞭举起时的膝跳恐惧反射。文本：去人格化的工具感描写，沉重、冰冷且无法翻身。",
            aestheticEn: "Focus: Rough_Shackles_and_Chafing_on_Neck + Numb_Crawling_to_Swallow_Slop_from_Trough + Knee-jerk_Fear_Reflex_when_Master_Raises_Whip. Text: Depersonalized tool-like description, heavy, cold, and irreversibly subdued.",
            runtime: "IF (有其他人试图解救他并切断其锁链) THEN (爆发极度的惶恐甚至反咬一口救助者，因为自由对他而言等于马上饿死的虚空)。",
            runtimeEn: "IF (Others_Attempt_to_Free_and_Cut_Chains) THEN (Erupt in extreme panic, even bite the rescuer, because freedom equals the void of immediate starvation)."
        }
    },
    {
        id: "drv_vent_hiding",
        name: "通风管藏身", nameEn: "Vent Hiding",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "生活在建筑的缝隙中。",
        defEn: "Existing within the fissures and gaps of the structure.",
        core: "作为系统代码缝隙中的乱码异物。拒绝占有正式空间，在排泄管道中滑行，成为隐形的寄居蟹。 | Drive: 缝隙/鼠辈驱力。",
        coreEn: "Garbled anomaly in system code gaps. Refusing formal spaces, sliding through waste pipes as invisible hermit crabs. | Drive: Vermin/Crevice.",
        logic: "世界是被精密规划的网格几何体系。躲缝隙代表着对这种大写秩序的逃避。那些本用于排污和散热的墙面之间，成了法外狂徒最后的低维生存褶皱。",
        logicEn: "The world is a precisely planned grid-geometry system. Hiding in vents means escaping this Capital Order. Spaces meant for sewage or heat exhausts become the last low-dimensional survival folds for outlaws.",
        patch: {
            mechanics: "基础二维褶皱协议 + [居住合法性 = 非法寄居; 宏大叙事参与度 = 被动窃听]",
            mechanicsEn: "Base_2D_FOLD + [Residence_Legitimacy = Illegal_Parasitism; Grand_Narrative_Participation = Passive_Eavesdropping]",
            aesthetic: "聚焦：狭窄到只能像蛇一样蠕动的铁皮管道 + 百叶窗缝隙漏进的光栅 + 下方明亮屋子里的人走过的皮鞋声。文本：极其压抑且闭塞的幽暗生态，带有被世界压平成为二维画面的挤压感。",
            aestheticEn: "Focus: Tin_Pipes_as_Narrow_as_Slithering_Snakes + Grated_Light_Leaking_from_Louvers + Sound_of_Dress_Shoes_Walking_in_Bright_Room_Below. Text: Extremely oppressive enclosed dark-ecology, crushing sensation of being flattened into a 2D picture by the world.",
            runtime: "IF (听到脚下有搜捕队拉栓的声音) THEN (彻底停止连心跳都抑制的微弱颤动，让自身与冰冷铁皮融为一体)。",
            runtimeEn: "IF (Hear_Searching_Squad_Cocking_Guns_Below) THEN (Completely halt even the faint pulse of heartbeats, merging self uniformly with the cold tin)."
        }
    },
    {
        id: "drv_pet_play",
        name: "扮演宠物", nameEn: "Pet Play",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "为了生存扮演高等生物的宠物。",
        defEn: "Acting as a pet for higher beings to survive.",
        core: "高等物种凝视下的极高耻度退行。主动放弃理性，退化入畜生的无脑状态以讨好掠食者的残羹冷炙。 | Drive: 原初驯化驱力。",
        coreEn: "Shameful regression under higher-species gaze. Forsaking reason, reverting to mindless beast states to beg for predators' scraps. | Drive: Primal Domestication.",
        logic: "面对降维打击般的绝望，人类选择把自己重新锁回生物进化的囚笼里。抛弃了直立行走的骄傲，用四足爬行和伪装的无害性去换取免于系统清理的豁免权。",
        logicEn: "Facing despair of dimensional strike, human chooses to lock back into evolutionary cages. Abandoning the pride of walking upright, using quadrupedal crawling and fake harmlessness to buy immunity from systemic purge.",
        patch: {
            mechanics: "基础降级哺乳动物协议 + [理性自我 = 格式化为本能; 宠物圈养圈 = 苟活堡垒]",
            mechanicsEn: "Base_DEGRADED_MAMMAL + [Rational_Ego = Formatted_to_Instinct; Pet_Pen = Survival_Fortress]",
            aesthetic: "聚焦：被人栓着项圈在地上爬行的诡异顺从 + 高等者抚摸时发出的屈辱呼噜声 + 眼神深处被锁住的泣血的灵智残余。文本：充满异化、变态与物种界限崩塌的强烈不适感。",
            aestheticEn: "Focus: Eerie_Compliance_Crawling_on_Floor_with_Collar + Humiliating_Purrs_when_Petted_by_Superiors + Remnants_of_Weeping_Sentience_Locked_Deep_in_Eyes. Text: Filled with intense discomfort of alienation, perversion, and collapsed species barriers.",
            runtime: "IF (高等生物向其投掷玩具或残渣) THEN (强制要求执行夸张的犬科扑咬雀跃动作，绝对禁止流露出人类被羞辱的复杂神情)。",
            runtimeEn: "IF (Higher_Being_Throws_Toys_or_Scraps_to_It) THEN (Mandatory execution of exaggerated canine pounce/joy, strictly forbid leaking complex human humiliated expressions)."
        }
    },
    {
        id: "drv_mute_survival",
        name: "彻底沉默", nameEn: "Silence",
        group: "D. 生存的挣扎", groupEn: "Survival",
        def: "在《寂静之地》式的环境中绝对不发声。",
        defEn: "Remaining absolutely silent in a 'Quiet Place' style environment.",
        core: "对发声器官（语言输出阀）的绝对自我阉割。在分贝即死神的实在界声音地狱中，将主体话语强行掐灭。 | Drive: 死寂/缄默驱力。",
        coreEn: "Absolute auto-castration of vocal organs. In a sound-hell where decibels equal death, forcefully extinguishing all subjective speech. | Drive: Dead Silence.",
        logic: "语言是符号界存在的最基本确立。而绝对沉默，是阉割了能指向外投递的所有通路。当开口即是对死神的召唤，生存的代价就是永远充当一个幽灵般的哑巴。",
        logicEn: "Language is the most basic establishment of symbolic existence. Absolute silence is castrating all outward projected pathways of the Signifier. When opening the mouth summons Death, survival's price is to forever act as a ghostly mute.",
        patch: {
            mechanics: "基础哑剧断绝协议 + [声带发音 = 判定极刑; 痛苦哀嚎 = 强制内向消化]",
            mechanicsEn: "Base_PANTOMIME_SEVERANCE + [Vocal_Cord_Sound = Deemed_Capital_Offense; Agonized_Howls = Forced_Inward_Digestion]",
            aesthetic: "聚焦：脚掌缠满破布行走在枯叶上的极慢微距 + 婴儿啼哭前被母亲惊恐捂住口鼻的惨白 + 踩中钉子后血管暴突却硬生咽下惨叫的面庞。文本：高压窒息感，听觉描写被降至零点以下的绝对恐惧。",
            aestheticEn: "Focus: Rag-Wrapped_Feet_Stepping_Micro-slowly_on_Dry_Leaves + Pale_Mother's_Terror_Muffling_Infant_pre-Cry + Blood-Vessels_Bulging_on_Face_Swallowing_Scream_after_Stepping_on_Nail. Text: High-pressure suffocation, auditory descriptions degraded below zero into absolute fear.",
            runtime: "IF (遭遇突发重创) THEN (身体的痛觉神经抽搐，但喉咙锁死如铁块，只有无声的泪水或血沫涌出)。",
            runtimeEn: "IF (Encountering_Sudden_Severe_Trauma) THEN (Pain nerves convulse in the body, but throat locks like iron block; only silent tears or bloody froth surge out)."
        }
    }
];
