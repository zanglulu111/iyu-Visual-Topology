// types/config.ts
/**
 * 简化的配置类型
 * 只包含两部分：API KEY + 6个引擎的模型配置
 */

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

export interface APIConfig {
  // API KEY
  apiKey: string;

  // 6个引擎的模型配置
  engines: EngineModelConfig;
}

// 默认配置
export const DEFAULT_CONFIG: APIConfig = {
  apiKey: '',
  engines: {
    coreEngine: 'gemini-3.1-pro-preview',
    metonymyEngine: 'gemini-3.1-pro-preview',
    psychoAnalysis: 'gemini-3.1-pro-preview',
    visualBible: 'gemini-3.1-pro-preview',
    visualSeed: 'gemini-3-pro-image-preview',
    imageGen: 'gemini-3-pro-image-preview',
  }
};

// 可用的模型列表
export const AVAILABLE_MODELS = {
  text: [
    'gemini-3.1-pro-preview',
    'gemini-3-pro-preview',
    'gemini-3-flash-preview',
    'gemini-3-pro-image-preview',
    'gemini-3-flash-image-preview',
  ],
  image: [
    'gemini-3-pro-image-preview',
    'gemini-3-flash-image-preview',
  ]
};

// 引擎配置元信息
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
