// services/supabaseAuth.ts
import { createClient } from '@supabase/supabase-js';
import { backendAPI } from './backendAPI';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase credentials in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface AuthUser {
    id: string;
    email: string;
    username?: string;
}

class SupabaseAuthService {
    async signUp(email: string, password: string, username: string): Promise<AuthUser> {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { username }
            }
        });

        if (error) throw error;
        if (!data.user) throw new Error('Sign up failed');
        if (!data.session) {
            throw new Error('Supabase Config: Go to Supabase Dashboard -> Authentication -> Providers -> Email -> Turn off "Confirm email" and try again.');
        }

        // Set token for backend API
        const session = await this.getSession();
        if (session) {
            backendAPI.setToken(session.access_token);
        }

        return {
            id: data.user.id,
            email: data.user.email || '',
            username
        };
    }

    async signIn(email: string, password: string): Promise<AuthUser> {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;
        if (!data.user) throw new Error('Sign in failed');

        // Set token for backend API
        backendAPI.setToken(data.session?.access_token || '');

        return {
            id: data.user.id,
            email: data.user.email || '',
            username: data.user.user_metadata?.username
        };
    }

    async signInWithGoogle(): Promise<void> {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin
            }
        });
        if (error) throw error;
    }

    async signOut(): Promise<void> {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        backendAPI.setToken('');
    }

    async getSession() {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        return data.session;
    }

    async getCurrentUser(): Promise<AuthUser | null> {
        const { data, error } = await supabase.auth.getUser();
        if (error || !data.user) return null;

        return {
            id: data.user.id,
            email: data.user.email || '',
            username: data.user.user_metadata?.username
        };
    }

    onAuthStateChange(callback: (user: AuthUser | null) => void) {
        return supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                backendAPI.setToken(session.access_token);
                callback({
                    id: session.user.id,
                    email: session.user.email || '',
                    username: session.user.user_metadata?.username
                });
            } else {
                backendAPI.setToken('');
                callback(null);
            }
        });
    }
}

export const supabaseAuthService = new SupabaseAuthService();
