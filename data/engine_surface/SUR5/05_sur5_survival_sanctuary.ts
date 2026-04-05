import { LibraryCategoryDef } from '../../../types';

export const SUR5_SURVIVAL_SANCTUARY: LibraryCategoryDef = {
  id: "sur5_survival_sanctuary",
  name: "5. 生存与绝对庇护 (Survival & Sanctuary)",
  nameEn: "5. Survival & Sanctuary",
  desc: "普适于任何时代的“求生剥夺场”。通过极其有限的转移凭证、封闭空间或净化物，将对物理安全的本能渴求，转化为最残酷的道德或肉搏试炼场。",
  descEn: "Universal 'survival deprivation field'. Translates instinctual safety thirst into cruel moral/melee trials via limited transfer passes, closed spaces, or pure items.",
  items: [
    {
      id: "the_final_boarding_pass",
      name: "满是血手印的最终通行证", nameEn: "The Bloodstained Final Boarding Pass",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "物理容量达到极值的转移载具或结界入口（如方舟船票、跨维传送阵符石、战区最后一班撤离列车的车票）的唯一合法登入信物。",
      defEn: "Sole legal entry token to a maxed-capacity transfer vehicle or barrier portal (e.g., Ark ticket, teleportation runestone, final evac train ticket).",
      core: "【表面诱惑】：跨过去就是天堂，它代表了当前位面唯一100%存活的物理豁免权。",
      coreEn: "【Surface Temptation】: Crossing represents heaven; the sole 100% physical immunity in the current plane.",
      logic: "【叙事抓手】：强制单向漏斗效应。由于检票点/阵眼的空间极度狭窄且唯一，主角不能打游击，必须迎着所有绝望流民或敌军的火力挤过最后三米，将“突围”变成了最原始死板的“撞线角力”。",
      logicEn: "【Narrative Affordance】: Forced one-way funnel. Because the checkpoint is ultra-narrow and singular, guerrilla tactics fail. Must push thru desperate mobs or fire for the last 3 meters, turning 'breakout' into primitive 'line-crashing'.",
      patch: {
        mechanics: "表层锚点 + [超零和博弈 = 名额只有一; 易失手判定 = 信物在撕扯极易掉落; 道德负重 = 为了挤进去必须阻挡身后的弱者]",
        mechanicsEn: "Surface_Anchor + [Super_Zero-Sum = Quota_is_one; Fumble_Check = Token_easily_dropped_in_tearing; Moral_Weight = Must_block_the_weak_behind_to_enter]",
        aesthetic: "聚焦：检票口外被挤压到变形贴在能量壁上的惨叫面孔、死死攥住凭证大腿被刺穿依然往里爬的拖痕。",
        aestheticEn: "Focus: Screaming faces crushed against the energy wall outside the gate, drag marks of bleeding legs gripping the token crawling inside.",
        runtime: "IF (检录倒数五秒，一名失去双腿的士兵死死抓住了主角的通关铭牌) THEN (提供机制：主角闭上双眼，用枪托砸碎了对方的手骨，强制刷卡，大门闭合瞬间将两个世界彻底隔绝)。",
        runtimeEn: "IF (5s_to_gate_close_legless_soldier_death-grips_protagonist's_pass) THEN (Provide_Mechanic: Protagonist_closes_eyes_smashes_soldier's_hand-bones_with_rifle-butt_forcing_swipe_gate_sealing_isolating_two_worlds_instantly)."
      }
    },
    {
      id: "the_unbreakable_absolute_shelter",
      name: "内部锁死的绝对庇护空间", nameEn: "The Unbreakable Absolute Shelter",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "能够完全隔绝外界致命物理伤害（如末日防爆门堡垒、古代龙炎无法熔化的玄武岩圣堂、密室黑匣子）。",
      defEn: "Completely isolates from fatal external physical damage (e.g., Doomsday panic room, basalt sanctuary immune to dragon fire, black box).",
      core: "【表面诱惑】：一旦关上门，外围的千万追兵或灭世天灾都沦为无能狂怒。提供喘息的终极港湾。",
      coreEn: "【Surface Temptation】: Once sealed, millions of pursuers or apocalyptic disasters become impotent rage. Ultimate harbor for catching breath.",
      logic: "【叙事抓手】：物理防御绝对值与内部循环系统脆弱性的反转。外壳无敌，但也切断了主角的退路。一旦生命维持系统（如氧气管、灵力阵源）被从外部破坏，庇护所瞬间变成无法逃脱的窒息高压锅。",
      logicEn: "【Narrative Affordance】: Inversion of absolute exterior defense vs fragile internal loop. Shell is invincible but cuts retreat. Once life-support (oxygen/mana core) is sabotaged outside, shelter instantly becomes an inescapable suffocating pressure cooker.",
      patch: {
        mechanics: "表层锚点 + [绝对封闭困兽 = 没有任何物理后门; 缓慢窒息压迫 = 外部改切断供应; 密室疯狂 = 内心焦虑爆炸]",
        mechanicsEn: "Surface_Anchor + [Absolute_Closed_Beast = Zero_physical_backdoors; Slow_Suffocation_Pressure = Outside_cuts_supply; Panic-Room_Madness = Inner_anxiety_bursts]",
        aesthetic: "聚焦：厚重闸门咬合锁死的沉重轰响、门内部墙壁上随着外部等离子切割而逐渐融化发红扩大的绝命圆点。",
        aestheticEn: "Focus: Heavy roar of massive gates biting shut, walls inside slowly melting glowing red dots from external plasma cutting.",
        runtime: "IF (刚在绝对安全的堡垒内脱下重甲，发现通风口被开始注入无色致命毒气) THEN (提供机制：主角没有任何退路，只能抱起炸药包抵在绝对坚固的大门前准备强行破阵同归于尽)。",
        runtimeEn: "IF (Just_removed_heavy_armor_in_safe-fortress_finding_colorless_fatal_gas_pumping_thru_vents) THEN (Provide_Mechanic: Unescapable_protagonist_hugs_explosives_against_the_absolute_door_ready_for_suicide_breach)."
      }
    },
    {
      id: "the_rapidly_depleting_filter",
      name: "磨损见底的物理降灾过滤器", nameEn: "The Rapidly Depleting Filter",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "在充斥环境伤害（毒气、极寒、深海压强、恶咒瘴气）的区域里，唯一维持微观生存力场的随身外挂设备。",
      defEn: "In areas full of environmental damage (poison gas, extreme cold, deep-sea pressure, curse miasma), the sole wearable device maintaining micro-survival force fields.",
      core: "【表面诱惑】：随身携带的救命气泡，只要刻度没到底，环境的抹杀之力就碰不到你的肉体。",
      coreEn: "【Surface Temptation】: Portable life-saving bubble. As long as the gauge isn't empty, the environment's erasure power cannot touch flesh.",
      logic: "【叙事抓手】：它强行将生命与一件脆弱物绑定。当过滤器出现物理破损，生存时间极尽压缩。任何剧烈战斗或奔跑都会大幅加速其损耗，迫使主角在致死环境中进行最扭曲、最需克制呼吸的“慢动作火拼”。",
      logicEn: "【Narrative Affordance】: Forcibly binds life to a fragile object. When filter takes physical damage, survival time compresses. Any fierce combat or sprinting accelerates decay, forcing protagonist into twisted, breath-restrained 'slow-motion firefights' in lethal zones.",
      patch: {
        mechanics: "表层锚点 + [动能呼吸联动 = 剧烈动作加倍消耗条; 视听觉剥夺边缘 = 滤镜发黑/警告音效疯狂重叠; 憋气突围 = 不打药只扛伤的极限匍匐]",
        mechanicsEn: "Surface_Anchor + [Kinetic_Breath_Link = Fierce_action_doubles_drain; AV_Deprivation_Edge = Filter_blackens/warning_alarms_overlap; Apnea_Breakout = Extreme_crawling_taking_hits_without_meds]",
        aesthetic: "聚焦：布满裂纹且发出漏气滋滋声的透明面罩、因缺氧疯狂充血近乎炸裂的瞳孔、颤抖的死死捂住裂缝的手指。",
        aestheticEn: "Focus: Cracked transparent visor hissing leaking air, bloodshot pupils near-bursting from hypoxia, trembling fingers death-gripping the crack.",
        runtime: "IF (距离无毒空气区还有二十米，脚踝被伏魔死死缠住且降灾器红灯读秒清零) THEN (提供机制：主角彻底放弃下半身防守，双手死捂口鼻，硬借着缺氧引发的最后肌肉痉挛将自己拖拽进净化闸机)。",
        runtimeEn: "IF (20m_to_pure_air_ankle_death-gripped_by_fiend_as_filter_red-light_hits_zero) THEN (Provide_Mechanic: Protagonist_abandons_lower-body_defense_hands_clamped_over_mouth/nose_dragging_into_purifier_gate_solely_on_hypoxia-induced_muscle_spasms)."
      }
    },
    {
      id: "the_ultimate_miracle_cure",
      name: "孤证级的奇迹源发抗体", nameEn: "The Ultimate Miracle Cure",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "能瞬间解除绝命状态并建立永久免疫的极罕见消耗品（如丧尸血清、绝种的解蛊仙草、唯一能重构基因的纳米核心）。",
      defEn: "Extremely rare consumable instantly wiping fatal statuses and creating permanent immunity (e.g., Zombie serum, extinct hex-cure herb, single gene-rebuilding nano-core).",
      core: "【表面诱惑】：打破必死法则的封神之药。用掉它，你等于从死神账本中被永久除名。",
      coreEn: "【Surface Temptation】: God-tier drug breaking inevitable-death laws. Use it, and you're permanently struck from the grim reaper's ledger.",
      logic: "【叙事抓手】：它是超级集火标靶。抗体不可复制，主角手握此物，瞬间仇恨从“抵御怪物”逆转为“提防所有尚未感染的活人同类背刺”。这把最单纯的对抗戏码，扭曲成最令人毛骨悚然的人性丛林防守战。",
      logicEn: "【Narrative Affordance】: Super aggro-target. Cure is un-clonable; holding it inverts agro from 'defending against monsters' to 'guarding against backstabbing uninfected humans'. Warps pure survival fights into the creepiest human-jungle defense tests.",
      patch: {
        mechanics: "表层锚点 + [超限同类仇恨 = 队友随时拔枪; 道德博弈机制 = 自己受伤还是让给濒死的爱人; 容器灾难 = 极易在枪战中被打碎]",
        mechanicsEn: "Surface_Anchor + [Max_Human_Aggro = Teammates_quick-draw_anytime; Moral_Dilemma_Mechanic = Use_for_own_wound_or_give_dying_lover; Container_Disaster = Fragile_in_shootouts]",
        aesthetic: "聚焦：在极暗地牢里散发幽幽冷光的那一小管翠绿液体、身后战友原本友善的眼神瞬间变得闪烁和下意识摸刀的倒影。",
        aestheticEn: "Focus: Small vial of emerald liquid emitting cold light in pitch-dark dungeon, formerly friendly eyes of teammate behind instantly flickering while subconsciously grabbing dagger reflection.",
        runtime: "IF (当毒素即将爬入心脏，而身边最好的兄弟竟然也咳出黑血试图拔枪时) THEN (提供机制：主角在自己视网膜灰暗的最后一秒，调转针头将其像飞镖一样扎入兄弟脖颈，自己带着微笑沉入毒潭)。",
        runtimeEn: "IF (Toxin_nears_heart_but_best_brother_coughs_black_blood_trying_to_draw_gun) THEN (Provide_Mechanic: In_last_sec_of_graying_vision_protagonist_flips_needle_darting_it_into_brother's_neck_smiling_sinking_into_toxin_pool)."
      }
    },
    {
      id: "the_countdown_exemption_decree",
      name: "压哨送达的绝对特赦令", nameEn: "The Countdown Exemption Decree",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "由最高法则或最高统帅背书，只要物理展示即可让一切行刑或追杀力量瞬间熄火的凭证，但有极其苛刻的送达时效要求。",
      defEn: "Endorsed by supreme law or commander; showing it physically instantly halts all execution or hunting forces, but has terrifyingly strict delivery deadines.",
      core: "【表面诱惑】：规则层面的物理偏导盾。无论多么无解的密集攻击序列，在法理面前都要乖乖立正。",
      coreEn: "【Surface Temptation】: Rule-level physical deflector shield. No matter how unsolvable the barrage, it must stand at attention before the law.",
      logic: "【叙事抓手】：“屈辱的限时跑酷流”。一旦路上杀了皇家卫队或阵法守卫，特赦令的法理前置即被打破沦为废纸。因此主角空有杀神之力，却被强行禁绝使用致命武器，只能顶着暴雨和物理毒打在泥泞中狂奔硬抗。",
      logicEn: "【Narrative Affordance】: 'Humiliating time-limit parkour'. Killing royal guards or array-keepers en route breaks the legal prerequisite, turning decree to thrash. Thus, a god-killer protagonist is forcibly banned from lethal weapons, merely tanking physical beatings sprinting thru mud.",
      patch: {
        mechanics: "表层锚点 + [绝杀禁令 = 只能冲撞或格挡绝不能拔刀斩杀; 倒数折磨 = 断头台倒数秒表悬顶; 物理挨打 = 放弃战术动作只能直线硬接伤害]",
        mechanicsEn: "Surface_Anchor + [Lethal_Ban = Only_charging_or_blocking_no_slashes; Countdown_Torture = Guillotine_stopwatch_overhead; Tank_Beating = Abandoning_tactics_for_linear_damage-tanking]",
        aesthetic: "聚焦：胸口死死护住那卷黄皮纸而在泥浆中被打断腿骨依然向前爬行的身躯、远方绝命钟楼马上指到十二点的巨大钟面。",
        aestheticEn: "Focus: Body dragging thru mud with broken legs tightly shielding parchment to chest, massive clock face in distance tipping to twelve.",
        runtime: "IF (只差最后百米处刑台砍刀由于时辰已到已然落下) THEN (提供机制：主角爆吼一声撕裂自己被铁戟穿透的肌肉，以极其扭曲的姿态将绑着特赦令的长矛掷穿百米精准洞穿刑具拦下拉绳)。",
        runtimeEn: "IF (Last_100ms_execution_axe_falling_as_time_hits) THEN (Provide_Mechanic: Protagonist_roars_tearing_own_halberd-pierced_muscles_throwing_decree-tied_spear_in_twisted_posture_100ms_precisely_piercing_the_apparatus_halting_the_rope)."
      }
    },
    {
      id: "the_only_working_thermal_core",
      name: "冰冷死局中唯一运转的供能炉", nameEn: "The Only Working Thermal Core",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "在极寒、绝对黑暗或灵力真空区内，唯一散发着半径极小“存活光幕/热场”的老旧物理引擎。",
      defEn: "In extreme cold, absolute dark, or mana-vacuum, the only old physical engine radiating a tiny-radius 'survival aura/heat field'.",
      core: "【表面诱惑】：抵抗大自然终极抹杀的最强法宝，只要站进这个小半径，就能维持血压和心跳不被清零。",
      coreEn: "【Surface Temptation】: Strongest artifact resisting nature's ultimate erasure. Step into this tiny radius, BP and heartbeat freeze-stop is avoided.",
      logic: "【叙事抓手】：不可移动的阵地防守战，外加“极度焦虑的燃料逼近极限”。这把战场压缩到了十米内，且为了维持火炉运转，主角必须劈碎珍贵古籍、死去挚友的骨灰盒，甚至防御阵型的木桩扔进去当燃料。",
      logicEn: "【Narrative Affordance】: Immovable trench defense combined with 'ultra-anxious fuel limits'. Compresses battlefield to 10m. To keep boiler running, protagonist must chop precious books, fallen friends' urns, or defensive wooden stakes to feed the flame.",
      patch: {
        mechanics: "表层锚点 + [画地为牢 = 出光圈三秒即被寒冰强锁机能; 添油战术 = 每十秒必须填充可燃物形成抽风式节奏; 价值崩盘 = 用文明古物抵御严寒的道德破坏]",
        mechanicsEn: "Surface_Anchor + [Drawn_Cage = 3s_out_of_halo_forces_frost-lock; Adding_Fuel_Tactic = Must_shovel_burnables_every_10s_creating_frenzy_rhythm; Value_Crash = Moral_destruction_of_burning_civ_antiques_for_warmth]",
        aesthetic: "聚焦：狂风暴雪中脆弱摇摇欲坠的橘红火苗、主角黑着眼眶机械地用铁锹将带血木块往炉底狂塞的神情。",
        aestheticEn: "Focus: Fragile flickering orange flame in raging blizzard, protagonist with dark-circled eyes mechanically shoveling bloody wood into furnace base.",
        runtime: "IF (怪物冲破大门，温度计直接探底导致最后一点火苗变蓝) THEN (提供机制：主角砍断了支撑避难所天花板的最后三根承重柱强填火炉，在头顶整个冰川建筑轰塌的极致动静中，抱着火炉核心贪婪吞噬死前温暖)。",
        runtimeEn: "IF (Monsters_breach_door_temp_bottoms_out_turning_last_flame_blue) THEN (Provide_Mechanic: Protagonist_chops_down_refuge's_last_3_load-bearing_pillars_feeding_furnace_embracing_core_greedily_absorbing_warmth_as_glacier_building_collapses_overhead)."
      }
    },
    {
      id: "the_extreme_degraded_survival_escape",
      name: "物理剥夺下的极端虫狱逃亡", nameEn: "The Extreme Degraded Survival Escape",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "主角失去双腿直立行走或高阶移动能力，仅能在极其恶劣的地形（玻璃管、排污沟、带刺灌木）中缓慢爬行的一段空间。",
      defEn: "Protagonist loses bipedal walk/high-tier mobility, only able to slowly crawl thru horrible terrain (glass pipes, sewer, spiked brush).",
      core: "【表面诱惑】：用最具屈辱感的地平线爬行，换取最微小的从绞肉机底盘悄悄溜走的一线生机。",
      coreEn: "【Surface Temptation】: Exchanging the most humiliating horizon-level crawl for the slimmest chance to slip out from under the meat-grinder.",
      logic: "【叙事抓手】：撤销一切英雄式的体面跑酷，强制锁定低视角微操作。每一米的摩擦都会撕裂伤口留下让猎犬追踪的血迹。这就是被完全去势后的降维匍匐炼狱。",
      logicEn: "【Narrative Affordance】: Revokes all heroic parkour, force-locking low-POV micro-ops. Every meter of friction tears wounds leaving blood for hounds to track. A complete dimensional-demotion crawling purgatory post-castration.",
      patch: {
        mechanics: "表层锚点 + [超低视距物理锁定 = 永远只能看着污泥和前方一米; 无法清理的痕迹 = 被背后的探照灯死死尾随; 高频微痛觉展示 = 玻璃渣刺入手心]",
        mechanicsEn: "Surface_Anchor + [Ultra-low_POV_Lock = Only_seeing_sludge_1m_ahead; Uncleanable_Trails = Dead-followed_by_searchlights_behind; High-freq_Micro-pain = Glass_shards_piercing_palms]",
        aesthetic: "聚焦：在淤泥里倒映着漫天霓虹的惊恐单眼、磨得露出白骨的指节死死抠住前方生锈下水井盖冒出火星的惨景。",
        aestheticEn: "Focus: Terrified single eye reflecting neon sky in sludge, bone-exposed knuckles sparking while death-gripping rusty sewer grate ahead.",
        runtime: "IF (出口处通上了高压电网，而身后的多管机枪巡逻狗已经露出了獠牙) THEN (提供机制：主角发出一声不像人类的哀嚎，完全不顾高压电将其背部电焦，像一团生肉一样硬生生从通电铁栅栏那狭窄的缝隙里挤碾出一条血路)。",
        runtimeEn: "IF (Exit_grid_is_high-voltage_and_gatling-patrol-dogs_bare_fangs_behind) THEN (Provide_Mechanic: Protagonist_wails_inhumanly_ignoring_HV_charring_back_forcibly_extruding_like_raw_meat_thru_narrow_electric_iron_bars_making_blood-path)."
      }
    },
    {
      id: "the_dangerously_edged_neutralizer",
      name: "徘徊在暴走边缘的压制剂", nameEn: "The Dangerously Edged Neutralizer",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "唯一能将体内的禁忌血脉、变异病毒或暴走魔力强制压刻在理智线下的药剂/符咒，一旦数值归零就会万劫不复。",
      defEn: "Sole serum/seal forcibly stamping forbidden bloodline, mutant virus, or frenzied mana below the sanity line. Zero means eternal doom.",
      core: "【表面诱惑】：保持人形的最后理智紧身衣。只要药效还在，就证明你在这个吃人世界中还没有变成怪物。",
      coreEn: "【Surface Temptation】: Last sanity straitjacket keeping human form. So long as it lasts, proves you haven't become a monster in this cannibal world.",
      logic: "【叙事抓手】：这是典型的“反向狂战士抗拒战”。压制消失后主角非但不会变弱，反而会爆发出无法无天的高阶杀伤力，代价是操作系统失去对身体的控制权并将友军标记为猎物。因此战斗中最大的难点在于：强行压抑并抗拒自己想要大开杀戒的力量暴走。",
      logicEn: "【Narrative Affordance】: Typical 'Reverse Berserker resistance'. When suppression vanishes, protagonist doesn't weaken but bursts into unlawful high-tier lethality, at cost of losing pilot control and marking allies as prey. Biggest combat difficulty: forcibly suppressing/resisting one's own power-surge to slaughter.",
      patch: {
        mechanics: "表层锚点 + [反向力量增强 = 崩离崩溃越近战斗数值越变态; 友军自瞄锁定 = 视觉全红不受控攻击; 物理自缚战术 = 一半力量打怪一半拉住自己的手]",
        mechanicsEn: "Surface_Anchor + [Reverse_Power_Buff = Closer_to_collapse_crazier_the_combat_stats; Friendly-Fire_Auto-Aim = Vision_red_uncontrolled_attacks; Phys_Self-Bind = Half_power_hits_mob_other_half_pulls_own_hand_back]",
        aesthetic: "聚焦：脖颈侧面像黑蛇一样暴突的诡异青筋、战术匕首死死扎在自己大腿上利用剧痛找回一秒清明的双眼。",
        aestheticEn: "Focus: Eerie black-snake bulging veins on neck, tactical dagger stabbed tight into own thigh using sheer agony to find 1s clear vision.",
        runtime: "IF (药效彻底清零，足以一掌拍碎防弹车的变异手掌已经贴在了女主脸颊前一毫米) THEN (提供机制：主角在野兽本能完全剥夺大脑的前一瞬，将整根前臂生生卡进液压机里砸断，阻断了挥出那致命一刀的任何物理可能)。",
        runtimeEn: "IF (Effect_hits_zero_mutant_palm_that_could_shatter_APC_is_1mm_from_crush's_cheek) THEN (Provide_Mechanic: Protagonist_in_the_millisecond_before_beast_instinct_takes_brain_shoves_entire_forearm_into_hydraulic_press_snapping_it_blocking_all_physics_of_the_fatal_slash)."
      }
    },
    {
      id: "the_absolute_pure_resource",
      name: "一滴即废的绝世纯净源", nameEn: "The Absolute Pure Resource",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "无论背景是深空、末日还是诡秘森林，那些装在脆弱容器中，唯一能让人延续机理不被感染同化的圣洁水源或神圣物质。",
      defEn: "Regardless of deep-space, doomsday, or eerie forest, the sole holy water/divine substance in fragile container extending bio-logic from infection/assimilation.",
      core: "【表面诱惑】：最底层的生存硬通货，它不是用来买游艇，而是为了阻止肉体跟着每一次呼吸而溃烂腐败的纯粹神迹。",
      coreEn: "【Surface Temptation】: Baseline survival hard-currency. Not for yachts, but pure miracle to stop flesh rotting with every breath.",
      logic: "【叙事抓手】：不可逆的高危污染脆弱性。激烈的抢夺战中，稍有不慎让其破裂或混入一丝外部戾气（如辐射沙尘、怨魂之血），极致庇护便当场湮灭。它将动作场面压缩到了“连打架都不敢挥大动作怕震碎瓶子”的微操地狱。",
      logicEn: "【Narrative Affordance】: Irreversible high-risk pollution fragility. In grabs, slight crack or trace of external malice (radioactive dust, wraith blood) instantly annihilates the extreme sanctuary. Compresses action scenes into 'micro-hell where big punches are feared lest shattering the bottle'.",
      patch: {
        mechanics: "表层锚点 + [一滴灭绝 = 轻度混入即遭清零; 微型防爆 = 行动框架受到极度局促收敛; 濒临疯狂= 生存必需品眼看破裂的绝望]",
        mechanicsEn: "Surface_Anchor + [One-Drop_Extinction = Slight_mix_causes_zero; Micro_Anti-Blast = Action_frame_extremely_cramped/restrained; Near_Madness = Despair_watching_survival_necessity_cracking]",
        aesthetic: "聚焦：污浊风暴中紧紧护在胸口的水晶容器、暴徒一群口红舌干眼冒绿光却在争抢中小心翼翼僵硬互搏的滑稽感。",
        aestheticEn: "Focus: Crystal container tightly guarded at chest in murky storm, comic-stiffness of dry-lipped green-eyed mobs carefully wrestling to avoid breaking it during grab.",
        runtime: "IF (两人拿着匕首在满地残骸中死拼锁住喉咙，旁边的净水瓶出现一条裂缝开始渗出最后一口生命之水) THEN (提供机制：双方眼神在半秒内从你死我活的杀机瞬间融转为放弃防守齐齐扑向地去舔水滩的极致妥协)。",
        runtimeEn: "IF (Two_locked_in_death-melee_throats_held_nearby_pure_water_flask_cracks_leaking_the_last_sip_of_life) THEN (Provide_Mechanic: Both_gazes_melt_in_half_sec_from_murderous_to_abandoning_defense_diving_to_floor_licking_the_puddle_in_extreme_compromise)."
      }
    },
    {
      id: "the_impassable_steel_checkpoint",
      name: "隔绝地狱的全物理隔离边检站", nameEn: "The Impassable Steel Checkpoint",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "由绝对统治阶层建立的巨大工事门槛（如同钢铁国界墙、结界长城、深空隔离门），内测是安居乐业，外侧是被放弃的法外行刑场。",
      defEn: "Giant fortification threshold set by absolute rulers (Steel border wall, Barrier Great Wall, Deep Space Quarantine Door). Inside is peace, outside is abandoned lawless execution ground.",
      core: "【表面诱惑】：阶级地位与生存概率的物理分界线。爬过这道墙，就是强行改写户籍从畜生变回平民。",
      coreEn: "【Surface Temptation】: Physical boundary of class status and survival odds. Crawl over this wall to forcibly rewrite registration from beast to civ.",
      logic: "【叙事抓手】：无法绕行的直线强碾塔防。这类设施往往配备无情机枪炮塔和识别矩阵，主角的生存压力在于：前方是冷血且火力无限的正规军阵地，后方的夜幕里是正在吞噬万物的追兵大潮。腹背受敌的三明治杀戮死局。",
      logicEn: "【Narrative Affordance】: Unbypassable linear bulldozer tower-defense. Furnished with cold-blooded turrets/scanners. Protagonist's pressure: Front is infinite-firepower regular army, behind in the night is the tide of pursuers eating everything. Sandwiched kill-deadlock.",
      patch: {
        mechanics: "表层锚点 + [无法绕行 = 地形极度开阔的死亡冲锋带; 正反向双重输出 = 前面是正规火力后背是怪物撕咬; 证件验证 = 到达门下还要强行过安全系统]",
        mechanicsEn: "Surface_Anchor + [Unbypassable = Extreme_open-terrain_death_charge_zone; Front-back_Double_Output = Front_regular_fire_back_monster_bites; ID_Verification = Reaching_door_still_needs_forcing_thru_security_system]",
        aesthetic: "聚焦：在探照灯交织的无人区雪地里拖出的长长血痕、边防哨兵面无表情隔着防弹玻璃按下降下隔离网手柄的机械动作。",
        aestheticEn: "Focus: Long bloody drag-marks in snow no-man's-land woven by searchlights, border guard emotionlessly pressing quarantine net lowering lever behind bulletproof glass.",
        runtime: "IF (好不容易冲到墙下却发现只允许一人容留进入，而身后是被重武器锁定的老弱妇孺) THEN (提供机制：主角微笑着将铭牌甩进门内，反身用电焊枪把重型大门的金属拉链彻底与墙面焊死，举起最后一把步枪直面无尽尸潮)。",
        runtimeEn: "IF (Barely_reached_wall_only_allowed_one_entry_behind_are_heavy-weapon-locked_weak/old_civs) THEN (Provide_Mechanic: Protagonist_smiles_throwing_dogtag_inside_turns_around_using_welding-torch_permanently_sealing_heavy_door's_metal_track_to_wall_raising_final_rifle_facing_endless_zombie_tide)."
      }
    },
    {
      id: "the_lethal_fuel_attrition",
      name: "招来死亡视线的消耗性燃料", nameEn: "The Lethal Fuel Attrition",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "为了维持防护罩、发电机或者解药合成炉运转，必须不断外出搜集并高分贝填装的实体原料包（如晶石、柴油、甚至是鲜血）。",
      defEn: "To keep shield, generator, or brew-furnace running, must constantly scavenge and loud-load tangible raw material packs (crystals, diesel, or even blood).",
      core: "【表面诱惑】：庇护所赖以生存的续命药。这堆不起眼的黑煤块就是能让主角多活十分钟的黄金本位。",
      coreEn: "【Surface Temptation】: Life-extender shelter depends on. These unassuming black coal lumps are the gold standard earning protagonist 10 more minutes of life.",
      logic: "【叙事抓手】：典型的“打木桩式往返拉锯战”。燃料的分布极度分散且收集极易制造出声光动静，等于逼迫本该死守的主角不断像个拾荒者一样跑进危险边缘并在“扛着死重物资无法开枪”的尴尬状态下面对猎杀。",
      logicEn: "【Narrative Affordance】: Typical 'fetch-quest seesaw war'. Fuel dispersed; collecting creates massive loud light/noise, forcing supposed dead-defending protagonist to constantly run into danger edges like a scavenger, facing hunts in awkward 'carrying dead weights unable to shoot' state.",
      patch: {
        mechanics: "表层锚点 + [外出暴露强执 = 永远要在极限倒数时跑出庇护区; 负重不可抗争 = 两手提着油桶只剩用嘴唇咬住手雷拉环; 位置锁定引诱 = 猎手学会了在燃料刷新点守株待兔]",
        mechanicsEn: "Surface_Anchor + [Forced_Outdoor_Exposure = Must_always_run_out_of_safezone_at_extreme_countdown; Unfightable_Weight = Hands_holding_barrels_only_lips_left_for_grenade_pins; Locked_Position_Lure = Hunters_learn_to_camp_fuel_spawns]",
        aesthetic: "聚焦：重到使得主角双肩严重脱臼倾斜的那半桶原油、在狂风中火柴怎么也点不燃引擎滤芯的极度焦虑镜头抖动。",
        aestheticEn: "Focus: Half-barrel crude oil heavy enough to dislocate tilt protagonist shoulders, extreme anxious camera-shake of matches failing to light engine filter in roaring wind.",
        runtime: "IF (营地护盾值暴跌倒数归零，最后两块电池落在距防线五十米的火力交织点) THEN (提供机制：队友用火力强行压制三秒盲区，主角纯凭百米冲刺速度滑跪进血泊抄起沉重的电池，靠后背硬吃下两发流弹弹片才死命滚进发电机槽口完成通电)。",
        runtimeEn: "IF (Camp_shield_crashes_to_zero_last_2_batteries_fell_50m_away_in_crossfire_zone) THEN (Provide_Mechanic: Teammate_suppresses_3s_blind-zone_protagonist_pure-sprints_sliding_into_blood-pool_scooping_heavy_batteries_tanking_two_shrapnel_hits_on_back_rolling_desperately_into_generator_slot_connecting_power)."
      }
    },
    {
      id: "the_indestructible_high_dimensional_safe_zone",
      name: "高维法则强锁的绝对免伤区", nameEn: "The Indestructible High-Dimensional Safe Zone",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "由最高级宇宙法则、神圣律令或洲际条约规定的不可侵犯极点（如同和平饭店大堂、高等外星造物的庇护阵、禁魔圣城）。",
      defEn: "Inviolable pole dictated by max-level cosmic laws, divine decrees, or ICBM-treaties (e.g., Peace Hotel lobby, higher alien shielding array, forbidden-magic holy city).",
      core: "【表面诱惑】：绝对规则级别的法理防弹衣。在这个极小的范围内，神明或超级强权为你提供免受一切私刑的护身符。",
      coreEn: "【Surface Temptation】: Absolute rule-level legal kevlar. Within this tiny range, deities or super powers offer amulets against all lynchings.",
      logic: "【叙事抓手】：空间界限带来的“半步天堂半步地狱极压对比”。追杀者可以在结界外一厘米处磨刀霍霍排成大军，只要主角前脚尖探出白线一毫米就会被万箭穿心。这就形成了一个高度幽闭且被随时“虎视眈眈”的静态孤岛折磨。",
      logicEn: "【Narrative Affordance】: Spatial bounds creating 'half-step heaven/hell extreme contrast pressure'. Pursuers can sharpen knives 1cm outside barrier in an army, toeing 1mm past the white line guarantees trillion-arrow heart-pierce. Forms a highly claustrophobic static isolated-island torture constantly 'glared at'.",
      patch: {
        mechanics: "表层锚点 + [视线凌迟 = 门外挤满了流口水的红名怪却无法打进来; 绝对停火条约 = 主角也不能在里面开火否则护盾剥夺; 被迫饥荒 = 绝对防御无法提供补给必须被逼出去]",
        mechanicsEn: "Surface_Anchor + [Visual_Lingchi = Door_packed_with_drooling_red-names_unable_to_enter; Absolute_Ceasefire_Pact = Protagonist_also_can't_fire_inside_else_shield_strips; Forced_Starvation = Absolute_defense_provides_no_supply_must_be_forced_out]",
        aesthetic: "聚焦：地板上用油漆画出的一条斑驳黄线、黄线外侧全副武装只等倒地前扑的雇佣兵军团、主角在黄线内点烟时手部无法遏制的冷汗颤抖。",
        aestheticEn: "Focus: Faded yellow tape line painted on floor, heavily armed merc legion waiting just outside to pounce, protagonist's uncontrollably cold-sweating trembling hands lighting cigarette inside line.",
        runtime: "IF (为了逼主角走出保护伞阵法，反派直接在结界边缘半米处开始生生活剥主角的线人) THEN (提供机制：主角在白线内双眼血红，听着线人的惨叫硬生生将自己的指甲抠碎在光秃秃的台阶上，最终跨前一步放弃所有免伤判定直接在物理空间引爆了同归于尽的光子手雷)。",
        runtimeEn: "IF (To_force_protagonist_out_of_umbrella_array_villain_starts_flaying_protagonist's_informant_alive_0.5m_from_barrier_edge) THEN (Provide_Mechanic: Protagonist_inside_white-line_eyes_blood-red_hearing_screams_shattering_own_fingernails_on_bare_steps_finally_taking_one_step_forward_abandoning_all_immunity_physically_detonating_suicide_photon_grenades)."
      }
    },
    {
      id: "the_mirage_decoy_trap",
      name: "伪装成生命绿洲的致命诱捕网", nameEn: "The Mirage Decoy Trap",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "在漫长绝望跋涉后，视觉感知和仪器反馈上呈现100%完美补救环境的恶毒伪装区（假绿洲陷阱、发出假广播的食人庇护所、幻象神庙）。",
      defEn: "After long desperate trek, perfectly camouflaged zone presenting 100% perfect relief env on visual/instrument feedback (Fake oasis trap, cannibal shelter with fake broadcasts, illusion temple).",
      core: "【表面诱惑】：从紧绷到极致的地狱中突然抛下的柔软天国阶梯。让猎物因为巨大的心理放松而主动脱下铠甲。",
      coreEn: "【Surface Temptation】: Soft heavenly stair suddenly dropped from extreme tense hell. Makes prey actively strip armor due to massive mental relief.",
      logic: "【叙事抓手】：“卸空防备后的瞬间心理深渊坍塌”。物理空间从“疗伤补给点”一秒倒转成“闭门屠宰场”。主角甚至已经在里面脱了鞋、喝了迷药般的净水，枪械也被锁在寄存处。这时候地刺和真菌触手忽然从沙发底窜出，战斗爆发在主角物理输出轴最脆弱的瞬间。",
      logicEn: "【Narrative Affordance】: 'Psycho-abyss collapse after shedding all guard'. Physical space 1-sec flips from 'healing supply point' to 'locked slaughterhouse'. Protagonist even doffed shoes, drank drugged pure-water, guns locked in registry. Then ground-spikes/fungal-tentacles burst from sofa base; combat erupts at protagonist's most physically fragile moment.",
      patch: {
        mechanics: "表层锚点 + [裸防战圈 = 必须在没有护具的情况下战斗; 密闭绝杀门 = 进门容易退门被生化电网封死; 药剂虚脱致幻 = 头重脚轻的强力负面Buff下强推走位]",
        mechanicsEn: "Surface_Anchor + [Nude-Defense_Ring = Must_fight_sans_armor; Sealed_Death_Door = Easy_entry_exit_sealed_by_bio-electric_grid; Drug-Weakness_Illusion = Top-heavy_strong_Debuff_forced_kiting]",
        aesthetic: "聚焦：流淌着甘甜清水的银色水龙头在倒吊的镜子里反射出浓稠血浆、伪善老板娘慈祥的机械人皮面具撕裂露出绞肉齿轮、主角慌忙光脚踩在满是碎骨片的地板上急退。",
        aestheticEn: "Focus: Silver faucet flowing sweet water reflecting thick blood in inverted mirror, hypocritical hostess's kind bot-skin mask tearing exposing meat-grinder gears, protagonist scrambling barefoot backwards on bone-shard-filled floor.",
        runtime: "IF (喝下热汤浑身防备卸下的那刻，发现碗底沉着半截戴着同伴戒指的手指头) THEN (提供机制：药效发作让主角四肢麻木，他立刻用滚烫的汤汁强行泼在自己大腿根上唤醒神经，极其狼狈地用一张木头椅子顶穿天花板爬进通风管疯狂后撤逃离屠宰线)。",
        runtimeEn: "IF (Drinking_hot_soup_all_guard_down_moment_finding_half_finger_wearing_partner's_ring_at_bowl_bottom) THEN (Provide_Mechanic: Drug_numbs_all_limbs_protagonist_instantly_splashes_boiling_soup_on_own_groin_thighs_to_wake_nerves_clumisly_using_wooden_chair_to_smash_ceiling_climbing_into_vents_frantically_retreating_from_slaughter-line)."
      }
    },
    {
      id: "the_cursed_sos_broadcaster",
      name: "同归于尽的诅咒求助电台", nameEn: "The Cursed SOS Broadcaster",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "唯一能够向外界大本营呼唤战术救援的物理装置，但不分敌我地会在全频段发出能被狩猎者轻易定位的震天噪音或能量坐标。",
      defEn: "Sole physical device calling outside tactical rescue, but indiscriminately emits deafening noise/energy coords tracking easily across all bands for hunters.",
      core: "【表面诱惑】：呼天换地的神兵降临按钮。按下去，十五分钟后直升机带你回家；但不按，马上就会被困死在原地。",
      coreEn: "【Surface Temptation】: Heaven-calling rescue button. Press it, chopper brings you home in 15 mins; don't press, die trapped right now.",
      logic: "【叙事抓手】：“必死倒计时的塔防引雷战”。求救信号等于向全地图宣告“这里有一块大肥肉”。机器一旦开始物理轰鸣预热传输，四面八方潜伏在暗处的怪物/暴徒如同嗅到血腥味的狂鲨般开始向此阵眼中心集结。主角这十五分钟的防守战比过去一年加起来都要惨烈万倍。",
      logicEn: "【Narrative Affordance】: 'Sure-death countdown tower-defense lightning-rod war'. SOS signal broadcasts 'juicy meat here' to whole map. Once machine roars pre-heating transmission, monsters/thugs hidden in dark corners everywhere swarm to this axis like blood-smelling sharks. Protagonist's 15min defense is 10,000x bloodier than the past year combined.",
      patch: {
        mechanics: "表层锚点 + [超限嘲讽场 = 全图仇恨最大化定向转移; 装置物理不灭 = 不能撤退必须确保这块破铜烂铁不散架; 四面受敌孤岛 = 没有任何地形优势的中心地狱]",
        mechanicsEn: "Surface_Anchor + [Maxed_Taunt_Field = Full-map_aggro_maximized_directed_transfer; Device_Phys-Immortal = No_retreat_must_ensure_this_scrap_metal_survives; Surrounded_Island = Center_hell_with_zero_terrain_advantage]",
        aesthetic: "聚焦：发报机顶端一闪一灭的刺血红光在暗夜中如灯塔般绝望、无线电里夹杂着静电的遥远救援女声与脚下已经开始挠墙的骇人抓挠声合为一处。",
        aestheticEn: "Focus: Blinking blood-red beacon on transmitter flashing desperately like lighthouse in dark night, distant static-laced female rescue radio voice merging closely with terrifying claw-scratching sounds tearing the walls beneath feet.",
        runtime: "IF (在救援直升机还剩两分钟到达，但大门已被尸群彻底撞得扭曲变形机枪枪管发红炸膛退弹) THEN (提供机制：主角苦笑一声，用厚重的大衣彻底裹住那个无线电箱子，点燃了布满营地周围所有的汽油桶，化身一团怒火风暴在燃烧中硬生生为箱子腾开血肉隔离区)。",
        runtimeEn: "IF (Rescue_chopper_2_mins_out_but_door_totally_warped_by_zomb_tide_MG_barrel_red-hot_burst_jammed) THEN (Provide_Mechanic: Protagonist_smiles_bitterly_wrapping_radio-box_completely_in_thick_coat_igniting_all_gas_drums_around_camp_transforming_into_a_fire-storm_physically_burning_a_flesh-quarantine_zone_for_the_box)."
      }
    },
    {
      id: "the_deep_vault_of_origin_seeds",
      name: "埋藏于极渊的末日火种库", nameEn: "The Deep Vault of Origin Seeds",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "在近乎完全隔离生命常识的极端静默下层空间（冰川万米之下、海底无光深渊、陨落地底的航天器），储藏着能够重新格式化并全盘复苏大地的母本土样或基因包。",
      defEn: "In extreme silent lower-tier spaces isolating bio-patterns (10000m sub-glacial, lightless deep sea, crashed subterranean arcs), holding master soils/gene packs to reformat and revive the earth.",
      core: "【表面诱惑】：从根本上重获新生的造物主钥匙。哪怕地表文明烧成了玻璃，只要这颗火种尚存，一切就能推倒重来。",
      coreEn: "【Surface Temptation】: Creator's key to fundamental rebirth. Even if surface civ burns to glass, as long as this spark remains, all can be rebooted.",
      logic: "【叙事抓手】：它的物理位置拥有“深邃不可触”的高额下潜成本。主角团队在获得它之前，必须经历氧气匮乏、深渊水压或极寒侵蚀的层层肉体剥离。而在带它浮出水面的过程中，任何外部火力的交恶或是微小操作失误，都会导致整个文明的最后底牌跌落亿万深渊，这种“高敏反倒持”制造了步步惊心、战战兢兢的环境高压战。",
      logicEn: "【Narrative Affordance】: Its physical location has 'deep untouchable' high dive-cost. Before getting it, team undergoes bodily peeling from oxygen-lack, abyssal pressure, or glacial erosion. In bringing it to surface, any external crossfire or slight misstep drops the entire civ's final chip down billions of abyss. This 'high-sensitive reverse-hold' creates harrowing, trembling env-pressure wars.",
      patch: {
        mechanics: "表层锚点 + [超重下潜返回轴 = 越往上走体力/氧气越是空管; 容器脆弱度极高 = 只能用单手进行护栏借力或缓慢攀爬; 幽闭环境强引爆 = 声音在通道内回声放大引来巨型潜伏物]",
        mechanicsEn: "Surface_Anchor + [Heavy_Dive-Return_Axis = The_higher_the_less_HP/O2_left; Container_High-Fragility = Forces_single-hand_railing_grip_or_slow_climb; Claustro_Env_Blast = Sound_amplified_in_chute_alerts_giant_lurkers]",
        aesthetic: "聚焦：深潜探照灯穿透几千米黑水照映出的宏伟冰冻基因库那震撼心灵的一瞥、悬吊在摇摇晃晃钢缆上只剩单手死扒挂钩的主角以及脚下无底幽静的黑色倒影。",
        aestheticEn: "Focus: Dive-searchlight piercing thousand-meter black water reflecting the mind-shaking grand frozen gene-vault, protagonist hanging on swaying steel cable death-gripping hook with one hand above bottomless quiet black reflection.",
        runtime: "IF (升降机钢缆被水底变异体绞断，承载着最后火种的吊舱开始呈现绝望的物理自由落体坠向岩浆) THEN (提供机制：主角切断自己身上的保护安全索，以肉身突破极端重力加速度向下俯冲拦截，将钢刺钉进墙缝，强行用单只断臂拉住数吨重的下滑吊绳完成超越极限的停摆)。",
        runtimeEn: "IF (Elevator_cable_snapped_by_underwater_mutant_pod_carrying_last_spark_free-falls_despairingly_toward_magma) THEN (Provide_Mechanic: Protagonist_cuts_own_safety_tether_flesh-diving_down_breaking_extreme_G-force_to_intercept_hammering_steel-spike_into_wall_crack_using_one_broken_arm_to_forcibly_halt_the_multi-ton_sliding_cable_in_a_limit-breaking_stop)."
      }
    },
    {
      id: "the_high_altitude_defector_extradition",
      name: "粉骨风险下的背叛逃离", nameEn: "The High-Altitude Defector Extradition",
      group: "5. 生存与绝对庇护", groupEn: "5. Survival & Sanctuary",
      def: "携带极具破坏力机密或高级身份的背叛者，利用极端物理载具（如超音速迫降舱、满目疮痍的走私船或断电飞梭）强行砸向或坠向绝对庇护点外的隔离缓冲区。",
      defEn: "Traitor carrying highly destructive secrets/high-status, using extreme phys vehicles (supersonic crash-pod, heavily-damaged smuggle ship, powerless shuttle) forcibly smashing into or crashing toward the quarantine buffer outside absolute sanctuary.",
      core: "【表面诱惑】：用肉体承受毁灭性的着陆冲击，换取与地狱旧主权体系彻底割袍断义、在新世界重启的合法身份证明。",
      coreEn: "【Surface Temptation】: Taking devastating landing impacts on flesh to trade for total severance from hellish old sovereignty, gaining legal IDs to reboot in the new world.",
      logic: "【叙事抓手】：这是一场“坠落迫降+敌后受审”的双重重力场。物理逃脱并非优雅的间谍穿梭，而是近乎粉身碎骨的“流星撞击式硬着陆”。叛逃者拖着折断的肋骨、大量失血的躯壳从残骸中爬出时，面对的往往不是献花的接应部队，而是几十把上膛的突击步枪和狐疑的审讯。他在极度虚弱中还必须靠强大的逻辑与反间谍口才进行硬核说服战。",
      logicEn: "【Narrative Affordance】: A dual gravity-field of 'crash-landing + behind-enemy-lines trial'. Escape isn't elegant spy-weaving, but near-pulverizing 'meteor-collision hard landing'. Crawling from wreckage with broken ribs and massive blood-loss, defector faces not flowers but dozens of locked ARs and suspicious interrogations. In extreme weakness, must use powerful logic/counter-spy rhetoric for a hardcore persuasion war.",
      patch: {
        mechanics: "表层锚点 + [超重损伤出场 = 初始血条强锁10%; 内外双向追杀 = 旧主导弹锁定且新主举枪戒备; 强词夺理系统 = 强迫主角用重伤之躯展开大段台词对抗]",
        mechanicsEn: "Surface_Anchor + [Overweight_Damage_Spawn = Initial_HP_locked_at_10%; Two-way_Hunt = Old_master_missiles_lock_while_new_master_aims_guns; Extortion_Logic_System = Forces_protagonist_to_perform_long_dialogue_duels_in_heavy_wound_state]",
        aesthetic: "聚焦：在夜空中划过的一道拖着浓浓黑烟即将坠毁的粗犷烈焰红线、残骸火光中举着双手一瘸一拐地迎向无数防暴盾牌与激光红线的落魄背影。",
        aestheticEn: "Focus: Rough fiery red line trailing thick black smoke crashing across night sky, limping wretched figure with hands raised stepping from wreckage flames toward countless riot-shields and red lasers.",
        runtime: "IF (刚从碎裂的空投舱里带着满头献血滚出，新城防守军的指令居然是立即就地击毙这个前任刽子手) THEN (提供机制：主角咳出内脏残片，用沾血的手抛出一块敌军司令部的量子解密中枢盘，以不容置疑甚至带点轻蔑的绝高音量嘶吼出能逆转战局的开机密钥前奏，强行用信息势差碾灭了枪口的火花)。",
        runtimeEn: "IF (Just_rolled_out_of_shattered_drop-pod_covered_in_blood_new-city_defense_order_is_to_instantly_execute_this_ex-executioner_on-site) THEN (Provide_Mechanic: Protagonist_coughs_organ_fragments_throwing_blood-stained_enemy-HQ_quantum_decrypt_hub_roaring_the_bootup_key_prelude_that_can_reverse_the_war_in_an_unquestionable_even_scornful_high-pitch_forcibly_snuffing_gun_sparks_with_info-gap_supremacy)."
      }
    }
  ]
};
