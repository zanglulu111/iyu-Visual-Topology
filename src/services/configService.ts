// services/configService.ts
/**
 * 配置管理服务 V4
 *
 * 功能：
 * - 本地保存 API Key 库、路由方案库、当前运行方案。
 * - 自动迁移 V1 / V3 配置，不覆盖已有 key。
 * - Provider 旧接口兼容：旧代码仍可读取 gemini/claude/openai/deepseek 槽位。
 * - 可选账户同步：如果 Supabase 已建 api_runtime_configs 表，则可保存到账号。
 */

import {
  APIConfig,
  API_KEY_PROVIDER_LABELS,
  ApiFormat,
  ApiKeyEntry,
  DEFAULT_CONFIG,
  DEFAULT_ENGINE_MODELS,
  DEFAULT_KEY_ENTRIES,
  DEFAULT_ROUTE_PROFILE,
  DEFAULT_ROUTE_PROFILE_ID,
  ENGINE_CONFIGS,
  ENGINE_IDS,
  EngineId,
  EngineModelConfig,
  EngineRouteBinding,
  EngineRouteBindings,
  LEGACY_KEY_IDS,
  OFFICIAL_BASE_URLS,
  ProviderConfig,
  ProviderId,
  RouteProfile,
  RuntimeRoute,
  getAnthropicMessagesUrl,
  getEffectiveKeyBaseUrl,
  getOpenAIChatCompletionsUrl,
  getProviderForModel,
  getRuntimeRequestUrl,
  isApiKeyCompatibleWithModel,
  providerToApiFormat,
} from '../types/config';

function proxyFetch(url: string, options: RequestInit): Promise<Response> {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const parsed = new URL(url);
    const localPath = '/__api_proxy' + parsed.pathname + parsed.search;
    const headers = new Headers(options.headers);
    headers.set('X-Proxy-Target', parsed.origin);
    return fetch(localPath, { ...options, headers });
  }
  return fetch(url, options);
}

const CONFIG_STORAGE_KEY = 'visionary_api_config';
const PRESETS_STORAGE_KEY = 'visionary_api_presets';
const CLOUD_TABLE = 'api_runtime_configs';

export interface ApiPreset {
  id: string;
  name: string;
  provider: ProviderId;
  apiKey: string;
  baseUrl: string;
  mode: ProviderConfig['mode'];
  apiFormat: ProviderConfig['apiFormat'];
}

export interface RuntimeDiagnostics {
  engineId: EngineId;
  engineName: string;
  model: string;
  keyName: string;
  keyId: string;
  apiFormat: ApiFormat;
  providerLabel: string;
  requestUrl: string;
  hasApiKey: boolean;
}

const nowIso = () => new Date().toISOString();
const createId = (prefix: string) => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

const cloneConfig = (config: APIConfig): APIConfig => JSON.parse(JSON.stringify(config));

const cleanBaseUrl = (url: string) => url.trim().replace(/\/+$/, '');

const isOfficialOpenAIUrl = (url: string) => {
  const clean = cleanBaseUrl(url || OFFICIAL_BASE_URLS.openai);
  return clean === OFFICIAL_BASE_URLS.openai;
};

const providerLabel = (provider: ApiKeyEntry['provider']) => API_KEY_PROVIDER_LABELS[provider] || provider;

class ConfigService {
  // ============================================================
  // 核心读写
  // ============================================================

  getConfig(): APIConfig {
    try {
      const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (!stored) {
        return cloneConfig(DEFAULT_CONFIG);
      }

      const parsed = JSON.parse(stored);

      if (parsed.geminiApiKey !== undefined && !parsed.gemini) {
        const migrated = this.migrateV1Config(parsed);
        this.saveConfig(migrated);
        return migrated;
      }

      const normalized = this.normalizeConfig(parsed);
      if (!parsed.keyEntries || !parsed.routeProfiles || !parsed.activeRouteProfileId) {
        this.saveConfig(normalized);
      }
      return normalized;
    } catch (error) {
      console.error('Failed to load config:', error);
      return cloneConfig(DEFAULT_CONFIG);
    }
  }

  saveConfig(config: APIConfig): void {
    try {
      const normalized = this.normalizeConfig(config);
      normalized.updatedAt = nowIso();
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(normalized));
    } catch (error) {
      console.error('Failed to save config:', error);
      throw error;
    }
  }

  private normalizeConfig(config: Partial<APIConfig>): APIConfig {
    const engines = this.normalizeEngines(config.engines || DEFAULT_ENGINE_MODELS);
    const legacyProviders = this.normalizeLegacyProviders(config);
    const keyEntries = Array.isArray(config.keyEntries) && config.keyEntries.length > 0
      ? this.normalizeKeyEntries(config.keyEntries)
      : this.migrateProviderKeys(legacyProviders);
    const routeProfiles = Array.isArray(config.routeProfiles) && config.routeProfiles.length > 0
      ? this.normalizeRouteProfiles(config.routeProfiles, engines, keyEntries)
      : [this.createRouteProfileFromEngines(engines, keyEntries, '当前配置迁移', DEFAULT_ROUTE_PROFILE_ID)];
    const activeRouteProfileId = routeProfiles.some(profile => profile.id === config.activeRouteProfileId)
      ? String(config.activeRouteProfileId)
      : routeProfiles[0]?.id || DEFAULT_ROUTE_PROFILE_ID;
    const activeProfile = routeProfiles.find(profile => profile.id === activeRouteProfileId) || routeProfiles[0];
    const activeEngines = this.enginesFromRouteProfile(activeProfile, engines);
    const providerConfigs = this.deriveLegacyProviders(keyEntries, legacyProviders);

    return {
      ...providerConfigs,
      engines: activeEngines,
      keyEntries,
      routeProfiles,
      activeRouteProfileId,
      updatedAt: config.updatedAt || nowIso(),
      cloudSyncedAt: config.cloudSyncedAt,
    };
  }

  private normalizeEngines(engines: Partial<EngineModelConfig>): EngineModelConfig {
    const normalized: EngineModelConfig = {
      ...DEFAULT_ENGINE_MODELS,
      ...(engines || {}),
    };

    for (const engine of ENGINE_CONFIGS) {
      const engineId = engine.id as EngineId;
      const selectedModel = normalized[engineId];
      if (!engine.allowedModels.includes(selectedModel)) {
        normalized[engineId] = DEFAULT_ENGINE_MODELS[engineId];
      }
    }

    return normalized;
  }

  private normalizeLegacyProviders(config: Partial<APIConfig>): Record<ProviderId, ProviderConfig> {
    return {
      gemini: {
        ...DEFAULT_CONFIG.gemini,
        ...(config.gemini || {}),
        apiFormat: (config.gemini?.mode === 'proxy' && config.gemini?.baseUrl) ? 'openai' : 'google',
      },
      claude: {
        ...DEFAULT_CONFIG.claude,
        ...(config.claude || {}),
        apiFormat: 'anthropic',
      },
      openai: {
        ...DEFAULT_CONFIG.openai,
        ...(config.openai || {}),
        mode: config.openai?.baseUrl && !isOfficialOpenAIUrl(config.openai.baseUrl)
          ? 'proxy'
          : (config.openai?.mode || DEFAULT_CONFIG.openai.mode),
        apiFormat: 'openai',
      },
      deepseek: {
        ...DEFAULT_CONFIG.deepseek,
        ...(config.deepseek || {}),
        apiFormat: 'openai',
      },
    };
  }

  private normalizeKeyEntries(entries: ApiKeyEntry[]): ApiKeyEntry[] {
    const seen = new Set<string>();
    const normalized = entries.map((entry, index) => {
      const id = entry.id || createId('key');
      const isLegacyGeminiProxy = id === LEGACY_KEY_IDS.gemini && entry.mode === 'proxy';
      const provider = isLegacyGeminiProxy ? 'gemini' : (entry.provider || 'custom');
      const apiFormat = isLegacyGeminiProxy ? 'openai' : (entry.apiFormat || providerToApiFormat(provider));
      const next: ApiKeyEntry = {
        id: seen.has(id) ? `${id}_${index}` : id,
        name: entry.name?.trim() || `${providerLabel(provider)} Key`,
        provider,
        mode: entry.mode || (provider === 'gemini' ? 'official' : 'proxy'),
        apiFormat,
        baseUrl: entry.baseUrl || '',
        apiKey: entry.apiKey || '',
        modelCoverage: isLegacyGeminiProxy ? 'provider' : (entry.modelCoverage || (provider === 'mixed' || provider === 'custom' ? 'all' : 'provider')),
        allowedModels: Array.isArray(entry.allowedModels) ? entry.allowedModels : [],
        modelPattern: entry.modelPattern || '',
        tags: Array.from(new Set([...(Array.isArray(entry.tags) ? entry.tags : []), ...(isLegacyGeminiProxy ? ['gemini'] : [])])),
        note: entry.note || '',
        createdAt: entry.createdAt || nowIso(),
        updatedAt: entry.updatedAt || nowIso(),
        lastTestStatus: entry.lastTestStatus,
        lastTestMessage: entry.lastTestMessage,
        lastTestAt: entry.lastTestAt,
      };
      seen.add(next.id);
      return next;
    });

    for (const defaultEntry of DEFAULT_KEY_ENTRIES) {
      if (!normalized.some(entry => entry.id === defaultEntry.id)) {
        normalized.push({ ...defaultEntry });
      }
    }

    return normalized;
  }

  private migrateProviderKeys(providers: Record<ProviderId, ProviderConfig>): ApiKeyEntry[] {
    const migrated = DEFAULT_KEY_ENTRIES.map(entry => ({ ...entry }));

    const applyProvider = (provider: ProviderId, patch: Partial<ApiKeyEntry>) => {
      const idx = migrated.findIndex(entry => entry.id === LEGACY_KEY_IDS[provider]);
      if (idx >= 0) migrated[idx] = { ...migrated[idx], ...patch, updatedAt: nowIso() };
    };

    applyProvider('gemini', {
      name: providers.gemini.mode === 'proxy' ? 'Gemini 兼容网关' : 'Gemini 官方 Key',
      provider: 'gemini',
      mode: providers.gemini.mode,
      apiFormat: providers.gemini.mode === 'proxy' ? 'openai' : 'google',
      baseUrl: providers.gemini.baseUrl,
      apiKey: providers.gemini.apiKey,
      modelCoverage: 'provider',
      tags: ['migrated', 'gemini'],
    });

    applyProvider('claude', {
      name: 'Claude 网关 Key',
      provider: 'claude',
      mode: providers.claude.mode,
      apiFormat: 'anthropic',
      baseUrl: providers.claude.baseUrl,
      apiKey: providers.claude.apiKey,
      modelCoverage: 'provider',
      tags: ['migrated', 'claude'],
    });

    applyProvider('openai', {
      name: providers.openai.mode === 'proxy' ? 'OpenAI 兼容网关' : 'OpenAI 官方 Key',
      provider: providers.openai.mode === 'proxy' ? 'mixed' : 'openai',
      mode: providers.openai.mode,
      apiFormat: 'openai',
      baseUrl: providers.openai.baseUrl,
      apiKey: providers.openai.apiKey,
      modelCoverage: providers.openai.mode === 'proxy' ? 'all' : 'provider',
      tags: ['migrated', 'openai'],
    });

    applyProvider('deepseek', {
      name: providers.deepseek.mode === 'proxy' ? 'DeepSeek 兼容网关' : 'DeepSeek 官方 Key',
      provider: providers.deepseek.mode === 'proxy' ? 'mixed' : 'deepseek',
      mode: providers.deepseek.mode,
      apiFormat: 'openai',
      baseUrl: providers.deepseek.baseUrl,
      apiKey: providers.deepseek.apiKey,
      modelCoverage: providers.deepseek.mode === 'proxy' ? 'all' : 'provider',
      tags: ['migrated', 'deepseek'],
    });

    return migrated;
  }

  private normalizeRouteProfiles(
    profiles: RouteProfile[],
    engines: EngineModelConfig,
    keyEntries: ApiKeyEntry[]
  ): RouteProfile[] {
    return profiles.map((profile, index) => ({
      id: profile.id || createId('route'),
      name: profile.name?.trim() || `路由方案 ${index + 1}`,
      description: profile.description || '',
      createdAt: profile.createdAt || nowIso(),
      updatedAt: profile.updatedAt || nowIso(),
      bindings: this.normalizeBindings(profile.bindings || {}, engines, keyEntries),
    }));
  }

  private normalizeBindings(
    bindings: Partial<EngineRouteBindings>,
    engines: EngineModelConfig,
    keyEntries: ApiKeyEntry[]
  ): Partial<EngineRouteBindings> {
    const normalized: Partial<EngineRouteBindings> = {};

    for (const engineId of ENGINE_IDS) {
      const engine = ENGINE_CONFIGS.find(item => item.id === engineId);
      const currentModel = bindings[engineId]?.model || engines[engineId] || DEFAULT_ENGINE_MODELS[engineId];
      const model = engine?.allowedModels.includes(currentModel) ? currentModel : DEFAULT_ENGINE_MODELS[engineId];
      const keyId = bindings[engineId]?.keyId || this.findDefaultKeyIdForModel(model, keyEntries);
      normalized[engineId] = { keyId, model };
    }

    return normalized;
  }

  private createRouteProfileFromEngines(
    engines: EngineModelConfig,
    keyEntries: ApiKeyEntry[],
    name = DEFAULT_ROUTE_PROFILE.name,
    id = createId('route')
  ): RouteProfile {
    const bindings: Partial<EngineRouteBindings> = {};
    for (const engineId of ENGINE_IDS) {
      const model = engines[engineId] || DEFAULT_ENGINE_MODELS[engineId];
      bindings[engineId] = {
        model,
        keyId: this.findDefaultKeyIdForModel(model, keyEntries),
      };
    }

    return {
      id,
      name,
      description: '从旧配置自动迁移生成。',
      bindings,
      createdAt: nowIso(),
      updatedAt: nowIso(),
    };
  }

  private enginesFromRouteProfile(profile: RouteProfile | undefined, fallback: EngineModelConfig): EngineModelConfig {
    const engines: EngineModelConfig = { ...fallback };
    for (const engineId of ENGINE_IDS) {
      engines[engineId] = profile?.bindings?.[engineId]?.model || fallback[engineId] || DEFAULT_ENGINE_MODELS[engineId];
    }
    return this.normalizeEngines(engines);
  }

  private deriveLegacyProviders(
    keyEntries: ApiKeyEntry[],
    fallback: Record<ProviderId, ProviderConfig>
  ): Record<ProviderId, ProviderConfig> {
    const findEntry = (provider: ProviderId) =>
      keyEntries.find(entry => entry.id === LEGACY_KEY_IDS[provider])
      || keyEntries.find(entry => entry.provider === provider);

    const toProviderConfig = (provider: ProviderId): ProviderConfig => {
      const entry = findEntry(provider);
      if (!entry) return fallback[provider];
      return {
        apiKey: entry.apiKey,
        mode: entry.mode,
        baseUrl: entry.baseUrl,
        apiFormat: entry.apiFormat,
      };
    };

    return {
      gemini: toProviderConfig('gemini'),
      claude: toProviderConfig('claude'),
      openai: toProviderConfig('openai'),
      deepseek: toProviderConfig('deepseek'),
    };
  }

  private findDefaultKeyIdForModel(model: string, keyEntries: ApiKeyEntry[]): string {
    const provider = getProviderForModel(model);
    const providerKeyWithKey = keyEntries.find(entry =>
      entry.apiKey
      && this.isProviderAlignedKey(entry, provider)
      && isApiKeyCompatibleWithModel(entry, model)
    );
    if (providerKeyWithKey) return providerKeyWithKey.id;

    const explicitModelKey = keyEntries.find(entry =>
      entry.apiKey
      && this.isExplicitModelRoute(entry, model)
      && isApiKeyCompatibleWithModel(entry, model)
    );
    if (explicitModelKey) return explicitModelKey.id;

    const compatibleWithKey = keyEntries.find(entry => entry.apiKey && isApiKeyCompatibleWithModel(entry, model));
    if (compatibleWithKey) return compatibleWithKey.id;

    return keyEntries.find(entry => this.isProviderAlignedKey(entry, provider))?.id
      || keyEntries[0]?.id
      || LEGACY_KEY_IDS.gemini;
  }

  private isProviderAlignedKey(entry: ApiKeyEntry, provider: ProviderId): boolean {
    return entry.provider === provider
      || entry.id === LEGACY_KEY_IDS[provider]
      || entry.tags.includes(provider);
  }

  private isExplicitModelRoute(entry: ApiKeyEntry, model: string): boolean {
    if (entry.modelCoverage === 'allowlist') {
      return entry.allowedModels.includes(model);
    }
    if (entry.modelCoverage === 'pattern' && entry.modelPattern) {
      const escaped = entry.modelPattern
        .split('*')
        .map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('.*');
      return new RegExp(`^${escaped}$`, 'i').test(model);
    }
    return false;
  }

  private shouldKeepBoundKeyForModel(entry: ApiKeyEntry, model: string, keyEntries: ApiKeyEntry[]): boolean {
    if (!isApiKeyCompatibleWithModel(entry, model)) return false;

    const provider = getProviderForModel(model);
    if (this.isProviderAlignedKey(entry, provider) || this.isExplicitModelRoute(entry, model)) {
      return true;
    }

    return !keyEntries.some(candidate =>
      candidate.id !== entry.id
      && candidate.apiKey
      && this.isProviderAlignedKey(candidate, provider)
      && isApiKeyCompatibleWithModel(candidate, model)
    );
  }

  // ============================================================
  // V1 -> V4 迁移
  // ============================================================

  private migrateV1Config(v1: any): APIConfig {
    console.log('[ConfigService] Migrating legacy config to V4...');
    const openaiBase = v1.openaiBaseUrl || DEFAULT_CONFIG.openai.baseUrl;
    const migrated = this.normalizeConfig({
      gemini: {
        ...DEFAULT_CONFIG.gemini,
        apiKey: v1.geminiApiKey || v1.apiKey || '',
        mode: v1.baseUrl ? 'proxy' : 'official',
        baseUrl: v1.baseUrl || '',
      },
      claude: {
        ...DEFAULT_CONFIG.claude,
        apiKey: v1.claudeApiKey || '',
        mode: 'proxy',
        baseUrl: v1.claudeBaseUrl || v1.baseUrl || '',
      },
      openai: {
        ...DEFAULT_CONFIG.openai,
        apiKey: v1.openaiApiKey || '',
        mode: openaiBase && !isOfficialOpenAIUrl(openaiBase) ? 'proxy' : 'official',
        baseUrl: openaiBase,
      },
      deepseek: DEFAULT_CONFIG.deepseek,
      engines: {
        ...DEFAULT_ENGINE_MODELS,
        ...(v1.engines || {}),
      },
    });
    return migrated;
  }

  // ============================================================
  // Key 库
  // ============================================================

  getKeyEntries(): ApiKeyEntry[] {
    return this.getConfig().keyEntries;
  }

  getKeyEntry(id: string): ApiKeyEntry | undefined {
    return this.getConfig().keyEntries.find(entry => entry.id === id);
  }

  createKeyEntry(seed: Partial<ApiKeyEntry> = {}): ApiKeyEntry {
    const provider = seed.provider || 'mixed';
    return {
      id: seed.id || createId('key'),
      name: seed.name || `${providerLabel(provider)} Key`,
      provider,
      mode: seed.mode || (provider === 'gemini' ? 'official' : 'proxy'),
      apiFormat: seed.apiFormat || providerToApiFormat(provider),
      baseUrl: seed.baseUrl || '',
      apiKey: seed.apiKey || '',
      modelCoverage: seed.modelCoverage || (provider === 'mixed' || provider === 'custom' ? 'all' : 'provider'),
      allowedModels: seed.allowedModels || [],
      modelPattern: seed.modelPattern || '',
      tags: seed.tags || [],
      note: seed.note || '',
      createdAt: seed.createdAt || nowIso(),
      updatedAt: nowIso(),
      lastTestStatus: seed.lastTestStatus,
      lastTestMessage: seed.lastTestMessage,
      lastTestAt: seed.lastTestAt,
    };
  }

  upsertKeyEntry(entry: ApiKeyEntry): APIConfig {
    const config = this.getConfig();
    const nextEntry = { ...entry, updatedAt: nowIso() };
    const idx = config.keyEntries.findIndex(item => item.id === entry.id);
    const keyEntries = idx >= 0
      ? config.keyEntries.map(item => item.id === entry.id ? nextEntry : item)
      : [nextEntry, ...config.keyEntries];

    const next = this.normalizeConfig({ ...config, keyEntries });
    this.saveConfig(next);
    return this.getConfig();
  }

  deleteKeyEntry(id: string): APIConfig {
    const config = this.getConfig();
    if (config.keyEntries.length <= 1) return config;

    const keyEntries = config.keyEntries.filter(entry => entry.id !== id);
    const routeProfiles = config.routeProfiles.map(profile => {
      const bindings: Partial<EngineRouteBindings> = {};
      for (const engineId of ENGINE_IDS) {
        const binding = profile.bindings[engineId];
        if (!binding) continue;
        bindings[engineId] = binding.keyId === id
          ? { ...binding, keyId: this.findDefaultKeyIdForModel(binding.model, keyEntries) }
          : binding;
      }
      return { ...profile, bindings, updatedAt: nowIso() };
    });

    const next = this.normalizeConfig({ ...config, keyEntries, routeProfiles });
    this.saveConfig(next);
    return this.getConfig();
  }

  // ============================================================
  // 路由方案
  // ============================================================

  getRouteProfiles(): RouteProfile[] {
    return this.getConfig().routeProfiles;
  }

  getActiveRouteProfile(): RouteProfile {
    const config = this.getConfig();
    return config.routeProfiles.find(profile => profile.id === config.activeRouteProfileId)
      || config.routeProfiles[0]
      || DEFAULT_ROUTE_PROFILE;
  }

  createRouteProfile(name = '新路由方案'): APIConfig {
    const config = this.getConfig();
    const active = this.getActiveRouteProfile();
    const profile: RouteProfile = {
      id: createId('route'),
      name,
      description: '',
      bindings: { ...active.bindings },
      createdAt: nowIso(),
      updatedAt: nowIso(),
    };
    const next = this.normalizeConfig({
      ...config,
      routeProfiles: [profile, ...config.routeProfiles],
    });
    this.saveConfig(next);
    return this.getConfig();
  }

  upsertRouteProfile(profile: RouteProfile): APIConfig {
    const config = this.getConfig();
    const nextProfile = { ...profile, updatedAt: nowIso() };
    const routeProfiles = config.routeProfiles.some(item => item.id === profile.id)
      ? config.routeProfiles.map(item => item.id === profile.id ? nextProfile : item)
      : [nextProfile, ...config.routeProfiles];
    const next = this.normalizeConfig({ ...config, routeProfiles });
    this.saveConfig(next);
    return this.getConfig();
  }

  deleteRouteProfile(id: string): APIConfig {
    const config = this.getConfig();
    if (config.routeProfiles.length <= 1) return config;
    const routeProfiles = config.routeProfiles.filter(profile => profile.id !== id);
    const activeRouteProfileId = config.activeRouteProfileId === id ? routeProfiles[0].id : config.activeRouteProfileId;
    const next = this.normalizeConfig({ ...config, routeProfiles, activeRouteProfileId });
    this.saveConfig(next);
    return this.getConfig();
  }

  setActiveRouteProfile(id: string): APIConfig {
    const config = this.getConfig();
    const next = this.normalizeConfig({ ...config, activeRouteProfileId: id });
    this.saveConfig(next);
    return this.getConfig();
  }

  setEngineBinding(engineId: EngineId, binding: Partial<EngineRouteBinding>, profileId?: string): APIConfig {
    const config = this.getConfig();
    const targetProfileId = profileId || config.activeRouteProfileId;
    const routeProfiles = config.routeProfiles.map(profile => {
      if (profile.id !== targetProfileId) return profile;
      const current = profile.bindings[engineId] || {
        model: DEFAULT_ENGINE_MODELS[engineId],
        keyId: this.findDefaultKeyIdForModel(DEFAULT_ENGINE_MODELS[engineId], config.keyEntries),
      };
      const nextBinding = { ...current, ...binding };
      if (binding.model && !binding.keyId) {
        const currentKey = config.keyEntries.find(entry => entry.id === current.keyId);
        nextBinding.keyId = currentKey && this.shouldKeepBoundKeyForModel(currentKey, binding.model, config.keyEntries)
          ? current.keyId
          : this.findDefaultKeyIdForModel(binding.model, config.keyEntries);
      }
      return {
        ...profile,
        bindings: {
          ...profile.bindings,
          [engineId]: nextBinding,
        },
        updatedAt: nowIso(),
      };
    });
    const next = this.normalizeConfig({ ...config, routeProfiles });
    this.saveConfig(next);
    return this.getConfig();
  }

  applyKeyToAllEngines(keyId: string, profileId?: string): APIConfig {
    const config = this.getConfig();
    const key = config.keyEntries.find(entry => entry.id === keyId);
    if (!key) return config;

    const targetProfileId = profileId || config.activeRouteProfileId;
    const routeProfiles = config.routeProfiles.map(profile => {
      if (profile.id !== targetProfileId) return profile;
      const bindings: Partial<EngineRouteBindings> = {};
      for (const engineId of ENGINE_IDS) {
        const current = profile.bindings[engineId];
        if (!current) continue;
        bindings[engineId] = isApiKeyCompatibleWithModel(key, current.model)
          ? { ...current, keyId }
          : current;
      }
      return { ...profile, bindings, updatedAt: nowIso() };
    });

    const next = this.normalizeConfig({ ...config, routeProfiles });
    this.saveConfig(next);
    return this.getConfig();
  }

  applyModelToAllCompatibleEngines(model: string, profileId?: string): APIConfig {
    const config = this.getConfig();
    const targetProfileId = profileId || config.activeRouteProfileId;
    const routeProfiles = config.routeProfiles.map(profile => {
      if (profile.id !== targetProfileId) return profile;
      const bindings: Partial<EngineRouteBindings> = {};
      for (const engine of ENGINE_CONFIGS) {
        const engineId = engine.id as EngineId;
        const current = profile.bindings[engineId];
        if (!current || !engine.allowedModels.includes(model)) continue;
        const key = config.keyEntries.find(entry => entry.id === current.keyId);
        bindings[engineId] = {
          model,
          keyId: key && this.shouldKeepBoundKeyForModel(key, model, config.keyEntries)
            ? current.keyId
            : this.findDefaultKeyIdForModel(model, config.keyEntries),
        };
      }
      return { ...profile, bindings: { ...profile.bindings, ...bindings }, updatedAt: nowIso() };
    });

    const next = this.normalizeConfig({ ...config, routeProfiles });
    this.saveConfig(next);
    return this.getConfig();
  }

  // ============================================================
  // 旧 Provider 兼容方法
  // ============================================================

  getProviderConfig(provider: ProviderId): ProviderConfig {
    return this.getConfig()[provider];
  }

  updateProviderConfig(provider: ProviderId, updates: Partial<ProviderConfig>): void {
    const config = this.getConfig();
    const legacy = { ...config[provider], ...updates };
    const keyId = LEGACY_KEY_IDS[provider];
    const keyEntries = config.keyEntries.map(entry => {
      if (entry.id !== keyId) return entry;
      const isGeminiProxy = provider === 'gemini' && legacy.mode === 'proxy';
      return {
        ...entry,
        provider,
        mode: legacy.mode,
        apiFormat: isGeminiProxy ? 'openai' : legacy.apiFormat,
        baseUrl: legacy.baseUrl,
        apiKey: legacy.apiKey,
        modelCoverage: 'provider',
        tags: Array.from(new Set([...entry.tags, ...(isGeminiProxy ? ['gemini'] : [])])),
        updatedAt: nowIso(),
      } as ApiKeyEntry;
    });

    const next = this.normalizeConfig({ ...config, [provider]: legacy, keyEntries });
    this.saveConfig(next);
  }

  getApiKey(): string {
    const key = this.getKeyEntries().find(entry => entry.provider === 'gemini' && entry.apiKey);
    return key?.apiKey || this.getConfig().gemini.apiKey;
  }

  setApiKey(apiKey: string): void {
    this.updateProviderConfig('gemini', { apiKey });
  }

  getClaudeApiKey(): string {
    return this.getConfig().claude.apiKey;
  }

  setClaudeApiKey(apiKey: string): void {
    this.updateProviderConfig('claude', { apiKey });
  }

  getOpenAIApiKey(): string {
    return this.getConfig().openai.apiKey;
  }

  setOpenAIApiKey(apiKey: string): void {
    this.updateProviderConfig('openai', { apiKey });
  }

  getBaseUrl(): string {
    return this.getConfig().gemini.baseUrl;
  }

  getClaudeBaseUrl(): string {
    return this.getConfig().claude.baseUrl;
  }

  getOpenAIBaseUrl(): string {
    return this.getConfig().openai.baseUrl;
  }

  // ============================================================
  // 引擎模型 / 运行时路由
  // ============================================================

  getEngineModel(engineId: string): string {
    const normalizedId = engineId as EngineId;
    const binding = this.getActiveRouteProfile().bindings[normalizedId];
    return binding?.model || this.getConfig().engines[normalizedId] || '';
  }

  setEngineModel(engineId: string, model: string): void {
    const normalizedId = engineId as EngineId;
    const config = this.getConfig();
    const active = this.getActiveRouteProfile();
    const current = active.bindings[normalizedId];
    const currentKey = current ? config.keyEntries.find(entry => entry.id === current.keyId) : undefined;
    const keyId = currentKey && this.shouldKeepBoundKeyForModel(currentKey, model, config.keyEntries)
      ? currentKey.id
      : this.findDefaultKeyIdForModel(model, config.keyEntries);
    this.setEngineBinding(normalizedId, { model, keyId });
  }

  getEngineConfigs(): EngineModelConfig {
    return this.getConfig().engines;
  }

  getActiveBinding(engineId: string): EngineRouteBinding | undefined {
    return this.getActiveRouteProfile().bindings[engineId as EngineId];
  }

  getProviderConfigForEngine(engineId: string): {
    provider: ProviderId;
    config: ProviderConfig;
    model: string;
    baseUrl: string;
  } {
    const runtime = this.getRuntimeForEngine(engineId as EngineId);
    const runtimeProvider = runtime.key?.provider;
    const provider = runtimeProvider === 'claude'
      || runtimeProvider === 'openai'
      || runtimeProvider === 'gemini'
      || runtimeProvider === 'deepseek'
      ? runtimeProvider
      : getProviderForModel(runtime.model);
    const config = this.getProviderConfig(provider);
    return {
      provider,
      config,
      model: runtime.model,
      baseUrl: runtime.baseUrl,
    };
  }

  getRuntimeForEngine(engineId: EngineId, modelOverride?: string): RuntimeRoute {
    const config = this.getConfig();
    const profile = config.routeProfiles.find(item => item.id === config.activeRouteProfileId) || config.routeProfiles[0];
    const binding = profile?.bindings[engineId];
    const model = modelOverride || binding?.model || DEFAULT_ENGINE_MODELS[engineId];
    const boundKey = binding ? config.keyEntries.find(entry => entry.id === binding.keyId) : undefined;
    const key = boundKey && this.shouldKeepBoundKeyForModel(boundKey, model, config.keyEntries)
      ? boundKey
      : config.keyEntries.find(entry => entry.id === this.findDefaultKeyIdForModel(model, config.keyEntries));
    const provider = key?.provider || getProviderForModel(model);
    const apiFormat = key?.apiFormat || providerToApiFormat(provider);
    const baseUrl = key ? getEffectiveKeyBaseUrl(key) : '';
    const requestUrl = key ? getRuntimeRequestUrl(key) : '';

    return {
      engineId,
      model,
      key,
      provider,
      apiFormat,
      baseUrl,
      requestUrl,
    };
  }

  getRuntimeForModel(model: string): RuntimeRoute {
    const config = this.getConfig();
    const activeProfile = config.routeProfiles.find(item => item.id === config.activeRouteProfileId) || config.routeProfiles[0];
    const matchedEngine = ENGINE_IDS.find(engineId => activeProfile?.bindings[engineId]?.model === model) || 'coreEngine';
    return this.getRuntimeForEngine(matchedEngine, model);
  }

  getRuntimeDiagnostics(): RuntimeDiagnostics[] {
    const active = this.getActiveRouteProfile();
    return ENGINE_CONFIGS.map(engine => {
      const engineId = engine.id as EngineId;
      const runtime = this.getRuntimeForEngine(engineId);
      return {
        engineId,
        engineName: engine.name,
        model: active.bindings[engineId]?.model || runtime.model,
        keyName: runtime.key?.name || '未绑定 Key',
        keyId: runtime.key?.id || '',
        apiFormat: runtime.apiFormat,
        providerLabel: runtime.key ? providerLabel(runtime.key.provider) : providerLabel(runtime.provider),
        requestUrl: runtime.requestUrl || '未生成请求地址',
        hasApiKey: !!runtime.key?.apiKey,
      };
    });
  }

  // ============================================================
  // 连接测试
  // ============================================================

  async testProviderConnection(provider: ProviderId): Promise<{
    success: boolean;
    message: string;
  }> {
    const config = this.getConfig();
    const key = config.keyEntries.find(entry => entry.id === LEGACY_KEY_IDS[provider])
      || config.keyEntries.find(entry => entry.provider === provider);
    if (!key) return { success: false, message: '未找到该 Provider 的 Key 条目' };
    return this.testKeyConnection(key.id);
  }

  async testKeyConnection(keyId: string, modelHint?: string): Promise<{
    success: boolean;
    message: string;
  }> {
    const config = this.getConfig();
    const key = config.keyEntries.find(entry => entry.id === keyId);
    if (!key) return { success: false, message: 'Key 条目不存在' };
    if (!key.apiKey) return { success: false, message: 'API Key 未填写' };

    const model = modelHint || this.pickTestModelForKey(key);
    const baseUrl = getEffectiveKeyBaseUrl(key);

    if (key.apiFormat !== 'google' && !baseUrl) {
      return { success: false, message: '该 Key 需要 Base URL' };
    }

    try {
      let result: { success: boolean; message: string };
      if (key.apiFormat === 'google' && key.mode === 'official') {
        result = await this.testGeminiOfficial(key.apiKey, model);
      } else if (key.apiFormat === 'anthropic') {
        result = await this.testClaude(key.apiKey, baseUrl, model);
      } else {
        result = await this.testOpenAICompatible(key.apiKey, baseUrl, model);
      }

      this.upsertKeyEntry({
        ...key,
        lastTestStatus: result.success ? 'success' : 'error',
        lastTestMessage: result.message,
        lastTestAt: nowIso(),
      });
      return result;
    } catch (error: any) {
      const result = { success: false, message: `网络错误: ${error?.message || '无法连接'}` };
      this.upsertKeyEntry({
        ...key,
        lastTestStatus: 'error',
        lastTestMessage: result.message,
        lastTestAt: nowIso(),
      });
      return result;
    }
  }

  private pickTestModelForKey(key: ApiKeyEntry): string {
    if (key.allowedModels.length > 0) return key.allowedModels[0];
    if (key.provider === 'claude' || key.apiFormat === 'anthropic') return 'claude-opus-4-6';
    if (key.provider === 'deepseek') return 'deepseek-v4-flash';
    if (key.provider === 'gemini' && key.apiFormat === 'google') return 'gemini-3.1-flash-lite-preview';
    return 'gpt-5.5';
  }

  private async testGeminiOfficial(apiKey: string, model: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Hi' }] }],
        }),
      }
    );

    if (response.ok) {
      return { success: true, message: 'Gemini 官方 API 连接成功' };
    }

    const errText = await response.text().catch(() => '');
    if (response.status === 400) {
      return { success: true, message: 'API Key 有效，测试模型可能需确认' };
    }
    return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 160)}` };
  }

  private async testClaude(apiKey: string, baseUrl: string, model: string): Promise<{ success: boolean; message: string }> {
    const fetchUrl = getAnthropicMessagesUrl(baseUrl);
    const response = await proxyFetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Claude / Anthropic 连接成功' };
    }
    return this.formatConnectionError(response, fetchUrl);
  }

  private async testOpenAICompatible(
    apiKey: string,
    baseUrl: string,
    model: string
  ): Promise<{ success: boolean; message: string }> {
    const fetchUrl = getOpenAIChatCompletionsUrl(baseUrl);
    const response = await proxyFetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5,
        stream: false,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'OpenAI-compatible 连接成功' };
    }
    return this.formatConnectionError(response, fetchUrl);
  }

  private async formatConnectionError(
    response: Response,
    fetchUrl: string
  ): Promise<{ success: boolean; message: string }> {
    const errText = await response.text().catch(() => '');
    if (errText.trim().startsWith('<') || errText.includes('<!DOCTYPE')) {
      return {
        success: false,
        message: `Base URL 返回了网页而非 API 响应，请检查地址。\n测试地址: ${fetchUrl}`,
      };
    }
    return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 180)}` };
  }

  // ============================================================
  // 重置 / 导入 / 导出
  // ============================================================

  resetToDefault(): void {
    this.saveConfig(cloneConfig(DEFAULT_CONFIG));
  }

  exportConfig(): string {
    return JSON.stringify(this.getConfig(), null, 2);
  }

  importConfig(jsonString: string): boolean {
    try {
      const config = JSON.parse(jsonString);

      if (config.keyEntries && config.routeProfiles) {
        this.saveConfig(this.normalizeConfig(config));
        return true;
      }

      if (config.gemini && config.claude && config.engines) {
        this.saveConfig(this.normalizeConfig(config));
        return true;
      }

      if (config.geminiApiKey || config.apiKey) {
        const migrated = this.migrateV1Config(config);
        this.saveConfig(migrated);
        return true;
      }

      throw new Error('Invalid config structure');
    } catch (error) {
      console.error('Failed to import config:', error);
      return false;
    }
  }

  // ============================================================
  // V3 预设兼容
  // ============================================================

  getPresets(): ApiPreset[] {
    try {
      const raw = localStorage.getItem(PRESETS_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return parsed.map((preset: any) => ({
        id: preset.id,
        name: preset.name,
        provider: preset.provider || 'claude',
        apiKey: preset.apiKey || '',
        baseUrl: preset.baseUrl || '',
        mode: preset.mode || (preset.provider === 'openai' || preset.provider === 'deepseek' ? 'official' : 'proxy'),
        apiFormat: preset.apiFormat || providerToApiFormat(preset.provider || 'claude'),
      }));
    } catch {
      return [];
    }
  }

  savePreset(preset: ApiPreset): void {
    const presets = this.getPresets();
    const idx = presets.findIndex(p => p.id === preset.id);
    if (idx >= 0) {
      presets[idx] = preset;
    } else {
      presets.push(preset);
    }
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
  }

  deletePreset(id: string): void {
    const presets = this.getPresets().filter(p => p.id !== id);
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
  }

  applyPreset(preset: ApiPreset): void {
    this.updateProviderConfig(preset.provider, {
      apiKey: preset.apiKey,
      baseUrl: preset.baseUrl,
      mode: preset.mode,
      apiFormat: preset.apiFormat,
    });
  }

  migrateLegacyPresetsToKeys(): APIConfig {
    const config = this.getConfig();
    const presets = this.getPresets();
    const existingSignature = new Set(config.keyEntries.map(entry => `${entry.apiKey}|${entry.baseUrl}`));
    const keyEntries = [...config.keyEntries];

    for (const preset of presets) {
      const signature = `${preset.apiKey}|${preset.baseUrl}`;
      if (!preset.apiKey || existingSignature.has(signature)) continue;
      keyEntries.unshift(this.createKeyEntry({
        name: preset.name,
        provider: preset.mode === 'proxy' ? 'mixed' : preset.provider,
        mode: preset.mode,
        apiFormat: preset.apiFormat,
        baseUrl: preset.baseUrl,
        apiKey: preset.apiKey,
        modelCoverage: preset.mode === 'proxy' ? 'all' : 'provider',
        tags: ['legacy-preset'],
      }));
      existingSignature.add(signature);
    }

    const next = this.normalizeConfig({ ...config, keyEntries });
    this.saveConfig(next);
    return this.getConfig();
  }

  // ============================================================
  // 账户云同步（可选，需要 Supabase 表 api_runtime_configs）
  // ============================================================

  async loadCloudConfigResult(): Promise<{ success: boolean; message: string; config: APIConfig | null }> {
    try {
      const { supabase } = await import('../../services/supabaseAuth');
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) {
        return { success: false, message: '未登录，无法从账户载入配置。', config: null };
      }

      const { data, error } = await supabase
        .from(CLOUD_TABLE)
        .select('config_data')
        .eq('user_id', user.user.id)
        .maybeSingle();

      if (error) {
        return { success: false, message: `账户载入失败: ${this.formatCloudError(error)}`, config: null };
      }
      if (!data?.config_data) {
        return { success: false, message: '账户暂无系统架构配置。请先点“同步账户”初始化。', config: null };
      }
      return {
        success: true,
        message: '已从账户载入系统架构配置。',
        config: this.normalizeConfig(data.config_data),
      };
    } catch (error) {
      console.warn('Cloud API config is unavailable, using local config.', error);
      return { success: false, message: `账户载入不可用: ${error instanceof Error ? error.message : '未知错误'}`, config: null };
    }
  }

  async loadCloudConfig(): Promise<APIConfig | null> {
    const result = await this.loadCloudConfigResult();
    return result.config;
  }

  async saveCloudConfig(config = this.getConfig()): Promise<{ success: boolean; message: string }> {
    try {
      const { supabase } = await import('../../services/supabaseAuth');
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) {
        return { success: false, message: '未登录，已仅保存到本机。' };
      }

      const normalized = this.normalizeConfig(config);
      normalized.cloudSyncedAt = nowIso();
      const { error } = await supabase
        .from(CLOUD_TABLE)
        .upsert({
          user_id: user.user.id,
          config_data: normalized,
          updated_at: normalized.cloudSyncedAt,
        }, { onConflict: 'user_id' });

      if (error) {
        return { success: false, message: `账户同步失败: ${this.formatCloudError(error)}` };
      }

      this.saveConfig(normalized);
      return { success: true, message: '已同步到账户。' };
    } catch (error: any) {
      return { success: false, message: `账户同步不可用: ${error?.message || '未知错误'}` };
    }
  }

  private formatCloudError(error: any): string {
    const message = error?.message || String(error || '未知错误');
    const code = error?.code || '';
    if (code === '42P01' || code === 'PGRST205' || /api_runtime_configs|schema cache|does not exist|relation/i.test(message)) {
      return '云端表 api_runtime_configs 尚未部署。需要先执行 supabase/migrations/202605170001_api_runtime_configs.sql。';
    }
    if (/row-level security|permission denied|not authorized/i.test(message)) {
      return '权限不足。请确认已登录，并且 api_runtime_configs 的 RLS 策略已部署。';
    }
    return message;
  }
}

export const configService = new ConfigService();
