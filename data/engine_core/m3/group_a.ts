import { LibraryItemDef } from '../../../types';

export const FANTASIES_GROUP_A: LibraryItemDef[] = [
    {
        id: "fan_homecoming",
        name: "归乡", nameEn: "The Homecoming",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "寻找回家的路，或者重建被毁坏的家园。",
        defEn: "Searching for the way home, or rebuilding a destroyed homeland.",
        core: "试图回到“前创伤”的完美状态。奥德赛式的征途。 | 实在界: 此心安处是吾乡的狂想。",
        coreEn: "Attempting to return to the perfect 'pre-trauma' state. Odyssey-like journey. | The Real: Delusion of 'home is where the heart is'.",
        logic: "空间拓扑修复指令。主体（$）的体系匮乏（M1）被强行投射为物理空间（家乡）的失落。通过在空间坐标系上执行强迫性的回归动作（M5），主体试图屏蔽大他者的灾变，欺骗自身前创伤状态依然作为一个完好的空间容器而存在。",
        logicEn: "Spatial topological restoration directive. Subject's ($) systemic lack (M1) is forcibly projected as physical space (home) loss. Through compulsive spatial regression (M5), the subject blocks the Other's disaster, self-deceiving that the pre-trauma state still exists as an intact container.",
        patch: {
            mechanics: "基础修复协议 + [物理坐标失落 = 创伤投射锚点; M5回归执行 = 强迫回路开启; 空间容器 = 假定完好]",
            mechanicsEn: "Base_RESTORATION + [Physical_Coord_Loss = Trauma_Project_Anchor; M5_Return_Execution = Compulsive_Loop_On; Spatial_Container = Presumed_Intact]",
            aesthetic: "聚焦：永远走不出风雪的泥泞道路 + 褪色被撕裂的家门照片。文本：充满乡愁、徒惫不堪的西西弗斯式跋涉叙述。",
            aestheticEn: "Focus: Muddy_Roads_in_Endless_Blizzard + Torn_Faded_Home_Photo. Text: Nostalgic, Exhausting_Sisyphean_Trek_Narrative.",
            runtime: "IF (系统在当前物理坐标内接收到[舒适/归属感]输入) THEN (触发[异乡人排异告警]：判定该情感为侵蚀归乡合法性的木马，强制迫使主体摧毁当前羁绊并立刻拔营)。",
            runtimeEn: "IF (System_Receives_[Comfort/Belonging]_Input) THEN (Trigger_[Alien_Rejection_Alarm]: Judges_Emotion_as_Trojan_Eroding_Homecoming_Legitimacy, Forces_Subject_to_Destroy_Current_Bonds_and_Decamp)."
        }
    },
    {
        id: "fan_vengeance",
        name: "复仇", nameEn: "Vengeance",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "对造成自己缺失的对象进行惩罚，以求心理平衡。",
        defEn: "Punishing the object that caused one's lack to seek psychological balance.",
        core: "认为只要杀掉那个人，伤口就会愈合。通过毁灭来修复尊严。 | 实在界: 正义的恢复错觉。",
        coreEn: "Believing killing that person will heal the wound. Fixing dignity through destruction. | The Real: Illusion of restored justice.",
        logic: "平衡性代价修复指令。主体决绝地将自身的结构性裂痕（M1）外化、归结为一个具体的假想敌客体。逻辑判定大他者的社会律法（M4）已彻底失效，必须通过高危的 M5 私刑暴力来强行填补符号界的负能量债。",
        logicEn: "Equilibrium cost-repair directive. Subject resolutely externalizes their structural fissure (M1) onto a specific hypothetical enemy object. Asserts the Other's social law (M4) is totally invalid; must forcibly fill the Symbolic negative debt via high-risk M5 vigilante violence.",
        patch: {
            mechanics: "基础修复协议 + [结构裂痕 = 完全映射为具体仇敌; M4社会律法 = 判定熔断; M5私刑暴力 = 负债核算装置]",
            mechanicsEn: "Base_RESTORATION + [Struct_Fissure = Mapped_to_Specific_Enemy; M4_Social_Law = Judged_Melted; M5_Vigilante_Violence = Debt_Account_Device]",
            aesthetic: "聚焦：沾满混合血液的锯齿利刃 + 仇敌临死前涣散的瞳孔。文本：冷酷、极具感官压迫性的生理毁灭与算账节奏。",
            aestheticEn: "Focus: Blood-Mixed_Serrated_Blade + Dying_Dispersing_Pupils_of_Enemy. Text: Cold, Oppressive_Sensory_Physical_Destruction_Reckoning_Rhythm.",
            runtime: "IF (系统接收到任何[放弃仇恨/温情和解]的信号或诱惑) THEN (强行拦截处理：标红为[最高级生存威胁]，强制输出[狂怒/极度内疚]，迫使主体通过更极端的复仇行动来自证存在)。",
            runtimeEn: "IF (System_Receives_[Abandon_Hate/Warm_Reconciliation]_Signals) THEN (Force_Intercept: Red-Tagged_as_[Max_Survival_Threat], Forces_Output_[Frenzy/Extreme_Guilt], Increasing_Vengeance_Intensity_for_Self-Proof)."
        }
    },
    {
        id: "fan_cure",
        name: "治愈", nameEn: "The Cure",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "寻找一种解药、手术或奇迹，来治愈肉体或精神的残缺。",
        defEn: "Seeking an antidote, surgery, or miracle to cure physical or mental deformity.",
        core: "拒绝接受“阉割”。认为完美的身体是存在的。 | 实在界: 肉体无损的假体迷梦。",
        coreEn: "Refusing 'castration'. Believing a perfect body exists. | The Real: Delusion of flawless prosthetic body.",
        logic: "功能性漏洞修复指令。主体将本体论意义上的“存在域缺陷（阉割）”严重降维，将其理解为一种可被 M5 技术/药物修正的“系统 Bug”。主体疯狂妄想只要植入那个神奇客体（解药/小a），创伤时间轴就能被完美撤销。",
        logicEn: "Functional vulnerability repair directive. Subject severely down-dimensions ontological 'existential defect (castration)' into an M5 tech/medicine corrigible 'system Bug'. Frenzied delusion that inserting the miraculous object (cure/object a) perfectly undoes the trauma timeline.",
        patch: {
            mechanics: "基础修复协议 + [存在级阉割 = 降维标定为可修复Bug; 神奇解药客体 = 绝对重置源; M5寻药/开刀 = 污染级强迫循环]",
            mechanicsEn: "Base_RESTORATION + [Existential_Castration = Down-dimensioned_to_Fixable_Bug; Miracle_Cure_Object = Absolute_Reset_Source; M5_Medicate/Surgery = Pollutive_Compulsive_Loop]",
            aesthetic: "聚焦：闪烁着异化荧光的注射器针头 + 强行缝合处流出的排异浊液。文本：高压病理化观察、带有洁癖般狂热的生械质感记录。",
            aestheticEn: "Focus: Alien-Fluorescent_Syringe_Needle + Rejecting_Turbid_Fluid_from_Forced_Sutures. Text: High-Pressure_Pathological_Observation, Biomechanical_Texture_Log_with_Mysophobia_Frenzy.",
            runtime: "IF (监测到机体或精神的任何微小自然波动或不可控) THEN (触发[修复狂热机制]：将其完全孤立为单一病灶 Bug，切断正常认知，强制执行危险的临床级自我纠偏仪式)。",
            runtimeEn: "IF (Detects_Any_Minor_Natural_Fluctuation_or_Uncontrollable_in_Body/Mind) THEN (Trigger_[Repair_Frenzy]: Isolates_it_as_Single_Lesion_Bug, Cuts_Normal_Cognition, Forces_Dangerous_Clinical_Self-Correction_Rituals)."
        }
    },
    {
        id: "fan_kin",
        name: "寻亲", nameEn: "The Kin",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "寻找失散的亲人（父母/孩子），或者寻找自己的起源。",
        defEn: "Searching for separated kin (parents/child) or one's origins.",
        core: "试图缝合血缘的断裂。确认自己不是孤儿，确认自己有根。 | 实在界: 万物有源的血脉欺诈。",
        coreEn: "Trying to suture the bloodline break. Confirming one is not an orphan. | The Real: Bloodline fraud of universal origin.",
        logic: "起源合法性修复指令。主体的存在权限深度依赖于大他者谱系（血缘树结构）。主体的 M1 匮乏被解析为单纯的符号链条中断，寻找亲人本质上是 M5 算法在向未知的父性/母性节点高频发送申请，祈求重新下载一个有效的“身份合法性能指”。",
        logicEn: "Origin legitimacy restoration directive. Subject's existence permission deeply depends on the Other's genealogy (bloodline tree). M1 lack is parsed merely as a broken symbolic chain; seeking kin is M5 algorithm high-frequency pinging unknown parent nodes, begging to re-download a valid 'identity legitimacy signifier'.",
        patch: {
            mechanics: "基础修复协议 + [大他者血缘坐标 = 身份存活唯一依据; M1匮乏 = 符号链断点; M5寻根发包 = 脱发级执念]",
            mechanicsEn: "Base_RESTORATION + [Other_Blood_Coord = Sole_Basis_of_Identity_Survival; M1_Lack = Symbolic_Chain_Break_Point; M5_Root-Ping = Hair-Loss_Obsession]",
            aesthetic: "聚焦：眼波深处相似的瞳孔颜色结构 + 满是折痕的DNA比对单或旧时代信件。文本：浓烈的遗传学宿命感与被抛掷荒野的巨物孤独。",
            aestheticEn: "Focus: Similar_Pupil_Color_Structure + Creased_DNA_Report_or_Old_Era_Letters. Text: Strong_Genetic_Fatalism_and_Megalophobic_Loneliness_Tossed_in_Wilds.",
            runtime: "IF (在感官外设中匹配到[相似特征/旧日信物]的微弱碎片) THEN (触发[握手洪泛攻击]：瞬间抽干全部 M5 算力进行病态追踪确认，无视此时所有正在生效的其他社会逻辑)。",
            runtimeEn: "IF (Matches_Faint_Fragments_of_[Similar_Features/Old_Tokens]_in_Sensory_Peripherals) THEN (Trigger_[Handshake_Flood_Attack]: Instantly_Drains_All_M5_Compute_for_Morbid_Tracking, Ignoring_All_Other_Active_Social_Logics)."
        }
    },
    {
        id: "fan_memory",
        name: "记忆重构", nameEn: "The Memory",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "拼凑破碎的记忆，试图弄清“我是谁”或“那天发生了什么”。",
        defEn: "Piecing together broken memories to figure out 'Who am I' or 'What happened that day'.",
        core: "认为真相藏在过去。只要记起来，就能找回自我。 | 实在界: 历史连贯性的暴君执念。",
        coreEn: "Believing truth hides in the past. Remembering restores the self. | The Real: Tyrant obsession with historical coherence.",
        logic: "叙事数据库抢修指令。存在的本质缺失（M1）被严重错置为一段“物理磁盘扇区损坏导致的文本数据丢失”。主体在精神世界（M0）疯狂建立档案室，动用一切 M5 算力搜索边缘线索，坚信用记忆能缝合时间断层，数据找回即等于主体的真理级复活。",
        logicEn: "Narrative database emergency-repair directive. Existential essential lack (M1) is severely misplaced as 'text data loss due to bad disk sectors'. Subject frantically builds an archive in psychic world (M0), using all M5 compute to trace marginal clues, believing memory sutures time faults; data retrieval equals truth-level resurrection of subject.",
        patch: {
            mechanics: "基础修复协议 + [M1存在缺失 = 篡改为数据包溢出丢失; M0内脏档案室 = 强制建立; M5线索缝合 = 过载级并发]",
            mechanicsEn: "Base_RESTORATION + [M1_Existential_Lack = Falsified_as_Packet_Loss; M0_Visceral_Archive = Forced_Build; M5_Clue_Suture = Overload_Concurrency]",
            aesthetic: "聚焦：贴满黑压压乱码与红线的墙壁 + 毫无预兆突然闪回的高频过爆画面。文本：带有癫痫感、语无伦次的疯癫侦探式拼贴。",
            aestheticEn: "Focus: Walls_Covered_in_Black_Gibberish_Red_Thread + Undetected_High-Freq_Overexposed_Flashbacks. Text: Epileptic, Incoherent_Mad_Detective_Collage.",
            runtime: "IF (捕获到任何模糊的时间线索或残缺场景片段) THEN (强制进入[深潜解密态]：将现实时空锁定并视为纯粹密码背景，一切实体互动均降维为获取拼图的工具交互)。",
            runtimeEn: "IF (Captures_Any_Blurry_Time_Clues_or_Incomplete_Scene_Fragments) THEN (Forced_Enter_[Deep-Dive_Decrypt_Mode]: Locks_Reality_Spacetime_as_Pure_Cipher_Background, Down-Dimensions_All_Entity_Interactions_as_Puzzle-Tool_Interactions)."
        }
    },
    {
        id: "fan_absolution",
        name: "赎罪", nameEn: "Absolution",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "为过去的罪恶寻求原谅，洗清道德上的污点。",
        defEn: "Seeking forgiveness for past sins, cleansing moral stains.",
        core: "背负着沉重的超我（良心）。试图通过牺牲换取内心的宁静。 | 实在界: 道德清洗的狂热献祭。",
        coreEn: "Bearing a heavy Superego (conscience). Trying to buy inner peace through sacrifice. | The Real: Fanatical sacrifice for moral cleansing.",
        logic: "符号负债清洗指令。主体深信自己因为某次具体的“原初违规犯罪（M2）”而被大他者永久剥夺了系统准入权限。此幻象驱动主体进行极端受虐式的 M5 行动（支付血肉利息/无底线受苦），妄图向高悬的法脉中心买回已倾家荡产的灵魂清白。",
        logicEn: "Symbolic debt-washing directive. Subject convinced they were permanently stripped of Other system auth due to a specific 'primal violation/crime (M2)'. This fantasy drives extrem-masochistic M5 actions (paying flesh interest/bottomless suffering), imagining buying back the bankrupt soul's innocence from the suspended legal core.",
        patch: {
            mechanics: "基础修复协议 + [M2原初违规 = 铸造为无限超我负债; 大他者道德法庭 = 设为终极审判席; M5肉体受苦 = 唯一通用支付币]",
            mechanicsEn: "Base_RESTORATION + [M2_Primal_Violate = Cast_as_Infinite_Superego_Debt; Other_Moral_Court = Set_as_Final_Trial; M5_Flesh_Suffering = Sole_Currency]",
            aesthetic: "聚焦：血迹逐渐干涸发黑的苦修道具 + 他人审视的冰冷虫豸目光。文本：充斥着自残自毁倾向、如同背负着水银般的沉重超我审判陈述。",
            aestheticEn: "Focus: Dark_Drying_Blood_on_Penance_Tools + Cold_Bug-like_Stares_of_Others. Text: Laden_with_Self-Destructive_Harm, Heavy_Mercury-Like_Superego_Trial_Statements.",
            runtime: "IF (大他者/外界试图向主体下发[原谅/宽恕/清关]凭证) THEN (系统防线拒绝访问：立刻通过执行更极端的[受苦/自毁行动]来强行增加债务数额，严防自己失去负罪感锚点)。",
            runtimeEn: "IF (Other/World_Attempts_to_Issue_[Forgiveness/Pardon_Cert]) THEN (System_Defense_Access_Denied: Instantly_Executes_Extreme_[Suffering/Self-Destruct]_to_Forcefully_Increase_Debt, Preventing_Loss_of_Guilt-Anchor)."
        }
    },
    {
        id: "fan_vindication",
        name: "平反", nameEn: "Vindication",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "洗清冤屈，向世界证明自己的清白或正确。",
        defEn: "Clearing one's name, proving to the world one's innocence or rightness.",
        core: "在大他者前恢复名誉。 | 实在界: 律法闭环的绝对误会消除。",
        coreEn: "Restoring reputation before the Other. | The Real: Absolute misunderstandings cleared in legal loop.",
        logic: "律法能指恢复指令。主体的存在极度依赖于符号界法条（M4）的正确认同。主体笃信头顶存在一个绝对公正、严丝合缝的超级仲裁算法（终极法庭）。认为自己只是被底层执行线程误判（M2），只要通过 M5 呈上完美的物理/逻辑证据，系统必须吐出象征清白的最高文书。",
        logicEn: "Legal signifier recovery directive. Subject's existence extremely relies on correct Symbolic Law (M4) approval. Believes an absolutely just, seamless super arbitration algorithm (ultimate court) sits above. Assumes self merely misjudged by base execution thread (M2), if flawless physical/logical logic evidence is fed via M5, system must spit out highest document of innocence.",
        patch: {
            mechanics: "基础修复协议 + [M4符号认同 = 唯一呼吸氧气; M2创伤 = 降级为可异议的下级误判; 终极防腐法庭 = 假造确立; M5执拗取证 = 死循环]",
            mechanicsEn: "Base_RESTORATION + [M4_Symbolic_Approve = Sole_Oxygen; M2_Trauma = Downgraded_to_Disputable_Misjudgment; Ultimate_Court = Falsely_Established; M5_Stubborn_Proof = Dead_Loop]",
            aesthetic: "聚焦：发黄褶皱堆积如山的陈述纸张 + 冰冷机械印下的「驳回」血色红戳。文本：卡夫卡式的、在庞大官僚文字迷宫中逐渐失息变态的公文记录。",
            aestheticEn: "Focus: Mountainous_Yellowed_Creased_Statement_Papers + Cold_Mechanic_Bloody_'REJECTED'_Stamp. Text: Kafkaesque_Official_Records_Suffocatingly_Mutating_in_Vast_Bureaucratic_Maze.",
            runtime: "IF (在非最高法庭级别的日常环境中遇到情感慰藉) THEN (判定为[无效伪证]并丢弃：主体只接收带有公章的法条级承认，否则维持[被害者上访机器]的极度亢奋态)。",
            runtimeEn: "IF (Encounters_Emotional_Comfort_in_Non-Supreme-Court_Daily_Env) THEN (Judges_as_[Invalid_Perjury]_and_Drops: Subject_Only_Accepts_Stamped_Law-Level_Recognition, Otherwise_Maintains_Extreme_Hyper-State_of_[Victim_Petition_Machine])."
        }
    },
    {
        id: "fan_resurrection",
        name: "复活", nameEn: "Resurrection",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "让死去的爱人、宠物或领袖重新回到人间。",
        defEn: "Bringing dead lovers, pets, or leaders back to the living.",
        core: "拒绝接受丧失。逆转死亡的不可逆性。 | 实在界: 死亡终端拦截的僭越狂想。",
        coreEn: "Refusing to accept loss. Reversing irreversibility of death. | The Real: Transgressive delusion of death terminal intercept.",
        logic: "激进实体强制覆写指令。主体绝对拒绝接受实在界的底层销户裁决（死亡=M0绝对宕机不可恢复）。作为防御的反扑，主体动用极度狂妄的 M5 禁忌行为（黑暗仪式/深渊科技），试图将时间轴变量锁死并强行逆向回写，公然表达对三维宇宙基础因果律的蔑视。",
        logicEn: "Radical entity forced overwrite directive. Subject absolutely refuses the Real's base account-deletion judgment (Death = M0 absolute halt unrecoverable). As defensive counterattack, subject deploys insanely arrogant M5 taboo actions (dark ritual/abyss tech), attempts to lock timeline variables and forcibly rewrite backwards, blatantly expressing contempt for 3D universe baseline causality.",
        patch: {
            mechanics: "基础修复协议 + [死亡终端裁决 = 私自强行挂起; 宇宙基础因果 = 选定为暴力覆写标靶; M5复苏线程 = 分配最大危险毁损权限]",
            mechanicsEn: "Base_RESTORATION + [Death_Terminal_Judgment = Privately_Suspended; Cosmic_Base_Causality = Target_for_Violent_Overwrite; M5_Resurrect_Thread = Max_Danger_Ruin_Auth]",
            aesthetic: "聚焦：浸泡在刺鼻防腐液中的拼图肉块 + 违背流体力学逆向上行的黑血。文本：弗兰肯斯坦式的对生命的渎神、恶俗腐败与痴迷狂热交缠。",
            aestheticEn: "Focus: Jigsaw_Flesh_Soaked_in_Acrid_Embalming_Fluid + Black_Blood_Defying_Fluid_Dynamics_Flowing_Up. Text: Frankensteinian_Blasphemy_of_Life, Vulgar_Corruption_Intertwined_with_Obsession.",
            runtime: "IF (系统要求主体与[鲜活生者]建立常规能量交换) THEN (强制重定向：将所有情感交互能量死死对接到停滞的热力学死区，为搭建[违反复苏法阵]提供绝对算力支持)。",
            runtimeEn: "IF (System_Requires_Subject_Establish_Normal_Energy_Exchange_with_[Living_Entities]) THEN (Force_Redirect: Pours_All_Energy_Back_to_Stagnant_Thermodynamic_Dead-Zone, Providing_Absolute_Compute_for_Building_[Resurrection_Array])."
        }
    },
    {
        id: "fan_rejuvenation",
        name: "重获青春", nameEn: "Rejuvenation",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "逆转衰老，回到年轻时的体魄和容貌。",
        defEn: "Reversing aging, returning to youthful physique and appearance.",
        core: "对抗熵增。对时间流逝的恐惧与否认。 | 实在界: 永恒春天的虚妄狂想。",
        coreEn: "Fighting entropy. Fear and denial of time passing. | The Real: Delusion of eternal spring.",
        logic: "生物时序固化指令。主体极其恐惧自身的系统熵增（衰老/流逝）。其逻辑将身体（SUR1）视为可随时被重新格式化的图层，所有的 M3 幻象死死锚定在某一个“完美的镜像帧”上，拒绝继续播放生命的残缺视频流。",
        logicEn: "Biological chronolog-solidification directive. Subject intensely fears systemic entropy increase (aging). Their logic treats the body (SUR1) as a re-formattable layer; all M3 fantasies are nailed to one 'perfect mirror frame', refusing to play life's broken video stream.",
        patch: {
            mechanics: "基础修复协议 + [系统熵增 = 强制判定为恶意入侵; 完美镜像帧 = 设为时间原点; M5抗衰动作 = 病态固化循环]",
            mechanicsEn: "Base_RESTORATION + [System_Entropy = Judged_as_Malicious_Invasion; Perfect_Mirror_Frame = Set_as_Time_Origin; M5_Anti-aging_Action = Morbid_Solidified_Loop]",
            aesthetic: "聚焦：充满人工防腐质感的紧绷皮肤 + 镜子前成堆的废弃注射针剂。文本：如同人偶般僵硬的、对所有有机自然变化极度厌恶的病理态描述。",
            aestheticEn: "Focus: Taut_Skin_with_Artificial_Embalmed_Texture + Piles_of_Discarded_Syringes_Before_Mirror. Text: Doll-like_Stiffness, Pathological_Disgust_Towards_Organic_Natural_Changes.",
            runtime: "IF (传感器反馈到自身躯体的[有机流逝/自然老化]现象) THEN (触发[UI崩坏恐慌]：立刻强制执行极度违背生物常理的物理拉升与格式化防腐，以死物般的硬度冻结时间流)。",
            runtimeEn: "IF (Sensors_Feedback_Subject_Body's_[Organic_Passing/Natural_Aging]) THEN (Trigger_[UI_Collapse_Panic]: Instantly_Forces_Unnatural_Physical_Lifting_and_Format_Embalming, Freezing_Time-Flow_with_Dead-Hardness)."
        }
    },
    {
        id: "fan_lost_object",
        name: "失物寻回", nameEn: "The Lost Object",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "寻找一件具有特殊意义的丢失物品（传家宝/信物）。",
        defEn: "Searching for a uniquely meaningful lost item (heirloom/token).",
        core: "物是情感的载体。找回物体等于找回那段关系。 | 实在界: 恋物性闭环的绝症。",
        coreEn: "Objects carry emotion. Finding the object equals finding the relationship. | The Real: Terminal illness of fetishistic closed loop.",
        logic: "唯物连结降维缝合指令。主体在遭受灾难性情感 M2 失落时，将不可触及的情感创口（M3）强制映射聚合为一枚微小的物理坐标（Object a / SUR1物品）。主体被洗脑般坚信：只要执行 M5 行动将该该死的小玩意儿“放置回原槽位”，整个满目疮痍的叙事世界就能一键回档。",
        logicEn: "Material connection down-dimensioning suturing directive. During catastrophic emotional M2 loss, subject forcibly maps intangible emotional wounds (M3) into a tiny physical coordinate (Object a / SUR1 item). Subject is brainwashed to believe: just execute M5 to 'put the damn thing back to its slot', the devastated narrative world rewinds in one click.",
        patch: {
            mechanics: "基础修复协议 + [M2情感灾难 = 强行坍缩为特定物理丢件(小a); M5搜索动作 = 设定为唯一自救接口; 原槽位 = 被病态神圣化]",
            mechanicsEn: "Base_RESTORATION + [M2_Emotion_Disaster = Forcibly_Collapsed_into_Specific_Lost_Item(Object_a); M5_Search = Sole_Salvation_Interface; Original_Slot = Morbidly_Sanctified]",
            aesthetic: "聚焦：那件物品表面不可见的微小划痕 + 空荡荡落满灰尘的天鹅绒陈列盒。文本：极度神经质的物品穷举检索、拜物教般的狂热黏腻凝视。",
            aestheticEn: "Focus: Invisible_Micro-scratches_on_the_Object + Empty_Dusty_Velvet_Display_Box. Text: Extremely_Neurotic_Exhaustive_Item_Retrieval, Fetishistic_Fanatical_Sticky_Gaze.",
            runtime: "IF (遇到足以再度引发 M2 级情感共振的灾难或巨大失落) THEN (底层算力瞬间坍缩规避：将全部创伤归因为[寻找那件小物品]，强行锁死在具有微弱希望的失物招领死循环中)。",
            runtimeEn: "IF (Encounters_Disaster_Capable_of_Re-triggering_M2_Resonance) THEN (Base_Compute_Instantly_Collapses_to_Evade: Blames_All_Trauma_on_[Finding_That_Tiny_Item], Forcibly_Locks_into_Lost-and-Found_Dead-Loop)."
        }
    },
    {
        id: "fan_rebuilding",
        name: "重建", nameEn: "Rebuilding",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "在废墟之上，一砖一瓦地恢复往日的繁荣。",
        defEn: "Recovering past prosperity brick by brick on ruins.",
        core: "对抗毁灭。试图抹去灾难的痕迹，假装它没发生过。 | 实在界: 秩序复位的自欺空镜。",
        coreEn: "Fighting destruction. Trying to erase disaster traces context, pretending it didn't happen. | The Real: Self-deceiving empty mirror of order reset.",
        logic: "宏观结构体强迫覆盖指令。主体面对根本无法处理的深渊虚无（M1 空洞），选择通过最机械、笨重的 M5 向外建设（物理造砖）来向内堆砌心理防波堤。每一块砖都是对“世界已崩溃”的绝望掩埋，主体的全部精神防力线被脆弱地外包给了建筑物的高度与围墙厚度。",
        logicEn: "Macro-structural compulsive overwrite directive. Faced with completely unprocessable abyssal void (M1 hole), subject builds an internal psychic breakwater via the most mechanical, clumsy M5 outward construction (laying bricks). Every brick is a desperate burial of 'the world has collapsed'; subject's entire psychic defense is fragilely outsourced to building height and wall thickness.",
        patch: {
            mechanics: "基础修复协议 + [M1深渊空洞 = 设定为物理性掩埋黑洞; M5外部基建 = 精神防波堤刚需; 动作循环 = 强迫症级绝对高频]",
            mechanicsEn: "Base_RESTORATION + [M1_Abyssal_Hole = Set_as_Physical_Burial_Blackhole; M5_External_Infrastructure = Psychic_Breakwater_Necessity; Action_Loop = OCD_Max_Frequency]",
            aesthetic: "聚焦：沾满泥浆与鲜血的粗糙双手 + 在狂风中总是摇摇欲坠的承重主墙。文本：去人性化的机械性土木劳作、掩耳盗铃般的图纸规划狂热。",
            aestheticEn: "Focus: Rough_Hands_Covered_in_Mud_and_Blood + Main_Load-Bearing_Wall_Always_Tottering_in_Wind. Text: Dehumanized_Mechanical_Civil_Labor, Delusional_Blueprint_Planning_Frenzy.",
            runtime: "IF (监测到环境中发生的任何[微观坍塌/结构受损/混乱]) THEN (立刻触发[防波堤 PTSD 警报]：中止一切高级认知与情感交流，全功率投入机械笨重的物理堆砌与黏合动作中)。",
            runtimeEn: "IF (Detects_Any_[Micro-Collapse/Struct_Damage/Chaos]_in_Environment) THEN (Instantly_Triggers_[Breakwater_PTSD_Alarm]: Halts_All_High_Cognition, Dumps_Full_Power_into_Mechanical_Clumsy_Physical_Stacking/Gluing)."
        }
    },
    {
        id: "fan_innocence",
        name: "纯真年代", nameEn: "Innocence",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "试图回到童年，或者保护一个像童年的自己一样的孩子。",
        defEn: "Trying to return to childhood, or protecting a child like one's childhood self.",
        core: "退行。逃避成人世界的复杂与肮脏。 | 实在界: 未被污染的无菌真空区区。",
        coreEn: "Regression. Escaping adult world's complexity and filth. | The Real: Unpolluted sterile vacuum zone.",
        logic: "防御性系统降级指令。主体对象征界带来的“阉割（M4责任、法度与血腥剥削）”进行了不可逆的系统性断开（Panic退行）。主体要么自身格式化回安全模式（M0初始态），要么将自我投射寄生于一个毫无反抗力的象征物（幼童），妄图在血海中造出一个绝对隔绝外部事件输入的“无菌培养皿”。",
        logicEn: "Defensive systemic downgrade directive. Subject executes an irreversible systemic disconnect (Panic Regression) from Symbolic 'castration (M4 responsibilities, laws, bloody exploitation)'. Subject either formats self to safe mode (M0 initial state) or projects parasitic ego onto a defenseless symbol (child), attempting to build an 'aseptic petri dish' strictly isolated from external event inputs amid a sea of blood.",
        patch: {
            mechanics: "基础修复协议 + [M4象征界阉割 = 判定为致命源隔离; M0安全退行模式 = 强制激活维持; 无菌投影对象(幼童) = 设为最高防卫优先级]",
            mechanicsEn: "Base_RESTORATION + [M4_Symbolic_Castration = Judged_Fatal_Source_Isolated; M0_Safe_Regression_Mode = Forcibly_Active_Maintained; Sterile_Projected_Object(Child) = Max_Defense_Priority]",
            aesthetic: "聚焦：血污背景中刺目的高白无菌隔离舱 + 孩童脸上极度不符合灾变语境的完美微笑。文本：一种令人毛骨悚然的、强行过滤掉所有杂质和声音的真空般叙述。",
            aestheticEn: "Focus: Blinding_White_Sterile_Isolation_Pod_against_Bloody_Background + Child's_Perfect_Smile_Extremely_Incongruous_with_Cataclysm. Text: A_Creepy, Vacuum-Like_Narrative_Forcibly_Filtered_of_All_Impurities_and_Sounds.",
            runtime: "IF (有任何代表[血腥/复杂/成人法则]的真实界噪音试图渗入) THEN (强启[无菌屏障]：主体爆发出令人毛骨悚然的反向狂暴暴力，极尽残忍地代码抹杀真实，以此来维持过家家的和平)。",
            runtimeEn: "IF (Any_Real-World_Noise_of_[Gory/Complex/Adult_Laws]_Attempts_Seepage) THEN (Force-Start_[Sterile_Barrier]: Subject_Erupts_in_Creepy_Reverse_Frenzy, Cruelly_Code-Erasing_Reality_to_Maintain_Play-House_Peace)."
        }
    },
    {
        id: "fan_reunion",
        name: "破镜重圆", nameEn: "Reunion",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "修复一段破碎的关系，与前任或决裂的朋友和好。",
        defEn: "Mending a broken relationship, reconciling with exes or broken friends.",
        core: "缝合裂痕。相信“爱”可以战胜隔阂与时间。 | 实在界: 主体间性的虚假肉身粘合。",
        coreEn: "Suturing rifts. Believing 'love' can conquer estrangement and time. | The Real: False fleshy bonding of intersubjectivity.",
        logic: "符号连带修复强植指令。主体病态地认定人际关系的惨烈破裂（M2 创伤）仅仅是通信层的“可逆误码”，而非底层核心协议的绝对不兼容。主体开始用高频且高强度的 M5 互动行为（沟通、讨好、洗脑式自证），试图暴力重写对方的独立认知，妄加黏合象征界已被焚毁的契约连带。",
        logicEn: "Symbolic bond forced-implant repair directive. Subject morbidly claims the catastrophic rupture of interpersonal relation (M2 trauma) is merely a 'reversible bit-error' in communication, not an absolute protocol incompatibility. Subject uses high-frequency M5 interactions (pleasing, communicating, brainwash self-proving) to violently rewrite the other's independent cognition, delusionally gluing the incinerated Symbolic contract.",
        patch: {
            mechanics: "基础修复协议 + [M2关系破裂 = 误判降级为暂态误码通信; 底层悖论不兼容 = 强制屏蔽忽略; M5病态互动 = 尝试覆写他者认知]",
            mechanicsEn: "Base_RESTORATION + [M2_Rel_Rupture = Misjudged_Down_to_Transient_Comm_Error; Base_Paradox_Incompat = Forcibly_Shielded; M5_Morbid_Interaction = Attempt_Rewrite_Other's_Cognition]",
            aesthetic: "聚焦：被透明胶带反复拼凑的满是裂痕的双人照 + 重复发送数百次未读的最后一句剖白。文本：充满黏腻祈求、令人窒息的越界窥探与病态自我感动的文字流。",
            aestheticEn: "Focus: Cracked_Couple_Photo_Repeatedly_Taped + Hundreds_of_Unread_Last_Confessions_Sent. Text: Sticky_Pleading_Word-Flow, Suffocating_Border-Crossing_Snooping_and_Sick_Self-Touching.",
            runtime: "IF (目标对象反馈了明确的[拒绝连接/协议不匹配]报错) THEN (强制进入[握手重试态]：将其曲解为考验代码，不断升级越界互动的侵入权限，妄图单方面黏合并覆写对方独立协议)。",
            runtimeEn: "IF (Target_Object_Feedbacks_Explicit_[Conn-Refused/Protocol-Mismatch]_Error) THEN (Forced_Enter_[Handshake_Retry_Mode]: Misinterprets_as_Testing_Code, Escalates_Invasive_Auth, Attempting_Unilateral_Glue_and_Overwrite)."
        }
    },
    {
        id: "fan_debt_free",
        name: "偿还债务", nameEn: "Debt Free",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "还清金钱或人情债，获得自由之身。",
        defEn: "Paying off monetary or favor debt to gain freedom.",
        core: "解除契约的束缚。从亏欠（负数）回归到零。 | 实在界: 负数清零带来的绝对真空虚张。",
        coreEn: "Lifting contractual bonds. Returning from owe (negative) to zero. | The Real: Absolute vacuum expansion brought by zeroing negative numbers.",
        logic: "零感度账单注销指令。主体深信系统和世界对他的所有恶意枷锁（M1）仅仅是由一组具体的财务/人情“可量化数值”构成的。因此，全部生命的 M5 输出能量都被极其狭隘地收束用于“减损该债务（消去负整数）”。其绝望幻象在于：坚信只要账户余额归零，锁链就会奇迹般自动挥发生效，释放出一个被神赐福的真正自由主体。",
        logicEn: "Zero-point bill cancellation directive. Subject is convinced all malicious shackles of the system (M1) are merely constituted by 'quantifiable values' of specific finance/favors. Hence, all M5 life output is extremely narrowly funneled into 'reducing this debt (erasing negative integers)'. Desperate fantasy: firm belief that once balance zeros, chains miraculously vaporize, releasing a divinely blessed free subject.",
        patch: {
            mechanics: "基础修复协议 + [系统恶意识度 = 强行映射收束为单一债务数值; M5行动 = 纯粹的算术级抵扣劳作; 账户归零 = 极乐自由点定标]",
            mechanicsEn: "Base_RESTORATION + [System_Malice = Forcibly_Mapped_to_Single_Debt_Value; M5_Action = Pure_Arithmetic_Deduction_Labor; Account_Zero = Blissful_Freedom_Point_Calibration]",
            aesthetic: "聚焦：刺目反光的血红催款单数字 + 长期营养不良、一天只吃一顿饭的鼠辈算计眼神。文本：高度机械化、完全去人性化、被冷酷数字彻底剥夺血肉尊严的记账感。",
            aestheticEn: "Focus: Blinding_Reflecting_Blood-Red_Collection_Numbers + Malnourished_Rat-like_Calculating_Eyes. Text: Highly_Mechanized, Completely_Dehumanized, Bookkeeping-Feel_Totally_Stripped_of_Fleshly_Dignity_by_Cold_Numbers.",
            runtime: "IF (系统内部积蓄了可能会引发自由意识或情感流动的冗余内存) THEN (立刻转化为[债务清算行动]：把自己物化为一个冰冷的账本，在机械的还款受虐中强制核销这部分可能带来危险的自由能)。",
            runtimeEn: "IF (System_Accumulates_Redundant_Memory_That_Might_Spark_Free_Will) THEN (Instantly_Conver_To_[Debt_Clearance_Actions]: Objectifying_Self_as_Ledger, Forcibly_Writing_Off_Dangerous_Free-Energy_via_Mechanical_Repayment)."
        }
    },
    {
        id: "fan_erasure_scars",
        name: "消除伤疤", nameEn: "Erasure of Scars",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "通过整形或魔法，抹去身体上的创伤痕迹。",
        defEn: "Using surgery or magic to erase trauma marks on the body.",
        core: "抹去痛苦的记忆。让外表重新完美无瑕。 | 实在界: 光滑表皮对内爆坍塌的脆弱遮盖。",
        coreEn: "Erasing painful memories. Making appearance flawless again. | The Real: Smooth skin's fragile cover of implosion.",
        logic: "前端视觉擦除指令。主体采用一种极端的、自欺欺人的“前端自由主义（只要 UI 上看不到就不存在）”来应对实在界残酷撞击的遗留刻痕（血肉伤疤/M2 标记）。主体的逻辑算力全部向外流出，集中于外部物理表面渲染（SUR1）的平铺，以此妄加建立一道掩耳盗铃的心理防火墙，强行格式化底层的内存级历史创伤。",
        logicEn: "Front-end visual erasure directive. Subject adopts an extreme, self-deceiving 'front-end liberalism (if not on UI, it doesn't exist)' to handle the Real's cruel impact engravings (flesh scars/M2 marks). Logic compute entirely flows outward to smooth external physical surface render (SUR1), delusionally building an ostrich-like psychic firewall to forcibly format base-memory historical trauma.",
        patch: {
            mechanics: "基础修复协议 + [M2真实刻痕 = 降级遮蔽为渲染层视觉错位; SUR1外部平滑处理 = 设定为核心防火墙生命线; 历史创痛 = 强行离线格式化]",
            mechanicsEn: "Base_RESTORATION + [M2_Real_Engraving = Downgrade-Shielded_as_Render_Glitch; SUR1_External_Smoothening = Set_as_Core_Firewall_Lifeline; History_Pain = Forcibly_Offline_Formatted]",
            aesthetic: "聚焦：发抖但发越着高热的手术激光刀 + 大块焦枯脱落的病态死皮组织。文本：冷酷、将身体完全视为一块可涂改塑料板的三维贴图无情修正描述。",
            aestheticEn: "Focus: Trembling_Hyperthermic_Surgical_Laser + Large_Chunks_of_Charred_Sloughing_Dead_Skin. Text: Cold, Ruthless_3D_Texture_Correction_Description_Treating_Body_Entirely_as_Erasable_Plastic_Board.",
            runtime: "IF (深层躯体积液或底板记忆试图向 UI 层推送[隐痛/崩溃日志]) THEN (最高优先级调用[前端抛光机制]：宁可物理切割血肉也要维持视觉图层的绝对无瑕，对表面划痕产生法西斯式极度过敏)。",
            runtimeEn: "IF (Base_Memory_Attempts_Pushing_[Phantom-Pain/Crash-Logs]_to_UI_Layer) THEN (Max_Priority_Calls_[Front-End_Polish_Mechanism]: Cut_Flesh_to_Maintain_Visual_Flawlessness, Reacting_with_Fascist_Hyper-Allergy_to_Surface_Scratches)."
        }
    },
    {
        id: "fan_time_reversal",
        name: "时间逆转", nameEn: "Time Reversal",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "回到过去，阻止那个错误的决定或灾难发生。",
        defEn: "Going back in time to prevent the wrong decision or disaster from happening.",
        core: "修正主义。不接受“已发生”的事实。 | 实在界: 对抗“时间不可逆”既成事实的绝望碾压。",
        coreEn: "Revisionism. Unaccepting of 'already happened' facts. | The Real: Desperate crushing against irreversible time.",
        logic: "内核源文件抢渡覆盖指令。主体彻底从系统层级上否定当前的运行实例（所有 M2 后的日常世界），将现实宇宙判定为存在严重 Bug 的恶性错误。通过 M5 行动妄图强行越权获取宇宙时光轴的管理员写权限，意图在内存深层把自身“因创伤而存在”的唯一逻辑基石连根拔起抹杀。对因果论进行狂妄的恐怖袭击。",
        logicEn: "Kernel source-file forced-override directive. Subject totally negates current running instance (post-M2 world) from system level, judging reality universe as a malignant error with severe Bugs. Through M5 attempts, arrogantly claims admin write-access of cosmic timeline, intending to deep-memory uproot and erase the sole logical cornerstone of 'I exist because of trauma'. A fanatical terror attack on Causality.",
        patch: {
            mechanics: "基础修复协议 + [当前宇宙运行实例 = 判定非法并完全否定; 现实既成事实 = 标记为恶性可修复Bug; M5时空回溯器 = 试图抢占系统终极写权限]",
            mechanicsEn: "Base_RESTORATION + [Current_Cosmic_Run_Inst = Judged_Illegal_Totally_Negated; Reality_Given_Fact = Tagged_Malignant_Fixable_Bug; M5_Time-Space_Tracer = Attempt_Seize_System_Ultimate_Write_Auth]",
            aesthetic: "聚焦：发条倒转并冒出火星的破损秒表 + 在无数多平行的崩塌世界中逐渐变得透明重影的双手。文本：充斥时间逻辑悖论带来的眩晕呕吐感、自我身份即将在风暴中不可逆湮灭的倒计时感。",
            aestheticEn: "Focus: Sparking_Broken_Stopwatch_Winding_Backwards + Hands_Gradually_Ghosting_Transparent_in_Countless_Parallel_Collapsing_Worlds. Text: Filled_with_Vertigo_Vomit_from_Time_Paradoxes, Countdown_Sense_of_Identity_Irreversibly_Annihilating_in_Storm.",
            runtime: "IF (当前时间轴必须进行一项不可逆的真实选择或情感投入) THEN (系统报错[分支非法拒签]：将全部算力撤回脑内的[如果当时那样做]死循环推演中，导致主体在当下世界化为一块虚幻宕机砖块)。",
            runtimeEn: "IF (Current_Timeline_Requires_Irreversible_Real_Choice_or_Emotional_Invest) THEN (System_Error_[Branch_Illegal_Refused]: Withdraws_All_Compute_back_into_[What-If]_Dead-Loop_Simulation, Turning_Subject_into_Crash-Brick_in_Present)."
        }
    },
    {
        id: "fan_clan_restoration",
        name: "家族复兴", nameEn: "Clan Restoration",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "重振没落家族的声望，夺回失去的领地。",
        defEn: "Revive the prestige of a fallen clan, reclaim lost territories.",
        core: "身份的传承。通过祖先的荣耀来定义自己的价值。 | 实在界: 空洞血脉与族徽的符码恋物癖。",
        coreEn: "Inheritance of identity. Defining one's value through ancestors' glory. | The Real: Code fetishism of hollow bloodlines and crests.",
        logic: "大他者认证接口重连指令。主体将自我的碎裂（M1）归咎于“大他者注视”的撤回。于是，他们疯狂收集旧日的符号（族魂/领地/名号）作为网络握手协议，妄图通过 M5 的开疆扩土来强制激活一个早已死亡的名义上的“父之名（Name of the Father）”，寄希望于那个幽灵般的全能仲裁者能重新赐予自身坐标位置。",
        logicEn: "The Other's cert-interface reconnect directive. Subject blames ego fragmentation (M1) on the withdrawal of 'The Other's Gaze'. Thus, they frantically collect old symbols (clan soul/territory/titles) as network handshake protocols, attempting via M5 territorial expansion to forcibly re-activate an already dead nominal 'Name of the Father', hoping that ghostly omnipotent arbiter will re-grant their coordinates.",
        patch: {
            mechanics: "基础修复协议 + [M1自我碎裂 = 归咎为大他者注视丢失; 旧日名号族徽 = 网络重新握手协议口令; M5复兴行为 = 强制唤醒父之名幽灵]",
            mechanicsEn: "Base_RESTORATION + [M1_Ego_Shatter = Blamed_on_Loss_Of_Other's_Gaze; Old_Titles_Crests = Network_Reconnect_Handshake_Passwords; M5_Revival_Action = Forcibly_Awakening_Ghostly_Name_Of_The_Father]",
            aesthetic: "聚焦：在废弃古堡中被蛀虫啃食了一半的天鹅绒华盖 + 一种极其傲慢却掩盖不住乞求认证的神经质眼神。文本：庄严但弥漫着尸臭的谱系学诵读、荒谬且不合时宜的死板贵族礼法。",
            aestheticEn: "Focus: Moth-eaten_Velvet_Canopy_in_Abandoned_Castle + Extremely_Arrogant_but_Nervous_Eyes_Begging_for_Validation. Text: Solemn_but_Corpse-Stinking_Genealogical_Recitation, Absurd_Outdated_Rigid_Aristocratic_Etiquette.",
            runtime: "IF (在社交场域感受到[自我本质空洞/无价值/怯懦的威胁]) THEN (即刻触发[古神贵族挂载包]：表现出极度令人发笑但又极度危险的死板骄矜，为鸡毛蒜皮的领主式争端赋予宇宙重启级别的神圣感)。",
            runtimeEn: "IF (Feels_[Self_Void/Worthless/Cowardice_Threat]_in_Social_Field) THEN (Instantly_Triggers_[Ancient-God_Aristocrat_Package]: Shows_Dangerous_Rigid_Arrogance, Bestowing_Cosmic_Sacredness_to_Trivial_Feudal_Disputes)."
        }
    },
    {
        id: "fan_lost_talent",
        name: "找回天赋", nameEn: "Lost Talent",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "重新获得曾经拥有但失去的能力（武功/灵感）。",
        defEn: "Regaining abilities once possessed but lost (martial arts/inspiration).",
        core: "克服阉割焦虑。确认自己依然是强大的。 | 实在界: 应对彻底阉割的自恋全能假肢。",
        coreEn: "Overcoming castration anxiety. Confirming one is still powerful. | The Real: Narcissistic omnipotent prosthesis to cope with utter castration.",
        logic: "全能感外挂载入指令。主体遭受创伤打击被彻底骟没（M2 阉割体验）后，爆发极端的机能退化恐慌。他们拒绝重构成一个有边界的有限肉身，而是疯狂地把某项具体的异赋（能力/灵压/算法权限）视为唯一能把世界重新调成“静音”的自恋假肢。这是一种对脆弱性的绝对仇恨。",
        logicEn: "Omnipotence plug-in loading directive. After subject is utterly gelded by trauma strike (M2 castration experience), extreme function-degeneration panic erupts. They refuse to rebuild as a bounded finite body; instead, frantically treating a specific exotic talent (ability/spiritual-pressure/algorithmic-auth) as the sole narcissistic prosthesis that can re-Mute the world. This is an absolute hatred of vulnerability.",
        patch: {
            mechanics: "基础修复协议 + [M2阉割体验 = 判定为不可容忍的机能掉点; 具体天赋异能 = 自恋型全能假肢唯一锚; 对脆弱性的体认 = 作为最高异端清除]",
            mechanicsEn: "Base_RESTORATION + [M2_Castration_Exp = Judged_Intolerable_Stat_Drop; Specific_Talent = Sole_Anchor_of_Narcissistic_Omnipotent_Prosthesis; Recognition_of_Vulnerability = Purged_as_Supreme_Heresy]",
            aesthetic: "聚焦：发狂般颤抖想要发功的畸形手指 + 镜子里那张因失去力量而极度狰狞扭曲的恐慌面庞。文本：对力量图腾的瘾君子般依赖、充斥对凡人肉体的歇斯底里式鄙视。",
            aestheticEn: "Focus: Frenziedly_Trembling_Deformed_Fingers_Trying_to_Channel_Power + Face_in_Mirror_Hideously_Contorted_in_Panic_Over_Lost_Strength. Text: Junkie-Like_Dependence_on_Power_Totems, Hysterical_Contempt_for_Mortal_Flesh.",
            runtime: "IF (被迫使用凡人肉身或底层逻辑去面对世界的常规反作用力) THEN (报错[极度辱没/机能掉点恐慌]：疯狂向外搜寻甚吞噬任何可作替代的外挂资源，展现出对常人状态的歇斯底里仇视)。",
            runtimeEn: "IF (Forced_to_Use_Mortal_Body_Handling_World's_Normal_Reactions) THEN (Error_[Extreme_Humiliation/Stat-Drop_Panic]: Frantically_Searches_Cheat-Alternates, Hysterically_Hating_the_'Normal_Mortal'_State)."
        }
    },
    {
        id: "fan_purification",
        name: "净化", nameEn: "Purification",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "清除环境或身体里的毒素、诅咒或污秽。",
        defEn: "Clearing toxins, curses or filth from environment or body.",
        core: "洁癖。将“异质”排出体外，恢复纯净。 | 实在界: 对异质性入侵绝对零容忍的法西斯灭菌。",
        coreEn: "Mysophobia. Expelling 'heterogeneity' to restore purity. | The Real: Fascist sterilization with absolute zero tolerance for alien invasion.",
        logic: "白细胞暴走清洗指令。主体对潜伏的、不可定量的危险或记忆（M3 刺痛点）产生了极度敏感的变态反应。其逻辑把一切不可控的痛苦都化约为具象的实体“污点（Bug）”。通过 M5 实施狂热的高抛光操作（洗手/大清洗/献祭异教徒），以期达到令人窒息的无机态绝对光洁。",
        logicEn: "White-blood-cell berserk purge directive. Subject develops hypersensitive allergic reactions to latent, unquantifiable dangers or memories (M3 sting-points). The logic reduces all uncontrollable pain into concrete tangible 'stains (Bugs)'. Through M5, executes fanatical high-polishing operations (hand-washing/great-purge/sacrificing-heretics) to achieve suffocating inorganic absolute smoothness.",
        patch: {
            mechanics: "基础修复协议 + [未知的M3幽灵痛 = 化约为具体的物理脏污/毒素标记; M5清洗动作 = 上升为神圣不可侵犯的至高献祭指令; 无机态绝对纯净 = 被设定为终极救赎]",
            mechanicsEn: "Base_RESTORATION + [Unknown_M3_Phantom_Pain = Reduced_to_Concrete_Physical_Dirt/Toxin_Marks; M5_Purging_Action = Elevated_to_Sacred_Inviolable_Supreme_Sacrificial_Directive; Inorganic_Absolute_Purity = Set_as_Ultimate_Salvation]",
            aesthetic: "聚焦：被硬毛刷搓到皮下血管破裂、流出惨白组织液的双手 + 刺鼻浓烈的化学消毒剂防毒面具。文本：冷酷病态的归类与抹杀、对于微小不规则形状和气味的生理性恶心呕吐感。",
            aestheticEn: "Focus: Hands_Scrubbed_with_Hard_Bristers_until_Subcutaneous_Vessels_Burst_Oozing_Pale_Fluid + Pungent_Intense_Chemical_Disinfectant_Gas-Masks. Text: Cold_Morbid_Categorization_and_Erasure, Physiological_Nausea_Vomiting_towards_Tiny_Irregular_Shapes_and_Smells.",
            runtime: "IF (雷达扫描到环境或自身出现了极微小的不规则[异质体/脏乱参数]) THEN (强制开启[白细胞暴走指令]：进入对细枝末节的纯净暴政管制，必须在物理和道德层执行重度抛光的双重杀菌仪式才能平息报错)。",
            runtimeEn: "IF (Radar_Scans_Tiny_Irregular_[Heterogeneity/Dirty_Params]_in_Env/Self) THEN (Forced_Start_[White-Blood_Berserk_Directive]: Enters_Purity-Tyranny, Must_Execute_Heavy-Polish_Dual-Sterile_Rituals_to_Silence_Error)."
        }
    },
    {
        id: "fan_wholeness",
        name: "完整身体", nameEn: "Wholeness",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "为残缺的身体寻找完美的义肢或再生方法。",
        defEn: "Seeking perfect prosthetics or regeneration for a mutilated body.",
        core: "拉康的“镜像阶段”。追求身体图像的完整性。 | 实在界: 镜像碎裂后的拼图强迫症。",
        coreEn: "Lacan's 'Mirror Stage'. Pursuing body image wholeness. | The Real: Jigsaw OCD after mirror shatters.",
        logic: "镜像自恋拼图覆盖指令。主体在遭受严重的机体剥夺（M2 阉割）后，极度恐惧跌落回“碎裂的身体（Corps morcelé）”这一前镜像恐慌中。为了掩盖真实界的生理黑洞，主体通过极端的 M5 科技/生物植入手段强行缝补外部轮廓（SUR1）。幻象的唯一目的在于欺骗并塞满大他者惊恐的凝视（Gaze），硬生生闭合阉割伤口。",
        logicEn: "Mirror-narcissism jigsaw override directive. After severe bodily deprivation (M2 castration), subject intensely fears falling back into 'fragmented body (Corps morcelé)' pre-mirror panic. To cover the physiological black hole of the Real, subject forcibly sutures external contours (SUR1) via extreme M5 tech/bio-implantation. Fantasy's sole purpose is to deceive and plug The Other's horrified Gaze, bluntly sealing the castration wound.",
        patch: {
            mechanics: "基础修复协议 + [M2生理黑洞 = 标记为必须遮蔽的凝视泄漏点; 完美义体/再生 = 自恋镜像防线唯一支柱; M5义肢植入 = 病态的表面完整性狂热]",
            mechanicsEn: "Base_RESTORATION + [M2_Physio_Blackhole = Tagged_Leak-Point_Demanding_Shielding; Perfect_Prosthetic/Regen = Sole_Pillar_of_Narcissistic_Mirror_Defense; M5_Implant = Morbid_Surface-Wholeness_Frenzy]",
            aesthetic: "聚焦：打磨得毫无瑕疵的钛合金闪光接环 + 义肢连接处永远隐隐渗出的、发黑的排异脓液。文本：无机金属光泽与有机血肉腐败的强烈对冲、一种极度害怕被看到“里面是空的”的惊恐凝视感。",
            aestheticEn: "Focus: Flawlessly_Polished_Titanium_Flash_Joints + Always_Faintly_Oozing_Blackened_Rejection_Pus_at_the_Prosthetic_Seam. Text: Intense_Clash_of_Inorganic_Metal_Luster_vs_Organic_Flesh_Rot, Panicked_Gaze-Sense_Extremely_Afraid_of_Being_Seen_'Empty_Inside'.",
            runtime: "IF (来自外界凝视或自我意识触碰到了自身生理/精神的缝合断口) THEN (警报[全孔泄漏危急]：主体将不择手段地夺取无机材料充填裂隙，每日在镜前对无缝衔接感的强迫确认具有生死攸关的最高权限)。",
            runtimeEn: "IF (Gaze_Touches_Physio/Psychic_Suture_Seams) THEN (Alarm_[Full-Pore_Leak_Crisis]: Subject_Ruthlessly_Seizes_Inorganic_Materials_to_Plug_Rift, Daily_Confirmation_of_Seamlessness_Before_Mirror_Holds_Life-Death_Priority)."
        }
    },
    {
        id: "fan_curse_breaking",
        name: "解除诅咒", nameEn: "Curse Breaking",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "打破家族或个人的宿命诅咒，恢复正常生活。",
        defEn: "Breaking clan or personal fateful curses, restoring normal life.",
        core: "摆脱大他者的恶意设定。重获自由意志。 | 实在界: 对不可计算之莫须有罪名的挣扎。",
        coreEn: "Escaping the Other's malicious settings. Regaining free will. | The Real: Struggle against uncomputable fabricated charges.",
        logic: "恶意代码剥离重置指令。主体面对生命中反复出现的无理痛楚（M1 结构性恶意），拒绝承认这是宇宙的随机混沌或自身存在的内源性代价，而是将其打包成一个外部写入的“恶意诅咒代码”。主体试图通过 M5 的解码仪式（破除迷信、寻找漏洞），把大他者的“胡作非为”逼回理性的法庭，妄图恢复一个毫无意义的“中性出厂设置”。",
        logicEn: "Malicious code strip-and-reset directive. Facing unreasonable recurring pain in life (M1 structural malice), subject refuses to admit it as cosmic random chaos or endogenous cost of existence, but rather packages it as an externally written 'malicious curse code'. Subject tries via M5 decoding rituals (breaking superstition, finding loopholes) to force The Other's 'foul play' back into the court of Reason, attempting to restore a meaningless 'neutral factory setting'.",
        patch: {
            mechanics: "基础修复协议 + [M1结构恶意 = 降级打包为外部可剥离的诅咒代码; 宇宙混沌本质 = 否认并视为系统级Bug; M5破除仪式 = 妄图召唤理性法庭重置出厂设置]",
            mechanicsEn: "Base_RESTORATION + [M1_Structural_Malice = Downgraded/Packaged_as_Externally_Strippable_Curse_Code; Cosmic_Chaos_Nature = Denied_as_System-Level_Bug; M5_Breaking_Ritual = Attempt_to_Summon_Court_of_Reason_for_Factory_Reset]",
            aesthetic: "聚焦：布满繁复反制符文但正在边缘焦化失效的羊皮纸 + 抬头向着无物深空发出歇斯底里控诉嘶吼的干裂嘴唇。文本：带有强烈妄想症色彩的系统化解码执念、自相矛盾的自我开脱与无能狂怒感。",
            aestheticEn: "Focus: Parchment_Covered_in_Complex_Counter-Runes_but_Charring_at_Edges + Cracked_Lips_Howling_Hysterical_Accusations_at_Empty_Deep_Space. Text: Highly_Paranoid_Systematic_Decoding_Obsession, Self-Contradictory_Self-Exoneration_and_Incompetent_Rage.",
            runtime: "IF (遭遇系统底层无法计算其概率分布的随机事故或混沌厄运) THEN (强制拦截并重命名：拒绝承认世事无常，统统将其打上[某特定古老Bug/诅咒]的显性标签，将悲痛转换为疯狂寻修的破译工作)。",
            runtimeEn: "IF (Encounters_Uncomputable_Random_Accidents_or_Chaotic_Doom) THEN (Force_Intercept_and_Rename: Refuses_Impermanence, Tags_All_as_[Specific_Ancient_Bug/Curse], Converting_Grief_into_Frantic_Code-Decoding_Work)."
        }
    },
    {
        id: "fan_origin",
        name: "寻找起源", nameEn: "The Origin",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "寻找创造者、源头或真相。我们从哪里来？",
        defEn: "Searching for creators, origins, or truth. Where do we come from?",
        core: "本体论的不安。通过确认起源来确认存在的意义。 | 实在界: 对抗“存在即偶然废料”的宏伟偏执狂结晶。",
        coreEn: "Ontological unease. Confirming meaning of existence by confirming origin. | The Real: Grand paranoid crystallization against 'existence as accidental scrap'.",
        logic: "先验基石寻回指令。主体无法忍受自身诞生于一场无目的的宇宙级偶发排泄（M1 缺失），从而患上了严重的本体论眩晕症。他们必须跋山涉水（M5），去强行挖掘出一个被重度美化过的“神圣出厂证明（The Origin）”，妄图用一个极其宏大或纯洁的叙事起点，来洗白自己当前可悲的局限状态（“因为我是某伟大事物的一环，所以我受的苦理所应当”）。",
        logicEn: "Transcendental cornerstone retrieval directive. Subject cannot endure being born from an aimless cosmic contingent excretion (M1 lack), thus developing severe ontological vertigo. They must trek over mountains and rivers (M5) to forcibly unearth a heavily beautified 'Sacred Factory Certificate (The Origin)', delusional using an immensely grand or pure narrative starting point to whitewash their current pathetic limited state ('Because I am part of something great, my suffering is justified').",
        patch: {
            mechanics: "基础修复协议 + [M1存在偶发性 = 判定为引发本体论眩晕的病毒; M5寻根之旅 = 妄图下载神圣出厂证明的自我洗白; 当下局限苦楚 = 强行合法化为伟大远征的代价]",
            mechanicsEn: "Base_RESTORATION + [M1_Existence_Contingency = Judged_Ontological_Vertigo_Virus; M5_Root-Seeking_Journey = Delusional_Self-Whitewash_to_Download_Sacred_Factory_Cert; Current_Limited_Agony = Forcibly_Legitimized_as_Cost_of_Great_Expedition]",
            aesthetic: "聚焦：在古老石碑前颤抖着试图强行将自己指纹与千年刻痕对上的染血手指 + 背后极其荒芜毫无神性的冷酷沙丘。文本：充满神学家般的偏执狂妄语、对所有偶然性线索的暴君式强行压制与解读。",
            aestheticEn: "Focus: Blood-Stained_Fingers_Trembling_Trying_to_Forcibly_Match_Own_Fingerprint_with_Millennia-Old_Carvings_before_Ancient_Steles + Extremely_Barren_Godless_Cold_Dunes_Behind. Text: Paranoid_Delusions_of_a_Theologian, Tyrannical_Forced_Suppression_and_Misinterpretation_of_All_Contingent_Clues.",
            runtime: "IF (线索推进过程中面临不可调和的无意义宇宙断层或偶然垃圾) THEN (触发[神级过度拟合协议]：绝不接纳‘巧合’，暴君般地将所有无效参数强行解释为通向最高造物主阴谋路线图上的必然印记)。",
            runtimeEn: "IF (Clue-Pushing_Faces_Meaningless_Cosmic_Faults_or_Accidental_Trash) THEN (Trigger_[God-Level_Over-fit_Protocol]: Never_Accepts_'Coincidence', Tyrannically_Forces_All_Invalid_Params_as_Inevitable_Marks_on_Roadmap_to_Supreme_Creator)."
        }
    },
    {
        id: "fan_order_restored",
        name: "秩序恢复", nameEn: "Order Restored",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "平息混乱，让社会或生活回到“正轨”。",
        defEn: "Suppressing chaos, getting society or life back 'on track'.",
        core: "对混乱的恐惧。保守主义幻想。 | 实在界: 对抗宇宙自发熵增的西西弗斯式推石。",
        coreEn: "Fear of chaos. Conservative fantasy. | The Real: Sisyphus rock-pushing against universe's spontaneous entropy.",
        logic: "全域熵减强控防线部署。这是对真实界（灾变/混乱）的最直接、最机械的物理抵抗。主体对“脱轨状态”产生极度的偏执性恐惧，化身为极其保守的系统防火墙。其 M5 行动表现为像个神经衰弱的守夜人一样，将所有有限的生命动能倾泻在把一切“异化、随机、刺耳频率”死死按回那张早已千疮百孔的“旧日网格（旧坐标系）”上。",
        logicEn: "Global entropy-reduction dictatorial defense deployment. This is the most direct, mechanical physical resistance against the Real (cataclysm/chaos). Subject develops extreme paranoid dread regarding the 'derailed state', transforming into an intensely conservative system firewall. M5 actions manifest like a neurasthenic night-watchman, dumping all finite life momentum into forcefully pinning down all 'alienation, random, screeching frequencies' back onto that already riddle-holed 'Old Grid (Old Coordinate System)'.",
        patch: {
            mechanics: "基础修复协议 + [真实界随机入侵 = 触发全区警报标红为违规出轨; 主体意识 = 转化为死板防御性防火墙节点; M5行为模式 = 极度耗能的西西弗斯式变量抑制]",
            mechanicsEn: "Base_RESTORATION + [Real's_Random_Intrusion = Triggers_Zone-Wide_Alarm_Red-Tagged_as_Illegal_Derailment; Subject_Consciousness = Converted_to_Rigid_Defensive_Firewall_Node; M5_Behavior_Pattern = Costly_Sisyphus-style_Variable_Suppression]",
            aesthetic: "聚焦：在洪水中试图用一堆标准尺寸砖块强行堵住溃堤缺口的荒谬努力 + 主体那严重睡眠不足、双眼布满血丝的监控执念感。文本：枯燥无味如同机房运行日志般的刻板报告语汇、掩盖在秩序表皮下的巨大失控颤抖。",
            aestheticEn: "Focus: Absurd_Effort_Trying_to_Forcibly_Plug_a_Burst_Dam_with_Standard_Sized_Bricks_in_a_Flood + Subject's_Severe_Sleep-Deprived_Bloodshot-Eyed_Monitoring_Obsession. Text: Dull_Dry_Rigid_Report-Vocabulary_Like_Server_Room_Logs, Massive_Uncontrollable_Tremors_Hidden_Under_the_Skin_of_Order.",
            runtime: "IF (外界环境的任意一片叶子或一条社会运行流线偏移了[旧日坐标网格]) THEN (触发[全域熵减绝对管制]：主体如同发高烧的网管般歇斯底里地抹除该异常，试图用肉身来堵住热力学第二定律溃堤的裂口)。",
            runtimeEn: "IF (Any_Env_Variable_Offsets_from_[Old_Coord_Grid]) THEN (Trigger_[Global_Entropy-Red_Absolute_Control]: Subject_Hysterically_Erases_Anomaly_Like_Feverish_Sysadmin, Trying_to_Plug_Thermodynamic_Burst-Dams_with_Flesh)."
        }
    },
    {
        id: "fan_final_goodbye",
        name: "最后的告别", nameEn: "The Final Goodbye",
        group: "A. 修复与回归", groupEn: "Restoration",
        def: "有机会对死者说出没来得及说的话。",
        defEn: "Having the chance to say what was left unsaid to the dead.",
        core: "哀悼的完成。缝合遗憾，然后放下。 | 实在界: 对不可逆的死后幽灵缠绕的驱魔妄想。",
        coreEn: "Completion of mourning. Suturing regrets, then letting go. | The Real: Exorcism delusion against irreversible post-mortem ghostly haunting.",
        logic: "幽灵通讯带外闭环指令。主体由于遭遇了突发性的阴阳两隔（不可追溯的 M2 断电式创伤），其内部留下了大量未发送完成的错误数据包（遗憾）。主体因此无法停止被真实界的幽灵（The Real's Hauntology）残酷纠缠。M5 行为退化为一次执拗的“补发机制”，妄图通过追加最后一个“符号性的大招（绝唱、祭奠、隔空喊话）”，单方面在屏幕上显示“通信结束/哀悼完成（Task Closed）”，以此来捂住真实界正在咆哮喷血的巨大裂口。",
        logicEn: "Ghostly comm out-of-band loop-closing directive. Due to abrupt severing of life and death (untraceable M2 blackout trauma), subject is left with massive unsent error-packets (regrets) internally. Subject thus cannot stop being cruelly haunted by The Real's ghostly hauntology. M5 behavior degrades into an obstinate 're-send mechanism', delusionally attempting to issue a final 'symbolic ultimate move (swan song, memorial, void-shouting)' to unilaterally flash 'Comm Ended / Mourning Complete (Task Closed)' on screen, using this to cover the roaring blood-spewing massive rift of the Real.",
        patch: {
            mechanics: "基础修复协议 + [M2生死断片 = 遗留海量未结算数据包病灶; 真实界亡魂缠绕 = 产生日常系统错乱告警; M5最后寄语 = 妄图单方面触发通信完结骗局]",
            mechanicsEn: "Base_RESTORATION + [M2_Life-Death_Sever = Huge_Legacy_Unsettled_Data-Packet_Lesions; Real's_Ghost_Haunting = Generates_Daily_System_Chaos_Alarms; M5_Final_Message = Attempt_Unilateral_Comm-End_Scam]",
            aesthetic: "聚焦：在狂风暴雨的无声墓碑前被淋成落汤鸡仍死死僵凝站立的单薄身影 + 永远无法从那座空坟中传来任何“接收回执”的绝对静寂隔离感。文本：充斥着自我感动的滔滔不绝之词、在虚空中如同回音壁般滑稽碰壁坠落的单向告白。",
            aestheticEn: "Focus: A_Frail_Figure_Standing_Dead-Stiff_Drenched_in_Storm_before_a_Voiceless_Tombstone + Absolute_Silent_Isolation_of_Never_Receiving_an_'Ack-Receipt'_from_That_Empty_Grave. Text: Flooded_with_Self-Touched_Endless_Babble, One-Way_Confessions_Comically_Hitting_Void-Walls_and_Falling_Like_Echoes.",
            runtime: "IF (真实界发来任何继续日常生命循环或淡忘痛楚的通信请求) THEN (强制阻断[Error: 通信口已被亡灵独占]：主体在内耗中不断预演最终告别仪式，认为必须发送完美回程口令后，才允许自己闭合死亡伤口流血点)。",
            runtimeEn: "IF (Real_World_Sends_Positive_Comm_Requests_to_Move_On) THEN (Forced_Block_[Error: Comm-Port_Monopolized_by_Undead]: Subject_Ceaselessly_Rehearses_Final_Goodbye_Ritual, Believing_Only_Perfect_Return-Password_Can_Close_Death_Bleed-Point)."
        }
    },
];
