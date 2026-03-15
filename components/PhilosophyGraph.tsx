import React, { useState, useRef, useCallback, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import graphData from '../data/philosophy_graph.json';

interface PhilosopherNode {
  id: string;
  name: string;
  nameEn: string;
  era: string;
  years: string;
  school: string;
  summary: string;
  keywords: string[];
  color: string;
  x?: number;
  y?: number;
}

interface GraphLink {
  source: string;
  target: string;
  relation: string;
}

const PhilosophyGraph: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<PhilosopherNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<PhilosopherNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const graphRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNodeClick = useCallback((node: any) => {
    setSelectedNode(node as PhilosopherNode);
    if (graphRef.current) {
      graphRef.current.centerAt(node.x, node.y, 800);
      graphRef.current.zoom(2.5, 800);
    }
  }, []);

  const handleBackgroundClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const nodeCanvasObject = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.name;
    const fontSize = Math.max(12 / globalScale, 8);
    const isSelected = selectedNode?.id === node.id;
    const isHovered = hoveredNode?.id === node.id;
    const radius = isSelected ? 18 : isHovered ? 15 : 12;

    // 外圈光晕
    if (isSelected || isHovered) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius + 6, 0, 2 * Math.PI);
      ctx.fillStyle = `${node.color}33`;
      ctx.fill();
    }

    // 节点圆
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = isSelected ? node.color : `${node.color}99`;
    ctx.fill();
    ctx.strokeStyle = node.color;
    ctx.lineWidth = isSelected ? 2.5 : 1.5;
    ctx.stroke();

    // 文字
    ctx.font = `${isSelected ? 'bold ' : ''}${fontSize}px "Noto Serif SC", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isSelected ? '#ffffff' : '#cccccc';
    ctx.fillText(label, node.x, node.y + radius + fontSize + 2);
  }, [selectedNode, hoveredNode]);

  const linkCanvasObject = useCallback((link: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const start = link.source;
    const end = link.target;
    if (!start || !end || typeof start !== 'object' || typeof end !== 'object') return;

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 关系标签
    if (globalScale > 1.2) {
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      const fontSize = Math.max(8 / globalScale, 6);
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(link.relation, midX, midY);
    }
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#0a0a0f',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Noto Serif SC", "Source Han Serif", serif'
    }}>
      {/* 标题 */}
      <div style={{
        position: 'absolute',
        top: 24,
        left: 32,
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 4 }}>
          MIST SCHOOL · PHILOSOPHY
        </div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 22, fontWeight: 300, letterSpacing: 2 }}>
          哲学知识网络
        </div>
      </div>

      {/* 操作提示 */}
      <div style={{
        position: 'absolute',
        bottom: 24,
        left: 32,
        zIndex: 10,
        color: 'rgba(255,255,255,0.2)',
        fontSize: 11,
        letterSpacing: 1,
        pointerEvents: 'none'
      }}>
        点击节点查看详情 · 滚轮缩放 · 拖拽移动
      </div>

      {/* 图谱 */}
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#0a0a0f"
        nodeCanvasObject={nodeCanvasObject}
        nodeCanvasObjectMode={() => 'replace'}
        linkCanvasObject={linkCanvasObject}
        linkCanvasObjectMode={() => 'replace'}
        onNodeClick={handleNodeClick}
        onNodeHover={(node: any) => setHoveredNode(node)}
        onBackgroundClick={handleBackgroundClick}
        cooldownTicks={100}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
        linkDirectionalArrowLength={4}
        linkDirectionalArrowRelPos={1}
        linkDirectionalArrowColor={() => 'rgba(255,255,255,0.2)'}
      />

      {/* 详情面板 */}
      {selectedNode && (
        <div style={{
          position: 'absolute',
          top: '50%',
          right: 32,
          transform: 'translateY(-50%)',
          width: 320,
          background: 'rgba(10,10,20,0.92)',
          border: `1px solid ${selectedNode.color}44`,
          borderLeft: `3px solid ${selectedNode.color}`,
          padding: '28px 24px',
          zIndex: 20,
          backdropFilter: 'blur(12px)',
        }}>
          {/* 关闭 */}
          <button
            onClick={() => setSelectedNode(null)}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              fontSize: 18,
              lineHeight: 1,
              padding: 4
            }}
          >×</button>

          {/* 名字 */}
          <div style={{ marginBottom: 4 }}>
            <span style={{ color: selectedNode.color, fontSize: 22, fontWeight: 600 }}>
              {selectedNode.name}
            </span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>
            {selectedNode.nameEn} · {selectedNode.years}
          </div>

          {/* 流派/时代 */}
          <div style={{
            display: 'inline-block',
            background: `${selectedNode.color}22`,
            border: `1px solid ${selectedNode.color}44`,
            color: selectedNode.color,
            fontSize: 11,
            padding: '3px 10px',
            marginBottom: 16,
            letterSpacing: 1
          }}>
            {selectedNode.school} · {selectedNode.era}
          </div>

          {/* 简介 */}
          <div style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 13,
            lineHeight: 1.8,
            marginBottom: 20,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 16
          }}>
            {selectedNode.summary}
          </div>

          {/* 关键词 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {selectedNode.keywords.map(kw => (
              <span key={kw} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.4)',
                fontSize: 11,
                padding: '2px 8px',
                letterSpacing: 0.5
              }}>
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhilosophyGraph;
