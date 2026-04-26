// types/config.ts
/**
 * API 配置系统 V2
 * 
 * 核心设计：
 * - 每个 Provider（Gemini / Claude）独立配置：API Key + 接入模式 + Base URL
 * - Gemini 支持两种模式：官方直连（Google SDK）和第三方代理（OpenAI-compatible）
 * - Claude 只支持第三方代理模式（浏览器端无法直连 Anthropic API，CORS 限制）
 * - 每个引擎独立选择使用哪个模型，系统自动根据模型名路由到对应 Provider
 */

// ============================================================
// Provider 配置
// ============================================================

export type ProviderMode = 'official' | 'proxy';

export interface ProviderConfig {
  apiKey: string;
  mode: ProviderMode;    // 'official' = 官方SDK直连, 'proxy' = 第三方代理
  baseUrl: string;       // 代理模式下的基地址 (e.g. https://xxx.com/claude)
  apiFormat?: 'anthropic'; // 保留字段，始终为 anthropic
}

// ============================================================
// 引擎模型映射
// ============================================================

export interface EngineModelConfig {
  // 1. 核心叙事引擎
  coreEngine: string;

  // 2. 换喻缝合引擎
  metonymyEngine: string;

  // 3. 精神分析引擎
  psychoAnalysis: string;

  // 4. 核心视觉圣经
  visualBible: string;

  // 5. 植入症候引擎
  visualSeed: string;

  // 6. 资产生成引擎
  imageGen: string;
}

// ============================================================
// 完整配置结构
// ============================================================

export interface APIConfig {
  // 两个 Provider 独立配置
  gemini: ProviderConfig;
  claude: ProviderConfig;

  // 6个引擎的模型配置
  engines: EngineModelConfig;
}

// ============================================================
// 默认配置
// ============================================================

export const DEFAULT_CONFIG: APIConfig = {
  gemini: {
    apiKey: '',
    mode: 'official',  // 默认使用官方直连
    baseUrl: '',
  },
  claude: {
    apiKey: '',
    mode: 'proxy',         // Claude 必须走代理
    baseUrl: '',
    apiFormat: 'anthropic', // 默认使用 Anthropic 原生格式
  },
  engines: {
    coreEngine: 'gemini-3.1-pro-preview',
    metonymyEngine: 'gemini-3.1-pro-preview',
    psychoAnalysis: 'gemini-3.1-flash-lite-preview',
    visualBible: 'gemini-3.1-pro-preview',
    visualSeed: 'gemini-3-pro-image-preview',
    imageGen: 'gemini-3-pro-image-preview',
  }
};

// ============================================================
// 可用模型列表
// ============================================================

export const AVAILABLE_MODELS = {
  // 前四个文本引擎可用的模型（支持 Gemini 和 Claude）
  core: [
    'gemini-3.1-pro-preview',
    'gemini-3.1-flash-lite-preview',
    'claude-opus-4-6',
    'claude-sonnet-4-6',
  ],
  // 所有文本模型
  text: [
    'gemini-3.1-pro-preview',
    'gemini-3.1-flash-lite-preview',
    'claude-opus-4-6',
    'claude-sonnet-4-6',
    'gemini-3-pro-image-preview',
    'gemini-3-flash-image-preview',
  ],
  // 图像生成专用模型（仅 Gemini）
  image: [
    'gemini-3-pro-image-preview',
    'gemini-3-flash-image-preview',
  ]
};

// ============================================================
// 引擎配置元信息
// ============================================================

export const ENGINE_CONFIGS = [
  {
    id: 'coreEngine',
    name: '核心叙事引擎',
    description: '故事幻视、圣经生成、AI续写、蓝图生成等高创意任务',
    type: 'text',
  },
  {
    id: 'metonymyEngine',
    name: '换喻缝合引擎',
    description: '剧本生成、分镜表、风格迁移等文学→视觉转换',
    type: 'text',
  },
  {
    id: 'psychoAnalysis',
    name: '精神分析引擎',
    description: '拉康精神分析报告、深度心理解读',
    type: 'text',
  },
  {
    id: 'visualBible',
    name: '核心视觉圣经',
    description: '图片反推、全局影调解析、资产分析（需要识图）',
    type: 'text',
  },
  {
    id: 'visualSeed',
    name: '植入症候引擎',
    description: '欲望输入解码、参数映射、视觉种子处理',
    type: 'image',
  },
  {
    id: 'imageGen',
    name: '资产生成引擎',
    description: '直接生成视觉参考图片',
    type: 'image',
  },
];

// ============================================================
// 工具函数
// ============================================================

/**
 * 根据模型名判断属于哪个 Provider
 */
export function getProviderForModel(modelId: string): 'gemini' | 'claude' {
  if (modelId.includes('claude')) return 'claude';
  return 'gemini';
}
