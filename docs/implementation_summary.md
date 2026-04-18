# ✅ 三版本 Prompt 架构实现完成

## 变更文件清单

| 文件 | 操作 | 说明 |
|---|---|---|
| `services/narrativeGenerator_legacy.ts` | **新增（备份）** | 当前生产版本的完整备份 |
| `services/promptArchitectures.ts` | **新增** | V1 + V2 两套全新的 Prompt 构建器 |
| `services/narrativeGenerator.ts` | **修改** | 新增 `archVersion` 参数 + 分流委托逻辑 |
| `components/PromptInspectorModal.tsx` | **修改** | 新增版本切换 Tab + Token 计数器 |

---

## 三版本核心差异

| 维度 | Legacy (原版) | V1 六层注意力 | V2 五区块融合 |
|---|---|---|---|
| **结构** | 宪法(静态) + 任务(动态) | L0→L1→L2→L3→L4→L5 | B0→B1(A+B)→B2→B3→B4→B5 |
| **M0-M7 理解** | 散落在协议中 + Case Studies | 压缩公式 + 计算器注入 | **350字公式教程(静态) + 完整DNA(动态)** |
| **NARRATIVE_ARC** | ❌ 缺失 | ✅ 从 mist_calculator 注入 CRITICAL | ✅ 从 mist_calculator 注入 |
| **Force Directives** | ❌ 缺失 | ✅ CRITICAL/HIGH/NORMAL 分级注入 | ✅ 红线/警告注入 |
| **静态宪法** | ~4000字 (含大量案例) | ~600字 (极度压缩) | ❌ 无独立宪法块，融入铁律(600字) |
| **注意力设计** | 无 | 首因区→CRITICAL锁 / 近因区→复述 | 公式理解在前 / 铁律在后 |
| **SUR 处理** | 每个都解释锚定关系 | 物料清单(全列) | 只列有值的 + 转译任务 |
| **Token 预算** | ~5500 | ~3000 | ~2500 |

---

## 如何测试

### 在 X-Ray 指令透视仪中切换

1. 打开 X-Ray 指令透视仪（点击顶部工具栏按钮）
2. 顶部新增了 **3 个版本 Tab**：
   - `Legacy 原版` — 当前生产版本
   - `V1 六层注意力` — 注意力金字塔 + 计算器注入
   - `V2 五区块融合` — 核心公式 + 表层 + 法则 + 结构 + 铁律
3. 切换 Tab 即可实时预览不同版本的指令内容
4. 右上角显示**估算 Token 数**（中文约 2 token/字）
5. 点击"复制"可复制当前版本的完整指令

### 🚨 CRITICAL 高亮

V1/V2 中带有 🚨 标记的行会在透视仪中以**红色高亮背景**显示，方便快速识别致命锁。

### 实际生成测试

当前 `geminiService.ts` 中调用 `buildNarrativePrompt` 时**默认使用 Legacy 版本**，不影响生产。如需切换生产版本，只需在调用处传入 `'v1'` 或 `'v2'`：

```typescript
// geminiService.ts L674
promptData = buildNarrativePrompt(duration, fieldState, visionInput, visionImage, worldLaw, 'v2');
```

---

## 新增功能亮点

- **mist_calculator 接入**：V1/V2 首次调用 `runMistEngine()`，将张力计算器的输出（NARRATIVE_ARC、红线、Force Directives）直接注入 Prompt
- **近因复述**：V1/V2 在 Prompt 末尾重复最关键的 3 条约束（M0 逻辑、ARC 走向、M7 宪法），利用 LLM 近因效应加强锁定
- **Token 计数器**：X-Ray 透视仪顶栏实时显示估算 Token 数
