import React, { useState, useEffect } from 'react';
import { X, Sparkles, Fingerprint } from 'lucide-react';

export const CustomAlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
            <div className={`fixed inset-0 z-[9999] flex flex-col pointer-events-none items-center justify-center p-4 transition-all duration-300 ${alerts.length > 0 ? 'bg-black/60 backdrop-blur-sm pointer-events-auto' : ''}`}>

                {/* Click outside to close */}
                {alerts.length > 0 && (
                    <div className="absolute inset-0" onClick={() => setAlerts([])} />
                )}

                <div className="flex flex-col gap-6 items-center w-full max-w-md relative z-10 pointer-events-none">
                    {alerts.map(alert => {
                        const isLogin = alert.message.includes("登录") || alert.message.includes("log in") || alert.message.includes("观测中心");

                        return (
                            <div
                                key={alert.id}
                                className="pointer-events-auto bg-[#08080a] border border-gold-primary/30 w-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,1)] p-8 flex flex-col items-center relative overflow-hidden animate-in zoom-in-95 fade-in duration-300"
                            >
                                {/* Top Glow Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-80 shadow-[0_0_20px_rgba(212,175,55,1)]"></div>

                                <div className="mb-5 flex-shrink-0 relative">
                                    <div className="absolute inset-0 bg-gold-primary/20 blur-xl rounded-full"></div>
                                    <Sparkles size={32} className="text-gold-primary relative z-10" />
                                </div>

                                <div className="text-center w-full">
                                    <h4 className="text-gold-primary/70 text-xs font-bold tracking-[0.3em] uppercase mb-4 font-serif">System Notification</h4>
                                    <p className="text-white text-lg font-medium whitespace-pre-wrap leading-relaxed">{alert.message}</p>

                                    {isLogin && (
                                        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col items-center gap-3">
                                            <div className="w-12 h-12 rounded-full border border-gold-primary/40 flex items-center justify-center bg-gold-primary/10 text-gold-primary mb-1 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                                <Fingerprint size={24} />
                                            </div>
                                            <p className="text-zinc-400 text-sm font-bold tracking-widest leading-relaxed">
                                                {alert.message.includes("log in")
                                                    ? "Please click the avatar icon in the top right corner to log in."
                                                    : "引力异常。请点击右上角的【指纹】或【头像】以锚定您的身份坐标。"}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => removeAlert(alert.id)}
                                    className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-black/40 w-8 h-8 rounded-full flex items-center justify-center border border-zinc-800 hover:border-zinc-600 transition-all hover:bg-zinc-900"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
