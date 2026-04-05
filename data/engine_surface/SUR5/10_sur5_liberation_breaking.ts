import { LibraryCategoryDef } from '../../../types';

export const SUR5_LIBERATION_BREAKING: LibraryCategoryDef = {
  id: "sur5_liberation_breaking",
  name: "10. 枷锁的斩断 (Liberation & Breaking Chains)",
  nameEn: "10. Liberation & Breaking Chains",
  desc: "为了重获自由、摆脱控制、还清债务而爆发的决绝物理行动。它们往往包含着极端的自我损伤或与旧世界秩序最残酷的割裂方式（如：暴力拆除要命的项圈、摧毁主仆血契、用生命为献祭启动大门总控）。",
  descEn: "Resolute physical actions to regain freedom, escape control, and pay off debts. These involve extreme self-harm or cruel severing from old world orders (e.g., violently defusing lethal collars, destroying blood pacts, sacrificing life to trigger the master switch).",
  items: [
    {
      id: "the_last_bag_of_debt_tribute",
      name: "清算的最后一袋血污筹码", nameEn: "Last Bag of Debt Tribute",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "一个粗糙沉重、装满带有辐射斑硬币/受诅咒金石的容器。这是偿还黑市放贷人/高位领主的最后一笔物理欠款。",
      defEn: "A rough, heavy container filled with irradiated coins or cursed stones. The final physical payment for a black-market loan shark / high lord.",
      core: "【表面诱惑】：只要砸在桌上，就能彻底摆脱长达十年的被奴役压榨，换来干干净净的自由之身。",
      coreEn: "【Surface Temptation】: Smash this on the desk to completely escape a decade of enslaved extortion and buy clean freedom.",
      logic: "【叙事抓手】：在前往终末房间的走廊，主角身受重创大出血。按常理应拿它去买救命血清，但为了“绝对的清算仪式”，主角宁可像个活鬼般捂着伤口死死抱着袋子。若今天不全额结清，明日就将再起利息，奴役永无止境。",
      logicEn: "【Narrative Affordance】: In the final corridor, protagonist takes massive bleeding wounds. Logically, they should buy life-saving serum, but for the 'absolute clearing ritual', they trudge like a bleeding ghost clutching the bag. If not paid in full today, interest accrues tomorrow, and slavery never ends.",
      patch: {
        mechanics: "表层锚点 + [财产固化 = 不可挪用的买命钱; 生存悖论 = 抱着钱流血致死; 仪式感 = 结算等于向死而生的终焉]",
        mechanicsEn: "Surface_Anchor + [Frozen_Capital = Untouchable_blood_money; Survival_Paradox = Bleeding_to_death_holding_wealth; Ritual = Settlement_equals_death-bound_finale]",
        aesthetic: "聚焦：拖着长血迹步入奢华大厅，将沉重筹码狠狠砸在桌上，钱砾与鲜血齐齐溢出染红借条。",
        aestheticEn: "Focus: Dragging a bloody trail into the lavish hall, slamming the heavy tribute onto the desk, coins and blood spelling out the end on the debt slip.",
        runtime: "IF (结算路上遭遇大出血，血量暴跌) THEN (提供机制：路边出现高价救命商人，玩家必须连续五次在QTE中主动拒绝使用任务代币，看着屏幕狂闪红色以保住全额欠款)。",
        runtimeEn: "IF (Massive_hemorrhage_on_way_to_settlement) THEN (Provide_Mechanic: High-price_healer_appears._Player_must_refuse_to_spend_quest_tokens_5_times_via_QTE_watching_screen_flash_red_to_keep_the_full_debt_amount)."
      }
    },
    {
      id: "the_defused_lethal_collar",
      name: "刚拆除的致死控制项圈", nameEn: "Defused Lethal Collar",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "布满倒刺的高爆惩戒项圈/寄生毒咒法环，指示灯或秘法光辉刚刚从致命红色切断变暗。",
      defEn: "A barbed high-explosive punisher collar or parasitic curse ring; its signal light / arcane glow having just faded from lethal red.",
      core: "【表面诱惑】：物理意义上绝对控制的解除，标识着终于走出被奴役边界的物理证明。",
      coreEn: "【Surface Temptation】: Physical lifting of absolute control, proving they have finally stepped outside the enslaved boundary.",
      logic: "【叙事抓手】：拆除瞬间内部卡锁会导致颈部大面积撕裂伤。且因毒素/魔力戒断反应，拆除后瞬间主角陷入极度虚弱失焦。就在此时迎面遇上追兵，必须在浑身发抖、神经剧痛状态下拔枪/挥剑，打响自由第一战。",
      logicEn: "【Narrative Affordance】: Defusing causes massive neck lacerations from inner locks. Plus toxin/magic withdrawal plunges protagonist into extreme weakness & blurred vision. Instantly meeting pursuers, they must draw weapon shaking and in agonizing pain to fight the first battle of freedom.",
      patch: {
        mechanics: "表层锚点 + [解放代价 = 颈部分解重创; 戒断反弹 = 禁闭解除后的肉体折磨; 战斗压迫 = 自由首战即是极弱态]",
        mechanicsEn: "Surface_Anchor + [Liberation_Cost = Neck_laceration; Withdrawal = Physical_torture_post-release; Combat_Oppression = Freedom's_first_fight_in_weak_state]",
        aesthetic: "聚焦：鲜血淋漓砸下沉重项圈，脖子留着深槽，绝望呕吐后颤抖举起兵刃怒视如潮水涌来的捕奴队。",
        aestheticEn: "Focus: Bloody hands smashing the collar down, deep grooves in neck, violently vomiting before shakily raising weapons bounding at slaver swarms.",
        runtime: "IF (输入数十次密码/法印终于拆除) THEN (提供机制：屏幕模糊三秒，无欢呼反馈，强制扣生命上限30%并在接下来战斗中附加‘瞄准极度偏移/手臂抽搐’DEBUFF)。",
        runtimeEn: "IF (Entering_passwords/sigils_to_defuse) THEN (Provide_Mechanic: Screen_blurs_3s_no_cheers_force_max_HP_down_30%_and_apply_Extreme_Aim_Sway/Arm_Twitch_debuff_for_next_fight)."
      }
    },
    {
      id: "the_burned_indenture_pact",
      name: "正在焚毁的灵魂卖身契约", nameEn: "Burning Indenture Pact",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "记录出让灵魂、器官与基因所有权的烫金羊皮纸/量子全息版，底部已被火焰或灵能点燃。",
      defEn: "Gold-stamped parchment or quantum holo-pad documenting surrender of soul, organs, and genes; bottom edge burning via fire or psionics.",
      core: "【表面诱惑】：销毁档案意味着从统治者名单划掉，彻底查无此人，夺回自我生命所有权。",
      coreEn: "【Surface Temptation】: Destroying to be crossed off the ruler's list, completely 'untraceable', reclaiming ownership of life.",
      logic: "【叙事抓手】：契约受绝对磁场或契约魔法保护，必须用主角自身的心搏起搏器/生命本源去强行短路。销毁过程等于用命引火，心搏停滞时间与焚毁进度持平。“用命换脱籍”的极限拉扯。",
      logicEn: "【Narrative Affordance】: Guarded by absolute magnetic field or contract magic. Must use protagonist's pacemaker/life essence to short-circuit it. Destroying process is life-bleeding: cardiac arrest duration equals burning progress. Extreme tug-of-war of 'death to buy emancipation'.",
      patch: {
        mechanics: "表层锚点 + [销毁条件 = 自杀式引燃; 时间博弈 = 前功尽弃还是燃尽暴毙; 绝对除名 = 系统的暴力根除]",
        mechanicsEn: "Surface_Anchor + [Destruction_Cond = Suicidal_ignition; Time_Gamble = Stop_halfway_or_die_burning; Absolute_Erasure = Violent_uproot_from_system]",
        aesthetic: "聚焦：胸口接驳着供电缆/血咒藤蔓，主角口吐白沫疯狂抽搐，手中死死捏着一点点燃尽的契约纸。",
        aestheticEn: "Focus: Chest wired with power cables/blood-vines, protagonist foaming and convulsing, tightly grasping the agonizingly slow burning paper.",
        runtime: "IF (选择强行销毁卖身契) THEN (提供机制：按住按键引燃触发超长距离心跳停止读条。松手则残留被追杀，撑到底则必定空血暴毙，需要队友完美复活或第二条命道具机制介入)。",
        runtimeEn: "IF (Choose_to_force_destroy_pact) THEN (Provide_Mechanic: Hold_key_to_burn_triggers_long_cardiac_arrest_bar._Releasing_early_leaves_it_active._Holding_fully_guarantees_0_HP_death_requiring_perfect_resurrection_timing)."
      }
    },
    {
      id: "the_severed_tracking_limb",
      name: "被当场砍断的追踪义肢/咒臂", nameEn: "Severed Tracking Limb",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "满是战斗伤痕的高级机械臂/神化右臂，肩关节呈现暴力撕裂的血腥断面。",
      defEn: "High-end combat mech-arm or demigod limb covered in scars, showcasing a violently torn bloody cross-section at the shoulder.",
      core: "【表面诱惑】：内嵌无法剥离的最高级定位仪，砍下它是切断无限追兵的唯一方式。",
      coreEn: "【Surface Temptation】: Embedded with unremovable absolute tracker; chopping it is the only way to sever infinite pursuers.",
      logic: "【叙事抓手】：在绝境包围下，无退路无麻药。要在网口合拢的前两分钟完成彻底“隐身”，主角必须亲手用钝刃/生锈钢锯，绝望而疯狂地锯断直连神经主干的顶级主战肢体。最血淋淋的物理阉割代价。",
      logicEn: "【Narrative Affordance】: Trapped in hopeless encirclement, no retreat, no anesthetics. To 'go dark' just before the net closes, protagonist must use a blunt/rusty saw to desperately hack off the top-tier main battle limb directly wired to the nerve trunk. The bloodiest physical castration.",
      patch: {
        mechanics: "表层锚点 + [信号切断 = 神经硬件的强除; 核心报废 = 主武器永远丢失; 极痛抉择 = 无麻醉强行自残]",
        mechanicsEn: "Surface_Anchor + [Signal_Cut = Hard_removal_of_neural_hardware; Core_Scrapped = Main_weapon_permanently_lost; Agonizing_Choice = Unanesthetized_forced_mutilation]",
        aesthetic: "聚焦：暴雨冲刷的绝壁，主角咬断绷带，用颤抖的纯肉体单手握短刀死抠肩部神经丛，鲜血与机油/魔血泼洒而出。",
        aestheticEn: "Focus: Rain-swept cliff, protagonist bites through bandages, using trembling pure-flesh hand and short knife digging into shoulder nerves, splashing blood and oil/magic-icore.",
        runtime: "IF (雷达锁定光环缩至极微缩距离) THEN (提供机制：剥夺移动权限，开放狂按按键指令强制自裁，每按一下屏幕漫出血丝并伴随惨烈哀嚎，进度条满后永远丧失该部位UI及装备栏)。",
        runtimeEn: "IF (Radar_lock-on_halo_narrows_to_micro_distance) THEN (Provide_Mechanic: Revoke_movement_require_mashing_buttons_to_self-amputate._Each_press_bleeds_screen_with_howls_filling_bar_permanently_removes_limb_UI_and_equip_slot)."
      }
    },
    {
      id: "the_blood_stained_severance_pact",
      name: "浸满鲜血的解约文书", nameEn: "Blood-Stained Severance Pact",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "由血手印滑出一道刺目血痕的法定终止关系文书（离婚/脱离宗族/终止依附协议）。",
      defEn: "A legal termination document (divorce / clan disownment / dependency closure) featuring a sliding, blindingly red bloody handprint.",
      core: "【表面诱惑】：法理与情感的绝对分割线，彻底向那极度扭曲疯狂的掌控权宣誓独立。",
      coreEn: "【Surface Temptation】: Absolute legal and emotional divide; completely declaring independence from agonizingly twisted control.",
      logic: "【叙事抓手】：掌控者极高傲地将协议扔进火线与尸骨中央。若想自由，必须在绝境弹雨/暴术下爬过去。即使双臂已断，也只能用肺部咳出的鲜血作印泥，用下巴撑地将血迹死死摁压在签字栏上以完成誓约的亵渎性终结。",
      logicEn: "【Narrative Affordance】: Controller arrogantly tosses paper into the crossfire among corpses. To be free, crawl through hellish barrage. With broken arms, use blood coughed from pierced lung as ink, chin propped on ground to brutally stamp the signature line—a blasphemous ending to the oath.",
      patch: {
        mechanics: "表层锚点 + [断绝关系 = 毒性契约的流血抽身; 执行绝境 = 无力握笔的身体极点; 疯狂背书 = 命作印泥]",
        mechanicsEn: "Surface_Anchor + [Sever_Ties = Bleeding_out_from_toxic_pact; Execution_Dead-end = Body_failing_unable_to_hold_pen; Mad_Endorsement = Life_as_ink]",
        aesthetic: "聚焦：暴君在王座狂笑，濒死的蛆虫般在地板上蠕动的主角，最终用砸烂的血额头将纸张重压在焦土上。",
        aestheticEn: "Focus: Tyrant laughing on throne, protagonist writhing like a dying maggot on the floor, finally using smashed bloody forehead to forcefully press the paper into the scorched earth.",
        runtime: "IF (BOSS抛出赦宥令企图再度奴役) THEN (提供机制：放弃攻击开启挨打爬行阶段。唯有在血量归零前爬过炼狱点按执行血印，才能瞬间诱发破局的神罚杀伤)。",
        runtimeEn: "IF (Boss_tosses_pardon_attempting_resubjugation) THEN (Provide_Mechanic: Abandon_attack_enter_crawling-taking-hits_phase._Only_by_reaching_the_paper_before_death_and_executing_blood-stamp_will_it_trigger_the_divine_retribution_that_breaks_the_stalemate)."
      }
    },
    {
      id: "the_shattered_mind_control_core",
      name: "捏碎的支配脑核/蛊虫", nameEn: "Shattered Mind-Control Core",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "深植小脑延髓处的微型半透明控制体（生物芯片或异虫控制核），被血腥的外力一分两半。",
      defEn: "Micro semi-transparent control unit (bio-chip or parasitic worm nucleus) originally deep in the medulla, snapped in two by bloody external force.",
      core: "【表面诱惑】：切断日夜回荡于脑海的“绝对指令”，抢回这具肉体的驾驶权。",
      coreEn: "【Surface Temptation】: Cut off the 'Absolute Directives' echoing day and night, reclaiming piloting rights to this flesh.",
      logic: "【叙事抓手】：深处敌营无法实行微创手术。当统御广播下达“屠城/自尽”铁律，主角必须保持绝对清醒，凭战友用尖矛钝钳硬剖后颈，从自己的神经干上拔出核心。脑脊液的狂喷与半瘫痪痉挛换来了感官最惨烈的痛觉复苏。",
      logicEn: "【Narrative Affordance】: Deep in enemy camp, no microsurgery. When Dominion Broadcast issues 'slaughter/suicide' law, fully conscious protagonist lets comrade rip open nape with blunt pliers to extract it from the nerve trunk. Cerebrospinal bleeding and hemiplegic spasms buy the most brutal resurgence of pain-sense.",
      patch: {
        mechanics: "表层锚点 + [对抗心控 = 硬核的物理切除脑机; 强制自制 = 与同化指令赛跑; 疼痛上限 = 扯出脊髓线插头]",
        mechanicsEn: "Surface_Anchor + [Anti-Mind_Control = Hardcore_physical_brain_extraction; Forced_Restraint = Race_against_assimilation; Max_Pain = Yank_spinal_plug]",
        aesthetic: "聚焦：队友流泪用猛力钳住主角后颈血洞，主角死咬破布青筋爆裂，在同化条99%处听见清脆的咔嚓声响。",
        aestheticEn: "Focus: Teammate crying while brutally clamping pliers into protagonist's gaping nape; biting rags with bulging veins, hearing the crisp CRACK right at 99% assimilation.",
        runtime: "IF (心控临界，屏幕起黑雾且角色手不受控开始举枪对准反方向或队友) THEN (提供机制：强制触发掩体黑市手术QTE，用颤动极大光标对准神经节点，失误即永久削减理智上限)。",
        runtimeEn: "IF (Mind_control_critical_dark_fog_forms_character_aims_gun_at_teammates_uncontrollably) THEN (Provide_Mechanic: Force_back-alley_surgery_QTE._Must_aim_shaking_cursor_at_nerve_node._Slip-ups_permanently_reduce_Max_Sanity)."
      }
    },
    {
      id: "the_smuggled_fake_transit_pass",
      name: "染血的出境伪造文牒", nameEn: "Bloodied Smuugled Transit Pass",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "夹层中染着鲜血的伪造国界通关/跃迁许可纸证件，印着一个完全剥离前史的虚构身份标识。",
      defEn: "Forged border-transit or warp permit, its inner layers stained with fresh blood, printed with a fictional identity completely divorced from prior history.",
      core: "【表面诱惑】：跨过不可逾越的哨塔，逃亡进入无追杀律法的流放绿洲，抹平一切前尘罪孽。",
      coreEn: "【Surface Temptation】: Passing the impassable watchtowers, fleeing to the outlaw oasis free of pursuit, wiping the slate clean of all sins.",
      logic: "【叙事抓手】：制伪造证件的死党为此被乱枪打碎。这门票等于他沉重的性命。在最高边检署凝视世仇查验官的眼睛，主角递上通关书承认假名即是抹除了对方的通缉，但承认这个名字也剥夺了喊叫真名替友复仇的机会。背离亡魂换取的肉躯生路。",
      logicEn: "【Narrative Affordance】: The forger best-friend was shredded by gunfire. This ticket equals his heavy life. Staring into the eyes of the nemesis inspector at High Customs, handing over the faux name erases the bounty—but adopting the fake name strips him of crying true-name vengeance for his friend. A physical survival bought by abandoning the ghosts arrayed behind.",
      patch: {
        mechanics: "表层锚点 + [身份剥离 = 脱卸原名带来的沉痛代价; 血债重量 = 铺路的是兄弟骨肉; 查验交锋 = 毫无动作的极限高压]",
        mechanicsEn: "Surface_Anchor + [Identity_Stripping = Grievous_toll_of_shedding_true_name; Blood_Debt = Path_paved_in_brother's_flesh; Verification_Duel = Motionless_extreme_pressure]",
        aesthetic: "聚焦：苍白冷灯光照着那抹文牒边角的暗红，主角在大衣深冬口袋里将指甲深深抠进手心肉中，强忍暴露疯狂的冲动。",
        aestheticEn: "Focus: Pale cold light hitting the dark red dot on the pass edge, protagonist in thick coat pockets digging nails so deep into palms to hold back exploding into madness.",
        runtime: "IF (出关口长对话审问中遭遇查验官对原名的疯狂侮辱) THEN (提供机制：不许采取暴怒攻击动作，必须维持心率心跳条平稳；一旦飙升红区便伪装破裂，在四面八方的炮塔机甲镇压下步入Game Over炼狱)。",
        runtimeEn: "IF (During_pass_interrogation_the_inspector_wildly_insults_target_true_name) THEN (Provide_Mechanic: Cannot_attack._Must_keep_heartrate_UI_steady._Spiking_red_breaks_disguise_leading_into_a_massive_turret-mech_suppression_Game_Over_hell)."
      }
    },
    {
      id: "the_seized_master_key_to_cages",
      name: "夺取的奴笼总控密钥", nameEn: "Seized Master Key to Cages",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "控制下层万千刑徒电网或者血契枷锁的沉重绝密端盘转核。",
      defEn: "A heavy, top-secret dial-core controlling the electric grids or blood-shackles of thousands of lower-tier condemned.",
      core: "【表面诱惑】：启动它，就等同于在一瞬间完成十万工奴的浩荡革命释放运动。",
      coreEn: "【Surface Temptation】: Activating it equals instantly sparking a massive revolutionary release of 100,000 toiling slaves.",
      logic: "【叙事抓手】：物理执行苛刻到极点。必须在顶层尖塔，冒着防空重火网和雷暴交加的高危点强制插入30秒。这并非简单的按键，控制系统的逆向电冲/魔爆效应会将这几万人的反噬枷锁电压全部经过主角躯体引流。每解放一层，主角的焦黑便更进一步濒临灰飞烟灭。",
      logicEn: "【Narrative Affordance】: Extremely punishing physical execution. Must forcefully insert it for 30s at the top spire, enduring anti-air crossfire and thunderstorm. This isn't a button press: the system's reverse pulse funnels the backlash energy of tens of thousands to break their chains straight through protagonist's body. Every floor freed pushes the charred flesh closer to ash.",
      patch: {
        mechanics: "表层锚点 + [一人换众生 = 将群体的拘束逆流导入自身承受; 尖刺起舞 = 火力网与雷暴中的标靶; 终极焚火 = 肉体破壁机]",
        mechanicsEn: "Surface_Anchor + [One_for_All = Channeling_the_masses'_restraints_through_self; Dancing_on_Spire = Target_in_flak_and_lightning; Ultimate_Burn = Flesh_smasher]",
        aesthetic: "聚焦：塔尖之上，军大衣灰飞烟灭，躯干被雷电与高压打成只剩骨骼发光的焦尸形貌，残手仍死死抵到底，伴随下方大地震撼地涌出无数细微火光光点。",
        aestheticEn: "Focus: Upon the spire, coat turned to ash, torso blasted into a glowing skeleton-charcoal husk by lightning arc, yet the ruined hands push dead straight to the bottom. Below, the earth shakes as countless tiny specks of firelight pour out.",
        runtime: "IF (突破天谴包围终于插入密钥) THEN (提供机制：锁定移动，只提供极限抗压连点抵抗雷击倒计时指令，屏幕下角同步亮起千军万马奔涌出圈卡的宏大反馈)。",
        runtimeEn: "IF (Broaching_the_heavenly_blockade_and_inserting_key) THEN (Provide_Mechanic: Movement_locked._Only_extreme_mashing_to_survive_lightning_countdown._Bottom_screen_synchronously_glows_illuminating_an_epic_feed_of_a_thousand_armies_surging_from_cages)."
      }
    },
    {
      id: "the_erased_flesh_barcode",
      name: "被融酸洗除的骨血烙印", nameEn: "Acid-Washed Flesh Barcode",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "手臂/侧颈上深及见骨的化脓骇人伤疤区。曾是刻有绝对主仆阵列信息的地方。",
      defEn: "A horrifying festering scar down to the bone on the arm/neck. It previously housed the absolute master-servant array data.",
      core: "【表面诱惑】：让世界级的扫盲眼/检索律法再也无法定义你为“财产物件”，强行跨越物种阶梯做回“人”。",
      coreEn: "【Surface Temptation】: Blinding the world-class scanners/laws from ever defining you as 'property' again, forcibly hopping the species ladder back to 'human'.",
      logic: "【叙事抓手】：深植骨髓的印记无法随便切去。主角流亡到剧毒污水池时，必须在无麻醉清醒下，自提一整瓶废土浓酸/融骨毒液淋满整个部位。任由其冒烟嘶嘶腐蚀掉大块血肉乃至露出白骨神经，才足以物理破坏印记共振。纯粹的肉体大清洗极刑。",
      logicEn: "【Narrative Affordance】: Mark rooted into marrow resists mere cutting. Exiled to toxic slime pools, completely conscious without anesthetics, protagonist must pour industrial acid / bone-melting venom directly over the area. Letting it hiss, smoke, and rot away chunks of flesh down to the exposed glowing bone just to rupture the resonant mark. A pure physical purge execution.",
      patch: {
        mechanics: "表层锚点 + [刮骨仪式 = 酸洗骨血求新生; 永久损伤 = 断送了特定肢体的高阶运用可能; 至高自毁 = 只为摆脱一串字符界定]",
        mechanicsEn: "Surface_Anchor + [Bone-Scraping_Ritual = Acid-purging_for_rebirth; Permanent_Damage = Forfeits_high-tier_usage_of_the_limb; Supreme_Self-Destruction = Merely_to_escape_a_string_of_characters]",
        aesthetic: "聚焦：阴湿腐臭水道，咬断口塞，脸庞扭曲成狂鬼，白骨在黄绿色毒泡泛起的嘶嘶声中冷漠暴露出来。",
        aestheticEn: "Focus: Dank foul sewer, biting through gag, face twisting into a mad ghoul; white bone coldly exposed amidst hissing yellow-green toxic bubbles.",
        runtime: "IF (避难点操作台中触发清除身份印记指令) THEN (提供机制：强制极品惊悚游戏般的拉锯拖拽小游戏。每一次缓步拉拽都伴随屏幕血肉剥离的高频眩晕和惨厉嚎叫，完成后世界范围内通缉指数彻底报废清零)。",
        runtimeEn: "IF (Trigger_erase_identity_mark_at_hideaway_console) THEN (Provide_Mechanic: Force_horror-tier_sawing_drag_mini-game._Each_slow_drag_prompts_flesh-peeling_vertigo_and_harrowing_screams._Upon_completion_worldwide_wanted_meter_is_completely_annihilated_to_zero)."
      }
    },
    {
      id: "the_one_way_ticket_to_the_outer_rim",
      name: "法外之地的单程船票", nameEn: "One-Way Ticket to Outer Rim",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "物理存在极小的绝密电子通行芯片或特权跃迁灵木，对应脱离管辖界域的最后一班偷渡巨物。",
      defEn: "A physically tiny top-secret electronic chip or privileged warp-wood matching the last smuggling behemoth bound for jurisdiction-free zones.",
      core: "【表面诱惑】：跃迁入那个无法无天的纯白废土，斩断身后整颗星球的因果与律条通缉令。",
      coreEn: "【Surface Temptation】: Warping into that lawless pure-white wasteland, severing all karma and warrants from the home planet behind.",
      logic: "【叙事抓手】：船票不认人只认物。在地狱空港，这是引发血亲相食的百万悬赏。为防抢夺，主角将其生吞入腹。为免引发胃出血被芯片切穿内脏导致吐出，全程禁用重火力后坐力级爆器、禁止跳跃冲刺。在闸门下放的倒数期，主角得用最原始、如迟钝死囚般的一步一防守步伐，横推丧尸般扑来抢夺的大量疯狂暴民。",
      logicEn: "【Narrative Affordance】: Ticket holds zero identity, recognizing only the object. In hell-port, it's a million-bounty causing kin mutiny. Swallowed to avoid theft. To prevent stomach rupture that would vomit the chip, ALL heavy weapon recoil and high jumps/sprints are locked. In the closing gate countdown, protagonist must use primitive, sluggish death-row guarding steps to push through massive mob of zombie-like snatchers.",
      patch: {
        mechanics: "表层锚点 + [胃囊收纳 = 强行护体成茧; 物理掣肘 = 大威力动能禁忌; 迟缓的压路机 = 在千万绝望者的尸山中碾进逃亡道]",
        mechanicsEn: "Surface_Anchor + [Stomach_Stowage = Cocooning_treasure; Physical_Handicap = Heavy_kinetic_taboo; Sluggish_Steamroller = Grinding_through_a_corpse-pile_of_millions_into_the_escape_path]",
        aesthetic: "聚焦：空港通道内密密麻麻犹如蚁附的绝望溃兵，主角的防弹衣被撕碎抓烂，不敢反掷震荡手雷，硬是一拳拳敲碎满脸血肉推上登船踏板。",
        aestheticEn: "Focus: Commuter tunnel crawling with ant-like desperate deserters. Protagonist's vest shredded, daring not toss concussion grenades, forcing their way fist by bloody fist over fractured skulls onto the boarding ramp.",
        runtime: "IF (在登船口最后冲刺阶段) THEN (提供机制：禁用所有高爆发及位移技能，只开放基础重拳与顶盾格挡，必须以硬扛无数小怪挠抓推搡的最低效步行慢慢熬过那最后五十米红毯)。",
        runtimeEn: "IF (Final_sprint_on_boarding_gate) THEN (Provide_Mechanic: Disables_all_bursts_and_dashes._Allows_only_basic_heavy_punch_and_shield_block._Must_tank_countless_scratching_mobs_in_an_agonizingly_slow_walk_to_endure_the_last_50-meter_red_carpet)."
      }
    },
    {
      id: "the_hacked_parole_shackle",
      name: "被强行覆盖指令的假释重枷", nameEn: "Hacked Parole Shackle",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "本用于完全锁死物理范围的厚重电子镣铐，外部外接出大量违规纠缠的电缆拼凑黑客改板。",
      defEn: "Massive electronic shackle built to hard-lock physical radius, externally wired with tangled illegal cables and hacked patched circuitry.",
      core: "【表面诱惑】：用虚假静止信号糊弄天眼网系统，欺诈系统以为你在乖乖服役，实则本体外出完成末路大复仇。",
      coreEn: "【Surface Temptation】: Spoofing the Eye-Net with fake static signals, tricking the system into thinking you are obediently serving time, while your host body heads out for doomsday revenge.",
      logic: "【叙事抓手】：黑客工程极其糙烂。隐患极高：只要一碰水立刻导致全身感电烧焦；靠近电子隐秘门必导致干扰脉冲逆流引发防卫警报。主角明明处于潜行复仇期，却要带这种极其笨重易碎且限制越野的巨型刑具行动，是被迫正面拔刀清缴机动武装队的首要短板源头。",
      logicEn: "【Narrative Affordance】: Extremely sloppy hackwork. Fatal hazards: touching water causes instant whole-body electrocution; approaching stealth e-doors guarantees jamming-pulse backflow triggering supreme alarms. Forced to carry an ultra-clunky, fragile, mobility-crimping giant punishment tool during a stealth-revenge run—it is the primal flaw repeatedly forcing the protagonist to unsheathe their blade and frontally slaughter mobile-armor squads.",
      patch: {
        mechanics: "表层锚点 + [隐患欺诈 = 刀尖上的自制黑客炸弹; 地形封锁 = 必须绕开捷径水路; 被动暴露 = 永远伴生在潜行流里的明火靶标]",
        mechanicsEn: "Surface_Anchor + [Hazardous_Spoof = Homemade_hacker_bomb_on_a_knife_edge; Terrain_Lock = Must_detour_around_shortcut_wetlands; Passive_Exposure = The_flare-target_cursing_every_stealth_run]",
        aesthetic: "聚焦：霓虹雨巷，主角狼狈且古怪地用单脚跳跃防躲污水坑，而另一只脚的厚重累赘正噼啪作响爆出刺目漏电蓝光。",
        aestheticEn: "Focus: Neon rain alley, protagonist awkwardly single-leg hopping to dodge sludge puddles, while the burdensome shackle on the other leg crackles, bursting with blinding blue leak-sparks.",
        runtime: "IF (逃脱大军追捕前方仅有下水道捷径) THEN (提供机制：跳水等同于直接焦炭死档Game Over；系统迫使玩家背对绝路深渊，拔冷兵器强行打通不可思议的一场百人修罗场决战)。",
        runtimeEn: "IF (Fleeing_army_pursuit_and_facing_only_a_sewer_shortcut) THEN (Provide_Mechanic: Jumping_in_equals_instant_charcoal_Game_Over._System_forces_player_to_turn_back_draw_cold_steel_and_survive_an_impossible_1vs100_Ashura_last-stand)."
      }
    },
    {
      id: "the_dead_bosses_biometric_key",
      name: "斩下的统治者眼眸/大拇指", nameEn: "Dead Boss's Severed Biometric Key",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "刚从压迫主角长达十年的暴君恶首尸体上切割下的绝对生物授权器官，泡在冰冷保存匣内。",
      defEn: "Absolute bio-auth organ (eye/thumb) freshly butchered from the corpse of the tyrant who oppressed the protagonist for a decade, chilled in a preservation box.",
      core: "【表面诱惑】：这团毫无生命的腐肉，是轰开白金通天大门、抹平跨星系追捕指令的唯一高级秘钥。",
      coreEn: "【Surface Temptation】: This lifeless rot is the sole high-level cipher able to blasts open the Platinum Tower doors and wipe cross-galaxy hit warrants.",
      logic: "【叙事抓手】：保存这块组织极耗活体能量。金库通关之路上，主角必须将保存器直插在自己人工心脏/动脉主循环口吸血供能。随跋涉加剧吸食超载强行削砍本体寿命上限与视觉。这是来自死去暴君最后的致命微型寄生与报复——物理层面上，死了也要把你榨干。",
      logicEn: "【Narrative Affordance】: Preserving the tissue demands massive living energy. Escorting it to the vault, protagonist must jack the preserver directly into their artificial heart / major artery to feed it blood-power. Extended trekking causes extreme overload, brutally hacking away max life and vision. The tyrant's final lethal micro-parasitism & revenge—even in death, physically bleeding you dry.",
      patch: {
        mechanics: "表层锚点 + [战败的阴魂 = 物理形式上的死后吸血纠缠; 限时枯竭 = 在彻底被吸干前跑过终点圈; 物理报复 = 暴君的防腐剂是推翻者的生命循环]",
        mechanicsEn: "Surface_Anchor + [Defeated_Ghost = Physical_post-mortem_vampirical_haunting; Timed_Drain = Cross_finish_line_before_sucked_dry; Physical_Revenge = Tyrant's_preservative_is_the_usurper's_blood_loop]",
        aesthetic: "聚焦：金辉大门前，满地血泊中主角的机械心脏疯狂报红濒危警鸣，而身旁玻璃盒里的惨白断指/瞳孔却诡异的水润鲜艳。",
        aestheticEn: "Focus: Before the golden gate, protagonist in a blood pool with mechanical heart blaring critical red warnings, while the pale severed finger/eye in the adjacent glass box remains eerily moist and vibrant.",
        runtime: "IF (在携带器官闯阵途中超额耗时) THEN (提供机制：系统叠加上不可驱除的‘寄生虚脱’Debuff，全动作受限且视距仅剩三米死管状，直到硬生生爬进金库解锁槽)。",
        runtimeEn: "IF (Exceeding_time_limit_while_escorting_organ) THEN (Provide_Mechanic: System_stacks_uncurable_Parasitic_Exhaustion_debuff._All_movements_crippled_and_FOV_shrinks_to_a_3-meter_tunnel_until_crawling_to_the_vault_slot)."
      }
    },
    {
      id: "the_final_dose_of_addiction_blocker",
      name: "终极成瘾/诅咒隔绝器", nameEn: "Final Dose of Curse Blocker",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "有着惊悚粗大探针的重型注射器/圣遗物钉，内部流淌着刺目的致命解药流萤。",
      defEn: "Heavy syringe/holy relic nail with a terrifyingly thick probe, flowing with glaring deadly-antidote luminescence.",
      core: "【表面诱惑】：针对那刻在基因深处令无数下级堕落的极强成瘾/魔咒。只要全力打下并承受地狱般断点反弹，就能赢回独立完整的洁净魂肉。",
      coreEn: "【Surface Temptation】: Counters the ultimate addiction/curse carved into genes causing countless lower-castes to fall. Enduring its hellish snapping point means winning back clean, fiercely independent soul-flesh.",
      logic: "【叙事抓手】：药效过于猛烈，注入即刻休克。为确保大决战能在最后一刻彻底清洗，主角会在战前将针尖刺穿皮肤死抵心脏边缘（暂不推进）。在终极缠斗中，胸口绝不可受任何钝击重创，否则针管在胸腔炸裂必死。只有砍下暴君首级后，方由自己战栗惨死般推至底端触发终极净化风暴。",
      logicEn: "【Narrative Affordance】: Too potent; injection guarantees instant shock. To guarantee final-second deep cleansing, protagonist preemptively buries the needle tip through the skin right against the heart before battle (un-plunged). During the ultimate brawl, the chest MUST NOT take blunt trauma, or the shattering syringe causes violent internal death. Only after severing the tyrant's head do they shakily push the plunger home, triggering an ultimate purification storm that mimics agonizing death.",
      patch: {
        mechanics: "表层锚点 + [预埋解放线 = 贴着心脏死角的救星炸弹; 防御极点 = 胸腹完全沦为不能碰的死门; 末日净化 = 战后主动领受极刑求脱]",
        mechanicsEn: "Surface_Anchor + [Pre-buried_Liberation = Savior_bomb_snug_against_heart; Defense_Apex = Chest/abdomen_becomes_untouchable_death-door; Doom_Purge = Actively_embracing_execution_post-win]",
        aesthetic: "聚焦：BOSS挥出重锤，主角宁可被生生砸断手臂也极力闪避开胸膛；废土战息的日落时，血泊中那只起皱颤抖的手狠狠按下深色推杆。",
        aestheticEn: "Focus: As Boss swings heavy hammer, protagonist prefers letting arms snap under impact to shift parry away from the chest. At dusk atop ruins, an aged, trembling hand in a blood pool brutally punches the dark plunger down.",
        runtime: "IF (在最终战时受到胸口正面超量猛击破坏判定) THEN (提供机制：无视护盾等级及复活道具，强制暴开致死判定并呈现短促黑幕：解药已在心房尽碎，自由终结在黎明前)。",
        runtimeEn: "IF (Taking_excessive_blunt_hit_to_upper_chest_hitbox_in_final_fight) THEN (Provide_Mechanic: Ignores_shield/revive_items._Forces_instant_lethal_death_fade-to-black_message:_Antidote_shattered_in_atrium._Freedom_ended_before_dawn)."
      }
    },
    {
      id: "the_shattered_restraint_buckles",
      name: "崩裂的极重型精神拘束具", nameEn: "Shattered Restraint Buckles",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "由最高压合超铁铆接制成的疯人院束缚背扣，缘于极其恐怖反物理的肌肉暴涨而被暴力撕裂脱节。",
      defEn: "Asylum back-buckles riveted with highest-pressure ultra-iron, violently torn and dislocated by horrifyingly unnatural muscle expansion.",
      core: "【表面诱惑】：挣脱把自身定义为残次危废品的无死角软禁束缚室，夺回属于一具野兽应有的嗜血行动特供权。",
      coreEn: "【Surface Temptation】: Tearing free from the soft padded room that defined the self as a defective hazard, reclaiming the bloodthirsty physical privileges owed to a beast.",
      logic: "【叙事抓手】：主角确有难以磨灭的暴虐幻象癔症，束缚带曾是抗击自残的防波堤。崩开意味着潜藏疯魔彻底脱缰。解缚的越狱战斗中，每挥出一发毁灭性近战杀掠，屏幕便疯狂侵入求饶被虐者临死的虚幻闪回哀嚎。为了活出地狱，你必须接受并畅快地享受沦为地狱恶鬼的主角狂喜释放。",
      logicEn: "【Narrative Affordance】: The protagonist ACTUALLY suffers indelible violent hysterical hallucinations; the jacket was a breakwater against self-harm. Popping it releases the slavering madness entirely. In the breakout sequence, every devastating melee murder aggressively rewrites the screen with phantom flashbacks of begging victims dying. To live out of hell, you must accept and rapturously enjoy the protagonist's ecstatic release of becoming a hell-demon.",
      patch: {
        mechanics: "表层锚点 + [剥去遮羞布 = 放走心中的极恶灾厄; 狂化之价 = 超高增益挂上了强频自残反噬; 黑白难辨 = 向着暴戾底线滑堕换取活路]",
        mechanicsEn: "Surface_Anchor + [Stripped_Fig_Leaf = Unleashing_the_supreme_evil_calamity_within; Berserk_Toll = Ultra-buff_tethered_to_high-freq_self-harm; Blurring_Black_&_White = Sliding_down_the_base_of_violence_to_survive]",
        aesthetic: "聚焦：雪白无暇甚至透着诡异圣洁的软包病房里飞散着巨大的黑铁碎块，狂人主角仰头怒视白炽灼灯，爆发出绝非人类的残忍嚎泣。",
        aestheticEn: "Focus: Inside the immaculate strangely holy padded cell, giant black iron fragments scatter. The madman protagonist throws head back glaring at searing white incandescents, unleashing a truly inhuman sadistic wail.",
        runtime: "IF (在崩掉枷锁后的突破过程中，保持了30秒无有效杀戮倾泻) THEN (提供机制：积压的狂暴点将迫使屏幕颠倒且镜头血红，主角会不可控地做出高伤自戕动作放血；必须逼迫玩家疯狂进行高危突脸处决才能喂平渴望稳住状态)。",
        runtimeEn: "IF (After_shackles_break_breaking_out_but_maintaining_30s_w/o_effective_slaughter) THEN (Provide_Mechanic: Pent-up_rage_inverts_screen_and_turns_lens_blood_red._Protagonist_uncontrollably_self-harms_heavy_damage_to_bleed_out._Forces_player_to_madly_perform_high-risk_face-rushing_executions_to_feed_the_hunger_and_stabilize)."
      }
    },
    {
      id: "the_identity_erasing_spike",
      name: "抹除控制链的夺魂灭灵钉", nameEn: "Identity-Erasing Soul Spike",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "可发出微型中枢高压/EMP毁灭的锥形法器或注射器，用以物理销毁后颈公民端芯片/脊柱魂约锁。",
      defEn: "Cone-shaped artifact or syringe generating micro-central high-voltage/EMP ruin, used to physically destroy citizen chips / spine soul-locks at the nape.",
      core: "【表面诱惑】：不仅注销天罗地网级别的追杀定位金库债务，亦把一切历史地位、人理记录随之一拳粉碎。社会性虚无化换万丈深渊下之至道自由。",
      coreEn: "【Surface Temptation】: Cancels out omniscient tracking and mega-debts, but also smashes all historical status and human records in one blow. Social nullification exchanging for supreme freedom beneath the abyss.",
      logic: "【叙事抓手】：直接破坏上位连接紧临脑干/灵根，脉冲发动会造成数小时无解毁坏：主角完全丧失对于文字与世界语言的辨识中枢能力。而在遭大批精锐围剿的天台迷宫战里，面对“听不见敌营密码指令、看不懂闪烁指示牌究竟是生门抑或死阵”等极致剥离，依靠野兽狂气撕咬出路。",
      logicEn: "【Narrative Affordance】: Destroying top-tier ties right next to brainstem/spirit-root. Activating pulse causes hours of unsolvable ruin: protagonist totally loses recognition center for text and world language. In the rooftop maze besieged by hordes of elites, facing extreme stripping—'cannot hear enemy password commands, cannot read if blinking signs say Survival Gate or Death Trap'—relying solely on beastly fury to bite a way out.",
      patch: {
        mechanics: "表层锚点 + [绝对抹除 = 人格断绝换不可追踪; 认知瞎闭 = 失去语言标高识途功能; 回归野种 = 向天梯下坠化为野狗寻路]",
        mechanicsEn: "Surface_Anchor + [Absolute_Erasure = Persona_severance_for_untraceability; Cognitive_Blindfold = Losing_high-tier_language/sign_nav_functions; Revert_to_Mutt = Free-falling_down_the_ladder_to_navigate_like_a_stray_dog]",
        aesthetic: "聚焦：冷雨浇透了燃烧的电台高塔边缘，拔出脑后冒焦烟铁刺的主角，冷眼看向武装机甲射来的瞄准线束，眼眶中透出的仅余冷血狩猎过滤感。",
        aestheticEn: "Focus: Cold rain drenching the burning radio tower edge, pulling out the smoking iron spike from the brainstem; cold eyes staring at incoming aiming lasers from heavy mechs, orbits projecting purely cold-blooded hunting filters.",
        runtime: "IF (在使用极刑针开启无限制大乱斗脱逃后的整个关底周期) THEN (提供机制：暴力将游戏中所有的UI弹窗、任务指引路线图、对话字幕全部加密为极具干扰的火星乱麻代码，不再提供任何坐标，在盲乱黑暗深洋中通过反击挣扎打通关卡)。",
        runtimeEn: "IF (During_entire_end-stage_cycle_post_execution_needle_unleashed_brawl_escape) THEN (Provide_Mechanic: Violently_encrypt_all_game_UI_pop-ups_quest_route_maps_and_dialog_subtitles_into_distracting_martian_garbage_code._Zero_coordinates_provided._Struggle_through_the_level_purely_on_counter_reactions_in_a_blind_dark_ocean)."
      }
    },
    {
      id: "the_crowbar_prying_the_supreme_core",
      name: "暴力撬碎至尊枢纽的废铁撬棍", nameEn: "Crowbar Prying the Supreme Core",
      group: "10. 枷锁的斩断", groupEn: "10. Liberation & Breaking Chains",
      def: "一根因为承受不可能的极限扭力而废弃毁损弯折的钝重工具，沾着自命神明的残毁机油/流金神髓。",
      defEn: "A blunt heavy tool, discarded and bent broken from bearing impossible extreme torsion, smeared directly with the ruined oil/golden ichor of a self-proclaimed deity.",
      core: "【表面诱惑】：用最为底层原始无技法也无法防御的物理莽撞，砸碎了无死角算尽一生高下运数规则的可操控上帝。",
      coreEn: "【Surface Temptation】: Using the most bottom-tier, primitive, unskillful yet un-defendable physical recklessness to smash the manipulable God that perfectly calculated a lifetime's destiny rules with zero blind spots.",
      logic: "【叙事抓手】：上位者(如圣主/母机神明)防御壁垒是绝对演算的排斥浪涌或上千度死光。一切高端弹药均受控触发反制。夺回命运的最终对决便是不屑枪弹与法咒。主角徒手拾取平民撬棍，在高温炽烤死光中生插入这神之后门的缝死之界。几十秒生死较劲，任凭双手灼烧穿透碳化剥落森白腕骨，也死咬切齿将那所谓高高在上不落红尘的外核大门硬生生暴力扳下砸碎。",
      logicEn: "【Narrative Affordance】: The Overlord (Holy Lord / Mother AI) defense wall is an absolute repulse surge or 1000-degree death ray crafted by perfect calculus. High-end ammo triggers calculated counters. Reclaiming destiny means discarding guns and spells. Protagonist bare-hands a civilian crowbar, stepping into the searing death ray, forcing it straight into the sealed seam of this God's backdoor. Dozens of seconds of life-death tension; ignoring flesh burning, carbonizing to expose stark white wristbones, teeth gritted to brutally wrench down and smash the unreachable, transcendent outer-core door with pure savage force.",
      patch: {
        mechanics: "表层锚点 + [蚍蜉撼柱 = 抛弃华丽连招的最粗野死战; 献肉祭仪 = 用碳化肉骨头抗高抗熔炼压; “不过破铜废铁” = 极其狂傲决然的上位否决信]",
        mechanicsEn: "Surface_Anchor + [Ant_Shaking_Pillar = Forsaking_flashy_combos_for_crudest_death-struggle; Flesh_Tribute_Ritual = Using_carbonizing_bone_flesh_to_tank_melting_pressure; Just_Scrap_Metal = Extremely_arrogant_categorical_veto_of_the_Overlord]",
        aesthetic: "聚焦：在至尊高塔深井爆出的紫蓝纯核心光海里，主角身如柴炭飞灰剥离，而在那枯骨肌肉可怖颜面上炸出最肆意暴虐之笑并狂力下拉着那已弯折大半的粗大铁铁棍。",
        aestheticEn: "Focus: Inside the supreme spire's deep well bursting with purple-blue pure core light sea, protagonist's body peeling off like charcoal ash, yet upon that terrifying skeletal-muscular face erupts the most unbridled sadistic grin, furiously pulling down the massive heavily-bent iron bar.",
        runtime: "IF (突入真结局神明枢纽绝对拒止热力场防线最后一步) THEN (提供机制：彻底没收复杂的攻防换算槽，只有一根铁棍一条红血条。面迎喷吐的毁灭炽域海不断狂按‘突进’，每走一步永久没除生命血量上限直到最终在门缝边将QTE蓄力爆发；一旦停滞或血条清零将在长啸里受风化作尘死档结束)。",
        runtimeEn: "IF (Breaching_true_ending_God_hub's_absolute_repel_thermal_field_final_step) THEN (Provide_Mechanic: Completely_confiscates_complex_ATK/DEF_bars._Only_an_iron_rod_and_a_red_HP_bar._Facing_spewing_destruction_fields_madly_mashing_'Forward'._Every_step_permanently_erases_Max_HP_until_eventually_reaching_door_seam_for_burst_QTE._Any_stagnation_or_HP_hitting_0_ends_in_a_screaming_weathering_to_dust_perma-death)."
      }
    }
  ]
};
