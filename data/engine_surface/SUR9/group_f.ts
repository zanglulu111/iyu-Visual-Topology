import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_F: LibraryCategoryDef = {
  id: "prof_faith",
  name: "6. 信仰与秘术 (Faith & Occult)",
  nameEn: "Faith & Occult",
  desc: "面对大他者核心的无尽虚空（M6），用极致的神圣狂想或邪道仪式进行修补与献祭。",
  defEn: "Facing the Big Other's bottomless void (M6), repairing or sacrificing via extreme holy fantasies and occult rituals.",
  items: [
    {
      id: "priest",
      name: "神父/牧师",
      nameEn: "Priest",
      def: "垄断了上帝麦克风的话事人，通过赦免罪恶套牢信徒的灵魂经纪人。",
      defEn: "Spokesman monopolizing God's microphone; soul-broker trapping believers via absolution.",
      core: "【换喻】告解室格栅后深不见底的黑洞与被无数眼泪浸泡到发酸的圣经",
      coreEn: "【Metonymy】The bottomless black hole behind confessional grilles; Bibles sour from endless tears.",
      logic: "M4 系统最极致的防御者。他深知上帝已死大他者不存在（或陷入 M6 的沉默），但必须用极其繁琐冰冷的教条和宽恕（虚晃一枪）掩盖虚空，压抑大众的 M1 创伤欲望。",
      logicEn: "Ultimate defender of M4. Knows God is dead/silent in M6, but uses cold dogmas and fake absolutions to mask the void, suppressing the mass's M1 trauma-desire.",
      patch: {
        mechanics: "虚空修补缝合协议 + [原罪接收量=严重溢出; 自身信仰=常处崩塌边缘]",
        mechanicsEn: "Void_SUTURE + [Sin_Receptacle=Overflowing]",
        aesthetic: "暗无天日充满霉味的狭窄告解室、滑顺而冰凉的念珠、被压抑至死寂的黑色道袍、毫无波澜的机械嗓音。",
        aestheticEn: "Claustrophobic musty confessionals, smooth cold rosary beads, deadening black cassocks, flat mechanical voices.",
        runtime: "IF (在深夜被一个真正来自地狱的 M6 级非人存在请求告解) THEN (一生搭建的神圣防波堤瞬间决堤化作疯人院废人)。",
        runtimeEn: "IF (Deep-Night_Confession_From_A_True_M6_Hellish_Non-Human_Entity) THEN (Holy breakwater collapses, becoming a raving asylum inmate)."
      }
    },
    {
      id: "cult_leader",
      name: "邪教教主",
      nameEn: "Cult Leader",
      def: "编织伪神乌托邦从而对信徒进行绝对精神洗脑与肉体榨取的剥削之王。",
      defEn: "Exploitation king weaving fake-god utopias to absolutely brainwash and flesh-drain believers.",
      core: "【换喻】混合了致幻毒药的浑浊圣水与无数狂信徒空洞且流血的眼眶",
      coreEn: "【Metonymy】Cloudy holy water laced with hallucinogens; thousands of bleeding hollow fanatic eye sockets.",
      logic: "自创虚假的 M4 替代系统，借用看似极端的 M1 解放口号去实行最残酷的 M5（肉体掠夺/大屠杀）。极度操弄群众寻求超越（脱离 M2 苦海）的致命渴望。",
      logicEn: "Creates fake M4 system using extreme M1 liberation slogans to execute brutal M5 (flesh-drain/massacres). Manipulates mass desire to escape M2 suffering.",
      patch: {
        mechanics: "洗脑榨取黑盒协议 + [狂热磁场=核爆级; 共情神经=完全绝缘切除]",
        mechanicsEn: "Brainwash_DRAIN_BLACKBOX + [Fanatic_Field=Nuke-Tier]",
        aesthetic: "纯白无瑕却带血迹的亚麻长衣、堆积如山的群体尸骸农场、极其温柔却不容置疑的洗脑耳语。",
        aestheticEn: "Flawless white linen stained with blood, mountain of mass corpses at the farm, gentle yet unquestionable whispering.",
        runtime: "IF (被追捕绝路时强逼喝下毒药的信徒纷纷复活甚至变成真神使者来向自己索命) THEN (陷入比死还恐怖的千古地狱永罚)。",
        runtimeEn: "IF (Cornered_Poisoned_Followers_Resurrect_As_True_Divine_Avengers) THEN (Plunges into eternal hellish torment worse than death)."
      }
    },
    {
      id: "nun",
      name: "修女",
      nameEn: "Nun",
      def: "用极致的性压抑与禁欲将肉身彻底献祭给虚空的神圣新娘。",
      defEn: "Holy bride sacrificing flesh to the void via absolute sexual suppression and asceticism.",
      core: "【换喻】紧密包裹皮肤毫无透气的刺人黑白布料与石砖地上重磕发红的双膝",
      coreEn: "【Metonymy】Suffocating prickling black-and-white fabric; red knees crashing on stone tiles.",
      logic: "M2 肉体重度自残狂。将女性原初的爱欲与生育潜能（M1/M2）强行绝育，换取系统内对至高大他者 M4 的虚无联结。是一种极具受虐倾向的反向崇拜。",
      logicEn: "Severe M2 self-mutilator. Forcibly castrates female eros and fertility (M1/M2) for a null connection to the Big Other M4. Highly masochistic inverse-worship.",
      patch: {
        mechanics: "爱欲灭活绝育协议 + [自我献祭欲=病态高昂; 肉体厌恶=100%]",
        mechanicsEn: "Eros_Neutering_PROTOCOL + [Self-Sacrifice=Morbid]",
        aesthetic: "暗无天日的高墙修道院、粗糙磨破皮肤的麻布衣、禁食导致的惨白病容、滴血的蔷薇刺编织的惩戒鞭。",
        aestheticEn: "Windowless high-walled cloisters, skin-chafing burlap, pale sickly fasting faces, bleeding rose-thorn whips.",
        runtime: "IF (在极其严苛的禁欲中因极度压抑精神分裂导致在十字架前体验到了彻底亵渎的高峰高潮M3) THEN (信仰内核彻底反噬为淫狱圣女)。",
        runtimeEn: "IF (Extreme_Ascetic_Pressure_Triggers_Absolute_Blasphemous_Climax_M3_At_The_Cross) THEN (Faith-core implodes into the Whore-Saint)."
      }
    },
    {
      id: "exorcist",
      name: "驱魔人",
      nameEn: "Exorcist",
      def: "游走在肉体与恶魔夹缝中，用经文做武器与异维灵体肉搏的清理者。",
      defEn: "Cleaner battling cross-D spirits via scripture-weapons in the gap between flesh and demons.",
      core: "【换喻】死死抵住狂暴扭曲肉身的带血十字架与被不明绿水腐蚀烧毁的圣经残页",
      coreEn: "【Metonymy】Bloody crucifix pressed hard against thrashing twisted flesh; Bible pages burned by unknown green vomit.",
      logic: "用大体系的符号密码（M4经文）作为物理层面的锁链（M5强制剥离），对抗强行占据并扭曲人体的深渊级 M6 致病体。他们是双向沾满血污与恶臭的最前线步兵。",
      logicEn: "Uses system symbols (M4 scripture) as physical chains (M5 ejection) against M6 abyss entities warping human flesh. Blood-and-filth-soaked frontline infantry.",
      patch: {
        mechanics: "异维超拔驱逐协议 + [深渊凝视抗性=千锤百炼但易崩; 肉搏阈值=超越凡人]",
        mechanicsEn: "Cross-D_Purge_PROTOCOL + [Abyss_Gaze_Resist=Forged_but_Fragile]",
        aesthetic: "满屋喷溅的浓稠黑血/绿汁、四肢超自然反向折断的附身者、被狂暴力量抛飞砸碎的牧师胸骨、念珠崩断的清脆音。",
        aestheticEn: "Walls painted dark thick bile, supernaturally backwards-snapped limbs, cleric ribcages smashed by invisible force, rosaries snapping loud.",
        runtime: "IF (千辛万苦从女孩体内驱逐出的最强恶魔实际上是上帝发狂降临的分身真颜M6) THEN (驱魔成了弑神，精神直接被碾碎入无底洞)。",
        runtimeEn: "IF (The_Ultimate_Demon_Expelled_Is_Actually_God's_Mad_True_Avatar_M6) THEN (Exorcism becomes Deicide; sanity crushed to dust)."
      }
    },
    {
      id: "shaman",
      name: "萨满/巫医",
      nameEn: "Shaman",
      def: "借由剧烈致幻和肉体自残打通灵魂维度的野性通灵管道。",
      defEn: "Wild spiritual conduit breaching spirit dims via violent hallucination and self-mutilation.",
      core: "【换喻】浸泡着死胎与迷幻草药的滚烫坩埚与在火堆前癫痫抽搐翻白眼的肉身",
      coreEn: "【Metonymy】Boiling cauldrons of dead fetuses and psycho-herbs; epileptic eye-rolling thrashes before the fire.",
      logic: "强行解体自我的 M4（逻辑清醒的现代主体），主动将 M2 落入极化剧痛或致幻崩溃状态（中毒/抽搐），从而让 M6 或大自然 M1 附身。用本体损耗换取引导。",
      logicEn: "Forcibly disintegrates M4 logic ego. Shoves M2 into extreme pain/toxin meltdown so M6 or natural M1 can possess. Burns self-flesh for guidance.",
      patch: {
        mechanics: "超维降神挂载协议 + [身体毒素过载抗性=惊人; 清醒自我=被故意碎尸]",
        mechanicsEn: "Hyper-D_Descent_MOUNT + [Tox_Overload_Resist=Amazing]",
        aesthetic: "带血的骨头项链、脸上诡异的白色油彩、在篝火旁因抽搐而磕破流血的额头、被致幻烟雾封锁的帐篷。",
        aestheticEn: "Bloody bone necklaces, eerie white face paints, bleeding foreheads smashed in fireside seizures, tents choked by hallucinogenic smoke.",
        runtime: "IF (在一次深层通灵中迷航，借身体降世的不是祖先而是嗜杀的远古极恶魔兽M5并无法切断链接) THEN (眼睁睁看着自己的手撕碎全村血亲)。",
        runtimeEn: "IF (Lost_In_Trance_Summoning_A_Slaughter_Flesh-Beast_M5_Instead_Of_Ancestors_Unable_To_Unlink) THEN (Watches own hands shred the entire village's blood-kin)."
      }
    },
    {
      id: "prophet",
      name: "先知/预言家",
      nameEn: "Prophet",
      def: "眼睛瞎了却能看见时间终局的悲绝宣告客，常被视作引来灾变的罪魁祸首。",
      defEn: "Blind herald seeing the end of time; tragic declarer often blamed for bringing the doom.",
      core: "【换喻】眼眶流出血泪的苍茫目盲者与被巨石砸倒却仍在低语世界末日的可怜虫",
      coreEn: "【Metonymy】Blind elder weeping blood tears; crushed bug whispering the Apocalypse under stones.",
      logic: "大他者（或未来时空 M6）的单向数据流强制下载通道。因承受了远超凡人 M4 极限的末日剧透，导致 M1（生之欲）彻底枯竭，肉身 M2 高度残疾退化（盲/聋）。",
      logicEn: "One-way data download pipeline for the Big Other (or Future M6). Bearing apocalyptic spoilers crushes M4, wilting M1 (Will to live) and severely crippling M2 flesh (Blind/Deaf).",
      patch: {
        mechanics: "终局高维剧透协议 + [未来压迫感=神经断裂级; M2维系力=虚脱]",
        mechanicsEn: "Endgame_High-D_SPOILER + [Future_Crush=Nerve-Snapping]",
        aesthetic: "两颗毫无生机的灰白眼瞳、干枯如树皮般颤抖的手指、用碎石在地上乱画的晦涩阵图、被狂暴人群唾骂的烂菜叶。",
        aestheticEn: "Dead gray irises, fingers trembling like dry bark, obscure runes scrawled in gravel, rotten veggies thrown by rabid mobs.",
        runtime: "IF (预见到的最恐怖万劫不复的末日是由自己刚才不经意间说出的一句话从而启动的M6闭环) THEN (在无限的自责与命运因果锁链里精神核燃尽)。",
        runtimeEn: "IF (Realizing_The_Predicted_Ultimate_Doom_Was_Bootstrapped_By_The_Prophecy_Itself_M6_Loop) THEN (Burns out mental core in endless guilt and causal chains)."
      }
    },
    {
      id: "monk",
      name: "苦行僧",
      nameEn: "Ascetic Monk",
      def: "誓与舒适为敌对抗食色本能，用极致痛楚凿通神性壁垒的肉体法西斯。",
      defEn: "Swearing enmity with comfort/eros; flesh-fascists drilling through divine walls via ultimate pain.",
      core: "【换喻】钉在满是生锈铁钉木板上残破见骨的背部与饿至皮包骨的躯干",
      coreEn: "【Metonymy】Broken spine nailed to rusty spike-boards; torsos starved to stretched skin.",
      logic: "试图通过绝对物理自虐（M5）摧毁本体的 M2/M3（贪嗔痴等基本需求）。对肉体的憎恨达到极致，妄求在疼痛归零的瞬间触碰神圣 M4 的超脱（实质是精神解离幻象）。",
      logicEn: "Seeks to annihilate M2/M3 (Greed/Lust) basic needs via absolute physical self-torture (M5). Ultimate hatred of flesh, chasing divine M4 detachment at zero-pain (actually dissociative hallucination).",
      patch: {
        mechanics: "多维自毁净化协议 + [疼痛代偿快感=爆表; 世俗隔绝=绝对墙界]",
        mechanicsEn: "Multi-D_Self-Destruct_PURGE + [Pain_Reward_Climax=Maxed]",
        aesthetic: "瘦到根根肋骨清晰可见、穿透琵琶骨的粗大铁环和沉重锁链、极度沉默的跋涉步伐、大漠烈日炙烤下的枯竭。",
        aestheticEn: "Ribs vividly poking skin, thick iron rings and chains piercing scapulas, extremely silent trudging, sun-baked depletion in deserts.",
        runtime: "IF (饿了三十年将死之际发现天堂不过是一片充满虚无代码的冰冷服务器M6) THEN (绝望的大笑扯裂声带，带着无尽的荒谬肉身枯死)。",
        runtimeEn: "IF (Dying_After_30_Yrs_Starvation_To_Find_Heaven_Is_Just_A_Cold_Null-Code_Server_M6) THEN (Rips vocal cords in howling absurd despair before wilting)."
      }
    },
    {
      id: "inquisitor",
      name: "异端审判官",
      nameEn: "Inquisitor",
      def: "打着光明的旗号执行最地狱酷刑，对凡人思想进行强制清扫的盖世太保。",
      defEn: "Executing hell-tortures under banners of light; Gestapo sweeping mortal thought forcibly.",
      core: "【换喻】烧得通红烙铁上滋滋冒烟的人皮与面具后冷酷无极的金属寒光",
      coreEn: "【Metonymy】Human skin smoking/sizzling on red-hot brands; cold metallic glare behind iron masks.",
      logic: "M4 系统极端暴力（M5）的执行末端。将极其暴力的肢体切削 M5 披上绝对“正义/清洁”的 M4 外衣。具有无法被说服的绝对闭环偏执狂属性。拷问肉体实为控制思想 M1。",
      logicEn: "Terminal of M4's extreme violence (M5). Cloaks horrific amputation M5 under 'holy/pure' M4. Absolute unsolvable paranoid loop. Tortures M2 to chain M1.",
      patch: {
        mechanics: "绝对秩序切削协议 + [暴力合法化倒错=病态100%; 痛苦同理=彻底切断]",
        mechanicsEn: "Absolute_Order_SLICE + [Violence_Legalization_Perversion=100%_Morbid]",
        aesthetic: "阴冷深暗的血迹斑驳地牢、复杂的齿轮断头/拉伸刑具、沉闷冷酷的黑色皮革手套与铁面具。",
        aestheticEn: "Dank blood-stained dark dungeons, complex gear-racks/guillotines, oppressive black leather gloves and iron masks.",
        runtime: "IF (在残虐一位绝美且纯洁的异教女巫时，无可救药地爱上对方并在酷刑室发了疯地与其殉情M1爆炸) THEN (防线彻底被反卷，以最耻辱的异端姿态收场)。",
        runtimeEn: "IF (Torturing_A_Pure_Beautiful_Heretic_Triggers_Mad_Love_And_Suicide_Pact_In_The_Rack_Room_M1_Blast) THEN (Shield inverts completely, ending in ultimate heretical shame)."
      }
    },
    {
      id: "oracle",
      name: "神谕者",
      nameEn: "Oracle",
      def: "通过吸食神秘气体陷入高维痉挛，给朝圣帝王吐露出只言片语残象的肉身收音机。",
      defEn: "Flesh-radio huffing mystic gas into high-D spasms, spitting fragmented glimpses to pilgrim kings.",
      core: "【换喻】深渊裂缝中喷涌出的绿色氤氲毒气与被毒性熏瞎翻白的抽搐双眼",
      coreEn: "【Metonymy】Green miasma spewing from abyss-rifts; convulsing unseeing white eyes blinded by toxic fumes.",
      logic: "介于理智的先知与疯狂萨满之间。他们只是 M4 与 M6 碰撞缝隙中残余的“信道”。由于带宽极窄，只能吐出碎片隐喻，肉身 M2 因常年接收高维信息而呈现极度萎靡与早衰。",
      logicEn: "Between rational prophets and mad shamans. Merely a 'channel' in the M4/M6 friction gap. Narrow bandwidth limits output to fragmented metaphor; flesh M2 highly withered/prematurely aged.",
      patch: {
        mechanics: "残缺高频信道降维协议 + [肉体电磁衰变=极高; 理智自我=被长期挤出体外]",
        mechanicsEn: "Fragmented_HF_Channel_DOWN-RES + [Flesh_Decay=Extremely_High]",
        aesthetic: "地下神殿深处的缭绕迷雾、金丝面纱下的枯槁面容、诡秘且毫无语法逻辑的狂乱呓语。",
        aestheticEn: "Lingering fog deep in underground temples, withered faces beneath golden veils, erratic logic-less frantic murmurs.",
        runtime: "IF (在一次传讯中神明强行夺舍不走，原本的高频收音机变成了真神毁减一切的屠杀机体M5) THEN (肉身瞬间自燃汽化或异变成灾厄母体)。",
        runtimeEn: "IF (Summoned_God_Refuses_To_Leave_Turning_Radio_Into_An_Omnicidal_Slaughter-Mech_M5) THEN (Flesh vaporizes instantly or mutates into a cataclysm-matrix)."
      }
    },
    {
      id: "witch",
      name: "女巫",
      nameEn: "Witch",
      def: "逃离秩序大他者的旷野独行者，借由禁忌血祭干涉物质界的混沌操控家。",
      defEn: "Wilderness solo escaping Big Other Order; chaos manipulator interfering with matter via taboo blood-pacts.",
      core: "【换喻】黑锅里搅动的纠缠死婴残肢与黑夜森林中燃烧着扭曲红光的五芒星",
      coreEn: "【Metonymy】Entangled dead-fetus limbs stirred in black pots; pentagrams burning twisted red in dark woods.",
      logic: "被父权大他者 M4 极度排斥的边缘 M1。退居最混沌的自然原初 M2（黑暗森林/死亡），以彻底的反叛与破坏为核心（M5级别诅咒）。用堕落交换力量。",
      logicEn: "Fringe M1 highly rejected by Patriarchal Big Other M4. Retreats to chaotic primal M2 (Dark Forest/Death), prioritizing total rebellion and M5-tier curses. Trades fall for power.",
      patch: {
        mechanics: "黑暗法则逆置代换协议 + [群居抗拒=绝对拉满; 肉身献祭度=按需切碎]",
        mechanicsEn: "Dark-Law_INVERSE + [Herd_Rejection=Maxed; Flesh_Sacrifice=Slice_On-Demand]",
        aesthetic: "长满黑色可怖荆棘的密林深处、腐肉与奇异香料混合的刺鼻气味、极端苍白病态下的恐怖疯笑。",
        aestheticEn: "Deep dark woods overgrown with horrific black thorns, rotting meat mixed with weird spice, terrorizing mad laughs under pale sickness.",
        runtime: "IF (在绝境中企图献祭全世界婴儿换取大魔神显灵却发现法术只是骗局M1彻底粉碎) THEN (被自己引来的愤怒暴民吊死在最耻辱的十字架火刑桩上)。",
        runtimeEn: "IF (Attempts_Global_Infant_Sacrifice_For_Demon_Lord_Only_To_Find_Spells_Are_Fake_M1_Crushed) THEN (Hanged and burned in extreme shame by enraged mobs)."
      }
    },
    {
      id: "occultist",
      name: "秘术师",
      nameEn: "Occultist",
      def: "身披高知西装却在地下室里用鲜血刻画法阵的疯狂精英。",
      defEn: "Mad elites in high-intellect suits drawing blood circles in basements.",
      core: "【换喻】高级定制西服袖口下隐藏的诡异割腕血痂与塞满拉丁文和宇宙几何的泛黄书卷",
      coreEn: "【Metonymy】Eerie cut-wrist scabs under bespoke suit cuffs; yellowing scrolls stuffed with Latin and cosmic geometry.",
      logic: "他们不屑于大自然的粗鄙或宗教的迷信。这是一种将高度理性的 M4（高精符号/数学计算）与最黑暗的 M6（恶魔呼唤）强行焊接的高端倒错。妄图把上帝方程化。",
      logicEn: "Disdains crude nature or religious superstition. An upscale perversion forcefully welding highly rational M4 (fine symbols/math) to the darkest M6 (demon calls). Trying to parse God into equations.",
      patch: {
        mechanics: "高维异端编译协议 + [现实伪装=完美斯文; 黑暗凝视值=极其狂热]",
        mechanicsEn: "High-D_Heresy_COMPILE + [Reality_Camouflage=Perfectly_Suave]",
        aesthetic: "英国老式豪宅的地下室、极其工整却内容病态的血书公式、滴管里精确刻度的黑色魔药、金边眼镜后近乎变态的专注。",
        aestheticEn: "Old English mansion basements, flawless but sick blood-formulas, pitch-black potions in precise pipettes, psychotic focus behind gold-rim frames.",
        runtime: "IF (完美计算出了一切但在阵法里少推算了一个零导致把自己翻转成了一颗高维肉球M6) THEN (永远被困在连死亡都不存在的几何监狱中抽搐)。",
        runtimeEn: "IF (Calculates_Perfectly_But_Misses_One_Zero_Inverting_Self_Into_A_High-D_Meatball_M6) THEN (Trapped twitching forever in a geometric prison without death)."
      }
    },
    {
      id: "televangelist",
      name: "电视布道家",
      nameEn: "Televangelist",
      def: "借助现代传媒将信仰彻底包装成金钱榨汁机的巨型神棍。",
      defEn: "Mega-charlatan using modern media to fully package faith into a cash-juicer.",
      core: "【换喻】刺眼的电视演播室大光灯与在千万绝症信徒前浮夸倒地假装的神迹",
      coreEn: "【Metonymy】Blinding TV studio lamps; exaggeratedly falling pretending miracles before millions of dying sheep.",
      logic: "M4 系统极为市侩与反叛的异生毒瘤。将最应该剥离物欲的神圣（M6向往）极度世俗化，直接变现为最狂暴的 M3（金钱雨与私人飞机）。核心全空，绝顶虚无。",
      logicEn: "Highly mercenary rebellious tumor of the M4 system. Translates divine yearning (M6) directly into the most furious M3 (Make-it-rain/Private jets). Hollow core, ultimate nihilism.",
      patch: {
        mechanics: "批量盲信变现协议 + [贪婪算法=无底洞; 表演浮夸度=极震慑级]",
        mechanicsEn: "Mass_Blind-Faith_LIQUIDATE + [Greed_Algorithm=Bottomless_Pit]",
        aesthetic: "发际线堪忧却梳理油光的高背头、汗如雨下却极其狂躁带有催眠感的大吼大叫、导播室后台冷血数钱的极其反差。",
        aestheticEn: "Worrisome but oil-slicked hairlines, profusely sweating yet hypnotically manic screaming, stark contrast of cold blooded cash-counting offstage.",
        runtime: "IF (在一次几千万人观看的直播骗局中被真正的天罚神雷M6将其私人波音飞机隔空劈成血雾齑粉) THEN (达成极富荒诞讽刺的黑色清算)。",
        runtimeEn: "IF (During_A_50Mil_Viewer_Live_Scam_A_True_Divine_Bolt_M6_Vaporizes_His_Private_Jet_Into_Blood-Mist) THEN (Achieves hyper-absurd ironic black reckoning)."
      }
    },
    {
      id: "paladin",
      name: "狂信骑士/圣教军",
      nameEn: "Paladin/Crusader",
      def: "将宗教教条化作物理斩骨刀的铁罐头，用极致的血肉厮杀捍卫虚无大他者的刽子手。",
      defEn: "Iron tin-cans turning dogma into physical bone-cleavers; executioners defending the null Big Other via mega-carnage.",
      core: "【换喻】沾满脑浆肉泥的沉重十字大剑与被绝对信仰洗脑后白炽如盲的眼神",
      coreEn: "【Metonymy】Heavy crusader-sword plastered with brain matter; incandescent blind eyes brainwashed by absolute faith.",
      logic: "M4（最高神权系统）的最强暴力 M5 代理端。因为必须执行极其残酷的异教徒大屠杀，他们必须将个体的恻隐之心 M1 绝对切除，用厚重的板甲将自己彻底焊死为一件兵器。",
      logicEn: "Strongest violent M5 proxy for M4 (Supreme Theocracy). Slices away M1 empathy to execute mass massacres, welding themselves strictly into metal weapons.",
      patch: {
        mechanics: "狂暴圣神屠杀协议 + [脑叶切割清洗=物理强制级; 坚硬壁垒=神圣无视痛楚]",
        mechanicsEn: "Berserk_Holy_SLAUGHTER + [Lobotomy_Wash=Forced]",
        aesthetic: "布满刀痕的极其厚重的巨大钢甲、泥泞血泊中依然高举且纹丝不动的圣旗、令人绝望的沉重机械踏步音。",
        aestheticEn: "Deeply scarred gigantic steel plates, holy flags held immobile amidst bloody mud, despair-inducing heavy mechanical stomps.",
        runtime: "IF (历经血战斩下终极大魔王的头颅后发现里面包裹的竟是真正的圣子降临M6) THEN (信仰与肉身在最高级的悖论中如恒星般瞬间坍塌自爆)。",
        runtimeEn: "IF (Beheading_Ultimate_Demon_King_Only_To_Find_The_True_Christ-Child_Inside_M6) THEN (Faith and flesh implode like a dying star in peak paradox)."
      }
    },
    {
      id: "flagellant",
      name: "鞭笞者",
      nameEn: "Flagellant",
      def: "游街串巷的恐怖病患，用残爆自己的肉身来平息神明虚妄怒火的癫狂代罪羊。",
      defEn: "Terror-patients roaming streets, crushing their own flesh to appease false godly wrath as mad scapegoats.",
      core: "【换喻】每一次甩动都撕下自己后背一片烂肉的倒刺皮鞭与染满鲜血走过的黑色石板路",
      coreEn: "【Metonymy】Barbed whips tearing a piece of own back-flesh every swing; bleeding traces on black cobblestone walks.",
      logic: "将人类的共业创伤 M1 强行通过极端损伤自己的 M2 本体来展示。这是一种极度暴露狂和自虐狂结合的倒错仪式，妄图用血肉去填平巨大的系统罪恶黑洞（虚空 M6）。",
      logicEn: "Forcibly displays collective trauma M1 via extreme self-damage to M2 flesh. Exibitionist-masochism perversion attempting to fill the system's sin-void (M6) with chopped meat.",
      patch: {
        mechanics: "血肉公开赎罪协议 + [痛觉屏蔽器=已损坏并长开刺激; 羞耻感=被狂热替代]",
        mechanicsEn: "Public_Flesh_ATONEMENT + [Pain_Shield=Broken_Spiking_Stimuli]",
        aesthetic: "背部完全被物理剥皮露出森森白骨与跳动的筋肉、狂热呆滞唱诵圣歌的干裂嘴唇、让旁观者极度生理不适的血腥味。",
        aestheticEn: "Back literally flayed to white bone and spasming muscles, dry lips chanting dull hymns, stench making bystanders viscerally vomit.",
        runtime: "IF (在自己活活打死自己前大声质问上天却依然得到的是万年的死寂M6时) THEN (在一场一无所有的虚无欺骗中如一条死狗般咽下最后一口血)。",
        runtimeEn: "IF (Screaming_To_Heaven_Before_Whipping_Self_To_Death_Met_With_Millennia_Of_Dead_Silence_M6) THEN (Swallows last mouthful of blood like a dead dog in a null scam)."
      }
    },
    {
      id: "mortician",
      name: "入殓师/防腐者",
      nameEn: "Mortician",
      def: "给静默的尸体涂上鲜活的颜色，在死界与生界最后边界化妆的冷面缝工。",
      defEn: "Applying vibrant color to silent corpses; cold-faced tailor applying makeup on the final life-death border.",
      core: "【换喻】用防腐剂填充空洞眼眶的巨大注射器和为惨白嘴唇涂上娇艳红色的化妆刷",
      coreEn: "【Metonymy】Giant syringes filling hollow orbits with embalming fluid; makeup brushes painting pale lips bright red.",
      logic: "他们是 M4（人类礼仪秩序）在死亡端（M6/绝对寂灭M2）的最后粉饰者。强制用极其刻板的伪造 M3（美丽与安详的外表）来掩盖 M2（腐烂溃败的物理真实）。",
      logicEn: "M4's final whitewashers at the death-end (M6 / Null M2). Forcibly uses fake M3 (beautiful/peaceful guise) to hide M2 (rotting physical collapse reality).",
      patch: {
        mechanics: "生命幻相定格协议 + [生死边界虚无感=深入骨髓; 孤独耐受=冥界级]",
        mechanicsEn: "Life_Illusion_FREEZE + [Border_Nihilism=Bone-Deep]",
        aesthetic: "充斥着福尔马林与浓烈花香混合的怪味排风扇、极其细柔但是冰冷的手指动作、深夜地下室停尸房里孤单的爵士乐。",
        aestheticEn: "Weird mix of formalin and heavy florist scent, ultra-soft but ice-cold finger strokes, lonely midnight jazz in the morgue.",
        runtime: "IF (在为因为自己疏忽而惨死的挚爱画出世上最完美的熟睡妆容后) THEN (自己也喝下整排剧毒防腐液躺进那个早早预留给自己的双人停尸柜)。",
        runtimeEn: "IF (Applying_The_Perfect_Sleep_Makeup_On_True_Love_Who_Died_By_Their_Neglect) THEN (Drinks row of embalming fluid and climbs into the pre-booked double mortuary drawer)."
      }
    }
  ]
};
