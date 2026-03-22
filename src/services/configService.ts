// services/configService.ts
/**
 * 配置管理服务 V2
 * 
 * 功能：
 * - 存储/读取 API 配置（localStorage）
 * - 旧配置自动迁移
 * - 连接测试（分 Provider 独立测试）
 * - 导入/导出配置
 */

import { APIConfig, DEFAULT_CONFIG, EngineModelConfig, ProviderConfig, getProviderForModel } from '../types/config';

const CONFIG_STORAGE_KEY = 'visionary_api_config';

class ConfigService {

  // ============================================================
  // 核心读写
  // ============================================================

  /**
   * 获取完整配置，自动处理旧格式迁移
   */
  getConfig(): APIConfig {
    try {
      const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (!stored) {
        return DEFAULT_CONFIG;
      }
      const parsed = JSON.parse(stored);

      // 检测是否是旧格式（V1: 有 geminiApiKey 字段而没有 gemini 对象）
      if (parsed.geminiApiKey !== undefined && !parsed.gemini) {
        const migrated = this.migrateV1Config(parsed);
        this.saveConfig(migrated);
        return migrated;
      }

      // V2 格式：merge with defaults
      return {
        gemini: {
          ...DEFAULT_CONFIG.gemini,
          ...(parsed.gemini || {}),
        },
        claude: {
          ...DEFAULT_CONFIG.claude,
          ...(parsed.claude || {}),
        },
        engines: {
          ...DEFAULT_CONFIG.engines,
          ...(parsed.engines || {}),
        },
      };
    } catch (error) {
      console.error('Failed to load config:', error);
      return DEFAULT_CONFIG;
    }
  }

  /**
   * 保存完整配置
   */
  saveConfig(config: APIConfig): void {
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch (error) {
      console.error('Failed to save config:', error);
      throw error;
    }
  }

  // ============================================================
  // V1 → V2 迁移
  // ============================================================

  private migrateV1Config(v1: any): APIConfig {
    console.log('[ConfigService] Migrating V1 config to V2...');
    return {
      gemini: {
        apiKey: v1.geminiApiKey || v1.apiKey || '',
        mode: v1.baseUrl ? 'proxy' : 'official',
        baseUrl: v1.baseUrl || '',
      },
      claude: {
        apiKey: v1.claudeApiKey || '',
        mode: 'proxy',
        baseUrl: v1.baseUrl || '',
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

  /**
   * 获取指定 Provider 的配置
   */
  getProviderConfig(provider: 'gemini' | 'claude'): ProviderConfig {
    return this.getConfig()[provider];
  }

  /**
   * 更新指定 Provider 的配置
   */
  updateProviderConfig(provider: 'gemini' | 'claude', updates: Partial<ProviderConfig>): void {
    const config = this.getConfig();
    config[provider] = { ...config[provider], ...updates };
    this.saveConfig(config);
  }

  // ============================================================
  // 兼容旧代码的快捷方法
  // ============================================================

  /** 获取 Gemini API Key */
  getApiKey(): string {
    return this.getConfig().gemini.apiKey;
  }

  /** 设置 Gemini API Key */
  setApiKey(apiKey: string): void {
    this.updateProviderConfig('gemini', { apiKey });
  }

  /** 获取 Claude API Key */
  getClaudeApiKey(): string {
    return this.getConfig().claude.apiKey;
  }

  /** 设置 Claude API Key */
  setClaudeApiKey(apiKey: string): void {
    this.updateProviderConfig('claude', { apiKey });
  }

  /** 获取 Gemini 的 Base URL */
  getBaseUrl(): string {
    return this.getConfig().gemini.baseUrl;
  }

  /** 获取 Claude 的 Base URL */
  getClaudeBaseUrl(): string {
    return this.getConfig().claude.baseUrl;
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

  /**
   * 获取某个引擎所用模型对应的 Provider 配置
   * 这是路由的核心：根据模型名找到正确的 API Key 和 Base URL
   */
  getProviderConfigForEngine(engineId: string): { provider: 'gemini' | 'claude'; config: ProviderConfig } {
    const model = this.getEngineModel(engineId);
    const provider = getProviderForModel(model);
    return {
      provider,
      config: this.getProviderConfig(provider),
    };
  }

  // ============================================================
  // 连接测试
  // ============================================================

  /**
   * 测试指定 Provider 的连接
   */
  async testProviderConnection(provider: 'gemini' | 'claude'): Promise<{
    success: boolean;
    message: string;
  }> {
    const config = this.getConfig();
    const providerConfig = config[provider];

    // 检查必填项
    if (!providerConfig.apiKey) {
      return { success: false, message: 'API Key 未填写' };
    }

    if (provider === 'claude' && !providerConfig.baseUrl) {
      return { success: false, message: 'Claude 必须配置代理地址才能使用' };
    }

    if (providerConfig.mode === 'proxy' && !providerConfig.baseUrl) {
      return { success: false, message: '代理模式下必须填写代理地址' };
    }

    try {
      if (provider === 'gemini' && providerConfig.mode === 'official') {
        // Gemini 官方 API 测试
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${providerConfig.apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: 'Hi' }] }]
            })
          }
        );
        if (response.ok) {
          return { success: true, message: 'Gemini 官方 API 连接成功 ✓' };
        }
        const errText = await response.text().catch(() => '');
        if (response.status === 400) {
          return { success: true, message: 'API Key 有效（模型可能需确认）✓' };
        }
        return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 100)}` };
      } else {
        // 代理 API 测试
        const cleanUrl = providerConfig.baseUrl.trim().replace(/\/+$/, '');

        // Claude + Anthropic 原生格式
        if (provider === 'claude' && (providerConfig.apiFormat || 'anthropic') === 'anthropic') {
          const fetchUrl = `${cleanUrl}/v1/messages`;
          const response = await fetch(fetchUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': providerConfig.apiKey,
              'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
              model: 'claude-sonnet-4-6',
              messages: [{ role: 'user', content: 'Hi' }],
              max_tokens: 5,
            })
          });

          if (response.ok) {
            return { success: true, message: 'Claude 代理连接成功 (Anthropic 格式) ✓' };
          }
          const errText = await response.text().catch(() => '');
          // 检测 HTML 响应
          if (errText.trim().startsWith('<') || errText.includes('<!DOCTYPE')) {
            return { success: false, message: `代理地址错误：返回了 HTML 网页。请检查 Base URL 是否正确。\n当前测试地址: ${fetchUrl}` };
          }
          return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 100)}` };
        } else {
          // OpenAI-compatible 格式 (用于 Gemini 代理或 Claude OpenAI 模式)
          const testModel = provider === 'gemini' ? 'gemini-3.1-flash-lite-preview' : 'claude-sonnet-4-6';
          const fetchUrl = `${cleanUrl}/chat/completions`;

          const response = await fetch(fetchUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${providerConfig.apiKey}`,
            },
            body: JSON.stringify({
              model: testModel,
              messages: [{ role: 'user', content: 'Hi' }],
              max_tokens: 5,
            })
          });

          if (response.ok) {
            return { success: true, message: `${provider === 'gemini' ? 'Gemini' : 'Claude'} 代理连接成功 (OpenAI 格式) ✓` };
          }
          const errText = await response.text().catch(() => '');
          if (errText.trim().startsWith('<') || errText.includes('<!DOCTYPE')) {
            return { success: false, message: `代理地址错误：返回了 HTML 网页。请检查 Base URL 是否正确。\n当前测试地址: ${fetchUrl}` };
          }
          return { success: false, message: `错误 ${response.status}: ${errText.substring(0, 100)}` };
        }
      }
    } catch (error: any) {
      return { success: false, message: `网络错误: ${error?.message || '无法连接'}` };
    }
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
      // V2 格式验证
      if (config.gemini && config.claude && config.engines) {
        this.saveConfig(config);
        return true;
      }
      // 尝试 V1 格式
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
}

export const configService = new ConfigService();
