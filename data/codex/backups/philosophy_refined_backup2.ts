
import { LacanCategory } from './lacan_dictionary';

/**
 * 哲学核心辞典 (New Structure 2024)
 * Based on the user provided outline for Hegel, Marx, Lacan, and Zizek.
 */

// 1. 黑格尔思想索引 (HEGEL)
export const HEGEL_INDEX: LacanCategory[] = [
    {
        id: "hegel_core",
        name: "一、核心命题与方法论",
        enName: "Core Propositions & Methodology",
        desc: "黑格尔哲学的基石与辩证法逻辑。",
        concepts: [
            { 
                id: "h_substance_subject", 
                name: "实体即主体", 
                enName: "Substance is Subject", 
                category: "Core", 
                shortDef: "真理不仅被理解和表述为实体，而且同样地被理解和表述为主体。",
                detailed: {
                    definition: `
### 1. 绝对的起点：对斯宾诺莎与康德的双重超越

黑格尔在《精神现象学》序言中掷出了一句震撼整个思想史的断言：**“依我看来——这种看法只有通过体系的阐述才能得到证明——一切问题的关键在于：不仅把真实的东西或真理理解和表述为实体（Substanz），而且同样理解和表述为主体（Subjekt）。”** 这不仅是黑格尔哲学的最高命题，也是西方形而上学发展至顶峰的标志性转折。

要真正理解“实体即主体”，我们必须将其置于哲学史的坐标系中。在黑格尔之前，**斯宾诺莎**穷尽了“实体”的逻辑。在斯宾诺莎看来，宇宙间只有一个绝对的、无限的实体（即上帝或自然），所有的个体、思想和广延不过是这个无边无际的实体表面泛起的涟漪（样式）。这种实体观宏大而静谧，但却是一个**死寂的、缺乏内在生命力**的深渊。在这个体系里，没有偶然性，没有真正的自由，更没有能动的个体。

而在硬币的另一面，**康德**及随后的费希特，将“主体”的力量推向了极致。康德划定了先验主体的界限，认为我们无法认识物自体，世界是被主体的先验范畴“建构”出来的。费希特的“绝对自我”更是通过设定自身和设定非我，确立了主体绝对的能动性。然而，这种主体是**悬空的、抽象的**，它面对着一个与它截然二分、不可逾越的客观世界（实体）。

黑格尔的“实体即主体”，正是对这两大传统的天才般综合与扬弃。他宣告：**实体并不是一尊静态的、僵死的大理石雕像，而是一个活生生的、具有自我否定和自我运动能力的生命过程。** 实体之所以是真理，绝不是因为它作为一个现成的、惰性的基础躺在万物之下，而是因为它能够**“成为它自己”**。这种“成为它自己”的内在冲动、裂变、迷失以及最终的回归，正是“主体”的特征。

### 2. 否定性：实体成为主体的内在引擎

为什么实体必须是主体？因为真正的无限不能仅仅是把所有有限事物包容在内的一个大容器（那是“恶的无限”）。真正的无限，必须经历自我分裂的痛苦。

这涉及到黑格尔著名的**“否定性”（Negativity）**概念。实体不是一个平滑的、无缝的球体。它内部包含着极其强烈的张力和绝对的否定性。实体为了认识它自己、为了实现它的真理，就必须**外化（异化）**出去，变成它自己的对立面。

想象一个完美的几何形体，如果它永远处于完美的静止中，它就是盲目的、缺乏自我意识的。实体通过将自身割裂，通过产生出“他者”，投身于历史、自然和时间的血雨腥风中，去经历创伤、矛盾和撕裂。这个主体在异化的世界中挣扎、受难、甚至遗忘自己的起源。但是，正是通过这种**“在绝对的撕裂中保持自身的持存”**，实体才获得了主体性。

**主体，不是实体之外的一个旁观者，而是实体内部发生的那一道裂痕。** 

### 3. 圆圈的圆满：目的论的自我实现

实体即主体的运动，不是一条通向未知黑暗的直线，而是一个**“回到自身”的圆圈**。用黑格尔的话说：“真理就是它自己的形成过程的圆圈，这个圆圈预先把它自己的终点作为目的，并把终点作为自己的起点。”

这就意味着，宇宙的进化、人类历史的发展、个体意识的觉醒，都不是偶然的副产品，而是绝对精神（实体）为了认识自己（成为主体）而必须经历的漫长旅途。**精神只有在它经历的痛苦的顶点——在绝对的丧失中——才能找回它自己。** 这种找回，不是简单的倒退回最初的混沌，而是一种更高层面的**“扬弃”（Aufhebung）**。

因此，“实体即主体”宣告了一种绝对的本体论乐观主义与最深沉的悲剧感的结合。痛苦、流血、失败、历史的灾难，都不再是毫无意义的虚无，而是精神实现其主体的必然环节。真理是一个整体，但这个整体不是一个现成的存钱罐，而是一个**饱经风霜的生命体**，它的每一道伤疤都证明了它作为主体的荣耀。`,
                    
                    analogy: `
### 1. 莫比乌斯环与内外的翻转（拓扑学类比）

在拓扑学中，“实体即主体”最迷人的类比就是**莫比乌斯环（Möbius strip）**或**克莱因瓶（Klein bottle）**。

传统的二元论认为，实体是“里面”的底子，主体是“外面”的观察者。就像一个普通的圆柱形纸壳，内壁是内壁，外壁是外壁。然而，黑格尔的宇宙是一个莫比乌斯环。

想象一只蚂蚁（主体）在纸带（实体）的表面上爬行。一开始，蚂蚁以为自己只是一个在一个广阔、客观、死板的表面上被动游荡的客体。它觉得这个表面（实体）是异于它的、坚硬的、无情的。但是，随着蚂蚁不断地向前爬行，它穿越了那个拓扑学的“奇点”（扭曲之处），它震惊地发现：**它并没有翻越任何边缘，却莫名其妙地来到了纸带的“另一面”。** 

在这场漫长的旅途中，蚂蚁最终发现：这个看似外在的、客观的“表面”，其实就是它自己运动的轨迹。**没有那个先于蚂蚁爬行而存在的静止纸带。纸带（实体）正是因为蚂蚁（主体）的持续爬行、扭曲和折叠，才得以存在和显现。** 客观事物的核心，恰恰是那个主观视角的扭曲点。你观察世界的那个“裂痕”，就是世界本身的结构。

### 2. 生活中的深刻案例：重塑宿命的婚姻危机

让我们把这个抽象的哲学公式投射到日常生活中。我们以一段婚姻或长期恋爱关系为例。

**阶段一：静态的“实体”（自在阶段）**
一对夫妻结婚了。此时，“婚姻”对他们来说是一个**客观的实体**。它有法律的背书，有社会的祝福，有一种天经地义的“既定事实”。在这个阶段，婚姻是静止的、没有反思的。“我们就是结了婚的两个人”，这是一种盲目的肯定。此时，婚姻只是实体，还不是主体。

**阶段二：裂痕与“否定性”（自为的异化阶段）**
五年后，危机爆发。出轨、冷暴力、或者是对平庸生活的绝望式窒息。那个曾经坚固不摧的“婚姻实体”崩塌了，变成了它的对立面——仇恨、猜忌和彻底的异化。此时，双方都在这场灾难中感到了极度的痛苦。
但从黑格尔的视角看，**这场危机不是一个单纯的“故障”或“外来破坏”，而是实体必须经历的否定性。** 那个静态的婚姻如果一直不经受考验，它就是虚假的、死寂的。它必须裂开，必须把自身的矛盾暴露出来。

**阶段三：“实体即主体”（自在自为的扬弃）**
在历经了撕心裂肺的争吵、深度的心理疗愈、甚至是面临离婚法庭的边缘后，两人没有选择逃避，而是直面了创伤的深渊。他们重新坐下来，不仅原谅了对方，而且**深刻理解了人性的幽暗、软弱以及他们关系中最初缺失的东西。**

当这两人决定再次牵手时，这个婚姻已经完全不同了。它不再是第一阶段那个盲目、天然、社会赋予的“静态实体”。它已经**主体化**了。
现在的婚姻，内部包含了曾经的背叛、痛苦和裂痕，但这些负面的东西被**“扬弃”**了。它们没有消失，而是变成了这层关系极度厚重的基石。这对夫妻看着对方，知道彼此是破碎过的，但正因为这种破碎和重建，这段关系才获得了真正的生命力、自由和绝对的坚韧。

这就是**“实体即主体”**。一开始的客观关系（实体），必须经历撕裂（否定），最终通过双方的自由意志和主观接纳（主体），重构成一个饱含苦难记忆但达到更高统一的绝对真理。**我们不是在命运（实体）中随波逐流的客体，我们就是命运意识到了自身的那个瞬间（主体）。**`,
                    
                    application: `
### 1. 结构化降维：从被动系统到觉醒生成器

在“爱欲视觉拓扑学”的叙事引擎或游戏机制设计中，**“实体即主体”**绝不能仅仅作为一段文本背景，而是必须被部署为最核心的**系统状态机（State Machine）**和**动态关卡架构**。

玩家初入游戏时，所面对的游戏世界（The Game World），无论是一个赛博朋克都市、还是一个克苏鲁封印地，都必须呈现为一个**绝对压倒性的、冰冷死板的“实体”**。NPC按部就班，物理法则坚如磐石，剧情树看似早已写死。这是一个完美的、闭合的父权制象征界（The Symbolic Real）。

**引擎指示 I：设计虚假的“被动游玩区”(The Inert Substance)**
*   **初始参数设定**：让玩家在前期的行为产生一种“幻觉的无力感”。所有的选择（分支对话、任务路线）实际上都汇聚到同一个既定的不可逆结局。让玩家觉得：“系统（实体）就是这样运行的，我只是一个体验者。”

### 2. 注入否定性：系统级的“创伤事件”(The Rupture)

叙事的转折点（Mid-point）决不能是一个外部反派的降临，而必须是**系统内部的自我撕裂**。实体为了成为主体，必须产出一个无法自我消化的 Bug。

在引擎中，这表现为一种“Meta-Game（元游戏）”级别的设计坍塌。

**引擎指示 II：触发“否定性奇点”(Singularity of Negativity)**
*   **交互逻辑断裂**：在这个特定区域，经典的 UI 界面开始崩坏，按键映射发生倒错（比如“前进”变成了“探究潜意识”，“攻击”变成了“自残”）。
*   **NPC的异化**：原本提供任务的稳定NPC，突然陷入循环的胡言乱语，或者直接打破第四面墙，指责玩家的无意义。
*   **拓扑翻转**：空间设计从欧几里得几何转变为非欧几何（如无限回廊、走廊尽头是你自己的后脑勺）。这在视觉上象征着“实体”内部的裂缝已经向玩家敞开。

### 3. 世界的重塑：主体化跃迁算法 (Subjectivation Algorithm)

最核心的机制在于结局（或游戏后期）的呈现方式。当玩家通过极度痛苦的选择（例如必须杀死最爱的角色以拯救系统，或摧毁系统以保留真理）时，游戏不应该播放一段传统的 CG 宣告胜利。

**引擎指示 III：执行“实体即主体”的最终合并 (The Absolute Synthesis)**
*   **视角翻转机制**：让玩家恍然大悟——**“原来我不是在这个世界里冒险的主角，我就是这个世界本身。”** 玩家之前的每一次挣扎、每一次 Game Over 留下的残骸、每一次由于 Bug 导致的死亡，其实正是这个“世界引擎（实体）”借由玩家的手，在完成自我认识（主体化）的必经过程。
*   **环境的动态响应（Eros Intensity 波动）**：在最终阶段，游戏场景不再由预设的美术资产构成，而是**完全由玩家此前的游玩数据（潜意识抉择、杀戮偏好、停留时间）动态生成**。玩家看到的最终 Boss，其参数、外形和攻击招式，是玩家自身“否定性”的镜像。
*   **终局剧本（扬弃）**：最终的通关不是离开这个世界，而是通过玩家的“看”（Gaze），让这个破碎的像素世界重新获得意义上的融贯。系统播报：“你以为你是在解救世界，但实际上，是世界通过你的眼睛，终于确认了它自己的存在。**实体，在这一刻，成为了主体。**”

通过这套引擎部署，“实体即主体”将被转化为一种极度震撼的沉浸式体验：**玩家的游玩行为（主体游历），就是游戏程序（代码实体）的自我完善闭环。**这才是最高级的哲学游戏互动设计。`
                } 
            },
            {
                id: "h_dialectic",
                name: "辩证法",
                enName: "Dialectics",
                category: "Core",
                shortDef: "正、反、合的运动过程，矛盾是发展的动力。",
                detailed: {
                    definition: `
### 1. 从"三段论"到"否定的否定"：辩证法的演化

"辩证法"这个词本身就是一个悖论。它源自古希腊的"对话"（dialektike），意指通过对立观点的碰撞来逼近真理。但黑格尔将这个古老的修辞技巧转化为**宇宙本身的运动法则**。

在黑格尔之前，康德已经意识到理性本身包含着内在的矛盾（二律背反）。但康德的解决方案是**逃避**：他宣称这些矛盾是我们认识能力的局限，真实的物自体超越了这些对立。黑格尔则做出了截然相反的选择：**矛盾不是认识的障碍，而是存在本身的核心。** 真理就存在于矛盾的运动之中。

传统的逻辑学教导我们：一个命题要么真，要么假，不能既真又假（排中律）。但黑格尔的辩证法宣告：**真理恰恰在于那个"既真又假"的中间地带。** 这不是模糊性或相对主义，而是一种更深层的、动态的真理观。

黑格尔的辩证法通常被简化为"正-反-合"（thesis-antithesis-synthesis）的三段论。但这个简化是危险的。黑格尔本人从未使用过这个术语。他真正的逻辑是：**肯定（Affirmation）→ 否定（Negation）→ 否定的否定（Negation of Negation）**。

这三个环节不是外部的、机械的组合，而是**内在的、有机的展开**。`,

                    analogy: `
### 1. 音乐中的辩证法：和弦的张力与解决

想象一个音乐的例子。在古典音乐中，一个"不协和音程"（如小二度）会产生极度的紧张感。这个紧张感本身就是一种"否定"——它否定了和谐、否定了听众的舒适感。

但这个紧张感不是错误的、需要被消除的。相反，正是这个紧张感**推动**音乐向前发展。作曲家必须让这个不协和音程"解决"到一个协和音程。但这个解决不是简单的"回到原点"，而是一个**更高层面的和谐**。

在这个过程中：
- **正题**：稳定的协和音程（C 大调）
- **反题**：突然的不协和音程（小二度的冲击）
- **合题**：解决到一个新的、更丰富的和谐（可能是 F 大调或其他调性）

整个音乐的美感，就来自于这种**张力与解决的循环**。如果一首曲子始终保持协和，它会变得单调乏味。如果它始终处于不协和，它会令人难以忍受。真正的音乐艺术，就是在这两者之间的辩证舞蹈。

### 2. 社会革命中的辩证法

在社会历史中，辩证法表现为**阶级斗争**。

- **正题**：封建贵族社会的秩序
- **反题**：资产阶级的崛起与对旧秩序的否定
- **合题**：资本主义社会（暂时的统一）

但这个"合题"本身又包含了新的矛盾（资本家与工人的对立），因此又会产生新的"反题"（无产阶级革命），最终达到更高的"合题"（共产主义社会）。

这不是一个线性的进步，而是一个**螺旋式的上升**。每一次的"否定"都不是简单的摧毁，而是一种**保留与超越的统一**。`,

                    application: `
### 1. 游戏设计中的辩证法：难度曲线与玩家心理

在"爱欲视觉拓扑学"的游戏引擎中，辩证法可以被部署为**动态难度调整系统**的核心逻辑。

**第一阶段：正题（稳定的游戏状态）**
玩家进入一个相对稳定的游戏区域。敌人的强度、谜题的难度都在一个可控的范围内。玩家逐渐建立起对游戏规则的理解和掌控感。这是一个"肯定"的阶段。

**第二阶段：反题（系统的否定与破裂）**
突然，游戏规则发生了变化。也许重力反向了，也许敌人的 AI 变得不可预测，也许玩家的能力被削弱了。这是一个**"否定"**——游戏否定了玩家之前建立的掌控感。玩家感到困惑、挫折，甚至想要放弃。

但这个"否定"不是一个 Bug，而是**设计的一部分**。它强制玩家重新思考、重新学习、重新适应。

**第三阶段：合题（更高层面的掌控）**
经过挣扎，玩家最终理解了新的规则。他们不仅恢复了之前的掌控感，而且获得了**更深层的理解**。他们现在能够同时处理多个相互矛盾的规则系统，他们的游戏技能达到了新的高度。

这个循环可以无限重复，每一次都将玩家推向更高的复杂性和更深的沉浸感。`
                }
            },
            {
                id: "h_aufhebung",
                name: "扬弃",
                enName: "Aufhebung",
                category: "Core",
                shortDef: "既克服又保留，在更高层面上达成统一。",
                detailed: {
                    definition: `
### 1. 德语的魔力：一个词的三重含义

"扬弃"（Aufhebung）是黑格尔哲学中最难翻译、也最富有魔力的概念。这个德语词汇本身就包含了三个相互矛盾的含义：

1. **aufheben** = 抬起、举起（向上的运动）
2. **aufheben** = 取消、废除、否定（向下的摧毁）
3. **aufheben** = 保存、保留、维持（向内的保护）

这三个含义在一个词中共存，这本身就是一个**辩证的奇迹**。没有任何其他语言能够用一个单词同时表达"摧毁"和"保留"。这不是翻译的失败，而是德语本身对黑格尔思想的完美承载。

当黑格尔说"扬弃"时，他绝不是说简单的"否定"或"克服"。他说的是一种**三重的、矛盾的、辩证的运动**。`,

                    analogy: `
### 1. 毛毛虫到蝴蝶的变身：生物学中的扬弃

最直观的类比就是毛毛虫变成蝴蝶的过程。

在蛹的阶段，毛毛虫的身体完全被"摧毁"了。它的肌肉、器官、神经系统都被分解成了一种原始的、液态的物质（这被称为"组织液化"）。从某种意义上说，毛毛虫**死了**。

但这个"死亡"不是终结。在这个液态的混沌中，新的结构开始形成。蝴蝶的翅膀、复眼、吸管式的口器——所有这些新的器官都是从毛毛虫的"尸体"中重新组织而成的。

因此，蝴蝶既**否定**了毛毛虫（摧毁了它的旧形态），又**保留**了毛毛虫（使用了它的物质和某些基本的生物信息），同时又**超越**了毛毛虫（获得了飞行的能力，进入了一个全新的生存维度）。

这就是**扬弃**。不是简单的进化，而是一种包含了死亡、保留和重生的三重运动。

### 2. 文明的扬弃：从野蛮到文明

人类从野蛮状态进入文明社会的过程，也是一个"扬弃"的过程。

在野蛮状态中，人类的本能是**直接的、无限制的**。饥饿时就杀死猎物并生吃，性欲来临时就直接交配，愤怒时就直接暴力。

文明社会**否定**了这种直接性。它建立了法律、道德、礼仪，限制和压抑了人的本能。从表面上看，文明是对人性的**压制**。

但文明同时又**保留**了这些本能。它没有消灭人的饥饿、性欲和愤怒，而是将它们**升华**了。饮食变成了美食文化，性欲变成了爱情和艺术，愤怒变成了正义感和革命精神。

因此，文明既**克服**了野蛮（否定了其直接性），又**保留**了野蛮（保存了其能量），同时又**超越**了野蛮（将其转化为更高的精神形式）。`,

                    application: `
### 1. 游戏中的"扬弃"机制：旧能力的升级与转化

在"爱欲视觉拓扑学"中，"扬弃"可以被设计为一个**能力进化系统**。

**初始阶段：基础能力**
玩家获得了一个基础能力，比如"火焰术"。这个能力很强大，玩家依赖它来战胜敌人。

**否定阶段：能力的失效**
突然，游戏进入了一个新的区域。这里的敌人对火焰免疫。玩家的"火焰术"被**否定**了，变得毫无用处。玩家感到失落和无力。

**扬弃阶段：能力的升华**
但游戏提供了一个选择：玩家可以将"火焰术"与另一个能力（比如"冰冻术"）结合，创造出"蒸汽爆炸"。这个新能力既**保留**了火焰术的核心（热能），又**保留**了冰冻术的核心（冷能），同时又**超越**了两者（创造了一个全新的、更强大的效果）。

通过这种方式，游戏不仅让玩家感到成长，而且让他们理解了**扬弃**的哲学含义：真正的进步不是简单的替换，而是一种包含了保留、否定和超越的三重运动。`
                }
            },
            {
                id: "h_negativity",
                name: "否定性",
                enName: "Negativity",
                category: "Core",
                shortDef: "主体的核心力量，通过否定确立自身。",
                detailed: {
                    definition: `
### 1. 虚无的力量：否定性作为存在的根基

在传统形而上学中，"否定"被视为一种**缺陷**。否定意味着缺乏、不足、虚无。一个事物的否定就是它的反面，是它所不是的东西。

但黑格尔做出了一个激进的转向：**否定不是虚无，而是最强大的力量。** 否定性（Negativität）不是被动的、消极的，而是**主动的、创造性的**。

为什么？因为只有通过否定，事物才能够**区分自己**。一个事物如果不否定它的对立面，它就无法确立自己的身份。比如，"白色"之所以是白色，正是因为它**否定**了黑色。如果宇宙中只有白色，没有黑色，那么"白色"这个概念本身就无法存在。

更深层地说，**主体的形成本身就是一个否定的过程**。一个婴儿要成为一个独立的主体，就必须否定它与母亲的共生关系。一个个体要获得自由，就必须否定对权威的盲目服从。一个民族要获得独立，就必须否定帝国的统治。

这些否定都是**暴力的、痛苦的、创伤性的**。但正是通过这些否定，新的主体才得以诞生。`,

                    analogy: `
### 1. 雕塑中的否定性：米开朗琪罗的"解放"

米开朗琪罗曾说过一句著名的话："我看到天使被困在大理石中，我的工作就是将它解放出来。"

这个比喻完美地说明了什么是"否定性"。米开朗琪罗面对一块粗糙的大理石。这块石头本身没有任何形状，它是一个**混沌的、未分化的整体**。

但米开朗琪罗不是通过"添加"什么东西来创造雕像的。相反，他通过**敲掉、切割、否定**大理石的某些部分，来"显露"隐藏在其中的天使。

每一次锤子的敲击，都是一个**否定**。每一块被敲掉的石头，都是对混沌的一次否定。正是通过这些无数的、暴力的否定，一个美丽的、具有确定形态的天使才最终显现出来。

这就是黑格尔所说的"否定性"：**不是虚无，而是通过虚无来创造形态的力量**。

### 2. 心理学中的否定性：自我认同的形成

一个青少年的自我认同形成过程，就是一个充满否定性的过程。

青少年必须**否定**父母的权威，才能建立自己的独立人格。他必须**否定**社会的期待，才能发现自己真正的欲望。他必须**否定**童年的天真，才能面对成人世界的复杂性。

这些否定都是**痛苦的**。青少年经历的叛逆、迷茫、自我怀疑，都是这个否定过程的表现。但正是通过这些否定，一个真正的、独立的、具有自我意识的主体才得以形成。

如果一个人从不经历这些否定，如果他始终依赖父母、始终顺从社会、始终保持童年的天真，那么他就永远无法成为一个真正的主体。他会永远停留在一个**被动的、未分化的状态**。`,

                    application: `
### 1. 游戏中的"否定性"机制：摧毁与重建

在"爱欲视觉拓扑学"中，"否定性"可以被设计为游戏的**核心冲突引擎**。

**第一层：玩家的能力被否定**
玩家在游戏中积累了大量的能力、装备、等级。这些东西代表了玩家在游戏世界中的"身份"和"力量"。

但在游戏的某个关键时刻，所有这些都被**摧毁**了。玩家被剥夺了所有的能力，回到了一个赤裸的、无力的状态。这是一个**绝对的否定**。

**第二层：通过否定来重建自我**
但这个否定不是游戏的结束，而是一个**新的开始**。玩家必须在这个无力的状态中，重新发现自己的本质。他不再依赖外在的能力和装备，而是必须依靠**内在的意志和智慧**。

通过这个过程，玩家不仅恢复了之前的能力，而且获得了一种**更深层的、更本质的力量**。他现在理解了：真正的力量不来自外在的装备，而来自内在的否定性——那种能够摧毁自己、重新开始的勇气。

**第三层：否定性的无限循环**
这个过程可以无限重复。每一次的否定都会导致一个更深层的自我认识，每一次的重建都会导致一个更强大的主体。游戏变成了一个**关于自我否定与自我超越的永恒循环**。`
                }
            },
            { id: "h_unity_opposites", name: "矛盾的统一", enName: "Unity of Opposites", category: "Core", shortDef: "对立面在统一体中相互包含与转化。" },
            { id: "h_concrete_universal", name: "具体的普遍性", enName: "Concrete Universality", category: "Core", shortDef: "普遍性不是抽象的，而是包含所有特殊性的具体整体。" },
            { id: "h_teleology", name: "内在目的论", enName: "Intrinsic Teleology", category: "Core", shortDef: "事物发展的目的蕴含在其自身的变化逻辑之中。" }
        ]
    },
    {
        id: "hegel_logic",
        name: "二、逻辑学",
        enName: "Science of Logic",
        desc: "纯粹范畴的演化逻辑。",
        concepts: [
            { id: "h_being", name: "存在论 (Sein)", enName: "Doctrine of Being", category: "Logic", shortDef: "包含：纯有、纯无、变、定在、自为存在、质量度。" },
            { id: "h_essence", name: "本质论 (Wesen)", enName: "Doctrine of Essence", category: "Logic", shortDef: "包含：同一与差异、矛盾、根据、现象与本质、现实性。" },
            { id: "h_notion", name: "概念论 (Begriff)", enName: "Doctrine of the Notion", category: "Logic", shortDef: "包含：主观概念、客观性、理念。" }
        ]
    },
    {
        id: "hegel_phenomenology",
        name: "三、精神现象学",
        enName: "Phenomenology of Spirit",
        desc: "意识从感性到绝对知识的进化史。",
        concepts: [
            { id: "h_consciousness", name: "意识阶段", enName: "Consciousness", category: "Phenomenology", shortDef: "感性确定性、知觉、力与知性。" },
            { id: "h_self_consciousness", name: "自我意识", enName: "Self-Consciousness", category: "Phenomenology", shortDef: "主奴辩证法、斯多葛主义、怀疑主义、苦恼意识。" },
            { id: "h_reason_spirit", name: "理性与精神", enName: "Reason & Spirit", category: "Phenomenology", shortDef: "理性的观察、伦理行动、启蒙与革命。" },
            { id: "h_religion_absolute", name: "宗教与绝对知识", enName: "Religion & Absolute Knowing", category: "Phenomenology", shortDef: "具体的宗教形式到纯粹哲学视角的过渡。" }
        ]
    },
    {
        id: "hegel_right",
        name: "四、应用哲学",
        enName: "Applied Philosophy",
        desc: "法、历史、美学与自然。",
        concepts: [
            { id: "h_right", name: "法哲学", enName: "Philosophy of Right", category: "Applied", shortDef: "抽象法、道德、伦理（家庭、市民社会、国家）。" },
            { id: "h_history", name: "历史哲学", enName: "Philosophy of History", category: "Applied", shortDef: "理性的狡计、世界历史个人、自由意识的进步。" },
            { id: "h_aesthetics", name: "美学", enName: "Aesthetics", category: "Applied", shortDef: "美是理念的感性显现；象征型、古典型、浪漫型艺术。" },
            { id: "h_religion_nature", name: "宗教与自然哲学", enName: "Religion & Nature", category: "Applied", shortDef: "自然作为理念的“他性”外化；绝对精神的表象化。" }
        ]
    }
];

// 2. 马克思思想索引 (MARX)
export const MARX_INDEX: LacanCategory[] = [
    {
        id: "marx_philosophy",
        name: "一、哲学基础",
        enName: "Philosophical Foundation",
        desc: "马克思主义的本体论与认识论。",
        concepts: [
            { id: "m_dialectical_mat", name: "辩证唯物主义", enName: "Dialectical Materialism", category: "Philosophy", shortDef: "物质第一性，辩证运动是物质的基本属性。" },
            { id: "m_hist_mat", name: "历史唯物主义", enName: "Historical Materialism", category: "Philosophy", shortDef: "社会存在决定社会意识，生产力决定生产关系。" },
            { id: "m_alienation", name: "异化劳动理论", enName: "Theory of Alienation", category: "Philosophy", shortDef: "在资本主义下，劳动者与其产品、行为、本质及他人的分离。" },
            { id: "m_praxis", name: "实践论", enName: "Praxis", category: "Philosophy", shortDef: "认识世界是为了改变世界，真理在于实践。" }
        ]
    },
    {
        id: "marx_economics",
        name: "二、政治经济学批判",
        enName: "Critique of Political Economy",
        desc: "《资本论》的核心逻辑。",
        concepts: [
            { id: "m_commodity", name: "商品与价值", enName: "Commodity & Value", category: "Economics", shortDef: "使用价值、交换价值、劳动价值论、价值规律。" },
            { id: "m_surplus_value", name: "剩余价值理论", enName: "Surplus Value", category: "Economics", shortDef: "绝对剩余价值、相对剩余价值，利润的秘密。" },
            { id: "m_capital_accumulation", name: "资本积累与循环", enName: "Capital Accumulation", category: "Economics", shortDef: "资本的原始积累、资本的循环与周转。" },
            { id: "m_crisis", name: "经济危机理论", enName: "Economic Crisis", category: "Economics", shortDef: "生产过剩的必然性，利润率趋于下降的规律。" }
        ]
    },
    {
        id: "marx_politics",
        name: "三、政治学与社会学",
        enName: "Politics & Sociology",
        desc: "阶级斗争与社会结构。",
        concepts: [
            { id: "m_class_struggle", name: "阶级与阶级斗争", enName: "Class & Class Struggle", category: "Politics", shortDef: "至今一切社会的历史都是阶级斗争的历史。" },
            { id: "m_state_revolution", name: "国家与革命", enName: "State & Revolution", category: "Politics", shortDef: "国家是阶级统治的工具，无产阶级专政。" },
            { id: "m_ideology", name: "意识形态批判", enName: "Critique of Ideology", category: "Politics", shortDef: "统治阶级的思想是占统治地位的思想。" },
            { id: "m_communism", name: "共产主义与人的解放", enName: "Communism & Emancipation", category: "Politics", shortDef: "自由人的联合体，每个人的自由发展是全体人发展的条件。" }
        ]
    }
];

// 3. 拉康思想索引 (LACAN)
export const LACAN_INDEX: LacanCategory[] = [
    {
        id: "lacan_topology_1",
        name: "一、第一拓扑（RSI 三界）",
        enName: "The First Topology (RSI)",
        desc: "拉康理论的基石。",
        concepts: [
            { id: "l_imaginary", name: "想象界", enName: "The Imaginary", category: "RSI", shortDef: "镜像阶段、自我的误认、幻觉的完整性。" },
            { id: "l_symbolic", name: "符号界", enName: "The Symbolic", category: "RSI", shortDef: "大他者、语言、律法、能指链。" },
            { id: "l_real", name: "实在界", enName: "The Real", category: "RSI", shortDef: "不可能之物、创伤、剩余、无法符号化的核心。" },
            { id: "l_borromean", name: "博罗米结", enName: "Borromean Knot", category: "RSI", shortDef: "三界互相扣连的拓扑结构。" }
        ]
    },
    {
        id: "lacan_topology_2",
        name: "二、第二拓扑（主体结构）",
        enName: "The Second Topology",
        desc: "主体的分裂与形成。",
        concepts: [
            { id: "l_barred_subject", name: "被划杠的主体 ($)", enName: "The Barred Subject", category: "Subject", shortDef: "进入语言后必然的分裂与缺失。" },
            { id: "l_object_a", name: "对象 a", enName: "objet petit a", category: "Subject", shortDef: "欲望的原因，实在界的剩余，掉落的客体。" },
            { id: "l_other", name: "大他者 / 小他者", enName: "Big Other / little other", category: "Subject", shortDef: "象征秩序 vs 镜像认同对象。" },
            { id: "l_unconscious", name: "潜意识的语言结构", enName: "Unconscious structured like a language", category: "Subject", shortDef: "隐喻与换喻在主体中的运作。" }
        ]
    },
    {
        id: "lacan_drive",
        name: "三、欲望与驱力动力学",
        enName: "Desire & Drives",
        desc: "主体的动力机制。",
        concepts: [
            { id: "l_desire", name: "欲望的图表", enName: "Graph of Desire", category: "Dynamics", shortDef: "“Che vuoi?”（你想要什么？）" },
            { id: "l_jouissance", name: "享乐 (Jouissance)", enName: "Jouissance", category: "Dynamics", shortDef: "痛爽，超越快乐原则的致命快感。" },
            { id: "l_death_drive", name: "死亡驱力", enName: "Death Drive", category: "Dynamics", shortDef: "不死者的强迫性重复，生命的过度。" },
            { id: "l_fantasy", name: "基本幻想 ($ <> a)", enName: "Fundamental Fantasy", category: "Dynamics", shortDef: "主体与对象 a 的关系公式，支撑现实的屏障。" }
        ]
    },
    {
        id: "lacan_clinical",
        name: "四、临床结构与话语",
        enName: "Clinical Structures & Discourses",
        desc: "社会连接与病理结构。",
        concepts: [
            { id: "l_structures", name: "三大结构", enName: "Three Structures", category: "Clinical", shortDef: "神经症（压抑）、性倒错（否认）、精神病（排除）。" },
            { id: "l_discourses", name: "四大话语", enName: "Four Discourses", category: "Clinical", shortDef: "主人、大学、歇斯底里、分析家话语。" },
            { id: "l_paternal", name: "父之名 / 父性隐喻", enName: "Name-of-the-Father", category: "Clinical", shortDef: "进入符号界的关键钥匙。" },
            { id: "l_sinthome", name: "圣状 (Sinthome)", enName: "Sinthome", category: "Clinical", shortDef: "晚期拉康：自我加冕与艺术化的生活方式。" }
        ]
    }
];

// 4. 齐泽克思想索引 (ZIZEK)
export const ZIZEK_INDEX: LacanCategory[] = [
    {
        id: "zizek_ideology",
        name: "一、意识形态批判",
        enName: "Critique of Ideology",
        desc: "《意识形态的崇高客体》核心命题。",
        concepts: [
            { id: "z_cynical", name: "犬儒主义", enName: "Cynical Reason", category: "Ideology", shortDef: "“他们知道，但依然在做。”" },
            { id: "z_sublime_object", name: "意识形态的崇高客体", enName: "Sublime Object of Ideology", category: "Ideology", shortDef: "支撑社会现实的空洞能指。" },
            { id: "z_interpassivity", name: "交互被动性", enName: "Interpassivity", category: "Ideology", shortDef: "外包享乐，让对象替我感受。" },
            { id: "z_commodity_fetishism", name: "商品拜物教的拉康化", enName: "Lacanian Commodity Fetishism", category: "Ideology", shortDef: "商品作为对象 a 的幻象。" }
        ]
    },
    {
        id: "zizek_politics_violence",
        name: "二、政治、暴力与阶级斗争",
        enName: "Politics & Violence",
        desc: "当代权力的运作机制。",
        concepts: [
            { id: "z_violence", name: "暴力的三种形态", enName: "Three Forms of Violence", category: "Politics", shortDef: "主观暴力、符号暴力、系统性（客观）暴力。" },
            { id: "z_intruder", name: "入侵者 / 邻居", enName: "The Intruder / Neighbor", category: "Politics", shortDef: "对他人享乐方式的恐惧与种族主义。" },
            { id: "z_class_struggle", name: "作为视差的阶级斗争", enName: "Class Struggle as Parallax", category: "Politics", shortDef: "社会整体中无法弥合的缝隙。" },
            { id: "z_state_law", name: "法律的淫秽补充", enName: "Obscene Supplement of Law", category: "Politics", shortDef: "权力运作背后的非正式、压抑性享乐规则。" }
        ]
    },
    {
        id: "zizek_ontology",
        name: "三、本体论与真实遭遇",
        enName: "Ontology & The Real",
        desc: "视差、虚无与绝对者。",
        concepts: [
            { id: "z_parallax", name: "视差之见", enName: "The Parallax View", category: "Ontology", shortDef: "观察位置改变导致的客体断裂。" },
            { id: "z_less_than_nothing", name: "少于无", enName: "Less Than Nothing", category: "Ontology", shortDef: "黑格尔与拉康的本体论综合：虚无本身的不稳定。" },
            { id: "z_desert_real", name: "实在界的荒漠", enName: "The Desert of the Real", category: "Ontology", shortDef: "剥离意识形态滤镜后的噩梦式现实。" },
            { id: "z_big_other_void", name: "大他者的空无", enName: "Void of the Big Other", category: "Ontology", shortDef: "没有人在开飞机：没有保障真相的最终他者。" }
        ]
    },
    {
        id: "zizek_culture_act",
        name: "四、文化研究与革命行动",
        enName: "Culture & The Act",
        desc: "电影解构与真实行动。",
        concepts: [
            { id: "z_looking_awry", name: "斜目而视", enName: "Looking Awry", category: "Culture", shortDef: "通过流行文化垃圾寻找真理的方法论。" },
            { id: "z_decaf", name: "无咖啡因的现实", enName: "Decaf Reality", category: "Culture", shortDef: "拒绝致命内核的虚假多元主义。" },
            { id: "z_authentic_act", name: "真实的行动", enName: "The Authentic Act", category: "Culture", shortDef: "改变可能性坐标的、创伤性的自杀式飞跃。" },
            { id: "z_christian_atheism", name: "基督教无神论", enName: "Christian Atheism", category: "Culture", shortDef: "上帝之死带来的激进自由与共同体。" }
        ]
    }
];
