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
        referenceEn: "Hannibal's diagnostic gaze instantly reading Clarice's childhood trauma in Silence of the Lambs; Zuckerberg's programmer intuition seeing through social behavior logic in The Social Network."
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
        referenceEn: "A mortician feeling the deceased's final dignity through touch in Departures; 'It's not your fault' piercing all defenses to reach the trauma core in Good Will Hunting."
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
        referenceEn: "Detectives desperately seeking serial killer logic in muddy evidence in Memories of Murder; a symbologist decoding millennia-old secrets from art in The Da Vinci Code."
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
        referenceEn: "The medical system imprisoning the sane through 'diagnosis' in One Flew Over the Cuckoo's Nest; a paranoid genius piercing lies and misdiagnoses to find the hidden cause in House M.D."
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
        referenceEn: "Cassandra cursed to speak truth yet never be believed; a linguist seeing her daughter's future death after acquiring the alien language in Arrival."
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
        referenceEn: "Nash's epiphany when he realizes the little girl never ages in A Beautiful Mind; Truman discovering the horizon is a wall in The Truman Show."
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
        referenceEn: "A linguist translating alien language thereby altering her own time perception in Arrival; four groups unable to understand each other within the same tragedy in Babel."
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
        referenceEn: "A writer spending her life seeking confession for a childhood false accusation in Atonement; a father who can neither speak nor silence the truth of the fire in Manchester by the Sea."
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
        referenceEn: "The one person who insists 'not guilty' when everyone else has voted in 12 Angry Men; journalists publishing clergy abuse scandals despite church pressure in Spotlight."
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
        referenceEn: "A newspaper risking government prosecution to publish Pentagon Papers in The Post; a teacher exposing systematic abuse at a school for the deaf in Silenced."
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
        referenceEn: "Survivors testifying for the dead in the final scene of Schindler's List; a mother escaping captivity to prove to the world that room existed in Room."
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
        referenceEn: "Mr. Keating's 'rip out that page' awakening independent thought in Dead Poets Society; a therapist piercing a genius's every defense with one sentence in Good Will Hunting."
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
        referenceEn: "A boy who never knew a world outside 'Room' until his mother gave him the name 'Outside' in Room; the first teacher to name abuse as 'crime' rather than 'discipline' in Silenced."
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
        referenceEn: "Interrogators using extreme means to extract intel in Zero Dark Thirty; gentle interrogation peeling away bias layer by layer with logic and patience in 12 Angry Men."
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
        referenceEn: "A photographer spying on neighbors through binoculars and discovering murder in Rear Window; an agent whose humanity is awakened by listening to others' entire private lives in The Lives of Others."
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
        referenceEn: "Hannibal's precise psychological dissection rendering FBI agents completely transparent in Silence of the Lambs; a scientist disassembling corpses to understand life, ultimately creating a monster in Frankenstein."
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
        referenceEn: "Pulling back the curtain to find the great Oz is just an old man pulling levers in The Wizard of Oz; Truman discovering his entire world is a studio set in The Truman Show."
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
        referenceEn: "Hannibal reading Clarice's entire past from breathing and dialect in Silence of the Lambs; a genius reading opponents' cards from their subtlest gestures in God of Gamblers."
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
        referenceEn: "'Did you order the Code Red?' — the core-piercing courtroom confrontation in A Few Good Men; repeating 'It's not your fault' until every defense crumbles in Good Will Hunting."
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
        referenceEn: "'You're not my son' — Michael's verdict to Fredo in The Godfather; the words spoken during the fight that can never be taken back in Marriage Story."
    }
];
