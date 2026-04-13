import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_A: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 意义的放逐 (Symbolic Severance) — 20 Items
    // 丧失维度：你在"大他者的档案簿"中的坐标被删除。
    // 核心感受：你物理上还活着，但社会学意义上你已经死了。
    // 光谱：名字丧失(1-5) → 信誉丧失(6-10) → 地位丧失(11-15) → 连接丧失(16-20)
    // ============================================================

    // ---- 名字丧失：主体在符号秩序中的"第一能指"被拔除 ----

    {
        id: "stake_erasure",
        name: "社会抹杀", nameEn: "Social Erasure",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "从社会登记簿中被彻底删除——物理存在被保留，但在大他者的档案中，你不再是一个'人'。",
        defEn: "Thoroughly deleted from the social registry — physical existence preserved, but in the Big Other's filing system, you cease to be a 'person'.",
        core: "A面：从名册上消失反而获得了诡异的自由——不被追踪、不被定义。'不存在的人'是最危险的人。/ B面：但这种自由的代价是永恒的孤独——没有人会来找你，没有人在你死后提起你的名字。你从世界上完整地蒸发了。关键张力：被社会抹杀之后——是终极自由，还是终极孤独？ | 代价切口(−Φ): 存在的坐标系被拔除。",
        coreEn: "A-side: Disappearing from the registry grants strange freedom — untracked, undefined. The one who 'doesn't exist' is the most dangerous. / B-side: But the cost is eternal solitude — no one comes looking, no one speaks your name after you die. You evaporate completely. Key tension: After social erasure — ultimate freedom, or ultimate loneliness? | Castration Circuit: The coordinate system of existence is uprooted.",
        reference: "《全民公敌》一夜之间所有身份记录被删除的律师；《黑镜·急转直下》评分归零后在公众视野中变为白噪音的被屏蔽者。",
        referenceEn: "The lawyer whose identity records vanish overnight in Enemy of the State; the blocked user becoming white noise at zero rating in Black Mirror: Nosedive."
    },
    {
        id: "stake_name_loss",
        name: "剥夺姓名", nameEn: "Loss of Name",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "名字被没收，从此以编号、代称或蔑称替代——灵魂的最简句法被格式化。",
        defEn: "Name confiscated, permanently replaced by a number, alias, or slur — the simplest syntax of the soul is formatted.",
        core: "A面：名字是大他者给你的第一副镣铐——剥夺了它，'无名者'可以成为任何人。/ B面：但名字也是你与世界最基本的纽带。连'叫什么'都被收走，你就失去了被辨认、被思念的资格，变成了代号背后的空洞。关键张力：失去名字——是被剥夺了自我，还是卸下了别人赋予的身份？ | 代价切口(−Φ): 灵魂的第一能指被没收。",
        coreEn: "A-side: A name is the Big Other's first shackle — stripped of it, the 'nameless' can become anyone. / B-side: But a name is the most basic bond to the world. When even 'what to call you' is confiscated, you lose the right to be recognized or missed — a void behind a serial number. Key tension: Losing your name — robbed of self, or shedding assigned identity? | Castration Circuit: The soul's first signifier is confiscated.",
        reference: "《悲惨世界》冉·阿让沦为代号24601的苦役犯；《千与千寻》被抽走全名缩为'千'、失去归乡密码的少女。",
        referenceEn: "Jean Valjean reduced to prisoner 24601 in Les Misérables; Chihiro stripped of her full name to 'Sen,' losing the code to return home in Spirited Away."
    },
    {
        id: "stake_replace",
        name: "身份顶替", nameEn: "Replacement",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "另一个人合法继承了你的全部能指——你的名字、你的位置、你的面孔。你变成了自己生命的冗余副本。",
        defEn: "Another person legally inherits all your signifiers — your name, your position, your face. You become the redundant copy of your own life.",
        core: "A面：被无缝顶替让你看清真相——系统从来不需要'你'，只需要一个填满位置的人。清醒本身是一种解放。/ B面：但你发现你全部的独特性其实可以被批量复制。你不是不可替代的，你只是碰巧先到。关键张力：发现自己可以被替代——摧毁你，还是让你停止从'被需要'中汲取存在感？ | 代价切口(−Φ): 独特性的幻象被戳破。",
        coreEn: "A-side: Seamless replacement reveals truth — the system never needed 'you,' just someone to fill the slot. Clarity itself is liberation. / B-side: But you discover all your uniqueness can be mass-produced. You weren't irreplaceable; you just arrived first. Key tension: Discovering you're replaceable — destroyed, or freed from extracting existence from 'being needed'? | Castration Circuit: The illusion of uniqueness is punctured.",
        reference: "《天才雷普利》完美顶替公子哥身份与生活的偷窥者；《我们》被地底克隆体彻底鸠占鹊巢的真身。",
        referenceEn: "The voyeur perfectly overriding a rich heir's identity in The Talented Mr. Ripley; the original self utterly usurped by underground clones in Us."
    },
    {
        id: "stake_forgotten",
        name: "世界遗忘", nameEn: "Being Forgotten",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你的存在没有留下任何痕迹——全世界关于你的记忆被强行抽取，仿佛你从未出生。",
        defEn: "Your existence leaves zero trace — the entire world's memory of you is forcibly extracted, as if you were never born.",
        core: "A面：被遗忘意味着你不再欠世界任何债——没有期待、没有角色。最彻底的'清零'。/ B面：但人类最深的恐惧不是死亡——是死后没人记得你活过。被遗忘比被杀更残酷，因为杀你的人至少承认你存在过。关键张力：如果全世界都忘了你——'你'和'从未存在过'有什么区别？ | 代价切口(−Φ): 比死亡更深的终极死亡。",
        coreEn: "A-side: Being forgotten means you owe the world nothing — no expectations, no roles. The most thorough 'reset.' / B-side: But humanity's deepest fear isn't death — it's nobody remembering you lived. Being forgotten is crueler than being killed; your killer at least acknowledged you existed. Key tension: If the world forgets you — what's the difference between 'you' and 'never existed'? | Castration Circuit: The ultimate death deeper than death.",
        reference: "《寻梦环游记》被活人集体遗忘后化为金屑消散的亡灵；《归来》站在火车站牌下终身无法被妻子认出的丈夫。",
        referenceEn: "The spirit dissolving into golden dust once all living memory fades in Coco; the husband standing under train station signs forever unrecognized by his wife in Coming Home."
    },
    {
        id: "stake_language_loss",
        name: "母语剥夺", nameEn: "Language Loss",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "母语被强行斩断——被迫终生使用压迫者的语言来思考、发音和做梦。",
        defEn: "Mother tongue forcibly severed — compelled for life to think, pronounce, and dream in the oppressor's language.",
        core: "A面：失去母语有时反而获得局外人的洞察力——每一种语言都是一种看世界的方式。/ B面：但语言不是工具——语言是'存在的家'（海德格尔）。失去用母语骂人、祈祷和说梦话的能力，你失去的是灵魂深处那个不需要翻译的自己。关键张力：用敌人的语言思考——是被征服了，还是在敌人的语法里埋下了反叛的种子？ | 代价切口(−Φ): 文化潜意识的根基被拔除。",
        coreEn: "A-side: Losing mother tongue sometimes grants outsider clarity — each language is a way of seeing the world. / B-side: But language isn't a tool — it's 'the house of being' (Heidegger). Losing the ability to curse, pray, and sleep-talk in your mother tongue means losing the deepest self that needs no translation. Key tension: Thinking in the enemy's language — conquered, or planting rebellion inside their grammar? | Castration Circuit: The root of cultural subconsciousness is uprooted.",
        reference: "《赛德克·巴莱》被迫学习殖民者语言、放弃猎首文化的原住民；《1984》被'新话'洗刷掉反叛词汇的城民。",
        referenceEn: "Indigenous people forced to learn the colonizer's language and abandon their culture in Warriors of the Rainbow; citizens brainwashed by Newspeak erasing all rebel vocabulary in 1984."
    },

    // ---- 信誉丧失：名字还在，但被涂上了洗不掉的颜色 ----

    {
        id: "stake_stigma",
        name: "背负恶名", nameEn: "Stigmatization",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "不仅失去荣誉，还被迫替系统承担了最肮脏的罪名——永远被钉在耻辱柱上。",
        defEn: "Not merely losing honor, but forced to bear the system's dirtiest sins — nailed forever to the pillar of shame.",
        core: "A面：既然全世界认定你是最坏的那个，你反而不需要再讨好任何人了。最黑暗的自由藏在最深的耻辱里。/ B面：但恶名会像辐射一样污染靠近你的每一个人——孩子会被指着说'他爸是那个人'。关键张力：当全世界认定你是怪物——你是证明他们错了，还是索性活成他们害怕的样子？ | 代价切口(−Φ): 道德倒影被永久涂黑。",
        coreEn: "A-side: Since the world declared you the worst, you no longer need to please anyone. The darkest freedom hides in deepest shame. / B-side: But stigma radiates contamination to everyone near you — children get pointed at: 'his father is that person.' Key tension: When the world decrees you a monster — prove them wrong, or become what they fear? | Castration Circuit: The moral reflection permanently blackened.",
        reference: "《狩猎》因小女孩一句谎言被钉为恋童癖的无辜教师；《进击的巨人》替世人背下灭世原罪的艾伦。",
        referenceEn: "An innocent teacher crucified as a pedophile by a child's false claim in The Hunt; Eren bearing the sin of global annihilation for his people in Attack on Titan."
    },
    {
        id: "stake_misunderstood",
        name: "千古误读", nameEn: "Eternal Misreading",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "明明是拯救一切的人，却背负着制造灾难的罪名——且永远无法公开辩解。",
        defEn: "The one who saved everything bears the stigma of causing the disaster — and can never publicly defend themselves.",
        core: "A面：沉默的英雄比喧哗的英雄更接近真相——解释会破坏你保护的东西。被误解本身就是正确代价的一部分。/ B面：但人类不是为独自承受真相而设计的。'我救了所有人，但所有人都恨我'——这种不可言说的孤独会从内部把你蛀空。关键张力：如果为你正名会毁掉你保护的一切——你选择真相还是继续被误解？ | 代价切口(−Φ): 正当性与功勋被永久剥夺。",
        coreEn: "A-side: The silent hero is closer to truth than the celebrated one — explanation would destroy what you protect. Being misunderstood is part of the correct price. / B-side: But humans aren't built to bear truth alone. 'I saved everyone, but everyone hates me' — that unspeakable loneliness hollows you from within. Key tension: If clearing your name destroys what you protected — truth, or staying misunderstood? | Castration Circuit: Legitimacy and merit permanently stripped.",
        reference: "《黑暗骑士》承下双面人罪名遁入暗夜的蝙蝠侠；《英雄》忍受暴君骂名、以万箭穿心守护天下大义的无名刺客。",
        referenceEn: "Batman bearing Harvey's crimes and fleeing into the storm in The Dark Knight; the nameless assassin enduring a tyrant's stigma to protect the greater good in Hero."
    },
    {
        id: "stake_discredited",
        name: "信用破产", nameEn: "Discredited",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你是真相的预言家——但被系统永久打上了'妄想症骗子'的标签。没有人再信你说的任何一句话。",
        defEn: "A prophet of truth — but permanently labeled 'delusional liar' by the system. No one believes a single word you say.",
        core: "A面：不被相信反而验证了你的洞察——卡桑德拉的诅咒恰恰证明她看到的比所有人都真实。/ B面：但'看到真相却说不出来'比失明更深。你眼睁睁看着灾难降临，手里握着解决方案，但连最亲的人都望向别处。关键张力：如果你知道一切但没人信你——你还有义务继续预警吗？ | 代价切口(−Φ): 预言能力与信誉被双重废除。",
        coreEn: "A-side: Not being believed validates your insight — Cassandra's curse proves she saw more truly than anyone. / B-side: But 'seeing truth yet unable to convey it' is blindness deeper than blindness. You watch disaster approach holding the solution, while even your closest look away. Key tension: If you know everything but no one believes you — are you still obligated to warn? | Castration Circuit: Prophetic ability and credibility both abolished.",
        reference: "《大空头》看穿次贷危机却被全华尔街嘲笑为疯子的独眼投资人；《哈利·波特》目睹伏地魔归来却被魔法部扣上'妄想症'帽子的少年。",
        referenceEn: "The glass-eyed investor mocked as a maniac for seeing the housing crash in The Big Short; Harry labeled delusional by the Ministry despite facing Voldemort in Harry Potter."
    },
    {
        id: "stake_mockery",
        name: "沦为笑柄", nameEn: "Public Mockery",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "毕生的追求和极致的痛苦，在大他者眼里被降格为一档滑稽喜剧供人消费。",
        defEn: "A lifetime of pursuit and extreme suffering downgraded into slapstick comedy for public consumption.",
        core: "A面：被嘲笑的人拥有小丑式的自由——尊严没了，你反而能说出体面人不敢说的真话。/ B面：但被嘲笑比被忽视更残酷——被忽视至少你的痛苦是私人的。被嘲笑意味着你的痛苦成了公共娱乐产品，你连悲剧的资格都没有。关键张力：当你的痛苦变成笑话——加入笑声自保，还是坚持痛苦是真实的？ | 代价切口(−Φ): 崇高性被褫夺——连悲剧的资格都没有。",
        coreEn: "A-side: The mocked possess jester's freedom — dignity gone, you can speak truths the respectable dare not. / B-side: But being mocked is crueler than being ignored — ignored, your pain is at least private. Mocked, your suffering becomes public entertainment. You don't even qualify for tragedy. Key tension: When pain becomes a joke — join the laughter, or insist it's real? | Castration Circuit: Sublimity stripped — not even qualified for tragedy.",
        reference: "《小丑》被名嘴当众当作笑料耍弄的底层人亚瑟；《阮玲玉》吞药自尽之际仍被小报嚼成花边谈资的名伶。",
        referenceEn: "Arthur paraded as a miserable punchline on live TV in Joker; the starlet whose suicide is chewed into tabloid gossip in Center Stage."
    },
    {
        id: "stake_scandal",
        name: "身败名裂", nameEn: "Scandal",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "用极其难堪且不可辩驳的丑闻，全方位摧毁一个人建立了一辈子的公众信誉结构。",
        defEn: "Utterly destroying a lifetime of public credibility through an undeniable, devastating scandal.",
        core: "A面：丑闻是最暴力的诚实——把抛光的公共表面砸碎，露出下面不完美的血肉。被扒光有时比穿着皇帝的新衣更健康。/ B面：但丑闻不是手术刀是炸弹——不区分该揭露的真相和该保护的隐私，连同你脆弱的私人世界一起炸碎。关键张力：被丑闻摧毁——是终于面对真实自己，还是被远超比例的惩罚碾碎？ | 代价切口(−Φ): 名誉殿堂的爆破——比死亡更漫长的媒体凌迟。",
        coreEn: "A-side: Scandal is the most violent honesty — shattering polished public surfaces to reveal imperfect flesh beneath. Being stripped can be healthier than wearing the emperor's new clothes. / B-side: But scandal is a bomb, not a scalpel — it doesn't distinguish truths to expose from privacy to protect. Your fragile private world detonates alongside everything else. Key tension: Destroyed by scandal — finally facing yourself, or crushed by punishment exceeding? | Castration Circuit: The hall of fame detonated — media execution slower than death.",
        reference: "《社交网络》因背叛丑闻永远失去友谊的扎克伯格；《纸牌屋》因血腥丑闻导致百年基业瞬间崩塌的安德伍德。",
        referenceEn: "Zuckerberg permanently losing friendships through betrayal scandals in The Social Network; Underwood's century-long political empire crumbling to scandal in House of Cards."
    },

    // ---- 地位丧失：你在权力阶梯上的支点被抽走 ----

    {
        id: "stake_rank_loss",
        name: "阶层坠落", nameEn: "Loss of Rank",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "从云端的位置瞬间跌入最底层——且保留着所有'曾经在上面'的记忆。",
        defEn: "Falling instantly from the pinnacle to the lowest layer — while retaining every memory of having been on top.",
        core: "A面：从底层看世界有顶层永远看不到的清晰——很多伟大的作品都是在坠落之后写出的。/ B面：但坠落最残酷的不是贫穷本身，而是'记得自己阔过'。身体还记得真丝触感，味蕾还记得那种酒，但口袋已经不允许你回去了。关键张力：记得曾经拥有的一切——是永恒折磨，还是证明你确实活过那样的人生？ | 代价切口(−Φ): 俯视的支点被抽走——被自己曾制定的法则反噬。",
        coreEn: "A-side: Seeing from below offers clarity the top never sees — many great works are written after the fall. / B-side: But the cruelest part isn't poverty — it's 'remembering you were rich.' Body recalls silk, palate recalls that wine, but pockets no longer permit re-entry. Key tension: Remembering everything you had — eternal torment, or proof you truly lived? | Castration Circuit: The pedestal removed — devoured by rules you once made.",
        reference: "《末代皇帝》前半生的真龙天子，暮年买票参观自己的宫殿；《第九区》昨日威风的人类管理者，一夜之间被变为被管理的异形。",
        referenceEn: "The dragon emperor who in old age buys tickets to visit his own palace in The Last Emperor; the smug human administrator transformed overnight into the managed alien in District 9."
    },
    {
        id: "stake_uniform_strip",
        name: "权力褫夺", nameEn: "Stripped of Power",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "在公共仪式上被强制剥夺象征权力的制服、勋章、头衔或法器——你的铠甲被当众撕碎。",
        defEn: "Forcibly stripped of uniforms, medals, titles, or instruments of power in a public ceremony — your armor is torn apart before all.",
        core: "A面：权力外壳剥除后，你终于看到没有头衔、制服、权杖的自己是谁。赤裸的人如果还能站立，他的站立比任何制服都有力量。/ B面：但大多数人失去外壳后无法站立——那个'赤裸的自己'从来没有被锻炼过。铠甲穿太久，下面的肌肉已经萎缩了。关键张力：脱下制服后——是终于获得人的形态，还是发现你早就忘了人的形态？ | 代价切口(−Φ): 权力幻象的收缴——铠甲撕碎后暴露的虚弱。",
        coreEn: "A-side: With the power shell removed, you finally see who you are without titles or scepters. If that naked person can still stand, their standing is more powerful than any uniform. / B-side: But most can't stand after losing the shell — the 'naked self' was never exercised. Armor worn too long; muscles beneath have atrophied. Key tension: After removing the uniform — finally human, or realizing you forgot what human form is? | Castration Circuit: Power fantasy confiscated — weakness exposed after armor torn.",
        reference: "《辛德勒的名单》被剥去党卫军制服的阿蒙·戈斯；《满城尽带黄金甲》在万人仪式前被扒脱金蟒龙袍的太子。",
        referenceEn: "Amon Goeth stripped of his SS uniform in Schindler's List; the crown prince publicly stripped of golden dragon robes before ten thousand in Curse of the Golden Flower."
    },
    
    {
        id: "stake_legacy_ruin",
        name: "基业毁灭", nameEn: "Legacy Ruin",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "眼睁睁看着自己亲手建立的庞大基业——公司、国家或组织——分崩离析，化为废墟。",
        defEn: "Watching helplessly as the massive foundation you built with your own hands — company, nation, or organization — crumbles into ruins.",
        core: "A面：废墟也是纪念碑——它证明这里曾矗立过伟大的东西。/ B面：但基业毁灭不仅是你的失败——是所有信任你、追随你的人的失败。关键张力：毕生心血化为灰烬——这是历史的必然，还是你个人的罪责？ | 代价切口(−Φ): '看我的丰功伟绩'化为荒漠碑文。",
        coreEn: "A-side: Ruins are monuments — proving something great once stood here. / B-side: But legacy ruin isn't your failure alone — it's everyone who trusted you. Key tension: Life's work turned to ash — historical inevitability, or personal sin? | Castration Circuit: 'Look on my Works' turned to desert epitaph.",
        reference: "《大明王朝》凝视国脉将空大江流尸巨局的嘉靖；《大都会》凝视下方金字塔钢基被火海倾覆的老掌权人。",
        referenceEn: "Emperor Jiajing watching the empire's veins crack into corpse rivers in Ming Dynasty; the master witnessing his tower's foundation snapped by fiery slave-blasts in Metropolis."
    },
    {
        id: "stake_contract_void",
        name: "契约撕毁", nameEn: "Void Contract",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "毕生奋斗换来的一项终极承诺或契约，在大他者变脸的一刻被宣告为废纸。",
        defEn: "A sworn ultimate promise or contract, fought for lifelong, is declared invalid the moment the Big Other turns its face.",
        core: "A面：契约撕毁让你看清真相——规则制定权从来不在你手里，觉醒比虚假的公平更接近自由。/ B面：但努力不被承认比从未努力更崩溃，你拿到了那张纸，却被当面撕碎。关键张力：当规则本身不守规则——你接受游戏不公平，还是推翻整张牌桌？ | 代价切口(−Φ): 奋斗逻辑链条被彻底切断。",
        coreEn: "A-side: Torn contracts reveal truth: rules were never yours to make. Painful awakening brings more freedom than illusory fairness. / B-side: But unacknowledged effort destroys you—you earned the paper, only to see it shredded. Key tension: When rules break themselves—accept unfairness, or flip the table? | Castration Circuit: Severing the logic chain of struggle.",
        reference: "《大明劫》强护三军却遭天子一纸降诏拔为替罪羊的断头少保；《老无所依》无视交易贯颅飞铁的大漏斗杀手。",
        referenceEn: "A loyal general executed as a scapegoat instantly upon a whimsical decree in Fall of Ming; shot strictly via unbending coin-rules in No Country for Old Men."
    },
    {
        id: "stake_last_one",
        name: "绝唱传承", nameEn: "The Last One",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你所守护的流派、家族、信仰或技艺，在你这里成为物理与精神意义上的绝唱。",
        defEn: "The lineage, family, faith, or craft you guarded becomes an absolute terminal point — physically and spiritually — with you.",
        core: "A面：成为最后一人意味你是最纯粹的结晶，不再被后来者稀释。/ B面：但此重量是绝对孤独，一旦倒下，你守护之物将以“从未存在过”的方式从宇宙蒸发。关键张力：你为传承而活，还是传承以你为最后燃料？ | 代价切口(−Φ): 未来历史被提前注销，成为活着的绝唱。",
        coreEn: "A-side: Being the last makes you the purest crystallization, undiluted by successors. / B-side: But this weight is absolute solitude. Once you fall, your legacy vanishes as if it never existed. Key tension: Living for legacy, or is legacy burning your life as its final fuel? | Castration Circuit: Future history prematurely cancelled.",
        reference: "《百鸟朝凤》泣血成最后一代吹歌人的焦三爷；《指环王》目送精灵西渡、封存远古魔法的最后一位精灵王。",
        referenceEn: "Master Jiao weeping blood as the last suona player in Song of the Phoenix; the final Elf-lord sealing Middle-earth's ancient magic in The Lord of the Rings."
    },
    {
        id: "stake_secret_exposed",
        name: "秘密曝光", nameEn: "Secret Exposed",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "用来维持社会面具的最痛、最不齿的潜意识秘密，被大他者全屏广播。",
        defEn: "The deepest, most shameful subconscious secret that maintained the social mask is broadcast globally.",
        core: "A面：秘密曝光换来诡异的轻松，终结了维系谎言的无穷内耗。/ B面：但这并非坦白，是被剥夺展示自我的控制权，犹如扒光丢入广场。关键张力：秘密揭穿后，是喜迎解脱的自由，还是失去最后防线的彻底崩溃？ | 代价切口(−Φ): 心理防线被强行爆破的终极赤裸。",
        coreEn: "A-side: Exposure brings eerie relief, ending the endless exhaustion of maintaining lies. / B-side: This isn't confession; it's losing control over self-presentation, like being stripped in a plaza. Key tension: Does exposure bring liberating relief, or total collapse of your last defense? | Castration Circuit: Psychological defenses detonated into ultimate nakedness.",
        reference: "《朗读者》宁肯坐牢也要隐瞒自己不识字的女看守；《黑镜·国歌》被迫在全国直播中暴露最不堪行为的首相。",
        referenceEn: "The female guard accepting life imprisonment rather than exposing her illiteracy in The Reader; the PM forced into a degrading act on national broadcast in Black Mirror: The National Anthem."
    },
    {
        id: "stake_ghosted",
        name: "联系切断", nameEn: "Disconnected",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "原本亲密的所有社会连接——亲人、爱人、朋友——如同被集体格式化般，同时对你关闭了大门。",
        defEn: "All formerly intimate social connections — family, lovers, friends — simultaneously shut their doors as if collectively formatted.",
        core: "A面：社会关系清零让你免于表演，获得无观众的旷野自由。/ B面：但人类非为独居进化，当最后的连接断绝，孤独便化作如饥饿般真实的物理剧痛。关键张力：全员离去，是因为你本身有毒，还是所有的爱都带有前提条件？ | 代价切口(−Φ): 被抛出社会重力场，沦为脱轨游星。",
        coreEn: "A-side: Zero connections mean no more performing, granting the vast freedom of an audienceless void. / B-side: But humans aren't meant for isolation. When the last link snaps, loneliness becomes physical pain. Key tension: Did everyone leave because you're toxic, or was love always conditional? | Castration Circuit: Thrown from the social gravity field into rogue orbit.",
        reference: "《伊尼舍林的报丧女妖》前日还共饮的挚友次日断指绝交的孤岛男人；《蜘蛛侠：英雄无归》被遗忘咒抽干所有人记忆的彼得·帕克。",
        referenceEn: "The island man whose only friend severs fingers and friendship overnight in The Banshees of Inisherin; Peter Parker erased from all memory by the forgetting spell in Spider-Man: No Way Home."
    },
    {
        id: "stake_censored",
        name: "永久封杀", nameEn: "Censored",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "你的思想、作品，甚至提到你的关键词，都被系统的底层算法永久屏蔽。",
        defEn: "Your thoughts, works, even keywords mentioning you are permanently banned by the system's core algorithms.",
        core: "A面：禁令赋予作品神秘光环，封杀成为最顶级的反向广告。/ B面：但现实绝非浪漫抵抗，而是漫长无声的窒息，你如无人林的倒树般悄无声息。关键张力：被封杀是证明你具威胁性的勋章，还是将你的声音彻底降维为无人可闻的死寂？ | 代价切口(−Φ): 话语权遭强行阉割，存在痕迹被404抹除。",
        coreEn: "A-side: Censorship grants a mysterious aura; the ban itself serves as ultimate reverse-advertising. / B-side: Reality isn't romantic resistance, but silent suffocation—falling like a tree in an empty forest. Key tension: Is censorship a medal of your threat, or the forced reduction of your voice to dead silence? | Castration Circuit: Discourse completely castrated, existence wiped by 404.",
        reference: "《窃听风暴》毕生心血手稿被封存不准面世的东德剧作家；《1984》日记与存在痕迹被'蒸发'化为零的温斯顿。",
        referenceEn: "The East German playwright whose life's manuscripts are sealed from publication in The Lives of Others; Winston whose diaries and existence are 'vaporized' to zero in 1984."
    },
    {
        id: "stake_exile",
        name: "永久流放", nameEn: "Eternal Exile",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "被剥夺一切社会坐标，永远驱逐至边缘不毛之地——失去'故乡'的概念。",
        defEn: "Stripped of all social coordinates, forever banished to the barren edges — losing the very concept of 'home'.",
        core: "A面：流放者因不属于任何地方而拥有拥抱所有地方的视野。/ B面：但流放并不浪漫，它是永远找不到家乡味道的残酷剥夺，是永远等不到那句方言问候的失根之痛。关键张力：永远在路上的人生，是自由的游牧，还是找不到停靠点的无根漂流？ | 代价切口(−Φ): 空间归属感彻底阉割，故乡坐标永恒丢失。",
        coreEn: "A-side: Exiles gain a broadened vision, able to embrace everywhere by belonging nowhere. / B-side: Yet exile lacks romance; it's the cruel deprivation of home's flavors and the pain of a vanished dialect's welcome. Key tension: Is the eternal wanderer a free nomad, or a rootless message in a bottle? | Castration Circuit: Spatial belonging wholly castrated, home coordinates forever lost.",
        reference: "《陆犯焉识》被发配西北荒漠苦役多年的知识分子；《疯狂的麦克斯：狂暴之路》被抛入无垠废土的流亡者。",
        referenceEn: "The intellectual banished to northwestern desert labor for years in The Criminal Lu Yanshi; the exile thrown into endless wasteland in Mad Max: Fury Road."
    },
    {
        id: "stake_unseen",
        name: "沦为透明", nameEn: "Invisibility",
        group: "A. 意义的放逐", groupEn: "Symbolic Severance",
        def: "大他者撤回了对你的凝视——无论你做什么、说什么，都无法在任何人身上引起哪怕最微小的反馈。",
        defEn: "The Big Other withdraws its gaze — no matter what you do or say, you cannot elicit even the smallest reaction from anyone.",
        core: "A面：彻底透明让你免于被凝视与审判，获得过载社会中最奢侈的隐私。/ B面：但人需借由他者目光确认存在，完全不被注视会让你怀疑自己是否已是幽灵。关键张力：消失却无人察觉，是你确实不可见，还是你已从本体论层面上不存在？ | 代价切口(−Φ): 大他者凝视被彻底撤回，沦为本体论上的透明人。",
        coreEn: "A-side: Total transparency frees you from judgment, granting luxurious privacy in an over-watched society. / B-side: But existence requires the Other's gaze; utter invisibility makes you question if you're a ghost. Key tension: If you vanish unnoticed, are you just unseen, or ontologically erased? | Castration Circuit: The Big Other's gaze withdrawn, reduced to ontological transparency.",
        reference: "《第六感》在客厅对妻子呼喊却得不到任何眼神回应、不知自己已死的心理医生；《隐形人》因完全不被看见而被迫使用暴力来确认自存的绝望者。",
        referenceEn: "The psychologist screaming at his wife with zero response, unaware he's dead in The Sixth Sense; the desperate invisible man resorting to violence to confirm his existence in The Invisible Man."
    }
];
