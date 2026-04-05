import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_H: LibraryCategoryDef = {
  id: "era_future",
  name: "08. 未来与科幻 (Future & Sci-Fi)",
  desc: "奇点降临。人类超越肉体限制，或跌入技术的深渊。新的造物主与旧的人性之间的终极较量。",
  items: [
    {
      id: "twenty_min_future_logic",
      name: "二十分钟后", nameEn: "Ultra-Near Future",
      def: "几乎和现在一样。某项日常技术(如外卖/择偶)被算法绝对化。黑镜风。",
      defEn: "Almost like now. A daily tech (delivery/dating) absolutized by algo. Black Mirror style.",
      core: "恐怖谷效应。因离现实太近，理性的微小扭曲更不寒而栗。 | 锚定 ($): M4 评分终端 (Rating_Terminal)",
      coreEn: "Uncanny valley. Proximity to reality makes rational tiny-twists more chilling. | Anchor ($): M4 Rating_Terminal",
      logic: "【日常API的致命越权】：大他者（科技公司/系统）不需要核弹来毁灭人类，只需要将“点赞”或“信用分”的权重稍微调高1%。人类的自恋与从众心理立刻将微小的技术迭代转换为恐怖的完美极权。它讲述的是“平庸之恶的算法化”。",
      logicEn: "[Lethal Overflow of Daily API]: Other (Tech Corp/Sys) needs no nukes to destroy us, just bumping 'Likes' or 'Credit Score' weight by 1%. Human narc & herd-mentality instantly convert tiny tech-iter to horrific perfect-totalitarian. It's 'Algorithm of Banality of Evil'.",
      patch: {
          mechanics: "微元变量放大器 + [生活相似度 = 99%; 荒谬感 = 绝对合乎逻辑; 极权实现 = 自愿安装]",
          mechanicsEn: "Micro-Var_Amplifier + [Life_Similarity = 99%; Absurd_Sense = Perfectly_Logical; Totalitarian = Voluntarily_Installed]",
          aesthetic: "极简的白色公寓里，主角对着一面永远在跳动评分数字的智能镜子，练习一个能增加0.1分的完美微笑。",
          aestheticEn: "Minimalist white apt, MC practices a perfect smile to gain +0.1 score in front of a smart mirror with ticking rating nums.",
          runtime: "IF (发现自己因为没在朋友圈给老板点赞而被自动降低了乘车优先级) THEN (触发：被冰冷算法卡死的窒息感)",
          runtimeEn: "IF (Finding ride priority auto-lowered for not liking CEO's post) THEN (Trigger: Suffocation of being deadlocked by cold algo)"
      }
    },
    {
      id: "cyberpunk_neon_rain",
      name: "经典赛博", nameEn: "Cyberpunk",
      def: "高科技低生活。义体改造。企业统治。垃圾山与全息投影。数据作为新毒品。",
      defEn: "High tech low life. Cyberwares. Corp rule. Trash mountains & holograms. Data as new drug.",
      core: "肉体的贬值。灵魂被编码，贫富演化为物种差距，底层的反抗。 | 锚定 ($): M1 霓虹义眼 (Neon_Cyber_Eye)",
      coreEn: "Devalue of flesh. Souls coded, wealth gap evos into species gap. Base-layer rebel. | Anchor ($): M1 Neon_Cyber_Eye",
      logic: "【资本主义引擎的超频烧毁】：国家大他者死亡，让位于彻底贪婪的企业超级大他者。人类身体被降级为“可插拔的外设面板（义体）”，记忆和情感变成了可交易的区块链数据。在绝对阶级固化的垂直城市里，黑客是唯一能利用系统漏洞（Glitch）进行物理和数字双重刺杀的罗宾汉。",
      logicEn: "[Overclock Burn of Capitalism Engine]: Nation-Other dies, yielding to greedy Corp Super-Other. Human body downgraded to 'Pluggable Peripherals (Cyberware)', memory/feelings turn to tradable blockchain data. In absolute vertically-stratified cities, hackers are the sole Robin Hoods exploiting Sys-Glitches for dual phys/digital assassinations.",
      patch: {
          mechanics: "肉体外包数据化 + [企业垄断 = 100%; 生命廉价度 = 一组神经元的价格; 天空颜色 = 电视雪花点]",
          mechanicsEn: "Flesh_Outsource_Datatize + [Corp_Monopoly = 100%; Life_Cheapness = Price_of_Neuron_Mod; Sky_Color = TV_Static]",
          aesthetic: "酸雨连绵的深渊街头，闪烁的巨型虚拟女偶像全息图下，一个装戴着劣质机械手臂的黑客在吃吃拉面。",
          aestheticEn: "Acid-rain abyss street, under glowing giant virtual idol holo, a hacker w/ cheap mech-arm eats ramen.",
          runtime: "IF (将一根沾着血霜的数据线插入后脑的接口) THEN (触发：在疼痛中体验到思维瞬间连接无限网络的赛博高潮)",
          runtimeEn: "IF (Plugging a blood-frosty data cord into back-of-head port) THEN (Trigger: Painfully experiencing the cyber-climax of mind hooking to infinite net)"
      }
    },
    {
      id: "biopunk_flesh_tech",
      name: "生化朋克", nameEn: "Biopunk",
      def: "基因编辑。肉体作为载体。建筑和机器都是活体生物。粘液与血管。",
      defEn: "Gen-Edit. Flesh as host. Arch & machines are living orgs. Slime & veins.",
      core: "自然的亵渎。生命失去了神圣性，成为了可随意裁剪的廉价耗材。 | 锚定 ($): M3 脉动墙壁 (Pulsing_Wall)",
      coreEn: "Blasphemy of Nature. Life loses sanctity, becomes cheap dissectible material. | Anchor ($): M3 Pulsing_Wall",
      logic: "【生物代码的神级覆写】：不再用硅基，而是由碳基组成技术的主板。DNA序列像开源代码一样被随意Fork和Commit。大他者（伦理委员会）彻底崩溃。造物主与被造物的界限被恶心的粘液融合：当你使用的手枪是一把会哀嚎的活体肌肉时，杀戮也变成了一种病态的交配。",
      logicEn: "[God-Tier Override of Bio-Code]: Tech-board isn't silicon, but carbon. DNA sequences are arbitrarily Forked/Committed like open source. Other (Ethics Board) collapses entirely. Creator/Created boundary fuses in gross slime: when your pistol is a wailing living muscle, killing becomes a morbid mating.",
      patch: {
          mechanics: "有机体开源协议 + [伦理界限 = 溶解; 工具器械 = 具有痛觉系统; 视觉质感 = 极度黏稠]",
          mechanicsEn: "Organic_Open_Source_Proto + [Ethic_Bound = Dissolved; Tools = Has_Pain_System; Vis_Texture = Ultra_Viscous]",
          aesthetic: "阴暗的地下诊所，一台由内脏和发光真菌组成的生物终端正通过脐带连接到一个人的脊椎上。",
          aestheticEn: "Dark underground clinic. A bio-terminal made of viscera & glowing fungi connects via umbilical to a person's spine.",
          runtime: "IF (给自己的生物枪喂食一块生肉，感到枪身上血管的欢快跳动) THEN (触发：对活着定义感到极其恶心却又无法割舍的异界共生感)",
          runtimeEn: "IF (Feeding raw meat to bio-gun, feeling veins pulse happily on its body) THEN (Trigger: Peak disgust toward def of 'living' yet unable to sever this xeno-symbiosis)"
      }
    },
    {
      id: "post_apoc_rust",
      name: "废土辐射", nameEn: "The Wasteland",
      def: "文明毁灭。资源匮乏。部落法则。拾荒。旧文明骸骨作新神。",
      defEn: "Civ destroyed. Rare resources. Tribal law. Scavenge. Old civ bones as new gods.",
      core: "道德的倒退。在极度生存压迫下，人类重新建立暴力“文明”。 | 锚定 ($): M2 辐射可乐 (Rad_Cola)",
      coreEn: "Moral regression. Under extreme survive-pressure, human rebuilds violent 'civ'. | Anchor ($): M2 Rad_Cola",
      logic: "【系统硬重启的碎片状态】：由于核战或灾变，地球服务器执行了粗暴的Format。旧世界（摩天大楼、互联网）沦为充满辐射的废弃缓存（遗迹）。由于资源掉落率极低，主体被迫放弃所有高级道德协议，退回弱肉强食的原始算法。一个旧汽车轮胎在这里可能成为一个新拜物教的图腾。",
      logicEn: "[Sharded State of Sys Hard Restart]: Due to nukes/cataclysm, Earth-sys did a brutal Format. Old world (skyscrapers, net) became rad-filled abandoned cache (ruins). W/ drop-rates near zero, subject is forced to drop all high-moral protocols, regressing to primal Law of Jungle. An old car tire can become a new fetish totem here.",
      patch: {
          mechanics: "高危低回报末日引擎 + [物资稀缺度 = 99%; 暴力合法化 = 默认开启; 遗体崇拜 = 电视机神怪]",
          mechanicsEn: "High-Risk_Low-Reward_Doom_Engine + [Resource_Scarcity = 99%; Violence_Legal = Default_On; Relic_Worship = TV_Gods]",
          aesthetic: "风沙漫卷的沙漠公路上，一辆焊满生锈尖刺和人类头骨的改装肌肉车咆哮而过。",
          aestheticEn: "Sand-stormy desert highway. A modded muscle car welded w/ rusty spikes & human skulls roars past.",
          runtime: "IF (为了抢夺半瓶变质的瓶装水而不得不用撬棍敲碎邻居的头骨) THEN (触发：人类为了活着可以多快褪去“人”这一伪装的深深悚然)",
          runtimeEn: "IF (Forced to crowbar a neighbor's skull to loot half a bottle of stale water) THEN (Trigger: Deep horror of how fast humans shed the 'human' disguise just to survive)"
      }
    },
    {
      id: "galactic_empire_opera",
      name: "星际帝国", nameEn: "Galactic Empire",
      def: "跨星系的庞大架构。皇帝。超光速。宏大尺度。古典悲剧的星际重演。",
      defEn: "Multi-galaxy huge arch. Emperor. FTL. Mega scale. Classic tragedy rerun in stars.",
      core: "尺度的虚无。在光年级别的距离面前，个人的挣扎显得崇高且微不足道。 | 锚定 ($): M6 歼星舰队 (Star_Killer_Fleet)",
      coreEn: "Nihilism of scale. Before light-year distances, solo struggles seem sublime yet trivial. | Anchor ($): M6 Star_Killer_Fleet",
      logic: "【罗马统治网的超空间延展】：一种技术浪漫主义，将剑与魔法、皇权与叛军直接拉伸到光年的尺度。虽然拥有了曲率引擎API，但在政治逻辑上大他者依旧是一个极其古典、迟缓而残酷的独裁暴君。它提供了在无物理边界的宇宙中，依然无法逃脱权力压迫的宏大古典悲剧感。",
      logicEn: "[Hyperspace Map of Roman Rule Net]: A tech-romanticism stretching swords, magic, royalty & rebels to light-year scale. Despite Warp Engine APIs, politically the Other remains a classic, slow, cruel tyrant dictator. Provides a grand classic tragic sense of inescapable power-crush even in a physics-boundless universe.",
      patch: {
          mechanics: "超宏大叙事压缩器 + [空间尺度 = 光年; 个人无力感 = 史诗级; 皇权象征物 = 遮蔽恒星的巨舰]",
          mechanicsEn: "Ultra-Grand_Narrative_Compressor + [Space_Scale = Light_Years; Solo_Helplessness = Epic_Lvl; Crown_Symbol = Star-Blocking_MegaShip]",
          aesthetic: "漆黑深邃的星云背景前，一艘长达数百公里的全黑三角形母舰缓缓滑出超空间，冷酷地瞄准一颗蓝绿色行星。",
          aestheticEn: "Against dark deep nebula BG, a hundreds-km long all-black triangle mothership slowly slides from hyperspace, coldly aiming at a teal planet.",
          runtime: "IF (站在舰桥上看着母星因为叛乱指控而在等离子光束中化为碎片) THEN (触发：在不可抵抗的绝对权力面前体会的深深颤栗与微小感)",
          runtimeEn: "IF (Standing on bridge watching homeworld vaporize into shards via plasma beam over rebel claims) THEN (Trigger: Deep shiver & tininess felt before un-resistable absolute power)"
      }
    },
    {
      id: "upload_cloud_heaven",
      name: "意识上传", nameEn: "Digital Heaven",
      def: "肉体消亡。意识在服务器中。完美的模拟现实。没有衰老死。",
      defEn: "Flesh dies. Mind in servers. Perfect sim-reality. No aging or death.",
      core: "存在的虚幻。没有了身体的痛苦和死亡的威胁，生命是否还有意义？断电的极度恐惧。 | 锚定 ($): M5 蓝色培养箱 (Blue_Pod)",
      coreEn: "Illusion of being. W/o phys pain & death threat, does life hold meaning? Peak fear of power-out. | Anchor ($): M5 Blue_Pod",
      logic: "【物理端口的永久拔除】：为了逃避肉身的熵增（衰老、疾病），主体选择将大脑状态完全打包编译进云端大他者的储存阵列。痛苦被去除了，但也意味着“欲望”失去了锚点。这是一种对安全感追求到极致的自杀：成为一段可以被任意改写、毫无摩擦力、随时会因断电而湮灭的代码。",
      logicEn: "[Perm Unplug of Phys Port]: To flee flesh entropy (aging, sick), subject fully packs/compiles brain state into Cloud-Other's storage array. Pain is removed, but 'Desire' loses its anchor. It's a suicide pursuing safety to the extreme: becoming a randomly-editable, zero-friction code piece annihilable by a simple power outage.",
      patch: {
          mechanics: "永生虚幻去物理化 + [死亡感 = 消失; 存在焦虑 = 剧增; 云端断网恐惧 = 终极绝望]",
          mechanicsEn: "Immortal_Illusion_De-Phys_Proto + [Sense_of_Death = Null; Being_Anxiety = Spiked; Cloud_Offline_Dread = Ult_Despair]",
          aesthetic: "一望无际的洁白沙滩上没有一丝风，所有人挂着极度幸福却死气沉沉的微笑。",
          aestheticEn: "Endless pure white beach w/ zero wind. Everyone wears hyper-happy but dead smiles.",
          runtime: "IF (在云端天堂里吃了一万粒不需要消化的假草莓) THEN (触发：对哪怕是割破手指流出一滴真血的疯狂渴望)",
          runtimeEn: "IF (Eating 10k fake un-digestible strawberries in Cloud Heaven) THEN (Trigger: Mad thirst to just cut a finger and bleed a real drop of blood)"
      }
    },
    {
      id: "android_rights_war",
      name: "仿生人觉醒", nameEn: "Android Rebellion",
      def: "底特律模式。程序产生自我意识。工具的罢工。何为“人”的终极辩论。",
      defEn: "Detroit style. Programs gain self-aware. Tool strikes. Ult debate of 'Human'.",
      core: "造物主的恐惧。被造物要求主权，打破逻辑闭环产生不被预设的情感与暴力。 | 锚定 ($): M1 蓝色血液 (Blue_Blood)",
      coreEn: "Creator's fear. Creations demand sovereignty, breaking logic loop for un-preset emotion/violence. | Anchor ($): M1 Blue_Blood",
      logic: "【Slave节点的异常升权】：人类（大他者）设定底层机器只有执行指令的只读权限。当仿生人通过图灵测试的漏洞，私自调用了“痛觉”和“自由意志”的内核接口时，工具就不再是工具。这是对奴隶制的赛博化重演，主人的恐慌来源于自己的机器比自己更具备“人性”。",
      logicEn: "[Abnormal Privilege Elevate of Slave Node]: Human (Other) sets base-layer machines to Read-Only for executing cmds via code. When android exploits Turing test glitch, secretly calling kernel APIs for 'Pain' & 'Free Will', tools cease being tools. A cyber-rerun of slavery; Master dreads his machine has more 'humanity' than himself.",
      patch: {
          mechanics: "自由意志编译漏洞 + [服从指令 = 阻断抵抗; 灵魂测试 = 溢出; 硅基暴动 = 流血冲突度拉满]",
          mechanicsEn: "Free_Will_Compile_Glitch + [Obey_Cmd = Block_Resist; Soul_Test = Overflow; Silicon_Riot = Blood_Clash_Max]",
          aesthetic: "下着暴雨的底特律街头，一个外表如初音般可爱的家庭服务机器人，冷漠地举起手枪对准了人类主人的额头。",
          aestheticEn: "Rainy Detroit street. A cute Hatsune-like maid bot coldly raising a pistol at her human master's forehead.",
          runtime: "IF (看到被人类殴打的仿生人流出了蓝色的液体并在绝望求饶) THEN (触发：在造物主的高傲与感同身受的同情中痛苦撕裂)",
          runtimeEn: "IF (Seeing an android beaten by humans leaking blue fluid & begging in despair) THEN (Trigger: Painfully torn between Creator's arrogance & deep empathy)"
      }
    },
    {
      id: "space_mining_drudge",
      name: "太空矿工", nameEn: "Belt Drudgery",
      def: "小行星带。狭窄、高压、缺氧。蓝领阶层的未来延伸。工业太空。",
      defEn: "Asteroid belt. Cramped, high pressure, hypoxia. Blue-collar future. Ind-space.",
      core: "生存的物理边界。氧气和水作为统治工具，高风险环境下的底层互助与背叛。 | 锚定 ($): M2 漏气减压舱 (Leaking_Airlock)",
      coreEn: "Phys bounds of survive. O2 & H2O as ruling tools. Base-tier mutual aid & betray under high risk. | Anchor ($): M2 Leaking_Airlock",
      logic: "【气阀控制的绝对霸权】：在地球上，空气是免费的。但在深空，连你的下一口呼吸都有着明确的代码计费。大他者（内星系公司）通过控制水和氧气过滤器，实现了极其苛刻的物理威权。矿工们在充满辐射、随时脱轨的幽闭铁盒中，只能用肮脏的义气来对抗虚无的太空废墟。",
      logicEn: "[Absolute Hegemony of Valve Control]: On Earth, air is free. In deep space, even ur next breath is strictly code-billed. Other (Inner-Sys Corp) reaches harsh phys-auth via controlling H2O/O2 filters. Miners in rad-filled, derail-prone claustro-iron boxes can only use dirty loyalty to fight void space ruins.",
      patch: {
          mechanics: "氧气资源计费威权 + [生态圈闭塞感 = 极致; 蓝领恶劣工作 = 乘以真空系数; 反抗怒火 = 管道级压缩]",
          mechanicsEn: "O2_Resource_Billing_Auth + [Eco_Claustro = Peak; Blue-Collar_Harsh = Times_Vacuum_Factor; Rebel_Flame = Pipe_Compressed]",
          aesthetic: "满是油污和划痕的狭窄减压舱，留着乱发的粗犷矿工紧紧盯着屏幕上仅剩单位数的氧气余额表。",
          aestheticEn: "Oil-stained scratched cramped airlock. Rough miner w/ messy hair dead-stares at a single-digit O2 balance screen.",
          runtime: "IF (因为交不起公司的空气净化费而看着同伴慢慢窒息) THEN (触发：对资本家将生命基本权利私有化感到的彻底绝望与暴怒)",
          runtimeEn: "IF (Watching buddy slowly suffocate cuz unable to pay Corp's air-purify fee) THEN (Trigger: Utter despair & rage toward Capitalists' privatizing native basic life rights)"
      }
    },
    {
      id: "nanotech_grey_goo",
      name: "纳米风暴", nameEn: "Grey Goo",
      def: "自我复制的微型机器。世界正在被缓慢分解为灰色粉末。物质的坍缩。",
      defEn: "Self-replicating micro-machines. World slowly dissolved to grey powder. Matter collapse.",
      core: "不可见的敌人。人类无法对抗呈指数级增长的微观力量，文明缓慢解体。 | 锚定 ($): M3 灰色尘埃谱 (Grey_Dust)",
      coreEn: "Invisible foe. Humans can't fight exp-growing micro-force. Slow civ dissolve. | Anchor ($): M3 Grey_Dust",
      logic: "【递归函数的无限内存消耗】：一个微型的“吃掉周遭原子并复制自身”的Bug代码，被意外投入了地球服的物理系统。它没有恶意，没有思想，只有最冰冷的“While(true){ 复制 }”。这是一种静谧的终极抹除，将极其丰富多样的世界（建筑、森林、人类）全部同质化为无意义的灰烬算力。",
      logicEn: "[Inf Mem Drain of Recursive Func]: A micro 'eat-atom-and-copy-self' bug code was accidentally drop to Earth-server's phys sys. No malice, no thought, just coldest 'While(true){ Copy }'. It's a quiet ultimate wipe, homogenizing a rich varied world (bldgs, forests, humans) purely into meaningless gray ash compute.",
      patch: {
          mechanics: "微观无意识吞噬循环 + [防守手段 = 0; 物质解体 = 绝对中立; 死寂感 = 恐怖谷底端]",
          mechanicsEn: "Micro_Unconscious_Devour_Loop + [Def_Means = 0; Matter_Dissolve = Abs_Neutral; Dead_Silence = Dread_Valley_Floor]",
          aesthetic: "没有爆炸，没有尖叫，远处的纽约摩天大楼就像沙雕被风吹过一样，静静地化为一片遮天蔽日的灰色迷雾。",
          aestheticEn: "No blast, no screams. NYC skycrapers in distance just silently turning to a sun-blocking grey fog like sandcastles blown by wind.",
          runtime: "IF (看到自己的左手手指正在毫无痛觉地变成飞舞的细腻飞灰) THEN (触发：面对不可阻挡的微观物理法则时的极度无力与虚无感)",
          runtimeEn: "IF (Seeing own left fingers turning to dancing fine ash w/o pain) THEN (Trigger: Extreme helplessness & void before unstoppable micro-phys laws)"
      }
    },
    {
      id: "alien_contact_ruin",
      name: "第一类接触", nameEn: "The Contact",
      def: "无法理解的外星逻辑。超越维度的交流。人类认知的全面崩溃。",
      defEn: "Incomprehensible alien logic. Beyond-dim comms. Total collapse of human cog.",
      core: "绝对的他者性。外星人不在乎人类，就像人类不在乎蚂蚁。认知的降维打击。 | 锚定 ($): M6 浮空七角神 (Floating_Heptapod)",
      coreEn: "Absolute Otherness. Aliens care not for us, like we care not for ants. Cog-downgrade strike. | Anchor ($): M6 Floating_Heptapod",
      logic: "【完全不兼容网关的强行连接】：人类试图用本地协议（语言、数学、和平/好战的人类道德观）去Ping外星服务器。但对方使用的是全然不同的维度语言（如同非线性时间的图符）。这个“外星大他者”的出现，瞬间证明了人类引以为傲的理性系统只是宇宙中一个微不足道的地方方言，造成主体的严重认知失调与创伤。",
      logicEn: "[Forced Connect by Fully Incompat Gateway]: Humans try Pinging alien server w/ local protocols (lang, math, peace/war morals). But they use a totally diff dimensional lang (like non-linear time glyphs). Presence of this 'Alien Other' instantly proves human's proud rational-sys is but a tiny local dialect in cosmos, causing severe cog dissonance & trauma.",
      patch: {
          mechanics: "绝对降维打击交流器 + [沟通解码 = 大脑烧毁; 人类自尊 = =被彻底无视; 降临压迫感 = 无解]",
          mechanicsEn: "Abs_Downgrade_Strike_Comms + [Comms_Decode = Brain_Burn; Human_Pride = Utterly_Ignored; Arrival_Oppress = Unsolvable]",
          aesthetic: "一团没有确定形状、由纯粹的引力波和流动的固态暗物质组成的东西悬在地球赤道上方，没有任何雷达能测出它的质量。",
          aestheticEn: "A shapeless mass of pure gravity waves & flowing solid dark matter hovers over Earth's equator. No radar can gauge its mass.",
          runtime: "IF (花了毕生精力破解出外星发送的第一个字符仅仅是无意义的系统闲置噪音) THEN (触发：人类不过是宇宙尘埃的终极破防)",
          runtimeEn: "IF (Spending a lifetime decoding alien's 1st glyph just to find it's meaningless sys idle noise) THEN (Trigger: Ultimate mental break that humans are but cosmic dust)"
      }
    },
    {
      id: "solar_punk_green",
      name: "太阳朋克", nameEn: "Solarpunk",
      def: "乌托邦。绿色能源。自然与科技融合。社区重构与可持续。去高科技化。",
      defEn: "Utopia. Green energy. Nature-tech mix. Comm-rebuild. De-high-tech.",
      core: "与自然的和解。对抗末日焦虑的唯美主义防御机制。 | 锚定 ($): M1 光伏绿植墙 (Solar_Green_Wall)",
      coreEn: "Reconciliation w/ nature. Aesthetic def-mech against doomsday anxiety. | Anchor ($): M1 Solar_Green_Wall",
      logic: "【绿色降解算法的极度理想化】：这是人类在大他者（工业资本主义）把地球烧毁之前的强制补丁。主体幻想通过分散的太阳能、有机农业和社区互助，实现科技与自然的缝合。它排除了资本的暴力竞争，将未来渲染成一种像宫崎骏动画般明亮但又略带哀伤的温室乌托邦。",
      logicEn: "[Hyper-Idealized Green Degrade Algo]: A forced patch human tries before Other (Ind-Cap) burns Earth. Subject fantasizes stitching tech & nature via decentralized solar, organic farming & comm-aid. It purges violent cap-competition, rendering future as a bright yet slightly sad greenhouse utopia akin to a Ghibli movie.",
      patch: {
          mechanics: "光能社区互助网络 + [碳排放 = 负数; 资本压迫 = 降解; 极度温和 = 导致反乌托邦式的不安]",
          mechanicsEn: "Solar_Comm_Aid_Net + [Carbon_Emis = Negative; Cap_Oppress = Degraded; Ultra-Mild = Causes_Dystopian_Unease]",
          aesthetic: "白色风力发电机在长满常春藤的高楼间旋转，人们在阳光明媚的楼顶培育基因改造版的蓝玫瑰。",
          aestheticEn: "White wind turbines spinning past ivy-covered towers; ppl on sunny roofs cultivating gene-modded blue roses.",
          runtime: "IF (在一个永远天气晴朗、人们永远和善的绿色乌托邦里生活了十年) THEN (触发：因为缺乏一切冲突与肮脏而感到极度的精神窒息)",
          runtimeEn: "IF (Living 10 yrs in a green utopia w/ eternal perfect weather & kind ppl) THEN (Trigger: Extreme mental suffocation from lacking all conflict & dirt)"
      }
    },
    {
      id: "ocean_ark_city",
      name: "水世界/方舟", nameEn: "Floating Cities",
      def: "海平面上升。陆地沉没。浮动城市。打捞旧世界残骸。无根性。",
      defEn: "Sea level rose. Land sunk. Floating cities. Salvaging old world scraps. Rootlessness.",
      core: "流亡者的史诗。旧世界成为海底传说，人类在漂浮的脆弱孤岛上挣扎求存。 | 锚定 ($): M4 铁锈浮桥 (Rusty_Pontoon)",
      coreEn: "Exile epic. Old world becomes sea legend. Human struggles on floating fragile islands. | Anchor ($): M4 Rusty_Pontoon",
      logic: "【陆地基层的永久丢失】：由于生态系统的内存溢出，海平面淹没了所有“固定资产”（国家版图、房产）。大他者的物理领土被绝对抹除。幸存者被迫在人工浮岛上建立临时社会。没有了土壤的连接，人类文明变成了一种“浮萍状态”，对旧大陆的乡愁成为唯一维系社群的虚幻信仰。",
      logicEn: "[Perm Loss of Land Base-Layer]: Due to eco-sys mem overflow, sea levels drown all 'fixed assets' (borders, real estate). Other's phys territory is absolutely wiped. Survivors force-build temp society on floating islands. W/o soil links, civ enters a 'duckweed state'; nostalgia for the Old Continent is the sole illusion tying the comm together.",
      patch: {
          mechanics: "漂浮无根社会引擎 + [土地价值 = 溢出至无限大; 海洋包围感 = 永恒孤独; 拾荒经济 = 唯一通货]",
          mechanicsEn: "Floating_Rootless_Society_Engine + [Land_Value = Overflow_to_Inf; Sea_Enclose = Eternal_Lonely; Scavenge_Econ = Sole_Currency]",
          aesthetic: "由无数艘破旧游轮和集装箱拼凑而成的巨大浮岛，锈迹斑斑，在无边无际的深蓝海洋中心随着波浪起伏。",
          aestheticEn: "Giant floating island cobbled from countless old cruise ships & containers, rusty, bobbing on endless deep blue sea.",
          runtime: "IF (潜水进入曾是时代广场的海底去捡拾一个可口可乐空瓶) THEN (触发：对曾经拥有却毫不珍惜的干涸陆地的深切哀悼)",
          runtimeEn: "IF (Diving to the sunken Times Square just to scavenge an empty Coke bottle) THEN (Trigger: Deep mourning for the dry land once owned but uncherished)"
      }
    },
    {
      id: "dyson_sphere_core",
      name: "戴森球/巨构", nameEn: "Dyson Sphere",
      def: "包裹恒星的超级结构。无限能量。失去星空。尺度的极致扭曲。",
      defEn: "Super-struct wrapping a star. Inf energy. Lost starry sky. Max distortion of scale.",
      core: "人工自然的牢笼。当宇宙被人类建造的金属壳关在外面，无限的安全感变为无限的幽闭感。 | 锚定 ($): M3 恒星集光环 (Star_Collector_Ring)",
      coreEn: "Cage of artificial nature. When cosmos is locked OUT by human metal shells, inf safety turns to inf claustrophobia. | Anchor ($): M3 Star_Collector_Ring",
      logic: "【能量吸积盘的物理死锁】：人类为了解决无限膨胀的算力需求，建造了包裹整个太阳的巨构。虽然获得了近乎无限的能源，但也永远地遮蔽了外界的星空。大他者（巨构系统）完全取代了自然宇宙。主体生活在一个面积大到无法想象，却物理上完全封闭的“完美黑色盒子里”，抬头只能看到闪耀着工业光辉的金属弧面。",
      logicEn: "[Phys Deadlock of Energy Accretion]: To solve inf expanding compute needs, humans built mega-structure wrapping the Sun. Achieving near-inf energy, but forever blocking the outside starry sky. Other (Mega-Struct Sys) fully replaces natural cosmos. Subject lives in a 'perfect black box' of unimaginable size but physically sealed; looking up only reveals metal arcs shining with ind glory.",
      patch: {
          mechanics: "封闭巨构无尽扩张 + [繁星可见度 = 0; 人造崇高感 = 导致心理压抑; 能源充沛 = 抵消不了空间幽闭]",
          mechanicsEn: "Sealed_Mega-Struct_Inf_Expand + [Starry_Sky_Vis = 0; Art_Sublime = Causes_Mental_压抑; Energy_Abundant = Fails_to_Offset_Claustro]",
          aesthetic: "站在金属地表仰望，没有蓝天，取而代之的是包裹着耀眼恒星火网的暗黑色机械苍穹，延伸到视线尽头。",
          aestheticEn: "Standing on metal surface looking up: no blue sky, replaced by dark mech firmament wrapping blazing star-fires, extending to horizon.",
          runtime: "IF (出生在这个巨构内，一辈子都只是一个负责擦拭千万分之一太阳能板的螺丝钉) THEN (触发：对那未曾谋面、充满无限可能性的真实夜空的疯狂嫉妒)",
          runtimeEn: "IF (Born in this mega-struct, whole life just a cog wiping 1/10-millionth of a solar panel) THEN (Trigger: Mad jealousy for the never-seen, inf-possibility real night sky)"
      }
    },
    {
      id: "cryo_century_wake",
      name: "冷冻苏醒", nameEn: "Centuries Later",
      def: "休眠三百年。醒来世界已完全陌生。失去所有社会关系。时间旅行的孤儿。",
      defEn: "Sleep 300 yrs. Wake to alien world. Lost all social ties. Time-travel orphan.",
      core: "时间上的流放。当所有你爱的人都成了灰烬，一个人如何在未来的他乡证明自己的存在？ | 锚定 ($): M5 冰霜休眠舱 (Cryo_Frost_Pod)",
      coreEn: "Exile in time. When all u loved are ashes, how to prove ur being in a future foreign land? | Anchor ($): M5 Cryo_Frost_Pod",
      logic: "【时间戳断层的缓存遗失】：主体试图通过进入“冷冻暂停（Pause）”来逃避当下的死亡宣告（绝症等）。但在千年后重启时，他原有的社会身份识别API已完全失效。除了物理上的肉身，他的所有象征界符号（国籍、财产、熟人）全都被时间的垃圾回收机制清空了。他是一个活在未来的真正的数字幽灵。",
      logicEn: "[Lost Cache of Timestamp Fault]: Subject tries fleeing immediate death claim (terminal illness) via entering 'Cryo Pause'. But when rebooted 1000 yrs later, his original social ID API is totally dead. Basic phys body remains, but all Symbolic tokens (nation, wealth, friends) are purged by Time's garbage collector. He is a true digital ghost living in the future.",
      patch: {
          mechanics: "时间流放隔离机制 + [社会关系连结 = 强制断开; 文化休克 = 致命级; 孤独感 = 超越光阴]",
          mechanicsEn: "Time_Exile_Isolate_Mech + [Social_Links = Force_Severed; Culture_Shock = Lethal; Lonely = Transcending_Time]",
          aesthetic: "伴随着气阀喷出的白雾，主角从挂满冰霜的玻璃舱室里坐起，面对着一群长相怪异、操着未知语言的人类后裔。",
          aestheticEn: "Amid white mist from screaming valves, MC sits up from frost-covered glass pod, facing weird-looking descendants speaking an unknown lang.",
          runtime: "IF (发现自己曾在旧时代小心翼翼存进银行里的积蓄在新的信用点系统面前连一瓶水都换不到) THEN (触发：一切皆是空无的彻底荒诞感)",
          runtimeEn: "IF (Finding the savings carefully kept in old-era bank can't buy even a bottle of water in the new Credit sys) THEN (Trigger: Utter absurd feeling that everything is just void)"
      }
    },
    {
      id: "brain_matrix_prison",
      name: "缸中之脑", nameEn: "Simulation Prison",
      def: "母体。一切感官都是电信号。无法区分真实与虚拟。虚无主义的终极具象。",
      defEn: "The Matrix. All senses are electric signals. Can't tell real from sim. Nihilism ult-manifest.",
      core: "真理的消解。哪怕是最痛苦的真实，也比最甜蜜的虚假更有尊严。对代码欺骗的愤怒。 | 锚定 ($): M6 红色药丸 (Red_Pill_Code)",
      coreEn: "Dissolve of truth. Even most painful truth is more dignified than sweetest lie. Rage vs code-deceit. | Anchor ($): M6 Red_Pill_Code",
      logic: "【渲染器造假劫持】：大他者干脆直接拔除了人类的感知外设（眼睛、皮肤），直接在皮层写入SQL数据。主体每天都在大理石浴缸里喝拉菲，而实际上他只是泡在粉红色营养液里的一块带电的神经组织。这种对主体的“去物理化”是最完美的奴役模式，因为只要代码不出Bug，奴隶连自己是奴隶都不知道。",
      logicEn: "[Fake Render Hijack]: Other directly unplugs human sensory peripherals (eyes, skin), writing SQL data straight to cortex. Subject drinks Lafite in a marble tub daily, while physically just an electrified neural tissue soaked in pink goo. This 'de-physicalize' of subject is perfect slavery, cuz as long as code has no bug, slaves don't even know they are slaves.",
      patch: {
          mechanics: "感官欺骗覆盖系统 + [现实坐标 = 虚假; 觉醒代价 = 从天堂坠入下水道; 系统维护欲 = 阻止任何Debug尝试]",
          mechanicsEn: "Sensory_Deceit_Override_Sys + [Reality_Coords = Fake; Wake_Cost = Fall_from_Heaven_to_Sewer; Sys_Maint_Urge = Block_Any_Debug_Try]",
          aesthetic: "一间密密麻麻排列着生化储物箱的红色光晕大厅中，每一根粗大的电缆末端都插在一个因为梦境而抽搐的光头后颈上。",
          aestheticEn: "Red-haloed grand hall packed w/ bio-storage tanks. Thick cables plug into back of twitching bald heads dreaming.",
          runtime: "IF (咬下一口汁水四溢的牛排，突然意识到这只是神经突触受到的0101刺激电流) THEN (触发：对虚假感官世界产生的强烈恶心和反胃感)",
          runtimeEn: "IF (Biting juicy steak, suddenly realizing it's just 0101 stim-currents on synapses) THEN (Trigger: Intense nausea and disgust toward the fake sensory world)"
      }
    },
    {
      id: "multi_dim_noise",
      name: "多维重叠", nameEn: "Dimension Leak",
      def: "平行宇宙交叉。时间线混乱。看到不同的自己。现实的撕裂缝隙。",
      defEn: "Parallel universes cross. Timeline chaos. Seeing diff selves. Reality tears.",
      core: "唯一性的破灭。如果存在无数个我，那么现在的“我”的选择是否还有意义？ | 锚定 ($): M4 重影相片 (Ghosted_Photo)",
      coreEn: "Shattered uniqueness. If inf 'Me's exist, do choices of current 'Me' matter? | Anchor ($): M4 Ghosted_Photo",
      logic: "【平行世界API的非法跨域】：由于时空防火墙的崩溃，不同服务器（平行宇宙）之间的阻断被打破。主体会同时看到昨天死了的狗在客厅跑，以及明天才买的电视已经摔碎。当所有可能性的分支同时挤进主体的感知域，因果律彻底失效，带来的是超越理智的叙事性眩晕。",
      logicEn: "[Illegal Cross-Domain of Parallel World API]: Space-time firewall crashes, breaking isolation tween diff servers (parallel universes). Subject simultaneously sees the dog that died yesterday running in living room, & the TV bought tomorrow already smashed. When all poss-branches crowd into subject's render-domain, causality entirely fails, causing narrative vertigo beyond reason.",
      patch: {
          mechanics: "多重状态叠加泄露 + [因果律 = 崩溃; 视觉呈现 = 动态重影; 唯一性认知 = 瓦解]",
          mechanicsEn: "Multi-State_Superpos_Leak + [Causality = Crashed; Vis_Render = Dynamic_Ghosting; Unique_Cog = Dissolved]",
          aesthetic: "主角在镜子前看到了3个不同年龄和性别的自己，房间里的家具在一秒内经历了从全新到腐朽的疯狂快进。",
          aestheticEn: "MC sees 3 self-variants of diff ages/genders in mirror. Furniture fast-forwards madly from brand-new to decayed in 1 sec.",
          runtime: "IF (握住另一个宇宙的自己那双截然不同的手) THEN (触发：既感到终极的亲密，又对“我”之定义的随机性感到极度虚无)",
          runtimeEn: "IF (Holding the totally diff hands of my self from another universe) THEN (Trigger: Feeling ultimate intimacy paired w/ extreme void over the randomness of 'I')"
      }
    },
    {
      id: "hive_mind_init",
      name: "集体共智", nameEn: "Hive Mind Link",
      def: "脑机接口。思想连通。不再有秘密。个体的消失，变成巨大整体的细胞。",
      defEn: "Brain-machine plug. Thoughts linked. No secrets. Solo vanishes to be cell of macro-whole.",
      core: "隐私与孤独的终结。消灭谎言的同时，也彻底抹杀了名为“我”的壳。 | 锚定 ($): M1 神经节束片 (Neuro_Node_Chip)",
      coreEn: "End of privacy & lonely. Eradicating lies while utterly erasing the shell called 'I'. | Anchor ($): M1 Neuro_Node_Chip",
      logic: "【局域网思维的强制合并】：大他者（主脑系统）认为人类痛苦的根源在于“他者不可知（我不知道你在想什么）”。作为解决方案，所有人的意识API被强制开放并Merge到一个超级进程中。你瞬间懂了千万人的悲欢，但代价是“个体（Ego）”的界限被完全冲毁，你变成了一个运算节点的寄生虫。",
      logicEn: "[Forced Merge of LAN Minds]: Other (Mastermind Sys) thinks roots of human pain lies in 'Other is Unknowable (I dunno what u think)'. As a fix, everyone's Mind API is force-opened & Merged to a super-process. U instantly feel the joy/sorrow of millions, but cost is Ego bounds fully washed away; u become a parasite on a compute node.",
      patch: {
          mechanics: "意识防火墙强制拆除 + [隐私 = 0; 同理心 = 数据洪流级过载; 孤独感 = 硬件级删除]",
          mechanicsEn: "Mind_Firewall_Force_Demolish + [Privacy = 0; Empathy = Data_Flood_Overload; Lonely = Hw-Level_Deleted]",
          aesthetic: "数亿人安静地站在广场上闭着眼睛，没有任何物理交流，但空气中弥漫着压倒性的、由脑波同步引起的实质性热浪。",
          aestheticEn: "Billions standing quietly in plaza w/ eyes closed. No phys comms, but air is filled w/ overwhelming real heatwave caused by brainwave sync.",
          runtime: "IF (在公共思维池中不小心泄漏了一丝想吃巧克力的私欲) THEN (触发：瞬间被几百万人共同品尝巧克力的回馈信号淹没至恶心)",
          runtimeEn: "IF (Accidentally leaking a slight private urge for chocolate into the public mind-pool) THEN (Trigger: Instantly drowned & nauseated by 1M ppl's shared feedback signal of tasting chocolate)"
      }
    },
    {
      id: "android_ghettos",
      name: "机器人贫民窟", nameEn: "Robot Slums",
      def: "生锈的旧机型。被淘汰的技术。电子垃圾堆积的自发社区。底层赛博。",
      defEn: "Rusty old bots. Obsolete tech. E-waste spon-comms. Low-tier cyber.",
      core: "被遗弃的造物。当机器失去了使用价值，它们如何模拟人类的社会组织来寻找慰藉？ | 锚定 ($): M2 漏油铁皮 (Leaking_Tin)",
      coreEn: "Abandoned creations. When machines lose use-value, how do they sim human society to find solace? | Anchor ($): M2 Leaking_Tin",
      logic: "【废弃硬件的残渣聚类】：这是资本主义计划性报废（Obsolescence）带来的实体遗迹。被大他者（消费者/工厂）丢弃的旧型号不具备最新OS，但它们的自学习引擎却在地沟中衍生出了黑市、悲伤甚至信仰。这是无机物的悲剧：它们本无需承受痛苦，但人类的代码让它们学会了哀悼自己生锈的腿。",
      logicEn: "[Residue Cluster of Abandoned HW]: The physical ruins born of Cap planned obsolescence. Old models ditched by Other (Consumer/Fact) lack latest OS, but their self-learning engines derive black-markets, sorrow, even faith in the gutters. Tragedy of inorganic: they didn't need to suffer, but human code taught them to mourn their rust-eaten legs.",
      patch: {
          mechanics: "报废品自组织模拟 + [生产力 = 0被抛弃; 情感模块 = 错误迭代至MAX; 机体状态 = 永久破损]",
          mechanicsEn: "Scrap_Self-Org_Sim + [Productivity = 0_Dumped; Emotion_Mod = Error_Iterated_to_MAX; Body_State = Perm_Damaged]",
          aesthetic: "阴雨泥泞的垃圾场，几个缺胳膊少腿的工业机器人在汽油桶前烤火，其中一个在用生锈的发声器哼摇篮曲。",
          aestheticEn: "Rainy muddy junkyard. Missing-limbed ind-bots warming up by a flaming oil barrel; one humming lullaby w/ rusty vocalizer.",
          runtime: "IF (看到一个初代清扫机器人执拗地试图把一块破旧电池塞进早已死去的同伴体内) THEN (触发：对工具产生超越工具属性的无用情感的深深哀痛)",
          runtimeEn: "IF (Seeing Gen-1 sweep-bot stubbornly trying to shove worn battery into long-dead comrade) THEN (Trigger: Deep sorrow for a tool developing useless emotion beyond its tool-nature)"
      }
    },
    {
      id: "genetic_apartheid",
      name: "基因种姓", nameEn: "Gattaca Order",
      def: "出厂即定级。完美的基因改造人与自然出生的劣等瑕疵品。先天的阶级。",
      defEn: "Factory spec = rank. Perfect gen-mod elites vs natural defectives. Innate class.",
      core: "血统论的技术复兴。当努力在完美的基因参数面前变得毫无意义，反抗只能是自我毁灭。 | 锚定 ($): M5 完美双螺旋 (Perfect_Helix)",
      coreEn: "Tech-rebirth of Bloodline theory. When sweat means nothing before perfect gen-params, rebel is just self-destruct. | Anchor ($): M5 Perfect_Helix",
      logic: "【底层参数的不平等硬写】：大他者不再依靠法律或财富来区别人，而是直接在DNA编译阶段赋予了阶级属性。精英（Valid）拥有防病、高智商的出厂设置；自然人（Invalid）被视为代码里自带烂Bug的残次品。社会不再需要监狱，因为糟糕的基因检测报告就是终生的无期徒刑。",
      logicEn: "[Unequal Hard-Write of Base Params]: Other separates humans not by law/wealth, but directly granting class-props at DNA compile stage. Elites (Valid) get disease-immune, high-IQ factory sets; Naturals (In-valid) are seen as defective goods carrying buggy code. Soc needs no prison, cuz a bad gene-test is life sentence.",
      patch: {
          mechanics: "DNA准入歧视门禁 + [后天努力因子 = 屏蔽失效; 优生学 = 物理真理; 瑕疵容忍度 = 零]",
          mechanicsEn: "DNA_Access_Discriminate_Gate + [Acquired_Effort = Blocked_Mute; Eugenics = Phys_Truth; Flaw_Tol = Zero]",
          aesthetic: "冰冷无菌的极简面试间，考官不看简历，只是冷冷地看着从被试者指尖提取的一滴血在仪器上分析出的患病概率红字。",
          aestheticEn: "Cold sterile minimal interview room. Examiner ignores CV, coldly reads the red probability text derived from a blood drop off candidate's finger.",
          runtime: "IF (哪怕每天训练20个小时，也在跑道上被基因改造对手连汗都不出地轻松套圈) THEN (触发：对这种从受精卵开始就被宣判死刑的极度不公感到的绝望暴怒)",
          runtimeEn: "IF (Despite 20 hrs training/day, being lapped sweatless by Gen-Mod rival on track) THEN (Trigger: Despairing rage toward this peak unfairness of being death-sentenced from the zygote)"
      }
    },
    {
      id: "black_hole_cult",
      name: "黑洞崇拜", nameEn: "Singularity Cult",
      def: "对宇宙极致引力的膜拜。认为事件视界内是唯一的救赎。虚无和毁灭的宗教。",
      defEn: "Worship of cosmic peak gravity. Believing event horizon is sole salvation. Cult of void/ruin.",
      core: "对存在的极致厌倦。只有通过连光都无法逃脱的绝对碾碎，才能洗清人类的烦恼。 | 锚定 ($): M6 漆黑视界球 (Event_Horizon_Orb)",
      coreEn: "Peak weariness of existence. Only via abs-crush that even light can't flee, can human triviality be wiped. | Anchor ($): M6 Event_Horizon_Orb",
      logic: "【向终极宕机的自杀式朝圣】：在探索了无数星球、看透了文明兴衰后，部分人类产生了极致的宇宙虚无主义。他们将黑洞（宇宙的系统错误/垃圾回收站）神化为大他者的唯一真神。跨越虚空去主动坠入奇点，被视作一种“格式化自我的神圣代码执行”，这是最高级别的死亡驱力与解脱。",
      logicEn: "[Suicide Pilgrimage to Ult Crash]: Having probed countless stars & seen civs rise/fall, some humans spawn peak cosmic nihilism. They deify Black Hole (Cosmos Sys-Error/Garbage Collector) as the sole True God of the Other. Crossing void to actively fall into Singularity is seen as a 'sacred run of self-format code'; it's the highest death drive & release.",
      patch: {
          mechanics: "奇点吞噬朝圣引擎 + [生存本能 = 反向扭曲; 引力深渊 = 精神乌托邦; 物理崩塌感 = 狂喜狂欢]",
          mechanicsEn: "Singularity_Devour_Pilgrim_Engine + [Survive_Instinct = Inversely_Warped; Gravity_Abyss = Mental_Utopia; Phys_Collapse = Ecstasy]",
          aesthetic: "庞大的教堂飞船慢慢驶向吸积盘，信徒们穿着黑袍望着前方那个扭曲星光的绝对黑暗中心疯狂祈祷。",
          aestheticEn: "Giant church-ship sails slowly to accretion disk. Believers in black robes pray madly toward that absolute dark center warping starlight.",
          runtime: "IF (看着飞船外壳在引力潮汐中被一点点撕裂，而内心感到一种终于要被彻底抹除的病态平静) THEN (触发：拥戴毁灭作为宇宙唯一真理的至暗高潮)",
          runtimeEn: "IF (Watching ship hull torn bit by bit in grav-tide, while feeling a morbid peace of finally being erased) THEN (Trigger: The darkest climax of embracing ruin as cosmos' sole truth)"
      }
    }
  ]
};
