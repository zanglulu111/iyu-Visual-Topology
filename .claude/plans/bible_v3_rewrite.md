# Bible Prompt V3 级全面重写方案

## 核心改动

将 `buildNarrativeBiblePrompt` 从「旧版扁平常量 + 碎片协议拼接」升级为与分歧点 V3 同级的架构。

## 新架构 (6 个 SECTION)

```
SECTION_ROLE        — 身份声明 + 任务句式（复用 V3 的 buildTaskSentence）
SECTION_FORMULA     — 公式定义（复用 V3 的 M0-M7A/M7B 完整定义，含辩证法机制）
SECTION_LAWS        — 创作铁律（复用 V3 的极度压缩版铁律）
SECTION_DIRECTOR    — 导演笔记（复用 V3 的 buildMDirective，含 bright/dark/tension 温度面向）
SECTION_SKIN        — 世界法则 + SUR（复用 V3 的 5 级物理法则 + buildSurNotes + SUR 冲突裁决）
SECTION_OUTPUT      — Bible 特有的输出格式（保留小说正文 + JSON 资产格式）
```

## 关键升级点

| 旧版问题 | 新版修复 |
|----------|----------|
| M7 只有一个，没有 M7A/M7B 区分 | 使用 V3 的 M7A（象征裁决）+ M7B（实在余痕）|
| M 参数用 findItemDetails 拿 core 定义 | 改用 getDirective 拿 directive 面向（含温度）|
| WORLD LAW 只有简短 3 行描述 | 使用 V3 的 5 级物理法则完整体系（含降维规则）|
| SUR 参数只有 buildContext 平铺输出 | 使用 buildSurNotes（按叙事功能分类，标注 M 轴接口）|
| 无 SUR 冲突裁决 | 加入 V3 的冲突裁决协议（SUR1×SUR1, SUR2×SUR2 等）|
| 静态 BIBLE_SYSTEM_PROMPT 含大量重复 | 删除，改为动态组装 |
| 无思考过程要求 | 加入 thought_process 指引（Bible 版，专注长文叙事）|

## 从 V3 复用的函数

全部从 `promptV3.ts` 导出复用，不重复实现：
- `buildMDirective` — 带温度的导演笔记
- `buildTaskSentence` — SUR 任务句式
- `buildSurNotes` — SUR 参数注释 + 冲突裁决
- `getTagsBySuffix` — 标签提取
- `buildBannedWords` — 禁用词表

## Bible 特有部分（不从 V3 复用）

- 体量策略（Volume Strategy）— Bible 根据 SV2 体量标签决定字数和模式
- 风格注入 — styleConfig 中的作者风格/POV/感官侧重
- JSON 输出格式 — 小说正文 + context + assets
- 视觉资产标准
- treatment 素材注入

## 修改文件

1. **`services/promptV3.ts`** — 将需要复用的函数从文件内部提取为 `export`
2. **`services/narrativeGenerator.ts`** — 重写 `buildNarrativeBiblePrompt`
3. **`data/engine_core/narrative_protocols.ts`** — 删除 `BIBLE_SYSTEM_PROMPT`（不再需要）

## 不改动

- 分歧点 prompt（V3）— 完全不动
- Commercial/Experimental/Aesthetic Bible prompt — 本次不改
- BiblePromptInspectorModal — 调用接口不变，自动适配
