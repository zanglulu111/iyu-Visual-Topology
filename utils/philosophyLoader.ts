/**
 * 哲学辞典数据加载工具
 * 支持三层数据加载策略
 */

// Layer 1: 索引数据（直接导入，打包在前端）
import hegelIndex from '../data/codex/philosophy/hegel/index.json';
import { firebaseDatabase } from '../services/firebaseDatabase';

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

const CACHE_VERSION = 'v26_05_17_mist_theory_dictionary_title_alignment'; // Increment this whenever data structure changes significantly

// 缓存管理
class PhilosophyCache {
  private summariesCache: Map<string, PhilosophySummary[]> = new Map();
  private detailsCache: Map<string, PhilosophyDetail> = new Map();

  // 从 localStorage 加载缓存
  loadFromStorage() {
    try {
      const summariesData = localStorage.getItem(`philosophy_summaries_${CACHE_VERSION}`);
      if (summariesData) {
        const parsed = JSON.parse(summariesData);
        Object.entries(parsed).forEach(([key, value]) => {
          this.summariesCache.set(key, value as PhilosophySummary[]);
        });
      }

      const detailsData = localStorage.getItem(`philosophy_details_${CACHE_VERSION}`);
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
      localStorage.setItem(`philosophy_summaries_${CACHE_VERSION}`, JSON.stringify(summariesObj));

      const detailsObj = Object.fromEntries(this.detailsCache);
      localStorage.setItem(`philosophy_details_${CACHE_VERSION}`, JSON.stringify(detailsObj));
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
    localStorage.removeItem(`philosophy_summaries_${CACHE_VERSION}`);
    localStorage.removeItem(`philosophy_details_${CACHE_VERSION}`);
  }
}

// 全局缓存实例
const cache = new PhilosophyCache();
cache.loadFromStorage();

// Layer 1: 索引数据（直接导入，打包在前端）
import { MIST_INDEX, HEGEL_INDEX, MARX_INDEX, LACAN_INDEX, ZIZEK_INDEX } from '../data/codex/philosophy_refined';

/**
 * 获取索引数据（Layer 1）
 * 直接从打包的 TS 文件读取，确保本地万无一失
 */
export function getPhilosophyIndex(philosopher: string): PhilosophyConcept[] {
  try {
    switch (philosopher.toLowerCase()) {
      case 'mist':
        return MIST_INDEX.flatMap(cat => cat.concepts) as unknown as PhilosophyConcept[];
      case 'hegel':
        return HEGEL_INDEX.flatMap(cat => cat.concepts) as unknown as PhilosophyConcept[];
      case 'marx':
        return MARX_INDEX.flatMap(cat => cat.concepts) as unknown as PhilosophyConcept[];
      case 'lacan':
        return LACAN_INDEX.flatMap(cat => cat.concepts) as unknown as PhilosophyConcept[];
      case 'zizek':
        return ZIZEK_INDEX.flatMap(cat => cat.concepts) as unknown as PhilosophyConcept[];
      default:
        return [];
    }
  } catch (err) {
    console.error("Critical index loading error, site might be unstable:", err);
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
 * 升级版：优先从 Firebase Firestore 云端获取重构后的细腻词条。
 * 策略：缓存优先 -> 云端获取 -> 本地 fetch 兜底。
 */
export async function getPhilosophyDetail(
  philosopher: string,
  conceptId: string
): Promise<PhilosophyDetail | null> {
  // 1. 本地硬盘缓存秒开 (最高优先级)
  const cached = cache.getDetail(conceptId);
  // 加强防御：如果缓存内容显然不对 (例如只有一个字符 '#')，则强制重新拉取
  // 注意：本地 JSON 文件没有 id 字段，所以不检查 id 匹配
  if (cached && cached.definition && cached.definition.length > 20) {
    return cached;
  }

  // 2. 从 Firebase Firestore 云端获取重构后的细腻词条 (本地模式暂时屏蔽，确保本地修改立即生效)
  /*
  try {
    const entryData = await firebaseDatabase.getEntryContent(conceptId);
    
    // 验证 Firebase 数据是否包含实质内容（不只是占位符如 '#'）
    if (entryData && entryData.detailed && 
        entryData.detailed.definition && entryData.detailed.definition.length > 20) {
      const detail: any = {
        id: conceptId, 
        definition: entryData.detailed.definition,
        analogy: entryData.detailed.analogy,
        application: entryData.detailed.application
      };
      cache.setDetail(conceptId, detail);
      return detail;
    }
  } catch (err) {
    console.warn("[Firebase] Skipping Cloud Fetch...", err);
  }
  */

  // 3. 原有逻辑兜底
  try {
    const response = await fetch(`/data/codex/${philosopher}/details/${conceptId}.json`);
    if (response.ok) {
      const detail: PhilosophyDetail = await response.json();
      cache.setDetail(conceptId, detail);
      return detail;
    }
    return null;
  } catch (error) {
    console.error(`[Codex] Full fail for ${conceptId}`, error);
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
