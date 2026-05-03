
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
        if (isRetro) return 'text-[var(--text-accent)]';
        switch (id) {
            case DriverType.COMMERCIAL: return 'text-mist-cyan';
            case DriverType.NARRATIVE: return 'text-mist-gold'; // Narrative is Gold
            case DriverType.AESTHETIC: return 'text-mist-rose';
            case DriverType.EXPERIMENTAL: return 'text-mist-purple';
            case DriverType.TRAILER: return 'text-mist-orange';
            default: return 'text-gold-primary';
        }
    };

    const getAccentValue = (id: DriverType) => {
        if (isRetro) return 'var(--text-accent)';
        switch (id) {
            case DriverType.COMMERCIAL: return 'var(--mist-cyan)';
            case DriverType.NARRATIVE: return 'var(--mist-gold)';
            case DriverType.AESTHETIC: return 'var(--mist-rose)';
            case DriverType.EXPERIMENTAL: return 'var(--mist-purple)';
            case DriverType.TRAILER: return 'var(--mist-orange)';
            default: return 'var(--gold-primary)';
        }
    };

    return (
        <div className="w-full max-w-[1920px] mx-auto py-2 px-2 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {DRIVERS.map((driver) => {
                    const isSelected = selectedDriver === driver.id;
                    const isHovered = hoveredDriver === driver.id;
                    const active = isHovered;
                    const accentClass = getAccentColor(driver.id);
                    const accentValue = getAccentValue(driver.id);

        return (
                    <button
                        key={driver.id}
                        onClick={() => onSelect(driver.id)}
                        onMouseEnter={() => onHover(driver.id)}
                        onMouseLeave={() => onHover(null)}
                        aria-pressed={isSelected}
                        className={`
                group relative flex flex-col items-start text-left p-6 md:p-8 rounded-sm transition-all duration-700 backdrop-blur-xl overflow-hidden
                border min-h-[300px]
                ${active ? '-translate-y-1' : ''}
              `}
                            style={{
                                boxShadow: active ? `0 45px 100px rgba(0,0,0,0.1), 0 0 42px ${accentValue}22` : undefined,
                                borderColor: active
                                    ? (isRetro ? 'rgba(139, 38, 29, 0.9)' : accentValue)
                                    : 'transparent',
                                backgroundColor: active
                                    ? (isRetro ? '#FDFCF8' : 'rgb(9 9 11)')
                                    : 'transparent',
                            }}
                        >
                            <div
                                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                                style={{
                                    opacity: active ? 0.7 : 0,
                                    background: isRetro
                                        ? 'linear-gradient(180deg, rgba(255,250,240,0.34), transparent)'
                                        : 'linear-gradient(180deg, rgba(232,220,188,0.035), rgba(5,5,4,0.28))'
                                }}
                            />
                            {/* Status padding adjustment */}
                            <div className="w-full h-2 mb-4 relative z-10"></div>

                            {/* Title Section */}
                            <div className="mb-4 w-full relative z-10">
                                <div className="h-14 overflow-hidden">
                                    <div className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                            <div className="h-14 flex items-center shrink-0">
                                                <h3 className={`text-xl md:text-2xl font-serif font-bold tracking-wide transition-all duration-500 leading-tight ${
                                                    isRetro 
                                                        ? (active ? 'text-[#8B261D]' : 'text-black/70') 
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
                                                        ? (active ? 'text-[#8B261D]' : 'text-black/70') 
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
                                    <div className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                             <div className={`h-6 flex items-center shrink-0 text-sm font-serif italic transition-all duration-500 ${isRetro ? (active ? 'text-black/90' : 'text-black/60') : (active ? accentClass : 'text-[var(--text-muted)] opacity-60')}`}>
                                                 {driver.coreDriver}
                                             </div>
                                             <div className={`h-6 flex items-center shrink-0 text-sm font-serif italic transition-all duration-500 ${isRetro ? (active ? 'text-black/90' : 'text-black/60') : (active ? accentClass : 'text-[var(--text-muted)] opacity-60')}`}>
                                                 {driver.coreDriverEn}
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description Section with robust sliding */}
                            <div className="max-w-[98%] mb-6 relative z-10">
                                <div className="h-[130px] overflow-hidden relative">
                                    <div className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                                        <div className="flex flex-col">
                                            {/* CN Slot */}
                                            <div className="h-[130px] shrink-0">
                                                <p className={`leading-relaxed font-light transition-all duration-500 text-[12px] md:text-sm ${
                                                    isRetro 
                                                        ? (active ? 'text-black/90' : 'text-black/60') 
                                                        : (active 
                                                            ? 'text-white' 
                                                            : 'text-[var(--text-muted)]')
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
                                                            : 'text-[var(--text-muted)]')
                                                }`}>
                                                    {driver.descriptionEn || driver.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Action Footer */}
                            <div className={`mt-auto pt-4 w-full flex items-center justify-between border-t transition-all duration-500 relative z-10 ${active ? 'opacity-100' : 'opacity-0'} ${
                                isRetro 
                                    ? 'border-[var(--border-main)]' 
                                    : (active ? 'border-white/40' : 'border-[var(--border-main)]/40')
                            }`}>
                                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                                    isRetro 
                                        ? 'text-black/80' 
                                        : (active ? accentClass : 'text-[var(--text-main)]')
                                }`}>
                                    {lang === 'CN' ? '选取引擎' : 'SELECT ENGINE'}
                                </span>
                                <ArrowRight size={14} className={isRetro ? 'text-black/80' : accentClass} />
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
