# 🚀 立即启动指南

## ✅ 已完成

- ✅ 数据文件夹已复制到 backend/data（85个文件）
- ✅ 后端 API 路由已配置
- ✅ 前端数据客户端已创建
- ✅ 启动脚本已生成

---

## 📝 现在需要做的（按顺序）

### 第1步：配置环境变量（5分钟）

#### 后端配置
```bash
# 1. 打开 backend/.env
cd backend
nano .env  # 或使用您喜欢的编辑器

# 2. 填入您的 Supabase 凭证
# 从 https://supabase.com 获取

# 示例：
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### 前端配置
```bash
# 1. 打开项目根目录的 .env
cd ..
nano .env

# 2. 填入配置
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_API_URL=http://localhost:3001/api
```

### 第2步：启动后端（在第一个终端）

```bash
cd backend
npm install  # 首次需要
npm run dev
```

预期输出：
```
> nodemon server.js
[nodemon] 3.0.2
[nodemon] to restart at any time, type `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
Server running on port 3001
```

### 第3步：验证后端 API（在第二个终端）

```bash
# 测试 health 端点
curl http://localhost:3001/health

# 应该返回：
{"status":"ok","timestamp":"2024-02-24T..."}

# 测试数据 API
curl http://localhost:3001/api/data/categories

# 应该返回所有数据分类列表
```

### 第4步：启动前端（在第三个终端）

```bash
# 回到项目根目录
cd ..
npm install  # 首次需要
npm run dev
```

预期输出：
```
  VITE v6.2.0  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 第5步：测试前端（在浏览器）

1. 打开 http://localhost:5173
2. 应该看到应用正常加载
3. 打开浏览器开发者工具（F12）
4. 在控制台运行测试：

```javascript
// 导入 dataAPI
import { dataAPI } from '/src/services/dataAPI.ts';

// 测试获取数据
const data = await dataAPI.getData('commercial_data');
console.log('Data loaded:', data);

// 测试搜索
const results = await dataAPI.search('commercial_data', 'emotion');
console.log('Search results:', results);

// 查看缓存
console.log('Cache stats:', dataAPI.getCacheStats());
```

---

## 🎯 快速命令参考

### 后端命令
```bash
cd backend

# 开发模式（自动重启）
npm run dev

# 生产模式
npm start

# 清除缓存脚本（可选）
curl -X POST http://localhost:3001/api/data/commercial_data/cache/clear
```

### 前端命令
```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## ✨ 如果一切正常，您应该看到

### 后端 ✅
- 后端运行在 http://localhost:3001
- `/health` 返回 `{"status":"ok"}`
- `/api/data/categories` 返回数据分类列表
- `/api/data/commercial_data` 返回商业数据

### 前端 ✅
- 前端运行在 http://localhost:5173
- 应用正常加载无错误
- 浏览器控制台无红色错误
- `dataAPI` 可以正常加载数据

---

## ⚠️ 常见问题

### 问题1：后端启动失败，说缺少依赖
```bash
cd backend
rm -rf node_modules
npm install
npm run dev
```

### 问题2：前端启动失败，说找不到模块
```bash
cd ..
rm -rf node_modules
npm install
npm run dev
```

### 问题3：API 返回 CORS 错误
- 检查 backend/.env 中的 FRONTEND_URL 是否正确
- 应该是 `http://localhost:5173`

### 问题4：无法连接到 API
- 确保后端在运行：`http://localhost:3001/health`
- 检查前端 .env 中的 VITE_API_URL 是否正确

### 问题5：数据不显示
- 检查后端是否正确启动
- 检查 backend/data/ 文件夹是否存在
- 查看浏览器控制台的错误信息

---

## 📊 下一步（完成基础设置后）

### 当天
- [ ] 本地验证所有功能正常
- [ ] 测试数据加载和缓存

### 本周
- [ ] 创建 useData Hooks
- [ ] 迁移前端组件使用新 API
- [ ] 性能测试

### 本周末
- [ ] 完成所有组件迁移
- [ ] 删除前端 data/ 文件夹（可选）
- [ ] 完整功能测试

### 下周
- [ ] 部署后端
- [ ] 部署前端
- [ ] 生产环境验证

---

## 📞 需要帮助？

### 查看这些文件：
1. **DATA_MIGRATION_SUMMARY.md** - 数据迁移总结
2. **INTEGRATION_GUIDE.md** - 完整集成指南
3. **MIGRATION_EXAMPLES.md** - 代码示例
4. **backend/README.md** - 后端 API 文档

### 命令验证清单

运行这些命令验证设置：

```bash
# 1. 验证后端健康检查
curl http://localhost:3001/health

# 2. 获取数据分类
curl http://localhost:3001/api/data/categories

# 3. 获取特定数据
curl http://localhost:3001/api/data/commercial_data | head -c 200

# 4. 搜索数据
curl 'http://localhost:3001/api/data/commercial_data/search?q=emotion'

# 5. 检查缓存
curl -X POST http://localhost:3001/api/data/commercial_data/cache/clear
```

---

## 🎉 现在就开始！

### 最快方式（3个终端）

**终端1 - 后端：**
```bash
cd backend
npm install
npm run dev
```

**终端2 - 前端：**
```bash
npm install
npm run dev
```

**终端3 - 验证：**
```bash
curl http://localhost:3001/health
curl http://localhost:3001/api/data/categories
```

然后打开 http://localhost:5173 ✨

---

**准备好了吗？让我们开始吧！** 🚀
