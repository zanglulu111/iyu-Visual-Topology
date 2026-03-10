import { getR2PublicUrl } from '../services/r2Storage';

export type ArchiveCategory = 'ALL' | 'NEUROSIS' | 'PSYCHOSIS' | 'PERVERSION' | 'AUTISM';

export interface CaseStudy {
    id: string;
    titleCn: string;
    titleEn: string;
    category: ArchiveCategory;
    summaryCn: string;
    summaryEn: string;
    imageUrl: string;
    date: string;
    content?: {
        dna: {
            parameters: string[];
            authorStyle: string;
            coreHook: string;
        };
        story: string[];
        report: {
            language: string;
            diagnosis: string;
            analyst: string;
            subjectState: string;
            sections: {
                title: string;
                body: string;
            }[];
            conclusion: string;
            verdict: string;
        };
    };
}

const detailedCaseContent: CaseStudy['content'] = {
    dna: {
        parameters: [
            "M0: 精神分裂 (Schizophrenia), 无器官身体 (Body without Organs), 孤独症 (Autism)",
            "M1: 流浪者 (The Drifter), 破坏者 (The Anarchist), 根茎状主体 (Rhizomatic Subject)",
            "M2: 系统崩溃 (The Crash), 大他者之死 (Death of the Big Other), 父亲的缺席 (Absence of the Father)",
            "M3: 彻底自由 (Liberation), 内在性平面 (Plane of Immanence), 去中心化 (Decentralization)",
            "M4: 官僚迷宫 (The Bureaucracy), 垂直逻辑 (Vertical Logic), 微法西斯主义 (Micro-Fascism)",
            "M5: 无尽游荡 (Endless Wandering), 去领土化 (Deterritorialization), 精神分裂漫游 (Schizo-Stroll)",
            "M6: 自我消解 (Dissolution), 意义丧失 (Loss of Meaning), 语言瓦解 (Collapse of Language)",
            "M7: 开放式虚无 (Open Void), 平滑空间 (Smooth Space), 生成-动物 (Becoming-Animal)"
        ],
        authorStyle: "库布里克 (Stanley Kubrick)",
        coreHook: "在一个重力与逻辑同时失效的混凝土迷宫中，唯一的清道夫必须销毁人类试图重建“父权”的最后一块芯片，将世界归还给绝对的寂静。"
    },
    story: [
        "镜头以绝对对称的视角推进，穿过一条没有尽头的混凝土长廊。这里没有天空，只有上方无限堆叠的楼板；没有大地，只有下方深不见底的电梯井。在这个被称作“第14区”的世界里，时间不再是线性的河流，而是凝固在钢筋上的铁锈。",
        "K 并不是一个传统意义上的人。他穿着一件拼接了无数种材质的防风衣，那是他从尸体上剥离下来的碎片组成的第二层皮肤。他戴着一副巨大的工业降噪耳机，不是为了听音乐，而是为了隔绝那些试图钻进他脑子里的“噪音”——那些关于秩序、关于排名、关于“你应该成为谁”的古老低语。K 的工作是清理。在这个巨大的烂尾楼骨架中，总有一些角落会像真菌一样滋生出光亮。那是“建筑师”们的巢穴。这些旧时代的遗民无法忍受没有红绿灯和打卡机的日子，他们疯狂地搜集废弃的服务器，试图在一个没有屋顶的房间里重新建立金字塔。",
        "故事开始于一次例行的狩猎。K 在那个被烟尘笼罩的中庭发现了一丝违和的几何形状——一排整齐亮起的日光灯。在混乱的废土美学中，这种整齐划一不仅刺眼，而且是一种病变。他穿过扭曲的楼梯，脚步声在空旷的结构中回荡，仿佛某种丧钟。他没有潜行，因为在这个世界里，隐蔽意味着承认对方拥有视线的主权。K 直接撞碎了那扇用废铁焊接的大门。",
        "房间里是一场荒诞的弥撒。十几个人跪在地上，面对着一台正在嗡嗡作响的旧式服务器机柜。机柜上贴着褪色的标签：“中央逻辑库”。领头的是一个自称“总工程师”的老人，他手里紧紧攥着一块闪烁着蓝光的芯片，那神情仿佛那是摩西的石板。他们正在试图重启“系统”，那个曾经给每个人编号、定岗、分配痛苦与快乐的庞大幽灵。老人看到 K 的瞬间，并没有拔枪，而是开始宣讲。他颤抖着列举了秩序的美好：恒定的电力、安全的睡眠、可预测的明天。他的声音在空荡的房间里产生混响，像是一种诱人的催眠。",
        "然而，镜头冷漠地对准了 K 的瞳孔。那里没有动摇，只有死水般的平静。K 摘下耳机，听到的不是真理，而是齿轮咬合的尖锐噪音，是无数个灵魂被挤压进格子里发出的惨叫。对于 K 来说，老人手中的芯片不是救赎，而是一个巨大的模具，准备再次将所有人切割成标准化的砖块。这种垂直的渴望，这种想要跪拜什么的本能，正是让 K 感到反胃的根源。",
        "冲突没有那种好莱坞式的火爆枪战。它更像是一场外科手术。K 甚至没有奔跑，他只是以一种机械的、不可阻挡的步伐走向祭坛。信徒们扑上来，试图用身体阻挡这股混乱的洪流，但在 K 的电击警棍下，他们的肢体像坏掉的木偶一样抽搐、倒下。这种暴力被处理得极度风格化：没有血浆飞溅的特写，只有肢体在几何空间中扭曲的剪影，伴随着诡异的华尔兹配乐，仿佛一场献给虚无的舞蹈。",
        "最终，K 站在了老人面前。老人绝望地举起芯片，尖叫道：“没有它，我们就是野兽！我们不知道该去哪里！”K 停顿了片刻，他的影子在日光灯下拉得很长，覆盖了老人颤抖的身躯。他伸出手，不是为了辩论，而是为了剥夺。他夺过那块温热的芯片，那是旧世界心脏的最后一次跳动。",
        "房间的一角是一个用来销毁废料的强酸池，绿色的液体翻滚着恶毒的气泡。K 没有任何仪式性的停顿，手腕轻轻一翻。芯片落入酸液，发出“滋滋”的声响，蓝光闪烁了两下，彻底熄灭。紧接着，服务器停止了嗡嗡声，日光灯一排排炸裂。黑暗像潮水一样瞬间淹没了房间，也淹没了老人的哭嚎。",
        "结局定格在一个极度安静的长镜头中。K 重新戴上耳机，世界再次回到了那种令人安心的、无序的寂静。他转身走向黑暗深处，那里没有出口，没有方向，只有无限延伸的水平线。并没有什么新的黎明升起，但也没有了等待黎明的焦虑。黑暗本身，就是一种仁慈。"
    ],
    report: {
        language: "简体中文",
        diagnosis: "代号 [第14区]",
        analyst: "Visionary (Lacanian/Zizekian Mode)",
        subjectState: "后俄狄浦斯时期的精神分裂症漫游",
        sections: [
            {
                title: "I. 结构拆解 (Structural Dissection)",
                body: "本叙事并非通过传统的“英雄旅程”构建，而是一个关于拓扑结构塌陷的方程式。我们不仅是在阅读一个故事，而是在目睹一场代数运算，其核心算式为：\n\nSubject (K) = Anti-Oedipus (Deterritorialization) / The Father (Vertical Logic) -> Zero (The Void)\n\n1. M1 (主体/K)： 他不仅是流浪者，他是反俄狄浦斯（Anti-Oedipus）的化身。他的耳机不仅是物理屏障，更是能指链（Signifier Chain）的阻断剂。他拒绝被“召唤”（Interpellation），拒绝回应意识形态对他身份的询问。\n2. M4 (阻断/总工程师)： 这个角色并不代表人，他代表神经症（Neurosis）的结构性怀旧。他试图重建的金字塔，是树状逻辑（Arborescent Logic）的最后堡垒，试图在无序的根茎（Rhizome）世界中强行插入一个垂直的轴心。\n3. Obj (客体/芯片)： 这不是科技产品，这是菲勒斯（The Phallus/Master Signifier）。它是意义的锚点，是那个保证“如果我服从，我就能获得剩余快感”的虚假承诺。\n4. M5 (动作/销毁)： 投入酸池的动作不是破坏，而是去领土化（Deterritorialization）的终极仪式。酸液将坚硬的“形式”还原为流动的“物质”。"
            },
            {
                title: "II. 拉康派拓扑学 (The Real, The Symbolic, The Imaginary)",
                body: "1. 想象界 (The Imaginary): 光亮的金字塔\n信徒们跪拜的并非服务器，而是镜像阶段（Mirror Stage）的完整性幻觉。日光灯构建的几何形状，是他们用来修补破碎自我的胶水。他们无法忍受作为“无器官身体”的自由，因此必须想象出一个并不存在的“大他者”来监视自己，从而获得安全感。那种“秩序的美好”，不过是婴儿渴望回到子宫的退行性幻想。\n\n2. 象征界 (The Symbolic): 芯片与语言\n老人手中的芯片是大他者的名字（Name-of-the-Father）。它代表了律法、切割和阉割。只要芯片存在，世界就被划分为“0”和“1”，痛苦就被编码为“必要的代价”。K 的暴力不是为了夺取权力，而是为了废黜象征界的立法权。当他拒绝辩论（语言的领域）而直接行动时，他切断了象征界的供血。\n\n3. 实在界 (The Real): 酸池与黑暗\n故事的结局——酸液消化芯片，黑暗吞没光明——是实在界（The Real）的入侵。实在界是无法被符号化的创伤性内核。K 并不代表另一种秩序，他代表原始的混沌。当芯片溶解，象征秩序崩塌，剩下的不是混乱，而是无意义的绝对平静。这就是拉康所说的“穿越幻想”（Traversing the Fantasy）：直面那个没有任何剧本支撑的虚空。"
            },
            {
                title: "III. 深度症候分析 (Deep Symptom Analysis)",
                body: "诊断 A：微法西斯主义的垂直渴望\n那个“总工程师”和他的信徒患有典型的偏执狂（Paranoia）。德勒兹（Deleuze）会指出，他们渴望被压迫。他们不仅仅是被迫下跪，他们是主动寻找靴子来踩踏自己的脸。这种对“编号、定岗”的渴望，是一种微法西斯主义（Micro-Fascism）——即对差异的恐惧，和对统一性的病态迷恋。\n\n诊断 B：精神分裂的漫游者 (The Schizo-Stroll)\nK 的行为模式完全符合精神分裂分析（Schizoanalysis）中的革命性潜能。他没有家庭（没有父亲），没有过去（没有历史），也没有未来（没有目的论）。他在烂尾楼的骨架中进行的是一种平滑空间（Smooth Space）的运动。他不是在走路，他是在滑行。他将自己变为一个欲望机器（Desiring-Machine），只负责连接和断开，而不负责生产意义。\n\n关键症候：耳机\n耳机是 K 的反透视装置。它不仅隔绝声音，它隔绝了社会契约。它是 K 维持其“精神分裂”状态、防止滑向“神经症”的生命维持系统。"
            },
            {
                title: "IV. 意识形态批判 (Zizekian Critique)",
                body: "齐泽克视角的反转：谁才是真正的信徒？\n我们可能会认为那些跪拜的老人是被意识形态蒙蔽的人，而 K 是清醒者。但齐泽克会问：这种“清醒”是否本身就是一种更深层的意识形态？\n\n1. 大他者的不存在 (The Big Other doesn't exist):\n老人的尖叫“没有它，我们就是野兽！”揭示了意识形态的秘密：他们知道芯片可能没用，但他们必须假装它有用，以维持社会的运转。 这种犬儒主义的信仰是现代社会的基石。\n\n2. 神圣暴力 (Divine Violence):\nK 的暴力属于本雅明（Walter Benjamin）定义的神圣暴力。这种暴力不是为了建立新的法律（那是神话暴力），而是为了终结法律本身。他不要求什么，不建立什么，只是纯粹地清除。\n批判点： K 的行动虽然激进，但他最终回到了黑暗中，走向“无限延伸的水平线”。这是一种被动的虚无主义。他摧毁了暴君，但他没有建立公社。他满足于否定。这是否意味着，在后现代的废墟中，我们只能做一个清洁工，而无法再做一个建筑师？\n\n3. 剩余快感的剥夺 (The Theft of Enjoyment):\nK 剥夺了信徒们的症状（Symptom）。他拿走了他们受苦的理由。对于信徒来说，这比杀戮更残忍。因为没有了那个压迫他们的系统，他们就必须面对自己生命那种难以忍受的轻盈。"
            }
        ],
        conclusion: "本叙事是一次成功的去器官化手术。主体（K）成功移除了社会肌体上的肿瘤（象征秩序的复辟企图），并将伤口暴露在名为“实在界”的酸液中进行消毒。",
        verdict: "在这个水泥构建的无意识迷宫中，K 证明了唯一的自由是坠落的自由。他没有把人类带出洞穴去往理型的太阳，而是炸毁了投影仪，让所有人以此生仅有的真实，拥抱绝对的黑暗。这不是反乌托邦，这是零度的乌托邦——一个没有任何父亲、没有任何路标、也没有任何借口的，彻底的荒原。\n\n病历归档：[通过]\n建议后续观察： 警惕 K 是否会因为对“清理”的执着，而不仅成为了反法西斯的战士，更成为了虚无主义的官僚。"
    }
};

const baseCases: CaseStudy[] = [
    {
        id: 'c1',
        titleCn: '执迷的倒计时',
        titleEn: 'Obsessive Countdown',
        category: 'NEUROSIS',
        summaryCn: '分析者总是处于某种还清债务的焦虑中。本文报告了一例通过控制时间来回避阉割的经典强迫症案例。',
        summaryEn: 'The analysand is always in an anxiety of paying off debts. This paper reports a classic case of obsessive-compulsive neurosis avoiding castration through time control.',
        imageUrl: getR2PublicUrl('archive/c1.jpg'),
        date: '1998.04'
    },
    {
        id: 'c2',
        titleCn: '零点协议：无尽的水平线',
        titleEn: 'The Zero Protocol: Endless Horizon',
        category: 'PSYCHOSIS',
        summaryCn: '妄想与幻觉作为修补实在界破洞的补丁。在一个重力与逻辑同时失效的迷宫中，清道夫将世界归还绝对寂静。',
        summaryEn: 'Delusions and hallucinations as patches for the Real. In a maze without logic, the scavenger returns the world to absolute silence.',
        imageUrl: getR2PublicUrl('archive/c2.jpg'), 
        date: '2003.11',
        content: detailedCaseContent
    },
    {
        id: 'c3',
        titleCn: '法则的面纱',
        titleEn: 'Veil of the Law',
        category: 'PERVERSION',
        summaryCn: '倒错主体并不否认律法，而是充当律法制定的结构。案例探讨了施欲循环中的能指运作。',
        summaryEn: 'The pervert does not deny the law, but acts as the structure that establishes it. The case explores the operation of signifiers in the cycle of desire.',
        imageUrl: getR2PublicUrl('archive/c3.jpg'),
        date: '2016.02'
    },
    {
        id: 'c4',
        titleCn: '墙外的声音',
        titleEn: 'Voices Beyond the Wall',
        category: 'AUTISM',
        summaryCn: '对符号界浸入的拒绝与自我封闭的堡垒。该案例记录了主体在没有任何大他者担保下的语言构造。',
        summaryEn: 'Rejection of immersion in the Symbolic and a fortress of self-closure. The case records the linguistic construction of the subject without any guarantee from the Big Other.',
        imageUrl: getR2PublicUrl('archive/c4.jpg'),
        date: '2021.08'
    }
];

// Generate synthetic cases to demonstrate pagination
export const ARCHIVE_CASES: CaseStudy[] = [
    ...baseCases,
    ...Array.from({ length: 26 }).map((_, i) => ({
        id: `gen-${i + 5}`,
        titleCn: `机密观测记录 ${String(i + 5).padStart(3, '0')}`,
        titleEn: `Classified Observation Record ${String(i + 5).padStart(3, '0')}`,
        category: ['NEUROSIS', 'PSYCHOSIS', 'PERVERSION', 'AUTISM'][i % 4] as ArchiveCategory,
        summaryCn: '该记录正在解除封存中，数据正在重新结构化，请等待大他者的进一步索引。',
        summaryEn: 'This record is being declassified. Data is restructuring, pending further indexing by the Big Other.',
        imageUrl: getR2PublicUrl(`archive/gen-${i+5}.jpg`),
        date: `202${Math.floor(i / 12)}.${String((i % 12) + 1).padStart(2, '0')}`,
        content: detailedCaseContent // attach the same content so any click works
    }))
];
