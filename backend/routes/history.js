// routes/history.js
import express from 'express';

export default function(supabase) {
    const router = express.Router();

    // Get all history items for user
    router.get('/', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('history_items')
                .select('*')
                .eq('user_id', req.user.id)
                .order('date', { ascending: false });

            if (error) throw error;
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get specific history item
    router.get('/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('history_items')
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

    // Create history item
    router.post('/', async (req, res) => {
        try {
            const { type, driver_id, driver_name, field_state, world_law, blueprint, treatments, saved_blueprints } = req.body;

            const { data, error } = await supabase
                .from('history_items')
                .insert([{
                    user_id: req.user.id,
                    type,
                    driver_id,
                    driver_name,
                    field_state,
                    world_law,
                    blueprint,
                    treatments,
                    saved_blueprints
                }])
                .select();

            if (error) throw error;
            res.status(201).json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Update history item
    router.put('/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('history_items')
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

    // Delete history item
    router.delete('/:id', async (req, res) => {
        try {
            const { error } = await supabase
                .from('history_items')
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
