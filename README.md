<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 【迷雾学派】爱欲视觉拓扑学 (Visionary Eros Topology)

这是一部集合了精神分析（拉康）、辩证法（黑格尔）、政治经济学（马克思）以及齐泽克激进理论的视觉拓扑学辞条系统。

## 快速开始

1. **核心引导**：请首选阅读 [docs/PROJECT_MAP.md](./docs/PROJECT_MAP.md)。
2. **本地运行**：
   - 安装依赖：`npm install`
   - 配置环境：设置 `GEMINI_API_KEY` 于 `.env.local`
   - 启动应用：`npm run dev`
3. **词条维护**：
   - 优先在 `codex-drafts/` 中编辑 Markdown 草稿。
   - 运行 `npm run codex:build` 转换为前端读取的 JSON。
   - 新增词条时同步注册 `data/codex/philosophy_refined.ts`。

## 项目维护与文档指南

根目录保留最小入口，详细文档主要位于 `docs/`、`codex-drafts/` 与 `.agents/skills/`。

### 权威入口

- [项目地图](./docs/PROJECT_MAP.md) - 项目结构、目录职责、数据流、废弃边界与协作流程
- [文档索引](./docs/README.md) - 文档、归档、数据库脚本与报告入口
- [迷雾学派理论总纲](./codex-drafts/mist/00_总纲与宪法/00_01_理论总纲/00_01_迷雾学派完整理论总纲.md) - 理论底盘与叙事公式
- [核心叙事引擎总纲](./codex-drafts/mist/00_总纲与宪法/00_02_核心公式与叙事宪法/00_02_核心叙事引擎最终总纲.md) - M0-M7 生成公式与叙事宪法
- [草稿格式说明](./codex-drafts/_模板说明.md) - Markdown 到 JSON 的写作格式

### 快速参考

- 代码入口：`App.tsx`、`index.tsx`、`vite.config.ts`
- 数据入口：`data/`、`public/data/codex/`
- 草稿入口：`codex-drafts/`
- 项目技能：`.agents/skills/`

### 历史记录与存档

- 过往任务报告、修复总结及已完成的集成日志详见 [docs/archive/](./docs/archive/)。

---

*“真理不仅被理解为实体，且同样被理解为主体。” —— 迷雾学派*
