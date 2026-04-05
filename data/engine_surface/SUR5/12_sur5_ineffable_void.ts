import { LibraryCategoryDef } from '../../../types';

export const SUR5_INEFFABLE_VOID: LibraryCategoryDef = {
  id: "sur5_ineffable_void",
  name: "12. 虚无的盲盒 (The Ineffable Void Box)",
  nameEn: "12. The Ineffable Void Box",
  desc: "纯粹的剧情驱动器（麦高芬），除了引发各方极其惨烈的抢夺与牺牲外，往往没有实际可观测的物理意义或最终揭示。如：密码箱里的神秘反光、死都不许打开的漆黑信封、一旦直视就会发疯的发光陨石。\n在这个叙事系统中，我们将“盲盒”与“极端肉体代价/强迫性绝望护送”强绑定。",
  descEn: "Pure plot driver (MacGuffin) with often no observable physical meaning or final reveal, existing only to trigger horrific struggles and sacrifices. e.g., the glowing briefcase, the unopened black envelope, the madness-inducing meteorite.\nIn this system we bind 'The Box' to 'extreme physical toll / compulsory desperate escort'.",
  items: [
    {
      id: "the_luminescent_void_briefcase",
      name: "透出诡光的死锁手提箱", nameEn: "Dead-Locked Glowing Briefcase",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一个由最高强度合金/陨铁打造、被粗大锁链死死缠绕的箱子，从缝隙中透出一种无法名状的诡异光芒。",
      defEn: "A case forged of supreme alloy/meteoric iron, tightly wrapped in thick chains. An unnameable eerie glow leaks from its seams.",
      core: "【表面诱惑】：世界上所有大势力都愿为它荡平一国。只要送达终点，就能买下任何东西。里面是什么，谁也不知道。",
      coreEn: "【Surface Temptation】: All mega-factions will raze a country for it. Delivering it buys anything. What is inside? Nobody knows.",
      logic: "【叙事抓手】：光芒具有无可违抗的辐射洗脑性，会放大携带者的妄想与疯狂。为了不让箱子被抢走，主角在一上路时就切断了自己的痛觉神经，将箱子把手彻底焊死/用咒钉钉死在自己的桡骨上。一路上主角的右臂因沉重的拖拽和物理摩擦几近化作白骨烂肉，但他面对全城倾剿却只能像条癫狗一样护死这个“根本不知何物”的光源。",
      logicEn: "【Narrative Affordance】: The glow has irresistible radiation-brainwashing, amplifying delusion and madness. To prevent theft, the protagonist immediately severs their own pain receptors and welds/nails the handle directly into their own radius bone. Along the journey, the right arm turns to rotten flesh and bone from the heavy drag and friction, yet facing a city-wide purge, they defend this 'unknown light source' like a maddened dog.",
      patch: {
        mechanics: "表层锚点 + [绝对麦高芬 = 所有人为之死绝的唯一解; 骨肉相连 = 物理锁死不可掉落; 致幻诅咒 = 箱子的光芒是逼疯护送者的毒药]",
        mechanicsEn: "Surface_Anchor + [Absolute_MacGuffin = The_only_answer_everyone_dies_for; Flesh_Welded = Physically_locked_cannot_be_dropped; Hallucinatory_Curse = The_glow_drives_the_escort_mad]",
        aesthetic: "聚焦：血雨泥泞中，主角的右臂已被拖拉扯得脱臼露出森森白骨，铁链嵌在腐肉中，而铁箱缝隙透出的那丝温柔神圣的光池，倒映出千万具抢夺者的碎尸。",
        aestheticEn: "Focus: In muddy blood-rain, protagonist's right arm is dislocated exposing stark bone, chains embedded in rotting flesh. The gentle, holy light pooling from the case seam reflects thousands of snatchers' torn corpses.",
        runtime: "IF (强制携带发光箱子进行全程大逃杀) THEN (提供机制：右手UI栏永久作废，主角只能用左手进行所有翻滚与单手开火。一旦停留超过几秒，箱子发出的心跳声就会吸引全图强敌如潮水涌来，强制玩家以残躯状态一路推摇杆推到地狱尽头)。",
        runtimeEn: "IF (Forced_to_carry_glowing_case_throughout_battle_royale) THEN (Provide_Mechanic: Right_hand_UI_permanently_voided_only_one-handed_firing/rolling._Pausing_for_few_seconds_makes_the_case's_heartbeat_draw_all_map_enemies_like_a_tide_forcing_endless_forward_push_into_hell)."
      }
    },
    {
      id: "the_sealed_envelope_of_the_abyss",
      name: "用神血/绝火封印的黑信封", nameEn: "Sealed Envelope of the Abyss",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一封毫无重量、表面完全漆黑的信件，它的火漆印泥是用至高存在的鲜血/不可熄灭的业火凝固而成。",
      defEn: "A weightless, entirely pitch-black letter, its wax seal forged from the blood of a supreme being or inextinguishable hellfire.",
      core: "【表面诱惑】：里面写着敌国首都的自毁密码/神明陨落的唯一真名。是发动终极审判的最后一把无形钥匙。",
      coreEn: "【Surface Temptation】: Modifiers claim it holds the self-destruct code of enemy's capital / the true name of a fallen god. The final invisible key to Armageddon.",
      logic: "【叙事抓手】：信封的封印有绝对判定：一旦离开“誓死护送者”的体温超过三秒，或者被护送者的视线直视信封内部一丝一毫，它就会当场自燃化为灰烬。当主角在战火废墟中双腿被打断，他只能用牙齿紧紧咬住这封信，即使脸颊被枪火刮掉一块肉也绝不松口，以盲眼的姿态在一地碎玻璃和脑浆中向前匍匐。",
      logicEn: "【Narrative Affordance】: The seal has an absolute rule: if it loses the 'sworn escort's' body heat for >3s, or if the escort glances at the contents, it instantly combusts to ash. When the protagonist's legs are blown off in the ruins, they must hold the envelope tight in their teeth. Even when gunfire rips off a chunk of their cheek, they do not let go, crawling blindly through shattered glass and brain matter.",
      patch: {
        mechanics: "表层锚点 + [无解的脆弱 = 极易损毁的最高价值物; 不能直视 = 求知欲等于暴毙; 人体活靶 = 叼着信的绝望爬行]",
        mechanicsEn: "Surface_Anchor + [Unsolvable_Fragility = Supreme_value_easily_destroyed; Do_Not_Look = Curiosity_equals_sudden_death; Human_Target = Desperate_crawling_with_letter_in_mouth]",
        aesthetic: "聚焦：雪地中一条长长的血痕延伸。主角失去了所有武器，咽喉被割裂发不出声，唯独牙齿狠狠咬着那封滴血不沾的黑信，死死盯着几米外的收件人防线。",
        aestheticEn: "Focus: A long blood trail stretches across the snow. Protagonist has lost all weapons, throat slit rendering them mute, solely biting down fiercely on the pristine black letter, staring dead ahead at the recipient's defense line meters away.",
        runtime: "IF (在残血倒地后开启送信任务的最后冲锋) THEN (提供机制：剥夺生命条，强制替换为‘信件损毁度’。玩家只能进行缓慢且暴露的爬行动作，每挨一发流弹都会让视野急剧变暗、心跳震耳欲聋。必须在完全休克前依靠纯粹的左右交替按压推完全程)。",
        runtimeEn: "IF (Bleeding_out_down_on_the_ground_final_letter_delivery_sprint) THEN (Provide_Mechanic: Deprives_HP_bar_replaces_with_'Letter_Damage_Meter'._Player_can_only_do_slow_exposed_crawling._Every_stray_bullet_darkens_vision_and_spikes_heartbeat_audio._Must_push_through_via_alternating_L/R_mashes_before_full_shock)."
      }
    },
    {
      id: "the_faceless_idol_of_catastrophe",
      name: "引发天灾的无面畸形神像", nameEn: "Faceless Idol of Catastrophe",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一块坑洼不平、似乎只是被粗劣开凿过的黑石/高维晶体雕像，没有五官，却让人本能地胃酸翻涌。",
      defEn: "An uneven, seemingly crude-hewn black stone / multidimensional crystal idol with no facial features, yet it instinctively causes stomach bile to churn.",
      core: "【表面诱惑】：所有人（疯皇、大主教、深空巨企）都确信它是新世的“门票”。只要不将它交出，就手握最高筹码。",
      coreEn: "【Surface Temptation】: Everyone (the Mad Emperor, the Arch-Bishop, Deep-Space MegaCorps) believes it's the 'ticket' to the new world. Refusing to hand it over means holding the highest bargaining chip.",
      logic: "【叙事抓手】：这是一块没有实际威力的死物，但它带有极端的物理灾厄引力场。它在主角背包里的每一秒钟，天空都会降下由铁锈与毒疫构成的红雨，大地不停撕裂。追兵不仅是人类大军，连星球环境本身都在物理上极其残暴地绞杀主角。在一座崩塌的大厦/断裂的地壳边缘，主角必须一边顶着12级腐蚀飓风，一边用残肢将这块不可名状的石头死死按在怀腹内防被刮走。",
      logicEn: "【Narrative Affordance】: It is a powerless dead object, but it possesses extreme physical catastrophe gravity. Every second it remains in the protagonist's pack, the sky rains rust and plague, the earth constantly tears apart. Pursuers aren't just human armies, the planet's environment itself violently attempts to execute them. On the edge of a collapsing skyscraper/tectonic plate, protagonist must face a Cat-12 corrosive hurricane, using a severed limb stump to press the unnamable stone into their abdomen to prevent it flying away.",
      patch: {
        mechanics: "表层锚点 + [灾厄引力 = 携带它等于向全世界宣战; 环境抹杀 = 天地不容的异物; 纯粹的受难 = 它不提供任何增益只有无尽的灾难折磨]",
        mechanicsEn: "Surface_Anchor + [Catastrophe_Gravity = Carrying_it_declares_war_on_the_world; Environmental_Erasure = Foreign_object_rejected_by_heaven_and_earth; Pure_Passion = It_provides_zero_buffs_only_endless_disaster_torture]",
        aesthetic: "聚焦：赤红如血、倒卷向天的龙卷风中，万物升空粉碎。主角如同被钉在十字架上的罪人般死抠着悬崖峭壁，怀里的黑石像一颗极恶的心脏。",
        aestheticEn: "Focus: In a blood-red tornado tearing upward into the sky, all matters splinter and lift. Protagonist clings to the cliff face like a crucified sinner, the black stone in their embrace like an utterly evil heart.",
        runtime: "IF (携带神像穿越崩坏峡谷) THEN (提供机制：系统强制每隔十秒触发一次环境级的‘陨石砸击/地裂深渊’闪避判定。失误即大掉血，同时主角全程背负不可驱散的重力DEBUFF，普通跳崖的无伤动作将变成致残摔伤，强制压榨玩家的苟活极限路线规划)。",
        runtimeEn: "IF (Carrying_idol_across_collapsing_canyon) THEN (Provide_Mechanic: System_forces_heavy_dodge_against_environmental_'Meteor_Strike/Abyss_Fissure'_every_10s._Miss_means_massive_damage._Protagonist_bears_uncleansable_Gravity_DEBUFF:_normal_falls_become_crippling_damage_forcing_extreme_route_planning_just_to_survive)."
      }
    },
    {
      id: "the_blank_book_of_entropy",
      name: "空白的寂灭天书/根源死海卷轴", nameEn: "Blank Book of Entropy",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一本极其沉重、翻开后里面只有无尽空白书页的典籍（或者是全白屏幕的源初芯片大剑板）。",
      defEn: "An incredibly heavy tome, its open pages revealing only endless blank white space (or a pure-white screened genesis-chip greatsword board).",
      core: "【表面诱惑】：据说上面写着这个宇宙的死穴，能用它向造物主提出一个无法反驳的最终要求。",
      coreEn: "【Surface Temptation】: Rumored to contain the cosmos's fatal flaw, allowing one to demand an irrefutable final wish from the Creator.",
      logic: "【叙事抓手】：空白是因为它并不记录文字，而是记录持有者“失去的一切”。护送天书的旅途就是物理意义上的极度丧失。你的挚爱在乱枪中为了替你挡子弹而死，你的左眼被神罚之枪戳瞎。当你每踏过一具同伴血淋淋的尸体向深渊多走几步，书上便会缓缓析出一行血渍构成的扭曲文字。当填满这本书时，主角已经只剩具失去所有的孤寡躯壳。",
      logicEn: "【Narrative Affordance】: It is blank because it records not words, but everything the bearer 'loses'. Escorting the tome is physical absolute loss. Your beloved dies taking a bullet for you in the crossfire; your left eye is blinded by a divine spear. With every blood-soaked corpse of a comrade you step over marching deeper into the abyss, the book slowly secretes a line of twisted, bloody text. When the book is finally filled, the protagonist is nothing but a hollow, isolated husk that lost everything.",
      patch: {
        mechanics: "表层锚点 + [血肉记账 = 牺牲与丧失才能让空白显现; 因果诅咒 = 越是保护越会招致身边人的惨死; 虚舟行死水 = 无底线的坠落感段落]",
        mechanicsEn: "Surface_Anchor + [Flesh_Accounting = Sacrifices_and_loss_reveal_the_blank; Karma_Curse = Protecting_it_guarantees_grisly_deaths_of_loved_ones; Hollow_Vessel_on_Dead_Water = Bottomless_descent-feeling_sequence]",
        aesthetic: "聚焦：破灭的大殿长阶上铺满尸首，主角浑身千疮百孔，用满是血坑的双手翻开最终页。原本洁白的书页上，是被至亲之血染得发黑发臭、却依然没有任何物理意义的符号。",
        aestheticEn: "Focus: Long ruined hall stairs paved with corpses, protagonist riddled with wounds, parting the final page with cratered bloody hands. The pristine pages are stained black and foul with the blood of kin, forming symbols that STILL carry no physical meaning.",
        runtime: "IF (章节进入‘天书护送’末段，所有的NPC同伴依次被判定触发剧情杀) THEN (提供机制：伴随每一名同伴的强制死亡动画，这本原本占格子的道具会在UI中发出一阵刺目的红光波动不仅不提供BUFF，反而每次永久增加画面四周的压抑暗角与扭曲噪点，让玩家在绝望视效中死斗到底)。",
        runtimeEn: "IF (Chapter_enters_'Tome_Escort'_end-game_all_NPC_companions_trigger_scripted_deaths_sequentially) THEN (Provide_Mechanic: Along_with_each_forced_death_anim_this_inventory_item_pulses_blinding_red_light_in_UI._Instead_of_buffs_it_permanently_adds_oppressive_vignetting_and_distorting_noise_to_the_screen_edges_making_the_player_death-struggle_in_a_visually_despairing_state)."
      }
    },
    {
      id: "the_urn_of_the_unborn_savior",
      name: "装有未诞救主骨灰的死匣", nameEn: "Urn of the Unborn Savior",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一口没有任何开口、浑然一体的生铁/诡异陨黑骨灰盒，里面装着原本可以拯救世界的“预言之子”未成形即被焚毁的残烬。",
      defEn: "A seamless, aperture-less cast iron / eerie meteoric black urn, containing the incomplete, incinerated ashes of the 'Child of Prophecy' who could have saved the world.",
      core: "【表面诱惑】：即使预言破灭，各方极权势力依然认为这盒骨灰是启动灭世机器/重塑时间线的绝对催化剂。",
      coreEn: "【Surface Temptation】: Even with propulsion shattered, all totalitarian powers believe this urn of ash is the ultimate catalyst to ignite the doomsday machine / reset the timeline.",
      logic: "【叙事抓手】：骨灰内蕴含着超越生死之痛的庞大悲鸣。只要主角抱紧它，方圆五公里内的所有物理攻击火力都会如同被引力捕捉般，疯狂向其集中倾泻。在抢滩登陆地狱之岛的火力网中，主角根本没有任何掩体可以躲藏，所有的炮弹都会呈现近乎弯曲弹道精准砸来。主角必须以极其蛮横血腥的神肉之躯硬顶着成吨的火力殉爆，像背负着整个世界的罪业般蹚过雷区。",
      logicEn: "【Narrative Affordance】: The ashes hold immense mourning beyond life and death. As long as protagonist hugs it, all physical firepower within 5km is gravitationally captured, insanely pouring exactly onto them. During the hellish beach landing, the protagonist has NO cover—shells bend trajectories for pinpoint strikes. Protagonist must use a brutally savage god-meat body to tank tons of exploding artillery, wading through minefields like bearing the sins of the whole world.",
      patch: {
        mechanics: "表层锚点 + [绝对仇恨吸引 = 万炮齐射的极恶靶心; 预言的废弃 = 捧着代表希望死绝的骨灰盒求生; 殉道级冲锋 = 用血肉去硬吃全屏爆炸]",
        mechanicsEn: "Surface_Anchor + [Absolute_Aggro = The_evil_bullseye_for_barrages; Discarded_Prophecy = Surviving_while_cupping_the_urn_meaning_hope_died; Martyr_Charge = Soaking_full-screen_explosions_with_raw_flesh]",
        aesthetic: "聚焦：满目疮痍的黑滩上，铺天盖地的白磷弹与凝固汽油将夜空烧成白昼。一具焦黑碳化、已经分辨不出男女的肉体，将那生铁死匣护在炸裂的胸腔内一步步踏破铁丝网。",
        aestheticEn: "Focus: On the scarred black beach, overwhelming white-phosphorous and napalm burn the night sky to daylight. A charred carbonized flesh, gender indistinguishable, cradles the cast-iron urn within a blown-open chest cavity, crushing barbed wire step by step.",
        runtime: "IF (捧着死匣在诺曼底级别的死亡滩涂登陆) THEN (提供机制：强行挂载‘万点仇恨’光环，天上降下如雨点般的红色攻击预警圈完全覆盖地面无死角。玩家不能退缩，只能凭借防守反弹机制与以命换命的爆霸体突进，在一路炸断肢体的疯狂乱炸中强冲敌军高地)。",
        runtimeEn: "IF (Holding_urn_landing_on_Normandy-level_death_beach) THEN (Provide_Mechanic: Force-equips_'10k_Aggro'_aura._Raining_red_attack_indicator_circles_cover_the_floor_without_blind_spots._Player_cannot_retreat_must_relay_on_parry/reflect_and_suicidal_super-armor_dashes_force-rushing_the_high_ground_while_limbs_blow_up_in_the_insane_bombardment)."
      }
    },
    {
      id: "the_quantum_glass_eye_of_the_mad_god",
      name: "疯神的无瞳琉璃眼", nameEn: "Quantum Glass Eye of the Mad God",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一颗拳头大小、内部呈现出狂暴星云乱旋状态却全透明无瞳孔的高维眼球晶体。",
      defEn: "A fist-sized, completely transparent pupil-less higher-dimensional eyeball crystal; violent nebulas swirl madly within its core.",
      core: "【表面诱惑】：不可视之物。传闻谁能解读这只眼中映现的几何光怪，就能掌控万物生灭的频率密码。",
      coreEn: "【Surface Temptation】: Unseeable artifact. Legend says whoever deciphers the geometric light-monsters perfectly reflected within holds the frequency code to control life and death of all things.",
      logic: "【叙事抓手】：直视它的人会立刻脑死亡。它被封存在层层绝氧黑盒中。当主角陷入必须以此作为献祭品换取通过禁忌深渊的死局时，敌人一剑劈开了黑盒。那股足以洗脑溶解认知的致幻高光放射而出。主角为了不陷入疯狂，只能极其粗暴地将自己的双眼插进燃烧的长矛废铁彻底捅瞎，在极致的黑暗与无法言喻的物理痛楚中，完全依靠纯粹的听觉与触觉本能，盲切四围涌来的狂人。",
      logicEn: "【Narrative Affordance】: Glancing at it causes instant brain death. Kept in nested oxygen-deprived black boxes. When protagonist is cornered into using it as an offering at the Forbidden Abyss, an enemy slashes open the box. The hallucinogenic highlight, capable of dissolving cognition, radiates out. To avoid madness, the protagonist must brutally plunge their own eyes into burning scrap-spears to completely blind themselves. In supreme darkness and unspeakable physical agony, they rely purely on sound and tactile instinct to blindly dice the swarming madmen.",
      patch: {
        mechanics: "表层锚点 + [不可直视的高光 = 看见等于灰飞烟灭; 自残求存 = 戳瞎双眼以抵御精神高压污染; 黑暗杀人狂 = 在瞎眼中爆发野兽直觉]",
        mechanicsEn: "Surface_Anchor + [Unseeable_Highlight = Glancing_equals_ash; Self-Harm_Survival = Blinding_eyes_to_resist_extreme_sanity_pollution; Dark_Slasher = Erupting_beast_instinct_in_blindness]",
        aesthetic: "聚焦：在那令人发疯的七彩诡光核心前，主角血流满面，眼窝成为两个焦黑冒烟的黑洞。他狂笑出声，将满是缺口的屠刀毫无章法且势道骇人地抡向无边的诡异怪诞剪影。",
        aestheticEn: "Focus: Before the nucleus of maddening iridescent eerie-light, protagonist's face is drenched in blood. Eye sockets are two charred, smoking black craters. Laughing maniacally, they blindly and terrifyingly hack a notched butcher knife into the endless silhouettes of horrific grotesques.",
        runtime: "IF (盲盒破裂，强光开始充斥整个屏幕) THEN (提供机制：系统强行覆盖玩家视线为极度刺目的噪点雪花，若不立刻长按‘自残毁目’键（画面短暂爆发全红并伴随厉鬼般惨叫），SAN值就会当场归零秒杀。随后进入全程纯黑瞎眼战斗，只能依靠立体音道提示和极简的红色心电图示警来执行完美弹反处决)。",
        runtimeEn: "IF (The_Box_shatters_intense_light_floods_entire_screen) THEN (Provide_Mechanic: System_forcibly_washes_screen_with_blinding_snow_noise._If_player_doesn't_immediately_hold_'Self-Mutilate_Blind'_key_(screen_pops_full_red_with_ghoulish_scream)_SAN_instantly_drops_to_0_killing_them._Then_enter_a_full_pitch-black_blind_fight_relying_ONLY_on_3D_audio_cues_and_minimalist_red_ECG_warnings_to_execute_perfect_parries)."
      }
    },
    {
      id: "the_unobservable_anomaly_core",
      name: "不可观测的坍塌异核", nameEn: "Unobservable Anomaly Core",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一枚被收容在极度笨重且多达七十二道物理屏蔽锁的铅棺/封印棺柩内的核心。",
      defEn: "A core contained within an extremely clunky lead sarcophagus / sealed coffin bound by seventy-two physical shielding locks.",
      core: "【表面诱惑】：代表着绝对的混沌能源源泉，哪怕是一点泄露，也足以推翻一整座教皇城堡的神威穹顶。",
      coreEn: "【Surface Temptation】: Represents the apex of chaotic energy; even a sliver of leakage can overthrow the divine dome of a Pope's citadel.",
      logic: "【叙事抓手】：异核存在于“不可观测”叠加态。你绝不能试图探查它究竟是什么，否则物理坍缩会瞬间将方圆百里化为地狱肉泥。但护送这具极其沉重的铅棺是死罪使命。主角在横穿炼狱雪原时，背负着远超肉体承载极限的几吨重负。肌肉纤维根根崩断声清晰可闻，每深踩一脚，雪地就会溅出主角靴管里逆流的鲜血，是在物理上被绝对死物活生生压榨成渣的苦难长征。",
      logicEn: "【Narrative Affordance】: The core exists in 'unobservable' superposition. Attempting to perceive it triggers physical collapse, turning 100 miles to hellish meat-paste. But escorting this monstrously heavy lead coffin is a death-mission. Crossing the purgatory snowfield, protagonist shoulders several tons—far beyond flesh limits. The snapping sound of muscle fibers is audible. With every deep step, blood from their boots splatters the snow. A suffering march where a pure dead-weight physically crushes them into pulp.",
      patch: {
        mechanics: "表层锚点 + [超重背负 = 将不可承之重强加于碎裂的脊椎之上; 薛定谔的绝望 = 里面的内容毫无意义，过程的苦难才是全部; 极度静音 = 在重压下的急促喘息和骨裂音之罚]",
        mechanicsEn: "Surface_Anchor + [Over-weight_Burden = Forcing_unbearable_mass_onto_split_spines; Schrodinger's_Despair = Contents_are_meaningless_the_process's_suffering_is_everything; Extreme_Silence = Penalty_breathes_and_bone-cracks_under_heavy_pressure]",
        aesthetic: "聚焦：死寂无声の恐怖冰原，没有任何爆炸和追兵，仅有极其残暴的沉重脚步。主角的腰椎呈现出非人弧度诡变形，却仍死咬渗血的牙关拖拽着那口巨大黑棺向天边挪动。",
        aestheticEn: "Focus: Dead silent terrifying ice field. No explosions, no pursuers, just brutally heavy footsteps. Protagonist's lumbar spine assumes an inhuman, macabre curve, yet they bite bloody teeth dragging the massive black coffin toward the horizon an inch at a time.",
        runtime: "IF (进入‘送棺长征’的最后几公里长走廊) THEN (提供机制：剥夺奔跑、跳跃与攻击。完全进入如同硬核步行模拟器的挣扎状态。玩家必须不断交替推左右摇杆并在平衡条快崩断时进行抢救按键。一旦失衡，棺材由于本身重量直接把主角压扁触发断脊Game Over死状特写，逼迫玩家全神贯注体验这非人的体能摧残时长)。",
        runtimeEn: "IF (Entering_the_last_few_kms_of_the_'Coffin_March'_long_corridor) THEN (Provide_Mechanic: Deprives_run_jump_and_attack._Enters_a_hardcore_walking-sim_struggle_state._Player_must_alternate_L/R_sticks_and_mash_rescue_keys_when_balance_bar_snaps._Losing_balance_causes_coffin's_weight_to_crush_protagonist_triggering_a_spine-snapping_Game_Over_close-up_forcing_immersion_in_inhuman_physical_devastation)."
      }
    },
    {
      id: "the_phantom_frequency_transmitter",
      name: "接收黄泉的死静电台", nameEn: "Static Transmitter of the Underworld",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一台落满铁锈与血污的重型破旧电台/灵音收音法器，它只有一个频道，永远放送着剧烈的沙沙白噪音。",
      defEn: "A heavy dilapidated transmitter / soul-radio artifact covered in rust and gore. It has only one channel, broadcasting violent white-noise static internally forever.",
      core: "【表面诱惑】：据说在白噪音的最深处，隐藏着开启末日避难所/至高天门的不可估量密码声。",
      coreEn: "【Surface Temptation】: Rumored that within the deepest layers of static lies the unquantifiable sound-code to open the Doomsday Vault / Empyrean Gates.",
      logic: "【叙事抓手】：电台实际上是直接与异度恐惧深渊物理相连。为了保护这个唯一希望并监听它偶尔泄漏的电频，主角必须将接收天线刺入自己的耳蜗深处直至脑干。在混战中，电波里传出的不是密码，而是那些在主角剑下惨死之人的极恶哀嚎诅咒，以及足以把微波炉震碎的刺耳强电场啸叫。主角不仅要杀出尸山血海，还要在脑浆沸腾的无死角音波酷刑下维持绝世拔剑术的准度。",
      logicEn: "【Narrative Affordance】: The radio physically bridges to the abyss of alien dread. To protect this sole hope and monitor its leaking frequencies, protagonist must stab the receiving antenna deep into their cochlea up to the brainstem. In the melee, it broadcasts not codes, but the ultimate evil howling curses of those murdered by the protagonist's sword—plus ear-piercing high-voltage screeching enough to shatter microwaves. Protagonist must not only slaughter through corpse-mountains, but maintain peerless sword-drawing precision while their brain boils in omnidirectional sonic torture.",
      patch: {
        mechanics: "表层锚点 + [强制插脑 = 物理强行输入虚无底噪; 幻听诅咒 = 把战场变成鬼哭神嚎的精神病幻境; 耳蜗泣血 = 外界绝境与内心噪音的双重轰炸]",
        mechanicsEn: "Surface_Anchor + [Forced_Brain-Jack = Physically_forcing_void_noise_input; Auditory_Curse = Turning_battlefield_into_a_wailing_schizophrenic_illusion; Bleeding_Cochlea = Double_bombardment_of_external_dead-end_and_internal_noise]",
        aesthetic: "聚焦：雨夜巷战，一侧耳道被插入满是黑血大天线的主角，双眼因脑压过高而充血外凸。他像是一个坏掉的木偶般诡异抽搐着躲开机枪扫射，随即划出极度暴力而优美的致命弧光。",
        aestheticEn: "Focus: Rainy night alley fight. One ear canal stabbed with a massive black-blooded antenna, protagonist's eyes bulge bloodshot from brain-pressure. Twitching eerily like a broken puppet to dodge minigun fire, before carving out an extremely violent, beautiful fatal arc.",
        runtime: "IF (监听电台关卡高潮段落) THEN (提供机制：系统音效将变得极其尖锐恐怖且盖过环境音，导致玩家听不清敌人的明显上弹和挥砍预警音。不仅如此，主角还会极度痛苦地捂住脑袋强制中断部分连招。这需要玩家凭借完全的眼力和距离把控，克服这种充满负反馈惊吓的心流中断，硬杀到底)。",
        runtimeEn: "IF (Monitoring_Radio_Level_climax) THEN (Provide_Mechanic: System_audio_becomes_horrifyingly_shrill_overpowering_environment_preventing_player_from_hearing_clear_enemy_reload_and_swing_cues._Moreover_protagonist_forcefully_interrupts_combos_clutching_head_in_agony._Requires_player_to_override_this_jump-scare_flow-breakage_using_pure_visual_acuity_and_spacing_to_slaughter_through)."
      }
    },
    {
      id: "the_blueprint_of_the_universe_end",
      name: "不可解构的末日蓝图卷轴", nameEn: "Un-Deconstructable Blueprint of Apocalyptica",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一条长达数米、材质犹如刚被剥下的滑腻人皮/克苏鲁腹膜的图纸，上面用非欧几何画着错乱的线条。",
      defEn: "A meter-long blueprint resembling freshly flayed greasy human skin / Cthulhu peritoneum, drawn with chaotic non-Euclidean geometric lines.",
      core: "【表面诱惑】：大工业帝国的最高机密，制造最强星舰/机械降神大炮的终极工艺残卷。",
      coreEn: "【Surface Temptation】: Supreme secret of the Grand Industrial Empire; the ultimate crafting fragment to build the strongest starship / Deus Ex Machina cannon.",
      logic: "【叙事抓手】：它毫无物理用处，只是极致的引火物。任何沾惹上它的生物，其体温只要超过一个阈值，卷轴就会生出触手将其缠绕并向内倒卷吃掉。在逃生舱门关闭前的长长火海回廊中，主角不能快速奔跑、不能让心跳过快导致体表发热，他必须将这份令人作呕的滑腻冰冷卷轴裹在满是烧伤和弹孔的残破躯干上，忍受着触手不断试图钻入伤口啃噬内脏的极其深度的恶寒，以近乎闲庭信步实则咬碎满口钢牙的步伐，从万火连天中慢慢踱下。",
      logicEn: "【Narrative Affordance】: It has zero physical use, purely an apex fire-starter. Any biology touching it whose temperature exceeds a threshold triggers the scroll to spawn tentacles, wrapping and devouring them inward. In the long fiery corridor before the escape pod seals, the protagonist CANNOT run fast or let heartrate spike body heat. They must wrap this sickeningly greasy, cold scroll around their burnt, bullet-riddled torso. Enduring the profound chill of tentacles constantly trying to burrow into wounds and gnaw organs, they must take slow, seemingly relaxed but actually teeth-shatteringly tense steps downward through the blazing inferno.",
      patch: {
        mechanics: "表层锚点 + [活体降温 = 剧烈运动等于被图纸吞没的倒计时; 伤口吸血 = 不能脱落只能死死包裹在致命伤上; 冷滞的走廊 = 在最该疯狂狂奔冲刺的地方勒令你缓慢散步]",
        mechanicsEn: "Surface_Anchor + [Living_Cool-Down = Intense_motion_equals_countdown_to_scroll-devour; Wound_Sucking = Cannot_drop_it_must_wrap_it_tight_over_fatal_wounds; Chilled_Corridor = Commanded_to_slow-walk_in_the_place_requiring_the_maddest_sprint]",
        aesthetic: "聚焦：连钢铁墙壁都在高温中融化滴落的地狱回廊上，主角宛若身披惨白人皮斗篷的可怖亡者，冷汗在额角瞬间结冰再蒸发，以每秒一小步、看似无比从容却满脸死灰的姿态走向出口处大军。",
        aestheticEn: "Focus: In a hellish corridor where even steel walls melt and drip, protagonist resembles a terrifying undead draped in an eerie white human-skin cloak. Cold sweat instantly freezes then evaporates on their brow. Moving one half-step per second—seemingly leisurely but with an ashen face of death—toward the army at the exit.",
        runtime: "IF (携卷轴穿越南方大塞炽热走廊) THEN (提供机制：不仅禁止使用闪避按键，连左摇杆推满都会导致心率UI瞬间爆表警报变红；一旦暴红，卷轴就会触发特殊击杀动画把主角卷成一滩肉泥。玩家必须精准地只推动极小幅度摇杆，在无数飞散的火流星缝隙间以龟速滑行求生)。",
        runtimeEn: "IF (Carrying_scroll_through_the_South_Gate_Blazing_Corridor) THEN (Provide_Mechanic: Dodge_disabled._Even_pushing_left-joystick_to_max_spikes_heartrate_UI_to_critical_red;_if_red-maxed_scroll_triggers_unique_kill_anim_rolling_protagonist_into_meat-paste._Player_must_precisely_micro-tilt_joystick_turtle-walking_between_gaps_of_countless_flying_fireballs_to_survive)."
      }
    },
    {
      id: "the_lost_fragment_of_nothingness",
      name: "不存在的王冠碎块", nameEn: "Non-Existent Fragment of the Crown",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一个物理上永远抓不住、只在视网膜残留中留下黑紫色逆光轮廓的“残形遗物/量子碎片”。",
      defEn: "A 'formless relic / quantum fragment' physically forever un-grabbable, leaving only a black-purple backlit silhouette in retinal persistence.",
      core: "【表面诱惑】：这是完成王者拼图的最后一块。谁拥有它，谁就是下一任至高掌理者/真理大帝。",
      coreEn: "【Surface Temptation】: The final piece of the sovereign puzzle. Whoever possesses it becomes the next Supreme Administrator / Emperor of Truth.",
      logic: "【叙事抓手】：你不可能“拿”着它，因为触碰即穿透。唯一的携带方式是将双手合十、在胸前形成一个密封的小型“祭坛空间”并祈祷。但在千军万马的绞杀中，主角绝不能松开双手，这意味着完全放弃了传统热兵器与重型招架的运用权。面对全副武装的狂热刽子手，主角只能以极其变态违和的神父祈祷姿势，靠疯狂翻滚躲闪以及不可思议的双脚死斗术/腿技踢碎敌军重甲。",
      logicEn: "【Narrative Affordance】: You cannot 'hold' it, touch passes straight through. The only way to carry it is to clasp hands together in front of the chest, forming a sealed mini 'altar-space' and praying. But amidst the meat-grinder of vast armies, protagonist MUST NOT unclasp hands, meaning totally abandoning usage of traditional firearms and heavy parries. Facing fully armored fanatic executioners, the protagonist maintains an extremely bizarre, defiant priest-praying posture, relying on mad rolling dodges and impossible leg-execution martial arts to shatter enemy heavy armor.",
      patch: {
        mechanics: "表层锚点 + [合十祈祷 = 手部模组强行封印; 护空之刑 = 里面什么都没有却要拿命去拱卫; 腿法狂神 = 被迫展示极致的异端下盘杀人术]",
        mechanicsEn: "Surface_Anchor + [Clasped_Prayer = Hand_modules_forcefully_sealed; Defending_Emptiness_Penalty = It_contains_nothing_yet_demands_lives_to_defend; Mad_God_of_Kicks = Forced_to_display_ultimate_heretical_lower-body_murder_arts]",
        aesthetic: "聚焦：血流漂杵的大厅，主角低垂头颅维持着绝对虔诚合十的姿态，破烂的衣摆飞旋，每一记在半空中如雷霆般踢碎骑士长头颅的高扫，都透着一种荒诞狂喜与至死防卫的庄严。",
        aestheticEn: "Focus: A hall floating with gore. Protagonist bows head, maintaining absolute devout clasped hands. Tattered coat tails spin; every high-kick that thunders through a Grand Knight's skull exclaims an absurd ecstasy and the solemnity of defending unto death.",
        runtime: "IF (在双手不可解开的状态下突破长桥防线) THEN (提供机制：系统临时替换主角平A模组，变为只剩单调却判定极近的腿击术。这导致所有远程与大范围武器失效，玩家必须顶着密集的枪林弹雨极限贴身，靠走位将所有强大的敌人一个个踢落深渊长桥，失误即被打成筛子)。",
        runtimeEn: "IF (Breaking_through_the_Long_Bridge_Defense_while_hands_locked) THEN (Provide_Mechanic: System_temp-swaps_protagonist_basic_ATK_module_to_only_monotonous-but-extreme-close-range_kicks._Ranged_and_AoE_weapons_voided._Player_must_extreme_point-blank_enemy_formations_dodging_dense_bullet_hell_kicking_all_heavy_foes_down_into_the_abyssal_bridge_one_by_one._A_single_slip_means_riddled_with_holes)."
      }
    },
    {
      id: "the_blood_inked_vow_of_silence",
      name: "用血墨签下的无字死誓", nameEn: "Blood-Inked Vow of Silence",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一张除了用持誓人喉舌之血按下的印戳外，根本没有半个字符定下任何条款的极效血魔法羊皮卷/加密板。",
      defEn: "An ultra-potent blood-magic parchment / encrypted slate. Apart from a stamp made with the oath-bearer's throat's blood, it has zero characters stipulating any terms.",
      core: "【表面诱惑】：这代表不可背叛的终极信任与交易筹码，它本身的“存在”就能让地下世界的巨头们停火谈判。",
      coreEn: "【Surface Temptation】: Represents the ultimate un-betrayable trust and bargaining chip. Its mere 'existence' halts underworld kingpins' fire for negotiations.",
      logic: "【叙事抓手】：空白便意味着无底线的解释权。为了在护送中不违背这种极致的“潜规则无形死誓”，持有者被下达了最极端的限制令：在十二个时辰内，不许发声、不许流泪、不许留下脚印。主角在最凶险的雷泽泥潭遭遇大规模绞杀时，必须自己割开咽喉浅层破坏声带保证不发出惨叫，每一脚踩在铁蒺藜上还要立刻用刀削掉自己渗血的肉皮抹去痕迹。护卫一份“毫无内容的契约”，执行着如同幽灵自我抹杀的极刑。",
      logicEn: "【Narrative Affordance】: Blank means bottomless interpretation. To avoid violating this ultimate 'invisible dead-oath' during escort, the bearer is given extreme restrictions: for 24 hours, no voice, no tears, no footprints. Traversing the deadliest lightning-bog ambush, protagonist must shallowly slit their own throat restricting vocal chords to ensure zero screams. Every step on caltrops means instantly slicing off their own bleeding skin to erase the trace. Guarding a 'void contract' executing extreme self-erasing ghost-mutilation.",
      patch: {
        mechanics: "表层锚点 + [不可解释之誓 = 约束范围无限大导致极端的自我设限; 物理级噤声 = 割破喉管以根绝痛叫惹祸的可能; 幽灵行军 = 把自己的痕迹和生命一并切碎丢在后面]",
        mechanicsEn: "Surface_Anchor + [Uninterpretable_Oath = Infinite_bind_range_causing_extreme_self-restriction; Physical_Silencing = Slitting_throat_to_eradicate_risk_of_pain-cries; Ghost_March = Slicing_off_one's_own_tracks_and_life_alike_leaving_them_behind]",
        aesthetic: "聚焦：暗夜雨林，主角浑身浴血犹如剥皮修罗。当利刃刺穿小腹时，他咬碎钢牙、瞪大神色崩塌的通红双眼却发不出半点声音，同时倒悬身体飞斩，将滴落的血引至悬崖下深不见底的激流中完美掩盖。",
        aestheticEn: "Focus: Dark-night rainforest, blood-drenched protagonist like a flayed Ashura. When a blade pierces their abdomen, they shatter their teeth, bloodshot eyes bulging in collapsed expression, yet utterly silent. Flipping upside down mid-air to slash, directing falling blood into the bottomless rapids below the cliff to mask it perfectly.",
        runtime: "IF (在极端潜行的毒沼关卡中触发受击) THEN (提供机制：系统引入声波波纹反馈机制。哪怕玩家受击时角色发生僵直顿挫也会产生波纹招来红外锁定线秒杀。主角将用残酷的自残处决动作（如受击瞬间将刀绞进自己伤口抵消后退硬直）来维持近乎非生物般的强行隐身走位)。",
        runtimeEn: "IF (Taking_a_hit_during_extreme_stealth_poison-bog_level) THEN (Provide_Mechanic: System_introduces_sonic_ripple_feedback._Even_character_staggering_from_hit_causes_ripples_summoning_insta-kill_infrared_lines._Protagonist_will_use_cruel_self-mutilation_execution_animations_(e.g._twisting_knife_into_own_wound_on_impact_to_cancel_stagger)_to_maintain_near_non-biological_forced_stealth_movement)."
      }
    },
    {
      id: "the_absolute_zero_of_the_mad_machine",
      name: "来自母机神威的绝对零度黑匣", nameEn: "Absolute Zero Black Box of the Mad Machine",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一个极其庞大、外表被冰结了数千年的长方体冷却黑匣机核。",
      defEn: "An extremely massive rectangular cooling black-box machine-core, its exterior frozen in millennia-old ice.",
      core: "【表面诱惑】：包含着让失控世界恢复重置前出厂状态的最原始底层备份。它是文明的句号或重启符。",
      coreEn: "【Surface Temptation】: Contains the primal root-backup to restore the out-of-control world to pre-reset factory state. The period or reset symbol of civilization.",
      logic: "【叙事抓手】：黑匣的核心没有数据，只有吞噬极限温度的黑洞。一旦取下中枢台座，它便会疯狂地吸取方圆十米内的所有光与热。在没有特供防寒挂甲的贫民窟/废料区逃亡时，主角必须紧紧背着这个黑匣，自己的体温、心跳以及肌肉活性正被它以肉眼可见的速度抽入冰冷的金属深渊。不仅手脚严重冻伤变黑坏死，连呼啸而来的子弹打在主角冻脆的肉体上，都会直接崩碎大块大块带着血丝的血肉冰晶。用生命力为虚妄的蓝图续航降温。",
      logicEn: "【Narrative Affordance】: The box has no data, just a black hole devouring extreme temperatures. Unplugged from the central pedestal, it frantically sucks all light and heat within 10 meters. Fleeing through the slums/scrap-yards without special sub-zero mech-suits, protagonist hugs the box tight. Body heat, heartbeat, and muscle vitality are sucked visible into the cold metal abyss. Hands/feet suffer severe frostbite-necrosis. Incoming bullets hitting the brutally frost-brittle flesh directly shatter huge chunks of blood-threaded ice-flesh. Using lifeforce to power the cooling of a delusional blueprint.",
      patch: {
        mechanics: "表层锚点 + [活人散热器 = 把自身作为中和零度的代价柴薪; 冻脆特质 = 失去弹性导致遭受更恐怖的物理断裂判定; 生命之燃 = 奔跑为了活血而一旦停止就是冰雕]",
        mechanicsEn: "Surface_Anchor + [Living_Radiator = Self_as_fuel_to_neutralize_absolute_zero; Frost-Brittle_Trait = Loss_of_elasticity_causing_more_horrific_physical_shatter_damage; Spark_of_Life = Running_to_keep_blood_warm_stopping_means_ice-statue]",
        aesthetic: "聚焦：熔炉坍塌的高温燃烧背景下，背负黑匣的主角周身覆满可怕的蓝色死霜。在重型霰弹的轰击下，他的左半边肩膀像玻璃柜一样爆碎出一大蓬带红的冰雾，却依旧冷漠且机械地向前迈着僵硬步伐。",
        aestheticEn: "Focus: Against the backdrop of a collapsing, burning furnace, protagonist bearing the box is covered in horrific blue death-frost. Hit by a heavy blast, their left shoulder shatters like a glass cabinet into a huge mist of red-tinged ice, yet they coldly, mechanically step forward with stiff strides.",
        runtime: "IF (在最终运送阶段环境变冷且脱下冬装) THEN (提供机制：强制附加‘硬直倍化和受到单次高伤追加肢解掉血’的深冬DEBUFF。玩家的血量上限随时间极速冻结条推进而扣除。只有通过连续的完美连击击杀引发鲜血喷溅为自身回温，才能避免被彻底凝固在冰坨里的命运，强行拉满进攻节奏与破绽的高危压迫感)。",
        runtimeEn: "IF (Final_delivery_phase_environment_chills_and_winter_gear_stripped) THEN (Provide_Mechanic: Forcibly_applies_'Hit-Stun_multiplier_and_single-high-hit_bonus_dismember-bleed'_Deep-Winter_DEBUFF._Max_HP_rapidly_frozen_out_over_time._Only_chaining_perfect_combo_kills_causing_blood-splatters_to_re-warm_self_can_stave_off_becoming_an_ice_block._Forcing_hyper-aggressive_high-risk_pressure_rhythm)."
      }
    },
    {
      id: "the_weightless_feather_of_oblivion",
      name: "湮灭的无重力之羽", nameEn: "Weightless Feather of Oblivion",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一根完全违反物理常识的纯白色羽毛/悬浮碎片。它不仅没有重量，甚至会在周围产生强烈的重力排斥和空间湮灭效应。",
      defEn: "A pure white feather / hovering shard that completely defies physics. Not only weightless, it generates intense gravity-repulsion and spatial annihilation effects around it.",
      core: "【表面诱惑】：跨越星骸断层的唯一信物，能够抵消任何黑洞级撕裂的绝对浮力器。",
      coreEn: "【Surface Temptation】: The only token to cross the star-corpse fault lines, an absolute buoyancy device capable of negating any black-hole level tearing.",
      logic: "【叙事抓手】：为了拿住这根一旦脱手就会瞬间射穿大气层飞向深空的羽毛，主角必须将极为沉重的铅块甚至穿心锁链钉在自己身上配平。当遭遇高敏捷刺客围剿时，主角的每一次动作都像是在拖拽一整座山峰。伤口流出的血不往下滴，反而像倒放般向上飞溅。主角必须在几乎碾碎自己内脏的配重下，被羽毛可怕的倒拽力拉扯得悬停在半空中，如同强行拖着绞刑架进行三维空战。",
      logicEn: "【Narrative Affordance】: To hold this feather—which if released would instantly shoot through the atmosphere into deep space—the protagonist must nail extremely heavy lead blocks and heart-piercing chains to their own body for counterweight. When ambushed by high-agility assassins, every move the protagonist makes is like dragging a mountain. Blood doesn't drip down; it violently splatters upward in anti-gravity. Crushed internally by the counterweights, the protagonist is violently yanked into mid-air suspensions by the feather, forced into 3D aerial combat while dragging their own gallows.",
      patch: {
        mechanics: "表层锚点 + [超重配平 = 为了拿住最轻的物体反而要承受最惨重负; 倒逆流血 = 物理法则的诡异反转; 绞刑架空战 = 下拉与上拽的双重撕裂]",
        mechanicsEn: "Surface_Anchor + [Over-Counterweight = Bearing_the_worst_heavy_burden_just_to_hold_the_lightest_object; Reverse_Bleeding = Eerie_reversal_of_physical_laws; Gallows_Dogfight = Dual_tearing_between_downward_drag_and_upward_pull]",
        aesthetic: "聚焦：在残破的重力失效空间站，主角浑身挂满生锈的巨型铁锚，脚镣把脚踝勒出血槽，手中的白羽却爆发着圣洁的光芒。他每一次挥刀，身后的铁链都在真空中甩出凄绝的血色轨迹。",
        aestheticEn: "Focus: In a shattered zero-G space station, protagonist is draped in rusting giant iron anchors, shackles grinding ankles to bloody grooves. The white feather in hand bursts with holy light. With every sword swing, the chains behind lash out a tragic bloody trajectory in the vacuum.",
        runtime: "IF (携带无重力之羽迎击敏捷BOSS) THEN (提供机制：强行改变游戏Z轴重力系统，主角失去普通的‘跳跃’变为‘被猛烈上拉’。按住配重键才能落地，但会急剧消耗体力并进入僵直。必须熟练利用上拉与下坠的痛苦撕裂差，在半空中玩命规避弹幕，体验极度反直觉的空战折磨)。",
        runtimeEn: "IF (Carrying_Weightless_Feather_against_agility_BOSS) THEN (Provide_Mechanic: Forcibly_alters_game_Z-axis_gravity._Jump_is_replaced_by_'Violent_Upward_Yank'._Holding_counterweight_key_forces_landing_but_rapidly_drains_stamina_and_causes_stagger._Must_master_the_painful_reversal_of_pulls_dodging_bullet-hell_mid-air_for_extremely_counter-intuitive_dogfight_torture)."
      }
    },
    {
      id: "the_screaming_mirror_shard",
      name: "倒映万重阿鼻的嚎叫残镜", nameEn: "Screaming Mirror Shard of Avici",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一块染血的碎裂玻璃镜片。它从不映射现实，只会倒映出注视者心底最不敢回想的极恶梦魇与被杀者的痛苦深渊。",
      defEn: "A bloodstained splinter of a glass mirror. It never reflects reality, only the gazer's absolute worst nightmares and the abyssal agony of those they have killed.",
      core: "【表面诱惑】：传闻这面镜子能看见第四维度的生门，是唯一能带人走出无解时间循环迷宫的导航图。",
      coreEn: "【Surface Temptation】: Rumored to see the 4th-dimensional exit door, the only navigation map out of an un-solvable time-loop labyrinth.",
      logic: "【叙事抓手】：在这关的迷雾中隐藏着一旦直视就会将玩家即死的隐形不可名状兽。主角绝不能抬起头，唯一活下去的方法就是全程死死盯着手中的残镜来倒车与挥砍。这也意味着，在这漫长的半小时里，主角必须持续不断地注视镜子里自己曾经犯下的罪孽、亲手杀死的爱人被开膛破肚的循环幻象。如果精神崩溃移开视线超过一秒，现实中的无形巨爪就会将他腰斩。最残忍的是，锋利的镜片没有把手，一直抠抓的指肚早已被割得深可见骨，血流如注。",
      logicEn: "【Narrative Affordance】: Hidden in this level's fog are invisible eldritch beasts that insta-kill upon direct line of sight. Protagonist MUST NOT look up; the only survival is navigating and slashing exclusively by looking at the rear-view reflection in the shard. This means for 30 long minutes, they must continuously stare at their own sins, the looped illusion of their murdered lover being disemboweled in the reflection. If sanity breaks and they look away for 1 second, the invisible jaws of reality slice them in half. Cruellest of all, the sharp shard has no handle; the gripping fingertips are sliced to the bone, pouring blood.",
      patch: {
        mechanics: "表层锚点 + [绝对后视镜 = 不能抬头倒看世界的活法; 精神凌迟 = 活命的代价是持续观看自己的终极创伤; 滴血入镜 = 锋利边缘带来的无法放手的刺痛]",
        mechanicsEn: "Surface_Anchor + [Absolute_Rear-View = Cannot_look_up_must_navigate_in_reverse; Mental_Lingchi = Survival_cost_is_continuously_watching_ultimate_trauma; Bleeding_into_Mirror = Un-droppable_stabbing_pain_from_sharp_edges]",
        aesthetic: "聚焦：如墨的死寂黑雾中，只有主角手中的破镜子散发着凄厉的光。画面上方是深不见底的迷雾，唯有下方极小的一块UI镜面里挤满了扭曲惨叫的血肉幻影。主角的手指被镜片切开，冷汗与血交织滴落在镜面上，他却不敢有丝毫眨眼。",
        aestheticEn: "Focus: In inky dead-silent fog, only the broken mirror in protagonist's hand emits a tragic light. Upper screen is bottomless fog; only a tiny UI mirror-space at the bottom is crammed with twisted screaming flesh phantoms. Protagonist's fingers are sliced by the shard, cold sweat and blood drip onto the glass, yet they dare not blink.",
        runtime: "IF (手持残镜穿越即死迷雾防线) THEN (提供机制：主视角呈现强制极度模糊或即死警报红光，有效战斗视野全被压缩在屏幕右下角那一小块‘手持镜面UI’里，且按键方向全部反转（Left=Right）。玩家不仅要忍受极差的微缩视角，镜面中还会不时闪出高能Jump-scare干扰判断，硬抗精神与操作的双重极限折磨)。",
        runtimeEn: "IF (Holding_shard_crossing_insta-kill_fog_line) THEN (Provide_Mechanic: Main_view_is_forced_blurry_or_blaring_red_insta-kill_warning._Effective_combat_vision_is_compressed_entirely_into_a_tiny_'Hand-Mirror_UI'_at_bottom-right._Input_controls_are_INVERTED_(Left=Right)._Player_endures_horrific_tunnel-vision_while_mirror_randomly_flashes_high-intensity_Jump-Scares_to_ruin_parry-timing._Double_torture_of_sanity_and_mechanics)."
      }
    },
    {
      id: "the_pulse_synchronized_void_grenade",
      name: "心源同步的非存活诡雷", nameEn: "Pulse-Synchronized Void Grenade",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一个直接粗暴地砸进心口、与心脏起搏完全联动的黑色反物质炸弹微缩核心。",
      defEn: "A black anti-matter bomb micro-core, brutally smashed directly into the chest cavity and synced entirely to the heart's pacing.",
      core: "【表面诱惑】：究极的核威慑。只要带着它，就等于挟持了整座星球当人质，谁也不敢轻举妄动。",
      coreEn: "【Surface Temptation】: The ultimate nuclear deterrence. Carrying it essentially holds the entire planet hostage; no one dares make an impulsive move.",
      logic: "【叙事抓手】：炸弹的引爆机制非常恶毒：当持有者的心率低于极高临界值（即感受到安全或痛苦减少时），炸弹就会认为持有者已脱离绝境从而引爆清场。为了不让这个连带半颗星球一起灰飞烟灭的麦高芬爆炸，主角必须通过持续不断地将刀片扎进自己的大腿、甚至直接把硫酸泼在神经上，用极致的物理剧痛来维持恐怖的高转速心跳。任何短暂的和平喘息，都是致命的死神敲门。",
      logicEn: "【Narrative Affordance】: The detonator is deeply malicious: if the bearer's heart rate drops below a super-high threshold (i.e. feeling safe or experiencing less pain), the bomb assumes the bearer is out of peril and detonates reality. To prevent this MacGuffin from erasing half the planet, the protagonist must continuously stab blades into their own thighs or pour acid on nerve clusters. They must use extreme physical agony to sustain a terrifyingly high RPM heartbeat. Any brief peaceful respite is the knock of Death.",
      patch: {
        mechanics: "表层锚点 + [反向求生 = 安逸等于爆炸毁灭; 强制自残 = 拔刀刺己以换取剧痛心跳; 狂躁症候群 = 永不停歇的极限高压突进]",
        mechanicsEn: "Surface_Anchor + [Reverse_Survival = Comfort_equals_explosive_annihilation; Forced_Self-Harm = Stabbing_oneself_for_agonizing_heartbeats; Mania_Syndrome = Never-ending_extreme_high-pressure_rush]",
        aesthetic: "聚焦：在敌人全部退却的死寂长廊里，主角却显得比在战壕里还要惊恐绝望。起搏器发出即将归零的红光，他毫不犹豫地拔出长钉刺穿自己的掌心，伴随着一声不似人声的凄厉惨叫，胸口的红光才心有不甘地重新变成高频闪烁的痛跳。",
        aestheticEn: "Focus: In a dead-silent corridor where all enemies have retreated, the protagonist looks more terrified and desperate than in the trenches. As the pacemaker flashes a critical slow red, they hesitate not to draw a long nail and pierce their own palm. Accompanied by an inhuman shrieking scream, the chest's red light begrudgingly returns to a high-frequency agonizing strobe.",
        runtime: "IF (在携带诡雷但遭遇战中出现清场空窗期) THEN (提供机制：引入‘绝命心率条’。非战斗状态下心率会快速狂降，降到底直接Game Over炸档。玩家在跑图找怪的路上必须频繁主动按下‘自残按键’（扣除大量真实血量换取心率飙升）。血瓶变得极其珍贵，因为回血的同时心率也会下降！构成极度病态矛盾的资源管理与高压跑图狗斗)。",
        runtimeEn: "IF (Carrying_the_grenade_during_a_cleared-room_downtime) THEN (Provide_Mechanic: Introduces_'Lethal_Heartrate_Bar'._In_non-combat_heartrate_plummets._Hitting_zero_is_instant_Game_Over_wipe._Player_must_frequently_press_'Self-Mutilate'_key_during_exploration_(trading_massive_Real_HP_for_heartrate_spike)._Healing_potions_become_terrifying_since_healing_ALSO_drops_heartrate!_Creates_extremely_morbid_resource_management_and_high-pressure_dogfight_rushing)."
      }
    },
    {
      id: "the_memory_etched_final_coin",
      name: "刻满忘川刻痕的终末铜板", nameEn: "Memory-Etched Final Coin",
      group: "12. 虚无的盲盒", groupEn: "12. The Ineffable Void Box",
      def: "一枚永远呈现如同在火炉中被烧红的色泽，没有正反面，只在边缘布满怪异划痕的虚空偷渡铜钱。",
      defEn: "A void-smuggling copper coin forever glowing red-hot as if fresh from a furnace. Lacking heads or tails, its edges are marred by grotesque scratches.",
      core: "【表面诱惑】：这是通过最后那扇真理大门、或者是乘坐阿卡林渡船跨越死河的唯一路费。",
      coreEn: "【Surface Temptation】: This is the sole toll to pass through the final Door of Truth, or to board the Acheron ferry across the river of death.",
      logic: "【叙事抓手】：这枚硬币的物理存在极度不稳定，它会不断向虚无滑落。唯有用持有者脑子里的“人格与记忆”作为包裹它的琥珀，它才不会消失。因此，每一场血战、每前进一步，它都在直接剥夺主角的记忆。青梅竹马的名字、师父的脸、自己为何来这里的理由，像被热刀剔肉一般一块块消失。当主角浑身是血地站在最终BOSS面前时，他死死攥着这枚铜板，却已经是一个彻底失忆的白痴与纯粹出于本能杀戮的野兽。",
      logicEn: "【Narrative Affordance】: The coin's physical presence is highly unstable, constantly slipping into the void. It only avoids vanishing if wrapped in the 'amber' of the bearer's personality and memories. Thus, every bloody fight, every step forward, it actively rips away protagonist's memories. The name of the childhood sweet heart, the master's face, the very reason they came here—sliced away like meat pruned by a hot knife. When protagonist finally stands blood-soaked before the Final Boss, they grip the coin fiercely, yet they are a complete amnesiac blank slate—a beast killing purely on instinct.",
      patch: {
        mechanics: "表层锚点 + [人格抹杀 = 越是接近终点越是失去身为人的意义; 断触的高温 = 握着这枚硬币意味着手心永远被烧焦; 狂兽归零 = 在最终决战前忘了自己是谁的极权崩溃感]",
        mechanicsEn: "Surface_Anchor + [Personality_Erasure = The_closer_to_the_end_the_more_humanity_lost; Blistering_Heat = Holding_it_means_the_palm_is_forever_scorched; Wild_Beast_Zeroed = The_total_breakdown_of_forgetting_who_you_are_before_the_final_duel]",
        aesthetic: "聚焦：在宏伟悲绝的最后黑门前，主角的手掌已经被铜板烧穿了一个直通背面的焦洞。当反派嘲讽他所守护的信条时，主角那双已经毫无人类光彩、只有极致空虚与野兽般残暴的死鱼眼缓缓抬起，发出野兽般不明所以的咆哮直接扑杀而上。",
        aestheticEn: "Focus: Before the grand, tragically desolate Final Black Gate, the protagonist's palm is burned completely through by the coin, a charred hole showing the other side. When the villain mocks the creed they defend, the protagonist slowly raises dead-fish eyes—devoid of human light, holding only extreme emptiness and bestial savagery—and lunges with an incomprehensible, animalistic roar.",
        runtime: "IF (进入记忆剥夺最后阶段的守关战) THEN (提供机制：随着战斗深入，游戏UI将开始错乱剥落。技能图标、血条、甚至敌人的模型都在变轨闪烁甚至消失。系统逐步禁用高阶的‘华丽连击招式表’，主角的动作将不可逆地退化为最原始、最难看但打击感最沉重血腥的‘王八拳/疯狗咬杀’模式。虽然操作变简陋了，但每一击附加的原始爆伤极高，呈现出越是失去自我、越是物理狂暴的悲壮终局)。",
        runtimeEn: "IF (Entering_gatekeeper_fight_in_final_memory-erasure_phase) THEN (Provide_Mechanic: As_combat_progresses_game_UI_begins_glitching_and_peeling_off._Skill_icons_HP_bars_even_enemy_models_flicker_or_vanish._System_progressively_disables_high-tier_'Stylish_Combos'._Protagonist's_moveset_irreversibly_devolves_into_the_most_primitive_ugly_yet_devastatingly_bloody_'Mad_Dog_Brawling/Biting'_mode._Though_controls_dumb_down_each_raw_strike_has_massive_burst_damage_portraying_the_tragic_finale:_the_more_self_is_lost_the_more_physically_savage_they_become)."
      }
    }
  ]
};
