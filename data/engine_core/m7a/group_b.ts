import { LibraryItemDef } from '../../../types';

export const VERDICTS_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 异化的裁决 (Verdict of Assimilation) — 12 Items
    // 象征裁决：主体存活，但被系统/敌人/自身同化
    // 核心句式："我活下来了——但活下来的那个人，已经不是我了。"
    // 回溯效果：M5（反抗）被回溯性地揭示为同化的加速器。
    // ============================================================

    // ── 1 ──
    {
        id: "m7a_becoming_monster",
        name: "成为怪物", nameEn: "Becoming the Monster",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "与怪物搏斗太久，主体复制了敌人的方法、逻辑和面孔。胜利者与被击败者合为一体。",
        defEn: "Fighting the monster too long, the subject copies its methods, logic, and face. Victor and vanquished merge into one.",
        core: "A面：你学会了敌人的语言才打败了它——适应力本身是一种天赋。你活下来了。 / B面：但你活下来的方式就是变成它。你看着镜子，发现里面站着的是你曾发誓要摧毁的那个东西。你赢了——用输掉自己的方式。 | 缝合点(◇)：M4（敌人）被揭示为你的终极老师——你打败它的唯一方法就是成为它；M5 被揭示为一条单行道——入口写着「反抗」，出口写着「同化」；M3 被揭示为一面预言镜——你追求的正义，是你将变成的暴力的别名。",
        coreEn: "A-side: You learned the enemy's language to defeat it — adaptability is a gift. You survived. / B-side: But you survived by becoming it. You look in the mirror and see what you swore to destroy. You won — by losing yourself. | Quilting Point(◇): M4 becomes your ultimate teacher — the only way to defeat it was to become it; M5 becomes a one-way street — entrance reads 'resistance,' exit reads 'assimilation'; M3 becomes a prophetic mirror — the justice you sought is an alias for the violence you'll become.",
        topology: "M4 与 M1 的边界消融。搏斗过程中 M5 的方法论被 M4 反向同化。胜利者与被击败者合为一体。",
        topologyEn: "The boundary between M4 and M1 dissolves. During combat, M5's methodology is reverse-assimilated by M4. Victor and vanquished merge.",
        directive: {
            bright: "他和怪物搏斗了太久，最终打赢了。他用了怪物的方法——但他知道自己在做什么。让读者感到：适应力本身是一种天赋。他学会了敌人的语言不是因为他弱——是因为他足够强大到可以吸收任何东西。他活下来了。他变了。但变化不一定是堕落——也许是一种更复杂的完整。",
            dark: "他和怪物搏斗了太久，最终打赢了。但胜利落地的那一刻，他发现自己用的是怪物的招数，说的是怪物的语言，脸上的表情和怪物一模一样。让读者在结尾突然意识到：他没有消灭敌人——他替换了敌人。镜子里站着的不再是他，而是他曾发誓要摧毁的那个东西。",
            tension: "他赢了。用了某些他不愿意回想的方式。让读者在胜利的瞬间看到他的脸——上面有一种微妙的变化，他自己可能还没注意到。他的方法越来越像敌人的方法。也许这只是务实。也许是什么更深的东西。让读者在「适应」和「同化」之间找不到清晰的边界线。"
        },
        reference: "《教父》迈克尔从不愿沾手的大学生变成比父亲更冷酷的教父；《绝命毒师》沃尔特说「我就是那个敲门的人」——他变成了自己最恐惧的存在。",
        referenceEn: "Michael transforming from reluctant outsider to a godfather colder than his father in The Godfather; Walter declaring 'I am the one who knocks' — becoming what he most feared in Breaking Bad."
    },

    // ── 2 ──
    {
        id: "m7a_symbolic_absorption",
        name: "融入符号界", nameEn: "Absorption into the Symbolic",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体不再挣扎，接受了自己在符号秩序中可被替换的位置。个体性消融于功能性之中。",
        defEn: "The subject stops struggling and accepts their replaceable position in the symbolic order. Individuality dissolves into functionality.",
        core: "A面：接受自己的位置不一定是投降——也许是一种更深的清醒。不是每个齿轮都需要成为引擎。平静地转动也是一种完整。 / B面：但这种「平静」是谁的平静？是你的，还是系统用你的肉体冒充的？你以为你在安宁中活着——但安宁是麻醉剂的别名。你不再痛苦，因为你不再是你。 | 缝合点(◇)：M1（匮乏）被揭示为已被系统标准化填充——空洞没有消失，而是被灌入了水泥；M5 被揭示为系统的免疫反应——你的反抗不是威胁，而是让系统更了解你、更精准地消化你的情报。",
        coreEn: "A-side: Accepting your position isn't necessarily surrender — perhaps it's deeper clarity. Not every gear needs to be the engine. Turning peacefully is a kind of wholeness. / B-side: But whose 'peace' is this? Yours, or the system impersonating you? You think you live in serenity — but serenity is anesthetic's alias. You no longer hurt because you're no longer you. | Quilting Point(◇): M1 becomes standardized fill — the void isn't gone, it's been filled with cement; M5 becomes the system's immune response — your rebellion wasn't a threat, it was intelligence that helped the system digest you more precisely.",
        topology: "M1 的个体性被系统功能性覆盖。M5 的反抗被回溯性地揭示为系统消化个体的催化剂。",
        topologyEn: "M1's individuality is overwritten by systemic functionality. M5's resistance is retroactively revealed as a catalyst for the system's digestion of the individual.",
        directive: {
            bright: "他不再挣扎了。他找到了自己的位置——安静的、明确的。让读者看到一种可能的清醒：不是每个齿轮都需要成为引擎。接受自己的位置也可以是一种深思熟虑后的选择。他平静了。也许这份平静是真实的。让读者在这种可能性中看到尊严。",
            dark: "他不再挣扎了。他找到了自己的位置——一个安静的、可被替换的位置——然后留在了那里。让读者在结尾感到一种不确定的不安：他看起来平静了，甚至满足了。但读者分不清这是真正的解脱，还是一种完美的驯服。他不再痛苦了——但那是因为「他」已经不在了。",
            tension: "他安静了。让读者看着他的脸——平静的、满足的、不再挣扎的。然后让读者自己问：这是解脱还是消亡？是一个人终于找到了自己的位置，还是一个人被系统消化后剩下的外壳？不要给出任何线索。让两种读法同时成立。"
        },
        reference: "《美丽新世界》人们在索玛和娱乐中安静地接受了自己的阶层编号；《瓦力》公理号上的人类已经完全适应了飘浮的生活，不想回到地球。",
        referenceEn: "People quietly accepting their caste numbers through soma and entertainment in Brave New World; humans on the Axiom fully adapted to floating life, unwilling to return to Earth in WALL-E."
    },

    // ── 3 ──
    {
        id: "m7a_golden_cage",
        name: "黄金牢笼", nameEn: "The Golden Cage",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体被舒适收买。牢笼的栏杆是镀金的，食物是精致的，唯一被剥夺的是离开的欲望。",
        defEn: "The subject is bought by comfort. The cage bars are gilded, the food exquisite; the only thing stripped away is the desire to leave.",
        core: "A面：也许笼子外面才是真正的荒野——舒适不等于虚假。选择留下也可以是清醒的判断而非投降。 / B面：但判断力本身已经被舒适腐蚀了。你以为你在「选择留下」——但一个已经忘记门在哪里的人，没有资格说「我选择不出去」。你不是在享受生活——你是在被消化。 | 缝合点(◇)：M3（欲望）被揭示为被替换了——原始的渴望已经被磨掉，取而代之的是系统分配给你的「满足」；M5 被揭示为被奖励熄灭的——每次你想反抗，笼子就升级一次。你的愤怒换来了更好的食物；M6 被揭示为免费的——这才是最贵的价格。",
        coreEn: "A-side: Maybe outside the cage is the true wilderness — comfort doesn't equal falsehood. Choosing to stay can be lucid judgment, not surrender. / B-side: But judgment itself has been corroded by comfort. You think you 'choose to stay' — but someone who's forgotten where the door is can't claim 'I choose not to leave.' You're not enjoying life — you're being digested. | Quilting Point(◇): M3 becomes replaced — original desire ground away, substituted with system-assigned 'satisfaction'; M5 becomes extinguished by reward — every time you rebel, the cage upgrades. Your anger earned you better food; M6 becomes free — which is the most expensive price.",
        topology: "M3（原始欲望）被系统提供的替代品覆盖。M5 每次激活都被奖励机制消弭。牢笼通过消除离开欲望来运作。",
        topologyEn: "M3 (original desire) is overwritten by system-provided substitutes. Each activation of M5 is extinguished by reward mechanisms. The cage operates by eliminating the desire to leave.",
        directive: {
            bright: "他留下来了。笼子是镀金的——但也许外面的荒野更危险。让读者看到一种可能性：选择舒适不一定是投降。也许他看清了外面的真相，做了一个清醒的判断。笼子里的生活不一定是假的。他也许真的在享受。让这种可能性和读者心底的不安并存。",
            dark: "他没有被打败。他被收买了。牢笼的栏杆是镀金的，食物是精致的，床是柔软的——唯一被剥夺的是他想离开的念头。让读者分不清他是幸福的还是被消化的。每次他想反抗，笼子就升级一次，他的愤怒换来了更好的待遇。最恐怖的不是他出不去——是他已经不想出去了。而他不想出去这件事，他自己并不知道。",
            tension: "他在笼子里。笼子很舒服。他看起来很满足。让读者在这幅画面前感到一种说不清的东西：他是真的满足了，还是已经忘了门在哪里？也许外面更糟。也许他的判断力还完好。也许判断力早就被舒适腐蚀了。让这三种可能性同时存在，不要解决任何一个。"
        },
        reference: "《黑客帝国》赛弗选择重新插入母体——「无知是幸福的」；《寄生虫》半地下室家庭短暂享受豪宅生活后再也回不去心理原点。",
        referenceEn: "Cypher choosing to be plugged back in — 'ignorance is bliss' in The Matrix; the semi-basement family unable to return psychologically after tasting luxury in Parasite."
    },

    // ── 4 ──
    {
        id: "m7a_stockholm_structure",
        name: "斯德哥尔摩结构", nameEn: "Stockholm Structure",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体与压迫者之间产生了真实的情感依附。铁链在某一天变成了脐带。",
        defEn: "Genuine emotional attachment forms between subject and oppressor. The chain becomes an umbilical cord.",
        core: "A面：在极端环境下与压迫者建立连接，是心理的求生本能——它证明你有适应任何环境的能力。这种爱可能是扭曲的，但它是真实的。 / B面：但「真实的爱」恰恰是最完美的牢笼。物理锁链可以被锯断，情感锁链越挣扎越紧。你不是被困住了——你爱上了困住你的东西。解放你的人在你眼中变成了入侵者。 | 缝合点(◇)：M4（压迫者）被揭示为唯一给予你稳定感的人——你的噩梦同时是你的地基；M2 被揭示为一种奇异的「恩典」——创伤变成了你身份的支柱；M5 被揭示为被重新定向——你的反抗力量完整地保留着，但已经对准了试图解救你的人。",
        coreEn: "A-side: Bonding with an oppressor under extreme conditions is survival instinct — it proves you can adapt to any environment. The love may be distorted, but it's real. / B-side: But 'real love' is the most perfect cage. Physical chains can be sawed; emotional chains tighten with struggle. You're not trapped — you fell in love with what traps you. Your liberator becomes the intruder. | Quilting Point(◇): M4 becomes the only source of stability — your nightmare is your foundation; M2 becomes a strange 'grace' — trauma becomes your identity's pillar; M5 becomes redirected — your resistance is fully intact, but aimed at those trying to rescue you.",
        topology: "M4（压迫者）与 M1 之间产生情感依附。M5 的方向被反转——从对抗 M4 变为保护 M4。",
        topologyEn: "Emotional attachment forms between M4 (oppressor) and M1. M5's direction reverses — from opposing M4 to protecting M4.",
        directive: {
            bright: "他和囚禁者之间产生了真实的连接。也许是扭曲的——但它是真的。让读者看到：在极端环境下产生的依附证明了他有适应任何处境的能力。他没有被摧毁。他找到了一种活下去的方式。这种方式可能不完美——但人类的适应力本身就是一种奇迹。让读者在「扭曲」和「真实」之间看到两者并存的可能。",
            dark: "他恨他的囚禁者。然后有一天他发现自己在保护囚禁者。铁链在某一天变成了脐带，他分不清这是爱还是求生本能。让读者感到不安的不是暴力——而是温情。当有人来解救他的时候，他躲在囚禁者身后。最残忍的监狱不需要锁——它需要的是让囚犯爱上牢房。",
            tension: "他和囚禁者之间有了某种东西——不是恨，不完全是爱，是一种更深的、更令人不安的依附。让读者在这种情感面前感到困惑：这是真实的连接还是求生的扭曲？铁链变成了脐带——但脐带也是一种束缚。让读者无法简单地判断他应该被解救还是被理解。"
        },
        reference: "《房间》母亲获救后发现儿子想回到那个囚禁他们七年的房间——那是他唯一认识的世界；《沉默的羔羊》克拉丽斯和汉尼拔之间产生了真实的智识亲密——她的追猎者成了她最信任的导师。",
        referenceEn: "The son wanting to return to the room that imprisoned them for seven years — his only known world in Room; the genuine intellectual intimacy between Clarice and Hannibal — her hunter becoming her most trusted mentor in Silence of the Lambs."
    },

    // ── 5 ──
    {
        id: "m7a_domestication",
        name: "驯化", nameEn: "Domestication",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "不是暴力驯服了主体——是日常性。重复的早餐、固定的路线、可预测的奖惩慢慢磨掉了所有棱角。",
        defEn: "Not violence that tames the subject — but dailiness. Repeated breakfasts, fixed routes, predictable rewards slowly grind away all edges.",
        core: "A面：棱角被磨掉也许是成熟——你学会了和世界相处，不再用头撞墙。适应不等于投降。 / B面：但你怎么区分「成熟」和「被磨平」？你不再愤怒了——但不是因为你超越了愤怒，而是因为你的神经已经对不公正失去了反应能力。你没有和解——你只是钝了。 | 缝合点(◇)：M5（反抗）被揭示为一块被日复一日流水冲刷的石头——不是被击碎，是被磨成了鹅卵石；M2 被揭示为已经远到记不清了——创伤没有被治愈，只是被日常覆盖了一层又一层；M3 被揭示为被缩小了——你最初想改变世界，后来想改变公司，再后来想改变自己的工位，最后你只想准时下班。",
        coreEn: "A-side: Losing edges may be maturity — you learned to coexist with the world. Adaptation isn't surrender. / B-side: But how do you distinguish 'maturity' from 'being ground flat'? You're no longer angry — not because you transcended anger, but because your nerves lost the capacity to respond to injustice. You didn't reconcile — you just dulled. | Quilting Point(◇): M5 becomes a stone worn smooth by daily water — not shattered, rounded into a pebble; M2 becomes too distant to remember — trauma wasn't healed, just layered over by routine; M3 becomes progressively miniaturized — first change the world, then the company, then the desk, finally just clock out on time.",
        topology: "M5 的锐度被日常性的重复磨损归零。不是单次冲击——是累积的微磨蚀。M3 的规模被逐步缩小。",
        topologyEn: "M5's sharpness is worn to zero by daily repetition. Not a single impact — cumulative micro-abrasion. M3's scale is progressively miniaturized.",
        directive: {
            bright: "他的棱角被磨掉了。但也许这是成熟——他学会了和世界相处，不再用头撞墙。让读者看到一种可能：适应不等于投降。他安静了，他的愤怒变成了别的东西——也许是耐心，也许是智慧，也许是一种更深层的力量。不是所有的安静都是死亡。有些安静是土壤。",
            dark: "他没有被暴力打败。是日常性驯服了他。固定的闹钟、重复的早餐、可预测的奖惩——一天一天地，他的棱角全部磨掉了。让读者感到的不是压迫——而是一种温水煮青蛙式的恐惧。他最初想改变世界，后来想改变公司，再后来想改变自己的工位，最后他只想准时下班。他不再愤怒了。但不是因为超越了——是因为钝了。",
            tension: "他变了。不是某一天突然变的——是一天一天地变的。让读者在他现在的平静中隐约看到他从前的轮廓——那些棱角曾经在那里。是被磨掉了还是被打磨了？是成熟还是钝化？让读者在这两种描述之间找不到分界线。因为也许根本没有分界线。"
        },
        reference: "《革命之路》夫妻从「逃离郊区」的狂热计划慢慢退缩回修剪草坪的日常；《办公空间》彼得每天在格子间里被日常磨到连灵魂都是灰色的。",
        referenceEn: "The couple retreating from their escape plan back to lawn-mowing routine in Revolutionary Road; Peter ground to a grey soul in his cubicle in Office Space."
    },

    // ── 6 ──
    {
        id: "m7a_generational_transmission",
        name: "代际传染", nameEn: "Generational Transmission",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体未能打破压迫的模式，将相同的创伤或权力结构原封不动地传递给了下一代。",
        defEn: "The subject fails to break the pattern of oppression, transmitting the same trauma or power structure unchanged to the next generation.",
        core: "A面：传递本身不一定是失败——你传下去的不只有创伤，还有生存的智慧。伤疤也是地图。 / B面：但你发誓过「我绝不会像我父亲那样」。你做到了吗？你用的是不同的词——但你的孩子脸上的表情，和你小时候一模一样。你不是复制了压迫——你进化了它。 | 缝合点(◇)：M4（压迫者）被揭示为上一个版本的你——你不是在和外部敌人战斗，你是在和遗传代码战斗；M5 被揭示为一种变异的复制——你的反抗动作在你的孩子身上以新的形式重演；M6 被揭示为延期付款——你没有付清代价，你把账单转给了下一代。",
        coreEn: "A-side: Transmission isn't necessarily failure — you pass down survival wisdom along with trauma. Scars are also maps. / B-side: But you swore 'I'll never be like my father.' Did you succeed? You used different words — but the expression on your child's face is identical to yours at that age. You didn't copy oppression — you evolved it. | Quilting Point(◇): M4 becomes a previous version of you — not fighting an external enemy but genetic code; M5 becomes mutated replication — your resistance replays in new forms through your child; M6 becomes deferred payment — you didn't pay the price, you forwarded the bill to the next generation.",
        topology: "M4 的模式通过 M1 传递至下一代 M1。M5 的反抗姿态被变异复制而非终止。因果链跨越单个生命周期。",
        topologyEn: "M4's pattern transmits through M1 to the next generation's M1. M5's resistance posture is mutationally replicated, not terminated. The causal chain spans beyond a single life cycle.",
        directive: {
            bright: "他传下去了什么？创伤，是的。但也传下去了活下来的方法。让读者看到代际传递的另一面：伤疤也是地图。他的孩子会在某一天看着那些伤痕，明白父亲经历了什么、活过了什么。传递不一定是失败——也可能是一种粗糙但真实的馈赠。生存智慧的形状有时候就是伤疤的形状。",
            dark: "他发誓过「我绝不会像我父亲那样」。然后有一天他发现自己正在对孩子做同样的事——用不同的词，用更精致的方式，但孩子脸上的表情和他小时候一模一样。让读者感到一种宿命的恐惧：压迫不是被复制的——它是被进化的。每一代都以为自己打破了循环，每一代都只是给循环换了一层皮。",
            tension: "他看着自己的孩子。孩子的脸上有一种表情——熟悉得让他胃痛。他用了不同的方法，不同的语言，不同的一切。但那个表情还是出现了。让读者在「他打破了循环」和「他进化了循环」之间犹豫不决。也许两者都是真的。也许这就是代际传递最残忍的地方——你永远不知道你传下去的是智慧还是创伤。"
        },
        reference: "《东京物语》父母被子女冷淡对待——而子女终将被自己的子女同样对待；《阳光灿烂的日子》革命者的下一代在无聊中复制了他们父辈的暴力结构。",
        referenceEn: "Parents treated coldly by children who will be treated the same by theirs in Tokyo Story; the revolutionaries' children replicating parental violence structures through boredom in In the Heat of the Sun."
    },

    // ── 7 ──
    {
        id: "m7a_rationalization",
        name: "合理化", nameEn: "Rationalization",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体不是被迫屈服——而是真心相信系统是对的。同化不是失败，而是被主体重新编码为「觉醒」。",
        defEn: "The subject isn't forced to submit — they genuinely believe the system is right. Assimilation isn't defeat but recoded by the subject as 'awakening.'",
        core: "A面：也许他真的想通了——不是所有的转变都是洗脑。人是可以在理性审视后改变立场的。 / B面：但最高明的洗脑恰恰让你觉得「这是我自己想通的」。你无法从内部区分觉醒和驯化——因为两者的主观体验完全相同。你现在的「清醒」，和你昔日的「愤怒」一样，可能只是系统分配给你的当前角色。 | 缝合点(◇)：M3（欲望）被揭示为已被悄悄替换——你以为你改变了目标，但其实是目标改变了你；M5 被揭示为被回收利用——你反抗的能量被系统消化后重新包装成了忠诚；M2 被揭示为入会仪式——你以为的创伤其实是加入系统的门票。",
        coreEn: "A-side: Maybe they genuinely figured it out — not all transformation is brainwashing. People can change positions after rational examination. / B-side: But the most sophisticated brainwashing makes you think 'I figured this out myself.' You can't distinguish awakening from domestication from within — the subjective experience is identical. Your current 'clarity,' like your former 'anger,' may just be the system's assigned role. | Quilting Point(◇): M3 becomes quietly replaced — you think you changed your target, but the target changed you; M5 becomes recycled — resistance energy digested by the system and repackaged as loyalty; M2 becomes an initiation rite — your trauma was actually the entry ticket.",
        topology: "M5（反抗）的能量被系统回收并重新包装为忠诚。觉醒与驯化的主观体验完全相同，从内部不可区分。",
        topologyEn: "M5's (resistance) energy is recycled by the system and repackaged as loyalty. Awakening and domestication are subjectively identical, indistinguishable from within.",
        directive: {
            bright: "他改变了。他现在真心相信系统是对的。让读者考虑一种可能性：也许他真的想通了。不是所有的转变都是洗脑。人是可以在经历之后改变立场的——这本身是一种智识上的诚实。他的新信念可能是理性审视的结果。让读者看到这种可能性的尊严。",
            dark: "他没有被打败，没有被收买，没有被威胁。他是真心实意地相信了系统是对的。让读者感到的不是可怜——而是一种认知层面的眩晕：他的转变看起来像觉醒，听起来像觉醒，他自己也百分之百相信这是觉醒。但读者不确定。让这种不确定悬在那里。最完美的牢笼让囚犯真心觉得自己是自由的。",
            tension: "他变了。他现在相信了他曾经反对的东西。他的眼睛很平静，他的语气很真诚。让读者无法判断：这是觉醒还是最精致的驯化？从外面看不出来。从里面也看不出来——因为两者的主观体验完全相同。让这个不可判定性成为故事最后的音符。"
        },
        reference: "《1984》温斯顿最终真心爱上了老大哥——不是表演，是灵魂深处的转变；《浪潮》学生们在实验结束后依然不愿相信自己被操控了。",
        referenceEn: "Winston genuinely loving Big Brother — not performance, but transformation at the soul level in 1984; students refusing to believe they were manipulated after the experiment ends in The Wave."
    },

    // ── 8 ──
    {
        id: "m7a_solidified_mask",
        name: "假面凝固", nameEn: "The Solidified Mask",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "为求生存戴上的面具戴得太久，长进了肉里。面具与面孔之间不再有缝隙。",
        defEn: "The mask worn for survival was worn too long and grew into the flesh. No gap remains between mask and face.",
        core: "A面：也许面具下面本来就没有「真实的脸」——所有身份都是建构的。面具凝固不是失去自我，而是完成了一次彻底的自我重建。 / B面：但你记得最初戴上面具时那种窒息感吗？你现在不觉得窒息了——不是因为面具变得透气了，而是因为你已经忘记了呼吸是什么感觉。你失去的不是面具下的脸——你失去的是「面具下面有脸」这个记忆。 | 缝合点(◇)：M1（匮乏）被揭示为已被面具填充——你的缺失不再疼痛，因为假体已经长成了骨头；M5 被揭示为表演——你以为你在反抗，但你的反抗姿态也是面具的一部分；M3 被揭示为面具的欲望而非你的欲望——你追求的东西是角色设定里写好的。",
        coreEn: "A-side: Maybe there was never a 'real face' beneath — all identity is constructed. Mask solidifying isn't losing self but completing a total self-reconstruction. / B-side: But remember the suffocation when you first put the mask on? You don't feel it now — not because the mask became breathable, but because you forgot what breathing feels like. You didn't lose the face under the mask — you lost the memory that there was a face. | Quilting Point(◇): M1 becomes filled by the mask — your lack no longer hurts because the prosthetic grew into bone; M5 becomes performance — your rebellion posture is part of the mask; M3 becomes the mask's desire, not yours — what you pursue was written in the character sheet.",
        topology: "面具与 M1 之间的间隙归零。「真实面孔」的记忆被覆盖。M5 的反抗姿态本身成为面具的一部分。",
        topologyEn: "The gap between mask and M1 zeroes. The memory of a 'real face' is overwritten. M5's resistance posture itself becomes part of the mask.",
        directive: {
            bright: "面具长进了肉里。但也许面具下面本来就没有「真实的脸」——所有身份都是建构的。让读者看到一种可能性：面具凝固不是失去自我，而是完成了一次彻底的自我重建。他现在的这张脸——不管它的来历如何——是他的。他用它呼吸、微笑、活着。也许这就是真实。",
            dark: "他最初戴上面具是为了活下去。后来面具戴得太久，长进了肉里。现在他已经分不清哪个是面具、哪个是脸了——或者更准确地说，这个问题已经不再困扰他了。让读者在结尾感到一种安静的恐怖：他看起来完整了，甚至比从前更自信。但读者记得他最初戴上面具时的那张哭泣的脸。他不记得了。",
            tension: "面具戴了太久。长进了肉里。让读者看着他的脸——平静的、完整的、自信的——然后想起他最初戴上面具时的那个瞬间。他还记得吗？也许记得。也许那个记忆也被面具覆盖了。让读者在「重建」和「覆盖」之间找不到分界线。也许面具下面有脸。也许从来没有。"
        },
        reference: "《小丑》亚瑟最终完全成为了小丑——不是伪装，是真正的身份替换；《无间道》陈永仁卧底太久，连自己都不确定哪个身份是真的。",
        referenceEn: "Arthur fully becoming the Joker — not disguise but genuine identity replacement in Joker; Chen going undercover so long he can't tell which identity is real in Infernal Affairs."
    },

    // ── 9 ──
    {
        id: "m7a_complicity_structure",
        name: "共犯结构", nameEn: "Complicity Structure",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体从受害者的位置滑入了帮凶的位置。不是主动选择——而是在求生的过程中，双手已经沾满了别人的血。",
        defEn: "The subject slides from victim's position into accomplice's. Not by choice — but in the process of survival, their hands are already covered in others' blood.",
        core: "A面：在不可能的处境下活着本身就是一种成就——干净的手是只有旁观者才能负担的奢侈品。 / B面：但「我也是受害者」这句话还能说多久？你确实是被迫的——但被迫不等于无辜。你活下来了，代价是有人因为你的沉默或配合而没能活下来。你和压迫者之间的区别，已经薄到需要显微镜才能看到。 | 缝合点(◇)：M4（压迫者）被揭示为你的雇主——你以为你在对抗它，但你的工资单上写着它的名字；M6 被揭示为别人替你付的——你以为你在承受代价，但真正的账单寄到了另一个地址；M5 被揭示为系统的润滑剂——你的每一次小小的配合，都让这台机器运转得更顺畅。",
        coreEn: "A-side: Surviving impossible circumstances is an achievement — clean hands are a luxury only bystanders can afford. / B-side: But how long can you say 'I was a victim too'? You were coerced — but coerced isn't innocent. You survived at the cost of someone else's silence or compliance. The line between you and the oppressor now requires a microscope. | Quilting Point(◇): M4 becomes your employer — you thought you fought it, but your paycheck bears its name; M6 becomes paid by someone else — the real bill was sent to another address; M5 becomes the system's lubricant — your every small compliance made the machine run smoother.",
        topology: "M1 从受害者位置连续滑移至帮凶位置。受害与加害之间的边界被求生行为模糊至不可分辨。",
        topologyEn: "M1 continuously slides from victim position to accomplice position. The boundary between victimhood and perpetration is blurred to indistinguishability by survival behavior.",
        directive: {
            bright: "他活下来了——在一个不可能的处境里。他的手不干净。但干净的手是只有旁观者才能负担的奢侈品。让读者看到一种无法被简单审判的存在：他做了他必须做的事。这不是辩护——是事实。在那种环境下活着本身就需要某种残酷的智慧。让读者感到这种智慧的重量而不急于道德审判。",
            dark: "他是受害者。然后在某个拐点上，他的双手沾上了别人的血——不是因为邪恶，而是因为活下去。让读者无法简单地同情或谴责他。他和压迫者之间的界限已经薄到几乎透明。最让人不安的是：他知道。他知道自己做了什么。但他也知道，如果再来一次，他还是会做同样的选择。",
            tension: "他活下来了。不是所有人都活下来了。让读者在他的脸上看到两种东西：一个受害者的疲惫和一个帮凶的沉默。他和压迫者之间的界限在哪里？他自己也不确定。让读者在「理解」和「不安」之间来回摇摆。不要帮他辩护。也不要审判他。把他放在那里。"
        },
        reference: "《辛德勒的名单》犹太警察帮纳粹维持秩序——他们也是囚犯，但手上也有同胞的血；《索尔之子》主角在集中营焚尸炉工作——帮凶身份是活下去的唯一条件。",
        referenceEn: "Jewish police maintaining order for Nazis — prisoners themselves, but with compatriots' blood on their hands in Schindler's List; the protagonist working the crematorium — complicity as the sole condition of survival in Son of Saul."
    },

    // ── 10 ──
    {
        id: "m7a_functional_survival",
        name: "功能性存活", nameEn: "Functional Survival",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体通过自我截肢活了下来。切掉了记忆、情感、或身份中无法与系统兼容的部分。",
        defEn: "The subject survives through self-amputation — cutting away memories, emotions, or parts of identity incompatible with the system.",
        core: "A面：自我截肢是一种极端的务实——你留下了能用的部分，丢掉了会害死你的部分。这是生存智慧的最高形态。 / B面：但被切掉的那些部分里，有你爱过的人的名字、有你曾经相信的东西、有让你之所以是你的那块拼图。你活下来了——但活下来的是一个功能齐全的残缺品。你能工作、能吃饭、能社交——只是再也不会做梦了。 | 缝合点(◇)：M1（匮乏）被揭示为自我制造的——你的缺失不是天生的，是你亲手切的；M3 被揭示为已被手术摘除——你不再想要任何东西，不是因为你满足了，而是因为欲望的器官已经被摘掉了；M6 被揭示为预防性支出——你提前支付了代价，以免将来付更多。",
        coreEn: "A-side: Self-amputation is extreme pragmatism — keep what works, discard what kills. The highest form of survival intelligence. / B-side: But what was cut included names of people you loved, things you believed, the piece that made you you. You survived — but what survived is a fully functional fragment. You can work, eat, socialize — just never dream again. | Quilting Point(◇): M1 becomes self-manufactured — your lack isn't innate, you cut it yourself; M3 becomes surgically removed — you no longer want anything, not from fulfillment but because the organ of desire was excised; M6 becomes preventive expenditure — you prepaid the price to avoid paying more later.",
        topology: "M1 主动切除自身与系统不兼容的部分。功能完整但本质残缺。M3 被手术摘除——欲望器官不在了。",
        topologyEn: "M1 actively excises parts of itself incompatible with the system. Functionally complete but essentially fragmented. M3 is surgically removed — the organ of desire is gone.",
        directive: {
            bright: "他活下来了——通过做出一个极端务实的选择：留下能用的部分，丢掉会害死他的部分。让读者看到这种选择的智慧：不是每一部分的自我都值得用命去保护。他切掉了会让他在这个环境中死去的东西。这是生存的最高形态。他不完整——但他活着。而活着本身就是一种胜利。",
            dark: "他活下来了——通过切掉自己身上所有无法与系统兼容的部分。记忆、情感、曾经相信的东西。让读者看到一个功能齐全的人：他能工作，能吃饭，能社交，能微笑。但有某种东西永远地不在了。他自己也说不清丢了什么。他只是再也不做梦了。让读者在这种「一切正常」的表面下感到一种深层的缺席。",
            tension: "他看起来正常。功能齐全。工作、吃饭、社交——一切运转良好。但让读者注意到某个微小的细节：他不再做梦了，或者他的笑容总是准时出现准时消失。他切掉了什么以换取这份正常？让读者在「务实的智慧」和「不可逆的损失」之间感到一种安静的不安。"
        },
        reference: "《机器人总动员》公理号上的人类切掉了行走能力以适应飘浮生活——功能完整，本质残缺；《赎罪》布里奥妮用一生的写作代替了真实的道歉——活着，但活着的方式是一种持续的自我截肢。",
        referenceEn: "Axiom humans who cut away walking ability to adapt to floating life — functionally complete, essentially fragmented in WALL-E; Briony substituting a lifetime of writing for a real apology — alive, but living as continuous self-amputation in Atonement."
    },

    // ── 11 ──
    {
        id: "m7a_coopted_rebellion",
        name: "叛逆的收编", nameEn: "Co-opted Rebellion",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体的反抗被系统吸收、包装、出售。叛逆成为了系统最畅销的商品。",
        defEn: "The subject's rebellion is absorbed, packaged, and sold by the system. Revolt becomes the system's bestselling product.",
        core: "A面：你的声音被听到了——哪怕是以商品的形式。影响力不问出处。 / B面：但被听到和被消化是两回事。你的愤怒现在印在T恤上，你的口号是某个品牌的slogan，你的反抗精神被标价 $29.99。你没有被打败——你被上架了。你越反抗，系统的货架就越丰富。 | 缝合点(◇)：M5（反抗）被揭示为免费的市场调研——系统让你先冲锋，然后把你的冲锋姿态拍下来做成海报；M4 被揭示为策展人而非审查官——它不删除你的作品，它给你办展览；M3 被揭示为已经是商品目录上的一个条目——你以为你在追求自由，但「自由」是今年的流行色。",
        coreEn: "A-side: Your voice was heard — even in commodity form. Influence doesn't ask its origin. / B-side: But being heard and being digested are different things. Your anger is on T-shirts, your slogan is a brand tagline, your rebellion is priced at $29.99. You weren't defeated — you were shelved. The more you rebel, the richer the system's inventory. | Quilting Point(◇): M5 becomes free market research — the system lets you charge first, then photographs your pose for a poster; M4 becomes curator not censor — it doesn't delete your work, it gives you an exhibition; M3 becomes an item in the product catalog — you thought you pursued freedom, but 'freedom' is this year's trending color.",
        topology: "M5 的输出被系统吸收为商品。反抗的能量不被消灭而是被货币化。系统通过收编扩大自身容量。",
        topologyEn: "M5's output is absorbed by the system as commodity. Resistance energy is not destroyed but monetized. The system expands its capacity through co-optation.",
        directive: {
            bright: "他的声音被听到了——虽然是以商品的形式。但影响力不问出处。让读者看到：即使被包装、被上架、被标价——这些话曾经从他嘴里说出来过。种子是真的，即使土壤不是他选的。也许有一天，某个买了那件T恤的人会因为上面的话开始真正地思考。传播本身就是一种胜利，不管传播的载体有多荒谬。",
            dark: "他反抗了。他的反抗被录下来、被剪辑、被加上滤镜、被标价出售。他的愤怒印在T恤上，他的口号变成了某个品牌的广告语。让读者感到一种荒诞的窒息：他没有被打败——他被上架了。系统不需要消灭反抗者，只需要给他们开一家店。他越愤怒，货架就越丰富。",
            tension: "他的话被印在了T恤上。他的姿态被拍成了海报。让读者分不清：这是他的声音被传播了，还是他的声音被消化了？也许两者是同时发生的。也许传播和消化之间没有区别——或者只有时间能分辨。让这个问题像一件标价 $29.99 的T恤一样挂在那里。"
        },
        reference: "《搏击俱乐部》反消费主义宣言本身成为了最畅销的消费品；切·格瓦拉的脸被印在资本主义生产的T恤上全球热卖。",
        referenceEn: "The anti-consumerism manifesto becoming the bestselling consumer product in Fight Club; Che Guevara's face mass-produced on capitalist T-shirts sold worldwide."
    },

    // ── 12 ──
    {
        id: "m7a_self_colonization",
        name: "自我殖民", nameEn: "Self-Colonization",
        group: "B. 异化的裁决", groupEn: "Verdict of Assimilation",
        def: "主体将压迫者的目光内化为自己的目光，开始用敌人的标准审视、评判、厌恶自己。",
        defEn: "The subject internalizes the oppressor's gaze as their own, beginning to scrutinize, judge, and loathe themselves by the enemy's standards.",
        core: "A面：能用他者的视角看自己是一种元认知能力——它可以被用来理解偏见的结构，而不是被偏见吞噬。 / B面：但内化是不可逆的。你已经无法区分「我的审美」和「殖民者的审美」。你厌恶自己的方式如此精确、如此专业——因为你已经被培训成了自己最好的审讯者。外部敌人可以被驱逐——内部敌人和你共用一副眼球。 | 缝合点(◇)：M4（压迫者）被揭示为已经搬进了你的头颅——不需要外部执法，你自己就是最忠实的巡逻兵；M2 被揭示为一面被安装在内部的镜子——你以为你在「看清自己」，但你看到的是压迫者设计好的倒影；M1 被揭示为被重新编程的——你的匮乏感不是天生的，是被植入的——你被教会了觉得自己不够好。",
        coreEn: "A-side: Seeing yourself through the other's perspective is metacognition — it can be used to understand the structure of bias rather than be consumed by it. / B-side: But internalization is irreversible. You can no longer distinguish 'my aesthetic' from 'the colonizer's aesthetic.' You loathe yourself with such precision because you've been trained as your own best interrogator. External enemies can be expelled — internal ones share your eyeballs. | Quilting Point(◇): M4 becomes relocated inside your skull — no external enforcement needed, you are your own most faithful patrol; M2 becomes an internally installed mirror — you think you're 'seeing clearly,' but you see the oppressor's designed reflection; M1 becomes reprogrammed — your sense of lack isn't innate, it was implanted — you were taught to feel inadequate.",
        topology: "M4 从外部位置迁移至 M1 内部。压迫者的审视标准被内化为自我评判标准。外部执法变为自我监控。",
        topologyEn: "M4 migrates from external position to inside M1. The oppressor's standards of scrutiny are internalized as self-judgment criteria. External enforcement becomes self-surveillance.",
        directive: {
            bright: "他学会了用另一种视角看自己。这种视角最初来自压迫者——但他把它变成了一种工具。让读者看到一种元认知的可能：他能看到偏见的结构，而不被偏见吞噬。他用敌人的眼睛观察自己——但他知道那是敌人的眼睛。这种「知道」本身就是一种抵抗。他没有被内化——他在内化的过程中保留了一个观察者。",
            dark: "他打败了外部的敌人。但有一天他发现：敌人已经搬进了他的脑子里。他用敌人的标准审视自己，用敌人的语言评判自己，用敌人的眼光厌恶自己——而他把这一切叫做「客观」。让读者感到的恐怖是：外部敌人可以被驱逐，但已经搬进头颅内部的敌人和你共用同一副眼球。他不需要被监视了——他自己就是最忠实的巡逻兵。",
            tension: "他用一种精确的方式审视自己。这种精确从哪里来的？让读者隐约意识到：他的自我评判标准不全是他自己的——其中有一些频率，来自一个他以为自己已经战胜的敌人。但他分不清了。他的审美和殖民者的审美已经混在了一起。让读者和他一起面对这个无法分辨的混合物。不要替他解开它。"
        },
        reference: "《黑天鹅》妮娜用完美主义的目光审判自己的每一个动作——那个「不够好」的声音不是她的，是被植入的；《燃烧》钟秀用首尔的标准审视自己的乡下出身——他的自卑是一种精确的内部殖民。",
        referenceEn: "Nina judging her every move through perfectionist eyes — the 'not good enough' voice isn't hers, it was implanted in Black Swan; Jong-su scrutinizing his rural origins by Seoul standards — his inferiority is precise internal colonization in Burning."
    },
];
