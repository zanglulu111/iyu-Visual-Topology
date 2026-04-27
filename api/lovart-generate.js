import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const LOVART_BASE_URL = process.env.LOVART_BASE_URL || 'https://lgw.lovart.ai';
const LOVART_PREFIX = '/v1/openapi';
const R2_BUCKET = process.env.R2_BUCKET || 'mist-school-assets';

class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

function getHeader(req, name) {
    const headers = req.headers || {};
    return headers[name] || headers[name.toLowerCase()] || headers[name.toUpperCase()];
}

async function assertAdmin(req) {
    const authHeader = getHeader(req, 'authorization') || '';
    const token = String(authHeader).replace(/^Bearer\s+/i, '').trim();
    if (!token) {
        throw new HttpError(401, 'Lovart generation requires administrator authentication.');
    }

    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    const supabaseKey = serviceRoleKey || anonKey;

    if (!supabaseUrl || !supabaseKey) {
        throw new HttpError(500, 'Missing Supabase server credentials for admin verification.');
    }

    const authClient = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false, autoRefreshToken: false },
        global: { headers: { Authorization: `Bearer ${token}` } }
    });

    const { data: userData, error: userError } = await authClient.auth.getUser(token);
    if (userError || !userData?.user) {
        throw new HttpError(401, 'Invalid or expired administrator session.');
    }

    const profileClient = serviceRoleKey
        ? createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } })
        : authClient;

    const { data: profile, error: profileError } = await profileClient
        .from('profiles')
        .select('membership_tier')
        .eq('id', userData.user.id)
        .single();

    if (profileError) {
        throw new HttpError(403, 'Unable to verify administrator membership.');
    }

    if (profile?.membership_tier !== 'admin') {
        throw new HttpError(403, 'Only administrators can use Lovart generation.');
    }
}

function sign(method, path, secretKey) {
    const timestamp = String(Math.floor(Date.now() / 1000));
    const signature = crypto
        .createHmac('sha256', secretKey)
        .update(`${method}\n${path}\n${timestamp}`)
        .digest('hex');

    return { timestamp, signature };
}

function credentialFingerprint(accessKey, secretKey) {
    const ak = String(accessKey || '');
    const sk = String(secretKey || '');
    return {
        accessKeyLength: ak.length,
        accessKeyPrefix: ak.slice(0, 4),
        accessKeyHash: ak ? crypto.createHash('sha256').update(ak).digest('hex').slice(0, 10) : '',
        secretKeyLength: sk.length,
        secretKeyPrefix: sk.slice(0, 4),
        secretKeyHash: sk ? crypto.createHash('sha256').update(sk).digest('hex').slice(0, 10) : ''
    };
}

async function lovartRequest(method, path, body, params) {
    const accessKey = process.env.LOVART_ACCESS_KEY;
    const secretKey = process.env.LOVART_SECRET_KEY;

    if (!accessKey || !secretKey) {
        const missing = [
            !accessKey ? 'LOVART_ACCESS_KEY' : '',
            !secretKey ? 'LOVART_SECRET_KEY' : ''
        ].filter(Boolean).join(', ');
        throw new Error(`Missing Lovart credentials: ${missing}`);
    }

    const query = params ? `?${new URLSearchParams(params).toString()}` : '';
    const url = `${LOVART_BASE_URL}${path}${query}`;
    const { timestamp, signature } = sign(method, path, secretKey);

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) LovartAgentSkill/1.0',
            'X-Access-Key': accessKey,
            'X-Timestamp': timestamp,
            'X-Signature': signature,
            'X-Signed-Method': method,
            'X-Signed-Path': path
        },
        body: body === undefined ? undefined : JSON.stringify(body)
    });

    const text = await response.text();
    let parsed = null;
    try {
        parsed = text ? JSON.parse(text) : {};
    } catch {
        throw new Error(`Lovart returned non-JSON response (${response.status}): ${text.slice(0, 300)}`);
    }

    if (!response.ok) {
        const reason = parsed?.message || parsed?.error || `Lovart HTTP ${response.status}`;
        console.error('[LovartRequest] HTTP error', {
            method,
            path,
            status: response.status,
            reason,
            credential: credentialFingerprint(accessKey, secretKey)
        });
        throw new Error(`Lovart ${path} failed: ${reason}`);
    }

    if (parsed && typeof parsed.code === 'number' && parsed.code !== 0) {
        const reason = parsed.message || `Lovart error code ${parsed.code}`;
        console.error('[LovartRequest] API error', {
            method,
            path,
            code: parsed.code,
            reason,
            credential: credentialFingerprint(accessKey, secretKey)
        });
        throw new Error(`Lovart ${path} failed: ${reason}`);
    }

    return parsed?.data || parsed;
}

async function createProject() {
    const data = await lovartRequest('POST', `${LOVART_PREFIX}/project/save`, {
        project_id: '',
        canvas: '',
        project_cover_list: [],
        pic_count: 0,
        project_type: 3
    });
    return data?.project_id || '';
}

async function sendChat({ prompt, projectId, attachments, preferModels, includeTools, excludeTools }) {
    const toolConfig = {};
    if (preferModels && typeof preferModels === 'object') {
        toolConfig.prefer_tool_categories = preferModels;
    }
    if (Array.isArray(includeTools) && includeTools.length > 0) {
        toolConfig.include_tools = includeTools;
    }
    if (Array.isArray(excludeTools) && excludeTools.length > 0) {
        toolConfig.exclude_tools = excludeTools;
    }

    const data = await lovartRequest('POST', `${LOVART_PREFIX}/chat`, {
        prompt,
        project_id: projectId,
        ...(attachments?.length ? { attachments } : {}),
        ...(Object.keys(toolConfig).length ? { tool_config: toolConfig } : {})
    });
    return data?.thread_id || '';
}

async function getStatus(threadId) {
    return lovartRequest('GET', `${LOVART_PREFIX}/chat/status`, undefined, { thread_id: threadId });
}

async function getResult(threadId) {
    return lovartRequest('GET', `${LOVART_PREFIX}/chat/result`, undefined, { thread_id: threadId });
}

function collectArtifacts(result) {
    const artifacts = [];
    for (const item of result?.items || []) {
        for (const artifact of item?.artifacts || []) {
            if (artifact?.content) {
                artifacts.push({
                    type: artifact.type || 'unknown',
                    url: artifact.content
                });
            }
        }
    }
    return artifacts;
}

async function pollUntilReady(threadId, timeoutMs) {
    const deadline = Date.now() + timeoutMs;
    let lastStatus = null;

    while (Date.now() < deadline) {
        const status = await getStatus(threadId);
        lastStatus = status?.status || lastStatus;

        if (lastStatus === 'abort') {
            return { finalStatus: 'abort', result: await getResult(threadId).catch(() => null) };
        }

        if (lastStatus === 'done') {
            await new Promise(resolve => setTimeout(resolve, 2500));
            const result = await getResult(threadId);
            if (result?.pending_confirmation) {
                return { finalStatus: 'pending_confirmation', result };
            }
            return { finalStatus: 'done', result };
        }

        const interim = await getResult(threadId).catch(() => null);
        if (interim?.pending_confirmation) {
            return { finalStatus: 'pending_confirmation', result: interim };
        }

        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    return { finalStatus: 'timeout', result: await getResult(threadId).catch(() => null) };
}

function getR2Client() {
    const accessKeyId = process.env.R2_ACCESS_KEY_ID || '82873ab70c6485bd24cff7de4a77480a';
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || '14ccf83b413fd9539d1af36b286b84d8df86479373dcdc9edbdb194ce7c050f8';
    const endpoint = process.env.R2_ENDPOINT || 'https://f7bd8a48f0147386e747d38df8c76247.r2.cloudflarestorage.com';

    if (!accessKeyId || !secretAccessKey || !endpoint) {
        throw new Error('Missing R2 credentials: R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_ENDPOINT');
    }

    return new S3Client({
        region: 'auto',
        endpoint,
        credentials: { accessKeyId, secretAccessKey }
    });
}

function getR2PublicUrl(key) {
    const publicBase = process.env.R2_PUBLIC_URL
        || process.env.VITE_R2_PUBLIC_URL
        || 'https://pub-11c26952660a4be39d866201a7fdb082.r2.dev';
    return `${publicBase.replace(/\/$/, '')}/${key}`;
}

function extensionFromContentType(contentType) {
    const clean = String(contentType || '').split(';')[0].trim().toLowerCase();
    if (clean === 'image/png') return 'png';
    if (clean === 'image/webp') return 'webp';
    if (clean === 'image/gif') return 'gif';
    if (clean === 'image/svg+xml') return 'svg';
    if (clean === 'video/mp4') return 'mp4';
    if (clean === 'video/webm') return 'webm';
    if (clean === 'video/quicktime') return 'mov';
    if (clean === 'audio/mpeg') return 'mp3';
    if (clean === 'audio/wav') return 'wav';
    if (clean === 'audio/ogg') return 'ogg';
    return 'jpg';
}

function artifactFolderForContentType(contentType) {
    if (contentType.startsWith('video/')) return 'lovart-videos';
    if (contentType.startsWith('audio/')) return 'lovart-audio';
    return 'lovart-assets';
}

async function persistRemoteArtifactToR2(artifactUrl, projectId, threadId) {
    const response = await fetch(artifactUrl);
    if (!response.ok) {
        throw new Error(`Failed to download Lovart artifact (${response.status})`);
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    if (!contentType.startsWith('image/') && !contentType.startsWith('video/') && !contentType.startsWith('audio/')) {
        throw new Error(`Lovart artifact is not a supported media file (${contentType})`);
    }

    const bytes = new Uint8Array(await response.arrayBuffer());
    const ext = extensionFromContentType(contentType);
    const safeProjectId = String(projectId || 'project').replace(/[^a-zA-Z0-9_-]/g, '');
    const safeThreadId = String(threadId || crypto.randomUUID()).replace(/[^a-zA-Z0-9_-]/g, '');
    const key = `${artifactFolderForContentType(contentType)}/${safeProjectId}/${Date.now()}-${safeThreadId}.${ext}`;

    const command = new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: bytes,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000, immutable'
    });

    await getR2Client().send(command);

    return {
        key,
        url: getR2PublicUrl(key),
        contentType,
        size: bytes.byteLength
    };
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        await assertAdmin(req);

        const { prompt, attachments, projectId, timeoutMs, preferModels, includeTools, excludeTools } = req.body || {};
        if (!prompt || typeof prompt !== 'string') {
            return res.status(400).json({ error: 'prompt is required' });
        }

        const activeProjectId = projectId || process.env.LOVART_PROJECT_ID || await createProject();
        if (!activeProjectId) {
            throw new Error('Lovart project_id was not created or provided.');
        }

        const threadId = await sendChat({
            prompt,
            projectId: activeProjectId,
            attachments: Array.isArray(attachments) ? attachments : undefined,
            preferModels,
            includeTools,
            excludeTools
        });

        if (!threadId) {
            throw new Error('Lovart did not return thread_id.');
        }

        const { finalStatus, result } = await pollUntilReady(threadId, Math.min(Number(timeoutMs) || 55000, 110000));
        const artifacts = collectArtifacts(result);
        const firstImage = artifacts.find(item => item.type === 'image');
        const firstVideo = artifacts.find(item => item.type === 'video');
        const firstArtifact = firstImage || firstVideo || artifacts[0];
        let persistedArtifact = null;

        if (firstArtifact?.url) {
            persistedArtifact = await persistRemoteArtifactToR2(firstArtifact.url, activeProjectId, threadId);
        }

        const isImage = persistedArtifact?.contentType?.startsWith('image/');
        const isVideo = persistedArtifact?.contentType?.startsWith('video/');

        return res.status(200).json({
            ok: finalStatus === 'done' && Boolean(persistedArtifact?.url),
            finalStatus,
            projectId: activeProjectId,
            threadId,
            primaryUrl: persistedArtifact?.url || '',
            primaryType: persistedArtifact?.contentType || firstArtifact?.type || '',
            imageUrl: isImage ? persistedArtifact?.url || '' : '',
            originalImageUrl: firstImage?.url || '',
            videoUrl: isVideo ? persistedArtifact?.url || '' : '',
            originalVideoUrl: firstVideo?.url || '',
            storageProvider: persistedArtifact ? 'cloudflare-r2' : '',
            r2Key: persistedArtifact?.key || '',
            artifacts,
            canvasUrl: `https://www.lovart.ai/canvas?projectId=${activeProjectId}`,
            raw: result
        });
    } catch (error) {
        console.error('[LovartGenerate] Error:', error);
        return res.status(error?.statusCode || 500).json({
            error: error?.message || 'Lovart generation failed'
        });
    }
}
