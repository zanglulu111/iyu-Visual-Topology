import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_C: LibraryCategoryDef = {
  id: "prof_knowledge",
  name: "3. 知识与技术 (Knowledge & Tech)",
  nameEn: "Knowledge & Tech",
  desc: "以极致理性（M4）切割真实界（M2），或者在探索边缘触碰不可名状（M6）。",
  defEn: "Cutting the Real (M2) via extreme reason (M4), or touching the unnamable (M6) at the limits.",
  items: [
    {
      id: "scientist_mad",
      name: "疯狂科学家",
      nameEn: "Mad Scientist",
      def: "为探求真理打破一切伦理常识的越界者。",
      defEn: "Transgressor shattering ethics to probe edge of truth.",
      core: "【换喻】冒泡试管掩映下的傲慢神权与沾血胶皮手套",
      coreEn: "【Metonymy】Arrogant deity behind bubbling flasks; bloody gloves.",
      logic: "剥夺同理心（M1/M3），将科学理性（M4）推向疯癫，从而击穿系统引来失控（M6）。",
      logicEn: "Strips empathy (M1/M3) to push M4 reason into madness, piercing systems to summon M6 terror.",
      patch: {
        mechanics: "奇点突破协议 + [道德阈值=绝对零度; 真理执念=过载]",
        mechanicsEn: "Singularity_BREACH + [Moral_Threshold=Absolute_Zero]",
        aesthetic: "特斯拉线圈幽蓝电弧、散乱头发、极度狂躁的眼神。",
        aestheticEn: "Tesla arc, messy hair, manic gaze.",
        runtime: "IF (终极造物M5失控反噬己身) THEN (跌落神坛至死)。",
        runtimeEn: "IF (Ultimate_M5_Creation_Rebels) THEN (Falls from godhood to meat)."
      }
    },
    {
      id: "surgeon",
      name: "外科医生",
      nameEn: "Surgeon",
      def: "在活肉体上动刀，扮演裁决生死的白色神明。",
      defEn: "Operating on living flesh, playing the white deity of life and death.",
      core: "【换喻】切入活体组织的柳叶刀与无影灯抹去的私情",
      coreEn: "【Metonymy】Scalpel slicing flesh; emotion erased by shadowless lights.",
      logic: "直面血肉真实界（M2），用非人的冷酷法则（M4）与精确切割（M5）阻止死亡坠落（M6）。",
      logicEn: "Faces M2 flesh with cold M4 laws and precise M5 cuts to halt M6 death.",
      patch: {
        mechanics: "续命解剖协议 + [同理共振=切断; 微操=机械级]",
        mechanicsEn: "Life_Extend_DISSECT + [Empathy=Severed]",
        aesthetic: "冰冷无影灯、染血硅胶手套、刺耳心电图滴答声。",
        aestheticEn: "Cold surgical lights, bloody gloves, ECG beeps.",
        runtime: "IF (微小失误致最爱者M1清零) THEN (护甲粉碎抑郁)。",
        runtimeEn: "IF (Micro-Error_Flatlines_Beloved_M1) THEN (Armor shatters)."
      }
    },
    {
      id: "architect",
      name: "建筑师",
      nameEn: "Architect",
      def: "物理空间主宰者，城市巨兽骨骼描绘人。",
      defEn: "Spatial mastermind; draftperson of urban leviathans.",
      core: "【换喻】统治天际的蓝图与俯视蝼蚁的刚硬矩阵",
      coreEn: "【Metonymy】Skyline-ruling blueprints; rigid matrices over ants.",
      logic: "用完美几何（M4）规训混沌生活（M1/M3），将万物套入矩阵的病态极简。",
      logicEn: "Impresses perfect M4 geometry onto M1/M3 chaos. Fascist minimalist OCD.",
      patch: {
        mechanics: "宏观嵌合协议 + [几何强迫=泛滥; 控制欲=满级]",
        mechanicsEn: "Macro-Space_LATCH + [Geometry_OCD=Rampant]",
        aesthetic: "蓝图、高级碳素笔、俯视视角、混凝土阴影。",
        aestheticEn: "Blueprints, expensive pens, bird's-eye views, concrete shadows.",
        runtime: "IF (大厦地震化为坟墓M6) THEN (理性狂飙碾成齑粉)。",
        runtimeEn: "IF (Building_Becomes_M6_Tomb) THEN (Rationality pulverized)."
      }
    },
    {
      id: "professor",
      name: "教授",
      nameEn: "Professor",
      def: "象牙塔守夜人，高维理论传道者。",
      defEn: "Ivory tower watcher; preacher of high-D theories.",
      core: "【换喻】厚重书架后的尘埃与被粉笔灰掩埋的实体无能",
      coreEn: "【Metonymy】Dust behind heavy shelves; physical impotence in chalk dust.",
      logic: "纸面建立完美系统（M4），却对现实物质界（M2）与利益（M3）充满恐惧的闭锁。",
      logicEn: "Constructs flawless M4 on paper but fears Real M2 and secular M3. Deep lockdown.",
      patch: {
        mechanics: "高维理论协议 + [语义解析=极强; 物理下沉=虚脱]",
        mechanicsEn: "High-D_THEORY + [Parse=MAX; Physical_Sink=Weak]",
        aesthetic: "老花镜、书海堆叠、催眠声线、褪色羊皮衣。",
        aestheticEn: "Vintage glasses, oceans of books, hypnotic voice, faded jackets.",
        runtime: "IF (核心学术被降维推翻) THEN (信仰坍塌自绝)。",
        runtimeEn: "IF (Core_System_Demolished) THEN (Faith collapses into suicide)."
      }
    },
    {
      id: "engineer",
      name: "工程师",
      nameEn: "Engineer",
      def: "厌恶人文不确定，迷恋机理构建的秩序狂。",
      defEn: "Hates human uncertainty, adores mechanical order.",
      core: "【换喻】沾满油污的沉重扳手与轰鸣运作的无情履带",
      coreEn: "【Metonymy】Oil-stained wrenches; roaring tracks.",
      logic: "将人的情感视作Bug（M1）。将情感寄托于机械结构（M5），盲信机械物理美学。",
      logicEn: "Views emotions as M1 bugs. Places faith in M5 mechanics, worshiping violent ascension.",
      patch: {
        mechanics: "机动优化协议 + [闭环强迫=高; 人情演算=乱码]",
        mechanicsEn: "Mech_OPTIMIZE + [Loop_OCD=High; Emotion_Calc=Glitch]",
        aesthetic: "指甲黑油污、满划痕安全帽、刺眼焊枪火花。",
        aestheticEn: "Oil tight under nails, scratched hardhats, welding sparks.",
        runtime: "IF (亲手调校的核心防卫夹死至亲) THEN (被锁死在恶性代码死循环)。",
        runtimeEn: "IF (Hand-Tuned_Core_Crushes_Child) THEN (Locked in nightmare loop)."
      }
    },
    {
      id: "archaeologist",
      name: "考古学家",
      nameEn: "Archaeologist",
      def: "在黄沙中倒带时间，触及已被埋没文明秘密。",
      defEn: "Rewinding time in sand, touching lost civilization secrets.",
      core: "【换喻】拂去万年尘的软毛刷与凝视深渊的空洞眼骨",
      coreEn: "【Metonymy】Millennia-sweeping brushes; hollow bone sockets.",
      logic: "借遗弃遗骸（M2）重构灭绝的庞大系统（M4）。不经意间可能惊醒维外灾祸（M6/M+）。",
      logicEn: "Via M2 sherds, reconstructs extinct M4. Often wakes cross-D cataclysms M6.",
      patch: {
        mechanics: "回溯考古协议 + [岁月感知=敏感; 黑暗免疫=暴降]",
        mechanicsEn: "Retro_ARCHAEOLOGY + [Epoch_Sense=High]",
        aesthetic: "探坑、诡异图腾、风化石柱影、手电下的干尸。",
        aestheticEn: "Trenches, weird totems, wind-eroded columns, mummies in flashlights.",
        runtime: "IF (破译当前文明大限将至之环) THEN (坠入掌握终极真理的疯狂)。",
        runtimeEn: "IF (Deciphers_Current_Doom_Loop) THEN (Plunge into mad truth)."
      }
    },
    {
      id: "psychiatrist",
      name: "精神科医生",
      nameEn: "Psychiatrist",
      def: "探索精神迷宫导游，用理性缝合同类疯狂边界。",
      defEn: "Mental maze guide; suturing madness via reason.",
      core: "【换喻】摇摆催眠怀表与记录病人暗黑深渊的病历本",
      coreEn: "【Metonymy】Swinging pocket watches; dark abyss medical records.",
      logic: "危险折叠。用 M4 缝合破碎主体 M1。过度凝视极易被病患的深渊（M6解体）同化。",
      logicEn: "Dangerous fold. Uses M4 to suture shattered M1. Over-gazing invites M6 assimilation.",
      patch: {
        mechanics: "精神隔离缝合协议 + [防线壁垒=剧烈消耗]",
        mechanicsEn: "Mind_SUTURE + [Mental_Shield=Rapid_Drain]",
        aesthetic: "舒适皮椅、罗夏墨迹怪物、铝箔药片板、安抚眼神下的恐惧。",
        aestheticEn: "Leather couches, Rorschach monsters, foil pills, fear under calming gaze.",
        runtime: "IF (病人完全镜像自身深层创伤) THEN (防线瓦解，医患错位)。",
        runtimeEn: "IF (Patient_Mirrors_Own_Trauma) THEN (Shield falls, role invert)."
      }
    },
    {
      id: "pathologist",
      name: "法医",
      nameEn: "Pathologist",
      def: "听懂死者遗言，切开腐肉寻找唯一真相的技术员。",
      defEn: "Translator of the dead; slicing rot for truth.",
      core: "【换喻】刺入冰冷脂肪的解剖刀与福尔马林瓶外生命牌",
      coreEn: "【Metonymy】Scalpels biting cold fat; dog-tags on formalin jars.",
      logic: "将死尸剥离其主权（M1）视作绝纯血肉信息介质（M2）。高维提取以服务系统（M4），冷感极致。",
      logicEn: "Strips corpse of M1, viewing it as pure info-flesh M2 to serve M4.",
      patch: {
        mechanics: "死亡解码协议 + [腐败痛觉=完全切除; 零度冷酷=MAX]",
        mechanicsEn: "Death_DECODE + [Rot_Pain=Excised]",
        aesthetic: "防腐剂刺鼻冷气、不锈钢台反光、锯骨声、极深黑瞳。",
        aestheticEn: "Pungent cold preservatives, steel table gleam, bone saw saws.",
        runtime: "IF (解剖台碎肉拼凑出相依为命至亲) THEN (诱发不可逆恐惧发作)。",
        runtimeEn: "IF (Corpse_Assembles_Into_Beloved) THEN (Irreversible panic breakdown)."
      }
    },
    {
      id: "programmer",
      name: "程序员",
      nameEn: "Coder",
      def: "构筑虚拟世界的代码纺织工与数字苦力。",
      defEn: "Logic weaver of virtual worlds; digital coolie.",
      core: "【换喻】绿荧光雨后的疲惫神位与抽干元气的咖啡渣",
      coreEn: "【Metonymy】Code-rain deity; drained coffee dregs.",
      logic: "剥削自身的物理延展（M2），敲入纯净逻辑（M4）。以极简直观对抗现实混乱。",
      logicEn: "Exploits physical M2 to inject pure logic M4. Escaping reality's mess.",
      patch: {
        mechanics: "高维搬砖协议 + [肉体电量=常危急; 语义重构=敏锐]",
        mechanicsEn: "Virtual_LABOR + [Flesh_Battery=Critical]",
        aesthetic: "暗黑屏幕串流代码、台灯孤影、枯燥键盘声、退化脊椎。",
        aestheticEn: "Dark screens, neon code, lonely desk lamp, keyboard clatter.",
        runtime: "IF (手搓的代码AI暴走到锁死真实世界生态网) THEN (被自身创造的大他者M4绞杀)。",
        runtimeEn: "IF (Own_AI_Runs_Amok_Locking_Reality) THEN (Strangled by own creation)."
      }
    },
    {
      id: "alchemist",
      name: "炼金术士",
      nameEn: "Alchemist",
      def: "追寻点石成金与物质转化极限的神秘重构者。",
      defEn: "Occult reconstructor chasing transmutation limits.",
      core: "【换喻】咕噜毒瘴坩埚与妄图用公式丈量上帝的疯狂尺规",
      coreEn: "【Metonymy】Toxic bubbling crucible; compass measuring God.",
      logic: "融合暴利贪念（M3）与准科学法则（M4），重炼质料（M2）试图偷渡维度。游走在巫术与真理钢丝。",
      logicEn: "Fusing greedy M3 and proto-M4, refracting M2 matter to cross dimensions.",
      patch: {
        mechanics: "逆向等价协议 + [化学微毒=高值; 通感神经=异常活跃]",
        mechanicsEn: "Reverse_Equivalent_EXCHANGE + [Tox_Level=High]",
        aesthetic: "暗炉绿火、腥红石芒、挂满房间的干枯动物骨、六芒星。",
        aestheticEn: "Green hearth flame, dark red stone glow, dry bones, hexagrams.",
        runtime: "IF (意外将自己一半灵魂永远炼入生铁) THEN (陷于永恒夹缝剧痛)。",
        runtimeEn: "IF (Accidentally_Transmutes_Soul_Into_Pig_Iron) THEN (Eternal rift torture)."
      }
    },
    {
      id: "librarian",
      name: "图书管理员",
      nameEn: "Librarian",
      def: "守卫无尽知识纸张废墟的寂静守门人。",
      defEn: "Silent gatekeeper of endless paper ruins.",
      core: "【换喻】发霉排架尽头的孤灯与被万千他人人生压垮的声带",
      coreEn: "【Metonymy】Lonely lamp in moldy stacks; vocal cords crushed by books.",
      logic: "守着人类符号体系的最大陵墓（M4）。海量信息将其挤压至稀薄态（M1），化为系统的活索引。",
      logicEn: "Guards the greatest M4 mausoleum. Huge info-mass squeezes them into pure index.",
      patch: {
        mechanics: "陵墓溯源协议 + [发声率=极低; 多维检索=满载]",
        mechanicsEn: "Mausoleum_TRACE + [Voice_Rate=Low]",
        aesthetic: "高不可攀暗黑书墙、丁达尔灰尘、滑轮梯摩擦、缄默手势。",
        aestheticEn: "Soaring dark shelves, dusty Tyndall effect, rolling ladder, shush gestures.",
        runtime: "IF (翻开以己血写就记录自己未来死亡的禁书M6) THEN (沦入死循环虚渊)。",
        runtimeEn: "IF (Opens_Blood-Written_Book_Of_Own_Doom) THEN (Falls into infinite loop)."
      }
    },
    {
      id: "navigator",
      name: "领航员",
      nameEn: "Navigator",
      def: "在星群或风暴中用理智划线，整搜船只的最后眼眸。",
      defEn: "Rational lines in stars and storms; the final eyes of the vessel.",
      core: "【换喻】发白手指紧捏的罗盘与直视黑海深渊的空眸",
      coreEn: "【Metonymy】White knuckles on compass; hollow eyes into abyss.",
      logic: "用极简测算（M4）抗击无定型致命虚空（M6/M2），避免彻底的维度迷失。",
      logicEn: "Uses frail M4 calc against lethal M6 void/storm. Anchoring lostness.",
      patch: {
        mechanics: "防迷失锚定协议 + [闭星图重构力=变态级别; 绝望抵抗力=满]",
        mechanicsEn: "Anti-Lost_ANCHOR + [Mental_Map=Insane]",
        aesthetic: "磨白牛皮海图/星图、冰冷六分仪、窗外狂暴巨浪狂星、眉间汗滴。",
        aestheticEn: "Worn charts, cold sextant, rogue waves/stars outside, sweating brows.",
        runtime: "IF (发现所有坐标终点均指向吞噬理智的超大黑洞球体) THEN (M4系统被宏大宇宙恶意粉碎)。",
        runtimeEn: "IF (All_Coords_Point_To_All-Consuming_Singularity) THEN (M4 shattered by malice)."
      }
    },
    {
      id: "botanist",
      name: "植物学家",
      nameEn: "Botanist",
      def: "避世沟通绿意，偏执解剖自然汁液的异端分子。",
      defEn: "Reclusive greenery whisperer; paranoid dissecting sap.",
      core: "【换喻】切开毒性兰花的银剪与从血管皮肉钻出的假想藤蔓",
      coreEn: "【Metonymy】Silver snips on toxic orchids; phantom vines from veins.",
      logic: "厌弃人类复杂符号争斗（M3/M4），将存在意义（M1）嫁接至病态而纯粹的生长性真实界（植物 M2）。",
      logicEn: "Rejects human M3/M4 fray. Grafts ontology M1 onto the silent, morbid growth the plant Real M2.",
      patch: {
        mechanics: "光合血肉代持协议 + [同族厌恶力=超标; 毒化耐受=变异]",
        mechanicsEn: "Photosynthetic_FLESH_PROXY + [Tox_Tolerance=Mutant]",
        aesthetic: "潮热温室、流出暗绿浆液的活体根茎被切、指缝黑土的腥甜。",
        aestheticEn: "Sweaty greenhouses, bleeding green rhizomes, bloody soil under nails.",
        runtime: "IF (耗尽毕生种出以人类绝望为食并会说话的魔物花朵) THEN (献祭肉身任其进食)。",
        runtimeEn: "IF (Grows_Talking_Demon_Flower_Eating_Despair) THEN (Sacrifices flesh to it)."
      }
    },
    {
      id: "inventor",
      name: "发明家",
      nameEn: "Inventor",
      def: "狂热地强行实体化脑内齿轮组件的爆破创造者。",
      defEn: "Feverishly manifesting brain-gears into explosive reality.",
      core: "【换喻】飞迸满屋的锐利废铁与图纸上几近疯癫的线条网",
      coreEn: "【Metonymy】Sharp scrap raining down; mad scribbles on blueprints.",
      logic: "不容忍现行粗劣现实。强行用个人幻想（M1）破开现实（M2），嫁接产生全新的物理动能机器（M5）。",
      logicEn: "Intolerant of crude reality. Force-fuses M1 fantasy onto M2, birthing new M5 engines.",
      patch: {
        mechanics: "妄想物理击穿协议 + [手部改造瘾=狂热; 炸膛概率=日常]",
        mechanicsEn: "Flesh-Metal_PIERCING + [Explosion_Risk=Daily]",
        aesthetic: "满地螺母油污车间、黑烟爆炸脸、冒着火星的老旧气阀炉、不合时宜狂笑。",
        aestheticEn: "Oil-nut shop floors, soot-blackened faces, sparking valves, manic laughs.",
        runtime: "IF (最大心血被财阀剽窃去批量制成杀戮贫民的生化雷霆) THEN (制超危炸弹实行神风特攻)。",
        runtimeEn: "IF (Life_Work_Stolen_For_Mass-Slaughter) THEN (Builds antimatter suicide vest)."
      }
    },
    {
      id: "astronomer",
      name: "天文学家",
      nameEn: "Astronomer",
      def: "抬头仰视限界深空，用数字频谱丈量孤独深渊的人。",
      defEn: "Looking up at limit space, measuring lonely abysses via spectra.",
      core: "【换喻】倒映死星系的厚重镜片与被射电底噪压成粉末的微弱呼吸",
      coreEn: "【Metonymy】Lenses mirroring dead galaxies; breath crushed by radio scatter.",
      logic: "用高维数学光学（M4）凝视连光都逃不出的极度虚无（M6）。对世俗金钱情感（M3）脱敏。",
      logicEn: "Uses optics/math M4 to stare into inescapable M6 void. Desensitized to M3.",
      patch: {
        mechanics: "宏大叙事接收协议 + [主体稀薄感=被极致压扁; 跨光年感知=通]",
        mechanicsEn: "Grand_Narrative_RECV + [Subject_Thinned=MAX]",
        aesthetic: "高海拔冰冷圆顶、裂开的浩瀚银河、复杂干涉仪表图谱、冷咖啡。",
        aestheticEn: "Freezing high domes, cracked galaxy views, complex dials, cold coffee.",
        runtime: "IF (在捕捉的宇宙微波背景杂音中听见死去独女不断呼救声) THEN (极观与极微相撞导致的认知彻底瓦解)。",
        runtimeEn: "IF (Hears_Dead_Daughter_Crying_In_Cosmic_Background_Radiation) THEN (Cognitive apocalypse)."
      }
    }
  ]
};
