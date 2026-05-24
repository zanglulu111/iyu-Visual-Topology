
// 叙事症候诊断指令构建器
// 用于 Narrative Driver 的 "植入症候" (Input Symptom) 环节

type NarrativeDiagnosisSectionKey = '1' | '2' | '3' | '4' | '5' | '6';

const NARRATIVE_DIAGNOSIS_SECTION_TITLES: Record<NarrativeDiagnosisSectionKey, string> = {
    '1': '画面硬事实',
    '2': '本体倾向',
    '3': '行动张力',
    '4': '故事横截面',
    '5': '外部故事发动机',
    '6': '禁止边界',
};

const splitNarrativeDiagnosisSections = (text: string) => {
    const sections: Record<string, string> = {};
    let currentKey: string | null = null;

    text.split(/\r?\n/).forEach(line => {
        const headingMatch = line.match(/^###\s*([1-6])\.\s*(.*)$/);
        if (headingMatch) {
            currentKey = headingMatch[1];
            sections[currentKey] = headingMatch[2]?.trim() ? `${headingMatch[2].trim()}\n` : '';
            return;
        }
        if (currentKey) {
            sections[currentKey] = `${sections[currentKey] || ''}${line}\n`;
        }
    });

    return sections;
};

export const hasNarrativeDiagnosisTailGap = (text: string): boolean => {
    const sections = splitNarrativeDiagnosisSections(text);
    return ['3', '4', '5', '6'].some(key => !String(sections[key] || '').trim());
};

export const stripNarrativeDiagnosisTail = (text: string): string => {
    const cutoff = text.search(/\n?###\s*3\./);
    return (cutoff >= 0 ? text.slice(0, cutoff) : text).trim();
};

const detectNarrativeDiagnosisCues = (text: string) => {
    const normalized = text.replace(/\s+/g, ' ').trim();
    const subject = /(年轻男子|男子|男人|少年|青年)/.test(normalized)
        ? '画中男子'
        : /(少女|女孩|女人|女性|女子)/.test(normalized)
            ? '画中女性'
            : '画中主体';

    return {
        subject,
        hasBlackSun: /(黑日|黑洞|日全食|日蚀|黑色球体|黑球)/.test(normalized),
        hasVoid: /(深渊|虚无|无底|黑暗|黑色镜面|镜面液体|黑色液体|无边)/.test(normalized),
        hasRitual: /(仪式|献祭|承接|顺从|解脱|召唤|祭礼|祭祀|神圣)/.test(normalized),
        hasLightBurst: /(光束|放射|爆裂|射线|白光|强光)/.test(normalized),
        hasCorruption: /(黑纹|蔓延|滴落|攀爬|荆棘|墨汁)/.test(normalized),
    };
};

const buildNarrativeDiagnosisTailFallback = (textInput: string = "", hasImage: boolean = true, draftText: string = ""): Record<'3' | '4' | '5' | '6', string> => {
    const cues = detectNarrativeDiagnosisCues(`${textInput}\n\n${draftText}`);
    const tensionOne = cues.hasRitual
        ? `${cues.subject}并不是在普通摆姿势，而是在承接一次无法回避的仪式；闭目、仰头和张开的双手让“接受、献祭、解脱”同时成立。`
        : `${cues.subject}正在承接外部力量与自身意志之间的冲突；闭目、仰头和张开的双手说明这个人物既在接受，也在把自己交出去。`;
    const tensionTwo = cues.hasCorruption || cues.hasBlackSun
        ? '白衣上的黑纹、背后的黑日和脚下的深黑镜面都在提示：危险不是来自远处，而是在往身体内部和世界边界同时渗透。'
        : '画面里的服装、姿态和能量状态都在提示：危险不是静止背景，而是在推动人物做出不可逆选择。';

    const crossSectionWorld = cues.hasBlackSun
        ? '黑日和白光已经在场，说明世界本身由异常天体或禁忌仪式驱动。'
        : cues.hasVoid
            ? '虚无、镜面和深黑液面已经在场，说明这个世界的秩序来自某种超现实压力。'
            : '异常场域已经铺开，说明这个故事不是普通日常，而是由异象和压力共同驱动。';
    const firstFrame = cues.hasBlackSun
        ? `${cues.subject}站在黑色镜面上，脑后黑日悬停，白光从背后炸开。`
        : `${cues.subject}站在被能量压住的临界点上，画面一开始就已是失衡状态。`;
    const externalGoal = cues.hasRitual
        ? '目标方向可在“完成承接 / 关闭承接 / 转移承接”之间分叉，暂不指定唯一任务。'
        : '目标方向可在“离开 / 抵达 / 确认 / 守住 / 交换”之间分叉，暂不指定唯一任务。';
    const obstacle = cues.hasLightBurst
        ? '背后的光并不温和，它可以被后续参数裁决为审判、召唤、吞噬或能量失控。'
        : '外部压力不是可忽略的背景，可被后续参数裁决为空间、身体、关系、制度或自然危险。';
    const failure = cues.hasVoid || cues.hasBlackSun
        ? '一旦承接失败，主体会被深渊吞没，或者变成那股力量的容器。'
        : '一旦回应失败，主体会被迫退回更弱的位置，甚至失去原本的身份边界。';

    return {
        '3': [
            `- **主张力**：${tensionOne} ${tensionTwo}`,
        ].join('\n'),
        '4': [
            `- **世界已在运行**：${crossSectionWorld}`,
            `- **失衡时刻**：${cues.subject}站上临界位置的一刻，原本稳定的边界被打破；具体前因留给后续分歧点裁决。`,
            `- **外部目标**：${externalGoal}`,
            `- **外部阻碍**：${obstacle}`,
            `- **失败后果**：${failure}`,
        ].join('\n'),
        '5': [
            `- **画面时刻定位**：更像高潮选择或临界转折，而不是普通氛围画面。`,
            `- **画面前因槽位**：外部事件把${cues.subject}逼到此处；可分叉为追逐、召唤、交换、逃离或封锁，暂不定案。`,
            `- **压力装置槽位**：可选仪式流程、身体变化、空间封锁或力量失控，必须由后续参数决定主项。`,
            `- **误认机制槽位**：主体以为自己在控制、完成、逃离或拯救；实际后果暂不写死。`,
            `- **不可逆选择槽位**：保住自身边界 / 让力量通过自己 / 牺牲某个关系或物件，暂不指定唯一选择。`,
            `- **代价方向**：身份、身体、名字、关系或回到日常的资格；只标方向，不写结局。`,
            `- **可回返物件/动作**：仰头、张手、黑色镜面、黑日/黑洞、白衣上的黑纹。`,
        ].join('\n'),
        '6': [
            '- 这几条只约束本次解析，不是永久世界禁令；后续参数和世界法则仍可重新裁决。',
            '- 不要把画面降级成普通摆拍、演出、心理幻觉或无后果的象征段落，除非用户明确要求。',
            '- 不要擅自补写图中没有的职业、组织、宗教体系、科技体系、魔法规则、战争史或完整世界观。',
            '- 不要让画面本体倾向覆盖用户后续手动参数、SUR2/SUR3 或世界法则。',
            '- 不要只重复光、姿态、能量和氛围；必须保留外部目标、阻断、失败后果和可能的不可逆选择。',
        ].join('\n'),
    };
};

export const fillNarrativeDiagnosisTailGaps = (text: string, textInput: string = "", hasImage: boolean = true): string => {
    const sections = splitNarrativeDiagnosisSections(text);
    const fallbackTail = buildNarrativeDiagnosisTailFallback(textInput, hasImage, text);

    return (['1', '2', '3', '4', '5', '6'] as NarrativeDiagnosisSectionKey[])
        .map(key => {
            const tailKey = key as '3' | '4' | '5' | '6';
            const content = String(sections[key] || '').trim() || (key === '3' || key === '4' || key === '5' || key === '6' ? fallbackTail[tailKey] : '');
            if (!content) return '';
            return `### ${key}. ${NARRATIVE_DIAGNOSIS_SECTION_TITLES[key]}\n${content}`;
        })
        .filter(Boolean)
        .join('\n\n')
        .trim();
};

export const buildNarrativeDiagnosisRepairPrompt = (textInput: string = "", hasImage: boolean = true, draftText: string = ""): string => {
    const trimmedInput = textInput.trim();
    const trimmedDraft = draftText.trim();
    return `
角色：叙事症候补写器。
任务：下面这份草稿已经有前 1-2 模块，但 3-6 模块不完整或为空。请只补写 3、4、5、6 四个模块，不要重写 1-2，不要解释。

## 输入上下文
${trimmedInput ? `图文解析上下文：\n${trimmedInput}` : "未提供用户文字或图片读取策略。"}
${hasImage ? "图像种子：已通过附件提供。" : "未提供图像种子。"}
${trimmedDraft ? `已有草稿：\n${trimmedDraft}` : "已有草稿：空。"}

## 要求
- 只输出 ### 3. 行动张力、### 4. 故事横截面、### 5. 外部故事发动机、### 6. 禁止边界。
- 不要重复 1-2，不要解释修补原因。
- 3/4/5/6 都必须有内容，宁可极短，也不要空。
- 3 至少 1 个主张力，4 至少 5 项，5 至少 5 项，6 至少 3 条。
- 仍然必须来自画面事实、世界判定、用户文字和已写出的草稿。
- 只补开放槽位，不要补成一条完整故事线；前因、目标、误认、选择、代价都要保留 2-3 个可分叉方向。
- 不要确定具体职业、使命、组织、战争/灾变、关系真相、时间数字或后续重复规则，除非输入已经明确写出。

## 输出格式
使用简体中文 Markdown。
只输出以下四个标题及其内容：
### 3. 行动张力
### 4. 故事横截面
### 5. 外部故事发动机
### 6. 禁止边界
`;
};

export const buildNarrativeDiagnosisPrompt = (textInput: string = "", hasImage: boolean = true): string => {
    const trimmedInput = textInput.trim();
    const sourceMode = hasImage
        ? (trimmedInput
            ? "图文通用反推：用户文字最高优先，图片只提供可见事实、氛围、关系与材料。"
            : "图像通用反推：直接读图，只判断图片如何进入故事。")
        : trimmedInput
            ? "文本解析：用户文字是最高语义事实。"
            : "空白反推：无自由种子，仅根据引擎语境进行随机反推。";

    return `
角色：图文种子解析器 / 故事发动机提取器。
任务：读取用户文字与图片，产出一份短而可编辑的「图像母画面包」。你不是在写故事，也不是在生成三案；你只负责把画面事实、世界倾向和外部故事发动机提取出来，让后续分歧点生成能长出真正有因果的故事。

## 输入上下文
${trimmedInput ? `图文解析上下文（可能包含用户创意、图片读取策略、图片解析提示）：\n${trimmedInput}` : "未提供用户文字或图片读取策略。"}
${hasImage ? "图像种子：已通过附件提供。" : "未提供图像种子。"}
输入模式：${sourceMode}

## 核心目标
后续生成常见问题是“MV 感很强、故事性很弱”。所以本轮解析必须避免只输出姿态、光线、氛围和象征；你必须提取外部目标、阻断、失败后果、误认机制、不可逆选择和代价方向。

输出总量控制在 700-1100 个中文字符左右。宁可短，也不要铺成长篇设定说明。第 5 模块最重要。
其中：第 1 模块是硬事实；第 2-6 模块都只是当前样本下的推断倾向、故事方向和边界提醒，不是最终定案，更不是对后续世界法则和用户参数的永久封锁。

## 开放度协议
1. 只有第 1 模块的可见事实允许写成确定事实。
2. 第 3-5 模块只能写“功能槽位”和“分叉方向”，不要写成一条完整故事线。
3. 不要确定具体前史、具体职业、具体使命、具体组织、具体战争/灾变、具体关系真相、具体时间数字或后续重复规则，除非用户文字或图像中已经明确出现。
4. 需要推断时，用“可分叉为 A / B / C”“可能指向 A 或 B”“目标方向是……”这种开放写法；不要只给一个定案。
5. 至少保留 3 个可供后续分歧点选择的开放槽位，例如：前因槽位、目标槽位、阻断槽位、误认槽位、代价槽位。

## 裁决顺序
1. **用户文字最高**：用户明确写出的替换、保留、禁令、关系解释、结局倾向优先于图片。
2. **图片事实第二**：只锁定可见或强烈可推断的元素；不可见的职业、组织、宗教、科技体系、战争史、魔法规则不要擅自补全。
3. **本体倾向只是倾向**：图片可提示奇幻、科幻、灵异、神话、写实、梦境、插画等方向，但它不自动覆盖用户后续参数、世界法则、场域或时空设定。
4. **冲突时保结构**：若图片的超现实/科幻/神话气质与后续世界法则冲突，保留画面结构、行动张力、物件功能和关系压力；字面是否成立交给下游世界法则裁决。
5. **反 MV 优先**：任何漂亮画面都必须转译成“谁想做什么、被什么挡住、失败会怎样、必须选择什么、代价落在哪里”。
6. **不写系统术语**：输出不要使用内部参数名、层级名或引擎术语。

## 固定输出模块
必须严格输出以下 6 个标题，不新增、不省略。每个模块用项目符号，简洁可编辑。

### 1. 画面硬事实
只列图中明确可见或高度可见的事实：主体、姿态、服装/身体、关键物件、空间、光线/色彩、材质、构图、尺度关系。不要写完整散文描述。

### 2. 本体倾向
说明世界类型、时代/尺度倾向、现实域、媒介风格，并明确一句：这只是图像推断，不覆盖用户后续手动参数与世界法则。

### 3. 行动张力
给出 1 个主张力，最多 1 个副张力。每个张力必须写清：谁在做什么、想完成或阻止什么、隐藏危险是什么、哪些画面事实支持。

### 4. 故事横截面
给出此刻的外部局面，但只写“当前画面支持的开放局面”，不要补成完整前史：
* **世界已在运行**：
* **失衡时刻**：
* **外部目标**：
* **外部阻碍**：
* **失败后果**：

### 5. 外部故事发动机
这是最重要的模块。不要写故事梗概，也不要写唯一故事前提；要写能驱动分歧点生成的开放因果机关。除画面硬事实外，每项都必须保留可替换空间：
* **画面时刻定位**：这是开场、转折、高潮选择还是余波？
* **画面前因槽位**：什么类型的外部事件把主体逼到这个位置？给 2-3 个方向，不要定案。
* **压力装置槽位**：可由哪类压力推动故事？给 2-3 个方向，不要写具体倒计时数字。
* **误认机制槽位**：主体可能误认了什么？只写机制，不写唯一真相。
* **不可逆选择槽位**：主体可能在什么类型的两难中选择？给开放对立，不写唯一选择结果。
* **代价方向**：代价可能落在哪类事物上？只标方向，不写结局。
* **可回返物件/动作**：后续故事可反复回响的 2-4 个画面物件或动作。

### 6. 禁止边界
这部分只写“当前这次解析不要越界什么”，不是永久世界禁令。重点是防止草稿抢跑和跑偏。
列 3-5 条边界提醒。写法必须是“本轮解析不得提前锁定……”，不要写成“后续故事永远禁止出现……”。可以提醒：不要补写图中没有且用户未给出的事实；不要把图像降级成纯氛围；不要让图像倾向覆盖用户参数；不要只保留氛围而丢掉故事机关。

## 输出格式
使用简体中文 Markdown 输出。
必须按以下标题格式完整输出：### 1. 画面硬事实、### 2. 本体倾向、### 3. 行动张力、### 4. 故事横截面、### 5. 外部故事发动机、### 6. 禁止边界。
不要输出参数建议、提示词反推、最终完整故事、故事三案或系统术语解释。
不要把第 4-5 模块写成“某人刚刚经历 X，所以要去 Y，途中 Z 会背叛他”这种单一故事链。
第 5 模块不得为空；如果篇幅紧张，压缩 1-2，也必须写完整 3-6。
`;
};
