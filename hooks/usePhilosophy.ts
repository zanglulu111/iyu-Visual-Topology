/**
 * 哲学辞典数据加载 Hooks
 * 使用 React Query 进行数据管理和缓存
 */

import React from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import {
  getPhilosophyIndex,
  getPhilosophySummaries,
  getPhilosophyDetail,
  preloadPopularConcepts,
  type PhilosophyConcept,
  type PhilosophySummary,
  type PhilosophyDetail
} from '../utils/philosophyLoader';

/**
 * 获取哲学家的索引数据
 * 这个数据很小，直接从打包的 JSON 读取，无需异步
 */
export function usePhilosophyIndex(philosopher: string) {
  return getPhilosophyIndex(philosopher);
}

/**
 * 获取哲学家的摘要数据
 * 首次从服务器加载，之后从缓存读取
 */
export function usePhilosophySummaries(philosopher: string) {
  return useQuery({
    queryKey: ['philosophy', 'summaries', philosopher],
    queryFn: () => getPhilosophySummaries(philosopher),
    staleTime: Infinity, // 永不过期
    gcTime: 1000 * 60 * 60 * 24, // 24小时后清理
    retry: 1
  });
}

/**
 * 获取单个词条的详细内容
 * 按需加载，缓存到 localStorage
 */
export function usePhilosophyDetail(
  philosopher: string,
  conceptId: string,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ['philosophy', 'detail', philosopher, conceptId],
    queryFn: () => getPhilosophyDetail(philosopher, conceptId),
    staleTime: Infinity, // 永不过期
    gcTime: 1000 * 60 * 60 * 24, // 24小时后清理
    enabled: enabled && !!conceptId, // 只在启用且有 conceptId 时执行
    retry: 1
  });
}

/**
 * 批量获取多个词条的详细内容
 * 用于预加载或批量展示
 */
export function usePhilosophyDetails(
  philosopher: string,
  conceptIds: string[]
) {
  return useQueries({
    queries: conceptIds.map(conceptId => ({
      queryKey: ['philosophy', 'detail', philosopher, conceptId],
      queryFn: () => getPhilosophyDetail(philosopher, conceptId),
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24,
      retry: 1
    }))
  });
}

/**
 * 预加载热门词条
 * 在用户浏览索引时，后台预加载常用词条
 */
export function usePreloadPopularConcepts(
  philosopher: string,
  enabled: boolean = true
) {
  // 定义热门词条列表
  const popularConcepts: Record<string, string[]> = {
    hegel: [
      'h_substance_subject',
      'h_dialectic',
      'h_aufhebung',
      'h_negativity'
    ]
  };

  // 在组件挂载后预加载
  React.useEffect(() => {
    if (enabled && popularConcepts[philosopher]) {
      preloadPopularConcepts(philosopher, popularConcepts[philosopher]);
    }
  }, [philosopher, enabled]);
}

/**
 * 搜索词条
 * 在索引和摘要中搜索关键词
 */
export function usePhilosophySearch(
  philosopher: string,
  searchTerm: string
) {
  const { data: summaries, isLoading } = usePhilosophySummaries(philosopher);

  const results = React.useMemo(() => {
    if (!summaries || !searchTerm) return summaries || [];

    const term = searchTerm.toLowerCase();

    return summaries.filter(concept =>
      concept.name.toLowerCase().includes(term) ||
      concept.enName.toLowerCase().includes(term) ||
      concept.shortDef.toLowerCase().includes(term) ||
      concept.summary?.toLowerCase().includes(term)
    );
  }, [summaries, searchTerm]);

  return {
    results,
    isLoading,
    total: results.length
  };
}

/**
 * 按分类获取词条
 */
export function usePhilosophyByCategory(
  philosopher: string,
  category: string
) {
  const { data: summaries, isLoading } = usePhilosophySummaries(philosopher);

  const filtered = React.useMemo(() => {
    if (!summaries) return [];
    if (!category) return summaries;

    return summaries.filter(concept => concept.category === category);
  }, [summaries, category]);

  return {
    concepts: filtered,
    isLoading,
    total: filtered.length
  };
}

// 导出类型
export type {
  PhilosophyConcept,
  PhilosophySummary,
  PhilosophyDetail
};
