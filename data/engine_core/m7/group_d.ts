import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_D: LibraryItemDef[] = [
    {
        id: "res_madness",
        name: "精神病态性断裂", nameEn: "Psychotic Rupture",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "面对绝对不可理喻的真相，主体的符号界防火墙被彻底烧穿。理智并未消失，而是重组为一种外界无法解析的疯癫。",
        defEn: "Facing an absolutely incomprehensible truth, the subject's Symbolic firewall is completely burned through. Sanity doesn't vanish; it reorganizes into a madness unparsable by the outside.",
        core: "拉康意义上的精神病（Psychosis）。拒绝承认父性隐喻（Name-of-the-Father）的结果。主体不再受语言规则束缚，坠入妄想性语言的深渊。 | Outcome: 语法的暴力失效。",
        coreEn: "Psychosis in the Lacanian sense. The consequence of foreclosing the Name-of-the-Father. The subject is no longer bound by linguistic rules, plunging into the abyss of delusional speech. | Outcome: Violent invalidation of grammar.",
        patch: {
            mechanics: "剥夺所有的任务指引，UI界面上爬满乱码或无意义的重叠文字。主角开始对墙壁开枪或试图拥抱电锯。",
            mechanicsEn: "Stripping all quest objectives; the UI crawls with gibberish or overlapping meaningless text. The protagonist begins shooting at walls or trying to hug a chainsaw.",
            aesthetic: "视觉滤镜的高频抽搐。刺耳的高频噪音混杂着主角听不懂的絮语。世界在主角眼中变得极其滑稽、扭曲却充满致命的逻辑感。",
            aestheticEn: "High-frequency spasming of visual filters. Piercing high-pitch noise mixed with babble the protagonist doesn't understand. The world appears extremely comical, distorted, yet fatally logical to the subject.",
            runtime: "将主体的【认知渲染管线】强制从 `World Space` 断开，转而载入一个充满随机变量且 `z-index` 异常的非法矩阵。",
            runtimeEn: "Forcibly disconnecting the subject's [Cognitive Rendering Pipeline] from `World Space`, loading instead an illegal matrix riddled with random variables and abnormal `z-index`es."
        }
    },
    {
        id: "res_world_destroy",
        name: "实在界的狂暴入侵", nameEn: "The Invasive Real",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "不仅是主体疯了，整个世界的物理结构和逻辑基底也跟着发疯。天穹裂开，不属于这个维度的恐怖真实如同洪水般倒灌。",
        defEn: "Not only does the subject go mad, the entire world's physical structure and logical base go mad alongside. The sky tears open, and a terrifying Real not belonging to this dimension floods in.",
        core: "克苏鲁式的终局。原本用胶带勉强粘贴的现实幕布被彻底撕裂，“物（Das Ding）”的本来面目裸露在地平线上。 | Outcome: 现实原则的完全坍塌。",
        coreEn: "Lovecraftian endgame. The curtain of reality, barely held together by duct tape, is thoroughly ripped apart; the true face of 'Das Thing' lays bare on the horizon. | Outcome: Total collapse of the reality principle.",
        patch: {
            mechanics: "所有的物理定律停止运作。重力反转，海水倒流向天空，地图边界崩塌，原本的敌人和朋友在这碾碎一切的灾变中化为灰烬。",
            mechanicsEn: "All laws of physics cease functioning. Gravity inverts, seawater flows skyward, map borders collapse; former enemies and friends turn to ash in this all-crushing cataclysm.",
            aesthetic: "全屏幕的毁灭奇观，但不是好莱坞式的爆炸，而是带有肉质寄生和几何扭曲的异化崩解。红黑相间的低音轰鸣，犹如极光坠落。",
            aestheticEn: "Full-screen destruction spectacle, but not Hollywood explosions—rather an alienating disintegration with fleshy parasitism and geometric distortion. Red/black bass roaring, like dropping auroras.",
            runtime: "引擎主进程 `Crash` 之前的蓄意内存泄漏。强制载入所有超出 VRAM 限界的高模素材，令显卡渲染溢出直至黑屏。",
            runtimeEn: "A deliberate memory leak prior to the engine master process `Crash`. Forcibly loading all high-poly assets exceeding VRAM limits, rendering overflow until black screen."
        }
    },
    {
        id: "res_mutual_destruction",
        name: "正负极的绝对湮灭", nameEn: "Symmetrical Annihilation",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "主体与不可战胜的反派/命运抱在一起，将所有的能量注入一次绝对碰撞。不是为了胜利，而是为了确保‘同归于尽’的必然发生。",
        defEn: "The subject embraces the invincible villain/destiny, injecting all energy into an absolute collision. Not to win, but to ensuring 'mutual destruction' inevitably occurs.",
        core: "激进的负和游戏（Negative-sum game）。既然我无法通过你进入象征界，那我就拉着你一起坠回实在界的虚无。 | Outcome: 宿主的自杀式引爆。",
        coreEn: "Radical negative-sum game. Since I cannot enter the Symbolic through you, I will drag you with me plunging back into the void of the Real. | Outcome: Suicide detonation of the host.",
        patch: {
            mechanics: "在判定生命归零前，主角发动了禁忌指令，用肉体锁死反派的脱逃空间机制，随后引发核爆级别的全屏伤害清除。",
            mechanicsEn: "Before HP is verified as zero, the protagonist triggers a forbidden command, locking the villain's escape mechanism with their own flesh, followed by a nuke-level full-screen damage clear.",
            aesthetic: "极致的高亮度致盲闪光，随后是绝对静音，没有音乐，连背景的火光都没有声音。画面呈现X光般的透视骨骼燃尽效果。",
            aestheticEn: "Ultimate blinding high-brightness flash, followed by absolute silence—no music, not even the sound of background flames. The screen shows an X-ray-like skeletal burnout effect.",
            runtime: "强制捕获两个最高级 `Entity` 的指针，调用未授权的 `FreeMemory()`，让两段内存同时触发致命访问保护异常（Access Violation）。",
            runtimeEn: "Forcibly locking pointers of two top-tier `Entity`s, calling unauthorized `FreeMemory()`, causing both memory blocks to simultaneously trigger fatal Access Violations."
        }
    },
    {
        id: "res_chaos",
        name: "象征界的结构坍塌", nameEn: "Collapse of the Symbolic",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "系统的意义网络被解开。法律、货币、道德、逻辑在瞬间全部失效，世界退行回所有人对所有人的野兽战争状态。",
        defEn: "The system's network of meaning is unraveled. Law, currency, morality, logic instantly become completely invalid; the world regresses into the war of all against all.",
        core: "霍布斯丛林的重现。没有了“大他者”的维持，人与人之间的距离测量仪失效，剩下的只有赤裸裸的血肉倾轧。 | Outcome: 结构主义的末日。",
        coreEn: "Resurgence of the Hobbesian jungle. Without the Big Other's maintenance, the distance-measuring gauge between humans fails, leaving only naked fleshly crushing. | Outcome: Doomsday of structuralism.",
        patch: {
            mechanics: "所有的势力声望、金钱单位和交易系统彻底变成无效烂代码。安全区（Safe Zone）判定取消，原本中立友善的NPC开始互相撕咬。",
            mechanicsEn: "All faction reputations, currency units, and trade systems become totally invalid junk code. Safe Zone status canceled; originally neutral/friendly NPCs start tearing into each other.",
            aesthetic: "极度混乱但没有任何“主角光环”保护的大远景。惨叫、火焰与毫无理由的屠杀交织，犹如地狱绘图般令人作呕且毫无意义的拥挤。",
            aestheticEn: "Extremely chaotic wide shot with zero 'plot armor' protection. Screams, fire, and reasonless slaughter intertwine, like an infernal painting—nauseating and meaninglessly crowded.",
            runtime: "在状态机中执行 `DeleteAllRules()`，擦除所有【敌我识别（IFF）】，将所有NPC的寻路逻辑切换为就近仇恨计算。",
            runtimeEn: "Executing `DeleteAllRules()` in the state machine, wiping all [Identify Friend or Foe (IFF)], switching all NPC pathfinding logic to nearest-neighbor aggro calculus."
        }
    },
    {
        id: "res_paranoia",
        name: "极权式偏执发作", nameEn: "Totalitarian Paranoia",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "主体陷入了系统性的极度怀疑，认为大他者（或恶魔）藏身于一切细节之中。所有巧合都被编织成针对他的致命阴谋网。",
        defEn: "The subject falls into systemic extreme suspicion, believing the Big Other (or demon) hides in every detail. All coincidences are woven into a fatal conspiracy net targeting them.",
        core: "妄想狂的至高境界：宇宙中没有任何偶然。这是一种过度防御，主体宁愿被一个万能的魔鬼迫害，也不愿承认世界的随机与无序。 | Outcome: 意义的反向过载。",
        coreEn: "The highest realm of the paranoiac: there are no accidents in the universe. An over-defense: the subject prefers persecution by an omnipotent demon over admitting the world's random disorder. | Outcome: Reverse overload of meaning.",
        patch: {
            mechanics: "UI疯狂高亮各种极其普通的物件（一个水杯、一条裂缝），并弹出一连串恐怖且荒谬的推论。任何原本帮助主角的角色都被打上极端的红名仇恨标签。",
            mechanicsEn: "The UI frantically highlights incredibly ordinary objects (a cup, a crack) and pops up a string of terrifying, absurd deductions. Any character previously helping the protagonist is tagged with extreme red-name aggro.",
            aesthetic: "眼球布满血丝的主观视角特写（FPS式颤抖）。快速剪辑。所有声音都变得像是带有恶意的窃窃私语。光线呈幽闭的惨绿色。",
            aestheticEn: "Bloodshot subjective POV close-ups (FPS-style jitter). Rapid editing. All sounds resemble malicious whispers. Lighting takes on a claustrophobic sickening green.",
            runtime: "过度激活【寻找线索（Clue Finding）】的算法，将随机噪点全部强转为【致命威胁（Fatal Threat）】矢量进行强制计算。",
            runtimeEn: "Over-activating the [Clue Finding] algorithm, forcefully converting all random noise points into [Fatal Threat] vectors for mandatory calculation."
        }
    },
    {
        id: "res_suicide",
        name: "诉诸行动的自毁", nameEn: "Passage à l'acte",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "面对无法穿透的困境，主体以极其突然、没有任何象征意义过渡的直接行动（拔出手枪塞进嘴里）结束了生命。",
        defEn: "Facing an impenetrable dilemma, the subject ends their life with an extremely sudden, direct action devoid of any symbolic transition (drawing a gun and shoving it in their mouth).",
        core: "拉康的“诉诸行动（Passage à l'acte）”。主体不是在演一出悲剧，而是在面临符号系统死锁时，生硬地将自己当作一个物理垃圾扔出了窗外。 | Outcome: 主体的物理删除。",
        coreEn: "Lacan's 'Passage à l'acte'. The subject is not acting a tragedy, but facing a Symbolic deadlock, bluntly throwing themselves out the window like physical trash. | Outcome: Physical deletion of the subject.",
        patch: {
            mechanics: "毫无预兆。在对话说到一半，或刚刚打完一个普通小兵的过场中，主角突然将凶器对准自己并未留反应余地直接点击了处决。",
            mechanicsEn: "Zero warning. Mid-dialogue, or in a cutscene just after defeating a normal grunt, the protagonist suddenly points the weapon at themselves and, leaving no room to react, hits execute.",
            aesthetic: "没有慢动作，没有悲壮配乐，正如现实中车祸般短促和暴烈。尸体沉闷落地的声音，镜头立刻变成了冰冷的旁观者机位。",
            aestheticEn: "No slow motion, no tragic score, just as brief and violent as a real-life car crash. The dull thud of the body landing; the camera immediately switches to a cold bystander angle.",
            runtime: "抛出未捕获的 `InterruptException`。不是走正常的血量为0判定，而是直接调用底层的 `TerminateThread` 掐断运行环境。",
            runtimeEn: "Throwing an uncaught `InterruptException`. Instead of normal HP zero evaluations, directly calling the base `TerminateThread` to slice the runtime environment."
        }
    },
    {
        id: "res_kill_all",
        name: "死驱的无差别脱缰", nameEn: "Unbound Thanatos",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "道德的超级崩塌。代表死亡的【死本能/Thanatos】彻底冲断了【爱本能/Eros】的束缚。主体成为了一个纯粹的杀戮机。",
        defEn: "Super-collapse of morality. The death-drive (Thanatos) thoroughly breaks the bindings of the life-drive (Eros). The subject becomes a pure killing machine.",
        core: "不再区分正义或邪恶，大他者的律法全被焚为了灰烬。只剩下纯粹发泄性的破坏欲，将视线内移动的一切实体拆解为红色的零件。 | Outcome: 血肉的机械粉碎。",
        coreEn: "No longer distinguishing justice or evil; the Big Other's laws are all burnt to ash. Leaving only pure venting destructive urge, dismantling all moving entities in sight into red components. | Outcome: Mechanical pulverization of flesh.",
        patch: {
            mechanics: "武器过载发热不退，所有NPC无论派系一律呈现并强行触发其最痛苦的受击硬直与处决特效。没有对话，只有按键触发的砍杀动画。",
            mechanicsEn: "Weapons overheat without cooling down. All NPCs, regardless of faction, are forced into triggering their most painful hit-stun and execution VFX. No dialogue, only button-triggered hacking animations.",
            aesthetic: "极度血腥的喷溅与镜头上擦不干的血污。重金属狂躁配乐覆盖一切。主角的笑声由于混音被扭曲得像电锯般撕裂神经。",
            aestheticEn: "Extremely bloody splatters and un-wipeable blood smears on the lens. Manic heavy metal drowns out everything. The protagonist's laughter is mixed to sound like a chainsaw tearing at nerves.",
            runtime: "将角色的【火力倍率（Damage Multiplier）】锁定最大值，并挂载一个强制遍历全图实体的 `DestroyObjects` 无限循环脚本。",
            runtimeEn: "Locking the character's [Damage Multiplier] to max value, and attaching an infinite loop script to `DestroyObjects` via a forced full-map entity traversal."
        }
    },
    {
        id: "res_monster_mutated",
        name: "向原质【Das Ding】的堕落", nameEn: "Monstrous Degeneration",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "不仅是意志的同化，主体的物理身体也长出了不属于这个维度的增生块或触手，彻底沦为了没有自我意识的深渊畸变体。",
        defEn: "Not just an assimilation of will; the subject's physical body sprouts hyperplasias or tentacles not belonging to this dimension, degenerating thoroughly into an abyssal mutant without self-awareness.",
        core: "人类主体性在实在界面前的可悲溃烂。因为无法处理那些被禁忌的庞大驱力，这股力比多直接将血肉撑破、扭曲成无以名状的肉块。 | Outcome: 几何拓扑的畸变。",
        coreEn: "The pathetic festering of human subjectivity before the Real. Unable to process massive taboo drives, the libido directly ruptures flesh, twisting it into unspeakable chunks of meat. | Outcome: Mutation of geometric topology.",
        patch: {
            mechanics: "在过度汲取深渊能量（如服用过多禁药、接触不可名状文物）后，主角在屏幕中央剧烈抽搐，衣服破裂，模型被强替换为一个面目全非的Boss级怪物。",
            mechanicsEn: "After over-absorbing abyssal energy (e.g., taking too many forbidden drugs, contacting unspeakable artifacts), the protagonist violently spasms center-screen, clothes ripping, their model forcibly swapped for an unrecognizable Boss-level monster.",
            aesthetic: "骨骼变形开裂的嘎吱恶心音效。角色最后的一声人声从痛苦转为了沉闷、粘稠的巨大非人咆哮。冷血与恶心交织，大片浓稠粘液。",
            aestheticEn: "Sickening crunching sound effects of bones deforming and cracking. The character's last human vocal inflection twists from agony into a dull, viscous, massive non-human roar. Cold-blooded horror mixed with thick slime.",
            runtime: "调用 `MeshDeformation` 函数，向角色的骨骼（BindPose）中注入过量的随机矩阵变换，引发剧烈的坐标穿模爆炸。",
            runtimeEn: "Calling the `MeshDeformation` function, injecting excessive random matrix transforms into the character's bones (BindPose), inciting massive coordinate clipping explosions."
        }
    },
    {
        id: "res_void_consume",
        name: "被实在界吞没", nameEn: "Swallowed by the Real",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "主体坠入了没有上下维度、没有边界且吞噬光线与声波的纯粹空洞。那是大他者彻底退散后留下的绝对寂静。",
        defEn: "The subject plunges into a pure void with no up or down dimension, no boundary, swallowing light and sound waves. It is the absolute silence left behind after the Big Other completely disperses.",
        core: "《深渊（The Abyss）》。面对着实在界那个不具备面孔的巨大空洞，主体的意识被无限稀释，被那个巨大的“物”完全生吞。 | Outcome: 存在的强行注销。",
        coreEn: "The Abyss. Facing the faceless massive void of the Real, the subject's consciousness is infinitely diluted, swallowed entirely alive by that giant 'Thing'. | Outcome: Forcible deregistration of existence.",
        patch: {
            mechanics: "主角被吸入黑洞或跌下无止尽的深渊。没有尽头没有着陆点。UI面板上的氧气或理智在一分一秒漏空。",
            mechanicsEn: "The protagonist is sucked into a black hole or falls down an endless abyss. No bottom, no landing point. Oxygen or Sanity on the UI panel drains second by second.",
            aesthetic: "全宇宙只剩下极致的黑色与极其缓慢微小的主角剪影。连呼吸声都被压缩成了某种耳鸣频率。一种漫长到仿佛永恒窒息的极度恐慌。",
            aestheticEn: "The entire universe is reduced to supreme black and an extremely slow, tiny silhouette of the protagonist. Even breath is compressed to a certain tinnitus frequency. A profound panic of an endlessly long, eternal suffocation.",
            runtime: "由于摄像机进入了没有任何反射射线的 `Null Space`，渲染管线停止工作。玩家除了看进度条见底别无他法。",
            runtimeEn: "Because the camera enters a `Null Space` devoid of bounce rays, the render pipeline stops. The player has no option but watch the progress bar bottom out."
        }
    },
    {
        id: "res_glitch",
        name: "本体论级代码故障", nameEn: "Ontological Glitch",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "世界本身的渲染器出现了抽搐。主体意识到连“崩溃”这件事本身都是通过底层的劣质代码运作的，陷入了无法被治愈的元恐惧。",
        defEn: "The renderer of the world itself spasms. The subject realizes that even the act of 'collapse' operates via shoddy base code, spiraling into an incurable meta-terror.",
        core: "《心跳文学部》或《赛博朋克2077》的Relic故障化验。恐怖的不是怪物，而是你脚下的地板像素突然丢失碰撞体积，将你拽入虚空底图。 | Outcome: 维度的穿模。",
        coreEn: "Doki Doki Literature Club or Cyberpunk 2077's Relic glitch exam. The terror isn't the monster, but the floor pixels beneath your feet suddenly losing collision boxes, dragging you into the void basemap. | Outcome: Clipping of dimensions.",
        patch: {
            mechanics: "人物在走路时突然卡在某两帧之间反复倒带，或身体的一部分无限拉长直至插入天空。对话框显示的是内存十六进制地址。",
            mechanicsEn: "Character suddenly stutters backward and forward between two frames while walking, or a body part stretches infinitely into the sky. Dialog boxes display hex memory addresses.",
            aesthetic: "电子干扰的刺耳蜂鸣（Beep）。高反差的绿紫像素块割裂整个视野，人物脸部模型在瞬间错位，五官犹如毕加索立体派般被打乱。",
            aestheticEn: "Ear-piercing electronic interference beep. High-contrast green/purple pixel blocks shred the FOV; character face models dislocate instantly, features scrambled like Picasso's cubism.",
            runtime: "强行写入大量内存错误（Dirty Words）干扰显存分配器，并在渲染层面上叠加具有撕裂算法的 Glitch Shader。",
            runtimeEn: "Forcibly writing vast memory errors (Dirty Words) to interfere with the VRAM allocator, superimposing a Glitch Shader armed with tearing algorithms over the render layer."
        }
    },
    {
        id: "res_schizophrenia",
        name: "自我的物理级碎裂", nameEn: "Fragmentation of the Ego",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "镜像阶段遭遇炸毁。那曾经被拼凑起来的虚荣“自我（Ego）”由于承受不住真相的撞击，碎裂成了无数个互不统属、互相争吵的碎片人格。",
        defEn: "The mirror stage is detonated. That once cobbled-together vain 'Ego', unable to withstand the impact of truth, shatters into countless unaffiliated, bickering fragmented personalities.",
        core: "主体结构的玻璃渣化。再也没有一个发号施令的“我”，有的只是几十个抢夺身体麦克风的驱力碎块在进行无意义的狂欢。 | Outcome: 内在中心点的核爆。",
        coreEn: "Glass-ization of subjective structure. There is no longer an 'I' giving commands, only dozens of drive fragments fighting over the body's microphone engaging in meaningless revelry. | Outcome: Nuke of the inner focal point.",
        patch: {
            mechanics: "主角丧失了控制权。在极短时间内，按键操作被不断篡改反馈。按左可能是攻击，按跳可能是下蹲，并在各种声线间来回切换嘶吼。",
            mechanicsEn: "Protagonist loses control. In a short span, input feedback is constantly tampered with. Pressing left might attack, pressing jump might crouch, whilst screaming back and forth between different voice types.",
            aesthetic: "多重幻影或碎屏式的分割镜头。耳边环绕着极度喧闹的争吵声、婴儿哭声与老人的咒骂。主角抓着自己的头在地上打滚，犹如被群鬼附身。",
            aestheticEn: "Multiple phantoms or shattered-screen split-screen shots. Surround ears with extremely raucous arguments, baby cries and old man's curses. The protagonist grasps his head rolling on the floor like possessed by a horde of ghosts.",
            runtime: "重塑角色的【输入映射表（Input Mapping）网格】，并发量挂载数个互相矛盾冲突的 AI 行动逻辑来劫持角色躯体。",
            runtimeEn: "Reforming the character's [Input Mapping Grid], concurrently attaching multiple contradictory AI action logics to hijack the character's body."
        }
    },
    {
        id: "res_panic",
        name: "无对象之绝对焦虑", nameEn: "Absolute Anxiety",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "恐惧是有对象的，而焦虑没有。主体在极度绝望的境地中，爆发出一场找不到发泄口、极尽疯狂但毫无重点的恐慌攻击。",
        defEn: "Fear has an object; anxiety does not. In an acutely desperate situation, the subject explodes into a frantic, utterly unfocused panic attack with no exhaust vent.",
        core: "当对象a彻底逼近时所产生的窒息。主体被实在界的阴影无距离贴脸碾压，如同突然发现气管内壁长出了虫子。 | Outcome: 理智值的极速归零。",
        coreEn: "The suffocation generated when object a approaches completely. The subject is point-blank crushed by the shadow of the Real, like suddenly finding worms growing inside the trachea windpipe. | Outcome: Supersonic zeroing of sanity.",
        patch: {
            mechanics: "人物不受控制地大口喘气，视线范围（FOV）极度收缩为隧道式视野。心跳声掩盖了除自己惊吼外的一切声音，最终因应激反应直接休克。",
            mechanicsEn: "Character uncontrollably hyperventilates, Field of View (FOV) contracts extremely into tunnel vision. Heartbeat masks all sounds except their own terrified shrieks, eventually going directly into shock from stress reaction.",
            aesthetic: "鱼眼镜头加上剧烈的摄像机震动。冷汗般的蓝绿底色，画面周边严重发黑发抖。压抑感大到需要玩家自身摘下耳机的程度。",
            aestheticEn: "Fisheye lens plus violent camera shake. Cold-sweat blue-green base, severe vignetting and shivering around the edges. Oppressiveness so massive it requires the player to take off their headphones.",
            runtime: "引爆【CameraShake】事件池至过载，并在后处理单元写入强行挤压【可视裁剪面】的恐怖算法参数。",
            runtimeEn: "Detonating the [CameraShake] event pool into overload, writing terrifying algorithm parameters into the post-processing unit that forcibly crushes the [Visible Clipping Plane]."
        }
    },
    {
        id: "res_catatonic",
        name: "驱力的木僵坏死", nameEn: "Catatonic Mortification",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "在承受了由于真相造成的极具破坏性的精神电击后，主体的意识并没有飞散，而是硬生生地锁死在肉体极重度的瘫痪、肌肉僵硬中。",
        defEn: "After bearing a highly destructive mental shock from the truth, the subject's consciousness doesn't scatter; instead, it rigidly deadlocks into extremely profound physical paralysis and muscle rigor.",
        core: "被美杜莎之眼石化。当遭遇实在界的核爆后，驱力系统拉闸熔断，主体变成了一具依然在呼吸但也只有呼吸的兵马俑。 | Outcome: 肉体与意向的冰封。",
        coreEn: "Petrification by Medusa's Gaze. After the nuclear explosion of the Real, the drive system's breaker trips and melts; the subject turns into a terracotta warrior that still breathes—and only breathes. | Outcome: Deep freeze of flesh and intention.",
        patch: {
            mechanics: "原本在狂怒战斗的主角在看到某个录像后，剑停在半空，身躯不受控制地逐渐固定，之后无论怎么挨打也不会再发出声音或者移动一寸。",
            mechanicsEn: "The protagonist fighting furiously halts their sword mid-air upon seeing a certain tape; body uncontrollably fixating, thereafter no matter how much they are hit, they make no sound nor move an inch.",
            aesthetic: "惊恐大张的双眼定住了。镜头极其安静地绕着他做 360 度的特写平移，展现大理石化般紧绷扭曲的肌肉和被汗水浸透停止流动的画面。",
            aestheticEn: "Terrified wide-open eyes frozen. Camera exceedingly quietly does a 360-degree close-up pan around them, showing tension-warped muscles like marble and the sweat-soaked static frame.",
            runtime: "将实体的所有 `Animation Nodes` 状态机的 `PlayRate` 直接设为 0。不处理死亡，只是把存在的时间流锁死不进帧。",
            runtimeEn: "Directly setting the `PlayRate` of all entity `Animation Nodes` state machines to 0. Not processing death, just deadlocking the temporal flow of existence, advancing no frames."
        }
    },
    {
        id: "res_self_cannibalize",
        name: "衔尾蛇式的自我吞噬", nameEn: "Autophagic Loop",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "主体意识到大他者也是空洞后，将仇恨与捕食欲望转向了自己。通过极其血腥的自噬（无论是精神层面还是物理层面）来寻求解脱。",
        defEn: "Realizing the Big Other is also void, the subject redirects hatred and predatory desire upon themselves. Seeking release through extremely bloody self-consumption (whether mental or physical).",
        core: "死本能的最疯狂内爆。外界没有救赎甚至没有惩罚，那么唯有在撕咬自己血肉的绝对痛觉中，才能证实自己此刻活着。 | Outcome: 血肉的莫比乌斯环。",
        coreEn: "The madest implosion of the death instinct. The outside has no salvation or even punishment; thus, only in the absolute pain of tearing their own flesh can they verify they are alive in this moment. | Outcome: Möbius strip of flesh and blood.",
        patch: {
            mechanics: "断绝对外界的所有攻击动作，主角开始使用技能与武器狂热地产出基于自身模型的伤害数字，系统发出连续的“致命伤（Critical）”提示。",
            mechanicsEn: "Severing all attack actions against the outside, the protagonist begins using skills and weapons to fanatically generate damage numbers on their own model; the system emits continuous 'Critical hit' prompts.",
            aesthetic: "极度令人不适的反差。一边疯狂咬噬自己拉出带血的肠子或皮肉，一边面露极乐的癫笑。大滩的番茄酱红占据视觉中心。",
            aestheticEn: "Profoundly uncomfortable dissonance. While frenziedly gnawing themselves, pulling out bloody intestines or flesh, displaying a blissful maniacal laughter. Pools of excessive ketchup-red dominate the center of vision.",
            runtime: "反转角色的【伤害判定计算公式】，令所有向外的碰撞检测向量 100% 折返刺入自己的源对象根部（Root Point）。",
            runtimeEn: "Inverting the character's [Damage Calculation Formula], making all outward collision detection vectors ricochet 100% back to stab their own source Root Point."
        }
    },
    {
        id: "res_blind_deaf",
        name: "感官能指的剥夺", nameEn: "Sensory Evacuation",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "系统以物理暴行的极瑞手段挖去主体的双眼、摧毁听觉并割断舌头，使其被永久封锁在漆黑和死寂绝缘的心智炼狱中。",
        defEn: "The system uses extreme physical atrocity to gouge out the subject's eyes, destroy their hearing, and sever their tongue, locking them permanently within a lightless, soundless insulated mental purgatory.",
        core: "海伦凯勒的地狱版。《黑手党》式最毒的黑帮刑罚——由于没有了接收器（五官），主体的任何思想都在黑暗中疯狂反射至死。 | Outcome: 肉体监牢的绝对闭合。",
        coreEn: "A hellish version of Helen Keller. The most poisonous Mafia-style punishment—without receivers (senses), any thoughts of the subject reflect frantically back into the dark unto death. | Outcome: Absolute closure of the fleshly prison.",
        patch: {
            mechanics: "先拔掉环境音乐，然后拔掉所有音效。屏幕上的光亮范围极速缩小直到黑屏。玩家只能根据手柄不可名状但微弱的震动感知主角依然活着且在挣扎。",
            mechanicsEn: "First unplug ambient music, then all SFX. The lit range on the screen contracts extremely rapidly to black. The player can only sense the protagonist is still alive and struggling through indescribable, faint gamepad vibrations.",
            aesthetic: "从极致的血腥残酷过场直接剪辑至“物理级别的纯黑加纯静音”，这种视觉上的落差造成了恐怖的真空晕眩感。",
            aestheticEn: "Direct cut from extremely bloody and cruel cinematic to 'physical-level pure pitch black plus pure silence'; this visual drop causes a terrifying vacuum-like dizziness.",
            runtime: "调用引擎最底层的机制挂起（Suspend）：关闭 `AudioListener` 和全局的 `Rendering Layers`。仅留最微弱的循环输入作为主机的生存证明。",
            runtimeEn: "Invoking engine base-level Suspend: killing the `AudioListener` and global `Rendering Layers`. Leaving only the faintest input loop as proof of host survival."
        }
    },
    {
        id: "res_burn_all",
        name: "意义的焚毁净化", nameEn: "The Holocaust of Meaning",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "在信仰垮塌或彻底背叛的刺激下，理智化为了疯狂的纵火欲。主体将神圣与世俗的建筑连同历史一起拖入清洗的红莲业火之中。",
        defEn: "Stimulated by the collapse of faith or utter betrayal, sanity turns to a crazed arsonist drive. The subject drags the sacred and secular architecture, along with history, into the cleansing crimson flames.",
        core: "《权力的游戏》龙妈的君临城火舞。“既然他们得拯救是如此虚伪而且丑陋，那不如让火焰清算一切。”尼禄式的恶魔狂喜。 | Outcome: 净化为废土之灰。",
        coreEn: "Daenerys's dragonfire dance over King's Landing. 'Since their salvation is so hypocritical and ugly, better to let flame settle everything.' Nero-esque demonic ecstasy. | Outcome: Cleansed to wasteland ash.",
        patch: {
            mechanics: "主角在油库或核心反应堆按下了引爆键，或者提着喷火器在曾经试图保护的城市中心无差别地走动喷射。大火不会在建筑边沿停止。",
            mechanicsEn: "The protagonist hits the detonate button at the oil depot or core reactor, or walks indiscriminately spraying a flamethrower in the center of the city they once tried to protect. Fire does not stop at building edges.",
            aesthetic: "占据绝大画面的高温橘红色和升腾的黑色浓烟，空气在火焰的折射下极度扭曲。配乐使用某种令人毛骨悚然的优美古典咏叹调。",
            aestheticEn: "High-temperature orange-red dominating the huge frame and ascending thick black smoke; air highly distorted by heat refraction. Soundtrack utilizes a creepy, beautiful classical aria.",
            runtime: "在地形系统（Terrain）与建筑组件上全局触发 `Ignite` 方法，将全图所有的【文化产物参数】与【繁荣变量】在几分钟内烧结成 0。",
            runtimeEn: "Globally triggering the `Ignite` method on the Terrain system and architectural components, sintering all [Cultural Output Parameters] and [Prosperity Variables] map-wide to 0 within minutes."
        }
    },
    {
        id: "res_betray_all",
        name: "绝对信任的社会解体", nameEn: "Rupture of the Social Bond",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "主体突然陷入了马基雅维利式的最黑洞阶段，没有受到任何大他者的威逼利诱，纯粹自主地背叛了所有战友、亲人与下属。",
        defEn: "The subject suddenly sinks into the deepest Machiavellian black hole; without any coercion or bribe from the Big Other, purely and autonomously betraying all comrades, kin, and subordinates.",
        core: "这是对人伦底线的蓄意强暴。只有亲手将一切牵绊斩断，主体才能以最畸形的方式验证自己不被任何道德因果律所控制。 | Outcome: 最黑的尤达大师。",
        coreEn: "This is a deliberate rape of ethical baselines. Only by personally severing all ties can the subject verify in the most deformed way that they are un-controlled by any moral causality. | Outcome: The darkest Master Yoda.",
        patch: {
            mechanics: "在毫无预警的情况下，在最重要的庆功宴或反抗会议上发难。从暗处调出处刑名单，无差别屠戮之前一直用血肉支援主角的配角池。",
            mechanicsEn: "With zero warning, striking at the most crucial celebration or rebel meeting. Executing from the dark a hit-list, indiscriminately slaughtering the supporting cast who previously backed the protagonist with blood.",
            aesthetic: "极度冷血的手法和几乎像算账单一样木然的表情。配角们脸上的错愕、震惊和泪水甚至来不及定格。冰冷的枪栓声。",
            aestheticEn: "Supremely cold-blooded execution and a numb expression like tabulating a bill. The astonishment, shock, and tears on the supporting casts' faces haven't even time to solidify. Icy sound of a gun bolt.",
            runtime: "强行翻转数组。将系统内长期积累的所有【信赖增益（Trust Buff）】转化为致残级别的【弱点暴击伤害附加（Backstab Multiplier）】。",
            runtimeEn: "Forcibly flipping arrays. Converting all accumulated [Trust Buffs] over the long term into crippling [Backstab Multipliers]."
        }
    },
    {
        id: "res_flesh_prison",
        name: "物理血肉的终极幽闭", nameEn: "Trapped in the Real Flesh",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "灵魂或神经系统被强行提取并幽闭进一个极其痛苦、丑陋却绝对无法物理毁损的肉块或器官容器里，甚至连动一根手指的微凉感也不可得。",
        defEn: "The soul or nervous system is forcibly extracted and claustrophobically sealed into a highly painful, ugly, yet absolutely physically indestructible chunk of meat or organ vessel; lacking even the slight coolness of moving a finger.",
        core: "《无所不能的哈兰爱丽森:我没有嘴，但我必须呐喊》。最大的酷刑不是死，而是绝对清醒地锁死在这蠕动的内脏监狱中承受无限劫难。 | Outcome: 本体降维成器官。",
        coreEn: "Harlan Ellison: I Have No Mouth, and I Must Scream. The greatest torture isn't death, but being absolutely lucid, locked inside this squirming viscera prison enduring infinite tribulation. | Outcome: Ontology reduced to an organ.",
        patch: {
            mechanics: "角色丧失了原有的四肢躯干概念。以第一人称（且只有部分周边模糊视野）被困在有着极度恶心音响反馈的培养皿或活体器官深处。",
            mechanicsEn: "Character loses the original concept of limbs and torso. Trapped in first-person (with only blurry peripheral vision) deep inside a petri dish or living organ filled with extremely nauseating audio feedback.",
            aesthetic: "暗红与肉色的黏稠画风。心跳的重低音扑面而来，周围是无尽的血管蠕动，且不时伴随不可名状的酸液腐蚀痛觉音效。",
            aestheticEn: "Thick dark red and flesh tones. Pounding sub-bass heartbeat; surrounded by endless squirming blood vessels, intermittently accompanied by unspeakable audio of acid corrosion burning pain.",
            runtime: "废除 `Humanoid` 所有骨骼结构集与移动指令集，把控制对象强转为一个只能输出【痛绝回廊】反馈日志的只读【脏器（Organ Node）】。",
            runtimeEn: "Defuncting all `Humanoid` skeletal structure sets and locomotion commands, forcibly typecasting the control object into a read-only [Organ Node] that only outputs [Corridor of Agony] feedback logs."
        }
    },
    {
        id: "res_infinite_pain",
        name: "无限受苦的实在", nameEn: "Perpetual Agony",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "主体坠落到了不受时空限制的高维受刑空间。每一秒钟都被拆解为万年，而主体的感官痛觉被无限拉升到了断裂前的极值点并在那里固定。",
        defEn: "The subject plunges into heavily torturous higher-dimensional space unbound by spacetime. Every second is unraveled into ten thousand years, while the subject's sensory pain is cranked infinitely up to the snapping point and locked there.",
        core: "普罗米修斯被啄食肝脏的数字时代重构。当大他者的复仇摆脱了热力学耗尽的限制，痛觉成了横亘在宇宙真理上的不朽纪念碑。 | Outcome: 作为永恒祭品的痛觉。",
        coreEn: "Digital reconstruction of Prometheus having his liver pecked. When the Big Other's vengeance sheds thermodynamic depletion limits, pain becomes the immortal monument spanning universe's truth. | Outcome: Pain as eternal sacrifice.",
        patch: {
            mechanics: "所有角色属性归零只保留【痛苦承载量（Suffering Capacity）】。在无间地狱里循环展现出肉身被撕裂粉碎并重组的过程，且主视角无法闭眼。",
            mechanicsEn: "All character attributes zero out except [Suffering Capacity]. Showing a cyclic process in the unending hell of flesh torn, pulverized, and reconstituted, and the POV cannot close its eyes.",
            aesthetic: "极端恐怖的体感传递。惨白的极权机器或者满墙生齿渊火交融。惨叫声通过声码器处理出神性回音的诡异残响，令人精神极度震颤失常。",
            aestheticEn: "Extremely terrifying somatosensory transmission. Pallid totalitarian machinery or walls of gnashing teeth and abyssal fire. Screams vocation-processed with a divine yet eerie echo, causing intense mental tremor and derangement.",
            runtime: "系统的核心帧循环被 `while(true)` 的死亡函数接管，在抛出内存溢出崩溃（Crash）之前无穷无尽地渲染出重度的血红色粒子特效。",
            runtimeEn: "The system's core frame loop is hijacked by a `while(true)` death function, endlessly rendering heavy blood-red particle effects before throwing an out-of-memory Crash."
        }
    },
    {
        id: "res_babel",
        name: "语言界限的崩塌", nameEn: "Linguistic Rupture",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "不是物理毁灭，而是构成意义本身的“词语”系统断裂。所有人都在说话，但没人能听得懂。世界在各自为营的无效尖叫中分崩离析。",
        defEn: "Not physical ruin, but the fracturing of the 'Word' system that constructs meaning itself. Everyone speaks, but no one can understand. The world crumbles into solipsistic, invalid screams.",
        core: "巴别塔的倒塌。当能指不再滑向所指，精神系统就迎来了彻底休克。一切复杂的秩序瞬间瓦解为毫无组织的猿猴群落。 | Outcome: 所指之链的绞断。",
        coreEn: "Collapse of Babel. When signifiers no longer slide toward the signified, the mental system enters total shock. All complex structures instantly disband into unorganized ape colonies. | Outcome: Strangling of the signified chain.",
        patch: {
            mechanics: "字幕和UI提示系统渐渐扭曲，原本正常的对白变成了字母重叠组合。NPC之间的交流由于无法识别变成了恐慌和流血冲突。",
            mechanicsEn: "Subtitles and UI prompt system gradually warp; normal dialogue turns to overlaid letter combinations. NPC interactions turn to panic and bloody conflict due to unrecognizable speech.",
            aesthetic: "高频嘈杂毫无旋律的人声切片混音（Glitch vocal）。原本繁荣的大都会大街上，人类像丧尸一样陷入因恐惧而爆发的群体斗殴。强烈的迷乱感。",
            aestheticEn: "High-frequency noisy melody-less vocal slices (Glitch vocal). On the once prosperous metropolis streets, humans like zombies fall into mass brawls erupting from linguistic terror. Intense disorientation.",
            runtime: "劫持引擎原生的【Localization/String 字典库】进行乱序打乱。强迫游戏引擎从最底层的逻辑层阻断所有【会话驱动（Dialogue Trigger）】。",
            runtimeEn: "Hijacking and scrambing the engine's native [Localization/String Dictionary Library]. Forcing the game engine to block all [Dialogue Triggers] from the very bottom logic layer."
        }
    },
    {
        id: "res_time_loop",
        name: "程序级死锁", nameEn: "Fatal Deadlock",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "因为触碰了物理法则外的悖论点，主体被整个宏大宇宙卡死在了短短只有几十秒死亡和重置的时空断口处，出不来也无法被注销。",
        defEn: "Having touched a paradox point outside physics, the subject is soft-locked by the grand universe into a temporal rift of merely dozens of seconds of death and resetting—cannot exit, cannot be canceled.",
        core: "由于时间序列的断裂造成的最恐怖惩罚。主体甚至没有余地发展出应对疯狂的长篇幅独白。大他者没有折磨你，它只是发生了除零报错。 | Outcome: 纪元的鬼打墙。",
        coreEn: "The most terrifying punishment caused by chronosequence rupture. The subject doesn't even have room to develop long monologues to deal with madness. The Big Other isn't torturing you; it just encountered a divide-by-zero error. | Outcome: The Epoch's paranormal maze.",
        patch: {
            mechanics: "主角在这个只够刚好走道门口然后就会被一枪爆头的微小切片里无限载入、重演。试图更改路线的结果都是在同样的秒数死于同样的事情。",
            mechanicsEn: "The protagonist infinitely loads and replays within a tiny slice just long enough to walk to the door before a headshot. Attempts to change routes all result in dying to the same thing at the exact same second mark.",
            aesthetic: "极其快速且枯燥的重置闪屏。视觉疲劳与极端的幽闭感。没有哪怕一秒的空白帧让主体在死亡间隙得以喘息。绝望如同窒息般密不透风。",
            aestheticEn: "Extremely fast and boring reset flashes. Visual fatigue and utter claustrophobia. Not a single blank frame allows the subject to breathe between deaths. Despair is airtight like suffocation.",
            runtime: "强行打断主轴任务进度。将 `Update` 函数封死在一小段固定常数数组指针上，系统主频因此极速升高导致画面卡顿撕裂。",
            runtimeEn: "Forcibly interrupting main axis quest progress. Dead-locking the `Update` function onto a tiny fixed constant array pointer; the system clock subsequently redlines causing extreme stutter/tearing."
        }
    },
    {
        id: "res_gravity_crush",
        name: "存在法则的引力碾压", nameEn: "Ontological Crushing",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "没有任何前置铺垫或戏剧交锋，大他者直接调整了这块局域空间的环境法则（如重力变为一千倍），将所有的反抗连同血肉瞬间碾压为零厚度的超薄饼纸。",
        defEn: "Zero buildup or dramatic engagement; the Big Other directly edits the environmental law of this local space (e.g., gravity becomes 1000x), instantly crushing all rebellion along with flesh into zero-thickness paper.",
        core: "神明对蝼蚁的降维打击。彻底剥夺了所谓“史诗Boss战”甚至让主角挥刀表现反叛的机会。它只是向系统输入了一个夸张的数字，一切戛然而止。 | Outcome: 物理主义的绝对霸权。",
        coreEn: "Dimensional reduction strike from god to ant. Completely robbing the chance for a 'epic boss fight' or even for the protagonist to swing a sword in rebellion. It just inputs a ludicrous number into the system, and it brutally halts. | Outcome: Absolute hegemony of physicalism.",
        patch: {
            mechanics: "原本气势磅礴冲向王座的主角，在刚踏入房间的一瞬间，以一种滑稽而恐怖的速度啪的一声被拍扁在由昂贵材质做成的地板上。",
            mechanicsEn: "The protagonist majestically charging the throne, instantly upon entering the room, is comically and horrifyingly 'splattered' flat onto the expensive floor material with a sharp snap.",
            aesthetic: "骨骼和液体以千倍音速同时破碎炸裂的干瘪低频爆破音。没有悲歌。随后镜头从上方如俯视爬虫般冷冷地打量那滩粘糊糊的痕迹。",
            aestheticEn: "A dry low-frequency blast of bones and fluids shattering simultaneously at a thousand times the speed of sound. No elegy. Then the camera coldly observes that sticky smear from above like regarding a bug.",
            runtime: "将主角所在骨架物理组件里的的 `Gravity Multiplier` 或者 `Collider Z-Scale` 瞬间写为 1000 以及 `Scale(x, y, 0.01)`。",
            runtimeEn: "Instantly overwriting the `Gravity Multiplier` or `Collider Z-Scale` in the protagonist's skeletal physics component to 1000 and `Scale(x,y,0.01)`."
        }
    },
    {
        id: "res_implosion",
        name: "主体的黑洞内爆", nameEn: "Subjective Implosion",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "外界未施加任何致命外力，而是主角内心装载的认知张力或过载能量突破了临界值。如同向内坍缩的恒星，主体自己将自己吸干化为乌有。",
        defEn: "No fatal external force is applied; instead, the cognitive tension or overloaded energy loaded within the protagonist breaches criticality. Like a collapsing star, the subject sucks themselves dry into nothingness.",
        core: "被庞大的自我和创伤结构压死。当无法外部投射或升华能量时，驱力反扑回自身将存在彻底抽成真空态，只留下极小的黑矮星碎片。 | Outcome: 创伤的超载自毁。",
        coreEn: "Crushed to death by a massive ego and trauma structure. When energy cannot be projected outward or sublimated, the drive backlashes upon the self, sucking existence into a vacuum, leaving only tiny black dwarf fragments. | Outcome: Overload self-destruction of trauma.",
        patch: {
            mechanics: "面对难以承受的选择或真相，主角的身体开始产生强烈形变（非外力造成），向心脏或头颅坍缩，最后犹如被拉链拉上的空间缝隙一般消失不见。",
            mechanicsEn: "Facing an unbearable choice or truth, the protagonist's body starts warping intensely (sans external force), shrinking toward the heart or skull, finally vanishing like a zipped-up spatial rift.",
            aesthetic: "没有外在的震耳欲聋。而是一声“休——”的极具真空感的锐利声效。原本的人物占据空间猛缩，周围空气产生肉眼可见的光学扭曲变形。",
            aestheticEn: "No external deafening sound. Rather a sharp 'sshuuuuk' effect of absolute vacuum. The character's volume suddenly retracts; surrounding air undergoes visually perceptible optical distortion.",
            runtime: "将实体Mesh模型的顶点着色器（Vertex Shader）锚点全部指向自身的原点，赋予极短插值曲线在0点1秒内 `Scale` 收缩为负值。",
            runtimeEn: "Pointing all Vertex Shader anchors of the entity Mesh model to its own origin, assigning a minuscule interpolation curve contracting `Scale` into negative values within 0.1s."
        }
    },
    {
        id: "res_end_of_evangelion",
        name: "退行至原初深渊", nameEn: "The Primordial Sea",
        group: "D. 崩溃", groupEn: "Collapse",
        def: "肉体和个体边界（A.T. Field）由于绝望而彻底瓦解，整个星球的人类全盘液化，退回没有你我之分的原始母亲羊水大洋（LCL）之中。绝对拒绝差异的死亡形式。",
        defEn: "Flesh and individual boundaries (A.T. Field) totally disintegrate due to despair; humanity planet-wide liquefies collectively, regressing into the primordial maternal amniotic ocean (LCL) lacking 'you' and 'I'. A death format absolutely rejecting difference.",
        core: "《EVA》第三次冲击大结局式。最高的虚无狂欢。为了彻底逃避被大他者伤害，用一种极度退行、极度黏稠的群体性集体自杀，融掉全部社会符号区。 | Outcome: 分化系统的彻底消解融毁。",
        coreEn: "End of Evangelion Third Impact sequence. The supreme carnival of nihilism. To thoroughly escape harm from the Big Other, melting the entire social symbolic zone via profoundly regressive, viscous mass collective suicide. | Outcome: Total dissolved meltdown of the differentiation system.",
        patch: {
            mechanics: "一切战斗、建筑甚至系统对话框融化为橙红色的黏稠汁液，伴随漫天极难名状的巨大女神幻影或圣歌。没有战斗，只有无法抵挡的消亡极乐。",
            mechanicsEn: "All combats, buildings, even system dialog boxes melt into viscous orange-red juice, accompanied by sky-filling indescribable giant goddess phantoms or hymnals. No combat, only irresistible blissful annihilation.",
            aesthetic: "极其怪异神圣但令人深深作呕的甜腻色彩。所有物体的边界光照变得羽化（Feathering）。人类的惨叫声化作令人发指的一声绵软的“啵”气泡破裂音。",
            aestheticEn: "Grossly bizarre, holy, Yet deeply nauseating, sweetish colors. Boundary lighting of all objects becomes feathered. Human screams transmute into a terrifyingly soft 'pop' sound of a bubble bursting.",
            runtime: "删除所有碰撞网格（Colliders），覆盖全局【屏幕空间材质（Screen Space Material）】，强制系统所有变量平推入 `Float Pooling` 并抛弃标识名。",
            runtimeEn: "Deleting all Colliders, covering global [Screen Space Material], forcing all system variables to be shoved linearly into a `Float Pooling` discarding identifier names."
        }
    }
];
