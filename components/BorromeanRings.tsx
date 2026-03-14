import React from 'react';
import { NarrativeFieldState, BlueprintLanguage, DriverType } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface BorromeanRingsProps {
    fieldState?: NarrativeFieldState;
    lang?: BlueprintLanguage;
    driverType?: DriverType;
    opacity?: number;
    centered?: boolean;
    isHomepage?: boolean;
}

export const BorromeanRings: React.FC<BorromeanRingsProps> = ({
    fieldState = {},
    lang = 'CN',
    driverType,
    opacity = 1.0,
    centered = true,
    isHomepage = false
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const strokeColor = isRetro ? 'rgba(139, 38, 29, 0.4)' : 'rgba(255, 255, 255, 0.45)';
    const strokeColorHigh = isRetro ? 'rgba(139, 38, 29, 0.7)' : 'rgba(255, 255, 255, 0.8)';
    const textColor = isRetro ? '#5D2E2B' : '#FFFFFF';

    // Premium themed palette — Retro Primaries (Red, Gold, Blue) for a classic authoritative feel.
    // Differentiated for high visibility on parchment background.
    // Premium themed palette — Desaturated/Atmospheric
    const ringHex = {
        real: isRetro ? '#82302A' : 'rgba(130, 160, 190, 0.6)',       // Desaturated red / Ghostly Blue
        symbolic: isRetro ? '#7A5E20' : 'rgba(180, 160, 120, 0.6)',   // Muted Ochre / Dark Gold
        imaginary: isRetro ? '#2A3C51' : 'rgba(100, 130, 160, 0.6)',  // Deep Navy / Deep Cyan
        sinthome: isRetro ? '#2A2A2A' : 'rgba(255, 255, 255, 0.3)',   // Charcoal / Ghost White
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
        ? "absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        : "absolute inset-y-0 right-0 w-[150vw] md:w-[80vw] lg:w-[1000px] flex items-center justify-center pointer-events-none z-0 overflow-visible translate-x-[15%]";

    const innerContainerClass = centered
        ? "relative w-full h-full max-w-[1400px] max-h-[1400px] flex items-center justify-center"
        : "relative w-full h-full max-w-[1000px] max-h-[1000px] flex items-center justify-center";

    return (
        <div className={containerClass} style={{ opacity }}>
            <div className={innerContainerClass} style={centered ? { transform: 'scale(1.0)', transformOrigin: 'center' } : {}}>
                <style>{`
                    svg circle, svg path, svg text, svg stop, svg rect, svg line, svg polygon {
                        transition: stroke 1s ease-in-out, fill 1s ease-in-out, stroke-opacity 1s ease-in-out, stop-color 1s ease-in-out, stop-opacity 1s ease-in-out;
                    }
                `}</style>

                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible pointer-events-auto"
                >
                    <defs>
                        <path id="formulaOuterPath" d="M 5,100 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0" />
                        <path id="realPathUp"    d="M 66,75    a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="symPathUp"     d="M 46,110   a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="imgPathUp"     d="M 86,110   a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="sinthomePathUp" d="M 58,100   a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
                        <path id="outerPath"     d="M 20,100   a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                    </defs>

                    {/* ═══ OUTER OBSERVATORY RINGS — rotate around (100,100) ═══ */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="360 100 100" dur="400s" repeatCount="indefinite" />

                        {/* Outer precision boundary */}
                        <circle cx="100" cy="100" r="95" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.15" : "0.05"} strokeDasharray="0.5 2" />
                        <circle cx="100" cy="100" r="92" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.2" : "0.1"} strokeDasharray="4 2" />
                        <circle cx="100" cy="100" r="90" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.15" : "0.05"} />
                        
                        {/* Inner boundary */}
                        <circle cx="100" cy="100" r="80" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.3" : "0.15"} />
                        <circle cx="100" cy="100" r="78" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.15" : "0.05"} strokeDasharray="1 4" />

                        {/* Rotational anchor points */}
                        <rect x="99" y="4.5" width="2" height="2" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} transform="rotate(45 100 5.5)" />
                        <rect x="99" y="193.5" width="2" height="2" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} transform="rotate(45 100 194.5)" />

                        <text fill={textColor} fontSize="2.2" fontFamily="'Inter', monospace"
                              fontWeight={isRetro ? "400" : "300"} letterSpacing="0.6" className="uppercase" textLength="280" opacity={isRetro ? "0.6" : "0.3"}>
                            <textPath href="#outerPath" startOffset="5%" textAnchor="start">T.BORROMEAN // RSI_NODE</textPath>
                            <textPath href="#outerPath" startOffset="45%" textAnchor="middle">OBSERVATORY_CORE</textPath>
                            <textPath href="#outerPath" startOffset="85%" textAnchor="end">SYS.ACTIVE // REV.2</textPath>
                        </text>
                    </g>

                    {/* Counter-rotating inner belt (Data stream) */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="-360 100 100" dur="200s" repeatCount="indefinite" />
                        <circle cx="100" cy="100" r="84" fill="none" stroke={strokeColor}
                            strokeWidth={isRetro ? "1.2" : "0.8"} strokeOpacity={isRetro ? "0.2" : "0.1"} strokeDasharray="2 12" />
                        <circle cx="100" cy="100" r="84" fill="none" stroke={strokeColorHigh}
                            strokeWidth={isRetro ? "0.3" : "0.15"} strokeDasharray="0.1 8" />
                    </g>

                    {/* Formula text ring (Stream of consciousness / data string) */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="360 100 100" dur="200s" repeatCount="indefinite" />
                        <text fill={strokeColorHigh} fontSize="1.8" fontFamily="monospace" letterSpacing="0.6" opacity={isRetro ? "0.4" : "0.2"}>
                            <textPath href="#formulaOuterPath" startOffset="0%">
                                $ » a » S(A) // DRV:&gt; // OBJ:a // ALG: M0|M1|M2|M3
                            </textPath>
                            <textPath href="#formulaOuterPath" startOffset="33%">
                                $ » a » S(A) // DRV:&gt; // OBJ:a // ALG: M0|M1|M2|M3
                            </textPath>
                            <textPath href="#formulaOuterPath" startOffset="66%">
                                $ » a » S(A) // DRV:&gt; // OBJ:a // ALG: M0|M1|M2|M3
                            </textPath>
                        </text>
                    </g>

                    {/* Tick marks (Precision scales) */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 100 100" to="-360 100 100" dur="260s" repeatCount="indefinite" />
                        <circle cx="100" cy="100" r="75" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.15" : "0.05"} strokeDasharray="1 3" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.2" : "0.1"} />
                        
                        {/* Crosshair coordinate markers */}
                        <path d="M 100,20 L 100,30 M 100,170 L 100,180 M 20,100 L 30,100 M 170,100 L 180,100" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.3" : "0.15"} />
                        <path d="M 98,25 L 102,25 M 98,175 L 102,175 M 25,98 L 25,102 M 175,98 L 175,102" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} />
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
                        {/* Guide triangle / Grid references */}
                        <polygon points="100,75 80,110 120,110"
                            fill="none" stroke={strokeColor} strokeWidth="0.1" strokeDasharray="1 2" />
                            
                        {/* Center precise crosshair extending outwards */}
                        <line x1="50" y1="100" x2="150" y2="100" stroke={strokeColorHigh} strokeWidth="0.05" strokeDasharray="0.5 1.5" />
                        <line x1="100" y1="50" x2="100" y2="150" stroke={strokeColorHigh} strokeWidth="0.05" strokeDasharray="0.5 1.5" />

                        {/* R — THE REAL (center 100, 75) */}
                        <circle cx="100" cy="75" r="30" fill="none"
                            stroke={ringHex.real} strokeWidth={isRetro ? "0.5" : "0.25"} strokeDasharray={isRetro ? "6 1.5" : "4 1"} />
                        <rect x="99.2" y="44.2" width="1.6" height="1.6" fill={ringHex.real} transform="rotate(45 100 45)" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 100 75" to="360 100 75" dur="60s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.real} fontSize="2.2"
                                  fontFamily="'Inter', monospace"
                                  fontWeight={isRetro ? "600" : "300"} letterSpacing="0.2">
                                <textPath href="#realPathUp" startOffset="10%" textAnchor="middle">
                                    <tspan opacity="0.3">[SYS.Re] // </tspan><tspan opacity="0.8">{labels.m2}</tspan>
                                </textPath>
                            </text>
                            <circle cx="100" cy="45" r="0.8" fill={ringHex.real} />
                        </g>

                        {/* S — THE SYMBOLIC (center 80, 110) */}
                        <circle cx="80" cy="110" r="30" fill="none"
                            stroke={ringHex.symbolic} strokeWidth={isRetro ? "0.5" : "0.25"} />
                        <rect x="49.2" y="109.2" width="1.6" height="1.6" fill={ringHex.symbolic} transform="rotate(45 50 110)" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 80 110" to="-360 80 110" dur="70s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.symbolic} fontSize="2.2"
                                  fontFamily="'Inter', monospace"
                                  fontWeight={isRetro ? "600" : "300"} letterSpacing="0.2">
                                <textPath href="#symPathUp" startOffset="50%" textAnchor="middle">
                                    <tspan opacity="0.3">[SYS.Sy] // </tspan><tspan opacity="0.8">{labels.m1}</tspan>
                                </textPath>
                            </text>
                            <circle cx="50" cy="110" r="0.8" fill={ringHex.symbolic} />
                        </g>

                        {/* I — THE IMAGINARY (center 120, 110) */}
                        <circle cx="120" cy="110" r="30" fill="none"
                            stroke={ringHex.imaginary} strokeWidth={isRetro ? "0.5" : "0.25"} />
                        <rect x="149.2" y="109.2" width="1.6" height="1.6" fill={ringHex.imaginary} transform="rotate(45 150 110)" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 120 110" to="360 120 110" dur="55s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.imaginary} fontSize="2.2"
                                  fontFamily="'Inter', monospace"
                                  fontWeight={isRetro ? "600" : "300"} letterSpacing="0.2">
                                <textPath href="#imgPathUp" startOffset="50%" textAnchor="middle">
                                    <tspan opacity="0.3">[SYS.Im] // </tspan><tspan opacity="0.8">{labels.m3}</tspan>
                                </textPath>
                            </text>
                            <circle cx="150" cy="110" r="0.8" fill={ringHex.imaginary} />
                        </g>

                        {/* X — THE SINTHOME (center 100, 100) */}
                        <circle cx="100" cy="100" r="38" fill="none"
                            stroke={ringHex.sinthome}
                            strokeWidth={isRetro ? "0.8" : "0.3"}
                            strokeDasharray="2 4 8 4" />
                        <rect x="98.5" y="60.5" width="3" height="3" fill="none" stroke={ringHex.sinthome} strokeWidth="0.2" transform="rotate(45 100 62)" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 100 100" to="-360 100 100" dur="100s"
                                additive="sum" repeatCount="indefinite" />
                            <text fill={ringHex.sinthome}
                                  fontSize="2.4"
                                  fontFamily="'Noto Serif SC', 'Playfair Display', serif" fontWeight="bold"
                                  letterSpacing="0.3">
                                <textPath href="#sinthomePathUp" startOffset="85%" textAnchor="middle">
                                    <tspan opacity="0.4">Σ // </tspan><tspan opacity="0.85">{labels.m0}</tspan>
                                </textPath>
                            </text>
                             <circle cx="100" cy="62" r="1.5" fill="none" stroke={ringHex.sinthome} strokeWidth="0.2" />
                        </g>

                        {/* Centre precision core */}
                        <circle cx="100" cy="100" r="1.2" fill={strokeColorHigh} opacity="0.9" />
                        <circle cx="100" cy="100" r="4" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} strokeDasharray="1 1" />
                        <g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="0 100 100" to="360 100 100" dur="15s"
                                additive="sum" repeatCount="indefinite" />
                            <rect x="99.5" y="93" width="1" height="2" fill={strokeColorHigh} />
                            <rect x="99.5" y="105" width="1" height="2" fill={strokeColorHigh} />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};
