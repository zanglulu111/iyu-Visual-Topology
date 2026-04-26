import { LibraryItemDef } from '../../../types';

export const ENCOUNTERS_GROUP_A: LibraryItemDef[] = [
    {
        id: "enc_layoff",
        name: "突然解雇", nameEn: "The Layoff",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "工卡失效，被保安护送离开大楼。昨天你还是团队的一员，今天你是一个需要被清除的安全隐患。",
        defEn: "Badge deactivated, escorted out by security. Yesterday you were part of the team; today you're a security risk to be removed.",
        core: "A面：被解雇可以是一次强制性的觉醒——那份工作也许早就在吞噬你，只是你没有勇气自己离开。/ B面：你的社会身份在一瞬间被抹除——在这个系统里，你从来不是一个人，只是一个工号。关键张力：你恨的是失去这份工作，还是恨自己居然需要这份工作来证明自己存在？ | 实在界入侵(Tuche): 你在系统中的'不可替代性'是一个幻觉。",
        coreEn: "A-side: Being fired can be a forced awakening — that job may have been consuming you, but you lacked the courage to leave. / B-side: Your social identity is erased in an instant — in this system, you were never a person, just an employee number. Key tension: Do you hate losing the job, or hate that you needed it to prove you exist? | Real punctured: Your 'irreplaceability' in the system was an illusion.",
        reference: "《在云端》中被流程化裁员无情扫地出门的职员；《黑客帝国》第一部中在格子间里被体制否定的尼奥。",
        referenceEn: "Employees coldly swept out by streamlined downsizing in Up in the Air; Neo denied by the system in his cubicle in The Matrix.",

        topology: "社会坐标的穿孔：一个工号被删除——删除本身暴露了工号背后从来没有'人'，只有功能位",

        directive: {
            bright: "写主体走出大楼那一刻的身体感觉——三年没在工作日下午站在街上，风吹在脸上是陌生的。让他注意到一个荒诞细节：工牌还挂在脖子上，但已经刷不开任何一扇门。节奏放慢，用感官捕捉枷锁断裂后的眩晕。不要写成'塞翁失马'的顿悟，不要让主体'想通了'——写他站在街上，第一次不知道该往哪走，这种不知道本身就是自由的形状。",

            dark: "写保安护送的那段走廊——所有同事低头看屏幕，没有一个人抬眼。工位已经被清空，速度快得像他从未存在过。节奏要冷，用事务性细节堆积出异化感：交还门卡、签署文件、清点私人物品。不要写成控诉或愤怒，而是写一种更深的寒意——原来我在这里的三年，系统只需要十分钟就能格式化。",

            tension: "场景锚点：收拾办公桌。主体一边装纸箱，一边发现私人物品少得可怜——三年了，他在这里留下的痕迹不比一个实习生多。悖论不是'我恨失去它但也被解放了'，而是：我以为我把生命投入了这个地方，但这个地方从来没有接收过我的生命。不要写成内心独白的拉锯，让物品本身说话——一个马克杯、两张照片、一盆枯死的多肉。"
        }
    },
    {
        id: "enc_bankruptcy",
        name: "经济崩塌", nameEn: "Economic Collapse",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "债务违约，账户冻结，资产被贴上封条。一夜之间从中产阶级变成负数。",
        defEn: "Debt default, accounts frozen, assets sealed. Overnight from middle class to negative net worth.",
        core: "A面：金钱的清零可以是一次彻底的减法——剥掉所有物质外壳后，你终于看到了自己到底是什么。/ B面：在一个万物皆可标价的系统里，资产归零等于存在归零——你不再被任何交易网络承认。关键张力：如果你的银行余额变成了零，你自己的'余额'是多少？ | 实在界入侵(Tuche): 价值是一层随时可以蒸发的虚构。",
        coreEn: "A-side: Financial zeroing can be radical subtraction — stripped of all material shells, you finally see what you truly are. / B-side: In a system where everything is priced, zero assets equals zero existence — no transaction network recognizes you anymore. Key tension: If your bank balance hits zero, what is YOUR balance? | Real punctured: Value is a fiction that can evaporate at any time.",
        reference: "《当幸福来敲门》中倾家荡产被迫带儿子睡在地铁厕所的推销员；《鱿鱼游戏》里背负巨债不得不以命相搏的底层边缘人。",
        referenceEn: "The salesman losing everything and sleeping in a subway bathroom in The Pursuit of Happyness; in-debt people fighting for their lives in Squid Game.",

        topology: "符号地基的液化：数字归零不是减法——它暴露了数字从来不是你拥有的东西，而是系统允许你借用的符号",

        directive: {
            bright: "写主体走出银行的那一刻——所有数字消失后，第一次注意到街道、树、光线。用感官锚点：不需要查手机看股价了，不需要计算晚餐预算了。不要写成'我还有精神财富'的鸡汤，而是写一种身体层面的惊讶——维持那个数字原来需要那么大的力气，我居然扛了这么多年。轻盈是真实的，但它不是豁达，是卸下重物后肌肉的颤抖。",

            dark: "用一连串事务性的'不能'堆积出社会性消失：刷卡被拒、贷款被拒、房东通知搬离、孩子的学费通知单。不要写内心独白，写场景——主体站在超市收银台前，卡刷不过去，身后排队的人开始不耐烦。不要写成'我被不公正对待了'，而是写一种更冷的发现：这个系统从来不认识我，它只认识我的余额。余额没了，我就没了。",

            tension: "悖论不是'失去金钱但获得自由'——而是：金钱归零的那一刻，主体才第一次看到，他和金钱之间从来不是'我拥有它'的关系，而是'它拥有我'的关系。场景锚点：主体看着银行账户上的零，意识到这个零和他出生时一样——但出生时的零是起点，现在的零是终点吗？不要给答案。"
        }
    },
    {
        id: "enc_false_arrest",
        name: "错误逮捕", nameEn: "False Arrest",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "警察破门而入，戴上手铐，虽然你是无辜的。法律不再是保护你的盾，而是指向你的剑。",
        defEn: "Police break in, handcuffs on, though you're innocent. The law is no longer your shield but a sword aimed at you.",
        core: "A面：被冤枉可以激发最强烈的抗争意志——不公正是革命者的燃料。/ B面：卡夫卡式噩梦——你越试图自证清白，系统就越认定你有罪，因为'无辜的人不会如此激动'。关键张力：如果证据说你有罪，而你知道自己无辜——你相信证据还是相信自己？ | 实在界入侵(Tuche): 法律保护的不是正义，而是程序。",
        coreEn: "A-side: Being wrongly accused can fuel the fiercest resistance — injustice is the revolutionary's fuel. / B-side: A Kafkaesque nightmare — the more you protest innocence, the guiltier you seem, because 'innocent people don't get this agitated.' Key tension: If evidence says guilty but you know you're innocent — do you trust the evidence or yourself? | Real punctured: Law protects procedure, not justice.",
        reference: "卡夫卡《审判》中莫名其妙被审判的K；《肖申克的救赎》中被虚假证据判定杀妻的安迪。",
        referenceEn: "K inexplicably put on trial in Kafka's The Trial; Andy sentenced for his wife's murder on false evidence in The Shawshank Redemption.",

        topology: "法律符号的短路：盾翻转为剑——同一套程序既能保护你也能碾碎你，翻转的条件不是正义，而是你站在程序的哪一侧",

        directive: {
            bright: "写牢房里的第一个夜晚——主体在黑暗中清醒着，但不是恐惧，而是一种前所未有的清晰。写他第一次意识到'我必须靠自己'时的身体反应——拳头攥紧，呼吸变深。不要写成'正义终将到来'的童话，不要让主体变成英雄——写一种更冷的觉醒：系统不在乎我有没有罪，那我也不再需要系统的认可。",

            dark: "写审讯室的灯光——刺眼的白光下，主体的每一句辩解都被记录员面无表情地打字记下。写一个具体的卡夫卡式细节：主体说'我没做过'，记录员打下'嫌疑人否认'——同一句话，换了一个主语，就变成了罪证。不要写成愤怒或恐惧，而是写一种语言层面的恐怖：我说的每个字都在被翻译成另一种意思，而我无法控制这个翻译。",

            tension: "悖论不是'抗争vs.绝望'——而是：主体越清白，他就越无法证明自己清白，因为清白的人没有证据。证据是为有罪的人准备的——你做了什么才会留下痕迹。场景锚点：主体被要求提供不在场证明，但他那天只是在家睡觉——'我什么都没做'恰恰是最不可证明的事情。不要给出解决方案。"
        }
    },
    {
        id: "enc_exposure",
        name: "公开曝光", nameEn: "Public Exposure",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "私密信息被全网公开——可能是照片、聊天记录、或一段你以为已经删除的过去。社会性死亡。",
        defEn: "Private information goes public — photos, chats, or a past you thought was deleted. Social death.",
        core: "A面：面具被撕碎也可以是一种解放——你不再需要维持那个精心编造的公众形象了。真实的你终于暴露在阳光下。/ B面：在全景敞视的凝视下，你变成了一具赤裸的标本——每个人都在看，没有人在理解。关键张力：他们看到的那个'真实的你'——真的是你吗？还是只是另一个更残酷的标签？ | 实在界入侵(Tuche): 隐私不是一种权利，而是一种特权——它随时可以被收回。",
        coreEn: "A-side: Having your mask torn off can be liberation — you no longer need to maintain that carefully crafted persona. The real you finally stands in sunlight. / B-side: Under the panoptic gaze, you become a naked specimen — everyone watches, no one understands. Key tension: Is the 'real you' they see actually you? Or just another, crueler label? | Real punctured: Privacy is not a right but a privilege — revocable at any time.",
        reference: "《狩猎》里被谣言造成社会性死亡的卢卡斯；《黑镜：国歌》中隐私被全网彻底曝光的政客。",
        referenceEn: "Lucas socially destroyed by rumors in The Hunt; the politician whose privacy is fully exposed online in Black Mirror: The National Anthem.",

        topology: "面具与脸的莫比乌斯翻转：面具被撕掉后暴露的不是'真脸'——而是另一层面具，因为公众用他们的凝视重新塑造了你",

        directive: {
            bright: "写曝光后第二天早上——主体不用再检查手机看有没有人发现了。秘密已经不是秘密了，恐惧消失了，取而代之的是一种奇怪的空旷。用一个身体细节：主体第一次在公共场合没有下意识地整理表情。不要写成'做真实的自己'的鸡汤，而是写一种更复杂的感觉——伪装需要消耗巨大的能量，能量突然多出来了，但主体不知道该拿它做什么。",

            dark: "写主体打开手机的那一刻——评论像子弹一样涌来，但最恐怖的不是辱骂，而是那些'我早就知道了'的留言。写一个具体的细节：主体发现自己的名字变成了一个标签，每个人都在用这个标签讨论一个他不认识的人。不要写成被迫害的悲情，写一种更深的恐怖——他们看到的那个'真实的我'，和我知道的那个我，是两个完全不同的人。",

            tension: "悖论：被曝光后，主体不再需要维持假象——但公众在废墟上建了一个新的假象（'真实的你'），这个假象比原来那个更坚固，因为它是以'真相'的名义建造的。场景锚点：主体想解释'那不是全部的我'，但发现这句话听起来像是在狡辩。不要写成'我要夺回叙事权'的反击，写他发现叙事权这个东西本身就不存在——你的故事从来不属于你。"
        }
    },
    {
        id: "enc_eviction",
        name: "强制驱逐", nameEn: "Eviction",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "房东或银行收回房子，行李被扔在街上。物理空间上的连根拔起。",
        defEn: "Landlord or bank reclaims the house, belongings thrown on the street. Physically uprooted.",
        core: "A面：失去固定住所可以是游牧式自由的起点——你终于不再被一个地址捆绑。/ B面：庇护所的丧失不只是物理事件——它意味着你在这座城市的地图上被擦除了。关键张力：一个'家'到底是四面墙，还是一种你对世界的归属感？ | 实在界入侵(Tuche): 你对一个空间的'所有权'只是一份随时可以撕毁的合同。",
        coreEn: "A-side: Losing a fixed address can be the start of nomadic freedom — you're finally unbound from a location. / B-side: Losing shelter isn't just physical — it means being erased from the city's map. Key tension: Is a 'home' four walls, or a sense of belonging to the world? | Real punctured: Your 'ownership' of a space is just a contract that can be torn up anytime.",
        reference: "《无依之地》中失去居所被迫驱车流浪的弗恩；赛博朋克中付不起义体租金被扔上街的边缘人。",
        referenceEn: "Fern forced to wander after losing housing in Nomadland; marginalized people thrown onto streets for failing to pay rent in cyberpunk.",

        topology: "空间锚点的连根拔起：不是'失去房子'——而是'家'这个概念本身被暴露为一份租约，你以为的根只是插在别人土地里的旗",

        directive: {
            bright: "写主体坐在路边行李箱上的那一刻——周围是他所有的物品，但它们占的空间小得可怜。让主体第一次意识到：原来我的全部家当可以装进一辆出租车。写一种身体层面的轻——肩膀的放松，因为不用再担心房贷了。不要写成流浪的浪漫，而是写一种「原来维持一个固定地址的重量，比我以为的大得多」的发现。",

            dark: "写钥匙失效的那一刻——主体站在自家门前，钥匙插进去但转不动了。门还是那扇门，锁已经换了。写一个细节：透过窗户看到里面的家具还在原位，但它们已经不属于他了。不要写成愤怒，写一种更深的错位——空间还在，但空间里的'我'已经被擦除了。我变成了自己家的陌生人。",

            tension: "悖论：行李被扔在街上的那一刻，主体发现他最舍不得的不是房子——而是房子给他的那个幻觉：'我有一个地方可以回去。'现在这个幻觉碎了，但碎掉的不是房子，是'回去'这个概念本身。场景锚点：主体拖着行李箱走在街上，经过一排排亮着灯的窗户，每一扇窗后面都有一个他不再拥有的东西——不是空间，是'属于'。"
        }
    },
    {
        id: "enc_draft",
        name: "战争征召", nameEn: "The Draft",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "收到入伍通知书，被迫卷入一场不属于你的战争。你的身体从今天起属于国家。",
        defEn: "Draft notice received, forced into a war not your own. Your body belongs to the state from today.",
        core: "A面：战争可以锻造出一个人从未被发现的勇气、情义和生命力——有些人在和平中沉睡，在战火中觉醒。/ B面：身体被征用为杀戮工具。你的名字被换成编号。你的生死被换算成一个统计指标。关键张力：如果你在战场上变成了一个你不认识的人——回来之后，你还回得去吗？ | 实在界入侵(Tuche): 个人命运在宏大叙事面前的绝对渺小。",
        coreEn: "A-side: War can forge courage, bonds, and vitality never discovered in peacetime — some sleep in peace and awaken in fire. / B-side: Body requisitioned as a killing tool. Your name becomes a number. Your life and death, a statistic. Key tension: If war turns you into someone you don't recognize — can you ever go back? | Real punctured: The absolute insignificance of individual fate before grand narratives.",
        reference: "《全金属外壳》中被国家机器异化为杀戮工具的青年士兵；《饥饿游戏》中被迫卷入残酷生存直播秀的凯特尼斯。",
        referenceEn: "Young soldiers alienated into killing machines in Full Metal Jacket; Katniss forced into a brutal survival broadcast in The Hunger Games.",

        topology: "身体主权的征用：你的名字被编号覆写——不是身份的丧失，而是发现身份原来是一种可以被没收的许可证",

        directive: {
            bright: "写战场上的一个具体瞬间——不是宏大的战斗，而是一个微小的时刻：主体在掩体后面，替一个受伤的陌生人包扎伤口，手在发抖但没有停。写他第一次意识到自己可以在恐惧中行动的震撼。不要写成'战争让男孩变成男人'的军国主义，不要歌颂暴力——写一种更私密的发现：我不知道我有这种勇气，是极端处境逼出来的，但它是真实的。",

            dark: "写入伍第一天的理发——镜子里的脸突然变成了一个他不认识的人。写一个具体的细节：所有新兵穿着一样的衣服，用一样的编号互相称呼，吃一样的饭。不要写成'战争是地狱'的控诉，写一种更安静的恐怖——主体意识到系统不需要'他'，系统需要的只是一具合格的身体。他的名字、记忆、梦想，都是系统不需要的多余部件。",

            tension: "悖论：战争既逼出了主体最真实的自己（因为只有在生死关头你才知道自己是谁），也彻底抹除了主体的自己（因为系统只需要一个编号）。场景锚点：主体在战场上救了一个人，但回到营地后，他的名字在报告里变成了一个数字。那个数字包含了他最勇敢的时刻，但数字本身是匿名的。不要让主体为此愤怒——让他沉默。"
        }
    },
    {
        id: "enc_ban",
        name: "作品被禁", nameEn: "The Ban",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "毕生心血被系统删除、销毁或封禁。你的声音被权力判定为噪音。",
        defEn: "Life's work deleted, destroyed, or banned by the system. Your voice is judged as noise by power.",
        core: "A面：被禁本身可以成为最强大的传播力——所有伟大的禁书都比畅销书活得更久，因为权力亲手为它们贴上了'危险'的认证。/ B面：话语权的阉割——你的创造物被系统像垃圾一样处理。你用生命写下的东西，在权力眼里连'错误'都算不上，只是'不存在'。关键张力：如果没有人能读到你的作品——它还存在吗？ | 实在界入侵(Tuche): 表达的自由不是天赋的，而是被允许的。",
        coreEn: "A-side: Being banned can become the most powerful broadcast — all great banned books outlive bestsellers, because power itself certifies them as 'dangerous.' / B-side: Castration of voice — your creation is processed like garbage. What you wrote with your life isn't even 'wrong' in power's eyes — it simply 'doesn't exist.' Key tension: If no one can read your work — does it still exist? | Real punctured: Freedom of expression is not given but permitted.",
        reference: "《霸王别姬》中文革时期遭受批斗被毁的艺术结晶；《华氏451度》中焚烧天下禁书的消防员社会。",
        referenceEn: "Artistic works condemned and destroyed during the Cultural Revolution in Farewell My Concubine; the firemen burning banned books in Fahrenheit 451.",

        topology: "声音的双重否定：被消音本身制造了回声——权力越是删除，删除行为本身越是成为作品的延伸",

        directive: {
            bright: "写主体在作品被删除后的那个晚上——他坐在空房间里，电脑屏幕是黑的，但他发现自己在笑。写一个具体的细节：他收到了一条陌生人的消息，'我截屏了'。不要写成'真理必胜'的童话，写一种更地下的力量感——作品变成了幽灵，它在系统的盲区继续传播，而权力每一次删除都在给它做广告。",

            dark: "写删除发生的那一刻——不是戏剧化的焚烧，而是一个安静的通知：'您的内容因违反社区规定已被移除。'写主体点开那个页面，看到的是一片空白和一行灰色小字。不要写成悲壮，写一种更深的虚无——他用十年写的东西，系统用一个自动化脚本就处理了。在权力眼里，这甚至不值得一个人来执行。",

            tension: "悖论：被禁的作品获得了一种它活着时从未拥有的力量——但这种力量不属于作品本身，而属于'被禁'这个标签。场景锚点：主体发现他的作品在地下以截屏和手抄本的形式传播，但传播的人大多没有读过原文——他们传播的是'被禁'这个事件，而不是内容本身。作品活了，但活着的不是作品。不要解决这个悖论。"
        }
    },
    {
        id: "enc_org_betrayal",
        name: "组织背叛", nameEn: "Agency Betrayal",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "一直效忠的组织决定牺牲你作为替罪羊。你为它流过的血，在它眼里只是会计账本上的一笔冲销。",
        defEn: "The organization you served decides to sacrifice you as a scapegoat. The blood you shed for it is merely an accounting write-off.",
        core: "A面：被组织抛弃可以打碎一种更深层的幻觉——'忠诚会被回报'。这种幻灭虽然痛苦，但它让你第一次为自己而活。/ B面：大他者的恶意——你不是被遗忘，而是被精心选中作为牺牲品。你的忠诚恰恰是你被利用的原因。关键张力：你恨的是组织背叛了你，还是恨自己居然信了这么久？ | 实在界入侵(Tuche): 忠诚是一种单向合同——你签了，它从来没签。",
        coreEn: "A-side: Being abandoned by the organization can shatter a deeper illusion — that loyalty is repaid. This disillusion, though painful, lets you live for yourself for the first time. / B-side: The Other's malice — you weren't forgotten but carefully chosen as a sacrifice. Your loyalty is precisely why you were used. Key tension: Do you hate the organization for betraying you, or yourself for believing this long? | Real punctured: Loyalty is a one-way contract — you signed, it never did.",
        reference: "《谍影重重》中被中情局当做弃子追杀的伯恩；《异形》里被公司高层视作实验消耗品的底层船员。",
        referenceEn: "Bourne thrown away and hunted by the CIA in The Bourne Identity; the lower-level crew treated as expendable by Weyland Corporation in Alien.",

        topology: "忠诚契约的单边撕毁：不是背叛——而是暴露契约从未成立过。你一直在给一个不存在的对象签合同",

        directive: {
            bright: "写主体接到通知的那一刻之后——不是当场的反应，而是第二天早上醒来时的感觉：不用打卡了。写一种身体记忆的脱落——手自动伸向闹钟，然后停住。让主体在一个日常动作的中断里感受到自由。不要写成'我要复仇'的愤怒，不要写成'我终于看清了'的顿悟——写一种更慢的过程：忠诚的习惯要花很长时间才能从身体里退出。",

            dark: "写主体翻看旧邮件的场景——那些'我们是一个团队'、'你是不可替代的'的措辞，现在读起来像一份精心编写的钓鱼话术。写一个具体的细节：主体发现自己被选为替罪羊的那封内部邮件，发送时间是三个月前——他还在卖命的时候，牺牲他的决定已经做好了。不要写成受害者叙事，写一种认知层面的恐怖：我的忠诚不是被辜负了，而是被精确地利用了。",

            tension: "悖论：忠诚是主体被利用的原因——不是尽管他忠诚，而是因为他忠诚。忠诚者是最好的替罪羊，因为他们最后才会反抗。场景锚点：主体在法庭上看到组织的律师，律师西装笔挺，手里拿着一份主体亲手签的保密协议——主体当初签的时候以为是保护组织，现在才发现是保护组织免受他的指控。同一份文件，同一个签名，翻转了。"
        }
    },
    {
        id: "enc_lawsuit",
        name: "天价诉讼", nameEn: "The Lawsuit",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "收到律师函，面临巨额赔偿或牢狱之灾。法律程序像一台绞肉机，缓慢地、不可逆地把你的生活碾碎。",
        defEn: "Legal notice received, facing huge fines or prison. Legal procedure like a meat grinder, slowly, irreversibly crushing your life.",
        core: "A面：对簿公堂也可以是一种澄清——在法庭上，你终于有机会让真相被所有人听到。/ B面：语言的暴力——生活被卷入繁琐而致命的法律程序，每个词都可能是绞索。关键张力：法律到底是正义的工具，还是有钱人的武器？ | 实在界入侵(Tuche): 在法律面前人人平等，除了请不起律师的人。",
        coreEn: "A-side: Court can be a clarification — finally, a chance for truth to be heard by all. / B-side: Linguistic violence — life caught in fatal legal procedure, every word a potential noose. Key tension: Is the law a tool of justice, or a weapon of the wealthy? | Real punctured: All are equal before the law, except those who can't afford lawyers.",
        reference: "《黑水》中被化工巨头用司法泥沼拖垮的弱势律师；《社交网络》中陷入股权连环诉讼的创始人。",
        referenceEn: "The civilian lawyer worn out by the endless legal swamp of a chemical giant in Dark Waters; founders trapped in equity lawsuits in The Social Network.",

        topology: "语言的绞刑架：每个词都同时是辩护和绞索——法律程序把生活翻译成另一种语言，而你在这种语言里是文盲",

        directive: {
            bright: "写法庭上的一个瞬间——主体终于获得了陈述的机会。写他的声音在法庭里回响的感觉：在一个所有人都在用程序语言说话的空间里，他用人话说了一段真实的经历。不要写成'正义必胜'，写一种更脆弱的力量——他不知道这段话会不会改变结果，但他第一次在公共空间里说出了真相，这件事本身有重量。",

            dark: "写律师费账单的场景——一叠越来越厚的纸，每一页都在把主体的生活折算成小时费率。写一个具体的细节：主体发现对方律师团有七个人，他只有一个刚毕业的公派律师。不要写成'法律不公'的控诉，写一种算术层面的绝望——正义不是被拒绝了，而是被定了一个他付不起的价格。",

            tension: "悖论：法庭给了主体说话的权利——但这个权利是有格式要求的。他必须把自己的痛苦翻译成法律术语，而翻译的过程会把痛苦变成另一个东西。场景锚点：主体在法庭上描述自己的遭遇，律师打断他说'请回答是或不是'。他的故事被压缩成一个二选一的选项，而两个选项都不对。不要让主体找到出路。"
        }
    },
    {
        id: "enc_exam_fail",
        name: "落榜", nameEn: "Exam Failure",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "高考、公考或关键选拔失败。阶层跃升的独木桥断裂了。",
        defEn: "Failing high-stakes exams. The narrow bridge to social mobility collapses.",
        core: "A面：落榜可以是另一条路的起点——所有被制度筛掉的人里，藏着大量被制度无法测量的天赋。/ B面：被筛选机制淘汰不只是'没考好'——它是一种系统性的宣判：'你不够格。'关键张力：这个考试测量的到底是你的能力，还是你对这个系统的服从度？ | 实在界入侵(Tuche): 所谓'公平竞争'的筛选机制，本身就是一种暴力。",
        coreEn: "A-side: Failing can be the start of another path — among all filtered out by the system, countless talents the system cannot measure are hidden. / B-side: Being filtered isn't just 'poor performance' — it's a systemic verdict: 'You're not qualified.' Key tension: Does this exam measure your ability, or your compliance with the system? | Real punctured: The 'fair competition' filter is itself a form of violence.",
        reference: "《范进中举》中被科举折磨至癫狂的士人；《千钧一发》里因基因检测被淘汰的普通人。",
        referenceEn: "The scholar driven to madness by the imperial exam in Fan Jin Passes; ordinary humans eliminated by genetic tests in Gattaca.",

        topology: "筛选机器的吐出：你不是'失败了'——你是被一台测量服从度的机器标记为不合格零件",

        directive: {
            bright: "写成绩公布后的第二天——不是当天的崩溃，而是第二天早上醒来的那一刻：闹钟没有响，因为不需要再去补习班了。写主体走出家门时注意到的一个东西——路边的猫、天上的云、一个从没走过的巷子。不要写成'条条大路通罗马'的鸡汤，写一种感官层面的发现：被系统吐出后的世界，比系统内部的世界大得多。",

            dark: "写榜单前的场景——主体从上往下找自己的名字，手指划过一行行陌生的名字，越划越快，越划越慌。写名字不在榜上的那一秒的身体反应：不是悲伤，是一种物理性的坠落感，像脚下的地板突然消失了。不要写成'我下次再来'的励志，写一种更深的宣判感——这个系统用一张纸告诉你：你不够格。",

            tension: "悖论：考试筛选的不是能力——但落榜者永远无法证明这一点，因为'没有通过考试'本身就被定义为'能力不足'的证据。场景锚点：主体知道班上最聪明的人不是考得最好的那个，而是最会考试的那个——但这种知道没有任何用处，因为系统只认分数。不要给主体找到替代路径，让他面对这个不可辩驳的荒诞。"
        }
    },
    {
        id: "enc_visa_denied",
        name: "签证拒签", nameEn: "Visa Denied",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "被拒绝入境或驱逐出境，滞留在机场或边境的无人地带。两个法律体系之间的缝隙——那里没有任何权利适用于你。",
        defEn: "Entry denied or deported, stranded in the no-man's-land of an airport or border. In the crack between two legal systems — where no rights apply to you.",
        core: "A面：被拒于门外可以让你重新审视'那扇门'——也许门里面的东西并不值得你放弃尊严去乞求。/ B面：无国籍者的恐怖——你被困在两个法律体系的缝隙中，不属于任何一边。关键张力：如果你在任何地方都不被承认——你还是一个'人'吗？ | 实在界入侵(Tuche): 国境线不是地理概念，而是权力概念——它决定谁算'人'。",
        coreEn: "A-side: Being turned away can make you re-examine 'that door' — perhaps what's inside isn't worth begging for. / B-side: The stateless person's horror — stuck in the crack between two legal systems, belonging to neither. Key tension: If no place recognizes you — are you still a 'person'? | Real punctured: Borders are not geography but power — they decide who counts as 'human.'",
        reference: "《幸福终点站》里因祖国政变被无限期困于机场的维克多；《第九区》中不被接纳的外星难民。",
        referenceEn: "Viktor indefinitely stranded in the airport after a coup in The Terminal; alien refugees rejected and confined in District 9.",

        topology: "法律身份的悬置：被卡在两套法律体系的缝隙里——不是'没有权利'，而是'权利'这个概念在你脚下的那块地上不适用",

        directive: {
            bright: "写主体在机场无人区的第三天——他已经停止敲窗户了。写一个微小的时刻：他在候机厅的角落用纸杯种了一棵豆芽。不要写成'人的精神不可摧毁'的鸡汤，写一种更安静的发现——当所有的门都关上时，主体第一次不用选择走哪扇门了。这种「不用选择」里有一种他从未体验过的平静，尽管这种平静是被迫的。",

            dark: "写一个具体的行政细节：主体站在入境窗口，官员看了看他的护照，啪地盖了一个红色的章，然后把护照从窗口下面推回来。没有对话，没有解释。写主体低头看那个红色的章——一个陌生人用一个印章，在五秒钟内决定了他的命运。不要写成被迫害的悲情，写一种更冷的发现：国境线不是地上的一条线，是某个人手里的一枚印章。",

            tension: "悖论：主体被困在一个两个法律体系都不管的缝隙里——但这个缝隙不是'无法之地'，而是法律的产物。正是因为法律画了一条线，线的两边才会有一个不属于任何一边的空间。场景锚点：主体在机场过夜，头顶是'欢迎来到XX国'的标语，脚下是他不被允许踏上的土地。标语在对他说话，但他不是说话的对象。不要用愤怒填充这个场景，用荒诞。"
        }
    },
    {
        id: "enc_obsolescence",
        name: "机能替代", nameEn: "Made Obsolete",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "发现某种更高效的新事物能比你更好、更快地完成你赖以生存的工作。你不是被打败了——你是被跳过了。",
        defEn: "Discovering a more efficient new entity does your essential work better and faster. You're not defeated — you're bypassed.",
        core: "A面：被替代可以倒逼你去发现那些'不可被替代'的部分——机器能计算，但它不能痛苦，不能爱，不能创造意义。/ B面：价值归零的恐慌——如果你做的事情任何人（或任何东西）都能做，那'你'的独特性在哪里？关键张力：你的价值到底来自你做的事，还是来自你是谁？ | 实在界入侵(Tuche): 能力是一种会过期的货币。",
        coreEn: "A-side: Being replaced can force you to discover what's 'irreplaceable' — machines compute, but they can't suffer, love, or create meaning. / B-side: The panic of zeroed value — if anyone (or anything) can do what you do, where is YOUR uniqueness? Key tension: Does your value come from what you do, or who you are? | Real punctured: Ability is a currency with an expiration date.",
        reference: "《隐藏人物》里被IBM计算机夺走存在意义的非裔女计算员；《银翼杀手2049》里被更替而遭报废的旧型号仿生人。",
        referenceEn: "Human computers replaced by IBM mainframes in Hidden Figures; older replicant models dismantled for obsolescence in Blade Runner 2049.",

        topology: "功能位的跳过：你不是被击败——你是被整个赛道绕过去了。失败至少意味着你参与了比赛，被跳过意味着比赛不再需要你这个赛道",

        directive: {
            bright: "写主体被替代后的第一个星期——他试着教新系统做他以前做的事，发现新系统在三分钟内完成了他过去花三天做的工作。写他的反应不是愤怒而是一种奇怪的释放：原来我一直在做一件机器能做的事。写主体走出办公室时的感觉——双手空了，但不是因为失去了什么，而是因为发现自己一直抱着一个不需要被人抱的东西。不要写成'人的价值不在于做什么'的鸡汤。",

            dark: "写一个具体的对比场景：主体站在新系统的屏幕前，看着它完美地完成了自己的工作——每一个步骤都比他做得更快、更准、更便宜。写主体注意到的一个细节：新系统不需要休息，不需要加薪，不需要情绪管理。不要写成'人终将被机器取代'的科幻恐慌，写一种更私密的寒意——这个系统不是在替代'我'，它是在证明'我'这个位置从来不需要一个人。",

            tension: "悖论：被替代本身不是问题——问题是主体发现他一直引以为傲的'能力'，其实只是他能做的事情的名字，而不是他是谁的名字。能力没了，名字还在——但这个名字现在指向的是什么？场景锚点：主体在简历上写下自己的技能，突然发现每一项技能后面都可以加一个括号'（已被自动化）'。不要让主体找到'不可替代'的部分，让他面对这个空白。"
        }
    },
    {
        id: "enc_disinherited",
        name: "遗产被夺", nameEn: "Disinherited",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "遗嘱被篡改，原本属于你的财富和位置落入他人之手。血缘关系在利益面前像纸一样薄。",
        defEn: "Will forged; your expected wealth and position fall to others. Blood ties as thin as paper before profit.",
        core: "A面：失去继承权也意味着失去了一条锁链——你再也不用做'谁家的儿子'了。/ B面：家族契约的背叛——不是陌生人夺走了你的东西，而是最亲近的人。关键张力：你争的到底是那笔钱，还是'我在这个家里到底算不算数'的承认？ | 实在界入侵(Tuche): 继承不是爱的证明，而是权力的延续。",
        coreEn: "A-side: Losing inheritance also means losing a chain — you never have to be 'someone's son' again. / B-side: The betrayal of family contracts — it's not strangers who took what's yours, but those closest. Key tension: Are you fighting for the money, or for recognition that you 'count' in this family? | Real punctured: Inheritance is not proof of love but continuation of power.",
        reference: "《雷雨》中因资本法则而一无所有被抛弃的鲁妈；《沙丘》里祖先基业被帝国权力游戏瞬间连根夺取的厄崔迪家族。",
        referenceEn: "Mother Lu abandoned with nothing under cold capitalist laws in Thunderstorm; House Atreides' ancestral foundation radically usurped by imperial game in Dune.",

        topology: "血缘符号的脱钩：遗产被夺暴露了血缘从来不是自然纽带——它是一份法律文件，而法律文件可以被篡改",

        directive: {
            bright: "写主体走出律师事务所的那一刻——他失去了遗产，但他也失去了一个他没意识到的枷锁：'XX家的儿子'。写主体第一次用自己的名字而不是家族的名字介绍自己时的感觉。不要写成'我不需要钱也能活'的清高，写一种更具体的解放——不用再去家族聚会了，不用再假装喜欢那些亲戚了，不用再维持一个他从来不属于的角色了。",

            dark: "写遗嘱宣读的场景——主体坐在会议室里，对面是他的兄弟姐妹和一个律师。律师念出名字，一个一个，都不是他的。写一个具体的细节：主体看到对面的兄弟露出的表情不是胜利，而是如释重负——他们早就知道了。不要写成家族狗血剧，写一种更冷的发现：他在这个家里的位置，从一开始就是一个注脚。他争的不是钱——他争的是'我在这个家里算不算数'的承认，而答案已经给了。",

            tension: "悖论：主体争的不是遗产——是承认。但遗产恰恰是这个家族唯一的承认方式。在这个家里，爱的证明就是写进遗嘱，被排除在遗嘱之外就是被排除在爱之外。场景锚点：主体在遗嘱上看到一行字——留给他的不是财产，是父亲的一块旧手表。这块手表值不了钱，但它是遗嘱里唯一以他名字命名的条目。这到底是爱还是羞辱？不要回答。"
        }
    },
    {
        id: "enc_quarantine",
        name: "强制隔离", nameEn: "Quarantine",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "突发疫情封锁，被困在狭小空间，物资短缺。昨天的日常瞬间变成了例外状态。",
        defEn: "Sudden pandemic lockdown, trapped in tight quarters, shortages. Yesterday's normal instantly becomes a state of exception.",
        core: "A面：隔离也可以是一次强制性的停顿——在被迫停下来的日子里，你终于有机会面对那些你一直在用忙碌逃避的东西。/ B面：例外状态（State of Exception）——生物生存权压倒了一切自由权。你不是公民，你是一个需要被管控的生物体。关键张力：如果安全和自由不可兼得——你选哪一个？ | 实在界入侵(Tuche): 日常秩序不是自然状态，而是一种随时可以被暂停的许可。",
        coreEn: "A-side: Quarantine can be a forced pause — in the days of enforced stillness, you finally face what you've been evading with busyness. / B-side: State of Exception — biological survival overrides all freedoms. You're not a citizen but a biological unit to be managed. Key tension: If safety and freedom are incompatible — which do you choose? | Real punctured: Daily order is not natural but a license that can be suspended at any time.",
        reference: "加缪《鼠疫》中被封锁的奥兰城市民；《釜山行》中被困在丧尸列车密闭空间的幸存者。",
        referenceEn: "The citizens of Oran sealed in isolation in Camus's The Plague; survivors trapped in a sealed zombie train in Train to Busan.",

        topology: "日常的例外化：不是'日常被打断'——而是暴露了日常本身就是一种需要许可的例外状态，只是你之前没注意到许可证的存在",

        directive: {
            bright: "写隔离第十天的一个下午——主体坐在窗前，第一次认真看了窗外的那棵树。他住在这里三年了，从来没注意到这棵树春天会开花。写一种被迫停下来之后的感官复苏：听到了钟表的滴答声、闻到了阳光晒被子的味道。不要写成'慢生活的美好'的鸡汤，写一种更诚实的发现——这些东西一直在，但他用忙碌把自己和它们隔开了。停下来不是选择，是被迫的——但被迫停下来之后看到的东西是真实的。",

            dark: "写社区志愿者送物资的场景——门开了一条缝，一只手伸进来放下一袋东西，门又关上了。写主体透过猫眼看到走廊的画面：所有的门都关着，走廊是空的。不要写成'人性的冷漠'，写一种更行政性的恐怖——他不再是一个公民，而是一个需要被投喂的生物单元。管理者不在乎他的名字，只在乎他的体温数据。",

            tension: "悖论：隔离既给了主体面对自己的时间，也剥夺了主体逃避自己的所有方式。面对自己不是一个选择——它是所有其他选项被移除后剩下的唯一选项。场景锚点：主体在第五天开始对自己说话，第十天意识到他说的那些话他从来没有对任何人说过——不是因为他不想说，而是因为他从来没有安静到能听见自己。不要把这写成疗愈，写成一种双刃剑：安静让他听见了自己，但他听见的那个人不全是他喜欢的。"
        }
    },
    {
        id: "enc_hyperinflation",
        name: "恶性通胀", nameEn: "Hyperinflation",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "钱变成了废纸，毕生积蓄买不到一块面包。曾经坚硬的数字变成了无意义的符号。",
        defEn: "Money turns to waste paper; life savings buy no bread. Numbers once solid become meaningless symbols.",
        core: "A面：当货币变成废纸，一种更古老、更真实的交换方式可能复苏——人开始用技能、信任和情感来交易。/ B面：符号与现实的脱钩——你用一生换来的数字，系统用一秒钟就让它归零。关键张力：如果金钱是一种集体幻觉——那你用青春换来的到底是什么？ | 实在界入侵(Tuche): 货币的'价值'从来不在纸上——在纸上的那个数字，只是信仰。",
        coreEn: "A-side: When currency becomes waste, an older, more authentic exchange may revive — people trade with skills, trust, and emotion. / B-side: Signifier-reality decoupling — the numbers you traded your life for, the system zeros in one second. Key tension: If money is a collective hallucination — what did you trade your youth for? | Real punctured: Currency's 'value' was never on paper — the number was only faith.",
        reference: "魏玛共和国时期用一整车马克买不到一块面包的历史纪实；反乌托邦中货币点数瞬间崩溃的赛博贫民窟。",
        referenceEn: "Historical accounts of needing wheelbarrows of Marks but failing to buy bread in the Weimar Republic; cyber-slums where points collapse instantly in dystopia.",

        topology: "能指与所指的断裂：纸上的数字和面包之间的等号消失了——暴露了这个等号从来不是数学关系，而是信仰关系",

        directive: {
            bright: "写主体在市场上用一件旧外套换了三天的粮食——对方不要钱，要衣服，因为冬天要来了。写交换发生时两个人的眼神：没有讨价还价，没有计算，只有一种古老的默契。不要写成'回归田园'的浪漫，写一种发现——当所有人都不再信任数字的时候，信任反而回到了人和人之间。这种信任更脆弱，但也更真实。",

            dark: "写主体在银行取出毕生积蓄的场景——一摞厚厚的钞票，但走出银行他发现这些钱买不到一顿午饭。写一个具体的画面：主体站在面包店前，看着标价牌上的数字每小时更新一次。不要写成'资本主义崩溃'的政治叙事，写一种更私密的恐怖——他用二十年换来的那叠纸，和厕所里的纸巾，现在是同一种东西。",

            tension: "悖论：货币崩溃后，人们回到了以物易物——但以物易物不是'更真实的交换'，它只是另一种符号系统，只不过这个系统比货币更古老、更不方便。场景锚点：主体用一条金项链换了一袋大米，卖家称了称大米，主体称了称金项链。两个人都在计算，但计算的标准已经不是数字了——那是什么？双方都不知道，但交易完成了。不要解释这个场景，让它悬着。"
        }
    },
    {
        id: "enc_blackout",
        name: "维生系统瘫痪", nameEn: "Blackout",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "维系日常生存的底层系统突然失效——停电、断水、通讯中断。文明的外壳在几小时内剥落。",
        defEn: "Underlying systems maintaining daily survival suddenly fail — power, water, communications. Civilization's shell peels in hours.",
        core: "A面：基础设施瘫痪剥掉了一切'便利'的外衣——你被迫重新发现自己作为生物体的原始能力：生火、取水、辨别方向。/ B面：文明是一层极薄的壳——它只需要 72 小时的停电就会退化为弱肉强食的丛林。关键张力：当电恢复的时候，你还能回到之前那个'正常'的自己吗？还是你已经看到了自己在黑暗中的另一面？ | 实在界入侵(Tuche): 你所依赖的'正常生活'基于一个你从未注意到的脆弱系统。",
        coreEn: "A-side: Infrastructure collapse strips away all 'convenience' — you're forced to rediscover your raw biological abilities: making fire, fetching water, reading directions. / B-side: Civilization is an extremely thin shell — it takes only 72 hours of blackout to regress to the law of the jungle. Key tension: When the power comes back, can you return to your 'normal' self? Or have you already seen your other face in the dark? | Real punctured: Your 'normal life' depends on a fragile system you never noticed.",
        reference: "《断网假期》中全球断网后的末日世界；《我是传奇》中失去文明底座的末世孤城。",
        referenceEn: "The doomsday world after a global blackout in Leave the World Behind; the post-apocalyptic city losing its civilizational base in I Am Legend.",

        topology: "文明外壳的72小时剥蚀：停电不是系统故障——它暴露了'正常生活'本身就是一台需要持续供电的机器",

        directive: {
            bright: "写停电第二天的早晨——主体用打火机点燃了报纸，第一次在自家厨房里生火煮水。写火焰在他脸上跳动的光影，写水烧开时的蒸气。用感官细节捕捉一种久违的具体性——在电力时代，水来自水龙头，热来自空调，一切都是间接的。现在一切都是直接的：火、水、手。不要写成'回归自然'的浪漫，写一种身体层面的惊讶——我原来可以用自己的手活下去。",

            dark: "写停电第三天夜晚的楼道——主体拿着手电筒下楼取水，听到某层传来争吵声和摔东西的声音。写主体加快脚步经过那扇门时的心跳。不要写成'人性本恶'的恐怖片，写一种更安静的认知：他和那扇门后面的人之间，隔的不是道德——是72小时的电力。电没了，那层隔板就没了。他不确定自己在第七天会不会变成那扇门后面的人。",

            tension: "悖论：停电让主体重新发现了自己的身体能力——但这种发现本身证明了身体能力在正常生活中是完全不必要的。他可以生火，但世界恢复供电后，这项技能会立刻变回一个无用的冷知识。场景锚点：电力恢复的那一刻，灯突然亮了，冰箱嗡的一声响起来——主体站在刚刚还在使用的火堆旁，火堆在灯光下显得非常原始、非常多余。他不知道该先关灯还是先灭火。"
        }
    },
    {
        id: "enc_outbreak",
        name: "瘟疫蔓延", nameEn: "Outbreak",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "身边的人突然倒下，封锁线拉起。不可见的敌人藏在每一次呼吸里。他人不再是邻居——他人是传染源。",
        defEn: "People nearby collapsing, perimeters up. An invisible enemy hides in every breath. Others are no longer neighbors — they are vectors.",
        core: "A面：瘟疫也是一面照妖镜——它暴露了谁是真正的英雄（逆行者），谁是平时伪装的好人（囤积者）。灾难是人性的X光机。/ B面：所有的'他人'瞬间变成了潜在的致命威胁。握手、拥抱、亲吻——一切亲密行为都变成了死亡赌博。关键张力：为了活下去，你愿意把门关到多紧？ | 实在界入侵(Tuche): 人类社会的底层契约（互相接触、互相信任）是有前提条件的。",
        coreEn: "A-side: A pandemic is also a mirror — it reveals who the real heroes are (those who run toward danger) and who the peacetime frauds are (hoarders). Disaster is humanity's X-ray. / B-side: Every 'other' instantly becomes a potentially lethal threat. Handshakes, hugs, kisses — all intimacy becomes a death gamble. Key tension: To survive, how tightly will you shut your door? | Real punctured: The social contract (touch, trust) has preconditions.",
        reference: "《传染病》中因病毒蔓延而迅速崩溃的现代社会；《生化危机》中被病毒泄露化为死城的浣熊市。",
        referenceEn: "Modern society rapidly collapsing from a novel virus in Contagion; Raccoon City turned into a sealed death trap by the virus in Resident Evil.",

        topology: "社会契约的生物学悬置：不可见的敌人把'他人'从邻居翻转为传染源——同一个人，位置没变，符号翻转了",

        directive: {
            bright: "写一个具体的画面：封城第三周，主体从窗户看到一个穿防护服的人在给独居老人送饭。防护服上没有名字，面罩后面看不到脸。写主体看到这个画面时的反应——不是感动，而是震撼：有人在这种条件下仍然在走向他人。不要写成'人间大爱'的煽情，写一种更冷静的观察——真正的品格不需要被看见，它在没有人注意的时候仍然存在。",

            dark: "写主体在电梯里的场景——电梯门开了，里面有一个邻居在咳嗽。写主体的身体在他的大脑做出决定之前就已经后退了一步。写两个人之间那一秒钟的眼神交换——邻居看到了他的后退，主体看到了邻居的受伤。不要写成'我们应该更善良'的道德说教，写一种更诚实的恐怖——他的身体背叛了他的价值观，而他的价值观在生存面前没有任何反驳的力量。",

            tension: "悖论：瘟疫不是让人变坏了——它是让'好'和'活'变成了互斥的选项。你可以善良（走向他人），也可以安全（远离他人），但你不能同时做到两者。场景锚点：主体收到一个朋友的消息——'我好像发烧了，能来看看我吗？'主体看着这条消息看了十分钟。不要写他的决定，写他的手悬在屏幕上方的那十分钟。"
        }
    },
    {
        id: "enc_revolution",
        name: "政变/革命", nameEn: "Revolution",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "一觉醒来，旗帜换了，总统换了，货币换了，昨天的英雄变成了今天的罪犯。你生活的整个系统在一夜之间被替换了。",
        defEn: "Wake up to find flags changed, president changed, currency changed. Yesterday's heroes are today's criminals. Your entire system is replaced overnight.",
        core: "A面：旧秩序的坍塌也许是必要的——有些系统太腐烂了，只有通过剧烈的断裂才能让新的东西生长出来。/ B面：但革命的恐怖在于，替换旧系统的新系统往往只是旧系统的另一个面孔——压迫者换了名字，被压迫的位置没有变。关键张力：推翻了暴君之后，空出来的那个王座——谁来坐？ | 实在界入侵(Tuche): '系统'不是外部的建筑——它内化在每一个生活在其中的人心里。所以即使你推倒了高墙，墙的蓝图还在你的脑子里。",
        coreEn: "A-side: The old order's collapse may be necessary — some systems are too rotten, requiring violent rupture for anything new to grow. / B-side: Revolution's horror is that the new system often wears the old system's face — oppressors change names, the position of the oppressed does not. Key tension: After the tyrant is overthrown — who sits on the vacant throne? | Real punctured: 'The system' isn't external architecture — it's internalized in everyone living within it. Even if you tear down the wall, its blueprint remains in your mind.",
        reference: "《再见列宁》中母亲昏迷醒来后发现整个东德已经不存在了；奥威尔《动物农场》里推翻人类暴政后猪变成了新暴君。",
        referenceEn: "The mother waking from a coma to find East Germany no longer exists in Good Bye Lenin!; pigs becoming the new tyrants after overthrowing human tyranny in Orwell's Animal Farm.",

        topology: "系统的整体替换：不是某个部件坏了——是整台机器在运行中被换成了另一台，但你的身体还保留着旧机器的肌肉记忆",

        directive: {
            bright: "写旧体制崩塌那天街上的画面——人群在广场上欢呼，旧政权的标志被拆下来。写主体站在人群中的感觉：空气里有一种他从来没呼吸过的东西，他暂时把它叫做'可能性'。不要写成'自由万岁'的革命浪漫，写一种更诚实的观察——他注意到人群里的每个人都在笑，但没有人知道明天该做什么。推翻了旧的，新的还不存在，而'还不存在'这件事本身有一种危险的美。",

            dark: "写革命后第三个月的场景——新政权开始贴新标语了，标语的字体和旧政权的一模一样，只是换了几个词。写主体站在新标语前的感觉：一种似曾相识的恶心。不要写成'革命被背叛了'的控诉，写一种更深的恐怖——系统不在外面，在脑子里。推翻旧系统的人用的思维方式和旧系统是同一套，所以他们建出来的新系统和旧系统长得一样。墙倒了，但墙的蓝图在每个人的脑子里。",

            tension: "悖论：革命成功的那一刻就是革命死亡的那一刻——因为成功意味着革命者要坐到他们刚推翻的那把椅子上。椅子没变，坐椅子的人变了，但椅子会把新的人捏成旧的形状。场景锚点：主体在新政权的第一次选举中投了票——投票箱的设计和旧政权的一模一样。他把票塞进去的那一刻，手指碰到了箱子里面已经有的厚厚一叠票。他不确定这些票是今天的还是上一个政权留下来的。不要解释，让画面自己说话。"
        }
    },
    {
        id: "enc_class_fall",
        name: "阶层坠落", nameEn: "Class Fall",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "从上流社会跌入底层——不是因为一次具体的事故，而是整个阶层的地板在你脚下缓慢而不可逆地塌陷。",
        defEn: "Falling from upper class to bottom — not from a single accident, but the entire floor beneath your class slowly, irreversibly caving in.",
        core: "A面：从高处坠落可以让你看到一个你从未见过的世界——从上面看到的风景是虚假的。只有坠落之后，你才能看到社会的地基长什么样。/ B面：阶层坠落最残忍的不是贫穷，而是你还记得富裕的味道。你的身体已经到了底层，但你的习惯和期望还留在上面——这种撕裂才是最深的痛苦。关键张力：你到底是'从上面掉下来的人'，还是'终于回到了你本来属于的地方'？ | 实在界入侵(Tuche): 阶层不是你'到达'的地方——它是一种随时可以被撤销的许可证。",
        coreEn: "A-side: Falling from height lets you see a world you never knew — the view from above was false. Only after falling do you see what society's foundation looks like. / B-side: The cruelest part isn't poverty but remembering what wealth tasted like. Your body has reached the bottom, but your habits and expectations remain above — this tear is the deepest pain. Key tension: Are you 'someone who fell from above,' or 'someone who finally returned where you belong'? | Real punctured: Class is not a place you 'reach' — it is a license that can be revoked anytime.",
        reference: "《寄生虫》中看似逆袭实则随时暴露坠落的金家；《了不起的盖茨比》中用尽一切手段爬上顶层却被旧贵族轻蔑击碎的暴发户。",
        referenceEn: "The Kim family seemingly rising but perpetually at risk of exposure and collapse in Parasite; the nouveau riche crushed by old money's contempt in The Great Gatsby.",

        topology: "阶层许可证的撤销：不是从高处坠落——而是发现'高处'是一块浮在半空的地板，它一直需要外力支撑，你只是没往下看过",

        directive: {
            bright: "写主体第一次去以前绝不会去的廉价超市——他站在货架前，发现一包方便面的价格是他以前买一杯咖啡的零头。写一种认知的震动：这个世界一直存在着，只是他的阶层像一堵墙一样把他和这个世界隔开了。不要写成'体验底层生活'的猎奇，写一种更诚实的发现——从上面看到的风景是假的，不是因为它不存在，而是因为它隐藏了支撑它的地基。",

            dark: "写一个身体记忆的细节：主体在廉价旅馆里，习惯性地伸手去调空调温度——然后发现这个房间没有空调。写他身体里那些'富裕时代'的习惯如何一个一个地撞上新的现实：走路习惯性地拦出租车、吃饭习惯性地看菜单右边的价格、和人说话习惯性地用他的前头衔介绍自己。不要写成'我好可怜'的自怜，写一种更深的撕裂——他的身体活在一个已经不存在的世界里。",

            tension: "悖论：阶层坠落最残忍的不是贫穷——而是记忆。主体的味蕾记得鱼子酱的味道，但他的钱包只够买方便面。身体和现实之间的落差不会随着时间缩小——因为记忆不会贬值。场景锚点：主体在路边摊吃面条，旁边坐着一个工人。工人吃得很香，主体吃得很慢。差别不在面条的味道，而在主体的舌头记得另一种味道。不要让主体'适应'——让他在两种味道之间永远悬着。"
        }
    },
    {
        id: "enc_food_crisis",
        name: "断粮", nameEn: "Food Crisis",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "超市货架空空如也，干净水源枯竭。当肠胃开始取代大脑做决定的时候，所有的文明准则都是奢侈品。",
        defEn: "Supermarket shelves empty, clean water sources dry. When the gut starts overriding the brain, all civilized standards are luxuries.",
        core: "A面：饥饿可以是一种残酷的真实——它剥掉了一切虚伪的社交礼仪，让你看到谁才是真正愿意和你分享最后一块面包的人。/ B面：文明外壳剥落后的残酷——为了一口吃的，你会做到什么程度？这个答案会让平时的'你'感到恐惧。关键张力：在饥饿面前，道德是一种选择，还是一种伪装？ | 实在界入侵(Tuche): 人类所有的价值体系，都建立在一个前提之上——'肚子是满的'。",
        coreEn: "A-side: Hunger can be a cruel truth — it strips away all fake social niceties, showing who truly shares the last bread with you. / B-side: The brutality after civilization's shell peels — how far would you go for a bite? The answer would terrify the 'normal you.' Key tension: Before hunger, is morality a choice or a disguise? | Real punctured: All human value systems rest on one premise — 'the stomach is full.'",
        reference: "《饥饿站台》中道德外衣被胃酸融化的囚徒；《星际穿越》里因枯萎病而陷入全球断粮绝望的未来地球。",
        referenceEn: "Prisoners whose moral facade is melted by stomach acid in The Platform; Earth plunged into global starvation despair by a blight in Interstellar.",

        topology: "文明前提的暴露：不是道德崩溃——而是暴露了道德从来都有一个前提条件：饱腹。饥饿不是对道德的考验，而是对道德的取消",

        directive: {
            bright: "写断粮第五天的一个场景——主体把最后一块面包掰成两半，递了一半给旁边的人。写这个动作的物理细节：面包很硬，掰的时候碎屑掉在地上，两个人都看了一眼碎屑，然后假装没看到。不要写成'人间有爱'的煽情，不要给这个动作加任何解释或内心独白——让动作自己承担重量。在食物变得稀缺之后，分享不再是慷慨，而是一种赌注。",

            dark: "写超市被抢空后的画面——不是暴力的抢夺，而是一种更安静的恐怖：货架是空的，地上散落着包装纸，空气里弥漫着一种压低声音的紧张。写主体在空货架前站了很久，然后走向储物柜，发现自己的手在发抖——不是因为害怕，而是因为他在计算。他在计算家里还剩多少食物，每顿减少多少可以多撑几天。不要写成末日恐怖片，写一种更日常的坍缩——计算卡路里的那一刻，道德就被搁置了。",

            tension: "悖论：饥饿不考验道德——它取消道德。道德是一种需要能量来维持的活动，就像思考和说话一样。当能量不够时，身体会按优先级关闭功能——道德在列表的后面，远在消化和心跳的后面。场景锚点：主体在第七天发现邻居藏了食物，他站在邻居的门前，敲门的手停在半空中。他不知道自己是去分享的还是去要求的，而这两种意图之间的距离，在饱腹时是一个选择，在饥饿时是一层窗户纸。不要写他敲了还是没敲。"
        }
    },

    // ===== 新增词条（正面遭遇的实在界穿刺）=====

    {
        id: "enc_promotion",
        name: "意外升职", nameEn: "Sudden Promotion",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "没有预兆，没有准备。你被提拔到一个你从未想过的位置。所有人都在祝贺你，但你知道——你不配。",
        defEn: "No warning, no preparation. You're promoted to a position you never imagined. Everyone congratulates you, but you know — you don't deserve it.",
        core: "A面：升职可以是一次强制性的成长——你被推到一个位置上，被迫发现自己从未被开发的能力。/ B面：冒名顶替者综合征的本体论化——你的社会位置不是通过功绩获得的，而是被非理性地赋予的。关键张力：如果你的成功不是你'挣来'的——那它还算你的吗？ | 实在界入侵(Tuche): 社会位置的赋予不遵循'努力=回报'的逻辑——它暴露了功绩制的虚构性。",
        coreEn: "A-side: Promotion can be forced growth — you're pushed into a position, forced to discover untapped abilities. / B-side: Impostor syndrome ontologized — your social position wasn't earned through merit but irrationally bestowed. Key tension: If your success wasn't 'earned' — is it still yours? | Real punctured: Social position doesn't follow 'effort = reward' logic — it exposes meritocracy's fiction.",
        reference: "《穿普拉达的女王》中突然被选中的安迪；《寄生虫》里伪造简历却意外胜任的基宇。",
        referenceEn: "Andy suddenly chosen in The Devil Wears Prada; Ki-woo forging credentials yet unexpectedly competent in Parasite.",

        topology: "功绩制的穿孔：位置被赋予而非挣得——暴露了'努力=回报'这个等号从来不是数学，而是安慰剂",

        directive: {
            bright: "写主体第一次坐进新办公室的那个早上——椅子比以前的大，窗户比以前的高，但身体不知道该怎么坐。写一个具体的细节：他试了三种坐姿，每一种都觉得不对。然后他做了一件不该做的事——他做了一个决定，一个他的旧职位没有权限做的决定——这个决定是对的。写这一刻的身体反应：心跳加速，但不是恐惧，是一种他不认识的力量。不要写成'天生我材必有用'的励志。",

            dark: "写升职后的第一次团队会议——所有人都在看他，等他发言。主体张嘴说了一句话，全场点头。但他知道他们点头不是因为这句话说得好，而是因为这句话是从这个位置上说出来的。写一个更深的恐慌：如果他说的每一句话都会被认同——他怎么知道自己说的到底是对是错？不要写成'我不配'的自卑，写一种认知层面的迷失——功绩制的幻觉碎了，但碎了之后他发现自己在一个没有地图的地方。",

            tension: "悖论：升职暴露了一个不可说的秘密——大多数位置不是给最有能力的人的，而是给最合适的人的，而'最合适'和'最有能力'之间的关系是随机的。场景锚点：主体在电梯里遇到了一个比他更有能力但没有被提拔的同事。两个人都知道主体坐在那个位置上的原因不是能力差异——但都没有说出来。电梯沉默了十二层。不要用内心独白打破这个沉默。"
        }
    },
    {
        id: "enc_lottery",
        name: "中彩票", nameEn: "Lottery Win",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "一夜暴富。数字在屏幕上跳动，你的银行账户多了八个零。但你很快发现——金钱是一种暴力。",
        defEn: "Overnight wealth. Numbers flashing on screen, eight more zeros in your account. But you quickly discover — money is violence.",
        core: "A面：暴富可以是一次社会实验——它让你看到谁是真正在乎你的人，谁只是在乎你的钱。/ B面：金钱作为一种暴力——它不是解放你，而是把你变成了一个被觊觎的目标。所有关系都被金钱重新定价。关键张力：如果金钱改变了所有人对你的态度——那他们爱的到底是你，还是你的钱？ | 实在界入侵(Tuche): 金钱暴露了关系的交易性本质——你以为的'爱'和'友谊'，原来都是有价格的。",
        coreEn: "A-side: Sudden wealth is a social experiment — it shows who truly cares about you versus your money. / B-side: Money as violence — it doesn't liberate but makes you a target. All relationships repriced by money. Key tension: If money changes everyone's attitude toward you — do they love you or your money? | Real punctured: Money exposes relationships' transactional nature — 'love' and 'friendship' had prices all along.",
        reference: "《小丑》中继承遗产后被所有人觊觎的亚瑟；无数彩票中奖者最终破产甚至被谋杀的真实案例。",
        referenceEn: "Arthur coveted by everyone after inheriting in Joker; countless real lottery winners ending in bankruptcy or murder.",

        topology: "金钱作为X光机：财富的非劳动性获得不是改变了关系——而是给所有关系拍了一张X光片，让骨头和肿瘤同时显影",

        directive: {
            bright: "写中奖后第三天——主体还没告诉任何人，但他做了一个实验：他在朋友群里说自己被裁员了，需要借钱。写回复的速度和内容。然后他又在另一个群里说中了彩票，请大家吃饭。写回复的速度和内容。两组数据放在一起，不需要主体做任何分析。不要写成'人心不古'的感慨，写一种更冷的实验精神——主体不是在感伤，他是在做测量。",

            dark: "写中奖后第一个月——主体的手机从每天三条消息变成了每天三十条。写那些消息的具体内容：失联十年的同学突然'叙旧'，从不打电话的亲戚开始'关心健康'。写主体在深夜关掉手机后的房间——沉默突然变得刺耳，因为他意识到以前的沉默是'没人找我'，现在的沉默是'我不知道谁是真的'。不要写成'有钱人的烦恼'的矫情，写一种社会性的中毒——金钱没有毒害他，金钱毒害了他周围的所有关系。",

            tension: "悖论：金钱没有改变任何人——金钱只是让每个人原本的样子变得可见了。善良的人变得更善良（因为他们终于可以不再嫉妒），贪婪的人变得更贪婪（因为他们闻到了肉味）。金钱是中性的，但它穿透了所有人的伪装。场景锚点：主体请最好的朋友吃饭，买单时朋友坚持AA——主体不知道这是真正的骨气，还是一种精心计算过的'第一步不拿你的钱这样以后拿你的钱时你更难拒绝'的策略。他恨自己在这样想。"
        }
    },
    {
        id: "enc_chosen",
        name: "被选中", nameEn: "The Chosen One",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "在千万人中，你被选中了——可能是奖学金、可能是特殊项目、可能是命运的召唤。但'特殊'是一种债务。",
        defEn: "Among millions, you were chosen — scholarship, special program, destiny's call. But 'special' is a debt.",
        core: "A面：被选中可以是一次身份的确认——你终于被看见了，你的价值被承认了。/ B面：'特殊'作为一种债务——你被赋予了一个你无法拒绝的使命。你失去了做'普通人'的权利。关键张力：如果你的'特殊'不是你选择的——那它是礼物还是诅咒？ | 实在界入侵(Tuche): 被选中意味着被标记——你不再属于你自己，而是属于那个选中你的系统。",
        coreEn: "A-side: Being chosen is identity confirmation — you're finally seen, your value recognized. / B-side: 'Special' as debt — you're given a mission you can't refuse. You lose the right to be 'ordinary.' Key tension: If your 'specialness' wasn't your choice — is it gift or curse? | Real punctured: Being chosen means being marked — you no longer belong to yourself but to the system that chose you.",
        reference: "《哈利·波特》中被预言选中的哈利；《黑客帝国》里被选为救世主的尼奥。",
        referenceEn: "Harry chosen by prophecy in Harry Potter; Neo selected as The One in The Matrix.",

        topology: "特殊性的债务化：被选中不是获得——而是被标记。标记赋予了你一个身份，但这个身份不是你的名字，而是别人给你写的角色",

        directive: {
            bright: "写被选中的那一刻——不是颁奖典礼上的闪光灯，而是主体一个人在通知书前坐了很久的画面。写他的手指触碰到纸上自己名字时的感觉：真实的、有重量的、不可撤销的。不要写成'我终于被承认了'的激动，写一种更安静的感受——在所有的噪音消退之后，主体第一次意识到有人在千万人中看到了他。这个被看到的感觉比'特殊'更重要。",

            dark: "写被选中后的第一个失眠夜——主体躺在床上计算他欠了谁什么。导师的期待、家人的炫耀、陌生人的嫉妒——每一个人都在他身上押了一注，而他不记得自己同意过成为赌桌上的筹码。写一个具体的细节：他想告诉别人'我只是运气好'，但这句话会被理解为虚伪的谦虚。不要写成'天选之人的孤独'的自怜，写一种更结构化的困境——他失去了说'我不想要这个'的权利，因为这句话会伤害所有'想要但没有得到'的人。",

            tension: "悖论：被选中的那一刻，主体既被确认了（你是特殊的），也被取消了（你不再有权利做普通人）。特殊性是一种形状——一旦你被塞进去，你就不能再是别的形状了。场景锚点：主体在选拔赛后和落选的朋友一起走出来。朋友笑着说'恭喜'，但两个人之间多了一种新的距离——不是嫉妒，是一种更安静的东西：他们不再是同一类人了，而这个分类是别人做的。不要让主体试图弥合这个距离。"
        }
    },
    {
        id: "enc_inheritance",
        name: "意外继承", nameEn: "Unexpected Inheritance",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "一个你几乎不认识的亲戚去世了，把全部遗产留给了你。死者的意志比活人的意志更强大。",
        defEn: "A barely-known relative dies, leaving everything to you. The dead's will is stronger than the living's.",
        core: "A面：继承可以是一次意外的解放——你获得了你从未奢望过的资源和自由。/ B面：死者的意志作为一种控制——遗产不是礼物，而是一条从坟墓里伸出来的手。你被死者选中，被迫承担他未完成的欲望。关键张力：如果你的自由是用死者的意志换来的——那你到底是自由了，还是被绑架了？ | 实在界入侵(Tuche): 死者比活人更有权力——他们的意志通过遗嘱、债务、未完成的欲望继续控制活人。",
        coreEn: "A-side: Inheritance is unexpected liberation — resources and freedom you never dared hope for. / B-side: The dead's will as control — inheritance isn't a gift but a hand reaching from the grave. You're chosen by the dead, forced to carry their unfinished desires. Key tension: If your freedom is bought with the dead's will — are you free or kidnapped? | Real punctured: The dead have more power than the living — their will continues controlling through wills, debts, unfinished desires.",
        reference: "《利刃出鞘》中被选中继承遗产的玛塔；《呼啸山庄》里被死者的复仇欲望操控的希斯克利夫。",
        referenceEn: "Marta chosen to inherit in Knives Out; Heathcliff manipulated by the dead's revenge in Wuthering Heights.",

        topology: "死者意志的时间穿刺：遗嘱是一封从坟墓里寄来的信——发信人已经无法被回复，但这封信改写了收信人的整个生活",

        directive: {
            bright: "写主体拿到遗产后做的第一件事——不是买东西，而是去了一个他一直想去但买不起机票的地方。写他到达时的画面：站在一个他只在照片上见过的地方，用一个死人的钱。写这种「用别人的钱实现自己的梦」的复杂感——它不是纯粹的快乐，也不是纯粹的愧疚，而是一种两者之间的第三种东西：我可以做我想做的事了，但这个自由的价格是一个人的死亡。不要写成感恩也不要写成内疚。",

            dark: "写主体在遗物中发现的一件东西——一张字条，上面写着死者对他的期望。可能只是一句话：'替我完成它。'写主体看着这张字条时的感觉：这不是请求，这是命令——因为死者无法被拒绝。你怎么拒绝一个不存在的人？不要写成'我要完成他的遗愿'的感动，写一种更深的束缚——死者的意志像一条绳子，一头系在棺材上，一头系在主体的脖子上。绳子是看不见的，但它比任何活人的命令都更有力。",

            tension: "悖论：遗产给了主体自由——但这个自由是有附加条件的，而附加条件是由一个无法协商的人设定的。活人之间的契约可以修改、取消、违背——但死者的意志是绝对的，因为死者已经不在场了，而不在场的人无法被说服。场景锚点：主体想用遗产做一件死者不会同意的事——他的手悬在合同上方，他知道没有人会阻止他，但他也知道这种'没有人阻止'比任何阻止都更有效。不要让他签字或不签字，让他的手悬着。"
        }
    },
    {
        id: "enc_fame",
        name: "突然成名", nameEn: "Sudden Fame",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "一夜之间，你的脸出现在所有屏幕上。所有人都认识你，但没有人认识你。你变成了一个符号。",
        defEn: "Overnight, your face is on every screen. Everyone knows you, but no one knows you. You become a symbol.",
        core: "A面：成名可以是一次声音的放大——你终于有了被听到的机会，你的话语可以影响更多人。/ B面：人与符号的分裂——你不再是一个人，而是一个被消费的形象。你失去了被误解的权利。关键张力：如果所有人都'认识'你，但没有人真正认识你——那你还存在吗？ | 实在界入侵(Tuche): 成名不是'被看见'，而是'被符号化'——你的真实自我被一个公众形象取代了。",
        coreEn: "A-side: Fame amplifies your voice — finally a chance to be heard, your words can reach more. / B-side: Person-symbol split — you're no longer a person but a consumed image. You lose the right to be misunderstood. Key tension: If everyone 'knows' you but no one truly knows you — do you still exist? | Real punctured: Fame isn't 'being seen' but 'being symbolized' — your real self is replaced by a public image.",
        reference: "《小丑》中因视频爆红而被符号化的亚瑟；《黑镜：急转直下》里因社交媒体一夜成名又一夜崩塌的主角。",
        referenceEn: "Arthur symbolized after viral video in Joker; protagonist rising and falling overnight via social media in Black Mirror: Nosedive.",

        topology: "人与符号的分裂：你没有变成名人——'名人'这个符号附着在了你身上，像一件脱不下来的戏服",

        directive: {
            bright: "写成名后主体第一次在公共场合被认出来的画面——一个陌生人走过来说'我看过你的作品，它帮了我很多'。写主体的反应：不是骄傲，而是一种奇怪的连接感——他在一个人的房间里做的事情，穿过了屏幕，触碰到了一个陌生人的生活。不要写成'粉丝的爱'，写一种更精准的感受——他的声音被放大了，而被放大的声音可以到达他自己走不到的地方。这是力量，但也是责任。",

            dark: "写主体在社交媒体上看到自己的名字——但名字下面的评论描述的是一个他不认识的人。写一个具体的细节：有人在讨论他'真实的想法'，而这些'真实的想法'他从来没有过。写主体试图澄清的过程——他打了一段话，又删掉了。因为他意识到每一次澄清都会变成新一轮的素材。不要写成'我被误解了'的委屈，写一种更存在主义的恐怖——他的公众形象开始独立于他运行了，像一个影子长出了自己的身体，而他变成了影子。",

            tension: "悖论：成名的那一刻，主体分裂成了两个人——一个是他自己，一个是公众认识的那个他。这两个人长得一样但活在不同的规则里。场景锚点：主体在餐厅吃饭，旁边有人在偷拍。他本能地调整了自己的表情和坐姿——然后他意识到，他已经不记得自己在没有人看的时候是怎么坐的了。不要写成'我要做回自己'的决心——因为'自己'这个东西在被观看的过程中已经被改变了，不可逆地。"
        }
    },
    {
        id: "enc_pardon",
        name: "被赦免", nameEn: "Pardoned",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "你被判了刑，但在最后一刻被赦免了。牢门打开，你自由了。但你很快发现——赦免比惩罚更重。",
        defEn: "You were sentenced, but pardoned at the last moment. Cell door opens, you're free. But you quickly discover — pardon weighs more than punishment.",
        core: "A面：赦免可以是一次重生——你获得了第二次机会，可以重新开始。/ B面：赦免作为一种更重的债务——你不是'无罪'，而是'被恩赐'。正义变成了一种随机的恩典，而不是一种权利。关键张力：如果你的自由不是因为你无罪，而是因为有人决定放过你——那你到底是自由了，还是欠了一笔永远还不清的债？ | 实在界入侵(Tuche): 赦免暴露了正义的任意性——你的命运不取决于你做了什么，而是取决于谁决定放过你。",
        coreEn: "A-side: Pardon is rebirth — a second chance to start over. / B-side: Pardon as heavier debt — you're not 'innocent' but 'granted mercy.' Justice becomes random grace, not a right. Key tension: If your freedom isn't because you're innocent but because someone decided to spare you — are you free or indebted forever? | Real punctured: Pardon exposes justice's arbitrariness — your fate depends not on what you did but on who decided to spare you.",
        reference: "《肖申克的救赎》中被赦免却无法适应自由的布鲁克斯；《悲惨世界》里被赦免后背负终生愧疚的冉阿让。",
        referenceEn: "Brooks pardoned but unable to adapt to freedom in Shawshank Redemption; Jean Valjean carrying lifelong guilt after pardon in Les Misérables.",

        topology: "正义的恩典化：赦免不是'无罪'——它把正义从一种权利降级为一种恩赐，而恩赐比惩罚更不可承受",

        directive: {
            bright: "写主体走出牢门的那一刻——阳光刺眼，他用手挡了一下，然后放下手。写他的第一步落在监狱外面的地面上时的脚感——和监狱里的地面没有区别，但这一步的意义完全不同。不要写成'重获新生'的感动，写一种更具体的感觉——身体还不知道自己已经自由了，手臂还保持着不碰围栏的习惯，走路还保持着放风时的节奏。自由要花很长时间才能进入身体。",

            dark: "写赦免令宣读的那一刻——法官念出一串法律术语，最后一个词是'释放'。写主体的反应：不是喜悦，而是困惑——他等了这么久的东西，来的时候这么轻、这么快、这么行政化。一个签名、一个盖章、一声法槌，他就自由了。不要写成'正义迟来'的叙事，写一种更冷的认知——他的自由取决于一个人的签名，而这个人在签字之前喝了咖啡、吃了午餐、处理了其他文件。他的命运是别人的日常行政。",

            tension: "悖论：赦免比惩罚更重——因为惩罚有尽头（刑期结束你就还清了），但赦免是没有尽头的（你永远欠着那份恩情）。场景锚点：主体被释放后，有人问他'你接下来打算做什么？'他发现自己无法回答——不是因为不知道，而是因为任何答案都会被听成'一个被赦免的人打算如何报答社会'。他已经不能纯粹地为自己活了——每一个选择都会被放在'赦免'这个背景下被评估。不要让他说出答案。"
        }
    },
    {
        id: "enc_immigration",
        name: "移民成功", nameEn: "Immigration Success",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "签证批准了，你终于可以去那个'更好的地方'了。但你很快发现——家不是一个地方，而是一种感觉。",
        defEn: "Visa approved, you can finally go to that 'better place.' But you quickly discover — home isn't a place but a feeling.",
        core: "A面：移民可以是一次自我重塑——你获得了在新世界重新定义自己的机会。/ B面：双重流放——你离开了故乡，但你永远无法真正到达新的地方。你成了一个永远的'外来者'。关键张力：如果你在故乡是'想离开的人'，在新地方是'外来者'——那你到底属于哪里？ | 实在界入侵(Tuche): '家'不是一个地理坐标——它是一种你无法携带的归属感。",
        coreEn: "A-side: Immigration is self-reinvention — a chance to redefine yourself in a new world. / B-side: Double exile — you left home but can never truly arrive at the new place. You become a perpetual 'outsider.' Key tension: If you're 'the one who wants to leave' at home and 'the outsider' in the new place — where do you belong? | Real punctured: 'Home' isn't a geographic coordinate — it's a sense of belonging you can't carry.",
        reference: "《布鲁克林》中在两个世界之间撕裂的艾利斯；《寄生虫》里即使住进豪宅也无法摆脱底层身份的金家。",
        referenceEn: "Eilis torn between two worlds in Brooklyn; the Kim family unable to shed their underclass identity even in a mansion in Parasite.",

        topology: "归属感的不可携带性：地理位置移动了，但'家'没有跟着走——暴露了'家'从来不是一个地方，而是一种不可复制的时空关系",

        directive: {
            bright: "写主体在新城市的第一个早晨——打开窗户，看到的是一条他不认识的街道。写空气的味道、光线的角度、远处的语言——全部是陌生的。但写一种奇怪的轻盈：没有人认识他，没有人对他有期待，他的过去在这里不存在。不要写成'新的开始'的励志，写一种更精确的感受——他不是重生了，他是空白了。空白既是可能性（可以在上面写任何东西），也是虚无（上面什么都没有）。",

            dark: "写主体回老家探亲的场景——下了飞机，走出机场，一切都是熟悉的：路、树、方言。但写一种更深的陌生——他用新城市的速度走在老家的路上，他用新语言思考老家的事情。他发现自己在老家也变成了外人，但不是因为老家变了，而是因为他变了。不要写成'乡愁'的感伤，写一种更残忍的发现——他以为他离开的是一个地方，但他离开的是一个版本的自己，而那个版本已经不存在了。",

            tension: "悖论：移民成功后，主体拥有了两个家——但两个家的总和不是两倍的归属感，而是零。因为'家'不是一个可以叠加的概念——你要么完全属于一个地方，要么不属于任何地方，没有中间状态。场景锚点：主体在新城市和朋友聊天时说'我们那边...'——然后停住了，因为他不知道'我们那边'指的是哪边。是他出生的地方，还是他现在住的地方？两个都不完全准确。不要让他选。"
        }
    },
    {
        id: "enc_exam_pass",
        name: "考试通过", nameEn: "Exam Passed",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "你通过了那个关键考试——高考、公考、或者任何一个筛选机制。但你很快意识到——你的成功建立在别人的失败之上。",
        defEn: "You passed that crucial exam — college entrance, civil service, or any filtering mechanism. But you quickly realize — your success is built on others' failure.",
        core: "A面：通过考试可以是一次能力的确认——你证明了自己，获得了进入下一个阶段的资格。/ B面：零和游戏的暴力——你的成功意味着别人的失败。筛选机制不是发现人才，而是制造等级。关键张力：如果你的成功必须以别人的失败为代价——那你到底是赢家还是共犯？ | 实在界入侵(Tuche): 所谓'公平竞争'的筛选机制，本质上是一种暴力——它把人分成'够格'和'不够格'。",
        coreEn: "A-side: Passing is ability confirmation — you proved yourself, earned entry to the next stage. / B-side: Zero-sum violence — your success means others' failure. Filtering doesn't discover talent but manufactures hierarchy. Key tension: If your success requires others' failure — are you a winner or an accomplice? | Real punctured: The 'fair competition' filter is essentially violence — it divides people into 'qualified' and 'unqualified.'",
        reference: "《寄生虫》中通过伪造简历进入上流社会的基宇；《千钧一发》里通过基因筛选的'优等人'。",
        referenceEn: "Ki-woo entering upper society via forged credentials in Parasite; the 'valid' humans passing genetic screening in Gattaca.",

        topology: "筛选机器的共谋化：通过筛选不是'证明了自己'——而是成为了筛选机器的合法产品。你的成功是机器的广告",

        directive: {
            bright: "写主体看到自己名字在榜单上的那一秒——一种纯粹的、短暂的、无条件的快乐。写这种快乐的物理表现：一声低低的'啊'，或者一只攥紧的拳头。然后写这种快乐的保质期——大约三十秒。之后主体开始想其他的事情。不要延长这三十秒，也不要跳过它——三十秒的纯粹快乐是真实的，值得被写下来。之后的复杂感受也是真实的。两者不矛盾。",

            dark: "写主体在庆功宴上的场景——所有人都在笑，都在举杯，但主体的眼睛一直在找一个人：那个没有通过的朋友。他没来。写主体给那个朋友发消息的犹豫——打了又删、删了又打。因为每一种措辞都像是在炫耀：'我在你失败的地方成功了'。不要写成'幸存者内疚'的标签化描述，写一种更具体的困境——他的快乐和朋友的痛苦使用了同一个事件作为原材料。",

            tension: "悖论：筛选机制的残酷不在于它淘汰了谁——而在于它让通过者成为机制的共谋。你的成功就是对这个系统的背书：因为你通过了，所以这个系统'有效'。场景锚点：主体在面试中被问到'你是怎么成功的？'他说了一套关于努力和坚持的叙事——说完之后他意识到，他刚才做的事情就是替筛选机器做广告。但他不能说'我只是运气好'——因为这会侮辱所有没通过的人的痛苦。他被卡在两种不诚实之间。"
        }
    },
    {
        id: "enc_forgiven",
        name: "被原谅", nameEn: "Forgiven",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "你伤害了一个人，但他原谅了你。你以为会感到解脱，但你很快发现——原谅比惩罚更重。",
        defEn: "You hurt someone, but they forgave you. You thought you'd feel relief, but you quickly discover — forgiveness weighs more than punishment.",
        core: "A面：被原谅可以是一次关系的修复——你获得了重新开始的机会，可以弥补过去的错误。/ B面：原谅作为一种更重的债务——惩罚是可以还清的，但原谅是永远还不清的。你欠下的不是一笔债，而是一个无法偿还的恩情。关键张力：如果对方原谅了你，但你无法原谅自己——那你到底是自由了，还是被困住了？ | 实在界入侵(Tuche): 原谅不是解脱，而是一种更深的束缚——它让你永远背负着'我不配被原谅'的愧疚。",
        coreEn: "A-side: Being forgiven is relationship repair — a chance to start over, to make amends. / B-side: Forgiveness as heavier debt — punishment can be repaid, but forgiveness never can. You owe not a debt but an unpayable grace. Key tension: If they forgave you but you can't forgive yourself — are you free or trapped? | Real punctured: Forgiveness isn't liberation but deeper bondage — it leaves you forever carrying 'I don't deserve forgiveness.'",
        reference: "《赎罪》中背负终生愧疚的布里奥妮；《悲惨世界》里被主教原谅后无法原谅自己的冉阿让。",
        referenceEn: "Briony carrying lifelong guilt in Atonement; Jean Valjean unable to forgive himself after the bishop's forgiveness in Les Misérables.",

        topology: "赎罪的不可能性：原谅不是'还清了'——而是暴露了'还清'这个概念在人际关系中不存在。惩罚有刑期，原谅没有",

        directive: {
            bright: "写原谅发生的那一刻——不是戏剧化的拥抱，而是一个很小的瞬间：对方在说话的时候无意识地碰了一下主体的手臂。这个动作说明身体已经原谅了，即使嘴上还在说别的。写主体感受到那只手的重量——很轻，但它承载的东西很重。不要写成'我们和好了'的大团圆，写一种更微妙的变化——两个人之间的空气不同了，但不同在什么地方，双方都说不清楚。",

            dark: "写原谅之后的第一次争吵——一次完全无关的日常口角，但主体在对方的语气里听到了一个幽灵：'你还记得你上次做了什么吗？'这句话没有被说出来，但它在那里。写一种更深的困境：原谅不是一个事件，而是一个过程，这个过程没有终点。不要写成'你说原谅我了但其实没有'的怨恨，写一种更诚实的认知——原谅可能是真的，但'那件事'会像一颗放射性元素一样，永远在两人之间发出微弱的辐射。",

            tension: "悖论：惩罚有刑期——你坐完牢就还清了。但原谅没有刑期——你被原谅了，但'被原谅'这个状态是永久的。你永远是'那个被原谅了的人'。场景锚点：主体和那个原谅他的人一起吃饭，两个人都在笑，气氛很好。但主体注意到自己在笑的时候有一种多余的努力——他不是在享受这顿饭，他是在用这顿饭来证明原谅是成功的。他在为原谅工作。吃饭变成了一种债务偿还的形式。不要让主体意识到这一点——让读者意识到。"
        }
    },
    {
        id: "enc_seen",
        name: "被看见", nameEn: "Being Seen",
        group: "A. 秩序的穿刺", groupEn: "Order Punctured",
        def: "有人真正看见了你——不是你的外表，不是你的成就，而是你。但你很快发现——被看见是一种失去。",
        defEn: "Someone truly sees you — not your appearance, not your achievements, but you. But you quickly discover — being seen is a loss.",
        core: "A面：被看见可以是一次存在的确认——你终于不再孤独，有人理解你了。/ B面：被看见作为一种失去——你失去了'独特性'的庇护所。如果有人能看穿你，那你就不再是一个谜了。关键张力：如果你渴望被理解，但又害怕被看穿——那你到底想要什么？ | 实在界入侵(Tuche): 被看见意味着失去神秘性——你不再是一个'可能是任何人'的潜能，而是一个'就是这样'的确定。",
        coreEn: "A-side: Being seen is existential confirmation — you're finally not alone, someone understands you. / B-side: Being seen as loss — you lose the refuge of 'uniqueness.' If someone can see through you, you're no longer a mystery. Key tension: If you crave understanding but fear being seen through — what do you actually want? | Real punctured: Being seen means losing mystery — you're no longer a potential 'could be anyone' but a definite 'this is it.'",
        reference: "《心灵捕手》中被心理医生看穿后崩溃的威尔；《黑天鹅》里被导演看穿后失去控制的妮娜。",
        referenceEn: "Will breaking down after being seen through by the therapist in Good Will Hunting; Nina losing control after being seen through by the director in Black Swan.",

        topology: "神秘性的坍缩：被看见不是'终于有人懂我'——而是波函数的坍缩：在被观测之前你可以是任何人，被观测之后你只能是一个确定的人",

        directive: {
            bright: "写那个瞬间——不是一段深刻的对话，而是一个很小的时刻：对方看着主体笑了一下，但不是因为主体说了什么有趣的话——而是因为主体在做一件他自己都没有注意到的事情（也许是一种习惯性的小动作）。写主体意识到'他看到了我连自己都没看到的部分'时的感觉。不要写成'灵魂伴侣'的浪漫，写一种更脆弱的东西——被看见的第一反应不是温暖，是暴露。温暖是第二反应，它要过几秒钟才会到。",

            dark: "写被看见之后的退缩——主体开始回避对方的眼神。不是因为不喜欢对方，而是因为太喜欢了——喜欢到害怕。写一个具体的行为：主体在对方面前开始刻意表现得更有趣、更聪明、更有魅力——不是为了吸引对方（对方已经看到真实的他了），而是为了用这层新的表演覆盖被看到的那个真实的自己。不要写成'恐惧亲密'的心理学标签，写一种更原始的反应——赤裸是不可承受的，不是因为丑陋，而是因为赤裸之后就没有更里面的东西了。",

            tension: "悖论：被看见是主体最渴望也最恐惧的事情——但渴望和恐惧的不是两个不同的东西，是同一个东西。被看见=不再孤独=失去神秘性=失去'我可能是更好的人'的可能性。在被看到之前，主体可以是任何人——包括一个比真实的他更好的人。被看到之后，他只能是他。场景锚点：两个人在深夜聊天，主体说出了一个他从来没有对任何人说过的秘密。说完之后的沉默——不是尴尬的沉默，而是一种不可逆的沉默。这个秘密已经在两个人之间了，收不回来了。不要写对方的反应，写沉默本身。"
        }
    }
];
