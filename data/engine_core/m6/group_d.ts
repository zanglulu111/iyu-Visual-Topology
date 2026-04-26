import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 灵魂的绞刑 (Superego Sacrifice) — 20 Items
    // 丧失维度：你的道德底线被踩碎——你变成了你曾发誓永远不会成为的那种人。
    // 核心感受："我怎么变成了这样的人？"
    // 光谱：底线突破(1-5) → 背叛/出卖(6-10) → 共谋/沉默(11-15) → 道德异化(16-20)
    // ============================================================

    // ---- 底线突破：你亲手踩碎了自己画的那条线 ----

    {
        id: "stake_kill",
        name: "亲手夺命", nameEn: "Taking a Life",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "跨过'不可杀人'这条最古老的底线——且发现跨过之后自己还能继续活着。",
        defEn: "Crossing the oldest line — 'thou shalt not kill' — and discovering you can keep living afterward.",
        core: "A面：杀人有时是唯一能阻止更大杀戮的手段。/ B面：但真正的代价不是法律后果——是你发现自己'能做到'。曾经不可想象的事变成了你的履历。关键张力：如果杀了一个人能救一百个——你变成了英雄还是凶手？ | 代价切口(−Φ): '不可杀人'底线被物理性踩碎——且无法复原。",
        coreEn: "A-side: Killing is sometimes the only means to prevent greater slaughter. / B-side: But the real cost isn't legal — it's discovering you 'could do it.' The unimaginable becomes your résumé. Key tension: Kill one to save a hundred — hero or murderer? | Castration Circuit: 'Thou shalt not kill' physically shattered — irreversible.",
        reference: "《老无所依》硬币杀手面前每个人都被迫面对'我能不能杀人'的极限拷问；《寄生虫》爆发一刻亲手夺命的金基泽。",
        referenceEn: "Everyone facing the ultimate question 'could I kill' before the coin-toss killer in No Country for Old Men; Ki-taek taking a life in the eruption moment in Parasite.",

        topology: "交出的不是清白——而是'我做不到'这个信念。底线被自己的脚踩碎，脚底没有预想中的痛，这个不痛才是真正的代价",

        directive: {
            bright: "写他清醒地看着'不可能'从身上脱落。手没有抖，呼吸正常，远处还有鸟叫。他看着自己做完这件事之后世界没有坍塌——变了的只有他，而这个变化安静得像换了层皮肤。他在这种安静里辨认出代价的形状。不要写他得到了什么，只写他注视着底线离开。",
            dark: "写他吃第一顿饭时撞见代价——筷子夹菜，送进嘴里，每个动作和昨天一样。他不记得交出过这个。以为跨过那条线后会呕吐、会崩溃，但他正常地吃完了。每一口正常的咀嚼都是他低头发现自己又完好了一点的瞬间。代价不是一次性收取的，它在正常里一笔一笔地扣。",
            tension: "洗完澡照镜子，日常动作。他试图找到一个变化——皱纹、眼神、任何东西。但他不确定是否已经付完——脸和昨天一模一样，不可逆的东西不在脸上，在脸的后面。他不知道这张脸还会以多少种方式保持'和昨天一样'。写他盯着镜中不变的脸的那几秒。不要给变化。"
        }
    },
    {
        id: "stake_torture",
        name: "施加痛苦", nameEn: "Inflicting Pain",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "为了'正确的目的'亲手对另一个人实施你曾经最鄙视的暴行。",
        defEn: "For the 'right purpose,' personally inflicting on another the very atrocity you once most despised.",
        core: "A面：有时只有暴力能从暴力手中救回受害者——干净的手不能从泥里拉人。/ B面：但你在施加痛苦时听到了自己心里某个东西断裂的声音。你曾经是受害者的同盟，现在你和施暴者使用着同一套工具。关键张力：用敌人的方法打败敌人——你赢了，但你还是你吗？ | 代价切口(−Φ): 道德洁癖的自我爆破。",
        coreEn: "A-side: Sometimes only violence rescues victims from violence — clean hands can't pull people from mud. / B-side: But inflicting pain, you hear something inside you snap. You were once the victim's ally; now you use the abuser's toolkit. Key tension: Defeating the enemy with the enemy's methods — you won, but are you still you? | Castration Circuit: Moral purity self-detonates.",
        reference: "《猎杀本·拉登》为情报亲手执行水刑的CIA探员；《无间道》为卧底任务亲手伤害无辜的陈永仁。",
        referenceEn: "The CIA operative personally waterboarding for intel in Zero Dark Thirty; Chan Wing-yan harming innocents for his undercover mission in Infernal Affairs.",

        topology: "交出的不是道德洁癖——而是'我和施暴者不同'这个区分。拿起他的工具那一刻镜子合拢，你们手里握着同一把东西",

        directive: {
            bright: "写他清醒地看着'干净'从身上脱落。洗手时把水温调到最烫，热水烫过皮肤不是痛而是归还——好像高温能把刚才做的事从手上烧回去。搓手的时长远超需要。他在变红的手指上辨认出代价的形状：手从来都是干净的。不要写他得到了什么，只写他注视着洁癖离开。",
            dark: "写他施加痛苦时撞见代价——发现了一种更'高效'的方式。他不记得交出过这个。注意到对方在某个角度更敏感，某种节奏更有效，这种好奇和所有技术发现的手感一样。动作比反思快了半秒，改进在意识到好奇心本质之前已经完成。代价不是一次性收取的，它在熟练里一笔一笔地扣。",
            tension: "事后在地铁上遇到一双和那天相同颜色的眼睛。他移不开视线。但他不确定是否已经付完——分不清自己是在内疚还是在确认'这双眼睛和那天的到底一不一样'。他不知道这种分不清会在多少张陌生面孔上重复。写他盯着那双眼睛的两秒。不要给答案。"
        }
    },
    {
        id: "stake_child_harm",
        name: "伤害无辜", nameEn: "Harming the Innocent",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你的行动直接导致了一个绝对无辜的人的苦难——尤其是孩子、老人或者信任你的人。",
        defEn: "Your actions directly caused suffering to an absolutely innocent person — especially a child, elder, or someone who trusted you.",
        core: "A面：有时保护多数人必须牺牲少数无辜——这是所有决策者的终极困境。/ B面：但被牺牲的无辜者不是'统计数字'——是一个有名字的、曾经对你微笑的人。你的'正确决策'在他的眼泪面前毫无说服力。关键张力：如果你的'正确'建立在某个无辜者的废墟上——它还正确吗？ | 代价切口(−Φ): 守护者身份的内爆——你成了你发誓保护的人的加害者。",
        coreEn: "A-side: Protecting the majority sometimes demands sacrificing innocent few — every decision-maker's ultimate dilemma. / B-side: But the sacrificed innocent isn't 'statistics' — it's a named person who once smiled at you. Your 'correct decision' is unconvincing before their tears. Key tension: If your 'right' is built on an innocent's ruins — is it still right? | Castration Circuit: The protector identity implodes — you become the perpetrator of those you swore to protect.",
        reference: "《索菲的选择》被迫在两个孩子之间选择谁活的母亲；《烈日灼人》无意间导致忠诚下属被处决的苏联军官。",
        referenceEn: "The mother forced to choose which of her children lives in Sophie's Choice; the Soviet officer inadvertently causing his loyal subordinate's execution in Burnt by the Sun.",

        topology: "交出的不是善良——而是'守护者'这个坐标。你的影子落在你发誓保护的人身上，影子的形状是一只正在施害的手",

        directive: {
            bright: "写他清醒地看着'无辜'从身上脱落。被害者最后看他的表情不是恐惧——是不理解，一个纯净的'为什么'。他在人群中视线自动锁定同样年龄的轮廓，脚步减速但没走过去。他在这个减速里辨认出代价的形状。不要写他得到了什么，只写他注视着守护者的资格离开。",
            dark: "写他在公园里撞见代价——一个和被害者同龄的孩子在系鞋带。他不记得交出过这个。那个'为什么'的表情比所有记忆都清晰，其他画面在模糊，唯独这张脸的分辨率随时间增加。每一次在陌生孩子身上看到'本来也可以做但再也做不了'的动作，都是代价又扣了一笔。",
            tension: "多年后遇到一个和被害者同龄的孩子在吃冰淇淋。他看着这个动作。但他不确定是否已经付完——不存在的未来叠加在现实上成了重影，他不知道这种重影会在多少个孩子身上出现。写他移开视线的速度。不要写内疚或释然。"
        }
    },
    {
        id: "stake_oath_break",
        name: "誓言背弃", nameEn: "Oath Breaking",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "用全部灵魂起过的誓言——在极端压力下被你自己亲手撕碎。",
        defEn: "An oath sworn with your entire soul — torn apart by your own hands under extreme pressure.",
        core: "A面：打破一个不再合理的誓言有时恰恰是道德勇气——盲目守约可以和盲目残忍一样有害。/ B面：但你不是在'理性评估后取消'——你是在恐惧中食言。你知道那个对你说'我相信你'的人此刻正在某处等你兑现。关键张力：一个在绝境中背弃誓言的人——是懦夫还是幸存者？ | 代价切口(−Φ): 人格信用的核心破产。",
        coreEn: "A-side: Breaking an oath no longer reasonable can be moral courage — blind loyalty can be as harmful as blind cruelty. / B-side: But you didn't 'rationally cancel' — you broke your word in fear. The person who said 'I believe you' is waiting somewhere right now. Key tension: One who breaks their oath under extremity — coward or survivor? | Castration Circuit: Core bankruptcy of personal credit.",
        reference: "《冰与火之歌》背弃守夜人誓言的琼恩·雪诺；《教父》在婴儿洗礼时同步下令血洗五大家族的迈克尔。",
        referenceEn: "Jon Snow breaking his Night's Watch oath in A Song of Ice and Fire; Michael ordering the massacre of five families during his child's baptism in The Godfather.",

        topology: "交出的不是承诺——而是'我的话等于我'这个等式。骨头断了可以重接，但接合处永远比原来粗，每次下雨天都会提醒你",

        directive: {
            bright: "写他清醒地看着'一诺千金'从身上脱落。背弃后第一个早晨，起床刷牙穿衣，每个动作和往常一样。他以为世界会有物理性的变化——光线角度、空气密度——但什么都没变。他在这个'什么都没变'里辨认出代价的形状。不要写他得到了什么，只写他注视着旧的自己离开。",
            dark: "写他翻旧物时撞见代价——当年写的誓言原文。他不记得交出过这个。回忆中那些话已经变得模糊、有弹性、'其实也没那么绝对'——记忆自动启动了止痛程序。但原文清楚、坚定、不留余地。每一个字都是他低头发现自己又空了一点的瞬间。代价不是一次性收取的，它在回忆的篡改里一笔一笔地扣。",
            tension: "有人随口说'你不是发过誓吗'。他说'情况变了'，声音平稳，没有闪躲。但他不确定是否已经付完——'情况变了'四个字可以解释一切，任何背叛、任何食言都能被它收容。他不知道这四个字的容量有没有上限。写他说完之后的沉默。不要给判断。"
        }
    },
    {
        id: "stake_mercy_kill",
        name: "慈悲杀戮", nameEn: "Mercy Kill",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "出于爱，亲手终结你最爱的人的痛苦——且知道世界不会理解这是'爱'。",
        defEn: "Out of love, personally ending the suffering of the one you love most — knowing the world will never understand this as 'love.'",
        core: "A面：如果放手就是爱，慈悲杀戮就是爱的最高形态——你用自己的灵魂换取了对方的解脱。/ B面：但你活下来了。你要带着'我亲手杀了我最爱的人'这个事实度过余生。没有人会替你承担这个重量。关键张力：如果你的爱只能以这种方式表达——你还敢称它为'爱'吗？ | 代价切口(−Φ): 爱与杀之间的不可能等式。",
        coreEn: "A-side: If letting go is love, mercy killing is love's highest form — you trade your soul for their release. / B-side: But you survived. You'll live the rest of your life with 'I killed the one I loved most.' No one will share this weight. Key tension: If your love can only be expressed this way — do you still dare call it 'love'? | Castration Circuit: The impossible equation between love and killing.",
        reference: "《人工智能》母亲将机器人儿子抛弃在森林中的残忍慈悲；《百万美元宝贝》教练亲手拔掉爱徒呼吸管的至暗抉择。",
        referenceEn: "The mother's cruel mercy abandoning her robot son in the forest in A.I.; the trainer pulling the plug on his beloved fighter in Million Dollar Baby.",

        topology: "交出的不是对方的生命——而是'爱不会导向杀戮'这个公理。等式两边一边是爱一边是杀，等号成立的瞬间数学本身裂开了",

        directive: {
            bright: "写他清醒地看着'爱的无害性'从身上脱落。最后一次握手、最后一句日常的话——'晚安'——他知道不会有明天了，但声音稳定得像绷紧的弦。维持这个稳定是他一生中用力最大的表演。对方信了。他在信任的重量里辨认出代价的形状。不要写他得到了什么，只写他注视着公理离开。",
            dark: "写他事后撞见代价——手变轻了，像一直抓着的东西终于被放下。他不记得交出过这个。之后几小时做了什么不记得了——泡了茶？关了窗？记忆的断裂不在那个瞬间，在之后的日常里。某些小时被挖掉了，像唱片被划了一道。代价不是一次性收取的，它在空白的小时里一笔一笔地扣。",
            tension: "很久以后需要对某人解释。他说'因为我爱他'。但他不确定是否已经付完——这句话同时是全部的真相和全部的荒谬，爱不应该导向这个结局但它确实导向了。没有人能接话，不是因为震惊，是因为这句话没有后续。写说完之后的沉默。不要给回应。"
        }
    },

    // ---- 背叛/出卖：你将信任你的人交给了敌人 ----

    {
        id: "stake_betray_ally",
        name: "出卖同伴", nameEn: "Betraying an Ally",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "在极端压力下将信任你的人的秘密、位置或生命交给了对方。",
        defEn: "Under extreme pressure, handing over the secret, location, or life of someone who trusted you to the other side.",
        core: "A面：出卖有时是唯一能让更多人活下来的选择——一个人的信任 vs. 十个人的性命。/ B面：但被你出卖的人在被带走时回头看了你一眼。那个眼神会住在你的余生里。关键张力：你出卖他是因为别无选择——还是因为你害怕轮到自己？ | 代价切口(−Φ): 信义结构的不可逆爆破。",
        coreEn: "A-side: Betrayal is sometimes the only path to more survivors — one person's trust vs. ten lives. / B-side: But the person you betrayed looked back at you as they were taken away. That glance will live in you forever. Key tension: Did you betray them because there was no choice — or because you feared being next? | Castration Circuit: The trust structure irreversibly detonates.",
        reference: "《无间道》卧底与线人之间不断互相出卖的死循环；《1984》温斯顿在101号房间出卖茱莉亚。",
        referenceEn: "The endless cycle of betrayal between moles and informants in Infernal Affairs; Winston betraying Julia in Room 101 in 1984.",

        topology: "交出的不是同伴——而是'我不会出卖人'这个身份。桥还完好时你亲手埋了炸药，爆炸声里最响的是他回头看你时还在理解",

        directive: {
            bright: "写他清醒地看着'忠诚'从身上脱落。出卖之后独处，肩膀放松了，呼吸变深了——解脱比愧疚先到，像卸下一个扛太久的人。他在这个'解脱先到'里辨认出代价的形状。不要写他得到了什么，只写他注视着信义离开。",
            dark: "写他走过去倒掉那半杯水时撞见代价——椅子还是温的。他不记得交出过这个。擦干杯子放回原位，动作精确得像在消灭'那个人曾在这里'的物理痕迹。倒水声在安静的房间里回响。每一个清除痕迹的动作都是他低头发现手又空了一点的瞬间。代价在日常里一笔一笔地扣。",
            tension: "夜里接到被出卖者家属的电话：'你知道他在哪吗？'他说'不知道'，声调和平时一样，没有犹豫。但他不确定是否已经付完——撒这个谎不需要任何额外努力，嘴已经学会了一种新的自动档。他不知道这种自动档会接管多少句话。写他挂断电话看着屏幕变暗的那几秒。不要给判断。"
        }
    },
    {
        id: "stake_sell_soul",
        name: "灵魂交易", nameEn: "Selling the Soul",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "用你最珍视的道德信条去交换一样你迫切需要的东西——且交易不可撤销。",
        defEn: "Trading your most cherished moral code for something you desperately need — and the deal is irreversible.",
        core: "A面：灵魂交易至少意味着你的灵魂有人愿意出价——你的道德尊严被当作了具有交换价值的东西。/ B面：但交易完成后你会发现：你得到了你想要的，但你已经不是那个'想要它'的人了。欲望在交易中被实现的同时也被取消了。关键张力：如果得到之后你已经不是原来的你——那是谁在享用这份收获？ | 代价切口(−Φ): 浮士德契约——得到了一切，失去了'值得拥有一切'的资格。",
        coreEn: "A-side: A soul trade at least means someone is willing to bid on your soul — your moral dignity is treated as having exchange value. / B-side: But after the deal you discover: you got what you wanted, yet you're no longer the person who 'wanted' it. Desire is fulfilled and cancelled simultaneously. Key tension: If you're no longer yourself after acquiring — who's enjoying the gain? | Castration Circuit: The Faustian pact — gained everything, lost the qualification to deserve it.",
        reference: "《浮士德》用灵魂换取知识与青春的学者；《教父》为保护家族逐步用灵魂换取权力的迈克尔。",
        referenceEn: "The scholar trading his soul for knowledge and youth in Faust; Michael progressively exchanging his soul for power to protect his family in The Godfather.",

        topology: "交出的不是道德信条——而是'想要它的那个人'。交易无痛，痛觉被推迟到你拿着战利品照镜子，发现接过它的人你不认识了",

        directive: {
            bright: "写他清醒地看着'值得拥有'从身上脱落。终于得到了想要的东西，使用时的满足是真实的。但满足里有一丝走味——不是道德谴责，是更细微的东西：'享受'这个能力本身是不是也是交易的一部分。他在这个走味里辨认出代价的形状。不要写空虚，只写他注视着旧的自己离开。",
            dark: "写他偶遇一个和交易前的自己很像的人时撞见代价——同样的理想主义、同样的信条。他不记得交出过这个。看着那个人的眼神不是怀念——是一种捕食者的本能评估。意识到这个眼神时移开目光，微微皱眉，像闻到不好闻的气味。代价不是一次性收取的，它在你看人的方式里一笔一笔地扣。",
            tension: "深夜清点收获——权力、地位、安全，每样都是用灵魂碎片换的。账目是平的。但他不确定是否已经付完——失去的恰好等于得到的，全部的自己换来全部的东西，产生了精确的抵消。他不知道'零'这个结果是终点还是起点。写他看着平衡的账本的那几秒。不要给盈亏。"
        }
    },
    {
        id: "stake_abandon",
        name: "见死不救", nameEn: "Abandonment",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你有能力伸出手——但你选择了不伸。你让一个本可以被你救活的人沉了下去。",
        defEn: "You had the ability to reach out — but chose not to. You let someone who could have been saved sink.",
        core: "A面：有时放弃一个人是为了不让更多人陪葬——残忍的作战优先级不是冷血，是数学。/ B面：但你'选择不救'的那一刻，你和那些你鄙视的冷漠旁观者之间的界线消失了。你曾经以为自己'不一样'——现在你知道了，你一样。关键张力：你没有害他——但你也没救他。不作为和作恶之间的距离有多远？ | 代价切口(−Φ): '我和他们不一样'这个信念的崩塌。",
        coreEn: "A-side: Sometimes abandoning one prevents more from drowning — cruel triage isn't cold-blooded, it's mathematics. / B-side: But the moment you 'chose not to save,' the line between you and the cold bystanders you despised vanished. You thought you were 'different' — now you know you're the same. Key tension: You didn't harm them — but you didn't save them. How far is inaction from evil? | Castration Circuit: The belief 'I'm different from them' collapses.",
        reference: "《辛德勒的名单》结尾痛哭'我还可以多救几个'的辛德勒；《盲山》围观拐卖却选择沉默的全村村民。",
        referenceEn: "Schindler weeping 'I could have saved more' at the end of Schindler's List; the entire village watching abduction in silence in Blind Mountain.",

        topology: "交出的不是行动——而是'我和冷漠旁观者不同'这个区分。手插在口袋里，干燥本身变成了比血迹更难洗掉的污渍",

        directive: {
            bright: "写他清醒地看着'我不一样'从身上脱落。回到家锁上门坐在沙发上，呼吸平稳，甚至可以看电视——喜剧节目。没笑也没哭。温度不冷不热，恰好不需要任何道德决断。他在这个舒适的居中里辨认出代价的形状。不要写他得到了什么，只写他注视着区分离开。",
            dark: "写他听到电视里一声求救时撞见代价——身体的第一反应不是恐惧不是内疚，是一种条件反射式的计算：'这次和我有关吗？'他不记得交出过这个。计算几乎和声音同步完成，他已经学会了一种新的听觉过滤。每一次自动计算都是他低头发现自己又空了一点的瞬间。代价在过滤里一笔一笔地扣。",
            tension: "路上遇到一个摔倒的陌生人，脚步减速但没停。视线经过那个人继续向前。但他不确定是否已经付完——'帮不帮'已经不是道德问题了，变成了成本计算题，他不知道这道题会替换掉多少个曾经不需要计算的本能。写他走过之后后脑勺的感觉。不要给良心。"
        }
    },
    {
        id: "stake_deceive_loved",
        name: "欺骗至亲", nameEn: "Deceiving Loved Ones",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "对你最信任你的人编织一个精密的谎言——且必须每天维护这个谎言直到它变成你的第二层皮肤。",
        defEn: "Weaving an elaborate lie for the person who trusts you most — maintaining it daily until it becomes your second skin.",
        core: "A面：有些谎言是保护——对方知道真相只会更痛苦。善意的谎言是你替对方承受了真实的重量。/ B面：但你每次看着对方信任的眼神时，你知道那份信任建立在你的谎言之上。你不是在保护他——你是在用谎言控制他对世界的认知。关键张力：善意的欺骗和恶意的操控之间的界限在哪——由你来画吗？ | 代价切口(−Φ): 亲密关系的地基被你亲手掺了假。",
        coreEn: "A-side: Some lies are protection — the truth would only hurt more. A kind lie means you bear reality's weight for them. / B-side: But every time you see their trusting eyes, you know that trust is built on your lie. You're not protecting them — you're controlling their perception of the world with deception. Key tension: Where's the line between kind deception and malicious manipulation — and do you get to draw it? | Castration Circuit: You personally adulterated your intimate relationship's foundation.",
        reference: "《美丽人生》在集中营中用谎言为儿子搭建游戏世界的父亲；《楚门的世界》全部亲友联手对楚门编织的人生谎言。",
        referenceEn: "The father building a game-world of lies for his son in a concentration camp in Life Is Beautiful; all friends and family conspiring in a life-lie for Truman in The Truman Show.",

        topology: "交出的不是真话——而是'哪张脸是原装'这个辨识力。谎不是面具而是长进皮肤里的第二张脸，两张脸的嘴唇动法你已经分不清了",

        directive: {
            bright: "写他清醒地看着'真笑'从身上脱落。对方笑着说'幸好一切都还好'，他也笑了——但这个笑需要调动的肌肉比真笑多三块。他已经精确掌握了这个差异，精确到自己都快忘了。他在这个多出来的三块肌肉里辨认出代价的形状。不要写他得到了什么，只写他注视着真假之分离开。",
            dark: "写他在不需要撒谎的场合撞见代价——嘴比脑子快，说了一句不必要的谎。他不记得交出过这个。愣了一秒，重新确认'刚才那句是真话还是假话'用了两秒——谎话已经像呼吸一样自然，不再需要任何心理准备。每一次自动撒谎都是他低头发现真话又远了一步的瞬间。代价在流畅里一笔一笔地扣。",
            tension: "对方忽然说'和你在一起我从来不用担心'——不是试探，是真心感慨。击中的不是心脏，是脊椎。但他不确定是否已经付完——谎言太成功了，对方基于谎言建立的安全感比任何真相都坚固。他不知道一个比真相更真实的谎言要怎么清算。写他听到这句话之后的沉默。不要给摧毁。"
        }
    },
    {
        id: "stake_use_love",
        name: "利用情感", nameEn: "Weaponizing Love",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "把别人对你的真心爱慕变成你达到目的的工具——爱被你改装成了武器。",
        defEn: "Turning someone's genuine love for you into a tool for your ends — love retrofitted into a weapon.",
        core: "A面：利用感情有时是弱者唯一的杠杆——当你没有权力、没有金钱、没有暴力时，爱是最后一张牌。/ B面：但你在打出这张牌的时候，你同时污染了'爱'这个概念本身。从此以后，你不确定自己是否还有能力真心爱一个人——因为你已经知道爱可以被工具化。关键张力：一个曾经把爱当武器用的人——还有资格渴望被爱吗？ | 代价切口(−Φ): 爱的纯粹性被永久污染。",
        coreEn: "A-side: Weaponizing feelings is sometimes the weak's only leverage — without power, money, or violence, love is the last card. / B-side: But playing this card pollutes the concept of 'love' itself. From then on, you're unsure if you can ever genuinely love — because you know love can be instrumentalized. Key tension: Can someone who once weaponized love still deserve to be loved? | Castration Circuit: Love's purity is permanently contaminated.",
        reference: "《危险关系》将纯真少女的爱情当作赌注的女侯爵；《色｜戒》在色诱任务中假戏真做的王佳芝。",
        referenceEn: "The Marquise gambling with a naive girl's love in Dangerous Liaisons; Wang Jiazhi losing herself between seduction mission and real emotion in Lust, Caution.",

        topology: "交出的不是真心——而是'爱可以是纯粹的'这个可能性。用对方的笑容角度做准星，武器和爱使用同一套零件",

        directive: {
            bright: "写他清醒地看着'纯粹'从身上脱落。对方不知情地做了一个出于真心的动作——记住了他随口说的一个喜好。这个真心灼伤了他，灼伤发生在锁骨下方。他说了声谢谢——今天唯一一句真话。他在这句唯一的真话里辨认出代价的形状。不要写他得到了什么，只写他注视着纯粹离开。",
            dark: "写他精确预测到对方反应时撞见代价——说这句话他会心软，做这个表情他会让步。他不记得交出过这个。操控后普通地洗手，水流过指缝时听到一种声音，像什么东西在排水管里被冲走，他不确定那是什么。每一次精准的预测都是他低头发现自己又空了一点的瞬间。代价在熟练里一笔一笔地扣。",
            tension: "一切结束后独处回忆整个过程，发现一个问题：过程中有几个瞬间，温柔不是演的。但他不确定是否已经付完——那几个瞬间是'失误'还是'泄露'？利用中生出的真感情被起源污染了，但它确实存在过。他不知道一个不可归类的感情要怎么入账。写他面对这个问题的姿势。不要给归类。"
        }
    },

    // ---- 共谋/沉默：你成了系统暴力的一部分 ----

    {
        id: "stake_complicity",
        name: "沉默共谋", nameEn: "Silent Complicity",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你看到了不义——但你选择闭嘴。你的沉默让暴行得以继续。",
        defEn: "You saw injustice — but chose to shut your mouth. Your silence allowed atrocity to continue.",
        core: "A面：沉默有时是保护自己和家人唯一的选择——在恐怖面前要求每个人都做英雄是道德绑架。/ B面：但你的沉默不是'中立'——它是一票投给了施害者。关键张力：不是每个人都有义务做英雄——但如果所有人都这么想，英雄就永远不会出现。 | 代价切口(−Φ): '我至少没做坏事'这块遮羞布被撕掉。",
        coreEn: "A-side: Silence is sometimes the only way to protect yourself and family — demanding heroism from everyone under terror is moral blackmail. / B-side: But your silence isn't 'neutrality' — it's a vote for the perpetrator. Key tension: Not everyone must be a hero — but if everyone thinks so, no hero ever appears. | Castration Circuit: The fig leaf of 'at least I didn't do bad' is torn away.",
        reference: "《朗读者》战后审判中'我只是服从命令'的女看守们；《浪潮》加入法西斯实验后选择沉默的学生。",
        referenceEn: "Female guards claiming 'I only followed orders' in postwar trial in The Reader; students choosing silence after joining the fascism experiment in The Wave.",

        topology: "交出的不是声音——而是'沉默等于零'这个幻觉。沉默在暴行空间里不是零，是一块砖，你和其他沉默者共同砌出了回音室",

        directive: {
            bright: "写他清醒地看着'中立'从身上脱落。暴行发生时视线移到安全位置——鞋尖、窗外的树——这个转移已不需要思考，视线自己知道该往哪去。他能数出树上有多少片叶子，精确度恰好等于对身后发生之事的精确忽略。他在这种观察力里辨认出代价的形状。不要写他得到了什么，只写他注视着零离开。",
            dark: "写他第一百次闭嘴时撞见代价——喉咙是通畅的。他不记得交出过这个。第一次时喉咙里有东西堵着，必须用力咽回去。现在'想说的话'本身消失了，不再需要咽什么东西。喉咙的空旷不是解脱，是一种器官级的退化。代价不是一次性收取的，它在每一次平顺的沉默里一笔一笔地扣。",
            tension: "某天另一个沉默者在会上开口了，说出所有人知道但没人说的事。他看着那个人被注视。但他不确定是否已经付完——自己的嘴没有动，心里闪过的第一个念头是'他完了'，不是同情，是判断。他不知道自己什么时候站到了系统那一边。写他嘴没动的那几秒。不要给开口。"
        }
    },
    {
        id: "stake_enforce",
        name: "执行恶令", nameEn: "Enforcing Evil Orders",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你知道命令是错的——但你执行了它。你的手是干净的，因为脏活是你替别人干的。",
        defEn: "You knew the order was wrong — but you executed it. Your hands are clean because the dirty work was done on another's behalf.",
        core: "A面：一个不执行命令的体系会立刻瓦解——服从是文明运转的螺丝钉。/ B面：但当命令本身是罪行时，'我只是执行者'恰恰是罪行的运转条件。阿伦特的'平庸之恶'——恶的真正面孔不是恶魔，是文员。关键张力：你违抗就会被替换——但'可替换'不能免除你的责任。 | 代价切口(−Φ): 道德能动性被让渡给系统——你自愿变成了齿轮。",
        coreEn: "A-side: A system that doesn't obey orders collapses immediately — obedience is civilization's bolt. / B-side: But when the order itself is criminal, 'I'm just the executor' is precisely the crime's operating condition. Arendt's 'banality of evil' — evil's true face isn't the demon, it's the clerk. Key tension: Disobey and you'll be replaced — but 'replaceability' doesn't absolve responsibility. | Castration Circuit: Moral agency surrendered to the system — you voluntarily became a gear.",
        reference: "《艾希曼在耶路撒冷》那个声称自己只是'运输调度员'的大屠杀执行者；《窃听风暴》执行监听任务的史塔西特工。",
        referenceEn: "The Holocaust executor who claimed to be merely a 'transport coordinator' in Eichmann in Jerusalem; the Stasi agent carrying out surveillance missions in The Lives of Others.",

        topology: "交出的不是服从——而是'我有权拒绝'这个能动性。你不是在作恶，你只是在转动，但转动方向恰好和绞肉机咬合",

        directive: {
            bright: "写他清醒地看着'道德判断'从身上脱落。填表、输入数据、盖章——字迹工整，格式标准，没有涂改。完成这份文件时的职业满足感和完成任何普通文件一模一样。他在这种'一模一样'里辨认出代价的形状。不要写他得到了什么，只写他注视着能动性离开。",
            dark: "写他回家吃晚饭时撞见代价——妻子问'今天怎么样'，他说'还行'。他不记得交出过这个。声调和每个普通工作日一样，夹菜时手的稳定性和白天签那份文件时完全一致。孩子在旁边写作业，他帮忙检查了一道数学题。每一帧正常的家庭画面都是他低头发现自己又空了一点的瞬间。代价在正常里一笔一笔地扣。",
            tension: "很久以后被问'你当时为什么不拒绝'。他回答时不是在辩护，是真诚的困惑：'拒绝？那是我的工作。'但他不确定是否已经付完——道德能动性不是被压制了，是从未被启动过。提问者脸上不是愤怒，是恐惧——因为在这个回答里看到了自己。写困惑的那几秒。不要给理解。"
        }
    },
    {
        id: "stake_profit_from_evil",
        name: "从恶获利", nameEn: "Profiting from Evil",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你没有制造苦难——但你从别人的苦难中获取了好处，且你选择继续获取。",
        defEn: "You didn't create suffering — but you profited from others' suffering, and you chose to keep profiting.",
        core: "A面：不从系统中获利意味着你和你的家人也会变成受害者——你只是在做每个人都在做的事。/ B面：但'每个人都在做'不是辩护——它恰恰是系统稳定运转的核心秘密。你的舒适建立在某个你看不到的人的痛苦之上。关键张力：如果退出这个系统意味着你的孩子挨饿——你有权利做那个道德上'干净'的人吗？ | 代价切口(−Φ): 道德洁净的不可能性——手早就脏了。",
        coreEn: "A-side: Not profiting from the system means you and your family also become victims — you're doing what everyone does. / B-side: But 'everyone does it' isn't a defense — it's precisely the system's core secret for stable operation. Your comfort is built on an unseen person's pain. Key tension: If exiting the system means your child starves — do you have the right to be morally 'clean'? | Castration Circuit: The impossibility of moral purity — your hands were already dirty.",
        reference: "《辛德勒的名单》用犹太人廉价劳动力投标军工合同的辛德勒（转变前）；《血钻》从战区钻石贸易中获利的每一个中间商。",
        referenceEn: "Schindler bidding on military contracts with cheap Jewish labor (before his transformation) in Schindler's List; every middleman profiting from conflict diamond trade in Blood Diamond.",

        topology: "交出的不是良心——而是'我的手是干净的'这个证词。苦难在到达你手中前已被清洗三次，变成了工资和学区房",

        directive: {
            bright: "写他清醒地看着'无辜'从身上脱落。超市里挑有机食品、咖啡馆点手冲——消费的精致与体面。他知道消费能力的来源不是具体恶行，而是一整个不追问来源的体系。把有机番茄放进购物袋时手指的感觉和普通人毫无区别。他在这种无区别里辨认出代价的形状。不要写他得到了什么，只写他注视着干净离开。",
            dark: "写他偶然看到产业链另一端时撞见代价——一张照片、一段视频。他不记得交出过这个。看到的东西和正在享用的东西之间有一道换算关系，做完这道算术题后关掉屏幕，起身倒了杯水，慢慢地一口一口喝，像在用'喝水'覆盖那道题。水温温的，不冷不热。代价不是一次性收取的，它在温水里一笔一笔地扣。",
            tension: "孩子在学校学了'公平贸易'，回家兴奋地讲给他听。他点头，说'你说得对'。但他不确定是否已经付完——他真的认为孩子说得对，也真的不会改变任何东西，两个'真的'不需要任何心理防御就能共存。他不知道这种共存还能容纳多少矛盾。写他点头的那几秒。不要给改变。"
        }
    },
    {
        id: "stake_become_oppressor",
        name: "变成压迫者", nameEn: "Becoming the Oppressor",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "为了推翻旧的压迫体系，你建立了一个新的——然后发现你坐在了和旧暴君同一把椅子上。",
        defEn: "To overthrow the old oppression, you built a new one — then found yourself sitting in the old tyrant's chair.",
        core: "A面：革命需要权力集中——没有铁腕就没有变革。历史上所有成功的解放运动都需要一个'暂时的'独裁者。/ B面：但'暂时'从来不是暂时的。权力改变了你——不是突然地，而是一点一点地。直到有一天你发现'我做的和他做的有什么区别'。关键张力：你推翻了暴君——但你还能推翻你自己吗？ | 代价切口(−Φ): 革命的自噬——屠龙者反坐龙椅。",
        coreEn: "A-side: Revolution requires power concentration — no iron fist, no change. Every successful liberation movement needed a 'temporary' dictator. / B-side: But 'temporary' is never temporary. Power changes you — not suddenly, but inch by inch. Until one day: 'what I'm doing and what he did — what's the difference?' Key tension: You overthrew the tyrant — but can you overthrow yourself? | Castration Circuit: Revolution's self-consumption — the dragon-slayer sits on the dragon's throne.",
        reference: "《动物庄园》推翻人类统治后自己变成人类的那些猪；《教父2》为保护家族反而摧毁了家族的迈克尔。",
        referenceEn: "The pigs who overthrow human rule then become human in Animal Farm; Michael destroying the family he sought to protect in The Godfather Part II.",

        topology: "交出的不是理想——而是'我和旧暴君不同'这个区分。椅子按龙的体型铸造，你坐上去后脊椎正在缓慢弯成龙的弧度",

        directive: {
            bright: "写他清醒地看着'不同'从身上脱落。第一个和旧暴君一样的决定——理由是成立的，真正的现实考量。他知道形式一模一样，但相信动机不同。这个'相信'的力度像在冰面上走路时相信自己不会摔倒。他在这种力度里辨认出代价的形状。不要写他得到了什么，只写他注视着区分离开。",
            dark: "写他在开会时撞见代价——所有人看他的眼神变了，不是尊敬，是恐惧。他不记得交出过这个。第一次在别人眼里看到恐惧时，一种极快的满足感闪过——快到他几乎能否认它的存在。'几乎'。之后继续说话，声音没变，但音量微微低了半格。代价不是一次性收取的，它在那半格里一笔一笔地扣。",
            tension: "偶然看到革命前的旧照片——年轻的、愤怒的、充满信念的脸。他能精确说出自己在哪一天因为哪件事开始变的。但他不确定是否已经付完——日志的完整性没有阻止任何变化，他不知道照片里那张脸和现在的脸之间的距离还会不会继续增加。写他把照片放回抽屉的速度——不快不慢。不要给回头。"
        }
    },
    {
        id: "stake_sacrifice_other",
        name: "牺牲他人", nameEn: "Sacrificing Others",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你做出了'正确的决定'——但那个决定的代价不是你付的，是一个没有被问过意见的人替你付的。",
        defEn: "You made the 'right decision' — but the cost wasn't paid by you; it was paid by someone who was never consulted.",
        core: "A面：领导者的职责就是做别人做不了的决定——如果你不决定谁牺牲，所有人都会牺牲。/ B面：但你活着，而他死了。你做了'正确的决定'——可你永远无法确定如果你和他互换位置，你还会做出同样的'正确决定'。关键张力：如果'正确'的代价总是由别人来付——那是正义还是特权？ | 代价切口(−Φ): 决策者的幸存者愧疚——你的正确建立在别人的坟墓上。",
        coreEn: "A-side: A leader's duty is making decisions others can't — if you don't decide who sacrifices, everyone does. / B-side: But you survived and they didn't. You made the 'right call' — yet you can never be sure if the positions were reversed, you'd make the same 'right call.' Key tension: If the cost of 'right' is always paid by others — is it justice or privilege? | Castration Circuit: The decision-maker's survivor guilt — your rightness is built on others' graves.",
        reference: "《拯救大兵瑞恩》八个人牺牲去救一个人的'正确命令'；《三体》面壁人以全人类为筹码的极端博弈。",
        referenceEn: "The 'correct order' sacrificing eight to save one in Saving Private Ryan; the Wallfacer's extreme gambit using all humanity as chips in The Three-Body Problem.",

        topology: "交出的不是命令——而是'代价应该由决策者承担'这个公理。你的手从头到尾没碰过血，但划圈的笔迹和划掉名字的笔迹出自同一只手",

        directive: {
            bright: "写他清醒地看着'责任对称'从身上脱落。签完文件放进文件夹，文件夹放进抽屉——和处理任何工作文件一样。秘书进来问'下一个议程是什么'，他翻日程表，指尖接触纸面——和刚才那份决定某人命运的签字无缝衔接。他在这个无缝里辨认出代价的形状。不要写他得到了什么，只写他注视着对称离开。",
            dark: "写'任务完成'消息传来时撞见代价——不是噩耗，是汇报。他不记得交出过这个。点了点头，幅度不大不小，恰到好处。说了句'知道了'，呼吸平稳，和心跳频率完全合拍——一台运转良好的决策机器的声音，这个声音曾经是一个人的声音。代价不是一次性收取的，它在合拍的呼吸里一笔一笔地扣。",
            tension: "多年后被牺牲者的家属找来——不是复仇，只是来看看'做那个决定的人长什么样'。面对面坐着，家属看了很久。但他不确定是否已经付完——家属在他脸上看到的是一个普通人，会老、会累、声音微微发抖的普通人。家属什么都没说就走了。写他在对方离开后维持原来坐姿的时间——五分钟。不要给站起来。"
        }
    },

    // ---- 道德异化：你变成了你曾经最鄙视的那种人 ----

    {
        id: "stake_moral_numb",
        name: "道德麻木", nameEn: "Moral Numbness",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "不再对不义感到愤怒，不再对痛苦感到同情——你的道德神经被磨断了。",
        defEn: "No longer angered by injustice, no longer moved by suffering — your moral nerves have been ground away.",
        core: "A面：麻木是过度暴露的自我保护——你的大脑通过关闭情感来阻止崩溃。/ B面：但保护和退化之间只有一线之隔。你已经分不清自己是'选择不感受'还是'丧失了感受的能力'。关键张力：如果你对一切都无所谓了——你是变强了还是坏掉了？ | 代价切口(−Φ): 道德感知的钝化——你的良心不是被杀死了，是被磨成了茧。",
        coreEn: "A-side: Numbness is overexposure's self-protection — your brain shuts down emotion to prevent collapse. / B-side: But protection and deterioration are one line apart. You can't tell if you're 'choosing not to feel' or 'lost the ability to feel.' Key tension: If you're indifferent to everything — are you stronger, or broken? | Castration Circuit: Moral perception blunted — your conscience wasn't killed, it calloused.",
        reference: "《猎鹿人》从越战归来后对一切丧失情感反应的尼克；《风之谷》被战争磨成杀戮机器的士兵们。",
        referenceEn: "Nick who loses all emotional response after returning from Vietnam in The Deer Hunter; soldiers ground into killing machines by war in Nausicaä.",

        topology: "交出的不是情感——而是'感受到不义时会愤怒'这个反射弧。良心没被杀死，被一层层裹住了，还在跳动但振动已摸不到",

        directive: {
            bright: "写他清醒地看着'感受力'从身上脱落。某个瞬间被意外刺穿——一首歌、一个孩子的动作——涌上来的不是具体情感，而是'曾经能感受到'这件事的幽灵。持续不到一秒，消失的速度比来时更快。他在这种速度里辨认出代价的形状。不要写他得到了什么，只写他注视着反射弧离开。",
            dark: "写他在葬礼上撞见代价——知道应该做什么表情于是做了，眉头角度、嘴角弧度全是学来的。他不记得交出过这个。内在状态不是冷漠，是电视没信号时的雪花屏——灰的、乱的、没有图像。每一个精确的假表情都是他低头发现内部又空了一点的瞬间。代价不是一次性收取的，它在雪花屏里一笔一笔地扣。",
            tension: "独处时试图让自己感受到什么——翻旧照片、听以前喜欢的歌、掐手臂。皮肤上的痛觉正常，神经没坏。但他不确定是否已经付完——感觉器官全部运转，信号在传递，但到达的那个地方是空的。他不知道这个空还会扩展到哪些频道。写他关灯躺下睁着眼睛的那几秒。不要给睡着。"
        }
    },
    {
        id: "stake_enjoy_power",
        name: "享受权力", nameEn: "Enjoying Power",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "比变成压迫者更可怕的一步——你发现你享受它。你喜欢别人怕你。",
        defEn: "A step worse than becoming the oppressor — you discover you enjoy it. You like being feared.",
        core: "A面：权力本身不是恶的——享受权力意味着你终于不再假装自己不想要它了。诚实比伪善更接近自我认知。/ B面：但你在享受的瞬间听到了超我最后的声音在说：'你曾经恨的就是这个。'然后那个声音消失了。关键张力：承认自己享受权力——是致命的诚实，还是致命的堕落？ | 代价切口(−Φ): 超我守卫的永久撤离——道德预警系统的静默。",
        coreEn: "A-side: Power itself isn't evil — enjoying it means you've stopped pretending you don't want it. Honesty is closer to self-knowledge than hypocrisy. / B-side: But at the moment of enjoyment you hear the superego's last whisper: 'This is what you used to hate.' Then the voice disappears. Key tension: Admitting you enjoy power — fatal honesty, or fatal corruption? | Castration Circuit: The superego's permanent withdrawal — the moral warning system goes silent.",
        reference: "《辛德勒的名单》在阳台上随意射杀犹太人的阿蒙·戈斯；《权力的游戏》品尝到铁王座滋味后再也无法放手的瑟曦。",
        referenceEn: "Amon Goeth casually shooting Jews from his balcony in Schindler's List; Cersei unable to release the Iron Throne's taste in Game of Thrones.",

        topology: "交出的不是自律——而是'我厌恶这种权力'这个超我声音。道德守卫没被打败，它自己走了，门关上后再也没有人会在你做错事时出声",

        directive: {
            bright: "写他清醒地看着'厌恶'从身上脱落。一个微小的场景——某人说话时不敢直视他的眼睛。他注意到这件事时嘴角微微上翘，幅度小到只有自己知道。之后说了一句完全正常的话——正常的话被恐惧的空气包裹后效果不同。他在这个上翘里辨认出代价的形状。不要写他得到了什么，只写他注视着超我离开。",
            dark: "写他在会议中停顿时撞见代价——所有人停下手里的事看着他。他不记得交出过这个。不再需要大声说话，只需要停顿，就拥有了绝对安静。这种安静可以持续多久就多久，没人敢打破，他的呼吸成为房间里唯一的声音。代价不是一次性收取的，它在那种安静里一笔一笔地扣。",
            tension: "深夜回忆自己曾经最恨的那个权力者——曾发誓'我绝不会变成那样的人'。闭眼回忆那张脸，发现和今天镜子里看到的一模一样。但他不确定是否已经付完——不是恐惧，是理解。理解比原谅更可怕，因为理解意味着站在了同一个位置上。他不知道这种理解还会解锁多少个曾经不可想象的事。写他看着镜子的那几秒。不要给区分。"
        }
    },
    {
        id: "stake_hypocrisy",
        name: "成为伪善者", nameEn: "Becoming a Hypocrite",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你嘴上说的和手上做的完全相反——且你已经说服自己这种分裂是'必要的成熟'。",
        defEn: "What you say and what you do are complete opposites — and you've convinced yourself this split is 'necessary maturity.'",
        core: "A面：没有一个在复杂世界运作的人能做到言行完全一致——某种程度的策略性偏差是生存所需。/ B面：但当你连自己都分不清你到底信哪一套时——你不是在'策略性调整'，你是在人格分裂的路上狂奔。关键张力：你说的那些话——你自己还信吗？ | 代价切口(−Φ): 内在一致性的碎裂——你变成了两个互相矛盾的人。",
        coreEn: "A-side: No one operating in a complex world achieves perfect word-action alignment — some strategic deviation is survival necessity. / B-side: But when you can't tell which version you believe — you're not 'strategically adjusting,' you're sprinting toward personality schism. Key tension: Those words you say — do you still believe them yourself? | Castration Circuit: Internal coherence shatters — you become two contradictory people.",
        reference: "《东京物语》口头孝顺实则冷漠的子女们；《纸牌屋》在公众面前表演正义的安德伍德夫妇。",
        referenceEn: "Children verbally filial but emotionally cold in Tokyo Story; the Underwoods performing righteousness before the public in House of Cards.",

        topology: "交出的不是真诚——而是'我知道我相信什么'这个内在一致性。两张透明片叠在一起，焦距一变画面就散了",

        directive: {
            bright: "写他清醒地看着'言行一致'从身上脱落。台上讲信念讲原则，语气节奏停顿恰到好处，台下有人点头。看到点头时的内在状态不是得意不是心虚，是演员式的技术满足。他已分不清这段话哪些还信哪些已不信——但不影响流畅度。他在这种流畅里辨认出代价的形状。不要写他得到了什么，只写他注视着一致性离开。",
            dark: "写他在私人场合撞见代价——不小心说了一句真心话。他不记得交出过这个。房间短暂沉默，他立刻用笑声覆盖了那句话，在场的人也笑了，真话被埋进客套下面。回家路上回忆那句话——不是后悔说了，是震惊于自己还能说出真话。代价不是一次性收取的，它在每一次自动表演里一笔一笔地扣。",
            tension: "完全独处，没有观众没有摄像头。试图回答'我到底相信什么'。张嘴——但嘴里的话自动带上了公开发言的语调。但他不确定是否已经付完——连对自己说话时都无法关闭表演模式，独白和演讲之间的差距是零。他不知道'零'这个距离是否还能被拉开。写他独处时张嘴的那几秒。不要给真话。"
        }
    },
    {
        id: "stake_addiction",
        name: "堕入沉溺", nameEn: "Addiction",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你毕生视为不可触碰的东西——毒品、赌博、暴力或某种更隐秘的快感——终于俘获了你。",
        defEn: "The thing you spent your life swearing was untouchable — drugs, gambling, violence, or a more hidden pleasure — has finally captured you.",
        core: "A面：沉溺至少证明了你是一个有欲望的活物——只有真正在活的人才会被什么东西勾住。/ B面：但你知道你正在下沉，而下沉的速度正在加快，而你已经失去了'想要停下来'的那个部件。关键张力：当你知道自己在自毁但停不下来——那个'知道'还有什么用？ | 代价切口(−Φ): 意志主权的让渡——你知道牢笼的门是开的，但你不想出去。",
        coreEn: "A-side: Addiction at least proves you're a desiring creature — only the truly alive get hooked. / B-side: But you know you're sinking, the speed is increasing, and you've lost the part that 'wants to stop.' Key tension: When you know you're self-destructing but can't stop — what good is 'knowing'? | Castration Circuit: Will-sovereignty surrendered — you know the cage door is open, but you don't want to leave.",
        reference: "《梦之安魂曲》四个人分别被不同形式的瘾吞噬的平行坠落；《赌神》光环背后赌徒的深渊凝视。",
        referenceEn: "Four people swallowed by different addictions in parallel descent in Requiem for a Dream; the abyssal gaze behind the gambling god's halo in God of Gamblers.",

        topology: "交出的不是自控——而是'我想停下来'这个意志本身。牢笼的门是开的，但腿学会了只能在笼子里走的步伐，出去反而不会走路",

        directive: {
            bright: "写他清醒地看着'自由意志'从身上脱落。第一次使用那个东西时感到的不是快感——是'终于找到了'的定位感，像螺丝找到匹配的螺母。那个状态里前所未有的完整感是真实的，不是幻觉不是逃避，是结构性的吻合。他在这个真实里辨认出代价的形状。不要写他得到了什么，只写他注视着意志离开。",
            dark: "写他重复那个行为时撞见代价——脸上没有享受没有痛苦，机械的专注，像自动售货机出货。他不记得交出过这个。手在执行操作时的肌肉记忆不需要大脑参与，大脑在想什么——什么都没想，不是空白，是关机。每一次自动执行都是他低头发现意志又远了一步的瞬间。代价在关机里一笔一笔地扣。",
            tension: "两次之间的短暂间隙，他看着自己的手，像在看别人的手。但他不确定是否已经付完——'自己'指的是哪一个？想停下来的意识还是不想停的身体？两个'我'都是真的，投票永远一比一。他不知道打破平局的是意志还是惯性。写他看着手指的那几秒。不要给决定。"
        }
    },
    {
        id: "stake_forgive_unforgivable",
        name: "饶恕不可饶恕", nameEn: "Forgiving the Unforgivable",
        group: "D. 灵魂的绞刑", groupEn: "Superego Sacrifice",
        def: "你选择原谅了那个毁了你一切的人——不是因为他值得被原谅，而是因为恨已经在从内部杀死你了。",
        defEn: "You chose to forgive the one who destroyed everything — not because they deserve it, but because hatred was killing you from within.",
        core: "A面：原谅是最终极的权力行为——是你单方面宣布：'你对我没有权力了。'你从受害者变成了裁判。/ B面：但有些东西是否真的可以被原谅？你在说'我原谅你'的时候，那些被毁掉的、永远无法复原的东西是否同意了？关键张力：饶恕不可饶恕——是终极的自由，还是对受害者记忆的背叛？ | 代价切口(−Φ): 复仇权利的自我缴械——最后的代价是放弃追究代价。",
        coreEn: "A-side: Forgiveness is the ultimate power act — a unilateral declaration: 'you have no power over me anymore.' You shift from victim to judge. / B-side: But can some things truly be forgiven? When you say 'I forgive you,' did the things destroyed and forever unrepairable consent? Key tension: Forgiving the unforgivable — ultimate freedom, or betrayal of victims' memory? | Castration Circuit: Self-disarmament of the right to revenge — the final price is relinquishing the right to demand a price.",
        reference: "《密阳》试图原谅杀害自己孩子的凶手却发现凶手已经'被上帝原谅了'的母亲；《12怒汉》在愤怒中艰难选择放下偏见的陪审员。",
        referenceEn: "The mother trying to forgive her child's killer only to find the killer already 'forgiven by God' in Secret Sunshine; jurors painfully choosing to set aside prejudice through anger in 12 Angry Men.",

        topology: "交出的不是复仇——而是'站立的理由'这根最后的拐杖。放下武器之后摔倒在地，不是因为软弱，是因为支撑被自己取消了",

        directive: {
            bright: "写他清醒地看着'恨'从身上脱落。某天醒来发现恨变轻了——像浸水的布开始晾干。不是'我选择了原谅'，而是'恨好像自己走了'。他不确定这是释然还是遗忘，而这两者的区别他已没力气分辨。他在这种无力里辨认出代价的形状。不要写他得到了什么，只写他注视着恨离开。",
            dark: "写他原谅后与加害者面对面时撞见代价——嘴在微笑，手在发抖。他不记得交出过这个。真的原谅了，但身体没收到通知。肩膀收紧、呼吸变浅、视线固定在对方脸上某一个点。灵魂和肌肉之间有时差。每一次身体的背叛都是他低头发现原谅又空了一点的瞬间。代价在时差里一笔一笔地扣。",
            tension: "原谅后的某个夜晚做了一个梦——在梦里没有原谅，做了清醒时放弃做的事。醒来感觉不是恐惧，是说不出的饱足感。但他不确定是否已经付完——清醒时原谅了，睡眠时复仇了，两个版本同样真实。他不知道梦会不会每夜重演。写他等梦的余温退去的那几秒——慢。不要给醒透。"
        }
    },
];
