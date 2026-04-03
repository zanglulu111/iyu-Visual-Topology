import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_A: LibraryItemDef[] = [
    {
        id: "drv_violent_breakout",
        name: "暴力突围", nameEn: "Violent Breakout",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "纯粹的肉体毁灭。杀出一条血路，不计后果。",
        defEn: "Pure physical destruction. Forcing a path through blood, regardless of consequences.",
        core: "阻挡我的东西，错在它们不够碎。 | 缺失 ($): 容纳阈值 (Containment_Threshold)",
        coreEn: "Things blocking me are wrong because they aren't broken enough. | Lack ($): Containment_Threshold",
        logic: "【热力学坍缩】：主体遭受绝对负压（M1）抽吸后，将残余动能转化为向外的物理撞击。不以抵达彼岸（M3）为目的，而是将肉体与大他者（M4）墙壁的每一次碰撞视为确证存在的享乐过程。",
        logicEn: "[Thermodynamic Collapse]: After absolute negative pressure (M1), residual kinetic energy turns into outward physical impact. Not aiming to reach the other side (M3), but treating each flesh-to-wall (M4) collision as a jouissance process confirming existence.",
        patch: {
            mechanics: "物理爆破协议 + [冲突烈度 = Max; 理性刹车 = 0; 生存权重 = Low]",
            mechanicsEn: "Physical_Breach_Protocol + [Conflict_Intensity = Max; Rational_Brakes = 0; Survival_Weight = Low]",
            aesthetic: "视觉充斥极速的动态模糊、断裂的线条与迸发的体液（血/汗）。材质优先表现被击碎的刚性结构的粗糙切面，伴随高对比度、不安定的光源（如火光闪烁、警灯爆闪）。",
            aestheticEn: "Visuals filled with extreme motion blur, fractured lines, and bursting bodily fluids (blood/sweat). Textures prioritize rough cross-sections of shattered rigid structures, accompanied by high-contrast, unstable light sources.",
            runtime: "IF (遭遇阻挡/包围) THEN (执行：无视受损的强行物理碾压)；IF (脱离阻挡) THEN (触发：因由于缺乏撞击面导致的瞬间存在虚无感)",
            runtimeEn: "IF (Blocked/Surrounded) THEN (Execute: Damage-ignoring physical crush); IF (Escaped) THEN (Trigger: Instant existential void due to lack of impact surface)"
        }
    },
    {
        id: "drv_assassination",
        name: "刺杀/斩首", nameEn: "Assassination",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "针对暴君或核心节点的定点清除。",
        defEn: "Targeted elimination of tyrants or core network nodes.",
        core: "砍下你的头，世界就能停止运转。 | 缺失 ($): 系统结构感 (Systemic_Structure)",
        coreEn: "Cut off your head, and the world stops turning. | Lack ($): Systemic_Structure",
        logic: "【弑父环路】：主体通过锁定一个特定的符号锚点（如暴君/系统极点），试图通过物理剪除来填埋实在界的裂口。刺杀动作是对抗“父之名”的压缩态爆破。",
        logicEn: "[Patricidal Loop]: Locking onto a specific symbolic anchor (e.g., tyrant/system pole) to fill the Real's rift via physical pruning. Assassination is a compressed burst against the 'Name-of-the-Father'.",
        patch: {
            mechanics: "奇点抹除协议 + [目标锁定率 = 100%; 容错空间 = 0; 环境感知 = Null]",
            mechanicsEn: "Singularity_Erasure_Protocol + [Target_Lock = 100%; Error_Margin = 0; Env_Perception = Null]",
            aesthetic: "以极高精度的局部微距特写（如刀刃反光、瞳孔张大）对比宏观环境的冰冷极权感。动静结合，在极度死寂的等待后，执行动作呈现拉断弓弦般的瞬间暴力释放。",
            aestheticEn: "Ultra-precision macro close-ups (e.g., blade reflections, dilated pupils) contrasting the cold totalitarian macro-environment. Static-to-dynamic: post-stillness wait followed by violence like a snapped bowstring.",
            runtime: "IF (目标暴露) THEN (执行：不顾一切的单维穿透突刺)；IF (目标被剪除) THEN (触发：目标缺失导致的无相引力坍缩)",
            runtimeEn: "IF (Target exposed) THEN (Execute: Reckless 1D piercing thrust); IF (Target eliminated) THEN (Trigger: Formless gravity collapse due to target absence)"
        }
    },
    {
        id: "drv_terror",
        name: "恐怖袭击", nameEn: "Terror",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "制造混乱和恐惧，以此来动摇系统的稳定性。",
        defEn: "Inciting chaos and fear to undermine the stability of the system.",
        core: "我不是要打败你们，我是要你们承认你们的脆弱。 | 缺失 ($): 秩序信念 (Belief_in_Order)",
        coreEn: "I'm not here to defeat you, but to make you admit your fragility. | Lack ($): Belief_in_Order",
        logic: "【秩序解构】：不再追求在符号矩阵中获取承认，而是将系统（M4）本身的脆弱性暴露作为最高享乐。主体的行动不试图夺取统治，只痴迷于传播无序和本体论层面的恐怖。",
        logicEn: "[Order Deconstruction]: No longer seeking recognition in the symbolic matrix, but exposing the system's (M4) fragility as maximum jouissance. Does not seek to rule, obsessed only with spreading ontological terror.",
        patch: {
            mechanics: "熵增散射协议 + [无差别爆炸半径 = Max; 道德抑制 = 0; 恐惧传染率 = High]",
            mechanicsEn: "Entropy_Scatter_Protocol + [Indiscriminate_Radius = Max; Moral_Inhibition = 0; Fear_Contagion = High]",
            aesthetic: "失控的火焰、滚动的浓烟与碎裂的文明标志物。强调尖锐刺耳的工业噪音与人群无目的的狂奔形成的失焦画面，呈现一种如同地狱降临般的混沌热浪与灰烬材质。",
            aestheticEn: "Out-of-control flames, rolling smoke, shattered civilization monuments. Sharp industrial noise and aimlessly fleeing crowds forming out-of-focus frames. Hellish chaos, heat waves, and ash textures.",
            runtime: "IF (人群密集且处于安逸状态/M4稳定) THEN (执行：最高烈度的不可预测物理撕裂)；IF (目睹恐慌) THEN (触发：快感回馈与自我消退)",
            runtimeEn: "IF (Dense crowd in comfort/M4 stable) THEN (Execute: Unpredictable max-intensity physical tearing); IF (Observing panic) THEN (Trigger: Jouissance feedback and ego recession)"
        }
    },
    {
        id: "drv_total_war",
        name: "正面战争", nameEn: "Total War",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "调动一切资源进行对称或不对称的决战。",
        defEn: "Mobilizing all resources for a decisive symmetric or asymmetric battle.",
        core: "填进去。把每一滴血和铁都填进这台绞肉机里。 | 缺失 ($): 边界感 (Boundary)",
        coreEn: "Throw it in. Every drop of blood and iron into this grinder. | Lack ($): Boundary",
        logic: "【零和绞肉】：将一切剩余势能填入永不饱和的战争熔炉。主体不再是人，而是被卷入大他者绞肉机下的能量传导体，在屠杀的对称性中追寻绝对毁灭的崇高感。",
        logicEn: "[Zero-Sum Grinder]: Feeding all residual potential energy into an insatiable war furnace. Subject becomes an energy conductor in the Other's grinder, seeking sublime absolute destruction in symmetric slaughter.",
        patch: {
            mechanics: "宏观湮灭协议 + [资源燃烧率 = Max; 个体化掩码 = 100%; 系统耗散度 = High]",
            mechanicsEn: "Macro_Annihilation_Protocol + [Resource_Burn_Rate = Max; Individual_Masking = 100%; System_Dissipation = High]",
            aesthetic: "宏大但无意义的全景式毁灭，钢铁洪流的碰撞与尸山血海的堆叠。色调必须极其压抑浓重，充满黑烟、融化的金属与大量干涸发黑的血污，体现毫无温情的质量对抗。",
            aestheticEn: "Grand but meaningless panoramic destruction, collision of steel floods, mountains of corpses. Oppressive and dense palettes, black smoke, melted metal, dried black blood. Loveless mass confrontation.",
            runtime: "IF (资源仍未耗尽) THEN (执行：全押式正面推演不计损耗)；IF (战线停滞或谈和) THEN (触发：系统排异指令，诱发内在病变断裂)",
            runtimeEn: "IF (Resources remain) THEN (Execute: All-in frontal push, ignoring losses); IF (Stalemate or Peace talks) THEN (Trigger: System rejection, inducing internal pathological rupture)"
        }
    },
    {
        id: "drv_riot",
        name: "暴动/起义", nameEn: "Riot",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "没有纲领的群体暴力宣泄，打砸抢烧。",
        defEn: "A collective outburst of violence without a platform, involving looting and fire.",
        core: "烧掉它，因为我不属于它。 | 缺失 ($): 归属结构 (Belonging_Structure)",
        coreEn: "Burn it down, because I don't belong to it. | Lack ($): Belonging_Structure",
        logic: "【无定型释放】：主体在群体动能中被匿名化，暴饮暴食式地释放死之驱力。不建立新秩序（M4），仅追求破坏的狂欢和快感的过度挥霍。",
        logicEn: "[Amorphous Release]: Subject anonymized in crowd dynamics, binge-releasing death drive. Establishes no new order (M4), seeking only destructive revelry and excessive squandering of jouissance.",
        patch: {
            mechanics: "群体匿名协议 + [传染阈值 = Low; 结构构建率 = 0; 发散系数 = High]",
            mechanicsEn: "Crowd_Anonymity_Protocol + [Contagion_Threshold = Low; Structure_Build_Rate = 0; Divergence_Factor = High]",
            aesthetic: "混乱的广角构图，打砸抢烧的失控细节。视觉碎片化（碎玻璃、燃烧的杂物、无人的空镜被践踏的特写）。",
            aestheticEn: "Chaotic wide-angle composition, out-of-control looting and arson details. Visual fragmentation (shattered glass, burning debris, close-ups of trampled empty frames).",
            runtime: "IF (秩序象征物出现) THEN (执行：群体无意识的涌动与粉碎)；IF (遭遇高度组织化镇压) THEN (执行：液态分裂/溃散重组)",
            runtimeEn: "IF (Order symbol appears) THEN (Execute: Mass unconscious surge and smash); IF (Highly organized suppression) THEN (Execute: Liquid splitting/routing recombination)"
        }
    },
    {
        id: "drv_duel",
        name: "荣誉决斗", nameEn: "The Duel",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "一对一的生死较量，维护尊严。",
        defEn: "A one-on-one life-or-death struggle to maintain dignity.",
        core: "我的血是洗刷这污名的唯一溶剂。 | 缺失 ($): 象征完整性 (Symbolic_Integrity)",
        coreEn: "My blood is the only solvent for this stigma. | Lack ($): Symbolic_Integrity",
        logic: "【符号性自裁】：确立绝对对称的暴力规则（M4），试图用物理的血洗刷实在界（Real）的污点。用生命做赌注换取“父定之名”的完整。",
        logicEn: "[Symbolic Suicide]: Establishing absolutely symmetric violence rules (M4) to wash the Real's stain with physical blood. Wagering life for the integrity of the 'Name-of-the-Father'.",
        patch: {
            mechanics: "绝对对称协议 + [外界屏蔽 = Max; 规则约束度 = 100%; 容错空间 = Null]",
            mechanicsEn: "Absolute_Symmetric_Protocol + [External_Block = Max; Rule_Constraint = 100%; Error_Margin = Null]",
            aesthetic: "极度静态的对峙与瞬间爆发。高对比度剪影，强调冷兵器或古典火器的反光质感，极度紧绷的安静环境音。",
            aestheticEn: "Extremely static standoff and instantaneous burst. High-contrast silhouettes emphasizing reflections of cold weapons/classic firearms, extremely tense quiet ambient sounds.",
            runtime: "IF (规则内开局) THEN (执行：以生命为筹码的单维攻防计算)；IF (规则被破坏/玷污) THEN (触发：荣誉坍塌引发的双倍疯狂回噬)",
            runtimeEn: "IF (Started within rules) THEN (Execute: 1D offense/defense calculus with life on the line); IF (Rules broken/tainted) THEN (Trigger: Double mad backlash from collapsed honor)"
        }
    },
    {
        id: "drv_scorched_earth",
        name: "焦土政策", nameEn: "Scorched Earth",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "毁灭自己拥有的一切，不给敌人留下任何资源。",
        defEn: "Destroying everything one owns to deny resources to the enemy.",
        core: "如果我不能拥有，它就不该存在。 | 缺失 ($): 客体分离容忍 (Object_Separation_Tolerance)",
        coreEn: "If I cannot possess it, it shouldn't exist. | Lack ($): Object_Separation_Tolerance",
        logic: "【绝对否定】：与其被大他者剥夺，不如由自身将一切归零。通过抹杀自身的所有物来隔绝他者接管的可能，是极端的毁灭性自恋。",
        logicEn: "[Absolute Negation]: Rather than being deprived by the Other, resetting all to zero oneself. Erasing possessions to block takeover possibilities—extreme destructive narcissism.",
        patch: {
            mechanics: "资产清零协议 + [抹杀彻底度 = 100%; 共情延迟 = Null; 自我损伤比 = Max]",
            mechanicsEn: "Asset_Zeroing_Protocol + [Erasure_Thoroughness = 100%; Empathy_Delay = Null; Self_Damage_Ratio = Max]",
            aesthetic: "广袤的灰烬与荒芜。画面剥离所有生命色彩，呈现彻底的死寂、发黑的泥土与仍在燃烧的残壁断垣。",
            aestheticEn: "Vast ash and barrenness. Stripping all life colors, presenting total silence, blackened soil, and still-burning ruined walls.",
            runtime: "IF (面临被剥夺判定) THEN (执行：不留死角的物理消除并反身吞噬)；IF (敌人抵达获取残骸) THEN (触发：嘲讽胜利感与极度空虚叠加)",
            runtimeEn: "IF (Facing deprivation check) THEN (Execute: Flawless physical erasure and reflexive ingestion); IF (Enemy arrives at ruins) THEN (Trigger: Mocking victory overlaid with extreme emptiness)"
        }
    },
    {
        id: "drv_coup",
        name: "武装政变", nameEn: "Military Coup",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "利用军队或武力强行夺取政权。",
        defEn: "Using military force to seize political power by strength.",
        core: "王座是空的，那就由枪管来填补。 | 缺失 ($): 合法性 (Legitimacy)",
        coreEn: "The throne is empty; let the barrel fill it. | Lack ($): Legitimacy",
        logic: "【符号暴力接管】：用物理压制强行篡改顶层的符号矩阵（M4）。并非系统颠覆，仅为在欲望链条中占据高位的粗暴手段。",
        logicEn: "[Symbolic Violent Takeover]: Forcibly altering the top symbolic matrix (M4) via physical suppression. Not system subversion, just a brutal maneuver to occupy a high node in the desire chain.",
        patch: {
            mechanics: "中枢劫持协议 + [目标精准度 = High; 压制权重 = Max; 道德折扣 = 0]",
            mechanicsEn: "Nexus_Hijack_Protocol + [Target_Accuracy = High; Suppression_Weight = Max; Moral_Discount = 0]",
            aesthetic: "暗夜、大雨、装甲履带与警戒线。极度冷酷的军工质感，肃杀的统一制服与机械运转的冷硬特写。",
            aestheticEn: "Dark night, heavy rain, armored tracks, and cordons. Ultra-cold military-industrial textures, deadly uniform vibes, and close-ups of stiff mechanical operations.",
            runtime: "IF (发令枪响) THEN (执行：直插系统心脏的无情切断)；IF (夺取成功) THEN (执行：立刻颁布恐怖禁令替代合法性空白)",
            runtimeEn: "IF (Starting gun) THEN (Execute: Heart-piercing ruthless severance); IF (Takeover success) THEN (Execute: Immediate terror edicts to replace legitimacy void)"
        }
    },
    {
        id: "drv_guerrilla",
        name: "游击战", nameEn: "Guerrilla",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "在暗处进行骚扰、破坏和消耗。",
        defEn: "Conducting harassment, sabotage, and attrition from the shadows.",
        core: "只要我不现身，我就无处不在。 | 缺失 ($): 中心化质量 (Centralized_Mass)",
        coreEn: "As long as I don't show, I am everywhere. | Lack ($): Centralized_Mass",
        logic: "【耗散力学】：拒绝正面交锋，化作大他者的系统Bug，靠持续微小咬噬拖垮主体意志，体现深层抗拒与游荡特征。",
        logicEn: "[Dissipative Mechanics]: Rejecting frontal clashes, becoming a system Bug of the Other. Dragging down willpower via continuous micro-bites, reflecting deep resistance and errant wandering.",
        patch: {
            mechanics: "幽灵咬噬协议 + [暴露时间 = Min; 撤退速度 = Max; 心理伤害倍数 = High]",
            mechanicsEn: "Phantom_Bite_Protocol + [Exposure_Time = Min; Retreat_Speed = Max; Psychic_Dmg_Multiplier = High]",
            aesthetic: "环境相溶式伪装（密林、残骸区、下水道）。长久的压抑寂静后，爆发局部、尖锐的短促动荡光影。",
            aestheticEn: "Environment-blending camo (jungles, debris fields, sewers). Localized, sharp, brief turbulent light flares after long oppressive silences.",
            runtime: "IF (敌方放松警惕/深入盲区) THEN (执行：瞬发致命切削并立刻蒸发)；IF (被迫卷入阵地战) THEN (执行：强行解散化整为零)",
            runtimeEn: "IF (Enemy unalert/deep in blind spot) THEN (Execute: Instant lethal slice and immediate evaporation); IF (Forced into positional war) THEN (Execute: Forced dispersion into zero)"
        }
    },
    {
        id: "drv_jailbreak",
        name: "劫狱", nameEn: "Jailbreak",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "强行攻破监狱，释放囚犯。",
        defEn: "Forcibly breaching a prison to liberate its inmates.",
        core: "墙壁是为了被推翻而建造的。 | 缺失 ($): 自由表象 (Illusion_of_Freedom)",
        coreEn: "Walls are built to be overthrown. | Lack ($): Illusion_of_Freedom",
        logic: "【边界破裂】：撕裂大他者的惩罚抑制器（幽闭区），释出被压抑的原始驱力，诱发物理与符号系统的双重系统痉挛。",
        logicEn: "[Boundary Rupture]: Tearing the Other's punishment inhibitor (claustro-zone), releasing repressed primal drives. Induces dual systemic spasms in physical and symbolic layers.",
        patch: {
            mechanics: "壁垒撕裂协议 + [释放势能 = Max; 空间渗透率 = High; 结构抗性削弱 = 100%]",
            mechanicsEn: "Barrier_Tear_Protocol + [Released_Pot_Energy = Max; Space_Permeability = High; Struct_Resist_Degrade = 100%]",
            aesthetic: "爆闪警灯与刺耳警号音。混凝土被炸飞的烟尘，高强度探照灯被暴动者切断或打散的失控光源。",
            aestheticEn: "Flashing police lights and piercing sirens. Concrete dust blown away, high-intensity searchlights cut or scattered by rioters into out-of-control light sources.",
            runtime: "IF (隔离屏障出现) THEN (执行：定向爆破与逻辑越权)；IF (门洞大开) THEN (触发：混沌质料的喷发与系统防火墙熔停)",
            runtimeEn: "IF (Isolation barrier appears) THEN (Execute: Directional blast and logic bypass); IF (Gates open) THEN (Trigger: Raw material eruption and system firewall meltdown)"
        }
    },
    {
        id: "drv_massacre",
        name: "屠杀", nameEn: "Massacre",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "对无反抗能力者的清洗。",
        defEn: "The systematic purging of those unable to resist.",
        core: "他们不是人，只是一组待清理的数据。 | 缺失 ($): 他者镜像 (Other's_Mirror)",
        coreEn: "They are not human, just data awaiting scrubbing. | Lack ($): Other's_Mirror",
        logic: "【质量净化】：将他者完全降维为“可擦除材质”进行规模化推平。取消对象主体性，摒弃任何平等的目光交汇。",
        logicEn: "[Mass Purification]: Downscaling the Other completely to 'erasable material' for scaled flattening. Canceling object subjectivity, discarding any equal gaze exchange.",
        patch: {
            mechanics: "降维清除协议 + [同理阻断 = Absolute; 动作重复率 = Max; 效率优先 = 100%]",
            mechanicsEn: "Downscale_Purge_Protocol + [Empathy_Block = Absolute; Action_Repetition = Max; Efficiency_First = 100%]",
            aesthetic: "压抑极点的冷漠全景（如同工厂粉碎物料）。死物堆叠的质感，黏浊暗流，体现完全不具备个性的质量消失。",
            aestheticEn: "The most painfully indifferent panorama (like a factory shredder). Texture of piled dead objects, viscous dark currents, reflecting totally impersonal mass disappearance.",
            runtime: "IF (锁定非活跃目标) THEN (执行：机械化、批量的重复销毁指令)；IF (遭遇情感诉求求饶) THEN (执行：当做冗余噪音无视或覆盖)",
            runtimeEn: "IF (Inactive targets locked) THEN (Execute: Mechanized, batch repetitive destruction); IF (Emotional begging encountered) THEN (Execute: Ignore/overwrite as redundant noise)"
        }
    },
    {
        id: "drv_execution",
        name: "公开处决", nameEn: "Public Execution",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "在广场上杀人，以儆效尤。",
        defEn: "Killing in a public square as a warning to others.",
        core: "死者没有意义，看客的恐惧才是。 | 缺失 ($): 权威实感 (Reality_of_Authority)",
        coreEn: "The dead mean nothing; the audience's fear is everything. | Lack ($): Reality_of_Authority",
        logic: "【奇观律法】：将消释活物的过程包装为大他者（M4）威慑的景观盛宴。核心是用血祭缝合受损的社会象征秩序。",
        logicEn: "[Spectacle Law]: Packaging the dissolution of living beings as a deterrence spectacle feast for the Other (M4). Blood sacrifices sew up the damaged social symbolic order.",
        patch: {
            mechanics: "律法奇观协议 + [展演时间 = Max; 震慑转换率 = High; 执行人非人化 = 100%]",
            mechanicsEn: "Law_Spectacle_Protocol + [Performance_Time = Max; Deterrence_Conv = High; Executioner_Dehumanization = 100%]",
            aesthetic: "高台与聚光焦点。旁观人群麻木与狂热的混杂表情特写。刑具运行特写与冰冷客观的光照表现。",
            aestheticEn: "High platform and focal spotlights. Close-ups of the crowd's mixed numb/fanatical expressions. Close-ups of torture devices running and cold objective lighting.",
            runtime: "IF (受众聚集完毕) THEN (执行：被拖慢节奏的、充满宣告意义的终结打击)；IF (目标停止挣扎) THEN (触发：将残骸转为系统符号的高亢悬挂)",
            runtimeEn: "IF (Audience gathered) THEN (Execute: Dragged out, declarative finishing blow); IF (Target stops struggling) THEN (Trigger: Resonant hanging/display converting ruins to system symbol)"
        }
    },
    {
        id: "drv_torture_back",
        name: "酷刑反击", nameEn: "Counter-Torture",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "对施暴者进行同样的折磨。",
        defEn: "Inflicting the same torment upon the perpetrator.",
        core: "轮到我来教你这刀有多疼了。 | 缺失 ($): 创伤闭环 (Traumatic_Closure)",
        coreEn: "My turn to teach you how much this blade hurts. | Lack ($): Traumatic_Closure",
        logic: "【快感镜像】：以眼还眼是对实在界创伤的病态对称回写。提取施加方所展示的暴行，翻转受力方向体验同构快感。",
        logicEn: "[Jouissance Mirror]: An eye for an eye is a sick symmetric write-back of Real trauma. Extracting the abuser's atrocity, reversing the force direction to experience isomorphic jouissance.",
        patch: {
            mechanics: "对称复刻协议 + [镜像倍率 = 1.0; 痛觉采样 = Max; 一击致命锁 = On]",
            mechanicsEn: "Symmetric_Replication_Protocol + [Mirror_Ratio = 1.0; Pain_Sampling = Max; One-Hit_Kill_Lock = On]",
            aesthetic: "幽闭局促的空间内景，生锈钢铁与黏滞血迹。高度触觉化的微距感与极具刺耳高频的机械切削声效。",
            aestheticEn: "Claustrophobic tight interiors, rusted steel, sticking blood. Highly tactile macro-feel with extremely piercing high-freq mechanical cutting sounds.",
            runtime: "IF (原施暴者处于控制下) THEN (执行：极度缓慢的等量疼痛重现仪式)；IF (原施暴者崩溃求饶) THEN (触发：获取极高权能的瞬间狂喜并拒绝给予解脱)",
            runtimeEn: "IF (Original abuser controlled) THEN (Execute: Extremely slow pain recreation ritual); IF (Abuser breaks/begs) THEN (Trigger: Surge of supreme power ecstasy while denying release)"
        }
    },
    {
        id: "drv_suicide_bomb",
        name: "自杀式袭击", nameEn: "Kamikaze",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "将自己的身体作为炸弹。",
        defEn: "Using one's own body as an explosive device.",
        core: "我的毁灭是通向真理的门票。 | 缺失 ($): 世俗牵绊 (Mundane_Ties)",
        coreEn: "My destruction is the ticket to truth. | Lack ($): Mundane_Ties",
        logic: "【绝对献祭】：将主体存在连同有机体作为一次性终极燃点。用肉体归零换取对M4体系的瞬间暴烈透支与神圣感充盈。",
        logicEn: "[Absolute Sacrifice]: Consuming subjective existence and organism as a one-shot ultimate ignition point. Zeroing flesh in exchange for instant violent overdraft of M4 and filling with divinity.",
        patch: {
            mechanics: "奇点引爆协议 + [生命折旧 = 瞬间; 破坏乘数 = Infinite; 回头概率 = 0]",
            mechanicsEn: "Singularity_Detonate_Protocol + [Life_Depreciation = Instant; Damage_Multiplier = Infinite; Turn_Back_Prob = 0]",
            aesthetic: "日常市井环境中的突兀爆白（Whiteout）。失聪的寂静后，跟进极慢镜头的巨大物理波解体和无声崩塌。",
            aestheticEn: "Abrupt Whiteout in an everyday urban setting. Following deafening silence, extreme slow-motion giant physical wave disintegrations and silent collapse.",
            runtime: "IF (进入引爆原点) THEN (执行：切断一切求生逻辑即刻执行物理终极解构)；IF (指令发出) THEN (触发：强制覆盖所有外来打断与劝阻选项)",
            runtimeEn: "IF (Entered origin) THEN (Execute: Cut survival logic, immediate ultimate physical deconstruction); IF (Signal given) THEN (Trigger: Override all external interrupts and persuasions)"
        }
    },
    {
        id: "drv_mech_ascension",
        name: "机械飞升", nameEn: "Forced Ascension",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "强行将肉体改造为杀人机器。",
        defEn: "Forcibly reconstructing the physical body into a killing machine.",
        core: "血肉苦弱，唯有钢铁铸就永恒。 | 缺失 ($): 肉体耐度 (Flesh_Resilience)",
        coreEn: "Flesh is weak; only steel casts eternity. | Lack ($): Flesh_Resilience",
        logic: "【肉体废除】：因无法忍受肉体的脆弱（M1缺陷），用冰冷硬质代换有机活体，成为绝对工具，这是死之驱力装甲化。",
        logicEn: "[Flesh Abolition]: Unable to bear flesh's frailty (M1 flaw), substituting strict cold hard materials for organic life to become an absolute tool. Death drive armor-plated.",
        patch: {
            mechanics: "机甲替代表达 + [共情模块 = 删除; 痛觉系数 = 0; 执行效率 = Max]",
            mechanicsEn: "Mecha_Substitute_Protocol + [Empathy_Module = Deleted; Pain_Coefficient = 0; Execution_Efficiency = Max]",
            aesthetic: "刺入神经的机硅管线，冷酷的监控面板界面。电火花与油污/血液混合的赛博朋克深渊感色彩。",
            aestheticEn: "Silicon tubes piercing nerves, ruthless monitor panel interfaces. Cyberpunk abyssal colors mixing electric sparks with oil/blood.",
            runtime: "IF (遭遇物理损伤/痛觉反馈) THEN (执行：拦截痛感传输并冷血反击)；IF (人性残存指令发作) THEN (触发：逻辑系统自我格式化与压制)",
            runtimeEn: "IF (Physical damage/pain) THEN (Execute: Intercept pain transmission and coldly counterattack); IF (Remnant humanity acts up) THEN (Trigger: Logic system auto-formatting and suppression)"
        }
    },
    {
        id: "drv_bio_mod",
        name: "生化改造", nameEn: "Bio-Mod",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "注入病毒或血清，变成怪物战斗。",
        defEn: "Injecting viruses or serums to fight as a monster.",
        core: "理智是什么？我要把它撕碎！ | 缺失 ($): 理性形态 (Rational_Form)",
        coreEn: "What is reason? I will tear it apart! | Lack ($): Rational_Form",
        logic: "【异质吞噬】：拥抱系统外的侵蚀代码（病毒），主动促成本体力学畸变，在不可测的变异中获取超越理性边界的野性力量。",
        logicEn: "[Heterogeneous Phagocytosis]: Embracing corrosive codes (viruses) outside the system, actively inducing ontological mechanical aberrations. Gaining wild power beyond rational boundaries in unpredictable mutations.",
        patch: {
            mechanics: "基因畸变协议 + [突变不控概率 = High; 狂暴倍率 = Max; 结构稳定性 = 崩溃边缘]",
            mechanicsEn: "Gene_Mutation_Protocol + [Uncontrolled_Mut_Prob = High; Rage_Multiplier = Max; Struct_Stability = Brink_of_Collapse]",
            aesthetic: "暴突的脉络、异常增殖鼓动的血肉组织与毒脓。高生化不适度的发绿发紫强自发光物质特效流动。",
            aestheticEn: "Bulging veins, abnormally proliferating blood-flesh tissues and virulent pus. Highly uncomfortable biohazardous glowing green/purple viscous flow.",
            runtime: "IF (注入异质源) THEN (执行：突破参数上限的躯体膨胀攻击)；IF (自我意识校验) THEN (触发：报错警告，呈现深渊化反噬侵染)",
            runtimeEn: "IF (Injected alien source) THEN (Execute: Limit-breaking somatic expansion attacks); IF (Self-consciousness check) THEN (Trigger: Error warnings, showing abyssal corrosive infection)"
        }
    },
    {
        id: "drv_nuke_threat",
        name: "核威慑", nameEn: "Nuclear Option",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "威胁同归于尽，按下按钮。",
        defEn: "Threatening mutual destruction by pressing the button.",
        core: "再往前一步，我们就一起下地狱。 | 缺失 ($): 退路 (Escape_Route)",
        coreEn: "One more step, and we both go to hell. | Lack ($): Escape_Route",
        logic: "【终极湮灭天平】：扣住达摩克利斯之剑的悬索边缘，将现设施系统置于无差别气化阴影下，利用恐惧剥削来锚定权力顶点。",
        logicEn: "[Ultimate Annihilation Scale]: Gripping the fraying suspension of the Sword of Damocles, placing current systemic facilities under indiscriminate vaporization shadows. Leveraging fear exploitation to anchor power's zenith.",
        patch: {
            mechanics: "末日对峙协议 + [心理高压 = Max; 威慑博弈系数 = Infinite; 实际执行概率 = 薛定谔状态]",
            mechanicsEn: "Doomsday_Standoff_Protocol + [Psych_Pressure = Max; Deterrent_Game_Coef = Infinite; Exec_Prob = Schrodinger_State]",
            aesthetic: "冰冷封闭控制室的极高危红光，不断跳动的冷硬倒数表数字。深埋地下的沉重金属死寂与绝对寂静的回音。",
            aestheticEn: "Cold enclosed control room's ultra-high-risk red lights, constantly ticking cold hard countdown digits. Heavy metallic dead silence buried underground and echoes of absolute quiet.",
            runtime: "IF (遭受压迫极限越界) THEN (执行：触发毁灭前置序列)；IF (获得退让与谈判筹码) THEN (执行：在极度紧绷的冷汗中暂停倒数)",
            runtimeEn: "IF (Pressed beyond limit) THEN (Execute: Trigger destruction pre-sequence); IF (Gained concessions/bargain chips) THEN (Execute: Pause countdown amidst extreme cold sweat tension)"
        }
    },
    {
        id: "drv_orbital_strike",
        name: "轨道轰炸", nameEn: "Orbital Strike",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "从高空降下毁灭之火。",
        defEn: "Descending fire of destruction from high orbit.",
        core: "你们只是大地上的微尘。 | 缺失 ($): 平等感知 (Egalitarian_Perception)",
        coreEn: "You are but dust upon the earth. | Lack ($): Egalitarian_Perception",
        logic: "【降维审判】：脱离平行维度的物理接触，向地面世界降下绝对不可对抗的高阶神罚。执行单向度抹除的机械冷感。",
        logicEn: "[Dimensional Judgment]: Detaching from parallel physical contact, dropping absolute irresistible divine punishment on the ground world. Cold mechanics of unidimensional erasure.",
        patch: {
            mechanics: "高维清除协议 + [打击不可逆 = 100%; 制空权 = 绝对; 个体识别 = Ignored]",
            mechanicsEn: "Higher-Dim_Purge_Protocol + [Irreversible = 100%; Air_Supremacy = Absolute; Individual_ID = Ignored]",
            aesthetic: "从漆黑深空划破云层的终极破坏光柱。超环形冲击波扫平地表建筑，将其光速气化为高亮等离子白斑的宏大视效。",
            aestheticEn: "Ultimate destruction light pillars slicing through clouds from pitch-black deep space. Hyper-annular shockwaves flattening surface buildings, grand visuals of light-speed vaporization into glowing plasma white spots.",
            runtime: "IF (收到指令代码) THEN (执行：无延迟的跨维度全图重火力覆盖)；IF (目标区域蒸发) THEN (触发：淡漠的数据归档报告结束进程)",
            runtimeEn: "IF (Command code received) THEN (Execute: Zero-delay cross-dim full map heavy fire coverage); IF (Target area evaporated) THEN (Trigger: Indifferent data archive report ends process)"
        }
    },
    {
        id: "drv_siege",
        name: "围城", nameEn: "The Siege",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "切断补给，困死敌人。",
        defEn: "Cutting off supplies to starve the enemy into submission.",
        core: "时间会吃掉他们，不用我动手。 | 缺失 ($): 快感即时性 (Immediate_Jouissance)",
        coreEn: "Time will eat them; I needn't lift a finger. | Lack ($): Immediate_Jouissance",
        logic: "【熵增慢切】：通过对系统空间闭源剥夺，迫使目标体系在耗散孤立下内爆。不诉诸瞬间毁灭，而玩味其时间流里的自我消耗。",
        logicEn: "[Slow Entropy Cut]: Forcing the target system to implode under dissipative isolation via spatial closed-source deprivation. Avoids instant destruction, instead savoring self-consumption within the time stream.",
        patch: {
            mechanics: "孤立耗散协议 + [资源补充封锁 = 100%; 绝望积累 = 线性递增; 时光荏苒阈值 = Max]",
            mechanicsEn: "Isolated_Dissipation_Protocol + [Resource_Block = 100%; Despair_Acc = Linear_Inc; Time_Threshold = Max]",
            aesthetic: "灰度极重、颜色剥落的环境。枯竭的蓄水源与枯槁变质的人脸特写，长期低对比度的压抑窒息滤镜。",
            aestheticEn: "Extremely heavy grayscales, peeling-color environments. Dried reservoirs and withered facial close-ups, long-term low-contrast oppressive suffocating filters.",
            runtime: "IF (合围建立) THEN (执行：开启漫长的生理及道德干涸倒计时)；IF (内部动乱/易子而食) THEN (触发：外界观测者的冷血愉悦与收网预热)",
            runtimeEn: "IF (Encirclement built) THEN (Execute: Start the long somatic and moral dry-out countdown); IF (Internal riot/cannibalism) THEN (Trigger: Cold-blooded pleasure of outer observers and pre-net tightening)"
        }
    },
    {
        id: "drv_charge",
        name: "决死冲锋", nameEn: "The Charge",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "面对必死的局面发起冲锋。",
        defEn: "Launching a charge into certain-death scenarios.",
        core: "唯一能赢的方式，就是不再想活下来。 | 缺失 ($): 求生本能 (Survival_Instinct)",
        coreEn: "The only way to win is to stop wanting to live. | Lack ($): Survival_Instinct",
        logic: "【盲信冲量】：剔除生还概率计算。为宣示反理性之纯粹意志将大量基底送入毫无生机的射界，以动能展示纯洁性。",
        logicEn: "[Blind-faith Momentum]: Eliminating survival probability calculus. Shoving mass substrates into lifeless kill-zones to declare the anti-rational pure will. Proving purity via sheer kinetics.",
        patch: {
            mechanics: "自毁突进协议 + [撤退逻辑 = 删除; 移动动能 = Max; 防御权重 = 0]",
            mechanicsEn: "Self-Destruct_Charge_Protocol + [Retreat_Logic = Del; Kinetic_Momentum = Max; Def_Weight = 0]",
            aesthetic: "巨型金属风暴迎面狂飙中的前向推轨镜头。悲壮残酷、遍地碎肉但具有古典史诗与极端反理智的昂扬调色。",
            aestheticEn: "Forward tracking shots into rushing giant metal storms. Tragic cruelty, scattered flesh, yet colored with classic epic and extraordinarily anti-rational uplifting palettes.",
            runtime: "IF (进入火力覆盖区) THEN (执行：屏蔽所有恐惧反馈并加速突击)；IF (全体玉碎) THEN (触发：在血泊中升华的最高层美学惨败定格)",
            runtimeEn: "IF (Entered kill zone) THEN (Execute: Block all fear feedback and accelerate assault); IF (Total wipeout) THEN (Trigger: Sublime aesthetic tragic freeze-frame in blood pools)"
        }
    },
    {
        id: "drv_berserk",
        name: "狂暴化", nameEn: "Berserk",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "失去理智，只剩下杀戮本能。",
        defEn: "Losing reason, left only with the instinct to kill.",
        core: "肉块，挡路的全都是肉块。 | 缺失 ($): 区分度 (Differentiation)",
        coreEn: "Meat, everything in the way is just meat. | Lack ($): Differentiation",
        logic: "【抑制摘除】：物理撕除大他者（语言法度）枷锁，回归无名之物的猛兽本源。仅由基础生理反馈驱动单向动能撕扯。",
        logicEn: "[Inhibitor Excision]: Physically tearing off the Other's (Language/Law) shackles, reverting to the nameless beast origin. Unidirectional kinetic tearing driven merely by basic somatic physiology.",
        patch: {
            mechanics: "理智熔断协议 + [友军伤害 = On; 攻击倍率 = 持续上升; 控制免疫 = High]",
            mechanicsEn: "Sanity_Meltdown_Protocol + [Friendly_Fire = On; Atk_Multiplier = Escalating; CC_Immune = High]",
            aesthetic: "极限视点摇晃、周边视野血红晕影。聚焦徒手撕裂刚体并展现血液/内脏飞洒的主观极速运动残暴特写。",
            aestheticEn: "Extreme POV shaking, blood-red peripheral vignettes. Subjective rushing motion close-ups focusing on bare-hands tearing solid bodies with blood/entrails splash.",
            runtime: "IF (启动狂暴) THEN (执行：封闭语言输入，只通过生物电触发屠杀)；IF (四周无活物) THEN (触发：撕扯自身皮肉缓解过载痛楚)",
            runtimeEn: "IF (Berserk activated) THEN (Execute: Close linguistic input, trigger slaughter strictly via bio-electricity); IF (No living things around) THEN (Trigger: Tearing own flesh to ease overload pain)"
        }
    },
    {
        id: "drv_godslay",
        name: "弑神", nameEn: "Godslaying",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "挑战并杀死至高无上的存在。",
        defEn: "Challenging and slaying the supreme being.",
        core: "如果天塌下来，那我就把天踩在脚下。 | 缺失 ($): 敬畏感 (Reverence)",
        coreEn: "If the sky falls, I will step on it. | Lack ($): Reverence",
        logic: "【终极僭越】：把动能锚向宇宙中极点巨物。这是主体对原初禁忌“绝对至尊”发出的挑衅，力图粉碎天穹重整秩序虚无。",
        logicEn: "[Ultimate Transgression]: Anchoring kinetic energy onto the cosmic zenith titan. A subject's provocation against the primal taboo 'Absolute Supreme', aiming to shatter the firmament and reset order to naught.",
        patch: {
            mechanics: "天极穿透协议 + [等级压制免疫 = 100%; 悖论承受力 = Max; 因果斩断 = True]",
            mechanicsEn: "Zenith_Pierce_Protocol + [Level_Sup_Immune = 100%; Paradox_Tolerance = Max; Causality_Sever = True]",
            aesthetic: "凡胎芥子与如山神的体积感天差地别对比。神性高洁光辉被污黑尘芥血污残暴玷污、庞然巨物哀鸣倒塌的奇观。",
            aestheticEn: "Mortal speck vs mountain-god volume scale contrasts. Divine immaculate glory brutally tainted by dark dust and gory grime, spectacle of colossus squealing and toppling.",
            runtime: "IF (面对神级威压) THEN (执行：逆流而上的无限意志爆发抵抗)；IF (神明倒塌) THEN (触发：系统核心代码暴露下的宇宙重组动荡)",
            runtimeEn: "IF (Facing godly pressure) THEN (Execute: Upstream infinite will explosion resistance); IF (God falls) THEN (Trigger: Cosmic reorganization turbulence with exposed system core code)"
        }
    },
    {
        id: "drv_extermination",
        name: "灭绝令", nameEn: "Extermination",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "系统性地消灭一个物种或族群。",
        defEn: "Systematic elimination of a species or ethnic group.",
        core: "这不是谋杀，这只是打扫卫生。 | 缺失 ($): 多样性容忍 (Diversity_Tolerance)",
        coreEn: "This is not murder; it's just cleaning up. | Lack ($): Diversity_Tolerance",
        logic: "【形而上擦除】：最绝对之恶。不只摧毁物理质量，连同群族符号、历史存在基点一并推进实在界的万古黑洞。绝对去痕迹。",
        logicEn: "[Metaphysical Erasure]: The absolute evil. Not merely destroying physical mass, but shoving tribal symbols and historic footholds into the eternal black hole of the Real. Absolute tracelessness.",
        patch: {
            mechanics: "文明抹杀协议 + [系统性净化率 = 100%; 伦理锁 = 0; 执行层级 = 顶层下达]",
            mechanicsEn: "Civ_Erasure_Protocol + [Systemic_Purge_Rate = 100%; Ethics_Lock = 0; Exec_Hierarchy = Top-Down]",
            aesthetic: "在地图全息影上无情涂除的冷色数据流。宏大的巨型焚尸坑，静止画面中堆叠如山的遗存物，纯粹静音留白与低平稳机声。",
            aestheticEn: "Ruthless erasure as cool-toned data flows on holographic maps. Colossal crematorium pits, still frames of mountain-like remnants. Pure silent white space with low steady drone.",
            runtime: "IF (圈定抹杀目标) THEN (执行：无情绪波动的大工业级系统抹除)；IF (残存标本出现) THEN (执行：触发绝对强迫性质的补刀追杀直至归零)",
            runtimeEn: "IF (Targets designated) THEN (Execute: Emotionless mega-industrial systemic wipeout); IF (Remnant specimen appears) THEN (Execute: Trigger absolutely compulsive hunt until absolute zero)"
        }
    },
    {
        id: "drv_arson",
        name: "纵火", nameEn: "Arson",
        group: "A. 激进的对抗", groupEn: "Confrontation",
        def: "点燃建筑物或城市。",
        defEn: "Setting fire to buildings or entire cities.",
        core: "这世界太冷了，我给它点个炉子。 | 缺失 ($): 建设性 (Constructiveness)",
        coreEn: "This world is too cold; I'll light it a furnace. | Lack ($): Constructiveness",
        logic: "【等离子体净化】：强制物质序列极速坍缩。享受三维固态被不确定、无形状之焰强制降维同化的末日热力学狂奔。",
        logicEn: "[Plasma Purification]: Forcing instant material sequence collapse. Savoring the doomsday thermodynamic sprint where 3D solids are forcibly downscaled and assimilated by formless, uncertain fire.",
        patch: {
            mechanics: "熵跃迁协议 + [传播速率 = 指数级; 形体解构 = Max; 余烬驻留时间 = High]",
            mechanicsEn: "Entropy_Leap_Protocol + [Spread_Rate = Exponential; Form_Deconstruction = Max; Ember_Retention = High]",
            aesthetic: "极尽奢靡的高光爆裂和高温导致视场边缘波纹扭曲。劈啪作响的建材崩毁重低音与疯狂涌动的厚重黑烟墙。",
            aestheticEn: "Ultra-luxurious specular bursts and edge-warping heat waves. Sub-bass crackling building crumbles and frantic surging walls of heavy black smoke.",
            runtime: "IF (点燃火种) THEN (执行：沉醉于观看不可控热能扩张)；IF (目标化为灰烬) THEN (触发：热潮褪去后突如其来的强烈虚无冷却)",
            runtimeEn: "IF (Ignite spark) THEN (Execute: Revel in watching uncontrollable thermal expansion); IF (Target into ashes) THEN (Trigger: Abrupt severe existential cooling post-heatwave)"
        }
    }
];
