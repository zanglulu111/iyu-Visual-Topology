import { LibraryItemDef } from '../../../types';

export const SYNTHESIZER_M4X: LibraryItemDef[] = [
    {
        id: "m4x_level_1",
        name: "L1.内化幻影",
        nameEn: "Phantom / Internal",
        group: "M4X. 外部压迫能级",
        def: "大他者（社会法则）并不需要实际作出压迫动作，剥削与阻隔仅仅依靠主体的神经恐惧与“自我规训（Self-Discipline）”就完成了闭环。",
        defEn: "The Big Other (social law) requires no actual oppressive action; exploitation and blockage complete their loop purely via the subject's neural fear and 'Self-Discipline'.",
        core: "福柯式的全景敞视监狱雏形。最无声、最低频的深渊绝望——超我的自动且无处不在的监控（The Gaze）。",
        coreEn: "The embryo of Foucault's Panopticon. The most silent, low-frequency abyssal despair—the automatic and omnipresent surveillance of the Superego (The Gaze).",
        patch: {
            mechanics: "环境中并不存在实体化且带有敌意的巡逻守卫，但“潜行模式”的UI指示灯却被强行点亮，让玩家自行感到被监视的错觉。",
            mechanicsEn: "No physical aggressive patrol guards exist in the environment, but the 'Stealth Mode' UI indicator is forcibly lit, making players self-induce the illusion of being watched.",
            aesthetic: "极其宽广却又空洞的环境氛围。深深的长阴影与克制的室内环境底噪，共同堆砌出一种令人窒息的“透明审查感”。",
            aestheticEn: "Extremely expansive yet hollow ambient atmospheres. Deep long shadows and restrained indoor room-tones collaboratively construct a suffocating sense of 'transparent censorship'.",
            runtime: "植入一个无声运行的 `Gaze_Tracker` 单例对象，持续计算玩家的视线死角，并在其未能察觉的背面轻微调整光照亮度曲线。",
            runtimeEn: "Implanting a silently running `Gaze_Tracker` singleton, continuously calculating the player's blind spots and slightly tweaking lighting brightness curves behind their back."
        }
    },
    {
        id: "m4x_level_2",
        name: "L2.隐性格式化",
        nameEn: "Soft Formatting",
        group: "M4X. 外部压迫能级",
        def: "来自环境或系统极具伪装的“温柔”建议。一种温水煮青蛙式的无孔不入的程序化规则，不听从就会渐渐被推入社会关系的真空中。",
        defEn: "Highly disguised 'gentle' suggestions from the environment or system. An all-pervasive programmable rule akin to boiling a frog; disobedience gradually pushes one into a vacuum of social relations.",
        core: "体制庞大的摩擦力。虽然街道上没有暴力的警察，但微观权力网中的每一个节点、每一个人都在用目光死盯着你试图出轨的举动。",
        coreEn: "The massive friction of the establishment. Though no violent police roam the streets, every node in the micro-power web, every person stares fixedly at your attempts to derail.",
        patch: {
            mechanics: "游戏不强制你停止探索任务，却连绵不断地推送枯燥的重复性维护任务要求你填满所谓的“社会信用”插槽。",
            mechanicsEn: "The game doesn't heavily force you to stop exploration quests, but continuously pushes dull, repetitive maintenance tasks, demanding you max out so-called 'Social Credit' slots.",
            aesthetic: "极度无菌、充满秩序崇拜的极简科幻风格。苍白到病态的色阶配以让人放松却极其洗脑的商场背景音环境音响。",
            aestheticEn: "Extremely sterile, order-worshipping minimalist sci-fi style. Sickly pale color gradings paired with relaxing yet extremely brainwashing mall background Muzak.",
            runtime: "当玩家未能够按时触碰“合规（Compliance）”检查点时，向其角色的冲刺速度和跳跃高度持续增加微小的减衰乘数（Dampening Factor）。",
            runtimeEn: "When the player fails to periodically hit 'Compliance' checkpoints, continuously adding a minuscule dampening factor multiplier to the character's sprint speed and jump height."
        }
    },
    {
        id: "m4x_level_3",
        name: "L3.局部阻断",
        nameEn: "Local Blockage",
        group: "M4X. 外部压迫能级",
        def: "主体的欲望目标被明确且强硬地拒绝。系统或它的执法代理人（Agent）出面暴力干涉，亮起红灯警告或采用物理封锁切断特定逃跑路径。",
        defEn: "The subject's desired target is explicitly and rigidly denied. The system or its enforcing Agents violently intervene, flashing red alerts or implementing physical lockdowns cutting off specific escape routes.",
        core: "大他者面具撕破的开始。原本假装顺滑温情的社会机器终于对不肯屈服的主体露出了带有锈迹和尖刺的獠牙。",
        coreEn: "The tearing of the Big Other's mask begins. The previously supposedly smooth, tender social machine finally exposes its rusty, spiked fangs to the unyielding subject.",
        patch: {
            mechanics: "特定的目标路径被系统协议直接粗暴焊死。遭遇硬性屏障、“访问拒绝”红区，以及强制性的武装小规模冲突阻击。",
            mechanicsEn: "Specific target routes are directly and brutally welded shut by system protocols. Encountering hard barriers, 'Access Denied' red zones, and mandatory armed skirmish repulsions.",
            aesthetic: "充满敌意的建筑学粗野主义（Brutalism）。刺目的红色警示霓虹灯光，极具攻击性的自动安保机甲持续扫描所有细微异常。",
            aestheticEn: "Hostile architectural Brutalism. Glaring red warning neon lights, highly aggressive automated security mechs constantly scanning for micro-anomalies.",
            runtime: "在运行时动态插入重度 `Physics Blockers` 碰撞体，并大刀阔斧地修改寻路网格（Navmesh），通过硬代码剥夺主管意图空间的通路。",
            runtimeEn: "Dynamically injecting heavy `Physics Blockers` colliders at runtime, and radically modifying the Navmesh, depriving access to the subjective intention space via hardcode."
        }
    },
    {
        id: "m4x_level_4",
        name: "L4.社会性死亡",
        nameEn: "Social Annihilation",
        group: "M4X. 外部压迫能级",
        def: "系统调集庞大的结构性资源对主体进行绞肉机式的全面围猎。数字封号、现实开除、列入红色通缉以及强迫亲友与你割席背离。",
        defEn: "The system mobilizes vast structural resources conducting a meat-grinder-esque total hunt on the subject. Digital banning, reality firing, red warrant listing, and forcing family/friends to sever ties.",
        core: "象征界生存权的绝对剥夺。主体成为了符号秩序排泄管道中的“客体小a（Object a）”，等同于一具虽然呼吸但毫无意义的人形污点。",
        coreEn: "Absolute deprivation of survival rights in the Symbolic. The subject becomes the 'Object a' in the sewer pipes of the symbolic order—equivalent to a breathing yet meaningless humanoid stain.",
        patch: {
            mechanics: "主角在全地图被打上“极具危险（Shoot on Sight）”的主动仇恨标签。商人拒绝交易，安全区变为屠宰场，物资获取受到终极严苛的剥夺制裁。",
            mechanicsEn: "The protagonist is tagged globally with an active 'Shoot on Sight' aggro label. Merchants refuse trades, safe zones turn into slaughterhouses, and resource acquisition is subjected to ultimate deprivation sanctions.",
            aesthetic: "残忍且无孔不入的被猎杀感。高瓦数探照灯扫过泥泞的地面，远方尖利的防空警报声撕裂夜空，整体色调陷入肮脏且绝望的深灰。",
            aestheticEn: "Cruel, pervasive hunted sensation. High-wattage searchlights sweep muddy grounds; distant screeching air raid sirens tear the night; overall palette plunges into dirty, desperate deep grey.",
            runtime: "强制遍历并将所有关联NPC的阵营枚举值翻转为 `Hostile`。在底层循环中将任何体力恢复（Regeneration）变量的增益倍率阉割进趋近于零的区间。",
            runtimeEn: "Forcibly traversing and flipping the faction enum arrays of all linked NPCs to `Hostile`. In the base loop, castrating the buff multipliers of any health/stamina regeneration variables into near-zero intervals."
        }
    },
    {
        id: "m4x_level_5",
        name: "L5.绝对暴力",
        nameEn: "Absolute Violence",
        group: "M4X. 外部压迫能级",
        def: "大他者动用了象征界法则中最原始的权柄，行使最高级别的合法暴力，对主体执行彻底的肉体物理抹杀或是存在主义层面的超维消除。",
        defEn: "The Big Other utilizes the most primitive authority within the Symbolic law, exercising the highest level of legal violence, executing a thorough physical flesh obliteration or existential ultra-dimensional erasure of the subject.",
        core: "最后遮盖法则虚无的那块血腥遮羞布被掀开。代表国家机器或至高权力的大轮盘毫无怜悯地直接从主体的头颅上方轰鸣着碾压而过。",
        coreEn: "The final bloody fig leaf covering the void of the Law is ripped off. The massive wheel representing the state apparatus or supreme authority ruthlessly roars and crushes directly over the subject's skull.",
        patch: {
            mechanics: "让玩家面临数学上“绝对不可能生还”的不对等死局。系统一口气释放复数级别的行刑头目，保证这是一场极尽血腥残暴的“物理死刑”。",
            mechanicsEn: "Forcing the player into mathematical 'absolutely impossible to survive' asymmetric checkmates. The system releases multiple executioner bosses in one breath, ensuring an extremely bloody and savage 'physical death penalty'.",
            aesthetic: "武装暴力或神之怒火发出的震耳欲聋的神罚交响曲。满屏幕连续不断的致盲爆炸点与剧烈的镜头抽搐，根本不给感官留下喘息余地。",
            aestheticEn: "Deafening symphony of divine punishment emitted by armed violence or God's wrath. Full-screen non-stop blinding explosions and violent camera spasms leaving absolutely no breathing room for the senses.",
            runtime: "强行激活一个无法被中止和消灭的死神事件生成器（Sovereign Entity Spawner），所实例化出的杀伤碰撞体全面无视并穿透主角所有的“无敌帧（I-frames）”。",
            runtimeEn: "Forcibly activating an un-abortable, un-killable Sovereign Entity Spawner; its instantiated lethal colliders entirely ignore and pierce all of the protagonist's 'Invincibility frames (I-frames)'."
        }
    }
];
