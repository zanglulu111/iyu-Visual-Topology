import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_B: LibraryItemDef[] = [
    {
        id: "enc_secret_origin",
        name: "身世揭秘", nameEn: "Secret Origin",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "发现父母不是亲生，或者自己是领养的、克隆的、被交换的。你以为坚固的根基，原来从来不存在。",
        defEn: "Finding parents are not biological, or being adopted, cloned, or swapped. The foundation you thought was solid never existed.",
        core: "A面：发现身世的真相也可以是一种巨大的解放——你终于不用再做'他们的孩子'了。一条全新的自我定义之路在你面前展开。/ B面：起源的虚构——如果我的来处是一个谎言，那建立在这个来处之上的'我'，又有多少是真的？关键张力：你是被血缘定义的，还是被选择定义的？ | 实在界入侵(Tuche): 起源不是一个事实——它是一个被讲述的故事。所有的'我从哪里来'都是叙事建构。",
        coreEn: "A-side: Discovering the truth of origin can be a massive liberation — you no longer have to be 'their child.' A path of self-definition opens wide. / B-side: The fiction of origins — if my origin is a lie, how much of the 'me' built upon it is real? Key tension: Are you defined by blood, or by choice? | Real punctured: Origin is not a fact — it's a story told. All 'where I come from' is narrative construction.",
        reference: "古希腊悲剧《俄狄浦斯王》中发现弑父娶母真相的俄狄浦斯；《银翼杀手》中发现自己是植入记忆的复制人的瑞秋。",
        referenceEn: "Oedipus discovering the truth of patricide and incest in Oedipus Rex; Rachael learning she's a replicant with implanted memories in Blade Runner.",

        topology: "起源叙事的逆写：不是'发现真相'——而是发现'真相'这个位置一直是空的，你以为的根基是一个被讲述出来的故事",

        directive: {
            bright: "写主体看到那份文件的瞬间——不是出生证明上的名字，而是领养协议上的日期。手指停在那个日期上：那一天他以为自己出生了，但其实那一天他被交给了另一对父母。不是'我被骗了'的愤怒，而是'原来我一直可以不是他们的孩子'的可能性在脑海里缓慢展开。不要写成身份危机的崩溃。",

            dark: "写主体回家后看着父母——他们还是同样的人，但主体脑子里在做残忍的计算：这张脸上有多少是我的？这个习惯是遗传的还是模仿的？不是'他们不是我的父母'，而是'我'这个概念建立在一个现在不存在的地基上。如果起源是假的，那性格、习惯、价值观——哪些是真的？不要给答案。",

            tension: "悖论：血缘和选择是两个无法比较的维度。血缘说'你来自我'，选择说'我选了你'。场景锚点：主体问养父母'你们为什么不告诉我？'养父母说'因为对我们来说你就是我们的孩子。'这句话既是最温暖的也是最残忍的——它抹除了'真相'的重要性。不要让主体接受或拒绝，让他悬在中间。"
        }
    },
    {
        id: "enc_framed",
        name: "被诬陷", nameEn: "Framed",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "在你的包里发现了不属于你的毒品或凶器。证据完美地指控你——但你知道自己没有做过。",
        defEn: "Drugs or weapons not yours found in your bag. Evidence perfectly accuses you — but you know you didn't do it.",
        core: "A面：被诬陷的经历可以铸造出最坚硬的内在——当全世界都说你有罪的时候，你仍然选择相信自己。这种信念一旦经历过炼狱，就再也不会动摇。/ B面：真相与证据的脱节——你是清白的，但世界的运作逻辑不看'真相'，只看'证据'。关键张力：如果全世界的证据都指向你——你还能坚持你的清白多久？ | 实在界入侵(Tuche): '真相'和'被证明的真相'是两件完全不同的事情。",
        coreEn: "A-side: Being framed can forge the hardest inner core — when the whole world says you're guilty, choosing to believe yourself. Once this conviction survives the crucible, it never wavers again. / B-side: Truth-evidence decoupling — you're innocent, but the world's logic doesn't care about 'truth,' only 'evidence.' Key tension: If all the world's evidence points at you — how long can you insist on your innocence? | Real punctured: 'Truth' and 'proven truth' are two entirely different things.",
        reference: "《肖申克的救赎》中被虚假证据判定杀妻的安迪；《狩猎》中被女童谎言构陷的卢卡斯。",
        referenceEn: "Andy sentenced for murder on false evidence in The Shawshank Redemption; Lucas framed by a child's lie in The Hunt.",

        topology: "真相与证据的脱钩：不是'我没做'和'证据说我做了'的对立——而是发现'真相'这个位置在法律机器里根本不存在，机器只认物证链条",

        directive: {
            bright: "写包被打开的瞬间——警察拿出白色粉末，所有人看向他。写他脑子里的困惑：'这什么时候放进去的？'他在倒推时间线，但意识到'我的记忆'在这个房间里没有法律效力。不要写成冤案控诉，写他第一次理解'清白'不是状态，而是需要被证明的东西——而他没有证据。",

            dark: "写审讯室的荧光灯。他重复'我没做过'，但对面警察的眼神是行政性确认：证据齐了，口供是最后流程。写他意识到的恐怖：他们不是在寻找真相，而是在完成案件。写他开始计算——说一百遍会相信吗？然后意识到次数不重要，重要的是那个包、那个指纹。不要给转机，让他看着笔录打印出来。",

            tension: "悖论：坚持清白和接受现实是同一处境的两面。他知道自己没做，但这个'知道'救不了他。场景锚点：律师说'认罪协商，争取轻判'。他说'但我没做'。律师说'我知道，但陪审团不知道'。这句话既理性又残忍——它要求用谎言换自由。不要让他决定，让他看着认罪书，手悬在签名栏上方。"
        }
    },
    {
        id: "enc_amnesia",
        name: "失忆苏醒", nameEn: "Amnesia",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "醒来不知道自己是谁，手里拿着枪，或者满身是血。你的过去是一片白纸——但你的身体似乎记得某些事情。",
        defEn: "Waking without knowing who you are, holding a gun or covered in blood. Your past is a blank page — but your body seems to remember things.",
        core: "A面：失忆可以是一种激进的重生——没有过去的包袱，你可以完全从零开始定义自己。你不再是你的历史，你只是此刻的自己。/ B面：能指链的断裂——没有记忆就没有身份。你变成了一个没有坐标的点，漂浮在绝对的虚无之中。关键张力：如果你恢复了记忆，发现'过去的你'是一个你不想成为的人——你还要回去吗？ | 实在界入侵(Tuche): '我'不是一个实体——'我'是一串记忆的串联效果。断开记忆，'我'就消失了。",
        coreEn: "A-side: Amnesia can be a radical rebirth — free of the past's burden, you can define yourself from zero. You are no longer your history, only your present self. / B-side: Rupture of signifier chain — no memory, no identity. You become a point without coordinates, floating in absolute void. Key tension: If you recover memories and find the 'past you' is someone you don't want to be — do you go back? | Real punctured: 'I' is not an entity — 'I' is the chaining effect of a string of memories. Sever the memory, and 'I' vanishes.",
        reference: "《谍影重组》中醒来丧失记忆只能依靠身体本能的伯恩；《记忆碎片》里用拍立得和纹身确认自己存在的莱纳德。",
        referenceEn: "Bourne waking with amnesia and fighting on body instincts alone in The Bourne Identity; Leonard relying on polaroids and tattoos to prove his existence in Memento.",

        topology: "能指链的断裂：不是'忘记了过去'——而是发现'我'这个代词失去了所有锚点，变成一个漂浮的空位,身体记得的和意识能说的彻底脱节",

        directive: {
            bright: "写醒来的第一个动作——手指本能找到枪,滑到保险位置。脑子问'我是谁',但手指已经知道怎么拆弹夹。他看着自己的手,像看别人的手。嘴巴张开,喉咙里什么都没有——不是'想不起来',而是那个位置是空的。不要写成医学描述,写'我'这个词指向虚空。",

            dark: "写镜子前。对镜子说'我叫...',无论填什么名字都同样陌生、同样虚假。翻到纸条,自己的字迹,但不记得写过。上面写:'不要相信他们。'——谁是'他们'?为什么'过去的我'要警告'现在的我'?不要给答案,让纸条在手里攥到出汗。",

            tension: "悖论:找回记忆和保持空白是同一恐惧的两端。有人认出他,叫出名字,说'你终于回来了'。他看着期待的眼神,不知该点头还是摇头——点头是假装,摇头是否认一个他不知道的'自己'。不要让他选择,让他站着,嘴巴微张,卡在回应与沉默之间。"
        }
    },
    {
        id: "enc_the_letter",
        name: "来自过去的信", nameEn: "The Letter",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "收到一封信、一段录音或一条被遗忘的消息——来自一个死去的人、一个消失的人、或过去的你自己。它揭示了一个你从未知道的秘密。",
        defEn: "Receiving a letter, recording, or forgotten message — from someone dead, someone disappeared, or your past self. It reveals a secret you never knew.",
        core: "A面：来自过去的信息可以是一份迟到的礼物——死去的人终于对你说出了活着时说不出口的话。/ B面：压抑物的回归（Return of the Repressed）——过去没有死。它只是在等一个时机，用一封信的形式重新爬回你的现在。关键张力：这个秘密——知道了之后更痛苦，还是不知道更痛苦？ | 实在界入侵(Tuche): 时间不能保护你远离真相——它只是延迟了真相到达你的日期。",
        coreEn: "A-side: A message from the past can be a belated gift — the dead finally tells you what they couldn't say alive. / B-side: Return of the Repressed — the past isn't dead. It was just waiting for the right moment, crawling back into your present as a letter. Key tension: Is knowing this secret more painful, or not knowing? | Real punctured: Time cannot protect you from truth — it only delays the date truth reaches you.",
        reference: "《情书》中因寄错的信件揭开隐藏暗恋真相的渡边博子；《解忧杂货店》里穿越时空投递而来的求助信。",
        referenceEn: "Watanabe Hiroko uncovering a long-hidden crush via a misdelivered letter in Love Letter; distress letters traveling through time in The Miracles of the Namiya General Store.",

        topology: "时间的倒灌：不是'过去发来消息'——而是发现时间从来不是单向流动的,一封信可以让十年前的伤口在今天的身体上重新裂开",

        directive: {
            bright: "写看到信封——寄信人已死三年,邮戳是上周。手发抖,不是恐惧,而是时间错乱的眩晕。撕开信封,很慢,像拆炸弹。信纸上熟悉字迹:'如果你读到这封信,说明我已经不在了。'这是预先写好、等待投递的来自过去的未来式。不要写信的内容,写读第一行时喉咙的收紧。",

            dark: "写反复读信。信里说了秘密——关于钱的去向/孩子的生父/背叛的真相。计算:如果三年前知道,我会做不同选择吗?这个秘密一直在那里,被死去的人压在舌头底下,现在舌头腐烂了,秘密爬出来了。不要给动机,让他盯着签名,盯到字迹模糊。",

            tension: "悖论:秘密一旦说出就无法塞回去,但揭示的'真相'改变的是过去还是现在?他拿着信站在墓前。把信举到打火机前,火苗舔到纸角,然后停住了。不要让他决定,让他保持那个姿势,火苗和纸张隔着最后一厘米,风一直吹。"
        }
    },
    {
        id: "enc_mandela",
        name: "集体记忆篡改", nameEn: "Mandela Effect",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "发现所有人的记忆都和你不一样。历史被改写了——还是你自己的记忆出了错？没有人能告诉你答案。",
        defEn: "Finding everyone's memory differs from yours. History was rewritten — or did your own memory err? No one can give you the answer.",
        core: "A面：如果你是唯一记得'真实版本'的人，也许这意味着你拥有一种别人没有的洞察力——你的'不合群'恰恰是你的清醒。/ B面：集体的疯狂——当所有人都坚持天空是绿色的，而你看到的是蓝色，你会开始怀疑自己的眼睛。关键张力：是我疯了，还是世界疯了？——如果这两个选项同样可怕呢？ | 实在界入侵(Tuche): '客观事实'从来不是客观的——它是多数人的记忆共识。",
        coreEn: "A-side: If you're the only one who remembers the 'real version,' perhaps this means you have an insight others lack — your 'non-conformity' is actually your clarity. / B-side: Collective madness — when everyone insists the sky is green but you see blue, you start doubting your own eyes. Key tension: Am I crazy, or is the world crazy? — What if both options are equally terrifying? | Real punctured: 'Objective facts' are never objective — they are the memory consensus of the majority.",
        reference: "《罗生门》中历史事实在各人叙述里面目全非；《禁闭岛》里群体的强制精神叙事压倒主角个人记忆。",
        referenceEn: "Historical facts completely distorted in individual accounts in Rashomon; the community's forced psychiatric narrative overwhelming the protagonist's memories in Shutter Island.",

        topology: "真实的民主化：不是'记忆对错'——而是发现'真实'由投票决定,当你是唯一的反对票时,'客观事实'这个概念本身液化了",

        directive: {
            bright: "写争论疲惫之后突然意识到'也许是世界错了'——所有人都说2017,但他身体里有更古老的确信:是2015。这种确信不是执拗,而是奇异的轻盈——如果我的记忆和全世界不一样,那我拥有只属于我的版本。不要写成清醒者的优越,写孤立的自由:这个版本没人认证,但它是我的。",

            dark: "写在图书馆查旧报纸。他记得是A版本,但所有档案都是B。翻1995年的、2000年的、2010年的,全是B。开始怀疑记忆来源——我在哪里'知道'A的?'历史'不是发生过的事,而是被记录的事。不要给'真相',让他坐在档案室里,周围都是证明他'错了'的证据。",

            tension: "悖论:坚持自己记忆和接受集体版本是'我'和'世界'谁更真实的赌注。医生说'也许你记得的版本是保护机制'。他说'可是我记得很清楚'。医生说'精神分裂症患者的幻觉也很清楚'——要么承认你疯了,要么承认全世界疯了。不要让他选择,让他看着处方笺,药名已写好。"
        }
    },
    {
        id: "enc_conspiracy",
        name: "发现阴谋", nameEn: "Conspiracy",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "无意中看到了不该看的文件、听到了不该听的对话。日常生活的表面下是一个精心运作的巨大谎言。",
        defEn: "Accidentally seeing documents or hearing conversations not meant for you. Beneath the surface of daily life lies a meticulously orchestrated great lie.",
        core: "A面：知道真相可以是一种使命——你成了唯一有能力揭开黑幕的人。这份危险的知识赋予了你独特的责任和力量。/ B面：世界的后台被揭开——你曾经信任的每一个微笑、每一次握手，可能都是一个更大棋局中的棋步。关键张力：你揭露了真相之后——有人会相信你吗？还是他们更愿意继续活在谎言里？ | 实在界入侵(Tuche): '日常生活'不是中性的背景——它是一层被精心维护的幕布。",
        coreEn: "A-side: Knowing the truth can be a mission — you become the only one capable of uncovering the conspiracy. This dangerous knowledge grants you unique responsibility and power. / B-side: The world's backstage revealed — every smile, every handshake you once trusted may be a move in a larger game. Key tension: After you expose the truth — will anyone believe you? Or will they prefer to keep living the lie? | Real punctured: 'Daily life' is not a neutral background — it is a carefully maintained curtain.",
        reference: "《总统班底》中揭开水门事件政治谎言的记者；《窃听风暴》中发现系统对自由思想致命绞杀的卫斯理。",
        referenceEn: "Journalists uncovering political lies in All the President's Men; Wiesler discovering the system's fatal strangulation of free thought in The Lives of Others.",

        topology: "日常的翻转：不是'发现秘密'——而是发现你一直生活在的'正常'是一个被维护的表演,每个微笑背后都有一份备忘录",

        directive: {
            bright: "写走错房间看到文件——上面是熟悉名字:老板、同事、他自己。标题:'监控对象'或'清理名单'。他快速扫描,听到脚步声,把文件塞回去走出房间。回到办公桌,看着周围同事——谁知道?谁不知道?不要写成惊悚片,写日常的陌生化:咖啡机还在响,但声音变得可疑。",

            dark: "写开始验证。记下预测:'X项目将在周五终止'——周五真的终止了,'预算调整'。'Y将在下月调离'——Y真的被调走,'家庭原因'。策划在完美执行。文件里还有关于他的:'主体将在Q3自愿离职'。现在是Q2。不要给反抗计划,让他盯着'自愿'两个字。",

            tension: "悖论:说出来可能没人信,不说就要按剧本'自愿离职'。他约记者带着复印文件。记者说'你有更多证据吗?'他说'文件还不够吗?'记者说'文件可以伪造,你有人证?录音?'他拿着真相,但真相需要被证明,而证明需要的东西他都没有。不要让他说服记者,让他看着文件被推回来。"
        }
    },
    {
        id: "enc_gaslighting",
        name: "认知操纵", nameEn: "Gaslighting",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "被周围人不断告知你的记忆是错的，你是疯子。灯确实在变暗——但他们说灯没有变暗。你开始怀疑自己。",
        defEn: "Constantly told your memory is wrong, you're crazy. The light IS dimming — but they say it isn't. You start doubting yourself.",
        core: "A面：一旦你识破了操纵，你就获得了一种几乎不可摧毁的自我信任——因为你经受住了最残酷的认知审判。/ B面：认知抹杀——对理性的自信被系统性地、日复一日地侵蚀。你不是突然崩溃的——你是被缓慢地、温柔地推向深渊的。关键张力：如果连你自己都开始相信'也许我真的错了'——那么'正确的记忆'还有什么意义？ | 实在界入侵(Tuche): 记忆不是一座保险箱——它是一块橡皮泥，任何有耐心的人都能重新捏造它。",
        coreEn: "A-side: Once you see through the manipulation, you gain an almost indestructible self-trust — because you withstood the cruelest cognitive trial. / B-side: Cognitive erasure — confidence in rationality systematically eroded, day after day. You don't collapse suddenly — you're slowly, gently pushed toward the abyss. Key tension: If even YOU start believing 'maybe I really am wrong' — what meaning does 'correct memory' have? | Real punctured: Memory is not a safe — it's clay that any patient hand can reshape.",
        reference: "《煤气灯下》里被丈夫心理暗示逼向疯癫的宝拉；《隐形人》中通过高科技手段摧毁女主角现实锚点的控制狂前男友。",
        referenceEn: "Paula driven to madness by her husband's psychological suggestion in Gaslight; the control-freak ex destroying the heroine's reality anchors via high-tech in The Invisible Man.",

        topology: "现实的侵蚀：不是'被骗'——而是发现'真实'需要他人确认才能存在,当所有人都说你错了,你的感知开始自我瓦解",

        directive: {
            bright: "写他指着画说'昨天还在左边'。伴侣温柔地笑:'一直在右边,你记错了。'钥匙明明在桌上,出现在抽屉里。'你动了吗?''没有啊,你自己放的。'第三次、第四次,每次都是同样温柔的'你记错了'。不要写成恶意攻击,写温柔的、持续的否定。",

            dark: "写他开始记录。买笔记本,每天写下发生的事。第二天翻开,昨天的记录被划掉,旁边另一行字(不是他的笔迹):'不是这样的。'开始藏,藏在枕头下、衣柜里,但每次都被找到、被修改。他开始怀疑:也许那些'修改'才是他写的?不要给真相,让他盯着笔记本,分不清哪行是自己写的。",

            tension: "悖论:当'相信自己'意味着'所有人都在合谋骗我',这个选择本身就是疯狂的证明。他对伴侣吼:'灯在变暗!'伴侣平静地说:'也许我们该去看医生。'伴侣眼睛里是真诚的关心——如果对方真的看到的和他不一样,谁疯了?不要让他决定,让他看着医生名片,手伸出去又缩回来。"
        }
    },
    {
        id: "enc_idol_fall",
        name: "偶像崩塌", nameEn: "Idol Fall",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "崇拜的导师、父亲或精神领袖被揭露是罪犯、伪君子或怪物。你的信仰体系在一瞬间地基松动。",
        defEn: "Worshipped mentor, father, or spiritual leader exposed as criminal, hypocrite, or monster. Your belief system's foundation loosens in an instant.",
        core: "A面：偶像倒塌之后，你终于不再需要仰望任何人了——你被迫开始用自己的眼睛看世界，而不是通过他的眼睛。/ B面：理想我（Ideal Ego）的破碎——你最深层的精神结构建立在他身上。他倒了，你发现自己也站不住了。关键张力：你恨的是他骗了你，还是恨自己把太多的'自己'放在了另一个人身上？ | 实在界入侵(Tuche): 所有的'伟大人物'背后都站着一个普通人——你崇拜的从来不是他，而是你投射在他身上的幻象。",
        coreEn: "A-side: After the idol falls, you no longer need to look up to anyone — you're forced to see the world with your own eyes, not through his. / B-side: Shattering of Ideal Ego — your deepest psychic architecture was built on him. He falls, and you find you can't stand either. Key tension: Do you hate him for deceiving you, or yourself for placing so much of 'you' in another person? | Real punctured: Behind every 'great person' stands an ordinary one — you never worshipped him, but the fantasy you projected onto him.",
        reference: "《教父》中看到完美父亲满手血腥黑幕的迈克尔；《门徒》中发现导师般的权威实则为残忍毒枭的阿力。",
        referenceEn: "Michael seeing his perfect father steeped in bloody underworld dealings in The Godfather; Nick finding his mentor-like authority is actually a ruthless drug lord in Protégé.",

        topology: "理想我的坍缩：不是'发现偶像是坏人'——而是发现你的价值体系、判断标准、'我想成为的那个人'全部建立在一个现在不存在的地基上",

        directive: {
            bright: "写看到新闻——导师/父亲/领袖的照片配'被捕'或'性侵指控'。第一反应是本能辩护。他搜索证据、证词、时间线,每一条都指向同一结论。想起导师说过的:'正直是最重要的品质',这句话在脑海里变成讽刺。不要写成愤怒控诉,写信仰体系的缓慢崩解。",

            dark: "写翻看过去照片/笔记/合影。导师的手搭在他肩上,笑容温暖——而那只手也曾搭在受害者肩上。他开始重新审视:我从他那里学的东西还能用吗?我模仿他的方式是不是也在复制他的恶?他不只失去了导师,他失去了'我想成为什么样的人'的模板。不要给新方向,让他坐在那堆照片中间。",

            tension: "悖论:导师教的有用的东西不会因为他是坏人就消失,但继续使用就像承认'恶人也可以是好老师'。朋友说'你该和他划清界限'。他说'可是他教会了我很多'。朋友说'一个强奸犯教会你的东西,你还要吗?'让他看着书架上导师的书,不知道该不该扔。"
        }
    },
    {
        id: "enc_witness",
        name: "目击凶案", nameEn: "The Witness",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "透过窗户或门缝，看到了不该看的暴力现场。从这一秒起，你的纯真死了，你被强行拖入了另一个世界的因果链条。",
        defEn: "Through a window or door crack, you see a violent scene you shouldn't have. From this second, your innocence dies; you're dragged into another world's causal chain.",
        core: "A面：目击暴力也是一种觉醒——你看到了'文明社会'的幕布背后真正在发生的事情。这种知识虽然可怕，但它是真实的。/ B面：纯真的丧失不可逆——你无法'忘掉'你看到的东西。它会永远住在你的脑海里，像一根刺。关键张力：你要站出来说话吗？说话意味着安全的终结。沉默意味着良知的终结。 | 实在界入侵(Tuche): '不知道'是一种保护机制——一旦你知道了，你就再也回不到不知道的状态。",
        coreEn: "A-side: Witnessing violence is also an awakening — you see what truly happens behind civilization's curtain. This knowledge, though terrifying, is real. / B-side: The irreversible loss of innocence — you can't 'unsee' what you saw. It will live in your mind forever, like a thorn. Key tension: Will you speak up? Speaking means the end of safety. Silence means the end of conscience. | Real punctured: 'Not knowing' is a protective mechanism — once you know, you can never return to not knowing.",
        reference: "《后窗》里透过百叶窗偷窥到邻居杀妻的摄影师；《辛德勒的名单》中从山坡上目睹犹太区屠杀的辛德勒。",
        referenceEn: "The photographer witnessing a neighbor's murder through blinds in Rear Window; Schindler witnessing the ghetto massacre from the hilltop in Schindler's List.",

        topology: "纯真的穿孔：不是'看到暴力'——而是发现'看见'这个动作本身把你编入了因果链,你从旁观者变成了知情者,而知情本身就是一种参与",

        directive: {
            bright: "写听到沉闷撞击声,然后拖拽声。他掀开窗帘:对面楼里一个人倒在地上,另一个人站着。想退后但脚钉在地上。那人突然转头——两人目光隔着两栋楼对上了。不是'我看到了凶案',而是'凶手看到我了'。不要写成惊悚追逐,写他放下窗帘,意识到:我的生活刚刚改变了。",

            dark: "写接下来几天的日常——照常上班、吃饭、睡觉,但脑子里一直重播那个画面。看新闻——没有报道,没有警察,好像什么都没发生。他开始自我说服:也许他们只是在搬家具。但每次说服自己,那个画面就更清晰。不要给报警勇气,让他每天经过那栋楼,每天看那扇窗户,窗帘一直拉着。",

            tension: "悖论:报警意味着用安全换正义,沉默意味着用良知换安全。他终于走进警局:'什么时候?''五天前。''为什么现在才来?''隔着两栋楼。''能指认吗?''我只看到背影。'警察说'我们会调查的',语气里没有承诺。他走出警局,那个画面永远不会消失。"
        }
    },
    {
        id: "enc_diary_exposed",
        name: "内心曝光", nameEn: "Exposed Journal",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "发现有人读了你最私密的日记、搜索记录或心理治疗档案。你内心世界的最后一扇门，被踹开了。",
        defEn: "Finding someone read your most private diary, search history, or therapy files. The last door to your inner world has been kicked open.",
        core: "A面：内心被看见也可以是一种深层的被理解——也许你一直渴望有人真正知道'你在想什么'。/ B面：精神上的赤裸——你的思想不再属于你自己。你成了一个被打开的手术台上的标本。关键张力：如果有人读了你最黑暗的想法——他们会选择理解你，还是远离你？ | 实在界入侵(Tuche): 你以为的'内心世界'并不安全——它只是还没有被入侵，不是不能被入侵。",
        coreEn: "A-side: Having your inner self seen can be a form of deep understanding — perhaps you always longed for someone to truly know 'what you're thinking.' / B-side: Psychic nakedness — your thoughts no longer belong to you alone. You become a specimen on an opened operating table. Key tension: If someone read your darkest thoughts — would they choose to understand you, or flee? | Real punctured: Your 'inner world' is not safe — it simply hasn't been invaded yet, not that it can't be.",
        reference: "《窃听风暴》中内心隐私被国家机器窃听拆解的作家；乔治·奥威尔《1984》中连思想犯罪都被检测的温斯顿。",
        referenceEn: "The writer whose private thoughts are audited by state machinery in The Lives of Others; Winston whose thought crimes are detected in Orwell's 1984.",

        topology: "内在的外翻：不是'秘密被发现'——而是发现'内心世界'这个概念的前提是'没人看见',一旦被看见,那个空间就不再是'内心'了",

        directive: {
            bright: "写发现日记本位置不对——被放回去了,但角度差了几度。翻开,某一页有折痕——写的是最不想让任何人知道的想法(恨意/性幻想/自杀念头)。谁看了?看着那一页,想象另一双眼睛读到这些字。不是'我的秘密被知道了',而是'我最丑陋的那部分被看见了'。",

            dark: "写面对那个'可能看过日记的人'——不能直接问,问了就等于承认日记里写的都是真的。观察对方每一个细微反应,试图判断'他知道吗?'对方每一个正常举动都变得可疑——一个眼神是不是在暗示'我知道你在想什么'?不要给确认,让他活在这种不确定里,每次见面都在猜测。",

            tension: "悖论:问了就要面对答案,不问就永远活在怀疑里。他终于开口:'你有没有...动过我的东西?''什么东西?''就是...我的笔记本。''没有啊,怎么了?'这个回答既可能是真的也可能是撒谎,他永远无法确认。让他看着困惑的表情,然后说'没事,我记错了'。"
        }
    },
    {
        id: "enc_identity_theft",
        name: "身份被盗", nameEn: "Identity Theft",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "有人用你的名字生活、贷款、犯罪。在系统的数据库里，他是'你'——而你成了冒牌货。",
        defEn: "Someone using your name — living, borrowing, committing crimes. In the system's database, they are 'you' — and you become the impostor.",
        core: "A面：身份被盗可以倒逼你思考——如果名字、证件和社交账号都可以被复制，那真正不可复制的'我'到底是什么？/ B面：我是谁？如果系统说我不是我——那我就真的不存在了。你的存在不取决于你是谁，而取决于档案说你是谁。关键张力：如果另一个人比你更像'你'——谁才是真的？ | 实在界入侵(Tuche): '身份'不住在身体里——它住在数据库里。谁控制数据库，谁就控制'你是谁'。",
        coreEn: "A-side: Identity theft can force you to ask — if name, documents, and accounts can all be copied, what is the truly uncopyable 'me'? / B-side: Who am I? If the system says I'm not me — then I truly don't exist. Your existence depends not on who you are, but on what the file says you are. Key tension: If another person looks more like 'you' than you do — who is real? | Real punctured: 'Identity' doesn't live in the body — it lives in the database. Whoever controls the database controls 'who you are.'",
        reference: "《天才雷普利》中取代他人人生的偷窃者；《攻壳机动队》里记忆与身份被黑客篡改的生化人。",
        referenceEn: "The thief taking over another's life in The Talented Mr. Ripley; the cyborg whose memory and identity are hacked in Ghost in the Shell.",

        topology: "身份的外置化：不是'有人冒充我'——而是发现'我'这个位置在系统里只是一串数据,谁掌握了数据谁就占据了'我'",

        directive: {
            bright: "写接到银行电话:'您上个月在拉斯维加斯的消费...'他打断:'我没去过。''但这是您的信用卡。''我的卡在我手里。'挂掉电话后查账单——'他'去了很多地方、买了很多东西、甚至办了健身卡。不要写成犯罪片,写一种身份的分裂感:'我'在两个地方同时存在。",

            dark: "写去警局报案。'您需要证明您是您。'他掏出身份证。'身份证可以伪造,您有其他证明吗?'整个按指纹、抽血、找证人的过程像在申请'成为自己'的资格。如果那个冒充者有我的证件、我的签名、我的消费习惯——系统会相信谁?不要给结果,让他坐在警局里等待DNA报告。",

            tension: "悖论:证明期间'另一个我'还在用'我'的名字生活,每多一天他就更像'我'。朋友发消息:'你昨天怎么没来聚会?''你自己在群里说要来的。'他打开聊天记录,看到'自己'发的消息——语气、表情符号都像他会用的。分不清是别人太了解他,还是他本来就没什么独特的。"
        }
    },
    {
        id: "enc_inner_voice",
        name: "内部声音", nameEn: "The Voice",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "脑海里出现不属于自己的声音——它可能是指令、预警、嘲讽或引诱。你不确定它是疯狂的开始，还是某种超越理性的通道。",
        defEn: "A voice appears in your head, not your own — it may command, warn, mock, or tempt. You're unsure if it's the start of madness or a channel beyond reason.",
        core: "A面：内部声音也许是你从未听过的另一个'自己'——被压抑的智慧、被否认的直觉、被遗忘的呼唤。/ B面：主体被寄生——你的大脑不再只属于你。有一个'它'在里面运行，而你无法关掉它。关键张力：如果这个声音说的是你清醒时不敢承认的真话——你要听它的吗？ | 实在界入侵(Tuche): '自我'不是一个统一体——它内部有多个声音在争夺控制权。你以为的'我的想法'只是其中声音最大的那个。",
        coreEn: "A-side: The inner voice may be another 'self' you've never heard — suppressed wisdom, denied intuition, forgotten calling. / B-side: Subject parasitized — your brain no longer belongs solely to you. An 'it' runs inside, and you can't shut it off. Key tension: If this voice tells a truth your waking self doesn't dare admit — will you listen? | Real punctured: 'The self' is not a unity — multiple voices compete for control inside it. What you call 'my thought' is just the loudest one.",
        reference: "《美丽心灵》中被幻觉特工下达虚构任务的纳什；《搏击俱乐部》里内部次人格完全攻破理智堡垒的杰克。",
        referenceEn: "Nash handed fictional top-secret missions by hallucinated agents in A Beautiful Mind; Jack's rational fortress completely breached by the manic sub-personality Tyler in Fight Club.",

        topology: "主体的复数化：不是'听到声音'——而是发现'我'从来不是单数,那个声音一直在那里,只是现在它不再服从'主我'的审查机制了",

        directive: {
            bright: "写第一次听到那个声音——在嘈杂地铁里,穿透噪音,清晰地说:'不要上这班车。'他退后,让车开走,然后听到广播:'前方列车因故障停运。'那个声音是谁?是我自己吗?但它听起来不像我的声音。不要写成超能力,写'我'的想法和'它'的声音之间的界限模糊。",

            dark: "写那个声音变得频繁——开始评论每一个行为:'你又在撒谎了。''你根本不爱她。'他试图反驳,声音回应:'你在骗谁?'那个声音说的很多时候是他不敢承认的真话。他开始分不清哪些想法是'我'的。不要给答案,让他躺在床上,听着声音喋喋不休,因为'它'不睡。",

            tension: "悖论:听从意味着'我'不是唯一决策者,抵抗意味着和自己的一部分开战。声音说:'去告诉她真相。'他站在她面前,嘴巴张开,不知道说出来的话是'我'的还是'它'的。他说出了真相,然后不确定:这是我想说的吗?让他意识到:也许从来只有一群声音在轮流掌权。"
        }
    },
    {
        id: "enc_lie_uncovered",
        name: "谎言曝光", nameEn: "Lie Uncovered",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "你精心维护了多年的一个谎言，突然在最不该曝光的时刻崩塌了。不是别人骗了你——是你骗了所有人。现在所有人都在看着你。",
        defEn: "A lie you've carefully maintained for years collapses at the worst possible moment. Others didn't deceive you — you deceived everyone. Now all eyes are on you.",
        core: "A面：谎言曝光也可以是一种卸下重担——你终于不用再演了。虽然真相是痛苦的，但至少你可以做回那个不完美的、真实的自己。/ B面：你不仅失去了别人的信任，更恐怖的是——你发现你已经分不清哪个是谎言的'你'，哪个是真实的'你'了。关键张力：如果你用谎言伪装了太久，那个'真实的你'——还在吗？ | 实在界入侵(Tuche): 谎言的最大代价不是被揭穿——而是说谎者自己也忘了真相是什么。",
        coreEn: "A-side: Having lies exposed can be a lifting of burden — you finally don't have to act. The truth is painful, but at least you can be the imperfect, real you. / B-side: You lose not only others' trust, but more terrifyingly — you can no longer distinguish which 'you' is the lie and which is real. Key tension: If you've worn the mask too long, does the 'real you' still exist? | Real punctured: The greatest cost of lying is not exposure — but the liar forgetting what the truth was.",
        reference: "《猫鼠游戏》中用数百个伪造身份骗取尊敬但终日恐惧的弗兰克；《天才雷普利》中谎言越滚越大终至无法收场的汤姆。",
        referenceEn: "Frank living in constant dread of his hundreds of fake identities being exposed in Catch Me If You Can; Tom Ripley's snowballing lies reaching an uncontrollable point in The Talented Mr. Ripley.",

        topology: "真实的遗失：不是'谎言被拆穿'——而是发现你扮演谎言太久,已经不记得'真实的自己'长什么样了,面具和脸长在了一起",

        directive: {
            bright: "写谎言崩塌——不是被人揭穿,而是他自己说漏了嘴。话一出口他就知道完了。所有人看着他。他开始补救:'我是说...''其实是...',但每一个解释都让裂缝更大。停不下来了,越解释越糟。不要写成道德审判,写表演的崩塌——演员忘词了,戏还在继续,观众在等。",

            dark: "写谎言曝光后的日常。他还在用'谎言版本的自己'生活,但所有人都知道这是假的。说话时自我监控:这句话是'真实的我'会说的吗?他分不清了——那个学历是假的,但确实学会了那些知识。照镜子:把所有谎言剥掉,还剩什么?不要给答案,让他看到的脸既熟悉又陌生。",

            tension: "悖论:承认意味着'过去的我'全是假的,继续伪装意味着'现在的我'也是假的——'真的我'在哪里?有人问'所以你到底是谁?'他张嘴想回答,但不知道该说什么。不要让他回答,让他看着期待的眼神,然后说'我也不知道'——这是他第一次说真话,但听起来像是最大的谎言。"
        }
    },
    {
        id: "enc_false_memory",
        name: "虚假记忆", nameEn: "False Memory",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "你最珍贵的一段记忆——初恋的吻、父亲的牺牲、童年的幸福——被证明从未发生过。它是你自己编造的，或者是被植入的。",
        defEn: "Your most cherished memory — a first kiss, a father's sacrifice, a happy childhood — is proven to have never happened. You fabricated it yourself, or it was implanted.",
        core: "A面：发现记忆是虚假的，也意味着你拥有一种强大的自我建构能力——你的大脑为了保护你，创造了一个比现实更美的版本。/ B面：如果最温暖的那段记忆是假的——那你的整个人格是建立在什么之上的？沙子？关键张力：一段虚假的记忆，如果它曾经给了你力量和安慰——它还算'假的'吗？ | 实在界入侵(Tuche): 记忆不是录像带——它是一部你每次播放都在重新剪辑的电影。",
        coreEn: "A-side: Discovering memory is false also means you possess a powerful self-construction ability — your brain created a version more beautiful than reality to protect you. / B-side: If the warmest memory is fake — what is your entire personality built upon? Sand? Key tension: If a false memory once gave you strength and comfort — does it still count as 'fake'? | Real punctured: Memory is not a videotape — it's a film you re-edit every time you play it.",
        reference: "《银翼杀手》中发现记忆全是植入程序的瑞秋；精神分析临床中因压抑机制产生的虚假童年记忆。",
        referenceEn: "Rachael discovering all her memories are implanted programs in Blade Runner; false childhood memories generated by repression mechanisms in psychoanalytic practice.",

        topology: "记忆的虚构性：不是'记错了'——而是发现记忆从来不是'回忆',而是'重构',每次想起都是一次创作,而你最珍视的那段可能是你写得最好的小说",

        directive: {
            bright: "写整理旧物翻到一张照片——他和一个人站在海边,但他不认识那个人,也不记得去过海边。照片背面有他自己的字迹:'最好的一天。'手是我写的,但记忆是空的。不是'我忘了',而是'我从来不知道有这一天'。不要写成恐怖片,写温柔的困惑:也许有些快乐发生过但意识没有参与。",

            dark: "写开始调查。翻旧照片——没有海边。查日记——没有提到海边。问父母——父母说'你在说什么?'那段记忆从哪里来的?他每次遇到困难都会想起那个海边——但如果那是假的,这些年靠的是一个虚构的记忆。不要给真相,让他盯着那个记忆,清晰如昨,但可能从未存在。",

            tension: "悖论:承认意味着'我的人格建立在虚构上',坚持意味着'我否认所有证据'。医生:'大脑创造了这段记忆,因为你需要它。''可是它是假的。''它对你的影响是真的。'如果记忆可以是虚构的,'我'是不是也是虚构的?让他走出诊所,脑子里还是那个海边。"
        }
    },
    {
        id: "enc_forbidden_knowledge",
        name: "禁忌知识", nameEn: "Forbidden Knowledge",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "你知道了一件你永远无法'不知道'的事情——关于宇宙、关于人性、或关于你自己。这个知识改变了你看待一切事物的方式。",
        defEn: "You know something you can never 'unknow' — about the universe, human nature, or yourself. This knowledge changes how you see everything.",
        core: "A面：禁忌知识也可以是一种启蒙——伊甸园之外虽然没有神的庇护，但它有自由和真实。/ B面：知识的诅咒——一旦你理解了某些东西的运作机制，你就永远无法天真地享受它了。理解了魔术的原理之后，魔术就死了。关键张力：如果天堂的代价是无知——你还愿意回去吗？ | 实在界入侵(Tuche): '知道'不是力量——有些'知道'是终身的枷锁。",
        coreEn: "A-side: Forbidden knowledge can also be enlightenment — outside Eden there's no divine shelter, but there's freedom and truth. / B-side: The curse of knowledge — once you understand how something works, you can never innocently enjoy it again. After learning the trick, magic dies. Key tension: If the price of paradise is ignorance — would you go back? | Real punctured: 'Knowing' isn't power — some 'knowing' is a lifelong shackle.",
        reference: "弥尔顿《失乐园》中偷食禁果后永远无法回到伊甸的亚当与夏娃；《降临》中掌握了非线性时间感知后永远失去平凡幸福的语言学家。",
        referenceEn: "Adam and Eve forever exiled from Eden after tasting the forbidden fruit in Milton's Paradise Lost; the linguist who forever loses ordinary happiness after gaining non-linear time perception in Arrival.",

        topology: "认知的不可逆：不是'学到新知识'——而是发现某些知识会重写你的感知结构,让你无法再用旧的方式看世界,天真被永久格式化了",

        directive: {
            bright: "写读到那个知识——读完后的停顿不是恍然大悟,而是一种'完了'的感觉。他合上书,但知识已经在脑子里了。看着朋友的笑容,现在知道笑容背后的神经机制;看着夕阳,现在知道那只是光的散射。不要写成虚无主义,写'看穿'之后的失重:他再也回不到'不知道'的状态了。",

            dark: "写试图'忘记'那个知识。他看电影,但看到叙事结构和心理操纵,看不到故事了。听音乐,但听到和声进行和情绪设计,听不到美了。想和别人分享——说了之后对方也失去了天真,而他成了那个'毁掉魔术'的人。不要给解决方案,让他坐在人群中,看着所有人笑,但他笑不出来。",

            tension: "悖论:清醒意味着看穿一切,快乐需要某种程度的'不知道',但知识不是可以卸载的程序。有人问'你变了。'他想说'我知道了一些事情',但说出来对方也会失去天真。不要让他选择,让他看着对方的眼神,然后说'没什么,我只是累了'——一个谎言,也是一种保护。"
        }
    },
    {
        id: "enc_deepfake",
        name: "深度伪造", nameEn: "Deepfake",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "一段视频在网上疯传——视频里是你在做你从未做过的事情。声音是你的，脸是你的，但你知道那不是你。然而没有人相信你。",
        defEn: "A video goes viral — showing you doing something you never did. The voice is yours, the face is yours, but you know it's not you. Yet no one believes you.",
        core: "A面：深度伪造暴露了一个更深的问题——在一个所有影像都可以被制造的时代，'看到'不再等于'相信'。这种觉醒虽然痛苦，但它摧毁了一个更大的幻觉。/ B面：你的面孔不再属于你。有人可以用你的脸做任何事情，而你无法阻止。关键张力：在一个任何影像都可以被伪造的世界里——'真相'还有可能被证明吗？ | 实在界入侵(Tuche): '眼见为实'这个人类最古老的认知基石，已经碎了。",
        coreEn: "A-side: Deepfake exposes a deeper issue — in an era where all images can be manufactured, 'seeing' no longer equals 'believing.' This awakening, though painful, destroys a bigger illusion. / B-side: Your face no longer belongs to you. Someone can use your face for anything, and you cannot stop it. Key tension: In a world where any image can be forged — can 'truth' still be proven? | Real punctured: 'Seeing is believing,' humanity's oldest cognitive cornerstone, has shattered.",
        reference: "《黑镜》中被技术制造的虚假影像彻底摧毁名誉与生活的受害者；当代 AI 换脸技术引发的全球性真相危机。",
        referenceEn: "Victims whose reputation and life are destroyed by fabricated footage in Black Mirror; the global truth crisis triggered by contemporary AI face-swap technology.",

        topology: "影像的脱钩：不是'被冤枉'——而是发现'我'和'我的影像'之间的连接断了,任何人都可以制造'我'的影像,而我无法证明'真的我'",

        directive: {
            bright: "写主体看到视频的瞬间——'自己'在说从未说过的话。他反复播放,嘴型、表情都对,但他知道那不是他。给朋友回复'这是假的',朋友说'看起来很真'。写他盯着屏幕里的'自己'——那张脸是他的,但那个人不是他。不要写成技术解释,写一种身份的分裂:我在两个地方同时存在。",

            dark: "写视频传播——转发数指数增长,评论说'没想到他是这种人'。他解释'这是伪造的',回复是'你当然会这么说'。技术专家说'确实是deepfake,但证明需要时间'。在证明期间名誉还在崩塌。不要给翻盘,让他看着播放量,每一次播放都在定义'他',而那个'他'不是他。",

            tension: "悖论:在互联网时代'第一印象'就是永久印象。他拿到技术鉴定证明是伪造,发布后转发量只有原视频的百分之一。评论说'洗白了?''有钱能买鉴定'。这个'假的他'会永远存在,和'真的他'并存,多数人记住前者。不要给胜利。"
        }
    },
    {
        id: "enc_deathbed_confession",
        name: "临终告白", nameEn: "Deathbed Confession",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "一个即将死去的人——父母、爱人、老师——在最后时刻告诉了你一个秘密。你无法追问细节，因为几分钟后他就走了。",
        defEn: "A dying person — parent, lover, teacher — tells you a secret in their final moments. You can't ask for details, because minutes later they're gone.",
        core: "A面：临终的真话往往是最坦诚的——死亡剥夺了一切面具。你听到的可能是这个人一辈子最真实的一句话。/ B面：无法核实的真相——他说完就死了。你将永远无法确认他最后说的是真话还是又一个谎言。关键张力：一个死人的话——你应该信吗？信了之后，你的生活应该因此改变吗？ | 实在界入侵(Tuche): 死亡不是真相的终结——有些真相只有在死亡的门槛上才会被说出来。",
        coreEn: "A-side: Deathbed truth is often the most honest — death strips all masks. You may hear this person's single most authentic sentence. / B-side: Unverifiable truth — they said it and died. You can never confirm whether their last words were truth or another lie. Key tension: Should you believe a dead person's words? If you do, should your life change because of them? | Real punctured: Death is not the end of truth — some truths are only spoken at death's threshold.",
        reference: "《公民凯恩》中至死都在低语'玫瑰花蕾'但无人理解其含义的报业大亨；《赎罪》中临终时才通过小说承认少年时期致命谎言的布里奥妮。",
        referenceEn: "The media mogul whispering 'Rosebud' to death with no one understanding its meaning in Citizen Kane; Briony confessing her fatal childhood lie only through a novel on her deathbed in Atonement.",

        topology: "真相的时限性：不是'得到答案'——而是发现有些话只能在死亡边缘说出,但说出者立刻消失,留下一个永远无法验证的陈述",

        directive: {
            bright: "写病床前——他握着主体的手,说'有件事我必须告诉你'。声音很轻,要凑近才能听清。他说了一个秘密,然后呼吸变弱。主体想问'什么意思',但对方已经闭上眼睛。看着心电监护仪的线变平——那个秘密是他最后的话,但也是最模糊的话。不要写成煽情告别,写被留下的困惑。",

            dark: "写反复回想那句话。那是字面意思还是隐喻?是忏悔还是报复?是真相还是临终的幻觉?他开始调查,但所有能证实的人都不在了,所有能查的记录都模糊不清。这个秘密改变了他对过去的理解,但他永远无法确认。不要给线索,让他拿着那句话,像拿着一把没有锁的钥匙。",

            tension: "悖论:相信意味着用死人的话重写自己的人生,怀疑意味着否定一个人最后的坦诚。有人问'他最后说了什么?'——说了,秘密就扩散了;不说,要独自承担。他张嘴,然后说'他说他爱我们'——这是安全的谎言,但那句真正的话还在脑子里,永远不会消失。"
        }
    },
    {
        id: "enc_surveillance",
        name: "发现被监控", nameEn: "Under Surveillance",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "发现家里藏着摄像头，手机被人定位追踪，或者你的一切行踪都在某个人（或某个系统）的监视之下。你以为的私人空间，从来不是私人的。",
        defEn: "Finding hidden cameras at home, phone being tracked, or all your movements under someone's (or some system's) surveillance. Your 'private space' was never private.",
        core: "A面：发现被监控也是一种确认——你对某个系统来说足够'重要'，重要到值得被观察。这种恐惧的反面，是一种诡异的存在感。/ B面：凝视的无处不在——你不再有'独处'的可能。即使关上门，也有一双眼睛在看。你变成了一个永远在演出的角色。关键张力：当你知道自己在被看的时候——你还能做'真实的自己'吗？ | 实在界入侵(Tuche): 隐私不是一种天然状态——它是一种你只有在失去之后才意识到它的存在的东西。",
        coreEn: "A-side: Discovering surveillance is also a confirmation — you are 'important' enough to some system to be worth watching. The flip side of this fear is an eerie sense of significance. / B-side: The ubiquity of the gaze — you can never be 'alone' again. Even behind closed doors, eyes are watching. You become a character in a perpetual show. Key tension: When you know you're being watched — can you still be your 'real self'? | Real punctured: Privacy is not a natural state — it's something you only realize exists after losing it.",
        reference: "《1984》中无处不在的电幕和'老大哥在看着你'；《窃听风暴》里发现自己的家已变成全景监听舞台的作家。",
        referenceEn: "The ubiquitous telescreens and 'Big Brother is watching you' in 1984; the writer discovering his home has become a fully monitored stage in The Lives of Others.",

        topology: "凝视的内化：不是'被偷窥'——而是发现'独处'这个概念的前提是'没人看',一旦知道有人在看,你的每个动作都变成表演",

        directive: {
            bright: "写发现摄像头——在书架后面/烟雾报警器里/充电器上,一个小小的镜头。第一反应不是砸掉它,而是僵住——它在这里多久了?它看到了什么?开始回忆昨天的电话、前天的争吵、上周一个人在家的时候。那些我以为只有我知道的时刻,原来一直有人在看。不要写成愤怒,写更深的赤裸感。",

            dark: "写拆掉摄像头后的日常。他知道没有摄像头了,但还是觉得在被看——换衣服时下意识遮挡,说话时压低声音。监控最可怕的不是摄像头,而是在脑子里装了一个'假想的观察者'。即使摄像头没了,那个观察者还在。不要给解脱,让他坐在沙发上,想放松但放松不了。",

            tension: "悖论:一旦知道自己被看过,那个'被看'的感觉就内化了,你变成了自己的监控者。他对着空房间说'我知道你在看',但没有回应。他不确定是真的没人看了,还是监控升级了。'没有被监控'无法被证明——两个选择都改变不了行为。"
        }
    },
    {
        id: "enc_misdiagnosis",
        name: "误判/误诊", nameEn: "Misdiagnosis",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "基于一条错误的信息，你做出了不可逆的人生决定——辞掉工作、切除器官、放弃爱情。后来才发现，那条信息是错的。",
        defEn: "Based on false information, you made an irreversible life decision — quitting a job, removing an organ, abandoning love. Only later do you find the information was wrong.",
        core: "A面：误判之后的重建，往往比原来的版本更加坚固——因为你不再盲信任何外部权威了。/ B面：不可逆的残酷——你无法回到那个还没做决定的时间点。你的人生因为一个'错误的事实'而永远拐弯了。关键张力：如果你能回到做决定的那一刻——你会选择不知道那个'事实'吗？ | 实在界入侵(Tuche): '信息'不等于'真相'——但我们每天都在用未经验证的信息做生死决定。",
        coreEn: "A-side: Rebuilding after a misdiagnosis is often sturdier than the original — because you no longer blindly trust any external authority. / B-side: The cruelty of irreversibility — you can't return to the moment before the decision. Your life permanently detoured because of a 'wrong fact.' Key tension: If you could return to the decision point — would you choose to not know that 'fact'? | Real punctured: 'Information' does not equal 'truth' — yet we make life-or-death decisions daily based on unverified information.",
        reference: "《活着》中因庸医误诊而失去至亲的福贵；医疗剧中因误读X光片而切除健康器官的真实悲剧。",
        referenceEn: "Fugui losing loved ones due to medical malpractice in To Live; real tragedies of healthy organs removed due to misread X-rays in medical dramas.",

        topology: "决定的不可逆性：不是'做错了选择'——而是发现选择基于的'事实'是错的,但选择已经执行了,时间不倒流",

        directive: {
            bright: "写接到第二次检查结果——医生说'之前的报告有误,您其实没有...'。挂掉电话后的静止——不是喜悦,而是一种空白。看着因为'那个诊断'做出的所有改变:辞掉的工作、分手的恋人、卖掉的房子。改变是真实的,但引发它们的理由是假的。不要写成'劫后余生',写更复杂的失重。",

            dark: "写试图'撤销'那些决定——给前公司打电话,职位已经有人了;给前任发消息,已经订婚了;去看房子,新住户已经搬进去了。一连串的'来不及了'。误诊可以纠正,但基于误诊做出的人生选择无法纠正。不要给补偿,让他拿着那份'正确的报告',但它改变不了任何事。",

            tension: "悖论:真相来得太晚,它只能告诉你'你本可以不用失去那些',但无法帮你拿回来。朋友说'至少你现在知道了,可以重新开始'。主体说'可是我失去的那三年回不来了'。朋友说'但你还有未来'——它承认了过去无法挽回。不要让主体接受,让他看着报告,不知道该庆幸还是该愤怒。"
        }
    },
    {
        id: "enc_test_result",
        name: "检测结果", nameEn: "The Test Result",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "一份检测报告——DNA亲子鉴定、基因疾病筛查、或者祖源追踪——用冰冷的数据改写了你对自己的全部认知。",
        defEn: "A test report — DNA paternity, genetic disease screening, or ancestry tracing — rewrites your entire self-knowledge with cold data.",
        core: "A面：数据可以是一种解放——它终结了悬而未决的怀疑。不管结果是什么，至少你终于知道了。/ B面：一串字母和数字重新定义了你的身份、你的家庭、你的命运。你没有变——但你的世界变了。关键张力：如果一份报告说你不是你父亲的儿子——这改变了什么？改变了一切？还是什么都没改变？ | 实在界入侵(Tuche): 科学数据不是中性的——它是一把会把你的叙事劈成两半的斧头。",
        coreEn: "A-side: Data can be liberation — it ends lingering doubt. Whatever the result, at least you finally know. / B-side: A string of letters and numbers redefines your identity, family, and destiny. You haven't changed — but your world has. Key tension: If a report says you're not your father's son — what changes? Everything? Or nothing? | Real punctured: Scientific data is not neutral — it's an axe that can split your narrative in two.",
        reference: "《千钧一发》中基因检测决定人生阶层的反乌托邦社会；《风平浪静的闲暇》中通过DNA检测发现家族秘密的当代人。",
        referenceEn: "The dystopian society where genetic tests determine life's class in Gattaca; contemporary people discovering family secrets through DNA tests.",

        topology: "数据的暴力：不是'得到答案'——而是发现一串数字可以重写你的整个叙事,而你无法和数字争辩",

        directive: {
            bright: "写拆开信封——很慢,像拆炸弹。翻到最后一页的结论:'排除亲子关系'或'检测到致病基因突变'。读完后的静止——不是震惊,而是认知的重组:这串数字改变了什么?抬头看窗外,世界还是那个世界,但他和世界的关系变了。不要写成戏剧化崩溃,写更安静的断裂。",

            dark: "写拿着报告回家。他看着父母/伴侣/孩子,脑子里在做残酷的计算:这个数据改变了我们之间的什么?如果DNA说我们没有血缘,那过去二十年的记忆算什么?感情是真的,但'基础'被数据质疑了。不要给对质的勇气,让他把报告藏起来,但它在抽屉里,像一个定时炸弹。",

            tension: "悖论:数据说'你们没有血缘',感情说'我们是家人',但哪个更真实?朋友说'你可以当作没看到这份报告。'主体说'但我已经看到了。'知识是不可逆的,这串数字已经在脑子里,即使烧掉报告也不会消失。不要让他做决定,让他拿着报告,不知道该藏还是摊开来说。"
        }
    },

    // ========== 正向遭遇 (Positive Encounters) ==========
    {
        id: "enc_truth_vindicated",
        name: "真相大白", nameEn: "Vindicated",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "你被冤枉的事终于被澄清了。所有人都知道你是对的——但你发现'被证明是对的'并没有让任何东西恢复原样。",
        defEn: "The thing you were wrongly accused of is finally cleared. Everyone knows you were right — but you find that 'being proven right' doesn't restore anything.",
        core: "A面：正义的回归——真相终于浮出水面，你的名字被洗清，你重新被世界承认。/ B面：迟到的正义——那些因为冤屈而失去的时间、关系、机会已经不可挽回，真相来了，但来得太晚了。关键张力：如果真相只能证明你是对的，但无法补偿你失去的，那真相的价值是什么？ | 实在界入侵(Tuche): 正义不是一个可以'恢复'的状态——它只能被声明，但它填不满冤屈已经挖出的洞。",
        coreEn: "A-side: Return of justice — truth finally surfaces, your name is cleared, the world acknowledges you again. / B-side: Belated justice — time, relationships, opportunities lost to injustice are irrecoverable, truth arrived but arrived too late. Key tension: If truth can only prove you were right but can't compensate what you lost, what is truth worth? | Real punctured: Justice is not a state that can be 'restored' — it can only be declared, but it can't fill the hole injustice already dug.",
        reference: "《肖申克的救赎》中安迪被证明无罪时已在监狱里度过了二十年；德雷福斯事件中军官平反时人生已被摧毁。",
        referenceEn: "Andy being proven innocent after twenty years in prison in The Shawshank Redemption; the Dreyfus affair where the officer's life was destroyed by the time he was vindicated.",

        topology: "正义的空转：不是'沉冤昭雪'——而是发现正义来了，但它来到的地方已经是一片废墟，它能做的只是在废墟上插一面旗",

        directive: {
            bright: "写主体接到那个电话/看到那条新闻/收到那封信——你是对的，他们错了。写他放下电话之后的沉默。不是喜悦，而是一种奇怪的空。他等了这么久的东西终于来了，但来的时候他发现自己已经不是当初那个需要它的人了。不要写成胜利，写一种更复杂的抵达。",

            dark: "写主体被平反之后开始清点损失：失去的那几年、断掉的关系、错过的机会。每一样都不可逆。他拿着'清白'走回生活，发现生活已经长出了新的形状，他的位置已经被填上了。真相来了，但它只能证明他是对的，不能把时间倒回去。",

            tension: "悖论：真相和补偿不是一回事——你是对的，但这个'对'换不回任何东西。场景锚点：朋友说'终于沉冤昭雪了'。主体说'可是我失去的那些年呢？'朋友说'至少现在大家知道真相了'。这句话是对的，但它解决不了任何问题。让他拿着那份清白，不知道该拿它怎么办。"
        }
    },

    {
        id: "enc_talent_discovered",
        name: "天赋发现", nameEn: "Hidden Talent",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "意外发现自己在某个领域有惊人的天赋——但这个天赋和你为之努力了半辈子的方向完全无关。",
        defEn: "Accidentally discovering you have astonishing talent in a field — but this talent has nothing to do with the direction you've spent half your life working toward.",
        core: "A面：天赋的解放——你终于找到了那个'对'的东西，在这里你不需要努力就比别人做得好，世界突然为你打开了一扇门。/ B面：努力的否定——如果天赋在另一个方向，那你过去的努力算什么？你花了十年走的路，原来是错的？关键张力：你应该跟随天赋，还是忠于你已经选择的方向？ | 实在界入侵(Tuche): 天赋不是你选的——它选了你，而且它选的方向可能和你的意志完全相反。",
        coreEn: "A-side: Talent's liberation — you finally found the 'right' thing, here you outperform others without trying, the world suddenly opens a door for you. / B-side: Effort's negation — if talent lies in another direction, what was your past effort for? The path you walked for ten years was wrong? Key tension: Should you follow talent, or stay loyal to your chosen direction? | Real punctured: Talent is not your choice — it chose you, and the direction it chose may be completely opposite to your will.",
        reference: "《心灵捕手》中威尔的数学天赋与他选择的蓝领生活之间的撕裂；卡夫卡白天是保险公司职员、夜晚是天才作家的分裂人生。",
        referenceEn: "The tear between Will's mathematical genius and his chosen blue-collar life in Good Will Hunting; Kafka's split life as insurance clerk by day and genius writer by night.",

        topology: "天赋的暴力：不是'发现自己的潜能'——而是发现你的身体/大脑早就知道你该去哪里，但你的意志一直在往另一个方向走",

        directive: {
            bright: "写主体第一次接触那个领域的瞬间——也许是随手画了一幅画、弹了一段旋律、解了一道别人解不出的题。写周围人的反应：他们停下来看他，那种眼神他在自己努力了十年的领域里从来没见过。写他意识到的震动：原来这就是'对了'的感觉。不要写成天才叙事，写一种更复杂的发现。",

            dark: "写主体回到他原来的领域——那个他花了十年的方向——然后坐在那里。他的天赋不在这里。他在这里的每一天都是逆流而行，而在那个新发现的领域里，他是顺流的。写他开始怀疑：我这十年是在坚持还是在固执？不要给他转身的勇气，让他卡在两个方向之间。",

            tension: "悖论：天赋和选择不是可以兼容的——天赋说'你应该在那里'，但你的整个人生都建在'这里'。场景锚点：朋友说'那你就转行啊'。主体说'可是我在这里已经十年了'。朋友说'但你在那里有天赋'。主体说'天赋就一定比努力重要吗？'这个问题没有答案，让他拿着两个方向，不知道该走哪一条。"
        }
    },

    {
        id: "enc_secret_understood",
        name: "秘密被理解", nameEn: "The Secret Understood",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "你以为永远不会被理解的秘密——那个你藏了很多年、觉得说出来也没人能懂的东西——有人一句话就说中了。",
        defEn: "A secret you thought would never be understood — the thing you hid for years, believing no one could comprehend even if you told them — someone nails it in one sentence.",
        core: "A面：存在的确认——你不再是孤独的，有人真的懂了，你藏了这么久的东西终于可以放下了。/ B面：独特性的丧失——如果你最深的秘密可以被一句话说中，那它还是'你的'秘密吗？你用这个秘密定义自己的独特性，现在它变成了一个别人也能理解的普通经验。关键张力：被理解是解放还是剥夺？ | 实在界入侵(Tuche): 你以为的'不可理解'原来是可以被理解的——但这意味着你没有你以为的那么独特。",
        coreEn: "A-side: Existential confirmation — you're no longer alone, someone truly gets it, the thing you hid for so long can finally be put down. / B-side: Loss of uniqueness — if your deepest secret can be nailed in one sentence, is it still 'your' secret? You defined your uniqueness through this secret, now it becomes an ordinary experience others can understand. Key tension: Is being understood liberation or dispossession? | Real punctured: What you thought was 'incomprehensible' turns out to be comprehensible — but this means you're not as unique as you thought.",
        reference: "《心灵捕手》中心理医生对威尔说'这不是你的错'时威尔的崩溃；《挪威的森林》中直子说出'你是第一个理解这件事的人'时渡边的沉默。",
        referenceEn: "Will's breakdown when the therapist says 'it's not your fault' in Good Will Hunting; Watanabe's silence when Naoko says 'you're the first person who understands this' in Norwegian Wood.",

        topology: "秘密的蒸发：不是'终于有人懂我'——而是发现你用来定义自己的那个'不可理解的核心'其实是可以被说出来的，而一旦被说出来，它就不再是你的了",

        directive: {
            bright: "写那个瞬间——对方说了一句话，也许很短，也许很随意，但它精确地命中了主体藏了很久的东西。写主体的第一反应不是感动而是惊恐：你怎么知道的？然后是一种缓慢的松弛——不是释然，而是一种'我终于不用一个人扛了'的疲惫。不要写成灵魂伴侣式的浪漫，写更脆弱的东西。",

            dark: "写主体被理解之后的失落——他花了很多年把这个秘密当成自己最深的核心，现在它被一句话说中了，就像一个锁被轻易打开了。写他开始怀疑：如果这个秘密这么容易被理解，那我算什么？我以为我是独特的，但也许我只是一个常见的模式。不要给他被理解的温暖，让他感到一种更深的空。",

            tension: "悖论：被理解和失去独特性是同一件事——有人懂你了，但'被懂'意味着你不再是不可理解的。场景锚点：主体说'你是第一个理解这件事的人'。对方说'其实很多人都有类似的感受'。这句话既是安慰也是残忍——它把主体的'唯一'变成了'之一'。让他不知道该感激还是该失望。"
        }
    },

    {
        id: "enc_lost_returned",
        name: "失物归还", nameEn: "The Return of the Lost",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "以为永远失去的东西突然回来了——一封信、一个人、一件遗物。但你发现，你已经不是失去它时的那个你了。",
        defEn: "Something you thought was lost forever suddenly returns — a letter, a person, a keepsake. But you discover you're no longer the person you were when you lost it.",
        core: "A面：失而复得的奇迹——你以为这辈子再也不会看到它了，现在它回来了，命运终于补偿了你一次。/ B面：时间的不可逆——它回来了，但你已经变了。你为失去它而做出的所有调整、所有放弃、所有重建，都不可撤销。它回来了，但它回到的是一个已经不需要它的人手里。关键张力：如果失去改变了你，那失而复得还是'复得'吗？ | 实在界入侵(Tuche): 失去不是一个可以被'取消'的事件——它已经永久地改变了你，即使失去的东西回来了。",
        coreEn: "A-side: Miracle of recovery — you thought you'd never see it again, now it's back, fate finally compensated you once. / B-side: Time's irreversibility — it returned, but you've changed. All adjustments, abandonments, rebuildings you made for losing it are irrevocable. It returned, but returned to a person who no longer needs it. Key tension: If loss changed you, is recovery still 'recovery'? | Real punctured: Loss is not an event that can be 'undone' — it has permanently changed you, even if the lost thing returns.",
        reference: "《星际穿越》中库珀回来时女儿已经比他老；《海边的曼彻斯特》中前妻说'我已经翻篇了'时李的失语。",
        referenceEn: "Cooper returning to find his daughter older than him in Interstellar; Lee's speechlessness when his ex-wife says 'I've moved on' in Manchester by the Sea.",

        topology: "时间的断层：不是'失而复得'——而是发现失去本身已经是一个不可逆的事件，即使东西回来了，你和它之间的关系已经被时间改写了",

        directive: {
            bright: "写主体看到那个东西/那个人回来的瞬间——可能是一封寄错了地址的信到了、一件遗物被找到了、一个失联的人突然出现了。写他的第一反应：不敢相信。然后伸手去碰，确认是真的。写一种迟来的完整——不是喜悦，而是一种'这个洞终于被填上了'的感觉。但那个洞的形状已经变了。",

            dark: "写主体拿着失而复得的东西，开始检查自己：我还是那个失去它的人吗？他发现他已经为失去它做了太多调整——新的习惯、新的关系、新的信念——这些都是因为'它不在了'才长出来的。现在它回来了，但他不能把那些新长出的东西拔掉。它回来了，但它回到的是一个已经不认识它的人手里。",

            tension: "悖论：失而复得和从未失去不是同一件事——中间隔着你为失去它而活过的那些日子。场景锚点：朋友说'太好了，终于找回来了'。主体说'可是我已经不需要它了'。朋友说'那你不高兴吗？'主体说'我不知道'。让他拿着那个失而复得的东西，不知道该放在哪里。"
        }
    },

    {
        id: "enc_prophecy_fulfilled",
        name: "预言应验", nameEn: "Prophecy Fulfilled",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "你多年前的判断/直觉/警告，被事实精确地证实了。你是对的——但'被证明是对的'让你比任何人都更恐惧。",
        defEn: "Your judgment/intuition/warning from years ago is precisely confirmed by events. You were right — but 'being proven right' terrifies you more than anyone.",
        core: "A面：判断力的确认——你的直觉是对的，你看到了别人没看到的东西，这证明了你的洞察力。/ B面：先知的诅咒——你是对的，但'对'的代价是你比任何人都更早地活在了那个可怕的结论里。你预见了灾难，但你无法阻止它，只能看着它发生。关键张力：如果你的预言总是对的，你还敢继续预言吗？ | 实在界入侵(Tuche): 正确的预言不是力量——它是一种无法分享的孤独，因为在事情发生之前没有人相信你。",
        coreEn: "A-side: Judgment's confirmation — your intuition was right, you saw what others didn't, this proves your insight. / B-side: Prophet's curse — you were right, but the price of being 'right' is living in that terrible conclusion earlier than anyone. You foresaw disaster but couldn't prevent it, could only watch it happen. Key tension: If your prophecies are always right, do you dare keep prophesying? | Real punctured: A correct prophecy is not power — it's an unshareable loneliness, because no one believes you before it happens.",
        reference: "卡桑德拉受阿波罗诅咒：永远预言正确但永远不被相信；《大空头》中预见了2008年金融危机的交易员在被证明正确时没有任何喜悦。",
        referenceEn: "Cassandra cursed by Apollo: always prophesying correctly but never believed; the traders in The Big Short who foresaw the 2008 financial crisis feeling no joy when proven right.",

        topology: "正确的诅咒：不是'我早就说过'——而是发现'正确'是一种孤独，因为在你被证明正确的那一刻，你希望自己是错的",

        directive: {
            bright: "写主体看到那个消息/数据/事件——和他多年前的判断一模一样。写他的第一反应不是骄傲而是一种冰冷的确认：我是对的。写周围人开始回忆他当年说过的话，看他的眼神变了——从'杞人忧天'变成了'他怎么知道的'。不要写成先知式的得意，写一种更沉重的正确。",

            dark: "写主体被证实正确之后的孤独——当年没人听他的，现在事情发生了，所有人说'你当初怎么不坚持？'他坚持过。他说了很多次。但没有人当回事。写他意识到的残酷：正确的预言如果没有人相信，和没有预言有什么区别？他眼睁睁看着自己预见的事情发生，什么都做不了。",

            tension: "悖论：被证明正确和阻止灾难是两件完全不同的事——你是对的，但'对'这件事本身没有任何用处。场景锚点：有人说'你真有远见'。主体说'可是我宁愿我是错的'。这句话不是谦虚，而是真心的——因为如果他是错的，那件坏事就没有发生。让他站在'正确'的废墟上，不知道这个'正确'到底值不值得。"
        }
    },

    {
        id: "enc_benefactor_revealed",
        name: "匿名恩人现身", nameEn: "The Benefactor Revealed",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "发现暗中帮助你多年的人是谁——你终于知道了，但这个真相让你和那个人的关系变得不可能继续假装正常。",
        defEn: "Discovering who has been secretly helping you for years — you finally know, but this truth makes it impossible to keep pretending the relationship is normal.",
        core: "A面：感恩的确认——你知道了该感谢谁，那些'幸运'原来不是偶然的，有人一直在暗中托着你。/ B面：债务的显形——你以为的'自力更生'是一个谎言，你的成就不完全是你的，有人在你看不见的地方替你铺了路。关键张力：如果你的成功有一部分是别人给的，那'你自己'到底做了多少？ | 实在界入侵(Tuche): 独立不是一个事实——它可能是一个你不知道有人在维护的幻觉。",
        coreEn: "A-side: Gratitude's confirmation — you know who to thank, those 'lucky breaks' were not coincidence, someone was holding you up in the shadows. / B-side: Debt's materialization — your 'self-reliance' was a lie, your achievements are not entirely yours, someone paved the way where you could not see. Key tension: If part of your success was given by someone else, how much did 'you yourself' actually do? | Real punctured: Independence is not a fact — it might be an illusion someone has been maintaining without your knowledge.",
        reference: "《了不起的盖茨比》中盖茨比为黛西暗中铺设的一切；《悲惨世界》中沙威发现冉阿让一直在暗中行善。",
        referenceEn: "Everything Gatsby secretly arranged for Daisy in The Great Gatsby; Javert discovering Jean Valjean has been doing good in secret in Les Miserables.",

        topology: "自主性的穿孔：不是'发现有人帮我'——而是发现你叙事里的'靠自己'这一章从来不是真的，有一只你看不见的手一直在托着你",

        directive: {
            bright: "写主体发现真相的瞬间——无意中看到一份转账记录、一封推荐信、一通电话。他开始倒推：那次面试机会、那笔及时的钱、那个'刚好'出现的人——全部指向同一个人。写他意识到的震动：我以为是靠自己走到这里的。不要写成感恩戏码，写一种更复杂的认知重组。",

            dark: "写主体知道真相后试图正常面对那个人——但做不到了。每一次对话都在想：这也是安排好的吗？他开始检查整个人生：哪些是我自己挣来的，哪些是被给予的？这条线越来越模糊。不要给感恩的出口，让他意识到：他和这个人之间现在有一笔永远还不清的债。",

            tension: "悖论：知道恩人是谁和不知道恩人是谁不是'知道多了'的关系——不知道的时候你是自由的，知道了之后你是欠债的。场景锚点：有人说'你应该感谢他'。主体说'可是我更希望我不知道'。这不是忘恩负义，是对'独立'这个幻觉的哀悼。让他拿着真相，不知道该感谢还是该愤怒。"
        }
    },

    {
        id: "enc_enemy_apologizes",
        name: "旧敌认错", nameEn: "The Enemy's Apology",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "曾经深深伤害过你的人找到你，真诚地道歉了。你等了这句话很多年——但它来了之后，你发现它什么都解决不了。",
        defEn: "The person who once deeply hurt you finds you and sincerely apologizes. You waited years for these words — but now that they have come, you find they solve nothing.",
        core: "A面：被承认的痛苦——对方终于承认了他做的事，你的记忆不再是'你想太多了'，它被确认了。/ B面：道歉的无力——道歉只是一个言语行为，它不能撤销已经发生的事，不能取消已经造成的伤害，不能让你回到被伤害之前的状态。关键张力：如果道歉不能修复任何东西，那道歉的意义是什么？ | 实在界入侵(Tuche): 语言不能撤销事件——'对不起'只是在伤口上贴了一个标签，伤口本身还在。",
        coreEn: "A-side: Acknowledged pain — the other person finally admits what they did, your memory is no longer 'you are overthinking it,' it has been confirmed. / B-side: Apology's impotence — apology is just a speech act, it cannot undo what happened, cannot cancel damage already done. Key tension: If apology cannot repair anything, what is the meaning of apology? | Real punctured: Language cannot undo events — 'I am sorry' only labels the wound, the wound itself remains.",
        reference: "《赎罪》中布里奥妮终其一生的道歉也无法改变她的谎言造成的后果；南非真相与和解委员会中施害者面对受害者时语言的失效。",
        referenceEn: "Briony's lifelong apology unable to change the consequences of her lie in Atonement; the failure of language when perpetrator faces victim in South Africa's Truth and Reconciliation Commission.",

        topology: "道歉的空转：不是'他认错了所以我好了'——而是发现道歉和修复之间有一条无法跨越的沟，语言抵达了，但修复没有",

        directive: {
            bright: "写那个道歉的场景——对方的眼睛、声音、措辞都是真诚的。主体听着，感觉到确认：他终于承认了。那些年的'你想太多了'终于被推翻了。写主体的第一反应不是原谅而是漫长的疲惫：你终于说了，但我等这句话等了太久了。不要写成和解，写一种更复杂的抵达。",

            dark: "写道歉之后的沉默。主体发现不知道该说什么——'没关系'是假的，'我原谅你'说不出口，'太晚了'又太残忍。道歉不是一个可以被'接受'或'拒绝'的东西，它只是一个声音，改变不了已经发生的事。被承认的伤害并不比不被承认的伤害更轻。",

            tension: "悖论：真诚的道歉和伤害的修复不是因果关系——他是真心的，但真心改变不了什么。场景锚点：朋友说'他都道歉了，你还想怎样？'主体说'我不想怎样，我只是发现道歉没有用'。朋友说'那你要他怎么做？'主体说不出来。因为答案是：没有任何事情可以做。让他拿着那个道歉，不知道该放在哪里。"
        }
    },

    {
        id: "enc_answer_revealed",
        name: "答案揭晓", nameEn: "The Answer Revealed",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "困扰你多年的谜题终于有了确定的答案——但你发现，有答案的世界比没有答案的世界更难以忍受。",
        defEn: "A mystery that plagued you for years finally has a definite answer — but you discover a world with answers is harder to bear than a world without.",
        core: "A面：确定性的到来——不确定消失了，你终于知道了，悬在空中的那只靴子终于落地了。/ B面：可能性的死亡——在你不知道答案的时候，所有的可能性都是活的；现在答案来了，其他所有的可能性都死了，你只剩下这一个确定的事实。关键张力：如果答案比谜题更让你痛苦，你还想要答案吗？ | 实在界入侵(Tuche): 答案不是安慰——它是可能性的屠杀，你用一个确定杀死了一千个也许。",
        coreEn: "A-side: Certainty's arrival — uncertainty disappears, you finally know, the other shoe finally drops. / B-side: Possibility's death — when you did not know the answer, all possibilities were alive; now the answer has come, all other possibilities are dead, you are left with only this one definite fact. Key tension: If the answer causes more pain than the mystery, do you still want the answer? | Real punctured: Answers are not comfort — they are a massacre of possibilities, you killed a thousand maybes with one certainty.",
        reference: "薛定谔的猫在被观测之前既死又活；《老无所依》中奇戈用硬币决定命运——结果落定之前，两种命运同时存在。",
        referenceEn: "Schrodinger's cat both dead and alive before observation; Chigurh's coin flip in No Country for Old Men — before the result lands, both fates coexist.",

        topology: "可能性的坍缩：不是'终于知道了'——而是发现'知道'是一种不可逆的暴力，它把所有的'也许'杀死了，只留下一个赤裸的事实",

        directive: {
            bright: "写主体得到答案的瞬间——一份报告、一封回信、一个电话。先是如释重负——终于不用猜了。然后是奇怪的失落：在不知道的时候，他可以想象一千种可能。现在只剩一种了。不要写成悬念揭晓的快感，写一种更复杂的坍缩。",

            dark: "写主体开始怀念'不知道'的日子——那时候可以安慰自己'也许结果是好的'。现在答案来了，也许不存在了。不确定虽然折磨人，但至少留了一个希望的位置；确定把那个位置也封死了。他花了这么多年追求答案，得到之后却希望从来没问过。",

            tension: "悖论：知道和不知道不是'好'和'坏'的关系——不知道被不确定折磨，知道了被确定折磨。场景锚点：朋友说'至少现在你知道了'。主体说'可是我不确定知道比不知道更好'。朋友说'那你想回到不知道吗？'主体说'回不去了，知识是不可逆的'。让他拿着答案，不知道它是礼物还是诅咒。"
        }
    },

    {
        id: "enc_better_origin",
        name: "身世揭秘（正向）", nameEn: "The Better Origin",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "发现自己的来历比以为的更好——你不是你以为的那个普通人，你的血脉/家族/出身有一段你不知道的光辉历史。",
        defEn: "Discovering your origins are better than you thought — you are not the ordinary person you believed, your bloodline/family/background has a glorious history you did not know about.",
        core: "A面：身份的升级——你的过去突然被赋予了光环，那些'普通'的童年记忆现在有了一层新的含义，你终于知道了'为什么我总觉得自己和周围的人不一样'。/ B面：叙事的篡改——你过去的自我理解被推翻了，但新的叙事是别人给的，不是你自己写的。如果你的身份取决于血脉，那你自己活出来的人生算什么？关键张力：你是因为血脉才特殊，还是你本来就特殊？ | 实在界入侵(Tuche): 身份不是内在的——它可以被一份文件、一个发现从外部重写，而你无法拒绝。",
        coreEn: "A-side: Identity upgrade — your past is suddenly given a halo, those 'ordinary' childhood memories now have a new layer of meaning, you finally know 'why I always felt different from everyone around me.' / B-side: Narrative's usurpation — your past self-understanding is overturned, but the new narrative is given by others, not written by yourself. If your identity depends on bloodline, what about the life you lived on your own? Key tension: Are you special because of bloodline, or were you special all along? | Real punctured: Identity is not internal — it can be rewritten from outside by a document, a discovery, and you cannot refuse.",
        reference: "《星球大战》中卢克发现自己是达斯维德的儿子；《哈利波特》中哈利发现自己是巫师世界的'被选中的人'。",
        referenceEn: "Luke discovering he is Darth Vader's son in Star Wars; Harry discovering he is 'The Chosen One' of the wizarding world in Harry Potter.",

        topology: "身份的覆写：不是'发现自己很特殊'——而是发现'我是谁'这个答案从来不在你手里，它可以被一个外部事实彻底改写",

        directive: {
            bright: "写主体看到那份文件/照片/族谱——原来他的家族有一段他不知道的历史。第一反应：难以置信。然后开始倒推——小时候那些'奇怪'的细节突然有了解释。写他感到的膨胀：我不是我以为的那个人，我比那个人更大。不要写成英雄发现，写一种更复杂的身份重组。",

            dark: "写主体知道真相后看着镜子——还是同一个人，但叙事变了。他开始怀疑：我之前活的那个'普通人'的生活算什么？如果身份取决于血脉，那我自己的努力、选择、失败都可以被一句'你本来就不一样'取消。他不知道该感到骄傲还是被剥夺了。",

            tension: "悖论：更好的来历和更真实的自我不是同一件事——血脉说你是特殊的，但你的经历说你是你活出来的那个人。场景锚点：有人说'难怪你和别人不一样，原来你家族就不一般'。主体说'可是在我知道之前，我也觉得自己不一样，那时候算什么？'让他不知道自己的'不一样'是天生的还是自己的。"
        }
    },

    {
        id: "enc_back_from_dead",
        name: "死而复生的消息", nameEn: "Back from the Dead",
        group: "B. 认知的穿刺", groupEn: "Epistemic Punctured",
        def: "以为死去的人其实还活着——你收到了一条消息、一通电话、一个目击报告。你的哀悼突然变成了一个错误。",
        defEn: "Someone you thought was dead is actually alive — you receive a message, a call, a sighting report. Your mourning suddenly becomes an error.",
        core: "A面：死亡的撤销——最不可能的事情发生了，死去的人回来了，你的世界被还原了一个你以为永远失去的人。/ B面：哀悼的作废——你为这个人的'死亡'哭过、祭过、重建过你的生活。现在他活着——那你的眼泪算什么？你基于'他死了'做出的所有人生决定——搬家、再婚、转行——现在变成了基于错误前提的选择。关键张力：如果死亡可以被撤销，那你为死亡而活出来的人生算什么？ | 实在界入侵(Tuche): 死亡不总是最终的——但你为死亡做出的改变是最终的。",
        coreEn: "A-side: Death's reversal — the most impossible thing happened, the dead person is back, your world regains someone you thought was lost forever. / B-side: Mourning's invalidation — you cried, mourned, rebuilt your life for this person's 'death.' Now they are alive — what were your tears? All life decisions you made based on 'they are dead' now become choices based on a false premise. Key tension: If death can be undone, what about the life you lived because of it? | Real punctured: Death is not always final — but the changes you made for death are final.",
        reference: "《归来》中妻子等了丈夫二十年，他回来时她已经认不出他；《卡斯特桥市长》中亨查德以为死去的妻子突然归来打碎了他重建的生活。",
        referenceEn: "In Coming Home, the wife waited twenty years and no longer recognizes her husband when he returns; in The Mayor of Casterbridge, Henchard's supposedly dead wife returns and shatters his rebuilt life.",

        topology: "哀悼的坍塌：不是'他活着太好了'——而是发现你为他的死而建造的一切——新的生活、新的关系、新的自我理解——全部失去了地基",

        directive: {
            bright: "写主体收到那个消息——一通电话、一张照片、一条语音。他反复确认：是真的吗？是他吗？确认之后不是喜悦而是巨大的眩晕——他为这个人的死重建了整个人生，现在地基被抽掉了。写一种比悲伤更复杂的情绪：他希望这是真的，但他害怕这是真的。",

            dark: "写主体开始清点：因为'他死了'，我做了什么？搬了家、换了工作、开始了新感情、学会了一个人生活。每一项都是真实的改变，但触发它们的原因是假的。那个人活了，但这个生活不能被撤销。不要给重逢的温暖，让他意识到：他和那个人之间隔着一段不该存在的哀悼。",

            tension: "悖论：一个人的'复活'不能取消你为他的'死亡'所活的那段人生——眼泪是真的，改变是真的，但原因是假的。场景锚点：有人说'他活着你应该高兴'。主体说'我很高兴，但我已经不是他死时的那个我了'。让他站在重逢和失去之间，不知道这是奇迹还是灾难。"
        }
    }
];

