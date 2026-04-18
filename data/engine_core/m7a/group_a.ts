import { LibraryItemDef } from '../../../types';

export const VERDICTS_GROUP_A: LibraryItemDef[] = [
    // ============================================================
    // GROUP A. 幻灭的裁决 (Verdict of the Void) — 15 Items
    // 象征裁决：欲望被证伪 + 主体瓦解或空转
    // 核心句式："一切都是幻觉，而我甚至不剩一个可以叫做'我'的东西。"
    // 回溯效果：M5（挣扎）被回溯性地揭示为徒劳。
    // ============================================================

    // ── 1 ──
    {
        id: "m7a_closed_loop",
        name: "闭环", nameEn: "The Closed Loop",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "终点与起点重合。主体回到了出发的坐标。",
        defEn: "The endpoint coincides with the origin. The subject returns to starting coordinates.",
        core: "A面：回到原点不等于白走——同一个位置，不同的海拔。回归本身可以是穿越。 / B面：但你的反抗可能恰恰是维持循环的燃料——你越逃，齿轮越紧。你从未离开过。 | 缝合点(◇)：M2 被揭示为起点的裂缝——他一直沿弧线返回；M5 被揭示为圆周运动而非直线；M6 沿途丢失之物恰在起点等候。",
        coreEn: "A-side: Returning doesn't mean wasted — same spot, different altitude. Return itself can be traversal. / B-side: Your resistance may fuel the cycle — the harder you flee, the tighter the gears. You never left. | Quilting Point(◇): M2 revealed as origin's crack — tracing the arc back; M5 as circular motion, not linear; M6 as things dropped along the way waiting at the start.",
        topology: "终点与起点坐标重合。M5 的轨迹被回溯性地揭示为弧线而非直线。",
        topologyEn: "Endpoint and origin coordinates coincide. M5's trajectory is retroactively revealed as an arc, not a line.",
        directive: {
            bright: "他走了很远的路，最后站回了出发的地方。但站在原点的这个人已经不是出发的那个人了。让读者在结尾重新看见开头——同样的街道、同样的门、同样的光线——但一切都因为他的旅程而改变了重量。回来本身就是穿越。他带着伤痕站在原点，而那些伤痕是唯一的证据，证明他真的走过那条路。",
            dark: "他以为自己在直线逃离，最终站回了出发的原点。他的反抗、牺牲、逃亡——全是圆周运动。让读者在结尾突然想起开头，带着一种胃里下坠的感觉：「原来他一直在往回走。」他的挣扎恰恰是维持循环的燃料。齿轮需要他的愤怒才能转动。他从未离开过。",
            tension: "他站在起点。看起来一模一样。他可能变了——也可能只是以为自己变了。让读者在结尾面对一个无法判断的时刻：这是顿悟还是诅咒？同一个坐标，但我们不确定站在上面的是一个新人还是一个从未逃出循环的囚徒。把这个问题悬在那里。不要替读者回答。"
        },
        reference: "《千与千寻》千寻回到隧道口，发绳证明一切真实发生过；《恐怖游轮》杰西第无数次登上那艘船。",
        referenceEn: "Chihiro returning to the tunnel mouth in Spirited Away, the hair tie proving it all happened; Jess boarding the ship yet again in Triangle."
    },

    // ── 2 ──
    {
        id: "m7a_hollow_grail",
        name: "空心的圣杯", nameEn: "The Hollow Grail",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "追逐抵达终点，容器之中无物。终极目标在被获得的瞬间露出空心。",
        defEn: "The chase reaches its end; the vessel contains nothing. The ultimate goal reveals itself as hollow the instant it is obtained.",
        core: "A面：空心恰恰是最重要的发现——宝物从来不是重点，追逐本身塑造了你。空杯是终极的镜子。 / B面：但如果你需要那个宝物来证明一切牺牲的正当性呢？你付了全额，柜台显示器跳出一个零。 | 缝合点(◇)：M3（欲望）被揭示为通往不存在之地的地图——路线是真的，目的地是虚构的；M5 被揭示为快递员的腿脚——负责送达，但包裹是空的；M6 被揭示为无法退款的预付款。",
        coreEn: "A-side: Hollowness IS the discovery — the treasure was never the point; the chase shaped you. The empty cup is the ultimate mirror. / B-side: But what if you needed the treasure to justify all sacrifice? You paid in full; the register reads zero. | Quilting Point(◇): M3 becomes a map to a nonexistent place — route real, destination fictional; M5 becomes a courier's legs — delivered, but the package was air; M6 becomes a non-refundable prepayment.",
        topology: "目标被获取。获取的瞬间与目标的空洞化同时发生。",
        topologyEn: "The goal is obtained. The instant of acquisition coincides with the goal's hollowing.",
        directive: {
            bright: "他终于得到了梦寐以求的东西。打开的瞬间——里面是空的。但空本身就是答案。让读者感到一种奇异的释然：追逐本身塑造了他，路线是真实的，即使目的地是虚构的。空杯是一面镜子——照出的不是失败，而是他在路上变成的那个人。那条路才是圣杯。",
            dark: "他终于打开了它。里面是空的。让读者和他一起经历那个打开盖子的瞬间。他用血和时间支付了全额，而柜台显示器跳出一个零。不是「还不够」——是「从来就没有」。所有的地图都是真的。目的地是虚构的。他付了全额运费，快递箱里只有空气。",
            tension: "他终于得到了。盖子掀开。里面是空的。但他的表情不是绝望——是一种更深的、更安静的、无法命名的东西。让读者分不清这是顿悟还是崩溃。也许追逐本身就是意义——也许这只是失败者安慰自己的说辞。把两种可能性同时放在读者面前。不要选择。"
        },
        reference: "《公民凯恩》权力帝国的终点不过是一块童年雪橇；《潜伏》无数同志流血换来的情报被证实为废纸。",
        referenceEn: "The power empire's terminus is merely a childhood sled in Citizen Kane; intelligence bought with blood proven worthless in Lurk."
    },

    // ── 3 ──
    {
        id: "m7a_hollow_victory",
        name: "空转的胜利", nameEn: "The Hollow Victory",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体确实赢了——但在胜利完成的瞬间，发现自己内部已被掏空。赢来的不是满足，而是真空。",
        defEn: "The subject truly won — but at the instant of victory, discovers they've been hollowed out. What was won isn't fulfillment but vacuum.",
        core: "A面：你赢了——没有人能否认。在所有的幻灭中，这是唯一你确实得到了想要之物的。 / B面：但得到之后呢？欲望的引擎在到达终点后直接熄火。你被扔进「接下来做什么」的真空，而这个真空比任何失败都更可怕。 | 缝合点(◇)：M3（欲望）被揭示为活着的唯一理由——而你刚刚亲手实现了它，现在你没有理由了；M5 被揭示为一枚火箭——燃料耗尽后只剩空壳在惯性中飘；M6 被揭示为：胜利本身就是代价。",
        coreEn: "A-side: You won — undeniable. Among all disillusions, this is the only one where you got what you wanted. / B-side: But then what? Desire's engine dies at the finish line. You're stranded in a 'what now' vacuum worse than any failure. | Quilting Point(◇): M3 becomes the only reason you lived — now fulfilled, now purposeless; M5 becomes a rocket — empty shell drifting after burnout; M6: victory itself IS the price.",
        topology: "欲望被实现。实现的瞬间与欲望本身的消失重合。",
        topologyEn: "Desire is fulfilled. The instant of fulfillment coincides with desire's own disappearance.",
        directive: {
            bright: "他赢了。彻底地、不可否认地赢了。奖杯在手里，温热而真实。让读者感受到这份胜利的饱满——它是真的，他值得拥有它。但在饱满的深处有一颗种子：「然后呢？」这颗种子不急着发芽。让它安静地躺在胜利的底部，像一枚等待被发现的硬币。",
            dark: "他赢了。而在赢的那一秒，驱动他整个人生的引擎熄火了。不是「还不够」——是「接下来做什么」这个问题让他窒息。让读者感到：欲望实现的瞬间就是欲望死亡的瞬间。他一辈子都在为这一刻活着——现在这一刻过去了。火箭的燃料烧完了。剩下的只是一个空壳在惯性中飘。",
            tension: "他赢了。奖杯在手里，温热而真实。但他的心跳不对——不是激动，是一种他从未感受过的安静。太安静了。让读者在胜利的欢呼中听到一种不对劲的沉默。也许这就是满足。也许引擎刚刚熄火了。我们不确定。他自己也不确定。"
        },
        reference: "《教父》迈克尔击败所有敌人后独坐黑暗书房，眼中没有任何活着的东西；《醉乡民谣》歌手终于上台，表演完毕后台下空无一人。",
        referenceEn: "Michael sitting alone in darkness after defeating all enemies in The Godfather; the singer performing to an empty audience in Inside Llewyn Davis."
    },

    // ── 4 ──
    {
        id: "m7a_misplaced_object",
        name: "错置的客体", nameEn: "The Misplaced Object",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "赢得的恰恰是有毒的，亲手摧毁的恰恰是想保护的。欲望瞄准了镜像的反面。",
        defEn: "What was won is poisonous; what was destroyed was what needed protection. Desire aimed at the mirror's reverse.",
        core: "A面：发现错误本身是残酷的清醒——大多数人一辈子不知道自己追错了东西。 / B面：但这种清醒来得太晚了。你已经亲手毁掉了真正想要的。你的获奖感言就是认罪供词。 | 缝合点(◇)：M3（欲望）被揭示为一面哈哈镜——追逐的是宝物的倒影；M5 被揭示为摧毁力而非建设力——越努力，破坏越多；M6 被揭示为：不是你付出了什么，而是你亲手制造了什么。",
        coreEn: "A-side: Discovering the error is a cruel clarity — most people never know they chased the wrong thing. / B-side: But this clarity comes too late. You've destroyed what you truly wanted. Your victory speech is your confession. | Quilting Point(◇): M3 becomes a funhouse mirror — chasing the reflection; M5 becomes destructive force — the harder you tried, the more you destroyed; M6: not what you paid, but what you made.",
        topology: "欲望的目标与实际后果呈镜像倒置。M5 的每一步建设被回溯性地揭示为摧毁。",
        topologyEn: "Desire's target and actual consequences are mirror-inverted. Every constructive step of M5 is retroactively revealed as destruction.",
        directive: {
            bright: "他赢了——然后发现赢得的东西恰恰是有毒的。但发现错误本身是一种清醒。大多数人一辈子都不知道自己追错了方向。让读者感到：这种残酷的清醒虽然来得太晚，但至少他看到了。他不再是一个盲目的人。他站在废墟中，眼睛终于睁开了。",
            dark: "他赢了——然后发现：赢得的东西恰恰是有毒的，亲手摧毁的恰恰是他最想保护的。让读者和他同时意识到这个错位，在最晚的时刻。他的胜利演讲就是他的认罪书。最残忍的不是失败——是发现你的全部努力精确地指向了错误的方向。他追了一面哈哈镜里的倒影。",
            tension: "他赢了。然后一个细节让他停下来——某个不该在那里的东西，某个不该消失的东西。让读者和他一起慢慢拼凑出那个画面：也许他追错了方向。也许没有。但有什么东西不对。让这种「不对」像耳鸣一样悬在故事结尾。不解释。让读者自己发现那面哈哈镜。"
        },
        reference: "《老男孩》复仇者在胜利后发现报复的对象正是自己苦寻的亲女儿；《七宗罪》抓到凶手的代价是妻子的头颅被装进盒子送来。",
        referenceEn: "The avenger discovering his target is his own daughter in Oldboy; catching the killer at the cost of a wife's head in a box in Se7en."
    },

    // ── 5 ──
    {
        id: "m7a_contingent_causation",
        name: "偶然的因果", nameEn: "Contingent Causation",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "一切重大后果的根源被揭示为一个微不足道的偶然。后果与起因之间的量级严重失衡。",
        defEn: "The root cause of all major consequences is revealed as a trivial contingency. Outcomes are severely disproportionate to their cause.",
        core: "A面：如果连最大的苦难都是偶然的，你就不欠任何人一个解释。没有宇宙在惩罚你。偶然性是终极的减负。 / B面：但减负的代价是尊严。你的痛苦不是试炼——它是噪声。你宁可有一个残忍的原因，也不愿接受「没有原因」。连悲剧的资格都被取消了。 | 缝合点(◇)：M6（代价）被揭示为对一个不存在的赌局下的注——筹码是真的，赌桌是假的；M5 被揭示为在空剧场里独自演完的整出戏；M2 被揭示为统计噪声——不是命运，是随机数。",
        coreEn: "A-side: If even the greatest suffering is contingent, you owe no one an explanation. No universe is punishing you. Contingency is the ultimate unburdening. / B-side: But unburdening's price is dignity. Your pain isn't a trial — it's noise. You'd rather have a cruel cause than none. Even the qualification for tragedy is revoked. | Quilting Point(◇): M6 becomes a bet on a nonexistent game — chips real, table fake; M5 becomes a play performed alone in an empty theater; M2 becomes statistical noise — not fate, just random.",
        topology: "因果链的量级严重失衡。巨大的后果被回溯性地追溯至一个微不足道的随机事件。",
        topologyEn: "The causal chain's scale is severely imbalanced. Enormous consequences are retroactively traced to a trivial random event.",
        directive: {
            bright: "所有的苦难被追溯到一个偶然——一个巧合，一个误会。但这意味着他不欠任何人一个解释。没有宇宙在惩罚他。让读者感到一种奇异的轻：没有人在针对他。没有阴谋。他的苦难不是审判，不是试炼。偶然性是最终的减负——虽然残忍，但也自由。",
            dark: "所有重大后果的根源，最终被揭示为一个微不足道的偶然——一个误会，一个巧合，一个随机事件。他的全部痛苦没有意义，不是因为他不够勇敢，而是因为宇宙从来没在看。让读者在结局感到：连悲剧的资格都被取消了——他的苦难不是惩罚，是噪声。",
            tension: "所有的痛苦最终指向一个荒谬的小事——一个巧合，一个错过的电话，一秒钟的时间差。让读者在这个揭示面前感到一种无法安放的东西：他宁可有一个残忍的原因，也不愿接受这个。但接受还是不接受——宇宙并不在意。把这种失重感留在结尾。"
        },
        reference: "《迷雾》父亲在绝望中射杀家人——几秒后救援车队驶过；《巴别塔》横跨三大洲的悲剧链的源头只是一个孩子朝天开了一枪。",
        referenceEn: "The father shooting his family seconds before rescue arrives in The Mist; the tragedy chain across three continents originating from a child's random shot in Babel."
    },

    // ── 6 ──
    {
        id: "m7a_structural_impotence",
        name: "结构性无力", nameEn: "Structural Impotence",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体拼尽血肉，但由物理法则和社会结构组成的铁壁未产生一丝松动。",
        defEn: "The subject exhausts all flesh and blood, but the iron wall of physical laws and social structures doesn't budge.",
        core: "A面：拼尽一切而不动摇——这证明了勇气是真实的。结构没被撼动不等于努力没有价值。 / B面：但这不是「虽败犹荣」——你的全力一击对结构来说等于零。连被记住的资格都没有。 | 缝合点(◇)：M5（驱力）被揭示为在摩天大楼前用拳头锤墙——感人但物理上等于零；M4 被揭示为不是对手——而是物理常数；M3 被揭示为把不可能浪漫化——把「不可能」当成了「困难」。",
        coreEn: "A-side: Exhausting everything without budging — this proves courage was real. Structure not moving doesn't mean effort had no value. / B-side: But this isn't 'honorable defeat' — your full strike registers as zero. You don't even qualify to be remembered. | Quilting Point(◇): M5 becomes punching a skyscraper — touching but physically zero; M4 becomes not an opponent but a physical constant; M3 becomes romanticizing the impossible — mistaking 'impossible' for 'difficult.'",
        topology: "个体力量与结构性力量的量级差使所有 M5 输出归零。M4 不是对手，是物理常数。",
        topologyEn: "The magnitude gap between individual and structural force zeroes all M5 output. M4 is not an opponent but a physical constant.",
        directive: {
            bright: "他没有退缩，拼尽了一切。墙没有动。但他的拳印留在了墙上——虽然不会改变墙的结构，但每一个路过的人都会看到有人曾在这里用力过。让读者感到：结构没被撼动不等于努力没有价值。他的勇气是真实的。而真实本身就是一种留痕。",
            dark: "他没有退缩，拼尽了一切。但那面墙连裂缝都没有。让读者感到的不是悲壮，而是一种数学意义上的碾压——他的全力一击，对这个结构来说，等于零。不是他不够勇敢。是这个问题比任何个人都大。他的拳头是真的，墙也是真的。但量级不在一个世界里。",
            tension: "他拼尽了一切。墙没有动。他的拳头在流血。但他不确定墙是不是稍微震了一下——也许震了，也许没有，也许那只是他自己的骨头在碎。让读者在悲壮和徒劳之间找不到落脚点。他的努力可能有意义。也可能完全没有。把这两种可能性叠在一起。"
        },
        reference: "《飞越疯人院》墨菲试图搬起水泥水槽砸窗——纹丝不动；《大明劫》游医的医术在明朝腐败体制面前形同虚设。",
        referenceEn: "McMurphy trying to lift the concrete sink in One Flew Over the Cuckoo's Nest — it doesn't budge; the doctor's skills rendered useless before the corrupt Ming dynasty in Fall of Ming."
    },

    // ── 7 ──
    {
        id: "m7a_symbolic_erasure",
        name: "符号的抹除", nameEn: "Symbolic Erasure",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体从符号网络中被移除。户籍、记忆、历史不再包含其痕迹。世界继续运转，仿佛此人从未存在。",
        defEn: "The subject is removed from the symbolic network. Registry, memory, history no longer contain their trace. The world continues as if this person never existed.",
        core: "A面：被系统抹除也意味着不再被系统控制。没有档案就没有债务，没有身份就没有枷锁。抹除是最极端的自由。 / B面：但自由的反面是虚无。你的痛苦、爱和挣扎统统降格为从未发生的事件。连「被遗忘」本身也会被遗忘。 | 缝合点(◇)：M2 被揭示为让你进入系统视野的致命曝光——被看见即被标记删除；M4 被揭示为不是阻挡你——而是归档你以便日后清除；M5 被揭示为加速了自己被处理的进程。",
        coreEn: "A-side: Being erased from the system means freedom from its control. No file, no debt; no identity, no shackle. Erasure is the most extreme freedom. / B-side: But freedom's reverse is void. Your pain, love, struggle all downgrade to events that never happened. Even 'being forgotten' will be forgotten. | Quilting Point(◇): M2 becomes fatal exposure — being seen was being flagged; M4 becomes not blocking but filing for future removal; M5 becomes accelerating your own deletion.",
        topology: "主体从符号网络中被完全移除。所有指向 M1 的索引被清零。",
        topologyEn: "The subject is completely removed from the symbolic network. All indices pointing to M1 are zeroed.",
        directive: {
            bright: "他的名字从系统中消失了。但这也意味着系统不再拥有他。没有档案就没有债务，没有身份就没有枷锁。让读者感到一种极端的自由：他是唯一一个不在任何人的名单上的人。这种自由当然是可怕的——但也是纯粹的。他终于只属于自己了。",
            dark: "他的名字从世界的记忆中被移除了。户籍、档案、所有人的回忆——都不再包含他的痕迹。世界继续运转，仿佛他从未存在。让读者感到的不是死亡的恐惧——而是比死亡更深一层的东西：「从未存在过」。死者至少还有墓碑。他连墓碑都没有。",
            tension: "他从所有的记录中消失了。世界继续运转。让读者在结尾感到一种奇异的不确定：这是解放还是毁灭？他终于不被任何系统控制了——但也没有任何系统证明他活过。自由和虚无之间的界限在这里变得模糊。让读者自己在这条线上站定。"
        },
        reference: "《1984》温斯顿被「汽化」——所有证明他存在过的记录都被改写；《千与千寻》忘记名字就永远无法回去。",
        referenceEn: "Winston 'vaporized' in 1984 — all records rewritten; forget your name and you can never return in Spirited Away."
    },

    // ── 8 ──
    {
        id: "m7a_retroactive_nullification",
        name: "回溯性消除", nameEn: "Retroactive Nullification",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "通过某种机制，发生过的苦难、爱和牺牲在本体论层面被抹零。故事变成了一段从未发生过的历史。",
        defEn: "Through some mechanism, all suffering, love, and sacrifice are nullified at the ontological level. The story becomes a history that never happened.",
        core: "A面：如果一切可以被抹零，伤害也被抹零了——受害者不再受苦。这是一种极端的仁慈。 / B面：但仁慈的代价是意义的彻底清零。你的牺牲不是「没有回报」——而是「从未存在」。连一个悲剧英雄的墓碑都没有。 | 缝合点(◇)：整个 M2-M6 链条被揭示为一段将被删除的临时文件——不是悲剧也不是喜剧，是一次将被覆写的草稿。M6 的残酷达到极致：你付出了一切，但「付出」这个动作本身也被撤销了。",
        coreEn: "A-side: If everything can be zeroed, harm is also zeroed — victims no longer suffer. An extreme mercy. / B-side: But mercy's price is total meaning erasure. Your sacrifice didn't go unrewarded — it never existed. Not even a tombstone as tragic hero. | Quilting Point(◇): The entire M2-M6 chain becomes a temp file scheduled for deletion — not tragedy, not comedy, a draft to be overwritten. M6's cruelty reaches its apex: you paid everything, but the act of paying was also revoked.",
        topology: "整个 M2-M6 链条在本体论层面被抹零。事件不是被遗忘——是从未发生。",
        topologyEn: "The entire M2-M6 chain is zeroed at the ontological level. Events aren't forgotten — they never happened.",
        directive: {
            bright: "一切被抹零了——包括所有的痛苦。没有人再受苦了。让读者感到一种极端的仁慈：如果有一种方式可以撤销所有的伤害，即使代价是撤销所有的意义，这是不是值得的？让这个问题停留在一种平静的悲悯中——他选择了让所有人都不再疼。包括他自己。",
            dark: "通过某种方式——时间回溯、系统重启、记忆清除——发生过的一切在根源上被取消了。不是被遗忘，是从未发生过。他的牺牲不是「没有回报」——而是「从未存在」。让读者感到：连悲伤的权利都被取消了。最残忍的仁慈：所有的痛苦都被擦掉了，但所有的爱也一起擦掉了。",
            tension: "一切被重置了。干干净净。没有痛苦的痕迹，也没有爱的痕迹。让读者面对一个无法回答的问题：抹掉所有苦难的同时抹掉所有意义——这是救赎还是最终的剥夺？他的牺牲被撤销了。他的爱也被撤销了。这两件事是同一件事。让读者坐在这个矛盾里。"
        },
        reference: "《蝴蝶效应》主角选择在子宫里自杀以消除所有悲剧链——也消除了所有爱与友谊；《暖暖内含光》互相抹除记忆后，爱情的痕迹被彻底清零。",
        referenceEn: "The protagonist suiciding in the womb to erase all tragedy chains — also erasing all love in The Butterfly Effect; love's traces technically zeroed in Eternal Sunshine of the Spotless Mind."
    },

    // ── 9 ──
    {
        id: "m7a_automaton_awakening",
        name: "自动机的觉醒", nameEn: "Awakening of the Automaton",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体发现自己并非拥有自由意志的行动者，而是某种上层系统的耗材或预设程序。",
        defEn: "The subject discovers they are not a free agent but a consumable or preset program of some higher system.",
        core: "A面：觉醒本身是自由意志的最后一次闪光——即使你是代码，意识到自己是代码的那个瞬间是真实的。 / B面：但超越只持续一秒。你无法改写源代码。觉醒之后你依然按预设运行——只是现在你知道了。这比无知更残酷。 | 缝合点(◇)：M3（欲望）被揭示为植入的预设参数——你以为是你的渴望，其实是运行手册的第三行；M4 被揭示为不是阻挡你——而是对你执行标准操作流程；M5 被揭示为也在预设之中——你的叛逆是剧本的一部分。",
        coreEn: "A-side: Awakening is free will's final flash — even as code, the instant you realize you're code is real. / B-side: But transcendence lasts one second. You can't rewrite your source code. After awakening you still run on preset logic — only now you know. Crueler than ignorance. | Quilting Point(◇): M3 becomes an implanted parameter — your desire was line three of the operating manual; M4 becomes not blocking but executing standard procedure on you; M5 becomes also within the preset — your rebellion is part of the script.",
        topology: "M1 被揭示为系统预设而非自主个体。觉醒瞬间与无法改写的确认同时发生。",
        topologyEn: "M1 is revealed as a system preset, not an autonomous individual. The moment of awakening coincides with the confirmation of unchangeability.",
        directive: {
            bright: "他发现自己是程序的一部分。但发现本身——意识到「我是代码」的那一秒——是真实的。让读者感到：即使一切都是预设的，觉醒本身是自由意志最后的、也是最耀眼的闪光。那一秒不属于任何系统。它只属于他。即使下一秒他又回到了预设轨道，那一秒永远是真的。",
            dark: "他发现自己不是自由的行动者——而是某个更大系统的预设程序。他的欲望是被植入的，他的反抗是剧本写好的桥段。觉醒的那一秒是真实的——但也只有那一秒。之后他依然按预设运行，只是现在他知道了。让读者感到：知道自己是棋子，比不知道更痛苦。",
            tension: "他看到了代码。他看到了自己在代码里。觉醒的那一秒是真实的——但他不确定这次「觉醒」本身是不是也被写好了。让读者在自由意志和宿命之间感到一种无法着地的眩晕：也许觉醒是最后的自由。也许觉醒也是预设。我们永远无法从内部分辨这两者。"
        },
        reference: "《楚门的世界》楚门撞上片场的天空边界——三十年人生是一档真人秀；《西部世界》德洛丽丝发现每一次「觉醒」都是被设计好的循环。",
        referenceEn: "Truman hitting the sky-wall in The Truman Show — his life was a reality show; Dolores discovering every 'awakening' was a designed loop in Westworld."
    },

    // ── 10 ──
    {
        id: "m7a_signifier_castration",
        name: "能指的阉割", nameEn: "Castration of the Signifier",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体获取了真相，却被永久剥夺了表达的能力。真相永远卡在喉咙里。",
        defEn: "The subject acquires truth but is permanently stripped of the ability to express it. Truth is forever stuck in the throat.",
        core: "A面：知道真相但说不出来——你成为了真相最忠实的容器。你的沉默比话语更有重量。 / B面：但容器是无用的如果没人来倒出内容。真相随你的沉默慢慢腐烂——不是被敌人摧毁，而是被时间溶解。 | 缝合点(◇)：M2 被揭示为一把双刃刀——它同时刺穿了你的无知和你的声带；M5 被揭示为隔音室里的呐喊；M6 被揭示为：不是失去了什么，而是失去了告诉别人你失去了什么的能力。",
        coreEn: "A-side: Knowing truth but unable to speak it — you become truth's most faithful vessel. Your silence weighs more than words. / B-side: But a vessel is useless if no one pours it out. Truth rots with your silence — dissolved by time, not enemies. | Quilting Point(◇): M2 becomes a double-edged blade — piercing both ignorance and vocal cords; M5 becomes a scream in a soundproof room; M6: not losing something, but losing the ability to tell anyone what you lost.",
        topology: "真相被获取。表达真相的能力被同步剥夺。知道与说出之间产生永久断裂。",
        topologyEn: "Truth is acquired. The ability to express it is simultaneously stripped. A permanent fracture forms between knowing and telling.",
        directive: {
            bright: "他知道了真相。说不出来——但他的沉默比话语更有重量。让读者感到：他成为了真相最忠实的容器。不是所有的真理都需要被说出口。有些真相只能被活出来。他的存在本身就是证词。沉默不是软弱——是一种更深的承担。",
            dark: "他找到了真相。然后被永久地剥夺了说出真相的能力——因为创伤、因为权力、因为语言本身的失效。真相卡在他的喉咙里，随着沉默慢慢腐烂。让读者感到一种窒息：知道了一切，但永远开不了口。最终连他自己都分不清保存的是真相还是幻觉。",
            tension: "他知道了一切。但他说不出来。让读者分不清：是他不能说，还是他说了没人听，还是语言本身无法承载他知道的东西？他的嘴巴张开又合上。真相在他的喉咙里变形、腐蚀、变成了另一种东西。也许沉默是最忠实的容器。也许沉默是最慢的溶解。"
        },
        reference: "《熔炉》聋哑儿童目睹了一切暴行却无法发声指证；《沉默》神父在信仰与酷刑之间最终踩下圣像——真理死在了沉默中。",
        referenceEn: "Deaf-mute children witnessing atrocities yet unable to testify in Silenced; the priest stepping on the sacred image — truth dying in silence in Silence."
    },

    // ── 11 ──
    {
        id: "m7a_suspension_of_desire",
        name: "欲望的搁浅", nameEn: "Suspension of Desire",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体进入永恒的期盼状态。等待的对象永不到来，但等待本身不让他死去也不让他活着。",
        defEn: "The subject enters eternal anticipation. The awaited object never arrives, but waiting itself lets them neither die nor live.",
        core: "A面：还在等待意味着还没彻底放弃——你的希望虽然错位，但它让你活着。等待是最后一种存在证明。 / B面：但这种「活着」是精致的腐烂。你的希望不是弹药——是防腐剂。它不让你冲锋，也不让你死去。你被保鲜在「快到了」的永恒中。 | 缝合点(◇)：M3（欲望）被揭示为从天花板垂下的绳子——你以为通向出口，它实际上是把你绑在原地的锚绳；M5 被揭示为原地踏步——能量全花在「等待」这个动作上；M6 被揭示为缓慢的蒸干——一种拿不出账单的支出。",
        coreEn: "A-side: Still waiting means you haven't given up — misplaced hope keeps you alive. Waiting is the last proof of existence. / B-side: But this 'alive' is elegant decay. Hope isn't ammunition — it's preservative. It won't let you charge or die. You're preserved in eternal 'almost.' | Quilting Point(◇): M3 becomes a rope from the ceiling — you thought it led out, it's an anchor; M5 becomes marching in place — all energy spent on waiting itself; M6 becomes slow evaporation — expenditure without a receipt.",
        topology: "M3 永远不被实现也不被放弃。主体被锁定在期盼与搁浅之间的永恒阈限。",
        topologyEn: "M3 is neither fulfilled nor abandoned. The subject is locked in an eternal threshold between anticipation and stranding.",
        directive: {
            bright: "他还在等。这意味着他还没有放弃。让读者感到等待本身的尊严——虽然门一直半开着，但他选择站在门前不走。也许等到的东西永远不来。但等待本身让他活着。他的希望可能是错位的——但它是真的。在所有的姿态中，等待是最安静的勇气。",
            dark: "他进入了永恒的等待。等待的东西永远不来，但等待本身不让他死去也不让他活着。门永远半开，里面的光永远在诱惑，但门缝不会再大一毫米。让读者感到一种精致的腐烂：他的希望不是力量——是防腐剂。它把他保鲜在「快到了」的永恒里。",
            tension: "他在等。门半开着。光从门缝里漏出来。他不确定门后面有没有东西。但他没有离开。让读者在这个画面里感到一种无法命名的东西——不是悲伤，不是希望，是两者之间的一种状态。也许等待是最后的尊严。也许等待是最精致的牢笼。他不知道。我们也不知道。"
        },
        reference: "《等待戈多》两个流浪汉日复一日等一个永不出现的人；《霸王别姬》程蝶衣一生等段小楼「认真唱一次」——等到自刎。",
        referenceEn: "Two tramps waiting day after day for someone who never comes in Waiting for Godot; Cheng Dieyi waiting a lifetime for one sincere performance in Farewell My Concubine."
    },

    // ── 12 ──
    {
        id: "m7a_death_without_gaze",
        name: "失去凝视的死亡", nameEn: "Death Without the Gaze",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "主体死在无人的角落。没有观众的死亡被剥夺了一切象征意义，降格为有机物的静默降解。",
        defEn: "The subject dies in a deserted corner. Death without audience is stripped of all symbolic meaning, reduced to silent degradation of organic matter.",
        core: "A面：不被凝视的死亡是最纯粹的死亡——没有表演成分。你的死只属于你。 / B面：但「只属于你」也意味着没有人在乎。你连悲剧英雄的资格都没有——悲剧需要观众。你的死和路边被压死的猫没有结构性区别。 | 缝合点(◇)：M5（英雄行为）被揭示为没有观众的独角戏——你以为有人在看，但剧场是空的；M6 被揭示为没有收据的支出——你付了，但没有系统记录这笔账；M4 被揭示为从一开始就不在场——记分板后面是空的。",
        coreEn: "A-side: Ungazed death is the purest — no performance element. Your death belongs only to you. / B-side: But belonging only to you means no one cares. You don't even qualify as tragic hero — tragedy needs an audience. Your death is structurally identical to a cat crushed on the roadside. | Quilting Point(◇): M5 becomes a one-man show in an empty theater; M6 becomes an expenditure without a receipt; M4 becomes absent from the start — nothing behind the scoreboard.",
        topology: "死亡发生在凝视缺席的场所。象征意义因无观众而归零。M5 降格为无人见证的独角戏。",
        topologyEn: "Death occurs in a place absent of gaze. Symbolic meaning zeroes due to no audience. M5 degrades to an unwitnessed one-man show.",
        directive: {
            bright: "他死在了一个安静的地方。没有镜头，没有遗言的听众。但他的死只属于他自己——没有表演成分，没有叙事包装。让读者感到一种纯粹：这是最干净的死亡。不是英雄的死法，不是悲剧的死法——是一个人的死法。而一个人的死，自有它的重量。",
            dark: "他死在了一个没有人看到的地方。没有遗言的听众，没有镜头的特写，没有英雄叙事的包装。他的死和路边一只被车压过的猫没有任何区别。让读者感到的不是悲伤——而是一种让人不舒服的冷：连悲剧都需要观众，而他连观众都没有。",
            tension: "他死了。安安静静地。没有人看到。让读者在这个事实面前感到一种无法安放的东西——不是悲伤（悲伤需要对象），不是愤怒（愤怒需要敌人）。是一种更底层的不安：他的死是纯粹的还是被浪费的？没有观众的死亡是最纯的还是最空的？不回答。让沉默替他说话。"
        },
        reference: "《老无所依》男主角死在无人汽车旅馆——甚至不是被主反派杀死的；《可可西里》巡山队长被盗猎者随手一枪打死在荒漠中，镜头甚至没给特写。",
        referenceEn: "The protagonist dying in an empty motel, not even by the main antagonist in No Country for Old Men; the patrol captain shot casually in the desert, no close-up given in Kekexili."
    },

    // ── 13 ──
    {
        id: "m7a_absence_of_other",
        name: "大他者的缺席", nameEn: "Absence of the Big Other",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "在承受终极苦难后向天空质问，发现那里没有上帝、没有反派、没有裁判——只有无差别的沉默。",
        defEn: "After enduring ultimate suffering and questioning the sky, the subject discovers no God, no villain, no judge — only indifferent silence.",
        core: "A面：没有人在迫害你——你的苦难不是阴谋，是纯粹的偶然。你从未被针对过，你是自由的。 / B面：但这种自由最可怕。你宁可有一个残忍的上帝——被惩罚好过不被注意。不是「上帝已死」——是从来没有过上帝。 | 缝合点(◇)：M4 被揭示为自动运行的程序——没有操作员，没有恶意，只有冰冷的算法；M2 被揭示为随机数生成器的输出——不是命运，是噪声；M6 被揭示为无人签收的汇款——你付了，但收款地址不存在。",
        coreEn: "A-side: No one is persecuting you — your suffering isn't conspiracy, just contingency. You were never targeted; you're free. / B-side: But this freedom is the most terrifying. You'd rather have a cruel God — being punished beats being unnoticed. Not 'God is dead' — there never was a God. | Quilting Point(◇): M4 becomes an auto-running program — no operator, no malice, just cold algorithms; M2 becomes output of a random number generator; M6 becomes a remittance nobody signed for — you paid, but the address doesn't exist.",
        topology: "M4 的操作员位置被揭示为空席。苦难的发出者不存在。整个 M2-M6 链条失去对话对象。",
        topologyEn: "M4's operator seat is revealed as vacant. The sender of suffering doesn't exist. The entire M2-M6 chain loses its addressee.",
        directive: {
            bright: "他向天空质问——发现那里什么都没有。但这也意味着：没有人在惩罚他，没有阴谋在针对他。他的苦难是偶然的。让读者感到一种苦涩的自由：没有上帝也意味着没有债务。他不欠任何人一个解释。他的人生不是一场审判。他只是一个在风中站着的人。这已经够了。",
            dark: "他承受了终极的苦难，向天空质问——发现那里什么都没有。没有上帝在考验他，没有反派在迫害他，没有任何系统在运转。只有沉默。让读者感到的不是愤怒，而是一种深渊般的空：他宁可有一个残忍的上帝，也不愿面对这个事实——从来没有人在看。",
            tension: "他向天空质问。天空沉默。让读者和他一起停留在这个沉默里——不急着赋予它意义。也许沉默意味着自由。也许沉默意味着被遗弃。也许沉默就是沉默。让读者在这三种可能性之间感到一种垂直的坠落感。没有底。"
        },
        reference: "《第七封印》骑士与死神对弈只换来深渊的沉默——上帝从未应答；《利维坦》小人物追问到最后只剩空白的墙壁。",
        referenceEn: "The Knight receiving only silence from the abyss in The Seventh Seal; the small man questioning until only blank walls remain in Leviathan."
    },

    // ── 14 ──
    {
        id: "m7a_buried_in_real",
        name: "埋葬于实在", nameEn: "Buried in the Real",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "费尽千辛万苦找到的真相，被系统随意装进木箱编号，塞入无边档案库永远吃灰。",
        defEn: "Sacred truth recovered through immense hardship is casually crated, numbered, and shoved into an infinite archive to gather dust forever.",
        core: "A面：被系统封存至少说明真相是真的——如果不危险，系统不会费力封它。 / B面：但重要和有效是两回事。你的发现安静地躺在第10943号木箱里，和一万个「重要发现」一起腐烂。系统的胃口大到可以吞噬一切奇迹而不消化任何一个。 | 缝合点(◇)：M2 被揭示为注定被归档的冒险——你在为仓库添一个编号；M5 被揭示为快递员——负责送到门口，门里发生什么与你无关；M6 被揭示为运费——你用生命换了一张快递单据。",
        coreEn: "A-side: Being archived proves the truth is real — if it weren't dangerous, the system wouldn't bother sealing it. / B-side: But important and effective are different things. Your discovery lies in crate #10943, rotting alongside 10,000 other 'important discoveries.' The system swallows all miracles without digesting any. | Quilting Point(◇): M2 becomes an adventure destined to be filed; M5 becomes a courier — delivered to the door, what happens inside is not your concern; M6 becomes shipping cost — life traded for a delivery receipt.",
        topology: "M5 的输出（真相）被系统接收但不被处理。归档行为使发现在功能层面等于未发现。",
        topologyEn: "M5's output (truth) is received by the system but not processed. The act of archiving makes the discovery functionally equivalent to undiscovered.",
        directive: {
            bright: "他费尽千辛万苦找到了真相——然后真相被系统封存了。但被封存至少证明它是真的。系统不会浪费力气去锁一件无关紧要的东西。让读者感到：真相在木箱里安静地等着。也许有一天，某个人会打开第 10943 号。他的工作没有白费——只是还没到时候。",
            dark: "他费尽千辛万苦找到了真相。然后真相被系统随意装进一只编号木箱，塞进一眼望不到头的仓库里永远吃灰。让读者感到的不是愤怒——而是一种官僚主义特有的恐怖：你的发现很重要。但重要和有效是两回事。系统的胃口大到能吞掉一切奇迹，而不消化任何一个。",
            tension: "真相被找到了。然后被装进了一只编号木箱。让读者在这个画面前感到一种不确定的恐惧：也许有一天有人会打开它。也许它会和一万个「重要发现」一起安静地腐烂。他的冒险是一次壮举还是一次快递服务？——他用生命换了一张无人签收的快递单据。让这个问题留在仓库的寂静中。"
        },
        reference: "《夺宝奇兵》约柜被装进木箱编号，堆入望不到头的政府仓库；《杀人回忆》真凶的线索随案件过期封存，化为死档。",
        referenceEn: "The Ark boxed and warehoused in Raiders of the Lost Ark; the killer's clues sealed as dead files in Memories of Murder."
    },

    // ── 15 ──
    {
        id: "m7a_entropic_zero",
        name: "熵增归零", nameEn: "Entropic Zero",
        group: "A. 幻灭的裁决", groupEn: "Verdict of the Void",
        def: "不是爆发也不是毁灭——一切纷争、情感与能量在漫长的消耗后被彻底抹平，变成一潭死水。",
        defEn: "Not explosion nor destruction — all conflicts, emotions, and energy are completely leveled after protracted attrition, becoming stagnant water.",
        core: "A面：热寂是最平等的状态——所有痛苦和快乐最终归于同一温度。没有人赢，也没有人输。 / B面：但平等本身是最大的不公平。受害者和施害者变成同一温度的灰烬——前者的苦难和后者的罪孽被视为热力学等价物。善恶账本被永久销毁。 | 缝合点(◇)：整个 M2-M6 链条被揭示为一台热力学引擎的工作周期——输入是冲突，燃烧是挣扎，输出是散热，最终结果是系统降回室温。M3（欲望）被揭示为熵减的幻觉——你以为在创造秩序，但只是把热量搬到了别处。",
        coreEn: "A-side: Heat death is the most equal state — all pain and joy reach the same temperature. No one wins, no one loses. / B-side: But equality is the greatest unfairness. Victim and perpetrator become ashes of the same temperature. History's moral ledger permanently destroyed by entropy. | Quilting Point(◇): The entire M2-M6 chain becomes a thermodynamic work cycle — input is conflict, combustion is struggle, output is heat dissipation, result is cooling to room temperature. M3 becomes the illusion of entropy reduction — you thought you were creating order, just moving heat elsewhere.",
        topology: "整个 M2-M6 链条作为热力学系统最终降回室温。所有差异——善恶、胜败、强弱——被热平衡抹除。",
        topologyEn: "The entire M2-M6 chain as a thermodynamic system eventually cools to room temperature. All differences — good/evil, win/loss, strong/weak — are erased by thermal equilibrium.",
        directive: {
            bright: "一切安静下来了。不是爆炸后的寂静——是漫长消耗后的平静。所有痛苦和快乐最终归于同一温度。让读者感到一种宇宙级的平等：没有人赢，也没有人输。在足够长的时间尺度上，一切都会冷却成同一种温度的灰烬。这是终结。也是和平。看你怎么定义。",
            dark: "不是爆发，不是毁灭。是一切纷争、爱恨和能量在漫长的消耗之后被彻底抹平。变成一潭死水。让读者感到一种宇宙级的冷漠：受害者和施害者变成了同一温度的灰烬。在足够长的时间尺度上，所有的善恶账本都会被热力学销毁。没有人赢，也没有人输。一切都只是在冷却。",
            tension: "一切安静了。不是突然的——是慢慢的、不可阻挡的。爱恨、对错、挣扎、放弃——全部变成了同一种温度。让读者感到一种无法对抗的东西：这不是敌人，这是物理定律。在足够长的时间里，一切差异都会被抹平。但此刻——此刻还没有完全冷却。还有最后一点温度。让读者感到那点温度的珍贵。和它正在消散的事实。"
        },
        reference: "《忧郁症》姐妹在行星撞地球前安静坐着——所有矛盾在终极毁灭面前被彻底抹平；《地久天长》失独夫妻在结尾化为院子里两具缓慢冷却的人形。",
        referenceEn: "Sisters sitting quietly before planetary impact in Melancholia — all conflicts leveled; the bereaved couple dissolving into two slowly cooling shapes in So Long, My Son."
    },
];
