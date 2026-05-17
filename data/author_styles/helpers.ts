import { StyleCategory, StyleItem } from '../../types';

type Transform = NonNullable<StyleItem['transform']>;

export type AuthorStyleSeed = Omit<StyleItem, 'role' | 'preserve' | 'transform' | 'mAxisLens' | 'avoid'> & {
  styleTitle: string;
  role?: string;
  preserve?: string[];
  transform?: Partial<Transform>;
  mAxisLens?: Record<string, string>;
  avoid?: string[];
};

export interface AuthorCategorySeed {
  id: string;
  name: string;
  defaults?: {
    transform?: Partial<Transform>;
    mAxisLens?: Record<string, string>;
    avoid?: string[];
  };
  items: AuthorStyleSeed[];
}

const DEFAULT_TRANSFORM: Transform = {
  time: '保持 SOURCE 事件因果清楚，只按作者机制调整延宕、压缩、回环或并置方式。',
  narrator: '根据作者机制调整叙述者距离、可靠性、冷暖温度与信息释放方式。',
  psychology: '把人物心理转译为动作、沉默、物件关系、身体反应、对白间隙或环境压力。',
  sceneExpansion: '围绕 SOURCE 的关键节点增加可拍摄的空间、材质、光线、声音和动作细节。',
  conflictRendering: '保持原冲突功能，将冲突染成该作者最擅长的压力形式，但不替换事件本身。',
  syntax: '句法跟随作者机制，但严禁复制既有作品台词、桥段、招牌物件或专有意象。',
  symbolism: '允许建立重复物、颜色、声音、空间动作或身体姿态作为隐性回环，不直说哲学术语。',
  dialogue: '对白服务于人物关系和压力变化，避免解释设定、总结意义或替角色说出主题。',
  visualAssets: '视觉资产继承作者机制的空间、材质、光影、色彩、构图与情绪温度。'
};

const DEFAULT_PRESERVE = [
  '保留已选草稿的人物关系、关键事件、因果方向和结局方向。',
  '保留 M0-M7A/M7B 的精神弧线、M7A 意义裁决与 M7B 末帧余震；不得把 M7B 扩写成后日谈。',
  '保留世界法则、SUR 表层设定、体量结构与 SOURCE 中人物的社会位置。'
];

const defaultAvoid = (styleTitle: string) => [
  '不要生成新故事方案。',
  '不要改变原大纲主事件、人物职业、关系位置或结局方向。',
  `不要把「${styleTitle}」理解为表层符号堆砌；必须作用到时间、视角、心理显影、场景组织和语言节奏。`,
  '不要直接复刻代表作桥段、台词、专有物件或标志性场景。'
];

const defaultLens = (styleTitle: string): Record<string, string> => ({
  M1: `保留已选 M1 的缺失本质，只把主体显影为「${styleTitle}」机制下最容易暴露裂口的人。`,
  M2: `保留已选 M2 的真实穿刺，只把遭遇包装成「${styleTitle}」偏好的事件入口、感官冲击或认知断裂。`,
  M4: `保留已选 M4 的阻断逻辑，只把阻断的可见外壳染成「${styleTitle}」擅长的秩序、关系、空间或命运压力。`,
  M5: `保留已选 M5 的行动驱力，只改变行动的姿态、节奏、重复方式和身体质感。`,
  M7B: `保留已选 M7B 的末帧余震，只让它贴在最后一个动作、物件、声音、目光、姿势或身体反应上带有「${styleTitle}」的感官残响；不得另起尾声。`
});

const mergeTransform = (
  categoryTransform?: Partial<Transform>,
  itemTransform?: Partial<Transform>
): Transform => ({
  ...DEFAULT_TRANSFORM,
  ...(categoryTransform || {}),
  ...(itemTransform || {})
});

export const defineAuthorCategory = (seed: AuthorCategorySeed): StyleCategory => ({
  id: seed.id,
  name: seed.name,
  items: seed.items.map(item => {
    const transform = mergeTransform(seed.defaults?.transform, item.transform);
    const styleTitle = item.styleTitle || item.description || item.name;
    const coreRewriteLogic = item.coreRewriteLogic
      || `保留 SOURCE 骨架，将冲突、心理、空间与语言渲染为「${styleTitle}」；只改变叙述方式、时间组织、视角距离、场景密度、心理显影与意象系统。`;

    return {
      ...item,
      description: item.description || styleTitle,
      role: item.role || '作者性渲染器',
      coreRewriteLogic,
      preserve: item.preserve || DEFAULT_PRESERVE,
      transform,
      mAxisLens: item.mAxisLens || seed.defaults?.mAxisLens || defaultLens(styleTitle),
      avoid: item.avoid || [...defaultAvoid(styleTitle), ...(seed.defaults?.avoid || [])]
    };
  })
});
