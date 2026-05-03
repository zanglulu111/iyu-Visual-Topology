# 创意圣经 Prompt 全面精简方案

## 现状诊断

### 当前结构
```
NARRATIVE_SYSTEM_BIBLE (静态，~5500 tokens):
  ├── NAMING_PROTOCOL (~400 tokens)
  ├── LITERARY_AESTHETIC_PROTOCOL (~350 tokens)
  ├── NARRATIVE_ENGINE_FORMULA (~1200 tokens) ← 最大，含大量案例
  ├── THE_IRON_LAWS (~600 tokens) ← 与上面大量重复
  ├── NARRATIVE_ALGEBRAIC_PROTOCOL (~900 tokens) ← 又重复一遍公式+案例
  ├── FALLBACK_TOPOLOGY_TEMPLATE (~50 tokens)
  ├── STYLE_LOGIC_PROTOCOL (~250 tokens)
  └── THE_MASK_PROTOCOL (~250 tokens)

dynamicTaskPrompt (动态，~2500 tokens):
  ├── 任务定义 + 字数
  ├── Bible Strategy
  ├── World Law
  ├── Anchor Deduction
  ├── FORMAL LAW ENGINE ← 再次重复"禁止术语"、"禁止剧本格式"
  ├── VISUAL ASSET STANDARDS
  ├── 词汇黑名单 ← 再次重复
  ├── 概念草案 (treatment)
  ├── TOPOLOGY ← 又出现一次
  ├── PSYCHO PROTOCOL ← M0 定义重复
  ├── ENGINE DNA ← M0 定义已在这里
  ├── 风格执行
  └── JSON 输出格式 ← synopsis 字段里再次重复3条"核心指令"
```

### 冗余清单（确认删除/合并）

| # | 冗余项 | 出现次数 | 处理方式 |
|---|--------|---------|---------|
| 1 | "禁止 M0-M7 术语出现在正文中" | 5次 | 合并到 FORMAL LAW 一处 |
| 2 | "禁止剧本格式" | 3次 | 合并到 FORMAL LAW 一处 |
| 3 | "禁止学术腔/理工腔" | 4次 | 合并到 FORMAL LAW 一处 |
| 4 | "命名要独特/禁止通用名" | 2次（命名协议 + 铁律#9） | 保留命名协议，删铁律#9 |
| 5 | "本体论卫生学/沾染" | 2次（美学协议 + 铁律#4） | 保留美学协议，删铁律#4 |
| 6 | "触觉视觉" | 2次（美学协议 + 铁律#5） | 保留美学协议，删铁律#5 |
| 7 | "陌生化" | 2次（美学协议 + 铁律#2） | 保留美学协议，删铁律#2 |
| 8 | TOPOLOGY 模板 | 2次（静态+动态） | 只保留动态注入的那一次 |
| 9 | M0 PSYCHO PROTOCOL | 重复 ENGINE DNA 中的 M0 定义 | 合并为一段 |
| 10 | ALGEBRAIC_PROTOCOL | 与 ENGINE_FORMULA 高度重叠 | 精简合并 |
| 11 | synopsis 字段内的3条"核心指令" | 与 FORMAL LAW 完全重复 | 删除，只保留字数提醒 |

### 矛盾修复

| 矛盾 | 修复 |
|------|------|
| POV 设为"剧本视点 (Cinematic/Screenplay)" vs LAW_3 严禁剧本格式 | 在 POV 注入时添加澄清：剧本视点 = 用现在时+纯视觉动作写小说，≠ 剧本排版格式 |

---

## 精简后的新结构

```
BIBLE_SYSTEM_PROMPT (静态，~2800 tokens):
  ├── §1 ROLE & CORE AXIOM (~150 tokens)
  │   角色定义 + M→SUR转译公理 + 通俗叙事模板句式
  │
  ├── §2 NAMING (~200 tokens)
  │   黑名单 + 地缘逻辑 + 反过拟合（压缩为3条简规则）
  │
  ├── §3 AESTHETIC DNA (~250 tokens)
  │   沾染 + 光影 + 触觉 + 隐喻实体化 + 陌生化（合并原美学+铁律）
  │
  ├── §4 ENGINE POSITIONS (~500 tokens)
  │   M0-M7 位置定义（删所有案例，只留位置逻辑 + 1个精选案例）
  │   + 公式: Story = M0 { [(M1→M2→M3) / M4] * M5 } => (M6, M7)
  │   + 执行逻辑6条
  │
  ├── §5 SKIN CONTAINER (~200 tokens)
  │   SUR1-SUR10 一句话定义（压缩原有段落）
  │
  ├── §6 PROTOCOLS (~500 tokens)
  │   时代降维 + 风格逻辑(反刻奇) + 面具协议 + 拓扑权重
  │   （每个压缩为核心规则，删案例）
  │
  └── §7 ABSOLUTE LAWS (~200 tokens)
      FORMAL LAW：字数/结构/文体/术语禁令
      （所有禁令统一归口，只出现一次）

dynamicTaskPrompt (~1500 tokens):
  ├── TASK: 角色 + 类型 + 字数 + 策略
  ├── WORLD LAW（不变）
  ├── ANCHOR（不变）
  ├── BANNED WORDS（不变，但删除与 §7 重复的术语列表）
  ├── SOURCE: 概念草案
  ├── TOPOLOGY（仅动态注入的版本）
  ├── M0 PROTOCOL（与 DNA 合并为一段）
  ├── ENGINE DNA
  ├── STYLE
  └── JSON OUTPUT（删除 synopsis 内嵌的重复指令）
```

**预估 token 节省: ~4000 → 从 ~8000 降到 ~4300，节省 ~46%**

---

## 修改文件清单

1. **`data/engine_core/narrative_protocols.ts`** — 新增 `BIBLE_SYSTEM_PROMPT` 常量（或重构现有常量）
2. **`services/narrativeGenerator.ts`** — 修改 `buildNarrativeBiblePrompt` 使用精简后的 prompt
3. 现有的 `NARRATIVE_SYSTEM_BIBLE` 和分歧点 prompt（buildNarrativePrompt）**不改动**，只改圣经 prompt

## 风险控制

- **不动分歧点 prompt**：分歧点生成（3条路径）的 prompt 保持原样，不影响
- **可回滚**：新旧 prompt 可以共存，通过变量切换
- **A/B 测试**：改完后你可以用 X-Ray 透视仪对比新旧指令差异
