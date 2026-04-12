import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 超我献祭 (Superego Sacrifice) — 20 Items
    // 丧失维度：你的道德底线被踩碎——你变成了你曾发誓永远不会成为的那种人。
    // 核心感受："我怎么变成了这样的人？"
    // 光谱：底线突破(1-5) → 背叛/出卖(6-10) → 共谋/沉默(11-15) → 道德异化(16-20)
    // ============================================================

    // ---- 底线突破：你亲手踩碎了自己画的那条线 ----

    {
        id: "stake_kill",
        name: "亲手夺命", nameEn: "Taking a Life",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "跨过'不可杀人'这条最古老的底线——且发现跨过之后自己还能继续活着。",
        defEn: "Crossing the oldest line — 'thou shalt not kill' — and discovering you can keep living afterward.",
        core: "A面：杀人有时是唯一能阻止更大杀戮的手段。/ B面：但真正的代价不是法律后果——是你发现自己'能做到'。曾经不可想象的事变成了你的履历。关键张力：如果杀了一个人能救一百个——你变成了英雄还是凶手？ | 代价回路 (Castration): '不可杀人'底线被物理性踩碎——且无法复原。",
        coreEn: "A-side: Killing is sometimes the only means to prevent greater slaughter. / B-side: But the real cost isn't legal — it's discovering you 'could do it.' The unimaginable becomes your résumé. Key tension: Kill one to save a hundred — hero or murderer? | Castration Circuit: 'Thou shalt not kill' physically shattered — irreversible.",
        reference: "《老无所依》硬币杀手面前每个人都被迫面对'我能不能杀人'的极限拷问；《寄生虫》爆发一刻亲手夺命的金基泽。",
        referenceEn: "Everyone facing the ultimate question 'could I kill' before the coin-toss killer in No Country for Old Men; Ki-taek taking a life in the eruption moment in Parasite."
    },
    {
        id: "stake_torture",
        name: "施加痛苦", nameEn: "Inflicting Pain",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "为了'正确的目的'亲手对另一个人实施你曾经最鄙视的暴行。",
        defEn: "For the 'right purpose,' personally inflicting on another the very atrocity you once most despised.",
        core: "A面：有时只有暴力能从暴力手中救回受害者——干净的手不能从泥里拉人。/ B面：但你在施加痛苦时听到了自己心里某个东西断裂的声音。你曾经是受害者的同盟，现在你和施暴者使用着同一套工具。关键张力：用敌人的方法打败敌人——你赢了，但你还是你吗？ | 代价回路 (Castration): 道德洁癖的自我爆破。",
        coreEn: "A-side: Sometimes only violence rescues victims from violence — clean hands can't pull people from mud. / B-side: But inflicting pain, you hear something inside you snap. You were once the victim's ally; now you use the abuser's toolkit. Key tension: Defeating the enemy with the enemy's methods — you won, but are you still you? | Castration Circuit: Moral purity self-detonates.",
        reference: "《猎杀本·拉登》为情报亲手执行水刑的CIA探员；《无间道》为卧底任务亲手伤害无辜的陈永仁。",
        referenceEn: "The CIA operative personally waterboarding for intel in Zero Dark Thirty; Chan Wing-yan harming innocents for his undercover mission in Infernal Affairs."
    },
    {
        id: "stake_child_harm",
        name: "伤害无辜", nameEn: "Harming the Innocent",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你的行动直接导致了一个绝对无辜的人的苦难——尤其是孩子、老人或者信任你的人。",
        defEn: "Your actions directly caused suffering to an absolutely innocent person — especially a child, elder, or someone who trusted you.",
        core: "A面：有时保护多数人必须牺牲少数无辜——这是所有决策者的终极困境。/ B面：但被牺牲的无辜者不是'统计数字'——是一个有名字的、曾经对你微笑的人。你的'正确决策'在他的眼泪面前毫无说服力。关键张力：如果你的'正确'建立在某个无辜者的废墟上——它还正确吗？ | 代价回路 (Castration): 守护者身份的内爆——你成了你发誓保护的人的加害者。",
        coreEn: "A-side: Protecting the majority sometimes demands sacrificing innocent few — every decision-maker's ultimate dilemma. / B-side: But the sacrificed innocent isn't 'statistics' — it's a named person who once smiled at you. Your 'correct decision' is unconvincing before their tears. Key tension: If your 'right' is built on an innocent's ruins — is it still right? | Castration Circuit: The protector identity implodes — you become the perpetrator of those you swore to protect.",
        reference: "《索菲的选择》被迫在两个孩子之间选择谁活的母亲；《烈日灼人》无意间导致忠诚下属被处决的苏联军官。",
        referenceEn: "The mother forced to choose which of her children lives in Sophie's Choice; the Soviet officer inadvertently causing his loyal subordinate's execution in Burnt by the Sun."
    },
    {
        id: "stake_oath_break",
        name: "誓言背弃", nameEn: "Oath Breaking",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "用全部灵魂起过的誓言——在极端压力下被你自己亲手撕碎。",
        defEn: "An oath sworn with your entire soul — torn apart by your own hands under extreme pressure.",
        core: "A面：打破一个不再合理的誓言有时恰恰是道德勇气——盲目守约可以和盲目残忍一样有害。/ B面：但你不是在'理性评估后取消'——你是在恐惧中食言。你知道那个对你说'我相信你'的人此刻正在某处等你兑现。关键张力：一个在绝境中背弃誓言的人——是懦夫还是幸存者？ | 代价回路 (Castration): 人格信用的核心破产。",
        coreEn: "A-side: Breaking an oath no longer reasonable can be moral courage — blind loyalty can be as harmful as blind cruelty. / B-side: But you didn't 'rationally cancel' — you broke your word in fear. The person who said 'I believe you' is waiting somewhere right now. Key tension: One who breaks their oath under extremity — coward or survivor? | Castration Circuit: Core bankruptcy of personal credit.",
        reference: "《冰与火之歌》背弃守夜人誓言的琼恩·雪诺；《教父》在婴儿洗礼时同步下令血洗五大家族的迈克尔。",
        referenceEn: "Jon Snow breaking his Night's Watch oath in A Song of Ice and Fire; Michael ordering the massacre of five families during his child's baptism in The Godfather."
    },
    {
        id: "stake_mercy_kill",
        name: "慈悲杀戮", nameEn: "Mercy Kill",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "出于爱，亲手终结你最爱的人的痛苦——且知道世界不会理解这是'爱'。",
        defEn: "Out of love, personally ending the suffering of the one you love most — knowing the world will never understand this as 'love.'",
        core: "A面：如果放手就是爱，慈悲杀戮就是爱的最高形态——你用自己的灵魂换取了对方的解脱。/ B面：但你活下来了。你要带着'我亲手杀了我最爱的人'这个事实度过余生。没有人会替你承担这个重量。关键张力：如果你的爱只能以这种方式表达——你还敢称它为'爱'吗？ | 代价回路 (Castration): 爱与杀之间的不可能等式。",
        coreEn: "A-side: If letting go is love, mercy killing is love's highest form — you trade your soul for their release. / B-side: But you survived. You'll live the rest of your life with 'I killed the one I loved most.' No one will share this weight. Key tension: If your love can only be expressed this way — do you still dare call it 'love'? | Castration Circuit: The impossible equation between love and killing.",
        reference: "《人工智能》母亲将机器人儿子抛弃在森林中的残忍慈悲；《百万美元宝贝》教练亲手拔掉爱徒呼吸管的至暗抉择。",
        referenceEn: "The mother's cruel mercy abandoning her robot son in the forest in A.I.; the trainer pulling the plug on his beloved fighter in Million Dollar Baby."
    },

    // ---- 背叛/出卖：你将信任你的人交给了敌人 ----

    {
        id: "stake_betray_ally",
        name: "出卖同伴", nameEn: "Betraying an Ally",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "在极端压力下将信任你的人的秘密、位置或生命交给了对方。",
        defEn: "Under extreme pressure, handing over the secret, location, or life of someone who trusted you to the other side.",
        core: "A面：出卖有时是唯一能让更多人活下来的选择——一个人的信任 vs. 十个人的性命。/ B面：但被你出卖的人在被带走时回头看了你一眼。那个眼神会住在你的余生里。关键张力：你出卖他是因为别无选择——还是因为你害怕轮到自己？ | 代价回路 (Castration): 信义结构的不可逆爆破。",
        coreEn: "A-side: Betrayal is sometimes the only path to more survivors — one person's trust vs. ten lives. / B-side: But the person you betrayed looked back at you as they were taken away. That glance will live in you forever. Key tension: Did you betray them because there was no choice — or because you feared being next? | Castration Circuit: The trust structure irreversibly detonates.",
        reference: "《无间道》卧底与线人之间不断互相出卖的死循环；《1984》温斯顿在101号房间出卖茱莉亚。",
        referenceEn: "The endless cycle of betrayal between moles and informants in Infernal Affairs; Winston betraying Julia in Room 101 in 1984."
    },
    {
        id: "stake_sell_soul",
        name: "灵魂交易", nameEn: "Selling the Soul",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "用你最珍视的道德信条去交换一样你迫切需要的东西——且交易不可撤销。",
        defEn: "Trading your most cherished moral code for something you desperately need — and the deal is irreversible.",
        core: "A面：灵魂交易至少意味着你的灵魂有人愿意出价——你的道德尊严被当作了具有交换价值的东西。/ B面：但交易完成后你会发现：你得到了你想要的，但你已经不是那个'想要它'的人了。欲望在交易中被实现的同时也被取消了。关键张力：如果得到之后你已经不是原来的你——那是谁在享用这份收获？ | 代价回路 (Castration): 浮士德契约——得到了一切，失去了'值得拥有一切'的资格。",
        coreEn: "A-side: A soul trade at least means someone is willing to bid on your soul — your moral dignity is treated as having exchange value. / B-side: But after the deal you discover: you got what you wanted, yet you're no longer the person who 'wanted' it. Desire is fulfilled and cancelled simultaneously. Key tension: If you're no longer yourself after acquiring — who's enjoying the gain? | Castration Circuit: The Faustian pact — gained everything, lost the qualification to deserve it.",
        reference: "《浮士德》用灵魂换取知识与青春的学者；《教父》为保护家族逐步用灵魂换取权力的迈克尔。",
        referenceEn: "The scholar trading his soul for knowledge and youth in Faust; Michael progressively exchanging his soul for power to protect his family in The Godfather."
    },
    {
        id: "stake_abandon",
        name: "见死不救", nameEn: "Abandonment",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你有能力伸出手——但你选择了不伸。你让一个本可以被你救活的人沉了下去。",
        defEn: "You had the ability to reach out — but chose not to. You let someone who could have been saved sink.",
        core: "A面：有时放弃一个人是为了不让更多人陪葬——残忍的作战优先级不是冷血，是数学。/ B面：但你'选择不救'的那一刻，你和那些你鄙视的冷漠旁观者之间的界线消失了。你曾经以为自己'不一样'——现在你知道了，你一样。关键张力：你没有害他——但你也没救他。不作为和作恶之间的距离有多远？ | 代价回路 (Castration): '我和他们不一样'这个信念的崩塌。",
        coreEn: "A-side: Sometimes abandoning one prevents more from drowning — cruel triage isn't cold-blooded, it's mathematics. / B-side: But the moment you 'chose not to save,' the line between you and the cold bystanders you despised vanished. You thought you were 'different' — now you know you're the same. Key tension: You didn't harm them — but you didn't save them. How far is inaction from evil? | Castration Circuit: The belief 'I'm different from them' collapses.",
        reference: "《辛德勒的名单》结尾痛哭'我还可以多救几个'的辛德勒；《盲山》围观拐卖却选择沉默的全村村民。",
        referenceEn: "Schindler weeping 'I could have saved more' at the end of Schindler's List; the entire village watching abduction in silence in Blind Mountain."
    },
    {
        id: "stake_deceive_loved",
        name: "欺骗至亲", nameEn: "Deceiving Loved Ones",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "对你最信任你的人编织一个精密的谎言——且必须每天维护这个谎言直到它变成你的第二层皮肤。",
        defEn: "Weaving an elaborate lie for the person who trusts you most — maintaining it daily until it becomes your second skin.",
        core: "A面：有些谎言是保护——对方知道真相只会更痛苦。善意的谎言是你替对方承受了真实的重量。/ B面：但你每次看着对方信任的眼神时，你知道那份信任建立在你的谎言之上。你不是在保护他——你是在用谎言控制他对世界的认知。关键张力：善意的欺骗和恶意的操控之间的界限在哪——由你来画吗？ | 代价回路 (Castration): 亲密关系的地基被你亲手掺了假。",
        coreEn: "A-side: Some lies are protection — the truth would only hurt more. A kind lie means you bear reality's weight for them. / B-side: But every time you see their trusting eyes, you know that trust is built on your lie. You're not protecting them — you're controlling their perception of the world with deception. Key tension: Where's the line between kind deception and malicious manipulation — and do you get to draw it? | Castration Circuit: You personally adulterated your intimate relationship's foundation.",
        reference: "《美丽人生》在集中营中用谎言为儿子搭建游戏世界的父亲；《楚门的世界》全部亲友联手对楚门编织的人生谎言。",
        referenceEn: "The father building a game-world of lies for his son in a concentration camp in Life Is Beautiful; all friends and family conspiring in a life-lie for Truman in The Truman Show."
    },
    {
        id: "stake_use_love",
        name: "利用情感", nameEn: "Weaponizing Love",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "把别人对你的真心爱慕变成你达到目的的工具——爱被你改装成了武器。",
        defEn: "Turning someone's genuine love for you into a tool for your ends — love retrofitted into a weapon.",
        core: "A面：利用感情有时是弱者唯一的杠杆——当你没有权力、没有金钱、没有暴力时，爱是最后一张牌。/ B面：但你在打出这张牌的时候，你同时污染了'爱'这个概念本身。从此以后，你不确定自己是否还有能力真心爱一个人——因为你已经知道爱可以被工具化。关键张力：一个曾经把爱当武器用的人——还有资格渴望被爱吗？ | 代价回路 (Castration): 爱的纯粹性被永久污染。",
        coreEn: "A-side: Weaponizing feelings is sometimes the weak's only leverage — without power, money, or violence, love is the last card. / B-side: But playing this card pollutes the concept of 'love' itself. From then on, you're unsure if you can ever genuinely love — because you know love can be instrumentalized. Key tension: Can someone who once weaponized love still deserve to be loved? | Castration Circuit: Love's purity is permanently contaminated.",
        reference: "《危险关系》将纯真少女的爱情当作赌注的女侯爵；《色｜戒》在色诱任务中假戏真做的王佳芝。",
        referenceEn: "The Marquise gambling with a naive girl's love in Dangerous Liaisons; Wang Jiazhi losing herself between seduction mission and real emotion in Lust, Caution."
    },

    // ---- 共谋/沉默：你成了系统暴力的一部分 ----

    {
        id: "stake_complicity",
        name: "沉默共谋", nameEn: "Silent Complicity",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你看到了不义——但你选择闭嘴。你的沉默让暴行得以继续。",
        defEn: "You saw injustice — but chose to shut your mouth. Your silence allowed atrocity to continue.",
        core: "A面：沉默有时是保护自己和家人唯一的选择——在恐怖面前要求每个人都做英雄是道德绑架。/ B面：但你的沉默不是'中立'——它是一票投给了施害者。关键张力：不是每个人都有义务做英雄——但如果所有人都这么想，英雄就永远不会出现。 | 代价回路 (Castration): '我至少没做坏事'这块遮羞布被撕掉。",
        coreEn: "A-side: Silence is sometimes the only way to protect yourself and family — demanding heroism from everyone under terror is moral blackmail. / B-side: But your silence isn't 'neutrality' — it's a vote for the perpetrator. Key tension: Not everyone must be a hero — but if everyone thinks so, no hero ever appears. | Castration Circuit: The fig leaf of 'at least I didn't do bad' is torn away.",
        reference: "《朗读者》战后审判中'我只是服从命令'的女看守们；《浪潮》加入法西斯实验后选择沉默的学生。",
        referenceEn: "Female guards claiming 'I only followed orders' in postwar trial in The Reader; students choosing silence after joining the fascism experiment in The Wave."
    },
    {
        id: "stake_enforce",
        name: "执行恶令", nameEn: "Enforcing Evil Orders",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你知道命令是错的——但你执行了它。你的手是干净的，因为脏活是你替别人干的。",
        defEn: "You knew the order was wrong — but you executed it. Your hands are clean because the dirty work was done on another's behalf.",
        core: "A面：一个不执行命令的体系会立刻瓦解——服从是文明运转的螺丝钉。/ B面：但当命令本身是罪行时，'我只是执行者'恰恰是罪行的运转条件。阿伦特的'平庸之恶'——恶的真正面孔不是恶魔，是文员。关键张力：你违抗就会被替换——但'可替换'不能免除你的责任。 | 代价回路 (Castration): 道德能动性被让渡给系统——你自愿变成了齿轮。",
        coreEn: "A-side: A system that doesn't obey orders collapses immediately — obedience is civilization's bolt. / B-side: But when the order itself is criminal, 'I'm just the executor' is precisely the crime's operating condition. Arendt's 'banality of evil' — evil's true face isn't the demon, it's the clerk. Key tension: Disobey and you'll be replaced — but 'replaceability' doesn't absolve responsibility. | Castration Circuit: Moral agency surrendered to the system — you voluntarily became a gear.",
        reference: "《艾希曼在耶路撒冷》那个声称自己只是'运输调度员'的大屠杀执行者；《窃听风暴》执行监听任务的史塔西特工。",
        referenceEn: "The Holocaust executor who claimed to be merely a 'transport coordinator' in Eichmann in Jerusalem; the Stasi agent carrying out surveillance missions in The Lives of Others."
    },
    {
        id: "stake_profit_from_evil",
        name: "从恶获利", nameEn: "Profiting from Evil",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你没有制造苦难——但你从别人的苦难中获取了好处，且你选择继续获取。",
        defEn: "You didn't create suffering — but you profited from others' suffering, and you chose to keep profiting.",
        core: "A面：不从系统中获利意味着你和你的家人也会变成受害者——你只是在做每个人都在做的事。/ B面：但'每个人都在做'不是辩护——它恰恰是系统稳定运转的核心秘密。你的舒适建立在某个你看不到的人的痛苦之上。关键张力：如果退出这个系统意味着你的孩子挨饿——你有权利做那个道德上'干净'的人吗？ | 代价回路 (Castration): 道德洁净的不可能性——手早就脏了。",
        coreEn: "A-side: Not profiting from the system means you and your family also become victims — you're doing what everyone does. / B-side: But 'everyone does it' isn't a defense — it's precisely the system's core secret for stable operation. Your comfort is built on an unseen person's pain. Key tension: If exiting the system means your child starves — do you have the right to be morally 'clean'? | Castration Circuit: The impossibility of moral purity — your hands were already dirty.",
        reference: "《辛德勒的名单》用犹太人廉价劳动力投标军工合同的辛德勒（转变前）；《血钻》从战区钻石贸易中获利的每一个中间商。",
        referenceEn: "Schindler bidding on military contracts with cheap Jewish labor (before his transformation) in Schindler's List; every middleman profiting from conflict diamond trade in Blood Diamond."
    },
    {
        id: "stake_become_oppressor",
        name: "变成压迫者", nameEn: "Becoming the Oppressor",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "为了推翻旧的压迫体系，你建立了一个新的——然后发现你坐在了和旧暴君同一把椅子上。",
        defEn: "To overthrow the old oppression, you built a new one — then found yourself sitting in the old tyrant's chair.",
        core: "A面：革命需要权力集中——没有铁腕就没有变革。历史上所有成功的解放运动都需要一个'暂时的'独裁者。/ B面：但'暂时'从来不是暂时的。权力改变了你——不是突然地，而是一点一点地。直到有一天你发现'我做的和他做的有什么区别'。关键张力：你推翻了暴君——但你还能推翻你自己吗？ | 代价回路 (Castration): 革命的自噬——屠龙者反坐龙椅。",
        coreEn: "A-side: Revolution requires power concentration — no iron fist, no change. Every successful liberation movement needed a 'temporary' dictator. / B-side: But 'temporary' is never temporary. Power changes you — not suddenly, but inch by inch. Until one day: 'what I'm doing and what he did — what's the difference?' Key tension: You overthrew the tyrant — but can you overthrow yourself? | Castration Circuit: Revolution's self-consumption — the dragon-slayer sits on the dragon's throne.",
        reference: "《动物庄园》推翻人类统治后自己变成人类的那些猪；《教父2》为保护家族反而摧毁了家族的迈克尔。",
        referenceEn: "The pigs who overthrow human rule then become human in Animal Farm; Michael destroying the family he sought to protect in The Godfather Part II."
    },
    {
        id: "stake_sacrifice_other",
        name: "牺牲他人", nameEn: "Sacrificing Others",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你做出了'正确的决定'——但那个决定的代价不是你付的，是一个没有被问过意见的人替你付的。",
        defEn: "You made the 'right decision' — but the cost wasn't paid by you; it was paid by someone who was never consulted.",
        core: "A面：领导者的职责就是做别人做不了的决定——如果你不决定谁牺牲，所有人都会牺牲。/ B面：但你活着，而他死了。你做了'正确的决定'——可你永远无法确定如果你和他互换位置，你还会做出同样的'正确决定'。关键张力：如果'正确'的代价总是由别人来付——那是正义还是特权？ | 代价回路 (Castration): 决策者的幸存者愧疚——你的正确建立在别人的坟墓上。",
        coreEn: "A-side: A leader's duty is making decisions others can't — if you don't decide who sacrifices, everyone does. / B-side: But you survived and they didn't. You made the 'right call' — yet you can never be sure if the positions were reversed, you'd make the same 'right call.' Key tension: If the cost of 'right' is always paid by others — is it justice or privilege? | Castration Circuit: The decision-maker's survivor guilt — your rightness is built on others' graves.",
        reference: "《拯救大兵瑞恩》八个人牺牲去救一个人的'正确命令'；《三体》面壁人以全人类为筹码的极端博弈。",
        referenceEn: "The 'correct order' sacrificing eight to save one in Saving Private Ryan; the Wallfacer's extreme gambit using all humanity as chips in The Three-Body Problem."
    },

    // ---- 道德异化：你变成了你曾经最鄙视的那种人 ----

    {
        id: "stake_moral_numb",
        name: "道德麻木", nameEn: "Moral Numbness",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "不再对不义感到愤怒，不再对痛苦感到同情——你的道德神经被磨断了。",
        defEn: "No longer angered by injustice, no longer moved by suffering — your moral nerves have been ground away.",
        core: "A面：麻木是过度暴露的自我保护——你的大脑通过关闭情感来阻止崩溃。/ B面：但保护和退化之间只有一线之隔。你已经分不清自己是'选择不感受'还是'丧失了感受的能力'。关键张力：如果你对一切都无所谓了——你是变强了还是坏掉了？ | 代价回路 (Castration): 道德感知的钝化——你的良心不是被杀死了，是被磨成了茧。",
        coreEn: "A-side: Numbness is overexposure's self-protection — your brain shuts down emotion to prevent collapse. / B-side: But protection and deterioration are one line apart. You can't tell if you're 'choosing not to feel' or 'lost the ability to feel.' Key tension: If you're indifferent to everything — are you stronger, or broken? | Castration Circuit: Moral perception blunted — your conscience wasn't killed, it calloused.",
        reference: "《猎鹿人》从越战归来后对一切丧失情感反应的尼克；《风之谷》被战争磨成杀戮机器的士兵们。",
        referenceEn: "Nick who loses all emotional response after returning from Vietnam in The Deer Hunter; soldiers ground into killing machines by war in Nausicaä."
    },
    {
        id: "stake_enjoy_power",
        name: "享受权力", nameEn: "Enjoying Power",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "比变成压迫者更可怕的一步——你发现你享受它。你喜欢别人怕你。",
        defEn: "A step worse than becoming the oppressor — you discover you enjoy it. You like being feared.",
        core: "A面：权力本身不是恶的——享受权力意味着你终于不再假装自己不想要它了。诚实比伪善更接近自我认知。/ B面：但你在享受的瞬间听到了超我最后的声音在说：'你曾经恨的就是这个。'然后那个声音消失了。关键张力：承认自己享受权力——是致命的诚实，还是致命的堕落？ | 代价回路 (Castration): 超我守卫的永久撤离——道德预警系统的静默。",
        coreEn: "A-side: Power itself isn't evil — enjoying it means you've stopped pretending you don't want it. Honesty is closer to self-knowledge than hypocrisy. / B-side: But at the moment of enjoyment you hear the superego's last whisper: 'This is what you used to hate.' Then the voice disappears. Key tension: Admitting you enjoy power — fatal honesty, or fatal corruption? | Castration Circuit: The superego's permanent withdrawal — the moral warning system goes silent.",
        reference: "《辛德勒的名单》在阳台上随意射杀犹太人的阿蒙·戈斯；《权力的游戏》品尝到铁王座滋味后再也无法放手的瑟曦。",
        referenceEn: "Amon Goeth casually shooting Jews from his balcony in Schindler's List; Cersei unable to release the Iron Throne's taste in Game of Thrones."
    },
    {
        id: "stake_hypocrisy",
        name: "成为伪善者", nameEn: "Becoming a Hypocrite",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你嘴上说的和手上做的完全相反——且你已经说服自己这种分裂是'必要的成熟'。",
        defEn: "What you say and what you do are complete opposites — and you've convinced yourself this split is 'necessary maturity.'",
        core: "A面：没有一个在复杂世界运作的人能做到言行完全一致——某种程度的策略性偏差是生存所需。/ B面：但当你连自己都分不清你到底信哪一套时——你不是在'策略性调整'，你是在人格分裂的路上狂奔。关键张力：你说的那些话——你自己还信吗？ | 代价回路 (Castration): 内在一致性的碎裂——你变成了两个互相矛盾的人。",
        coreEn: "A-side: No one operating in a complex world achieves perfect word-action alignment — some strategic deviation is survival necessity. / B-side: But when you can't tell which version you believe — you're not 'strategically adjusting,' you're sprinting toward personality schism. Key tension: Those words you say — do you still believe them yourself? | Castration Circuit: Internal coherence shatters — you become two contradictory people.",
        reference: "《东京物语》口头孝顺实则冷漠的子女们；《纸牌屋》在公众面前表演正义的安德伍德夫妇。",
        referenceEn: "Children verbally filial but emotionally cold in Tokyo Story; the Underwoods performing righteousness before the public in House of Cards."
    },
    {
        id: "stake_addiction",
        name: "堕入沉溺", nameEn: "Addiction",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你毕生视为不可触碰的东西——毒品、赌博、暴力或某种更隐秘的快感——终于俘获了你。",
        defEn: "The thing you spent your life swearing was untouchable — drugs, gambling, violence, or a more hidden pleasure — has finally captured you.",
        core: "A面：沉溺至少证明了你是一个有欲望的活物——只有真正在活的人才会被什么东西勾住。/ B面：但你知道你正在下沉，而下沉的速度正在加快，而你已经失去了'想要停下来'的那个部件。关键张力：当你知道自己在自毁但停不下来——那个'知道'还有什么用？ | 代价回路 (Castration): 意志主权的让渡——你知道牢笼的门是开的，但你不想出去。",
        coreEn: "A-side: Addiction at least proves you're a desiring creature — only the truly alive get hooked. / B-side: But you know you're sinking, the speed is increasing, and you've lost the part that 'wants to stop.' Key tension: When you know you're self-destructing but can't stop — what good is 'knowing'? | Castration Circuit: Will-sovereignty surrendered — you know the cage door is open, but you don't want to leave.",
        reference: "《梦之安魂曲》四个人分别被不同形式的瘾吞噬的平行坠落；《赌神》光环背后赌徒的深渊凝视。",
        referenceEn: "Four people swallowed by different addictions in parallel descent in Requiem for a Dream; the abyssal gaze behind the gambling god's halo in God of Gamblers."
    },
    {
        id: "stake_forgive_unforgivable",
        name: "饶恕不可饶恕", nameEn: "Forgiving the Unforgivable",
        group: "D. 超我献祭", groupEn: "Superego Sacrifice",
        def: "你选择原谅了那个毁了你一切的人——不是因为他值得被原谅，而是因为恨已经在从内部杀死你了。",
        defEn: "You chose to forgive the one who destroyed everything — not because they deserve it, but because hatred was killing you from within.",
        core: "A面：原谅是最终极的权力行为——是你单方面宣布：'你对我没有权力了。'你从受害者变成了裁判。/ B面：但有些东西是否真的可以被原谅？你在说'我原谅你'的时候，那些被毁掉的、永远无法复原的东西是否同意了？关键张力：饶恕不可饶恕——是终极的自由，还是对受害者记忆的背叛？ | 代价回路 (Castration): 复仇权利的自我缴械——最后的代价是放弃追究代价。",
        coreEn: "A-side: Forgiveness is the ultimate power act — a unilateral declaration: 'you have no power over me anymore.' You shift from victim to judge. / B-side: But can some things truly be forgiven? When you say 'I forgive you,' did the things destroyed and forever unrepairable consent? Key tension: Forgiving the unforgivable — ultimate freedom, or betrayal of victims' memory? | Castration Circuit: Self-disarmament of the right to revenge — the final price is relinquishing the right to demand a price.",
        reference: "《密阳》试图原谅杀害自己孩子的凶手却发现凶手已经'被上帝原谅了'的母亲；《12怒汉》在愤怒中艰难选择放下偏见的陪审员。",
        referenceEn: "The mother trying to forgive her child's killer only to find the killer already 'forgiven by God' in Secret Sunshine; jurors painfully choosing to set aside prejudice through anger in 12 Angry Men."
    },
];
