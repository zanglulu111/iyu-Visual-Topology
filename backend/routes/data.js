// backend/routes/data.js
import express from 'express';
import { dataService } from '../services/dataService.ts';

export default function(supabase) {
    const router = express.Router();

    // 获取所有可用的数据分类
    router.get('/categories', async (req, res) => {
        try {
            const categories = await dataService.getAvailableCategories();
            res.json({ categories });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // 获取指定分类的所有数据
    // 例: GET /api/data/commercial_data
    router.get('/:category', async (req, res) => {
        try {
            const { category } = req.params;
            const useCache = req.query.cache !== 'false';
            const data = await dataService.getData(category, useCache);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // 获取特定数据项
    // 例: GET /api/data/commercial_data/SLOGAN_1
    router.get('/:category/:itemId', async (req, res) => {
        try {
            const { category, itemId } = req.params;
            const item = await dataService.getDataItem(category, itemId);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // 搜索数据
    // 例: GET /api/data/commercial_data/search?q=slogan
    router.get('/:category/search', async (req, res) => {
        try {
            const { category } = req.params;
            const { q } = req.query;
            if (!q) {
                return res.status(400).json({ error: 'Query parameter required' });
            }
            const results = await dataService.searchData(category, q);
            res.json(results);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // 清除缓存 (可选: 仅管理员)
    router.post('/:category/cache/clear', async (req, res) => {
        try {
            const { category } = req.params;
            dataService.clearCache(category);
            res.json({ success: true, message: `Cache cleared for ${category}` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}
