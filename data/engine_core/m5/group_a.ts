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
        referenceEn: "The trembling confession of love before parting in Call Me by Your Name; students standing on desks defending belief in 'O Captain, My Captain' in Dead Poets Society."
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
        referenceEn: "Churchill insisting on resistance when all urged appeasement in Darkest Hour; Strickland abandoning all worldly success to paint in The Moon and Sixpence."
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
        referenceEn: "The father betting everything on his daughters becoming champions in Dangal; Zuckerberg burning all relationships to build the site in The Social Network."
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
        referenceEn: "One juror persuading all others to change the verdict in 12 Angry Men; the peasant woman stubbornly petitioning just for 'an explanation' in The Story of Qiu Ju."
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
        referenceEn: "The young drummer bleeding his hands for jazz perfection in Whiplash; the woman grinding from rock-bottom to the boxing ring in 100 Yen Love."
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
        referenceEn: "Three Black women forcing their way into the all-white halls of NASA in Hidden Figures; the Kim family squeezing into a wealthy household in Parasite."
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
        referenceEn: "Solomon barely surviving a day on tiptoe under the noose in 12 Years a Slave; Fugui continuing to live after losing every family member in To Live."
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
        referenceEn: "Turing defying military skepticism to crack codes with machines in The Imitation Game; Doctor Zhivago holding to poetic truth amid ideological storms."
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
        referenceEn: "Cheng Dieyi persisting in performance under political pressure in Farewell My Concubine; underground memorizers preserving literature with their bodies in Fahrenheit 451."
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
        referenceEn: "The businessman forging lists to save Jews at mortal risk in Schindler's List; the medic refusing to carry a gun yet rescuing 75 under fire in Hacksaw Ridge."
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
        referenceEn: "The missionary torn between martyrdom and apostasy in Silence; Truman dismantling and walking out of his fabricated life in The Truman Show."
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
        referenceEn: "Wallace crying 'Freedom' on the scaffold awakening a nation in Berta heart; Katniss raising three fingers becoming a symbol of resistance in The Hunger Games."
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
        referenceEn: "Hawking reshaping cosmology with fading motor functions in The Theory of Everything; the girl becoming India's first female wrestling champion in Dangal."
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
        referenceEn: "Furiosa violently breaking through the wasteland in Mad Max: Fury Road; Michael breaking through walls with brains and brawn in Prison Break."
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
        referenceEn: "A full company charging with no retreat in Assembly; red cloaks rushing headlong into endless armies in 300."
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
        referenceEn: "Homes scorched leaving nothing in Back to 1942; Joker igniting mountains of cash declaring 'it all burns' in The Dark Knight."
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
        referenceEn: "Oh Dae-su embarking on maddened revenge after 15 years in Oldboy; Dantès methodically destroying each enemy in The Count of Monte Cristo."
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
        referenceEn: "Brothers who never meet again after one sentence in Ashes of Time; Michael's world permanently splitting from Kay's as the door closes in The Godfather."
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
        referenceEn: "Militias blocking all alleys in Black Hawk Down; Orcs cutting off all routes encircling Helm's Deep in LOTR."
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
        referenceEn: "Ripley initiating self-destruct to take the alien down in Alien; two undercovers aiming at each other on the rooftop in Infernal Affairs."
    }
];
