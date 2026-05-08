import { supabase } from './supabaseAuth';
import { HistoryItem, CollectionItem, DesireProject, SubjectDossier } from '../types';


export const supabaseDatabase = {
    // --- HISTORY / ARCHIVES ---

    async getCloudHistory(): Promise<HistoryItem[]> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return [];

        // OPTIMIZATION: Use JSON path extraction to only fetch light metadata for the list.
        // This prevents massive egress when the user has items with large Base64 images.
        const { data, error } = await supabase
            .from('archives')
            .select('id, created_at, project_data->type, project_data->driverId, project_data->driverName, project_data->blueprint->narrative->title')
            .order('created_at', { ascending: false })
            .limit(20);

        if (error) {
            console.error('Error fetching cloud history:', error);
            throw error;
        }

        return data.map(row => ({
            id: row.id,
            date: row.created_at,
            type: (row as any).type,
            driverId: (row as any).driverId,
            driverName: (row as any).driverName,
            blueprint: { narrative: { title: (row as any).title } },
            is_partial: true // FLAG for the UI to fetch full data if needed
        } as any));
    },

    async getCloudHistoryDetail(id: string | number): Promise<HistoryItem | null> {
        const { data, error } = await supabase
            .from('archives')
            .select('project_data')
            .eq('id', id)
            .single();

        if (error || !data) {
            console.error('Error fetching history detail:', error);
            return null;
        }

        return data.project_data as HistoryItem;
    },

    async saveCloudHistoryItem(item: HistoryItem): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) throw new Error('User must be logged in to save to cloud.');

        const { error } = await supabase
            .from('archives')
            .upsert({
                id: item.id,
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

    async deleteCloudHistoryItem(id: string | number): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('archives')
            .delete()
            .eq('id', id)
            .eq('user_id', user.user.id);

        if (error) {
            console.error('Error deleting cloud history item:', error);
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

    // --- DESIRE WORK ARCHIVE ---

    async getCloudDesireProjects(): Promise<DesireProject[]> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return [];

        const { data, error } = await supabase
            .from('desire_projects')
            .select('project_data')
            .eq('user_id', user.user.id)
            .order('updated_at', { ascending: false });

        if (error) {
            console.error('Error fetching cloud desire projects:', error);
            throw error;
        }

        return (data || []).map(row => row.project_data as DesireProject);
    },

    async saveCloudDesireProject(item: DesireProject): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('desire_projects')
            .upsert({
                id: item.id,
                user_id: user.user.id,
                archive_kind: item.archiveKind,
                source_type: item.sourceType,
                project_data: item,
                updated_at: item.updatedAt || new Date().toISOString()
            }, { onConflict: 'id' });

        if (error) {
            console.error('Error saving cloud desire project:', error);
            throw error;
        }
    },

    async deleteCloudDesireProject(id: string): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('desire_projects')
            .delete()
            .eq('id', id)
            .eq('user_id', user.user.id);

        if (error) {
            console.error('Error deleting cloud desire project:', error);
            throw error;
        }
    },

    async getCloudSubjectDossiers(): Promise<SubjectDossier[]> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return [];

        const { data, error } = await supabase
            .from('subject_dossiers')
            .select('dossier_data')
            .eq('user_id', user.user.id)
            .order('updated_at', { ascending: false });

        if (error) {
            console.error('Error fetching cloud subject dossiers:', error);
            throw error;
        }

        return (data || []).map(row => row.dossier_data as SubjectDossier);
    },

    async saveCloudSubjectDossier(item: SubjectDossier): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('subject_dossiers')
            .upsert({
                id: item.id,
                user_id: user.user.id,
                status: item.status,
                category: item.category,
                title: item.title,
                dossier_data: item,
                updated_at: item.updatedAt || new Date().toISOString()
            }, { onConflict: 'id' });

        if (error) {
            console.error('Error saving cloud subject dossier:', error);
            throw error;
        }
    },

    async deleteCloudSubjectDossier(id: string): Promise<void> {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) return;

        const { error } = await supabase
            .from('subject_dossiers')
            .delete()
            .eq('id', id)
            .eq('user_id', user.user.id);

        if (error) {
            console.error('Error deleting cloud subject dossier:', error);
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
        const compressForBase64 = async (): Promise<File | Blob> => {
            if (!file.type.startsWith('image/') || file.type === 'image/gif') return file;

            const image = await new Promise<HTMLImageElement>((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = URL.createObjectURL(file);
            });

            const maxSide = 1200;
            const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
            const canvas = document.createElement('canvas');
            canvas.width = Math.max(1, Math.round(image.width * scale));
            canvas.height = Math.max(1, Math.round(image.height * scale));
            const ctx = canvas.getContext('2d');
            if (!ctx) return file;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(image.src);

            return await new Promise<Blob>((resolve, reject) => {
                canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Image compression failed')), 'image/jpeg', 0.82);
            });
        };

        // Helper to convert to Base64
        const convertToBase64 = (): Promise<string> => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                compressForBase64()
                    .then(blob => reader.readAsDataURL(blob))
                    .catch(reject);
                reader.onload = () => {
                    const result = reader.result as string;
                    if (result.length > 2 * 1024 * 1024) {
                        reject(new Error("Image too large after compression (>2MB)"));
                    } else {
                        resolve(result);
                    }
                };
                reader.onerror = reject;
            });
        };

        // The actual cloud upload logic
        const performCloudUpload = async (): Promise<string> => {
            // Priority: Cloudflare R2
            try {
                const { smartUploadImage } = await import('./r2Storage');
                return await smartUploadImage(file, bucket === 'avatars' ? 'avatars' : 'user-uploads');
            } catch (err) {
                console.warn("R2 upload skipped/failed, trying Supabase...", err);
            }

            // Fallback: Supabase Storage
            const { data: userData } = await supabase.auth.getUser();
            if (!userData.user) return convertToBase64();

            const fileExt = file.name.split('.').pop() || 'png';
            const fileName = `${userData.user.id}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(fileName, file, { cacheControl: '2592000', upsert: true });

            if (uploadError) {
                throw new Error(`Supabase Upload Error: ${uploadError.message}`);
            }

            const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(fileName);
            return publicUrlData.publicUrl;
        };

        // Create a 10-second timeout
        const timeout = new Promise<string>((_, reject) => 
            setTimeout(() => reject(new Error("UPLOAD_TIMEOUT")), 10000)
        );

        try {
            // Race the upload against the timeout
            return await Promise.race([performCloudUpload(), timeout]);
        } catch (error: any) {
            console.error("Upload process failed or timed out. Falling back to Base64 (limited) to save progress.", error);
            return await convertToBase64();
        }
    }
};
