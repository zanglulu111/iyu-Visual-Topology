import { LibraryCategoryDef } from '../../../types';

export const SUR5_HONOR_VALIDATION: LibraryCategoryDef = {
  id: "sur5_honor_validation",
  name: "6. 尊严与社会认同 (Honor & Validation)",
  nameEn: "6. Honor & Validation",
  desc: "普适于任何时代的“自我证伪与救赎场”。通过受损的物证、必输的绞肉机或绝对强权的审视，将心理诉求剥落成最血淋淋的物理自证。",
  descEn: "Universal 'self-falsification & redemption field'. Strips psychological needs down to bloody physical self-proof via damaged evidence, doom-matches, or supreme scrutiny.",
  items: [
    {
      id: "the_doomed_desperation_match",
      name: "打断肋骨也要接下的必输死局", nameEn: "The Doomed Desperation Match",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "双方在物理体量、装备或社会法理上存在绝对碾压差的公开对抗场（如平民对冠军的黑市拳赛、用生锈铁剑面对龙骑兵、在一众暴主前辩死劫的法庭）。",
      defEn: "Public confrontation field with absolute crushing difference in physical bulk, gear, or legal power (e.g., Peasant vs Champ in underground boxing, rusty sword vs dragonriders, defending death-row in front of tyrants).",
      core: "【表面诱惑】：用自己的骨血去撞击一座叹息之墙，以单边受虐的姿态向社会狂吼一声“我他妈还站着”。",
      coreEn: "【Surface Temptation】: Crashing one's bone and blood against the wall of sighs, roaring 'I'm still fucking standing' via one-sided masochism.",
      logic: "【叙事抓手】：“禁止倒下”的强制物理被动。这不是为了赢（不可能赢），而是为了“撑满回合数”。主角被剥夺了技巧施展空间，只能通过承受拳拳到肉、刀锋见骨的物理破坏，把自身的惨状作为唯一的反击武器去撕裂观众的麻木神经。",
      logicEn: "【Narrative Affordance】: Forced physical passive of 'Forbidden to fall'. Not about winning (impossible), but 'lasting the rounds'. Protagonist is stripped of skill-room, using gruesome physical damage taken as the sole weapon to tear audience's numb nerves.",
      patch: {
        mechanics: "表层锚点 + [超量级受击 = 强锁防御姿态血条见底; 读秒站起 = 回合制折磨的最大化演出; 精神反伤 = 伤口越深反向摧毁对手心智]",
        mechanicsEn: "Surface_Anchor + [Super-Heavyweight_Hit = Force-locks_guard_stance_with_1_HP; Standing-count = Maximize_turn-based_torture_show; Mental_Reflect-Dmg = Deeper_wounds_shatter_opponent's_logic]",
        aesthetic: "聚焦：被打得肿胀封眼的青紫面孔、重磅勾拳/巨锤轰击在格挡手臂上发出的清脆骨裂声、以及喷出血沫的歪裂牙架上挂着的狂笑。",
        aestheticEn: "Focus: Purple swollen blood-shut eyes, crisp bone-cracking sound of heavy hooks/maces on blocking arms, manic laugh hanging on a crooked bloody mouth-guard.",
        runtime: "IF (在被重甲碾压了几乎十分钟后，裁判/执行官举起手准备按下终止键宣布烂泥战败) THEN (提供机制：主角吐出两颗带血的碎牙，用一种几乎断裂的非自然姿态抓住大剑/法槌，周围所有的嘘声在半秒内化作极致安静的恐怖倒吸气)。",
        runtimeEn: "IF (After_10_mins_crushed_by_heavy-armor_referee_raises_hand_to_push_abort_button) THEN (Provide_Mechanic: Protagonist_spits_two_bloody_teeth_grabbing_greatsword/gavel_in_unnatural_broken_pose_all_boos_turn_to_shocked_gasps_in_half-sec)."
      }
    },
    {
      id: "the_evidence_of_innocence",
      name: "洗刷泥沼污名的残损物证", nameEn: "The Evidence of Innocence",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "唯一能自证清白、且在物理层面上经历过极高损毁的脆弱证据（带血的高糊录像带、被烧了一半的暗杀赦免令、从死人喉咙里挖出的微型U盘）。",
      defEn: "Sole fragile evidence capable of self-proving innocence, having suffered extreme physical damage (Bloodstained blurry tape, half-burned pardon, micro-USB dug from dead throat).",
      core: "【表面诱惑】：翻盘洗牌的法定通行证。只要能把它完整插在大盘里读取，整个追杀世界的敌我阵营标识就会瞬间红绿对调。",
      coreEn: "【Surface Temptation】: Legal pass to flip the board. If read intact, the entire hunting world's friend-foe IFF tags instantly swap.",
      logic: "【叙事抓手】：“数据修复的物理读条焦虑”。脆弱性逼迫主角在护送过程中极恐开火，而在证明时，证据本身的残缺性制造了悬念。主角不仅要杀出血路，还要在枪林弹雨下祈祷这件焦黑的死物能成功撑过3分钟的缓慢读取。",
      logicEn: "【Narrative Affordance】: 'Physical loading-bar anxiety of data repair'. Fragility terrifies protagonist from firing during escort. At proof time, the damage creates suspense. Protagonist must bleed to make a path, then pray under fire this charred dead thing survives 3 mins of slow reading.",
      patch: {
        mechanics: "表层锚点 + [受损体物理护卫 = 宁可用肉体挨枪不用包裹挡; 读条僵局 = 必须守在终端机旁忍受红名怪冲阵; 反转重现 = 进度100%时的环境阵营静默]",
        mechanicsEn: "Surface_Anchor + [Damaged_Entity_Escort = Tank_bullets_with_flesh_not_bag; Loading_Gridlock = Must_camp_terminal_tanking_rushes; Flipped_Replay = Mobs_go_silent_at_100%_progress]",
        aesthetic: "聚焦：满是划痕需要用衣服拼命擦拭的磁盘/玉石、屏幕上时断时续疯狂跳出Error的高糊播放画面、周围防暴警察渐渐放慢甚至垂下的枪口。",
        aestheticEn: "Focus: Scratched disc/jade wiped desperately with clothes, screen stuttering fuzzy playback with mad Errors, surrounding riot police slowly un-aiming guns.",
        runtime: "IF (主角满头流血冲进广播塔强行插入残缺母盘，但读取条卡在了99%并不断闪烁物理坏道警告) THEN (提供机制：背后大批追杀特工踹开铁门举枪，主角根本不躲闪而是疯了一般用拳头猛砸主板接线强行物理连通最后1%跳出铁证，全场特工手指僵死在扳机上)。",
        runtimeEn: "IF (Protagonist_bloodied_rushes_broadcaster_inserting_disk_but_loading_stucks_at_99%_flashing_bad-sector) THEN (Provide_Mechanic: Agents_kick_door_aiming_guns_protagonist_ignores_them_frantically_fist-smashing_mobo_wires_to_force_last_1%_out_freezing_all_agent_fingers_on_triggers)."
      }
    },
    {
      id: "the_autocrats_dying_nod",
      name: "上位暴君临终的下颌微点", nameEn: "The Autocrat's Dying Nod",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "来自高不可攀、铁血冷酷的家族暴君、帝国霸主或黑帮教父在物理弥留之际，对那个一直被踩在底部的弃子（主角）给出的唯一无声肯定。",
      defEn: "From the unreachable, cold-blooded family tyrant, empress or don on mortal deathbed, the sole silent nod to the bottom-tier bastard child/disciple (protagonist).",
      core: "【表面诱惑】：用一生的屈辱与鞭笞，换取掌权者死前零点五秒那句毫无保留的最高社会性认错与加冕。",
      coreEn: "【Surface Temptation】: Trading a life of humiliation and whips for the ruler's 0.5s unreserved supreme social apology and coronation.",
      logic: "【叙事抓手】：极度虚弱场景中的“精神权力移交”。这是一种反向物理制约。一个手指头都动不了的濒死老者，只用闭眼和点头，就瞬间剥夺了原本全副武装、咄咄逼人的正派长子/大臣的所有继承法理空间。主角此刻的认同感不来自于剑，而来自于这口气。",
      logicEn: "【Narrative Affordance】: 'Mental power transfer' in extremely weak scene. Reverse physical restraint. A dying elder unable to lift a finger simply nods, instantly stripping all inheritance legality from the fully-armed aggressive legitimate heirs. Validation comes from this breath, not a sword.",
      patch: {
        mechanics: "表层锚点 + [不可碰触的权柄 = 只能听不能抢; 反向精神碾压 = 虚弱之人的指令最强; 洗牌休克 = 周围傲慢势力的集体破防崩溃]",
        mechanicsEn: "Surface_Anchor + [Untouchable_Authority = Can_listen_not_grab; Reverse_Mental_Crush = The_weakest's_order_is_strongest; Shuffle_Shock = Collective_breakdown_of_surrounding_arrogant_factions]",
        aesthetic: "聚焦：心电监护仪毫无起伏的锐利平行滴声、暴君干枯布满老人斑的死寂手背上被主角滴下的一滴泪烫到的微小抽搐。",
        aestheticEn: "Focus: Sharp flatline beep of ECG, microscopic twitch of tyrant's dry age-spotted dead hand burned by one tear from the protagonist.",
        runtime: "IF (光鲜亮丽的继任长子嚣张地举起皇位/黑榜权杖准备发号施令，认为老头已经死透) THEN (提供机制：这具连骨管都塌陷的死尸突然猛吸一气，干瘪的眼珠转过全场所有权贵，最终死死锁定在正从后门泥泞中一瘸一拐走入的卑贱主角身上，扯出一丝微笑后断气)。",
        runtimeEn: "IF (Dazzling_legit_heir_arrogantly_raises_scepter_ready_to_command_thinking_old_man_completely_dead) THEN (Provide_Mechanic: The_bone-collapsed_corpse_suddenly_gasps_shriveled_eyes_sweeping_all_nobles_locking_dead-on_the_lowly_protagonist_limping_in_thru_muddy_backdoor_smiling_faintly_before_dying)."
      }
    },
    {
      id: "the_magnum_opus_of_flesh_sacrifice",
      name: "溶解物理机能的惊世造物", nameEn: "The Magnum Opus of Flesh Sacrifice",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "通过生生熬尽体力、抽干骨髓、甚至双目失明的方式，在闭关极限中锻打/谱写出来的不可复现之艺术或工程绝响（血画、以身祭剑、盲眼敲出的最终程序）。",
      defEn: "Unrepeatable art/engineering magnum opus forged by boiling stamina, draining bone-marrow, going blind in extreme isolation (Blood painting, sword forged with self-sacrifice, final code typed blind).",
      core: "【表面诱惑】：跨越时间和碳基周期的唯一不朽特权。用物理残疾甚至死亡去兑换一块在文明体系中绝对无法被抹去的图腾。",
      coreEn: "【Surface Temptation】: Sole immortal privilege beyond time and carbon cycles. Trading phys-disability/death to coin a totem absolutely un-erasable in civ.",
      logic: "【叙事抓手】：典型的“血肉磨损读条法”。它的尊严不来自作品本身多美，而来自创作者每一次挥锤、每一次按下琴键，肉体都会呈现出不可逆的崩塌感。主角被强行锁定在打铁台/画板前，进入防御力为零的痴神状态，强迫周围的人（哪怕是敌人）都产生一种不忍心打断的神圣寒意。",
      logicEn: "【Narrative Affordance】: Typical 'flesh-wear loading-bar'. Honor doesn't come from the art's beauty, but that each hammer strike/piano key shows irreversible physical collapse. Forcibly locking protagonist at anvil/canvas in zero-defense trance, forcing even enemies into a sacred chill withholding attacks.",
      patch: {
        mechanics: "表层锚点 + [零防御绝对专注 = 强迫剥除战斗判定; 进度条耗血机制 = 完成度与HP成反比流失; 终极作品威压 = 问世瞬间强行停止战场时间]",
        mechanicsEn: "Surface_Anchor + [Zero-Defense_Absolute_Focus = Foregoes_combat_checks; Loading-bar_HP_Drain = Completion_is_inversely_tied_to_HP_loss; Ultimate_Opus_Awe = Halts_battlefield_time_instantly_upon_birth]",
        aesthetic: "聚焦：七窍开始缓缓渗出黑血却狂热大笑的脸庞、剑胚上呲啦作响瞬间将鲜血蒸发成红雾的极致高温、最后一下重击锤子轰然断裂的物理绝响。",
        aestheticEn: "Focus: Manic laughing face leaking black blood from eyes/ears, extreme heat of sword-blank vaporizing blood into red mist, physical echo of hammer breaking on the final catastrophic strike.",
        runtime: "IF (叛军已经杀入神殿，火把照亮了那个被镣铐锁在织机前已经形同骷髅的布道者) THEN (提供机制：他用满是血瘤的十指咔哒一声推上最后一道走线，一幅足以摧毁全军信仰底基的恢弘刺绣轰然从高墙滚落，整排叛军像触电般瞬间扔掉长矛跪倒在刺绣前的血泊中)。",
        runtimeEn: "IF (Rebels_breach_temple_torches_lighting_the_skeleton-like_preacher_shackled_at_loom) THEN (Provide_Mechanic: He_clicks_the_last_thread_with_blood-tumored_fingers_a_grand_embroidery_crashing_down_destroying_rebel_doctrines_entire_lines_of_rebels_drop_spears_like_electric_shock_kneeling_in_blood_puddles)."
      }
    },
    {
      id: "the_ignominious_medal_of_blood",
      name: "踩着同伴尸骨颁发的耻辱勋章", nameEn: "The Ignominious Medal of Blood",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "由绝对统治系统高调赐予的最高荣誉实体（如十字骑士金章、赛博财阀白金任命书）。这曾是主角队伍的毕生追求，却因为同伴的全部死绝和上层的虚伪背叛而变得荒唐。",
      defEn: "Supreme honor entity highly granted by the absolute system (Knight's Cruz, Cyber Megacorp Platinum CEO writ). Once the team's life goal, now absurd due to peers' total death and top's hypocritical betrayal.",
      core: "【表面诱惑】：世俗体制画下的最完美大饼，能让底层的齿轮在整个生命周期里为了它燃烧自己。",
      coreEn: "【Surface Temptation】: Perfect illusion painted by worldly machine, making underclass cogs burn themselves entire lifecycles for it.",
      logic: "【叙事抓手】：“极度刺眼的物理讽刺性”。这块金光闪闪的东西，在叙事高潮处被强行挂在主角满是泥污和伤痕的胸口。主角被禁止在受勋仪式上发作狂怒，只能在盛大的闪光灯下承受这种“生不如死”的社会认同剥夺战，物理上被强行禁锢在领奖台的聚光灯下吃这口屎。",
      logicEn: "【Narrative Affordance】: 'Extremely glaring physical irony'. This shiny gold is forcibly pinned on protagonist's mud/wound-covered chest at climax. Banned from rage at the ceremony, trapped under grand flashes enduring this 'fate worse than death' validation-stripping war. Physically imprisoned in podium spotlight eating this shit.",
      patch: {
        mechanics: "表层锚点 + [典礼定身符 = 被强行按在这接受拍照而绝不能拔枪; 荣誉反讽反伤 = 掌声越响主角精神掉血越快; 物理解构 = 最终一定将这硬币当场吞下或刺碎入肉]",
        mechanicsEn: "Surface_Anchor + [Ceremony_Stasis = Forcibly_held_for_photos_definitely_cannot_draw_guns; Irony_Reflect-Dmg = Louder_applause_faster_mental_bleed; Physical_Deconstruct = Rejects_by_swallowing_it_or_pinning_deep_into_own_flesh_finally]",
        aesthetic: "聚焦：在红毯上拖出的血水鞋印被铺天盖地的香槟盖掩盖、闪光灯下刺眼恶臭的金质反射光、主角麻木的面部肌肉下强行压制的咬肌痉挛。",
        aestheticEn: "Focus: Bloody footprints on red carpet buried by champagne caps, blinding foul golden glint under flashes, manic jaw-muscle spasms suppressed under numb face.",
        runtime: "IF (那个幕后黑手总督慈祥地将纯金羽翼勋章用力刺入主角胸口并张开怀抱假装拥抱时) THEN (提供机制：主角在千万镜头的特写下，伸手紧紧反拥住总督，暗中将其耳垂彻底咬扯下来吞入腹中，随后在满嘴是血的狂野大笑中举手向镜头敬最高军礼)。",
        runtimeEn: "IF (The_mastermind_governor_kindly_pins_gold-wing_medal_hard_into_protagonist's_chest_opening_arms_for_fake_hug) THEN (Provide_Mechanic: Under_millions_of_cameras_protagonist_hugs_back_tight_secretly_biting_and_swallowing_governor's_entire_earlobe_then_with_bloody_mouth_manically_laughs_saluting_the_lenses)."
      }
    },
    {
      id: "the_public_execution_stage",
      name: "沦为翻盘狂言的绞刑台直播", nameEn: "The Public Execution Stage",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "一个在物理上强行束缚住主角并展示给最高权力与所有大众的死亡平台（如断头台、全球连线行刑椅、绑裹火刑的十字架）。",
      defEn: "Death platform physically restraining protagonist, displayed to supreme power and all masses (Guillotine, global execution chair, fiery cross).",
      core: "【表面诱惑】：权势阶层用于彻底灭杀异端并在社会学上鞭尸的最高舞台，剥夺反抗者最后的一丝社会尊严。",
      coreEn: "【Surface Temptation】: Elite's highest stage to eradicate heretics and sociology-whip corpses, stripping the last ounce of rebel social dignity.",
      logic: "【叙事抓手】：“绝对死境下的终极嘴遁法强增幅”。由于四肢被物理锁死，主角唯一的武器就是那张嘴。反派必须在拉下拉杆前进行长篇大论的审判仪式。主角就在这“铡刀掉落前的两分钟”，用几句带有毒性反叛的代码/宣扬，反向剥夺高台下所有看客的尊严和智商，将杀鸡儆猴反转为精神核爆。",
      logicEn: "【Narrative Affordance】: 'Ultimate speech-buff in absolute death'. Limbs physically locked, sole weapon is the mouth. Villains must perform long rituals before pulling levers. Protagonist uses these '2 mins before blade drops' to spit toxic rebel codes/ideals, inversely stripping dignity/IQ of all onlookers, flipping an execution into a mental nuke.",
      patch: {
        mechanics: "表层锚点 + [断绝物理逃生机制 = 强制上脚镣/断头锁; 言语穿透附魔 = 临死倒数的台词自带破防暴击; 民心反转条 = 台词越狂下方的沉默越深]",
        mechanicsEn: "Surface_Anchor + [Sever_Physical_Escape = Forced_neck-shackles/guillotines; Speech_Pierce_Enchant = Death-countdown_lines_get_auto_defense-break_crits; Mob_Reverse_Bar = Crazier_words_deeper_crowd_silence]",
        aesthetic: "聚焦：脖颈侧面紧贴冰冷刀锋压出的一道细细血痕、行刑官在台词冲击下由于暴怒而疯狂发抖的拉杆大手、台下几万人同时倒吸冷气鸦雀无声的死寂。",
        aestheticEn: "Focus: Thin blood-line pressed closely against cold blade on neck, executioner's lever-hand shaking madly from word-impact rage, absolute dead-silence of tens of thousands gasping.",
        runtime: "IF (典狱长下令捂住主角的嘴并立即降下三吨重的铡刀) THEN (提供机制：主角竟然硬生生将自己的下颔骨在套索中震脱臼来挣脱破布，用含混不清却震耳欲聋的残音喷出血沫笑着宣布了帝国密码库的后门坐标，在刀片切断声带的瞬间引发了全网暴乱警报)。",
        runtimeEn: "IF (Warden_orders_gagging_protagonist_dropping_3-ton_blade_immediately) THEN (Provide_Mechanic: Protagonist_forcibly_dislocates_own_jaw_in_noose_spitting_gag_roaring_empire-cyber-backdoor_coords_in_deafening_bloody_mumbles_triggering_global_riot_alarms_just_as_blade_severs_vocal_cords)."
      }
    },
    {
      id: "the_sub-standard_shackle_breaker",
      name: "斩断命运项圈的生锈劣刃", nameEn: "The Sub-Standard Shackle Breaker",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "一把布满铁锈的破烂柴刀、一根磨秃的廉价铁丝、甚至是一块不规则的尖锐石头。在最高端、最有威权感的物理武装场域里显得极度扎眼。",
      defEn: "Rusty chopper, cheap balded wire, or irregular sharp stone. Looks extremely jarring in high-end, authoritarian physical armed fields.",
      core: "【表面诱惑】：它是主角出身底层、奴隶营或者极度匮乏时代的唯一实体残存联结。在强力科技面前本该一折即碎。",
      coreEn: "【Surface Temptation】: Protagonist's sole tangible link to bottom-tier origins, slave camps, or destitute eras. Should break instantly against high tech.",
      logic: "【叙事抓手】：“高阶装甲与低端锐器的荒诞对撞反直觉”。反派浑身上下覆盖着叹息之墙般的昂贵力场盔甲。主角为了尊严放弃所有缴获的高能武器，强行手持这把残次品去凿山。这种严重不对等的“刮痧”物理碰撞，将仇恨之火具象化为一种原始人敲坦克的变态神经美学。",
      logicEn: "【Narrative Affordance】: 'Absurd anti-intuitive crash of high armor vs low blunt-sharp'. Villains covered in expensive wall-of-sighs force-fields. Protagonist dumps captured high-energy weapons, forcibly hammering mountains with this junk for honor. This grossly uneven 'scratching' physical collision visualizes revenge-fire into psycho primitive-caveman-bashing-tank aesthetics.",
      patch: {
        mechanics: "表层锚点 + [自毁式武器 = 每坎一刀自己手骨反震碎落; 放弃高级掉落武装 = 强行切换至耻辱初盘配置; 破防的概率奇迹 = 就在于它绝对不可能却切开了]",
        mechanicsEn: "Surface_Anchor + [Self-Destruct_Weapon = Every_slash_shatters_own_wrist-bones_from_recoil; Abandon_High-Tier_Drops = Forcibly_switching_to_humiliating_starter_gear; Defense-Break_Miracle = Its_absolute_impossibility_makes_the_cut_divine]",
        aesthetic: "聚焦：神明般反派不可摧毁的陶瓷白甲上留下的一道焦黑锈迹刮痕、握着石头一下一下猛砸高阶机械骨骼震出的浓稠淤血、周围精锐部队因为太过荒谬而彻底傻眼的站姿。",
        aestheticEn: "Focus: Charred rusty scratch left on godlike villain's indestructible ceramic white armor, thick bruised blood splashed from bashing high-tier mech-bones with a rock, elite troops frozen stupid by the utter absurdity.",
        runtime: "IF (手持最强等离子巨剑的领主冷笑着看主角拿出了十五年前的破损木剑) THEN (提供机制：主角在被斩断一条手臂的瞬间，完全不顾防守地将木剑如同长钉一般猛戳进等离子发生器的排雷孔极小缝隙中，木炭在三万度高温中引发的瞬间卡死直接引爆了整个巨神兵力场)。",
        runtimeEn: "IF (Lord_holding_max_plasma_greatsword_sneers_as_protagonist_pulls_out_shattered_15yo_wooden_sword) THEN (Provide_Mechanic: Losing_an_arm_protagonist_ignores_defense_ramming_wooden_sword_like_a_nail_into_the_microslit_of_plasma-vent_wood_charcoal_jamming_30000_temp_instantly_detonating_the_entire_titan_forcefield)."
      }
    },
    {
      id: "the_erased_nameless_obelisk",
      name: "被强权物理抹除的无名死碑", nameEn: "The Erased Nameless Obelisk",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "在社会主视线内被执行过强行推平、抹掉名字与履历（如用酸液浇坏的英雄石像、被剪掉脸的历史相片、从档案库被抽走焚毁的卷宗）。",
      defEn: "Forcibly bulldozed, debriefed, deleted within mainstream sight (acid-melted hero statue, face-cut history photo, burned dossier).",
      core: "【表面诱惑】：极权统治阶层清洗物理记忆、掩盖其篡位或背叛事实的终极保密锁，维持“永远光辉正确”的谎言。",
      coreEn: "【Surface Temptation】: Totalitarian elite's ultimate lock erasing phys memory, covering coups/betrayals, maintaining 'forever glorious' lies.",
      logic: "【叙事抓手】：残缺的物理虚空变成了最强的“引力黑洞”。越是被抹得干净（比如脸被整个挖去），那个空洞在视觉上越是触目惊心。主角的行动并非建造新的证明，而是举着这块“什么都没有”的底片走入大十字广场，用这种物理剥夺的留白反向强压暴行。",
      logicEn: "【Narrative Affordance】: The broken phys-void becomes the strongest 'gravitational black hole'. The cleaner it's erased (faces carved out), the more visually striking the hole. Protagonist's action isn't building new proofs, but lifting this 'empty' negative into the grand plaza, using this phys-deprived blank space to counter-crush tyranny.",
      patch: {
        mechanics: "表层锚点 + [高强度留白提示 = 伤疤比完整更痛; 无法证明的悖论 = 强迫利用施暴者的抹除动作来反证施暴; 孤岛指控 = 所有知情人不敢承认]",
        mechanicsEn: "Surface_Anchor + [High-Intensity_Blank = Scars_hurt_more_than_wholes; Unprovable_Paradox = Forcing_use_of_eraser's_acts_to_prove_eraser_exists; Island_Accusation = All_insiders_fear_acknowledging]",
        aesthetic: "聚焦：在辉煌盛典的灯阵中，那一尊由于被强酸烧灼得发直失去五官的黑色焦炭雕塑、军官试图用白布遮盖残缺却由于刮风怎么也盖不住的焦头烂额。",
        aestheticEn: "Focus: Amidst grand festival lights, a black charred statue staring faceless thanks to steep acid burns, officer scrambling to drape white cloth over the holes but wind blowing it off madly.",
        runtime: "IF (主角带着整个小队唯一幸存的无字破残军牌站到了战神表彰台之前) THEN (提供机制：他一言不发地将残破的碎片狠狠砸在前线总司令的脸上，碎裂声在静音的麦克风前被放大了上百倍，彻底引爆了那些早已对谎言忍无可忍的低阶士兵阵列开始集体拉开枪栓退弹入膛)。",
        runtimeEn: "IF (Protagonist_takes_team's_sole_surviving_wordless_shattered_dogtag_to_War-God_podium) THEN (Provide_Mechanic: He_wordlessly_smashes_fragments_hard_into_Commander-in-Chief's_face_shatter_echoing_x100_in_silent_mic_detonating_all_low-tier_soldiers_sick_of_lies_simultaneously_chambering_rounds)."
      }
    },
    {
      id: "the_stolen_masterpiece_by_tycoon",
      name: "被巨鳄窃取署名的创世心血", nameEn: "The Stolen Masterpiece by Tycoon",
      group: "6. 尊看出与社会认同", groupEn: "6. Honor & Validation",
      def: "由主角耗尽半条命研发/创造，却被绝对权贵原封不动窃取并打上自己璀璨Logo的物理心血（如被改掉署名的传世名画、被夺走的灭神机甲初号机）。",
      defEn: "Drained protagonist's half-life to create, stolen verbatim by absolute elites slapped with their shiny logos (re-signed masterpiece, hijacked God-killer mech-unit 01).",
      core: "【表面诱惑】：用他人的骨血去筑造属于掠夺者自己的不世功勋。权力在这一刻展现了最肮脏的合法占有转移术。",
      coreEn: "【Surface Temptation】: Using others' bone and blood to forge plunderer's own peerless merit. Power displaying the dirtiest legal transfer magic.",
      logic: "【叙事抓手】：“面对最熟悉己出的逆向物理战斗”。主角不仅要面对被别人掌控的自己的孩子，还受困于“根本舍不得下死手摧毁它”。这就造成了极端变态的战术收敛——看着仇人开着自己的发明大杀四方，自己却只能像老鼠一样绕开核心破坏点去拆底层电缆，用憋屈至极的操作去寻回“署名”。",
      logicEn: "【Narrative Affordance】: 'Reverse physical combat against one's own familiar child'. Protagonist not only faces their child controlled by others, but is trapped by 'can't bear to destroy it'. Molds extremely twisted tactical restraint—watching foes slaughter in self-made creations, while protagonist sneaks like a rat avoiding core hardpoints to dismantle low cables, seeking 'signature' thru deeply suffocating ops.",
      patch: {
        mechanics: "表层锚点 + [不可破坏判定 = 自己造的自己最疼舍不得用炮轰; 后门权限反制 = 利用只有造物主知道的致命狭隘物理死穴; 降维认祖 = 用一个微小动作唤醒机械本能/真迹暗号]",
        mechanicsEn: "Surface_Anchor + [Unbreakable_Check = Maker_hurts_most_refusing_artillery; Backdoor_Counter = Reversing_via_tiny_phys-deadzone_only_Maker_knows; Dimensional_Ancestry = Waking_mech_instinct/true-signature_with_micro-act]",
        aesthetic: "聚焦：原本简陋纯粹的机甲壳上被刷满恶俗的霓虹赞助商Logo的视觉强奸、主角摸在冰冷外壳上时被系统判定为“无权限贱民”发出的红色电击排斥网。",
        aestheticEn: "Focus: Visual-rape of vulgar neon sponsor logos painted over once-pure simple mech shell, protagonist shocked red by 'unauthorized peasant' stun grid when touching cold hull.",
        runtime: "IF (富豪正坐在机甲主驾室疯狂炫耀光束炮，对着下方手无寸铁的主角开火时) THEN (提供机制：主角顶着被融化一半肩膀的高温，用手杖精准敲击了原本是为了纪念夭折妹妹而在脚踝处留下的一个非标准螺母，庞大机甲瞬间彻底因后门短路断电瘫痪，并物理弹出了富豪的驾驶球)。",
        runtimeEn: "IF (Tycoon_sitting_in_mech_cockpit_flaunting_beam-cannons_firing_at_unarmed_protagonist_below) THEN (Provide_Mechanic: Tanking_heat_melting_half_shoulder_protagonist_precisely_taps_a_non-standard_nut_on_ankle_left_as_memorial_to_dead_sister_massive_mech_instantly_short-circuits_shuts_down_backdoor_physically_ejecting_tycoon's_pod)."
      }
    },
    {
      id: "the_swan_song_on_the_ruins",
      name: "无人喝彩的废墟终极绝唱", nameEn: "The Swan Song on the Ruins",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "在所有通讯频道被切断、观众散尽或逃跑的毁灭地带，被放弃的边缘弃子强行启动的最高规格对抗仪式（如偶像在塌掉的舞台废土上独自起舞、被革职的老将独自开炮赴死）。",
      defEn: "In ruined zones with all comms cut and audiences fled, abandoned fringe bastards forcibly boot the highest-tier duel ritual (Idol dancing alone on rubble, fired general firing alone into death).",
      core: "【表面诱惑】：本应伴随百万喝彩和流量登顶的高光操作，此时被环境全部清空。它的价值从社会面收缩回最绝对的自我本我。",
      coreEn: "【Surface Temptation】: Highlight op that should accompany million-cheers/max-views is completely emptied by env. Its value shrinks from social level back to absolute Id.",
      logic: "【叙事抓手】：“强烈的反视觉场域搭建”。越是华丽的物理大招、越是精密的吟唱施法，在这个漫天黄沙没有活人的废品站里就越显得具有毁灭般的美感。系统强制屏蔽所有外援机制，这是一场没有任何奖励掉落、纯碎燃烧内源自尊引擎的自闭物理输出战。",
      logicEn: "【Narrative Affordance】: 'Fiercely inverted visual field building'. The more gorgeous the ultimate arts, the more precise the chants, the more destructively beautiful it looks in a lifeless junk-yard of yellow sand. System force-bans all rescue. It's a closed physical-output fight burning pure core-ego engines with zero loot drops.",
      patch: {
        mechanics: "表层锚点 + [绝对孤岛模型 = 无战友无通讯无救援大满贯; 自我献祭高潮 = 没有观众也要把最伤身的禁忌大招全交出来; 废旧环境反差 = 华丽光效与破铜烂铁的碰撞]",
        mechanicsEn: "Surface_Anchor + [Absolute_Island_Model = Zero_ally_comms_rescue_slam; Self-Sacrifice_Climax = Blow_all_debilitating_forbidden_ults_without_audience; Ruin_Contrast = Grand_FX_crashing_against_scrap_copper_iron]",
        aesthetic: "聚焦：在断电暴雨的废弃仓库中独自旋转闪避的高定芭蕾舞鞋上的血印、老旧坦克被主角一个人装弹测距开火而导致炮闩炸裂的孤绝轰鸣、永远不会被记入历史录像的斩首一击。",
        aestheticEn: "Focus: Blood-marks on haute-couture ballet shoes spinning dodging alone in blackout rain-swept warehouse, isolated deafening roar of vintage tank fired/loaded solo causing breech blowback, decapitation strike never recorded in history.",
        runtime: "IF (敌方母舰已经压顶并认为这片废墟再无抵抗力量而全部解除护盾准备降落) THEN (提供机制：废墟底部那台被所有人嘲笑早该进博物馆的报废魔导炮，被失去下半身的老炮手用牙齿拉下点火闸，射出了这个文明时代史上最刺眼的绝对零度逆光刺爆)。",
        runtimeEn: "IF (Enemy_mothership_壓顶_dropping_shields_for_landing_assuming_zero_resis_left) THEN (Provide_Mechanic: Abandoned_mana-cannon_mocked_for_museum_at_ruin's_base_is_ignited_when_legless_old_gunner_tooth-pulls_lever_firing_the_civilization's_most_blinding_absolute-zero_counter-flash)."
      }
    },
    {
      id: "the_unwanted_bloodline_proof",
      name: "撕开正统高墙的逆向验证物", nameEn: "The Unwanted Bloodline Proof",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "携带在被世界唾弃的最底端贱民身上、具有不可撼动物理说服力的极高贵血统指征（无法拔下的半精灵隐忍耳环、遇到圣物发光的皇族胎记、完全吻合的旧财阀DNA比对盘）。",
      defEn: "Carried by lowest despised peasants but holding unshakable phys-convincing ultra-noble blood markers (unremovable half-elf ear-stud, royal birthmark glowing near relics, 100% matched old-tycoon DNA disc).",
      core: "【表面诱惑】：撕毁森严阶级壁垒的物理炸药包。能让站在高塔顶端制定规则的人，自己跌落进“我才是那个僭越者”的合法性恐慌。",
      coreEn: "【Surface Temptation】: Phys-explosive shredding rigid class walls. Throws rule-makers atop the tower into the legitimacy panic of 'I'm the real usurper'.",
      logic: "【叙事抓手】：“见光死的逆向追杀战”。它并不意味着主角能直接当国王，而是直接将其变为掌权者的头号物理消灭目标。因为“太过于正确”，这个物理特征成了主角的致命肿瘤。他不能露天洗澡、不能通过哪怕最基础的安检门，被强迫在这个繁华都市里过着下水道野鼠般隐藏生物特性的生活。",
      logicEn: "【Narrative Affordance】: 'Reverse hunt upon exposure'. Doesn't mean protagonist sits the throne instantly; instead labels them current ruler's #1 phys-purge target. Because it is 'too correct', this phys-trait becomes a fatal tumor. Cannot bathe outdoors, cannot pass basic security gates—forced into sewer-rat stealth life hiding bio-metrics in a grand city.",
      patch: {
        mechanics: "表层锚点 + [不可分割标识 = 除非切下肉来否则无法隐蔽的体征; 验证门槛过敏 = 最怕碰到精密检测仪器直接爆红; 本能觉醒 = 受重伤时自发显露高端血脉回血引来惊悚反转]",
        mechanicsEn: "Surface_Anchor + [Inseparable_Marker = Unhidable_without_slicing_flesh; Verification_Gate_Allergy = Dread_precision_scanners_auto-red_bursting; Instinct_Awakening = Heavy_wound_auto-triggers_high-blood_regen_causing_horror_flip]",
        aesthetic: "聚焦：用滚烫的烟头死死烫平自己后颈那个代表帝国正统的高贵金龙纹身的颤抖忍痛、大主教在切开主角袖口看到那个神秘图腾瞬间如同看魔鬼一般疯退三步的视觉崩塌。",
        aestheticEn: "Focus: Trembling pain ironing out the noble imperial golden dragon tattoo on own nape with boiling cigarette, archbishop cutting open sleeve seeing mystic totem backing away three steps madly like seeing Satan.",
        runtime: "IF (被诬陷为最低贱魔种的主角被死死绑在净化圣光柱上即将灰飞烟灭) THEN (提供机制：那足以熔断万物的圣光不仅没有灼伤主角，反而在接触到其锁骨下方的烙印后瞬间调转频率，化作纯金色的加冕王环环绕并治愈其全身，周围十几名红衣刽子手直接当场物理致盲)。",
        runtimeEn: "IF (Framed_as_lowest_fiend_protagonist_tied_to_Purge_Holy-Pillar_about_to_ash) THEN (Provide_Mechanic: The_all-melting_light_not_only_harms_not_but_contacting_the_collarbone_brand_instantly_inverts_freq_morphing_into_solid-gold_coronation_halos_healing_them_instantly_phys-blinding_a_dozen_red-clad_executioners)."
      }
    },
    {
      id: "the_heretics_validated_prophecy",
      name: "火刑柱前被验真的疯徒真理", nameEn: "The Heretic's Validated Prophecy",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "由被整个主流社会定义为疯子、叛国者或黑客编撰，且在长期被嘲笑碾压后，终于通过灾难或特定星象呈现出绝对精准物理对照的手稿/代码（末世倒数公式、神罚到来图谱）。",
      defEn: "Authored by someone defined by mainstream as madman/traitor/hacker, mocked for long, but finally validated showing absolute exact phys-correspondence via disaster/astronomy (Doomsday combo-math, divine wrath map).",
      core: "【表面诱惑】：知识与先知的最后狂欢。在被常识重力碾压一辈子后，通过一场无可倒转的世界级浩劫，来向所有傲慢的权贵展示出智商碾压。",
      coreEn: "【Surface Temptation】: Last revelry of knowledge and prophet. After lifelong crushing by common-sense gravity, using irreversible world-tier havoc to show IQ domination to all arrogant nobles.",
      logic: "【叙事抓手】：“滞后送达的物理清算感”。在真理被验证的前几秒，主角极大概率处于被痛殴、绑在火刑架或是关禁闭的最低限度物理自由中。这是一场以“绝不求饶直到陨石砸向傲慢法庭”为核心机制的硬骨头静坐抗争。他的唯一动作就是“张开裂开的嘴冷笑倒数”。",
      logicEn: "【Narrative Affordance】: 'Lagging physical liquidation feeling'. Secs before truth validation, protagonist highly likely undergoing severe beating, tied to pyre, or max solitary lockdown limits. A hardcore sit-in resistance with core run-logic: 'Never beg until meteor smashes the arrogant court'. Sole action is 'smirking through cracked lips counting down'.",
      patch: {
        mechanics: "表层锚点 + [超压迫环境束缚 = 被反绑或封嘴无法挣扎; 外部天灾大招读条 = 代替主角打出全屏秒杀; 智将狂笑 = 利用灾难验证直接撕碎看守的心防]",
        mechanicsEn: "Surface_Anchor + [Over-Pressure_Restraint = Tied-back_or_gagged_cannot_struggle; External_Catastrophe_Ult-Loading = Deals_full-screen_wipe_for_Protagonist; Tactician_Mad-Laugh = Using_disaster_verification_to_shred_guards'_mental_defense]",
        aesthetic: "聚焦：柴火即将烧穿靴底前主角无所畏惧凝死深空的疯狂清澈双眼、大审判官正宣读有罪判决时突然感觉脚下无边地震开始开裂时的面部肥肉狂颤。",
        aestheticEn: "Focus: Fearless mad distinct clear eyes locking onto deep sky just as firewood burns thru boot-soles, grand inquisitor's face-fat violently jiggling reading guilty verdict as massive earthquake rips the floor open.",
        runtime: "IF (电门即将按下，总统在玻璃房外嘲讽这只是个博眼球的小丑) THEN (提供机制：防弹玻璃外高耸入云的金融天际线，完美卡着主角最后吐血喊出的“三、二、一”倒数时间节点，从中间被轨道激光笔直腰斩轰塌，整个处刑房的傲慢气场被超新星般的闪光瞬间气化)。",
        runtimeEn: "IF (Electric-chair_button_pressing_president_mocking_behind_glass_calling_him_clown) THEN (Provide_Mechanic: Towering_financial_skyline_outside_bulletproof-glass_perfectly_syncs_with_protagonist's_bloody_3-2-1_countdown_being_cut_in_half_straight_by_orbital_laser_arrogant_aura_of_entire_execution-room_vaporized_by_supernova-flash)."
      }
    },
    {
      id: "the_traitors_clean_uniform_death",
      name: "强套旧制服赴死的老兵叛臣", nameEn: "The Traitor's Clean Uniform Death",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "一件曾经代表无上光荣旧体制、却早已被判定为叛国秽物的物理制服（老旧的褪色军大衣、被开除的警徽、磨损的圣殿骑士内衬），被主角郑重其事地披上。",
      defEn: "Physical uniform once representing supreme old-glory regimes but long deemed treasonous filth (faded old greatcoat, fired badge, worn Templar lining), solemnly donned by protagonist.",
      core: "【表面诱惑】：这绝非伪装渗透，而是“打明牌送死”。找回最初那份不可玷污的誓言，即使它意味着跟现在的世界全面开战。",
      coreEn: "【Surface Temptation】: This is no stealth pseudo-ops. It's 'open-hand kamikaze'. Recovering the initial unsoiled oath, even if it means full war with current world.",
      logic: "【叙事抓手】：“颜色带来的全屏仇恨引火”。换上这身衣服，不仅切断了所有的退路撤退可能，还在物理视觉上将自己从“普通匪徒”变异成了“最高优先级绞杀目标”。防空警报会为他鸣响，最顶级的装甲部队会因为这件衣服的颜色受辱而发狂般集结冲锋；而主角，走得极其缓慢笔挺。",
      logicEn: "【Narrative Affordance】: 'Color-based full-screen aggro-magnet'. Donning this cuts all retreat ops, mutating visually from 'common thug' to 'Top-Priority Lynch Target'. Air-raids sound, max armor units furiously rally-charge feeling insulted by the fabric's color; while protagonist walks severely slow and straight.",
      patch: {
        mechanics: "表层锚点 + [超嘲讽颜色装甲 = 脱离潜行状态自动锁敌; 步伐锁定 = 为了尊严拒绝翻滚与躲闪的站桩移动靶; 敌方全弹幕输出 = 尊重对手而降下的最密集火力雨]",
        mechanicsEn: "Surface_Anchor + [Super-Taunt_Color_Armor = Drops_stealth_auto-aggros_all; Step_Lock = Forbids_dodge-rolling_for_dignity_standing_move-target; Enemy_Full-Barrage = Densest_fire-rain_dropped_out_of_respect]",
        aesthetic: "聚焦：布满弹孔却被熨烫得几乎拥有割裂感锋利折痕的旧军装、扣到最上面最后一颗勒紧咽喉的金扣、走过漫天火控镭射线却如阅兵般无视一切的军靴踏地声。",
        aestheticEn: "Focus: Bullet-holed old uniform ironed with near-slashing sharp creases, top golden button choked tight to throat, combat boots stepping in parade-rhythm ignoring sky-full of red laser-sights.",
        runtime: "IF (已经被剥夺军籍三十年的瞎眼老帅，在城破之日拄着手杖穿着旧军礼服走到宫殿大门口) THEN (提供机制：那一排原本准备烧杀抢掠的变异新军，在看到那枚褪色肩章的瞬间，肌肉记忆里的恐怖被瞬间唤醒，前排三个百夫长甚至没敢开枪而是本能地后退了半步立正)。",
        runtimeEn: "IF (Blind_old_marshall_stripped_of_rank_30y_ago_walks_to_palace_doors_in_old_dress-uniform_on_siege_day) THEN (Provide_Mechanic: Row_of_mutant_new-army_ready_to_rape/pillage_frozen_upon_seeing_the_faded_epaulette_terror_awoken_in_muscle_memory_3_front_centurions_step_back_instinctively_standing_at_attention_daring_not_shoot)."
      }
    },
    {
      id: "the_denied_honorable_seppuku",
      name: "被上位者拒签的切腹极意", nameEn: "The Denied Honorable Seppuku",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "准备极其充分的物理自尽仪式、用以自证清白或承担灭门责任的名刀死斗（破腹、断头台祈祷、引爆微型光脑），但在刺入自身那刻被强行剥脱武器停下。",
      defEn: "Exceedingly well-preped phys-suicide ritual, famous-blade death-duel for innocence/family burden (seppuku, guillotine prayer, detonating micro-brain), but weapons stripped stopping it mid-stab.",
      core: "【表面诱惑】：用肉体的最惨烈毁灭，去填补社会信用的黑洞，将名誉永远定格在不受玷污的那一秒死亡中。",
      coreEn: "【Surface Temptation】: Filling the black hole of social credit with max gruesome physical destruction, freezing honor in untainted death-second forever.",
      logic: "【叙事抓手】：“不被允许死亡的剥夺地狱”。它瓦解了所谓武士道的高洁，反派强悍的物理干预告诉主角：你的血太脏没资格染红这大殿。主角被踢飞刀刃重重踩在脸上，被迫在“连求死特权都没有”的泥泞里继续活着咽下最耻辱的一口气。生存本身变成了一场不可抗逆的强暴。",
      logicEn: "【Narrative Affordance】: 'Deprivation hell of denied death'. Crumbles samurai high-purity; villain's fierce phys-intervention tells protagonist: 'Your blood is too dirty to paint this hall'. Protagonist kicked, blade flown, boots crushing face, forced to live in mud swallowing ultimate humiliation with 'not even the privilege to die'. Survival itself becomes un-resistable rape.",
      patch: {
        mechanics: "表层锚点 + [仪式强制破坏 = 用极端的侮辱动作踢断神圣介错; 绝死锁定解除 = 被强迫保留1点血硬吃后续伤害; 尊严底线击穿 = 被迫赤手空拳在地上爬行拾回断刃]",
        mechanicsEn: "Surface_Anchor + [Ritual_Force-Break = Extreme_insult_kick_snaps_sacred_beheading; Death-Lock_Removed = Forces_holding_1_HP_tanking_aftermath; Honor-Floor_Punctured = Forced_to_crawl_barehanded_picking_broken_blade]",
        aesthetic: "聚焦：雪亮太刀在距离腹部半寸处崩碎飞溅的残损铁片、施虐者极其随意将名贵白无垢礼服踩出黑色烂泥大胶靴底、主角被迫趴在地上如同狗一般喘息无法结束生命的空洞绝望。",
        aestheticEn: "Focus: Bright katana shattering half-inch from belly spraying iron shards, abuser casually stamping grand white-pure death-robe with muddy black rubber boots, protagonist forced panting dog-like on floor with hollow despair unable to end life.",
        runtime: "IF (主角跪在祖宗牌位前双手举起短刃即将刺入心脏完成责任) THEN (提供机制：高阶裁决者甚至不拔刀，直接隔空一发低压电击枪让主角像癫痫病患一般口吐白沫抽搐倒地，伴随着一句“别弄脏了我的地板”，将其像拖死狗一样揪着头发扔出大门摔在最下贱的泥坑里)。",
        runtimeEn: "IF (Protagonist_kneeling_before_ancestor_plates_raising_tanto_about_to_heart-stab_completing_duty) THEN (Provide_Mechanic: High-Adjudicator_doesn't_even_draw_sword_just_shoots_low-volt_taser_dropping_protagonist_twitching_foaming_like_epileptic_tossing_them_by_hair_like_dead_dog_into_the_lowest_mud-pit_saying_Don't_dirty_my_floor)."
      }
    },
    {
      id: "the_10_minute_recess_reverse_trial",
      name: "强行反转的高维审判辩护", nameEn: "The 10-Minute Recess Reverse-Trial",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "在绝对隔绝的庭审空间（星际法庭、元老院圆形阶梯厅），不依靠任何外部爆破救援，纯利用系统自身法理死角和物证逻辑矛盾形成的言语强压迫域。",
      defEn: "In absolutely isolated trial space (intergalactic court, senate circular tier), without external blast rescues, pure speech pressure-zone utilizing system's own legal blindspots and material-evidence contradictions.",
      core: "【表面诱惑】：跨过物理机甲，用纯粹心智降维打击。在敌人引以为傲的最核心规则高塔里，用他们自己铸造的剑砍下其高傲的头颅。",
      coreEn: "【Surface Temptation】: Bypassing mech-physics for pure mental dimensional-strike. Inside the enemy's proudest core rule-tower, using their own forged sword to decapitate their arrogant heads.",
      logic: "【叙事抓手】：“不流血的千钧凌迟战”。主角不能动一拳一脚（动作会立刻引来护卫电击绞杀），他的全部物理运动被收束到“走在证物台前敲击那个带有划痕的弹壳”。通过语速、步点、法槌声这种极其微渺的动能，将满堂大儒和手握重兵的主簿逼出满头冷汗甚至引发心脏病痉挛物理倒地。",
      logicEn: "【Narrative Affordance】: 'Bloodless thousand-ton ling-chi'. Protagonist can't punch/kick (instantly causing guard-taser kill). All phys_motion compressed to 'pacing to witness stand tapping the scratched shell-casing'. Using speech-rate, footsteps, gavel sounds—micro kinetic energies—forcing grand scholars and heavy-military clerks into cold sweat or physical heart-spasm collapse.",
      patch: {
        mechanics: "表层锚点 + [物理输出=0的大反伤 = 所有词汇附带不可闪避灵魂震慑; 倒转空间重力 = 法官被辩护者强逼离开高位座椅; 绝对逻辑锁喉 = 不需要枪而切断反派气管]",
        mechanicsEn: "Surface_Anchor + [0_Phys-Output_Grand_Reflect = All_vocab_enchants_undodgeable_soul_shock; Reverse_Space_Gravity = Judge_forced_from_high-seat_by_defender; Absolute_Logic_Choke = Cuts_villain_windpipe_without_guns]",
        aesthetic: "聚焦：在空旷大厅极其清脆的皮鞋逼近脚步声回音、高不可攀的主审判官因无法回应而疯狂抖动擦拭额头的大颗热汗、被甩出的一沓纸张在空中像刀片一样割裂光束。",
        aestheticEn: "Focus: Extremely crisp leather-shoe pacing echoes in empty grand hall, untouchable chief judge quivering madly wiping heavy hot sweat unable to reply, stack of papers thrown slicing light-beams like blades in air.",
        runtime: "IF (庭审将要敲下死刑法槌的前十秒休庭期) THEN (提供机制：主角没有任何反抗起身的动作，仅仅是将桌子对面检察长面前的一杯水推到了一个诡异的位置，说出了一段引述旧帝国三十一号密室法案的低语，只听见高台上的老审查官在一阵极其剧烈的喘息后捂住心脏直接在椅子上翻起白眼陷入休克)。",
        runtimeEn: "IF (Last_10s_recess_before_death-penalty_gavel_drops) THEN (Provide_Mechanic: Protagonist_without_any_resisting_up-moves_simply_pushes_Prosecutor's_water_glass_into_an_eerie_position_whispering_an_old-empire_Room-31_Act_clause_immediately_the_old_judge_on_high-podium_gasps_violently_clutching_chest_rolling_white-eyes_into_shock_on_chair)."
      }
    },
    {
      id: "the_masters_rejection_mantle",
      name: "亲手披在劣徒身上的极恶冠冕", nameEn: "The Master's Rejection Mantle",
      group: "6. 尊严与社会认同", groupEn: "6. Honor & Validation",
      def: "极度沉重且具有诅咒反噬的大宗师法袍、绝命兵符或掌门印信，在最后关头，没有传给完美的长子，而是强行用鲜血烙印扣在了一直被所有人唾弃、只求小富即安的顽徒（主角）头上。",
      defEn: "Ultra-heavy cursing grandmaster-robe, fatal commanding-seal or patriarch-signet. At last breath, not given to perfect first-born, but forcibly blood-branded onto the universally spat-upon stubborn bad-pupil (protagonist) who only wanted cheap peace.",
      core: "【表面诱惑】：天降的最强满级门派/国家遗产，无需打怪直接越级吞下的究极力量和名分底子。",
      coreEn: "【Surface Temptation】: Heaven-dropped max-level faction/state legacy. Ultimate power/title swallowed sans grinding.",
      logic: "【叙事抓手】：“重力感极强的强买强卖加冕”。这完全违背主角原本那套混吃等死的低阶物理习惯（如躲子弹、爬阴沟）。那件沉重法袍或烙印，物理上就像一个重达千钧的引雷针枷锁。他不能再抱头鼠窜，被迫为了保护这个烫手山芋和那突然落下的“狗屁尊严”，强行直挺着脊梁去硬扛最强的名门追杀矩阵。",
      logicEn: "【Narrative Affordance】: 'Heavy-gravity forced-sale coronation'. Contradicts protagonist's low-tier phys-habits (bullet-dodging, gutter-crawling). The heavy robe/brand is physically a thousand-ton lightning-rod shackle. He can no longer scurry; forced to protect this hot potato and the sudden 'bullshit honor', violently straightening his spine to tank the strongest elite kill-matrix.",
      patch: {
        mechanics: "表层锚点 + [抗拒性加冕 = 一边骂娘一边强行被绑在主C位; 动作惯性违和 = 猥琐身法被沉重披风强锁成大开大合; 满级仇恨继承 = 戴上瞬间就被全图最强Boss红眼锁定]",
        mechanicsEn: "Surface_Anchor + [Resistive_Coronation = Cursing_while_forcibly_tied_to_Main-Carry_slot; Action-Inertia_Clash = Scummy_dodge_locked_into_wide-open_swings_by_heavy_cape; Max_Aggro_Inherit = Wearing_instantly_locks_red-eyes_from_full-map_Bosses]",
        aesthetic: "聚焦：老头子吐着血像老虎钳一样死死钉在主角肩膀上的恐怖五指、那件由于吸满几代人鲜血而僵硬如铁盾般的血红色外袍狠狠砸在单薄背影上压出的物理塌陷感。",
        aestheticEn: "Focus: Old-man spitting blood with terrified five-fingers nailed to protagonist's shoulder like vise-grips, the blood-red robe (stiff as iron shield filled with generations of blood) heavily smashing onto thin back causing phys-collapse.",
        runtime: "IF (大门外八千最强圣骑士正准备破门收割，主角原本正在狂刨狗洞准备钻出去跑路) THEN (提供机制：被长矛贯穿咽喉的最后一代狂教廷首领拔出矛尖，带着滚烫黑血以无法挣脱的怪力将主角按在泥地里，用烙铁般的掌心生生把代表罪恶与无上权力的十字星在主角额骨上强行烫穿，一脚将其踢出了正门去迎战那八千人)。",
        runtimeEn: "IF (8000_max_Paladins_breaching_gate_protagonist_madly_digging_dog-hole_to_escape) THEN (Provide_Mechanic: Throat-pierced_last_Mad-Pontiff_pulls_spear_with_unshakable_freak-strength_pinning_protagonist_in_mud_branding_the_guilt-and-supreme-power_Cross-Star_into_forehead_bone_with_iron-hot_palm_kicking_them_out_the_front_door_to_face_the_8000)."
      }
    }
  ]
};
