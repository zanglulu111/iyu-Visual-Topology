import React from 'react';
import { NarrativeFieldState, BlueprintLanguage, DriverType } from '../types';
import { useTheme } from '../contexts/ThemeContext';

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
    driverType = DriverType.NARRATIVE,
    opacity = 1.0,
    centered = true
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const strokeColor = isRetro ? 'rgba(58, 53, 47, 0.45)' : 'rgba(255, 255, 255, 0.4)';
    const strokeColorHigh = isRetro ? 'rgba(58, 53, 47, 0.65)' : 'rgba(255, 255, 255, 0.6)';
    const textColor = isRetro ? '#1A1A1A' : 'rgba(255, 255, 255, 0.9)';

    // Legible colors for rings in retro mode
    const ringColors = {
        real: isRetro ? '#823B0B' : (driverType === DriverType.AESTHETIC ? 'var(--gold-primary)' : 'rgba(245, 158, 11, 0.95)'),
        realText: isRetro ? '#701A10' : (driverType === DriverType.AESTHETIC ? 'var(--gold-primary)' : 'rgba(245, 158, 11, 1.0)'),
        symbolic: isRetro ? (driverType === DriverType.NARRATIVE ? 'var(--gold-primary)' : '#0D6881') : (driverType === DriverType.NARRATIVE ? 'var(--gold-primary)' : 'rgba(6, 182, 212, 0.95)'),
        symbolicText: isRetro ? (driverType === DriverType.NARRATIVE ? 'var(--gold-primary)' : '#08556A') : (driverType === DriverType.NARRATIVE ? 'var(--gold-primary)' : 'rgba(6, 182, 212, 1.0)'),
        imaginary: isRetro ? '#8B261D' : (driverType === DriverType.COMMERCIAL ? 'rgba(22, 189, 202, 0.95)' : 'rgba(244, 63, 94, 0.95)'),
        imaginaryText: isRetro ? '#701A10' : (driverType === DriverType.COMMERCIAL ? 'rgba(22, 189, 202, 1.0)' : 'rgba(244, 63, 94, 1.0)'),
        sinthome: isRetro ? '#05543E' : 'rgba(16, 185, 129, 0.95)',
        sinthomeText: isRetro ? '#044231' : 'rgba(16, 185, 129, 1.0)',
    };

    // Helper to get text from state or placeholder
    const getTag = (id: string, placeholder: string) => {
        const val = fieldState[id];
        if (Array.isArray(val) && val.length > 0) {
            const text = val[0];
            return lang === 'EN' ? (text.match(/\((.*?)\)/)?.[1] || text) : text.split('(')[0].trim();
        }
        return placeholder;
    };

    // Mapping for different driver types
    const labels = {
        m0: getTag('engine_m0', '圣状'),
        m1: getTag('engine_m1', '象征界'),
        m2: getTag('engine_m2', '实在界'),
        m3: getTag('engine_m3', '想象界'),
        m4: getTag('engine_m4', '大他者阻断'),
        m5: getTag('engine_m5', '行动驱力'),
        m6: getTag('engine_m6', '终极代价'),
        m7: getTag('engine_m7', '存在落点'),
        // Support other drivers too
        ... (driverType === DriverType.COMMERCIAL ? {
            m0: getTag('comm_c0', '底层欲望'),
            m1: getTag('comm_c1', '缺失主体'),
            m2: getTag('comm_c2', '痛点场景'),
            m3: getTag('comm_c3', '产品图腾')
        } : {})
    };

    const containerClass = centered
        ? "absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        : "absolute inset-y-0 right-0 w-[150vw] md:w-[80vw] lg:w-[1000px] flex items-center justify-center pointer-events-none z-0 overflow-hidden translate-x-[15%]";

    const innerContainerClass = centered
        ? "relative w-full h-full max-w-[1800px] max-h-[1800px] flex items-center justify-center"
        : "relative w-full h-full max-w-[1000px] max-h-[1000px] flex items-center justify-center";

    return (
        <div className={containerClass} style={{ opacity }}>
            {/* Main Astrolabe Container */}
            <div className={innerContainerClass} style={centered ? { transform: 'scale(1.05)', transformOrigin: 'center' } : {}}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                    <defs>
                        <path id="formulaOuterPath" d="M 5,100 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0" />
                        <path id="realPathUp" d="M 66,80 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="symPathUp" d="M 48.68,110 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="imgPathUp" d="M 83.32,110 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                        <path id="sinthomePathUp" d="M 46,100 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0" />
                    </defs>

                    {/* Outer Rings - Slowly rotating background */}
                    <g className="animate-[spin_260s_linear_infinite]" style={{ transformOrigin: '100px 100px' }}>
                        <circle cx="100" cy="100" r="90" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                        <circle cx="100" cy="100" r="88" fill="none" stroke={strokeColorHigh} strokeWidth="0.3" strokeDasharray="1 2" />
                        <circle cx="100" cy="100" r="80" fill="none" stroke={strokeColor} strokeWidth="1.0" />

                        {/* Orbiting Math Text */}
                        <path id="outerPath" d="M 20,100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                        <text fill={textColor} fontSize="2.2" fontFamily="'Inter', sans-serif" fontWeight="bold" letterSpacing="0.4" className="uppercase">
                            <textPath href="#outerPath" startOffset="5%" textAnchor="start">Topologie Borroméenne</textPath>
                            <textPath href="#outerPath" startOffset="45%" textAnchor="middle">Nœud R.S.I. + Σ</textPath>
                            <textPath href="#outerPath" startOffset="85%" textAnchor="end">Mist Observatory</textPath>
                        </text>
                    </g>

                    {/* New Formula Orbit - Faster and distinct */}
                    <g className="animate-[spin_120s_linear_infinite]" style={{ transformOrigin: '100px 100px' }}>
                        <text fill={strokeColorHigh} fontSize="1.8" fontFamily="monospace" letterSpacing="0.2">
                            <textPath href="#formulaOuterPath" startOffset="0%">
                                M0:OS(Ψ) | M1:SUB($) | M2:ENC(!!) | M3:FAN(a) | M4:OTH(A) | M5:DRV(&gt;) | M6:STK(†) | M7:RES(Σ) || STORY = (M1 + M3) / M4 * M5
                            </textPath>
                            <textPath href="#formulaOuterPath" startOffset="50%">
                                M0:OS(Ψ) | M1:SUB($) | M2:ENC(!!) | M3:FAN(a) | M4:OTH(A) | M5:DRV(&gt;) | M6:STK(†) | M7:RES(Σ) || STORY = (M1 + M3) / M4 * M5
                            </textPath>
                        </text>
                    </g>

                    {/* Counter-rotating inner compass framework - Slowed down by 30% (120 -> 156) */}
                    <g className="animate-[spin_156s_linear_infinite_reverse]" style={{ transformOrigin: '100px 100px' }}>
                        <circle cx="100" cy="100" r="75" fill="none" stroke={strokeColorHigh} strokeWidth="0.2" strokeDasharray="2 4" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke={strokeColor} strokeWidth="0.2" />
                        {/* Cardinal markers */}
                        <line x1="100" y1="25" x2="100" y2="28" stroke={strokeColorHigh} strokeWidth="0.4" />
                        <line x1="100" y1="172" x2="100" y2="175" stroke={strokeColorHigh} strokeWidth="0.4" />
                        <line x1="25" y1="100" x2="28" y2="100" stroke={strokeColorHigh} strokeWidth="0.4" />
                        <line x1="172" y1="100" x2="175" y2="100" stroke={strokeColorHigh} strokeWidth="0.4" />
                    </g>

                    {/* Topology Centerpiece - Slowed (180 -> 234) */}
                    <g className="animate-[spin_234s_linear_infinite]" style={{ transformOrigin: '100px 100px' }}>
                        {/* Connecting Triangle between centers */}
                        <polygon points="100,80 82.68,110 117.32,110" fill="none" stroke={strokeColor} strokeWidth="0.4" strokeDasharray="1 1.5" />

                        {/* R - THE REAL - Amber/Gold - Slowed (20 -> 26) */}
                        <circle cx="100" cy="80" r="30" fill="none" stroke={ringColors.real} strokeWidth="1.2" />
                        <circle cx="100" cy="80" r="31" fill="none" stroke={ringColors.real} strokeOpacity="0.4" strokeWidth="0.3" strokeDasharray="1 3" className="animate-[spin_26s_linear_infinite]" style={{ transformOrigin: '100px 80px' }} />
                        <text fill={ringColors.realText} fontSize="2.4" fontFamily="'Playfair Display', serif" fontStyle="italic" fontWeight="bold" letterSpacing="0.1">
                            <textPath href="#realPathUp" startOffset="75%" textAnchor="middle">Le Réel: {labels.m2}</textPath>
                        </text>

                        {/* S - THE SYMBOLIC - Cyan - Slowed (25 -> 33) */}
                        <circle 
                            cx="82.68" cy="110" r="30" fill="none" 
                            stroke={ringColors.symbolic} strokeWidth={driverType === DriverType.NARRATIVE ? "1.8" : "1.2"} 
                            className={driverType === DriverType.NARRATIVE ? "animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.4)]" : ""}
                        />
                        <circle cx="82.68" cy="110" r="31" fill="none" stroke={ringColors.symbolic} strokeOpacity="0.4" strokeWidth="0.3" strokeDasharray="1 3" className="animate-[spin_33s_linear_infinite_reverse]" style={{ transformOrigin: '82.68px 110px' }} />
                        <text fill={ringColors.symbolicText} fontSize={driverType === DriverType.NARRATIVE ? "2.8" : "2.4"} fontFamily="'Playfair Display', serif" fontStyle="italic" fontWeight="bold" letterSpacing="0.1">
                            <textPath href="#symPathUp" startOffset="82%" textAnchor="middle">Le Symbolique: {labels.m1}</textPath>
                        </text>

                        {/* I - THE IMAGINARY - Rose - Slowed (30 -> 39) */}
                        <circle cx="117.32" cy="110" r="30" fill="none" stroke={ringColors.imaginary} strokeWidth="1.2" />
                        <circle cx="117.32" cy="110" r="31" fill="none" stroke={ringColors.imaginary} strokeOpacity="0.4" strokeWidth="0.3" strokeDasharray="1 3" className="animate-[spin_39s_linear_infinite]" style={{ transformOrigin: '117.32px 110px' }} />
                        <text fill={ringColors.imaginaryText} fontSize="2.4" fontFamily="'Playfair Display', serif" fontStyle="italic" fontWeight="bold" letterSpacing="0.1">
                            <textPath href="#imgPathUp" startOffset="68%" textAnchor="middle">L'Imaginaire: {labels.m3}</textPath>
                        </text>

                        {/* THE SINTHOME (4th Ring) - Emerald - Slowed (50 -> 65) */}
                        <circle cx="100" cy="100" r="46" fill="none" stroke={ringColors.sinthome} strokeWidth={isRetro ? 1.8 : 1.5} className="animate-[pulse_8s_ease-in-out_infinite]" />
                        <circle cx="100" cy="100" r="47" fill="none" stroke={ringColors.sinthome} strokeOpacity="0.4" strokeWidth="0.4" strokeDasharray="4 8" className="animate-[spin_65s_linear_infinite_reverse]" style={{ transformOrigin: '100px 100px' }} />

                        <text fill={ringColors.sinthomeText} fontSize={isRetro ? "4.2" : "3.6"} fontFamily="'Playfair Display', serif" fontWeight="bold" letterSpacing="0.2" className="animate-[pulse_8s_ease-in-out_infinite]">
                            <textPath href="#sinthomePathUp" startOffset="25%" textAnchor="middle">Le Sinthome: {labels.m0}</textPath>
                        </text>

                        {/* Precise Math Core Target Center - Slowed (12 -> 16) */}
                        <circle cx="100" cy="100" r="1.5" fill="none" stroke={ringColors.sinthome} strokeWidth="0.4" />
                        <circle cx="100" cy="100" r="6" fill="none" stroke={strokeColorHigh} strokeWidth="0.2" strokeDasharray="0.5 1.5" className="animate-[spin_16s_linear_infinite]" style={{ transformOrigin: '100px 100px' }} />
                        <line x1="100" y1="96" x2="100" y2="104" stroke={strokeColorHigh} strokeWidth="0.2" />
                        <line x1="96" y1="100" x2="104" y2="100" stroke={strokeColorHigh} strokeWidth="0.2" />
                    </g>
                </svg>
            </div>
        </div>
    );
};
