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
        core: "A面：蜕变是有方向的熔毁——蛇蜕皮、蝉蜕壳，旧结构必须先碎裂新形态才能长出来。蜕变期很疼，但它通向某个地方。/ B面：但不是所有熔毁都通向蜕变——有时候你碎了就是碎了，没有新的形态在等你。你以为你在蜕变，也许你只是在崩溃。关键张力：你怎么知道你正在经历的是蜕变还是瓦解？ | 驱力脉动(Trieb): 蜕——旧壳碎裂的声音，就是新生的声音。",
        coreEn: "A-side: Metamorphosis is meltdown with direction — snakes shed skin, cicadas crack shells; old structure must shatter for new form. The process hurts, but leads somewhere. / B-side: But not all meltdown leads to metamorphosis — sometimes you break and just stay broken. You think you're transforming; maybe you're just collapsing. Key tension: How do you know you're metamorphosing or simply falling apart? | Drive Circuit (Trieb): Molting — the sound of the old shell cracking is the sound of new life.",
        reference: "《黑天鹅》妮娜在精神崩溃中完成了从白天鹅到黑天鹅的蜕变；《寄生虫》基泽一家在豪宅暴雨夜经历了身份认知的彻底熔毁。",
        referenceEn: "Nina completing her white-to-black swan metamorphosis through mental breakdown in Black Swan; the Kim family's complete identity meltdown on rainy night in Parasite.",
        topology: "相变跃迁：旧态在临界点整体崩解，分子重排为全新晶格，过渡态既不属于固态也不属于液态",
        directive: {
            bright: "写皮肤下有东西在推的物理过程——旧轮廓从边缘开始变软、变透明，像冰在体温下融化。他能感觉到新的形状正在里面聚集，但还没有名字。写他低头看自己的手：指纹还是原来的，但手的用法变了。他拿起一个杯子的方式和昨天不一样了——不是学会了什么，是旧的肌肉记忆正在脱落。不要写'变成了谁'——写正在溶解的那个中间状态。",
            dark: "写每一块脱落的旧壳下面不是新皮肤而是更深的伤口——他以为自己在蜕变，但越蜕越小、越蜕越薄。他从镜子里观察自己的变化，起初以为是成长，后来发现剥掉的每一层都带走了一些他本来想留住的东西。写他发现'蜕变'只是崩溃的另一个名字的那一秒——身体里没有新形态在等，只有更多需要蜕掉的旧层，一直蜕到什么都不剩。",
            tension: "场景锚点：镜中的面孔一半是旧的一半是未知的，他不知道该认哪一半。悖论不是蜕变很痛——而是：他正在经历的这个过程，从外面看和崩溃一模一样。蛇蜕皮和蛇被活剥，在最痛的那一刻完全无法区分。他只能继续，因为已经蜕到一半，旧壳回不去了，但新皮肤还没有长出来。"
        }
    },
    {
        id: "drv_letting_go",
        name: "放手", nameEn: "Letting Go",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你一直紧握的东西——松开手指。不是被夺走，是你选择松开的。",
        defEn: "What you've gripped tightly — you open your fingers. Not taken, but chosen to release.",
        core: "A面：放手是最勇敢的熔毁——你主动溶解了自己和某人、某事之间的连接。这需要的勇气比紧紧抓住更大，因为松开之后你必须面对空着的手。/ B面：但放手也可以是一种伪装的放弃——你说'我放下了'，其实你只是没有力气再拿着了。真正的放手是平静的，假的放手背后藏着怨恨。关键张力：你松手了——但你的心也松开了吗？ | 驱力脉动(Trieb): 松开——手指一根一根打开，最后一根最难。",
        coreEn: "A-side: Letting go is the bravest meltdown — voluntarily dissolving the connection between yourself and someone or something. This takes more courage than holding on, because you must face the empty hand after. / B-side: But letting go can disguise surrender — you say 'I've moved on' when really you just couldn't hold on anymore. True letting go is calm; fake letting go hides resentment. Key tension: Your hand opened — but did your heart? | Drive Circuit (Trieb): Releasing — fingers opening one by one; the last one is hardest.",
        reference: "《冰雪奇缘》Let It Go——艾尔莎放手的瞬间反而获得了力量；《星际穿越》库珀松开女儿的手穿越虫洞的那个撕裂时刻。",
        referenceEn: "Elsa gaining power in the instant of letting go in Frozen; Cooper releasing his daughter's hand to cross the wormhole in Interstellar.",
        topology: "脱附反应：化学键逐根断裂释放吸附粒子，最后一根键能最高，离开后粒子进入无基底的自由态",
        directive: {
            bright: "写手指一根一根打开的过程——每松开一根都需要一个独立的决定。写掌心里那个东西的温度：握了太久，它的温度和体温已经一样了，分不清是自己的还是它的。最后一根手指松开的时候写一个物理感觉：手突然轻了，但不是空了——是那个重量的形状还留在掌纹里，像一个看不见的印记。写他把手举起来看空掌心的那一刻。",
            dark: "写他说'我放下了'之后身体的反应——嘴在说松开，但松开的那只手在袖子里攥成了拳头，指甲掐进掌心。写这个伪装的精确结构：脸上的表情是平静的，声音是稳定的，但肩膀一直没有放下来。他用'放下'这个词给自己造了一个新的牢笼——一个他必须永远表演平静的牢笼。写他独处时那只拳头终于松开，指甲在掌心留下四个月牙形的痕迹。",
            tension: "场景锚点：最后一根手指悬在松与不松之间，他能感觉到指尖传来的脉搏——不知道是自己的还是对方的。悖论不是放手需要勇气——而是：他无法分辨自己是真的释然了还是只是累到握不住了。真正的放手和彻底的放弃在手指松开的那一秒完全一样。他需要在松开之后才能知道答案——但那时候已经来不及握回去了。"
        }
    },
    {
        id: "drv_weeping",
        name: "哭泣", nameEn: "Weeping",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "防线全部溃堤。不是软弱——是你终于不再假装坚强了。",
        defEn: "All defenses breached. Not weakness — you've finally stopped pretending to be strong.",
        core: "A面：哭泣是身体对心灵超载的安全阀——当悲伤、委屈或感动大到语言无法承载时，身体接管了表达权。眼泪是你把无法说出的话翻译成了液体。/ B面：但哭泣也可以变成一种操纵工具——你发现眼泪可以让别人让步，于是你的哭不再是情感的溢出，而是策略的一部分。关键张力：这滴眼泪是真的流出来的，还是你知道它会有效果才放出来的？ | 驱力脉动(Trieb): 溃堤——忍了太久，终于忍不住了。",
        coreEn: "A-side: Weeping is the body's safety valve for emotional overload — when grief or gratitude exceeds what language can carry, the body takes over expression. Tears translate the unsayable into liquid. / B-side: But tears can become manipulation — once you discover crying makes people yield, your tears shift from overflow to strategy. Key tension: Did this tear truly fall, or did you release it knowing its effect? | Drive Circuit (Trieb): Dam burst — held too long; finally couldn't hold.",
        reference: "《心灵捕手》'这不是你的错'——听到第五遍终于崩溃大哭的那一刻；《辛德勒的名单》'我本来可以多救一些人'的痛哭。",
        referenceEn: "'It's not your fault' — the breakdown after hearing it the fifth time in Good Will Hunting; 'I could have saved more' — the anguished weeping in Schindler's List.",
        topology: "溃坝洪流：蓄积压力超过承载极限，裂缝从微渗扩展为全面溃决，水体携带全部沉积物一次性倾泻",
        directive: {
            bright: "写第一滴眼泪落下之后发生的连锁反应——不是渐渐流泪，是所有防线同时崩塌。写他试图说话但声音碎成了呜咽的那个物理过程。写身体的参与：肩膀开始抖，然后是胸腔，然后是整个人缩成一团。让他哭到没有声音——最猛烈的哭泣是无声的，嘴张着但气不够用。写哭完之后的那种奇怪的清空感：像发了一场大烧，烧退了，人空了，但干净了。",
            dark: "写眼泪作为精确武器的运作方式——他发现了哭泣的时机比内容更重要。在对方最愧疚的那一秒让第一滴泪落下，效果最大。写他调度眼泪的技术：不是假哭，眼泪是真的，但他学会了在需要的时候打开那个阀门。写对方立刻让步的瞬间他眼角余光里的冷静计算——泪还在流，但里面的那个人已经在清点战果了。这是眼泪最阴暗的用法：它真实，但被工具化了。",
            tension: "场景锚点：一滴泪悬在睫毛上将落未落，他意识到自己正在观察自己的眼泪——这个观察本身就让眼泪变得可疑了。悖论不是哭泣是软弱——而是：一旦你知道了眼泪有效果，你就再也不能确定任何一滴泪是纯粹的。他确实在痛，但他同时知道自己在痛——而知道自己在痛的那个部分正在冷静地评估这滴泪应不应该落下。"
        }
    },
    {
        id: "drv_revelry",
        name: "狂欢", nameEn: "Revelry",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "在节日、酒精或极端情境中暂时溶解所有社会规则和身份。",
        defEn: "Temporarily dissolving all social rules and identity in festivals, alcohol, or extremes.",
        core: "A面：狂欢是有时限的熔毁——一个晚上你忘了你是谁、你该怎样、你欠谁的。规则暂时失效，身体暂时属于你自己。每个文明都需要狂欢节，否则秩序会把人压碎。/ B面：但狂欢结束后你还是得回去——明天太阳升起，你还是那个你。如果你越来越依赖狂欢来逃避日常，那它就不再是解放，而是另一种牢笼。关键张力：狂欢是让你更自由还是让你更依赖？ | 驱力脉动(Trieb): 释放——今晚什么都不算数，明天再说。",
        coreEn: "A-side: Revelry is time-limited meltdown — one night forgetting who you are, what you owe, what you should be. Rules pause, body is yours. Every civilization needs carnival or order crushes people. / B-side: But after revelry you still must return — tomorrow's sun, same you. If you need revelry more and more to escape daily life, it's no longer liberation but another cage. Key tension: Does revelry make you freer or more dependent? | Drive Circuit (Trieb): Release — tonight nothing counts; tomorrow we'll see.",
        reference: "《巴比伦》好莱坞黄金时代的狂欢派对——一切在天亮后崩塌；《仲夏夜惊魂》瑞典社区的仪式狂欢——解放和恐怖无法区分。",
        referenceEn: "Hollywood's golden-age revelry crumbling after dawn in Babylon; the Swedish commune's ritual revelry — liberation and horror indistinguishable in Midsommar.",
        topology: "临时超临界态：系统在限定窗口内突破相图边界，所有约束失效，窗口关闭后被迫回落但微结构已松动",
        directive: {
            bright: "写身份溶解在人群里的物理感——他不知道自己的名字了，或者说名字变得不重要了。音乐的低频从地板穿过脚底传上来，和心跳同步。写他和陌生人的目光接触：没有试探、没有判断，只有'我们今晚都不是任何人'的默契。让身体做它想做的事情——跳舞、喊叫、拥抱陌生人。写那种罕见的自由：不是挣脱了什么，是暂时忘记了有什么需要挣脱。",
            dark: "写狂欢变成强迫性重复的过程——第一次是解放，第二次是怀念，第三次开始就是戒断反应了。写他在日常生活中的灰色感：上班、吃饭、说话，所有这些都变成了两次狂欢之间的漫长等待。写他需要的剂量越来越大——更响的音乐、更多的酒精、更猛的刺激。写凌晨四点人群散去后他站在空场地上的那种坠落感：自由结束了，但他已经不记得回去的路。",
            tension: "场景锚点：天要亮了，第一缕光从窗帘缝隙里切进来，他在舞池里突然停住了。悖论不是狂欢是放纵——而是：他无法确定每一次狂欢是在释放被压抑的自由，还是在加深对这种释放方式的依赖。他每次从狂欢中醒来都觉得日常生活更不可忍受了——这到底是因为他尝过了真正的自由，还是因为他的阈值被抬高了？"
        }
    },
    {
        id: "drv_forgiveness",
        name: "原谅", nameEn: "Forgiveness",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "溶解你对某人的恨。不是因为他值得，而是因为恨太重了。",
        defEn: "Dissolving your hatred for someone. Not because they deserve it, but because the hate is too heavy.",
        core: "A面：原谅是最难的熔毁——你的恨是一面保护你的墙，溶解它意味着你要面对墙后面那个受伤的自己。但只要你还恨着他，他就还占据着你的精神空间。原谅不是为了他，是为了你自己。/ B面：但'原谅'也可以是一种自我欺骗——你说你原谅了，但你只是把恨压到了更深的地方。关键张力：你原谅他了——还是你只是太累了而选择了停止战斗？ | 驱力脉动(Trieb): 放下——恨够了，我要把这个重量卸掉。",
        coreEn: "A-side: Forgiveness is the hardest meltdown — your hatred is a protective wall; dissolving it means facing the wounded self behind. But while you hate, they still occupy your mental space. Forgiveness isn't for them; it's for you. / B-side: But 'forgiveness' can be self-deception — you say you've forgiven, but just pressed the hatred deeper. Key tension: Did you forgive them — or just get too tired to keep fighting? | Drive Circuit (Trieb): Putting down — hated long enough; time to drop this weight.",
        reference: "《密阳》母亲试图原谅杀害儿子的凶手但发现她做不到；《辛德勒的名单》'力量是当你有充分理由杀他但选择不杀。'",
        referenceEn: "A mother trying to forgive her son's killer but discovering she can't in Secret Sunshine; 'Power is when you have every reason to kill but choose not to' in Schindler's List.",
        topology: "酸蚀溶壁：恨意如钙化结晶层层包裹伤口，原谅是注入溶剂使其内部溶解，墙消失后暴露未愈合创面",
        directive: {
            bright: "写恨意作为重量的物理感——他恨了这么多年，那个恨长在身体里，像一块多出来的骨头。写他决定放下的那个瞬间不是顿悟，是疲惫：不是对方值得被原谅，是他自己值得不再扛着这个东西。写放下之后的身体变化：肩膀低了两公分，呼吸深了一寸。写他第一次想到那个人的名字而胸口没有收紧的那个早晨——原来原谅的感觉不是温暖，是松。",
            dark: "写假原谅的精确结构——嘴上说'我不恨了'，语气甚至是真诚的，但恨没有消失，只是被推到了更深的地层。写那个恨在地下的变化：它不再是愤怒的形态了，变成了更冷、更硬、更有耐心的东西。写他在家庭聚餐上微笑着把菜递给那个人时手的温度——手是暖的，但指尖下面的那根筋一直在绷着。写恨被埋太久之后的变异：它已经长成了他性格的一部分，拔掉它就等于拔掉自己。",
            tension: "场景锚点：他面对那个人时内心突然平静了——不是强迫自己平静，是真的感觉不到恨了。悖论不是原谅需要宽容——而是：他无法分辨这份平静是真正的释然还是恨到极致之后的麻木。放下和放弃有着一模一样的姿势。他需要第三个人告诉他区别——但这件事的本质就是只有他自己知道。而他不知道。"
        }
    },
    {
        id: "drv_awakening",
        name: "觉醒", nameEn: "Awakening",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "你一直相信的东西突然溶解了。你不知道该信什么了——但你第一次睁开了眼睛。",
        defEn: "What you always believed suddenly dissolves. You don't know what to believe — but for the first time, your eyes are open.",
        core: "A面：觉醒是旧信念系统的熔毁——你以前觉得理所当然的一切突然变得可疑。这很痛苦，但痛苦本身就是你正在醒来的证据。第一次用自己的眼睛看世界，即使看到的东西很丑。/ B面：但觉醒也可以是一种新的傲慢——你觉得你'看清了'，但也许你只是换了一副更高级的幻觉眼镜。关键张力：你醒来了——但你看到的就是真相吗？还是你只是从一个梦跳进了另一个梦？ | 驱力脉动(Trieb): 醒来——再也睡不着了。",
        coreEn: "A-side: Awakening is the old belief system's meltdown — everything once taken for granted suddenly becomes suspect. It's painful, but pain itself proves you're waking. Seeing the world through your own eyes for the first time, even if it's ugly. / B-side: But awakening can be new arrogance — you think you 'see clearly,' maybe you just put on better illusion glasses. Key tension: You woke up — but is what you see truth? Or did you just jump from one dream into another? | Drive Circuit (Trieb): Waking — can never fall asleep again.",
        reference: "《黑客帝国》红蓝药丸——选择醒来之后就永远不能回去了；《楚门的世界》楚门推开那扇门走出去的那一步。",
        referenceEn: "The red pill — choosing to wake means never going back in The Matrix; Truman pushing open the door and stepping out in The Truman Show.",
        topology: "覆膜剥离：一层以为是现实的薄膜被整张揭起，下面是另一套完全不同的纹理，但你无法确认第二层不是另一张膜",
        directive: {
            bright: "写眼睛第一次真正睁开的物理感——不是看到了新东西，是发现以前看到的一切都有一层膜。那层膜现在正在溶解，底下的世界更锐利、更嘈杂、更丑，但也更真实。写他看一个日常物品——比如自己的工牌——忽然觉得上面的名字像是别人的。写这个不舒服的清醒：不是'我终于看到真相了'的豪迈，是'我再也回不到看不见的时候了'的恐惧。醒来不是胜利，是一种新的暴露。",
            dark: "写觉醒变成新的傲慢——他觉得自己'看穿了'，开始用怜悯的目光看身边还在'睡着'的人。写他传教式地想叫醒别人时遭遇的抵抗——不是别人不愿醒来，是他的'真相'对别人而言只是另一个版本的幻觉。写他越来越孤立：不是世界排斥了他，是他用'我比你们看得清'把自己隔开了。写他在最清醒的时刻反而最接近偏执——因为只有他看到的才是真的，其他所有人都在做梦。",
            tension: "场景锚点：他在半夜醒来，确信自己看穿了一切——然后他看到镜子里自己的眼睛，和每一个他嘲笑过的狂信者一模一样。悖论不是'醒来vs.沉睡'——而是：觉醒者和偏执者在外表上完全无法区分。他凭什么确信自己看到的是真相而不是一个更精致的幻觉？他唯一能做的验证——用自己的眼睛看——恰恰是不可靠的那个工具。"
        }
    },
    {
        id: "drv_liberation",
        name: "解脱", nameEn: "Liberation",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "束缚你的东西终于消失了。你第一次体验到'不再需要扛着'的轻盈。",
        defEn: "What bound you finally vanishes. For the first time you feel the lightness of 'no longer carrying it.'",
        core: "A面：解脱是最温柔的熔毁——不是你打碎了什么，而是某个东西终于放过了你。那个一直压在你胸口的重量消失了，你第一次深呼吸——原来自由是这个感觉。/ B面：但解脱之后可能是空虚——你太久定义自己为'扛着这个重量的人了'，当重量消失，你也不知道自己是谁了。关键张力：你被解放了——但你能承受自由的重量吗？ | 驱力脉动(Trieb): 松绑——绳子断了，身体还留着绳子的印记。",
        coreEn: "A-side: Liberation is the gentlest meltdown — you didn't break anything; something finally released you. The weight on your chest vanishes and you breathe deeply for the first time — so this is what freedom feels like. / B-side: But after liberation may come emptiness — you defined yourself as 'the one carrying this weight' for so long that without it, you don't know who you are. Key tension: You're freed — but can you bear the weight of freedom? | Drive Circuit (Trieb): Unbound — the rope broke, but the body still bears its marks.",
        reference: "《肖申克的救赎》安迪在暴雨中张开双臂的那一刻；《为奴十二年》所罗门在十二年后终于说出'我是自由人'。",
        referenceEn: "Andy spreading his arms in the pouring rain in Shawshank Redemption; Solomon finally saying 'I am a free man' after twelve years in 12 Years a Slave.",
        topology: "松绑释压：绳索断裂后身体弹性回复，但肌肉保留着被束缚时的形状，自由态下身体不知道该做什么姿势",
        directive: {
            bright: "写绳子断裂之后的身体反应——不是跳起来奔跑，是先站在原地不动，因为身体还不相信。写第一次深呼吸的物理过程：胸腔打开了一个从未打开过的幅度，空气到达了从未到达过的肺叶。他感觉自己轻了，不是因为快乐，是因为一个压了太久的东西不在了。写他抬头看天空的那一秒——天空还是同一片天空，但没有了玻璃天花板之后它忽然大得让人头晕。",
            dark: "写解脱之后的第二天早晨——他醒来，第一个反应是摸自己的手腕，因为绳子的位置已经戴了太久，没有绳子的手腕让他不安。写他站在空旷的平原上不知道往哪里走的恐惧：以前绳子限定了方向，现在什么都不限定了，他才发现自己从来没有学过选择。写他悄悄开始怀念那根绳子——至少绑着的时候他知道自己是谁：那个被绑着的人。现在他什么都不是了。",
            tension: "场景锚点：绳子断了，他揉着手腕上的勒痕，发现那道痕已经长成了皮肤纹路的一部分——拿掉绳子容易，拿掉痕迹需要的时间他不确定自己有没有。悖论不是自由很珍贵——而是：他太久地用'不自由'来定义自己了。被解放的那一刻他失去的不只是锁链，还有'被锁住的人'这个他唯一知道怎么扮演的角色。自由是一种需要学习的能力，他还没来得及学。"
        }
    },

    // ---- 失控性熔毁：结构溶解的速度超过了你重建的能力 ----

    {
        id: "drv_breakdown",
        name: "崩溃", nameEn: "Breakdown",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你一直在扛，终于扛不住了。所有东西同时碎了。",
        defEn: "You've been carrying everything; finally you can't. Everything shatters at once.",
        core: "A面：崩溃是被延迟了太久的熔毁——你扛了太多太久，每一天都在说'还行'，直到某一天一件很小的事让你彻底垮了。不是最后那根稻草太重，而是前面九百九十九根从没被允许放下。/ B面：但崩溃有时候是必要的——你的结构已经不适合你了，它必须碎掉你才能长出新的。关键张力：崩溃是终点还是起点？你在倒塌还是在推倒重建？ | 驱力脉动(Trieb): 碎裂——撑不住了，让它碎吧。",
        coreEn: "A-side: Breakdown is meltdown delayed too long — carried too much too long, saying 'I'm fine' daily, until one tiny thing makes you collapse entirely. Not that the last straw was heavy; the 999 before were never allowed to be put down. / B-side: But breakdown is sometimes necessary — your structure no longer fits; it must shatter for the new to grow. Key tension: Is breakdown an end or a beginning? Falling down or demolition for rebuilding? | Drive Circuit (Trieb): Shattering — can't hold anymore; let it break.",
        reference: "《婚姻故事》吵架那场戏——两个人同时在对方面前碎成了碎片；《海边的曼彻斯特》李在警察局试图用警察的枪自杀的瞬间崩溃。",
        referenceEn: "The argument scene — two people shattering into pieces before each other in Marriage Story; Lee's instant collapse reaching for the officer's gun in Manchester by the Sea.",
        topology: "疲劳断裂：材料在反复载荷下微裂纹累积，最终一个极轻的力触发全截面瞬间断裂，破坏力远超触发力本身",
        directive: {
            bright: "写触发崩溃的那件小事——一杯打翻的水、一句无害的话、一个走错的路口。写它之所以成为最后一击不是因为它重，是因为他已经没有任何余量了。写崩溃发生的物理过程：不是渐渐地垮，是所有东西同时碎——声音先消失，然后腿软了，然后他发现自己坐在了地上但不记得是怎么坐下去的。写崩溃之后的那种奇怪的轻：碎都碎了，反而不用再撑了。地上的碎片里居然有一种解脱。",
            dark: "写崩溃不被允许的那种绝望——他能感觉到自己正在裂开，但场合不对、时机不对、身边有人需要他继续撑着。写他用尽最后一点力气维持外壳完整的那几分钟：微笑是僵硬的，声音是空的，眼睛是干的但里面什么都看不见了。写他终于找到一个无人的空间——厕所隔间、车里、楼梯间——关上门的那一秒，整个人像断了线一样塌下来。没有声音。崩溃到极限反而是沉默的。",
            tension: "场景锚点：他在碎成碎片之后低头看地上那些碎片——其中有一些他以为是自己的核心，现在看来只是外壳。悖论不是崩溃很可怕——而是：他无法确定这次崩溃是终点还是起点。有些建筑必须炸掉才能重建，但也有些建筑炸掉之后那块地就永远是废墟了。他现在是哪一种？他在碎片中寻找答案，但碎片不说话。"
        }
    },
    {
        id: "drv_drowning",
        name: "沉溺", nameEn: "Drowning",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你知道你正在往下沉，但你不挣扎了。水很暖。",
        defEn: "You know you're sinking, but you've stopped struggling. The water is warm.",
        core: "A面：沉溺是放弃了方向的熔毁——你不再试图游上去，不是因为你不能，而是因为你太累了。往下沉的感觉其实很安静、很舒服。不再挣扎的那一刻有一种奇怪的平静。/ B面：但那种平静是死亡的平静——你的大脑在缺氧时产生了虚假的宁静感。那不是接受，那是神经系统的关机。关键张力：你停止挣扎是因为你想通了，还是因为你放弃了？ | 驱力脉动(Trieb): 下沉——不挣了，就这样吧。",
        coreEn: "A-side: Drowning is meltdown without direction — you stop trying to swim up, not from inability but exhaustion. Sinking feels quiet, comfortable. The moment you stop struggling brings strange calm. / B-side: But that calm is death's calm — your oxygen-deprived brain produces false serenity. That's not acceptance; it's the nervous system shutting down. Key tension: Did you stop struggling because you understood, or because you gave up? | Drive Circuit (Trieb): Sinking — no more struggling; let it be.",
        reference: "《离开拉斯维加斯》一个编剧决定用酒精把自己淹死的全过程；《迷失东京》漂浮在异乡城市里找不到下沉或上浮的方向。",
        referenceEn: "A screenwriter's entire process of drowning himself in alcohol in Leaving Las Vegas; floating in a foreign city with no direction to sink or rise in Lost in Translation.",
        topology: "负浮力下沉：密度缓慢超过介质，身体开始下降，不挣扎后水流变暖变柔，下沉的舒适感是缺氧的错觉",
        directive: {
            bright: "写停止挣扎那一刻的身体感——手臂不动了，头慢慢往后仰，水漫过耳朵之后世界变得很安静。写那种被托住的错觉：水很暖，身体很轻，往下沉的方向居然比往上游更舒服。写他睁着眼睛看水面上方的光——那些光在变远，但变远的过程很美。他想到了一个词：交出去。不是投降，不是放弃，是把自己交给一个比自己更大的东西。但那个'更大的东西'可能只是水。",
            dark: "写沉溺者在水面之下的日常——他还在正常生活，上班、吃饭、回消息，但所有这些都在水下进行。写水的具体形态：它不是猛烈的洪水，是一种温度刚好的液体，慢慢涨上来，先到膝盖，然后到胸口，然后到下巴。他可以踮脚——他一直在踮脚——但他越来越累了。写他停止踮脚的那一天：不是某个特别的日子，只是又一个普通的周二。脚跟落下去的那个动作几乎感觉不到。",
            tension: "场景锚点：他在水下睁开眼睛，能看到水面上方有人在喊他的名字——声音是扭曲的、遥远的，像隔了一层玻璃。悖论不是沉溺是痛苦的——而是：他停止挣扎之后感到的那种平静，他无法确定是真正的接纳还是神经系统在关机前释放的虚假宁静。溺水的最后阶段据说是温暖的、安详的——这究竟是慈悲还是最后的欺骗？"
        }
    },
    {
        id: "drv_addiction",
        name: "上瘾", nameEn: "Addiction",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你知道它在毁掉你，但你停不下来。每一次'最后一次'都是谎言。",
        defEn: "You know it's destroying you, but you can't stop. Every 'last time' is a lie.",
        core: "A面：上瘾是驱力最纯粹的暴露——不是欲望（欲望有对象），是驱力本身（那个无限重复的回路）。你追的不是那个东西给你的快感，而是'再来一次'这个动作本身。/ B面：但上瘾的核心秘密是——你上瘾的不是那个物质，而是它让你暂时不用面对的那个东西。每一次'来一次'都是在推迟一个你无法面对的真相。关键张力：如果你戒掉了它，你准备好面对它帮你逃避的那个东西了吗？ | 驱力脉动(Trieb): 再来一次——明知是毒，但手已经伸出去了。",
        coreEn: "A-side: Addiction is the drive's purest exposure — not desire (which has an object) but drive itself (the infinitely repeating circuit). You chase not the pleasure but the act of 'one more time' itself. / B-side: But addiction's core secret — you're not addicted to the substance but to what it lets you temporarily avoid. Every 'one more' postpones a truth you can't face. Key tension: If you quit, are you ready to face what it helped you escape? | Drive Circuit (Trieb): One more — knowing it's poison, but the hand already reached out.",
        reference: "《猜火车》'选择生活，选择工作'——但你选择了海洛因；《梦之安魂曲》四个人各自上瘾的回路越转越快直到全部崩塌。",
        referenceEn: "'Choose life, choose a job' — but you chose heroin in Trainspotting; four people's addiction loops spinning faster until total collapse in Requiem for a Dream.",
        topology: "闭合回路加速：能量在封闭路径中循环，每一圈摩擦递减阻力递减，转速越来越快直到回路本身烧毁",
        directive: {
            bright: "写'再来一次'这个动作本身的回路——不是快感，快感在第三次之后就几乎没有了。他追的是手伸出去那个瞬间的确定性：我知道接下来会发生什么。写上瘾作为唯一可预测的事情的安慰：生活中所有事都不确定，只有这个是确定的——伸手，得到，短暂的空白，然后再来。写那个空白的质感：不是快乐，是一种三秒钟的不需要是任何人的假期。",
            dark: "写上瘾者的内部结构——他有两个自己：一个在伸手，一个在旁边看着自己伸手。看的那个什么都知道——知道这是第几次'最后一次'，知道明天醒来会怎么恨自己，知道代价的精确清单。但知道没有用。写那个看着的自己逐渐失声的过程：第一年还在喊'停下来'，第二年变成了耳语，第三年只剩下沉默的注视。他没有离开——他永远在那里看着——但他已经不说话了。",
            tension: "场景锚点：他面前放着那个东西，手悬在半空，这一次他真的不确定自己会不会伸出去——但这种'不确定'他已经经历过一百次了，每一次的结果都一样。悖论不是上瘾是软弱——而是：他上瘾的根本不是那个东西，而是那个东西让他暂时不用面对的某个真相。如果他戒掉了——那个被推迟的真相会立刻出现在面前，而他不确定自己有没有力气看它。"
        }
    },
    {
        id: "drv_burnout",
        name: "燃尽", nameEn: "Burnout",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你没有崩溃——你只是空了。燃料烧完了，但发动机还在空转。",
        defEn: "You didn't collapse — you're just empty. Fuel's gone, but the engine still idles.",
        core: "A面：燃尽是最安静的熔毁——没有戏剧性的崩溃，只有一种灰色的、均匀的空。你还在做所有该做的事，但里面已经没有任何东西了。你是一台制造正常生活表象的机器。/ B面：但燃尽者最危险的是他们不知道自己已经空了——他们还在继续，因为停下来意味着面对那个空洞。忙碌本身成了最后的麻醉剂。关键张力：你还在运转——但你还活着吗？ | 驱力脉动(Trieb): 空转——什么都没有了，但还在动。",
        coreEn: "A-side: Burnout is the quietest meltdown — no dramatic collapse, just grey, even emptiness. You still do everything required, but nothing's inside. You're a machine manufacturing the appearance of normal life. / B-side: The burnout's danger: not knowing you're empty — continuing because stopping means facing the void. Busyness becomes the last anesthetic. Key tension: You're still running — but are you still alive? | Drive Circuit (Trieb): Idling — nothing left, but still moving.",
        reference: "《在云端》一年飞三百天、解雇别人为生的男人——效率完美，灵魂为零；《醉乡民谣》一个民谣歌手在永远找不到出路的巡回中缓慢燃尽。",
        referenceEn: "A man flying 300 days a year firing people for a living — perfect efficiency, zero soul in Up in the Air; a folk singer slowly burning out on an endless circuit in Inside Llewyn Davis.",
        topology: "燃料耗尽空转：发动机失去燃料后惯性仍在驱动活塞往复运动，金属干磨发热但不产出功，直到轴承烧死",
        directive: {
            bright: "写空了之后还在运转的那种机械感——他准时起床、准时出门、准时说早安，每一个动作都完美无缺但里面什么都没有。写他发现自己在微笑但不知道为什么在微笑的那一秒——那个微笑是肌肉的习惯，不是情绪的反应。写他坐在车里关上门之后的三秒钟：引擎还没发动，他也还没动，空气是灰色的。这三秒钟是他每天最真实的三秒钟。然后他拧钥匙，继续。",
            dark: "写燃尽者不知道自己已经空了的那种危险——他还在加速，因为减速需要一个他已经忘记的动作：允许自己停下来。写他的效率反而变高了——因为情感被清空之后就没有东西会干扰判断了。他变成了一台完美的执行机器，同事说他'状态很好'。写他对着镜子刷牙时忽然注意到自己的眼睛：眼球在动、瞳孔在缩放，一切机能正常，但后面没有人了。就像一栋灯还亮着但已经没人住的房子。",
            tension: "场景锚点：有人问他'你还好吗？'，他说'很好'——这个'很好'不是假话也不是真话，因为要撒谎和说真话都需要一个在场的主体，而他已经不确定里面还有没有人。悖论不是燃尽很痛苦——而是：燃尽最可怕的地方恰恰是它不痛苦。痛苦至少说明你还在感觉。他连痛苦的资格都没有了。空不是一种状态，空是状态本身的消失。"
        }
    },
    {
        id: "drv_numbness",
        name: "麻木", nameEn: "Numbness",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你不痛了——不是因为好了，而是因为感觉本身被关掉了。",
        defEn: "You don't hurt anymore — not because you healed, but because feeling itself was switched off.",
        core: "A面：麻木是身体的紧急保护——当痛苦超过阈值，神经系统选择了直接关闭感觉回路而不是让你被痛苦烧化。这是一种生存机制。/ B面：但麻木关掉的不只是痛苦——它把快乐、爱、好奇也一起关了。你变成了一个什么都感觉不到的人。安全了，但也死了。关键张力：你宁愿什么都感觉不到，还是冒着再次被痛苦淹没的风险重新打开感觉？ | 驱力脉动(Trieb): 关机——感觉不到了，这样也好。",
        coreEn: "A-side: Numbness is the body's emergency protection — when pain exceeds threshold, the nervous system shuts down the feeling circuit rather than letting pain burn you away. A survival mechanism. / B-side: But numbness doesn't only shut off pain — it closes joy, love, curiosity too. You become someone who feels nothing. Safe, but also dead. Key tension: Would you rather feel nothing, or risk being overwhelmed by pain again to reopen feeling? | Drive Circuit (Trieb): Shutdown — can't feel anymore; maybe that's fine.",
        reference: "《局外人》莫尔索在母亲葬礼上什么都感觉不到——不是冷血，是感觉被关掉了；《索尔之子》在纳粹集中营搬运尸体的人——眼睛是空的。",
        referenceEn: "Meursault feeling nothing at his mother's funeral — not cold-blooded, but feeling switched off in The Stranger; a man carrying corpses in Nazi camps — eyes empty in Son of Saul.",
        topology: "神经截断：过载保护触发后感觉回路被整体切断，信号仍在传入但不再被接收，安全的代价是知觉全域熄灭",
        directive: {
            bright: "写麻木作为保护机制的运行方式——痛苦到达某个临界点之后，身体替他做了一个决定：关掉。写关掉的过程不是渐变的，是像拉闸一样的。上一秒他还在痛，下一秒什么都没有了。写他第一次发现自己不痛的那种困惑：他知道应该痛——葬礼、分手、诊断结果——但身体拒绝生产那个感觉。写他伸手摸自己的脸，感觉像在摸别人的脸。麻木不是空，是一种固态的空。",
            dark: "写麻木关掉的不只是痛苦——它把所有感觉一起关了。写他面对一个应该让他快乐的场景（孩子的笑、日落、旧情人的来信）时内心的平坦。他知道那里应该有一个情绪反应，像知道一个房间里应该有一盏灯——但灯不亮了。写他开始模仿感情：观察别人在什么时候笑、什么时候叹气，然后在正确的时机做出正确的表情。他变成了一个完美的情感模拟器，只有他自己知道后台是黑屏的。",
            tension: "场景锚点：有人拥抱他，他能感觉到对方身体的温度和压力——物理感觉还在，但情感感觉已经断线了。悖论不是麻木是逃避——而是：他面前有一个开关，打开它可以恢复所有感觉，但'所有感觉'包括那个当初逼他关机的痛苦。他不敢开。不是不想，是不确定重新启动的自己还能不能活过那一次痛苦。那个开关就在他手边。他每天看它一次。每天不碰它一次。"
        }
    },
    {
        id: "drv_aphasia",
        name: "失语", nameEn: "Aphasia",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你有太多话想说，但一个字也说不出来。语言在创伤面前碎了。",
        defEn: "You have so much to say but can't speak a single word. Language shattered before trauma.",
        core: "A面：失语是语言层面的熔毁——有些经历太猛烈了，语言这个工具承载不了它。你不是不想说，是'说'这个功能在你身上坏了。每一个尝试表达的词都觉得不对、太轻、太假。/ B面：但失语也可以变成一种避难所——你发现'说不出来'给了你一个不用面对的借口。你不是不能说，是说出来就意味着承认它。关键张力：你说不出来——是因为语言不够用，还是因为说出来会让它变成真的？ | 驱力脉动(Trieb): 哑——嘴张开了，但什么都没有出来。",
        coreEn: "A-side: Aphasia is language-level meltdown — some experiences are too violent for language to carry. You don't refuse to speak; the 'speaking' function broke. Every attempted word feels wrong, too light, too fake. / B-side: But aphasia can become refuge — 'can't say it' gives an excuse not to face it. You can speak; speaking would mean admitting it's real. Key tension: You can't speak — because language isn't enough, or because speaking makes it true? | Drive Circuit (Trieb): Mute — mouth opens, but nothing comes out.",
        reference: "《钢琴家》在战后面对采访什么都说不出来的幸存者；《海边的曼彻斯特》李面对前妻说的'我什么都说不出来'。",
        referenceEn: "Survivors unable to say anything in postwar interviews in The Pianist; Lee's 'I can't say anything' facing his ex-wife in Manchester by the Sea.",
        topology: "信号阻断：编码器仍在运转但输出端被封死，信息在内部堆积形成压力却无法转化为可传输的信号序列",
        directive: {
            bright: "写嘴张开但什么都没有出来的物理感——不是嗓子坏了，声带是好的。是从想法到语言之间的翻译系统碎了。他能感觉到那些话在胸腔里挤压，像一群人同时要通过一扇门——太多了，互相卡住了，一个都出不来。写他试图说出第一个字的那种徒劳：每一个词都太轻了、太小了、太假了。'痛苦'这个词承载不了他的痛苦。他需要一个还不存在的词。",
            dark: "写失语作为避难所的运作方式——他发现'说不出来'给了他一个完美的借口。因为只要他不说，那件事就还停留在'未被确认'的状态。写他精确地使用沉默：在别人追问时低下头，嘴唇微微动一下但不出声——这个表演的精密程度恰恰证明他并非不能说，他是不愿意说。因为说出来就等于承认它真的发生了。沉默是他最后的城墙——墙后面不是空的，是他不敢看的东西。",
            tension: "场景锚点：他终于开口了——但说出的第一句话和他想说的完全不同。嘴替他做了一个选择，说了一句安全的话，把真正的话又推了回去。悖论不是他说不出来——而是：语言本身可能就不是为了表达最深的东西而设计的。最真实的经验永远在词语的缝隙之间。他说得出来也没用——因为听到的人接收到的版本和他发出的版本不可能是同一个。"
        }
    },

    // ---- 湮灭性熔毁：结构的彻底消融，走向虚无或死亡 ----

    {
        id: "drv_self_destruction",
        name: "自毁", nameEn: "Self-Destruction",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "你在系统地拆除自己——你的关系、你的事业、你的健康。而且你知道你在干什么。",
        defEn: "You're systematically dismantling yourself — relationships, career, health. And you know it.",
        core: "A面：自毁不是意外——你非常清楚你在做什么。每一个坏决定都是故意的。在某种扭曲的逻辑里，你觉得你不配拥有好的东西，所以你要在别人来拿走之前自己先毁掉它们。/ B面：但自毁最深的秘密是——你想被阻止。你在测试有没有人在乎到愿意冲过来抓住你的手。关键张力：你在毁掉自己——是因为你真的想消失，还是因为你想看看有没有人来救你？ | 驱力脉动(Trieb): 拆除——一块一块地把自己拆掉，看还剩什么。",
        coreEn: "A-side: Self-destruction isn't accidental — you know exactly what you're doing. Every bad decision is deliberate. In twisted logic, you feel you don't deserve good things, so you destroy them before someone else can take them. / B-side: But self-destruction's deepest secret — you want to be stopped. You're testing whether anyone cares enough to rush over and grab your hand. Key tension: Are you destroying yourself to truly vanish, or to see if someone will come save you? | Drive Circuit (Trieb): Dismantling — taking yourself apart piece by piece to see what's left.",
        reference: "《搏击俱乐部》叙述者系统地毁掉了自己的公寓、工作和全部关系；《鸟人》在首演之夜用真枪代替道具枪射自己的演员。",
        referenceEn: "The narrator systematically destroying his apartment, job, and all relationships in Fight Club; an actor replacing the prop gun with a real one on opening night in Birdman.",
        topology: "受控拆除：爆破专家在承重点精确安放炸药，建筑按设计路径向内坍塌，拆除者同时也在建筑内部",
        directive: {
            bright: "写自毁的系统性——这不是冲动，是一个计划。他先烧掉最不重要的东西：一个不回复的消息、一个错过的截止日期。然后烧更重要的：一段友谊、一份信任、一个承诺。写他在拆除每一块时的清醒：他不是失控了，他在执行。每一个坏决定都是精确的——他知道这个消息不回会有什么后果，他就是要那个后果。写他看着自己搭建多年的东西一块一块塌下来时的那种扭曲的满足感。",
            dark: "写自毁背后的秘密需求——他想被阻止。他把每一个自毁动作都做得足够明显，足够让周围的人看到。不回消息，但手机不关机。缺席重要场合，但不事先说不来。写他每次做完一个破坏性动作后检查手机的频率——他在等一条'你怎么了'的消息。如果有人冲过来拉住他的手，他会停下来。但如果没人来，他就会继续拆。写那个每一次都没来的人——也许根本没有那个人，但自毁的全部意义就建立在'也许有'上面。",
            tension: "场景锚点：他把最后一块重要的东西放在桌上准备毁掉它时，手停住了——不是犹豫，是他忽然意识到如果这一块也毁了，测试就结束了，答案就出来了。悖论不是自毁是因为想死——而是：自毁是一种极端的沟通方式，用毁灭自己来问一个他用正常方式永远问不出口的问题：'我值得被在乎吗？'但这个问题的提问方式恰好保证了他得不到答案——因为等到有人冲过来时，他已经碎得太厉害了。"
        }
    },
    {
        id: "drv_madness",
        name: "疯狂", nameEn: "Madness",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "理性的边界溶解了。你不再能分辨什么是真的什么是假的。",
        defEn: "The boundary of reason dissolves. You can no longer tell what is real from what is not.",
        core: "A面：疯狂是认知结构的彻底熔毁——你赖以理解世界的框架碎了，所有分类失效。这很可怕，但它也让你看到了'正常人'永远看不到的东西。很多天才的边缘就是疯狂的入口。/ B面：但疯狂不是自由——你以为你解放了，其实你只是失去了控制。那些'洞见'也许只是大脑崩溃时产生的碎片。关键张力：你看到了真相——还是你的大脑在碎裂时产生的幻象恰好长得像真相？ | 驱力脉动(Trieb): 失控——分不清了，内和外的界限消失了。",
        coreEn: "A-side: Madness is the total meltdown of cognitive structure — your framework for understanding shatters, all categories fail. Terrifying, but it lets you see what 'normal people' never can. Many geniuses' edge is madness's entrance. / B-side: But madness isn't freedom — you think you're liberated; you've just lost control. Those 'insights' may be debris from a crashing brain. Key tension: Did you see truth — or do your brain's crash artifacts just happen to resemble truth? | Drive Circuit (Trieb): Loss of control — can't tell anymore; the line between inside and outside vanished.",
        reference: "《闪灵》杰克在酒店里逐渐滑入无法分辨现实与幻觉的深渊；《美丽心灵》纳什发现他最信赖的朋友从来不存在。",
        referenceEn: "Jack gradually sliding into the abyss of indistinguishable reality and hallucination in The Shining; Nash discovering his most trusted friend never existed in A Beautiful Mind.",
        topology: "边界溶解：内外膜破裂后内容物与环境混合，系统不再有'自己'与'非自己'的区分能力，分类框架全部失效",
        directive: {
            bright: "写分类失效的第一个症状——某一天他发现一个以前理所当然的区分忽然不成立了：真与假之间、梦与醒之间、他的想法和别人的想法之间的线模糊了。写这个模糊在初期带来的奇怪兴奋：他觉得自己看到了'正常人'看不到的东西。颜色变亮了、声音有了形状、时间不再是直线的。写他在这个失序的世界里画了一幅画或写了一段话——那个东西确实有一种他清醒时写不出来的野性力量。",
            dark: "写失去分辨能力的恐怖——他不知道房间里的声音是真的还是他自己生产的。写他试图验证现实的方法越来越多、越来越荒诞：掐自己、问别人'你看到了吗'、把每一件事写下来然后反复检查。写他最信赖的感知开始背叛他——眼睛看到的东西手摸不到，耳朵听到的声音别人听不到。他能信赖的工具——理性、逻辑、感知——恰好是那个坏掉了的东西。用来检测故障的系统本身就是故障源。",
            tension: "场景锚点：他在墙上写满了逻辑推演来证明自己没有疯——然后他退后一步看那面墙，意识到一个正常人的墙上不会有这些东西。悖论不是疯狂是失去理性——而是：疯狂和天才共享同一个入口。那些在内外边界溶解后看到的'真相'，他无法确认是洞见还是碎片。唯一能做出这个区分的工具——他的理性——已经是被告本身了。"
        }
    },
    {
        id: "drv_oblivion",
        name: "遗忘", nameEn: "Oblivion",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "不是忘了某件事——而是'你是谁'正在一点一点被溶解掉。",
        defEn: "Not forgetting something — but 'who you are' being dissolved bit by bit.",
        core: "A面：遗忘是记忆层面的熔毁——你的过去正在消融。名字、面孔、地址、你曾经爱过的人——一个个浮起来又沉下去。某种程度上它是一种残酷的解放：没有过去的人不会被过去伤害。/ B面：但没有记忆的你还是你吗？你的身份是由你记得的东西构成的——当记忆全部消融，剩下的那个身体还能叫'你'吗？关键张力：如果忘记一切可以不再痛苦——你愿意用整个自我来换吗？ | 驱力脉动(Trieb): 消融——我正在一点点变成一张白纸。",
        coreEn: "A-side: Oblivion is meltdown at the memory level — your past is dissolving. Names, faces, addresses, people you loved — surfacing and sinking one by one. In a way, cruel liberation: one with no past can't be hurt by it. / B-side: But are you still you without memory? Your identity is composed of what you remember — when it all dissolves, can what's left still be called 'you'? Key tension: If forgetting everything ends pain — would you trade your entire self? | Drive Circuit (Trieb): Dissolving — I'm slowly becoming a blank page.",
        reference: "《恋恋笔记本》一个丈夫每天为失去记忆的妻子重新讲述他们的爱情故事；《暖暖内含光》两个人选择删除彼此的记忆——然后在空白中重新相遇。",
        referenceEn: "A husband retelling their love story daily to his memory-lost wife in The Notebook; two people choosing to delete each other's memory, then meeting again in the blank in Eternal Sunshine.",
        topology: "热寂消融：信息载体逐渐失去结构，编码降解为噪声，系统熵增至均匀态，最终无法区分信号与背景",
        directive: {
            bright: "写记忆消融的具体过程——不是一下子忘光，是一个名字先变模糊，然后是那个名字对应的脸，然后是那张脸对应的声音。写他试图抓住一段记忆的物理感：像用手捞水里的倒影，手一碰就碎了。写他发现某些记忆比其他的更耐溶解——他已经忘了自己的地址，但还记得某个人拥抱他时的温度。身体记忆比头脑记忆更持久。写最后一个还没消融的记忆悬在那里，像一颗星星在空白的天空中。",
            dark: "写遗忘的不可逆——他今天忘了一个人的名字，明天就会忘了自己和那个人的关系，后天会忘了那个人存在过。写身边的人看着他遗忘的恐怖：他微笑着叫错他们的名字，他们纠正他，他点头，五分钟后又叫错了。写遗忘者本人的平静——他不痛苦，因为他已经不记得自己曾经记得。痛苦的是那些还记得的人。写一个细节：他看着一张老照片，上面是他抱着一个孩子，他问'这是谁的孩子？'那个孩子就站在他面前。",
            tension: "场景锚点：他忽然清醒了几秒钟——记忆全部回来了，他看着身边的人意识到自己遗忘了多少。然后那几秒钟过去了，一切又开始溶解。悖论不是遗忘很残忍——而是：如果忘掉一切可以不再痛苦，这笔交易的标价是整个自我。没有记忆的身体还活着，但那个'他'已经不在了。问题是：那个还在呼吸的身体在乎吗？他已经没有在乎的能力了。"
        }
    },
    {
        id: "drv_void",
        name: "虚无", nameEn: "The Void",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "所有意义都溶解了。没有好坏、没有对错、没有目的。彻底的空。",
        defEn: "All meaning dissolved. No good or bad, no right or wrong, no purpose. Total emptiness.",
        core: "A面：虚无是意义层面的彻底熔毁——不是'找不到意义'，而是你清楚地看到了意义本来就不存在。每个人都在假装事情是重要的，但你看穿了这个游戏。/ B面：但虚无本身也是一种姿态——你说'什么都没有意义'的这个判断本身就是一个意义。真正的虚无无法被思考，因为思考本身已经是'有'了。关键张力：你是真的在虚无中——还是你在用虚无来保护自己不受失望的伤害？ | 驱力脉动(Trieb): 空——什么都不重要了，包括这句话。",
        coreEn: "A-side: The void is total meltdown at the meaning level — not 'can't find meaning' but clearly seeing meaning never existed. Everyone pretends things matter, but you've seen through the game. / B-side: But the void itself is a stance — saying 'nothing means anything' is itself a meaning. True void can't be thought, because thinking is already 'being.' Key tension: Are you truly in the void — or using it to protect yourself from disappointment? | Drive Circuit (Trieb): Empty — nothing matters anymore, including this sentence.",
        reference: "《忧郁症》'地球不过是邪恶的，谁也不会想念它'——贾斯汀在世界末日前的彻底虚无；《局外人》莫尔索被判死刑时感受到的不是恐惧而是宇宙的温柔冷漠。",
        referenceEn: "'Earth is evil; no one will miss it' — Justine's total void before the apocalypse in Melancholia; Meursault feeling not fear but the universe's tender indifference upon death sentence in The Stranger.",
        topology: "绝对零度：所有粒子运动停止，系统不再产生任何可观测变化，但量子涨落暗示零度永远无法真正抵达",
        directive: {
            bright: "写意义溶解之后的风景——不是黑暗，是一种均匀的、没有任何标记的白。没有好坏、没有方向、没有'应该'。写他站在这片空白中的身体感：不痛也不轻松，不恐惧也不平静，就是什么都没有。写他低头看自己的影子——影子还在，说明光还在，但光从哪来他看不到。写这个空白里唯一的动静：他的心脏还在跳。他不知道它为什么还在跳。也不知道它凭什么还在跳。但它在跳。",
            dark: "写虚无作为防御机制的精确运作——他说'什么都没有意义'不是一个哲学结论，是一面盾牌。因为如果什么都不重要，那失败就不痛了。写他用虚无把自己包裹起来的过程：先是对工作失去意义感，然后是关系，然后是身体，最后是活着本身。每脱掉一层意义，他就更安全了。但也更冷了。写他在最彻底的虚无状态下忽然被一个很小的东西击中——一只猫蹭他的腿、一个陌生人对他微笑——那一秒他感觉到了什么，那个感觉把整个虚无体系撕开了一道裂缝。",
            tension: "场景锚点：他在纸上写下'什么都没有意义'——然后他盯着这句话，意识到这个判断本身就是一个意义。悖论不是虚无是终点——而是：真正的虚无无法被思考，因为思考本身就是'有'。他说'一切是空的'这句话已经不空了——它有一个说话者、一个意图、一个方向。他能到达的最远处不是虚无，是'声称虚无'。而'声称虚无'可能只是一种极端的失望伪装成哲学。"
        }
    },
    {
        id: "drv_absurd_laughter",
        name: "荒诞之笑", nameEn: "Absurd Laughter",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "在最不该笑的时候笑出声来。不是因为好笑——而是因为理性已经不够用了。",
        defEn: "Laughing when you absolutely shouldn't. Not because it's funny — but because reason no longer suffices.",
        core: "A面：荒诞之笑是理性熔毁后最后的反应——当世界荒谬到连绝望都显得多余，你的身体选择了笑。这不是快乐的笑，是一种'我看到了'的笑——你和荒谬面对面了，而你选择了笑。/ B面：但荒诞之笑也可能是崩溃的前兆——你不是在面对荒谬，你是在被荒谬击穿。关键张力：你的笑是力量——'我看穿了一切所以我笑'——还是崩溃的声音？ | 驱力脉动(Trieb): 大笑——除了笑还能怎么样呢。",
        coreEn: "A-side: Absurd laughter is reason's last reaction post-meltdown — when the world is so absurd even despair seems redundant, your body chooses laughter. Not joy's laugh but 'I see it' — facing the absurd, you chose to laugh. / B-side: But absurd laughter may herald collapse — you're not facing absurdity; it's piercing you. Key tension: Is your laughter strength — 'I see through everything, so I laugh' — or the sound of cracking? | Drive Circuit (Trieb): Laughing — what else can you do.",
        reference: "《小丑》亚瑟在楼梯上的那段舞——所有痛苦在那一刻变成了笑和舞蹈；《杀手莱昂》死前按下雷管时那个微笑。",
        referenceEn: "Arthur's staircase dance — all pain transforming into laughter and movement in Joker; Leon's smile pressing the grenade pin at the moment of death in Léon.",
        topology: "临界翻转：系统在极限应力下响应函数反号，输入悲剧输出笑声，不是处理能力的提升而是处理方向的倒转",
        directive: {
            bright: "写笑声从身体里涌出来的物理过程——不是从脑子里，是从腹腔开始的。他站在一个完全不应该笑的场合——葬礼、法庭、废墟——第一声笑像打嗝一样无法控制地冒出来。写他试图忍住但忍不住的那几秒：嘴唇抿紧了但肩膀在抖，然后一声爆裂的笑穿透了所有抑制。写笑声里面的成分：不是快乐，是一种'够了，我全看见了'的暴烈清醒。这个笑是理性碎掉之后身体找到的唯一出口。",
            dark: "写笑声背后的裂缝——他在笑，但笑的肌肉和哭的肌肉其实是同一组。他自己分不清了。写笑声越来越大、越来越不受控制的那种恐怖：他想停但停不下来，像一台被卡住的机器在同一个频率上空转。周围的人开始从困惑变成害怕。写他从自己的笑声里听到了另一个声音——那个声音不是笑，是某种结构性的崩塌正在发出的噪音。他不是在笑——他的认知系统正在过载，笑是它死前的最后一组信号。",
            tension: "场景锚点：他站在荒谬的正中央大笑，眼泪同时从眼角流出来——他不知道自己是在笑还是在哭，也许两者已经是同一件事了。悖论不是'笑是力量还是崩溃'——而是：在某些时刻，力量和崩溃共享同一个表情。西西弗斯推石头上山的那个微笑，可以被解读为超越的智慧，也可以被解读为精神崩溃后的面部痉挛。他的笑是加缪式的英雄主义还是一根即将断裂的弦发出的最后共鸣？"
        }
    },
    {
        id: "drv_embracing_abyss",
        name: "拥抱深渊", nameEn: "Embracing the Abyss",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你不再逃避那个一直追你的黑暗——你转身朝它走过去。",
        defEn: "You stop running from the darkness that's been chasing you — you turn and walk toward it.",
        core: "A面：拥抱深渊是最极端的接受——你不再和那个可怕的东西战斗了。你张开双臂说'来吧'。这可以是一种终极的勇气，也可以是终极的疲惫。/ B面：但你能分辨吗——你转身面对黑暗是因为你战胜了恐惧，还是因为你已经不在乎了？最平静的接受和最深的放弃有着一模一样的面孔。关键张力：你的平静来自力量，还是来自什么都不剩了？ | 驱力脉动(Trieb): 转身——够了，让它来吧。",
        coreEn: "A-side: Embracing the abyss is the most extreme acceptance — you stop fighting the terrifying thing. Arms open: 'come.' This can be ultimate courage or ultimate exhaustion. / B-side: But can you tell — did you turn to face the dark because you conquered fear, or because you no longer care? The calmest acceptance and the deepest surrender wear identical faces. Key tension: Does your calm come from strength, or from nothing being left? | Drive Circuit (Trieb): Turning — enough; let it come.",
        reference: "《末路狂花》在大峡谷边缘踩下油门的那一刻——不是逃跑，是飞翔；《忧郁症》贾斯汀在行星撞击前的彻底平静。",
        referenceEn: "Pressing the gas at the Grand Canyon's edge — not escape, but flight in Thelma & Louise; Justine's complete calm before the planet strikes in Melancholia.",
        topology: "向心坠落：停止逃逸后主动进入引力势阱，加速度方向与恐惧方向一致，速度越快反而越安静",
        directive: {
            bright: "写转身的那一秒——他一直在跑，背后的黑暗一直在追。然后他停下来了。不是因为跑不动了（也许是），而是他忽然厌倦了恐惧本身。转身。深渊在面前，比他想象的更大、更安静、更不像他恐惧中的样子。写他朝深渊走出第一步时的发现：脚下的地居然是实的。他以为会坠落，但他在走。写深渊近处的温度——不是冰冷的，是一种中性的、没有态度的空气。它不想吞噬他。它只是在那里。",
            dark: "写拥抱深渊作为终极疲惫的那种平静——他不是战胜了恐惧，是恐惧消耗完了所有能量之后自动关机了。写他张开双臂时的表情：不是勇敢的，是空白的。他的平静不是满溢的而是抽空的——像一个已经被搬空的房间，当然安静，因为什么都没有了。写周围的人看他走向深渊时的反应：他们以为他在做一个勇敢的决定，但他已经没有做决定的能力了。他只是不跑了。不跑和面对不是同一件事。",
            tension: "场景锚点：他站在深渊边缘，风从下面吹上来，他的表情是完全平静的——但这个平静有两种完全不同的可能来源。悖论不是'勇气vs.放弃'——而是：最终极的勇气和最终极的放弃共享同一张脸。外面的观察者永远分辨不出来。他自己也许也分辨不出来。也许这个区分本身就是假的——也许在深渊面前，勇气和放弃就是同一个动作的两个名字。"
        }
    },
    {
        id: "drv_death_drive",
        name: "死亡驱力", nameEn: "Death Drive",
        group: "E. 熔毁的驱力", groupEn: "The Meltdown",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "一切驱力的终点。不是'想死'——而是一切有机体都在趋向无机物状态的那个倾向。",
        defEn: "The terminus of all drives. Not 'wanting to die' — but the tendency of all organic matter to return to the inorganic.",
        core: "A面：死亡驱力不是自杀冲动——它是弗洛伊德说的那个比快乐原则更深的东西。它是为什么你会重复那些伤害你的模式、为什么你会破坏对你好的关系、为什么越危险的东西越有吸引力。它是驱力的零点，所有张力消解的地方。/ B面：但死亡驱力也是创造力的源泉——正是因为你感受到了那个'归零'的引力，你才拼命创造、拼命活着。关键张力：你的全部活力，也许正是对这个终极熔毁的抵抗。 | 驱力脉动(Trieb): 归零——一切坚固的东西都终将烟消云散。",
        coreEn: "A-side: The death drive isn't suicidal impulse — it's what Freud called something deeper than the pleasure principle. It's why you repeat patterns that hurt, sabotage good relationships, find danger attractive. It's drive's zero point, where all tension dissolves. / B-side: But the death drive is also creativity's source — precisely because you feel that pull toward zero, you create and live desperately. Key tension: All your vitality may be resistance against this ultimate meltdown. | Drive Circuit (Trieb): Zeroing — everything solid eventually melts into air.",
        reference: "《2001太空漫游》鲍曼穿越星门——所有结构溶解，人类形态熔毁，抵达无法理解的终点；《树之生命》从宇宙大爆炸到一个家庭的丧子——一切生命最终归于沉默。",
        referenceEn: "Bowman crossing the star gate — all structure dissolving, human form melting, reaching an incomprehensible terminus in 2001; from Big Bang to a family's lost child — all life returning to silence in The Tree of Life.",
        topology: "热力学终态：所有梯度消失，能量均匀分布，系统达到最大熵，不再有任何可被利用的势差来驱动变化",
        directive: {
            bright: "写那个'归零'的引力——不是一个念头，是一种比念头更深的身体倾向。写他在最平静的日常里感觉到的那个微弱的拉力：看窗外的高处、站在铁轨旁边、握着一把锋利的东西——不是想做什么，是身体在那些时刻会忽然变得很安静，像在倾听一个来自很深处的频率。写他用创造来抵抗这个引力的方式：他写、他画、他建造——每一个创造行为都是对归零的一次拒绝。他最好的作品都诞生在他最接近那个零点的时候。",
            dark: "写重复强迫的运作方式——他一次又一次地走进同一种伤害模式，每一次都清楚地知道结果是什么，每一次都走进去。写这个回路的精确结构：找到一个好的关系、感受到安全、然后开始破坏它——不是因为不珍惜，是因为某种比珍惜更深的东西在驱动他朝张力消解的方向移动。写他在破坏完一段关系之后的那种矛盾感：痛苦，但同时有一种奇怪的、不可言说的'完成感'。像一个钟摆终于停在了最低点。",
            tension: "场景锚点：他坐在窗前看日出，手里端着咖啡，一切都好——但他能感觉到那个零点在某个地方等他。悖论不是死亡驱力是灰暗的——而是：他此刻全部的活力、全部的创造力、全部的热爱，可能都是对这个终极归零的反向运动。如果没有那个零点的引力，他也许什么都不会创造。他最炽热的活着，恰恰是因为他最深处有一个不活着的倾向。这两个方向不是对立的——它们是同一根弦的两次振动。"
        }
    }
];
