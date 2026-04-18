import { LibraryItemDef } from '../../../types';

export const VERDICTS_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 毁灭的裁决 (Verdict of Ruin) — 12 Items
    // 象征裁决：欲望摧毁了主体，反抗导致不可逆的崩塌
    // 核心句式："他没有输——他把自己和整个棋盘一起炸了。"
    // 回溯效果：M5（反抗）被回溯性地揭示为引爆自身的引信。
    // ============================================================

    // ── 1 ──
    {
        id: "m7a_self_devouring",
        name: "自我吞噬", nameEn: "Self-Devouring",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "摧毁主体的不是外部敌人——是他自己的驱力。他的欲望像胃酸一样从内部把他消化了。",
        defEn: "What destroys the subject isn't an external enemy — it's their own drive. Their desire digests them from the inside like stomach acid.",
        core: "A面：被自己的火烧死至少证明你有火——大多数人连被点燃的资格都没有。你的强度是真实的。 / B面：但强度不区分方向。你的引擎没有问题——问题是你把油门焊死了。你不是撞了墙——你是用自己的速度把自己撕碎了。不需要外部的敌人——你就是自己最精密的毁灭装置。 | 缝合点(◇)：M5 被揭示为自体免疫反应——你的战斗力完好，但攻击目标是你自己的器官；M3 被揭示为无法满足的胃——不是食物不够，是胃在消化完食物后开始消化胃壁；M4 被揭示为从一开始就不存在——没有敌人，从来就没有。你一直在和自己打。",
        coreEn: "A-side: Being burned by your own fire proves you had fire — most people never qualify for ignition. Your intensity was real. / B-side: But intensity doesn't distinguish direction. Your engine is fine — the problem is you welded the throttle open. You didn't hit a wall — your own speed tore you apart. No external enemy needed — you are your own most precise destruction device. | Quilting Point(◇): M5 becomes autoimmune response — combat power intact, but targeting your own organs; M3 becomes an insatiable stomach — not insufficient food, but a stomach digesting its own walls; M4 becomes nonexistent from the start — no enemy, never was. You were always fighting yourself.",
        topology: "M5 的攻击对象被回溯性地揭示为 M1 自身——驱力完好，但矢量指向内部。",
        topologyEn: "M5's target is retroactively revealed as M1 itself — drive intact, but vector points inward.",
        directive: {
            bright: "没有人打败他——他的火是真实的，他的强度是真实的。大多数人一辈子都不会燃烧到这个温度。让读者感受到那份强度的尊严：被自己的火烧死至少证明你有火。他不是一个软弱的人——他是一个太烈的人。这份烈度本身值得被承认。",
            dark: "没有人打败他。他的敌人从头到尾都是他自己。他的欲望像胃酸一样把他从内部消化了——不是因为他不够强，恰恰是因为他太强了，强到自己的身体容不下自己的火。让读者感到：他不需要外部的敌人。他自己就是一枚对准自己的导弹。引擎完好，油门焊死，目的地是自我毁灭。",
            tension: "他在燃烧。从里面。让读者分不清这是一个人在发光还是在自焚——因为从外面看，两者一模一样。他的强度是真实的，他的毁灭也是真实的，而两者是同一件事的正反面。也许他本可以把火引向别处。也许那种火根本无法被引导。我们看着他烧，不知道该鼓掌还是该灭火。"
        },
        reference: "《黑天鹅》妮娜为了完美把自己跳碎了——玻璃碎片是她自己插进去的；《莫扎特传》萨列里被自己的嫉妒从内部腐蚀成空壳——上帝没有惩罚他，他自己完成了全部工作。",
        referenceEn: "Nina dancing herself to pieces for perfection — she inserted the glass shard herself in Black Swan; Salieri corroded from within by his own envy — God didn't punish him, he did all the work himself in Amadeus."
    },

    // ── 2 ──
    {
        id: "m7a_chain_collapse",
        name: "连锁崩塌", nameEn: "Chain Collapse",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "一道裂缝引发了结构性的全面崩溃。不是某个部分坏了——是整栋建筑从承重墙开始坍塌。",
        defEn: "One crack triggers total structural collapse. Not a part breaking — the entire building crumbles starting from the load-bearing wall.",
        core: "A面：能被一道裂缝摧毁的结构，说明它从一开始就是一座危楼——崩塌只是让真相提前显现。 / B面：但他在那座危楼里住了一辈子。他的全部记忆、关系和身份都在那栋楼里。裂缝不大——但它恰好出现在承重墙上。一面墙倒了，带走了天花板，天花板带走了楼上，楼上带走了一切。 | 缝合点(◇)：M2 被揭示为那道不起眼的裂缝——它看起来很小，但它恰好在承重点上；M5 被揭示为让裂缝扩散的震动——你的反抗不是修复，是加速了结构疲劳；M6 被揭示为不是支付的代价——而是被砸在底下的一切。",
        coreEn: "A-side: A structure destroyed by one crack was always a condemned building — collapse merely surfaced the truth early. / B-side: But they lived in that condemned building their whole life. All memories, relationships, and identity were inside. The crack was small — but located precisely on the load-bearing wall. One wall fell, taking the ceiling, taking the upper floor, taking everything. | Quilting Point(◇): M2 becomes that inconspicuous crack — small-looking but precisely on the load-bearing point; M5 becomes the vibration spreading the crack — your resistance didn't repair, it accelerated structural fatigue; M6 becomes not price paid but everything buried underneath.",
        topology: "M2 的微小裂缝恰好位于结构承重点，触发 M5 的每一次震动将裂缝传导至全部节点。",
        topologyEn: "M2's tiny crack is located precisely at the structural load-bearing point, and every vibration of M5 propagates the crack to all nodes.",
        directive: {
            bright: "一开始只是一件小事。然后一切倒了。但崩塌本身揭示了一个重要的真相：这栋楼从一开始就是危楼。让读者感到一种残酷的清醒——裂缝不是毁灭的原因，裂缝是让真相提前现身的契机。至少他现在知道了自己一直站在什么上面。至少他不再活在一座随时会塌的楼里了。",
            dark: "一开始只是一件小事——一个秘密被发现、一句话说错了、一个微不足道的失误。然后一切开始连锁倒塌。一面墙带走了天花板，天花板带走了楼上，楼上带走了一切。让读者感到一种建筑学意义上的恐惧：不是因为炸弹——是因为承重墙上有一道他从来没注意过的裂缝。他的全部人生就建在那道裂缝上面。",
            tension: "一件小事。一道裂缝。然后一切开始倒。让读者在连锁崩塌的过程中听到两种声音：一种说「这栋楼本来就不该存在」，另一种说「但他在里面住了一辈子」。两种声音都是对的。裂缝很小，代价无限大。我们看着一栋楼在慢镜头里倒塌，不知道该庆幸真相还是哀悼废墟。"
        },
        reference: "《一次别离》一个谎言引发了跨阶层的连锁崩塌——法律、婚姻、信仰依次倒下；《血色将至》丹尼尔的每一次胜利都在结构上削弱下一次的地基，直到最后在保龄球道上彻底崩溃。",
        referenceEn: "One lie triggering cross-class chain collapse — law, marriage, faith toppling sequentially in A Separation; every victory structurally weakening the next foundation until total breakdown on the bowling alley in There Will Be Blood."
    },

    // ── 3 ──
    {
        id: "m7a_mutual_annihilation",
        name: "相互毁灭", nameEn: "Mutual Annihilation",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体与对手同归于尽。两股力量精确地互相抵消，留下的是双方的废墟和第三方的沉默。",
        defEn: "Subject and antagonist destroy each other. Two forces cancel out precisely, leaving both in ruins and a third party's silence.",
        core: "A面：同归于尽至少证明了你和敌人是等量级的——你不是被碾压的蚂蚁，你是一颗同等当量的炸弹。 / B面：但等量级的对撞意味着双方归零。你消灭了敌人——但你也不在了。而那些你们争夺的东西——它还在那里，等着下一组人来抢。你们的战争在宇宙尺度上等于两颗尘埃的碰撞。 | 缝合点(◇)：M4 被揭示为你的镜像——你们的力量完全对等，这就是为什么谁也赢不了；M5 被揭示为加速度——两个人互相冲向对方，碰撞的能量等于两个速度之和；M6 被揭示为双倍的——你付出了一切，你的敌人也付出了一切，总负债是两条命。",
        coreEn: "A-side: Mutual destruction proves you were the enemy's equal — not an ant crushed, but a bomb of equal yield. / B-side: But equal-yield collision means both zero out. You eliminated the enemy — but you're also gone. What you fought over remains, waiting for the next pair. Your war at cosmic scale equals two dust particles colliding. | Quilting Point(◇): M4 becomes your mirror image — forces exactly equal, which is why neither wins; M5 becomes acceleration — two people charging each other, impact energy equals the sum of both speeds; M6 becomes doubled — you paid everything, your enemy paid everything, total debt is two lives.",
        topology: "M4 被揭示为 M1 的精确镜像——两股等量力量互相对撞，双方同时归零。",
        topologyEn: "M4 is revealed as M1's exact mirror image — two equal forces collide, both zeroing out simultaneously.",
        directive: {
            bright: "他赢了——以一种谁也无法否认的方式。他证明了自己和敌人是同一量级的。让读者感受到这份证明的重量：他不是蚂蚁，他不是被碾压的一方。他是一颗同等当量的炸弹。对等本身就是一种尊严。即使代价是双方归零——他至少不是跪着死的。",
            dark: "他赢了——但赢的方式是把自己和敌人一起炸了。两股力量精确地互相抵消，留下一片寂静的废墟。让读者感到一种数学上的残酷：他证明了自己和敌人是同一量级的——但证明的代价是双方归零。而他们争夺的那个东西还在那里，安静地等着下一组人来抢。",
            tension: "两个人同时倒下。烟尘散去后，废墟是对称的。让读者在这个画面里找不到赢家——也找不到输家。也许对等就是尊严。也许对等只是双倍的浪费。他们争夺的东西安静地躺在两具尸体之间。它还在。他们不在了。我们不确定这证明了什么。"
        },
        reference: "《老男孩》吴大修与李宥真的复仇与反复仇互相吞噬——两个人都输了，只有痛苦赢了；《猎鹿人》尼克和迈克尔在俄罗斯轮盘赌中互相毁灭——战争把他们变成了对方的子弹。",
        referenceEn: "Woo-jin and Dae-su's revenge and counter-revenge devouring each other — both lose, only pain wins in Oldboy; Nick and Michael destroying each other in Russian roulette — war turned them into each other's bullet in The Deer Hunter."
    },

    // ── 4 ──
    {
        id: "m7a_failed_sacrifice",
        name: "献祭失败", nameEn: "The Failed Sacrifice",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体以殉道者的姿态献出了一切——但没有人接收。祭坛是空的。牺牲被浪费在无人签收的地址上。",
        defEn: "The subject offers everything in a martyr's pose — but no one receives it. The altar is empty. Sacrifice is wasted on an unsigned address.",
        core: "A面：即使无人接收，牺牲的姿态本身是你选择的——它证明你有能力为了什么东西付出一切。这种能力不因结果而贬值。 / B面：但能力不因结果贬值是一种安慰奖。你死了——不是壮烈地死了，是白死了。你的血没有浇灌任何东西。祭坛是空的，观众席是空的，连你试图保护的人都不知道你做了什么。你的牺牲和一场交通事故在统计意义上没有区别。 | 缝合点(◇)：M5 被揭示为一枚投向空地址的信——热情是真的，但收件人不存在；M6 被揭示为全额预付但没有发货——你付了命，什么都没换到；M3 被揭示为一个关于牺牲本身的幻想——你以为牺牲一定有接收者，但宇宙没有这条规则。",
        coreEn: "A-side: Even unreceived, the sacrificial gesture was your choice — proving your capacity to give everything for something. This capacity isn't devalued by outcome. / B-side: But capacity not devalued by outcome is a consolation prize. You died — not gloriously, just pointlessly. Your blood watered nothing. The altar is empty, the seats are empty, even those you tried to protect don't know what you did. Statistically, your sacrifice is indistinguishable from a traffic accident. | Quilting Point(◇): M5 becomes a letter mailed to a nonexistent address — the passion was real, but the recipient doesn't exist; M6 becomes full prepayment with no delivery — you paid with your life, received nothing; M3 becomes a fantasy about sacrifice itself — you assumed sacrifice must have a receiver, but the universe has no such rule.",
        topology: "M6 的全部支付抵达一个不存在的接收者。M5 的牺牲行为与其效果之间的因果链断裂。",
        topologyEn: "M6's full payment reaches a nonexistent receiver. The causal link between M5's sacrificial act and its effect is severed.",
        directive: {
            bright: "他献出了一切。祭坛是空的——但他献出的那个姿态是真实的。让读者感到：牺牲的价值不在于有没有人接住，而在于他有能力做出这个选择。大多数人一辈子不会为任何东西付出一切。他付了。这份能力本身是真实的，是不可否认的。即使血流在了地上——它流过。",
            dark: "他献出了一切——以最壮烈的姿态，以殉道者的决心。但没有人接住。祭坛是空的。他的血流在了地上，没有浇灌任何东西。让读者感到一种比死亡更残忍的东西：不是死——是白死。他的牺牲和一场车祸在统计意义上没有任何区别。连他试图保护的人都不知道他做了什么。",
            tension: "他献出了一切。祭坛空着。让读者在这个画面前停留：他的血是真实的，他的决心是真实的——但接收者不存在。这是一种最纯粹的付出，还是一种最荒谬的浪费？也许牺牲不需要接收者。也许没有接收者的牺牲只是自杀的另一个名字。两种读法同时成立。血在地上慢慢变干。"
        },
        reference: "《拯救大兵瑞恩》如果瑞恩在被救后的第二天就踩了地雷——那么整个小队的牺牲就变成了统计噪声（本片的反面）；《敦刻尔克》无数小船冒死营救士兵，但若战争最终输了，这一切壮举都会被历史遗忘。",
        referenceEn: "If Ryan stepped on a mine the day after rescue — the entire squad's sacrifice becomes statistical noise (the reverse of Saving Private Ryan); countless boats risking death to rescue soldiers, but if the war is ultimately lost, all heroism would be forgotten in Dunkirk."
    },

    // ── 5 ──
    {
        id: "m7a_logical_terminus",
        name: "疯狂的逻辑终点", nameEn: "Logical Terminus of Madness",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体的每一步都是合理的——但合理的链条走到尽头，等着的是深渊。不是失控——是控制本身通往了毁灭。",
        defEn: "Every step the subject took was logical — but the logical chain, followed to its end, leads to the abyss. Not loss of control — control itself leads to ruin.",
        core: "A面：至少他是一致的——大多数人连自己的逻辑都不敢跟到底。他有这个勇气，哪怕代价是毁灭。 / B面：但一致性不是美德的同义词。一个完美一致的系统可以完美地通向地狱。他没有犯任何错误——这才是最可怕的。每一步都对，终点却是悬崖。不是他疯了——是理性本身在极端处会翻车。 | 缝合点(◇)：M5 被揭示为精密的自杀机器——每一个零件都运转完美，组装在一起就是一颗定时炸弹；M3 被揭示为一条公理——你把它当成了不可质疑的前提，然后从这条前提推导出了灾难；M4 被揭示为不存在——没有人阻止你，因为你的逻辑无懈可击。你一路绿灯直接开进了深渊。",
        coreEn: "A-side: At least he was consistent — most people lack the courage to follow their own logic to the end. He had it, even at the cost of destruction. / B-side: But consistency isn't synonymous with virtue. A perfectly consistent system can lead perfectly to hell. He made no mistakes — that's the most terrifying part. Every step correct, destination a cliff. Not madness — reason itself flips at extremes. | Quilting Point(◇): M5 becomes a precision suicide machine — every part runs perfectly, assembled together it's a time bomb; M3 becomes an axiom — you treated it as an unquestionable premise, then derived disaster from it; M4 becomes nonexistent — no one stopped you because your logic was bulletproof. Green lights all the way into the abyss.",
        topology: "M3 的初始公理经 M5 的精密推演到达逻辑终点——终点与深渊重合，且推演过程无错。",
        topologyEn: "M3's initial axiom, through M5's precise derivation, reaches its logical terminus — the terminus coincides with the abyss, and the derivation is flawless.",
        directive: {
            bright: "他的每一步都是对的。让读者承认这一点：他的逻辑无懈可击，他的勇气不可否认。大多数人在第三步就会退缩——他走到了最后一步。至少他是一致的。至少他有胆量跟着自己的信念走到底。这种一致性本身是罕见的，哪怕它通向了深渊。",
            dark: "他没有犯任何错误。每一步都是合理的、审慎的、可以辩护的。但合理的链条走到尽头——等着的是深渊。让读者感到的恐惧不是「他疯了」，而是「他没疯——每一步都对，终点却是悬崖」。没有人能指出他哪里错了。因为他哪里都没有错。这才是最可怕的。理性本身在极端处会通往毁灭。",
            tension: "他的每一步都合理。终点是深渊。让读者在这两个事实之间感到一种无法消解的不安：如果逻辑是对的，终点怎么会是错的？如果终点是错的，逻辑怎么会是对的？也许他缺的不是理性——是某种理性无法提供的东西。但那种东西叫什么名字，我们说不出来。"
        },
        reference: "《绝命毒师》沃尔特的每一个决定在当时的语境下都是「最优解」——正是这些最优解的总和把他送进了坟墓；《大空头》交易员们的逻辑完美无缺——但逻辑的终点是整个经济体系的崩溃。",
        referenceEn: "Every one of Walter's decisions being the 'optimal choice' in context — the sum of optimal choices leading to his grave in Breaking Bad; traders' flawless logic whose terminus is the entire economic system's collapse in The Big Short."
    },

    // ── 6 ──
    {
        id: "m7a_devoured_by_real",
        name: "实在界的吞噬", nameEn: "Devoured by the Real",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体触碰到了不应该被触碰的东西——原始的、未经符号化的实在。它没有形状、没有名字，但它把他整个人吞了进去。",
        defEn: "The subject touched what should not be touched — the raw, unsymbolized Real. It has no shape, no name, but it swallowed them whole.",
        core: "A面：触碰到实在界说明你走得比任何人都远——你到达了经验的边界，看到了围栏外面的东西。 / B面：但围栏是有原因的。实在界不是知识——它是一种会把你撕碎的物质。你没有理解它——你被它淹没了。你的语言、身份、理性在它面前像纸一样溶解。回来的那个人——如果回来了的话——已经不完整了。 | 缝合点(◇)：M2 被揭示为围栏上的一个洞——你以为是入口，其实是事故；M3 被揭示为围栏内部的幻想——你以为围栏外面有宝藏，其实围栏外面没有「东西」——只有吞噬；M5 被揭示为拆围栏的动作——你的勇气没有问题，但你拆的是防洪堤。",
        coreEn: "A-side: Touching the Real means you went further than anyone — you reached experience's border and saw beyond the fence. / B-side: But the fence exists for a reason. The Real isn't knowledge — it's a substance that tears you apart. You didn't understand it — you were submerged. Language, identity, reason dissolve like paper before it. The person who returns — if they return — is no longer whole. | Quilting Point(◇): M2 becomes a hole in the fence — you thought it was an entrance, it was an accident; M3 becomes an intra-fence fantasy — you thought treasure lay beyond, but beyond the fence there are no 'things,' only devouring; M5 becomes the act of dismantling the fence — your courage was fine, but you dismantled the flood wall.",
        topology: "M1 穿越了符号界的防护围栏，直接接触未经中介的实在界——接触瞬间主体的符号化结构溶解。",
        topologyEn: "M1 crosses the symbolic order's protective fence and directly contacts the unmediated Real — at the instant of contact, the subject's symbolic structure dissolves.",
        directive: {
            bright: "他走得比任何人都远。他到达了经验的边界——那个大多数人一辈子只在远处看到的围栏。他翻过去了。让读者感到这份勇气的分量：不管围栏后面是什么，他是唯一一个真的去看了的人。那种经验是不可剥夺的。即使它把他撕碎了——他看到了。",
            dark: "他走得太远了。越过了语言的边界、经验的边界、人类认知的边界——触碰到了某种没有形状、没有名字的东西。然后它把他吞了。让读者感到一种前语言的恐惧：不是怪物——是比怪物更古老的东西。他的理性像纸一样在里面溶解了。回来的那个人——如果回来了的话——眼睛里少了什么。",
            tension: "他越过了围栏。围栏后面没有宝藏，也没有怪物。有的是某种无法命名的东西。让读者感到一种超出恐惧范畴的不安：他回来了——但我们不确定回来的是不是同一个人。他的眼睛看起来不一样了。也许他看到了终极的真实。也许终极的真实吞掉了他的一部分，还回来的只是一个壳。"
        },
        reference: "《湮灭》进入闪光区域的生物学家接触到了纯粹的变异本身——回来的她已经不确定自己是不是原来那个人；《闪灵》杰克在旅馆中接触到了某种超越时间的存在——他的理性被一口一口吃掉了。",
        referenceEn: "The biologist entering the Shimmer and touching pure mutation itself — returning unsure if she's still the same person in Annihilation; Jack contacting something beyond time in the hotel — his reason consumed bite by bite in The Shining."
    },

    // ── 7 ──
    {
        id: "m7a_contagious_ruin",
        name: "传染性毁灭", nameEn: "Contagious Ruin",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体的毁灭不是孤立事件——它像病毒一样扩散，感染了他接触过的每一个人和每一样东西。",
        defEn: "The subject's ruin isn't an isolated event — it spreads like a virus, infecting every person and thing they ever touched.",
        core: "A面：你的毁灭如此巨大以至于它溢出了你的边界——这至少证明你不是无关紧要的。你的存在有足够的质量产生引力。 / B面：但引力不区分方向。你的崩溃把你爱的人一起拖进了深渊。你的痛苦不是你一个人的——它是一种辐射，而你是放射源。你越挣扎，溅射范围越大。最后被你的毁灭波及的人比被你的敌人伤害的人更多。 | 缝合点(◇)：M5 被揭示为传播媒介——你的反抗是真的，但每一次挣扎都把毒素溅到旁边的人身上；M6 被揭示为不是你一个人的账单——你把代价分摊给了所有靠近你的人；M1 被揭示为零号病人——你的匮乏不是你的私事，它是一种传染源。",
        coreEn: "A-side: Your ruin so vast it overflows your boundaries — at least proving you weren't insignificant. Your existence had enough mass to generate gravity. / B-side: But gravity doesn't discriminate. Your collapse drags loved ones into the abyss. Your pain isn't yours alone — it's radiation, and you're the source. The more you struggle, the wider the splatter. Those harmed by your destruction outnumber those harmed by your enemy. | Quilting Point(◇): M5 becomes the transmission vector — your resistance was real, but every struggle splashed toxins onto bystanders; M6 becomes not your bill alone — you split the cost across everyone who came near; M1 becomes patient zero — your lack isn't private, it's a contagion source.",
        topology: "M1 的毁灭溢出个体边界，M5 的每一次挣扎充当传播媒介，将 M6 的代价分摊至所有邻近节点。",
        topologyEn: "M1's ruin overflows individual boundaries; every struggle of M5 serves as a transmission vector, distributing M6's cost across all adjacent nodes.",
        directive: {
            bright: "他的毁灭溢出了他自己的边界——这至少证明他不是无关紧要的。让读者感到他的存在的重量：他有足够的质量产生引力。他影响了人，他改变了人，他的存在在别人的生命里留下了不可逆的印记。哪怕那个印记是伤疤——它也证明了他的分量。他不是一粒尘埃。",
            dark: "他的毁灭不是孤立事件——它溢出了他的边界，像辐射一样扩散到了他接触过的每一个人。他爱过的人、帮过他的人、只是碰巧站在旁边的人——全部被波及。让读者感到一种无法控制的蔓延：他越挣扎，溅射范围越大。最后被他的毁灭波及的人，比被他的敌人伤害的人更多。他变成了他最不想成为的东西——一个放射源。",
            tension: "他的毁灭在扩散。他能感觉到它在吞噬身边的人，但他无法停下来——因为停下来也是一种形式的扩散。让读者在这里感到一种不可能的困境：他的存在有足够的重量影响他人，这可以叫做重要性，也可以叫做毒性。两者是同一种引力。我们看着辐射圈扩大，不知道该为他的分量感到敬畏还是恐惧。"
        },
        reference: "《绝命毒师》沃尔特的毁灭依次吞噬了汉克、杰西、斯凯勒——每一个靠近他的人都付出了代价；《寄生虫》金家的渗透最终引爆了所有家庭——三个阶层的人全部被卷入毁灭的涡旋。",
        referenceEn: "Walter's destruction sequentially consuming Hank, Jesse, Skyler — everyone who came close paid a price in Breaking Bad; the Kim family's infiltration ultimately detonating all families — three social classes pulled into the vortex of ruin in Parasite."
    },

    // ── 8 ──
    {
        id: "m7a_too_close_to_truth",
        name: "过度接近真实", nameEn: "Too Close to the Truth",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体看到了太多真相——不是被真相启迪了，而是被真相的剂量杀死了。真理有毒，超过安全剂量就是致命的。",
        defEn: "The subject saw too much truth — not enlightened by truth but killed by its dosage. Truth is toxic; beyond the safe dose, it's lethal.",
        core: "A面：看到真相的人永远比看不到真相的人更接近自由——哪怕这份自由的代价是崩溃。 / B面：但你不是苏格拉底——你没有把真相变成哲学，你被真相像卡车一样撞了。人的认知系统有承重上限。你看到的不是「太多」而是「太真」——你的操作系统无法处理这个分辨率的数据。蓝屏了。 | 缝合点(◇)：M2 被揭示为一扇不该被打开的门——你以为门后面是答案，门后面是灼伤你视网膜的光；M5 被揭示为不断放大倍率的显微镜——你看得越清楚，你的眼睛越接近被烧毁；M3 被揭示为对真相本身的欲望——你以为真相是救赎，但真相是一种不加稀释的物质，人体不是为它设计的容器。",
        coreEn: "A-side: Someone who sees truth is always closer to freedom than someone who doesn't — even if freedom's price is collapse. / B-side: But you're not Socrates — you didn't turn truth into philosophy, truth hit you like a truck. Cognitive systems have load-bearing limits. You saw not 'too much' but 'too real' — your operating system can't process data at this resolution. Blue screen. | Quilting Point(◇): M2 becomes a door that shouldn't have been opened — you thought answers lay behind it, behind it was light that burns retinas; M5 becomes a microscope cranking magnification — the clearer you see, the closer your eyes are to burning; M3 becomes desire for truth itself — you thought truth was salvation, but truth is an undiluted substance; the human body isn't a container designed for it.",
        topology: "M3 对真相的欲望驱动 M5 不断提高分辨率，直到认知系统的承重上限被突破——真相的剂量杀死了容器。",
        topologyEn: "M3's desire for truth drives M5 to keep increasing resolution until the cognitive system's load-bearing limit is breached — truth's dosage kills the container.",
        directive: {
            bright: "他看到了真相。全部的。让读者承认这份勇气的稀有：大多数人活在安全剂量的真实里，他选择了直视。他的认知系统承受不了——但他看到了。那份视野是不可撤销的。看到真相的人永远比看不到的人更接近自由，哪怕自由的代价是崩溃。",
            dark: "他找到了真相。全部的真相。然后真相杀死了他——不是比喻意义上的，是真的把他的认知系统烧穿了。让读者感到：真理是有毒的，超过安全剂量就是致命的。他不是被谎言摧毁的——他是被太多的真实摧毁的。人的眼睛不是为直视太阳设计的。他直视了。",
            tension: "他看到了全部的真相。然后他碎了。让读者在这里面对一个无法回答的问题：是真相杀死了他，还是他的眼睛太脆弱了？也许人类的认知系统就不是为这种分辨率设计的。也许有人能承受——但不是他。也许没有人能承受。那扇门后面的光还在亮着。我们只是不知道该不该进去。"
        },
        reference: "《禁闭岛》泰迪最终发现了全部真相——真相是他自己杀了妻子——他的心智承受不了，选择了再次遗忘；《妈的多重宇宙》伊芙琳看到了所有宇宙的所有可能性——信息量差点把她压成虚无主义的黑洞。",
        referenceEn: "Teddy discovering the full truth — that he killed his own wife — his mind unable to bear it, choosing to forget again in Shutter Island; Evelyn seeing all possibilities across all universes — the information nearly crushing her into a nihilistic black hole in Everything Everywhere All at Once."
    },

    // ── 9 ──
    {
        id: "m7a_accelerated_fall",
        name: "加速的坠落", nameEn: "Accelerated Fall",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "每一次自救都加速了坠落。他越是挣扎，下沉越快——因为他抓住的每一根救命稻草都连着更重的铁锚。",
        defEn: "Every attempt at self-rescue accelerates the fall. The more they struggle, the faster they sink — because every lifeline they grab is attached to a heavier anchor.",
        core: "A面：至少他一直在行动——沉没的人有两种，一种是放弃的，一种是到最后一秒还在抓东西的。他是后者。 / B面：但他抓的每一样东西都在把他往下拖。他借的每一笔债都用来还上一笔债。他的每一个解决方案都是下一个问题的起因。他不是在下沉——他是在加速度下沉。而加速度的来源恰恰是他的求生本能。 | 缝合点(◇)：M5 被揭示为重力的同谋——你的挣扎不是对抗下沉，是下沉的动力来源；M6 被揭示为利滚利——每一次支付都生成更大的账单；M4 被揭示为你自己之前的行动——阻挡你的不是外部力量，是你三步之前亲手放下的绊脚石。",
        coreEn: "A-side: At least he kept acting — there are two kinds of drowning people: those who give up and those still grabbing until the last second. He was the latter. / B-side: But everything he grabbed dragged him deeper. Every debt paid by taking a bigger debt. Every solution becomes the next problem's cause. Not sinking — accelerating. And the acceleration's source is precisely his survival instinct. | Quilting Point(◇): M5 becomes gravity's accomplice — your struggle isn't fighting the fall, it's the fall's power source; M6 becomes compound interest — every payment generates a larger bill; M4 becomes your own prior actions — what blocks you isn't external force but the tripwire you laid three steps ago.",
        topology: "M5 的每一次自救行为被回溯性地揭示为加速度的来源——M6 以复利结构增长，每次支付生成更大的账单。",
        topologyEn: "Every self-rescue act of M5 is retroactively revealed as the source of acceleration — M6 grows in compound-interest structure, each payment generating a larger bill.",
        directive: {
            bright: "他没有放弃。到最后一秒他还在抓东西、想办法、寻找出路。让读者感到这种不屈的尊严：沉没的人有两种，放弃的和还在动的。他是后者。他的每一次挣扎可能加速了坠落——但至少他从来没有躺平等死。行动本身就是对深渊的回答，哪怕答案是错的。",
            dark: "他没有放弃——他一直在挣扎，一直在想办法。但他抓住的每一根稻草都连着更重的东西。每一个解决方案变成了下一个问题的起因。每一笔还债的钱都是借来的。让读者看到一种加速度结构的恐惧：不是静止的绝望——是越努力越快的坠落。他的求生本能恰恰是把他拽向深渊的力量。",
            tension: "他在挣扎。每一次挣扎他都下沉得更快。让读者在这里面对一种不可能的选择：是挣扎着加速坠落，还是放弃而慢慢沉没？两种选择通向同一个深渊——只是速度不同。也许他的不屈是尊严。也许他的不屈恰恰是绳索。我们看着他越来越快地下沉，不知道该喊「别动」还是「继续」。"
        },
        reference: "《好家伙》亨利从一个小小的谎言开始，每一次掩盖都需要更大的谎言，直到整个生活变成一台失控的离心机；《赌命为王》每一局翻本的赌注都更大，直到赌桌上已经不是钱——是器官。",
        referenceEn: "Henry's small lie requiring ever-larger lies to cover, until his entire life becomes a runaway centrifuge in Goodfellas; every doubling-down bet getting larger until the stakes are no longer money but organs in a gambling spiral."
    },

    // ── 10 ──
    {
        id: "m7a_void_expansion",
        name: "空洞的膨胀", nameEn: "Expansion of the Void",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体内部的空洞开始膨胀，吞噬周围的一切——关系、意义、记忆、自我——直到只剩下空洞本身。",
        defEn: "The void inside the subject begins expanding, consuming everything around it — relationships, meaning, memory, self — until only the void remains.",
        core: "A面：空洞的膨胀是一种极端的诚实——你不再用填充物掩盖自己的空。你终于承认了那个洞有多大。 / B面：但承认不等于控制。空洞不听你的——它有自己的生长速度。它吃掉了你的爱情、你的友谊、你对明天的期待、你对痛苦的感知能力。最后它开始吃你的记忆。当记忆也被吃完的时候，连「我曾经不是这样的」这句话都说不出来了。 | 缝合点(◇)：M1 被揭示为一个种子——你出生时就带着的那颗空洞的种子，现在长成了吞噬一切的黑洞；M3 被揭示为喂养空洞的燃料——你越是追求填充，空洞越大；M6 被揭示为空洞的食物——你付出的每一样东西都被它吃了，而它还在饿。",
        coreEn: "A-side: The void's expansion is extreme honesty — you no longer mask your emptiness with filler. You finally admit how large the hole is. / B-side: But admitting isn't controlling. The void doesn't listen — it has its own growth rate. It ate your love, friendships, expectations for tomorrow, ability to feel pain. Then it starts eating memory. When memory is consumed, you can't even say 'I wasn't always like this.' | Quilting Point(◇): M1 becomes a seed — the void-seed you were born with, now grown into an all-consuming black hole; M3 becomes fuel feeding the void — the more you pursue filling, the larger it grows; M6 becomes the void's food — everything you paid was eaten by it, and it's still hungry.",
        topology: "M1 内部的匮乏从种子膨胀为黑洞——M3 的每一次填充尝试反向喂养了空洞的生长。",
        topologyEn: "M1's internal lack expands from seed to black hole — every filling attempt by M3 inversely feeds the void's growth.",
        directive: {
            bright: "空洞在膨胀。但他不再假装它不存在了。让读者感到这种极端诚实的力量：他终于承认了那个洞有多大。大多数人一辈子都在用填充物掩盖——他停下来了，看着它，承认了它。这种承认本身需要一种比勇气更深的东西。空洞是真实的。而面对真实的人至少不再被幻觉消耗。",
            dark: "他内部的那个空洞开始长大了。起初他还能感觉到它的边界——后来边界消失了。它吃掉了他的爱情，然后吃掉了他的友谊，然后吃掉了他对疼痛的感知能力。最后它开始吃他的记忆。让读者感到一种安静的黑洞式恐惧：没有爆炸、没有尖叫——只有一个不断扩大的空。当一切都被吞完的时候，连「我曾经不是这样的」这句话都想不起来了。",
            tension: "空洞在长大。他看着它长大。让读者在这里感到两种力量的拉扯：承认空洞是一种诚实，但空洞不会因为被承认就停止膨胀。也许面对真实是第一步。也许面对真实只是让你睁着眼睛看自己被吞掉。空洞不回应你的勇气。它只是在生长。安静地。"
        },
        reference: "《忧郁症》贾斯汀的抑郁从个人状态膨胀为宇宙级别的引力——最终整个地球都被拉进了她内心的那颗黑星；《醉生梦死》主角的空虚慢慢吞噬了身边所有的关系——不是戏剧性的毁灭，是安静的蒸发。",
        referenceEn: "Justine's depression expanding from personal state to cosmic gravity — eventually the entire planet pulled into her inner dark star in Melancholia; the protagonist's emptiness quietly consuming all surrounding relationships — not dramatic destruction, just silent evaporation in Stray Dogs."
    },

    // ── 11 ──
    {
        id: "m7a_ultimate_transgression",
        name: "终极僭越", nameEn: "The Ultimate Transgression",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "主体跨过了那条唯一不能跨过的线——不是法律的线，不是道德的线，而是他自己给自己画的线。跨过之后，回去的路消失了。",
        defEn: "The subject crosses the one line that must not be crossed — not law's line, not morality's, but the line they drew for themselves. After crossing, the way back vanishes.",
        core: "A面：跨过最后那条线至少证明了你有绝对的行动力——你不受任何东西约束了，包括你自己。这是一种黑暗的自由。 / B面：但那条线是你自己画的——它是你身份的最后一道防线。跨过之后你还活着——但你不再认识镜子里的那个人了。你没有失去外部的东西——你失去了内部的坐标系。你站着，但你不知道自己站在哪里。 | 缝合点(◇)：M3 被揭示为到达那条线之前的全部动力——欲望把你送到了这里，但欲望也是阻止你跨过的最后一道闸；M5 被揭示为拔掉保险栓的动作——你的勇气在最后时刻变成了毁灭的扳机；M1 被揭示为被永久改变了——跨过之前你的匮乏是「我缺什么」，跨过之后变成了「我不再是什么」。",
        coreEn: "A-side: Crossing the final line proves absolute agency — you're bound by nothing anymore, including yourself. A dark freedom. / B-side: But that line was yours — your identity's last firewall. After crossing you're still alive — but you no longer recognize the person in the mirror. You didn't lose something external — you lost your internal coordinate system. Standing, but not knowing where you stand. | Quilting Point(◇): M3 becomes all the drive before the line — desire brought you here, but desire was also the last gate preventing crossing; M5 becomes pulling the safety pin — your courage at the last moment became destruction's trigger; M1 becomes permanently altered — before crossing, your lack was 'what I'm missing'; after, it becomes 'what I no longer am.'",
        topology: "M1 跨越了自我设定的最终边界——M3 同时是推向边界的动力和阻止跨越的最后闸门，跨越瞬间 M1 的坐标系永久改写。",
        topologyEn: "M1 crosses the self-imposed final boundary — M3 is simultaneously the drive toward the boundary and the last gate preventing crossing; at the instant of crossing, M1's coordinate system is permanently rewritten.",
        directive: {
            bright: "他跨过了那条线。让读者感到一种黑暗的自由：他不再受任何东西约束了——包括他自己。这是最极端的行动力。大多数人在那条线前会永远停下来。他没有。不管那条线后面是什么——他有能力做出任何选择。这种自由是可怕的。但它也是绝对的。",
            dark: "他有一条线——一条他自己给自己画的线。「我不管怎样都不会做这件事。」然后他做了。让读者感到的不是道德谴责——而是一种地基消失的眩晕。他还活着，他还站着。但镜子里的那个人他已经不认识了。最可怕的不是「他做了坏事」——是「他不再知道自己是谁」。回去的路没有被堵住——是消失了。",
            tension: "他站在那条线前面。然后他跨过去了。让读者在跨越的瞬间感到一种分裂：一半的他获得了绝对的自由，另一半的他永远死在了线的这一边。回来的路消失了——但他不确定自己是否还想回去。也许这就是真正的自己。也许真正的自己刚刚被杀死了。镜子里的那个人在看着他。他认不出来。"
        },
        reference: "《现代启示录》库尔兹上校越过了文明与野蛮的最后边界——回来的路不是被封锁了，是蒸发了；《罪与罚》拉斯柯尔尼科夫杀人后发现：跨过那条线的不是他的手——是他的整个自我。",
        referenceEn: "Colonel Kurtz crossing the final border between civilization and barbarism — the way back didn't get blocked, it evaporated in Apocalypse Now; Raskolnikov discovering after the murder: what crossed the line wasn't his hand but his entire self in Crime and Punishment."
    },

    // ── 12 ──
    {
        id: "m7a_symbolic_implosion",
        name: "符号界的内爆", nameEn: "Symbolic Implosion",
        group: "D. 毁灭的裁决", groupEn: "Verdict of Ruin",
        def: "支撑主体全部现实的意义系统在一瞬间塌缩。不是某个信念崩了——是「信念」这种东西本身崩了。",
        defEn: "The meaning system supporting the subject's entire reality collapses in an instant. Not one belief falling — but 'belief' itself falling.",
        core: "A面：所有旧结构塌了——但你还在呼吸。废墟之下还有一具活的身体。这就是重建的全部前提。 / B面：但这不是一堵墙倒了——是天空塌了。你不知道该把新的墙建在哪里，因为「地面」这个概念本身已经不可靠了。你的语言在嘴里变成了噪声。你看着一把椅子，想不起来它是用来干什么的。不是疯了——是整个翻译层崩溃了。 | 缝合点(◇)：整个 M2-M6 链条被揭示为不可理解的噪声——不是你忘了故事——是「故事」这个概念本身变得不可解析了；M4 被揭示为意义系统的一部分——你的敌人和你的信仰是同一个结构的两面，结构塌了它们一起消失；M1 被揭示为已被这次内爆永久改变——你原来的匮乏还在，但现在你连描述它的语言都没有了。",
        coreEn: "A-side: All old structures collapsed — but you're still breathing. Under the rubble is a living body. That's the entire premise for rebuilding. / B-side: But this isn't a wall falling — it's the sky collapsing. You don't know where to build new walls because 'ground' itself is unreliable. Your language becomes noise in your mouth. You look at a chair and can't remember what it's for. Not madness — the entire translation layer crashed. | Quilting Point(◇): The entire M2-M6 chain becomes incomprehensible noise — you didn't forget the story, 'story' itself became unparseable; M4 becomes part of the meaning system — your enemy and your faith are two sides of one structure, both vanish when it collapses; M1 becomes permanently altered — your original lack remains, but now you lack even the language to describe it.",
        topology: "整个 M2-M6 意义链条在一瞬间塌缩为不可解析的噪声——不是内容丢失，是翻译层本身崩溃。",
        topologyEn: "The entire M2-M6 meaning chain collapses into unparseable noise in an instant — not content lost, but the translation layer itself crashes.",
        directive: {
            bright: "所有旧结构塌了。但他还在呼吸。让读者看到废墟下面的那具活的身体——它还是温热的，心还在跳。旧的意义系统碎了，但碎片之间有空隙，空隙里有空气。也许重建是可能的。也许这次坍塌是拆掉一座不该存在的建筑的唯一方式。他的呼吸就是全部的前提。",
            dark: "不是某个信念崩了——是「信念」这种东西本身崩了。他看着一把椅子，想不起来它是用来干什么的。他听到别人说话，但词语在他耳朵里变成了噪声。让读者感到一种比疯狂更安静的东西：整个翻译层——把世界变成可理解的东西的那个系统——在一瞬间熄灭了。他还活着。但「活着」这两个字对他来说已经不意味着任何东西了。",
            tension: "一切意义在一瞬间碎了。他还站着。让读者在这个画面里感到一种无法安放的悬停：他还在呼吸，但呼吸不再意味着什么。也许废墟之下有重建的可能。也许「重建」这个词本身也在刚才的内爆中失去了意义。他看着世界。世界还在。但他和世界之间的翻译层消失了。他们不再说同一种语言。"
        },
        reference: "《穆赫兰道》戴安在最后二十分钟经历了整个幻想结构的坍缩——不是一个秘密被揭露，是「真实」和「幻想」之间的边界本身消失了；《索拉里斯》宇航员发现大洋在用他们的记忆制造幻象——「什么是真的」这个问题本身变得无法回答。",
        referenceEn: "Diane experiencing the entire fantasy structure's collapse in the final twenty minutes of Mulholland Drive — not one secret revealed, but the border between 'real' and 'fantasy' itself dissolving; the astronaut discovering the ocean manufactures phantoms from memories — the question 'what is real' itself becoming unanswerable in Solaris."
    },
];
