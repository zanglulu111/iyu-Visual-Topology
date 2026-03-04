import React, { useState } from 'react';
import { X, User, ShieldCheck, Fingerprint, ArrowRight, Sparkles, UserPlus, LogIn } from 'lucide-react';
import { User as UserType } from '../types';
import { supabaseAuthService } from '../services/supabaseAuth';
import { supabaseDatabase } from '../services/supabaseDatabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
  lang: 'CN' | 'EN';
}

// Google "G" SVG icon component
const GoogleIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, lang }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setError('');
    setIsGoogleLoading(true);
    try {
      await supabaseAuthService.signInWithGoogle();
      // Browser will redirect to Google, then back to the app.
      // onAuthStateChange in App.tsx handles the rest.
    } catch (err: any) {
      console.error('Google login error', err);
      setError(lang === 'CN' ? 'Google 登录失败: ' + (err.message || '未知错误') : 'Google login failed: ' + (err.message || 'Unknown error'));
      setIsGoogleLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;

    setError('');
    setIsLoading(true);

    const syntheticEmail = `${username.toLowerCase().replace(/[^a-z0-9]/g, '')}@mist.internal`;

    try {
      if (isRegister) {
        // Register logic via Supabase
        const authUser = await supabaseAuthService.signUp(syntheticEmail, password, username);

        // At this point, the backend trigger creates the profile. Let's fetch it.
        // Wait a slight bit for the trigger to finish or just construct local memory
        await new Promise(r => setTimeout(r, 500));
        let profile = await supabaseDatabase.getUserProfile();

        const mappedUser: UserType = {
          id: authUser.id,
          username: authUser.username || username,
          level: profile?.membership_tier === 'lifetime' ? '终身造物主 (Lifetime Creator)' : profile?.membership_tier === 'annual' ? '年度架构师 (Annual Architect)' : profile?.membership_tier === 'pro' ? '高阶导演 (Master Director)' : '初级观测者 (Initiate Observer)',
          isPro: ['pro', 'annual', 'lifetime'].includes(profile?.membership_tier || ''),
          membershipTier: profile?.membership_tier || 'free',
          avatarColor: profile?.avatar_color || 'bg-zinc-600',
          avatarUrl: profile?.avatar_url,
          tokens: profile?.tokens ?? 10,
        };

        onLogin(mappedUser);
        onClose();
      } else {
        // Login logic via Supabase
        const authUser = await supabaseAuthService.signIn(syntheticEmail, password);
        const profile = await supabaseDatabase.getUserProfile();

        const mappedUser: UserType = {
          id: authUser.id,
          username: profile?.username || authUser.username || username,
          level: profile?.membership_tier === 'lifetime' ? '终身造物主 (Lifetime Creator)' : profile?.membership_tier === 'annual' ? '年度架构师 (Annual Architect)' : profile?.membership_tier === 'pro' ? '高阶导演 (Master Director)' : '初级观测者 (Initiate Observer)',
          isPro: ['pro', 'annual', 'lifetime'].includes(profile?.membership_tier || ''),
          membershipTier: profile?.membership_tier || 'free',
          avatarColor: profile?.avatar_color || 'bg-zinc-600',
          avatarUrl: profile?.avatar_url,
          tokens: profile?.tokens ?? 0,
        };

        onLogin(mappedUser);
        onClose();
      }
    } catch (err: any) {
      console.error('Auth error', err);
      if (err.message && err.message.includes('Supabase Config')) {
        setError(err.message);
      } else if (err.message && err.message.includes('rate limit')) {
        setError(lang === 'CN' ? '请求上限受限（Rate Limit），需在Supabase后台或稍后再试' : 'Email rate limit exceeded. Check Supabase config.');
      } else if (err.message && err.message.includes('Invalid login')) {
        setError(lang === 'CN' ? '能指密码不匹配或主体未被确证' : 'Invalid signifier code or unvalidated subject');
      } else if (err.message && err.message.includes('already registered')) {
        setError(lang === 'CN' ? '该主体 ID 已被确证' : 'Subject ID already validated');
      } else {
        setError(err.message || (isRegister
          ? (lang === 'CN' ? '确证失败: 密码过短(至少6位)或网络异常' : 'Validation failed: Password too short or network error')
          : (lang === 'CN' ? '能指密码不匹配或不存在' : 'Signifier code mismatch or not found')
        ));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const t = {
    title: isRegister
      ? (lang === 'CN' ? '确证新主体' : 'New Identity Validation')
      : (lang === 'CN' ? '主体身份回归' : 'Identity Re-Validation'),
    sub: isRegister
      ? (lang === 'CN' ? '在符号界注册您的唯一能指' : 'Register your unique signifier in the symbolic order')
      : (lang === 'CN' ? '请输入能指密码进入迷雾核心' : 'Enter the Signifier Code to access MIST CORE'),
    user: lang === 'CN' ? '主体名称' : 'Subject Name',
    pass: lang === 'CN' ? '能指密码' : 'Signifier Code',
    btn: isRegister
      ? (lang === 'CN' ? '确证并进入' : 'Validate & Enter')
      : (lang === 'CN' ? '回归核心' : 'Return to Core'),
    switch: isRegister
      ? (lang === 'CN' ? '已有确证身份？去登录' : 'Already validated? Login')
      : (lang === 'CN' ? '尚未确证身份？去注册' : 'New Subject? Register'),
    member: lang === 'CN' ? 'MIST 核心能指库' : 'MIST Core Signifiers',
    googleBtn: lang === 'CN' ? '使用 Google 账号登录' : 'Sign in with Google',
    divider: lang === 'CN' ? '或' : 'OR'
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4">
      <div className="w-full max-w-md bg-[#0c0c0c] border border-zinc-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-50"></div>

        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X size={20} />
        </button>

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-zinc-900 border border-gold-primary/30 rounded-full flex items-center justify-center text-gold-primary mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            {isRegister ? <UserPlus size={32} /> : <Fingerprint size={32} />}
          </div>
          <h2 className="text-2xl font-serif text-white tracking-tight">{t.title}</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2 text-center">{t.sub}</p>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isGoogleLoading}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3.5 px-4 rounded-lg transition-all duration-200 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl mb-6"
          style={{ fontFamily: "'Roboto', 'Segoe UI', sans-serif" }}
        >
          {isGoogleLoading ? (
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <GoogleIcon size={20} />
          )}
          <span className="text-sm tracking-wide">
            {isGoogleLoading ? (lang === 'CN' ? '正在跳转...' : 'Redirecting...') : t.googleBtn}
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-zinc-800"></div>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">{t.divider}</span>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">{t.user}</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Subject ID"
                className="w-full bg-black border border-zinc-800 rounded-lg pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-gold-primary/50 transition-all font-mono"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">{t.pass}</label>
            <div className="relative">
              <ShieldCheck size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full bg-black border border-zinc-800 rounded-lg pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-gold-primary/50 transition-all font-mono"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center animate-pulse">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold-primary hover:bg-amber-400 text-black font-bold uppercase tracking-[0.2em] py-4 rounded-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isLoading ? (lang === 'CN' ? '建立链接中...' : 'CONNECTING...') : t.btn}</span>
            {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>

        <button
          onClick={() => setIsRegister(!isRegister)}
          className="w-full mt-6 text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
        >
          {t.switch}
        </button>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-gold-primary" />
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{t.member}</span>
        </div>
      </div>
    </div>
  );
};
