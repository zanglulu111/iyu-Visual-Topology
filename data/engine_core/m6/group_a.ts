import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_A: LibraryItemDef[] = [
    {
        id: "stake_erasure",
        name: "社会性抹杀", nameEn: "Social Erasure",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "主体的物理存在被保留，但其在大他者档案中的所有能指记录被彻底销毁，成为一个游荡的‘非人’。",
        defEn: "Physical existence is preserved, but all signifier records are destroyed. The subject becomes a wandering 'unperson'.",
        core: "失去合法存在的坐标系统。在符号界中死亡，比在物理界中死亡更令人窒息。 | The Castration: 存在的代码被拔除。",
        coreEn: "Losing the coordinate system of legal existence. Dying in the Symbolic is more suffocating than physical death. | The Castration: Excision of existential code.",
        logic: "M6 在这里执行了‘人’与‘肉’的切割。系统并没有剥夺主体的生命，而是剥夺了其‘筹码资格’。主体沦为了能指之网漏掉的一滴水。",
        logicEn: "M6 executes the severance between 'Human' and 'Meat'. The subject becomes a drop of water leaking out of the signifier net.",
        patch: {
            mechanics: "Base_SYMBOLIC_DEATH + [Signifier_Link = Severed; Social_Archive = 404_Not_Found]",
            mechanicsEn: "Base_SYMBOLIC_DEATH + [Signifier_Link = Severed; Social_Archive = 404_Not_Found]",
            aesthetic: "聚焦：不再能刷开门禁卡的失效动作 + 证件上慢慢褪色的照片 + 走在人群中连监控器都不再捕捉的透明感。",
            aestheticEn: "Focus: Invalid swipe of access card + Fading photo on ID + Walking through crowd undetected even by surveillance cameras.",
            runtime: "IF (试图向过去的熟人证明自己) THEN (对方的记忆模块出现强行填补的盲区，完全将其视为陌生甚至不存在的光影)。",
            runtimeEn: "IF (Attempts_to_Prove_Identity_to_Acquaintances) THEN (Their memory modules auto-fill the blind spot, perceiving subject fully as a stranger or shadow)."
        }
    },
    {
        id: "stake_exile",
        name: "拓扑学流放", nameEn: "Eternal Exile",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "被剥夺了一切社会坐标，永远驱逐至不毛之地的边缘，失去“故乡”的概念。",
        defEn: "Stripped of all social coordinates, forever banished to the edges, losing the concept of 'home'.",
        core: "极其纯粹的物理与象征层面的双重驱逐。成为永远的局外人。 | The Castration: 空间归属的彻底阉割。",
        coreEn: "Becoming an eternal outsider. | The Castration: Absolute castration of spatial belonging.",
        logic: "流放不是地理位置的移动，而是存在场域的剔除。无论走到哪里，你都踩不中地球上的任何一个合法接地点。",
        logicEn: "Exile is not geographic movement but excision of the existential field. You become a glitch outside the map.",
        patch: {
            mechanics: "Base_TOPOLOGICAL_EXILE + [Homeland_Access = Denied; Boundary_Friction = Maximum]",
            mechanicsEn: "Base_TOPOLOGICAL_EXILE + [Homeland_Access = Denied; Boundary_Friction = Maximum]",
            aesthetic: "聚焦：回头看时那扇永远关上的宏伟城门 + 脚下不断飞扬的黄沙 + 失去重力感但极其疲惫的跋涉。",
            aestheticEn: "Focus: Looking back at the grand city gate closing forever + Endless yellow sand flying underfoot + Exhausting trek without sense of gravity.",
            runtime: "IF (试图回到故地) THEN (无论怎样跋涉，空间本身会像莫比乌斯环一样将人折叠回荒野边缘)。",
            runtimeEn: "IF (Attempts_to_Sneak_Border_back_to_Original_Territory) THEN (Space folds them back to the wilderness edge like a Mobius strip)."
        }
    },
    {
        id: "stake_slave",
        name: "成为奴隶", nameEn: "Enslavement",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "彻底丧失自由意志，身体和思想都成为他人的财产。",
        defEn: "Total loss of free will; body and mind become the property of another.",
        core: "被物化为纯粹的工具。主体退化为客体。 | The Castration: 康德自由意志的终结。",
        coreEn: "Objectified into pure tool. Subject regresses to object. | The Castration: End of Kantian free will.",
        logic: "身体的使用权不再属于自身，并且必须强行压抑所有的反抗冲动去服侍曾经对抗的力量。",
        logicEn: "The body's usage right no longer belongs to oneself, forcing suppression of all rebellious impulses to serve the former enemy.",
        patch: {
            mechanics: "Base_OBJECTIFICATION + [Agency_Status = Null; Command_Override = Absolute]",
            mechanicsEn: "Base_OBJECTIFICATION + [Agency_Status = Null; Command_Override = Absolute]",
            aesthetic: "聚焦：低头时颈部沉重的金属反光 + 被迫露出谄媚笑容时眼角痉挛的肌理 + 丧失自己时间的钟表。",
            aestheticEn: "Focus: Heavy metal reflection on neck when bowing + Twitching eye muscles when forced to smile obsequiously + Broken clock losing personal time.",
            runtime: "IF (内心产生了背叛的想法) THEN (主体的肌肉会不由自主地执行主人的惩罚指令，完成对自身的压制)。",
            runtimeEn: "IF (Harbors_Betrayal_Thoughts) THEN (Subject's muscles involuntarily execute master's punishment commands, suppressing oneself)."
        }
    },
    {
        id: "stake_replace",
        name: "能指的盗窃", nameEn: "Replacement",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "另一个肉体（替身/克隆）合法继承了你的所有能指，你变成了冗余的副本。",
        defEn: "Another body officially inherits all your signifiers, rendering you a redundant copy.",
        core: "真假美猴王的拓扑翻转。大他者只认能指，不认肉身。 | The Castration: 独特性的被替代。",
        coreEn: "Topological flip of identity. | The Castration: Replacement of uniqueness.",
        logic: "这是拉康镜像阶段的最惨烈反噬。主体的合法性被完美复制兵收走，留给自己的只有虚无与荒谬。",
        logicEn: "Subject's legitimacy is copied and taken away, leaving only void and absurdity.",
        patch: {
            mechanics: "Base_DOPPELGANGER_OVERWRITE + [Authenticity_Check = Failed; Identity_Token = Transferred]",
            mechanicsEn: "Base_DOPPELGANGER_OVERWRITE + [Authenticity_Check = Failed; Identity_Token = Transferred]",
            aesthetic: "聚焦：站在窗外看着‘自己’在屋里亲吻爱人的惨白面庞 + 属于自己名字的豪华墓碑。",
            aestheticEn: "Focus: Pale face standing outside window watching 'oneself' kiss their lover + Tombstone bearing one's own name.",
            runtime: "IF (强行闯入试图夺回身份) THEN (触发周围所有人的怪物排异反应，自己反而成为了破坏家庭的‘妄想狂’)。",
            runtimeEn: "IF (Forcibly_Intruding_to_Reclaim_Identity) THEN (Trigger monstrous rejection from all bystanders, becoming the 'alien' destroying a perfect family)."
        }
    },
    {
        id: "stake_aphasia",
        name: "绝对失语", nameEn: "Aphasia/Silence",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "被系统夺去了语言的功能，不仅不能说话，连写字和手语都会被强行乱码化。",
        defEn: "Deprived of the function of language; all attempts at communication become garbled noise.",
        core: "被放逐出语言的边界。失去表达冤屈的任何媒介。 | The Castration: 沟通桥梁的粉碎。",
        coreEn: "Exiled from language. | The Castration: Pulverizing of communication.",
        logic: "即使理智完全清醒，所有的向外输出都被大他者的防火墙拒收，主体被禁锢在自身的骨头之内。",
        logicEn: "All outward outputs are rejected by the Big Other's firewall, trapping the subject within their own bones.",
        patch: {
            mechanics: "Base_LANGUAGE_ISOLATION + [Signal_Decoupling = 100%; Vocal_Translation = Corrupted_Static]",
            mechanicsEn: "Base_LANGUAGE_ISOLATION + [Signal_Decoupling = 100%; Vocal_Translation = Corrupted_Static]",
            aesthetic: "聚焦：即使声嘶力竭也只是类似金属摩擦的声音 + 写在纸上的求救信号在别人看来是无意义的圆圈。",
            aestheticEn: "Focus: Screams sound like metallic friction + SOS written on paper appears as meaningless circles to others.",
            runtime: "IF (试图向路人倾诉) THEN (系统自动给路人分发‘此人精神失常，请勿靠近’的潜意识波)。",
            runtimeEn: "IF (Attempts_to_Vocalize_to_Passerby) THEN (System automatically broadcasts 'This person is insane, stay away' subconscious wave to them)."
        }
    },
    {
        id: "stake_stigma",
        name: "恶之烙印", nameEn: "Stigmatization",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "不仅失去荣誉，还被迫代替系统承担了最肮脏的罪名，永远被钉在耻辱柱上。",
        defEn: "Not only losing honor but forced to bear the dirtiest crimes for the system.",
        core: "代替大他者下地狱。 | The Castration: 道德倒影的彻底粉碎。",
        coreEn: "Descending to hell in place of the Big Other. | The Castration: Complete shattering of moral reflection.",
        logic: "系统需要替罪羊。代价是允许自己的名字被写成万恶之源，从而换得真正的世界运转。",
        logicEn: "The system needs a scapegoat. The cost is allowing one's name to be written as the source of all evil to keep the world turning.",
        patch: {
            mechanics: "Base_SCAPEGOAT_PROTOCOL + [Honor_Variable = Locked_Negative; Public_Narrative = Fixed_Traitor]",
            mechanicsEn: "Base_SCAPEGOAT_PROTOCOL + [Honor_Variable = Locked_Negative; Public_Narrative = Fixed_Traitor]",
            aesthetic: "聚焦：群众向自己雕像丢燃烧瓶的刺眼火光 + 后世文献中被抹除人性的词汇。",
            aestheticEn: "Focus: Stabbing firelight from molotov cocktails thrown at own statue + Dehumanizing terms in future documents.",
            runtime: "IF (有幸存的追随者想要平反) THEN (主体为了维持M7大局，必须亲手将这个追随者打倒以坐实罪名)。",
            runtimeEn: "IF (Surviving_Follower_Attempts_to_Clear_Name) THEN (To maintain M7 endgame, subject must personally defeat this follower to solidify the crime)."
        }
    },
    {
        id: "stake_forgotten",
        name: "被遗忘", nameEn: "Being Forgotten",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "你的存在没有留下任何痕迹，全世界人的记忆都被强行抽取了关于你的部分。",
        defEn: "Your existence leaves zero trace; the entire world's memory regarding you is extracted.",
        core: "《寻梦环游记》的终极死亡法则。 | The Castration: 情感历史的清零。",
        coreEn: "The ultimate death rule of 'Coco'. | The Castration: Clearing of emotional history.",
        logic: "时间线自我修复时产生的排泄物。你的存在对于系统的平稳运行显得过于扎眼，因此被整体摘除。",
        logicEn: "The excretion of self-healing timelines. Your existence was too abrasive, so it was holistically removed.",
        patch: {
            mechanics: "Base_MEMORY_ERASURE_GLOBAL + [Trace_Elements = Purged]",
            mechanicsEn: "Base_MEMORY_ERASURE_GLOBAL + [Trace_Elements = Purged]",
            aesthetic: "聚焦：昔日的全家福上自己原本的位置变成了风景 + 恋人毫无波澜地穿过你走向别人。",
            aestheticEn: "Focus: One's spot in old family photos turns into scenery + Lover walks right past you toward someone else without a ripple.",
            runtime: "IF (向爱人展示曾经只有你们知道的暗语) THEN (爱人只觉得是个无趣的冷笑话)。",
            runtimeEn: "IF (Show_Lover_Secret_Code_Only_You_Two_Knew) THEN (Lover just finds it to be an unfunny joke)."
        }
    },
    {
        id: "stake_unseen",
        name: "凝视的撤出", nameEn: "Invisibility",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "物理隐身或系统性的透明化，无论做什么都无法引起他人的反馈。",
        defEn: "Physical invisibility or systemic transparency; nothing elicits feedback.",
        core: "大他者不再赐予凝视。 | The Castration: 生命交互的彻底阻断。",
        coreEn: "The Big Other withdraws its gaze. | The Castration: Ultimate blocking of life interaction.",
        logic: "人类靠被他人看到而确认自己的存在。透明化使得即使世界毁灭的按钮在你手里，也没人来阻止你。一种无与伦比的无价值感。",
        logicEn: "Humans confirm existence by being seen. Transparency means no one cares even if you hold the doomsday button.",
        patch: {
            mechanics: "Base_GAZE_WITHDRAWAL + [Karma_Feedback = 0; Target_Lock = Disabled]",
            mechanicsEn: "Base_GAZE_WITHDRAWAL + [Karma_Feedback = 0; Target_Lock = Disabled]",
            aesthetic: "聚焦：杯子掉在地上碎裂却无人侧目 + 尖叫声被自动吸入背景白噪音。",
            aestheticEn: "Focus: Cup shatters on floor but no one glances + Screams auto-absorbed into background white noise.",
            runtime: "IF (试图进行极其极端的破坏行为) THEN (行为本身的能量会被系统降维吸收，像丢进海里的石子没有波纹)。",
            runtimeEn: "IF (Attempts_Extreme_Destructive_Act) THEN (Act's energy is down-dimensionally absorbed by system; like a pebble in the sea, no ripples)."
        }
    },
    {
        id: "stake_discredited",
        name: "信用破产", nameEn: "Discredited",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "真相的预言家，但被系统永久打上了‘妄想症骗子’的标签。没有人再信你一句话。",
        defEn: "A prophet of truth, permanently labeled as a 'delusional liar' by the system. No one believes a word you say.",
        core: "狼来了的法则扭曲版。卡桑德拉的诅咒。 | The Castration: 信誉与预言能力的废除。",
        coreEn: "Cassandra's curse. | The Castration: Abolition of credibility and prophetic capability.",
        logic: "说出真理的代价，是真理从你口中说出时自动失去效力。你的每一句真话都被转码为了被嘲笑的素材。",
        logicEn: "The cost of speaking the truth is that truth uttered by you automatically loses validity.",
        patch: {
            mechanics: "Base_CASSANDRA_CURSE + [Truth_Weight = Zero; Skepticism_Field = Constant]",
            mechanicsEn: "Base_CASSANDRA_CURSE + [Truth_Weight = Zero; Skepticism_Field = Constant]",
            aesthetic: "聚焦：手里拿着拯救世界的解药但所有人都当成是毒药 + 被强行套上精神病人的束缚衣。",
            aestheticEn: "Focus: Holding the world-saving antidote but everyone thinks it's poison + Forcibly strapped into a straitjacket.",
            runtime: "IF (试图拯救正在走向陷阱的人) THEN (你的警告反而成为了促使他们加速跳进陷阱的笑料)。",
            runtimeEn: "IF (Tries_to_Save_Someone_Walking_into_Trap) THEN (Your warning becomes the laughing joke that accelerates their jump into the trap)."
        }
    },
    {
        id: "stake_mockery",
        name: "成为笑柄", nameEn: "Public Mockery",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "毕生的追求和极致的痛苦，在大他者眼里被降格为一档滑稽喜剧供人消费。",
        defEn: "Lifelong pursuits and extreme pains are downgraded into a slapstick comedy for consumption.",
        core: "尊严被消解。甚至不配拥有悲剧的崇高感。 | The Castration: 崇高性的褫夺。",
        coreEn: "Dignity dissolved. Not even worthy of the sublimity of tragedy. | The Castration: Deprivation of sublimity.",
        logic: "最狠的抹杀不是杀死目标，而是将其‘小丑化’。崇高被置换为荒诞，抗争变成了跌倒时的滑稽音效。",
        logicEn: "The cruelest erasure is 'clownification'. Struggle becomes a funny sound effect when falling.",
        patch: {
            mechanics: "Base_CLOWNIFICATION + [Tragedy_Value = Inverted; Sublime_Format = Shattered]",
            mechanicsEn: "Base_CLOWNIFICATION + [Tragedy_Value = Inverted; Sublime_Format = Shattered]",
            aesthetic: "聚焦：受难时围观人群爆发出的哄堂大笑 + 血泪被聚光灯打成了廉价的红色塑料。",
            aestheticEn: "Focus: Crowd erupting in roaring laughter during your suffering + Blood and tears lit by spotlight looking like cheap red plastic.",
            runtime: "IF (试图展现悲壮的牺牲) THEN (总会有某种滑稽的巧合（打滑、裤子掉落）将壮烈完全摧毁)。",
            runtimeEn: "IF (Attempts_Heroic_Sacrifice) THEN (Some comical coincidence like slipping or pants falling will utterly destroy the epicness)."
        }
    },
    {
        id: "stake_rank_loss",
        name: "绝对阶级跌落", nameEn: "Loss of Rank",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "从云端的神级地位，瞬间跌入最下贱的泥潭，且保留所有记忆。",
        defEn: "Falling instantly from god-level status to the lowest mud, while retaining all memory.",
        core: "失去俯视的支点。被自己曾经制定的残酷法则反噬。 | The Castration: 资源与地位的剥夺。",
        coreEn: "Losing the vantage point. Swallowed by the cruel laws one once established. | The Castration: Deprivation of resources and status.",
        logic: "对于既得利益者来说，跌落回底层不仅仅是失去特权，而是整个认知世界的倒转。曾经的高级感变成了每分每秒割破皮肤的刀片。",
        logicEn: "For the privileged, falling to the bottom implies the inversion of their entire cognitive world.",
        patch: {
            mechanics: "Base_CLASS_REVERSION + [Resource_Access = Locked; Ego_Mismatch = Maximum]",
            mechanicsEn: "Base_CLASS_REVERSION + [Resource_Access = Locked; Ego_Mismatch = Maximum]",
            aesthetic: "聚焦：曾经穿戴丝绸的手指被迫在泔水中翻找食物的特写 + 走过曾经自己的雄伟官邸时挨的一记看门人的耳光。",
            aestheticEn: "Focus: Fingers that once wore silk forced to dig in slop for food + Slapped by the gatekeeper when walking past one's former grand mansion.",
            runtime: "IF (试图使用曾经的上位者口吻发号施令) THEN (立刻遭遇底层最粗暴且毫无理性的残酷镇压)。",
            runtimeEn: "IF (Attempts_Command_with_Former_Superior_Tone) THEN (Instantly faces the most brutal, irrational suppression from the bottom class)."
        }
    },
    {
        id: "stake_name_loss",
        name: "失去命名权", nameEn: "Loss of Name",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "名字被没收，从此被一条数字代码或贬义代称剥夺了完整的人格。",
        defEn: "Name confiscated, permanently replaced by a numeric code or derogatory nickname.",
        core: "《千与千寻》的核心威胁。名字是灵魂的最简句法。 | The Castration: 灵魂代码的没收。",
        coreEn: "The core threat of Spirited Away. The name is the simplest syntax of the soul. | The Castration: Confiscation of soul code.",
        logic: "当你连名字都不再拥有时，过去那个在时间线中奋斗的实体就断轴了。",
        logicEn: "When you no longer possess a name, the fighting entity in the timeline breaks its axis.",
        patch: {
            mechanics: "Base_NAME_EXPROPRIATION + [Name_of_the_Father = Nullified; Number_Designation = Forced]",
            mechanicsEn: "Base_NAME_EXPROPRIATION + [Name_of_the_Father = Nullified; Number_Designation = Forced]",
            aesthetic: "聚焦：制服上被粗暴缝上的条形码 + 下意识对原名毫无反应的迟钝。",
            aestheticEn: "Focus: Barcode roughly stitched onto uniform + Subconscious, dull non-reaction to the original name.",
            runtime: "IF (试图给别人拼写自己原本的名字) THEN (舌根发麻，拼写出的字母在别人看来全是毫无逻辑的乱码)。",
            runtimeEn: "IF (Attempts_Spell_Original_Name_to_Others) THEN (Tongue numbs, spelled letters appear as completely illogical gibberish to others)."
        }
    },
    {
        id: "stake_heritage_loss",
        name: "断绝传承", nameEn: "Lineage End",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "你所守护的流派、家族、信仰，在你这里成为物理与精神意义上的绝唱。",
        defEn: "The lineage, family, or faith you guarded becomes an absolute terminal point with you.",
        core: "向着过去的长久时间线上，成为了终结者。 | The Castration: 未来的历史死亡。",
        coreEn: "Becoming the terminator on the long timeline of the past. | The Castration: Historical death of the future.",
        logic: "背负着几代人的重量，却亲手按下了停止键。这不是一个人的死，而是一整条文化脉络的灯灭。",
        logicEn: "Carrying the weight of generations, yet personally pressing the stop button. A culture's light goes out.",
        patch: {
            mechanics: "Base_LINEAGE_TERMINATION + [Ancestral_Link = Broken; Future_Probability = 0]",
            mechanicsEn: "Base_LINEAGE_TERMINATION + [Ancestral_Link = Broken; Future_Probability = 0]",
            aesthetic: "聚焦：师门最后一块牌匾在火光中化为灰烬 + 将写满秘籍的孤本一页页撕碎喂入火炉。",
            aestheticEn: "Focus: Clan's last plaque turning to ash in flames + Tearing unique manuscript pages to feed the furnace.",
            runtime: "IF (有资质极佳的少年想要拜师接续传承) THEN (必须狠下心以极其残忍的方式将其打出师门，断绝希望)。",
            runtimeEn: "IF (Highly_Talented_Youth_Wants_to_Apprentice) THEN (Must cruelly beat them out of the door to severe all hope)."
        }
    },
    {
        id: "stake_secret_exposed",
        name: "核心秘密曝光", nameEn: "Secret Exposed",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "用来维持社会面具的最痛、最不齿的潜意识秘密，被大他者全屏广播。",
        defEn: "The deepest, most shameful subconscious secret used to maintain the social mask is broadcasted globally.",
        core: "无遮无拦的终极羞耻感。 | The Castration: 心理防线的强行爆破。",
        coreEn: "Ultimate shame without cover. | The Castration: Forced demolition of psychological defenses.",
        logic: "每个人都有一具藏在柜子里的骨架。当这具骨架被拉到阳光下时，维系主体体面的所有外部幻象瞬间崩塌。",
        logicEn: "Everyone has a skeleton in the closet. When exposed, all external fantasies maintaining dignity collapse instantly.",
        patch: {
            mechanics: "Base_PRIVACY_ANNIHILATION + [Shame_Multiplier = 1000x; Mask_Integrity = 0]",
            mechanicsEn: "Base_PRIVACY_ANNIHILATION + [Shame_Multiplier = 1000x; Mask_Integrity = 0]",
            aesthetic: "聚焦：所有屏幕上闪烁着你内心最卑劣的欲念或懦弱瞬间 + 走在街上感觉衣服都是透明的赤裸感。",
            aestheticEn: "Focus: All screens flashing your vilest desires or cowardly moments + Naked sensation walking down the street as if clothes are transparent.",
            runtime: "IF (试图戴上帽子或墨镜伪装自己) THEN (周围人依然能根据信息洪流精准地用那个秘密直戳你脊梁骨)。",
            runtimeEn: "IF (Attempts_to_Hide_Behind_Hat/Shades) THEN (Bystanders still accurately poke your spine using the secret from the data flood)."
        }
    },
    {
        id: "stake_misunderstood",
        name: "永恒误解", nameEn: "Eternal Misunderstanding",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "明明是拯救一切的黑暗骑士，却背负着制造灾难的罪魁祸首的骂名，且永远无法公开辩解。",
        defEn: "The Dark Knight who saved everything bears the stigma of being the disaster's cause, forever unable to publicly defend.",
        core: "自我实现的悖论。英雄的隐形外衣是黑色的刺客斗篷。 | The Castration: 正当性与功勋的剥夺。",
        coreEn: "The hero's invisibility cloak is a black assassin's cape. | The Castration: Deprivation of legitimacy and merit.",
        logic: "与纯粹的污名化不同，这是为了保全所爱之人或大局而主动签署的缄默协议。越是不公，这股代价释放的结项能量(M7)越浩瀚。",
        logicEn: "A voluntary silence pact signed to preserve loved ones/big picture. The more unjust, the vaster the ending energy (M7).",
        patch: {
            mechanics: "Base_DARK_KNIGHT_PACT + [Merit_Claim = Forbidden; Misconception = Solidified]",
            mechanicsEn: "Base_DARK_KNIGHT_PACT + [Merit_Claim = Forbidden; Misconception = Solidified]",
            aesthetic: "聚焦：躲在暗巷看着自己救下的小女孩朝自己的通缉令吐口水 + 身上带伤却不能去公立医院的狼狈。",
            aestheticEn: "Focus: Hiding in dark alley watching the saved little girl spit on your wanted poster + Wounded but unable to visit public hospital.",
            runtime: "IF (在酒醉或崩溃边缘想要吐露真言) THEN (想起那个誓言的重量，咬破嘴唇将话和血咽回去)。",
            runtimeEn: "IF (On_Verge_of_Drunk_Breakdown_Wants_to_Speak_Truth) THEN (Remembering the oath's weight, bites lip to swallow the words and blood)."
        }
    },
    {
        id: "stake_ghosted",
        name: "存在之弦的斩断", nameEn: "Ghosted",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "原本亲密的所有社会连接（亲人、爱人、朋友）如同被集体格式化般，同时对你关闭了大门。",
        defEn: "All formerly intimate social connections simultaneously close their doors to you.",
        core: "失去所有能在世界上将你锚定的“他人的爱”。 | The Castration: 情感引力的丧失。",
        coreEn: "Losing all 'love of others' that anchors you. | The Castration: Loss of emotional gravity.",
        logic: "当大他者把维系你网络的节点逐一拔除，你的重力就不复存在。这不是孤独，这是深空失重。",
        logicEn: "When the Big Other unplugs the nodes maintaining your network, your gravity ceases. This is deep-space weightlessness.",
        patch: {
            mechanics: "Base_RELATION_SEVERANCE + [Intimate_Bonds = Force_Null; Social_Gravity = Lost]",
            mechanicsEn: "Base_RELATION_SEVERANCE + [Intimate_Bonds = Force_Null; Social_Gravity = Lost]",
            aesthetic: "聚焦：连续拨打几十个亲友电话听到的同一段空号提示音 + 完全切断羁绊后的极致安静。",
            aestheticEn: "Focus: Dialing dozens of family/friends hearing identical disconnected tone + Utter silence after all bonds severed.",
            runtime: "IF (冲到爱人面前) THEN (爱人看你的眼神没有任何敌意，只有看一件极其无聊的家具的漠然)。",
            runtimeEn: "IF (Rushes_in_front_of_Lover) THEN (Lover's eyes hold no hostility, only the indifference of looking at boring furniture)."
        }
    },
    {
        id: "stake_censored",
        name: "被审查/封印", nameEn: "Censored",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "你的思想、作品、甚至是提到你的关键词，都被系统的底层算法永久屏蔽。",
        defEn: "Your thoughts, works, even keywords mentioning you are permanently banned by the system's core algorithms.",
        core: "404 Not Found 也是一种物理攻击。 | The Castration: 话语播种能力的阉割。",
        coreEn: "404 Not Found is a physical attack. | The Castration: Castration of discourse seeding capability.",
        logic: "你的思想被切除了繁殖器。任何试图延续你精神的载体都会在系统内瞬间灰飞烟灭。",
        logicEn: "Your thoughts are neutered. Any carrier attempting to continue your spirit turns to ash instantly.",
        patch: {
            mechanics: "Base_ALGORITHMIC_BAN + [Idea_Propagation = 0%; Keyword = Corrupted]",
            mechanicsEn: "Base_ALGORITHMIC_BAN + [Idea_Propagation = 0%; Keyword = Corrupted]",
            aesthetic: "聚焦：书页上的字迹在阅读者注视下像黑雾般蒸发 + 发布任何文字瞬间变成一排冰冷的星号。",
            aestheticEn: "Focus: Text on pages evaporates like black smoke under reader's gaze + Posted words instantly turn into cold asterisks.",
            runtime: "IF (试图用加密隐喻传递信息) THEN (系统会启动最高频测谎直接将隐喻的上下文也随之烧毁)。",
            runtimeEn: "IF (Attempts_to_Pass_Info_via_Encrypted_Metaphors) THEN (System runs high-frequency polygraph to instantly incinerate the metaphor's context)."
        }
    },
    {
        id: "stake_data_wipe",
        name: "数字底裤被抽走", nameEn: "Data Wipe",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "在数字时代，失去所有账号、银行数据、信贷记录，成为一个完全不被扫描的游魂。",
        defEn: "Losing all accounts, bank data, and credit records; becoming an unscannable wandering ghost in the digital age.",
        core: "脱离了Matrix的电池。 | The Castration: 数据化身（Digital Avatar）的蒸发。",
        coreEn: "Detached battery from the Matrix. | The Castration: Evaporation of the Digital Avatar.",
        logic: "现代人的大部分存在是由服务器中的 0 和 1 构成的。一旦删除，你在所有的电子眼中就等同于一块死肉，寸步难行。",
        logicEn: "Most of a modern person's existence is 0s and 1s in servers. Erased, you are stalled dead meat to all electronic eyes.",
        patch: {
            mechanics: "Base_CYBER_DEATH + [Server_Instances = 0; Payment_Ability = Denied]",
            mechanicsEn: "Base_CYBER_DEATH + [Server_Instances = 0; Payment_Ability = Denied]",
            aesthetic: "聚焦：一排排ATM机在你走近时瞬间蓝屏闪烁警示红灯 + 出租车电子锁自动弹开拒绝载客。",
            aestheticEn: "Focus: ATM rows auto-bluescreen/flash red as you approach + Taxi electronic locks auto-eject to reject boarding.",
            runtime: "IF (试图用现金或物物交换) THEN (现代大他者的运行机制早已不识别这些中世纪的交易方式)。",
            runtimeEn: "IF (Attempts_to_Use_Cash_or_Barter) THEN (Modern Big Other's mechanics no longer recognize medieval trades)."
        }
    },
    {
        id: "stake_language_loss",
        name: "异化之舌", nameEn: "Language Loss",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "母语被强行斩断，被迫终生使用敌人或压迫者的语言来思维和发音。",
        defEn: "Mother tongue forcibly severed; forced for life to think and pronounce in the enemy's language.",
        core: "语言是存在的家。剥夺语言是比摧毁房屋更深的剥夺。 | The Castration: 文化与潜意识防线的沦陷。",
        coreEn: "Language is the house of being. | The Castration: Fall of cultural and subconscious defenses.",
        logic: "每一次开口讲话，都在经历对自己文明的微型背叛。你活下来了，但你的舌头和梦境都被寄生了。",
        logicEn: "Every time you speak, you experience a micro-betrayal of your civilization. Your tongue and dreams are parasitized.",
        patch: {
            mechanics: "Base_TONGUE_GRAFT + [Mother_Tongue_Syntax = Corrupted_Forbidden; Hegemonic_Logic = Forced_Root]",
            mechanicsEn: "Base_TONGUE_GRAFT + [Mother_Tongue_Syntax = Corrupted_Forbidden; Hegemonic_Logic = Forced_Root]",
            aesthetic: "聚焦：梦呓时被陌生的敌国词汇惊醒并呕吐 + 张嘴时舌尖如同被针扎般的抵触感。",
            aestheticEn: "Focus: Awakened and vomiting alien enemy words in sleep-talking + Needle-pricking resistance at tongue tip when opening mouth.",
            runtime: "IF (试图去读懂曾经写下的母语日记) THEN (那些字迹变得如同远古甲骨文般遥远不可解)。",
            runtimeEn: "IF (Attempts_to_Read_Old_Diary_in_Mother_Tongue) THEN (The script becomes as distant and indecipherable as ancient oracle bones)."
        }
    },
    {
        id: "stake_face_loss",
        name: "面具剥夺（毁容）", nameEn: "Disfigurement",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "代表着社会交往名片的面孔被彻底损毁，外貌跌出了人类可接纳的正常审美图谱。",
        defEn: "The face, representing the social interaction card, is utterly destroyed, falling out of acceptable aesthetic charts.",
        core: "《歌剧魅影》的核心悲剧。镜像阶段的二次创伤。 | The Castration: 社交皮肤的扒除。",
        coreEn: "The core tragedy of Phantom of the Opera. | The Castration: Peeling off the social skin.",
        logic: "面容是主体在镜像中自我认同的地基。地基毁没，路人投来的每一个厌恶或同情的眼神，都在重演一次阉割。",
        logicEn: "The face is the foundation of self-identification. Every disgusted look from a passerby replays the castration.",
        patch: {
            mechanics: "Base_FACIAL_OBLITERATION + [Mirror_Stage_Rejection = True; Social_Aesthetic_Score = 0]",
            mechanicsEn: "Base_FACIAL_OBLITERATION + [Mirror_Stage_Rejection = True; Social_Aesthetic_Score = 0]",
            aesthetic: "聚焦：所有镜子、反光的玻璃幕墙被主角歇斯底里地砸碎 + 孩子们看到脸时的尖叫。",
            aestheticEn: "Focus: Hysterically smashing all mirrors and reflective glass facades + Children screaming at sight of the face.",
            runtime: "IF (主体试图去感受微风吹过面颊) THEN (被毁坏的神经末梢只能传回僵硬与痛楚)。",
            runtimeEn: "IF (Subject_Attempts_to_Feel_Breeze_on_Cheek) THEN (Destroyed nerve endings only feedback stiffness and pain)."
        }
    },
    {
        id: "stake_uniform_strip",
        name: "剥夺法勒斯（制服提取）", nameEn: "Stripped Uniform",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "在公共仪式上被强制剥夺象征权力的制服、勋章、头衔或法器。",
        defEn: "Forcibly stripped of uniforms and symbols of power in a public ceremony.",
        core: "撕碎那件让你显得不可一世的外部铠甲。 | The Castration: 权力幻象的收缴。",
        coreEn: "Tearing up the external armor that made you seem invincible. | The Castration: Confiscation of power fantasy.",
        logic: "由于认清了权力依附的是衣服而不是肉体，M6 降临时只是简单地剥去外壳，主体便从‘神’退化成了发抖的‘蝼蚁’。",
        logicEn: "Power attaches to clothes, not flesh. Peeling the shell reduces the 'god' to a shivering 'ant'.",
        patch: {
            mechanics: "Base_UNIFORM_STRIP + [Authority_Aura = Cleared; Power_Symbol = Confiscated]",
            mechanicsEn: "Base_UNIFORM_STRIP + [Authority_Aura = Cleared; Power_Symbol = Confiscated]",
            aesthetic: "聚焦：勋章坠地回声空旷的大理石大厅 + 失去肩章后显得单薄甚至佝偻的肩膀。",
            aestheticEn: "Focus: Medals echoing on empty marble hall floor + Thin, hunched shoulders after losing epaulettes.",
            runtime: "IF (试图用过去的光辉功绩辩护) THEN (法庭会以冷笑碾压：‘你曾经拥有的，正是我们要收回的’)。",
            runtimeEn: "IF (Attempts_to_Defend_using_Past_Glorious_Merits) THEN (Court crushes with sneer: 'What you once had is precisely what we retract')."
        }
    },
    {
        id: "stake_scandal",
        name: "身败名裂（社会性绞刑）", nameEn: "Scandal",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "用极其难堪且不可辩驳的丑闻，全方位摧毁一个人建立了一辈子的公众信誉结构。",
        defEn: "Destroying a lifelong public credibility structure with embarrassing, irrefutable scandals.",
        core: "比死亡更煎熬的媒体凌迟。 | The Castration: 名誉殿堂的爆破。",
        coreEn: "Media execution by a thousand cuts, worse than death. | The Castration: Demolition of the hall of fame.",
        logic: "大他者（公众媒体与道德法庭）的狂欢。丑闻不在于真假，在于它精准击中了社会系统最喜欢的猎奇点，使其再无翻身可能。",
        logicEn: "The carnival of the Big Other. The scandal precisely hits the system's favorite sensational spots.",
        patch: {
            mechanics: "Base_SOCIAL_EXECUTION + [Media_Feeding_Frenzy = Active; Reputation_Shield = Shattered]",
            mechanicsEn: "Base_SOCIAL_EXECUTION + [Media_Feeding_Frenzy = Active; Reputation_Shield = Shattered]",
            aesthetic: "聚焦：闪光灯如密集炮火般射向捂着脸的双手 + 原本的至交在媒体前急着与你撇清关系。",
            aestheticEn: "Focus: Camera flashes firing like dense artillery at face-covering hands + Former best friends rushing to disown you on media.",
            runtime: "IF (提出清晰有力的自证证据) THEN (证据马上被算法淹没在阴谋论与新一轮娱乐化解构的浪潮中)。",
            runtimeEn: "IF (Submits_Clear_Self-Proving_Evidence) THEN (Evidence immediately drowned by algorithm in waves of conspiracy and entertaining deconstruction)."
        }
    },
    {
        id: "stake_contract_void",
        name: "契约作废", nameEn: "Void Contract",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "毕生奋斗换来的一项终极承诺或契约，在大他者变脸的一刻被宣告为废纸。",
        defEn: "A sworn ultimate promise or contract, fought for lifelong, is declared invalid the moment the Big Other turns its face.",
        core: "《卡夫卡》式的荒诞。规则的解释权永远在大他者手里。 | The Castration: 奋斗逻辑链条的切断。",
        coreEn: "Kafkaesque absurdity. | The Castration: Severing the logic chain of struggle.",
        logic: "你以为你在遵循规则升级，最后发现桌子都是庄家的。你的全部努力成了一场滑稽的跑轮跑酷。",
        logicEn: "You thought you were following rules to level up, only to find the table belongs to the dealer.",
        patch: {
            mechanics: "Base_CONTRACT_ANNULMENT + [Rule_Interpreter = Enemy_Controlled; Previous_Efforts = Null]",
            mechanicsEn: "Base_CONTRACT_ANNULMENT + [Rule_Interpreter = Enemy_Controlled; Previous_Efforts = Null]",
            aesthetic: "聚焦：拿着盖着公章的纸件却被长官当面撕碎并像看傻子一样看着你 + 十年苦功化为一拍脑门的无效通告。",
            aestheticEn: "Focus: Holding stamped official paper ripped explicitly by commander looking at you like an idiot + 10-year toil reduced to slap-head invalid notice.",
            runtime: "IF (寻找法庭或高层申诉) THEN (所有的层级都会踢皮球，并且用相同的废话公文挡回)。",
            runtimeEn: "IF (Seeks_Court_or_Top_Level_Appeals) THEN (All ranks pass the buck, rejecting via identical nonsense paperwork)."
        }
    },
    {
        id: "stake_legacy_ruin",
        name: "帝国毁灭（遗产归零）", nameEn: "Legacy Ruin",
        group: "A. 符号性死亡", groupEn: "Symbolic",
        def: "眼睁睁看着自己亲手建立的庞大基业（公司、国家或组织）分崩离析，化为废墟。",
        defEn: "Watching the massive foundation (company, country, organization) you built fall apart into ruins.",
        core: "《奥斯曼狄斯》的荒凉落幕。“看我的丰功伟绩，尔等强者也只能绝望！” | The Castration: 延伸自我的崩塌。",
        coreEn: "Ozymandias' desolate curtain call. | The Castration: Collapse of the extended self.",
        logic: "权力与基业是主体在现实世界最大的外挂法勒斯。打烂它，就是砍断了主体在这世上投射阴影的那根巨柱。",
        logicEn: "Power and foundation are the subject's largest external Phallus. Smashing it cuts the pillar projecting their shadow.",
        patch: {
            mechanics: "Base_EMPIRE_DEMOLITION + [Monument_Integrity = Disintegrating; Historical_Meaning = Erased]",
            mechanicsEn: "Base_EMPIRE_DEMOLITION + [Monument_Integrity = Disintegrating; Historical_Meaning = Erased]",
            aesthetic: "聚焦：坐在大厦顶层看着脚下股票线崩断归零的绿色幽光 + 宏伟标志牌上的最后一个字母在一阵风中砸向地面。",
            aestheticEn: "Focus: Sitting atop skyscraper watching stocklines snap to zero in eerie green light + Final letter of grand logo crashing down in a gust of wind.",
            runtime: "IF (试图用尽全力去扶起柱子稳住大局) THEN (主体的力量在大势的溃散面前如同螳臂当车，只会被落石砸伤)。",
            runtimeEn: "IF (Attempts_with_all_Might_to_Hold_the_Pillar_and_Stabilize) THEN (Subject's strength is like a mantis stopping a chariot, only ending up bruised by falling rocks)."
        }
    }
];
