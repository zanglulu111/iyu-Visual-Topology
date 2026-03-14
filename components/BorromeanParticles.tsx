import React, { useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface BorromeanParticlesProps {
    opacity?: number;
}

export const BorromeanParticles: React.FC<BorromeanParticlesProps> = ({ opacity = 1.0 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const isRetro = theme === 'retro';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const startTime = performance.now();

        // ── Sizing: match the canvas to the actual rendered element ──
        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width  = rect.width  * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener('resize', resize);

        // Canvas center = SVG (100,100) in viewBox
        const getCX = () => canvas.getBoundingClientRect().width  / 2;
        const getCY = () => canvas.getBoundingClientRect().height / 2;

        // ────────────────────────────────────────────────────────────
        // BLACK HOLE VORTEX STARS
        // All stars orbit around the center like a galaxy / black hole
        // accretion disk — closer stars orbit faster (Keplerian),
        // creating a mesmerising spiral flow.
        // ────────────────────────────────────────────────────────────

        interface VortexStar {
            dist: number;       // orbital radius from center
            angle: number;      // current angle
            speed: number;      // angular velocity (rad/frame)
            size: number;
            baseAlpha: number;
            pulse: number;
            pulseSpeed: number;
            color: string;
            spiralDrift: number; // very slow inward spiral
        }

        // Increased star count for a rich, deep-space feel
        const STAR_COUNT = 500;
        const stars: VortexStar[] = [];

        // Color palette for stars
        const starColors = isRetro
            ? ['139,38,29', '180,120,60', '212,175,55', '160,80,40']
            : ['120,130,150', '130,140,160', '150,140,120', '140,150,140', '150,130,140'];

        for (let i = 0; i < STAR_COUNT; i++) {
            const r = 30 + Math.pow(Math.random(), 0.6) * 500;
            const baseSpeed = 0.015 / Math.sqrt(r);
            const direction = 1;

            stars.push({
                dist: r,
                angle: Math.random() * Math.PI * 2,
                speed: baseSpeed * direction * (0.4 + Math.random() * 1.4),
                size: Math.random() * (r < 100 ? 0.8 : 1.2) + 0.2, // Smaller stars
                baseAlpha: isRetro ? Math.min(0.65, Math.random() * 0.45 + 0.1) : Math.min(0.35, Math.random() * 0.2 + 0.05), // Much softer stars
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.005,
                color: starColors[Math.floor(Math.random() * starColors.length)],
                // Very subtle inward drift — "being sucked in"
                spiralDrift: Math.random() * 0.002 + 0.0003,
            });
        }

        // ── Saturn ring arc particles (around each Borromean ring) ──
        interface RingArc {
            ri: number;
            angle: number;
            speed: number;
            rOff: number;
            arcLen: number;
            size: number;
            alpha: number;
            pulse: number;
            pulseSpeed: number;
        }

        const ringColors = isRetro
            ? ['139,38,29', '212,175,55', '13,104,129', '5,84,62'] // Retro: Red, Gold, Cyan, Green
            : ['175,58,78', '184,154,61', '58,143,158', '50,138,106']; // Dark Muted: Red, Gold, Cyan, Green

        // Ring center offsets from (100,100) in viewBox, we'll convert later
        const ringOffsetsVB = [
            { dx: 0, dy: -20, r: 30 },   // Real
            { dx: -17.32, dy: 10, r: 30 },  // Symbolic
            { dx: 17.32, dy: 10, r: 30 },   // Imaginary
            { dx: 0, dy: 0, r: 38 },     // Sinthome
        ];

        const PER_RING = 40; // reduced heavily for performance
        const ringArcs: RingArc[] = [];
        for (let ri = 0; ri < 4; ri++) {
            for (let i = 0; i < PER_RING; i++) {
                ringArcs.push({
                    ri,
                    angle: Math.random() * Math.PI * 2,
                    // Tighter, slower arc orbit — hugging the ring edge
                    speed: (0.0003 + Math.random() * 0.0002) * (Math.random() > 0.5 ? 1 : -1),
                    rOff: (Math.random() - 0.5) * 4,  // Compact ±4, hugging tightly
                    arcLen: Math.random() * 0.09 + 0.03, // Shorter arcs
                    size: Math.random() * 1.6 + 0.5,
                    alpha: Math.random() * 0.5 + 0.2,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: Math.random() * 0.012 + 0.004,
                });
            }
        }

        // ── Pre-render Nebula clouds to massive boost performance ──
        // (createRadialGradient on every frame is very expensive)
        const preRenderedClouds = ringColors.map(color => {
            const size = 600;
            const off = document.createElement('canvas');
            off.width = size; off.height = size;
            const octx = off.getContext('2d');
            if (octx) {
                const g = octx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
                g.addColorStop(0, `rgba(${color}, 1)`);
                g.addColorStop(1, 'rgba(0,0,0,0)');
                octx.fillStyle = g;
                octx.fillRect(0, 0, size, size);
            }
            return off;
        });

        // ── Nebula cloud properties ──
        const clouds = Array.from({ length: 7 }).map(() => ({
            angle: Math.random() * Math.PI * 2,
            dist: Math.random() * 300 + 80,
            r: Math.random() * 150 + 80, // Slightly smaller
            colorIdx: Math.floor(Math.random() * 4),
            speed: (0.01 / (Math.random() * 200 + 100)) * (Math.random() > 0.5 ? 1 : -1), // Slower
            alpha: isRetro ? (Math.random() * 0.018 + 0.006) : (Math.random() * 0.008 + 0.002), // Muted in dark
        }));

        // ── Render ──
        const render = () => {
            const W = canvas.getBoundingClientRect().width;
            const H = canvas.getBoundingClientRect().height;
            const cx = getCX();
            const cy = getCY();

            // The SVG viewBox is 200×200, fitted into the element.
            // preserveAspectRatio default = xMidYMid meet → uses min(W/200, H/200)
            const svgScale = Math.min(W / 200, H / 200);

            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, W, H);

            ctx.globalCompositeOperation = isRetro ? 'multiply' : 'screen';

            // ─ Nebula clouds (orbit the center too) ─
            ctx.globalCompositeOperation = isRetro ? 'multiply' : 'screen';
            clouds.forEach(c => {
                c.angle += c.speed;
                const x = cx + Math.cos(c.angle) * c.dist;
                const y = cy + Math.sin(c.angle) * c.dist;
                ctx.globalAlpha = c.alpha;
                ctx.drawImage(preRenderedClouds[c.colorIdx], x - c.r, y - c.r, c.r * 2, c.r * 2);
            });
            ctx.globalAlpha = 1;

            // ─ Vortex stars ─
            stars.forEach(s => {
                s.angle += s.speed;
                s.pulse += s.pulseSpeed;

                // Gentle inward spiral
                s.dist -= s.spiralDrift;
                // When star reaches the core, respawn at outer edge
                if (s.dist < 20) {
                    s.dist = 300 + Math.random() * 250;
                    s.angle = Math.random() * Math.PI * 2;
                }

                const x = cx + Math.cos(s.angle) * s.dist;
                const y = cy + Math.sin(s.angle) * s.dist;

                const twinkle = Math.sin(s.pulse) * 0.35 + 0.65;
                const alpha = s.baseAlpha * twinkle;

                if (alpha > 0.01) {
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = `rgba(${s.color}, 1)`;
                    // Optimized: fillRect is much faster than arc for tiny stars
                    ctx.fillRect(x - s.size, y - s.size, s.size * 2, s.size * 2);
                }
            });
            ctx.globalAlpha = 1;

            // Compute topology orbit angle: 360s per full rotation (very slow)
            // Synchronized with SVG animation start time
            const elapsed = performance.now() - startTime;
            const topologyAngle = (elapsed % 360000) / 360000 * Math.PI * 2;
            const cosT = Math.cos(topologyAngle);
            const sinT = Math.sin(topologyAngle);

            // ─ Saturn ring arcs (around each Borromean ring) ─
            ringArcs.forEach(sp => {
                sp.angle += sp.speed;
                sp.pulse += sp.pulseSpeed;

                const def = ringOffsetsVB[sp.ri];
                // Rotate the ring center around (100,100)
                // Note: SVG rotation matrix is reversed relative to standard trig because y goes down
                const rotatedDx = def.dx * cosT - def.dy * sinT;
                const rotatedDy = def.dx * sinT + def.dy * cosT;

                // Convert rotated viewBox to canvas pixels
                const rcx = cx + rotatedDx * svgScale;
                const rcy = cy + rotatedDy * svgScale;
                const rr  = (def.r + sp.rOff) * svgScale;

                ctx.beginPath();
                ctx.arc(rcx, rcy, rr, sp.angle - sp.arcLen / 2, sp.angle + sp.arcLen / 2);
                const a = sp.alpha * (Math.sin(sp.pulse) * 0.3 + 0.7);
                ctx.strokeStyle = `rgba(${ringColors[sp.ri]}, ${Math.max(0, a)})`;
                ctx.lineWidth = sp.size;
                ctx.lineCap = 'round';
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, [isRetro, theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                opacity,
                mixBlendMode: isRetro ? 'multiply' : 'screen',
                transition: 'opacity 0.5s ease-in-out',
            }}
        />
    );
};
