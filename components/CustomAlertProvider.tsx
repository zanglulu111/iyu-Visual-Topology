import React, { useState, useEffect } from 'react';
import { X, Sparkles, Fingerprint, AlertCircle, BellRing } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const CustomAlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();
    const [alerts, setAlerts] = useState<{ id: number, message: string }[]>([]);

    useEffect(() => {
        const handleAlert = (e: CustomEvent<string>) => {
            const id = Date.now() + Math.random();
            setAlerts(prev => [...prev, { id, message: e.detail }]);

            // Auto close after 8 seconds
            setTimeout(() => {
                setAlerts(prev => prev.filter(a => a.id !== id));
            }, 8000);
        };

        window.addEventListener('custom-alert', handleAlert as EventListener);

        // Setup the native alert override
        // We keep the original in case we need it, though usually we won't.
        const originalAlert = window.alert;
        window.alert = (message?: any) => {
            const msgString = typeof message === 'string' ? message : String(message);
            window.dispatchEvent(new CustomEvent('custom-alert', { detail: msgString }));
        };

        return () => {
            window.removeEventListener('custom-alert', handleAlert as EventListener);
            window.alert = originalAlert; // Restore on unmount
        };
    }, []);

    const removeAlert = (id: number) => {
        setAlerts(prev => prev.filter(a => a.id !== id));
    };

    return (
        <>
            {children}
            {/* Global Alert Container */}
            <div className={`fixed inset-0 z-[9999] flex flex-col pointer-events-none items-center justify-center p-4 transition-all duration-300 ${alerts.length > 0 ? (theme === 'retro' ? 'bg-[#3D1A16]/20 backdrop-blur-[2px] pointer-events-auto' : 'bg-black/60 backdrop-blur-sm pointer-events-auto') : ''}`}>

                {/* Click outside to close */}
                {alerts.length > 0 && (
                    <div className="absolute inset-0" onClick={() => setAlerts([])} />
                )}

                <div className="flex flex-col gap-6 items-center w-full max-w-sm relative z-10 pointer-events-none">
                    {alerts.map(alert => {
                        const isLogin = alert.message.includes("登录") || alert.message.includes("log in") || alert.message.includes("观测中心");
                        const isRetro = theme === 'retro';

                        return (
                            <div
                                key={alert.id}
                                className={`pointer-events-auto w-full rounded-2xl shadow-2xl p-8 flex flex-col items-center relative overflow-hidden animate-in zoom-in-95 fade-in duration-300
                                    ${isRetro 
                                        ? 'bg-[#F9F7F1] border-2 border-[#8B261D] shadow-[12px_12px_0px_0px_rgba(139,38,29,0.15)]' 
                                        : 'bg-[#08080a] border border-gold-primary/30 shadow-[0_0_50px_rgba(0,0,0,1)]'}`}
                            >
                                {/* Top Decoration */}
                                {isRetro ? (
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#8B261D] shadow-sm"></div>
                                ) : (
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-80 shadow-[0_0_20px_rgba(212,175,55,1)]"></div>
                                )}

                                <div className="mb-5 flex-shrink-0 relative">
                                    {isRetro ? (
                                        <div className="w-14 h-14 flex items-center justify-center bg-[#8B261D]/5 border-2 border-[#8B261D]/10 rounded-full">
                                            <BellRing size={28} className="text-[#8B261D]" />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gold-primary/20 blur-xl rounded-full"></div>
                                            <Sparkles size={32} className="text-gold-primary relative z-10" />
                                        </>
                                    )}
                                </div>

                                <div className="text-center w-full">
                                    <h4 className={`text-xs font-black tracking-[0.3em] uppercase mb-4 font-serif
                                        ${isRetro ? 'text-[#8B261D]/60' : 'text-gold-primary/70'}`}>
                                        {isRetro ? "SYSTEM NOTICE // 系统公告" : "System Notification"}
                                    </h4>
                                    <p className={`text-lg font-bold whitespace-pre-wrap leading-relaxed
                                        ${isRetro ? 'text-[#1A1814]' : 'text-white'}`}>
                                        {alert.message}
                                    </p>

                                    {isLogin && (
                                        <div className={`mt-8 pt-6 border-t flex flex-col items-center gap-4 ${isRetro ? 'border-[#8B261D]/10' : 'border-zinc-800/80'}`}>
                                            <div className={`w-14 h-14 rounded-full border flex items-center justify-center mb-1 shadow-sm
                                                ${isRetro 
                                                    ? 'bg-[#8B261D] border-[#8B261D] text-[#F9F7F1]' 
                                                    : 'bg-gold-primary/10 border-gold-primary/40 text-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.2)]'}`}>
                                                <Fingerprint size={28} />
                                            </div>
                                            <p className={`text-sm font-bold tracking-widest leading-relaxed
                                                ${isRetro ? 'text-[#8B261D]/80 italic' : 'text-zinc-400'}`}>
                                                {alert.message.includes("log in")
                                                    ? "Please click the avatar icon in the top right corner to log in."
                                                    : "引力异常。请点击右上角的【指纹】或【头像】以锚定您的身份坐标。"}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => removeAlert(alert.id)}
                                    className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border transition-all
                                        ${isRetro 
                                            ? 'text-[#8B261D]/40 hover:text-[#8B261D] bg-[#8B261D]/5 border-[#8B261D]/10 hover:border-[#8B261D]/30 hover:bg-[#8B261D]/10' 
                                            : 'text-zinc-500 hover:text-white bg-black/40 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900'}`}
                                >
                                    <X size={16} />
                                </button>
                                
                                {isRetro && (
                                    <div className="absolute bottom-2 right-4 text-[8px] font-mono text-[#8B261D]/20 uppercase tracking-tighter">
                                        Erotic_Engine_v2.0
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
