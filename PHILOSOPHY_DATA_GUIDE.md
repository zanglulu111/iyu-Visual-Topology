# 迷雾学派：哲学辞条维护手册 (Philosophy Data Guide)

本手册旨在指导 AI 助手或开发人员如何正确、高效地为《爱欲视觉拓扑学》项目增加或修改哲学辞条。本系统采用**索引与详情逻辑分离**的架构。

---

## 1. 核心架构说明

为了保证加载速度和数据安全性，辞条数据分为两层：

1.  **索引层 (Index Interface)**: 位于 `data/philosophy_refined.ts`。仅保存辞条的 ID、名称和极简定义，用于生成侧边栏列表。
2.  **详情层 (Detail Content)**: 位于 `public/data/philosophy/[哲学家ID]/details/[辞条ID].json`。保存包含 Markdown 格式的长篇内容。

---

## 2. 内容导向与哲学观 (Philosophical Orientation)

在撰写或生成内容时，必须遵循以下哲学立场：

1.  **拒绝平庸化**：对马克思、黑格尔、辩证法、唯物主义的理解，**严禁**停留在中学教科书水平，严禁采用波利策等人的机械唯物主义观点。
2.  **理论坐标**：我们的哲学观偏向**正统的马克思/黑格尔哲学**、**拉康的精神分析理论**、**齐泽克的新唯物主义**以及**当代左翼**的激进理论思想。
3.  **批判性深度**：辞条应从主体的分裂、欲望的拓扑学、意识形态的缝隙等维度切入，强调“否定性”和“实体即主体”的内核。

---

## 3. 辞条工作流 (Step-by-Step)

### 第一步：在索引中注册 (Register Index)
打开 `/data/philosophy_refined.ts`，在对应哲学家的 `concepts` 数组中添加新项。

**要求：**
- **保持简洁**：不要在此处写 `detailed` 对象。
- **ID 规范**：黑格尔前缀 `h_`，拉康前缀 `l_`，齐泽克 `z_`。

```typescript
// 示例
{ 
  id: "h_spirit",                // 必须与 JSON 文件名一致
  name: "精神", 
  enName: "Spirit", 
  category: "Core", 
  shortDef: "这里写一句话的极简概括。" 
}
```

### 第二步：创建详情文件 (Create Detail JSON)
在 `/public/data/philosophy/[哲学家ID]/details/` 目录下创建一个新的 JSON 文件，命名为 `[ID].json`。

---

## 4. 详情内容编写规范 (Editorial Standards)

每一个 JSON 详情文件应在以下三个维度进行创作：

### 4.1 核心定义 (definition 字段)
要求具有深刻的哲学思辨，从正统理论出发，揭示概念的内在矛盾。

### 4.2 拓扑类比与文化案例 (analogy 字段)
*   **跨界缝合**：将抽象哲学概念与具体的**文化现象**、**电影**、**小说**或**艺术作品**缝合。
*   **具体案例**：例如通过《黑客帝国》解释模拟，通过希区柯克解释“斜目而视”，通过卡夫卡解释官僚制等。

### 4.3 叙事引擎部署指示 (application 字段)
*   **创作聚焦**：举例应聚焦在**电影剧本、叙事创作、文艺生成**上。
*   **代码交互**：通过 JavaScript 伪代码展示如何将该哲学逻辑转化为叙事参数或动态剧情逻辑。

---

## 5. JSON 数据格式示例

```json
{
  "id": "h_spirit",
  "philosopher": "hegel",
  "detailed": {
    "definition": "### 1. 精神的主体化阶段\n\n解释黑格尔意义上的绝对精神...",
    "analogy": "### 电影案例：以《银翼杀手2049》为例\n\n主角 K 的主体觉醒正是通过对记忆这一“实体”的否定而达到的...",
    "application": "### 脚本引擎部署\n\n**剧情冲突参数设定**：\n\n```javascript\n// 模拟主体从必然性走向自由的转折逻辑\nconst protagonist = {\n  status: 'Object (Substance)',\n  trigger: 'Traumatic Event (M2)',\n  resolve: () => { this.status = 'Subject' }\n};\n```"
  }
}
```

---

## 6. 技术禁忌 (Technical Taboos)

1.  **标签页映射**：`definition` -> 核心定义；`analogy` -> 拓扑类比；`application` -> 应用指示。
2.  **字符转义**：JSON 中必须转义换行符 `\n` 和双引号 `\"`。
3.  **零冗余原则**：长篇内容**只允许**出现在 JSON 字典中，禁止写入 `.ts` 索引文件。
4.  **Markdown 代码块**：渲染引擎依赖标准 ` ```javascript ` 标记，请保持格式规范。

---

*本手册由 Antigravity 整理，用于确保项目哲学数据库的长期可维护性与理论纯正性。*
