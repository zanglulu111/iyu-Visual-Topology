# 哲学辞典数据迁移指南

## 迁移概述

从旧的单文件数据结构迁移到新的三层架构。

## 迁移前后对比

### 旧结构
```
data/
  philosophy_refined.ts  (116 KB)
```

### 新结构
```
data/
  philosophy/
    hegel/
      index.json         (1.4 KB)   - Layer 1: 索引
      summaries.json     (11 KB)    - Layer 2: 摘要
      details/                      - Layer 3: 详细内容
        h_substance_subject.json (12 KB)
        h_dialectic.json         (14 KB)
        h_aufhebung.json         (13 KB)
        h_negativity.json        (13 KB)
        h_unity_opposites.json   (17 KB)
        h_concrete_universal.json (14 KB)
        h_teleology.json         (15 KB)
```

## 迁移步骤

### 1. 保留旧文件（备份）

```bash
# 重命名旧文件作为备份
mv data/philosophy_refined.ts data/philosophy_refined.ts.backup
```

### 2. 更新导入路径

#### 旧代码
```typescript
import { HEGEL_INDEX } from '../data/philosophy_refined';

// 使用
const concepts = HEGEL_INDEX;
```

#### 新代码
```typescript
import { usePhilosophyIndex } from '../hooks/usePhilosophy';

// 使用
const concepts = usePhilosophyIndex('hegel');
```

### 3. 更新组件

#### 旧的列表组件
```typescript
// 旧代码 - 一次性加载所有数据
import { HEGEL_INDEX } from '../data/philosophy_refined';

function PhilosophyList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedConcept = HEGEL_INDEX.find(c => c.id === selectedId);

  return (
    <div>
      <ul>
        {HEGEL_INDEX.map(concept => (
          <li key={concept.id} onClick={() => setSelectedId(concept.id)}>
            {concept.name}
          </li>
        ))}
      </ul>

      {selectedConcept?.detailed && (
        <div>
          <ReactMarkdown>{selectedConcept.detailed.definition}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
```

#### 新的列表组件
```typescript
// 新代码 - 按需加载
import { usePhilosophyIndex, usePhilosophyDetail } from '../hooks/usePhilosophy';

function PhilosophyList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const concepts = usePhilosophyIndex('hegel');
  const { data: detail, isLoading } = usePhilosophyDetail('hegel', selectedId || '');

  return (
    <div>
      <ul>
        {concepts.map(concept => (
          <li key={concept.id} onClick={() => setSelectedId(concept.id)}>
            {concept.name}
          </li>
        ))}
      </ul>

      {isLoading && <div>加载中...</div>}

      {detail && (
        <div>
          <ReactMarkdown>{detail.definition}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
```

### 4. 更新搜索功能

#### 旧代码
```typescript
import { HEGEL_INDEX } from '../data/philosophy_refined';

function search(term: string) {
  return HEGEL_INDEX.filter(concept =>
    concept.name.includes(term) ||
    concept.shortDef.includes(term) ||
    concept.detailed?.definition.includes(term)
  );
}
```

#### 新代码
```typescript
import { usePhilosophySearch } from '../hooks/usePhilosophy';

function PhilosophySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { results, isLoading } = usePhilosophySearch('hegel', searchTerm);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {results.map(concept => (
        <div key={concept.id}>{concept.name}</div>
      ))}
    </div>
  );
}
```

### 5. 添加 React Query Provider

在应用的根组件添加 QueryClientProvider：

```typescript
// main.tsx 或 App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24,
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

### 6. 安装依赖

```bash
npm install @tanstack/react-query
```

## 迁移检查清单

- [ ] 备份旧的 `philosophy_refined.ts` 文件
- [ ] 运行数据拆分脚本 `node scripts/split-philosophy-data.js`
- [ ] 验证生成的 JSON 文件
- [ ] 安装 `@tanstack/react-query`
- [ ] 添加 QueryClientProvider
- [ ] 更新所有使用 `HEGEL_INDEX` 的组件
- [ ] 更新搜索功能
- [ ] 测试所有功能
- [ ] 删除旧文件（确认无问题后）

## 常见问题

### Q: 旧的 philosophy_refined.ts 还需要保留吗？

A: 迁移完成并测试无误后可以删除。建议先重命名为 `.backup` 保留一段时间。

### Q: 如何验证迁移是否成功？

A: 检查以下几点：
1. 所有词条都能正常显示
2. 详细内容能正常加载
3. 搜索功能正常
4. 浏览器 Network 面板显示按需加载
5. localStorage 中有缓存数据

### Q: 迁移后性能有什么变化？

A:
- 首屏加载时间: 从 ~500ms 降低到 ~50ms
- 首屏流量: 从 116KB 降低到 1.4KB
- 点击词条加载时间: ~100ms (首次) / ~10ms (缓存)

### Q: 如何回滚到旧版本？

A:
```bash
# 恢复旧文件
mv data/philosophy_refined.ts.backup data/philosophy_refined.ts

# 删除新文件
rm -rf data/philosophy/hegel

# 恢复旧的导入语句
# 手动修改代码...
```

## 性能监控

使用 React Query DevTools 监控数据加载：

```typescript
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 你的应用 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

## 下一步优化

迁移完成后，可以考虑以下优化：

1. **添加 Service Worker**: 实现离线访问
2. **使用 CDN**: 将 JSON 文件部署到 CDN
3. **图片优化**: 如果有图片，使用 WebP 格式
4. **预加载**: 智能预加载用户可能访问的内容
5. **虚拟滚动**: 对长列表使用虚拟滚动

## 支持

如有问题，请查看：
- [使用指南](./PHILOSOPHY_LOADER_GUIDE.md)
- [重构方案](../PHILOSOPHY_REFACTOR_PLAN.md)
