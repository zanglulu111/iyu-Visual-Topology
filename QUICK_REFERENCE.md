# 快速参考卡 - 5分钟了解一切

## 生成了什么？

### 后端API服务器 (Node.js/Express)
- 完整的RESTful API
- Supabase集成
- 用户认证中间件
- 6个主要路由模块（历史、收藏、蓝图、设置、库）
- 生产就绪

### 前端服务
- `backendAPI.ts` - API客户端
- `supabaseAuth.ts` - 认证服务
- `persistenceAdapter.ts` - 本地/远程存储切换

### 数据库Schema (Supabase SQL)
- 6个表 + 行级安全
- 自动时间戳和索引
- 用户数据隔离

### 文档
- `DEPLOYMENT_GUIDE.md` - 完整部署指南
- `INTEGRATION_GUIDE.md` - 集成概览
- `backend/README.md` - 后端文档

---

## 3步快速启动

### 1️⃣ 创建Supabase项目
```
1. supabase.com → 创建项目
2. SQL编辑器 → 粘贴 backend/schema.sql
3. 记下 URL 和 Anon Key
```

### 2️⃣ 启动后端
```bash
cd backend
npm install
cp .env.example .env
# 编辑 .env，粘贴 Supabase 凭证
npm run dev
```

### 3️⃣ 启动前端
```bash
cp .env.example .env
# 编辑 .env
npm install
npm run dev
```

---

## API端点速查

| 操作 | 方法 | 端点 |
|------|------|------|
| 获取历史 | GET | `/api/history` |
| 创建蓝图 | POST | `/api/blueprints` |
| 获取收藏 | GET | `/api/collections` |
| 保存设置 | PUT | `/api/settings` |
| 管理库 | GET/POST/PUT/DELETE | `/api/library/:key` |

---

## 环境变量速查

### 前端 (.env)
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
VITE_API_URL=http://localhost:3001/api
```

### 后端 (.env)
```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
PORT=3001
FRONTEND_URL=http://localhost:5173
```

---

## 文件改动清单

### ✅ 新增文件（无需修改现有代码）
- backend/ - 整个后端目录
- services/backendAPI.ts
- services/supabaseAuth.ts
- services/persistenceAdapter.ts
- .env.example
- DEPLOYMENT_GUIDE.md
- INTEGRATION_GUIDE.md

### 📝 需要修改的文件
**App.tsx** - 添加认证初始化
```typescript
// 在 useEffect 中添加：
supabaseAuthService.onAuthStateChange((user) => {
    // 设置用户和存储模式
});
```

**数据操作** - 改用新服务
```typescript
// 旧: import { persistence } from './services/persistence'
// 新: import { persistenceAdapter } from './services/persistenceAdapter'
```

### ✨ 可选改进
- 实现认证UI组件
- 数据迁移脚本（IndexedDB → Supabase）
- 错误边界和加载状态

---

## 工作原理

```
用户登录
   ↓
Supabase认证
   ↓
后端获得JWT令牌
   ↓
所有API请求附加令牌
   ↓
后端验证令牌
   ↓
RLS策略隔离用户数据
   ↓
数据存储在Supabase
```

---

## 故障排除

| 错误 | 原因 | 解决 |
|------|------|------|
| CORS错误 | 跨域 | 检查.env中的FRONTEND_URL |
| 认证失败 | 无效令牌 | 验证Supabase凭证 |
| 404错误 | 用户未认证 | 先登录 |
| 服务器崩溃 | 缺少.env | cp .env.example .env后填入值 |

---

## 性能检查

✅ 前端: React 19.2 + Vite (快速)
✅ 后端: Express + Node.js (轻量)
✅ 数据库: Supabase PostgreSQL (高效)
✅ 认证: Supabase Auth (安全)

---

## 生产部署

### 后端推荐：Heroku / Railway / Render
### 前端推荐：Vercel / Netlify / GitHub Pages

总部署时间：< 1小时

---

## 核心特性

🔐 完整的用户隔离
💾 云端数据存储
🔄 实时同步
🚀 可扩展API
📊 完整的历史记录
🎨 创意蓝图管理
💻 本地/远程存储切换
⚡ 生产就绪

---

## 文件大小

- backend/: ~50KB
- 新服务: ~20KB
- 总计: ~70KB (非常轻量)

---

## 支持

📖 详细指南: DEPLOYMENT_GUIDE.md
🔗 后端文档: backend/README.md
❓ 问题排查: INTEGRATION_GUIDE.md

---

## ✨ 关键优势

1. **完全解耦** - 前后端独立部署
2. **安全认证** - Supabase内置安全
3. **数据隔离** - RLS政策保证隐私
4. **易于扩展** - 清晰的API接口
5. **开发友好** - 完整的文档和示例
6. **生产就绪** - 可直接上线

---

开始使用: 🚀 按照INTEGRATION_GUIDE.md的"快速开始步骤"开始！
