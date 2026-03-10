
import React from 'react';
import { DRIVERS } from '../constants';
import { DriverType } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DriverSelectorProps {
    selectedDriver: DriverType | null;
    onSelect: (id: DriverType) => void;
    lang: 'CN' | 'EN';
    hoveredDriver: DriverType | null;
    onHover: (id: DriverType | null) => void;
}

export const DriverSelector: React.FC<DriverSelectorProps> = ({ selectedDriver, onSelect, lang, hoveredDriver, onHover }) => {

    const { theme } = useTheme();
    const isRetro = theme === 'retro';

    const getAccentColor = (id: DriverType) => {
        if (isRetro) return 'text-[#8B261D]';
        switch (id) {
            case DriverType.COMMERCIAL: return 'text-mist-cyan';
            case DriverType.NARRATIVE: return 'text-mist-gold'; // Narrative is Gold
            case DriverType.AESTHETIC: return 'text-mist-rose';
            case DriverType.EXPERIMENTAL: return 'text-mist-purple';
            case DriverType.TRAILER: return 'text-mist-orange';
            default: return 'text-gold-primary';
        }
    };

    const getBorderColor = (id: DriverType, active: boolean) => {
        if (!active) return isRetro ? 'border-white/10' : 'border-white/[0.03]';
        
        if (isRetro) {
            return 'border-[#8B261D]';
        }

        // Dark Mode: Vibrant Colors
        switch (id) {
            case DriverType.COMMERCIAL: return 'border-cyan-500';
            case DriverType.NARRATIVE: return 'border-[#D4AF37]';
            case DriverType.AESTHETIC: return 'border-rose-500';
            case DriverType.EXPERIMENTAL: return 'border-purple-500';
            case DriverType.TRAILER: return 'border-orange-500';
            default: return 'border-[#D4AF37]';
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

                    const getHoverBorder = (id: DriverType) => {
                        if (isRetro) {
                            return 'hover:border-[#8B261D]';
                        }
                            switch (id) {
                                case DriverType.COMMERCIAL: return 'hover:border-cyan-500';
                                case DriverType.NARRATIVE: return 'hover:border-[#D4AF37]';
                                case DriverType.AESTHETIC: return 'hover:border-rose-500';
                                case DriverType.EXPERIMENTAL: return 'hover:border-purple-500';
                                case DriverType.TRAILER: return 'hover:border-orange-500';
                                default: return 'hover:border-[#D4AF37]';
                            }
                    };

                    return (
                        <button
                            key={driver.id}
                            onClick={() => onSelect(driver.id)}
                            onMouseEnter={() => onHover(driver.id)}
                            onMouseLeave={() => onHover(null)}
                            className={`
                group relative flex flex-col items-start text-left p-6 md:p-8 rounded-sm transition-all duration-700 
                border ${isRetro ? 'bg-transparent shadow-none' : 'bg-[rgb(1,1,1,0.01)]'} backdrop-blur-sm min-h-[300px]
                ${active
                                     ? `${borderClass} shadow-[0_45px_100px_rgba(139,38,29,0.15)] -translate-y-1 ${isRetro ? '!bg-[#F9F7F1]' : (driver.id === DriverType.NARRATIVE ? 'bg-[#D4AF37]/5' : 'bg-zinc-950/100')} backdrop-blur-none`
                                     : `${isRetro ? 'border-white/10 bg-white/[0.02] shadow-none' : 'border-white/[0.03] bg-white/[0.02]'} ${getHoverBorder(driver.id)}`
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
                                                <h3 className={`text-xl md:text-2xl font-serif font-bold tracking-wide transition-all duration-500 leading-tight ${
                                                    isRetro 
                                                        ? (active ? 'text-black' : 'text-black/70') 
                                                        : (active 
                                                            ? 'text-white' 
                                                            : 'text-white/80')
                                                }`}>
                                                    {driver.name}
                                                </h3>
                                            </div>
                                            <div className="h-14 flex items-center shrink-0">
                                                <h3 className={`text-lg md:text-xl font-serif font-bold tracking-wide transition-all duration-500 leading-tight ${
                                                    isRetro 
                                                        ? (active ? 'text-black' : 'text-black/70') 
                                                        : (active 
                                                            ? 'text-white' 
                                                            : 'text-white/80')
                                                }`}>
                                                    {driver.nameEn}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 overflow-hidden mt-1">
                                    <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                             <div className={`h-6 flex items-center shrink-0 text-sm font-serif italic transition-all duration-500 ${active ? accentClass : (isRetro ? 'text-black opacity-60' : 'text-[var(--text-muted)] opacity-60')}`}>
                                                 {driver.coreDriver}
                                             </div>
                                             <div className={`h-6 flex items-center shrink-0 text-sm font-serif italic transition-all duration-500 ${active ? accentClass : (isRetro ? 'text-black opacity-60' : 'text-[var(--text-muted)] opacity-60')}`}>
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
                                                <p className={`leading-relaxed font-light transition-all duration-500 text-[12px] md:text-sm ${
                                                    isRetro 
                                                        ? (active ? 'text-black/90' : 'text-black/60') 
                                                        : (active 
                                                            ? 'text-white' 
                                                            : 'text-white/70')
                                                }`}>
                                                    {driver.description}
                                                </p>
                                            </div>
                                            {/* EN Slot */}
                                            <div className="h-[130px] shrink-0">
                                                <p className={`leading-relaxed font-light transition-all duration-500 text-[11px] md:text-[13px] ${
                                                    isRetro 
                                                        ? (active ? 'text-black/90' : 'text-black/60') 
                                                        : (active 
                                                            ? 'text-white' 
                                                            : 'text-white/70')
                                                }`}>
                                                    {driver.descriptionEn || driver.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Action Footer */}
                            <div className={`mt-auto pt-4 w-full flex items-center justify-between border-t transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'} ${
                                isRetro 
                                    ? 'border-[var(--border-main)]' 
                                    : (active ? 'border-white/40' : 'border-[var(--border-main)]/40')
                            }`}>
                                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                                    isRetro 
                                        ? 'text-[var(--text-main)]' 
                                        : (active ? accentClass : 'text-[var(--text-main)]')
                                }`}>
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
