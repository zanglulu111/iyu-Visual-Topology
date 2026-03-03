// routes/library.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export default function(supabase) {
    const router = express.Router();

    // Get all custom library definitions for user
    router.get('/', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('custom_library_defs')
                .select('*')
                .eq('user_id', req.user.id)
                .order('created_at', { ascending: false });

            if (error) throw error;
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get specific library item
    router.get('/:key', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('custom_library_defs')
                .select('*')
                .eq('library_key', req.params.key)
                .eq('user_id', req.user.id)
                .single();

            if (error) throw error;
            if (!data) return res.status(404).json({ error: 'Not found' });

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Create library item
    router.post('/', async (req, res) => {
        try {
            const { library_key, def, core } = req.body;
            const id = uuidv4();

            const { data, error } = await supabase
                .from('custom_library_defs')
                .insert([{
                    id,
                    user_id: req.user.id,
                    library_key,
                    def,
                    core
                }])
                .select();

            if (error) throw error;
            res.status(201).json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Update library item
    router.put('/:key', async (req, res) => {
        try {
            const { def, core } = req.body;

            const { data, error } = await supabase
                .from('custom_library_defs')
                .update({ def, core })
                .eq('library_key', req.params.key)
                .eq('user_id', req.user.id)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) return res.status(404).json({ error: 'Not found' });

            res.json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Delete library item
    router.delete('/:key', async (req, res) => {
        try {
            const { error } = await supabase
                .from('custom_library_defs')
                .delete()
                .eq('library_key', req.params.key)
                .eq('user_id', req.user.id);

            if (error) throw error;
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}
