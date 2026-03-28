
import { LibraryItemDef } from '../types';

export const ENGINE_ENCOUNTERS: LibraryItemDef[] = [
    // =================================================================
    // GROUP A: 系统的崩塌 (Systemic Collapse) - 24 Items
    // 关键词：法律、经济、地位、基础设施。符号秩序失效的瞬间。
    // =================================================================
    {
        id: "sys_crash",
        name: "金融熔断 (Financial Crash)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "银行倒闭，股市归零，数字财富瞬间蒸发。",
        core: "符号价值的清零。一生积累的“意义”变成了无意义的数字。 | The Real: 价值的虚构性。"
    },
    {
        id: "sys_blackout",
        name: "全城停电 (The Blackout)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "电网瘫痪，城市陷入绝对黑暗，通讯中断。",
        core: "现代文明的维生系统断开。人退化为黑暗中的野兽。 | The Real: 技术的脆弱。"
    },
    {
        id: "sys_fired",
        name: "突然解雇 (The Layoff)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "工卡失效，被保安护送离开，并没有理由。",
        core: "被大他者（公司）像排泄物一样丢弃。社会功能的丧失。 | The Real: 工具人的真相。"
    },
    {
        id: "sys_eviction",
        name: "强制驱逐 (Eviction)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "房东或银行收回房子，行李被扔在街上。",
        core: "庇护所的丧失。物理空间上的“无家可归”。 | The Real: 归属感的剥夺。"
    },
    {
        id: "sys_arrest",
        name: "错误逮捕 (False Arrest)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "警察破门而入，被戴上手铐，虽然你是无辜的。",
        core: "卡夫卡式的噩梦。法律不再保护你，而是变成压迫你的机器。 | The Real: 律法的荒谬。"
    },
    {
        id: "sys_scandal",
        name: "丑闻曝光 (Public Scandal)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "私密信息被公开，名誉扫地，社会性死亡。",
        core: "面具（Persona）被撕碎。在大众凝视下的赤裸感。 | The Real: 荣誉的毁灭。"
    },
    {
        id: "sys_no_signal",
        name: "断网孤岛 (No Signal)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "在荒野或封锁区，手机失去信号，与世界失联。",
        core: "数字脐带断裂。现代主体在离线状态下的存在焦虑。 | The Real: 连接的断裂。"
    },
    {
        id: "sys_identity_theft",
        name: "身份被盗 (Identity Theft)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "有人用你的名字生活、贷款、犯罪。你成了冒牌货。",
        core: "我是谁？如果档案说我不是我，那我就真的不存在了。 | The Real: 身份的符号性。"
    },
    {
        id: "sys_quarantine",
        name: "强制隔离 (Quarantine)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "突发疫情封锁，被困在狭小空间，物资短缺。",
        core: "例外状态 (State of Exception)。生物生存权压倒了自由权。 | The Real: 自由的幻觉。"
    },
    {
        id: "sys_draft",
        name: "战争征召 (The Draft)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "收到入伍通知书，被迫卷入一场不属于你的战争。",
        core: "身体充公。个人命运被宏大叙事强行劫持。 | The Real: 权力的暴力。"
    },
    {
        id: "sys_censorship",
        name: "作品被禁 (The Ban)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "毕生心血被系统删除、销毁或封禁。",
        core: "话语权的阉割。你的声音被判定为噪音。 | The Real: 表达的窒息。"
    },
    {
        id: "sys_ai_replace",
        name: "AI替代 (Obsolete)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "发现机器能比你做得更好、更快、更便宜。",
        core: "价值归零。人类在技术进化面前的无用感。 | The Real: 能力的过时。"
    },
    {
        id: "sys_visa_denied",
        name: "签证拒签 (Visa Denied)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "被拒绝入境或驱逐出境，滞留在机场/边境。",
        core: "无国籍者。被困在两个法律体系的缝隙中。 | The Real: 边界的冷酷。"
    },
    {
        id: "sys_bankruptcy",
        name: "破产清算 (Bankruptcy)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "债务违约，资产被贴上封条，一无所有。",
        core: "信用体系的死亡。在资本主义社会中的“肉体消灭”。 | The Real: 匮乏的降临。"
    },
    {
        id: "sys_betrayal_corp",
        name: "组织背叛 (Agency Betrayal)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "一直效忠的组织/公司决定牺牲你作为替罪羊。",
        core: "大他者的恶意。信仰体系的崩塌。 | The Real: 忠诚的虚妄。"
    },
    {
        id: "sys_lawsuit",
        name: "天价诉讼 (The Lawsuit)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "收到律师函，面临巨额赔偿或牢狱之灾。",
        core: "语言的暴力。生活被卷入繁琐而致命的法律程序。 | The Real: 规则的重压。"
    },
    {
        id: "sys_exam_fail",
        name: "落榜 (Exam Failure)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "高考/公考失败，阶级跃升的通道关闭。",
        core: "被筛选机制淘汰。对未来的预期瞬间坍塌。 | The Real: 命运的判决。"
    },
    {
        id: "sys_inflation",
        name: "恶性通胀 (Hyperinflation)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "钱变成了废纸，毕生积蓄买不到一块面包。",
        core: "符号与现实的脱钩。社会契约的失效。 | The Real: 货币的谎言。"
    },
    {
        id: "sys_surveillance_leak",
        name: "隐私泄露 (Data Leak)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "私密照片或聊天记录被全网公开。",
        core: "全景敞视。没有死角，没有秘密，只有羞耻。 | The Real: 隐私的消亡。"
    },
    {
        id: "sys_transport_fail",
        name: "交通瘫痪 (Transport Fail)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "地铁停运，航班取消，被困在异乡或途中。",
        core: "流动的停滞。现代社会血管堵塞时的焦虑。 | The Real: 距离的阻隔。"
    },
    {
        id: "sys_inheritance_lost",
        name: "遗产被夺 (Disinherited)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "遗嘱被篡改，原本属于你的财富落入他人之手。",
        core: "家族契约的背叛。血缘关系在利益面前的脆弱。 | The Real: 继承的断裂。"
    },
    {
        id: "sys_bridge_collapse",
        name: "设施坍塌 (Bridge Collapse)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "正在经过的大桥或建筑突然断裂。",
        core: "物质基础的不可靠。坚固的东西烟消云散。 | The Real: 物理的偶然性。"
    },
    {
        id: "sys_food_crisis",
        name: "断粮 (Food Crisis)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "超市货架空空如也，抢购潮。",
        core: "文明外壳剥落。重回原始的生存竞争。 | The Real: 饥饿的恐惧。"
    },
    {
        id: "sys_plague_outbreak",
        name: "瘟疫爆发 (Outbreak)",
        group: "A. 系统的崩塌 (Systemic)",
        def: "身边的人突然倒下，封锁线拉起。",
        core: "不可见的敌人。他人即地狱（传染源）。 | The Real: 接触的禁忌。"
    },

    // =================================================================
    // GROUP B: 认知的裂痕 (Cognitive Rupture) - 24 Items
    // 关键词：秘密、记忆、谎言、模拟。世界观的崩塌。
    // =================================================================
    {
        id: "cog_secret",
        name: "身世揭秘 (Secret Origin)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "发现父母不是亲生，或者自己是领养/克隆的。",
        core: "起源的虚构。我是谁？我来自哪里？根基断裂。 | The Real: 起源的空洞。"
    },
    {
        id: "cog_infidelity",
        name: "发现出轨 (The Affair)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "目击伴侣与他人亲密，或者发现秘密手机。",
        core: "爱情神话的破灭。最亲密的人变成了最陌生的他者。 | The Real: 关系的谎言。"
    },
    {
        id: "cog_matrix_glitch",
        name: "现实故障 (The Glitch)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "看到重复的场景（既视感），或者物理法则瞬间失效。",
        core: "世界是虚拟的？怀疑感官，怀疑现实的质地。 | The Real: 模拟的破绽。"
    },
    {
        id: "cog_amnesia",
        name: "失忆苏醒 (Amnesia)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "醒来不知道自己是谁，手里拿着枪或满身是血。",
        core: "能指链的断裂。没有过去，只有赤裸的现在。 | The Real: 历史的空白。"
    },
    {
        id: "cog_betrayal",
        name: "盟友背叛 (The Betrayal)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "最信任的伙伴在关键时刻背后捅刀。",
        core: "信任的创伤。在这个世界上是绝对孤独的。 | The Real: 他人的地狱。"
    },
    {
        id: "cog_false_accusation",
        name: "被诬陷 (Framed)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "在你的包里发现了不属于你的毒品或凶器。",
        core: "真相与证据的脱节。你是清白的，但世界认为你有罪。 | The Real: 证据的暴政。"
    },
    {
        id: "cog_letter",
        name: "神秘信件 (The Letter)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "收到一封信，揭示了关于你过去的惊人秘密。",
        core: "压抑物的回归（Return of the Repressed）。过去没有死。 | The Real: 文字的诅咒。"
    },
    {
        id: "cog_missing_person",
        name: "亲人失踪 (Vanished)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "转身的瞬间，孩子或爱人凭空消失。",
        core: "丧失（Loss）。不仅是失去，而是“不知道去向”的悬置感。 | The Real: 存在的缺席。"
    },
    {
        id: "cog_mandela",
        name: "曼德拉效应 (Mandela Effect)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "发现所有人的记忆都和你不一样，历史被篡改了。",
        core: "集体的疯狂 vs 个体的清醒。是我疯了还是世界疯了？ | The Real: 记忆的虚构。"
    },
    {
        id: "cog_doppelganger",
        name: "双重身 (Doppelgänger)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "在街角看到了另一个自己。",
        core: "独特性的丧失。恐怖谷效应。如果他在那，那我是谁？ | The Real: 自我的分裂。"
    },
    {
        id: "cog_prophecy",
        name: "死亡预言 (The Prophecy)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "算命师、AI或神秘人准确预言了你的死亡时间。",
        core: "宿命论的重压。未来的确定性杀死了现在的自由。 | The Real: 命运的锁定。"
    },
    {
        id: "cog_voice",
        name: "听见幻听 (The Voice)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "脑海里出现不属于自己的声音，下达指令。",
        core: "精神分裂的开端。主体被寄生，主权丧失。 | The Real: 内部的他者。"
    },
    {
        id: "cog_conspiracy",
        name: "发现阴谋 (Conspiracy)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "无意中看到了不该看的文件或会议。",
        core: "世界的后台被揭开。日常生活的表面下是巨大的谎言。 | The Real: 结构的恶意。"
    },
    {
        id: "cog_wrong_reality",
        name: "误入异界 (Wrong Reality)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "回家发现家具位置反了，或者家人不认识自己。",
        core: "平行宇宙。熟悉的陌生感 (The Uncanny)。 | The Real: 家园的异化。"
    },
    {
        id: "cog_gaslighting",
        name: "煤气灯操纵 (Gaslighting)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "被周围人不断告知你的记忆是错的，你是疯子。",
        core: "认知抹杀。对理性的自信被系统性摧毁。 | The Real: 真理的动摇。"
    },
    {
        id: "cog_time_loop",
        name: "时间循环 (Time Loop)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "醒来发现日期重置，同一天重复开始。",
        core: "因果律失效。没有未来，只有永恒的现在。 | The Real: 时间的监狱。"
    },
    {
        id: "cog_imposter_syndrome",
        name: "冒充者恐惧 (Imposter)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "突然确信自己是一个骗子，所有成就都是运气。",
        core: "自我价值的崩塌。害怕被大他者拆穿的焦虑。 | The Real: 能力的虚构。"
    },
    {
        id: "cog_language_loss",
        name: "失语症 (Aphasia)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "突然听不懂别人的语言，或者无法说话。",
        core: "符号界的驱逐。无法进入意义的交换系统。 | The Real: 语言的断裂。"
    },
    {
        id: "cog_idol_fall",
        name: "偶像崩塌 (Idol Fall)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "崇拜的导师/父亲被揭露是罪犯或伪君子。",
        core: "理想我（Ideal Ego）的破碎。精神支柱的断裂。 | The Real: 父亲的堕落。"
    },
    {
        id: "cog_murder_witness",
        name: "目击谋杀 (The Witness)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "透过窗户或门缝，看到了凶杀现场。",
        core: "纯真的丧失。被迫卷入暴力的因果链条。 | The Real: 罪恶的注视。"
    },
    {
        id: "cog_forbidden_desire",
        name: "禁忌觉醒 (Taboo)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "意识到自己爱上了不该爱的人（乱伦/仇人/同性）。",
        core: "欲望与律法的冲突。内在的冲动对抗外在的规则。 | The Real: 欲望的越界。"
    },
    {
        id: "cog_fake_world",
        name: "楚门的世界 (Truman Show)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "发现天空是画出来的，或者周围人是演员。",
        core: "被监视的客体。生活是一场巨大的表演。 | The Real: 存在的虚假。"
    },
    {
        id: "cog_diary_read",
        name: "被读日记 (Exposed)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "发现有人读了你最私密的日记。",
        core: "内心世界的强行曝光。精神上的强奸。 | The Real: 隐私的死亡。"
    },
    {
        id: "cog_sleepwalking",
        name: "梦游行凶 (Sleepwalking)",
        group: "B. 认知的裂痕 (Cognitive)",
        def: "醒来发现手上拿着刀，但毫无记忆。",
        core: "潜意识的接管。我身体里的那个“它”做了什么？ | The Real: 主体的缺席。"
    },

    // =================================================================
    // GROUP C: 肉体的背叛 (Corporeal Intrusion) - 24 Items
    // 关键词：疾病、伤害、变异、性。实在界在身体上的具象化。
    // =================================================================
    {
        id: "bod_diagnosis",
        name: "绝症确诊 (The Diagnosis)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "看着X光片，医生宣判生命倒计时。",
        core: "死亡的具象化。身体不再是容器，而是定时炸弹。 | The Real: 生命的有限。"
    },
    {
        id: "bod_accident",
        name: "严重车祸 (The Crash)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "金属撞击声，剧痛，肢体扭曲或截肢。",
        core: "完整的破碎。瞬间从健全人变成残缺者。 | The Real: 身体的脆弱。"
    },
    {
        id: "bod_pregnancy",
        name: "意外怀孕 (Pregnancy)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "验孕棒的两道杠。体内有了异物/生命。",
        core: "身体的被征用。对未来的不可逆改变。异形感。 | The Real: 内部的入侵。"
    },
    {
        id: "bod_rape",
        name: "性暴力 (Violation)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "被强行侵犯，身体主权的彻底丧失。",
        core: "极致的创伤。主体沦为纯粹的客体/肉块。 | The Real: 尊严的剥夺。"
    },
    {
        id: "bod_mutation",
        name: "身体变异 (Mutation)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "长出了不该有的器官，或者皮肤开始溃烂/鳞片化。",
        core: "人性的丧失。卡夫卡式的变形记，成为怪物。 | The Real: 形式的崩坏。"
    },
    {
        id: "bod_aging",
        name: "衰老瞬间 (The Aging)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "照镜子发现第一根白发，或突然无法完成年轻时的动作。",
        core: "熵增的胜利。时间在肉体上的刻痕，不可逆的衰败。 | The Real: 时间的腐蚀。"
    },
    {
        id: "bod_parasite",
        name: "寄生虫 (Parasite)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "感觉到皮下有东西在蠕动。",
        core: "身体不再属于自己。内部的异己力量。 | The Real: 恶心的共生。"
    },
    {
        id: "bod_addiction",
        name: "毒瘾发作 (Withdrawal)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "身体不受控制地颤抖、呕吐，渴望药物。",
        core: "生化层面的奴役。意志力在化学物质面前的溃败。 | The Real: 驱力的暴政。"
    },
    {
        id: "bod_blindness",
        name: "突然失明 (Blindness)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "世界突然陷入黑暗，或者视力急剧下降。",
        core: "感官剥夺。与世界的视觉连接被切断，陷入孤立。 | The Real: 黑暗的降临。"
    },
    {
        id: "bod_pain",
        name: "剧痛折磨 (Torture)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "持续的、无法缓解的生理疼痛。",
        core: "语言的瓦解。在剧痛中，人退化为只会嚎叫的动物。 | The Real: 痛苦的绝对。"
    },
    {
        id: "bod_hunger",
        name: "极度饥饿 (Starvation)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "为了食物可以放弃尊严，甚至吃人。",
        core: "生存本能压倒道德。文明的外衣被胃酸消化。 | The Real: 本能的回归。"
    },
    {
        id: "bod_impotence",
        name: "性无能/阉割 (Impotence)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "无法勃起，或者性器官受损。",
        core: "菲勒斯的丧失。男性气质或生命力的符号性死亡。 | The Real: 权能的丧失。"
    },
    {
        id: "bod_double_pulse",
        name: "双重脉搏 (Second Heart)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "发现自己有两个心脏，或者是人造人。",
        core: "非人感。对自己物种定义的怀疑。 | The Real: 身份的异质。"
    },
    {
        id: "bod_possession",
        name: "鬼上身 (Possession)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "无法控制肢体，嘴里说出不属于自己的话。",
        core: "主权的移交。身体变成了别人的容器。 | The Real: 意志的被夺。"
    },
    {
        id: "bod_drowning",
        name: "溺水 (Drowning)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "水灌入肺部，无法呼吸，下沉。",
        core: "窒息。回归母体（羊水）的死亡冲动。 | The Real: 呼吸的终止。"
    },
    {
        id: "bod_burning",
        name: "烈火焚身 (Burning)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "皮肤被火焰吞噬，毁灭性的热量。",
        core: "彻底的净化与毁灭。痛觉的巅峰。 | The Real: 能量的暴走。"
    },
    {
        id: "bod_frozen",
        name: "低温冻结 (Freezing)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "四肢失去知觉，意识模糊，想睡。",
        core: "生命的停滞。熵减至零的死寂。 | The Real: 热量的流失。"
    },
    {
        id: "bod_insomnia",
        name: "极度失眠 (Insomnia)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "连续几天无法入睡，现实感剥离。",
        core: "清醒的噩梦。梦境与现实界限模糊。 | The Real: 意识的疲劳。"
    },
    {
        id: "bod_panic_attack",
        name: "恐慌发作 (Panic Attack)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "无法呼吸，心脏狂跳，觉得要死了。",
        core: "无对象的恐惧。身体对心理危机的剧烈反应。 | The Real: 焦虑的溢出。"
    },
    {
        id: "bod_allergy",
        name: "严重过敏 (Anaphylaxis)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "喉头水肿，窒息，对环境的过度排斥。",
        core: "身体对世界的拒绝。微小物质引发的崩溃。 | The Real: 免疫的背叛。"
    },
    {
        id: "bod_surgery_awake",
        name: "术中苏醒 (Awake Surgery)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "在手术台上醒来，能感觉到痛但动不了。",
        core: "终极的无助。作为肉块被切割。 | The Real: 麻醉的失效。"
    },
    {
        id: "bod_mark",
        name: "神秘印记 (The Mark)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "身上突然出现了奇怪的纹身或伤疤。",
        core: "被大他者标记。被选中的诅咒。 | The Real: 符号的刻写。"
    },
    {
        id: "bod_voice_loss",
        name: "声带受损 (Lost Voice)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "张嘴却发不出声音。",
        core: "表达的阻断。在需要求救时失语。 | The Real: 声音的阉割。"
    },
    {
        id: "bod_coma_wake",
        name: "植物人苏醒 (Coma Wake)",
        group: "C. 肉体的背叛 (Corporeal)",
        def: "昏迷多年后醒来，身体萎缩，世界已变。",
        core: "时间的断层。肉体跟不上意识的复苏。 | The Real: 重生的代价。"
    },

    // =================================================================
    // GROUP D: 外部的入侵 (External Invasion) - 24 Items
    // 关键词：自然、战争、怪物、陌生人。来自外部的不可抗力。
    // =================================================================
    {
        id: "ext_storm",
        name: "飓风/台风 (The Storm)",
        group: "D. 外部的入侵 (External)",
        def: "房屋被掀翻，洪水上涨，自然界的暴力。",
        core: "人类文明在自然伟力面前的脆弱。庇护所的失效。 | The Real: 自然的暴怒。"
    },
    {
        id: "ext_earthquake",
        name: "地震 (Earthquake)",
        group: "D. 外部的入侵 (External)",
        def: "大地开裂，建筑倒塌，被埋在废墟下。",
        core: "根基的动摇。最坚固的东西瞬间液化。 | The Real: 大地的背叛。"
    },
    {
        id: "ext_home_invasion",
        name: "入室抢劫 (Home Invasion)",
        group: "D. 外部的入侵 (External)",
        def: "深夜，陌生人闯入家中，手持凶器。",
        core: "安全空间的破裂。最私密的领域被暴力侵犯。 | The Real: 领地的沦陷。"
    },
    {
        id: "ext_monster",
        name: "怪物现身 (The Monster)",
        group: "D. 外部的入侵 (External)",
        def: "在黑暗中看到了不该存在的生物（异形/鬼魂）。",
        core: "理性认知的崩溃。面对不可名状之物的恐惧。 | The Real: 认知的边界。"
    },
    {
        id: "ext_stalker",
        name: "跟踪狂 (The Stalker)",
        group: "D. 外部的入侵 (External)",
        def: "发现有人长期在暗处注视自己，留下痕迹。",
        core: "被凝视的恐惧。生活在不知名的威胁阴影下。 | The Real: 恶意的凝视。"
    },
    {
        id: "ext_war_zone",
        name: "空袭/炮击 (Air Strike)",
        group: "D. 外部的入侵 (External)",
        def: "警报响起，炸弹落下，家园瞬间变成废墟。",
        core: "和平的终结。生命变成统计数字。 | The Real: 战争的降临。"
    },
    {
        id: "ext_car_crash",
        name: "车祸现场 (Car Crash)",
        group: "D. 外部的入侵 (External)",
        def: "金属撞击声，碎玻璃，瞬间的冲击。",
        core: "现代技术的反噬。速度带来的死亡。 | The Real: 意外的暴力。"
    },
    {
        id: "ext_alien",
        name: "外星接触 (Alien Contact)",
        group: "D. 外部的入侵 (External)",
        def: "巨大的飞船停在城市上空，或者遭遇第三类接触。",
        core: "人类中心主义的终结。面对更高维度的无力感。 | The Real: 他者的降临。"
    },
    {
        id: "ext_wild_animal",
        name: "猛兽袭击 (Beast Attack)",
        group: "D. 外部的入侵 (External)",
        def: "在野外遭遇熊、狼或鲨鱼。",
        core: "食物链的逆转。人类重新变回猎物。 | The Real: 原始的恐惧。"
    },
    {
        id: "ext_fire",
        name: "火灾 (Inferno)",
        group: "D. 外部的入侵 (External)",
        def: "烈火封住了出口，浓烟滚滚。",
        core: "毁灭的急迫性。所有财产和记忆的物理消除。 | The Real: 燃烧的终结。"
    },
    {
        id: "ext_shipwreck",
        name: "海难 (Shipwreck)",
        group: "D. 外部的入侵 (External)",
        def: "船沉了，漂浮在无边无际的大海中央。",
        core: "深渊的凝视。彻底的孤独与无助。 | The Real: 海洋的吞噬。"
    },
    {
        id: "ext_plane_crash",
        name: "坠机 (Plane Crash)",
        group: "D. 外部的入侵 (External)",
        def: "飞机失控，急速下坠，氧气面罩落下。",
        core: "重力的复仇。高科技棺材。 | The Real: 坠落的失重。"
    },
    {
        id: "ext_epidemic",
        name: "丧尸爆发 (Zombie Horde)",
        group: "D. 外部的入侵 (External)",
        def: "邻居变成了咬人的怪物，秩序崩溃。",
        core: "人性的异化。昔日的同类变成无脑的威胁。 | The Real: 多数的暴政。"
    },
    {
        id: "ext_kidnap",
        name: "绑架 (Kidnapping)",
        group: "D. 外部的入侵 (External)",
        def: "被塞进车里，套上头套，带到陌生地方。",
        core: "自由的剥夺。沦为他人的筹码或玩物。 | The Real: 强制的位移。"
    },
    {
        id: "ext_sniper",
        name: "狙击手 (Sniper)",
        group: "D. 外部的入侵 (External)",
        def: "身边的人突然中弹倒下，不知道子弹来自何方。",
        core: "看不见的死神。随机性与精确性的恐怖结合。 | The Real: 远程的死亡。"
    },
    {
        id: "ext_avalanche",
        name: "雪崩 (Avalanche)",
        group: "D. 外部的入侵 (External)",
        def: "白色的墙压下来，被掩埋在冰雪中。",
        core: "窒息与寒冷。大自然的白色裹尸布。 | The Real: 静止的暴力。"
    },
    {
        id: "ext_mob",
        name: "暴徒围攻 (The Mob)",
        group: "D. 外部的入侵 (External)",
        def: "愤怒的人群包围了你的车或房子。",
        core: "非理性的集体暴力。个体面对群体的无力。 | The Real: 盲目的仇恨。"
    },
    {
        id: "ext_meteor",
        name: "陨石撞击 (Meteor)",
        group: "D. 外部的入侵 (External)",
        def: "天空中出现巨大的火球，撞击倒计时。",
        core: "不可抗力。宇宙级的毁灭，无处可逃。 | The Real: 终极的宿命。"
    },
    {
        id: "ext_robot_revolt",
        name: "机器叛乱 (AI Revolt)",
        group: "D. 外部的入侵 (External)",
        def: "家里的机器人突然攻击主人。",
        core: "工具的反噬。依赖技术带来的反向奴役。 | The Real: 造物的背叛。"
    },
    {
        id: "ext_fog_mystery",
        name: "迷雾 (The Mist)",
        group: "D. 外部的入侵 (External)",
        def: "浓雾笼罩，雾里有东西。",
        core: "视线的剥夺。对未知的投射性恐惧。 | The Real: 视野的边界。"
    },
    {
        id: "ext_stranger",
        name: "不速之客 (The Stranger)",
        group: "D. 外部的入侵 (External)",
        def: "一个神秘人敲门，或者出现在后座。",
        core: "他者的闯入。平静生活的打破。 | The Real: 陌生的威胁。"
    },
    {
        id: "ext_blackmail",
        name: "勒索信 (Blackmail)",
        group: "D. 外部的入侵 (External)",
        def: "收到照片或信件，威胁要毁掉你的生活。",
        core: "过去的阴影。被掌握把柄的恐惧。 | The Real: 信息的武器。"
    },
    {
        id: "ext_trap",
        name: "陷阱 (The Trap)",
        group: "D. 外部的入侵 (External)",
        def: "踩中地雷，或者掉进深坑。",
        core: "行动的受限。每一步都可能是最后一步。 | The Real: 空间的恶意。"
    },
    {
        id: "ext_curse",
        name: "诅咒生效 (The Curse)",
        group: "D. 外部的入侵 (External)",
        def: "超自然现象开始发生，如预言般准确。",
        core: "因果律的强制执行。无法用科学解释的厄运。 | The Real: 灵异的干涉。"
    }
];
