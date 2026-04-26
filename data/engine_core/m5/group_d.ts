import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 凝固的驱力 (The Crystallization) — 20 Items
    // 能量不撞击、不环绕、不穿透，而是停下来、固定、保存、定型。
    // 凝固不等于死亡。建造是凝固，记忆是凝固，坚守也是凝固。
    // 光谱：建设性凝固(1-7) → 防御性凝固(8-13) → 病理性凝固(14-20)
    // ============================================================

    // ---- 建设性凝固：用劳动、记忆和仪式把流动的世界固定下来 ----

    {
        id: "drv_building",
        name: "建造", nameEn: "Building",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "用双手在世界上留下一个不会消失的东西。房子、桥梁、堤坝、城市。",
        defEn: "Making something with your hands that won't vanish from the world. Houses, bridges, dams, cities.",
        core: "A面：建造是抗拒时间最古老的方式——你终将逝去，但作品会留下。每块砖都在对虚无说不。/ B面：但建造也常是逃避——精力全投入外在，因不敢直视内在空虚。你建的只是挡住虚无的墙。关键张力：为世界留下痕迹，还是因为停下来就会崩溃？ | 驱力脉动(Trieb): 砌筑——手必须忙着，空闲会发抖。",
        coreEn: "A-side: Building defies time — you will perish, but your work remains. Every brick says 'no' to the void. / B-side: But it's also an escape — pouring energy externally to avoid inner emptiness. You are building walls against the void, not monuments. Key tension: Building to leave a trace, or because stopping means collapse? | Drive Circuit (Trieb): Laying bricks — hands must keep busy to avoid trembling.",
        reference: "《陆上行舟》赫尔佐格拖着轮船翻越山脊只为建一座歌剧院；《天堂电影院》老放映员用一生守护和建造一间小镇电影院。",
        referenceEn: "Herzog dragging a ship over a mountain ridge just to build an opera house in Fitzcarraldo; an old projectionist spending his life building and guarding a small-town cinema in Cinema Paradiso.",
        topology: "沉积造陆：能量一层一层向下堆积——每一层都压实上一层，最终从水面之下升起一块固态的陆地，但建造者本人被压在最底层，成了地基的一部分",
        directive: {
            bright: "写他的手和材料之间的关系——不是使用而是对话：木头的纹理告诉他该沿着哪个方向切，混凝土的干燥速度决定了他的节奏。写他在黄昏时站在半成品前面的那种满足：今天它比昨天更接近完成了。让建造的快感不是完成而是过程——每一块砖放下去时的'咔'声，每一个接缝对齐时的精确感。写他的身体因为建造而改变：手掌的茧、后背的弧度、眼睛估算距离的本能。他不是在建东西，他在把自己建进东西里。",
            dark: "写他在完工那天站在成品前面的空虚——手突然不知道该做什么了。写他开始在完好的建筑上找缺陷，找到之后松了一口气：还有可以修的地方。写他意识到自己不是为了建成而建，而是为了'建'这个动作本身——停下来的话，手就开始发抖，脑子里那些他一直用劳动压下去的念头就会浮上来。写他深夜独自坐在空旷的建筑里，四周是他的作品，但作品里没有留给他住的房间。",
            tension: "场景锚点：他建了一辈子的东西被拆了——或者更残酷的是：没人来用它。悖论不是'建成了vs.没建成'——而是：建造抵抗的是虚无，但建筑本身也终将成为虚无。他在时间的河流中放下一块石头，水暂时绕开了，但河流比石头更耐心。写他站在废墟前不是悲伤而是一种奇怪的清醒：他建它的时候就知道这一天，但他还是建了——也许建造的意义从来不是留下什么，而是'曾经在建'这个动作本身。"
        }
    },
    {
        id: "drv_recording",
        name: "记录", nameEn: "Recording",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把正在消逝的东西固定下来。写下来、拍下来、画下来、唱下来。",
        defEn: "Fixing what's vanishing. Writing, filming, painting, singing it down.",
        core: "A面：记录是对抗遗忘最温柔的反叛——拒绝让消逝的瞬间化为乌有。它宣告了'这曾存在过'。/ B面：但极端记录者常活在镜头后——太忙于保存生活，却忘了去真正体验。硬盘虽满，人生却空。关键张力：保留生活，还是用记录替代了真实的在场？ | 驱力脉动(Trieb): 铭刻——必须留下痕迹，遗忘比死亡更怕。",
        coreEn: "A-side: Recording is a gentle rebellion against forgetting — declaring 'this once existed' against vanishing moments. / B-side: Yet obsessive recorders live behind the lens — documenting life but forgetting to experience it. Full hard drives, empty lives. Key tension: Preserving life, or replacing real experience with documentation? | Drive Circuit (Trieb): Inscribing — must leave traces; forgetting is worse than death.",
        reference: "《辛德勒的名单》用名单把一千多条生命固定在纸上的工厂主；《安妮日记》在密室中用日记凝固了一段即将被消灭的青春。",
        referenceEn: "A factory owner fixing over a thousand lives onto paper with a list in Schindler's List; fixing a youth about to be destroyed in a diary written in hiding in The Diary of Anne Frank.",
        topology: "琥珀封存：能量把流动的时间定格在一个介质上——文字、影像、声音都是琥珀，把正在蒸发的瞬间封进固态，但琥珀里的昆虫已经不会飞了",
        directive: {
            bright: "写他按下快门/落笔/按下录音键的那个瞬间——时间在他的动作中分叉了：一条继续流逝，一条被钉在了介质上。写他在日记本上写下一个日期时的郑重感：这些字让今天不会消失。写他拍下一张照片后的安心——不是因为照片好看，而是因为'这一刻现在有了两个版本：一个在时间里腐朽，一个在纸上永存'。让记录的快感是对抗性的：每一次书写都是对遗忘的微小叛乱。",
            dark: "写他发现自己在所有值得体验的瞬间都在拍照——女儿的第一步他透过手机屏幕看的，日落他在调焦距。写他的硬盘里有十万张照片但他想不起任何一张是什么感觉。写他在翻看三年前的日记时发现：写下来的感觉和他记忆中的不一样，但他已经分不清哪个是真的了——文字版本覆盖了体验版本。写他开始怀疑：他记录的不是生活，是他对生活的逃避。",
            tension: "场景锚点：他保存了一切——但打开旧录像时发现录像里的人他已经不认识了。悖论不是'记住了vs.忘了'——而是：记录保存的是信息不是体验。他能看到那天的光线、听到那天的声音，但他无法重新感受到那天的温度。琥珀里的昆虫形态完美但已经死了。写他关掉录像后的沉默：他以为自己在保存记忆，但他保存的是记忆的尸体。"
        }
    },
    {
        id: "drv_collecting",
        name: "收藏", nameEn: "Collecting",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把分散在世界各处的碎片聚拢在一起，赋予它们秩序和意义。",
        defEn: "Gathering fragments scattered across the world, giving them order and meaning.",
        core: "A面：收藏是在混乱中重建秩序——按自己的逻辑拼凑碎片，在这微缩宇宙里找回可控感。/ B面：但极端收藏将人异化为囚徒——你不再拥有藏品，而是被它们拥有，为下一次占有夜不能寐。关键张力：你出于热爱，还是对失控的深深恐惧？ | 驱力脉动(Trieb): 聚拢——世界太乱，至少此处的碎片各归其位。",
        coreEn: "A-side: Collecting builds order from chaos — arranging fragments to form a controllable micro-universe. / B-side: But extreme collecting makes you a prisoner — possessed by your possessions, anxious for the next acquisition. Key tension: Do you collect out of pure love, or a deep fear of losing control? | Drive Circuit (Trieb): Gathering — the world is chaotic; at least here things have their place.",
        reference: "《公民凯恩》在巨大的仓库里堆满了一生的收藏却始终找不到'玫瑰花蕾'的报业大亨；《头号玩家》在虚拟世界中收藏流行文化碎片以对抗遗忘的玩家。",
        referenceEn: "A press magnate filling vast warehouses with a lifetime's collection yet never finding 'Rosebud' in Citizen Kane; players collecting pop culture fragments in virtual worlds to fight forgetting in Ready Player One.",
        topology: "向心性聚合：能量从外围向中心汇聚——每一件藏品都是从混乱中打捞回来的秩序碎片，排列在收藏者定义的坐标系里，但坐标系本身是一个封闭系统",
        directive: {
            bright: "写他找到最后一件缺失藏品时的满足——不是拥有的快感而是完成的快感：一个序列终于不缺项了。写他在深夜独自整理藏品时的安宁：外面的世界不可控，但此处每一件东西都在它该在的位置上。写他向别人展示收藏时的骄傲不是'我有'而是'你看这个秩序'——他收藏的不是物品而是一种排列方式，一种他从混乱中提取出来的逻辑。让收藏的快乐是建筑师式的：不是占有而是构成。",
            dark: "写他在凌晨三点刷拍卖网站时手指的颤抖——不是兴奋而是焦虑：如果这件被别人买走，序列就永远不完整了。写那种'少了一件'的空洞感像牙疼一样持续。写他的房间被藏品挤满后留给自己的空间越来越小——他睡在沙发上因为床上堆满了还没分类的东西。写他拒绝朋友的邀请因为'周末要整理'，然后意识到他已经很久没整理过了，只是不断在往里面加东西。他不是在收藏，是在用填满来对抗一种他不愿命名的空。",
            tension: "场景锚点：他的收藏终于完整了——但完整的那一秒他感到的不是满足而是恐慌：现在找什么？悖论不是'有了vs.没有'——而是：收藏的驱力不在于拥有而在于寻找。寻找给了他结构、方向、起床的理由。一旦找完了，框架就塌了。写他盯着完美排列的收藏架时的空虚：他以为自己追的是最后一件藏品，但他追的其实是'还差一件'这个状态本身。"
        }
    },
    {
        id: "drv_inheritance",
        name: "传承", nameEn: "Inheritance",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "把你知道的、拥有的、相信的传给下一代。让它在你死后继续活着。",
        defEn: "Passing what you know, own, and believe to the next generation. Keeping it alive after you die.",
        core: "A面：传承是最深远的凝固——化作桥梁接通过去与未来，使知识跨越个体死亡。/ B面：但它也常是结构性绑架——让下一代背负你的期望与未竟野心，衣钵成了枷锁。关键张力：你传下的是自由，还是未竟之梦的沉重锁链？ | 驱力脉动(Trieb): 延续——我终将消失，但'这'绝不能消失。",
        coreEn: "A-side: Inheritance is profound crystallization — becoming a bridge connecting past and future, letting knowledge outlive the individual. / B-side: It can also be structural bonding — forcing the next generation to bear your unfulfilled expectations. The mantle becomes a shackle. Key tension: Passing down freedom, or the heavy chains of unfinished dreams? | Drive Circuit (Trieb): Continuing — I will vanish, but 'this' must remain.",
        reference: "《教父》维托把整个家族的权力和罪恶一起传给了迈克尔；《星球大战》绝地武士通过师徒制把原力信仰一代代传下去。",
        referenceEn: "Vito passing the family's entire power and sin to Michael in The Godfather; Jedi transmitting Force-faith through generations of master-apprentice bonds in Star Wars.",
        topology: "接力固化：能量在交接点从一个载体转入另一个载体——传递的不是物质而是形状，下一代的手被塑造成握住同一件东西的姿势，但手的主人换了",
        directive: {
            bright: "写他把那个东西递过去的手势——缓慢、郑重、带着一种仪式感。写他在交接的瞬间看到自己的手和对方的手并排在一起：一双老了，一双年轻，握着同一件东西。写他松开手指时的复杂表情：不是失去而是完成——他知道自己是链条上的一环，上一个人把它交给了他，他现在交给下一个。让传承的庄严不在于东西本身而在于'不间断'这个事实：一千年来有人在传，一千年后还有人在接。",
            dark: "写接受者的表情——不是感激而是一种被选中的压迫感。写那个年轻人看着被交到手里的东西时想的不是'荣幸'而是'我可以拒绝吗'。写传承者没有问过对方想不想要——他假设了'当然想要'，因为他自己当年也是这样被假设的。写那个东西在传递过程中已经不是原来的东西了：每一代人加了一层自己的理解、期望和遗憾，最后交到手里的是一块压缩了所有祖先未竟野心的化石。接受者背着它走路，不确定驼背是因为重量还是因为形状。",
            tension: "场景锚点：他传下去的东西被下一代改造了——面目全非但活了下来。悖论不是'传了vs.没传'——而是：真正活着的传承必须允许变形。完全忠实的复制是博物馆式的死亡，而每一次改造都是对原物的一次谋杀。写他看到孙辈用他传下的技艺做出他完全不认识的东西时的表情——那既是他的又不是他的。他的传承成功了，代价是他传的那个东西已经不存在了。"
        }
    },
    {
        id: "drv_memorial",
        name: "纪念", nameEn: "Memorial",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "为已经消失的人或事建一座不会被遗忘的标记。",
        defEn: "Building an unforgettable marker for people or things that have vanished.",
        core: "A面：纪念是对遗忘最决绝的反抗——坚决不让失去的人和事被虚无抹杀。墓碑是时空中抗拒潮流的锚。/ B面：但这可化为无法前行的执念——建起纪念碑，自己却被永远钉死在原地。关键张力：是为了让逝者存续，还是因为你根本无法接受失去现实？ | 驱力脉动(Trieb): 立碑——哪怕被全世界遗忘，此石仍会铭记。",
        coreEn: "A-side: Memorializing is the most stubborn denial of forgetting — refusing to let lost ones be erased by the void. Tombstones are anchors against time's flow. / B-side: But it can become a paralyzing obsession — erecting a monument that nails you permanently to the spot. Key tension: Ensuring the dead persist in the future, or an inability to accept loss? | Drive Circuit (Trieb): Erecting a stone — even if the world forgets, this stone remembers.",
        reference: "《寻梦环游记》在亡灵节用万寿菊桥把逝者的记忆凝固在花瓣上；《钢琴家》在战后废墟中弹奏的那首肖邦——用音乐纪念一切被摧毁的东西。",
        referenceEn: "Fixing the dead's memory onto marigold petals on the Day of the Dead in Coco; a Chopin piece played in postwar ruins — music memorializing everything destroyed in The Pianist.",
        topology: "锚点抛投：能量在时间的河流中抛下一个不随水流移动的重物——河水从锚的两侧流过，锚不阻止流逝但标记了'这里曾经有过什么'的坐标",
        directive: {
            bright: "写他在那个位置放下标记的动作——可以是一块石头、一束花、一首歌、或者只是每年同一天来同一个地方站一会儿。写那种安静的固执：不是戏剧性的悲伤而是日常性的不放弃。写纪念碑不需要宏大——一张贴在冰箱上的照片、一个从不删除的手机号码、一双放在门口再也没有人穿的鞋。让纪念的力量在于重复：每一次想起都是一次微小的复活，不是让死者回来而是不让他们从世界上完全消失。",
            dark: "写他在纪念碑前站了第十年的那个下午——他发现自己想不起她的声音了。写他试图回忆却只能想起照片上的脸而不是真实的脸——纪念碑替代了记忆本身。写他每年的纪念仪式变成了一种强迫性的表演：他不确定自己还在悲伤还是在表演悲伤，但他不敢停下来检查，因为如果发现已经不伤心了，那就是真正的背叛。写他被纪念碑钉在了原地：他不是不想向前走，是向前走的每一步都像是在践踏墓碑。",
            tension: "场景锚点：纪念碑被拆了——或者更温柔的版本：他的孩子问'我们可以不来了吗'。悖论不是'记得vs.忘了'——而是：纪念是给活人的还是给死人的？死者不需要被纪念——纪念是活着的人用来处理'无法接受的缺席'的工具。写他意识到这一点时的混乱：如果纪念是为了自己而不是为了他们，那他建的不是纪念碑而是一面挡住前方道路的墙。但拆掉这面墙就是承认她真的走了——而他还没准备好。"
        }
    },
    {
        id: "drv_ritual",
        name: "仪式", nameEn: "Ritual",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "用重复的动作和固定的程序给混乱的世界施加秩序。",
        defEn: "Imposing order on a chaotic world through repeated actions and fixed procedures.",
        core: "A面：仪式是对混乱最原始的回应——不知所措时，至少能按步骤行事。葬礼不仅为死者，更给生者结构，把不可承受的轻化为可操作的重。/ B面：但失去内在意义的仪式只是空壳——动作正确，心已不在。不是祈祷，只是动嘴唇。关键张力：你的仪式还有灵魂，还是只剩惯性？ | 驱力脉动(Trieb): 重复——做同样的事，改变比重复更可怕。",
        coreEn: "A-side: Ritual is the primal response to chaos — following fixed steps when lost. Funerals give the living structure, turning unbearable lightness into manageable weight. / B-side: But rituals without meaning are empty shells — right motions, absentee hearts. Merely moving lips, not praying. Key tension: Does your ritual have a soul, or just inertia? | Drive Circuit (Trieb): Repeating — doing the same, as change is terrifying.",
        reference: "《教父》每一次家族聚餐和洗礼仪式都同时进行着谋杀的对位结构；《入殓师》为遗体整理仪容的仪式——用固定程序恢复逝者尊严。",
        referenceEn: "Every family feast and baptism running parallel to murder in The Godfather; the ritual of preparing bodies — restoring dignity through fixed procedures in Departures.",
        topology: "节律性夯实：能量以固定间隔反复击打同一个位置——不是一次性的冲击而是周期性的重复，每一次重复都把地面压得更密实，直到松散的土变成可以站立的路面",
        directive: {
            bright: "写他开始仪式前的准备动作——铺好布、摆好器具、确认位置，每一步都和上一次一模一样。写重复本身的安慰感：不是因为动作有意义而是因为它'可重复'——在不可预测的世界里，至少这件事是确定的。写他在仪式进行中感到的一种短暂的秩序回归：时间被节奏分割成可管理的段落，每个段落他都知道下一步是什么。让仪式的美不是华丽而是精确——每一个动作都像齿轮咬合一样到位。",
            dark: "写他在第一千次重复同一个动作时发现自己在走神——手在做嘴在念但心已经不在了。写仪式变成空壳的那个瞬间他没有注意到，因为空壳和实壳从外面看一模一样。写他开始害怕任何对仪式的改变——不是因为改变不好而是因为改变会暴露出仪式背后什么都没有。写他在某个节日的仪式中途突然停下来，因为他忘了为什么要做这件事——然后他假装系鞋带把停顿遮过去了，继续做下去。",
            tension: "场景锚点：仪式被打断了——有人在中间说'这有什么意义'。悖论不是'有意义vs.没意义'——而是：仪式的意义不在内容而在形式。他无法回答'为什么要这样做'，但他知道如果不这样做，某种东西就会碎掉——不是外部的东西而是他内部的某种秩序。写他站在被打断的仪式中间的那种暴露感：仪式是他和混乱之间唯一的墙，有人刚刚在墙上凿了一个洞。"
        }
    },
    {
        id: "drv_guarding_legacy",
        name: "守护遗产", nameEn: "Guarding Legacy",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "终身看守一件你没有创造但不能让它消失的东西。",
        defEn: "Spending a lifetime guarding something you didn't create but cannot let vanish.",
        core: "A面：守护者并非创造者——没建这座图书馆，但保证任期内一书不失。这种忠诚承认自己只是链条上一环，平淡却深沉。/ B面：但守护可变成囚禁——和守护之物一起被锁死。留下非因自由选择，离开即是背叛。关键张力：你守护的是事物本身，还是'守护者'身份给的存在感？ | 驱力脉动(Trieb): 看守——我走了，就没人看着它了。",
        coreEn: "A-side: Guardians aren't creators — assuring no book vanishes though they didn't build the library. A deep loyalty admitting one's place as a link in the chain. / B-side: But guarding becomes imprisonment — locked in with the guarded. Staying isn't a free choice; leaving means betrayal. Key tension: Guarding the object, or the existence the 'guardian' role grants? | Drive Circuit (Trieb): Standing watch — if I leave, no one watches.",
        reference: "《天堂电影院》阿尔弗雷多终身守护在放映室里直到失明；《指环王》阿拉贡的祖先世世代代守护着碎裂的纳西尔圣剑。",
        referenceEn: "Alfredo guarding the projection room his entire life until going blind in Cinema Paradiso; Aragorn's ancestors guarding the shards of Narsil generation after generation in LOTR.",
        topology: "恒温维持：能量不用于运动而用于维持——像恒温箱一样持续输出刚好抵消熵增的热量，守护者的一生被转化为被守护物存续的燃料",
        directive: {
            bright: "写他每天早上打开门的动作——钥匙转动的声音他已经听了三十年但从未厌倦。写他在巡查时用手触摸那些他守护的东西：书脊、石墙、画框边缘——不是检查而是问候。写他和被守护之物之间那种不需要语言的关系：他知道哪块地板会响、哪扇窗漏风、哪幅画在傍晚的光线里最好看。让守护的尊严在于不被看到——他最好的工作日是什么都没有发生的一天。",
            dark: "写他意识到自己已经和这个地方长在一起了——不是比喻而是字面意义上的：他离开这里就不知道自己是谁。写他收到退休通知时的恐慌不是对未来的焦虑而是一种身份性的瓦解：如果他不再是'守护者'，他是什么？写他在夜间独自坐在空旷的大厅里时的一个念头：他守护了它一辈子，但它从来没有需要过他——他需要它比它需要他更多。写他拒绝接班人时给的理由是'他不懂'，但真正的理由是：如果别人也能守，那他的一生就不是不可替代的。",
            tension: "场景锚点：他守护的东西被合理地淘汰了——不是被摧毁而是被时代超越了。悖论不是'守住了vs.没守住'——而是：他守护的东西也许在他开始守护之前就已经完成了它的使命。他守的不是它的未来而是它的过去——他用自己的生命让一个已经结束的故事多延续了几十年。写他在空荡荡的建筑里最后一次巡查时的脚步声——他走得比平时慢，不是因为不舍而是因为他在听自己脚步声的回音，确认这个空间还记得有人来过。"
        }
    },
    {
        id: "drv_holding_ground",
        name: "固守", nameEn: "Holding Ground",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "所有人都在撤退，你留在原地。不是因为勇敢，而是因为这里就是你的位置。",
        defEn: "Everyone retreats; you stay. Not from bravery, but because this is your place.",
        core: "A面：固守是凝固最壮烈的形态——你的存在本身就是防线。不求赢，只求不退。/ B面：但固守者常分不清勇敢与固执——留下是因为阵地值得，还是太骄傲无法撤退？有时撤退更需大勇。关键张力：阵地还有价值吗？还是用'不退'证明存在？ | 驱力脉动(Trieb): 扎根——我就在这，谁也别想让我挪步。",
        coreEn: "A-side: Holding ground is heroic crystallization — your presence is the wall. It's not about winning, but refusing to retreat. / B-side: But it blends courage with stubbornness — staying because it's worth defending, or too proud to leave? Retreat sometimes takes more courage. Key tension: Is the ground worth it, or are you proving existence by staying? | Drive Circuit (Trieb): Taking root — I am here, none shall move me.",
        reference: "《拯救大兵瑞恩》在桥上用手枪对坦克说'你不许过去'的米勒上尉；《斯巴达三百勇士》温泉关三百人挡住百万大军的固守。",
        referenceEn: "Captain Miller firing a pistol at a tank saying 'you shall not pass' on the bridge in Saving Private Ryan; three hundred Spartans holding Thermopylae against a million in 300.",
        topology: "重力锚定：能量不向外辐射而是向下凝聚——身体变成地面的延伸，脚下的重力大于所有外力的合力，不动本身成为一种作用力",
        directive: {
            bright: "写他脚下的那块地——他站了多久那块地就被他踩实了多久。写他周围的人一个个离开时他身体的反应：不是僵硬而是更放松了，好像人群散去之后他终于可以站稳。写他的不动不是姿态而是一种物理状态：他的重心低于地面，想推倒他需要先挖出他的根。让固守的英雄感不在于戏剧性的宣言而在于沉默——他什么都没说，但他在这里，这就是全部的声明。",
            dark: "写他在所有人都撤完之后独自站在空旷阵地上的那种荒诞——他守的东西已经没人在乎了但他还站着。写他开始怀疑自己留下来不是因为位置重要而是因为他不知道除了站着还能做什么——'不退'不是选择而是能力的边界。写他的膝盖在第三天开始疼但他没有坐下，不是因为敌人还在而是因为坐下这个动作本身意味着承认'可以不站'。写他分不清自己是守卫还是一块还没倒的废墟。",
            tension: "场景锚点：有人来告诉他战争结束了——但他不走。悖论不是'该守vs.该撤'——而是：他的身份已经和'站在这里'这个动作完全融合了。让他走不是解放而是拆除——你不能让一棵树'不再是树'，你只能把它砍掉。写他听到'可以走了'之后的茫然：他的身体已经不记得移动是什么感觉了。固守保护了阵地，但也把他变成了阵地的一部分——而阵地不会自己离开。"
        }
    },
    {
        id: "drv_principle",
        name: "坚持原则", nameEn: "Principle",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "世界在变，你的标准不变。'我不管别人怎么做，我只知道这是不对的。'",
        defEn: "The world changes; your standards don't. 'I don't care what others do; I know this is wrong.'",
        core: "A面：原则是人格的骨骼——无它虽灵活但如软泥。有原则者在变幻中总有清晰的内在参照。/ B面：但原则易变僵化——拒绝适应非因坚定，而是恐惧。世界变了，原则或许该更新。关键张力：在坚守真理，还是用原则回避适应的痛苦？ | 驱力脉动(Trieb): 不动——所有人都弯了，我的脊梁不能弯。",
        coreEn: "A-side: Principles are character's skeleton — without them you are flexible but spineless. They offer clear inner reference amid change. / B-side: But principles breed rigidity — refusing adaptation out of fear, not conviction. When the world changes, update may be needed. Key tension: Defending truth, or dodging the pain of adaptation? | Drive Circuit (Trieb): Unmoved — everyone bends, but my spine remains straight.",
        reference: "《十二怒汉》在所有人都要快速定罪时坚持合理怀疑的陪审员；《永不妥协》不管律所和大公司怎么施压都不放弃诉讼的艾琳。",
        referenceEn: "A juror insisting on reasonable doubt when everyone wants a quick conviction in 12 Angry Men; Erin refusing to drop the case no matter how the firm and corporations pressure in Erin Brockovich.",
        topology: "内骨骼支撑：能量不在表面而在结构内部——骨骼看不见但决定了身体能承受什么形状的压力，抽掉骨骼人就变成了液态",
        directive: {
            bright: "写他说'不'时的简洁——没有演讲没有解释，只有一个清晰的'不'，然后是沉默。写那个'不'在房间里的重量：不是音量而是密度，像一块石头落在桌面上。写他坚持原则时不需要说服任何人——他的原则不是给别人看的，是他自己站立的方式。让原则的力量不是道德优越感而是一种内在的清晰：他不需要想'该怎么做'，因为原则已经替他回答了。写这种清晰带来的一种奇怪的自由：在别人纠结的时候他是唯一不纠结的人。",
            dark: "写他在原则和现实碰撞时选择原则的那个瞬间——以及他没有看到的：他的原则伤害了一个具体的人。写他用'正确'代替了'善良'：他做了正确的事但方式是残忍的，而他的原则没有教他如何处理残忍。写他发现自己的原则越来越像一面盾牌——不是用来保护什么而是用来回避复杂性：只要原则清晰，他就不需要面对'也许两边都对'这种令人崩溃的可能性。写他在深夜独自检查自己的原则时发现：有些原则他已经不信了，但他不敢放弃，因为放弃一条就可能动摇全部。",
            tension: "场景锚点：他的两条原则在同一个情境中互相矛盾了。悖论不是'坚持vs.放弃'——而是：原则系统是人类为了简化复杂性而发明的工具，而现实比任何原则系统都更复杂。当'诚实'和'善良'在同一个瞬间要求他做相反的事情时，他必须选一个放弃一个——而选择本身就证明了原则不是绝对的。写他在两条原则之间撕裂时的发现：他以为自己是原则的仆人，但他一直是原则的主人——因为最终选择哪条原则优先的那个判断，不来自任何原则，来自他自己。"
        }
    },
    {
        id: "drv_endurance",
        name: "忍耐", nameEn: "Endurance",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "承受住痛苦、屈辱或等待，不崩溃，不反击，只是'撑下去'。",
        defEn: "Bearing pain, humiliation, or waiting without collapsing or striking back. Simply 'enduring.'",
        core: "A面：忍耐是最沉默的力量——不反击不逃跑，只求'还在'。有些战役不是打赢的，是熬赢的。/ B面：但忍耐与麻木边界模糊——以为在忍，实则已麻木；以为等转机，实则忘了还有别路可走。关键张力：是在选择等待，还是已不信有别的路？ | 驱力脉动(Trieb): 硬扛——咬紧牙，再撑一会儿。",
        coreEn: "A-side: Endurance is silent strength — not fighting or fleeing, just 'remaining.' Some wars are won by outlasting, not combating. / B-side: But the line with numbness is thin — thinking you endure while truly numb; hoping for a turn, forgetting other paths exist. Key tension: Choosing to wait, or no longer believing in alternatives? | Drive Circuit (Trieb): Gritting — clenching teeth, hold on a bit longer.",
        reference: "《为奴十二年》所罗门在十二年的奴役中保持尊严等待被解救；《肖申克的救赎》安迪用十九年的忍耐等到了那个雷雨夜。",
        referenceEn: "Solomon maintaining dignity through twelve years of slavery waiting for rescue in 12 Years a Slave; Andy enduring nineteen years until that stormy night in Shawshank Redemption.",
        topology: "负重静止：能量全部用于抵消施加在身上的重力——外表看不到运动但内部每一根纤维都在承受极限张力，静止不是平衡而是所有力恰好互相抵消的战场",
        directive: {
            bright: "写他第一千天醒来时的动作——和第一天一模一样：睁眼、起身、呼吸、继续。写那种看不见的英雄主义：没有壮举没有宣言，只是'今天也没有倒下'这个事实。写他的身体已经学会了痛苦的节奏——哪个时段最难熬、哪个姿势最省力、什么时候该闭上眼睛。让忍耐的尊严不在于不痛而在于痛着但还在：他没有超越痛苦，他和痛苦住在一起了。写他在最黑的夜里给自己数到的那个数字：'再数一百下'——不需要看到光，只需要下一个数字。",
            dark: "写他发现自己已经不痛了——不是痊愈而是神经已经不传导了。写他在被释放之后不知道该做什么的那种茫然：忍耐占据了他的全部带宽，当它突然被撤走时他里面什么都没有了。写他在自由的第一天无法享受任何东西——因为享受需要的感觉通道已经在十年的忍耐中萎缩了。写他意识到忍耐没有保存他而是替代了他：他忍住了一切，但忍的过程中那个在忍的人慢慢变成了一个只会忍的机器。",
            tension: "场景锚点：有人告诉他'你不必再忍了'——但他停不下来。悖论不是'忍下去vs.放弃'——而是：忍耐从手段变成了身份。他不是在等什么——他已经忘了在等什么——他就是在忍，忍就是他。让他停止忍耐比让他开始忍耐更难，因为停下来意味着面对一个问题：如果不在忍，我在做什么？写他的身体在安全环境中仍然保持忍耐姿态时的荒诞：肌肉记住了紧绷，大脑忘了放松的指令。"
        }
    },
    {
        id: "drv_restraint",
        name: "克制", nameEn: "Restraint",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你完全有能力出手，但你选择不动。把冲动冻结在体内。",
        defEn: "You are entirely capable of acting, but choose not to. Freezing the impulse inside.",
        core: "A面：克制是力量的最高形式——不是做不到，是做得到但选择不做。每次咽下那句话、收回拳头、压下冲动，都是意志对本能的胜利。/ B面：但克制过度会变成压抑——情绪只是被压到更深的地方，早晚会以无法预料的方式爆发。关键张力：你在管理情绪，还是在制造定时炸弹？ | 驱力脉动(Trieb): 冻结——让那个冲动死在嘴边。",
        coreEn: "A-side: Restraint is strength's highest form — not because you can't but because you can yet choose not to. Every swallowed word, retracted fist, suppressed impulse is will's victory over instinct. / B-side: But excessive restraint becomes repression — you think you've controlled those emotions, but they're just pushed deeper. Someday they'll erupt unpredictably. Key tension: Are you managing emotions, or manufacturing a time bomb? | Drive Circuit (Trieb): Freezing — letting the impulse die on the tip of your tongue.",
        reference: "《老无所依》安东·齐格面对无辜者掷硬币——他有能力杀但给了命运选择的机会；《卧虎藏龙》李慕白对俞秀莲一生的克制——能说但始终没说出口的那句话。",
        referenceEn: "Anton Chigurh flipping a coin for the innocent — able to kill but giving fate a chance in No Country for Old Men; Li Mu Bai's lifelong restraint toward Yu Shu Lien — the words he could but never did say in Crouching Tiger.",
        topology: "内冻结：能量在出口处被截住并就地凝固——冲动到达嘴唇/拳头/手指的最后一厘米时被急冻，冻住的能量不消失而是在内部形成越来越大的冰块",
        directive: {
            bright: "写那个冲动到达身体表面又被拉回去的物理过程——手握成拳然后一根手指一根手指地松开，嘴巴张开然后嘴唇重新合拢。写他把那句话咽回去时喉结的滚动。让克制的美是雕塑式的：所有的力量都在，但没有一丝泄漏。写周围的人不知道刚才发生了什么——他们看到的只是他的平静，看不到平静下面那头被锁链拴住的野兽。让克制的高贵不在于没有冲动而在于有巨大的冲动但选择了不动。",
            dark: "写被冻住的冲动在身体里堆积——第一年是一颗石头，第五年是一面墙，第十年他整个胸腔都被咽回去的话填满了。写他发现自己不是在克制而是在失能：不是选择不说而是已经不会说了，那个说话的肌肉因为太久不用而萎缩了。写他在一次毫不相关的小事中突然爆发——不是因为那件小事而是因为十年的冰块同时融化了。写他在爆发之后的震惊：他不认识从自己嘴里出来的那些话，它们在黑暗中变异了太久，已经不是当初被咽下去的样子了。",
            tension: "场景锚点：他克制了一辈子的那件事——对方早就知道了。悖论不是'说了vs.没说'——而是：他以为自己的克制保护了关系，但对方多年来感受到的不是他的平静而是他的冰——那种'他在忍着什么'的温度下降。他的不说和说一样有重量，只是形状不同：说出来是刀，不说是慢性的冻伤。写他发现对方一直在等他说——而他的克制不是保护了她而是让她在猜测中度过了比真相更痛苦的二十年。"
        }
    },
    {
        id: "drv_faith",
        name: "信仰", nameEn: "Faith",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "在没有证据的情况下相信某件事是真的，并以此为基石活下去。",
        defEn: "Believing something is true without evidence, and living upon that cornerstone.",
        core: "A面：信仰是凝固的极致——什么都不确定的世界里，你选了一个锚然后死死抓住。不需要被证明，只需要被相信。对有信仰的人，怀疑比死亡更可怕。/ B面：但信仰也能让你对真相免疫——你相信的变成唯一滤镜，不符合的证据自动被过滤。你不是在信真理，是用信仰回避真理。关键张力：信仰是出发点还是终点？它让你更自由，还是关进了看不见墙的房间？ | 驱力脉动(Trieb): 相信——不信的话，一切都会坍塌。",
        coreEn: "A-side: Faith is crystallization's ultimate — in a world where nothing is certain, you choose an anchor and hold fast. It needn't be proven, only believed. For the faithful, doubt is more terrifying than death. / B-side: But faith can immunize you against truth — what you believe becomes the sole filter, all contrary evidence automatically screened out. You're not believing truth; you're using belief to dodge it. Key tension: Is your faith a starting point or an endpoint? Does it make you freer, or lock you in a room with invisible walls? | Drive Circuit (Trieb): Believing — because if you don't, everything collapses.",
        reference: "《沉默》在上帝始终沉默的困境中仍然选择相信的神父；《少年派的奇幻漂流》'你更喜欢哪个故事？'——选择相信的权利。",
        referenceEn: "A priest choosing to believe despite God's perpetual silence in Silence; 'Which story do you prefer?' — the right to choose belief in Life of Pi.",
        topology: "自生成地基：能量不依赖外部支撑而自我凝固为承重结构——信仰是自己证明自己的地基，站在上面的一切都以它为前提，但地基的下面什么都没有",
        directive: {
            bright: "写他在最黑暗的时刻选择相信的那个瞬间——不是因为看到了证据而是因为不信的话下一秒就会坍塌。写信仰不是一个结论而是一个动作：他每天早上重新选择相信，像每天重新决定呼吸一样。写他的信仰给了他的不是答案而是方向——在完全没有路标的荒野里，至少他知道往哪走。让信仰的力量不在于正确性而在于它让不可承受的处境变得可承受了：不是因为处境变了，是因为他能站在一个地基上看它了。",
            dark: "写他遇到一个事实——一个无法被信仰解释的事实——然后看着他的大脑把那个事实改写成可以被信仰接受的版本。写他自己都没有意识到这个改写的发生。写他和一个不信的人对话时的那种恐惧——不是怕对方说服他而是怕对方问出一个他其实已经在夜里问过自己但没有追问下去的问题。写他的信仰开始变成一种过滤器：不是帮他看世界而是帮他不看世界中某些部分。写他在祈祷中途突然走神然后立刻用更大的虔诚覆盖那个瞬间的空白。",
            tension: "场景锚点：他信了一辈子的东西被证伪了——不是被质疑而是被实实在在地证伪了。悖论不是'信vs.不信'——而是：失去信仰之后他发现自己仍然站着。地基消失了但房子没有倒——这意味着要么还有更深的地基他不知道，要么房子从来就不是建在信仰上面的。写他在信仰碎裂之后的那种奇怪的轻——不是解放是失重：他以为没有信仰就会坠落，但他发现自己只是浮着，既没有上也没有下。"
        }
    },
    {
        id: "drv_refusal_to_change",
        name: "拒变", nameEn: "Refusal to Change",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "世界已经不同了，但你拒绝承认。'我不管外面发生了什么。'",
        defEn: "The world has changed, but you refuse to acknowledge it. 'I don't care what's happening outside.'",
        core: "A面：拒变有时是清醒——不是所有变化都是进步。所有人随波逐流时，你站在原地本身就是判断：'这个方向是错的，我不去。'/ B面：但拒变更常见的面目是恐惧——你不是不同意新世界，是害怕无法在其中生存。'坚守'只是对适应能力缺乏的体面包装。关键张力：你拒绝改变是因为看到了别人没看到的，还是因为闭上了眼睛？ | 驱力脉动(Trieb): 拒绝——外面爱怎样怎样，我不出去。",
        coreEn: "A-side: Refusal to change is sometimes lucidity — not all change is progress. When everyone drifts with the current, standing still is itself a judgment: 'This direction is wrong; I won't go.' / B-side: But more often, refusal is fear — you don't disagree with the new world's direction; you fear you can't survive it. Your 'holding firm' is just respectful packaging for inability to adapt. Key tension: Do you refuse to change because you see what others don't, or because you've closed your eyes? | Drive Circuit (Trieb): Refusing — let the outside be what it will; I'm not going out.",
        reference: "《都灵之马》在风暴吞噬一切后仍然试图过日常生活的农夫；《日落大道》诺玛·德斯蒙德拒绝承认默片时代已经结束。",
        referenceEn: "A farmer still trying to live normally after storms devour everything in The Turin Horse; Norma Desmond refusing to admit the silent film era is over in Sunset Boulevard.",
        topology: "壁龛封闭：能量在自身周围建造一个密封的小空间——外部环境的变化被壁龛的墙隔绝在外，内部维持着一个已经不存在的世界的恒温恒湿",
        directive: {
            bright: "写他的世界和外面的世界之间那道看不见的墙——他的房间里的日历还停在三年前，他的衣服是十年前的款式，他的语言里有已经没人用的词。写这种不变有一种古怪的完整性：当外面的人在追逐新事物时，他的世界虽然旧但是自洽的，每一个部分都和其他部分匹配。让他的拒变不是盲目的而是有理由的——只是那个理由属于一个已经过去的语境，在当下听起来像外语。",
            dark: "写外面的世界渗透进来的那些瞬间——一个他不认识的词出现在报纸上、一个他不会用的机器替代了他的工作方式、一个他曾经确信的规则被宣布无效。写他面对这些入侵时的反应不是思考而是关门：加固壁垒、缩小窗户、减少和外部的接触。写他的世界在缩小——十年前他拒绝的是一种趋势，五年前他拒绝的是一个时代，现在他拒绝的是现实本身。写他独自坐在一个和外界完全隔绝的房间里的'安全感'——以及他不让自己想的问题：门外还有人吗？",
            tension: "场景锚点：一个他在乎的人来敲门说'出来吧，外面其实没有那么可怕'。悖论不是'出去vs.不出去'——而是：他已经不知道出去之后他还是不是自己了。他在壁龛里保存的不是一种生活方式而是一个版本的自我——那个版本只在壁龛内部的条件下才能存活。出去意味着让那个自己死掉，变成一个他还不认识的人。写他把手放在门把手上又缩回来的那个动作——他不是不敢出去，是不敢成为出去之后的那个人。"
        }
    },

    // ---- 病理性凝固：当保存变成执念，固定变成囚禁 ----

    {
        id: "drv_obsession",
        name: "执念", nameEn: "Obsession",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "一个想法占据了你全部的精神空间。你无法停止想它。",
        defEn: "A single thought occupying your entire mental space. You cannot stop thinking about it.",
        core: "A面：执念是凝固最纯粹的形式——全部能量集中在一个点上。这种极度专注有时能创造奇迹：世界上最伟大的作品往往来自执念者。/ B面：但执念的代价是除了那个点之外的一切都枯萎了——健康、关系、生活，全被那个想法吸干。不是你追它，是它追你。关键张力：执念是创造力的源泉，还是把你吃掉的怪物？ | 驱力脉动(Trieb): 定住——这个想法长在脑子里了，拔不掉。",
        coreEn: "A-side: Obsession is crystallization's purest form — all energy concentrated on a single point. This extreme focus sometimes works miracles: the world's greatest works often come from the obsessed. / B-side: But obsession's cost is everything else withering — your health, relationships, life, all drained by that one idea. You don't chase it; it chases you. Key tension: Is your obsession the source of creativity, or a monster eating you? Can you tell the difference? | Drive Circuit (Trieb): Fixed — this thought has grown into my brain; it can't be pulled out.",
        reference: "《鸟人》一个过气演员对百老汇成功的执念吞噬了他的家庭和理智；《爆裂鼓手》弗莱彻对完美演奏的执念摧毁了一个又一个学生。",
        referenceEn: "A washed-up actor's obsession with Broadway success consuming his family and sanity in Birdman; Fletcher's obsession with the perfect performance destroying student after student in Whiplash.",
        topology: "引力坍缩：能量向一个点持续收缩——吸入周围所有物质，连光都无法逃逸，坍缩点的密度趋向无穷但体积趋向零",
        directive: {
            bright: "写他在凌晨四点还在工作时的那种清醒——不是因为咖啡而是因为那个想法本身就是兴奋剂。写他眼中除了那件事之外一切都是模糊的：人们走过他身边他看不到脸，有人和他说话他听不到内容，他的整个感知系统被重新校准到只接收和那个想法相关的信号。写这种专注的纯粹性：没有杂质、没有犹豫、没有'该不该继续'的反思。让执念的美是一种完全的投入——他不是在做一件事，他就是那件事。",
            dark: "写他在十年后发现那个想法已经不是他的了——是他属于它。写他尝试想别的事情时大脑自动跳回去的那种失控：像一个被磁铁吸住的指南针，无论怎么拨都回到同一个方向。写他身边的空地——妻子离开了、朋友消失了、健康恶化了——这些空间全部被那个想法填满，好像它需要足够大的面积才能展开。写他在一个清醒的瞬间从外部看自己：一个被一个想法寄生了的身体，宿主还以为自己是主人。",
            tension: "场景锚点：他实现了执念——然后发现实现之后那个想法还在。悖论不是'得到了vs.没得到'——而是：执念的能量不来自目标而来自'还没得到'的状态。得到了之后驱动力消失了，但惯性还在——他的大脑不知道怎么停下来。写他站在实现了的梦想面前的空洞：他追了十年的东西现在就在手里，但他的手已经握成了拳头的形状，不知道怎么打开了。执念给了他方向但拿走了他停下来的能力。"
        }
    },
    {
        id: "drv_hoarding",
        name: "囤积", nameEn: "Hoarding",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "无法丢弃任何东西。每一件物品都是一段记忆的物证，扔掉它们等于扔掉自己。",
        defEn: "Unable to discard anything. Every object is evidence of a memory; throwing them away means throwing away yourself.",
        core: "A面：囤积的起源是一种深层的珍惜——你觉得每样东西都有灵魂，扔掉它就是抛弃了一段关系。在物资匮乏年代长大的人囤积食物，在感情匮乏中长大的人囤积关系。这是一种对'失去'的先验恐惧。/ B面：但囤积最终会把你活埋——你被你保存的东西淹没了。房间里没有空间留给新的东西，你的人生也是。关键张力：你是在保存记忆，还是在用物品堵住你害怕面对的空虚？ | 驱力脉动(Trieb): 积攒——不能扔，扔掉了万一哪天需要呢。",
        coreEn: "A-side: Hoarding originates in deep cherishing — you feel everything has a soul; discarding means abandoning a relationship. Those raised in material scarcity hoard food; those raised in emotional scarcity hoard relationships. A priori fear of 'loss.' / B-side: But hoarding eventually buries you alive — drowned by what you've saved. No room for anything new in your space, or your life. Key tension: Are you preserving memory, or using objects to plug the emptiness you're afraid to face? | Drive Circuit (Trieb): Stockpiling — can't throw it away; what if you need it someday.",
        reference: "《公民凯恩》装满仓库的收藏品和那个永远找不到的'玫瑰花蕾'；《海上钢琴师》1900拒绝离开那艘船——船本身变成了他囤积的全部世界。",
        referenceEn: "Warehouse-filling collections and the eternally elusive 'Rosebud' in Citizen Kane; 1900 refusing to leave the ship — the vessel itself becoming his entire hoarded world in The Legend of 1900.",
        topology: "增殖性填充：能量不向外运动而是不断向内添加——空间被持续填满但永远觉得不够，因为囤积者用物质填的是一个没有底的心理性空洞",
        directive: {
            bright: "写他拿起一件别人会扔掉的东西时手指的温柔——一张用过的车票、一根断了的鞋带、一封没寄出的信。写他把它放进盒子里时的那种安心：它安全了，它不会消失了。写他的房间虽然堆满了东西但有他自己的逻辑——他知道每一件东西在哪里、它什么时候来的、它代表着什么。让囤积的温情面是一种极致的不遗弃：在一个所有东西都被设计成可抛弃的世界里，他是唯一一个说'我不扔'的人。",
            dark: "写他的房间已经只剩一条从门到床的窄路了——两边是从地板堆到天花板的东西，有些他已经十年没看过但无法丢弃。写他试图扔掉一个塑料袋时的焦虑：手伸向垃圾桶然后缩回来，再伸再缩，最后把塑料袋放回了原来的位置。写他在噩梦中看到空荡荡的房间然后惊醒——空旷对他来说比黑暗更可怕。写他拒绝让任何人进入他的房间不是因为羞耻而是因为保护：他们不会理解为什么每一件东西都不能动，他们会说'扔了吧'，而那句话对他来说等同于'杀了它吧'。",
            tension: "场景锚点：房间满了——字面意义上的，门推不开了。悖论不是'留vs.扔'——而是：他囤积的每一件东西都是一段记忆的锚点，但锚点太多的时候它们互相覆盖、互相淹没，最终没有任何一件东西能被单独记住。他用来对抗遗忘的方法本身制造了遗忘：他记得每件东西的存在但已经忘了每件东西的故事。写他站在打不开的门前意识到：他把记忆保存在物品里，但物品已经把他关在了外面。"
        }
    },
    {
        id: "drv_rigidity",
        name: "僵化", nameEn: "Rigidity",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "你的判断、习惯和方法已经固化成了不可改变的模式。",
        defEn: "Your judgments, habits, and methods have solidified into unchangeable patterns.",
        core: "A面：僵化是秩序的代价——你可靠、可预测、值得信任，正因为你从不改变。混乱世界里，僵化的人是可以依靠的柱子。/ B面：但柱子不能移动——环境剧变、旧规则失效时，你的可靠就变成了阻碍。你不是在坚持正确，只是没有能力改变了。关键张力：你的一致性是美德还是残疾？你选择不变，还是失去了改变的能力？ | 驱力脉动(Trieb): 硬化——做了太久同样的事，不知道还有别的方式了。",
        coreEn: "A-side: Rigidity is the cost of order — you're reliable, predictable, trustworthy precisely because you never change. In a chaotic world, a rigid person is a dependable pillar. / B-side: But pillars can't move — when environments shift and old rules fail, your reliability becomes obstruction. You're not holding onto the right thing; you've lost the ability to change. Key tension: Is your consistency a virtue or a disability? Do you choose not to change, or have you lost the capacity? | Drive Circuit (Trieb): Hardening — done the same thing for so long, you've forgotten there are other ways.",
        reference: "《日落大道》诺玛活在默片时代的规则里无法适应有声电影；《浮生一日》日复一日重复同样的动作直到动作本身替代了生活。",
        referenceEn: "Norma living by silent film rules unable to adapt to talkies in Sunset Boulevard; repeating the same actions day after day until the actions replace life itself in Life in a Day.",
        topology: "结晶脆化：能量在长时间的静止中从柔性结构变成晶体结构——硬度增加但韧性消失，受到冲击时不是弯曲而是直接碎裂",
        directive: {
            bright: "写他做事的精确性——每一个步骤都和三十年前一模一样，不多不少。写他的可靠：在一个所有人都在即兴发挥的世界里，他是唯一一个你可以预测的人。写他的一致性给周围人带来的安全感：他的反应是可以被计算的，他的标准是恒定的，他是一个可以校准其他一切的参照物。让僵化的正面是一种罕见的稳定——在液态的世界里，他是唯一的固体。",
            dark: "写一个微小的变化到来时他身体的反应——不是思考而是一种接近恐慌的生理排斥。写他发现新同事用不同的方法做了他做了二十年的工作、而且做得更好时的那种存在性的威胁感：如果另一种方式也行，那他的方式就不是唯一的——如果不是唯一的，那他二十年的坚持是什么？写他在被要求改变时给出的理由越来越薄——他知道理由不成立了但他找不到新的理由，因为真正的理由是：他已经不知道怎么做一个不按这种方式做事的人了。",
            tension: "场景锚点：世界变了——不是渐变而是突变——他的方式在一夜之间从'可靠'变成了'过时'。悖论不是'变vs.不变'——而是：他的僵化不是选择的结果而是时间的结果。他不是决定不变——他是在重复中忘记了变化是一个选项。像一块骨头在没有运动的情况下逐渐钙化：不是骨头选择了僵硬，是运动停止之后僵硬自然发生了。写他试图弯曲时听到自己内部发出的'咔'声——那是结构在反抗它已经不记得的柔软。"
        }
    },
    {
        id: "drv_living_in_past",
        name: "活在过去", nameEn: "Living in the Past",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你的精神停留在某个已经结束的时刻。身体在现在，心在过去。",
        defEn: "Your spirit remains at a moment that has ended. Body in the present, heart in the past.",
        core: "A面：活在过去有时是忠诚——你拒绝放弃一段记忆，因为它定义了你是谁。'曾经的好日子'也许是生命中唯一完整的时候，你不愿接受它结束了。/ B面：但过去是无法更新的房间——你锁在了不再存在的世界里。身边的人在老去、成长、改变，你像定格的照片，微笑着但不属于任何时间线。关键张力：你在珍惜回忆，还是用回忆逃避不想面对的现在？ | 驱力脉动(Trieb): 回放——那时候多好啊，为什么不能永远是那时候。",
        coreEn: "A-side: Living in the past is sometimes loyalty — refusing to release a memory because it defines who you are. Those 'good old days' may be the only time you felt whole, and you won't accept it's over. / B-side: But the past is a room that can't be updated — you locked yourself in a world that no longer exists. People around you age, grow, change, while you're a frozen photograph: smiling but belonging to no timeline. Key tension: Are you cherishing memory, or using it to escape a present you don't want to face? | Drive Circuit (Trieb): Replay — those times were so good; why can't it always be then.",
        reference: "《了不起的盖茨比》盖茨比用全部财富试图重建五年前和黛西的那个夜晚；《海边的曼彻斯特》李永远活在火灾那天，无法向前走一步。",
        referenceEn: "Gatsby spending his entire fortune trying to recreate one night with Daisy five years ago in The Great Gatsby; Lee forever living on the day of the fire, unable to take a single step forward in Manchester by the Sea.",
        topology: "时间回环：能量不在空间中而是在时间中固定——意识被钉在了某个已经过去的坐标上，身体继续向前但注意力像被拴住的狗一样不断被拉回原点",
        directive: {
            bright: "写他在某个气味/光线/声音中突然回到那个时刻的身体反应——不是回忆而是重新在场：他的肌肉恢复了当时的姿态，他的肺吸入了当时的空气。写那个瞬间的温暖不是温情脉脉的怀旧而是一种确定的存在感：在那个时刻他知道自己是谁、在哪里、为什么。写他从回忆中出来时的失落不是对过去的留恋而是对现在的不确认——过去比现在更清晰，这很可怕但也很安慰。",
            dark: "写他试图在现在的空间里重建过去的场景——同一家餐厅、同一首歌、同一个位置——但所有东西都差了一点：灯光换了、菜单变了、对面的椅子是空的。写他每一次重建的失败都像一次微小的丧失：不是过去离他远了而是他终于看清过去从来就不在了。写他和现在的人在一起时的隔膜：他的身体在这里但他的参照系是二十年前的，他用过去的标准衡量现在的关系，结果一切都不够好。写他最恐惧的不是忘记过去而是有一天醒来发现自己已经习惯了现在——那意味着背叛。",
            tension: "场景锚点：他终于回到了那个地方——但那个地方已经不存在了。悖论不是'过去好vs.现在差'——而是：他活在的那个'过去'从来不是真正的过去——它是他的记忆用选择性保留和修饰创造出来的一个从未存在过的黄金时代。他怀念的不是那个时刻而是那个时刻的简化版：没有当时的焦虑、尴尬和不确定，只有被回忆打了柔光的完美剪辑。写他站在那个已经面目全非的地方时意识到：他活在的过去不是过去，是他自己导演的电影。"
        }
    },
    {
        id: "drv_fetishism",
        name: "恋物", nameEn: "Fetishism",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "把全部的情感投射到一个特定的物品上。那个东西变得比它本身重要一万倍。",
        defEn: "Projecting all emotion onto a specific object. That thing becomes ten thousand times more important than itself.",
        core: "A面：恋物是爱的凝缩——你把一段关系、记忆、感觉全部压缩进一个具体的东西里。死者的戒指、旧情人的围巾、童年的玩偶——微型纪念碑，全部世界藏在里面。/ B面：但恋物的危险是你爱物品胜过爱它代表的人——你抱着围巾哭，不是想念她，是怕放下围巾就彻底忘了她。物品变成了记忆的人质。关键张力：你爱的是这个东西，还是它帮你逃避的事实——她已经走了？ | 驱力脉动(Trieb): 抓紧——只要这个东西还在，一切就都在。",
        coreEn: "A-side: Fetishism is love condensed — you compress an entire relationship, memory, feeling into one concrete thing. A dead person's ring, an ex's scarf, a childhood doll — miniature monuments containing your whole world. / B-side: But fetishism's danger is loving the object more than what it represents — you cry into the scarf not because you miss her but because you fear releasing it means forgetting her entirely. The object becomes memory's hostage. Key tension: Do you love this thing, or the fact it helps you escape — that she's gone? | Drive Circuit (Trieb): Gripping — as long as this thing remains, everything remains.",
        reference: "《公民凯恩》'玫瑰花蕾'——一个雪橇承载了一个帝国创始人全部的童年和失落；《星际穿越》库珀留给女儿的那块手表变成了跨越时空的爱的载体。",
        referenceEn: "'Rosebud' — a sled bearing the entirety of a mogul's childhood and loss in Citizen Kane; Cooper's watch left for his daughter becoming a vessel of love across spacetime in Interstellar.",
        topology: "情感压缩体：全部的情感能量被压缩进一个极小的物理对象——物品的密度远远超过它的体积，它在感知空间中的引力场扭曲了周围所有其他物品的意义",
        directive: {
            bright: "写他触摸那个物品时手指的节奏——不是抚摸而是一种确认：还在，还在，还在。写那个物品的物理特征他比任何人都清楚：重量、温度、表面哪里光滑哪里粗糙、哪个角被磨圆了。写他和那个物品之间的对话是沉默的但完整的——他握着它的时候整个人的呼吸频率都会变。让恋物的温柔面是一种私人的忠诚：全世界都忘了她，但这条围巾记得，而他守护着这条围巾。",
            dark: "写他发现物品开始替代它所代表的人——他闻围巾上的味道时闻到的已经不是她的味道而是围巾本身的味道了，但他假装没区别。写他的爱已经从她转移到了围巾：他不是在想念她而是在恐惧'如果围巾不见了怎么办'。写他在差点弄丢那个物品时的反应比当初她离开时更剧烈——因为她离开时他还有围巾，围巾如果丢了他什么都没有了。写他意识到但拒绝承认的事实：物品已经不是通往记忆的桥了，物品就是终点。",
            tension: "场景锚点：那个物品丢了——或者被打碎了。悖论不是'有了vs.丢了'——而是：他发现在失去物品之后记忆并没有消失。她还在他的脑子里——也许不那么清晰了但确实在。这意味着物品从来不是容器，记忆从来不住在物品里——他一直以为需要围巾才能想起她，但围巾丢了他才发现她从来没有离开过他的身体。写他站在空手中间的那种混乱：失去了他以为不能失去的东西之后，他没有崩溃——而'没有崩溃'本身让他崩溃了，因为那意味着他的爱比他想的更坚韧，也比他想的更不需要道具。"
        }
    },
    {
        id: "drv_petrification",
        name: "石化", nameEn: "Petrification",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "在极度恐惧或创伤面前完全冻住。无法思考、无法行动、无法逃跑。",
        defEn: "Completely freezing before extreme fear or trauma. Unable to think, act, or flee.",
        core: "A面：石化是身体对不可承受之重的保护——恐惧大到神经系统无法处理时，它选择关机而不是崩溃。不是懦弱，是生物学层面的紧急制动。/ B面：但石化成为常态就是活死人状态——身体在但你不在了。像困在石头里的雕像，看得到外面却无法互动。关键张力：石化保护了你，但如果永远不解冻——保护和毁灭有什么区别？ | 驱力脉动(Trieb): 僵死——被恐惧钉在原地，连呼吸都忘了。",
        coreEn: "A-side: Petrification is the body's protection against the unbearable — when fear exceeds what the nervous system can process, it chooses shutdown over breakdown. Not cowardice but biological emergency braking. / B-side: But when petrification becomes permanent, it's a living death — your body is present but you are not. Like a statue trapped in stone, you can see the world outside but can't interact. Key tension: Petrification protected you, but if you never thaw — what's the difference between protection and destruction? | Drive Circuit (Trieb): Frozen stiff — pinned in place by fear, forgetting even to breathe.",
        reference: "《钢琴家》在被发现的瞬间完全冻住、无法移动的犹太音乐家；《房间》从囚室中被解救出来后面对真实世界完全石化的母亲。",
        referenceEn: "A Jewish pianist completely freezing upon being discovered, unable to move in The Pianist; a mother entirely petrified facing the real world after being rescued from captivity in Room.",
        topology: "瞬间固化：能量在一毫秒内从液态变成固态——不是渐进的冷却而是整个系统的即时停机，所有正在进行的进程被冻结在中间状态：手举到一半、话说到一半、呼吸吸到一半",
        directive: {
            bright: "写石化发生的那一秒——世界还在运动但他已经停了。写他的意识在冻住的身体里面的状态：他能看到、能听到，但信号到达四肢时被截断了，像一封寄出但没有被接收的信。写石化的保护机制：他的神经系统在做数学——恐惧的总量除以处理能力等于过载，过载时的最优策略是停机而不是崩溃。让石化不是耻辱的而是精确的：身体在那个瞬间做出了唯一正确的决定——什么都不做。",
            dark: "写石化结束之后——不是结束的瞬间而是结束之后的日子——他的身体已经解冻了但某些部分还是硬的。写他在安全的环境中仍然会突然冻住：一个声音、一种光线、一个角度激活了那个旧的程序，他的身体在他的意识来得及反应之前就已经停机了。写他对自己身体的不信任：他不知道它什么时候会再次背叛他——不是'拒绝服从'而是'为了保护他而拒绝服从'。写他开始缩小生活半径以减少触发点的可能性：越来越少出门、越来越少见人，直到他的生活本身变成了一种预防性的石化。",
            tension: "场景锚点：他在一个需要行动的时刻——又石化了。悖论不是'动vs.不动'——而是：石化是身体对危险的正确反应——但如果身体已经无法区分真正的危险和危险的记忆，那正确的反应就变成了永久性的错误。写他从石化中醒来之后看着自己没有移动的手的那种愤怒：不是对恐惧愤怒而是对保护本身愤怒——他的身体在用保护他的名义囚禁他。写他想对自己的神经系统说但无法说的话：'我知道你在保护我，但我需要你让我害怕地活着，而不是安全地死着。'"
        }
    },
    {
        id: "drv_time_capsule",
        name: "时间胶囊", nameEn: "Time Capsule",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把一个时刻完封不动地密封起来。拒绝让时间触碰它。",
        defEn: "Sealing a moment completely intact. Refusing to let time touch it.",
        core: "A面：时间胶囊是对完美瞬间最极端的守护——你知道美好的东西会腐朽，所以在最完美的时刻把它冻住。每件艺术品都是时间胶囊：一首诗把一个瞬间的感受永远保存下来。/ B面：但被密封的东西停止了生长——你保存的不是活物，是标本。拒绝让它改变，也就拒绝了让它活。关键张力：保存一个完美的瞬间——和杀死它——是同一个动作吗？ | 驱力脉动(Trieb): 封存——不能让这一刻永远持续，至少不让它腐烂。",
        coreEn: "A-side: The time capsule is the most extreme guard of a perfect instant — you know all beautiful things decay, so you freeze it at its most perfect moment. In a way, every artwork is a time capsule: a poem preserving one instant's feeling forever. / B-side: But what's sealed stops growing — you've preserved not a living thing but a specimen. By refusing it change, you refused it life. Key tension: Is preserving a perfect moment and killing it the same act? | Drive Circuit (Trieb): Sealing — if I can't make this moment last forever, at least I can keep it from rotting.",
        reference: "《盗梦空间》柯布在潜意识深处完美保存了已故妻子的影像但它已经不是她了；《了不起的盖茨比》盖茨比要求的不是黛西，而是五年前那个完美夜晚的精确复刻。",
        referenceEn: "Cobb perfectly preserving his dead wife's image deep in his subconscious but it's no longer her in Inception; Gatsby demanding not Daisy but an exact replica of that perfect night five years ago in The Great Gatsby.",
        topology: "真空封存：能量在一个瞬间制造出完美的真空——隔绝空气、时间和所有会引起衰变的因素，被封存的物质永远保持在封存那一秒的状态，但真空本身需要持续的能量维持",
        directive: {
            bright: "写他选择封存那个瞬间的判断——不是任何时刻都值得封存，他选择的是高峰：光线最好的那一秒、笑容最真的那一帧、关系最完整的那个下午。写封存的手法：一首诗、一张照片、一个从不改变的房间布局——都是不同形态的胶囊。写他在完成封存之后的安心：那个瞬间现在不会腐朽了，时间可以在它外面流过但无法触碰它。让时间胶囊的美是一种对完美的虔诚：他不奢求永恒，只奢求这一个瞬间的永恒。",
            dark: "写他在多年后打开胶囊时发现的——封存的东西完好无损但他自己变了。写他已经不是当初那个能感受到那种感觉的人了：诗还是那首诗但读它的眼睛换了。写他意识到时间胶囊的真正悖论：他保存的是一个只有当时的他才能解读的密码，现在的他拿着密码但已经忘了密码对应的感觉。写他在完美保存的瞬间面前的孤独——那个瞬间还年轻但他已经老了，它们之间的时间差变成了一条不可逾越的河。",
            tension: "场景锚点：他维护了二十年的'完美保存'被意外打破了——一杯水泼在了照片上、一场地震震碎了那个房间。悖论不是'保存了vs.毁了'——而是：他花了二十年的能量维持真空，这些能量本身就是一种生命的消耗。保存那个瞬间的代价是他没有活在任何其他瞬间里——他不是在保存过去而是在用现在喂养过去。写他在胶囊破碎之后的第一个早晨：二十年来他第一次不需要检查封存的状态，这份空闲让他不知道双手该做什么——然后他意识到这双空出来的手，也许可以触摸一些还在生长的东西。"
        }
    }
];
