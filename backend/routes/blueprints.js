// routes/blueprints.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export default function(supabase) {
    const router = express.Router();

    // Get all blueprints for user
    router.get('/', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('creative_blueprints')
                .select('*')
                .eq('user_id', req.user.id)
                .order('updated_at', { ascending: false });

            if (error) throw error;
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get specific blueprint
    router.get('/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('creative_blueprints')
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

    // Create blueprint
    router.post('/', async (req, res) => {
        try {
            const {
                treatment_id,
                driver_type,
                style_name,
                narrative,
                context,
                commercial_data,
                experimental_data,
                trailer_data,
                aesthetic_data,
                metonymy_data,
                poetic_data,
                assets,
                version_history
            } = req.body;

            const id = uuidv4();

            const { data, error } = await supabase
                .from('creative_blueprints')
                .insert([{
                    id,
                    user_id: req.user.id,
                    treatment_id,
                    driver_type,
                    style_name,
                    narrative,
                    context,
                    commercial_data,
                    experimental_data,
                    trailer_data,
                    aesthetic_data,
                    metonymy_data,
                    poetic_data,
                    assets,
                    version_history
                }])
                .select();

            if (error) throw error;
            res.status(201).json(data[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Update blueprint
    router.put('/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('creative_blueprints')
                .update({
                    ...req.body,
                    updated_at: new Date().toISOString()
                })
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

    // Delete blueprint
    router.delete('/:id', async (req, res) => {
        try {
            const { error } = await supabase
                .from('creative_blueprints')
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
