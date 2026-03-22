import React, { useEffect, useState } from 'react';

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

  const getSegmentPath = (i: number) => {
    const x = nodes[i];
    const isActive = hoveredIndex === i || (isTitleHovered && !isRetro) || glitchActiveSegments[i];
    let d = "";
    
    // Header for the segment (connect from previous or start)
    if (i === 0) {
      d = `M 0 ${midY} L 30 ${midY} L 40 ${midY - 5} L 50 ${midY} L ${nodes[0] - 40} ${midY} `;
    } else {
      const prevX = nodes[i - 1];
      const spanMid = (prevX + x) / 2;
      d = `M ${prevX + 40} ${midY} L ${spanMid - 10} ${midY} L ${spanMid} ${midY + (i % 2 === 0 ? 5 : -5)} L ${spanMid + 10} ${midY} L ${x - 40} ${midY} `;
    }

    // Standard heartbeat wave (Exactly 8 'L' points for morphing parity)
    if (isActive) {
      if (i === 0) d += `L ${x - 18} ${midY} L ${x - 12} ${midY - 4} L ${x - 8} ${midY - 35} L ${x - 2} ${midY + 30} L ${x + 4} ${midY - 10} L ${x + 10} ${midY + 6} L ${x + 16} ${midY - 2} L ${x + 22} ${midY}`;
      else if (i === 1) d += `L ${x - 18} ${midY - 20} L ${x - 12} ${midY + 15} L ${x - 6} ${midY - 40} L ${x} ${midY + 25} L ${x + 6} ${midY - 15} L ${x + 12} ${midY + 8} L ${x + 18} ${midY - 4} L ${x + 22} ${midY}`;
      else if (i === 2) d += `L ${x - 18} ${midY - 10} L ${x - 12} ${midY - 35} L ${x - 6} ${midY + 10} L ${x} ${midY - 45} L ${x + 6} ${midY + 30} L ${x + 12} ${midY - 15} L ${x + 18} ${midY + 5} L ${x + 22} ${midY}`;
      else if (i === 3) d += `L ${x - 18} ${midY + 10} L ${x - 12} ${midY - 15} L ${x - 6} ${midY + 30} L ${x} ${midY - 40} L ${x + 6} ${midY + 20} L ${x + 12} ${midY - 10} L ${x + 18} ${midY + 4} L ${x + 22} ${midY}`;
      else d += `L ${x - 18} ${midY + 6} L ${x - 12} ${midY - 45} L ${x - 6} ${midY + 12} L ${x} ${midY + 30} L ${x + 6} ${midY + 10} L ${x + 12} ${midY - 25} L ${x + 18} ${midY + 5} L ${x + 22} ${midY}`;
    } else {
      d += `L ${x - 18} ${midY - 0.5} L ${x - 12} ${midY + 0.8} L ${x - 6} ${midY - 0.4} L ${x} ${midY + 0.6} L ${x + 6} ${midY - 0.3} L ${x + 12} ${midY + 0.5} L ${x + 18} ${midY - 0.2} L ${x + 22} ${midY}`;
    }
    
    d += ` L ${x + 40} ${midY}`;
    if (i === 4) d += ` L 970 ${midY} L 980 ${midY + 5} L 990 ${midY} L 1000 ${midY}`;
    
    return d;
  };

  const RANDOM_DELAYS = [0.2, 0.8, 0.2, 0.8, 1.4];
  const color = isRetro ? 'rgba(139,38,29,0.85)' : 'rgba(255,255,255,0.85)';
  const dimmedColor = isRetro ? 'rgba(139,38,29,0.3)' : 'rgba(255,255,255,0.3)';

  return (
    <div className={`absolute top-1/2 left-0 right-0 h-[100px] -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} z-0`}>
      <style>
        {`
          @keyframes line-jitter-dispersion {
            /* Burst 1 */
            0%, 12% { transform: translate(-1.5px, 0.5px); filter: drop-shadow(1.5px 0 0 rgba(255,0,255,0.6)) drop-shadow(-1.5px 0 0 rgba(0,255,255,0.6)); }
            4%, 8% { transform: translate(2px, -1px); filter: drop-shadow(3.5px 0 0 rgba(255,0,255,0.8)) drop-shadow(-3.5px 0 0 rgba(0,255,255,0.8)); }
            13%, 32% { transform: translate(0, 0); filter: drop-shadow(1px 0 0 rgba(255,0,255,0.4)) drop-shadow(-1px 0 0 rgba(0,255,255,0.4)); }
            /* Burst 2 */
            33%, 45% { transform: translate(2px, -1px); filter: drop-shadow(2.5px 0 0 rgba(255,0,255,0.7)) drop-shadow(-2.5px 0 0 rgba(0,255,255,0.7)); }
            37%, 41% { transform: translate(-2px, 1.2px); filter: drop-shadow(3px 0 0 rgba(255,0,255,0.8)) drop-shadow(-3px 0 0 rgba(0,255,255,0.8)); }
            46%, 65% { transform: translate(0, 0); filter: drop-shadow(1px 0 0 rgba(255,0,255,0.3)) drop-shadow(-1px 0 0 rgba(0,255,255,0.3)); }
            /* Burst 3 */
            66%, 78% { transform: translate(-1px, 0.8px); filter: drop-shadow(4px 0 0 rgba(255,0,255,0.8)) drop-shadow(-4px 0 0 rgba(0,255,255,0.8)); }
            70%, 74% { transform: translate(1px, -0.8px); filter: drop-shadow(2px 0 0 rgba(255,0,255,0.7)) drop-shadow(-2px 0 0 rgba(0,255,255,0.7)); }
            79%, 100% { transform: translate(0, 0); filter: drop-shadow(1.5px 0 0 rgba(255,0,255,0.5)) drop-shadow(-1.5px 0 0 rgba(0,255,255,0.5)); }
          }
          @keyframes line-jitter-retro {
            /* Burst 1 */
            0%, 12% { transform: translate(-1px, 0.5px); filter: drop-shadow(1.2px 0 0 rgba(139,38,29,0.3)); }
            13%, 32% { transform: translate(0, 0); filter: drop-shadow(1px 0 0 rgba(139,38,29,0.2)); }
            /* Burst 2 */
            33%, 45% { transform: translate(1.5px, -1px); filter: drop-shadow(-1.8px 0 0 rgba(139,38,29,0.5)); }
            46%, 65% { transform: translate(0, 0); filter: drop-shadow(1px 0 0 rgba(139,38,29,0.2)); }
            /* Burst 3 */
            66%, 78% { transform: translate(-1.2px, 0.8px); filter: drop-shadow(1.5px 0 0 rgba(139,38,29,0.4)); }
            79%, 100% { transform: translate(0, 0); filter: drop-shadow(1px 0 0 rgba(139,38,29,0.3)); }
          }
          .line-glitch-active {
            animation: line-rgb-split 0.45s ease-in-out infinite, line-glitch-clip 3s step-end infinite;
            animation-delay: 0.3s;
          }
          .line-jitter-active {
            animation: line-jitter-dispersion 1s linear 1 forwards;
          }
          .line-jitter-retro-active {
            animation: line-jitter-retro 1s linear 1 forwards;
          }
        `}
      </style>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" 
           className="w-full h-full overflow-visible drop-shadow-sm transition-all duration-700">
        
        {/* Background thin trace */}
        <path d={`M 0 ${midY} L 1000 ${midY}`} stroke={dimmedColor} strokeWidth={0.5} strokeOpacity={0.4} strokeDasharray="4 4" fill="none" />

        {/* The Animated Heartbeat Segments */}
        {nodes.map((_, i) => (
          <path 
            key={`seg-${i}`}
            d={getSegmentPath(i)}
            stroke={color}
            strokeWidth={0.35}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] 
              ${(isTitleHovered && !isRetro) ? 'line-glitch-active' : ''} 
              ${(!isTitleHovered && glitchActiveSegments[i]) ? (isRetro ? 'line-jitter-retro-active' : 'line-jitter-active') : ''}`}
            style={{ 
              transitionProperty: 'd', 
              opacity: 0.8,
              transitionDelay: (isTitleHovered && hoveredIndex === -1) ? `${RANDOM_DELAYS[i]}s` : '0s',
              animationDelay: (isTitleHovered && hoveredIndex === -1) ? `${RANDOM_DELAYS[i] + 0.3}s` : '0.3s'
            }}
          />
        ))}

        {/* Ghost Line (Secondary Trace) - Even thinner */}
        {nodes.map((_, i) => (
          <path 
            key={`ghost-seg-${i}`}
            d={getSegmentPath(i)}
            stroke={color}
            strokeWidth={0.2}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)] 
              ${(isTitleHovered && !isRetro) ? 'line-glitch-active' : ''}
              ${(!isTitleHovered && glitchActiveSegments[i]) ? (isRetro ? 'line-jitter-retro-active' : 'line-jitter-active') : ''}`}
            style={{ 
              transitionProperty: 'd', 
              opacity: isRetro ? 0.15 : 0.08, 
              filter: 'blur(1px)', 
              transform: 'translateY(1px)',
              transitionDelay: (isTitleHovered && hoveredIndex === -1) ? `${RANDOM_DELAYS[i] + 0.15}s` : '0s',
              animationDelay: (isTitleHovered && hoveredIndex === -1) ? `${RANDOM_DELAYS[i] + 0.45}s` : '0.45s'
            }}
          />
        ))}

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
          <g key={`f-${i}`} transform={`translate(${nx}, ${midY - 45})`} className="transition-all duration-1000" style={{ opacity: (hoveredIndex === i || (isTitleHovered && !isRetro)) ? 1 : 0.3 }}>
            <line x1={0} y1={-10} x2={0} y2={10} stroke={dimmedColor} strokeWidth={0.5} />
            <line x1={-5} y1={0} x2={5} y2={0} stroke={dimmedColor} strokeWidth={0.5} />
            <line x1={-15} y1={5} x2={15} y2={5} stroke={dimmedColor} strokeWidth={0.3} strokeDasharray="1 3" />
          </g>
        ))}
      </svg>
    </div>
  );
};
