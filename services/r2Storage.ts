// services/r2Storage.ts
// Cloudflare R2 图片存储服务

import imageCompression from 'browser-image-compression';
import { supabase } from './supabaseAuth';

// R2 公开访问 URL
const R2_PUBLIC_URL = import.meta.env.VITE_R2_PUBLIC_URL || '';

// 压缩配置：上传前统一压缩
const COMPRESSION_OPTIONS = {
    maxSizeMB: 0.8,         // 最大 800KB
    maxWidthOrHeight: 1200, // 最大宽/高 1200px
    useWebWorker: true,
};

/**
 * 上传前压缩图片（GIF 跳过）
 */
async function compressImage(file: File): Promise<File> {
    if (file.type === 'image/gif') return file;
    try {
        return await imageCompression(file, COMPRESSION_OPTIONS);
    } catch (err) {
        console.warn('压缩失败，使用原图:', err);
        return file;
    }
}

// 是否已配置 R2
export const isR2Configured = (): boolean => Boolean(R2_PUBLIC_URL);

/**
 * 获取 R2 中图片的完整公开 URL
 */
export function getR2PublicUrl(filePath: string): string {
    const publicDomain = import.meta.env.VITE_R2_PUBLIC_URL || 'https://pub-11c26952660a4be39d866201a7fdb082.r2.dev';
    const baseUrl = publicDomain.endsWith('/') ? publicDomain.slice(0, -1) : publicDomain;
    return `${baseUrl}/${filePath}`;
}

/**
 * 从 R2 完整 URL 中提取文件 Key
 * 例：https://pub-xxx.r2.dev/avatars/user/123.jpg → avatars/user/123.jpg
 */
export function extractR2Key(url: string): string | null {
    if (!url) return null;
    const publicDomain = import.meta.env.VITE_R2_PUBLIC_URL || 'https://pub-11c26952660a4be39d866201a7fdb082.r2.dev';
    const base = publicDomain.endsWith('/') ? publicDomain.slice(0, -1) : publicDomain;
    if (url.startsWith(base + '/')) {
        return url.slice(base.length + 1);
    }
    return null;
}

/**
 * 删除 R2 中的文件（通过 Vercel API）
 * 支持传入完整 URL 或文件 Key，静默失败不影响主流程
 */
export async function deleteFromR2(urlOrKey: string): Promise<void> {
    if (!urlOrKey) return;
    const key = urlOrKey.startsWith('http') ? extractR2Key(urlOrKey) : urlOrKey;
    if (!key) return;
    try {
        await fetch('/api/delete-r2-file', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key }),
        });
    } catch (err) {
        console.warn('R2 删除失败（静默）:', key, err);
    }
}

/**
 * 客户端直传到 R2（通过 Vercel API 签名），上传前自动压缩
 */
export async function uploadToR2(file: File, folder: string = 'user-uploads'): Promise<string> {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
        throw new Error('Must be logged in to upload files');
    }

    // 压缩
    const compressed = await compressImage(file);

    // 生成文件名
    const fileExt = compressed.name.split('.').pop() || 'jpg';
    const fileName = `${folder}/${sessionData.session.user.id}/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

    try {
        // 第一步：从 Vercel API 获取预签名 URL
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const presignRes = await fetch('/api/get-r2-upload-url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName,
                fileType: compressed.type || 'image/jpeg'
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!presignRes.ok) {
            throw new Error(`R2 API unavailable: ${presignRes.status}`);
        }

        const { uploadUrl, fileName: r2Key } = await presignRes.json();

        // 第二步：直接 PUT 到 Cloudflare R2
        const uploadRes = await fetch(uploadUrl, {
            method: 'PUT',
            body: compressed,
            headers: { 'Content-Type': compressed.type || 'image/jpeg' }
        });

        if (!uploadRes.ok) {
            throw new Error(`R2 upload failed with status ${uploadRes.status}`);
        }

        return getR2PublicUrl(r2Key);
    } catch (error) {
        console.error('R2 Direct Upload Error:', error);
        throw error;
    }
}

/**
 * 智能上传：自动选择 R2 或 Supabase Storage
 */
export async function smartUploadImage(file: File, folder: string = 'user-uploads'): Promise<string> {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (isR2Configured() && (!isLocalhost || R2_PUBLIC_URL.includes('r2.dev'))) {
        try {
            return await uploadToR2(file, folder);
        } catch (err) {
            console.warn('R2 upload failed, falling back to Supabase Storage:', err);
        }
    }

    const { supabaseDatabase } = await import('./supabaseDatabase');
    return supabaseDatabase.uploadImage(file);
}
