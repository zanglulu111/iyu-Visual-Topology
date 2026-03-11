import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { key } = req.body;
    if (!key) {
        return res.status(400).json({ error: 'key is required' });
    }

    const credentials = {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || '82873ab70c6485bd24cff7de4a77480a',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '14ccf83b413fd9539d1af36b286b84d8df86479373dcdc9edbdb194ce7c050f8',
    };
    const endpoint = process.env.R2_ENDPOINT || 'https://f7bd8a48f0147386e747d38df8c76247.r2.cloudflarestorage.com';

    const s3Client = new S3Client({ region: 'auto', endpoint, credentials });

    try {
        await s3Client.send(new DeleteObjectCommand({
            Bucket: 'mist-school-assets',
            Key: key,
        }));
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('R2 delete error:', error);
        return res.status(500).json({ error: 'Failed to delete file' });
    }
}
