/**
 * 哲学词条详情页组件示例
 * 展示如何使用新的数据加载系统
 */

import React from 'react';
import { usePhilosophyDetail } from '../hooks/usePhilosophy';
import ReactMarkdown from 'react-markdown';

interface PhilosophyDetailPageProps {
  philosopher: string;
  conceptId: string;
}

export function PhilosophyDetailPage({
  philosopher,
  conceptId
}: PhilosophyDetailPageProps) {
  const { data: detail, isLoading, error } = usePhilosophyDetail(
    philosopher,
    conceptId
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-80 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">加载失败</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 概念定义 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">概念</h2>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{detail.definition}</ReactMarkdown>
        </div>
      </section>

      {/* 拓扑类比与案例 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">拓扑类比与案例</h2>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{detail.analogy}</ReactMarkdown>
        </div>
      </section>

      {/* 叙事引擎部署指示 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">叙事引擎部署指示</h2>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{detail.application}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
}

/**
 * 哲学词条列表组件示例
 */

import { usePhilosophySummaries, usePreloadPopularConcepts } from '../hooks/usePhilosophy';

interface PhilosophyListPageProps {
  philosopher: string;
  onSelectConcept: (conceptId: string) => void;
}

export function PhilosophyListPage({
  philosopher,
  onSelectConcept
}: PhilosophyListPageProps) {
  const { data: summaries, isLoading } = usePhilosophySummaries(philosopher);

  // 预加载热门词条
  usePreloadPopularConcepts(philosopher, true);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {summaries?.map(concept => (
        <div
          key={concept.id}
          onClick={() => onSelectConcept(concept.id)}
          className="p-4 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">{concept.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{concept.enName}</p>
          <p className="text-sm text-gray-700 mb-2">{concept.shortDef}</p>
          {concept.summary && (
            <p className="text-xs text-gray-500 line-clamp-3">
              {concept.summary}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * 搜索组件示例
 */

import { usePhilosophySearch } from '../hooks/usePhilosophy';

interface PhilosophySearchProps {
  philosopher: string;
  onSelectConcept: (conceptId: string) => void;
}

export function PhilosophySearch({
  philosopher,
  onSelectConcept
}: PhilosophySearchProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { results, isLoading, total } = usePhilosophySearch(
    philosopher,
    searchTerm
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 搜索框 */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索哲学概念..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchTerm && (
          <p className="mt-2 text-sm text-gray-600">
            找到 {total} 个结果
          </p>
        )}
      </div>

      {/* 搜索结果 */}
      {isLoading ? (
        <div className="text-center py-8">加载中...</div>
      ) : (
        <div className="space-y-4">
          {results.map(concept => (
            <div
              key={concept.id}
              onClick={() => onSelectConcept(concept.id)}
              className="p-4 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-1">{concept.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{concept.enName}</p>
              <p className="text-sm text-gray-700">{concept.shortDef}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
