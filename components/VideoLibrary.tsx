// components/VideoLibrary.tsx
// 邪典影像 - Cult Cinema 沉浸式影像档案馆
// 复刻 601 Studio 风格的全屏沉浸式视频展示界面
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Plus, Trash2, Loader2, ExternalLink, Volume2, VolumeX, Pause, Play, Info, X, ArrowDown } from 'lucide-react';
import { videoService, Video, getEmbedUrl, getYouTubeThumbnail } from '../services/videoService';

interface VideoLibraryProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    isAdmin?: boolean;
    isFullScreen?: boolean;
}

// 大号装饰性编号字体样式
const decorativeNumberStyle: React.CSSProperties = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    color: 'rgba(212, 199, 159, 0.15)',
    lineHeight: 0.85,
    letterSpacing: '-0.04em',
    userSelect: 'none',
    pointerEvents: 'none',
};

// 主色调 - cream/gold 色系 (参照601)
const CREAM = '#d4c79f';
const CREAM_DIM = 'rgba(212, 199, 159, 0.5)';
const CREAM_VERY_DIM = 'rgba(212, 199, 159, 0.25)';

export const VideoLibrary: React.FC<VideoLibraryProps> = ({ isOpen, onClose, lang, isAdmin = false, isFullScreen = false }) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeVideo, setActiveVideo] = useState<Video | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [addLoading, setAddLoading] = useState(false);
    const [viewMode, setViewMode] = useState<'gallery' | 'archive'>('gallery');
    const [showInfo, setShowInfo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    // 新增视频表单状态
    const [newVideoUrl, setNewVideoUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [addError, setAddError] = useState('');

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const loadVideos = useCallback(async () => {
        setLoading(true);
        try {
            const data = isAdmin
                ? await videoService.getAllVideos()
                : await videoService.getPublishedVideos(selectedCategory || undefined);
            
            // 如果视频数量太少，注入几个占位视频方便预览效果
            let displayVideos = [...data];
            if (displayVideos.length < 5) {
                const placeholderVideos: Video[] = [
                    { id: 'mock-1', title: 'GHOST IN THE SHELL (1995)', description: 'Cyberpunk classic.', platform: 'youtube', video_id: 'p2MEaROKjaE', category: 'CYBERPUNK', created_at: new Date(Date.now() - 10000000).toISOString(), updated_at: new Date().toISOString(), is_published: true, sort_order: 0, thumbnail_url: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=1200&q=80' },
                    { id: 'mock-2', title: 'BLADE RUNNER 2049', description: 'Visual masterpiece.', platform: 'youtube', video_id: 'gCcx85zbxz4', category: 'SCI-FI', created_at: new Date(Date.now() - 20000000).toISOString(), updated_at: new Date().toISOString(), is_published: true, sort_order: 0, thumbnail_url: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?w=1200&q=80' },
                    { id: 'mock-3', title: 'THE MATRIX: ARCHITECT', description: 'Ergo, concordantly, vis-a-vis.', platform: 'youtube', video_id: 'Zq5XJtXhtZ8', category: 'PHILOSOPHY', created_at: new Date(Date.now() - 30000000).toISOString(), updated_at: new Date().toISOString(), is_published: true, sort_order: 0, thumbnail_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80' },
                    { id: 'mock-4', title: 'AKIRA (1988) VISUALS', description: 'Neo-Tokyo is about to E.X.P.L.O.D.E.', platform: 'youtube', video_id: 'FtPhDvcdGDM', category: 'ANIME', created_at: new Date(Date.now() - 40000000).toISOString(), updated_at: new Date().toISOString(), is_published: true, sort_order: 0, thumbnail_url: 'https://images.unsplash.com/photo-1558470598-a5fd96cb26b4?w=1200&q=80' },
                    { id: 'mock-5', title: 'STALKER (1979)', description: 'Tarkovsky\'s Zone.', platform: 'youtube', video_id: 'GM_GOpiEQEE', category: 'ART FILM', created_at: new Date(Date.now() - 50000000).toISOString(), updated_at: new Date().toISOString(), is_published: true, sort_order: 0, thumbnail_url: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&q=80' }
                ];
                // 只添加不存在的占位符
                const needed = 6 - displayVideos.length;
                displayVideos = [...displayVideos, ...placeholderVideos.slice(0, needed)];
            }
            
            setVideos(displayVideos);
            const cats = await videoService.getCategories();
            
            // 补充一些占位分类
            const displayCats = new Set([...cats, 'CYBERPUNK', 'SCI-FI', 'PHILOSOPHY', 'ART FILM', 'ANIME']);
            setCategories(Array.from(displayCats));
        } catch (err) {
            console.error('Failed to load videos:', err);
        } finally {
            setLoading(false);
        }
    }, [selectedCategory, isAdmin]);

    useEffect(() => {
        if (isOpen) {
            loadVideos();
        }
    }, [isOpen, loadVideos]);

    // 滚动监听 - 追踪当前视频索引
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            setIsScrolling(true);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);

            const scrollTop = container.scrollTop;
            const itemHeight = container.clientHeight;
            const index = Math.round(scrollTop / itemHeight);
            setCurrentIndex(Math.max(0, Math.min(index, filteredVideos.length - 1)));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [videos.length]);

    const handleAddVideo = async () => {
        if (!newVideoUrl.trim() || !newTitle.trim()) {
            setAddError(lang === 'CN' ? '请填写视频链接和标题' : 'Please enter a video URL and title');
            return;
        }

        const parsed = videoService.parseVideoUrl(newVideoUrl.trim());
        if (!parsed) {
            setAddError(lang === 'CN' ? '无法识别的视频链接' : 'Unrecognized video URL');
            return;
        }

        setAddLoading(true);
        setAddError('');
        try {
            await videoService.addVideo({
                title: newTitle.trim(),
                description: newDescription.trim() || undefined,
                platform: parsed.platform,
                video_id: parsed.video_id,
                category: newCategory.trim() || undefined,
            });
            setNewVideoUrl(''); setNewTitle(''); setNewDescription(''); setNewCategory('');
            setShowAddForm(false);
            loadVideos();
        } catch (err: any) {
            setAddError(err?.message || 'Failed to add video');
        } finally {
            setAddLoading(false);
        }
    };

    const handleDeleteVideo = async (id: string) => {
        if (!confirm(lang === 'CN' ? '确认删除此视频？' : 'Delete this video?')) return;
        try {
            await videoService.deleteVideo(id);
            if (activeVideo?.id === id) setActiveVideo(null);
            loadVideos();
        } catch (err) {
            console.error('Failed to delete video:', err);
        }
    };

    const filteredVideos = useMemo(() => {
        return videos.filter(v => {
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                return v.title.toLowerCase().includes(term) ||
                    (v.description || '').toLowerCase().includes(term) ||
                    (v.category || '').toLowerCase().includes(term);
            }
            if (selectedCategory) {
                return v.category === selectedCategory;
            }
            return true;
        });
    }, [videos, searchTerm, selectedCategory]);

    const handleSelectVideo = (video: Video) => {
        setActiveVideo(video);
        setShowInfo(false);
    };

    const handleGoBack = () => {
        setActiveVideo(null);
        setShowInfo(false);
    };

    const getVideoSourceUrl = (video: Video) => {
        if (video.platform === 'youtube') return `https://www.youtube.com/watch?v=${video.video_id}`;
        if (video.platform === 'bilibili') return `https://www.bilibili.com/video/${video.video_id}`;
        return video.video_id;
    };

    const scrollToVideo = (index: number) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        container.scrollTo({
            top: index * container.clientHeight,
            behavior: 'smooth'
        });
    };

    if (!isOpen) return null;

    // ═══════════════════════════════════════════════════
    // 视频播放器视图 (Video Player View)
    // ═══════════════════════════════════════════════════
    if (activeVideo) {
        return (
            <div className="w-full h-full" style={{ background: '#000' }}>
                {/* 内嵌 CSS 动画 */}
                <style>{`
                    @keyframes cultFadeIn { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes cultSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    @keyframes cultPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
                    .cult-fade-in { animation: cultFadeIn 0.6s ease-out forwards; }
                    .cult-slide-up { animation: cultSlideUp 0.8s ease-out forwards; }
                `}</style>

                {/* 顶部导航栏 */}
                <div className="cult-fade-in" style={{
                    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px 40px', pointerEvents: 'none',
                }}>
                    {/* INFO 按钮 */}
                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        style={{
                            pointerEvents: 'auto',
                            padding: '6px 24px',
                            border: `1px solid ${CREAM_DIM}`,
                            borderRadius: '20px',
                            background: showInfo ? CREAM : 'transparent',
                            color: showInfo ? '#000' : CREAM,
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: "'Helvetica Neue', sans-serif",
                        }}
                        onMouseEnter={e => {
                            if (!showInfo) {
                                e.currentTarget.style.background = 'rgba(212,199,159,0.1)';
                            }
                        }}
                        onMouseLeave={e => {
                            if (!showInfo) {
                                e.currentTarget.style.background = 'transparent';
                            }
                        }}
                    >
                        INFO
                    </button>
                </div>

                {/* 视频播放区域 */}
                <div className="cult-fade-in" style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: showInfo ? '80px 200px 120px' : '60px 200px 80px',
                    transition: 'padding 0.5s ease',
                }}>
                    <div style={{
                        width: '100%', maxWidth: '1200px',
                        aspectRatio: '16/9',
                        position: 'relative',
                        boxShadow: '0 0 80px rgba(0,0,0,0.8)',
                    }}>
                        {activeVideo.platform === 'direct' ? (
                            <video
                                src={activeVideo.video_id}
                                controls
                                autoPlay
                                style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
                                onContextMenu={e => e.preventDefault()}
                            />
                        ) : (
                            <iframe
                                src={getEmbedUrl(activeVideo.platform, activeVideo.video_id)}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={activeVideo.title}
                            />
                        )}
                    </div>
                </div>

                {/* 视频信息面板 (展开时显示) */}
                {showInfo && (
                    <div className="cult-slide-up" style={{
                        position: 'absolute', bottom: '80px', left: '40px', right: '40px',
                        zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                    }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h2 style={{
                                fontSize: '28px', fontWeight: 300, color: CREAM,
                                marginBottom: '12px', lineHeight: 1.3,
                                fontFamily: "'Helvetica Neue', sans-serif",
                            }}>
                                {activeVideo.title}
                            </h2>
                            {activeVideo.description && (
                                <p style={{
                                    fontSize: '13px', color: CREAM_DIM, lineHeight: 1.8,
                                    fontFamily: "'Helvetica Neue', sans-serif",
                                }}>
                                    {activeVideo.description}
                                </p>
                            )}
                            <div style={{ display: 'flex', gap: '16px', marginTop: '16px', alignItems: 'center' }}>
                                {activeVideo.category && (
                                    <span style={{
                                        fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em',
                                        textTransform: 'uppercase', color: CREAM_DIM,
                                        padding: '4px 12px', border: `1px solid ${CREAM_VERY_DIM}`,
                                        borderRadius: '2px',
                                    }}>
                                        {activeVideo.category}
                                    </span>
                                )}
                                <span style={{
                                    fontSize: '10px', letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: CREAM_VERY_DIM,
                                }}>
                                    {activeVideo.platform} · {new Date(activeVideo.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* 底部控制栏 */}
                <div className="cult-fade-in" style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 40px',
                }}>
                    {/* 左下: 视频标题链接 */}
                    <a
                        href={getVideoSourceUrl(activeVideo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            color: CREAM_DIM, fontSize: '12px', fontWeight: 600,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            textDecoration: 'none', transition: 'color 0.3s',
                            fontFamily: "'Helvetica Neue', sans-serif",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = CREAM}
                        onMouseLeave={e => e.currentTarget.style.color = CREAM_DIM}
                    >
                        {activeVideo.title.length > 30 ? activeVideo.title.substring(0, 30) + '...' : activeVideo.title}
                        <ExternalLink size={12} />
                    </a>

                    {/* 中间: GO BACK 按钮 */}
                    <button
                        onClick={handleGoBack}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: CREAM_DIM, fontSize: '12px', fontWeight: 600,
                            letterSpacing: '0.15em', textTransform: 'uppercase',
                            fontFamily: "'Helvetica Neue', sans-serif",
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = CREAM}
                        onMouseLeave={e => e.currentTarget.style.color = CREAM_DIM}
                    >
                        {lang === 'CN' ? '返回' : 'GO BACK'}
                        <X size={14} />
                    </button>

                    {/* 右下: 控制按钮 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {isAdmin && (
                            <button
                                onClick={() => handleDeleteVideo(activeVideo.id)}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    color: 'rgba(255,100,100,0.5)', transition: 'color 0.3s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = '#ff6464'}
                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,100,100,0.5)'}
                                title={lang === 'CN' ? '删除视频' : 'Delete video'}
                            >
                                <Trash2 size={16} />
                            </button>
                        )}
                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                color: showInfo ? CREAM : CREAM_DIM, transition: 'color 0.3s',
                            }}
                        >
                            <Info size={16} />
                        </button>
                    </div>
                </div>

                {/* 右侧滚动条装饰 */}
                <div style={{
                    position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                    width: '3px', height: '80px', background: 'rgba(212,199,159,0.08)',
                    borderRadius: '2px', zIndex: 20,
                }}>
                    <div style={{
                        width: '100%', height: '30px', background: CREAM,
                        borderRadius: '2px', transition: 'all 0.3s',
                    }} />
                </div>
            </div>
        );
    }

    // ═══════════════════════════════════════════════════
    // 主页面 - 画廊 / 档案模式
    // ═══════════════════════════════════════════════════
    return (
        <div style={{ width: '100%', height: '100%', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
            {/* 内嵌 CSS */}
            <style>{`
                @keyframes cultFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes cultSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes cultFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
                .cult-fade-in { animation: cultFadeIn 0.8s ease-out forwards; }
                .cult-slide-up { animation: cultSlideUp 0.8s ease-out forwards; }
                .cult-gallery-scroll {
                    scroll-snap-type: y mandatory;
                    -webkit-overflow-scrolling: touch;
                }
                .cult-gallery-scroll::-webkit-scrollbar { width: 0; }
                .cult-gallery-item {
                    scroll-snap-align: start;
                    scroll-snap-stop: always;
                }
                .cult-archive-row {
                    transition: background 0.3s ease, color 0.3s ease;
                }
                .cult-archive-row:hover {
                    background: rgba(212, 199, 159, 0.03) !important;
                }
                .cult-thumbnail-hover {
                    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.8s ease;
                    transform: perspective(1500px) rotateX(8deg) rotateY(-12deg) rotateZ(1deg) scale(0.9);
                    transform-style: preserve-3d;
                    box-shadow: -20px 20px 60px rgba(0,0,0,0.8);
                }
                .cult-thumbnail-hover:hover {
                    transform: perspective(1500px) rotateX(4deg) rotateY(-6deg) rotateZ(0deg) scale(0.95);
                    box-shadow: -30px 30px 80px rgba(212, 199, 159, 0.15);
                }
                .cult-input {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(212,199,159,0.15);
                    color: ${CREAM};
                    font-size: 12px;
                    padding: 10px 14px;
                    border-radius: 2px;
                    outline: none;
                    font-family: 'Helvetica Neue', sans-serif;
                    transition: border-color 0.3s;
                    width: 100%;
                }
                .cult-input:focus {
                    border-color: ${CREAM_DIM};
                }
                .cult-input::placeholder {
                    color: rgba(212,199,159,0.2);
                }
            `}</style>

            {/* ═══ 顶部固定导航 ═══ */}
            <div className="cult-fade-in" style={{
                position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                padding: '28px 40px',
                background: 'linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 70%, transparent 100%)',
                pointerEvents: 'none',
            }}>
                {/* 左上: 装饰性标志 */}
                <div style={{ pointerEvents: 'auto' }}>
                    <div style={{
                        fontSize: '32px', fontWeight: 800, color: CREAM,
                        fontFamily: "'Helvetica Neue', sans-serif",
                        lineHeight: 1, letterSpacing: '-0.02em',
                    }}>
                        邪
                    </div>
                </div>

                {/* 中间: 描述文字 */}
                <div style={{
                    textAlign: 'center', paddingTop: '4px',
                }}>
                    <div style={{
                        fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em',
                        textTransform: 'uppercase', color: CREAM_DIM, lineHeight: 1.8,
                        fontFamily: "'Helvetica Neue', sans-serif",
                    }}>
                        {lang === 'CN' ? (
                            <>迷雾学派 · 邪典影像档案馆<br />CULT CINEMA ARCHIVE</>
                        ) : (
                            <>MIST SCHOOL · CULT CINEMA<br />VIDEO ARCHIVE</>
                        )}
                    </div>
                </div>

                {/* 右上: 导航按钮 */}
                <div style={{ display: 'flex', gap: '32px', pointerEvents: 'auto' }}>
                    {categories.length > 0 && (
                        <div style={{ position: 'relative' }}>
                            <select
                                value={selectedCategory || ''}
                                onChange={e => setSelectedCategory(e.target.value || null)}
                                style={{
                                    appearance: 'none',
                                    background: 'transparent',
                                    border: 'none',
                                    color: CREAM_DIM,
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    paddingRight: '16px',
                                    fontFamily: "'Helvetica Neue', sans-serif",
                                    outline: 'none',
                                }}
                            >
                                <option value="" style={{ background: '#111' }}>
                                    {lang === 'CN' ? '分类' : 'FILTER'}
                                </option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat} style={{ background: '#111' }}>{cat}</option>
                                ))}
                            </select>
                            <span style={{
                                position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
                                width: '6px', height: '6px', borderRadius: '50%',
                                background: selectedCategory ? CREAM : CREAM_VERY_DIM,
                                transition: 'background 0.3s',
                            }} />
                        </div>
                    )}
                    <button
                        onClick={() => setViewMode(viewMode === 'gallery' ? 'archive' : 'gallery')}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: CREAM_DIM, fontSize: '11px', fontWeight: 600,
                            letterSpacing: '0.15em', textTransform: 'uppercase',
                            display: 'flex', alignItems: 'center', gap: '8px',
                            fontFamily: "'Helvetica Neue', sans-serif",
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = CREAM}
                        onMouseLeave={e => e.currentTarget.style.color = CREAM_DIM}
                    >
                        {viewMode === 'gallery'
                            ? (lang === 'CN' ? '档案' : 'ARCHIVE')
                            : (lang === 'CN' ? '画廊' : 'GALLERY')
                        }
                        <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: CREAM_DIM,
                        }} />
                    </button>
                </div>
            </div>

            {/* ═══ 加载状态 ═══ */}
            {loading && (
                <div style={{
                    position: 'absolute', inset: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center', zIndex: 40,
                    background: '#0a0a0a',
                }}>
                    <Loader2 size={24} className="animate-spin" style={{ color: CREAM_VERY_DIM }} />
                </div>
            )}

            {/* ═══ 画廊模式 (Gallery Mode) ═══ */}
            {!loading && viewMode === 'gallery' && (
                <>
                    {filteredVideos.length === 0 ? (
                        <div className="cult-fade-in" style={{
                            position: 'absolute', inset: 0, display: 'flex',
                            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            gap: '16px',
                        }}>
                            <div style={{
                                fontSize: '120px', fontWeight: 800, color: 'rgba(212,199,159,0.06)',
                                fontFamily: "'Helvetica Neue', sans-serif",
                                lineHeight: 1,
                            }}>
                                空
                            </div>
                            <p style={{
                                fontSize: '11px', letterSpacing: '0.2em',
                                textTransform: 'uppercase', color: CREAM_VERY_DIM,
                                fontFamily: "'Helvetica Neue', sans-serif",
                            }}>
                                {lang === 'CN' ? '暂无影像档案' : 'NO ENTRIES FOUND'}
                            </p>
                        </div>
                    ) : (
                        <div
                            ref={scrollContainerRef}
                            className="cult-gallery-scroll"
                            style={{
                                width: '100%', height: '100%',
                                overflowY: 'auto', overflowX: 'hidden',
                            }}
                        >
                            {filteredVideos.map((video, index) => (
                                <div
                                    key={video.id}
                                    className="cult-gallery-item"
                                    style={{
                                        width: '100%', height: '100%',
                                        position: 'relative',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                    }}
                                    onClick={() => handleSelectVideo(video)}
                                >
                                    {/* 暗角/氛围效果 */}
                                    <div style={{
                                        position: 'absolute', inset: 0, zIndex: 1,
                                        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
                                        pointerEvents: 'none',
                                    }} />

                                    {/* 大号装饰性编号 - 类似 601 的 "4/6" */}
                                    <div style={{
                                        position: 'absolute', right: '-2%', bottom: '5%',
                                        zIndex: 2, ...decorativeNumberStyle,
                                        fontSize: 'clamp(120px, 22vw, 320px)',
                                    }}>
                                        {index + 1}/{filteredVideos.length}
                                    </div>

                                    {/* 电影院效果容器 - 模拟银幕 */}
                                    <div style={{
                                        position: 'relative', zIndex: 3,
                                        width: '55%', maxWidth: '800px',
                                    }}>
                                        {/* 银幕外框 (暗色) */}
                                        <div style={{
                                            position: 'absolute', inset: '-12%',
                                            background: 'linear-gradient(135deg, rgba(30,28,22,0.6) 0%, rgba(15,14,10,0.8) 100%)',
                                            borderRadius: '2px',
                                            filter: 'blur(0px)',
                                        }} />

                                        {/* 视频缩略图/银幕 */}
                                        <div className="cult-thumbnail-hover" style={{
                                            position: 'relative',
                                            aspectRatio: '16/9',
                                            background: '#111',
                                            overflow: 'hidden',
                                        }}>
                                            {video.platform === 'youtube' && (
                                                <img
                                                    src={video.thumbnail_url || getYouTubeThumbnail(video.video_id)}
                                                    alt={video.title}
                                                    style={{
                                                        width: '100%', height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.85) contrast(1.1)',
                                                    }}
                                                    loading="lazy"
                                                />
                                            )}
                                            {video.platform === 'bilibili' && (
                                                <div style={{
                                                    width: '100%', height: '100%',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    background: 'linear-gradient(135deg, rgba(10,10,10,1) 0%, rgba(20,18,14,1) 100%)',
                                                }}>
                                                    {video.thumbnail_url ? (
                                                        <img
                                                            src={video.thumbnail_url}
                                                            alt={video.title}
                                                            style={{
                                                                width: '100%', height: '100%',
                                                                objectFit: 'cover',
                                                                filter: 'brightness(0.85) contrast(1.1)',
                                                            }}
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <span style={{
                                                            fontSize: '14px', fontWeight: 700,
                                                            color: '#fb7299', opacity: 0.6,
                                                            letterSpacing: '0.3em',
                                                        }}>
                                                            BILIBILI
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            {video.platform === 'direct' && (
                                                <div style={{
                                                    width: '100%', height: '100%',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    background: 'linear-gradient(135deg, rgba(10,10,10,1) 0%, rgba(20,18,14,1) 100%)',
                                                }}>
                                                    <Play size={48} style={{ color: CREAM_VERY_DIM }} />
                                                </div>
                                            )}

                                            {/* 播放悬浮提示 */}
                                            <div style={{
                                                position: 'absolute', inset: 0,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                background: 'rgba(0,0,0,0.3)',
                                                opacity: 0,
                                                transition: 'opacity 0.5s ease',
                                            }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                                                onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                                            >
                                                <div style={{
                                                    width: '64px', height: '64px', borderRadius: '50%',
                                                    border: `2px solid ${CREAM_DIM}`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backdropFilter: 'blur(8px)',
                                                    background: 'rgba(0,0,0,0.3)',
                                                }}>
                                                    <Play size={24} style={{ color: CREAM, marginLeft: '3px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 管理员删除按钮 */}
                                    {isAdmin && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDeleteVideo(video.id); }}
                                            style={{
                                                position: 'absolute', top: '80px', right: '40px', zIndex: 10,
                                                background: 'rgba(0,0,0,0.5)', border: `1px solid rgba(255,100,100,0.2)`,
                                                borderRadius: '50%', width: '36px', height: '36px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: 'pointer', color: 'rgba(255,100,100,0.5)',
                                                transition: 'all 0.3s', opacity: 0,
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.opacity = '1';
                                                e.currentTarget.style.color = '#ff6464';
                                                e.currentTarget.style.borderColor = 'rgba(255,100,100,0.5)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.opacity = '0';
                                            }}
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 底部固定栏 */}
                    <div className="cult-fade-in" style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '20px 40px',
                        background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 70%, transparent 100%)',
                    }}>
                        {/* 左下: 搜索 / 管理 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            {isAdmin && (
                                <button
                                    onClick={() => setShowAddForm(!showAddForm)}
                                    style={{
                                        background: 'none', border: 'none', cursor: 'pointer',
                                        color: showAddForm ? CREAM : CREAM_DIM,
                                        fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em',
                                        textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px',
                                        fontFamily: "'Helvetica Neue', sans-serif",
                                        transition: 'color 0.3s',
                                    }}
                                >
                                    <Plus size={14} />
                                    {lang === 'CN' ? '添加' : 'ADD'}
                                </button>
                            )}
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    placeholder={lang === 'CN' ? '搜索...' : 'Search...'}
                                    style={{
                                        background: 'transparent', border: 'none', borderBottom: `1px solid ${CREAM_VERY_DIM}`,
                                        color: CREAM, fontSize: '11px', padding: '4px 0', width: '120px',
                                        outline: 'none', fontFamily: "'Helvetica Neue', sans-serif",
                                        letterSpacing: '0.1em', transition: 'border-color 0.3s, width 0.3s',
                                    }}
                                    onFocus={e => {
                                        e.currentTarget.style.borderColor = CREAM_DIM;
                                        e.currentTarget.style.width = '200px';
                                    }}
                                    onBlur={e => {
                                        e.currentTarget.style.borderColor = CREAM_VERY_DIM;
                                        if (!searchTerm) e.currentTarget.style.width = '120px';
                                    }}
                                />
                            </div>
                        </div>

                        {/* 中间: EXPLORE 按钮 */}
                        {filteredVideos.length > 0 && (
                            <button
                                onClick={() => {
                                    if (filteredVideos.length > 0) {
                                        handleSelectVideo(filteredVideos[currentIndex] || filteredVideos[0]);
                                    }
                                }}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    color: CREAM_DIM, fontSize: '12px', fontWeight: 600,
                                    letterSpacing: '0.2em', textTransform: 'uppercase',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    fontFamily: "'Helvetica Neue', sans-serif",
                                    transition: 'color 0.3s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = CREAM}
                                onMouseLeave={e => e.currentTarget.style.color = CREAM_DIM}
                            >
                                {lang === 'CN' ? '播放' : 'EXPLORE'}
                                <Play size={12} fill={CREAM_DIM} />
                            </button>
                        )}

                        {/* 右下: 数量指示 */}
                        <div style={{
                            fontSize: '10px', color: CREAM_VERY_DIM,
                            letterSpacing: '0.1em', fontFamily: "'Helvetica Neue', sans-serif",
                        }}>
                            {filteredVideos.length > 0 ? `${currentIndex + 1} / ${filteredVideos.length}` : ''}
                        </div>
                    </div>

                    {/* 右侧滚动进度条 */}
                    {filteredVideos.length > 1 && (
                        <div style={{
                            position: 'absolute', right: '20px', top: '50%',
                            transform: 'translateY(-50%)', zIndex: 25,
                            display: 'flex', flexDirection: 'column', gap: '4px',
                        }}>
                            {filteredVideos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToVideo(i)}
                                    style={{
                                        width: '3px',
                                        height: i === currentIndex ? '24px' : '8px',
                                        background: i === currentIndex ? CREAM : CREAM_VERY_DIM,
                                        border: 'none', borderRadius: '2px', cursor: 'pointer',
                                        transition: 'all 0.4s ease', padding: 0,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* ═══ 档案模式 (Archive Mode) ═══ */}
            {!loading && viewMode === 'archive' && (
                <div className="cult-fade-in" style={{
                    width: '100%', height: '100%',
                    overflowY: 'auto', padding: '120px 40px 80px',
                }}>
                    {/* Archive 标题 */}
                    <div style={{ marginBottom: '48px' }}>
                        <h1 style={{
                            fontSize: 'clamp(36px, 5vw, 64px)',
                            fontWeight: 300, color: CREAM,
                            fontFamily: "'Helvetica Neue', sans-serif",
                            letterSpacing: '-0.02em',
                        }}>
                            {lang === 'CN' ? '影像档案' : 'Archive'}
                        </h1>
                    </div>

                    {/* 搜索栏 */}
                    <div style={{ marginBottom: '32px', maxWidth: '400px' }}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder={lang === 'CN' ? '搜索档案...' : 'Search archive...'}
                            className="cult-input"
                        />
                    </div>

                    {/* 表头 */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 1fr 1fr 180px',
                        gap: '16px', padding: '12px 0',
                        borderBottom: `1px solid ${CREAM_VERY_DIM}`,
                        marginBottom: '4px',
                    }}>
                        {[
                            lang === 'CN' ? '年份' : 'YEAR',
                            lang === 'CN' ? '标题' : 'TITLE',
                            lang === 'CN' ? '平台' : 'PLATFORM',
                            lang === 'CN' ? '分类' : 'CATEGORY',
                        ].map(header => (
                            <div key={header} style={{
                                fontSize: '10px', fontWeight: 600,
                                letterSpacing: '0.2em', textTransform: 'uppercase',
                                color: CREAM_VERY_DIM,
                                fontFamily: "'Helvetica Neue', sans-serif",
                            }}>
                                {header}
                            </div>
                        ))}
                    </div>

                    {/* 数据行 */}
                    {filteredVideos.map((video, index) => (
                        <div
                            key={video.id}
                            className="cult-archive-row"
                            onClick={() => handleSelectVideo(video)}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '100px 1fr 1fr 180px',
                                gap: '16px', padding: '18px 0',
                                borderBottom: '1px solid rgba(212,199,159,0.06)',
                                cursor: 'pointer', alignItems: 'center',
                                animationDelay: `${index * 0.03}s`,
                            }}
                        >
                            <div style={{
                                fontSize: '13px', color: CREAM_DIM,
                                fontFamily: "'Helvetica Neue', sans-serif",
                            }}>
                                {new Date(video.created_at).getFullYear()}
                            </div>
                            <div style={{
                                fontSize: '13px', color: CREAM, fontWeight: 500,
                                fontFamily: "'Helvetica Neue', sans-serif",
                                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                            }}>
                                {video.title}
                            </div>
                            <div style={{
                                fontSize: '13px', color: CREAM_DIM,
                                fontFamily: "'Helvetica Neue', sans-serif",
                                textTransform: 'uppercase',
                            }}>
                                {video.platform === 'youtube' ? 'YouTube' :
                                 video.platform === 'bilibili' ? 'Bilibili' :
                                 video.platform === 'direct' ? (lang === 'CN' ? '直连' : 'Direct') : video.platform}
                            </div>
                            <div style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            }}>
                                <span style={{
                                    fontSize: '13px', color: CREAM_DIM,
                                    fontFamily: "'Helvetica Neue', sans-serif",
                                    textTransform: 'uppercase',
                                }}>
                                    {video.category || '—'}
                                </span>
                                {isAdmin && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleDeleteVideo(video.id); }}
                                        style={{
                                            background: 'none', border: 'none', cursor: 'pointer',
                                            color: 'rgba(255,100,100,0.3)', transition: 'color 0.3s',
                                            padding: '4px',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#ff6464'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,100,100,0.3)'}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}

                    {filteredVideos.length === 0 && (
                        <div style={{
                            padding: '60px 0', textAlign: 'center',
                            color: CREAM_VERY_DIM, fontSize: '12px',
                            letterSpacing: '0.2em', textTransform: 'uppercase',
                        }}>
                            {lang === 'CN' ? '暂无影像档案' : 'NO ENTRIES FOUND'}
                        </div>
                    )}
                </div>
            )}

            {/* ═══ 管理员添加视频浮层 ═══ */}
            {showAddForm && isAdmin && (
                <div className="cult-slide-up" style={{
                    position: 'absolute', bottom: '60px', left: '40px', right: '40px',
                    zIndex: 40, background: 'rgba(10,10,10,0.95)',
                    border: `1px solid ${CREAM_VERY_DIM}`,
                    borderRadius: '4px', padding: '28px',
                    backdropFilter: 'blur(20px)',
                }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        marginBottom: '20px',
                    }}>
                        <span style={{
                            fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em',
                            textTransform: 'uppercase', color: CREAM_DIM,
                            fontFamily: "'Helvetica Neue', sans-serif",
                        }}>
                            {lang === 'CN' ? '添加新视频' : 'ADD NEW VIDEO'}
                        </span>
                        <button
                            onClick={() => setShowAddForm(false)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer', color: CREAM_VERY_DIM,
                                transition: 'color 0.3s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = CREAM}
                            onMouseLeave={e => e.currentTarget.style.color = CREAM_VERY_DIM}
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                    }}>
                        <input
                            type="text"
                            value={newVideoUrl}
                            onChange={e => setNewVideoUrl(e.target.value)}
                            placeholder={lang === 'CN' ? '视频链接 (YouTube / Bilibili / 直连)' : 'Video URL'}
                            className="cult-input"
                        />
                        <input
                            type="text"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            placeholder={lang === 'CN' ? '标题' : 'Title'}
                            className="cult-input"
                        />
                        <input
                            type="text"
                            value={newDescription}
                            onChange={e => setNewDescription(e.target.value)}
                            placeholder={lang === 'CN' ? '描述（可选）' : 'Description (optional)'}
                            className="cult-input"
                        />
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <input
                                type="text"
                                value={newCategory}
                                onChange={e => setNewCategory(e.target.value)}
                                placeholder={lang === 'CN' ? '分类（可选）' : 'Category'}
                                className="cult-input"
                                style={{ flex: 1 }}
                            />
                            <button
                                onClick={handleAddVideo}
                                disabled={addLoading}
                                style={{
                                    padding: '10px 24px', background: CREAM,
                                    color: '#0a0a0a', border: 'none',
                                    fontSize: '11px', fontWeight: 700,
                                    letterSpacing: '0.15em', textTransform: 'uppercase',
                                    cursor: addLoading ? 'wait' : 'pointer',
                                    opacity: addLoading ? 0.5 : 1,
                                    borderRadius: '2px', whiteSpace: 'nowrap',
                                    fontFamily: "'Helvetica Neue', sans-serif",
                                    transition: 'opacity 0.3s',
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                }}
                            >
                                {addLoading && <Loader2 size={12} className="animate-spin" />}
                                {lang === 'CN' ? '确认' : 'SUBMIT'}
                            </button>
                        </div>
                    </div>
                    {addError && (
                        <p style={{
                            fontSize: '11px', color: '#ff6464', marginTop: '12px',
                            fontFamily: "'Helvetica Neue', sans-serif",
                        }}>
                            {addError}
                        </p>
                    )}
                </div>
            )}

            {/* 左上角大号装饰文字 (仅画廊模式) */}
            {!loading && viewMode === 'gallery' && filteredVideos.length > 0 && (
                <div className="cult-fade-in" style={{
                    position: 'absolute', top: '-3%', left: '-2%',
                    zIndex: 5, pointerEvents: 'none',
                    ...decorativeNumberStyle,
                    fontSize: 'clamp(100px, 18vw, 280px)',
                    opacity: 0.06,
                }}>
                    {lang === 'CN' ? '邪典' : 'CULT'}
                </div>
            )}
        </div>
    );
};
