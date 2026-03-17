// 迁移示例代码

// ============================================
// 示例1：最简单的迁移 - Constants文件
// ============================================

// 前端 (constants.ts) - 旧方式
// import { DRIVERS, COMMERCIAL_ENGINE_BLOCKS } from './data/constants_data';
// export { DRIVERS, COMMERCIAL_ENGINE_BLOCKS };

// 后端方案 - 创建一个适配层
// frontend/hooks/useAppConstants.ts
import { useEffect, useState } from 'react';
import { dataAPI } from '@/services/dataAPI';

export function useAppConstants() {
    const [constants, setConstants] = useState({
        DRIVERS: null,
        COMMERCIAL_ENGINE_BLOCKS: null,
        ANIMATION_GENRES: null,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([
            dataAPI.getData('engine_drives'),
            dataAPI.getData('commercial_data'),
            dataAPI.getData('animation_genres'),
        ])
            .then(([drives, commercial, genres]) => {
                setConstants({
                    DRIVERS: drives,
                    COMMERCIAL_ENGINE_BLOCKS: commercial,
                    ANIMATION_GENRES: genres,
                });
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { ...constants, loading, error };
}

// 现在在App.tsx中使用：
// import { useAppConstants } from './hooks/useAppConstants';
// const { DRIVERS, loading } = useAppConstants();

// ============================================
// 示例2：在组件中迁移
// ============================================

// 旧代码 (App.tsx)
/*
import { COMMERCIAL_ENGINE_BLOCKS } from './data/commercial_data';

const App = () => {
    const [commercialBlocks, setCommercialBlocks] = useState(COMMERCIAL_ENGINE_BLOCKS);
    // ...
};
*/

// 新代码
import { useEffect, useState } from 'react';
import { dataAPI } from '@/services/dataAPI';

const App = () => {
    const [commercialBlocks, setCommercialBlocks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dataAPI.getData('commercial_data')
            .then(setCommercialBlocks)
            .catch(error => console.error('Failed to load commercial data:', error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!commercialBlocks) return <div>Error loading data</div>;

    // 现在可以使用 commercialBlocks...
    return <div>{/* ... */}</div>;
};

// ============================================
// 示例3：创建自定义Hook处理迁移
// ============================================

// frontend/hooks/useDataMigration.ts
import { useEffect, useState } from 'react';
import { dataAPI } from '@/services/dataAPI';

/**
 * 将多个数据分类合并成一个对象
 * 支持旧API的向后兼容性
 */
export function useMigratedConstants() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            dataAPI.getData('engine_drives'),
            dataAPI.getData('commercial_data'),
            dataAPI.getData('narrative_engine'),
            dataAPI.getData('animation_genres'),
            dataAPI.getData('master_presets'),
            dataAPI.getData('aesthetic_data'),
        ]).then(([drives, commercial, narrative, genres, presets, aesthetic]) => {
            // 合并所有数据为一个对象（与旧API兼容）
            setData({
                DRIVERS: drives,
                COMMERCIAL_ENGINE_BLOCKS: commercial.blocks,
                NARRATIVE_ENGINE_BLOCKS: narrative.blocks,
                ANIMATION_GENRES: genres,
                MASTER_PRESETS: presets,
                AESTHETIC_ENGINE_BLOCKS: aesthetic.blocks,
            });
        }).finally(() => setLoading(false));
    }, []);

    return { data, loading };
}

// 使用
/*
const { data: constants, loading } = useMigratedConstants();
if (!loading && constants) {
    const { DRIVERS, COMMERCIAL_ENGINE_BLOCKS } = constants;
}
*/

// ============================================
// 示例4：搜索功能迁移
// ============================================

// frontend/components/DataSearch.tsx
import { useState, useCallback } from 'react';
import { dataAPI } from '@/services/dataAPI';

export function DataSearch({ category = 'commercial_data' }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(false);

    const handleSearch = useCallback(async (searchQuery) => {
        if (searchQuery.length < 2) {
            setResults([]);
            return;
        }

        setSearching(true);
        try {
            const searchResults = await dataAPI.search(category, searchQuery);
            setResults(searchResults);
        } catch (error) {
            console.error('Search failed:', error);
            setResults([]);
        } finally {
            setSearching(false);
        }
    }, [category]);

    return (
        <div>
            <input
                type="text"
                placeholder="搜索数据..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
            />
            {searching && <p>搜索中...</p>}
            <ul>
                {results.map((item) => (
                    <li key={item.id}>
                        {item.name}: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ============================================
// 示例5：逐步迁移策略
// ============================================

/*
迁移步骤:

1. 第一周: 创建 useData Hooks
   - useDataMigration.ts
   - useData.ts
   - 不修改现有代码

2. 第二周: 迁移最常用的组件
   - App.tsx
   - NarrativeEngineField.tsx
   - CommercialEditor.tsx

3. 第三周: 迁移剩余组件
   - 所有使用 data/ 的组件

4. 第四周: 优化和清理
   - 删除 data/ 文件夹
   - 测试生产构建
   - 监测性能

时间线: 4周完全迁移
*/

// ============================================
// 示例6：性能监测
// ============================================

// frontend/utils/dataMetrics.ts
import { dataAPI } from '@/services/dataAPI';

export function logDataMetrics() {
    const stats = dataAPI.getCacheStats();
    console.log('📊 Data API Metrics:', stats);

    // 在控制台显示缓存信息
    stats.categories.forEach(category => {
        console.log(`  ✅ ${category} - 已缓存`);
    });

    console.log(`  📈 缓存命中: 节省 ~${stats.size} 次API调用`);
}

// 在App挂载时调用
/*
useEffect(() => {
    logDataMetrics();
}, []);
*/

// ============================================
// 示例7：错误处理
// ============================================

// frontend/components/SafeDataLoader.tsx
import { useEffect, useState } from 'react';
import { dataAPI } from '@/services/dataAPI';

export function SafeDataLoader({ category, children }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dataAPI.getData(category)
            .then(setData)
            .catch((err) => {
                console.error(`Failed to load ${category}:`, err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <div className="spinner">加载中...</div>;
    if (error) return <div className="error">错误: {error}</div>;
    if (!data) return <div className="empty">无数据</div>;

    return children(data);
}

// 使用
/*
<SafeDataLoader category="commercial_data">
    {(data) => (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )}
</SafeDataLoader>
*/

export default {};
