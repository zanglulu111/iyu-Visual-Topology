// backend/services/dataService.ts
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');

/**
 * Data Service - 管理所有数据文件
 * 支持读取、缓存、更新
 */

class DataService {
    private cache = new Map<string, any>();
    private lastModified = new Map<string, number>();

    /**
     * 获取指定分类的数据
     * @param category 数据分类名称 (不含.ts扩展)
     * @param useCache 是否使用缓存
     */
    async getData(category: string, useCache = true) {
        try {
            // 验证分类名称安全性
            if (!this.isValidCategoryName(category)) {
                throw new Error('Invalid category name');
            }

            // 检查缓存
            if (useCache && this.cache.has(category)) {
                return this.cache.get(category);
            }

            // 读取文件
            const filePath = path.join(DATA_DIR, `${category}.ts`);
            const fileContent = await fs.readFile(filePath, 'utf-8');

            // 简单的正则表达式解析 (生产环境可考虑使用 TypeScript compiler API)
            const data = this.parseTypeScriptExport(fileContent);

            // 缓存数据
            if (useCache) {
                this.cache.set(category, data);
            }

            return data;
        } catch (error) {
            throw new Error(`Failed to load data for category ${category}: ${error.message}`);
        }
    }

    /**
     * 获取所有可用的数据分类
     */
    async getAvailableCategories() {
        try {
            const files = await fs.readdir(DATA_DIR);
            return files
                .filter(f => f.endsWith('.ts') && !f.startsWith('.'))
                .map(f => f.replace('.ts', ''));
        } catch (error) {
            throw new Error(`Failed to get categories: ${error.message}`);
        }
    }

    /**
     * 获取特定数据项
     */
    async getDataItem(category: string, itemId: string) {
        const data = await this.getData(category);
        if (Array.isArray(data)) {
            return data.find((item: any) => item.id === itemId);
        } else if (typeof data === 'object') {
            return data[itemId];
        }
        return null;
    }

    /**
     * 搜索数据
     */
    async searchData(category: string, query: string) {
        const data = await this.getData(category);
        if (!Array.isArray(data)) return [];

        const lowerQuery = query.toLowerCase();
        return data.filter((item: any) =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(lowerQuery)
            )
        );
    }

    /**
     * 清除缓存
     */
    clearCache(category?: string) {
        if (category) {
            this.cache.delete(category);
        } else {
            this.cache.clear();
        }
    }

    // 私有方法

    private isValidCategoryName(name: string): boolean {
        // 只允许字母、数字、下划线
        return /^[a-zA-Z0-9_]+$/.test(name);
    }

    private parseTypeScriptExport(content: string): any {
        try {
            // 移除 import 语句
            let cleaned = content
                .replace(/import\s+.*?from\s+['"].*?['"]/g, '')
                .replace(/import\s+.*?['"];/g, '');

            // 移除 export 关键字
            cleaned = cleaned.replace(/export\s+(const|let|var|type|interface)\s+/g, '$1 ');

            // 使用 Function 构造函数执行代码 (注意：仅在受信任的代码中使用)
            const fn = new Function(cleaned + '; return {' + this.extractExports(cleaned) + '}');
            return fn();
        } catch (error) {
            console.error('Failed to parse TypeScript:', error);
            return {};
        }
    }

    private extractExports(content: string): string {
        // 提取所有导出的变量名
        const matches = content.match(/(?:const|let|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g);
        if (!matches) return '';

        return matches
            .map(match => match.replace(/(?:const|let|var)\s+/, '').replace(/\s*=$/, ''))
            .join(',');
    }
}

export const dataService = new DataService();
