
import { LibraryItemDef } from '../types';

export const ENGINE_STAKES: LibraryItemDef[] = [
    // =================================================================
    // GROUP A: 符号性死亡 (Symbolic Death) - 24 Items
    // 关键词：名誉、身份、话语权、记忆。社会层面的抹杀。
    // =================================================================
    {
        id: "stake_erasure",
        name: "社会性抹杀 (Social Erasure)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "档案被销毁，名字成为禁忌，所有人都不再记得你。",
        core: "变成乔治·奥威尔笔下的“非人（Unperson）”。物理上活着，但社会意义上已死。 | The Castration: 存在的被否定。"
    },
    {
        id: "stake_exile",
        name: "永久放逐 (Eternal Exile)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "被驱逐出人类文明或家园，永远流浪在荒原。",
        core: "切断了与“根”的所有联系。没有归属，没有语言，只有永恒的孤独。 | The Castration: 归属的剥夺。"
    },
    {
        id: "stake_slave",
        name: "成为奴隶 (Enslavement)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "彻底丧失自由意志，身体和思想都成为他人的财产。",
        core: "被物化为工具。不仅要劳动，还要被迫赞美奴役你的主人。 | The Castration: 主体性的丧失。"
    },
    {
        id: "stake_replace",
        name: "被替代 (Replacement)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "另一个“更完美”的自己（克隆人/替身）接管了你的人生。",
        core: "看着别人用你的名字生活，而你变成了多余的废品。 | The Castration: 独特性的消亡。"
    },
    {
        id: "stake_aphasia",
        name: "失语 (Aphasia/Silence)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "被剥夺了发声的权利，或者没人能听懂你的语言。",
        core: "有口难言的终极冤屈。被关在隔音的玻璃房里呐喊。 | The Castration: 话语权的切断。"
    },
    {
        id: "stake_stigma",
        name: "污名化 (Stigmatization)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "被永远钉在历史的耻辱柱上，成为后世唾弃的恶魔。",
        core: "不仅输了当下，还输掉了名誉和未来。真相被永远歪曲。 | The Castration: 荣誉的玷污。"
    },
    {
        id: "stake_forgotten",
        name: "被遗忘 (Being Forgotten)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "你的存在没有留下任何痕迹，像从未出生过一样。",
        core: "寻梦环游记式的终极死亡。记忆的消散。 | The Castration: 历史的清零。"
    },
    {
        id: "stake_unseen",
        name: "透明化 (Invisibility)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "无论做什么都无法引起他人的注意。",
        core: "被大他者的凝视所忽略。 | The Castration: 关注的缺失。"
    },
    {
        id: "stake_discredited",
        name: "信用破产 (Discredited)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "没有人再相信你说的一句话。",
        core: "狼来了。语言失去了效力。 | The Castration: 信誉的丧失。"
    },
    {
        id: "stake_mockery",
        name: "成为笑柄 (Public Mockery)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "你的痛苦变成了他人的娱乐。",
        core: "尊严被践踏。小丑化。 | The Castration: 尊严的剥夺。"
    },
    {
        id: "stake_rank_loss",
        name: "阶级跌落 (Loss of Rank)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "从云端跌入泥潭，失去所有特权。",
        core: "曾经拥有的痛。 | The Castration: 地位的丧失。"
    },
    {
        id: "stake_name_loss",
        name: "剥夺姓名 (Loss of Name)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "千与千寻。名字被拿走，只剩下代号。",
        core: "符号性自杀。 | The Castration: 身份的丧失。"
    },
    {
        id: "stake_heritage_loss",
        name: "断绝传承 (Lineage End)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "家族或流派在你这一代终结。",
        core: "对祖先的背叛。 | The Castration: 传承的断裂。"
    },
    {
        id: "stake_secret_exposed",
        name: "秘密曝光 (Secret Exposed)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "核心秘密被公之于众，社会面具破碎。",
        core: "赤裸的羞耻。 | The Castration: 隐私的丧失。"
    },
    {
        id: "stake_misunderstood",
        name: "永恒误解 (Eternal Misunderstanding)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "虽做善事，却被视为恶人，无法辩解。",
        core: "黑暗骑士。 | The Castration: 正义的扭曲。"
    },
    {
        id: "stake_ghosted",
        name: "被断联 (Ghosted)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "所有亲友突然切断与你的联系。",
        core: "社会性隔离。 | The Castration: 关系的切断。"
    },
    {
        id: "stake_censored",
        name: "被审查 (Censored)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "你的作品和思想被禁止传播。",
        core: "思想的绝育。 | The Castration: 表达的禁止。"
    },
    {
        id: "stake_data_wipe",
        name: "数据抹除 (Data Wipe)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "在这个数字化世界，你的所有账号被注销。",
        core: "数字性死亡。 | The Castration: 痕迹的消除。"
    },
    {
        id: "stake_language_loss",
        name: "丧失母语 (Language Loss)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "被迫说敌人的语言，忘记自己的语言。",
        core: "文化的根除。 | The Castration: 文化的死亡。"
    },
    {
        id: "stake_face_loss",
        name: "毁容 (Disfigurement)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "面容被毁，无法再被社会接纳。",
        core: "魅影。面具下的怪物。 | The Castration: 镜像的破碎。"
    },
    {
        id: "stake_uniform_strip",
        name: "剥夺制服 (Stripped Uniform)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "被公开剥夺勋章和制服。",
        core: "荣誉的解除。 | The Castration: 职业的死亡。"
    },
    {
        id: "stake_scandal",
        name: "身败名裂 (Scandal)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "丑闻缠身，成为过街老鼠。",
        core: "社会性死亡的极致。 | The Castration: 名誉的毁灭。"
    },
    {
        id: "stake_contract_void",
        name: "契约作废 (Void Contract)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "毕生奋斗换来的承诺被宣布无效。",
        core: "规则的背叛。 | The Castration: 预期的落空。"
    },
    {
        id: "stake_legacy_ruin",
        name: "遗产毁灭 (Legacy Ruin)",
        group: "A. 符号性死亡 (Symbolic)",
        def: "你建立的帝国在你眼前崩塌。",
        core: "奥斯曼狄斯。 | The Castration: 成就的归零。"
    },

    // =================================================================
    // GROUP B: 本体论崩塌 (Ontological Collapse) - 24 Items
    // 关键词：理智、记忆、人性、现实。作为“人”的资格丧失。
    // =================================================================
    {
        id: "stake_madness",
        name: "理智崩溃 (Total Madness)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "彻底分不清现实与幻觉，陷入永恒的谵妄。",
        core: "被困在自己的大脑里。世界变成了充满怪物的地狱，且无法醒来。 | The Castration: 理性的终结。"
    },
    {
        id: "stake_memory_wipe",
        name: "记忆格式化 (Memory Wipe)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "所有的经历、情感和爱都被清空，变成一张白纸。",
        core: "“我”是由记忆构成的。没了记忆，那个奋斗的主角就死了，只剩一副躯壳。 | The Castration: 历史的清零。"
    },
    {
        id: "stake_dissolution",
        name: "自我消解 (Dissolution)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "意识融化在集体意志（Hive Mind）或虚无中，不再是个体。",
        core: "像一滴水消失在海里。虽然“存在”，但不再有“自我意识”。 | The Castration: 边界的消失。"
    },
    {
        id: "stake_dehuman",
        name: "成为非人 (Dehumanization)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "退化为野兽，或者变成纯粹的机器，失去了人类的情感。",
        core: "只有本能或只有逻辑。不再能感受爱、恨或悲伤。 | The Castration: 人性的泯灭。"
    },
    {
        id: "stake_eternal_prison",
        name: "永恒囚禁 (Eternal Imprisonment)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "被困在一个静止的时间点，或一个无法逃脱的空间（如黑洞视界）。",
        core: "求生不得，求死不能。面对的是无穷无尽的时间折磨。 | The Castration: 时间的停滞。"
    },
    {
        id: "stake_nihilism",
        name: "绝对虚无 (Nihilism)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "看透了宇宙毫无意义，彻底丧失了行动的所有动力。",
        core: "心死。比抑郁更深，是一种绝对的冷漠和静止。 | The Castration: 意义的空洞。"
    },
    {
        id: "stake_glitch",
        name: "现实故障 (Reality Glitch)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "发现世界是虚拟的，自己只是代码。",
        core: "楚门的世界。存在的根基被抽走。 | The Castration: 真实的破灭。"
    },
    {
        id: "stake_possession",
        name: "被附身 (Possession)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "身体被另一个意识接管，自己成为旁观者。",
        core: "主权的丧失。看着自己的手做坏事。 | The Castration: 控制权的丧失。"
    },
    {
        id: "stake_mutation",
        name: "变异 (Mutation)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "身体发生不可逆的畸变，变成怪物。",
        core: "卡夫卡变形记。不再属于人类物种。 | The Castration: 形态的崩坏。"
    },
    {
        id: "stake_time_loop",
        name: "时间死循环 (Time Loop)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "永远重复同一天，无法逃脱。",
        core: "西西弗斯。没有任何未来，只有重复。 | The Castration: 未来的丧失。"
    },
    {
        id: "stake_merging",
        name: "强行融合 (Forced Merging)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "与憎恨的人或物融为一体。",
        core: "苍蝇人。纯洁性的丧失。 | The Castration: 独立的丧失。"
    },
    {
        id: "stake_sensory_loss",
        name: "感官剥夺 (Sensory Deprivation)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "失去视听触觉，被困在黑暗的脑壳里。",
        core: "绝对的孤立。 | The Castration: 感知的切断。"
    },
    {
        id: "stake_puppet",
        name: "成为傀儡 (Puppet)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "虽有意识，但行动完全受控于人。",
        core: "提线木偶。 | The Castration: 意志的无效。"
    },
    {
        id: "stake_dementia",
        name: "痴呆 (Dementia)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "心智缓慢退化，逐渐忘记自己是谁。",
        core: "缓慢的死亡。 | The Castration: 智力的衰退。"
    },
    {
        id: "stake_dream_trap",
        name: "梦境陷阱 (Dream Trap)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "永远无法醒来，分不清梦与醒。",
        core: "盗梦空间迷失域。 | The Castration: 清醒的丧失。"
    },
    {
        id: "stake_soul_loss",
        name: "失去灵魂 (Soul Loss)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "变成没有情感的空壳。",
        core: "摄魂怪之吻。 | The Castration: 灵性的死亡。"
    },
    {
        id: "stake_objectification",
        name: "彻底物化 (Objectification)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "被当作物品对待，甚至被做成物品。",
        core: "恐怖蜡像馆。 | The Castration: 主体的客体化。"
    },
    {
        id: "stake_recurrence",
        name: "永恒轮回 (Eternal Recurrence)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "不仅是重复，而是注定要一次次经历同样的痛苦。",
        core: "尼采的噩梦。 | The Castration: 改变的不可能。"
    },
    {
        id: "stake_shrink",
        name: "微缩化 (Shrinking)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "变得极其微小，世界变得巨大而恐怖。",
        core: "不可思议的收缩人。 | The Castration: 尺度的压制。"
    },
    {
        id: "stake_shadow",
        name: "成为影子 (Becoming Shadow)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "失去实体，只能依附于他人。",
        core: "彼得潘的影子。 | The Castration: 实体的丧失。"
    },
    {
        id: "stake_parasite",
        name: "被寄生 (Parasitized)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "身体成为异种的温床。",
        core: "异形。 | The Castration: 身体主权的沦陷。"
    },
    {
        id: "stake_data_upload",
        name: "意识上传 (Upload)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "不再是生物，只是一串代码。",
        core: "忒修斯之船。我还是我吗？ | The Castration: 碳基的终结。"
    },
    {
        id: "stake_silence_voice",
        name: "声音被夺 (Stolen Voice)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "小美人鱼。无法表达。",
        core: "交流的死亡。 | The Castration: 表达的丧失。"
    },
    {
        id: "stake_invisibility",
        name: "无法被看见 (Unseen)",
        group: "B. 本体论崩塌 (Ontological)",
        def: "物理隐形，没人能看到你。",
        core: "透明人。 | The Castration: 交互的阻断。"
    },

    // =================================================================
    // GROUP C: 道德的堕落 (Moral Corruption) - 24 Items
    // 关键词：背叛、罪恶、同化、信仰。灵魂层面的死亡。
    // =================================================================
    {
        id: "stake_monster",
        name: "成为怪物 (Becoming the Monster)",
        group: "C. 道德的堕落 (Moral)",
        def: "屠龙者终成恶龙。变成了自己曾经最憎恨的人。",
        core: "赢了战斗，输了灵魂。看着镜子里的自己感到极度陌生。 | The Castration: 道德的异化。"
    },
    {
        id: "stake_betrayal",
        name: "背叛挚爱 (The Betrayal)",
        group: "C. 道德的堕落 (Moral)",
        def: "被迫亲手杀害或出卖自己最爱的人。",
        core: "活着就是一种折磨。余生都将活在无法洗刷的罪恶感中。 | The Castration: 爱的断裂。"
    },
    {
        id: "stake_assimilation",
        name: "平庸的同化 (Assimilation)",
        group: "C. 道德的堕落 (Moral)",
        def: "放弃反抗，接受大他者的招安，做一个快乐的螺丝钉。",
        core: "《1984》的结局——“他战胜了自己，他热爱老大哥”。 | The Castration: 精神的顺从。"
    },
    {
        id: "stake_blue_pill",
        name: "虚假的幸福 (The Blue Pill)",
        group: "C. 道德的堕落 (Moral)",
        def: "选择退回母体，活在美好的谎言中，拒绝残酷的真相。",
        core: "自欺欺人。虽然快乐，但那是家畜的快乐。 | The Castration: 真相的放弃。"
    },
    {
        id: "stake_faith_loss",
        name: "信仰破碎 (Loss of Faith)",
        group: "C. 道德的堕落 (Moral)",
        def: "发现自己奉献一生的神或主义是假的。",
        core: "精神支柱崩塌。感觉之前的人生全是笑话。 | The Castration: 信仰的破产。"
    },
    {
        id: "stake_shame",
        name: "极度羞耻 (Deep Shame)",
        group: "C. 道德的堕落 (Moral)",
        def: "做出违背良知的事，无法面对自己。",
        core: "良心的谴责。 | The Castration: 自尊的毁灭。"
    },
    {
        id: "stake_corruption",
        name: "腐败 (Corruption)",
        group: "C. 道德的堕落 (Moral)",
        def: "为了利益出卖原则，逐渐烂掉。",
        core: "温水煮青蛙。 | The Castration: 原则的消融。"
    },
    {
        id: "stake_cowardice",
        name: "懦弱 (Cowardice)",
        group: "C. 道德的堕落 (Moral)",
        def: "在关键时刻选择了逃跑，余生都在后悔。",
        core: "吉姆爷。 | The Castration: 勇气的丧失。"
    },
    {
        id: "stake_hypocrisy",
        name: "伪善 (Hypocrisy)",
        group: "C. 道德的堕落 (Moral)",
        def: "变成了一个戴着面具的骗子，表里不一。",
        core: "人格的分裂。 | The Castration: 诚实的丧失。"
    },
    {
        id: "stake_cruelty",
        name: "残忍 (Cruelty)",
        group: "C. 道德的堕落 (Moral)",
        def: "开始享受施加痛苦，失去了同情心。",
        core: "人性的黑化。 | The Castration: 仁慈的丧失。"
    },
    {
        id: "stake_greed",
        name: "贪婪 (Greed)",
        group: "C. 道德的堕落 (Moral)",
        def: "为了金钱牺牲一切，变成了守财奴。",
        core: "斯毛戈。 | The Castration: 情感的被吞噬。"
    },
    {
        id: "stake_addiction",
        name: "沉沦 (Addiction)",
        group: "C. 道德的堕落 (Moral)",
        def: "屈服于低级欲望，无法自拔。",
        core: "意志的溃败。 | The Castration: 自律的丧失。"
    },
    {
        id: "stake_indifference",
        name: "冷漠 (Indifference)",
        group: "C. 道德的堕落 (Moral)",
        def: "对他人的痛苦无动于衷，心变硬了。",
        core: "麻木。 | The Castration: 共情的死亡。"
    },
    {
        id: "stake_complicity",
        name: "共犯 (Complicity)",
        group: "C. 道德的堕落 (Moral)",
        def: "虽然没动手，但保持沉默，成为了恶的帮凶。",
        core: "沉默的罪。 | The Castration: 无辜的丧失。"
    },
    {
        id: "stake_selling_out",
        name: "出卖 (Selling Out)",
        group: "C. 道德的堕落 (Moral)",
        def: "将天赋或理想变现，做庸俗的生意。",
        core: "艺术的死亡。 | The Castration: 理想的破灭。"
    },
    {
        id: "stake_tyrant",
        name: "成为暴君 (Becoming Tyrant)",
        group: "C. 道德的堕落 (Moral)",
        def: "为了秩序而牺牲自由，变成独裁者。",
        core: "权力的腐蚀。 | The Castration: 正义的异化。"
    },
    {
        id: "stake_false_prophet",
        name: "伪先知 (False Prophet)",
        group: "C. 道德的堕落 (Moral)",
        def: "欺骗追随者，利用他人的信仰。",
        core: "神棍。 | The Castration: 真实的亵渎。"
    },
    {
        id: "stake_parasite_moral",
        name: "寄生 (Parasitism)",
        group: "C. 道德的堕落 (Moral)",
        def: "依靠吸食他人的生命力活着。",
        core: "吸血鬼的道德版。 | The Castration: 独立的丧失。"
    },
    {
        id: "stake_revenge_consume",
        name: "被复仇吞噬 (Consumed by Revenge)",
        group: "C. 道德的堕落 (Moral)",
        def: "为了复仇不惜毁灭世界。",
        core: "执念的奴隶。 | The Castration: 未来的放弃。"
    },
    {
        id: "stake_cynicism",
        name: "犬儒 (Cynicism)",
        group: "C. 道德的堕落 (Moral)",
        def: "不再相信任何美好，嘲笑一切。",
        core: "心灵的硬化。 | The Castration: 希望的死亡。"
    },
    {
        id: "stake_sloth",
        name: "怠惰 (Sloth)",
        group: "C. 道德的堕落 (Moral)",
        def: "放弃了成长的可能，任由自己腐烂。",
        core: "潜能的浪费。 | The Castration: 发展的停滞。"
    },
    {
        id: "stake_envy",
        name: "嫉妒 (Envy)",
        group: "C. 道德的堕落 (Moral)",
        def: "想要毁灭比自己美好的人。",
        core: "萨列里。 | The Castration: 自我的毒害。"
    },
    {
        id: "stake_pride",
        name: "傲慢 (Pride)",
        group: "C. 道德的堕落 (Moral)",
        def: "因为自大而导致悲剧，且死不悔改。",
        core: "希腊悲剧。 | The Castration: 智慧的蒙蔽。"
    },
    {
        id: "stake_lust",
        name: "色欲 (Lust)",
        group: "C. 道德的堕落 (Moral)",
        def: "被肉欲控制，失去了理智。",
        core: "动物性。 | The Castration: 精神的降级。"
    },

    // =================================================================
    // GROUP D: 物理与世界的毁灭 (Total Ruin) - 24 Items
    // 关键词：死亡、末日、痛苦、丧失。绝对的终结。
    // =================================================================
    {
        id: "stake_death",
        name: "物理死亡 (Physical Death)",
        group: "D. 物理毁灭 (Ruin)",
        def: "生物学生命的终结。",
        core: "一切可能性的归零。最基础但最绝对的恐惧。 | The Castration: 生命的终结。"
    },
    {
        id: "stake_extinction",
        name: "种族灭绝 (Extinction)",
        group: "D. 物理毁灭 (Ruin)",
        def: "整个族群、物种或文明的消亡。",
        core: "没有后代，没有传承。不仅是个体的死，是基因的死。 | The Castration: 未来的终结。"
    },
    {
        id: "stake_apocalypse",
        name: "世界末日 (Apocalypse)",
        group: "D. 物理毁灭 (Ruin)",
        def: "赖以生存的世界彻底毁灭（核爆、瘟疫）。",
        core: "即使活下来，也只能活在废土和灰烬中。 | The Castration: 舞台的坍塌。"
    },
    {
        id: "stake_torture",
        name: "永恒折磨 (Eternal Torture)",
        group: "D. 物理毁灭 (Ruin)",
        def: "肉体遭受持续的、无法解脱的折磨。",
        core: "地狱在人间的具象化。痛觉占据了一切感官。 | The Castration: 感官的超载。"
    },
    {
        id: "stake_loss_love",
        name: "失去所爱 (Loss of Loved One)",
        group: "D. 物理毁灭 (Ruin)",
        def: "自己活着，但所有在乎的人都死了。",
        core: "独活的惩罚。世界变得空荡荡，毫无留恋。 | The Castration: 关系的归零。"
    },
    {
        id: "stake_infestation",
        name: "寄生变异 (Infestation)",
        group: "D. 物理毁灭 (Ruin)",
        def: "身体被异种占据，变成孵化器或宿主。",
        core: "身体恐怖（Body Horror）。眼睁睁看着自己沦为怪物的温床。 | The Castration: 身体的沦陷。"
    },
    {
        id: "stake_poverty",
        name: "赤贫 (Destitution)",
        group: "D. 物理毁灭 (Ruin)",
        def: "失去所有财产，流落街头，饥寒交迫。",
        core: "生存底线的崩溃。 | The Castration: 物质的剥夺。"
    },
    {
        id: "stake_disease",
        name: "绝症 (Terminal Illness)",
        group: "D. 物理毁灭 (Ruin)",
        def: "身体缓慢衰竭，疼痛，看着自己死去。",
        core: "无力的等待。 | The Castration: 健康的丧失。"
    },
    {
        id: "stake_war",
        name: "战火 (War)",
        group: "D. 物理毁灭 (Ruin)",
        def: "家园变成战场，随时可能被流弹击中。",
        core: "混乱与死亡的常态化。 | The Castration: 和平的破碎。"
    },
    {
        id: "stake_famine",
        name: "饥荒 (Famine)",
        group: "D. 物理毁灭 (Ruin)",
        def: "没有食物，看着亲人饿死。",
        core: "最原始的恐惧。 | The Castration: 能量的切断。"
    },
    {
        id: "stake_drowning",
        name: "溺水 (Drowning)",
        group: "D. 物理毁灭 (Ruin)",
        def: "被水吞没，无法呼吸。",
        core: "窒息的恐惧。 | The Castration: 呼吸的终止。"
    },
    {
        id: "stake_burning",
        name: "焚烧 (Burning)",
        group: "D. 物理毁灭 (Ruin)",
        def: "被火焰吞噬，剧痛。",
        core: "毁灭性的能量。 | The Castration: 肉体的焦化。"
    },
    {
        id: "stake_freezing",
        name: "冻死 (Freezing)",
        group: "D. 物理毁灭 (Ruin)",
        def: "在极寒中慢慢失去知觉。",
        core: "热量的流失。 | The Castration: 温度的丧失。"
    },
    {
        id: "stake_buried",
        name: "活埋 (Buried Alive)",
        group: "D. 物理毁灭 (Ruin)",
        def: "被困在狭小的地下空间，氧气耗尽。",
        core: "幽闭恐惧的极致。 | The Castration: 空间的挤压。"
    },
    {
        id: "stake_blindness",
        name: "致盲 (Blindness)",
        group: "D. 物理毁灭 (Ruin)",
        def: "失去视力，陷入永恒的黑暗。",
        core: "感官的残缺。 | The Castration: 光明的丧失。"
    },
    {
        id: "stake_paralysis",
        name: "瘫痪 (Paralysis)",
        group: "D. 物理毁灭 (Ruin)",
        def: "意识清醒但身体无法动弹。",
        core: "灵魂被困在肉体的牢笼里。 | The Castration: 行动的丧失。"
    },
    {
        id: "stake_aging",
        name: "极速衰老 (Rapid Aging)",
        group: "D. 物理毁灭 (Ruin)",
        def: "在短时间内老去，生命流逝。",
        core: "时间的诅咒。 | The Castration: 青春的被夺。"
    },
    {
        id: "stake_cannibalism",
        name: "被吞噬 (Being Eaten)",
        group: "D. 物理毁灭 (Ruin)",
        def: "成为捕食者的食物。",
        core: "回归食物链底层。 | The Castration: 尊严的极致丧失。"
    },
    {
        id: "stake_home_loss",
        name: "家园尽毁 (Loss of Home)",
        group: "D. 物理毁灭 (Ruin)",
        def: "房子被烧毁或拆除，无家可归。",
        core: "庇护所的消失。 | The Castration: 安全感的崩塌。"
    },
    {
        id: "stake_enslaved",
        name: "物理奴役 (Chained)",
        group: "D. 物理毁灭 (Ruin)",
        def: "被铁链锁住，强制劳动。",
        core: "身体的工具化。 | The Castration: 自由的物理剥夺。"
    },
    {
        id: "stake_sacrifice",
        name: "被献祭 (Sacrificed)",
        group: "D. 物理毁灭 (Ruin)",
        def: "作为仪式的一部分被杀。",
        core: "为了他者的信仰而死。 | The Castration: 生命的工具化。"
    },
    {
        id: "stake_experiment",
        name: "实验体 (Experimented On)",
        group: "D. 物理毁灭 (Ruin)",
        def: "被疯狂科学家切开研究。",
        core: "非人化对待。 | The Castration: 完整的破坏。"
    },
    {
        id: "stake_devoured_void",
        name: "虚空吞噬 (Void Consumed)",
        group: "D. 物理毁灭 (Ruin)",
        def: "被黑洞或虚无物质分解。",
        core: "物质层面的彻底消失。 | The Castration: 存在的抹除。"
    },
    {
        id: "stake_lobotomy",
        name: "脑叶切除 (Lobotomy)",
        group: "D. 物理毁灭 (Ruin)",
        def: "切除大脑部分，变成行尸走肉。",
        core: "灵魂的物理切除。 | The Castration: 意识的残缺。"
    }
];
