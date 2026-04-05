import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_E: LibraryCategoryDef = {
  id: "prof_art",
  name: "5. 艺术与表达 (Art & Expression)",
  nameEn: "Art & Expression",
  desc: "从彻底的创伤（M1）中提纯血肉，将其强行折叠入符号界（M4）或视觉景观（M3）。常在极限处滑向精神崩溃的死循环。",
  defEn: "Extracting flesh from absolute trauma (M1) to forcefully fold it into the Symbolic (M4) or visual spectacle (M3). Often sliding into loops of mental collapse at the edge.",
  items: [
    {
      id: "painter",
      name: "画家",
      nameEn: "Painter",
      def: "用涂料作为黏合剂，妄图覆盖真实界恐怖空洞的色彩疯子。",
      defEn: "Color-maniac using pigment as glue, attempting to paint over the terrifying void of the Real.",
      core: "【换喻】绝望撕裂的带血画布与染满颜料如严重皮癣的双手",
      coreEn: "【Metonymy】Desperately torn bloody canvases; hands stained with paint like severe psoriasis.",
      logic: "M1 视觉化外溢。他们对现实 M4 的伪善过敏，试图直接接触 M2（最粗糙的真实色块），往往因直视深渊过久而瞎掉或发疯。",
      logicEn: "M1 visual bleed. Allergic to M4 hypocrisy, attempting direct contact with M2 (crudest Real color-blocks), often going blind/mad from gazing too long.",
      patch: {
        mechanics: "创伤具象涂抹协议 + [现实失焦力=重度; 色彩妄想=极危]",
        mechanicsEn: "Trauma_SMEAR + [Reality_Out-of-focus=Severe]",
        aesthetic: "发酸的亚麻子油味、衣服上厚重结块的油彩、满地烟头、因极度亢奋而咬出血的下唇。",
        aestheticEn: "Sour linseed oil thick on clothes, cigarette butts, bleeding lower lips from manic biting.",
        runtime: "IF (画出生平最完美的一幅绝对杰作时发现画里的魔怪已实体化走到身后M5) THEN (挖出双眼塞入画布以求物理脱壳)。",
        runtimeEn: "IF (Paints_Ultimate_Masterpiece_Only_To_Find_The_Monster_Stand_Behind_Them_M5) THEN (Gouges own eyes out to physically fuse into the canvas)."
      }
    },
    {
      id: "writer",
      name: "小说家/作家",
      nameEn: "Writer",
      def: "被文字符号反噬的囚徒，靠绞碎身边人的真实生活熬制虚构世界。",
      defEn: "Prisoner devoured by text-symbols, grinding the real lives of loved ones to brew fictional worlds.",
      core: "【换喻】浸泡在烟灰缸里的墨水笔与堆叠成物理迷宫的废弃草稿",
      coreEn: "【Metonymy】Fountain pens drowning in ashtrays; discarded drafts forming physical labyrinths.",
      logic: "高度沉迷 M4（文字大他者）。为了捕捉极端的 M1（绝望/狂喜），不惜像吸血鬼一样榨干亲友的 M2，最终自己也被文字迷宫彻底吞噬失去真实形体。",
      logicEn: "High addiction to M4 (Text Big Other). To capture extreme M1, vampirically drains M2 from loved ones, terminally swallowed by the text labyrinth losing real form.",
      patch: {
        mechanics: "虚构寄生协议 + [文字吞噬=逆增殖; 睡眠节律=完全破坏]",
        mechanicsEn: "Fiction_PARASITE + [Text_Devour=Inverse_Proliferation]",
        aesthetic: "凌乱黑眼圈、打字机冰冷清脆的断头台般落键声、纸张锋利边缘割破的指尖、酒瓶。",
        aestheticEn: "Messy eye bags, guillotine-like typewriter clatter, paper-cut fingertips, liquor bottles.",
        runtime: "IF (发现自己其实是另一高维作家笔下痛不欲生的残缺草稿人物M6) THEN (用剪刀剪断自己的喉管以反抗不续写)。",
        runtimeEn: "IF (Discovers_Self_Is_Merely_A_Tortured_Draft_Character_By_Higher-D_Writer_M6) THEN (Scissor-cuts own throat to abort the plot)."
      }
    },
    {
      id: "musician",
      name: "器乐家",
      nameEn: "Musician",
      def: "依靠高频率震动强行接入人类非理性神经的听觉暴君。",
      defEn: "Auditory tyrant force-hacking human irrational nerves via high-frequency vibrations.",
      core: "【换喻】琴弦上勒出的深切血痕与可以砸碎一切文明的狂躁音箱",
      coreEn: "【Metonymy】Deep bloody grooves on strings; manic amps capable of shattering all civilization.",
      logic: "越过 M4（语言规则）的束缚，直接通过 M5（物理声波暴力）震撼甚至摧毁他人的 M1。极致时会引发大规模的集体无意识狂乱状态（M1群体共振）。",
      logicEn: "Bypasses M4 (Language), using M5 (Sonic physical violence) to drop-shock M1. At peak, incites mass collective unconscious frenzy.",
      patch: {
        mechanics: "声学裂脑协议 + [情绪穿透波=致命级; 耳膜抗压=异常]",
        mechanicsEn: "Acoustic_Brain-Split + [Emotion_Pierce=Lethal]",
        aesthetic: "断裂的琴弦、震耳欲聋的回授底噪、被汗水完全浸透的演出服、瞳孔放大。",
        aestheticEn: "Snapped strings, deafening feedback noise, sweat-drenched clothes, dilated pupils.",
        runtime: "IF (演奏出足以治愈世界创伤的终极和弦时却引发了在场几万人的集体自尽M6) THEN (随耳膜爆裂而彻底化为无声的虚无厉鬼)。",
        runtimeEn: "IF (Ultimate_Healing_Chord_Accidentally_Triggers_Mass_Suicide_Of_50K_Audience_M6) THEN (Bursts own eardrums fading into a silent null ghost)."
      }
    },
    {
      id: "actor",
      name: "演员",
      nameEn: "Actor",
      def: "多重人格的容器，将肉身绝对让渡给他者的变色爬虫。",
      defEn: "Vessel of multiple personalities; color-shifting reptile absolutely surrendering flesh to the Other.",
      core: "【换喻】撕不下来的面具皮肉与化妆镜中不属于自己的陌生眼珠",
      coreEn: "【Metonymy】Un-peelable skin masks; alien eyeballs staring back from makeup mirrors.",
      logic: "本体 M1 被极度抽空。强行将借来的 M4 角色设定写入自己的 M2 肉体中。在聚光灯（M3极化崇拜）下，他们没有真我，只有无数借来的亡魂的拼图。",
      logicEn: "Ontological M1 completely vacuumed. Force-writes borrowed M4 personas into M2 flesh. Under spotlight M3, they have no true self, only mosaics of borrowed ghosts.",
      patch: {
        mechanics: "人格夺舍协议 + [本体真空化=极度; 镜像同化=暴走]",
        mechanicsEn: "Persona_HIJACK + [Ontological_Vacuum=Extreme]",
        aesthetic: "极度厚重浮夸的戏服、台下的全身发抖、瞬间从痛哭转为极其冷酷的病态翻脸。",
        aestheticEn: "Heavy exaggerated costumes, off-stage trembling, sick flips from deep sobbing to dead-cold calm.",
        runtime: "IF (入戏太深彻底分不清虚构与真实，一刀斩首了现实中最爱的人当做杀青戏M5) THEN (灵魂永远卡死在永不落幕的聚光灯刑架上)。",
        runtimeEn: "IF (Method_Acting_Breaks_Reality_Beheading_True_Love_As_A_Finale_Scene_M5) THEN (Soul permanently stuck on a spotlight crucifixion ever-rolling)."
      }
    },
    {
      id: "dancer",
      name: "舞者",
      nameEn: "Dancer",
      def: "用极致的疼痛控制重力，试图折断肉体凡胎以实现骨骼飞升的狂信徒。",
      defEn: "Gravity-controller via ultimate pain; fanatic snapping mortal flesh to achieve skeletal ascension.",
      core: "【换喻】缠满绷带还在渗血的足尖与对抗物理维度的非人滞空悬停",
      coreEn: "【Metonymy】Bleeding toes wrapped in tight bandages; inhuman airborne hovers defying physics.",
      logic: "M2 肉体的终极暴君。用非人的 M4（严酷动作法则）强制剥削本体的 M1（痛觉与疲惫）。将舞蹈化为一种对地心引力与衰老的傲慢暴力（M5）。",
      logicEn: "Ultimate tyrant of M2 flesh. Uses harsh M4 choreo-laws to exploit M1 pain. Dance becomes arrogant violence (M5) against gravity and aging.",
      patch: {
        mechanics: "肉体违建协议 + [痛觉快感错位=100%; 关节磨损=透支期]",
        mechanicsEn: "Flesh_Anti-Physics_LAW + [Pain-Pleasure_Inversion=100%]",
        aesthetic: "恐怖畸形却又绝美的脚趾、滴落在干硬木地板上的汗珠与血迹、如紧绷钢丝般的大腿肌肉。",
        aestheticEn: "Terrifyingly deformed yet beautiful toes, sweat/blood dripping on hardwood, wire-tight thigh muscles.",
        runtime: "IF (为了完成世界最高难度的神级旋舞当场双腿粉碎性骨折刺穿动脉而死) THEN (在大他者的极度惊叹中化作最血腥绝伦的M3供品)。",
        runtimeEn: "IF (Completing_God-Tier_Spin_Causes_Legs_Shattering_And_Artery_Puncture_Death_On_Stage) THEN (Becomes the ultimate bloody M3 sacrifice amidst Big Other's awe)."
      }
    },
    {
      id: "photographer",
      name: "摄影师",
      nameEn: "Photographer",
      def: "盗窃时间的窥视者，用快门声截断生命连续性的视觉暴徒。",
      defEn: "Peeping thief of time; visual thug severing life's continuity with shutter clicks.",
      core: "【换喻】如黑色枪管般的长焦镜头与在暗房红光里慢慢浮现出的吊死尸体相片",
      coreEn: "【Metonymy】Telephoto lenses like black gun barrels; hanging corpse photos emerging in darkroom red lights.",
      logic: "镜头作为绝对隔离的 M4 面罩。为了极品 M3 构图，强行切割对周遭苦难的同理心（M1）。快门如同开枪，将活生生的 M2 剥制为二维冰冷的标本。",
      logicEn: "Lens as M4 isolation mask. For ultimate M3 framing, slices off M1 empathy for surrounding suffering. The shutter is a gunshot taxidermying M2 into 2D cold specimens.",
      patch: {
        mechanics: "时间剥制标本协议 + [道德干预力=完全隔绝; 视觉捕猎欲=MAX]",
        mechanicsEn: "Temporal_TAXIDERMY + [Moral_Intervention=Fully_Isolated]",
        aesthetic: "沉重的相机背带勒痕、单眼紧闭的病态抽搐、暗房刺鼻的显影药水味、满墙他人灾厄。",
        aestheticEn: "Strap-bruised necks, sick twitching of the closed eye, pungent darkroom chemicals, walls of others' dooms.",
        runtime: "IF (在战地为了拍出绝世名作眼睁睁看着一名无辜孤儿被炸成碎片且不施援手) THEN (被自己定格下的极度罪恶双眼在每一张底片里永无止境地注视着发狂)。",
        runtimeEn: "IF (Watches_Orphan_Blown_Up_Just_To_Capture_The_Masterpiece_Frame_Without_Helping) THEN (Driven mad by the victim's glaring eyes locked in every future negative)."
      }
    },
    {
      id: "poet",
      name: "诗人",
      nameEn: "Poet",
      def: "对寻常语汇进行高压粉碎，妄图用词语燃烧现实界的绝望纵火犯。",
      defEn: "High-pressure pulverizer of mundane vocabulary; despairing arsonist trying to burn the Real with words.",
      core: "【换喻】肺痨般咳出的猩红词句与用酒瓶渣割腕换取的绝对灵感",
      coreEn: "【Metonymy】Scarlet verses coughed up like TB blood; ultimate inspiration traded via bottle-shard wrist-cuts.",
      logic: "最深度的 M4 叛逆者。他们破坏大他者的语法规则，挤压词汇的致幻缝隙来强行提取最深层的 M1 痛苦。往往早夭，无法在沉重的 M2 物质界长存。",
      logicEn: "Deepest M4 rebel. Demolishes Big Other syntax, squeezing hallucinatory word-gaps to extract core M1 agony. Often dies young, unable to survive heavy M2 matter.",
      patch: {
        mechanics: "语法高压爆散协议 + [物质重力抗性=极差; 幻象引爆力=核弹级]",
        mechanicsEn: "Syntax_BOMBING + [Material_Gravity_Resist=Pathetic]",
        aesthetic: "极其凌乱的出租屋、满溢的烟灰缸、极其瘦削苍白的颧骨、嘴里无声喃喃自语的虚空凝视。",
        aestheticEn: "Chaotic cheap flats, spilling ashtrays, extreme pale gaunt cheekbones, silent mutters into void gaps.",
        runtime: "IF (穷尽一生终于找出了那个能直接呼唤上帝现身的真名却发现上帝是一个无解怨灵M6) THEN (引火自焚，将自己烧成最后一句未完成的短诗)。",
        runtimeEn: "IF (Finds_The_True_Word_To_Summon_God_But_Discovers_He_Is_An_Unsolvable_Wraith_M6) THEN (Self-immolates into the final unfinished stanza)."
      }
    },
    {
      id: "sculptor",
      name: "雕塑家",
      nameEn: "Sculptor",
      def: "沉迷于剥除多余物质从而释放灵魂的偏执石匠，肉体与岩石的角力者。",
      defEn: "Paranoid mason obsessed with peeling excess matter to free souls; wrestler between flesh and rock.",
      core: "【换喻】金属凿子敲击大理石崩出的火星与被石粉掩埋到窒息的艺术家口鼻",
      coreEn: "【Metonymy】Sparks from chisels on marble; artist's nose/mouth buried to suffocation in stone dust.",
      logic: "强烈的 M5 物理输出与 M4（柏拉图式完美形式）的嵌合体。极端的 M2（坚硬顽石）抗拒，使雕塑等同于一场与神的殊死肉搏，耗尽艺术家的血肉换取永恒的 M3 相貌。",
      logicEn: "Chimera of M5 physical output and M4 perfect forms. Extreme resistance from M2 hard stone makes sculpting a death match with God, draining flesh for eternal M3 forms.",
      patch: {
        mechanics: "骨肉化石置换协议 + [体力流失=瀑布级; 形体洁癖=变态畸高]",
        mechanicsEn: "Flesh-Stone_EXCHANGE + [Stamina_Drain=Waterfall]",
        aesthetic: "满屋子没有眼睛的雪白石膏像、手臂上粗壮爆出的青筋、敲击凿子的无情重音、肺部的严重尘肺病咳血。",
        aestheticEn: "Rooms of eyeless white busts, bulging arm veins, ruthless chisel smashes, severe silicosis blood-coughs.",
        runtime: "IF (因极度迷恋自己的终极女体雕像而切下自己身上的血肉贴补上去M1/M2) THEN (与生硬的死物在精神上结连完成病态封神)。",
        runtimeEn: "IF (Obsessively_Slicing_Own_Flesh_To_Patch_The_Ultimate_Female_Statue_M1_M2) THEN (Mentally weds the cold dead thing in morbid apotheosis)."
      }
    },
    {
      id: "singer",
      name: "歌手/歌唱家",
      nameEn: "Singer",
      def: "将声带作为献祭品，在空气中撕扯众人心脏的塞壬海妖。",
      defEn: "Sacrificing vocal cords to tear at public hearts in the air; the Siren.",
      core: "【换喻】飙入超高音时充血的颈部血管与被万众狂迷的泪水淹没的华丽长裙",
      coreEn: "【Metonymy】Congested neck veins hitting altissimo; gorgeous gowns drowned in mass fanatic tears.",
      logic: "用肉体的极限器官（M2声带）冲破语言的单调（M4），诱发海量受众的 M3 集体狂热崇拜。处于被过度凝视与消费的高压靶心。",
      logicEn: "Uses limit-tier organs (M2 vocal cords) to pierce language M4, inducing mass M3 fanatic cult worship. Target of hyper-gaze and consumption.",
      patch: {
        mechanics: "声学膜拜催眠协议 + [自我异化感=重度警报; 集体情绪牵引=航母级]",
        mechanicsEn: "Acoustic_Cult_HYPNOSIS + [Self_Alienation=Severe_Alarm]",
        aesthetic: "舞台追光下浮夸的冷汗、昂贵立式麦克风、玻璃杯被无死角高音震碎的惊栗感、后台的绝对死寂崩溃。",
        aestheticEn: "Exaggerated cold sweat under spotlights, pricey mic stands, glass-shattering altissimo thrills, absolute dead-silent breakdowns backstage.",
        runtime: "IF (在容纳百万人的世纪演唱会上失声瘫倒，粉丝发现她只是一副设定好的伪劣人偶) THEN (被狂暴的集体粉碎践踏为烂泥M5)。",
        runtimeEn: "IF (Losing_Voice_At_Century_Mega-Concert_Revealing_She_Is_A_Defective_Doll) THEN (Trampled to flesh-mud by frenzied mass M5)."
      }
    },
    {
      id: "composer",
      name: "作曲家",
      nameEn: "Composer",
      def: "玩弄数学与情绪的暗室建筑师，以五线谱编织绞杀灵魂的无形绞索。",
      defEn: "Dark-room architect of math and emotions; weaving invisible gallows for souls via staves.",
      core: "【换喻】琴键边缘滴落的冷汗与五线谱上如蚂蚁般吞噬理智的黑色音符",
      coreEn: "【Metonymy】Cold sweat dripping off piano keys; black notes eating sanity like ants on staves.",
      logic: "M4 系统最神秘的变种——音乐逻辑。他们是构建声学 M4 迷宫的人，不用物理碰触，便能将致命的 M1 忧郁或狂喜代码植入千万人的脑海。",
      logicEn: "Most occult variant of M4 - musical logic. Builders of acoustic labyrinths, implanting lethal M1 melancholia or ecstasy codes into millions without physical touch.",
      patch: {
        mechanics: "潜意识重编协议 + [神经元感染力=超量病原体; 日常社交=极度退化]",
        mechanicsEn: "Subconscious_REWRITE + [Neuron_Infection=Pathogen_Max]",
        aesthetic: "满地涂改的揉烂乐谱纸、疯狂敲打钢琴引发的断指血迹、对日常噪音极其病态且易怒的过敏。",
        aestheticEn: "Balled up revised scores, blood on piano keys from mad slamming, manic hypersensitivity to normal noise.",
        runtime: "IF (写出了一段真正的完美圣乐却发现听到它的人都会面带诡异微笑彻底停跳心脏M6) THEN (把自己关在密室里作为唯一听众按下了播放键)。",
        runtimeEn: "IF (Composes_The_Perfect_Holy_Movement_That_Smoothly_Stops_All_Hearers_Hearts_M6) THEN (Locks self inside to press play as the final audience)."
      }
    },
    {
      id: "illusionist",
      name: "魔术师/幻术师",
      nameEn: "Illusionist",
      def: "公然嘲讽物理常识的优雅骗子，靠高精机械与视距欺骗制造神迹。",
      defEn: "Elegant liars openly mocking physics, forging miracles via high-precision gears and optics.",
      core: "【换喻】飞转的纸牌割破真实界的咽喉与水箱魔术中真实的濒死窒息",
      coreEn: "【Metonymy】Spinning cards slitting the Real's throat; genuine near-death choking in water tanks.",
      logic: "M3（视觉奇观）的高维操控者。通过极其严密的 M4 暗扣逻辑去欺负普通人的视觉盲区。在不断叠加危险阈值的表演中，常常逼近真正致命的 M6 深渊。",
      logicEn: "High-D manipulators of M3 (Spectacle). Uses extreme tight M4 hidden logic to bully normal blind spots. Continually upping danger thresholds pushes them close to fatal M6 depths.",
      patch: {
        mechanics: "大他者致盲协议 + [生死线游走依赖=晚期重度; 常识解构力=魔法级]",
        mechanicsEn: "Big_Other_BLINDING + [Death-Line_Addiction=Terminal]",
        aesthetic: "华丽燕尾服内藏满的锋利机关、幽暗水箱冒出的最后气泡、飞舞的白鸽与血红布幔的极度反差。",
        aestheticEn: "Tuxedos hiding sharp mechanics, final bubbles in dark water tanks, stark contrast of white doves against blood-red drapes.",
        runtime: "IF (在最盛大的致命逃脱秀中机械突然卡死真的迎来了死亡审判M5而非魔术) THEN (在掌声雷动中露出此生第一次真实扭曲的极度惨叫面临被肢解溺毙)。",
        runtimeEn: "IF (Mechanics_Jam_During_Ultimate_Escape_Bringing_True_M5_Death_Execution) THEN (Utters first genuine twisted shriek of life as they are dismembered/drowned amidst roaring applause)."
      }
    },
    {
      id: "fashion_designer",
      name: "时装设计师",
      nameEn: "Fashion Designer",
      def: "以布料和缝带束缚并重新物化躯体的畸形剪裁狂人。",
      defEn: "Deformed tailoring manic binding and re-objectifying bodies with fabric and thread.",
      core: "【换喻】勒紧皮质束腰的窒息感与满地华丽而残缺的人体模特残肢",
      coreEn: "【Metonymy】Suffocation of corset leathers; scattered gorgeous yet amputated mannequin limbs.",
      logic: "M3（消费凝视）的登峰造极者。用偏执的 M4 美学法则粗暴强加于模特的 M2 肉体，通过极其不适与束缚的物理暴力折跃出震撼的病态美感。",
      logicEn: "Ultimate purveyor of M3 (Consumer Gaze). Brutally forces paranoid M4 aesthetic laws onto models' M2 flesh, warping intense physical discomfort into shocking morbid beauty.",
      patch: {
        mechanics: "躯体异化包裹协议 + [形态强迫症=满级压制; 温度感应=极冷无情]",
        mechanicsEn: "Flesh_Alienation_WRAP + [Form_OCD=MAX_Oppress]",
        aesthetic: "满口衔着的大头针、闪光灯下极其干瘦苍白的模特、重金属与柔顺皮草结合的诡异违和感。",
        aestheticEn: "Mouths full of pins, impossibly gaunt pale models under strobes, eerie clash of heavy metal and soft fur.",
        runtime: "IF (对完美线条的追逐导致将数名超模物理切切实实削骨截肢只为套上终极的秀服) THEN (在T台上展示极致死亡美学而被大他者永久绞杀M6)。",
        runtimeEn: "IF (Chasing_Perfect_Lines_Leads_To_Literal_Surgical_Amputation_Of_Supermodels_For_The_Ultimate_Dress) THEN (Displays pinnacle death-aesthetic on runway before M6 Big Other extinguishes them)."
      }
    },
    {
      id: "tattoo_artist",
      name: "纹身师",
      nameEn: "Tattoo Artist",
      def: "用浸血的细针在人类最大器官上雕刻图腾的巫医变体。",
      defEn: "Witch-doctor-variant carving totems into humanity's largest organ via blood-soaked needles.",
      core: "【换喻】马达嗡嗡作响的钻心剧痛与洗不掉的深层皮下原罪",
      coreEn: "【Metonymy】Buzzing motors bringing piercing pain; indelible deep sub-dermal original sin.",
      logic: "强物理刺入（M5）结合宗教/世俗符号（M4）。通过带来直接灼痛的 M2 肉体创伤，强行把隐秘的 M1 烙印为永恒无法抹去的视觉宣告 M3。",
      logicEn: "Hard physical insertion M5 fusing with religious/secular signs M4. Uses burning M2 flesh trauma to brand secret M1 griefs into eternal visual M3 declarations.",
      patch: {
        mechanics: "皮肉铭刻协议 + [痛感共生=麻木依赖; 符号嵌入深=融骨级]",
        mechanicsEn: "Flesh_ENGRAVE + [Pain_Symbiosis=Numb_Addiction]",
        aesthetic: "高频震动的机器针头、擦去渗血绿藻皂的泡沫泡沫、皮肤大面积充血发红与黑绿墨水的强烈交错。",
        aestheticEn: "High-freq vibrating needles, green soap foam wiping beads of blood, massive hyperemic red skin contrasting dark green ink.",
        runtime: "IF (为了完成一件超越神魔的背部满刺，失控将顾客直接刺穿内出血而死成为了人皮唐卡M5) THEN (完成自我艺术邪教化加冕)。",
        runtimeEn: "IF (To_Finish_God-Demon_Back_Piece_Loses_Control_Piercing_Client_To_Bleed_Out_Into_Human-Leather_Thangka_M5) THEN (Crowned in self-art-cultism)."
      }
    },
    {
      id: "critic",
      name: "评论家/影评人",
      nameEn: "Critic",
      def: "手持显微镜挑剔残缺、用毒舌寄生于伟大造物的吸血蜱虫。",
      defEn: "Nit-picking under microscopes; vampiric ticks parasitizing great creations via poisoned tongues.",
      core: "【换喻】沾满剧毒口水的无情钢笔与将炽热的心脏放在秤上估值的冰冷眼镜",
      coreEn: "【Metonymy】Ruthless pens soaked in toxic saliva; cold glasses appraising a beating heart on scales.",
      logic: "本体是一个毫无创造力 M1 的极度空洞。唯一的存在意义是借用 M4（严苛审美逻辑）对他人泣血完成的 M3（艺术造物）进行解体和剥削估价。极致的傲慢与阳痿。",
      logicEn: "Ontologically a void lacking M1 creation. Meaning comes solely from using tight M4 logic to dismantle and price-tag others' blood-wept M3 items. Extreme arrogance and impotence.",
      patch: {
        mechanics: "话语解构吸血协议 + [文本施虐狂=超高; 实体创造=全盘坏死]",
        mechanicsEn: "Discourse_Deconstruct_VAMPIRE + [Textual_Sadism=High]",
        aesthetic: "极其尖酸刻薄的薄嘴唇、名利场酒会边缘不怀好意的冷笑、一纸短文引发的巨星陨落旋涡。",
        aestheticEn: "Extremely acidic thin lips, malicious sneers at the edge of vanity galas, short columns causing supernovas to crash.",
        runtime: "IF (因极尽恶毒毁掉了一名天才导致其自杀，却在死者的绝密遗作中发现了完美到令自己眼瞎的神迹) THEN (在极度的自我厌恶与后悔中咬断那根毒气长舌M6)。",
        runtimeEn: "IF (Acidic_Hit-Piece_Causes_Genius_Suicide_Only_To_Find_Ultimate_Cure_For_Blindness_In_Their_Secret_Last_Work) THEN (Bites off own toxic tongue in absolute M6 self-disgust)."
      }
    },
    {
      id: "makeup_artist",
      name: "特效化妆师",
      nameEn: "SFX Makeup",
      def: "扭曲皮相的物理捏造者，能将活人瞬间拉入地狱绘卷的倒错魔物。",
      defEn: "Physical fabricator of warped skins; perverse demon dragging living men into hell-scrolls instantly.",
      core: "【换喻】发臭硅胶倒模中被剥夺的面目与黏糊胶乳里涌出的虚假尸斑",
      coreEn: "【Metonymy】Stolen faces inside foul silicon molds; fake livor mortis seeping from sticky latex.",
      logic: "对人类 M2 肉体的极度亵渎（视觉降解）。用外在粘合的恶心工业材料（M5）制造完全乱真的伤口与碎块（M6的伪装），打破受众对完整肉身的 M3 幻觉。",
      logicEn: "Extreme desecration of M2 flesh via visual decay. Uses external sticky industrial chemo-materials M5 to forge hyper-real wounds (M6 fakes), shattering M3 illusions of body-integrity.",
      patch: {
        mechanics: "皮肉倒模黏合协议 + [生理恶心感=完全阻断; 毁容嗜好=日渐失控]",
        mechanicsEn: "Flesh_Mold_GLUE + [Physio_Nausea=Fully_Blocked]",
        aesthetic: "满屋子滴血的人头模型残肢、刮刀与血浆混合物、令人作呕的溶剂气味、被异化的扭曲眼角。",
        aestheticEn: "Rooms of dripping severed head molds, spatulas mixed with fake blood, nauseating solvent stenches, twisted alienated eye corners.",
        runtime: "IF (太迷恋于自己创造的惊悚尸妆而趁主角睡着时真正将其眼皮缝死M5并剥皮) THEN (物理世界与道具逻辑彻底熔断混淆堕入疯魔)。",
        runtimeEn: "IF (Too_Obsessed_With_Gore_Makeup_Actually_Sewing_Sleeping_Lead's_Eyelids_And_Flaying_Them_M5) THEN (Meltdown of prop-logic vs Real reality into absolute madness)."
      }
    }
  ]
};
