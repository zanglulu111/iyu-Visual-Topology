import React, { useRef, useState } from 'react';
import { X, LogOut, Coins, Crown, Sparkles, Upload, Loader2, KeyRound, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { User } from '../types';
import { supabase } from '../services/supabaseAuth';
import { useTheme } from '../contexts/ThemeContext';

interface UserProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentUser: User;
    onLogout: () => void;
    onProfileUpdate?: (updates: Partial<User>) => void;
    lang: 'CN' | 'EN';
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose, currentUser, onLogout, onProfileUpdate, lang }) => {
    const { theme } = useTheme();
    const [isUploading, setIsUploading] = useState(false);
    const [isRedeeming, setIsRedeeming] = useState(false);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [newUsername, setNewUsername] = useState(currentUser.username);
    const [redeemCode, setRedeemCode] = useState('');
    const [redeemResult, setRedeemResult] = useState<{ success: boolean; message: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);


    if (!isOpen) return null;

    const isActiveMember = currentUser.isPro || ['annual', 'lifetime'].includes(currentUser.membershipTier || '');

    const getMembershipLabel = () => {
        const tier = currentUser.membershipTier;
        if (tier === 'lifetime') return lang === 'CN' ? '终身造物主 (Lifetime Creator)' : 'Lifetime Creator';
        if (tier === 'annual') return lang === 'CN' ? '年度架构师 (Annual Architect)' : 'Annual Architect';
        return lang === 'CN' ? '未激活 (Not Activated)' : 'Not Activated';
    };

    const t = {
        title: lang === 'CN' ? '主体观测中心' : 'Subject Observation Center',
        level: lang === 'CN' ? '观测层级' : 'Observation Level',
        tokens: lang === 'CN' ? '算力锚点' : 'Compute Tokens',
        logout: lang === 'CN' ? '切断连接 (Log Out)' : 'Sever Connection (Log Out)',
        uploading: lang === 'CN' ? '传输中...' : 'Uploading...',
        redeemTitle: lang === 'CN' ? '激活码兑换' : 'Activation Code',
        redeemDesc: lang === 'CN' ? '输入激活码以解锁核心引擎权限或注入算力。' : 'Enter an activation code to unlock engine access or inject tokens.',
        redeemPlaceholder: lang === 'CN' ? '输入激活码 / ENTER CODE' : 'ENTER ACTIVATION CODE',
        redeemBtn: lang === 'CN' ? '激活' : 'ACTIVATE',
        redeeming: lang === 'CN' ? '验证中...' : 'VERIFYING...',
        memberStatus: lang === 'CN' ? '会员状态' : 'Membership Status',
        active: lang === 'CN' ? '已激活' : 'ACTIVE',
        inactive: lang === 'CN' ? '未激活' : 'INACTIVE',
    };

    const redeemMessages: Record<string, string> = {
        ANNUAL_ACTIVATED: lang === 'CN' ? '🎉 年度架构师权限已激活！欢迎进入核心。' : '🎉 Annual Architect activated! Welcome to the core.',
        LIFETIME_ACTIVATED: lang === 'CN' ? '🎉 终身造物主权限已激活！永恒归位。' : '🎉 Lifetime Creator activated! Eternal access granted.',
        TOKENS_ADDED: lang === 'CN' ? '⚡ 算力锚点注入成功！' : '⚡ Compute tokens injected successfully!',
        CODE_NOT_FOUND: lang === 'CN' ? '激活码无效。请检查输入是否正确。' : 'Invalid activation code. Please check and try again.',
        CODE_ALREADY_USED: lang === 'CN' ? '此激活码已被使用。' : 'This activation code has already been used.',
        CODE_EXPIRED: lang === 'CN' ? '此激活码已过期。' : 'This activation code has expired.',
        NOT_LOGGED_IN: lang === 'CN' ? '请先登录后再兑换激活码。' : 'Please log in before redeeming a code.',
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

    const handleRedeem = async () => {
        const code = redeemCode.trim();
        if (!code) return;

        setIsRedeeming(true);
        setRedeemResult(null);

        try {
            const { data, error } = await supabase.rpc('redeem_code', { input_code: code });

            if (error) {
                console.error('Redeem RPC error:', error);
                setRedeemResult({ success: false, message: lang === 'CN' ? '兑换服务异常，请稍后再试。' : 'Redemption service error. Please try again.' });
                return;
            }

            const result = data as { success: boolean; message: string; type?: string; tokens_added?: number; new_total?: number; error?: string };

            if (result.success) {
                setRedeemResult({ success: true, message: redeemMessages[result.message] || result.message });
                setRedeemCode('');

                // Update local user state based on what was redeemed
                if (onProfileUpdate) {
                    if (result.type === 'annual') {
                        onProfileUpdate({
                            membershipTier: 'annual',
                            isPro: true,
                            level: lang === 'CN' ? '年度架构师 (Annual Architect)' : 'Annual Architect'
                        });
                    } else if (result.type === 'lifetime') {
                        onProfileUpdate({
                            membershipTier: 'lifetime',
                            isPro: true,
                            level: lang === 'CN' ? '终身造物主 (Lifetime Creator)' : 'Lifetime Creator'
                        });
                    } else if (result.type === 'tokens') {
                        onProfileUpdate({
                            tokens: result.new_total ?? (currentUser.tokens + (result.tokens_added ?? 0))
                        });
                    }
                }
            } else {
                setRedeemResult({ success: false, message: redeemMessages[result.error || ''] || (lang === 'CN' ? '兑换失败。' : 'Redemption failed.') });
            }
        } catch (err: any) {
            console.error('Redeem failed:', err);
            setRedeemResult({ success: false, message: (lang === 'CN' ? '兑换异常: ' : 'Redemption error: ') + (err.message || 'Unknown error') });
        } finally {
            setIsRedeeming(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isRedeeming && redeemCode.trim()) {
            handleRedeem();
        }
    };

    const handleUsernameUpdate = async () => {
        if (!newUsername.trim() || newUsername === currentUser.username) {
            setIsEditingUsername(false);
            return;
        }

        try {
            const { error } = await supabase.from('profiles').update({ username: newUsername }).eq('id', currentUser.id);
            if (error) throw error;

            if (onProfileUpdate) {
                onProfileUpdate({ username: newUsername });
            }
            setIsEditingUsername(false);
        } catch (err: any) {
            console.error('Update username failed:', err);
            alert(lang === 'CN' ? '主体更名失败' : 'Failed to update subject name');
        }
    };


    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-xl px-4 py-8 overflow-y-auto w-full animate-in fade-in duration-300">
            <div className={`w-full max-w-lg ${theme === 'retro' ? 'bg-[var(--bg-card)] border-[var(--border-main)]' : 'bg-[#0c0c0c] border-zinc-800'} border rounded-2xl shadow-2xl p-8 relative overflow-hidden my-auto transition-colors duration-500`}>
                {/* Top Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 ${theme === 'retro' ? 'bg-[var(--text-accent)]' : 'bg-gradient-to-r from-transparent via-gold-primary to-transparent'} opacity-50`}></div>

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

                    {isEditingUsername ? (
                        <div className="flex items-center gap-2">
                            <input
                                autoFocus
                                type="text"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                                onBlur={handleUsernameUpdate}
                                onKeyDown={(e) => e.key === 'Enter' && handleUsernameUpdate()}
                                className={`bg-transparent border ${theme === 'retro' ? 'border-[var(--text-accent)]/50' : 'border-gold-primary/50'} rounded px-2 py-1 text-xl font-serif text-[var(--text-main)] text-center outline-none`}
                            />
                        </div>
                    ) : (
                        <h2
                            onClick={() => setIsEditingUsername(true)}
                            className={`text-2xl font-serif ${theme === 'retro' ? 'text-[var(--text-main)] hover:text-[var(--text-accent)]' : 'text-white hover:text-gold-primary'} tracking-tight cursor-pointer transition-colors group relative`}
                        >
                            {currentUser.username}
                            <span className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[10px] text-[var(--text-muted)] font-sans uppercase">Edit</span>
                        </h2>
                    )}

                    <p className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} uppercase tracking-widest mt-1 text-center`}>{t.title}</p>
                </div>

                <div className="space-y-4 mb-8">
                    {/* Membership Status */}
                    <div className={`${theme === 'retro' ? 'bg-[var(--bg-main)]/50 border-[var(--border-main)]' : 'bg-black border-zinc-800'} border rounded-xl p-4 flex items-center justify-between`}>
                        <div className="flex items-center gap-3">
                            <Crown size={16} className={isActiveMember ? (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-gold-primary') : (theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600')} />
                            <div>
                                <span className={`text-xs font-bold ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'} uppercase tracking-widest`}>{t.memberStatus}</span>
                                <p className={`text-xs font-mono ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-white'} mt-0.5`}>{getMembershipLabel()}</p>
                            </div>
                        </div>
                        {isActiveMember ? (
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/40 border border-emerald-800/40 rounded px-3 py-1.5">
                                <CheckCircle2 size={12} /> {t.active}
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5">
                                <ShieldCheck size={12} /> {t.inactive}
                            </span>
                        )}
                    </div>

                    {/* Tokens (only show when activated) */}
                    {isActiveMember && (
                        <div className={`${theme === 'retro' ? 'bg-[var(--bg-main)]/50 border-[var(--border-main)]' : 'bg-black border-zinc-800'} border rounded-xl p-4 flex items-center justify-between transition-colors`}>
                            <div className="flex items-center gap-3">
                                <Coins size={16} className={theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-gold-primary'} />
                                <span className={`text-xs font-bold ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'} uppercase tracking-widest`}>{t.tokens}</span>
                            </div>
                            <span className={`text-lg font-mono ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-gold-primary'} flex items-center gap-1`}>
                                <Sparkles size={14} /> {currentUser.tokens ?? 0} <span className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'}`}>TOKENS</span>
                            </span>
                        </div>
                    )}
                </div>

                {/* Activation Code Redemption */}
                <div className={`space-y-4 mb-8 border-t ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-zinc-800/80'} pt-6 transition-colors`}>
                    <div className="flex items-center gap-2 mb-4">
                        <KeyRound size={14} className={theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-gold-primary'} />
                        <p className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold tracking-widest uppercase`}>{t.redeemTitle}</p>
                    </div>

                    <p className={`text-[10px] font-mono ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} leading-relaxed mb-3`}>{t.redeemDesc}</p>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={redeemCode}
                            onChange={(e) => {
                                setRedeemCode(e.target.value.toUpperCase());
                                setRedeemResult(null);
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder={t.redeemPlaceholder}
                            className={`flex-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]' : 'bg-black border-zinc-800'} border focus:border-[var(--text-accent)]/50 rounded-lg px-4 py-3 text-xs text-[var(--text-main)] font-mono tracking-widest focus:outline-none transition-colors placeholder:text-zinc-700`}
                            disabled={isRedeeming}
                        />
                        <button
                            onClick={handleRedeem}
                            disabled={isRedeeming || !redeemCode.trim()}
                            className={`${theme === 'retro' ? 'bg-[var(--text-accent)] text-white hover:opacity-90' : 'bg-gold-primary text-black hover:bg-amber-400'} disabled:opacity-40 font-bold uppercase tracking-[0.15em] px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[100px]`}
                        >
                            {isRedeeming ? (
                                <Loader2 size={14} className="animate-spin" />
                            ) : (
                                <KeyRound size={14} />
                            )}
                            <span className="text-[10px]">{isRedeeming ? t.redeeming : t.redeemBtn}</span>
                        </button>
                    </div>

                    {/* Redeem Result Feedback */}
                    {redeemResult && (
                        <div className={`mt-3 p-3 rounded-lg border text-[11px] font-mono leading-relaxed ${redeemResult.success
                            ? (theme === 'retro' ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300')
                            : (theme === 'retro' ? 'bg-red-100 border-red-300 text-red-800' : 'bg-red-950/30 border-red-800/40 text-red-400')
                            }`}>
                            {redeemResult.message}
                        </div>
                    )}
                </div>

                <button
                    onClick={() => {
                        onLogout();
                        onClose();
                    }}
                    className={`w-full ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] border-[var(--border-main)] hover:bg-red-50 hover:text-red-700' : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-red-950/30 hover:text-red-400 hover:border-red-900/50'} border font-bold uppercase tracking-[0.2em] py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300`}
                >
                    <LogOut size={16} />
                    <span className="text-[10px]">{t.logout}</span>
                </button>
            </div>
        </div>
    );
}
