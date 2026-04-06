import { LibraryItemDef } from '../../../types';

export const SYNTHESIZER_M2X: LibraryItemDef[] = [
    {
        id: "m2x_level_1",
        name: "L1.象征界噪点",
        nameEn: "Symbolic Noise",
        group: "M2X. 世界崩坏程度",
        def: "表层现实出现极其微弱的拓扑扰动。仿佛是一件天衣无缝的毛衣上露出的一根不寻常线头：莫名的既视感（Déjà vu）、电子设备的极度微弱闪烁。",
        defEn: "Extremely subtle topological perturbations in surface reality. Like an unusual loose thread on a seamless sweater: inexplicable déjà vu, exceedingly faint flickering of electronics.",
        core: "实在界边缘的微弱震动。创伤并未撕裂现实矩阵，但制造了某种“非本真感”（Inauthenticity）。大他者的凝视（The Gaze）刚刚睁开一条细缝。",
        coreEn: "Faint tremors at the edge of the Real. Trauma hasn't torn the reality matrix, but produces a certain 'inauthenticity'. The Big Other's gaze has just barely opened a slit.",
        patch: {
            mechanics: "UI界面偶尔出现极其短暂的亚像素错位，或是小地图在一瞬间闪烁出乱码的方位指引。",
            mechanicsEn: "UI occasionally exhibits extremely brief sub-pixel dislocations, or the minimap blinks garbled directional prompts for a split second.",
            aesthetic: "极短暂的色差剥离（Chromatic Aberration）；当主角看向特定死角时，出现不易察觉的高频音频尖刺。",
            aestheticEn: "Ultra-brief chromatic aberration; subtle high-frequency audio spikes when the protagonist looks at specific blind corners.",
            runtime: "IF (表层现实出现极其微弱的拓扑扰动，莫名既视感或电子设备极度微弱闪烁) THEN (每隔30秒向摄像机的后处理噪点种子Noise Seed中注入一段脱离主算法的微弱随机扰动矢量)。",
            runtimeEn: "IF (Surface_Reality_Exhibits_Extremely_Subtle_Topological_Perturbations_Deja_Vu_Or_Faint_Electronic_Flicker) THEN (Inject a faint random perturbation vector detached from main algorithm into camera post-processing Noise Seed every 30 seconds)."
        }
    },
    {
        id: "m2x_level_2",
        name: "L2.局部诡异",
        nameEn: "Local Weirdness",
        group: "M2X. 世界崩坏程度",
        def: "物理法则与社会逻辑发生局部偏转。毫无意义的KPI指标错位、镜子里的影子移动速度与本体出现了微小的物理学时间差。",
        defEn: "Local deviations of physical laws and social logic. Nonsensical KPI metric misplacements; the shadow in the mirror lags the body by a minuscule physical time delta.",
        core: "象征界的裂痕开始溢出。弗洛伊德式的“诡谲（unheimlich）”蔓延，常识的符码（A）无法再覆盖那些角落里滋生的非逻辑赘生物。",
        coreEn: "Cracks in the Symbolic begin to overflow. Freudian 'uncanny' (unheimlich) spreads; codes of common sense can no longer mask the illogical excrescences breeding in corners.",
        patch: {
            mechanics: "环境互动道具投射出指向错误光源的阴影。门在第一次打开时通往非欧几里得的死循环空间，必须重开才能修正。",
            mechanicsEn: "Environmental interactive props cast shadows pointing to the wrong light source. Doors open into non-Euclidean dead loops on the first try, requiring a re-open to fix.",
            aesthetic: "全局光照微妙地背离了真实物理渲染（PBR），向一种令人极其不安、病态的黄绿色调偏移。",
            aestheticEn: "Global Illumination subtly deviates from true physical rendering (PBR), shifting toward a highly unsettling, sickly yellow-green tint.",
            runtime: "IF (物理法则与社会逻辑发生局部偏转，镜子里的影子移动与本体出现时间差) THEN (刻意覆写特定实体的Transform指针，使其短暂绕过游戏引擎原生的物理Tick同步机制)。",
            runtimeEn: "IF (Local_Deviations_Of_Physical_Laws_Mirror_Shadow_Lags_Body_By_Time_Delta) THEN (Deliberately override specific entities Transform pointers, making them briefly bypass game engine native physics Tick synchronization)."
        }
    },
    {
        id: "m2x_level_3",
        name: "L3.叙事逻辑坍塌",
        nameEn: "Narrative Logic Collapse",
        group: "M2X. 世界崩坏程度",
        def: "现实的因果律发生严重的坏血病。陌生的路人突然精准说出主角最隐秘的童年创伤；物理距离发生拓扑形变，走不出的走廊化为了莫比乌斯环。",
        defEn: "Severe scurvy of the causality of reality. Strangers suddenly and accurately voice the protagonist's most hidden childhood trauma; physical distances undergo topological distortion, endless corridors become Möbius strips.",
        core: "实在界的大规模强行干预。私密深处的精神产出（M3）被暴虐地客观化为外部物理现实。语言的滑移彻底失控。",
        coreEn: "Massive forced intervention of the Real. Intimate, deep mental outputs are tyrannically objectified into external physical reality. Slippage of language spirals out of control.",
        patch: {
            mechanics: "NPC们开始念出本该属于其他角色的台词库；任务引导指向在寻路网格（NavMesh）绝对之外的虚无坐标。",
            mechanicsEn: "NPCs start reciting voicelines meant for entirely different characters; quest markers point to void coordinates absolutely outside the NavMesh.",
            aesthetic: "对话语音与人物唇声发生令人作呕的明显错轨。天空盒（Skybox）边缘出现微型裂口，直接裸露出报错底图。",
            aestheticEn: "Nauseatingly obvious desync between dialogue audio and lip-sync. Micro-tears appear at the edge of the Skybox, directly exposing error base textures.",
            runtime: "IF (NPC开始念出其他角色的台词库，任务引导指向寻路网格NavMesh之外的虚无坐标) THEN (强制引发事件调度器EventDispatcher的串线短路，导致玩家的输入随机触发完全不相关的回调事件列)。",
            runtimeEn: "IF (NPCs_Recite_Voicelines_Of_Other_Characters_Quest_Markers_Point_Outside_NavMesh) THEN (Force cross-wiring short circuit in EventDispatcher, causing player inputs to randomly trigger completely unrelated callback event queues)."
        }
    },
    {
        id: "m2x_level_4",
        name: "L4.实在界入侵",
        nameEn: "Intrusion of the Real",
        group: "M2X. 世界崩坏程度",
        def: "感知的地平线上浮现出拒绝被定义的不可名状质块。城市物理结构如廉价的塑料薄膜般被撕除剥落，裸露出其背后毫无意义的黑暗深渊。",
        defEn: "Unnamable masses refusing definition emerge on the perceptual horizon. The physical structure of the city perishes and peels away like cheap plastic film, revealing the meaningless dark abyss behind it.",
        core: "拉康意义上符号系统的彻底瘫痪。大他者的掩护（The Screen）被碾碎，主体直接面临无法被任何社会语言捕捉的绝对恐怖（The Thing）。",
        coreEn: "Total paralysis of the Symbolic system in the Lacanian sense. The Big Other's Screen is crushed; the subject directly confronts absolute terror (The Thing) uncatchable by any social language.",
        patch: {
            mechanics: "关卡的整体几何学开始解体或消失。敌对实体失去碰撞体积约束，疯狂且不可控地在墙壁间穿模抽搐。",
            mechanicsEn: "The entire geometry of the level begins to disintegrate or vanish. Hostile entities lose collision bounding constraints, frantically and uncontrollably clipping/spasming through walls.",
            aesthetic: "巨大且毫无纹理的原始几何体占据天空。音轨被拉入了如同在深水下窒息般极度压抑的低频混响沉溺感之中。",
            aestheticEn: "Giant, textureless primitive geometries dominate the sky. The audio track is dragged into a deeply oppressive, low-frequency reverberation resembling suffocation underwater.",
            runtime: "IF (关卡整体几何学开始解体或消失，敌对实体失去碰撞体积约束疯狂穿模) THEN (故意丢弃渲染管线中对特定静态网格对象Static Mesh的Z-Buffer深度检测，造成视觉上惊悚的穿模撕裂)。",
            runtimeEn: "IF (Level_Geometry_Begins_Disintegrating_Hostile_Entities_Lose_Collision_Bounds_Clipping_Through_Walls) THEN (Intentionally drop Z-Buffer depth checks for specific Static Mesh objects in render pipeline, causing horrific visual clipping tears)."
        }
    },
    {
        id: "m2x_level_5",
        name: "L5.奇点抵达",
        nameEn: "The Singularity",
        group: "M2X. 世界崩坏程度",
        def: "天空如脆弱的液晶屏幕般彻底炸裂分解；造物主（大他者）的空洞本质被强行暴露在光天化日之下；主体遭遇完全超验的那个“物”。",
        defEn: "The sky explodes and decomposes like a fragile LCD screen; the void essence of the creator (Big Other) is forcibly exposed in broad daylight; the subject encounters the completely transcendental 'Thing'.",
        core: "终极维度的真相大白。构筑意义的基座被实在界的引力彻底碾作原子态。宇宙的运行仅仅剩下疯狂的、没有意义的数据暴走。",
        coreEn: "The ultimate dimension's truth is fully revealed. The pedestal constructing meaning is thoroughly pulverized to atomic state by the gravity of the Real. The universe's operation remains merely a crazed, meaningless data rampage.",
        patch: {
            mechanics: "所有游玩回路被强制清空注销。移动控制键被全部打乱，UI面板灰飞烟灭，世界物理引擎滑入纯粹的数据混沌沼泽。",
            mechanicsEn: "All gameplay loops forcibly cleared and deregistered. Movement inputs are scrambled, UI panels turn to ash, the world physics engine slides into a swamp of pure data chaos.",
            aesthetic: "屏幕空间呈现出足以引发光敏性癫痫的极端过载。整个世界的结构跌入一种递归的、无限自噬的视觉黑洞。",
            aestheticEn: "Screen space presents extreme overload sufficient to cause photosensitive seizures. The entire world structure falls into a recursive, infinitely autophagic visual black hole.",
            runtime: "IF (所有游玩回路被强制清空注销，移动控制键被全部打乱，UI面板灰飞烟灭) THEN (将应用程序的核心系统时钟积分DeltaTime灌入随机负数或无理无穷大，导致底层物理引擎呈现数学定律上的核爆)。",
            runtimeEn: "IF (All_Gameplay_Loops_Forcibly_Cleared_Movement_Inputs_Scrambled_UI_Panels_Turn_To_Ash) THEN (Feed application core system clock integral DeltaTime with random negative numbers or irrational infinities, ensuring baseline physics engine exhibits a mathematical nuclear explosion)."
        }
    }
];
