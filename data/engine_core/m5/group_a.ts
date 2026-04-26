import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_A: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 冲撞的驱力 (The Collision) — 20 Items
    // 能量向外喷发，直面 M4 的边界——不绕行、不回避、不等待。
    // 冲撞不等于暴力。告白是冲撞，坚持是冲撞，创造禁忌之作也是冲撞。
    // 光谱：意志性冲撞(1-7) → 创造性冲撞(8-13) → 物理性冲撞(14-20)
    // ============================================================

    // ---- 意志性冲撞：用坚持、勇气和身体的在场直面障碍 ----

    {
        id: "drv_declaration",
        name: "公开告白", nameEn: "The Declaration",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "在所有人面前说出心底最深的真相——爱、信仰或立场。",
        defEn: "Declaring your deepest truth before everyone — love, faith, or conviction.",
        core: "A面：告白是勇气最纯粹的形态——你把最脆弱的部分暴露在所有人面前，赌注不是胜利，而是'我活得真实'。/ B面：但说出口的那一秒你就失去了撤回的权利。沉默时你还能假装感情不存在——说出来之后，空气永远变了。关键张力：你说出真相是为了改变什么，还是因为继续沉默比开口更痛苦？ | 驱力脉动(Trieb): 坦白——必须让压在胸口的东西离开身体。",
        coreEn: "A-side: Declaration is courage in its purest form — exposing your most vulnerable part before everyone, wagering not on victory but on 'I lived honestly.' / B-side: But the second you speak, you lose the right to take it back. In silence you could pretend those feelings didn't exist — once spoken, the air changes forever. Key tension: Did you speak truth to change something, or because silence hurt more than speaking? | Drive Circuit (Trieb): Confession — the thing pressed against the chest must leave the body.",
        reference: "《请以你的名字呼唤我》少年在离别前终于说出爱意的颤抖告白；《死亡诗社》学生站上课桌公开捍卫信念的'船长，我的船长'。",
        referenceEn: "The trembling confession of love before parting in Call Me by Your Name; students standing on desks defending belief in 'O Captain, My Captain' in Dead Poets Society.",
        topology: "穿刺性射出：能量不绕行不试探，从胸腔经喉咙直线穿出——话一旦越过嘴唇就成为不可逆的物理事件",
        directive: {
            bright: "写声音从喉咙里挤出来的物理过程——第一个字是破碎的，第二个字开始稳定。让他的声音像水流找到出口：一旦开始就不可能停下。写他说话时目光第一次不回避对方的眼睛——这个目光不是勇气，是'已经没有退路'的清醒。让空气因为那些词的存在而改变温度。不要写对方的反应——写他自己听到自己声音时的陌生感。",
            dark: "写话说出口之后的不可逆——他听到自己的声音在房间里消散，但那些词已经像子弹一样嵌进了对方的身体里，拔不出来。写他突然意识到自己说的比想说的多——有些话他不知道自己知道，直到嘴巴替他说了出来。那些话像碎玻璃落在两个人之间的桌面上。不要写后悔——写一种更冷的认知：这些话一直在我身体里，现在它们在外面了，但外面的空气没有温度来接住它们。",
            tension: "场景锚点：说完之后的沉默。嘴巴还微张着但已经没有词了。悖论不是'说了vs.不说'——而是：他说出的那些话确实是真的，但'真的'不等于'对的'。对方听到的版本和他说出的版本不可能是同一个。他以为说出来就完成了，但说出来只是把'我的秘密'变成了'我们之间的东西'——而'我们之间的东西'他无法单方面控制。"
        }
    },
    {
        id: "drv_against_current",
        name: "逆流而行", nameEn: "Against the Current",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "选择所有人都反对的方向，独自走下去。因为你看到了别人没看到的东西。",
        defEn: "Choosing the direction everyone opposes, walking it alone. Because you see what others cannot.",
        core: "A面：大多数伟大的发现和改革，最初都被视为疯狂。你的坚持也许正在等待一个尚未诞生的听众。/ B面：但'逆流'不等于'正确'——绝大多数逆流者确实是错的。在答案揭晓之前，先驱和偏执狂在外表上完全一样。关键张力：所有人都说你错了——你凭什么相信自己对的？凭理性，还是一种你不愿承认的自恋？ | 驱力脉动(Trieb): 执拗——无论代价，我要按自己看到的真相走路。",
        coreEn: "A-side: Most great discoveries and reforms were initially deemed insane. Your persistence may await an audience not yet born. / B-side: But 'against the current' doesn't mean 'correct' — most contrarians are indeed wrong. Before the answer is proven, visionary and zealot look identical. Key tension: If everyone says you're wrong — what gives you the right to believe you're right? Reason, or narcissism? | Drive Circuit (Trieb): Obstinacy — regardless of cost, I walk the truth I see.",
        reference: "《至暗时刻》全体主和时坚持抵抗到底的丘吉尔；《月亮与六便士》抛弃一切世俗成功去画画的斯特里克兰德。",
        referenceEn: "Churchill insisting on resistance when all urged appeasement in Darkest Hour; Strickland abandoning all worldly success to paint in The Moon and Sixpence.",
        topology: "逆向矢量：能量逆着所有力场的方向运动——阻力不是障碍而是方向的确认，没有阻力的时候他反而不知道该往哪走",
        directive: {
            bright: "写风从正面吹来的身体感——他走得比所有人都慢，因为每一步都在抵抗。但写他的步幅不变：不加速、不减速、不看两边。让周围的人群成为反向的流体——他们的运动方向衬托出他的方向。不要写信念——写一种更原始的东西：他的身体就是朝这边走的，像指南针不需要理由指向北。",
            dark: "写第三年还在走、但已经不记得出发理由的那种木然——他逆流太久，已经分不清是自己在走还是被水流推着后退。写他回头看时发现身后一个人也没有：不是他们放弃了，是他们从来没跟上过。用一个物理细节锚定：他的鞋底磨穿了，但他没有停下来换鞋的习惯，因为停下来需要一个他已经忘记的动作——坐下。",
            tension: "场景锚点：有人追上来了——不是跟随者而是另一个逆流的人，但方向和他相反。悖论不是'我对vs.世界错'——而是：如果两个逆流者方向相反，他们不可能都对。他凭什么确信自己的方向是真理而不是另一种偏执？写他和那个人擦肩而过时的眼神交换——两双一模一样的确信的眼睛。"
        }
    },
    {
        id: "drv_all_in",
        name: "孤注一掷", nameEn: "All In",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "把全部筹码推上赌桌，不留退路。要么拥有一切，要么什么都不剩。",
        defEn: "Pushing all chips onto the table, no fallback. Everything or nothing.",
        core: "A面：孤注一掷是对生命最激烈的投入——你拒绝安全的平庸，选择危险的可能。把一切押上去的人活出了大多数人想活但不敢活的样子。/ B面：但'不留退路'往往是自我催眠——你逼自己到绝境，不是因为确信会赢，而是害怕在安全中慢慢腐烂。关键张力：你是真的在追求目标，还是在用'全力以赴'来逃避'万一白活了'的恐惧？ | 驱力脉动(Trieb): 赌注——要么拥有一切，要么确认自己至少敢赌。",
        coreEn: "A-side: Going all in is life's most intense commitment — rejecting safe mediocrity for dangerous possibility. The person who bets everything lives the life most dare not live. / B-side: But 'no fallback' is often self-hypnosis — cornering yourself not from certainty of winning, but from terror of rotting in safety. Key tension: Are you truly pursuing a goal, or using 'all-out effort' to flee the fear of having lived in vain? | Drive Circuit (Trieb): The Wager — everything or nothing, confirming at least you dared to bet.",
        reference: "《摔跤吧！爸爸》把一切赌在女儿会成为冠军上的父亲；《社交网络》把所有关系都烧掉只为把网站做成的扎克伯格。",
        referenceEn: "The father betting everything on his daughters becoming champions in Dangal; Zuckerberg burning all relationships to build the site in The Social Network.",
        topology: "不可逆压缩：所有能量被压缩进一个奇点——退路在身后逐一关闭，直到唯一的运动方向是穿过前方",
        directive: {
            bright: "写他把筹码推出去那一刻手的稳定——不是勇敢，是已经没有需要保护的东西了。写烧掉退路之后的身体反应：不是恐惧而是一种异常的轻盈，像卸下了一个背了十年的背包。写他的呼吸变深了、视野变窄了——所有感官都在收缩，聚焦到前方唯一的那个点上。不要写豪赌的刺激——写'除了这个我什么都没有了'的那种清澈。",
            dark: "写'没有退路'其实是一种自我绑架——他把自己逼到绝境不是因为确信会赢，而是因为在安全中他会被另一种更慢的东西杀死。写他在等待结果时的身体：手指开始不自觉地发抖，不是因为紧张，而是因为身体终于意识到了大脑一直在回避的事实——如果输了，不是回到原点，是比原点更低的地方。不要写赌徒的狂热——写一种冰冷的算计失败后的真空。",
            tension: "场景锚点：筹码已经推出去了，结果还没有来。他坐在那里，什么都做不了。悖论不是'赢vs.输'——而是：他发现'全押'这个动作本身已经给了他需要的东西。不管结果如何，'我敢'这三个字已经完成了。但如果赌注的意义在于下注而不在于结果——那他赌的到底是什么？"
        }
    },
    {
        id: "drv_stand",
        name: "据理力争", nameEn: "The Stand",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "在权力面前坚持你知道是正确的事情，不退让一步。",
        defEn: "Standing your ground before power on what you know is right, not yielding one step.",
        core: "A面：据理力争是文明的纠错机制——当所有人沉默时一个人站出来说'不对'，他替整个群体保住了最后的尊严。/ B面：但坚持的代价不是壮烈——而是漫长的、无人喝彩的消耗。你说了一百次'不对'没人听，你还要说第一百零一次吗？关键张力：你是在维护真理，还是在维护'我不可能错'的自尊？两者的外在表现完全一样。 | 驱力脉动(Trieb): 坚守——'我知道这是对的'的不可动摇。",
        coreEn: "A-side: Taking a stand is civilization's error-correction — when one person speaks 'wrong' amid universal silence, their voice preserves the group's last dignity. / B-side: But persisting costs not heroic splendor but long, unsung attrition. You said 'wrong' a hundred times, no one listened. Will you say it a hundred and first? Key tension: Are you defending truth, or defending the ego of 'I can't possibly be wrong'? Both look identical. | Drive Circuit (Trieb): Holding ground — the immovable 'I know this is right.'",
        reference: "《十二怒汉》一人之力说服全体陪审团改变判决；《秋菊打官司》只为讨一个说法而倔强上访的农村妇女。",
        referenceEn: "One juror persuading all others to change the verdict in 12 Angry Men; the peasant woman stubbornly petitioning just for 'an explanation' in The Story of Qiu Ju.",
        topology: "不动点：当所有力都在推它位移时，不动本身成为最大的力——但不动点的代价是永远无法知道移动之后会发生什么",
        directive: {
            bright: "写他的脚——钉在地面上，不是因为勇气而是因为身体物理性地拒绝后退。写他在权力面前说'不对'时声音的质感：不是高亢的而是平的、低的、像一块放在桌上的石头。写周围人的反应从愤怒到不安——不是他的话改变了什么，而是他的不移动让所有移动的人突然意识到自己在移动。不要写慷慨陈词——写一种更沉的东西：同一句话说了一百次之后的磨损感。",
            dark: "写第一百零一次说'不对'时嘴唇的麻木——这句话已经不像语言了，更像一种肌肉抽搐。写他坚持的代价不是壮烈而是漫长的无人喝彩的消耗：会议室空了，走廊空了，只剩他一个人还站在那个位置上。写他的膝盖——站太久了，不是信念在支撑，是关节已经僵硬到弯不下去了。不要写正义——写一种更冷的可能：他已经分不清自己在维护真理还是在维护'我不可能错'。",
            tension: "场景锚点：终于有人停下来听了。但悖论在这一刻暴露：他已经说了太久，'不对'这两个字已经从论点变成了身份。如果对方说'你说得对'——然后呢？他用了十年来做'那个说不对的人'，如果世界同意了他，他是谁？写他被认可的那一秒里闪过的不是喜悦而是恐慌。"
        }
    },
    {
        id: "drv_grind",
        name: "死磕到底", nameEn: "The Grind",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "没有捷径，没有巧计，只有日复一日的硬磨。用时间和重复碾碎一切。",
        defEn: "No shortcuts, no tricks, only daily grinding. Using time and repetition to crush everything.",
        core: "A面：死磕是天赋之外唯一可靠的力量——第一万次练习和第一次一样认真，这种愚笨的坚持本身就是最稀有的才华。/ B面：但死磕也是认知陷阱——你用劳动量代替思考。也许换一条路才对，但你害怕承认之前的一万次全白费了。关键张力：你的坚持是智慧还是沉没成本的囚徒？两者给你的感受完全一样。 | 驱力脉动(Trieb): 磨损——用时间和重复打磨一切不肯让步的障碍。",
        coreEn: "A-side: The grind is the only reliable force beyond talent — when the ten-thousandth practice holds the same sincerity as the first, that stubborn persistence is itself the rarest talent. / B-side: But grinding is also a cognitive trap — substituting labor for thinking. Maybe changing paths is right, but you fear admitting ten thousand attempts were wasted. Key tension: Is your persistence wisdom, or sunk-cost imprisonment? Both feel exactly the same. | Drive Circuit (Trieb): Attrition — wearing down every unyielding obstacle through time and repetition.",
        reference: "《爆裂鼓手》用双手流血来换取爵士乐极致的年轻鼓手；《百元之恋》从废柴到拳击台上拼尽全力的女人。",
        referenceEn: "The young drummer bleeding his hands for jazz perfection in Whiplash; the woman grinding from rock-bottom to the boxing ring in 100 Yen Love.",
        topology: "磨损性循环：能量在同一条轨迹上反复运行——不是突破而是磨蚀，石头不是被锤碎的而是被水流磨穿的",
        directive: {
            bright: "写第一万次练习和第一次一模一样的节奏——不快不慢，不多不少。写他的身体已经自动化了：手知道该往哪放，脚知道该怎么踩，大脑可以不参与。用一个时间压缩镜头：同一个动作在晨光里、在灯光下、在雨天、在雪地里重复，背景在变但动作的轮廓一帧不差。不要写天赋——写'愚笨的坚持'本身作为一种节奏感的美。",
            dark: "写他在第一万零一次重复时突然的迟疑——不是累了，而是一个念头像裂缝一样闪过：如果方向本身是错的呢？一万次重复买来的不是接近目标而是离起点太远无法回头。写他的身体：旧伤没有好就叠上了新伤，疼痛已经不是信号而是背景噪音。不要写执着——写沉没成本的囚徒：他继续不是因为相信会到达，而是因为停下来等于承认这一万次全是浪费。",
            tension: "场景锚点：他低头看自己的手——老茧、裂口、变形的关节。悖论不是'坚持vs.放弃'——而是：他的坚持和他的恐惧给他的感受完全一样。他无法从内部区分'我相信这条路'和'我害怕没走过的路'。写他闭上眼睛继续重复那个动作——不是因为想通了，是因为这个动作已经是他唯一还会做的事。"
        }
    },
    {
        id: "drv_forcing_entry",
        name: "破门而入", nameEn: "Forcing Entry",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "那扇门没有为你打开——你自己推开了它。阶层、行业、圈子的壁垒。",
        defEn: "That door was not opened for you — you pushed it open yourself.",
        core: "A面：他们说'你不属于这里'，你说'我已经在这里了'。每一个打破壁垒的先驱者都是推门而入的人，你的在场本身就是宣言。/ B面：但进了门之后门里的人并不欢迎你。你赢得了准入权，但永远是'那个闯进来的人'。关键张力：你花全部力气进入这个房间——进来后发现并不想待在这里。推门是为了门里面的东西，还是为了推门本身？ | 驱力脉动(Trieb): 闯入——既然没有邀请函，我就自己写一张。",
        coreEn: "A-side: They say 'you don't belong here,' you say 'I'm already here.' Every pioneer who broke barriers pushed the door open; your presence IS the declaration. / B-side: But once inside, those within don't welcome you. You won access but remain forever 'the one who barged in.' Key tension: You spent everything to enter — but once inside, you don't want to stay. Did you push for what's inside, or for the act of pushing? | Drive Circuit (Trieb): Intrusion — no invitation, so I'll write my own.",
        reference: "《隐藏人物》三位黑人女性强行打入全白人NASA的壁垒；《寄生虫》金家用一切手段挤进富人家庭的缝隙。",
        referenceEn: "Three Black women forcing their way into the all-white halls of NASA in Hidden Figures; the Kim family squeezing into a wealthy household in Parasite.",
        topology: "阈值强穿：能量强行通过一个为排斥它而设计的边界——门被推开但门框变形了，进入者和空间都不再是原来的样子",
        directive: {
            bright: "写他推开门的那一下——不是猛力撞击而是持续的、均匀的压力，像根慢慢穿透泥土的树根。写他站在门里面第一秒的感觉：空气不一样，光线不一样，地板的质感不一样。所有人都在看他，他的存在本身就是一句宣言。不要写胜利——写一种更原始的确认：'我的身体在这个空间里，这个事实不可撤销。'",
            dark: "写进门之后的寒意——门里面的人没有一个转过身来欢迎。他赢得了在场的权利但永远是'那个闯进来的人'。写一个具体的社交细节：所有人的对话在他靠近时降低音量，在他走开后恢复。他占据了物理空间但没有占据社交空间。不要写被歧视的愤怒——写一种更深的发现：他花了全部力气推开这扇门，进来之后发现门里面还有门，每一扇都比上一扇更厚。",
            tension: "场景锚点：他已经在里面站稳了——有了位置、有了名字、甚至有了尊重。但悖论在最安全的时刻暴露：他发现自己不断回头看那扇被他推开的门。不是想出去，而是推门的那个动作是他生命中最确定的瞬间——进来之后，他反而不知道该往哪走了。他的全部身份建立在'闯入'上，但'闯入'是一个完成时态。"
        }
    },
    {
        id: "drv_facing_shame",
        name: "直面羞辱", nameEn: "Facing Shame",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "在众人的嘲笑或蔑视中站稳，不逃走也不反击。拒绝倒下。",
        defEn: "Standing firm amid mockery or contempt, refusing to fall.",
        core: "A面：承受羞辱而不倒下是最安静的力量——在所有人等着看你崩溃的时刻拒绝崩溃。这种沉默的挺立比任何反击都更让施辱者不安。/ B面：但'承受'和'麻木'的边界极其模糊——你以为你在坚忍，也许你早已失去了感受痛苦的能力。你不是在抵抗，你只是坏了。关键张力：你站在那里不动——是出于力量，还是出于无处可去？ | 驱力脉动(Trieb): 挺立——把身体变成一面沉默的拒绝之墙。",
        coreEn: "A-side: Withstanding humiliation is the quietest strength — refusing to collapse at the moment everyone expects you to. Silent standing unsettles the abuser more than retaliation. / B-side: But 'enduring' and 'going numb' are nearly indistinguishable — perhaps years of shame destroyed your capacity to feel pain. You're not resisting; you're broken. Key tension: You stand unmoving — from strength, or from having nowhere to go? | Drive Circuit (Trieb): Standing fast — turning the body into a silent wall of refusal.",
        reference: "《为奴十二年》在绞刑架上脚尖点地苦撑一整天而不倒的所罗门；《活着》在接连失去所有亲人后仍然活下去的福贵。",
        referenceEn: "Solomon barely surviving a day on tiptoe under the noose in 12 Years a Slave; Fugui continuing to live after losing every family member in To Live.",
        topology: "静态抵抗面：能量不反击不逃离，凝固成一面垂直平面——所有施加的力都被吸收而非反射，沉默本身成为最大的否定",
        directive: {
            bright: "写他不倒的身体——周围的声音、目光、嘲笑像物理性的风压从四面八方挤压他，但他的重心没有移动一毫米。写他的脸：不是坚毅的表情而是一种已经超越了表情的状态——疼痛被吸收到了表面以下的某个地方。不要写坚强——写一种物理事实：他的脚长在了这块地上。",
            dark: "写'不倒'和'麻木'之间已经无法区分的那个时刻——他不是在承受，是感觉神经已经断了。写他的眼睛：还睁着，但里面的东西已经退到了很远的地方。用一个细节：有人往他身上扔了什么东西，他没有躲——不是勇气，是身体已经不认为自己值得被保护了。不要写忍辱负重——写一种更冷的可能：他站在那里是因为无处可去。",
            tension: "场景锚点：施辱者停了。不是因为同情而是因为不安——他的不倒让暴力失去了回声。悖论不是'忍受vs.反击'——而是：他的沉默里到底有没有一个'我'还在？挺立是力量的证据，还是主体已经缺席、只剩身体还在执行最后一条指令？写他在所有人离开后依然站着——不是选择，是忘了怎么坐下。"
        }
    },

    // ---- 创造性冲撞：用颠覆、创造和先驱行动打碎既有范式 ----

    {
        id: "drv_paradigm_break",
        name: "范式颠覆", nameEn: "The Paradigm Break",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "推翻所有人接受的真理，用一个新的真理取而代之。",
        defEn: "Overthrowing an accepted truth, replacing it with a new one.",
        core: "A面：你看到了所有人习以为常的世界中被忽略的裂缝，并且有勇气说出来。每一次颠覆都让人类更接近真实。/ B面：但颠覆者和偏执狂难以区分——答案被证实之前，'天才的洞见'和'疯子的胡话'外表完全一样。关键张力：你确信自己发现了真理——但这种确信让你和每个被证伪的妄想者一模一样。什么能区分你们？只有时间。 | 驱力脉动(Trieb): 颠覆——推翻已知世界的地基，看看下面到底是什么。",
        coreEn: "A-side: You see the crack in the world everyone takes for granted, and dare to name it. Every paradigm break brings humans closer to the real. / B-side: But the breaker is often indistinguishable from the zealot — before proof, 'genius insight' and 'madman's raving' look identical. Key tension: You're certain you've found truth — but that certainty makes you identical to every disproven delusion. What distinguishes you? Only time. | Drive Circuit (Trieb): Subversion — tearing up the known world's foundation to see what lies beneath.",
        reference: "《模仿游戏》顶住军方质疑坚持用机器破解密码的图灵；《日瓦戈医生》在意识形态风暴中坚持个人诗歌真理的医生。",
        referenceEn: "Turing defying military skepticism to crack codes with machines in The Imitation Game; Doctor Zhivago holding to poetic truth amid ideological storms.",
        topology: "地基抽换：能量不攻击上层建筑而是直接移除地基——整个结构悬空一瞬后按新逻辑重新落地",
        directive: {
            bright: "写他说出新真理时房间里的静——不是安静而是所有人的认知框架同时崩塌时产生的真空。写他自己也被这个发现震住了：这个想法不是他构造的而是他看到的，像掀开地毯发现下面有一扇门。不要写天才时刻——写一种更朴素的体验：'这个东西一直在这里，为什么所有人都没看到？'",
            dark: "写颠覆之后的荒原——旧范式被推翻了但新范式还没被接受。他成了唯一站在新地基上的人，从所有人的视角看他悬浮在空中。写他和同行交流时的断裂：他说的每句话都是对的但没人能理解，因为他们用的是旧语法。不要写先知的孤独——写一种更精确的恐惧：如果我是对的，为什么没有任何人看到我看到的东西？",
            tension: "场景锚点：有人理解了。但理解的方式不是他预期的——对方从他的发现中推导出了一个他没想到的、令他不安的结论。悖论不是'天才vs.疯子'——而是：推翻旧地基的人无法控制新地基上会长出什么。你撕开了一个洞，但穿过洞的不只是光。"
        }
    },
    {
        id: "drv_forbidden_work",
        name: "禁忌之作", nameEn: "The Forbidden Work",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "创造一件不应该存在的作品——被信仰、法律、道德或品味所禁止的表达。",
        defEn: "Creating a work that should not exist — expression forbidden by faith, law, morality, or taste.",
        core: "A面：所有伟大的艺术都曾被同代人视为冒犯。禁忌标记了文化最害怕面对的真相，艺术的职责恰恰是把手伸进那个缝隙里。/ B面：但'冒犯'不等于'深刻'——很多作品只是用'脏'替代了'深'。你以为在揭露真相，也许只是消费他人的痛苦来获取注意力。关键张力：你创造这件作品是因为有必须被说出的真理，还是享受'被禁止'这个标签的刺激？ | 驱力脉动(Trieb): 冒犯——必须触碰那条线，因为线的存在本身就是对真相的压制。",
        coreEn: "A-side: All great art was once deemed offensive. Taboos mark the truths a culture fears most, and art's duty is reaching into that crack. / B-side: But 'offensive' doesn't mean 'profound' — much 'taboo-breaking' work merely substitutes 'dirty' for 'deep.' Key tension: Did you create this because you hold a truth that must be spoken, or because you enjoy the thrill of the 'forbidden' label? | Drive Circuit (Trieb): Transgression — the line must be touched, because the line itself suppresses truth.",
        reference: "《霸王别姬》在政治高压下坚持表演的程蝶衣；《华氏451度》在焚书时代用身体背诵文学的地下记忆者。",
        referenceEn: "Cheng Dieyi persisting in performance under political pressure in Farewell My Concubine; underground memorizers preserving literature with their bodies in Fahrenheit 451.",
        topology: "禁区穿越：能量穿过一条由集体恐惧画出的线——穿越本身不可逆地改变了线两边的含义",
        directive: {
            bright: "写他创作时的手——不是颤抖的而是异常平静的，因为这个作品在他心里已经完成了，现在只是让它从身体里走出来。写材料在他手中变成不应该存在的形状时的声音和质感。让禁忌的边界用一个具体的外部信号出现：有人敲门、电话响了、一封警告——他看了一眼，然后继续。不要写叛逆——写一种更深的必然：这个东西不是他想创造的，是它必须存在。",
            dark: "写作品完成后他第一次完整地看它时的反应——他自己也被它冒犯了。他原以为自己在控制这个作品，但作品在某个时刻开始自己生长，最终呈现的东西比他的意图更远、更尖锐、更不可辩护。写他意识到：他不能声称这是'为了真理'——因为真理不需要他这么痛苦地呈现。他享受了冒犯本身。不要写殉道——写一种诚实的自我审讯。",
            tension: "场景锚点：作品被公开了。一半人说天才，一半人说变态。但悖论不在外部评价——而是：他已经无法确定这个作品的创造者是'勇敢的他'还是'需要被看见的他'。这两个人住在同一具身体里，用同一双手完成了同一件作品。写他在评论中看到一句话精确地指出了他不愿承认的动机——而他无法反驳。"
        }
    },
    {
        id: "drv_unauthorized_rescue",
        name: "越权拯救", nameEn: "Unauthorized Rescue",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "打破规则去救一个不该被救的人。不是因为被允许，而是因为不能不救。",
        defEn: "Breaking rules to save someone who 'shouldn't' be saved — because you cannot not save them.",
        core: "A面：规则说'不行'，良知说'必须'。那些违反命令折返救人的人不是英雄主义者，他们只是无法做到不回头。这种冲动恰恰是人之所以为人的证据。/ B面：但违规拯救也是危险的自恋——你把自己放在规则之上。系统存在的理由恰恰是因为个人判断不可靠。关键张力：你的善举之所以像善举，仅仅因为你恰好是对的。如果人人都越权行事，世界更好还是更糟？ | 驱力脉动(Trieb): 良知——当规则和人性相撞，选择站在人性一边。",
        coreEn: "A-side: Rules say 'no,' conscience says 'must.' Those who disobey orders to turn back aren't heroism enthusiasts — they simply cannot not turn back. This impulse is precisely the proof of being human. / B-side: But unauthorized rescue is dangerous narcissism — placing yourself above rules. The system exists because individual judgment is unreliable. Key tension: Your good deed looks good only because you happened to be right. If everyone acted on conscience, would the world be better or worse? | Drive Circuit (Trieb): Conscience — when rules and humanity collide, choosing humanity.",
        reference: "《辛德勒的名单》冒死伪造名单拯救犹太人的商人；《血战钢锯岭》拒绝拿枪却在战场上冒死救回七十五人的军医。",
        referenceEn: "The businessman forging lists to save Jews at mortal risk in Schindler's List; the medic refusing to carry a gun yet rescuing 75 under fire in Hacksaw Ridge.",
        topology: "规则撕裂：能量在法则的缝隙中强行通过——不是绕过规则而是直接撕开它，撕裂声本身成为道德的声音",
        directive: {
            bright: "写他转身折返的那个动作——命令说撤退，身体说回去。不是思考后的决定而是脊椎层面的不服从：脚自己转了方向。写他在违反命令的那一秒里的生理反应：所有被训练压下去的本能同时复活了。不要写英雄主义——写一种更原始的东西：他的身体拒绝了'不救'这个选项，像吞不下去的异物。",
            dark: "写救出来之后的后果——规则之所以存在是因为个人判断不可靠。他救了这一个人，但为此违反的规则原本保护着十个人。写他在事后面对质询时的身体：后背僵直，不是因为理直气壮——而是他也不确定自己是对的。他的善举之所以像善举，仅仅因为他恰好赌对了。不要写正义感——写一种更冷的清醒：如果被救的人最终死了，这个行为就从'英雄'变成'违纪'。",
            tension: "场景锚点：被救的人看着他。但那个眼神里没有他期待的感激——只有一个活着的人看着另一个活着的人的困惑。悖论不是'规则vs.良知'——而是：他越权救人的那一秒，他把自己放在了规则之上。如果人人都这样做，世界更好还是更糟？写他无法回答这个问题，但也无法后悔那个转身。"
        }
    },
    {
        id: "drv_apostasy",
        name: "叛教", nameEn: "The Apostasy",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "公开放弃你被教育要信仰的一切——宗教、意识形态、家族传统。",
        defEn: "Publicly renouncing everything you were raised to believe.",
        core: "A面：叛教是最诚实的精神手术——你切开从小被灌注的一切，逐一检视，发现有些已经腐烂。你为了灵魂的真实而放弃了归属感。/ B面：但叛教者往往从一套教条跳入另一套——你离开了父亲的信仰，加入了某个'觉醒'群体。你只是换了一个主人。关键张力：你是真的独立思考了，还是选择了一个更时髦的牢笼？ | 驱力脉动(Trieb): 背弃——为了成为自己，必须先亲手杀死童年的你。",
        coreEn: "A-side: Apostasy is the most honest spiritual surgery — cutting open everything instilled since childhood, finding some rotten. You sacrifice belonging for authenticity. / B-side: But apostates often leap from one doctrine to another — you left your father's faith and joined a 'woke' group. You've merely switched masters. Key tension: Did you truly think independently, or choose a more fashionable cage? | Drive Circuit (Trieb): Renunciation — to become yourself, you must first kill the childhood you.",
        reference: "《沉默》在殉教与弃教之间撕裂的传教士；《楚门的世界》亲手拆穿并走出被编造的一生的楚门。",
        referenceEn: "The missionary torn between martyrdom and apostasy in Silence; Truman dismantling and walking out of his fabricated life in The Truman Show.",
        topology: "自切除：能量转向自身——不是攻击外部信仰体系而是切除它已经长进身体里的部分，伤口在内部",
        directive: {
            bright: "写他说出'我不再相信'时身体的反应——不是解放而是失重。支撑了他二十年的结构突然消失了，身体需要重新学会平衡。写他走出教堂或家门时的阳光——太亮了，因为他之前一直生活在一种特定的光线里。不要写觉醒——写一种更准确的体验：他不是发现了新真理，而是失去了旧的，新的还没来。",
            dark: "写切除信仰时的幻肢痛——他不再相信了，但身体还在执行旧的仪式：到了那个时间还是想祈祷，听到那首歌还是想站起来。写他发现'叛教'没有让他自由，只是让他从一种确定性掉进了真空。他离开了父亲的教条，但发现自己下意识地在寻找下一个教条。不要写独立思考——写一种更诚实的恐惧：没有框架的人什么形状都没有。",
            tension: "场景锚点：他遇到了一个还在信的人，那个人看起来很平静。悖论不是'信vs.不信'——而是：他叛教的理由是'我要独立思考'，但'独立思考'本身会不会也是一种信仰？他从一个框架跳出来，凭什么确信现在站的地方不是另一个更隐蔽的框架？写他看着那个信徒的平静，第一次怀疑痛苦不等于清醒。"
        }
    },
    {
        id: "drv_raising_banner",
        name: "揭竿而起", nameEn: "Raising the Banner",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "第一个站出来说'不'的人——不只是为自己，而是邀请所有人一起站起来。",
        defEn: "The first to stand and say 'no' — not for yourself alone, but inviting everyone to rise together.",
        core: "A面：第一个举旗的人最孤独也最被记住——不知道身后有没有人跟上，但先站了起来。每一场革命都始于一个人的声音。/ B面：但领袖和煽动者的区别很微妙——你是因为看到不公才站出来，还是需要从'领导别人'中获得存在感？关键张力：如果成功了，你能放下旗帜回到普通人中吗？还是旗帜已经长进了你的手里？ | 驱力脉动(Trieb): 号召——必须把个人的'不'放大为所有人的'不'。",
        coreEn: "A-side: The first to raise the banner is loneliest and most remembered — not knowing if anyone follows, yet standing first. Every revolution begins with one voice. / B-side: But the line between leader and demagogue is razor-thin — did you stand because of injustice, or because you need 'leading others' for existence? Key tension: If you succeed, can you put down the banner? Or has it grown into your hand? | Drive Circuit (Trieb): Rallying — the personal 'no' must become everyone's 'no.'",
        reference: "《勇敢的心》在刑场上高呼自由唤醒整个民族的华莱士；《饥饿游戏》举起三指成为反抗符号的凯特尼斯。",
        referenceEn: "Wallace crying 'Freedom' on the scaffold awakening a nation in Berta heart; Katniss raising three fingers becoming a symbol of resistance in The Hunger Games.",
        topology: "共振放大：一个点的振动扩散为场——个人的'不'穿过人群时被放大，但放大后的波形已经不是原来的那个'不'了",
        directive: {
            bright: "写他站起来的那一秒——在他之前所有人都坐着。写他的声音在说出第一个字之前先是一次深呼吸，那个呼吸的声音在安静的房间里像一声叹息。然后第一个字出来了，不是呐喊而是正常的音量——但因为所有人都在沉默，正常音量就是最大的声音。写他说完后转头看身后——不知道有没有人会站起来。不要写领袖气质——写一种赌注：他完全可能是唯一站着的人。",
            dark: "写旗帜举起来之后的重量——第一天举旗是勇气，第一年举旗是责任，第十年举旗是枷锁。写身后站起来的人开始喊和他不同的口号——他发起的运动已经不属于他了，但所有后果都还是他的。写他在某个深夜独自看着那面旗帜：它已经破了，补丁比原布多。不要写被背叛——写一种更深的问题：旗帜长进了他的手里，他已经不知道放下之后自己还是什么。",
            tension: "场景锚点：他们赢了。但悖论在胜利时暴露：他发现自己说'不'的能力和说'好'的能力不成比例——他是一个完美的否定者，但不知道怎么建设。写他在胜利庆典上的表情：所有人都在欢呼，他在找下一个需要反对的东西。如果没有敌人，他是谁？"
        }
    },
    {
        id: "drv_breaking_precedent",
        name: "破例", nameEn: "Breaking Precedent",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "成为第一个做到'不可能的事'的人。不是因为更强，而是拒绝接受'不可能'。",
        defEn: "Being the first to achieve the 'impossible' — because you refuse to accept 'impossible.'",
        core: "A面：破例者重新定义了可能性的天花板——在他们之后，同样的事变得平凡。他们撕开的不是物理极限，而是想象力的极限。/ B面：但'第一个'的执念也可能是虚荣——你追求的是成就本身，还是'第一个'这个头衔？如果有人比你早了一天，你的努力就失去价值了吗？关键张力：你打破的是世界的限制，还是你对自己'不够特别'的恐惧？ | 驱力脉动(Trieb): 开拓——在'不可能'的地图上标注第一个脚印。",
        coreEn: "A-side: The precedent-breaker redefines the ceiling of possibility — after them, the same feat becomes ordinary. They tore not the physical limit but everyone's imagination limit. / B-side: But the obsession with 'first' can be vanity — are you chasing achievement, or the title? If someone preceded you by one day, does your effort lose value? Key tension: Did you break the world's limitation, or your fear of not being special? | Drive Circuit (Trieb): Pioneering — planting the first footprint on the map of 'impossible.'",
        reference: "《万物理论》身体全面瘫痪仍坚持用残存意识重塑宇宙学的霍金；《摔跤吧！爸爸》成为印度历史上第一位女摔跤冠军的少女。",
        referenceEn: "Hawking reshaping cosmology with fading motor functions in The Theory of Everything; the girl becoming India's first female wrestling champion in Dangal.",
        topology: "天花板穿刺：能量向上穿过一层所有人以为是实体的极限——穿过之后发现它不是天花板而是一层共识的凝固物",
        directive: {
            bright: "写他做到的那一秒——不是庆祝而是极度安静的瞬间。世界刚刚被改写了但还没有人意识到。写他的身体：可能在颤抖，可能在流泪，但不是喜悦——是压力突然消失后的生理反应，像深水潜水者上浮时的减压。不要写历史性时刻——写一种私人的、身体的、几乎是孤独的完成。",
            dark: "写'第一个'之后的空虚——他打破了一个纪录，但纪录被打破的那一刻就开始贬值。明年会有第二个人做到同样的事，后年会有一百个。写他发现'不可能'只是一个暂时性的标签——他撕掉了它，但下一个'不可能'已经在等着了。不要写被超越的失落——写一种存在论层面的问题：如果你的价值建立在'第一个'上面，'第二个'出现的那一天你就过期了。",
            tension: "场景锚点：有人问他'你是怎么做到的'。但悖论是：他不知道。他能描述每一步的技术细节但无法解释那个从'不可能'变成'可能'的临界点到底发生了什么。写他在回答时的迟疑——不是谦虚，是他真的不知道自己穿过的那层东西是什么，只知道穿过之后它就消失了，像它从来不存在。"
        }
    },

    // ---- 物理性冲撞：当坚持和创造不够了，能量以力量和身体直接撞击障碍 ----

    {
        id: "drv_violent_breakout",
        name: "暴力突围", nameEn: "Violent Breakout",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "用纯粹的力量撞碎挡在面前的一切。当和平手段用尽，拳头是最后的语言。",
        defEn: "Smashing through by sheer force. When peaceful means are exhausted, fists are the last language.",
        core: "A面：有些门只有用身体去撞才会开。在极端压迫下，物理性的爆发本身就是一种否定：'我不接受这个处境。'/ B面：但暴力的逻辑是自毁的——撞碎墙壁的同时拳头也碎了。你赢了出口，但已经不是走进来的那个人。关键张力：如果杀出血路的代价是变成你曾经最厌恶的暴徒——这条路还值得走吗？ | 驱力脉动(Trieb): 毁灭——撞碎一切的冲动本身成为唯一的确定性。",
        coreEn: "A-side: Some doors open only when thrown against bodily. Under extreme oppression, physical eruption itself is negation: 'I refuse this.' / B-side: But violence's logic is self-consuming — shattering the wall shatters the fist. You won the exit but are no longer who walked in. Key tension: If the cost is becoming the brute you once despised — is it worth it? | Drive Circuit (Trieb): Destruction — the impulse to shatter becomes the only certainty.",
        reference: "《疯狂的麦克斯4》不计后果杀出废土血路的弗瑞奥萨；《越狱》用智力和蛮力双重手段冲破高墙的迈克尔。",
        referenceEn: "Furiosa violently breaking through the wasteland in Mad Max: Fury Road; Michael breaking through walls with brains and brawn in Prison Break.",
        topology: "破壁性爆发：能量瞬间从压缩态释放——冲击波同时向前打开缺口向后摧毁出发点，突围者没有可以回去的地方",
        directive: {
            bright: "写他的拳头接触墙壁的那一下——骨骼传来的震动，皮肤的裂开，以及墙面在他的力量下第一次出现裂缝时的声音。写这不是愤怒而是一种物理性的否定：'我不接受这个处境'用身体说出来的样子。写他撞开缺口后冲出去时吸进的第一口外面的空气——冷的、生的、完全不同于封闭空间里的气味。不要写英雄式突围——写一种动物性的求生。",
            dark: "写代价——他撞碎了墙壁但拳头也碎了。写他冲出来之后低头看自己的手：这不是出发时的那双手了。暴力改变了他的形状，用力的方式已经刻进了肌肉记忆。写他发现自己面对下一个问题时第一反应也是撞——不是因为该撞，是因为这是他现在唯一会的动作。不要写暴力的代价——写一种更深的变形：工具塑造了使用者。",
            tension: "场景锚点：他站在墙的另一边，自由了。但他回头看那个被他砸碎的缺口，发现旁边有一扇门——一直有。他不是没看见，是他的驱力模式只认识'撞'这个动词。写他面对那扇门时的沉默：如果当时推了门，他的手还会是完整的。但他也不会是现在的他。"
        }
    },
    {
        id: "drv_charge",
        name: "决死冲锋", nameEn: "The Charge",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "面对必死的局面，放弃一切计算，发起最后的冲锋。",
        defEn: "Facing certain death, abandoning all calculation, launching the final charge.",
        core: "A面：你知道你会倒下，但你选择用倒下的方式证明你站过。恐惧消失了，因为最坏的结果已经被接受。这不是疯狂，是极端的清醒。/ B面：但冲锋的壮烈往往掩盖了更冷酷的事实——你冲锋不是因为勇敢，而是因为没有别的选择。英雄主义有时只是绝望的另一个名字。关键张力：你冲向终点是为了赢得什么，还是因为活着已经比倒下更不可忍受？ | 驱力脉动(Trieb): 冲动——'唯一能赢的方式就是不再想活下来'。",
        coreEn: "A-side: You know you'll fall, but choose to prove you stood through the manner of your falling. Fear vanishes because the worst outcome is accepted. Not madness but extreme clarity. / B-side: But the charge's splendor often masks a colder truth — you charge not from bravery but from having no other option. Heroism is sometimes just another name for despair. Key tension: Do you charge to win, or because standing still is more unbearable than falling? | Drive Circuit (Trieb): Impulse — 'the only way to win is to stop wanting to survive.'",
        reference: "《集结号》全连战友在没有退路的阵地前拼死冲锋的铁骨；《斯巴达300勇士》面对无尽敌军毅然迎战的红披风队。",
        referenceEn: "A full company charging with no retreat in Assembly; red cloaks rushing headlong into endless armies in 300.",
        topology: "终端加速：能量在确知终点之后反而加速——恐惧消失不是因为勇气而是因为最坏的结果已经被接受并内化",
        directive: {
            bright: "写恐惧消失的那个瞬间——不是勇气战胜了恐惧，而是恐惧的对象被接受之后恐惧就没有了存在的基础。写他起跑时的清醒：视野极窄，时间极慢，每一步都踩在一种前所未有的确定性上。他知道自己会倒下，但'倒下的方式'是他唯一还能选择的东西。不要写壮烈——写一种极端的、近乎冰冷的清醒。",
            dark: "写冲锋的壮烈掩盖下的冰冷事实——他冲不是因为勇敢而是因为没有别的选择了。站着不动也是死，退也是死，唯一有尊严的死法是朝前跑。写他在冲锋时听到的自己的呼吸——不是英雄的怒吼而是哺乳动物在极端恐惧下的生理反应。不要写牺牲——写一种更精确的绝望：英雄主义有时只是投降的另一个拼写方式。",
            tension: "场景锚点：他跑着跑着突然意识到自己还活着——预期的子弹没有来。但悖论是：他已经在心理上死过了，'活下来'反而成了没有准备过的结局。写他停下脚步时的茫然：他不知道怎么从'冲锋者'切回'活人'。那种极端清醒消失后，日常生活的模糊重新涌上来——这比死更让他不知所措。"
        }
    },
    {
        id: "drv_scorched_earth",
        name: "焦土", nameEn: "Scorched Earth",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "毁灭自己拥有的一切，不留给任何人。'如果我不能拥有，它就不该存在。'",
        defEn: "Destroying everything one possesses, leaving nothing for anyone. 'If I cannot have it, it shouldn't exist.'",
        core: "A面：'这是我的东西，我有权决定它的命运，哪怕是灰烬。'在无路可退时，毁灭自己的一切反而成为唯一的自由。/ B面：但焦土之后是空无。你让对手一无所获——但你自己也一无所有了。你赢了一场没有奖品的战争。关键张力：如果你只能通过毁灭来证明拥有——你到底拥有过吗？ | 驱力脉动(Trieb): 否定——'我的最后自由是毁灭我自己的一切'。",
        coreEn: "A-side: 'This is mine; I decide its fate, even if that fate is ash.' When there's no retreat, destroying everything becomes the only freedom. / B-side: But after scorched earth is emptiness. You denied the enemy everything — but you have nothing left either. Key tension: If you can only prove ownership through destruction — did you ever truly possess it? | Drive Circuit (Trieb): Negation — 'my last freedom is to destroy everything that was mine.'",
        reference: "《一九四二》战火中被烧成白地不留遗存的家园；《蝙蝠侠：黑暗骑士》小丑点燃钞票山说'一切都要烧'。",
        referenceEn: "Homes scorched leaving nothing in Back to 1942; Joker igniting mountains of cash declaring 'it all burns' in The Dark Knight.",
        topology: "内爆性清零：能量不向外攻击而是向内吞噬——毁灭自己拥有的一切来否定对手胜利的意义",
        directive: {
            bright: "写他点火的手——极其平静的，像在执行一个早就计划好的仪式。写东西燃烧时他脸上被火光照亮的表情：不是疯狂而是一种奇异的安宁。这些东西压在他身上太久了——拥有它们的重量比失去它们更不可忍受。写灰烬从指缝间流下时的触感。不要写疯狂——写一种扭曲的自由：摧毁是他对这些东西最后的、也是第一次完全由他决定的处置。",
            dark: "写火灭之后的清晨——什么都没有了。他赢了一场没有奖品的战争。写他站在灰烬中的身体：冷了，因为火已经灭了而他没有留下任何可以保暖的东西。他让对手一无所获——但他自己也一无所有。写他伸出手接住一片还在飘落的灰：这是他曾经拥有的一切的最终形态。不要写报复的快感——写快感之后的真空：毁灭完成的那一秒，他和他毁灭的东西一起消失了。",
            tension: "场景锚点：灰烬里有一样东西没有烧掉——可能是金属的、可能是石头的，总之它还在。他捡起来看了一眼。悖论不是'毁灭vs.保留'——而是：如果他只能通过毁灭来证明拥有，他到底拥有过吗？写他攥着那个没有烧掉的东西——攥得很紧，像是在确认自己的手还能握住什么。"
        }
    },
    {
        id: "drv_vengeance",
        name: "复仇", nameEn: "Vengeance",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "以等量或加倍的伤害回敬施害者。血债血偿。",
        defEn: "Returning equal or multiplied harm to the perpetrator. Blood for blood.",
        core: "A面：复仇是原始的正义——当法律无力惩罚施害者，受害者自己成为法官和刽子手。世界被打破了，必须有人用相同的力度打回来。/ B面：但复仇的最深陷阱是——完成之后什么都没变。你击倒了他，但伤疤没有因此愈合。复仇给你的不是满足，是更深的空洞。关键张力：如果复仇过程中你变成了比仇人更残忍的人——你是在讨公道，还是在享受暴力本身？ | 驱力脉动(Trieb): 偿还——一笔永远算不清的账，因为伤害不可量化。",
        coreEn: "A-side: Vengeance is primal justice — when law is powerless, the victim becomes judge and executioner. The world was broken; someone must strike it back. / B-side: But vengeance's deepest trap: nothing changes after. You struck them down, but scars remain. Revenge delivers not satisfaction but deeper void. Key tension: If you become crueler than your enemy — are you seeking justice, or enjoying violence? | Drive Circuit (Trieb): Repayment — a ledger that never balances, because harm cannot be quantified.",
        reference: "《老男孩》被囚禁十五年后踏上疯狂复仇之路的吴大修；《基督山伯爵》以精密计划逐一摧毁仇人的邓蒂斯。",
        referenceEn: "Oh Dae-su embarking on maddened revenge after 15 years in Oldboy; Dantès methodically destroying each enemy in The Count of Monte Cristo.",
        topology: "镜像返射：能量按照受到伤害的精确形状返回——但返回的力量在途中被放大，到达时已经超出了'公平'的边界",
        directive: {
            bright: "写他找到仇人的那一刻——不是影视式的对峙而是一种极度安静的确认。他花了多少年在黑暗里走路，现在终于站在了出口处。写他的心率反而变慢了：所有情绪在这一刻被目的性压缩成了一种外科手术般的精确。不要写恨——写一种比恨更冷的东西：他已经不恨了，恨在某个时刻被蒸馏成了纯粹的行动。",
            dark: "写复仇完成后的那个夜晚——他击倒了仇人，但伤疤没有因此愈合。他以为这是最后一步，走完就能回到原来的生活。但'原来的生活'在他出发那天就已经结束了。写他的手——这双手刚刚完成了等待多年的事情，但它们现在不知道该放在哪里。不要写空虚——写一种更精确的发现：仇人是他唯一的方向，方向消失了，他才是那个被消灭的人。",
            tension: "场景锚点：他在复仇过程中做了一件比仇人更残忍的事。悖论不是'正义vs.暴力'——而是：他变成了他出发时誓要消灭的那种人。写他在镜子里看到自己的脸——那个表情他见过，在仇人的脸上。他追了这么远，最终追上的是自己的倒影。"
        }
    },
    {
        id: "drv_rupture",
        name: "决裂", nameEn: "The Rupture",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "以不可逆的方式切断一段关系。说出那些无法收回的话。",
        defEn: "Irreversibly severing a bond. Speaking the unspeakable words.",
        core: "A面：你终于说出了压在胸口十年的话，虽然那些话会炸毁一切。有些关系只有被打碎，双方才能开始真正生长。沉默的维系比爆发的分裂更有毒。/ B面：但决裂是不可逆的——你可以道歉，但无法收回说出口的话。它们嵌入对方的记忆，永远。关键张力：为什么大多数人宁愿选择虚假的和平？因为沉默比真相更舒服。 | 驱力脉动(Trieb): 断裂——宁愿把一切炸成碎片，也不能再假装完好。",
        coreEn: "A-side: You finally say what's been crushing your chest for a decade, though those words will detonate everything. Some bonds must be shattered for true growth. Silent maintenance is more toxic than rupture. / B-side: But rupture is irreversible — you can apologize but can't unsay what was said. Words lodge in memory forever. Key tension: Why do most choose false peace? Because silence is more comfortable than truth. | Drive Circuit (Trieb): Severance — blasting everything to pieces rather than pretending it's intact.",
        reference: "《东邪西毒》因一句话终生不再相见的兄弟；《教父》迈克尔在门关上的瞬间与妻子的世界永久断裂。",
        referenceEn: "Brothers who never meet again after one sentence in Ashes of Time; Michael's world permanently splitting from Kay's as the door closes in The Godfather.",
        topology: "不可逆切断：能量沿着裂纹瞬间穿过整个结构——切断不是缓慢的剥离而是一次性的断裂，断面永远对不齐",
        directive: {
            bright: "写他说出那些话时的喉咙——压了十年的东西终于从胸腔里出来了，声音是粗糙的但每个字都极精确。写对面那个人的表情变化：从困惑到震惊到一种更深的认出——'原来你一直在想这些'。写空气在那些话之后变了质。不要写解放——写一种更复杂的感觉：说出口的瞬间关系碎了，但碎片比完整时更真实。",
            dark: "写那些话落地之后的不可逆——他可以道歉但无法收回，因为那些话现在嵌在对方的记忆里了，永远。写两个人之间的空气：一分钟前还可以穿越，现在像凝固了。用一个物理细节：其中一个人端起杯子喝了一口水——不是因为渴而是因为需要做一个不是说话的动作。不要写痛苦——写一种地质学意义上的断裂：板块移动了，这个缝永远合不上。",
            tension: "场景锚点：他说完了，对方沉默了很久，然后说了一句他没预料到的话——不是反驳也不是求和，而是同意了。'你说得对，我们早该结束了。'悖论不是'决裂vs.维系'——而是：他以为决裂是他的武器，但对方的平静接受让他意识到——也许对方也在等他先开口。他的'勇气'可能只是完成了对方也想完成但不愿先说的事情。"
        }
    },
    {
        id: "drv_siege",
        name: "围困", nameEn: "The Siege",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "切断一切退路和补给，用时间作为武器碾碎对方的意志。",
        defEn: "Cutting off all retreat and supply, using time to grind down the other's will.",
        core: "A面：围困是冲撞的耐心形式——不需要比对方更强，只需要更能等。用饥饿和绝望代替刀剑，是最经济也最残酷的胜利方式。/ B面：但围困者也被围困着——为了困住对方，你必须把自己也钉在城墙外面。时间吃掉了双方。关键张力：如果围城的代价是你也变成城墙的一部分——你是征服者还是另一个囚徒？ | 驱力脉动(Trieb): 封锁——'时间会吃掉他们，不用我动手'。",
        coreEn: "A-side: The siege is collision's patient form — you needn't be stronger, only more capable of waiting. Hunger and despair replace swords, the most economical and cruelest victory. / B-side: But the besieger is also besieged — to trap them, you nail yourself outside the wall too. Time devours both. Key tension: If the siege's cost is becoming part of the wall — are you conqueror, or another prisoner? | Drive Circuit (Trieb): Blockade — 'time will eat them; I needn't lift a finger.'",
        reference: "《黑鹰坠落》万众武装封锁一切巷道的血腥围困；《指环王》兽人切断圣盔谷所有后路的黑压困阵。",
        referenceEn: "Militias blocking all alleys in Black Hawk Down; Orcs cutting off all routes encircling Helm's Deep in LOTR.",
        topology: "环形封锁：能量不攻击核心而是切断所有通路——围困者用时间做武器，但时间同时吃掉双方",
        directive: {
            bright: "写他布置封锁线的耐心——不是战场的紧张而是农民等待庄稼成熟的那种节奏。每一条退路被切断时他的呼吸都是均匀的。写他观察围墙内的变化：灯光一天比一天暗，声音一天比一天少。不需要动手，只需要等。不要写战略家的冷酷——写一种更原始的确信：'时间站在我这边'。",
            dark: "写围困的第三个月——城墙内的人还没有投降，但他发现自己也被围困了。为了困住对方他必须把自己钉在城墙外面，不能走、不能转头、不能做任何其他事。写他的身体：和被围的人一样在消耗，一样在等，一样不知道终点在哪。用一个对称细节：墙内的人在数剩下的粮食，墙外的他在数剩下的耐心。不要写胜利的代价——写一种拓扑学上的讽刺：围困者和被围者是同一条绳子的两端。",
            tension: "场景锚点：墙内传来一个声音——不是投降也不是求救，而是唱歌。有人在里面唱歌。悖论不是'围vs.被围'——而是：他切断了对方所有物质供给，但无法切断对方产生意义的能力。饥饿的人在唱歌——这比任何突围都更让围困者动摇。写他听到歌声时的身体反应：不是被打动而是被冒犯。他的武器是时间，但对方用音乐让时间失效了。"
        }
    },
    {
        id: "drv_mutual_destruction",
        name: "同归于尽", nameEn: "Mutual Destruction",
        group: "A. 冲撞的驱力", groupEn: "The Collision",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "如果我要沉，你也别想浮。拉着敌人一起坠入深渊。",
        defEn: "If I sink, so do you. Dragging the enemy into the abyss together.",
        core: "A面：你也许打不赢他，但你可以确保他的胜利毫无意义。在极端力量悬殊中，'一起倒下'是弱者唯一可以触及的公平。逻辑不是胜利，是拒绝独自承受失败。/ B面：但同归于尽严格来说不是对抗——它是放弃。你放弃了活下来打赢他的可能，只选择了最低限度的胜利：让他也输。关键张力：'我的毁灭是通向真理的门票'——但如果门票只通向虚无，你买它是为了真理还是为了不再承受活着的重量？ | 驱力脉动(Trieb): 殉爆——用自己的终结确保对方也无法继续。",
        coreEn: "A-side: You may not beat them, but you can ensure their victory is meaningless. Against extreme imbalance, 'falling together' is the only fairness the weak can reach. Its logic isn't victory but refusing to bear defeat alone. / B-side: But strictly, this isn't resistance — it's surrender. You forfeit the chance to survive and win, choosing only the minimum victory: making them lose too. Key tension: 'My destruction is the ticket to truth' — but if the ticket leads nowhere, did you buy it for truth, or to stop bearing the weight of living? | Drive Circuit (Trieb): Sympathetic detonation — ending oneself to ensure the other cannot continue.",
        reference: "《异形》切断飞船自毁让异形同归于尽的雷普利；《无间道》天台上两个卧底同时举枪指向对方的终局。",
        referenceEn: "Ripley initiating self-destruct to take the alien down in Alien; two undercovers aiming at each other on the rooftop in Infernal Affairs.",
        topology: "双向湮灭：两股能量在同一点相撞并互相消灭——毁灭的对称性是弱者唯一能触及的公平",
        directive: {
            bright: "写他抓住对方的那一只手——不是攻击而是拥抱式的锁定。他的力量不需要比对方大，只需要大到不松手。写他的表情：不是仇恨而是一种奇异的平静，像是终于找到了解决方案。他第一次和对方完全平等了——因为他们的终点是同一个。不要写绝望——写一种扭曲的满足：'至少你的胜利毫无意义'。",
            dark: "写'拉着一起'的那个动作实际上是放弃——他放弃了活下来打赢的可能，选择了最低限度的胜利：让对方也输。写他的手在抓住对方的同时在发抖——不是因为恐惧而是因为身体在做最后的抵抗，本能不想死但意志已经接受了。写两个人一起坠落时的空气声。不要写悲壮——写一种更冷的算术：他在心里算了一笔账，发现这是他能支付的最高价格买到的最低胜利。",
            tension: "场景锚点：坠落的过程中他看到了对方的眼睛——那双眼睛里不是恐惧，而是和他一模一样的平静。悖论不是'同归于尽vs.独自承受'——而是：在一起坠落的那几秒里，他和仇人之间的关系比任何关系都更亲密。只有他们两个共享这个终点。写他发现：恨到极致和爱到极致在拓扑学上是同一种结构——两个人绑在一起，谁也走不开。"
        }
    }
];
