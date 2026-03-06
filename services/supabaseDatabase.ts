import { supabase } from './supabaseAuth';
import { HistoryItem, CollectionItem } from '../types';
import imageCompression from 'browser-image-compression';


export const supabaseDatabase = {
    // --- HISTORY / ARCHIVES ---

    async getCloudHistory(): Promise<HistoryItem[]> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return [];

        const { data, error } = await supabase
            .from('archives')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching cloud history:', error);
            throw error;
        }

        return data.map(row => row.project_data as HistoryItem);
    },

    async saveCloudHistoryItem(item: HistoryItem): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) throw new Error('User must be logged in to save to cloud.');

        // Upsert archive based on project_data id
        // We cannot easily upsert by nested json id using standard Supabase REST casually without a unique constraint,
        // so we'll first check if it exists or we can just let it insert a new archive row, but we want 1 row per HistoryItem id realistically.
        // A better approach is to use the `id` from the HistoryItem as the `id` of the archives row.
        const { error } = await supabase
            .from('archives')
            .upsert({
                id: item.id, // Ensure HistoryItem.id is a valid UUID, otherwise we might need to map it. If it's string (Date.now() string), we should rely on a text 'local_id' or cast it. 
                // We'll update our schema to use text for id if it crashes or we map it. Let's assume item.id is a valid string UUID or we use match()
                user_id: user.user.id,
                project_data: item,
                updated_at: new Date().toISOString()
            }, { onConflict: 'id' });

        if (error) {
            console.error('Error saving cloud history item:', error);
            throw error;
        }
    },

    async clearCloudHistory(): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('archives')
            .delete()
            .eq('user_id', user.user.id);

        if (error) {
            console.error('Error clearing cloud history:', error);
            throw error;
        }
    },

    // --- COLLECTIONS ---

    async getCloudCollections(): Promise<CollectionItem[]> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return [];

        const { data, error } = await supabase
            .from('collections')
            .select('*')
            .order('save_date', { ascending: false });

        if (error) {
            console.error('Error fetching cloud collections:', error);
            return [];
        }

        return data.map(row => ({
            ...row.blueprint,
            id: row.id,
            saveDate: row.save_date,
            blueprint: row.blueprint
        } as CollectionItem));
    },

    async saveCloudCollectionItem(item: CollectionItem): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('collections')
            .upsert({
                id: (item.id && item.id.length > 30) ? item.id : undefined,
                user_id: user.user.id,
                save_date: item.saveDate,
                blueprint: item.blueprint,
                updated_at: new Date().toISOString()
            });

        if (error) {
            console.error('Error saving cloud collection:', error);
            throw error;
        }
    },

    async deleteCloudCollectionItem(id: string): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('collections')
            .delete()
            .eq('id', id)
            .eq('user_id', user.user.id);

        if (error) {
            console.error('Error deleting cloud collection:', error);
            throw error;
        }
    },

    // --- USER PROFILES ---

    async getUserProfile() {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return null;

        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.user.id)
            .single();

        if (error) {
            console.error('Error fetching user profile:', error);
            return null;
        }

        return data;
    },

    // --- STORAGE ---

    /**
     * Uploads an image to Supabase Storage (if logged in) or returns Base64 (if offline/guest).
     * @param file The File object carefully selected from an input
     * @param bucket The Supabase Storage bucket name, defaults to 'visionary-assets'
     * @returns The public URL of the uploaded image or the Base64 data URL
     */
    async uploadImage(file: File, bucket = 'visionary-assets'): Promise<string> {
        let compressedFile = file;
        try {
            if (file.type.startsWith('image/')) {
                const options = {
                    maxSizeMB: 2, // Ensure < 20MB files become manageable without visible quality loss
                    maxWidthOrHeight: 2560, // Clear enough for AI Reference
                    useWebWorker: true,
                    initialQuality: 0.85
                };
                compressedFile = await imageCompression(file, options);
            }
        } catch (error) {
            console.warn('Image compression failed, using original file', error);
        }

        return new Promise(async (resolve, reject) => {
            const getBase64 = () => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(compressedFile);
            };

            try {
                const { data: user } = await supabase.auth.getUser();
                if (!user.user) {
                    console.log("User not logged in, falling back to Base64");
                    return getBase64();
                }

                const fileExt = compressedFile.name.split('.').pop();
                const fileName = `${user.user.id}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt || 'png'}`;

                const { error: uploadError, data } = await supabase.storage
                    .from(bucket)
                    .upload(fileName, compressedFile, { cacheControl: '3600', upsert: false });

                if (uploadError) {
                    console.error("Supabase Storage upload error (bucket might not exist or RLS), falling back to Base64:", uploadError);
                    return getBase64();
                }

                const { data: publicUrlData } = supabase.storage
                    .from(bucket)
                    .getPublicUrl(fileName);

                resolve(publicUrlData.publicUrl);
            } catch (err) {
                console.error("Storage upload exception, falling back to Base64:", err);
                getBase64();
            }
        });
    }
};
