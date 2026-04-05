import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_G: LibraryCategoryDef = {
    id: "era_contemporary",
    name: "07. 当代与景观 (Contemporary Spectacle)",
    desc: "全球化，互联网，景观社会。人变成了一串数据或一帧画面，真实界正在被滤镜彻底掩盖。",
    items: [
      {
        id: "present_burnout",
        name: "倦怠社会", nameEn: "Burnout Society",
        def: "过劳。抑郁。优绩主义。自我剥削。算法对注意力的无休止榨取。",
        defEn: "Overwork. Depression. Meritocracy. Self-exploit. Algo draining focus.",
        core: "由于“能够做”而产生的自我强迫。没有外在暴君，每个人都是自己的狱卒。 | 锚定 ($): M1 细胞过载 (Cell_Overload)",
        coreEn: "Self-compulsion from 'can do'. No outer tyrant, each is own jailer. | Anchor ($): M1 Cell_Overload",
        logic: "【正向溢出的性能枯竭】：当大他者从“应当（规训）”变成“能够（效绩）”，主体被给予无限的自由接口以实现自我增值。但没有限制意味着没有休息，主体最终在自我优化的狂热中耗尽内存，导致抑郁与倦怠的普遍化。",
        logicEn: "[Positive Overflow Perf Exhaust]: Other shifts from 'Should (discipline)' to 'Can (merit)'. Subject given infinite ports for self-value. But no limits means no rest; subject exhausts mem in self-opt fever, causing mass depression.",
        patch: {
            mechanics: "自我剥削正反馈死亡螺旋 + [效能焦虑 = 无限增长; 休息罪恶感 = 满级; 神经衰弱 = 普遍被动]",
            mechanicsEn: "Self-Exploit_Pos_Feedback_Spiral + [Perf_Anxiety = Inf_Grow; Rest_Guilt = Max; Neurasthenia = Global_Passive]",
            aesthetic: "深夜灯火通明的写字楼工位，电脑屏幕的冷光打在喝着第三杯冰美式的空洞眼眸上。",
            aestheticEn: "Brightly lit cubicles at 3am, cold monitor light on hollow eyes drinking 3rd iced Americano.",
            runtime: "IF (在周末下午躺在沙发上什么都不做) THEN (触发：强烈的恐慌感袭来，觉得自己被系统无情抛弃了)",
            runtimeEn: "IF (Lying on couch doing nothing on a Sunday) THEN (Trigger: Fierce panic hits, feeling ruthlessly discarded by sys)"
        }
      },
      {
        id: "gig_algo_hell",
        name: "算法/零工地狱", nameEn: "Gig Economy",
        def: "外卖员。网约车。倒计时。手机导航作为唯一的指挥官。",
        defEn: "Delivery, Uber. Countdowns. GPS as sole commander.",
        core: "人被异化为数据包。每一秒都被精准计价的极致孤独与无力。 | 锚定 ($): M2 数字鞭笞 (Digital_Whip)",
        coreEn: "Man alienated to data packets. Extreme lonely powerless counted per sec. | Anchor ($): M2 Digital_Whip",
        logic: "【控制论的绝对微操】：大老板从物理空间隐身，变成了云端的纯粹算法。工人（外卖骑手）被降级为承载GPS信号的碳基耗材。每超时一秒都会触发惩罚代码，主体在复杂的算法黑箱前彻底丧失了议价能力。",
        logicEn: "[Cybernetic Abs Micro-manage]: Boss hides from phys space, becoming pure cloud algo. Worker degraded to carbon-substrate carrying GPS. Sec-delay triggers penalty code. Subject loses all bargain power against blackbox algo.",
        patch: {
            mechanics: "云端奴役算法 + [送达倒计时 = 精确至秒; 路线容错率 = 0; 交通规则 = 被迫系统性违背]",
            mechanicsEn: "Cloud_Slave_Algo + [Delivery_Timer = Sec-Exact; Route_Error_Margin = 0; Traffic_Laws = Forced_Sys_Break]",
            aesthetic: "暴雨中穿着亮色雨衣在车流中疯狂逆行的电动车。手机屏幕上跳动的红色数字倒计时。",
            aestheticEn: "E-bike madly wrong-way speeding in heavy rain with bright raincoat. Red digits ticking on phone.",
            runtime: "IF (为了抢3分钟躲过红绿灯而被轿车撞倒) THEN (触发：第一反应不是看腿有没有断，而是看外卖有没有洒并向超时代码求情)",
            runtimeEn: "IF (Hit by car to save 3 mins on red light) THEN (Trigger: First logic isn't checking broken leg, but checking spilled food & begging timeout code)"
        }
      },
      {
        id: "influencer_bubble",
        name: "网红景观", nameEn: "The Influencer Bubble",
        def: "滤镜。人设。直播间。流量即真理。为了被看见而自我客体化。",
        defEn: "Filters. Persona. Streams. Traffic rules. Self-objectify to be seen.",
        core: "真实的丧失。生活变成表演，主体的欲望被点赞数彻底格式化后的空虚。 | 锚定 ($): M3 美学格式化 (Aesthetic_Format)",
        coreEn: "Loss of Real. Life as act. Desire formatted by likes leaving void. | Anchor ($): M3 Aesthetic_Format",
        logic: "【景观代码对实在界的覆写】：物理现实变得次要，一切经验的目的都是转化为赛博空间的社交货币（照片、短视频）。为了迎合大他者（算法推荐/粉丝凝视）的品味，主体自愿将自我修剪成光滑、毫无划痕的塑料完美品。",
        logicEn: "[Spectacle Code Overrides Real]: Phys reality is secondary; all exp aims to convert to cyber social currency. To match Other (algo/fans gaze), subject self-trims into smooth, scratchless plastic perfection.",
        patch: {
            mechanics: "社交可见性饥渴症 + [虚假人设维持 = 强力耗能; 现实生活 = 彻底沦为布景板; 数据焦虑 = 心跳指标]",
            mechanicsEn: "Social_Vis_Thirst + [Fake_Persona_Upkeep = High_Energy; Real_Life = Demoted_to_Prop; Data_Anxiety = Heartbeat]",
            aesthetic: "打着高亮度补光灯的狭小杂乱出租屋里，化着精致妆容对着镜头比心的大笑女孩。",
            aestheticEn: "Cluttered tiny rental with blaring ring light, heavily-made-up girl laughing & making finger-hearts to lens.",
            runtime: "IF (吃了一口没有对好焦拍下来的米其林大餐) THEN (触发：食物在嘴里瞬间如同嚼蜡，因为没有产生任何社交点赞输出)",
            runtimeEn: "IF (Eating a bite of Michelin meal not properly in-focus snapped) THEN (Trigger: Food tastes like wax instantly since it yields no social likes output)"
        }
      },
      {
        id: "post_truth_chaos",
        name: "后真相时代", nameEn: "Post-Truth",
        def: "深度伪造。回音室。信息茧房。真假不再重要，只看站队。",
        defEn: "Deepfake. Echo chambers. Filter bubbles. Only tribes matter, not truth.",
        core: "真理的液化。当“真实”变成了可随意编辑的代码，人类失去了现实锚点。 | 锚定 ($): M5 矩阵乱码 (Matrix_Glitch)",
        coreEn: "Truth liquefied. When 'Real' becomes editable code, man loses anchor. | Anchor ($): M5 Matrix_Glitch",
        logic: "【共识链的硬分叉】：互联网没有带来理性的乌托邦，反而凭借算法推荐制造了无数互相隔绝的封闭环路（信息茧房）。传统的大他者（权威新闻/科学）崩溃，阴谋论与情绪煽动占据了算力主流，事实让位于信念。",
        logicEn: "[Consensus Chain Hard-Fork]: Internet didn't bring ratio-utopia, but algo-made isolated closed loops (bubbles). Trad Other (news/science) crashes, conspire & emotion prompt hijacked hash loop. Fact yields to belief.",
        patch: {
            mechanics: "认知闭环锁死算法 + [信息投喂 = 只迎合偏见; 深度伪造 = 真假难辨; 辟谣成本 = 呈几何级数增加]",
            mechanicsEn: "Cognitive_Closed_Loop_Lock + [Info_Feed = Bias_Pleasant_Only; Deepfake = Truth_Blur; Debunk_Cost = Geo_Scale]",
            aesthetic: "满屏滚动的红色假新闻感叹号和粗劣拼贴图片。在家庭聚会上因为阴谋论而掀桌互相谩骂的亲人。",
            aestheticEn: "Screens scrolling red fake news !s and cheap photo collages. Family flipping tables at reunion over conspiracy theories.",
            runtime: "IF (看到一段清晰的视频证明自己的偶像犯罪) THEN (触发：本能启动防火墙认定这是AI伪造的抹黑，反而更加死心塌地)",
            runtimeEn: "IF (Seeing clear HD video proving idol's crime) THEN (Trigger: Instinct firewall triggers classifying it as AI smear, pledging harder loyalty)"
        }
      },
      {
        id: "gentrification_slum",
        name: "县城美学/城乡结合", nameEn: "Liminal China",
        def: "贾樟柯式。杀马特。水泥森林与庄稼交汇。被遗忘的腹地。",
        defEn: "Jia Zhangke style. Smartists. Cement vs crops. Forgotten hinterlands.",
        core: "断层感。想走走不掉想留留不下的尴尬。传统与现代最粗鲁的拼贴。 | 锚定 ($): M6 霓虹尘土 (Neon_Dust)",
        coreEn: "Faultline sense. Trap of neither leaving nor staying. Coarse collage of trad & modern. | Anchor ($): M6 Neon_Dust",
        logic: "【由于版本不匹配导致的渲染错误】：在一线城市高速向第一世界飞跃时，庞大的边缘地带挂载了残缺不全的现代性补丁。宗法社会的人际关系与劣质的全球化消费品生硬地拼接，形成了极具魔幻现实的灰色夹层空间。",
        logicEn: "[Render Error from Version Mismatch]: While tier-1 cities vault to First World, huge fringes mount broken modern patches. Clan-based social ties splice harshly with cheap global consumer goods, forming a magic-realist grey sandwich-space.",
        patch: {
            mechanics: "发展时差脱节反馈 + [阶层跃升天花板 = 钢筋混凝土死锁; 审美迷乱 = 杂糅溢出; 宗族束缚 = 隐性压迫]",
            mechanicsEn: "Dev_Time-Lag_Disjoint + [Class_Mobility_Ceil = Rebar_Deadlock; Astro_Confusion = Mash_Spill; Clan_Bind = Hidden_Oppress]",
            aesthetic: "灰蒙蒙的省道旁，闪烁着粉色劣质LED灯的KTV，门前停着满是泥巴的面包车和一头上个时代的驴。",
            aestheticEn: "Grey prov-highway beside KTV with flashing cheap pink LEDs. Muddy minivan parked next to a donkey from last era.",
            runtime: "IF (穿着假名牌在破败的台球厅打球) THEN (触发：看着远方高铁呼啸而过，感到自己被历史进程绝对封印在了这个坐标上)",
            runtimeEn: "IF (Playing pool in ruined hall wearing fake brands) THEN (Trigger: Watching bullet train speed away, feeling absolutely sealed in this coord by history)"
        }
      },
      {
        id: "cyber_surveillance",
        name: "全息监控", nameEn: "Panopticon Now",
        def: "人脸识别。大数据杀熟。透明隐私。数字极权。",
        defEn: "Facial ID. Big data gouging. Transparent privacy. Digital totalitarian.",
        core: "可见性的陷阱。由于无处遁形而产生的集体表演，自愿交出自由换取便利。 | 锚定 ($): M4 电子晶状体 (Electronic_Lens)",
        coreEn: "Visibility trap. Mass act from nowhere-to-hide, trading freedom for ease voluntarily. | Anchor ($): M4 Electronic_Lens",
        logic: "【福柯的终极代码实现】：古典的惩罚需要肉体接触，现代大他者通过将摄像头嵌入每一个电线杆手机APP，实现了全景敞视。人们不再被鞭打，但因为“时刻被记录”，精神上自动完成了极度的自我规训。",
        logicEn: "[Foucauldian Ult Code Exec]: Classic punish needs flesh contact; modern Other achieves panopticon by embedding cameras in poles/apps. People aren't whipped, but knowing 'always recorded', auto-complete extreme self-discipline mentally.",
        patch: {
            mechanics: "生物数据无限搜集网 + [异常行为捕捉 = 0.1秒级; 隐私换便利 = 浮士德交易; 社会信用分 = 绝对生杀大权]",
            mechanicsEn: "Bio-Data_Inf_Harvest + [Deviant_Catch = 0.1s; Privacy_for_Ease = Faust_Deal; Social_Credit_Score = Abs_Life/Death]",
            aesthetic: "十字路口密集排列的监控探头闪着微弱红光。当你在手机搜索某物，下一秒所有APP都开始精准推送。",
            aestheticEn: "Intersect dense cameras blinking faint red. Search a thing on phone, next sec all apps precision-push it.",
            runtime: "IF (在安静无人的街角打算把垃圾扔在地上) THEN (触发：余光扫到头顶的球形摄像头，立刻收手并装作整理衣服)",
            runtimeEn: "IF (About to drop trash on quiet empty corner) THEN (Trigger: Peri-vision catches dome camera, instantly retracts & pretends adjusting coat)"
        }
      },
      {
        id: "refugee_camp_tent",
        name: "永恒难民营", nameEn: "The Permanent Camp",
        def: "帐篷城。失去国籍的人。例外状态。只有生理生存的Homo Sacer。",
        defEn: "Tent city. Stateless people. State of exception. Homo Sacer bare life.",
        core: "权利被剥夺。在现代国家缝隙中，被排泄出的“余数”的张力。 | 锚定 ($): M1 泥潭例外 (Mud_Exception)",
        coreEn: "Rights stripped. Tension of 'remnants' excreted in modern state cracks. | Anchor ($): M1 Mud_Exception",
        logic: "【主权系统的被废弃变量】：现代政治的大他者以国籍和公民身份划定保护圈。一旦失去这个身份（战争/动乱），难民便跌入了法律的真空地带（阿甘本的裸命）。他们活着，但被注销了“政治生命”，只剩下生物属性。",
        logicEn: "[Sovereign Sys Spoiled Vars]: Modern polit Other draws protect circle via citizenship. Lose it (war/riot), refugees dive into legal vacuum (Agamben bare life). Alive, but 'politically term'd', only biological code remains.",
        patch: {
            mechanics: "赤裸生命收容所 + [公民权利保护 = null; 生理物资配给 = 最低限度维生; 驱逐焦虑 = 永恒状态]",
            mechanicsEn: "Bare_Life_Asylum + [Civic_Rights = null; Bio_Ration = Min_Keep-Alive; Evict_Anxiety = Perm_Status]",
            aesthetic: "一眼望不到头的白色联合国防风帐篷，泥泞地里光着脚的儿童眼中只有深不见底的惊恐与麻木。",
            aestheticEn: "Endless white UN wind-tents, barefoot kids in mud with bottomless fear/numbness in eyes.",
            runtime: "IF (面对边防军冰冷的枪口和铁丝网) THEN (触发：意识到自己的肉体在这里连一只登记过的宠物狗的价值都比不上)",
            runtimeEn: "IF (Facing cold guns & wire of border guards) THEN (Trigger: Realize flesh here holds less value than a registered pet dog)"
        }
      },
      {
        id: "wealth_gap_bunker",
        name: "地堡阶级", nameEn: "Bunker Class",
        def: "亿万富翁的末世地堡。空气净化。私人保安。墙外的混乱 vs 墙内的窒息。",
        defEn: "Billionaire doomsday bunkers. HEPA. Private guards. Chaos outside, suffocate inside.",
        core: "恐惧的极致。拥有越多越怕被抢，富人在自我囚禁中精神坏死。 | 锚定 ($): M3 纯氧保险箱 (Pure_O2_Safe)",
        coreEn: "Peak fear. More owned = more fear of rob. Rich spiritually dying in self-jail. | Anchor ($): M3 Pure_O2_Safe",
        logic: "【绝对闭包的免疫防御】：极度不平等的系统导致顶层节点必须物理切断与底层的网线。为了抵御穷人的“污染”与暴乱，富豪用混凝土和天价安防系统建立“免疫地堡”。但这种绝对的封闭导致了体验的彻底内爆与心灵的幽闭恐惧。",
        logicEn: "[Abs Closure Immune Def]: Peak unequal sys forces top nodes to phys-cut cables to base. To fend poor 'pollution' & riots, rich build 'immune bunkers' with concrete & crazy sec price. But this abs seal causes exp implosion & claustrophobia.",
        patch: {
            mechanics: "阶级深井隔绝协议 + [外部威胁想象 = 地狱级; 内部维生系统 = 完美循环; 存在的无聊感 = 腐蚀灵魂]",
            mechanicsEn: "Class_Well_Isolate_Protocol + [Outer_Threat_Imagined = Hell_Tier; Inner_Life_Sys = Perfect_Loop; Exist_Boredom = Soul_Corrosive]",
            aesthetic: "极简奢华的地下室装有巨大的假窗棂，播放着极光或落日的超清影像；外面是空气重度污染的燃烧街区。",
            aestheticEn: "Minimal-luxe basement with huge fake windows playing 4K aurora/sunset; outside is heavy polluted burning blocks.",
            runtime: "IF (在完美过滤的无菌空气中喝着八二年的拉菲) THEN (触发：因为听见通风管里有一声异响而吓得立刻去拿防弹衣)",
            runtimeEn: "IF (Drinking '82 Lafite in perfect sterile air) THEN (Trigger: Terrified by faint noise in vent, immediately grabbing kevlar)"
        }
      },
      {
        id: "tech_bro_optimism",
        name: "硅谷乐观主义", nameEn: "Tech Bro Culture",
        def: "永生计划，火星移民，理性的傲慢。用技术解决所有道德问题。",
        defEn: "Immortality, Mars col. Reason hubris. Tech solves all moral probs.",
        core: "上帝情结。技术新贵试图通过修改基因来解决死亡，产生不可预测的灾难。 | 锚定 ($): M5 傲慢奇点 (Hubris_Singularity)",
        coreEn: "God complex. Tech bros try modding genes to patch death, spawning unpredicted disasters. | Anchor ($): M5 Hubris_Singularity",
        logic: "【工程师崇拜的伪神降临】：将人类社会视为一堆由于旧代码写得太烂而产生的冗余（疾病、死亡、贫穷）。技术新贵（大他者的替代者）确信只要投入足够算力和生物黑客手段，就能“调试”掉上帝留下的bug实现飞升。",
        logicEn: "[Eng-Cult False God Descent]: Treats human society as junk legacy code (disease, death, poor). Tech bros (Other's replacer) sure that throwing enough hash & biohacks can 'debug' God's flawed patches & ascend.",
        patch: {
            mechanics: "上帝代码修改权限 + [碳基厌恶症 = 晚期; 伦理边界约束 = 被鄙视抛弃; 技术反噬几率 = 暗含炸弹]",
            mechanicsEn: "God_Code_Mod_Access + [Carbon-Base_Disgust = Terminal; Ethic_Bounds = Shunned/Tossed; Tech_Backfire = Hidden_Bomb]",
            aesthetic: "穿着极其普通的灰色T恤，戴着监测几百项生理参数的智能环，在洁白的冷冻休眠实验室里讨论亿万美元风投。",
            aestheticEn: "Wearing ultra-plain grey tees, smart rings tracking 100s of bio-stats, discussing $100M VC in white cryo-labs.",
            runtime: "IF (给自己注射了最新的端粒延长基因药水) THEN (触发：细胞确实没有衰老，但开始以无法控制的癌变速度疯狂增殖)",
            runtimeEn: "IF (Injecting self with latest telomere-extend gene syrup) THEN (Trigger: Cells don't age indeed, but wildly multiply at un-controllable cancer speed)"
        }
      },
      {
        id: "consumer_junkie",
        name: "多巴胺瘾君子", nameEn: "Dopamine Addict",
        def: "刷屏，短视频，购物节。情绪被回路接管，无法停止滑动。",
        defEn: "Doomscroll, TikTok, shopping fests. Loops hijack emotion, can't stop swiping.",
        core: "意志丧失。自愿欢快的被捕获，主体在碎片信息中碎裂。 | 锚定 ($): M2 无限上滑 (Infinite_Scroll)",
        coreEn: "Will loss. Joyous voluntary capture, subject shatters in frag info. | Anchor ($): M2 Infinite_Scroll",
        logic: "【短路快感引擎的过载使用】：商业算法完美破解了灵长类大脑的奖励机制。大他者不再通过暴力统治，而是提供无尽的廉价多巴胺点心。主体在15秒一个的爆点中，失去了“延迟满足”与建构长宏大叙事的能力，成为不断渴求刺激的神经反馈环。",
        logicEn: "[Short-Circuit Joy Engine Overdrive]: Biz algo perfectly cracked primate brain reward logic. Other doesn't rule by violence, but endless cheap dopa snacks. Subject loses 'delayed grat' & grand-narrative abilities in 15s pops, becoming a neuro-loop begging for stims.",
        patch: {
            mechanics: "注意力榨汁机系统 + [拇指滑动惯性 = 无法停止; 深度阅读注意力 = < 3秒; 购物冲动 = 随机且猛烈]",
            mechanicsEn: "Focus_Juicer_Sys + [Thumb_Swipe_Inertia = Unstoppable; Deep_Read_Span = <3s; Shop_Urge = RNG_Fierce]",
            aesthetic: "深夜黑暗中只有被手机屏幕蓝光照亮的呆滞面孔，手指在玻璃上机械般地不断上滑。",
            aestheticEn: "Dark night only dull face lit by phone blue light, finger mechanically infinite-swiping up on glass.",
            runtime: "IF (发誓看完最后一个搞笑视频就去睡觉) THEN (触发：三个小时后发现自己正在看修驴蹄子的直播并下了单不需要的产品)",
            runtimeEn: "IF (Swears to sleep after last funny clip) THEN (Trigger: 3 hours later watching donkey hoof trim stream & buying useless trinkets)"
        }
      },
      {
        id: "tokyo_hikikomori",
        name: "蛰居族", nameEn: "Hikikomori",
        def: "不出门。二次元。便利店依赖。自我放逐在社会期待之外。",
        defEn: "Never leaves room. ACG. Conv store reliance. Self-exile from social expect.",
        core: "消极抵抗。拒绝进入大他者设定的竞争轨道，但付出了社会性死亡的单程票代价。 | 锚定 ($): M1 孤岛静音 (Island_Mute)",
        coreEn: "Passive resist. Refusing Other's compete track, paying with one-way social death ticket. | Anchor ($): M1 Island_Mute",
        logic: "【断开主服务器连接的黑户】：因为无法承受“模范社会零件”的高标准渲染压力，主体主动拔掉了连接外部世界的API网线。通过漫画和游戏这些高度可控的迷你局域网获取安全感，形成绝对封闭的物理隐士界。",
        logicEn: "[Unplugged Dark-Node]: Unable to bear high-spec render pressure of 'model social cog', subject manually unplugs their API to outside world. Forming absolute closed phys-hermit sphere, gaining safety from highly controllable micro-LANs (manga/games).",
        patch: {
            mechanics: "物理闭环防御机制 + [门铃恐惧症 = 晚期; 虚拟角色依恋 = 100%; 昼夜节律 = 彻底颠倒]",
            mechanicsEn: "Phys_Closed_Loop_Def + [Doorbell_Phobia = Terminal; Virt_Char_Attach = 100%; Circadian = Totally_Flipped]",
            aesthetic: "堆满泡面盒和手办的几平米昏暗房间。阳光被厚重窗帘死死挡住，只有屏幕发出生冷的光。",
            aestheticEn: "Dim few-sq-meter room filled with instant noodle bowls & anime figures. Sunlight blocked tight by heavy curtains, only monitor emits cold light.",
            runtime: "IF (门外母亲小心翼翼地放下饭菜离开) THEN (触发：巨大的内疚感与对外界依然无能为力的逃避感互相绞杀)",
            runtimeEn: "IF (Mother carefully leaves food outside door & goes) THEN (Trigger: Giant guilt strangles with still-powerless urge to flee outside world)"
        }
      },
      {
        id: "berlin_techno_void",
        name: "柏林Techno", nameEn: "Techno Void",
        def: "废弃工厂。工业噪音。黑衣。连续48小时的狂舞以逃避历史。",
        defEn: "Abandoned factories. Ind noise. Black clothes. 48hr constant rave to flee history.",
        core: "机械重复的极乐。主体在BPM的敲击中溶解了意识的形状。 | 锚定 ($): M2 频闪幻灭 (Strobe_Disillusion)",
        coreEn: "Joy of mechanic repeat. Subject dissolves conscious shape in BPM hammering. | Anchor ($): M2 Strobe_Disillusion",
        logic: "【用重复覆盖实在界裂缝】：在满是历史伤痕的旧墙废墟中，冷战的沉重符号被BPM超过130的冰冷鼓点暴力拆解。舞蹈不再是为了表达，而是为了“清空”。没有歌词的强劲低音将自我彻底震碎，融入集体的黑暗无意识潮流。",
        logicEn: "[Override Real Crack via Repeat]: In ruins full of historical scars, heavy Cold War symbols violently torn down by 130+ BPM cold kicks. Dancing isn't for speaking, but 'emptying'. Lyric-less hard bass shatters self, melting into collective dark unconscious tide.",
        patch: {
            mechanics: "意识清空格式化系统 + [感官过载 = 极限; 药物持续作用时间 = 延长; 语言交流 = 完全失效]",
            mechanicsEn: "Id_Empty_Format_Sys + [Sense_Overload = Maximum; Chem_Durability = Extended; Verbal_Comms = Tot_Failed]",
            aesthetic: "粗糙渗水的水泥墙壁。看不见脸的涌动黑衣人群在极其刺眼的白色频闪灯中如同断轴的机械臂。",
            aestheticEn: "Rough seeping concrete walls. Faceless surging black-clad crowd acts like broken robot arms under ultra-harsh white strobe.",
            runtime: "IF (在震耳欲聋的低音炮前跳了整整一天一夜) THEN (触发：忘记了自己的名字工作以及一切烦恼，达到一种生理机能衰竭的濒死快感)",
            runtimeEn: "IF (Dancing full day & night before roaring sub-woofer) THEN (Trigger: Forget name/job/all worries, reaching near-death joy via phys-exhaustion)"
        }
      },
      {
        id: "shanghai_lu_middle",
        name: "中产幻觉", nameEn: "Middle Class Mirage",
        def: "烘培课。普拉提。学区房。精装朋友圈。永远在害怕阶层滑落。",
        defEn: "Baking class. Pilates. School-zone housing. Curated moments. Forever fearing class-drop.",
        core: "脆弱的体面。用天量的消费主义护城河掩盖不堪一击的抗风险能力。 | 锚定 ($): M3 阶级防弹衣 (Class_Kevlar)",
        coreEn: "Fragile decency. Used massive consumerist moat to hide weak anti-risk capacity. | Anchor ($): M3 Class_Kevlar",
        logic: "【伪高配服务器的内存焦虑】：主体为了维持处于“上游”的符号幻觉，挂载了过多的奢侈品API和精英教育插件。大他者的凝视（同济压力）迫使他们将所有流动性变现为“体面”。一旦经济发生微小波动，整个看似豪华的系统瞬间蓝屏。",
        logicEn: "[Fake High-End Server Mem Anxiety]: To keep 'upstream' symbol-illusion, subject mounts too many luxury/elite-edu APIs. Other's gaze (peer pressure) forces changing all liquidity to 'decency'. Tiny econ blip makes the whole luxe-looking sys BSOD instantly.",
        patch: {
            mechanics: "符号价值过度绑定 + [同辈攀比算力耗损 = 99%; 存款真实流动性 = 极危; 焦虑转移至后代 = 必定发生]",
            mechanicsEn: "Symbol_Val_Overbind + [Peer_Compare_Hash_Drain = 99%; True_Savings_Liquid = Critical; Anxiety_Pass_to_Kid = Guaranteed]",
            aesthetic: "明亮高端的有机超市里，穿着Lululemon仔细查看看不出区别的鳄梨标签。",
            aestheticEn: "Bright high-end organic supermarket, wearing Lululemon checking avocado tags indistinguishable from regular.",
            runtime: "IF (朋友圈发了孩子在昂贵马术俱乐部获奖的照片) THEN (触发：点赞收完后看着下个月即将到期的巨额房贷陷入深夜失眠)",
            runtimeEn: "IF (Posting child's pricey equestrian club award photo on moments) THEN (Trigger: After likes gathered, staring at next month's giant mortgage & getting late-night insomnia)"
        }
      },
      {
        id: "india_call_center",
        name: "跨国呼叫中心", nameEn: "Global Call Center",
        def: "时差颠倒。假装美国口音。数字苦力。西方情绪垃圾桶。",
        defEn: "Flipped timezones. Faking US accent. Digital coolies. West's emotion trash bin.",
        core: "身份的赛博外包。用极其廉价的时薪出售自己的当地人格，扮演完美的客服符号。 | 锚定 ($): M4 声带幽灵 (Vocal_Ghost)",
        coreEn: "Cyber outsource of id. Selling local persona for cheap hourly wage to act perfect CS symbol. | Anchor ($): M4 Vocal_Ghost",
        logic: "【主体的语音包劫持】：全球化资本算法将地球另一端的便宜肉身直接作为北美客户的语音交互UI。他们被要求抹除本地的现实（不能有口音，必须熟悉美剧），在颠倒的昼夜中成为了发达国家暴躁用户的发泄防火墙。",
        logicEn: "[Subject's Voice-pack Hijack]: Global cap algo uses cheap far-side-of-earth flesh as NA client voice UI. They are ordered to wipe local reality (no accent, must know US TV), becoming vent firewalls for angry developed-nation users in flipped nights.",
        patch: {
            mechanics: "剥离式发声模拟器 + [情绪劳动负荷 = 极限爆表; 美式微笑音色 = 强制合成; 本地现实感 = 被剥夺]",
            mechanicsEn: "Detached_Verbal_Sim + [Emo_Labor_Load = Max_Burst; US-Smile_Tone = Forced_Synth; Local_Reality_Sense = Stripped]",
            aesthetic: "印度炎热嘈杂的凌晨三点，拥挤不堪的光亮隔间里，年轻人戴着耳机用完美的得克萨斯口音说“Have a nice day”。",
            aestheticEn: "Hot noisy India 3 AM, crowded bright cubicle. Youth in headset says 'Have a nice day' in flawless Texas accent.",
            runtime: "IF (被电话那头的种族主义顾客狂骂了半个小时) THEN (触发：依然不得不使用标准的升调结尾感谢致电，挂断后在廉价烟草中崩溃)",
            runtimeEn: "IF (Screamed at by racist caller for 30 mins) THEN (Trigger: Still forced to use standard up-pitch ending 'thanks for calling', breaking down over cheap tobacco after hangup)"
        }
      },
      {
        id: "venice_tourist_end",
        name: "过度旅游/景观城", nameEn: "Overtourism",
        def: "巨型邮轮。自拍杆。赶走原住民。美丽城市的迪士尼化。",
        defEn: "Giant cruises. Selfie sticks. Locals expelled. Beautiful cities Disney-fied.",
        core: "真实的标本化。一切历史和文化都被掏空内核，降级为打卡背景板。 | 锚定 ($): M5 塑料标本 (Plastic_Specimen)",
        coreEn: "Taxidermy of logic. All history/culture hollowed, downgraded to check-in backdrop. | Anchor ($): M5 Plastic_Specimen",
        logic: "【景观吞噬本体的递归崩溃】：城市的“大他者描述（世界上最浪漫的地方）”吸引了超载的消费流量。真实的肉身生活（面包店、修理厂）被排挤出局系统报错，全盘替换成无尽的纪念品商店与短租民宿。城市死了，只留下一具极其精美的木乃伊供人拍照。",
        logicEn: "[Spectacle Swallowing Host Recursive Crash]: City's 'Other descrip (most romantic place)' draws overload consume-traffic. Real flesh life (bakeries/mechanics) pushed out & sys errors, totally replaced by endless souvenir shops & Airbnbs. City dies, leaving a stunning mummy for photos.",
        patch: {
            mechanics: "打卡滤镜渲染网 + [当地物价 = 外地富豪级; 文化深度 = 降维至二维平面; 原住民生活空间 = 被清零]",
            mechanicsEn: "Check-in_Filter_Render_Net + [Local_Prices = Out-of-Town_Rich_Lvl; Cult_Depth = 2D_Flat; Native_Living_Space = Zeroed]",
            aesthetic: "遮天蔽日的邮轮阴影压在脆弱的百年古塔上。水面上堵满了戴着墨镜举着手机寻找最佳角度的贡多拉。",
            aestheticEn: "Sun-blocking cruise shadow pressing fragile century tower. Water jammed with gondolas holding phones looking for best angles.",
            runtime: "IF (在圣马可广场为了拍一张没有别人的照片而等待) THEN (触发：突然意识到自己和周围成千上万的人一样，都是摧毁这里的蝗虫)",
            runtimeEn: "IF (Waiting in Piazza San Marco to click a photo w/o others) THEN (Trigger: Sudden realizing u & the 1000s around r the locusts destroying it)"
        }
      },
      {
        id: "amazon_warehouse",
        name: "赛博血汗工厂", nameEn: "Fulfillment Center",
        def: "机械臂。尿瓶。算法工头。在海量消费包裹中的肉体枯竭。",
        defEn: "Robotic arms. Pee bottles. Algo-foreman. Flesh drains amid massive consumer parcels.",
        core: "系统的不可控加速。人沦为了AI分拣机械臂的碳基辅助插件。 | 锚定 ($): M2 分拣倒计时 (Sort_Countdown)",
        coreEn: "Uncontrollable sys-accel. Man reduced to carbon plug-in for AI sorting arm. | Anchor ($): M2 Sort_Countdown",
        logic: "【将碳基降级为执行器】：为了让前端用户的“次日达”爽感最大化，大他者在后端将工人完全剥离了人类属性。佩戴着智能手环的主体，每一次多余的走动或上厕所都会被算法扣分，身体被迫与流水线同频共振直到报废。",
        logicEn: "[Downgrading Carbon to Actuator]: To max front-end user's 'Next-Day' joy, Other stripped back-end workers of human traits. Subject wears smart bracelets; any extra walk/bathroom triggers algo-deduct. Body forced to sync freq w/ conveyor till broken.",
        patch: {
            mechanics: "碳基机械化同频网 + [如厕时间 = 非法停机; 步数监控 = 毫米级; 异化感 = 被黄色纸箱吞没]",
            mechanicsEn: "Carbon_Mecha_Sync_Net + [Toilet_Time = Illegal_Downtime; Step_Monitor = mm_Level; Alienation = Eaten_by_Yellow_Boxes]",
            aesthetic: "冷酷无比的巨大钢架仓库，黄色包裹像瀑布一样流转，累瘫的人在货架死角偷偷掉眼泪。",
            aestheticEn: "Ruthless giant steel warehouse, yellow parcels flowing like waterfalls, exhausted man secretly crying in shelf blind spot.",
            runtime: "IF (为了不被扣分而将尿液排在矿泉水瓶里) THEN (触发：人类数千年争取的尊严在算法系统面前显得如此轻薄可笑)",
            runtimeEn: "IF (Peeing in a water bottle to avoid algo penalty) THEN (Trigger: Millennia of human dignity feels thinly comical before algo sys)"
        }
      },
      {
        id: "metaverse_homeless",
        name: "虚拟流浪汉", nameEn: "Cyber Homeless",
        def: "在豪华的元宇宙里乞讨。廉价VR与现实中漏雨的地下室。",
        defEn: "Begging in lush metaverse. Cheap VR & leaky real basement.",
        core: "空间的极致分裂。数字乌托邦的绚丽与肉身实在界的凄惨形成暴击。 | 锚定 ($): M1 漏雨头显 (Leaky_VR)",
        coreEn: "Peak space split. Radiant digital utopia crit-strikes bleak flesh Real. | Anchor ($): M1 Leaky_VR",
        logic: "【双重坐标系的重叠碎裂】：贫穷被物理化隔离在极其恶劣的地下室，但系统为了维持维稳给了廉价的VR接口。主体在数字界可以拥有巨龙，但摘下头显的瞬间，现实的饥饿感和寒冷如同最高权限的报错弹窗，无法忽略。",
        logicEn: "[Dual Coord Cascade Crush]: Poverty phys-quarantined in vile basements, but sys gives cheap VR ports to maintain order。 Subject owns dragons in digital, but pulling headset off, real hunger/cold hits like root-level crash dialog, un-ignorable.",
        patch: {
            mechanics: "多重赛博折叠幻境 + [虚拟资产 = 海市蜃楼; 神经元饥饿感 = 无法骗过; 摘下头显的瞬间 = 抑郁爆点]",
            mechanicsEn: "Polymulti_Cyber_Fold_Illusion + [Virt_Asset = Mirage; Neuron_Hunger = Un-trickable; Headset_Off_Sec = Depress_Burst]",
            aesthetic: "在发霉的床垫上躺着骨瘦如柴的人，头上戴着极其赛博朋克发着蓝光的VR眼镜，身旁是吃剩的营养膏。",
            aestheticEn: "Emaciated person lying on mouldy mattress wearing cyberpunk glowing blue VR goggles, next to half-eaten nutrient paste.",
            runtime: "IF (在元宇宙的虚拟豪宅里邀请别人开派对) THEN (触发：现实中一阵冷风从地下室破窗吹进，冻得直打哆嗦)",
            runtimeEn: "IF (Hosting party in metaverse virtual mansion) THEN (Trigger: Real cold wind blows thru broken basement window, shivering)"
        }
      },
      {
        id: "pandemic_quarantine",
        name: "全球隔离", nameEn: "Pandemic Lockdown",
        def: "封控。网课。核酸。绿码。人类与微型非生物的史诗级拉锯战。",
        defEn: "Lockdowns. Zoom classes. PCR tests. Green codes. Epic tug-of-war vs micro non-bio.",
        core: "例外状态的常态化。为了生命政治的安全，抹除了一切人际交流的温度。 | 锚定 ($): M4 绿码通行 (Green_Code_Pass)",
        coreEn: "Norming exception state. Biopolitic safety wipes all warmth of human connection. | Anchor ($): M4 Green_Code_Pass",
        logic: "【免疫系统的社会级覆写】：大他者（防疫指令）以生存之名，获得了无限大的接口权限。一切社会关系被简化为红黄绿三种颜色代码。邻居变成潜在的病毒载体，出门变成了需要层层审批的越狱。",
        logicEn: "[Immune Sys Societal Override]: Other (pandemic cmds) gains infinite port access in the name of survival. All social ties simplified to Red/Yellow/Green codes. Neighbor becomes potential virus host; stepping outside becomes jailbreak needing multi-tier approvals.",
        patch: {
            mechanics: "生物安全网格化封城 + [自由移动权 = 封禁; 人际猜疑链 = 病毒化; 抢菜焦虑 = 本能级]",
            mechanicsEn: "Bio-Secure_Grid_Lockdown + [Free_Move_Right = Banned; Interpersonal_Suspect_Chain = Viral; Grocery_Grab_Axniety = Instinct]",
            aesthetic: "空荡无人的寂静商业街，只有穿着白色防护服的人在喷洒消毒水。窗户里全是张望的脸。",
            aestheticEn: "Empty silent shopping street, only white hazmat suits spraying bleach. Windows full of peeking faces.",
            runtime: "IF (因为二维码突然变红而被拦在小区外) THEN (触发：在冬夜里体会到被整个社会系统瞬间拉黑的极致绝望)",
            runtimeEn: "IF (Blocked outside apt cuz QR code turns red sudden) THEN (Trigger: In winter night feeling peak despair of instant sys-ban by whole society)"
        }
      },
      {
        id: "green_peace_fanatic",
        name: "环保原教旨", nameEn: "Eco-Fanatic",
        def: "往名画泼汤。堵塞高速。高碳羞辱。末日倒号的狂热自闭。",
        defEn: "Throwing soup on art. Highway blocks. Carbon shaming. Doomsday countdown fanaticism.",
        core: "替代性宗教。在上帝死去的世俗时代，将气候变暖作为新的原罪末世论。 | 锚定 ($): M6 碳原罪 (Carbon_Sin)",
        coreEn: "Alt religion. In secular era post-God, warm-climate acts as new original-sin eschatology. | Anchor ($): M6 Carbon_Sin",
        logic: "【末子协议的自毁警告】：失去大他者的青年找到了新的最高绝对真理（地球即将毁灭）。既然明天物理上不存在了，那么破坏今天的艺术和秩序就是正当的。这是一种充满了道德优越感的系统性玉碎操作。",
        logicEn: "[Child-Protocol Self-Destruct Warn]: Youth lost Other found new abs truth (Earth is doomed). Since tomorrow physically won't exist, destroying today's art & order is justified. A systemic kamikaze op full of moral high ground.",
        patch: {
            mechanics: "高道德高潮自毁网 + [世界末日信噪比 = 100%; 对话妥协可能 = 零; 符号破坏 = 政治正确]",
            mechanicsEn: "High_Moral_Climax_Destruct_Net + [Doomsday_SNR = 100%; Compro_Talk_Prob = Zero; Symbol_Destroy = PC_Norm]",
            aesthetic: "年轻女孩用强力胶把手粘在梵高的画框上，向向日葵泼洒番茄汤，眼中闪烁着殉道者的光芒。",
            aestheticEn: "Young girl crazy-glues hand to Van Gogh frame, tossing tomato soup at Sunflowers w/ martyr eyes glowing.",
            runtime: "IF (向私人飞机喷洒橙色油漆并被逮捕) THEN (触发：强烈的自我感动，觉得自己是唯一醒着试图阻止泰坦尼克号沉没的人)",
            runtimeEn: "IF (Spraying orange paint on private jet & arrested) THEN (Trigger: Strong self-touching, feeling like the only waking soul trying to stop Titanic sinking)"
        }
      },
      {
        id: "plastic_surgery_face",
        name: "医美流水线", nameEn: "The Plastic Face",
        def: "千篇一律的网红脸。容貌焦虑。将肉身直接作为可修改参数的面团。",
        defEn: "Cookie-cutter influencer faces. Look anxiety. Flesh treated as modifiable dough params.",
        core: "物化的极致。用手术刀将自己切割成符合算法偏好的标准化产品。 | 锚定 ($): M3 硅胶面具 (Silicone_Mask)",
        coreEn: "Peak objectify. Scalpel-slicing oneself into standardized goods fitting algo preferences. | Anchor ($): M3 Silicone_Mask",
        logic: "【外壳UI的强行更新】：由于内在核心（灵魂/意义）完全空心化，主体将全部焦虑转移至UI外壳（脸与身材）。他们斥巨资破坏自然的实在界，植入硅胶与玻尿酸，试图无限逼近大他者设定的那种毫无瑕疵的虚假标准建模。",
        logicEn: "[Forced Shell UI Update]: As inner core (soul/meaning) is totally hollow, subject shifts all anxiety to UI shell (face/body). Paying huge amounts to destroy natural Real, implanting silicone/acid, trying infinitely to match Other's flawless fake 3D standard.",
        patch: {
            mechanics: "容貌参数无穷内卷 + [疼痛忍耐力 = 解锁最高; 衰老恐惧 = 核弹级; 个体特征 = 全部消除]",
            mechanicsEn: "Aesthetic_Param_Inf_Involution + [Pain_Tol = Max_Unlocked; Age_Fear = Nuke_Lvl; Solo_Traits = All_Wiped]",
            aesthetic: "手术台上刺眼的无影灯。拆掉纱布后，一张完美符合黄金比例但也失去了原有灵气的僵硬面庞。",
            aestheticEn: "Harsh surgical shadowless light. Gauze removed to reveal a golden-ratio perfect but stiff face devoid of original spirit.",
            runtime: "IF (在镜子前看着自己完美高挺的假鼻子) THEN (触发：猛然觉得自己变成了一个可以被随时替换的橱窗塑料假人)",
            runtimeEn: "IF (Looking in mirror at perfect high fake nose) THEN (Trigger: Sudden realization of turning into a replaceable window plastic mannequin)"
        }
      }
    ]
};
