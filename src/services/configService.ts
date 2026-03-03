// services/configService.ts
/**
 * 配置管理服务
 * 处理 API KEY 和引擎模型配置的存储和读取
 */

import { APIConfig, DEFAULT_CONFIG, EngineModelConfig } from '../types/config';

const CONFIG_STORAGE_KEY = 'visionary_api_config';

class ConfigService {
  /**
   * 获取完整配置
   */
  getConfig(): APIConfig {
    try {
      const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (!stored) {
        return DEFAULT_CONFIG;
      }
      const parsed = JSON.parse(stored);
      // Merge with defaults to ensure all keys exist
      return {
        ...DEFAULT_CONFIG,
        ...parsed,
        engines: {
          ...DEFAULT_CONFIG.engines,
          ...(parsed.engines || {})
        }
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

  /**
   * 获取 API KEY
   */
  getApiKey(): string {
    return this.getConfig().apiKey;
  }

  /**
   * 设置 API KEY
   */
  setApiKey(apiKey: string): void {
    const config = this.getConfig();
    config.apiKey = apiKey;
    this.saveConfig(config);
  }

  /**
   * 获取特定引擎的模型
   */
  getEngineModel(engineId: string): string {
    const config = this.getConfig();
    return config.engines[engineId as keyof EngineModelConfig] || '';
  }

  /**
   * 设置特定引擎的模型
   */
  setEngineModel(engineId: string, model: string): void {
    const config = this.getConfig();
    config.engines[engineId as keyof EngineModelConfig] = model;
    this.saveConfig(config);
  }

  /**
   * 获取所有引擎配置
   */
  getEngineConfigs(): EngineModelConfig {
    return this.getConfig().engines;
  }

  /**
   * 设置所有引擎配置
   */
  setEngineConfigs(engines: EngineModelConfig): void {
    const config = this.getConfig();
    config.engines = engines;
    this.saveConfig(config);
  }

  /**
   * 重置为默认配置
   */
  resetToDefault(): void {
    this.saveConfig(DEFAULT_CONFIG);
  }

  /**
   * 测试 API 连接
   */
  async testConnection(apiKey: string): Promise<boolean> {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: 'test'
            }]
          }]
        })
      });
      return response.ok;
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }

  /**
   * 导出配置为 JSON
   */
  exportConfig(): string {
    return JSON.stringify(this.getConfig(), null, 2);
  }

  /**
   * 从 JSON 导入配置
   */
  importConfig(jsonString: string): boolean {
    try {
      const config = JSON.parse(jsonString);
      // 验证配置结构
      if (!config.apiKey || !config.engines) {
        throw new Error('Invalid config structure');
      }
      this.saveConfig(config);
      return true;
    } catch (error) {
      console.error('Failed to import config:', error);
      return false;
    }
  }
}

export const configService = new ConfigService();
