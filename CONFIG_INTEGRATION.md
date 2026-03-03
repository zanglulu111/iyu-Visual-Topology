# 🔧 配置系统集成指南

## 概述

新的简化配置系统已经为您创建好了，包含：

✅ `types/config.ts` - 配置类型定义
✅ `services/configService.ts` - 配置管理服务
✅ `components/SimpleConfigPanel.tsx` - 配置面板 UI
✅ `hooks/useConfig.ts` - 配置 Hook

---

## 🚀 快速集成（3步）

### 步骤1：在 App.tsx 中添加配置面板入口

```typescript
import { SimpleConfigPanel } from '@/components/SimpleConfigPanel';

// 在您的设置菜单中添加
<button onClick={() => setShowConfig(true)}>
  系统设置
</button>

// 显示配置面板
{showConfig && <SimpleConfigPanel />}
```

### 步骤2：在生成函数中使用配置

```typescript
import { useConfig } from '@/hooks/useConfig';

function GenerateBlueprint() {
  const { getEngineCredentials } = useConfig();

  const handleGenerate = async () => {
    // 获取核心叙事引擎的凭证
    const { apiKey, model } = getEngineCredentials('coreEngine');

    // 调用 API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: 'Generate blueprint...'
            }]
          }]
        })
      }
    );

    // 处理响应
    const data = await response.json();
    return data;
  };

  return <button onClick={handleGenerate}>生成蓝图</button>;
}
```

### 步骤3：更新所有 API 调用

找到所有调用 Gemini API 的地方，替换为新的配置系统：

**旧方式：**
```typescript
const apiKey = process.env.VITE_API_KEY; // 硬编码
const model = 'gemini-3.1-pro-preview';  // 硬编码
```

**新方式：**
```typescript
const { apiKey, model } = getEngineCredentials('coreEngine');
```

---

## 📍 需要修改的文件

### 1. 所有调用 Gemini API 的服务文件

在 `services/` 文件夹中，找到以下文件并更新：

- `services/narrativeGenerator.ts` → 使用 `coreEngine`
- `services/metonymyService.ts` → 使用 `metonymyEngine`
- `services/aestheticGenerator.ts` → 使用 `aestheticEngine`（改用配置）
- `services/sutureGenerator.ts` → 使用多个引擎
- 其他生成服务...

### 2. 修改方式

每个服务中，找到类似以下的代码：

```typescript
// 旧代码
const apiKey = process.env.VITE_API_KEY;
const model = 'gemini-3.1-pro-preview';
```

替换为：

```typescript
// 新代码
import { configService } from '@/services/configService';

const apiKey = configService.getApiKey();
const model = configService.getEngineModel('coreEngine');
```

或者在 React 组件中使用 Hook：

```typescript
import { useConfig } from '@/hooks/useConfig';

function MyComponent() {
  const { getEngineCredentials } = useConfig();
  const { apiKey, model } = getEngineCredentials('coreEngine');
  // 使用 apiKey 和 model
}
```

---

## 🎯 引擎分配指南

根据您的需要，为不同的生成函数分配引擎：

| 生成函数 | 使用的引擎 | 引擎 ID |
|---------|-----------|--------|
| 生成蓝图 | 核心叙事引擎 | `coreEngine` |
| 生成剧本 | 换喻缝合引擎 | `metonymyEngine` |
| 生成分镜 | 换喻缝合引擎 | `metonymyEngine` |
| 精神分析 | 精神分析引擎 | `psychoAnalysis` |
| 图片反推 | 核心视觉圣经 | `visualBible` |
| 生成图片 | 资产生成引擎 | `imageGen` |
| 参数映射 | 植入症候引擎 | `visualSeed` |

---

## 💻 代码示例

### 示例1：在 NarrativeGenerator 中使用

```typescript
// services/narrativeGenerator.ts
import { configService } from '@/services/configService';

export async function generateBlueprint(prompt: string) {
  const apiKey = configService.getApiKey();
  const model = configService.getEngineModel('coreEngine');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    }
  );

  return response.json();
}
```

### 示例2：在 React 组件中使用

```typescript
// components/BlueprintGenerator.tsx
import { useConfig } from '@/hooks/useConfig';
import { useState } from 'react';

export function BlueprintGenerator() {
  const { getEngineCredentials } = useConfig();
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const { apiKey, model } = getEngineCredentials('coreEngine');

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: 'Generate blueprint...'
              }]
            }]
          })
        }
      );

      const data = await response.json();
      console.log('Generated:', data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleGenerate} disabled={loading}>
      {loading ? '生成中...' : '生成蓝图'}
    </button>
  );
}
```

---

## 🔍 检查清单

集成前确保：

- [ ] 已创建配置类型 (`types/config.ts`)
- [ ] 已创建配置服务 (`services/configService.ts`)
- [ ] 已创建配置面板 (`components/SimpleConfigPanel.tsx`)
- [ ] 已创建配置 Hook (`hooks/useConfig.ts`)
- [ ] 在 App.tsx 中添加了配置面板入口
- [ ] 更新了所有 API 调用为新的配置系统
- [ ] 测试了配置的保存和加载
- [ ] 测试了 API 连接

---

## 🧪 测试步骤

### 1. 测试配置保存

```typescript
// 在浏览器控制台运行
localStorage.getItem('visionary_api_config')
```

应该输出类似：
```json
{
  "apiKey": "your_api_key",
  "engines": {
    "coreEngine": "gemini-3.1-pro-preview",
    "metonymyEngine": "gemini-3.1-pro-preview",
    ...
  }
}
```

### 2. 测试引擎配置获取

```typescript
// 在浏览器控制台运行
import { configService } from '@/services/configService'
configService.getEngineModel('coreEngine')
```

应该输出配置的模型名称

### 3. 测试完整流程

1. 打开配置面板
2. 输入 API KEY
3. 选择模型
4. 测试连接
5. 点击生成按钮，验证是否成功调用 API

---

## ⚠️ 常见问题

**Q: 如果用户没有配置 API KEY 会怎样？**
A: 系统会显示警告或错误提示，引导用户配置。可以在生成前检查：
```typescript
const apiKey = configService.getApiKey();
if (!apiKey) {
  alert('请先配置 API KEY');
  return;
}
```

**Q: 可以为不同功能使用不同的 API KEY 吗？**
A: 当前系统只支持一个全局 API KEY。如果需要支持多个 KEY，需要修改配置结构。

**Q: 如何在两台设备间同步配置？**
A: 目前不支持自动同步。用户可以手动导出配置 JSON，在另一台设备导入。

---

## 📦 文件清单

新创建的文件：

```
src/
├── types/
│   └── config.ts              ✅ 配置类型
├── services/
│   └── configService.ts       ✅ 配置服务
├── components/
│   └── SimpleConfigPanel.tsx  ✅ 配置 UI
└── hooks/
    └── useConfig.ts           ✅ 配置 Hook

文档/
├── CONFIG_USAGE_GUIDE.md      ✅ 使用指南
└── CONFIG_INTEGRATION.md      ✅ 集成指南（本文件）
```

---

## 🎉 准备好了！

现在您可以：

1. ✅ 在配置面板中输入 API KEY
2. ✅ 为每个引擎选择模型
3. ✅ 在整个应用中使用这些配置
4. ✅ 随时修改配置，立即生效

**开始集成吧！** 🚀
