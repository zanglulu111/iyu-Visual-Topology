import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_C: LibraryItemDef[] = [
    // ============================================================
    // GROUP C. 肉身的剥离 (Real Amputation) — 20 Items
    // 丧失维度：你的肉身/物理存在被不可逆地切走。
    // 核心感受：这不讲道理——这是冷冰冰的物理法则。
    // 光谱：身体功能丧失(1-5) → 健康/生命丧失(6-10) → 自由丧失(11-15) → 物质/时间丧失(16-20)
    // ============================================================

    // ---- 身体功能丧失：肉身的一部分被永久性截除 ----

    {
        id: "stake_disability",
        name: "永久伤残", nameEn: "Permanent Disability",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "身体功能的一部分被永久性夺走——截肢、瘫痪或器官衰竭，且不可逆。",
        defEn: "A part of bodily function permanently taken — amputation, paralysis, or organ failure, irreversible.",
        core: "A面：失去一部分身体反而让你学会了用剩余的部分活得更精密——残缺迫使你发展出常人不会拥有的代偿能力和敏锐。/ B面：但伤残最残酷的部分不是'不能做'——是'记得自己曾经能做'。幻肢痛不是身体在疼，是记忆在疼。关键张力：你拒绝接受'新的正常'，还是在残缺中找到了一种旧身体从未拥有的力量？ | 代价切口(−Φ): 肉身完整性的物理截除——不可撤销。",
        coreEn: "A-side: Losing part of the body forces you to live more precisely with what remains — disability compels compensatory abilities and acuity most never develop. / B-side: But the cruelest part isn't 'can't do' — it's 'remembering you once could.' Phantom pain isn't the body hurting; it's memory hurting. Key tension: Do you refuse the 'new normal,' or find in broken-ness a strength the old body never had? | Castration Circuit: Physical integrity surgically removed — irreversible.",
        reference: "《触不可及》车祸后全身瘫痪的富翁；《血战钢锯岭》失去双腿仍坚持信念的战场医疗兵。",
        referenceEn: "The wealthy man left quadriplegic after an accident in The Intouchables; the battlefield medic who loses his legs but keeps his faith in Hacksaw Ridge.",

        topology: "交出的不是肢体——而是'身体听从意志'这个幻觉。截除让幻觉的边界变得可见，余下的部分重新丈量自己",

        directive: {
            bright: "写他清醒地看着'完整'从身上脱落。第一次用残缺的身体完成一件事——从床上坐起来，或拧开瓶盖。没有观众，极小的事。身体找到了一条旧地图上没有的路，不需要意志来命令，它自己在摸索。他在这条新路径里辨认出代价的形状。不要写坚强，只写他注视着旧形状离开。",

            dark: "写他伸手挠痒时撞见代价——清楚地感觉到那条已经不存在的腿在痒。手伸过去，挠到了空气。他不记得交出过这个。大脑还在发送指令给一个不存在的地址，身体通讯系统里一封永远无法投递的信。每一次幻肢痛都是他发现旧身体又退回了一步的瞬间。代价在空气里一笔一笔地扣。",

            tension: "康复中心第一次照全身镜。目光从头顶往下移——头发、肩膀、胸口——到截断处停住了。他不确定是否已经付完——镜中这个形状是新的，从未见过，但确实是自己。他不知道身体还会以多少种方式提醒他旧的轮廓。写他目光停留在截断处的那几秒。不要写接受或拒绝。"
        }
    },
    {
        id: "stake_disfigurement",
        name: "容貌坍毁", nameEn: "Disfigurement",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "面孔——社交的第一张名片——被不可逆地损毁，你跌出了人类可接纳的正常审美图谱。",
        defEn: "The face — the first card of social interaction — irreversibly destroyed, falling outside the normal aesthetic chart humans can accept.",
        core: "A面：当外在的美被摧毁后，你才真正知道谁爱的是'你'而不是'你的脸'。毁容是最残酷的人际关系筛选器。/ B面：但人类是视觉动物——我们不可能不对面孔做出反应。当每个陌生人的第一反应都是移开目光，你会内化这种目光，开始相信自己确实不值得被看见。关键张力：在一个崇拜外貌的世界里——你能接受自己成为那个'让别人不舒服'的存在吗？ | 代价切口(−Φ): 社交皮肤的扒除——镜像阶段的二次创伤。",
        coreEn: "A-side: When external beauty is destroyed, you truly learn who loves 'you' and not 'your face.' Disfigurement is the cruelest relationship filter. / B-side: But humans are visual creatures — we can't help reacting to faces. When every stranger's first instinct is to look away, you internalize that gaze and start believing you truly don't deserve to be seen. Key tension: In a world that worships appearance — can you accept being 'the one who makes others uncomfortable'? | Castration Circuit: The social skin peeled off — mirror stage's secondary trauma.",
        reference: "《歌剧魅影》终生以面具遮掩毁容的魅影；《黑暗骑士》半张脸被烧毁后道德底线一同崩塌的哈维·丹特。",
        referenceEn: "The Phantom hiding disfigurement behind a mask for life in Phantom of the Opera; Harvey Dent whose moral baseline collapses with half his burned face in The Dark Knight.",

        topology: "交出的不是美——而是'被正常注视'的资格。每一道目光都变成了一面他无法躲开的镜子",

        directive: {
            bright: "写他清醒地看着'正常目光'从身上脱落。第一次走进人群买东西，进门那一刻空气变了——没有人尖叫，但三四道目光同时微微偏移方向。这种'微微偏移'不是歧视，是本能。他完成购买走出来，发现自己的呼吸在收银台前一直是浅的。他在浅呼吸里辨认出代价的形状。只写他注视。",

            dark: "写他在亲密时刻撞见代价——有人伸手想碰他的脸，出于爱意。身体先于意识反应：后退半步。不是怕疼，是怕手指碰到疤痕时传递给对方一种他无法控制的信息。他不记得交出过这个。拒绝之后的沉默——不是不想被碰，是不知道那只手碰到的是'他'还是'他的伤'。代价在每一次后退里一笔一笔地扣。",

            tension: "出门前最后一秒，手里拿着面具。他不确定是否已经付完——戴上，别人看到'正常人'但那不是他；摘下，别人看到'伤疤'那也不是他。在两种'不是我'之间选择。他不知道还有多少个场合等着这个选择。写他拿着面具等在门前的姿势。不要让他做出选择。"
        }
    },
    {
        id: "stake_sense_loss",
        name: "感官丧失", nameEn: "Loss of a Sense",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "失去视觉、听觉或触觉——世界的一个维度被永久关闭。",
        defEn: "Losing sight, hearing, or touch — one dimension of the world permanently shut off.",
        core: "A面：失去一种感官会让其余感官变得超常敏锐——盲人的听力、聋人的观察力往往超越常人。丧失一个通道反而打开了另一个。/ B面：但代偿不能替代那个失去的维度本身。你不是'拥有了更好的听力'——你是永远无法再看到日落的颜色了。那个维度的全部体验，对你变成了一种概念而非感觉。关键张力：一个从未见过颜色的人和一个失去颜色的人——谁的损失更大？ | 代价切口(−Φ): 世界的一条维度被从感知面板上拔掉。",
        coreEn: "A-side: Losing one sense heightens all others — blind hearing, deaf observation often surpass the norm. Losing one channel opens another. / B-side: But compensation can't replace the lost dimension itself. You haven't 'gained better hearing' — you can never see a sunset's color again. The entire experience of that dimension becomes concept, not sensation. Key tension: Who suffers more — someone who never saw color, or someone who lost it? | Castration Circuit: One dimension of the world is unplugged from the perception panel.",
        reference: "《推拿》失明的按摩师用触觉重建世界的故事；《贝多芬传》逐渐失聪却继续谱写交响曲的音乐巨匠。",
        referenceEn: "Blind masseurs rebuilding their world through touch in Blind Massage; Beethoven continuing to compose symphonies as he goes deaf.",

        topology: "交出的不是眼睛或耳朵——而是世界的一条维度本身。信号还在发，但你这端的接收器永久下线了",

        directive: {
            bright: "写他清醒地看着一条感知通道从身上脱落——然后被另一条击中。失明后第一次真正'听到'了雨的结构，每滴落在不同材质上的声音都有形状。像房间关了一扇窗，另一扇窗涌进来的风格外锋利。他在这个锋利里辨认出代价的形状：不是补偿，是被迫的精密。只写那个锋利的瞬间。",

            dark: "写他在聚会时撞见代价——有人在描述一幅画的颜色。他能理解每个词，但词指向的感觉区域在他内部是空白的。他不记得交出过这个。他知道自己的字典里永远缺了这一页，而这一页上写的内容所有其他页都无法翻译。每一次'无法翻译'都是他发现维度又窄了一分的瞬间。代价在描述里一笔一笔地扣。",

            tension: "面前有一样东西需要他用已失去的感官来判断——一道菜的颜色或一段音乐的调性。有人在等他回答。他不确定是否已经付完——可以用其他感官给出答案，甚至可能是对的，但经过的路径和所有人不一样。他的'对'是翻译来的，不是原文。他不知道还有多少个'需要原文'的场合在等着。写他等的姿势。不要让他承认。"
        }
    },
    {
        id: "stake_voice_loss",
        name: "失去声音", nameEn: "Loss of Voice",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "发声的生理能力被截除——你有满腹的话要说，但喉咙里只有沉默。",
        defEn: "The physiological ability to vocalize is severed — you have a chest full of words, but only silence in your throat.",
        core: "A面：沉默有时比任何言辞都更有力量——不说话的人反而可以让所有人去猜测他的意图，沉默本身成为一种权力工具。/ B面：但这不是你选择的沉默——是被强加的。当你遭受不公却无法呐喊、当你满怀爱意却无法告白、当你知道真相却无法说出——沉默就从'选择'变成了'牢笼'。关键张力：如果世界夺走了你的声音——你是找到新的表达方式，还是让沉默吞噬你？ | 代价切口(−Φ): 灵魂直接发声的通道被物理截除——小美人鱼的沉默。",
        coreEn: "A-side: Silence can be more powerful than any speech — the silent person forces everyone to guess their intent; silence becomes a power tool. / B-side: But this isn't chosen silence — it's imposed. When you suffer injustice but can't cry out, when you're full of love but can't confess, when you hold truth but can't speak — silence shifts from 'choice' to 'cage.' Key tension: If the world takes your voice — do you find new expression, or let silence devour you? | Castration Circuit: The soul's direct vocal channel is physically severed — the Little Mermaid's silence.",
        reference: "《水形物语》无法发声却用全身表达爱意的清洁工；《国王的演讲》被口吃困住无法行使王者之声的乔治六世。",
        referenceEn: "The mute cleaner expressing love with her whole body in The Shape of Water; George VI imprisoned by his stammer, unable to exercise the king's voice in The King's Speech.",

        topology: "交出的不是嗓子——而是'把内部的东西送出去'的管道。语言在体内不断积压，出口被堵死了",

        directive: {
            bright: "写他清醒地看着'直接表达'从身上脱落。发明了第一种替代——写在纸上的字或一种新的手势。某个瞬间这种替代比声音更精确：手势传达了声音从来无法传达的东西。不是因为手势更好，是声音的缺失迫使他绕过了语言的惯性路径。他在这条绕路里辨认出代价的形状。只写那个更精确的瞬间。",

            dark: "写他在必须回答时撞见代价——有人等他的回答，等得越来越急。他张开嘴，声带振动了，但没有声音出来。他不记得交出过这个。气流通过但不震动——像按了一个键但没有音。想说的那句话在胸口越变越大，但出口越来越小，最后变成了零。每一次'零'都是他发现管道又窄了一分的瞬间。代价在沉默里一笔一笔地扣。",

            tension: "他目睹了一件不公正的事，身体做出了所有开口的准备动作：站起来、转身、吸气。但最后一步——声音——不在了。他不确定是否已经付完——正义感完好，愤怒完好，勇气完好，唯一缺失的是载体。内容齐全，信封为空。他不知道还有多少个'必须开口'的时刻在等着。写他吸完气之后的姿势。不要让别人替他开口。"
        }
    },
    {
        id: "stake_body_transform",
        name: "形态坍缩", nameEn: "Bodily Transformation",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "物理形态发生不可逆的变异——你的身体不再符合你曾经认同的物种或形态。",
        defEn: "Physical form undergoes irreversible mutation — your body no longer conforms to the species or shape you once identified with.",
        core: "A面：身体的变形有时是内在真相的外化——也许你的外表终于和你灵魂深处那个'不属于这个世界'的秘密对齐了。/ B面：但这种'对齐'不是你选择的。你照镜子看到的不是'新的我'——是'一个逐渐变得不认识的东西'。你的手在变，你的皮肤在变，唯一没变的是那个困在变化中的意识。关键张力：如果你的身体变成了你灵魂的真正形态——你还想变回去吗？ | 代价切口(−Φ): 人类形态的不可逆坍缩——卡夫卡《变形记》的终极法则。",
        coreEn: "A-side: Bodily transformation is sometimes the externalization of inner truth — perhaps your exterior finally aligns with the deep secret of 'not belonging to this world.' / B-side: But this 'alignment' isn't your choice. The mirror doesn't show 'new me' — it shows 'something I'm gradually ceasing to recognize.' Your hands are changing, your skin is changing; the only constant is the consciousness trapped inside the change. Key tension: If your body became your soul's true form — would you still want to change back? | Castration Circuit: The irreversible collapse of human form — Kafka's Metamorphosis as ultimate law.",
        reference: "《变形记》一觉醒来发现自己变成甲虫的格里高尔；《第九区》从人类逐渐变为外星物种的维库斯。",
        referenceEn: "Gregor waking to find himself transformed into a beetle in The Metamorphosis; Wikus gradually transforming from human to alien species in District 9.",

        topology: "交出的不是外貌——而是'被同类识别'的资格。意识还是原来的你，但容器已经不被任何人认出了",

        directive: {
            bright: "写他清醒地看着'熟悉'从身上脱落。用变化后的身体第一次做一件'人类'的事——拿杯子。手指的形状变了，但拿杯子的意图还在。用一种笨拙的新方式完成了动作——成功了，但成功的姿势是陌生的。他在用一个不认识的身体执行一段认识的记忆。他在这个错位里辨认出代价的形状。只写那个笨拙的完成。",

            dark: "写他在水面倒影中撞见代价——看到的不再是一张人类的脸。他不记得交出过这个。在新形状中寻找旧的自己——可能找到了一个细节：眼睛的颜色没变，或某个疤痕还在。抓住这个细节时的力度像溺水的人抓最后一块浮木。每一次'只剩这个没变'都是他发现旧形态又退了一层的瞬间。代价在镜面里一笔一笔地扣。",

            tension: "面前站着一个他认识的人，对方在看他。眼神里有一种从没见过的东西：不确定。他不确定是否已经付完——对方的认知说'这是他'，但本能说'这不是人类'。当理智和本能给出相反答案，信哪个？他不知道还有多少人会露出这种眼神。写他等在那道目光里的姿势。不要让对方触碰他。"
        }
    },

    // ---- 健康/生命丧失：时间轴被强制缩短 ----

    {
        id: "stake_terminal",
        name: "绝症宣判", nameEn: "Terminal Diagnosis",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "被告知你的生物钟只剩有限的余额——死亡从哲学概念变成了日历上可数的格子。",
        defEn: "Informed your biological clock has only a limited balance — death shifts from philosophical concept to countable calendar squares.",
        core: "A面：知道自己什么时候死反而让你拥有了大多数人没有的东西——紧迫感。每一天都不再可以浪费，每一段关系都必须被认真对待。倒计时是最好的效率工具。/ B面：但倒计时也是最残忍的折磨——你开始用'还剩几天'来度量一切。你的笑是'还能笑几次'的笑，你的拥抱是'也许是最后一次'的拥抱。关键张力：如果你知道终点——你是加速奔跑，还是在原地坐下来看风景？ | 代价切口(−Φ): 时间轴被从'无限'切割为'有限'——死神变成了你的日程管理员。",
        coreEn: "A-side: Knowing when you'll die gives you what most lack — urgency. No day can be wasted, every relationship must be taken seriously. The countdown is the most efficient productivity tool. / B-side: But the countdown is also the cruelest torment — you begin measuring everything in 'days remaining.' Your laughter is 'how many laughs left' laughter; your embrace may be 'the last.' Key tension: If you know the endpoint — do you sprint, or sit down and watch the scenery? | Castration Circuit: The timeline is cut from 'infinite' to 'finite' — Death becomes your calendar manager.",
        reference: "《遗愿清单》获得绝症通知后列出'死前必做清单'的两位老人；《我和我的冠军女儿》被疾病倒计时追赶的父亲。",
        referenceEn: "Two elderly men drafting a 'bucket list' after terminal diagnoses in The Bucket List; the father racing against his body's countdown in Dangal.",

        topology: "交出的不是健康——而是'未来是无限的'这个预设。日历最后一页有了页码，死亡从哲学概念变成了格子数",

        directive: {
            bright: "写他清醒地看着'无限'从身上脱落。走出诊室的那段路上注意到了消毒水的味道、护士鞋子的颜色、窗外一棵树的形状——感知过滤器被休克关闭了，所有信息以未经筛选的密度同时涌入。这不是顿悟，是感官的洪水。他在洪水里辨认出代价的形状。不要写珍惜，只写他注视着无限离开。",

            dark: "写他躺在床上时撞见代价——做了一件小计算：还剩N个月，还能看多少次日出。他不记得交出过这个。那个数字不大不小，但它第一次让'日出'变成了有库存限制的消耗品。闭上眼，明天的日出是库存里的第一笔支出。每一次'还剩几次'的计算都是他发现余额又少了一格的瞬间。代价在数字里一笔一笔地扣。",

            tension: "朋友在聊明年的旅行、五年后的房子、退休后的生活。他在听，表情正常。他不确定是否已经付完——他拥有一种对方永远不会有的东西：知道时间有限。对方也知道，但不相信。他相信了，但这个'相信'不是智慧，是诊断书。他不知道还有多少个'长期计划'会刺到他。写他等在对话里的姿势。不要让他告诉朋友。"
        }
    },
    {
        id: "stake_chronic",
        name: "慢性折磨", nameEn: "Chronic Torment",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "不致死的永恒疼痛——身体成为一架你无法关闭的报警器，周而复始地播报着同一条坏消息。",
        defEn: "Non-lethal eternal pain — the body becomes an alarm you cannot shut off, broadcasting the same bad news in perpetual loops.",
        core: "A面：长期疼痛会改变你的忍耐阈值——你能承受的东西远超你自己的想象。持续的痛苦锻造了一种骇人的韧性。/ B面：但慢性疼痛最恶毒的地方在于它不是高潮——它是永恒的中低频嗡鸣。你不会崩溃，你只会被磨得越来越薄，直到某一天你发现自己已经忘了'不疼'是什么感觉。关键张力：你能和永远不会消失的疼痛共存多久——一年、十年、还是余生？ | 代价切口(−Φ): 静默与舒适的永久收缴。",
        coreEn: "A-side: Long-term pain changes your tolerance threshold — you can endure far more than you imagine. Sustained suffering forges a terrifying resilience. / B-side: But chronic pain's real malice is that it's not a climax — it's an eternal low-frequency hum. You don't collapse; you're just worn thinner and thinner until one day you realize you've forgotten what 'no pain' feels like. Key tension: How long can you coexist with pain that will never disappear — a year, a decade, or the rest of your life? | Castration Circuit: Silence and comfort permanently confiscated.",
        reference: "《万箭穿心》在生活的慢性碾压中被一点点磨碎的淑芝；《达拉斯买家俱乐部》与HIV长期共存的牛仔。",
        referenceEn: "Shuzhi slowly ground down by life's chronic crushing in Feng Shui; the cowboy coexisting with HIV long-term in Dallas Buyers Club.",

        topology: "交出的不是舒适——而是'不疼'这个基线状态。身体变成了一台无法关闭的报警器，你是唯一的听众",

        directive: {
            bright: "写他清醒地看着'安静'从身上脱落。在疼痛中发展出一种特殊技能：学会了在波峰之间找到几秒钟的间隙，在间隙里完成需要注意力的事。这种节奏感像一个人在两堵不断靠近的墙之间侧身行走。他在这个节奏里辨认出代价的形状：不是一次性的，是一种永恒的侧身。只写他侧身行走的节奏。",

            dark: "写他在痛得最厉害时撞见代价——没有哭没有叫，把手攥紧了。指甲掐进掌心——用一种可控的疼痛覆盖不可控的疼痛。他不记得交出过这个。脸上的表情平静得几乎日常。这是一个和疼痛谈判了太久的人的脸——不再抗议，在管理。但管理不是接受。每一次'管理'都是他发现基线又升了一级的瞬间。",

            tension: "有人问他'今天感觉怎么样'。他在回答前停了一秒。他不确定是否已经付完——说'还好'是谎言，说'疼'又太小，装不下他每天经历的东西。'疼'和'不疼'之间没有一个词来描述这种永远在疼但已学会在疼中运转的状态。他不知道明天的基线会不会又升一级。写他停顿的那一秒。不要让他找到那个词。"
        }
    },
    {
        id: "stake_aging",
        name: "衰老降临", nameEn: "Aging",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "不是突然的灾难，而是每一天都比前一天少一点点——青春、力量和锐利像沙漏一样无声流走。",
        defEn: "Not sudden catastrophe, but every day a fraction less — youth, strength, and sharpness draining silently like an hourglass.",
        core: "A面：衰老赋予了一种年轻时不可能获得的东西——对有限的感知。只有意识到自己在减少的人，才会真正珍惜剩余的。/ B面：但衰老不是诗意的缓慢——是每天早上醒来发现又有一个'曾经轻松就能做到的事'做不到了。你的身体在一块一块地退出你，而你没有任何手段阻止。关键张力：当你的身体不再听你的话——你是你的身体，还是你的身体只是你暂住的房子？ | 代价切口(−Φ): 时间本身对肉体的逐帧降解。",
        coreEn: "A-side: Aging grants what youth cannot — perception of finitude. Only those who sense they're diminishing truly cherish what remains. / B-side: But aging isn't poetic slowness — it's waking each morning to find another 'thing you used to do easily' now impossible. Your body is exiting you piece by piece, and you have no means to stop it. Key tension: When your body no longer obeys you — are you your body, or is your body merely a house you're temporarily renting? | Castration Circuit: Time itself degrading flesh frame by frame.",
        reference: "《父亲》逐渐失去时间感和空间感的安东尼·霍普金斯；《廊桥遗梦》在衰老中守护一段永远不再重来的激情的弗朗西斯卡。",
        referenceEn: "Anthony Hopkins gradually losing temporal and spatial awareness in The Father; Francesca guarding a passion that will never return as she ages in The Bridges of Madison County.",

        topology: "交出的不是青春——而是每天一点点地交出'曾经轻松就能做到'的事。身体在做微小的减法，每笔都小到几乎不可见",

        directive: {
            bright: "写他清醒地看着一个'能力'从身上脱落——弯腰时膝盖发出以前没有的响声，或读手机时不自觉把屏幕推远了几厘米。他的反应不是悲伤，是带着苦笑的记录感——像在资产负债表上又记下一笔小额支出。每笔都很小，但账户余额的走向已经确定。他在走向里辨认出代价的形状。只写他记下的动作。",

            dark: "写他照镜子时撞见代价——不是看现在的脸，是在和记忆中三年前、五年前的脸做叠加比较。他不记得交出过这些。法令纹深度、眼袋弧度、发际线位移——每个变化都是毫米级，但方向一致。意识到这个方向不可逆时一种安静——不是接受，是数学层面的确认。每一次叠加都是他发现总量又少了一点的瞬间。",

            tension: "和一个年轻人并肩爬楼梯。年轻人毫不费力，他需要多用三秒。他不确定是否已经付完——清楚地记得自己也曾不需要这三秒。那个不需要三秒的人和现在这个是同一个人。身体内部发生了一场无声的替换，被替换的版本没有留下遗言。他不知道下一个'多出来的三秒'什么时候到。写那三秒的重量。不要让年轻人注意到。"
        }
    },
    {
        id: "stake_death",
        name: "死亡", nameEn: "Death",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "主体的物理终结——不是隐喻，不是象征，就是不可逆的生物学事件。",
        defEn: "The subject's physical termination — not metaphor, not symbol, just irreversible biological event.",
        core: "A面：死亡是赋予生命意义的唯一框架——如果你永远不会死，你也永远不会开始活。正因为会结束，所以每一刻才有重量。/ B面：但死亡不在乎你的意义——它只是一个物理过程。它不会等你准备好，不会等你说完最后一句话，不会让你的故事有一个体面的结尾。关键张力：你是为了死亡而活——还是因为死亡在活？ | 代价切口(−Φ): 实在界的终极截面——没有例外、没有续集、没有二刷。",
        coreEn: "A-side: Death is the only framework that gives life meaning — if you'd never die, you'd never start living. Because it ends, every moment has weight. / B-side: But death doesn't care about your meaning — it's just a physical process. It won't wait for you to be ready, won't let you finish your last sentence, won't give your story a dignified ending. Key tension: Are you living for death — or living because of it? | Castration Circuit: The Real's ultimate cross-section — no exception, no sequel, no rewatch.",
        reference: "《入殓师》将每具遗体最后一次尊严化的入殓师小林；《寻梦环游记》关于'真正的死亡是被所有人遗忘'的双重死亡叙事。",
        referenceEn: "Daigo dignifying each body one final time in Departures; the dual-death narrative of 'true death is being forgotten by everyone' in Coco.",

        topology: "交出的不是生命——而是'你'这个坐标点从所有坐标系中被移除。坐标系还在运转，只是不再包含你",

        directive: {
            bright: "写他清醒地看着感知系统做最后的工作——不要写走马灯，写一个极小的细节：被单的纹理、窗帘缝里一条光线的角度、某人手指的温度。整个感知系统把所有剩余电量集中到了最后一个通道上。这个细节不是'最后看到的'，而是'最后被看到的'。他在它的异常清晰里辨认出代价的终极形状。只写那个细节。",

            dark: "写死亡之后的房间——不写死者，写房间。椅子上还有坐过的凹陷，杯子里的水还温，手机屏幕还亮着显示一条没发出去的消息。物件保持着他存在时的状态，但不知道自己在等谁了。空气中他的气味还在——真实的分子还在扩散。但已经没有一个鼻子在专门辨认这种气味了。代价在物件的等待里一笔一笔地扣。",

            tension: "有人在死者物品中发现了一样东西——一张纸条、一个没标签的物件。显然对死者有意义，但活着的人无法破译。他不确定这笔代价是否已经付完——信息完好无损，但密钥被带走了。这是比遗体消失更彻底的一种消失。没人知道还有多少这样的密钥永远丢失了。写活着的人拿着那东西等的姿势。不要让他猜出意义。"
        }
    },
    {
        id: "stake_witness_death",
        name: "目睹死亡", nameEn: "Witnessing Death",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "不是自己死——而是被迫作为目击者，看着至亲或至爱在你面前永恒地终止。",
        defEn: "Not your own death — but forced to witness your dearest permanently terminate right before you.",
        core: "A面：目睹过死亡的人获得了一种活着的人很少拥有的清醒——你再也不会认为'明天总会来'。每次告别都像最后一次——因为你见过它真的是最后一次的样子。/ B面：但这份清醒不是礼物——是一块永远嵌在视网膜上的碎片。你闭上眼看到的不是黑暗，而是那个你没能阻止的画面的无限回放。关键张力：你能把目睹的死亡变成活下去的理由——还是它会变成你无法入睡的理由？ | 代价切口(−Φ): 他者之死的创伤直视——替代性创伤的终极形态。",
        coreEn: "A-side: Those who've witnessed death gain a lucidity the living rarely possess — you never again assume 'tomorrow will come.' Every farewell feels final — because you've seen what 'final' really looks like. / B-side: But this lucidity isn't a gift — it's a shard permanently embedded in your retina. When you close your eyes you see not darkness, but infinite replay of the scene you couldn't prevent. Key tension: Can you turn witnessed death into a reason to keep living — or will it become the reason you can't sleep? | Castration Circuit: Direct exposure to the Other's death — the ultimate form of vicarious trauma.",
        reference: "《辛德勒的名单》在工厂窗口目睹犹太人被屠杀的辛德勒；《海边的曼彻斯特》听到自己的孩子在大火中的父亲。",
        referenceEn: "Schindler watching Jews being massacred from his factory window in Schindler's List; the father hearing his children in the fire in Manchester by the Sea.",

        topology: "交出的不是安全感——而是'闭眼后看到黑暗'的权利。死亡的画面被刻进了视觉系统，从此闭眼看到的都是那个画面",

        directive: {
            bright: "写他清醒地看着'正常闭眼'从身上脱落。回到日常做某件普通的事，一个感官细节触发了回放——某种声音的频率或某种光线的角度。不是电影式闪回，是感官级重叠：此刻的场景和那个场景同时在视网膜上。他等重叠结束后继续做事——这个'继续'需要的力气比任何人看到的都大。他在力气里辨认出代价的形状。",

            dark: "写他在夜晚撞见代价——不敢闭眼，因为闭眼就是放映。睁着眼盯天花板，白色的、此刻的、安全的。但疲劳在拉他的眼皮。他不记得交出过这个。每次眼皮低于某个角度，画面从边缘渗入。用力睁开。又一次。又一次。每一次'用力睁开'都是他发现黑暗的领地又大了一分的瞬间。他知道最终会输给疲劳。",

            tension: "面前站着一个活着的人——他爱的人，正在说话、呼吸、存在。他在看这张脸。但他不确定是否已经付完——看到活着的脸的同时，也看到了那张不再呼吸的脸。两张脸在视野里交替闪烁。每一个活着的面孔都变成了那个画面的半透明遮罩。他不知道还有多少张脸会被覆盖。写他等在闪烁里的姿势。不要让他移开目光。"
        }
    },

    // ---- 自由丧失：肉身的移动权和自决权被物理性剥夺 ----

    {
        id: "stake_life_sentence",
        name: "终身监禁", nameEn: "Life Sentence",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "自由的可能性被永久收缴——你的余生将在一个你无法选择的空间里度过。",
        defEn: "The possibility of freedom permanently confiscated — the rest of your life will be spent in a space you cannot choose.",
        core: "A面：绝对的限制也是绝对的简化——当空间被缩减到几平方米，你会被迫向内在探索。很多人在牢笼里找到了外面永远不会发现的东西。/ B面：但内在探索是文人的浪漫化。真实的终身监禁是每天看着同一堵墙、闻着同一种味道、听着同一种铁门声，你的世界被压缩成一个永恒的'现在'。关键张力：如果你的身体被关住了但你的思想是自由的——你到底是自由的还是不自由的？ | 代价切口(−Φ): 空间自由度的归零——时间变成了纯粹的存量消耗。",
        coreEn: "A-side: Absolute limitation is absolute simplification — when space shrinks to a few square meters, you're forced to explore inward. Many find inside their cage what they'd never discover outside. / B-side: But inward exploration is a writer's romanticization. Real life sentence is seeing the same wall, smelling the same smell, hearing the same iron door daily — your world compressed into perpetual 'now.' Key tension: If your body is locked but your thoughts are free — are you free or not? | Castration Circuit: Spatial freedom zeroed — time becomes pure inventory burn.",
        reference: "《肖申克的救赎》在高墙内耗费二十年挖通隧道的安迪；《基督山伯爵》在伊夫堡地牢中等待十四年的唐泰斯。",
        referenceEn: "Andy spending twenty years tunneling through the wall in The Shawshank Redemption; Dantès waiting fourteen years in the Château d'If dungeon in The Count of Monte Cristo.",

        topology: "交出的不是行动范围——而是'外面'这个概念本身。它从可能性空间中被删除了，世界收缩到了几平方米的体积",

        directive: {
            bright: "写他清醒地看着'开阔'从身上脱落。被关了很久后发展出微观感知——能分辨阳光在墙上移动的速度差异，用天花板裂缝的变化判断季节。这种精密不是适应，是意识被挤压后被迫流向唯一剩余的出口。他在这个出口的窄里辨认出代价的形状。只写他注视着空间离开。",

            dark: "写他在某一天撞见代价——突然意识到已经忘了'外面'长什么样。不是具体场景，是'开阔'这个感觉本身。他不记得交出过这个。试图想象一片没有边界的空间——天空、平原、海面——但想象力已经被四面墙训练得无法展开超过几米的距离。每一次'想不开'都是他发现内部空间又缩了一格的瞬间。代价在墙壁里一笔一笔地扣。",

            tension: "从窗口看到外面一个小片段——一片天空、一只鸟。他和'外面'的唯一连接。他不确定是否已经付完——他和外面的人共享同一片天空，同一个物理空间，但他被排除在可以进入它的名单之外。距离不是问题，权限才是。他不知道还有多少个'看得见进不去'的片段会出现。写他等在缝隙里的姿势。不要让那只鸟飞走。"
        }
    },
    {
        id: "stake_enslavement",
        name: "肉体奴役", nameEn: "Enslavement",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "你的身体不再属于你——它的使用权被另一个人或系统永久性地征用。",
        defEn: "Your body no longer belongs to you — its usage rights are permanently requisitioned by another person or system.",
        core: "A面：在极端奴役中，身体可能被征用了，但某种内在的不屈——你无法奴役一个人的恨意和希望——本身就构成了最后的抵抗。/ B面：但这种'最后的抵抗'是局外人的诗意化。真实的奴役是你的身体如此疲惫，以至于连恨的力气都被剥夺了。你不是'选择屈服'——你是被彻底磨成了一个无条件反射的劳动装置。关键张力：一个连反抗的念头都被体力消耗殆尽的人——和一件工具还有什么区别？ | 代价切口(−Φ): 肉身所有权的彻底让渡。",
        coreEn: "A-side: In extreme slavery, the body may be requisitioned, but a certain inner defiance — you cannot enslave a person's hatred and hope — constitutes the last resistance. / B-side: But this 'last resistance' is an outsider's poeticization. Real slavery means your body is so exhausted that even the energy to hate is stripped. You didn't 'choose to submit' — you were ground into an unconditional-reflex labor device. Key tension: A person too depleted to even think of resistance — how do they differ from a tool? | Castration Circuit: Complete surrender of bodily ownership.",
        reference: "《为奴十二年》被绑架贩卖到南方棉花田的自由黑人所罗门；《芙蓉镇》被迫每天扫大街的知识分子。",
        referenceEn: "Solomon, a free man kidnapped and sold to Southern cotton fields in 12 Years a Slave; the intellectual forced to sweep streets daily in Hibiscus Town.",

        topology: "交出的不是劳动力——而是'我的身体属于我'这个所有格。使用说明书上的名字换了，身体还在但不再是你的",

        directive: {
            bright: "写他清醒地看着'自主'从身上脱落。在被奴役的日常中发现一个微小的自主空间——干活时的特定节奏里藏着一首母亲教的歌。不是旋律，是节奏；不是声音，是肌肉记忆。这是他唯一没有被征用的东西——因为主人不知道它存在。他在不可见性里辨认出代价的形状。只写那个藏在节奏里的歌。",

            dark: "写他抬头看天时撞见代价——一个自发的动作。被注意到了。注意到的人的反应不是暴力，是更精确的东西：提醒。提醒他的眼睛不是用来看天空的。他不记得交出过这个。他慢慢放下石头——不是突然松开，是慢慢松开的。每一次'被提醒'都是他发现自主权又少了一格的瞬间。代价在每个被纠正的自发动作里一笔一笔地扣。",

            tension: "他在干活时旁边有另一个人做同样的事。身体做同样的动作，流同样的汗。但他的脑子在记住每个人的脸、每条路线、每个弱点。他不确定是否已经付完——身体属于他们，但注意力属于自己。他们控制了肌肉，但不知道眼睛在收集什么。收集本身就是主体性的残余。他不知道这个残余还能保持多久。写他观察的姿势。不要让他被发现。"
        }
    },
    {
        id: "stake_forced_bond",
        name: "被迫共生", nameEn: "Forced Bond",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "你的肉身被物理性地绑定在一个你厌恶或恐惧的存在上——无法分离。",
        defEn: "Your body is physically bound to an existence you loathe or fear — inseparable.",
        core: "A面：被迫与不可忍受的他者共存，有时会让你发展出一种意想不到的共情——因为你没有逃避的选择，你只能选择理解。/ B面：但大多数被迫共生不产生理解——只产生缓慢的互相磨损。你不能逃，他也不能逃，你们像两块锁在一起的石头，在彼此的摩擦中一点一点地碎裂。关键张力：和一个你无法摆脱的人被绑在一起——你是学会了爱他，还是学会了比恨更深的东西？ | 代价切口(−Φ): 独立性的物理性剥除——连孤独的权利都被没收。",
        coreEn: "A-side: Being forced to coexist with the intolerable sometimes breeds unexpected empathy — with no option to flee, you can only choose to understand. / B-side: But most forced bonds don't produce understanding — only slow mutual erosion. You can't flee, they can't flee; you're two stones locked together, crumbling in friction. Key tension: Bound to someone you cannot shed — did you learn to love them, or learn something deeper than hate? | Castration Circuit: Independence physically stripped — even the right to loneliness is confiscated.",
        reference: "《桂河大桥》被迫与敌军军官共处并最终产生扭曲尊重的战俘；《灿烂的她》被原生家庭暴力捆绑到无法脱身的女儿。",
        referenceEn: "The POW forced to coexist with the enemy officer and developing twisted respect in The Bridge on the River Kwai; the daughter bound by domestic violence in her origin family in her story.",

        topology: "交出的不是独处权——而是'呼吸不震动别人肋骨'的可能性。两具身体被焊在一起，无法分离",

        directive: {
            bright: "写他清醒地看着'独立'从身上脱落。和被绑定者之间出现第一个非敌意的瞬间——其中一个人睡着时无意识靠在了另一个人肩上。身体在接受这种靠近，意识在抗议。没有推开——不是善意，是推开的力气也需要消耗而他太累了。疲劳比仇恨更诚实。他在疲劳里辨认出代价的形状。只写那个没推开的瞬间。",

            dark: "写他在日常中撞见代价——能闻到对方呼吸、感觉到体温、听到心跳。这些是他不想知道的信息，以物理方式强行输入。他不记得交出过这个。某个时刻发现自己对对方身体细节的熟悉程度超过了任何亲人——知道哪个关节会响、什么时候体温升高。这种知识不是亲密，是被强加的侵入。每一种'不想知道的了解'都是代价。",

            tension: "他们必须一起完成一件事——通过一个狭窄的通道。身体必须配合。他不确定是否已经付完——身体已经学会了配合，动作有了默契，这种默契是肌肉自动生成的，不需要意识批准。身体在背叛意志去信任一个他不想信任的人。他不知道还有多少个'不经批准的默契'会形成。写他们配合时的姿势。不要让协作失败。"
        }
    },
    {
        id: "stake_guinea_pig",
        name: "活体实验", nameEn: "Test Subject",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "从'人'的范畴被重新分类为'实验材料'——你的疼痛成了别人的数据点。",
        defEn: "Reclassified from 'person' to 'experimental material' — your pain becomes someone else's data point.",
        core: "A面：实验的逻辑是'少数人的痛苦换取多数人的答案'——在某种极端的功利主义框架下，这甚至是可辩护的。/ B面：但'可辩护'不等于'可接受'。当你被绑在手术台上时，你不关心这个实验能救多少人——你只关心那个正在切开你的人的手有没有在抖。关键张力：如果你的痛苦真的能拯救一千人——你'应该'自愿吗？如果你不自愿——有人有权强迫你吗？ | 代价切口(−Φ): 从'目的'到'手段'的本体论降级。",
        coreEn: "A-side: The logic of experimentation is 'a few people's pain for the many's answers' — in an extreme utilitarian framework, this is even defensible. / B-side: But 'defensible' doesn't equal 'acceptable.' When you're strapped to the operating table, you don't care how many this experiment saves — you only care whether the person cutting into you has shaking hands. Key tension: If your pain could truly save a thousand — 'should' you volunteer? If you don't — does anyone have the right to force you? | Castration Circuit: Ontological demotion from 'end' to 'means.'",
        reference: "《辛德勒的名单》纳粹集中营中的人体实验受害者；《飞越疯人院》被强制进行脑白质切除术的麦克墨菲。",
        referenceEn: "Victims of human experimentation in Nazi concentration camps in Schindler's List; McMurphy forced to undergo lobotomy in One Flew Over the Cuckoo's Nest.",

        topology: "交出的不是安全——而是'我的疼痛属于我'这个前提。疼痛被重新分类为数据，尖叫被翻译成表格里的数字",

        directive: {
            bright: "写他清醒地看着'主体性'从身上脱落——在实验间隙的等待中做了一件事：开始观察实验者。不是仇恨的凝视，是研究性的观察——看对方的手是否在抖、眼睛是否回避、嘴角是否微颤。他在这种观察中获得一种微弱的主体性：他们在研究我的身体，但我在研究他们的灵魂。他在这个反转里辨认出代价的形状。",

            dark: "写他在疼痛中撞见代价——手指因疼痛蜷缩的同时，实验者的笔尖在表格某栏写下一个数字。他不记得交出过这个。两个动作同步：一个是因，一个是果，但记录上只有果。痛苦被翻译成了信息，翻译完成后痛苦就不再被需要——它已经履行了它的'功能'。每一次'翻译'都是他发现自己又被降了一格的瞬间。",

            tension: "实验者问了他一个问题——'你能感觉到吗'或'从一到十你打几分'。一个需要他作为主体来回答的问题。他不确定是否已经付完——他们需要他的意识来完成实验，需要他感觉到痛苦并报告。他们不能把他完全降为物体，因为物体不会报告。他是一个被要求作证自身降格的主体。写他等在问题里的姿势。不要让他回答。"
        }
    },
    {
        id: "stake_sisyphus",
        name: "永恒劳作", nameEn: "Eternal Labor",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "被锁定在一项没有终点、没有报酬、没有意义的物理劳动中——你的肉身成为燃料。",
        defEn: "Locked into physical labor with no endpoint, no compensation, no meaning — your flesh becomes fuel.",
        core: "A面：加缪说'我们必须想象西西弗斯是幸福的'——在永恒的无意义劳动中，你可以选择创造属于自己的意义，哪怕那个意义只对你一个人有效。/ B面：但加缪没有推过那块石头。真实的永恒劳作不是哲学思考的机会——是肌肉撕裂、关节磨损、意识在疲劳中逐渐降格为一种没有主语的状态。关键张力：如果劳动本身没有意义——你推的那块石头是你的诅咒还是你唯一的同伴？ | 代价切口(−Φ): 存在被压缩为纯粹的物理功输出——西西弗斯的巨石。",
        coreEn: "A-side: Camus said 'we must imagine Sisyphus happy' — in eternal meaningless labor, you can choose to create your own meaning, even if it's valid for you alone. / B-side: But Camus didn't push that boulder. Real eternal labor isn't a philosophical opportunity — it's muscle tearing, joints grinding, consciousness gradually downgraded into a subjectless state. Key tension: If labor itself is meaningless — is the boulder you push your curse, or your only companion? | Castration Circuit: Existence compressed to pure physical output — Sisyphus's boulder.",
        reference: "《1917》在永无止境的战壕泥沼中跋涉的士兵；《活着》一辈子在苦难劳作中耗尽的福贵。",
        referenceEn: "Soldiers wading through endless trench mud in 1917; Fugui exhausting his entire life in suffering and toil in To Live.",

        topology: "交出的不是休息——而是'存在可以不输出功'这个可能性。你从一个有意图的人变成了一个产生力矩的装置",

        directive: {
            bright: "写他清醒地看着'意义'从劳动中脱落——在永恒劳作的某一天发明了一个微小的仪式：每次推到顶端时在心里说一个词，或每次弯腰时数一个数。这个仪式不改变任何外部条件，但在重复中制造了一种私有的节拍。他在这个节拍里辨认出代价的形状：节奏不是意义，但它比无节奏的虚空好。只写那个仪式。",

            dark: "写他在身体极限时撞见代价——肌肉在撕裂，但手没有停。他不记得交出过这个。手不是在执行他的命令，而是在执行惯性——身体自己在运转，像被设定了程序的机器。不再需要意志来推动动作。解脱和恐怖同时存在：解脱是因为不再需要意志力，恐怖是因为不再需要意志力意味着什么。每一次'不需要意志'都是代价。",

            tension: "他在劳作中停了一秒——不是休息，是不自觉的暂停。看到手上的纹路、石头的纹路、汗水落在石头上的痕迹。他不确定是否已经付完——他的汗水和石头纹路之间有物理层面的亲密，身体和这块石头相处的时间比和任何人都长。恨？依赖？还是比两者都更深的共生？他不知道这种共生会不会变成他唯一的关系。写他停顿的那一秒。不要让他推完这一次。"
        }
    },

    // ---- 物质/时间/处境丧失：物理生存条件的根基性剥夺 ----

    {
        id: "stake_destitution",
        name: "一无所有", nameEn: "Destitution",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "全部物质基础瞬间蒸发——不是'变穷'，是连明天吃什么、今晚睡哪里都没有答案。",
        defEn: "All material foundations evaporate instantly — not 'becoming poor,' but having no answer for tomorrow's meal or tonight's shelter.",
        core: "A面：当你什么都没有的时候，你也什么都不怕——恐惧是有产者的特权。赤贫反而给了你一种'反正没了就没了'的暴烈自由。/ B面：但贫穷不是自由——是每一个念头都被'下一顿饭在哪'占满的认知紧缩。你没有精力去思考意义、美、爱情——你的全部CPU都在运算生存。关键张力：是贫穷让人堕落，还是让人压根没有机会'不堕落'？ | 代价切口(−Φ): 物质安全感的彻底蒸发——马斯洛底层的崩塌。",
        coreEn: "A-side: When you have nothing, you fear nothing — fear is the privilege of the propertied. Destitution grants a violent 'nothing left to lose' freedom. / B-side: But poverty isn't freedom — it's every thought consumed by 'where's the next meal,' a cognitive crush. No bandwidth for meaning, beauty, or love — all CPU cycles calculate survival. Key tension: Does poverty cause degradation, or simply deny the chance to 'not degrade'? | Castration Circuit: Material security completely evaporated — Maslow's base level collapses.",
        reference: "《寄生虫》住在半地下室闻着下水道味道的金家；《小偷家族》在社会最底层靠偷窃维持家庭温度的一家人。",
        referenceEn: "The Kim family smelling sewage in their semi-basement in Parasite; the family sustaining warmth through theft at society's bottom in Shoplifters.",

        topology: "交出的不是财富——而是'明天'这个概念本身。它从可用资源中被移除了，全部存在收缩到了'这一顿'的半径",

        directive: {
            bright: "写他清醒地看着'明天'从身上脱落。一无所有后的第一个解决方案——不是宏大计划，是极具体的行动：哪个角落能挡风、哪里能接水、什么时间超市扔还能吃的东西。大脑以前用来想别的事，现在全部算力都在运算生存。他找到今晚的方案坐下来时——不是安心，是极短暂的归位感。他在归位里辨认出代价的形状。",

            dark: "写他路过以前常去的餐厅时撞见代价——透过玻璃看到里面的人在吃饭。他认出了餐具、灯光、摆盘。他不记得交出过这个。站在玻璃外面——这扇门比任何高墙都厚。他以前推过这扇门，手记得推门的触感。他把手插进口袋——不是因为冷，是因为手不知道该放哪里。每一次'手不知道放哪'都是他发现日常又少了一件的瞬间。",

            tension: "有人递给他一个面包。他在接和不接之间停了一秒。他不确定是否已经付完——接过这个动作会把一种他还没准备好接受的身份固定在他身上。手在犹豫的不是面包，是面包附带的分类标签。但胃不在乎标签。他不知道还有多少个这样的标签在等着。写他停在那一秒里的姿势。不要让他做出决定。"
        }
    },
    {
        id: "stake_starvation",
        name: "饥饿", nameEn: "Starvation",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "身体最原始的需求无法被满足——你的内脏开始消化自己。",
        defEn: "The body's most primal need cannot be met — your organs begin digesting themselves.",
        core: "A面：饥饿把一切精神追求都降格为奢侈品——它是最残忍的唯物主义教科书：你现在知道了，你不是你的灵魂，你首先是你的胃。/ B面：但饥饿最可怕的不是疼痛——是它对你道德判断的侵蚀。当你饿到第三天，你开始重新计算你曾经认为不可逾越的底线。关键张力：你饿到什么程度会放弃尊严——三天？七天？还是你永远不会？你敢回答吗？ | 代价切口(−Φ): 文明外壳被饥饿酸液溶解——灵魂的最终物质检验。",
        coreEn: "A-side: Starvation demotes all spiritual pursuits to luxury — it's the cruelest materialist textbook: now you know, you're not your soul, you're first your stomach. / B-side: But starvation's worst horror isn't pain — it's the erosion of moral judgment. By day three, you start recalculating lines you once thought uncrossable. Key tension: How hungry before you abandon dignity — three days? Seven? Or never? Do you dare answer? | Castration Circuit: Civilization's shell dissolved by hunger's acid — the soul's ultimate material test.",
        reference: "《1942》大饥荒中卖儿卖女求生的河南灾民；《荒野生存》在阿拉斯加荒野中被饥饿夺去生命的理想主义者。",
        referenceEn: "Henan famine victims selling children to survive in Back to 1942; the idealist starved to death in the Alaskan wilderness in Into the Wild.",

        topology: "交出的不是饱腹感——而是'道德判断不受身体状态影响'这个幻觉。饥饿在一层层溶解文明镀层",

        directive: {
            bright: "写他清醒地看着'不饿'从身上脱落。饥饿第一天还是一种可以命名的感觉——胃在收缩，注意力漂移，但他还能把'饿'当作对象来观察。食物的记忆变得无比精确：想起三年前某顿饭的每一个细节、温度、气味、咬下去的声音。记忆从来没有这么清晰过。他在这种清晰里辨认出代价的形状。只写记忆的精确。",

            dark: "写他在第N天时撞见代价——走过垃圾桶旁边掉落的半块面包、宠物店橱窗里的狗粮。他不记得交出过这个。他的眼睛在做以前从不做的计算：热量估算。脸上的表情专注、冷静，像工程师评估材料参数。道德判断系统还在运转，但优先级已被排到了'热量摄入'之后。每一次'热量优先'都是他发现文明又薄了一层的瞬间。",

            tension: "面前有食物——但获得它需要做一件他以前绝对不会做的事。他在看那份食物。他不确定是否已经付完——'尊严'在饱腹状态下的含义和在第七天空腹状态下的含义是同一个吗？如果不是——哪个版本更真实？饱着的那个，还是饿着的这个？他不知道明天的底线会不会再退一步。写他看着食物的姿势。不要让他做出选择。"
        }
    },
    {
        id: "stake_exposed",
        name: "身体暴露", nameEn: "Bodily Exposure",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "你的肉体被强制暴露在不可控的环境中——极寒、极热、风雨或公众视线，没有任何遮蔽。",
        defEn: "Your body is forcibly exposed to uncontrollable conditions — extreme cold, heat, storms, or public gaze, with no shelter.",
        core: "A面：被剥去一切遮蔽后，你和环境之间的那层'文明隔膜'消失了——你终于像一个真正的动物那样感受到了世界的温度。原始的、未经过滤的、真实的。/ B面：但人类进化了几万年就是为了给自己加上这层隔膜。当它被强行撕掉时，你发现'文明'不是束缚——是保护。没有它，你不是'更真实'了，你是更脆弱了。关键张力：一个被剥去所有遮蔽的人——是回到了动物的自由，还是跌入了动物的无助？ | 代价切口(−Φ): 文明隔膜的撕除——肉体直接暴露于实在界的无差别碾压。",
        coreEn: "A-side: Stripped of all shelter, the 'civilization membrane' between you and the environment vanishes — you finally feel the world's temperature like a true animal. Raw, unfiltered, real. / B-side: But humans evolved for millennia precisely to add this membrane. When it's ripped away, you find 'civilization' isn't constraint — it's protection. Without it, you're not 'more real'; you're more fragile. Key tension: A person stripped of all shelter — returned to animal freedom, or fallen into animal helplessness? | Castration Circuit: The civilization membrane torn — flesh directly exposed to the Real's indiscriminate crush.",
        reference: "《荒野猎人》在暴风雪中用动物尸体取暖的格拉斯；《房间》被囚禁在狭小空间多年、身体不再属于自己的乔伊。",
        referenceEn: "Glass sheltering in an animal carcass during a blizzard in The Revenant; Joy imprisoned for years in a tiny room, her body no longer her own in Room.",

        topology: "交出的不是衣服——而是'你和世界之间有缓冲层'这个事实。所有隔膜被撕掉，皮肤直接接触原始温度",

        directive: {
            bright: "写他清醒地看着'缓冲'从身上脱落。完全暴露后第一次感受到的天气——不是通过衣服和墙壁过滤的，是直接打在皮肤上的风、渗进骨头的冷。他第一次知道了风不是状态，是力。皮肤在做以前从不需要做的事——成为他和世界之间唯一的界面。他在这种未经过滤的精确里辨认出代价的形状。只写那个力。",

            dark: "写他在长期暴露中撞见代价——皮肤变厚了，指甲变硬了，疼痛阈值升高了。他不记得交出过这个。某个时刻用手摸自己前臂，感觉到了陌生的粗糙——身体不像'人类'的身体了，更像适应了极端环境的动物。身体在他不知道的情况下做出了自己的进化决策，没有征求意识的同意。每一处'变粗糙'都是代价。它在皮肤上一笔一笔地扣。",

            tension: "面前有两种选择：一种可以获得短暂遮蔽但需要付出某种代价，另一种是继续暴露。他不确定是否已经付完——暴露足够长时间后，'遮蔽'本身变得陌生了。身体已经适应了没有遮蔽的状态，重新穿上外壳反而不适。损失变成了常态，常态变成了身份。他不知道还有多少旧常态会被新常态覆盖。写他等的姿势。不要让他做出选择。"
        }
    },
    {
        id: "stake_scapegoat",
        name: "替人受罚", nameEn: "Scapegoat",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "你的肉体承受的惩罚不是因为你的罪——是因为你恰好在系统需要一个出气筒时站在那里。",
        defEn: "The punishment your body endures isn't for your sins — it's because you happened to be standing there when the system needed a punching bag.",
        core: "A面：替罪羊因其无辜而拥有一种绝对的道德优势——你的清白越被忽视，你的道德地位就越不可撼动。/ B面：但道德优势不能阻止鞭子落在你背上。当你无辜的身体正在疼痛时，'历史会证明一切'是一句毫无意义的安慰。关键张力：你是接受成为替罪羊的'崇高命运'——还是你只想停止疼痛？ | 代价切口(−Φ): 因果律的断裂——惩罚不对应罪行，罪行没有惩罚。",
        coreEn: "A-side: The scapegoat possesses absolute moral superiority through innocence — the more your innocence is ignored, the more unassailable your moral standing. / B-side: But moral superiority doesn't stop the whip from landing on your back. When your innocent body is in pain, 'history will prove everything' is a meaningless consolation. Key tension: Do you accept the scapegoat's 'sublime destiny' — or do you just want the pain to stop? | Castration Circuit: Causality fractures — punishment doesn't match crime, crime receives no punishment.",
        reference: "《活着》在各种政治运动的碾压中逐一失去家人的福贵；《耶稣受难记》替全人类承受十字架的受难者。",
        referenceEn: "Fugui losing his family one by one under political campaigns in To Live; the sufferer bearing the cross for all humanity in The Passion of the Christ.",

        topology: "交出的不是清白——而是'惩罚对应罪行'这个因果律。你的身体承受了一笔不属于你的账单",

        directive: {
            bright: "写他清醒地看着'因果正义'从身上脱落。在疼痛中做的不是忍耐而是记录——记住每一下、每种疼痛的形状和位置。这种记录的目的不是报复，是为了有一天能精确证明：这些不是我的。疼痛是他们施加的，但记忆是他自己的。他在记忆的所有权里辨认出代价的形状。只写他记录的精确。",

            dark: "写他在受罚间隙撞见代价——有人递来认罪书要他签。他知道他没有犯那个罪。但不签意味着继续疼痛。他不记得交出过这个。看着那张纸做的不是道德计算，是更原始的物理计算——身体还能承受多少。手指拿着笔，离纸面还有一厘米。每一次'一厘米'都是他发现身体的余额又少了一点的瞬间。代价在那一厘米里一笔一笔地扣。",

            tension: "真正的责任者站在远处——他能看到那个人。那个人也知道他在替他受罚。目光交汇。他不确定是否已经付完——对方眼神里不是愧疚，是感激。感谢他正在替他疼。这种感激意味着在对方世界观里这一切是合理的——有些人天生就是用来替别人疼的。他不知道还有多少道这样的目光在等着。写他等在目光里的姿势。不要让目光断开。"
        }
    },
    {
        id: "stake_hostage",
        name: "成为人质", nameEn: "Hostage",
        group: "C. 肉身的剥离", groupEn: "Real Amputation",
        def: "你的肉身不是目标——是筹码。你的生死取决于另一个你无法控制的人的决定。",
        defEn: "Your body isn't the target — it's the bargaining chip. Your life or death depends on another person's decision, beyond your control.",
        core: "A面：作为人质，你的存在突然变得极其有'价值'——因为有人愿意为你交换某种东西。某种扭曲的方式里，你的生命从来没有像现在这样被重视过。/ B面：但这种'价值'不是你的——是你绑在谁身上的。你不是一个'人'，你是一件可以被标价的抵押品。你的生死不取决于你做了什么，而是取决于电话那头的人愿不愿意付钱。关键张力：当你的命运完全取决于另一个人——你能做的只有等待。而等待本身就是一种慢性死亡。 | 代价切口(−Φ): 自决权的剥离——你的存亡变成他人的博弈变量。",
        coreEn: "A-side: As a hostage, your existence suddenly becomes enormously 'valuable' — someone is willing to trade something for you. In a twisted way, your life has never been so valued. / B-side: But this 'value' isn't yours — it's whose you're tied to. You're not a 'person'; you're a priceable collateral. Your life depends not on what you did but whether the person on the other end of the phone is willing to pay. Key tension: When your fate depends entirely on someone else — all you can do is wait. And waiting itself is a slow death. | Castration Circuit: Self-determination stripped — your survival becomes another's game-theory variable.",
        reference: "《猎凶风河谷》被当作筹码遗弃在荒野中的人质；《密阳》孩子被绑架后等待赎金电话的母亲。",
        referenceEn: "The hostage abandoned as a bargaining chip in the wilderness in Wind River; the mother waiting for the ransom call after her child is kidnapped in Secret Sunshine.",

        topology: "交出的不是命——而是'自己的命由自己决定'这个权利。生死被转换成了别人博弈桌上的筹码",

        directive: {
            bright: "写他清醒地看着'自决权'从身上脱落。在等待中开始观察看守——注意到一个细节：看守者的手也在抖。他在这个发现中获得了意想不到的信息：对方也害怕。他不是唯一没有控制权的人。他在这个发现里辨认出代价的形状：他们都是被更大结构操纵的零件。这不是同情，是一种更冷的东西。只写那双抖着的手。",

            dark: "写他在等待中撞见代价——唯一能做的事是听。墙外的声音、手机铃声、脚步声的节奏。他不记得交出过这个。每次手机响起，身体反应：肌肉紧绷、呼吸暂停、瞳孔放大。然后——不是找他的。肌肉慢慢松弛——这个松弛不是放松，是更深的消耗。每一次虚警都在消耗他的存量。代价在每一次'不是找他的'里一笔一笔地扣。",

            tension: "他听到了谈判的声音——通过墙壁或门缝。有人在讨论他的'价格'。一个数字被提出来了。他不确定是否已经付完——正在讨价还价的人爱他，所以才在谈判。但他的爱正在被翻译成数字。出价太低他会死，出价太高对方会破产。对他的爱有一个精确的货币上限。他不知道那个上限是多少。写他等在墙后的姿势。不要让他听到最终数字。"
        }
    },
];
