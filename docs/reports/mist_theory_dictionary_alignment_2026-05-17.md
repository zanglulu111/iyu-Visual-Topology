# 迷雾学派理论辞典终极对齐审计

日期：2026-05-17

## 检查范围

- 源辞典：`codex-drafts/mist` 下 35 个 Markdown 词条。
- 前端辞典数据：`public/data/codex/mist/summaries.json` 与 `public/data/codex/mist/details/*.json`。
- 引擎权威层：`data/engine_core/narrative_engine.ts`、`data/engine_core/narrative_protocols.ts`、`services/promptV3.ts`、`services/promptV4.ts`、`services/worldLaw.ts`。

## 当前最高公式

```text
Story = M0 {[(M1↔M2↔M3)/M4]×M5} ⇒Act M6 → (M7A◇M7B) ↺ M1'
```

最终裁定：

- M0 是全局精神拓扑，不是病名、性格标签或剧情职业。
- M1-M6 是外部故事中的压力链，不是参数清单。
- M7A 是象征裁决，负责回溯性改写行动意义。
- M7B 是实在余痕，只在同一终点留下不可消化的末帧余震。
- SUR-END 是最后可见画面，不替 M7A 裁决，也不替 M7B 留痕。
- SV1/SV2 只管结构模板与体量密度，不生成主体原因。

## 已修正

1. `M7A：象征裁决`
   - 把“先选 M7A 反推一切”改为“外部故事先成立，M7A 终点回咬”。
   - 与 v3/v4 的 external-story-first 生成协议对齐，避免裁决层抢跑成主题模板。

2. `M7B：实在余痕`
   - 增加“运行时压缩法则”：理论上的“之后”不能在生成端扩写成尾声、时间跳转或后日谈。
   - 明确 M7B 在成片输出中压缩为主线最后场面内的 0-3 句末帧余震。

3. `M0：精神拓扑`
   - 把临床原型标注为理论考古与后台建模。
   - 明确运行时必须转译为世界响应、行动组织、感官与因果变形，不输出诊断化语言。

4. `SV1-SV2：结构与体量`
   - 把“不替 M7 裁决”改为“不替 M7A 裁决，也不替 M7B 留痕”。
   - 把“三幕承接 M6/M7”改为“承接 M6 与 M7A/M7B 双结项”。

5. `M5-M6-M7A/M7B：驱力结项回路`
   - 修正标题与索引名称，避免继续暗示单一 M7 出口。

6. `M4：大他者阻断`
   - 修复红线段落的长行混排，保持“阻断不是反派”的方法论边界可读。

7. 前端数据同步
   - 已同步 13 个受影响条目到 `public/data/codex/mist/details`。
   - 已同步 `summaries.json` 中对应条目的名称与摘要。

8. 公共简称归一
   - 修正 M7A 前段仍残留的“创作者最先选择 M7A”旧原则，避免与 v3/v4 外部故事优先协议冲突。
   - 将会被误读为单一 M7 出口的 `M1-M7`、`M0-M7` 运行句改为 `M1-M7A/M7B` 或 `M0-M7A/M7B`。

9. 生成顺序总纲对齐
   - 将理论总纲、叙事宪法、爱欲结构发生器里“从终点倒建 / 先写 M7A 与 M7B”的旧流程，改为“外部故事机关先成立，终端双结项再裁决”。
   - 保留 M7A/M7B 的终局裁决权，但明确它们不能在生成流程起点抢先替故事写主题答案。

## 剩余观察

- `M0-M7` 作为卷名、目录名或历史公共骨架简称仍保留。正文中涉及运行逻辑、终点出口、位点范围的句子已优先改为 `M0-M7A/M7B`。
- 词条 frontmatter 目前使用项目实际需要的字段；它没有完全执行 `mist-engine-lexicon` 技能里建议的 `formula_position`、`symbol` 等扩展字段。当前前端转换器不依赖这些字段，可作为后续元数据增强。
- `data/engine_core/narrative_engine.ts` 里 M4 的界面名仍是“大他者/镜像”，辞典主名是“大他者阻断”。语义不冲突，因为 M4 词条包含镜像阻断，但未来可统一 UI 标签。
- `scripts/clean-mist-public.cjs` 会同时重写源 Markdown 与 public JSON。以后若只想刷新 public 数据，建议先拆出只读源、只写 public 的转换脚本，避免一次性改动全部 35 个源词条。

## 建议下一步

下一步可以决定是否补齐 frontmatter 元数据；这属于辞典工程增强，不影响当前引擎口径。
