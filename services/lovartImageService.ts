import { supabase } from './supabaseAuth';

export interface LovartGenerateInput {
    prompt: string;
    attachments?: string[];
    projectId?: string;
    timeoutMs?: number;
    preferModels?: Record<string, string[]>;
    includeTools?: string[];
    excludeTools?: string[];
}

export interface LovartGenerateResult {
    ok: boolean;
    finalStatus: 'done' | 'timeout' | 'abort' | 'pending_confirmation' | string;
    projectId?: string;
    threadId?: string;
    imageUrl?: string;
    originalImageUrl?: string;
    primaryUrl?: string;
    primaryType?: string;
    videoUrl?: string;
    originalVideoUrl?: string;
    storageProvider?: string;
    r2Key?: string;
    artifacts?: Array<{ type: string; url: string }>;
    canvasUrl?: string;
    error?: string;
}

export async function generateLovartImage(input: LovartGenerateInput): Promise<LovartGenerateResult> {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData.session?.access_token;
    if (!token) {
        throw new Error('Lovart image generation requires an administrator login.');
    }

    const response = await fetch('/api/lovart-generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(input)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(result?.error || `Lovart request failed (${response.status})`);
    }
    return result;
}
