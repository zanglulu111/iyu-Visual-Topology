# 后端API服务器

一个基于Node.js/Express和Supabase的RESTful API服务器，为创意蓝图应用提供数据存储和管理功能。

## 功能特性

- 🔐 基于Supabase的用户认证和授权
- 📚 历史记录管理
- 🎨 创意蓝图CRUD操作
- 💾 收藏管理
- ⚙️ 用户设置存储
- 📖 自定义库定义管理
- 🔒 行级安全(RLS)策略
- 🚀 完全的REST API

## 快速开始

### 前置条件
- Node.js 16+
- npm 或 yarn
- Supabase账户

### 安装

```bash
# 1. 克隆或进入项目
cd backend

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 编辑.env，填入你的Supabase凭证
```

### 环境变量说明

| 变量名 | 描述 | 示例 |
|--------|------|------|
| SUPABASE_URL | Supabase项目URL | https://xxxxx.supabase.co |
| SUPABASE_ANON_KEY | Supabase匿名密钥 | eyJhbGc... |
| SUPABASE_SERVICE_ROLE_KEY | 服务角色密钥 | eyJhbGc... |
| PORT | 服务器端口 | 3001 |
| NODE_ENV | 环境 | development/production |
| FRONTEND_URL | 前端URL | http://localhost:5173 |

### 运行

```bash
# 开发模式（自动重启）
npm run dev

# 生产模式
npm start

# 服务器将在 http://localhost:3001 启动
```

## API 端点

### 认证
所有端点（除了健康检查）都需要在请求头中包含Bearer token：
```
Authorization: Bearer <your_supabase_token>
```

### 健康检查
```
GET /health
```

### 历史记录 `/api/history`
```
GET /api/history                    # 获取所有历史记录
GET /api/history/:id                # 获取特定记录
POST /api/history                   # 创建新记录
PUT /api/history/:id                # 更新记录
DELETE /api/history/:id             # 删除记录
```

### 收藏 `/api/collections`
```
GET /api/collections                # 获取所有收藏
GET /api/collections/:id            # 获取特定收藏
POST /api/collections               # 创建收藏
PUT /api/collections/:id            # 更新收藏
DELETE /api/collections/:id         # 删除收藏
```

### 创意蓝图 `/api/blueprints`
```
GET /api/blueprints                 # 获取所有蓝图
GET /api/blueprints/:id             # 获取特定蓝图
POST /api/blueprints                # 创建蓝图
PUT /api/blueprints/:id             # 更新蓝图
DELETE /api/blueprints/:id          # 删除蓝图
```

### 设置 `/api/settings`
```
GET /api/settings                   # 获取用户设置
PUT /api/settings                   # 创建或更新设置
```

### 库定义 `/api/library`
```
GET /api/library                    # 获取所有库定义
GET /api/library/:key               # 获取特定定义
POST /api/library                   # 创建定义
PUT /api/library/:key               # 更新定义
DELETE /api/library/:key            # 删除定义
```

## 数据库Schema

运行 `schema.sql` 在Supabase中创建以下表：

- **users** - 用户信息
- **history_items** - 历史记录
- **collections** - 收藏
- **creative_blueprints** - 创意蓝图
- **settings** - 用户设置
- **custom_library_defs** - 自定义库定义

所有表都启用了RLS（行级安全），用户只能访问自己的数据。

## 部署

### Heroku 部署

```bash
# 1. 创建Heroku应用
heroku create your-app-name

# 2. 设置环境变量
heroku config:set SUPABASE_URL=your_url
heroku config:set SUPABASE_ANON_KEY=your_key
heroku config:set SUPABASE_SERVICE_ROLE_KEY=your_key

# 3. 部署
git push heroku main
```

### Docker 部署

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
```

### 环境变量生产检查清单
- ✅ SUPABASE_URL 已设置
- ✅ SUPABASE_ANON_KEY 已设置
- ✅ SUPABASE_SERVICE_ROLE_KEY 已设置
- ✅ NODE_ENV 设为 'production'
- ✅ FRONTEND_URL 指向生产前端地址

## 错误处理

API返回标准的HTTP状态码：

| 状态码 | 描述 |
|--------|------|
| 200 | 成功 |
| 201 | 创建成功 |
| 400 | 请求错误 |
| 401 | 未认证 |
| 404 | 不存在 |
| 500 | 服务器错误 |

错误响应格式：
```json
{
  "error": "Error message here",
  "message": "Additional details (仅开发模式)"
}
```

## 安全性

- ✅ 所有数据库操作都需要认证
- ✅ Row Level Security (RLS) 确保用户隔离
- ✅ 支持CORS配置防止跨域攻击
- ✅ 在生产环境使用HTTPS
- ✅ 敏感信息不会在错误消息中泄露

## 性能优化

- 创建了索引加快查询速度
- JSON存储复杂数据结构
- 时间戳自动管理

## 监控和日志

开发环境中所有API请求都会被记录到console。建议生产环境中添加更完整的日志解决方案（如Winston或Pino）。

## 支持

需要帮助？检查以下几点：
1. 环境变量是否正确配置
2. Supabase连接是否有效
3. 数据库Schema是否已创建
4. 查看server.js中的错误处理代码

## 许可证

MIT
