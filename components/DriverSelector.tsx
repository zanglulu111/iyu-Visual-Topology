
import React from 'react';
import { DRIVERS } from '../constants';
import { DriverType } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DriverSelectorProps {
    selectedDriver: DriverType | null;
    onSelect: (id: DriverType) => void;
    lang: 'CN' | 'EN';
    hoveredDriver: DriverType | null;
    onHover: (id: DriverType | null) => void;
}

export const DriverSelector: React.FC<DriverSelectorProps> = ({ selectedDriver, onSelect, lang, hoveredDriver, onHover }) => {

    const getAccentColor = (id: DriverType) => {
        switch (id) {
            case DriverType.COMMERCIAL: return 'text-cyan-400';
            case DriverType.NARRATIVE: return 'text-yellow-400';
            case DriverType.AESTHETIC: return 'text-rose-400';
            case DriverType.EXPERIMENTAL: return 'text-purple-400';
            case DriverType.TRAILER: return 'text-orange-400';
            default: return 'text-gold-primary';
        }
    };

    const getBorderColor = (id: DriverType, active: boolean) => {
        if (!active) return 'border-zinc-900';
        switch (id) {
            case DriverType.COMMERCIAL: return 'border-cyan-500/50';
            case DriverType.NARRATIVE: return 'border-yellow-500/50';
            case DriverType.AESTHETIC: return 'border-rose-500/50';
            case DriverType.EXPERIMENTAL: return 'border-purple-500/50';
            case DriverType.TRAILER: return 'border-orange-500/50';
            default: return 'border-gold-primary/50';
        }
    };

    return (
        <div className="w-full max-w-[1920px] mx-auto py-4 px-2 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {DRIVERS.map((driver) => {
                    const isSelected = selectedDriver === driver.id;
                    const isHovered = hoveredDriver === driver.id;
                    const active = isHovered;
                    const accentClass = getAccentColor(driver.id);
                    const borderClass = getBorderColor(driver.id, active);

                    return (
                        <button
                            key={driver.id}
                            onClick={() => onSelect(driver.id)}
                            onMouseEnter={() => onHover(driver.id)}
                            onMouseLeave={() => onHover(null)}
                            className={`
                group relative flex flex-col items-start text-left p-6 md:p-8 rounded-sm transition-all duration-700 
                border bg-[#080808]/30 backdrop-blur-sm min-h-[300px]
                ${active
                                    ? `${borderClass} shadow-[0_25px_60px_rgba(0,0,0,0.6)] -translate-y-1`
                                    : 'border-zinc-900/40 hover:border-zinc-800'
                                }
              `}
                        >
                            {/* Status padding adjustment */}
                            <div className="w-full h-2 mb-4"></div>

                            {/* Title Section */}
                            <div className="mb-4 w-full">
                                <div className="h-14 overflow-hidden">
                                    <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                            <div className="h-14 flex items-center shrink-0">
                                                <h3 className={`text-xl md:text-2xl font-serif tracking-wide transition-colors duration-500 leading-tight ${active ? 'text-white' : 'text-zinc-400'}`}>
                                                    {driver.name}
                                                </h3>
                                            </div>
                                            <div className="h-14 flex items-center shrink-0">
                                                <h3 className={`text-lg md:text-xl font-serif tracking-wide transition-colors duration-500 leading-tight ${active ? 'text-white' : 'text-zinc-400'}`}>
                                                    {driver.nameEn}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 overflow-hidden mt-1">
                                    <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                            <div className={`h-6 flex items-center shrink-0 text-sm font-serif italic transition-all duration-500 ${active ? accentClass : 'text-zinc-600'}`}>
                                                {driver.coreDriver}
                                            </div>
                                            <div className={`h-6 flex items-center shrink-0 text-sm font-serif italic transition-all duration-500 ${active ? accentClass : 'text-zinc-600'}`}>
                                                {driver.coreDriverEn}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description Section with robust sliding */}
                            <div className="max-w-[98%] mb-6">
                                <div className="h-[130px] overflow-hidden relative">
                                    <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                            {/* CN Slot */}
                                            <div className="h-[130px] shrink-0">
                                                <p className={`leading-relaxed font-light transition-colors duration-500 text-[12px] md:text-sm ${active ? 'text-zinc-400' : 'text-zinc-700'}`}>
                                                    {driver.description}
                                                </p>
                                            </div>
                                            {/* EN Slot */}
                                            <div className="h-[130px] shrink-0">
                                                <p className={`leading-relaxed font-light transition-colors duration-500 text-[11px] md:text-[13px] ${active ? 'text-zinc-400' : 'text-zinc-700'}`}>
                                                    {driver.descriptionEn || driver.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Action Footer */}
                            <div className={`mt-auto pt-4 w-full flex items-center justify-between border-t border-zinc-900/40 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
                                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] text-white`}>
                                    {lang === 'CN' ? '选取引擎' : 'SELECT ENGINE'}
                                </span>
                                <ArrowRight size={14} className={accentClass} />
                            </div>

                            {/* Subtle background glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}></div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
