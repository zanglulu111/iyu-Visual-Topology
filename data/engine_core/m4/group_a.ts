import { LibraryItemDef } from '../../../types';

export const OPPRESSION_GROUP_A: LibraryItemDef[] = [
    {
        id: "m4_auth_sovereign",
        name: "统治者", nameEn: "The Sovereign",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "拥有最终解释权和合法暴力垄断权的存在。他的话就是法律的全部外延。",
        defEn: "An entity holding ultimate interpretive power and monopoly on legitimate violence.",
        core: "A面：绝对秩序的供给者——混乱中有人替你做一切决定,这是深刻的安慰。/ B面：安全的代价是你不再拥有选择权。你活着,因为他允许。关键张力：如果暴君真的比你更公正——你还有理由反抗吗？ | 秩序的裂隙(∄A): 统治者死了,世界第二天照常运转——让你跪下的从来不是他,是你假设了'必须有人坐在那里'。",
        coreEn: "A-side: Supplier of absolute order — someone making all decisions in chaos is profound comfort. / B-side: Safety's price is losing choice. You live because permitted. Key tension: If the tyrant truly is more just — do you still have reason to rebel? | Rift(∄A): The ruler dies, the world runs fine — what made you kneel was never them, but your assumption 'someone must sit there.'",
        reference: "《沙丘》拥有星际生杀大权的皇帝；《教父》以爱与秩序之名行使绝对权力的柯里昂家族长。",
        referenceEn: "The Emperor in Dune; the Corleone patriarch in The Godfather.",

        topology: "主体位置的折叠：统治者不是在你之上——而是你在自己内部制造了一个'之上'的位置，然后把决定权存放在那里。他消失后那个位置还在，等着被下一个人占据",

        directive: {
            bright: "写主体服从统治者命令时的安慰感——不是恐惧，是松弛。写一个具体场景：混乱中所有人都在争吵，统治者一句话让全场安静。主体发现自己的肩膀松了下来。不要写成对权力的批判，写这份安慰是真实的——有人替你承担了'决定'的重量，你终于可以只做'执行'。",

            dark: "写统治者缺席后的真空——不是混乱，而是更可怕的东西：所有人站在原地，等一个不会再来的命令。写主体发现自己在等，然后发现所有人都在等，然后发现没有人知道在等什么。不要写成'人民觉醒了'，写一种更深的瘫痪：不是不能动，是不知道'动'这件事原来需要自己发起。",

            tension: "场景锚点：葬礼。统治者死了，主体站在人群中，周围是哭泣和混乱。但他内心最强烈的不是悲伤或解放——是恐慌：不是'谁来替代他'，而是'如果没有人坐在那个位置，那个位置还在吗？'——如果还在，它是谁放在那里的？不要回答这个问题。"
        }
    },
    {
        id: "m4_auth_patriarch",
        name: "家长", nameEn: "The Patriarch",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "以血缘和爱为名拥有终极管辖权的人。不需要法律——'我是你父母'就够了。",
        defEn: "Holding ultimate jurisdiction in the name of blood and love. No law required.",
        core: "A面：最原始的保护者——你不能为自己决定时,他替你挡住了世界。/ B面：保护变成牢笼。你长大了,他没有,依然用你五岁的尺码衡量你。关键张力：他因为爱你才控制你,还是因为控制你才感到在爱？ | 秩序的裂隙(∄A): 邻居家父母用完全相反的方式'为孩子好'——这句话从来不是真理,只是权力的修辞。",
        coreEn: "A-side: The most primal protector — shielding you from the world before you could decide. / B-side: Protection becomes cage; you grew, they didn't. Key tension: Do they control from love, or love from control? | Rift(∄A): The neighbor's parents do the opposite 'for their child' — the phrase was never truth, only rhetoric of power.",
        reference: "《请回答1988》以笨拙的爱封锁女儿出路的父亲；《大宅门》以宗法之名掌控家族命运的老太爷。",
        referenceEn: "The father blocking exits with clumsy love in Reply 1988; the patriarch in The Grand Mansion Gate.",

        topology: "爱与锁链的莫比乌斯带：保护的内面就是控制，控制的内面就是保护——你无法切开这条带子，因为切开的工具也是他给你的",

        directive: {
            bright: "写主体还小时被家长挡在身后的具体瞬间——不是宏大叙事，是一个细节：雨天他把外套盖在你头上自己淋着，或者在你被欺负时站在门口的背影。写身体记忆而不是情感判断。不要写成温情回忆录，写一种无法否认的事实：这个人确实用身体替你承受过。这份债务不是道德绑架，它是真的。",

            dark: "写主体已经成年后的一次家庭晚餐——家长仍然在替他夹菜、替他回答亲戚的问题、替他决定该穿什么。写主体拿起筷子时发现碗里已经堆满了自己没有选择的食物。不要写愤怒，写一种更安静的窒息：他的爱是真的，他的控制也是真的，而你无法把这两样东西分开，因为它们是同一个动作。",

            tension: "场景锚点：主体第一次对家长说'不'。不要写成反抗的高潮，写那个'不'字说出口时双方的身体反应——家长的手停在半空（他正在递什么东西），主体的声音比自己预想的小。悖论不是'感恩vs.自由'，而是：说出那个'不'的能力——包括勇气、语言、判断力——全是他给你的。你用他给你的武器拒绝他。"
        }
    },
    {
        id: "m4_auth_judge",
        name: "审判者", nameEn: "The Judge",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "拥有裁决权的存在——法槌落下的那一刻,你的命运从开放变成了定局。",
        defEn: "An entity with adjudicative power — when the gavel falls, fate shifts from open to sealed.",
        core: "A面：文明的基石——没有他,弱者永远无法获得正义。法律不看你是谁,只看你做了什么。/ B面：法律是聋的。你救了一条命却违反程序,它只看到'违规'。关键张力：正义和法律对立时,你服从哪一个？ | 秩序的裂隙(∄A): 两个法官对同一案件给出相反判决——法律背后没有'终极正确',只有程序在自我运转。",
        coreEn: "A-side: Civilization's cornerstone — without them, the weak never obtain justice. / B-side: Law is deaf; you saved a life but violated procedure — it sees only 'violation.' Key tension: When justice and law oppose, which do you obey? | Rift(∄A): Two judges give opposite verdicts on the same case — no 'ultimate correctness' operates behind law.",
        reference: "《十二怒汉》法槌将落时一个陪审员的犹疑救了一条命；《东京审判》法律对战争罪行的终极裁决。",
        referenceEn: "A juror's hesitation saving a life in 12 Angry Men; law's ultimate verdict in The Tokyo Trial.",

        topology: "正义的不可能位置：审判者必须站在法律之内才有权裁决，但裁决本身是一个超越法律的行为——他在法律之内行使法律之外的权力",

        directive: {
            bright: "写法槌落下的那一刻——整个法庭安静了。写受害者家属的身体反应：攥了三年的拳头松开了，不是因为仇恨消失，而是因为终于有一个声音替他们说'这是错的'。不要写成对司法的赞美，写一种更本质的需要：人需要一个外部的声音来确认自己的痛苦是真实的。审判者提供的不是正义，是确认。",

            dark: "写一个具体的程序性荒谬：主体在法庭上哭着讲述自己的遭遇，法官打断他说'请回答是或否'。法律的语言把活生生的痛苦切割成合规的碎片。写书记员把'我被毁掉了'打成'原告声称其生活受到影响'的那个瞬间。不要写成对法律的控诉，写一种更冷的发现：法律不是不公正，法律只是不认识你。",

            tension: "场景锚点：两个相邻法庭，同一个罪名，相反的判决。主体坐在走廊的长椅上，左边传来无罪释放的欢呼，右边传来有期徒刑的沉默。悖论不是'法律不公'，而是：法律在两个房间里都是对的——它的一致性不在结果里，在程序里。程序不在乎结果。不要让主体得出结论。"
        }
    },
    {
        id: "m4_auth_mentor",
        name: "导师", nameEn: "The Mentor",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "拥有你所缺少的知识的存在。必须服从他才能成长——但成长意味着终有一天要超越他。",
        defEn: "An entity with knowledge you lack. Obedience enables growth — but growth means surpassing them.",
        core: "A面：成长的阶梯——没有他的严厉,你不会变成今天的自己。他的苛刻是因为他知道标准在哪。/ B面：导师的权威建立在'你不如我'之上。你赶上他时,他可能无法接受。关键张力：超越导师需要背叛他的教诲——'忠诚'是他最后一道枷锁？ | 秩序的裂隙(∄A): 导师的身份依赖于'你还需要我教'。当你真的不需要了,这个大他者面具就碎了。",
        coreEn: "A-side: The ladder of growth — without their severity you wouldn't be who you are. / B-side: Authority rests on 'you're not as good.' When you catch up, they may not accept it. Key tension: Must you betray teachings to surpass? | Rift(∄A): The mentor identity depends on 'you still need me.' When you truly don't, this mask of the Big Other shatters.",
        reference: "《爆裂鼓手》用极端手段逼天才突破极限的弗莱彻；《死亡诗社》唤醒自由灵魂却被体制碾碎的基廷。",
        referenceEn: "Fletcher in Whiplash; Mr. Keating in Dead Poets Society.",

        topology: "知识阶梯的悖论结构：导师的存在需要你'不够好'作为前提——你的成长是他的成就，但你的超越是他的死亡",

        directive: {
            bright: "写导师严厉训练后主体第一次做到了的瞬间——不是感恩的泪水，是一种惊讶：原来我的身体可以做到这个。写导师在远处看着但没有说话的背影。不要写成师恩浩荡的抒情，写一种更精确的东西：他的苛刻不是因为恨你，是因为他知道那个标准确实在那里。",

            dark: "写主体第一次在某件事上超过导师的瞬间——不是胜利，是一种不被允许的尴尬。导师的表情只有一秒的变化，但主体看到了。写那一秒。不要写成'学生终于超越老师'的励志叙事，写一种关系层面的断裂：你的进步让他失去了唯一和你联结的方式。",

            tension: "场景锚点：毕业/出师的仪式。导师说'你不再需要我了'——但这句话本身就是最后一次教导。悖论不是'感恩vs.独立'，而是：导师教给你的最后一课是'离开我'，但'离开'这个动作仍然是在服从他。你用他教你的方式离开他。不要解决这个死结。"
        }
    },
    {
        id: "m4_auth_priest",
        name: "祭司", nameEn: "The Priest",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "声称能与终极实在对话的通道。垄断了意义的解释权——你的痛苦是神圣计划的一部分。",
        defEn: "Channel claiming dialogue with ultimate reality. Monopolizes interpretation of meaning.",
        core: "A面：为痛苦赋予意义——'一切都有目的',在荒谬世界中这是活下去的理由。/ B面：只有祭司能解释痛苦,你永远无法自己判断'值不值得'。怀疑被判定为'信仰不足'。关键张力：如果他说的是对的——你还有权利反抗吗？ | 秩序的裂隙(∄A): 两个祭司对同一段经文给出相反解释——经文背后没有'神意',只有人替沉默的天空代言。",
        coreEn: "A-side: Giving pain meaning — 'all has purpose,' in an absurd world this is reason to live. / B-side: Only the priest interprets pain; your doubt is ruled 'insufficient faith.' Key tension: If they're right — do you still have the right to rebel? | Rift(∄A): Two priests give opposite readings of the same text — no 'divine intent' behind scripture, only humans speaking for a silent sky.",
        reference: "《聚焦》垄断解释权掩盖罪行的天主教高层；《寂静岭》以神旨为名献祭活人的女祭司。",
        referenceEn: "Catholic leaders covering crimes in Spotlight; the priestess in Silent Hill.",

        topology: "意义的垄断回路：祭司不是站在你和天空之间——而是他制造了'天空在说话'这个前提，然后把自己安放在唯一的翻译位上",

        directive: {
            bright: "写主体在最深的痛苦中听到祭司说'这一切有意义'时的身体反应——肩膀松了，呼吸深了。不是因为相信了内容，而是因为有一个声音在说'你的痛苦被看见了'。写教堂的空间感——高穹顶、回声、光线。不要写成宗教批判，写一种真实的需要：在荒谬面前，'意义'是止痛药，它可能是假的，但疼痛的缓解是真的。",

            dark: "写主体第一次怀疑时的场景——不是大彻大悟，是一个小裂缝：祭司对两个人的痛苦给出了相同的解释，一字不差。写主体意识到这不是'看见了我'，而是'背了一段台词'的那个瞬间。不要写愤怒，写一种更安静的冷：原来被安慰和被敷衍，感受是一模一样的。",

            tension: "场景锚点：主体目睹两个祭司对同一段经文给出相反解释，而两人都同样真诚、同样笃定。悖论不是'谁对谁错'，而是：如果天空真的在说话，为什么两个翻译听到的完全不同？如果天空没有说话——那这份真诚是从哪里来的？不要让主体选边。"
        }
    },
    {
        id: "m4_auth_warlord",
        name: "军令", nameEn: "The Warlord",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "合法暴力的直接执行者。在他的辖区,道德和语言毫无意义,只有服从和力量算数。",
        defEn: "Direct executor of legitimate violence. In their domain, only obedience and force count.",
        core: "A面：极端危机中果断的军令拯救所有人——'别问为什么,执行'是战场活命唯一法则。/ B面：军令把人还原为编号。服从让你活下来,但活下来的那个东西还是你吗？关键张力：你执行命令活了——但命令做的事让你余生无法入睡。 | 秩序的裂隙(∄A): 同一个动作,有军令就是'任务',没有就是'谋杀'——合法性不是事实,是一张随时可以撤销的纸。",
        coreEn: "A-side: Decisive orders save everyone in crisis — 'don't ask, execute' is the battlefield's only survival law. / B-side: Orders reduce you to a number. You survived, but is that thing still you? Key tension: You followed orders and lived — but what they required haunts you forever. | Rift(∄A): Same action with orders is 'duty,' without is 'murder' — legitimacy isn't fact, it's a revocable piece of paper.",
        reference: "《全金属外壳》将新兵碾碎为服从机器的教官；《拯救大兵瑞恩》八人冒死救一人的荒谬军令。",
        referenceEn: "The drill instructor in Full Metal Jacket; the absurd order risking eight for one in Saving Private Ryan.",

        topology: "身体的功能化缩减：军令不是压迫你——而是把你从'一个人'简化为'一个功能'，而简化本身在战场上确实能救你的命",

        directive: {
            bright: "写战场上军令救命的瞬间——'卧倒'这个词比子弹快了半秒。写主体服从时的身体：不经过大脑，肌肉直接反应。不要写成对纪律的歌颂，写一种更本质的东西：在死亡面前，放弃思考是最高效的生存策略。他活下来了，因为他在那一秒不是一个人，是一个执行单元。",

            dark: "写主体执行完命令后回到营帐的夜晚——命令要求他做的事在脑子里重放。写他的手：手还在，但它做过的事让他不认识这双手了。不要写成PTSD的临床描述，写一种更深的裂缝：军令把'我'和'我的手'分开了——手执行了命令，但'我'没有同意。我和我的身体之间多了一条缝。",

            tension: "场景锚点：主体站在军事法庭上。他执行了命令，活了下来，但命令做的事被判定为罪行。悖论不是'服从vs.良知'，而是：执行命令的那个瞬间，'我'不在——军令替代了'我'。但法庭审判的是'我'，不是军令。谁该对一个不在场的'我'做的事负责？不要给出裁决。"
        }
    },
    {
        id: "m4_auth_creator",
        name: "造物主", nameEn: "The Creator",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "创造了你的存在。不需要理由就拥有对你的一切权利——没有他,你根本不存在。",
        defEn: "The being that created you. Total rights without justification — without them, you wouldn't exist.",
        core: "A面：造物主赋予你生命——感知、思考、爱的能力都是他的礼物,感恩是真实的。/ B面：'我创造了你'是最不可反驳的债务——你永远还不清,因为还债的工具也是借来的。关键张力：造物主要收回创造物——创造物有权说不吗？ | 秩序的裂隙(∄A): 你反抗他的工具——理性、意志——全是他给的。但如果他真的全能,他为什么需要你的服从？",
        coreEn: "A-side: The creator gave you life — perception, thought, love are genuine gifts. / B-side: 'I created you' is the most irrefutable debt — you can never repay because repayment tools are also borrowed. Key tension: May the creation say 'no' to reclamation? | Rift(∄A): Your tools of rebellion — reason, will — are all their gifts. But if truly omnipotent, why do they need your obedience?",
        reference: "《银翼杀手》复制人质问'为什么给我生命又限制我的寿命'；《弗兰肯斯坦》怪物对造物者的终极质询。",
        referenceEn: "Replicants questioning lifespan limits in Blade Runner; the monster's interrogation in Frankenstein.",

        topology: "债务的先验结构：造物主不需要做任何事就已经拥有一切权力——因为你的存在本身就是一笔无法偿还的债，而偿还的工具也是借来的",

        directive: {
            bright: "写主体第一次意识到自己拥有感知能力时的惊奇——看见颜色、听到音乐、感受到风。不是感恩的说教，而是一种纯粹的事实：这些能力不是我自己制造的，它们来自我之外的某个地方。写一个具体的感官时刻——日落、第一声哭泣。不要写成神学论证，写一种前语言的感激。",

            dark: "写主体试图反抗造物主时的悖论时刻——他要用理性反驳，但理性是造物主给的；他要用意志对抗，但意志也是造物主给的。写主体的手举起锤子要砸碎牢笼，然后意识到锤子、手、和'想砸碎'的冲动全是借来的。不要写成哲学讨论，写一个具体的身体动作在半空中停住。",

            tension: "场景锚点：造物主说'我可以收回'。主体说'不'——但这个'不'的能力是谁给的？悖论不是'感恩vs.反抗'，而是：如果反抗的工具都是造物主给的，那么反抗本身是不是也在造物主的计划之内？如果是，反抗就不是反抗；如果不是，造物主就不是全能的。不要解决这个矛盾。"
        }
    },
    {
        id: "m4_auth_warden",
        name: "管理者", nameEn: "The Warden",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "封闭空间的绝对主人。掌握生存资源的唯一阀门——呼吸、食物、光线都需要他许可。",
        defEn: "Absolute master of enclosed space. Sole valve to survival — breath, food, light require permission.",
        core: "A面：封闭系统的秩序维护者——没有他,三天内自毁。他的严厉是对熵的抵抗。/ B面：当他成为唯一资源分配者,所有人变成求食者。你的尊严等于他分给你的口粮。关键张力：推翻管理者意味着所有人饿死——自由还是生存？ | 秩序的裂隙(∄A): 管理者最大的权力不是惩罚,是让你依赖。当你习惯被喂养,你忘了自己会觅食。",
        coreEn: "A-side: Order-keeper of enclosed systems — without them, three-day self-destruction. Severity resists entropy. / B-side: As sole allocator, everyone becomes supplicant. Your dignity equals the ration assigned. Key tension: Overthrowing them means all starve — freedom or survival? | Rift(∄A): Their greatest power isn't punishment but dependency. Accustomed to being fed, you forget you can forage.",
        reference: "《肖申克的救赎》掌控一切资源的典狱长；《饥饿游戏》将生存变为权力筹码的凯匹特。",
        referenceEn: "The warden in Shawshank Redemption; the Capitol in The Hunger Games.",

        topology: "依赖的拓扑陷阱：管理者不是在外面锁住你——而是让你忘记了锁和门的区别，因为你已经把被喂养当作了呼吸",

        directive: {
            bright: "写封闭系统中管理者维持秩序的具体场景——分配食物、调解纠纷、在混乱中维持最基本的人类尊严。不是赞美他，而是承认一个事实：在这个空间里，没有他，三天之内就是弱肉强食。写其他人看向他时眼中的东西——不是爱，不是恨，是一种更原始的东西：依赖。",

            dark: "写主体在被释放后的第一天——站在超市里，面对几十种面包，无法选择。不是自由的喜悦，而是一种更深的瘫痪：在管理者的系统里，你从来不需要选择，因为选择权不属于你。写主体站在货架前的时间——五分钟、十分钟——手伸出去又缩回来。不要写成社会学分析，写一种身体层面的丧失：选择这块肌肉萎缩了。",

            tension: "场景锚点：封闭空间里的一次暴动。管理者被推翻了，但三天后暴动者自发选出了一个新的管理者——规则几乎和之前一模一样。悖论不是'自由vs.秩序'，而是：管理者是人，但'管理者'是一个位置。你可以换掉人，但那个位置是你们自己制造的。不要暗示任何解决方案。"
        }
    },
    {
        id: "m4_auth_guardian",
        name: "监护人", nameEn: "The Guardian",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "以保护为名拥有合法管辖权。权力来源不是暴力,而是'你需要被保护'这个前提。",
        defEn: "Legitimate jurisdiction in the name of protection. Power derives from the premise 'you need protecting.'",
        core: "A面：他挡住了你无法独自面对的危险。你还脆弱时,庇护是真实的礼物。/ B面：保护的前提是'你是脆弱的'。你不再脆弱时,他失去存在理由——所以他有动机让你永远觉得自己脆弱。关键张力：他在保护你,还是在保护'你需要他'这个幻觉？ | 秩序的裂隙(∄A): 你走出去,发现世界没有想象中可怕——回头看到的是一扇从来没有锁上的门。",
        coreEn: "A-side: They block dangers you can't face alone. When fragile, shelter is a genuine gift. / B-side: Protection's premise is 'you're fragile.' When you're not, they lose purpose — so they're motivated to keep you feeling fragile. Key tension: Protecting you, or the illusion you need them? | Rift(∄A): You step out and the world isn't as terrifying as imagined — looking back, you see a door that was never locked.",
        reference: "《房间》母亲的保护既是救命又是囚禁；《楚门的世界》以保护为名构建的完美牢笼。",
        referenceEn: "Protection as both salvation and imprisonment in Room; the perfect cage in The Truman Show.",

        topology: "保护的自我生产：监护人不是回应危险——而是需要'危险存在'作为自身存在的前提，因此他有动机让你永远觉得外面是可怕的",

        directive: {
            bright: "写主体在真实危险面前被监护人挡住的瞬间——车祸前被拉回、洪水中被抱起、黑暗中被握住的手。写皮肤和皮肤的接触，写主体在那一刻感到的绝对安全。不要写成反讽的前奏，写这份安全是真的——当你的身体还太小时，有人用他的身体替你做了屏障。这个记忆不是虚假的。",

            dark: "写主体成年后试图出门，监护人的反应——不是暴力，是一种更精密的东西：他列举了外面的每一种危险，每一种都是真实存在的。写主体站在门口听完这些之后，发现自己的手没有转动门把手。不要写成'觉醒和突破'，写一种更诚实的困境：他说的危险确实存在，但你无法确认它们的概率——因为你从来没有出去过。",

            tension: "场景锚点：主体终于走出去了。发现世界没有监护人描述的那么可怕——但也没有那么安全。回头看，门是开着的。悖论不是'门从来没锁'这么简单——而是：如果门从来没锁，为什么我一直以为它锁着？是他告诉我的，还是我自己需要相信它锁着？不要回答。"
        }
    },
    {
        id: "m4_auth_employer",
        name: "雇主", nameEn: "The Employer",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "用经济依附关系建立权威。不需要暴力,因为你的生存本身就绑在他的系统上。",
        defEn: "Authority through economic dependency. No violence needed — your survival is bound to their system.",
        core: "A面：提供生存保障——工资、身份、坐标。离开不会死,但你会成为一个没有位置的人。/ B面：经济依附是最隐蔽的锁链,因为你'自愿'戴上。签了合同就无权抱怨。关键张力：你恨这份工作但孩子需要学费——'自由选择'还是自由的吗？ | 秩序的裂隙(∄A): '你随时可以辞职'——你确实可以,但你不会。'自愿'掩盖了一个事实：选择空间是系统预设的。",
        coreEn: "A-side: Survival guarantees — salary, identity, coordinates. Leaving won't kill but makes you unplaced. / B-side: Economic dependency is the most covert chain — worn 'voluntarily.' Contract signed, no right to complain. Key tension: Hating work but kids need tuition — is 'free choice' still free? | Rift(∄A): 'You can always quit' — you can, but you won't. 'Voluntary' masks that your choice-space was preset by the system.",
        reference: "《华尔街之狼》用金钱构建绝对忠诚；《寄生虫》仅凭经济地位碾碎尊严的结构性权力。",
        referenceEn: "Building loyalty through money in Wolf of Wall Street; structural power crushing dignity in Parasite.",

        topology: "自愿的枷锁悖论：雇主不需要锁链——'你签了合同'本身就是完美的锁链，因为是你自己把手伸进去的",

        directive: {
            bright: "写发工资那天的身体感觉——手机震动，数字到账，一种微小但真实的安全感。写主体拿着工资单去交房租、给孩子买文具的那条路。不要写成'劳动异化'的批判，写一种更朴素的真相：这份钱确实在支撑一个家庭的存在。没有它，不是'不自由'——是'不存在'。",

            dark: "写周日晚上的身体——闹钟设好了，明天要上班。写主体躺在床上，胃在收缩，不是因为病了，是因为到账的工资和即将售出的八小时之间有一个精确的等号。写他盯着天花板时意识到的事情：他不是在出卖时间，他是在出卖'活着'本身的八小时。不要写成觉醒，写一种已经习惯了的钝痛。",

            tension: "场景锚点：裁员面谈。HR说'你随时可以拒绝这个方案'。主体知道自己确实可以拒绝——法律保护他。但孩子的学费通知单在口袋里。悖论不是'被压迫vs.被剥削'，而是：在法律意义上你是完全自由的，没有任何人强迫你。但这个'自由'的选择空间是谁预设的？不要让主体做出选择。"
        }
    },
    {
        id: "m4_auth_benefactor",
        name: "恩主", nameEn: "The Benefactor",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "曾经救过你或给过你一切的存在。他的权力不来自暴力,而来自你欠他的那笔永远还不清的债。",
        defEn: "One who saved you or gave you everything. Their power comes not from violence but from a debt you can never repay.",
        core: "A面：恩主的帮助是真实的——没有他,你可能已经死了或一无所有。感恩是人性中最高贵的情感之一。/ B面：但恩情是最隐蔽的权力。'我救过你'这句话让你永远无法说'不'。关键张力：他的善意是无条件的,还是一笔等着被兑现的支票？ | 秩序的裂隙(∄A): 当你发现恩主帮你不是因为'爱你',而是因为'需要一个欠他人情的人'——恩情的整个道德结构就坍塌了。",
        coreEn: "A-side: The benefactor's help was real — without them you might be dead. Gratitude is among humanity's noblest emotions. / B-side: But gratitude is the most covert power. 'I saved you' makes you unable to say 'no.' Key tension: Was their kindness unconditional, or a check awaiting collection? | Rift(∄A): When you discover they helped not from love but from needing someone indebted — gratitude's moral structure collapses.",
        reference: "《基督山伯爵》以恩人面目布局复仇的唐泰斯；《千与千寻》汤婆婆给你工作也给你枷锁的双面恩主。",
        referenceEn: "Dantès orchestrating revenge as benefactor in The Count of Monte Cristo; Yubaba as double-edged benefactor in Spirited Away.",

        topology: "感恩的债务拓扑：恩情不是一条直线（给予→接受→偿还）——而是一个闭合回路，因为偿还本身也是他给你的能力，所以你越还越欠",

        directive: {
            bright: "写主体在最绝望时接到恩主帮助的那一刻——不是戏剧性的拯救，是一个具体的动作：一笔汇款、一通电话、一张机票。写主体的身体从崩溃边缘拉回来时的感觉——不是感动，是活过来了。不要写成'施恩图报'的暗示，写这份帮助是真的、及时的、救命的。感恩是人类最诚实的情感之一。",

            dark: "写恩主第一次提出请求时的场景——不是威胁，是一个完全合理的请求。但主体发现自己无法说'不'——不是因为请求不合理，而是因为'我救过你'这句话虽然没有被说出来，但它一直在房间里。写主体答应时的身体：嘴巴在说'好'，但有什么东西在胸口收紧了。不要写成恩将仇报的故事，写一种更微妙的东西：恩情把'自由意志'变成了一种理论上存在但实际上无法行使的东西。",

            tension: "场景锚点：主体终于攒够了钱想'还清'恩情。他把钱放在恩主面前。恩主笑着推回去说'你我之间不谈这个'。悖论不是'还不清'——而是'不让你还'比'还不清'更可怕：恩主拒绝被偿还，是因为他需要这笔债永远存在。不要让主体理解这个结构。"
        }
    },
    {
        id: "m4_auth_censor",
        name: "审查者", nameEn: "The Censor",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "决定什么可以被说、被看、被知道的存在。他不消灭你的身体——他消灭你的声音。",
        defEn: "Decides what can be said, seen, known. They don't destroy your body — they destroy your voice.",
        core: "A面：审查维护了共识的稳定——如果所有人都可以说任何话,社会将在噪声中崩解。有些真相确实具有破坏力。/ B面：但谁来决定哪些真相'太危险'？审查者在'保护社会'的名义下,获得了定义真假的无限权力。关键张力：如果你说的是真话,但这个真话会引发恐慌——审查者有权让你闭嘴吗？ | 秩序的裂隙(∄A): 审查者自己也被审查——他上面还有人决定'什么不能被决定'。权力的尽头不是一个人,是一致空转的恐惧。",
        coreEn: "A-side: Censorship maintains consensus stability — if everyone says anything, society dissolves in noise. Some truths are genuinely destructive. / B-side: But who decides which truths are 'too dangerous'? Key tension: If you speak truth but it causes panic — may the censor silence you? | Rift(∄A): The censor is also censored — above them, someone decides 'what cannot be decided.' Power's end isn't a person but an idle loop of fear.",
        reference: "《华氏451度》焚烧一切书籍的消防员；《窃听风暴》中监听整个社会的东德特工。",
        referenceEn: "Firefighters burning all books in Fahrenheit 451; Stasi agents surveilling society in The Lives of Others.",

        topology: "声音的拓扑消失：审查者不是让你说不出来——而是让你自己决定不说，然后让你忘记你曾经决定过",

        directive: {
            bright: "写审查者维护秩序的一个真实场景——一则可能引发恐慌的假消息被拦截了，社会避免了一场踩踏。写那些不知道自己被保护了的人们——他们安全地走过了那个下午，因为某些信息没有到达他们。不要写成讽刺，写一种真实的功能：在信息过载的世界里，过滤确实在救命。问题从来不是'要不要过滤'，而是'谁来过滤'。",

            dark: "写主体在写作前的自我审查——一个词被打出来又被删除，一句话在喉咙里转了一圈又被咽回去。写这个动作的日常性：不是恐惧，是习惯。写主体甚至已经不记得那个被删掉的词是什么了。不要写成'勇敢说出真相'的前奏，写一种更深的恐怖：审查者最成功的时刻不是你闭嘴，而是你不再知道自己在闭嘴。",

            tension: "场景锚点：主体发现自己在审查别人——在社交媒体上举报了一条他'觉得不合适'的评论。举报之后他停下来，意识到自己做了审查者做的事。悖论不是'审查是坏的'——而是：每个人都在审查，'什么可以说'的边界不在外面，在你自己的头脑里。审查者不是一个人，是一种你已经内化了的功能。不要让主体得出结论。"
        }
    },
    {
        id: "m4_auth_healer",
        name: "治愈者", nameEn: "The Healer",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "对你的身体或精神拥有合法干预权的存在。他的权威来自'我是专业的,你不是'。",
        defEn: "Legitimate intervention over your body or mind. Authority from 'I am the expert, you are not.'",
        core: "A面：治愈者拥有救命的知识。你不服从他的话,可能会死。他的权威是真实的,有数据支撑。/ B面：但'我是专家'把你变成了被动的客体——你不被允许对自己的身体有意见。关键张力：当你的身体感受和医学判断矛盾时——谁对你的身体有最终解释权？ | 秩序的裂隙(∄A): 医学的权威建立在'客观性'之上。但当两个医生给出相反的诊断时,你才发现'客观'只是另一种信仰。",
        coreEn: "A-side: The healer holds life-saving knowledge. Disobey and you may die. Their authority is real and data-backed. / B-side: 'I'm the expert' turns you into a passive object — no opinion on your own body allowed. Key tension: When your body's feeling contradicts medical judgment — who holds final say? | Rift(∄A): Medical authority rests on 'objectivity.' But when two doctors give opposite diagnoses, 'objective' turns out to be another form of belief.",
        reference: "《飞越疯人院》以治疗之名剥夺一切自由的精神病院；《心灵捕手》中治愈者与被治愈者的权力博弈。",
        referenceEn: "Stripping freedom in the name of treatment in One Flew Over the Cuckoo's Nest; the power game in Good Will Hunting.",

        topology: "专业知识的主体置换：治愈者不是在帮助你——而是在你和你自己的身体之间插入了一层翻译，此后你必须经过他才能听懂自己",

        directive: {
            bright: "写治愈者救了一条命的时刻——精准的诊断、正确的药物、黄金时间内的决定。写主体醒来后看到的第一个画面：白色天花板、消毒水味道、静脉注射管。写一种最朴素的感激：这个人知道我的身体里发生了什么，而我不知道。他的知识确实是我和死亡之间唯一的屏障。不要写成对医疗系统的歌颂，写一个具体的'活过来了'。",

            dark: "写主体试图描述自己的疼痛——但治愈者要求他用1-10的数字来评级。写主体张了张嘴想说'不是那种痛'，但在量表上找不到自己的位置。写治愈者低头在表格上写字的那个画面——他在记录的不是'我'，而是'病例编号'。不要写成'医生冷漠'的控诉，写一种更深的失语：你的身体在说话，但翻译成医学语言之后，它说的变成了另一种东西。",

            tension: "场景锚点：第二意见。主体因为同一个症状看了两个医生，得到了相反的诊断。两个人都很确定。主体站在两张处方之间，发现自己无法判断——因为他早已失去了直接听懂自己身体的能力，他需要一个专家来'翻译'，但两个翻译给出了相反的译文。不要让主体选择相信哪一个。"
        }
    },
    {
        id: "m4_auth_elder",
        name: "长老", nameEn: "The Elder",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "代表传统、习俗和祖先智慧的存在。他的权威不来自个人——而来自'这是祖辈的规矩'。",
        defEn: "Representing tradition, custom, ancestral wisdom. Authority from 'this is the rule of our ancestors.'",
        core: "A面：传统是经过无数代验证的生存智慧。长老不是在发明规则,是在传递被时间检验过的经验。/ B面：但'这是传统'可以为任何暴行辩护。传统的权威在于它不需要解释——'一直这样做'本身就是理由。关键张力：如果传统在当时是对的但现在是错的——改变它是进步还是背叛？ | 秩序的裂隙(∄A): '祖辈的规矩'——但哪个祖辈？往回追溯,最终找到的不是一个立规矩的人,而是一个遗忘了起源的习惯。",
        coreEn: "A-side: Tradition is survival wisdom verified through generations. Elders transmit time-tested experience. / B-side: 'It's tradition' can justify any atrocity. Tradition needs no explanation — 'always done this way' is the reason. Key tension: If tradition was right then but wrong now — is changing it progress or betrayal? | Rift(∄A): 'Ancestral rules' — but which ancestor? Tracing back, you find not a rule-maker but a forgotten habit.",
        reference: "《乱世佳人》中南方种植园传统对个体命运的碾压；《菊豆》封建礼教下以传统之名窒息一切生命力。",
        referenceEn: "Southern plantation traditions crushing individuals in Gone with the Wind; feudal rites suffocating life in Ju Dou.",

        topology: "传统的无主人结构：长老不是规则的制定者——他只是传递者。但当你追问'谁制定的'时，链条的尽头不是一个人，是一个遗忘",

        directive: {
            bright: "写一个传统仪式中主体感到归属的瞬间——所有人用同样的姿势做同样的事情，语言是古老的，动作是世代传递的。写身体的集体记忆：你第一次做这个动作，但你的身体好像已经做过无数次。不要写成'传统之美'的风光片，写一种更深的东西：在一个万物流变的世界里，有些东西比你的一生更长久，这种持久本身就是一种安慰。",

            dark: "写主体质疑传统时长老的回答——'一直是这样的'。写主体追问'为什么'，长老重复'一直是这样的'。不是暴力的镇压，是一种真诚的茫然：长老自己也不知道为什么，他只知道传递。写长老眼中的东西——不是权力，是恐惧：如果这个'为什么'被回答了，他传递了一辈子的东西可能是空的。不要写成'破除迷信'的启蒙叙事。",

            tension: "场景锚点：主体发现另一个社群的传统和自己的完全相反——他们禁止的恰恰是你们要求的。两个传统都有'一直是这样的'作为依据。悖论不是'哪个对'，而是：如果'一直是这样'能证明任何方向，那它什么都不能证明。但你仍然需要一个方向。不要给出新的方向。"
        }
    },
    {
        id: "m4_auth_examiner",
        name: "考官", nameEn: "The Examiner",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "拥有评判你是否'合格'的权力的存在。他决定你能否通过那道门——而门后是你的全部未来。",
        defEn: "Holding power to judge whether you 'qualify.' They decide if you pass through the gate — beyond lies your entire future.",
        core: "A面：考官提供了公平的标准——不论出身,只看能力。考试是穷人唯一的上升通道。/ B面：但考官定义了'什么叫合格'。你的全部价值被压缩成一个分数。你不是一个人,你是一张成绩单。关键张力：如果你的才能恰好不在考试范围内——是你不合格,还是考试不合格？ | 秩序的裂隙(∄A): 考官自己也是被考出来的。他通过了考试,然后获得了考别人的权力——但没有人考过'考试本身是否正确'。",
        coreEn: "A-side: The examiner provides fair standards — regardless of origin, only ability matters. Exams are the poor's only ladder. / B-side: The examiner defines 'qualified.' Your value is compressed into a score. You're not a person, you're a transcript. Key tension: If your talent falls outside the exam's scope — are you unqualified, or is the exam? | Rift(∄A): The examiner was also examined. They passed, then earned the power to test others — but no one ever tested whether the test itself is correct.",
        reference: "《三傻大闹宝莱坞》批判应试制度对创造力的碾压；《小舍得》中考试制度如何异化整个家庭。",
        referenceEn: "Critiquing exam systems crushing creativity in 3 Idiots; exam culture alienating families in A Little Reunion.",

        topology: "评判的自我繁殖：考官不是在测量你——而是在制造'被测量的你'，此后你不再知道不被评分的自己是什么样子",

        directive: {
            bright: "写主体通过考试时的身体感觉——看到名字在榜上的那一秒，全身的血液涌上来。写他打电话告诉家人时声音的颤抖。不要写成'应试成功学'，写一种更本质的需要：在一个没有标准答案的世界里，考试给了你一个明确的'你合格了'——这种确认是真的能让人站稳的。考试的公平性确实给了很多人唯一的机会。",

            dark: "写主体在日常生活中无法停止给自己打分的时刻——做了一顿饭在心里给自己评分，和朋友聊天后复盘自己的'表现'。写主体意识到自己在没有考官的地方创造了一个内在考官。不要写成'内卷批判'，写一种更安静的恐惧：不被评分的时刻不是自由，是空白——因为你已经不知道在没有分数的情况下如何确认自己'够好'。",

            tension: "场景锚点：主体的孩子在画画，画得很开心。主体的第一反应是'画得好不好'——然后停住了。悖论不是'应该鼓励不应该评判'，而是：他无法看见一个不被评价的行为。孩子在画画，但他看到的是一场没有评委的考试。这个眼镜是谁给他戴上的？不要让主体摘下眼镜。"
        }
    },
    {
        id: "m4_auth_lawgiver",
        name: "立法者", nameEn: "The Lawgiver",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "制定规则的人——不只是执行规则,而是决定'什么应该被允许、什么应该被禁止'。",
        defEn: "The one who makes rules — not just enforcing but deciding what should be permitted or forbidden.",
        core: "A面：立法者将混沌转化为秩序——在他之前是弱肉强食,在他之后是有章可循。规则保护了弱者。/ B面：但立法者在制定规则的那一刻,也界定了'谁是违法者'。他的笔一划,无辜者可以变成罪犯。关键张力：如果立法者的规则保护了多数人却牺牲了你——你服从还是反抗？ | 秩序的裂隙(∄A): 立法者用什么规则来立规则？他的元规则是谁定的？一直追问下去,最后是一片空白。",
        coreEn: "A-side: The lawgiver transforms chaos into order — before them, might makes right; after, there are rules. Rules protect the weak. / B-side: But in making rules, they also define 'who is the criminal.' One stroke makes innocents into offenders. Key tension: If rules protect the majority but sacrifice you — obey or rebel? | Rift(∄A): What rule does the lawgiver use to make rules? Who made the meta-rule? Keep asking, and you arrive at a blank.",
        reference: "《十诫》摩西从西奈山带回最原始的立法权威；《V字仇杀队》中高等法官以立法之名行暴政之实。",
        referenceEn: "Moses bringing legislative authority from Sinai in The Ten Commandments; the High Chancellor legislating tyranny in V for Vendetta.",

        topology: "规则的无根基悬浮：立法者用规则为世界划线——但划线的那只手本身不在任何线的内侧，它悬浮在所有规则之外",

        directive: {
            bright: "写立法者的规则第一次保护了弱者的场景——一个被欺凌的人走进法院，法官打开法典，念出一行字，欺凌者被制止了。写被保护者的身体：他第一次挺直了腰。不要写成法治理想主义，写一种更朴素的功能：在暴力面前，一行写在纸上的字确实可以挡住一只拳头。文明就建立在这个不可思议的事实之上。",

            dark: "写主体因为一条新规则突然变成违法者的场景——他什么都没变，做的事和昨天一模一样，但昨天合法今天犯法。写主体手里拿着那张告知书，反复读同一行字的场景。不要写成对恶法的控诉，写一种更深的眩晕：法律不是发现了你在做坏事——法律制造了'坏事'这个类别，然后把你放进去。",

            tension: "场景锚点：立法者在制定一条影响百万人的法律。他停笔了——因为他无法为自己'有权制定这条法律'找到依据。他的权力来自上一条法律，上一条来自更上一条，最后来自一部宪法——宪法来自哪里？来自一群人某一天坐下来'决定'了。悖论不是'法律不合理'，而是：所有法律的最终地基是一个没有法律依据的决定。不要填补这个空白。"
        }
    },
    {
        id: "m4_auth_prophet",
        name: "预言者", nameEn: "The Prophet",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "声称知道未来的存在。他的权威来自'我知道结局'——而你不知道。",
        defEn: "Claims to know the future. Authority from 'I know the ending' — and you don't.",
        core: "A面：预言者让你提前避开灾难。如果他的预言是真的,服从是唯一理性的选择。/ B面：但预言一旦被说出,就改变了你的行为——你不知道灾难是真的会来,还是你的恐惧让它来了。关键张力：如果预言本身就是灾难的原因——你还该相信预言吗？ | 秩序的裂隙(∄A): 预言者的权力依赖于未来的不可验证。当未来到来,他要么是先知,要么是骗子——但在那之前,你无法分辨。",
        coreEn: "A-side: The prophet lets you dodge disaster. If the prophecy is true, obedience is the only rational choice. / B-side: But a spoken prophecy changes your behavior — did the disaster come because it was real, or because your fear made it real? Key tension: If the prophecy itself is the disaster's cause — should you still believe? | Rift(∄A): The prophet's power relies on the future's unverifiability. When it arrives, they're either a seer or a fraud — but until then, you can't tell.",
        reference: "《少数派报告》预测犯罪的系统成为新暴政；《俄狄浦斯王》逃避预言的行为恰好实现了预言。",
        referenceEn: "Crime prediction becoming new tyranny in Minority Report; fleeing the prophecy fulfilling it in Oedipus Rex.",

        topology: "未来的回溯因果：预言者不是看见了未来——而是通过说出未来改变了现在，让未来变成了唯一可能的方向",

        directive: {
            bright: "写主体因为预言避开了一场灾难的时刻——某人说'别走那条路'，他听了，后来那条路塌了。写事后的身体：后背发凉，手心出汗。不是感激，是敬畏——有人确实看到了你看不到的东西。不要写成神秘主义，写一种朴素的事实：有些人确实能从模式中读出信号。经验、直觉、对细节的敏感——这种能力是真实的。",

            dark: "写预言者的预言如何改变了主体的行为——'你会失败'让主体颤抖，颤抖让他发挥失常，发挥失常让他失败了。预言实现了——但不是因为它是对的，而是因为它被说出来了。写主体在失败后回溯因果链时的眩晕。不要写成'不要被消极影响'的心理学鸡汤，写一种更本质的困境：你永远无法验证一个预言——因为预言被说出的那一刻，它就改变了实验条件。",

            tension: "场景锚点：预言者说'你的婚姻会以离婚结束'。主体开始观察伴侣的每一个行为，寻找'预兆'。伴侣感到被审视，关系恶化。悖论不是'预言是否准确'——而是：预言把一种可能性变成了唯一的焦点，让所有其他可能性消失了。预言不是描述未来，是删除未来。不要给出替代未来。"
        }
    },
    {
        id: "m4_auth_arbiter",
        name: "仲裁者", nameEn: "The Arbiter",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "被双方认可的中间决定者。他的权力来自'双方都同意让他决定'。",
        defEn: "A mediator recognized by both sides. Power from 'both parties agreed to let them decide.'",
        core: "A面：仲裁者让冲突不必以暴力收场——有人来断是非,双方就不用自己动手。文明由此可能。/ B面：但仲裁者可以被收买、被偏见左右、被其中一方秘密控制。'中立'可能只是一个更精致的立场。关键张力：如果仲裁者的判决明显偏袒——但你当初签了'同意服从仲裁'的协议,你还能反悔吗？ | 秩序的裂隙(∄A): '中立'不是一个立场——它是一个不可能的位置。仲裁者不可能不站在某一边,他只能假装自己不站。",
        coreEn: "A-side: The arbiter means conflicts need not end in violence — someone adjudicates, so parties don't have to. Civilization becomes possible. / B-side: But the arbiter can be corrupted or secretly controlled. 'Neutrality' may be a refined pose. Key tension: If the verdict is biased but you signed 'agree to arbitration' — can you retract? | Rift(∄A): 'Neutrality' isn't a position — it's an impossible one. The arbiter cannot not stand on a side; they can only pretend they don't.",
        reference: "《十二怒汉》中被赋予仲裁权力的普通陪审员面临良知与程序的撕裂；《所罗门的审判》智慧裁决背后的权力博弈。",
        referenceEn: "Ordinary jurors torn between conscience and procedure in 12 Angry Men; power dynamics behind wise verdicts in The Judgment of Solomon.",

        topology: "中立的不可能定理：仲裁者必须不站在任何一边——但'不站在任何一边'本身就是一个立场，而且是一个只有权力才能负担的立场",

        directive: {
            bright: "写仲裁者让一场即将变成暴力的冲突和平解决的场景——两个人面红耳赤，拳头已经举起来了。仲裁者站在中间，说了一句话，拳头放下了。写那一刻的空间感——三个人之间的距离。不要写成'和平万岁'，写一种更务实的功能：在两种正义对撞时，有人吸收了冲击力，双方都没有被碾碎。这个功能是真实的。",

            dark: "写仲裁者做出裁决后，失败方的眼神——不是愤怒，是一种被背叛的震惊。他以为仲裁者是中立的，但裁决显然偏向了另一方。写那个瞬间仲裁者的'中立'面具裂开了一条缝——不是他故意偏袒，而是'中立地判断'本身就是一种不可能的操作：任何判断都是一个方向，而方向不可能是中立的。不要写成阴谋论。",

            tension: "场景锚点：仲裁者在裁决后独自坐在空房间里。他知道自己的判断可能是错的——但他也知道不判断就意味着暴力。悖论不是'公正是否可能'，而是：仲裁这个行为的条件是'我比当事双方更客观'——但没有任何东西能证明这一点。他的权力来自双方的信任，而不是他的正确。不要让仲裁者找到安慰。"
        }
    },
    {
        id: "m4_auth_colonizer",
        name: "外来者", nameEn: "The Outsider Authority",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "从另一个系统带来规则的存在。他的法律不来自你的土地——来自一个你从未去过的地方。",
        defEn: "Bringing rules from another system. Their law comes not from your land but from a place you've never been.",
        core: "A面：外来者带来了本地没有的知识、技术和秩序。有时候'旧的方式'确实在自我毁灭,外部干预拯救了生命。/ B面：但'为你好'的外来秩序摧毁了你定义自己的权利。你的语言、习俗、信仰被重新编码为'落后'。关键张力：如果外来者的方式确实更好——你还有权利拒绝吗？ | 秩序的裂隙(∄A): 外来者声称代表'更高的文明'——但他自己的社会也在解体。他带来的秩序不是'更好的',只是'更强的'。",
        coreEn: "A-side: The outsider brings knowledge, technology, order the local lacks. Sometimes the 'old way' was self-destructing; intervention saved lives. / B-side: 'For your good' external order destroys your right to self-definition. Your language, customs, beliefs are recoded as 'backward.' Key tension: If the outsider's way is genuinely better — do you still have the right to refuse? | Rift(∄A): The outsider claims to represent 'higher civilization' — but their own society is also disintegrating. What they bring isn't 'better,' just 'stronger.'",
        reference: "《阿凡达》以开发为名摧毁原住民世界的矿业公司；《赛德克·巴莱》以'文明教化'为名实施殖民统治。",
        referenceEn: "Mining corporations destroying indigenous worlds in Avatar; colonization in the name of 'civilization' in Seediq Bale.",

        topology: "文明的等级伪装：外来者带来的不是'更好的规则'——而是'能让你觉得自己需要更好的规则'的框架，这个框架本身就是最强的殖民",

        directive: {
            bright: "写外来者带来的东西确实拯救了生命的场景——抗生素、灌溉技术、或者一种让婴儿存活率翻倍的卫生习惯。写母亲抱着活下来的孩子的画面。不要写成'殖民也有好处'的辩护，写一种更真实的困境：这个救命的知识确实来自外面，确实是本地没有的。拒绝它意味着让更多孩子死去。接受它意味着承认一种你没有选择的等级。",

            dark: "写主体开始用外来者的语言思考的瞬间——不是被强迫的，是'自然'的。他在心里算账用的不是母语，做梦用的不是母语。写他第一次意识到这一点时的感觉——不是愤怒，是一种更深的迷失：他的内部已经被重新编码了，而他不记得重新编码是什么时候发生的。不要写成'文化身份觉醒'，写一种无法逆转的既成事实。",

            tension: "场景锚点：主体用外来者的语言写了一首赞美自己故乡的诗——写完后停住了。他在用征服者的工具表达对被征服之地的爱。悖论不是'该不该用这种语言'，而是：他已经不确定用母语是否还能表达同样的精确度。殖民最深的一刀不是让你说他们的语言——是让你觉得母语'不够用'。不要让主体找到解决方案。"
        }
    },
    {
        id: "m4_auth_puppeteer",
        name: "幕后者", nameEn: "The Puppeteer",
        group: "A. 权威的秩序", groupEn: "The Authority",
        def: "隐藏在符号网络最深处、从不露面却编织一切的存在。你不知道他是谁——但他知道你。",
        defEn: "Hidden in the deepest nodes of the symbolic network. Never seen, yet weaving everything. You don't know them — but they know you.",
        core: "A面：幕后者的隐身恰恰是效率的极致——不需要暴力,不需要露面,只需要让正确的信息在正确的时间流到正确的人手里。/ B面：你甚至无法确认他存在。一切可能是阴谋,也可能只是混沌——但你无法分辨。关键张力：如果幕后者控制了一切,你的反抗也是计划的一部分——那么反抗还有意义吗？ | 秩序的裂隙(∄A): 最大的幕后者可能根本不存在。你假设了一个全能操纵者——但也许没有人在操纵,只是你无法接受'这一切毫无计划'。",
        coreEn: "A-side: The puppeteer's invisibility is peak efficiency — no violence, no appearance, just directing the right information to the right person at the right time. / B-side: You can't even confirm they exist. Everything might be conspiracy or mere chaos — you can't tell. Key tension: If the puppeteer controls everything including your rebellion — does resistance still matter? | Rift(∄A): The greatest puppeteer may not exist at all. You assumed an omnipotent manipulator — but perhaps no one is pulling strings; you just can't accept 'none of this has a plan.'",
        reference: "《楚门的世界》编排一切的导演克里斯托弗；《黑客帝国》设计了矩阵又设计了'反抗'的架构师。",
        referenceEn: "Christof orchestrating everything in The Truman Show; the Architect designing both the Matrix and 'resistance' in The Matrix.",

        topology: "控制的不可证伪性：幕后者最强大的地方不在于他控制了一切——而在于你永远无法证明他不存在，因为'没有证据'本身可以被解释为'隐藏得更深'",

        directive: {
            bright: "写一种隐秘的安慰——主体相信有人在幕后操纵一切时的放松感。如果有人在控制，那混乱就是假的，一切都有计划，没有什么是随机的。写主体在灾难面前用'一定有人在背后策划'来获得的安全感。不要写成对阴谋论的嘲讽，写一种真实的心理需要：一个有阴谋的世界比一个纯粹混沌的世界更宜居——因为阴谋意味着还有一个可以被揭露的真相。",

            dark: "写主体试图揭露幕后者时的无限后退——他找到了一个线索，但线索指向另一个线索，指向另一个线索。每揭开一层都有下一层。写主体在第四层或第五层时的身体感觉——不是恐惧，是疲惫。写他开始怀疑：不是'幕后者在哪里'，而是'幕后者是不是我自己制造的？'不要写成解谜故事，写一种认知层面的眩晕。",

            tension: "场景锚点：主体在深夜盯着一面贴满照片和红线的墙。所有线索都指向一个中心——但中心是空的。悖论不是'阴谋存在还是不存在'，而是：如果幕后者存在，你的反抗在他的计划之内；如果不存在，你面对的不是一个敌人而是纯粹的虚空。两种可能同样令人无法承受。不要让主体选择相信哪一种。"
        }
    },
];
