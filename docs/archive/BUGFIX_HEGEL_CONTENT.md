# 🧪 黑格尔词条显示问题 - 已修复

## 问题描述

用户反馈：黑格尔第一章的词条点击后没有显示详细内容。

## 问题原因

1. **数据已正确拆分**：7个词条的详细内容都已成功生成在 `data/philosophy/hegel/details/` 目录
2. **数据加载正常**：`usePhilosophyDetail` Hook 可以正确加载详细内容
3. **问题所在**：当用户点击词条时，`selectedItem.data.detailed` 字段没有被正确更新

## 解决方案

添加了一个 `useEffect` 来监听 `selectedDetail` 的变化，当详细内容加载完成后，自动更新 `selectedItem` 对象：

```typescript
// 当详细内容加载完成后，更新 selectedItem
React.useEffect(() => {
  if (selectedDetail && selectedItem?.data && activeDictionary === 'HEGEL') {
    // 更新 selectedItem 以包含详细内容
    setSelectedItem(prev => {
      if (!prev || !prev.data) return prev;
      return {
        ...prev,
        data: {
          ...prev.data,
          detailed: selectedDetail
        }
      };
    });
  }
}, [selectedDetail, activeDictionary]);
```

## 测试步骤

### 1. 启动开发服务器

```bash
npm run dev
```

### 2. 打开哲学辞典页面

1. 进入应用
2. 点击顶部导航的"哲学辞典"或相关入口
3. 选择"黑格尔 (Hegel)"标签

### 3. 验证词条列表

应该看到 7 个词条：
- ✅ 实体即主体 (Substance is Subject)
- ✅ 辩证法 (Dialectics)
- ✅ 扬弃 (Aufhebung)
- ✅ 否定性 (Negativity)
- ✅ 矛盾的统一 (Unity of Opposites)
- ✅ 具体的普遍性 (Concrete Universality)
- ✅ 内在目的论 (Intrinsic Teleology)

### 4. 点击任意词条

例如点击"辩证法"，应该看到：

**左侧栏 - 核心定义**：
- 显示完整的概念定义（约 3000-5000 字）
- 包含多个章节标题（### 1. xxx, ### 2. xxx）
- 内容应该是 Markdown 格式渲染的

**右上栏 - 拓扑类比与案例**：
- 显示具体的案例分析
- 包含音乐、婚姻、革命等实际例子

**右下栏 - 叙事引擎部署指示**：
- 显示如何在叙事引擎中应用这个概念
- 包含 M0-M7 模块的具体指示

### 5. 验证数据加载

打开浏览器开发者工具：

**Network 面板**：
- 首次打开页面：应该只加载 `index.json` (1.4 KB)
- 点击词条：应该加载对应的 `details/h_dialectic.json` (~14 KB)
- 再次点击同一词条：应该从缓存读取（0 KB，或显示 "disk cache"）

**Console 面板**：
- 不应该有任何错误
- 可能会看到 React Query 的日志（如果启用了 DevTools）

**Application 面板 → Local Storage**：
- 应该看到 `philosophy_summaries` 键（包含摘要数据）
- 应该看到 `philosophy_details` 键（包含已查看的详细内容）

### 6. 测试其他词条

依次点击其他词条，验证：
- ✅ 每个词条都能正确显示详细内容
- ✅ 内容格式正确（Markdown 渲染）
- ✅ 没有加载错误
- ✅ 切换词条时内容正确更新

## 预期结果

### 首次加载
- 词条列表瞬间显示（1.4 KB 索引）
- 显示简短定义（shortDef）

### 点击词条
- 显示加载状态（如果有）
- 1-2秒内加载完成（14 KB 详细内容）
- 显示完整的三栏内容

### 再次点击
- 瞬间显示（从缓存读取）
- 无需网络请求

## 如果仍然没有内容

### 检查 1：数据文件是否存在

```bash
ls -lh data/philosophy/hegel/details/
```

应该看到 7 个 JSON 文件。

### 检查 2：数据文件内容是否正确

```bash
head -20 data/philosophy/hegel/details/h_dialectic.json
```

应该看到 JSON 格式的数据，包含 `definition`, `analogy`, `application` 字段。

### 检查 3：浏览器控制台错误

打开 Console 面板，查看是否有：
- 网络请求失败（404, 500 等）
- JavaScript 错误
- React 错误

### 检查 4：清除缓存

如果之前访问过，可能缓存了旧数据：

```javascript
// 在浏览器 Console 中运行
localStorage.clear();
location.reload();
```

## 数据结构说明

### 索引数据 (index.json)
```json
{
  "id": "h_dialectic",
  "name": "辩证法",
  "enName": "Dialectics",
  "category": "Core",
  "shortDef": "正、反、合的运动过程，矛盾是发展的动力。"
}
```

### 摘要数据 (summaries.json)
```json
{
  "id": "h_dialectic",
  "name": "辩证法",
  "enName": "Dialectics",
  "category": "Core",
  "shortDef": "正、反、合的运动过程，矛盾是发展的动力。",
  "summary": "\"辩证法\"（Dialektik）这个词源自古希腊的\"对话\"..."
}
```

### 详细内容 (details/h_dialectic.json)
```json
{
  "definition": "### 1. 从苏格拉底的对话到宇宙的心跳...",
  "analogy": "### 1. 音乐中的辩证法...",
  "application": "### 1. 叙事引擎的辩证法部署..."
}
```

## 已修复的文件

- ✅ `components/PhilosophyCodexPage.tsx` - 添加了 useEffect 来更新 selectedItem
- ✅ `App.tsx` - 添加了 QueryClientProvider
- ✅ `hooks/usePhilosophy.ts` - React Query Hooks
- ✅ `utils/philosophyLoader.ts` - 数据加载逻辑

## 构建状态

✅ 构建成功，无错误

---

**修复时间**: 2024-03-17
**状态**: ✅ 已修复
**测试**: 待用户验证
