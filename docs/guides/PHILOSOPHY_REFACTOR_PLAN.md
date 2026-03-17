# 🔍 哲学辞典数据方案 - 完整诊断与修复

## 核心问题诊断

### 发现的 Bug

**位置**: `components/PhilosophyCodexPage.tsx:102-105`

```typescript
// ❌ 问题代码
const { data: selectedDetail, isLoading: isLoadingDetail } = usePhilosophyDetail(
  activeDictionary.toLowerCase(),  // 'HEGEL' -> 'hegel'
  selectedItem?.data?.id || ''     // 可能是空字符串
);
```

**问题**:
1. 当 `selectedItem` 为 null 时，传入空字符串，触发无效请求
2. 当切换到其他词典（MARX, LACAN）时，会尝试加载不存在的数据
3. 没有条件控制，导致不必要的请求

---

## 数据结构分析 ✅

### 当前结构（正确）

```
data/philosophy/hegel/
├── index.json (1.4 KB)          ← Layer 1: 索引
├── summaries.json (11 KB)       ← Layer 2: 摘要
└── details/                     ← Layer 3: 详细内容
    ├── h_substance_subject.json (12 KB)
    ├── h_dialectic.json (14 KB)
    ├── h_aufhebung.json (13 KB)
    ├── h_negativity.json (13 KB)
    ├── h_unity_opposites.json (17 KB)
    ├── h_concrete_universal.json (14 KB)
    └── h_teleology.json (15 KB)
```

**优点**:
- ✅ 三层架构清晰
- ✅ 按需加载
- ✅ 支持缓存
- ✅ 完全不依赖 Supabase

---

## 立即修复方案

### 修复 1: 更新 usePhilosophyDetail Hook

```typescript
// hooks/usePhilosophy.ts

export function usePhilosophyDetail(
  philosopher: string,
  conceptId: string,
  enabled: boolean = true  // 新增：控制是否启用
) {
  return useQuery({
    queryKey: ['philosophy', 'detail', philosopher, conceptId],
    queryFn: () => getPhilosophyDetail(philosopher, conceptId),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: enabled && !!conceptId,  // 只在启用且有 conceptId 时执行
    retry: 1
  });
}
```

### 修复 2: 修正组件调用

```typescript
// components/PhilosophyCodexPage.tsx

const { data: selectedDetail, isLoading: isLoadingDetail } = usePhilosophyDetail(
  'hegel',  // 固定为 'hegel'
  selectedItem?.data?.id || '',
  activeDictionary === 'HEGEL' && !!selectedItem?.data?.id  // 条件启用
);
```

### 修复 3: 改进渲染逻辑

```typescript
const renderDetailView = () => {
  if (!selectedItem) return null;

  let data = selectedItem.data;

  // 只为黑格尔词条合并详细内容
  if (activeDictionary === 'HEGEL' && selectedDetail && !isLoadingDetail) {
    data = {
      ...selectedItem.data,
      detailed: selectedDetail
    };
  }

  // 显示加载状态
  if (activeDictionary === 'HEGEL' && isLoadingDetail) {
    return <div>加载中...</div>;
  }

  // 渲染内容...
};
```

---

## 数据管理最佳实践

### 1. 添加/修改词条流程

```bash
# 1. 编辑源文件
vim data/philosophy_refined.ts

# 2. 运行拆分脚本
node scripts/split-philosophy-data.js

# 3. 验证生成的文件
ls data/philosophy/hegel/details/

# 4. 测试
npm run dev
```

### 2. 清除缓存

```javascript
// 在浏览器 Console 中运行
localStorage.removeItem('philosophy_details');
localStorage.removeItem('philosophy_summaries');
location.reload();
```

### 3. 性能监控

```typescript
// 查看缓存统计
import { getCacheStats } from './utils/philosophyLoader';
console.log(getCacheStats());
```

---

## 扩展计划

### 短期（1周）
- [x] 修复 usePhilosophyDetail Bug
- [ ] 添加加载状态显示
- [ ] 优化错误处理

### 中期（1月）
- [ ] 拆分马克思、拉康、齐泽克数据
- [ ] 统一数据格式
- [ ] 添加自动化脚本

### 长期（3月）
- [ ] 实现全文搜索
- [ ] 添加词条关联推荐
- [ ] 支持离线访问

---

**状态**: 🔧 修复中
**优先级**: 🔴 高
**预计完成**: 2024-03-17
