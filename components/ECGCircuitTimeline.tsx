import React, { useMemo, useEffect, useState } from 'react';

interface ECGCircuitTimelineProps {
  hoveredIndex: number; // 0, 1, 2, 3 or -1
  isRetro: boolean;
  isTitleHovered?: boolean;
  glitchActiveSegments?: boolean[]; 
}

export const ECGCircuitTimeline: React.FC<ECGCircuitTimelineProps> = ({ 
  hoveredIndex, 
  isRetro, 
  isTitleHovered = false,
  glitchActiveSegments = [false, false, false, false, false]
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const width = 1000;
  const height = 100;
  const midY = 50;

  // The 5 items distributed. We fine-tune nodes X so the beats appear exactly at button centers.
  const nodes = [121, 310, 500, 690, 879];

  const pathData = useMemo(() => {
    let d = `M 0 ${midY} `;

    d += `L 30 ${midY} L 40 ${midY - 5} L 50 ${midY} L ${nodes[0] - 40} ${midY} `;

    for (let i = 0; i < nodes.length; i += 1) {
      const x = nodes[i];
      const isActive = hoveredIndex === i;

      if (i > 0) {
        const prevX = nodes[i - 1];
        const spanMid = (prevX + x) / 2;
        d += `L ${prevX + 40} ${midY} L ${spanMid - 10} ${midY} L ${spanMid} ${midY + (i % 2 === 0 ? 5 : -5)} L ${spanMid + 10} ${midY} L ${x - 40} ${midY} `;
      }

      if (isActive) {
        if (i === 0) {
          d += `L ${x - 18} ${midY} L ${x - 12} ${midY - 4} L ${x - 8} ${midY - 35} L ${x - 2} ${midY + 30} L ${x + 4} ${midY - 10} L ${x + 10} ${midY + 6} L ${x + 16} ${midY - 2} L ${x + 22} ${midY} `;
        } else if (i === 1) {
          d += `L ${x - 18} ${midY - 20} L ${x - 12} ${midY + 15} L ${x - 6} ${midY - 40} L ${x} ${midY + 25} L ${x + 6} ${midY - 15} L ${x + 12} ${midY + 8} L ${x + 18} ${midY - 4} L ${x + 22} ${midY} `;
        } else if (i === 2) {
          d += `L ${x - 18} ${midY - 10} L ${x - 12} ${midY - 35} L ${x - 6} ${midY + 10} L ${x} ${midY - 45} L ${x + 6} ${midY + 30} L ${x + 12} ${midY - 15} L ${x + 18} ${midY + 5} L ${x + 22} ${midY} `;
        } else if (i === 3) {
          d += `L ${x - 18} ${midY + 10} L ${x - 12} ${midY - 15} L ${x - 6} ${midY + 30} L ${x} ${midY - 40} L ${x + 6} ${midY + 20} L ${x + 12} ${midY - 10} L ${x + 18} ${midY + 4} L ${x + 22} ${midY} `;
        } else {
          d += `L ${x - 18} ${midY + 6} L ${x - 12} ${midY - 45} L ${x - 6} ${midY + 12} L ${x} ${midY + 30} L ${x + 6} ${midY + 10} L ${x + 12} ${midY - 25} L ${x + 18} ${midY + 5} L ${x + 22} ${midY} `;
        }
      } else {
        d += `L ${x - 18} ${midY - 0.5} `;
        d += `L ${x - 12} ${midY + 0.8} `;
        d += `L ${x - 6} ${midY - 0.4} `;
        d += `L ${x} ${midY + 0.6} `;
        d += `L ${x + 6} ${midY - 0.3} `;
        d += `L ${x + 12} ${midY + 0.5} `;
        d += `L ${x + 18} ${midY - 0.2} `;
        d += `L ${x + 22} ${midY} `;
      }

      d += `L ${x + 40} ${midY} `;
    }

    d += `L 970 ${midY} L 980 ${midY + 5} L 990 ${midY} L 1000 ${midY}`;
    return d;
  }, [hoveredIndex]);

  const color = isRetro ? 'var(--text-accent)' : 'rgba(255,255,255,0.85)';
  const dimmedColor = isRetro ? 'var(--text-accent)' : 'rgba(255,255,255,0.3)';
  void glitchActiveSegments;

  return (
    <div className={`absolute top-1/2 left-0 right-0 h-[100px] -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} z-0`}>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" 
           className="w-full h-full overflow-visible drop-shadow-sm transition-all duration-700">
        
        {/* Background thin trace */}
        <path d={`M 0 ${midY} L 1000 ${midY}`} stroke={dimmedColor} strokeWidth={0.5} strokeOpacity={0.4} strokeDasharray="4 4" fill="none" />

        {/* The Animated ECG Circuit Trace */}
        <path
          d={pathData}
          stroke={color}
          strokeWidth={0.3}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{ transitionProperty: 'd', opacity: 0.8 }}
        />

        {/* Ghost Line (Secondary Trace) - Even thinner */}
        <path
          d={pathData}
          stroke={color}
          strokeWidth={0.2}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{ transitionProperty: 'd', opacity: isRetro ? 0.15 : 0.1, filter: 'blur(1px)', transform: 'translateY(1px)' }}
        />

        {/* Decorative Grid Lines & Nodes */}
        {nodes.map((nx, i) => (
          <g key={i} style={{ transform: `translateX(${nx}px)` }}>
            <line x1={0} y1={midY - 12} x2={0} y2={midY + 12} stroke={dimmedColor} strokeWidth={0.2} strokeOpacity={0.3} />
            <circle cx={0} cy={midY} r={1} fill={color} opacity={0.4} />
            <text x={0} y={midY - 18} textAnchor="middle" fill={dimmedColor} fontSize={6} fontFamily="monospace" letterSpacing={1} opacity={0.3}>
              T-{String(i + 1).padStart(2, '0')}
            </text>
          </g>
        ))}

        {/* Markers above the nodes */}
        {nodes.map((nx, i) => (
          <g key={`f-${i}`} transform={`translate(${nx}, ${midY - 45})`} className="transition-all duration-1000" style={{ opacity: (hoveredIndex === i || isTitleHovered) ? 1 : 0.3 }}>
            <line x1={0} y1={-10} x2={0} y2={10} stroke={dimmedColor} strokeWidth={0.5} />
            <line x1={-5} y1={0} x2={5} y2={0} stroke={dimmedColor} strokeWidth={0.5} />
            <line x1={-15} y1={5} x2={15} y2={5} stroke={dimmedColor} strokeWidth={0.3} strokeDasharray="1 3" />
          </g>
        ))}
      </svg>
    </div>
  );
};
