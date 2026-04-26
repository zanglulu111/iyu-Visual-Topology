import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 迷失的幻影 (The Lost) - 16 Items
    // 缺失方向：向内 → 自我。"我是谁？"——身份混乱、真伪不分、自我断裂。
    // ============================================================
    {
        id: "subj_amnesiac",
        name: "失忆者", nameEn: "The Amnesiac",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "失去了过去的人——符号链条断裂，你知道自己活着，却不知道自己是谁。",
        defEn: "One who has lost the past — the chain of signifiers broken; you know you're alive, but not who you are.",
        flaw: "无根", flawEn: "Rootlessness",
        core: "A面：没有记忆可以是重新开始的白纸——过去的债务、伤痕和身份全部清零，你终于可以做一个没有历史的人。/ B面：但白纸也意味着没有根。你不知道自己怕什么、爱什么、从哪里来。一个没有故事的人，连恨都无从恨起。关键张力：如果找回的记忆比遗忘更可怕——你还想记起来吗？ | 缺失 ($): 记忆——没有过去的人，有资格拥有未来吗？",
        coreEn: "A-side: No memory can be a blank page for a fresh start — debts, scars, and identities all reset to zero; you can finally be a person with no history. / B-side: But a blank page also means no roots. You don't know what you fear, love, or where you came from. A person with no story can't even begin to hate. Key tension: If the recovered memories are worse than forgetting — do you still want to remember? | Lacks ($): Memory — does a person without a past deserve a future?",
        reference: "《谍影重重》中丢失过去只剩本能的杰森·伯恩；《百年孤独》失忆症蔓延时的马孔多居民。",
        referenceEn: "Jason Bourne in The Bourne Identity, losing his past and retaining only instincts; the residents of Macondo during the amnesia plague in One Hundred Years of Solitude.",
        topology: "符号链条断裂 → 过去被清零但身体还记得 → '我是谁'的问题没有档案可查",
        directive: {
            bright: "他醒来的时候什么都不记得。但他的身体会做一些他脑子不知道的事——拐弯时自动避开某个方向，闻到某种味道时手会攥紧。写他在空白中发现的自由：没有过去的人不欠任何人。他是一张白纸，而白纸可以写任何东西。不要写成悲情，写一个轻装上路的人。",
            dark: "有人叫了一个名字。他转过头——然后意识到自己不知道为什么转头。写他和自己的身体之间的裂缝：身体记得的东西，脑子已经不认识了。他是一个住在陌生人身体里的人。镜子里那张脸他每天都看，但从来没有认出来过。",
            tension: "他找到了一张旧照片。照片里的人和他长得一样。他看了很久。写他拿着照片时的表情——让观众分不清他是想记起来，还是害怕记起来。也许遗忘是一种保护。也许他忘掉的那些东西，比空白更可怕。不要替他揭开。"
        }
    },
    {
        id: "subj_imposter",
        name: "冒充者", nameEn: "The Imposter",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "窃取或被迫顶替了他人的身份——活在持续的表演中，每一天都在等穿帮。",
        defEn: "Having stolen or been forced to assume another's identity — living in perpetual performance, waiting each day to be exposed.",
        flaw: "被揭穿的恐惧", flawEn: "Paranoia",
        core: "A面：冒充的身份有时比真实的自己更善良、更有价值——谎言不是牢笼，而是你从来没有活过的那种人生。/ B面：但每一次有人叫你的名字，你心里都会抽搐一下——因为那不是你的名字。你越演越好，离真正的自己越远。关键张力：如果冒充的身份比真实的自己更善良——谁才是赝品？ | 缺失 ($): 真实——你戴的面具太久了，底下那张脸还在吗？",
        coreEn: "A-side: The assumed identity is sometimes kinder, more worthy than the true self — the lie isn't a prison but the life you never got to live. / B-side: But every time someone calls your name, something inside flinches — because that isn't your name. The better you perform, the further from yourself you drift. Key tension: If the impersonated self is kinder than the real one — who is the forgery? | Lacks ($): Authenticity — you've worn the mask so long; is the face beneath still there?",
        reference: "《天才雷普利》中杀人并窃取其身份的雷普利；《千钧一发》中买下优秀基因身份的文森特。",
        referenceEn: "Tom Ripley in The Talented Mr. Ripley who murders and steals an identity; Vincent in Gattaca who buys the identity of a genetically superior man.",
        topology: "借来的身份运转得比原版更好 → 表演与自我的边界溶解 → 穿帮的恐惧成为唯一真实的感受",
        directive: {
            bright: "他演得太好了。好到他自己都觉得这就是他。写他在假身份里找到的那种舒服——这个名字比他自己的名字更合身。他在别人的人生里比在自己的人生里更像个人。不要写成欺骗，写一个在谎言中第一次活出了自己的人。",
            dark: "有人叫他的名字。他应答得很自然。但他的心脏跳了一下——因为那不是他的名字。写他每天都在等穿帮的那种慢性紧张：每一个眼神都可能是审视，每一句'你变了'都可能是审判。他的笑容是完美的，完美本身就是破绽。",
            tension: "镜子前。他看着自己。写他和镜子里那个人之间的距离——他已经不确定哪个是面具，哪个是脸了。如果冒充的身份比真实的自己更善良，谁才是赝品？让观众和他一起站在镜子前。不要替他选。"
        }
    },
    {
        id: "subj_twin",
        name: "双生子", nameEn: "The Twin",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "拥有一个完美的或截然相反的镜像——你们共享一张脸，却注定要争夺唯一的位置。",
        defEn: "Possessing a perfect or diametrically opposed mirror — sharing one face, yet fated to fight for the single slot.",
        flaw: "比较焦虑", flawEn: "Comparison",
        core: "A面：镜像的存在可以是彼此照亮——有一个人和你完全一样，意味着你在这世界上永远不是孤独的。/ B面：但镜子也是最残忍的裁判。你的每一个优点都有参照系，每一个缺点都被放大。你活着，不是为了成为自己，而是为了不同于他。关键张力：为了成为独一无二的自己，是否必须消灭那个镜像？ | 缺失 ($): 独立性——你到底是'你'，还是'他的反面'？",
        coreEn: "A-side: A mirror can illuminate — having someone exactly like you means you're never alone in this world. / B-side: But the mirror is also the cruelest judge. Every strength has a reference; every flaw is magnified. You live not to become yourself but to differ from them. Key tension: To become uniquely yourself, must you destroy the reflection? | Lacks ($): Individuality — are you 'you,' or 'the opposite of them'?",
        reference: "《绝代双骄》中小鱼儿与花无缺的宿命镜像对决；电影《致命魔术》中为了魔术共享同一个身份的双胞胎兄弟。",
        referenceEn: "The fated mirror rivalry of Xiaoyuer and Hua Wuque in Handsome Siblings; the twin brothers sharing a single identity for magic in The Prestige.",
        topology: "镜像占据了参照系的位置 → 自我只能通过与镜像的差异来定义 → 独立意味着消灭镜像",
        directive: {
            bright: "他们长得一模一样。但他知道自己哪里不同。写他在镜像的陪伴中找到的确定——世界上有一个人和他共享同一张脸，这让他永远不是孤独的。他的独特不是天生的，是他从对方身上一笔一笔划出来的。不要写成竞争，写一种互相照亮。",
            dark: "所有人都在比较他们。他的每一个优点都有参照系，每一个缺点都被放大。写他活在镜像旁边的那种窒息——他不是在成为自己，他是在成为'不是他的那个'。他的形状是对方的反面。消灭了镜像之后他才发现：自己的轮廓也跟着消失了。",
            tension: "他们面对面站着。一模一样的脸。写那个对视——让观众看见两个人都在对方眼睛里找自己。他们到底是彼此的证据还是彼此的威胁？让观众在两张相同的脸之间找不到答案。"
        }
    },
    {
        id: "subj_shapeshifter",
        name: "变形者", nameEn: "The Shapeshifter",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "可以变成任何人，但在无穷的面孔中忘记了自己原本的模样。",
        defEn: "Can shift into anyone, but among infinite faces has forgotten the original form.",
        flaw: "面具粘连", flawEn: "Mask Adhesion",
        core: "A面：变形是最强大的生存才能——在任何场合你都可以成为最合适的那个人。这种适应力让你无往不利。/ B面：但当你卸下所有面具，镜子里是一张空白的脸。你可以是任何人，因此你谁都不是。关键张力：如果所有面具都比素颜更受欢迎——那张被遗忘的脸还有存在的必要吗？ | 缺失 ($): 本相——你记得自己最初的模样吗？",
        coreEn: "A-side: Shapeshifting is the most powerful survival talent — in any situation you can become the most fitting person. That adaptability makes you invincible. / B-side: But when you remove all masks, the mirror shows a blank face. You can be anyone, therefore you are no one. Key tension: If every mask is more welcome than the bare face — is the forgotten face still necessary? | Lacks ($): True face — do you remember what you originally looked like?",
        reference: "《西游记》中无数次化作他人容貌的白骨精；《X战警》中深陷于他人容貌而迷失自我归属的魔形女。",
        referenceEn: "The White Bone Demon in Journey to the West who constantly shifts forms; Mystique in X-Men who loses her sense of belonging while wearing others' faces.",
        topology: "面孔无限可替换 → 适应力成为生存的最强武器 → 所有面具卸下后镜子里是空白",
        directive: {
            bright: "他走进任何房间都能变成那个房间最需要的人。写他的适应力——这不是伪装，是一种天赋。他比任何人都会读空气，比任何人都快地变成对的形状。不要写成虚假，写一个在千变万化中展现才能的人。他的流动性本身就是力量。",
            dark: "所有面具都卸下了。他看着镜子。写镜子里那张脸——空白的。不是丑也不是美，是没有特征。他可以是任何人，因此他谁都不是。他连自己最初长什么样都不记得了。那张被遗忘的脸是否还有存在的必要？",
            tension: "有人说'做你自己就好'。他愣住了。写那个愣——不是感动，是茫然。'自己'这个词对他来说是一个没有对应物的能指。他不知道那是什么。让观众看见一个拥有一千张脸却找不到一张属于自己的脸的人。"
        }
    },
    {
        id: "subj_sleeper",
        name: "沉睡者", nameEn: "The Sleeper Agent",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "被植入了另一重人格或使命——日常生活的温暖是真实的，但地板下埋着一颗自己不知道的炸弹。",
        defEn: "Implanted with another personality or mission — the warmth of daily life is real, but a bomb lies beneath the floor without one's knowledge.",
        flaw: "受控", flawEn: "Programmed",
        core: "A面：不知道自己是炸弹，至少可以正常地活着——无知在这里是一种珍贵的庇护所。你真心相信自己的笑、自己的爱。/ B面：但当信号响起，那些笑和爱会被证实只是伪装的一部分。你的整个人生——包括你爱过的人——都只是掩护。关键张力：如果唤醒后的那个人才是'真正的我'——之前的人生算什么？ | 缺失 ($): 自由意志——你以为的选择，有哪一个是你自己做的？",
        coreEn: "A-side: Not knowing you're a bomb at least lets you live normally — ignorance here is a precious shelter. You genuinely believe your own laughter and love. / B-side: But when the signal sounds, that laughter and love are proven to be part of the disguise. Your entire life — including those you loved — was merely cover. Key tension: If the awakened self is the 'real me' — what was the life before? | Lacks ($): Free will — among all the choices you thought you made, which one was truly yours?",
        reference: "《满洲候选人》中被洗脑植入刺杀指令的战俘；《进击的巨人》中潜伏调查兵团多年才暴露真容的铠之巨人。",
        referenceEn: "The brainwashed POW implanted with assassination commands in The Manchurian Candidate; the Armored Titan in Attack on Titan hiding in the Scout Regiment for years before revealing his true identity.",
        topology: "日常人格下面埋着另一个程序 → 温暖是真实的，但地板是假的 → 信号响起时两个'我'互相否定",
        directive: {
            bright: "他过着正常的生活。他的笑是真的，他的爱是真的。写他在不知道自己是炸弹的日子里那种纯粹——无知在这里是一种庇护所。他真心相信自己就是这个人。不要写成伪装，写一个活在真实幸福里的人。那个幸福是真的，只是地基不是。",
            dark: "信号响了。他的眼神变了。写那个变化的瞬间——一秒之前还在笑的脸，一秒之后成了另一个人。他之前的人生——包括爱过的人——全部被证实只是掩护。让观众感受到一种最深的恐惧：你以为的选择，没有一个是你自己做的。",
            tension: "他在厨房做饭。很日常的画面。但镜头停得久了一点。写这种日常里的不安——让观众开始怀疑这个温暖的人底下是否藏着什么。他自己不知道。这才是最可怕的：炸弹不知道自己是炸弹。"
        }
    },
    {
        id: "subj_actor",
        name: "体验派演员", nameEn: "The Method Actor",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "为了扮演角色而献祭自我——直到分不清戏里戏外，不知道哪一个才是真的自己。",
        defEn: "Sacrificing the self to inhabit a role — until the line between performance and reality dissolves, and you no longer know which self is real.",
        flaw: "精神分裂", flawEn: "Schizophrenia",
        core: "A面：入戏可以是艺术的巅峰——只有在扮演别人时你才感到完整，才触碰到某种比日常更真实的东西。/ B面：但角色不会在谢幕后离开。它住在你体内，蚕食原来的房客。有一天你发现，不演戏的时候，你不知道该怎么做自己。关键张力：如果只有在扮演别人时才感到真实——那个'别人'和'我'，谁更真？ | 缺失 ($): 现实感——你活在几个人的身体里？",
        coreEn: "A-side: Immersion can be the peak of art — only when playing someone else do you feel complete, touching something more real than the everyday. / B-side: But the role doesn't leave after the curtain falls. It lives inside you, consuming the original tenant. One day you realize that offstage, you don't know how to be yourself. Key tension: If you only feel real when playing another — who is more real, the 'other' or the 'I'? | Lacks ($): Reality — how many bodies are you living in?",
        reference: "《霸王别姬》中'不疯魔不成活'的程蝶衣；《黑天鹅》中为了完美扮演天鹅而撕裂自身精神的妮娜。",
        referenceEn: "Cheng Dieyi in Farewell My Concubine, who lives 'no madness, no survival'; Nina in Black Swan, tearing her own mind apart to perfectly play the swan.",
        topology: "角色入侵了宿主 → 只有在扮演别人时才感到完整 → 谢幕后角色不离开",
        directive: {
            bright: "他在台上的时候比在台下活着。写他入戏的那种光——只有在扮演别人时他才触碰到某种比日常更真实的东西。角色让他完整。不要写成精神病，写一个在艺术中找到了比现实更浓烈的存在方式的人。他的疯是他的才华。",
            dark: "戏散了。他站在后台卸妆。但角色没有跟着卸掉。写他和角色之间已经混掉的边界——他说话的方式、走路的姿态，已经不知道哪些是他的，哪些是角色留下的。原来的房客被蚕食了。他不演戏的时候不知道该怎么做自己。",
            tension: "有人问他'你到底是谁'。他停了一下。写那个停顿——不是在想怎么回答，是真的不知道。他的身体里住着好几个人，他们都在抢话筒。让观众看见一个在多重身份之间摆荡的人。谁更真？不要替他判断。"
        }
    },
    {
        id: "subj_liar",
        name: "虚构者", nameEn: "The Fabricator",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "无法停止编造故事——用虚构为残酷的世界和残破的自己加上一层温柔的滤镜。",
        defEn: "Unable to stop fabricating stories — filtering both the cruel world and the broken self through a gentle fiction.",
        flaw: "虚构依赖", flawEn: "Mythomania",
        core: "A面：谎言可以是让残酷现实变得可以忍受的温柔外衣——你替世界补上了缺失的那一页美好，这种虚构是一种深沉的善意。/ B面：但编织太久，你自己也分不清哪一部分是真的了。你说的每一句话都可能是谎言，包括'我爱你'。关键张力：如果谎言比真相更善良——说谎是罪，还是慈悲？ | 缺失 ($): 诚实——你讲的故事里，还有多少是真的？",
        coreEn: "A-side: Lies can be a gentle coat making harsh reality bearable — you patched in the missing page of beauty; that fabrication is a deep kindness. / B-side: But weave too long and you can't tell what's real anymore. Every word you say might be a lie, including 'I love you.' Key tension: If the lie is kinder than the truth — is lying a sin or mercy? | Lacks ($): Honesty — in all the stories you tell, how much is still true?",
        reference: "《堂吉诃德》中活在骑士幻想谎言里的老乡绅；《大鱼》中一生都在用奇幻谎言美化残酷现实的父亲。",
        referenceEn: "The old squire living in knightly fictional lies in Don Quixote; the father in Big Fish, beautifying cruel reality with fantastic lies all his life.",
        topology: "虚构覆盖在现实之上 → 谎言从保护工具变成唯一的栖居方式 → 真假的边界被编织者自己弄丢了",
        directive: {
            bright: "他讲的故事比真相好听。写他编织的那种温柔——他替残酷的世界补上了缺失的那一页美好。他的谎言让人笑，让人相信还有好事会发生。不要写成病态，写一个用虚构让世界变得可以忍受的人。他的故事是真正的善意。",
            dark: "他已经分不清哪句是真的了。包括'我爱你'。写他被自己的编织缠住的状态——他说了太多版本的自己，原版已经被埋在最底下了。所有人都喜欢他讲的故事，但没有人知道他的真实。他的嘴是满的，他的人是空的。",
            tension: "他在讲一个故事。讲到一半他停了。写那个停——让观众猜他是忘了下面该编什么，还是突然碰到了一块真的记忆。他自己的眼睛里闪过什么。他继续讲了。那个闪过的东西是什么，不要说。"
        }
    },
    {
        id: "subj_puppet",
        name: "傀儡", nameEn: "The Puppet",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "名义上居高位，实际被幕后之手操纵——王座是最精致的牢房。",
        defEn: "Nominally in a high position, but manipulated by unseen hands — the throne is the most exquisite prison cell.",
        flaw: "软弱", flawEn: "Weakness",
        core: "A面：王座至少是一种保护——没人敢动你，你享有体面的衣食和虚假的尊重。在所有不自由里，这已经是最舒适的一种。/ B面：但每一个决定都不是你做的，每一句话都是别人写好的台词。你是一具穿着龙袍的木偶，连叹气的节奏都是被安排的。关键张力：当操纵者松手的那一刻——傀儡是站起来，还是瘫倒？ | 缺失 ($): 权力——你坐在最高处，却是最不自由的那个人。",
        coreEn: "A-side: The throne is at least protection — no one dares touch you; you enjoy respectable food and false respect. Among all unfreedoms, it's the most comfortable. / B-side: But every decision isn't yours; every word is someone else's script. You're a puppet in a dragon robe; even the rhythm of your sighs is arranged. Key tension: The moment the puppeteer lets go — does the puppet stand or collapse? | Lacks ($): Power — you sit at the highest point, yet you are the least free.",
        reference: "晚清宫廷中被慈禧太后完全把控的光绪帝；《沙丘》中名义统治宇宙、实则受制于星际公会的皇帝。",
        referenceEn: "Emperor Guangxu completely controlled by Empress Dowager Cixi in the late Qing court; the Emperor in Dune, nominally ruling the universe but subject to the Spacing Guild.",
        topology: "名义上的最高位与实际上的最低自由重合 → 每一个决定都是别人写好的台词 → 操纵者松手时才暴露主体是否存在",
        directive: {
            bright: "他坐在最高的位置上。没人敢碰他。写他在王座上找到的那种安全——至少他有体面的衣食和虚假的尊重。在所有不自由里，这已经是最舒适的一种。不要写成可怜，写一个在金色牢笼里找到了某种平静的人。",
            dark: "他开口说话。但那些话不是他的。写他作为台词朗读机的精确——他的表情、语气、停顿都是幕后那只手安排的。连他叹气的节奏都是被设计的。让观众从他的尊贵里读出一种穿着龙袍的空：王座是最精致的棺材。",
            tension: "操纵者走了。他一个人坐在椅子上。写他独处的那一刻——他的手不知道放在哪里，他的嘴不知道该不该说话。让观众猜：他是终于自由了，还是发现自己从来没有学过怎么站起来。"
        }
    },
    {
        id: "subj_doll",
        name: "玩偶", nameEn: "The Doll",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "被精心打扮和爱护，但从未被当作有灵魂的主体对待——你被爱着，但那不是给'你'的爱。",
        defEn: "Carefully dressed and cherished, yet never treated as a subject with a soul — you are loved, but the love isn't for 'you.'",
        flaw: "被动", flawEn: "Passivity",
        core: "A面：被宠爱可以是温暖的庇护——有人替你遮风挡雨，你只需要漂亮地微笑就好。不需要选择，不需要承担。/ B面：但庇护的代价是窒息。你不被允许有自己的意愿。当玩偶突然说出'不'的那一刻，拥有者的爱会瞬间变成恨。关键张力：当玩偶说'不'——主人的爱会瞬间变成什么？ | 缺失 ($): 生命——你是被爱的，但你不是活的。",
        coreEn: "A-side: Being cherished can be warm shelter — someone shields you from wind and rain; you just need to smile prettily. No choices, no burdens. / B-side: But the price of shelter is suffocation. You're not allowed your own will. The moment the doll says 'no,' the owner's love turns instantly to hate. Key tension: When the doll says 'no' — what does the owner's love become? | Lacks ($): Life — you are loved, but you are not alive.",
        reference: "易卜生《玩偶之家》中觉醒前被当做精致宠物看待的娜拉；《阿丽塔》中曾经只剩毫无记忆的精美机甲躯壳的少女。",
        referenceEn: "Nora in Ibsen's A Doll's House, treated as an exquisite pet prior to awakening; the girl in Alita, once reduced to an amnesic, beautiful mechanical shell.",
        topology: "被爱但不被当作主体 → 庇护的代价是意愿的取消 → 说出'不'的瞬间爱变成恨",
        directive: {
            bright: "有人替她做了所有的决定。她只需要笑。写她在被宠爱中找到的那种轻——不需要选择，不需要承担，世界在她周围是柔软的。不要写成囚禁，写一个在庇护中感到安全的人。她的微笑是真的，她的快乐也是真的——只是不完全是她的。",
            dark: "她说了一个'不'。对方的脸变了。写那个变化——一秒之前还是温柔的，一秒之后是冰的。让观众看见'爱'在接触到拒绝时暴露出来的那层底色：那不是爱，是占有。她之前的所有温暖都是有条件的。条件是：你不能有自己的意愿。",
            tension: "有人在给她梳头。她看着镜子。写她的眼睛——让观众分不清那是一个被宠爱的人的满足，还是一个被安排的人的空。她自己也许也分不清。温柔的手和锁链的区别，有时候只在你想起身的那一刻才能感觉到。"
        }
    },
    {
        id: "subj_cyborg",
        name: "忒修斯之躯", nameEn: "The Reassembled",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "不断将异质的观念、文化或外物嵌入自身——在渐进替换中，最初的'我'一点点消失了。",
        defEn: "Constantly embedding foreign ideas, cultures, or objects into the self — through gradual replacement, the original 'I' vanishes piece by piece.",
        flaw: "本源流失", flawEn: "Loss of Origin",
        core: "A面：每一次替换都是一次进化——你比任何坚守原件的人都更丰富、更强大。混血的复杂性本身就是一种力量。/ B面：但当最后一块原件被替换，你变成了一艘没有任何旧木板的忒修斯之船。进化的尽头是一个全新的东西——但'你'已经不在里面了。关键张力：那个最初的'我'死于何时——第一次替换？最后一次？还是从未真正存在过？ | 缺失 ($): 纯粹的原初性——你是升级后的自己，还是一个陌生人？",
        coreEn: "A-side: Every replacement is an evolution — you're richer and more powerful than anyone clinging to originals. Hybrid complexity is itself a strength. / B-side: But when the last original piece is replaced, you've become a Ship of Theseus with no old planks. Evolution's endpoint is something entirely new — but 'you' are no longer inside. Key tension: When did the first 'I' die — at the first swap? The last? Or did it never truly exist? | Lacks ($): Purity — are you an upgraded self, or a stranger?",
        reference: "《西游记》中剔骨还父并用莲花拼凑出非人肉身的哪吒；《攻壳机动队》中除大脑外彻底义体化、不断质问灵魂所在的草薙素子。",
        referenceEn: "Nezha in Journey to the West, who returns his bones to his father and reconstructs a non-human body from lotus; Motoko Kusanagi in Ghost in the Shell, fully cyberized except for her brain, constantly questioning the location of her soul.",
        topology: "组成部分被逐一替换 → 每次替换既是进化也是丧失 → 最后一块原件换掉时'我'死于哪一步不可回答",
        directive: {
            bright: "他比以前更强了。每一次替换都是升级。写他在混血中找到的力量——他比任何纯粹的人都厚，他的身体里装着多个世界的密码。不要写成丧失，写一个在进化中变得更丰富的人。他的复杂性本身就是独特。",
            dark: "他看着自己的手。那不是他原来的手。他的腿、他的想法、他说话的方式——全换过了。写他和自己之间的陌生感：镜子里站着一个由别人零件拼成的人。原件已经没有了，连回去比对的地方都不存在。",
            tension: "有人问他'你还是你吗'。他想了很久。写那个'想'——不是犹豫，是真的在检查。他翻了翻自己身上的零件，想找一块最初的。找不到了。让观众和他一起面对：'我'死于第一次替换还是最后一次？不要给答案。"
        }
    },
    {
        id: "subj_memory_thief",
        name: "记忆大盗", nameEn: "Memory Thief",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "用他人的记忆或经历来填充自身的空白——偷来的故事比没有故事好。",
        defEn: "Filling one's own void with others' memories or experiences — a stolen story is better than no story at all.",
        flaw: "寄生", flawEn: "Parasitism",
        core: "A面：借来的记忆可以是救命的绳索——至少你不再是空的，至少镜子里有一个有故事的人望着你。/ B面：但那些故事不是你的。你知道阳光洒在海面上的感觉，却从未真正站在过海边。你的幸福是偷来的，拿掉它你就是一具空壳。关键张力：当偷来的幸福比自己的真实更甜——还有必要归还吗？ | 缺失 ($): 经历——你的人生是活出来的，还是借来的？",
        coreEn: "A-side: Borrowed memories can be a lifeline — at least you're no longer empty; at least the mirror shows someone with a story. / B-side: But those stories aren't yours. You know how sunlight feels on the sea, yet you've never stood on a shore. Your happiness is stolen; remove it and you're a hollow shell. Key tension: When stolen happiness is sweeter than your own truth — any reason to return it? | Lacks ($): Experience — is your life lived, or borrowed?",
        reference: "《银翼杀手2049》中依靠植入虚假童年记忆来支撑生命的复制人K；《半生缘》中借用妹妹人生与名分的曼璐。",
        referenceEn: "Replicant K in Blade Runner 2049, relying on implanted fake childhood memories to support his life; Manlu in Eighteen Springs borrowing her sister's life and status.",
        topology: "用他人的经历填充自身的空白 → 借来的故事比没有故事好 → 拿掉借来的部分之后是空壳",
        directive: {
            bright: "他知道阳光洒在海面上的感觉。虽然他从未去过海边。写他在借来的记忆中找到的温度——至少他不再是空的了，至少镜子里有一个有故事的人。不要写成寄生，写一个用别人的记忆给自己搭了一个临时庇护所的人。那些记忆救了他。",
            dark: "那些记忆不是他的。他知道。写他摸着借来的幸福时的那种手感——像隔着一层塑料膜在触碰。阳光是暖的，但暖的不是他的皮肤。他的人生是别人的影印件。拿掉那些借来的东西，他就是一具白色的空壳。连悲伤都是复制的。",
            tension: "有人跟他说起一段他'经历过'的往事。他笑着附和。写他的笑——完美的、合拍的、带着恰到好处的怀念。但让观众开始怀疑：他到底是在回忆，还是在表演回忆？他自己还分得清吗？"
        }
    },
    {
        id: "subj_time_traveler",
        name: "时空错位者", nameEn: "The Anachronism",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "精神与价值观永远停留在另一个时代——你活在此刻，但你的灵魂不属于这里。",
        defEn: "Spirit and values forever lodged in another era — you live in this moment, but your soul doesn't belong here.",
        flaw: "时代错位", flawEn: "Displacement",
        core: "A面：错位可以是一种独特的视角——你看见了所有当代人看不见的东西。站在时间的裂缝里，你拥有一种先知般的清醒。/ B面：但没有人理解你。你说的每一句话都像外语，你珍视的每一样东西都已经被标注为过时。你活着，但像一个鬼魂。关键张力：坚守旧信念的人——是守护者，还是遗物？ | 缺失 ($): 当下实感——你活在哪个世纪？",
        coreEn: "A-side: Displacement can be a unique perspective — you see what no one in this age can. Standing in time's fissure, you have a prophet's clarity. / B-side: But no one understands you. Every word you say sounds foreign; everything you cherish is already labeled obsolete. You live, but like a ghost. Key tension: Is the one clinging to old beliefs a guardian or a relic? | Lacks ($): Presence — which century do you live in?",
        reference: "《堂吉诃德》中仍以中世纪骑士法则活在庸俗现实里的疯乡绅；《降临》里同时感知过去未来、跨越因果却深陷当下孤独的语言学家。",
        referenceEn: "The mad squire living by medieval knightly codes in vulgar reality in Don Quixote; the linguist in Arrival perceiving past and future simultaneously, transcending causality yet drowning in present loneliness.",
        topology: "精神锚定在另一个时代 → 身体在此刻但灵魂不属于这里 → 每一句话都像外语",
        directive: {
            bright: "他看见了所有当代人看不见的东西。写他站在时间裂缝里的那种清醒——他的眼睛属于另一个世纪，这让他拥有一种先知般的视角。不要写成落伍，写一个因为站在时间之外而拥有了独特目光的人。他的过时恰恰是他的锐利。",
            dark: "没有人理解他。他说的每一句话都像外语。写他和周围世界之间那层看不见的玻璃——他在，但他不属于。他珍视的东西都被标注了'过时'。他活着，但像一个错置在别人时间线里的鬼魂。",
            tension: "有人跟他聊天。他微笑着点头。但他的眼睛在看别的地方——一个只有他能看见的时代。写他的微笑和他的目光之间的距离。让观众猜他到底是一个看得更远的人，还是一个已经走不回来的人。"
        }
    },
    {
        id: "subj_hallucination",
        name: "幻觉", nameEn: "The Hallucination",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "可能是别人想象出来的人格或记忆碎片——你的存在依附于另一个意识的梦境。",
        defEn: "Potentially a personality or memory fragment imagined by someone else — your existence depends on another consciousness's dream.",
        flaw: "虚构性", flawEn: "Fictionality",
        core: "A面：被想象可以是一种被需要的证明——有人如此渴望你的存在，以至于用意念把你召唤出来。你是某个人最深切的需要。/ B面：但你的存在完全依附于做梦的人。他醒了，你就灭了。你没有自己的时间线，没有自己的记忆，一切都是借来的。关键张力：如果做梦的人醒了——我消失前有没有资格恐惧？ | 缺失 ($): 实体——你是被需要的，但你可能不存在。",
        coreEn: "A-side: Being imagined can be proof of being needed — someone craved your existence so desperately they summoned you with their mind. You are someone's deepest need. / B-side: But your existence rests entirely on the dreamer. When they wake, you vanish. You have no timeline, no memories of your own; everything is borrowed. Key tension: If the dreamer wakes — do I have the right to fear before I vanish? | Lacks ($): Substance — you are needed, but you may not exist.",
        reference: "《搏击俱乐部》里作为主角破坏欲投射而凭空诞生的泰勒；《美丽心灵》中纳什幻想出的室友与特工。",
        referenceEn: "Tyler Durden in Fight Club, born out of thin air as a projection of the protagonist's destructive urges; John Nash's hallucinated roommate and agents in A Beautiful Mind.",
        topology: "存在依附于另一个意识的需要 → 被想象即被需要 → 做梦者醒来时主体消失",
        directive: {
            bright: "有人需要他——需要到用意念把他召唤出来。写他作为被需要的证据的那种存在感——他是某个人最深切的渴望的形状。不要写成虚假，写一个因为被渴望而存在的人。他的存在本身就是爱的证据，即使这个爱是单方面的。",
            dark: "做梦的人快要醒了。他感觉到了。写他在消失边缘的状态——他的手开始变透明，他的声音开始变远。他没有自己的时间线，他的一切都是借来的。做梦的人醒了，他就灭了。让观众感受到一种最轻的恐惧：不是死亡，是从未存在过。",
            tension: "他站在做梦者面前。他不确定对方看不看得见他。写他试图被看见的那个动作——伸出手，或者喊了一声名字。让观众和他一起悬在那个瞬间：我到底是真的还是被想象的？这个问题没有可以检验的方法。"
        }
    },
    {
        id: "subj_glitch",
        name: "秩序错谬者", nameEn: "The Anomaly",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "存在于现有规则与因果之外的多余之人——你的存在本身就是对整个秩序的疑问。",
        defEn: "A surplus person existing outside established rules and causality — your very being is a question to the entire order.",
        flaw: "非正统性", flawEn: "Illegitimacy",
        core: "A面：不属于任何剧本可以是唯一的自由——所有规则都管不了你，因为你本来就不在它们的目录里。你是系统的例外。/ B面：但例外意味着被追杀。秩序无法容忍解释不了的东西——你不是被排斥，你是被标记为需要删除的对象。关键张力：世界试图抹除你——是因为你是bug，还是因为你是它不愿面对的真相？ | 缺失 ($): 容身合法性——你没有存在的理由，但你偏偏存在着。",
        coreEn: "A-side: Belonging to no script can be the only true freedom — no rule governs you because you were never in their registry. You are the system's exception. / B-side: But exception means being hunted. Order cannot tolerate what it can't explain — you're not just excluded; you're flagged for deletion. Key tension: The world tries to erase you — because you're a bug, or a truth it refuses to face? | Lacks ($): Legitimacy — you have no reason to exist, yet here you are.",
        reference: "陀思妥耶夫斯基《地下室手记》中深陷怨怼、无法融入任何社会的地下室人；《黑客帝国》中失去目的本该被删却拒绝消亡的觉醒程序。",
        referenceEn: "The Underground Man in Dostoevsky's Notes from Underground, resentful and unable to integrate into society; the awakened programs in The Matrix that refuse deletion despite losing their purpose.",
        topology: "存在于规则目录之外 → 秩序无法解释也无法容忍 → 被追杀不是因为有罪而是因为不可归类",
        directive: {
            bright: "所有规则都管不了他。他不在任何目录里。写他在例外状态中找到的自由——没有剧本约束他，因为从来就没有为他写过剧本。他是系统的漏洞，而漏洞是唯一不受控的空间。不要写成受害者，写一个在规则之外找到了唯一真正自由的人。",
            dark: "系统要删除他。不是因为他做了什么——是因为他的存在本身无法被解释。写他被追杀的那种冷：他不是罪犯，他是bug。秩序无法容忍解释不了的东西。他没有犯罪，他的罪是存在。让观众感受到一种比迫害更深的恐惧：被否认存在的合法性。",
            tension: "有人盯着他看了很久，表情困惑。'你是谁？'写他面对这个问题时的沉默——他不知道该怎么回答。他是bug还是真相？他是需要被修复的错误，还是系统不愿意面对的答案？让观众自己选。"
        }
    },
    {
        id: "subj_avatar",
        name: "理想外壳", nameEn: "The Idealized Shell",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "为自己精心构建的社交面具——外在光鲜而内在与真实自我深度割裂。",
        defEn: "A meticulously crafted social mask — glamorous on the outside, deeply severed from the true self within.",
        flaw: "二元对立", flawEn: "Duality",
        core: "A面：面具可以是通往更好世界的桥梁——戴上它，你才被接纳、被尊重、被爱。面具给了你真实的你永远得不到的东西。/ B面：但面具越成功，真实的你就越萎缩。有一天你发现所有人爱的都是面具那面的你——摘下它，你就什么都不是了。关键张力：当所有人都爱着面具——摘下它是勇气，还是自毁？ | 缺失 ($): 本真统一——你和你的面具，谁更真实？",
        coreEn: "A-side: A mask can be a bridge to a better world — only by wearing it are you accepted, respected, loved. The mask gives you what the real you never could. / B-side: But the more successful the mask, the more the real you shrinks. One day you realize everyone loves the masked version — remove it and you're nothing. Key tension: When everyone loves the masked you — is unmasking courage or self-destruction? | Lacks ($): Unity — you and your mask, which one is more real?",
        reference: "《双城记》中替完美情敌赴死的浪子卡顿（自认为是高尚者的卑劣代体）；《头号玩家》里在现实中蛰伏而在绿洲里充当英雄的主角。",
        referenceEn: "Sydney Carton in A Tale of Two Cities, dying for his perfect rival (seeing himself as a base surrogate for the noble); the protagonist in Ready Player One, hiding in reality while playing a hero in the OASIS.",
        topology: "外壳被精心构建 → 面具越成功真实的自己越萎缩 → 所有人都爱面具，摘下它就什么都不是",
        directive: {
            bright: "他的社交形象是完美的。写他戴上面具之后的从容——面具给了他真实的他永远得不到的东西：接纳、尊重、爱。他在面具里比在自己里更自在。不要写成虚伪，写一个通过面具第一次被世界接受的人。面具是他通往更好世界的桥。",
            dark: "所有人爱的都是那个面具。他知道。写他夜里一个人时的状态——面具摘下来了，镜子里那个人他不认识。真实的他已经缩得很小了。面具越成功，他就越透明。有一天面具会完全长进皮肤里，下面那个人会彻底消失。",
            tension: "有人说'我喜欢真实的你'。他微笑。但他不知道'真实的我'是什么。写他的微笑里那种空——不是感动，是困惑。他已经分不清哪一层是面具，哪一层是脸了。让观众和他一起面对这个问题。不要替他找到那张脸。"
        }
    },
    {
        id: "subj_chimera",
        name: "割裂的缝合体", nameEn: "The Patchwork",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "由截然不同的身份、信念或文化碎片拼凑而成——各部分在体内持续角力，永远达不成和解。",
        defEn: "Patched together from drastically different identities, beliefs, or cultural fragments — each part ceaselessly wrestling within, never reaching reconciliation.",
        flaw: "自我排异", flawEn: "Internal Rejection",
        core: "A面：拼凑可以是丰富——你比任何纯粹的人都厚，你的身体里装着多个世界的密码。这种复杂性是一种独特的力量。/ B面：但各部分之间的边界从未愈合。它们在你体内打架，你同时信仰两种互相矛盾的东西，同时渴望两个互相排斥的方向。关键张力：各部分之间——是否存在一种不需要统一的共处方式？ | 缺失 ($): 身份自洽——你是一个人，还是好几个人的战场？",
        coreEn: "A-side: Being patched together can be richness — you're thicker than any purebred; your body holds the codes of multiple worlds. That complexity is a unique strength. / B-side: But the seams between parts never heal. They fight inside you; you simultaneously believe in two contradictory things, crave two mutually exclusive directions. Key tension: Is there a way for the parts to coexist without needing unification? | Lacks ($): Harmony — are you one person, or the battlefield of several?",
        reference: "《红与黑》中既贪恋上流社会又死守平民自尊而自我撕裂的于连；玛丽·雪莱《弗兰肯斯坦》中由死尸拼凑极受排斥的造物。",
        referenceEn: "Julien Sorel in The Red and the Black, tearing himself apart between lusting for high society and holding on to plebeian pride; Frankenstein's creature in Mary Shelley's novel, made of corpses and loathed.",
        topology: "互相矛盾的碎片被缝合在同一个身体里 → 各部分之间的边界从未愈合 → 统一是不可能的但分裂也活不了",
        directive: {
            bright: "他比任何纯粹的人都厚。他的身体里装着好几个世界。写他在矛盾中找到的丰富——他能同时理解两种互相排斥的东西，这让他拥有一种别人没有的宽度。不要写成精神分裂，写一个在复杂中找到了独特力量的人。",
            dark: "他体内的各个部分在打架。他同时信仰两种互相矛盾的东西，同时渴望两个互相排斥的方向。写他在内部战争中的消耗——他不是在成长，他是在被撕裂。缝合的痕迹从来没有愈合过。他是一个人，也是好几个人的战场。",
            tension: "他做了一个决定。然后他推翻了它。然后他又做了一遍。写这种反复——不是犹豫，是体内不同的部分在轮流接管。让观众看见一个在每一个路口都被自己的另一半拉回去的人。他不需要外部的敌人，他自己就够了。"
        }
    },
    {
        id: "subj_loop_prisoner",
        name: "困在循环中的人", nameEn: "The Loop Prisoner",
        group: "B. 迷失的幻影", groupEn: "The Lost",
        def: "被困在同一段时间、同一个事件或同一种模式里——每次以为走出来了，发现又回到了原点。不是命运在重复，是你在重复。",
        defEn: "Trapped in the same stretch of time, the same event, or the same pattern — every time you think you've broken free, you're back at the starting point. It's not fate repeating; it's you.",
        flaw: "无法终止", flawEn: "Inability to End",
        core: "A面：循环可以是一所隐形学校——每次重来都让你多看见一点之前错过的东西，你在重复中变得更接近本质。/ B面：但第一千次之后还是走不出去呢？你的人生不是一条线——是一个圈。关键张力：你在循环中是在进化——还是宇宙在惩罚你？ | 缺失 ($): 出口——你走了很远，但你一直在同一个地方。",
        coreEn: "A-side: A loop can be an invisible school — each repetition lets you see what you missed, bringing you closer to essence. / B-side: But what if after the thousandth time you still can't get out? Your life isn't a line — it's a circle. Key tension: Are you evolving in the loop — or is the universe punishing you? | Lacks ($): Exit — you've traveled far, but you've been in the same place all along.",
        reference: "《土拨鼠之日》菲尔在无数次重复中从厌世变成了一个真正的好人；《恐怖游轮》中杰西每次以为自己逃出来了，却发现自己刚刚走进了下一次循环。",
        referenceEn: "Phil transforming from misanthrope to a genuine good person through infinite repetitions in Groundhog Day; Jess thinking she's escaped each time, only to find she's entering the next loop in Triangle.",
        topology: "终点与起点重合 → 每次以为走出来了又回到原点 → 不是命运在重复，是主体在重复",
        directive: {
            bright: "他又回到了起点。但这次他看见了上次没注意到的东西。写他在循环中找到的进步——每一次重来都让他更接近本质。他在重复中不是退化了，是在打磨。不要写成诅咒，写一个在无限重复中逐渐变得更清醒的人。循环是一所隐形学校。",
            dark: "第一千次了。还是走不出去。写他发现自己的人生不是一条线而是一个圈时的那种下坠感——他的挣扎不是在推进，是在给循环提供燃料。他越用力越走不出去。让观众感受到一种比监禁更深的绝望：出口不存在。",
            tension: "他站在一个路口。他来过这里。他记得。写他面对似曾相识的那种表情——让观众分不清他是要做出不同的选择，还是已经认命了。他到底是在循环中进化，还是宇宙在惩罚他？把这个问题留在他的脚步里。"
        }
    }
];

