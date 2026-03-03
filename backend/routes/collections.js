// routes/collections.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export default function(supabase) {
    const router = express.Router();

    // Get all collections for user
    router.get('/', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('collections')
                .select('*')
                .eq('user_id', req.user.id)
                .order('save_date', { ascending: false });

            if (error) throw error;
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get specific collection
    router.get('/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('collections')
                .select('*')
                .eq('id', req.params.id)
                .eq('user_id', req.user.id)
                .single();

            if (error) throw error;
            if (!data) return res.status(404).json({ error: 'Not found' });

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Create collection
    router.post('/', async (req, res) => {
        try {
            const { blueprint } = req.body;
            const id = uuidv4();

            const { data, error } = await supabase
                .from('collections')
                .insert([{
                    id,
                    user_id: req.user.id,
                    blueprint
                }])
                .select();

            if (error) throw error;
            res.status(201).json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Update collection
    router.put('/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('collections')
                .update(req.body)
                .eq('id', req.params.id)
                .eq('user_id', req.user.id)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) return res.status(404).json({ error: 'Not found' });

            res.json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Delete collection
    router.delete('/:id', async (req, res) => {
        try {
            const { error } = await supabase
                .from('collections')
                .delete()
                .eq('id', req.params.id)
                .eq('user_id', req.user.id);

            if (error) throw error;
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}
