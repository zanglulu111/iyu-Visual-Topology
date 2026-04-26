import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_E: LibraryItemDef[] = [
    // ============================================================
    // GROUP E. 欲望的抽离 (Objet petit a Extraction) — 20 Items
    // 丧失维度：肉体完好、地位完好、理智完好——但给你活下去理由的那个东西不在了。
    // 核心感受：一切都还在，但一切都没有意义了。
    // 光谱：爱的丧失(1-5) → 使命/意义的丧失(6-10) → 可能性的丧失(11-15) → 欲望本身的丧失(16-20)
    // ============================================================

    // ---- 爱的丧失：情感纽带的核心客体被拔除 ----

    {
        id: "stake_lost_love",
        name: "永失所爱", nameEn: "Lost Love",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "那个让你'想要活着'的人永久性地离开了你的世界——不是死亡，是选择离开。",
        defEn: "The person who made you 'want to live' permanently left your world — not death, but choosing to leave.",
        core: "A面：被离开反而证明了对方有自己的意志——你爱的不是一个附属品，而是一个完整的人。真正的爱包含被拒绝的可能。/ B面：但选择离开比死亡更残忍——死亡是命运的暴力，离开是意志的暴力。他活着，但他选择了一个没有你的世界。关键张力：对方活着但不要你了——这比死亡更难接受。 | 代价切口(−Φ): 欲望的锚点被拔除——你不知道该朝哪个方向走了。",
        coreEn: "A-side: Being left proves the other had their own will — you loved a whole person, not an accessory. True love includes the possibility of rejection. / B-side: But choosing to leave is crueler than death — death is fate's violence, leaving is will's violence. They're alive, but chose a world without you. Key tension: They're alive but don't want you — harder to accept than death. | Castration Circuit: Desire's anchor yanked out — you no longer know which direction to walk.",
        reference: "《爱乐之城》各奔前程后在爵士酒吧无声对视的恋人；《花样年华》永远没有说出口的那句告白。",
        referenceEn: "The lovers silently locking eyes in the jazz bar after parting ways in La La Land; the confession never spoken in In the Mood for Love.",

        topology: "交出的不是那个人——而是'想要'这个动作的发射装置。人走了，装置也被带走了，剩下的你完好无损但哪里也不想去",

        directive: {
            bright: "写他清醒地看着'方向感'从身上脱落。离开后第三个月，超市里手伸向货架拿了一样东西——为自己买的。三个月来第一次为自己伸手。他在这个手还会动的事实里辨认出代价的形状。不是康复，是身体比意识先活过来。不要写他得到了什么，只写他注视着方向离开。",
            dark: "写他刷牙时撞见代价——牙膏味道变淡了。他不记得交出过这个。每件事都在做但隔着一层保鲜膜，颜色饱和度低了一档，声音像从隔壁房间传来。不是生病，是对方带走了负责'感受'的零件。代价不是一次性收取的，它在每一个变淡的味道里一笔一笔地扣。",
            tension: "街上看到一个背影——身高发型走路节奏都像。脚步加快，心跳加快，身体跳过大脑启动了追逐。那人转脸——不是。但他不确定是否已经付完——身体还在自动寻找，意识已知道找到了也没用，这个时差就是欲望拔除后的幻肢。他不知道身体会自动追多少次。写他停下的那一秒。不要给追上去。"
        }
    },
    {
        id: "stake_child_loss",
        name: "丧子", nameEn: "Loss of a Child",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你投射了全部未来的那个存在——被永久性地从时间线上删除。",
        defEn: "The existence onto which you projected your entire future — permanently deleted from the timeline.",
        core: "A面：没有人能从丧子中'学到教训'——这不是一个可以提取意义的事件。它就是纯粹的、没有A面的毁灭。/ B面：孩子不仅是一个人——是你对未来的全部赌注。他死了，你的未来也死了。你的身体还在向前走，但你的时间轴已经停在了那个电话响起的瞬间。关键张力：这里没有张力——只有重量。 | 代价切口(−Φ): 时间拓扑的永久凝固——未来被从根部切断。",
        coreEn: "A-side: No one 'learns a lesson' from losing a child — this isn't an event from which meaning can be extracted. It is pure destruction with no A-side. / B-side: A child isn't just a person — they're your entire bet on the future. They died; your future died. Your body keeps walking forward, but your timeline froze the instant the phone rang. Key tension: No tension here — only weight. | Castration Circuit: Temporal topology permanently frozen — the future severed at the root.",
        reference: "《海边的曼彻斯特》因大火失去三个孩子后成为行尸走肉的李；《兔之眼》失去孩子后精神荒原上独行的母亲。",
        referenceEn: "Lee becoming the walking dead after losing three children in fire in Manchester by the Sea; the mother wandering alone on a spiritual wasteland after child loss.",

        topology: "交出的不是孩子——而是'未来'这个时态本身。时间轴在那个电话响起的瞬间凝固，身体还在往前走但时间已经停了",

        directive: {
            bright: "写他清醒地看着'以后'从身上脱落。某天发现自己在做饭——不是为谁，是手自己动了。米下了一个人的量，锅里的水刚好够。他在这个精确的一人份里辨认出代价的形状。手还记得怎么做饭，但做完后没有人喊吃饭。不要写他得到了什么，只写他注视着未来离开。",
            dark: "写他经过学校门口时撞见代价——放学铃响，一群孩子涌出来。他不记得交出过这个。目光自动在人群中搜索一个不存在的身高，每次都搜索，每次都扑空。这个搜索程序无法卸载。每一次自动扫视都是他低头发现时间又停了一次的瞬间。代价在铃声里一笔一笔地扣。",
            tension: "别人问'你有孩子吗'——日常的社交问题。嘴在回答之前停顿了零点几秒，这个停顿里装着全部的答案。但他不确定是否已经付完——说'有'是现在时态还是过去时态？他不知道语法够不够用来装这件事。写那个停顿的长度。不要给回答。"
        }
    },
    {
        id: "stake_unrequited",
        name: "单向之爱", nameEn: "Unrequited Love",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你的全部欲望锁定在一个永远不会爱你的人身上——且你无法切换目标。",
        defEn: "Your entire desire locked onto someone who will never love you back — and you cannot switch targets.",
        core: "A面：单恋的人拥有世上最纯粹的情感——因为不被回应，它永远保持在'欲望'的最高纯度，不会被日常琐碎稀释。/ B面：但纯度不是快乐——是一种慢性的酸。你每天醒来做的第一件事是想到一个不想你的人。关键张力：你坚持的到底是爱——还是爱的幻象？ | 代价切口(−Φ): 欲望的单行道——你投喂的那个黑洞永远不会喂你回来。",
        coreEn: "A-side: The unrequited lover holds the world's purest emotion — unanswered, it stays at desire's maximum purity, never diluted by daily trivials. / B-side: But purity isn't happiness — it's a slow acid. Every morning you wake thinking of someone who doesn't think of you. Key tension: Is what you're clinging to love — or the phantom of love? | Castration Circuit: Desire's one-way street — the black hole you feed will never feed you back.",
        reference: "《情书》对已逝之人持续单向寄信的女子；《暗恋桃花源》用一生等一个不存在之人归来的云之凡。",
        referenceEn: "The woman ceaselessly writing letters to the deceased in Love Letter; Yun Zhifan waiting a lifetime for a nonexistent person's return in Secret Love in Peach Blossom Land.",

        topology: "交出的不是对方——而是'被回应'这个可能性。欲望的单行道上你不断投喂，黑洞永远不会喂你回来",

        directive: {
            bright: "写他清醒地看着'被爱的资格'从身上脱落。知道对方不会来，但每天醒来第一个念头仍然是那个人——不是选择想，是想这个动作比意识快。他在这种快于意识的忠诚里辨认出代价的形状。不要写他得到了什么，只写他注视着回应的可能性离开。",
            dark: "写他在对方的社交动态上撞见代价——一张和别人的合照，笑得很开。他不记得交出过这个。那个笑容本来应该朝向他的方向，但光线从未转过来。每一次刷到对方的快乐都是他低头发现自己又空了一点的瞬间。代价不是一次性收取的，它在别人的笑容里一笔一笔地扣。",
            tension: "某天对方无意中对他笑了一下——普通的礼貌性微笑。但他不确定是否已经付完——整个身体因为这个微笑震了一下，像干旱的土地接到一滴雨。他不知道一滴雨够不够证明还有下一场。写他接住那个微笑后的三秒。不要给第二滴。"
        }
    },
    {
        id: "stake_bond_severed",
        name: "亲缘断裂", nameEn: "Bond Severed",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "血缘或精神上最亲的人与你公开决裂——不是渐行渐远，是面对面的永久否定。",
        defEn: "Your closest by blood or spirit publicly ruptures with you — not gradual drifting, but face-to-face permanent negation.",
        core: "A面：断裂有时是双方都被困在了有毒关系中——切断它对两个人都是解脱。/ B面：但当那个你以为'无条件爱你'的人说出'我不再爱你了'——你失去的不只是一个人，是'无条件的爱存在'这个信念本身。关键张力：被最亲的人否定——你的价值体系还能站得住吗？ | 代价切口(−Φ): '至少还有家人'这最后一张安全网被抽走。",
        coreEn: "A-side: Severance sometimes frees both from a toxic bond — cutting it is release for both sides. / B-side: But when the person you thought 'loved you unconditionally' says 'I no longer love you' — you've lost not just a person, but the belief that 'unconditional love exists.' Key tension: Negated by your closest — can your value system still stand? | Castration Circuit: The last safety net of 'at least there's family' is pulled away.",
        reference: "《东京物语》发现子女其实不需要自己的年迈父母；《李尔王》被亲生女儿们逐出家门的老国王。",
        referenceEn: "The elderly parents discovering their children don't actually need them in Tokyo Story; King Lear driven from home by his own daughters.",

        topology: "交出的不是亲人——而是'无条件的爱存在'这个信念。最后一张安全网被抽走，脚下的空才显出真实的高度",

        directive: {
            bright: "写他清醒地看着'至少还有家'从身上脱落。决裂后第一个节日，别人在团聚，他坐在自己的房间里。桌上一个人的饭，窗外别家的笑声。他在这种对比的精确度里辨认出代价的形状。不要写他得到了什么，只写他注视着'无条件'这三个字离开。",
            dark: "写他填表格时撞见代价——'紧急联系人'一栏空着。他不记得交出过这个。以前不用想就能写的名字，现在笔停在格子上方。换了一支笔也写不出来，不是不知道写谁，是那个名字已经不代表可以被联系的关系。代价不是一次性收取的，它在每一个空白的格子里一笔一笔地扣。",
            tension: "某天在路上远远看到那个人——或者像那个人。脚步没有加快也没有减速，保持原速经过。但他不确定是否已经付完——身体没有反应这件事本身就是一种反应，他不知道'不再心跳加速'是愈合还是又一种形式的丧失。写他保持原速走过的那几步。不要给回头。"
        }
    },
    {
        id: "stake_betrayed_trust",
        name: "信任坍塌", nameEn: "Trust Destroyed",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "发现你最信任的人从一开始就在欺骗你——关系的全部地基被证明是假的。",
        defEn: "Discovering the person you trusted most was deceiving you from the start — the relationship's entire foundation proven false.",
        core: "A面：幻灭至少让你看清了真相——以后你的信任将建立在更坚固的基础上。/ B面：但你失去的不是这一个人——是'信任'这项能力本身。从此以后你看每个人都带着那副验毒的目光，再也无法全身心地相信任何人。关键张力：被骗之后你变得更聪明了——但那种'聪明'让你快乐了吗？ | 代价切口(−Φ): 信任能力的永久损伤——怀疑变成了你的默认设置。",
        coreEn: "A-side: Disillusion at least reveals truth — future trust will be built on firmer ground. / B-side: But what you lost isn't this one person — it's the capacity for 'trust' itself. From now on you view everyone with poison-testing eyes, never able to fully believe anyone again. Key tension: After betrayal you became smarter — but does that 'smartness' make you happy? | Castration Circuit: Trust capacity permanently damaged — suspicion becomes your default setting.",
        reference: "《赎罪》因妹妹一个误解的诬告而永远失去彼此的恋人；《老无所依》发现规则与善良在冷酷面前毫无意义的老警长。",
        referenceEn: "Lovers permanently lost to each other by a sister's misunderstood accusation in Atonement; the old sheriff discovering rules and kindness are meaningless before cold cruelty in No Country for Old Men.",

        topology: "交出的不是那个人——而是'相信'这项能力本身。怀疑变成了默认设置，你看每个人都带着验毒的目光",

        directive: {
            bright: "写他清醒地看着'轻信'从身上脱落。真相浮出后回溯每一个旧画面——当时以为的温柔现在全部反转成布局。他在每一帧被重新解码的画面里辨认出代价的形状。看得太清楚了，清楚本身成了一种视力的灼伤。不要写他得到了什么，只写他注视着信任离开。",
            dark: "写他在新关系里撞见代价——对方说'相信我'，他点头微笑，同时身体内部启动了扫描程序。他不记得交出过这个。语气、措辞、眼神方向，每一个细节都被自动过滤，寻找当年那套骗局的指纹。扫描程序无法关闭。代价不是一次性收取的，它在每一次自动验毒里一笔一笔地扣。",
            tension: "某天遇到一个真诚的人——真的真诚，没有破绽。但他不确定是否已经付完——'没有破绽'也可以是最高级别的骗术，而他已经无法区分'真的没有'和'找不到'的区别。他不知道这种无法区分会不会把每一个好人都变成嫌疑人。写他面对真诚时的那几秒。不要给信任。"
        }
    },

    // ---- 使命/意义的丧失：你活下去的'为什么'被拔掉了 ----

    {
        id: "stake_purpose_void",
        name: "使命蒸发", nameEn: "Purpose Void",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你为之奋斗了半生的事业——被证明毫无价值，或被你自己完成后发现不值得。",
        defEn: "The cause you spent half your life fighting for — proven worthless, or completed only to discover it wasn't worth it.",
        core: "A面：旧使命蒸发意味着你终于可以自由地选择一个新的——不再被沉没成本绑架。/ B面：但你不是'在寻找新目标'——你是站在一片你亲手建造的废墟中间，发现蓝图本身就是错的。关键张力：如果你最好的年华都给了一个错误——剩下的年华你打算怎么花？ | 代价切口(−Φ): '为什么活着'这个问题的答案被撤回。",
        coreEn: "A-side: Old purpose evaporating means you're finally free to choose a new one — no longer hostage to sunk costs. / B-side: But you're not 'searching for a new goal' — you're standing in ruins you built yourself, discovering the blueprint was wrong. Key tension: If your best years were given to a mistake — how will you spend the rest? | Castration Circuit: The answer to 'why live' is withdrawn.",
        reference: "《千与千寻》发现黄金变成泥巴的无脸男；《革命之路》发现美国梦只是一个精装空壳的中产夫妇。",
        referenceEn: "No-Face discovering gold turned to mud in Spirited Away; the middle-class couple finding the American Dream is a well-packaged empty shell in Revolutionary Road.",

        topology: "交出的不是事业——而是'为什么活着'这个问题的答案。站在自己亲手建的废墟中间，发现蓝图本身就是错的",

        directive: {
            bright: "写他清醒地看着'值得'从身上脱落。站在完成的成果面前，成果完好，但他看着它像看一件别人寄错的包裹。他在这个'寄错了'的发现里辨认出代价的形状。手里的东西是真的，但需要它的那个人已经不在了。不要写他得到了什么，只写他注视着答案离开。",
            dark: "写他收拾旧文件时撞见代价——十年前的方案书，每一页都是激情的笔迹。他不记得交出过这个。现在读这些字像在读陌生人的日记，认识每一个字但认不出写字的那只手。代价不是一次性收取的，它在每一页旧方案和现在之间的距离里一笔一笔地扣。",
            tension: "有人问'接下来打算做什么'——正常的社交问题。但他不确定是否已经付完——'接下来'这个词需要一个方向，而方向需要一个'想要'，他不知道'想要'的零件被拔掉之后还能不能重新装上。写他听到这个问题后嘴角的微笑。不要给答案。"
        }
    },
    {
        id: "stake_legacy_erased",
        name: "遗产抹杀", nameEn: "Legacy Erased",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你留给世界的一切痕迹——作品、成就、名字——被系统地清除得一干二净。",
        defEn: "Every trace you left for the world — works, achievements, name — systematically erased without remainder.",
        core: "A面：如果你的遗产本身不重要——那也许你活着时的体验才是唯一真实的。过程大于结果。/ B面：但人类为什么创作、为什么建设？不就是为了在死后留下什么吗？当连这个'什么'都被清除时——你活过的证据在哪？关键张力：如果没人记得你做过的事——你做没做过有区别吗？ | 代价切口(−Φ): 象征界注册的强制注销——你从未来的文本中被擦除。",
        coreEn: "A-side: If legacy doesn't matter — perhaps lived experience is the only real thing. Process over outcome. / B-side: But why do humans create, build? To leave something after death. When even that 'something' is erased — where's the evidence you lived? Key tension: If no one remembers what you did — does it matter whether you did it? | Castration Circuit: Forced deregistration from the Symbolic — you're erased from future texts.",
        reference: "《寻梦环游记》被后人遗忘后在亡灵世界消散的灵魂；《1984》真理部系统性篡改和抹杀历史记录。",
        referenceEn: "Souls fading in the Land of the Dead when forgotten by the living in Coco; the Ministry of Truth systematically falsifying and erasing records in 1984.",

        topology: "交出的不是作品——而是'我活过'这个证据。痕迹被系统清除后，做没做过不再有区别",

        directive: {
            bright: "写他清醒地看着'曾经在'从身上脱落。搜索引擎里输入自己的名字——零结果。图书馆的系统里查自己的书——已注销。他在每一个返回空白的搜索框里辨认出代价的形状。屏幕上的光映着他的脸，脸还在，但脸做过的事已经不在任何地方了。不要写他得到了什么，只写他注视着痕迹离开。",
            dark: "写他听到有人讨论他曾经的领域时撞见代价——引用的是别人的名字。他不记得交出过这个。那些想法、那些发现，现在挂着别人的标签在流通，或者干脆消失了。每一次听到本该是自己名字的地方出现空白，都是代价又扣了一笔。它在别人的引用里一笔一笔地扣。",
            tension: "某天在旧书店翻到一本自己的书——孤本，没有被系统清除的漏网之鱼。但他不确定是否已经付完——一本书证明了他活过，但只剩一本，他不知道这本书会在书店待多久。写他翻开扉页看到自己名字的那几秒。不要给买下来。"
        }
    },
    {
        id: "stake_talent_loss",
        name: "才华丧失", nameEn: "Talent Lost",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你最引以为傲的能力——手艺、天赋、绝技——某天醒来发现它不见了。",
        defEn: "Your proudest ability — craft, gift, special skill — one morning you wake to find it gone.",
        core: "A面：失去才华迫使你面对'除了才华，你还是谁'。也许你的价值不只是你能做什么。/ B面：但当你的手记得所有的指法，大脑却无法再连接到那条通路——你会经历一种特殊的幻肢痛。你还像音乐家一样听，却不能再像音乐家一样弹。关键张力：如果你不再是'那个天才'——你还是谁？ | 代价切口(−Φ): 欲望-能力通路的物理截断。",
        coreEn: "A-side: Losing talent forces you to face 'who are you beyond the talent.' Maybe your value isn't just what you can do. / B-side: But when your hands remember all the fingerings yet the brain can no longer connect to that pathway — you experience a special phantom pain. You still hear like a musician, but can no longer play like one. Key tension: If you're no longer 'that genius' — who are you? | Castration Circuit: The desire-ability pathway physically severed.",
        reference: "《海上钢琴师》永远被困在船上、才华无法抵达世界的1900；《爆裂鼓手》为追求极致几乎失去演奏能力的鼓手。",
        referenceEn: "1900, forever trapped on the ship with his talent unable to reach the world in The Legend of 1900; the drummer nearly losing his ability to play in pursuit of perfection in Whiplash.",

        topology: "交出的不是技能——而是'想要'和'能做到'之间的通路。手还记得所有指法，但通路被截断了，耳朵还是音乐家的耳朵",

        directive: {
            bright: "写他清醒地看着'能做到'从身上脱落。坐在琴前，手放上去，手指知道该按哪个键——但按下去的声音是对的，感觉是空的。技术还在，但那条让声音变成音乐的暗线断了。他在准确却空洞的音符里辨认出代价的形状。不要写他得到了什么，只写他注视着通路离开。",
            dark: "写他听到别人演奏时撞见代价——那段旋律他比任何人都熟悉，手指在膝盖上跟着动。他不记得交出过这个。耳朵还是从前那只耳朵，能听出每一个细微的错误，但手已经不能把正确的版本弹出来。代价不是一次性收取的，它在每一次膝盖上的空弹里一笔一笔地扣。",
            tension: "有人递给他乐器——不知道他的情况，只是随意的邀请。他接过来，握在手里，重量和从前一样。但他不确定是否已经付完——也许还能弹出什么，也许弹出来的东西会证明彻底失去了。他不知道哪种结果更难承受。写他握着乐器不动的那几秒。不要给弹出来。"
        }
    },
    {
        id: "stake_faith_void",
        name: "信仰空洞", nameEn: "Faith Void",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "不是信仰被击碎（那在Group B）——而是你发现那个位置从来就是空的。你崇拜了一辈子的神坛上什么都没有。",
        defEn: "Not faith shattered (that's Group B) — but discovering the altar was always empty. You worshipped nothing for a lifetime.",
        core: "A面：发现'那里什么都没有'至少让你停止了对虚无的投喂——你终于可以用那些精力做真实的事。/ B面：但你面对的不是'一个被拆穿的谎言'——是'一个从未存在的支撑'。你后退一步，发现脚下一直就是悬崖——你只是之前不往下看。关键张力：你是从谎言中醒来了——还是从幻觉中跌出来了？ | 代价切口(−Φ): 大他者的缺席暴露——位子本身就是空的。",
        coreEn: "A-side: Discovering 'nothing was there' stops you feeding the void — you can finally spend that energy on something real. / B-side: But you're not facing 'an exposed lie' — it's 'a support that never existed.' Step back and find the cliff was always beneath you — you just didn't look down. Key tension: Did you wake from a lie — or fall out of an illusion? | Castration Circuit: The Big Other's absence exposed — the seat was always empty.",
        reference: "《沉默》向上帝尖叫但只听到沉默的耶稣会传教士；《乡愁》在理想主义燃尽后的信念荒原上独行的诗人。",
        referenceEn: "The Jesuit priest screaming at God and hearing only silence in Silence; the poet wandering the faith-wasteland after idealism burns out in Nostalgia.",

        topology: "交出的不是信仰——而是'那个位置上有东西'这个前提。神坛一直是空的，你崇拜了一辈子的方向从未存在",

        directive: {
            bright: "写他清醒地看着'有人在听'从身上脱落。最后一次祈祷，嘴在动但声音不再朝上走了——它们落在地上，像普通的自言自语。他在声音落地的声响里辨认出代价的形状。天花板还是天花板，从来就只是天花板。不要写他得到了什么，只写他注视着'上面'这个方向离开。",
            dark: "写他在教堂里撞见代价——别人在祈祷，表情虔诚。他不记得交出过这个。试图做同样的表情，嘴唇合拢，双手交叉——但身体内部传来的不是安宁，是一种中空的回音，像敲一只空瓶子。每一次模仿祈祷都是他低头发现里面又空了一点的瞬间。代价在每一声空回音里一笔一笔地扣。",
            tension: "深夜独坐，试着对'那个位置'说话——不是祈祷，是测试。说了一句话，等回应。安静。但他不确定是否已经付完——'没有回应'和'位置是空的'不一样，也许只是信号弱了。他不知道他在等的到底是回应还是在确认空。写他等在安静里的那几秒。不要给回应。"
        }
    },
    {
        id: "stake_home_lost",
        name: "失去原乡", nameEn: "Homeland Lost",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你所有记忆的根系所在的那片土地——被摧毁了，或者永远不允许你回去。",
        defEn: "The land where all your memory's roots grew — destroyed, or you're forever barred from returning.",
        core: "A面：失去原乡的人可以在任何地方生根——因为你知道家不是一个地点，是一种你随身携带的能力。/ B面：但'故乡'不是GPS坐标——是你在某棵树下第一次被父亲扛上肩膀的记忆。那棵树被砍了，那片土地变了，你不是'回不去'——是'回去也找不到了'。关键张力：当故乡不在了——漂泊是一种自由还是一种永恒的无家可归？ | 代价切口(−Φ): 根系被拔除——你在地图上没有'回去'这个选项了。",
        coreEn: "A-side: Those who lost homeland can root anywhere — you learn 'home' isn't a location, it's a portable capacity. / B-side: But 'home' isn't GPS coordinates — it's the memory of being hoisted onto your father's shoulders under a specific tree. That tree was felled, that land changed; you can't 'go back' — there's nothing to go back to. Key tension: When homeland is gone — is wandering freedom, or eternal homelessness? | Castration Circuit: Root system uprooted — the option 'go back' is deleted from your map.",
        reference: "《乡愁》永远无法返回祖国的流亡诗人；《何以为家》在难民营中长大、没有出生证明也没有国籍的少年。",
        referenceEn: "The exiled poet who can never return to his homeland in Nostalgia; the boy growing up in refugee camps with no birth certificate or nationality in Capernaum.",

        topology: "交出的不是地址——而是'回去'这个选项。根系被拔除后地图上没有返程，回去也找不到了",

        directive: {
            bright: "写他清醒地看着'回去'从身上脱落。在异乡的厨房里做了一道家乡菜，味道对了八成，剩下两成怎么调都不对——水不一样、火不一样、空气不一样。他在那缺失的两成里辨认出代价的形状。不要写他得到了什么，只写他注视着原乡离开。",
            dark: "写他在梦里撞见代价——回到了那条巷子，每个细节都对：墙上的苔藓、拐角的水龙头、晾衣绳的高度。他不记得交出过这个。醒来后试图回忆巷子的细节，发现已经开始模糊了——梦里的版本比记忆清楚。每一次梦境比记忆更真实时，都是代价又扣了一笔。它在遗忘里一笔一笔地扣。",
            tension: "有人问'你是哪里人'——简单的问题。但他不确定是否已经付完——那个地名说出来对方能搜到地图上的位置，但那个位置上的东西已经和他记忆里的完全不同了。地名还在，地方没了。他不知道回答一个还存在的名字但已消失的地方算不算撒谎。写他说出地名时的语气。不要给归属。"
        }
    },

    // ---- 可能性的丧失：未来的分支被修剪至只剩一条 ----

    {
        id: "stake_road_not_taken",
        name: "未走的路", nameEn: "Road Not Taken",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你在某个分岔口做了选择——然后永久地失去了另一条路上所有可能发生的事。",
        defEn: "You chose at a fork — and permanently lost everything that could have happened on the other path.",
        core: "A面：选择就是拿起一把剪刀修剪可能性的枝条——正是因为你剪掉了其余的，这条路才获得了全部的养分。/ B面：但你在深夜会想：如果当时走了另一条……你不是后悔——你是在哀悼一个永远不会存在的版本的你。关键张力：一条被选中的路和一百条被放弃的路——哪一边更重？ | 代价切口(−Φ): 可能性空间的不可逆折叠。",
        coreEn: "A-side: Choosing is pruning possibility's branches — cutting the rest gives this path all the nourishment. / B-side: But late at night you wonder: what if I'd taken the other... You're not regretting — you're mourning a version of you that will never exist. Key tension: One chosen path versus a hundred abandoned — which side weighs more? | Castration Circuit: Possibility space irreversibly collapses.",
        reference: "《爱乐之城》结尾蒙太奇中那段未曾发生的平行人生；《滑动门》一扇地铁门分出两条截然不同命运的女子。",
        referenceEn: "The parallel life that never happened in La La Land's closing montage; a single subway door splitting a woman's fate in two in Sliding Doors.",

        topology: "交出的不是那条路——而是'一切皆有可能'这个复数形式。可能性空间不可逆地折叠了，你在哀悼一个永远不会存在的版本的你",

        directive: {
            bright: "写他清醒地看着'另一条路'从身上脱落。深夜醒来，脑中自动播放那条没走的路上的蒙太奇——另一个城市、另一个人、另一种早晨。画面很清晰但没有触感。他在这种清晰却摸不到的画面里辨认出代价的形状。不要写他得到了什么，只写他注视着那条路的入口关上。",
            dark: "写他在现在的生活里撞见代价——某个瞬间一切都对，但缝隙里漏出一丝'本来可以不一样'的气味。他不记得交出过这个。不是后悔——是一种更安静的疼，像旧伤在变天时微微发胀。每一次'本来可以'都是代价又扣了一笔。它在对比里一笔一笔地扣。",
            tension: "有人过着他当初放弃的那种生活——也许是老同学、也许是前任。看到对方近况。但他不确定是否已经付完——那个人过得好不好都是刺，好说明他放弃了好东西，不好说明那条路本来就是陷阱。他不知道哪种答案更让人舒服。写他看到那条消息后的那几秒。不要给对比。"
        }
    },
    {
        id: "stake_youth_gone",
        name: "青春消逝", nameEn: "Youth Gone",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "不是衰老（那在Group C）——而是突然意识到你人生中某些事只能在年轻时做，而那个窗口已经关了。",
        defEn: "Not aging (that's Group C) — but suddenly realizing some things could only be done in youth, and that window is shut.",
        core: "A面：意识到窗口关闭反而让你更珍惜剩余的窗口——至少你看清了什么还来得及。/ B面：但有些窗口关得无声无息——你不是在关上的那一刻知道的，你是在很久很久以后才意识到你早就错过了。关键张力：你错过的不是机会——是那个'有无限可能'的自己。 | 代价切口(−Φ): '一切皆有可能'这个青春幻觉的过期。",
        coreEn: "A-side: Realizing the window closed makes you treasure remaining windows — at least you see what's still possible. / B-side: But some windows close silently — you don't know at the moment, only much later do you realize you'd already missed it. Key tension: What you missed isn't opportunity — it's the self 'for whom everything was possible.' | Castration Circuit: The youth illusion of 'anything is possible' expires.",
        reference: "《都灵之马》在日复一日的劳作中无声耗尽的农人；《阳光灿烂的日子》回望青春时才意识到那是人生巅峰的成年人。",
        referenceEn: "The farmer silently exhausted by day-after-day labor in The Turin Horse; adults realizing only in retrospect that youth was life's peak in In the Heat of the Sun.",

        topology: "交出的不是年龄——而是'来得及'这个时态。窗口关得无声无息，你在很久以后才意识到早就错过了",

        directive: {
            bright: "写他清醒地看着'还有时间'从身上脱落。某天照镜子不是看到皱纹——是看到一张已经定型的脸。五官不会再变了，表情的种类已经固定了，惊喜的能力在缩小。他在这种定型的平静里辨认出代价的形状。不要写他得到了什么，只写他注视着'无限可能'这四个字离开。",
            dark: "写他翻到旧照片时撞见代价——照片里那个人的眼睛亮得像是不知道世界有边界。他不记得交出过这个。不是怀念——是认不出了。那个人和镜子里的人用着同一张脸，但眼神里的那种密度已经蒸发了。代价不是一次性收取的，它在每一张旧照片和镜子的对比里一笔一笔地扣。",
            tension: "看到年轻人在做他当年想做但没做的事——不是嫉妒，是一种精确的距离感。但他不确定是否已经付完——那个窗口到底是什么时候关的？他不知道是某一天关的还是每一天关一点最后关完的。写他看着那个年轻人时嘴角的弧度——不是笑也不是苦。不要给定义。"
        }
    },
    {
        id: "stake_creative_block",
        name: "创造力枯竭", nameEn: "Creative Death",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "灵感的泉眼干了——你还有技术但失去了那种'看到别人看不到的东西'的能力。",
        defEn: "The spring of inspiration has dried — you still have technique but lost the ability to 'see what others cannot.'",
        core: "A面：枯竭迫使你从'天才的灵感'转向'匠人的纪律'——也许深度比灵感更可靠。/ B面：但你记得它在的时候是什么感觉——那种不需要努力、画面自己涌来的状态。现在你面对空白画布，只有你和沉默在对峙。关键张力：没有灵感的艺术家——还是艺术家吗？ | 代价切口(−Φ): 创作欲望与创作能力之间的通道阻塞。",
        coreEn: "A-side: Exhaustion forces you from 'genius inspiration' to 'craftsman discipline' — perhaps depth is more reliable than spark. / B-side: But you remember how it felt when it was there — that effortless state where images flooded in. Now facing blank canvas, it's just you and silence in standoff. Key tension: An artist without inspiration — still an artist? | Castration Circuit: The channel between creative desire and creative capacity blocked.",
        reference: "《八又二分之一》拍不出电影的费里尼式导演；《闪灵》面对打字机只能反复打出同一句话的杰克。",
        referenceEn: "The Fellini-esque director who can't make a film in 8½; Jack typing the same sentence over and over before the typewriter in The Shining.",

        topology: "交出的不是技术——而是'画面自己涌来'这条暗线。泉眼干了，你和空白画布在对峙，技术还在但连接断了",

        directive: {
            bright: "写他清醒地看着'涌来'从身上脱落。坐在工作台前，手放上去，等——等了一小时。以前不需要等，画面排着队来。现在只有他和空白。他在这种等待的姿势里辨认出代价的形状。工具都在，材料都在，缺的是启动它们的那道脉冲。不要写他得到了什么，只写他注视着脉冲离开。",
            dark: "写他打开旧作品时撞见代价——这是他做的？这种流动、这种密度，现在再也做不出来了。他不记得交出过这个。试图复制当时的手法，每一步技术上都对，但结果是死的——像用正确的音符拼出一首没有旋律的曲子。代价不是一次性收取的，它在每一次技术正确但灵魂缺席的成品里一笔一笔地扣。",
            tension: "某天手动了——在不经意时画了几笔，回头一看，有什么东西闪了一下。但他不确定是否已经付完——那几笔是灵感回来了还是肌肉记忆的回光？他不知道下一次闪光会不会来，也不知道追问会不会把它吓走。写他看着那几笔的那几秒。不要给下一笔。"
        }
    },
    {
        id: "stake_dream_denied",
        name: "梦想被禁", nameEn: "Dream Denied",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "不是你放弃了梦想——是系统、命运或物理法则明确告诉你：不，你不可以。",
        defEn: "Not you abandoning the dream — but system, fate, or physical law explicitly telling you: no, you may not.",
        core: "A面：被禁止的梦想获得了一种额外的光环——正因为不可能，它在你心里永远保持完美。/ B面：但这种'完美'是残酷的安慰。你用'如果当初环境允许'来保护自己免于面对'也许即使允许我也做不到'。关键张力：你坚持说'是他们不让我'——你确定不是'你不敢'吗？ | 代价切口(−Φ): 欲望对象的禁止令——你只被允许远远看着它。",
        coreEn: "A-side: The forbidden dream gains an extra halo — precisely because impossible, it stays forever perfect in your heart. / B-side: But this 'perfection' is cruel comfort. You use 'if circumstances had allowed' to shield yourself from 'maybe even if allowed I couldn't.' Key tension: You insist 'they wouldn't let me' — are you sure it wasn't 'you didn't dare'? | Castration Circuit: A restraining order on the object of desire — you're only allowed to watch from afar.",
        reference: "《料理鼠王》不被允许进入厨房的老鼠厨师；《摔跤吧！爸爸》在性别歧视的铁壁面前被禁止上场的女摔跤手。",
        referenceEn: "The rat chef barred from the kitchen in Ratatouille; the female wrestler forbidden from competing by the iron wall of gender discrimination in Dangal.",

        topology: "交出的不是努力——而是'被允许尝试'这个资格。禁止令贴在门上，你只被允许远远看着它保持完美",

        directive: {
            bright: "写他清醒地看着'资格'从身上脱落。站在那扇门前，门很普通，但门上贴着他的名字和一个'不'字。他在这个'不'字的简洁里辨认出代价的形状。不是因为不够好——是因为规则在他出生之前就写好了。不要写他得到了什么，只写他注视着'可以'这两个字离开。",
            dark: "写他看到别人轻松走进那扇门时撞见代价——同样的门，对方只需要推就开了。他不记得交出过这个。不是嫉妒——是一种更基础的困惑：那扇门对他和对别人不是同一扇门。同样的木头、同样的把手，但他的版本上多了一把锁。代价在每一次看别人推门的轻松里一笔一笔地扣。",
            tension: "有人说'你可以做别的啊'——好意的建议。但他不确定是否已经付完——'别的'需要他先放下那个被禁止的东西，而被禁止的东西因为从未被拥有过所以无法被放下。他不知道一个从未握在手里的东西要怎么松手。写他听到建议时的那几秒。不要给替代方案。"
        }
    },
    {
        id: "stake_missed_moment",
        name: "错过的瞬间", nameEn: "Missed Moment",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "一个本可以改变一切的瞬间——你迟到了、犹豫了、或者根本不知道它曾经存在过。",
        defEn: "A moment that could have changed everything — you were late, hesitated, or never even knew it existed.",
        core: "A面：错过本身就是筛选——如果你当时没有抓住它，也许它本来就不是你的。/ B面：但这不是安慰——这是事后的自我催眠。你知道你当时如果再早一步、再勇敢一点、再清醒一点……那个瞬间就是你的。关键张力：你错过的是那个瞬间——还是那个版本的你？ | 代价切口(−Φ): 时间的不可回头性——没有存档读取。",
        coreEn: "A-side: Missing itself is filtering — if you didn't seize it then, perhaps it was never yours. / B-side: But this isn't comfort — it's post-hoc self-hypnosis. You know if you'd been one step earlier, one shade braver, one beat more awake... that moment was yours. Key tension: Did you miss the moment — or the version of yourself who could have seized it? | Castration Circuit: Time's irreversibility — no save file to reload.",
        reference: "《花样年华》在走廊里无数次擦肩却永远没说出口的周慕云与苏丽珍；《在世界尽头相遇》永远错过返航窗口的旅人。",
        referenceEn: "Chow and Su brushing past each other countless times in the corridor but never speaking in In the Mood for Love; the traveler who forever missed the return window in Encounters at the End of the World.",

        topology: "交出的不是时间——而是'再来一次'这个选项。时间没有存档读取，那个瞬间只出现过一次，你犹豫了",

        directive: {
            bright: "写他清醒地看着'来得及'从身上脱落。事后反复回放那个瞬间——如果快半步、勇敢一点、嘴巴再快一秒。但回放的画面每次都停在同一帧：他犹豫的那个表情。他在这个定格的犹豫里辨认出代价的形状。不要写他得到了什么，只写他注视着那一秒离开。",
            dark: "写他在类似场景里撞见代价——同样的灯光、同样的气氛、同样的可能性在空气里闪了一下。他不记得交出过这个。身体本能地绷紧了——这次要抓住。但手伸出去的速度和上次一样慢，犹豫已经刻进了反射弧。代价不是一次性收取的，它在每一次重演的犹豫里一笔一笔地扣。",
            tension: "很久以后偶然得知那个瞬间的另一面——对方也在等他开口。但他不确定是否已经付完——知道对方也在等让错过的重量翻了一倍，但同时也证明了那个瞬间是真的，不是他的幻想。他不知道'确认它是真的'让事情变好了还是变糟了。写他得知这件事后的那几秒。不要给重逢。"
        }
    },

    // ---- 欲望本身的丧失：客体小a从拓扑结构中被彻底拔除 ----

    {
        id: "stake_desire_death",
        name: "欲望熄灭", nameEn: "Desire Extinguished",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "不是'得不到'——是连'想要'的能力都消失了。你的欲望引擎永久熄火。",
        defEn: "Not 'can't get' — the ability to 'want' itself vanished. Your desire engine permanently stalled.",
        core: "A面：不再想要意味着不再被操控——欲望是大他者拴住你的绳索，绳子断了你就自由了。/ B面：但没有绳索的自由不是自由——是漂浮。你不再被拉向任何方向，也不再向任何方向行走。你只是停下来了。关键张力：没有欲望的人——是解脱了还是已经死了？ | 代价切口(−Φ): 拉康的终极公式——$◇a的a被拔除，$独留。",
        coreEn: "A-side: No longer wanting means no longer being controlled — desire is the Big Other's leash, cut the rope and you're free. / B-side: But ropeless freedom isn't freedom — it's drift. You're no longer pulled in any direction, nor walking toward any. You simply stopped. Key tension: A person without desire — liberated, or already dead? | Castration Circuit: Lacan's ultimate formula — the 'a' in $◇a is extracted, leaving $ alone.",
        reference: "《海边的曼彻斯特》拒绝一切情感连接的李；《局外人》对一切——包括母亲的死——都无所谓的莫尔索。",
        referenceEn: "Lee refusing all emotional connection in Manchester by the Sea; Meursault indifferent to everything — including his mother's death — in The Stranger.",

        topology: "交出的不是某个想要的东西——而是'想要'这个能力本身。欲望引擎熄火了，你不再被拉向任何方向，只是停下来了",

        directive: {
            bright: "写他清醒地看着'想要'从身上脱落。早晨醒来，天花板在上面，身体醒了但没有任何一个方向在召唤他起来。不是累——是引擎熄了。他在'没有理由起床但还是起来了'这件事里辨认出代价的形状。不要写他得到了什么，只写他注视着欲望离开。",
            dark: "写他在菜单前撞见代价——服务员等着他点菜，他看着每一道菜名都认识但没有一道让嘴巴有反应。他不记得交出过这个。'随便'——说出这个词不是敷衍，是精确的描述。哪一道都一样。代价不是一次性收取的，它在每一次'都行'和'随便'里一笔一笔地扣。",
            tension: "有人问'你想要什么'——任何语境，生日礼物、人生目标、晚餐。但他不确定是否已经付完——这个问题需要一个'想要'来回答，而那个零件不在了。他不知道'想要'的能力是被拔掉了还是只是太久没用生锈了。写他听到这个问题时的那几秒。不要给答案。"
        }
    },
    {
        id: "stake_meaning_collapse",
        name: "意义坍塌", nameEn: "Meaning Collapse",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "不是某一件事失去了意义——是'意义'这个概念本身对你而言不再成立了。",
        defEn: "Not one thing losing meaning — the concept of 'meaning' itself no longer holds for you.",
        core: "A面：意义坍塌是虚无主义的起点——但尼采说，只有穿越虚无主义才能到达另一边的价值重估。/ B面：但大多数人不是'穿越'——是被卡在了虚无里面。你看不到另一边，因为你甚至不再相信'另一边'存在。关键张力：如果连'追求意义'本身都没有意义——你还剩什么？ | 代价切口(−Φ): 元叙事的总破产——不是一个故事失败了，是'讲故事'这件事失败了。",
        coreEn: "A-side: Meaning collapse is nihilism's starting point — but Nietzsche said only through nihilism can you reach the revaluation on the other side. / B-side: But most don't 'pass through' — they get stuck inside the void. You can't see the other side because you no longer believe 'another side' exists. Key tension: If even 'seeking meaning' is meaningless — what's left? | Castration Circuit: Total bankruptcy of meta-narrative — not one story failed, but 'storytelling' itself failed.",
        reference: "《等待戈多》两个永远等不到意义到来的人；《都灵之马》在宇宙热寂般的沉默中一点一点熄灭的父女。",
        referenceEn: "Two people who will never see meaning arrive in Waiting for Godot; the father and daughter slowly extinguishing in a universe-heat-death silence in The Turin Horse.",

        topology: "交出的不是某个意义——而是'意义'这个概念本身。不是一个故事失败了，是'讲故事'这件事失败了",

        directive: {
            bright: "写他清醒地看着'为什么'从身上脱落。试图像从前一样给事情赋予意义——但那个动作像在空气里钉钉子，锤子落下去什么都没碰到。他在锤子落空的声响里辨认出代价的形状。不是不想找意义——是'找'这个动作本身不再产生摩擦力了。不要写他得到了什么，只写他注视着'为什么'离开。",
            dark: "写他听别人热情地讲一件事时撞见代价——对方眼睛亮着，声音有温度。他不记得交出过这个。试图理解对方的激动但理解停在了表面——像隔着玻璃看火，看得见光但感觉不到热。代价不是一次性收取的，它在每一次隔着玻璃的观看里一笔一笔地扣。",
            tension: "某天做了一件以前觉得有意义的事——帮了一个人、完成了一个项目。做完后等待那种'值得'的感觉到来。但他不确定是否已经付完——做完了，但'值得'没来，连'不值得'也没来，什么感觉都没来。他不知道感觉的缺席是暂时的断线还是永久的拆除。写他等感觉到来的那几秒。不要给到来。"
        }
    },
    {
        id: "stake_hollow_victory",
        name: "空洞胜利", nameEn: "Hollow Victory",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "你赢了——你得到了你拼命追求的一切。站在山顶环顾四周，发现什么都不在了。",
        defEn: "You won — got everything you fought for. Standing on the summit looking around, you find nothing is there.",
        core: "A面：空洞的胜利至少证明了你有能力赢——这本身就是一种不可否认的成就。/ B面：但你爬上山顶不是为了'证明我能爬上来'——你以为上面有什么东西在等你。什么都没有。山只是山。关键张力：如果得到之后你才发现你不想要——那你这一路的攀爬算什么？ | 代价切口(−Φ): 客体小a的终极秘密——它只在追逐中存在，一旦被捕获就消失。",
        coreEn: "A-side: Hollow victory at least proves you could win — that itself is undeniable achievement. / B-side: But you climbed the summit not to 'prove you could climb' — you thought something was waiting up there. Nothing was. The mountain was just a mountain. Key tension: If you discover you don't want it after getting it — what was the entire climb for? | Castration Circuit: Object petit a's ultimate secret — it only exists in pursuit; once captured, it vanishes.",
        reference: "《公民凯恩》拥有一切却在'玫瑰花蕾'的低语中孤独死去的报业巨头；《教父3》坐在空荡庄园里的老迈迈克尔。",
        referenceEn: "The media mogul who owned everything yet died alone whispering 'Rosebud' in Citizen Kane; the aged Michael sitting in an empty estate in The Godfather Part III.",

        topology: "交出的不是奖品——而是'追逐时的渴望'。客体小a只在追逐中存在，捕获的瞬间它消失了，山顶什么都没有",

        directive: {
            bright: "写他清醒地看着'渴望'从身上脱落。站在山顶，所有想要的东西都在脚下——权力、认可、财富。每一样都是真的，握在手里有重量。但手里满了之后才发现：驱动他往上爬的那股力量在到达的瞬间消失了。他在这种'拿到了但不饿了'的感觉里辨认出代价的形状。不要写他得到了什么，只写他注视着渴望离开。",
            dark: "写他在庆功宴上撞见代价——所有人在祝贺，香槟在冒泡，他端着杯子。他不记得交出过这个。每一句'恭喜'落在耳朵里都对，但穿过耳膜之后不知道去了哪里。嘴在笑，手在碰杯，但某个接收装置已经不在了。代价不是一次性收取的，它在每一声'恭喜'的空回响里一笔一笔地扣。",
            tension: "赢了之后有人问'接下来呢'——以前这个问题有一百个答案。但他不确定是否已经付完——山顶没有下一座山，或者有但他看不出它和这座有什么区别。他不知道是山用完了还是他用完了。写他站在山顶往四周看的那几秒。不要给下一座山。"
        }
    },
    {
        id: "stake_survivor_guilt",
        name: "幸存者之罪", nameEn: "Survivor's Guilt",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "应该死的是你——但死的是别人。你活着本身变成了一种你无法偿还的债。",
        defEn: "It should have been you — but it was someone else. Being alive itself has become an unpayable debt.",
        core: "A面：活着至少意味着你可以替死者完成他们未竟的事——你的生命继承了双份的使命。/ B面：但你活着的每一天都在累积利息。你不是'带着使命活'——你是'带着欠条活'。你享受的每一个快乐都有一个声音在说：凭什么是你？关键张力：如果你的生命是用别人的死换来的——你有义务活得'值得'吗？ | 代价切口(−Φ): 存在本身变成了负债——呼吸即欠款。",
        coreEn: "A-side: Being alive at least means you can finish what the dead left unfinished — your life inherits a double mission. / B-side: But every day you live accrues interest. You're not 'living with mission' — you're 'living with debt.' Every joy has a voice asking: why you? Key tension: If your life was bought with another's death — are you obligated to live 'worthily'? | Castration Circuit: Existence itself becomes debt — breathing is owing.",
        reference: "《辛德勒的名单》结尾崩溃痛哭'我本可以再多救一个'的辛德勒；《赎罪》用一生写作来偿还一个童年谎言的布莱奥尼。",
        referenceEn: "Schindler breaking down crying 'I could have saved one more' at the end of Schindler's List; Briony spending a lifetime writing to atone for one childhood lie in Atonement.",

        topology: "交出的不是生命——而是'活着不需要理由'这个轻盈。存在本身变成了负债，每一次呼吸都在累积利息",

        directive: {
            bright: "写他清醒地看着'轻盈'从身上脱落。活了下来，阳光照在皮肤上是温的，呼吸是顺的——但每一口空气都有一个标签：这本来是别人的。他在每一次本能的呼吸里辨认出代价的形状。不是不想活——是活着这件事从免费变成了赊账。不要写他得到了什么，只写他注视着轻盈离开。",
            dark: "写他在快乐的瞬间撞见代价——笑出声了，然后声音在嘴边断了。他不记得交出过这个。快乐涌上来的同时有一个声音说'凭什么'——不是外部的谴责，是身体内部自动生成的审计。每一次快乐都被同等大小的债务感抵消。代价不是一次性收取的，它在每一次笑声中断的那半秒里一笔一笔地扣。",
            tension: "有人说'活着就好'——真诚的安慰。但他不确定是否已经付完——'活着就好'这句话需要他相信活着本身有正值，而他的活着是用别人的死买的，正负相抵之后不确定是正还是零。他不知道这笔账有没有还清的那一天。写他听到安慰后的那几秒。不要给还清。"
        }
    },
    {
        id: "stake_absolute_solitude",
        name: "绝对孤独", nameEn: "Absolute Solitude",
        group: "E. 欲望的抽离", groupEn: "Objet a Extraction",
        def: "不是一个人待着——是确认了世界上没有任何一个存在能真正理解你内在发生的事。",
        defEn: "Not being alone — but confirming that no existence in the world can ever truly understand what is happening inside you.",
        core: "A面：绝对孤独也是绝对自主——没有人理解你，也就没有人有资格评判你。你成为了你自己的唯一裁判。/ B面：但人是关系性的存在——没有他者的回应，你连'我到底是谁'都无法确认。你不是在独处——你是在存在论的真空里漂浮。关键张力：如果永远没有人能理解你——'你是谁'这个问题还有答案吗？ | 代价切口(−Φ): 关系维度的归零——你和宇宙之间再也没有中介了。",
        coreEn: "A-side: Absolute solitude is absolute autonomy — no one understands you, so no one qualifies to judge you. You become your own sole judge. / B-side: But humans are relational beings — without the Other's response, you can't even confirm 'who am I.' You're not being alone — you're floating in an ontological vacuum. Key tension: If no one will ever understand you — does the question 'who are you' still have an answer? | Castration Circuit: The relational dimension zeroed — there's no longer any mediator between you and the universe.",
        reference: "《百年孤独》被永恒孤独谶语笼罩的布恩迪亚家族；《2001太空漫游》独自面对木星独白的大卫·鲍曼。",
        referenceEn: "The Buendía family shrouded by the eternal prophecy of solitude in One Hundred Years of Solitude; David Bowman alone facing the Jupiter monologue in 2001: A Space Odyssey.",

        topology: "交出的不是同伴——而是'被理解的可能性'。你和宇宙之间没有中介了，不是独处，是存在论的真空",

        directive: {
            bright: "写他清醒地看着'被懂'从身上脱落。试图对人描述内在发生的事——嘴在说，对方在点头，但他看到的是点头和理解之间的距离。每一次'我懂'都精确地证明了对方不懂。他在这些善意的'我懂'里辨认出代价的形状。不要写他得到了什么，只写他注视着被理解的可能性离开。",
            dark: "写他在人群中撞见代价——周围全是人，声音、笑声、体温。他不记得交出过这个。身体被人群包围但内部的信号发出去之后不知道去了哪里——像在水下喊话，嘴在动但声音不往外走。热闹包裹着他但穿不透那层膜。代价不是一次性收取的，它在每一次被包围却不被触及里一笔一笔地扣。",
            tension: "某天有人说了一句话——不是什么深刻的话，只是一句随口的描述——恰好碰到了他内在的某个精确位置。他停了一下。但他不确定是否已经付完——那句话碰到的是真的那个位置还是附近的位置？百分之九十的理解和百分之百的理解之间的距离可能是无限的。他不知道那百分之十的缝隙会不会永远存在。写他听到那句话后的那几秒。不要给完全理解。"
        }
    },
];
