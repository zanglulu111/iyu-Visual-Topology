# 🎯 立即行动清单（复制粘贴）

## 第1步：获取 Supabase 凭证 ⏱️ 5分钟

1. 访问 https://supabase.com
2. 登录或注册
3. 创建新项目（或使用现有项目）
4. 进入 Settings → API
5. 复制以下内容：
   - Project URL → `SUPABASE_URL`
   - Anon public key → `SUPABASE_ANON_KEY`
   - Service role secret → `SUPABASE_SERVICE_ROLE_KEY`

---

## 第2步：配置后端 ⏱️ 2分钟

### 打开和编辑文件

```bash
# 进入后端目录
cd backend

# 用编辑器打开 .env 文件
# macOS/Linux:
nano .env

# 或者用 VS Code 打开
code .env
```

### 粘贴此内容到 backend/.env

```
# Supabase配置 (从上面复制)
SUPABASE_URL=粘贴这里
SUPABASE_ANON_KEY=粘贴这里
SUPABASE_SERVICE_ROLE_KEY=粘贴这里

# 服务器配置
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 保存文件

- VS Code: `Cmd+S` 或 `Ctrl+S`
- Nano: `Ctrl+O` → `Enter` → `Ctrl+X`

---

## 第3步：配置前端 ⏱️ 1分钟

### 返回项目根目录

```bash
cd ..
```

### 打开和编辑文件

```bash
# macOS/Linux:
nano .env

# 或 VS Code:
code .env
```

### 粘贴此内容到 .env

```
# Supabase配置 (从第1步复制的Anon Key)
VITE_SUPABASE_URL=粘贴这里
VITE_SUPABASE_ANON_KEY=粘贴这里

# API配置
VITE_API_URL=http://localhost:3001/api
```

### 保存文件

---

## 第4步：安装依赖并启动 ⏱️ 5分钟

### 打开3个终端

#### 终端1 - 后端启动

```bash
cd backend
npm install
npm run dev
```

等待看到：`Server running on port 3001`

#### 终端2 - 前端启动

```bash
# 回到项目根目录
cd ..

npm install
npm run dev
```

等待看到：`Local:   http://localhost:5173/`

#### 终端3 - 验证 API

```bash
# 测试后端是否运行
curl http://localhost:3001/health

# 测试数据 API
curl http://localhost:3001/api/data/categories
```

---

## 第5步：打开应用

在浏览器中打开：
```
http://localhost:5173
```

应该看到应用正常加载 ✨

---

## 第6步：验证数据 API 工作

打开浏览器开发者工具（F12），在控制台运行：

```javascript
import { dataAPI } from '/src/services/dataAPI.ts';
const data = await dataAPI.getData('commercial_data');
console.log(data);
```

应该看到数据被加载 ✨

---

## 📋 完整命令（复制粘贴）

### 如果您想一次性做完全部：

**终端1：**
```bash
cd backend && npm install && npm run dev
```

**终端2：**
```bash
cd .. && npm install && npm run dev
```

**终端3：**
```bash
curl http://localhost:3001/health
curl http://localhost:3001/api/data/categories
```

---

## ✅ 检查清单

完成每一步后勾选：

- [ ] 从 Supabase 复制凭证
- [ ] 编辑 backend/.env
- [ ] 编辑 .env
- [ ] 启动后端 (终端1)
- [ ] 启动前端 (终端2)
- [ ] 验证 API (终端3)
- [ ] 打开 http://localhost:5173
- [ ] 浏览器控制台测试 dataAPI
- [ ] 一切正常！

---

## 🆘 如果出错了

### 错误1：`ENOENT: no such file or directory`
```bash
# 解决：确保 data/ 文件夹存在
ls backend/data/
```

### 错误2：`Cannot find module`
```bash
# 解决：重新安装依赖
rm -rf backend/node_modules
cd backend && npm install
```

### 错误3：`CORS error`
- 检查 backend/.env 中 FRONTEND_URL 是否为 `http://localhost:5173`
- 检查前端 .env 中 VITE_API_URL 是否为 `http://localhost:3001/api`

### 错误4：`Connection refused`
- 确保后端运行：`curl http://localhost:3001/health`
- 如果返回错误，检查后端 terminal 的错误信息

---

## 🎉 完成后

当您看到以下信息时，说明一切正常：

✅ 后端：`Server running on port 3001`
✅ 前端：`Local:   http://localhost:5173/`
✅ 浏览器：应用正常加载，无错误
✅ API：`curl` 命令返回数据

---

## 📚 接下来做什么

完成基础设置后，阅读这些文件了解下一步：

1. **DATA_MIGRATION_SUMMARY.md** - 了解数据迁移
2. **INTEGRATION_GUIDE.md** - 了解完整架构
3. **MIGRATION_EXAMPLES.md** - 查看代码示例

---

## ⏰ 预计总时间

- 获取 Supabase 凭证：5分钟
- 配置环境变量：3分钟
- 安装和启动：5分钟
- **总计：13分钟** ⚡

---

**现在就开始吧！** 🚀

问题？查看 GET_STARTED.md 获得更详细的说明。
