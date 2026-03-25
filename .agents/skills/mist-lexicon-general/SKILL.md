---
name: mist-lexicon-general
description: 通用哲学辞典词条创作系统——适用于除拉康/齐泽克学派之外的所有纯正黑硬哲学概念。
---

# 通用哲学辞典词条书写系统 (Mist Lexicon General System)

## **核心理念**

每个词条由**三个完全解离的 MD 文件**构成。生成时必须**严格遵守**以下 YAML Frontmatter 结构：

```json
{
  "file_structure": {
    "definition": "[id]_definition.md",
    "cases": "[id]_cases.md",
    "application": "[id]_application.md"
  },
  "content_constraints": {
    "forbidden_terms": ["迷雾学派", "叙事引擎", "参数", "主角"],
    "target_language": "zh-CN",
    "pure_philosophical_tone": true,
    "highlight_key_concepts": "**要求**：在正文书写时，必须对**核心哲学关键词**、**转折性逻辑节点**、**重要的定义性短语**进行**加粗**标注，以提升文本的可读性和重点表现力。",
    "instruction_removal": "**禁止**在正文中包含任何形如 '> {要求...}' 的模板占位符"
  }
}
```

---

## 内容输出详尽说明 (Content Specifications)

1. **案例选材绝对要求 (Case Selection)**：
   - 生成的案例**必须且只能**来自于具体的四个高浓度领域：**影视作品**（经典电影/剧集）、**文学巨著**、**真实历史事件**、或**硬核现实/科学现象**（如量子物理、病理学、社会学大事件等）。
   - **绝对禁止**使用干瘪、庸俗、缺乏张力的日常假设性小例子（例如“小明去买苹果”、“比如你面前有一把椅子”等）。案例必须自带极强的戏剧张力、画面感与理论穿透性。
2. **定义深度要求 (Definition Depth)**：
   - 概念定义部分必须具备极高的形而上学压迫感与理论纵深。必须包含思想史坐标的残酷演进（比如对前人软弱理论的清算）、以及底层机制的冷酷暴击分解。
   - 必须保持极度专业、不妥协的纯黑硬哲学语调，拒绝任何轻浮的科普式讲解。在阐释机制时，毫不避讳地展现概念底部的“矛盾、断裂、创伤或深渊”。
3. **字数与视觉压倒性**：
   - 严格保证设定的超高字数要求。同时在行文中高频使用**加粗（Bold）**来凸显哲学核心节点与转折机制，形成强大的视觉凝结力与学术厚度感。

---

## 质量标准协议 (Definition Standard YAML)

在创作 `_definition.md` 时，必须使用 **YAML Frontmatter** 存放元数据，正文从 H1 标题开始：

```yaml
---
title: "{词条中文名} ({词条英文名})"
thinker: "{思想家}"
id: "{id}"
category: "{分类名称}"
date: "{YYYY-MM-DD}"
version: "v2.0"
word_count_target: "3500 - 4000"
---
## 一、定义简述
## 二、哲学史坐标
## 三、底层逻辑和核心机制剖析
## 四、核心悖论与关键张力
```

*注：不再在正文中使用引用块（Blockquote）展示元数据，以防干扰页面渲染。*

---

## **工作流约束**

```json
{
  "workflow": [
    "Step 1: **核对** CASE_USAGE_REGISTRY.md 防重表",
    "Step 2: **元数据**一律写入顶部的 **YAML Frontmatter** (--- 之间)",
    "Step 3: **正文标题**编号强制使用**中文数字**（一、二、三、四）",
    "Step 4: **禁止**输出任何辅助性/指令性的占位符文本",
    "Step 5: 写入完成后立刻**更新** CASE_USAGE_REGISTRY.md"
  ]
}
```
