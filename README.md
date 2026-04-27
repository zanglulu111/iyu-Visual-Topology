<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 【迷雾学派】爱欲视觉拓扑学 (Visionary Eros Topology)

这是一部集合了精神分析（拉康）、辩证法（黑格尔）、政治经济学（马克思）以及齐泽克激进理论的视觉拓扑学辞条系统。

## 快速开始

1. **核心引导**：请首选阅读 [PROJECT_MAP.md](./PROJECT_MAP.md)。
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

- [项目地图](./PROJECT_MAP.md) - 项目结构、目录职责、数据流、废弃边界与协作流程
- [迷雾学派理论总纲](./docs/MIST_SCHOOL_THEORY_OVERVIEW.md) - 理论底盘与叙事公式
- [词条补充与撰写指南](./docs/guides/ADD_PHILOSOPHY_CODEX_GUIDE.md) - 新词条填充必读
- [哲学数据加载说明](./docs/PHILOSOPHY_LOADER_GUIDE.md) - 前端辞典加载与缓存机制
- [草稿格式说明](./codex-drafts/_模板说明.md) - Markdown 到 JSON 的写作格式

### 快速参考

- [常用命令参考](./docs/QUICK_REFERENCE.md)
- [配置使用指南](./docs/guides/CONFIG_USAGE_GUIDE.md)
- [哲学数据指南](./docs/guides/PHILOSOPHY_DATA_GUIDE.md)

### 历史记录与存档

- 过往任务报告、修复总结及已完成的集成日志详见 [docs/archive/](./docs/archive/)。

---

*“真理不仅被理解为实体，且同样被理解为主体。” —— 迷雾学派*
