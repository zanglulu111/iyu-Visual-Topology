// routes/settings.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export default function(supabase) {
    const router = express.Router();

    // Get user settings
    router.get('/', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('settings')
                .select('*')
                .eq('user_id', req.user.id)
                .single();

            if (error && error.code !== 'PGRST116') throw error;
            res.json(data || null);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Create or update settings
    router.put('/', async (req, res) => {
        try {
            const { api_settings, theme, language } = req.body;

            // Try to update first
            let { data, error } = await supabase
                .from('settings')
                .update({ api_settings, theme, language })
                .eq('user_id', req.user.id)
                .select();

            // If no rows updated, insert new
            if (!error && (!data || data.length === 0)) {
                const id = uuidv4();
                ({ data, error } = await supabase
                    .from('settings')
                    .insert([{
                        id,
                        user_id: req.user.id,
                        api_settings,
                        theme,
                        language
                    }])
                    .select());
            }

            if (error) throw error;
            res.json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}
