import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Middleware to verify Supabase auth
const verifyAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error || !user) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Auth verification failed' });
    }
};

// Routes
import historyRoutes from './routes/history.js';
import collectionsRoutes from './routes/collections.js';
import blueprintRoutes from './routes/blueprints.js';
import settingsRoutes from './routes/settings.js';
import libraryRoutes from './routes/library.js';
import dataRoutes from './routes/data.js';

// 需要认证的路由
app.use('/api/history', verifyAuth, historyRoutes(supabase));
app.use('/api/collections', verifyAuth, collectionsRoutes(supabase));
app.use('/api/blueprints', verifyAuth, blueprintRoutes(supabase));
app.use('/api/settings', verifyAuth, settingsRoutes(supabase));
app.use('/api/library', verifyAuth, libraryRoutes(supabase));

// 公开路由 - 无需认证
app.use('/api/data', dataRoutes(supabase));

// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
