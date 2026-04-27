import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_E: LibraryItemDef[] = [
    // ============================================================
    // GROUP E. 蔓延的余烬 (The Spreading Embers) - 20 Items
    // M7B 实在余痕：余数没有只留在主体身上——
    // 它溢出到了他者身上，感染了周围的人，
    // 改变了他们的轨道、他们的感受方式、他们和世界的关系。
    // ============================================================
    {
        id: "res_contagious_silence",
        name: "沉默传染", nameEn: "Contagious Silence",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你的沉默改变了你周围的人——他们在你面前也开始不自觉地沉默了。",
        defEn: "After the dust settles, your silence changed those around you — they too began falling silent in your presence.",
        core: "A面：你的沉默有一种重力——它让别人意识到有些事不该轻率地谈论。你的安静教会了别人尊重深度。/ B面：但你的沉默也让别人窒息。他们不知道你在想什么，也不敢问。你用沉默建了一堵墙，别人被迫住在墙另一边。关键张力：你的沉默保护了什么——同时隔绝了什么？ | 实在余痕(Σ): 整桌人都安静了。不是因为没话说。是因为你在。",
        coreEn: "A-side: Your silence has gravity — it makes others realize some things shouldn't be discussed lightly. Your quiet taught others to respect depth. / B-side: But your silence also suffocates others. They don't know what you're thinking and dare not ask. You built a wall of silence; others are forced to live on the other side. Key tension: What did your silence protect — and what did it isolate? | Residuum: The whole table went quiet. Not because there was nothing to say. Because you were there.",
        topology: "沉默从主体扩散为场域属性。一个人的静默改写了整个空间的声学规则——所有在场者的音量被同步衰减。",
        topologyEn: "Silence diffuses from subject into field property. One person's muteness rewrites the acoustic rules of the entire space — all present voices attenuate in sync.",
        directive: {
            bright: "她坐在那儿，什么也没说。但整张桌子的声音慢慢降下来了。不是因为压迫——是因为她身上有一种安静的重量，让别人忽然觉得自己嘴里的话太轻了。让读者感受到：有些沉默是一种教育。她不需要开口，就让所有人学会了停顿。",
            dark: "他一进门，所有人的喉咙就自动收紧了。他从来不说'闭嘴'，但效果一样。他的沉默是一种看不见的手——捂住了每个人的嘴。孩子们学会了不出声，客人们学会了不问。那个家安静得像一口井。让读者感到这种寂静里埋着尖叫。",
            tension: "她什么也没说。桌上安静下来了。也许大家是在尊重她——也许大家是被她吓住了。也许她的沉默是一种深度——也许它是一面墙。让读者自己去分辨：那种安静是庇护，还是窒息。不要给答案。让那个安静本身说话。"
        },
        reference: "《东京物语》老父亲的沉默让全家人都不知道该怎么开口——一种有传染力的安静病；《海边的曼彻斯特》李走进屋子，所有人的笑声就自动降了一个调。",
        referenceEn: "The old father's silence leaving the whole family unsure how to speak — a contagious quiet in Tokyo Story; Lee entering a room and everyone's laughter dropping a register in Manchester by the Sea."
    },
    {
        id: "res_fear_inheritance",
        name: "恐惧遗传", nameEn: "Fear Inheritance",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你的恐惧传给了你最亲近的人——他们开始害怕一些你害怕的东西，虽然他们并没有经历过。",
        defEn: "After the dust settles, your fears transferred to those closest to you — they began fearing things you fear, though they never lived through it.",
        core: "A面：你在用你的恐惧保护他们——你不想让他们经历你经历过的事。你的警告是爱的一种方式。/ B面：但你也把你的牢房复制给了他们。现在他们也被关在一个他们并不理解的恐惧里。关键张力：你在保护他们——还是在把你的监狱传染给他们？ | 实在余痕(Σ): 孩子怕水。你也怕。但孩子从来没溺过水。",
        coreEn: "A-side: You used your fear to protect them — you didn't want them to experience what you did. Your warning is a form of love. / B-side: But you also copied your cell for them. Now they're locked in a fear they don't even understand. Key tension: Are you protecting them — or infecting them with your prison? | Residuum: The child fears water. So do you. But the child has never nearly drowned.",
        topology: "恐惧的拓扑结构被复制并移植到另一个主体。原始创伤的形状完整保留，但宿主从未经历过那个事件——一种无源恐惧的垂直传递。",
        topologyEn: "The topological structure of fear is replicated and grafted onto another subject. The original trauma's shape is perfectly preserved, but the new host never lived the event — a vertical transmission of sourceless dread.",
        directive: {
            bright: "她每次看到孩子靠近水边都会冲过去拉住。孩子不明白为什么。但她知道——她差点在那条河里没了命。她的手臂是爱，不是锁链。让读者看到：她的警告不是神经质，是她用自己的伤口替孩子挡住了一个他们看不见的危险。她的恐惧是一面盾牌。",
            dark: "他的孩子从来没见过蛇。但孩子怕蛇怕到发抖。那是他种下的。他把自己的牢房一砖一砖地搬进了孩子的身体。孩子住在一个他从未亲眼见过的噩梦里——门从外面锁着，钥匙在父亲手里，但父亲自己也找不到了。让读者感到这种遗传的残忍。",
            tension: "她告诉女儿不要相信任何人。女儿照做了。女儿很安全——也很孤独。这到底是母亲的智慧，还是母亲的伤口在女儿身上重新长了一遍？让这个问题悬着。让读者在'被保护'和'被囚禁'之间找不到那条线。"
        },
        reference: "《闪灵》杰克的疯狂一层层传染给了丹尼——孩子继承了父亲的恐怖而不是记忆；《请以你的名字呼唤我》父亲阻止儿子在感情上冒险的方式——是他自己年轻时受过伤的回声。",
        referenceEn: "Jack's madness infecting Danny layer by layer — the child inheriting father's horror, not memory, in The Shining; the father's way of preventing his son from emotional risk — an echo of his own youthful wound in Call Me by Your Name."
    },
    {
        id: "res_mood_contamination",
        name: "氛围污染", nameEn: "Atmosphere Contamination",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你待过的空间、你参加过的聚会、你出现的场合，气氛都变了。",
        defEn: "After the dust settles, spaces you inhabit, gatherings you attend, occasions you appear at — the atmosphere changes.",
        core: "A面：你的存在有密度——你带着一种他人能感受到的分量。你让浅薄的场合变得深了一度。/ B面：但你也在无声地拖累别人的快乐。你的重力让别人不敢在你面前开心。关键张力：你的深度是一种礼物——还是一种惩罚？ | 实在余痕(Σ): 你一走，有人说了句笑话。所有人都笑了。你在的时候他们不敢笑。",
        coreEn: "A-side: Your presence has density — you carry a weight others can sense. You deepen shallow spaces by one degree. / B-side: But you're also silently dragging down others' joy. Your gravity makes people afraid to be happy around you. Key tension: Is your depth a gift — or a punishment? | Residuum: You left. Someone told a joke. Everyone laughed. They didn't dare when you were there.",
        topology: "主体的情绪密度向周围空间辐射，改变了整个场域的情感气压。他的存在像一个低气压中心——所有相邻区域的情绪被向下牵引。",
        topologyEn: "The subject's emotional density radiates into surrounding space, altering the entire field's affective barometric pressure. Their presence acts as a low-pressure center — dragging down the emotional register of all adjacent zones.",
        directive: {
            bright: "他走进来，整个房间的温度就变了一度。不是压迫——是深度。那些本来在聊八卦的人忽然觉得自己的话题太浅了。他的存在让空间变厚了。让读者感到：有些人自带重力，他们不需要做任何事，就让周围的一切变得更认真了。",
            dark: "她一出现，笑声就自动调低了音量。没人敢在她面前开玩笑。她身上带着一种东西——像潮湿，像阴天——它会渗进墙壁、渗进别人的肺。她走了以后大家才敢深呼吸。让读者感到这种氛围污染的窒息感——她把自己的灾难变成了空气。",
            tension: "他在的时候，所有人都严肃了。他走了以后，有人笑了。这到底说明他有深度——还是说明他让别人不敢快乐？让读者在'被深化'和'被压抑'之间犹豫。不要判断。让那个气压差自己说话。"
        },
        reference: "《东京物语》老夫妻出现在子女家中——空气立刻变得沉重和尴尬；《蓝色茉莉》茉莉走进任何房间都带着一种让人不安的气场——她把自己的灾难辐射到了所有周围的人身上。",
        referenceEn: "The old couple appearing at their children's homes — the air immediately turning heavy and awkward in Tokyo Story; Jasmine entering any room with an unsettling aura — radiating her disaster onto everyone around her in Blue Jasmine."
    },
    {
        id: "res_protective_overload",
        name: "保护过载", nameEn: "Protective Overload",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你开始过度保护身边的人——你不允许他们经历任何你经历过的风险。",
        defEn: "After the dust settles, you overprotect those around you — you won't allow them any risk you've experienced.",
        core: "A面：你的保护来自真实的伤口——你知道世界能有多残忍，你不忍心让他们知道。/ B面：但过度保护剥夺了他们长大的机会。你把自己的恐惧变成了他们的围墙。他们安全了，但也窒息了。关键张力：你在保护他们——还是在用保护控制他们？ | 实在余痕(Σ): 他想出去。你说不行。他问为什么。你说不出来。只是——不行。",
        coreEn: "A-side: Your protection comes from a real wound — you know how cruel the world can be and can't bear them knowing. / B-side: But overprotection robs them of the chance to grow. You turned your fear into their walls. Safe, but suffocating. Key tension: Are you protecting them — or controlling them through protection? | Residuum: They want to go out. You say no. They ask why. You can't explain. Just — no.",
        topology: "主体的创伤边界向外膨胀，将他者包裹在内。保护性外壳从自我防御扩张为对他人的全面封锁——笼子的半径不断增大，但锁从未打开。",
        topologyEn: "The subject's trauma boundary inflates outward, engulfing the other within. The protective shell expands from self-defense into total lockdown of others — the cage's radius keeps growing, but the lock never opens.",
        directive: {
            bright: "她知道外面有多危险——因为她身上有伤疤。所以她把孩子抱紧。每一条规矩都是一根从伤口里长出来的绷带。让读者看到：她不是在控制，她是在用自己碎掉过的身体替孩子挡住世界。她的过度保护是一封用恐惧写的情书。",
            dark: "他不让她出门。不让她见朋友。不让她冒任何险。他说这是爱。但那个'爱'的形状和监狱一模一样——四面墙，一把锁，没有窗。她在他最温柔的拥抱里慢慢窒息了。让读者感到：最可怕的牢笼是用爱焊死的。",
            tension: "他说'不行'。她问为什么。他说不出来。那个'不行'不是理性的——是内脏的。他在保护她吗？还是在把她锁进他自己逃不出去的恐惧？让读者在'这是爱'和'这是控制'之间无法落脚。让那个'不行'悬在空中。"
        },
        reference: "《海底总动员》马林因为妻子的死亡而把尼莫管到窒息——他的爱变成了全世界最温柔的牢笼；《房间》母亲在密室中保护儿子不知道外面的世界——但也剥夺了他知道的权利。",
        referenceEn: "Marlin suffocating Nemo because of his wife's death — his love becoming the world's gentlest cage in Finding Nemo; the mother protecting her son from knowing the outside world in Room — also stripping his right to know."
    },
    {
        id: "res_trauma_echo",
        name: "创伤回声", nameEn: "Trauma Echo",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你周围的人开始出现和你类似的症状——他们被你的创伤'传染'了。",
        defEn: "After the dust settles, people around you start showing symptoms similar to yours — they've 'caught' your trauma.",
        core: "A面：你的经历如此深重，它改变了你身边的磁场。跟你在一起久了的人自动被校准了。这说明你们之间的连接是真的。/ B面：但你在无意间把你的病传给了爱你的人。他们接住了你——也接住了你的阴影。关键张力：他们是在和你共情——还是你的创伤已经殖民了他们？ | 实在余痕(Σ): 他开始做你的噩梦了。你从来没跟他讲过那些事。",
        coreEn: "A-side: Your experience was so heavy it changed the magnetic field around you. Those near you long enough get recalibrated. This proves the connection is real. / B-side: But you unknowingly infected those who love you. They caught you — and your shadow. Key tension: Are they empathizing — or has your trauma colonized them? | Residuum: They started having your nightmares. You never told them about those things.",
        topology: "创伤从主体向他者进行水平传播。症状的形态被完整复制——接收者出现了与原始经历无关的征兆，仿佛阴影本身获得了感染力。",
        topologyEn: "Trauma propagates horizontally from subject to other. The symptom's morphology is replicated intact — the receiver manifests signs unrelated to any lived experience, as if the shadow itself acquired infectivity.",
        directive: {
            bright: "她从来没跟他说过那些事。但他待在她身边久了，开始懂了一些她没说的东西。他的身体替她记住了她的节奏。让读者感到：真正的亲密不需要语言——他被她校准了，这是连接的证据。他接住了她，连她的阴影一起。",
            dark: "他开始做她的噩梦了。那些画面他从来没见过——但它们从她的睡眠里爬进了他的。他的身体变成了她创伤的第二块屏幕。她没有告诉他任何事。但他已经被感染了。让读者感到这种传染的恐怖——爱是一种没有解药的病毒。",
            tension: "他开始怕黑了。在认识她之前他不怕。这到底是他在用身体理解她——还是她的创伤已经在他体内扎根了？让读者分不清共情和殖民的边界。让那个从未被讲述过的噩梦同时属于两个人。"
        },
        reference: "《现代启示录》威拉德在追踪库尔兹的过程中慢慢变成了库尔兹——创伤通过接触传播；《沉默的羔羊》克拉丽丝在和汉尼拔对话后——她开始用他的方式看世界了。",
        referenceEn: "Willard slowly becoming Kurtz while tracking him — trauma spreading through contact in Apocalypse Now; Clarice after conversations with Hannibal — she begins seeing the world his way in The Silence of the Lambs."
    },    {
        id: "res_doubt_seeding",
        name: "怀疑播种", nameEn: "Doubt Seeding",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你的不信任像种子一样种到了别人心里——他们开始怀疑以前不怀疑的东西。",
        defEn: "After the dust settles, your distrust seeded itself in others — they begin doubting what they never questioned before.",
        core: "A面：你说出的真相让别人也看到了你看到的东西——你打破了他们的幻觉。清醒是你送给他们的礼物。/ B面：但你也偷走了他们的天真。他们不再能不假思索地相信了。你的觉醒变成了他们的噩梦。关键张力：你让他们看见了真相——还是你把你的偏执传染给了他们？ | 实在余痕(Σ): 你对她说了一句话。之后她看所有人的眼神都变了。",
        coreEn: "A-side: Your spoken truth let others see what you saw — you broke their illusion. Clarity is a gift you gave them. / B-side: But you also stole their innocence. They can no longer believe unthinkingly. Your awakening became their nightmare. Key tension: Did you show them truth — or infect them with your paranoia? | Residuum: You said one sentence to her. After that, the way she looked at everyone changed.",
        topology: "怀疑作为认知病毒从主体水平传播——一句话即可在他者的信任结构中植入裂缝，原本稳固的认知地基开始松动。",
        topologyEn: "Doubt propagates horizontally from subject as a cognitive virus — a single sentence can plant a fissure in the other's trust structure, loosening a once-solid cognitive foundation.",
        directive: {
            bright: "她说了一句真话。只是一句。但那句话在他脑子里生了根——他开始看到他以前看不到的东西。让读者感到那种觉醒的力量：她打破了他的幻觉，让他看到了水面下的东西。她的怀疑是一份苦涩的礼物。清醒是她能给他的最残忍也最真实的东西。",
            dark: "她对他说了一句话。之后他看所有人的眼神都变了。她偷走了他的天真——他不再能不假思索地相信任何人了。她的觉醒变成了他的噩梦。他不知道她给了他的到底是真相还是她自己的偏执。但那颗种子已经发芽了。让读者感到被'唤醒'之后的那种再也回不去的寒冷。",
            tension: "她说了一句话。他愣了一下。然后他的目光变了。让读者分不清她给了他清醒还是给了他毒药——也许两者是同一种东西。他看到了真相吗？还是他只是继承了她的恐惧？那句话到底是解药还是病毒？让那个变了的目光自己回答。"
        },
        reference: "《楚门的世界》楚门发现真相后——所有观众都开始怀疑自己的天空是不是也是画的；《黑客帝国》被唤醒的人再也不能安心地吃牛排了——赛弗是个被真相毁掉的人。",
        referenceEn: "After Truman discovers the truth — all viewers begin doubting if their own sky is painted too in The Truman Show; the awakened can never peacefully eat a steak again — Cypher is a man destroyed by truth in The Matrix."
    },
    {
        id: "res_role_crystallization",
        name: "角色固化", nameEn: "Role Crystallization",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，在你的事件中扮演过某个角色的人，被永远钉在了那个角色上。",
        defEn: "After the dust settles, those who played a role in your event are permanently nailed to that role.",
        core: "A面：那些帮过你的人成为了你的恩人——你给了他们一个永久的好名声。你的故事也成了他们的勋章。/ B面：但你也可能把他们锁在了你的叙事里。他们只是'你故事里的那个角色'。关键张力：你记住了他们的好——还是你用你的故事替代了他们的全部身份？ | 实在余痕(Σ): 你介绍他时说：'他是当年帮过我的人。'他笑了。但他的眼睛没笑。",
        coreEn: "A-side: Those who helped you became your benefactors — you gave them a permanent good name. Your story became their medal. / B-side: But you may have locked them inside your narrative. They're no longer whole people — just 'that character in your story.' Key tension: Did you remember their goodness — or replace their full identity with your story? | Residuum: You introduced them: 'He helped me back then.' He smiled. But his eyes didn't.",
        topology: "他者的身份被主体的叙事事件永久固定——角色标签覆盖了原有的多维身份，将立体的人压缩成了叙事中的一个功能节点。",
        topologyEn: "The other's identity is permanently fixed by the subject's narrative event — the role-label overwrites the original multidimensional identity, compressing a full person into a functional node within the narrative.",
        directive: {
            bright: "你介绍他的时候说：'他是当年帮过我的人。'那个身份是你给他的勋章——他因为你的故事获得了一个永久的好名声。让读者看到这种角色固化的温暖面：你记住了他的好，你的故事让他的善意有了永恒的坐标。他值得被这样记住。",
            dark: "你介绍他时说：'他是当年帮过我的人。'他笑了。但他的眼睛没笑。他不只是那个角色——他有自己的故事、自己的痛、自己的人生。但在你的叙事里他只是一个功能：恩人。你用你的故事替代了他的全部身份。让读者感到这种叙事暴力：被记住有时比被遗忘更残忍。",
            tension: "你介绍他：'他是当年帮过我的人。'他笑了。但那个笑的后面有什么。让读者分不清他是被你的记忆感动了，还是被你的记忆困住了。你记住了他最好的一面——但你也可能用那一面覆盖了他的全部。那到底是纪念还是简化？让那个没笑到底的眼神自己说话。"
        },
        reference: "《辛德勒的名单》辛德勒之后只被记住为'犹太人的救星'——他的全部人生被压缩成了一个角色；《追风筝的人》哈桑永远是那个说'为你千千万万遍'的仆人——他的全部存在被冻在了那句话里。",
        referenceEn: "Schindler afterward remembered only as 'savior of Jews' — his entire life compressed into one role in Schindler's List; Hassan forever the servant who said 'for you a thousand times over' — his entire being frozen in that line in The Kite Runner."
    },
    {
        id: "res_emotional_seepage",
        name: "情绪渗透", nameEn: "Emotional Seepage",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你压住的情绪从你身体的缝隙里渗出去，淋到了身边的人身上。",
        defEn: "After the dust settles, emotions you suppressed seep through your cracks and drip onto those beside you.",
        core: "A面：你的压抑保护了表面的平静——你没有让情绪爆炸。你在替所有人维持秩序。/ B面：但压住的水总要从某个缝隙漏出来。你的暴躁、冷漠、突如其来的刻薄——它们都是渗漏。你的家人在替你承接你不愿面对的东西。关键张力：你在控制自己——还是你的情绪换了一条路径流向了别人？ | 实在余痕(Σ): 你没发脾气。但你妻子突然哭了。你不知道为什么。",
        coreEn: "A-side: Your suppression maintained surface calm — you didn't let emotions explode. You maintained order for everyone. / B-side: But suppressed water always leaks through some crack. Your irritability, coldness, sudden cruelty — all seepage. Your family catches what you won't face. Key tension: Are you controlling yourself — or did your emotions find an alternate path to others? | Residuum: You didn't lose your temper. But your wife suddenly cried. You don't know why.",
        topology: "被压抑的情绪从主体的裂缝中渗漏，沿最近的关系管道流向他者——接收者承载了发送者不愿面对的情感负荷。",
        topologyEn: "Suppressed emotion leaks from the subject's cracks, flowing along the nearest relational conduit toward the other — the receiver bears the emotional load the sender refuses to face.",
        directive: {
            bright: "他没发脾气。他从来不发脾气。他用自制力维持了表面的平静——他在替所有人维持秩序。让读者看到他的压抑不是懦弱，是一种代价高昂的保护。他把自己变成了一面防洪堤，挡住了可能淹没全家的情绪。他的沉默是给别人的礼物。",
            dark: "他没发脾气。但他妻子突然哭了。他不知道为什么——但她的身体知道。他压住的水总要从某个缝隙漏出来：他的冷漠、他突如其来的刻薄、他那些没有原因的沉默——它们都是渗漏。她在替他承接他不愿面对的东西。让读者感到这种情绪的间接暴力：他以为自己在控制，其实他只是换了一条管道。",
            tension: "他说他没事。但他旁边的人开始变得不安。让读者看到一种看不见的渗透：他的情绪没有爆发——它从他身体的缝隙里慢慢漏出去了，淋到了最近的人身上。他在控制自己吗？还是他的情绪只是换了一条路径？让那种不安自己蔓延。不要解释。"
        },
        reference: "《婚姻故事》查理从不大声说话——但他妻子替他承受了所有他没表达的愤怒；《美国丽人》莱斯特的中年抑郁通过家庭系统渗透到了女儿的叛逆和妻子的偏执里。",
        referenceEn: "Charlie never raises his voice — but his wife bears all the anger he never expressed in Marriage Story; Lester's midlife depression seeping through the family system into his daughter's rebellion and wife's obsession in American Beauty."
    },
    {
        id: "res_secret_gravity",
        name: "秘密重力", nameEn: "Secret Gravity",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你守着的秘密产生了一种引力场——把周围的人不知不觉地拉进了它的轨道。",
        defEn: "After the dust settles, the secret you keep generates a gravitational field — pulling those around you unknowingly into its orbit.",
        core: "A面：你独自承担了这个秘密——你用沉默保护了别人不必知道。你的隐忍有尊严。/ B面：但秘密会变形它周围的空间。别人感觉到了不对却说不出来。你的秘密变成了弥漫在所有人中间的无名不安。关键张力：你在保护他们不知道——还是你的秘密已经在他们不知道的地方伤害了他们？ | 实在余痕(Σ): 没人知道。但每个人都觉得哪里不对。空气稠了一点。",
        coreEn: "A-side: You bore this secret alone — your silence protected others from knowing. Your endurance has dignity. / B-side: But a secret warps the space around it. Others sense something is off but can't name it. Your secret became a nameless unease permeating everyone. Key tension: Are you protecting them from knowing — or has your secret already hurt them where they can't see? | Residuum: No one knows. But everyone feels something is wrong. The air is slightly thicker.",
        topology: "秘密在主体内部形成了一个引力奇点——虽然不可见，但它弯曲了周围所有关系的空间，使在场者的行为轨迹都围绕一个他们看不见的中心偏转。",
        topologyEn: "The secret forms a gravitational singularity within the subject — though invisible, it warps the space of all surrounding relationships, deflecting everyone's behavioral trajectories around a center they cannot see.",
        directive: {
            bright: "没人知道。他独自承担了这个秘密。他的沉默保护了所有人不必知道那个真相。让读者看到他的隐忍有尊严——他没有把重量转嫁给任何人。他一个人扛着，安静地，像一座看不见的桥。他的沉默是一种不求回报的牺牲。",
            dark: "没人知道。但每个人都觉得哪里不对。空气稠了一点。笑声假了一点。他的秘密像一颗隐形的星球——看不见，但它在弯曲周围所有人的轨道。他以为自己在保护他们，但他的秘密已经在他们看不见的地方改变了他们。让读者感到那种弥漫在空气中的无名不安。",
            tension: "没人知道。但每个人都觉得有什么不对。让读者和他们一起坐在那种不对劲里——那种说不出来的稠度。他的沉默到底是在保护他们，还是他的秘密已经在他们不知道的地方伤害了他们？不要揭示秘密是什么。让那种重力自己说话。"
        },
        reference: "《赎罪》布莱奥尼的秘密让整个家庭三代人活在一种说不出来的歪斜里；《寄生虫》地下室的秘密改变了整栋房子的气场——住在上面的人能感觉到，但不知道那是什么。",
        referenceEn: "Briony's secret leaving three generations of family living in an indefinable tilt in Atonement; the basement secret altering the entire house's atmosphere — those above can feel it but can't name it in Parasite."
    },
    {
        id: "res_guilt_transfer",
        name: "内疚转嫁", nameEn: "Guilt Transfer",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你的内疚传到了不该内疚的人身上——他们开始觉得那件事也有他们的责任。",
        defEn: "After the dust settles, your guilt transferred to people who shouldn't feel guilty — they begin thinking it was partly their fault.",
        core: "A面：你的内疚让别人意识到了他们可能的疏忽——他们也开始反思自己是否做得不够好。/ B面：但你把不属于他们的重量放到了他们肩上。他们没有做错什么——但现在他们觉得自己也有罪。关键张力：你是在分担——还是在无意识地把你的债务转给了无辜的人？ | 实在余痕(Σ): 你说了句'对不起'。然后她开始道歉。但她什么都没做错。",
        coreEn: "A-side: Your guilt made others realize their potential negligence — they too began reflecting on whether they did enough. That mutual examination has sincerity. / B-side: But you placed weight that isn't theirs on their shoulders. They did nothing wrong — but now they feel guilty too. Key tension: Are you sharing the burden — or unconsciously transferring your debt to the innocent? | Residuum: You said 'I'm sorry.' Then she started apologizing. But she did nothing wrong.",
        topology: "内疚的负荷从原始承载者向外扩散——无辜的旁观者被卷入债务场，开始承担不属于他们的偿还义务。",
        topologyEn: "The guilt-load diffuses outward from its original bearer — innocent bystanders are drawn into the debt-field, taking on repayment obligations that are not theirs.",
        directive: {
            bright: "他说了句'对不起'。然后她开始反思自己是不是也做得不够好。他的内疚让她意识到了自己可能的疏忽——她也开始认真地审视自己。让读者感到那种共同反省的真诚：他的道歉不是转嫁，是一种邀请。他们一起面对了某种本来只属于他的重量。",
            dark: "他说了句'对不起'。然后她开始道歉。但她什么都没做错。他把不属于她的重量放到了她肩上——他的内疚像一种气体，弥漫到了最近的人身上。她开始觉得那件事也有她的责任。但那是他的债。让读者感到这种转嫁的无意识残忍：他以为自己在分担，其实他在找替罪羊。",
            tension: "他说了句'对不起'。然后她也说了句'对不起'。但她什么都没做错。让读者停在这个瞬间——这到底是两个人在共同承担，还是他的内疚感染了一个无辜的人？她的道歉是真诚的反思，还是被他的重力拖进去的条件反射？不要判断。让两句'对不起'在空气中互相看着。"
        },
        reference: "《海边的曼彻斯特》李的内疚辐射到了他侄子身上——帕特里克开始觉得叔叔的痛苦是不是因为自己不够好；《普通人》康拉德的自杀未遂让母亲永远背上了一个她不该背的'是不是我让他不想活'。",
        referenceEn: "Lee's guilt radiating onto his nephew — Patrick wondering if his uncle's pain is because he's not good enough in Manchester by the Sea; Conrad's suicide attempt leaving the mother permanently carrying an undeserved 'was it because of me' in Ordinary People."
    },
    {
        id: "res_distance_radiation",
        name: "距离辐射", nameEn: "Distance Radiation",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你对距离的需求辐射到了别人身上——他们开始回避你，虽然他们不知道为什么。",
        defEn: "After the dust settles, your need for distance radiated outward — others start avoiding you, though they don't know why.",
        core: "A面：你发出的信号是清晰的——你需要空间，别人尊重了你。你的边界被承认了。/ B面：但你的距离信号太强了。别人不是尊重你——是被你吓跑了。你以为你在保护自己，其实你在驱逐所有人。关键张力：他们给你空间是因为尊重——还是因为你已经让他们害怕了？ | 实在余痕(Σ): 你想要的空间终于有了。但现在没有人来填了。",
        coreEn: "A-side: Your signal was clear — you needed space, others respected it. Your boundaries were honored. / B-side: But your distance signal was too strong. Others aren't respecting you — they're scared away. You thought you were protecting yourself; you were driving everyone out. Key tension: Did they give you space out of respect — or because you've already frightened them? | Residuum: You got the space you wanted. But now no one comes to fill it.",
        topology: "主体的回避需求向外辐射形成排斥场——他者在无意识中被推离，仿佛碰到了一道看不见的力场边界。距离从主体的选择变成了空间的属性。",
        topologyEn: "The subject's avoidance-need radiates outward as a repulsive field — others are unconsciously pushed away as if hitting an invisible force-field boundary. Distance shifts from the subject's choice to a property of space itself.",
        directive: {
            bright: "他发出的信号是清晰的——他需要空间。别人尊重了他的边界。让读者感到那种边界被承认的尊严：他不需要解释，不需要道歉。他的距离是一种诚实——他知道自己现在需要什么，而世界听到了。",
            dark: "他以为自己在保护自己。但他的距离信号太强了——别人不是尊重他，是被他吓跑了。他的空间越来越大，越来越空。他想要的那个安全距离终于有了。但现在没有人来填了。让读者感到那种成功的回避背后的荒凉：他赢了。他得到了孤独。",
            tension: "他们给了他空间。让读者分不清那是出于尊重还是出于恐惧——也许他的距离信号里有一种他自己听不到的频率，而那个频率的意思不是'请给我空间'，是'不要靠近我'。两者之间的区别，他自己可能也分不清了。让那个空旷替他说话。"
        },
        reference: "《出租车司机》特拉维斯的距离感让他身边的每个人都本能地后退一步——他的孤独有传染力；《托尼·厄德曼》父亲想靠近女儿——但女儿身上的距离辐射让所有亲密都反弹回来。",
        referenceEn: "Travis's distance making everyone around him instinctively step back — his loneliness is contagious in Taxi Driver; a father trying to reach his daughter — but her distance radiation bouncing all intimacy back in Toni Erdmann."
    },
    {
        id: "res_narrative_parasite",
        name: "叙事寄生", nameEn: "Narrative Parasitism",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你的故事吃掉了别人的故事——他们的经历被你的叙事覆盖了。",
        defEn: "After the dust settles, your story consumed others' stories — their experiences were overwritten by your narrative.",
        core: "A面：你的经历如此极端，它成了所有人的参照系。你成了他们衡量自身的坐标。/ B面：但你的参照系太重了——别人的痛苦在你面前都自动缩小了。因为'比起你那算什么'他们不敢说自己难受。关键张力：你的故事是一面镜子——还是一个黑洞，吞掉了别人表达痛苦的权利？ | 实在余痕(Σ): 她想说说自己的事。但她看了你一眼。然后说：'算了，我那个不算什么。'",
        coreEn: "A-side: Your experience was so extreme it became everyone's reference. You gave them a coordinate to measure against. / B-side: But your reference was too heavy — others' pain automatically shrank beside yours. They dare not say they're hurting because 'compared to you, it's nothing.' Key tension: Is your story a mirror — or a black hole consuming others' right to express pain? | Residuum: She wanted to talk about herself. Then she glanced at you. Then said: 'Never mind, mine doesn't count.'",
        topology: "主体的叙事引力场吞噬了他者的叙事空间——相邻的故事被拉入主体叙事的事件视界，丧失了独立存在的可能性。",
        topologyEn: "The subject's narrative gravity field devours the other's narrative space — adjacent stories are pulled past the event horizon of the subject's narrative, losing the possibility of independent existence.",
        directive: {
            bright: "他的经历如此极端，它成了所有人的参照系。别人在他面前说自己的痛苦时，会不自觉地先掂量一下。让读者看到他的故事有一种校准功能——他的极端让别人的视角变宽了。他成了一面让所有人重新衡量自身的镜子。",
            dark: "她想说说自己的事。但她看了他一眼。然后说：'算了，我那个不算什么。'他的故事太重了——重到别人的痛苦在他面前自动缩小。他不需要说'你那个不算什么'，他的存在本身就在说。让读者感到这种叙事吞噬的暴力：他偷走了别人表达痛苦的权利，甚至没有意识到。",
            tension: "她想说什么。她看了他一眼。她没说。让读者分不清她是在尊重他的痛苦，还是被他的痛苦压哑了。他的故事是一面镜子——还是一个黑洞？也许她的沉默是体贴。也许她的沉默是窒息。让两种可能同时存在在那个没说出口的句子里。"
        },
        reference: "《美丽人生》父亲的故事太强大了——儿子的真实感受永远被压在了那个'游戏'叙事下面；《房间》杰克出来之后——他自己的故事被妈妈的被囚叙事完全覆盖了。",
        referenceEn: "The father's story so powerful — the son's real feelings forever pressed beneath the 'game' narrative in Life Is Beautiful; after Jack gets out — his own story completely overwritten by his mother's captivity narrative in Room."
    },
    {
        id: "res_expectation_projection",
        name: "期待投射", nameEn: "Expectation Projection",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你开始把你的经验投射到别人身上——你替他们预见了悲剧，虽然那是你的剧本不是他们的。",
        defEn: "After the dust settles, you project your experience onto others — predicting tragedy for them, though it's your script, not theirs.",
        core: "A面：你的预警来自真实经验——你比别人更早看到危险信号。你的直觉被训练过了。/ B面：但你把自己的结局当成了所有人的结局。你看到的不是他们的未来——是你的过去在他们身上的倒影。关键张力：你在帮他们预见风险——还是你在强迫他们活在你的剧本里？ | 实在余痕(Σ): 你对他说：'你会后悔的。'但你说的是你的后悔，不是他的。",
        coreEn: "A-side: Your warning comes from real experience — you spot danger signals before others. Your intuition was trained. / B-side: But you treated your ending as everyone's ending. What you see isn't their future — it's your past reflected onto them. Key tension: Are you helping them foresee risk — or forcing them to live in your script? | Residuum: You told them: 'You'll regret it.' But you were speaking your regret, not theirs.",
        topology: "主体的过去经验作为模板被投射到他者的未来轨迹上——他人的可能性空间被主体的剧本预先塌缩，自由度被锁定。",
        topologyEn: "The subject's past experience is projected as a template onto the other's future trajectory — the other's possibility space is pre-collapsed by the subject's script, locking down their degrees of freedom.",
        directive: {
            bright: "他比别人更早看到了危险信号——因为他经历过。他的直觉被训练过了，他能在三个月前就闻到灾难的味道。让读者感到他的预警有一种被验证过的精准：他不是多疑，是他已经在那条路上摔过了。他的经验是别人买不到的雷达。",
            dark: "他对他说：'你会后悔的。'但他说的是自己的后悔，不是对方的。他把自己的结局当成了所有人的结局——他看到的不是别人的未来，是自己的过去在别人身上的倒影。他在强迫别人活在他的剧本里。让读者感到这种投射的暴力：他以为在预警，其实在控制。",
            tension: "他说：'你会后悔的。'让读者停在这句话上——他是在帮对方预见风险，还是在强迫对方住进他的恐惧？也许他的经验是真的。也许他的经验已经变成了一副眼镜，让他只能看到一种结局。让那句'你会后悔的'悬在空气中。让它同时是警告和诅咒。"
        },
        reference: "《教父》维托·柯里昂用自己的一生经验预判了所有人的背叛——他总是对的，但他也让每个人都活在了他的猜疑投射里；《黑镜》某集中被植入记忆监控的伴侣——一个把怀疑投射变成了系统的世界。",
        referenceEn: "Vito Corleone using lifetime experience to predict everyone's betrayal — always right, but making everyone live in his projection in The Godfather; partners implanted with memory surveillance — a world that systematized projected suspicion in Black Mirror."
    },
    {
        id: "res_unfinished_delegation",
        name: "未竟之事的委托", nameEn: "Unfinished Business Delegation",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你没完成的事变成了别人的负担——他们替你背着你放不下的东西。",
        defEn: "After the dust settles, what you left unfinished became others' burden — they carry what you couldn't put down.",
        core: "A面：有人愿意替你接着做——你的未竟之事被继承了，你的愿望没有完全消失。/ B面：但那是你的任务，不是他们的。他们替你活了一段你没活完的人生——但那段人生属于你。关键张力：他们是在完成你的愿望——还是被你的幽灵绑架了？ | 实在余痕(Σ): 你走了。他接着做。他做到了。但他不知道那是不是他自己想做的。",
        coreEn: "A-side: Someone willing to continue — your unfinished business was inherited, your wish didn't fully die. / B-side: But that was your task, not theirs. They lived a stretch of life you didn't finish — but that life belongs to you. Key tension: Are they fulfilling your wish — or being kidnapped by your ghost? | Residuum: You left. They continued. They succeeded. But they don't know if it was what they wanted.",
        topology: "主体的未竟目标被转移到他者身上——他者的行动轨迹被主体的幽灵意志接管，成为未完成剧本的延续执行者。",
        topologyEn: "The subject's unfinished goal is transferred onto the other — the other's action trajectory is hijacked by the subject's ghost-will, becoming the continuation executor of the uncompleted script.",
        directive: {
            bright: "他走了。但有人接着做了。他的愿望没有完全消失——它在另一个人手里活了下来。让读者感到那种继承的温暖：有人愿意替他接着走。那个未竟之事不是负担，是一份信任。继承者不是被绑架了——他是自愿接过了火炬。",
            dark: "他走了。他留下了一个没完成的任务。现在另一个人在替他做。那个人做到了——但他不知道那到底是不是自己想做的。他替一个幽灵活了一段人生。让读者感到那种被未竟之事绑架的窒息感：他以为是选择，其实是继承。他以为在活自己的命，其实在替别人续约。",
            tension: "他走了。她接着做了。做到了。让读者停在那个'做到了'上面——这是她自己的成就，还是她替他完成的遗嘱？她不知道。也许她永远不会知道。也许那个答案不重要。也许重要的是她还在做。让那个'不知道'悬着。"
        },
        reference: "《教父》迈克尔接过了父亲未竟的'事业'——他以为是选择，其实是继承；《追风筝的人》阿米尔用一生去完成对哈桑的赎罪——但那个未竟之事像遗产一样又传给了哈桑的儿子。",
        referenceEn: "Michael inheriting his father's unfinished 'business' — thinking it was choice, actually inheritance in The Godfather; Amir's lifelong atonement to Hassan — that unfinished business passed like inheritance to Hassan's son in The Kite Runner."
    },
    {
        id: "res_absence_shape",
        name: "缺席的形状", nameEn: "The Shape of Absence",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你的离开在别人的生活里留下了一个你形状的洞——他们围着那个洞重新安排了一切。",
        defEn: "After the dust settles, your absence left a you-shaped hole in others' lives — they rearranged everything around it.",
        core: "A面：你在别人心里留下了痕迹——你对他们来说足够重要，重要到你的缺席也有形状。/ B面：但那个洞不会自动愈合。他们围着你的缺席建了新的生活——但新的生活是歪的，因为中间少了一块。关键张力：你的缺席是他们的伤口——还是他们不愿意让那个洞愈合？ | 实在余痕(Σ): 他们在桌上还放着你的碗。每顿饭都绕过那个位置。",
        coreEn: "A-side: You left a mark in their hearts — you mattered enough that even your absence has a shape. / B-side: But that hole won't heal by itself. They built new lives around your absence — but the new life is crooked, because a piece is missing. Key tension: Is your absence their wound — or do they refuse to let the hole heal? | Residuum: They still set your bowl at the table. Every meal arranged around that seat.",
        topology: "主体的离开在他者的生活空间中留下了一个精确的负模——其余所有结构围绕这个空洞重新排列，缺席本身获得了拓扑上的组织力。",
        topologyEn: "The subject's departure left a precise negative mold in the other's living space — all remaining structures rearranged around this void, the absence itself acquiring topological organizing power.",
        directive: {
            bright: "他们在桌上还放着她的碗。每顿饭都绕过那个位置。那个空位不是遗忘——是纪念。她在他们心里留下了痕迹，重要到她的缺席也有形状。让读者感到那种无声的忠诚：他们没有填满那个洞。他们选择围着它生活。那个空位是他们能给她的最后的位置。",
            dark: "她走了。他们围着她的缺席重新安排了一切——吃饭的座位、节日的流程、说话时自动绕开的话题。新的生活是歪的，因为中间少了一块。那个洞不会自动愈合——他们也不让它愈合。让读者感到那种围绕着空洞建造的生活有多脆弱：每一天都是一次对缺席的默认。",
            tension: "他们还放着她的碗。让读者分不清那到底是纪念还是拒绝接受。那个空位是他们的伤口——还是他们不愿意让那个洞愈合？也许拿走那个碗比继续放着更痛。也许有一天他们会拿走。但不是今天。让那只碗在桌上等着。"
        },
        reference: "《海边的曼彻斯特》那套公寓里永远空着的三间儿童房——李的缺席比他的在场更有形状；《寻梦环游记》被从祭坛上拿掉的照片——一个人的缺席可以让另一个人在亡灵世界里消失。",
        referenceEn: "Three forever-empty children's rooms in that apartment — Lee's absence having more shape than his presence in Manchester by the Sea; a photo removed from the altar — one person's absence causing another to vanish in the land of the dead in Coco."
    },
    {
        id: "res_debt_displacement",
        name: "债务位移", nameEn: "Debt Displacement",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你欠下的情感债被不相关的人偿还了——他们在替你还一笔你欠的账。",
        defEn: "After the dust settles, the emotional debt you owed was repaid by unrelated people — they're paying a bill you ran up.",
        core: "A面：有人主动替你承担了——这说明你周围有愿意为你付出的人。你的存在触发了善意。/ B面：但他们还的不是他们的债。他们在承受你本应承受的后果。你的逃离有了替罪羊。关键张力：他们是在爱你——还是你的缺席把他们变成了替身？ | 实在余痕(Σ): 你走了。他留下来收拾。那些烂摊子不是他弄的。但他在扫。",
        coreEn: "A-side: Someone voluntarily bore your burden — meaning people willing to sacrifice exist around you. Your existence triggered goodwill. / B-side: But they're repaying a debt that isn't theirs. They bear consequences you should have borne. Your escape made them scapegoats. Key tension: Are they loving you — or did your absence turn them into stand-ins? | Residuum: You left. They stayed to clean up. The mess isn't theirs. But they're sweeping.",
        topology: "情感债务从原始债务人位移到无关的第三方——偿还义务的拓扑位置与债务产生的拓扑位置完全脱钩，替代者占据了原始位置。",
        topologyEn: "Emotional debt displaces from the original debtor to an unrelated third party — the topological position of repayment obligation is completely decoupled from where the debt originated; the surrogate occupies the original position.",
        directive: {
            bright: "他走了。有人留下来替他收拾。那些烂摊子不是那个人弄的——但他愿意扫。让读者看到这种主动承担的善意：有人在，有人愿意替你兜底。这不是被利用——是爱的一种最不起眼的形状。那个正在扫地的人知道自己在做什么。",
            dark: "他走了。她留下来收拾。那些碎片不是她弄的。但她在扫。她在承受他本应承受的后果——他的逃离有了替罪羊。她在还一笔不是她欠的债。让读者感到那种债务位移的不公平：他带走了自由，把账单留在了桌上。而她在付。",
            tension: "他走了。她留下来了。让读者分不清她是在爱他——还是他的缺席把她变成了替身。她是自愿的吗？还是那个债务场太强了，把最近的人自动吸了进去？也许她的善意和她的被利用之间，根本没有一条清晰的线。让她继续扫。让答案在灰尘里。"
        },
        reference: "《追风筝的人》哈桑替阿米尔背了一辈子的罪——一个人的债务位移可以吃掉另一个人的整个人生；《教父2》汤姆·黑根替柯里昂家族承受了所有迈克尔不愿面对的后果。",
        referenceEn: "Hassan bearing Amir's sin for a lifetime — one person's debt displacement consuming another's entire life in The Kite Runner; Tom Hagen bearing all consequences Michael refuses to face for the Corleone family in The Godfather Part II."
    },
    {
        id: "res_standard_displacement",
        name: "标准位移", nameEn: "Standard Displacement",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你改变了的标准不知不觉也改变了身边人的标准——他们开始用你的尺子量自己。",
        defEn: "After the dust settles, your changed standards unknowingly changed those around you — they began measuring themselves by your ruler.",
        core: "A面：你的高标准提升了周围人的眼光——跟你在一起久了，他们对自己也要求更多了。/ B面：但你的尺子可能已经是扭曲的了。他们在用一个被伤痛变形的标准来衡量正常生活。关键张力：你提升了他们——还是你把你变形的标准传染给了他们？ | 实在余痕(Σ): 她开始嫌自己的生活太普通了。你没说过一句话。但她在用你的标准看自己。",
        coreEn: "A-side: Your high standards elevated those around you — being with you long enough, they demanded more of themselves. Your presence is a yardstick. / B-side: But your ruler may already be warped. They're measuring normal life by a standard deformed by pain. Key tension: Did you elevate them — or infect them with your deformed standards? | Residuum: She started finding her life too ordinary. You said nothing. But she was measuring herself by your ruler.",
        topology: "主体的衡量标尺被复制并植入到他者的认知框架中——他者开始使用一把可能已经被创伤变形的尺子来测量自己的正常生活。",
        topologyEn: "The subject's measuring ruler is replicated and implanted into the other's cognitive framework — the other begins using a ruler potentially deformed by trauma to measure their own normal life.",
        directive: {
            bright: "跟她在一起久了，他对自己的要求变高了。她没有说过一句'你应该更努力'，但她的标准有一种自然的传染力。让读者感到那种被提升的正面力量：她的存在就是一把尺子，让周围的人不自觉地想长高一点。她的高标准是一份不需要说出口的礼物。",
            dark: "她开始嫌自己的生活太普通了。他没说过一句话。但她在用他的标准看自己——而那个标准已经被伤痛扭曲了。他的'不够好'不是真的不够好，是他的尺子坏了。但她不知道。她用一把变形的尺子量自己，然后觉得自己矮了。让读者感到这种标准传染的隐蔽暴力。",
            tension: "她觉得自己的生活不够好了。她不知道这种感觉是从哪里来的。让读者看到那个来源：是他。不是他说了什么——是他的存在本身就在发射一种频率。她被提升了吗？还是她被一把变形的尺子量坏了？让那种'不够好'的感觉悬在两种解释之间。"
        },
        reference: "《鞭打》弗莱彻的标准传染了安德鲁——安德鲁再也无法接受'还不错'，只能追求'完美或者死';《黑天鹅》妮娜的完美主义通过竞争关系传染给了莉莉。",
        referenceEn: "Fletcher's standards infecting Andrew — Andrew can never accept 'good enough,' only 'perfect or death' in Whiplash; Nina's perfectionism infecting Lily through competition in Black Swan."
    },
    {
        id: "res_space_marking",
        name: "空间标记", nameEn: "Space Marking",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你待过的地方对别人来说也变了——他们经过那个地方时会不自觉地停下来。",
        defEn: "After the dust settles, places you inhabited changed for others too — they unconsciously pause when passing through.",
        core: "A面：你的经历给那个空间留了一道印记——它因为你变成了一个有故事的地方。/ B面：但那个印记也可能是一种诅咒。别人在那里感到不安，却说不出为什么。你把不安种在了墙里。关键张力：你给那个地方留了一份记忆——还是一个阴影？ | 实在余痕(Σ): 他们搬进了你住过的房间。一切都重新粉刷了。但有时他们会莫名地不想待在里面。",
        coreEn: "A-side: Your experience left a mark on that space — it became a place with a story because of you. Space remembered you. / B-side: But that mark may be a curse. Others feel uneasy there but can't say why. You planted your unease in the walls. Key tension: Did you leave a memory — or a shadow? | Residuum: They moved into your old room. Everything freshly painted. But sometimes they inexplicably don't want to stay.",
        topology: "主体的经验在物理空间中留下了持久的情感沉积——空间的拓扑属性被主观经历永久改写，后来的占据者在不知情的情况下被残留的情感场域影响。",
        topologyEn: "The subject's experience deposits a persistent emotional sediment in physical space — the space's topological properties are permanently rewritten by subjective experience, and subsequent occupants are affected by the residual affective field without knowing why.",
        directive: {
            bright: "每次他经过那里都会放慢脚步。那个地方因为他的经历获得了一种只有他能感知的神圣性。让读者感到那种无声的朝圣：他不需要鲜花和纪念牌。他只需要在那里多站一秒。那一秒里，那个空间记住了他，他记住了那个空间。这是一种只属于他的地理学。",
            dark: "他们搬进了他住过的房间。一切都重新粉刷了。但有时他们会莫名其妙地不想待在里面——一种说不出来的东西，像潮湿，像旧的悲伤渗进了墙里。他把不安种在了空间里。让读者感到那种空间被标记后的诡异：物理上什么都没变，但那个房间已经不是中性的了。",
            tension: "他们经过那个地方。停了一下。他们不知道为什么停。让读者也不知道——那个停顿是一种说不出的感应，还是纯粹的巧合？那个空间到底记住了什么？还是什么都没记住，只是他们自己的身体在编故事？让那个停顿悬着。让空间自己决定它有没有记忆。"
        },
        reference: "《闪灵》237号房间——杰克之后每个住进去的人都感觉到了什么；《花样年华》2046号房间——周慕云走后，那个房间对每一个后来住进去的人都意味着什么，虽然他们不知道。",
        referenceEn: "Room 237 — everyone who enters after Jack feels something in The Shining; Room 2046 — after Chow leaves, the room means something to every subsequent occupant, though they don't know why in In the Mood for Love."
    },
    {
        id: "res_tone_contagion",
        name: "语气传染", nameEn: "Tone Contagion",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你说话的方式改变了你周围人说话的方式——他们开始用你的语气和你的词。",
        defEn: "After the dust settles, how you speak changed how those around you speak — they start using your tone and your words.",
        core: "A面：你的语气有影响力——你的表达方式被人模仿，说明你的声音留下了回声。/ B面：但你的语气可能是创伤的产物——你的冷淡、你的讽刺、你的小心翼翼——它们都在被你最亲近的人复制。关键张力：他们在学你——还是你的症状在通过语言繁殖？ | 实在余痕(Σ): 你女儿说了一句话。用的是你的语气。你愣住了。那个语气你从来没有教过她。",
        coreEn: "A-side: Your tone has influence — your expression being imitated means your presence has weight. Your voice left echoes. / B-side: But your tone may be trauma's product — your coldness, sarcasm, caution — all being copied by your closest people. Key tension: Are they learning from you — or is your symptom reproducing through language? | Residuum: Your daughter said something. In your tone. You froze. You never taught her that tone.",
        topology: "语气作为符号学载体从主体向他者进行声学复制——咬字节奏、停顿模式、语调曲线被完整移植，接收者在不自知的情况下成为发送者的声学镜像。",
        topologyEn: "Tone as a semiotic vehicle undergoes acoustic replication from subject to other — articulation rhythm, pause patterns, and intonation curves are transplanted intact; the receiver unknowingly becomes the sender's acoustic mirror.",
        directive: {
            bright: "她说了一句话。用的是他的语气。他听到了——愣了一秒。然后笑了。她不是在模仿，是在一起太久了，他的节奏自然地流进了她的嘴巴。让读者感到那种无意识的亲密：语气的传染是爱最不起眼但最深的证据。她的声音里住着他的回声。",
            dark: "她女儿说了一句话。用的是她的语气——那种冷淡的、带刺的、小心翼翼的语气。她从来没教过她。但女儿学会了。她的创伤通过语言在繁殖——她的冷淡变成了女儿的冷淡，她的讽刺变成了女儿的讽刺。让读者感到这种语气遗传的恐怖：她不是在教女儿说话，是她的症状在复制自己。",
            tension: "她女儿说了一句话。用了她的语气。她愣住了。让读者和她一起停在那个瞬间——那个语气到底是爱的回声，还是创伤的复制品？女儿是在学她，还是她的症状在通过语言繁殖？那个语气不属于女儿。但它已经在女儿嘴里了。让那个愣住的瞬间替所有人说话。"
        },
        reference: "《教父》迈克尔说话越来越像维托——儿子不知不觉复制了父亲的每一个咬字和停顿；《请以你的名字呼唤我》两个人在一个夏天之后开始用对方的语气说话——爱通过语气传染了。",
        referenceEn: "Michael speaking more and more like Vito — the son unknowingly copying every enunciation and pause in The Godfather; two people after one summer starting to speak in each other's tone — love spreading through tone in Call Me by Your Name."
    },
    {
        id: "res_generational_loop",
        name: "代际循环", nameEn: "Generational Loop",
        group: "E. 蔓延的余烬", groupEn: "The Spreading Embers",
        def: "尘埃落定后，你发现你正在对你的孩子做你父母曾经对你做过的事——虽然你发誓过绝不这样。",
        defEn: "After the dust settles, you find yourself doing to your child what your parents did to you — though you swore you never would.",
        core: "A面：代际循环说明某些模式比个人意志更深——你不是在重复父母，是你们在回应同一个结构性困境。/ B面：但你曾经发过誓。你发誓不做那个人。然后某个周日下午你变成了他。关键张力：你重复了他们——是因为你理解了他们，还是因为你逃不掉？ | 实在余痕(Σ): 你对孩子说了一句话。然后你听到了你父亲的声音。那是你的声音。",
        coreEn: "A-side: The generational loop shows some patterns run deeper than personal will — you're not repeating your parents; you're both responding to the same structural bind. / B-side: But you swore an oath. You swore never to be that person. Then one Sunday afternoon you became them. Your free will lost to structure. Key tension: Did you repeat them because you understood — or because you couldn't escape? | Residuum: You said something to your child. Then you heard your father's voice. It was yours.",
        topology: "行为模式的拓扑结构跨代完整复制——尽管主体在意识层面试图打破回路，深层结构通过身体记忆和关系动力学自动重演，形成跨代闭环。",
        topologyEn: "The topological structure of behavioral patterns replicates intact across generations — despite the subject's conscious attempt to break the loop, the deep structure auto-replays through body memory and relational dynamics, forming a transgenerational closed loop.",
        directive: {
            bright: "他对孩子说了一句话。然后他听到了自己父亲的声音。他愣了。但他没有恐惧——他意识到有些模式比个人意志更深。他不是在重复父亲，是他们在回应同一个结构性困境。让读者感到那种理解的重量：代际循环不是诅咒，是一种对人类困境的诚实承认。他和父亲，都在用各自的方式回答同一个问题。",
            dark: "他发过誓。他发誓不做那个人。然后某个周日下午他听到自己用了父亲的语气说了父亲说过的那句话。他的自由意志输给了结构。他花了二十年逃离的那个人，住在他的声带里。让读者感到那种代际循环的恐怖——不是因为他不想改变，是因为那个模式比他更强。牢房是遗传的。",
            tension: "他对孩子说了一句话。然后他听到了父亲的声音。那是他的声音。让读者停在那个瞬间——他重复了父亲是因为他终于理解了父亲，还是因为他逃不掉？也许理解和逃不掉是同一件事。也许他的誓言从来没有机会。也许那不重要。重要的是那个声音还在。让它继续说下去。"
        },
        reference: "《东京物语》三代人用完全相同的方式让亲情变淡——每一代都以为自己会不同；《如父如子》两个家庭意识到他们正在用各自厌恶的方式重复上一代人的错误。",
        referenceEn: "Three generations diluting family bonds in exactly the same way — each believing they'd be different in Tokyo Story; two families realizing they're repeating the previous generation's mistakes in the very ways they despise in Like Father, Like Son."
    },
];
