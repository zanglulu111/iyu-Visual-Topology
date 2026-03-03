# 前后端一体化部署指南

## 项目结构

```
【迷雾学派】爱欲视觉拓扑学 2-24版/
├── frontend/                 # 前端代码（现有）
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   ├── services/
│   │   │   ├── backendAPI.ts       # 新增：后端API客户端
│   │   │   ├── supabaseAuth.ts     # 新增：Supabase认证
│   │   │   └── persistenceAdapter.ts # 新增：本地/远程存储适配器
│   │   ├── types.ts
│   │   └── ...
│   ├── package.json
│   ├── vite.config.ts
│   ├── .env.example
│   └── ...
│
└── backend/                  # 新增：后端代码
    ├── server.js             # Express服务器
    ├── schema.sql            # Supabase数据库schema
    ├── routes/
    │   ├── history.js        # 历史记录API
    │   ├── collections.js    # 收藏API
    │   ├── blueprints.js     # 创意蓝图API
    │   ├── settings.js       # 设置API
    │   └── library.js        # 库定义API
    ├── package.json
    ├── .env.example
    └── README.md
```

## 第一步：Supabase设置

### 1.1 创建Supabase项目
1. 访问 https://supabase.com
2. 创建新项目
3. 等待初始化完成
4. 记下项目URL和Anon Key

### 1.2 导入数据库Schema
1. 在Supabase Dashboard中，打开SQL Editor
2. 复制 `backend/schema.sql` 的内容
3. 粘贴到SQL编辑器并执行
4. 确认所有表都已创建

### 1.3 配置认证
1. 在Supabase Dashboard中，进入Authentication → Providers
2. 启用Email Provider
3. 配置重定向URL：
   - 开发环境: `http://localhost:5173/callback`
   - 生产环境: `https://yourdomain.com/callback`

## 第二步：后端部署

### 2.1 本地开发设置

```bash
# 进入后端目录
cd backend

# 安装依赖
npm install

# 创建.env文件
cp .env.example .env

# 编辑.env，填入Supabase凭证
# SUPABASE_URL=your_url
# SUPABASE_ANON_KEY=your_anon_key
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 2.2 启动后端服务器

```bash
# 开发模式（使用nodemon自动重启）
npm run dev

# 或者生产模式
npm start
```

服务器将在 `http://localhost:3001` 启动

## 第三步：前端集成

### 3.1 环境变量配置

```bash
# 进入前端目录（项目根目录）
cp .env.example .env

# 编辑.env文件
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
# VITE_API_URL=http://localhost:3001/api
```

### 3.2 安装Supabase依赖

```bash
npm install
```

### 3.3 启动前端开发服务器

```bash
npm run dev
```

## 第四步：前端代码集成

### 4.1 修改App.tsx - 启用Supabase认证

在 `App.tsx` 中的适当位置添加：

```typescript
import { supabaseAuthService } from './services/supabaseAuth';
import { backendAPI } from './services/backendAPI';

// 在App组件中初始化认证
useEffect(() => {
    const unsubscribe = supabaseAuthService.onAuthStateChange(async (user) => {
        if (user) {
            setCurrentUser({
                id: user.id,
                username: user.username || user.email,
                level: 'User',
                isPro: false,
                avatarColor: 'bg-blue-500'
            });

            // 启用远程存储
            await persistenceAdapter.init(true);
        } else {
            // 使用本地存储
            await persistenceAdapter.init(false);
        }
    });

    return unsubscribe;
}, []);
```

### 4.2 替换数据持久化调用

**旧代码（IndexedDB）:**
```typescript
import { persistence } from './services/persistence';

// 获取历史记录
const history = await persistence.getHistory();
```

**新代码（后端API）:**
```typescript
import { persistenceAdapter } from './services/persistenceAdapter';

// 自动选择本地或远程存储
const history = await persistenceAdapter.getHistory();
```

### 4.3 添加登录/注册界面

创建或更新 `components/AuthModal.tsx`：

```typescript
import { supabaseAuthService } from '../services/supabaseAuth';

export const AuthModal: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuth = async () => {
        try {
            if (isSignUp) {
                await supabaseAuthService.signUp(email, password, username);
            } else {
                await supabaseAuthService.signIn(email, password);
            }
        } catch (error) {
            console.error('Auth failed:', error);
        }
    };

    return (
        <div className="auth-modal">
            {/* 实现登录界面 */}
        </div>
    );
};
```

## 第五步：数据迁移

如果有现有的IndexedDB数据需要迁移到Supabase：

```typescript
// 迁移脚本
async function migrateData() {
    // 从IndexedDB读取数据
    const history = await persistence.getHistory();
    const collections = await persistence.getCollections();

    // 上传到Supabase
    for (const item of history) {
        await backendAPI.saveHistory(item);
    }
    for (const item of collections) {
        await backendAPI.saveCollection(item.blueprint);
    }
}
```

## 第六步：生产部署

### 6.1 后端部署（以Heroku为例）

```bash
# 1. 创建Heroku账户并安装CLI
# 2. 在backend目录中：
heroku create your-app-name
heroku config:set SUPABASE_URL=your_url
heroku config:set SUPABASE_ANON_KEY=your_key
heroku config:set SUPABASE_SERVICE_ROLE_KEY=your_service_key
git push heroku main
```

### 6.2 前端部署（以Vercel为例）

```bash
# 1. 更新.env中的VITE_API_URL为生产后端URL
# VITE_API_URL=https://your-backend.herokuapp.com/api

# 2. 构建
npm run build

# 3. 部署到Vercel（连接GitHub自动部署）
```

### 6.3 Supabase生产配置

1. 启用Row Level Security (RLS) - 已在schema中配置
2. 在Supabase Dashboard中配置CORS：
   ```
   访问 Settings → API
   CORS Allowed Origins: https://yourdomain.com
   ```

## API 端点参考

### 历史记录
- `GET /api/history` - 获取所有历史记录
- `GET /api/history/:id` - 获取特定历史记录
- `POST /api/history` - 创建历史记录
- `PUT /api/history/:id` - 更新历史记录
- `DELETE /api/history/:id` - 删除历史记录

### 收藏
- `GET /api/collections` - 获取所有收藏
- `GET /api/collections/:id` - 获取特定收藏
- `POST /api/collections` - 创建收藏
- `PUT /api/collections/:id` - 更新收藏
- `DELETE /api/collections/:id` - 删除收藏

### 创意蓝图
- `GET /api/blueprints` - 获取所有蓝图
- `GET /api/blueprints/:id` - 获取特定蓝图
- `POST /api/blueprints` - 创建蓝图
- `PUT /api/blueprints/:id` - 更新蓝图
- `DELETE /api/blueprints/:id` - 删除蓝图

### 设置
- `GET /api/settings` - 获取用户设置
- `PUT /api/settings` - 更新用户设置

### 库定义
- `GET /api/library` - 获取所有库定义
- `GET /api/library/:key` - 获取特定库定义
- `POST /api/library` - 创建库定义
- `PUT /api/library/:key` - 更新库定义
- `DELETE /api/library/:key` - 删除库定义

## 故障排除

### 问题1：CORS错误
**解决方案：**
- 检查.env中的FRONTEND_URL配置
- 确保Supabase CORS设置正确

### 问题2：认证失败
**解决方案：**
- 验证Supabase凭证正确
- 检查浏览器console中的错误信息
- 确保JWT令牌未过期

### 问题3：数据不同步
**解决方案：**
- 检查后端日志
- 验证RLS策略是否正确
- 确保用户已认证

## 开发建议

1. **本地开发模式**：在开发过程中，可以使用IndexedDB本地存储来避免API调用延迟
   ```typescript
   await persistenceAdapter.init(false); // 使用本地存储
   ```

2. **生产模式**：生产环境应使用远程存储
   ```typescript
   await persistenceAdapter.init(true); // 使用远程存储
   ```

3. **错误处理**：始终包装API调用
   ```typescript
   try {
       const data = await persistenceAdapter.getHistory();
   } catch (error) {
       console.error('Failed to fetch history:', error);
       // 回退到本地存储或显示错误消息
   }
   ```

## 文件清单

### 后端新增文件
- ✅ backend/server.js
- ✅ backend/package.json
- ✅ backend/.env.example
- ✅ backend/schema.sql
- ✅ backend/routes/history.js
- ✅ backend/routes/collections.js
- ✅ backend/routes/blueprints.js
- ✅ backend/routes/settings.js
- ✅ backend/routes/library.js

### 前端新增文件
- ✅ services/backendAPI.ts
- ✅ services/supabaseAuth.ts
- ✅ services/persistenceAdapter.ts
- ✅ .env.example
- ✅ 更新 package.json （添加Supabase依赖）

### 需要修改的文件
- 📝 App.tsx （添加Supabase认证初始化）
- 📝 components/AuthModal.tsx （实现认证UI）
- 📝 其他使用persistence的组件 （改用persistenceAdapter）

## 支持

如有问题，请检查：
1. 后端服务器是否运行
2. Supabase连接是否有效
3. 环境变量是否正确配置
4. 网络连接状态
