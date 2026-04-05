import { LibraryCategoryDef } from '../../../types';

export const SUR8_GROUP_A: LibraryCategoryDef = {
  id: "age_base",
  name: "1. 生理阶段与时间磨损 (Chronological Stage & Decay)",
  nameEn: "Chronological Stage & Decay",
  desc: "主体在单向时间轴上的熵增刻度。在 M0-M7 引擎中，年龄不可逆地决定了肉体（M2）的极限，以及大他者（M4）对其实用价值的估价。",
  defEn: "The entropy marker on a one-way timeline. In the M0-M7 engine, age irreversibly dictates flesh limits (M2) and systemic evaluation (M4).",
  items: [
    {
      id: "age_child",
      name: "儿童 (6-12岁)",
      nameEn: "Child (6-12)",
      def: "发育前阶段。纯真、脆弱，尚未被大他者完全规训的混沌体。",
      defEn: "Pre-pubescent stage. Innocent, fragile, a chaotic entity not yet fully disciplined by the Big Other.",
      core: "【换喻】绝对低位的视角与被系统判定为“未完成的零件” (The absolute low-angle perspective and the system's 'unfinished part')",
      coreEn: "【Metonymy】The raw material of humanity; vulnerability weaponized as narrative stakes.",
      logic: "【象征界真空法则】：儿童期主体的 M0（精神拓扑）尚未被 M4 彻底强行挤压成型，因此他们常常能看到大人看不到的“实在界缝隙（M2）”。但由于物理力量的极端劣势，他们的 M5（行动）经常无效化，命运极度依赖其他成年主体的投射。",
      logicEn: "[Symbolic Vacuum Law]: The child's M0 is not yet fully crushed by M4's mold. They often see 'Glitch in the Real (M2)' that adults ignore. But lacking physical force, their M5 actions fail; their fate banks entirely on adult projection.",
      patch: {
        mechanics: "基础雏形协议 + [系统防备度 = 低; 物理输出上限 = 极弱]",
        mechanicsEn: "Base_PROTOTYPE + [Systemic_Suspicion = Low; Kinetic_Output_Cap = Extreme_Weak]",
        aesthetic: "聚焦：必须仰头的低视角、过大的衣服、未经修饰的直接声带发音、面对庞大灾难时的不知所措。文本：清脆的笑声或极其压抑的无声发抖。",
        aestheticEn: "Focus: Compulsory upward gazing + Oversized clothes + Unfiltered raw vocals. Text: Tinkling laughter or suffocating, silent shivering against colossal disasters.",
        runtime: "IF (遭遇极端残酷的成人世界倾轧) THEN (触发：不按常理出牌的稚嫩破坏，或成为彻底撕裂观众道德防线的 M6 祭品)。",
        runtimeEn: "IF (Crushed_by_Brutal_Adult_Machinery) THEN (Trigger: Chaotic subversion via innocence, or becoming the heart-rending sacrifice M6 that breaks moral defenses)."
      }
    },
    {
      id: "age_teen",
      name: "少年 (13-19岁)",
      nameEn: "Teen (13-19)",
      def: "发育燃烧期。荷尔蒙暴走，叛逆，刚刚认识到社会规则的虚伪性。",
      defEn: "Pubescent burning stage. Hormonally chaotic, rebellious, freshly realizing the hypocrisy of the rules.",
      core: "【换喻】关节咔咔作响的拔节期与毫无理智可言的过载高热 (The cracking joints of growth and irrational overloaded thermal heat)",
      coreEn: "【Metonymy】The blazing engine without steering brakes; pure unrefined Eros and rebellion.",
      logic: "【M3爆炸与M4冲撞】：这是主体首次被大剂量注入生物学荷尔蒙（M2内驱），产生极度旺盛且混乱的 M3（欲望）。在这时，初次看清 M4（大他者规训）的面貌，从而产生了最纯粹、最不计后果的 M5（反抗破冰行动）。",
      logicEn: "[M3 Explosion vs M4 Collision]: The first massive injection of biological hormones (M2 drive) produces chaotic, blazing M3 (Desire). They see M4's mask for the first time, triggering the purest, most reckless M5 (Rebellion).",
      patch: {
        mechanics: "基础破壳协议 + [多巴胺暴走几率 = MAX; 死亡恐惧阈值 = 错乱低估]",
        mechanicsEn: "Base_HATCHING + [Dopamine_Riot_Prob = MAX; Death_Fear_Threshold = Delusionally_Low]",
        aesthetic: "聚焦：变声期的破音、肢体的不协调感与突然爆发的敏捷、充满挑衅的直视、脸上的创可贴。文本：暴雨般的语速和无视一切逻辑的热血（或极度的阴暗封闭）。",
        aestheticEn: "Focus: Voice-cracks + Lanky awkwardness masking sudden explosive agility + Defiant stares + Band-Aids. Text: Sights set to burn down the systemic house.",
        runtime: "IF (被权威 M4 强制要求屈服并放弃初恋/梦想) THEN (极大概率触发：宁愿带着整个世界同归于尽（M6）也绝不妥协的自毁式突击)。",
        runtimeEn: "IF (Authority_M4_Demands_Surrender_of_First_Love/Dream) THEN (High_Prop_Trigger: Suicidal assault preferring M6-world-burning over compromise)."
      }
    },
    {
      id: "age_youth",
      name: "青年 (20-35岁)",
      nameEn: "Young Adult (20-35)",
      def: "鼎盛期。肉体与精神的双重巅峰，也是被系统剥削压榨的第一主力。",
      defEn: "The Prime. Dual peak of flesh and mind. Also the primary battery exploited by the System.",
      core: "【换喻】极其锋利的出鞘之刃与正被抛入修罗场的电池 (The unsheathed razor-sharp blade and the battery loaded into the slaughterhouse)",
      coreEn: "【Metonymy】Peak performance. The apex predator that powers the engine of society.",
      logic: "【核心承压法则】：M4（社会秩序）对这个年龄段卡得最死。系统要求青年提供最强劲的 M5（劳动/服役）来维持运转。同时，他们的 M3 欲望（物质地位诉求）最清晰，因此痛苦（M1的缺失感）也是最凌厉不含糊的。",
      logicEn: "[Core Bearing Law]: M4 clamps down hardest here. The System demands prime M5 (Labor/Duty). Their M3 (Material/Status desire) is razor-sharp. Hence, the pain of Lack (M1) is brutally articulate.",
      patch: {
        mechanics: "基础巅峰协议 + [机体恢复力 = 高; M4规训压力 = 全负荷]",
        mechanicsEn: "Base_PRIME + [Flesh_Recovery = High; M4_Discipline_Pressure = Full_Load]",
        aesthetic: "聚焦：充血的肌肉线条、极其坚决的脚步、熬夜后眼球的血丝、精良的工具使用熟练度。文本：刀刃相撞的清脆响声与清晰的逻辑执行力。",
        aestheticEn: "Focus: Engorged muscle striations + Resolute footfalls + Bloodshot eyes from all-nighters + Weapon mastery. Text: The crisp clash of blades and crystal-clear tactical execution.",
        runtime: "IF (发现自身的努力无论如何也无法填补 M3 的阶级鸿沟) THEN (触发：绝对冷静且致命的异化，从齿轮变成破坏系统的杀手)。",
        runtimeEn: "IF (Realizing_Effort_Cannot_Bridge_M3_Class_Divides) THEN (Trigger: Cold, lethal alienation; turning from a cog to the system's assassin)."
      }
    },
    {
      id: "age_mid",
      name: "中年 (36-55岁)",
      nameEn: "Middle Age (36-55)",
      def: "稳定期与初老。责任的重压，体能开始出现暗伤，深谙系统运作的灰黑地带。",
      defEn: "Stability and early aging. The crush of responsibility, onset of chronic physical damage, fluent in the system's gray zones.",
      core: "【换喻】背负着锚链泥沙的沉稳与正在下沉的重力场 (The steady gait hauling an anchor chain, and the sinking gravity field)",
      coreEn: "【Metonymy】Compromise incarnate. The rusty shield that knows how to survive.",
      logic: "【妥协韧性法则】：经过多年的冲撞，M1（主体）深深嵌合进了 M4（大他者）的模具中，带着满身 M2（物理伤痕）。此时的 M5（行动）不再是为了虚无缥缈的 M3 理想，而是为了保护现有的微小羁绊。拥有极强的反脆弱忍耐力。",
      logicEn: "[Compromise Resilience Law]: After years of collisions, M1 is deeply embedded in M4's mold, carrying M2 physical scars. M5 actions are no longer for grandiose M3 ideals, but to protect tiny existing tethers. Extreme anti-fragile endurance.",
      patch: {
        mechanics: "基础重力协议 + [极限爆发 = 剧烈耗血; 规则漏洞利用 = 精通]",
        mechanicsEn: "Base_GRAVITY + [Limit_Burst = Heavy_HP_Burn; Rules_Exploit = Mastered]",
        aesthetic: "聚焦：发际线的后退与肚腩的隐藏、沉重且起伏稳定的呼吸、常年佩戴的某个旧表、极具分寸感的后退半步。文本：一声极其深长的叹息后，拔出老旧的枪膛。",
        aestheticEn: "Focus: Receding hairlines + Heavy but stable breathing + The old analog watch + The tactical half-step back. Text: A deeply exhausted sigh before racking the slide of an old gun.",
        runtime: "IF (系统触碰了其拼死保护的最后底线，如家人) THEN (触发：完全抛弃所有伪装，展现极其恐怖、计谋算尽的致命毁灭性打击)。",
        runtimeEn: "IF (System_Crosses_The_Final_Line_e.g._Family) THEN (Trigger: Shredding the compromised mask to unleash terrifying, hyper-calculated lethal annihilation)."
      }
    },
    {
      id: "age_elder",
      name: "老年 (60岁以上)",
      nameEn: "Elder (60+)",
      def: "衰退期。肉体濒临枯竭，但积累了海量的经验、秘密或权力。",
      defEn: "Decline. The flesh nears exhaustion, but holds immense reservoirs of experience, secrets, or institutional power.",
      core: "【换喻】铺满皱纹的时间地图与腐朽却致命的枯木 (The map of time carved in wrinkles and the hollow but lethal dry wood)",
      coreEn: "【Metonymy】Living history. The fading ember that can still start a forest fire.",
      logic: "【存在倒计时法则】：M6（死亡）的阴影在物理（M2）上极其清晰可见。此时主体分为两端：要么掌握了极高的 M4 权限（如老教父）用智谋代替体能；要么作为被系统彻底抛弃的废品，产生对一切皆空的豁达（M3 归零）。",
      logicEn: "[Existential Countdown Law]: M6 (Death) is vividly approaching in M2 physical decay. Subjects bifurcate: they either hold immense M4 authority (The Godfather) using cunning over muscle, or they are discarded scraps finding enlightenment in the zeroing of M3 (Desire).",
      patch: {
        mechanics: "基础迟暮协议 + [动能输出 = 几近枯竭; 场域威压/经验值 = MAX]",
        mechanicsEn: "Base_TWILIGHT + [Kinetic_Output = Exhausted; Field_Aura/Experience = MAX]",
        aesthetic: "聚焦：如枯树皮般的手背斑点、缓慢却无法拒绝的动作、低沉混响的嘶哑喉音、极其浑浊却能看穿人心的眼神。文本：腐朽气息中的渊博与不怒自威。",
        aestheticEn: "Focus: Visibly mapped veins on dry skin + Slow but undeniable gestures + Rheumy but piercing eyes. Text: Vast profundity wrapped in the scent of decay.",
        runtime: "IF (遭遇年轻挑战者自以为是的武力压制) THEN (大概率触发：仅仅通过一句话或一个提前十年的暗棋布局，将对方彻底绞杀)。",
        runtimeEn: "IF (Faced_With_Arrogant_Kinetic_Threat_From_Youth) THEN (High_Prop_Trigger: Absolute strangulation via a single spoken word or a trap laid ten years ago)."
      }
    }
  ]
};
