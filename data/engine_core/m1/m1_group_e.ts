import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_E: LibraryItemDef[] = [
    // ============================================================
    // GROUP E. 虚无的容器 (The Hollow) - 16 Items
    // 缺失方向：向意义 → 时间/存在。"这一切是为了什么？"
    // 不一定痛苦，可能只是安静的、日常的空。
    // ============================================================
    {
        id: "subj_nihilist",
        name: "虚无主义者", nameEn: "The Nihilist",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "看穿了世界的荒谬，拒绝赋予任何事物价值——你像一把被拔掉插头的灯，什么都照不亮了。",
        defEn: "Has seen through the absurdity of the world, refusing to assign value to anything — like a lamp unplugged, you illuminate nothing.",
        flaw: "无意义", flawEn: "Meaninglessness",
        core: "A面：虚无可以是最彻底的自由——既然没有意义，你就可以自己创造。所有的压力、义务、期望都变成了纸糊的墙，一推就倒。/ B面：但自由的代价是失重。当一切都不重要的时候，你的脚也站不住了。你吃饭、走路、呼吸——但你不知道为了什么。关键张力：如果什么都不重要——为什么你还活着？ | 缺失 ($): 意义——你什么都看穿了，但你没有找到看穿之后该怎么办。",
        coreEn: "A-side: Nihilism can be the most radical freedom — since nothing matters, you can create your own meaning. All pressure, duty, expectations become paper walls, collapsing at a push. / B-side: But freedom's price is weightlessness. When nothing matters, your feet can't hold ground either. You eat, walk, breathe — but you don't know what for. Key tension: If nothing matters — why are you still alive? | Lacks ($): Meaning — you've seen through everything, but you haven't figured out what to do after seeing through.",
        reference: "屠格涅夫《父与子》中对一切权威与信仰嗤之以鼻的巴扎罗夫；电影《超脱》中以抽离姿态面对系统性崩溃的男主亨利。",
        referenceEn: "Bazarov in Turgenev's Fathers and Sons, scoffing at all authority and faith; Henry in Detachment, facing systemic collapse with total detachment.",
        topology: "看穿了世界的荒谬 → 拒绝赋予任何事物价值 → 自由的代价是失重——脚也站不住了",
        directive: {
            bright: "他什么都看穿了。写他在虚无中找到的自由——既然没有意义，所有的压力、义务、期望都变成了纸糊的墙，一推就倒。他是最轻的人，因为他不再背负任何别人给的重量。不要写成厌世，写一个因为看穿了所有幻象而获得了彻底自由的人。",
            dark: "他什么都不重要。写他在失重中的下坠——他吃饭、走路、呼吸，但他不知道为了什么。所有东西都变成了等重的灰色。他的眼睛是睁着的，但什么都照不亮了。让观众感受到一种比绝望更深的东西：不是痛苦，是连痛苦都没有了。",
            tension: "有人问他'那你为什么还活着'。他停了一下。写那个停顿——不是没有答案，是这个问题比他愿意承认的更锋利。他看穿了一切，但他没有找到看穿之后该怎么办。让观众和他一起站在那个问题面前。如果什么都不重要——为什么他还在这里？"
        }
    },
    {
        id: "subj_melancholic",
        name: "忧郁者", nameEn: "The Melancholic",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "被一种无法命名的悲伤笼罩——不是因为失去了什么，而是从一开始就觉得少了点什么。",
        defEn: "Shrouded in an unnameable sorrow — not from losing something, but from always feeling that something was missing from the start.",
        flaw: "自我废弃", flawEn: "Self-Abjection",
        core: "A面：忧郁可以是一种深刻的敏感——你看见了别人看不见的阴影，你的眼睛比他们多了一层滤镜。这种敏感是痛苦的，但也是独特的。/ B面：但看得太多就是一种缓慢的沉没。你没有遭遇任何灾难，但你的世界一直在塌。你不知道自己缺的那个东西叫什么——你只知道它一直不在。关键张力：那种无法命名的空缺——是需要被治愈的疾病，还是你比别人多看到了一层真实？ | 缺失 ($): 存在的充实感——你一直在找一个词来形容自己的感受，但那个词不存在。",
        coreEn: "A-side: Melancholy can be a profound sensitivity — you see shadows others cannot; your eyes carry an extra filter. That sensitivity is painful, but also unique. / B-side: But seeing too much is a slow sinking. No disaster struck, yet your world keeps collapsing. You don't know what the missing thing is called — you only know it was never there. Key tension: That unnameable void — is it a disease to cure, or a deeper layer of truth? | Lacks ($): Fullness of being — you've searched for a word to describe your feeling, but that word doesn't exist.",
        reference: "太宰治《人间失格》中失去做人资格的大庭叶藏；拉斯·冯·提尔《忧郁症》中心死如灰的贾斯汀。",
        referenceEn: "Oba Yozo who lost his qualification as a human in Dazai Osamu's No Longer Human; Justine, dead inside, in Lars von Trier's Melancholia.",
        topology: "一种无法命名的悲伤从一开始就在 → 不是因为失去了什么而是从来就少了点什么 → 你的感受没有对应的词汇",
        directive: {
            bright: "他看见了别人看不见的阴影。写他的忧郁作为一种特殊敏感的那种质地——他的眼睛多了一层滤镜，这层滤镜让世界变沉了，但也变深了。他比任何人都更接近某种本质性的东西。不要写成抑郁症叙事，写一个因为感知力过剩而活在不同重力下的人。",
            dark: "他没有遭遇任何灾难。但他的世界一直在塌。写他和那种无法命名的空缺之间的关系——它一直在那里，从他记事起就在。他不知道它叫什么，他只知道别人好像没有这个东西。他不是伤心，他是从一开始就少了一块。让观众感受到一种没有事件的悲伤。",
            tension: "有人说'你看起来不开心'。他说'我没事'。写他的'没事'——它是真的，也是假的。他不是不开心，是他的基准线比别人低一格。让观众在他平静的表情里看见一种更深的东西：那种空缺是需要被治愈的疾病，还是他比别人多看到了一层真实？"
        }
    },
    {
        id: "subj_cynic",
        name: "犬儒", nameEn: "The Cynic",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "看穿了一切虚伪，只相信利益——嘲笑一切就不用冒险相信什么了。",
        defEn: "Seeing through all hypocrisy, believing only in interest — mocking everything so you never risk believing in anything.",
        flaw: "冷漠", flawEn: "Callousness",
        core: "A面：犬儒可以是一种来之不易的智慧——你经历过理想主义的幻灭，你知道所有高尚旗帜的背面写着什么。你不再容易受骗，这是一种保护。/ B面：但嘲笑一切也意味着你不再能被任何东西打动。你的铠甲太厚了，连真正的温暖也穿不进来。关键张力：如果犬儒遇到了一个真正无私的人——他会被打动，还是更加恐惧？ | 缺失 ($): 希望——你什么都不信，但你偶尔会羡慕那些还信着的人。",
        coreEn: "A-side: Cynicism can be hard-won wisdom — you've lived through the disillusionment of idealism; you know what's written on the back of every noble banner. You're no longer easily deceived; it's a kind of protection. / B-side: But mocking everything also means you can no longer be moved by anything. Your armor is too thick; even genuine warmth can't get through. Key tension: If the cynic meets someone truly selfless — moved, or more afraid? | Lacks ($): Hope — you believe in nothing, but sometimes you envy those who still do.",
        reference: "动画《瑞克和莫蒂》中洞见破灭极度厌世的瑞克外公；《纸牌屋》里将民主与道德全盘视为筹码的弗兰克。",
        referenceEn: "Rick Sanchez, deeply misanthropic and disillusioned in Rick and Morty; Frank Underwood seeing democracy and morals as mere chips in House of Cards.",
        topology: "经历过理想主义的幻灭 → 嘲笑一切让你不再容易受骗 → 铠甲太厚了连真正的温暖也穿不进来",
        directive: {
            bright: "他不再容易受骗了。写他的犬儒作为一种来之不易的智慧——他经历过理想主义的幻灭，他知道所有高尚旗帜的背面写着什么。他的冷是一种保护，是烧伤之后长出来的新皮肤。不要写成反社会，写一个因为见过太多真相而变得锋利的人。",
            dark: "他嘲笑一切。但嘲笑一切也意味着他不再能被任何东西打动了。写他的铠甲——太厚了，连真正的温暖也穿不进来。他偶尔看见那些还在相信什么的人，他的嘴角是嘲讽的，但他的眼睛里有一种非常快闪过的东西。让观众在那个闪过的瞬间里看见一个羡慕信仰的人。",
            tension: "有人在他面前做了一件真正无私的事。写他看着那件事发生时的表情——他的嘴准备好了嘲讽，但嘲讽没有说出来。他被打动了吗？还是他在找那个人的动机？让观众看见一个犬儒者面对真正的善意时的短路：相信意味着脆弱，而他已经不记得脆弱是什么了。"
        }
    },
    {
        id: "subj_stoic",
        name: "斯多葛", nameEn: "The Stoic",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "主动压抑所有情感，像石头一样承受一切——你的不动声色让所有人安心，只有你知道里面发生了什么。",
        defEn: "Actively repressing all emotions, enduring everything like a stone — your composure reassures everyone; only you know what's happening inside.",
        flaw: "压抑", flawEn: "Repression",
        core: "A面：不痛可以是强大的证明——你是暴风雨中唯一不倒的树。你的冷静是别人的锚，你的肩膀是别人的地面。/ B面：但不动声色可能不是因为你强大，而是因为你的感受力已经死了。冰盖下面不是岩浆——是真空。关键张力：你的不动声色——是钢铁意志，还是内心已经结冰？如果冰融化了，下面是什么？ | 缺失 ($): 情感——你的眼睛是干的，但不一定是因为你坚强。",
        coreEn: "A-side: Not hurting can be proof of strength — you are the only tree standing in the storm. Your calm is others' anchor; your shoulders are others' ground. / B-side: But composure might not be strength — it might be that your capacity to feel has died. Beneath the ice cap is not magma — it's vacuum. Key tension: Your composure — iron will, or a frozen interior? If the ice melts, what's beneath? | Lacks ($): Emotion — your eyes are dry, but not necessarily because you're strong.",
        reference: "雷德利·斯科特《角斗士》里坚如磐石的罗马旧将马西姆斯；《银翼杀手2049》里冷漠执行清理任务的K。",
        referenceEn: "The rock-solid former Roman general Maximus in Ridley Scott's Gladiator; K apathetically executing 'retirement' missions in Blade Runner 2049.",
        topology: "主动压抑所有情感像石头一样承受 → 不动声色让所有人安心 → 冰盖下面可能不是岩浆而是真空",
        directive: {
            bright: "他是暴风雨中唯一不倒的树。写他的冷静作为所有人的锚——他的不动声色让周围的人安心，他的肩膀是别人的地面。他的忍耐不是压抑，是一种真正的力量。不要写成麻木，写一个在承受中展现出钢铁意志的人。他的不痛是强大的证明。",
            dark: "他的感受力死了。写他的不动声色背后的那片真空——不是他选择不痛，是他已经痛不了了。冰盖下面不是岩浆，是什么都没有。他的眼睛是干的，但不是因为他坚强。让观众从他完美的冷静中读出一种比崩溃更深的东西：他已经不在里面了。",
            tension: "有人在他面前哭了。他没有动。写他看着对方流泪时的那种静——让观众分不清他是在用最大的克制承受着，还是他真的什么都感觉不到了。如果冰融化了，下面是什么？也许是眼泪。也许什么都没有。不要替他检查。"
        }
    },
    {
        id: "subj_dreamer",
        name: "做梦者", nameEn: "The Dreamer",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "活在幻想里，用梦境替代了现实——你醒着的时候反而是不在场的。",
        defEn: "Living in fantasy, replacing reality with dreams — you are more absent when awake.",
        flaw: "逃避", flawEn: "Escapism",
        core: "A面：做梦可以是创造力的源泉——所有艺术都始于白日梦。你的内在世界比外面的世界更丰饶、更美、更有逻辑。/ B面：但梦境太甜就会成为牢笼。你在里面越来越舒服，外面的世界越来越模糊——有一天你分不清哪个是梦、哪个是现实了。关键张力：如果梦比现实更好——醒来是清醒，还是堕落？ | 缺失 ($): 现实——你拥有全部的天空，但你脚下没有地面。",
        coreEn: "A-side: Dreaming can be the wellspring of creativity — all art begins with daydreams. Your inner world is richer, more beautiful, more logical than the one outside. / B-side: But a dream too sweet becomes a prison. The longer you stay, the hazier the outside world gets — until one day you can't tell which is the dream and which is real. Key tension: If the dream is better than reality — is waking up sobriety, or a fall? | Lacks ($): Reality — you own the entire sky, but there's no ground beneath your feet.",
        reference: "《盗梦空间》中迷恋造梦空间的乌托邦的科布之妻；《穆赫兰道》里用梦境替代残酷好莱坞现实的戴安。",
        referenceEn: "Cobb's wife addicted to the dream utopia in Inception; Diane replacing harsh Hollywood reality with dreams in Mulholland Drive.",
        topology: "用梦境替代了现实 → 内在世界比外面更丰饶 → 梦境太甜变成牢笼之后分不清哪个是梦哪个是现实",
        directive: {
            bright: "他的内在世界比外面的世界更美。写他的幻想作为创造力源泉的那种丰饶——所有艺术都始于白日梦，他的梦比别人的现实更有逻辑、更有色彩、更有温度。不要写成逃避，写一个在内在世界中建造了一座真正的城市的人。他的梦是他最真实的作品。",
            dark: "他越来越少回到现实了。写他在梦境中的沉溺——梦太甜了，外面的世界越来越模糊、越来越不可忍受。他的身体在这里，他的人不在。有一天他分不清哪个是梦、哪个是现实了。让观众感受到一种最安静的失踪：他还在呼吸，但他已经不在场了。",
            tension: "有人叫他的名字。他从梦里抬起头。写他在两个世界切换时的那种眩晕——他的眼睛需要几秒钟来对焦。让观众在那几秒里看见一个不确定自己在哪里的人。醒来是清醒，还是堕落？他的脚到底该站在哪个世界的地面上？"
        }
    },
    {
        id: "subj_observer",
        name: "观察者", nameEn: "The Observer",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "记录世界，但不介入——永远站在生活的岸边看着河流过，你的鞋从来没有湿过。",
        defEn: "Recording the world but never intervening — forever standing on the bank watching the river flow; your shoes have never gotten wet.",
        flaw: "抽离", flawEn: "Detachment",
        core: "A面：旁观可以是一种保护——不入戏就不会受伤。你拥有一种罕见的视角，看得比任何当局者都清楚。/ B面：但看了一辈子别人的人生——自己的呢？你是最好的观众，最细致的记录者，但你的故事从来没有开始过。关键张力：如果有一天你想从观众席走上舞台——还来得及吗？ | 缺失 ($): 参与——你看得见所有人的人生，唯独没有活过自己的。",
        coreEn: "A-side: Watching from the side can be protection — staying out of the drama means never getting hurt. You hold a rare perspective, seeing more clearly than any player. / B-side: But after watching others' lives all your life — what about your own? You're the best audience, the most meticulous recorder, but your own story never started. Key tension: If one day you want to step from the audience onto the stage — is it too late? | Lacks ($): Participation — you can see everyone else's life, except you've never lived your own.",
        reference: "维姆·文德斯《柏林苍穹下》只能倾听人类心声却无法介入的隐形天使；《了不起的盖茨比》里的尼克。",
        referenceEn: "The invisible angels who only listen and cannot intervene in Wim Wenders' Wings of Desire; Nick in The Great Gatsby.",
        topology: "永远站在生活的岸边看着河流过 → 拥有比任何当局者都清楚的视角 → 但自己的故事从来没有开始过",
        directive: {
            bright: "他看得比任何人都清楚。写他作为旁观者的那种罕见视角——不入戏就不会受伤，不投入就能看见全貌。他是最好的观众，最细致的记录者。他的眼睛比任何当事人的都冷静。不要写成冷漠，写一个在观看中获得了一种特殊智慧的人。",
            dark: "但他自己的故事从来没有开始过。写他看了一辈子别人的人生的那种空——他知道别人的秘密，但他没有自己的秘密。他的鞋从来没有湿过。他是最安全的人，也是最贫瘠的人。让观众从他清澈的目光里读出一种最深的匮乏：看得见一切，但活过的为零。",
            tension: "有人向他伸出手说'跟我来'。他犹豫了。写那个犹豫——从观众席走上舞台，需要放弃他唯一擅长的事。他的安全在看，他的危险在做。让观众看见一个站在岸边和河水之间的人。他到底是保持旁观的清醒，还是冒一次险下水？还来得及吗？"
        }
    },
    {
        id: "subj_waiter",
        name: "等待者", nameEn: "The Waiter",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "耗尽一生等待一个也许不会来的东西——救赎、回信、那个人、或者一个信号。",
        defEn: "Exhausting one's whole life waiting for something that may never come — salvation, a reply, that person, or a sign.",
        flaw: "停滞", flawEn: "Stasis",
        core: "A面：等待可以是一种信仰的坚守——'他会来的'。在一个所有人都在奔跑的世界里，你选择了站在原地。这种静止里有一种顽固的尊严。/ B面：但等待也可以是行动力的自我阉割——只要你还在等，你就不用面对'它可能永远不会来'的真相。等待变成了一种逃避决定的方式。关键张力：如果你等的东西今天就来了——你真的准备好了吗？ | 缺失 ($): 行动——你的一生是度过的，还是等过的？",
        coreEn: "A-side: Waiting can be a faithful devotion — 'they will come.' In a world where everyone is running, you chose to stand still. That stillness holds a stubborn dignity. / B-side: But waiting can also be a self-castration of agency — as long as you're still waiting, you don't have to face the truth that it may never come. Waiting becomes a way to avoid deciding. Key tension: If what you're waiting for arrived today — are you truly ready? | Lacks ($): Action — was your life lived, or waited through?",
        reference: "贝克特《等待戈多》中在萧瑟乡间永远驻足的弗拉季米尔与爱斯特拉冈；《忠犬八公》里死守约定的八公。",
        referenceEn: "Vladimir and Estragon waiting forever in the bleak countryside in Beckett's Waiting for Godot; Hachiko holding fast to the final promise in Hachi: A Dog's Tale.",
        topology: "耗尽一生等一个也许不会来的东西 → 等待可以是信仰的坚守也可以是行动力的自我阉割 → 只要你还在等你就不用面对'它可能永远不会来'",
        directive: {
            bright: "他在所有人都在跑的时候选择了站着。写他的等待作为一种信仰的坚守——'他会来的'。这种静止里有一种顽固的尊严。他不是没有能力走，他是选择了不走。不要写成被动，写一个在等待中展现出一种比行动更深的坚持的人。",
            dark: "他等了太久了。写他在等待中的那种缓慢的石化——他已经不知道自己在等什么了，但他停不下来。等待本身变成了他的活法。只要他还在等，他就不用面对'它可能永远不会来'的真相。让观众看见一种最隐蔽的逃避：用等待来替代行动，用希望来替代选择。",
            tension: "他等的东西来了。写他在那个东西真正出现的瞬间的反应——不是狂喜。是一种茫然。他等了太久，他已经忘了等到之后该做什么了。让观众在他的茫然中看见一个更深的问题：他到底是想要那个东西，还是想要等待本身？"
        }
    },
    {
        id: "subj_prophet",
        name: "先知", nameEn: "The Prophet",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "看见了别人看不见的真相或未来，但无人相信——你的嘴里说的每一句话都对，但这帮不了你。",
        defEn: "Seeing a truth or future invisible to others, but believed by no one — every word you say is correct, but it won't save you.",
        flaw: "被误解", flawEn: "Misunderstood",
        core: "A面：预见可以是使命——你被选中来传递警告。你的视野是一种天赋，你的痛苦是这种天赋的代价。/ B面：但看得见终点却无法改变方向，是最孤独的诅咒。你喊破了嗓子，没有人抬头。灾难来了的时候他们才想起你说的话——但那时已经太晚了。关键张力：如果没有人听——你是继续呐喊，还是安静地看着预言成真？ | 缺失 ($): 听众——你最准确的预言，也是最无用的。",
        coreEn: "A-side: Prophecy can be a mission — you were chosen to deliver a warning. Your vision is a gift; your pain is its price. / B-side: But seeing the end yet unable to change course is the loneliest curse. You scream until your voice breaks; no one looks up. When disaster comes they remember your words — but by then it's too late. Key tension: If no one listens — do you keep screaming, or quietly watch the prophecy come true? | Lacks ($): Audience — your most accurate prophecy is also the most useless.",
        reference: "希腊神话中洞悉危局却无人相信的卡珊德拉；《沙丘》里饮下生命之水看穿时间的保罗。",
        referenceEn: "Cassandra in Greek mythology foreseeing perilous downfalls with no one believing her; Paul Atreides drinking the Water of Life and seeing through time in Dune.",
        topology: "看见了别人看不见的真相或未来 → 喊破了嗓子没有人抬头 → 最准确的预言也是最无用的",
        directive: {
            bright: "他被选中来传递警告。写他的视野作为天赋的那种沉重的荣耀——他看见了别人看不见的东西，这种能力让他比所有人都走得更前面。他的痛苦是天赋的代价。不要写成悲剧英雄，写一个站在时间前面的人。他看到的是真的，这一点他从来没有怀疑过。",
            dark: "没有人听。他喊破了嗓子。写他在无人相信中的那种消耗——看得见终点却无法改变方向是最孤独的诅咒。灾难来了的时候他们才想起他说过的话，但那时已经太晚了。让观众感受到一种比不被相信更深的绝望：你的预言越准确，你就越无用。",
            tension: "灾难还没来。但他知道它会来。写他站在平静的人群中间时的那种独自的紧迫感——所有人都在笑，只有他听见了远处的声音。他该继续喊，还是安静地看着预言成真？让观众和他一起承受那种知道但无法改变的重量。"
        }
    },
    {
        id: "subj_martyr",
        name: "殉道者", nameEn: "The Martyr",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "渴望通过自我牺牲来证明存在的价值——只有你的死亡才能让你的活着变得有意义。",
        defEn: "Craving to prove the value of existence through self-sacrifice — only your death can make your living meaningful.",
        flaw: "牺牲情结", flawEn: "Sacrifice Complex",
        core: "A面：殉道可以是最崇高的信仰表达——你的死将唤醒他们。你相信你的血不会白流，你的痛苦是火种。/ B面：但殉道也可以是最隐蔽的自毁——你活着找不到理由，但死可以。你的牺牲不是为了信仰，是因为你不知道活着该干什么。关键张力：如果你的牺牲没有人看见——你还愿意吗？ | 缺失 ($): 存在的价值——你需要死一次，才能证明自己活过。",
        coreEn: "A-side: Martyrdom can be the most sublime expression of faith — your death will awaken them. You believe your blood won't be shed in vain; your pain is the spark. / B-side: But martyrdom can also be the most covert self-destruction — you can't find a reason to live, but you can find a reason to die. Your sacrifice isn't for belief; it's because you don't know what to do alive. Key tension: If no one sees your sacrifice — would you still do it? | Lacks ($): Worth — you need to die once to prove you ever lived.",
        reference: "《勇敢的心》中死前受尽折磨依然高呼自由的华莱士；《受难记》里的耶稣。",
        referenceEn: "William Wallace enduring torture before death yet shouting 'Freedom' in Braveheart; Jesus in The Passion of the Christ.",
        topology: "渴望通过自我牺牲来证明存在的价值 → 只有死亡才能让活着变得有意义 → 牺牲可能不是为了信仰而是因为活着找不到理由",
        directive: {
            bright: "他的死将唤醒他们。写他走向牺牲时的那种笃定——他相信他的血不会白流，他的痛苦是火种。他的生命是一颗子弹，只有射出去才有意义。不要写成自毁，写一个在死亡中找到了比活着更大的目的的人。他的牺牲是一种信仰的最高表达。",
            dark: "他活着找不到理由。但死可以。写他的殉道作为最隐蔽的自毁——他的牺牲不是为了信仰，是因为他不知道活着该干什么。死亡给了他一个他活着时从来没有的东西：意义。让观众在他崇高的姿态里看见一种更深的空：他需要死一次，才能证明自己活过。",
            tension: "有人问他'如果没有人看见呢？你还愿意吗？'写他听到这个问题之后的沉默——这是整个殉道叙事中最致命的问题。他的牺牲需不需要观众？如果不需要，它就是信仰。如果需要，它就是表演。让观众和他一起检查那份牺牲的纯度。"
        }
    },
    {
        id: "subj_solipsist",
        name: "唯我论者", nameEn: "The Solipsist",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "怀疑只有自己是真实的——世界和他人都可能是幻象，你是唯一的实体。",
        defEn: "Suspecting only the self is real — the world and others may be illusions; you are the only substance.",
        flaw: "孤独", flawEn: "Loneliness",
        core: "A面：如果一切都是幻象，那就没有什么能真正伤到你——你拥有一种近乎神的免疫力。你是这个世界上唯一真实的人。/ B面：但也没有什么能真正抵达你。你的快乐是独角戏，你的痛苦也是。你是最安全的，也是最孤独的。关键张力：你愿意承认世界是真的吗？承认了——就要承担痛苦。 | 缺失 ($): 真实世界——你拥有自己，但除了自己你什么都没有。",
        coreEn: "A-side: If everything is an illusion, nothing can truly hurt you — you possess a near-divine immunity. You are the only real person in this world. / B-side: But nothing can truly reach you either. Your joy is a solo play; so is your pain. You are the safest, and the loneliest. Key tension: Are you willing to admit the world is real? Admitting it — means accepting pain. | Lacks ($): Real world — you have yourself, but beyond yourself you have nothing.",
        reference: "《新世纪福音战士》中试图将全人类退回橘子汁的碇真嗣；《矩阵》中那些拒绝认知外界的沉睡者。",
        referenceEn: "Shinji Ikari attempting to revert all humanity into LCL in Neon Genesis Evangelion; the sleepers in The Matrix who refuse to acknowledge the outside world.",
        topology: "怀疑只有自己是真实的 → 拥有近乎神的免疫力但也没有什么能真正抵达你 → 承认世界是真的就要承担痛苦",
        directive: {
            bright: "如果一切都是幻象，那就没有什么能真正伤到他。写他在唯我中找到的那种近乎神的免疫力——他是这个世界上唯一真实的人，所有的威胁都是虚构的，所有的压力都是投影。不要写成疯狂，写一个在最极端的怀疑中找到了一种绝对安全的人。",
            dark: "但也没有什么能真正抵达他。写他的快乐和痛苦都是独角戏的那种孤独——他是最安全的，也是最空的。他的拥抱穿过了对方的身体，因为他不确定对方是真的。他的整个世界只有他一个人的呼吸声。让观众感受到一种最彻底的隔绝。",
            tension: "有人碰了他的手。写他感受到那个触碰时的反应——他的理论说这不是真的，但他的皮肤说这是真的。让观众看见一个在信念和感觉之间撕裂的人。承认世界是真的意味着承认痛苦也是真的。他愿不愿意付这个代价？"
        }
    },
    {
        id: "subj_insomniac",
        name: "失眠者", nameEn: "The Insomniac",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "无法入睡——在永恒清醒中，现实与幻觉的边界溶解了。你不知道是你在拒绝睡眠，还是睡眠在拒绝你。",
        defEn: "Unable to sleep — in eternal wakefulness, the border between reality and hallucination dissolves. You don't know if you refuse sleep, or sleep refuses you.",
        flaw: "清醒过载", flawEn: "Waking Overload",
        core: "A面：失眠可以制造天才——夜里最清醒的时刻也是思维最锋利的时刻。你在别人都闭上眼的时候独自面对世界的真面目。/ B面：但清醒太久就会成为一种折磨。你的大脑不会关机，你的眼睛不愿闭上——你不知道是恐惧还是上瘾。关键张力：你不睡觉，是因为不敢闭眼——还是因为清醒本身成了一种上瘾？ | 缺失 ($): 休整——你的意识永远亮着，但你的灵魂在黑暗里喘不过气。",
        coreEn: "A-side: Insomnia can create genius — the night's clearest hours are also the sharpest for thought. While everyone sleeps, you alone face the world's true face. / B-side: But too long awake becomes torture. Your brain won't shut down; your eyes won't close — you don't know if it's fear or addiction. Key tension: Do you stay awake because you're afraid to close your eyes — or because wakefulness itself has become an addiction? | Lacks ($): Rest — your consciousness is always on, but your soul is gasping in the dark.",
        reference: "《搏击俱乐部》早期彻底麻木、终夜无眠的杰克；《机械师》里一年多没睡濒临解体的男主。",
        referenceEn: "The totally numb, perpetually sleepless Jack in early Fight Club; the protagonist on the verge of breakdown after a year without sleep in The Machinist.",
        topology: "无法入睡 → 永恒清醒中现实与幻觉的边界溶解 → 不知道是在拒绝睡眠还是睡眠在拒绝你",
        directive: {
            bright: "夜里最清醒的时刻也是思维最锋利的时刻。写他在失眠中找到的那种尖锐——当所有人都闭上眼的时候，他独自面对世界的真面目。他的失眠是一种不自觉的诚实：他的大脑拒绝放过任何一个问题。不要写成疾病，写一个在永恒清醒中触碰到了某种别人到不了的东西的人。",
            dark: "他的大脑不会关机。写他的清醒作为折磨的那种质地——他的眼睛不愿闭上，不是因为选择，是因为某种比意志更深的东西在阻止他。现实和幻觉的边界在第三天开始溶解。他看见了不存在的东西，但他不确定它们是不是不存在。让观众和他一起失去分辨的能力。",
            tension: "天亮了。又一个没有睡的夜晚。写他看着窗外变亮的那种感觉——不是松了一口气，也不是绝望，是一种更钝的东西：又一天。他不睡觉，是因为不敢闭眼——还是因为清醒本身成了一种上瘾？让观众在他睁着的眼睛里找不到答案。"
        }
    },
    {
        id: "subj_ghost_self",
        name: "空壳感", nameEn: "The Hollow Shell",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "虽然活着，但内心感觉自己已经死了——只是躯壳在惯性地运转，里面住的那个人早就走了。",
        defEn: "Alive, yet internally feeling already dead — just a shell running on inertia; the person who once lived inside left long ago.",
        flaw: "虚死", flawEn: "Pseudo-Death",
        core: "A面：感觉自己已经死了可以是一种奇异的平静——最坏的事已经发生了，还有什么好怕的？你拥有一种已经到过最低点的人才有的冷静。/ B面：但平静和麻木只隔一层纸。你不哭、不笑、不痛——你还在呼吸，但你不确定这算不算活着。关键张力：如果有什么东西能让你重新'感觉到活着'——你敢接受那种痛觉的回归吗？ | 缺失 ($): 活着的感觉——你的心脏在跳，但你听不见。",
        coreEn: "A-side: Feeling already dead can be a strange calm — the worst has already happened, what's left to fear? You possess a composure only someone who's hit rock bottom can hold. / B-side: But calm and numbness are separated by a single layer of paper. You don't cry, don't laugh, don't hurt — you're still breathing, but you're not sure that counts as living. Key tension: If something could make you 'feel alive' again — do you dare accept the return of pain? | Lacks ($): Aliveness — your heart is beating, but you can't hear it.",
        reference: "《活着》后期亲人死绝后仅剩肉体本能的福贵；《搏击俱乐部》早期对现实完全失去痛觉的杰克。",
        referenceEn: "Fugui in To Live, left with nothing but bodily instinct after losing all family; Jack in early Fight Club, who has lost all physical sensation in reality.",
        topology: "虽然活着但内心感觉自己已经死了 → 躯壳在惯性运转里面的人早就走了 → 重新感觉到活着需要接受痛觉的回归",
        directive: {
            bright: "最坏的事已经发生了。写他在'已经死过'之后获得的那种奇异的平静——还有什么好怕的？他拥有一种到过最低点的人才有的冷静。他的心跳很稳，不是因为勇敢，是因为恐惧的额度已经用完了。不要写成行尸走肉，写一个在底部找到了某种反向安全的人。",
            dark: "他还在呼吸。但他不确定这算不算活着。写他的麻木——他不哭、不笑、不痛。他的身体在执行日常的动作，但里面住的那个人早就走了。心脏在跳，但他听不见。让观众从他完整的外壳里看见一种最深的空洞：他在，但他不在。",
            tension: "有什么东西触动了他。一个味道、一段旋律、或者一张脸。他的眼睛里闪过了什么。写那个闪——很快就灭了。但它出现过。让观众看见一个'已经死了'的人身上还有一根没有断的线。他敢不敢拉那根线？拉了之后痛觉会回来。他愿意吗？"
        }
    },
    {
        id: "subj_midlife",
        name: "中年危机者", nameEn: "The Midlife Crisis",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "人生走到一半，突然发现不知道下半场该怎么过——剧本写到这里就断了。",
        defEn: "Halfway through life, suddenly realizing there's no script for the second half — the screenplay cuts off right here.",
        flaw: "方向丧失", flawEn: "Lost Direction",
        core: "A面：中年危机可以是觉醒的契机——终于可以问自己真正想要什么了。你不再需要向任何人证明什么，你第一次有了拒绝的自由。/ B面：但觉醒的另一面是崩溃——'我浪费了前半生'。你回头看，发现你一直在走别人安排的路。你的房子、车子、头衔——没有一样是你选的。关键张力：你是回去修补旧生活，还是彻底重来？ | 缺失 ($): 方向感——你一直在前进，但你不知道是往哪里。",
        coreEn: "A-side: A midlife crisis can be an awakening — finally able to ask what you truly want. You no longer need to prove anything to anyone; for the first time you have the freedom to refuse. / B-side: But the flip side of awakening is breakdown — 'I wasted the first half.' Looking back, you realize you walked a path arranged by others. Your house, car, title — none of them were your choice. Key tension: Do you go back and mend the old life, or start over entirely? | Lacks ($): Direction — you've been moving forward, but you don't know toward what.",
        reference: "《美国丽人》中对郊区生活彻底厌倦的莱斯特；《革命之路》中困在中产梦里窒息的惠勒夫妇。",
        referenceEn: "Lester, completely fed up with suburban life in American Beauty; the Wheelers suffocating in the middle-class dream in Revolutionary Road.",
        topology: "人生走到一半发现剧本断了 → 觉醒的另一面是'我浪费了前半生' → 回头看发现你一直在走别人安排的路",
        directive: {
            bright: "他终于可以问自己真正想要什么了。写他在中年裂缝中找到的那种觉醒——他不再需要向任何人证明什么。他第一次有了拒绝的自由，第一次可以对'应该'这个词说不。不要写成崩溃，写一个在人生中途突然醒过来的人。醒来是痛苦的，但也是第一次真正的清醒。",
            dark: "他回头看了一眼。发现他一直在走别人安排的路。写他在觉醒中崩溃的那种感觉——'我浪费了前半生'。他的房子、车子、头衔——没有一样是他选的。他在别人的人生规划里活了一辈子，现在他醒了，但前半程已经不可退款了。让观众感受到一种比失败更深的空：成功了，但成功的不是自己的人生。",
            tension: "他站在两条路中间。一条是回去修补旧生活，一条是彻底重来。写他在这个路口的停顿——不是犹豫，是他第一次认真面对'我到底想要什么'这个问题。这个问题他从来没有回答过。让观众看见一个在人生中途第一次面对自己的人。他会往哪里走？"
        }
    },
    {
        id: "subj_regret",
        name: "遗憾者", nameEn: "The Regretful",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "心中有一条从未走过的路、一个从未实现的梦、或一句从未说出的话——那个分岔路口的影子每天都在追你。",
        defEn: "Carrying an untaken path, an unrealized dream, or an unspoken word — the shadow of that fork in the road chases you every day.",
        flaw: "如果当初", flawEn: "What-If",
        core: "A面：遗憾可以是最温柔的痛——至少你曾经渴望过。在一个什么都不在乎的世界里，你在乎了，这本身就有价值。/ B面：但遗憾也可以是最残忍的刑罚——每天醒来都被那个分岔路口的影子追赶。你不知道另一条路上是什么，但你确定比这条好。关键张力：如果给你一次重来的机会——你真的会做不同的选择吗？ | 缺失 ($): 另一种可能——你的人生是一个永远删不掉的草稿。",
        coreEn: "A-side: Regret can be the gentlest pain — at least you once longed for something. In a world that doesn't care, you cared; that itself has value. / B-side: But regret can be the cruelest punishment — waking every day chased by the shadow of that fork in the road. You don't know what's on the other path, but you're sure it's better than this one. Key tension: If given a chance to do it over — would you truly choose differently? | Lacks ($): The other possibility — your life is a draft you can never delete.",
        reference: "《大鱼》中用幻想替代遗憾的父亲；《本杰明·巴顿奇事》中在时间逆流中与所爱之人不断错过的本杰明。",
        referenceEn: "The father replacing regret with fantasy in Big Fish; Benjamin endlessly missing his beloved in the reverse flow of time in The Curious Case of Benjamin Button.",
        topology: "心中有一条从未走过的路 → 那个分岔路口的影子每天都在追你 → 你不知道另一条路上是什么但你确定比这条好",
        directive: {
            bright: "他在乎过。在一个什么都不在乎的世界里，他在乎了。写他的遗憾作为一种温柔的痛——至少他曾经渴望过。那条没有走的路上可能没有更好的风景，但那份渴望本身就有价值。不要写成后悔，写一个因为在乎而留下了印记的人。他的遗憾是他活过的证据。",
            dark: "每天醒来他都被那个分岔路口的影子追赶。写他在遗憾中的消耗——他不知道另一条路上是什么，但他确定比这条好。这种确定是一种最残忍的幻想，因为它永远不可验证。他的人生是一个永远删不掉的草稿。让观众感受到'如果当初'这四个字的重量。",
            tension: "有人说'如果重来一次呢'。写他听到这句话时的表情——不是期待，是一种更深的犹疑。他真的会做不同的选择吗？还是他只是需要一个'如果'来让此刻的不满变得可以忍受？让观众和他一起面对这个最诚实的问题：遗憾的到底是那条路，还是走路的那个人？"
        }
    },
    {
        id: "subj_burnout",
        name: "倦怠者", nameEn: "The Burned Out",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "曾经充满热情，但燃料已经用完——不是不想做，是真的做不动了。你的油箱见底了。",
        defEn: "Once full of passion, but the fuel has run out — not unwilling, but genuinely unable to go on. Your tank is empty.",
        flaw: "枯竭", flawEn: "Depletion",
        core: "A面：倦怠可以是身体发出的最后警报——你需要停下来。这种疲惫是诚实的，它在告诉你之前的方向可能是错的。/ B面：但更可怕的可能是：休息之后——热情没有回来。你发现自己根本就不喜欢那件事，或者更准确地说，你从来就不是为了自己在做。关键张力：休息之后——热情会回来吗？还是你发现自己根本就不喜欢那件事？ | 缺失 ($): 热情——你的火灭了，你不知道还有没有柴。",
        coreEn: "A-side: Burnout can be the body's final alarm — you need to stop. This exhaustion is honest; it's telling you the old direction may have been wrong. / B-side: But the more terrifying possibility: after resting — the passion doesn't return. You discover you never really loved that thing, or more precisely, you were never doing it for yourself. Key tension: After resting — will the passion return? Or will you discover you never loved it at all? | Lacks ($): Passion — your fire is out, and you don't know if there's any wood left.",
        reference: "《爆裂鼓手》中被极端训练逼到崩溃边缘的安德鲁；《灵魂急转弯》中对音乐失去感觉的乔。",
        referenceEn: "Andrew pushed to the edge of breakdown by extreme training in Whiplash; Joe losing his feeling for music in Soul.",
        topology: "曾经充满热情但燃料用完了 → 倦怠是身体发出的最后警报 → 休息之后热情可能不会回来因为你从来就不是为了自己在做",
        directive: {
            bright: "他需要停下来。写他的倦怠作为身体最后的诚实——那种疲惫在告诉他之前的方向可能是错的。停下来不是软弱，是一种终于听见自己声音的时刻。不要写成放弃，写一个在耗尽之后第一次有机会问自己'我到底想不想做这件事'的人。",
            dark: "他的火灭了。写他在枯竭中的那种特殊的空——不是不想做，是真的做不动了。他的油箱见底了，但脚还在踩油门。更可怕的发现是：休息之后热情没有回来。他从来就不喜欢那件事，或者更准确地说，他从来就不是为了自己在做。让观众看见一种比疲劳更深的东西：方向错了。",
            tension: "有人说'休息一下吧'。他的身体想停，他的脑子不让。写他在停和不停之间的拉锯——停下来意味着面对一个他害怕的问题：如果休息之后热情没有回来呢？如果他发现自己根本就不喜欢这件事呢？让观众看见一个用忙碌来逃避的人，他害怕的不是倦怠，是倦怠背后的答案。"
        }
    },
    {
        id: "subj_absurdist",
        name: "荒诞者", nameEn: "The Absurdist",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "认清了世界没有意义，但依然选择活下去——带着一种清醒的微笑，你推着那块石头。",
        defEn: "Having recognized the meaninglessness of the world, yet choosing to live on — with a lucid smile, you push that boulder.",
        flaw: "抗拒绝望的疲劳", flawEn: "Defiant Fatigue",
        core: "A面：荒诞者和虚无主义者看到了同样的深渊，但做出了相反的选择：既然没有意义——我就自己造一个。你的微笑是一种反抗。你知道石头会滚下来，你照推不误。/ B面：但这份'自造的意义'有一天也会让你疲惫。你在深渊面前笑了太久，嘴角开始抽搐。关键张力：这份'自造的意义'——是真正的勇气，还是又一层更精致的自欺？ | 缺失 ($): 被赋予的意义——你的意义是你自己造的，但有时候你会想：为什么只有我要自己造？",
        coreEn: "A-side: The absurdist and the nihilist see the same abyss, but make opposite choices: since there is no meaning — I'll create my own. Your smile is an act of defiance. You know the boulder will roll back down; you push it anyway. / B-side: But this 'self-made meaning' will exhaust you too one day. You've been smiling at the abyss too long; your lips begin to twitch. Key tension: Is this 'self-made meaning' genuine courage, or just another layer of more elegant self-deception? | Lacks ($): Given meaning — your meaning is self-made, but sometimes you wonder: why am I the only one who has to build it myself?",
        reference: "加缪《西西弗斯的神话》中反复推石上山的西西弗斯；《土拨鼠之日》中在无限循环中逐渐找到活法的菲尔。",
        referenceEn: "Sisyphus rolling his boulder up the hill again and again in Camus's The Myth of Sisyphus; Phil gradually finding a way to live within the infinite loop in Groundhog Day.",
        topology: "认清了世界没有意义但依然选择活下去 → 自造的意义是反抗也可能是更精致的自欺 → 在深渊面前笑了太久嘴角开始抽搐",
        directive: {
            bright: "他知道石头会滚下来。他照推不误。写他的微笑作为反抗的那种力量——他和虚无主义者看到了同样的深渊，但他做出了相反的选择。既然没有意义，他就自己造一个。不要写成盲目乐观，写一个在完全清醒的状态下选择了继续的人。他的微笑是带着牙齿的。",
            dark: "他在深渊面前笑了太久了。写他的笑开始僵的那种感觉——自造的意义有一天也会让你疲惫。他的嘴角开始抽搐。他推石头不是因为有意义，是因为停下来更可怕。让观众在他的坚持中看见一种最深的疲倦：反抗本身也有保质期。",
            tension: "石头又滚下来了。他站在山坡上看着它。写他在重新走下去之前的那个停顿——这次的停比以前长了一点。让观众在那个多出来的几秒里看见一个问题：这份自造的意义是真正的勇气，还是又一层更精致的自欺？他自己也不确定了。他还是走下去了。但这次的步子慢了。"
        }
    },
    {
        id: "subj_last_one",
        name: "最后一个人", nameEn: "The Last One Standing",
        group: "E. 虚无的容器", groupEn: "The Hollow",
        def: "所有人都已经不在了——死了、走了、或者忘了你——你是最后一个还记得的人。你是一整段历史唯一的墓碑。",
        defEn: "Everyone else is gone — dead, departed, or forgotten you — you are the last one who still remembers. You are the sole tombstone of an entire history.",
        flaw: "无法分享的记忆", flawEn: "Unshareable Memory",
        core: "A面：你是最后的证人——你的记忆是唯一的档案。只要你还活着，那些人就没有真正消失。/ B面：但没有人可以验证你的记忆了。你说的那些人、那些事，再也没有第二个人能点头说'是的，我也在场'。关键张力：当最后一个见证者也死了——那段历史是被保存了，还是从未发生过？ | 缺失 ($): 共鸣者——你记得一切，但你找不到一个人分享。",
        coreEn: "A-side: You are the last witness — your memory is the only archive. As long as you live, those people haven't truly vanished. / B-side: But no one can verify your memory anymore. No one else can nod and say 'yes, I was there too.' Key tension: When the last witness dies — was that history preserved, or did it never happen? | Lacks ($): Someone who resonates — you remember everything, but can't find one person to share it with.",
        reference: "《银翼杀手》罗伊临死前说'所有这些记忆都将消失，像雨中的泪水'——一个人造人的记忆比人类的更珍贵，因为没有备份；《百年孤独》马孔多毁灭的那一刻，最后一个布恩迪亚正在读着记载自己家族命运的手稿。",
        referenceEn: "Roy's final words 'All those moments will be lost in time, like tears in rain' — a replicant's memories more precious than a human's because there's no backup in Blade Runner; the last Buendía reading the manuscript of his family's fate the moment Macondo is destroyed in One Hundred Years of Solitude.",
        topology: "所有人都不在了你是最后一个还记得的人 → 你的记忆是唯一的档案 → 当你也死了那段历史就从未发生过",
        directive: {
            bright: "只要他还活着，那些人就没有真正消失。写他作为最后证人的那种使命感——他的记忆是唯一的档案。他的存在就是一座活的纪念碑。不要写成沉重，写一个在记忆中保存了一个世界的人。他的活着本身就是对遗忘的最后一道防线。",
            dark: "没有人可以验证他的记忆了。写他在最后的孤独中的那种特殊的空——他说的那些人、那些事，再也没有第二个人能点头说'是的，我也在场'。他的记忆可能是错的，但已经没有人能纠正他了。让观众感受到一种比死亡更深的消失：不是人死了，是整段历史失去了第二个证人。",
            tension: "他在讲一段过去的故事。对面坐着一个年轻人。写年轻人听的表情和他讲的表情之间的距离——一个在传递，一个在接收，但频率不完全对得上。让观众看见记忆在传递过程中的变形。当最后一个见证者也死了——那段历史是被保存了，还是从未发生过？"
        }
    }
];


