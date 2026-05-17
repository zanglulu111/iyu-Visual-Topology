// types/config.ts
/**
 * API 配置系统 V4
 *
 * 核心设计：
 * - Key 层：长期保存多个 API Key、网关地址、协议格式与模型覆盖范围。
 * - Route 层：保存多套“引擎 -> Key + 模型”的路由方案。
 * - Runtime 层：当前运行方案只引用 Key，不覆盖 Key 本身。
 *
 * V3 的 gemini / claude / openai 三槽位仍保留为兼容层，旧代码与旧 localStorage
 * 会自动迁移到 Key 库 + 当前路由方案。
 */

// ============================================================
// Provider / Key 配置
// ============================================================

export type ProviderId = 'gemini' | 'claude' | 'openai' | 'deepseek';
export type ApiKeyProvider = ProviderId | 'mixed' | 'custom';
export type ProviderMode = 'official' | 'proxy';
export type ApiFormat = 'google' | 'anthropic' | 'openai';
export type ModelCoverageMode = 'provider' | 'all' | 'allowlist' | 'pattern';
export type ConnectionStatus = 'idle' | 'testing' | 'success' | 'error';

export interface ProviderConfig {
  apiKey: string;
  mode: ProviderMode;
  baseUrl: string;
  apiFormat: ApiFormat;
}

export interface ApiKeyEntry {
  id: string;
  name: string;
  provider: ApiKeyProvider;
  mode: ProviderMode;
  apiFormat: ApiFormat;
  baseUrl: string;
  apiKey: string;
  modelCoverage: ModelCoverageMode;
  allowedModels: string[];
  modelPattern?: string;
  tags: string[];
  note?: string;
  createdAt: string;
  updatedAt: string;
  lastTestStatus?: Exclude<ConnectionStatus, 'testing'>;
  lastTestMessage?: string;
  lastTestAt?: string;
}

export const PROVIDER_LABELS: Record<ProviderId, string> = {
  gemini: 'Gemini',
  claude: 'Claude',
  openai: 'OpenAI',
  deepseek: 'DeepSeek',
};

export const API_KEY_PROVIDER_LABELS: Record<ApiKeyProvider, string> = {
  gemini: 'Gemini',
  claude: 'Claude',
  openai: 'OpenAI',
  deepseek: 'DeepSeek',
  mixed: '混合网关',
  custom: '自定义',
};

export const API_FORMAT_LABELS: Record<ApiFormat, string> = {
  google: 'Google Native',
  anthropic: 'Anthropic Messages',
  openai: 'OpenAI Compatible',
};

export const PROVIDER_COLORS: Record<ProviderId, string> = {
  gemini: '#FFD700',
  claude: '#c084fc',
  openai: '#22c55e',
  deepseek: '#4f8cff',
};

export const OFFICIAL_BASE_URLS: Record<ProviderId, string> = {
  gemini: '',
  claude: 'https://api.anthropic.com',
  openai: 'https://api.openai.com/v1',
  deepseek: 'https://api.deepseek.com',
};

export const LEGACY_KEY_IDS: Record<ProviderId, string> = {
  gemini: 'key_gemini_primary',
  claude: 'key_claude_primary',
  openai: 'key_openai_primary',
  deepseek: 'key_deepseek_primary',
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

export type EngineId = keyof EngineModelConfig;

export interface EngineRouteBinding {
  keyId: string;
  model: string;
}

export type EngineRouteBindings = Record<EngineId, EngineRouteBinding>;

export interface RouteProfile {
  id: string;
  name: string;
  description?: string;
  bindings: Partial<EngineRouteBindings>;
  createdAt: string;
  updatedAt: string;
}

export interface RuntimeRoute {
  engineId: EngineId;
  model: string;
  key?: ApiKeyEntry;
  provider: ApiKeyProvider;
  apiFormat: ApiFormat;
  baseUrl: string;
  requestUrl: string;
}

// ============================================================
// 完整配置结构
// ============================================================

export interface APIConfig {
  // V3 兼容层。新版运行时优先读取 keyEntries + routeProfiles。
  gemini: ProviderConfig;
  claude: ProviderConfig;
  openai: ProviderConfig;
  deepseek: ProviderConfig;
  engines: EngineModelConfig;

  // V4 主结构。
  keyEntries: ApiKeyEntry[];
  routeProfiles: RouteProfile[];
  activeRouteProfileId: string;
  updatedAt?: string;
  cloudSyncedAt?: string;
}

// ============================================================
// 默认配置
// ============================================================

export const DEFAULT_ENGINE_MODELS: EngineModelConfig = {
  coreEngine: 'gemini-3.1-pro-preview',
  metonymyEngine: 'gemini-3.1-pro-preview',
  psychoAnalysis: 'gemini-3.1-flash-lite-preview',
  visualBible: 'gemini-3.1-pro-preview',
  visualSeed: 'gemini-3-pro-image-preview',
  imageGen: 'gemini-3-pro-image-preview',
};

export const ENGINE_IDS = Object.keys(DEFAULT_ENGINE_MODELS) as EngineId[];

export const DEFAULT_ROUTE_PROFILE_ID = 'route_default_current';
const DEFAULT_CREATED_AT = '2026-01-01T00:00:00.000Z';

export const DEFAULT_KEY_ENTRIES: ApiKeyEntry[] = [
  {
    id: LEGACY_KEY_IDS.gemini,
    name: 'Gemini 官方 Key',
    provider: 'gemini',
    mode: 'official',
    apiFormat: 'google',
    baseUrl: '',
    apiKey: '',
    modelCoverage: 'provider',
    allowedModels: [],
    tags: ['default'],
    createdAt: DEFAULT_CREATED_AT,
    updatedAt: DEFAULT_CREATED_AT,
  },
  {
    id: LEGACY_KEY_IDS.claude,
    name: 'Claude 网关 Key',
    provider: 'claude',
    mode: 'proxy',
    apiFormat: 'anthropic',
    baseUrl: '',
    apiKey: '',
    modelCoverage: 'provider',
    allowedModels: [],
    tags: ['default'],
    createdAt: DEFAULT_CREATED_AT,
    updatedAt: DEFAULT_CREATED_AT,
  },
  {
    id: LEGACY_KEY_IDS.openai,
    name: 'OpenAI 官方 Key',
    provider: 'openai',
    mode: 'official',
    apiFormat: 'openai',
    baseUrl: OFFICIAL_BASE_URLS.openai,
    apiKey: '',
    modelCoverage: 'provider',
    allowedModels: [],
    tags: ['default'],
    createdAt: DEFAULT_CREATED_AT,
    updatedAt: DEFAULT_CREATED_AT,
  },
  {
    id: LEGACY_KEY_IDS.deepseek,
    name: 'DeepSeek 官方 Key',
    provider: 'deepseek',
    mode: 'official',
    apiFormat: 'openai',
    baseUrl: OFFICIAL_BASE_URLS.deepseek,
    apiKey: '',
    modelCoverage: 'provider',
    allowedModels: [],
    tags: ['default', 'domestic'],
    createdAt: DEFAULT_CREATED_AT,
    updatedAt: DEFAULT_CREATED_AT,
  },
];

export const DEFAULT_ROUTE_PROFILE: RouteProfile = {
  id: DEFAULT_ROUTE_PROFILE_ID,
  name: '默认运行方案',
  description: '系统默认的六引擎路由。',
  createdAt: DEFAULT_CREATED_AT,
  updatedAt: DEFAULT_CREATED_AT,
  bindings: {
    coreEngine: { keyId: LEGACY_KEY_IDS.gemini, model: DEFAULT_ENGINE_MODELS.coreEngine },
    metonymyEngine: { keyId: LEGACY_KEY_IDS.gemini, model: DEFAULT_ENGINE_MODELS.metonymyEngine },
    psychoAnalysis: { keyId: LEGACY_KEY_IDS.gemini, model: DEFAULT_ENGINE_MODELS.psychoAnalysis },
    visualBible: { keyId: LEGACY_KEY_IDS.gemini, model: DEFAULT_ENGINE_MODELS.visualBible },
    visualSeed: { keyId: LEGACY_KEY_IDS.gemini, model: DEFAULT_ENGINE_MODELS.visualSeed },
    imageGen: { keyId: LEGACY_KEY_IDS.gemini, model: DEFAULT_ENGINE_MODELS.imageGen },
  },
};

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
  deepseek: {
    apiKey: '',
    mode: 'official',
    baseUrl: OFFICIAL_BASE_URLS.deepseek,
    apiFormat: 'openai',
  },
  engines: DEFAULT_ENGINE_MODELS,
  keyEntries: DEFAULT_KEY_ENTRIES,
  routeProfiles: [DEFAULT_ROUTE_PROFILE],
  activeRouteProfileId: DEFAULT_ROUTE_PROFILE_ID,
  updatedAt: DEFAULT_CREATED_AT,
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
    id: 'gpt-5.5',
    name: 'GPT-5.5',
    provider: 'openai',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'deepseek-v4-flash',
    name: 'DeepSeek V4 Flash',
    provider: 'deepseek',
    type: 'text',
    canSeeImages: true,
  },
  {
    id: 'deepseek-v4-pro',
    name: 'DeepSeek V4 Pro',
    provider: 'deepseek',
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
  if (lower.includes('deepseek')) return 'deepseek';
  if (lower.startsWith('gpt-') || lower.startsWith('o') || lower.includes('openai')) return 'openai';
  return 'gemini';
}

export function getEffectiveBaseUrl(provider: ProviderId, config: ProviderConfig): string {
  if (provider === 'gemini' && config.mode === 'official') return '';
  if (config.mode === 'official') return getOfficialApiBaseUrl(provider, config.apiFormat);
  return config.baseUrl.trim();
}

export function getEffectiveKeyBaseUrl(entry: ApiKeyEntry): string {
  if (entry.mode === 'official' && entry.provider in OFFICIAL_BASE_URLS) {
    return getOfficialApiBaseUrl(entry.provider as ProviderId, entry.apiFormat);
  }
  return entry.baseUrl.trim();
}

export function getOfficialApiBaseUrl(provider: ProviderId, apiFormat: ApiFormat): string {
  if (provider === 'deepseek' && apiFormat === 'anthropic') return 'https://api.deepseek.com/anthropic';
  return OFFICIAL_BASE_URLS[provider];
}

export function getOpenAIChatCompletionsUrl(baseUrl: string): string {
  const cleanBaseUrl = baseUrl.trim().replace(/\/+$/, '');
  if (!cleanBaseUrl) return '';
  if (/\/chat\/completions$/i.test(cleanBaseUrl)) return cleanBaseUrl;
  if (/\/v\d+$/i.test(cleanBaseUrl)) return `${cleanBaseUrl}/chat/completions`;
  try {
    const parsed = new URL(cleanBaseUrl);
    if (parsed.hostname === 'api.deepseek.com' && (parsed.pathname === '' || parsed.pathname === '/')) {
      return `${cleanBaseUrl}/chat/completions`;
    }
  } catch {
    // Fall back to the common OpenAI-compatible /v1 convention below.
  }
  return `${cleanBaseUrl}/v1/chat/completions`;
}

export function getAnthropicMessagesUrl(baseUrl: string): string {
  const cleanBaseUrl = baseUrl.trim().replace(/\/+$/, '');
  if (!cleanBaseUrl) return '';
  if (/\/v\d+\/messages$/i.test(cleanBaseUrl)) return cleanBaseUrl;
  if (/\/v\d+$/i.test(cleanBaseUrl)) return `${cleanBaseUrl}/messages`;
  return `${cleanBaseUrl}/v1/messages`;
}

export function getRuntimeRequestUrl(entry: ApiKeyEntry): string {
  const baseUrl = getEffectiveKeyBaseUrl(entry);
  if (entry.apiFormat === 'openai') return getOpenAIChatCompletionsUrl(baseUrl);
  if (entry.apiFormat === 'anthropic') return getAnthropicMessagesUrl(baseUrl);
  if (entry.mode === 'official') return 'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent';
  return getOpenAIChatCompletionsUrl(baseUrl);
}

export function maskApiKey(apiKey: string): string {
  const trimmed = apiKey.trim();
  if (!trimmed) return '未填写';
  if (trimmed.length <= 10) return `${trimmed.slice(0, 3)}***`;
  return `${trimmed.slice(0, 6)}***${trimmed.slice(-4)}`;
}

export function isApiKeyCompatibleWithModel(entry: ApiKeyEntry, modelId: string): boolean {
  if (entry.modelCoverage === 'all' || entry.provider === 'mixed') return true;
  if (entry.modelCoverage === 'allowlist') {
    return entry.allowedModels.length === 0 || entry.allowedModels.includes(modelId);
  }
  if (entry.modelCoverage === 'pattern' && entry.modelPattern) {
    const escaped = entry.modelPattern
      .split('*')
      .map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('.*');
    return new RegExp(`^${escaped}$`, 'i').test(modelId);
  }
  if (entry.provider === 'custom') return true;
  return getProviderForModel(modelId) === entry.provider;
}

export function providerToApiFormat(provider: ApiKeyProvider): ApiFormat {
  if (provider === 'claude') return 'anthropic';
  if (provider === 'gemini') return 'google';
  return 'openai';
}
