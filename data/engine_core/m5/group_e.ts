import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_E: LibraryItemDef[] = [
    // ============================================================
    // GROUP E. 熔毁的驱力 (The Meltdown) — 20 Items
    // 所有结构溶解，能量失去方向。凝固的反面。
    // 熔毁不等于毁灭。哭泣是熔毁，原谅是熔毁，放手也是熔毁。
    // 光谱：解放性熔毁(1-7) → 失控性熔毁(8-13) → 湮灭性熔毁(14-20)
    // ============================================================

    // ---- 解放性熔毁：旧结构溶解，新的可能性才能流入 ----

    {
        id: "drv_metamorphosis",
        name: "蜕变", nameEn: "Metamorphosis",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "旧的你正在溶解，新的你还没有成形。你在两个版本之间。",
        defEn: "The old you is dissolving; the new you hasn't formed yet. You're between two versions.",
        core: "A面：蜕变是有方向的熔毁——蛇蜕皮、蝉蜕壳，旧结构必须先碎裂新形态才能长出来。蜕变期很疼，但它通向某个地方。/ B面：但不是所有熔毁都通向蜕变——有时候你碎了就是碎了，没有新的形态在等你。你以为你在蜕变，也许你只是在崩溃。关键张力：你怎么知道你正在经历的是蜕变还是瓦解？ | 驱力回路 (Trieb): 蜕——旧壳碎裂的声音，就是新生的声音。",
        coreEn: "A-side: Metamorphosis is meltdown with direction — snakes shed skin, cicadas crack shells; old structure must shatter for new form. The process hurts, but leads somewhere. / B-side: But not all meltdown leads to metamorphosis — sometimes you break and just stay broken. You think you're transforming; maybe you're just collapsing. Key tension: How do you know you're metamorphosing or simply falling apart? | Drive Circuit (Trieb): Molting — the sound of the old shell cracking is the sound of new life.",
        reference: "《黑天鹅》妮娜在精神崩溃中完成了从白天鹅到黑天鹅的蜕变；《寄生虫》基泽一家在豪宅暴雨夜经历了身份认知的彻底熔毁。",
        referenceEn: "Nina completing her white-to-black swan metamorphosis through mental breakdown in Black Swan; the Kim family's complete identity meltdown on rainy night in Parasite."
    },
    {
        id: "drv_letting_go",
        name: "放手", nameEn: "Letting Go",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你一直紧握的东西——松开手指。不是被夺走，是你选择松开的。",
        defEn: "What you've gripped tightly — you open your fingers. Not taken, but chosen to release.",
        core: "A面：放手是最勇敢的熔毁——你主动溶解了自己和某人、某事之间的连接。这需要的勇气比紧紧抓住更大，因为松开之后你必须面对空着的手。/ B面：但放手也可以是一种伪装的放弃——你说'我放下了'，其实你只是没有力气再拿着了。真正的放手是平静的，假的放手背后藏着怨恨。关键张力：你松手了——但你的心也松开了吗？ | 驱力回路 (Trieb): 松开——手指一根一根打开，最后一根最难。",
        coreEn: "A-side: Letting go is the bravest meltdown — voluntarily dissolving the connection between yourself and someone or something. This takes more courage than holding on, because you must face the empty hand after. / B-side: But letting go can disguise surrender — you say 'I've moved on' when really you just couldn't hold on anymore. True letting go is calm; fake letting go hides resentment. Key tension: Your hand opened — but did your heart? | Drive Circuit (Trieb): Releasing — fingers opening one by one; the last one is hardest.",
        reference: "《冰雪奇缘》Let It Go——艾尔莎放手的瞬间反而获得了力量；《星际穿越》库珀松开女儿的手穿越虫洞的那个撕裂时刻。",
        referenceEn: "Elsa gaining power in the instant of letting go in Frozen; Cooper releasing his daughter's hand to cross the wormhole in Interstellar."
    },
    {
        id: "drv_weeping",
        name: "哭泣", nameEn: "Weeping",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "防线全部溃堤。不是软弱——是你终于不再假装坚强了。",
        defEn: "All defenses breached. Not weakness — you've finally stopped pretending to be strong.",
        core: "A面：哭泣是身体对心灵超载的安全阀——当悲伤、委屈或感动大到语言无法承载时，身体接管了表达权。眼泪是你把无法说出的话翻译成了液体。/ B面：但哭泣也可以变成一种操纵工具——你发现眼泪可以让别人让步，于是你的哭不再是情感的溢出，而是策略的一部分。关键张力：这滴眼泪是真的流出来的，还是你知道它会有效果才放出来的？ | 驱力回路 (Trieb): 溃堤——忍了太久，终于忍不住了。",
        coreEn: "A-side: Weeping is the body's safety valve for emotional overload — when grief or gratitude exceeds what language can carry, the body takes over expression. Tears translate the unsayable into liquid. / B-side: But tears can become manipulation — once you discover crying makes people yield, your tears shift from overflow to strategy. Key tension: Did this tear truly fall, or did you release it knowing its effect? | Drive Circuit (Trieb): Dam burst — held too long; finally couldn't hold.",
        reference: "《心灵捕手》'这不是你的错'——听到第五遍终于崩溃大哭的那一刻；《辛德勒的名单》'我本来可以多救一些人'的痛哭。",
        referenceEn: "'It's not your fault' — the breakdown after hearing it the fifth time in Good Will Hunting; 'I could have saved more' — the anguished weeping in Schindler's List."
    },
    {
        id: "drv_revelry",
        name: "狂欢", nameEn: "Revelry",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "在节日、酒精或极端情境中暂时溶解所有社会规则和身份。",
        defEn: "Temporarily dissolving all social rules and identity in festivals, alcohol, or extremes.",
        core: "A面：狂欢是有时限的熔毁——一个晚上你忘了你是谁、你该怎样、你欠谁的。规则暂时失效，身体暂时属于你自己。每个文明都需要狂欢节，否则秩序会把人压碎。/ B面：但狂欢结束后你还是得回去——明天太阳升起，你还是那个你。如果你越来越依赖狂欢来逃避日常，那它就不再是解放，而是另一种牢笼。关键张力：狂欢是让你更自由还是让你更依赖？ | 驱力回路 (Trieb): 释放——今晚什么都不算数，明天再说。",
        coreEn: "A-side: Revelry is time-limited meltdown — one night forgetting who you are, what you owe, what you should be. Rules pause, body is yours. Every civilization needs carnival or order crushes people. / B-side: But after revelry you still must return — tomorrow's sun, same you. If you need revelry more and more to escape daily life, it's no longer liberation but another cage. Key tension: Does revelry make you freer or more dependent? | Drive Circuit (Trieb): Release — tonight nothing counts; tomorrow we'll see.",
        reference: "《巴比伦》好莱坞黄金时代的狂欢派对——一切在天亮后崩塌；《仲夏夜惊魂》瑞典社区的仪式狂欢——解放和恐怖无法区分。",
        referenceEn: "Hollywood's golden-age revelry crumbling after dawn in Babylon; the Swedish commune's ritual revelry — liberation and horror indistinguishable in Midsommar."
    },
    {
        id: "drv_forgiveness",
        name: "原谅", nameEn: "Forgiveness",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "溶解你对某人的恨。不是因为他值得，而是因为恨太重了。",
        defEn: "Dissolving your hatred for someone. Not because they deserve it, but because the hate is too heavy.",
        core: "A面：原谅是最难的熔毁——你的恨是一面保护你的墙，溶解它意味着你要面对墙后面那个受伤的自己。但只要你还恨着他，他就还占据着你的精神空间。原谅不是为了他，是为了你自己。/ B面：但'原谅'也可以是一种自我欺骗——你说你原谅了，但你只是把恨压到了更深的地方。关键张力：你原谅他了——还是你只是太累了而选择了停止战斗？ | 驱力回路 (Trieb): 放下——恨够了，我要把这个重量卸掉。",
        coreEn: "A-side: Forgiveness is the hardest meltdown — your hatred is a protective wall; dissolving it means facing the wounded self behind. But while you hate, they still occupy your mental space. Forgiveness isn't for them; it's for you. / B-side: But 'forgiveness' can be self-deception — you say you've forgiven, but just pressed the hatred deeper. Key tension: Did you forgive them — or just get too tired to keep fighting? | Drive Circuit (Trieb): Putting down — hated long enough; time to drop this weight.",
        reference: "《密阳》母亲试图原谅杀害儿子的凶手但发现她做不到；《辛德勒的名单》'力量是当你有充分理由杀他但选择不杀。'",
        referenceEn: "A mother trying to forgive her son's killer but discovering she can't in Secret Sunshine; 'Power is when you have every reason to kill but choose not to' in Schindler's List."
    },
    {
        id: "drv_awakening",
        name: "觉醒", nameEn: "Awakening",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "你一直相信的东西突然溶解了。你不知道该信什么了——但你第一次睁开了眼睛。",
        defEn: "What you always believed suddenly dissolves. You don't know what to believe — but for the first time, your eyes are open.",
        core: "A面：觉醒是旧信念系统的熔毁——你以前觉得理所当然的一切突然变得可疑。这很痛苦，但痛苦本身就是你正在醒来的证据。第一次用自己的眼睛看世界，即使看到的东西很丑。/ B面：但觉醒也可以是一种新的傲慢——你觉得你'看清了'，但也许你只是换了一副更高级的幻觉眼镜。关键张力：你醒来了——但你看到的就是真相吗？还是你只是从一个梦跳进了另一个梦？ | 驱力回路 (Trieb): 醒来——再也睡不着了。",
        coreEn: "A-side: Awakening is the old belief system's meltdown — everything once taken for granted suddenly becomes suspect. It's painful, but pain itself proves you're waking. Seeing the world through your own eyes for the first time, even if it's ugly. / B-side: But awakening can be new arrogance — you think you 'see clearly,' maybe you just put on better illusion glasses. Key tension: You woke up — but is what you see truth? Or did you just jump from one dream into another? | Drive Circuit (Trieb): Waking — can never fall asleep again.",
        reference: "《黑客帝国》红蓝药丸——选择醒来之后就永远不能回去了；《楚门的世界》楚门推开那扇门走出去的那一步。",
        referenceEn: "The red pill — choosing to wake means never going back in The Matrix; Truman pushing open the door and stepping out in The Truman Show."
    },
    {
        id: "drv_liberation",
        name: "解脱", nameEn: "Liberation",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "束缚你的东西终于消失了。你第一次体验到'不再需要扛着'的轻盈。",
        defEn: "What bound you finally vanishes. For the first time you feel the lightness of 'no longer carrying it.'",
        core: "A面：解脱是最温柔的熔毁——不是你打碎了什么，而是某个东西终于放过了你。那个一直压在你胸口的重量消失了，你第一次深呼吸——原来自由是这个感觉。/ B面：但解脱之后可能是空虚——你太久定义自己为'扛着这个重量的人了'，当重量消失，你也不知道自己是谁了。关键张力：你被解放了——但你能承受自由的重量吗？ | 驱力回路 (Trieb): 松绑——绳子断了，身体还留着绳子的印记。",
        coreEn: "A-side: Liberation is the gentlest meltdown — you didn't break anything; something finally released you. The weight on your chest vanishes and you breathe deeply for the first time — so this is what freedom feels like. / B-side: But after liberation may come emptiness — you defined yourself as 'the one carrying this weight' for so long that without it, you don't know who you are. Key tension: You're freed — but can you bear the weight of freedom? | Drive Circuit (Trieb): Unbound — the rope broke, but the body still bears its marks.",
        reference: "《肖申克的救赎》安迪在暴雨中张开双臂的那一刻；《为奴十二年》所罗门在十二年后终于说出'我是自由人'。",
        referenceEn: "Andy spreading his arms in the pouring rain in Shawshank Redemption; Solomon finally saying 'I am a free man' after twelve years in 12 Years a Slave."
    },

    // ---- 失控性熔毁：结构溶解的速度超过了你重建的能力 ----

    {
        id: "drv_breakdown",
        name: "崩溃", nameEn: "Breakdown",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你一直在扛，终于扛不住了。所有东西同时碎了。",
        defEn: "You've been carrying everything; finally you can't. Everything shatters at once.",
        core: "A面：崩溃是被延迟了太久的熔毁——你扛了太多太久，每一天都在说'还行'，直到某一天一件很小的事让你彻底垮了。不是最后那根稻草太重，而是前面九百九十九根从没被允许放下。/ B面：但崩溃有时候是必要的——你的结构已经不适合你了，它必须碎掉你才能长出新的。关键张力：崩溃是终点还是起点？你在倒塌还是在推倒重建？ | 驱力回路 (Trieb): 碎裂——撑不住了，让它碎吧。",
        coreEn: "A-side: Breakdown is meltdown delayed too long — carried too much too long, saying 'I'm fine' daily, until one tiny thing makes you collapse entirely. Not that the last straw was heavy; the 999 before were never allowed to be put down. / B-side: But breakdown is sometimes necessary — your structure no longer fits; it must shatter for the new to grow. Key tension: Is breakdown an end or a beginning? Falling down or demolition for rebuilding? | Drive Circuit (Trieb): Shattering — can't hold anymore; let it break.",
        reference: "《婚姻故事》吵架那场戏——两个人同时在对方面前碎成了碎片；《海边的曼彻斯特》李在警察局试图用警察的枪自杀的瞬间崩溃。",
        referenceEn: "The argument scene — two people shattering into pieces before each other in Marriage Story; Lee's instant collapse reaching for the officer's gun in Manchester by the Sea."
    },
    {
        id: "drv_drowning",
        name: "沉溺", nameEn: "Drowning",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你知道你正在往下沉，但你不挣扎了。水很暖。",
        defEn: "You know you're sinking, but you've stopped struggling. The water is warm.",
        core: "A面：沉溺是放弃了方向的熔毁——你不再试图游上去，不是因为你不能，而是因为你太累了。往下沉的感觉其实很安静、很舒服。不再挣扎的那一刻有一种奇怪的平静。/ B面：但那种平静是死亡的平静——你的大脑在缺氧时产生了虚假的宁静感。那不是接受，那是神经系统的关机。关键张力：你停止挣扎是因为你想通了，还是因为你放弃了？ | 驱力回路 (Trieb): 下沉——不挣了，就这样吧。",
        coreEn: "A-side: Drowning is meltdown without direction — you stop trying to swim up, not from inability but exhaustion. Sinking feels quiet, comfortable. The moment you stop struggling brings strange calm. / B-side: But that calm is death's calm — your oxygen-deprived brain produces false serenity. That's not acceptance; it's the nervous system shutting down. Key tension: Did you stop struggling because you understood, or because you gave up? | Drive Circuit (Trieb): Sinking — no more struggling; let it be.",
        reference: "《离开拉斯维加斯》一个编剧决定用酒精把自己淹死的全过程；《迷失东京》漂浮在异乡城市里找不到下沉或上浮的方向。",
        referenceEn: "A screenwriter's entire process of drowning himself in alcohol in Leaving Las Vegas; floating in a foreign city with no direction to sink or rise in Lost in Translation."
    },
    {
        id: "drv_addiction",
        name: "上瘾", nameEn: "Addiction",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你知道它在毁掉你，但你停不下来。每一次'最后一次'都是谎言。",
        defEn: "You know it's destroying you, but you can't stop. Every 'last time' is a lie.",
        core: "A面：上瘾是驱力最纯粹的暴露——不是欲望（欲望有对象），是驱力本身（那个无限重复的回路）。你追的不是那个东西给你的快感，而是'再来一次'这个动作本身。/ B面：但上瘾的核心秘密是——你上瘾的不是那个物质，而是它让你暂时不用面对的那个东西。每一次'来一次'都是在推迟一个你无法面对的真相。关键张力：如果你戒掉了它，你准备好面对它帮你逃避的那个东西了吗？ | 驱力回路 (Trieb): 再来一次——明知是毒，但手已经伸出去了。",
        coreEn: "A-side: Addiction is the drive's purest exposure — not desire (which has an object) but drive itself (the infinitely repeating circuit). You chase not the pleasure but the act of 'one more time' itself. / B-side: But addiction's core secret — you're not addicted to the substance but to what it lets you temporarily avoid. Every 'one more' postpones a truth you can't face. Key tension: If you quit, are you ready to face what it helped you escape? | Drive Circuit (Trieb): One more — knowing it's poison, but the hand already reached out.",
        reference: "《猜火车》'选择生活，选择工作'——但你选择了海洛因；《梦之安魂曲》四个人各自上瘾的回路越转越快直到全部崩塌。",
        referenceEn: "'Choose life, choose a job' — but you chose heroin in Trainspotting; four people's addiction loops spinning faster until total collapse in Requiem for a Dream."
    },
    {
        id: "drv_burnout",
        name: "燃尽", nameEn: "Burnout",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你没有崩溃——你只是空了。燃料烧完了，但发动机还在空转。",
        defEn: "You didn't collapse — you're just empty. Fuel's gone, but the engine still idles.",
        core: "A面：燃尽是最安静的熔毁——没有戏剧性的崩溃，只有一种灰色的、均匀的空。你还在做所有该做的事，但里面已经没有任何东西了。你是一台制造正常生活表象的机器。/ B面：但燃尽者最危险的是他们不知道自己已经空了——他们还在继续，因为停下来意味着面对那个空洞。忙碌本身成了最后的麻醉剂。关键张力：你还在运转——但你还活着吗？ | 驱力回路 (Trieb): 空转——什么都没有了，但还在动。",
        coreEn: "A-side: Burnout is the quietest meltdown — no dramatic collapse, just grey, even emptiness. You still do everything required, but nothing's inside. You're a machine manufacturing the appearance of normal life. / B-side: The burnout's danger: not knowing you're empty — continuing because stopping means facing the void. Busyness becomes the last anesthetic. Key tension: You're still running — but are you still alive? | Drive Circuit (Trieb): Idling — nothing left, but still moving.",
        reference: "《在云端》一年飞三百天、解雇别人为生的男人——效率完美，灵魂为零；《醉乡民谣》一个民谣歌手在永远找不到出路的巡回中缓慢燃尽。",
        referenceEn: "A man flying 300 days a year firing people for a living — perfect efficiency, zero soul in Up in the Air; a folk singer slowly burning out on an endless circuit in Inside Llewyn Davis."
    },
    {
        id: "drv_numbness",
        name: "麻木", nameEn: "Numbness",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你不痛了——不是因为好了，而是因为感觉本身被关掉了。",
        defEn: "You don't hurt anymore — not because you healed, but because feeling itself was switched off.",
        core: "A面：麻木是身体的紧急保护——当痛苦超过阈值，神经系统选择了直接关闭感觉回路而不是让你被痛苦烧化。这是一种生存机制。/ B面：但麻木关掉的不只是痛苦——它把快乐、爱、好奇也一起关了。你变成了一个什么都感觉不到的人。安全了，但也死了。关键张力：你宁愿什么都感觉不到，还是冒着再次被痛苦淹没的风险重新打开感觉？ | 驱力回路 (Trieb): 关机——感觉不到了，这样也好。",
        coreEn: "A-side: Numbness is the body's emergency protection — when pain exceeds threshold, the nervous system shuts down the feeling circuit rather than letting pain burn you away. A survival mechanism. / B-side: But numbness doesn't only shut off pain — it closes joy, love, curiosity too. You become someone who feels nothing. Safe, but also dead. Key tension: Would you rather feel nothing, or risk being overwhelmed by pain again to reopen feeling? | Drive Circuit (Trieb): Shutdown — can't feel anymore; maybe that's fine.",
        reference: "《局外人》莫尔索在母亲葬礼上什么都感觉不到——不是冷血，是感觉被关掉了；《索尔之子》在纳粹集中营搬运尸体的人——眼睛是空的。",
        referenceEn: "Meursault feeling nothing at his mother's funeral — not cold-blooded, but feeling switched off in The Stranger; a man carrying corpses in Nazi camps — eyes empty in Son of Saul."
    },
    {
        id: "drv_aphasia",
        name: "失语", nameEn: "Aphasia",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你有太多话想说，但一个字也说不出来。语言在创伤面前碎了。",
        defEn: "You have so much to say but can't speak a single word. Language shattered before trauma.",
        core: "A面：失语是语言层面的熔毁——有些经历太猛烈了，语言这个工具承载不了它。你不是不想说，是'说'这个功能在你身上坏了。每一个尝试表达的词都觉得不对、太轻、太假。/ B面：但失语也可以变成一种避难所——你发现'说不出来'给了你一个不用面对的借口。你不是不能说，是说出来就意味着承认它。关键张力：你说不出来——是因为语言不够用，还是因为说出来会让它变成真的？ | 驱力回路 (Trieb): 哑——嘴张开了，但什么都没有出来。",
        coreEn: "A-side: Aphasia is language-level meltdown — some experiences are too violent for language to carry. You don't refuse to speak; the 'speaking' function broke. Every attempted word feels wrong, too light, too fake. / B-side: But aphasia can become refuge — 'can't say it' gives an excuse not to face it. You can speak; speaking would mean admitting it's real. Key tension: You can't speak — because language isn't enough, or because speaking makes it true? | Drive Circuit (Trieb): Mute — mouth opens, but nothing comes out.",
        reference: "《钢琴家》在战后面对采访什么都说不出来的幸存者；《海边的曼彻斯特》李面对前妻说的'我什么都说不出来'。",
        referenceEn: "Survivors unable to say anything in postwar interviews in The Pianist; Lee's 'I can't say anything' facing his ex-wife in Manchester by the Sea."
    },

    // ---- 湮灭性熔毁：结构的彻底消融，走向虚无或死亡 ----

    {
        id: "drv_self_destruction",
        name: "自毁", nameEn: "Self-Destruction",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "你在系统地拆除自己——你的关系、你的事业、你的健康。而且你知道你在干什么。",
        defEn: "You're systematically dismantling yourself — relationships, career, health. And you know it.",
        core: "A面：自毁不是意外——你非常清楚你在做什么。每一个坏决定都是故意的。在某种扭曲的逻辑里，你觉得你不配拥有好的东西，所以你要在别人来拿走之前自己先毁掉它们。/ B面：但自毁最深的秘密是——你想被阻止。你在测试有没有人在乎到愿意冲过来抓住你的手。关键张力：你在毁掉自己——是因为你真的想消失，还是因为你想看看有没有人来救你？ | 驱力回路 (Trieb): 拆除——一块一块地把自己拆掉，看还剩什么。",
        coreEn: "A-side: Self-destruction isn't accidental — you know exactly what you're doing. Every bad decision is deliberate. In twisted logic, you feel you don't deserve good things, so you destroy them before someone else can take them. / B-side: But self-destruction's deepest secret — you want to be stopped. You're testing whether anyone cares enough to rush over and grab your hand. Key tension: Are you destroying yourself to truly vanish, or to see if someone will come save you? | Drive Circuit (Trieb): Dismantling — taking yourself apart piece by piece to see what's left.",
        reference: "《搏击俱乐部》叙述者系统地毁掉了自己的公寓、工作和全部关系；《鸟人》在首演之夜用真枪代替道具枪射自己的演员。",
        referenceEn: "The narrator systematically destroying his apartment, job, and all relationships in Fight Club; an actor replacing the prop gun with a real one on opening night in Birdman."
    },
    {
        id: "drv_madness",
        name: "疯狂", nameEn: "Madness",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "理性的边界溶解了。你不再能分辨什么是真的什么是假的。",
        defEn: "The boundary of reason dissolves. You can no longer tell what is real from what is not.",
        core: "A面：疯狂是认知结构的彻底熔毁——你赖以理解世界的框架碎了，所有分类失效。这很可怕，但它也让你看到了'正常人'永远看不到的东西。很多天才的边缘就是疯狂的入口。/ B面：但疯狂不是自由——你以为你解放了，其实你只是失去了控制。那些'洞见'也许只是大脑崩溃时产生的碎片。关键张力：你看到了真相——还是你的大脑在碎裂时产生的幻象恰好长得像真相？ | 驱力回路 (Trieb): 失控——分不清了，内和外的界限消失了。",
        coreEn: "A-side: Madness is the total meltdown of cognitive structure — your framework for understanding shatters, all categories fail. Terrifying, but it lets you see what 'normal people' never can. Many geniuses' edge is madness's entrance. / B-side: But madness isn't freedom — you think you're liberated; you've just lost control. Those 'insights' may be debris from a crashing brain. Key tension: Did you see truth — or do your brain's crash artifacts just happen to resemble truth? | Drive Circuit (Trieb): Loss of control — can't tell anymore; the line between inside and outside vanished.",
        reference: "《闪灵》杰克在酒店里逐渐滑入无法分辨现实与幻觉的深渊；《美丽心灵》纳什发现他最信赖的朋友从来不存在。",
        referenceEn: "Jack gradually sliding into the abyss of indistinguishable reality and hallucination in The Shining; Nash discovering his most trusted friend never existed in A Beautiful Mind."
    },
    {
        id: "drv_oblivion",
        name: "遗忘", nameEn: "Oblivion",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "不是忘了某件事——而是'你是谁'正在一点一点被溶解掉。",
        defEn: "Not forgetting something — but 'who you are' being dissolved bit by bit.",
        core: "A面：遗忘是记忆层面的熔毁——你的过去正在消融。名字、面孔、地址、你曾经爱过的人——一个个浮起来又沉下去。某种程度上它是一种残酷的解放：没有过去的人不会被过去伤害。/ B面：但没有记忆的你还是你吗？你的身份是由你记得的东西构成的——当记忆全部消融，剩下的那个身体还能叫'你'吗？关键张力：如果忘记一切可以不再痛苦——你愿意用整个自我来换吗？ | 驱力回路 (Trieb): 消融——我正在一点点变成一张白纸。",
        coreEn: "A-side: Oblivion is meltdown at the memory level — your past is dissolving. Names, faces, addresses, people you loved — surfacing and sinking one by one. In a way, cruel liberation: one with no past can't be hurt by it. / B-side: But are you still you without memory? Your identity is composed of what you remember — when it all dissolves, can what's left still be called 'you'? Key tension: If forgetting everything ends pain — would you trade your entire self? | Drive Circuit (Trieb): Dissolving — I'm slowly becoming a blank page.",
        reference: "《恋恋笔记本》一个丈夫每天为失去记忆的妻子重新讲述他们的爱情故事；《暖暖内含光》两个人选择删除彼此的记忆——然后在空白中重新相遇。",
        referenceEn: "A husband retelling their love story daily to his memory-lost wife in The Notebook; two people choosing to delete each other's memory, then meeting again in the blank in Eternal Sunshine."
    },
    {
        id: "drv_void",
        name: "虚无", nameEn: "The Void",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "所有意义都溶解了。没有好坏、没有对错、没有目的。彻底的空。",
        defEn: "All meaning dissolved. No good or bad, no right or wrong, no purpose. Total emptiness.",
        core: "A面：虚无是意义层面的彻底熔毁——不是'找不到意义'，而是你清楚地看到了意义本来就不存在。每个人都在假装事情是重要的，但你看穿了这个游戏。/ B面：但虚无本身也是一种姿态——你说'什么都没有意义'的这个判断本身就是一个意义。真正的虚无无法被思考，因为思考本身已经是'有'了。关键张力：你是真的在虚无中——还是你在用虚无来保护自己不受失望的伤害？ | 驱力回路 (Trieb): 空——什么都不重要了，包括这句话。",
        coreEn: "A-side: The void is total meltdown at the meaning level — not 'can't find meaning' but clearly seeing meaning never existed. Everyone pretends things matter, but you've seen through the game. / B-side: But the void itself is a stance — saying 'nothing means anything' is itself a meaning. True void can't be thought, because thinking is already 'being.' Key tension: Are you truly in the void — or using it to protect yourself from disappointment? | Drive Circuit (Trieb): Empty — nothing matters anymore, including this sentence.",
        reference: "《忧郁症》'地球不过是邪恶的，谁也不会想念它'——贾斯汀在世界末日前的彻底虚无；《局外人》莫尔索被判死刑时感受到的不是恐惧而是宇宙的温柔冷漠。",
        referenceEn: "'Earth is evil; no one will miss it' — Justine's total void before the apocalypse in Melancholia; Meursault feeling not fear but the universe's tender indifference upon death sentence in The Stranger."
    },
    {
        id: "drv_absurd_laughter",
        name: "荒诞之笑", nameEn: "Absurd Laughter",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "在最不该笑的时候笑出声来。不是因为好笑——而是因为理性已经不够用了。",
        defEn: "Laughing when you absolutely shouldn't. Not because it's funny — but because reason no longer suffices.",
        core: "A面：荒诞之笑是理性熔毁后最后的反应——当世界荒谬到连绝望都显得多余，你的身体选择了笑。这不是快乐的笑，是一种'我看到了'的笑——你和荒谬面对面了，而你选择了笑。/ B面：但荒诞之笑也可能是崩溃的前兆——你不是在面对荒谬，你是在被荒谬击穿。关键张力：你的笑是力量——'我看穿了一切所以我笑'——还是崩溃的声音？ | 驱力回路 (Trieb): 大笑——除了笑还能怎么样呢。",
        coreEn: "A-side: Absurd laughter is reason's last reaction post-meltdown — when the world is so absurd even despair seems redundant, your body chooses laughter. Not joy's laugh but 'I see it' — facing the absurd, you chose to laugh. / B-side: But absurd laughter may herald collapse — you're not facing absurdity; it's piercing you. Key tension: Is your laughter strength — 'I see through everything, so I laugh' — or the sound of cracking? | Drive Circuit (Trieb): Laughing — what else can you do.",
        reference: "《小丑》亚瑟在楼梯上的那段舞——所有痛苦在那一刻变成了笑和舞蹈；《杀手莱昂》死前按下雷管时那个微笑。",
        referenceEn: "Arthur's staircase dance — all pain transforming into laughter and movement in Joker; Leon's smile pressing the grenade pin at the moment of death in Léon."
    },
    {
        id: "drv_embracing_abyss",
        name: "拥抱深渊", nameEn: "Embracing the Abyss",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你不再逃避那个一直追你的黑暗——你转身朝它走过去。",
        defEn: "You stop running from the darkness that's been chasing you — you turn and walk toward it.",
        core: "A面：拥抱深渊是最极端的接受——你不再和那个可怕的东西战斗了。你张开双臂说'来吧'。这可以是一种终极的勇气，也可以是终极的疲惫。/ B面：但你能分辨吗——你转身面对黑暗是因为你战胜了恐惧，还是因为你已经不在乎了？最平静的接受和最深的放弃有着一模一样的面孔。关键张力：你的平静来自力量，还是来自什么都不剩了？ | 驱力回路 (Trieb): 转身——够了，让它来吧。",
        coreEn: "A-side: Embracing the abyss is the most extreme acceptance — you stop fighting the terrifying thing. Arms open: 'come.' This can be ultimate courage or ultimate exhaustion. / B-side: But can you tell — did you turn to face the dark because you conquered fear, or because you no longer care? The calmest acceptance and the deepest surrender wear identical faces. Key tension: Does your calm come from strength, or from nothing being left? | Drive Circuit (Trieb): Turning — enough; let it come.",
        reference: "《末路狂花》在大峡谷边缘踩下油门的那一刻——不是逃跑，是飞翔；《忧郁症》贾斯汀在行星撞击前的彻底平静。",
        referenceEn: "Pressing the gas at the Grand Canyon's edge — not escape, but flight in Thelma & Louise; Justine's complete calm before the planet strikes in Melancholia."
    },
    {
        id: "drv_death_drive",
        name: "死亡驱力", nameEn: "Death Drive",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "一切驱力的终点。不是'想死'——而是一切有机体都在趋向无机物状态的那个倾向。",
        defEn: "The terminus of all drives. Not 'wanting to die' — but the tendency of all organic matter to return to the inorganic.",
        core: "A面：死亡驱力不是自杀冲动——它是弗洛伊德说的那个比快乐原则更深的东西。它是为什么你会重复那些伤害你的模式、为什么你会破坏对你好的关系、为什么越危险的东西越有吸引力。它是驱力的零点，所有张力消解的地方。/ B面：但死亡驱力也是创造力的源泉——正是因为你感受到了那个'归零'的引力，你才拼命创造、拼命活着。关键张力：你的全部活力，也许正是对这个终极熔毁的抵抗。 | 驱力回路 (Trieb): 归零——一切坚固的东西都终将烟消云散。",
        coreEn: "A-side: The death drive isn't suicidal impulse — it's what Freud called something deeper than the pleasure principle. It's why you repeat patterns that hurt, sabotage good relationships, find danger attractive. It's drive's zero point, where all tension dissolves. / B-side: But the death drive is also creativity's source — precisely because you feel that pull toward zero, you create and live desperately. Key tension: All your vitality may be resistance against this ultimate meltdown. | Drive Circuit (Trieb): Zeroing — everything solid eventually melts into air.",
        reference: "《2001太空漫游》鲍曼穿越星门——所有结构溶解，人类形态熔毁，抵达无法理解的终点；《树之生命》从宇宙大爆炸到一个家庭的丧子——一切生命最终归于沉默。",
        referenceEn: "Bowman crossing the star gate — all structure dissolving, human form melting, reaching an incomprehensible terminus in 2001; from Big Bang to a family's lost child — all life returning to silence in The Tree of Life."
    }
];
