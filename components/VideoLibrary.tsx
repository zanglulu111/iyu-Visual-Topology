// components/VideoLibrary.tsx
// 视频库组件 - 嵌入 YouTube/Bilibili 视频的浏览和管理界面
import React, { useState, useEffect, useCallback } from 'react';
import { X, Play, Plus, Trash2, Film, Search, ExternalLink, ChevronDown, Loader2 } from 'lucide-react';
import { videoService, Video, getEmbedUrl, getYouTubeThumbnail } from '../services/videoService';

interface VideoLibraryProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    isAdmin?: boolean;
}

export const VideoLibrary: React.FC<VideoLibraryProps> = ({ isOpen, onClose, lang, isAdmin = false }) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeVideo, setActiveVideo] = useState<Video | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [addLoading, setAddLoading] = useState(false);

    // 新增视频表单状态
    const [newVideoUrl, setNewVideoUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [addError, setAddError] = useState('');

    const loadVideos = useCallback(async () => {
        setLoading(true);
        try {
            const data = isAdmin
                ? await videoService.getAllVideos()
                : await videoService.getPublishedVideos(selectedCategory || undefined);
            setVideos(data);
            const cats = await videoService.getCategories();
            setCategories(cats);
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

    const handleAddVideo = async () => {
        if (!newVideoUrl.trim() || !newTitle.trim()) {
            setAddError(lang === 'CN' ? '请填写视频链接和标题' : 'Please enter a video URL and title');
            return;
        }

        const parsed = videoService.parseVideoUrl(newVideoUrl.trim());
        if (!parsed) {
            setAddError(lang === 'CN' ? '无法识别的视频链接。请直接粘贴 YouTube 或 Bilibili 视频链接。' : 'Unrecognized video URL. Paste a YouTube or Bilibili link.');
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
            // 清空表单
            setNewVideoUrl('');
            setNewTitle('');
            setNewDescription('');
            setNewCategory('');
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

    // 过滤搜索
    const filteredVideos = videos.filter(v => {
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            return v.title.toLowerCase().includes(term) ||
                (v.description || '').toLowerCase().includes(term) ||
                (v.category || '').toLowerCase().includes(term);
        }
        return true;
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">

                {/* Header */}
                <div className="shrink-0 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Film size={18} className="text-amber-400" />
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                            {lang === 'CN' ? '影像资料库' : 'VIDEO ARCHIVE'}
                        </h2>
                        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                            {filteredVideos.length} {lang === 'CN' ? '条目' : 'entries'}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        {isAdmin && (
                            <button
                                onClick={() => setShowAddForm(!showAddForm)}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded hover:bg-amber-500/20 transition-colors"
                            >
                                <Plus size={12} />
                                {lang === 'CN' ? '添加视频' : 'ADD'}
                            </button>
                        )}
                        <button onClick={onClose} className="p-1.5 text-zinc-500 hover:text-white transition-colors">
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Admin Add Form */}
                {showAddForm && isAdmin && (
                    <div className="shrink-0 border-b border-zinc-800 bg-zinc-900/40 px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 block">
                                    {lang === 'CN' ? '视频链接 (YouTube / Bilibili)' : 'VIDEO URL'}
                                </label>
                                <input
                                    type="text"
                                    value={newVideoUrl}
                                    onChange={e => setNewVideoUrl(e.target.value)}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    className="w-full bg-[#111] border border-zinc-800 text-zinc-200 text-xs rounded px-3 py-2 focus:outline-none focus:border-amber-500/50 font-mono placeholder:text-zinc-700"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 block">
                                    {lang === 'CN' ? '标题' : 'TITLE'}
                                </label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                    placeholder={lang === 'CN' ? '输入视频标题...' : 'Enter title...'}
                                    className="w-full bg-[#111] border border-zinc-800 text-zinc-200 text-xs rounded px-3 py-2 focus:outline-none focus:border-amber-500/50 placeholder:text-zinc-700"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 block">
                                    {lang === 'CN' ? '描述（可选）' : 'DESCRIPTION (optional)'}
                                </label>
                                <input
                                    type="text"
                                    value={newDescription}
                                    onChange={e => setNewDescription(e.target.value)}
                                    placeholder={lang === 'CN' ? '简短描述...' : 'Short description...'}
                                    className="w-full bg-[#111] border border-zinc-800 text-zinc-200 text-xs rounded px-3 py-2 focus:outline-none focus:border-amber-500/50 placeholder:text-zinc-700"
                                />
                            </div>
                            <div className="flex gap-3 items-end">
                                <div className="flex-1">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 block">
                                        {lang === 'CN' ? '分类（可选）' : 'CATEGORY'}
                                    </label>
                                    <input
                                        type="text"
                                        value={newCategory}
                                        onChange={e => setNewCategory(e.target.value)}
                                        placeholder={lang === 'CN' ? '例如：教程、解析' : 'e.g. Tutorial'}
                                        className="w-full bg-[#111] border border-zinc-800 text-zinc-200 text-xs rounded px-3 py-2 focus:outline-none focus:border-amber-500/50 placeholder:text-zinc-700"
                                    />
                                </div>
                                <button
                                    onClick={handleAddVideo}
                                    disabled={addLoading}
                                    className="px-4 py-2 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-amber-400 transition-colors disabled:opacity-50 shrink-0 flex items-center gap-1.5"
                                >
                                    {addLoading && <Loader2 size={12} className="animate-spin" />}
                                    {lang === 'CN' ? '确认添加' : 'SUBMIT'}
                                </button>
                            </div>
                        </div>
                        {addError && <p className="text-xs text-red-400 mt-2 font-mono">{addError}</p>}
                    </div>
                )}

                {/* Search & Filters */}
                <div className="shrink-0 border-b border-zinc-800 px-6 py-3 flex flex-wrap items-center gap-3">
                    <div className="relative flex-1 min-w-[200px] max-w-sm">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder={lang === 'CN' ? '搜索影像档案...' : 'Search archive...'}
                            className="w-full bg-[#111] border border-zinc-800 text-zinc-200 text-xs rounded px-3 py-2 pl-9 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-700 font-mono"
                        />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded border transition-colors ${!selectedCategory
                                    ? 'bg-white/10 border-zinc-600 text-white'
                                    : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                                }`}
                        >
                            {lang === 'CN' ? '全部' : 'ALL'}
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded border transition-colors ${selectedCategory === cat
                                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                        : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Video List */}
                    <div className={`${activeVideo ? 'w-80 border-r border-zinc-800' : 'w-full'} overflow-y-auto custom-scrollbar transition-all duration-300`}>
                        {loading ? (
                            <div className="flex items-center justify-center h-full">
                                <Loader2 size={24} className="animate-spin text-zinc-500" />
                            </div>
                        ) : filteredVideos.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full gap-3 text-zinc-600">
                                <Film size={32} />
                                <p className="text-xs font-mono uppercase tracking-widest">
                                    {lang === 'CN' ? '暂无影像档案' : 'NO ENTRIES FOUND'}
                                </p>
                            </div>
                        ) : (
                            <div className={`${activeVideo ? '' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6'}`}>
                                {filteredVideos.map(video => (
                                    <div
                                        key={video.id}
                                        onClick={() => setActiveVideo(video)}
                                        className={`cursor-pointer group transition-all duration-200 ${activeVideo
                                                ? `flex items-center gap-3 px-4 py-3 border-b border-zinc-900 hover:bg-white/5 ${activeVideo?.id === video.id ? 'bg-white/5 border-l-2 border-l-amber-500' : ''}`
                                                : 'bg-[#111] border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600'
                                            }`}
                                    >
                                        {/* Thumbnail */}
                                        {!activeVideo && (
                                            <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                                                {video.platform === 'youtube' && (
                                                    <img
                                                        src={video.thumbnail_url || getYouTubeThumbnail(video.video_id)}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                )}
                                                {video.platform === 'bilibili' && (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#fb7299]/10 to-[#fb7299]/5">
                                                        <span className="text-xs font-bold text-[#fb7299]">BILIBILI</span>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                        <Play size={18} className="text-white ml-0.5" />
                                                    </div>
                                                </div>
                                                <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/70 rounded text-[9px] font-mono text-zinc-300 uppercase">
                                                    {video.platform}
                                                </div>
                                            </div>
                                        )}

                                        {/* Side list thumbnail (in compact mode) */}
                                        {activeVideo && video.platform === 'youtube' && (
                                            <div className="w-24 h-14 rounded overflow-hidden bg-zinc-900 shrink-0">
                                                <img
                                                    src={video.thumbnail_url || getYouTubeThumbnail(video.video_id, 'default')}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}

                                        {/* Text Info */}
                                        <div className={activeVideo ? 'flex-1 min-w-0' : 'p-4'}>
                                            <h3 className={`font-bold text-zinc-200 group-hover:text-white transition-colors truncate ${activeVideo ? 'text-xs' : 'text-sm mb-1'}`}>
                                                {video.title}
                                            </h3>
                                            {!activeVideo && video.description && (
                                                <p className="text-xs text-zinc-500 line-clamp-2">{video.description}</p>
                                            )}
                                            <div className="flex items-center gap-2 mt-1">
                                                {video.category && (
                                                    <span className="text-[9px] font-mono text-amber-400/60 uppercase">#{video.category}</span>
                                                )}
                                                <span className="text-[9px] font-mono text-zinc-600">
                                                    {new Date(video.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Admin delete */}
                                        {isAdmin && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDeleteVideo(video.id); }}
                                                className="p-1.5 text-zinc-700 hover:text-red-400 transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Video Player */}
                    {activeVideo && (
                        <div className="flex-1 flex flex-col overflow-hidden bg-black">
                            {/* Player */}
                            <div className="flex-1 relative">
                                <iframe
                                    src={getEmbedUrl(activeVideo.platform, activeVideo.video_id)}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={activeVideo.title}
                                />
                            </div>
                            {/* Video Info Bar */}
                            <div className="shrink-0 bg-[#0a0a0a] border-t border-zinc-800 px-6 py-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-sm font-bold text-white mb-1">{activeVideo.title}</h3>
                                        {activeVideo.description && (
                                            <p className="text-xs text-zinc-500">{activeVideo.description}</p>
                                        )}
                                        <div className="flex items-center gap-3 mt-2">
                                            {activeVideo.category && (
                                                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded uppercase">
                                                    #{activeVideo.category}
                                                </span>
                                            )}
                                            <span className="text-[10px] font-mono text-zinc-600 uppercase">
                                                {activeVideo.platform} · {new Date(activeVideo.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    <a
                                        href={activeVideo.platform === 'youtube'
                                            ? `https://www.youtube.com/watch?v=${activeVideo.video_id}`
                                            : `https://www.bilibili.com/video/${activeVideo.video_id}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded hover:text-white hover:border-zinc-600 transition-colors shrink-0"
                                    >
                                        <ExternalLink size={12} />
                                        {lang === 'CN' ? '原站' : 'SOURCE'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
