
import { LibraryItemDef } from '../types';

export const ENGINE_SUBJECTS: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 结构性异化 (Structural Alienation) - 24 Items
    // 关键词：功能化、物化、工具人。主体被系统吞噬，只剩下功能。
    // ============================================================
    {
        id: "subj_cog",
        name: "螺丝钉 (The Cog)",
        group: "A. 结构性异化 (Alienation)",
        def: "庞大科层制或流水线中无名的功能组件。",
        flaw: "习得性无助 (Learned Helplessness)",
        core: "被系统吞噬了个性，只剩下工号。在重复中感到自我的消磨。 | 缺失 ($): 主体性 (Subjectivity)"
    },
    {
        id: "subj_cleaner",
        name: "清理者 (The Cleaner)",
        group: "A. 结构性异化 (Alienation)",
        def: "处理系统产生的污秽、尸体或肮脏秘密的人。",
        flaw: "道德洁癖 (Moral Contamination)",
        core: "目睹了系统最阴暗的真实，但必须保持沉默。 | 缺失 ($): 洁净 (Innocence)"
    },
    {
        id: "subj_battery",
        name: "燃料/电池 (The Battery)",
        group: "A. 结构性异化 (Alienation)",
        def: "被系统榨取能量（体力/脑力/情绪）直至枯竭的人。",
        flaw: "极度倦怠 (Burnout)",
        core: "活着只是为了被消耗。黑客帝国式的存在。 | 缺失 ($): 生命力 (Vitality)"
    },
    {
        id: "subj_prosthesis",
        name: "义肢 (The Prosthesis)",
        group: "A. 结构性异化 (Alienation)",
        def: "大他者的暴力延伸。杀手、特工、打手。",
        flaw: "缺乏自主 (Lack of Agency)",
        core: "只有在执行命令时才觉得自己活着。我是主人的手。 | 缺失 ($): 意志 (Will)"
    },
    {
        id: "subj_ornament",
        name: "装饰品 (The Ornament)",
        group: "A. 结构性异化 (Alienation)",
        def: "花瓶、奖杯配偶、吉祥物。存在的意义是被凝视。",
        flaw: "自我客体化 (Self-Objectification)",
        core: "必须时刻保持完美，一旦有裂痕就会被抛弃。 | 缺失 ($): 内核 (Depth)"
    },
    {
        id: "subj_number",
        name: "数字/编号 (The Number)",
        group: "A. 结构性异化 (Alienation)",
        def: "囚犯、实验体、难民。名字被剥夺，只剩编号。",
        flaw: "去人格化 (Depersonalization)",
        core: "在表格里，我只是一个统计学数据。 | 缺失 ($): 名字 (Name)"
    },
    {
        id: "subj_spare_part",
        name: "备胎 (The Spare Part)",
        group: "A. 结构性异化 (Alienation)",
        def: "为了替换某人而存在。克隆人、替补、影子。",
        flaw: "无价值感 (Redundancy)",
        core: "我的存在是多余的，除非正主消失。 | 缺失 ($): 独特性 (Uniqueness)"
    },
    {
        id: "subj_algorithm",
        name: "算法奴隶 (The Algo-Slave)",
        group: "A. 结构性异化 (Alienation)",
        def: "外卖员、网约车司机。被代码和倒计时指挥肉身。",
        flaw: "时间焦虑 (Time Anxiety)",
        core: "被困在永远无法完成的KPI里。 | 缺失 ($): 自由 (Freedom)"
    },
    {
        id: "subj_filter",
        name: "过滤器 (The Filter)",
        group: "A. 结构性异化 (Alienation)",
        def: "审核员、鉴定师。每天过滤垃圾和毒素，保护大众。",
        flaw: "精神污染 (Trauma Exposure)",
        core: "我是下水道的格栅，阻挡着污秽。 | 缺失 ($): 心理健康 (Sanity)"
    },
    {
        id: "subj_mirror",
        name: "镜子 (The Mirror)",
        group: "A. 结构性异化 (Alienation)",
        def: "专门模仿、取悦他人的人。变色龙。",
        flaw: "空心人 (Hollow Self)",
        core: "我反映你想要的样子，但我自己是谁？ | 缺失 ($): 自我 (Self)"
    },
    {
        id: "subj_echo",
        name: "回声 (The Echo)",
        group: "A. 结构性异化 (Alienation)",
        def: "传声筒、秘书、发言人。没有自己的声音。",
        flaw: "失语 (Aphasia)",
        core: "我只重复主人的话。 | 缺失 ($): 声音 (Voice)"
    },
    {
        id: "subj_shadow",
        name: "影子 (The Shadow)",
        group: "A. 结构性异化 (Alienation)",
        def: "活在伟人阴影下的人。副手、弟弟、替身。",
        flaw: "嫉妒 (Envy)",
        core: "光永远打不到我身上。 | 缺失 ($): 光 (Light)"
    },
    {
        id: "subj_ghost_worker",
        name: "幽灵劳工 (Ghost Worker)",
        group: "A. 结构性异化 (Alienation)",
        def: "远程为AI标注数据的人，隐形的基础设施。",
        flaw: "不可见 (Invisibility)",
        core: "世界享受我的劳动成果，但不知道我的存在。 | 缺失 ($): 认可 (Recognition)"
    },
    {
        id: "subj_moderator",
        name: "守门人 (The Gatekeeper)",
        group: "A. 结构性异化 (Alienation)",
        def: "拥有微小权力（盖章/开门）的底层官僚。",
        flaw: "权力的幻觉 (Petty Power)",
        core: "我虽然底层，但我能让你过不去。 | 缺失 ($): 尊严 (Dignity)"
    },
    {
        id: "subj_lab_rat",
        name: "小白鼠 (The Lab Rat)",
        group: "A. 结构性异化 (Alienation)",
        def: "被用于测试新药、制度或战争的消耗品。",
        flaw: "被动受难 (Victimization)",
        core: "我的痛苦是为了大局的数据。 | 缺失 ($): 安全 (Safety)"
    },
    {
        id: "subj_dummy",
        name: "测试假人 (Crash Dummy)",
        group: "A. 结构性异化 (Alienation)",
        def: "专门用来承受伤害的人。替罪羊的物理版。",
        flaw: "痛觉麻木 (Numbness)",
        core: "撞击是我的宿命。 | 缺失 ($): 感觉 (Feeling)"
    },
    {
        id: "subj_npc",
        name: "NPC (The NPC)",
        group: "A. 结构性异化 (Alienation)",
        def: "觉得周围人都是主角，只有自己是背景板。",
        flaw: "平庸恐惧 (Fear of Mediocrity)",
        core: "我没有主线任务。 | 缺失 ($): 主角光环 (Protagonism)"
    },
    {
        id: "subj_uniform",
        name: "制服 (The Uniform)",
        group: "A. 结构性异化 (Alienation)",
        def: "警察、士兵、护士。职业身份完全覆盖了个人身份。",
        flaw: "角色固化 (Role Fixation)",
        core: "脱下制服，我就什么都不是了。 | 缺失 ($): 个性 (Individuality)"
    },
    {
        id: "subj_voice",
        name: "声优/客服 (The Voice)",
        group: "A. 结构性异化 (Alienation)",
        def: "只有声音被消费，肉体被隔离。",
        flaw: "身体解离 (Disembodiment)",
        core: "爱上我声音的人，会讨厌我的脸。 | 缺失 ($): 实体 (Body)"
    },
    {
        id: "subj_hand",
        name: "手 (The Hand)",
        group: "A. 结构性异化 (Alienation)",
        def: "技工、钢琴家、代笔。局部器官被神化或工具化。",
        flaw: "局部异化 (Synecdoche)",
        core: "我的手比我的命值钱。 | 缺失 ($): 完整 (Wholeness)"
    },
    {
        id: "subj_eye",
        name: "眼 (The Eye)",
        group: "A. 结构性异化 (Alienation)",
        def: "摄影师、监控员、窥视者。只负责看，不负责参与。",
        flaw: "旁观者 (Voyeurism)",
        core: "我记录生活，但我不生活。 | 缺失 ($): 参与 (Participation)"
    },
    {
        id: "subj_ear",
        name: "耳 (The Ear)",
        group: "A. 结构性异化 (Alienation)",
        def: "神父、心理医生、窃听者。承载秘密的容器。",
        flaw: "秘密的重负 (Burden of Secrets)",
        core: "我装满了垃圾，快溢出来了。 | 缺失 ($): 倾诉 (Expression)"
    },
    {
        id: "subj_foot",
        name: "足 (The Foot)",
        group: "A. 结构性异化 (Alienation)",
        def: "信使、长跑者、流浪者。永远在路上。",
        flaw: "无法停留 (Restlessness)",
        core: "停下来就是死。 | 缺失 ($): 终点 (Destination)"
    },
    {
        id: "subj_brick",
        name: "砖块 (The Brick)",
        group: "A. 结构性异化 (Alienation)",
        def: "长城的一块砖。集体主义的基石。",
        flaw: "同质化 (Homogeneity)",
        core: "即使碎了，也马上有新的填上。 | 缺失 ($): 不可替代性 (Irreplaceability)"
    },

    // ============================================================
    // GROUP B. 身份的迷宫 (Identity Labyrinth) - 24 Items
    // 关键词：记忆、真伪、分裂、扮演。我是谁？
    // ============================================================
    {
        id: "subj_amnesiac",
        name: "失忆者 (The Amnesiac)",
        group: "B. 身份的迷宫 (Identity)",
        def: "失去了过去，符号链条断裂的人。",
        flaw: "无根 (Rootlessness)",
        core: "一张白纸，也是一个幽灵。没有历史，就没有身份的锚点。 | 缺失 ($): 记忆 (Memory)"
    },
    {
        id: "subj_imposter",
        name: "冒充者 (The Imposter)",
        group: "B. 身份的迷宫 (Identity)",
        def: "窃取或被迫顶替了他人身份的人。",
        flaw: "被揭穿的恐惧 (Paranoia)",
        core: "活在谎言中。整个生活都是一场高强度的表演。 | 缺失 ($): 真实 (Authenticity)"
    },
    {
        id: "subj_clone",
        name: "克隆人 (The Clone)",
        group: "B. 身份的迷宫 (Identity)",
        def: "基因复制品。知道自己有一个“原件”。",
        flaw: "本体论怀疑 (Ontological Doubt)",
        core: "我是多余的吗？我有灵魂吗？ | 缺失 ($): 原创性 (Originality)"
    },
    {
        id: "subj_twin",
        name: "双生子 (The Twin)",
        group: "B. 身份的迷宫 (Identity)",
        def: "拥有一个完美的/邪恶的镜像兄弟姐妹。",
        flaw: "比较焦虑 (Comparison)",
        core: "我永远是那个“不够好”的一半。 | 缺失 ($): 独立性 (Individuality)"
    },
    {
        id: "subj_shapeshifter",
        name: "变形者 (The Shapeshifter)",
        group: "B. 身份的迷宫 (Identity)",
        def: "可以变成任何人，但忘记了自己原本的模样。",
        flaw: "面具粘连 (Mask Adhesion)",
        core: "演得太久，面具长在脸上了。 | 缺失 ($): 本相 (True Face)"
    },
    {
        id: "subj_sleeper",
        name: "沉睡者 (The Sleeper Agent)",
        group: "B. 身份的迷宫 (Identity)",
        def: "被洗脑或植入人格。等待唤醒指令。",
        flaw: "受控 (Programmed)",
        core: "我的意志不是我的。我是一个定时炸弹。 | 缺失 ($): 自由意志 (Free Will)"
    },
    {
        id: "subj_actor",
        name: "体验派演员 (The Method Actor)",
        group: "B. 身份的迷宫 (Identity)",
        def: "为了角色献祭自我，分不清戏里戏外。",
        flaw: "精神分裂 (Schizophrenia)",
        core: "只有在扮演别人时，我才感到真实。 | 缺失 ($): 现实感 (Reality)"
    },
    {
        id: "subj_liar",
        name: "病态说谎者 (The Liar)",
        group: "B. 身份的迷宫 (Identity)",
        def: "无法停止编造故事，用谎言编织世界。",
        flaw: "虚构依赖 (Mythomania)",
        core: "现实太无聊/痛苦，必须加滤镜。 | 缺失 ($): 诚实 (Truth)"
    },
    {
        id: "subj_puppet",
        name: "傀儡 (The Puppet)",
        group: "B. 身份的迷宫 (Identity)",
        def: "名义上的统治者，实际被幕后操纵。",
        flaw: "软弱 (Weakness)",
        core: "坐在王座上的囚徒。 | 缺失 ($): 权力 (Power)"
    },
    {
        id: "subj_doll",
        name: "玩偶 (The Doll)",
        group: "B. 身份的迷宫 (Identity)",
        def: "被精心打扮、被爱，但没有灵魂的客体。",
        flaw: "被动 (Passivity)",
        core: "我是你完美的收藏品。 | 缺失 ($): 生命 (Life)"
    },
    {
        id: "subj_cyborg",
        name: "赛博格 (The Cyborg)",
        group: "B. 身份的迷宫 (Identity)",
        def: "全身大部分替换为机械。忒修斯之船。",
        flaw: "人性流失 (Loss of Humanity)",
        core: "我还剩多少百分比的人类？ | 缺失 ($): 肉体 (Flesh)"
    },
    {
        id: "subj_plastic",
        name: "整容者 (The Plastic)",
        group: "B. 身份的迷宫 (Identity)",
        def: "不断修改外貌，追求某种不可能的完美。",
        flaw: "身体畸形恐惧 (Dysmorphia)",
        core: "镜子里的脸永远不够好。 | 缺失 ($): 接纳 (Acceptance)"
    },
    {
        id: "subj_nobody",
        name: "无名氏 (The Nobody)",
        group: "B. 身份的迷宫 (Identity)",
        def: "平凡到极点，没有任何特征，大众脸。",
        flaw: "平庸 (Mediocrity)",
        core: "我消失了也没人会发现。 | 缺失 ($): 特征 (Feature)"
    },
    {
        id: "subj_anybody",
        name: "千面人 (The Anybody)",
        group: "B. 身份的迷宫 (Identity)",
        def: "没有性格，随波逐流，变成环境需要的人。",
        flaw: "流体人格 (Fluidity)",
        core: "我像水一样，没有形状。 | 缺失 ($): 定性 (Definition)"
    },
    {
        id: "subj_memory_thief",
        name: "记忆大盗 (Memory Thief)",
        group: "B. 身份的迷宫 (Identity)",
        def: "偷取别人的记忆来填充自己的空白。",
        flaw: "寄生 (Parasitism)",
        core: "我的幸福是偷来的。 | 缺失 ($): 经历 (Experience)"
    },
    {
        id: "subj_time_traveler",
        name: "时间旅人 (Time Traveler)",
        group: "B. 身份的迷宫 (Identity)",
        def: "来自未来或过去，在这个时代没有身份。",
        flaw: "错位 (Displacement)",
        core: "我属于昨天或明天，但不属于今天。 | 缺失 ($): 当下 (Now)"
    },
    {
        id: "subj_ghost_self",
        name: "幽灵自我 (The Ghost Self)",
        group: "B. 身份的迷宫 (Identity)",
        def: "虽生犹死。觉得自己已经死了，只是躯壳在动。",
        flaw: "科塔尔综合征 (Cotard Delusion)",
        core: "我是自己的行尸走肉。 | 缺失 ($): 活着的感觉 (Aliveness)"
    },
    {
        id: "subj_hallucination",
        name: "幻觉 (The Hallucination)",
        group: "B. 身份的迷宫 (Identity)",
        def: "可能是别人想象出来的朋友/人格。",
        flaw: "虚构性 (Fictionality)",
        core: "如果做梦的人醒了，我就消失了。 | 缺失 ($): 实体 (Substance)"
    },
    {
        id: "subj_glitch",
        name: "故障体 (The Glitch)",
        group: "B. 身份的迷宫 (Identity)",
        def: "不该存在的错误。世界的Bug。",
        flaw: "不稳定性 (Instability)",
        core: "世界试图修正（删除）我。 | 缺失 ($): 合法性 (Legitimacy)"
    },
    {
        id: "subj_reflection",
        name: "倒影 (The Reflection)",
        group: "B. 身份的迷宫 (Identity)",
        def: "镜子里走出来的影子。试图取代本体。",
        flaw: "模仿 (Mimicry)",
        core: "我想成为真的。 | 缺失 ($): 本体 (Original)"
    },
    {
        id: "subj_avatar",
        name: "虚拟化身 (The Avatar)",
        group: "B. 身份的迷宫 (Identity)",
        def: "网络上的完美形象。与现实中的废柴本体割裂。",
        flaw: "二元对立 (Duality)",
        core: "下线后的我是谁？ | 缺失 ($): 统一 (Unity)"
    },
    {
        id: "subj_deepfake",
        name: "深伪 (The Deepfake)",
        group: "B. 身份的迷宫 (Identity)",
        def: "AI生成的假人。有着完美的脸，但没有过去。",
        flaw: "算法生成的 (Algorithmic)",
        core: "我是数据的集合。 | 缺失 ($): 灵魂 (Soul)"
    },
    {
        id: "subj_chimera",
        name: "缝合怪 (The Chimera)",
        group: "B. 身份的迷宫 (Identity)",
        def: "由不同人的部分拼凑而成。",
        flaw: "排异反应 (Rejection)",
        core: "我不属于任何一个部分。 | 缺失 ($): 和谐 (Harmony)"
    },
    {
        id: "subj_hybrid",
        name: "混血 (The Hybrid)",
        group: "B. 身份的迷宫 (Identity)",
        def: "两个敌对种族/阶级的混血儿。两边都不接受。",
        flaw: "夹缝生存 (In-between)",
        core: "我是停火线上的孩子。 | 缺失 ($): 阵营 (Side)"
    },

    // ============================================================
    // GROUP C. 系统的弃民 (Systemic Outcast) - 24 Items
    // 关键词：放逐、排斥、边缘、反抗。在大他者之外。
    // ============================================================
    {
        id: "subj_stranger",
        name: "异乡人 (The Stranger)",
        group: "C. 系统的弃民 (Outcast)",
        def: "闯入封闭系统的外来者，语言不通者。",
        flaw: "沟通断裂 (Alienation)",
        core: "无法理解这里的规矩，被视为潜在的威胁。 | 缺失 ($): 语言 (Language)"
    },
    {
        id: "subj_refugee",
        name: "难民 (The Refugee)",
        group: "C. 系统的弃民 (Outcast)",
        def: "家园被毁，寻求庇护但被拒绝的人。",
        flaw: "赤裸生命 (Bare Life)",
        core: "失去了一切权利，只剩下肉体的生存需求。 | 缺失 ($): 权利 (Rights)"
    },
    {
        id: "subj_scapegoat",
        name: "替罪羊 (The Scapegoat)",
        group: "C. 系统的弃民 (Outcast)",
        def: "背负了集体罪恶而被驱逐的人。",
        flaw: "冤屈 (Injustice)",
        core: "明明无罪，却必须承担系统的结构性错误。 | 缺失 ($): 清白 (Innocence)"
    },
    {
        id: "subj_monster",
        name: "怪物 (The Monster)",
        group: "C. 系统的弃民 (Outcast)",
        def: "被定义为邪恶的非人存在。",
        flaw: "内化丑陋 (Monstrosity)",
        core: "既然你们叫我怪物，我就做个怪物给你们看。 | 缺失 ($): 人性 (Humanity)"
    },
    {
        id: "subj_heretic",
        name: "异端 (The Heretic)",
        group: "C. 系统的弃民 (Outcast)",
        def: "持有不同信仰或真理，被正统迫害的人。",
        flaw: "被诅咒 (Anathema)",
        core: "我的真理是你们的毒药。 | 缺失 ($): 正统 (Orthodoxy)"
    },
    {
        id: "subj_witch",
        name: "女巫 (The Witch)",
        group: "C. 系统的弃民 (Outcast)",
        def: "拥有危险力量的女性。被恐惧和猎杀。",
        flaw: "禁忌力量 (Taboo Power)",
        core: "他们烧死我，是因为怕我。 | 缺失 ($): 安全 (Safety)"
    },
    {
        id: "subj_bastard",
        name: "私生子 (The Bastard)",
        group: "C. 系统的弃民 (Outcast)",
        def: "血统不纯，被家族排斥的继承人。",
        flaw: "怨恨 (Resentment)",
        core: "我流着国王的血，却睡在马厩里。 | 缺失 ($): 名分 (Title)"
    },
    {
        id: "subj_orphan",
        name: "孤儿 (The Orphan)",
        group: "C. 系统的弃民 (Outcast)",
        def: "没有父母，被世界遗弃。",
        flaw: "被遗弃恐惧 (Abandonment)",
        core: "我是一个错误。 | 缺失 ($): 根源 (Roots)"
    },
    {
        id: "subj_criminal",
        name: "罪犯 (The Criminal)",
        group: "C. 系统的弃民 (Outcast)",
        def: "触犯法律，被通缉的人。",
        flaw: "负罪 (Guilt)",
        core: "我无法在阳光下行走。 | 缺失 ($): 合法性 (Law)"
    },
    {
        id: "subj_prisoner",
        name: "囚徒 (The Prisoner)",
        group: "C. 系统的弃民 (Outcast)",
        def: "物理上被剥夺自由的人。",
        flaw: "幽闭 (Confinement)",
        core: "世界缩小到只有四堵墙。 | 缺失 ($): 空间 (Space)"
    },
    {
        id: "subj_exile",
        name: "流放者 (The Exile)",
        group: "C. 系统的弃民 (Outcast)",
        def: "曾经身居高位，现在被赶出中心。",
        flaw: "落差 (Fall)",
        core: "回忆是最大的折磨。 | 缺失 ($): 地位 (Status)"
    },
    {
        id: "subj_nomad",
        name: "游牧者 (The Nomad)",
        group: "C. 系统的弃民 (Outcast)",
        def: "主动选择流浪，拒绝定居。",
        flaw: "漂泊 (Drifting)",
        core: "家是枷锁。 | 缺失 ($): 安定 (Stability)"
    },
    {
        id: "subj_leper",
        name: "麻风病人 (The Leper)",
        group: "C. 系统的弃民 (Outcast)",
        def: "因病被隔离，被视为不洁。",
        flaw: "不可接触 (Untouchable)",
        core: "我的触碰是诅咒。 | 缺失 ($): 接触 (Touch)"
    },
    {
        id: "subj_untouchable",
        name: "贱民 (The Untouchable)",
        group: "C. 系统的弃民 (Outcast)",
        def: "种姓制度的最底层。",
        flaw: "污秽 (Filth)",
        core: "生来就是脏的。 | 缺失 ($): 洁净 (Purity)"
    },
    {
        id: "subj_traitor",
        name: "叛徒 (The Traitor)",
        group: "C. 系统的弃民 (Outcast)",
        def: "背叛了信任的人。",
        flaw: "信任破产 (Distrust)",
        core: "没人会再相信我。 | 缺失 ($): 信任 (Trust)"
    },
    {
        id: "subj_spy",
        name: "间谍 (The Spy)",
        group: "C. 系统的弃民 (Outcast)",
        def: "生活在敌营，没有真实身份。",
        flaw: "双重生活 (Duplicity)",
        core: "我不仅骗了敌人，也骗了朋友。 | 缺失 ($): 真诚 (Sincerity)"
    },
    {
        id: "subj_defector",
        name: "变节者 (The Defector)",
        group: "C. 系统的弃民 (Outcast)",
        def: "逃离祖国/组织的人。",
        flaw: "恐惧追杀 (Hunted)",
        core: "过去在追赶我。 | 缺失 ($): 和平 (Peace)"
    },
    {
        id: "subj_survivor",
        name: "幸存者 (The Survivor)",
        group: "C. 系统的弃民 (Outcast)",
        def: "大灾难中唯一活下来的人。",
        flaw: "幸存者愧疚 (Survivor's Guilt)",
        core: "为什么死的是他们，不是我？ | 缺失 ($): 同伴 (Others)"
    },
    {
        id: "subj_witness",
        name: "目击者 (The Witness)",
        group: "C. 系统的弃民 (Outcast)",
        def: "看到了不该看的秘密，被追杀。",
        flaw: "知道太多 (Burden of Truth)",
        core: "真相是危险的。 | 缺失 ($): 无知 (Ignorance)"
    },
    {
        id: "subj_anarchist",
        name: "无政府主义者 (The Anarchist)",
        group: "C. 系统的弃民 (Outcast)",
        def: "主动攻击秩序的人。",
        flaw: "破坏欲 (Chaos)",
        core: "只有在废墟上才能建立新世界。 | 缺失 ($): 秩序 (Order)"
    },
    {
        id: "subj_ronin",
        name: "浪人 (The Ronin)",
        group: "C. 系统的弃民 (Outcast)",
        def: "失去主人的武士。",
        flaw: "无主 (Masterless)",
        core: "没有效忠对象，剑就轻了。 | 缺失 ($): 荣誉 (Honor)"
    },
    {
        id: "subj_pirate",
        name: "海盗 (The Pirate)",
        group: "C. 系统的弃民 (Outcast)",
        def: "海上的法外之徒。",
        flaw: "贪婪 (Greed)",
        core: "除了金子和朗姆酒，什么都不信。 | 缺失 ($): 法律 (Law)"
    },
    {
        id: "subj_savage",
        name: "野蛮人 (The Savage)",
        group: "C. 系统的弃民 (Outcast)",
        def: "未被文明开化的人。",
        flaw: "原始 (Primitive)",
        core: "你们的文明是虚伪的。 | 缺失 ($): 文明 (Civilization)"
    },
    {
        id: "subj_mutant",
        name: "变种人 (The Mutant)",
        group: "C. 系统的弃民 (Outcast)",
        def: "基因变异，外表异于常人。",
        flaw: "异类 (Freak)",
        core: "我是进化的下一步，还是错误？ | 缺失 ($): 常态 (Normality)"
    },

    // ============================================================
    // GROUP D. 精神的废墟 (Psychic Ruins) - 24 Items
    // 关键词：心理病理、哲学姿态、极端情绪。
    // ============================================================
    {
        id: "subj_nihilist",
        name: "虚无主义者 (The Nihilist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "看透了世界的荒谬，拒绝赋予任何事物价值。",
        flaw: "无意义 (Meaninglessness)",
        core: "什么都不重要。 | 缺失 ($): 意义 (Meaning)"
    },
    {
        id: "subj_hedonist",
        name: "享乐者 (The Hedonist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "沉溺于感官刺激，却感到深深厌倦。",
        flaw: "成瘾 (Addiction)",
        core: "快感是唯一的真理，也是唯一的监狱。 | 缺失 ($): 满足 (Satisfaction)"
    },
    {
        id: "subj_addict",
        name: "瘾君子 (The Addict)",
        group: "D. 精神的废墟 (Psyche)",
        def: "被某种物质或行为彻底控制。",
        flaw: "奴役 (Slavery)",
        core: "只要一针，世界就正常了。 | 缺失 ($): 自控 (Control)"
    },
    {
        id: "subj_hoarder",
        name: "囤积者 (The Hoarder)",
        group: "D. 精神的废墟 (Psyche)",
        def: "无法丢弃任何东西，被垃圾淹没。",
        flaw: "无法哀悼 (Inability to Mourn)",
        core: "扔掉它，就是扔掉一部分我。 | 缺失 ($): 告别 (Letting Go)"
    },
    {
        id: "subj_perfectionist",
        name: "完美主义者 (The Perfectionist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "对细节的病态控制，无法容忍瑕疵。",
        flaw: "强迫 (Compulsion)",
        core: "如果这里歪了，世界就会毁灭。 | 缺失 ($): 宽容 (Mercy)"
    },
    {
        id: "subj_narcissist",
        name: "自恋者 (The Narcissist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "爱上自己的倒影，没有共情能力。",
        flaw: "唯我 (Solipsism)",
        core: "你们都是我的配角。 | 缺失 ($): 他者 (The Other)"
    },
    {
        id: "subj_masochist",
        name: "受虐狂 (The Masochist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "在痛苦和羞辱中获得快感。",
        flaw: "痛感置换 (Pain as Pleasure)",
        core: "伤害我，证明我存在。 | 缺失 ($): 快乐 (Pleasure)"
    },
    {
        id: "subj_sadist",
        name: "施虐狂 (The Sadist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "将他人作为工具，享受控制和折磨。",
        flaw: "残忍 (Cruelty)",
        core: "你是物，我是神。 | 缺失 ($): 同情 (Empathy)"
    },
    {
        id: "subj_voyeur",
        name: "窥视者 (The Voyeur)",
        group: "D. 精神的废墟 (Psyche)",
        def: "通过偷窥他人生活获得满足，不敢介入。",
        flaw: "被动 (Passivity)",
        core: "我看故我在。 | 缺失 ($): 介入 (Action)"
    },
    {
        id: "subj_dreamer",
        name: "做梦者 (The Dreamer)",
        group: "D. 精神的废墟 (Psyche)",
        def: "活在幻想里，拒绝醒来面对现实。",
        flaw: "逃避 (Escapism)",
        core: "现实太痛了，梦里什么都有。 | 缺失 ($): 现实 (Reality)"
    },
    {
        id: "subj_insomniac",
        name: "失眠者 (The Insomniac)",
        group: "D. 精神的废墟 (Psyche)",
        def: "无法入睡，现实与幻觉边界模糊。",
        flaw: "清醒梦 (Waking Dream)",
        core: "这就是地狱，永远醒着。 | 缺失 ($): 休整 (Rest)"
    },
    {
        id: "subj_paranoiac",
        name: "偏执狂 (The Paranoiac)",
        group: "D. 精神的废墟 (Psyche)",
        def: "认为所有人都在针对自己，寻找不存在的联系。",
        flaw: "过度诠释 (Over-interpretation)",
        core: "这是一个阴谋。 | 缺失 ($): 信任 (Trust)"
    },
    {
        id: "subj_schizo",
        name: "分裂者 (The Schizophrenic)",
        group: "D. 精神的废墟 (Psyche)",
        def: "语言与身体解体，能指链断裂。",
        flaw: "破碎 (Fragmentation)",
        core: "我不是我，我是碎片。 | 缺失 ($): 统一性 (Unity)"
    },
    {
        id: "subj_melancholic",
        name: "忧郁症 (The Melancholic)",
        group: "D. 精神的废墟 (Psyche)",
        def: "将自己认同为丢失的垃圾。",
        flaw: "自我废弃 (Self-Abjection)",
        core: "我是一坨无用的肉。 | 缺失 ($): 价值 (Worth)"
    },
    {
        id: "subj_solipsist",
        name: "唯我论者 (The Solipsist)",
        group: "D. 精神的废墟 (Psyche)",
        def: "认为只有自己是真实的，世界是幻象。",
        flaw: "孤独 (Loneliness)",
        core: "你们都是NPC。 | 缺失 ($): 真实世界 (World)"
    },
    {
        id: "subj_prophet",
        name: "先知 (The Prophet)",
        group: "D. 精神的废墟 (Psyche)",
        def: "掌握了真理但无人相信。卡珊德拉。",
        flaw: "被误解 (Misunderstood)",
        core: "我看见了毁灭，但没人听。 | 缺失 ($): 听众 (Audience)"
    },
    {
        id: "subj_martyr",
        name: "殉道者 (The Martyr)",
        group: "D. 精神的废墟 (Psyche)",
        def: "渴望通过自我牺牲来证明价值。",
        flaw: "牺牲情结 (Sacrifice)",
        core: "我的死将成为纪念碑。 | 缺失 ($): 生命 (Life)"
    },
    {
        id: "subj_fanatic",
        name: "狂信徒 (The Fanatic)",
        group: "D. 精神的废墟 (Psyche)",
        def: "为了信仰可以牺牲一切理性。",
        flaw: "盲目 (Blindness)",
        core: "为了神，杀戮也是正义。 | 缺失 ($): 理性 (Reason)"
    },
    {
        id: "subj_gambler",
        name: "赌徒 (The Gambler)",
        group: "D. 精神的废墟 (Psyche)",
        def: "只有在风险中才能感觉到活着。",
        flaw: "死亡驱力 (Death Drive)",
        core: "要么赢一把大的，要么死。 | 缺失 ($): 安全感 (Security)"
    },
    {
        id: "subj_collector",
        name: "收藏家 (The Collector)",
        group: "D. 精神的废墟 (Psyche)",
        def: "试图通过收集客体来填满空洞。",
        flaw: "恋物 (Fetishism)",
        core: "物不会背叛。 | 缺失 ($): 亲密 (Intimacy)"
    },
    {
        id: "subj_cynic",
        name: "犬儒 (The Cynic)",
        group: "D. 精神的废墟 (Psyche)",
        def: "看穿一切虚伪，只相信利益。",
        flaw: "冷漠 (Callousness)",
        core: "每个人都有价码。 | 缺失 ($): 希望 (Hope)"
    },
    {
        id: "subj_stoic",
        name: "斯多葛 (The Stoic)",
        group: "D. 精神的废墟 (Psyche)",
        def: "压抑所有情感，像石头一样承受。",
        flaw: "压抑 (Repression)",
        core: "我不痛。 | 缺失 ($): 情感 (Emotion)"
    },
    {
        id: "subj_observer",
        name: "观察者 (The Observer)",
        group: "D. 精神的废墟 (Psyche)",
        def: "记录历史，但不干涉。",
        flaw: "抽离 (Detachment)",
        core: "我只是一个镜头。 | 缺失 ($): 人性 (Humanity)"
    },
    {
        id: "subj_waiter",
        name: "等待者 (The Waiter)",
        group: "D. 精神的废墟 (Psyche)",
        def: "耗尽一生等待一个不会来的救赎（戈多）。",
        flaw: "停滞 (Stasis)",
        core: "明天他就会来了。 | 缺失 ($): 行动 (Action)"
    }
];
