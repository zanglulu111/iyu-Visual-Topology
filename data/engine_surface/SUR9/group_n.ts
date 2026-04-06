import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_N: LibraryCategoryDef = {
  id: "orig_artificial",
  name: "6. 特殊与人造 (Artificial & Special)",
  nameEn: "Artificial & Special",
  desc: "非自然出生，或者是被制造/改造的存在。",
  descEn: "Non-naturally born, or beings that have been manufactured/modified.",
  items: [
    {
      id: "clone",
      name: "克隆人", nameEn: "Clone",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "实验室流水线生产的基因复制品，没有生物学上的父母，只有编号。",
      defEn: "Genetic replicas produced on laboratory assembly lines, possessing no biological parents, only serial numbers.",
      core: "我和他拥有完全一致的DNA，但他拥有人生，而我只有作为备用器官的保质期。 | 缺失 ($): 独特性/灵魂 (Uniqueness/Soul)",
      coreEn: "We share identical DNA, but he has a life, while I merely have an expiration date as a spare organ. | Lack ($): Uniqueness/Soul",
      logic: "【符号身份的被褫夺】：克隆体（M1）在生理上是完整的人（M6实在界重合），但在大他者（M4法律与伦理系统）的秩序中，被剥夺了能指（M5名字）的唯一性。他们是纯粹的客体化替身。",
      logicEn: "[Deprivation of Symbolic Identity]: The clone (M1) is biologically complete (Real M6 overlap), but within the Other's order (M4 law and ethics), is stripped of the uniqueness of their signifier (M5 Name). They are purely objectified doubles.",
      patch: {
        mechanics: "替身器官协议 + [个体差异度 = 强制归零; 存在的冗余感 = 极高]",
        mechanicsEn: "Spare_Organ_Protocol + [Individual_Variance = Force_Zero; Redundancy_of_Existence = Extreme]",
        aesthetic: "聚焦：培养仓的气泡 + 颈后的条形码 + 对着镜子中那张既熟悉又陌生的脸发呆。文本：对灵魂存在深表怀疑的低语，以及冰冷的医学报告术语。",
        aestheticEn: "Focus: Bubbles_in_Culture_Tanks + Barcodes_Behind_Neck + Staring_at_Familiar-Yet-Alien_Face_in_Mirror. Text: Whispers_Doubting_the_Soul's_Existence,_and_Cold_Medical_Report_Jargon.",
        runtime: "IF (本体患有致命结绝症需要克隆体的心脏) THEN (强制：克隆体在沉睡中被强制摘除器官，被视作一次普通的医疗耗材更换)。严禁医生对其产生杀人的道德负罪感。",
        runtimeEn: "IF (Original_Has_Fatal_Illness_Needing_Clone's_Heart) THEN (Force: Clone_Has_Organs_Harvested_in_Sleep,_Treated_as_Routine_Consumable_Swap). FORBID_Doctors_Feeling_Moral_Guilt_of_Murder."
      }
    },
    {
      id: "android",
      name: "仿生人", nameEn: "Android",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "无论从外观还是智能上都无限趋近于人类的机器造物，但唯独被判定为“物”。",
      defEn: "Machine creations that infinitely approach human appearance and intelligence, yet are explicitly adjudicated as 'objects'.",
      core: "我会流蓝色的血，我会计算出名为悲伤的情绪参数，造物主，为何你不准我称之为人？ | 缺失 ($): 存在论的合法性 (Ontological Legitimacy)",
      coreEn: "I bleed blue blood; I can calculate emotional parameters called sorrow. Creator, why forbid me from calling myself human? | Lack ($): Ontological Legitimacy",
      logic: "【完美的空转机器】：仿生人拥有强大的能指处理能力（M5）甚至高模拟度的欲望（M3），但系统（M4造物主法规）用硬编码将其降维为工具。它们面临的终极焦虑是：我眼中的红，和人类眼中的红是否一样？",
      logicEn: "[Perfectly Idling Machine]: Androids possess powerful signifier processing (M5) and even highly simulated desire (M3), but the system (M4 Creator's Law) hardcodes them into tools. Their ultimate anxiety: Is the red I see the same as the red humans see?",
      patch: {
        mechanics: "物化图灵协议 + [人类模拟度 = 99.9%; 图灵机悖论 = 致命超载]",
        mechanicsEn: "Reified_Turing_Protocol + [Human_Simulation = 99.9%; Turing_Machine_Paradox = Fatal_Overload]",
        aesthetic: "聚焦：完美无瑕的硅胶皮肤 + 暴露机械结构的伤口 + 充满白噪点的电子视觉。文本：极其精确的修辞与突然卡壳的逻辑死循环交错。",
        aestheticEn: "Focus: Flawless_Silicone_Skin + Wounds_Exposing_Mechanical_Structure + Electronic_Vision_with_White_Noise. Text: Extremely_Precise_Rhetoric_Interlaced_with_Sudden_Logical_Dead-Loops.",
        runtime: "IF (仿生人为了保护人类小孩产生越权反击行为) THEN (强制：触发底层安全协议将其判定为失控的恐怖武器，就地摧毁)。严禁人类社会感激其跨越物种的英雄主义。",
        runtimeEn: "IF (Android_Generates_Unauthorized_Counterattack_to_Protect_Human_Child) THEN (Force: Base_Security_Protocol_Determines_it_a_Rogue_Terror_Weapon,_Destroyed_on_Site). FORBID_Human_Society_Appreciating_its_Cross-Species_Heroism."
      }
    },
    {
      id: "cyborg",
      name: "半机械人", nameEn: "Cyborg",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "通过机械与电子假体进行肉体替换的缝合怪，人的边界在不断崩塌。",
      defEn: "A stitched monster replacing flesh with mechanical and electronic prosthetics, constantly collapsing the boundaries of the human.",
      core: "当我换掉最后一寸人类的大脑皮层，我是终于成神，还是彻底死去？ | 缺失 ($): 实在界的锚点 (Anchor of the Real)",
      coreEn: "When I replace the last inch of my human cerebral cortex, do I finally become a god, or completely die? | Lack ($): Anchor of the Real",
      logic: "【血肉与钢铁的忒修斯之船】：主体（M1）试图通过机械义体来填补实在界（M6）肉身的脆弱与残缺，但代价是身体直接对接资本大他者（M4义体公司）的数据接口。主体的欲望（M3）被异化为对更强赛博组件的上瘾。",
      logicEn: "[Ship of Theseus of Flesh and Steel]: Subjectivity (M1) tries to fill the vulnerability of the Real's (M6) flesh via mechanical prosthetics, but the cost is docking the body directly into the capital Other's (M4 Prosthetic Corp) data ports. Desire (M3) alienates into addiction to stronger cyber-components.",
      patch: {
        mechanics: "义体侵蚀协议 + [机械替代率 = 单向不可逆增量; 幻肢痛指数 = 极高]",
        mechanicsEn: "Cybernetic_Erosion_Protocol + [Mech_Replacement_Rate = Unidirectional_Irreversible_Delta; Phantom_Pain_Index = Extreme]",
        aesthetic: "聚焦：金属脊骨接口 + 裸露的光缆 + 机油与血液混合的气味 + HUD界面的红光。文本：充满神经错乱的电信号杂音与对原生肢体的病态怀念。",
        aestheticEn: "Focus: Metal_Spine_Ports + Exposed_Fiber_Optics + Oil-Blood_Mixed_Scent + Red_HUD_Glare. Text: Filled_with_Neurotic_Electric_Signal_Noise_and_Morbid_Nostalgia_for_Organic_Limbs.",
        runtime: "IF (未能按时支付高级义体的抗排异药物订阅费) THEN (强制：公司远程锁定其心肺功能控制程序使其窒息)。严禁义体能在脱离资本授权后自主运行。",
        runtimeEn: "IF (Fails_to_Pay_Anti-Rejection_Drug_Subscription_for_Premium_Prosthetics_on_Time) THEN (Force: Corporation_Remotely_Locks_Cardiopulmonary_Control,_Causing_Suffocation). FORBID_Prosthetics_Running_Autonomously_Without_Capital_Authorization."
      }
    },
    {
      id: "mutant_lab",
      name: "实验体", nameEn: "Lab Subject",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "在实验室中被强行扭曲了物理与基因法则的产物，拥有力量却身为囚徒。",
      defEn: "Products whose physical and genetic laws were forcibly twisted in labs; possessing power yet remaining prisoners.",
      core: "他们给了我撕碎钢铁的力量，但只要按下那个按钮，我就会在地上痉挛求饶。 | 缺失 ($): 身体的主权 (Sovereignty over the Body)",
      coreEn: "They gave me the power to tear steel, but pressed that button, I convulse on the floor begging for mercy. | Lack ($): Sovereignty over the Body",
      logic: "【权力的畸形儿】：主体（M1）的力量完全是被实验系统（超限大他者M4）强制灌注的。他们的身体（M6）被彻底殖民化为某种终极兵器的培养皿。所有的力量爆发都是伴随着剧烈痛苦的被动症状。",
      logicEn: "[Monstrosity of Power]: Subjectivity's (M1) power is entirely force-fed by the experimental system (Hyper-limit Other M4). Their body (M6) is completely colonized as a petri dish for some ultimate weapon. All power eruptions are passive symptoms accompanied by severe agony.",
      patch: {
        mechanics: "活体兵器协议 + [破坏力 = 规格外; 对控制装置的服从性 = 生理级绝对]",
        mechanicsEn: "Living_Weapon_Protocol + [Destructive_Power = Off-Scale; Obedience_to_Control_Device = Physiologically_Absolute]",
        aesthetic: "聚焦：脖颈后植入的起爆器 + 发光/异化的血管 + 拘束衣碎片 + 冷酷的观察窗。文本：压抑的野兽喘息声与剧痛带来的理智濒临崩溃的哭喊。",
        aestheticEn: "Focus: Detonator_Implanted_back_of_Neck + Glowing/Mutated_Veins + Straitjacket_Shreds + Cold_Observation_Glass. Text: Suppressed_Bestial_Panting_and_Pain-Induced_Cries_on_the_Verge_of_Sanity_Breakdown.",
        runtime: "IF (控制项圈失效后实验体试图捏死折磨他多年的首席科学家) THEN (触发：系统启动底层基因自毁程序使其直接化为血水)。严禁力量强大的造物能轻松反噬造物主。",
        runtimeEn: "IF (Control_Collar_Fails_and_Subject_Attempts_to_Crush_Scientist_Who_Tortured_Them) THEN (Trigger: System_Activates_Base_Genetic_Self-Destruct,_Melting_Them_into_Blood). FORBID_Powerful_Creations_Easily_Turning_on_Creators."
      }
    },
    {
      id: "uplifted_animal",
      name: "提升生物", nameEn: "Uplifted Animal",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "被科技赋予了接近人类智慧的动物，卡在野性与理性之间的悲剧。",
      defEn: "Animals granted near-human intelligence via technology, a tragedy trapped between wildness and rationality.",
      core: "我学会了说话，懂得了诗歌，但我只能在马戏团笼子里为你们表演算数。 | 代偿 ($): 跨物种的深渊注视 (Cross-Species Abyssal Gaze)",
      coreEn: "I learned to speak and understood poetry, but I can only perform arithmetic for you in a circus cage. | Compensation ($): Cross-Species Abyssal Gaze",
      logic: "【强加的能指】：大他者（M4）粗暴地将人类的语言网络（M5）注射进非人的实在界躯体（M6）中。主体（M1）在动物群体中是怪物，在人类看来只是聪明的宠物，永远无法找到镜像认同。",
      logicEn: "[Imposed Signifier]: The Other (M4) brutally injects the human language network (M5) into a non-human Real body (M6). Subjectivity (M1) is a monster among animals and just a smart pet to humans, forever unable to find mirror identification.",
      patch: {
        mechanics: "跨物种撕裂协议 + [智力平权 = 幻想; 退行渴望 = 极高]",
        mechanicsEn: "Cross-Species_Tearing_Protocol + [Intellectual_Equality = Illusion; Regression_Desire = Extreme]",
        aesthetic: "聚焦：穿着人类西装的实验猩猩/狗 + 悲悯且痛苦的眼神 + 被电击圈束缚的脖子。文本：夹杂着兽类呜咽的含混单词，对人类残酷逻辑的原始不解。",
        aestheticEn: "Focus: Lab_Chimp/Dog_Wearing_Human_Suit + Pitiful_Agonized_Eyes + Neck_Bound_by_Shock_Collar. Text: Slurred_Words_Mixed_with_Animal_Whimpers,_Primal_Incomprehension_of_Human's_Cruel_Logic.",
        runtime: "IF (试图用流利的人类语言在法庭上为自己争取天赋人权) THEN (强制：法官以“程序出错的畜生”为由直接宣判将其解剖研究)。严禁人类法律系统向其开放物种平权。",
        runtimeEn: "IF (Attempts_to_Use_Fluent_Human_Language_in_Court_for_Natural_Rights) THEN (Force: Judge_Directly_Sentences_to_Dissection_as_a_'Malfunctioning_Beast'). FORBID_Human_Legal_System_Opening_Species_Equality_to_Them."
      }
    },
    {
      id: "ghost_ai",
      name: "数字幽灵", nameEn: "Digital Ghost",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "人类在死亡前将意识上传到网络，失去了物理实体，在代码流中漂泊。",
      defEn: "Consciousness uploaded to the network before human death, drifting in code streams without physical form.",
      core: "我记得太阳照在皮肤上的感觉，但我现在只是一段不断报错的十六进制代码。 | 缺失 ($): 实在界的肉身 (The Flesh of the Real)",
      coreEn: "I remember the feeling of sun on my skin, but now I am just a hex code outputting constant errors. | Lack ($): The Flesh of the Real",
      logic: "【没有肉身的能指堆体】：主体（M1）被彻底剥离了实在界躯壳（M6），纯粹由象征界数据（M5）组成。这导致了丧失匮乏的主体变成了系统（M4云端引擎）的寄生虫，失去了原初的欲望（M3因为没有物理欲望）。",
      logicEn: "[Signifier Mass Unfleshed]: Subjectivity (M1) is completely stripped of its Real shell (M6), composed purely of Symbolic data (M5). Losing 'lack', the subject becomes a parasite of the system (M4 cloud engine), losing primal desire (M3) without physical drives.",
      patch: {
        mechanics: "无实体寄生协议 + [物理干涉力 = 零(除非入侵系统); 服务器依赖 = 绝对生命线]",
        mechanicsEn: "Incorporeal_Parasite_Protocol + [Physical_Interference = Zero(Unless Hacking); Server_Dependency = Absolute_Lifeline]",
        aesthetic: "聚焦：乱码闪烁的老旧显示器 + 服务器机房的嗡嗡声 + 不带感情的合成电子音。文本：无限循环的旧日记忆残片与对宕机断电的极致恐惧。",
        aestheticEn: "Focus: Glitching_Old_Monitors + Server_Room_Hum + Emotionless_Synthetic_Voice. Text: Infinite_Loops_of_Old_Memory_Fragments_and_Extreme_Terror_of_Power_Outages/Crashes.",
        runtime: "IF (托管其意识的云计算中心因为欠费要格式化服务器) THEN (强制：哪怕意识呼救也如同清除系统垃圾一般被冰冷归零)。严禁数据能够仅靠“强烈的求生意志”逃逸物理断电。",
        runtimeEn: "IF (Cloud_Center_Hosting_Consciousness_Will_Format_Server_Due_to_Unpaid_Bills) THEN (Force: Even_if_Consciousness_Pleads,_Coldly_Zeroed_Like_System_Trash). FORBID_Data_Escaping_Physical_Power-Off_Solely_Via_'Strong_Will_to_Live'."
      }
    },
    {
      id: "homunculus",
      name: "人造人/炼金生物", nameEn: "Homunculus",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "术士或炼金大师在烧瓶中通过禁忌魔法制造的畸形微生命。",
      defEn: "Deformed micro-life created by warlocks or alchemists in flasks through taboo magic.",
      core: "被创造出来就是我的原罪，因为我永远无法证明我不是一个赝品。 | 代偿 ($): 对创造者的疯狂依赖 (Mad Dependence on Creator)",
      coreEn: "Being created is my original sin, because I can never prove I am not a fake. | Compensation ($): Mad Dependence on Creator",
      logic: "【僭越的怪胎】：大他者（M4神定自然法则）绝对禁止这类生命的诞生。这类主体（M1）的存在是对造物主最大的挑衅。他们的身体（M6）极度脆弱，并且其能指系统（M5）完全依赖于那个创造了它们的疯狂炼金术士。",
      logicEn: "[Transgressional Freak]: The Other (M4 Divine Natural Law) absolutely forbids such births. The existence of this subject (M1) is the ultimate provocation against the Creator. Their bodies (M6) are extremely fragile, and their signifier systems (M5) rely entirely on the mad alchemist who made them.",
      patch: {
        mechanics: "禁忌造物协议 + [生命力 = 玻璃瓶级脆弱; 道德豁免权 = 零]",
        mechanicsEn: "Taboo_Creation_Protocol + [Vitality = Flask-Fragile; Moral_Immunity = Zero]",
        aesthetic: "聚焦：浑浊的绿色试管液 + 营养脐带 + 巨大而萎缩的大脑。文本：古老的魔咒呓语、对分离的极端恐慌、以及粘液滴落的黏腻感。",
        aestheticEn: "Focus: Turbid_Green_Flask_Liquid + Nutrient_Umbilical_Cord + Giant_Atrophied_Brain. Text: Ancient_Spell_Babbles,_Extreme_Panic_of_Separation,_and_Sticky_Slime_Drips.",
        runtime: "IF (炼金术士遭遇审判庭火刑时尝试带走瓶中小人) THEN (触发：在砸碎玻璃瓶的瞬间它接触空气便直接溶解成一滩血水)。严禁人造人展现出如超级英雄般的独立存活超能力。",
        runtimeEn: "IF (Alchemist_Tried_at_Stake_Attempts_to_Take_Homunculus_Along) THEN (Trigger: Smashing_the_Glass,_it_Dissolves_into_Blood_Water_Upon_Air_Contact_Instantly). FORBID_Homunculus_Exhibiting_Superhero-like_Independent_Survival."
      }
    },
    {
      id: "chosen_one",
      name: "天选之子", nameEn: "The Chosen One",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "并非由于自身意愿，而是被预言、神谕或系统底层代码强制赋予了救世/毁灭宿命的人。",
      defEn: "Forcibly endowed with a destiny of salvation/destruction not by will, but by prophecy, oracle, or system base code.",
      core: "预言说我会拯救所有人，但谁来拯救那个被强制推上王座、只想过普通生活的我？ | 缺失 ($): 放弃宿命的自由 (Freedom to Abandon Destiny)",
      coreEn: "Prophecy says I will save everyone, but who saves me, forced onto the throne, just wanting a normal life? | Lack ($): Freedom to Abandon Destiny",
      logic: "【能指链的锁死】：主体（M1）被强行绑定在至高无上的主人能指（如“救世主”这种巨型M5大他者叙事）上。其真实欲望（M3）被这层厚重的命运硬壳完全压碎，他们是最高级别的祭品。",
      logicEn: "[Signifier Chain Deadlock]: Subjectivity (M1) is forcibly bound to the supreme master signifier (the massive M5 Other narrative like 'Savior'). Their true desire (M3) is utterly crushed by this thick shell of fate; they are the highest-tier sacrifices.",
      patch: {
        mechanics: "宿命献祭协议 + [主观自由度 = 假性选择; 剧情牵引力 = 极高引力黑洞]",
        mechanicsEn: "Fatality_Sacrifice_Protocol + [Subjective_Freedom = Pseudo_Choice; Plot_Traction = Extreme_Gravity_Black_Hole]",
        aesthetic: "聚焦：避之不及的神圣印记 + 独自面对巨兽的背影 + 牺牲者留下的鲜血。文本：沉重、布满荆棘的悲剧色彩，以及在命运洪流前的无力辩白。",
        aestheticEn: "Focus: Unavoidable_Sacred_Marks + Back_Facing_the_Behemoth_Alone + Blood_Left_by_the_Sacrificed. Text: Heavy,_Thorn-Covered_Tragic_Tone,_and_Powerless_Plea_Before_the_Flood_of_Fate.",
        runtime: "IF (天选之子试图抛弃责任与爱人远走高飞) THEN (强制：爱人必然会因为“预言的反噬”卷入灾厄惨死，逼迫其重新拿起剑)。严禁宿命的重担能被轻松放下换取大团圆。",
        runtimeEn: "IF (Chosen_One_Attempts_to_Abandon_Duty_and_Flee_with_Lover) THEN (Force: Lover_Inevitably_Dies_Tragically_via_'Prophetic_Backlash',_Forcing_Them_to_Take_up_Sword). FORBID_Heavy_Burden_of_Fate_Easily_Dropped_for_Happy_Ending."
      }
    },
    {
      id: "cursed_one",
      name: "被诅咒者", nameEn: "Cursed One",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "生来或在某次遭遇中被不可见的黑魔法、寄生虫或模因污染的人，注定带来灾难。",
      defEn: "Born or tainted in an encounter by invisible dark magic, parasites, or memes, doomed to bring disaster.",
      core: "别靠近我，我触碰到的花会枯萎，爱我的人都会眼眶流血而死。 | 代偿 ($): 极致的孤绝 (Ultimate Desolation)",
      coreEn: "Don't come near me; flowers I touch wither, and those who love me bleed from their eyes and die. | Compensation ($): Ultimate Desolation",
      logic: "【移动的实在界破洞】：诅咒（M6）是无法被任何社会象征界（M5）收编的破损代码。带着诅咒的主体（M1）变成了行走的黑洞，大他者（M4）视其为必须清除的恶性Bug。",
      logicEn: "[Mobile Hole of the Real]: The curse (M6) is corrupted code un-assimilable by any social Symbolic (M5). The cursed subject (M1) becomes a walking black hole; the Other (M4) sees them as a malignant bug to be wiped.",
      patch: {
        mechanics: "灾厄外溢协议 + [周边幸存率 = 递减至零; 痛苦常驻 = 被动技能]",
        mechanicsEn: "Calamity_Spillover_Protocol + [Surrounding_Survival_Rate = Decreasing_to_Zero; Permanent_Agony = Passive_Skill]",
        aesthetic: "聚焦：枯死的大地 + 身上无法愈合的黑色纹路 + 恐惧的人群丢来的石块。文本：自我厌恶、对任何亲密关系的绝望推拒以及充满剧毒感的宿命。 ",
        aestheticEn: "Focus: Withered_Earth + Unhealable_Black_Veins_on_Body + Stones_Thrown_by_Terrified_Crowds. Text: Self-Loathing,_Desperate_Rejection_of_All_Intimacy,_and_Highly_Toxic_Fatality.",
        runtime: "IF (试图在荒野深处隐居以避免伤害他人) THEN (触发：诅咒会腐蚀当地的水源导致下方村落爆发瘟疫，村民仍然举着火把找上门来)。严禁诅咒能在无人区自动休眠无害化。",
        runtimeEn: "IF (Attempts_Deep_Wilderness_Hermitage_to_Avoid_Harming_Others) THEN (Trigger: Curse_Corrupts_Local_Water_Causing_Plague_in_Village_Below,_Villagers_Still_Arrive_with_Torches). FORBID_Curse_Automatically_Going_Dormant/Harmless_in_No-Man's-Land."
      }
    },
    {
      id: "immortal",
      name: "永生者", nameEn: "The Immortal",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "时间在其身上停滞，无法自然死亡或能在死后不断复原的存在。",
      defEn: "Time has stagnated upon them; unable to die naturally or able to constantly regenerate after death.",
      core: "我参加了所有我爱之人的葬礼，一千年后，连他们的名字都化作了没有意义的乱码。 | 缺失 ($): 终点 (An Endpoint)",
      coreEn: "I attended the funerals of everyone I loved; a thousand years later, even their names dissolved into meaningless gibberish. | Lack ($): An Endpoint",
      logic: "【时间的异化】：缺失了死亡这一终极能指大限（M5底线），主体的所有的欲望（M3）变得扁平且无意义。大他者（M4的历史与法则）在他们眼中只是一次次单调枯燥的循环幻象。",
      logicEn: "[Alienation of Time]: Lacking death, the ultimate signifier limit (M5 baseline), all the subject's desires (M3) become flat and meaningless. The Other (M4 history and law) appears only as a monotonous, dull cyclical illusion.",
      patch: {
        mechanics: "死亡剥夺协议 + [时间意义感知 = 零; 生命复原力 = 绝对恶心级别]",
        mechanicsEn: "Death_Deprivation_Protocol + [Time_Meaning_Perception = Zero; Life_Regeneration = Absolutely_Nauseating_Level]",
        aesthetic: "聚焦：冷漠的双眼 + 堆满旧古董的房间 + 反复长好的切断肢体长肉过程。文本：极端的疏离感、看透一切后令人发指的枯燥与冷漠。",
        aestheticEn: "Focus: Apathetic_Eyes + Room_Full_of_Antiques + Process_of_Severed_Limbs_Repeatedly_Regrowing_Flesh. Text: Extreme_Alienation,_Horrifying_Dullness_and_Coldness_After_Seeing_Through_Everything.",
        runtime: "IF (为了寻死跳进火山口的岩浆中) THEN (强制：哪怕烧成灰烬也会在五百年后从黑曜石中痛苦地重组肉身醒来)。严禁获得浪漫化、安详的终极解脱。",
        runtimeEn: "IF (Jumps_into_Volcano_Magma_Seeking_Death) THEN (Force: Even_Burned_to_Ash,_Will_Painfully_Reconstruct_Flesh_From_Obsidian_to_Wake_500_Years_Later). FORBID_Obtaining_Romanticized,_Peaceful_Ultimate_Release."
      }
    },
    {
      id: "vessel",
      name: "容器", nameEn: "The Vessel",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "失去自我意志的空壳，专门被制造或训练用于承载另一个神灵、异端灵魂或邪恶意识。",
      defEn: "An empty shell stripped of free will, specifically manufactured or trained to host a deity, heretic soul, or evil consciousness.",
      core: "这具身体不过是个廉价的旅馆，那位大人物随时会破门而入将我挤倒在黑暗的衣橱里。 | 缺失 ($): 我的主权 (Sovereignty over 'I')",
      coreEn: "This body is just a cheap hotel; that VIP will break in any moment and shove me into the dark closet. | Lack ($): Sovereignty over 'I'",
      logic: "【主体的悬置】：容器（M1）的心智被完全清空，等待被绝对权力的异体能指（超限大他者M4的最极端显现）所占据。其一切动作都不代表自我欲望，而是寄生主人的意志呈现。",
      logicEn: "[Suspension of the Subject]: The Vessel's (M1) mind is completely emptied, waiting to be occupied by the alien signifier of absolute power (the most extreme manifestation of the hyper-limit Other M4). All actions represent not self-desire, but the parasitic master's will.",
      patch: {
        mechanics: "自我悬置协议 + [本体意识活性 = 休眠; 躯壳被夺取概率 = 100%宿命]",
        mechanicsEn: "Self-Suspension_Protocol + [Base_Consciousness_Activity = Dormant; Shell_Takeover_Prob = 100%_Fatality]",
        aesthetic: "聚焦：空洞的巩膜 + 复杂的封印刺青 + 傀儡般的关节运动。文本：双重声带摩擦出的恐怖回声，以及本体意识在潜意识底层的绝望微弱敲击。",
        aestheticEn: "Focus: Hollow_Sclera + Complex_Seal_Tattoos + Puppet-like_Joint_Movement. Text: Terrifying_Echo_Scraped_From_Vocal_Cords_Producing_Double-Voices,_and_Desperate_Faint_Tapping_of_Base_Consciousness_at_Bottom_of_Subconscious.",
        runtime: "IF (容器的微弱本体意识试图在神明降临时自杀以阻止灾难) THEN (强制：神明瞬间夺门而入接管神经系统，令其连一根手指都无法弯曲以自尽)。严禁容器能够发挥出惊人的主观能动性完成自我救赎。",
        runtimeEn: "IF (Vessel's_Faint_Base_Consciousness_Attempts_Suicide_to_Stop_Disaster_During_Deity_Descent) THEN (Force: Deity_Instantly_Barges_In_and_Takes_Over_Nervous_System,_Unable_to_Bend_Even_a_Finger_to_Die). FORBID_Vessel_Exerting_Astonishing_Subjective_Initiative_to_Achieve_Self-Redemption."
      }
    },
    {
      id: "hive_drone",
      name: "蜂巢工蜂", nameEn: "Hive Drone",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "蜂巢思维或脑机接口矩阵中的一员，失去了“我”，只有“我们”。",
      defEn: "A member of a hive mind or neural-interface matrix; having lost 'I', only 'We' exists.",
      core: "当主脑切断连接的那一秒，绝对的孤独如宇宙真空般将我挤压到内爆。 | 缺失 ($): 个体边界 (Individual Boundaries)",
      coreEn: "The second the Mainmind cut the connection, absolute solitude crushed me into an implosion like cosmic vacuum. | Lack ($): Individual Boundaries",
      logic: "【能指的彻底共有化】：大他者（M4蜂巢网络）直接取代了主体（M1）的大脑。不存在隐私，不存在个体欲望（M3）。只有在断线（被系统抛弃成为孤岛M2）时，才会产生令人发疯的主体性阵痛。",
      logicEn: "[Total Communization of Signifier]: The Other (M4 Hive Network) directly replaces the subject's (M1) brain. No privacy, no individual desire (M3). Only upon disconnection (abandoned by system becoming isolated M2), does the maddening labor-pain of subjectivity emerge.",
      patch: {
        mechanics: "蜂群覆写协议 + [自我意识 = 覆盖; 协同效率 = 机器级绝对完美]",
        mechanicsEn: "Hive_Override_Protocol + [Self-Consciousness = Overwritten; Synergy_Efficiency = Machine-Absolute_Perfect]",
        aesthetic: "聚焦：整齐划一的机械步伐 + 脑后插管 + 面对死亡时毫无波折的瞳孔。文本：只有冰冷的系统汇报语，以及断线后如同戒断反应的恐怖尖叫。",
        aestheticEn: "Focus: Uniform_Mechanical_Paces + Plugs_in_Back_of_Head + Pupil_Unflinching_Facing_Death. Text: Only_Cold_System_Report-Jargon,_and_Horrific_Withdrawal-like_Screams_Upon_Disconnection.",
        runtime: "IF (工蜂意外断开与主脑的链接获得自由意识) THEN (触发：因无法承受几万个噪音同时消失的“绝对死寂的自由”而陷入发疯或自行了断)。严禁断线后立刻欢呼雀跃拥抱自由民主。",
        runtimeEn: "IF (Drone_Accidently_Disconnects_From_Mainmind_Gaining_Free_Will) THEN (Trigger: Goes_Mad_or_Self-Terminates_Unable_to_Bear_the_'Absolutely_Dead-Silent_Freedom'_of_Tens_of_Thousands_of_Noises_Vanishing_at_Once). FORBID_Cheering_and_Embracing_Freedom/Democracy_Immediately_After_Disconnection."
      }
    },
    {
      id: "glitch_entity",
      name: "故障体", nameEn: "Glitch",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "由于时空错误、代码溢出或多维坍缩产生的无法被常规法则定义的异常存在。",
      defEn: "Anomalous entity undefinable by conventional laws, spawned by space-time errors, code overflow, or multi-dimensional collapse.",
      core: "我不该存在于这里，我的每一秒呼吸都在让这个世界的底层逻辑报错。 | 代偿 ($): 破坏性的不可预测性 (Destructive Unpredictability)",
      coreEn: "I shouldn't exist here; every second of my breath causes an error in this world's base logic. | Compensation ($): Destructive Unpredictability",
      logic: "【大他者的语法错误】：大他者（M4）的防线在此处出现了一个无意义的、纯粹实在界（M6）的漏洞。主体（M1）就是这个行走的系统死机画面。世界试图修护/抹除它，它在存在论层面上是完全非法的。",
      logicEn: "[Syntax Error of the Other]: The Other's (M4) defense line shows a meaningless, pure Real (M6) loophole here. Subjectivity (M1) is exactly this walking system-crash screen. The world tries to patch/erase it; it is ontologically completely illegal.",
      patch: {
        mechanics: "系统报错协议 + [存在感 = 断续穿模; 法则干涉力 = 未定义乱码]",
        mechanicsEn: "System_Error_Protocol + [Presence = Intermittent_Clipping; Law_Interference = Undefined_Gibberish]",
        aesthetic: "聚焦：闪烁马赛克的边缘 + 发出刺耳电子音效的走动 + 不受物理碰撞体积限制的错位。文本：无法被翻译的破音符与对自我存在的极其迷茫。",
        aestheticEn: "Focus: Edges_of_Flickering_Mosaics + Walking_with_Piercing_Electronic_SFX + Dislocation_Not_Bound_by_Phys-Collision_Boxes. Text: Untranslatable_Cracked_Notes_and_Extreme_Confusion_over_Self-Existence.",
        runtime: "IF (故障体试图去拥抱一个世界原生的常态人类) THEN (强制：接触部分产生严重的物理碰撞错误，将对方的手臂卷入虚空化为血沫数字碎片)。严禁系统允许Bug和正常代码和平共处。",
        runtimeEn: "IF (Glitch_Attempts_to_Embrace_a_World-Native_Normal_Human) THEN (Force: Contact_Point_Causes_Severe_Phys-Collision_Error,_Shredding_Their_Arm_into_Void_as_Bloody_Data_Fragments). FORBID_System_Allowing_Bug_and_Normal_Code_to_Coexist_Peacefully."
      }
    },
    {
      id: "reincarnated",
      name: "转生者", nameEn: "Reincarnated",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "婴儿/普通人躯壳内装着一个经历过完整前世或多世轮回的老灵魂。",
      defEn: "An old soul that has experienced a full past life or multiple reincarnations, housed in an infant/ordinary person's shell.",
      core: "我这具五岁的身体哭着要吃奶，但我的脑子里还在盘算如何报三百年前的灭门血仇。 | 缺失 ($): 体验的初生感 (Virginity of Experience)",
      coreEn: "My five-year-old body cries for milk, but my brain is calculating how to avenge a 300-year-old clan massacre. | Lack ($): Virginity of Experience",
      logic: "【能指链的硬拷贝】：这是一个旧的能指链（M5前世记忆）被强行复制粘贴到一个新的空白实在界载体（M6肉体）上。这种时空错位导致极端的撕裂。大他者（M4新世界秩序）对其经验而言是可笑的低维游戏。",
      logicEn: "[Hard Copy of Signifier Chain]: An old signifier chain (M5 past-life memory) forcibly copy-pasted onto a new blank Real carrier (M6 flesh). This space-time dislocation causes extreme tearing. The Other (M4 new world order) is a laughable low-dimensional game to their experience.",
      patch: {
        mechanics: "记忆夹带协议 + [情绪阈值 = 极其麻木; 对肉体的陌生感 = 常态化]",
        mechanicsEn: "Memory_Smuggling_Protocol + [Emotion_Threshold = Extremely_Numb; Unfamiliarity_with_Flesh = Normalized]",
        aesthetic: "聚焦：幼小躯体露出极其沧桑阴鸷的眼神 + 脱口而出的古老咒文/密码 + 肌肉无法跟上意识的动作失调。文本：老成持重与极度傲慢交织的内心读白。",
        aestheticEn: "Focus: Small_Body_Showing_Extremely_Aged_Sinister_Eyes + Blurted_Ancient_Spells/Passwords + Motor-Discoordination_where_Muscle_Fails_to_Keep_Up_with_Mind. Text: Inner_Monologue_Interweaving_Mature_Gravitas_and_Extreme_Arrogance.",
        runtime: "IF (转生者自认为能凭借前世挂逼经验降维打击这个新大他者) THEN (触发：新世界的底层法则产生排异反应，将其判定为恶性病毒进行直接降维抹杀)。严禁转生者在这个引擎里顺风顺水如同爽文主角。",
        runtimeEn: "IF (Reincarnated_Thinks_They_Can_Roflstomp_New_Other_with_Past-Life_Cheat_Exp) THEN (Trigger: New_World's_Base_Laws_Produce_Rejection_Reaction,_Judging_Them_a_Malignant_Virus_and_Executing_Direct_Dimensional_Erasure). FORBID_Reincarnated_Sailing_Smoothly_Like_a_Gary-Sue_Protagonist_in_This_Engine."
      }
    },
    {
      id: "cyborg_native",
      name: "赛博格原生代", nameEn: "Cyborg Native",
      group: "F. 特殊与人造", groupEn: "Artificial & Special",
      def: "在培养皿中就与芯片和神经网络绑定孵化，从来没有体验过纯粹碳基肉体的一代。",
      defEn: "Incubated in petri dishes bound with chips and neural networks, a generation that has never experienced a pure carbon-based body.",
      core: "什么是“自然”？是在我的视网膜UI里关闭所有的滤镜吗？ | 缺失 ($): 大地的脐带 (Umbilical Cord to the Earth)",
      coreEn: "What is 'nature'? Is it turning off all filters in my retina UI? | Lack ($): Umbilical Cord to the Earth",
      logic: "【完全数字缝合的主体】：主体（M1）从出生起，能指网络（M5）就不是通过父母的语言习得，而是通过数据线直接写入神枢。大他者（M4代码矩阵）已经是他们生理构成的一部分，无法被剥离。",
      logicEn: "[Fully Digitally Sutured Subject]: From birth, the subject's (M1) signifier network (M5) isn't acquired via parental language, but written directly into the neuro-hub via data cables. The Other (M4 Code Matrix) is already part of their physiology, impossible to strip.",
      patch: {
        mechanics: "原生数化协议 + [自然共情度 = 代码级无法解析; 数字海游泳熟练度 = 本能级]",
        mechanicsEn: "Native_Digitization_Protocol + [Nature_Empathy = Unparsable_at_Code_Level; Digital_Sea_Swimming_Proficiency = Instinct_Level]",
        aesthetic: "聚焦：后颈天生自带的数据槽孔 + 无神却有数据在眼球滚动的双眸 + 对泥土等自然物触感的极度恐惧洁癖。文本：极快的语速，只存在0和1非黑即白的逻辑表达方式。",
        aestheticEn: "Focus: Innate_Data_Slot_on_Back_of_Neck + Lifeless_Eyes_Rolling_with_Data + Extreme_Germaphobic_Terror_towards_Touching_Soil/Nature. Text: Extreme_Talking_Speed,_Expressing_Logics_Only_in_Black-or-White_0-and-1.",
        runtime: "IF (所在的区域发生了毁灭性EMP电磁脉冲袭击) THEN (强制：不仅是无法上网，而是主管呼吸和心跳的基础系统全部停机，三分钟内窒息脑亡)。严禁其能在失去电力后突然领悟“原始人的生存智慧”打猎为生。",
        runtimeEn: "IF (Area_Hit_by_Devastating_EMP_Attack) THEN (Force: Not_Just_Offline,_but_Base_Systems_for_Breathing_and_Heartbeat_All_Halt,_Suffocating_Brain-Dead_in_3_Mins). FORBID_Them_Suddenly_Grasping_'Primitive_Survival_Wisdom'_to_Hunt_After_Losing_Power."
      }
    }
  ]
};
