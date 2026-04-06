import { LibraryItemDef } from '../../../types';

export const SYNTHESIZER_SUR4X: LibraryItemDef[] = [
    {
        id: "sur4x_level_1",
        name: "L1.空气",
        nameEn: "Social Air",
        group: "SUR4X. 物理阶层阻力",
        def: "阶层体系几乎呈现出水晶般的透明态，主角在这个拓扑空间中感觉不到社会结构强加在物理位移上的任何重量束缚。极致的向上或平移自由感。",
        defEn: "The class hierarchy exhibits an almost crystal-clear transparency; the protagonist feels no weight constraints imposed by social structure on physical displacement in this topological space. Extreme upward/lateral freedom.",
        core: "极端的自由漂浮。物理现实对主体的动作（M5）几乎没有任何额外重力负荷和阻隔门槛。这里是绝对顺滑的理想国模拟态。",
        coreEn: "Extreme free-floating. Physical reality exerts almost zero extra gravitational load or barrier threshold upon the subject's actions (M5). This is the absolutely smooth simulated Utopia state.",
        patch: {
            mechanics: "允许随时在任何场景开启无衰减、无代价的极速传送（Fast Travel）。角色的基础冲刺与翻滚不扣除任何耐力（Stamina），所有进阶关键道具在经济路线上唾手可得。",
            mechanicsEn: "Allowing zero-decay, zero-cost Fast Travel anywhere instantly. The character's base sprint/roll deducts no Stamina; all progression key items are easily obtainable on economic routes.",
            aesthetic: "宏大的天空、没有顶棚的开阔平原视觉大区体系。明亮畅快、没有任何空气污染滤镜的清透体积光（Volumetric Lighting）布满整个渲染环境。",
            aestheticEn: "Grandiose skies, open plains visual zone system without ceilings. Bright, exhilarating, crystal-clear Volumetric Lighting devoid of any air-pollution filters floods the entire rendered environment.",
            runtime: "IF (阶层体系呈现水晶般透明态，主角感觉不到社会结构强加在物理位移上的任何重量束缚) THEN (将附着在角色物理控制器Character Controller上的Gravity重力乘数和Stamina_Cost耐力损耗系数全部重置为系统内部设定的最低阈值极小量)。",
            runtimeEn: "IF (Class_Hierarchy_Exhibits_Crystal_Transparency_No_Weight_Constraints_On_Physical_Displacement) THEN (Reset Gravity multiplier and Stamina_Cost coefficient attached to Character Controller to absolute minimum system thresholds)."
        }
    },
    {
        id: "sur4x_level_2",
        name: "L2.粘稠液体",
        nameEn: "Viscous Liquid",
        group: "SUR4X. 物理阶层阻力",
        def: "主体开始轻微感知到了环境网格的暗中摩擦。某些非强制性的社会身份证明开始增添负重感，穿梭区域时不得不顺从某些隐蔽增加的繁文缛节。",
        defEn: "The subject begins slightly perceiving the covert friction of the environmental mesh. Certain non-mandatory social IDs start adding weight; navigating zones demands compliance to subtly increasing bureaucratic red tape.",
        core: "结构性的社会粘度初现。每前进一步，都需要主角在引擎后场支付额外的能量代币，以此来抵消平衡宏大街区系统的隐性惯性推力。",
        coreEn: "Structural social viscosity emerges. Every step forward requires the protagonist to pay extra energy tokens in the engine background, offsetting the latent inertial push of the macro city-block system.",
        patch: {
            mechanics: "特定的捷径区域或关键地形出口需要特定的“通行签证（Visas）”或交纳过路费用。物理冲刺开始切实行使微小的资源惩罚扣费。",
            mechanicsEn: "Specific shortcut areas or critical terrain exits demand specific 'Visas' or toll payments. Physical sprinting realistically initiates minor resource penalty deductions.",
            aesthetic: "关卡的纵深变得相对局促紧实，大量增加带有拥挤人群或路障隔离带的密集市井地貌外观设计。中景空间（Mid-ground）被大量繁琐无关的内容塞满。",
            aestheticEn: "Level depth becomes relatively cramped; heavily populating appearances with dense bazaar topographies featuring crowded mobs or barricades. Mid-ground spaces are stuffed with tedious irrelevant clutter.",
            runtime: "IF (主体开始感知到环境网格的暗中摩擦，非强制性社会身份证明增添物理负重感) THEN (在特定地块内布设并调用Nav_Modifier_Volume阻尼网格，根据附着在此地的区域声望Prestige Tags强行为玩家每步位移推算并扣除行走消耗参数)。",
            runtimeEn: "IF (Subject_Perceives_Covert_Environmental_Mesh_Friction_Social_IDs_Add_Physical_Weight) THEN (Deploy Nav_Modifier_Volume damping grids within specific chunks, forcibly deducting movement consumption parameters based on regional Prestige Tags)."
        }
    },
    {
        id: "sur4x_level_3",
        name: "L3.泥淖",
        nameEn: "Deep Quagmire",
        group: "SUR4X. 物理阶层阻力",
        def: "阶级的粗暴物理壁垒肉眼清晰可见。主角发现自己陷在了一盘错综复杂、充斥着地头蛇与官僚主义的泥沼中。能挣扎，但这只能导致极其缓慢地下沉。",
        defEn: "Crude physical barriers of class are starkly visible to the naked eye. The protagonist finds themselves trapped in a complex quagmire full of local tyrants and bureaucracy. Struggling is possible, but merely causes a slow sink.",
        core: "被卡死在系统的缝隙中。主体被各种体制标签（A）层层死死缠绕，物理上的位移直接被沉重的社会法则硬生生绊住脚跟。",
        coreEn: "Jammed in the cracks of the system. The subject is tightly entangled layer upon layer by various institutional tags (A); physical displacement is bluntly tripped up by heavy social laws.",
        patch: {
            mechanics: "超重度负载（Encumbrance）与惩戒判定。玩家无论如何也得通过不断贿赂、交补不完的税费，或是漫长无比的排队解谜任务机制才能往前推进一步主线。",
            mechanicsEn: "Over-encumbrance and penalty evaluations. The player must endlessly bribe, pay endless taxes, or endure immensely long queuing puzzle mechanics just to push the mainline forward one step.",
            aesthetic: "极度幽闭恐惧症的狭长压抑甬道、满地工业泥浆与遮天蔽日散发恶臭的毒性酸雾。极其肮脏斑驳、几乎发霉的次世代材质纹理。",
            aestheticEn: "Extremely claustrophobic tight oppressive corridors, floors covered in industrial mud, and toxic smog blocking the sky emitting stench. Exceedingly dirty, mottled, almost moldy next-gen material textures.",
            runtime: "IF (阶级物理壁垒肉眼清晰可见，主角陷在错综复杂的泥沼中，挣扎只导致更深下沉) THEN (指令物理引擎全局强效改写主角对象的Mass质量基数，同时在任务交互逻辑栈内恶意植入永远有10%随机概率导致权限不足报错Interaction Failure的伪劣代码逻辑核)。",
            runtimeEn: "IF (Class_Physical_Barriers_Starkly_Visible_Protagonist_Trapped_In_Quagmire_Struggling_Only_Sinks_Deeper) THEN (Command physics engine to globally overwrite protagonist Mass, maliciously implant shoddy code-logic core into interaction stack yielding constant 10% random Interaction Failure)."
        }
    },
    {
        id: "sur4x_level_4",
        name: "L4.固化岩层",
        nameEn: "Solid Bedrock",
        group: "SUR4X. 物理阶层阻力",
        def: "社会拓扑发生了绝对且残忍的永久地质固化。出身就是绝对终局。这里根本不存在任何上升或向光逃逸的坐标切线，所有的挣扎只代表着更彻底的被镶嵌钉死。",
        defEn: "Social topology undergoes absolute and cruel permanent geological fossilization. Birth is the absolute endgame. There exists no coordinate tangent for upward or lightwards escape; all struggling merely denotes being more thoroughly nailed and embedded.",
        core: "毫无转圜余地的阶级死刑。主体的血肉之躯彻底冷却，变为构筑庞大金字塔底层的一块标准化砖石，彻彻底底折损了所有的个体自由流态性。",
        coreEn: "Class death-penalty with zero leeway. The subject's flesh completely cools, turning into standardized masonry constructing the massive pyramid's base, utterly forfeiting all individual free fluidity.",
        patch: {
            mechanics: "玩家物理层面上被锁死在整个城市的绝大部分区块外。严苛死板的身份审查网使得任何跨阶级的越界行为都会立刻招致“高等守卫”的一击强制秒杀。",
            mechanicsEn: "The player is physically hard-locked out of the vast majority of sectors in the entire city. Rigid ID screening nets ensure any cross-class trespassing instantly invites a forced one-hit-kill from 'High Guards'.",
            aesthetic: "雄伟到反人类、体量夸张到让人绝望的实体粗野混凝土高墙。极度吝啬的环境背光设计导致天空宛若不可达的传说，绝大部分游玩视野深陷于伸手不见五指的高对比度阴沟色调。",
            aestheticEn: "Anti-humanly majestic, desperately exaggerated scaled brutalist concrete walls. Extremely stingy backlighting making the sky an unreachable myth; most gameplay FOV plunges into pitch-black high-contrast gutter tones.",
            runtime: "IF (社会拓扑发生绝对残忍的永久地质固化，出身即终局，不存在任何上升逃逸坐标切线) THEN (在底层引擎空间树划段中强制加载大面积完全透明且摧毁免疫的Kill_Z即死碰撞裁切面板列，通过纯硬核物理代码逻辑一刀切断社群阶级的交汇可能)。",
            runtimeEn: "IF (Social_Topology_Undergoes_Absolute_Cruel_Permanent_Geological_Fossilization_Birth_Is_Endgame) THEN (Forcibly load massive arrays of transparent indestructible Kill_Z clipping planes throughout base engine spatial tree, utilizing raw hardcore physics code to sever all class intersection possibilities)."
        }
    },
    {
        id: "sur4x_level_5",
        name: "L5.超高压内核",
        nameEn: "Hyper-pressure Core",
        group: "SUR4X. 物理阶层阻力",
        def: "出生在这个下水道底部，其存在本身就是对法则矩阵原罪的亵渎。系统针对该个体展开的排异重量甚至碾碎了物理法则原点，角色每进行一次微末呼吸，都在承受着整个宇宙构架无情坍缩倾轧的可怖重量。",
        defEn: "Born at the bottom of this sewer, existence itself is a blasphemy to the Law Matrix's original sin. The rejection weight the system directs at this individual crushes the origin of physics; every microscopic breath they take endures the horrific weight of the whole universe crunching down.",
        core: "无底结构黑洞的核心引力源。所有的个体意志、所有不肯屈服的反抗声浪一旦投入这里便被压强极速内爆为粉末，主体早已不能被称作人柱，而是维系超压世界的“最低贱润滑耗材”。",
        coreEn: "The core gravity source of a bottomless structural black hole. All individual wills, all unyielding rebellious echoes—once cast here—are imploded into dust by extreme pressure; the subject is no longer even a human pillar, but the 'basest lubricating consumable' sustaining the hyper-pressure world.",
        patch: {
            mechanics: "只要暴露并呼吸这片最低等贫民深渊区的空气，就会被不停歇地按秒扣减剧毒级的生存血条。在极端的赤贫匮乏状态下，还要被迫进行那些如同西西弗斯推石般榨干最后一点精神值的纯高强度体力劳役游戏来苟延残喘。",
            mechanicsEn: "Merely breathing the air in this lowest slum abyss invokes non-stop per-second deductions from a highly toxic survival health bar. Amid extreme absolute scarcity, one is still forced into Sisyphus-like, high-intensity manual labor mini-games draining the last drops of sanity just to barely persist.",
            aesthetic: "仿佛置身于地心高温高压层与重工业废料焚化炉揉捏在一起的生化极恶炼狱中。所有的景深画面仿佛都被极高的重力狠狠往下压迫倾倒。满眼的暗炽红与生锈败血斑块占据了绝对的高级视觉通道。",
            aestheticEn: "As if placed in an ultra-evil biochemical purgatory where the earth's extreme pressure core kneads with heavy industrial waste incinerators. All depth-of-field frames appear ruthlessly driven down by infinite gravity. A skyful of dark glowing reds and rusty septic patches seize absolute primary visual channels.",
            runtime: "IF (存在本身即为对法则矩阵原罪的亵渎，角色每一次微末呼吸都在承受整个宇宙构架无情坭缩倾轧的可怖重量) THEN (死寂地于主控端循环挂载实例化出的Environmental_Damage_Tick持续扣血执行域帧，其惩罚倍率永远与主角当前资源贫困指数Poverty Index变量呈恶毒的倒数指数级几何放大对标)。",
            runtimeEn: "IF (Existence_Itself_Blasphemes_Law_Matrix_Every_Breath_Endures_Entire_Universe_Crushing_Weight) THEN (Deadly iterate and instantiate Environmental_Damage_Tick drain execution frame in master loop, punitive multipliers permanently scale geometrically inverse to protagonist Current Poverty Index variable)."
        }
    }
];
