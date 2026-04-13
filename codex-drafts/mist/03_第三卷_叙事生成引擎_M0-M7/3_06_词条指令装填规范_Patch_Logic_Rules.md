# M0-M7 引擎词条指令装填规范 (v3.0 - M0 最高标准版)

> 本文档定义了“爱欲迷宫”叙事引擎底层词条（M0-M7）结构化指令的最终装填标准。
> **参考基准：** `data/engine_core/m0/` 系列文件。
> 遵循此规范，才能使引擎在抛弃所有“散文体”长篇 Prompt 的情况下，精确且高效地输出所需极权结构。

## 0. 设计哲学与核心原则

**1. 黑盒断言式 (Black-box Assertion)：**
系统现在是一个高压微服务架构。不要向 AI 解释“为什么”，只需要告诉它“是什么”以及“绝对禁止什么”。句子要冷酷、绝对。
**禁忌句式：** “这里描写主体如何如何，展现出他内心的挣扎…” 
**正确指令：** “必须展示主体 [XXX]。严禁出现 [YYY]。”

**2. 层级权限控制 (Hierarchical Control)**
- `patch.runtime`: **「最高优先级硬指令」 (CRITICAL - 物理锁死)**。负责界定绝对红线、条件反射式行为。
- `patch.mechanics`: **「底层协议公式」 (OEDIPAL - 逻辑算法)**。将叙事转化为参数/算子耦合关系。
- `logic`: **「叙事拓扑逻辑」 (HIGH - 结构断言)**。负责定性因果关系和拓扑闭环。
- `patch.aesthetic`: **「表层美学建议」 (NORMAL - 材质映射)**。负责材质、光影与叙事调性的映射。

---

## 1. 字段装填标准 (中英双语版)

所有词条必须包含对应的中英文版本，以确保不同内核版本的模型均能精准理解语义。

### 1) logic / logicEn (叙事拓扑逻辑)
**定位：** 机制断定、因果链的闭环法则。
**功能：** 告诉大模型：“这个词条本质上触发了什么哲学/心理学现象？”
**填写标准：** 
- **断言（Assertion）为主：** 采用公理表述。如“主体由于 X，必定产生 Y”。
- **引用参数：** 适宜引用 M1-M7 的参数名（如欲望 M3, 阻碍 M2）。

**【示例】:**
```typescript
logic: "每当获得 M3 幻象破绽(◇) 的进展，必须在 M6 代价切口(−Φ) 中立即支付等额的'功德'或'痛苦'以保持平衡。",
logicEn: "Whenever progress is made toward M3 Phantom-Flaw(◇), an equivalent 'merit' or 'pain' must be paid in M6 Price-Cut(−Φ) to maintain equilibrium."
```

### 2) patch.mechanics / mechanicsEn (协议算法 / 核心机制)
**定位：** 定义该词条在系统内部的参数变动逻辑。
**填写标准：**
- **公式化表达：** 使用 `[变量 = 值; 状态 = 开启]` 这种半代码风格。
- **关联协议：** 明确该词条挂载于哪种基础协议（如：基础神经症协议、基础分裂协议）。

**【示例】:**
```typescript
mechanics: "基础神经症协议 + [零和约束 = 开启; 道德核算周期 = 实时]",
mechanicsEn: "Base_NEUROSIS + [Zero-Sum_Constraint = True; Moral_Accounting_Interval = Instant]"
```

### 3) patch.runtime / runtimeEn (运行时硬指令 / 红线)
**定位：** 最绝对的执行边界。一经挂载，即为天条。
**功能：** 定义该词条出现时的**硬性表现标准**和**绝对禁止的行为**。
**填写标准：**
- **逻辑判断语句：** 推荐使用 `IF (条件) THEN (结果)` 结构。
- **强制性：** 使用“严禁”、“必须”、“强制执行”。

**【示例】:**
```typescript
runtime: "IF (检测到愉悦) THEN (自动生成：立即忏悔)。",
runtimeEn: "IF (Joy_Detected) THEN (Auto-generate: Immediate_Penance)."
```

### 4) patch.aesthetic / aestheticEn (美学修饰映射)
**定位：** 风格化限制与物质还原。
**功能：** 这个词条在“视觉描述”或“文字质感”上应该遵循什么调性？
**填写标准：**
- **聚焦物象 (Focus)：** 精确到具体的物质材质、物体。
- **文本调性 (Text)：** 规定叙事文体的质感（如：临床观察式、技术性、断裂感）。

**【示例】:**
```typescript
aesthetic: "聚焦：分类账 + 天平 + 数字列。文本：交易型短语。",
aestheticEn: "Focus: Ledgers + Scales + Number_Columns. Text: Transactional_Phrases."
```

---

## 2. 词条装填完整案例 (M0 标准)

以下为 `A2. 强迫症结构` 中的一个标准词条：

```typescript
{ 
  id: "os_ritual_freeze", 
  name: "仪式的冻结", nameEn: "Ritual Freeze", 
  def: "必须以特定顺序行动，否则认为世界会毁灭。", 
  defEn: "Must act in precise sequences, or the world will end.", 
  core: "神经症的魔法，用一系列符咒般的动作锁定宇宙的熵。", 
  coreEn: "Neurotic magic, using spell-like actions to lock cosmic entropy.",
  logic: "动作序列（M5）的强制指令。一旦顺序被打乱，主体必须强制重置（Reset）到 M0 的起点叙事。",
  logicEn: "Mandatory sequence of actions (M5). If the order is disrupted, the subject must forcibly reset to the M0 starting narrative.",
  patch: {
    mechanics: "基础神经症协议 + [序列严谨度 = 最大; 熵阻尼器 = 开启]",
    mechanicsEn: "Base_NEUROSIS + [Sequence_Strictness = Max; M5_Entropy_Damper = True]",
    aesthetic: "聚焦：几何排列 + 数字计数。文本：韵律性重复。",
    aestheticEn: "Focus: Geometrical_Arrangements + Numeric_Counting. Text: Rhythmic_Repetition.",
    runtime: "IF (序列错误) THEN (强制：叙事重置到 M0)。",
    runtimeEn: "IF (Order_Error) THEN (Force: Narrative_Reset_to_M0)."
  }
}
```

---

## 3. 注意防范机制

- **严禁冲突：** 确保同一词条内 `logic` 和 `patch.runtime` 不要在方向上打架。
- **简短精炼：** `patch.runtime` 应当控制在 50~100 字以内。超过这个长度容易增加幻觉。 
- **无需语法连贯：** 在指令区不需要使用复杂的起承转合。大模型看得懂直接相连的强判断句号。
- **双语对齐：** 所有的 English 字段必须存在，且尽量采用术语化的英文而非文学化翻译（如使用 `Subject` 代替 `Protagonist`, `Lack` 代替 `Emptiness`）。
