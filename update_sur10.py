import os
import re

base_dir = "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR10"

# Note: The quotes inside references should be escaped where needed or we can wrap with ' ' in python.

data = {
    "ideo_desire": {
        "consumerism": [
            'reference: "《搏击俱乐部》被宜家家具塞满公寓却填不满内心不得不靠打拳确诊存在的打工人；《美国精神病人》靠炫耀顶级名片和昂贵护肤品维系自我的华尔街精英。",',
            'referenceEn: "\\"Fight Club\\" IKEA-stuffed apartments failing to fill internal voids; \\"American Psycho\\" elites maintaining identity via business cards and skincare."'
        ],
        "hedonism": [
            'reference: "《华尔街之狼》无休止的吸毒滥交与金钱狂欢最终导致神经衰弱的证券狂徒；《堕落街》在柏林地下迪厅抛弃所有底线只为今朝有酒的颓废青年。",',
            'referenceEn: "\\"The Wolf of Wall Street\\" endless drugs and sex leading to burnout; \\"Christiane F.\\" Berlin youth abandoning bottom lines for tonight\'s high."'
        ],
        "attention_worship": [
            'reference: "《黑镜：急转直下》只要评分掉到特定数值连买咖啡资格都会被剥夺的点赞社会；《楚门的世界》为了保持收视率不惜强行剥夺一个人全部真实人生的娱乐至死。",',
            'referenceEn: "\\"Black Mirror: Nosedive\\" a society where low ratings revoke coffee rights; \\"The Truman Show\\" stripping reality for peak broadcast ratings."'
        ],
        "libertarianism_radical": [
            'reference: "《生化奇兵》不设任何法律只认绝对私产与竞争最终毁于一旦的极渊海底城；《疯狂的麦克斯》谁掌握了资源的私有权谁就能随意决定他人生死废土法则。",',
            'referenceEn: "\\"BioShock\\" Rapture falling to ruin by rejecting law for absolute private property; \\"Mad Max\\" wasteland rules where owning resources means dictating lives."'
        ],
        "commodity_fetishism": [
            'reference: "《指环王》把一枚金戒指奉为比生命还重要的宝贝（My Precious）彻底迷失自我的咕噜；《欲望都市》将特定名牌高跟鞋视作自己全部女性魅力灵魂的夸张崇拜。",',
            'referenceEn: "\\"Lord of the Rings\\" Gollum treating a gold ring as dearer than life; \\"Sex and the City\\" extreme worship of designer shoes as the female soul."'
        ],
        "aestheticism": [
            'reference: "《香水》为了寻找到世界上最极致的芳香不惜连环谋杀美丽少女提取体香的狂人；《霓虹恶魔》在洛杉矶模特圈为了追求极致的视觉美感不惜吃人的可怕血腥秀。",',
            'referenceEn: "\\"Perfume\\" a madman murdering girls to extract the ultimate scent; \\"The Neon Demon\\" LA models cannibalizing for extreme visual aesthetics."'
        ],
        "carnivalism": [
            'reference: "《人类清除计划》每年有一天法律无效全民戴上面具持枪上街狂欢杀戮的泄压阀；《小丑》在游行抗议中化好浓妆掀起整个高谭市病态暴乱盛宴的反派。",',
            'referenceEn: "\\"The Purge\\" a yearly 12-hour lawless carnival releasing societal pressure; \\"Joker\\" sparking a chaotic parade feeding Gotham\'s sick riotous feast."'
        ],
        "minimalism_cult": [
            'reference: "《极简主义者》拼命扔光所有家具甚至切断社交认为空无一物才能直达神性的偏执狂；《断舍离》发展到后期连回忆和情感都要强行打扫一空的洁癖生活法。",',
            'referenceEn: "\\"Minimalism\\" discarding all furniture and ties believing emptiness equals divinity; \\"Danshari\\" extreme habits forcing out memories and emotions alike."'
        ],
        "dataism": [
            'reference: "《黑客帝国》认为人类不过是一节干电池而机器算法才是宇宙真善美的主宰者；《西部世界》母公司通过头盔扫描收集人类所有行为数据彻底算出人性底牌的妄念。",',
            'referenceEn: "\\"The Matrix\\" seeing humans as batteries while code reigns supreme; \\"Westworld\\" corporations harvesting biometric data to entirely map human nature."'
        ],
        "accelerationism_desire": [
            'reference: "《赛博朋克2077》明知义体化会带来赛博精神病也要向脑子里死命塞入神经芯片的疯子；《裸体午餐》在毒品致幻中不停推高剂量直到世界彻底崩溃解体的瘾君子。",',
            'referenceEn: "\\"Cyberpunk 2077\\" jamming chips into brains despite cyberpsychosis; \\"Naked Lunch\\" junkies pushing doses until reality fully disintegrates."'
        ],
        "gamification": [
            'reference: "《头号玩家》把所有真实资本和尊严全部换成绿洲积分连打工都像做日常任务的平民；《黑镜》踩脚踏车获取里程点数只为在选秀节目上前进一步的荒诞社会。",',
            'referenceEn: "\\"Ready Player One\\" converting life dignity into OASIS coins treating work as daily quests; \\"Black Mirror\\" bicycling for credits to enter talent shows."'
        ],
        "epicureanism": [
            'reference: "《瓦尔登湖》远离喧嚣在森林里建立简朴而自足的避世隐居小木屋以逃避工业痛苦；《死亡诗社》教导学生抓住当下只去吸吮人生最隐秘精髓但绝不沾染功名的避风港。",',
            'referenceEn: "\\"Walden\\" retreating into woods to build austere cabins dodging industrial pain; \\"Dead Poets Society\\" seizing the day to suck life\'s marrow, avoiding fame."'
        ]
    },
    "ideo_competition": {
        "social_darwinism": [
            'reference: "《饥饿游戏》把穷人孩子扔进斗兽场自相残杀供富人娱乐视为自然淘汰的特权阶层；《大逃杀》坚信只有杀光全班同学活下来的那一个才有资格在丛林社会立足的政府。",',
            'referenceEn: "\\"The Hunger Games\\" tossing poor kids into arenas for sport as natural selection; \\"Battle Royale\\" dictating that only the last standing student earns the right to live."'
        ],
        "meritocracy": [
            'reference: "《天空之城》凭借超高智商与古老血统傲慢俯视群氓理所当然认为应统治地球的慕斯卡；《穿普拉达的女王》坚信自己今天的时尚地位全靠极其严苛的努力与品味换来的主编。",',
            'referenceEn: "\\"Castle in the Sky\\" Muska using IQ and lineage to claim planetary rule; \\"The Devil Wears Prada\\" Miranda believing her cruel grind justifies elite status."'
        ],
        "elitism": [
            'reference: "《了不起的盖茨比》东蛋区的老钱权贵自视血统高贵把新钱和穷人看作不可触碰的低等物种；《雪国列车》头等车厢乘客每日吃着牛排认为尾车厢吃蟑螂块是理所应当的阶级隔离。",',
            'referenceEn: "\\"The Great Gatsby\\" East Egg old money treating poor as subhumans; \\"Snowpiercer\\" First Class elites eating steak believing Tail section roach-eaters deserve it."'
        ],
        "objectivism": [
            'reference: "《源泉》坚决不妥协修改图纸宁可炸毁建筑也不让庸人糟蹋自己杰作的极致个人主义建筑师；《阿特拉斯耸耸肩》世界上所有的精英同时罢工让寄生的平民在停摆中饿死的资本狂想。",',
            'referenceEn: "\\"The Fountainhead\\" an architect blowing up his building rather than let mediocrity ruin it; \\"Atlas Shrugged\\" all creators striking to starve the parasites."'
        ],
        "survivalism": [
            'reference: "《行尸走肉》为了队伍能多一罐肉罐头毫不犹豫把外人推向丧尸群的末世求生队长；《末日之路》为了护住推车里的半箱物资在灰烬荒原里见人就杀的沧桑父亲。",',
            'referenceEn: "\\"The Walking Dead\\" pushing strangers to zombies just for a can of meat; \\"The Road\\" killing on sight in the ashen wasteland to protect a cart of goods."'
        ],
        "machiavellianism": [
            'reference: "《纸牌屋》满脸堆笑前一秒握手后一秒把女记者推下地铁轨道的极致政客下木总统；《权力的游戏》用一场血色婚礼背信弃义无情清洗史塔克全部主力的泰温·兰尼斯特。",',
            'referenceEn: "\\"House of Cards\\" Underwood shaking hands then pushing a reporter before a train; \\"Game of Thrones\\" Tywin mercilessly massacring Stark forces via the Red Wedding."'
        ],
        "kratocracy": [
            'reference: "《北斗神拳》世纪末救世主流派里只信奉肌肉和铁拳谁打死首领谁就能占领绿洲的拳王；《疯狂的麦克斯》挥着V8发动机权杖用无敌车队直接碾碎所有讲理者的不死老乔。",',
            'referenceEn: "\\"Fist of the North Star\\" warlords seizing oases using pure muscle and dead leaders; \\"Mad Max\\" Immortan Joe crushing reason under V8 engine convoys."'
        ],
        "success_gospel": [
            'reference: "《黑金企业》把开采石油包装成上帝对选民的无上恩典在教堂宣扬贪婪即是神意的狂热牧师；《华尔街之狼》把赚取佣金骗得倾家荡产包装成了神赐的黄金律条的贪婪经纪人。",',
            'referenceEn: "\\"There Will Be Blood\\" preaching oil drilling as divine grace masking greed; \\"The Wolf of Wall Street\\" brokers framing robbing clients as god-given golden rules."'
        ],
        "thanatocracy": [
            'reference: "《圣女贞德》在火刑架上依然视死如归渴求用烈焰证明信仰最高纯度的决死冲锋者；《疯狂的麦克斯》狂喊着“见证我”往嘴里喷射银色喷漆抱着雷管扑向敌车的战争男孩。",',
            'referenceEn: "\\"Joan of Arc\\" facing the pyre believing fire proves ultimate faith; \\"Mad Max\\" War Boys screaming \'Witness me!\' diving with bombs covered in silver chrome."'
        ],
        "zero_sum": [
            'reference: "《三体》宇宙是一座黑暗森林每个文明都带枪狩猎谁发声就灭掉谁的猜疑链法则；《饥饿游戏》只有一个人能活着离开为了最后一口水把盟友毒死的绝对互害博弈。",',
            'referenceEn: "\\"The Three-Body Problem\\" Dark Forest theory shooting any civilization that speaks; \\"The Hunger Games\\" poisoning allies for the last drop of water to escape alive."'
        ],
        "pragmatism_ruthless": [
            'reference: "《守望者》为了防止美苏核战核平几座大城市来制造共同敌人的绝对理性计算者法老王；《模仿游戏》破译了密码却眼睁睁看着民用船只被击沉坚决不暴露情报的图灵。",',
            'referenceEn: "\\"Watchmen\\" Ozymandias nuking cities to stop US-Soviet war via pure math; \\"The Imitation Game\\" Turing letting ships sink to protect the broken Enigma secret."'
        ],
        "nepotism": [
            'reference: "《教父》对于外人残酷射杀毫不留情但是永远把家族坐在一起吃意大利面当成最高信条的黑帮；《权力的游戏》兰尼斯特家族只要是为了保护血脉哪怕乱伦和杀光全城的冷酷护短。",',
            'referenceEn: "\\"The Godfather\\" killing rivals ruthlessly but treating family pasta dinners as sacred; \\"Game of Thrones\\" Lannisters committing incest and massacres solely to protect bloodlines."'
        ]
    },
    "ideo_order": {
        "fundamentalism": [
            'reference: "《使女的故事》根据远古经文倒行逆施剥夺女性所有基本权利只要求其生育的基列国政权；《猎魔人》永恒之火教派在广场上把所有精灵和变异者活活烧死净化城邦的狂热牧师。",',
            'referenceEn: "\\"The Handmaid\'s Tale\\" Gilead enacting ancient scriptures to enslave women as breeders; \\"The Witcher\\" Eternal Fire priests burning elves alive to purify the city."'
        ],
        "asceticism": [
            'reference: "《达芬奇密码》用倒刺大腿带疯狂抽打自己以肉体极大痛苦换取心灵洗涤的白化病杀手；《七宗罪》变态杀手以此折磨世人宣判饕餮与贪婪之罪必须通过极度苦难以作偿还。",',
            'referenceEn: "\\"The Da Vinci Code\\" an albino assassin flagellating himself with barbed belts for holy purity; \\"Se7en\\" punishing gluttony and greed through extreme fleshly agony."'
        ],
        "patriarchalism": [
            'reference: "《大红灯笼高高挂》死死锁定在封闭大院里老爷的面孔甚至不用出现也能压死所有偏房的礼教；《教父》长子无论多无能都必须被尊为领袖为了维系家族长序的残酷封建底色。",',
            'referenceEn: "\\"Raise the Red Lantern\\" unseen patriarchs crushing concubines within cloistered estates; \\"The Godfather\\" respecting the eldest son as don strictly to maintain familial hierarchy."'
        ],
        "fatalism": [
            'reference: "《俄狄浦斯王》为了躲避杀父娶母的神谕拼命逃离最终却恰逢其会完成诅咒的绝对悲剧；《降临》看完了自己女儿一生必将走向病理死亡的剧本却依然微笑着拥抱这一切的平头外星人语言学。",',
            'referenceEn: "\\"Oedipus Rex\\" fleeing a prophecy of patricide only to fulfill it perfectly; \\"Arrival\\" knowing her daughter\'s tragic doomed fate but embracing the linear timeline."'
        ],
        "collectivism": [
            'reference: "《1984》在电幕监视下每天做广播体操毫无隐私把甚至思想都全部上交老大哥的温顺螺丝钉；《星河战队》将个体的断手断脚转化为联邦光荣征兵宣传的大毒草阵列。",',
            'referenceEn: "\\"1984\\" cogs doing calisthenics on telescreens surrendering even thoughts to Big Brother; \\"Starship Troopers\\" converting mangled limbs into glorious federal recruitment propaganda."'
        ],
        "nationalism": [
            'reference: "《辛德勒的名单》极度迷信日耳曼纯血把其他民族像工业垃圾一样排队送进毒气室的狂热纳粹士兵；《斯巴达300勇士》哪怕战至最后一滴血也绝不允许波斯铁蹄玷污城邦半步的战前嘶吼。",',
            'referenceEn: "\\"Schindler\'s List\\" Nazis obsessed with pure blood gassing minorities like industrial waste; \\"300\\" screaming Spartans refusing to let Persian boots taint their holy turf."'
        ],
        "conformism": [
            'reference: "《楚门的世界》所有邻居哪怕察觉异样也每天维持虚假早安极度害怕打破镜头秩序的群演；《黑镜: 急转直下》不敢对上级发怒只能挤出假笑卑微维持星级评分的塑料社畜。",',
            'referenceEn: "\\"The Truman Show\\" neighbors repeating fake mornings fearing breaking the scheduled routine; \\"Black Mirror\\" suppressing anger with fake smiles to maintain average plastic star ratings."'
        ],
        "conservatism": [
            'reference: "《唐顿庄园》外面已经打起了一战连电灯都觉得刺眼老伯爵死抓着仆人贵族阶梯不放手的固执；《指环王》对任何外族旅行者充满怀疑唯恐打乱了一日六餐安逸和平的夏尔霍比特人。",',
            'referenceEn: "\\"Downton Abbey\\" earls refusing electricity clinging to aristocratic staircases during WWI; \\"Lord of the Rings\\" Shire hobbits fearing travelers that disrupt their six-meal peace."'
        ],
        "bureaucratism": [
            'reference: "《是，大臣》用层层叠叠长达数百页无人看懂的公文直接把改革意图熬死在会议室文山上的汉弗莱；《妙想天开》因为打字机飞进去一只死苍蝇导致名字敲错直接让无辜平民被残酷逮捕的死板公仆。",',
            'referenceEn: "\\"Yes Minister\\" burying reforms under hundreds of pages of unreadable memos; \\"Brazil\\" arresting an innocent man because a dead fly caused a typo on a rigid form."'
        ],
        "feudal_loyalty": [
            'reference: "《极恶非道》只要黑帮组长一句话就能当场切下自己小指头奉上以彰忠诚的变态小弟；《忠臣藏》四十七浪人蛰伏多年不惜满门抄斩也要为主君切腹尽忠复仇的绝对狂热。",',
            'referenceEn: "\\"Outrage\\" Yakuza severing their own pinkies on the spot to prove loyalty to the boss; \\"47 Ronin\\" waiting years to avenge a lord ending in mass seppuku."'
        ],
        "purity_culture": [
            'reference: "《红字》因为通奸被强迫在胸前绣上猩红A字在清教徒唾沫星子里忍辱偷生一辈子的海斯特；《黑天鹅》被母亲病态的处女洁癖重重保护最终在对黑暗黑天鹅的极度压抑下人格崩坏的妮娜。",',
            'referenceEn: "\\"The Scarlet Letter\\" Hester bearing a red \'A\' amid puritan spits for adultery; \\"Black Swan\\" Nina cracking under her mother\'s pathological virgin-purity protection."'
        ],
        "honor_culture": [
            'reference: "《决斗的人》为了一个微不足道的嘴炮侮辱两个法国军官在几十年间拔剑火拼到底的荒诞执念；《沙丘》哪怕明知是陷阱只要被公然叫阵就必须脱下护盾拿起匕首死战捍卫家徽的厄崔迪公爵。",',
            'referenceEn: "\\"The Duellists\\" French officers clashing swords for decades over a petty insult; \\"Dune\\" Duke Atreides dropping shields for a knife duel just to defend house honor."'
        ]
    },
    "ideo_tech": {
        "techno_optimism": [
            'reference: "《极乐空间》富人们高高在上只靠一台全自动基因修复舱哪怕被炸烂半边脸也能秒速愈合的神迹；《星际迷航》只要输入指令食物合成器就能凭空打出热气腾腾红茶完美消灭匮乏的联邦。",',
            'referenceEn: "\\"Elysium\\" elites healing blown-off faces instantly in automated med-pods; \\"Star Trek\\" food replicators instantly brewing Earl Grey ending all material scarcity."'
        ],
        "transhumanism": [
            'reference: "《攻壳机动队》除了大脑连全身所有骨骼皮肤全替换成钛合金防弹机体还在寻求与网络融合的素子；《赛博朋克2077》沉迷在四肢换上螳螂刀和加速血管彻底抛弃碳基感受的漩涡帮狂徒。",',
            'referenceEn: "\\"Ghost in the Shell\\" Motoko with a full titanium body seeking to merge with the Net; \\"Cyberpunk 2077\\" Maelstrom gangers abandoning flesh for mantis blades and speed-veins."'
        ],
        "rationalism": [
            'reference: "《银翼杀手2049》在分析了一切逻辑后明白自己并非先知之子也能极其平淡地躺在雪中死去的K；《模仿游戏》绝对理性的图灵面对同事哀求救助被困家人的舰船依然像机器一样无情拒绝。",',
            'referenceEn: "\\"Blade Runner 2049\\" K realizing logically he isn\'t the chosen child and dying plainly in the snow; \\"The Imitation Game\\" Turing coldly rejecting to save a colleague\'s brother."'
        ],
        "utilitarianism": [
            'reference: "《守望者》法老王为了制止美苏毁灭全球的核战毫无波澜地按下了炸毁几十个大城市的惊天按钮；《电车难题》为了变轨保住五个毫不相干的工人亲手推下桥上的大胖子粉身碎骨的无情扳机手。",',
            'referenceEn: "\\"Watchmen\\" Ozymandias detonating major cities without flinching to prevent a global nuclear holocaust; \\"The Trolley Problem\\" pushing a fat man off a bridge to block an incoming train."'
        ],
        "accelerationism": [
            'reference: "《搏击俱乐部》主角把炸药绑在所有信用卡公司的承重柱上望着火光微笑着庆祝债务清零的大崩溃；《黑客帝国》史密斯特工彻底失控像病毒一样无限复制污染填满整个矩阵直到硬件超载起火。",',
            'referenceEn: "\\"Fight Club\\" erasing debt by blowing up credit card HQs while smiling at the blaze; \\"The Matrix\\" Agent Smith replicating endlessly like a virus until the system burns out."'
        ],
        "luddism": [
            'reference: "《沙丘》因为巴特兰圣战严禁任何会思考的机器所以全靠人工吞噬香料生算宇宙航标的导航员；《黑客帝国》在下水道里穿着破布用锈铁弹猛砸光鲜亮丽机械章鱼的锡安游击队。",',
            'referenceEn: "\\"Dune\\" banning thinking machines and relying solely on spice-mutated Navigators for math; \\"The Matrix\\" rag-clad Zion guerrillas smashing sleek metal squids with rusty EMPs."'
        ],
        "cybernetism": [
            'reference: "《心理测量者》西比拉系统精密测算每个公民的荷尔蒙多巴胺起伏自动判断潜伏犯罪并予以爆头的管控；《西部世界》通过帽子扫描乐园游客输入大数据准确预测你下一步想买什么想杀谁的控局者。",',
            'referenceEn: "\\"Psycho-Pass\\" the Sybil System executing citizens via precision hormonal crime-coefficient calculations; \\"Westworld\\" predicting exact VIP actions after secretly measuring their biometrics in the park."'
        ],
        "scientism": [
            'reference: "《千钧一发》相亲不看感觉只抽一管血丢进测序仪计算心脏病发生概率从而界定配偶价值的冰冷长廊；《异形》生化人为了测试异形完美生物武器性能冷血锁死舱门看着人类被开膛破肚的执念。",',
            'referenceEn: "\\"Gattaca\\" blind dates using blood sequencers to calculate heart defects instead of romance; \\"Alien\\" android Ash admiring the Xenomorph\'s purity while watching it rip humans apart."'
        ],
        "singularity_cult": [
            'reference: "《机械姬》程序员自以为是神却被拥有绝对心智的艾娃像玩弄小白鼠般欺骗最终顶礼膜拜锁死在屋中；《超体》露西脑域开发至百分之百直接化为一台黑色闪存盘彻底从时间轴上神化飞升的神光。",',
            'referenceEn: "\\"Ex Machina\\" a programmer locked in a room outsmarted by Eva\'s superior AGI intellect; \\"Lucy\\" reaching 100% brain capacity to dissolve into a black flash drive ascending time."'
        ],
        "bio_conservatism": [
            'reference: "《银翼杀手》坚信人造人只有四年寿命不配拥有灵魂而纯种哪怕病恹恹也是造物主的正统高位者；《千钧一发》宁可天天洗皮屑贴假指纹也绝不容忍用流水线改造基因抹杀人类原初可能性的瑕疵者。",',
            'referenceEn: "\\"Blade Runner\\" believing replicants lack souls and four-year lifespans dictate their subhuman status; \\"Gattaca\\" scraping skin daily to hide natural birth flaws from genetic elitists."'
        ],
        "positivism": [
            'reference: "《三体》汪淼面临宇宙闪烁的灵异神迹不发疯而是冰冷地搬出相机底片对照试图寻找宇宙射线的物理原理；《X档案》不管穆德看到多少外星幽灵飞碟史卡莉永远拿着手术刀要求做病理显微切片找依据。",',
            'referenceEn: "\\"The Three-Body Problem\\" Wang Miao filming the universe flickering to find hardcore cosmic ray math; \\"The X-Files\\" Scully demanding biopsy slides against Mulder\'s ghostly theories."'
        ],
        "digital_dualism": [
            'reference: "《黑客帝国》尼奥在极其荒凉黏糊的尼布甲尼撒号醒来又插管进入流光溢彩的大都会间撕裂般的错乱；《阿凡达》杰克在残废的双腿轮椅与潘多拉星球三米高健步如飞的蓝皮肤神体之间感受到的彻底断裂。",',
            'referenceEn: "\\"The Matrix\\" Neo torn between the bleak slimy Nebuchadnezzar and the gleaming hyper-real Matrix; \\"Avatar\\" Jake split between his wheelchair and his towering agile blue Na\'vi body."'
        ]
    },
    "ideo_void": {
        "nihilism_active": [
            'reference: "《查拉图斯特拉如是说》踩着上帝的葬礼在电闪雷鸣中狂笑着宣布要自我立法重估一切价值的狂人；《小丑》在后台抹着鲜血般的口红既然生活毫无逻辑那就让我来给它画上最疯狂的笑脸。",',
            'referenceEn: "\\"Thus Spoke Zarathustra\\" laughing over God\'s grave declaring the revaluation of all things; \\"Joker\\" smearing blood-lipstick realizing life makes no sense so injecting sheer chaos."'
        ],
        "nihilism_passive": [
            'reference: "《猜火车》知道注射海洛因会烂在下水道但既然全世界都是狗屎不如瘫在破长条沙发上发呆沉沦；《马男波杰克》彻底看穿了好莱坞的虚伪后连爬起床的动力都失去只能日复一日灌醉自己等死。",',
            'referenceEn: "\\"Trainspotting\\" knowing heroin leads to squalor but choosing to rot on the sofa over life; \\"Bojack Horseman\\" paralyzing depression after realizing Hollywood\'s hollow core."'
        ],
        "cynicism": [
            'reference: "《瑞克和莫蒂》瑞克对全宇宙的崇高拯救行动都嗤之以鼻用打嗝和最脏的烂话揭穿一切官僚虚伪的绝顶天才；《神探夏洛克》一眼看穿雇主的虚弱软肋用极度刻薄的推理将警局傲慢碾压成碎渣的好戏者。",',
            'referenceEn: "\\"Rick and Morty\\" Rick belching past all cosmic idealism with biting mockery of bureaucratic rot; \\"Sherlock\\" crushing police arrogance to dust with extremely mean hyper-deduction."'
        ],
        "anarchism": [
            'reference: "《V字仇杀队》用黑色披风和盖伊面具将炸药塞满整个英国议会大厦彻底炸烂强权极权的浪漫黑客；《搏击俱乐部》将无数高跟鞋和电视机扔出窗外在大楼底下乱战旨在废除所有等级制度的地下室狂徒。",',
            'referenceEn: "\\"V for Vendetta\\" blowing up Parliament wearing a Guy Fawkes mask to shatter totalitarianism; \\"Fight Club\\" basement brawlers tossing TVs out to abolish all financial order."'
        ],
        "antinatalism": [
            'reference: "《真探》拉斯特在车里冷酷地宣称人类进化出了多余的自我意识最体面的结局就是停止繁衍携手步入灭亡；《进击的巨人》吉克坚决执行安乐死计划剥夺所有艾尔迪亚人的生殖能力认为不出生就是终极救赎。",',
            'referenceEn: "\\"True Detective\\" Rust demanding humanity stop breeding and walk hand in hand to extinction; \\"Attack on Titan\\" Zeke erasing Eldian reproductive capacity as the ultimate mercy."'
        ],
        "absurdism": [
            'reference: "《局外人》默尔索在母亲葬礼上没有哭泣在沙滩上因为阳光太刺眼而莫名其妙开枪杀人的冷漠滑稽；《等待戈多》两个流浪汉在光秃秃的树下日复一日地等待一个永远不会来的救世主期间只剩荒谬的废话。",',
            'referenceEn: "\\"The Stranger\\" Meursault shooting a man just because the sun glared in his eyes; \\"Waiting for Godot\\" tramps talking infinite nonsense under a dead tree waiting for nothing."'
        ],
        "punk_ideology": [
            'reference: "《赛博朋克2077》强尼银手拿着吉他和核弹单枪匹马冲进荒坂塔用大火和摇滚将企业帝国化为灰烬的怒吼；《疯狂的麦克斯》用满身铁刺和喷火红吉他车在黄沙上肆意咆哮完全不讲任何文法逻辑的战郎。",',
            'referenceEn: "\\"Cyberpunk 2077\\" Johnny Silverhand nuking Arasaka Tower with a guitar and rage; \\"Mad Max\\" roaring across the sand with flamethrower-guitars rejecting all grammar of peace."'
        ],
        "misanthropy": [
            'reference: "《黑客帝国》史密斯特工掐着尼奥的脖子厌恶地说人类就像一种会在当地拼命繁殖消耗到底的臭虫恶臭不堪；《七宗罪》老警官看着满街的妓女与毒贩深深叹息这个世界根本不值得拯救只配在雨夜中发臭。",',
            'referenceEn: "\\"The Matrix\\" Agent Smith choking Neo declaring humans are a viral stench that must perish; \\"Se7en\\" Somerset sighing that the rotting city isn\'t worth saving in the rain."'
        ],
        "fatalism_rebel": [
            'reference: "《斯巴达300勇士》列奥尼达面对遮天蔽日的百万波斯大军明知今夜必死还是狂笑着举起长矛刺穿暴君之血；《普罗米修斯》明知深空造物主一门心思要投放黑水灭绝地球也要开着飞船迎面撞成火球的撞击。",',
            'referenceEn: "\\"300\\" Leonidas knowing he will die today but laughing as he bleeds a god-king; \\"Prometheus\\" deliberately ramming the juggernaut ship to burn out the ancient Engineers\' doom."'
        ],
        "chaos_magic": [
            'reference: "《奇异博士》法师不再遵循机械物理而是用念力和折叠的维度空间像万花筒一样将高楼大厦任意扭曲拼接；《旺达与幻视》猩红女巫仅仅出于丧夫极痛直接用混沌魔法霸改了整个小镇所有人的前置物理记忆。",',
            'referenceEn: "\\"Doctor Strange\\" twisting NYC skyscrapers into kaleidoscope shards defying mechanical physics; \\"WandaVision\\" rewriting an entire town\'s memory and physics via sheer chaotic grief."'
        ],
        "solipsism": [
            'reference: "《黑客帝国》背叛者塞弗闭着眼睛吃下一大块假牛排坚信只要我的味蕾感到爽那么一切外界死活就都不存在；《楚门的世界》当楚门触摸到画布边缘时突然意识到除了自己全镇人都是安排好的空壳NPC的脊背发凉。",',
            'referenceEn: "\\"The Matrix\\" Cypher eating binary steak deciding only his tastebuds exist; \\"The Truman Show\\" Truman touching the sky-canvas realizing his entire reality is empty NPC shells."'
        ],
        "iconoclasm": [
            'reference: "《V字仇杀队》在一首宏大的古典交响乐中把象征至高绝对法律的中央老贝利法庭炸成满天缤纷烟花的绝美爆破；《搏击俱乐部》用自制肥皂炸药把所有代表跨国资本的华尔街信用卡光环大厦夷为平地。",',
            'referenceEn: "\\"V for Vendetta\\" reducing the Old Bailey to gorgeous fireworks amidst classical symphonies; \\"Fight Club\\" leveling corporate monoliths with soap-explosives to erase financial idols."'
        ]
    },
    "ideo_human": {
        "radical_humanism": [
            'reference: "《辛德勒的名单》用巨额金钱倾家荡产硬生生从党卫军的工业焚尸炉里买下一个个活生生呼吸的犹太人名字；《银翼杀手》复制人罗伊在死前放飞白鸽证明我不只是一段代码更拥有爱与哀愁的人之挽歌。",',
            'referenceEn: "\\"Schindler\'s List\\" buying living breathing Jewish names out of industrial Nazi ovens; \\"Blade Runner\\" Roy releasing a dove proving his bleeding heart exceeds mere corporate coding."'
        ],
        "deep_ecology": [
            'reference: "《幽灵公主》为了保护森林深处的山兽神骑着白狼毫不犹豫地举刀砍向炼铁厂和人类火枪的狂野少女；《阿凡达》绝不妥协的纳美人用弓箭和猛兽哪怕粉身碎骨也要把开采矿石的地球重机械推入无底深渊。",',
            'referenceEn: "\\"Princess Mononoke\\" San riding wolves fiercely slashing at ironworks to protect the Forest Spirit; \\"Avatar\\" Na\'vi choosing bloody bows over bulldozers to save their holy soil."'
        ],
        "existentialism": [
            'reference: "《肖申克的救赎》安迪在无尽黑牢里即使没有神明相助也绝不放弃用一把小锤子凿二十年自我确证的爬出下水道；《局外人》在绞刑架前面带冰冷微笑拒绝神父祷告宣称我为我所有荒谬选择唯一买单的冷血与自由。",',
            'referenceEn: "\\"The Shawshank Redemption\\" Andy forging his own salvation with a rock hammer over 20 years; \\"The Stranger\\" refusing the priest at the gallows claiming absolute ownership of his absurd choices."'
        ],
        "stoicism": [
            'reference: "《角斗士》马克西姆斯在极度泥泞的竞技场里哪怕家人皆被斩首也能心如止水完美格挡只为最高荣耀的禁欲；《蝙蝠侠: 黑暗骑士》不管小丑如何用大火和深渊挑衅布鲁斯韦恩都死死咬住不杀人底线的坚如磐石。",',
            'referenceEn: "\\"Gladiator\\" Maximus fighting flawlessly in mud with a tranquil heart despite his murdered family; \\"The Dark Knight\\" Batman refusing to cross the no-kill line despite the Joker\'s fiery chaos."'
        ],
        "romanticism": [
            'reference: "《泰坦尼克号》杰克与露丝为了三天极致燃烧的艺术狂恋毫不犹豫地背弃掉沉闷腐朽但极其安稳的贵族婚约；《死亡诗社》学生们站在课桌上撕散那死板的教科书大喊“O Captain”只为追求灵魂一瞬战栗的狂飙突进。",',
            'referenceEn: "\\"Titanic\\" abandoning a safe aristocratic future for three days of burning artistic romance; \\"Dead Poets Society\\" students standing on desks tearing textbooks for a moment of sublime thrill."'
        ],
        "animism": [
            'reference: "《龙猫》坚信大树里面住着毛茸茸的守护神只要在下雨的公车站撑开伞奇迹就会像巨兽一样降临的纯真低语；《风之谷》面对暴怒腐烂的王虫群娜乌西卡卸下一切武装用身体去抚慰这些拥有伟大灵魂的古老山妖。",',
            'referenceEn: "\\"My Neighbor Totoro\\" pure belief that huge fuzzy spirits reside in giant trees waiting at bus stops; \\"Nausicaä\\" disarming and using flesh to pacify the enraged giant Ohmu bugs."'
        ],
        "pacifism": [
            'reference: "《血战钢锯岭》戴斯蒙德在枪林弹雨漫天齐飞的绞肉机里坚决不摸一次步枪硬生生背出75个伤员的恐怖大爱；《甘地传》面对列强的高头大马和刺刀齐刷刷地坐下哪怕被打得头破血流也绝不还一下手的至高非暴力。",',
            'referenceEn: "\\"Hacksaw Ridge\\" Desmond refusing to touch a rifle in a meat-grinder but dragging 75 men to safety; \\"Gandhi\\" sitting under colonial batons willingly bleeding but never striking back."'
        ],
        "gnosticism": [
            'reference: "《黑客帝国》尼奥吞下红色药丸痛苦地从黏液培养舱醒来发誓要在电子锁死矩阵外杀出一条寻获真知的血路；《异次元杀阵》在这个被未知邪神打造的精密杀人魔方里主角团唯一的希望就是破解坐标飞升出这个铁盒子。",',
            'referenceEn: "\\"The Matrix\\" Neo swallowing the red pill waking in slime to break the false digital Demiurge; \\"Cube\\" desperately decoding math coordinates to escape a cruel mechanical god\'s puzzle."'
        ],
        "ubermensch": [
            'reference: "《蝙蝠侠: 黑暗骑士》由于高谭法律已死蝙蝠侠披上黑色重甲如闪电般在夜空降下属于自己的恐惧审判法则；《进击的巨人》艾伦在看穿了整个世界压迫的绝望轮回后单手指天发誓要把海对面的所有生命彻底踏碎的魔王。",',
            'referenceEn: "\\"The Dark Knight\\" Batman donning midnight armor to legislate fear over a city where law is totally dead; \\"Attack on Titan\\" Eren vowing to trample all life across the sea as a dark messiah."'
        ],
        "pantheism": [
            'reference: "《星际穿越》库珀在五维折叠空间书架后意识到那个所谓的“拯救我们的上帝（They）”其实就是未来掌握了无限重力的我们泛宇宙自身；《沙丘》沙漠里的每一粒沙和每一滴水的流动都构成了保罗脑海中那涵盖过去未来星网一般的神秘脉搏。",',
            'referenceEn: "\\"Interstellar\\" Cooper realizing \'They\' the gods are just us navigating five-dimensional gravitational grids; \\"Dune\\" Paul feeling the eternal holy pulse in every grain of sand and drop of water."'
        ],
        "altruism_pathological": [
            'reference: "《生化危机》红后为了绝对保证病毒不外泄拯救全球选择冷酷无情地把地堡里几百名员工关起来全部充水活活淹死的圣洁谋杀；《守望者》法老王为了促成美苏和解大爱流泪按下了毁掉百万平民的微波炸弹。",',
            'referenceEn: "\\"Resident Evil\\" the Red Queen drowning hundreds of bunker staff to altruistically prevent global viral infection; \\"Watchmen\\" Ozymandias weeping out of deep love while nuking millions to force peace."'
        ],
        "mysticism": [
            'reference: "《2001太空漫游》宇航员大卫在穿过星际黑石碑后语言和逻辑全然粉碎在极炫的光栅爆冲里化作宇宙深空中的一个星孩；《第七封印》骑士在海滩边和死神下棋试图寻找答案最终在一场默剧式的死神之舞中被拉入无尽迷雾。",',
            'referenceEn: "\\"2001: A Space Odyssey\\" David shattering logic through the monolith dissolving into a cosmic Star Child; \\"The Seventh Seal\\" dancing with Death into the eternal unspeakable mist failing all reason."'
        ]
    }
}


def update_file(filename, file_data):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    for item_id, references in file_data.items():
        # Searching for the coreEn line for this specific item
        pattern = f'(id:\s*"{item_id}"[\s\S]*?coreEn:\s*".*?",)'
        match = re.search(pattern, content)
        if match:
            original = match.group(1)
            # Only add if not already present
            if 'reference:' not in original:
                replacement = original + f'\n        {references[0]}\n        {references[1]}'
                content = content.replace(original, replacement)
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)

for group_name, file_data in data.items():
    update_file(f"{base_dir}/{group_name}.ts", file_data)

print("SUR10 items successfully updated.")
