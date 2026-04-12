import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_E: LibraryItemDef[] = [
    // ============================================================
    // GROUP E. 客体小a剥离 (Objet petit a Extraction) — 20 Items
    // 丧失维度：肉体完好、地位完好、理智完好——但给你活下去理由的那个东西不在了。
    // 核心感受：一切都还在，但一切都没有意义了。
    // 光谱：爱的丧失(1-5) → 使命/意义的丧失(6-10) → 可能性的丧失(11-15) → 欲望本身的丧失(16-20)
    // ============================================================

    // ---- 爱的丧失：情感纽带的核心客体被拔除 ----

    {
        id: "stake_lost_love",
        name: "永失所爱", nameEn: "Lost Love",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "那个让你'想要活着'的人永久性地离开了你的世界——不是死亡，是选择离开。",
        defEn: "The person who made you 'want to live' permanently left your world — not death, but choosing to leave.",
        core: "A面：被离开反而证明了对方有自己的意志——你爱的不是一个附属品，而是一个完整的人。真正的爱包含被拒绝的可能。/ B面：但选择离开比死亡更残忍——死亡是命运的暴力，离开是意志的暴力。他活着，但他选择了一个没有你的世界。关键张力：对方活着但不要你了——这比死亡更难接受。 | 代价回路 (Castration): 欲望的锚点被拔除——你不知道该朝哪个方向走了。",
        coreEn: "A-side: Being left proves the other had their own will — you loved a whole person, not an accessory. True love includes the possibility of rejection. / B-side: But choosing to leave is crueler than death — death is fate's violence, leaving is will's violence. They're alive, but chose a world without you. Key tension: They're alive but don't want you — harder to accept than death. | Castration Circuit: Desire's anchor yanked out — you no longer know which direction to walk.",
        reference: "《爱乐之城》各奔前程后在爵士酒吧无声对视的恋人；《花样年华》永远没有说出口的那句告白。",
        referenceEn: "The lovers silently locking eyes in the jazz bar after parting ways in La La Land; the confession never spoken in In the Mood for Love."
    },
    {
        id: "stake_child_loss",
        name: "丧子", nameEn: "Loss of a Child",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你投射了全部未来的那个存在——被永久性地从时间线上删除。",
        defEn: "The existence onto which you projected your entire future — permanently deleted from the timeline.",
        core: "A面：没有人能从丧子中'学到教训'——这不是一个可以提取意义的事件。它就是纯粹的、没有A面的毁灭。/ B面：孩子不仅是一个人——是你对未来的全部赌注。他死了，你的未来也死了。你的身体还在向前走，但你的时间轴已经停在了那个电话响起的瞬间。关键张力：这里没有张力——只有重量。 | 代价回路 (Castration): 时间拓扑的永久凝固——未来被从根部切断。",
        coreEn: "A-side: No one 'learns a lesson' from losing a child — this isn't an event from which meaning can be extracted. It is pure destruction with no A-side. / B-side: A child isn't just a person — they're your entire bet on the future. They died; your future died. Your body keeps walking forward, but your timeline froze the instant the phone rang. Key tension: No tension here — only weight. | Castration Circuit: Temporal topology permanently frozen — the future severed at the root.",
        reference: "《海边的曼彻斯特》因大火失去三个孩子后成为行尸走肉的李；《兔之眼》失去孩子后精神荒原上独行的母亲。",
        referenceEn: "Lee becoming the walking dead after losing three children in fire in Manchester by the Sea; the mother wandering alone on a spiritual wasteland after child loss."
    },
    {
        id: "stake_unrequited",
        name: "单向之爱", nameEn: "Unrequited Love",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你的全部欲望锁定在一个永远不会爱你的人身上——且你无法切换目标。",
        defEn: "Your entire desire locked onto someone who will never love you back — and you cannot switch targets.",
        core: "A面：单恋的人拥有世上最纯粹的情感——因为不被回应，它永远保持在'欲望'的最高纯度，不会被日常琐碎稀释。/ B面：但纯度不是快乐——是一种慢性的酸。你每天醒来做的第一件事是想到一个不想你的人。关键张力：你坚持的到底是爱——还是爱的幻象？ | 代价回路 (Castration): 欲望的单行道——你投喂的那个黑洞永远不会喂你回来。",
        coreEn: "A-side: The unrequited lover holds the world's purest emotion — unanswered, it stays at desire's maximum purity, never diluted by daily trivials. / B-side: But purity isn't happiness — it's a slow acid. Every morning you wake thinking of someone who doesn't think of you. Key tension: Is what you're clinging to love — or the phantom of love? | Castration Circuit: Desire's one-way street — the black hole you feed will never feed you back.",
        reference: "《情书》对已逝之人持续单向寄信的女子；《暗恋桃花源》用一生等一个不存在之人归来的云之凡。",
        referenceEn: "The woman ceaselessly writing letters to the deceased in Love Letter; Yun Zhifan waiting a lifetime for a nonexistent person's return in Secret Love in Peach Blossom Land."
    },
    {
        id: "stake_bond_severed",
        name: "亲缘断裂", nameEn: "Bond Severed",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "血缘或精神上最亲的人与你公开决裂——不是渐行渐远，是面对面的永久否定。",
        defEn: "Your closest by blood or spirit publicly ruptures with you — not gradual drifting, but face-to-face permanent negation.",
        core: "A面：断裂有时是双方都被困在了有毒关系中——切断它对两个人都是解脱。/ B面：但当那个你以为'无条件爱你'的人说出'我不再爱你了'——你失去的不只是一个人，是'无条件的爱存在'这个信念本身。关键张力：被最亲的人否定——你的价值体系还能站得住吗？ | 代价回路 (Castration): '至少还有家人'这最后一张安全网被抽走。",
        coreEn: "A-side: Severance sometimes frees both from a toxic bond — cutting it is release for both sides. / B-side: But when the person you thought 'loved you unconditionally' says 'I no longer love you' — you've lost not just a person, but the belief that 'unconditional love exists.' Key tension: Negated by your closest — can your value system still stand? | Castration Circuit: The last safety net of 'at least there's family' is pulled away.",
        reference: "《东京物语》发现子女其实不需要自己的年迈父母；《李尔王》被亲生女儿们逐出家门的老国王。",
        referenceEn: "The elderly parents discovering their children don't actually need them in Tokyo Story; King Lear driven from home by his own daughters."
    },
    {
        id: "stake_betrayed_trust",
        name: "信任坍塌", nameEn: "Trust Destroyed",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "发现你最信任的人从一开始就在欺骗你——关系的全部地基被证明是假的。",
        defEn: "Discovering the person you trusted most was deceiving you from the start — the relationship's entire foundation proven false.",
        core: "A面：幻灭至少让你看清了真相——以后你的信任将建立在更坚固的基础上。/ B面：但你失去的不是这一个人——是'信任'这项能力本身。从此以后你看每个人都带着那副验毒的目光，再也无法全身心地相信任何人。关键张力：被骗之后你变得更聪明了——但那种'聪明'让你快乐了吗？ | 代价回路 (Castration): 信任能力的永久损伤——怀疑变成了你的默认设置。",
        coreEn: "A-side: Disillusion at least reveals truth — future trust will be built on firmer ground. / B-side: But what you lost isn't this one person — it's the capacity for 'trust' itself. From now on you view everyone with poison-testing eyes, never able to fully believe anyone again. Key tension: After betrayal you became smarter — but does that 'smartness' make you happy? | Castration Circuit: Trust capacity permanently damaged — suspicion becomes your default setting.",
        reference: "《赎罪》因妹妹一个误解的诬告而永远失去彼此的恋人；《老无所依》发现规则与善良在冷酷面前毫无意义的老警长。",
        referenceEn: "Lovers permanently lost to each other by a sister's misunderstood accusation in Atonement; the old sheriff discovering rules and kindness are meaningless before cold cruelty in No Country for Old Men."
    },

    // ---- 使命/意义的丧失：你活下去的'为什么'被拔掉了 ----

    {
        id: "stake_purpose_void",
        name: "使命蒸发", nameEn: "Purpose Void",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你为之奋斗了半生的事业——被证明毫无价值，或被你自己完成后发现不值得。",
        defEn: "The cause you spent half your life fighting for — proven worthless, or completed only to discover it wasn't worth it.",
        core: "A面：旧使命蒸发意味着你终于可以自由地选择一个新的——不再被沉没成本绑架。/ B面：但你不是'在寻找新目标'——你是站在一片你亲手建造的废墟中间，发现蓝图本身就是错的。关键张力：如果你最好的年华都给了一个错误——剩下的年华你打算怎么花？ | 代价回路 (Castration): '为什么活着'这个问题的答案被撤回。",
        coreEn: "A-side: Old purpose evaporating means you're finally free to choose a new one — no longer hostage to sunk costs. / B-side: But you're not 'searching for a new goal' — you're standing in ruins you built yourself, discovering the blueprint was wrong. Key tension: If your best years were given to a mistake — how will you spend the rest? | Castration Circuit: The answer to 'why live' is withdrawn.",
        reference: "《千与千寻》发现黄金变成泥巴的无脸男；《革命之路》发现美国梦只是一个精装空壳的中产夫妇。",
        referenceEn: "No-Face discovering gold turned to mud in Spirited Away; the middle-class couple finding the American Dream is a well-packaged empty shell in Revolutionary Road."
    },
    {
        id: "stake_legacy_erased",
        name: "遗产抹杀", nameEn: "Legacy Erased",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你留给世界的一切痕迹——作品、成就、名字——被系统地清除得一干二净。",
        defEn: "Every trace you left for the world — works, achievements, name — systematically erased without remainder.",
        core: "A面：如果你的遗产本身不重要——那也许你活着时的体验才是唯一真实的。过程大于结果。/ B面：但人类为什么创作、为什么建设？不就是为了在死后留下什么吗？当连这个'什么'都被清除时——你活过的证据在哪？关键张力：如果没人记得你做过的事——你做没做过有区别吗？ | 代价回路 (Castration): 象征界注册的强制注销——你从未来的文本中被擦除。",
        coreEn: "A-side: If legacy doesn't matter — perhaps lived experience is the only real thing. Process over outcome. / B-side: But why do humans create, build? To leave something after death. When even that 'something' is erased — where's the evidence you lived? Key tension: If no one remembers what you did — does it matter whether you did it? | Castration Circuit: Forced deregistration from the Symbolic — you're erased from future texts.",
        reference: "《寻梦环游记》被后人遗忘后在亡灵世界消散的灵魂；《1984》真理部系统性篡改和抹杀历史记录。",
        referenceEn: "Souls fading in the Land of the Dead when forgotten by the living in Coco; the Ministry of Truth systematically falsifying and erasing records in 1984."
    },
    {
        id: "stake_talent_loss",
        name: "才华丧失", nameEn: "Talent Lost",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你最引以为傲的能力——手艺、天赋、绝技——某天醒来发现它不见了。",
        defEn: "Your proudest ability — craft, gift, special skill — one morning you wake to find it gone.",
        core: "A面：失去才华迫使你面对'除了才华，你还是谁'。也许你的价值不只是你能做什么。/ B面：但当你的手记得所有的指法，大脑却无法再连接到那条通路——你会经历一种特殊的幻肢痛。你还像音乐家一样听，却不能再像音乐家一样弹。关键张力：如果你不再是'那个天才'——你还是谁？ | 代价回路 (Castration): 欲望-能力通路的物理截断。",
        coreEn: "A-side: Losing talent forces you to face 'who are you beyond the talent.' Maybe your value isn't just what you can do. / B-side: But when your hands remember all the fingerings yet the brain can no longer connect to that pathway — you experience a special phantom pain. You still hear like a musician, but can no longer play like one. Key tension: If you're no longer 'that genius' — who are you? | Castration Circuit: The desire-ability pathway physically severed.",
        reference: "《海上钢琴师》永远被困在船上、才华无法抵达世界的1900；《爆裂鼓手》为追求极致几乎失去演奏能力的鼓手。",
        referenceEn: "1900, forever trapped on the ship with his talent unable to reach the world in The Legend of 1900; the drummer nearly losing his ability to play in pursuit of perfection in Whiplash."
    },
    {
        id: "stake_faith_void",
        name: "信仰空洞", nameEn: "Faith Void",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "不是信仰被击碎（那在Group B）——而是你发现那个位置从来就是空的。你崇拜了一辈子的神坛上什么都没有。",
        defEn: "Not faith shattered (that's Group B) — but discovering the altar was always empty. You worshipped nothing for a lifetime.",
        core: "A面：发现'那里什么都没有'至少让你停止了对虚无的投喂——你终于可以用那些精力做真实的事。/ B面：但你面对的不是'一个被拆穿的谎言'——是'一个从未存在的支撑'。你后退一步，发现脚下一直就是悬崖——你只是之前不往下看。关键张力：你是从谎言中醒来了——还是从幻觉中跌出来了？ | 代价回路 (Castration): 大他者的缺席暴露——位子本身就是空的。",
        coreEn: "A-side: Discovering 'nothing was there' stops you feeding the void — you can finally spend that energy on something real. / B-side: But you're not facing 'an exposed lie' — it's 'a support that never existed.' Step back and find the cliff was always beneath you — you just didn't look down. Key tension: Did you wake from a lie — or fall out of an illusion? | Castration Circuit: The Big Other's absence exposed — the seat was always empty.",
        reference: "《沉默》向上帝尖叫但只听到沉默的耶稣会传教士；《乡愁》在理想主义燃尽后的信念荒原上独行的诗人。",
        referenceEn: "The Jesuit priest screaming at God and hearing only silence in Silence; the poet wandering the faith-wasteland after idealism burns out in Nostalgia."
    },
    {
        id: "stake_home_lost",
        name: "失去原乡", nameEn: "Homeland Lost",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你所有记忆的根系所在的那片土地——被摧毁了，或者永远不允许你回去。",
        defEn: "The land where all your memory's roots grew — destroyed, or you're forever barred from returning.",
        core: "A面：失去原乡的人可以在任何地方生根——因为你知道家不是一个地点，是一种你随身携带的能力。/ B面：但'故乡'不是GPS坐标——是你在某棵树下第一次被父亲扛上肩膀的记忆。那棵树被砍了，那片土地变了，你不是'回不去'——是'回去也找不到了'。关键张力：当故乡不在了——漂泊是一种自由还是一种永恒的无家可归？ | 代价回路 (Castration): 根系被拔除——你在地图上没有'回去'这个选项了。",
        coreEn: "A-side: Those who lost homeland can root anywhere — you learn 'home' isn't a location, it's a portable capacity. / B-side: But 'home' isn't GPS coordinates — it's the memory of being hoisted onto your father's shoulders under a specific tree. That tree was felled, that land changed; you can't 'go back' — there's nothing to go back to. Key tension: When homeland is gone — is wandering freedom, or eternal homelessness? | Castration Circuit: Root system uprooted — the option 'go back' is deleted from your map.",
        reference: "《乡愁》永远无法返回祖国的流亡诗人；《何以为家》在难民营中长大、没有出生证明也没有国籍的少年。",
        referenceEn: "The exiled poet who can never return to his homeland in Nostalgia; the boy growing up in refugee camps with no birth certificate or nationality in Capernaum."
    },

    // ---- 可能性的丧失：未来的分支被修剪至只剩一条 ----

    {
        id: "stake_road_not_taken",
        name: "未走的路", nameEn: "Road Not Taken",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你在某个分岔口做了选择——然后永久地失去了另一条路上所有可能发生的事。",
        defEn: "You chose at a fork — and permanently lost everything that could have happened on the other path.",
        core: "A面：选择就是拿起一把剪刀修剪可能性的枝条——正是因为你剪掉了其余的，这条路才获得了全部的养分。/ B面：但你在深夜会想：如果当时走了另一条……你不是后悔——你是在哀悼一个永远不会存在的版本的你。关键张力：一条被选中的路和一百条被放弃的路——哪一边更重？ | 代价回路 (Castration): 可能性空间的不可逆折叠。",
        coreEn: "A-side: Choosing is pruning possibility's branches — cutting the rest gives this path all the nourishment. / B-side: But late at night you wonder: what if I'd taken the other... You're not regretting — you're mourning a version of you that will never exist. Key tension: One chosen path versus a hundred abandoned — which side weighs more? | Castration Circuit: Possibility space irreversibly collapses.",
        reference: "《爱乐之城》结尾蒙太奇中那段未曾发生的平行人生；《滑动门》一扇地铁门分出两条截然不同命运的女子。",
        referenceEn: "The parallel life that never happened in La La Land's closing montage; a single subway door splitting a woman's fate in two in Sliding Doors."
    },
    {
        id: "stake_youth_gone",
        name: "青春消逝", nameEn: "Youth Gone",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "不是衰老（那在Group C）——而是突然意识到你人生中某些事只能在年轻时做，而那个窗口已经关了。",
        defEn: "Not aging (that's Group C) — but suddenly realizing some things could only be done in youth, and that window is shut.",
        core: "A面：意识到窗口关闭反而让你更珍惜剩余的窗口——至少你看清了什么还来得及。/ B面：但有些窗口关得无声无息——你不是在关上的那一刻知道的，你是在很久很久以后才意识到你早就错过了。关键张力：你错过的不是机会——是那个'有无限可能'的自己。 | 代价回路 (Castration): '一切皆有可能'这个青春幻觉的过期。",
        coreEn: "A-side: Realizing the window closed makes you treasure remaining windows — at least you see what's still possible. / B-side: But some windows close silently — you don't know at the moment, only much later do you realize you'd already missed it. Key tension: What you missed isn't opportunity — it's the self 'for whom everything was possible.' | Castration Circuit: The youth illusion of 'anything is possible' expires.",
        reference: "《都灵之马》在日复一日的劳作中无声耗尽的农人；《阳光灿烂的日子》回望青春时才意识到那是人生巅峰的成年人。",
        referenceEn: "The farmer silently exhausted by day-after-day labor in The Turin Horse; adults realizing only in retrospect that youth was life's peak in In the Heat of the Sun."
    },
    {
        id: "stake_creative_block",
        name: "创造力枯竭", nameEn: "Creative Death",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "灵感的泉眼干了——你还有技术但失去了那种'看到别人看不到的东西'的能力。",
        defEn: "The spring of inspiration has dried — you still have technique but lost the ability to 'see what others cannot.'",
        core: "A面：枯竭迫使你从'天才的灵感'转向'匠人的纪律'——也许深度比灵感更可靠。/ B面：但你记得它在的时候是什么感觉——那种不需要努力、画面自己涌来的状态。现在你面对空白画布，只有你和沉默在对峙。关键张力：没有灵感的艺术家——还是艺术家吗？ | 代价回路 (Castration): 创作欲望与创作能力之间的通道阻塞。",
        coreEn: "A-side: Exhaustion forces you from 'genius inspiration' to 'craftsman discipline' — perhaps depth is more reliable than spark. / B-side: But you remember how it felt when it was there — that effortless state where images flooded in. Now facing blank canvas, it's just you and silence in standoff. Key tension: An artist without inspiration — still an artist? | Castration Circuit: The channel between creative desire and creative capacity blocked.",
        reference: "《八又二分之一》拍不出电影的费里尼式导演；《闪灵》面对打字机只能反复打出同一句话的杰克。",
        referenceEn: "The Fellini-esque director who can't make a film in 8½; Jack typing the same sentence over and over before the typewriter in The Shining."
    },
    {
        id: "stake_dream_denied",
        name: "梦想被禁", nameEn: "Dream Denied",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "不是你放弃了梦想——是系统、命运或物理法则明确告诉你：不，你不可以。",
        defEn: "Not you abandoning the dream — but system, fate, or physical law explicitly telling you: no, you may not.",
        core: "A面：被禁止的梦想获得了一种额外的光环——正因为不可能，它在你心里永远保持完美。/ B面：但这种'完美'是残酷的安慰。你用'如果当初环境允许'来保护自己免于面对'也许即使允许我也做不到'。关键张力：你坚持说'是他们不让我'——你确定不是'你不敢'吗？ | 代价回路 (Castration): 欲望对象的禁止令——你只被允许远远看着它。",
        coreEn: "A-side: The forbidden dream gains an extra halo — precisely because impossible, it stays forever perfect in your heart. / B-side: But this 'perfection' is cruel comfort. You use 'if circumstances had allowed' to shield yourself from 'maybe even if allowed I couldn't.' Key tension: You insist 'they wouldn't let me' — are you sure it wasn't 'you didn't dare'? | Castration Circuit: A restraining order on the object of desire — you're only allowed to watch from afar.",
        reference: "《料理鼠王》不被允许进入厨房的老鼠厨师；《摔跤吧！爸爸》在性别歧视的铁壁面前被禁止上场的女摔跤手。",
        referenceEn: "The rat chef barred from the kitchen in Ratatouille; the female wrestler forbidden from competing by the iron wall of gender discrimination in Dangal."
    },
    {
        id: "stake_missed_moment",
        name: "错过的瞬间", nameEn: "Missed Moment",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "一个本可以改变一切的瞬间——你迟到了、犹豫了、或者根本不知道它曾经存在过。",
        defEn: "A moment that could have changed everything — you were late, hesitated, or never even knew it existed.",
        core: "A面：错过本身就是筛选——如果你当时没有抓住它，也许它本来就不是你的。/ B面：但这不是安慰——这是事后的自我催眠。你知道你当时如果再早一步、再勇敢一点、再清醒一点……那个瞬间就是你的。关键张力：你错过的是那个瞬间——还是那个版本的你？ | 代价回路 (Castration): 时间的不可回头性——没有存档读取。",
        coreEn: "A-side: Missing itself is filtering — if you didn't seize it then, perhaps it was never yours. / B-side: But this isn't comfort — it's post-hoc self-hypnosis. You know if you'd been one step earlier, one shade braver, one beat more awake... that moment was yours. Key tension: Did you miss the moment — or the version of yourself who could have seized it? | Castration Circuit: Time's irreversibility — no save file to reload.",
        reference: "《花样年华》在走廊里无数次擦肩却永远没说出口的周慕云与苏丽珍；《在世界尽头相遇》永远错过返航窗口的旅人。",
        referenceEn: "Chow and Su brushing past each other countless times in the corridor but never speaking in In the Mood for Love; the traveler who forever missed the return window in Encounters at the End of the World."
    },

    // ---- 欲望本身的丧失：客体小a从拓扑结构中被彻底拔除 ----

    {
        id: "stake_desire_death",
        name: "欲望熄灭", nameEn: "Desire Extinguished",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "不是'得不到'——是连'想要'的能力都消失了。你的欲望引擎永久熄火。",
        defEn: "Not 'can't get' — the ability to 'want' itself vanished. Your desire engine permanently stalled.",
        core: "A面：不再想要意味着不再被操控——欲望是大他者拴住你的绳索，绳子断了你就自由了。/ B面：但没有绳索的自由不是自由——是漂浮。你不再被拉向任何方向，也不再向任何方向行走。你只是停下来了。关键张力：没有欲望的人——是解脱了还是已经死了？ | 代价回路 (Castration): 拉康的终极公式——$◇a的a被拔除，$独留。",
        coreEn: "A-side: No longer wanting means no longer being controlled — desire is the Big Other's leash, cut the rope and you're free. / B-side: But ropeless freedom isn't freedom — it's drift. You're no longer pulled in any direction, nor walking toward any. You simply stopped. Key tension: A person without desire — liberated, or already dead? | Castration Circuit: Lacan's ultimate formula — the 'a' in $◇a is extracted, leaving $ alone.",
        reference: "《海边的曼彻斯特》拒绝一切情感连接的李；《局外人》对一切——包括母亲的死——都无所谓的莫尔索。",
        referenceEn: "Lee refusing all emotional connection in Manchester by the Sea; Meursault indifferent to everything — including his mother's death — in The Stranger."
    },
    {
        id: "stake_meaning_collapse",
        name: "意义坍塌", nameEn: "Meaning Collapse",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "不是某一件事失去了意义——是'意义'这个概念本身对你而言不再成立了。",
        defEn: "Not one thing losing meaning — the concept of 'meaning' itself no longer holds for you.",
        core: "A面：意义坍塌是虚无主义的起点——但尼采说，只有穿越虚无主义才能到达另一边的价值重估。/ B面：但大多数人不是'穿越'——是被卡在了虚无里面。你看不到另一边，因为你甚至不再相信'另一边'存在。关键张力：如果连'追求意义'本身都没有意义——你还剩什么？ | 代价回路 (Castration): 元叙事的总破产——不是一个故事失败了，是'讲故事'这件事失败了。",
        coreEn: "A-side: Meaning collapse is nihilism's starting point — but Nietzsche said only through nihilism can you reach the revaluation on the other side. / B-side: But most don't 'pass through' — they get stuck inside the void. You can't see the other side because you no longer believe 'another side' exists. Key tension: If even 'seeking meaning' is meaningless — what's left? | Castration Circuit: Total bankruptcy of meta-narrative — not one story failed, but 'storytelling' itself failed.",
        reference: "《等待戈多》两个永远等不到意义到来的人；《都灵之马》在宇宙热寂般的沉默中一点一点熄灭的父女。",
        referenceEn: "Two people who will never see meaning arrive in Waiting for Godot; the father and daughter slowly extinguishing in a universe-heat-death silence in The Turin Horse."
    },
    {
        id: "stake_hollow_victory",
        name: "空洞胜利", nameEn: "Hollow Victory",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "你赢了——你得到了你拼命追求的一切。站在山顶环顾四周，发现什么都不在了。",
        defEn: "You won — got everything you fought for. Standing on the summit looking around, you find nothing is there.",
        core: "A面：空洞的胜利至少证明了你有能力赢——这本身就是一种不可否认的成就。/ B面：但你爬上山顶不是为了'证明我能爬上来'——你以为上面有什么东西在等你。什么都没有。山只是山。关键张力：如果得到之后你才发现你不想要——那你这一路的攀爬算什么？ | 代价回路 (Castration): 客体小a的终极秘密——它只在追逐中存在，一旦被捕获就消失。",
        coreEn: "A-side: Hollow victory at least proves you could win — that itself is undeniable achievement. / B-side: But you climbed the summit not to 'prove you could climb' — you thought something was waiting up there. Nothing was. The mountain was just a mountain. Key tension: If you discover you don't want it after getting it — what was the entire climb for? | Castration Circuit: Object petit a's ultimate secret — it only exists in pursuit; once captured, it vanishes.",
        reference: "《公民凯恩》拥有一切却在'玫瑰花蕾'的低语中孤独死去的报业巨头；《教父3》坐在空荡庄园里的老迈迈克尔。",
        referenceEn: "The media mogul who owned everything yet died alone whispering 'Rosebud' in Citizen Kane; the aged Michael sitting in an empty estate in The Godfather Part III."
    },
    {
        id: "stake_survivor_guilt",
        name: "幸存者之罪", nameEn: "Survivor's Guilt",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "应该死的是你——但死的是别人。你活着本身变成了一种你无法偿还的债。",
        defEn: "It should have been you — but it was someone else. Being alive itself has become an unpayable debt.",
        core: "A面：活着至少意味着你可以替死者完成他们未竟的事——你的生命继承了双份的使命。/ B面：但你活着的每一天都在累积利息。你不是'带着使命活'——你是'带着欠条活'。你享受的每一个快乐都有一个声音在说：凭什么是你？关键张力：如果你的生命是用别人的死换来的——你有义务活得'值得'吗？ | 代价回路 (Castration): 存在本身变成了负债——呼吸即欠款。",
        coreEn: "A-side: Being alive at least means you can finish what the dead left unfinished — your life inherits a double mission. / B-side: But every day you live accrues interest. You're not 'living with mission' — you're 'living with debt.' Every joy has a voice asking: why you? Key tension: If your life was bought with another's death — are you obligated to live 'worthily'? | Castration Circuit: Existence itself becomes debt — breathing is owing.",
        reference: "《辛德勒的名单》结尾崩溃痛哭'我本可以再多救一个'的辛德勒；《赎罪》用一生写作来偿还一个童年谎言的布莱奥尼。",
        referenceEn: "Schindler breaking down crying 'I could have saved one more' at the end of Schindler's List; Briony spending a lifetime writing to atone for one childhood lie in Atonement."
    },
    {
        id: "stake_absolute_solitude",
        name: "绝对孤独", nameEn: "Absolute Solitude",
        group: "E. 客体小a剥离", groupEn: "Objet a Extraction",
        def: "不是一个人待着——是确认了世界上没有任何一个存在能真正理解你内在发生的事。",
        defEn: "Not being alone — but confirming that no existence in the world can ever truly understand what is happening inside you.",
        core: "A面：绝对孤独也是绝对自主——没有人理解你，也就没有人有资格评判你。你成为了你自己的唯一裁判。/ B面：但人是关系性的存在——没有他者的回应，你连'我到底是谁'都无法确认。你不是在独处——你是在存在论的真空里漂浮。关键张力：如果永远没有人能理解你——'你是谁'这个问题还有答案吗？ | 代价回路 (Castration): 关系维度的归零——你和宇宙之间再也没有中介了。",
        coreEn: "A-side: Absolute solitude is absolute autonomy — no one understands you, so no one qualifies to judge you. You become your own sole judge. / B-side: But humans are relational beings — without the Other's response, you can't even confirm 'who am I.' You're not being alone — you're floating in an ontological vacuum. Key tension: If no one will ever understand you — does the question 'who are you' still have an answer? | Castration Circuit: The relational dimension zeroed — there's no longer any mediator between you and the universe.",
        reference: "《百年孤独》被永恒孤独谶语笼罩的布恩迪亚家族；《2001太空漫游》独自面对木星独白的大卫·鲍曼。",
        referenceEn: "The Buendía family shrouded by the eternal prophecy of solitude in One Hundred Years of Solitude; David Bowman alone facing the Jupiter monologue in 2001: A Space Odyssey."
    },
];
