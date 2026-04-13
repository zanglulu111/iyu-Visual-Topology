import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_A: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 无名的齿轮 (The Absorbed) - 16 Items
    // 缺失方向：向上 → 系统/权力。主体被功能、角色或体制所覆盖。
    // ============================================================
    {
        id: "subj_cog",
        name: "齿轮", nameEn: "The Gear",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "日复一日嵌入庞大机器中不停转动——直到分不清，是你在推动机器，还是机器在消磨你。",
        defEn: "Embedded in an enormous machine, turning day after day — until you can no longer tell whether you drive the machine or it grinds you down.",
        flaw: "习得性无助", flawEn: "Learned Helplessness",
        core: "A面：重复可以是安稳的节拍——有人在这节拍里找到归属，找到'我被需要'的安慰。/ B面：但当停下来比继续转动更可怕时，你已经不是齿轮的操纵者，你就是齿轮本身。关键张力：如果机器突然停了——迎来的是自由，还是坠入虚空？ | 缺失 ($): 主体性——你是一个人，还是一个功能？",
        coreEn: "A-side: Repetition can be a steady rhythm — some find belonging in it, a comfort of 'I am needed.' / B-side: But when stopping feels more terrifying than continuing, you're no longer operating the gear; you ARE the gear. Key tension: If the machine suddenly halts — freedom, or freefall into the void? | Lacks ($): Subjectivity — are you a person, or a function?",
        reference: "《摩登时代》查理（被流水线吞噬的工人）；《审判》K（在庞大官僚机器中被消耗的个体）；《黑客帝国》母体外的培养皿沉睡者。",
        referenceEn: "Charlie in Modern Times (a worker swallowed by the assembly line); K in The Trial (an individual consumed within a massive bureaucracy); sleepers in the pods outside The Matrix."
    },
    {
        id: "subj_cleaner",
        name: "清道夫", nameEn: "The Scavenger",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "替体制清扫见不得光的污秽与残骸——沉默是他活下去的唯一条件。",
        defEn: "The one who sweeps away the filth and wreckage the system hides — silence is the only condition under which he is allowed to live.",
        flaw: "道德污染", flawEn: "Moral Contamination",
        core: "A面：知道黑暗的全貌而选择缄默，是一种深沉的力量——你替所有人背负了他们不敢面对的东西。/ B面：但沉默太久会变质。你替主人吞下的秽物在你胃里发酵，分不清自己是在守护什么，还是已经成了黑暗的一部分。关键张力：当沉默本身成为共谋，开口是救赎还是同归于尽？ | 缺失 ($): 洁净——你替体制打扫了一切，谁来打扫你？",
        coreEn: "A-side: Knowing the full scope of darkness yet choosing silence is a profound strength — you bear for everyone what they dare not face. / B-side: But prolonged silence curdles. The filth you swallowed for your master ferments inside you; you can no longer tell whether you're guarding something or have become part of the darkness. Key tension: When silence becomes complicity, is speaking up salvation or mutual destruction? | Lacks ($): Innocence — you cleaned everything for the system; who cleans you?",
        reference: "《教父》卢卡·布拉西（替家族包揽最肮脏暴力的清道夫）；《甄嬛传》苏培盛（负责处理后宫腌臜的执行者）；《银翼杀手》中专门清理复制人的同类退役警察。",
        referenceEn: "Luca Brasi in The Godfather (a scavenger handling the family's dirtiest violence); Su Peisheng in Empresses in the Palace (executing the harem's sordid affairs); the retired cop hunting his own kind in Blade Runner."
    },
    {
        id: "subj_battery",
        name: "薪柴", nameEn: "The Kindling",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "被放在灶膛里持续燃烧的人——他的体力、心血与青春，是别人取暖过冬的唯一柴火。",
        defEn: "Placed inside the furnace to burn without cease — their stamina, devotion, and youth are the only firewood by which others survive the winter.",
        flaw: "极度枯竭", flawEn: "Burnout",
        core: "A面：持续给予可以是崇高的使命感——明知自己会烧尽，仍选择照亮每一个人。在消耗中找到意义，是人类最古老的美德。/ B面：但燃烧太久，你忘了自己曾是一棵有根有叶的树。当'被需要'变成唯一的存在感来源，你分不清是在奉献还是在自焚。关键张力：当薪柴意识到燃料是自己的骨和血——继续燃烧是牺牲，还是自我毁灭？ | 缺失 ($): 生命力——你把所有的热都给了别人，自己的芯里还剩火吗？",
        coreEn: "A-side: Ceaseless giving can be a sublime mission — knowing you'll burn out yet choosing to light the way. Finding meaning in consumption is among humanity's oldest virtues. / B-side: But burn too long and you forget you were once a tree with roots and leaves. When 'being needed' becomes the sole source of existence, you can't tell devotion from self-immolation. Key tension: When the kindling realizes the fuel is its own bone and blood — sacrifice, or self-destruction? | Lacks ($): Vitality — you gave all your heat to others; is there still fire in your own core?",
        reference: "《包身工》中的纺织女工（被榨干生命力的血肉电池）；《活着》中的福贵；《疯狂的麦克斯：狂暴之路》中被吊起抽血的'血袋'。",
        referenceEn: "Textile workers in Xia Yan's Indentured Servants (flesh batteries drained of vitality); Fugui in To Live; the 'blood bags' hung up for extraction in Mad Max: Fury Road."
    },
    {
        id: "subj_prosthesis",
        name: "执行者", nameEn: "The Enforcer",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "充当更强大意志之双手的人——他挥出的每一拳，服从的都不是自己的心。",
        defEn: "One who serves as the hands of a stronger will — every blow struck obeys a heart that is not their own.",
        flaw: "缺乏自主", flawEn: "Lack of Agency",
        core: "A面：在代行命令中获得坚不可摧的确定感——不需要思考、不需要犹豫，像一把被握稳的刀。混乱世界里，这种确定感令人沉醉。/ B面：但那份确定感从来不属于你。你是别人意志的延伸。当命令与良知相撞——刀刃劈不开的不是敌人，是你自己。关键张力：当命令说'杀'而良知说'不'——执行器有资格犹豫吗？ | 缺失 ($): 意志——你握出的拳头，什么时候才替自己握过一次？",
        coreEn: "A-side: Executing commands grants unshakeable certainty — no need to think or hesitate, like a blade held firm. In a chaotic world, that certainty is intoxicating. / B-side: But that certainty was never yours. You're an extension of another's will. When orders collide with conscience — the blade can't cleave through; the obstacle is yourself. Key tension: When orders say 'kill' and conscience says 'no' — does the instrument have the right to hesitate? | Lacks ($): Will — that fist you clench, when has it ever clenched for yourself?",
        reference: "《水浒传》陆谦（放弃个人意志，沦为权贵爪牙）；明代东厂武役（只作为皇权的物理痛觉制造器）；《指环王》中被索伦意志完全取代的戒灵。",
        referenceEn: "Lu Qian in Water Margin (surrendering personal will to become a henchman); Ming Dynasty's Eastern Depot agents (functioning purely as the emperor's tool of pain); the Nazgûl in The Lord of the Rings, wholly subsumed by Sauron's will."
    },
    {
        id: "subj_ornament",
        name: "标本 / 陈列品", nameEn: "The Exhibit",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "存在的全部价值建立在被观赏之上——灯灭观众散场，展品便没有了呼吸的理由。",
        defEn: "All worth of existence is built upon being gazed at — once the lights dim and the audience departs, the exhibit has no reason to breathe.",
        flaw: "自我客体化", flawEn: "Self-Objectification",
        core: "A面：被凝视可以是光芒万丈的舞台——万众目光汇聚之处，你成为美与欲望的化身。被看见本身就是确认：我存在，我值得。/ B面：但玻璃罩里的凝视不是爱——是占有。你被精心摆放，笑容被设计，姿态被规定。观众散去，橱窗里只剩你面对空洞的倒影。关键张力：你渴望的是被看见，还是被看见时那短暂的'我有价值'的幻觉？ | 缺失 ($): 内核——剥掉所有目光之后，你还剩下什么？",
        coreEn: "A-side: Being gazed upon can be a radiant stage — where eyes converge, you become the incarnation of beauty and desire. Being seen is confirmation: I exist, I am worthy. / B-side: But the gaze through the glass case is not love — it is possession. You are meticulously arranged; your smile designed, your posture prescribed. When the audience departs, only you remain, facing your hollow reflection. Key tension: Do you crave being seen, or the fleeting illusion of 'I am valuable' that being seen provides? | Lacks ($): Depth — strip away every gaze, and what remains of you?",
        reference: "《了不起的盖茨比》黛西（被当作阶级跨越的完美战利品）；中国古代待价而沽的'扬州瘦马'；《银翼杀手2049》中的虚拟全息女友乔伊（被定制的凝视客体）。",
        referenceEn: "Daisy in The Great Gatsby (the perfect trophy of class mobility); ancient Chinese 'Yangzhou skinny horses' sold to the highest bidder; Joi, the customizable holographic girlfriend in Blade Runner 2049."
    },
    {
        id: "subj_number",
        name: "烙印", nameEn: "The Brand",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "名字被档案编号或集体标签替代——灵魂最简的句法被格式化为一串数字。",
        defEn: "Name replaced by file numbers or collective labels — the soul's simplest syntax formatted into a string of digits.",
        flaw: "去人格化", flawEn: "Depersonalization",
        core: "A面：编号带来一种诡异的平等——在数字面前，没有贵贱之分，每个人都被公正地削去棱角。/ B面：但编号不是名字。名字是有人深夜喊你时心里发颤的那一声，编号只是仓库里的货架标签。关键张力：当有人念出你真正的名字，你敢应答吗？还是你已经忘了它怎么发音？ | 缺失 ($): 姓名——灵魂的第一能指被没收了。",
        coreEn: "A-side: Numbers bring a strange equality — before digits, no rank distinction; everyone is fairly shorn of edges. / B-side: But a number is not a name. A name is the trembling in someone's voice calling you at midnight; a number is a shelf label in a warehouse. Key tension: When someone speaks your real name, do you dare answer — or have you forgotten how it sounds? | Lacks ($): Name — the soul's first signifier has been confiscated.",
        reference: "《悲惨世界》冉·阿让（只剩下代号24601的苦役犯）；奥斯维辛集中营被烙上数字的犹太人；反乌托邦小说《我们》中只有编号没有名字的统一国公民。",
        referenceEn: "Jean Valjean in Les Misérables (a convict reduced to 24601); Jews branded with numbers in Auschwitz; the numbered citizens in the dystopian novel We."
    },
    {
        id: "subj_spare_part",
        name: "替补", nameEn: "The Double",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "为了随时填补某人的空缺而存在的影子——候补者、备胎、替身。",
        defEn: "A shadow existing solely to fill someone's vacancy at any moment — the understudy, the spare, the stand-in.",
        flaw: "多余感", flawEn: "Redundancy",
        core: "A面：等待被需要可以是一种忠诚的修行——枯坐多年只为那一刻上场，这种耐心本身是一种尊严。/ B面：但你存在的全部意义建立在另一个人的缺席之上。正主越健康，你就越透明。关键张力：正主倒下的那天——你迎来的是解放，还是发现自己从来没有学过怎么当主角？ | 缺失 ($): 独特性——你的存在，是你自己的还是别人的备份？",
        coreEn: "A-side: Waiting to be needed can be a loyal discipline — sitting idle for years just for that one moment on stage; that patience itself has dignity. / B-side: But your entire meaning rests on another's absence. The healthier the original, the more transparent you become. Key tension: The day the original falls — liberation, or discovering you never learned to be a protagonist? | Lacks ($): Uniqueness — is your existence yours, or someone else's backup?",
        reference: "张艺谋《影》中的境州（从小豢养，只为替主公挡刀）；《红楼梦》中随时准备顶替主子赴死的丫鬟；石黑一雄《别让我走》中只为给本体提供器官而活的克隆人。",
        referenceEn: "Jingzhou in Zhang Yimou's Shadow (raised since childhood solely to take a blade for his lord); maids in Dream of the Red Chamber ready to die for their mistresses; the clones living only for organ donation in Never Let Me Go."
    },
    {
        id: "subj_algorithm",
        name: "发条人 / 苦役", nameEn: "The Clockwork",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "行为节律被严苛的外部规则完全接管——身体还是自己的，时间已经不是了。",
        defEn: "Behavioral rhythms entirely commandeered by stringent external rules — the body is still yours, but time no longer is.",
        flaw: "节律焦虑", flawEn: "Time Anxiety",
        core: "A面：精密的节拍可以是一种效率的美学——在混沌中，被安排好的秩序反而带来安全感。一切都可以预测，一切都不需要选择。/ B面：但当每一秒都被标价，喘息本身就成了亏损。你不再拥有'空闲'，你只拥有'还没被使用的工时'。关键张力：如果时钟突然失灵——发条人是终于喘息，还是彻底瓦解？ | 缺失 ($): 停歇——连睡眠都变成了'充电'。",
        coreEn: "A-side: Precise rhythm can be an aesthetic of efficiency — in chaos, imposed order brings security. Everything predictable, nothing requiring choice. / B-side: But when every second is priced, breathing itself becomes a loss. You no longer have 'free time,' only 'unused work hours.' Key tension: If the clock breaks — does the clockwork finally breathe, or completely collapse? | Lacks ($): Rest — even sleep has become 'recharging.'",
        reference: "《骆驼祥子》祥子（在城市暴雨中至死奔跑的肉身苦力）；维多利亚时代的计件童工；赛博朋克中被隐形算法和倒计时疯狂剥削的网约车与外卖员。",
        referenceEn: "Xiangzi in Rickshaw Boy (running to his death in the city rain); Victorian-era piece-rate child labor; gig workers in cyberpunk worlds ruthlessly exploited by invisible algorithms and countdowns."
    },
    {
        id: "subj_filter",
        name: "食罪者", nameEn: "The Sin-Eater",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "替他人承接负面情绪、秘密或罪责的容器——所有人的毒都倒进同一个杯子。",
        defEn: "A vessel absorbing others' negative emotions, secrets, or guilt — everyone's poison poured into one cup.",
        flaw: "深渊污染", flawEn: "Trauma Exposure",
        core: "A面：替人吞下苦涩可以是一种温柔的牺牲——你用自己的胃替别人消化了他们无法面对的东西。这种承受力是一种隐秘的体面。/ B面：但容器没有出水口。别人的毒被你吞下后并不会消失——它在你体内沉积、变质、发酵。关键张力：当容器满溢——是倾倒，还是爆裂？ | 缺失 ($): 精神屏障——你替别人扛了一切，谁替你扛？",
        coreEn: "A-side: Swallowing bitterness for others can be a tender sacrifice — you digest with your own stomach what they cannot face. That capacity is a hidden decency. / B-side: But the vessel has no drain. Others' poison doesn't vanish once swallowed — it sediments, curdles, ferments inside you. Key tension: When the vessel overflows — pour out, or shatter? | Lacks ($): Sanity — you carried everything for others; who carries you?",
        reference: "中世纪民间'食罪者'（替死去的贵族吃下象征罪孽的面包）；封建宫廷里的试毒太监；每天被迫观看并过滤全网血腥色情视频的现代内容审核员。",
        referenceEn: "Medieval 'sin-eaters' (consuming bread representing a dead noble's sins); poison-tasting eunuchs in feudal courts; modern content moderators forced to watch and filter gory/explicit videos daily."
    },
    {
        id: "subj_moderator",
        name: "守门人", nameEn: "The Gatekeeper",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "处于卑微的位置，却攥着一点发放通行或拒绝的微小权力。",
        defEn: "Positioned at the bottom, yet clutching the tiny power to grant passage or deny it.",
        flaw: "权力的幻觉", flawEn: "Petty Power",
        core: "A面：微权可以是卑微者最后的尊严火种——在整个系统都践踏你的时候，这一丁点权力证明你还不是最底层。/ B面：但微权是毒药。你开始用它来找回被羞辱的感觉，把同样卑微的人踩在脚下。关键张力：当同样卑微的人跪在面前——你会想起自己曾经也跪过吗？还是你已经忘了跪着的滋味？ | 缺失 ($): 尊严底座——你守的那道门，是别人的门。",
        coreEn: "A-side: Petty power can be the last ember of dignity for the downtrodden — when the system tramples you, this tiny authority proves you're not rock-bottom. / B-side: But petty power is poison. You use it to reclaim humiliated feelings, stepping on those equally wretched. Key tension: When someone just as lowly kneels before you — do you remember that you once knelt too? Or have you forgotten what kneeling tastes like? | Lacks ($): Dignity — the gate you guard is someone else's door.",
        reference: "卡夫卡《法的门前》里的守门人（手握进入窄门的一丝微小权力）；古代衙门向落难者索要打点费的牢头；反乌托邦游戏《请出示证件》中决定他人生死的边境审查员。",
        referenceEn: "The gatekeeper in Kafka's Before the Law; ancient jailers extracting bribes from the desperate; the border inspector dealing life or death in Papers, Please."
    },
    {
        id: "subj_dummy",
        name: "挡箭牌 / 缓冲者", nameEn: "The Shield",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "被安放在冲突交汇处替上方的人承受冲击——你的身体就是别人的盾牌。",
        defEn: "Placed at the nexus of conflict to absorb impacts for those above — your body is someone else's shield.",
        flaw: "创伤麻木", flawEn: "Numbness",
        core: "A面：反复承受撞击可以磨出铁骨——在所有人都躲避的地方站着，这种站立本身就是一种沉默的勇气。/ B面：但撞击太多次之后，你失去的不是力气，是痛觉。不疼了不是变强了——是那个会喊疼的'你'已经死了。关键张力：当缓冲者不再感到疼痛——他是变强了，还是已经死了？ | 缺失 ($): 痛觉的权利——连喊疼的资格都被没收了。",
        coreEn: "A-side: Enduring blows repeatedly can forge iron bones — standing where everyone else hides is itself a silent courage. / B-side: But after too many impacts, what you lose is not strength but the ability to feel pain. Not hurting doesn't mean stronger — the 'you' who could cry out is already dead. Key tension: When the buffer no longer feels pain — grown stronger, or already died? | Lacks ($): The right to hurt — even the right to cry out has been confiscated.",
        reference: "欧洲中世纪宫廷里的'挨鞭童'（专门替犯错的王子受罚的平民玩伴）；职场体制中专替高层平息群氓怒火的'黑锅侠'；《疯狂的麦克斯》里被绑在车头当人肉护盾的战争男孩。",
        referenceEn: "'Whipping boys' of medieval courts (commoners taking punishment for princes); corporate fall-guys hired to absorb mob anger for executives; War Boys strapped to bumpers as meat shields in Mad Max."
    },
    {
        id: "subj_npc",
        name: "游魂 / 背景底色", nameEn: "The Extra",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "深感自己只配充当他人故事的虚化背景——连被杀死都不配拥有一个特写镜头。",
        defEn: "Deeply feeling destined to be nothing more than blurred background in others' stories — not even worthy of a close-up when killed.",
        flaw: "极度平庸", flawEn: "Fear of Mediocrity",
        core: "A面：做背景有一种无人打扰的安全——在命运的聚光灯之外，你不必承受被选中的代价。最安全的位置恰恰是无人注目之处。/ B面：但安全是以透明为代价的。你走过人群不留下任何涟漪，死去时没有人需要停下来哀悼。关键张力：被看见——到底是祝福还是诅咒？ | 缺失 ($): 天命与高光——你活着，但从未出现在任何人的故事里。",
        coreEn: "A-side: Being background has a safety of not being disturbed — outside destiny's spotlight, you don't bear the cost of being chosen. The safest position is where no one looks. / B-side: But safety costs transparency. You pass through crowds without a ripple; when you die, no one needs to pause. Key tension: Is being seen a blessing or a curse? | Lacks ($): Protagonism — you're alive, but you've never appeared in anyone's story.",
        reference: "大时代史诗里随便死于兵荒马乱的流民；《红楼梦》卷首一闪而过的乡野村妇；游戏电影《失控玩家》中日复一日执行同一句对白、注定无缘主线任务的NPC。",
        referenceEn: "Refugees perishing randomly in epic eras; the fleeting countrywoman opening Dream of the Red Chamber; the NPC doomed to recite the same line forever without a main quest in Free Guy."
    },
    {
        id: "subj_uniform",
        name: "盔甲 / 制服", nameEn: "The Uniform",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "身份被职业外壳或社会角色完全覆盖——制服穿太久，下面的人已经萎缩了。",
        defEn: "Identity entirely covered by professional shell or social role — the uniform worn too long; the person beneath has atrophied.",
        flaw: "面具吞噬", flawEn: "Role Fixation",
        core: "A面：制服可以是坚硬的保护——它替你挡开了世界的审视，给你一个不需要解释的身份。穿上它，你知道自己是谁。/ B面：但穿太久，制服就从保护变成了皮肤。你摘不下来了——不是因为它太紧，是因为下面什么都没有了。关键张力：脱下制服后的那张脸——自己还认得吗？ | 缺失 ($): 本源血肉——你是一个人，还是一个头衔？",
        coreEn: "A-side: The uniform can be hard protection — it shields you from the world's scrutiny, giving you an identity that needs no explanation. In it, you know who you are. / B-side: But worn too long, the uniform turns from armor into skin. You can't remove it — not because it's too tight, but because there's nothing underneath. Key tension: The face beneath the uniform — do you still recognize it? | Lacks ($): Original flesh — are you a person, or a title?",
        reference: "《西线无战事》中的普通士兵（被强行缝入军装，失去作为人的喘息）；被严苛封建'宗法'彻底吞噬了人性的卫道士；《星球大战》中连面容和情感都被白色盔甲标准化的暴风兵。",
        referenceEn: "The regular soldiers in All Quiet on the Western Front (stitched into uniforms without a breath for humanity); moral guardians totally devoured by strict feudal law; Stormtroopers in Star Wars whose very faces and emotions are standardized by white armor."
    },
    {
        id: "subj_hand",
        name: "百巧之手", nameEn: "The Hands",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "身体的某个部位或某项天赋被过度神化——人被切割成了器官，器官比人更值钱。",
        defEn: "A single body part or talent excessively deified — the person carved into an organ, the organ worth more than the person.",
        flaw: "器官割裂", flawEn: "Synecdoche",
        core: "A面：被世人追捧的那双手可以是骄傲的王冠——你拥有别人没有的天赋，这种独特性让你在人群中发光。/ B面：但当世界只爱你的手而不爱你，你就被切割成了零件。手受伤的那天，你发现没人来看你——他们只来看手。关键张力：如果天赋消失，剩下的那个人还值得被爱吗？ | 缺失 ($): 存在的完整性——你是一个人，还是一双手？",
        coreEn: "A-side: The hands the world celebrates can be a proud crown — you have a gift others lack; that uniqueness makes you glow in the crowd. / B-side: But when the world loves only your hands and not you, you're carved into spare parts. The day the hand is injured, no one comes to see you — they come to see the hand. Key tension: If the talent vanishes, is the person who remains still worth loving? | Lacks ($): Wholeness — are you a person, or a pair of hands?",
        reference: "《霸王别姬》程蝶衣（嗓子身段被剥削到极致倒逼自己割裂原生性别）；古代替皇陵雕刻机关事毕后被剁去双手的巧匠；废土世界中被截肢并换上夺命机械臂的血肉改造工具。",
        referenceEn: "Cheng Dieyi in Farewell My Concubine (his voice and posture exploited to the point of fracturing his native gender); ancient tomb artisans getting their hands chopped off to secure secrets; post-apocalyptic mercenaries amputated to wield killer metallic arms."
    },
    {
        id: "subj_ear",
        name: "倾听的树洞", nameEn: "The Ear",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "不可抗拒地成为他人倾诉秘密与痛苦的容器——所有人都往你这里倒，但你没有出口。",
        defEn: "Irresistibly becoming the vessel into which others pour secrets and suffering — everyone pours in, but you have no outlet.",
        flaw: "精神淤积", flawEn: "Burden of Secrets",
        core: "A面：被信任是一种特权——人们选择在你面前卸下面具，说明你的存在让人感到安全。这种力量是沉默的，也是珍贵的。/ B面：但当他人的重量堆满颅骨，你找不到向外倾倒的出口。你消化了全世界的苦涩，自己却连一个树洞都没有。关键张力：替全世界消化了苦涩——谁来替你消化？ | 缺失 ($): 豁免与排解——你是所有人的垃圾桶，但你不是垃圾场。",
        coreEn: "A-side: Being trusted is a privilege — people unmask before you because your presence makes them feel safe. That power is quiet, and precious. / B-side: But when others' weight fills your skull, there's no outlet to pour it out. You digested the world's bitterness, yet you don't even have a hollow tree to whisper into. Key tension: Having digested everyone's bitterness — who digests yours? | Lacks ($): Release — you are everyone's bin, but you are not a landfill.",
        reference: "《玫瑰的名字》中听取了太多阴暗诡计而濒临疯癫的修士；封建深宫中被强行毒哑专门侍奉起居的聋哑奴仆；反乌托邦社会里被无数狂躁公民当成赛博发泄孔的情绪处理中心接线员。",
        referenceEn: "The monk driven mad by dark secrets in The Name of the Rose; deaf-mute servants poisoned in feudal palaces purely to serve without telling tales; the dystopia's mood operators treated as cyber-vents by manic citizens."
    },
    {
        id: "subj_foot",
        name: "无休之足", nameEn: "The Wandering Foot",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "命运注定无法长久停留——永远在路上的驿卒、逃亡者或漫游者，连喘息都是奢侈。",
        defEn: "Fated never to stay — the eternal courier, fugitive, or wanderer always on the road, where even a pause to breathe is a luxury.",
        flaw: "剥夺停歇", flawEn: "Restlessness",
        core: "A面：永不停歇可以是自由的极致——你不属于任何一个地方，因此你可以属于所有地方。路本身就是你的国土，脚步就是你的语言。/ B面：但当所有故乡都关上了门，自由就从选择变成了诅咒。你不是在走，你是在逃。每一步都不是朝向什么，而是逃离什么。关键张力：当所有故乡都关上了门——脚步本身能成为家吗？ | 缺失 ($): 归宿定点——你拥有整条路，却没有一个可以停下来的点。",
        coreEn: "A-side: Never stopping can be the pinnacle of freedom — you belong nowhere, so you belong everywhere. The road itself is your country; your footsteps are your language. / B-side: But when every homeland shuts its door, freedom becomes a curse. You're not walking; you're fleeing. Every step aims not toward something, but away from something. Key tension: When every homeland shuts its door — can the journey itself become home? | Lacks ($): Destination — you own the entire road, but not a single point to stop.",
        reference: "《悲惨世界》中只要停顿就会被残酷律法捕捉的冉·阿让；大漠里跑死在黄沙驿道上的八百里加急传令兵；《雪国列车》中必须要不断绕行地球否则就会冻死的末日遗民。",
        referenceEn: "Jean Valjean in Les Misérables, hunted by cruel law the moment he pauses; emergency couriers dropping dead on desert post roads; the survivors of Snowpiercer who must orbit the globe endlessly or freeze."
    },
    {
        id: "subj_undercover",
        name: "卧底", nameEn: "The Undercover",
        group: "A. 无名的齿轮", groupEn: "The Absorbed",
        def: "潜入敌人内部，用假身份活了太久——你已经分不清哪边是你真正的阵营了。你的面具长在了脸上。",
        defEn: "Having infiltrated the enemy for too long under a false identity — you can no longer tell which side is truly yours. Your mask has grown into your face.",
        flaw: "身份模糊", flawEn: "Blurred Identity",
        core: "A面：卧底可以是最高形式的忠诚——你为了组织放弃了名字和身份，你的牺牲发生在暗处，没有人知道你做了什么。/ B面：但假身份用得太久会反噬。你在敌人那边有了朋友、信任、甚至归属感。收网的那天你的手在发抖。关键张力：当收网的命令下达——你毁掉的是敌人的世界，还是你自己建的？ | 缺失 ($): 真实身份——你在两边都是假的，但你在两边都是真的。",
        coreEn: "A-side: Being undercover can be the highest loyalty — you sacrificed your name and identity; your sacrifice happens in the dark, unknown to anyone. / B-side: But a false identity used too long bites back. You made friends, gained trust, even felt belonging on the other side. The day the net closes, your hand trembles. Key tension: When the order comes — are you destroying the enemy's world, or your own? | Lacks ($): True identity — you are fake on both sides, yet real on both.",
        reference: "《无间道》中陈永仁与刘建明互为镜像的双重卧底困局；《谍影重重》中连自己真名都遗忘的杰森·伯恩。",
        referenceEn: "The mirrored double-undercover dilemma of Chan Wing-yan and Lau Kin-ming in Infernal Affairs; Jason Bourne, who has forgotten even his real name in The Bourne Identity."
    }
];

