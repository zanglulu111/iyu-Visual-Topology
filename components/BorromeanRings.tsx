import React, { useEffect, useState } from 'react';
import { NarrativeFieldState, BlueprintLanguage, DriverType } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface BorromeanRingsProps {
    fieldState?: NarrativeFieldState;
    lang?: BlueprintLanguage;
    driverType?: DriverType;
    opacity?: number;
    centered?: boolean;
    isHomepage?: boolean;
    vivid?: boolean;
    animated?: boolean;
    driverAccentMode?: boolean;
}

export const BorromeanRings: React.FC<BorromeanRingsProps> = ({
    fieldState = {},
    lang = 'CN',
    driverType,
    opacity = 1.0,
    centered = true,
    isHomepage = false,
    vivid = false,
    animated = true,
    driverAccentMode = false
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const [canAnimate, setCanAnimate] = useState(animated);
    const [animationCycle, setAnimationCycle] = useState(0);

    useEffect(() => {
        const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
        const update = () => {
            const nextCanAnimate = animated && !document.hidden && !(media?.matches ?? false);
            setCanAnimate(nextCanAnimate);

            if (nextCanAnimate) {
                window.requestAnimationFrame(() => setAnimationCycle(prev => prev + 1));
            }
        };

        update();
        document.addEventListener('visibilitychange', update);
        window.addEventListener('pageshow', update);
        media?.addEventListener?.('change', update);

        return () => {
            document.removeEventListener('visibilitychange', update);
            window.removeEventListener('pageshow', update);
            media?.removeEventListener?.('change', update);
        };
    }, [animated]);

    const rotate = (
        from: string,
        to: string,
        dur: string,
        center = '100 100',
        additive?: 'sum'
    ) => canAnimate ? (
        <animateTransform
            attributeName="transform"
            type="rotate"
            from={`${from} ${center}`}
            to={`${to} ${center}`}
            dur={dur}
            additive={additive}
            repeatCount="indefinite"
        />
    ) : null;
    const strokeColor = isRetro ? (vivid ? 'rgba(139, 38, 29, 0.85)' : 'rgba(139, 38, 29, 0.75)') : (vivid ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)');
    const strokeColorHigh = isRetro ? (vivid ? 'rgba(139, 38, 29, 1.0)' : 'rgba(139, 38, 29, 0.9)') : (vivid ? 'rgba(255, 255, 255, 1.0)' : 'rgba(255, 255, 255, 0.95)');
    const textColor = isRetro ? '#5D2E2B' : '#FFFFFF';

    // Premium themed palette — Desaturated or Vivid or Homepage Faint (Based on RSI)
    // Premium themed palette — Desaturated or Vivid or Homepage Faint (Based on RSI)
    const useNarrativeAccent = driverAccentMode && driverType === DriverType.NARRATIVE;
    const ringHex = isHomepage ? {
        // More visible RSI-based palette for Homepage gateway/background
        real: isRetro ? 'rgba(139, 38, 29, 0.45)' : 'rgba(245, 158, 11, 0.55)',       // Real (Amber-based)
        symbolic: isRetro ? 'rgba(156, 130, 74, 0.75)' : 'rgba(6, 182, 212, 0.5)',   // Symbolic (Cyan-based)
        imaginary: isRetro ? 'rgba(106, 125, 106, 0.75)' : 'rgba(244, 63, 94, 0.5)',  // Imaginary (Rose-based)
        sinthome: isRetro ? 'rgba(80, 102, 120, 0.7)' : 'rgba(16, 185, 129, 0.45)',   // Sinthome (Emerald-based)
    } : (driverType || vivid) ? {
        // Vivid mode or Driver-based mode for Topology View
        real: isRetro ? '#A3483E' : (useNarrativeAccent ? '#FF4F3F' : driverType === DriverType.COMMERCIAL ? '#06B6D4' : driverType === DriverType.EXPERIMENTAL ? '#D946EF' : driverType === DriverType.CONCEPT_DESIGN ? '#F97316' : driverType === DriverType.AESTHETIC ? '#8B5CF6' : driverType === DriverType.TRAILER ? '#F97316' : driverType === DriverType.SUTURE ? '#22D3EE' : '#F59E0B'),
        symbolic: isRetro ? '#9C824A' : (useNarrativeAccent ? '#FF8175' : driverType === DriverType.COMMERCIAL ? '#22D3EE' : driverType === DriverType.EXPERIMENTAL ? '#F0ABFC' : driverType === DriverType.CONCEPT_DESIGN ? '#FB923C' : driverType === DriverType.AESTHETIC ? '#A78BFA' : driverType === DriverType.TRAILER ? '#FB923C' : driverType === DriverType.SUTURE ? '#67E8F9' : '#06B6D4'),
        imaginary: isRetro ? '#6A7D6A' : (useNarrativeAccent ? '#D63D32' : driverType === DriverType.COMMERCIAL ? '#0891B2' : driverType === DriverType.EXPERIMENTAL ? '#A21CAF' : driverType === DriverType.CONCEPT_DESIGN ? '#EA580C' : driverType === DriverType.AESTHETIC ? '#6D28D9' : driverType === DriverType.TRAILER ? '#EA580C' : driverType === DriverType.SUTURE ? '#0E7490' : '#F43F5E'),
        sinthome: isRetro ? '#506678' : (useNarrativeAccent ? '#8B1E17' : driverType === DriverType.COMMERCIAL ? '#0E7490' : driverType === DriverType.EXPERIMENTAL ? '#86198F' : driverType === DriverType.CONCEPT_DESIGN ? '#C2410C' : driverType === DriverType.AESTHETIC ? '#4C1D95' : driverType === DriverType.TRAILER ? '#C2410C' : driverType === DriverType.SUTURE ? '#06B6D4' : '#10B981'),
    } : {
        // Default mode for other views
        real: isRetro ? '#6D4340' : 'rgba(130, 160, 190, 0.6)',
        symbolic: isRetro ? '#5C543D' : 'rgba(180, 160, 120, 0.6)',
        imaginary: isRetro ? '#343B43' : 'rgba(100, 130, 160, 0.6)',
        sinthome: isRetro ? '#333333' : 'rgba(255, 255, 255, 0.3)',
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
        m0: (vivid || driverType === DriverType.SUTURE) ? (driverType === DriverType.SUTURE ? "SUTURE 缝合" : "SINTHOME 圣状") : getTag('engine_m0', '圣状'),
        m1: (vivid || driverType === DriverType.SUTURE) ? (driverType === DriverType.SUTURE ? "OBJECT a 对象a" : "SYMBOLIC 象征界") : getTag('engine_m1', '象征界'),
        m2: (vivid || driverType === DriverType.SUTURE) ? (driverType === DriverType.SUTURE ? "DESIRE 欲望" : "REAL 实在界") : getTag('engine_m2', '实在界'),
        m3: (vivid || driverType === DriverType.SUTURE) ? (driverType === DriverType.SUTURE ? "LACK 匮乏" : "IMAGINARY 想象界") : getTag('engine_m3', '想象界'),
    };

    const containerClass = centered
        ? "absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        : "absolute inset-y-0 right-0 w-[150vw] md:w-[80vw] lg:w-[1000px] flex items-center justify-center pointer-events-none z-0 overflow-visible translate-x-[15%]";

    const innerContainerClass = centered
        ? "relative w-full h-full max-w-[1400px] max-h-[1400px] flex items-center justify-center"
        : "relative w-full h-full max-w-[1000px] max-h-[1000px] flex items-center justify-center";

    const ringStrokeWidth = isRetro ? (vivid ? "0.8" : "0.5") : (vivid ? "0.5" : "0.25");
    const ringOpacity = vivid ? (isRetro ? 0.9 : 0.9) : 1;

    return (
        <div className={containerClass} style={{ opacity }}>
            <div className={innerContainerClass} style={centered ? { transform: 'scale(1.0)', transformOrigin: 'center' } : {}}>
                <style>{`
                    .borromean-svg-root :where(circle, path, line, polygon, rect, text) {
                        transition: stroke 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                                    fill 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                                    stroke-opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                                    stop-color 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                `}</style>

                <svg
                    key={animationCycle}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible pointer-events-auto borromean-svg-root"
                    shapeRendering="geometricPrecision"
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
                        {rotate('0', '360', '400s')}

                        <circle cx="100" cy="100" r="95" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.15" : "0.05"} strokeDasharray="0.5 2" />
                        <circle cx="100" cy="100" r="92" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.2" : "0.1"} strokeDasharray="4 2" />
                        <circle cx="100" cy="100" r="90" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.15" : "0.05"} />

                        <circle cx="100" cy="100" r="80" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.3" : "0.15"} />
                        <circle cx="100" cy="100" r="78" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.15" : "0.05"} strokeDasharray="1 4" />

                        <rect x="99" y="4.5" width="2" height="2" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} transform="rotate(45 100 5.5)" />
                        <rect x="99" y="193.5" width="2" height="2" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} transform="rotate(45 100 194.5)" />

                        <text fill={textColor} fontSize="2.2" fontFamily="'Inter', monospace"
                               fontWeight={isRetro ? "700" : "300"} letterSpacing="0.6" className="uppercase" textLength="280" opacity={vivid ? "0.9" : (isRetro ? "0.8" : "0.3")}>
                            <textPath href="#outerPath" startOffset="5%" textAnchor="start">
                                {driverType === DriverType.SUTURE ? "SUTURE_OPERATOR // VIDEO_NODE" : "T.BORROMEAN // RSI_NODE"}
                            </textPath>
                            <textPath href="#outerPath" startOffset="45%" textAnchor="middle">
                                {driverType === DriverType.SUTURE ? "CINEMATIC_TOPOLOGY" : "OBSERVATORY_CORE"}
                            </textPath>
                            <textPath href="#outerPath" startOffset="85%" textAnchor="end">
                                {driverType === DriverType.SUTURE ? "SYSTEM.SUTURE // REV.4" : "SYS.ACTIVE // REV.2"}
                            </textPath>
                        </text>
                    </g>

                    <g>
                        {rotate('0', '-360', '200s')}
                        <circle cx="100" cy="100" r="84" fill="none" stroke={strokeColor}
                            strokeWidth={isRetro ? "1.2" : "0.8"} strokeOpacity={isRetro ? "0.2" : "0.1"} strokeDasharray="2 12" />
                        <circle cx="100" cy="100" r="84" fill="none" stroke={strokeColorHigh}
                            strokeWidth={isRetro ? "0.3" : "0.15"} strokeDasharray="0.1 8" />
                    </g>

                    <g>
                        {rotate('0', '360', '200s')}
                        <text fill={strokeColorHigh} fontSize="1.8" fontFamily="monospace" letterSpacing="0.6" opacity={vivid ? "0.8" : (isRetro ? "0.6" : "0.2")}>
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

                    <g>
                        {rotate('0', '-360', '260s')}
                        <circle cx="100" cy="100" r="75" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.15" : "0.05"} strokeDasharray="1 3" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke={strokeColor} strokeWidth={isRetro ? "0.2" : "0.1"} />

                        <path d="M 100,20 L 100,30 M 100,170 L 100,180 M 20,100 L 30,100 M 170,100 L 180,100" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.3" : "0.15"} />
                        <path d="M 98,25 L 102,25 M 98,175 L 102,175 M 25,98 L 25,102 M 175,98 L 175,102" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} />
                    </g>

                    <g style={{ opacity: ringOpacity }}>
                        {rotate('0', '360', '120s')}
                        <polygon points="100,75 80,110 120,110"
                            fill="none" stroke={strokeColor} strokeWidth="0.1" strokeDasharray="1 2" />

                        <line x1="50" y1="100" x2="150" y2="100" stroke={strokeColorHigh} strokeWidth="0.05" strokeDasharray="0.5 1.5" />
                        <line x1="100" y1="50" x2="100" y2="150" stroke={strokeColorHigh} strokeWidth="0.05" strokeDasharray="0.5 1.5" />

                        {/* R — THE REAL */}
                        <circle cx="100" cy="75" r="30" fill="none"
                            stroke={ringHex.real} strokeWidth={ringStrokeWidth} strokeDasharray={vivid ? "none" : (isRetro ? "6 1.5" : "4 1")} />
                        <rect x="99.2" y="44.2" width="1.6" height="1.6" fill={ringHex.real} transform="rotate(45 100 45)" />
                        <g>
                            {rotate('0', '360', '40s', '100 75', 'sum')}
                            <text fill={ringHex.real} fontSize="3.0"
                                  fontFamily="'Inter', 'Noto Serif SC', sans-serif"
                                  fontWeight={isRetro ? "900" : "600"} letterSpacing="0.05">
                                <textPath href="#realPathUp" startOffset="50%" textAnchor="middle">
                                    {labels.m2}
                                </textPath>
                            </text>
                            <circle cx="100" cy="45" r="0.8" fill={ringHex.real} />
                        </g>

                        {/* S — THE SYMBOLIC */}
                        <circle cx="80" cy="110" r="30" fill="none"
                            stroke={ringHex.symbolic} strokeWidth={ringStrokeWidth} />
                        <rect x="49.2" y="109.2" width="1.6" height="1.6" fill={ringHex.symbolic} transform="rotate(45 50 110)" />
                        <g>
                            {rotate('0', '-360', '50s', '80 110', 'sum')}
                            <text fill={ringHex.symbolic} fontSize="3.0"
                                  fontFamily="'Inter', 'Noto Serif SC', sans-serif"
                                  fontWeight={isRetro ? "900" : "600"} letterSpacing="0.05">
                                <textPath href="#symPathUp" startOffset="50%" textAnchor="middle">
                                    {labels.m1}
                                </textPath>
                            </text>
                            <circle cx="50" cy="110" r="0.8" fill={ringHex.symbolic} />
                        </g>

                        {/* I — THE IMAGINARY */}
                        <circle cx="120" cy="110" r="30" fill="none"
                            stroke={ringHex.imaginary} strokeWidth={ringStrokeWidth} />
                        <rect x="149.2" y="109.2" width="1.6" height="1.6" fill={ringHex.imaginary} transform="rotate(45 150 110)" />
                        <g>
                            {rotate('0', '360', '35s', '120 110', 'sum')}
                            <text fill={ringHex.imaginary} fontSize="3.0"
                                  fontFamily="'Inter', 'Noto Serif SC', sans-serif"
                                  fontWeight={isRetro ? "900" : "600"} letterSpacing="0.05">
                                <textPath href="#imgPathUp" startOffset="50%" textAnchor="middle">
                                    {labels.m3}
                                </textPath>
                            </text>
                            <circle cx="150" cy="110" r="0.8" fill={ringHex.imaginary} />
                        </g>

                        {/* X — THE SINTHOME */}
                        <circle cx="100" cy="100" r="38" fill="none"
                            stroke={ringHex.sinthome}
                            strokeWidth={isRetro ? (vivid ? "1.2" : "0.8") : (vivid ? "0.6" : "0.3")}
                            strokeDasharray={vivid ? "none" : "2 4 8 4"} />
                        <rect x="98.5" y="60.5" width="3" height="3" fill="none" stroke={ringHex.sinthome} strokeWidth="0.2" transform="rotate(45 100 62)" />
                        <g>
                            {rotate('0', '-360', '80s', '100 100', 'sum')}
                            <text fill={ringHex.sinthome}
                                  fontSize="3.0"
                                  fontFamily="'Noto Serif SC', 'Playfair Display', serif" fontWeight="black"
                                  letterSpacing="0.1">
                                <textPath href="#sinthomePathUp" startOffset="85%" textAnchor="middle">
                                    {labels.m0}
                                </textPath>
                            </text>
                            <circle cx="100" cy="62" r="1.5" fill="none" stroke={ringHex.sinthome} strokeWidth="0.2" />
                        </g>

                        <circle cx="100" cy="100" r="1.2" fill={strokeColorHigh} opacity="0.3" />
                        <circle cx="100" cy="100" r="4" fill="none" stroke={strokeColorHigh} strokeWidth={isRetro ? "0.2" : "0.1"} strokeDasharray="1 1" opacity="0.3" />
                        <g opacity="0.3">
                            {rotate('0', '360', '15s', '100 100', 'sum')}
                            <rect x="99.5" y="93" width="1" height="2" fill={strokeColorHigh} />
                            <rect x="99.5" y="105" width="1" height="2" fill={strokeColorHigh} />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};
