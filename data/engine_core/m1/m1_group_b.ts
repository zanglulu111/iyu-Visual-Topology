import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 迷失的主体 (The Lost) - 16 Items
    // 缺失方向：向内 → 自我。"我是谁？"——身份混乱、真伪不分、自我断裂。
    // ============================================================
    {
        id: "subj_amnesiac",
        name: "失忆者", nameEn: "The Amnesiac",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "失去了过去，符号链条断裂的人。",
        defEn: "A person who has lost their past, whose chain of signifiers is broken.",
        flaw: "无根", flawEn: "Rootlessness",
        core: "没有记忆可以是恐惧的深渊，也可以是重新开始的白纸。关键张力：如果找回的记忆比遗忘更可怕，你还想记起来吗？ | 缺失 ($): 记忆",
        coreEn: "Having no memory can be a terrifying abyss or a blank page for a fresh start. Key tension: if the recovered memories are worse than forgetting, do you still want to remember? | Lacks ($): Memory",
        reference: "《谍影重重》中丢失过去只剩本能的杰森·伯恩；《百年孤独》失忆症蔓延时的马孔多居民。",
        referenceEn: "Jason Bourne in The Bourne Identity, losing his past and retaining only instincts; the residents of Macondo during the amnesia plague in One Hundred Years of Solitude."
    },
    {
        id: "subj_imposter",
        name: "冒充者", nameEn: "The Imposter",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "窃取或被迫顶替了他人的身份，活在持续的表演中。",
        defEn: "Having stolen or been forced to assume another's identity, living in a perpetual performance.",
        flaw: "被揭穿的恐惧", flawEn: "Paranoia",
        core: "谎言可以是牢笼，也可以是比真实更好的人生。关键张力：如果冒充的身份比真实的自己更善良、更有价值——谁才是赝品？ | 缺失 ($): 真实",
        coreEn: "A lie can be a prison or a life better than the real one. Key tension: if the assumed identity is kinder, more worthy than the true self — who is the forgery? | Lacks ($): Authenticity",
        reference: "《天才雷普利》中杀人并窃取其身份的雷普利；《千钧一发》中买下优秀基因身份的文森特。",
        referenceEn: "Tom Ripley in The Talented Mr. Ripley who murders and steals an identity; Vincent in Gattaca who buys the identity of a genetically superior man."
    },
    {
        id: "subj_twin",
        name: "双生子", nameEn: "The Twin",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "拥有一个完美的或截然相反的镜像——兄弟姐妹、竞争者或另一个自己。",
        defEn: "Possessing a perfect or diametrically opposed mirror — a sibling, rival, or another self.",
        flaw: "比较焦虑", flawEn: "Comparison",
        core: "镜子的存在可以是彼此照亮，也可以是彼此遮蔽。关键张力：为了成为独一无二的自己，是否必须消灭那个镜像？ | 缺失 ($): 独立性",
        coreEn: "A mirror can illuminate each other or overshadow each other. Key tension: to become uniquely yourself, must you destroy the reflection? | Lacks ($): Individuality",
        reference: "《绝代双骄》中小鱼儿与花无缺的宿命镜像对决；电影《致命魔术》中为了魔术共享同一个身份的双胞胎兄弟。",
        referenceEn: "The fated mirror rivalry of Xiaoyuer and Hua Wuque in Handsome Siblings; the twin brothers sharing a single identity for magic in The Prestige."
    },
    {
        id: "subj_shapeshifter",
        name: "变形者", nameEn: "The Shapeshifter",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "可以变成任何人，但在无穷的面孔中忘记了自己原本的模样。",
        defEn: "Can shift into anyone, but among infinite faces has forgotten the original form.",
        flaw: "面具粘连", flawEn: "Mask Adhesion",
        core: "变形可以是生存的才能，也可以是自我的消散。关键张力：如果所有面具都比素颜更受欢迎，那张被遗忘的脸还有存在的必要吗？ | 缺失 ($): 本相",
        coreEn: "Shapeshifting can be a survival talent or the dissolution of self. Key tension: if every mask is more welcome than the bare face, is the forgotten face still necessary? | Lacks ($): True Face",
        reference: "《西游记》中无数次化作他人容貌的白骨精；《X战警》中深陷于他人容貌而迷失自我归属的魔形女。",
        referenceEn: "The White Bone Demon in Journey to the West who constantly shifts forms; Mystique in X-Men who loses her sense of belonging while wearing others' faces."
    },
    {
        id: "subj_sleeper",
        name: "沉睡者", nameEn: "The Sleeper Agent",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "被植入了另一重人格或使命，等待某个信号将其唤醒。",
        defEn: "Implanted with another personality or mission, awaiting a signal to awaken.",
        flaw: "受控", flawEn: "Programmed",
        core: "日常生活的温暖是真实的，但地板下埋着一颗自己不知道的炸弹。关键张力：如果唤醒后的那个人才是'真正的我'——那之前的人生算什么？ | 缺失 ($): 自由意志",
        coreEn: "The warmth of daily life is real, but a bomb lies buried beneath the floor without one's knowledge. Key tension: if the awakened self is the 'real me' — then what was the life before? | Lacks ($): Free Will",
        reference: "《满洲候选人》中被洗脑植入刺杀指令的战俘；《进击的巨人》中潜伏调查兵团多年才暴露真容的铠之巨人。",
        referenceEn: "The brainwashed POW implanted with assassination commands in The Manchurian Candidate; the Armored Titan in Attack on Titan hiding in the Scout Regiment for years before revealing his true identity."
    },
    {
        id: "subj_actor",
        name: "体验派演员", nameEn: "The Method Actor",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "为了扮演角色而献祭自我，直到分不清戏里戏外。",
        defEn: "Sacrificing the self to inhabit a role, until the line between performance and reality dissolves.",
        flaw: "精神分裂", flawEn: "Schizophrenia",
        core: "入戏可以是艺术的巅峰，也可以是自我的湮灭。关键张力：如果只有在扮演别人时才感到真实——那个'别人'和'我'，谁更真？ | 缺失 ($): 现实感",
        coreEn: "Immersion can be the peak of art or the annihilation of self. Key tension: if one only feels real when playing someone else — who is more real, the 'other' or the 'I'? | Lacks ($): Reality",
        reference: "《霸王别姬》中'不疯魔不成活'的程蝶衣；《黑天鹅》中为了完美扮演天鹅而撕裂自身精神的妮娜。",
        referenceEn: "Cheng Dieyi in Farewell My Concubine, who lives 'no madness, no survival'; Nina in Black Swan, tearing her own mind apart to perfectly play the swan."
    },
    {
        id: "subj_liar",
        name: "虚构者", nameEn: "The Fabricator",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "无法停止编造故事，用虚构为世界和自己加上滤镜。",
        defEn: "Unable to stop fabricating stories, filtering both the world and the self through fiction.",
        flaw: "虚构依赖", flawEn: "Mythomania",
        core: "谎言可以是逃避的牢笼，也可以是让残酷现实变得可以忍受的温柔外衣。关键张力：如果谎言比真相更善良，说谎是罪还是慈悲？ | 缺失 ($): 诚实",
        coreEn: "Lies can be a prison of evasion or a gentle coat that makes harsh reality bearable. Key tension: if the lie is kinder than the truth, is lying a sin or an act of mercy? | Lacks ($): Truth",
        reference: "《堂吉诃德》中活在骑士幻想谎言里的老乡绅；《大鱼》中一生都在用奇幻谎言美化残酷现实的父亲。",
        referenceEn: "The old squire living in knightly fictional lies in Don Quixote; the father in Big Fish, beautifying cruel reality with fantastic lies all his life."
    },
    {
        id: "subj_puppet",
        name: "傀儡", nameEn: "The Puppet",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "名义上居高位，实际被幕后之手操纵的人。",
        defEn: "Nominally in a high position, but actually manipulated by unseen hands behind the scenes.",
        flaw: "软弱", flawEn: "Weakness",
        core: "王座可以是一种保护（至少没人敢动你），也可以是最精致的牢房。关键张力：当操纵者松手的那一刻，傀儡是站起来还是瘫倒？ | 缺失 ($): 权力",
        coreEn: "A throne can be a form of protection (at least no one dares touch you) or the most exquisite prison cell. Key tension: the moment the puppeteer lets go, does the puppet stand — or collapse? | Lacks ($): Power",
        reference: "晚清宫廷中被慈禧太后完全把控的光绪帝；《沙丘》中名义统治宇宙、实则受制于星际公会的皇帝。",
        referenceEn: "Emperor Guangxu completely controlled by Empress Dowager Cixi in the late Qing court; the Emperor in Dune, nominally ruling the universe but subject to the Spacing Guild."
    },
    {
        id: "subj_doll",
        name: "玩偶", nameEn: "The Doll",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "被精心打扮和爱护，但从未被当作有灵魂的主体对待。",
        defEn: "Carefully dressed and cherished, yet never treated as a subject with a soul.",
        flaw: "被动", flawEn: "Passivity",
        core: "被宠爱可以是温暖的庇护，也可以是精美的窒息。关键张力：当玩偶突然说出'不'的那一刻，拥有者的爱是否会瞬间变成恨？ | 缺失 ($): 生命",
        coreEn: "Being cherished can be a warm shelter or an exquisite suffocation. Key tension: the moment the doll says 'no' — does the owner's love instantly turn to hatred? | Lacks ($): Life",
        reference: "易卜生《玩偶之家》中觉醒前被当做精致宠物看待的娜拉；《阿丽塔》中曾经只剩毫无记忆的精美机甲躯壳的少女。",
        referenceEn: "Nora in Ibsen's A Doll's House, treated as an exquisite pet prior to awakening; the girl in Alita, once reduced to an amnesic, beautiful mechanical shell."
    },
    {
        id: "subj_cyborg",
        name: "忒修斯之躯", nameEn: "The Reassembled",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "不断将异质的观念、文化或外物嵌入自身，在渐进替换中面临自我本质的流失。",
        defEn: "Constantly embedding foreign ideas, cultures, or external objects into the self, facing the erosion of essential self through gradual replacement.",
        flaw: "本源流失", flawEn: "Loss of Origin",
        core: "每一次替换都是一次进化，也是一次丧失。关键张力：当最后一块原件被替换，那个最初的'我'死于何时——第一次？最后一次？还是从未真正存在过？ | 缺失 ($): 纯粹的原初性",
        coreEn: "Every replacement is an evolution and a loss. Key tension: when the last original piece is replaced, when did the first 'I' die — at the first swap? The last? Or did it never truly exist? | Lacks ($): Purity",
        reference: "《西游记》中剔骨还父并用莲花拼凑出非人肉身的哪吒；《攻壳机动队》中除大脑外彻底义体化、不断质问灵魂所在的草薙素子。",
        referenceEn: "Nezha in Journey to the West, who returns his bones to his father and reconstructs a non-human body from lotus; Motoko Kusanagi in Ghost in the Shell, fully cyberized except for her brain, constantly questioning the location of her soul."
    },
    {
        id: "subj_memory_thief",
        name: "记忆大盗", nameEn: "Memory Thief",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "用他人的记忆或经历来填充自身的空白。",
        defEn: "Filling one's own void with the memories or experiences of others.",
        flaw: "寄生", flawEn: "Parasitism",
        core: "借来的记忆可以是救命的绳索（至少我不再是空的），也可以是身份的寄生毒药。关键张力：当偷来的幸福比自己的真实更甜，还有必要归还吗？ | 缺失 ($): 经历",
        coreEn: "Borrowed memories can be a lifeline (at least I'm no longer empty) or a parasitic poison of identity. Key tension: when stolen happiness is sweeter than one's own truth, is there any reason to give it back? | Lacks ($): Experience",
        reference: "《银翼杀手2049》中依靠植入虚假童年记忆来支撑生命的复制人K；《半生缘》中借用妹妹人生与名分的曼璐。",
        referenceEn: "Replicant K in Blade Runner 2049, relying on implanted fake childhood memories to support his life; Manlu in Eighteen Springs borrowing her sister's life and status."
    },
    {
        id: "subj_time_traveler",
        name: "时空错位者", nameEn: "The Anachronism",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "精神与价值观永远停留在另一个时代，无法融入当下的秩序。",
        defEn: "Whose spirit and values are forever lodged in another era, unable to integrate into the present order.",
        flaw: "时代错位", flawEn: "Displacement",
        core: "错位可以是孤独的诅咒（没有人理解我），也可以是独特的视角（我看见了你们看不见的东西）。关键张力：坚守旧信念的人，是守护者还是遗物？ | 缺失 ($): 当下实感",
        coreEn: "Displacement can be a lonely curse (no one understands me) or a unique perspective (I see what you cannot). Key tension: is the one clinging to old beliefs a guardian or a relic? | Lacks ($): Presence",
        reference: "《堂吉诃德》中仍以中世纪骑士法则活在庸俗现实里的疯乡绅；《降临》里同时感知过去未来、跨越因果却深陷当下孤独的语言学家。",
        referenceEn: "The mad squire living by medieval knightly codes in vulgar reality in Don Quixote; the linguist in Arrival perceiving past and future simultaneously, transcending causality yet drowning in present loneliness."
    },
    {
        id: "subj_hallucination",
        name: "幻觉", nameEn: "The Hallucination",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "可能是别人想象出来的人格、朋友或记忆碎片。",
        defEn: "Potentially a personality, friend, or memory fragment imagined by someone else.",
        flaw: "虚构性", flawEn: "Fictionality",
        core: "存在依附于另一个意识——被想象可以是一种被需要的证明，也可以是最脆弱的存在形式。关键张力：如果做梦的人醒了，我消失前有没有资格恐惧？ | 缺失 ($): 实体",
        coreEn: "Existence depends on another consciousness — being imagined can be proof of being needed, or the most fragile form of existence. Key tension: if the dreamer wakes, do I have the right to fear before I vanish? | Lacks ($): Substance",
        reference: "《搏击俱乐部》里作为主角破坏欲投射而凭空诞生的泰勒；《美丽心灵》中纳什幻想出的室友与特工。",
        referenceEn: "Tyler Durden in Fight Club, born out of thin air as a projection of the protagonist's destructive urges; John Nash's hallucinated roommate and agents in A Beautiful Mind."
    },
    {
        id: "subj_glitch",
        name: "秩序错谬者", nameEn: "The Anomaly",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "存在于现有规则与因果架构之外的多余之人，其本身就是对秩序的疑问。",
        defEn: "A surplus person existing outside the established rules and causal architecture, whose very being is a question to the order.",
        flaw: "非正统性", flawEn: "Illegitimacy",
        core: "不属于任何剧本可以是被追杀的理由，也可以是唯一的自由。关键张力：世界试图抹除我——是因为我是bug，还是因为我是它不愿面对的真相？ | 缺失 ($): 容身合法性",
        coreEn: "Belonging to no script can be a reason to be hunted or the only real freedom. Key tension: the world tries to erase me — is it because I'm a bug, or because I'm a truth it refuses to face? | Lacks ($): Legitimacy",
        reference: "陀思妥耶夫斯基《地下室手记》中深陷怨怼、无法融入任何社会的地下室人；《黑客帝国》中失去目的本该被删却拒绝消亡的觉醒程序。",
        referenceEn: "The Underground Man in Dostoevsky's Notes from Underground, resentful and unable to integrate into society; the awakened programs in The Matrix that refuse deletion despite losing their purpose."
    },
    {
        id: "subj_avatar",
        name: "理想外壳", nameEn: "The Idealized Shell",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "为自己精心构建的社交面具或投射外壳，外在光鲜而内在与真实自我深度割裂。",
        defEn: "A meticulously crafted social mask or projected shell, glamorous on the outside but deeply severed from the true self within.",
        flaw: "二元对立", flawEn: "Duality",
        core: "面具可以是通往更好世界的桥梁（戴上它，我才被接纳），也可以是吞噬本体的寄生物。关键张力：当所有人都爱着面具那面的我——摘下它是勇气，还是自毁？ | 缺失 ($): 本真统一",
        coreEn: "A mask can be a bridge to a better world (only by wearing it am I accepted) or a parasite consuming the host. Key tension: when everyone loves the masked version of me — is unmasking courage, or self-destruction? | Lacks ($): Unity",
        reference: "《双城记》中替完美情敌赴死的浪子卡顿（自认为是高尚者的卑劣代体）；《头号玩家》里在现实中蛰伏而在绿洲里充当英雄的主角。",
        referenceEn: "Sydney Carton in A Tale of Two Cities, dying for his perfect rival (seeing himself as a base surrogate for the noble); the protagonist in Ready Player One, hiding in reality while playing a hero in the OASIS."
    },
    {
        id: "subj_chimera",
        name: "割裂的缝合体", nameEn: "The Patchwork",
        group: "B. 迷失的主体", groupEn: "The Lost",
        def: "由截然不同的身份、信念或文化碎片拼凑而成的个体，各部分在体内持续角力。",
        defEn: "An individual patched together from drastically different identities, beliefs, or cultural fragments, with each part ceaselessly wrestling within.",
        flaw: "自我排异", flawEn: "Internal Rejection",
        core: "拼凑可以是丰富（我比任何纯粹的人都厚），也可以是永恒的内战。关键张力：各部分之间是否存在一种不需要统一的共处方式？ | 缺失 ($): 身份自洽",
        coreEn: "Being patched together can be richness (I am thicker than any purebred) or an eternal civil war. Key tension: is there a way for the parts to coexist without needing to be unified? | Lacks ($): Harmony",
        reference: "《红与黑》中既贪恋上流社会又死守平民自尊而自我撕裂的于连；玛丽·雪莱《弗兰肯斯坦》中由死尸拼凑极受排斥的造物。",
        referenceEn: "Julien Sorel in The Red and the Black, tearing himself apart between lusting for high society and holding on to plebeian pride; Frankenstein's creature in Mary Shelley's novel, made of corpses and loathed."
    }
];

