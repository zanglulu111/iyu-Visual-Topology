import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_G: LibraryCategoryDef = {
  id: "prof_faith",
  name: "7. 信仰与神秘 (Faith & Occult)",
  nameEn: "Faith & Occult",
  desc: "试图填补大他者（M4）核心死亡与虚无（M6）的疯狂代理人。在神圣妄想与绝望的物质尸骸（M2）中，用狂热的仪式去强行缝合裂痕的缝尸匠。",
  defEn: "Mad agents attempting to fill the core death and void (M6) of the Big Other (M4). Corpse-stitchers forcing fanatic rituals to sew the gap between holy delusions and desperate matter M2.",
  items: [
    {
      id: "priest",
      name: "牧师/神父",
      nameEn: "Priest",
      def: "被迫承载凡人无尽排泄出的罪恶M1，在告解室狭小空间里代替大他者进行宽恕欺诈的黑袍垃圾桶。",
      defEn: "Black-robed trashcan forced to bear mortal's endless excreted M1 sins, executing fraud-forgiveness in the tiny confessional acting as the Big Other.",
      core: "【换喻】告解室木网格后冷汗浸透的圣经与被信徒极度绝望的告解声压迫到扭曲变形的十字木架",
      coreEn: "【Metonymy】Sweat-soaked Bibles behind confessional lattices; wooden crosses warped by the pressure of desperate sinner confessions.",
      logic: "强行以肉骨凡胎 M2 代行神明 M4 之责。必须封死自身的原初爱欲 M1，去聆听并吸收他人的乱伦、谋杀、贪婪。极易造成自身超我的血崩破裂。",
      logicEn: "Forced to act as God M4 using mortal flesh M2. Must seal own M1 eros to absorb others' incest/murder/greed. Highly prone to super-ego avalanche rupture.",
      patch: {
        mechanics: "神格代偿吸纳协议 + [超我重压=濒临断裂; 私欲镇压=高危熔炉]",
        mechanicsEn: "Godhead_PROXY_ABSORB + [Super-Ego_Crush=Snapping_Edge]",
        aesthetic: "长年不见阳光导致的极度苍白肤色、在夜深人静时因为他人的原罪而产生应激性呕吐、紧紧握住念珠直到手指勒出紫黑色血痕。",
        aestheticEn: "Deathly pale skin from years in stone-darkness, midnight stress-vomiting due to others' sins, gripping rosaries till fingers turn purple-black.",
        runtime: "IF (在听完一名连环杀手的恐怖虐杀告解后精神防线彻底断裂，抄起讲台的厚重铜烛台直接在神像前将对方砸成烂泥M5) THEN (完成神职者的究极堕落与私刑闭环)。",
        runtimeEn: "IF (Super-Ego_Snaps_After_Hearing_Serial_Killer's_Gore_Confession_Smashing_Their_Skull_To_Mud_With_Candlestick_M5) THEN (Completes ultimate priest-fall and lynch-loop)."
      }
    },
    {
      id: "monk",
      name: "僧侣/苦行僧",
      nameEn: "Monk",
      def: "对自身肉体M2施展法西斯级别镇压的受虐狂，妄图通过物理毁灭途径抵达真空M6。",
      defEn: "Masochist executing fascist-level suppression on own flesh M2; trying to reach vacuum M6 via physical destruction.",
      core: "【换喻】在冰雪中被冻出大面积坏死黑斑的赤裸双足与深深嵌入头骨的荆棘苦修冠",
      coreEn: "【Metonymy】Naked feet showing massive necrotic black frostbite; sharp thorn-crowns gouging deep into skull-bone.",
      logic: "绝对切断 M3（物质系统），主动将 M5（暴力折磨）施加于自身。把肉体的极度饥饿、干渴与疼痛当作抹杀 M1（欲望）的阶梯，本质上是一种极其傲慢的反向自我神化。",
      logicEn: "Absolute cut of M3 (material). Actively applies M5 (violent torture) to self. Uses extreme hunger/thirst/pain to erase M1 desire; essentially highly arrogant inverse self-deification.",
      patch: {
        mechanics: "物理自毁升华协议 + [痛觉快感倒错=极高; 物质排斥=生理性呕吐]",
        mechanicsEn: "Physical_Self-Destruct_ASCEND + [Pain_Pleasure_Inversion=Peak]",
        aesthetic: "形如枯木能够清晰看见每一根肋骨跳动的胸腔、长期打坐导致双腿骨骼畸形的残废、将铁签穿透自己脸颊时的病态平静微笑。",
        aestheticEn: "Withered chests where beating ribs are starkly visible, leg bone-deformities from years of lotus sitting, sick serene smiles while piercing iron skewers through own cheeks.",
        runtime: "IF (在七七四十九天的断水断食最高苦修中由于大脑极度缩水看见的神明只不过是自己将死的脑干幻觉M6) THEN (在大虚无的狂笑声中物理饿死化为一具干痟木乃伊)。",
        runtimeEn: "IF (Seeing_God_During_49-Day_Fast_Only_To_Realize_It's_A_Dying_Brain-Stem_Hallucination_M6) THEN (Starves to death amid void laughter, turning into a wizened mummy)."
      }
    },
    {
      id: "cult_leader",
      name: "邪教教主",
      nameEn: "Cult Leader",
      def: "窃取大他者系统后门的洗脑骇客，批量榨取绝望者灵魂与卵子的食肉神明。",
      defEn: "Brainwash hacker stealing Big Other backdoors; flesh-eating god mass-harvesting desperate souls and eggs.",
      core: "【换喻】白皙如羊脂玉的手指上沾满的狂热信徒供奉鲜血与高台上光芒万丈却暗藏机关的虚假王座",
      coreEn: "【Metonymy】Lamb-fat white fingers soaked in fanatic followers' blood; radiant yet rigged fake-thrones on high altars.",
      logic: "极致的 M4 控制者，自封为绝对的法则。由于完全没有外部监督，他们的 M1（情色与权力欲）会毫无节制地爆破，引发 M5（群体献祭/大屠杀）的末日狂欢。",
      logicEn: "Ultimate M4 controller, crowning self as absolute law. Lacking external checks, their M1 (eros/powerlust) detonate unbridled, triggering M5 (mass-sacrifice) doomsday orgies.",
      patch: {
        mechanics: "精神寄生集群协议 + [神格妄想=彻底固化; 道德约束=物理剔除]",
        mechanicsEn: "Mind_Parasite_HIVE + [God-Delusion=Cemented]",
        aesthetic: "令人迷醉晕眩的焚香、毫无血色极度病态俊美的脸庞与空洞穿透的双瞳、台阶下整齐划一切颈献血的痴狂信徒群。",
        aestheticEn: "Addictive dizzying incense, pale sick-beautiful faces with piercing hollow eyes, manic mobs slicing their throats in perfect sync below the steps.",
        runtime: "IF (在警方破门围剿之际发动终极仪式，逼迫三千信众喝下氰化物毒酒而自己却试图通过密道带钱逃跑M5却被心腹提前锁死密道) THEN (在最讽刺的神罚下被毒发狂暴的信徒生生咬碎分食M6)。",
        runtimeEn: "IF (Forcing_3000_To_Drink_Cyanide_While_Fleeing_With_Cash_M5_But_Locked_In_By_Aides) THEN (Irony strikes as poisoned crazed followers chew him alive M6)."
      }
    },
    {
      id: "exorcist",
      name: "驱魔人",
      nameEn: "Exorcist",
      def: "跳入大他者逻辑崩塌漏斗（附身）中，与不可名状物进行极限精神绞杀战的重伤狂徒。",
      defEn: "Heavily-wounded maniacs diving into Big Other logic-collapse funnels (possession), waging limit mental-stranglehold war targeting the Indescribable.",
      core: "【换喻】飞溅在十字架上带有极强腐蚀性的绿色恶魔秽物与眼球爆裂出血依然怒吼拉丁文的焦黑嘴唇",
      coreEn: "【Metonymy】Corrosive green demon-bile splattered on crosses; charred lips roaring Latin while eyeballs bleed.",
      logic: "面对直接降临物理界 M2 撕碎一切 M4 规则的恶魔侵入 M6。驱魔过程本质是意志强度的极限对撞。每一次接触极渊，都会被深渊的反向污染侵蚀（PTSD 与信仰扭曲）。",
      logicEn: "Facing M6 demon invasions tearing into M2 physics and ripping M4 laws. Exorcism is pure M-Will collision. Each abyssal contact invites reverse-pollution (PTSD/faith-warp).",
      patch: {
        mechanics: "超维意志绞杀协议 + [灵魂污染倒计时=高危读秒; 拉丁语驱逐=撕裂级咆哮]",
        mechanicsEn: "Hyper-D_Will_STRANGLE + [Soul_Pollute_Countdown=Critical_Tick]",
        aesthetic: "被无形巨力砸烂的床铺与墙壁、附身者极其恐怖骨骼反折在天花板上的绝望挣扎、圣水在接触怨灵时爆发的刺耳哀嚎与白烟。",
        aestheticEn: "Beds/walls smashed by unseen force, possessed bodies bone-snapped crawling on ceilings, holy water erupting in agonizing shrieks and white smoke.",
        runtime: "IF (在连续七天的无眠驱魔中发现所谓的恶魔其实是自己内心最底层的恋童邪念映射被大他者实体化反向吞噬M6) THEN (彻底崩溃沦为终极恶魔容器发狂屠戮)。",
        runtimeEn: "IF (Discovering_After_7_Sleepless_Days_The_Demon_Is_A_Physical_Projection_Of_Own_Deepest_Repressed_Pedo-Lust_M6) THEN (Snaps, becoming the ultimate demon vessel for wild slaughter)."
      }
    },
    {
      id: "medium",
      name: "灵媒/通灵者",
      nameEn: "Medium",
      def: "任由亡者在自己的神经回路里来回碾压的公共插槽，模糊生死界限的高维接收器。",
      defEn: "Public neuro-sockets letting the dead repeatedly run over their brain-circuits; high-D receivers blurring life/death.",
      core: "【换喻】眼白完全上翻渗血且发出完全不属于自己的诡异阴冷老妪声线的裂开气管",
      coreEn: "【Metonymy】Eyes rolled back bleeding white, split tracheas emitting impossibly eerie old-crone voices.",
      logic: "M2（物理肉体）被动对外开放，作为跨越 M6（死亡断层）的桥梁。他们的主体感知 M1 随时被数以万计的死后怨念洪流冲刷，处于极其危险的癫狂失能边缘。",
      logicEn: "M2 flesh passively open, acting as bridge over M6 death-gap. M1 subjectivity erased by torrential streams of dead grudges, surfing the lethal edge of paralytic madness.",
      patch: {
        mechanics: "意识高危降神协议 + [肉体控制权=脆弱外包; 绝境死域幻听=全天候激活]",
        mechanicsEn: "Consciousness_Séance_HIGH-RISK + [Flesh_Control=Fragile_Outsource]",
        aesthetic: "降神会上蜡烛突然变成诡异蓝色的瞬间降温、通灵时鼻腔狂喷鲜血却无法抑止浑身抽搐、四周空气里密集得令人发疯的亡者低语。",
        aestheticEn: "Séance candles turning eerie blue dropping temp instantly, nose erupting blood while convulsing uncontrollably, maddening dense dead-whispers filling the air.",
        runtime: "IF (在一次大型招魂中不慎拉开地狱缝隙导致自己的意识被上万冤魂挤出体外M6，活着的肉体被无数鬼手反向撕碎M5) THEN (肉身化为连接深渊的血肉坐标)。",
        runtimeEn: "IF (Séance_Accidentally_Opens_Hell_Rift_Ejecting_Own_Consciousness_As_10,000_Ghosts_Squeeze_In_M6_And_Ghost-Hands_Shred_Flesh) THEN (Flesh-shell becomes a bloody beacon into the abyss)."
      }
    },
    {
      id: "fortune_teller",
      name: "占卜师",
      nameEn: "Fortune Teller",
      def: "偷看命运底层源代码（M6）却无力更改输出结果的绝望预言机，宿命论的囚徒。",
      defEn: "Desperate oracle stealing glances at Source Code M6 but unable to change outputs; prisoner of fatalism.",
      core: "【换喻】翻开代表死神的塔罗牌时由于极度惊恐而痉挛翻倒的茶杯与水晶球中正在重演凶案的血光",
      coreEn: "【Metonymy】Tea cups spilled in violent spasms upon flipping the Death tarot; crystal spheres replaying literal blood-gore murders.",
      logic: "以 M3（算命钱）为掩护，偶尔触碰到真正的因果律 M6。全知即全苦：一旦看见即将到来的 M5 毁灭却由于大他者的时空不可逆性无能为力，陷入重度虚无萎缩。",
      logicEn: "Hiding behind M3 (fortune fees), occasionally touching true causality M6. Omniscience is omnipain: seeing incoming M5 doom but paralyzed by Big Other's irreversible time-lock. Severe nihilist shrivel.",
      patch: {
        mechanics: "大他者剧透惩罚协议 + [因果律反噬=必然连坐; 救赎无力感=100%锁死]",
        mechanicsEn: "Big_Other_Spoiler_PUNISH + [Causal_Backlash=Guaranteed]",
        aesthetic: "充满劣质香料味与阴暗紫色纱幔的吉普赛帐篷、手指极其神经质地疯狂洗牌、无论怎么占卜最终都会抽出“悬吊者”或“塔”的绝望诡异。",
        aestheticEn: "Gypsy tents reeking of cheap spice/purple gauze, fingers shuffling cards in frantic neurosis, drawing 'Hanged Man' or 'Tower' over and over inevitably.",
        runtime: "IF (清晰看见自己明天将被肢解的残忍画面却发现无论逃出多远最终恰好逃进杀手的老巢M5) THEN (被迫坐在死亡剧院前排生吞自己的命运)。",
        runtimeEn: "IF (Clearly_Foreseeing_Own_Dismemberment_M5_Tomorrow_Running_Only_To_Lock_Themselves_Into_The_Killer's_Lair) THEN (Forced onto the front-row of the death-theater to swallow fate)."
      }
    },
    {
      id: "witch",
      name: "女巫",
      nameEn: "Witch",
      def: "游离于父权制大他者文明（M4）之外的自然狂偶，掌控阴性原始生物序列的边缘异端。",
      defEn: "Nature's wild-puppet wandering outside Patriarchal Civ M4; fringe heretic commanding raw feminine bio-sequences.",
      core: "【换喻】沸腾着不明剧毒绿色蟾蜍内脏的生铁大锅与火刑柱上即将被烈火吞没却发出极度怨毒诅咒的狂笑眼球",
      coreEn: "【Metonymy】Boiling iron cauldrons stewing toxic green toad-guts; manic laughing eyeballs screaming venomous curses while engulfed in stake-fires.",
      logic: "极致的 M2（原始草药/胞宫/血肉连接）与 M1（情绪诅咒/原初爱欲）集合体。被主流 M4（宗教法庭）视为极大的威胁，常遭极度残酷的群体 M5（系统性虐杀与火刑）制裁。",
      logicEn: "Extreme mesh of M2 (herbs/womb/flesh) and M1 (curses/primary eros). Seen as ultimate threat by mainstream M4 (Inquisition), suffering horrific systemic M5 (mass burnings).",
      patch: {
        mechanics: "原始母神血肉连接协议 + [父权制仇恨度=极峰; 元素异界同步=超载]",
        mechanicsEn: "Primal_Mother_Flesh_LINK + [Patriarchal_Hate=Summit]",
        aesthetic: "森林深处充满死乌鸦与动物白骨的恶臭小屋、用自己的经血与敌人毛发熬煮致命魔药、面临极刑时绝不屈服的可怖癫狂咒骂。",
        aestheticEn: "Stinking huts deep in woods full of dead crows and bone, stewing lethal hexes with own menstrual blood and foe's hair, terrifying crazed curses when facing execution.",
        runtime: "IF (在被全村父老脱光衣服绑上火刑柱活活烧烤的极度痛苦中M5，爆发怨毒牵死灵献祭阵把全村人的肉体瞬间剥皮血爆M6) THEN (在灰烬与血雨中化为真正的荒野梦魇)。",
        runtimeEn: "IF (Burned_Naked_On_Stake_By_Villagers_M5_Erupting_Curse_That_Instantly_Flays_And_Blood-Bursts_The_Entire_Village_M6) THEN (Ascends to true wilderness nightmare amid ash and raining blood)."
      }
    },
    {
      id: "shaman",
      name: "萨满",
      nameEn: "Shaman",
      def: "通过摄入神经毒素猛烈击穿M4虚假现实的部落地母，在剧吐与幻觉中跳大神的癫狂导游。",
      defEn: "Tribal earth-mother violently piercing M4 fake-reality via neurotoxins; raving guide dancing wildly amidst vomit and hallucinations.",
      core: "【换喻】沾满禽类秽血发出震耳欲聋节奏的破破羊皮鼓与灌满神经致幻死藤水的污浊头骨碗",
      coreEn: "【Metonymy】Torn goat-skin drums smeared in foul bird-blood pounding deafening rhythms; dirty skull-bowls brimming with psychedelic ayahuasca.",
      logic: "依靠摄入极其致命的 M2（毒蘑菇/死藤水），强行引发大脑宕机跨越到大虚无 M6，为部落谋求 M4 秩序。过程极其原始、暴烈，随时因为毒物过量导致肉体 M2 直接衰竭暴毙。",
      logicEn: "Relies on lethal M2 (toxic shrooms/ayahuasca) to force brain-crashes jumping into Void M6 to divine M4 order for the tribe. Primitive, violent, risking instant M2 physical death by overdose.",
      patch: {
        mechanics: "毒素强制升维协议 + [肉体抽搐极限=破裂边缘; 现实认知=已永久溶解]",
        mechanicsEn: "Toxin_Force-ASCEND + [Flesh_Convulsion=Burst_Edge]",
        aesthetic: "口吐白沫疯狂翻滚的粗暴狂舞、脸部狰狞可怖的刺青在篝火下如同活物、用生咬断毒蛇脖子畅饮蛇血引发的高维极致疯狂。",
        aestheticEn: "Frothing brutal frenzied rolls, horrific face tattoos writhing like live things in firelight, extreme high-D madness triggered by raw-biting a viper's neck to drink its blood.",
        runtime: "IF (在一次大型祛病仪式上致幻药剂严重过量导致神经系统彻底烧毁在狂舞中生生扭断了自己的整个颈椎M5) THEN (肉身崩塌，灵魂直接越迁合并入部落的图腾图灵机里)。",
        runtimeEn: "IF (Massive_Overdose_During_Heal_Dance_Burns_Nervous_System_Snapping_Own_Neck_Mid-Spin_M5) THEN (Flesh crumbles; soul forcibly merges into the tribe's totem Turing-machine)."
      }
    },
    {
      id: "crusader",
      name: "圣骑士/十字军",
      nameEn: "Crusader",
      def: "被神圣大他者M4终极洗脑的法西斯人肉屠刀，以上帝之名进行极其血腥物理清场的狂信铁罐头。",
      defEn: "Fascist meat-cleavers ultimately brainwashed by Holy Big Other M4; fanatic iron-cans executing bloody mass-purges in God's name.",
      core: "【换喻】胸口印有红十字但在无数次斩首中已经变成黑紫血浆结块的重型板甲与狂热充血的瞳孔",
      coreEn: "【Metonymy】Heavy plate marked with red crosses now caked purple-black from countless beheadings; fanatic bloodshot pupils.",
      logic: "将最高的精神准则（信仰 M4）与最下贱的物理手段（屠城灭种 M5）进行最极端的恐怖结合。自身完全丧失所有常人 M1 共情，在血流成河的荒漠中坚信自己是神的天使。",
      logicEn: "Extreme horrific fusion of highest spirit (M4 Faith) and lowest physical acts (mass genocide M5). Zeroes out all human M1 empathy, believing themselves God's angels amidst deserts of flowing blood.",
      patch: {
        mechanics: "宏大叙事杀戮洗地协议 + [异教徒同理心=绝对锁死清零; 狂热冲刺=无痛觉霸体]",
        mechanicsEn: "Grand_Narrative_Slaughter_PURGE + [Heretic_Empathy=Absolute_Zero]",
        aesthetic: "踏过齐脚踝深极其泥泞血肉糊地的重装战马铁蹄、一边高声朗诵圣经一边用重锤将妇女儿童颅骨敲碎的极度冰冷倒错、在烈日灼烧下发誓绝不退下的偏执狂。",
        aestheticEn: "Heavy destrier hooves wading ankle-deep in muddy gore, extreme cold perversion of preaching scripture while smashing women/children's skulls with war-hammers, paranoia under scorching suns.",
        runtime: "IF (在长达十年的异域疯狂屠杀后突然发现保护的圣物里面只是一具早已腐烂的老鼠尸体从而信仰倒塌M6疯狂自刎) THEN (宏大意义崩盘带来最高维度的自我精神核爆灭绝)。",
        runtimeEn: "IF (After_10_Yrs_Of_Genocide_Finds_The_Holy_Relic_Is_Just_A_Rotting_Rat_Corpse_Faith_Drops_To_M6_Slits_Own_Throat) THEN (Grand-meaning collapse brings highest-D self-nuke extinction)."
      }
    },
    {
      id: "inquisitor",
      name: "审判官",
      nameEn: "Inquisitor",
      def: "教派系统最冷血的除颤器与防腐剂，靠制造极限痛苦M5来强行榨取绝对忠诚M4的施虐魔王。",
      defEn: "Coldest defibrillators/preservatives of the Church; sadistic demon-lords squeezing absolute M4 loyalty by inflicting limit-pain M5.",
      core: "【换喻】烧得极其通红发出嘶嘶融化皮肉声的烙铁印章与用极度温和的语调宣布千刀万剐判决书的薄唇",
      coreEn: "【Metonymy】Sizzling cherry-red branding irons melting flesh; thin lips declaring death-by-1000-cuts in extremely gentle tones.",
      logic: "绝对的 M4 维系者。他们把人的肉身 M2 当成一张可以随意书写并撕裂的纸，通过酷刑切断女巫、异教徒的身体防线，以重度施虐 M5 维护系统稳定。他们是系统的白手套，灵魂早已一片漆黑。",
      logicEn: "Absolute M4 keepers. They treat human M2 flesh as paper to write/tear at will. Violating heretics' body boundaries via extreme torture M5 to maintain system. The system's white gloves, souls entirely pitch black.",
      patch: {
        mechanics: "教条酷刑榨汁协议 + [神圣施虐狂=隐藏满载; 肉体悲悯=系统级切除]",
        mechanicsEn: "Dogma_Torture_SQUEEZE + [Holy_Sadism=Hidden_Max]",
        aesthetic: "极其沉闷渗人的铁处女关门声、地下暗牢里刺鼻的血腥与尿骚臭、剥夺受刑人所有衣服与尊严时居高临下令人胆寒的发指凝视。",
        aestheticEn: "Muffled agonizing closing-screech of Iron Maidens, stench of blood and piss in dark-dungeons, terrifyingly cold downward gaze while stripping all clothes/dignity from victims.",
        runtime: "IF (拷打一名无辜少女七十个日夜导致其四肢被寸寸拔断M5，死前少女的怨恨凝结为不可名状的高维灾厄直接将其拖入硫磺地狱M6) THEN (施虐者最终在深渊法庭上迎来了千万倍的永恒反向酷刑)。",
        runtimeEn: "IF (Torturing_Innocent_Girl_70_Days_Ripping_Limbs_M5_Her_Dying_Spite_Morphs_To_Elder-Doom_Dragging_Him_To_Sulfur_Hell_M6) THEN (Sadist meets billion-fold reverse-torture in the Abyssal Court)."
      }
    },
    {
      id: "funeral_director",
      name: "入殓师",
      nameEn: "Funeral Director",
      def: "在死亡与活人之间刷上绝美虚假迷彩的粉刷匠，给予不可逆腐烂M6以体面M4的装裱工。",
      defEn: "Painters brushing gorgeous fake-camo between death and living; framers giving irreversible rot M6 a decent M4 facade.",
      core: "【换喻】极度轻柔但冷漠地缝合被车轮碾成碎片头骨的细针与用厚血色粉底掩盖巨大尸斑的手指",
      coreEn: "【Metonymy】Fine needles softly but coldly stitching skull-fragments crushed by tires; fingers using thick foundation to hide massive livor mortis.",
      logic: "处在生与死的缓冲带。用 M4（葬礼仪式、社会伦理）去强行遮掩修补极度可怖的 M2/M6（开始散发腐臭与蛆虫的真实尸体）。他们拥有病态的极静与剥离感。",
      logicEn: "Buffer zone between life and death. Forcing M4 (funerals/ethics) to cover horrific M2/M6 (actual rotting maggot-flesh). They possess sick hyper-stillness and detachment.",
      patch: {
        mechanics: "死亡迷彩粉刷协议 + [尸僵共情=变态超限; 死亡恐惧=已被冰封]",
        mechanicsEn: "Death_Camo_PAINT + [Rigor_Mortis_Empathy=Morbid_Overload]",
        aesthetic: "冰冷不锈钢停尸台上刺鼻的福尔马林味道、极度安静只剩下缝合断头时针皮摩擦的轻微滋滋声、对死人极其温柔对活人极其冷血的一体两面。",
        aestheticEn: "Pungent formalin on cold stainless slab, dead silence save the faint zzt-zzt of needles stitching a decapitated neck, hyper-gentle to the dead but cold-blooded to the living.",
        runtime: "IF (在长期对绝美惨死尸体的修补中产生了究极的恋僵癖M5，将自己绝世爱人的尸腔掏空制成永恒的充气套皮玩偶度日) THEN (极致的美学悲剧彻底滑入恶心的下水道深渊)。",
        runtimeEn: "IF (Developing_Ultimate_Necrophilia_While_Restoring_Gorgeous_Mangled_Corpses_M5_Hollowing_Out_Dead_Lover_As_Eternal_Receptacle_Doll) THEN (Peak aesthetic tragedy slides into a disgusting sewer-abyss)."
      }
    },
    {
      id: "grave_keeper",
      name: "守墓人",
      nameEn: "Grave Keeper",
      def: "被遗弃在文明排泄死角看大门的半死人，与上万具墓碑下白骨日夜共生对话的阴影囚徒。",
      defEn: "Half-dead gatekeepers abandoned in Civ's excretion corners; shadow-prisoners coexisting/talking to 10k skeletons daily.",
      core: "【换喻】常年握铲导致严重变形长满硬结龟裂的双手与在极其阴森暴雨墓地里摇晃的昏暗马灯",
      coreEn: "【Metonymy】Shoveling-deformed calloused hands; dim storm-lanterns swaying in extremely eerie violent-rain graveyards.",
      logic: "生前就已被 M4 系统完全边缘化，只能与纯粹的 M6 死区（墓地）为伍。他们完全摒弃了人类的社会性 M3，在漫长的岁月中同化为泥土、枯叶与骨骸的复合特异点。",
      logicEn: "Fully marginalized by M4 while living, forced to herd pure M6 dead-zones (Graveyards). Shedding all human sociality M3, assimilating over decades into a node of mud, dead-leaves, and bone.",
      patch: {
        mechanics: "生机断绝守门协议 + [孤绝阴气=极深附骨; 社交言语能力=严重退化]",
        mechanicsEn: "Life_Severed_GATEKEEP + [Isolated_Yin-Aura=Bone-Deep]",
        aesthetic: "连日暴雨冲刷导致大量破旧棺木与残肢白骨浮出大片泥泞地表的恐怖景象、被惊飞的乌鸦群中极度凄厉的哑巴嘶叫。",
        aestheticEn: "Terror-scene of violent rains washing old coffins and chopped bones up through the mud, incredibly sharp mute-shrieks amidst scattered murder-crows.",
        runtime: "IF (面对无良资本拆迁铲平上万墓地M4时陷入彻底终极暴乱，用极端的剧毒墓土投毒整个大城市水源导致十万人陪葬M5) THEN (死域看门犬完成最高烈度的同态复仇)。",
        runtimeEn: "IF (Facing_Ruthless_Capital_Dozing_10K_Graves_M4_Revolts_Poisoning_City_Water_With_Lethal_Grave-Dirt_Killing_100K_M5) THEN (Dead-zone watchdog completes max-intensity isotopic revenge)."
      }
    },
    {
      id: "plague_doctor",
      name: "鸟嘴医生",
      nameEn: "Plague Doctor",
      def: "戴着恐怖面具宣判末日的无常，在死尸堆里注射毫无作用安慰剂的死神乌鸦。",
      defEn: "Reapers bearing horrific masks pronouncing doomsday; death-crows injecting useless placebos into corpse-piles.",
      core: "【换喻】面具长喙里充满刺鼻防腐香料但阻挡不住滔天尸臭的极度病态与用来翻拣溃烂鼠疫流脓尸体的手杖",
      coreEn: "【Metonymy】Mask-beaks stuffed with pungent spices that fail to block tidal corpse-stench; canes used to poke ulcerating bubonic corpses.",
      logic: "面对大自然发动的系统级清洗（大瘟疫 M6 级群体死亡），所携带的一丁点 M4 医学完全无能为力。最终异化为了死亡本身的物理象征，从救人的目的彻底扭曲为宣判生者变成无价值 M2 死肉的丧钟。",
      logicEn: "Facing nature's systemic purge (Great Plague M6 mass-death), holding pathetic M4 medicine that does nothing. Ultimately alienating into the physical sigil of death, warping from saving to tolling the bell converting the living to valueless M2 dead-meat.",
      patch: {
        mechanics: "绝对绝望丧钟协议 + [徒劳无力感=极度穿透黑洞; 瘟疫同化=高危触碰]",
        mechanicsEn: "Absolute_Despair_KNELL + [Futility=Piercing_Black-Hole]",
        aesthetic: "全黑极其压抑的重装长袍、成百上千患病者跪在泥水里向他这尊死神绝望求救却被无情踢开的恐怖构图、四处冒着焚烧尸体黑烟的荒城。",
        aestheticEn: "Pitch-black hyper-oppressive robes, hundreds of diseased kneeling in mud begging this grim reaper only to be mercilessly kicked aside, barren cities spewing black corpse-smoke.",
        runtime: "IF (在发觉所有治疗都无效后彻底疯魔开始主动把重度鼠疫患者当做素材活体解剖以寻求神迹M5) THEN (医生逻辑彻底崩坏，化身为比瘟疫本身更加极其可怖的手术刀恶魔)。",
        runtimeEn: "IF (Realizing_All_Cures_Fail_Goes_Mad_And_Actively_Vivisects_Plague_Victims_For_Miracles_M5) THEN (Doc-logic totally collapses, becoming a scalpel-demon far more terrifying than the plague)."
      }
    },
    {
      id: "taoist",
      name: "道士",
      nameEn: "Taoist",
      def: "借由画符堪舆强行撬动东方自然大阵的游方怪客，以自身精血喂养不可测阴阳双刃剑的老千。",
      defEn: "Wandering freak force-prying Eastern natural arrays via talismans/fengshui; an occult cheat feeding unpredictable Ying-yang double-swords with own blood.",
      core: "【换喻】被自身咬破中指在黄纸上拖拽出触目惊心深红咒言的指尖与在极端邪祟面前崩裂成粉屑的八卦木镜",
      coreEn: "【Metonymy】Fingertips bitten open dragging shocking crimson runes on yellow paper; wooden Bagua mirrors shattering to dust before extreme evil.",
      logic: "试图通过 M4（阵法符箓的阴阳代码）去篡改或平衡 M6（天道/厉鬼诅咒）。由于涉及极其危险的高维因果率借贷，常遭到五弊三缺的恐怖天谴 M5（盲、聋、残、绝）。",
      logicEn: "Trying to use M4 (Yin-yang talisman-code) to hack/balance M6 (Heavenly Dao/Wraith Curses). Since this violates high-D causality-loans, constantly hit with horrific divine smites M5 (blindness, maiming, pure-isolation).",
      patch: {
        mechanics: "阴阳骇客强行溢流协议 + [因果律五弊惩罚=绝对执行; 精血超调=极危损耗]",
        mechanicsEn: "Yin-Yang_Hack_OVERFLOW + [Causality_5-Banes_Punish=Absolute]",
        aesthetic: "暗夜荒郊古林里飘散的诡异白色纸钱、极度阴寒导致呼出白气却被猛然倒挂的僵尸贴脸极速咬碎喉咙的窒息感。",
        aestheticEn: "Eerie white paper money drifting in dark wild ancient woods, hyper-yin cold breath suddenly interrupted by an inverted Jiangshi snapping their throat.",
        runtime: "IF (为了极巨的利益替权倾朝野的军阀篡改地脉气数导致一座城池风水崩塌引发天灾M6被万鬼反噬活活吸成人干) THEN (宇宙算法对胆敢越界的黑客进行了最残酷物理拔除)。",
        runtimeEn: "IF (Hacking_Leylines_For_A_Warlord_To_Cause_A_City's_Fengshui_Collapse_Catastrophe_M6_Being_Sucked_Dry_By_10K_Ghosts) THEN (Cosmic algorithm executes the most brutal physical eradication on the boundary-breaker)."
      }
    },
    {
      id: "missionary",
      name: "传教士",
      nameEn: "Missionary",
      def: "被异域极端未开发M6狂野环境生吞活剥的悲情说客，宏大文明在原始丛林里折戟沉沙的第一滴血。",
      defEn: "Tragic lobbyists eaten alive by un-developed M6 savage exteriors; the first blood of Grand Civ halberds breaking in primal jungles.",
      core: "【换喻】紧紧攥在手中却被极其骇人的剧毒部落箭矢一箭穿心钉在巨树上的老旧皮面圣经",
      coreEn: "【Metonymy】Old leather Bibles gripped tight but nailed through the heart to a giant tree by terrifying toxic tribal arrows.",
      logic: "携带着绝对傲慢的中心化 M4（一神信仰），试图在完全不互通的野蛮 M2（原始吃人习俗/剧烈天灾）中进行降维覆盖。结果往往是遭到极其暴烈的 M5 物理摧毁或被彻底同化。",
      logicEn: "Carrying absolutely arrogant centralized M4 (monotheism) attempting to down-res/override totally alien savage M2 (cannibalism/disasters). Often results in violent M5 physical destruction or utter brutal assimilation.",
      patch: {
        mechanics: "文明傲慢硬植入协议 + [水土/文化排异率=1000%致死爆发; 自我殉道感=悲烈顶点]",
        mechanicsEn: "Civ_Arrogant_HARD-INSERT + [Cultural_Rejection=1000%_Lethal]",
        aesthetic: "极其恐怖深邃到处是毒虫瘴气的原始雨林、在发着近四十度高烧导致重度幻觉中还在向树木传达福音的癫狂悲咒、被生剥头皮时的凄厉求主神迹降临（未果）。",
        aestheticEn: "Terrifyingly deep primeval jungles full of venom/miasma, preaching manic tragic gospels to trees amid 40C delirious fever, shrieking for miracles while being scalped alive (to no avail).",
        runtime: "IF (在极其绝望中被异教食人族俘获不但没有感化对反而崩溃放弃信仰，主动加入了分食同伴人肉的狂欢派对M5中化为最野的野兽) THEN (中心系统的终端神经在原始熔炉里被彻底反向熔毁洗脑)。",
        runtimeEn: "IF (Captured_By_Cannibals_And_Instead_Of_Converting_Them_Snaps_Abandoning_Faith_Joining_The_Orgy_To_Eat_Comrades_M5) THEN (Central system's terminal nerve completely reverse-melted/brainwashed in the primal crucible)."
      }
    }
  ]
};
