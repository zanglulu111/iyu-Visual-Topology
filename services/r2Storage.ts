// services/r2Storage.ts
// Cloudflare R2 图片存储服务
// 替代 Supabase Storage，实现零流量费的图片托管
//
// ⚠️ 需要配置以下环境变量：
//   VITE_R2_PUBLIC_URL - R2 公开访问域名（Cloudflare R2 自定义域名或 r2.dev 域名）
//   
// ⚠️ 上传操作需要通过后端代理（Supabase Edge Function）来完成
//   因为 R2 的 API Key 不能暴露在前端
//   我们用 Supabase Edge Function 作为安全的上传代理

import { supabase } from './supabaseAuth';

// R2 公开访问 URL（只读，用于展示图片）
const R2_PUBLIC_URL = import.meta.env.VITE_R2_PUBLIC_URL || '';

// 是否已配置 R2（如果没配置，自动回退到 Supabase Storage）
export const isR2Configured = (): boolean => {
    return Boolean(R2_PUBLIC_URL);
};

/**
 * 获取 R2 中图片的完整公开 URL
 */
export function getR2PublicUrl(filePath: string): string {
    if (!R2_PUBLIC_URL) {
        console.warn('R2 not configured, returning empty URL');
        return '';
    }
    const baseUrl = R2_PUBLIC_URL.endsWith('/') ? R2_PUBLIC_URL.slice(0, -1) : R2_PUBLIC_URL;
    return `${baseUrl}/${filePath}`;
}

/**
 * 通过 Supabase Edge Function 代理上传图片到 R2
 * 流程：前端 → Supabase Edge Function → Cloudflare R2
 */
export async function uploadToR2(file: File, folder: string = 'user-uploads'): Promise<string> {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
        throw new Error('Must be logged in to upload files');
    }

    // 生成文件名
    const fileExt = file.name.split('.').pop() || 'png';
    const fileName = `${folder}/${sessionData.session.user.id}/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

    // 通过 Edge Function 代理上传
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);

    const { data, error } = await supabase.functions.invoke('r2-upload', {
        body: formData
    });

    if (error) {
        console.error('R2 upload error:', error);
        throw error;
    }

    // 返回公开访问 URL
    return getR2PublicUrl(data.filePath || fileName);
}

/**
 * 智能上传：自动选择 R2 或 Supabase Storage
 * - 如果 R2 已配置 → 上传到 R2（零流量费）
 * - 如果 R2 未配置 → 回退到 Supabase Storage
 * - 如果用户未登录 → 回退到 Base64
 */
export async function smartUploadImage(file: File, folder: string = 'user-uploads'): Promise<string> {
    // 检查用户是否登录
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) {
        // 用户未登录，使用 Base64
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    // 优先使用 R2
    if (isR2Configured()) {
        try {
            return await uploadToR2(file, folder);
        } catch (err) {
            console.warn('R2 upload failed, falling back to Supabase Storage:', err);
        }
    }

    // 回退到 Supabase Storage
    const { supabaseDatabase } = await import('./supabaseDatabase');
    return supabaseDatabase.uploadImage(file);
}

/**
 * 通过 Edge Function 代理删除 R2 中的文件
 */
export async function deleteFromR2(filePath: string): Promise<void> {
    const { data, error } = await supabase.functions.invoke('r2-delete', {
        body: { filePath }
    });

    if (error) {
        console.error('R2 delete error:', error);
        throw error;
    }

    return data;
}
