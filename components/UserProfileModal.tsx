import React, { useRef, useState } from 'react';
import { X, LogOut, Coins, Crown, Sparkles, Upload, Loader2 } from 'lucide-react';
import { User } from '../types';
import { supabase } from '../services/supabaseAuth';

interface UserProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentUser: User;
    onLogout: () => void;
    onProfileUpdate?: (updates: Partial<User>) => void;
    lang: 'CN' | 'EN';
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose, currentUser, onLogout, onProfileUpdate, lang }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const t = {
        title: lang === 'CN' ? '主体观测中心' : 'Subject Observation Center',
        level: lang === 'CN' ? '观测层级' : 'Observation Level',
        tokens: lang === 'CN' ? '算力锚点' : 'Compute Tokens',
        logout: lang === 'CN' ? '切断连接 (Log Out)' : 'Sever Connection (Log Out)',
        uploading: lang === 'CN' ? '传输中...' : 'Uploading...',
        topup: lang === 'CN' ? '注入 100 算力锚点' : 'Inject 100 Tokens',
        topupDesc: lang === 'CN' ? '单次充值 ¥10' : 'Single recharge ¥10',
        annualTitle: lang === 'CN' ? '年度架构师' : 'Annual Architect',
        annualPrice: lang === 'CN' ? '¥999 / YEAR' : '$149 / YEAR',
        annualDesc: lang === 'CN' ? '解锁所有核心引擎与无限制调用额度。' : 'Unlock all engines & unlimited compute.',
        lifetimeTitle: lang === 'CN' ? '终身造物主' : 'Lifetime Creator',
        lifetimePrice: lang === 'CN' ? '¥1888 / CORE' : '$288 / CORE',
        lifetimeDesc: lang === 'CN' ? '含全平台特权及永续模型访问支持。' : 'Permanent pro privilege & updates.',
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${currentUser.id}-${Math.random()}.${fileExt}`;
            const filePath = `avatars/${fileName}`;

            // Upload the file
            const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
            if (uploadError) throw uploadError;

            // Get public URL
            const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
            const avatarUrl = publicUrlData.publicUrl;

            // Update user profile table
            const { error: updateError } = await supabase.from('profiles').update({ avatar_url: avatarUrl }).eq('id', currentUser.id);
            if (updateError) throw updateError;

            // Update local state
            if (onProfileUpdate) {
                onProfileUpdate({ avatarUrl });
            }
        } catch (err: any) {
            console.error('Avatar upload failed:', err);
            alert((lang === 'CN' ? '头像上传失败: ' : 'Avatar upload failed: ') + (err.message || 'Unknown error'));
        } finally {
            setIsUploading(false);
        }
    };

    const handleTopUp = async () => {
        setIsProcessing(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 800));
            const newTokens = (currentUser.tokens || 0) + 100;

            const { error: updateError } = await supabase.from('profiles').update({ tokens: newTokens }).eq('id', currentUser.id);
            if (updateError) throw updateError;

            if (onProfileUpdate) {
                onProfileUpdate({ tokens: newTokens });
            }
        } catch (err: any) {
            console.error('Top up failed:', err);
            alert((lang === 'CN' ? '算力注入失败: ' : 'Top up failed: ') + (err.message || 'Unknown error'));
        } finally {
            setIsProcessing(false);
        }
    };

    const handleUpgrade = async (tier: 'annual' | 'lifetime') => {
        setIsProcessing(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 800));
            const { error: updateError } = await supabase.from('profiles').update({ membership_tier: tier }).eq('id', currentUser.id);
            if (updateError) throw updateError;

            const level = tier === 'lifetime' ? '终身造物主 (Lifetime Creator)' : '年度架构师 (Annual Architect)';
            if (onProfileUpdate) {
                onProfileUpdate({ membershipTier: tier, isPro: true, level });
            }
            alert(lang === 'CN' ? '权限提升成功，欢迎归位核心。' : 'Clearance upgraded successfully.');
        } catch (err: any) {
            console.error('Upgrade failed:', err);
            alert((lang === 'CN' ? '升级跃迁失败: ' : 'Upgrade failed: ') + (err.message || 'Unknown error'));
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-xl px-4 py-8 overflow-y-auto w-full animate-in fade-in duration-300">
            <div className="w-full max-w-lg bg-[#0c0c0c] border border-zinc-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden my-auto">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-50"></div>

                <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
                    <X size={20} />
                </button>

                <div className="flex flex-col items-center mb-8 relative">
                    <div
                        onClick={handleAvatarClick}
                        className={`w-20 h-20 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-zinc-600')} border-2 border-gold-primary/30 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-4 cursor-pointer group overflow-hidden relative`}
                    >
                        {currentUser.avatarUrl ? (
                            <img src={currentUser.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            currentUser.username.substring(0, 1).toUpperCase()
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            {isUploading ? <Loader2 size={24} className="animate-spin text-gold-primary" /> : <Upload size={24} className="text-white" />}
                        </div>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />
                    <h2 className="text-2xl font-serif text-white tracking-tight">{currentUser.username}</h2>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 text-center">{t.title}</p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="bg-black border border-zinc-800 rounded-xl p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <Crown size={16} className="text-gold-primary" />
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t.level}</span>
                        </div>
                        <span className="text-xs font-mono text-white pl-7">{currentUser.level}</span>
                    </div>

                    <div className="bg-black border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Coins size={16} className="text-gold-primary" />
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t.tokens}</span>
                        </div>
                        <span className="text-lg font-mono text-gold-primary flex items-center gap-1">
                            <Sparkles size={14} /> {currentUser.tokens ?? 0} <span className="text-[10px] text-zinc-600">TOKENS</span>
                        </span>
                    </div>
                </div>

                {/* Subscriptions & Shop */}
                <div className="space-y-4 mb-8 border-t border-zinc-800/80 pt-6">
                    <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-4">{lang === 'CN' ? '核心特权库 (Store)' : 'Privilege Store'}</p>

                    {/* Token Top Up */}
                    <div className="bg-black border border-zinc-800 rounded-xl p-4 flex items-center justify-between transition-colors hover:border-gold-primary/30">
                        <div>
                            <p className="text-sm font-bold text-white tracking-widest">{t.topup}</p>
                            <p className="text-[10px] font-mono text-zinc-500 mt-1">{t.topupDesc}</p>
                        </div>
                        <button
                            onClick={handleTopUp}
                            disabled={isProcessing}
                            className="bg-gold-primary hover:bg-gold-primary/90 disabled:opacity-50 text-black font-bold uppercase tracking-[0.2em] px-4 py-2 rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        >
                            {isProcessing ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                            <span className="text-[10px]">¥ 10</span>
                        </button>
                    </div>

                    {/* Pro Memberships */}
                    {(!currentUser.membershipTier || currentUser.membershipTier === 'free' || currentUser.membershipTier === 'annual') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {(!currentUser.membershipTier || currentUser.membershipTier === 'free') && (
                                <button disabled={isProcessing} onClick={() => handleUpgrade('annual')} className="flex flex-col items-start bg-gradient-to-br from-zinc-900 to-black hover:from-gold-primary/20 hover:to-black border border-zinc-800 hover:border-gold-primary/60 rounded-xl p-5 text-left transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gold-primary/10 rounded-full blur-xl group-hover:bg-gold-primary/20 transition-all"></div>
                                    <h4 className="text-gold-primary text-sm font-bold mb-1 tracking-widest">{t.annualTitle}</h4>
                                    <p className="text-white text-lg font-mono tracking-tight mb-2">{t.annualPrice}</p>
                                    <p className="text-[10px] text-zinc-400 leading-relaxed max-w-[90%]">{t.annualDesc}</p>
                                </button>
                            )}

                            <button disabled={isProcessing} onClick={() => handleUpgrade('lifetime')} className="flex flex-col items-start bg-gradient-to-br from-zinc-900 to-black hover:from-purple-900/40 hover:to-black border border-zinc-800 hover:border-purple-500/60 rounded-xl p-5 text-left transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
                                <h4 className="text-purple-400 text-sm font-bold mb-1 tracking-widest">{t.lifetimeTitle}</h4>
                                <p className="text-white text-lg font-mono tracking-tight mb-2">{t.lifetimePrice}</p>
                                <p className="text-[10px] text-zinc-400 leading-relaxed max-w-[90%]">{t.lifetimeDesc}</p>
                            </button>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => {
                        onLogout();
                        onClose();
                    }}
                    className="w-full bg-zinc-900 hover:bg-red-950/30 text-zinc-400 hover:text-red-400 border border-zinc-800 hover:border-red-900/50 font-bold uppercase tracking-[0.2em] py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
                >
                    <LogOut size={16} />
                    <span className="text-[10px]">{t.logout}</span>
                </button>
            </div>
        </div>
    );
}
