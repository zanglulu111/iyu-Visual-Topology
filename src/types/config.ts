// types/config.ts
/**
 * API 配置系统 V3
 *
 * 核心设计：
 * - Provider 层：Gemini / Claude / OpenAI 各自保存 API Key、接入模式、Base URL。
 * - Model 层：每个模型声明归属 Provider，模型名决定调用路由。
 * - Engine 层：每个业务引擎独立选择模型，因此可同时使用不同 API。
 */

// ============================================================
// Provider 配置
// ============================================================

export type ProviderId = 'gemini' | 'claude' | 'openai';
export type ProviderMode = 'official' | 'proxy';
export type ApiFormat = 'google' | 'anthropic' | 'openai';

export interface ProviderConfig {
  apiKey: string;
  mode: ProviderMode;
  baseUrl: string;
  apiFormat: ApiFormat;
}

export const PROVIDER_LABELS: Record<ProviderId, string> = {
  gemini: 'Gemini',
  claude: 'Claude',
  openai: 'OpenAI',
};

export const PROVIDER_COLORS: Record<ProviderId, string> = {
  gemini: '#d4af37',
  claude: '#c084fc',
  openai: '#22c55e',
};

export const OFFICIAL_BASE_URLS: Record<ProviderId, string> = {
  gemini: '',
  claude: 'https://api.anthropic.com',
  openai: 'https://api.openai.com/v1',
};

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
  gemini: ProviderConfig;
  claude: ProviderConfig;
  openai: ProviderConfig;
  engines: EngineModelConfig;
}

// ============================================================
// 默认配置
// ============================================================

export const DEFAULT_CONFIG: APIConfig = {
  gemini: {
    apiKey: '',
    mode: 'official',
    baseUrl: '',
    apiFormat: 'google',
  },
  claude: {
    apiKey: '',
    mode: 'proxy',
    baseUrl: '',
    apiFormat: 'anthropic',
  },
  openai: {
    apiKey: '',
    mode: 'official',
    baseUrl: OFFICIAL_BASE_URLS.openai,
    apiFormat: 'openai',
  },
  engines: {
    coreEngine: 'gemini-3.1-pro-preview',
    metonymyEngine: 'gemini-3.1-pro-preview',
    psychoAnalysis: 'gemini-3.1-flash-lite-preview',
    visualBible: 'gemini-3.1-pro-preview',
    visualSeed: 'gemini-3-pro-image-preview',
    imageGen: 'gemini-3-pro-image-preview',
  },
};

// ============================================================
// 可用模型目录
// ============================================================

export interface ModelOption {
  id: string;
  name: string;
  provider: ProviderId;
  type: 'text' | 'image';
  canSeeImages?: boolean;
  note?: string;
}

export const MODEL_CATALOG: ModelOption[] = [
  {
    id: 'gemini-3.1-pro-preview',
    name: 'Gemini 3.1 Pro Preview',
    provider: 'gemini',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'gemini-3.1-flash-lite-preview',
    name: 'Gemini 3.1 Flash Lite Preview',
    provider: 'gemini',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'claude-opus-4-7',
    name: 'Claude Opus 4.7',
    provider: 'claude',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'claude-opus-4-6',
    name: 'Claude Opus 4.6',
    provider: 'claude',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'claude-sonnet-4-6',
    name: 'Claude Sonnet 4.6',
    provider: 'claude',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'gpt-5.5',
    name: 'GPT-5.5',
    provider: 'openai',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'gpt-5.4',
    name: 'GPT-5.4',
    provider: 'openai',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'gpt-5.4-mini',
    name: 'GPT-5.4 Mini',
    provider: 'openai',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'gemini-3-pro-image-preview',
    name: 'Gemini 3 Pro Image Preview',
    provider: 'gemini',
    type: 'image',
  },
  {
    id: 'gemini-3-flash-image-preview',
    name: 'Gemini 3 Flash Image Preview',
    provider: 'gemini',
    type: 'image',
  },
];

export const AVAILABLE_MODELS = {
  // 核心文本/多模态任务：允许 Gemini、Claude、OpenAI 混用
  core: MODEL_CATALOG.filter(model => model.type === 'text').map(model => model.id),

  // 所有文本模型
  text: MODEL_CATALOG.filter(model => model.type === 'text').map(model => model.id),

  // 图像生成专用模型
  image: MODEL_CATALOG.filter(model => model.type === 'image').map(model => model.id),
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
    allowedModels: AVAILABLE_MODELS.core,
  },
  {
    id: 'metonymyEngine',
    name: '换喻缝合引擎',
    description: '剧本生成、分镜表、风格迁移等文学到视觉转换',
    type: 'text',
    allowedModels: AVAILABLE_MODELS.core,
  },
  {
    id: 'psychoAnalysis',
    name: '精神分析引擎',
    description: '拉康精神分析报告、深度心理解读',
    type: 'text',
    allowedModels: AVAILABLE_MODELS.core,
  },
  {
    id: 'visualBible',
    name: '核心视觉圣经',
    description: '图片反推、全局影调解析、资产分析，需要识图能力',
    type: 'text',
    allowedModels: AVAILABLE_MODELS.core,
  },
  {
    id: 'visualSeed',
    name: '植入症候引擎',
    description: '欲望输入解码、参数映射、视觉种子处理',
    type: 'image',
    allowedModels: [...AVAILABLE_MODELS.image, 'gpt-5.5'],
  },
  {
    id: 'imageGen',
    name: '资产生成引擎',
    description: '直接生成视觉参考图片',
    type: 'image',
    allowedModels: [...AVAILABLE_MODELS.image, 'gpt-5.5'],
  },
] as const;

// ============================================================
// 工具函数
// ============================================================

export function getModelOption(modelId: string): ModelOption | undefined {
  return MODEL_CATALOG.find(model => model.id === modelId);
}

/**
 * 根据模型名判断属于哪个 Provider。
 * 未登记模型按命名约定兜底，便于用户手动填入新模型名。
 */
export function getProviderForModel(modelId: string): ProviderId {
  const model = getModelOption(modelId);
  if (model) return model.provider;

  const lower = modelId.toLowerCase();
  if (lower.includes('claude')) return 'claude';
  if (lower.startsWith('gpt-') || lower.startsWith('o') || lower.includes('openai')) return 'openai';
  return 'gemini';
}

export function getEffectiveBaseUrl(provider: ProviderId, config: ProviderConfig): string {
  if (provider === 'gemini' && config.mode === 'official') return '';
  if (config.mode === 'official') return OFFICIAL_BASE_URLS[provider];
  return config.baseUrl.trim();
}

export function getOpenAIChatCompletionsUrl(baseUrl: string): string {
  const cleanBaseUrl = baseUrl.trim().replace(/\/+$/, '');
  if (!cleanBaseUrl) return '';
  if (/\/chat\/completions$/i.test(cleanBaseUrl)) return cleanBaseUrl;
  if (/\/v\d+$/i.test(cleanBaseUrl)) return `${cleanBaseUrl}/chat/completions`;
  return `${cleanBaseUrl}/v1/chat/completions`;
}
