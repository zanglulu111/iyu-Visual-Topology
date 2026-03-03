// hooks/useConfig.ts
import { useState, useEffect } from 'react';
import { configService } from '../services/configService';
import { APIConfig } from '../types/config';

/**
 * 配置 Hook
 * 在任何组件中使用配置，并自动同步更新
 */
export function useConfig() {
  const [config, setConfig] = useState<APIConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初始化加载配置
  useEffect(() => {
    const loadConfig = () => {
      try {
        const loaded = configService.getConfig();
        setConfig(loaded);
      } catch (error) {
        console.error('Failed to load config:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadConfig();

    // 监听 storage 事件（其他标签页修改配置时）
    const handleStorageChange = () => {
      loadConfig();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  /**
   * 获取指定引擎的模型
   */
  const getEngineModel = (engineId: string): string => {
    return configService.getEngineModel(engineId);
  };

  /**
   * 获取 API KEY
   */
  const getApiKey = (): string => {
    return configService.getApiKey();
  };

  /**
   * 获取特定引擎的完整模型和 API KEY
   * 用于调用 Gemini API
   */
  const getEngineCredentials = (engineId: string) => {
    return {
      apiKey: getApiKey(),
      model: getEngineModel(engineId),
    };
  };

  /**
   * 更新配置
   */
  const updateEngineModel = (engineId: string, model: string) => {
    configService.setEngineModel(engineId, model);
    const newConfig = configService.getConfig();
    setConfig(newConfig);
  };

  return {
    config,
    isLoading,
    getEngineModel,
    getApiKey,
    getEngineCredentials,
    updateEngineModel,
  };
}
