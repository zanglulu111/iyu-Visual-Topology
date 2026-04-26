import { LibraryItemDef } from '../../../types';
import { M0_BASE_PROTOCOLS } from './00_base_protocols';

/**
 * M0 精神拓扑 — 11 种结构子型
 *
 * M0 是包裹公式的逻辑闭包。它锁定的是结构（不变量），不是症状（表征）。
 * 结构决定主体处理缺失的根本法则，终生不变。
 * 症状是驱力(M5)流经结构时涌现的具体管道，不在此处选取。
 *
 * 四大基类: NEUROSIS(折叠) / PERVERSION(翻转) / PSYCHOSIS(撕裂) / AUTISM(合拢)
 * 11 子型: 癔症 / 强迫症 / 恐惧症 / 恋物 / 施虐-受虐 / 窥视-暴露 / 偏执 / 精神分裂 / 忧郁症 / 寻常精神病 / 孤独症
 *
 * 导出名 ENGINE_M0_OS 维持向下兼容。
 */
export const ENGINE_M0_OS: LibraryItemDef[] = [

  // ═══════════════════════════════════════════════════════════════════
  // A. 神经症 (Neurosis) — 折叠协议
  // 承认缺失，承认法律，内耗生热
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "os_neurosis_hysteria",
    name: "癔症", nameEn: "Hysteria",
    group: "A. 神经症/折叠", groupEn: "Neurosis / Folding",
    def: "永远在追问'你到底要我怎样'——不是为了得到答案，而是为了让问题本身永远悬着。答案一旦落地，存在就塌了。",
    defEn: "Forever asking 'What do you want from me?' — not for an answer, but to keep the question suspended. The moment an answer lands, existence collapses.",
    core: "主体通过不断向大他者发出质询来维持自身存在。身体是舞台——未能说出的话会短路进入肉体，变成症状。永远在'成为'，永远不'是'。",
    coreEn: "The subject sustains existence through perpetual questioning of the Other. The body is the stage — unspoken words short-circuit into flesh and become symptoms. Always becoming, never being.",
    reference: "《钢琴教师》Erika（向母亲和学生的双向质询）；《黑天鹅》Nina（'我够完美吗'的致命追问）；《安娜·卡列尼娜》Anna（向Vronsky的无尽索求）；Dora（弗洛伊德经典癔症个案）",
    referenceEn: "Erika in The Piano Teacher; Nina in Black Swan; Anna Karenina; Dora (Freud's classic hysteria case)",
    topology: "朝大他者发射永不闭合的问题 → 问题本身成为存在的支撑 → 身体接管语言失败的部分",
    directive: "主角的核心动力是一个永远悬置的问题——她不是不知道答案，而是答案会杀死她。写她向某个权威、某段关系、或某面镜子反复发出质询的过程。她的身体会替她说话：头痛、失声、痉挛、晕厥——但这些不是装的，是真的。让观众看见一个人如何用提问代替活着。她的魅力和她的痛苦是同一个东西。",
    logic: "M4传导=内化阻尼(法律转化为无限质询); M1→M5转化率<30%(能量被质询本身消耗); 身体可作为症状舞台; 严禁让主角获得明确答案或彻底的自我认知——答案=存在性死亡。",
    logicEn: "M4=Internalized questioning loop; M1→M5<30% (energy consumed by questioning itself); body as symptom stage; FORBID: subject getting a definitive answer or complete self-knowledge.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.NEUROSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.NEUROSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.NEUROSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.NEUROSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.NEUROSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.NEUROSIS.runtimeEn
    }
  },

  {
    id: "os_neurosis_obsession",
    name: "强迫症", nameEn: "Obsessional Neurosis",
    group: "A. 神经症/折叠", groupEn: "Neurosis / Folding",
    def: "用思考替代行动，用仪式替代活着——只要规则足够完美，欲望就永远碰不到我。",
    defEn: "Thinking replaces action, ritual replaces living — if the rules are perfect enough, desire can never touch me.",
    core: "主体通过思维的无限延宕来冻结欲望的涌动。强迫性仪式是对抗存在焦虑的堤坝——每一次重复都是在确认'我还在控制'。但控制本身成了牢笼。",
    coreEn: "The subject freezes desire's surge through infinite deferral of thought. Compulsive rituals are levees against existential anxiety — each repetition confirms 'I'm still in control.' But control itself becomes the cage.",
    reference: "《飞行家》Howard Hughes（完美主义→强迫仪式的螺旋）；《火柴人》Roy（用洁癖和秩序隔绝世界）；《笔记本》中的数学家John Nash；鼠人（弗洛伊德经典强迫症个案）",
    referenceEn: "Howard Hughes in The Aviator; Roy in Matchstick Men; the Rat Man (Freud's classic obsessional case)",
    topology: "思维占据行动的位置 → 仪式替代欲望的运动 → 完美控制即完美瘫痪",
    directive: "主角用秩序和规则把自己裹得密不透风。写他的仪式——不一定是洗手或数数，可以是任何重复性的控制行为：反复检查、过度计划、永远在'准备'而不'开始'。他的聪明是真的，他的瘫痪也是真的。让观众看见一个大脑在全速运转却哪儿也去不了的人。他最怕的不是失败，是失控。",
    logic: "M4传导=内化阻尼(法律转化为自我审查仪式); M1→M5转化率<20%(极度延宕,思维替代行动); 严禁让主角'放下执念'或'学会随性'——控制是他的氧气,拿走控制=窒息。",
    logicEn: "M4=Self-censoring ritual; M1→M5<20% (extreme deferral, thought replaces action); FORBID: subject 'letting go' or 'learning spontaneity' — control is oxygen.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.NEUROSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.NEUROSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.NEUROSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.NEUROSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.NEUROSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.NEUROSIS.runtimeEn
    }
  },

  {
    id: "os_neurosis_phobia",
    name: "恐惧症", nameEn: "Phobia",
    group: "A. 神经症/折叠", groupEn: "Neurosis / Folding",
    def: "把无处不在的焦虑钉死在一个具体的东西上——只要躲开那个东西，世界就还是安全的。",
    defEn: "Nailing boundless anxiety to one specific thing — as long as you avoid that thing, the world stays safe.",
    core: "弥散性焦虑被浓缩到一个可以命名、可以回避的对象上。恐惧对象是主体亲手制造的'安全栏杆'——没有它，焦虑就无处落脚，反而更可怕。回避不是软弱，是主体发明的地图。",
    coreEn: "Diffuse anxiety is condensed onto a nameable, avoidable object. The phobic object is a 'safety railing' the subject manufactures — without it, anxiety has nowhere to land, which is worse. Avoidance isn't weakness; it's the subject's invented map.",
    reference: "《迷魂记》Scottie（恐高作为欲望的位移）；《大开眼戒》Bill（对性真相的回避即恐惧结构）；小汉斯（弗洛伊德经典恐惧症个案——对马的恐惧）",
    referenceEn: "Scottie in Vertigo (acrophobia as displaced desire); Bill in Eyes Wide Shut; Little Hans (Freud's classic phobia case)",
    topology: "弥散焦虑 → 浓缩到一个可命名对象 → 回避路线即存在地图 → 地图边界=世界边界",
    directive: "主角的世界有一条清晰的边界：这边安全，那边致命。写他围绕恐惧对象建造的整套回避系统——路线、习惯、借口。这套系统是精密的，甚至优雅的。但代价是他的世界越缩越小。让观众看见：他怕的不是那个具体的东西，他怕的是那个东西消失之后露出来的、没有名字的虚空。",
    logic: "M4传导=位移凝缩(焦虑被转移到可命名对象); M1→M5转化率=仅在回避领域有效,跨域即瘫痪; 恐惧对象必须始终在场(即使被回避); 严禁让主角彻底'克服恐惧'——恐惧对象消失=更大的焦虑涌入。",
    logicEn: "M4=Displacement condensation; M1→M5=effective only within avoidance territory; phobic object must stay present; FORBID: complete 'overcoming' of fear.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.NEUROSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.NEUROSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.NEUROSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.NEUROSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.NEUROSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.NEUROSIS.runtimeEn
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // B. 性倒错 (Perversion) — 翻转协议
  // 知道缺失，否认法律，工具化超导
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "os_perversion_fetishism",
    name: "恋物", nameEn: "Fetishism",
    group: "B. 性倒错/翻转", groupEn: "Perversion / Inversion",
    def: "我知道那只是一只鞋/一块布/一个数据——但没有它，整个欲望的回路就断电了。",
    defEn: "I know it's just a shoe / a fabric / a datum — but without it, the entire circuit of desire goes dark.",
    core: "主体知道缺失存在，但通过将一个物件升格为'不可或缺的欲望开关'来否认它。恋物对象是缺失的假体——它不填补空洞，它让空洞可以被忽略。'我知道，但即便如此……'",
    coreEn: "The subject knows the lack exists but disavows it by elevating an object to 'indispensable desire switch.' The fetish is a prosthesis for lack — it doesn't fill the void, it makes the void ignorable. 'I know, but even so...'",
    reference: "《蓝丝绒》Frank（蓝色丝绒布料作为欲望的绝对开关）；《恋物》系列中的收藏癖者；马尔克斯笔下对特定物件的迷恋仪式",
    referenceEn: "Frank in Blue Velvet (blue velvet fabric as absolute desire switch); obsessive collectors; Márquez's ritualistic object fixations",
    topology: "承认缺失 → 但找到一个对象作为假体 → 假体在场=安全 / 假体缺席=系统崩溃",
    directive: "主角的世界围绕一个物件旋转。可以是任何东西——一件衣物、一种触感、一个声音、一组数字。没有这个东西他也能活，但他选择不能活。写他与这个物件之间的关系像一段秘密婚姻：他知道它'只是一个东西'，但这个'知道'丝毫不减弱它的必要性。让观众看见否认的精确结构：不是不知道真相，是知道真相但拒绝让它生效。",
    logic: "M4传导=杠杆效应(法律被架空); M1→M5≈100%(超导,主体=工具); 必须有一个具体的恋物对象贯穿全片; 'je sais bien, mais quand même'结构必须可见; 严禁让主角'意识到执着的荒谬'并放下——否认不是无知,放下否认=主体解体。",
    logicEn: "M4=Leverage; M1→M5≈100% (superconducting); a specific fetish object must persist throughout; disavowal structure must be visible; FORBID: subject 'realizing the absurdity' and letting go.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PERVERSION.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PERVERSION.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PERVERSION.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PERVERSION.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PERVERSION.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PERVERSION.runtimeEn
    }
  },

  {
    id: "os_perversion_sadomasochism",
    name: "施虐-受虐", nameEn: "Sadomasochism",
    group: "B. 性倒错/翻转", groupEn: "Perversion / Inversion",
    def: "把痛苦变成契约，把契约变成快感的唯一通道——不是因为享受疼痛，而是因为只有在疼痛的精确刻度里，主体才觉得自己真的存在。",
    defEn: "Pain becomes contract, contract becomes the sole channel for jouissance — not because pain is enjoyed, but because only within pain's precise calibration does the subject feel real.",
    core: "施虐与受虐是同一结构的两面：主体将自身变成大他者享乐的工具。施虐者执行法律到极端——'你看，法律要求的就是这个'；受虐者邀请法律的惩罚——'打我，证明规则存在'。两者都在用身体写一份关于法律极限的论文。",
    coreEn: "Sadism and masochism are two faces of one structure: the subject becomes the instrument of the Other's jouissance. The sadist enforces law to its extreme — 'See, this is what the law demands'; the masochist invites punishment — 'Strike me, prove the rules exist.' Both write a thesis on law's limits using the body.",
    reference: "《感官世界》阿部定（快感与死亡的精确契约）；《秘书》Lee（受虐作为自我发现的仪式）；萨德侯爵文本；《毛皮里的维纳斯》",
    referenceEn: "Abe Sada in In the Realm of the Senses; Lee in Secretary; Marquis de Sade; Venus in Furs (Sacher-Masoch)",
    topology: "法律被推向极限 → 痛苦成为契约条款 → 契约精确度=快感精确度 → 工具化的主体",
    directive: "主角把自己或他人变成一份精密契约的执行者。这里没有失控——施虐-受虐的核心是绝对的控制和绝对的同意。写他们之间的仪式性：每一步都是商量好的，每一个刻度都是精确的。但让观众看到仪式背后的东西——不是变态，是一个人只能在痛苦的精确框架里才能感受到自己存在。去掉契约，不是自由，是坠落。",
    logic: "M4传导=杠杆效应(法律被推向极限以暴露其本质); M1→M5≈100%(身体=工具,超导转化); 必须有明确的契约/仪式结构; 施虐和受虐是结构位置,不是性格标签; 严禁写成'变态'或'病态'——这是一种关于法律极限的哲学实践。",
    logicEn: "M4=Leverage (law pushed to extreme); M1→M5≈100%; explicit contract/ritual structure required; sadism/masochism are structural positions not personality labels; FORBID: portraying as 'perversion' or 'pathology.'",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PERVERSION.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PERVERSION.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PERVERSION.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PERVERSION.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PERVERSION.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PERVERSION.runtimeEn
    }
  },

  {
    id: "os_perversion_scopophilia",
    name: "窥视-暴露", nameEn: "Scopophilia-Exhibitionism",
    group: "B. 性倒错/翻转", groupEn: "Perversion / Inversion",
    def: "'看'与'被看'不是动作，是存在方式——我通过他者的目光确认自己在这里，或者通过窥视他者的秘密确认我还活着。",
    defEn: "'Seeing' and 'being seen' are not actions but modes of existence — I confirm I'm here through the Other's gaze, or confirm I'm alive by watching the Other's secret.",
    core: "窥视者在目光中偷取存在的证据；暴露者在被看中制造存在的确认。两者都把'目光'当作存在论的基础设施——没有目光的投射或接收，主体就陷入不确定性。这不是好奇心，是存在性饥饿。",
    coreEn: "The voyeur steals proof of existence through the gaze; the exhibitionist manufactures existential confirmation through being seen. Both treat 'the gaze' as ontological infrastructure — without projecting or receiving it, the subject falls into uncertainty. Not curiosity, but existential hunger.",
    reference: "《后窗》Jeffries（窥视作为瘫痪者的生命线）；《窃听风暴》Wiesler（通过窃听他人获得自己缺失的人生）；《楚门的世界》Truman（被看而不自知的暴露结构）",
    referenceEn: "Jeffries in Rear Window; Wiesler in The Lives of Others; Truman in The Truman Show",
    topology: "目光成为存在的基础设施 → 看/被看=活着的唯一证据 → 目光中断=存在中断",
    directive: "主角活在目光的经济学里。写一个窥视者：他不是在偷看隐私，他是在别人的生活里寻找自己缺失的部分。或写一个暴露者：她不是在炫耀，她是在确认'如果没有人看见我，我是否存在'。让观众感受到目光的重量——看与被看不是感官行为，是呼吸。断开目光=窒息。",
    logic: "M4传导=杠杆效应(法律被绕行,通过目光的秘密通道); M1→M5≈100%(超导); 必须有明确的'看/被看'的空间结构(窗口/屏幕/镜头/舞台); 目光不是好奇心,是存在论基础设施; 严禁将窥视简化为'偷窥癖'——它是主体对存在确认的饥饿。",
    logicEn: "M4=Leverage via gaze's secret channel; spatial seeing/seen structure required (window/screen/lens/stage); gaze is ontological infrastructure not curiosity; FORBID: reducing to 'peeping.'",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PERVERSION.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PERVERSION.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PERVERSION.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PERVERSION.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PERVERSION.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PERVERSION.runtimeEn
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // C. 精神病 (Psychosis) — 撕裂协议
  // 排除大他者，真实界直涌
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "os_psychosis_paranoia",
    name: "偏执", nameEn: "Paranoia",
    group: "C. 精神病/撕裂", groupEn: "Psychosis / Rupture",
    def: "世界不是混乱的——恰恰相反，它太有秩序了。每一个细节都指向我，每一个巧合都是阴谋的证据。",
    defEn: "The world isn't chaotic — on the contrary, it's too orderly. Every detail points to me; every coincidence is proof of conspiracy.",
    core: "大他者被排除(Forclusion)后，从外部以迫害者的面目返回。偏执主体不是'多疑'，而是在建造一个自洽的解释系统来填补象征秩序的空洞。妄想是主体的自我修复尝试——一个疯狂的、但完整的世界，好过一个碎裂的世界。",
    coreEn: "After the Other is foreclosed, it returns from outside as persecutor. The paranoid subject isn't 'suspicious' but constructing a self-consistent interpretive system to fill the void in the symbolic order. Delusion is self-repair — a mad but complete world beats a shattered one.",
    reference: "《美丽心灵》Nash（数学天才构建的完美阴谋体系）；《闪灵》Jack（酒店'一直都在等你'的全域迫害）；《第六感》中以幻觉重建世界的结构；Schreber法官（弗洛伊德经典偏执个案）",
    referenceEn: "Nash in A Beautiful Mind; Jack in The Shining; Schreber (Freud's classic paranoia case)",
    topology: "象征秩序空洞 → 大他者从外部返回为迫害者 → 妄想体系填补空洞 → 解释系统越完美,囚笼越密实",
    directive: "主角的世界有一套自洽到令人毛骨悚然的逻辑。他不是在'疑神疑鬼'——他在建造一座大教堂。写他的推理链：A证明了B，B连接了C，C解释了为什么那个人在那个时间出现在那个地方。每一环都严丝合缝。让观众感受到他的系统的美感——然后让观众意识到这座大教堂建在虚空之上。不要嘲笑他，要让观众感到寒意：如果他是对的呢？",
    logic: "M4传导=直通穿透(法律无约束力,规则=背景噪音); M1→M5=非线性脉冲; 必须有完整的妄想解释体系; 妄想是修复而非病态; 严禁让主角'醒悟'并接受'这只是巧合'——妄想体系崩塌=主体崩塌。",
    logicEn: "M4=Direct penetration (law has no binding force); M1→M5=nonlinear pulse; complete delusional system required; delusion is repair not pathology; FORBID: subject 'awakening' to accept coincidence.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PSYCHOSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PSYCHOSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PSYCHOSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PSYCHOSIS.runtimeEn
    }
  },

  {
    id: "os_psychosis_schizophrenia",
    name: "精神分裂", nameEn: "Schizophrenia",
    group: "C. 精神病/撕裂", groupEn: "Psychosis / Rupture",
    def: "所有的信号同时涌入，没有滤网，没有优先级——世界以全部的噪音直接灌入主体。",
    defEn: "All signals flood in simultaneously — no filter, no priority. The world pours its full noise directly into the subject.",
    core: "能指链断裂：词与词之间的关联解体，'这个词就是那个物'。没有隐喻的缓冲，所有信息以等权重同时抵达。主体不是'分裂成两半'，而是象征秩序的滤网消失了，真实界像白噪音一样灌满每一个缝隙。",
    coreEn: "The signifying chain breaks: links between words dissolve, 'the word IS the thing.' No metaphorical buffer; all information arrives at equal weight simultaneously. Not 'split in two' but the symbolic filter vanishes, and the Real floods every gap like white noise.",
    reference: "《禁闭岛》Teddy（叙事本身在分裂）；《穆赫兰道》（能指链断裂后的梦境碎片重组）；《裸体午餐》（语言即虫子，词=物）；Wolfman（拉康讨论的精神分裂结构）",
    referenceEn: "Teddy in Shutter Island; Mulholland Drive; Naked Lunch; Wolfman (Lacan's schizophrenia discussion)",
    topology: "能指链断裂 → 滤网消失 → 所有信号等权重涌入 → 词=物,隐喻消亡",
    directive: "主角的世界没有前景和背景的区别。一只苍蝇的嗡嗡声和一个人的呼喊具有同等重量。写他的感知：不是模糊，是过度清晰——每一个细节都以100%的信号强度同时抵达。景深崩塌了。让观众体验他的信息过载：不是疯了，是滤网没了。他说的话可能在语法上是完美的，但词与词之间的逻辑链接已经断了。",
    logic: "M4传导=直通穿透; M1→M5=非线性脉冲(行动与冲动无中介); 景深崩塌(背景物件=前景同等语义权重); 能指密度=饱和(词就是物本身); 严禁使用隐喻——在这个结构里,隐喻不存在,一切都是字面的。",
    logicEn: "M4=Direct penetration; M1→M5=nonlinear; depth-of-field collapse; signifier density=saturated; FORBID: metaphor — in this structure everything is literal.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PSYCHOSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PSYCHOSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PSYCHOSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PSYCHOSIS.runtimeEn
    }
  },

  {
    id: "os_psychosis_melancholia",
    name: "忧郁症", nameEn: "Melancholia",
    group: "C. 精神病/撕裂", groupEn: "Psychosis / Rupture",
    def: "失去的东西已经变成了我的一部分——我不是在哀悼它，我就是那个空洞。",
    defEn: "What was lost has become part of me — I'm not mourning it, I AM the void.",
    core: "与哀悼不同，忧郁症中丧失的对象没有被放手，而是被吞入自我。主体与丧失之物融为一体，对失物的攻击性转向自身。'我一文不值'不是低自尊，是一个精确的存在论判断——因为我就是那个已经死去的东西。",
    coreEn: "Unlike mourning, in melancholia the lost object isn't released but swallowed into the ego. The subject merges with what's lost; aggression toward the object turns inward. 'I am worthless' isn't low self-esteem but a precise ontological judgment — because I AM the dead thing.",
    reference: "《忧郁症》Justine（末日不是比喻，末日就是她）；《海边的曼彻斯特》Lee（无法完成的哀悼，永远凝固在丧失的瞬间）；《挪威的森林》直子（与死者融合的生者）",
    referenceEn: "Justine in Melancholia; Lee in Manchester by the Sea; Naoko in Norwegian Wood",
    topology: "丧失的对象被吞入自我 → 主体与失物融合 → 对失物的攻击转向自身 → 我=空洞",
    directive: "主角不是在'难过'。他已经和他失去的东西变成了同一个东西。写他的静止——不是消沉，是一种物理性的重力异常：他坐在那里，周围的空气都比别处重。他对自己的判断（'我不值得''我是废物'）不是情绪低落，是一种冰冷的、逻辑性的确信。让观众看见：他不是在哀悼死者，他自己就是那个已经死了的人——只是身体还在走动。",
    logic: "M4传导=直通穿透; 丧失的对象必须被内化(不是在外面,是在里面); 自我攻击是结构性的,不是情绪性的; 严禁让主角通过'接受丧失'而痊愈——忧郁不是没走出来的哀悼,是完全不同的结构。",
    logicEn: "M4=Direct penetration; lost object must be internalized; self-attack is structural not emotional; FORBID: recovery through 'accepting loss' — melancholia is not unfinished mourning, it's a different structure.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PSYCHOSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PSYCHOSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PSYCHOSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PSYCHOSIS.runtimeEn
    }
  },

  {
    id: "os_psychosis_ordinary",
    name: "寻常精神病", nameEn: "Ordinary Psychosis",
    group: "C. 精神病/撕裂", groupEn: "Psychosis / Rupture",
    def: "看起来完全正常——直到某个不可预测的瞬间，地板消失了。他不知道自己站在虚空上方。",
    defEn: "Appears perfectly normal — until one unpredictable instant when the floor vanishes. He doesn't know he's standing above the void.",
    core: "大他者同样被排除，但主体通过社会性的补偿措施（过度认同一个身份、极端依附某个关系或意识形态）暂时缝合了裂口。日常运转完好无缺，但这种'正常'是一座没有地基的建筑——当补偿物被抽走时（失业/失恋/身份动摇），精神病性解体可能瞬间爆发。Miller称之为'没有触发的精神病'。",
    coreEn: "The Other is equally foreclosed, but the subject temporarily sutures the gap through social compensations (hyper-identification with a role, extreme attachment to a relationship or ideology). Daily functioning is intact, but this 'normality' is a building without foundation — when the compensation is removed (job loss/breakup/identity shake), psychotic decompensation may erupt instantly. Miller calls it 'psychosis without triggering.'",
    reference: "《美国精神病人》Patrick Bateman（完美的社会面具下的空洞）；《革命之路》April（在完美郊区生活中突然的解体）；《搏击俱乐部》叙述者（日常身份崩塌后的精神病性分裂）",
    referenceEn: "Patrick Bateman in American Psycho; April in Revolutionary Road; the Narrator in Fight Club",
    topology: "排除被社会面具缝合 → 日常完美运转 → 补偿物被抽走 → 地板瞬间消失",
    directive: "主角是人群中最正常的那一个。写他的正常：得体、高效、有礼、甚至迷人。但让观众慢慢感觉到'哪里不对'——不是疯狂，是一种空。他的正常太正常了。他依附于某个东西（工作/身份/关系/信仰）如同依附于氧气。写当这个东西被抽走时发生的事——不是渐进的崩溃，是一瞬间的，像地板打开了一个洞。之前的一切正常回过头来看都变成了恐怖。",
    logic: "M4传导=直通穿透(但被社会面具暂时缓冲); 必须有一个明确的补偿/锚点(工作/关系/身份); 日常运转=完美; 崩塌必须是突然的、不可预测的; 严禁写成'渐进的精神崩溃'——寻常精神病的特征是断裂的突然性。",
    logicEn: "M4=Direct penetration (temporarily buffered by social mask); explicit compensation anchor required; daily functioning=perfect; collapse must be sudden and unpredictable; FORBID: gradual breakdown.",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.PSYCHOSIS.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.PSYCHOSIS.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.PSYCHOSIS.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.PSYCHOSIS.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.PSYCHOSIS.runtimeEn
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // D. 孤独症 (Autism) — 合拢协议
  // 拒绝进入语言，自足闭环
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "os_autism",
    name: "孤独症", nameEn: "Autism",
    group: "D. 孤独症/合拢", groupEn: "Autism / Enclosure",
    def: "世界是由精确的温度、频率和纹理构成的——不是由意义构成的。他不是不理解人，他根本不使用你们的操作系统。",
    defEn: "The world is made of precise temperatures, frequencies and textures — not meanings. He doesn't fail to understand people; he simply doesn't run your operating system.",
    core: "主体未完成从实在到符号的跨越。语言不是他的母语——触觉、节奏、温度才是。他不是'社交障碍'，而是运行着一套完全不同的感知协议。外界的'暗示''潜台词''社交规则'对他来说不是困难，是不存在的维度。他的世界是自足的、闭合的、精确的——一条裂缝就足以让整个系统过载。",
    coreEn: "The subject hasn't completed the crossing from Real to Symbolic. Language isn't their mother tongue — touch, rhythm, temperature are. Not 'socially impaired' but running an entirely different perceptual protocol. 'Hints,' 'subtext,' 'social rules' aren't difficult — they're a nonexistent dimension. Their world is self-sufficient, closed, precise — one crack can overload the entire system.",
    reference: "《雨人》Raymond（数字和节奏构成的自足宇宙）；《本杰明·巴顿奇事》（时间感知的根本异质性）；《她比烟花寂寞》Jackie（感官世界与社会世界的绝对隔离）",
    referenceEn: "Raymond in Rain Man; Jackie in Hilary and Jackie; Temple Grandin (autobiographical accounts of sensory-primary existence)",
    topology: "拒绝进入符号界 → 感官=唯一的真实 → 自足闭环零损耗运转 → 边界被触碰=系统过载",
    directive: "主角活在一个由感官数据构成的精密世界里。写他的感知：不是'不懂感情'，而是他的感官通道和你的完全不同。温度是有颜色的，声音是有形状的，但'你开心吗'是一个无法解析的语句。写他的秩序：每一个物件的位置，每一个流程的步骤，都是他世界的骨架。写当边界被入侵时的反应——不是情绪崩溃，是系统过载：太多信号同时涌入，像所有频道同时打开。严禁写成'孤独的天才'或'等待被理解的纯真灵魂'。他不需要你的理解，他的世界是完整的。",
    logic: "M4传导=完全绝缘(外部法律无法穿透); M1→M5=0%对外/100%对内闭环; 禁绝比喻和象征(隐喻权重=0,感官权重=最大); 禁绝'暗示''潜台词'的理解; 严禁让主角'学会社交'或'被爱融化'——这不是一道墙,是一套不同的操作系统。",
    logicEn: "M4=Total insulation; M1→M5=0% external / 100% internal; metaphor weight=0, sensation weight=max; FORBID: understanding hints/subtext, 'learning to socialize,' or 'melted by love.'",
    patch: {
      mechanics: M0_BASE_PROTOCOLS.AUTISM.mechanics,
      mechanicsEn: M0_BASE_PROTOCOLS.AUTISM.mechanicsEn,
      aesthetic: M0_BASE_PROTOCOLS.AUTISM.aesthetic,
      aestheticEn: M0_BASE_PROTOCOLS.AUTISM.aestheticEn,
      runtime: M0_BASE_PROTOCOLS.AUTISM.runtime,
      runtimeEn: M0_BASE_PROTOCOLS.AUTISM.runtimeEn
    }
  },
];

export const ENGINE_M0_LEXICON = ENGINE_M0_OS;
