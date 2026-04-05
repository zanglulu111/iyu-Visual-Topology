import { LibraryCategoryDef } from '../../../types';

export const SUR5_NATURE_UTOPIA: LibraryCategoryDef = {
  id: "sur5_nature_utopia",
  name: "8. 自然与乌托邦 (Nature & Utopia)",
  nameEn: "8. Nature & Utopia",
  desc: "对纯净生命力、未受污染的理想乡与逃离绝境的绝对渴望。在表层叙事中充当对古典田园或终极伊甸园崇拜的核心物理信物，通用各种时空（奇幻、科幻、末日、古代）。",
  descEn: "Absolute desire for pure vitality, unpolluted ideal lands, and escaping despair. Acts as the core physical token of oasis or classical pastoral worship in the surface narrative, applicable across diverse eras.",
  items: [
    {
      id: "the_primordial_seed",
      name: "最后一颗未被异化的源初之种", nameEn: "The Last Uncorrupted Primordial Seed",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "封存着纯净植物生命本源的活体核心（如：神庙琥珀中封存的老灵树种、钛合金胶囊里的无辐射幼苗、深海宫殿里的远古海藻孢子）。",
      defEn: "A living core sealing the pure essence of plant life (e.g., an ancient spirit seed in temple amber, a radiation-free seedling in a mech-capsule, ancient kelp spore in an abyssal palace).",
      core: "【表面诱惑】：复苏大地的终极希望。谁拥有它，谁就能在荒芜中建立第一片自给自足的丰饶绿洲。",
      coreEn: "【Surface Temptation】: Ultimate hope to revive the earth. Whoever owns it can build the first true self-sustaining oasis amidst the barrenness.",
      logic: "【叙事抓手】：它是极其“娇嫩与脆弱”的。它不能被粗暴对待、不能被污染或极温破坏。这就导致持有它的主角在敌人的炮火（或刀剑/魔法轰炸）中必须用自己的血肉之躯去覆盖这个微小的容器，造成“保护物比施救者更脆弱”的逆向悬念。",
      logicEn: "【Narrative Affordance】: Extremely delicate and fragile. It cannot be handled roughly, polluted, or exposed to extreme temps. This forces the protagonist to cover this tiny vessel with their own flesh amidst crossfire or spell barrages, creating an inverted suspense where 'the protected is vastly more fragile than the protector'.",
      patch: {
        mechanics: "表层锚点 + [物理易碎性 = 极高; 环境要求 = 苛刻; 仇恨值 = 两大阵营同时抢夺的香饽饽]",
        mechanicsEn: "Surface_Anchor + [Physical_Fragility = Extreme; Temp/Env_Req = Harsh; Aggro = Bidirectional_faction_scramble]",
        aesthetic: "聚焦：在漫天黑灰与杀戮废墟中，那一点刺目且不合时宜的翠绿色微光；主角用满是血污的双手小心翼翼捧着的容器。",
        aestheticEn: "Focus: Amidst black ash and slaughter, a piercing and out-of-place emerald glow; the protagonist carefully holding the vessel with blood-stained hands.",
        runtime: "IF (在被敌方追杀的绝境下，装有种子的温控/魔力维持胶囊发出枯竭警告) THEN (提供机制：强迫主角切断自己的生命维持系统或割脉放血来给种子插上补给线)。",
        runtimeEn: "IF (Pursued_by_enemies_the_vessel_warns_of_energy/magic_depletion) THEN (Provide_Mechanic: Force_protagonist_to_cut_own_life-support_or_bleed_themselves_to_plug_into_the_seed's_sustainment)."
      }
    },
    {
      id: "the_fragmented_map_to_paradise",
      name: "指向理想乡的残破坐标图", nameEn: "Fragmented Map to Paradise",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "唯一记录了世间仅存那片纯净乐土位置的物理介质（如：沾血的上古羊皮卷、加密的全息星盘、碎裂的盲眼先知石碑）。",
      defEn: "The only physical medium recording the exact coordinates of the remaining pure paradise (e.g., blood-stained ancient parchment, encrypted holo-map, shattered blind prophet's tablet).",
      core: "【表面诱惑】：许诺了一个没有饥饿、没有压迫的最终归宿。是所有绝望者心中的终极朝圣目标。",
      coreEn: "【Surface Temptation】: Promises a final destination free from hunger and oppression. The ultimate pilgrimage goal for the desperate.",
      logic: "【叙事抓手】：作为“引路物”，其残缺性要求主角必须进行位移和碎片收集。但在拼图集齐的瞬间，坐标大白于天下，大反派的侦测网络或黑暗大军也将在此时锁定乐土位置。这使得“寻找乌托邦”的行为本身，成了“毁灭乌托邦”的导火索。",
      logicEn: "【Narrative Affordance】: As a 'guide', its fractural nature requires map-spanning collection. The moment the puzzle completes and coords are exposed, the villain's supreme forces lock onto the paradise. Finding utopia becomes the very fuse that threatens to destroy it.",
      patch: {
        mechanics: "表层锚点 + [碎片收集 = 驱动全图跑位; 坐标解密 = 双刃剑; 暴露风险 = 目的地同时向敌方敞开]",
        mechanicsEn: "Surface_Anchor + [Fragment_Gathering = Drives_map_traversal; De_cryption = Double-edged_sword; Exposure_Risk = Destination_opens_to_enemy]",
        aesthetic: "聚焦：在满是血腥的木桌/铁桌上，旧地图拼合瞬间投射出耀眼而宁静的蓝色幻影或光束指引。",
        aestheticEn: "Focus: On a blood-soaked wooden/iron desk, the old map projects a glaring yet tranquil blue phantom or light column upon completion.",
        runtime: "IF (主角终于在绝境中拼死放入地图的最后一块碎片) THEN (提供机制：地图刚勾勒出绿林山谷的模样，天空就传来了警报：敌军末日武器/黑魔法炮已同步获取该坐标并准备充能)。",
        runtimeEn: "IF (Protagonist_desperately_inserts_final_fragment_into_the_map) THEN (Provide_Mechanic: The_map_sketches_green_valleys_as_sirens/horns_blare_Doom-Weapons_have_synced_coords_and_are_charging)."
      }
    },
    {
      id: "the_genesis_purification_core",
      name: "重塑环境的创世净化核心", nameEn: "Genesis Purification Core",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "庞大古老且必须手动推入地核/灵脉节点才能激活的环境改造装置（如：废土上的巨型晶石炉、奇幻世界的上古涤罪圣杯、赛博下层的气候校准巨物）。",
      defEn: "A massive ambient-terraforming device that must be manually pushed into the core/leyline node to activate (e.g., giant crystal furnace, ancient cleansing grail, mega climate-calibrator).",
      core: "【表面诱惑】：能够在物理层面上瞬间逆转极端的生态环境，降下甘霖，让荒芜重新长出参天巨树。",
      coreEn: "【Surface Temptation】: Physically reverses catastrophic ecology instantly, bringing sweet rain and growing giant trees from the barren wasteland.",
      logic: "【叙事抓手】：载体极其“沉重”，需要队伍如同西西弗斯一般，在炮火或箭雨中将其一寸寸推向激活位点。更残酷的是，它的净化波束会无差别抹除所有非自然物/身染腐化者，这意味着全副武装或受诅咒的主角队伍将在环境重生的瞬间化为尘埃。",
      logicEn: "【Narrative Affordance】: Extremely 'heavy' vessel, requiring the team to push it inch by inch like Sisyphus under fire. Cruelly, its purging wave indiscriminately wipes all unnatural/corrupted objects—meaning the cursed or cyber-augmented saviors will turn to dust the moment the environment is reborn.",
      patch: {
        mechanics: "表层锚点 + [绝对重物 = 强制迟缓护送目标; 激活要求 = 到达场景最深处; 净化代价 = 救世主自我抹杀]",
        mechanicsEn: "Surface_Anchor + [Absolute_Weight = Forced_slow_escort_target; Activation_Req = Reach_deepest_level; Purge_Cost = Savior_self-eradication]",
        aesthetic: "聚焦：数十根冒着火星的锁链（或粗大麻绳）拉拽着庞硕发光的核心，每推进一步地上就留下深陷的血色脚印；温柔的净世绿光与主角身上冒出的死灰形成对比。",
        aestheticEn: "Focus: Dozens of sparking chains dragging the colossal glowing core, deep bloody footprints left with each step; gentle green purification light contrasting with dark ash rising from the protagonist.",
        runtime: "IF (距离最终凹槽还剩最后十米，全员重伤倒地无法动弹) THEN (提供机制：主角必须手动剥离自己的保命护甲/外骨骼作为垫脚石，用纯肉身推完最后一段致命距离)。",
        runtimeEn: "IF (Ten_meters_left_to_final_slot_all_crit_down_immobile) THEN (Provide_Mechanic: Protagonist_must_manually_strip_own_lifesaving_armor_as_leverage_pushing_the_last_fatal_distance_with_pure_flesh)."
      }
    },
    {
      id: "the_indivisible_drop_of_life",
      name: "不可分割的生命原髓", nameEn: "The Indivisible Drop of Life",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "天地间最后的远古巨兽或神明遗留的一滴高浓度生命质（装在晶莹剔透的水晶瓶或不可被稀释的圣器中）。",
      defEn: "A highly concentrated drop of life essence left by the last ancient behemoth/god (kept in a crystal-clear vial or an un-dilutable holy relic).",
      core: "【表面诱惑】：无论多重的绝症、恶毒诅咒或致命贯穿伤，只要一滴就能让肉体白骨生肉、起死回生。",
      coreEn: "【Surface Temptation】: No matter the terminal illness, vile curse, or fatal stab, one drop regenerates flesh from bone and revives the dead.",
      logic: "【叙事抓手】：它是“排他性极强的单次顶级治疗道具”。当队伍中至爱之人生死垂危，同时外部大环境（如庇护全城的结界神树/供水大坝）也即将枯死崩溃时，这滴原髓强制主角进行“救一人还是救一城”的电车难题处刑。",
      logicEn: "【Narrative Affordance】: A 'highly exclusive, single-use supreme healing item'. When a beloved lies dying just as the macro-environment (the city's barrier tree / water dam) is collapsing, this indivisible drop forces a brutal 'save one vs save all' trolley problem.",
      patch: {
        mechanics: "表层锚点 + [单次消耗 = 唯一解的排他性; 需求分支 = 多重濒死同时触发; 伦理困境 = 大义与私情的残酷切割]",
        mechanicsEn: "Surface_Anchor + [Single_Consumable = Exclusive_only_solution; Demand_Branch = Multi-dying_triggers_simultaneously; Ethical_Dilemma = Brutal_severing_between_duty_and_love]",
        aesthetic: "聚焦：在黑暗深渊中唯一散发莹润光芒的小瓶；左边是极其微弱的咳血声，右边是即将压垮万人的城墙开裂声；主角悬在半空中颤抖无法倒下的手腕。",
        aestheticEn: "Focus: The only softly glowing vial in the abyss; faint blood-coughing on the left, cracking of a city-crushing wall on the right; protagonist's wrist trembling mid-air, unable to pour.",
        runtime: "IF (拔开瓶塞准备喂给怀中即将断气的恋人时) THEN (提供机制：大地震动，防御屏障猛烈开裂，无尽的毒瘴即将灌入地下城，所有平民用绝望的眼睛看着主角手里的瓶子)。",
        runtimeEn: "IF (Uncorking_vial_about_to_feed_dying_lover) THEN (Provide_Mechanic: Earth_shakes_barrier_cracks_endless_miasma_flooding_city_civilians_stare_despairingly_at_the_bottle_in_protagonist's_hand)."
      }
    },
    {
      id: "the_blueprint_of_infinite_warmth",
      name: "无尽热源的禁忌手稿", nameEn: "Blueprint of Infinite Warmth",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "记录着廉价、无污染的永动机级别能源核心结构的数据母盘或上古卷轴（如：人造微型太阳初版图纸、普罗米修斯火种魔典）。",
      defEn: "A master data disk or ancient scroll recording cheap, pollution-free perpetual energy structures (e.g., prototype mini-sun blueprint, Prometheus flame grimoire).",
      core: "【表面诱惑】：结束废土的严寒或底层人民的能源剥削。提供无限的光和热，从根本上瓦解当前统治阶级的资源垄断。",
      coreEn: "【Surface Temptation】: End harsh winters and energy exploitation of the underclass. Provides infinite light and heat, collapsing the ruling class's resource monopoly.",
      logic: "【叙事抓手】：它的物理意义等于“危险的真理”。它不仅仅是被盗的财宝，更是对旧秩序的宣战书。图纸必须经过冗长的“解码/拼凑”过程，期间无法掩盖其发出的异常神圣/能量波动。每一个帮着破译的学者、每一个提供藏身处的同伴，都会因为接触这张图纸而遭到上层阶级的残酷灭口。",
      logicEn: "【Narrative Affordance】: Its physical meaning equals 'dangerous truth'. It's a declaration of war. Decoding the blueprint requires a lengthy gathering/parsing process, emitting unhideable anomalous energy waves. Every scholar aiding decryption, every companion offering shelter, is brutally silenced by the elite for touching it.",
      patch: {
        mechanics: "表层锚点 + [解析耗时 = 极长且散发全图信标; 防守波次 = 源源不断的精锐暗杀者; 悲剧传递链 = 沾之即死的危险火种]",
        mechanicsEn: "Surface_Anchor + [Parsing_Duration = Extremely_long_global_beacon; Defense_Waves = Endless_elite_assassins; Tragedy_Chain = Touch-of-death_dangerous_spark]",
        aesthetic: "聚焦：在微弱烛光下疯狂推演公式的学者背影、图纸边缘常年浸染的斑驳血痕、远处逐渐逼近的帝国歼灭部队探照灯。",
        aestheticEn: "Focus: Scholar's frantic back calculating under dim candlelight, mottled bloodstains lining the blueprint's edges, the Empire's annihilation squad searchlights approaching in the distance.",
        runtime: "IF (最终方程式终于被老工匠/学者解开，光芒照亮了黑板) THEN (提供机制：狙击箭矢/激光瞬间穿透老工匠的胸膛，主角必须抓起带血的图纸撞破后窗开始大逃亡)。",
        runtimeEn: "IF (Final_equation_solved_by_old_artisan_light_illuminating_chalkboard) THEN (Provide_Mechanic: Sniper_arrow/laser_instantly_pierces_artisan's_chest_protagonist_must_grab_bloody_blueprint_and_smash_through_rear_window_to_flee)."
      }
    },
    {
      id: "the_immersion_relic_of_golden_age",
      name: "封存至福纪元的极乐容器", nameEn: "Relic of the Golden Age Bliss",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "一款能够百分之百还原五感、让人置身于毁灭前那个阳光明媚、鸟语花香完美世界的违禁沉浸硬件（如：神经胶囊、织梦水晶、幻梦魔药）。",
      defEn: "Contraband immersion hardware that 100% restores five senses into the perfect sunny world before the apocalypse (e.g., neural capsule, dream-weaving crystal, illusion potion).",
      core: "【表面诱惑】：提供在绝望的底层世界中唯一合法的精神避难所。只要闭上眼，就能和逝去的亲人坐在绿草如茵的阳光下野餐。",
      coreEn: "【Surface Temptation】: The only legal spiritual sanctuary in the despairing undercity. Close your eyes and picnic with deceased kin on sunlit green grass.",
      logic: "【叙事抓手】：它是真正的“情感毒品”。它的物理特性导致使用者在体验期间肉身像烂泥一样毫无防备地瘫在阴沟里。为了幻境里的乌托邦，人们在现实里被割掉器官、生生饿死而不自知。这逼迫主角去做出“摧毁底层平民唯一慰藉”的痛苦决断。",
      logicEn: "【Narrative Affordance】: The true 'emotional narcotic'. Its physical trait renders users into defenseless puddles of mud slumped in gutters during the experience. People lose organs or starve in reality for the illusion. Forces protagonist into the agonizing decision to destroy the only comfort the commoners have.",
      patch: {
        mechanics: "表层锚点 + [虚拟极乐 = 极强的沉迷与致幻判定; 物理肉身 = 零防备的拔线危机; 销毁抉择 = 剥夺弱者的梦境配给]",
        mechanicsEn: "Surface_Anchor + [Virtual_Bliss = Strong_addiction/hallucination_check; Physical_Flesh = Zero_defense_unplug_crisis; Destruction_Choice = Depriving_the_weak's_dream_rations]",
        aesthetic: "聚焦：沉浸者脸上挂着的幸福且诡异的痴笑、脑后闪烁着魔力/电子荧光的插槽、周围爬满老鼠/尸蟞却浑然不觉的腐臭角落。",
        aestheticEn: "Focus: Serene yet eerie silly smile on the immersed's face, magic/electronic fluorescent slot flickering behind their head, putrid corner crawling with rats/carrion-beetles they're oblivious to.",
        runtime: "IF (为了带走关键NPC，必须强行拔掉他的极乐系统插头/夺走水晶) THEN (提供机制：NPC在抽离的瞬间从天堂掉回地狱，爆发出极其凄厉、充满仇恨的尖叫，甚至抽出刀子刺向主角)。",
        runtimeEn: "IF (To_extract_key_NPC_must_forcibly_unplug_bliss_system/snatch_crystal) THEN (Provide_Mechanic: NPC_dropping_from_heaven_to_hell_erupts_in_agonizing_hate-filled_screams_even_drawing_a_knife_to_stab_the_protagonist)."
      }
    },
    {
      id: "the_absolute_singular_entry_key",
      name: "避难所大门的唯一白金凭证", nameEn: "Absolute Singular Entry Key",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "当末日彻底降临、大军屠城时，唯一能够开启封闭式绝对安全区大门的物理密匙（且带有一对一锁定的苛刻限制形式，如基因名额戒、血统符文石）。",
      defEn: "When apocalypse hits or army slaughters the city, the only physical key opening the sealed absolute-safe-zone (with strict 1-to-1 limits, e.g., genetic ID ring, bloodline rune).",
      core: "【表面诱惑】：保证在那堵巨大的隔离墙内，能够独享纯净的水源、阳光和绝对安全，彻底切断外边地狱般的苦难。",
      coreEn: "【Surface Temptation】: Guarantees exclusive access to clean water, sunlight, and absolute safety behind the massive quarantine wall, cutting off outside hellish suffering.",
      logic: "【叙事抓手】：残酷在于“名额的绝对量化”。这枚钥匙只能识别一名生命体进入，多带哪怕一个人，安全大门都会自动锁死并启动防御机枪/咒语。这导致原本齐心协力的同伴护卫队，在抵达天堂门前的一刻，瞬间崩溃为修罗场般的养蛊厮杀。",
      logicEn: "【Narrative Affordance】: Cruelty lies in 'absolute quantified quota'. This key admits exactly one organism; bringing even one extra locks the vault with lethal defense systems. Causes a united escort team to instantly collapse into a Gu-poison bloodbath at the very gates of heaven.",
      patch: {
        mechanics: "表层锚点 + [单人准入界限 = 物理层面的不可逾越; 团队离心力 = 抵达门槛瞬间爆发; 倒计时压迫 = 外环境正在不可逆地坍塌]",
        mechanicsEn: "Surface_Anchor + [Single-person_Entry_Limit = Physically_insurmountable; Team_Centrifugal_Force = Explodes_at_threshold; Countdown_Oppression = Irreversible_outer_collapse]",
        aesthetic: "聚焦：缓缓打开的一条溢出耀眼白光和花香的门缝、门外深埋在阴影中互相举枪/举剑指着对方的战友、环境崩溃声如同死神的跫音滴答作响。",
        aestheticEn: "Focus: Slowly cracking door spilling blinding white light and floral scent, comrades buried in shadow outside aiming weapons at each other, environment crumbling like a grim reaper's ticking footsteps.",
        runtime: "IF (历经千辛万苦抵达大门，使用钥匙后系统冰冷无情地提示：超载，仅允许携带唯一的实体骨肉进入) THEN (提供机制：引发同行伙伴间为了争夺唯一席位的立刻拔刃内战，且门外的毒气/黑泥已经漫到小腿)。",
        runtimeEn: "IF (Arriving_at_gate_after_hardship_key_usage_prompts: Overload_only_one_flesh_entity_allowed) THEN (Provide_Mechanic: Triggers_immediate_draw-blade_civil_war_among_companions_for_the_sole_seat_as_toxic_gas/black_mud_rises_to_calves)."
      }
    },
    {
      id: "the_mutative_fruit_of_gaia",
      name: "剥夺人性的禁忌自然果实", nameEn: "Mutative Fruit of Gaia",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "由绝对纯净的世界原力凝聚而成的一颗实体果实、发光的源质血肉，或不可名状的上古灵药。吃下它就能直接与自然万物的意识接轨。",
      defEn: "A physical fruit, glowing primal flesh, or eldritch ancient elixir condensed from absolute pure World Force. Ingesting it directly merges consciousness with all nature.",
      core: "【表面诱惑】：瞬间获得类似神明/至高德鲁伊的视角，听懂草木低语，操控元素的汹涌，达到天人合一的最完美高位境界。",
      coreEn: "【Surface Temptation】: Instantly gains god/Arch-Druid perspective, understanding plant whispers, manipulating raging elements, achieving perfect oneness with nature.",
      logic: "【叙事抓手】：作为不可逆的“超级消耗品”，物理代价是“彻底失去人性的轮廓”。吞噬后，身体表面会立刻开始木质化/长出诡异的菌丝与触手。它将“追求终极自然”转化为了可怖的肉体恐怖(Body Horror)，逼迫主角在“拯救大局”和“保全人类最后的心智形体”之间二选一。",
      logicEn: "【Narrative Affordance】: An irreversible 'super consumable' where the physical price is 'losing human contours completely'. Upon ingestion, the body instantly woodifies/sprouts eerie mycelium. Converts 'pursuit of ultimate nature' into grotesque Body Horror, forcing a choice between 'saving the realm' and 'preserving remaining human sanity/form'.",
      patch: {
        mechanics: "表层锚点 + [吞噬反馈 = 瞬间获取最高统治环境的法术权柄; 物理异变 = 不可逆度100%; 精神丧失 = 从此无法与旧友用人类语言交流]",
        mechanicsEn: "Surface_Anchor + [Ingestion_Feedback = Instant_supreme_ambient_magic_authority; Physical_Mutation = 100%_Irreversible; Mental_Loss = Can_never_communicate_in_human_language_again]",
        aesthetic: "聚焦：果实被咬破时流出的如同发光水银般的汁液、主角脸上迅速蔓延干裂的树皮/结晶纹理、属于人类的温暖瞳孔逐渐涣散化为绝对客观死寂的墨绿色。",
        aestheticEn: "Focus: Glowing mercury-like juice bleeding when bitten, rapidly spreading cracked bark/crystal texture on face, warm human pupils dilating into absolute objective dead dark-green.",
        runtime: "IF (为了阻止大军推平最后一座山谷/防线，主角一口吞下了禁忌原主) THEN (提供机制：狂暴的巨藤瞬间击碎了无数攻城载具，但当劫后余生的队友上前拥抱主角时，发现那只是一座冰冷、发出无机物噪音的非人神像)。",
        runtimeEn: "IF (To_stop_the_army_flattening_the_last_valley_protagonist_swallows_the_forbidden_fruit) THEN (Provide_Mechanic: Raging_vines_instantly_crush_countless_siege_engines_but_when_surviving_teammates_hug_protagonist_they_find_only_a_cold_inhuman_idol_emitting_inorganic_noise)."
      }
    },
    {
      id: "the_vessel_of_mass_pacification",
      name: "抹除纷争意志的和平微尘之匣", nameEn: "Vessel of Mass Pacification",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "一个极其脆弱、稍微用力就会爆裂散发出无孔不入尘埃的容器（如：上古和平孢子粉苞、精神抑制魔瓶、神经惰性气体炸弹）。",
      defEn: "An extremely fragile vessel that bursts easily, releasing pervasive dust (e.g., ancient peace spore-pod, mind-suppressing magic flask, neural inert gas bomb).",
      core: "【表面诱惑】：摔碎它，就能立刻停止全境所有的流血与厮杀。不杀一人而强制实现永远的“无争乌托邦”。",
      coreEn: "【Surface Temptation】: Smash it to instantly stop all bloodshed across the realm. Achieve eternal 'peaceful utopia' without killing a single soul.",
      logic: "【叙事抓手】：它是包装在仁慈与拯救外皮下的“精神抹杀性战略武器”。打破它的动作极低门槛（甚至被流弹碰碎），但爆炸后，所有吸入者都会失去愤怒、悲伤与反抗的自由意志，沦为大家手牵手不再思考的植物人式行尸走肉。这在道德上等同一颗抹杀灵魂的超级核弹。",
      logicEn: "【Narrative Affordance】: A 'spiritual eradication weapon' disguised in mercy. Breaking it is low-threshold (even a stray shot), but once burst, all who inhale lose anger, sorrow, and free will, becoming vegetative zombies holding hands without thought. Morally equivalent to a soul-erasing super nuke.",
      patch: {
        mechanics: "表层锚点 + [引爆门槛 = 极低(一次摔落即全盘爆发); 影响范围 = 无差别强制感官洗脑; 伦理反噬 = 提供一种令人发指的群氓天堂]",
        mechanicsEn: "Surface_Anchor + [Detonation_Threshold = Extreme_Low(drops_to_burst_all); AOE = Indiscriminate_Forced_Brainwash; Ethical_Backlash = Delivers_atrocious_mob_heaven]",
        aesthetic: "聚焦：在战神与暴君厮杀的最中央高高抛起的薄脆容器、清脆破裂声后腾起的粉色梦幻迷雾、下一秒所有残暴士兵脸上露出僵硬而同质化的惨白微笑。",
        aestheticEn: "Focus: Fragile vessel tossed high into the center of warlord tyrant melee, crisp crack releasing dreamlike pink mist, next second all brutal soldiers donning stiff, homogenized ghastly smiles.",
        runtime: "IF (面对无休止的两军绞肉机战役，主角绝望地举起武器准备击碎容器强行平息一切) THEN (提供机制：一旦粉碎，战场瞬间死寂，但主角看着连杀父仇人都微笑着拥抱过来的恐怖场景，陷入难以名状的精神恐怖)。",
        runtimeEn: "IF (Facing_endless_meatgrinder_war_protagonist_despairingly_raises_weapon_to_smash_the_vessel_forcing_peace) THEN (Provide_Mechanic: Once_smashed_battlefield_goes_dead_silent_but_watching_father's_killer_smiling_for_a_hug_drives_protagonist_into_indescribable_psychological_terror)."
      }
    },
    {
      id: "the_heavy_lever_of_the_ark",
      name: "逃离绝境的方舟沉重拉杆", nameEn: "Heavy Lever of the Ark",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "启动地球/位面上最后一艘能够飞向新纪元/星界的巨大方舟的物理控制装置（如：重型机械绞盘、必须双臂推入的魔力晶柱阵列）。",
      defEn: "The physical control device to launch the last massive Ark capable of reaching a New Era / Astral Plane (e.g., heavy mechanical winch, magic crystal array requiring dual-arm push).",
      core: "【表面诱惑】：彻底从物理空间上脱离这个无可救药的地狱，带走最后一部分火种，前往应许之地。",
      coreEn: "【Surface Temptation】: Complete physical detachment from this irredeemable hell, taking the last spark of life to the promised land.",
      logic: "【叙事抓手】：它的残酷在于被强制设定的“背板物理学”。拉下这根拉杆，不仅意味着操作者将被永远留在深渊底层承受引擎点火的终极毁灭余波，还意味着他必须在关闭闸门的最后一刻，亲眼看着无数未能登船的绝望灾民痛哭流涕。这不仅仅是体力拉伸，更是跨过良心底线的最终献祭操作。",
      logicEn: "【Narrative Affordance】: Its cruelty lies in the forced 'back-plate physics'. Pulling the lever means the operator is forever left at the abyss bottom facing the engine's ultimate destructive exhaust, and must watch countless desperate left-behind victims crying as gates close. Not just manual labor, but a final sacrifice crossing the conscience baseline.",
      patch: {
        mechanics: "表层锚点 + [操作不可逆转 = 单向救赎开启; 操作者自我献祭 = 被强制排斥在登船区之外; 余波覆盖 = 留在原地的绝对抹杀]",
        mechanicsEn: "Surface_Anchor + [Irreversible_Op = One-way_salvation_trigger; Operator_Self-Sacrifice = Forcibly_excluded_from_boarding; Exhaust_Coverage = Absolute_erasure_at_ground_zero]",
        aesthetic: "聚焦：生锈斑驳且需要压榨全身体重才能推动的巨大金属拉杆、头顶轰隆隆脱离地表向上攀升的光辉巨殿、主角被毁灭余波极速逼近时释然闭上的眼睛。",
        aestheticEn: "Focus: Rusty giant metal lever requiring full body weight to push, rumbling radiant colossal temple lifting off overhead, protagonist's relieved closed eyes as destruction exhaust rapidly approaches.",
        runtime: "IF (所有的火种同伴都已经被送入安全舱，倒计时结束必须有人在外部完成物理推动) THEN (提供机制：全景窗外是无数涌来的变异潮水/末日黑焰，主角在通讯频道笑着切断了同伴的视野，双手按在了送别的开关上)。",
        runtimeEn: "IF (All_spark_companions_in_safe-pods_countdown_ends_someone_must_push_exterior_lever) THEN (Provide_Mechanic: Panoramic_windows_show_endless_mutant_hordes/doom-flames_protagonist_smiles_cuts_comms_vision_and_pushes_the_farewell_switch_with_both_hands)."
      }
    },
    {
      id: "the_parasitic_breathing_filter",
      name: "滤出纯净空气的寄生呼吸器", nameEn: "Parasitic Breathing Filter",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "能将任何极度致命瘴气/辐射雨雾过滤为如同远古森林般清新空气的半生物学滤膜面具（如：吸附在口鼻部的变异活体花苞、血肉共生的炼金面罩）。",
      defEn: "A semi-biological membrane mask filtering extreme miasma/radioactive fog into ancient forest fresh air (e.g., mutant living flower-bud clinging to mouth, flesh-symbiotic alchemical mask).",
      core: "【表面诱惑】：在毒气弥漫的地表或地牢深渊中畅通无阻，获得最纯粹的绝对呼吸权与续航。",
      coreEn: "【Surface Temptation】: Navigate the miasma-filled surface or dungeon depths freely, gaining purest absolute right to breathe and endure.",
      logic: "【叙事抓手】：它是“有生命”的。面罩内的真菌结构或炼金咒印需要持续吸收佩戴者静脉中的血液来维持活性（一种直接的吸血寄生关系）。长时间佩戴会导致严重贫血甚至休克。这就要求主角必须在极度危险的毒气区域内“掐着秒表前进”，在被毒死和被面罩吸干血液之间做疯狂的钢丝平衡。",
      logicEn: "【Narrative Affordance】: It is 'alive'. The fungal structure or alchemical curse inside continuously absorbs blood from the wearer's jugular (direct parasitism) to activate. Prolonged use causes severe anemia and shock. Requires the protagonist to 'race the clock' in extreme toxic zones, balancing fiercely between being poisoned or being bled completely dry.",
      patch: {
        mechanics: "表层锚点 + [物理续航 = 吸血寄生的代价换取安全; 使用环境 = 强制性极高浓度毒瘴; 生理折磨 = 贫血眩晕与痛饮甘露的矛盾冲击]",
        mechanicsEn: "Surface_Anchor + [Physical_Duration = Blood-sucking_parasite_for_safety; Environment = Forced_extreme_toxic_miasma; Physical_Torture = Anemia_dizziness_vs_drinking_sweet_nectar]",
        aesthetic: "聚焦：在浓烈惨绿雾气中唯一清晰可见的呼吸器轮廓、连接在主角脖颈正一鼓一鼓吸血的刺入血管、发白干裂的嘴唇与因缺血而模糊的视线。",
        aestheticEn: "Focus: The only clearly visible mask silhouette in thick grim-green miasma, piercing veins pulsing on protagonist's neck sucking blood, pale cracked lips and blurring vision from blood loss.",
        runtime: "IF (毒气走廊还剩最后一段，且主角HP因贫血已经降到强制倒地边缘) THEN (提供机制：强迫玩家摘下面罩吸入两秒毒气来中止寄生体的吸血，引发极其剧烈的咳嗽屏幕泛红后，再戴上艰难前行)。",
        runtimeEn: "IF (Last_stretch_of_toxic_corridor_remains_and_HP_drops_dangerously_close_to_forced_collapse) THEN (Provide_Mechanic: Force_player_to_remove_mask_inhale_poison_for_2s_triggering_violent_coughing_and_red_screen_then_re-equip_to_trudge_forward)."
      }
    },
    {
      id: "the_absolute_pure_water_core",
      name: "解百毒的绝对纯净极寒冰核", nameEn: "Absolute Pure Glacial Core",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "从极寒绝地挖出的一块永远不会自然融化的绝对零度不化冰（被密封在抗压透明罐或上古结界盒中）。",
      defEn: "A block of absolute-zero ice excavated from extreme cold abysses that never melts naturally (sealed in a pressurized transparent canister or ancient ward-box).",
      core: "【表面诱惑】：化下的一滴纯水就能彻底清除体内积攒多年的腐化、绝症或辐射异变，恢复婴儿般完美的内脏器官。",
      coreEn: "【Surface Temptation】: A single melted drop completely clears years of corruption, terminal illness, or radiation, restoring perfectly flawless infant-like internal organs.",
      logic: "【叙事抓手】：物理状态是“拒绝温和融化”。只有用人的体温直接去极度贴近地拥抱这种逆天寒霜，才能勉强迫使它滴下救命的毫升液体。在严寒极夜暴雪中，至爱同伴频死，主角哪怕懂得冻伤后果，也必须脱下护甲暴露血肉，用自己的心口去捂热绝对零度。这是一种最直接惨烈的“以命换命”物理体温置换。",
      logicEn: "【Narrative Affordance】: Physical state is 'rejecting gentle thaw'. It only yields life-saving drops when pressed directly against human body heat. In a freezing night blizzard with a dying beloved, protagonist must strip armor and expose flesh, using their own heart-chest to thaw absolute-zero ice. The most horrific direct 'life for a life' physics-based thermal exchange.",
      patch: {
        mechanics: "表层锚点 + [摄取条件 = 强制本体体温流失来换取药剂; 环境压迫 = 外界温度逼近维生临界线; 牺牲机制 = 冻伤截肢判定换取队友的命]",
        mechanicsEn: "Surface_Anchor + [Ingestion_Req = Forced_body_temp_loss_for_elixir; Env_Oppression = Ambient_temp_nearing_critical_limit; Sacrifice_Mechanic = Frostbite_amputation_check_for_teammate's_life]",
        aesthetic: "聚焦：透明容器中幽邃深蓝的刺骨之冰、主角赤裸胸膛紧紧抱住冰块导致皮肤大面积青紫坏死的凄厉画面、滴入干瘪嘴唇里的第一滴带着微光的水滴。",
        aestheticEn: "Focus: Dark piercing blue ice in the container, protagonist's bare chest wrapping it causing horrifying necrotic purple skin, the first faintly glowing water drop falling into shriveled lips.",
        runtime: "IF (在避难冰洞中为了救治腹腔被腐败物贯穿的同伴) THEN (提供机制：主角必须按住特定按键长达数分钟维持拥抱冰块的姿势，体温UI红框狂闪并持续暴跌直到触发某一部位的永久性冻坏损毁)。",
        runtimeEn: "IF (In_an_ice_cave_treating_companion_with_gut_pierced_by_rot) THEN (Provide_Mechanic: Protagonist_must_hold_specific_key_for_minutes_embracing_ice_UI_flashing_red_temp_plummeting_until_triggering_permanent_frost-damage_to_a_body_part)."
      }
    },
    {
      id: "the_tree_rooted_in_the_guardian",
      name: "扎根于古老守护者心脏的白树", nameEn: "White Tree Rooted in the Guardian's Heart",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "一颗反常地生长在世代庇护流亡者的最古老巨型铁人/石像鬼/机甲胸腔内核上的罕见活性圣树。",
      defEn: "A rare living holy tree abnormally rooted in the chest core of the oldest giant iron-golem/gargoyle/mech that has sheltered exiles for generations.",
      core: "【表面诱惑】：据说摘下这棵树枝头的冠绝灵果/琥珀晶体，能够开启净化整个恶劣时空的最终大阵列。",
      coreEn: "【Surface Temptation】: Tales say plucking the ultimate spirit fruit / amber crystal from its branch activates the final array to purify the entire harsh spacetime.",
      logic: "【叙事抓手】：要拿到这充满乌托邦希望的“树枝”，就必须在物理上用蛮力工具挖开/切开那个一直用破损残躯为大家挡风遮雨的老守护者的机械或岩石胸膛（这会导致守护者永远宕机死亡）。这构成了一幕“为了虚无缥缈的完美未来，而亲手谋杀了一直默默付出代价的历史老父亲”的恩将仇报式掠夺。",
      logicEn: "【Narrative Affordance】: To obtain this utopian branch, one must physically cut/dig open the metal or stone chest of the old guardian who shielded everyone with its broken chassis (causing its permanent death). This constructs a scene of 'murdering the silent, sacrificing historical father-figure to plunder a perfect illusory future'—an act of ultimate patricidal ingratitude.",
      patch: {
        mechanics: "表层锚点 + [获取代价 = 物理破坏最坚定的庇护锚点; 听觉折磨 = 金石撕裂的哀鸣伴随树叶折断的清脆; 情感剥夺 = 充满愧疚感的弑父仪式]",
        mechanicsEn: "Surface_Anchor + [Obtain_Cost = Physically_destroy_the_most_steadfast_shelter_anchor; Audio_Torture = Metal/Stone_tearing_wails_with_crisp_leaf_cracking; Emotional_Loss = Guilt-ridden_patricidal_ritual]",
        aesthetic: "聚焦：链锯/重锤切开巨型防御者外壳时飞溅的油污（或魔法粉尘）犹如眼泪、守护者残存单眼中闪烁出的不解与宽容平静、白树被硬生生扯出时牵连出的无数动力管线/灵脉。",
        aestheticEn: "Focus: Oil or magic dust splattering like tears when heavy tools crack the giant defender's shell, the incomprehension and forgiving peace in its remaining single eye, countless power cables/ley lines tearing out alongside the white tree.",
        runtime: "IF (为了拿到救世之树前往最终祭坛，玩家挥下了无情的重型破坏工具) THEN (提供机制：老守护者不仅未开启防卫反击，反而主动卸下了胸甲防御力场方便主角下刀，并在轰然倒塌前发出一声哄睡摇篮曲般的低频共振)。",
        runtimeEn: "IF (To_grab_salvation_tree_for_final_altar_player_swings_ruthless_destruction_tools) THEN (Provide_Mechanic: Old_guardian_disables_defenses_willingly_sheds_chest-shieldight_for_easier_cutting_and_emits_a_low-freq_lullaby_resonance_before_collapsing)."
      }
    },
    {
      id: "the_generator_of_utopian_echoes",
      name: "抚慰狂躁的自然之声发生器", nameEn: "Generator of Utopian Echoes",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "一个造型像老旧海螺的精巧发条八音盒或共鸣法器，里面极为奢侈地刻录着真正的“海浪席卷沙滩声、丛林群鸟和鸣声”。",
      defEn: "An exquisite wind-up music box or resonance artifact shaped like an old conch, luxuriously engraving the actual sounds of 'waves sweeping beaches, flocking jungle birds'.",
      core: "【表面诱惑】：在一个只剩下齿轮轰鸣、凄厉剑戟交加或哀嚎的残酷地狱里，提供唯一能从神经深处安抚杀戮狂躁症音频的高雅奢侈品。",
      coreEn: "【Surface Temptation】: In a cruel hell of roaring gears, clashing steel, and screams, provides the only audio luxury capable of soothing slaughter-mania from deep within the nerves.",
      logic: "【叙事抓手】：本身是一个“极度老旧且物理状态不稳定的镇定剂”。发条/转轴已严重磨损或生锈，极易卡死，且必须由人工在极其平稳的状态下用恒定匀速非常缓慢地摇动/输入魔力。当敌军嗜血兵团全线压境、满身是血的友军陷入精神崩溃准备无差别开火时，主角必须在外界无上喧嚣和轰鸣爆破中，屏住呼吸、控制双手死死稳住这一丝微小且极易被折断的安抚之音。",
      logicEn: "【Narrative Affordance】: An 'extremely decrepit and physically unstable tranquilizer'. Internal crank/axis is severely rusted/worn, seizing easily, demanding perfectly steady, slow manual winding/mana input. Amidst massive enemy bloodlust blitz and allied mental breakdowns ready to friendly-fire, protagonist must hold breath through deafening blasts, keeping hands rock-steady to maintain this tiny, easily-shattered soothing melody.",
      patch: {
        mechanics: "表层锚点 + [操作要求 = 受击暴震下保持极高精度的匀速摇摆; 场景反差 = 绝对混乱喧嚣中的绝对精密细弦; 失误代价 = 音乐变调走音导致全员深渊暴走]",
        mechanicsEn: "Surface_Anchor + [Operation_Req = Maintain_high_precision_steady_crank_under_blast_shockwaves; Scene_Contrast = Absolute_precision_thread_in_absolute_chaos; Failure_Cost = Melody_dissonance_causes_abyssal_berserk]",
        aesthetic: "聚焦：四周是震耳欲聋的爆炸火光冲击波、主角蹲在泥泞战壕/血泊深坑底满脸污秽，双手如同在风暴眼中做脑外科手术般死死握着那个金边生锈的小海螺。",
        aestheticEn: "Focus: Deafening explosion shockwaves around, protagonist crouching in muddy trench/blood-pit, hands gripping the gold-rimmed rusted conch as if performing neurosurgery in the eye of a hurricane.",
        runtime: "IF (最强重火力友军已经彻底失常，开始把枪炮对准无辜难民时) THEN (提供机制：主角被迫切入一个严苛的呼吸与摇杆节奏QTE小游戏，任何手抖快慢都会导致音乐发出一声刺耳的破音，使友军的枪口更低上一寸压向难民)。",
        runtimeEn: "IF (Strongest_allied_heavy_gunner_goes_insane_aiming_at_innocent_refugees) THEN (Provide_Mechanic: Protagonist_forced_into_strict_breathing_crank-rhythm_QTE._Any_hand_tremor_makes_the_music_snap_harshly_lowering_the_allied_gun_an_inch_closer_to_refugees)."
      }
    },
    {
      id: "the_illusory_paradise_projector",
      name: "投射完美幻境的天象仪", nameEn: "Illusory Paradise Projector",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "一台能够在大约百平米破败遗迹内，强行投射出完美刺日青空、草地繁花甚至局部改变微气候的广域发生塔（犹如一台工业废品与古魔法水晶粗略拼凑的三脚怪架）。",
      defEn: "A wide-area broadcasting tower capable of projecting piercing sunny skies and blooming grass fields within a 100sqm ruin, even altering local microclimate (a bizarre tripod patched from scrap and crystals).",
      core: "【表面诱惑】：在暗无天日的永夜地层、酸雨废土或无尽迷宫极深处，按下按钮即可瞬间为众人张开一片“虚假的绝对乌托邦幻境泡泡”。",
      coreEn: "【Surface Temptation】: In eternal night depths, acid rain wastelands, or endless mazes, press a button to instantly inflate a 'false absolute utopian mirage bubble'.",
      logic: "【叙事抓手】：这层幻景的光源与神圣波动在浓重黑暗里“犹如黑夜里的超大号捕虫灯”。它发出的巨大光热能被几十公里外那些常年惧光且嗜血的恐怖怪物或搜捕队清晰地锁定。当主角为了成全某个临死战友“想再看一眼真正阳光白云”的最后凄美愿望而毫不犹豫地拍下启动阵列时，浪漫的顶点必定引来最凶恶遮天蔽日的疯狂围城攻势与屠杀。这是极致浪漫也是极致的送葬曲。",
      logicEn: "【Narrative Affordance】: Its light/holy waves in pure darkness act as a 'massive bug zapper'. The huge thermal/light bloom is locked onto by horrific photophobic beasts or hunter squads from dozens of miles away. When protagonist slaps the activation array to fulfill a dying comrade's tragic wish to 'see real sunlight and clouds once more', the peak of romance guarantees the most vicious, sky-blotting siege. Ultimate romance equates to the ultimate funeral dirge.",
      patch: {
        mechanics: "表层锚点 + [视觉奇观 = 丑陋绝地中强行撕开的完美幻景结界; 仇恨信标 = 发动瞬间必定引发全图最高级仇恨大群; 情感对立 = 用小概率存活换取十秒的临死浪漫]",
        mechanicsEn: "Surface_Anchor + [Visual_Spectacle = Perfect_illusion_barrier_torn_open_in_ugly_wasteland; Aggro_Beacon = Instant_pull_of_map's_max-level_hate_swarm; Emotional_Contrast = Exchanging_survival_odds_for_10s_of_dying_romance]",
        aesthetic: "聚焦：深渊矿坑中突兀撑起的那一片湛蓝穹顶及飞舞虚拟全息蝴蝶、濒死战友涣散的眼中倒映着的虚幻白云、幻境光幕外围正疯狂撕咬抓挠屏障的无数黑色怪兽剪影。",
        aestheticEn: "Focus: The abruptly propped-up azure dome and holo-butterflies in the abyssal mine, illusionary clouds reflecting in dying comrade's dissipating eyes, countless black beast silhouettes tearing frantically at the outside of the light curtain.",
        runtime: "IF (哪怕知道这是送死，依然为断气边缘的兄弟按下了天象仪开关) THEN (提供机制：温暖的阳光驱散了周遭瘴气，但整个频道的雷达/感知网络立刻爆发出密密麻麻的深红包围圈预警，玩家要在鸟语花香的草地上背水一战直到全军覆没)。",
        runtimeEn: "IF (Knowing_it's_suicide_still_presses_projector_switch_for_dying_brother) THEN (Provide_Mechanic: Warm_light_dispels_miasma_but_radar/sense_network_erupts_with_dense_crimson_siege_warnings_player_fights_a_doomed_last_stand_on_bird-song_grassland)."
      }
    },
    {
      id: "the_vat_of_infant_restoration",
      name: "强制退化为纯洁状态的复原大釜", nameEn: "Vat of Infant Restoration",
      group: "8. 自然与乌托邦", groupEn: "8. Nature & Utopia",
      def: "一个刻满上古符文或镶嵌着无瑕管道的庞大休眠舱/炼金大釜，内部充满具有强力羊水般复原活性的浓稠绿色液态源质。",
      defEn: "A massive cryo-pod / alchemical cauldron engraved with ancient runes or flawless pipes, filled with thick green liquid essence possessing potent amniotic-like restorative activity.",
      core: "【表面诱惑】：缓慢洗去肉体上的一切异变兵器化改造、剧毒、辐射以及战争的丑陋伤疤，让你如同结茧一般，脱胎换骨获得一具“毫无瑕疵的自然原生躯体”。",
      coreEn: "【Surface Temptation】: Slowly washes away all weaponized mutations, toxins, radiation, and ugly war scars, letting you cocoon and emerge with a 'flawless, natural original body'.",
      logic: "【叙事抓手】：所谓“退回乌托邦纯真状态”的过程极其漫长，此间不可逆地剥去了所有原本用于在残酷废土中活下来的武装坚壳与毒素抗性。当关键角色因致命伤迫不得已沉入大釜治疗时，外围安全阵线遭遇大军突破。在外浴血奋战的其余队友们逐一倒下，而浸泡其中的当事人，只能如同婴儿般手无缚鸡之力地赤裸悬浮在营养液中。睁眼旁观至亲同伴被恶鬼屠宰，却完全无力击碎薄薄的舱壁玻璃出去参战，这是对试图“逃避现实回到伊甸子宫”这种懦弱愿望最沉溺的无力感惩罚。",
      logicEn: "【Narrative Affordance】: The process to 'revert to utopian innocence' is painfully slow, irreversibly stripping the hardened armor and toxin resistances meant for survival. Forced into the vat by fatal injury, the safehouse outer line is breached. Comrades fall screaming in bloodbaths outside, while the soaked character floats naked, powerless as an infant in the fluid. Forced to watch loved ones slaughtered, lacking the strength to even shatter the thin vat glass to help. The most profound punishment of powerlessness for wishing to 'escape reality back to the Edenic womb'.",
      patch: {
        mechanics: "表层锚点 + [能力剥去 = 强制洗去所有高级护甲与战争技能; 状态禁锢 = 漫长岁月中的绝对物理软隔绝; 精神深渊 = 旁观战友为保护自己而惨死却毫无办法的极度虚弱]",
        mechanicsEn: "Surface_Anchor + [Ability_Stripped = Forced_wash_of_high-tier_armor/skills; State_Confinement = Absolute_soft_physical_isolation; Mental_Abyss = Extreme_weakness_watching_comrades_butchered_safeguarding_self]",
        aesthetic: "聚焦：绿色液体中那具变得越来越苍白柔弱、刚褪去所有老茧与狰狞武装的全新自然人类躯体，以及隔着那一层防弹玻璃，外侧凄厉喷溅其上的队友温热脑浆及绝望抓出的下划血手印。",
        aestheticEn: "Focus: The newly innocent fragile human body in green liquid, just having shed all calluses and fierce modifications, contrasted against warm comrade brains and desperate downward bloody handprints swiped frantically on the outside of the bulletproof glass.",
        runtime: "IF (复原进度达到99%，主角畸形怪异的战刃手臂终于化开变回了娇嫩粉红的五指结构) THEN (提供机制：大恶魔/机械暴君一刀捅穿了最后一名防守老兵的心脏砸在舱门上；主角只能在琥珀液中由于毫无力量而绝望张大嘴巴捶打着不碎的玻璃，徒劳且无能为力)。",
        runtimeEn: "IF (Restoration_at_99%_protagonist's_monstrous_blade-arm_finally_melts_into_tender_pink_five-finger_flesh) THEN (Provide_Mechanic: Archdemon/Mech-Tyrant_pierces_the_last_vet's_heart_against_the_vat._Protagonist_can_only_despairingly_pound_the_glass_in_amber_fluid_crying_with_infant_weakness_utterly_futile)."
      }
    }
  ]
};
