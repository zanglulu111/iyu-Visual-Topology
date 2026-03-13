import React from 'react';
import { NarrativeFieldState, BlueprintLanguage, DriverType } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { BorromeanParticles } from './BorromeanParticles';

interface BorromeanRingsProps {
    fieldState?: NarrativeFieldState;
    lang?: BlueprintLanguage;
    driverType?: DriverType;
    opacity?: number;
    centered?: boolean;
}

export const BorromeanRings: React.FC<BorromeanRingsProps> = ({
    fieldState = {},
    lang = 'CN',
    driverType,
    opacity = 1.0,
    centered = true
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const strokeColor = isRetro ? 'rgba(139, 38, 29, 0.4)' : 'rgba(255, 255, 255, 0.45)';
    const strokeColorHigh = isRetro ? 'rgba(139, 38, 29, 0.7)' : 'rgba(255, 255, 255, 0.8)';
    const textColor = isRetro ? '#8B261D' : '#FFFFFF';

    const ringHex = {
        real: isRetro ? '#8B261D' : '#FF2D55',
        symbolic: isRetro ? '#D4AF37' : '#FFD700',
        imaginary: isRetro ? '#0D6881' : '#00FFFF',
        sinthome: isRetro ? '#05543E' : '#00FF7F',
    };

    const getTag = (id: string, placeholder: string) => {
        const val = fieldState[id];
        if (Array.isArray(val) && val.length > 0) {
            const text = val[0];
            return lang === 'EN' ? (text.match(/\((.*?)\)/)?.[1] || text) : text.split('(')[0].trim();
        }
        return placeholder;
    };

    const labels = {
        m0: getTag('engine_m0', '圣状'),
        m1: getTag('engine_m1', '象征界'),
        m2: getTag('engine_m2', '实在界'),
        m3: getTag('engine_m3', '想象界'),
    };

    const containerClass = centered
        ? "absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-visible"
        : "absolute inset-y-0 right-0 w-[150vw] md:w-[80vw] lg:w-[1000px] flex items-center justify-center pointer-events-none z-0 overflow-visible translate-x-[15%]";

    const innerContainerClass = centered
        ? "relative w-full h-full max-w-[1800px] max-h-[1800px] flex items-center justify-center"
        : "relative w-full h-full max-w-[1000px] max-h-[1000px] flex items-center justify-center";

    /*
        ╔════════════════════════════════════════════════════════════════╗
        ║  ALL rotations use SVG-native <animateTransform>.            ║
        ║  This operates in viewBox coordinates (200×200) and is       ║
        ║  completely immune to CSS sizing / aspect-ratio issues.      ║
        ║  No CSS transform-origin is used anywhere.                   ║
        ╚════════════════════════════════════════════════════════════════╝
    */

    return (
        <div className={containerClass} style={{ opacity }}>
            <div className={innerContainerClass} style={centered ? { transform: 'scale(1.05)', transformOrigin: 'center' } : {}}>
                <style>{`
                    svg circle, svg path, svg text, svg stop {
                        transition: stroke 1s ease-in-out, fill 1s ease-in-out, stroke-opacity 1s ease-in-out, stop-color 1s ease-in-out, stop-opacity 1s ease-in-out;
                    }
                `}</style>
                <BorromeanParticles opacity={opacity * 0.9} />

                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible pointer-events-auto"
                >
                    <defs>
                        <filter id="glow-real" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-symbolic" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-imaginary" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-sinthome" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <radialGradient id="core-real" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={ringHex.real} stopOpacity={isRetro ? 0.1 : 0.15} />
                            <stop offset="70%" stopColor={ringHex.real} stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="core-symbolic" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={ringHex.symbolic} stopOpacity={isRetro ? 0.1 : 0.15} />
                            <stop offset="70%" stopColor={ringHex.symbolic} stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="core-imaginary" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={ringHex.imaginary} stopOpacity={isRetro ? 0.1 : 0.15} />
                            <stop offset="70%" stopColor={ringHex.imaginary} stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="core-sinthome" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={ringHex.sinthome} stopOpacity={isRetro ? 0.1 : 0.15} />
                            <stop offset="70%" stopColor={ringHex.sinthome} stopOpacity="0" />
                        </radialGradient>

                        <path id="formulaOuterPath" d="M 5,100 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0" />
                        <path id="realPathUp"    d="M 66,80    a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="symPathUp"     d="M 48.68,110 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="imgPathUp"     d="M 83.32,110 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="sinthomePathUp" d="M 58,100   a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
                        <path id="outerPath"     d="M 20,100   a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                    </defs>

                    {/* ═══ OUTER OBSERVATORY RINGS — rotate around (100,100) ═══ */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="360 100 100" dur="400s" repeatCount="indefinite" />

                        <circle cx="100" cy="100" r="95" fill="none" stroke={strokeColorHigh} strokeWidth="0.08" strokeDasharray="0.8 4" />
                        <circle cx="100" cy="100" r="92" fill="none" stroke={strokeColor} strokeWidth="1.2" strokeOpacity="0.15" />
                        <circle cx="100" cy="100" r="90" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                        <circle cx="100" cy="100" r="88" fill="none" stroke={strokeColorHigh} strokeWidth="0.3" strokeDasharray="0.8 3" />

                        <circle cx="100" cy="100" r="80" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                        <circle cx="100" cy="100" r="78" fill="none" stroke={strokeColorHigh} strokeWidth="0.2" strokeDasharray="1.5 12" />

                        <text fill={textColor} fontSize="3.0" fontFamily="'Inter', sans-serif"
                              fontWeight="bold" letterSpacing="0.4" className="uppercase opacity-80">
                            <textPath href="#outerPath" startOffset="5%"  textAnchor="start">Topologie Borroméenne</textPath>
                            <textPath href="#outerPath" startOffset="45%" textAnchor="middle">Nœud R.S.I. + Σ</textPath>
                            <textPath href="#outerPath" startOffset="85%" textAnchor="end">Mist Observatory</textPath>
                        </text>
                    </g>

                    {/* Counter-rotating inner belt */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="-360 100 100" dur="320s" repeatCount="indefinite" />
                        <circle cx="100" cy="100" r="84" fill="none" stroke={strokeColor}
                            strokeWidth="1.0" strokeOpacity="0.3" strokeDasharray="4 18" />
                    </g>

                    {/* Formula text ring */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="360 100 100" dur="200s" repeatCount="indefinite" />
                        <text fill={strokeColorHigh} fontSize="2.5" fontFamily="monospace" letterSpacing="0.2">
                            <textPath href="#formulaOuterPath" startOffset="0%">
                                M0:OS(Ψ) | M1:SUB($) | M2:ENC(!!) | M3:FAN(a) | M4:OTH(A) | M5:DRV(&gt;) | M6:STK(†) | M7:RES(Σ) || STORY = (M1 + M3) / M4 * M5
                            </textPath>
                            <textPath href="#formulaOuterPath" startOffset="50%">
                                M0:OS(Ψ) | M1:SUB($) | M2:ENC(!!) | M3:FAN(a) | M4:OTH(A) | M5:DRV(&gt;) | M6:STK(†) | M7:RES(Σ) || STORY = (M1 + M3) / M4 * M5
                            </textPath>
                        </text>
                    </g>

                    {/* Tick marks */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="-360 100 100" dur="260s" repeatCount="indefinite" />
                        <circle cx="100" cy="100" r="75" fill="none" stroke={strokeColorHigh} strokeWidth="0.15" strokeDasharray="1.5 5" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke={strokeColor} strokeWidth="0.15" />
                        <line x1="100" y1="25"  x2="100" y2="28"  stroke={strokeColorHigh} strokeWidth="0.3" />
                        <line x1="100" y1="172" x2="100" y2="175" stroke={strokeColorHigh} strokeWidth="0.3" />
                        <line x1="25"  y1="100" x2="28"  y2="100" stroke={strokeColorHigh} strokeWidth="0.3" />
                        <line x1="172" y1="100" x2="175" y2="100" stroke={strokeColorHigh} strokeWidth="0.3" />
                    </g>

                    {/* ═══ BORROMEAN TOPOLOGY CENTER ═══
                         The entire topology group orbits (100,100) slowly.
                         Each ring's label text has its own independent rotation
                         layered on top via additive animateTransform.
                    ═══════════════════════════════════════════════════════ */}
                    <g>
                        {/* Slow planetary orbit of the whole topology around center */}
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="360 100 100" dur="360s" repeatCount="indefinite" />

                        {/* Guide triangle */}
                        <polygon points="100,80 82.68,110 117.32,110"
                            fill="none" stroke={strokeColor} strokeWidth="0.3" strokeDasharray="0.8 2" />

                        {/* R — THE REAL (center 100, 80) */}
                        <circle cx="100" cy="80" r="30" fill="none"
                            stroke={ringHex.real} strokeWidth="1.2" strokeOpacity="1.0" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 100 80" to="360 100 80" dur="60s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.real} fontSize="2.4"
                                  fontFamily="'Playfair Display', serif" fontStyle="italic"
                                  fontWeight="bold" letterSpacing="0.1">
                                <textPath href="#realPathUp" startOffset="10%" textAnchor="middle">
                                    Le Réel: {labels.m2}
                                </textPath>
                            </text>
                        </g>

                        {/* S — THE SYMBOLIC (center 82.68, 110) */}
                        <circle cx="82.68" cy="110" r="30" fill="none"
                            stroke={ringHex.symbolic} strokeWidth="1.2" strokeOpacity="1.0" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 82.68 110" to="-360 82.68 110" dur="70s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.symbolic} fontSize="2.4"
                                  fontFamily="'Playfair Display', serif" fontStyle="italic"
                                  fontWeight="bold" letterSpacing="0.1">
                                <textPath href="#symPathUp" startOffset="35%" textAnchor="middle">
                                    Le Symbolique: {labels.m1}
                                </textPath>
                            </text>
                        </g>

                        {/* I — THE IMAGINARY (center 117.32, 110) */}
                        <circle cx="117.32" cy="110" r="30" fill="none"
                            stroke={ringHex.imaginary} strokeWidth="1.2" strokeOpacity="1.0" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 117.32 110" to="360 117.32 110" dur="55s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.imaginary} fontSize="2.4"
                                  fontFamily="'Playfair Display', serif" fontStyle="italic"
                                  fontWeight="bold" letterSpacing="0.1">
                                <textPath href="#imgPathUp" startOffset="60%" textAnchor="middle">
                                    L'Imaginaire: {labels.m3}
                                </textPath>
                            </text>
                        </g>

                        {/* X — THE SINTHOME (center 100, 100) */}
                        <circle cx="100" cy="100" r="38" fill="none"
                            stroke={ringHex.sinthome}
                            strokeWidth={isRetro ? 1.4 : 1.2}
                            strokeOpacity="0.9" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 100 100" to="-360 100 100" dur="100s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.sinthome}
                                  fontSize={isRetro ? "4.2" : "3.6"}
                                  fontFamily="'Playfair Display', serif" fontWeight="bold"
                                  letterSpacing="0.2">
                                <textPath href="#sinthomePathUp" startOffset="85%" textAnchor="middle">
                                    Le Sinthome: {labels.m0}
                                </textPath>
                            </text>
                        </g>

                        {/* Centre crosshair */}
                        <circle cx="100" cy="100" r="1.2" fill="none"
                            stroke={ringHex.sinthome} strokeWidth="0.3" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 100 100" to="360 100 100" dur="22s"
                                additive="sum" repeatCount="indefinite" />
                            <circle cx="100" cy="100" r="5" fill="none"
                                stroke={strokeColorHigh} strokeWidth="0.15" strokeDasharray="0.4 2" />
                        </g>
                        <line x1="100" y1="96.5" x2="100" y2="103.5" stroke={strokeColorHigh} strokeWidth="0.15" />
                        <line x1="96.5" y1="100" x2="103.5" y2="100" stroke={strokeColorHigh} strokeWidth="0.15" />
                    </g>
                </svg>
            </div>
        </div>
    );
};
