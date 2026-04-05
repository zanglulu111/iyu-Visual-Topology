import { LibraryCategoryDef } from '../../../types';

export const SUR5_WEALTH_TREASURES: LibraryCategoryDef = {
  id: "sur5_wealth_treasures",
  name: "2. 财富与奇珍秘宝 (Wealth & Treasures)",
  nameEn: "2. Wealth & Treasures",
  desc: "对纯粹的物质占有、无尽资源的疯狂追逐。它是表层故事中最经典的抢夺借口，为冲突提供了最直观的物理载体。",
  descEn: "Frantic pursuit of pure material possession and endless resources. It is the most classic robbing excuse in surface stories, providing the most intuitive physical carrier for conflict.",
  items: [
    {
      id: "the_unmovable_dense_wealth",
      name: "带不走的如山死财", nameEn: "The Unmovable Mountain of Gold",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "物理形态集中、体积极小但密度与质量极大的纯粹财富聚集体（如深海沉船的成吨纯金、高密度异星能源锭）。",
      defEn: "Concentrated physical form, small volume but extreme mass and density pure wealth (e.g., Tons of sunken gold, high-density alien energy ingots).",
      core: "【表面诱惑】：跨越了一切社会劳动积累过程，一瞬间带来几辈子花不完的硬资本。",
      coreEn: "【Surface Temptation】: Bypasses all social accumulation, instantly bringing lifetimes of unspendable hard capital.",
      logic: "【叙事抓手】：它的物理特征在于“极度沉重”与“极难平均分割”。这使得团队在得手后，立刻抛弃了潇洒撤退的可能，面临被载具拖累进度、以及分赃不均时拔枪互射的经典物理猜疑链。",
      logicEn: "【Narrative Affordance】: Physical trait is 'extremely heavy' and 'extremely hard to split evenly'. Forces the team to abandon swift escapes, face vehicle speed drags, and classic mexican-standoffs over uneven splits upon acquisition.",
      patch: {
        mechanics: "表层锚点 + [物理搬运负担 = 极大拖慢移速; 可分割性 = 诱发内部分裂; 财宝耀眼度 = 极易暴露]",
        mechanicsEn: "Surface_Anchor + [Physical_Transport_Burden = Slows_Move_Significantly; Divisibility = Induces_Internal_Splits; Treasure_Glare = Easily_Exposed]",
        aesthetic: "聚焦：在封闭空间内闪烁着光泽的重金属山、贪婪到瞳孔缩小的死盯、因为背不动而不得不绝望丢弃的痛苦挣扎。",
        aestheticEn: "Focus: Heavy metal mountains glinting in closed spaces, greedy narrowed pupils, painful desperate struggle of dropping wealth because it's too heavy.",
        runtime: "IF (费尽千辛万苦终于劈开宝库) THEN (提供机制：触发物理负重极大超出载具极限的报警，迫使主角选择扔掉防身物资还是扔掉黄金引来追兵)。",
        runtimeEn: "IF (Prying_open_vault_after_untold_hardships) THEN (Provide_Mechanic: Triggers_physical_weight_exceeding_vehicle_limit_forcing_choice_of_dropping_defense_gear_or_gold_luring_pursuers)."
      }
    },
    {
      id: "the_fragile_fortune_voucher",
      name: "一触即碎的滔天富贵", nameEn: "The Flimsy Billionaire Ticket",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "一张纸片或物理材质极薄的信物，刻着可以兑取天文数字财富的凭证，但兑换有着极其苛刻的空间与时限要求（如将要过期的头等彩票原件、老旧的银票）。",
      defEn: "A paper slip or extremely thin token engraved with astronomical wealth voucher, but redemption requires harsh spatial and temporal limits (e.g., Expiring winning lottery ticket, aged banknote).",
      core: "【表面诱惑】：一夜暴富的合法通行证，只需要将其护送到指定安全点即可彻底改写命运。",
      coreEn: "【Surface Temptation】: Legal pass to overnight wealth, only requiring safe escort to designated safe spot to completely rewrite fate.",
      logic: "【叙事抓手】：这件物品最大的叙事能量来源于其“极其脆弱（怕水怕火怕被意外撕毁）”的物理形态与“庞大价值”构成的强烈落差。它就像是一个可能随时被风吹走、被雨淋烂的定时炸弹，能为所有的公路追击提供无上限的战损焦虑。",
      logicEn: "【Narrative Affordance】: Greatest narrative energy comes from the fierce contrast between its 'extreme fragility (fears water, fire, tearing)' and its 'massive value'. It acts as a time-bomb that could blow away or melt in rain, providing limitless damage anxiety for any pursuit.",
      patch: {
        mechanics: "表层锚点 + [超远物理护送 = 强化奔袭战; 物品脆弱度 = Max; 戏剧性丢失风险 = 全程悬在头顶]",
        mechanicsEn: "Surface_Anchor + [Long-range_Physical_Escort = Strengthens_Run_Battles; Item_Fragility = Max; Dramatic_Loss_Risk = Hovering_all_the_time]",
        aesthetic: "聚焦：沾汗死死攥在手心发皱的纸团、掉进水坑时周围人崩溃护主的尖叫、终点处快要归零的倒数时钟。",
        aestheticEn: "Focus: Sweaty crumpled paper wad clutched tight, screaming breakdown of everyone diving to save it from a puddle, ticking countdown clock at finish line.",
        runtime: "IF (在逃亡中被仇家追杀连车带人撞入暗河) THEN (提供机制：逃生的第一反应不是救人，而是绝望地在浑水中捞那张马上要被彻底泡烂的凭证)。",
        runtimeEn: "IF (Rammed_into_dark_river_during_escape_by_enemies) THEN (Provide_Mechanic: Escape's_first_instinct_isn't_saving_lives_but_desperately_fishing_for_the_soaking_voucher_in_muddy_water)."
      }
    },
    {
      id: "the_anonymous_wealth_container",
      name: "随时遭劫的不记名黑卡", nameEn: "The Unmarked Black Card",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "一个极其不起眼、无实名绑定机制，一旦掌握就能直接调用半个国家体量资产的超便携储蓄器（如数字冷钱包Ｕ盘、不记名黑钻灵卡）。",
      defEn: "Inconspicuous, non-real-name bound, ultra-portable storage granting instant access to half a nation's assets (e.g., Digital cold wallet, bearer black-diamond card).",
      core: "【表面诱惑】：脱离了物理限制的资金核弹。由于完全匿名，抢到它就等于合法拥有它，零门槛洗白。",
      coreEn: "【Surface Temptation】: Financial nuke devoid of physical limits. Being completely anonymous, grabbing it equals legally owning it, zero-threshold laundering.",
      logic: "【叙事抓手】：它的属性是“毫无特色外观”与“不可视其内容”，这造就了“盗窃变戏法”的土壤。持有者随时会陷入“我手里这个难道刚才在碰撞中被掉包成了假的？”的自我怀疑。同时，将数字转变为实体利益需要进行“弱点暴露式的固定端口读取”。",
      logicEn: "【Narrative Affordance】: Traited 'featureless look' and 'invisible contents', creating fertile ground for 'sleight-of-hand theft'. Holder constantly doubts 'was this swapped for a fake when I bumped someone?'. Also, converting to tangible benefits requires 'vulnerable fixed-port reading'.",
      patch: {
        mechanics: "表层锚点 + [外观极度欺骗性 = 易发动偷天换日; 匿名不设防 = 抢到即赚到引发疯狂; 端口绑定读取 = 需要固定防守]",
        mechanicsEn: "Surface_Anchor + [Extreme_Visual_Deception = Easy_Sleight-of-hand; Anonymous_Defenseless = Grabbers_Keepers_Frenzy; Port-bound_Reading = Requires_Fixed_Defense]",
        aesthetic: "聚焦：冰冷光滑甚至可以藏进内衣的微小载体、跳动的100%全额转出进度条、被掉包后摔碎的假货冒出的嘲弄烟雾。",
        aestheticEn: "Focus: Cold smooth tiny carrier concealable in underwear, ticking 100% full-transfer progress bar, mocking smoke from smashed fake after swap.",
        runtime: "IF (孤高怪盗满头大汗地将信物插入转账台完成所有读取后) THEN (提供机制：屏幕没有跳出万亿资金，而是弹出一个嘲讽的笑脸，原来真货早在十分钟前的握手时就被扒走)。",
        runtimeEn: "IF (Sweating_phantom_thief_inserts_token_into_transfer_desk_completing_read) THEN (Provide_Mechanic: Screen_doesn't_show_trillions_but_a_mocking_smiley_face_real_one_pickpocketed_during_a_handshake_10_mins_ago)."
      }
    },
    {
      id: "the_disruptive_innovation_blueprint",
      name: "足以垄断时代的颠覆配方", nameEn: "The Monopolistic Blueprint",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "一份能够在这个世界彻底颠覆某种生存刚需或技术命脉的初始研发手稿或母本（如超廉价长生药剂公式、彻底抹除能源危机的原图纸）。",
      defEn: "Initial manuscript or parent-code capable of thoroughly disrupting world survival necessity or tech lifeline (e.g., Ultra-cheap immortality formula, energy crisis-erasing blueprint).",
      core: "【表面诱惑】：财富的源发生力。掌握它就不是拥有钱，而是拥有“印钞机”，能够向全区域收取无限期的暴利税。",
      coreEn: "【Surface Temptation】: The source force of wealth. Mastering it isn't having money, but having the 'money printer' to tax the entire region indefinitely.",
      logic: "【叙事抓手】：它的物理载体通常具有极高的技术门槛或者“只能由特定心智破译”的属性。它不会引来散兵游勇的黑帮，而是会引发目前垄断体系的反噬。持有它，主角面临的最直观物理威胁，是各大寡头跨国界级别的军队化绝对碾压与追剿。",
      logicEn: "【Narrative Affordance】: Carrier often has high tech threshold or 'can only be deciphered by specific minds'. Doesn't attract stray gangs, but triggers backlash from current monopoly systems. Holding it means facing megacorp-level, trans-border absolute military crushing and hunting.",
      patch: {
        mechanics: "表层锚点 + [大鳄全面战 = 强制改变敌人规格; 信息阅读壁垒 = 必须保护唯一的翻译者; 技术革命威慑 = 会招来彻底的灭口除根]",
        mechanicsEn: "Surface_Anchor + [Megacorp_Total_War = Forces_enemy_spec_change; Info_Reading_Barrier = Must_protect_sole_translator; Tech_Revolution_Deterrence = Invites_thorough_extermination]",
        aesthetic: "聚焦：密密麻麻只有主角能看懂的数据与线图、被跨国财阀空降部队包围但毫无惧色的破旧实验室、屏幕上正被敲下的最后一个回车键。",
        aestheticEn: "Focus: Dense data/charts only protagonist understands, torn lab surrounded by megacorp paratroopers showing no fear, last Enter key being pushed on screen.",
        runtime: "IF (密码被解开，眼看这份粉碎权贵垄断地位的技术将被全网开源播发) THEN (提供机制：这栋大楼的一切电力被强制切断，十几架武装直升机的探照灯同时打碎防弹玻璃投射在图纸上)。",
        runtimeEn: "IF (Password_cracked_about_to_open-source_this_monopoly-shattering_tech) THEN (Provide_Mechanic: All_power_in_building_cut_searchlights_from_a_dozen_gunships_simultaneously_shatter_bulletproof_glass_into_the_blueprint)."
      }
    },
    {
      id: "the_biometric_vault_key",
      name: "保质期极短的活体宝库钥匙", nameEn: "The Perishable Biometric Key",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "一把开启极致财富大门的最后信物，但要求钥匙必须处于严格的生理活性或生物特征匹配状态下（如前门主的鲜血玉髓、金库指定的活体视网膜）。",
      defEn: "Final token twisting open the doors of extreme wealth, but requires strict physiological activity or bio-matching (e.g., Ex-master's blood chalcedony, vault-designated live retina).",
      core: "【表面诱惑】：通向无尽宝库的最后一毫米。拿到它，前面所有的浴血奋战和九死一生才能结出甘甜果实。",
      coreEn: "【Surface Temptation】: Last millimeter to endless vaults. Getting it allows all previous bloody battles and near-deaths to bear sweet fruit.",
      logic: "【叙事抓手】：典型的“零容错活体拼图”物件。由于“必须活体”或“活性倒计时极其短暂”，主角不能简单粗暴地完成抢劫并扬长而去。必须把一个尖叫的活人（或极其容易衰退腐败的组织）在枪林弹雨下安全运送到大门前，物理操作必须保持外科手术般的精密。",
      logicEn: "【Narrative Affordance】: Typical 'Zero-fault Live Puzzle'. Because it 'must be alive' or has 'short bio-decay countdown', protagonist can't just rob and dash. Must transport a screaming living person (or rapidly decaying tissue) safely to the door under hails of bullets, maintaining surgical physical precision.",
      patch: {
        mechanics: "表层锚点 + [活体/物理衰减拼图 = 按严苛流程激活; 护卫活物 = 最困难的战斗模式; 限时送达 = 秒表加剧动作变形]",
        mechanicsEn: "Surface_Anchor + [Live/Phys_Decay_Puzzle = Strict_activation_flow; Guard_Live_Target = Hardest_combat_mode; Time_Limit_Delivery = Stopwatch_warping_actions]",
        aesthetic: "聚焦：被冷鲜液浸泡且还在微微颤动的关键组织(或极度不配合的人质)、厚重达数米的财富大门倒影与扫描仪冰冷的蓝光。",
        aestheticEn: "Focus: Cold-preserved faintly twitching key tissue (or extremely uncooperative hostage), massive wealth door reflection and scanner's cold blue light.",
        runtime: "IF (带着钥匙来到大门前验证，读条走到99%时) THEN (提供机制：系统突然警报活体特征即将因失血/降温不足而溃灭，必须立刻切开自己的大动脉进行强行物理供血骗过验证器)。",
        runtimeEn: "IF (Verifying_key_at_the_door_loading_at_99%) THEN (Provide_Mechanic: System_alarms_bio-marker_about_to_collapse_from_blood-loss/temp-drop_must_slash_own_artery_to_flesh-feed_blood_forcing_verifier_bypass)."
      }
    },
    {
      id: "the_fragile_cultural_relic",
      name: "碰不得的绝世孤品古董", nameEn: "The Untouchable Priceless Relic",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "打上了极其深厚的历史文化烙印，且物理材质极度脆弱、无法修复的财富凝结物（如孤本字画瓷器、古卷残片）。",
      defEn: "Embossed with deep historical and cultural marks, with extremely fragile, unrepairable physical materials (e.g., ancient scroll fragments, alone porcelain vase).",
      core: "【表面诱惑】：跨越物理材料的无穷无尽溢价，足以让最挑剔的国家或跨国买家倾尽国库去赎回这半点文明遗落。",
      coreEn: "【Surface Temptation】: Endless premium beyond physical material, enough to make the most picky nations or transnat-buyers empty treasuries to redeem this speck of fallen civilization.",
      logic: "【叙事抓手】：利用“高昂不可估量价值”与“物理上极端脆弱不堪一击”构建强烈落差。一颗流弹、一次手滑都会让其身价当场清零。它在战斗环境（特别是刀光剑影或密集火力网中）是一个超级累赘，主角被强迫用自己的肉体去给死物挡刀。",
      logicEn: "【Narrative Affordance】: Constructs strong contrast using 'incalculable high value' and 'extreme physical fragility'. A stray bullet or slight slip drops its value to zero. In combat environments (blades/crossfires), it's a super burden, forcing the protagonist to use their own flesh to shield a dead object.",
      patch: {
        mechanics: "表层锚点 + [易碎性度量 = 直接与任务失败挂钩; 护卫限制 = 强行解除主角双手武装; 文化震慑 = 能暂时扭曲周围人的战斗理智]",
        mechanicsEn: "Surface_Anchor + [Fragility_Metric = Directly_tied_to_mission_fail; Guard_Limit = Forcibly_disarms_protagonist's_hands; Culture_Shock = Can_temporarily_warp_surroundings'_combat_sanity]",
        aesthetic: "聚焦：在残暴血腥厮杀中小心翼翼捧着防震匣的手、子弹擦过这无价之宝边缘发出的尖啸、因为一次震动所有人倒吸冷气的瞬间。",
        aestheticEn: "Focus: Careful hands holding the shockproof box amidst brutal bloody slaughter, high pitch of bullet grazing the priceless treasure, sudden collective gasp from a single jolt.",
        runtime: "IF (在激烈的近战搏杀中，装有绝世孤品的盒子眼看要被手雷波及) THEN (提供机制：不仅主角，甚至连原本杀红眼的对手雇佣兵都瞬间停火尖叫着扑上去用身体挡碎片，物理逻辑因这件死物而荒谬扭曲)。",
        runtimeEn: "IF (In_fierce_melee_box_with_relic_about_to_be_hit_by_grenade) THEN (Provide_Mechanic: Not_just_protagonist_but_even_blood-crazed_mercs_ceasefire_screaming_and_diving_to_body-block_shrapnel_physics_absurdly_warped_by_the_object)."
      }
    },
    {
      id: "the_eye_catching_cursed_gem",
      name: "在黑暗中发光的灾厄奇珍", nameEn: "The Glowing Cursed Gem",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "体积惊人且纯度极高，无法通过分割来进行伪装，甚至在暗夜里会散发强烈光学特征的极致宝物（如硕大无朋的夜明珠、有发光反射的顶级血钻）。",
      defEn: "Astounding volume and extreme purity, un-hideable via cutting, and even emitting strong optics in the dark (e.g., massive night-pearl, glowing top-tier blood diamond).",
      core: "【表面诱惑】：最凝练的视觉财富结晶，任何人只要直视它，就会被最原始的占有欲彻底接管视觉和大脑神经。",
      coreEn: "【Surface Temptation】: Most condensed visual wealth crystallization; anyone looking directly at it has their vision and brain nerve totally hijacked by primal possession.",
      logic: "【叙事抓手】：这件物品最大的物理诅咒在于它“根本无法被隐藏起来带走”。在复杂的黑暗环境（逃亡隧道、密林夜袭中），把它塞在怀里就像抱着一个超大功率电灯泡，物理上它就是完美的索命雷达靶子，用视觉暴露属性暴力推动大逃杀模式。",
      logicEn: "【Narrative Affordance】: Its greatest physical curse is that it 'can't be hidden away'. In complex dark environments (escape tunnels, jungle night raids), stuffing it in clothes is like hugging a high-wattage bulb. Physically, it's a perfect homing radar target, violently driving Battle Royale modes via visual exposure.",
      patch: {
        mechanics: "表层锚点 + [视觉零防伪 = 自身就是极强光源/焦点; 灾厄雷达 = 走到哪仇恨拉到哪; 分裂止损惩罚 = 敲碎会造成极高折价]",
        mechanicsEn: "Surface_Anchor + [Visual_Zero-hide = Itself_is_strong_light/focus; Disaster_Radar = Pulls_aggro_wherever_it_goes; Split_Penalty = Shattering_causes_massive_discount]",
        aesthetic: "聚焦：在浓烟与黑暗中爆发出刺目折射的巨大光晕、割开持有者喉咙的刺客因为沉迷宝石光芒而忘了逃走、怀抱灾厄的物理沉重死寂。",
        aestheticEn: "Focus: Giant blinding halo bursting in smoke and dark, assassin slitting holder's throat forgetting to flee because mesmerized by the gem's glare, heavy dead silence of holding a curse.",
        runtime: "IF (主角为了躲避敌人的热成像仪，痛苦地蜷缩在零下三十度没有灯光的污水管中) THEN (提供机制：怀里那颗硕大无朋的宝石折射出的诡异光芒却穿透了泥水，像一发信号弹，直接引来了大批巡逻犬)。",
        runtimeEn: "IF (Protagonist_curled_up_in_-30C_unlit_sewer_to_dodge_thermal_imaging) THEN (Provide_Mechanic: The_eerie_light_refracted_by_the_massive_gem_pierces_muddy_water_like_a_flare_drawing_swarms_of_patrol_dogs)."
      }
    },
    {
      id: "the_chokepoint_property_deed",
      name: "要挟巨头命脉的钉子户地契", nameEn: "The Chokepoint Nail-House Deed",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "一张破旧废地的所有权证明。地块本身破烂不堪，但由于不可反驳的历史原因，其物理坐标精准卡死在财团跨国管道、防御阵法或轨道交通的生命线上。",
      defEn: "Torn deed of a rundown wasteland. The plot itself is thrash, but historically precision-blocks megacorp transnational pipelines, defense arrays, or rail lifelines.",
      core: "【表面诱惑】：用合法凭证作为杠杆，以“蛇吞象”的方式，勒索那些拥有翻江倒海能量的巨无霸组织一笔极其惊怖的底线买断财。, 它的价值来源于对方多需要这条路。",
      coreEn: "【Surface Temptation】: Use legal proof as a lever to snake-swallow an elephant, extorting a terrifying buyout price from behemoth orgs. Its value stems from how much the other side needs this path.",
      logic: "【叙事抓手】：地契/产权所代表的是一块“永不可移动的物理实地”。它强行剥夺了主角利用游击阵地战术反击的可能性。主角必须被死死绑定在这块狭小、破败的地基上，直面对方开过来的钢铁推土机、拆迁大阵——这是最残酷的“塔防钉子户僵局”。",
      logicEn: "【Narrative Affordance】: Deed means an 'immovable physical ground'. Denies protagonist guerrilla tactics. Must be tightly bound to this tiny, ruined foundation, facing incoming steel bulldozers or demo-spells—the cruelest 'Tower Defense Nail-house gridlock'.",
      patch: {
        mechanics: "表层锚点 + [绝对空间防守 = 无退路的塔防主线; 资本碾压武力 = 被逼采用违禁重火力; 以极弱刚极强的纯粹角力场 = 环境破坏满级]",
        mechanicsEn: "Surface_Anchor + [Absolute_Spatial_Defense = No-retreat_Tower_Defense; Capital_Crushing_Force = Forced_to_use_heavy_forbidden_fire; Ultra-weak_vs_Ultra-strong_Arena = Max_Env_Destruction]",
        aesthetic: "聚焦：死死握着薄薄房契拒绝签字的流血老手、巨型攻城锤/推土铲无情碾过残存相框的物理破坏力、地上被一脚踢散的数亿赃款。",
        aestheticEn: "Focus: Bleeding old hand tightly gripping thin deed refusing to sign, giant ram/bulldozer shovel crushing photo frame debris, billions in bribe cash kicked aside on the floor.",
        runtime: "IF (主角彻底拒绝了那份足以买下十座城池的赎买报价并撕毁协议) THEN (提供机制：五分钟后，伪装成事故的重型装甲车直接开始无视任何平民死活物理夷平整个物理街区，主角必须利用破铜烂铁阻截重甲)。",
        runtimeEn: "IF (Protagonist_totally_rejects_buyout_offer_worth_ten_cities_and_tears_agreement) THEN (Provide_Mechanic: 5_mins_later_heavy_APCs_disguised_as_accidents_start_physical_leveling_of_block_ignoring_civilians_protagonist_must_use_junk_to_stop_armor)."
      }
    },
    {
      id: "the_zero_sum_loot_bag",
      name: "诱发多死多得的零和赃款袋", nameEn: "The Zero-Sum Loot Bag",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "装在一个或数个结实袋子里、物理体积正好等于团队搬运负荷极限的实体财富（如塞满面包车后备箱的大量黑钱、装满驼兽的灵矿）。",
      defEn: "Sequential/non-seq tangible wealth packed in sturdy bags, physical volume perfectly matching team carry limit (e.g., Dufuls of illicit cash filling a car trunk, beast loaded with spirit ores).",
      core: "【表面诱惑】：直截了当的自由之资。足够让几名刀口舔血的罪犯远走高飞、彻底金盆洗手的纯粹行动驱动力。",
      coreEn: "【Surface Temptation】: Straightforward funds for freedom. Pure driver enough for blood-licking criminals to fly far away and wash hands completely.",
      logic: "【叙事抓手】：它的物理特征不仅在于“笨重”，更在于“体积封闭且所见即所得”。这种固定不变的物理基数意味着一个极度邪恶的数学公式在起作用：“车厢里每死一个人，活着的人分得的体积就能瞬间翻倍”。它是密闭空间（如撤退的面包车里）枪战背刺的完美导火索。",
      logicEn: "【Narrative Affordance】: Physical trait isn't just 'bulky', but 'enclosed volume and WYSIWYG'. This fixed base implies an evil math: 'Every dead body in the van instantly doubles shares for survivors'. Perfect fuse for claustrophobic (getaway van) backstabs.",
      patch: {
        mechanics: "表层锚点 + [分赃数学题 = 瞬间引燃血案; 物理体积有限度 = 分散必须被察觉; 变现速度 = 最快（拿上即生效）]",
        mechanicsEn: "Surface_Anchor + [Loot-Split_Math = Instantly_ignites_bloodshed; Finite_Physical_Volume = Splitting_noticed_immediately; Monetization_Speed = Fastest_(Effective_upon_grab)]",
        aesthetic: "聚焦：被拉链挤得几乎爆开的结实布袋、颠簸后厢内充斥着血腥与贪婪汗臭的窒息空间、团队成员互用余光死盯对方扣在扳机上的痉挛手指。",
        aestheticEn: "Focus: Sturdy bag nearly bursting zipper, bumpy rear cabin suffocating with blood and greedy sweat, team members using peripheral vision locked on each other's twitching trigger fingers.",
        runtime: "IF (团队成功将最后几袋财宝扔上撤离载具驶入无人的漫长黑夜避难隧道) THEN (提供机制：不仅司机减速并在暗处落下了锁栓，后排的几名同伙也同时由于呼吸急促暴露了枪管探出来的摩擦声)。",
        runtimeEn: "IF (Team_throws_last_bags_on_getaway_vehicle_entering_deserted_long_dark_tunnel) THEN (Provide_Mechanic: Driver_slows_down_locking_doors_while_breathing_heavily_in_rear_exposes_friction_of_multiple_gun_barrels_drawn_simultaneously)."
      }
    },
    {
      id: "the_noisy_survival_generator",
      name: "轰鸣中暴露坐标的救世母机", nameEn: "The Deafening Salvation Engine",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "在极端匮乏的濒死环境中，唯一能从环境中冷凝提炼纯水或源力的高效机器，但物理体积庞大陈旧。",
      defEn: "In extreme dying scarce environments, the only giant old machine capable of condensing pure water or source energy from the surroundings.",
      core: "【表面诱惑】：抹除绝对物理稀缺性。谁占有这台母机，谁就不再祈求生存，而是拥有了重新建国的底环筹码。",
      coreEn: "【Surface Temptation】: Erases absolute physical scarcity. Occupant stops begging for survival, gaining foundational chips to rebuild a nation.",
      logic: "【叙事抓手】：作为大型机械，只要强行开机，就会伴随极大的物理轰鸣、刺眼的排放光芒。这相当于在没有任何掩体的黑暗荒野直接“向一百公里全境广播老子的具体位置”。它将逃亡主角强行转为一个被四周涌来的贪婪饥民与暴徒包围防守的“固定活靶子”。",
      logicEn: "【Narrative Affordance】: As a large machine, turning it on comes with massive physical hum and blinding exhaust light. Equivalent to broadcasting exact coords across 100km in coverless dark wilds. Forcibly turns fleeing protagonist into fixed 'live target' defending against swarming starving mobs and rioters.",
      patch: {
        mechanics: "表层锚点 + [不可移动防卫 = 钉死阵脚; 开机必定引发范围广播 = 唤来无数尸潮/暴民潮; 机器必须存活 = 不可破坏护盾战]",
        mechanicsEn: "Surface_Anchor + [Immovable_Defense = Nailed_down_front; Boot_Broadcast = Summons_endless_mob/zombie_waves; Machine_Must_Live = Indestructible_escort_war]",
        aesthetic: "聚焦：隆隆震动喷吐着清澈生命水流的锈迹管道、干瘪狂热的嘴唇扑上前吸吮的极端丑陋、周围黑压压像海啸般冲锋的饥饿暴徒。",
        aestheticEn: "Focus: Rumbling rusted pipes venting clear life water, shriveled frantic lips lunging to suck in extreme ugliness, black tsunami of starving riot chargers outside.",
        runtime: "IF (为了抢救营地里濒死的一名儿童，主角咬牙合上了这台破旧母机的总闸) THEN (提供机制：伴杂着引擎启动的恐怖防空警报声撕裂了死寂，远在地平线尽头游荡的大型清道夫车队如同闻到血腥味的鲨鱼猛打方向盘扑来)。",
        runtimeEn: "IF (To_save_a_dying_child_in_camp_protagonist_grits_teeth_pulling_machine's_main_breaker) THEN (Provide_Mechanic: Horrifying_air-raid-like_engine_startup_tears_silence_massive_scavenger_convoys_on_horizon_U-turn_like_sharks_smelling_blood)."
      }
    },
    {
      id: "the_memorizable_treasure_map",
      name: "烧成灰颅内死记的终极坐标", nameEn: "The Burned-in-Brain Coordinates",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "由于数字干扰或电磁静默，仅残存于一张纸面上、由于太过简单能被短时间强行背诵的宝库经纬度极其密匙。",
      defEn: "Due to EMP or digital silence, coordinates and vault keys surviving only on a paper slip, simple enough to be force-memorized in short time.",
      core: "【表面诱惑】：不是财富本身，而是指向无尽宝藏黄金乡的绝对入场引导。只要拥有坐标，便等于锁死了赢家结算池。",
      coreEn: "【Surface Temptation】: Not wealth, but absolute entry guide leading to endless El Dorado. Holding coords locks the winner's reward pool.",
      logic: "【叙事抓手】：这是一件允许主角“将物理信息降维至自身大脑”的罕见载体。一旦主角将其记下并把纸张吞咽/焚毁，物理肉身就直接变成了地图本身。这使得反派无法直接一枪爆头夺宝，只能被迫终止杀戮阵型，转换为极度血腥的“活捉并在刑具上拷问”这一动作压迫桥段。",
      logicEn: "【Narrative Affordance】: Rare carrier allowing protagonist to 'compress physical info into their own brain'. Once memorized and slip swallowed/burned, the physical flesh *is* the map. Foes can't headshot and loot, forced into halting killing formations to live-capture and bloody torture for extraction.",
      patch: {
        mechanics: "表层锚点 + [信息肉体转移 = 获得强行免死免枪杀金牌; 活捉判定强制触发 = 反派战斗收枪换网; 残酷刑罚考验 = 转移至静态拉扯焦点]",
        mechanicsEn: "Surface_Anchor + [Info_Flesh_Transfer = Gains_forced_anti-headshot_immunity; Live-Capture_Triggered = Villains_put_away_guns_for_nets; Cruel_Torture_Test = Shifts_to_static_tension_focus]",
        aesthetic: "聚焦：火盆里剧烈翻卷闪烁最后字符的羊皮纸、反派出离暴怒却由于害怕爆头只能极其憋屈放下狙击枪的画面、拷问椅上的倒背如流与渗出的血水。",
        aestheticEn: "Focus: Parchment curling fiercely in brazier flashing last letters, furious villain forced to lower sniper rifle to avoid headshot, reciting fluently covered in blood on torture chair.",
        runtime: "IF (在绝境突围无路可走时，反派重装破门将主角死死包围住准备清空弹匣) THEN (提供机制：主角当着所有人的面嚼碎咽下了仅存的坐标纸条，随后满脸是血嚣张地张开双臂求缚，全员被系统强行锁死弹膛切冷兵器)。",
        runtimeEn: "IF (Cornered_with_no_escape_heavy_villains_breach_ready_to_empty_mags) THEN (Provide_Mechanic: Protagonist_publicly_chews_and_swallows_sole_coord_slip_arrogantly_opening_arms_bloodied_all_enemy_guns_system-locked_forced_to_cold_weapons)."
      }
    },
    {
      id: "the_contaminable_pure_resource",
      name: "一滴即废的绝世纯净仙酿", nameEn: "The One-Drop-Ruined Elixir",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "在这颗被完全异化污染的星球上，装在一个沉重透明玻璃容器内的，唯一能让人延续机能不至于腐烂异化的纯净物（圣洁水源、唯一抑制剂）。",
      defEn: "On this fully alienated polluted planet, the sole pure resource in a heavy glass container keeping one from rotting/mutating (Holy water, sole inhibitor).",
      core: "【表面诱惑】：最底层的生存硬通货，它不是用来买游艇的，而是为了阻止肉体跟着每一口呼吸一起溃烂的纯粹神迹。",
      coreEn: "【Surface Temptation】: Baseline survival hard-currency. Not for yachts, but pure miracle to stop flesh rotting with every breath.",
      logic: "【叙事抓手】：被脆弱容器保护的液体或凝胶具有“不可逆的极高污染脆弱性”。在激烈的抢夺战中，稍有不慎让其破裂或滴入一滴带辐射的变异烂泥，极致财富便当场湮灭归零。它将动作场面压缩到了“连打架反抗都不敢有大动作”的微操地狱边缘。",
      logicEn: "【Narrative Affordance】: Liquid/gel in fragile container has 'irreversible extreme contamination vulnerability'. In grabs, if cracked or a drop of mutant sludge falls in, extreme wealth annihilates. Compresses actions to 'micro-hell where one fears even throwing a big punch'.",
      patch: {
        mechanics: "表层锚点 + [毁损性极高 = 一滴变异液即湮灭; 小巧容器保护 = 动作变形和极度收敛; 生存危机 = 意志力的极限崩塌点]",
        mechanicsEn: "Surface_Anchor + [Ruin_Extreme = One_mutant_drop_annihilates; Small_Container_Guard = Action_warping_extreme_restraint; Survival_Crisis = Willpower_breaking_point]",
        aesthetic: "聚焦：在污浊昏黄的空气中折射出唯一希望反光的水壶底、一群因异化疼痛而喉咙嘶哑却不敢大幅乱抢的暴徒群像。",
        aestheticEn: "Focus: Flask bottom refracting sole hope in murky yellow air, mob of thugs hoarse with mutant pain yet afraid of violent grabs.",
        runtime: "IF (抢夺者和主角用匕首在剧毒泥潭中翻滚彼此死死抵住对方的咽喉) THEN (提供机制：摔在两人身旁的过滤壶正在因为一处龟裂咕噜噜漏出这世上最后一口无辐射真水，两人的眼神在半秒内同时从杀意转变为跪求般的绝望妥协)。",
        runtimeEn: "IF (Robber_and_protagonist_rolling_in_toxic_mud_with_daggers_at_each_other's_throats) THEN (Provide_Mechanic: Filter-flask_dropped_nearby_is_gurgling_its_last_sip_of_pure_water_thru_crack_both_gazes_shift_from_murder_to_desperate_pleading_compromise_in_half-sec)."
      }
    },
    {
      id: "the_devalued_paper_mountain",
      name: "连面包都买不起的成吨废钞", nameEn: "The Ton of Worthless Millions",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "由于政权被彻底颠覆或中央结界崩溃，一整座宏伟金库里曾经堆叠如山、价值连城的票据，现在其社会购买力或能量转换率跌至零。",
      defEn: "Due to regime overthrow or core barrier crash, a grand vault's mountain of once-priceless bills/tokens now has zero purchasing or energy-conversion power.",
      core: "【表面诱惑】：旧时代对于“法定财富等于神圣契约”的历史诈骗，视觉上保留了登峰造极的诱惑山峰与财富重力感。",
      coreEn: "【Surface Temptation】: Old era's historical scam that 'fiat wealth equals holy contract', visually retaining peak temptation and wealth gravity.",
      logic: "【叙事抓手】：核心在于剧作法上的“视觉欺骗倒置结构”。它创造了惊人的徒劳无功错位：主角耗费无数珍贵子弹同伴炸穿了最坚固的金库防线，最后发现这如山堆积的纸币或者失去魔力发白的灵石，现今连烤火取暖都嫌它烧得太快。物理事实的沉淀是对抢劫叙事的当众公开处刑与荒诞颠覆。",
      logicEn: "【Narrative Affordance】: Core is 'visual deception inversion' dramaturgically. Creates staggering futile dislocation: Protagonist burns precious ammo/teammates breaking the hardest vault, only to find the cash mountain (or magic-drained pale stones) burns too fast to even keep warm. The physical reality publicly executes and absurdly subverts the heist narrative.",
      patch: {
        mechanics: "表层锚点 + [超常规体积堆叠 = 制做一个惊人的视觉奇观; 兑换能力 = 物理与社会解构为零; 剧本颠覆 = 把牺牲悲剧瞬间转为滑稽喜剧]",
        mechanicsEn: "Surface_Anchor + [Massive_Volume_Stack = Creates_stunning_visual_spectacle; Exchange_Power = Physical/Social_deconstructed_to_zero; Script_Subversion = Tragedy_instantly_funny_comedy]",
        aesthetic: "聚焦：在金库探照灯下如同雪花般漫天挥散被吹倒的连号最高面额钞票、主角颤抖着随手烧掉一百亿面额借火点烟、幸存者因反差过大直接用枪顶住了自己的嘴巴。",
        aestheticEn: "Focus: Top-denom sequential bills blown around like snow under vault light, protagonist trembling while burning a 10-billion bill to light a cigarette, survivor pulling trigger in own mouth due to absolute contrast crash.",
        runtime: "IF (主角团满脸黑灰拉响炸药终于炸穿那层足有三米的钛合金防壁踏入万亿金库时) THEN (提供机制：防空全频道同时通告新时代法定算力纪元法案取代旧纸币系统，系统即刻强制清零场内这大几千立方米的旧日黄金/废纸的最终判定价值)。",
        runtimeEn: "IF (Soot-faced_team_detonates_last_charge_breaching_3m_titanium_wall_entering_trillion-vault) THEN (Provide_Mechanic: Global_all-channel_announces_new_era_hash-fiat_replacing_old-currency_system_instantly_force-zeroing_the_final_assessed_value_of_the_thousands_of_cubic_meters_of_old_gold/paper)."
      }
    },
    {
      id: "the_time_sensitive_insider_intel",
      name: "生死时速的绝密暴富线报", nameEn: "The Do-or-Die Insider Tip",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "写在血书卷轴、被植入脑胶带或者口耳相传的一句话：例如某大盘将在三小时后崩盘、某阵法轴心正在进行系统级维护漏洞的绝对内幕。",
      defEn: "Written on blood scroll, brain-chip, or spoken: a stock market crashing in 3 hours, or a defense array axis undergoing system-level maintenance loophole.",
      core: "【表面诱惑】：绝对的信息差降维打击。只要抢在时间线落锤之前下注，就可以轻松切走整个系统盘内最大的那块实体大蛋糕。",
      coreEn: "【Surface Temptation】: Absolute info-gap dimensional strike. By betting before the timeline drops the hammer, easily slicing the biggest physical cake of the system.",
      logic: "【叙事抓手】：其载体可能轻若鸿毛（一句话），但极具“致命的时效高压倒计时”。它强加给物理环境一个死要求：必须在限定时间X分内寻找一个极度隐秘的物理传输端口或者发出交易买卖信令。这逼迫主角穿行最危险的雷区防线去“找电话打”，在最不该有动作冲突的地方引发刺杀防守拉锯战。",
      logicEn: "【Narrative Affordance】: Carrier is light as a feather (a sentence) but has 'fatal time-pressure countdown'. Forces a dead env-rule: must find a covert physical port or send trade signals within X mins. Forces protagonist through deadliest minefields just to 'make a phone call', sparking assassinate-defense tug-of-wars where conflict normally wouldn't belong.",
      patch: {
        mechanics: "表层锚点 + [死亡时钟压迫 = 精确到秒的开服崩盘落子; 固定设施依赖 = 打破空间要求跑到通讯机处; 取现极高延迟感 = 按下回车后方能喘息]",
        mechanicsEn: "Surface_Anchor + [Death-Clock_Pressure = Sec-accurate_market-crash_move; Fixed-Facility_Dependence = Break_space_req_to_reach_comms; Mega_Reward_Lag = Breaths_only_after_hitting_enter]",
        aesthetic: "聚焦：秒针滴答巨大压迫感的满墙电子钟/沙漏特写、屏幕上红绿数字的雪崩闪烁、满手是血飞速敲击最后一个执行按键的痉挛手指。",
        aestheticEn: "Focus: Tick-tock second hand massive pressure of wall clock/hourglass, avalanche flashing of red-green numbers on screen, bloodied twitching fingers flying across keyboard for the last execute stroke.",
        runtime: "IF (时间线上只剩倒数最后120秒，能够赚取买下一颗星球额度的操作界面刚弹出来) THEN (提供机制：传输防爆隔离网必须经历九十秒的算法过载安全确认，而此时主角防守的一线大门恰好被巨型液压冲城锤顶飞出轨道)。",
        runtimeEn: "IF (Only_120s_left_on_clock_trade_screen_to_buy_a_planet_pops_up) THEN (Provide_Mechanic: Transmit_anti-blast_net_requires_90s_algorithm_overload_safety_check_while_front_line_doors_protagonist_defends_are_launched_off_rails_by_giant_hydro-ram)."
      }
    },
    {
      id: "the_absurdly_hyped_trash",
      name: "丑陋诡异的千亿天价垃圾", nameEn: "The Billion-Dollar Ugly Trash",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "一个物理材质极其低劣粗糙的破损酒坛子、丑陋草编或一串毫无意义的烂位元组，由于多方财权巨鳄刻意联手坐庄做局，被打上了难以想象的标价泡沫。",
      defEn: "An extremely poor-material broken jar, ugly straw-craft or meaningless junk bytes, hyped to unimaginable price bubbles because multiple mega-crocs colluded to rig it.",
      core: "【表面诱惑】：击鼓传花顶峰的权力通货凭证。只要共识泡沫一日不破裂，谁捧着这个丑玩具，都可以凭它去各大钱庄抵押出源源不断、无边无际的实体货币。",
      coreEn: "【Surface Temptation】: Hot-potato peak power currency. As long as consensus bubble holds, whoever hugs this ugly toy can mortgage it for endless physical currency from any vault.",
      logic: "【叙事抓手】：这件物品以其“随手可破的廉价感”对撞“天文级别的估值额度”，创造出惊为天人的幽默戏剧和舞台张力。只要没被砸烂，黑白两道最冷血的顶尖杀手在这个丑垃圾面前全都会变成了战战兢兢护驾保镖——这是绝佳的动作解构舞台（所有人护着一个他们打心底鄙视但绝不敢碰碎的破碗在火线中跳芭蕾）。",
      logicEn: "【Narrative Affordance】: Its 'easy-to-break cheapness' crashing against 'astronomic valuation' produces stunning comedic tension. As long as intact, top ruthless killers of all sides become trembling bodyguards around it—a perfect action deconstruction stage (everyone ballet-dancing thru crossfire shielding a broken bowl they despise but dare not crack).",
      patch: {
        mechanics: "表层锚点 + [超现实滑稽价值链 = 越粗糙估值越高; 打破共识反转 = 敲碎则在场所有人全裸破产且引发混战; 脱线的高危乱战 = 动作模式被投鼠忌器彻底扭曲]",
        mechanicsEn: "Surface_Anchor + [Surreal_Slapstick_Value-chain = Rougher_it_is_higher_its_valuation; Consensus_Break_Inversion = Shattering_bankrupts_all_igniting_free-for-all; Disconnected_Panic_War = Action_patterns_warped_by_hesitation]",
        aesthetic: "聚焦：在华丽防弹红丝绒底座中央倒悬的一个滑稽不堪甚至掉色的破泥胎、抢夺时一群全副武装暴徒投鼠忌器不敢拉雷的僵硬表情、失控滑落时的极其致命慢动作长镜头。",
        aestheticEn: "Focus: Absurdly faded broken mud-doll inverted on grand bulletproof velvet ped, stiff hesitant expressions of heavily armed thugs afraid to pull pins during grab, highly fatal slow-motion long take of it slipping out of control.",
        runtime: "IF (在激烈争抢中，那个破旧娃娃终于不堪重负掉在钢制地板上摔成了裂成两半) THEN (提供机制：所有原本端着枪的凶狠面庞在半秒陷入死寂，随后首领眼睛一转用枪猛指其中一半怒吼‘从现在的行情跌率来看，这半个更值三个千亿！’，于是原本绝望的僵局被强行拉深为第二阶段大乱斗)。",
        runtimeEn: "IF (In_fierce_struggle_the_worn_doll_finally_falls_onto_steel_floor_breaking_in_half) THEN (Provide_Mechanic: All_fierce_gun-toting_faces_dead-silent_for_half_second_then_boss_points_at_one_half_roaring_'Based_on_current_drop_rates_this_half_is_worth_three_trillion!'_desperate_deadlock_forcibly_deepened_into_phase-2_brawl)."
      }
    },
    {
      id: "the_counterfeit_decoy_plunder",
      name: "必须切开才露伪的掉包假金", nameEn: "The Scratch-to-Reveal Decoy Gold",
      group: "2. 财富与奇珍秘宝", groupEn: "2. Wealth & Treasures",
      def: "外观质感、物理载重全线一比一完美伪造的光鲜财产序列（如刮开金色包浆内部全是廉价铅块的金砖、豪华护镖箱内填满的等重碎石压载物）。",
      defEn: "1:1 perfect counterfeit property arrays in look, texture, carrying weight (e.g., scraping gold coat reveals cheap lead, grand escort box filled with eq-weight gravel).",
      core: "【表面诱惑】：表面看去是这场惊天连环大劫案中最丰厚的战利终点，诱使盗贼同盟抛弃底线去赴险、去抢夺。",
      coreEn: "【Surface Temptation】: Superficially the richest spoil of the heist, tempting thief coalitions to abandon bottom-lines to risk and rob.",
      logic: "【叙事抓手】：它的物理欺诈性在于“撤离极度满足重量感”，在行动期让盗抢团队极有动力去拼命流血扛出封锁线。但当车队抵达终点安全屋，在胜利之夜进行物理刮皮验账的那一刻——这种虚设的“重力充实”会瞬间像塌方一样收缩为最刺骨的寒意和怀疑：“这货被掉了包...也就是说，内鬼就在我们五个人之中且早早完成了黑吃黑！”。这是开启密闭生存空间（经典狼人杀模式互射爆破局）的终极剧情陷阱。",
      logicEn: "【Narrative Affordance】: Physical deception lies in 'extreme getaway weight satisfaction', giving the team drive to bleed carrying it across blockade. But upon safe-house arrival, physics-scraping verification night—this false 'gravity fulfillment' implodes into bone-chilling suspicion: 'Swapped... meaning the mole is among us and ate us out early!'. The ultimate plot trap opening claustrophobic werewolf-mode shootout.",
      patch: {
        mechanics: "表层锚点 + [表象欺瞒成功期 = 撤退战时的究极大饼; 物理显影炸弹 = 切开检验当场翻裂核心联盟; 狼人局猎杀 = 受骗团伙直接内爆为各自孤立的怀疑目标]",
        mechanicsEn: "Surface_Anchor + [Surface_Deception_Phase = Getaway's_ultimate_carrot_on_stick; Phys_Reveal_Bomb = Cutting_verification_tears_core_alliance_live; Werewolf_Hunt = Duped_crew_implodes_into_isolated_paranoid_targets]",
        aesthetic: "聚焦：从匕首切开那抹亮丽高贵划痕中显露出来死灰的铅金属黑白色调、众人欢庆的背景音戛然而止、在狭小灯光急促晃动的密室里立刻把枪口对上自己多年左膀右臂胸口的反差镜头。",
        aestheticEn: "Focus: Dead ashen lead black-white tone bleeding from the bright noble coat sliced by dagger, celebratory BGMs screeching to a halt, jarring contrast of pointing guns at the chest of years-long right-hand-man in tightly swaying lamplight room.",
        runtime: "IF (在分配长桌上，老大笑着拔出战刀用力辟开最上面那箱闪耀异彩的战利品，准备切下第一块时) THEN (提供机制：刀锋传来的绝非切削真金的手感，而是被内部填塞的大块铅铁震脱手的脆响，系统强行锁住避难厅的三把电子锁，现场六人中瞬间有两人翻滚滚近死角互盲开火)。",
        runtimeEn: "IF (On_split_table_boss_laughs_drawing_blade_chopping_top_box_of_glowing_loot_ready_for_first_cut) THEN (Provide_Mechanic: Blade_vibration_isn't_real-gold_feel_but_brittle_shock_from_cheap_iron_knocking_blade_away_system_force-locks_3_doors_2_of_the_6_people_instantly_roll_behind_cover_blind_firing_each_other)."
      }
    }
  ]
};
