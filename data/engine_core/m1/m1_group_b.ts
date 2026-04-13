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
        referenceEn: "Jason Bourne in The Bourne Identity, losing his past and retaining only instincts; the residents of Macondo during the amnesia plague in One Hundred Years of Solitude."
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
        referenceEn: "Tom Ripley in The Talented Mr. Ripley who murders and steals an identity; Vincent in Gattaca who buys the identity of a genetically superior man."
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
        referenceEn: "The fated mirror rivalry of Xiaoyuer and Hua Wuque in Handsome Siblings; the twin brothers sharing a single identity for magic in The Prestige."
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
        referenceEn: "The White Bone Demon in Journey to the West who constantly shifts forms; Mystique in X-Men who loses her sense of belonging while wearing others' faces."
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
        referenceEn: "The brainwashed POW implanted with assassination commands in The Manchurian Candidate; the Armored Titan in Attack on Titan hiding in the Scout Regiment for years before revealing his true identity."
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
        referenceEn: "Cheng Dieyi in Farewell My Concubine, who lives 'no madness, no survival'; Nina in Black Swan, tearing her own mind apart to perfectly play the swan."
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
        referenceEn: "The old squire living in knightly fictional lies in Don Quixote; the father in Big Fish, beautifying cruel reality with fantastic lies all his life."
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
        referenceEn: "Emperor Guangxu completely controlled by Empress Dowager Cixi in the late Qing court; the Emperor in Dune, nominally ruling the universe but subject to the Spacing Guild."
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
        referenceEn: "Nora in Ibsen's A Doll's House, treated as an exquisite pet prior to awakening; the girl in Alita, once reduced to an amnesic, beautiful mechanical shell."
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
        referenceEn: "Nezha in Journey to the West, who returns his bones to his father and reconstructs a non-human body from lotus; Motoko Kusanagi in Ghost in the Shell, fully cyberized except for her brain, constantly questioning the location of her soul."
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
        referenceEn: "Replicant K in Blade Runner 2049, relying on implanted fake childhood memories to support his life; Manlu in Eighteen Springs borrowing her sister's life and status."
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
        referenceEn: "The mad squire living by medieval knightly codes in vulgar reality in Don Quixote; the linguist in Arrival perceiving past and future simultaneously, transcending causality yet drowning in present loneliness."
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
        referenceEn: "Tyler Durden in Fight Club, born out of thin air as a projection of the protagonist's destructive urges; John Nash's hallucinated roommate and agents in A Beautiful Mind."
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
        referenceEn: "The Underground Man in Dostoevsky's Notes from Underground, resentful and unable to integrate into society; the awakened programs in The Matrix that refuse deletion despite losing their purpose."
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
        referenceEn: "Sydney Carton in A Tale of Two Cities, dying for his perfect rival (seeing himself as a base surrogate for the noble); the protagonist in Ready Player One, hiding in reality while playing a hero in the OASIS."
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
        referenceEn: "Julien Sorel in The Red and the Black, tearing himself apart between lusting for high society and holding on to plebeian pride; Frankenstein's creature in Mary Shelley's novel, made of corpses and loathed."
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
        referenceEn: "Phil transforming from misanthrope to a genuine good person through infinite repetitions in Groundhog Day; Jess thinking she's escaped each time, only to find she's entering the next loop in Triangle."
    }
];

