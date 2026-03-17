# 哲学辞典数据加载系统使用指南

## 概述

新的数据加载系统采用**三层架构**，大幅优化了性能和流量消耗：

- **Layer 1 (索引)**: 1.4 KB - 打包在前端，无需网络请求
- **Layer 2 (摘要)**: 11 KB - 首次从服务器加载，缓存到 localStorage
- **Layer 3 (详细)**: 平均 14 KB/词条 - 按需加载，缓存到 localStorage

## 性能对比

### 优化前
- 首屏加载: 116 KB (所有数据)
- 1000用户/月: 116 MB 流量

### 优化后
- 首屏加载: 1.4 KB (仅索引)
- 点击查看3个词条: 1.4 KB + 11 KB + 42 KB = 54.4 KB
- 1000用户/月: 54 MB 流量
- **流量减少 53%**

## 快速开始

### 1. 安装依赖

```bash
npm install @tanstack/react-query
```

### 2. 配置 React Query

```tsx
// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 哲学内容不会变化，永久缓存
      gcTime: 1000 * 60 * 60 * 24, // 24小时后清理
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 你的应用 */}
    </QueryClientProvider>
  );
}
```

### 3. 使用 Hooks

#### 获取索引列表

```tsx
import { usePhilosophyIndex } from './hooks/usePhilosophy';

function PhilosophyList() {
  // 直接获取，无需异步
  const concepts = usePhilosophyIndex('hegel');

  return (
    <ul>
      {concepts.map(concept => (
        <li key={concept.id}>
          {concept.name} - {concept.shortDef}
        </li>
      ))}
    </ul>
  );
}
```

#### 获取摘要数据

```tsx
import { usePhilosophySummaries } from './hooks/usePhilosophy';

function PhilosophyCards() {
  const { data: summaries, isLoading } = usePhilosophySummaries('hegel');

  if (isLoading) return <div>加载中...</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {summaries?.map(concept => (
        <div key={concept.id} className="card">
          <h3>{concept.name}</h3>
          <p>{concept.summary}</p>
        </div>
      ))}
    </div>
  );
}
```

#### 获取详细内容

```tsx
import { usePhilosophyDetail } from './hooks/usePhilosophy';
import ReactMarkdown from 'react-markdown';

function PhilosophyDetail({ conceptId }: { conceptId: string }) {
  const { data: detail, isLoading } = usePhilosophyDetail('hegel', conceptId);

  if (isLoading) return <div>加载中...</div>;
  if (!detail) return <div>未找到内容</div>;

  return (
    <div>
      <section>
        <h2>概念</h2>
        <ReactMarkdown>{detail.definition}</ReactMarkdown>
      </section>

      <section>
        <h2>拓扑类比与案例</h2>
        <ReactMarkdown>{detail.analogy}</ReactMarkdown>
      </section>

      <section>
        <h2>叙事引擎部署指示</h2>
        <ReactMarkdown>{detail.application}</ReactMarkdown>
      </section>
    </div>
  );
}
```

#### 搜索功能

```tsx
import { usePhilosophySearch } from './hooks/usePhilosophy';

function PhilosophySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { results, isLoading, total } = usePhilosophySearch('hegel', searchTerm);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索..."
      />
      <p>找到 {total} 个结果</p>
      <ul>
        {results.map(concept => (
          <li key={concept.id}>{concept.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### 预加载热门词条

```tsx
import { usePreloadPopularConcepts } from './hooks/usePhilosophy';

function PhilosophyPage() {
  // 在用户浏览列表时，后台预加载热门词条
  usePreloadPopularConcepts('hegel', true);

  return <div>{/* 你的页面内容 */}</div>;
}
```

## 数据结构

### PhilosophyConcept (Layer 1)

```typescript
interface PhilosophyConcept {
  id: string;           // 词条ID，如 "h_substance_subject"
  name: string;         // 中文名称，如 "实体即主体"
  enName: string;       // 英文名称，如 "Substance is Subject"
  category: string;     // 分类，如 "Core"
  shortDef: string;     // 简短定义，100字以内
}
```

### PhilosophySummary (Layer 2)

```typescript
interface PhilosophySummary extends PhilosophyConcept {
  summary: string;      // 摘要，500字左右
}
```

### PhilosophyDetail (Layer 3)

```typescript
interface PhilosophyDetail {
  definition: string;   // 概念定义，3000-5000字
  analogy: string;      // 拓扑类比与案例，1000-2000字
  application: string;  // 叙事引擎部署指示，1000-2000字
}
```

## 缓存策略

### 自动缓存

- **React Query 内存缓存**: 页面刷新前有效
- **localStorage 持久化**: 跨页面刷新保持

### 手动清除缓存

```tsx
import { clearPhilosophyCache, getCacheStats } from './utils/philosophyLoader';

// 查看缓存统计
const stats = getCacheStats();
console.log(`已缓存 ${stats.totalCached} 个词条`);

// 清除所有缓存
clearPhilosophyCache();
```

## 性能优化建议

### 1. 使用骨架屏

```tsx
function PhilosophyDetail({ conceptId }: { conceptId: string }) {
  const { data, isLoading } = usePhilosophyDetail('hegel', conceptId);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return <div>{/* 实际内容 */}</div>;
}
```

### 2. 虚拟滚动

对于长列表，使用虚拟滚动减少 DOM 节点：

```tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function PhilosophyList() {
  const concepts = usePhilosophyIndex('hegel');
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: concepts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });

  return (
    <div ref={parentRef} style={{ height: '600px', overflow: 'auto' }}>
      <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {concepts[virtualItem.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 3. 懒加载图片

如果词条中包含图片，使用懒加载：

```tsx
<img
  src={imageUrl}
  loading="lazy"
  alt="..."
/>
```

## 添加新的哲学家

### 1. 准备数据

创建新的数据文件：

```
data/philosophy/lacan/
  ├── index.json
  ├── summaries.json
  └── details/
      ├── l_real.json
      ├── l_symbolic.json
      └── ...
```

### 2. 更新加载器

```typescript
// utils/philosophyLoader.ts

import lacanIndex from '../data/philosophy/lacan/index.json';

export function getPhilosophyIndex(philosopher: string): PhilosophyConcept[] {
  switch (philosopher.toLowerCase()) {
    case 'hegel':
      return hegelIndex as PhilosophyConcept[];
    case 'lacan':
      return lacanIndex as PhilosophyConcept[];
    default:
      return [];
  }
}
```

### 3. 更新预加载列表

```typescript
// hooks/usePhilosophy.ts

const popularConcepts: Record<string, string[]> = {
  hegel: ['h_substance_subject', 'h_dialectic', ...],
  lacan: ['l_real', 'l_symbolic', 'l_imaginary', ...]
};
```

## 故障排查

### 问题：数据加载失败

**检查**:
1. 文件路径是否正确
2. JSON 文件格式是否有效
3. 网络请求是否成功

**解决**:
```tsx
const { data, error } = usePhilosophyDetail('hegel', conceptId);

if (error) {
  console.error('加载失败:', error);
  // 显示错误信息或重试按钮
}
```

### 问题：缓存未生效

**检查**:
1. localStorage 是否被禁用
2. 是否超出 localStorage 容量限制 (通常 5-10MB)

**解决**:
```tsx
// 清除旧缓存
clearPhilosophyCache();

// 检查缓存状态
const stats = getCacheStats();
console.log(stats);
```

### 问题：首屏加载慢

**优化**:
1. 确保只加载索引数据，不要一次性加载所有摘要
2. 使用骨架屏提升感知性能
3. 预加载热门词条

## 最佳实践

1. **渐进式加载**: 先显示索引，用户点击后再加载详细内容
2. **智能预加载**: 预加载热门词条和用户可能访问的内容
3. **持久化缓存**: 利用 localStorage 减少重复请求
4. **错误处理**: 提供友好的错误提示和重试机制
5. **性能监控**: 使用 React Query DevTools 监控缓存状态

## 相关文件

- `utils/philosophyLoader.ts` - 数据加载核心逻辑
- `hooks/usePhilosophy.ts` - React Hooks
- `components/PhilosophyComponents.example.tsx` - 示例组件
- `scripts/split-philosophy-data.js` - 数据拆分脚本
- `data/philosophy/hegel/` - 黑格尔数据目录

## 更新日志

### 2024-03-17
- ✅ 实现三层数据架构
- ✅ 创建数据拆分脚本
- ✅ 实现 React Hooks
- ✅ 添加 localStorage 缓存
- ✅ 创建示例组件
- ✅ 编写使用文档

## 下一步计划

- [ ] 添加拉康、齐泽克等其他哲学家的数据
- [ ] 实现全文搜索功能
- [ ] 添加词条收藏功能
- [ ] 实现阅读进度追踪
- [ ] 优化移动端体验
