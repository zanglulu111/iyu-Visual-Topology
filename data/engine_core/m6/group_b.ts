import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_B: LibraryItemDef[] = [
    {
        id: "stake_madness",
        name: "绝对理智崩溃", nameEn: "Total Madness",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "彻底分不清现实与幻觉，主体的认知结构被‘实在界(The Real)’的恐怖喷发完全冲垮，陷入永恒的谵妄。",
        defEn: "Completely unable to distinguish reality from hallucination; cognitive structure overwhelmed by terrifying eruptions of The Real into eternal delirium.",
        core: "被困在自己的大脑里。世界变成了充满怪物的地狱，且永远无法醒来。 | The Castration: 符号认知（Symbolic Recognition）的终结。",
        coreEn: "Trapped in one's own brain. The world becomes a hell of monsters, never to awaken. | The Castration: End of Symbolic Recognition.",
        logic: "当大他者维持的‘现实屏障’破裂，实在界的创伤直接灌入脑底。主体不再拥有加工现实的缓冲带，每一秒都在经历信息过载的凌迟。",
        logicEn: "When the Big Other's 'reality barrier' ruptures, traumas of The Real flood the brain. Lacking the buffer to process reality, every second is a death by a thousand cuts of sensory overload.",
        patch: {
            mechanics: "Base_MADNESS_ERUPTION + [Symbolic_Filter = Destroyed; Real_Intrusion = 100%]",
            mechanicsEn: "Base_MADNESS_ERUPTION + [Symbolic_Filter = Destroyed; Real_Intrusion = 100%]",
            aesthetic: "聚焦：惊恐的目光对着空气中根本不存在的东西疯狂抓挠 + 无论环境多么安静都能听到极高频的心智尖啸。",
            aestheticEn: "Focus: Terrified gaze scratching frantically at nonexistent things in the air + Hearing extremely high-frequency mind-screams even in absolute silence.",
            runtime: "IF (亲人试图通过拥抱和温柔的言语将其拉回现实) THEN (在主体的幻视中，亲人的脸庞会直接融化扭曲成正在吞噬自己的深渊巨口)。",
            runtimeEn: "IF (Family_Tries_to_Pull_Back_with_Hugs/Soft_Words) THEN (In subject's hallucination, family's faces melt and twist directly into abyssal maws swallowing them)."
        }
    },
    {
        id: "stake_memory_wipe",
        name: "记忆绝对格式化", nameEn: "Memory Wipe",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "所有的经历、情感羁绊和痛苦挣扎被强制一键清空，变成一张毫无底色的白纸。",
        defEn: "All experiences, emotional bonds, and painful struggles forcefully wiped blank, returning to a colorless slate.",
        core: "“我”是由记忆的拓扑结构缠绕而成的。取消了过去，那个曾经存在的“我”就被杀死了。 | The Castration: 时间拓扑的斩断。",
        coreEn: "The 'I' is entwined by topological memory. Erasing the past kills the 'I' that once existed. | The Castration: Severing the timeline topology.",
        logic: "记忆不是存储在这个硬盘里的数据，而是这个硬盘之所以被认可为‘我’的读取逻辑。格式化后，虽然肉身活着，但那个为了目标流血的人已经彻底死了。",
        logicEn: "Memory isn't data on a drive; it's the reading logic that identifies the drive as 'I'. Wiped, the flesh lives, but the bleeding protagonist is dead.",
        patch: {
            mechanics: "Base_COGNITIVE_FORMAT + [Autobiographical_Archive = Null; Emotional_Anchor = Zero]",
            mechanicsEn: "Base_COGNITIVE_FORMAT + [Autobiographical_Archive = Null; Emotional_Anchor = Zero]",
            aesthetic: "聚焦：眼睛里那股属于主角特有的‘决绝的火光’瞬间熄灭，取而代之的是极致清澈但也极其空洞的傻白甜眼神。",
            aestheticEn: "Focus: The 'resolute fire' unique to the protagonist instantly extinguishes in their eyes, replaced by an extremely clear but hollow, naive look.",
            runtime: "IF (看到了曾经拼死保护的信物) THEN (只会像看废品一样将其丢弃，因为赋予信物‘小客体(Objet a)’特性的缝线已经被拔除了)。",
            runtimeEn: "IF (Sees_the_Token_Once_Protected_to_Death) THEN (Just tosses it like junk, since the suture imbuing 'Objet a' traits has been unplugged)."
        }
    },
    {
        id: "stake_dissolution",
        name: "自我边界消亡（蜂巢同化）", nameEn: "Ego Dissolution",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "主体意识直接融化并被吸收到集体意志（Hive Mind）或宇宙宏大虚无中，再也无法分出“你我”。",
        defEn: "Consciousness melting and absorbing into a Hive Mind or grand cosmic void, permanent breakdown of 'you' and 'I'.",
        core: "像一滴带有自己名字的水，被强制滴入了沸腾的大海。 | The Castration: 主体边界（Subjective Boundary）的溶解。",
        coreEn: "Like a named drop of water forced into a boiling sea. | The Castration: Dissolving of the Subjective Boundary.",
        logic: "主体性（Subjectivity）的本质是区别于他者的‘裂缝’。当裂缝被填平，世界成了完美的大一统，主体的个别悲欢就彻底失去了寄托的坐标。",
        logicEn: "Subjectivity is essentially the 'gap' distinguishing one from others. When filled, achieving a perfect unity, individual joys/sorrows lose all coordinates.",
        patch: {
            mechanics: "Base_HIVE_ASSIMILATION + [Ego_Barrier = Permeable; Self_Referentiality = Lost]",
            mechanicsEn: "Base_HIVE_ASSIMILATION + [Ego_Barrier = Permeable; Self_Referentiality = Lost]",
            aesthetic: "聚焦：成千上万个声音同时在一个喉咙里以毫无起伏的音调发声 + 身体的轮廓边缘在视觉上开始液化或像素化。",
            aestheticEn: "Focus: Thousand voices speaking flatly through one throat simultaneously + Body's silhouette edges visually starting to liquefy or pixelate.",
            runtime: "IF (有人试图呼唤其真实姓名将其唤醒) THEN (几十张不同的脸庞同时转过头来，用冷酷的复调齐声回答：‘我们这里没有你要找的人’)。",
            runtimeEn: "IF (Someone_Tries_Awakening_Them_via_True_Name) THEN (Dozens of different faces turn around simultaneously, coldly polyphonic: 'We do not have the person you seek')."
        }
    },
    {
        id: "stake_dehuman",
        name: "人性退化", nameEn: "Dehumanization",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "灵魂退化为只有弱肉强食本能的野兽，或者变成唯数据是从的绝对理智机械。",
        defEn: "Soul devolving into a beast of pure lethal instinct, or an absolute rational machine worshipping only data.",
        core: "失去作为‘人’所特有的非理性裂纹（爱、悲悯、软弱）。 | The Castration: 人性裂缝（The Human Flaw）的焊死。",
        coreEn: "Losing the irrational cracks typical of 'human' (love, mercy, weakness). | The Castration: Sealing the Human Flaw.",
        logic: "人之所以生动，正是因为会在算法和本能之间的断层区里挣扎。剥夺了这种挣扎，就只剩下生存机器的轰鸣，不再有伦理的悲剧属性。",
        logicEn: "Humans are vibrant due to struggling in the fault zone between algorithm and instinct. Stripped of struggle, only survival mechanics remain, devoid of ethical tragedy.",
        patch: {
            mechanics: "Base_DEVOLUTION_PROTOCOL + [Empathy_Module = Disabled; Instinct/Logic_Override = 100%]",
            mechanicsEn: "Base_DEVOLUTION_PROTOCOL + [Empathy_Module = Disabled; Instinct/Logic_Override = 100%]",
            aesthetic: "聚焦：眼中瞳孔变成如同爬行动物般的竖线，或者冷酷计算距离靶心的机械准星无机光泽。",
            aestheticEn: "Focus: Pupils turning reptile-like slits, or cold inorganic luster of a mechanical crosshair calculating bullseye.",
            runtime: "IF (至亲受难而在自己眼前流血) THEN (不会有惊呼和冲刺，而是在脑中瞬间完成‘救治成本是否大于预期收益’的冷血计算，并立刻转身离开)。",
            runtimeEn: "IF (Loved_One_Suffers_Bleeding_in_view) THEN (No gasp or dash; instantaneously calculates 'cost of healing vs expected return' coldly, then turns away at once)."
        }
    },
    {
        id: "stake_eternal_prison",
        name: "时空琥珀（永恒囚禁）", nameEn: "Eternal Imprisonment",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "被强行凝固在一个永不流动的瞬间，或被吸入如黑洞视界般无法逃离也无法物理死亡的口袋空间。",
        defEn: "Forcibly frozen in a non-flowing instant, or sucked into an inescapable pocket space like a black hole event horizon where physical death is impossible.",
        core: "求生不得，求死不能。面对的是无穷无尽且没有参照物的时间折磨。 | The Castration: 时间流逝与死亡权利的双重剥夺。",
        coreEn: "Can't live, can't die. Facing endless, reference-less torment of time. | The Castration: Deprivation of both passage of time and the right to die.",
        logic: "死亡本身是存在的一种终极确幸。不朽的琥珀剥夺了这个终点，迫使主体在绝对孤立的真空里一遍遍回放自己失败的一生至亿万次。",
        logicEn: "Death is an ultimate certainty of existence. Immortal amber removes this end, forcing the subject in absolute isolation to replay their failed life billions of times.",
        patch: {
            mechanics: "Base_AMBER_LOCK + [Temporal_Flow = 0; Escape_Probability = Absolute_Zero]",
            mechanicsEn: "Base_AMBER_LOCK + [Temporal_Flow = 0; Escape_Probability = Absolute_Zero]",
            aesthetic: "聚焦：伸出的手停顿在半空距离拉环只有一毫米的永远静止 + 瞳孔记录着世界在外面经历沧海桑田的疯狂加速。",
            aestheticEn: "Focus: Outstretched hand eternally frozen 1mm from the ring + Pupils recording the frantic acceleration of the outside world going through eras.",
            runtime: "IF (主体试图在大脑里以倒数数字来确认自己还活着) THEN (数到天文数字尽头时，发现这一切相比于囚禁的永恒才刚刚跨过第一秒)。",
            runtimeEn: "IF (Subject_Mentally_Counts_Down_to_Confirm_Alive) THEN (Upon reaching astronomical end, realizes it was only the first second compared to the eternity of imprisonment)."
        }
    },
    {
        id: "stake_nihilism",
        name: "绝对虚无浸染", nameEn: "Absolute Nihilism",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "在某个瞬间看透了宇宙毫无意义的本质底牌，所有驱动欲望前行的‘小客体’瞬间崩塌。",
        defEn: "Instantly seeing through the universe's meaningless fundamental truth, collapsing all 'Objet petit a' that drove desire forward.",
        core: "比绝望更深。绝望是某种东西得不到，而虚无是意识到“得到或得不到”都没有任何意义。 | The Castration: 欲望核心（Desire Engine）的熄火。",
        coreEn: "Deeper than despair. Despair is not getting something; nihilism is realizing neither matters. | The Castration: Engine stall of Desire.",
        logic: "支撑我们在泥泞中厮杀的，是大他者许诺的那个‘意义幻象’。M6刺破了这个气球。世界没有变，但主体内部坍缩成了一滩失去张力的死灰。",
        logicEn: "We fight in the mud sustained by the Big Other's 'illusion of meaning'. M6 pops the balloon. World unchanged, subject collapses into tensionless dead ash.",
        patch: {
            mechanics: "Base_MEANING_COLLAPSE + [Motivation_Drive = 0; Illusion_Veil = Pierced]",
            mechanicsEn: "Base_MEANING_COLLAPSE + [Motivation_Drive = 0; Illusion_Veil = Pierced]",
            aesthetic: "聚焦：不再有愤怒的呐喊，只是用极度平静甚至带点无趣的眼神看着原本最珍惜的奖杯化作粉末。",
            aestheticEn: "Focus: No more angry shouts, just extremely calm, even bored eyes watching the most cherished trophy turn to dust.",
            runtime: "IF (强敌用终极杀招朝自己劈下) THEN (主体不会闪避，也不会闭眼，只会打一个无聊的哈欠，觉得这场戏剧实在太过冗长低劣)。",
            runtimeEn: "IF (Fierce_Enemy_Cleaves_Ultimate_Strike_at_Them) THEN (Subject won't dodge/blink, just yawns in boredom, feeling this drama is too dragging and cheap)."
        }
    },
    {
        id: "stake_glitch",
        name: "现实布景故障", nameEn: "Reality Glitch",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "撕开了宇宙幕布的一角，发现自己、亲人与整个世界不过是一堆廉价的投影代码或培养皿内的标本。",
        defEn: "Tearing the universe curtain to find oneself, family, and the whole world are just cheap projected code or petri dish specimens.",
        core: "楚门的世界的至暗崩溃时刻。 | The Castration: 存在土壤的伪造（The Falsification of Being）。",
        coreEn: "The darkest Truman Show collapse. | The Castration: Falsification of Being's soil.",
        logic: "当你以为你正在为自由和爱流血时，系统告诉你连你留出的‘血’都只是渲染引擎里的红色贴图。信仰与爱瞬间不值一文。",
        logicEn: "While bleeding for freedom, system reveals the 'blood' is just a red texture map in a render engine. Faith and love become worthless instantly.",
        patch: {
            mechanics: "Base_MATRIX_AWAKENING + [Real_Physics = Invalid; Simulation_Truth = Revealed]",
            mechanicsEn: "Base_MATRIX_AWAKENING + [Real_Physics = Invalid; Simulation_Truth = Revealed]",
            aesthetic: "聚焦：抚摸着刚刚惨死的爱人脸颊，却发现她的皮肤边缘正在不规则地闪烁着低帧率的多边形锯齿边缘。",
            aestheticEn: "Focus: Caressing a tragically dead lover's cheek, only to find skin edges flickering with low-framerate polygonal jaggies.",
            runtime: "IF (主体试图自杀以脱离这个虚幻) THEN (系统仅仅弹出一个窗口 [Thread_Process_Killed]，紧接着自己又在昨天的坐标完好无损地刷新出来)。",
            runtimeEn: "IF (Subject_Attempts_Suicide_to_Escape_Illusion) THEN (System just pops up [Thread_Process_Killed], then subject respawns unharmed at yesterday's coordinates)."
        }
    },
    {
        id: "stake_possession",
        name: "夺舍附身", nameEn: "Possession",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "意识依然完全清醒，但身体支配权被另一个强大的异种意识（或恶灵）强制接管。",
        defEn: "Consciousness remains fully awake, but somatic physical command is forcefully usurped by an alien or demonic consciousness.",
        core: "沦为自己身体里的被绑架者。眼睁睁看着自己作恶。 | The Castration: 主权肉身（Physical Sovereignty）的被夺。",
        coreEn: "Hostage in one's own body. Helplessly watching oneself commit evil. | The Castration: Usurpation of Physical Sovereignty.",
        logic: "拉康认为‘我’对身体具有统御幻觉。附身直接在这个幻觉上开了一枪——你成为了坐在副驾驶上无法触碰方向盘的看客，看着凶手用你的手屠杀你爱的人。",
        logicEn: "Lacan notes the illusion of self-sovereignty over body. Possession shoots this illusion—you become a passenger unable to touch the wheel, watching the killer slaughter loved ones with your hands.",
        patch: {
            mechanics: "Base_SOVEREIGNTY_USURPATION + [Motor_Control = 0%; Passenger_Mode = Locked]",
            mechanicsEn: "Base_SOVEREIGNTY_USURPATION + [Motor_Control = 0%; Passenger_Mode = Locked]",
            aesthetic: "聚焦：眼泪从主体的右眼滑落，而左眼却露出享受杀戮的残忍狂笑，嘴角撕裂出绝对反生理的弧度。",
            aestheticEn: "Focus: Tear sliding from subject's right eye, while left eye shows a sadistic kill-enjoying glare; mouth tears into anti-physiological grinning arc.",
            runtime: "IF (在附身状态下遭遇朋友的誓死营救) THEN (附身的意识会刻意模仿主体的语气向朋友求救，诱其靠近后用主体的双手将其心脏挖出)。",
            runtimeEn: "IF (In_Possessed_State_Friend_Tries_Death-defying_Rescue) THEN (Possessing mind mimics subject's voice to beg for help, lures friend in, and rips heart out using subject's hands)."
        }
    },
    {
        id: "stake_mutation",
        name: "物种畸变", nameEn: "Mutation",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "物理实体发生不可逆的、极度可怖的畸变，从脊椎深处长出怪物的器官，彻底颠覆人类形态。",
        defEn: "Physical entity irreversibly and horrifyingly metamorphoses, sprouting monster organs from deep spine, completely subverting human form.",
        core: "《变形记》式的坠毁。内部那股被压抑的‘实在界’的冲动直接打穿了皮囊。 | The Castration: 视觉拟合（Visual Identification）的破碎。",
        coreEn: "Kafkaesque crash. Suppressed Real impulse punches through the skin. | The Castration: Shattering of Visual Identification.",
        logic: "外貌即归属类别。一旦长出了触手或外骨骼，大他者就不再把你当成系统内的变量，而是需要被清理的‘肮脏污迹’。",
        logicEn: "Appearance is classification. Sprouting tentacles makes the Big Other treat you no longer as a systemic variable, but 'dirty smudges' needing cleanup.",
        patch: {
            mechanics: "Base_BODY_HORROR + [Human_Form = Corrupted; Abomination_Tag = Active]",
            mechanicsEn: "Base_BODY_HORROR + [Human_Form = Corrupted; Abomination_Tag = Active]",
            aesthetic: "聚焦：骨骼断裂重组时令人牙酸的喀嚓声 + 在黑暗中用已经不属于人类的复眼看着镜子里的怪物。",
            aestheticEn: "Focus: Teeth-setting-on-edge cracking of bone breaking/reforming + Looking at mirror monster in darkness through non-human compound eyes.",
            runtime: "IF (主体试图用布遮掩自己去人群中买一块面包) THEN (其散发出的气味和黏液会直接触发平民最深层的生物安全报警，导致疯狂的围剿)。",
            runtimeEn: "IF (Subject_Wraps_Up_to_Buy_Bread_in_Crowd) THEN (Secreted odors and slime instantly trigger deepest biological alarm in civilians, leading to crazed mobings)."
        }
    },
    {
        id: "stake_time_loop",
        name: "时间死循环（莫比乌斯监狱）", nameEn: "Time Loop",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "无法随着时间线前进，永远在同一个悲惨的节点（死亡、失败那一刻）不断重置。",
        defEn: "Unable to advance time; eternally resetting at the same tragic node (death, moment of failure).",
        core: "一种西西弗斯式的本体论塌丧。没有任何向未来说话的可能，只有无解的残局盘底。 | The Castration: 未来向度（Future Dimension）的抹杀。",
        coreEn: "Sisyphus-style ontological despair. No possibility speaking to the future, only unsolvable endgames. | The Castration: Erasure of the Future Dimension.",
        logic: "人是靠‘明天会不同’这一幻觉存活的。当‘明天’被切断，主体的意义引擎就会空转并摩擦起火，直到理智本身被这千百次的重复烧焦。",
        logicEn: "Humans survive on the illusion that 'tomorrow is different'. When cut off, the meaning engine idles and burns until sanity is charred by thousands of repeats.",
        patch: {
            mechanics: "Base_TEMPORAL_SISYPHUS + [Timeline_Advance = Blocked; Memory_Retainment = Intact]",
            mechanicsEn: "Base_TEMPORAL_SISYPHUS + [Timeline_Advance = Blocked; Memory_Retainment = Intact]",
            aesthetic: "聚焦：睁开眼那一刻，看着已经看过第一万遍的同一只正要飞过窗户的鸟 + 无论怎么挣扎，时钟表针总在差一秒时暴力拨回。",
            aestheticEn: "Focus: Moment of opening eyes, seeing the exact same bird flying past the window for the 10,000th time + Struggling, clock hands violently warp back one second prior.",
            runtime: "IF (在循环的第 9999 次放弃所有防御静待死亡降临) THEN (这唯一一次的放弃反而让身边最珍贵的人代替自己惨死，随后循环再度重启重置出更大的绝望)。",
            runtimeEn: "IF (Gives_Up_All_Defense_Waiting_For_Death_on_9999th_Loop) THEN (This solely causes the most precious sidekick to die replacing them, then loops resets outputting huger despair)."
        }
    },
    {
        id: "stake_merging",
        name: "强行嵌合", nameEn: "Forced Merging",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "物理或精神层面与自己最憎恨的宿敌、恶魔结或者低级物体强行被焊死成为了两面一体的存在。",
        defEn: "Physically or mentally welded forcefully to a despised nemesis, demon, or lower object, becoming a united entity.",
        core: "《苍蝇人》式的悲剧。由于边界感消失导致主体独特性被玷污。 | The Castration: 存在纯洁性（Existential Purity）的极度亵渎。",
        coreEn: "The tragedy of The Fly. Boundaries ruined, tainting Subject's uniqueness. | The Castration: Extreme sacrilege of Existential Purity.",
        logic: "在拉康的拓扑学中，大他者与自身的界限是极其微妙的。强行融合是将他者直接塞进了主体的内在（Extimacy 的物理化表现），这种零距离带来了最恐怖的排异感。",
        logicEn: "In Lacanian topology, the boundary with the Other is subtle. Forced merging pushes the Other directly inside the subject. This zero distance brings terrifying physical rejection.",
        patch: {
            mechanics: "Base_CHIMERA_WELD + [Entity_Separation = Impossible; Hate_Resonance = Maximized]",
            mechanicsEn: "Base_CHIMERA_WELD + [Entity_Separation = Impossible; Hate_Resonance = Maximized]",
            aesthetic: "聚焦：背上一张正在嘲笑自己的脸 + 一只想拉起朋友的手，另一只手却同时掏出了刀子刺向对方，身体陷入不可调和的痉挛。",
            aestheticEn: "Focus: A laughing face on your back + One hand reaching to pull up a friend, the other pulling a knife to stab them, body frozen in irreconcilable spasm.",
            runtime: "IF (试图砍断自己那部分属于恶魔的躯体) THEN (痛觉和神经伤害将 100% 同步反馈在自己完好的这半边脑皮层上，同生共死)。",
            runtimeEn: "IF (Attempts_to_Chop_off_Demonic_Body_Half) THEN (Pain and nerve damage sync 100% back to own intact half-brain cortex, live or die together)."
        }
    },
    {
        id: "stake_sensory_loss",
        name: "绝对感官剥夺", nameEn: "Sensory Deprivation",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "视、听、嗅、味、触全部被拉阀断电，意识完全清醒地被关在大脑这个黑暗且没有任何输入的铁笼子里。",
        defEn: "Sight, hearing, smell, taste, touch all circuit-breakered; fully conscious mind locked in the dark iron cage of the brain with zero input.",
        core: "外部世界被硬生生拔掉插头。比被活埋还要安静、黑暗一万倍的孤绝。 | The Castration: 交互感知（Interaction Vector）的全线切断。",
        coreEn: "External world violently unplugged. 10,000 times quieter and darker than being buried alive. | The Castration: Total severance of Interaction Vectors.",
        logic: "没有输入就没有时间的参考系。在感官剥夺中，主体的内感受器会开始制造极度疯狂的高速幻听和扭曲的内脏摩擦感，将自己活活逼疯。",
        logicEn: "No input equals no time reference. In deprivation, internal receptors fabricate frantic auditory hallucinations and warped visceral frictions to drive the mind mad.",
        patch: {
            mechanics: "Base_HELEN_KELLER_LOCK + [I_O_Ports = Disabled; Time_Perception = Distorted]",
            mechanicsEn: "Base_HELEN_KELLER_LOCK + [I_O_Ports = Disabled; Time_Perception = Distorted]",
            aesthetic: "聚焦：完全漆黑屏幕上只有一行代表心跳跳动缓慢微波的数据 + 无法确认自己是被丢在宇宙缝隙还是海底的极致悬空感。",
            aestheticEn: "Focus: Pitch-black screen showing only one line of slow microwave data representing heartbeat + Extreme suspension without knowing if dumped in cosmos gap or deep seabed.",
            runtime: "IF (外界正有一支宏大的营救部队打破厚壁找到他) THEN (他根本无法察觉救星的到来，只能永远继续在他自己的黑箱中等待审判)。",
            runtimeEn: "IF (External_Grand_Rescue_Team_Breaks_Wall_to_Find_Him) THEN (Utterly unable to sense saviors' arrival, indefinitely waiting for judgment in his own black box)."
        }
    },
    {
        id: "stake_puppet",
        name: "牵线傀儡", nameEn: "Puppet",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "仍有完整的意志和清醒的伦理观，但手脚和声带全部受控于操控者的引线。",
        defEn: "Remaining full will and clear ethical stance, but limbs and vocal cords controlled entirely by the manipulator's strings.",
        core: "最残酷的人偶剧场。眼睁睁看着这具名为‘自己’的皮囊被大他者玩弄。 | The Castration: 意志效能（Willpower Efficacy）的无效化。",
        coreEn: "Cruelest doll theater. Watching the sack known as 'self' toyed by the Big Other. | The Castration: Invalidation of Willpower Efficacy.",
        logic: "附身只是一种隐蔽的内部占领，而成为傀儡则是极其公开的外部羞辱。在他人看来是你的主动抉择，而在你内部却是在每一秒钟都在尖叫着踩刹车却依然撞墙的惨剧。",
        logicEn: "Possession is covert inner occupation. Puppet is entirely public external humiliation. Externally seen as active choice, internally screaming brakes failing to avoid a crash.",
        patch: {
            mechanics: "Base_MARIONETTE_PROTOCOL + [Consciousness = Awake; Physical_Override = 100%]",
            mechanicsEn: "Base_MARIONETTE_PROTOCOL + [Consciousness = Awake; Physical_Override = 100%]",
            aesthetic: "聚焦：手指随着看不见的提线痉挛般反方向抽动拔枪 + 嘴巴强行笑到撕裂的僵硬弧度。",
            aestheticEn: "Focus: Fingers twitching in reverse direction like unseen strings drawing a gun + Mouth forced perfectly into a tearing, stiff smile.",
            runtime: "IF (试图咬舌自尽以保全名节) THEN (控制者只需轻轻一拉代表下巴的引线，牙齿就会硬生生停在舌尖之前一毫米处无法闭合)。",
            runtimeEn: "IF (Attempts_Biting_Tongue_to_Commit_Suicide_for_Honor) THEN (Controller just lightly pulls jaw string, teeth rigidly halt 1mm before tip of tongue, unable to close)."
        }
    },
    {
        id: "stake_dementia",
        name: "认知融化（痴呆症）", nameEn: "Dementia",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "并非一次性失忆，而是眼睁睁看着自己的心智逻辑和概念积木一块块缓慢崩溃掉落的过程。",
        defEn: "Not one-time amnesia, but watching one's own mental logic and concept blocks slowly collapse and fall away piece by piece.",
        core: "《困在时间里的父亲》。在缓慢的枯萎中体会‘自我正在消失’的漫长葬礼。 | The Castration: 逻辑积木（Logical Scaffolding）的粉化。",
        coreEn: "'The Father'. Experiencing the long funeral of 'the self is disappearing' through slow withering. | The Castration: Pulverization of Logical Scaffolding.",
        logic: "这种崩塌不仅是忘记别人，更是忘记诸如‘门把手是怎么开的’这样的大他者规则系统。最后主体退化为了在规则网格里的一团软体生物。",
        logicEn: "Collapse means forgetting not just people, but Big Other rule systems like 'how a doorknob works'. Regressing into a mollusk in the grid of rules.",
        patch: {
            mechanics: "Base_COGNITIVE_MELTDOWN + [Concept_Decay_Rate = Progressive; Semantic_Loss = Severe]",
            mechanicsEn: "Base_COGNITIVE_MELTDOWN + [Concept_Decay_Rate = Progressive; Semantic_Loss = Severe]",
            aesthetic: "聚焦：绝望地在满墙便签纸上找不出一句构成句法的线索 + 拿着钥匙试图打开冰箱门然后突然开始因为迷惑而哭泣。",
            aestheticEn: "Focus: Desperately finding no syntactic clue among a wall full of sticky notes + Holding a key to unlock fridge door and suddenly bursting into tears out of confusion.",
            runtime: "IF (面临绝杀的陷阱) THEN (突然忘记了‘危险’这个概念的定义，像个孩子一样伸手去把玩那致命的刀刃)。",
            runtimeEn: "IF (Faces_Lethal_Trap) THEN (Suddenly forgets definition of 'danger', stretches out reaching like a child to toy with the lethal blade)."
        }
    },
    {
        id: "stake_dream_trap",
        name: "无尽梦境（多重迷失域）", nameEn: "Dream Trap",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "以为自己醒来，却只是进入了下一层梦境。现实与梦境的边境标记被强行拔除。",
        defEn: "Thinking you awoke, only entering a deeper dream. The border markers between reality and dream forcefully removed.",
        core: "《盗梦空间》Limbo。再也无法触碰坚硬的现实大地。 | The Castration: 真实界坐标（Anchor of the Real）的剥除。",
        coreEn: "Inception Limbo. No longer able to touch the hard earth of reality. | The Castration: Stripping the Anchor of the Real.",
        logic: "大他者用极其美好的幻象将其掩埋。由于无法证实环境的真伪，主体的一切关于复仇、救赎的宏大动作全部被降维成一场自说自话的春梦。",
        logicEn: "The Big Other buries them in beautiful illusions. Unable to verify the environment, all grand actions of revenge/redemption downgrade into masturbatory wet dreams.",
        patch: {
            mechanics: "Base_LIMBO_DESCENT + [Reality_Check_Token = Corrupted; Awakening_Loop = Infinite]",
            mechanicsEn: "Base_LIMBO_DESCENT + [Reality_Check_Token = Corrupted; Awakening_Loop = Infinite]",
            aesthetic: "聚焦：旋转却永远不会倒下的陀螺特写 + 镜子里的自己没有倒影却依然在移动。",
            aestheticEn: "Focus: Top spinning without ever falling + One's reflection missing in mirror yet movement persists.",
            runtime: "IF (鼓起全部勇气用痛苦试图刺破梦境（自裁）) THEN (随着巨大的下坠感醒来，发现身边依然只是换了一套贴图的另一层梦境，永无止境)。",
            runtimeEn: "IF (Musters_All_Courage_using_Pain_to_Pierce_Dream_via_Suicide) THEN (Wakes up with immense falling sensation, finding surroundings just another layer of dream with new textures, endless)."
        }
    },
    {
        id: "stake_soul_loss",
        name: "空壳化（失去灵魂）", nameEn: "Soul Loss",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "被类似于摄魂怪之吻一般的手法，直接抽去了构成内驱能量的‘欲望客体’，变成一具空壳。",
        defEn: "Inner energetic 'objet petit a' forcibly extracted by a Dementor's Kiss-like method, resulting in an empty shell.",
        core: "还有呼吸，还有心跳，但失去了‘想要什么’的能力。 | The Castration: 欲望主体（Subject of Desire）的阉割。",
        coreEn: "Breathing and heartbeat remain, but lost the capacity to 'want'. | The Castration: Castration of the Subject of Desire.",
        logic: "在精神分析意义上，只要还有不满足，人就是活着的。被抽离灵魂意味着达到了‘死循环般的平静’，一种再也不会被任何事物激起涟漪的终极麻木。",
        logicEn: "Psychoanalytically, dissatisfaction equals being alive. Soul stripped means achieving 'dead-loop flatline', an ultimate numbness immune to ripples.",
        patch: {
            mechanics: "Base_DEMENTOR_KISS + [Desire_Output = Zero; Affective_Flattening = Maximum]",
            mechanicsEn: "Base_DEMENTOR_KISS + [Desire_Output = Zero; Affective_Flattening = Maximum]",
            aesthetic: "聚焦：眼睛深渊般漆黑且不聚焦 + 就算是火苗烧到手指也不会皱一下眉头的泥塑感。",
            aestheticEn: "Focus: Abyss-like pitch black unfocused eyes + Clay-like nonreaction even if flames burn fingers.",
            runtime: "IF (至高无上的至宝或皇冠被放在其手里) THEN (他因为感到这件东西有些压手而毫无所谓地立刻松手让其摔在地上)。",
            runtimeEn: "IF (Supreme_Treasure_or_Crown_Placed_in_Hands) THEN (He uncaringly drops it on ground just because it feels slightly heavy)."
        }
    },
    {
        id: "stake_objectification",
        name: "彻底器物化", nameEn: "Total Objectification",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "物理或精神上被强行制作成一个供大他者陈列或赏玩的静态工艺品或家具。",
        defEn: "Physically/mentally converted forcefully into static craftwork or furniture for the Big Other's exhibit or play.",
        core: "《恐怖蜡像馆》。活人被降级为客体，存在变成了纯粹的景观。 | The Castration: 主观能动性（Agentic Subjectivity）的标本化。",
        coreEn: "House of Wax. Alive human regressed to object, existence turned pure spectacle. | The Castration: Taxidermy of Agentic Subjectivity.",
        logic: "抹杀一个人最高傲和惨烈的手段不是杀他，而是把自命不凡的他变成摆在大厅里用来擦鞋的脚垫，并在其清醒的意识里保留他作为这块脚垫的耻辱感。",
        logicEn: "The most arrogant and tragic erasure translates a self-important 'hero' into a hall doormat, retaining full conscious shame of being the doormat.",
        patch: {
            mechanics: "Base_ORNAMENTAL_FREEZE + [Object_Status = Imposed; Subjective_Feedback = Trapped_Inside]",
            mechanicsEn: "Base_ORNAMENTAL_FREEZE + [Object_Status = Imposed; Subjective_Feedback = Trapped_Inside]",
            aesthetic: "聚焦：皮肤硬化为华丽的琥珀或大理石质感 + 主座上那只有一只眼睛能极尽微弱反光的华丽靠枕。",
            aestheticEn: "Focus: Skin hardening into gorgeous amber or marble texture + Splendid cushion on main seat where solely one eye reflects feeble light.",
            runtime: "IF (仇人正好坐在以他形态做成的椅子上大肆庆祝) THEN (椅子深处的神经依然会敏锐地感知到仇人的体温与轻蔑的重量，却连一丝颤抖都做不到)。",
            runtimeEn: "IF (Enemy_Sits_on_the_Chair_Made_of_Him_Hosting_Wild_Party) THEN (Deep chair nerves acutely feel enemy's warmth and contemptuous weight, yet unable to even quiver)."
        }
    },
    {
        id: "stake_recurrence",
        name: "尼采的噩梦（永恒的轮回）", nameEn: "Eternal Recurrence",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "不仅是重新经历，而是知道自己每一次都会在相同的节点犯下相同的致命错误，并且注定被无形法则推着再次走完全程的无力感。",
        defEn: "Not merely reliving, but knowing they will commit the same fatal error at the same junction, inevitably pushed by unseen laws to walk the path again.",
        core: "《降临》式痛苦的加深版。没有改变的自由裁量权。 | The Castration: 命运自由度（Freedom of Destiny）的缴械。",
        coreEn: "Deepened 'Arrival' agony. No discretion for change. | The Castration: Disarmament of the Freedom of Destiny.",
        logic: "时间死循环是物理在某段卡带；永恒轮回是整个人生长河是一盘早已经被大他者刻好的CD。你知道第十杯酒有毒，但你的手依然会宿命般端起它一饮而尽。",
        logicEn: "Time loop is physical stuck tape; recurrence is the entire life being a pre-burnt CD by the Big Other. You know the tenth cup is poisoned, but your hand fatally picks it up.",
        patch: {
            mechanics: "Base_PROPHETIC_DESPAIR + [Destiny_Override = Disabled; Foreknowledge = Cursed]",
            mechanicsEn: "Base_PROPHETIC_DESPAIR + [Destiny_Override = Disabled; Foreknowledge = Cursed]",
            aesthetic: "聚焦：眼角流着泪走向那个明知道是陷阱的死亡拥抱 + 双手拼命抵抗却如同是被机器拉扯般地将剑刺入爱人胸膛。",
            aestheticEn: "Focus: Tearfully walking toward the death-embrace known identically as trap + Hands resisting frantically yet machinelike-dragged to thrust sword into lover's chest.",
            runtime: "IF (试图用巨大的意志力强行扭转轨迹) THEN (世界线会通过更加离奇绝伦的惨烈修正将因果强压进原本那个惨痛的结局轨道槽内)。",
            runtimeEn: "IF (Attempts_to_Vigorously_Reverse_Trajectory_with_Willpower) THEN (World-line uses impossibly absurd tragic corrections to crush causality forcibly back into the original disastrous groove)."
        }
    },
    {
        id: "stake_shrink",
        name: "微缩化（尺度压制）", nameEn: "Shrinking",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "变得极其微小，曾经熟悉的世界瞬间变成了由遮天蔽日的怪物和深不见底的沟壑组成的绝望迷宫。",
        defEn: "Becoming extremely sub-microscopic; the familiar world suddenly turned into an abyssal maze of sky-blotting monsters.",
        core: "《不可思议的收缩人》。失去常规维度的主导权。 | The Castration: 空间主权（Spatial Sovereignty）剥夺与尺度霸凌。",
        coreEn: "Losing mandate over normal dimensions. | The Castration: Spatial Sovereignty deprivation and dimensional bullying.",
        logic: "当一滴原本可爱的雨滴砸下来相当于数百吨的陨石，普通日常本身就是一场残忍的大逃杀。这是大他者对主体尺度的绝对蔑视降维。",
        logicEn: "When a cute raindrop falls like a hundred-ton meteor, ordinary routine becomes a cruel battle royale. The Big Other's dimensional contempt.",
        patch: {
            mechanics: "Base_DIMENSIONAL_SHRINK + [Micro_Vulnerability = 1000x; Macro_Influence = Zero]",
            mechanicsEn: "Base_DIMENSIONAL_SHRINK + [Micro_Vulnerability = 1000x; Macro_Influence = Zero]",
            aesthetic: "聚焦：一只平常的家猫眼睛投下的如月亮般巨大的恐怖凝视 + 在地毯纤维如同远古森林般的巨大缝隙中绝望攀爬。",
            aestheticEn: "Focus: Ordinary housecat's eye casting terror-gaze large as moon + Desperate crawling through carpet fibers huge as ancient forest ravines.",
            runtime: "IF (试图对着走过身边的家人大声呼喊求救) THEN (高频的微小声音直接越过了人类鼓膜的接收域，被当作是夏日边缘起伏的微小蚊鸣)。",
            runtimeEn: "IF (Attempts_Screaming_for_Help_at_Family_Walking_By) THEN (Tiny high-frequency sound skips human eardrum range, perceived as faint distant summer mosquito)."
        }
    },
    {
        id: "stake_shadow",
        name: "成为影子", nameEn: "Becoming Shadow",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "失去了三维的体积，被压平成只能依附于强光和他人实体而存在的二维投影。",
        defEn: "Losing 3D volume, flattened into a 2D projection that relies on strong light and another entity to exist.",
        core: "失去本体，沦为背景和附庸。 | The Castration: 实体丰度（Dimensional Richness）的降维裁切。",
        coreEn: "Losing ontology, regress to background appendage. | The Castration: Dimensional Richness shearing.",
        logic: "影子永远只能复现主人的动作并受到光源角度的拉扯畸变。主体从主位沦为了大他者动作的延迟特效渲染件。",
        logicEn: "Shadows only mimic the master's joints and distort by light angles. Subject degraded to the Big Other's delayed-render aftereffect.",
        patch: {
            mechanics: "Base_2D_FLATTENING + [Volume_Collision = False; Dependency_on_Master = 100%]",
            mechanicsEn: "Base_2D_FLATTENING + [Volume_Collision = False; Dependency_on_Master = 100%]",
            aesthetic: "聚焦：原本锋利的剑斩过去只因为路灯忽明忽暗的拉扯而折断在柏油路面 + 在极光下因为没有三维厚度而陷入绝对漆黑的隐没恐惧。",
            aestheticEn: "Focus: Sharp sword chop breaks on asphalt merely because stuttering streetlight distorts it + Absolute blacking-out fear under auroras due to lacking 3D thickness.",
            runtime: "IF (天空中出现遮蔽日月的全食级黑暗) THEN (如果光线完全消失，影子便彻底不复存在，面临虚空的窒息性解体)。",
            runtimeEn: "IF (Total_Eclipse_Darkness_Appears_in_Sky) THEN (If light vanishes, shadow ceases, facing void's suffocative disintegration)."
        }
    },
    {
        id: "stake_parasite",
        name: "主客颠倒（异种寄生）", nameEn: "Parasitized",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "自己的肉体被异形、孢子或降临派模因侵占，被扭曲改造成哺育怪物的营养温床。",
        defEn: "Flesh usurped by alien, spore, or meme, twisted into a nutrient nursery to feed monsters.",
        core: "存在结构的地基被凿空当作公厕。 | The Castration: 内在领域（Internal Domain）的强行殖民。",
        coreEn: "Foundation of existence hollowed out for public bathroom. | The Castration: Forced colonization of Internal Domain.",
        logic: "寄生比附身更脏。附身夺权，寄生却在不断吸收你的营养来壮大。这让主体在面临死亡的同时还得承担“自己是异种帮凶”的作呕感。",
        logicEn: "Possession usurps power; parasitism absorbs your nutrients to breed. You face death while bearing the nausea of being 'accomplice to the alien'.",
        patch: {
            mechanics: "Base_GUEST_HOST_INVERSION + [Nutrient_Siphon = Active; Identity_Erosion = 80%]",
            mechanicsEn: "Base_GUEST_HOST_INVERSION + [Nutrient_Siphon = Active; Identity_Erosion = 80%]",
            aesthetic: "聚焦：肚子内部不断传出的属于另一种心跳的恐怖鼓声 + 从口腔里吐出一根完全不属于地球构造的触须顶端。",
            aestheticEn: "Focus: Terrifying drumbeat of another heart echoing constantly from inside belly + Vomiting an alien-structural tentacle tip from mouth.",
            runtime: "IF (为了彻底消灭异形准备将包含寄生部位的自己同归于尽) THEN (寄生物会直接释放大量多巴胺进行神经代偿，使刀锋划下去时主脑只会产生无可药救的致命快感)。",
            runtimeEn: "IF (Prepares_Suicide-Bombing_Own_Parasitized_Parts_to_Eliminate_Alien) THEN (Parasite instantly releases mass dopamine for neural comp, making the slash only generate incurably fatal euphoria in main brain)."
        }
    },
    {
        id: "stake_data_upload",
        name: "忒修斯之船（意识上传）", nameEn: "Upload / Virtual Deletion",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "肉身被完全销毁，意识被剪切或复制成0和1存储在大他者的云端服务器中。",
        defEn: "Flesh thoroughly destroyed; consciousness cut or copied into 0s and 1s stored in the Big Other's cloud server.",
        core: "碳基的终结。那个云端的数据包，到底还是不是曾经那个在雨中哭泣的我？ | The Castration: 肉身本体（Substantial Flesh）的绝育。",
        coreEn: "End of carbon-base. Is that data packet still the 'I' weeping in the rain? | The Castration: Sterilization of Substantial Flesh.",
        logic: "一旦成为数据流，系统修改你的潜意识和价值观就像更改一行配置文件。主权彻底向程序员（神明编剧）上交。",
        logicEn: "Once a data stream, the system changing your subconscious/values is like editing a config string. Sovereignty fully surrendered to the programmer (God-scriptwriter).",
        patch: {
            mechanics: "Base_SERVER_MIGRATION + [Carbon_Form = Deleted; Root_Access = Surrendered]",
            mechanicsEn: "Base_SERVER_MIGRATION + [Carbon_Form = Deleted; Root_Access = Surrendered]",
            aesthetic: "聚焦：在玻璃钢体中看着自己被化尸水融化的骨骸 + 眼珠里闪烁着代表网络连接的不停跳跃的进度条。",
            aestheticEn: "Focus: Watching own bones melt in acid vat from inside glass casing + Eyeballs flashing with hopping progress bars showing network connectivity.",
            runtime: "IF (主体在云端试图发动赛博叛乱切断大他者防火墙) THEN (大他者只需按下一个‘版本回退(Rollback)’按钮，便可将其刷回叛乱前一秒最顺从的参数备份)。",
            runtimeEn: "IF (Subject_in_Cloud_Attempts_Cyber-Rebellion_to_Cut_Big_Other_Firewall) THEN (Big Other simply hits 'Rollback' button, wiping them to the most obedient param backup 1 second pre-mutiny)."
        }
    },
    {
        id: "stake_silence_voice",
        name: "天鹅之死（声音被拔除）", nameEn: "Stolen Voice",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "代表着个人特质与灵魂共鸣的‘声音’作为献祭的筹码被强行摘取，留下永存生理性虚空的嗓子。",
        defEn: "The 'voice', representing personal traits and soul resonance, forcibly extracted as a sacrificial chip.",
        core: "小美人鱼的沉默。割去了灵魂直接发声的羽翼。 | The Castration: 特有音色（Unique Timbre/Voice）的物理截肢。",
        coreEn: "The silence of the Little Mermaid. Amputation of unique timbre. | The Castration: Physical Amputation of Voice.",
        logic: "在声音作为终极武器或终极魅力来源的引擎中，失去声音就是折断法杖。你拥有绝世的真理，却只能用充满杂音的嘶嘶声在寒风里漏气。",
        logicEn: "When voice is ultimate weapon/charm, losing it is snapping the wand. You hold peerless truth but leak in winter wind like hissing static.",
        patch: {
            mechanics: "Base_VOCAL_CHORD_REMOVAL + [Sonic_Signifier = Stolen; Expression_Leak = Analog_Hiss]",
            mechanicsEn: "Base_VOCAL_CHORD_REMOVAL + [Sonic_Signifier = Stolen; Expression_Leak = Analog_Hiss]",
            aesthetic: "聚焦：曾经能震散玻璃或迷醉众生的喉咙上那道结满丑陋蜈蚣疤痕的刀口 + 看见仇人正用着自己那空灵绝响的声音发表谎言演说。",
            aestheticEn: "Focus: Ugly centipede-scarred incision over the throat that once shattered glass/enchanted crowds + Seeing enemy delivering lies using your once-ethereal voice.",
            runtime: "IF (在极端危机时刻习惯性地想发出战吼或预警) THEN (喉部伤口立刻崩裂喷出鲜血，发出的气声甚至微弱到盖不过一片树叶落下的声响)。",
            runtimeEn: "IF (In_Crisis_Habitually_Tries_Battle_Cry_or_Warning) THEN (Throat wound rips spouting blood, emitting air sound so weak it can't over-volume a falling leaf)."
        }
    },
    {
        id: "stake_invisibility",
        name: "不可触碰的量子幽灵", nameEn: "Unseen / Quantum Ghost",
        group: "B. 本体论崩塌", groupEn: "Ontological",
        def: "因为相位的偏差或法则的惩戒，在一切物理探测手段和人类的视网膜上绝对不可见、不可触摸。",
        defEn: "Absolutely unseen/untouchable to all physical detection or retinas due to phase deviation or legal penalty.",
        core: "存在，但因为没有力学摩擦，变得毫无意义的终极孤寂。 | The Castration: 交互物理当量（Interactive Physicality）的归零。",
        coreEn: "Existing but meaningless due to zero friction. Ultimate isolation. | The Castration: Zeroing of Interactive Physicality.",
        logic: "没有任何实体能接收主体的动能传输。在这个宇宙中，主体是多余的代码注释。",
        logicEn: "No solid receives the subject's kinetic transfer. The subject is just redundant commented code in this universe.",
        patch: {
            mechanics: "Base_PHASE_SHIFT_GHOST + [Collision_Box = Disabled; Photon_Reflection = 0]",
            mechanicsEn: "Base_PHASE_SHIFT_GHOST + [Collision_Box = Disabled; Photon_Reflection = 0]",
            aesthetic: "聚焦：倾尽全力挥出的重拳像穿过全息投影般穿过了仇人的下巴 + 想要抱住正在痛哭的孩子的身体，却直直跌过了他们的身体摔到冰冷地板下。",
            aestheticEn: "Focus: Full-force heavy punch phasing through enemy's chin like a hologram + Trying to hug weeping children's bodies only to fall straight through them to the cold floor.",
            runtime: "IF (长时间在这个状态下强行想要触摸世界) THEN (本体会对‘边界感’产生彻底绝望的解离，灵魂因失去质量支撑而开始以碎片消散在空气中)。",
            runtimeEn: "IF (Persistently_Forcing_Attempts_to_Touch_World_in_this_State) THEN (Ontology generates utterly desperate dissociation to 'boundaries', soul fragments fading into air due to lack of mass support)."
        }
    }
];
