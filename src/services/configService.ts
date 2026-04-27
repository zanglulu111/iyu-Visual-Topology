// services/configService.ts
/**
 * 配置管理服务 V3
 *
 * 功能：
 * - 存储/读取 API 配置（localStorage）
 * - 旧配置自动迁移
 * - Provider 独立连接测试
 * - 模型到 Provider 的自动路由
 * - Provider 级别预设保存与切换
 */

import {
  APIConfig,
  DEFAULT_CONFIG,
  EngineModelConfig,
  ProviderConfig,
  ProviderId,
  getEffectiveBaseUrl,
  getOpenAIChatCompletionsUrl,
  getProviderForModel,
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

export interface ApiPreset {
  id: string;
  name: string;
  provider: ProviderId;
  apiKey: string;
  baseUrl: string;
  mode: ProviderConfig['mode'];
  apiFormat: ProviderConfig['apiFormat'];
}

class ConfigService {
  // ============================================================
  // 核心读写
  // ============================================================

  getConfig(): APIConfig {
    try {
      const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (!stored) {
        return DEFAULT_CONFIG;
      }

      const parsed = JSON.parse(stored);

      // V1: 旧字段
      if (parsed.geminiApiKey !== undefined && !parsed.gemini) {
        const migrated = this.migrateV1Config(parsed);
        this.saveConfig(migrated);
        return migrated;
      }

      return this.normalizeConfig(parsed);
    } catch (error) {
      console.error('Failed to load config:', error);
      return DEFAULT_CONFIG;
    }
  }

  saveConfig(config: APIConfig): void {
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(this.normalizeConfig(config)));
    } catch (error) {
      console.error('Failed to save config:', error);
      throw error;
    }
  }

  private normalizeConfig(config: Partial<APIConfig>): APIConfig {
    return {
      gemini: {
        ...DEFAULT_CONFIG.gemini,
        ...(config.gemini || {}),
        apiFormat: 'google',
      },
      claude: {
        ...DEFAULT_CONFIG.claude,
        ...(config.claude || {}),
        apiFormat: 'anthropic',
      },
      openai: {
        ...DEFAULT_CONFIG.openai,
        ...(config.openai || {}),
        apiFormat: 'openai',
      },
      engines: {
        ...DEFAULT_CONFIG.engines,
        ...(config.engines || {}),
      },
    };
  }

  // ============================================================
  // V1 → V3 迁移
  // ============================================================

  private migrateV1Config(v1: any): APIConfig {
    console.log('[ConfigService] Migrating legacy config to V3...');
    return {
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
        baseUrl: v1.openaiBaseUrl || DEFAULT_CONFIG.openai.baseUrl,
      },
      engines: {
        ...DEFAULT_CONFIG.engines,
        ...(v1.engines || {}),
      },
    };
  }

  // ============================================================
  // Provider 级别的便捷方法
  // ============================================================

  getProviderConfig(provider: ProviderId): ProviderConfig {
    return this.getConfig()[provider];
  }

  updateProviderConfig(provider: ProviderId, updates: Partial<ProviderConfig>): void {
    const config = this.getConfig();
    config[provider] = { ...config[provider], ...updates };
    this.saveConfig(config);
  }

  // ============================================================
  // 兼容旧代码的快捷方法
  // ============================================================

  getApiKey(): string {
    return this.getConfig().gemini.apiKey;
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
  // 引擎模型
  // ============================================================

  getEngineModel(engineId: string): string {
    const config = this.getConfig();
    return config.engines[engineId as keyof EngineModelConfig] || '';
  }

  setEngineModel(engineId: string, model: string): void {
    const config = this.getConfig();
    config.engines[engineId as keyof EngineModelConfig] = model;
    this.saveConfig(config);
  }

  getEngineConfigs(): EngineModelConfig {
    return this.getConfig().engines;
  }

  getProviderConfigForEngine(engineId: string): {
    provider: ProviderId;
    config: ProviderConfig;
    model: string;
    baseUrl: string;
  } {
    const model = this.getEngineModel(engineId);
    const provider = getProviderForModel(model);
    const config = this.getProviderConfig(provider);
    return {
      provider,
      config,
      model,
      baseUrl: getEffectiveBaseUrl(provider, config),
    };
  }

  // ============================================================
  // 连接测试
  // ============================================================

  async testProviderConnection(provider: ProviderId): Promise<{
    success: boolean;
    message: string;
  }> {
    const config = this.getConfig();
    const providerConfig = config[provider];

    if (!providerConfig.apiKey) {
      return { success: false, message: 'API Key 未填写' };
    }

    const baseUrl = getEffectiveBaseUrl(provider, providerConfig);

    if (provider !== 'gemini' && !baseUrl) {
      return { success: false, message: '该 Provider 需要 Base URL' };
    }

    if (providerConfig.mode === 'proxy' && !providerConfig.baseUrl) {
      return { success: false, message: '代理模式下必须填写 Base URL' };
    }

    try {
      if (provider === 'gemini' && providerConfig.mode === 'official') {
        return await this.testGeminiOfficial(providerConfig.apiKey);
      }

      if (provider === 'claude') {
        return await this.testClaude(providerConfig.apiKey, baseUrl);
      }

      if (provider === 'openai') {
        return await this.testOpenAI(providerConfig.apiKey, baseUrl);
      }

      return await this.testOpenAICompatible(provider, providerConfig.apiKey, baseUrl);
    } catch (error: any) {
      return { success: false, message: `网络错误: ${error?.message || '无法连接'}` };
    }
  }

  private async testGeminiOfficial(apiKey: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${apiKey}`,
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
    return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 120)}` };
  }

  private async testClaude(apiKey: string, baseUrl: string): Promise<{ success: boolean; message: string }> {
    const cleanUrl = baseUrl.trim().replace(/\/+$/, '');
    const fetchUrl = `${cleanUrl}/v1/messages`;
    const response = await proxyFetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Claude API 连接成功' };
    }
    return this.formatConnectionError(response, fetchUrl);
  }

  private async testOpenAI(apiKey: string, baseUrl: string): Promise<{ success: boolean; message: string }> {
    const fetchUrl = getOpenAIChatCompletionsUrl(baseUrl);
    const response = await proxyFetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-5.5',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5,
        stream: false,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'OpenAI API 连接成功' };
    }
    return this.formatConnectionError(response, fetchUrl);
  }

  private async testOpenAICompatible(
    provider: ProviderId,
    apiKey: string,
    baseUrl: string
  ): Promise<{ success: boolean; message: string }> {
    const fetchUrl = getOpenAIChatCompletionsUrl(baseUrl);
    const response = await proxyFetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: provider === 'gemini' ? 'gemini-3.1-flash-lite-preview' : 'gpt-5.5',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5,
        stream: false,
      }),
    });

    if (response.ok) {
      return { success: true, message: `${provider} 代理连接成功` };
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
    return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 120)}` };
  }

  // ============================================================
  // 重置 / 导入 / 导出
  // ============================================================

  resetToDefault(): void {
    this.saveConfig(DEFAULT_CONFIG);
  }

  exportConfig(): string {
    return JSON.stringify(this.getConfig(), null, 2);
  }

  importConfig(jsonString: string): boolean {
    try {
      const config = JSON.parse(jsonString);

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
  // 预设管理
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
        mode: preset.mode || (preset.provider === 'openai' ? 'official' : 'proxy'),
        apiFormat: preset.apiFormat || (preset.provider === 'openai' ? 'openai' : 'anthropic'),
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
}

export const configService = new ConfigService();
