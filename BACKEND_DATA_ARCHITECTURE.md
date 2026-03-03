# 后端数据管理架构

## 📊 概述

后端数据服务将原本在前端的 85 个数据文件转移到后端管理，提供统一的 REST API 接口。

## 🏗️ 架构设计

### 文件结构
```
backend/
├── server.js                      # 主服务器
├── services/
│   └── dataService.ts            # 数据服务类
├── routes/
│   └── data.js                   # 数据路由
└── data/                         # 数据文件夹 (将从前端复制)
    ├── commercial_data.ts
    ├── narrative_engine.ts
    ├── animation_genres.ts
    ├── master_presets.ts
    └── ... (85个文件)
```

## 🔄 工作流程

```
HTTP Request
    ↓
Express Router (routes/data.js)
    ↓
DataService.getData(category)
    ↓
检查缓存 ?
    ├─ 是 → 返回缓存数据
    └─ 否 → 读取文件
        ↓
    解析TypeScript导出
        ↓
    缓存到内存
        ↓
    返回JSON响应
```

## 📝 API 端点

### 公开端点（无需认证）

#### 1. 获取数据分类列表
```
GET /api/data/categories

Response:
{
  "categories": [
    "commercial_data",
    "narrative_engine",
    ...
  ]
}
```

#### 2. 获取分类数据
```
GET /api/data/:category
GET /api/data/commercial_data

Response: 该分类的完整数据对象/数组
```

#### 3. 获取特定项目
```
GET /api/data/:category/:itemId
GET /api/data/commercial_data/SLOGAN_1

Response: 该项目的数据对象
```

#### 4. 搜索
```
GET /api/data/:category/search?q=query
GET /api/data/commercial_data/search?q=emotion

Response: [匹配的项目1, 匹配的项目2, ...]
```

#### 5. 清除缓存
```
POST /api/data/:category/cache/clear

Response:
{
  "success": true,
  "message": "Cache cleared for commercial_data"
}
```

## ⚙️ 缓存机制

### 缓存设置
- **位置**: 服务器内存
- **持续时间**: 无限期（直到服务器重启或手动清除）
- **大小**: 取决于数据量

### 缓存命中率
- 首次请求: 从文件系统读取，缓存结果
- 后续请求: 直接返回缓存（极快）

### 手动清除缓存
```bash
# API 方式
curl -X POST http://localhost:3001/api/data/commercial_data/cache/clear

# 前端方式
import { dataAPI } from '@/services/dataAPI';
dataAPI.clearCache('commercial_data');
```

## 🔒 安全性

### 数据隐私
- ✅ 数据API无需认证（公开系统数据）
- ✅ 用户私有数据通过其他API保护

### 访问控制
```typescript
// 数据API - 公开
app.use('/api/data', dataRoutes);

// 其他API - 需要认证
app.use('/api/history', verifyAuth, historyRoutes);
```

### 输入验证
```typescript
// 验证分类名称
if (!this.isValidCategoryName(category)) {
    throw new Error('Invalid category name');
}
```

## 📈 性能考虑

### 内存使用
- 所有数据缓存在内存中
- 85个数据文件约 2.7MB
- 运行 Node.js 可使用数GB内存，问题不大

### 响应时间
- 缓存命中: < 1ms
- 首次加载: ~50-100ms

### 扩展性
- 可添加更多数据文件而不影响API
- 可以添加数据库支持（见下面）

## 🚀 部署指南

### 本地开发

```bash
# 1. 初始化数据文件夹
npm run setup:data

# 2. 启动服务器
npm run dev

# 3. 测试
curl http://localhost:3001/api/data/categories
```

### 生产部署

#### Heroku 部署
```bash
# backend/Procfile
web: node server.js

# 部署时确保包含data文件夹
# git add backend/data/
# git commit -m "Add data files"
```

#### Railway/Render 部署
- 确保 git 跟踪 `backend/data/` 文件夹
- 或使用 `.gitkeep` 文件确保文件夹存在

#### Docker 部署
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY backend .

RUN npm install

# 从前端复制数据
COPY data ./data

EXPOSE 3001

CMD ["npm", "start"]
```

## 📊 数据分类参考

### 系统数据
| 分类 | 描述 | 大小 |
|------|------|------|
| commercial_data | 商业广告相关 | ~74KB |
| narrative_engine | 叙述引擎 | ~30KB |
| animation_genres | 动画类型 | ~43KB |
| master_presets | 主预设 | 大 |
| aesthetic_data | 美学数据 | ~19KB |
| ... | ... | ... |

### 查询所有分类
```bash
curl http://localhost:3001/api/data/categories
```

## 🔧 高级功能

### 功能1: 数据库支持（可选）
```sql
-- 创建数据表
CREATE TABLE public_data (
    id UUID PRIMARY KEY,
    category TEXT NOT NULL,
    data JSONB NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 迁移数据
INSERT INTO public_data (category, data)
VALUES ('commercial_data', '[...]');
```

### 功能2: 版本控制
```typescript
// 支持数据版本
GET /api/data/commercial_data?version=1
GET /api/data/commercial_data?version=2
```

### 功能3: 用户自定义数据
```typescript
// 用户可以上传自定义数据
POST /api/data/:category/custom
```

## 🧪 测试

### 测试数据加载
```bash
# 获取分类列表
curl http://localhost:3001/api/data/categories

# 获取具体数据
curl http://localhost:3001/api/data/commercial_data

# 搜索
curl 'http://localhost:3001/api/data/commercial_data/search?q=emotion'
```

### 测试缓存
```typescript
// 第一次调用 - 从文件读取
console.time('First call');
await dataAPI.getData('commercial_data', false);
console.timeEnd('First call'); // ~50-100ms

// 第二次调用 - 从缓存读取
console.time('Cached call');
await dataAPI.getData('commercial_data');
console.timeEnd('Cached call'); // <1ms
```

## 📝 维护

### 添加新数据文件
1. 在 `backend/data/` 添加新文件 (例如: `new_data.ts`)
2. 确保文件导出有效的 TypeScript
3. API 自动可用: `GET /api/data/new_data`

### 更新现有数据
1. 编辑文件 `backend/data/category.ts`
2. 清除缓存（可选）: `dataAPI.clearCache('category')`
3. 变更立即生效

### 监控性能
```typescript
// 检查缓存状态
const stats = dataAPI.getCacheStats();
console.log('缓存项数:', stats.size);
console.log('已缓存分类:', stats.categories);
```

## 🎯 最佳实践

1. **缓存策略**
   - 系统数据：长期缓存
   - 用户数据：不缓存或短期缓存

2. **错误处理**
   - 始终捕获数据加载错误
   - 提供用户友好的错误消息

3. **性能优化**
   - 按需加载数据（不是全部）
   - 使用搜索过滤大型数据集

4. **安全性**
   - 不在数据中存储敏感信息
   - 验证所有输入

## 📞 故障排除

### 问题1: 404 Category not found
```
原因: 分类名称错误或文件不存在
解决: 检查 GET /api/data/categories 获取有效列表
```

### 问题2: 缓存过期
```
原因: 修改了文件，但缓存未更新
解决: 手动清除缓存 POST /api/data/:category/cache/clear
```

### 问题3: 内存占用过高
```
原因: 缓存太多大型数据集
解决: 定期清除缓存或实现缓存过期策略
```

## 🚀 下一步

- [ ] 部署到生产环境
- [ ] 监控数据加载性能
- [ ] 考虑数据库支持
- [ ] 实现用户自定义数据
- [ ] 添加数据版本控制

---

**系统架构设计者**: AI Assistant
**最后更新**: 2024年2月24日
