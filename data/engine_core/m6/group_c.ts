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
        referenceEn: "The wealthy man left quadriplegic after an accident in The Intouchables; the battlefield medic who loses his legs but keeps his faith in Hacksaw Ridge."
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
        referenceEn: "The Phantom hiding disfigurement behind a mask for life in Phantom of the Opera; Harvey Dent whose moral baseline collapses with half his burned face in The Dark Knight."
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
        referenceEn: "Blind masseurs rebuilding their world through touch in Blind Massage; Beethoven continuing to compose symphonies as he goes deaf."
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
        referenceEn: "The mute cleaner expressing love with her whole body in The Shape of Water; George VI imprisoned by his stammer, unable to exercise the king's voice in The King's Speech."
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
        referenceEn: "Gregor waking to find himself transformed into a beetle in The Metamorphosis; Wikus gradually transforming from human to alien species in District 9."
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
        referenceEn: "Two elderly men drafting a 'bucket list' after terminal diagnoses in The Bucket List; the father racing against his body's countdown in Dangal."
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
        referenceEn: "Shuzhi slowly ground down by life's chronic crushing in Feng Shui; the cowboy coexisting with HIV long-term in Dallas Buyers Club."
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
        referenceEn: "Anthony Hopkins gradually losing temporal and spatial awareness in The Father; Francesca guarding a passion that will never return as she ages in The Bridges of Madison County."
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
        referenceEn: "Daigo dignifying each body one final time in Departures; the dual-death narrative of 'true death is being forgotten by everyone' in Coco."
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
        referenceEn: "Schindler watching Jews being massacred from his factory window in Schindler's List; the father hearing his children in the fire in Manchester by the Sea."
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
        referenceEn: "Andy spending twenty years tunneling through the wall in The Shawshank Redemption; Dantès waiting fourteen years in the Château d'If dungeon in The Count of Monte Cristo."
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
        referenceEn: "Solomon, a free man kidnapped and sold to Southern cotton fields in 12 Years a Slave; the intellectual forced to sweep streets daily in Hibiscus Town."
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
        referenceEn: "The POW forced to coexist with the enemy officer and developing twisted respect in The Bridge on the River Kwai; the daughter bound by domestic violence in her origin family in her story."
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
        referenceEn: "Victims of human experimentation in Nazi concentration camps in Schindler's List; McMurphy forced to undergo lobotomy in One Flew Over the Cuckoo's Nest."
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
        referenceEn: "Soldiers wading through endless trench mud in 1917; Fugui exhausting his entire life in suffering and toil in To Live."
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
        referenceEn: "The Kim family smelling sewage in their semi-basement in Parasite; the family sustaining warmth through theft at society's bottom in Shoplifters."
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
        referenceEn: "Henan famine victims selling children to survive in Back to 1942; the idealist starved to death in the Alaskan wilderness in Into the Wild."
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
        referenceEn: "Glass sheltering in an animal carcass during a blizzard in The Revenant; Joy imprisoned for years in a tiny room, her body no longer her own in Room."
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
        referenceEn: "Fugui losing his family one by one under political campaigns in To Live; the sufferer bearing the cross for all humanity in The Passion of the Christ."
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
        referenceEn: "The hostage abandoned as a bargaining chip in the wilderness in Wind River; the mother waiting for the ransom call after her child is kidnapped in Secret Sunshine."
    },
];
