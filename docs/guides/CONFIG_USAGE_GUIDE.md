// CONFIG_USAGE_GUIDE.md
# 🎛️ 新配置系统使用指南

## 概述

全新的**极度简化配置系统**，只需：
1. **输入 API KEY**（最上方）
2. **为 6 个引擎选择模型**（下方）

就可以使用，且可以随时更改！

---

## 📋 6个引擎说明

### 1️⃣ 核心叙事引擎 (coreEngine)
**默认模型**: `gemini-3.1-pro-preview`
**用途**:
- 故事幻视生成
- 圣经生成
- AI 续写
- 蓝图生成
- 其他高创意任务

### 2️⃣ 换喻缝合引擎 (metonymyEngine)
**默认模型**: `gemini-3.1-pro-preview`
**用途**:
- 生成文学剧本
- 生成分镜表
- 风格迁移
- 文学→视觉转换

### 3️⃣ 精神分析引擎 (psychoAnalysis)
**默认模型**: `gemini-3.1-pro-preview`
**用途**:
- 拉康精神分析报告
- 深度心理解读

### 4️⃣ 核心视觉圣经 (visualBible)
**默认模型**: `gemini-3.1-pro-preview`
**用途**:
- 图片反推（Global Reverse）
- 全局影调解析
- 资产分析
- 需要强大识图能力

### 5️⃣ 植入症候引擎 (visualSeed)
**默认模型**: `gemini-3-pro-image-preview`
**用途**:
- 欲望输入解码
- 参数映射
- 视觉种子处理

### 6️⃣ 资产生成引擎 (imageGen)
**默认模型**: `gemini-3-pro-image-preview`
**用途**:
- 直接生成视觉参考图片
- 生图任务

---

## 🚀 使用步骤

### 步骤1：打开配置面板
```
点击菜单 → 系统设置 → 配置
```

### 步骤2：输入 API KEY
```
1. 在【🔑 API KEY 设置】区域输入您的 Gemini API Key
2. 点击【保存】按钮
3. （可选）点击【测试连接】验证 API 有效性
```

### 步骤3：配置每个引擎的模型
```
对每个引擎：
1. 从下拉菜单选择要使用的模型
2. 配置自动保存，无需手动保存
```

### 步骤4：完成！
```
现在您可以使用应用了！
当点击任何生成按钮时，系统会自动使用该模块对应的模型。
```

---

## 💻 在代码中使用配置

### 方式1：使用 Hook（推荐）

```typescript
import { useConfig } from '@/hooks/useConfig';

function MyComponent() {
  const { getEngineModel, getEngineCredentials } = useConfig();

  // 获取核心叙事引擎的模型
  const model = getEngineModel('coreEngine');

  // 获取完整的凭证（API KEY + 模型）
  const { apiKey, model } = getEngineCredentials('coreEngine');

  // 现在可以调用 Gemini API
  // ...
}
```

### 方式2：直接使用 Service

```typescript
import { configService } from '@/services/configService';

// 获取 API KEY
const apiKey = configService.getApiKey();

// 获取特定引擎的模型
const model = configService.getEngineModel('coreEngine');

// 获取所有配置
const allEngines = configService.getEngineConfigs();
```

---

## 🔄 调用示例

### 调用核心叙事引擎生成蓝图

```typescript
import { useConfig } from '@/hooks/useConfig';

async function generateBlueprint() {
  const { getEngineCredentials } = useConfig();
  const { apiKey, model } = getEngineCredentials('coreEngine');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Generate a creative blueprint...'
          }]
        }]
      })
    }
  );

  const data = await response.json();
  return data;
}
```

### 调用资产生成引擎生成图片

```typescript
import { useConfig } from '@/hooks/useConfig';

async function generateAssetImage() {
  const { getEngineCredentials } = useConfig();
  const { apiKey, model } = getEngineCredentials('imageGen');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Generate a visual asset...'
          }]
        }]
      })
    }
  );

  const data = await response.json();
  return data;
}
```

---

## 🔑 引擎 ID 映射表

| 中文名称 | 引擎 ID | 类型 | 默认模型 |
|---------|--------|------|---------|
| 核心叙事引擎 | `coreEngine` | Text | gemini-3.1-pro-preview |
| 换喻缝合引擎 | `metonymyEngine` | Text | gemini-3.1-pro-preview |
| 精神分析引擎 | `psychoAnalysis` | Text | gemini-3.1-pro-preview |
| 核心视觉圣经 | `visualBible` | Text | gemini-3.1-pro-preview |
| 植入症候引擎 | `visualSeed` | Image | gemini-3-pro-image-preview |
| 资产生成引擎 | `imageGen` | Image | gemini-3-pro-image-preview |

---

## ⚙️ 可用模型列表

### 文本模型
- `gemini-3.1-pro-preview` ⭐ 推荐（最强）
- `gemini-3-pro-preview`
- `gemini-3-flash-preview`

### 图像模型
- `gemini-3-pro-image-preview` ⭐ 推荐（最强）
- `gemini-3-flash-image-preview`

---

## 💾 配置管理

### 导出配置
```
点击【导出配置】按钮，配置 JSON 会复制到剪贴板
```

### 导入配置
```typescript
const json = `{...}`; // 配置 JSON
configService.importConfig(json);
```

### 重置为默认
```
点击【重置为默认】按钮，所有配置恢复到默认值
```

---

## 📱 配置存储位置

所有配置存储在浏览器的 `localStorage` 中：
- **存储键**: `visionary_api_config`
- **格式**: JSON
- **位置**: 浏览器本地存储

---

## 🔒 安全提示

⚠️ **重要**：
- API KEY 存储在浏览器本地存储中
- 不要在公共计算机上输入您的 API KEY
- 可以使用账户默认的 API KEY，也可以创建专用的 KEY
- 定期更换 API KEY 以提高安全性

---

## 🎯 快速参考

### 获取配置的三种方法

**1. 使用 Hook（最简单）**
```typescript
const { getEngineModel, getEngineCredentials } = useConfig();
```

**2. 使用 Service**
```typescript
configService.getEngineModel('coreEngine');
```

**3. 直接读取对象**
```typescript
const config = configService.getConfig();
const model = config.engines.coreEngine;
```

---

## 📞 常见问题

**Q: 如何切换不同的引擎？**
A: 在配置面板中为不同的引擎选择不同的模型，每个引擎的配置独立保存。

**Q: 修改配置需要重启应用吗？**
A: 不需要！配置修改会立即生效。

**Q: 可以为同一个引擎使用多个 API KEY 吗？**
A: 不可以，目前系统只支持一个全局 API KEY。每个引擎都使用同一个 KEY。

**Q: 如何恢复默认配置？**
A: 在配置面板点击【重置为默认】按钮。

**Q: 配置会在哪里同步？**
A: 配置只在浏览器本地存储，不同标签页可以实时同步，但不同设备之间不会同步。

---

**准备好了吗？打开配置面板开始使用吧！** 🚀
