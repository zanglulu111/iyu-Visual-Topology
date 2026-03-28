
import { LibraryItemDef } from '../types';

export const ENGINE_FANTASIES: LibraryItemDef[] = [
    // =================================================================
    // GROUP A: 修复与回归 (Restoration & Healing) - 24 Items
    // 关键词：家、健康、记忆、正义。试图回到“创伤发生前”的完美状态。
    // =================================================================
    {
        id: "fan_homecoming",
        name: "归乡 (The Homecoming)",
        group: "A. 修复与回归 (Restoration)",
        def: "寻找回家的路，或者重建被毁坏的家园。",
        core: "试图回到“前创伤”的完美状态。奥德赛式的征途。 | Fantasy: 此心安处是吾乡（原本的完整性）。"
    },
    {
        id: "fan_vengeance",
        name: "复仇 (Vengeance)",
        group: "A. 修复与回归 (Restoration)",
        def: "对造成自己缺失的对象进行惩罚，以求心理平衡。",
        core: "认为只要杀掉那个人，伤口就会愈合。通过毁灭来修复尊严。 | Fantasy: 正义的恢复。"
    },
    {
        id: "fan_cure",
        name: "治愈 (The Cure)",
        group: "A. 修复与回归 (Restoration)",
        def: "寻找一种解药、手术或奇迹，来治愈肉体或精神的残缺。",
        core: "拒绝接受“阉割”（残疾/死亡）。认为完美的身体是存在的。 | Fantasy: 肉体的完整。"
    },
    {
        id: "fan_kin",
        name: "寻亲 (The Kin)",
        group: "A. 修复与回归 (Restoration)",
        def: "寻找失散的亲人（父母/孩子），或者寻找自己的起源。",
        core: "试图缝合血缘的断裂。确认自己不是孤儿，确认自己有根。 | Fantasy: 血脉的连续性。"
    },
    {
        id: "fan_memory",
        name: "记忆重构 (The Memory)",
        group: "A. 修复与回归 (Restoration)",
        def: "拼凑破碎的记忆，试图弄清“我是谁”或“那天发生了什么”。",
        core: "认为真相藏在过去。只要记起来，就能找回自我。 | Fantasy: 历史的连贯性。"
    },
    {
        id: "fan_absolution",
        name: "赎罪 (Absolution)",
        group: "A. 修复与回归 (Restoration)",
        def: "为过去的罪恶寻求原谅，洗清道德上的污点。",
        core: "背负着沉重的超我（良心）。试图通过牺牲换取内心的宁静。 | Fantasy: 道德的纯洁。"
    },
    {
        id: "fan_vindication",
        name: "平反 (Vindication)",
        group: "A. 修复与回归 (Restoration)",
        def: "洗清冤屈，向世界证明自己的清白或正确。",
        core: "在大他者（社会/法律）面前恢复名誉。 | Fantasy: 误解的消除。"
    },
    {
        id: "fan_resurrection",
        name: "复活 (Resurrection)",
        group: "A. 修复与回归 (Restoration)",
        def: "让死去的爱人、宠物或领袖重新回到人间。",
        core: "拒绝接受丧失（Loss）。逆转死亡的不可逆性。 | Fantasy: 死亡的无效化。"
    },
    {
        id: "fan_rejuvenation",
        name: "重获青春 (Rejuvenation)",
        group: "A. 修复与回归 (Restoration)",
        def: "逆转衰老，回到年轻时的体魄和容貌。",
        core: "对抗熵增。对时间流逝的恐惧与否认。 | Fantasy: 永恒的春天。"
    },
    {
        id: "fan_lost_object",
        name: "失物寻回 (The Lost Object)",
        group: "A. 修复与回归 (Restoration)",
        def: "寻找一件具有特殊意义的丢失物品（传家宝/信物）。",
        core: "物是情感的载体。找回物体等于找回那段关系。 | Fantasy: 情感的物化。"
    },
    {
        id: "fan_rebuilding",
        name: "重建 (Rebuilding)",
        group: "A. 修复与回归 (Restoration)",
        def: "在废墟之上，一砖一瓦地恢复往日的繁荣。",
        core: "对抗毁灭。试图抹去灾难的痕迹，假装它没发生过。 | Fantasy: 秩序的复位。"
    },
    {
        id: "fan_innocence",
        name: "纯真年代 (Innocence)",
        group: "A. 修复与回归 (Restoration)",
        def: "试图回到童年，或者保护一个像童年的自己一样的孩子。",
        core: "退行。逃避成人世界的复杂与肮脏。 | Fantasy: 未被污染的状态。"
    },
    {
        id: "fan_reunion",
        name: "破镜重圆 (Reunion)",
        group: "A. 修复与回归 (Restoration)",
        def: "修复一段破碎的关系，与前任或决裂的朋友和好。",
        core: "缝合裂痕。相信“爱”可以战胜隔阂与时间。 | Fantasy: 关系的修复。"
    },
    {
        id: "fan_debt_free",
        name: "偿还债务 (Debt Free)",
        group: "A. 修复与回归 (Restoration)",
        def: "还清金钱或人情债，获得自由之身。",
        core: "解除契约的束缚。从亏欠（负数）回归到零。 | Fantasy: 负担的卸除。"
    },
    {
        id: "fan_erasure_scars",
        name: "消除伤疤 (Erasure of Scars)",
        group: "A. 修复与回归 (Restoration)",
        def: "通过整形或魔法，抹去身体上的创伤痕迹。",
        core: "抹去痛苦的记忆。让外表重新完美无瑕。 | Fantasy: 完美的表面。"
    },
    {
        id: "fan_time_reversal",
        name: "时间逆转 (Time Reversal)",
        group: "A. 修复与回归 (Restoration)",
        def: "回到过去，阻止那个错误的决定或灾难发生。",
        core: "修正主义。不接受“已发生”的事实。 | Fantasy: 后悔药。"
    },
    {
        id: "fan_clan_restoration",
        name: "家族复兴 (Clan Restoration)",
        group: "A. 修复与回归 (Restoration)",
        def: "重振没落家族的声望，夺回失去的领地。",
        core: "身份的传承。通过祖先的荣耀来定义自己的价值。 | Fantasy: 血统的荣耀。"
    },
    {
        id: "fan_lost_talent",
        name: "找回天赋 (Lost Talent)",
        group: "A. 修复与回归 (Restoration)",
        def: "重新获得曾经拥有但失去的能力（武功/灵感）。",
        core: "克服阉割焦虑。确认自己依然是强大的。 | Fantasy: 能力的回归。"
    },
    {
        id: "fan_purification",
        name: "净化 (Purification)",
        group: "A. 修复与回归 (Restoration)",
        def: "清除环境或身体里的毒素、诅咒或污秽。",
        core: "洁癖。将“异质”排出体外，恢复纯净。 | Fantasy: 绝对的洁净。"
    },
    {
        id: "fan_wholeness",
        name: "完整身体 (Wholeness)",
        group: "A. 修复与回归 (Restoration)",
        def: "为残缺的身体寻找完美的义肢或再生方法。",
        core: "拉康的“镜像阶段”。追求身体图像的完整性。 | Fantasy: 无缺的镜像。"
    },
    {
        id: "fan_curse_breaking",
        name: "解除诅咒 (Curse Breaking)",
        group: "A. 修复与回归 (Restoration)",
        def: "打破家族或个人的宿命诅咒，恢复正常生活。",
        core: "摆脱大他者的恶意设定。重获自由意志。 | Fantasy: 命运的解绑。"
    },
    {
        id: "fan_origin",
        name: "寻找起源 (The Origin)",
        group: "A. 修复与回归 (Restoration)",
        def: "寻找创造者、源头或真相。我们从哪里来？",
        core: "本体论的不安。通过确认起源来确认存在的意义。 | Fantasy: 根源的确定。"
    },
    {
        id: "fan_order_restored",
        name: "秩序恢复 (Order Restored)",
        group: "A. 修复与回归 (Restoration)",
        def: "平息混乱，让社会或生活回到“正轨”。",
        core: "对混乱的恐惧。保守主义幻想。 | Fantasy: 可预测的安宁。"
    },
    {
        id: "fan_final_goodbye",
        name: "最后的告别 (The Final Goodbye)",
        group: "A. 修复与回归 (Restoration)",
        def: "有机会对死者说出没来得及说的话。",
        core: "哀悼的完成。缝合遗憾，然后放下。 | Fantasy: 完美的句号。"
    },

    // =================================================================
    // GROUP B: 权力与超越 (Power & Transcendence) - 24 Items
    // 关键词：财富、名声、全能、永生。试图突破限制，成为“大他者”本身。
    // =================================================================
    {
        id: "fan_throne",
        name: "至高权力 (The Throne)",
        group: "B. 权力与超越 (Power)",
        def: "追求政治、商业或黑帮的最高地位。统治他人。",
        core: "认为只有站在顶端，才能不被阉割。对他人的绝对掌控。 | Fantasy: 全能感 (Omnipotence)。"
    },
    {
        id: "fan_masterpiece",
        name: "完美杰作 (The Masterpiece)",
        group: "B. 权力与超越 (Power)",
        def: "创造一件不朽的作品（艺术/科技/建筑）。",
        core: "试图通过造物来战胜死亡。让自己的名字刻在时间上。 | Fantasy: 永恒 (Immortality)。"
    },
    {
        id: "fan_truth",
        name: "终极真相 (The Truth)",
        group: "B. 权力与超越 (Power)",
        def: "揭开世界的底层逻辑，破解宇宙的终极谜题。",
        core: "无法忍受未知的空白。认为知识就是力量，知识能填补空虚。 | Fantasy: 全知 (Omniscience)。"
    },
    {
        id: "fan_ascension",
        name: "神性飞升 (The Ascension)",
        group: "B. 权力与超越 (Power)",
        def: "试图突破人类的极限，进化成更高维度的存在（AI飞升/修仙）。",
        core: "厌恶肉体的沉重和肮脏。渴望纯粹的精神存在。 | Fantasy: 脱离肉体。"
    },
    {
        id: "fan_revision",
        name: "改变历史 (The Revision)",
        group: "B. 权力与超越 (Power)",
        def: "试图通过时间旅行或重大变革，改写既定的命运。",
        core: "拒绝接受“已发生”的事实。试图扮演上帝，纠正错误。 | Fantasy: 掌控时间。"
    },
    {
        id: "fan_jackpot",
        name: "财富/圣杯 (The Jackpot)",
        group: "B. 权力与超越 (Power)",
        def: "一个具体的麦高芬（巨款/宝石/芯片），拥有它就拥有一切。",
        core: "最世俗的欲望投射。认为所有的痛苦都是因为没钱/没资源。 | Fantasy: 物质的无限满足。"
    },
    {
        id: "fan_omniscience",
        name: "全知 (Omniscience)",
        group: "B. 权力与超越 (Power)",
        def: "知晓过去未来所有信息，没有秘密。",
        core: "拉普拉斯妖。消除不确定性带来的焦虑。 | Fantasy: 信息的绝对占有。"
    },
    {
        id: "fan_immortality",
        name: "永生 (Immortality)",
        group: "B. 权力与超越 (Power)",
        def: "战胜死亡，获得无尽的生命长度。",
        core: "对死亡（最终的阉割）的终极防御。 | Fantasy: 时间的征服。"
    },
    {
        id: "fan_creator",
        name: "造物主 (The Creator)",
        group: "B. 权力与超越 (Power)",
        def: "创造生命、人工智能或微缩宇宙。",
        core: "扮演上帝。通过创造从属于自己的生命来确认自我价值。 | Fantasy: 赋予生命的权力。"
    },
    {
        id: "fan_total_control",
        name: "绝对控制 (Total Control)",
        group: "B. 权力与超越 (Power)",
        def: "像提线木偶一样操纵他人或局势。",
        core: "控制狂。恐惧失控，恐惧意外。 | Fantasy: 意志的延伸。"
    },
    {
        id: "fan_invulnerability",
        name: "无敌 (Invulnerability)",
        group: "B. 权力与超越 (Power)",
        def: "刀枪不入，没有任何弱点。",
        core: "对伤害的绝对防御。拒绝脆弱性。 | Fantasy: 完美的铠甲。"
    },
    {
        id: "fan_mind_reading",
        name: "读心 (Mind Reading)",
        group: "B. 权力与超越 (Power)",
        def: "直接听到他人的真实想法。",
        core: "消除“主体间性”的隔阂与谎言。渴望透明的交流。 | Fantasy: 社交的透明化。"
    },
    {
        id: "fan_invisibility",
        name: "隐形 (Invisibility)",
        group: "B. 权力与超越 (Power)",
        def: "在不被看见的情况下观察和行动。",
        core: "偷窥者的权力。逃避社会凝视，同时享受在场。 | Fantasy: 幽灵般的自由。"
    },
    {
        id: "fan_prophecy",
        name: "预知未来 (Prophecy)",
        group: "B. 权力与超越 (Power)",
        def: "提前看到结果，从而规避风险或获利。",
        core: "作弊。消除对未来的焦虑。 | Fantasy: 剧本的提前阅读。"
    },
    {
        id: "fan_world_domination",
        name: "征服世界 (World Domination)",
        group: "B. 权力与超越 (Power)",
        def: "让整个世界按照自己的意志运转。",
        core: "极端的自恋。将自我意志强加于客体世界。 | Fantasy: 自我的无限扩张。"
    },
    {
        id: "fan_icon",
        name: "成为偶像 (The Icon)",
        group: "B. 权力与超越 (Power)",
        def: "被万众瞩目、崇拜和爱戴。",
        core: "活在他人的凝视中。通过被爱来确认存在。 | Fantasy: 聚光灯下的永生。"
    },
    {
        id: "fan_monopoly",
        name: "垄断 (Monopoly)",
        group: "B. 权力与超越 (Power)",
        def: "独占某种稀缺资源（水源/能源/技术）。",
        core: "掐住世界的咽喉。通过制造匮乏来获得权力。 | Fantasy: 资源的绝对主权。"
    },
    {
        id: "fan_lawgiver",
        name: "制定规则 (Lawgiver)",
        group: "B. 权力与超越 (Power)",
        def: "我不遵守规则，我制定规则。",
        core: "成为“大他者”本身。超人的意志。 | Fantasy: 律法的源头。"
    },
    {
        id: "fan_judgement",
        name: "审判权 (Judgement)",
        group: "B. 权力与超越 (Power)",
        def: "决定谁生谁死，谁有罪谁无罪。",
        core: "行使神的职能。道德制高点的快感。 | Fantasy: 正义的裁决者。"
    },
    {
        id: "fan_digital_upload",
        name: "超越肉体 (Digital Upload)",
        group: "B. 权力与超越 (Power)",
        def: "抛弃沉重的肉身，以纯粹数据形式存在。",
        core: "厌恶生物性的腐烂与欲望。追求纯粹的理性。 | Fantasy: 精神的飞升。"
    },
    {
        id: "fan_velocity",
        name: "速度极限 (Velocity)",
        group: "B. 权力与超越 (Power)",
        def: "成为最快的人/车。超越光速。",
        core: "摆脱时间和空间的束缚。纯粹的动能快感。 | Fantasy: 物理法则的突破。"
    },
    {
        id: "fan_superintelligence",
        name: "完美智力 (Superintelligence)",
        group: "B. 权力与超越 (Power)",
        def: "拥有超越人类总和的计算能力。",
        core: "理性的极致。认为一切问题都是计算问题。 | Fantasy: 逻辑的终点。"
    },
    {
        id: "fan_godslayer",
        name: "弑神 (Godslayer)",
        group: "B. 权力与超越 (Power)",
        def: "杀死最高的统治者或神明。",
        core: "终极的反叛。推翻父权，确立自我。 | Fantasy: 权威的终结。"
    },
    {
        id: "fan_empire_building",
        name: "建立帝国 (Empire Building)",
        group: "B. 权力与超越 (Power)",
        def: "从零开始构建一个庞大的组织或国家。",
        core: "秩序的构建者。将混乱的世界格式化。 | Fantasy: 结构的缔造。"
    },

    // =================================================================
    // GROUP C: 连接与融合 (Connection & Fusion) - 24 Items
    // 关键词：爱、共生、牺牲、理解。试图消除“自我”与“他者”的界限。
    // =================================================================
    {
        id: "fan_soulmate",
        name: "唯一真爱 (The Soulmate)",
        group: "C. 连接与融合 (Connection)",
        def: "寻找那个命中注定的“另一半”。",
        core: "柏拉图式的神话。认为只要找到那个人，两个残缺的半圆就能拼成一个圆。 | Fantasy: 共生 (Symbiosis)。"
    },
    {
        id: "fan_recognition",
        name: "获得认可 (The Recognition)",
        group: "C. 连接与融合 (Connection)",
        def: "渴望被父亲、偶像或社会大众看见并赞赏。",
        core: "活在大他者的凝视中。只有被他者确证，自己才存在。 | Fantasy: 大他者的爱。"
    },
    {
        id: "fan_belonging",
        name: "融入集体 (The Belonging)",
        group: "C. 连接与融合 (Connection)",
        def: "加入某个帮派、组织、俱乐部或乌托邦社区。",
        core: "恐惧孤独。通过消融个性，换取集体的安全感和身份感。 | Fantasy: 母体的温暖。"
    },
    {
        id: "fan_savior_complex",
        name: "拯救他人 (The Savior)",
        group: "C. 连接与融合 (Connection)",
        def: "执着于拯救一个堕落或受难的人（圣母情结）。",
        core: "通过拯救别人来确认自己的力量，或者投射拯救自己的渴望。 | Fantasy: 被需要。"
    },
    {
        id: "fan_possession",
        name: "控制/占有 (The Possession)",
        group: "C. 连接与融合 (Connection)",
        def: "将爱人变成私有物品，绝对的排他性占有。",
        core: "恋物式的爱。把对方物化，以确保对方永远不会离开。 | Fantasy: 对象的凝固。"
    },
    {
        id: "fan_idol_mirror",
        name: "偶像化身 (The Idol)",
        group: "C. 连接与融合 (Connection)",
        def: "试图变成另一个人（模仿偶像），或者取代某人的位置。",
        core: "镜像阶段的自恋。爱上了镜子里的理想自我。 | Fantasy: 完美的镜像。"
    },
    {
        id: "fan_unconditional_love",
        name: "无条件的爱 (Unconditional Love)",
        group: "C. 连接与融合 (Connection)",
        def: "渴望像母亲/神一样被爱，无论自己犯了什么错。",
        core: "回归婴儿期的全能自恋。拒绝承担爱的责任。 | Fantasy: 绝对的包容。"
    },
    {
        id: "fan_symbiosis",
        name: "共生 (Symbiosis)",
        group: "C. 连接与融合 (Connection)",
        def: "在物理或精神上与另一个人/生物融为一体。",
        core: "边界的消失。不再有“我”和“你”，只有“我们”。 | Fantasy: 孤独的终结。"
    },
    {
        id: "fan_being_needed",
        name: "被需要 (Being Needed)",
        group: "C. 连接与融合 (Connection)",
        def: "渴望成为某人生存的必需品。",
        core: "通过工具化自己来获得安全感。 | Fantasy: 不可替代性。"
    },
    {
        id: "fan_hive_mind",
        name: "蜂巢思维 (Hive Mind)",
        group: "C. 连接与融合 (Connection)",
        def: "连接入集体意识，不再有个人思想。",
        core: "放弃选择的重负。在宏大的洪流中获得安宁。 | Fantasy: 意识的海洋。"
    },
    {
        id: "fan_mentor",
        name: "寻找导师 (The Mentor)",
        group: "C. 连接与融合 (Connection)",
        def: "寻找一个能指引方向的父亲/师父形象。",
        core: "渴望被规训。需要一个外部的超我来通过指引。 | Fantasy: 权威的指引。"
    },
    {
        id: "fan_loyalty",
        name: "绝对忠诚 (Loyalty)",
        group: "C. 连接与融合 (Connection)",
        def: "成为最完美的下属、骑士或宠物。",
        core: "将自我意志上交。在服从和奉献中找到意义。 | Fantasy: 完美的客体。"
    },
    {
        id: "fan_understanding",
        name: "被理解 (Understanding)",
        group: "C. 连接与融合 (Connection)",
        def: "寻找一个能完全听懂自己语言的人。",
        core: "打破巴别塔的诅咒。灵魂的共鸣。 | Fantasy: 沟通的透明。"
    },
    {
        id: "fan_twin",
        name: "孪生/双生 (The Twin)",
        group: "C. 连接与融合 (Connection)",
        def: "寻找在这个世界上的另一个自己（Doppelganger）。",
        core: "自恋的极致。爱上自己，或者通过镜像确认自己。 | Fantasy: 自我的复本。"
    },
    {
        id: "fan_worship",
        name: "崇拜 (Worship)",
        group: "C. 连接与融合 (Connection)",
        def: "将某人或某物神化，并跪拜于其脚下。",
        core: "通过贬低自己来升华客体。受虐倾向的爱。 | Fantasy: 臣服的快感。"
    },
    {
        id: "fan_sacrifice",
        name: "牺牲 (Sacrifice)",
        group: "C. 连接与融合 (Connection)",
        def: "为了爱人或集体献出生命。",
        core: "通过毁灭自己来在对方心中获得永恒的地位。 | Fantasy: 悲剧性的升华。"
    },
    {
        id: "fan_legacy",
        name: "遗产/传承 (Legacy)",
        group: "C. 连接与融合 (Connection)",
        def: "通过后代、徒弟或作品让生命延续。",
        core: "生物性的永生。将自我传递给未来。 | Fantasy: 基因的接力。"
    },
    {
        id: "fan_communication",
        name: "异种沟通 (Communication)",
        group: "C. 连接与融合 (Connection)",
        def: "试图理解无法理解的事物（外星人/动物/神）。",
        core: "跨越本体论鸿沟的渴望。 | Fantasy: 普世语言。"
    },
    {
        id: "fan_pact",
        name: "契约 (The Pact)",
        group: "C. 连接与融合 (Connection)",
        def: "与魔鬼、神或人签订不可违背的誓言。",
        core: "用形式化的条约来固定流动的关系。 | Fantasy: 关系的固化。"
    },
    {
        id: "fan_shared_secret",
        name: "共享秘密 (Shared Secret)",
        group: "C. 连接与融合 (Connection)",
        def: "与某人共同保守一个罪恶或秘密。",
        core: "共犯结构。最坚固的联盟往往建立在共同的罪恶上。 | Fantasy: 排他的联盟。"
    },
    {
        id: "fan_guardianship",
        name: "守护 (Guardianship)",
        group: "C. 连接与融合 (Connection)",
        def: "保护一个弱小的存在（孩子/花朵/希望）。",
        core: "在残酷世界中保留一份温柔。 | Fantasy: 责任的赋予。"
    },
    {
        id: "fan_becoming_other",
        name: "成为他人 (Being the Other)",
        group: "C. 连接与融合 (Connection)",
        def: "能够体验他人的感受和痛觉（共情/夺舍）。",
        core: "摆脱自身的局限，体验无限的人生。 | Fantasy: 视角的转换。"
    },
    {
        id: "fan_absolute_trust",
        name: "绝对信任 (Absolute Trust)",
        group: "C. 连接与融合 (Connection)",
        def: "寻找一个永远不会背叛自己的人。",
        core: "对背叛的创伤性防御。乌托邦式的人际关系。 | Fantasy: 无防备的爱。"
    },
    {
        id: "fan_reconciliation",
        name: "和解 (Reconciliation)",
        group: "C. 连接与融合 (Connection)",
        def: "与宿敌或仇人达成谅解。",
        core: "辩证法的扬弃。化敌为友，整合阴影。 | Fantasy: 对立的统一。"
    },

    // =================================================================
    // GROUP D: 逃逸与虚无 (Escape & The Void) - 24 Items
    // 关键词：自由、毁灭、重置、异化。试图退出游戏，或者炸毁游戏。
    // =================================================================
    {
        id: "fan_liberation",
        name: "彻底自由 (Liberation)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "打破所有的枷锁（监狱/婚姻/工作），追求无拘无束。",
        core: "认为痛苦源于束缚。幻想一种没有任何责任的状态。 | Fantasy: 绝对的独立。"
    },
    {
        id: "fan_sanctuary",
        name: "避世桃源 (The Sanctuary)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "寻找一个不存在于地图上的乌托邦或避难所。",
        core: "认为世界已无可救药，唯一的出路是切断与污浊世界的联系。 | Fantasy: 重回伊甸园。"
    },
    {
        id: "fan_destruction",
        name: "毁灭/混沌 (Destruction)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "炸毁一切，看着世界燃烧。",
        core: "死亡驱力。既然无法填补缺失，那就把承载缺失的世界毁掉。 | Fantasy: 归零 (Reset)。"
    },
    {
        id: "fan_oblivion",
        name: "遗忘/麻醉 (Oblivion)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "追求感官的极致刺激或药物的麻醉，以消除意识的痛苦。",
        core: "渴望意识的消散。不想面对现实的任何一部分。 | Fantasy: 无痛的存在。"
    },
    {
        id: "fan_becoming_animal",
        name: "成为兽/物 (Becoming Other)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "渴望变成动物、机器或怪物，放弃人性。",
        core: "厌倦了做人的复杂性。向往非人的简单逻辑。 | Fantasy: 去主体化。"
    },
    {
        id: "fan_void",
        name: "虚无本身 (The Void)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "只是为了看一看“深渊”里有什么。",
        core: "纯粹的好奇，或者自杀式的探究。想要触摸真实界。 | Fantasy: 触碰真实。"
    },
    {
        id: "fan_suicide_ideation",
        name: "终结 (The End)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "渴望停止存在，寻求永久的安息。",
        core: "对生命重负的彻底拒绝。 | Fantasy: 痛苦的止息。"
    },
    {
        id: "fan_new_world",
        name: "新世界 (New World)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "前往火星、异世界或未知的边疆。",
        core: "地理上的逃逸。认为“别处”一定比“此处”好。 | Fantasy: 全新的开始。"
    },
    {
        id: "fan_hermit",
        name: "隐居 (Hermit)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "在人群中消失，成为隐形人。",
        core: "社会性死亡。切断与大他者的连接。 | Fantasy: 匿名的安宁。"
    },
    {
        id: "fan_madness",
        name: "疯狂 (Madness)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "放弃理性，拥抱癫狂。",
        core: "逻辑的逃逸。小丑式的自由。 | Fantasy: 无逻辑的快乐。"
    },
    {
        id: "fan_time_stop",
        name: "时间停止 (Time Stop)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "让全世界停下，只有自己能动。",
        core: "对流逝的恐惧。想要在这个瞬间永远停留。 | Fantasy: 永恒的当下。"
    },
    {
        id: "fan_eternal_sleep",
        name: "永恒睡眠 (Eternal Sleep)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "进入冷冻仓或魔法沉睡，跳过痛苦的时代。",
        core: "暂停键。拒绝参与当下的历史。 | Fantasy: 责任的悬置。"
    },
    {
        id: "fan_numbness",
        name: "零度情感 (Numbness)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "切除情感中枢，不再感到悲伤也不再感到快乐。",
        core: "斯多葛式的防御。为了不痛而放弃感觉。 | Fantasy: 机器般的冷静。"
    },
    {
        id: "fan_agent_chaos",
        name: "混乱代理人 (Agent of Chaos)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "没有目的，只是为了制造混乱。",
        core: "反结构。证明规则是虚构的。 | Fantasy: 纯粹的熵增。"
    },
    {
        id: "fan_drifting",
        name: "漂流 (Drifting)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "没有目的地，永远在路上。",
        core: "拒绝扎根。游牧精神。 | Fantasy: 过程即目的。"
    },
    {
        id: "fan_mutation_escape",
        name: "异化变异 (Mutation)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "身体发生变异，不再属于人类社会。",
        core: "通过变成怪物来逃避做人的责任。 | Fantasy: 物种的隔离。"
    },
    {
        id: "fan_cyber_transcendence",
        name: "数字飞升 (Cyber Transcendence)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "将意识上传到网络，抛弃肉体。",
        core: "对现实世界的彻底失望。 | Fantasy: 虚拟的乌托邦。"
    },
    {
        id: "fan_anonymity",
        name: "无名 (Anonymity)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "销毁所有档案，没人知道我是谁。",
        core: "名字是咒语。摆脱符号身份的束缚。 | Fantasy: 空白的自由。"
    },
    {
        id: "fan_entropy",
        name: "熵增 (Entropy)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "加速事物的衰败和老化。",
        core: "对结局的急不可耐。拥抱毁灭。 | Fantasy: 必然的终点。"
    },
    {
        id: "fan_silence",
        name: "沉默 (Silence)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "进入一个绝对没有声音的世界。",
        core: "语言是噪音。追求内心的绝对静谧。 | Fantasy: 语言的消亡。"
    },
    {
        id: "fan_nomadism",
        name: "游牧 (Nomadism)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "切断所有社会关系，只与自然交互。",
        core: "拒绝定居文明的逻辑。 | Fantasy: 原始的自由。"
    },
    {
        id: "fan_reboot",
        name: "重启 (Reboot)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "让世界重新开始，洗牌。",
        core: "对现状的绝望。认为只有彻底毁灭才能带来新生。 | Fantasy: 系统的重置。"
    },
    {
        id: "fan_spectator",
        name: "旁观者 (The Spectator)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "变成一个隐形的摄像头，只看，不参与。",
        core: "剥离主体性。绝对客观的注视。 | Fantasy: 无责任的在场。"
    },
    {
        id: "fan_nirvana",
        name: "涅槃 (Nirvana)",
        group: "D. 逃逸与虚无 (Escape)",
        def: "熄灭所有的欲望之火。",
        core: "佛教式的解脱。不再这山望着那山高。 | Fantasy: 欲望的止息。"
    }
];
