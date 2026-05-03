# 项目整理报告 2026-05-03

## 已完成

- 新建 `docs/` 文档中枢，并将项目地图移至 `docs/PROJECT_MAP.md`。
- 新建 `docs/README.md`、`docs/archive/README.md`，明确文档、归档、数据库脚本和报告边界。
- 补充 `.private/README.md`，说明本机私有配置的放置边界。
- 将旧静态原型 `codex-web/` 移至 `docs/archive/legacy-web/codex-web/`。
- 将旧 Claude 计划移至 `docs/archive/claude-plans/`。
- 将手工 Supabase 激活码脚本移至 `docs/database/redemption_codes.sql`。
- 将旧类型错误输出移至 `docs/reports/ts_errors_legacy.txt`。
- 将一次性引擎测试脚本移至 `docs/archive/test-engine.ts`。
- 将 `.claude/settings.local.json` 移至 `.private/claude/settings.local.json`，并将 `.private/` 设置为本机私有目录。
- 清理可再生目录：`dist/`、`.vercel/`、`outputs/`、`.agents/resources/`、`.agents/.python-deps/`。
- 清理大部分 `.DS_Store`；`.git/` 与 `.agents/` 内少数系统痕迹受权限保护，未强制处理。
- 更新 `.gitignore`、`README.md`、`docs/PROJECT_MAP.md` 和 `tsconfig.json`。

## 验证结果

- `npm install`：通过，恢复本地依赖。
- `npm run lint`：通过。
- `npm run build`：通过，Vite 成功完成生产构建。
- 仍有非阻塞警告：Vite 提示部分 chunk 过大，以及 `services/supabaseDatabase.ts` 的动态/静态混合导入提示。

## 当前边界

- 根目录保留应用入口、配置、源码主线和必须位于根目录的工具文件。
- `docs/archive/` 只保存历史参考，不作为新功能依赖。
- `dist/`、`outputs/`、`.vercel/`、`.agents/resources/`、`.agents/.python-deps/` 仍是可再生或本地生成内容，默认忽略。
- `node_modules/` 已重新安装，便于继续本地开发；它仍被 `.gitignore` 忽略。
