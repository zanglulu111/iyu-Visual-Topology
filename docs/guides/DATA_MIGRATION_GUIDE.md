# 📊 数据管理迁移指南 - 从前端到后端

## 概述

您的应用有85个数据文件（约2.7MB），现在已经移到后端进行管理。这样做的好处：

✅ **不需要重新编译前端就能更新数据**
✅ **减少前端包大小**（减少~2.7MB）
✅ **便于版本管理和扩展**
✅ **支持数据搜索和过滤**
✅ **可以按需加载（性能优化）**
✅ **自动缓存（30分钟）**

---

## 🏗️ 架构变化

### 之前（前端存储）
```
App.tsx
└── import { COMMERCIAL_DATA } from './data/commercial_data.ts'
└── import { NARRATIVE_ENGINE } from './data/narrative_engine.ts'
└── ... 85个数据文件 ...
```

### 现在（后端存储）
```
前端                           后端                    本地数据
App.tsx                     server.js
├── dataAPI.ts        ──→  /api/data ──→ data/
├── import从API获取   ──→  dataService.ts    (自动缓存)
└── useData hook
```

---

## 🚀 快速开始

### 步骤1：启动后端
后端已自动配置包含数据路由（无需认证）。确保后端正在运行：
```bash
http://localhost:3001/health  # 应返回 ok
http://localhost:3001/api/data/categories  # 列出所有数据分类
```

### 步骤2：前端使用示例

#### 方式A：直接使用 dataAPI（推荐）
```typescript
import { dataAPI } from '@/services/dataAPI';

// 获取商业数据
const commercialData = await dataAPI.getData('commercial_data');

// 获取特定项目
const sloganItem = await dataAPI.getItem('commercial_data', 'SLOGAN_1');

// 搜索
const results = await dataAPI.search('commercial_data', 'emotion');
```

#### 方式B：使用便捷钩子
```typescript
import { useData } from '@/services/dataAPI';

// React组件中
const [data, setData] = useState(null);

useEffect(() => {
    useData.commercial().then(setData);
}, []);
```

#### 方式C：React Hook（可选）
```typescript
// hooks/useData.ts
import { useState, useEffect } from 'react';
import { dataAPI } from '@/services/dataAPI';

export function useDataCategory(category: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        dataAPI.getData(category)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [category]);

    return { data, loading, error };
}

// 使用
const { data: commercialData } = useDataCategory('commercial_data');
```

---

## 📋 API 端点参考

### 获取数据分类列表
```
GET /api/data/categories

响应:
{
  "categories": [
    "commercial_data",
    "narrative_engine",
    "animation_genres",
    ...
  ]
}
```

### 获取分类的所有数据
```
GET /api/data/:category
GET /api/data/commercial_data

响应: 该分类的完整数据对象或数组
```

### 获取特定项目
```
GET /api/data/:category/:itemId
GET /api/data/commercial_data/SLOGAN_1

响应: 该特定项目的数据
```

### 搜索数据
```
GET /api/data/:category/search?q=query
GET /api/data/commercial_data/search?q=emotion

响应: 匹配查询的项目数组
```

### 清除缓存（可选，仅开发用）
```
POST /api/data/:category/cache/clear
```

---

## 🔄 迁移步骤

### 第1阶段：并行运行（推荐）
保持原有的 `data/` 文件夹，同时使用新的API。这样可以逐步迁移。

```typescript
// 旧方式（仍可用）
import { COMMERCIAL_DATA } from './data/commercial_data';
const oldData = COMMERCIAL_DATA;

// 新方式（推荐）
import { dataAPI } from './services/dataAPI';
const newData = await dataAPI.getData('commercial_data');
```

### 第2阶段：逐个组件迁移
```typescript
// components/CommercialEditor.tsx - 迁移前
import { COMMERCIAL_DATA } from '../data/commercial_data';

const CommercialEditor = () => {
    const data = COMMERCIAL_DATA; // 静态数据
};

// 迁移后
import { dataAPI } from '../services/dataAPI';

const CommercialEditor = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        dataAPI.getData('commercial_data').then(setData);
    }, []);

    if (!data) return <Loading />;
    // 使用 data...
};
```

### 第3阶段：删除前端data文件夹
一旦所有组件都迁移完毕，可以删除 `data/` 文件夹。

---

## 📦 数据分类参考

### 可用的数据分类

```typescript
// 常见分类
'commercial_data'           // 商业广告数据
'narrative_engine'          // 叙述引擎数据
'animation_genres'          // 动画流派
'master_presets'            // 主预设
'aesthetic_data'            // 美学数据
'engine_drives'             // 驱动力
'engine_fantasies'          // 幻想
'engine_big_other'          // 大他者
'engine_stakes'             // 风险
'skin_libraries'            // 皮肤库
'director_styles'           // 导演风格
'visual_tones'              // 视觉色调
'philosophy_hegel'          // 黑格尔哲学
... 和更多

// 获取完整列表
const categories = await dataAPI.getCategories();
```

---

## ⚡ 性能优化

### 缓存策略
- 默认缓存30分钟
- 减少不必要的API调用
- 可以手动清除缓存

```typescript
// 查看缓存状态
const stats = dataAPI.getCacheStats();
console.log(stats); // { size: 5, categories: [...] }

// 清除特定分类缓存
dataAPI.clearCache('commercial_data');

// 清除所有缓存
dataAPI.clearCache();
```

### 按需加载
```typescript
// 只在需要时加载
const commercialData = await dataAPI.getData('commercial_data');
const specificItem = await dataAPI.getItem('commercial_data', 'id');

// 搜索而不是加载所有
const results = await dataAPI.search('commercial_data', 'query');
```

---

## 🛠️ 常见用例

### 用例1：下拉列表/选择器
```typescript
const [genres, setGenres] = useState([]);

useEffect(() => {
    dataAPI.getData('animation_genres').then(data => {
        setGenres(data); // 假设 data 是数组
    });
}, []);

return (
    <select>
        {genres.map(genre => (
            <option key={genre.id} value={genre.id}>
                {genre.name}
            </option>
        ))}
    </select>
);
```

### 用例2：搜索功能
```typescript
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async (query) => {
    if (query.length > 2) {
        const results = await dataAPI.search('commercial_data', query);
        setSearchResults(results);
    }
};

return (
    <>
        <input onChange={e => handleSearch(e.target.value)} />
        <ul>
            {searchResults.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
);
```

### 用例3：数据绑定
```typescript
import { useData } from '@/services/dataAPI';

const [data, setData] = useState(null);

useEffect(() => {
    useData.commercial().then(setData);
}, []);

if (!data) return null;

return (
    <div>
        {/* 使用 data */}
    </div>
);
```

---

## 🔐 安全考虑

### 公开vs受保护的数据
- **数据API** (`/api/data`) - 无需认证，公开数据
- **其他API** (`/api/history` 等) - 需要认证，用户私有数据

### 访问控制
```typescript
// 数据API 不需要令牌
const data = await fetch('http://localhost:3001/api/data/commercial_data');

// 其他API 需要令牌
const history = await fetch('http://localhost:3001/api/history', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
```

---

## 🚀 后端修改数据

### 添加新数据

1. **方式A：编辑现有TS文件**
   ```bash
   # 编辑 backend/data/commercial_data.ts
   # 修改后自动生效（缓存会在30分钟后更新）
   ```

2. **方式B：清除缓存强制刷新**
   ```bash
   # API 清除缓存
   POST /api/data/commercial_data/cache/clear

   # 前端清除缓存
   dataAPI.clearCache('commercial_data');
   ```

3. **方式C：数据库存储（未来）**
   在Supabase中创建 `public_data` 表，通过API查询

---

## 📊 迁移清单

- [ ] 测试后端 `/api/data/categories` 端点
- [ ] 在前端创建 `useData` Hook（可选）
- [ ] 找出所有使用 `data/` 文件夹的组件
- [ ] 逐个组件迁移到 `dataAPI`
- [ ] 在浏览器中测试数据加载
- [ ] 验证缓存工作正常
- [ ] 删除 `data/` 文件夹（如果想减少包大小）
- [ ] 构建生产版本并测试

---

## 🎯 下一步改进（可选）

### 1. 数据库存储
```sql
CREATE TABLE public_data (
    id UUID PRIMARY KEY,
    category TEXT NOT NULL,
    key TEXT NOT NULL,
    data JSONB NOT NULL,
    version INT,
    updated_at TIMESTAMP
);
```

### 2. 用户自定义数据
```typescript
// 允许用户上传/编辑数据
POST /api/data/:category/custom
GET /api/data/:category/custom
```

### 3. 数据版本控制
```typescript
// 查询特定版本
GET /api/data/:category?version=2
```

### 4. 权限控制
```typescript
// 某些数据只对特定用户可见
GET /api/data/:category?userId=xxx
```

---

## 📞 常见问题

**Q: 如何在生产环境部署数据文件？**
A: 确保 `data/` 文件夹被复制到后端部署目录。

**Q: 修改数据需要重启后端吗？**
A: 不需要。缓存会自动过期（30分钟）或手动清除。

**Q: 可以直接在前端修改数据吗？**
A: 不建议。应该通过后端API或数据库来修改。

**Q: 数据太多会影响性能吗？**
A: 不会。后端会缓存数据，缓存被保存在内存中。

**Q: 如何离线使用应用？**
A: 数据被缓存，但首次需要加载。可以实现LocalStorage备份。

---

## 🎉 迁移完成后的好处

✨ **前端包大小减少** ~2.7MB
✨ **更新数据无需重新构建**
✨ **便于管理和扩展**
✨ **支持动态数据加载**
✨ **性能提升（缓存）**
✨ **便于国际化（多语言支持）**

---

## 支持

如有问题，查看：
- 后端文档: `backend/README.md`
- API参考: `DEPLOYMENT_GUIDE.md`
- 集成指南: `INTEGRATION_GUIDE.md`
