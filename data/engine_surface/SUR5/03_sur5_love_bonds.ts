import { LibraryCategoryDef } from '../../../types';

export const SUR5_LOVE_BONDS: LibraryCategoryDef = {
  id: "sur5_love_bonds",
  name: "3. 亲密关系与情感倒影 (Love & Bonds)",
  nameEn: "3. Love & Bonds",
  desc: "为了另一半、亲情或深厚友谊而展开的行动。对象可以是具体的人，也可以是代表那段感悟的信物。",
  descEn: "Actions taken for a significant other, family, or deep friendship. The object can be a specific person or a token representing that connection.",
  items: [
    {
      id: "the_dying_fragile_hostage",
      name: "濒死的柔弱人质", nameEn: "The Dying Fragile Hostage",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "主角视若生命的亲人或恋人，处于重伤、昏迷或手无缚鸡之力的状态，完全依靠主角脱困。",
      defEn: "A loved one seen as protagonist's life, heavily injured, comatose, or defenseless, relying entirely on the protagonist to escape.",
      core: "【表面诱惑】：无论世界毁灭还是拯救苍生都不重要，此时唯一的意义就是带TA回家。",
      coreEn: "【Surface Temptation】: Whether the world ends or is saved matters not; the only meaning now is bringing THEM home.",
      logic: "【叙事抓手】：物理上的“绝对单向拖累”。人质无法提供火力，甚至不能自主行走（需要背负/公主抱）。这强行剥夺了主角的双手武装与灵活闪避能力，将自由的动作戏降维成“必须用血肉之躯在弹雨中做肉盾”的重负载突围。",
      logicEn: "【Narrative Affordance】: Physical 'absolute one-way drag'. The hostage offers no fire, can't walk (requires piggyback/carry). Forcibly deprives protagonist's armed hands and dodging agility, reducing free-action into a heavy-load breakout acting as a meat-shield in bullet rain.",
      patch: {
        mechanics: "表层锚点 + [双手缴械状态 = 只能单手持枪/无法反击; 移速暴降 = 成为活靶子; 掩护受击面积 = 被迫倍增]",
        mechanicsEn: "Surface_Anchor + [Disarmed_Hands = One-hand_fire/no_counter; Move_Speed_Crash = Live_target; Cover_Hitbox = Forced_Multiplier]",
        aesthetic: "聚焦：把昏迷的恋人死死按在怀里、自己背部承受着重击与划伤、鲜血滴在对方安详的脸颊上。",
        aestheticEn: "Focus: Pressing comatose lover tight against chest, own back taking heavy hits and slashes, blood dripping onto their peaceful cheek.",
        runtime: "IF (穿过布满狙击手的开阔走廊) THEN (提供机制：无法匍匐前进，只能用自己的后背作为防弹衣，一步一步挪过死亡线)。",
        runtimeEn: "IF (Crossing_open_sniper_corridor) THEN (Provide_Mechanic: Cannot_crawl_can_only_use_own_back_as_kevlar_inching_across_the_death_line)."
      }
    },
    {
      id: "the_brainwashed_beloved",
      name: "拔刀相向的挚爱之人", nameEn: "The Brainwashed Beloved",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "由于记忆清洗、蛊毒或误会，导致主角最深爱/信任的人变成了眼前最致命的杀手。",
      defEn: "Due to memory wipe, poison, or misunderstanding, the protagonist's most loved/trusted person becomes the deadliest assassin before them.",
      core: "【表面诱惑】：跨越生死的羁绊面临最惨烈的测试，必须在保全自己与唤醒对方之间寻找不可能的缝隙。",
      coreEn: "【Surface Temptation】: Life-and-death bonds face the most tragic test; must find the impossible gap between saving oneself and awakening them.",
      logic: "【叙事抓手】：创造了“不对称的火力法则”。敌人招招致命、招招掏心；而主角在物理上被强行封印了所有“致死性反击手段”。导致战斗动作从“击杀”被扭曲成高难度的“缴械、擒拿与防御”，防线随时因不忍痛下杀手而崩溃。",
      logicEn: "【Narrative Affordance】: Creates 'asymmetrical firepower rules'. The enemy uses fatal, heart-piercing moves; the protagonist is physically sealed from all 'lethal counter-attacks'. Warps combat from 'killing' into high-diff 'disarming, grappling, defending', defense crumbling easily out of mercy.",
      patch: {
        mechanics: "表层锚点 + [反击技能锁死 = 禁用致命武器; 敌方强度 = 借势满级暴怒; 战斗解法 = 强行贴身控制或物理唤醒]",
        mechanicsEn: "Surface_Anchor + [Counter-Skills_Locked = Banned_lethal_weapons; Enemy_Strength = Maxed_Frenzy; Combat_Solution = Forced_CQC_control_or_physical_awaken]",
        aesthetic: "聚焦：对面毫无感情空洞的眼神与致命的刀锋、主角哪怕被刺穿肩膀也拼命丢下枪去拥抱对方的决绝。",
        aestheticEn: "Focus: Emotionless cold eyes and fatal blade on the other side, protagonist dropping gun to embrace them even when shoulder is impaled.",
        runtime: "IF (昔日的恋人挥舞着斩舰刀劈下致命一击，主角本可一枪爆头) THEN (提供机制：主角强行偏转枪口打碎头顶的水管，任由对方的刀切开胸膛，借机死死抱住对方疯狂呼唤名字)。",
        runtimeEn: "IF (Former_lover_swings_anti-ship_blade_for_fatal_blow_protagonist_could_headshot) THEN (Provide_Mechanic: Protagonist_forces_gun_away_shattering_overhead_pipe_letting_blade_slash_chest_to_hug_them_tight_screaming_their_name)."
      }
    },
    {
      id: "the_half_burned_token_of_vow",
      name: "烧剩一半的十年信物", nameEn: "The Half-Burned Token of Vow",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "一枚在市场上一文不值，但承载着对亡妻、旧友、甚至对过去自己绝不背叛之承诺的凡物（如旧名牌、破损的照片）。",
      defEn: "An object worthless on the market, carrying a non-betrayal promise to a dead wife, old friend, or past self (e.g., Old dog tag, torn photo).",
      core: "【表面诱惑】：这不是物质，而是主角活下去的精神锚点，证明在泥沼般的残酷世界中，自己曾经是个“人”。",
      coreEn: "【Surface Temptation】: Not material, but the spiritual anchor for the protagonist to keep living, proving they were once 'human' in this cruel swamp world.",
      logic: "【叙事抓手】：赋予一个“零质量死物”以“无限生命权重”。当这件极其轻巧、易飞、易碎的信物在战斗中掉落深渊或被卷入火海时，主角的物理优先级将被这件死物瞬间接管——不顾常理地跃入深渊、或者冲进燃烧的火场，爆发出打破战术常理的非理性空间位移。",
      logicEn: "【Narrative Affordance】: Grants 'zero-mass dead object' 'infinite life-weight'. When this extremely light, wind-blown, fragile token falls into a abyss or fire during combat, protagonist's physical priority is instantly hijacked—leaping into the abyss irrationally, causing non-tactical insane spatial displacements.",
      patch: {
        mechanics: "表层锚点 + [坠落判定 = 强制打断当前战斗节奏; 位移牵引 = 触发自杀式夺回动作; 零战损收益 = 纯粹的信仰税]",
        mechanicsEn: "Surface_Anchor + [Drop_Check = Forcibly_interrupts_combat_rhythm; Displacement_Pull = Triggers_suicidal_retrieval_action; Zero_Tactical_Gain = Pure_faith_tax]",
        aesthetic: "聚焦：从指尖滑落飘向悬崖的轻巧照片、主角头也不回地抛下身后的枪战直接跟着跃下深渊的疯狂。",
        aestheticEn: "Focus: Light photo slipping from fingertips floating towards cliff, protagonist blindly abandoning the gunfight jumping into the abyss after it.",
        runtime: "IF (反派冷笑着将那枚木雕抛向烈火熊熊的焚化炉) THEN (提供机制：主角放弃了对反派的绝杀机会，顶着上千度的烈焰用烧焦的手从火海中掏出了木雕)。",
        runtimeEn: "IF (Villain_sneers_tossing_the_wood-carving_into_roaring_incinerator) THEN (Provide_Mechanic: Protagonist_abandons_lethal_strike_on_villain_braving_1000-degree_flames_with_charred_hands_to_fish_out_the_carving)."
      }
    },
    {
      id: "the_fallen_comrades_remains",
      name: "必须带回故土的战友尸骨", nameEn: "The Fallen Comrade's Remains",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "在敌后彻底战死、失去了生命体征，但出战前曾彼此许诺“不管发生什么，要把我带回防线”的同伴遗体。",
      defEn: "Comrade completely dead behind enemy lines, having promised before deployment 'no matter what, bring me back to the line'.",
      core: "【表面诱惑】：男人的最高浪漫与惨烈契约，死者已矣，但活人的承诺重于泰山。",
      coreEn: "【Surface Temptation】: The highest romance and tragic contract of men; the dead are gone, but living promises weigh heavier than mountains.",
      logic: "【叙事抓手】：这是所有物理负荷中**最绝望的一种**。因为搬运生还者还有伦理上的实用性，而搬运一具七八十公斤重的尸体，在战术上属于“绝对的送命行为”。它强行给撤退战带来了最沉重、毫无反哺机制的物理配重，是在极高压环境下的“纯粹道德试炼场”。",
      logicEn: "【Narrative Affordance】: The **most desperate** of all physical loads. Carrying survivors has ethical utility, carrying an 80kg corpse is tactically 'absolute suicide'. Forcibly brings the heaviest, zero-return physical counterweight to the retreat, a 'pure moral proving ground' in high-pressure.",
      patch: {
        mechanics: "表层锚点 + [超重沉尸负荷 = 拖垮整个小队的机动性; 绝对零实用度 = 生死道德考验; 地狱级撤离 = 死亡如影随形]",
        mechanicsEn: "Surface_Anchor + [Extreme_Dead-weight = Drags_down_entire_squad's_mobility; Absolute_Zero_Utility = Life/Death_moral_test; Hell-tier_Evac = Death_shadowing]",
        aesthetic: "聚焦：在泥泞和炮火中用皮带将残破尸体死死绑在自己背上的狂嘶、因为负重而深陷进泥坑的双脚、周围冷血佣兵不解其举的嘲笑。",
        aestheticEn: "Focus: Roaring while belting the broken corpse tightly to own back in mud and shellfire, feet sinking deep into mud from the weight, cold-blooded mercs mocking the incomprehensible act.",
        runtime: "IF (直升机救援索正在上升，但下面挂着的遗体过重导致防弹绳濒临绷断) THEN (提供机制：主角面临必须切断自己配枪和防御副囊以减轻重量，甚至将自己的血肉作为索具缓冲)。",
        runtimeEn: "IF (Heli_rescue_cable_rising_but_corpse_weight_causes_kevlar-rope_to_snap) THEN (Provide_Mechanic: Protagonist_faces_cutting_own_sidearm_and_armor_to_shed_weight_even_using_own_flesh_as_rig_buffer)."
      }
    },
    {
      id: "the_inside_locked_quarantine_gate",
      name: "只能从内部锁死的隔离闸门", nameEn: "The Inside-Locked Quarantine Gate",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "逃出生天的最后一条通道，但由于系统故障，防爆门或发射舱必须有一个人留在极其危险的一侧，手动拉下并按死物理拉杆才能让另一边安全切断。",
      defEn: "Last passage to escape, but due to system failure, blast doors require one person to stay on the highly fatal side, manually holding the physical lever to ensure the other side severs safely.",
      core: "【表面诱惑】：生存的名额=N-1。这是亲密关系里最惨烈也最高光的终极奉献，用自己的毁灭成全对方的新生。",
      coreEn: "【Surface Temptation】: Survival quota = N-1. The most tragic yet glorious ultimate sacrifice in intimacy, using one's destruction to perfect the other's rebirth.",
      logic: "【叙事抓手】：创造了“双向隔绝的物理蒙太奇”。防弹玻璃、厚重铁门将空间一分为二。一边是即将被烈火、海水或怪物吞噬的深渊，另一边是安全却绝望痛哭的生机。这道玻璃阻断了声音和触觉，使得两人最后的情感爆发只能通过视线和唇语来完成，达到情感核爆。",
      logicEn: "【Narrative Affordance】: Creates 'two-way isolated physical montage'. Bulletproof glass/iron doors split space in two. One side engulfed in fire/water/monsters, the other safe but weeping in despair. The glass blocks sound and touch, forcing the final emotional outburst thru eye contact and lip-reading, achieving emotional nuke.",
      patch: {
        mechanics: "表层锚点 + [生存名额削减 = 强制开启自我牺牲判定; 绝缘屏障机制 = 视觉可见但物理/听觉彻底隔绝; 单向操作锁定 = 物理上无法替死]",
        mechanicsEn: "Surface_Anchor + [Survival_Quota_Cut = Forced_self-sacrifice_check; Insulated_Barrier = Visually_open_but_physically/audio_sealed; One-way_Operation = Physically_impossible_to_swap_deaths]",
        aesthetic: "聚焦：透过满是划痕和血迹的防弹玻璃按在一起的两只手掌、外面怪物潮水般扑来的倒影、门内人笑着流泪做出口型“活下去”。",
        aestheticEn: "Focus: Two palms pressed together thru scratched and bloodied bulletproof glass, reflection of monster tide swarming outside, person inside smiling with tears mouthing 'live'.",
        runtime: "IF (距离基地核爆只剩十秒，主角终于把心爱的人推出逃生舱) THEN (提供机制：主角转身用后背顶住破损的物理闸门拉杆，面对数以亿计涌来的虫潮微笑着点燃了嘴里的香烟)。",
        runtimeEn: "IF (10s_to_base_nuke_protagonist_finally_pushes_loved_one_into_escape_pod) THEN (Provide_Mechanic: Protagonist_turns_using_back_to_hold_broken_gate-lever_smiling_and_lighting_a_cigarette_facing_billions_of_swarming_bugs)."
      }
    },
    {
      id: "the_wailing_innocent_infant",
      name: "哭声震天的无辜稚子", nameEn: "The Wailing Innocent Infant",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "在这场残忍血腥的成人厮杀中，一个必须被保护的、毫无自理能力且随时可能因为饥饿恐惧而大哭的脆弱婴儿。",
      defEn: "In this cruel bloody adult slaughter, a fragile baby that must be protected, lacking any self-care capability and liable to cry loud from hunger or fear.",
      core: "【表面诱惑】：极致的纯洁与极致的残酷的对撞，婴儿代表了末世中最后的希望，激发出铁汉最本能的柔情。",
      coreEn: "【Surface Temptation】: Collision of extreme purity and extreme cruelty; baby reps the last hope in the apocalypse, inspiring the most primal tenderness in iron-willed fighters.",
      logic: "【叙事抓手】：婴儿是潜行和潜伏关卡中的“不可控音源炸弹”。在需要极致安静的潜入/躲藏物理环境中，婴儿随时会发出的高分贝哭声构成了悬在头顶的达摩克利斯之剑。强迫主角在激烈开火中不仅要换弹匣，还得腾出手来喂奶或轻轻摇晃哄睡，产生荒谬但动人的行为错位。",
      logicEn: "【Narrative Affordance】: The baby is an 'uncontrollable audio bomb' in stealth levels. In physics environments requiring extreme silence, high-decibel crying forms a Damocles sword. Forces protagonist in heavy firefights to not just reload, but free a hand to feed or gently rock the baby, creating absurd yet moving action dislocations.",
      patch: {
        mechanics: "表层锚点 + [随机声源暴露 = 潜入局的最强变数; 单手怀抱固定 = 强制限制战术动作; 违和安抚行为 = 暴力与温情的并行处理]",
        mechanicsEn: "Surface_Anchor + [Random_Audio_Exposure = Stealth's_strongest_variable; One-arm_Hold = Forced_tactical_action_limits; Incongruous_Soothing = Parallel_processing_violence_and_tenderness]",
        aesthetic: "聚焦：咬着带血匕首的嘴角却哼着温柔的摇篮曲、用满是硝烟的宽大防弹衣仔细裹好熟睡的小毛头、在一枪爆头敌人后赶紧捂住婴儿耳朵的反差。",
        aestheticEn: "Focus: Humming a gentle lullaby around a bloody dagger in mouth, wide smoke-stained kevlar carefully swaddling sleeping tyke, quickly covering baby's ears right after headshotting an enemy.",
        runtime: "IF (躲在衣柜里，外面的搜捕队距离只有一板之隔，而怀里的婴儿憋红了脸即将啼哭) THEN (提供机制：满手鲜血的主角必须在半秒内选择是冒着窒息风险强行捂住婴儿口鼻，还是直接一脚踹开柜门和一整支军队拼命)。",
        runtimeEn: "IF (Hiding_in_closet_search-party_is_inches_away_and_baby_in_arms_turns_red_about_to_cry) THEN (Provide_Mechanic: Blood-soaked_protagonist_must_decide_in_half-sec_to_risk_suffocating_baby_by_covering_mouth_or_kicking_doors_open_to_fight_entire_army_to_death)."
      }
    },
    {
      id: "the_sunsets_bench_under_fire",
      name: "弹雨中的落日长椅", nameEn: "The Sunset Bench Under Fire",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "一个在战术上极其暴露、毫无防御价值，但却是昔日两人许下“我会在那儿等你”诺言的地理坐标死点。",
      defEn: "A tactically highly exposed, zero-defense geographic dead point, but where the two made the vow 'I will wait for you there'.",
      core: "【表面诱惑】：情感坐标的朝圣地。走到了那里，就走完了这段承诺，是心灵的最终结算区。",
      coreEn: "【Surface Temptation】: Pilgrimage site of emotional coords. Reaching there completes the promise, the final settlement zone for the soul.",
      logic: "【叙事抓手】：这是一个“反战术的自杀式地理目标”。在被全城通缉或炮火覆盖时，为了履约，主角会拒绝所有更为安全的地下掩体，反而执拗地走向那个视野开阔的危险广场/长椅。它将环境物理规则从“求生隐蔽”强行扭曲为“浪漫的飞蛾扑火”。",
      logicEn: "【Narrative Affordance】: An 'anti-tactical suicidal geographic target'. When city-wanted or under artillery cover, to fulfill the vow, the protagonist rejects all safer underground bunkers, stubbornly walking toward the exposed dangerous plaza/bench. Warps env-physics purely from 'survival cover' to 'romantic moth into flame'.",
      patch: {
        mechanics: "表层锚点 + [反战术寻路 = 强行走最暴戾的暴露路线; 定点防御战 = 在毫无掩体的地方坐下死守; 倒计时接头 = 至死不可乱动]",
        mechanicsEn: "Surface_Anchor + [Anti-tactical_Pathing = Forces_most_violent_exposed_route; Fixed_Defense_War = Sitting_down_to_defend_with_no_cover; Countdown_Rendezvous = Cannot_move_until_death]",
        aesthetic: "聚焦：广场周围是被炸出的无数深坑与燃烧废墟、唯独中心那张长椅上坐着身中数弹却微笑看表的主角、漫天飞舞的白鸽与黑烟。",
        aestheticEn: "Focus: Plaza surrounded by countless blasted craters and burning ruins, only the center bench holds the multi-shot protagonist smilingly checking watch, white doves and black smoke flying everywhere.",
        runtime: "IF (距离约定时间还有最后五分钟，但防空警报已经拉响确认了地毯式轰炸即将抵达) THEN (提供机制：同伴惊恐地往地下室逃亡，而主角却平静地拂去长椅上的灰尘结结实实地坐了下来，点燃了一根烟)。",
        runtimeEn: "IF (5_mins_to_rendezvous_but_air_raids_sirens_confirm_carpet-bomb_approaching) THEN (Provide_Mechanic: Companions_flee_in_terror_to_basement_while_protagonist_calmly_brushes_dust_off_the_bench_sits_down_solidly_and_lights_cigarette)."
      }
    },
    {
      id: "the_only_matching_heart_donor",
      name: "唯一匹配的心脏活体", nameEn: "The Only Matching Heart Donor",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "为了拯救病床上濒死的爱人，发现全城唯一符合器官移植匹配指标的活体，正是那个权势滔天或无恶不作的反派目标。",
      defEn: "To save a dying lover on the bed, discovering the only live organ-match in the city is the overwhelmingly powerful or evil villain target.",
      core: "【表面诱惑】：用魔鬼的血肉去滋养天使。这是不讲道理的因果捆绑，必须以一种极端的暴力手段去索取生机。",
      coreEn: "【Surface Temptation】: Nourishing an angel with the devil's flesh. Unreasonable causal binding, demanding life via extreme violent extraction.",
      logic: "【叙事抓手】：创造了极其严苛的“器官保护级物理交战法则”。主角在与这个致命反派搏杀时，不仅不能杀他，连打倒他都必须避开胸膛/特定脏器，甚至不能造成大出血引发器官衰竭。这迫使主角从“终结者”变成了战战兢兢的“护送抓捕者”。",
      logicEn: "【Narrative Affordance】: Creates extremely harsh 'Organ-Preservation Physical Engagement Rules'. While fighting this fatal villain, protagonist cannot kill, cannot strike chest/specific organs, cannot cause severe bleeding inducing organ failure. Forces protagonist from 'Terminator' to trembling 'Escort-Capturer'.",
      patch: {
        mechanics: "表层锚点 + [受击部位特限 = 绝对禁止开枪射击躯干; 活捉判定 = 必须切断其行动力但不伤及本体; 抢救倒数 = 限时运回手术台]",
        mechanicsEn: "Surface_Anchor + [Hitbox_Restriction = Absolute_ban_on_torso_shots; Live-Capture_Check = Must_sever_mobility_without_damaging_core; Rescue_Countdown = Timed_delivery_to_operating_table]",
        aesthetic: "聚焦：刀锋一次次从反派的心脏上方半寸被主人硬生生收住、反派有恃无恐的狂笑与主角憋闷到眼角崩裂出的血丝、冰冷的战地麻醉针管。",
        aestheticEn: "Focus: Blade forcibly halted half-inch above villain's heart repeatedly by owner, villain's emboldened maniac laughter vs protagonist's suppressed bloodshot eyes, cold field anesthetic syringe.",
        runtime: "IF (反派狞笑着拉开外衣显露出一排炸弹，威胁要玉石俱焚自爆心肺) THEN (提供机制：主角为了保护反派的胸腔完整，直接用自己的身躯扑上去将爆炸波全部闷在自己胃里)。",
        runtimeEn: "IF (Villain_grins_opening_coat_revealing_bombs_threatening_to_suicide_heart-lungs) THEN (Provide_Mechanic: Protagonist_to_keep_villain's_chest_intact_dives_using_own_body_muffling_the_blast-wave_entirely_within_own_stomach)."
      }
    },
    {
      id: "the_mutating_kin",
      name: "正在变异的至亲骨肉", nameEn: "The Mutating Kin",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "被感染或遭受神秘诅咒的同伴/亲人，表面上还保留着人类的体征与眼泪，但内部正在不可逆地演化为撕碎全体防线的怪物。",
      defEn: "Infected or cursed kin/ally, seemingly retaining human traits and tears on the outside, but irreversibly evolving inside to tear apart the whole defense line.",
      core: "【表面诱惑】：对抗残酷世界法则的盲目执念。理智告诉大家该早点扣动扳机，但情感让人宁可死在其手下也不愿醒来。",
      coreEn: "【Surface Temptation】: Blind obsession defying cruel world laws. Sanity says pull the trigger early, but emotion makes one rather die by their hands than wake up.",
      logic: "【叙事抓手】：典型的“狼人杀内置炸弹”。病变的肉体在狭小的生存基地（安全屋）内引入了最致命的“物理隔离焦虑”。主角必须在队友的怀疑口诛笔伐下，用尽手段将至亲藏匿并用物理绳索进行捆绑，在“掩盖变异声音/发作”的极微交互中滑向深渊。",
      logicEn: "【Narrative Affordance】: Typical 'Werewolf Internal Bomb'. The mutating flesh introduces deadliest 'physical isolation anxiety' in a tiny safe-house. Protagonist faces team's paranoid witch-hunt, using all means to hide and physically leash the kin, sliding into abyss amidst micro-interactions of 'covering up mutation sounds/spasms'.",
      patch: {
        mechanics: "表层锚点 + [隐匿隔离圈 = 卧室与外界客厅的冰火两重天; 发作期镇压 = 必须依靠自己物理压制其非人巨力; 群体决裂点 = 变异体破防瞬间]",
        mechanicsEn: "Surface_Anchor + [Hidden_Isolation_Ring = Bed-room_vs_Living-room_two_worlds; Spasm_Suppression = Must_use_own_physics_to_pin_its_inhuman_strength; Group_Fracture_Point = Instant_mutation_breach]",
        aesthetic: "聚焦：在深夜被铁链摩擦声惊醒死死抱住狂暴化女儿的主角、隔着薄木门传来队友“里面那是什么声音”的质问、以及黑暗中变异物那双偶尔清醒流泪的眼眸。",
        aestheticEn: "Focus: Waking to chain frictions at dead night tightly bear-hugging frenzied daughter, teammates' voices thru thin wooden door asking 'what's that noise', and the mutant's eyes occasionally tearing up in lucidity in the dark.",
        runtime: "IF (暴退的变异期到来，哪怕碗口粗的铁链也即将崩断) THEN (提供机制：主角反锁了房门，丢掉了所有武器，只是跪在地上抱住对方，任由变异出的利爪刺穿自己的肾脏来安抚对方对血的渴望)。",
        runtimeEn: "IF (Violent_mutation_phase_arrives_snapping_thick_steel_chains) THEN (Provide_Mechanic: Protagonist_deadbolts_the_door_drops_all_weapons_just_kneeling_hugging_them_letting_mutant_claws_pierce_own_kidneys_to_soothe_their_thirst_for_blood)."
      }
    },
    {
      id: "the_blissfully_unaware_family",
      name: "一无所知的安逸家人", nameEn: "The Blissfully Unaware Family",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "正在充满阳光的起居室或草坪上享受平静岁月的家人。他们对主角在黑暗世界的滔天罪恶以及门外即将降临的地狱杀机毫不知情。",
      defEn: "Family enjoying peaceful years in a sunny living room or lawn, utterly unaware of protagonist's massive sins in the dark world and the hellish assassins about to arrive outside.",
      core: "【表面诱惑】：守护普通生活的终极幻象。这种安逸是一层脆弱的玻璃，打破它就会看到深不可测的血腥。",
      coreEn: "【Surface Temptation】: Ultimate illusion of guarding a normal life. This ease is fragile glass; breaking it reveals unfathomable blood.",
      logic: "【叙事抓手】：这是一种“带静音设定的空间折叠屏障”。物理逻辑要求主角在距离家人不足十米的外墙、院子或地下室里，解决掉最凶残的连环杀局，且**绝对不能发出任何声响、不能打破一扇玻璃、不能留下一点血迹**。极致的暴力被塞进一个不能出声的消音罐里。",
      logicEn: "【Narrative Affordance】: A 'spatial folding barrier with mute settings'. Physical logic demands protagonist resolve the most brutal serial kills in the outer wall, yard, or basement less than 10 meters from family, and **absolutely cannot make a sound, break a glass, or leave a drop of blood**. Extreme violence stuffed into a silent muted jar.",
      patch: {
        mechanics: "表层锚点 + [静音击杀要求 = 绝对不能开枪只能用绞索/利刃; 尸体隐藏压力 = 边杀边拖地处理血迹; 空间反差 = 屏风内外两个世界]",
        mechanicsEn: "Surface_Anchor + [Silent_Kill_Req = No_guns_only_garrote/blades; Body_Hide_Pressure = Killing_while_mopping_blood; Spatial_Contrast = Two_worlds_inside/outside_screen]",
        aesthetic: "聚焦：透过落地窗看到的妻子正在煎蛋的温馨背影、贴在窗外墙壁上死死勒断一名雇佣兵脖子喷出的消音鲜血、手忙脚乱用昂贵西装擦拭地垫红斑的狼狈。",
        aestheticEn: "Focus: Warm view thru French windows of wife frying eggs, outside wall choking a merc's neck spewing silent blood, frantic mess of wiping blood off doormat with expensive suit.",
        runtime: "IF (刚刚把三具血肉模糊的杀手尸体塞进门口的垃圾箱盖好) THEN (提供机制：防盗门被从里面推开，小女儿蹦跳着出来要求抱抱，主角只能强忍着骨折的剧痛和满手血腥气换上最阳光的笑脸将她举高高)。",
        runtimeEn: "IF (Just_stuffed_three_mangled_assassin_corpses_into_doorway_dumpster_closing_lid) THEN (Provide_Mechanic: Security_door_pushed_open_from_inside_little_daughter_skips_out_asking_for_hug_protagonist_suppresses_bone-fracture_pain_and_blood_stench_forcing_sunniest_smile_lifting_her_high)."
      }
    },
    {
      id: "the_shared_lethal_poison",
      name: "同生共死的情人蛊毒", nameEn: "The Shared Lethal Poison",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "一种物理性锁死的生物链接机能（如合欢蛊、量子纠缠起爆心脏器），绑定两人，一方心跳停止，另一方当场溃灭。",
      defEn: "A physically locked bio-link mechanism (e.g., Lover's parasite, Quantum-entangled detonator heart) binding two; if one's heart stops, the other implodes instantly.",
      core: "【表面诱惑】：用生命的锁链强行定义“永远在一起”。哪怕彼此有血海深仇，也必须互为对方的神明护卫。",
      coreEn: "【Surface Temptation】: Forcibly defining 'together forever' using life chains. Even with a blood feud, they must act as each other's divine guard.",
      logic: "【叙事抓手】：强制构建了“相爱相杀的命运共同体”。它的物理抓手非常霸道：主角可能面临自己最恨的宿敌（或背叛的前任），本可一刀两断，但现在只要对方在场上受一丝重创，自己都要呕血三升。这迫使两人在极其厌恶的心态下，背靠背完成完美的物理协同防御。",
      logicEn: "【Narrative Affordance】: Forcibly constructs a 'love-hate shared-fate entity'. Its physical grip is tyrannical: Protagonist faces most hated nemesis (or betrayed ex), could sever ties, but now any heavy hit on them causes protagonist to vomit blood. Forces perfect, back-to-back physical co-op defense under extreme mutual disgust.",
      patch: {
        mechanics: "表层锚点 + [伤害共享链接 = 血量条同步锁定; 物理距离限制 = 超过范围则发作; 仇恨向护卫 = 一边破口大骂一边为其挡枪]",
        mechanicsEn: "Surface_Anchor + [Damage_Shared_Link = HP_bars_sync-locked; Physical_Dist_Limit = Triggers_spasm_if_too_far; Hate-Guard = Cursing_insults_while_body-blocking_bullets_for_them]",
        aesthetic: "聚焦：两人之间隐隐作痛且发着微红光的经络/数据线、哪怕眼神想把对方千刀万剐手上的盾牌却诚实地举过对方头顶的极度憋屈。",
        aestheticEn: "Focus: Faintly throbbing reddish meridians/data-cables between them, eyes wanting to slice each other a thousand times but hands honestly raising shield over the other's head in extreme frustration.",
        runtime: "IF (对方被乱枪扫中大腿跪倒在地即将被补刀) THEN (提供机制：主角远在二十米外大腿也毫无征兆地爆开血花双膝跪地，只能绝望地用自己身体当人肉沙包翻滚过去掩护对方)。",
        runtimeEn: "IF (The_other_kneels_thigh_swept_by_bullets_about_to_be_finished_off) THEN (Provide_Mechanic: Protagonist_20_meters_away_has_thigh_burst_in_blood_dropping_to_knees_too_desperately_rolling_over_using_own_body_as_meat-sandbag_to_cover_them)."
      }
    },
    {
      id: "the_memory_triggering_music_box",
      name: "触发失忆的旧日八音盒", nameEn: "The Memory-Triggering Music Box",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "一个能够发出极度特定频率或旋律的物理机括，这首曲子直通某个处于疯狂状态的杀戮神明/变异同伴的大脑绝对深处。",
      defEn: "A physical gadget emitting highly specific freq/melody piercing straight into the absolute depths of a crazed slaughter-god/mutated companion's brain.",
      core: "【表面诱惑】：用一点柔软的旋律，去融化这个世界上最坚硬不可破除的杀戮外盾，实现灵魂的降维打击。",
      coreEn: "【Surface Temptation】: Using a soft melody to melt the world's absolute hardest killing shield, executing a dimensional strike on the soul.",
      logic: "【叙事抓手】：这就类似是一个“固定范围的声波结界控制开关”。在物理战斗中，这个八音盒因为要发声，不能放在隔音的口袋里，必须暴露在外且持续手摇/发条运作。这就要求主角在躲避对方毁天灭地的攻击时，必须分心维持一个极度恒定、温柔的手部物理匀速动作，形成“暴风眼中的静止核”。",
      logicEn: "【Narrative Affordance】: Like a 'fixed-range sonic barrier control switch'. In phys-combat, the music box needs to be heard, can't be in soundproof pockets, must be exposed and continuously hand-cranked/wound. Requires protagonist dodging apocalyptic attacks to distractedly maintain an extremely constant, gentle hand-winding motion, forming a 'still core in the storm's eye'.",
      patch: {
        mechanics: "表层锚点 + [声源发条动作 = 必须匀速不可中断; 听觉制空权 = 与战场的巨大轰鸣声抢夺音轨; 硬直触发器 = 旋律响起换来对方的破防僵直]",
        mechanicsEn: "Surface_Anchor + [Sonic_Winding_Act = Must_be_steady_uninterrupted; Audio_Air_Supremacy = Fighting_battlefield_explosions_for_audio_track; Stun_Trigger = Melody_causes_enemy_armor-break_stun]",
        aesthetic: "聚焦：在能把头骨震碎的音波狂潮中极其微弱但清脆的滴答钢音、主角一边咳血一边稳若泰山转动摇杆的手指、杀人兵器听到旋律后抱住脑袋崩溃嚎叫的定格。",
        aestheticEn: "Focus: Faint yet crisp metallic ticking in bone-shattering sonic waves, protagonist coughing blood yet winding handle steady as a mountain, killing machine grasping head screeching in breakdown upon hearing melody.",
        runtime: "IF (发条因为激烈打斗掉转磕飞，变异体瞬间恢复杀意掐住主角脖子举向半空) THEN (提供机制：主角由于窒息全眼充血，反而放弃了挣扎，艰难地用脚尖勾到地上八音盒的拨片，让那首《梦幻曲》的终章响遏行云)。",
        runtimeEn: "IF (Winding_mechanism_knocked_away_in_brawl_mutant_instantly_recovers_murder-intent_choking_protagonist_high_in_air) THEN (Provide_Mechanic: Protagonist_eyes_bloodshot_from_asphyxiation_abandons_struggle_difficulty_using_tiptoe_to_flick_the_box's_gear_on_floor_letting_finale_of_'Traumerei'_pierce_the_clouds)."
      }
    },
    {
      id: "the_trolley_problem_hostage_exchange",
      name: "两座断桥上的电车难题", nameEn: "The Trolley-Problem Hostage Exchange",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "反派刻意将主角生命中最重要的两个人物（如现任与前妻、生父与养父）放置在距离极远、且物理崩塌倒计时绝对同步的两个危局锚点上。",
      defEn: "Villains deliberately place the two most important people in protagonist's life (ex vs current, bio vs adoptive father) on far-apart, perfectly synchronized collapsing anchor-points.",
      core: "【表面诱惑】：没有双全法，只有剥皮剔骨的选择。强行让情感的重量在这个秤盘上得出残忍具体的数学克数。",
      coreEn: "【Surface Temptation】: No perfect solution, only skin-peeling choice. Forcibly yielding the cruel exact mathematical weight of emotional burdens on a scale.",
      logic: "【叙事抓手】：绝对无解的“空间互斥物理学”。游戏规则设定了主角的最大移速与两点间的最短几何直线，无论如何计算，在这个受限位面内只能抵达其中一个点并抓住一只手，而另一只手必然坠入火海。这是用最高压的物理距离强行压迫出的精神凌迟。",
      logicEn: "【Narrative Affordance】: Absolute unsolvable 'spatial mutually exclusive physics'. Game rules fix protagonist's max speed and geometric shortest path; math dictates only one point can be reached to grab one hand, the other inevitably falls into fire. High-pressure physical distance forcibly extruding mental lingering-execution.",
      patch: {
        mechanics: "表层锚点 + [物理路径锁死 = 绝无分身可能的Y字型岔路; 倒计时绝对同步 = 毫秒不差的重力坍塌; 放弃宣判 = 跑向一边的同时等于按下另一边的处刑键]",
        mechanicsEn: "Surface_Anchor + [Path_Locked = Zero-clone_possibility_Y-fork; Countdown_Sync = Millisecond-exact_gravity_collapse; Abandonment_Verdict = Running_to_one_side_equals_pressing_execute_on_the_other]",
        aesthetic: "聚焦：在爆炸火光中逐渐断裂的左边钢索与右边绳结、主角在岔路口双膝跪地呕出鲜血的极限崩溃、坠落那一方临死前释然或绝望的眼神。",
        aestheticEn: "Focus: Left steel cable and right rope knot gradually snapping in blast light, extreme breakdown of protagonist dropping to knees coughing blood at fork, the falling one's relieved/despairing final look.",
        runtime: "IF (主角拼尽一切体能在最后一刻抓住了左边现任的手) THEN (提供机制：不仅要承受救下一人的重量，还要亲眼在这个距离看着右边百米外的前妻带着微笑的倒影跌入融化的铁水之中，视角强行拉远定格那抹火光)。",
        runtimeEn: "IF (Protagonist_burns_all_stamina_grabbing_current_partner's_hand_on_left_at_last_sec) THEN (Provide_Mechanic: Must_bear_the_rescued_weight_while_forced_to_watch_ex-wife_100m_away_to_the_right_fall_into_molten_iron_with_a_smile_camera_zooming_out_on_the_flame)."
      }
    },
    {
      id: "the_perfect_phantom_of_the_deceased",
      name: "完美复刻的亡妻幻象", nameEn: "The Perfect Phantom of the Deceased",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "基于逝去挚爱生前所有记忆、性格和生物数据，由反派系统（魔法缸中之脑、全息AI拟态）捏造出的连本人都区分不出真假的终极拟态。",
      defEn: "Based on all memories, traits, and bio-data of deceased loved one, fabricated by villain system (magic brain-in-vat, holo-AI) into an ultimate mimicry even they can't distinguish.",
      core: "【表面诱惑】：弥补时间无法倒流的创伤。只要你愿意沉沦在这个谎言里，那个你日思夜想的人就永远在灯火阑珊处等你。",
      coreEn: "【Surface Temptation】: Mending scars unhealable by reversing time. As long as you sink into the lie, the one you yearn for night and day awaits under the dim lights forever.",
      logic: "【叙事抓手】：这是一个“主动防御型精神护盾”。幻象没有物理攻击力，但反派将基地自毁的主机/核心就藏在“她的心脏里”。打破幻境的唯一物理方式，就是主角必须亲手举起枪，将子弹再一次无情地嵌入那张自己曾吻过一万次的脸庞里，完成“再次杀死爱人”的创伤重演。",
      logicEn: "【Narrative Affordance】: An 'active-defense mental shield'. Phantom lacks phys-attack, but the base-destruct core is hidden in 'her heart'. The only physical way to break the illusion is protagonist raising gun, ruthlessly putting a bullet again into the face kissed 10000 times, completing trauma-replay of 'killing the lover again'.",
      patch: {
        mechanics: "表层锚点 + [视听拟态 = 100%完美迷惑性; 核心物理绑定 = 必须破坏幻象才能过关; 开火心理阈值 = 指尖重达千钧无法扣下扳机]",
        mechanicsEn: "Surface_Anchor + [Audio-Visual_Mimic = 100%_Perfect_Deception; Core_Physical_Bind = Must_destroy_phantom_to_clear; Firing_Psy-Threshold = Trigger_finger_weighs_a_ton_unable_to_pull]",
        aesthetic: "聚焦：在冰冷的机房里穿着熟悉睡衣偏头轻笑的全息投影、主角枪管抵在对方额头上引发的剧烈情绪痉挛、打破幻影后碎裂一地冰冷二进制代码或者玻璃渣。",
        aestheticEn: "Focus: Holo-projection in familiar pyjamas tilting head smiling in cold server room, severe emotional spasms of protagonist pressing gun to her forehead, fake shattering into cold binary/glass shards.",
        runtime: "IF (幻象张开双臂哽咽着说出只有两人在蜜月期才懂的私密暗语时) THEN (提供机制：主角的心防彻底崩溃，手指松开了扳机，而幻象背后潜伏的机械刺客的钢针已经抵达了主角脑后半寸)。",
        runtimeEn: "IF (Phantom_opens_arms_choking_out_the_intimate_safeword_only_known_from_honeymoon) THEN (Provide_Mechanic: Protagonist's_mental_wall_collapses_finger_leaving_trigger_while_the_mech-assassin_hidden_behind_the_phantom_has_its_steel_needle_a_half-inch_from_protagonist's_skull)."
      }
    },
    {
      id: "the_time_delayed_last_words",
      name: "跨越时空的绝笔信", nameEn: "The Time-Delayed Last Words",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "由已故之人拼死设置、经历漫长的光年延迟或极其复杂的破译算法后，直到现在才正以极其缓慢的物理速度进行解压播放的一段残存遗言。",
      defEn: "Dying words set up desperately by the deceased, surviving long lightyear-delays or complex algorithms, only now decrypting and playing at excruciatingly slow physical speeds.",
      core: "【表面诱惑】：迟到了一生的告别。它证明了在这寂灭冷酷的宇宙中，曾经有一束光专门为你亮起并飞跃至今。",
      coreEn: "【Surface Temptation】: A lifetime-late farewell. Proves that in this cold dead universe, a ray of light once shone just for you and flew until today.",
      logic: "【叙事抓手】：它的物理核爆点在于“解压播放的极端冗长滞后战”。音频或全息波纹需要两分钟才能播完最后一句“我也爱……”。而就在这读条的两分钟里，防线正在受到狂轰滥炸，能量盾迅速见底。主角必须死死护住这个脆弱的播放台，用生命去换取听完最后一个音节的可能。",
      logicEn: "【Narrative Affordance】: Its physical nuke lies in 'extreme delayed-long playback load-war'. Audio/holo-wave needs 2 mins to finish the last 'I also love...'. During this 2-min load, the defense line is carpet-bombed, shields zeroing. Protagonist must defend the fragile playback terminal, trading life to hear the final syllable.",
      patch: {
        mechanics: "表层锚点 + [读条机制 = 缓慢且极易被打断的播放进度; 音频脆弱性 = 机器断电即永远听不到结局; 绝境防守 = 为了听一句话而搭上所有防具的疯狂]",
        mechanicsEn: "Surface_Anchor + [Loading_Bar_Mech = Slow_easily_interrupted_playback; Audio_Fragility = Power-loss_means_ending_lost_forever; Desperate_Defense = Insanity_of_trading_all_armor_to_hear_one_sentence]",
        aesthetic: "聚焦：伴随着滋滋电流声断断续续拼凑出的熟悉声线、满屋横飞的跳弹与被炸穿的墙体、主角趴在破旧收音机上流着血屏住呼吸侧耳倾听的极度专注。",
        aestheticEn: "Focus: Familiar voice pieced together intermittently amidst static sizzle, ricochets flying across room and walls blown thru, protagonist bleeding over torn radio holding breath to listen with extreme focus.",
        runtime: "IF (播放条走到95%，那句最重要的遗言即将吐露的瞬间) THEN (提供机制：高爆炸弹直接震毁了蓄电池，主角疯了一样抽出自己机甲核心的高压导线直接插入音响，用自己身体导电去补完那最后5%的播放)。",
        runtimeEn: "IF (Playback_at_95%_the_crucial_last_word_about_to_be_spoken) THEN (Provide_Mechanic: HE_bomb_shatters_battery_protagonist_goes_mad_ripping_mech-core's_high-voltage_wires_jabbing_them_into_speaker_using_own_body_as_conductor_to_complete_last_5%)."
      }
    },
    {
      id: "the_sworn_enemys_head",
      name: "不共戴天的仇人首级", nameEn: "The Sworn Enemy's Head",
      group: "3. 亲密关系与情感倒影", groupEn: "3. Love & Bonds",
      def: "当年导致全家灭门或爱人惨死的真正罪魁祸首的物理头颅（或具体存在的肉身），其位置刚刚明确暴露在极度纵深的铁壁掩体中。",
      defEn: "The physical head (or living flesh) of the true culprit who slaughtered the family or lover, location just clearly exposed deep behind iron-wall bunkers.",
      core: "【表面诱惑】：用因果律的血液去填补内心的深渊。手刃此人，是主角长达十年苟活的唯一驱动程序的最终清算。",
      coreEn: "【Surface Temptation】: Filling inner abyss with causal blood. Slaying them is the final clearance of the sole driver keeping protagonist alive for 10 years.",
      logic: "【叙事抓手】：这就是一个“让战术理智清零的超级嘲讽引爆器”。当这颗首级出现在瞄准镜里，一切关于“保留体能”、“呼叫支援”、“最优路线撤退”的战术逻辑全被强行废除。主角会瞬间狂暴化，如同扑火的飞蛾，在无生还可能的绝境中拔刀发起直线的自杀式万岁冲锋。",
      logicEn: "【Narrative Affordance】: A 'super-taunt detonator zeroing tactical sanity'. When this head hits the scope, all tactical logic of 'save stamina', 'call backup', 'optimal retreat' is forcibly voided. Protagonist instantly enters frenzy like a moth to flame, drawing blade for a straight-line suicidal banzai charge in zero-survival odds.",
      patch: {
        mechanics: "表层锚点 + [超常规仇恨诱导 = 破坏隐蔽阵型强行开怪; 直线冲锋强制 = 绕过所有理智掩体的肉身硬推; 唯心狂暴 = 血量越低突进速度越快的疯狂斩击]",
        mechanicsEn: "Surface_Anchor + [Irregular_Aggro_Induction = Breaks_stealth_forcing_engage; Straight-line_Charge = Body-pushing_bypassing_sanity_covers; Idealistic_Frenzy = Lower_HP_faster_dash_insane_slashes]",
        aesthetic: "聚焦：仇人隔着防弹玻璃那有恃无恐甚至嘲弄的弧度嘴角、主角丢掉空枪拔出折断一半的军刺歇斯底里狂吼着扑向重机枪网的特写。",
        aestheticEn: "Focus: Enemy's emboldened mocking smirk behind bulletproof glass, protagonist dropping empty gun drawing half-broken bayonet roaring hysterically diving into heavy MG net.",
        runtime: "IF (队友拼命在耳麦里大吼立刻撤离这明显是请君入瓮的陷阱) THEN (提供机制：主角充耳不闻，徒手掰开眼前滚烫的电网通道，任由高压电烧焦皮肤，眼睛只死死盯着视线尽头那个转身欲走的身影)。",
        runtimeEn: "IF (Teammate_screams_to_evacuate_obvious_trap) THEN (Provide_Mechanic: Protagonist_deaf_to_all_barehand_pries_open_red-hot_electric_fence_letting_voltage_burn_skin_eyes_locked_solely_on_the_figure_turning_to_leave_at_the_end_of_hallway)."
      }
    }
  ]
};
