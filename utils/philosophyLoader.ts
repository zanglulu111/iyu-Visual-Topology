/**
 * 哲学辞典数据加载工具
 * 支持三层数据加载策略
 */

// Layer 1: 索引数据（直接导入，打包在前端）
import hegelIndex from '../data/codex/philosophy/hegel/index.json';

// 类型定义
export interface PhilosophyConcept {
  id: string;
  name: string;
  enName: string;
  category: string;
  shortDef: string;
}

export interface PhilosophySummary extends PhilosophyConcept {
  summary: string;
}

export interface PhilosophyDetail {
  definition: string;
  analogy: string;
  application: string;
}

// 缓存管理
class PhilosophyCache {
  private summariesCache: Map<string, PhilosophySummary[]> = new Map();
  private detailsCache: Map<string, PhilosophyDetail> = new Map();

  // 从 localStorage 加载缓存
  loadFromStorage() {
    try {
      const summariesData = localStorage.getItem('philosophy_summaries');
      if (summariesData) {
        const parsed = JSON.parse(summariesData);
        Object.entries(parsed).forEach(([key, value]) => {
          this.summariesCache.set(key, value as PhilosophySummary[]);
        });
      }

      const detailsData = localStorage.getItem('philosophy_details');
      if (detailsData) {
        const parsed = JSON.parse(detailsData);
        Object.entries(parsed).forEach(([key, value]) => {
          this.detailsCache.set(key, value as PhilosophyDetail);
        });
      }
    } catch (error) {
      console.warn('Failed to load philosophy cache from localStorage:', error);
    }
  }

  // 保存到 localStorage
  saveToStorage() {
    try {
      const summariesObj = Object.fromEntries(this.summariesCache);
      localStorage.setItem('philosophy_summaries', JSON.stringify(summariesObj));

      const detailsObj = Object.fromEntries(this.detailsCache);
      localStorage.setItem('philosophy_details', JSON.stringify(detailsObj));
    } catch (error) {
      console.warn('Failed to save philosophy cache to localStorage:', error);
    }
  }

  getSummaries(philosopher: string): PhilosophySummary[] | null {
    return this.summariesCache.get(philosopher) || null;
  }

  setSummaries(philosopher: string, summaries: PhilosophySummary[]) {
    this.summariesCache.set(philosopher, summaries);
    this.saveToStorage();
  }

  getDetail(conceptId: string): PhilosophyDetail | null {
    return this.detailsCache.get(conceptId) || null;
  }

  setDetail(conceptId: string, detail: PhilosophyDetail) {
    this.detailsCache.set(conceptId, detail);
    this.saveToStorage();
  }

  clear() {
    this.summariesCache.clear();
    this.detailsCache.clear();
    localStorage.removeItem('philosophy_summaries');
    localStorage.removeItem('philosophy_details');
  }
}

// 全局缓存实例
const cache = new PhilosophyCache();
cache.loadFromStorage();

/**
 * 获取索引数据（Layer 1）
 * 直接从打包的 JSON 文件读取，无需网络请求
 */
export function getPhilosophyIndex(philosopher: string): PhilosophyConcept[] {
  switch (philosopher.toLowerCase()) {
    case 'hegel':
      return hegelIndex as PhilosophyConcept[];
    // 未来可以添加其他哲学家
    // case 'lacan':
    //   return lacanIndex;
    default:
      return [];
  }
}

/**
 * 获取摘要数据（Layer 2）
 * 首次从服务器加载，之后从缓存读取
 */
export async function getPhilosophySummaries(
  philosopher: string
): Promise<PhilosophySummary[]> {
  // 1. 检查缓存
  const cached = cache.getSummaries(philosopher);
  if (cached) {
    return cached;
  }

  // 2. 从服务器加载
  try {
    const response = await fetch(`/data/codex/${philosopher}/summaries.json`);
    if (!response.ok) {
      throw new Error(`Failed to load summaries: ${response.statusText}`);
    }

    const summaries: PhilosophySummary[] = await response.json();

    // 3. 缓存到内存和 localStorage
    cache.setSummaries(philosopher, summaries);

    return summaries;
  } catch (error) {
    console.error(`Failed to load summaries for ${philosopher}:`, error);
    // 降级：返回索引数据
    return getPhilosophyIndex(philosopher) as PhilosophySummary[];
  }
}

/**
 * 获取详细内容（Layer 3）
 * 按需加载，缓存到 localStorage
 */
export async function getPhilosophyDetail(
  philosopher: string,
  conceptId: string
): Promise<PhilosophyDetail | null> {
  // 1. 检查缓存
  const cached = cache.getDetail(conceptId);
  if (cached) {
    return cached;
  }

  // 2. 从服务器加载
  try {
    const response = await fetch(
      `/data/codex/${philosopher}/details/${conceptId}.json`
    );

    if (!response.ok) {
      throw new Error(`Failed to load detail: ${response.statusText}`);
    }

    const detail: PhilosophyDetail = await response.json();

    // 3. 缓存到内存和 localStorage
    cache.setDetail(conceptId, detail);

    return detail;
  } catch (error) {
    console.error(`Failed to load detail for ${conceptId}:`, error);
    return null;
  }
}

/**
 * 预加载热门词条
 * 在空闲时间预加载常用词条，提升用户体验
 */
export function preloadPopularConcepts(
  philosopher: string,
  conceptIds: string[]
) {
  if ('requestIdleCallback' in window) {
    conceptIds.forEach((conceptId, index) => {
      requestIdleCallback(
        () => {
          getPhilosophyDetail(philosopher, conceptId);
        },
        { timeout: 2000 + index * 500 }
      );
    });
  } else {
    // 降级：使用 setTimeout
    conceptIds.forEach((conceptId, index) => {
      setTimeout(() => {
        getPhilosophyDetail(philosopher, conceptId);
      }, 2000 + index * 500);
    });
  }
}

/**
 * 清除所有缓存
 */
export function clearPhilosophyCache() {
  cache.clear();
}

/**
 * 获取缓存统计信息
 */
export function getCacheStats() {
  const summariesCount = cache['summariesCache'].size;
  const detailsCount = cache['detailsCache'].size;

  return {
    summariesCount,
    detailsCount,
    totalCached: summariesCount + detailsCount
  };
}

// 导出缓存实例（用于调试）
export { cache };
