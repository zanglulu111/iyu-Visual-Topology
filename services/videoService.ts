// services/videoService.ts
// 视频库服务 - 管理 YouTube/Bilibili 嵌入视频
import { supabase } from './supabaseAuth';

export interface Video {
    id: string;
    title: string;
    description?: string;
    platform: 'youtube' | 'bilibili' | 'direct';
    video_id: string; // URL for direct, ID for others
    thumbnail_url?: string;
    category?: string;
    tags?: string[];
    sort_order: number;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export interface VideoCreateInput {
    title: string;
    description?: string;
    platform: 'youtube' | 'bilibili' | 'direct';
    video_id: string;
    thumbnail_url?: string;
    category?: string;
    tags?: string[];
    sort_order?: number;
    is_published?: boolean;
}

/**
 * 从 YouTube URL 中提取 video_id
 * 支持多种格式：
 *  - https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *  - https://youtu.be/dQw4w9WgXcQ
 *  - https://www.youtube.com/embed/dQw4w9WgXcQ
 */
export function extractYouTubeId(url: string): string | null {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
        /^([a-zA-Z0-9_-]{11})$/ // 直接输入 ID
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

/**
 * 从 Bilibili URL 中提取 BV 号
 * 支持格式：
 *  - https://www.bilibili.com/video/BV1xx411c7XW
 *  - BV1xx411c7XW
 */
export function extractBilibiliId(url: string): string | null {
    const patterns = [
        /bilibili\.com\/video\/(BV[a-zA-Z0-9]+)/,
        /^(BV[a-zA-Z0-9]+)$/ // 直接输入 BV 号
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

/**
 * 获取 YouTube 缩略图 URL
 */
export function getYouTubeThumbnail(videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'high'): string {
    const qualityMap = {
        default: 'default',
        medium: 'mqdefault',
        high: 'hqdefault',
        maxres: 'maxresdefault'
    };
    return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

/**
 * 生成嵌入播放器 URL
 */
export function getEmbedUrl(platform: 'youtube' | 'bilibili' | 'direct', videoId: string): string {
    if (platform === 'direct') return videoId;
    if (platform === 'youtube') {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    // Bilibili 嵌入
    return `https://player.bilibili.com/player.html?bvid=${videoId}&page=1&high_quality=1&danmaku=0`;
}

class VideoService {
    /**
     * 获取所有已发布的视频
     */
    async getPublishedVideos(category?: string): Promise<Video[]> {
        let query = supabase
            .from('videos')
            .select('*')
            .eq('is_published', true)
            .order('sort_order', { ascending: false })
            .order('created_at', { ascending: false });

        if (category) {
            query = query.eq('category', category);
        }

        const { data, error } = await query;

        const hardcodedVideo: Video = {
            id: 'r2-test-video',
            title: 'Sora 大洋芋去水 (R2 直连测试)',
            description: '这是一个挂载在 Cloudflare R2 的免广告视频测试。点击即可原生纯净播放。',
            platform: 'direct',
            video_id: 'https://pub-07da2beba4a34f5f82f770c7f67c003f.r2.dev/mist%20movie/The%20overall%20color%20palette%20must%20be%20restricted%20to%20dark%20bluegr%20-Sora%E5%A4%A7%E6%B4%8B%E8%8A%8B%E5%8E%BB%E6%B0%B4.mp4',
            category: 'Testing',
            sort_order: 9999,
            is_published: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        if (error) {
            console.error('Error fetching videos:', error);
            return [hardcodedVideo];
        }

        return [hardcodedVideo, ...(data as Video[])];
    }

    /**
     * 获取所有视频（管理员用）
     */
    async getAllVideos(): Promise<Video[]> {
        const { data, error } = await supabase
            .from('videos')
            .select('*')
            .order('sort_order', { ascending: false })
            .order('created_at', { ascending: false });

        const hardcodedVideo: Video = {
            id: 'r2-test-video',
            title: 'Sora 大洋芋去水 (R2 直连测试)',
            description: '这是一个挂载在 Cloudflare R2 的免广告视频测试。点击即可原生纯净播放。',
            platform: 'direct',
            video_id: 'https://pub-07da2beba4a34f5f82f770c7f67c003f.r2.dev/mist%20movie/The%20overall%20color%20palette%20must%20be%20restricted%20to%20dark%20bluegr%20-Sora%E5%A4%A7%E6%B4%8B%E8%8A%8B%E5%8E%BB%E6%B0%B4.mp4',
            category: 'Testing',
            sort_order: 9999,
            is_published: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        if (error) {
            console.error('Error fetching all videos:', error);
            return [hardcodedVideo];
        }

        return [hardcodedVideo, ...(data as Video[])];
    }

    /**
     * 获取所有分类
     */
    async getCategories(): Promise<string[]> {
        const { data, error } = await supabase
            .from('videos')
            .select('category')
            .eq('is_published', true)
            .not('category', 'is', null);

        if (error) {
            console.error('Error fetching categories:', error);
            return [];
        }

        const categories = [...new Set(data.map(v => v.category).filter(Boolean)), 'Testing'] as string[];
        return [...new Set(categories)];
    }

    /**
     * 添加视频（管理员操作）
     */
    async addVideo(input: VideoCreateInput): Promise<Video | null> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) {
            console.error('Must be logged in to add videos');
            return null;
        }

        // 自动生成 YouTube 缩略图
        let thumbnailUrl = input.thumbnail_url;
        if (!thumbnailUrl && input.platform === 'youtube') {
            thumbnailUrl = getYouTubeThumbnail(input.video_id);
        }

        const { data, error } = await supabase
            .from('videos')
            .insert({
                ...input,
                thumbnail_url: thumbnailUrl,
                created_by: user.user.id
            })
            .select()
            .single();

        if (error) {
            console.error('Error adding video:', error);
            throw error;
        }

        return data as Video;
    }

    /**
     * 更新视频
     */
    async updateVideo(id: string, updates: Partial<VideoCreateInput>): Promise<Video | null> {
        const { data, error } = await supabase
            .from('videos')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Error updating video:', error);
            throw error;
        }

        return data as Video;
    }

    /**
     * 删除视频
     */
    async deleteVideo(id: string): Promise<void> {
        const { error } = await supabase
            .from('videos')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting video:', error);
            throw error;
        }
    }

    /**
     * 智能解析视频链接并自动识别平台
     */
    parseVideoUrl(url: string): { platform: 'youtube' | 'bilibili' | 'direct'; video_id: string } | null {
        const youtubeId = extractYouTubeId(url);
        if (youtubeId) return { platform: 'youtube', video_id: youtubeId };

        const bilibiliId = extractBilibiliId(url);
        if (bilibiliId) return { platform: 'bilibili', video_id: bilibiliId };

        // 识别直接链接 (R2, Cloudflare, or direct mp4/webm/mov/url)
        if (url.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i) || url.includes('r2.dev') || url.startsWith('http')) {
            return { platform: 'direct', video_id: url };
        }

        return null;
    }
}

export const videoService = new VideoService();
