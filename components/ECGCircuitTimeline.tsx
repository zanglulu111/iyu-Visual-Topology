import React, { useMemo, useEffect, useState } from 'react';

interface ECGCircuitTimelineProps {
  hoveredIndex: number; // 0, 1, 2, 3 or -1
  isRetro: boolean;
}

export const ECGCircuitTimeline: React.FC<ECGCircuitTimelineProps> = ({ hoveredIndex, isRetro }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const width = 1000;
  const height = 100;
  const midY = 50;

  // The 4 items distributed. We fine-tune nodes X so the beats appear exactly at button centers.
  const nodes = [120, 360, 615, 872];

  const pathData = useMemo(() => {
    let d = `M 0 ${midY} `;
    
    // Intro segment
    d += `L 30 ${midY} L 40 ${midY - 5} L 50 ${midY} L ${nodes[0] - 40} ${midY} `;
    
    for (let i = 0; i < 4; i++) {
      const x = nodes[i];
      const isHovered = hoveredIndex === i;
      
      if (i > 0) {
        const prevX = nodes[i - 1];
        const spanMid = (prevX + x) / 2;
        // Bump between nodes (Fixed 5 points)
        d += `L ${prevX + 40} ${midY} L ${spanMid - 10} ${midY} L ${spanMid} ${midY + (i % 2 === 0 ? 5 : -5)} L ${spanMid + 10} ${midY} L ${x - 40} ${midY} `;
      }

      // Standardized Wave Segment: Exactly 8 'L' commands for every state (Parity for Morphing)
      if (isHovered) {
        if (i === 0) {
          d += `L ${x - 18} ${midY} L ${x - 12} ${midY - 4} L ${x - 8} ${midY - 35} L ${x - 2} ${midY + 30} L ${x + 4} ${midY - 10} L ${x + 10} ${midY + 6} L ${x + 16} ${midY - 2} L ${x + 22} ${midY} `;
        } else if (i === 1) {
          d += `L ${x - 18} ${midY - 20} L ${x - 12} ${midY + 15} L ${x - 6} ${midY - 40} L ${x} ${midY + 25} L ${x + 6} ${midY - 15} L ${x + 12} ${midY + 8} L ${x + 18} ${midY - 4} L ${x + 22} ${midY} `;
        } else if (i === 2) {
          d += `L ${x - 18} ${midY - 10} L ${x - 12} ${midY - 35} L ${x - 6} ${midY + 10} L ${x} ${midY - 45} L ${x + 6} ${midY + 30} L ${x + 12} ${midY - 15} L ${x + 18} ${midY + 5} L ${x + 22} ${midY} `;
        } else {
          // Rorschach Asymmetric Wave - Now with 8 points parity
          d += `L ${x - 18} ${midY + 6} L ${x - 12} ${midY - 45} L ${x - 6} ${midY + 12} L ${x} ${midY + 30} L ${x + 6} ${midY + 10} L ${x + 12} ${midY - 25} L ${x + 18} ${midY + 5} L ${x + 22} ${midY} `;
        }
      } else {
        // Resting state: Exactly 8 points, collapsed to baseline
        d += `L ${x - 18} ${midY - 0.5} `;
        d += `L ${x - 12} ${midY + 0.8} `;
        d += `L ${x - 6}  ${midY - 0.4} `;
        d += `L ${x}     ${midY + 0.6} `;
        d += `L ${x + 6}  ${midY - 0.3} `;
        d += `L ${x + 12} ${midY + 0.5} `;
        d += `L ${x + 18} ${midY - 0.2} `;
        d += `L ${x + 22} ${midY} `;
      }
      d += `L ${x + 40} ${midY} `;
    }
    
    // Outro segment
    d += `L 970 ${midY} L 980 ${midY + 5} L 990 ${midY} L 1000 ${midY}`;
    return d;
  }, [hoveredIndex]);

  const color = isRetro ? 'var(--text-accent)' : 'rgba(255,255,255,0.85)';
  const dimmedColor = isRetro ? 'var(--text-accent)' : 'rgba(255,255,255,0.3)';
  const strokeW = isRetro ? 1.5 : 1.2;

  return (
    <div className={`absolute top-1/2 left-0 right-0 h-[100px] -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} z-0`}>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-full overflow-visible drop-shadow-sm">
        
        {/* Background thin trace */}
        <path 
          d={`M 0 ${midY} L 1000 ${midY}`}
          stroke={dimmedColor}
          strokeWidth={0.5}
          strokeOpacity={0.4}
          strokeDasharray="4 4"
          fill="none"
        />

        {/* The Animated ECG Circuit Trace (Main) */}
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

        {/* Main ECG Path */}
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

        {/* Decorative Grid Lines & Nodes - Minimal & Static */}
        {nodes.map((nx, i) => {
           const dotX = 0;
           return (
             <g key={i} style={{ transform: `translateX(${nx}px)` }}>
               {/* Static Vertical circuit line */}
               <line x1={dotX} y1={midY - 12} x2={dotX} y2={midY + 12} stroke={dimmedColor} strokeWidth={0.2} strokeOpacity={0.3} />
               
               {/* Minimal Static Node Dot */}
               <circle cx={dotX} cy={midY} r={1} fill={color} opacity={0.4} />
               
               {/* Data text - Static opacity */}
               <text 
                 x={dotX} y={midY - 18} 
                 textAnchor="middle"
                 fill={dimmedColor} fontSize={6} fontFamily="monospace" 
                 letterSpacing={1} opacity={0.3}
               >
                 T-{String(i + 1).padStart(2, '0')}
               </text>
             </g>
           )
        })}

        {/* Random scattered circuit elements */}
        { [80, 240, 500, 750, 930].map((rx, idx) => (
          <g key={`rnd-${idx}`} transform={`translate(${rx}, ${midY})`}>
             <rect x={-2} y={-2} width={4} height={4} fill="none" stroke={dimmedColor} strokeWidth={0.5} strokeOpacity={0.8} />
             <line x1={0} y1={2} x2={0} y2={10} stroke={dimmedColor} strokeWidth={0.5} strokeOpacity={0.8} />
             <circle cx={0} cy={12} r={1.5} fill={dimmedColor} strokeOpacity={0.8} />
             <line x1={0} y1={12} x2={10} y2={12} stroke={dimmedColor} strokeWidth={0.5} strokeOpacity={0.8} />
          </g>
        ))}

        {/* Some floating small lines and decorative markers above the nodes */}
        {nodes.map((nx, i) => (
           <g key={`f-${i}`} transform={`translate(${nx}, ${midY - 45})`} className="transition-all duration-1000" style={{ opacity: hoveredIndex === i ? 1 : 0.3 }}>
              <line x1={0} y1={-10} x2={0} y2={10} stroke={dimmedColor} strokeWidth={0.5} />
              <line x1={-5} y1={0} x2={5} y2={0} stroke={dimmedColor} strokeWidth={0.5} />
              <line x1={-15} y1={5} x2={15} y2={5} stroke={dimmedColor} strokeWidth={0.3} strokeDasharray="1 3" />
              {hoveredIndex === i && (
                <rect x={-20} y={-5} width={40} height={15} fill="none" stroke={color} strokeWidth={0.2} strokeOpacity={0.4} />
              )}
           </g>
        ))}

      </svg>
    </div>
  );
};
