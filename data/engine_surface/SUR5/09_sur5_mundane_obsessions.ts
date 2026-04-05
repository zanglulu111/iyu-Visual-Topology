import { LibraryCategoryDef } from '../../../types';

export const SUR5_MUNDANE_OBSESSIONS: LibraryCategoryDef = {
  id: "sur5_mundane_obsessions",
  name: "9. 世俗与执念 (Mundane Obsessions & Mementos)",
  nameEn: "9. Mundane Obsessions & Mementos",
  desc: "在别人眼里一文不值，但对主角而言重于泰山的日常碎片。物理载体通用各种时空（如：一台坏掉的八音盒、一张破旧的羊皮纸、一枚生锈的戒指），它们代表了角色在残酷宏大史诗中，为了死守“曾作为普通人的尊严与记忆”而爆发的绝对非理性。",
  descEn: "Worthless to others, but heavier than mountains to the protagonist; fragments of personal daily life. Universal physical vessels across eras (e.g., broken music box, old parchment, rusted ring) representing the absolute irrationality of holding onto 'human dignity and memory' amidst a cruel grand epic.",
  items: [
    {
      id: "the_broken_vessel_of_melody",
      name: "死者遗留的破损发音盒", nameEn: "Broken Vessel of Melody",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "一个发条卡死/魔力枯竭的机械或晶石发音盒，一旦强行扭动只能发出走调刺耳的杂音。",
      defEn: "A mechanical or crystal music box with jammed gears/depleted magic; forcing it yields only harsh, out-of-tune noise.",
      core: "【表面诱惑】：没有任何生存意义的废品，但在主角眼里它是唯一证明亡故至亲（如女儿/妹妹）曾存在过的锚点。",
      coreEn: "【Surface Temptation】: Scrap with no survival value, but the sole anchor proving deceased kin existed.",
      logic: "【叙事抓手】：它的物理要求是“极度易碎与占手”。在核爆、龙息或乱战逃生中，主角宁可丢掉救命的医疗包或弹匣，也要死死用左手护着这个盒子。这让主角在所有的战斗中处于“强制单臂残疾”的物理受限状态。",
      logicEn: "【Narrative Affordance】: Its physical demand is 'extreme fragility and hand-occupying'. Fleeing nuke/dragon breath, they drop medkits/ammo to desperately cradle this box in their left arm. Forces 'one-armed crippling' physical state in combat.",
      patch: {
        mechanics: "表层锚点 + [占用装备位 = 强制废掉一只手; 价值对比 = 丢弃救命战利品换取无用情绪; 嘲讽靶点 = 敌人眼中的弱点]",
        mechanicsEn: "Surface_Anchor + [Slot_Occupation = Forcibly_disables_one_arm; Value_Contrast = Drop_lifesaving_loot_for_useless_emotion]",
        aesthetic: "聚焦：主角的攻击臂挥舞喷火兵器/巨剑，而防御臂则像护着婴儿般紧抱那个破木盒，血水顺着外壳滴下。",
        aestheticEn: "Focus: Attack arm swinging blazing weapon/greatsword, while the off-hand cradles the broken box like a baby, blood dripping down the casing.",
        runtime: "IF (在泥泞战壕/地牢迷雾中为了躲避致命范围打击而向前飞扑) THEN (提供机制：强迫玩家做出判定：是以胸口硬接致命碎片/法术来护住盒子，还是翻滚规避导致盒子受损，选择前者扣除50%血量上限)。",
        runtimeEn: "IF (Diving_forward_to_dodge_lethal_AoE) THEN (Provide_Mechanic: Force_choice: take_lethal_shrapnel_in_chest_to_shield_box_losing_50%_HP_limit, or_roll_and_damage_box)."
      }
    },
    {
      id: "the_last_ordinary_meal",
      name: "末日前必须吃到的日常餐食", nameEn: "The Last Ordinary Meal",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "在特定节日或时间点，必须在某家即将被炮火/魔法摧毁的老店吃上的一碗极为普通的廉价热汤面或炖菜。",
      defEn: "A cheap, utterly ordinary hot soup or stew that must be eaten at a specific time in an old shop about to be leveled by artillery/magic.",
      core: "【表面诱惑】：那是一切崩溃前的最后一份温馨记忆的物理复现，是维持主角“人类身份”的最后底线。",
      coreEn: "【Surface Temptation】: Physical reproduction of the last warm memory before collapse; the final baseline keeping 'human identity'.",
      logic: "【叙事抓手】：极度不理智的“限时强迫对抗”。当通天塔/星际法庭发布湮灭令时，主角逆着逃难人群走向那家店。为了保护这碗汤面不在端上来前被震塌的灰尘污染，主角必须在店外以一人之力挡住敌方先知/机甲兵团的冲锋。",
      logicEn: "【Narrative Affordance】: Extremely irrational 'time-limited confrontation'. As destruction orders fall, protagonist walks against fleeing crowds. To protect the meal from falling ceiling dust, they must single-handedly hold off the vanguard outside.",
      patch: {
        mechanics: "表层锚点 + [时间限制 = 特定刻度前; 行动轨迹 = 逆行送死; 环境交互 = 保护一碗汤的绝对平静]",
        mechanicsEn: "Surface_Anchor + [Time_Limit = Before_specific_tick; Movement = Suicidal_counter-march; Env_Interact = Protecting_the_absolute_calm_of_a_soup_bowl]",
        aesthetic: "聚焦：外面是血肉横飞、尸山血骨的焦土，屋内是被主角死死封住房门结界的安静角落，汤上正升起白雾。",
        aestheticEn: "Focus: Outside is scorched earth and gore; inside is a quiet corner sealed by the protagonist's ward, white steam curling up from the broth.",
        runtime: "IF (计时器剩三分钟，门外响起破城锤/攻城兽的轰鸣) THEN (提供机制：主角吐掉血，拔出残缺兵刃，对老板交代“稍等，我去清个垃圾，汤别煮糊了”)。",
        runtimeEn: "IF (Three_mins_left_battering_ram/siege_beast_roars_outside) THEN (Provide_Mechanic: Protagonist_spits_blood_draws_broken_blade_tells_boss_Wait_Im_taking_out_trash_dont_overcook_the_soup)."
      }
    },
    {
      id: "the_overdue_tome_to_return",
      name: "必须要归还的过期旧卷宗", nameEn: "Overdue Tome to Return",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "一本旧纪元出版的纸质童话书或羊皮卷轴，盖着早逾期三十年的归还印戳。",
      defEn: "A paper fairy-tale or parchment scroll from the Old Era, stamped with a return date 30 years overdue.",
      core: "【表面诱惑】：履行一个对旧世界、对某种“秩序”和“道德”的荒谬承诺。假装世界还没有崩坏。",
      coreEn: "【Surface Temptation】: Fulfilling an absurd promise to 'order' & 'morality'. Pretending the world hasn't collapsed.",
      logic: "【叙事抓手】：藏书馆已被列为禁区巢穴（如异化菌毯或深渊虫巢）。为了“还书”这个微不足道的目标，主角主动入地狱。书的物理脆弱性（怕火水酸）使得主角面对强酸/岩浆怪时，放弃所有常规防御甚至用肉身挡酸雨。",
      logicEn: "【Narrative Affordance】: The Library is now a forbidden nest. For the trivial goal of 'returning a book', they walk into hell. Its extreme fragility (fears fire/acid/water) forces abandoning defense to body-block acid rain/lava.",
      patch: {
        mechanics: "表层锚点 + [荒唐目的 = 为还书闯禁区; 易损特质 = 书页极度怕火水酸; 心理逃避 = 守约是对疯狂的抗拒]",
        mechanicsEn: "Surface_Anchor + [Absurd_Goal = Invade_forbidden_zone_for_a_book; Fragile_Trait = Pages_weak_to_fire/acid; Psych_Escape = Keeping_promises_resists_madness]",
        aesthetic: "聚焦：在一片长满粘液的腐败废墟中，那本用防水布/锡箔死死包裹的书，以及恭敬将其放在借阅台废墟上的那只碳化/腐烂的手掌。",
        aestheticEn: "Focus: Amidst festering slime ruins, the book wrapped tightly in waterproof foil, and the carbonized/rotted hand respectfully placing it on the ruined return desk.",
        runtime: "IF (遭遇强酸雨法术覆盖，所有护盾破裂) THEN (提供机制：强行脱下最后保命的护甲/防水衣裹住书，自己裸露在强酸雨中，皮肤发出嘶嘶溶解声血条暴跌)。",
        runtimeEn: "IF (Hit_by_acid_rain_spell_all_shields_broken) THEN (Provide_Mechanic: Strip_last_lifesaving_armor/jacket_to_wrap_book_standing_bare_in_acid_skin_melting_as_HP_plummets)."
      }
    },
    {
      id: "the_unsent_physical_letter",
      name: "从未寄出的亡者实体信件", nameEn: "Unsent Physical Letter to the Dead",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "一封装在揉皱信封里的古老纸质信笺，写着“致最爱的你”但永远没有邮戳与魔力印迹。",
      defEn: "An ancient paper letter in a crumpled envelope, reading 'To my dearest' but forever lacking a postmark/magic seal.",
      core: "【表面诱惑】：承载着无法送达的愧疚与爱意，是主角所有战斗意志的痛苦燃料。",
      coreEn: "【Surface Temptation】: Carries undeliverable guilt & love; agonizing fuel for all combat will.",
      logic: "【叙事抓手】：信封早松动，但主角每次只敢摸表面不读。直到最终的总攻/弑神前夜，主角必须独自坐在篝火前拆开读完。这是切断退路的最后仪式——伴随信件在手中被引燃，主角完成了向死而生的物理决裂。",
      logicEn: "【Narrative Affordance】: Seal is loose, but protagonist only touches, never reads. Until the eve of final siege/god-slaying, they must sit alone by campfire, open & read. The last ritual to cut off retreat—burning it is a physical break to embrace death.",
      patch: {
        mechanics: "表层锚点 + [不可读状态 = 薛定谔的情感; 最终仪式 = 战前烧毁; 物理断绝 = 彻底抛弃软弱羁绊]",
        mechanicsEn: "Surface_Anchor + [Unreadable = Schrodinger_emotion; Final_Ritual = Burn_pre-battle; Physical_Severance = Abandon_weak_ties]",
        aesthetic: "聚焦：篝火光芒中满是泪痕但愈发冰冷的脸庞；信纸燃烧卷曲的边缘化作灰烬，随风落在枪托/剑柄上。",
        aestheticEn: "Focus: Campfire light on tear-stained yet coldly hardening face; burning paper edges turning to ash drifting onto gun-stock/sword-hilt.",
        runtime: "IF (全员决战前夜互留遗言，主角背身拿出哪怕浸血几十次的信) THEN (提供机制：强制极其缓慢的读信QTE，无逆转地将其扔进火堆，换取永不撤退的破釜沉舟狂暴BUFF)。",
        runtimeEn: "IF (Eve_of_final_battle_swapping_last_words_protagonist_pulls_out_blood-soaked_letter) THEN (Provide_Mechanic: Force_slow_read_QTE_toss_into_fire_no_turn_back_gain_never-retreat_berserk_BUFF)."
      }
    },
    {
      id: "the_rusted_timepiece_stopped_at_doom",
      name: "永远停在灾厄时刻的生锈计时器", nameEn: "Rusted Timepiece Stopped at Doom",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "布满划痕、齿轮卡死或魔力核心固化，指针永远指向灾难降临那一绝对时刻的旧怀表/沙漏仪。",
      defEn: "Scratched pocket watch / astrolabe with jammed gears/solidified magic core, hands forever pointing at the absolute moment of catastrophe.",
      core: "【表面诱惑】：记录着毁灭性事件（核闪爆/天星坠落/亲人遇害）爆发的绝对零点。",
      coreEn: "【Surface Temptation】: Records absolute zero-hour of devastating event (nuke flash/meteor fall/family murdered).",
      logic: "【叙事抓手】：每当主角陷入濒死谵妄，世界声音屏蔽，只能听见计时器发出巨大疯狂的“滴答/嗡鸣”幻听。为从崩溃醒来，玩家必须用最暴力手段（金属义肢/重剑底座猛砸胸甲存放表的位置），用物理自残压制精神幻听。",
      logicEn: "【Narrative Affordance】: In near-death delirium, world mutes, only the loud maddening phantom 'tick-tock' is heard. To snap out, player must use extreme violence (smashing the watch slot on the chest-plate with metal arm/pommel) to suppress hallucination via self-harm.",
      patch: {
        mechanics: "表层锚点 + [时间定格 = PTSD载体; 听觉压制 = 强制幻听; 物理自残 = 解除幻境脱困唯一手段]",
        mechanicsEn: "Surface_Anchor + [Time_Freeze = PTSD_vessel; Audio_Suppression = Forced_hallucination_loop; Physical_Self-Harm = Only_way_to_break_illusion]",
        aesthetic: "聚焦：倒地慢动作中怀表表面映出敌人逼近的屠刀、主角疯狂用重物砸穿表面导致的玻璃扎入掌心猩红。",
        aestheticEn: "Focus: Slow-mo fall watch face reflects approaching butcher knives; violently smashing the face embedding glass shards into crimson palm.",
        runtime: "IF (血量低于10%触发崩溃，屏幕深红伴随巨大滴答声) THEN (提供机制：狂按QTE键让主角猛击胸铠怀表槽，再扣额外HP解除眩晕硬直)。",
        runtimeEn: "IF (HP<10%_triggers_breakdown_red_screen_w/_deafening_tick) THEN (Provide_Mechanic: Mash_QTE_to_bash_chest_watch-slot_deducting_more_HP_to_clear_stun)."
      }
    },
    {
      id: "the_collar_of_the_nameless_stray",
      name: "无名流浪小兽留下的旧项圈", nameEn: "Collar of the Nameless Stray",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "带有劣质铃铛、布带发黄发黑的小型生物项圈（猫咪项圈或幼灵兽皮带）。",
      defEn: "Small organism collar with cheap bell, blackened fabric/leather (cat collar or young spirit-beast leash).",
      core: "【表面诱惑】：承载着曾在冰冷铁锈贫民窟/黑暗森林中，唯一给予过主角纯粹依赖的小生命温度。",
      coreEn: "【Surface Temptation】: Carries warmth of the only small life that gave absolute reliance in the cold rusty slums/dark forest.",
      logic: "【叙事抓手】：项圈铃铛会发出极其微弱清脆的“叮当”声。在要求绝对静音的潜行关卡（如躲盲目听力系怪物）中，主角绝不破坏铃铛。为掩盖铃音，主角必须不断故意划伤自己，用鲜血滴答声引发怪物误扑转移注意力。",
      logicEn: "【Narrative Affordance】: Bell jingles faintly. In absolute-stealth levels (vs sound-sensitive blind horrors), they refuse to toss/break it. To cover the jingle, they slash their own flesh repeatedly, using dripping blood sounds to misdirect the monster pounces.",
      patch: {
        mechanics: "表层锚点 + [听觉隐患 = 破坏潜行; 理智抉择 = 死不丢弃; 代偿机制 = 割肉滴血制造更高分贝诱饵掩护微弱铃声]",
        mechanicsEn: "Surface_Anchor + [Audio_Hazard = Breaks_stealth; Rationality = Refuse_toss; Compensate = Slash_flesh_to_make_louder_drop_decoy_covering_bell]",
        aesthetic: "聚焦：发霉防空洞/地渊中致命的“叮当”，主角咬碎嘴唇果断划开大腿动脉引开变异体的疯狂举动、攥出冷汗的拳头。",
        aestheticEn: "Focus: Deadly 'jingle' in moldy bunker/abyss, violently slicing thigh artery to draw horrors away, clenching the collar in a sweaty fist.",
        runtime: "IF (盲眼处刑者在半米外停留怀疑时) THEN (提供机制：强制肢体割裂指令，划破手臂将血刃甩向远处深渊制造惨烈血腥声来引开它)。",
        runtimeEn: "IF (Blind_executioner_lingers_suspiciously_at_half-meter) THEN (Provide_Mechanic: Forced_slash-limb_cmd_fling_blood_blade_into_abyss_to_create_gore_noise_decoy)."
      }
    },
    {
      id: "the_ticket_to_the_cancelled_spectacle",
      name: "一张作废的末世盛会入场券", nameEn: "Ticket to the Cancelled Spectacle",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "日期定格在“灾变爆发日当晚”，永远未检票的彩色硬卡纸/水晶符印入场券（如旧纪元演唱会、帝国花车巡游）。",
      defEn: "Colored card/crystal token dated exactly 'night of cataclysm', forever un-punched for a grand event (e.g., Old World concert, Imperial parade).",
      core: "【表面诱惑】：永远无法兑现的青春约定，代表被无情踩碎的凡欲幻梦。",
      coreEn: "【Surface Temptation】: Unfulfilled youth promise representing mundane dreams mercilessly crushed.",
      logic: "【叙事抓手】：主角带票跋涉千里走向早夷为放射坑/虚空漩涡的旧址。全队拼死送他站在深坑边缘，主角仅是对着漆黑虚无空气，做了一个“请检票”的物理递交动作。随后扔入深渊。对无可挽回日常的最徒劳祭奠。",
      logicEn: "【Narrative Affordance】: Traveled 1000 miles to the venue now a radioactive crater / void swirl. At the abyss edge, protagonist simply performs a 'ticket handoff' motion to the pitch-black void. Tosses it. The most heroic futile tribute.",
      patch: {
        mechanics: "表层锚点 + [荒唐坐标 = 前往死地遗迹; 无用连招 = 虚空检票动作; 悲壮顶点 = 没有实效仅为斩断过去的浪漫送葬]",
        mechanicsEn: "Surface_Anchor + [Absurd_Coord = Travel_to_dead_ruin; Useless_Combo = Void_ticketing_motion; Tragic_Peak = Zero_gameplay_stat_pure_romantic_funeral]",
        aesthetic: "聚焦：巨大惊悚的核爆坑/虚空边缘渺小如蚁的主角，狂风中吹飞落入无尽黑暗的一张小小卡片。",
        aestheticEn: "Focus: Protagonist ant-like on the edge of massive nuke crater / void, tiny colorful card blown into endless darkness.",
        runtime: "IF (死伤惨重抵达任务坐标原址废墟) THEN (提供机制：无BOSS战，仅要求玩家长按F键十秒执行‘递出票根’，转身离开不回头)。",
        runtimeEn: "IF (Arrive_at_target_ruin_with_heavy_losses) THEN (Provide_Mechanic: No_boss_fight_only_hold_F_10s_to_'hand_ticket'_turn_and_never_look_back)."
      }
    },
    {
      id: "the_half_finished_warm_weave",
      name: "织到一半沾血的防寒织物", nameEn: "Half-Finished Bloody Weave",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "劣质毛线或绒皮手工赶制的半成品（如红围巾/御寒袖套），连着锐利的长织针，沾满干涸发黑血块。",
      defEn: "Cheap yarn/fur half-finished winterwear (e.g., red scarf) still attached to sharp long knitting needles, stained in dried black blood.",
      core: "【表面诱惑】：在那场死亡之冬许诺的御寒实用品，现成物理勒颈锁。",
      coreEn: "【Surface Temptation】: Practical winter gift promised in the winter of death, now a physical noose.",
      logic: "【叙事抓手】：织针尖锐。主角习惯性将其缠在脖颈手臂当绷带。激烈肉搏中，连带的织针会因肌肉收缩碰撞深深扎进主角自己的肉里。主角宁承受这私念导致的手工割裂痛，也拒放背包。",
      logicEn: "【Narrative Affordance】: Needles are sharp. Habitually wrapped as bandages. Rapid muscle contractions in melee drive the needles deep into their own flesh. They endure this obsession-induced laceration over storing it safely.",
      patch: {
        mechanics: "表层锚点 + [战斗干涉 = 物理刺痛反噬; 肉体受刑 = 把心碎具象化为刺入肌理的针; 永不解下 = 负重与伤害的诅咒]",
        mechanicsEn: "Surface_Anchor + [Combat_Interfere = Physical_stabbing_backlash; Flesh_Punishment = Materialized_heartbreak_needles; Never_Unequip = Curse_of_weight_&_pain]",
        aesthetic: "聚焦：挥出机械爆震拳/斩击瞬间，沾血长针无情凭惯性扎穿肱二头肌，红线与滚烫鲜血在寒风中混为一体。",
        aestheticEn: "Focus: Swinging explosive punch/slash, bloody needles pierce bicep by momentum, red yarn and hot blood blending in the icy wind.",
        runtime: "IF (使用最高出力处决技时) THEN (提供机制：敌方头骨碎裂声中混入利刃刺破主角自身皮肤的噗嗤声，血条出现微小不可逆损耗)。",
        runtimeEn: "IF (Using_max_output_execution_skill) THEN (Provide_Mechanic: Enemy_skull_crush_audio_mixes_w/_needle_puncturing_protagonist_skin_causing_minor_irreversible_HP_loss)."
      }
    },
    {
      id: "the_sealed_vessel_of_hometown_soil",
      name: "死死密封的故土泥沙容器", nameEn: "Sealed Vessel of Hometown Soil",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "物理封死无法开启的粗糙玻璃罐/水晶瓶，装着毫无养分的黑色死泥沙。",
      defEn: "Physically welded/sealed rough glass jar or crystal vial containing dead, nutrient-empty black soil.",
      core: "【表面诱惑】：承载地理归属感与对故土的最终认同，游荡者唯一的“根”。",
      coreEn: "【Surface Temptation】: Geographic belonging & ultimate homeland identity; wanderer's only 'roots'.",
      logic: "【叙事抓手】：为防玻璃罐破裂，在穿越重力/强酸陷阱区时，主角必将其吞入腹中或剖开大腿藏入皮肉。这土的重量与碎片尖锐度随时会刺穿内脏，变成最高昂的沉溺残体代价。",
      logicEn: "【Narrative Affordance】: To prevent breakage in gravity/acid zones, protagonist must swallow it or cut their thigh to hide it in flesh. Soil's weight & glass edges threaten to rupture organs—a severe self-mutilating tribute.",
      patch: {
        mechanics: "表层锚点 + [储存方式 = 自残式体腔包裹; 负重暴击 = 强制占据核心脆弱点; 情感寄托 = 带故乡踏入地狱的重量]",
        mechanicsEn: "Surface_Anchor + [Storage = Self-mutilating_body_cavity_wrap; Crit_Weight = Forced_occupancy_of_vitals; Emotional_Anchor = Weight_of_bringing_homeland_into_hell]",
        aesthetic: "聚焦：强酸高压雨廊中，主角一瘸一拐，大腿/腹部因强行塞入硬质容器而鼓起惊心动魄的青紫肿块。",
        aestheticEn: "Focus: Limping through high-pressure acid corridor, thigh/abdomen bulging grotesquely with a bruised purple lump from the rigid vessel.",
        runtime: "IF (遇高危脱衣安检扫描) THEN (提供机制：强制执行肢体剖裂，将罐子硬缝入肉度过安检，挂上长时间流血衰弱debuff)。",
        runtimeEn: "IF (High-risk_strip_scanner_encountered) THEN (Provide_Mechanic: Forced_flesh-cutting_to_sew_jar_inside_to_pass_scanner_incurring_long_bleed_weaken_debuff)."
      }
    },
    {
      id: "the_cheap_smoking_pipe_of_the_patriarch",
      name: "长辈遗留的劣质旧烟斗", nameEn: "Patriarch's Cheap Smoking Pipe",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "一根洗过千百遍依旧带刺鼻焦油味/廉价魔药味的木制或铜制烟斗。",
      defEn: "Wooden/copper pipe washed 1000 times but still reeking of pungent cheap tar or potion.",
      core: "【表面诱惑】：家庭记忆、父权压迫或未和解童年创伤的物理具象化。",
      coreEn: "【Surface Temptation】: Physical incarnation of family memory, patriarchy, or unresolved childhood trauma.",
      logic: "【叙事抓手】：主角从不抽烟。生死瞬间通过“空吸烟斗”强制镇静。为保护这段无价值的木头，主角刻意挖空胸口防弹板/防护符文以供插放，致使心脏要害完全暴露在敌方狙击下。",
      logicEn: "【Narrative Affordance】: Protagonist doesn't smoke. Performs 'dry suck' to force calm near death. To protect this useless wood, their chest Kevlar/ward is hollowed out for storage, exposing the heart perfectly to snipers.",
      patch: {
        mechanics: "表层锚点 + [虚假镇定 = 空吸心理暗示; 防御漏洞 = 为藏烟斗自毁胸口装甲; 情感代偿 = 永远达不成和解的血亲局]",
        mechanicsEn: "Surface_Anchor + [False_Calm = Dry-suck_psych_trigger; Defense_Flaw = Destroying_chest_armor_for_pipe_slot; Emotion_Compensate = Unresolvable_blood_feud]",
        aesthetic: "聚焦：掩体后满脸是血，颤抖白唇咬死无烟雾飘出的空斗，眼神由颤狂逐渐冰冷锁定黑夜。",
        aestheticEn: "Focus: Bloodied behind cover, trembling white lips biting down the smokeless empty pipe, eyes shifting from frantic to coldly locking onto the dark.",
        runtime: "IF (受精神法术/威压恐惧判定) THEN (提供机制：两秒内拔出烟斗咬在嘴里，当前护甲降至0但也免疫所有心灵崩溃失控)。",
        runtimeEn: "IF (Hit_by_fear/psychic_check) THEN (Provide_Mechanic: Must_draw_and_bite_pipe_within_2s_armor_drops_to_0_but_granting_immunity_to_mental_breakdown)."
      }
    },
    {
      id: "the_worn_out_catcher_gear",
      name: "破损的童年接球手套/防具", nameEn: "Worn-Out Catcher Gear",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "掌心磨透缝补数十次的旧联盟棒球手套，或做工极其粗糙的孩童木盾。",
      defEn: "Old league baseball glove worn through and patched dozens of times, or a crudely made child's wooden shield.",
      core: "【表面诱惑】：旧世最正常的伴玩约定/家庭阳光往昔的象征。",
      coreEn: "【Surface Temptation】: Symbol of the sunny past of normal playmate promises and family peace in the old world.",
      logic: "【叙事抓手】：这代表“和平接纳”的手具，被主角强套在执行“斩首屠杀”的重型机械臂/魔化主攻手上。由于尺寸物理错位，频繁卡死扳机或剑柄。这是一场“用曾经接住温柔的受体，去施展极度残暴抹杀”的物理反讽。",
      logicEn: "【Narrative Affordance】: This gear of 'peaceful receiving' is forcibly worn on the heavy slaughtering mech-arm/demon-hand. The size dislocation frequently jams triggers/hilts. A physical irony of 'using the receptor of warmth to inflict extreme brutal erasure'.",
      patch: {
        mechanics: "表层锚点 + [装备错位 = 和平信物套杀戮兵器; 性能反噬 = 卡壳脱手事故源头; 主题蒙太奇 = 鲜血淋漓的接球员]",
        mechanicsEn: "Surface_Anchor + [Gear_Dislocation = Peace_token_on_murder_weapon; Performance_Backlash = Root_of_weapon_jam/drop; Theme_Montage = Blood-drenched_catcher]",
        aesthetic: "聚焦：蒸汽义体巨手上强行绷紧的微小开裂旧皮革，正狠狠捏碎敌方头骨/核心，缝隙爆出骇人的火花脑浆。",
        aestheticEn: "Focus: The tiny cracking old leather forcibly stretched on a giant steam prosthetic hand, brutally crushing an enemy skull/core, horrific sparks & gore erupting from the seams.",
        runtime: "IF (使用大口径武器/重剑连斩时) THEN (提供机制：随机触发手套卡入护圈导致的‘严重故障QTE’，必须在枪林弹雨中强制停火扯拉手皮恢复射击)。",
        runtimeEn: "IF (Consecutive_heavy_weapon_attacks) THEN (Provide_Mechanic: Randomly_triggers_Critical_Jam_QTE_caused_by_glove_must_cease_fire_in_bullet_storm_to_yank_leather_loose_before_resuming)."
      }
    },
    {
      id: "the_last_unprocessed_memory_record",
      name: "最后的未解码记忆胶卷/晶体", nameEn: "Last Unprocessed Memory Record",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "外壳被强光辐射/混沌能量部分破坏的古老底片暗盒或记录晶体。",
      defEn: "Ancient film cartridge or record crystal with casing partially corrupted by intense light/chaos energy.",
      core: "【表面诱惑】：记录着末日闪爆前最后一秒亲人看向镜头的画面，是唯一未验证的极乐底片。",
      coreEn: "【Surface Temptation】: Records the final second relatives smiled at the lens before flash-doom; the only unverified negative of bliss.",
      logic: "【叙事抓手】：它存在“极度畏光畏辐射”的物理属性。主角一辈子求一处无菌全暗室。为防高强度法术光或环境能量暴走，主角拔掉自己的一只原装眼球/义眼，把底片盒硬塞进神经槽。这带来单目失明以及“高血压/充血随时压爆底片”的无限心理恐惧。",
      logicEn: "【Narrative Affordance】: Exhibits 'extreme photophobia / anti-radiation' physics. Seeking a totally dark sterile room for life. To protect it from intense spell-light, protagonist rips out one of their own eyes to slot the cartridge in the optic socket—causing half-blindness and the perpetual terror that a blood pressure spike will crush the negative.",
      patch: {
        mechanics: "表层锚点 + [视野缺失 = 物理献祭充当暗室; 薛定谔狂亡 = 洗出前无法证实; 心理压抑 = 不能暴怒不能血压过载]",
        mechanicsEn: "Surface_Anchor + [Vision_Loss = Physical_sacrifice_for_darkroom; Schrodingers_Madness = Unverifiable_til_developed; Psych_Repression = Must_not_rage/spike_blood_pressure]",
        aesthetic: "聚焦：主角独眼，另一侧眼眶里塞着黑色古老底片盒，蔓延出如同血丝般的神经连接触须，在眼眶中不安地跳动。",
        aestheticEn: "Focus: One-eyed protagonist, the other socket stuffed with a black ancient film case, sprouting bloodshot neural tentacles twitching uneasily.",
        runtime: "IF (在被BOSS重创导致狂暴槽被动充能阶段) THEN (提供机制：系统强制屏蔽右半眼视野，并伴随‘底片惊悚受压嘎吱声’，提醒继续狂暴直接毁灭遗物)。",
        runtimeEn: "IF (Heavy_BOSS_damage_passively_fill_berserk_meter) THEN (Provide_Mechanic: System_forcibly_blinds_right_half_vision_with_creepy_film-crushing_creaks_warning_that_full_berserk_destroys_the_relic)."
      }
    },
    {
      id: "the_crumpled_hand_drawn_portrait",
      name: "皱巴巴的手绘全家福", nameEn: "Crumpled Hand-Drawn Portrait",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "画在粗糙牛皮纸/树皮上的凌乱简笔画，用次等染料涂着三个人拉手。",
      defEn: "Messy stick-figure drawing on rough kraft/bark with cheap dye showing three people holding hands.",
      core: "【表面诱惑】：难民/下级种族唯一的血缘证明，大风一吹就能粉碎的微尘。",
      coreEn: "【Surface Temptation】: Sole bloodline proof for refugees/lower races, dust that shatters in a strong wind.",
      logic: "【叙事抓手】：逃亡时被泥浆黑血糊住人脸。主角变态般满世界换取最高稀有度的化学溶剂/圣水试图洗开血迹，却把纸面洗薄欲裂。一种“为留住幻景而徒手擦烂遗存”的荒谬自毁。",
      logicEn: "【Narrative Affordance】: Smeared by black blood in escape. Protagonist obsesses to trade for maximum-rarity solvents/holy-water to wash it, only rubbing the paper dangerously thin. Absurd self-destruction of 'rubbing the relic to death to save a mirage'.",
      patch: {
        mechanics: "表层锚点 + [不可复原 = 越洗越薄; 执念诅咒 = 把救命神液拿去擦废纸; 无尽挽回 = 面孔早被溶解]",
        mechanicsEn: "Surface_Anchor + [Irreparable = Thinner_each_wash; Obsession_Curse = Waste_god-elixir_on_scrap_paper; Endless_Salvage = Faces_already_dissolved]",
        aesthetic: "聚焦：闪烁昏暗光源下，主角拿高纯治愈之水镊子，帕金森般绝望颤抖地摩擦薄如蝉翼的血纸。",
        aestheticEn: "Focus: Under flickering dim light, shaking like Parkinson's, using tweezers and pure healing water to despairingly rub the tissue-thin bloody paper.",
        runtime: "IF (获得极品断肢再生溶剂) THEN (提供机制：强迫二选一‘注射断臂’或‘清洗全家福’，选后者纸破洞，触发彻底失控狂魔化)。",
        runtimeEn: "IF (Obtain_supreme_limb-regrow_solvent) THEN (Provide_Mechanic: Force_choice: Inject_severed_arm_vs_Clean_portrait, latter_tears_paper_triggering_total_insane_demonification)."
      }
    },
    {
      id: "the_smoothed_empty_wrapper_of_sweetness",
      name: "平整的空糖纸/旧时甜点印记", nameEn: "Smoothed Empty Wrapper of Sweetness",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "印有旧纪元字样的透明防潮糖纸，被小心压在两片装甲夹板中间。",
      defEn: "Transparent moisture-proof candy wrapper with Old Era logs, carefully pressed between two armor splints.",
      core: "【表面诱惑】：人生唯一一次惊悚的“不可思议甜味”证明，是对抗尸骸时代的一抹残影。",
      coreEn: "【Surface Temptation】: Proof of the singular 'incredible sweetness' in life, an afterimage against the corpse era.",
      logic: "【叙事抓手】：由于创伤后感官幻替——只要舔舐其表面，主角就能尝到虚假的剧烈甜味。藉此抗拒全城弥漫的浓烈腥臭毒气。一场“用塑料渣/羊皮纸冒充糖原”的悲惨精神麻醉。",
      logicEn: "【Narrative Affordance】: Due to trauma-induced sensory hallucination, licking it triggers false intense sweetness. Used to combat city-wide stench of death/poison. Tragic mental anesthesia 'faking glycogen with plastic/parchment'.",
      patch: {
        mechanics: "表层锚点 + [感官欺骗 = 强行舔舐换取神经阻断; 止痛安慰剂 = 含纸冲锋; 极端反差 = 腥臭血狱中的虚假甘甜]",
        mechanicsEn: "Surface_Anchor + [Sensory_Deception = Lick_for_neural_block; Painkiller_Placebo = Charge_with_wrapper_in_mouth; Contrast = False_sweet_in_blood-hell]",
        aesthetic: "聚焦：齐腰深腐烂泥沼怪堆里，主角死咬糖纸，在被开膛破肚剧痛中，强挤出一抹尝糖般的虚幻笑意。",
        aestheticEn: "Focus: Waist-deep in rot-mire horror swarm, biting the wrapper, squeezing out a hallucinatory sweet smile amidst the agony of disembowelment.",
        runtime: "IF (处于极度痛苦濒死红视状态) THEN (提供机制：按键触发‘舔舐旧梦’，画面瞬红转温柔粉色，暂时物理级屏蔽全系统痛觉UI反馈与蹒跚减速)。",
        runtimeEn: "IF (In_extreme_agony_red-vision_state) THEN (Provide_Mechanic: Keypress_triggers_Lick_Old_Dream_screen_flashes_warm_pink_temporarily_blocking_all_pain_UI_and_limping_debuffs)."
      }
    },
    {
      id: "the_keys_to_the_erased_home",
      name: "再也打不开门的废房死锁钥匙", nameEn: "Keys to the Erased Home",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "一串门牌号已磨平的防盗门/木制大门旧钥匙。",
      defEn: "A keychain for a security/wooden door, address tag completely smoothed out.",
      core: "【表面诱惑】：证明在世界沦入深渊前，此处曾有一处唤作“家”的绝对坐标。",
      coreEn: "【Surface Temptation】: Proof that before world abyss fall, an absolute coordinate named 'home' existed here.",
      logic: "【叙事抓手】：其原本的街区或飞地早沉入万丈地狱。当绝望崩溃时，主角会对任意空白铁壁/冰壁做“插钥匙旋转推门”动作。这空洞金属刺耳声让精神极速催眠，以为自己“回屋了”方敢就地瘫倒沉睡。",
      logicEn: "【Narrative Affordance】: The original block sank into absolute hell. When despairing, protagonist performs 'insert-turn-push' against random blank walls. The hollow metallic scrape hypnotizes the mind into thinking 'I am home', allowing them to collapse and sleep.",
      patch: {
        mechanics: "表层锚点 + [幻居仪式 = 对空气金属墙摩擦; 精神催眠 = 落入梦境的苛刻前提; 坐标绝对虚无 = 物理上早就抹除]",
        mechanicsEn: "Surface_Anchor + [Phantom_Dwelling = Scraping_against_air/metal; Psych_Hypnosis = Strict_pre-req_to_slumber; Absolute_Coord_Void = Physically_long_erased]",
        aesthetic: "聚焦：在极寒暴风雪绝境中，极其严丝合缝端正地对着冰墙插钥匙转动，嘴角露出解脱微笑，随后软倒在暴雪里。",
        aestheticEn: "Focus: In extreme freezing blizzard, meticulously inserting turning key into an ice wall, a relieved smile forming before collapsing soft into the snowdrift.",
        runtime: "IF (长时间无法安全区入睡导致幻觉满格崩竭衰竭) THEN (提供机制：找一段空白墙体，强制15秒极慢动作‘假装推门’QTE，瞬间触发深度睡眠回血)。",
        runtimeEn: "IF (Long_sleep_deprivation_maxing_hallucination_to_fatal_exhaustion) THEN (Provide_Mechanic: Find_blank_wall_force_15s_ultra-slow_pretend-open-door_QTE_instantly_triggering_deep_slumber_regen)."
      }
    },
    {
      id: "the_tarnished_ring_of_covenant",
      name: "黯淡的生锈誓约金属环", nameEn: "Tarnished Ring of Covenant",
      group: "9. 世俗与执念", groupEn: "9. Mundane Obsessions",
      def: "由强酸溶解或风化至面目全非的环形物，内圈刻字被铁锈死死填平。",
      defEn: "A loop corroded/weathered beyond recognition, internal engravings jammed flat by rust.",
      core: "【表面诱惑】：契约精神在背信弃义无间地狱里唯一的永恒残存承诺。",
      coreEn: "【Surface Temptation】: The lone eternal surviving promise of covenant spirit in an inferno of endless betrayal.",
      logic: "【叙事抓手】：主角断了左无名指，无处佩戴。遂用粗糙钢针刺穿锁骨，以带刺铁丝将铁环死锁在最靠近心脏的胸侧皮肉中。每次斩击挥动，那生锈环便沿着锁骨划切血痕，永念刻骨的丧妻夫痛楚。",
      logicEn: "【Narrative Affordance】: Missing left ring finger, nowhere to wear it. Pierces collarbone with rough steel needle, barbed-wires the loop locking it deep in chest flesh near the heart. Every slash attack tears the collarbone, ensuring eternal agony of the lost spouse.",
      patch: {
        mechanics: "表层锚点 + [穿刺死佩 = 锁骨上的血肉刑具; 痛楚连结 = 每击必然自扯; 拒绝解脱 = 主动套紧情感之刑]",
        mechanicsEn: "Surface_Anchor + [Piercing_Deadwear = Flesh_torture_tool_on_collarbone; Pain_Link = Self-tears_on_every_hit; Refuse_Release = Actively_tightens_emotional_punishment]",
        aesthetic: "聚焦：赤裸半身狂野躯壳，锁骨处被铁线硬勒得血肉模糊的绿化铜环，伴随暴怒心脏疯跳起伏。",
        aestheticEn: "Focus: Half-naked wild husk, collarbone flesh shredded tight by iron wire holding an oxidized green ring, bouncing violently with furious heartbeats.",
        runtime: "IF (遭遇强行洗脑忘却伤痛的极光幻魔魅惑时) THEN (提供机制：无需QTE反抗，自动爆发动画：右指猛勾扯锁骨铁丝，剧烈的大出血痛感瞬间在视界中炸碎魅惑晶壁)。",
        runtimeEn: "IF (Facing_aurora_illusion_demon_attempting_forced_amnesiac_mind-wash) THEN (Provide_Mechanic: No_QTE_needed_Auto-animation_erupts: Right_fingers_violently_yank_collarbone_wire_massive_hemorrhagic_pain_instantly_shatters_charm_crystal_wall)."
      }
    }
  ]
};
