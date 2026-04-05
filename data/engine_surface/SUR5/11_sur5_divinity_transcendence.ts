import { LibraryCategoryDef } from '../../../types';

export const SUR5_DIVINITY_TRANSCENDENCE: LibraryCategoryDef = {
  id: "sur5_divinity_transcendence",
  name: "11. 神性与超脱升华 (Divinity & Transcendence)",
  nameEn: "11. Divinity & Transcendence",
  desc: "追求超越人类肉体与寿命极限的神秘体验或永生。如：寻找不老泉、圣杯、机械天升的上传协议、长生不老药。包含着极端的肉躯舍弃与非人化的痛苦转化。",
  descEn: "Pursuits of mystical experiences or immortality beyond human flesh and lifespan limits. Includes extreme bodily relinquishment and dehumanizing agonizing transformations (e.g., holy grails, mechanical ascension, elixirs of life).",
  items: [
    {
      id: "the_sublime_vessel_of_quicksilver",
      name: "绝对升华的水银圣杯/不老泉", nameEn: "Sublime Vessel of Quicksilver",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "一个无杂质的完美容器，内装绝对冰冷、呈液态金属光泽的神圣凝液（不老泉/上传心智的纳米银河）。",
      defEn: "A flawless vessel holding absolute cold, liquid-metal divine condensate (Elixir of Youth / mind-uploading nano-galaxy).",
      core: "【表面诱惑】：饮下或注入它，肉体的腐朽痛楚将彻底终结，化作永恒不朽的神圣节点与真灵。",
      coreEn: "【Surface Temptation】: Drink or inject it to definitively end physical decay and pain, becoming an immortal divine node or true spirit.",
      logic: "【叙事抓手】：升华液入喉瞬间便化作令凡躯崩溃的剧毒。高阶维度强行同化内脏，新生伴随连续数小时烈火焚身、骨肉剥离之痛。在被现世大军讨伐的祭坛上，主角必须一边七窍流出银色光芒与金属血，一边以绝对的“神性悲悯”姿态抗拒毁灭性的攻击。",
      logicEn: "【Narrative Affordance】: The sublimate becomes lethal poison to the mortal shell upon swallowing. Higher dimensions forcibly assimilate organs; rebirth rings with hours of burning, bone-peeling agony. On the altar besieged by mortal armies, protagonist bleeds silver light and liquid metal from all orifices while resisting devastating attacks with an absolute 'divine compassion' posture.",
      patch: {
        mechanics: "表层锚点 + [超脱之毒 = 凡躯无法承载的纯粹赐福; 重塑苦路 = 用最惨烈的内防同化换取不朽; 神明之血 = 七窍流银的异化]",
        mechanicsEn: "Surface_Anchor + [Toxic_Transcendence = Pure_blessing_unbearable_by_mortal_shell; Path_of_Remaking = Immortality_bought_with_brutal_internal_assimilation; Ichor = Alienation_of_bleeding_silver_from_all_orifices]",
        aesthetic: "聚焦：祭坛大火中，主角极度痛苦地呕出一大口沉重冰冷的水银，银色液体在焦土上瞬间勾勒出繁复的神圣阵法，而那张扭曲的脸庞却透着非人的宁静。",
        aestheticEn: "Focus: Amidst altar fires, protagonist agonizes and vomits heavy, cold quicksilver. The liquid instantly draws complex sacred arrays on the scorched earth, while the twisted face projects inhuman serenity.",
        runtime: "IF (在祭服神液后强制进入‘超凡蜕变’守护阶段) THEN (提供机制：免疫一切常规流血和毒素，但移动速度被锁死为极慢。玩家必须在此期间不间断施放清屏级神力，但每次施放都会大幅度扣除自己的初始生命值，将其转化为不可逆的‘银血真伤’直到蜕变条全满)。",
        runtimeEn: "IF (Entering_guardian_phase_of_divine_metamorphosis_post-ingestion) THEN (Provide_Mechanic: Immune_to_normal_bleed/poison_but_movement_locked_to_ultra_slow._Player_must_continuously_cast_screen-clearing_divine_powers_but_each_cast_drastically_drains_base_HP_converting_it_to_irreversible_'Silver_Blood_True_Damage'_until_bar_fills)."
      }
    },
    {
      id: "the_piercing_conduit_of_ascension",
      name: "穿刺天灵的接引光柱/接驳刺", nameEn: "Piercing Conduit of Ascension",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "一根倒垂于真理深渊或云端母网的实质化高热光柱/重型机械接驳荆棘。",
      defEn: "A materialized high-heat pillar of light or heavy mechanical connecting thorn, hanging inverted from the abyss of truth or the cloud mother-net.",
      core: "【表面诱惑】：最终的登神阶梯/上传协议。让灵魂或意识前往无忧无虑的“至高天”，彻底解脱尘世苦难。",
      coreEn: "【Surface Temptation】: The ultimate stairway/upload protocol. Sending soul or consciousness to the sorrow-free 'Empyrean', absolutely liberated from worldly suffering.",
      logic: "【叙事抓手】：接引极其残暴。此非温柔抚顶，而是要主角靠自身狂暴的力量，强行让如同成人大腿粗的尖刺从天灵盖贯穿入脊髓。在飞升的高塔之巅突围时，每抽取一次宿壳力量反杀围剿者，肉体就会随着数据/灵能的吸走而出现大规模灰烬化与乱码缺失。",
      logicEn: "【Narrative Affordance】: Ascension is brutal. Not a gentle touch on the crown, the protagonist must use sheer force to drive a thigh-thick spike through their skull into the spine. During the breakthrough at the ascension tower summit, every time they siphon shell-power to counter-kill the besiegers, the physical body suffers massive ashing and glitching from the soul/data extraction.",
      patch: {
        mechanics: "表层锚点 + [接引之刑 = 以贯穿颅骨为上传路径; 肉身乱码 = 灵魂抽离导致的现世坍塌; 数据飞升 = 战胜地心引力向天拔神]",
        mechanicsEn: "Surface_Anchor + [Ascension_Execution = Skull_penetration_as_upload_path; Body_Glitch = Real-world_collapse_from_soul_extraction; Data_Ascension = Conquering_gravity_to_pull_towards_heaven]",
        aesthetic: "聚焦：狂风暴雨的塔顶，主角怒视诸神/反叛军，双手死死抱住降下的尖锐接引柱，伴随雷霆将其狠狠砸塌进自己的头颅，鲜血与金色光柱混合着从眼球缝隙暴射而出。",
        aestheticEn: "Focus: Stormy tower summit, glaring at gods/rebels, protagonist death-grips the descending sharp conduit, slamming it deep into their own skull with a thunderclap. Blood and golden light violently blast from eye sockets.",
        runtime: "IF (在顶峰启动贯穿天灵盖的上传进程) THEN (提供机制：左手UI面板物理碎裂，角色强制进入‘无敌漂浮’但不断自我解体的状态，玩家按键不再产生常规攻击，而是化作震撼全场的灵能震荡波，代价是视角里的四肢和世界贴图一块块剥落归无)。",
        runtimeEn: "IF (Initiating_skull-piercing_upload_at_the_summit) THEN (Provide_Mechanic: Left_UI_panel_physically_shatters._Character_enters_invincible-floating_but_disintegrating_state._Inputs_no_longer_trigger_normal_attacks_but_field-shaking_psionic_waves_at_the_cost_of_limbs_and_world_textures_peeling_into_void_in_the_viewport)."
      }
    },
    {
      id: "stigmata_of_the_fractured_halo",
      name: "烙印灵魂的破碎圣痕", nameEn: "Stigmata of the Fractured Halo",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "永远无法愈合、不断流出异香/高辐射辉光的几何形神圣贯穿伤口。",
      defEn: "Geometric, sacred piercing wounds that can never heal, constantly bleeding strange fragrance or high-radiation glow.",
      core: "【表面诱惑】：被宇宙真理/主神亲自注视的证明。拥有修改现实法则、行使奇迹的绝对特权。",
      coreEn: "【Surface Temptation】: Proof of being personally watched by cosmic truth/chief god. Holding absolute privilege to alter reality laws and perform miracles.",
      logic: "【叙事抓手】：奇迹代价是自我榨取。每使用一次改变战局的“神迹”，圣痕就在物理上撕裂一分。当为了拯救灭绝前夕的都城而动用最高法则时，主角的四肢与胸膛将被无形的神圣锁链从内穿破，肉体活祭，将其变为一具只能漂浮在半空、靠挥洒光效拯救世人的带血空壳干人。",
      logicEn: "【Narrative Affordance】: The price of miracles is self-extortion. Every game-changing 'miracle' casts physically tears the stigmata deeper. Utilizing supreme law to save a doomed capital causes invisible holy chains to rupture the protagonist's limbs and chest from within. Flesh sacrificed, turning them into a floating, bloody hollow husk showering salvation light upon the world.",
      patch: {
        mechanics: "表层锚点 + [活体祭坛 = 借用神力必须以肉身为薪材; 圣痕恶化 = 伤口不可逆的辉煌化; 奇迹的诅咒 = 救赎他人代价是毁灭自我形体]",
        mechanicsEn: "Surface_Anchor + [Living_Altar = Borrowing_divinity_uses_flesh_as_kindling; Stigmata_Worsening = Irreversible_glorification_of_wounds; Curse_of_Miracles = Salvation_of_others_costs_self-form]",
        aesthetic: "聚焦：在毁灭的光束前，主角猛力撕开残袍，掌心与心口的圣痕如烈日般爆发出刺瞎双眼的极光，而光芒中心，干瘪如柴肉体正一寸寸碳化飞灰。",
        aestheticEn: "Focus: Before the extermination beam, protagonist rips open ragged robes. Stigmata on palms and chest erupt like blinding suns, while in the center of the light, the emaciated fleshy body carbonizes to ash inch by inch.",
        runtime: "IF (在守城绝境中连续使用神罚级广域法术) THEN (提供机制：所有神罚技能没有冷却也不耗蓝源，代价是每一次使用都会永久削掉肉体的一截肢体。当削完所有手脚后，主角只能靠光翼支撑在半空沦为纯粹的固定法术炮台直到战役结束)。",
        runtimeEn: "IF (Continuously_casting_divine_wrath_AoE_in_siege_dead-end) THEN (Provide_Mechanic: Divine_skills_have_no_cooldown_or_mana_cost_but_each_cast_permanently_severs_a_physical_limb._After_all_limbs_gone_protagonist_floats_via_light_wings_as_a_purely_fixed_spell_turret_until_battle_ends)."
      }
    },
    {
      id: "the_petrified_husk_of_mortality",
      name: "强行蜕落的凡骸矿石空壳", nameEn: "Petrified Husk of Mortality",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "一具完美保留了极致痛苦与惊恐表情的灰烬/水晶化旧躯空壳。",
      defEn: "An ash/crystallized hollow outer shell of the old body, perfectly preserving expressions of extreme agony and terror.",
      core: "【表面诱惑】：彻底斩断凡俗情感与肉骨缺陷，迎来不生不灭的晶体化/高阶能量态新生。",
      coreEn: "【Surface Temptation】: Completely severing mundane emotions and visceral flaws, welcoming an immortal crystallized/high-energy rebirth.",
      logic: "【叙事抓手】：超脱如同痛苦万分的病变蜕皮。大乱斗中，主角肉体开始不受控的硬化。为了不被围剿的捕神大军吞没，主角必须极其暴力地砸碎自己的旧骨和皮肉，从血淋淋的胸腔和手臂中，硬生生扯出那发光的新神手臂去释放灭世神术。在极度血腥的自我剥骨中拥抱至高唯美的神貌。",
      logicEn: "【Narrative Affordance】: Transcendence is agonizingly diseased shedding. In a chaotic brawl, the body uncontrollably hardens. To avoid being swamped by god-hunting armies, the protagonist must violently smash their own old bones and skin, brutally tearing a glowing new divine arm from their bloody chest and old arm to unleash world-ending magic. Embracing supreme beautiful divinity amidst ultra-bloody self-flaying.",
      patch: {
        mechanics: "表层锚点 + [病态羽化 = 肉体结晶化带来的失速死局; 痛苦脱壳 = 必须自行砸碎旧躯才能启动高阶机能; 新旧杂糅 = 血肉模糊牵连着璀璨神光的极端对立]",
        mechanicsEn: "Surface_Anchor + [Diseased_Emergence = Solidification_causing_speed-loss_deadlock; Painful_Shedding = Must_smash_old_shell_to_activate_high_functions; Grotesque_Amalgam = Bloody_flesh_tangled_with_brilliant_divine_light]",
        aesthetic: "聚焦：乱军丛中，主角挥动铁锤重重砸烂自己已被石化的左半身，碎石乱飞中，一条纯粹由群星和真空碎片构成的全新巨臂从血浆模糊的断面中狰狞伸出。",
        aestheticEn: "Focus: Amidst the horde, protagonist swings a hammer to shatter their own petrified left half. Amidst flying debris, a massive new arm made purely of stars and vacuum fragments brutally extends from the gory cross-section.",
        runtime: "IF (进化倒计时触发，角色移动跌落至瘫痪级并覆盖一层抗性极高的石化表皮) THEN (提供机制：强制触发砸尸按键，每砸碎一块石皮，主角都会发出惨绝人寰的凄鸣，但随之解锁毁天灭地的新神技能槽，直到彻底从凡骸里钻出完成终结打击)。",
        runtimeEn: "IF (Evolution_countdown_triggers_movement_drops_to_paralysis_covered_in_high-resist_petrified_skin) THEN (Provide_Mechanic: Force_corpse-smashing_QT._Every_shell_crushed_prompts_an_agonizing_howl_but_unlocks_doomsday_new-god_skill_slots_until_fully_hatching_from_the_mortal_husk_to_land_the_killing_blow)."
      }
    },
    {
      id: "the_omniscient_blindfold_of_thorns",
      name: "全知者的盲目刺布", nameEn: "Omniscient Blindfold of Thorns",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "染满神血/幽能的布条或高维眼罩，内侧长满尖锐的神经对接刺与倒钩。",
      defEn: "Fabric or high-D blindfold soaked in divine blood / psionic energy, inner side covered with sharp neural docking thorns and barbs.",
      core: "【表面诱惑】：遮蔽被三维光线欺骗的肉眼，开启一切宇宙真理、因果线和破绽绝杀的“全视之眼”。",
      coreEn: "【Surface Temptation】: Blinding the mortal eyes deceived by 3D light, opening the 'All-Seeing Eye' to cosmic truths, karmic threads, and instant-kill flaws.",
      logic: "【叙事抓手】：强行开启真理视界，超载的绝对信息流如千万根烧红钢针刺入大脑。面对隐没于高维夹层的噩梦暴君，主角在无边的恐慌重压下，将满是倒刺的盲布死死勒紧在双眼上。双目被完全刺瞎呕出血泪的同时，世界褪去色彩与物质，只剩下纯粹真理线条的主宰狂喜。每一次看穿死劫，都是对仅存人智的深渊磨损。",
      logicEn: "【Narrative Affordance】: Forcing truth-vision drops an overload of absolute data like millions of red-hot needles into the brain. Facing the Nightmare Tyrant hidden in higher dimensions, under boundless panic, protagonist viciously tightens the barbed blindfold over their eyes. Eyes blinded, weeping blood-tears, the world loses color and matter, leaving only the domineering ecstasy of pure truth lines. Every death-evasion seen destroys the remaining mortal sanity.",
      patch: {
        mechanics: "表层锚点 + [刺瞎双眸 = 以物理失明换取真理全知; 高维视角 = 万物解构为线与点的极简猎杀场; 理智烧融 = 凡脑不可直视神理的崩塌]",
        mechanicsEn: "Surface_Anchor + [Blinded_Eyes = Trading_physical_sight_for_truth_omniscience; High-D_View = Universe_deconstructed_into_minimalist_hunting_vectors; Sanity_Melt = Mortal_brain_collapsing_from_processing_divinity]",
        aesthetic: "聚焦：主角两行浓稠的血泪从眼带下淌出，身侧原本恐怖的阴影怪物，在其“看”去的一瞬，脆弱得如同一张写满红叉折线漏洞的几何图纸。",
        aestheticEn: "Focus: Two thick trails of blood tears stream from beneath the blindfold. The horrific shadow monsters flanking them, the instant they are 'looked' at, become as fragile as geometric blueprints covered in red-crossed vulnerabilities.",
        runtime: "IF (在黑暗深渊决战戴上全知盲布) THEN (提供机制：画面全部变成黑白线框并高亮所有敌方核心弱点，原本无解的攻击轨迹变成可见红线。但UI系统中的‘san值’会以极高速度燃烧，若战斗未能在归零前结束，主角大脑将直接爆裂化作一朵虚空之花)。",
        runtimeEn: "IF (Wearing_omniscient_blindfold_in_dark_abyss_showdown) THEN (Provide_Mechanic: Screen_turns_wireframe_highlighting_all_enemy_core_flaws._Un-dodgeable_attacks_become_visible_red_lines._However_SAN_meter_burns_down_insanely_fast._If_fight_isn't_won_before_zero_brain_explodes_into_a_void_flower)."
      }
    },
    {
      id: "the_hollowed_chamber_of_the_heart",
      name: "神格入驻的悬空心室", nameEn: "Hollowed Chamber of the Heart",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "主角胸口强行剜去活肉留下的恐怖圆形空洞，内里不再有心脏，仅悬浮着璀璨神格/反物质微缩群星。",
      defEn: "A horrific hollow circular cavity where living flesh was gouged from the chest. No heart beats inside, only a brilliantly floating Godhead or antimatter micro-star.",
      core: "【表面诱惑】：告别疲惫与疾病，拥有永动机般、近乎无尽喷涌的至高能量源泉，以凡人之躯驾驭恒星之力。",
      coreEn: "【Surface Temptation】: Farewell to fatigue and disease. Possessing a perpetual-motion supreme energy source, wielding stellar power in a mortal frame.",
      logic: "【叙事抓手】：然而凡躯极难承受恒星级神格的高热。越是催动这份伟力，胸腔边缘的肉就不可避地烧焦卷曲。面对撕裂天幕的巨型混沌旧日神，主角被迫选择“超频输出”，其直接代价是核心在物理上融解自己的内脏，直至整具躯体如同一根插在太阳里的蜡烛般开始熔化。",
      logicEn: "【Narrative Affordance】: But a mortal shell cannot bear the stellar heat of a Godhead. The harder they push this power, the chest edges inevitably char and curl. Facing the giant chaotic elder god tearing the sky, protagonist is forced to 'overclock'. The direct cost is the core physically melting its own internal organs, until the entire body begins melting like a candle jammed into the sun.",
      patch: {
        mechanics: "表层锚点 + [恒星引擎 = 植入不可触碰的危险核心; 熔解过载 = 力量越大肉体消融越深; 自焚神降 = 燃烧血肉灯芯以照亮诸天]",
        mechanicsEn: "Surface_Anchor + [Stellar_Engine = Implanting_an_untouchable_hazardous_core; Melt_Overload = Greater_power_deepens_flesh_melting; Self-Immolating_Descent = Burning_the_flesh_wick_to_light_the_heavens]",
        aesthetic: "聚焦：在比超新星还耀眼的白光爆发中心，主角的身形已经完全碳化发亮，胸口那个炽白的空洞如同黑洞般吸扯着万物，他正以一具消融骨架的姿态向巨神挥出毁灭一拳。",
        aestheticEn: "Focus: In the epicentre of a white burst brighter than a supernova, protagonist's silhouetted form has fully carbonized and glows. The stark white chest cavity pulls like a black hole. They throw a devastating punch at the Colossus in the posture of a melting skeleton.",
        runtime: "IF (主动触发胸腔大开的‘神界过载’模式以求终极破局) THEN (提供机制：无限火力与秒杀判定开启，伴随而来的屏幕高温扭曲视效，生命条被替换为急剧缩减的‘肉体残存率’，玩家必须在自己被烧融得仅剩一颗头骨绝命前轰杀神话级BOSS)。",
        runtimeEn: "IF (Actively_open_chest_cavity_for_Divine_Overload_mode_for_ultimate_breakthrough) THEN (Provide_Mechanic: Infinite_firepower_and_insta-kill_unlocked_accompanied_by_high-heat_screen_warp._HP_bar_replaced_with_rapidly_shrinking_'Flesh_Integrity_Rate'._Player_must_nuke_the_mythic_BOSS_before_melting_down_to_just_a_doomed_skull)."
      }
    },
    {
      id: "the_rent_womb_shrine_of_the_star-born",
      name: "孕育星嗣/真理的残破腹龛", nameEn: "Rent Womb-Shrine of the Star-Born",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "腹部被刻满不可名状咒文高高隆起，内里投射出令常人直视即发疯的非几何光辉球体。",
      defEn: "Belly bulging high, carved with unnameable runes, projecting a non-geometric radiant sphere from within that drives ordinary onlookers mad.",
      core: "【表面诱惑】：成为新纪元造物主/深渊巨神的先知载体，共生期可动用那足以抹杀世界的“幼神波动”。",
      coreEn: "【Surface Temptation】: Becoming the prophet-vessel of a new era creator / abyssal god. During symbiosis, one can wield 'Infant God Pulses' capable of wiping worlds.",
      logic: "【叙事抓手】：降生即母体的破拆废墟化。保护体内光辉抵达升华之巅时，大地震颤，主角开始承受近乎粉碎骨盆、溶解内脏的分娩级剧痛。为了让这高维胎儿向高天发射出终极指令，主角必须活生生亲手撕烂被光芒烧脆的腹腔皮肉，如捧出心脏般将幼神暴露于万军仰望之中。",
      logicEn: "【Narrative Affordance】: Birth is the destructive ruining of the mother-vessel. Protecting the inner radiance to the ascension peak, the earth shakes, protagonist suffers childbirth-level agony—shattering pelvis, dissolving organs. To let this higher-dimensional fetus fire its ultimate command to the heavens, protagonist must tear open their own light-crisped abdominal flesh bare-handed, lifting the infant god from the ruins of their innards like offering a heart to the armies above.",
      patch: {
        mechanics: "表层锚点 + [活体龛盒 = 以腹中死劫孕育终极兵器; 分裂痛楚 = 降神即肉体绝地大破拆; 撕裂拥抱 = 亲手剥开自己释放未来]",
        mechanicsEn: "Surface_Anchor + [Living_Shrine = Breeding_ultimate_weapon_in_abdominal_death-trap; Tearing_Agony = God-descent_means_extreme_body_demolition; Rending_Embrace = Manually_flaying_self_to_release_the_future]",
        aesthetic: "聚焦：无数圣骑士/猎神者绝望的注视列阵中，主角凄艳大笑着拉开血肉模糊的腹沟，刺穿整片幽暗战场的至高光柱从里面那如同心脏搏动的几何晶体中暴射而出。",
        aestheticEn: "Focus: Amidst the desperate gazes of countless paladins/god-hunters, protagonist laughs hauntingly while pulling open the gory abdominal cleft. A supreme pillar of light, piercing the dark battlefield, blasts from the violently pulsating geometric crystal inside.",
        runtime: "IF (登临穹顶祭坛进入神降释放流程) THEN (提供机制：强制无法移动，玩家需要节奏完美地交替按下撕开伤口与压制内出血的按键组合，失败即由于剧痛休克导致流产式暴毙，成功则触发让满屏敌对单位当场原地化为盐柱的光辉剧情杀)。",
        runtimeEn: "IF (Reaching_dome_altar_entering_God-Release_flow) THEN (Provide_Mechanic: Movement_locked._Player_must_rhythmically_alternate_keys_to_tear_wound_and_suppress_internal_bleeding._Failure_causes_pain-shock_abortive_death._Success_triggers_radiant_story-kill_turning_every_enemy_on_screen_into_pillars_of_salt)."
      }
    },
    {
      id: "the_ascending_stairway_of_flaying_winds",
      name: "剥皮削骨的飞升阶梯", nameEn: "Ascending Stairway of Flaying Winds",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "通向真理之门/虚空节点那隐没在高维乱流中的无形登神长廊。",
      defEn: "An invisible ascension corridor leading to the Gate of Truth / Void Node, hidden within high-dimensional turbulence.",
      core: "【表面诱惑】：走完此路，即可推开永生与全能的大门，与惨烈苦弱的现世泥沼完美恩断义绝。",
      coreEn: "【Surface Temptation】: Walk this path to push open the gates of immortality and omnipotence, perfectly severing all ties with the tragic, weak mud of the real world.",
      logic: "【叙事抓手】：阶梯刮噬着超维因果风。系统法则判定“凡骨太重，无法带走一丝尘业进入彼岸”。最后的一百阶绝命路，主角每向神门跃登一步，风暴便如刀割走一件护甲，接着是血肉、脏器。最终必须是一副被剃得晶亮透彻的白骨，顶着足以逆转时空的乱风，燃烧最后的灵魂烛火推开那重逾万钧的大门。",
      logicEn: "【Narrative Affordance】: The staircase howls with hyper-dimensional karmic winds. System law decrees 'Mortal bones are too heavy, carry no worldly karma to the other shore.' On the final 100 desperate stairs, every step upward, the storm acts as a blade: stripping a piece of armor, then flesh, then organs. At the end, it must be a sparkling clear white skeleton pushing open the ten-thousand-ton gates against time-reversing gales, powered by the last flicker of soul-fire.",
      patch: {
        mechanics: "表层锚点 + [超维凌迟 = 步步高升步步剥皮; 凡躯太重 = 抛弃所有物质防线; 以骨叩门 = 极致纯粹的朝圣苦极]",
        mechanicsEn: "Surface_Anchor + [Hyper-D_Death_by_Thousand_Cuts = Climbing_higher_while_flaying_deeper; Mortal_Shell_Too_Heavy = Abandoning_all_material_defenses; Knocking_with_Bones = The_purest_extreme_pain_of_pilgrimage]",
        aesthetic: "聚焦：万仞狂风的真理门前，一架闪烁着灵魂火光的骷髅正一步一跪地顶着光压前行，身后台阶上落满了一路走丢的带血战袍与零落的血肉内脏。",
        aestheticEn: "Focus: Before the Gate of Truth in razor gales, a skeleton flickering with soul-fire crawls step by kneeling step against the light-pressure. The stairs behind are littered with discarded bloody tabards, scattered flesh, and organs.",
        runtime: "IF (踏上最后一百阶飞升路段) THEN (提供机制：系统强制清空物品栏与所有防护值，玩家在震耳欲聋的神罚风暴声中推杆前进，越推阻力越大，角色模型随进度实时被物理刮解成骨架，若停顿超过三秒便会熄火卷入虚空底层灰飞烟灭)。",
        runtimeEn: "IF (Stepping_onto_the_final_100-stair_ascension_stretch) THEN (Provide_Mechanic: System_forcibly_empties_inventory_and_all_defense_stats._Player_pushes_joystick_forward_amidst_deafening_Divine_Storm_audio._Resistance_increases_as_character_model_is_real-time_flayed_down_to_skeleton._Stopping_for_>3_seconds_snuffs_out_the_fire_sweeping_them_into_the_void_abyss)."
      }
    },
    {
      id: "the_crystal_throne_of_absolute_stasis",
      name: "绝对静止的结晶王座", nameEn: "Crystal Throne of Absolute Stasis",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "由凝固的时空法则所切削成的至高神座，无时无刻散发着吞噬一切温度与动能的极寒之理。",
      defEn: "Supreme divine seat carved from solidified laws of space-time, constantly radiating extreme cold logic that devours all temperature and kinetic energy.",
      core: "【表面诱惑】：坐上去，即可化身“完美不朽”，俯览万古时空，灾厄不侵。",
      coreEn: "【Surface Temptation】: Sit upon it to incarnate 'Perfect Immortality', overlooking aeons of space-time, untouched by disaster.",
      logic: "【叙事抓手】：不朽代价是物理形态的冻结。为阻挡时空崩塌挽救前线战场，主角一旦坐下启动威能，腰部以下瞬间数据化结晶死锁于王座之上。此长达十分钟的最终防守，主角已然是一尊无法挪动半寸的半躯雕塑。在浩瀚涌来的崩坏大军面前狂野挥刃，直到冰冷的结晶线蔓延过脖颈乃至吞去面目，化作一尊阻挡虚空的完美神像。",
      logicEn: "【Narrative Affordance】: Immortality costs physical freezing. To halt space-time collapse and save the frontline, the instant protagonist sits to activate power, from the waist down they instantly crystallize and data-lock to the throne. In this 10-minute final defense, they are a half-torso statue unable to move an inch. Wildly swinging blades at the infinite collapsing horde, until the cold crystalline line creeps past their neck and face, becoming a perfect idol blocking the void.",
      patch: {
        mechanics: "表层锚点 + [不朽即冻结 = 王座也是万年无法起身的冰牢; 炮台决死战 = 放弃机动性的极限火力网; 化神为雕 = 数据侵蚀将血肉彻底塑封为圣迹]",
        mechanicsEn: "Surface_Anchor + [Immortality_is_Freezing = Throne_is_a_millennia_ice-prison; Turret_Death-stand = Abandoning_mobility_for_extreme_firepower; God_into_Statue = Data_erosion_plastic-sealing_flesh_into_relic]",
        aesthetic: "聚焦：崩解的宇宙星盘前，璀璨却绝望的王座上，主角如同固定防空神塔般挥洒毁灭剑气/法术，而那张脸已有一半成了不反光的幽暗钻石。",
        aestheticEn: "Focus: Before the crumbling cosmic astrolabe, on the brilliant yet despairing throne, protagonist releases devastating sword-waves/spells like a fixed anti-air divine tower. Half their face is already a non-reflective dark diamond.",
        runtime: "IF (在终结防卫战坐上静止王座启动机制) THEN (提供机制：强锁下半身移动轴，角色只能扭转视角倾泻强化十倍的绝杀技能狂潮，伴随着时间流逝结晶层不断向上蔓延，玩家的准星灵敏度也会越来越迟钝沉重，直到彻底定格迎来胜利黑场)。",
        runtimeEn: "IF (Sitting_on_the_Stasis_Throne_to_initiate_final_defense) THEN (Provide_Mechanic: Hard-locks_lower_axis_movement._Character_can_only_pivot_view_to_unleash_10x_amplified_assassination_skills._As_crystal_layer_creeps_upward_over_time_crosshair_sensitivity_gets_heavier_and_sluggish_until_fully_frozen_ushering_in_the_victory_black-screen)."
      }
    },
    {
      id: "the_severed_tongue_of_swallowed_oracles",
      name: "倒咽真言的残截断舌", nameEn: "Severed Tongue of Swallowed Oracles",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "为了含下那颗超高温神谕宝珠/根源死海代码而在口中惨遭自我嚼烂的咽血舌跟。",
      defEn: "The bloody chewed stump of a tongue, gnawed off to swallow an ultra-high heat oracle orb / root Dead Sea code.",
      core: "【表面诱惑】：掌握造物主之言，口含天宪言出法随，一张嘴就能修改并宣判世界的底层物理规则。",
      coreEn: "【Surface Temptation】: Mastering the Creator's words. Word carries the weight of heaven; whatever is spoken alters and sentences the universe's baseline physical rules.",
      logic: "【叙事抓手】：凡俗肉嗓共振真理必将招致天罚。为承载伟力拯救必死之局，主角在释放神圣命令前，必须满嘴鲜血地将自己原有的发声器官咬断咽下并塞入宝珠。发动“言出法随”剥夺魔军概念，代价就是每一字吼出，伴随的尽是从破烂喉管里如同火山般喷涌退烧的血雾，最后只剩下嘶哑恐怖的骨骼风箱声。",
      logicEn: "【Narrative Affordance】: Mortal vocal chords resonating truth invite divine wrath. To bear the power and save the doomed, before uttering holy commands, protagonist must bite off their own vocal organ, swallowing it in a mouthful of blood to wedge the orb. Activating 'Words of Law' to strip demon-armies of their concepts costs volcano-like blood-mist spewing from their ruptured throat with every syllable, leaving only the terrifying snarl of skeletal bellows.",
      patch: {
        mechanics: "表层锚点 + [言出法随 = 最极致的规则修改特设; 嚼舌承载 = 以废除生理结构让路给神谕共震; 血雾嘶吼 = 用命咆哮出世界的重构敕令]",
        mechanicsEn: "Surface_Anchor + [Word_is_Law = Ultimate_rule-modifying_feature; Chewing_Tongue = Scrapping_physiology_for_oracle_resonance; Blood-mist_Roar = Roaring_the_world_rebuild_edict_with_lifeblood]",
        aesthetic: "聚焦：百万魔军覆灭的刹那极光下，主角仰天张开黑洞洞犹如烂窟窿的嘴巴，一串金色的代码/神文夹杂着喷射的黑血，重重砸在天地之间。",
        aestheticEn: "Focus: Under the aurora of a million demon-army annihilation, protagonist throws head back opening a black bloody crater of a mouth. A sequence of golden code/divine runes, mixed with spewing black blood, slams heavily into the space between heaven and earth.",
        runtime: "IF (在剧情杀绝境触发‘神级言灵’修改系统底层机制) THEN (提供机制：屏幕上出现巨大的真理音波，玩家每按键盘随机生成一个灭杀指令词条，角色的血条上限就像被撕咬般凹陷一块，音效从嘹亮的人声逐渐扭曲成极为吓人的电磁干扰与凄厉吐血音效的融合)。",
        runtimeEn: "IF (Triggering_God-Tier_Words_to_mod_base_system_mechanics_in_dead-end_story_kill) THEN (Provide_Mechanic: Giant_truth_soundwaves_appear._Every_key_press_generates_an_eradication_command_text_while_Max_HP_bar_is_bitten_away._Audio_distorts_from_ringing_human_voice_into_terrifying_EMP_interference_merged_with_blood-spitting_chokes)."
      }
    },
    {
      id: "the_faceless_robe_of_five_fold_tribute",
      name: "献祭五感的无相长袍", nameEn: "Faceless Robe of Five-Fold Tribute",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "由纯粹光点或虚空阴影织成的长袍，穿戴者的面部将化作一团无脸的虚无深洞。",
      defEn: "A robe woven of pure starlight or void shadows. The wearer's face dissolves into a faceless void crater.",
      core: "【表面诱惑】：肉躯融入长袍化作虚空形态，免疫一切物理伤害判定，降维打击世间俗物。",
      coreEn: "【Surface Temptation】: Flesh merges with robe into void-form, immunizing all physical damage hitboxes, exerting devastating dimensional strikes upon worldly things.",
      logic: "【叙事抓手】：天衣无缝的代价是以感知为食。披袍参战十分钟，听觉死寂；二十分钟面对处刑官单挑，痛觉与触觉全部剥离断头。神力攀升巅峰的此刻，主角成了一具被绝对感官剥夺囚禁的盲瞎聋尸。连自己是否在掉血、是否在挥刀也无法反馈，全凭极端的黑暗盲走与执念肌肉记忆去精准切碎虚空大统领。",
      logicEn: "【Narrative Affordance】: Flawless divine robe feeds on sensory input. 10 mins in battle: hearing goes dead. 20 mins dueling the executioner: pain and touch are completely decapitated. At the peak of diving power, protagonist is a deaf/blind corpse trapped in absolute sensory deprivation. Without even knowing if they are bleeding or swinging a blade, they rely purely on extreme dark blind-walking and obsessive muscle memory to precisely dice the Void Commander.",
      patch: {
        mechanics: "表层锚点 + [绝对无敌 = 放弃物理反馈换得至高免疫; 黑暗牢笼 = 被封死五感去征战天下; 盲修罗 = 靠着死前执念在虚空黑箱中挥刃]",
        mechanicsEn: "Surface_Anchor + [Absolute_Invincibility = Discarding_physical_feedback_for_supreme_immunity; Dark_Prison = Sealed_five_senses_to_conquer_the_world; Blind_Ashura = Swinging_blades_inside_a_void_black-box_by_sheer_obsession]",
        aesthetic: "聚焦：那件极度飘逸神圣的长袍内，无脸无声的影子仿佛一台优雅的屠宰机器正在剥离狂暴的神明军团。而在主角主视角的脑海中，唯有一片令人崩溃甚至听不到心脏跳动的绝对死寂。",
        aestheticEn: "Focus: Inside the extremely ethereal sacred robe, the faceless, soundless shadow elegantly butchers raging divine legions like an elegant machine. But inside the protagonist's POV mind, there is only a maddening absolute dead silence where not even a heartbeat is heard.",
        runtime: "IF (披上无相长袍迎战最终关底) THEN (提供机制：强行关闭游戏所有BGM、音效以及受击UI红框。屏幕在极高对比度爆光后变成纯粹没有任何振动反馈的黑域走廊视效，玩家只能在恐怖的无声状态依靠极度变态的节奏背板完成斩神战)。",
        runtimeEn: "IF (Donning_faceless_robe_to_fight_final_boss) THEN (Provide_Mechanic: Forcibly_mute_all_BGM_SFX_and_hit-marker_UI._Screen_bursts_with_contrast_then_turns_into_a_pure_un-vibrating_dark-domain_corridor_visual._Player_must_complete_the_god_slaying_in_terrifying_silence_relying_on_sickeningly_memorized_rhythm_patterns)."
      }
    },
    {
      id: "the_navel-cord_to_the_cosmic_matrix",
      name: "倒吸人性的断生神脉脐带", nameEn: "Navel-Cord to the Cosmic Matrix",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "从天空/深渊母体垂下的散发高亮异光的粗硕大导管，残暴地接插在主角肚脐/心坎的核心孔洞中。",
      defEn: "A thick, violently bright pipeline hanging from the sky/abyssal mother, brutally plugged into the protagonist's navel/heart core-hole.",
      core: "【表面诱惑】：接受超脱母神的脐带连结，获取几近无限的能量补给，挥砍间挟带星系级重量当场神挡杀神。",
      coreEn: "【Surface Temptation】: Accepting the transcendent mother's umbilical cord grants near infinite energy resupply; swings carry galactic weight killing gods on the spot.",
      logic: "【叙事抓手】：双向掠夺连结。赐予神力的同时，母神正源源不断抽走主角仅存的人性残片。脐带光芒越盛，在现世狂猛挥刀的主角肉体就越枯瘪干瘦。大乱斗中，每碾碎一名劲敌，系统便弹出一幕主角记忆底盘被无情感电子音/冷漠神咒覆盖的恐怖画面。最终完成天灾清场之际，也就是主角彻底干枯为无情“容器”的自我死亡同步抵达点。",
      logicEn: "【Narrative Affordance】: Two-way predatory link. Supplying divinity while the mother god continuously siphons protagonist's remaining shards of humanity. The brighter the cord glows, the more the wildly swinging flesh wilts and dries. In the massive brawl, crushing every formidable foe triggers a horror pop-up of the protagonist's memory bedrock being overwritten by emotionless electronic tones/cold divine mantras. Completing the cataclysmic sweep perfectly syncs with protagonist completely withering into a hollow, emotionless 'vessel'—ego dead.",
      patch: {
        mechanics: "表层锚点 + [超限挂载 = 与高维不可名状共用能源; 抽髓洗灵 = 神力输入即是人性抽取; 容器末路 = 清空异端的同时抹除了自我]",
        mechanicsEn: "Surface_Anchor + [Over-limit_Mounting = Sharing_power_with_unnameable_high-D; Marrow-Drain_Spirit-Wash = Divine_input_is_human_extraction; Vessel's_Dead-end = Clearing_heretics_while_erasing_self]",
        aesthetic: "聚焦：焦土平原上如同狂舞死神般的主角背挂惊天动地的光之脐带。但拉近看，他已经瘦得双眼深陷、皮包骨头，毫无波动的死人眼球倒映着万军灰飞烟灭的华丽火雨。",
        aestheticEn: "Focus: On scorched plains, protagonist dances like reaper with a world-shaking cord of light attached to back. Zoom in: they are emaciated, eyes sunken, skin and bones. The unwavering dead eyes reflect the glorious rain of fire destroying armies.",
        runtime: "IF (插上脐带开始最终的大割草清算) THEN (提供机制：角色战斗力直接拉满全屏割草，但右侧不停弹出主角的‘过往牵绊档案’如被删除般逐条变灰。当杀到最高潮时一切归于白屏定格，主线任务从‘挽救世界’瞬间被系统静默修改为‘完成同化重置’)。",
        runtimeEn: "IF (Plugging_umbilical_cord_for_final_lawn-mower_clearing) THEN (Provide_Mechanic: Character_power_maxed_for_full-screen_wiping_but_right_side_constantly_pops_up_protagonist's_'Past_Bond_Archives'_greying_out_deleted_line-by-line._At_climax_fades_to_white_freeze-frame_main_quest_silently_mods_from_'Save_World'_to_'Complete_Assimilation_Reset')."
      }
    },
    {
      id: "the_crown_of_molten_psionic_nails",
      name: "熔断灵能的神迹棘冠", nameEn: "Crown of Molten Psionic Nails",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "必须用手将六十四根烧出白虹的灵能长钉强行凿进头皮与天灵盖才能加冕的神圣冠冕。",
      defEn: "A sacred crown requiring the wearer to manually hammer sixty-four white-hot psionic long-nails directly into their scalp and skull to be crowned.",
      core: "【表面诱惑】：获取主神级别的极化思想控制权，瞬间让成千上万的暴神与舰队在精神层面上跪拜臣服。",
      coreEn: "【Surface Temptation】: Gaining God-tier polarized mind control, instantly forcing thousands of raging gods and fleets into mental submission and worship.",
      logic: "【叙事抓手】：获取超脑威压的代价是物理上的极限脑爆。每一波精神支配扩散，钉子就会在重压下更深地嵌进大脑几分。为了让即将坠毁的灭世战舰集体宕机，主角满脸鲜血地将冠冕狠狠向脑袋里深按，眼球布满血丝几近榨爆。以烧毁自身记忆中枢和痛觉神经为代价，强制充当高维网络的中继器。",
      logicEn: "【Narrative Affordance】: The cost of overmind pressure is extreme physical brain-bursting. Every wave of mental domination pushes the nails deeper into the brain matter under immense pressure. To crash the descending doomsday fleet, the protagonist presses the crown brutally deeper into their bloody head, eyes bloodshot and near-bursting. Burning their own memory centers and pain receptors to forcibly act as a high-dimensional network relay.",
      patch: {
        mechanics: "表层锚点 + [受刑加冕 = 以撕裂头骨作为强行篡权的代价; 脑部熔断 = 镇压万物的同时自身心智亦在焚烧; 血泪神瞳 = 满眼绝望地注视着众生臣服]",
        mechanicsEn: "Surface_Anchor + [Crowning_by_Torture = Tearing_skull_as_cost_for_usurpation; Brain_Meltdown = Burning_own_mind_while_suppressing_all; God-Eyes_of_Blood = Gazing_despairingly_at_subjugated_masses]",
        aesthetic: "聚焦：天穹崩塌之际，主角孤傲站在悬崖边，双手指缝间喷涌着扎爆头皮的浓血。底下的千军万马如中邪般齐刷刷跪下，而加冕者那只剩下惨绝嘶吼的嘴脸在金光中扭曲至极。",
        aestheticEn: "Focus: As the sky collapses, protagonist stands aloof on the cliff, thick blood from the punctured scalp gushing through their fingers. The massive armies below drop to their knees as if bewitched, while the newly crowned one's face twists into the most tragic, howling grimace in golden light.",
        runtime: "IF (戴上棘冠释放全图超能支配役使群敌) THEN (提供机制：开启大招的期间屏幕被耀眼的金色精神网覆盖，视野内的敌军自相残杀，但玩家角色陷入‘脑出血’硬直不可动弹。按住控制键越久，对敌范围与伤害越大，但同时极速扣除自身生命上限并伴有惊悚的颅骨碎裂音效)。",
        runtimeEn: "IF (Donning_thorn-crown_to_unleash_map_wide_mind-control_domination) THEN (Provide_Mechanic: Ult_covers_screen_in_blinding_gold_neural_network_making_enemies_slaughter_each_other._But_player_is_locked_in_'Brain_Hemorrhage'_stagger._The_longer_control_is_held_the_wider/stronger_the_domination_but_drastically_drains_Max_HP_accompanied_by_terrifying_skull-cracking_audio)."
      }
    },
    {
      id: "the_glass_lungs_of_stellar_breath",
      name: "吞吐真理的易碎琉璃肺", nameEn: "Glass Lungs of Stellar Breath",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "在祭祀仪式上手动挖出浊劣肉肺，并强行塞入一对如薄玻璃般透明、闪烁着宇宙星带的高维机械假体肺叶。",
      defEn: "During a ritual, the impure fleshy lungs are physically gouged out and forcibly replaced with a pair of transparent, ultra-thin high-D glass mechanical lobes shimmering with cosmic star-belts.",
      core: "【表面诱惑】：摒弃浑浊的尘世氧气，每一次呼吸都能吐纳纯粹的空间星流，一口气吹出即可引发核爆级歼灭波。",
      coreEn: "【Surface Temptation】: Discarding cloudy earthly oxygen; every breath inhales and exhales pure spatial star-streams. A single exhale causes a nuke-level annihilation wave.",
      logic: "【叙事抓手】：至高神性易碎无比。这套琉璃肺无法承受过于剧烈的外部冲击和物理震荡。为了在狂暴血腥的近战绞肉机中存活并找到释放终极吐息的角度，主角必须极度压抑动作幅度，甚至忍着肋巴骨被砸断的剧痛屏极其漫长的一口气。在乱军中像个濒死木僵病人般毫无起伏地精确挪动。一旦因疼痛大肆喘息或被重击，琉璃就在胸腔内炸出内爆粉碎的惨叫深渊。",
      logicEn: "【Narrative Affordance】: Supreme divinity is fragile. The glass lungs cannot withstand severe external impact or physical shock. To survive the brutal meat-grinder melee and find the angle for the ultimate exhale, protagonist must severely limit motion, holding a desperately long breath even when ribs are smashed. Moving in the chaotic horde like a catatonic patient with no chest heave. If they gasp from pain or take a heavy hit, the glass shatters within the chest into a screaming abyss of implosion.",
      patch: {
        mechanics: "表层锚点 + [易碎神格 = 威海无量的核心有着最物理脆弱的质地; 屏息剧痛 = 在暴力的绞杀里被迫做毫无涟漪的极静隐忍; 胸腔玻璃渣 = 呼吸错乱即自毁死刑]",
        mechanicsEn: "Surface_Anchor + [Fragile_Godhead = Bottomless_power_core_has_the_most_physically_fragile_texture; Agonizing_Breath-hold = Forced_into_dead-silent_stillness_amidst_violent_slaughter; Chest_Glass_Shards = Breathing_error_equals_self-destruct_execution]",
        aesthetic: "聚焦：巨大的战锤擦着胸铠滑过，主角被震得口吐一小口夹杂着玻璃渣的脏血，但却拼死捂住嘴强忍住了抽搐。透视胸廓内，那绝美的星辰气流正被强压在裂纹密布的肺叶里等待最后绽放。",
        aestheticEn: "Focus: A giant warhammer grazes the chest armor. Shockwaves force protagonist to spit a mouthful of dirty blood mixed with glass shards, but they death-grip their own mouth to forcibly suppress the spasm. Inside the transparent chest, stunning stellar airflow compresses tightly within severely cracked glass lobes awaiting the final bloom.",
        runtime: "IF (植入琉璃肺开启深呼吸歼灭炮模式) THEN (提供机制：引入‘呼吸平稳条’。玩家被强制放慢所有攻击/闪避速度，每一次剧烈冲刺或受击都会积攒碎裂值。一旦条满直接胸腔炸裂秒杀。必须以犹如散步般极其诡异淡定的微操走位躲过枪林弹雨，在蓄满力后一击破灭寰宇万物)。",
        runtimeEn: "IF (Implanted_with_glass_lungs_to_enter_Deep-Breath_Annihilation_Cannon_mode) THEN (Provide_Mechanic: Introduces_'Breath_Stability_Bar'._Player's_attack/dodge_speed_hard-capped._Every_dash_or_taking-hit_builds_shatter_value._Max_bar = instant_chest_explosion_death._Must_use_eerily_calm_walking-pace_micro-dodging_through_bullet_hell_to_fully_charge_one_strike_that_obliterates_everything)."
      }
    },
    {
      id: "the_crucifixion_wheel_of_samsara_break",
      name: "挣脱轮回的破法痛轮", nameEn: "Crucifixion Wheel of Samsara-Break",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "一个粗暴嵌死在背部脊柱上、通过疯狂转动物理撕裂棘突来重写生死因果律的恐怖巨型金属经轮。",
      defEn: "A horrific giant metal prayer-wheel brutally wedged dead into the back's spine, rewriting life-and-death causality by spinning and physically tearing the spinal processes.",
      core: "【表面诱惑】：将名字从六道轮回拔除，即便被爆头、腰斩，也能在一个绝对的高潮状态下无限复活并施展时间倒流的回溯奇迹。",
      coreEn: "【Surface Temptation】: Tearing one's name from the 6 paths of Samsara. Even if headshot or bisected, can infinitely revive in an absolute climax state and cast time-reversing miracles.",
      logic: "【叙事抓手】：“不朽即是剥皮”。每次致命伤被重置、时间强行倒流时，背后的转轮就会像绞肉机一样疯狂启动。它不仅是时光机的发条，更是以绞碎主角的骨髓与神经丛为动力的刑具。迫使他在极度清醒的状态下，体会“把烂泥肉身原样硬拼回生前”的恐怖反转痛楚。当主角被最终处刑官连续斩首十次后，他必须在连续十次的背脊刮骨绞杀剧痛中爬起来，眼角狂飙血泪却硬生生挤出超脱因果的癫狂狞笑。",
      logicEn: "【Narrative Affordance】: 'Immortality is flaying'. Each time fatal wounds reset and time reverses, the back-wheel revs like a meat grinder. It's not just a time-spring; it's a torture device powered by grinding the protagonist's marrow and nerve clusters. Forcing them, fully conscious, to experience the horrific pain in reverse of 'violently snapping pulverized meat back into a living form'. Sliced decapitated 10 times by the ultimate executioner means getting up 10 times through excruciating spinal-flaying pain, blood-tears flying while forcing a manic smirk of causal transcendence.",
      patch: {
        mechanics: "表层锚点 + [受难发条 = 时间回退的物理机拓就是绞碎己身; 逆行肢解 = 满血复活的特效是残忍的尸体拼接痛楚; 十殿阎罗的嘲谑 = 死得越多笑得越疯]",
        mechanicsEn: "Surface_Anchor + [Passion_Clockwork = The_physical_mechanism_of_time-reverse_is_grinding_self; Retrograde_Dismemberment = Full_HP_revive_VFX_is_brutal_corpse-stitching_agony; Mockery_of_Hades = The_more_you_die_the_more_manic_the_laugh]",
        aesthetic: "聚焦：刚被腰斩的躯体在血泊中剧烈抽搐，背后的铁轮疯狂摩擦迸出火花卡进肉里，下半身硬生生带着断裂的肠子飞回上半身对接。主角在重连的咯吱骨裂声中狂徒般站起，满口鲜血喷在处刑官惊恐的脸上。",
        aestheticEn: "Focus: A bisected torso spasms violently in a blood pool. The iron wheel on the back spins madly, shooting sparks and digging into flesh. The lower body, dragging severed intestines, violently snaps back to the upper half. Protagonist stands up like a lunatic amidst the crunching of bone re-connecting, spitting a mouthful of blood into the terrified executioner's face.",
        runtime: "IF (装备破法痛轮以死招战法迎敌) THEN (提供机制：取消常规闪避无敌帧，鼓励玩家‘用脸接终结技’。每次致死瞬间屏幕破碎进入时空回退，倒放中播放主角恐怖压抑的骨碎惨叫音效。复活后获得极高额度‘疯狗加成’斩击伤害，但因为神经剧痛，画面会持续产生极强的视差摇晃与扭曲色阶)。",
        runtimeEn: "IF (Equipped_with_crucifixion_wheel_using_suicide-tactics) THEN (Provide_Mechanic: Disables_normal_dodge_i-frames_encouraging_'Face-tanking_Ultimates'._On_death_screen_shatters_entering_time-rewind_playing_horrific_bone-crushing_screams._Post-revive_grants_massive_'Mad-Dog_Multiplier'_slash_damage_but_due_to_nerve_agony_screen_suffers_extreme_parallax_shake_and_chromatic_aberration)."
      }
    },
    {
      id: "the_golden_chrysalis_of_flesh_sublimation",
      name: "将血肉煮沸的金铸蛹茧", nameEn: "Golden Chrysalis of Boiling Sublimation",
      group: "11. 神性与超脱升华", groupEn: "11. Divinity & Transcendence",
      def: "一旦启动就会在体表瞬间浇铸千度高温金液，将活人彻底焖封其中的液态金属升华棺。",
      defEn: "A liquid metal ascension coffin that, once triggered, instantly pours thousand-degree hot gold-liquid over the body, permanently sealing the living human inside.",
      core: "【表面诱惑】：在蛹茧内完成最完美无瑕的基因突变和神性灌装，这是从凡俗物种进化成无敌六翼天使的唯一绝对防御孵化舱。",
      coreEn: "【Surface Temptation】: Completing utterly flawless genetic mutation and divine filling inside the chrysalis. The only absolute-defense incubation pod to evolve from mundane species to an invincible 6-winged seraph.",
      logic: "【叙事抓手】：孵化过程极其漫长且极度变态。在这绝对幽闭、重压与绝高温的金属牢底，主角的凡人皮囊、肌肉和脂肪如同在铁高压锅里被活活炖煮成烂汤。外界看来，一具金光闪闪的美丽圣茧正在天火中接受万神朝拜；而在神圣表壳之下，主角正在黑暗高温的泥浆里绝望撕咬翻滚，惨叫声全被密封。最终，那一对属于神圣新世代的巨大羽翼，硬生生是从恶臭熟烂的旧体血浆浆糊中斩开金茧、破壁而出。",
      logicEn: "【Narrative Affordance】: Incubation is excruciatingly long and twisted. Locked in absolute claustrophobia, crush pressure, and pure heat, protagonist's mortal skin, muscle, and fat are literally stewed to a pulp like in an iron pressure cooker. Externally, a stunning golden holy chrysalis sits amidst heavenly fire worshipped by pantheons. Internally, underneath the sacred shell, protagonist desperately bites and thrashes in hot dark sludge, screams completely soundproofed. Ultimately, the giant wings of the new divine era savagely slice open the golden wall from inside the rotten boiled soup of the old flesh.",
      patch: {
        mechanics: "表层锚点 + [活体高压锅 = 极致封闭与绝高温度煮烂身躯; 绝望闷杀 = 神圣威严外表下的内部哀嚎无解战; 破茧成魔 = 从自我炖汤里爬出的绝美神明]",
        mechanicsEn: "Surface_Anchor + [Living_Pressure_Cooker = Extreme_closure_and_heat_stewing_flesh; Desperate_Suffocation = Unsolvable_internal_screams_beneath_sacred_majestic_exterior; Bursting_Cocoon_as_Fiend = The_stunning_god_crawling_from_stewed_self-soup]",
        aesthetic: "聚焦：完美的纯金椭圆巨茧剧烈颤动着，表面终于出现龟裂。随即，六片染满了粘稠暗红色肉泥与油脂的光明圣翼暴戾地将其撕成两半。降生的高阶天使沾满人类生前被煮沸的秽物，唯独眼神至高冰冷。",
        aestheticEn: "Focus: The perfect solid-gold oval cocoon trembles violently until surface cracks form. Immediately, 6 radiant holy wings smeared with sticky dark-red meat-sludge and grease brutally rip it in half. The born seraph is drenched in the boiled filth of its former human life, only its gaze is supremely, chillingly cold.",
        runtime: "IF (残血强制启动‘金茧孵化转阶段’以图后期大劣势翻盘) THEN (提供机制：主角被就地化为完全不能动、承受海量攻击的巨大金壳木桩。玩家视角进入全黑的极高温热成像模糊滤镜中，需要疯狂按键度过惨绝人寰的‘沸腾煎熬倒计时’。期间会有凄惨的被煮熟音效。读条完毕后引发全屏超巨核爆，玩家以血条翻倍、形态大变的至高铁血神明姿态出舱虐杀全场)。",
        runtimeEn: "IF (Force-activating_Golden_Cocoon_incubation_at_low_HP_for_late-game_comeback) THEN (Provide_Mechanic: Protagonist_turns_into_an_immobile_giant_gold-shell_tanking_massive_damage._Player_POV_enters_pitch-black_high-heat_thermal_blur_filter_requiring_frantic_button_mashing_to_endure_the_agonizing_'Boiling_Stew_Countdown'._Accompanied_by_gruesome_cooking_meat_SFX._Upon_completion_a_full-screen_super-nuke_triggers._Player_emerges_as_supreme_iron-blood_god_with_doubled_Max_HP_and_new_moveset_to_slaughter_the_field)."
      }
    }
  ]
};
