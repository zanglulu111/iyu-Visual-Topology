import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_F: LibraryItemDef[] = [
    // ============================================================
    // GROUP F. 享乐的祭品 (The Excessive) - 16 Items
    // 缺失方向：向驱力 → 享乐/成瘾/执念。"停不下来"
    // 不是缺少什么，而是被太多的欲望、快感或冲动淹没。
    // ============================================================
    {
        id: "subj_hedonist",
        name: "享乐者", nameEn: "The Hedonist",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "沉溺于感官刺激，用快感填满一切空隙——但快感的保质期越来越短，剂量越来越大，你在加速但其实是在下坠。",
        defEn: "Drowning in sensory stimulation, filling every gap with pleasure — but pleasure's expiration shortens, the dose grows, you accelerate but actually you're falling.",
        flaw: "成瘾", flawEn: "Addiction",
        core: "A面：享乐可以是对生命最热烈的拥抱——活在当下，你不亏欠任何人。你尝了别人一辈子不敢碰的东西，你去了别人只在书里读到的地方。/ B面：但快感的另一面是空洞。当音乐停下来、灯亮起来、所有人都走了，你独自坐在那里——那一秒的寂静比任何声音都响。关键张力：当快感停止的那一秒——你听见下面的空洞了吗？ | 缺失 ($): 满足——你什么都尝过了，但你从来没有饱过。",
        coreEn: "A-side: Hedonism can be the most passionate embrace of life — living in the moment, you owe no one. You've tasted what others never dare touch; you've gone where others only read about. / B-side: But the flip side of pleasure is the void. When the music stops, the lights come on, and everyone leaves, you sit there alone — that second of silence is louder than any sound. Key tension: The second pleasure stops — do you hear the void beneath? | Lacks ($): Satisfaction — you've tried everything, but you've never been full.",
        reference: "王尔德《道林·格雷的画像》中用青春换取无尽感官堕落的道林·格雷；《了不起的盖茨比》中日日狂欢却内心空洞的宾客群像。",
        referenceEn: "Dorian Gray trading youth for endless sensory corruption in Oscar Wilde's The Picture of Dorian Gray; the hollow guests partying daily in The Great Gatsby.",
        topology: "用快感填满一切空隙 → 快感的保质期越来越短剂量越来越大 → 音乐停下来那一秒的寂静比任何声音都响",
        directive: {
            bright: "他活在当下比任何人都彻底。写他在感官中燃烧的那种热——他尝了别人一辈子不敢碰的东西，他去了别人只在书里读到的地方。他的人生是一场烟花，短但亮。不要写成堕落，写一个用最热烈的方式拥抱生命的人。他的享乐是一种对存在的庆祝。",
            dark: "音乐停了。灯亮了。所有人都走了。他一个人坐在那里。写那一秒的寂静——比任何声音都响。快感的另一面是空洞。他什么都尝过了，但他从来没有饱过。剂量越来越大，保质期越来越短。让观众在他上一秒的狂欢和这一秒的空之间感受到一个黑洞。",
            tension: "他正在喝酒。杯子举到一半停了。写他的手——让观众分不清他是在享受下一口，还是在犹豫要不要放下杯子。他听见了那个空洞的声音吗？还是他在加大音量来盖住它？不要替他做选择。让杯子停在半空。"
        }
    },
    {
        id: "subj_addict",
        name: "渴求者", nameEn: "The Craver",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "被某种物质、行为或关系彻底控制——明知是毒药，但手停不下来。你的意志力输给了你的身体。",
        defEn: "Thoroughly controlled by a substance, behavior, or relationship — knowing it's poison, but unable to stop. Your willpower lost to your body.",
        flaw: "奴役", flawEn: "Slavery",
        core: "A面：上瘾可以是唯一能让世界'正常'的方式——没有它你活不了。它是你的地板、你的空气、你的重力。在所有东西都在塌的时候，它是唯一还站着的。/ B面：但它也是最清晰的自毁。你知道它在杀你，但知道和停下来之间有一条你跨不过去的沟。关键张力：如果戒了——你能承受那个没有滤镜的、赤裸的现实吗？ | 缺失 ($): 自控——你的手是你自己的吗？",
        coreEn: "A-side: Addiction can be the only thing that makes the world 'normal' — you can't live without it. It's your floor, your air, your gravity. When everything else collapses, it's the only thing still standing. / B-side: But it's also the clearest self-destruction. You know it's killing you, but between knowing and stopping lies a ditch you can't cross. Key tension: If you quit — can you bear the raw, unfiltered reality? | Lacks ($): Control — are your hands even yours?",
        reference: "《猜火车》中靠海洛因逃避一切的苏格兰青年；《美丽男孩》里被冰毒彻底摧毁生活与意志的尼克。",
        referenceEn: "The Scottish youths running from reality with heroin in Trainspotting; Nic, whose life and will are destroyed by meth in Beautiful Boy.",
        topology: "被某种物质或行为彻底控制 → 它是你唯一还在运转的地板 → 知道和停下来之间有一条跨不过去的沟",
        directive: {
            bright: "没有它他活不了。写那种物质或行为在他生命中占据的位置——它是他的地板、他的空气、他的重力。在所有东西都在塌的时候，它是唯一还站着的。不要写成道德审判，写一个在世界崩塌之后找到了唯一一根还能抓住的绳子的人。那根绳子是毒的，但至少它是实在的。",
            dark: "他知道它在杀他。但知道和停下来之间有一条他跨不过去的沟。写他的意志力输给身体的那种绝望——他的大脑说停，他的手不听。他是自己身体的囚徒。他的自控力死了，但他还活着，活在一个没有刹车的身体里。让观众感受到一种比堕落更深的无力。",
            tension: "他的手伸向了那个东西。又缩回来了。又伸过去了。写他的手在伸和缩之间的那种震颤——让观众在那个来回的手势里看见一个人和他的身体之间的战争。如果戒了，他能承受那个没有滤镜的、赤裸的现实吗？他的手到底是他自己的吗？"
        }
    },
    {
        id: "subj_perfectionist",
        name: "完美主义者", nameEn: "The Perfectionist",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "对细节有病态的控制欲，无法容忍任何一丝瑕疵——你的标准是你的王冠，也是你的枷锁。",
        defEn: "Having a pathological need to control every detail, intolerant of the slightest flaw — your standards are your crown, and your shackles.",
        flaw: "强迫", flawEn: "Compulsion",
        core: "A面：完美主义可以制造杰作——只有极端追求才能触及神作。你的挑剔是一种才华的表现，你拒绝接受平庸。/ B面：但永远完不成的作品比没有更残忍。你删掉了一百个版本，抽屉里全是被你自己杀死的草稿。你的敌人不是外界——是镜子里那个永远不满意的人。关键张力：你追求完美——是为了创造，还是为了控制焦虑？ | 缺失 ($): 宽容——你对世界残忍，但你对自己更残忍。",
        coreEn: "A-side: Perfectionism can create masterpieces — only extreme pursuit touches the divine. Your meticulousness is a display of talent; you refuse mediocrity. / B-side: But a never-finished work is crueler than none. You've deleted a hundred versions; the drawer is full of drafts you killed yourself. Your enemy isn't the world — it's the person in the mirror who is never satisfied. Key tension: Do you pursue perfection to create, or to control anxiety? | Lacks ($): Mercy — you are cruel to the world, but crueler to yourself.",
        reference: "电影《黑天鹅》里为了绝对完美而逼疯自己的妮娜；《莫扎特传》中因忍受不了瑕疵与平庸而极度嫉妒的萨列里。",
        referenceEn: "Nina driving herself mad for absolute perfection in Black Swan; Salieri consumed by extreme jealousy, unable to tolerate flaws or mediocrity in Amadeus.",
        topology: "对细节有病态的控制欲 → 你的标准是你的王冠也是你的枷锁 → 镜子里那个永远不满意的人才是你真正的敌人",
        directive: {
            bright: "只有极端追求才能触及神作。写他的完美主义作为才华的表达——他拒绝接受平庸，他的挑剔是一种审美上的诚实。他的标准比任何人都高，这让他的作品比任何人都锋利。不要写成强迫症，写一个在极端追求中触碰到了某种只有他能到的高度的人。",
            dark: "他删掉了一百个版本。抽屉里全是被他自己杀死的草稿。写他和镜子里那个永远不满意的人之间的战争——他的敌人不是外界，是自己。他对世界残忍，但他对自己更残忍。让观众看见一种最精确的自我消耗：追求完美不是为了创造，是为了控制那种无处不在的焦虑。",
            tension: "他的作品完成了。他看着它。写他看着成品时的表情——不是满意，是在找瑕疵。他永远能找到。让观众在他审视的目光里看见一个永远不会被自己放过的人。他追求完美是为了创造，还是因为不完美让他无法呼吸？这两种可能在他身上同时为真。"
        }
    },
    {
        id: "subj_narcissist",
        name: "自恋者", nameEn: "The Narcissist",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "世界是一面镜子，只映照自己——他人的存在仅仅是为了确认'我'的伟大。你需要所有的光。",
        defEn: "The world is a mirror reflecting only the self — others exist solely to confirm 'my' greatness. You need all the light.",
        flaw: "唯我", flawEn: "Solipsism",
        core: "A面：自恋可以是强大的自信源泉——'我就是值得'。在一个不断否定你的世界里，你选择了无条件地站在自己这边。这种骄傲有时候是唯一的铠甲。/ B面：但镜子一旦碎了，'我'就不存在了。你需要别人的目光来确认自己的轮廓——没有观众的时候，你不知道自己长什么样。关键张力：如果有人真正看穿了你——你会崩溃，还是终于松一口气？ | 缺失 ($): 他者——你爱的不是自己，你爱的是镜子里那个被修过的自己。",
        coreEn: "A-side: Narcissism can be a powerful source of confidence — 'I am worth it.' In a world that constantly denies you, you chose to stand unconditionally on your own side. That pride is sometimes the only armor. / B-side: But once the mirror breaks, 'I' ceases to exist. You need others' gazes to confirm your own contours — when there's no audience, you don't know what you look like. Key tension: If someone truly sees through you — will you collapse, or finally breathe? | Lacks ($): The Other — you don't love yourself; you love the retouched version in the mirror.",
        reference: "希腊神话中因迷恋水中倒影而憔悴死去的纳西索斯；《美国精神病人》里对身份阶层与容颜迷恋到病态的杀手。",
        referenceEn: "Narcissus in Greek mythology, pining away for his own reflection; the killer morbidly obsessed with status and his face in American Psycho.",
        topology: "世界是一面只映照自己的镜子 → 需要别人的目光来确认自己的轮廓 → 镜子碎了'我'就不存在了",
        directive: {
            bright: "他选择了无条件地站在自己这边。写他的自恋作为一种铠甲——在一个不断否定你的世界里，'我就是值得'这句话是最后的防线。他的骄傲有时候是唯一的铠甲。不要写成病态，写一个在否定中靠自我肯定活下来的人。他的自信是他给自己的救生圈。",
            dark: "镜子碎了。他不知道自己长什么样了。写他在没有观众的时候的那种消失——他需要别人的目光来确认自己的轮廓。没有人看他的时候，他的边界就模糊了。他爱的不是自己，他爱的是镜子里那个被修过的自己。真正的他比镜像小得多。让观众从他的光芒里看见一个正在萎缩的人。",
            tension: "有人看穿了他。不是批评，是真正看见了镜子后面那个人。写他被看穿的那一秒——他会崩溃，还是终于松一口气？让观众看见一个在表演和真实之间的裂缝里挣扎的人。被看穿是他最恐惧的事，但也可能是他最需要的事。不要替他选反应。"
        }
    },
    {
        id: "subj_gambler",
        name: "赌徒", nameEn: "The Gambler",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "只有在风险中才能感觉到活着——赌的不是钱，是命。你的心跳只有在悬崖边上才是正常频率。",
        defEn: "Can only feel alive through risk — what's at stake is not money, but life. Your heartbeat only reaches normal rhythm at the edge of a cliff.",
        flaw: "死亡驱力", flawEn: "Death Drive",
        core: "A面：赌可以是最极端的乐观——一切都可能翻盘。你相信概率站在你这边，或者更准确地说，你相信自己是例外。/ B面：但赌也可以是最隐蔽的自毁——你在测试命运到底有多恨你。每次下注不是为了赢，是为了看那一秒的不确定性——那是你唯一感觉活着的瞬间。关键张力：如果你赢了一切——你会停手，还是加倍？ | 缺失 ($): 安全感——你不知道自己赌的到底是什么。",
        coreEn: "A-side: Gambling can be the most extreme optimism — everything can turn around. You believe probability is on your side, or more precisely, you believe you are the exception. / B-side: But gambling can also be the most covert self-destruction — you're testing how much fate hates you. Each bet isn't to win; it's for that one second of uncertainty — the only moment you feel alive. Key tension: If you win everything — will you stop, or double down? | Lacks ($): Security — you don't even know what you're really gambling for.",
        reference: "陀思妥耶夫斯基《赌徒》里深陷轮盘的阿列克谢；《鱿鱼游戏》中用命做筹码的底层众生。",
        referenceEn: "Alexei deeply immersed in roulette in Dostoevsky's The Gambler; the underclass gambling with their lives in Squid Game.",
        topology: "只有在风险中才能感觉到活着 → 赌的不是钱是命 → 每次下注不是为了赢是为了那一秒的不确定性",
        directive: {
            bright: "一切都可能翻盘。写他在风险中找到的那种极端乐观——他相信自己是例外，他相信概率站在他这边。他的心跳只有在悬崖边上才是正常频率。不要写成自毁，写一个在不确定性中找到了唯一能让他感觉活着的东西的人。他的赌是他对命运最勇敢的对视。",
            dark: "他在测试命运到底有多恨他。写他每次下注时的那种隐秘的自毁——他赌的不是为了赢，是为了那一秒硬币在空中翻转时的不确定性。那是他唯一感觉活着的瞬间。赢了他会加倍，输了他也会加倍。让观众看见一种比贪婪更深的东西：他赌的是他自己的存在。",
            tension: "他赢了。所有人都在欢呼。写他在赢了之后的表情——不是满足，是空的。他已经在想下一次了。让观众在那个'下一次'里看见一个永远不会停手的人。如果他赢了一切，他会停吗？他的答案和观众猜的一样。不要说出来。"
        }
    },
    {
        id: "subj_collector",
        name: "收藏家", nameEn: "The Collector",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "试图通过收集客体来填满内心的空洞——对象可以是物品、人、成就或经验。你拥有了一切，但你什么都没有。",
        defEn: "Attempting to fill an inner void by collecting objects — items, people, achievements, or experiences. You possess everything, yet you have nothing.",
        flaw: "恋物", flawEn: "Fetishism",
        core: "A面：收藏可以是对美的虔诚保存——你守护着别人忽视的珍宝。你的眼睛能看见别人看不见的价值，这是一种天赋。/ B面：但物不会背叛，人会。你用收藏来替代亲密，因为东西可以被锁在柜子里，人不可以。关键张力：你的收藏品如果全部被烧毁——那个没有藏品的你，是谁？ | 缺失 ($): 亲密——你的柜子是满的，但你的手是空的。",
        coreEn: "A-side: Collecting can be a devout preservation of beauty — you guard treasures others overlook. Your eyes see value that others miss; it's a gift. / B-side: But objects don't betray; people do. You use collecting to substitute for intimacy, because things can be locked in a cabinet; people can't. Key tension: If your entire collection were burned — who is the you without it? | Lacks ($): Intimacy — your cabinet is full, but your hands are empty.",
        reference: "《香水》里执拗地收集少女体香的格雷诺耶；《蝴蝶春梦》中收集蝴蝶进而囚禁少女的弗雷德。",
        referenceEn: "Grenouille obsessively collecting the scent of maidens in Perfume; Freddie collecting butterflies and proceeding to cage a girl in The Collector.",
        topology: "通过收集客体来填满内心的空洞 → 物不会背叛所以用收藏替代亲密 → 所有藏品被烧毁后那个没有藏品的你是谁",
        directive: {
            bright: "他的眼睛能看见别人看不见的价值。写他作为收藏家的那种对美的虔诚——他守护着别人忽视的珍宝。他的柜子是一座个人博物馆，每一件藏品都是他从世界的噪音中筛选出来的信号。不要写成恋物癖，写一个用收藏来保存被世界遗忘的美的人。",
            dark: "物不会背叛。人会。写他用收藏来替代亲密的那种隐秘逻辑——东西可以被锁在柜子里，人不可以。他的柜子是满的，但他的手是空的。他拥有了一切，但他什么都没有。让观众从他满到溢出的收藏柜里看见一个正比例放大的空洞。",
            tension: "他最珍贵的藏品碎了。写他看着碎片时的反应——让观众分不清他是在心疼一件物品，还是在经历一种他平时不允许自己感受的丧失。如果所有藏品都被烧毁，那个没有藏品的他还剩什么？他敢面对那个问题吗？"
        }
    },
    {
        id: "subj_fanatic",
        name: "笃信者", nameEn: "The Devoted",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "为了某种信仰、理想或事业，可以牺牲一切理性与温柔——你的眼睛里只有一种光。",
        defEn: "For a belief, ideal, or cause, willing to sacrifice all reason and tenderness — there is only one light in your eyes.",
        flaw: "盲目", flawEn: "Blindness",
        core: "A面：狂信可以是人类最强大的精神力量——正义的烈焰。你的确定性是别人羡慕的，在一个什么都模糊的世界里，你知道自己要什么。/ B面：但狂信者不是没有道德，而是有一套自洽到无法穿透的道德。你的信仰变成了墙，把所有质疑都挡在外面。关键张力：你的信仰和你的良心，哪一次冲突了？你听了哪个？ | 缺失 ($): 理性——你的光太强了，把影子也照没了。",
        coreEn: "A-side: Fanaticism can be humanity's mightiest spiritual power — the flame of righteousness. Your certainty is others' envy; in a world where everything is ambiguous, you know what you want. / B-side: But the fanatic doesn't lack morals — they possess a self-consistent morality impenetrable from outside. Your faith became a wall, blocking all questioning. Key tension: When did your faith and your conscience clash — and which did you obey? | Lacks ($): Reason — your light is so strong it erased the shadows too.",
        reference: "大卫·芬奇《七宗罪》里借宗教肃清原罪的约翰；《悲惨世界》中死守法律绝不通融的沙威。",
        referenceEn: "John Doe cleansing original sin through religious killings in David Fincher's Se7en; Javert clinging to pure legalism in Les Misérables.",
        topology: "为了信仰可以牺牲一切理性与温柔 → 确定性是别人羡慕的但确定性也变成了墙 → 信仰和良心冲突时你听了哪个",
        directive: {
            bright: "他知道自己要什么。写他的确定性作为力量——在一个什么都模糊的世界里，他的眼睛里只有一种光。那种光让他走得比任何人都远、比任何人都直。他的信仰是他的引擎。不要写成盲目，写一个在混沌中找到了方向并愿意为之付出一切的人。",
            dark: "他的信仰变成了墙。写那堵墙把所有质疑都挡在外面的那种密闭——他不是没有道德，他有一套自洽到无法穿透的道德。但自洽不等于正确。他的光太强了，把影子也照没了。让观众从他的坚定里看见一种最精确的盲目：看不见自己看不见的东西。",
            tension: "有人在他面前做了一件违背他信仰但符合良心的事。写他的眼睛——他的信仰说这是错的，他的胸口说这是对的。让观众看见一个在自己的系统里遇到了bug的人。他是修复信仰来容纳这件事，还是否认这件事来保全信仰？不要替他决定。"
        }
    },
    {
        id: "subj_hoarder",
        name: "囤积者", nameEn: "The Hoarder",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "无法丢弃任何东西——每一件物品都是一段不敢告别的过去。你的房间是一座记忆的坟场。",
        defEn: "Unable to throw anything away — every object is a past one dares not bid farewell to. Your room is a graveyard of memories.",
        flaw: "无法告别", flawEn: "Inability to Mourn",
        core: "A面：囤积可以是一种朴素的安全感——有就比没有好。你的每一件东西都是一段时间的证据，扔了就等于那段时间从来没有存在过。/ B面：但囤积也是对时间流逝的最绝望的抵抗——只要不扔，那段记忆就还在。你被自己的过去活埋了，房间越来越小，你越来越出不去。关键张力：如果把一切都清空——你会觉得解脱，还是觉得自己也被扔掉了？ | 缺失 ($): 告别——你什么都留着，但你留不住时间。",
        coreEn: "A-side: Hoarding can be a humble sense of security — having is better than not. Every object is evidence of a time; throwing it away means that time never existed. / B-side: But hoarding is the most desperate resistance to time's passage — as long as you don't throw it away, the memory remains. You're buried alive by your own past; the room shrinks; you can't get out. Key tension: If everything were cleared away — would you feel liberated, or discarded yourself? | Lacks ($): Letting go — you keep everything, but you can't keep time.",
        reference: "马尔克斯《百年孤独》中在晚年强迫般反复打造小金鱼的奥雷里亚诺；《千与千寻》中吞噬一切、不断膨胀的无脸男。",
        referenceEn: "Aureliano obsessively forging little gold fishes in his old age in One Hundred Years of Solitude; No-Face, swallowing everything and constantly expanding in Spirited Away.",
        topology: "无法丢弃任何东西 → 每一件物品都是一段不敢告别的过去 → 被自己的过去活埋了房间越来越小你越来越出不去",
        directive: {
            bright: "有就比没有好。写他囤积的那种朴素的安全感——每一件东西都是一段时间的证据，扔了就等于那段时间从来没有存在过。他的房间不是杂乱，是一座个人的时间博物馆。不要写成病态，写一个用保留物品的方式保留记忆的人。他的每一件东西都有名字。",
            dark: "他被自己的过去活埋了。写他的房间越来越小——每一件东西都是一段不敢告别的时间，它们堆积起来变成了墙壁。他出不去了，不是因为门被堵了，是因为走出去意味着丢下它们。让观众从他满到溢出的房间里看见一种对时间流逝最绝望的抵抗。",
            tension: "有人递给他一个垃圾袋。写他看着那个袋子的表情——让观众在那个表情里看见一种比不舍更深的恐惧。如果把一切都清空，他会觉得解脱，还是觉得自己也被扔掉了？他的东西和他之间的边界，已经不太分得清了。"
        }
    },
    {
        id: "subj_voyeur",
        name: "窥视者", nameEn: "The Voyeur",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "通过偷窥他人的生活获得快感——看见别人的隐私成了一种无法戒掉的瘾。你活在别人的窗户里。",
        defEn: "Deriving pleasure from peeping into others' lives — seeing others' privacy has become an unbreakable addiction. You live inside other people's windows.",
        flaw: "被动过剩", flawEn: "Passive Excess",
        core: "A面：窥视可以是理解人性的窗口——作家和导演都是窥视者。你从别人的窗户里看到了他们自己都不知道的东西。/ B面：但窥视也是行动力的彻底瘫痪——你只敢看，不敢活。你是所有人人生的旁听者，但你自己的房间是空的。关键张力：如果被窥视的人突然看向你——你是逃跑，还是终于走出去？ | 缺失 ($): 介入的勇气——你看了一辈子，但你从来没有推开过自己的门。",
        coreEn: "A-side: Voyeurism can be a window to understanding human nature — writers and directors are all voyeurs. Through others' windows you see what they themselves don't know. / B-side: But voyeurism is also a total paralysis of agency — you only dare watch, not live. You're the bystander to everyone's life, but your own room is empty. Key tension: If the person being watched suddenly looks back at you — do you run, or finally step forward? | Lacks ($): Courage to act — you've watched all your life, but you've never opened your own door.",
        reference: "希区柯克《后窗》里断了腿只能拿着望远镜沉迷于别家窗户的男主；《楚门的世界》里的电视观众。",
        referenceEn: "The wheelchair-bound protagonist obsessed with his neighbors' windows through binoculars in Hitchcock's Rear Window; the TV audience in The Truman Show.",
        topology: "通过偷窥他人获得快感 → 看得太多但自己的房间是空的 → 被窥视的人突然看向你时你是逃跑还是走出去",
        directive: {
            bright: "作家和导演都是窥视者。写他从别人的窗户里看到了他们自己都不知道的东西——他的目光比任何摄像机都精确。他的窥视不是偷，是一种对人性的极致观察。不要写成变态，写一个通过观看获得了罕见洞察力的人。他的眼睛是他最好的工具。",
            dark: "他只敢看，不敢活。写他的窥视作为行动力瘫痪的那种质地——他是所有人人生的旁听者，但他自己的房间是空的。他看过最精彩的爱情、最惨烈的分离、最疯狂的冒险——全是别人的。他的人生从来没有推开过自己的门。让观众看见一种最安全的方式活在世界里——但那不叫活。",
            tension: "他在窥视。被窥视的人突然转过头来，直直地看着他。写他在被看见的那一秒的反应——他的第一反应是逃。但他没有动。让观众在那个对视里看见一个选择：他是继续躲在窗帘后面，还是第一次走出去？被看见是一种恐惧，但也可能是他唯一的出路。"
        }
    },
    {
        id: "subj_paranoiac",
        name: "过度解读者", nameEn: "The Over-Interpreter",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "在所有事物中寻找针对自己的阴谋——过度的解读能力成了一种无法关闭的诅咒。你的大脑从来不放过任何一个细节。",
        defEn: "Finding conspiracies targeting oneself in everything — an excessive capacity for interpretation becomes an unstoppable curse. Your brain never lets a single detail go.",
        flaw: "过度诠释", flawEn: "Over-interpretation",
        core: "A面：偏执可以是一种洞察力——在别人放松警惕时你最先发现危险。你的雷达比所有人都灵敏，你不容易被骗。/ B面：但敏感过度就是把整个世界都变成了敌人。你的怀疑是一个自我实现的预言——你越怀疑，别人越远，别人越远，你越怀疑。关键张力：如果你的怀疑有一次是对的——你会更安心，还是更加疑神疑鬼？ | 缺失 ($): 信任——你的脑子太聪明了，聪明到把自己困住了。",
        coreEn: "A-side: Paranoia can be a form of insight — you spot danger first when others relax. Your radar is more sensitive than anyone's; you're not easily fooled. / B-side: But oversensitivity turns the entire world into an enemy. Your suspicion is a self-fulfilling prophecy — the more you doubt, the further others pull away; the further they go, the more you doubt. Key tension: If your suspicion turns out right just once — will you feel safer, or even more paranoid? | Lacks ($): Trust — your brain is too clever; so clever it trapped itself.",
        reference: "库布里克《闪灵》中逐渐被孤绝逼疯的杰克；《禁闭岛》里坚定认为整座岛都在对他下药骗他的泰迪。",
        referenceEn: "Jack gradually driven mad by isolation in Kubrick's The Shining; Teddy firmly believing the entire island is drugging and deceiving him in Shutter Island.",
        topology: "在所有事物中寻找针对自己的阴谋 → 过度的解读能力成了无法关闭的诅咒 → 怀疑是一个自我实现的预言——你越怀疑别人越远别人越远你越怀疑",
        directive: {
            bright: "他的雷达比所有人都灵敏。写他的偏执作为洞察力——在别人放松警惕时他最先发现危险。他不容易被骗，他的脑子比任何人都快。他的怀疑不是病，是一种过度活跃的智力在不停运转。不要写成疑心病，写一个因为太聪明而永远在多想一层的人。",
            dark: "他的怀疑变成了一个自我实现的预言。写他在过度解读中的旋涡——他越怀疑，别人越远；别人越远，他越怀疑。他把整个世界都变成了敌人。他的聪明困住了他自己。让观众感受到一种最精确的牢笼：不是别人锁的，是他自己的脑子造的。",
            tension: "他的怀疑这次是对的。他发现了一个真正的阴谋。写他确认自己是对的那一刻的表情——不是快意，是更加不安。因为如果这次是真的，那其他那些他不确定的呢？让观众看见一个被自己的正确吓到的人。他会更安心，还是更加疑神疑鬼？答案很明显。"
        }
    },
    {
        id: "subj_workaholic",
        name: "工作狂", nameEn: "The Workaholic",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "用不停的忙碌填满所有缝隙——停下来等于坍塌。你不是热爱工作，你是害怕静止。",
        defEn: "Filling every gap with relentless busyness — stopping means collapsing. You don't love work; you fear stillness.",
        flaw: "空转焦虑", flawEn: "Idle Anxiety",
        core: "A面：工作狂可以是最高效的创造者——没有人比永不停歇的人产出更多。你的日程表是满的，你的成果是实在的，你的价值是可以被看见的。/ B面：但忙到没空面对自己，也是一种最精巧的逃避。你不是在做事——你是在用做事来避免思考。关键张力：如果强制休假一个月——你会发现什么？放松？还是一个你不认识的自己？ | 缺失 ($): 静止——你害怕的不是无聊，是安静之后会听见的东西。",
        coreEn: "A-side: A workaholic can be the most efficient creator — no one produces more than the one who never stops. Your schedule is full, your output is tangible, your value is visible. / B-side: But being too busy to face yourself is the most sophisticated evasion. You're not doing things — you're using doing to avoid thinking. Key tension: If forced to take a month off — what would you discover? Relaxation? Or a self you don't recognize? | Lacks ($): Stillness — what you fear isn't boredom; it's what you'd hear after the quiet settles.",
        reference: "《穿普拉达的女王》中用极致效率掩盖人生裂痕的米兰达；《社交网络》中用代码逃避人际失败的扎克伯格。",
        referenceEn: "Miranda masking life's cracks with extreme efficiency in The Devil Wears Prada; Zuckerberg escaping interpersonal failure through code in The Social Network.",
        topology: "用不停的忙碌填满所有缝隙 → 停下来等于坍塌 → 忙到没空面对自己是一种最精巧的逃避",
        directive: {
            bright: "没有人比他产出更多。写他的效率作为一种可见的价值——他的日程表是满的，他的成果是实在的。他的存在可以被量化，而可以被量化的东西是安全的。不要写成悲剧，写一个在忙碌中找到了一种确定的自我证明方式的人。他忙，但他的忙是有成果的。",
            dark: "他不是在做事，他是在用做事来避免思考。写他忙碌的那种隐秘的逃避性——停下来他就得面对自己，而面对自己比任何截止日期都可怕。他害怕的不是无聊，是安静之后会听见的东西。让观众从他满满的日程表里看见一个正在逃跑的人。他的忙碌是一种伪装成勤奋的恐惧。",
            tension: "周末。什么都不用做。写他面对空白时间的那种不安——他的手不知道该放在哪里，他的脑子在找一件可以做的事。让观众在他的坐立不安中看见一个问题：如果强制休假一个月，他会发现什么？放松？还是一个他不认识的自己？"
        }
    },
    {
        id: "subj_avenger",
        name: "复仇者", nameEn: "The Avenger",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "被一种不可遏止的恨意驱动——复仇成了活下去的唯一理由。你的血是冷的，但你的火是热的。",
        defEn: "Driven by an unstoppable hatred — vengeance has become the sole reason to live. Your blood is cold, but your fire is hot.",
        flaw: "恨的奴隶", flawEn: "Slave to Hatred",
        core: "A面：复仇可以是正义的最后手段——当法律失效、秩序崩塌的时候，你的恨是唯一还在运转的引擎。你替那些被埋没的人说了话。/ B面：但复仇的火也在烧你自己。你变成了你恨的那个人的影子——你用他的方式活着，用他的逻辑思考。关键张力：当仇人死了——你是解脱，还是发现自己已经空了？ | 缺失 ($): 宽恕/放下——你的恨让你强大，但你的恨也是你唯一剩下的东西。",
        coreEn: "A-side: Vengeance can be the last resort of justice — when law fails and order collapses, your hatred is the only engine still running. You spoke for those who were buried. / B-side: But the fire of revenge also burns you. You've become the shadow of the person you hate — you live by their methods, think by their logic. Key tension: When the enemy is dead — is it liberation, or the discovery that you've become hollow? | Lacks ($): Forgiveness — your hatred makes you powerful, but it's also the only thing you have left.",
        reference: "大仲马《基督山伯爵》中耗尽半生策划天罗地网复仇的唐泰斯；朴赞郁《老男孩》中被操纵完成以复仇为名的毁灭闭环的主角。",
        referenceEn: "Dantès spending half his life weaving an elaborate web of vengeance in The Count of Monte Cristo; the protagonist manipulated into a loop of destruction in the name of revenge in Park Chan-wook's Oldboy.",
        topology: "被不可遏止的恨意驱动 → 复仇成了活下去的唯一理由 → 仇人死了之后你变成了你恨的那个人的影子",
        directive: {
            bright: "当法律失效、秩序崩塌的时候，他的恨是唯一还在运转的引擎。写他的复仇作为最后正义的那种冷光——他替那些被埋没的人说了话。他的血是冷的，但他的火是热的。不要写成暴力叙事，写一个在不公面前选择了不沉默的人。他的恨是一种变形的正义。",
            dark: "复仇的火也在烧他自己。写他变成了他恨的那个人的影子——他用对方的方式活着，用对方的逻辑思考。他以为自己是正义的执行者，但他的手已经和仇人的手做了同样的事。让观众在他的冷酷里看见一种最隐秘的同化：你恨了一个人太久，你就变成了他。",
            tension: "仇人死了。他站在尸体前面。写他的脸——不是解脱。是一种他没有准备好面对的空。他的恨是他唯一剩下的东西，现在恨的对象没了，他的油箱也空了。让观众看见一个在复仇完成之后发现自己已经空了的人。他赢了。但赢了之后呢？"
        }
    },
    {
        id: "subj_people_pleaser",
        name: "讨好者", nameEn: "The People-Pleaser",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "对所有人说'好'——因为'不'这个字从小就意味着被抛弃。你的微笑是一副面具，你戴了太久已经摘不下来了。",
        defEn: "Saying 'yes' to everyone — because 'no' has meant abandonment since childhood. Your smile is a mask; you've worn it so long you can't take it off.",
        flaw: "边界消融", flawEn: "Boundary Erosion",
        core: "A面：讨好可以维持和平——至少所有人都不生气。你是润滑剂，是缓冲区，是所有人都觉得舒服的存在。你的付出是真实的。/ B面：但你的'好'慢慢把你自己腐蚀成了空壳。你不知道自己想要什么，因为你永远在问别人想要什么。关键张力：如果你说了一次'不'，而那个人因此离开了——你会后悔，还是终于知道谁值得留下？ | 缺失 ($): 边界——你对所有人都好，但你对自己最差。",
        coreEn: "A-side: People-pleasing can maintain peace — at least no one is angry. You're the lubricant, the buffer zone, the presence everyone finds comfortable. Your giving is real. / B-side: But your 'yes' slowly corrodes you into an empty shell. You don't know what you want, because you're always asking what others want. Key tension: If you say 'no' once and that person leaves — will you regret it, or finally know who's worth keeping? | Lacks ($): Boundaries — you are good to everyone, but you are the worst to yourself.",
        reference: "《被嫌弃的松子的一生》中把讨好变成生存本能的松子；《芳华》中因为太'好'反而成为被利用对象的刘峰。",
        referenceEn: "Matsuko in Memories of Matsuko, whose people-pleasing became a survival instinct; Liu Feng in Youth, exploited precisely because he is too 'good'.",
        topology: "对所有人说'好'因为'不'从小就意味着被抛弃 → 微笑面具戴太久摘不下来 → 你的'好'把你自己腐蚀成了空壳",
        directive: {
            bright: "他是所有人都觉得舒服的存在。写他的讨好作为一种真实的付出——他是润滑剂，是缓冲区，他的给予不是假的。他真的在乎别人的感受，这种在乎是他的天赋。不要写成病态，写一个因为共情力过剩而自然地把别人放在前面的人。他的温柔是真的。",
            dark: "他的'好'把他自己腐蚀成了空壳。写他不知道自己想要什么的那种空——他永远在问别人想要什么，他的回答永远是'都行'。他的微笑是一副面具，但他戴得太久已经摘不下来了。让观众从他完美的体贴里看见一个正在消失的人。他对所有人都好，但他对自己最差。",
            tension: "他说了一个'不'。对方的脸变了。写他看着对方变脸时的那种恐惧和解放同时涌上来的感觉——恐惧是因为他知道'不'意味着什么，解放是因为他第一次感觉到了自己的边界。让观众看见这个瞬间的两面：他失去了一个人，但他找到了自己。也许。"
        }
    },
    {
        id: "subj_power_hungry",
        name: "权力饥渴者", nameEn: "The Power-Hungry",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "对控制和支配有着永远无法满足的渴望——不是为了享乐，而是因为只有在金字塔顶端才能感到安全。往上爬是你唯一会的动作。",
        defEn: "Possessing an insatiable craving for control and dominance — not for pleasure, but because safety is only felt at the top. Climbing is the only move you know.",
        flaw: "永不知足", flawEn: "Insatiability",
        core: "A面：权力欲可以建造帝国——只有最饥渴的人才能推动历史。你的野心是一种能量，它让你比所有人都走得远。/ B面：但你走得越高越孤独。没有人愿意跟一台永动机做朋友。你把所有人都变成了工具——包括你自己。关键张力：当你站到了最高处——还剩谁站在你身边？ | 缺失 ($): 对等关系——你周围全是服从你的人，但没有一个是爱你的人。",
        coreEn: "A-side: The hunger for power can build empires — only the most famished push history forward. Your ambition is energy; it takes you farther than anyone. / B-side: But the higher you climb, the lonelier it gets. No one wants to befriend a perpetual machine. You've turned everyone into tools — including yourself. Key tension: When you reach the top — who is left standing beside you? | Lacks ($): Equal relationships — you're surrounded by those who obey, but not a single one who loves.",
        reference: "莎士比亚《麦克白》中被权力欲反噬到疯狂的麦克白夫妇；《教父》中逐步丧失人性的迈克尔·柯里昂。",
        referenceEn: "The Macbeths consumed by power's backlash into madness in Shakespeare's Macbeth; Michael Corleone progressively losing his humanity in The Godfather.",
        topology: "对控制和支配有永远无法满足的渴望 → 只有在金字塔顶端才能感到安全 → 走得越高越孤独因为你把所有人都变成了工具",
        directive: {
            bright: "只有最饥渴的人才能推动历史。写他的野心作为一种能量——他比所有人都走得远，因为他比所有人都饿。他的权力欲不是恶意，是一种对安全的极端需求：只有在顶端他才能呼吸。不要写成暴君，写一个被不安全感驱动到极致的人。他的爬是一种不自觉的求生。",
            dark: "他走得越高越孤独。写他在权力中的那种隔绝——没有人愿意跟一台永动机做朋友。他把所有人都变成了工具——包括他自己。他周围全是服从他的人，但没有一个是爱他的人。让观众从他的胜利里看见一种最精确的失败：他赢了所有人，但他输了自己。",
            tension: "他站到了最高处。往下看。写他在顶端时的表情——不是满足，是一种新的饥饿。到了顶端之后他发现没有更高的地方了，而他只会做一件事：往上爬。让观众在他的目光里看见一个在成功中找不到终点的人。还剩谁站在他身边？他还记得吗？"
        }
    },
    {
        id: "subj_thrill_seeker",
        name: "极限追求者", nameEn: "The Thrill-Seeker",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "只有在极端体验中——速度、高度、暴力或性——才能感觉到自己还活着。日常生活对你来说是一种慢性死亡。",
        defEn: "Only feeling alive in extreme experiences — speed, heights, violence, or sex. Everyday life is a slow death for you.",
        flaw: "阈值升级", flawEn: "Escalating Threshold",
        core: "A面：追求极限可以是对生命最勇敢的拥抱——大多数人不敢去的边界，你去了。你比他们多活了一百倍。/ B面：但每次极限之后日常就更加难以忍受。你需要的刺激阈值越来越高——这是一条加速的下坡路。关键张力：你需要的剂量越来越高——下一次，需要多大的剂量才能感觉到？ | 缺失 ($): 日常的感受力——你只在悬崖边上才活着，但悬崖越来越难找了。",
        coreEn: "A-side: Seeking extremes can be the bravest embrace of life — boundaries most people dare not approach, you've crossed. You've lived a hundred times more than them. / B-side: But after each thrill, the everyday becomes even more unbearable. The threshold keeps rising — it's an accelerating downhill. Key tension: The dose you need keeps growing — how much will you need next time to feel something? | Lacks ($): Everyday sensitivity — you only feel alive at the cliff's edge, but the cliff gets harder to find.",
        reference: "《搏击俱乐部》中靠肉体疼痛唤醒感知的搏击会成员；《荒野猎人》中在极限生存中找到意志的格拉斯。",
        referenceEn: "The fight club members awakening their senses through physical pain in Fight Club; Glass finding his will through extreme survival in The Revenant.",
        topology: "只有在极端体验中才能感觉到活着 → 每次极限之后日常更加难以忍受 → 需要的剂量阈值不断升级是一条加速的下坡路",
        directive: {
            bright: "大多数人不敢去的边界，他去了。写他在极限中找到的那种燃烧——他比其他人多活了一百倍。他的身体是一把钥匙，只有在速度、高度或痛觉的极限上才能打开某扇门。不要写成鲁莽，写一个在极端体验中触碰到了一种别人到不了的真实的人。他的勇敢是真的。",
            dark: "每次极限之后日常就更加难以忍受。写他对刺激阈值的不断升级——他需要的剂量越来越高，这是一条加速的下坡路。他只在悬崖边上才活着，但悬崖越来越难找了。日常生活对他来说是一种慢性死亡。让观众从他的冒险里看见一种最隐秘的逃避：他追求的不是极限，是逃离平庸。",
            tension: "他站在一个很高的地方。往下看。写他的身体——肾上腺素在推他向前，理性在拉他后退。让观众在他脚趾悬空的那个瞬间看见一个问题：他是在拥抱生命，还是在和死亡调情？这两件事在他身上可能是同一件事。"
        }
    },
    {
        id: "subj_performer",
        name: "展示者", nameEn: "The Performer",
        group: "F. 享乐的祭品", groupEn: "The Excessive",
        def: "需要被看见、被注意、被鼓掌——没有观众的人生等于不存在。你的舞台是你唯一的地面。",
        defEn: "Needing to be seen, noticed, applauded — a life without an audience equals nonexistence. Your stage is the only ground you have.",
        flaw: "注意力饥渴", flawEn: "Attention Hunger",
        core: "A面：表演欲可以是艺术的原动力——没有这份冲动就没有舞台。你把自己燃烧给观众，这种慷慨是真实的、是灼热的。/ B面：但聚光灯熄灭之后呢？当掌声停了、观众散了，你独自一人时，你不知道该做什么。你怀疑那个没有观众的你——到底还存不存在。关键张力：当掌声停了、观众散了——你独自一人时，做什么？ | 缺失 ($): 自足感——你需要别人的眼睛才能看见自己。",
        coreEn: "A-side: The drive to perform can be the prime mover of art — without this urge there would be no stage. You burn yourself for the audience; that generosity is real and searing. / B-side: But what happens after the spotlight goes off? When the applause stops and the audience leaves, you don't know what to do alone. You suspect the you without an audience — might not exist at all. Key tension: When the applause stops and the audience leaves — what do you do alone? | Lacks ($): Self-sufficiency — you need others' eyes to see yourself.",
        reference: "《日落大道》中活在过去辉光里拒绝退场的诺玛·戴斯蒙德；《鸟人》里在百老汇上挣扎寻找艺术确认的过气明星。",
        referenceEn: "Norma Desmond living in past glory and refusing to exit in Sunset Boulevard; the faded star struggling for artistic validation on Broadway in Birdman.",
        topology: "需要被看见被注意被鼓掌 → 没有观众的人生等于不存在 → 掌声停了之后不知道自己还在不在",
        directive: {
            bright: "他把自己燃烧给观众。写他的表演欲作为艺术的原动力——没有这份冲动就没有舞台。他的慷慨是真实的、是灼热的。他在聚光灯下比任何地方都完整。不要写成虚荣，写一个在被看见中找到了存在证据的人。他的舞台是他唯一的地面。",
            dark: "聚光灯熄灭了。掌声停了。观众散了。他一个人站在空舞台上。写他在没有观众的时候的那种消失——他不知道该做什么。他怀疑那个没有观众的他到底还存不存在。他需要别人的眼睛才能看见自己。让观众从他的光芒里看见一种最深的依赖。",
            tension: "他从舞台走到后台。写他在光和暗的交界处时的那个瞬间——聚光灯在背后，黑暗在前方。他的脚步变慢了。让观众在那个减速中看见一个问题：他到底是在走向休息，还是在走向不存在？当掌声停了，他还是他吗？"
        }
    }
];

