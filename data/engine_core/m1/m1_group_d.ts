import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 断裂的孤岛 (The Disconnected) - 16 Items
    // 缺失方向：向他人 → 关系。"我无法触及你"——爱、失去、背叛、孤独。
    // ============================================================
    {
        id: "subj_unloved",
        name: "缺爱者", nameEn: "The Unloved",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "从未被真正地、无条件地爱过——你知道'爱'这个字怎么写，但你不知道它摸起来是什么手感。",
        defEn: "Never truly, unconditionally loved — you know how to spell 'love,' but you've never felt what it's like to be held by it.",
        flaw: "情感饥渴", flawEn: "Emotional Starvation",
        core: "A面：缺爱可以让人变得极其强大——你不需要任何人，你的城堡是自己一砖一瓦垒起来的。这种独立本身就是一种骄傲。/ B面：但城堡的门是从里面锁死的。有人敲门你也不敢开——因为你不知道温暖进来之后会不会再次离开，而你已经承受不起第二次。关键张力：当爱终于来了——你敢接住吗？ | 缺失 ($): 被爱——你的手伸了一辈子，但从来没有人握住过。",
        coreEn: "A-side: Being unloved can make one extremely strong — you need no one; your castle was built brick by brick with your own hands. That independence is itself a pride. / B-side: But the castle's door is locked from the inside. Even when someone knocks, you dare not open — because you don't know if the warmth will leave once it enters, and you can't bear that a second time. Key tension: When love finally arrives — do you dare catch it? | Lacks ($): Being loved — you've reached out your whole life, but no one ever held on.",
        reference: "《被嫌弃的松子的一生》中终生渴求爱却反复被抛弃的松子；《心灵捕手》中用愤怒包裹童年创伤的威尔。",
        referenceEn: "Matsuko in Memories of Matsuko, craving love all her life yet repeatedly abandoned; Will in Good Will Hunting, wrapping childhood trauma in anger.",
        topology: "从未被无条件地爱过 → 自己垒的城堡门从里面锁死 → 爱来了也不敢接因为承受不起它再次离开",
        directive: {
            bright: "他的城堡是自己一砖一瓦垒起来的。写他在孤独中锻造出来的那种骄傲——他不需要任何人。他的独立不是伪装，是真的，是从无人回应的夜里长出来的。不要写成悲情，写一个在缺爱中反而建成了自己的人。他的强大是真实的，只是代价没人知道。",
            dark: "有人敲门。他听见了。但他不敢开。写他站在门后面的那种僵——他不知道温暖进来之后会不会再次离开，而他已经承受不起第二次了。他的手伸了一辈子，但从来没有人握住过。让观众看见那扇从里面锁死的门：保护和囚禁是同一个动作。",
            tension: "有人对他说'我不会走的'。他的眼睛闪了一下。写那个闪——不是感动，是恐惧和渴望同时涌上来的短路。他想信，但他不知道怎么信。让观众和他一起站在那个门槛上：爱终于来了，但接住它需要的勇气比一个人活着更大。"
        }
    },
    {
        id: "subj_bereaved",
        name: "丧亲者", nameEn: "The Bereaved",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "失去了至亲至爱之人——世界塌了一角，而你还得假装它是完整的。",
        defEn: "Having lost the closest person — a corner of the world has collapsed, yet you must pretend it's still whole.",
        flaw: "哀悼停滞", flawEn: "Arrested Grief",
        core: "A面：失去可以是重新看见世界的契机——死亡剥去了日常的伪装，让你第一次真正看清什么是重要的。/ B面：但更多时候，失去就是一个永远填不满的洞。你不是在缅怀，你是在拒绝让他们真正离开。他们的杯子还摆在桌上，他们的气味还留在枕头上。关键张力：你是在缅怀逝者——还是在拒绝让他们真正离开？ | 缺失 ($): 逝去之人——那个空出来的位置，你用什么来填？",
        coreEn: "A-side: Loss can be an occasion to see the world anew — death strips away the disguise of routine, letting you truly see what matters for the first time. / B-side: But more often, loss is just a hole that can never be filled. You're not honoring them; you're refusing to truly let them go. Their cup is still on the table; their scent still clings to the pillow. Key tension: Are you honoring the dead — or refusing to let them leave? | Lacks ($): The departed — what do you fill that empty seat with?",
        reference: "《海边的曼彻斯特》中因丧子而无法原谅自己的李；《东京物语》中目送子女各自散去的老夫妻。",
        referenceEn: "Lee in Manchester by the Sea, unable to forgive himself after losing his children; the elderly couple watching their children scatter in Tokyo Story.",
        topology: "至亲消失但世界还在运转 → 你用保留遗物的方式拒绝让他们真正离开 → 哀悼停滞在一个永远填不满的洞上",
        directive: {
            bright: "他失去了那个人之后，第一次真正看清了什么是重要的。写他在丧失中获得的那种残酷的清醒——死亡剥去了日常的伪装，所有装饰性的东西都被吹走了，只剩下最本质的。不要写成感恩叙事，写一个在塌了一角的世界里重新学会看的人。",
            dark: "那个人的杯子还摆在桌上。他没有收。写他拒绝让时间前进的那种执着——他不是在缅怀，他是在拒绝让那个人真正离开。枕头上的气味他不洗掉，鞋子放在门口他不收起来。让观众看见一种比哭泣更深的哀伤：假装那个人只是出去了，马上就回来。",
            tension: "有人说'你该放下了'。他没有说话。写他的沉默——不是固执，是他不知道'放下'是什么意思。放下意味着承认那个人真的不在了。让观众感受到这个选择的残忍：继续等一个不会回来的人，和承认他不会回来，哪个更痛？"
        }
    },
    {
        id: "subj_betrayed",
        name: "被背叛者", nameEn: "The Betrayed",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "曾经无条件信任某人，那份信任被碾碎了——地板塌陷的那一刻，你才发现自己一直站在空气上。",
        defEn: "Once trusting someone unconditionally, that trust was shattered — the moment the floor collapsed, you realized you'd been standing on air.",
        flaw: "信任坍塌", flawEn: "Trust Collapse",
        core: "A面：被背叛可以逼出新的分辨力——你终于看清了谁值得信。烧伤过的手，再也不会乱碰火焰。/ B面：但你同时也关上了所有的门。你把世界分成了'会背叛我的'和'还没有背叛我的'两种人。你再也不敢全部交出去了。关键张力：如果背叛你的人跪着求你原谅——原谅是慈悲，还是软弱？ | 缺失 ($): 信任——你还能把后背交给任何人吗？",
        coreEn: "A-side: Betrayal can forge new discernment — you finally see who deserves trust. A hand once burned never carelessly touches flame again. / B-side: But you also shut every door. You've divided the world into 'those who will betray me' and 'those who haven't yet.' You can never hand everything over again. Key tension: If the betrayer kneels for forgiveness — is forgiving mercy, or weakness? | Lacks ($): Trust — can you ever show your back to anyone again?",
        reference: "《基督山伯爵》中被至友出卖而蒙冤入狱的唐泰斯；《教父2》中发现亲兄弟出卖家族的迈克尔。",
        referenceEn: "Dantès, betrayed by his closest friend and wrongfully imprisoned in The Count of Monte Cristo; Michael discovering his own brother's betrayal of the family in The Godfather Part II.",
        topology: "无条件的信任被碾碎 → 世界被分成'会背叛我的'和'还没有背叛我的' → 关上所有门之后在深夜恨自己",
        directive: {
            bright: "他被烧过之后再也不乱碰火了。写他在背叛之后获得的新的分辨力——他终于看清了谁值得信，谁不值得。他的眼睛比以前冷，但比以前准。不要写成受害者，写一个被烧伤之后反而学会了读火焰的人。他的谨慎是一种来之不易的能力。",
            dark: "他关上了所有的门。写他被背叛之后那种系统性的封闭——不是对某个人，是对所有人。每一个新的善意都被他当作还没有暴露的陷阱。他在墙后面听他们的脚步声远去。他松了一口气。然后在深夜恨自己。让观众看见一种比孤独更深的东西：主动选择的孤独。",
            tension: "背叛他的人跪在面前。写他看着那个人的眼睛——他在找什么。不是真诚，是他已经不相信真诚了。他在找的是一个理由，一个可以让他重新相信的证据。但他不知道那个证据长什么样。让观众和他一起悬在那个瞬间：原谅是慈悲，还是软弱？"
        }
    },
    {
        id: "subj_unrequited",
        name: "相思者", nameEn: "The Unrequited",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "爱一个永远得不到的人——你的全部世界都朝向一个永远不会转身的背影。",
        defEn: "In love with someone forever beyond reach — your entire world faces a back that will never turn around.",
        flaw: "单向执念", flawEn: "One-Sided Obsession",
        core: "A面：单恋可以是最纯粹的爱情——因为完全不求回报，这份感情干净得像一首没有听众的歌。/ B面：但不求回报的另一面是：对方只是你幻想的容器。你爱的不是那个人，你爱的是你投射在那个人身上的自己。关键张力：如果那个人永远不会回头——你的爱是奉献，还是囚禁？ | 缺失 ($): 回应——你唱了一辈子，但台下没有人。",
        coreEn: "A-side: Unrequited love can be the purest affection — expecting nothing in return, the feeling is clean as a song with no audience. / B-side: But the flip side of expecting nothing is: the other person is merely a vessel for your fantasy. You don't love them; you love yourself projected onto them. Key tension: If they never look back — is your love dedication, or imprisonment? | Lacks ($): Reciprocity — you've sung your whole life, but the audience is empty.",
        reference: "《大话西游》中隔着五百年凝望紫霞的至尊宝；《赎罪》中用一生忏悔写不出结局的布里奥妮。",
        referenceEn: "Supreme Treasure gazing at Zixia across five hundred years in A Chinese Odyssey; Briony spending a lifetime atoning, unable to write the ending in Atonement.",
        topology: "全部世界朝向一个永远不会转身的背影 → 不求回报让感情纯粹但也让对方变成幻想的容器 → 你爱的可能不是那个人而是你投射在那个人身上的自己",
        directive: {
            bright: "他的爱不求回报。写那种干净——没有交换、没有策略、没有'你也得爱我'。他的感情像一首没有听众的歌，但正因为没有听众，每一个音都是纯的。不要写成卑微，写一种因为完全单向而达到了某种纯度的感情。他的爱是一种独唱，而独唱可以是最美的。",
            dark: "他的全部世界都朝向一个永远不会转身的背影。写他在单向中的消耗——他爱的不是那个人，他爱的是他投射在那个人身上的自己的渴望。那个人只是一个容器，里面装着他自己的匮乏。他唱了一辈子，但台下没有人。让观众看见一种最隐秘的自恋：用爱别人的方式爱自己。",
            tension: "那个人回头了。看了他一眼。写他在被看见的那一秒的反应——不是狂喜，是一种更复杂的东西：如果对方真的走过来，他的幻想就会碎。他需要那个背影，因为背影是他用来安放自己的容器。让观众看见：他到底是想被爱，还是想继续安全地爱着？"
        }
    },
    {
        id: "subj_caretaker",
        name: "沉默的照顾者", nameEn: "The Silent Caretaker",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "一辈子照顾别人，从没有人问过'你还好吗'——你的人生是别人人生的注脚。",
        defEn: "Spending a lifetime caring for others, with no one ever asking 'are you okay?' — your life is a footnote to someone else's.",
        flaw: "自我消隐", flawEn: "Self-Erasure",
        core: "A面：照顾他人可以是爱的最高形式——你把自己削成了蜡烛，照亮了所有人。这种牺牲是沉默的，也是伟大的。/ B面：但蜡烛有一天会烧完。你照顾了所有人，唯独没有照顾过自己。有一天被照顾的人都走了，你才发现自己不知道一个人该怎么活。关键张力：如果被照顾的人不再需要你——你还有存在的理由吗？ | 缺失 ($): 被照顾——你给了所有人暖意，但你自己是冷的。",
        coreEn: "A-side: Caring for others can be the highest form of love — you've pared yourself into a candle, illuminating everyone. That sacrifice is silent and great. / B-side: But one day the candle burns out. You cared for everyone except yourself. One day when those you cared for are gone, you realize you don't know how to live alone. Key tension: If the person you care for no longer needs you — do you still have a reason to exist? | Lacks ($): Being cared for — you gave warmth to everyone, but you yourself are cold.",
        reference: "《东京物语》中一生为家庭付出却被子女冷落的母亲；《时时刻刻》中因责任感无法离开家庭的劳拉。",
        referenceEn: "The mother in Tokyo Story, giving her whole life to her family yet neglected by her children; Laura in The Hours, unable to leave her family out of a sense of obligation.",
        topology: "自我被削成蜡烛照亮所有人 → 从来没有人问过'你还好吗' → 被照顾的人都走了之后发现不知道一个人该怎么活",
        directive: {
            bright: "她把自己削成了蜡烛。写她在照顾他人中找到的那种沉默的伟大——她的牺牲不需要观众，她的爱是最朴素的那种：做饭、洗衣、在半夜起来查看。不要写成圣人，写一个在付出中找到了自己存在理由的人。她的温暖是真实的，她的满足也是真实的。",
            dark: "所有人都走了。她一个人站在空了的厨房里。写她在没有人需要她之后的那种塌——她不知道一个人该怎么活。她的一辈子都是别人人生的注脚，现在主角都散场了，注脚还留在原地。她给了所有人暖意，但她自己是冷的。没有人问过'你还好吗'。",
            tension: "有人递给她一杯水。她愣了。写那个愣——她太久没有被照顾过了，她不知道被照顾是什么感觉。让观众看见一个端了一辈子水的人第一次接水时的表情。她该怎么拿这杯水？她的手习惯了递出，不习惯接住。"
        }
    },
    {
        id: "subj_jealous",
        name: "嫉妒者", nameEn: "The Jealous",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "被另一个人的存在——他的才华、爱情或光芒——持续折磨。你恨的不是他，你恨的是自己不是他。",
        defEn: "Perpetually tormented by another's existence — their talent, love, or radiance. You don't hate them; you hate that you are not them.",
        flaw: "嫉妒之毒", flawEn: "Envy",
        core: "A面：嫉妒可以是隐秘的指南针——你最嫉妒的东西就是你最渴望的东西。承认嫉妒，就是承认自己的匮乏，这需要勇气。/ B面：但嫉妒也是最腐蚀性的毒药——你开始恨一个不该恨的人，仅仅因为他拥有了你没有的东西。你的眼睛被他占满了，你自己的路反而看不见了。关键张力：消灭那个让你嫉妒的人之后——你的痛苦会消失吗？ | 缺失 ($): 平静——你的眼睛里永远住着别人。",
        coreEn: "A-side: Jealousy can be a hidden compass — what you envy most is what you desire most. Admitting jealousy means admitting your own lack; that takes courage. / B-side: But jealousy is also the most corrosive poison — you begin hating someone who shouldn't be hated, simply because they possess what you don't. Your eyes are full of them; your own path becomes invisible. Key tension: After destroying the one you envy — does the pain vanish? | Lacks ($): Peace — your eyes are forever occupied by someone else.",
        reference: "《莫扎特传》中萨列里对莫扎特天赋的终生嫉妒与毁灭；《甄嬛传》中对甄嬛宠爱患上执念的皇后。",
        referenceEn: "Salieri's lifelong jealousy and destruction toward Mozart's genius in Amadeus; the Empress developing an obsessive fixation on Zhen Huan's favor in Empresses in the Palace.",
        topology: "别人的存在持续折磨你 → 嫉妒暴露了你最深的匮乏 → 消灭让你嫉妒的人之后痛苦不会消失因为缺的是你自己",
        directive: {
            bright: "他最嫉妒的东西就是他最渴望的东西。写嫉妒作为隐秘指南针的那种功能——它比任何自我分析都精确地指出了他的匮乏。承认嫉妒需要勇气，因为它意味着承认'我不够'。不要写成丑陋，写一个在嫉妒中看见了自己真正欲望的人。他的恨是他的渴望的反面。",
            dark: "他的眼睛里永远住着别人。写他被另一个人的光芒持续灼烧的那种痛——他恨的不是那个人，他恨的是自己不是那个人。他的视线被对方占满了，自己的路反而看不见了。嫉妒是最腐蚀性的毒药：你开始恨一个不该恨的人，仅仅因为他拥有了你没有的东西。",
            tension: "那个让他嫉妒的人倒下了。他看着。写他的表情——不是快意，是一种更空的东西。胜利没有带来平静，因为缺的那块不在对方身上，一直在他自己身上。让观众看见：消灭了镜子之后，映在里面的匮乏并没有跟着消失。"
        }
    },
    {
        id: "subj_follower",
        name: "追随者", nameEn: "The Follower",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "一切意义和方向都来自另一个人——失去了那个人，你就是一个没有指南针的空壳。",
        defEn: "All meaning and direction come from another person — lose them, and you're a compass-less shell.",
        flaw: "依附", flawEn: "Dependence",
        core: "A面：追随可以是忠诚的至高表达——你把自己交付给一个比你更大的方向，这种臣服本身有一种崇高感。/ B面：但追随的另一面是放弃了自我。你不知道自己的声音是什么样的，因为你只会重复他的话。关键张力：如果你跟随的那个人是错的——你是忠诚，还是帮凶？ | 缺失 ($): 自我方向——没有他，你不知道往哪里走。",
        coreEn: "A-side: Following can be the highest expression of loyalty — you surrender yourself to a direction greater than you; that submission has its own nobility. / B-side: But following also means surrendering the self. You don't know what your own voice sounds like because you only repeat theirs. Key tension: If the one you follow is wrong — are you loyal, or complicit? | Lacks ($): Self-direction — without them, you don't know which way to walk.",
        reference: "《死亡诗社》中崇拜基廷老师却承受不住压力的尼尔；桑丘之于堂吉诃德的忠诚与困惑。",
        referenceEn: "Neil in Dead Poets Society, worshipping Mr. Keating yet crumbling under pressure; Sancho Panza's loyalty and confusion toward Don Quixote.",
        topology: "所有意义和方向都来自另一个人 → 追随既是忠诚的至高表达也是自我的彻底放弃 → 那个人是错的时候你就从忠臣变成帮凶",
        directive: {
            bright: "他把自己交付给了一个比他更大的方向。写那种臣服中的崇高感——他不需要自己思考，因为他找到了一个值得相信的人。他的忠诚是真的，他的追随是一种爱。不要写成软弱，写一个在交付中找到了安全和意义的人。有些人需要自己走，有些人需要跟着走。",
            dark: "那个人走了。他站在原地，不知道往哪里去。写他失去方向之后的那种空——他的声音是什么样的，他不知道，因为他只会重复别人的话。他不是没有自我，是他的自我一直寄存在别人那里。寄存处关门了，他取不回来了。",
            tension: "他追随的那个人做了一件他知道是错的事。写他站在那个瞬间的样子——服从的惯性在拉他往前走，良知在拉他停下来。让观众看见一个忠诚和正义不再重合时的追随者。他是继续跟，还是第一次自己走？不要替他选。"
        }
    },
    {
        id: "subj_wall",
        name: "无法亲密的人", nameEn: "The Walled",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "渴望靠近他人，却每次都在最后一步退缩或搞砸——门开了一条缝，你又把它关上了。",
        defEn: "Yearning to get close, yet retreating or sabotaging at the very last step — the door cracked open, and you shut it again.",
        flaw: "亲密恐惧", flawEn: "Intimacy Avoidance",
        core: "A面：不靠近就不会受伤——你的墙是你最可靠的盟友。在墙后面你是安全的，是完整的，是不需要向任何人解释的。/ B面：但墙也挡住了所有想要进来的人。你在墙后面听他们的脚步声远去，你松了一口气——然后在深夜恨自己。关键张力：如果有人愿意等你打开那扇门——你会让他等多久？ | 缺失 ($): 亲近——你渴望被触碰，但你的皮肤会刺痛。",
        coreEn: "A-side: Not getting close means not getting hurt — your wall is your most reliable ally. Behind it you are safe, whole, and owe no explanation. / B-side: But the wall also blocks everyone trying to enter. Behind it you hear their footsteps fade; you sigh with relief — then hate yourself in the dead of night. Key tension: If someone is willing to wait for you to open that door — how long will you make them wait? | Lacks ($): Closeness — you crave touch, but your skin stings.",
        reference: "《花束般的恋爱》中慢慢失去共同语言却不敢说出口的情侣；《她》中只能与AI建立亲密关系的西奥多。",
        referenceEn: "The couple in We Made a Beautiful Bouquet, slowly losing their shared language yet afraid to speak up; Theodore in Her, only able to form intimacy with an AI.",
        topology: "渴望靠近但每次都在最后一步退缩 → 墙既是最可靠的盟友也是最精确的监狱 → 听他们的脚步声远去然后在深夜恨自己",
        directive: {
            bright: "他在墙后面是安全的。写那种安全——不靠近就不会受伤，不打开就不会被看见。他的墙不是软弱，是一种经过计算的保护策略。在墙后面他是完整的，是不需要向任何人解释的。不要写成病态，写一个找到了属于自己的安全距离的人。",
            dark: "门开了一条缝。他又把它关上了。写他和亲密之间的那种系统性的自我破坏——每次都在最后一步退缩，每次都在最关键的时候搞砸。他渴望被触碰，但他的皮肤会刺痛。他在墙后面听他们的脚步声远去，松了一口气，然后在深夜恨自己。",
            tension: "有人愿意等。写他知道有人在门外等着时的状态——他的手放在门把上，一直放着。他不开门，但他也不走开。让观众看见一种最安静的拉锯：门内的人和门外的人，都在等对方先做点什么。他会让那个人等多久？"
        }
    },
    {
        id: "subj_fading_couple",
        name: "渐行渐远的人", nameEn: "The Fading Bond",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "与曾经最亲密的人之间，正在经历一种缓慢的、不可逆的疏离——不是不爱了，是不会爱了。",
        defEn: "Experiencing a slow, irreversible estrangement from someone once closest — not that love is gone, but that you've forgotten how to love.",
        flaw: "沉默积累", flawEn: "Accumulated Silence",
        core: "A面：渐行渐远可以是温柔的放手——有些关系的使命已经完成了，松手不是不爱，是尊重彼此的方向。/ B面：但更多时候，渐行渐远是最痛苦的钝刀。你们还住在同一个屋檐下，但已经不说真话了。沉默比吵架更致命。关键张力：你们之间最后一句真心话——是什么时候说的？ | 缺失 ($): 共同语言——你们还在一起，但你们已经是两个世界的人了。",
        coreEn: "A-side: Drifting apart can be a gentle letting go — some relationships have fulfilled their purpose; letting go isn't unloving; it's respecting each other's direction. / B-side: But more often, drifting apart is the cruelest blunt knife. You still live under the same roof, but you've stopped telling the truth. Silence kills more than fighting. Key tension: When was the last honest thing you said to each other? | Lacks ($): Common language — you're still together, but you're already people from two different worlds.",
        reference: "《花束般的恋爱》中从灵魂伴侣到陌路的麦与绢；《革命之路》中困在体面婚姻里窒息的夫妻。",
        referenceEn: "The lovers in We Made a Beautiful Bouquet, drifting from soulmates to strangers; the couple suffocating inside a respectable marriage in Revolutionary Road.",
        topology: "曾经最亲密的人之间产生了不可逆的疏离 → 不是不爱了是不会爱了 → 沉默比吵架更致命",
        directive: {
            bright: "有些关系的使命已经完成了。写他们松手时的那种温柔——不是不爱了，是尊重彼此的方向已经不同了。他们曾经是最对的人，现在也是。只是'对'的定义变了。不要写成遗憾，写一种在分开中依然保存着敬意的关系。放手也可以是爱的一种形式。",
            dark: "他们还住在同一个屋檐下。但已经不说真话了。写他们之间的沉默——不是无话可说，是有太多话不敢说。餐桌上的安静比吵架更致命。他们在同一个空间里各自孤独。让观众从他们递碗的手势里看见一种最钝的痛：你们还在一起，但你们已经是两个世界的人了。",
            tension: "他们同时伸手拿同一样东西。手碰到了。写那一秒的接触——曾经最自然的事，现在变得尴尬了。让观众在那个触碰中感受到一整段关系的变化：是从什么时候开始，碰到对方的手变成了一件需要回避的事？他们之间最后一句真心话是什么时候说的？"
        }
    },
    {
        id: "subj_surrogate_parent",
        name: "代父/代母", nameEn: "The Surrogate Parent",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "被迫承担不属于自己年龄的养育责任——你在本该被照顾的年纪，已经开始照顾别人了。",
        defEn: "Forced to assume parenting duties beyond one's age — at the age when you should be cared for, you were already caring for others.",
        flaw: "早熟剥削", flawEn: "Stolen Childhood",
        core: "A面：代替缺席者可以让一个人变得无比坚韧——你在别人还在撒娇的年纪就学会了做饭、做决定、做一个大人。/ B面：但坚韧的代价是你被偷走了的青春。你照顾了所有人——但谁来照顾那个当年还是孩子的你？那个孩子还在你体内，还在等一个拥抱。关键张力：你照顾了所有人——但谁来照顾那个当年的你？ | 缺失 ($): 童年——你从来没有做过孩子。",
        coreEn: "A-side: Standing in for the absent can make a person incredibly resilient — you learned to cook, make decisions, and be an adult at an age when others were still being spoiled. / B-side: But the price of resilience is a stolen youth. You cared for everyone — but who cares for the child you once were? That child is still inside you, still waiting for a hug. Key tension: You've cared for everyone — but who cares for the child you were? | Lacks ($): Childhood — you never got to be a child.",
        reference: "《冬天的骨头》中十七岁就独撑全家的芮；《请回答1988》中总是让着弟弟妹妹的大女儿德善。",
        referenceEn: "Ree holding an entire family together at seventeen in Winter's Bone; Deok-sun, the eldest daughter always yielding to her siblings in Reply 1988.",
        topology: "在该被照顾的年纪开始照顾别人 → 坚韧的代价是被偷走的童年 → 那个当年还是孩子的自己还在体内等一个拥抱",
        directive: {
            bright: "他在别人还在撒娇的年纪就学会了做饭、做决定、做一个大人。写他在早熟中锻造出来的坚韧——那种不该属于这个年纪的沉稳反而成了一种独特的温柔。他比任何人都早懂事，这让他比任何人都厚。不要写成苦情，写一个在缺席的位置上站了起来的人。",
            dark: "他照顾了所有人。但谁来照顾那个当年的他？写他身体里那个还在等拥抱的孩子——那个孩子被跳过了，直接从小孩变成了大人。他的成熟不是长出来的，是被逼出来的。有一天他看见别的孩子在撒娇，他的眼睛里有一种不属于这个年纪的远。",
            tension: "有人试图照顾他。他不知道怎么接受。写他被温柔触碰时的不适——他的身体习惯了输出，不习惯接收。他的手不知道放在哪里。让观众看见一个一辈子都在给的人第一次被给的时候的笨拙。他配不配被照顾？不要替他回答。"
        }
    },
    {
        id: "subj_possessive",
        name: "控制者", nameEn: "The Possessive",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "以爱的名义控制另一个人——因为太害怕失去，所以把爱变成了锁链。",
        defEn: "Controlling another in the name of love — so terrified of losing that love is turned into chains.",
        flaw: "窒息之爱", flawEn: "Suffocating Love",
        core: "A面：控制可以是保护的极端变形——你不能让对方受伤，你把所有危险都替对方挡在外面。这种执念的底色其实是恐惧。/ B面：但保护太多就成了牢笼。你爱的不是那个人，你爱的是那个人让你感觉到的安全。当对方挣扎的时候，你会握得更紧。关键张力：你爱的是那个人，还是那个人给你的安全感？ | 缺失 ($): 安全感——你抓得越紧，离失去越近。",
        coreEn: "A-side: Control can be an extreme mutation of protection — you can't let them get hurt; you block all dangers on their behalf. The undertone of this obsession is actually fear. / B-side: But too much protection becomes a cage. You don't love the person; you love the security they provide. When they struggle, you grip tighter. Key tension: Do you love the person, or the security they give you? | Lacks ($): Security — the tighter you grip, the closer to losing.",
        reference: "《蝴蝶梦》中被已故丽贝卡的幽灵控制的整栋庄园；《消失的爱人》中把婚姻变成完美牢笼的艾米。",
        referenceEn: "The entire estate controlled by the ghost of the late Rebecca in Rebecca; Amy turning marriage into a perfect cage in Gone Girl.",
        topology: "以爱的名义控制另一个人 → 保护的极端变形是牢笼 → 对方挣扎时你会握得更紧因为你爱的是安全感不是那个人",
        directive: {
            bright: "他不能让她受伤。他替她挡住了所有危险。写他的保护——那种执着的底色其实是恐惧，但恐惧可以是爱的一种极端表达。他的控制不是恶意，是他唯一会的爱法。不要写成反派，写一个把保护做到极端的人。他的方法是错的，但他的出发点是真实的。",
            dark: "她挣扎了。他握得更紧了。写那个'更紧'——他的爱在接触到拒绝的瞬间暴露出来的底色不是温柔，是占有。他爱的不是那个人，他爱的是那个人给他的安全感。当对方想走，他的第一反应不是放手，是锁门。让观众看见爱和控制之间那条几乎看不见的线。",
            tension: "她平静地看着他说'放开我'。写他的手——紧握着。他的大脑知道应该松开，但他的手不同意。让观众同时看见他眼睛里的爱和他手上的力量。这两样东西不该同时出现，但它们在他身上重合了。他松手还是握紧？两种选择都会毁掉什么。"
        }
    },
    {
        id: "subj_guilt_bound",
        name: "负疚者", nameEn: "The Guilt-Bound",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "因为对某个人做过（或没做）的事，背负着无法卸下的愧疚——那个人也许已经原谅了你，但你没有。",
        defEn: "Carrying an unsheddable guilt for something done (or not done) to someone — they may have forgiven you, but you haven't.",
        flaw: "自罚", flawEn: "Self-Punishment",
        core: "A面：愧疚可以是良知的证明——至少你还在乎。在一个麻木的世界里，你的痛苦说明你还有道德的神经。/ B面：但愧疚也可以是一台永动机——你把自罚变成了仪式，每天用同一根针刺自己。被你伤害的人已经往前走了，只有你还跪在原地。关键张力：被你伤害的人已经原谅了你——但你能原谅自己吗？ | 缺失 ($): 宽恕——你欠的那个人已经不要了，但你还在还。",
        coreEn: "A-side: Guilt can be proof of conscience — at least you still care. In a numb world, your pain proves your moral nerves still function. / B-side: But guilt can also be a perpetual engine — you've turned self-punishment into ritual, pricking yourself with the same needle each day. The person you hurt has moved on; only you remain kneeling. Key tension: The person you hurt has already forgiven you — but can you forgive yourself? | Lacks ($): Forgiveness — the one you owe has stopped asking, but you're still paying.",
        reference: "《海边的曼彻斯特》中李永远无法原谅自己的疏忽；《赎罪》中布里奥妮用一生的写作偿还一个童年的谎言。",
        referenceEn: "Lee in Manchester by the Sea, forever unable to forgive his own negligence; Briony in Atonement, spending a lifetime writing to repay a childhood lie.",
        topology: "愧疚变成自罚的永动机 → 被伤害的人已经原谅了但你不放过自己 → 自罚变成了仪式而不是赎罪",
        directive: {
            bright: "他还在乎。写他的愧疚作为良知的证据——在一个麻木的世界里，他的痛苦说明他的道德神经还活着。他不是被惩罚，他是主动选择承担。这种承担是沉重的，但也是人性最后的体面。不要写成自虐，写一个因为还有良心而无法逃避的人。",
            dark: "被他伤害的人已经往前走了。只有他还跪在原地。写他的自罚——每天用同一根针刺自己，那根针已经变得不锋利了，但他还在刺。他的赎罪已经变成了仪式，而仪式本身已经和那个被伤害的人无关了。让观众看见一种比愧疚更深的东西：他在惩罚自己，因为惩罚比原谅自己更容易。",
            tension: "有人对他说'他已经原谅你了'。他的表情没有变。写那个不变——不是不相信，是对他来说不重要。他需要的宽恕不是来自对方，是来自镜子里那个人。但镜子里那个人永远不会点头。让观众看见一个被自己锁在原地的人。他欠的那个人已经不要了，但他还在还。"
        }
    },
    {
        id: "subj_silenced",
        name: "失语者", nameEn: "The Silenced",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "有话要说，但语言在到达对方之前就碎了——无论是因为权力、文化还是怯懦，你的嘴是哑的。",
        defEn: "Having something to say, but the words shatter before reaching the other — whether from power, culture, or cowardice, your mouth is mute.",
        flaw: "表达瘫痪", flawEn: "Expressive Paralysis",
        core: "A面：沉默可以是一种保存自我的尊严——在说什么都会被扭曲的环境里，不说是最后的抵抗。你的沉默本身就是一种声明。/ B面：但沉默太久会变成自我掩埋。你不是不想说，你是已经忘了怎么说了。那些没有说出口的话在你体内发酵、膨胀，有朝一日会炸掉你。关键张力：如果你终于开口了——对方还在听吗？ | 缺失 ($): 表达——你里面全是话，但从未被人听到过。",
        coreEn: "A-side: Silence can be a dignity that preserves the self — in a world where anything said will be twisted, not speaking is the last resistance. Your silence itself is a statement. / B-side: But silence too long becomes self-burial. It's not that you don't want to speak; you've forgotten how. The unsaid words ferment and swell inside; one day they will explode you. Key tension: If you finally speak up — is the other person still listening? | Lacks ($): Expression — you are full of words inside, but no one has ever heard them.",
        reference: "李安《饮食男女》中父女之间积压三十年的沉默；《钢琴课》中用钢琴替代语言的哑女。",
        referenceEn: "The thirty years of accumulated silence between father and daughters in Ang Lee's Eat Drink Man Woman; the mute woman replacing words with piano in The Piano.",
        topology: "语言在到达对方之前就碎了 → 沉默太久之后忘了怎么说 → 没有说出口的话在体内发酵膨胀总有一天会炸掉",
        directive: {
            bright: "他选择了沉默。写那种沉默的尊严——在说什么都会被扭曲的环境里，不说是最后的抵抗。他的嘴是关着的，但他的沉默本身就是一种声明。不要写成被压制，写一个用不说话来保存自己的人。他的安静不是空的，是满到溢出来的。",
            dark: "他已经忘了怎么说了。写他从表达瘫痪走到自我掩埋的过程——不是不想说，是语言已经退化了。他里面全是话，但出口的时候变成了碎片。那些没有说出口的话在他体内发酵、膨胀。他是一个沉默的炸弹，但他自己不知道引信在哪里。",
            tension: "他张了张嘴。没有声音出来。写他试图开口但失败的那个瞬间——让观众看见一个里面满到快要爆炸但出口被堵死的人。如果他终于开口了——对方还在听吗？他的语言还能传达他想表达的东西吗？不要让他说出来。把一切留在那个张嘴的动作里。"
        }
    },
    {
        id: "subj_empty_nest",
        name: "空巢者", nameEn: "The Empty Nester",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "曾经被孩子或伴侣填满的生活突然空了——房间还是那个房间，但里面的声音没了。",
        defEn: "A life once filled by children or a partner is suddenly empty — the room is the same room, but the voices inside are gone.",
        flaw: "空洞", flawEn: "Emptiness",
        core: "A面：空巢可以是迟来的自由——终于有了自己的时间，你可以做二十年来一直推迟的事。这是属于你自己的人生的重启。/ B面：但自由也可以是一种无声的崩塌——原来没有他们，你不知道自己是谁。你把一辈子都定义为'某人的父母'或'某人的爱人'，现在那个定义消失了。关键张力：你是趁空出的时间重新找到自己，还是每天给不回来的人留一盏灯？ | 缺失 ($): 被需要——你最怕的不是孤独，是发现自己已经不重要了。",
        coreEn: "A-side: An empty nest can be belated freedom — finally having your own time, you can do what's been postponed for twenty years. This is a restart of a life truly your own. / B-side: But freedom can also be a silent collapse — without them, you don't know who you are. You defined your whole life as 'someone's parent' or 'someone's lover'; now that definition is gone. Key tension: Do you use the empty time to find yourself, or leave a light on for those who won't return? | Lacks ($): Being needed — what you fear most isn't loneliness; it's discovering you no longer matter.",
        reference: "《东京物语》中被子女遗忘的老人；《天伦之旅》中逐一拜访疏远子女、发现自己已不被需要的老父亲。",
        referenceEn: "The elderly parents forgotten by their children in Tokyo Story; the old father visiting each estranged child and discovering he is no longer needed in Everybody's Fine.",
        topology: "曾经被填满的生活突然空了 → 房间还是那个房间但声音没了 → 你最怕的不是孤独是发现自己已经不重要了",
        directive: {
            bright: "他终于有了自己的时间。写他在空巢中找到的迟来的自由——二十年来一直推迟的事，现在可以做了。他从'某人的父母'或'某人的爱人'的角色里走出来，发现自己还有另一个形状。不要写成被遗弃，写一个在空出来的时间里重新遇见自己的人。",
            dark: "房间还是那个房间。但声音没了。写他在空了的空间里的那种失重——他不知道自己是谁了。他把一辈子都定义为'某人的'，现在那个'某人'走了，定义消失了，他也消失了。他每天留一盏灯，留给不会回来的人。让观众看见一种最安静的坍塌。",
            tension: "电话响了。是他们。只说了三句话就挂了。写他挂掉电话之后看着手机的样子——不是失望，是一种更轻的东西：他已经习惯了。让观众在那个'习惯了'里看见一整段关系的萎缩。他该打回去，还是等下一次？下一次是什么时候？"
        }
    },
    {
        id: "subj_crowd_lonely",
        name: "人群中的孤独者", nameEn: "The Lonely in a Crowd",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "身边有很多人，但没有任何一段关系是真实的——你是人群的中心，也是最偏远的孤岛。",
        defEn: "Surrounded by many, yet none of the connections are real — you are the center of the crowd, and also the most remote island.",
        flaw: "社交性孤独", flawEn: "Social Isolation",
        core: "A面：人群可以是完美的伪装——没有人会怀疑一个总是笑着的社交宠儿是孤独的。你的日程排满了，你的手机响不停。/ B面：但所有的热闹都是表演。散场之后你一个人坐在车里，你知道你消失一个月不会有人来找你。关键张力：如果你从所有社交中消失一个月——有几个人会真的来找你？ | 缺失 ($): 真实连接——你被包围着，但你是空心的。",
        coreEn: "A-side: The crowd can be a perfect disguise — no one suspects a social darling who always smiles of being lonely. Your schedule is packed; your phone never stops ringing. / B-side: But all the bustle is performance. After the party you sit alone in the car, knowing that if you vanished for a month, no one would come looking. Key tension: If you disappeared from all social life for a month — how many people would actually come looking? | Lacks ($): Genuine connection — you are surrounded, but you are hollow.",
        reference: "《迷失东京》中在异国豪华酒店里各自失眠的两个陌生人；《了不起的盖茨比》中宴会上满堂宾客却找不到一个知己的盖茨比。",
        referenceEn: "The two strangers each sleepless in a foreign luxury hotel in Lost in Translation; Gatsby surrounded by a full house of guests yet unable to find a single confidant in The Great Gatsby.",
        topology: "人群的中心与最偏远的孤岛重合 → 所有的热闹都是表演 → 消失一个月不会有人来找你",
        directive: {
            bright: "他的日程排满了。他的手机响不停。写他在人群中的那种表演性的从容——他是最会社交的人，他的笑让所有人觉得舒服。没有人会怀疑一个总是笑着的社交宠儿是孤独的。不要写成虚假，写一个在人群中找到了一种运转方式的人。那些笑是表演，但表演也需要才华。",
            dark: "散场了。他一个人坐在车里。写那个从喧嚣到沉默的切换——一秒之前他还在人群的中心，一秒之后他是最偏远的孤岛。他知道如果他消失一个月，不会有人真的来找他。他被包围着，但他是空心的。让观众从他上一秒的笑容和这一秒的安静之间感受到那个落差。",
            tension: "人群中有人问了他一个真诚的问题。他愣了一下。写那个愣——他太久没有被真正看见过了，他不知道该怎么回应真诚。他的嘴准备好了一个社交性的回答，但那个问题绕过了他的社交系统直接到达了更深的地方。让观众看见一个在人群中突然被看见时不知所措的人。"
        }
    },
    {
        id: "subj_rival_bound",
        name: "宿敌", nameEn: "The Rival-Bound",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "与某个人之间存在一种比爱更深的纽带——互相定义、互相消耗，你的形状是他刻出来的。",
        defEn: "Sharing a bond with someone deeper than love — mutual definition, mutual consumption; your shape was carved by them.",
        flaw: "共生仇恨", flawEn: "Symbiotic Hatred",
        core: "A面：宿敌的存在可以是你最强大的驱动力——打败他是你活着的理由。他让你变强，让你变锋利。没有他，你不会是现在这个你。/ B面：但最隐秘的真相是：你依赖他。没有他，你的人生就没有形状。你们之间不是仇恨——是一种比爱更深的共生。关键张力：如果宿敌突然死了——你是解脱，还是坍塌？ | 缺失 ($): 与对手的分离——你恨他，但没有他你更恨自己。",
        coreEn: "A-side: A nemesis can be your strongest drive — defeating them is your reason to live. They sharpen you, make you lethal. Without them, you wouldn't be who you are. / B-side: But the most hidden truth is: you depend on them. Without them, your life has no shape. What lies between you isn't hatred — it's a symbiosis deeper than love. Key tension: If the rival suddenly dies — is it relief, or collapse? | Lacks ($): Separation from the rival — you hate them, but without them you hate yourself more.",
        reference: "《蝙蝠侠》中蝙蝠侠与小丑的共生——一个不杀，一个不死；《火影忍者》中鸣人与佐助的宿命纽带。",
        referenceEn: "Batman and the Joker's symbiosis — one won't kill, the other won't die in Batman; the fated bond between Naruto and Sasuke in Naruto.",
        topology: "与某人之间存在比爱更深的纽带 → 互相定义互相消耗 → 宿敌死了之后你的人生就没有形状了",
        directive: {
            bright: "打败他是他活着的理由。写那种宿敌关系中的驱动力——对方让他更强、更锋利、更接近自己的极限。没有这个敌人，他不会是现在这个他。不要写成仇恨，写一种比爱更深的互相成就。他们是彼此的磨刀石，而磨刀石也是一种亲密。",
            dark: "他依赖他。写那个最隐秘的真相——没有宿敌，他的人生就没有形状。他们之间不是仇恨，是一种共生。他的每一个动作都是对对方的回应，他的每一个决定都是在和对方下棋。消灭了对方就是消灭了自己的坐标系。他恨他，但没有他他更恨自己。",
            tension: "宿敌倒下了。他站在那里。写他看着倒下的对方时的脸——不是胜利，不是释然，是一种正在坍塌的东西。让观众看见：他赢了，但赢意味着他最重要的对手不在了。从此以后他的拳头打在空气上。他是解脱了，还是坍塌了？两种可能同时为真。"
        }
    },
    {
        id: "subj_widowed",
        name: "遗孀/鳏夫", nameEn: "The Widowed",
        group: "D. 断裂的孤岛", groupEn: "The Disconnected",
        def: "另一半死了，但婚姻没有结束——你在一场只剩一个人的婚姻里继续活着。对面的椅子空了，但你每天还是摆两副碗筷。",
        defEn: "The other half died, but the marriage didn't end — you go on living in a marriage of one. The chair across from you is empty, but you still set two places every day.",
        flaw: "不完整的存在", flawEn: "Incomplete Being",
        core: "A面：丧偶之后你才知道你有多深——你的悲伤是你爱的证据，你的每一天都在安静地说：那个人真的存在过。/ B面：但你的半边床是冷的，你的笑话没有人接。你不是单身——你是残缺。关键张力：你会允许自己重新爱别人吗——还是觉得那是对死者的背叛？ | 缺失 ($): 完整——你不是一个人，你是半个人。那另一半被埋在了地下。",
        coreEn: "A-side: Only after losing your spouse do you learn how deep you go — your grief is proof of love; every day quietly says: that person truly existed. / B-side: But your half of the bed is cold; no one catches your jokes. You're not single — you're incomplete. Key tension: Will you allow yourself to love again — or would that betray the dead? | Lacks ($): Wholeness — you're not one person; you're half. The other half is buried.",
        reference: "《飞屋环游记》卡尔在艾莉死后独自守着那栋承载了全部回忆的房子；《海边的曼彻斯特》李在妻子和孩子死后变成了一具行走的空壳。",
        referenceEn: "Carl guarding the house that holds all their memories after Ellie's death in Up; Lee becoming a walking shell after the death of his wife and children in Manchester by the Sea.",
        topology: "另一半死了但婚姻没有结束 → 你在一场只剩一个人的婚姻里继续活着 → 半边床是冷的笑话没有人接",
        directive: {
            bright: "他的悲伤是他爱的证据。写他在丧偶之后发现的那种深——他以为自己知道爱是什么，但直到失去之后才知道那个东西比他想象的大得多。他的每一天都在安静地说：那个人真的存在过。不要写成悲情，写一个在失去中丈量出了自己深度的人。",
            dark: "他的半边床是冷的。他的笑话没有人接。写他在只剩一个人的婚姻里继续活着的那种残缺——他不是单身，他是半个人。对面的椅子空了，但他每天还是摆两副碗筷。他的一半被埋在了地下，剩下的一半不知道怎么独自站立。",
            tension: "有人走进他的生活。新的人。写他面对新的温暖时的那种撕裂——接受意味着背叛死者，拒绝意味着活埋自己。他的心想向前走，他的忠诚在拉他回头。让观众看见一个站在活人和死人之间的人。他允不允许自己重新开始？不要替他做决定。"
        }
    }
];

