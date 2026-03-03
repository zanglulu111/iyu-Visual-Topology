
import React from 'react';
import { DriverSelector } from './DriverSelector';
import { DriverType, User } from '../types';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Settings, User as UserIcon } from 'lucide-react';
import { ProductManualModal } from './ProductManualModal';
import { SutureModal } from './SutureModal';
import { HistoryModal } from './HistoryModal';

interface LandingViewProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  selectedDriver: DriverType | null;
  onDriverSelect: (id: DriverType) => void;
  hoveredDriver: DriverType | null;
  setHoveredDriver: (id: DriverType | null) => void;
  handleOpenMetonymyPage: () => void;
  openManual: () => void;
  isManualOpen: boolean;
  closeManual: () => void;
  openHistory: () => void;
  isHistoryOpen: boolean;
  closeHistory: () => void;
  isSutureOpen: boolean;
  closeSuture: () => void;
  onSutureGenerate: any;
  isSutureGenerating: boolean;
  history: any[];
  onHistoryRestore: any;
  onHistoryClear: any;
  openSettings: () => void;
  openAuth: () => void;
  openProfile: () => void;
  currentUser: User;
}

export const LandingView: React.FC<LandingViewProps> = ({
  lang,
  setLang,
  selectedDriver,
  onDriverSelect,
  hoveredDriver,
  setHoveredDriver,
  handleOpenMetonymyPage,
  openManual,
  isManualOpen,
  closeManual,
  openHistory,
  isHistoryOpen,
  closeHistory,
  isSutureOpen,
  closeSuture,
  onSutureGenerate,
  isSutureGenerating,
  history,
  onHistoryRestore,
  onHistoryClear,
  openSettings,
  openAuth,
  currentUser,
  openProfile,
}) => {

  // Dynamic header theme based on hovered driver
  const getHeaderTheme = (driverId: DriverType | null) => {
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'border-cyan-500/50 bg-cyan-900/10';
      case DriverType.NARRATIVE: return 'border-yellow-500/50 bg-yellow-900/10';
      case DriverType.AESTHETIC: return 'border-rose-500/50 bg-rose-900/10';
      case DriverType.EXPERIMENTAL: return 'border-purple-500/50 bg-purple-900/10';
      case DriverType.TRAILER: return 'border-orange-500/50 bg-orange-900/10';
      default: return 'border-white/5 bg-[#050505]/90';
    }
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-[#050505] selection:bg-gold-primary/30 selection:text-white z-50 overflow-hidden">
      <header className={`shrink-0 z-50 backdrop-blur-md border-b h-16 flex items-center justify-between px-6 transition-colors duration-500 ${getHeaderTheme(hoveredDriver)}`}>
        <div className="flex items-center">
          <div className="h-6 overflow-hidden relative group cursor-default">
            <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-6' : 'translate-y-0'}`}>
              <h1 className="text-[15px] font-light tracking-[0.6em] h-6 flex items-center text-white/90 select-none">
                迷雾学派
              </h1>
              <h1 className="text-[13px] font-extralight tracking-[0.8em] h-6 flex items-center text-white uppercase select-none">
                Mist
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-6 overflow-hidden relative">
            <div className={`flex flex-col items-end transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>

              {/* Chinese Button Group */}
              <div className="flex items-center justify-end gap-6 h-6 shrink-0">
                {[
                  { icon: Wand2, label: '换喻', onClick: handleOpenMetonymyPage, isActive: false },
                  { icon: HelpCircle, label: '哲学辞典', onClick: openManual, isActive: isManualOpen },
                  { icon: HistoryIcon, label: '欲望档案', onClick: openHistory, isActive: isHistoryOpen },
                  { icon: Settings, label: '配置', onClick: openSettings, isActive: false }
                ].map((item, idx) => (
                  <button
                    key={`cn-${idx}`}
                    onClick={item.onClick}
                    className={`flex items-center gap-2 transition-all duration-100 group ${item.isActive ? 'text-white' : "text-zinc-300"}`}
                  >
                    <item.icon size={16} className={`transition-all duration-100 ${item.isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-100 ${item.isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* English Button Group */}
              <div className="flex items-center justify-end gap-4 h-6 shrink-0">
                {[
                  { icon: Wand2, label: 'METONYMY', onClick: handleOpenMetonymyPage, isActive: false },
                  { icon: HelpCircle, label: 'CODEX', onClick: openManual, isActive: isManualOpen },
                  { icon: HistoryIcon, label: 'ARCHIVE', onClick: openHistory, isActive: isHistoryOpen },
                  { icon: Settings, label: 'CONFIG', onClick: openSettings, isActive: false }
                ].map((item, idx) => (
                  <button
                    key={`en-${idx}`}
                    onClick={item.onClick}
                    className={`flex items-center gap-2 transition-all duration-100 group ${item.isActive ? 'text-white' : "text-zinc-300"}`}
                  >
                    <item.icon size={16} className={`transition-all duration-100 ${item.isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-100 ${item.isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>
          <div className="h-4 w-px bg-zinc-800"></div>
          <button
            onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
            className="flex items-center justify-center w-7 h-7 rounded border border-zinc-800 hover:border-zinc-500 bg-zinc-900/50 text-[10px] font-bold text-zinc-400 hover:text-white transition-all duration-100"
            title="Toggle Language"
          >
            {lang === 'CN' ? '中' : 'EN'}
          </button>
          <div className="h-4 w-px bg-zinc-800"></div>
          <button
            onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
            className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
          >
            {currentUser.id !== 'guest_user' ? (
              <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white shadow-lg overflow-hidden`}>
                {currentUser.avatarUrl ? (
                  <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  currentUser.username.substring(0, 1).toUpperCase()
                )}
              </div>
            ) : (
              <UserIcon size={16} className={`text-zinc-600 group-hover:text-white transition-colors duration-300`} />
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 w-full relative z-40 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="text-center px-4 mb-4 md:mb-6 max-w-5xl mx-auto shrink-0 relative z-20">

            <div className="relative overflow-hidden h-[130px] md:h-[160px] group cursor-default">
              <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                {/* Main Title Container */}
                <div className="flex flex-col">
                  {/* CN Version */}
                  <div className="h-[130px] md:h-[160px] flex flex-col items-center justify-center shrink-0">
                    <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-none">
                      <span className="block text-xl md:text-2xl mb-4 text-zinc-500 font-light tracking-[0.5em] uppercase">迷雾学派</span>
                      从欲望到 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600">CINEMATIC</span>
                    </h1>
                  </div>

                  {/* EN Version */}
                  <div className="h-[130px] md:h-[160px] flex flex-col items-center justify-center shrink-0">
                    <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-none">
                      <span className="block text-xl md:text-2xl mb-4 text-zinc-500 font-light tracking-[0.5em] uppercase">SCHOOL OF MIST</span>
                      FROM DESIRE TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600">CINEMATIC</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-12 md:h-8 overflow-hidden mt-2">
              <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <div className="flex flex-col">
                  <p className="h-12 md:h-8 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-light tracking-widest uppercase max-w-2xl mx-auto leading-relaxed shrink-0">
                    爱欲视觉拓扑学：在实在界的荒漠上，确立一种比现实更坚固的虚构。
                  </p>
                  <p className="h-12 md:h-8 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-light tracking-widest uppercase max-w-2xl mx-auto leading-relaxed shrink-0">
                    Erotic Visual Topology: Upon the desert of the Real, establishing a fiction more solid than reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 md:px-4">
            <DriverSelector selectedDriver={selectedDriver} onSelect={onDriverSelect} lang={lang} hoveredDriver={hoveredDriver} onHover={setHoveredDriver} />
          </div>
        </div>
      </main>

      <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={hoveredDriver} />
      <SutureModal isOpen={isSutureOpen} onClose={closeSuture} onGenerate={onSutureGenerate} isGenerating={isSutureGenerating} lang={lang} driverType={selectedDriver || DriverType.NARRATIVE} />
      {isHistoryOpen && <HistoryModal history={history} onRestore={onHistoryRestore} onClear={onHistoryClear} onClose={closeHistory} lang={lang} />}
    </div>
  );
};
