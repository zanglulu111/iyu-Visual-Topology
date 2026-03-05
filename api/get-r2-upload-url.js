import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // 使用环境变量或者你提供的密钥
    // ⚠️ 警告：因为代码会推送到 Github，建议你的仓库是私有的（Private），否则请在 Vercel 后台配置环境变量！
    const credentials = {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || '82873ab70c6485bd24cff7de4a77480a',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '14ccf83b413fd9539d1af36b286b84d8df86479373dcdc9edbdb194ce7c050f8',
    };

    const endpoint = process.env.R2_ENDPOINT || 'https://f7bd8a48f0147386e747d38df8c76247.r2.cloudflarestorage.com';

    const s3Client = new S3Client({
        region: 'auto',
        endpoint,
        credentials,
    });

    try {
        const { fileName, fileType } = req.body;

        if (!fileName || !fileType) {
            return res.status(400).json({ error: 'fileName and fileType are required' });
        }

        const command = new PutObjectCommand({
            Bucket: 'mist-school-assets',
            Key: fileName,
            ContentType: fileType,
        });

        // 生成一个有效期 5 分钟的安全直传链接
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });

        return res.status(200).json({
            uploadUrl: signedUrl,
            fileName
        });
    } catch (error) {
        console.error('Error generating pre-signed URL:', error);
        return res.status(500).json({ error: 'Failed to generate pre-signed URL' });
    }
}
