import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_E: LibraryCategoryDef = {
  id: "type_e",
  name: "惊悚与恐怖 (Horror & Terror)",
  desc: "针对生理本能的恐惧，惊吓与不适，强调直观的冲击。",
  items: [
    { 
      id: "slasher", 
      name: "砍杀/血浆", nameEn: "Slasher",
      def: "面具怪人、连环杀戮、青少年受害、B级趣味、断肢。", 
      defEn: "Masked psycho, serial killing, teen victims, B-movie tropes, dismemberment.",
      core: "脆弱的肉体 vs 坚不可摧的杀戮机器。性往往伴随着死。 | 换喻 ($): 沾血的面具 (Bloody Mask)",
      coreEn: "Fragile flesh vs unstoppable killing machine. Sex is often accompanied by death. | Metonymy ($): Bloody Mask",
      logic: "【绞肉机】：M4（杀手）是绝对力量。M1（受害者）的肉体极度脆弱。M5（逃亡与反杀）是唯一的逻辑。",
      logicEn: "[Meat Grinder]: M4 (Killer) is absolute power. M1's (Victim) body is extremely fragile. M5 (Escape and counter-kill) is the only logic.",
      patch: {
        mechanics: "基础生存协议 + [杀手无敌帧 = 长; 道德惩罚机制 = 寻欢必死]",
        mechanicsEn: "Base_SURVIVAL + [Killer_Invincibility_Frames = Long; Moral_Punishment = Hookup_Equals_Death]",
        aesthetic: "聚焦：血浆喷射 + 标志性的凶器特写（电锯/砍刀）+ 在阴暗树林中绝望跌倒。文本：刺耳的尖叫与粗重的呼吸声交替。",
        aestheticEn: "Focus: Blood_Spurt + Signature_Weapon_Close_Up + Despair_Tripping_In_Dark_Woods. Text: Piercing_Screams_Alternating_With_Heavy_Breathing.",
        runtime: "IF (配角在脱离团队独处) THEN (必被杀手以极具视觉冲击力的方式处决)。",
        runtimeEn: "IF (Supporting_Character_Is_Alone) THEN (Must_Be_Executed_By_Killer_With_High_Visual_Impact)."
      }
    },
    { 
      id: "supernatural_horror", 
      name: "超自然/灵异", nameEn: "Supernatural Horror",
      def: "鬼魂、恶魔附身、驱魔、看不见的恐惧、跳吓 (Jump Scare)。", 
      defEn: "Ghosts, demonic possession, exorcism, unseen fears, jump scares.",
      core: "不可见的恶意入侵安全的家。理性的科学无法解释的超自然现象。 | 换喻 ($): 移动的家具 (Moving Furniture)",
      coreEn: "Unseen malice invading the safe home. Supernatural phenomena beyond rational science. | Metonymy ($): Moving Furniture",
      logic: "【闹鬼】：M4（未知灵体）强制入侵 M1（家庭空间）。现实的客观规律崩溃，理性的沟通失效。",
      logicEn: "[Haunting]: M4 (Unknown Spirit) forcibly invades M1 (Home space). Objective laws of reality collapse, rational communication fails.",
      patch: {
        mechanics: "基础惊吓协议 + [物理防御 = 无效; 心理防线 = 持续溃败]",
        mechanicsEn: "Base_SCARE + [Physical_Defense = Invalid; Psychological_Defense = Continuous_Collapse]",
        aesthetic: "聚焦：镜子里的异样倒影 + 黑暗走廊尽头的扭曲轮廓 + 突然放大的尖锐音效。文本：神经质的怀疑与牧师念诵经文的混响。",
        aestheticEn: "Focus: Weird_Reflections_In_Mirror + Twisted_Silhouettes_In_Dark_Hallways + Sudden_Loud_Noises. Text: Neurotic_Doubt_Mixed_With_Priest_Chanting.",
        runtime: "IF (角色觉得安全并回头/关上柜门) THEN (大概率在视野盲区生成跳吓实体)。",
        runtimeEn: "IF (Character_Feels_Safe_And_Looks_Back_Or_Closes_Cabinet) THEN (High_Probability_Of_Jump_Scare_Entity_In_Blind_Spot)."
      }
    },
    { 
      id: "zombie", 
      name: "丧尸/感染", nameEn: "Zombie",
      def: "活死人潮、围城、人性崩坏、生存恐惧、病毒爆发。", 
      defEn: "Undead hordes, siege, humanity collapse, survival fear, viral outbreak.",
      core: "文明秩序的崩塌 vs 原始生存本能。最可怕的不是死人，是活人。 | 换喻 ($): 封死的窗户 (Barricaded Window)",
      coreEn: "Collapse of civilization order vs primal survival instinct. The living are scarier than the dead. | Metonymy ($): Barricaded Window",
      logic: "【围城困局】：M4（尸潮）提供持续的外部高压。导致 M1 内部的 M3（道德/人性）在幽闭空间下迅速异化甚至自相残杀。",
      logicEn: "[Siege Trap]: M4 (Horde) provides continuous external high pressure, causing M1's internal M3 (Morals/Humanity) to rapidly alienate or cannibalize in confined spaces.",
      patch: {
        mechanics: "基础生存协议 + [资源配给 = 极度匮乏; 人际信任 = 极度脆弱]",
        mechanicsEn: "Base_SURVIVAL + [Resource_Rationing = Extremely_Scarce; Interpersonal_Trust = Extremely_Fragile]",
        aesthetic: "聚焦：密密麻麻的腐败肉体推挤栅栏 + 空荡荡的废弃超市 + 幸存者脸上的污血。文本：对物资分配的冷血算计与失去亲人的绝望哀嚎。",
        aestheticEn: "Focus: Dense_Rotting_Bodies_Pushing_Fences + Empty_Abandoned_Supermarkets + Dirty_Blood_On_Survivor_Faces. Text: Cold-Blooded_Calculations_Of_Supplies_And_Despair_Over_Lost_Kin.",
        runtime: "IF (某幸存者隐瞒了被咬的伤口) THEN (必将在团队最虚弱的时刻尸变并引发团灭危机)。",
        runtimeEn: "IF (Survivor_Hides_Bite_Wound) THEN (Must_Turn_At_Team's_Weakest_Moment_Causing_Wipeout_Crisis)."
      }
    },
    { 
      id: "body_horror", 
      name: "身体恐怖", nameEn: "Body Horror",
      def: "肉体变形、寄生、残毁、生理不适感、异化。", 
      defEn: "Physical mutation, parasitism, mutilation, physiological discomfort, alienation.",
      core: "自我意志 vs 失控的肉体。对自身生物性的厌恶与恐惧。 | 换喻 ($): 撕裂的皮囊 (Torn Skin)",
      coreEn: "Self-will vs out-of-control body. Disgust and fear of one's own biology. | Metonymy ($): Torn Skin",
      logic: "【血肉背叛】：M1（自我意识）被 M1 自身的肉体背叛。M5（变异）是一个不可逆、充满黏液和痛楚的进程。",
      logicEn: "[Flesh Betrayal]: M1 (Self-consciousness) is betrayed by M1's own body. M5 (Mutation) is an irreversible process full of slime and pain.",
      patch: {
        mechanics: "基础异化协议 + [疼痛感知 = 强化; 肉体边界 = 溶解]",
        mechanicsEn: "Base_ALIENATION + [Pain_Perception = Enhanced; Flesh_Boundary = Dissolved]",
        aesthetic: "聚焦：从体内钻出的异物/触手 + 粘稠拉丝的液体特写 + 畸变肿胀的器官。文本：难以名状的生理痛楚与对自身非人化的疯狂否定。",
        aestheticEn: "Focus: Foreign_Objects/Tentacles_Emerging_From_Inside + Strands_Of_Sticky_Fluid + Malformed_Swollen_Organs. Text: Indescribable_Physiological_Pain_And_Frantic_Denial_Of_Dehumanization.",
        runtime: "IF (角色试图通过手术或切除来阻止变异) THEN (必定加速异化并带来更巨大的血肉爆炸)。",
        runtimeEn: "IF (Character_Tries_To_Stop_Mutation_Via_Surgery) THEN (Must_Accelerate_Alienation_And_Cause_Greater_Flesh_Explosion)."
      }
    },
    { 
      id: "folk_horror", 
      name: "民俗/邪教", nameEn: "Folk Horror",
      def: "偏远村落、古老仪式、白日恐怖、异教崇拜、排外。", 
      defEn: "Remote villages, ancient rituals, daylight horror, pagan cults, xenophobia.",
      core: "现代文明人 vs 原始古老的集体信仰。在光天化日之下发生的野蛮献祭。 | 换喻 ($): 鲜花桂冠 (Flower Crown)",
      coreEn: "Modern civilized person vs ancient collective belief. Barbaric sacrifices in broad daylight. | Metonymy ($): Flower Crown",
      logic: "【异端孤岛】：M4（古老教义/集体无意识）压倒外来的 M1（现代逻辑）。恐怖不在于黑暗，而在于充满笑容的光明背后的残酷献祭。",
      logicEn: "[Heretic Island]: M4 (Ancient Dogma/Collective Unconscious) crushes foreign M1 (Modern Logic). Horror is not in darkness, but in cruel sacrifices behind smiling daylight.",
      patch: {
        mechanics: "基础隔离协议 + [村民同化率 = 100%; 逃生路线 = 物理切断]",
        mechanicsEn: "Base_ISOLATION + [Villager_Assimilation = 100%; Escape_Routes = Physically_Cut_Off]",
        aesthetic: "聚焦：阳光灿烂的向日葵田 + 诡异笑容的白衣信徒 + 古老残忍的木质刑具。文本：极度温和有礼的语气搭配毛骨悚然的祭祀陈述。",
        aestheticEn: "Focus: Sunny_Sunflower_Fields + White-Clad_Cultists_With_Eerie_Smiles + Ancient_Cruel_Wooden_Torture_Devices. Text: Extremely_Polite_Tone_Paired_With_Creepy_Sacrificial_Statements.",
        runtime: "IF (外来者试图用现代法律/科学说服村民) THEN (只会被当做更高级的祭品对待)。",
        runtimeEn: "IF (Outsider_Tries_To_Persuade_Villagers_With_Science) THEN (Will_Only_Be_Treated_As_A_Higher-Grade_Sacrifice)."
      }
    },
    { 
      id: "found_footage", 
      name: "伪纪录片", nameEn: "Found Footage",
      def: "手持DV、录像带遗失、真实感恐怖、第一人称受限视角。", 
      defEn: "Handheld DV, lost tapes, realistic horror, restricted first-person POV.",
      core: "绝对在场感 vs 正在发生的未知恐怖。摄像机是最后一道防线。 | 换喻 ($): 闪烁的REQ红点 (Blinking REC Red Dot)",
      coreEn: "Absolute presence vs unfolding unknown horror. The camera is the last defense. | Metonymy ($): Blinking REC Red Dot",
      logic: "【视线囚笼】：M5（摄像机视角）严重限制了 M1 的感知。未知（M4）被隐藏在画框之外或画质噪点中，引发深层的心理恐慌。",
      logicEn: "[Sight Cage]: M5 (Camera POV) severely limits M1's perception. Unknown (M4) is hidden off-frame or in noise, causing deep panic.",
      patch: {
        mechanics: "基础限制协议 + [视野范围 = 极窄; 收音效果 = 粗糙却真实]",
        mechanicsEn: "Base_RESTRICTION + [Field_Of_View = Very_Narrow; Audio = Rough_But_Real]",
        aesthetic: "聚焦：剧烈晃动的地平线 + 夜视模式下发光的双眼 + 画面突然的雪花/卡顿。文本：充满语病、惊惶失措的粗口与喘息。",
        aestheticEn: "Focus: Violently_Shaking_Horizon + Glowing_Eyes_In_Night_Vision + Sudden_Static/Glitches. Text: Grammatically_Incorrect_Panicked_Swearing_And_Panting.",
        runtime: "IF (摄像机掉落到地上) THEN (画面必定刚好捕捉到最恐怖的实体站立在阴影中)。",
        runtimeEn: "IF (Camera_Drops_To_Ground) THEN (Must_Capture_The_Most_Terrifying_Entity_Standing_In_Shadows)."
      }
    },
    { 
      id: "giallo", 
      name: "铅黄/美学恐怖", nameEn: "Giallo",
      def: "鲜艳色彩、神秘黑手套、风格化谋杀、视听艺术。", 
      defEn: "Vivid colors, mysterious black gloves, stylized murders, audiovisual art.",
      core: "死亡被绝对仪式化、审美化。逻辑让位于噩梦般的视觉剥削。 | 换喻 ($): 黑皮手套与剃刀 (Black Leather Glove and Razor)",
      coreEn: "Death is ritualized and aestheticized. Logic yields to nightmarish visual exploitation. | Metonymy ($): Black Leather Glove",
      logic: "【唯美死亡】：M5（视觉风格/谋杀手法）的优先级 > M7（叙事逻辑）。M4（杀手）是一个抽象的艺术符号，而非具体动机的人。",
      logicEn: "[Aesthetic Death]: M5 (Visual Style/Murder Method) priority > M7 (Narrative Logic). M4 (Killer) is an abstract art symbol, not a motivated person.",
      patch: {
        mechanics: "基础剥削协议 + [色彩饱和度 = 极高; 死亡过程 = 艺术表演]",
        mechanicsEn: "Base_EXPLOITATION + [Color_Saturation = Intense; Death_Process = Art_Performance]",
        aesthetic: "聚焦：被滤镜渲染的鲜红血液 + 缓慢逼近的锋利刀刃 + 浓烈的红蓝紫打光叠加。文本：充满性隐喻与迷幻呓语的呢喃。",
        aestheticEn: "Focus: Filter-Rendered_Bright_Red_Blood + Slowly_Approaching_Sharp_Blade + Intense_Red/Blue/Purple_Lighting. Text: Whispers_Full_Of_Sexual_Metaphors_And_Psychedelic_Ramblings.",
        runtime: "IF (受害者被逼入绝境) THEN (场景必定呈现出仿佛舞台剧般的夸张布景与致命华丽)。",
        runtimeEn: "IF (Victim_Cornered) THEN (Scene_Must_Present_Stage-Like_Exaggerated_Sets_And_Fatal_Opulence)."
      }
    },
    { 
      id: "home_invasion", 
      name: "家庭入侵", nameEn: "Home Invasion",
      def: "安全避风港被打破、陌生人暴力闯入、无处可逃。", 
      defEn: "Safe haven shattered, strangers breaking in violently, nowhere to hide.",
      core: "最安全的家变成了最危险的牢笼。猎人与猎物在室内狭小空间内的物理周旋。 | 换喻 ($): 被切断的电话线 (Cut Phone Line)",
      coreEn: "Safest home becomes deadliest cage. Hunter vs prey physical struggle in confined indoors. | Metonymy ($): Cut Phone Line",
      logic: "【空间褫夺】：M1（受害者）在物理空间上面临 M4（入侵者）的绝对占领。M5 是基于房间地形布局的纯粹猫鼠游戏。",
      logicEn: "[Space Deprivation]: M1 (Victim) faces absolute occupation by M4 (Intruder) in physical space. M5 is pure cat-and-mouse based on room layout.",
      patch: {
        mechanics: "基础猎杀协议 + [物理环境 = 封闭住宅; 求救信号 = 屏蔽]",
        mechanicsEn: "Base_HUNT + [Physical_Environment = Closed_House; SOS_Signal = Blocked]",
        aesthetic: "聚焦：窗帘后隐约的面具脸 + 门把手被缓缓转动 + 被打碎的玻璃落地窗。文本：极少对话，以室内破坏声和强迫受害者发出的惨叫为主。",
        aestheticEn: "Focus: Masked_Face_Behind_Curtain + Doorknob_Turning_Slowly + Shattered_Glass_Doors. Text: Minimal_Dialogue_Mostly_Indoor_Destruction_And_Forced_Screams.",
        runtime: "IF (受害者躲在衣柜或床底) THEN (入侵者必定在视野极近处停留，伴随巨大的呼吸声)。",
        runtimeEn: "IF (Victim_Hides_In_Closet_Or_Under_Bed) THEN (Intruder_Must_Linger_Very_Close_In_View_With_Loud_Breathing)."
      }
    },
    { 
      id: "lovecraftian", 
      name: "克苏鲁", nameEn: "Lovecraftian",
      def: "不可名状、古神、深海恐惧、人类渺小与理智丧失。", 
      defEn: "Unnameable, Elder Gods, deep sea terror, human insignificance, loss of sanity.",
      core: "人类理性的脆弱 vs 宇宙冷漠的真相。知道得越多，疯得越快。 | 换喻 ($): 沾有粘液的古书 (Slime-covered Grimoire)",
      coreEn: "Fragility of human reason vs apathetic truth of the universe. More knowledge = faster madness. | Metonymy ($): Slime-covered Grimoire",
      logic: "【宇宙冷漠】：M4（旧日支配者）的存在超越了人类的三维认知。M1 试图用 M5（调查/科学）去理解 M4，结果必然导致 M0（理智SAN值清零）。",
      logicEn: "[Cosmic Apathy]: M4 (Great Old Ones) transcends human 3D perception. M1 tries to understand M4 via M5 (Science), resulting inevitably in M0 (Sanity zeroed).",
      patch: {
        mechanics: "基础深渊协议 + [SAN值惩罚 = 指数级; 力量对比 = 微尘对星辰]",
        mechanicsEn: "Base_ABYSS + [SAN_Penalty = Exponential; Power_Ratio = Speck_To_Star]",
        aesthetic: "聚焦：非欧几里得几何的漆黑遗迹 + 海面下翻滚的巨大触手阴影 + 狂乱的眼球涂鸦。文本：使用大量“不可名状的”、“黏滑恶心的”、“亵渎的”形容词堆砌。",
        aestheticEn: "Focus: Non-Euclidean_Dark_Ruins + Massive_Tentacle_Shadows_Under_Sea + Frantic_Eyeball_Doodles. Text: Pile-up_Of_Adjectives_Like_Unnameable_Slimy_Blasphemous.",
        runtime: "IF (调查员终于看到了神祇的真实面貌) THEN (其语言模块立刻崩溃，只能发出狂乱的低语)。",
        runtimeEn: "IF (Investigator_Finally_Sees_The_True_Form_Of_The_Deity) THEN (Language_Module_Instantly_Collapses_Into_Frantic_Whispers)."
      }
    },
    { 
      id: "psychological_horror", 
      name: "心理/精神恐怖", nameEn: "Psychological Horror",
      def: "疯人院、幻觉、无法区分现实、压抑、自我解体。不可靠叙事。", 
      defEn: "Asylum, hallucinations, unable to distinguish reality, self-disintegration. Unreliable narrative.",
      core: "最大的恐怖来自大脑内部。无法信任自己的感官和记忆。 | 换喻 ($): 破碎的镜面 (Shattered Mirror)",
      coreEn: "Greatest terror comes from within the brain. Unable to trust own senses and memory. | Metonymy ($): Shattered Mirror",
      logic: "【不可靠叙事】：系统隐藏了 M2（真实世界）。M1 一直在与自己的 M0（精神妄想/创伤投影）搏斗。怪物其实是主角自己的一部分。",
      logicEn: "[Unreliable Narrative]: System hides M2 (Reality). M1 constantly fights their own M0 (Delusion/Trauma). The monster is a part of the protagonist.",
      patch: {
        mechanics: "基础降维协议 + [叙事欺骗性 = MAX; 空间扭曲 = 随心理波动]",
        mechanicsEn: "Base_DIMENSIONAL_DROP + [Narrative_Deception = MAX; Space_Distortion = Follows_Mental_Fluctuation]",
        aesthetic: "聚焦：无限延伸又循环的走廊 + 突兀的蒙太奇闪回 + 镜子里表情与自己不一致的倒影。文本：极度神经质的独白，逻辑前后矛盾的辩护。",
        aestheticEn: "Focus: Infinitely_Looping_Corridors + Abrupt_Montage_Flashbacks + Mirror_Reflection_Not_Matching_Expression. Text: Highly_Neurotic_Monologue_Logically_Inconsistent_Defense.",
        runtime: "IF (主角认为自己消灭了鬼魂/凶手) THEN (镜头一转发现被害者全是真实的无辜受害者，主角才是真凶)。",
        runtimeEn: "IF (Protagonist_Thinks_They_Killed_The_Ghost/Killer) THEN (Camera_Reveals_Victims_Are_Innocents_And_Protagonist_Is_The_Killer)."
      }
    },
    { 
      id: "tech_horror", 
      name: "科技恐怖", nameEn: "Tech Horror",
      def: "杀人机器、诅咒录像带/网站、科技反噬、屏幕生活。数字异化。", 
      defEn: "Killer machines, cursed tapes/sites, tech backlash, screen life. Digital alienation.",
      core: "人类对连接的渴望 vs 技术的异化与吞噬。屏幕变成了通往地狱的窗口。 | 换喻 ($): 闪烁雪花的屏幕 (Glitching Static Screen)",
      coreEn: "Human desire for connection vs Tech's alienation. Screens become windows to hell. | Metonymy ($): Glitching Screen",
      logic: "【幽灵机核】：M4 (技术载体) 拥有了 M0（恶意）。M1 高度依赖的数字工具反过来成为监视、操控甚至杀死 M1 的介质。",
      logicEn: "[Ghost in Machine]: M4 (Tech medium) possesses M0 (Malice). The digital tools M1 highly depends on become the medium to surveil, manipulate, and kill M1.",
      patch: {
        mechanics: "基础赛博恐惧 + [信息泄露致死 = 极高; 断网/断电 = 引发恐慌]",
        mechanicsEn: "Base_CYBER_HORROR + [Info_Leak_Lethality = High; Disconnect = Causes_Panic]",
        aesthetic: "聚焦：深夜电脑屏幕幽蓝的光打在脸上 + 逐渐扭曲的视频通话画面 + 机械发条/报错代码的音效。文本：冷酷无情的系统提示音夹杂人类的惨叫。",
        aestheticEn: "Focus: Eerie_Blue_Screen_Light_On_Face_At_Night + Gradually_Distorting_Video_Call + Mechanical/Error_Code_Sounds. Text: Cold_System_Prompts_Interspersed_With_Human_Screams.",
        runtime: "IF (角色试图拔掉电源或销毁设备) THEN (电子幽灵会直接通过现实电网或电器设备将其击毙)。",
        runtimeEn: "IF (Character_Tries_To_Unplug_Or_Destroy_Device) THEN (Cyber_Ghost_Will_Electrocute_Them_Via_Real_Grid_Or_Appliances)."
      }
    },
    { 
      id: "horror_comedy", 
      name: "喜剧恐怖", nameEn: "Horror Comedy",
      def: "吓人但好笑、解构恐怖片套路、荒诞血腥。", 
      defEn: "Scary but funny, deconstructing horror tropes, absurd gore.",
      core: "对恐怖套路的绝对解构。在面对死亡时的荒诞反应，用笑声消解崇高的恐惧。 | 换喻 ($): 用黑胶唱片爆头 (Headshot with Vinyl Record)",
      coreEn: "Absolute deconstruction of horror tropes. Absurd reactions to death, dissolving primal fear with laughter. | Metonymy ($): Vinyl Headshot",
      logic: "【荒诞消解】：系统承认传统的 M4（恐怖实体）存在，但强制 M1 使用 M0（喜剧逻辑/蠢行为）与之对抗，打破第四面墙。",
      logicEn: "[Absurd Dissolution]: System acknowledges traditional M4 (Horror Entity), but forces M1 to counter with M0 (Comedy/Stupid behavior), breaking the 4th wall.",
      patch: {
        mechanics: "基础解构协议 + [血浆量 = 夸张如喷泉; 恐惧免疫 = 间歇性触发]",
        mechanicsEn: "Base_DECONSTRUCTION + [Gore_Amount = Fountains; Fear_Immunity = Triggered_Intermittently]",
        aesthetic: "聚焦：如同番茄酱爆发的断肢断面 + 角色在满地内脏上滑倒 + 拿着除草机对抗丧尸。文本：在生死关头依然在进行无厘头的流行文化吐槽。",
        aestheticEn: "Focus: Ketchup-Like_Geysers_From_Stumps + Slipping_On_Guts + Fighting_Zombies_With_Lawnmowers. Text: Nonsensical_Pop-Culture_Banter_During_Life-And-Death_Moments.",
        runtime: "IF (出现极其恐怖的终极怪物) THEN (主角一定会在恐慌中用极其生活化且不符常理的物品将其意外秒杀)。",
        runtimeEn: "IF (Ultimate_Terrifying_Monster_Appears) THEN (Protagonist_Will_Accidentally_One-Shot_It_With_A_Mundane_Item_In_Panic)."
      }
    }
  ]
};
