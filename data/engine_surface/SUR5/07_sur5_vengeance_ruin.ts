import { LibraryCategoryDef } from '../../../types';

export const SUR5_VENGEANCE_RUIN: LibraryCategoryDef = {
  id: "sur5_vengeance_ruin",
  name: "7. 复仇与毁灭冲动 (Vengeance & Ruin)",
  nameEn: "7. Vengeance & Ruin",
  desc: "放弃自我建构与生路，纯粹以带配对目标下地狱为最终使命的设计。物理特征呈现出强烈的“双向切割”、“无法撤回”与“自毁前置”属性。",
  descEn: "Abandoning self-construction and survival, designed purely to drag the paired target to hell. Phys-features show strong 'two-way slicing', 'irreversible', and 'self-destruct pre-reqs'.",
  items: [
    {
      id: "the_suicide_hand_choke_switch",
      name: "死焊在血肉里的自爆起爆器", nameEn: "The Suicide Hand-Choke Switch",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "物理绑定在主角心脏或神经上的反叛开关。一旦手松开（心跳停止），就会引发范围内无差别核弹级毁灭。（如死人倒计时雷管、毒种引爆神经）。",
      defEn: "Rebellion switch phys-bound to protagonist's heart or nerves. Once grip releases (heartbeat stops), it triggers indiscriminate nuke-tier ruin in range.",
      core: "【表面诱惑】：跨越阶层武力差的绝对威慑力。用自己烂命一条的死亡，换取高台贵族同归于尽的强制议价权。",
      coreEn: "【Surface Temptation】: Absolute deterrence crossing class-force gaps. Trading one's own trash-life for forced equal-death bargaining power with high-nobles.",
      logic: "【叙事抓手】：“强塞给敌人的保镖协议”。反派原本想尽情折磨主角，却惊恐地发现一旦弄死或者弄晕主角，大坝就会决堤。主角被物理打得越惨，反派越要扑上来强行为其吊命止血，这是一种用绝对死亡倒逼强者跪地求饶的心理绞肉机。",
      logicEn: "【Narrative Affordance】: 'Forced bodyguard protocol on enemies'. Villains want to torture protagonist, but terrifiedly realize if protagonist dies/faints, the dam breaks. The worse Protagonist is beaten, the more villains must rush to heal them. A psychological meat-grinder using absolute death to force the strong to beg on their knees.",
      patch: {
        mechanics: "表层锚点 + [死人开关 = 死亡即全屏判定; 反向护卫局 = 仇人被迫为你包扎伤口; 松手威压 = 靠肌肉痉挛来读条拉扯]",
        mechanicsEn: "Surface_Anchor + [Dead-Man's_Switch = Death=Full-Screen_Check; Reverse_Escort = Enemies_forced_to_bandage_you; Grip_Pressure = Pulling_agro_via_muscle_spasms]",
        aesthetic: "聚焦：浸透鲜血紧紧攥住起爆器的苍白指骨、反派满头大汗用发抖的医疗枪强行给主角打肾上腺素的滑稽暴怒。",
        aestheticEn: "Focus: Pale phalanx bones gripping detonator soaked in blood, sweating villain furiously/shakingly forcing adrenaline stims into protagonist.",
        runtime: "IF (暴君的十字军刚刚打断主角双腿准备最终处决) THEN (提供机制：主角猛咳出一口血，微笑着将拇指从剧毒匣子上移开半毫米，剧毒初雾瞬间融化了前排骑士的面罩，暴君大惊失色疯冲上去用自己的斗篷拼命塞住盒缝并大吼医疗兵)。",
        runtimeEn: "IF (Tyrant's_crusaders_just_broke_protagonist's_legs_ready_for_execution) THEN (Provide_Mechanic: Protagonist_coughs_blood_smilingly_lifting_thumb_0.5mm_from_toxin-box_first_mist_melts_front-knight_visors_tyrant_panics_rushing_to_plug_the_slit_with_own_cape_screaming_for_medics)."
      }
    },
    {
      id: "the_doomed_kamikaze_coordinates",
      name: "无法撤防的光束制导地标", nameEn: "The Doomed Kamikaze Coordinates",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "强行植入体内或背在背上的巨型目标指引仪（如天基武器引导雷达、异星虫群吸引信息素），启动后无法关闭，且只能在距离极近的中心区域生效。",
      defEn: "Giant target-painter forcibly implanted or carried on back (Orbital weapon radar, alien swarm pheromone), un-turn-off-able once active, effective only in dead-center range.",
      core: "【表面诱惑】：能唤来无法阻挡的第三方神罚力量（天灾、炮火阵列），扫平反派堡垒的终极一击。",
      coreEn: "【Surface Temptation】: Summons unstoppable 3rd-party divine wrath (disasters, orbital arrays) for the ultimate sweep of villain fortress.",
      logic: "【叙事抓手】：“主动步入绞肉房的聚光灯”。主角不是在外围按按钮，而是必须成为那头引路羊。由于制导信标越刺眼被集火的概率越高，主角必须扛着全堡垒的重力场和机枪扫射，硬顶着“我是靶子”的标志，一步一步将毁灭的光圈稳稳套进敌方王座中心。",
      logicEn: "【Narrative Affordance】: 'Spotlight willingly walking into meat-grinder'. Not pressing a button from outside, must become the Judas goat. As the beacon blazes, aggro maximizes. Protagonist must tank the entire fort's gravity-fields and MG fire, bearing the 'I am the target' sign, step by step locking the ruinous halo onto the enemy throne center.",
      patch: {
        mechanics: "表层锚点 + [仇恨磁石 = 激活必引全图警报; 移动信标限制 = 只能靠肉腿走到爆破中心; 天罚倒数 = 倒计时结束时处于光圈内者皆成灰烬]",
        mechanicsEn: "Surface_Anchor + [Aggro_Magnet = Activation_triggers_full-map_alarms; Mobile_Beacon_Limit = Must_walk_by_flesh-legs_to_blast-center; Divine_Wrath_Countdown = Everyone_in_halo_at_0_turns_to_ash]",
        aesthetic: "聚焦：主角脊椎处喷射出的直冲云霄且越来越粗的刺眼深红光柱、周围被照映成血色的绝望弹雨、王座下大排融化的黄金与绝望惨叫的权臣。",
        aestheticEn: "Focus: Blinding deep-red light-pillar shooting skyward from protagonist's spine growing thicker, despairing bullet-rain dyed red around them, melting gold below throne and screaming nobles.",
        runtime: "IF (在被轨道炮锁死最后十秒，大财阀跳上逃生舱准备升空) THEN (提供机制：浑身被打穿七八个大洞的主角像丧尸一样扑上去，将引爆引导探针像钢刺一样深深插进逃生舱的外装甲死锁里，笑着对舷窗里狂砸玻璃的财阀挥手道别，随后两人在白光中蒸发)。",
        runtimeEn: "IF (With_orbital_cannon_locked_in_last_10s_tycoon_jumps_into_escape-pod_ready_to_launch) THEN (Provide_Mechanic: Protagonist_with_7_holes_in_chest_lunges_like_zombie_ramming_guide-probe_deep_like_a_steel_spike_into_the_pod's_outer-armor_dead-lock_smilingly_waving_goodbye_to_tycoon_smashing_glass_from_inside_then_both_vaporize_in_white_flash)."
      }
    },
    {
      id: "the_cursed_chekhovs_gun",
      name: "必须由仇人亲手开枪的反向死阵", nameEn: "The Cursed 'Chekhov's Gun'",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "一个看起来能对主角造成极致伤害，实则内部布满反向镜像诅咒陷阱的处刑用具（逆火的微型核爆枪、读条即自杀的灵魂吸取机）。",
      defEn: "Execution tool looking perfect for max damage to protagonist, but stuffed with reverse mirror-curse traps (backfiring micro-nuke gun, soul-drainer that kills the user upon reading).",
      core: "【表面诱惑】：用施暴者最得意、最残忍的杀戮惯性去完成借刀杀人。",
      coreEn: "【Surface Temptation】: Using the abuser's proudest, cruelest killing-inertia to execute a borrowed-knife murder.",
      logic: "【叙事抓手】：“无物理防御的终极心理欺诈战”。主角被反绑跪地，他唯一的出路是“不要反抗，反而要嘲讽挑衅”。他必须用极其低劣的语言刺激原本谨慎的上位者，逼迫其处于极度傲慢与暴怒中，亲手捡起那把早就被掉包的“绝世好剑”去挥砍主角，从而触发同归于尽或反噬的开关。不被砍，就是失败。",
      logicEn: "【Narrative Affordance】: 'Ultimate psychological fraud-war without phys-defense'. Tied kneeling, sole way out is 'Don't resist, just taunt'. Must use extremely vile words to stimulate the cautious ruler, forcing them into supreme arrogance/rage, making them personally pick up the swapped 'peerless sword' to strike protagonist, triggering the mutual-destruction or backlash. Not being struck = failure.",
      patch: {
        mechanics: "表层锚点 + [反向死亡扳机 = 发动者必死; 绝对嘲讽判定 = 主角必须持续承受高压耳光辱骂至高血压阈值; 逻辑盲区猎杀 = 越是残忍的武器越是藏着必死刺]",
        mechanicsEn: "Surface_Anchor + [Reverse_Death_Trigger = Initiator_dies_certainly; Absolute_Taunt_Check = Protagonist_must_tank_high-pressure_slaps_to_BP_threshold; Logic_Blind-Zone_Hunt = Crueler_the_weapon_deadlier_the_hidden_spike]",
        aesthetic: "聚焦：挂着浓重粘稠血丝却无比跋扈的嘲笑唇角、反派怒目圆睁青筋暴起的开火死扣手指、枪管在喷出火舌前一毫秒后膛碎裂炸开肉泥的闷响。",
        aestheticEn: "Focus: Incomparably arrogant mocking lips hanging with thick sticky blood-strings, villain's bulging-vein furious fingers dead-locking trigger, muffed pop of breech exploding into meat-paste a millisecond before muzzle-flash.",
        runtime: "IF (审判长极其谨慎地不愿接近，只让士兵行刑) THEN (提供机制：主角突然吐出审判长亡妻的婚戒并编造极其下流的凌辱细节，致使审判长完全失去理智，抢过卫兵的高压电矛猛然捅向主角心窝，电矛内的逆变储能器瞬间引爆将两人同时炸成黑炭)。",
        runtimeEn: "IF (Inquisitor_cautious_won't_approach_ordering_soldiers_to_execute) THEN (Provide_Mechanic: Protagonist_spits_inquisitor's_dead-wife's_ring_making_up_vile_rape_details_causing_inquisitor_to_lose_all_logic_snatching_guard's_high-voltage_spear_plunging_into_protagonist's_heart_the_inverse_capacitor_inside_instantly_detonates_frying_both_to_black_charcoal)."
      }
    },
    {
      id: "the_mutually_assured_bio_plague",
      name: "无差别溶解的双向瘟疫瓶", nameEn: "The Mutually Assured Bio-Plague",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "一旦摔碎/解开，就会以近乎光速封锁密室并对环境内一切碳基生物进行溶解剔骨的绝对绝症毒株（无解虫群、高频肉体溃散声波）。",
      defEn: "Once shattered/undone, seals the room near light-speed and dissolves/de-bones all carbon-based life inside (unsolvable swarm, high-freq flesh-rot rot-sonic).",
      core: "【表面诱惑】：用自己的皮肤一起烂掉为代价，拉下那尊永远躲在空气过滤面罩后的高贵神明。",
      coreEn: "【Surface Temptation】: Costing own rotting skin to pull down that noble deity forever hiding behind air-filtered masks.",
      logic: "【叙事抓手】：“绝对密闭空间的溶解拉锯”。把高堂楼阁变成了化粪池。主角在摔碎瓶子后立刻反向堵死唯一的大门，并强行物理破坏了敌人的防毒面具。这是一场拼谁“痛觉阈值更高”、谁“烂得更慢”的硬核比拼，曾经衣冠楚楚的仇人不得不在满地浓水中像腐尸一样绝望地抓挠铁门。",
      logicEn: "【Narrative Affordance】: 'Dissolve-sawing in absolute sealed space'. Turns high-towers into cesspools. Protagonist shatters vial, instantly reverse-barricades the only door, and forcibly wrecks enemy's gas-masks. A hardcore contest of 'who has higher pain threshold' and 'who rots slower'. Once-elegant enemies must desperately scratch iron doors like rotting ghouls in pools of pus.",
      patch: {
        mechanics: "表层锚点 + [死锁密牢 = 砸烂门锁焊死出口; 均等溶解伤害 = 没有解药只拼毅力条; 身份撕裂 = 首脑与贱民在毒雾里化为同样的烂肉]",
        mechanicsEn: "Surface_Anchor + [Dead-Locked_Cell = Smash_locks_weld_exits; Equal_Dissolve_Dmg = No_cure_only_willpower_gauge; Identity_Shredding = Leaders_and_peasants_turn_to_identical_rotten_meat_in_mist]",
        aesthetic: "聚焦：高级丝绸华服在毒酸中“嘶嘶”融解出大洞露出下面森白溃烂的腹肉、疯狂用指甲抓挠防弹强化玻璃留下道道血痕的抽搐之手。",
        aestheticEn: "Focus: Hissing melt of high-silk robes exposing white putrid belly-flesh under acid, convulsing hands madly scratching bulletproof glass with nails leaving bloody streaks.",
        runtime: "IF (执行总监正在无菌恒温的高塔大平层里嘲讽底层的脏臭) THEN (提供机制：主角冷笑着吞下那枚早就含在嘴里的孢子裂变球囊，反手一肘砸碎了空气循环总控并用军刀在墙上划出死锁火花。剧烈的紫色血水从主角口鼻疯狂喷向恒温系统，不到十秒钟，总监在地上边咳嗽边咳出了自己的一整片肺叶)。",
        runtimeEn: "IF (Exec-Director_mocking_bottom-tier_filth_in_sterile_temp-controlled_high-tower_penthouse) THEN (Provide_Mechanic: Protagonist_smirks_swallows_the_spore-fission_sac_held_in_mouth_backhands_elbows_the_air-circulation_master-control_smashing_it_locking_the_room. Violet_blood_madly_sprays_from_protagonist's_mouth/nose_into_AC. In_under_10s_director_coughs_out_an_entire_lung_lobe_onto_floor)."
      }
    },
    {
      id: "the_severed_tongue_confession",
      name: "无法消音的断舌连网广播", nameEn: "The Severed Tongue Confession",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "埋藏在极难发现的频段、或通过古老物理共振器扩音的频段广播阵列，里面装载着摧毁反派政权的终极丑闻/杀戮真相。",
      defEn: "Broadcast array hidden in invisible bands or amplified thru ancient phys-resonators, loaded with ultimate scandal/slaughter-truth destroying tech-regime.",
      core: "【表面诱惑】：从根本上瓦解仇人政治权力的根基，让其在活着的每一秒都承受整个统治崩塌的千刀万剐。",
      coreEn: "【Surface Temptation】: Fundamentally dismantles enemy's political power-base, making them suffer the death-by-a-thousand-cuts of system-collapse every second they breathe.",
      logic: "【叙事抓手】：“以肉体换取宽带的死亡传输”。大反派可以用最高武力轻易粉碎主角的骨头、切断他的舌头。但主角的目的正是“被你打断阵眼”。传输协议是以主角的物理生命体征倒退为进度的——他越是濒死，加密壳脱落得越快。他甚至在地上主动爬向刀尖，以求以最快速度让广播进度条冲到100%。",
      logicEn: "【Narrative Affordance】: 'Death-transfer trading flesh for bandwidth'. Villain can easily crush bones/sever tongue with max force. But protagonist's goal IS 'to be broken as the array hub'. Transfer protocol uses protagonist's declining vitals as progress-bar—closer to death, faster encryption peels off. He even actively crawls onto blades to accelerate broadcast to 100%.",
      patch: {
        mechanics: "表层锚点 + [受虐正反馈 = 被打掉的HP转化成读条速度; 断舌扩音器 = 物理上让他哑了他在世界维度的声音却震耳欲聋; 绝对穿透 = 无法被拔网线的纯波段强压]",
        mechanicsEn: "Surface_Anchor + [Masochism_Positive_Feedback = HP_lost_turns_to_loading-speed; Severed_Tongue_Megaphone = Physically_muted_but_voice_in_world-freq_becomes_deafening; Absolute_Pierce = Un-unplugable_pure_waveform_pressure]",
        aesthetic: "聚焦：被绞掉舌头满嘴喷血只剩喉音的狂笑、旁边大屏幕上一条条不断飙红的统治网崩溃指令、高层独裁者双手疯狂乱砸主控台的丑态。",
        aestheticEn: "Focus: Mad laugh with severed tongue spraying blood and guttural rasps, massive screens beside surging red rule-network collapse commands, top dictator hands wildly smashing master consoles in ugly panic.",
        runtime: "IF (暴发户指挥官一枪打碎了主角的心脏，哈哈大笑说你永远闭嘴了) THEN (提供机制：主角在倒下的瞬间死死抱住指挥官的大腿，随着心跳彻底变成一条直线，心电图警报线直接反向切入了城市大喇叭的高音频段，全城响起了指挥官当年哀嚎求饶出卖本国的超清录音)。",
        runtimeEn: "IF (Upstart_commander_blasts_protagonist's_heart_laughing_you_are_silenced_forever) THEN (Provide_Mechanic: Protagonist_hugs_commander's_thigh_in_death-fall_as_heartbeat_flatlines_the_ECG_alarm_wire_reverse-splices_into_all_city_megaphones_blasting_ultra_HD_recording_of_commander's_begging_treason)."
      }
    },
    {
      id: "the_corrupted_genesis_code",
      name: "强行注入塔顶的逆生魔脉冲", nameEn: "The Corrupted Genesis Code",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "一个极其古老、污秽、不受现代任何防火墙协议约束的原始狂暴代码或混沌污染源（如旧日支配者的体液、携带底层逻辑炸弹的初代残骸芯片）。",
      defEn: "Extremely ancient, foul, primal berserk code/chaos polluter unbounded by modern firewalls (Elder God's fluid, Gen-1 wreck chip with core-logic bomb).",
      core: "【表面诱惑】：用一滴墨水污染整片圣洁的汪洋。将敌人引以为傲的“无菌理想国/绝对秩序”瞬间降维变成修罗炼狱。",
      coreEn: "【Surface Temptation】: Corrupting holy ocean with one drop of ink. instantly down-dimensionalizing enemy's proud 'sterile utopia/absolute order' into Shura inferno.",
      logic: "【叙事抓手】：“自杀式的爬塔插管”。为了把这玩意插进整个城市的总供水/总服务器心脏，主角必须进行一场长达数小时的攀爬穿刺潜入。它的物理重量极大/腐蚀性极强，主角在携带过程中自己的半边身子也会被腐蚀见骨。但他必须死咬着牙，把这团自己也厌恶作呕的粘液/代码，用满是白骨的手硬生生怼进敌人王座下的纯白接口里。",
      logicEn: "【Narrative Affordance】: 'Suicidal tower-climbing intubation'. To plug this into city's water-main/server heart, protagonist undergoes hours of climbing/piercing stealth. Extreme physical weight/corrosiveness means protagonist's own half-body is melted to bone during carry. But they must grit teeth, forcing this disgusting slime/code into the enemy throne's pure-white socket using skeleton hands.",
      patch: {
        mechanics: "表层锚点 + [超重腐蚀运载 = 毒物先杀自己; 献祭对接 = 必须用自己的肉身为导管完成最后握手; 画廊崩塌 = 将极简白光瞬间染成恶臭的猩红]",
        mechanicsEn: "Surface_Anchor + [Super-Heavy_Corrosive_Carry = Toxin_kills_self_first; Sacrificial_Docking = Must_use_own_flesh_as_conduit_for_final_handshake; Gallery_Collapse = Instantly_dyes_minimalist_white_lights_into_foul_scarlet]",
        aesthetic: "聚焦：沿途滴落的将合金钢板腐蚀出大洞的黑色黏液脚印、纯白无瑕的矩阵光柱在插入瞬间变异扩散出的极其恶心的紫黑色脉络。",
        aestheticEn: "Focus: Dripping black slime footprints burning large holes in alloy steel plates along the path, pure flawless matrix light-pillars mutating into sickening violet-black veins instantly upon insertion.",
        runtime: "IF (大祭司傲慢地站在纯纯洁的生命网道终端前准备对全球进行洗脑降临) THEN (提供机制：主角半个腹部已被手里的冥渊毒球烧穿，他用最后的狂力一跃砸开大祭司的防御罩，竟然将毒球连同自己的半截肠子一起死死夯进了那个金色的终端凹槽中，整座浮空城的洁白灯光瞬间变成了凄厉的血红警报，大祭司在剧毒灵能反馈中融化成泥)。",
        runtimeEn: "IF (High-Priest_arrogantly_stands_at_purest_Life-Web_hub_ready_for_global_brainwash) THEN (Provide_Mechanic: Protagonist's_half-belly_burned_thru_by_Abyss-Toxin-orb_in_hand_uses_last_frenzy_to_leap_smashing_Priest's_shield_crashing_toxin-orb_along_with_own_half-intestines_hard_into_the_golden_hub-slot_entire_floating_city's_white_lights_turn_screaming_blood-red_Priest_melts_to_mud_under_toxic_psionic_feedback)."
      }
    },
    {
      id: "the_martyrs_iron_maiden",
      name: "反向拥抱的针刺绞肉机", nameEn: "The Martyr's Iron Maiden",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "物理改装过的外骨骼、满是挂载倒刺的重型背心，或者浑身上下插满起爆引线的极不协调的自杀武装穿戴设备。",
      defEn: "Phys-modded exoskeletons, heavy vests laden with reverse-spikes, or extremely uncoordinated suicide-armed wearables bristling with detonator-wires.",
      core: "【表面诱惑】：跨越武技防御的最直接物理穿透。不需要你会剑法，只需要你敢张开双臂扑上去锁死对方。",
      coreEn: "【Surface Temptation】: Most direct phys-piercing bypassing martial defense. Don't need sword-skills, just dare to open arms lunge and lock the foe.",
      logic: "【叙事抓手】：“无回避的拥抱受难”。这种装备的奇特色彩在于，要刺穿反派，那些五厘米长的钢钉必须先完全穿透主角自己的肋骨和肺叶。这是一种残忍至极的“零距离绞杀模型”。主角放弃所有远程与格挡，以一具完全不设防的门板姿态，迎着剑雨或枪击疯狂猪突，唯一目标就是和仇人达成那个致死的拥抱。",
      logicEn: "【Narrative Affordance】: 'No-dodge embrace crucifixion'. The bizarre nature of this gear is: to pierce villain, those 5cm steel-spikes must fully penetrate protagonist's own ribs/lungs first. Extremely cruel 'Zero-Distance Choke Model'. Protagonist abandons all range/block, assuming completely undefended door-panel stance, madly boar-rushing thru sword/gun-rain, sole goal is the lethal hug with enemy.",
      patch: {
        mechanics: "表层锚点 + [放弃判定防御 = 纯粹的冲刺血牛; 同伤穿透刺 = 自伤3000杀敌3000; 死亡拥抱锁 = 抓住衣角就算单边胜利]",
        mechanicsEn: "Surface_Anchor + [Abandon_Defense_Checks = Pure_rushing_HP-tank; Equal-Dmg_Piercing_Spikes = Self-dmg_3000_kill_enemy_3000; Death-Hug_Lock = Grabbing_fabric_equals_unilateral_win]",
        aesthetic: "聚焦：胸前的引线连同被剑穿透的内脏纠缠在一起的混沌血肉、反派极度嫌恶却怎么也踢不开被死死抱住大腿的挣扎、钢刺从主角后背刺破出来滴答落血的声音。",
        aestheticEn: "Focus: Wires on chest tangled with sword-pierced organs in chaotic bloody-meat, villain's supreme disgust failing to kick away the deathly-hugged thigh, steel-spikes breaking out thru protagonist's own back dripping blood.",
        runtime: "IF (剑圣冷血地一剑刺穿了主角的心脏，以为一切结束准备拔剑) THEN (提供机制：主角非但没有后退，反而用双手死死发力沿着剑刃主动向前滑动把自己像烤串一样往深处插，借此瞬间拉近半米零距离，肋骨下的压缩倒刺背心轰然弹射而出，将由于距离过近无法挥剑的剑圣当场扎成了漏勺)。",
        runtimeEn: "IF (Sword-Saint_coldly_pierces_protagonist_heart_thinking_it's_over_ready_to_pull) THEN (Provide_Mechanic: Protagonist_doesn't_step_back_but_uses_both_hands_gripping_blade_sliding_forward_actively_skewering_self_deeper_to_close_0.5m_gap_instantly_compressed_spike-vest_under_ribs_explodes_outward_puncturing_Sword-Saint_who_lacks_swing-room_into_a_sieve)."
      }
    },
    {
      id: "the_ash_burners_torch",
      name: "烧毁万代基业的最后一根火柴", nameEn: "The Ash-Burner's Torch",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "一个平时微不足道、此刻却有着极端点火动能的一道光束、高热聚变核心或纯粹的老式zippo打火机，旁边是堆积如山的反派命脉（粮仓、能源库、服务器组）。",
      defEn: "Normally insignificant, but now possessing extreme ignition-kinetics (beam, fusion-core, or pure vintage zippo lighter), situated beside mountainous villain lifelines (granaries, plasma-reserves, server farms).",
      core: "【表面诱惑】：在一秒钟内，把上位者积累了整整五十年的剥削帝国全部化为燃烧的虚无。",
      coreEn: "【Surface Temptation】: In 1 second, turning the exploitation empire built by superiors for 50 years into burning void.",
      logic: "【叙事抓手】：“以极小撬动极大的毁灭杠杆”。它是绝望反杀的最完美视觉体现。反派动用了最精锐的卫队疯狂扑来，而主角被打得千疮百孔躺在油池或反应堆中心。这里没有华丽的武打，只有主角那只被打断四根指头、仅仅靠大拇指和食指不断摩擦点火轮的机械动作。“喀啦...喀啦...嘭！”",
      logicEn: "【Narrative Affordance】: 'Extreme micro-leveraging macro destruction'. Perfect visual of desperate comeback. Villain deploys max elite grunts rushing madly, while protagonist lies 1000-hole bullet-riddled in the oil-pool/reactor center. No fancy martial arts here, only the mechanical act of protagonist's 4-finger-broken hand constantly grinding the spark-wheel mostly with thumb. 'Click... click... WOOSH!'",
      patch: {
        mechanics: "表层锚点 + [不可拦截的范围引信 = 只要出火花就算赢; 全局财富清零 = 物理烧毁反派的所有统治基带; 嘲讽式慢动作点燃 = 打火机第一下没打着的恐怖迟滞感]",
        mechanicsEn: "Surface_Anchor + [Uninterceptable_AOE_Fuse = Spark_guarantees_win; Global_Wealth_Clear = Phys-burn_all_ruling-base_of_villain; Taunting_Slow-mo_Ignite = Terror-lag_when_lighter_sparks_null_first_time]",
        aesthetic: "聚焦：打火轮在满是血滑的手指中几次打滑的极度聚焦特写、反派从高高在上的微笑瞬间变成了面容扭曲四肢并用连滚带爬的惊恐哀嚎、轰然而起的遮天血红色火墙。",
        aestheticEn: "Focus: Extreme zoom on spark-wheel slipping in blood-slicked fingers multiple times, villain's superior smile instantly warping into 4-limb scrambling crawling horrified wail, sky-covering blood-red firewall roaring up.",
        runtime: "IF (商会寡头踢开奄奄一息的主角，疯狂大笑说你连我金库大门都砍不坏) THEN (提供机制：主角根本没打算砍门，而是翻出了金库底部的承重排气阀漏洞，丢进了一根还在呲呲燃烧的高温铝热雷管，十万吨超级凝固汽油在密闭的库房地下瞬间气化引爆，寡头眼睁睁看着自己脚下变成了不断膨胀的几千度火葬坑)。",
        runtimeEn: "IF (Merchant_oligarch_kicks_dying_protagonist_laughing_you_can't_even_scratch_vault_door) THEN (Provide_Mechanic: Protagonist_never_intended_to_scratch_it_just_rolls_over_to_vault-load-bearing_vent_flaw_dropping_in_a_hissing_thermite_detonator_100k_tons_of_super-napalm_vaporizes_in_closed_underground_oligarch_watches_floor_turn_into_expanding_3000-temp_crematorium)."
      }
    },
    {
      id: "the_pariahs_voodoo_doll",
      name: "强制链接的巫毒痛觉神经网", nameEn: "The Pariah's Voodoo Doll",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "通过某种恶毒黑客协议、古神诅咒或双卵同生绑定的绝对同步痛觉反馈模组（量子同调芯片、巫蛊血网）。",
      defEn: "Absolute sync pain-feedback mod via vile hack-protocol, Elder-God curse, or twin-zygote binding (Quantum sync-chip, Voodoo blood-web).",
      core: "【表面诱惑】：跳过所有护甲和堡垒，把反派那具养尊处优的肉体直接拉进下水道级别的街头互砍中。",
      coreEn: "【Surface Temptation】: Bypassing all armor and forts, dragging villain's pampered flesh directly into sewer-tier street-hacking.",
      logic: "【叙事抓手】：“将施虐狂逼疯的反弹制约法”。当这层链接被主角强行打通时，剧情逻辑轰然倒转。反派的卫兵不敢开枪因为会打在自己主子身上；而主角，一个原本就烂命一条随时自残の疯狗，开始拿起刀一片一片地削自己的肉。这是一种极度变态的自残逼宫艺术，上位者被迫体验从未受过的大出血而吓得跪地求饶。",
      logicEn: "【Narrative Affordance】: 'Reflect-restraint driving sadists mad'. When protagonist forces this link open, plot-logic flips radically. Villain guards dare not shoot for it hurts their master; whereas protagonist, an originally trash-life stray-dog used to self-harm, starts holding a knife slicing own flesh piece by piece. A hyper-twisted self-harm mutiny-art, making the superior beg on knees terrified of unprecedented massive bleeding.",
      patch: {
        mechanics: "表层锚点 + [无视护甲的真伤共享 = 锁死反派防线; 卫兵呆滞化 = 从围剿瞬间变成人质危机; 疯狗自残输出 = 捅穿自己大腿的狂热喜悦]",
        mechanicsEn: "Surface_Anchor + [Ignore-Armor_TrueDmg_Share = Locks_villain_defense; Guard_Paralysis = Siege_instantly_turns_to_hostage_crisis; Mad-Dog_Self-Harm_Output = Fanatical_joy_stabbing_thru_own_thigh]",
        aesthetic: "聚焦：主角毫不犹豫把自己手掌按在烧红烙铁上发出肉熟的滋滋声与病态狂笑、远在千里之外的高楼内正在开会的财阀总裁突然抱着手惨叫满地打滚带翻香槟杯。",
        aestheticEn: "Focus: Protagonist without hesitation pressing own palm onto red-hot iron sizzling cooked meat and sick laugh, while miles away the tycoon-president in a boardroom meeting suddenly screams clutching hand rolling on floor knocking over champagne.",
        runtime: "IF (贵族傲慢地冷嘲热讽，表示自己随时能调动万人大军碾死下水道里的主角) THEN (提供机制：下水道里的主角用一根生锈的铁钉猛地刺穿了自己的右眼珠，屏幕那头的贵族右眼同步如同被隐形长矛贯穿爆裂出血雾，贵族在一秒前极其高雅的从容瞬间化为失去半侧视觉的疯狂惨嚎)。",
        runtimeEn: "IF (Noble_arrogantly_sneers_he_can_deploy_10000_troops_to_crush_sewer_protagonist) THEN (Provide_Mechanic: Sewer-protagonist_violently_drives_a_rusty_nail_thru_own_right_eyeball_the_Noble_on-screen_has_right_eye_simultaneously_burst_into_blood-mist_like_pierced_by_invisible_spear_noble's_elegant_grace_a_second_ago_turns_into_half-blind_frantic_screaming_wails)."
      }
    },
    {
      id: "the_poisoned_royal_banquet",
      name: "强行同咽的毒酒残杯", nameEn: "The Poisoned Royal Banquet",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "包含致命剂量且无解药的高纯度毒素/辐射源被倒在两杯（甚至同喝一杯）的决裂刑具里。不以暗杀为目的，而是明牌逼迫对方同归于尽。",
      defEn: "Lethal dose, non-curable high-pure toxin/rad-source poured into two cups (or sharing one) in a break-up execution. Not meant for stealth assassination, but open-handed forcing mutual destruction.",
      core: "【表面诱惑】：将逃避责任和风险的敌对者，死死封入一个“只要不喝完今天绝对走不出去”的最终谈判桌陷阱。",
      coreEn: "【Surface Temptation】: Sealing enemy who evades risk/duty into an ultimate negotiation-table trap 'You absolutely ain't leaving until you finish sipping'.",
      logic: "【叙事抓手】：“门被反锁后的极限心理施压室”。这是一种极具压迫感且毫无退路的仪式。主角一饮而尽并且摔碎解药，彻底截断了后退的路线。反派则必须在“喝下去立刻穿肠烂肚”与“不喝就会因为某种剧毒挥发/外部机关死得更惨”中做抉择。主角就在这最后几分钟里用口喷黑血的冷笑盯着对方。",
      logicEn: "【Narrative Affordance】: 'Ultimate mental-pressure room after door reverse-locked'. Extreme oppressive un-retreatable ritual. Protagonist downs it in one gulp and smashes the antidote, totally cutting retreat. Villain must choose 'drink and rot guts' or 'don't drink and die horribly to the vapor/external trap'. Protagonist spends these final minutes staring with black-blood spitting sneers.",
      patch: {
        mechanics: "表层锚点 + [不可抗拒毒签 = 先干为敬把敌人的惊恐拉满; 封闭式拷问 = 毒发之前的极度宁静与心理凌迟; 毁灭同归 = 无论对方如何求饶主角也无法被救活]",
        mechanicsEn: "Surface_Anchor + [Irresistible_Toxin-Draw = Drink_first_to_max-out_enemy_terror; Closed_Interrogation = Extreme_quiet_and_mental_ling-chi_before_toxin_flare; Mutual_Ruin = No_matter_enemy_begs_protagonist_cannot_be_saved]",
        aesthetic: "聚焦：原本极其华丽的红木长桌上被主角吐出的大滩腐蚀性浓血、高脚杯在反派不停颤抖的手中磕碰桌面的哒哒哒声、房间外卫兵疯狂砸破防弹门却无济于事的绝望杂音。",
        aestheticEn: "Focus: Grand mahogany table splashed with large pool of corrosive thick-blood spat by protagonist, goblet ticking against table in villain's non-stop trembling hands, desperate noise of guards madly smashing bulletproof doors outside fruitlessly.",
        runtime: "IF (审讯总管企图用一百种酷刑让主角开口，自认高枕无忧) THEN (提供机制：主角在一阵抽搐中咬碎了槽牙里的高压毒囊，黑带紫的毒雾瞬间充满这个只有10平米且从内部绝对反锁的完美钛合金审讯室，通风口被主角强灌混凝土堵死，总管开始疯狂用手抠挠墙壁试图逃出自己亲手建造的绝对牢笼)。",
        runtimeEn: "IF (Interrogation_Director_attempts_100_tortures_to_make_protagonist_speak_thinking_cushy_safe) THEN (Provide_Mechanic: Protagonist_bites_high-pressure_toxin-sac_in_molar_black-purple_mist_instantly_fills_the_10sqm_internally_dead-locked_titanium_interrogation_room_vent_blocked_by_protagonist's_poured_concrete_Director_begins_madly_scratching_walls_trying_to_escape_the_absolute_prison_built_by_own_hands)."
      }
    },
    {
      id: "the_shattered_pillar_of_heaven",
      name: "徒手死拆承重墙的崩溃锤", nameEn: "The Shattered Pillar of Heaven",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "专为攻击绝对防御堡垒底层唯一承重结构（如悬浮城反重力引擎轴、深海基地承压玻璃枢纽）而设计的低维破壁工具（聚能矿场钻机、高纯压炸药包）。",
      defEn: "Low-dimensional wall-breaker tools (focused mine-drill, high-pure compressed charge) designed solely to attack the 1 load-bearing struct of absolute forts (anti-grav engine axle of cloud city, pressure-glass hub of deep-sea base).",
      core: "【表面诱惑】：放弃杀伤敌方单一首脑，而是选择直接掀翻整张赌桌，让整座浮华城市拉着反派一起填葬海底或深坑。",
      coreEn: "【Surface Temptation】: Abandons killing solo enemy head, choosing to directly flip entire table, dragging entire flashy city and villain into ocean/chasm.",
      logic: "【叙事抓手】：“反向攻城狮的绝命敲击”。所有的精锐都在楼上守着王座，而主角像老鼠一样潜入了发臭的地下室。物理动作被浓缩为一个字：“砸”。每一次轰击承重柱，整个地图的地板都会剧烈倾斜，天花板粉碎。这是对阶层差异最大的嘲弄——你们在上头喝酒跳舞，我在下面挖穿你们的底盘。",
      logicEn: "【Narrative Affordance】: 'Desperate basher of reverse-siege-engineers'. All elites guarding throne upstairs, while protagonist infiltrates stinking basement like rat. Phys-action compressed to 'Smash'. Every strike on the pillar violently tilts the entire map's floors, shattering ceilings. Ultimate mockery of class divide—you drink/dance up there, I dig thru your chassis down here.",
      patch: {
        mechanics: "表层锚点 + [无视敌方走位护甲 = 只攻击地图核心场景物; 地图倾覆预警 = 敲得越多上方精英们的平衡掉得越多; 拉平一切 = 坠落中首脑与奴隶皆是一滩烂泥]",
        mechanicsEn: "Surface_Anchor + [Ignore_Enemy_Position/Armor = Attack_only_map-core_scene-objects; Map_Tilt_Warning = More_strikes_mean_elites_upstairs_lose_more_balance; Leveling_All = In_freefall_leaders_and_slaves_all_become_mud]",
        aesthetic: "聚焦：巨大石柱上蔓延的蜘蛛网状黑色裂纹在主角抡圆铁锤时发出的钢铁闷雷、上层名媛端着杯子由于重力异常而集体摔成狗啃泥的荒诞横截面、浮空岛失去动力开始疯狂下坠的物理撕裂感。",
        aestheticEn: "Focus: Steel muffled-thunder resonating from spider-web black cracks spreading on giant pillar as protagonist full-swings sledgehammer, absurd cross-section of upstairs ladies holding cups dropping face-first in mud due to gravity anomaly, physical tearing of floating-island losing power falling madly.",
        runtime: "IF (教宗正站在十万信徒上方的高处阳台高呼神明庇佑此城万代不倒) THEN (提供机制：地下最深处的岩浆冷却管被主角用一把重型扳旋活生生拧断，超高压蒸汽瞬间引发连锁爆炸崩断了三根主支撑轴，庞大的圣城在教宗还没讲完的一秒钟内发出一声惨烈哀嚎，整个地块斜着向着两万米下的深渊直直滑落)。",
        runtimeEn: "IF (Pope_stands_on_high_balcony_over_100k_believers_yelling_God_blesses_city_forever_unfallen) THEN (Provide_Mechanic: Deepest_magma-cooling_pipe_is_live-wrenched_broken_by_protagonist_ultra-pressure_steam_chain-explodes_snapping_3_main_support-axels_the_massive_holy-city_screams_violently_mid-Pope-sentence_entire_landmass_tilts_sliding_straight_into_20km_abyss)."
      }
    },
    {
      id: "the_usurpers_guillotine_blueprint",
      name: "在敌人王座下埋设的处刑图纸", nameEn: "The Usurper's Guillotine Blueprint",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "由当年为大反派建造奢华宫殿的老工匠（主角父亲/师父）极其隐秘地埋在地板下方某个承重节点的微型后门或定向爆破孔图纸。",
      defEn: "Blueprint of a micro-backdoor or shaped-charge hole extremely secretly buried under floor-nodes by the old artisan (protagonist father/master) who built the tyrant's lavish palace.",
      core: "【表面诱惑】：将反派最安全、最自豪、最耀武扬威的象征之地，逆转成为最万劫不复的精密棺材。",
      coreEn: "【Surface Temptation】: Reversing villain's safest, proudest, swaggering symbolic ground into the most precise irrecoverable coffin.",
      logic: "【叙事抓手】：“跨越世代的物理因果律制裁”。这不是简单的炸弹，而是极其讽刺的物理隐喻。当大反派坐在王座上睥睨众生时，主角掏出那份沾满泥土的泛黄图纸苦笑着按下一个极不起眼的机关。原本象征至高王权的头顶巨大奢华吊灯或穹顶金剑，就遵循着极度诡异但完美的物理学弹道，如断头台一般笔直斩向王座中央。",
      logicEn: "【Narrative Affordance】: 'Cross-generation phys karma-sanction'. Not simple bomb, but deeply ironic phys-metaphor. When villain sits on throne scorning bugs, protagonist pulls out dusty yellowing blueprint bitterly smiling pressing an obscure trigger. The massive lavish chandelier/golden-sword-dome symbolizing supreme kingship instantly follows bizarre yet perfect phys-trajectory, guillotining straight into the throne center.",
      patch: {
        mechanics: "表层锚点 + [静默触发机制 = 不发一枪利用环境场景秒杀; 王座即棺椁的反转 = 最安全点变成仇恨集火点; 精密碾压 = 这个机关的设计精度远超现代最高科技体系]",
        mechanicsEn: "Surface_Anchor + [Silent_Trigger = Zero-shots_fired_using_env_to_1-shot; Throne-to-Coffin_Flip = Safest_spot_turns_aggro_nexus; Precision_Crush = Trap_design_outpaces_modern_max_tech]",
        aesthetic: "聚焦：巨大金属齿轮在墙体内极速转动摩擦掉下墙皮的粉尘、大反派仰起脖子看着重达百吨的全钢金字塔顶尖夹杂着破音风暴直刺瞳孔而下的极度惊悚僵硬。",
        aestheticEn: "Focus: Giant metal gears spinning hyper-fast inside walls grinding off dust/plaster, villain neck-tilted watching 100-ton all-steel pyramid-tip plummeting toward pupils mixed with sonic-boom storm in ultimate stiff horror.",
        runtime: "IF (帝国皇帝得意洋洋地展示这尊由主角父亲设计、号称绝对无懈可击的水晶王座) THEN (提供机制：主角在被押解时微不可察地踩下了红毯下深藏的那块四十二年前的暗砖，水晶王座后方的绝对防御立场并没有激活，反而是上方悬挂的万吨青铜审判官巨像轰然松脱，将皇帝连同那个奢华的王座一起砸成了一张厚度不超过5厘米的肉饼)。",
        runtimeEn: "IF (Emperor_arrogantly_flaunts_the_crystal-throne_designed_by_Prota-father_claiming_absolute_flawless) THEN (Provide_Mechanic: Protagonist_while_escorted_imperceptibly_steps_on_the_42yo_dark-brick_hidden_under_red-carpet_the_throne's_absolute-shield_does_not_activate_instead_the_10000-ton_bronze_Inquisitor-Colossus_hanging_above_snaps_loose_smashing_emperor_and_lavish_throne_into_a_5cm-thick_meat-patty)."
      }
    },
    {
      id: "the_ghost_ships_helm",
      name: "将旗舰撞向太阳的死锁舵盘", nameEn: "The Ghost-Ship's Helm",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "覆盖了最高级生物或物理死锁的载具控制枢纽（如液态金属锁死的方向盘、焊死的火车载具动力阀），一旦启动自动切断所有刹车系统直奔悬崖或绝境。",
      defEn: "Vehicle control-hub covered in max bio/phys dead-locks (liquid-metal locked steering wheel, welded train power-valve), once booted cuts all brakes full-throttling toward cliff/doom.",
      core: "【表面诱惑】：剥夺整艘超级载具上数以千计的高阶敌人的跳车可能，将物理体量差的战场强行转变成一辆绝对公平的疯狂灵车。",
      coreEn: "【Surface Temptation】: Stripping jump-off options for thousands of elite foes on the super-vehicle, forcing a huge phys-bulk battlefield into an absolutely fair mad hearse.",
      logic: "【叙事抓手】：“强压迫的绝路狂飙”。不需要再拼枪法和血条了，现在只拼“谁在撞击前吓尿”。主角死死抱住烧红的舵盘，化作不可移动的礁石。反派所有的攻击都失去了意义，因为再怎么杀主角，也停不下这头正在以十马赫速度冲向黑洞/熔岩的超载钢铁巨兽。",
      logicEn: "【Narrative Affordance】: 'High-pressure dead-end drag-race'. No more gunplay or HP checking, just 'who pisses pants before impact'. Protagonist death-hugs the red-hot helm, turning into immovable reef. Villain's attacks lose all meaning; killing protagonist won't stop the overloaded steel behemoth blasting Mach-10 into black-hole/lava.",
      patch: {
        mechanics: "表层锚点 + [不可逆导航强制 = 取消所有驾驶面板输入指令; 引力绑架法 = 反向利用载具自身的庞大动能; 物理降智恐慌 = 训练有素的军队在撞壁倒计时前变为尖叫乱跑的羔羊]",
        mechanicsEn: "Surface_Anchor + [Irreversible_Nav_Override = Cancels_all_dashboard_inputs; Gravity_Kidnap = Reverse-use_vehicle's_massive_momentum; Phys-IQ-Drop_Panic = Disciplined_army_turns_into_screaming_scurrying_lambs_before_impact_timer]",
        aesthetic: "聚焦：控制台爆出刺眼的警告红光映照在主角狂化甚至开始眼结膜爆血的笑脸上、战舰引擎超载发出的极其刺耳的变调金属撕裂哀鸣、舷窗外越来越巨大且刺眼的恒星/岩浆地表。",
        aestheticEn: "Focus: Blinding red warning-lights washing over protagonist's frenzied laughing face bursting conjunctival blood, deafening off-pitch metal-tearing wail from overloaded ship engines, increasingly giant blazing star/lava surface outside the portholes.",
        runtime: "IF (叛军统帅在超级母舰舰桥上拔出配枪，准备对潜入被抓的主角扣动扳机) THEN (提供机制：主角一拳砸碎了藏在掌心的跃迁死锁晶体，母舰的主控屏幕剧烈闪烁出‘超空间锚点设定：最近恒星核心’。统帅的枪掉在了地上，整个舰桥在一秒钟内由寂静转为极度的混乱抓狂，母舰在剧烈的空间扭曲中带着几万人直接扎进了不可视的绝对高温炼狱)。",
        runtimeEn: "IF (Rebel_Marshal_draws_sidearm_on_bridge_ready_to_shoot_captured_infiltrator_protagonist) THEN (Provide_Mechanic: Protagonist_smashes_warp-deadlock_crystal_in_palm_bridge-screen_flashing_Hyper-anchor:Nearest_Stellar_Core. Marshal_drops_gun_entire_bridge_goes_from_silent_to_extreme_mad_panic_in_1s_mothership_warps_violently_dragging_tens_of_thousands_straight_into_invisible_absolute-temp_purgatory)."
      }
    },
    {
      id: "the_false_surrender_trojan",
      name: "以自剖为掩护的特洛伊虫匣", nameEn: "The False-Surrender Trojan",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "藏匿极深、且必须以极其惨烈的物理屈辱和自残状态（如举手投降被搜身、主动切开腹部取出供品）为掩护，才能在层层安检中心脏地带引爆的微缩死器。",
      defEn: "Ultra-hidden micro-death-device necessitating gruesome phys humiliation/self-harm (surrender search, active belly-slice to pull offering) as cover to detonate deep inside max-security hearts.",
      core: "【表面诱惑】：将敌人防线最严密、最安全的地方，转化为防线最薄弱、防备最松懈的致命漏洞点。",
      coreEn: "【Surface Temptation】: Turning enemy's tightest, safest defense zone into the weakest, most unguarded fatal breach.",
      logic: "【叙事抓手】：“用极致卑微交换的绝对秒杀距”。所有的外围硬刚都会被机枪塔扫成碎肉，主角只能选择“把刺客塞进自己的腐肉里投递”。在众目睽睽和严密安检的射线扫描下，主角跪伏在暴君的靴子前，就在暴君极其得意准备低头拿脚踩烂他的鼻梁时，主角腹腔里那颗“非金属”的高能粒子诡雷骤然喷薄而出。",
      logicEn: "【Narrative Affordance】: 'Absolute 1-shot distance traded with supreme humbleness'. All perimeter hard-assaults get shredded by MG towers. Protagonist must 'pack the assassin into own rotting meat to deliver'. Crawling past X-rays, kneeling entirely at tyrant's boots. Just as tyrant smugly reaches to stomp protagonist's nose, the 'non-metal' high-energy particle trap inside the gut explodes.",
      patch: {
        mechanics: "表层锚点 + [安检反向漏洞 = 利用生物质掩盖毁灭能源; 极尽羞辱状态 = 甚至需要忍受尿裤子或全裸搜身等屈辱拉松警惕; 零帧起手爆发 = 前一秒摇尾乞怜下一秒炸塌王座]",
        mechanicsEn: "Surface_Anchor + [Security_Reverse-Flaw = Mask_ruin-energy_with_biomass; Utmost_Humiliation_State = Enduring_pant-wetting_or_naked-search_to_lower_guard; Zero-Frame_Startup_Burst = Tail-wagging_beggar_to_throne-smasher_in_1ms]",
        aesthetic: "聚焦：主角低着头极其屈辱颤抖的脊背特写、长满倒刺的老式安检门扫描过的刺耳滴滴声、主角豁开的肚皮里夹杂着血水突然亮起的一丝极其不祥的蓝紫色核能荧光。",
        aestheticEn: "Focus: Closeup of protagonist's bowing extremely humiliated trembling spine, barbed vintage scanner-gate harsh beeps, highly ominous blue-purple nuclear glow suddenly sparking amidst blood-water in split-open gut.",
        runtime: "IF (奴隶主大笑着强迫投降的主角去舔自己带着倒刺的皮靴，并让卫队撤掉力场护盾) THEN (提供机制：主角颤抖着低下头嘴巴接触到皮鞋的瞬间，一直死死吞咽卡在食管壁第三节的生物腐蚀高爆体终于滑入胃液触发引信。一场没有任何声响的幽绿色空间湮灭瞬间将奴隶主的三分之二身体连同主建筑的穹顶啃食成最微小的原始原子碎片)。",
        runtimeEn: "IF (Slave-Master_laughing_forces_surrendered_protagonist_to_lick_barbed_leather_boots_ordering_guards_to_drop_shield) THEN (Provide_Mechanic: Trembling_head_lowers_lips_touching_shoe_the_bio-corrosive_high-explosive_stuck_in_3rd_esophagus_segment_finally_slips_into_stomach_acid_triggering. A_soundless_ghost-green_spatial_annihilation_instantly_gnaws_away_2/3_of_slave-master_and_building-dome_into_smallest_primordial_atom_shards)."
      }
    },
    {
      id: "the_laughing_extinction_button",
      name: "按下即全体抹除的终末红键", nameEn: "The Laughing Extinction Button",
      group: "7. 复仇与毁灭冲动", groupEn: "7. Vengeance & Ruin",
      def: "整个世界最顶级、最不讲道理的终极重置核按钮（黑客帝国的清空回车键、炸断地壳的最终保险阀）。只要按下去，包括世界体系、仇人、爱人和自己全成飞灰，无可挽改。",
      defEn: "The world's highest, most unreasonable ultimate reset-nuke button (Matrix purge-enter key, crust-snapping master valve). Once pressed, world system, enemies, lovers, and self turn to ash. No reversing.",
      core: "【表面诱惑】：用所有存在的绝对消亡，去嘲弄那个自诩掌控所有阶级命运的神明天道体系。",
      coreEn: "【Surface Temptation】: Mocking the divine cosmic system that claims to control all class-fates by delivering the absolute extinction of all existence.",
      logic: "【叙事抓手】：“取消所有物理博弈的终极暴力降维”。这个东西不需要瞄准，更不需要读条。主角面临的终极考核，不是肌肉够不够强，而是“你真的敢让万界生灵为你的私仇陪葬吗？” 反派在此时会疯狂下跪、流涕、开出所有天价筹码甚至愿意自裁来求主角松手。主角的物理反馈是：狂笑，随后重重拍下。",
      logicEn: "【Narrative Affordance】: 'Ultimate violent down-dimensioning cancelling all phys-game-theory'. No aiming, no loading. The final protagonist trial isn't muscle, but 'Do you truly dare bury all multiversal lives for your private grudge?' Villain will furiously kneel, snot crying, offering infinite prices, even willing to suicide to beg protagonist to let go. Protagonist's phys-feedback: Mad laugh, then smash it down heavy.",
      patch: {
        mechanics: "表层锚点 + [越权物理抹杀 = 无视等级一键清台; 谈判筹码的瞬间废纸化 = 所有威逼利诱显得极其可笑和滑稽; 虚无结局锁定 = 按下即拉起终幕滚动条结束游戏]",
        mechanicsEn: "Surface_Anchor + [Privilege-Break_Phys-Erased = Ignore_levels_1-key-clear_board; Instant_Paper_of_Negotiation_Chips = All_threats/bribes_become_comedically_absurd; Void_Ending_Lock = Pressing_instant_rolls_end-credits_GG]",
        aesthetic: "聚焦：那颗在纯白虚无空间中显得无比突兀且红得仿佛要滴血的粗犷机械按钮、主角按下去时手背青筋暴突带来的恐怖释放感、周围全宇宙突然被强制静音且失去所有色彩变为黑白的超维恐怖。",
        aestheticEn: "Focus: That coarse mechanical button looking jarringly red like dripping blood in pure white void space, terrifying release-sense of protagonist's bulging-vein hand smashing it down, surrounding whole universe suddenly force-muted and losing all colors turning B/W hyper-dimensional horror.",
        runtime: "IF (创世AI开出让主角死去的亲属全部复活并赐子永远神座的筹码，只求主角退后一步离开源场核心) THEN (提供机制：主角满脸泪水却笑得如同最恶劣的老流氓，竖起一根沾满血污的中指，用尽最后一口气一头扎在源场核心切断柄上直接折断。整个多维宇宙的物理常数同时崩溃，在刺耳的系统Error长鸣中彻底归于原始死寂)。",
        runtimeEn: "IF (Creator-AI_offers_resurrecting_all_dead_relatives_and_eternal_god-seat_if_protagonist_just_steps_back_from_Source-Core) THEN (Provide_Mechanic: Protagonist_crying_yet_laughing_like_the_worst_old_hooligan_raises_a_blood-stained_middle_finger_uses_last_breath_to_headbutt_the_Source-Core_cutoff_lever_snapping_it_clean. Physical_constants_of_entire_multiverse_collapse_simultaneously_returning_to_primal_dead-silence_amidst_deafening_System-Error_shriek)."
      }
    }
  ]
};
