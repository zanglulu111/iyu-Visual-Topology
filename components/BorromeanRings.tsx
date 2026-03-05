import React from 'react';

export const BorromeanRings: React.FC = () => {
    return (
        <div className="absolute inset-y-0 right-0 w-[150vw] md:w-[80vw] lg:w-[1000px] flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-100 translate-x-[15%]">
            {/* Main Astrolabe Container */}
            <div className="relative w-full h-full max-w-[1000px] max-h-[1000px] flex items-center justify-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

                    {/* Outer Rings - Slowly rotating background */}
                    <g className="animate-[spin_200s_linear_infinite]" style={{ transformOrigin: '100px 100px' }}>
                        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
                        <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" strokeDasharray="1 2" />
                        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

                        {/* Orbiting Math Text */}
                        <path id="outerPath" d="M 20,100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                        <text fill="rgba(255,255,255,0.5)" fontSize="2" fontFamily="'Inter', sans-serif" letterSpacing="0.4" className="uppercase font-light">
                            <textPath href="#outerPath" startOffset="5%" textAnchor="start">Topologie Borroméenne</textPath>
                            <textPath href="#outerPath" startOffset="45%" textAnchor="middle">Nœud R.S.I. + Σ</textPath>
                            <textPath href="#outerPath" startOffset="85%" textAnchor="end">Mist Observatory</textPath>
                        </text>
                    </g>

                    {/* Counter-rotating inner compass framework */}
                    <g className="animate-[spin_120s_linear_infinite_reverse]" style={{ transformOrigin: '100px 100px' }}>
                        <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" strokeDasharray="2 4" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.2" />
                        {/* Cardinal markers */}
                        <line x1="100" y1="25" x2="100" y2="28" stroke="rgba(255,255,255,0.6)" strokeWidth="0.4" />
                        <line x1="100" y1="172" x2="100" y2="175" stroke="rgba(255,255,255,0.6)" strokeWidth="0.4" />
                        <line x1="25" y1="100" x2="28" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="0.4" />
                        <line x1="172" y1="100" x2="175" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="0.4" />
                    </g>

                    {/* Topology Centerpiece */}
                    <g className="animate-[spin_180s_linear_infinite]" style={{ transformOrigin: '100px 100px' }}>
                        {/* Connecting Triangle between centers */}
                        <polygon points="100,80 82.68,110 117.32,110" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" strokeDasharray="1 1.5" />

                        {/* R - THE REAL - Amber/Gold */}
                        <circle cx="100" cy="80" r="30" fill="none" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="0.6" />
                        <circle cx="100" cy="80" r="31" fill="none" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="0.3" strokeDasharray="1 3" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '100px 80px' }} />
                        <path id="realPath" d="M 70,80 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                        <text fill="rgba(245, 158, 11, 0.9)" fontSize="2.5" fontFamily="'Playfair Display', serif" fontStyle="italic" letterSpacing="0.1">
                            <textPath href="#realPath" startOffset="75%" textAnchor="middle">Le Réel</textPath>
                        </text>

                        {/* S - THE SYMBOLIC - Cyan */}
                        <circle cx="82.68" cy="110" r="30" fill="none" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="0.6" />
                        <circle cx="82.68" cy="110" r="31" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="0.3" strokeDasharray="1 3" className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: '82.68px 110px' }} />
                        <path id="symPath" d="M 52.68,110 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                        <text fill="rgba(6, 182, 212, 0.9)" fontSize="2.5" fontFamily="'Playfair Display', serif" fontStyle="italic" letterSpacing="0.1">
                            <textPath href="#symPath" startOffset="82%" textAnchor="middle">Le Symbolique</textPath>
                        </text>

                        {/* I - THE IMAGINARY - Rose */}
                        <circle cx="117.32" cy="110" r="30" fill="none" stroke="rgba(244, 63, 94, 0.8)" strokeWidth="0.6" />
                        <circle cx="117.32" cy="110" r="31" fill="none" stroke="rgba(244, 63, 94, 0.5)" strokeWidth="0.3" strokeDasharray="1 3" className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: '117.32px 110px' }} />
                        <path id="imgPath" d="M 87.32,110 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                        <text fill="rgba(244, 63, 94, 0.9)" fontSize="2.5" fontFamily="'Playfair Display', serif" fontStyle="italic" letterSpacing="0.1">
                            <textPath href="#imgPath" startOffset="68%" textAnchor="middle">L'Imaginaire</textPath>
                        </text>

                        {/* THE SINTHOME (4th Ring) - Emerald - Encompasses the triad correctly */}
                        <circle cx="100" cy="100" r="46" fill="none" stroke="rgba(16, 185, 129, 0.9)" strokeWidth="0.8" className="animate-[pulse_6s_ease-in-out_infinite]" />
                        <circle cx="100" cy="100" r="47" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="0.4" strokeDasharray="4 8" className="animate-[spin_50s_linear_infinite_reverse]" style={{ transformOrigin: '100px 100px' }} />

                        <path id="sinthomePath" d="M 54,100 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" fill="none" />
                        <text fill="rgba(16, 185, 129, 1.0)" fontSize="3.5" fontFamily="'Playfair Display', serif" letterSpacing="0.2" className="animate-[pulse_6s_ease-in-out_infinite]">
                            <textPath href="#sinthomePath" startOffset="25%" textAnchor="middle">Le Sinthome</textPath>
                        </text>

                        {/* Precise Math Core Target Center */}
                        <circle cx="100" cy="100" r="1.5" fill="none" stroke="rgba(16, 185, 129, 0.9)" strokeWidth="0.4" />
                        <circle cx="100" cy="100" r="6" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.2" strokeDasharray="0.5 1.5" className="animate-[spin_12s_linear_infinite]" style={{ transformOrigin: '100px 100px' }} />
                        <line x1="100" y1="96" x2="100" y2="104" stroke="rgba(255,255,255,0.4)" strokeWidth="0.2" />
                        <line x1="96" y1="100" x2="104" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="0.2" />
                    </g>
                </svg>
            </div>
        </div>
    );
};
