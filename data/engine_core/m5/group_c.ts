import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_C: LibraryItemDef[] = [
    // ============================================================
    // GROUP C. 穿透的驱力 (The Penetration) — 20 Items
    // 能量不绕行也不环绕，而是直接穿透——看穿、说穿、刺穿。
    // 穿透不等于攻击。洞察是穿透，共情是穿透，命名也是穿透。
    // 光谱：认知性穿透(1-7) → 表达性穿透(8-13) → 侵入性穿透(14-20)
    // ============================================================

    // ---- 认知性穿透：用目光、直觉和理解力抵达事物的内部 ----

    {
        id: "drv_insight",
        name: "洞察", nameEn: "Insight",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "一眼看穿表象之下的结构。不是猜测，是看见。",
        defEn: "Seeing through appearance to the structure beneath. Not guessing, but seeing.",
        core: "A面：洞察是认知的穿甲弹——别人看表情，你看到恐惧；别人看政策，你看到利益链。这种'看穿'让你永远先人一步。/ B面：但看太清活得很苦——看穿微笑背后的算计，就再无法享受单纯。关键张力：看穿一切的代价是无法信任——这种清醒值得吗？ | 驱力脉动(Trieb): 看穿——必须看透表面之下是什么，哪怕知道后更痛。",
        coreEn: "A-side: Insight is cognition's armor-piercing round — seeing the fear behind expressions, the interests behind policy. This keeps you ahead. / B-side: But seeing too clearly brings pain — seeing the calculation behind every smile ruins its simplicity. Key tension: If seeing everything costs your ability to trust — is clarity worth it? | Drive Circuit (Trieb): Piercing — must see beneath the surface, even if it hurts.",
        reference: "《沉默的羔羊》汉尼拔一眼看穿克拉丽丝童年创伤的诊断式凝视；《社交网络》扎克伯格瞬间看穿社交行为底层逻辑的程序员直觉。",
        referenceEn: "Hannibal's diagnostic gaze instantly reading Clarice's childhood trauma in Silence of the Lambs; Zuckerberg's programmer intuition seeing through social behavior logic in The Social Network.",
        topology: "X光穿透：能量以直线穿过不透明体——不折射不反射，直接看到内部骨架，但穿透者的视网膜也被辐射永久改变了",
        directive: {
            bright: "写他的目光落在对方身上的那一秒——不是扫视而是穿透，像针进入皮肤：表情下面是肌肉，肌肉下面是骨头，骨头下面是恐惧。写他看到结构的快感——混乱的表象在他眼前自动分层，像解剖图一样清晰。不要写'聪明'——写一种无法关闭的感知：他不是选择看穿的，是无法不看穿。让他的洞察像呼吸一样自然，像呼吸一样无法停止。",
            dark: "写他在聚会上看到每个人微笑后面的算计、拥抱后面的利用、友善后面的恐惧——然后写他找不到一个不透明的人。写那种疲惫：不是看不清而是看得太清，世界在他眼里是一具没有皮肤的身体，所有的内脏都暴露在外。用一个日常细节锚定：他已经很久没有被任何人的话惊讶过了，这让他怀疑自己是不是已经失去了信任的能力。",
            tension: "场景锚点：他看穿了一个人——但那个人也看穿了他。悖论不是'看清vs.看不清'——而是：他看到的'真相'是对方的真相，还是他自己认知框架的投影？他把一切解读为恐惧和算计，也许是因为恐惧和算计是他自己最熟悉的东西。写两个洞察者对视时的僵局：两面镜子互相反射，看到的只是无限后退的自己。"
        }
    },
    {
        id: "drv_empathy",
        name: "共情", nameEn: "Empathy",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "穿透他人的外壳，感受他的内在。不是同情，是'成为他'的瞬间。",
        defEn: "Penetrating another's shell to feel their interior. Not sympathy, but the instant of 'becoming them.'",
        core: "A面：共情是最温柔的穿透——放弃自我视角，从他的眼睛看。那刻你就是他的痛苦，这是人类最珍贵的天赋。/ B面：但深度共情者边界脆弱——太擅长感受别人，分不清情绪是谁的。你变成了吸满别人情绪的海绵。关键张力：共情是能力，还是无法建立自我边界的症状？ | 驱力脉动(Trieb): 穿越——溶解自我边界，住进别人身体。",
        coreEn: "A-side: Empathy is the gentlest penetration — temporarily surrendering your perspective. In that moment, you don't 'understand' their pain; you ARE their pain. / B-side: But deep empaths have fragile boundaries — so skilled at feeling others you can't tell which emotions are yours. Key tension: Is empathy a pure ability, or a symptom of failing to build self-boundaries? | Drive Circuit (Trieb): Crossing — temporarily dissolving borders to inhabit another.",
        reference: "《入殓师》通过触碰遗体感受逝者最后尊严的入殓师；《心灵捕手》'这不是你的错'穿透了防御直抵创伤核心的瞬间。",
        referenceEn: "A mortician feeling the deceased's final dignity through touch in Departures; 'It's not your fault' piercing all defenses to reach the trauma core in Good Will Hunting.",
        topology: "膜渗透：能量不破壁而是溶解自我边界后渗入对方——两个容器之间的膜变薄直到液位平衡，但平衡之后他分不清哪些液体是自己的",
        directive: {
            bright: "写他的身体开始复制对方的姿态——不是模仿而是不自觉的同步：对方缩肩他也缩肩，对方的呼吸节奏传染到他胸腔里。写那种温暖的溶解感：自我的边界像冰在体温中融化，他暂时不是他自己了，他是对方的痛苦本身。让这个过程是安静的——不需要话语，只需要在场。写他眼眶湿润时自己也不知道是替谁哭。",
            dark: "写他从对方身边离开后仍然背着对方的情绪——像衣服吸了雨水，脱下来之后皮肤还是湿的。写他在地铁上突然感到一种不属于自己的悲伤，然后花了二十分钟才意识到那是三小时前一个朋友的情绪。写他试图建立边界的失败：他告诉自己'这不是我的感觉'，但身体不听——胃在绞，是替一个他甚至不喜欢的人绞的。",
            tension: "场景锚点：他完美地感受到了对方的痛苦——但对方说'你根本不懂'。悖论不是'感受到vs.没感受到'——而是：他感受到的那个痛苦，经过他的神经系统翻译之后，还是原来的痛苦吗？共情也许只是最精致的自恋——用别人的伤口感受自己的敏感。写他突然意识到：他需要对方的痛苦，比对方需要他的共情更多。"
        }
    },
    {
        id: "drv_deciphering",
        name: "解谜", nameEn: "Deciphering",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "穿透加密的信息，从碎片中拼出隐藏的意义。",
        defEn: "Penetrating encrypted information, assembling hidden meaning from fragments.",
        core: "A面：解谜者坚信混乱之下必有秩序——随机线索间有隐形线，足够耐心就能拉出。这信念本身就是力量。/ B面：但'一切皆有解释'也可能是病——在随机中强行找规律，把巧合编成阴谋。世界也许没那么有序。关键张力：你找到的模式是真实的，还是大脑无法忍受混乱而编造的？ | 驱力脉动(Trieb): 破解——必须打开每把锁，哪怕门后什么都没有。",
        coreEn: "A-side: The decipherer believes chaos hides order — linking random clues with patience. This faith itself is a force. / B-side: But the obsession that 'everything has an explanation' can be pathological — forcing patterns onto randomness, weaving coincidence into conspiracy. Key tension: Is the pattern you found real, or did your brain fabricate it because it cannot tolerate chaos? | Drive Circuit (Trieb): Cracking — must open every lock, even if nothing lies behind.",
        reference: "《杀人回忆》在泥泞的证据中拼命寻找连环凶手逻辑的刑警；《达芬奇密码》从艺术作品中解读出千年秘密的符号学家。",
        referenceEn: "Detectives desperately seeking serial killer logic in muddy evidence in Memories of Murder; a symbologist decoding millennia-old secrets from art in The Da Vinci Code.",
        topology: "碎片重组：能量在散落的断片之间跳跃——不是线性推理而是同时看到所有碎片后等待它们自行拼合，但拼合后的图案也许只是他投射上去的",
        directive: {
            bright: "写他面前铺满碎片的那张桌子——照片、笔记、断裂的时间线——然后写他的眼睛在碎片之间做的那种高速跳跃。写那个瞬间：两个不相关的细节突然在他脑中接通，像电路闭合。他的手指移动碎片的速度开始加快，嘴唇在无声地说着什么。不要写结论——写追踪本身的亢奋：线索还没指向答案，但它们开始指向彼此。",
            dark: "写第七个月他还在盯着同一面墙上的同一些碎片——线索之间的连线被他画了又擦、擦了又画，墙面已经看不出原来的颜色了。写他开始在随机事件中看到模式：车牌号码、超市收据、天气预报，所有东西都像在对他说话。写他妻子发现他凌晨三点坐在地上把报纸上的字母剪下来重新排列。他说'快了，马上就能看到了'——但他已经不记得自己在找什么了。",
            tension: "场景锚点：他拼出了完整的图——但另一个人用同样的碎片拼出了完全不同的图案。悖论不是'有答案vs.没答案'——而是：碎片本身没有唯一的拼法，所有的'解'都是解谜者的形状而不是谜题的形状。写他看着两幅同样自洽的图案时的崩溃：如果模式是他放进去的，那他解的不是谜，是自己。"
        }
    },
    {
        id: "drv_diagnosis",
        name: "诊断", nameEn: "Diagnosis",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "穿透症状找到病因。不是治愈——是精确地说出'你到底怎么了'。",
        defEn: "Penetrating symptoms to find the cause. Not curing — but precisely naming 'what is wrong with you.'",
        core: "A面：诊断是最精确的穿透——不需治愈，只需说出名字。当人知道自己'怎么了'，痛苦变得可理解，命名即解放。/ B面：但诊断也是暴力——用标签把活人钉死在分类表上。他不再是'人'而是'病例'。关键张力：诊断是帮他理解自己，还是用你的框架替代他的自我认知？ | 驱力脉动(Trieb): 命名——给不可名状的痛苦一个名字。",
        coreEn: "A-side: Diagnosis is the most precise penetration — when someone finally knows 'what's wrong,' pain becomes comprehensible. Naming is liberation. / B-side: But diagnosis can become violence — pinning a living person to a chart. They are no longer a 'person' but a 'case.' Key tension: Are you helping them understand themselves, or replacing their self-knowledge with your rigid framework? | Drive Circuit (Trieb): Naming — giving unspeakable pain a set definition.",
        reference: "《飞越疯人院》医疗系统用'诊断'将正常人永久囚禁的权力；《豪斯医生》穿透所有谎言和误诊找到隐藏病因的偏执天才。",
        referenceEn: "The medical system imprisoning the sane through 'diagnosis' in One Flew Over the Cuckoo's Nest; a paranoid genius piercing lies and misdiagnoses to find the hidden cause in House M.D.",
        topology: "定点穿刺：能量集中在一个极细的点上刺入——不是广域扫描而是锁定病灶后的精确穿透，但穿刺点由诊断者选择，这个选择本身就是权力",
        directive: {
            bright: "写他的目光在对方身上移动时那种系统性的扫描——不是看人而是看症状：肤色、姿态、呼吸频率、指甲的形状。写他脑中的排除法像关灯一样逐个熄灭错误答案，直到只剩一个亮着的。写他说出诊断时的声音——平静、精确、没有情绪，像手术刀落在正确的位置。让那个名字给对方带来的不是恐惧而是释然：终于有人说出来了。",
            dark: "写他给出诊断之后对方眼里的变化——从'一个有问题的人'变成'一个病例'。写那个标签像纹身一样印上去就洗不掉：所有后续行为都会被这个诊断解释，包括反对诊断本身也会被解释为'症状'。写他开始享受诊断的权力——不是因为准确，而是因为命名本身给了他高于对方的位置。他的框架变成了对方唯一被允许使用的语言。",
            tension: "场景锚点：他完成了精确的诊断——但对方说'你说的都对，但那不是我'。悖论不是'诊断对vs.诊断错'——而是：诊断捕捉了症状的结构，却遗漏了痛苦的质地。准确的标签和真实的理解之间隔着一整个人。写他拿着正确的诊断书站在对方面前，却突然意识到：他知道对方怎么了，但不知道对方是谁。"
        }
    },
    {
        id: "drv_prophecy",
        name: "预言", nameEn: "Prophecy",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "穿透时间的屏障，看到尚未发生的事。",
        defEn: "Penetrating the barrier of time to see what hasn't yet happened.",
        core: "A面：预言是对未来的穿透——看到别人看不到的因果链并敢于说出。真预言家是对当下理解极深的人。/ B面：但预言是最孤独的穿透——说出来没人信。越正确越被当疯子。关键张力：预见灾难却无法阻止——知道未来是力量还是诅咒？ | 驱力脉动(Trieb): 预见——被迫看见所有人都还看不到的东西。",
        coreEn: "A-side: Prophecy penetrates the future — true prophets understand the present so deeply they can project forward, seeing hidden causal chains. / B-side: But prophecy is lonely — the more correct you are, the more you're treated as mad. Key tension: If you foresee disaster but cannot prevent it — is knowing the future a power or a perpetual curse? | Drive Circuit (Trieb): Foreseeing — forced to see what no one else can perceive yet.",
        reference: "《卡桑德拉》被诅咒说出真相却永远不被相信的先知；《降临》获得了外星语言后能看到自己女儿未来死亡的语言学家。",
        referenceEn: "Cassandra cursed to speak truth yet never be believed; a linguist seeing her daughter's future death after acquiring the alien language in Arrival.",
        topology: "时间穿透：能量不在空间中而是在时间中穿行——穿过当下的屏障看到尚未凝固的事件，但看到的人被锁在当下的身体里无法前往他看到的地方",
        directive: {
            bright: "写他的眼睛突然失焦的那个瞬间——不是在看眼前的东西而是在看还不存在的东西。写那种确定性像水一样灌满他的身体：不是推理出来的结论，是直接'看到了'。他的声音在说出预言时变得异常平静，因为对他来说那不是预测而是描述——他在描述一件已经发生的事，只是别人还不知道。让他的平静比任何激动都更有说服力。",
            dark: "写第一百次说出警告后对方笑着说'你想太多了'的那种沉默。写他开始怀疑：也许不是他们不信，是他不该看到。写他试图不再看——闭上眼睛、回避信息、拒绝思考——但预见像耳鸣一样无法关闭。他知道灾难会来，知道没人会听，也知道灾难来了之后他们会说'你怎么不早说'。写他坐在窗前看着正常运转的城市，像一个已经看过结局的观众坐在电影院里。",
            tension: "场景锚点：他预言的事发生了——但发生的方式和他看到的不一样。悖论不是'看到了vs.没看到'——而是：他看到的'未来'在他看到它的那一刻就已经被他的观看改变了。预言本身成了因果链的一部分。写他站在废墟中意识到：如果他没有预言，也许灾难会以另一种形式发生，也许更轻，也许更重——但绝不会是现在这个样子。他的预见没有阻止什么，只是重塑了它。"
        }
    },
    {
        id: "drv_epiphany",
        name: "顿悟", nameEn: "Epiphany",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "突然穿透长久的困惑，一切豁然开朗。那个瞬间，世界重组了。",
        defEn: "Suddenly piercing through long confusion. In that instant, the world reorganizes.",
        core: "A面：顿悟是认知的地震——不是渐进学习，是所有拼图瞬间到位。看见一直在眼前却未注意的东西。这改变的是你整个人。/ B面：但顿悟也可能是幻觉——大脑渴望意义时会制造假'啊哈时刻'。也许只是焦虑找到了安放框架。关键张力：顿悟是触碰真理，还是大脑为止痛编造的药？ | 驱力脉动(Trieb): 闪电——那一秒，所有灯同时亮起。",
        coreEn: "A-side: Epiphany is a cognitive earthquake — all puzzle pieces snapping into place at once. You see what was always there, reorganizing your entire being. / B-side: But epiphany can be illusion — the anxious brain manufactures false 'aha moments' to find a safe frame. Key tension: Did your epiphany touch truth, or is it a placebo your brain invented to stop the pain of uncertainty? | Drive Circuit (Trieb): Lightning — all lights switching on simultaneously in one second.",
        reference: "《美丽心灵》纳什突然意识到小女孩永远没有长大的那个顿悟瞬间；《楚门的世界》楚门发现海平线是一面墙的时刻。",
        referenceEn: "Nash's epiphany when he realizes the little girl never ages in A Beautiful Mind; Truman discovering the horizon is a wall in The Truman Show.",
        topology: "相变跃迁：能量在同一状态中持续积累直到突破临界点——不是渐变而是瞬间跳到另一个能级，跳过去之后无法跳回来，因为旧的能级已经不存在了",
        directive: {
            bright: "写那个瞬间之前的最后一秒——一切还是旧的：旧的理解、旧的世界、旧的自己。然后写那个裂缝：一个细节突然从背景中跳出来，像拼图最后一块落进去的声音。写他的呼吸停了一拍——不是震惊而是整个认知系统在重启。世界没有变，但他看世界的那双眼睛换了一副镜片。让顿悟不是高潮而是安静的：最深的理解不需要惊叫，只需要一句'原来如此'。",
            dark: "写顿悟之后他试图回到不知道的状态——但门已经关了。写他开始怀念不知道的时候：那时候世界虽然困惑但至少是完整的，现在他知道了真相，但真相把世界切成了两半。写他看着身边那些还没有顿悟的人，感到一种无法分享的孤独——他没法把看到的东西放回去，也没法递给别人。用一个细节锚定：他开始回避那些会触发顿悟的场景，因为每一次理解都让世界变得更薄。",
            tension: "场景锚点：他顿悟了——但一周后开始怀疑那个顿悟是假的。悖论不是'理解了vs.没理解'——而是：顿悟的感觉和真正的理解可能毫无关系。大脑在焦虑中制造'啊哈时刻'就像发烧时制造幻觉——目的不是认知而是止痛。写他坐在那个改变一切的'发现'面前，无法确定自己是触碰了真理还是只是大脑终于找到了一个让焦虑停下来的故事。"
        }
    },
    {
        id: "drv_translation",
        name: "翻译", nameEn: "Translation",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "穿透语言的壁垒，把一种理解转化为另一种。不只是语言之间——是世界之间。",
        defEn: "Piercing through language barriers, converting one understanding into another. Not just between languages — between worlds.",
        core: "A面：翻译是最谦逊的穿透——不说自己的话，而是用此语言重建彼语言的世界。好翻译者活在两个宇宙，是永恒的中间人。/ B面：但每次转化都是背叛、失真。你用的每个词都染上你的世界观。关键张力：完美翻译可能吗？还是所有理解皆为近似，我们永活在误解中？ | 驱力脉动(Trieb): 转译——在两端架起必然有裂缝的桥。",
        coreEn: "A-side: Translation is humble penetration — rebuilding one language's world in another, acting as an eternal intermediary across two universes. / B-side: But conversion is betrayal — every word chosen inevitably carries your own worldview, distorting the original. Key tension: Is perfect translation possible, or is all understanding mere approximation, leaving us forever in misunderstanding? | Drive Circuit (Trieb): Transposing — building a bridge that is necessarily cracked.",
        reference: "《降临》尝试翻译外星语言从而改变自身时间感知的语言学家；《巴别塔》四组不同语言的人在同一个悲剧中无法互相理解。",
        referenceEn: "A linguist translating alien language thereby altering her own time perception in Arrival; four groups unable to understand each other within the same tragedy in Babel.",
        topology: "双腔共振：能量在两个不同频率的腔体之间传导——翻译者的身体就是那根导管，两种频率同时在他体内共振，但没有一种是他自己的原生频率",
        directive: {
            bright: "写他在两种语言之间寻找对应物的过程——不是查字典而是在自己身体里切换感知模式：用这种语言思考时世界是方的，用那种语言思考时世界是圆的。写他找到那个精确对应的词时的满足——两个不同宇宙的概念在他手中像齿轮一样咬合。让他的快乐是安静的匠人式的快乐：他知道自己是两个世界之间唯一的桥，桥虽然窄，但有人在走。",
            dark: "写他在两种语言之间悬浮太久之后失去了母语的那种恐慌——一个词明明认识却突然感到陌生，像照镜子看到了一张不认识的脸。写他开始意识到他不是在两个世界之间架桥，而是他自己就是那条裂缝：两边都踩着，但哪边都站不稳。写他翻译最亲密的对话时的异化感——把'我爱你'翻译成另一种语言后，他不确定那还是不是同一句话了。",
            tension: "场景锚点：他完成了一次完美的翻译——双方都满意——但他知道他改了一个词。悖论不是'忠实vs.背叛'——而是：完全忠实的翻译是不可能的，每一次转化都是一次微小的篡改，而这些篡改累积起来就是一个从未被说出的第三种意义。他翻译的不是对方的话，是他自己对那些话的理解。写他在两种语言之间发现了一个只属于翻译者的孤独空间——那些无法被任何一种语言接住的含义，只有他一个人听到了。"
        }
    },

    // ---- 表达性穿透：用说出真相、揭露和教导穿透他人的防御 ----

    {
        id: "drv_confession",
        name: "坦白", nameEn: "Confession",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "说出你一直隐藏的真相。不是被逼的，而是你自己决定不再藏了。",
        defEn: "Speaking the truth you've always hidden. Not forced, but choosing to hide no longer.",
        core: "A面：坦白是对自己最暴力的穿透——撕开外壳让人看到不完美的真实。完全裸露的瞬间让你第一次感到自由。/ B面：但坦白也可能是自私——卸下负担转移给对方。是为他好还是为不再内疚？关键张力：有些真相说出对所有人都更糟——你坦白的权利大于他不知情的权利吗？ | 驱力脉动(Trieb): 坦白——把自己劈开给人看。",
        coreEn: "A-side: Confession is violent self-penetration — tearing open your shell to reveal imperfect truth. This nakedness finally brings freedom. / B-side: But confession can be selfish — unloading your psychological burden onto the listener's shoulders. Key tension: If a truth makes everything worse for everyone — does your right to confess outweigh their right not to know? | Drive Circuit (Trieb): Unveiling — splitting yourself open for others, just to be free of it.",
        reference: "《赎罪》一生都在为一个童年的虚假指控寻求坦白和赎罪的作家；《海边的曼彻斯特》无法说出也无法不说出那场火灾真相的父亲。",
        referenceEn: "A writer spending her life seeking confession for a childhood false accusation in Atonement; a father who can neither speak nor silence the truth of the fire in Manchester by the Sea.",
        topology: "内压破裂：能量在密封容器内持续增压——不是向外穿透而是从内部胀裂自己，裂口的形状就是秘密被保守时积累的压力的形状",
        directive: {
            bright: "写他开口之前胸腔里的物理压力——秘密像一块实体占据着空间，每次呼吸都要绕过它。然后写决定说出来的那个瞬间不是勇气而是一种生理性的无法继续——他的身体先于意志做出了选择。写第一个字离开嘴唇时的重量，然后写后面的话像洪水一样跟出来——堤坝只要有一个裂口就挡不住了。让他说完之后的空虚是干净的：不是轻松，是终于腾出了身体里被占据的那个空间。",
            dark: "写他坦白之后对方脸上的变化——不是他想象中的释然或原谅，而是一种他没有预料到的东西：对方被迫接住了他扔出来的重量。写他意识到坦白是一种转移：他的秘密离开了他的身体，但它去了哪里？它进入了对方的身体。他自由了，但对方从此带着他的秘密活着。写那种更深的罪疚：原来坦白不是结束痛苦，是把痛苦的地址改了。",
            tension: "场景锚点：他坦白了全部真相——但说完后发现自己说出的版本和记忆中的不一样。悖论不是'说vs.不说'——而是：语言在把秘密从身体里搬出来的过程中改变了它的形状。他以为自己在坦白事实，但嘴巴在说话时做了无数个微小的编辑——省略了一个细节、调整了一个顺序、选择了一个更能被接受的词。写他盯着对方的眼睛时想：我说的都是真的，但'真的'被说出来之后还是真的吗？"
        }
    },
    {
        id: "drv_speaking_truth",
        name: "直言", nameEn: "Speaking Truth",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "说出没人敢说的话。不是为了冒犯——而是因为沉默比说出来更有害。",
        defEn: "Saying what no one dares to say. Not to offend — but because silence is more harmful than speaking.",
        core: "A面：直言者是唯一清醒的人——只有你指着大象说是大象。需要勇气更是痛苦的清醒：不说代价更大。/ B面：但你以为在说真话，也许是用'诚实'当武器。关键张力：说真是为了改变，还是因无法忍受虚伪？若真相只带来伤害——还该说吗？ | 驱力脉动(Trieb): 直说——宁愿被恨也不愿被误解。",
        coreEn: "A-side: The truth-speaker is the only sober one — pointing out the elephant while others pretend. It stems from painful clarity: silence costs more. / B-side: But separating frankness from cruelty is hard — you may be weaponizing 'honesty' to wound. Key tension: Do you speak truth to change reality, or because you can't tolerate hypocrisy? If truth only harms, should you still speak? | Drive Circuit (Trieb): Bluntness — rather be entirely hated than continually misunderstood.",
        reference: "《十二怒汉》在所有人都投了有罪票之后坚持说'不'的那个人；《聚焦》不顾教会压力将神职人员性侵丑闻公之于众的记者。",
        referenceEn: "The one person who insists 'not guilty' when everyone else has voted in 12 Angry Men; journalists publishing clergy abuse scandals despite church pressure in Spotlight.",
        topology: "声波穿墙：能量以声音的形态穿过固体屏障——沉默是墙，直言是频率足够低的声波，低到可以穿过任何物质，但穿过之后声源本身在震动中碎裂",
        directive: {
            bright: "写他开口之前房间里的沉默——那种所有人都知道却没人愿意说的沉默，厚得像棉花塞在每个人嘴里。然后写他的声音切入这种沉默时的物理效果：不是高声而是清晰，每个字都像刀落在砧板上。写他周围的空气在他说完之后变了——不是因为他说的内容，而是因为'有人说了'这个事实本身改变了房间的压力。让他的勇气不是英雄式的，是被迫的：他不是想说，是不说会比说更不可忍受。",
            dark: "写他每一次直言之后失去的东西——一个朋友、一次机会、一份信任。写他开始计算：这次说真话值不值？这个计算本身让他恶心，但他没法停止计算了。写他发现自己开始享受直言带来的道德优越感——'我是唯一一个说真话的人'这个身份比真话本身更让他上瘾。写他在一次聚会上又一次'指出真相'之后回到家，看着镜子里的自己，不确定刚才那句话是良知还是攻击。",
            tension: "场景锚点：他说了真话——对方崩溃了。悖论不是'说vs.不说'——而是：他有说的权利，但对方也有不在此刻听到的权利。真相不是任何时候都适合出现的。写他看着崩溃的对方时的认知裂缝：他说的是对的，但'对的'在错误的时间说出来就变成了一种暴力。直言和残忍之间的距离，也许只是一个时间差。"
        }
    },
    {
        id: "drv_exposure",
        name: "揭露", nameEn: "Exposure",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "把隐藏的真相拖到阳光之下。让所有人都看到。",
        defEn: "Dragging hidden truth into sunlight. Making everyone see.",
        core: "A面：揭露是穿透的公共化——不仅看穿真相，还要所有人看到。这需要道德确信：'公众有权知道'。/ B面：但揭露者常低估真相的破坏力——你打开魔盒却无法控制结果。有些真相摧毁的是无辜者。关键张力：你有权揭露真相——但有义务考虑谁会受伤吗？ | 驱力脉动(Trieb): 揭穿——必须把灯打开，不管谁被光灼伤。",
        coreEn: "A-side: Exposure is penetration made public — ensuring everyone sees the truth, driven by the moral certainty that 'the public has a right to know.' / B-side: But exposers often underestimate the blast radius — opening Pandora's box without controlling the fallout, sometimes destroying innocents. Key tension: You have the right to expose truth, but who exactly pays the price? | Drive Circuit (Trieb): Unmasking — must turn on the lights, regardless of who is blinded.",
        reference: "《华盛顿邮报》冒着被政府起诉的风险发表五角大楼文件的报纸；《熔炉》揭露聋哑学校系统性虐待的教师。",
        referenceEn: "A newspaper risking government prosecution to publish Pentagon Papers in The Post; a teacher exposing systematic abuse at a school for the deaf in Silenced.",
        topology: "强光暴露：能量转化为不可遮挡的光源——光不穿透物体而是消除阴影，被藏在暗处的东西不是被刺穿而是被照亮，但灯被打开之后打开灯的手也暴露了",
        directive: {
            bright: "写他按下发布键之前手指悬停的那三秒——不是犹豫而是最后确认：这件事被看见比我的安全更重要。写真相被公开后的连锁反应像水波一样扩散：第一个人的表情是震惊，第二个人的表情是愤怒，第三个人的表情是'我早就知道'。让揭露的力量不在于信息本身，而在于'所有人同时知道所有人都知道了'这个瞬间——沉默的共谋从此失去了根基。",
            dark: "写真相公开之后他没有预料到的部分——不是权力者的反击而是受害者的痛苦。写他把伤疤暴露在所有人面前时没有征求伤疤主人的同意。写那些受害者被记者围堵、被公众消费、被同情或质疑——他们的痛苦从'私人的地狱'变成了'公共的景观'。写他站在'公众知情权'和'个人隐私权'的交叉路口，发现两条路他都走不通。",
            tension: "场景锚点：他揭露了真相——但真相的冲击波摧毁了不该被摧毁的人。悖论不是'揭露vs.隐瞒'——而是：真相一旦被释放就无法控制它的轨迹。他打开了灯，但灯光不分辨谁是加害者谁是受害者——所有人都被同样的光灼伤。写他看着新闻标题把复杂的真相简化成耸动的故事时的无力：他揭露的是系统，但公众只看到了几个名字。"
        }
    },
    {
        id: "drv_testimony",
        name: "证词", nameEn: "Testimony",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "用自己的亲身经历穿透他人的怀疑。'我在那里，我看到了。'",
        defEn: "'I was there. I saw it.' Using lived experience to pierce others' doubt.",
        core: "A面：证词是穿透的人格化——当证据可伪造时，亲历者的声音能穿透怀疑。'我是幸存者'比任何证据更有力。/ B面：但记忆是不可靠的证人——创伤扭曲记忆，'亲眼所见'也许早被无意识改写无数次。关键张力：证词是事实，还是你对事实的再创作？ | 驱力脉动(Trieb): 作证——必说出来，因为沉默就是共谋。",
        coreEn: "A-side: Testimony is personified penetration — when evidence is forgeable, only the survivor's raw voice pierces the wall of doubt. / B-side: But memory is an unreliable witness — trauma distorts facts, and 'what you saw' may have been rewritten by your subconscious. Key tension: Is your testimony absolute fact, or a creative reinterpretation your brain made to survive? | Drive Circuit (Trieb): Witnessing — must speak, because silence now equals complicity.",
        reference: "《辛德勒的名单》幸存者在法庭上为死者作证的最后一幕；《房间》从囚禁中逃出的母亲向世界证明那个房间存在。",
        referenceEn: "Survivors testifying for the dead in the final scene of Schindler's List; a mother escaping captivity to prove to the world that room existed in Room.",
        topology: "身体铭刻：能量不是以信息而是以肉身为载体穿透——证词的力量不在于语言精确度而在于说话的那个身体曾经在场，身体本身就是证据",
        directive: {
            bright: "写他站在所有人面前时身体的颤抖——不是恐惧而是记忆在肌肉里被重新激活。写他的声音在叙述中途断裂然后重新接上——那个断裂本身比任何词语都更有说服力。写听众的沉默不是因为礼貌而是因为他们在他的声音里听到了一种不可能被伪造的东西：在那里待过的人的呼吸节奏。让证词的力量不在内容而在身体：这个身体承受过他正在描述的事情。",
            dark: "写他第一百次复述同一个故事时发现记忆已经变形了——哪些是真正发生的，哪些是他在一百次讲述中无意加上的？写他的故事变成了表演：情绪在正确的地方出现，停顿在观众期待的地方发生，他开始像一个演员一样'演'自己的创伤。写他在淋浴时试图回忆最初的版本但找不到了——原始记忆被覆盖太多次，像一幅被修复了太多次的壁画。",
            tension: "场景锚点：他说完了证词——但另一个在场者的记忆和他完全不同。悖论不是'真vs.假'——而是：两个人在同一个房间里经历了同一件事，但各自的神经系统记录下了两个不同的事件。他们都没有说谎，但他们的真相互相矛盾。写他听到对方的版本时的动摇：不是怀疑对方而是开始怀疑自己。也许'亲眼所见'从来就不是事实，而是创伤为了让他活下来编写的剧本。"
        }
    },
    {
        id: "drv_teaching",
        name: "教导", nameEn: "Teaching",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "穿透学生的迷雾，让他看到他自己还看不到的东西。",
        defEn: "Piercing through the student's fog, making them see what they cannot yet see themselves.",
        core: "A面：教导是最慷慨的穿透——把一生洞察压缩成一句话。好教师在学生认知里制造裂缝让光照进。/ B面：但教导的权力极易腐败——你决定了他看什么。你打开他的眼睛，但方向是你选的。关键张力：你是帮他看到真相，还是把你的真相装进他的脑子？ | 驱力脉动(Trieb): 启蒙——在他人的认知里凿开一扇窗。",
        coreEn: "A-side: Teaching is generous penetration — planting insight like a seed. Good teachers don't just transmit info; they crack the student's cognition to let light in. / B-side: But this power corrupts — you open their eyes, but you dictate the direction. Your 'enlightenment' may just be molding. Key tension: Are you helping them see their truth, or installing your truth in them? | Drive Circuit (Trieb): Enlightenment — chiseling a permanent window into another's mind.",
        reference: "《死亡诗社》'撕掉那一页'唤醒学生独立思考的基廷老师；《心灵捕手》治疗师用一句话穿透了天才的全部防御。",
        referenceEn: "Mr. Keating's 'rip out that page' awakening independent thought in Dead Poets Society; a therapist piercing a genius's every defense with one sentence in Good Will Hunting.",
        topology: "种子植入：能量以极小的体积穿入对方的认知土壤——不是灌注而是播种，种子自带生长程序，一旦植入就按自己的逻辑展开，教导者无法控制最终长出什么",
        directive: {
            bright: "写他在学生眼里看到那个瞬间的——从茫然到'差一点就懂了'到'等一下'到瞳孔微微放大。写他把自己一生的理解压缩成一个问题而不是答案——好老师不给地图，给指南针。写他在教室里制造的那种特殊的沉默：不是无话可说的沉默而是正在思考的沉默，整个房间的空气都在震动。让教导的高潮不是他说话的时刻，而是学生第一次用自己的话重新说出他永远不会用的表述。",
            dark: "写他在第十年发现最优秀的学生都在复制他的思维方式——他们的论文读起来像他写的，他们的判断带着他的偏见，连语气都在模仿他。写他意识到自己没有教出独立思考者，而是制造了一批精致的复制品。写他在毕业典礼上看着那些崇拜他的眼睛时的恐惧：他打开了他们的认知，但方向是他选的——他以为在教他们看，其实是在教他们用他的眼睛看。",
            tension: "场景锚点：他的学生超越了他——不是用他教的方法，而是推翻了他教的方法。悖论不是'教好了vs.教坏了'——而是：真正成功的教导必然导致被推翻。如果学生永远同意老师，说明老师失败了；如果学生推翻老师，说明老师即将被证明是错的。写他听到学生在学术会议上优雅地拆解他一生理论时脸上的表情——他分不清那是骄傲还是丧失。"
        }
    },
    {
        id: "drv_naming",
        name: "命名", nameEn: "Naming",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "给无以名状的东西一个名字。让不可见的变得可见。",
        defEn: "Giving a name to the unnameable. Making the invisible visible.",
        core: "A面：命名是最原始的穿透——喊出'系统性压迫'，无形苦难突然可被指认。没名字的东西无法战胜。/ B面：但命名也是暴力的简化——词语无法捕捉体验全部。命名的瞬间，不符合的部分被抹掉。关键张力：名字是解放的工具，还是个更精致的牢笼？ | 驱力脉动(Trieb): 命名——必须叫出名字，没名字的怪物最可怕。",
        coreEn: "A-side: Naming is primal penetration — giving an invisible suffering a term makes it identifiable and resistible. The unnameable cannot be fought. / B-side: But naming is violent simplification — words never capture the whole experience. Once named, everything outside the label gets erased. Key tension: Is the newly assigned name a tool for liberation, or just a more elegant cognitive cage? | Drive Circuit (Trieb): Naming — must speak its name, for nameless monsters are the worst.",
        reference: "《房间》小男孩从未知道'房间'之外有世界，母亲给了他'外面'这个名字；《熔炉》第一个把虐待行为命名为'犯罪'而非'管教'的教师。",
        referenceEn: "A boy who never knew a world outside 'Room' until his mother gave him the name 'Outside' in Room; the first teacher to name abuse as 'crime' rather than 'discipline' in Silenced.",
        topology: "凝固态转化：能量把弥散的气态痛苦压缩成固态的词——命名之前痛苦是到处都是的雾，命名之后痛苦变成了可以被拿起来观看的石头，但石头的形状是命名者决定的",
        directive: {
            bright: "写他在混乱中找到那个词的过程——不是从词典里选的而是从身体里挖出来的。写那个词被说出来时房间里的空气密度变了：一种一直存在但无法被指认的东西突然有了轮廓。写听到这个词的人的反应不是理解而是辨认——'对，就是这个，这就是一直在折磨我的那个东西'。让命名的力量是即刻的：名字给出之前和之后是两个不同的世界。",
            dark: "写名字给出之后那些不在名字之内的部分开始消失——痛苦比任何词都大，但名字把它切成了可以处理的大小，切掉的部分再也没有人提起。写他开始用名字代替理解：叫出了'创伤后应激'就以为理解了创伤，叫出了'系统性压迫'就以为理解了被压迫者。名字变成了一面盾——不是挡住外部的攻击而是挡住更深的困惑。写他有一天发现那些被他命名过的人开始用他给的名字定义自己，像一件被贴上标签的衣服。",
            tension: "场景锚点：他给了一种痛苦一个名字——但承受痛苦的人说'这个名字不是我的痛苦'。悖论不是'命名了vs.没命名'——而是：名字让痛苦可见但也让痛苦变窄了。一个经历过暴力的人被叫做'幸存者'之后，她的愤怒、她的羞耻、她那些与'幸存'无关的日常——都被这个名字挤到了边缘。写他意识到：命名是最小的暴力，但仍然是暴力——因为名字的边界不是痛苦的边界。"
        }
    },

    // ---- 侵入性穿透：强行打开、拆解和剥露 ----

    {
        id: "drv_interrogation",
        name: "审讯", nameEn: "Interrogation",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "强行穿透他人的沉默。不管他愿不愿意，你都要知道答案。",
        defEn: "Forcibly penetrating another's silence. Regardless of their will, you must know the answer.",
        core: "A面：审讯驱力来自绝对确信——'你知道真相，且我有权知道'。极端情境下，这信念能碾压对方的沉默权，有时确实拯救了无辜。/ B面：但这可能一无所获——压力下人会说出你想听的。你得到的只是权力制造的回声。关键张力：如果确信他知道答案——你愿意走多远去得到它？道德底线在哪？ | 驱力脉动(Trieb): 逼问——必须知道，哪怕摧毁你。",
        coreEn: "A-side: Interrogation requires absolute certainty — 'you know the truth, and I have the right to know.' This conviction crushes their silence to potentially save innocents. / B-side: But extreme pressure just produces echoes of your power; they say what you want to hear, not the truth. Key tension: If you're certain they know, how low are the moral boundaries you'll cross to extract it? | Drive Circuit (Trieb): Pressing — I must know, even if extracting it requires destroying you.",
        reference: "《猎杀本·拉登》用极端手段逼问囚犯获取线索的审讯者；《十二怒汉》用逻辑和耐心一层层剥开偏见的温和审讯。",
        referenceEn: "Interrogators using extreme means to extract intel in Zero Dark Thirty; gentle interrogation peeling away bias layer by layer with logic and patience in 12 Angry Men.",
        topology: "高压注入：能量从外部强行灌入密封系统——不是等对方打开而是制造超过对方承受阈值的压力，直到容器变形裂开，但流出的液体被压力污染了",
        directive: {
            bright: "写他的问题像楔子一样打进沉默的缝隙——第一个问题制造裂纹，第二个问题扩大裂纹，第三个问题让整面墙开始倾斜。写他的耐心比对方的沉默更厚：他不需要对方说话，他只需要对方的沉默开始出汗。写他从对方的眼球运动、吞咽频率、手指的位置读出答案——有时候不说话比说话泄露得更多。让审讯的节奏像心跳：稳定、不加速、不停顿。",
            dark: "写他在第八个小时把灯光调亮一档时自己手的颤抖——不是心软而是意识到他已经越过了某条线。写他开始听到他想听的答案：对方的嘴在他的压力下已经开始制造信息而不是回忆信息了。写他知道这一刻——答案不再可靠——但他没有停下，因为停下意味着承认这八个小时是浪费的。写他回到家洗手时洗了很久，不是因为脏而是因为那个动作能暂时替代思考。",
            tension: "场景锚点：对方终于开口了——但说出的是审讯者自己最害怕听到的答案。悖论不是'说了vs.没说'——而是：审讯本身预设了答案的范围。他的问题框定了回答的空间，对方不是说出了真相而是说出了压力允许的版本。写他拿着供词站在走廊里意识到：他从来不是在寻找真相，他是在用压力铸造一个他需要的真相的形状。"
        }
    },
    {
        id: "drv_voyeurism",
        name: "窥视", nameEn: "Voyeurism",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "穿透他人的隐私边界。看到你不该看到的东西。",
        defEn: "Penetrating another's privacy boundary. Seeing what you shouldn't see.",
        core: "A面：窥视源于原始好奇——想看到未经编辑的真实。大家都展示精致的一面，你想看卸妆后的样子，这是理解人的起点。/ B面：但越界就成了侵犯——想看不等于'有权看'。他人的隐私不是你好奇的材料。关键张力：你想看真实的他们——如果那正是他们选择不展示的，窥视是理解还是侵犯？ | 驱力脉动(Trieb): 偷看——越禁止越非看不可。",
        coreEn: "A-side: Voyeurism stems from raw curiosity — everyone presents a curated face, but you want the unedited reality. This is the starting point of understanding. / B-side: But crossing boundaries is a violation — wanting to see doesn't grant the 'right to see.' Key tension: If their true self is exactly what they choose to hide, is your peering an act of understanding or pure violence? | Drive Circuit (Trieb): Peeking — the stronger the prohibition, the wilder the urge.",
        reference: "《后窗》因腿伤只能通过望远镜窥视邻居生活并发现谋杀的摄影师；《窃听风暴》监听他人全部私生活后人性被唤醒的特工。",
        referenceEn: "A photographer spying on neighbors through binoculars and discovering murder in Rear Window; an agent whose humanity is awakened by listening to others' entire private lives in The Lives of Others.",
        topology: "单向透镜：能量只在一个方向上流动——窥视者看见但不被看见，这种不对称性既是权力来源也是牢笼，因为他永远在窗户的这一边",
        directive: {
            bright: "写他透过窗户/屏幕/锁眼看到的那一帧——对方在完全不知道被注视的状态下展现出的某种真实：独自跳舞、对着空房间说话、在没有人的厨房里哭。写他在那个瞬间看到的不是隐私而是人——一种只在无人注视时才存在的人的状态。让窥视不是猥琐的而是带着一种奇怪的柔情：他看到了对方给自己留的那一面，那是全世界只有他看到了的东西。",
            dark: "写他已经停不下来了——每天晚上同一个时间坐在同一个位置，等对方的灯亮起来。写他开始认为自己'理解'对方——但这种理解是单方面的，对方甚至不知道他的存在。写那种越来越深的饥饿：看到的越多越不够，他开始想看到更私密的部分，然后是更私密的。写他有一天在街上认出了窗户里的那个人，心跳加速——然后意识到他不能打招呼，因为他知道的一切都不应该知道。",
            tension: "场景锚点：对方发现了他在看——两个人隔着窗户对视。悖论不是'看vs.不看'——而是：他看对方时感受到的亲密感，建立在对方不知情的基础上。一旦对方看回来，那种亲密立刻瓦解——因为真正的亲密需要两个人同时在场，而他一直在逃避在场。写他在对方的注视下发现：他不是在观察别人的生活，他是在用别人的窗户替代自己不敢打开的那扇窗。"
        }
    },
    {
        id: "drv_dissection",
        name: "解剖", nameEn: "Dissection",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把一个完整的东西拆开来看里面的结构。不是为了毁坏，而是为了理解。",
        defEn: "Taking something whole apart to see its internal structure. Not to destroy, but to understand.",
        core: "A面：解剖是认知的极致——不满足于'是什么'，你需要知道'怎么运作'。所有的理解始于把事物拆开。/ B面：但解剖完成的瞬间，活物也被杀死了。把一首诗拆成修辞，它就不再是诗。你理解了它，也毁了它。关键张力：理解和毁灭是同一个动作吗？必须打碎才能确切知晓？ | 驱力脉动(Trieb): 拆解——必须打开看，哪怕装不回去了。",
        coreEn: "A-side: Dissection is extreme cognition — moving past 'what' to uncover 'how.' All deep understanding begins unromantically with taking things apart. / B-side: But dissecting kills the subject — reducing a poem to its rhetoric means it's no longer a poem. You understood it, but destroyed it. Key tension: Are understanding and destruction the exact same action? Must we break to see? | Drive Circuit (Trieb): Taking apart — compelled to dismantle, even knowing it can never be reassembled.",
        reference: "《沉默的羔羊》汉尼拔用精准的心理解剖让FBI探员在他面前完全透明；《弗兰肯斯坦》为了理解生命而拆解尸体、最终创造出怪物的科学家。",
        referenceEn: "Hannibal's precise psychological dissection rendering FBI agents completely transparent in Silence of the Lambs; a scientist disassembling corpses to understand life, ultimately creating a monster in Frankenstein.",
        topology: "结构拆解：能量沿着接缝处施力——不是粉碎而是沿着原有结构逐一拆开，拆解完成时每个部件都完好无损但整体已经永远不存在了",
        directive: {
            bright: "写他拿起手术刀时的那种专注——不是残忍而是极度的好奇：表面之下是什么？写他切开第一层时的发现感：原来这个看似整体的东西由这些部分构成，每个部分有自己的逻辑。写他沿着肌理而不是对抗肌理的拆解——好的解剖者不强行切割而是让结构自己展开。让拆解的过程有一种冷静的美感：每一层被分开时都像翻开一页他从未读过的书。",
            dark: "写他在拆完之后试图把部件装回去——但失败了。写他盯着桌面上排列整齐的零件，意识到他理解了每一个零件却永远无法理解它们在一起时的那个东西。写他把这种方法用在了人身上：把一段感情拆解成荷尔蒙和依恋模式之后再也无法被感动。写他在看电影时自动分析叙事结构然后忘记哭泣——不是因为麻木而是因为他已经无法不拆开一切。",
            tension: "场景锚点：他完美地拆解了一个人的心理结构——但那个人说'你看到了所有的零件，但你没看到我'。悖论不是'理解了vs.没理解'——而是：拆解是理解的条件同时也是理解的毁灭。你必须拆开才能看到内部，但拆开的瞬间'整体'这个你想理解的对象就消失了。写他在完美的分析图面前感到一种无法命名的丧失：他得到了所有的部分，唯独失去了那个让部分成为整体的东西。"
        }
    },
    {
        id: "drv_disenchantment",
        name: "去魅", nameEn: "Disenchantment",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "穿透幻象，暴露它的机制。'你崇拜的神不过是一台机器。'",
        defEn: "Piercing through illusion to expose its mechanism. 'The god you worship is just a machine.'",
        core: "A面：去魅是最勇敢的穿透——拆掉维系安全感的幻象，露出背后冰冷的机制。必须先失去幻觉，才能获得真实。/ B面：但去魅后未必自由——有时幻象是别人赖以生存的唯一依靠。你拆了谎言，却没给什么替代品。关键张力：若真相让人崩溃，谎言让人活着——还应该把灯打开吗？ | 驱力脉动(Trieb): 祛魅——必须看到真相，哪怕魔法消失。",
        coreEn: "A-side: Disenchantment is fierce penetration — tearing down comforting illusions to expose the cold gears behind them. Stripping away fantasy is required to touch reality. / B-side: But disenchantment doesn't guarantee freedom. Illusions keep some alive; breaking them without providing support leaves only ruins. Key tension: If truth breaks them but illusion sustains their life — must you insist on turning the light on? | Drive Circuit (Trieb): Demystifying — seeing the real machine, regardless of the magic lost.",
        reference: "《绿野仙踪》拉开帘子发现伟大的奥兹不过是一个操纵杠杆的老人；《楚门的世界》楚门发现整个世界都是一个摄影棚。",
        referenceEn: "Pulling back the curtain to find the great Oz is just an old man pulling levers in The Wizard of Oz; Truman discovering his entire world is a studio set in The Truman Show.",
        topology: "帷幕撕裂：能量集中在遮蔽物的一个点上撕开——不是缓慢拆除而是瞬间撕出一个缺口，通过缺口看到的不是答案而是机制：魔术的秘密不是兔子而是暗格",
        directive: {
            bright: "写帷幕被撕开的那个瞬间——手指抓住布料的边缘然后用力一扯，背后露出的不是秘密而是一堆齿轮和电线。写他第一眼看到机制时的那种清醒：原来'神圣'只是灯光的角度，'权威'只是讲台的高度，'命运'只是某人编写的程序。让去魅不是破坏而是解放——看到幕后的齿轮之后他不再害怕舞台上的影子。写他从剧场出来时的空气——比里面干净，但也比里面冷。",
            dark: "写他去魅之后的空虚——不是失去了幻象而是失去了需要幻象的能力。写他看什么都先看到背后的机制：爱情是荷尔蒙，宗教是权力工具，艺术是市场策略。写他在美术馆里看到一幅画时第一反应是估价而不是感动。写他怀念那个还会被魔术骗到的自己——不是怀念无知而是怀念一种已经不可能的投入。写一个细节：他给孩子讲圣诞老人的故事时停在中间，因为嘴巴拒绝配合。",
            tension: "场景锚点：他拆掉了所有幻象——但发现最后一层幕后面还是幻象。悖论不是'幻象vs.真相'——而是：'去魅'本身可能也是一种魅。相信'我看到了真相'和相信圣诞老人在结构上是一样的——都是一种确信自己知道帷幕后面是什么的幻觉。写他在拆掉第五层幻象之后开始怀疑：也许没有最后一层帷幕，也许帷幕就是全部，而'真相'只是一个让拆帷幕的人不会崩溃的幻象。"
        }
    },
    {
        id: "drv_mind_reading",
        name: "读心", nameEn: "Mind-Reading",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "穿透他人的意识壁垒。知道他在想什么——即使他并不想让你知道。",
        defEn: "Penetrating another's consciousness barrier. Knowing their thoughts — even if they don't want you to.",
        core: "A面：读心是极端的穿透——不满足于对方的话语，你要穿透到他自己都不知道的地方。从微表情和停顿拼凑出潜台词。/ B面：但读心极易被滥用——因为你读到的往往是你自己的投射。以为在理解对方，实则是用自己的框架填满他的沉默。关键张力：你'读'到的想法，有多少是你放进去的？ | 驱力脉动(Trieb): 透视——必须挖出沉默背后藏了什么。",
        coreEn: "A-side: Mind-reading is unrestrained penetration — bypassing words to reach the subconscious, piecing out guarded secrets from micro-expressions and breath pauses. / B-side: But it can quickly become arrogant projection — what you 'read' might just be your own mind filling their silent spaces. Key tension: How much of what you supposedly 'read' out of them did you actually project into them? | Drive Circuit (Trieb): Seeing through — digging obsessively to find what their silence hides.",
        reference: "《沉默的羔羊》汉尼拔从呼吸和方言中读出克拉丽丝全部过往的能力；《赌神》从对手最微小的动作中读出底牌的天才。",
        referenceEn: "Hannibal reading Clarice's entire past from breathing and dialect in Silence of the Lambs; a genius reading opponents' cards from their subtlest gestures in God of Gamblers.",
        topology: "反向回声：能量不发射信号而是接收对方无意中发射的信号——每个微表情、每次停顿、每个指尖的位移都是对方意识未经审查的泄露，读心者是一面比对方更了解信号含义的雷达",
        directive: {
            bright: "写他的注意力在对方身上的那种精确聚焦——不是听对方说什么而是听对方没说什么：一个停顿的长度、一次吞咽的时机、目光从左移到右的速度。写他在这些碎片中拼出对方自己都不知道的那个想法——像一个翻译，但翻译的是身体的语言。写他读到之后的克制：最好的读心者从不说出读到的东西，因为说出来就毁了它的精确性。让读心是安静的——没有戏剧性，只有一种极度专注的在场。",
            dark: "写他在所有社交场合都在'读'——没有任何一次对话对他来说是单纯的：每句话都有潜台词，每个微笑都有编码，每次沉默都有内容。写他的疲惫：他的神经系统没有'关闭'按钮，信息像噪音一样不断灌入。写他开始回避人群，不是因为内向而是因为信息过载——一个房间里三十个人的微表情同时涌入大脑就像三十个人同时对他说话。写他最渴望的是遇到一个他完全读不懂的人。",
            tension: "场景锚点：他精确地'读'出了对方的想法——对方确认了——但他突然意识到自己也在被读。悖论不是'读对了vs.读错了'——而是：他'读'到的东西里有多少是对方无意中泄露的，有多少是对方故意让他读到的？也许对方一直在用微表情喂他虚假信息。写他面对一个同样擅长读心的人时的恐慌：他所有的技术都反过来成了对方的素材。他读到的不是对方的心而是对方放在他面前的一面镜子。"
        }
    },
    {
        id: "drv_soul_interrogation",
        name: "灵魂拷问", nameEn: "Soul Interrogation",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "III. 质问者叙事", altGroupEn: "The Questioner",
        def: "穿透到人格的最深层。问出那个让人无法回答的问题。",
        defEn: "Penetrating to the deepest layer of personhood. Asking the question that cannot be answered.",
        core: "A面：灵魂拷问不是要答案——而是要暴露问题本身。'你为什么活着？'力量在于迫使你无法再假装问题不存在。/ B面：但这也是精神暴力——把人推向没准备好的深渊边缘。有些问题问出就无法收回。关键张力：你有多大权力用真相摧毁他？'帮他面对真相'与'真相谋杀'有多远？ | 驱力脉动(Trieb): 深问——问到眼泪流出，无处可躲。",
        coreEn: "A-side: Soul interrogation doesn't seek answers, but cruelly suspends the question — like 'why do you live?' It forces a deep look into the abyss, making pretending impossible. / B-side: But it's also extreme overstepping — pushing someone to an edge they aren't ready for. Once asked, such questions resound forever. Key tension: What's the distance between 'helping someone face truth' and 'murdering them with truth'? | Drive Circuit (Trieb): Probing — relentlessly pressing until all disguises strip away.",
        reference: "《大审判》'你有没有命令红色代码？'那个直指核心的法庭对质；《心灵捕手》反复说'这不是你的错'直到防线全部崩塌的灵魂穿透。",
        referenceEn: "'Did you order the Code Red?' — the core-piercing courtroom confrontation in A Few Good Men; repeating 'It's not your fault' until every defense crumbles in Good Will Hunting.",
        topology: "垂直钻探：能量以最窄的截面垂直向下穿透所有层——不经过水平层的任何中间地带，直接从表面到达地核，钻头在穿过每一层时都变得更热",
        directive: {
            bright: "写那个问题从他嘴里出来时的重量——不是提问的语气而是宣判的语气，因为他不需要答案，答案已经在问题的结构里了。写对方在听到那个问题之后的物理反应：不是思考而是身体先于思维开始崩塌——肩膀下沉、呼吸断裂、手开始找不到可以放的地方。写那个问题在房间里悬浮的三秒钟：所有人都知道有些东西不可能再装回去了。让灵魂拷问不是残忍而是精确——他问的不是对方做了什么，而是对方是什么。",
            dark: "写他把对方推到悬崖边时看到的那张脸——不是愤怒或恐惧而是一种更古老的东西：被完全看穿后的赤裸。写他在那一刻的权力感和随之而来的恶心：他有能力用一句话拆掉一个人的全部防御系统，这种能力和武器没有区别。写他事后在酒吧里想那个问题是否'必要'——他知道答案是'是'，但他也知道这个答案太方便了。写他在回家的路上想：如果那个问题被问向他自己，他会比对方撑得更久吗？",
            tension: "场景锚点：他问出了那个终极问题——对方没有崩塌，而是反问了他一个同样深度的问题。悖论不是'问了vs.没问'——而是：灵魂拷问预设了提问者有资格提问。当两个人互相穿透到同样的深度，剩下的不是真相而是两个同样赤裸的人面对面站着，谁也无法帮谁穿回衣服。写他在对方的反问面前感到自己所有的分析能力突然失效——他挖到了对方的地核，但地核照出了他自己的形状。"
        }
    },
    {
        id: "drv_curse",
        name: "诅咒", nameEn: "The Curse",
        group: "C. 穿透的驱力", groupEn: "The Penetration",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "用语言穿透并永久伤害对方的核心。说出一句他永远无法忘记的话。",
        defEn: "Using words to penetrate and permanently wound the other's core. Speaking a sentence they can never forget.",
        core: "A面：诅咒是语言的穿甲弹——并非脏话，而是精准击中脆弱核心的宣判。'你永远不会被爱'，其致命在于说出了恐惧的真相。/ B面：但诅咒无法撤回——会在潜意识生根。你用一句话种下了永远无法停止生长的毒瘤。关键张力：你说出是因为那是现实，还是你想让它变成现实？ | 驱力脉动(Trieb): 诅咒——用一句话留下永久的敞口。",
        coreEn: "A-side: The curse is language's killing blow — not profanity, but a calculated verdict striking their softest, most terrifying truth. It's deadly precise. / B-side: But a curse is irreversible — it takes root in their subconscious, growing like a tumor for the rest of their lives. Key tension: Did you utter it because it was a harsh reality, or because you wanted to sculpt it into reality? | Drive Circuit (Trieb): Nailing — hammering a permanent brand into their soul with venomous truth.",
        reference: "《教父》'你不是我儿子'——迈克尔对弗雷多说的那句判决式的话；《婚姻故事》吵架中两人说出的那些再也无法收回的话。",
        referenceEn: "'You're not my son' — Michael's verdict to Fredo in The Godfather; the words spoken during the fight that can never be taken back in Marriage Story.",
        topology: "永久烙印：能量在接触点制造不可逆的变形——不是切割而是在对方的心理结构上烧出一个和那句话形状相同的疤，疤痕组织会长出来但永远是异质的",
        directive: {
            bright: "写他在说出那句话之前的最后一次犹豫——不是善良而是在确认：这把刀到底应不应该拔出来？然后写他的决定：应该。因为有些东西必须被说出来才能停止腐烂。写那句话离开他嘴唇时的精确度——不是情绪化的咆哮而是外科手术式的一句话，每个字都击中了对方最不设防的位置。让那句话的力量在于它的真实——它之所以致命是因为对方知道它是对的。",
            dark: "写那句话说完之后两个人之间的空气——不是沉默而是一种物质性的存在，像一面玻璃墙在他们之间升起来。写他看着那句话在对方脸上产生效果的过程：先是不信，然后是理解，然后是一种比痛更深的东西——认出。写他在说完之后的寒意：他知道这句话会在对方体内活很久，也许比两个人的关系活得更久。写他意识到诅咒的真正代价不是伤害对方而是永远成为那个说了这句话的人——他再也无法回到说这句话之前的自己。",
            tension: "场景锚点：他说了那句不可收回的话——但五年后发现那句话的杀伤力不是击中了对方，而是准确描述了他自己。悖论不是'说了vs.没说'——而是：我们用来诅咒别人的话往往是我们最了解的痛苦——它来自我们自己的伤口。他说'你永远不会被爱'，也许不是因为他看穿了对方而是因为这句话一直在他自己脑子里转。写他多年后在镜子前听到那句话的回声时的辨认：原来诅咒是一枚回旋镖。"
        }
    }
];
