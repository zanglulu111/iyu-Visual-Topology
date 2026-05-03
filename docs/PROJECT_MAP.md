# 【迷雾学派】爱欲视觉拓扑学 项目地图

本文档是本项目的权威入口。它用于帮助协作者快速理解项目结构、内容生产流程、核心数据位置与当前维护边界。

## 一、项目定位

本项目不是单一网站，而是一个复合型创作系统：

- React/Vite 前端应用：提供叙事生成器、蓝图编辑、哲学辞典、视觉分析与档案管理界面。
- 迷雾学派叙事引擎：将 M0-M7（含 M7A/M7B 双结项）、SUR1-SUR10 + SUR-END、SV1-SV2 等参数转译为故事、影像、广告、实验影像和美学提示词。
- 哲学辞典与理论库：以黑格尔、马克思、拉康、齐泽克和迷雾学派为核心，维护长篇词条、案例和创作应用。
- AI Prompt 生产系统：把用户选择的结构参数、视觉输入和风格配置编译为可执行的生成提示。

项目的核心公理可概括为：

```text
Story = M0 {[(M1↔M2↔M3)/M4]×M5} =>Act M6 -> (M7A◇M7B) ↺ M1'
```

其中 M 轴提供欲望结构，SUR 轴提供现象层容器，SV 轴控制叙事工程尺度。

## 二、权威入口

- 项目地图：`docs/PROJECT_MAP.md`
- 文档索引：`docs/README.md`
- 核心理论总纲：`codex-drafts/mist/00_总纲与宪法/00_01_理论总纲/00_01_迷雾学派完整理论总纲.md`
- 核心叙事引擎最终总纲：`codex-drafts/mist/00_总纲与宪法/00_02_核心公式与叙事宪法/00_02_核心叙事引擎最终总纲.md`
- M7A/M7B 词库迁移与数据层书写规范：`docs/archive/mist-history/99_归档_历史版本与迁移记录/2026-04-28_非公开理论文档归档/00_迷雾学派M7A-M7B词库迁移与数据层书写规范.md`
- 项目简介：`README.md`
- 草稿格式说明：`codex-drafts/_模板说明.md`

当文档之间出现冲突时，优先级建议如下：

1. `docs/PROJECT_MAP.md`
2. `codex-drafts/mist/00_总纲与宪法/00_01_理论总纲/00_01_迷雾学派完整理论总纲.md`
3. `codex-drafts/mist/00_总纲与宪法/00_02_核心公式与叙事宪法/00_02_核心叙事引擎最终总纲.md`
4. 具体代码与数据文件
5. `.agents/skills/` 中的写作规范
6. 归档文档、scratchpad、历史报告

## 三、主目录职责

| 路径 | 职责 |
| --- | --- |
| `App.tsx` | 前端总入口，集中管理页面、路由、模态框、生成器状态和主要交互。 |
| `components/` | 主界面组件，包括生成器、蓝图编辑、哲学辞典、视觉侧栏、皮肤侧栏、档案与图谱视图。 |
| `components/blueprint/` | 蓝图输出后的分视图，如叙事、商业、实验、诗性、美学、资产和换喻视图。 |
| `services/` | AI 调用、Prompt 构建、数据注册、持久化、鉴权、视频、R2 存储等服务层。 |
| `data/` | 核心词库与生成参数。包含 M 轴、SUR 轴、SV 轴、美学、商业、预告片、诗性等数据源。 |
| `engine/` | 迷雾引擎计算器与物理注册表，用于张力计算、红线检测和结构化 payload 编译。 |
| `codex-drafts/` | 哲学辞典 Markdown 草稿源。新增和编辑词条时优先改这里。 |
| `public/data/codex/` | 前端按需读取的词条 JSON 输出。通常由转换脚本生成。 |
| `docs/` | 理论分析、维护指南、架构说明、历史记录与工作草稿。 |
| `docs/archive/` | 不属于当前运行主线的旧计划、旧原型、临时实验和历史材料。 |
| `docs/database/` | 需要人工执行或迁移参考的数据库 SQL。 |
| `docs/reports/` | 本地检查报告、历史错误输出和整理记录。 |
| `.agents/skills/` | 本项目专用 Codex 技能，规定迷雾引擎词条和哲学词条写作格式。 |
| `scripts/` | 数据转换、批处理、迁移和维护脚本。 |
| `contexts/` | React Context，如主题和设置状态。 |
| `utils/` | 导出、哲学加载、声音、区块和 Prompt 工具函数。 |
| `api/` | Vercel/Node 风格的辅助 API，当前主要用于 R2 文件操作。 |
| `src/` | 新增配置系统的局部模块，目前与根目录结构并行存在。 |
| `supabase/` | Supabase 本地配置。 |
| `.private/` | 本机私有配置与旧工具本地设置，不进入版本库。 |

## 四、应用与生成器主线

### 1. 前端入口

- `index.tsx` 挂载应用。
- `App.tsx` 组合主要页面与状态。
- `constants.ts` 汇总 driver、区块、词库和 UI 常量。
- `types.ts` 是全局类型定义核心。

### 2. 生成服务

重点文件：

- `services/geminiService.ts`：统一 AI 调用层，支持 Gemini、OpenAI 兼容接口、Anthropic 兼容接口等适配。
- `services/narrativeGenerator.ts`：叙事生成 Prompt 构建入口。
- `services/promptV3.ts`：当前主力 V3 Prompt 架构。
- `services/promptArchitectures.ts`：旧版 V1/V2 Prompt 架构。
- `services/dataRegistry.ts`：根据区块和标签查找词条定义、directive、patch 和 runtime 约束。
- `services/randomizer.ts`：随机填充与智能随机逻辑。

### 3. Driver 体系

`constants.ts` 中定义主要创作驱动：

- `NARRATIVE`：爱欲迷宫，叙事/电影故事生成。
- `COMMERCIAL`：欲望缝合，商业广告与产品欲望结构。
- `AESTHETIC`：情绪美学，视觉提示词与图像美学。
- `EXPERIMENTAL`：现象学还原，实验影像方向。
- `TRAILER`：虚拟幻象，预告片与高密度钩子结构。

## 五、迷雾引擎数据层

### 1. 骨层：M0-M7

核心位置：

- `data/engine_core/narrative_engine.ts`
- `data/engine_core/m0/`
- `data/engine_core/m1/`
- `data/engine_core/m2/`
- `data/engine_core/m3/`
- `data/engine_core/m4/`
- `data/engine_core/m5/`
- `data/engine_core/m6/`
- `data/engine_core/m7a/`（M7A 象征裁决）
- `data/engine_core/m7/`（旧路径名，当前作为 M7B 实在余痕库兼容使用）

当前语义：

| 模块 | 含义 |
| --- | --- |
| `M0` | 精神拓扑，作为叙事操作系统。 |
| `M1` | 缺失主体。 |
| `M2` | 真实遭遇。 |
| `M3` | 欲望幻想。 |
| `M4` | 大他者/镜像阻断。 |
| `M5` | 行动驱力。 |
| `M6` | 终极代价。 |
| `M7A` | 象征裁决，回溯性缝合点。 |
| `M7B` | 实在余痕，象征裁决之后仍不能被意义消化的存在性残余。 |

维护 M7A/M7B 数据时，以 `docs/archive/mist-history/99_归档_历史版本与迁移记录/2026-04-28_非公开理论文档归档/00_迷雾学派M7A-M7B词库迁移与数据层书写规范.md` 为迁移参考：`m7a/` 只写象征裁决，`m7/` 虽保留旧导出名 `M7_OUTCOMES`，但语义上只写实在余痕。

### 2. 皮层：SUR1-SUR10 + SUR-END

核心位置：

- `data/skin_libraries.ts`
- `data/engine_surface/SUR1/`
- `data/engine_surface/SUR2/`
- `data/engine_surface/SUR4/`
- `data/engine_surface/SUR5/`
- `data/engine_surface/SUR6/`
- `data/engine_surface/SUR7/`
- `data/engine_surface/SUR8/`
- `data/engine_surface/SUR9/`
- `data/engine_surface/SUR10/`
- `data/engine_surface/SUR11/`（旧数据路径，当前作为 `SUR-END` 显性收场库兼容使用）

当前 UI 映射里没有独立的 `SUR3` 目录；时空坐标相关职责目前主要并入 `skin_era` / `SUR2` 语境。

当前 SUR5、SUR6、SUR7、SUR8、SUR9、SUR10 与 SUR-END 都是表层预设：`SUR5` 语义上读作 `SUR-OBJ` 欲望对象库，只描述可被追寻、争夺、交换或保护的对象；`SUR6` 语义上读作 `SUR-LOC` 空间容器库，只描述事件发生在什么可见空间里；`SUR7` 语义上读作 `SUR-CAST` 选角呈现库，只描述人物在画面、称谓和互动中如何被呈现；`SUR8` 语义上读作 `SUR-AGE` 年龄阶段库，只描述人物进入故事时的可见年岁区间与行动条件；`SUR9` 语义上读作 `SUR-ROLE` 职业身份库，只描述人物以什么社会身份、职业岗位或登记状态进入故事世界；`SUR10` 语义上读作 `SUR-BELIEF` 信念预设库，只描述人物开场时用于解释世界的表层信念语言；`SUR11/` 语义上读作 `SUR-END` 显性收场库，只描述最后可见事件与画面停点。它们都不得替 M3、M6、M7A 或 M7B 书写核心解释。

### 3. 工程轴：SV1-SV2

核心位置：

- `data/engine_sv/SV1/`：叙事结构。
- `data/engine_sv/SV2/`：故事体量。
- `data/engine_sv/SV3/`：意识、极简、繁复等视觉/叙事倾向扩展。

## 六、哲学辞典系统

### 1. 索引层

`data/codex/philosophy_refined.ts` 是哲学辞典的主索引，包含：

- `MIST_INDEX`
- `HEGEL_INDEX`
- `MARX_INDEX`
- `LACAN_INDEX`
- `ZIZEK_INDEX`

索引层只放短定义、分类、标签、关联和显示信息。长文本不应直接写入索引。

### 2. 草稿层

`codex-drafts/` 是当前优先编辑位置：

```text
codex-drafts/
  mist/
  hegel/
  marx/
  lacan/
  zizek/
```

普通哲学家词条采用三段式：

```markdown
## 定义

## 类比

## 应用
```

迷雾学派引擎词条可能采用引擎章节式结构，转换脚本已对部分 M0-M7 标题做兼容解析。

### 3. 输出层

`public/data/codex/[philosopher]/details/[id].json` 是前端读取的详情文件。通常不要直接手写 JSON，优先从 Markdown 草稿转换生成。

转换命令：

```bash
npm run codex:build
npm run codex:watch
npm run codex:import
```

脚本位置：

```text
scripts/codex-convert.cjs
```

### 4. 词条 ID 约定

| 体系 | 前缀 |
| --- | --- |
| 迷雾学派 | `mist_` |
| 黑格尔 | `h_` |
| 马克思 | `m_` |
| 拉康 | `l_` |
| 齐泽克 | `z_` |

文件名必须与索引中的 `id` 完全一致。

## 七、项目专用技能

本项目有三套本地 Codex 技能：

- `.agents/skills/mist-engine-lexicon/SKILL.md`
- `.agents/skills/mist-lexicon-general/SKILL.md`
- `.agents/skills/mist-lexicon-lacan/SKILL.md`

使用原则：

- 写 M0-M7、动力回路、引擎参数解释时，使用 `mist-engine-lexicon`。
- 写黑格尔、马克思等通用哲学词条时，使用 `mist-lexicon-general`。
- 写拉康、齐泽克、对象 a、实在界、拓扑学、数学元相关词条时，使用 `mist-lexicon-lacan`。

这三套技能对字数、YAML、案例来源、加粗密度和禁用词都有强约束。正式写词条前应先阅读对应 `SKILL.md`。

## 八、废弃与归档边界

以下模块或目录需要谨慎处理：

- `data/engine_core/synthesizer/_archive/`
- `data/engine_surface/SUR6/_archive/`
- `docs/archive/`
- `docs/scratchpad_*.md`
- `docs/archive/claude-plans/`
- `docs/archive/legacy-web/`

当前代码注释中已明确：

- `M4X / M5X` 已在 v3.0 正交性优化中移除。
- `SUR4X` 已在 v3.1 中移除。
- `skin_animation_genre` 标记为 deprecated motif block，当前在查找时回退到 `SUR1` 数据。

维护原则：

- 归档目录只作为历史参考，不应作为新功能依赖。
- 若归档 TypeScript 文件影响类型检查，应通过 `tsconfig` 排除或迁移为非编译资产，而不是重新激活旧逻辑。
- 新增数据时优先接入新版 `engine_core/`、`engine_surface/`、`engine_sv/` 主线。

## 九、当前整理状态

2026-05-03 整理后：

- 根目录保留应用入口、配置、源码主线和必须位于根目录的工具文件。
- `PROJECT_MAP.md` 已移入 `docs/PROJECT_MAP.md`。
- 旧静态原型 `codex-web/` 已移入 `docs/archive/legacy-web/codex-web/`。
- 旧 Claude 计划已移入 `docs/archive/claude-plans/`。
- 手工 SQL 已移入 `docs/database/`。
- 旧类型错误报告已移入 `docs/reports/`。
- 本机私有工具配置已移入 `.private/`。

`dist/`、`node_modules/`、`.vercel/`、`.agents/resources/`、`.agents/.python-deps/` 和 `outputs/` 是可再生或本地生成内容，默认不作为版本库主线维护。

## 十、推荐协作流程

### 1. 写新哲学词条

1. 阅读对应技能文件。
2. 检查 `data/codex/philosophy_refined.ts` 是否已有索引。
3. 在 `codex-drafts/[philosopher]/[id].md` 写三段式内容。
4. 运行 `npm run codex:build`。
5. 检查 `public/data/codex/[philosopher]/details/[id].json`。

### 2. 写迷雾引擎词条

1. 使用 `mist-engine-lexicon`。
2. 查阅 `codex-drafts/mist/00_总纲与宪法/00_01_理论总纲/00_01_迷雾学派完整理论总纲.md`。
3. 对照 `data/engine_core/` 或 `data/engine_surface/` 的真实参数族群。
4. 保持 M 轴与 SUR 轴正交，不把物质描述直接塞入骨层逻辑。

### 3. 改前端功能

1. 先定位 `App.tsx`、相关 `components/` 和 `services/`。
2. 确认数据来源是 `constants.ts`、`dataRegistry.ts` 还是具体 `data/` 文件。
3. 修改后运行 `npm run lint` 或至少说明当前已知类型错误。

### 4. 整理文档

1. 优先修正权威入口。
2. 把历史报告放入 `docs/archive/`。
3. 把临时分析保留为 `scratchpad` 时，需要在正式文档里沉淀结论。

## 十一、维护优先级建议

1. 修复 `README.md` 中的失效链接。
2. 排除或整理 `_archive` TypeScript 文件，让类型检查恢复可用。
3. 统一 `WorldLawConfig` 的类型定义与 generator 使用方式。
4. 清理新旧文档中的路径冲突，统一为 `public/data/codex/` 和 `codex-drafts/`。
5. 为迷雾学派 `mist/` 草稿与输出 JSON 建立更明确的转换与索引校验。
