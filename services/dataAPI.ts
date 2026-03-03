// services/dataAPI.ts
/**
 * 数据API客户端 - 用于获取系统数据
 * 此服务可以无需认证使用（公开数据）
 * 但通过缓存优化性能
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

interface CacheEntry<T> {
    data: T;
    timestamp: number;
}

class DataAPI {
    private cache = new Map<string, CacheEntry<any>>();
    private cacheDuration = 30 * 60 * 1000; // 30分钟缓存

    /**
     * 获取指定分类的所有数据
     * @param category 分类名称 (如: 'commercial_data', 'animation_genres')
     * @param skipCache 是否跳过缓存
     */
    async getData<T = any>(category: string, skipCache = false): Promise<T> {
        // 检查缓存
        if (!skipCache && this.cache.has(category)) {
            const cached = this.cache.get(category);
            if (Date.now() - cached!.timestamp < this.cacheDuration) {
                return cached!.data;
            }
        }

        // 获取新数据
        const response = await fetch(`${API_URL}/data/${category}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();

        // 缓存数据
        this.cache.set(category, {
            data,
            timestamp: Date.now()
        });

        return data;
    }

    /**
     * 获取可用的数据分类列表
     */
    async getCategories(): Promise<string[]> {
        const response = await fetch(`${API_URL}/data/categories`);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const { categories } = await response.json();
        return categories;
    }

    /**
     * 获取特定数据项
     * @param category 分类
     * @param itemId 项目ID
     */
    async getItem<T = any>(category: string, itemId: string): Promise<T | null> {
        const response = await fetch(`${API_URL}/data/${category}/${itemId}`);
        if (response.status === 404) {
            return null;
        }
        if (!response.ok) {
            throw new Error(`Failed to fetch item: ${response.statusText}`);
        }
        return response.json();
    }

    /**
     * 搜索数据
     * @param category 分类
     * @param query 搜索查询
     */
    async search<T = any>(category: string, query: string): Promise<T[]> {
        const response = await fetch(
            `${API_URL}/data/${category}/search?q=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
            throw new Error(`Failed to search: ${response.statusText}`);
        }
        return response.json();
    }

    /**
     * 清除特定分类的缓存
     */
    clearCache(category?: string): void {
        if (category) {
            this.cache.delete(category);
        } else {
            this.cache.clear();
        }
    }

    /**
     * 获取缓存统计信息
     */
    getCacheStats(): { size: number; categories: string[] } {
        return {
            size: this.cache.size,
            categories: Array.from(this.cache.keys())
        };
    }
}

export const dataAPI = new DataAPI();

/**
 * 便捷方法 - 直接导入使用
 */
export const useData = {
    // 常见的分类常量
    COMMERCIAL: 'commercial_data',
    NARRATIVE: 'narrative_engine',
    ANIMATION_GENRES: 'animation_genres',
    MASTER_PRESETS: 'master_presets',
    AESTHETIC: 'aesthetic_data',

    // 获取分类数据
    async commercial() {
        return dataAPI.getData(this.COMMERCIAL);
    },

    async narrative() {
        return dataAPI.getData(this.NARRATIVE);
    },

    async animationGenres() {
        return dataAPI.getData(this.ANIMATION_GENRES);
    },

    async masterPresets() {
        return dataAPI.getData(this.MASTER_PRESETS);
    },

    async aesthetic() {
        return dataAPI.getData(this.AESTHETIC);
    }
};
