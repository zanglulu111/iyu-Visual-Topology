// services/backendAPI.ts
import { HistoryItem, CollectionItem, CreativeBlueprint, APISettings } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class BackendAPI {
    private token: string | null = null;

    setToken(token: string) {
        this.token = token;
    }

    private getHeaders(): HeadersInit {
        return {
            'Content-Type': 'application/json',
            ...(this.token && { 'Authorization': `Bearer ${this.token}` })
        };
    }

    private async request<T>(
        endpoint: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
        body?: unknown
    ): Promise<T> {
        const url = `${API_URL}${endpoint}`;
        const options: RequestInit = {
            method,
            headers: this.getHeaders(),
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || `API error: ${response.statusText}`);
        }

        return response.json();
    }

    // History endpoints
    async getHistory(): Promise<HistoryItem[]> {
        return this.request('/history');
    }

    async getHistoryItem(id: number): Promise<HistoryItem> {
        return this.request(`/history/${id}`);
    }

    async saveHistory(item: Omit<HistoryItem, 'id'>): Promise<HistoryItem> {
        return this.request('/history', 'POST', item);
    }

    async updateHistory(id: number, item: Partial<HistoryItem>): Promise<HistoryItem> {
        return this.request(`/history/${id}`, 'PUT', item);
    }

    async deleteHistory(id: number): Promise<void> {
        await this.request(`/history/${id}`, 'DELETE');
    }

    // Collections endpoints
    async getCollections(): Promise<CollectionItem[]> {
        return this.request('/collections');
    }

    async getCollection(id: string): Promise<CollectionItem> {
        return this.request(`/collections/${id}`);
    }

    async saveCollection(blueprint: CreativeBlueprint): Promise<CollectionItem> {
        return this.request('/collections', 'POST', { blueprint });
    }

    async updateCollection(id: string, collection: Partial<CollectionItem>): Promise<CollectionItem> {
        return this.request(`/collections/${id}`, 'PUT', collection);
    }

    async deleteCollection(id: string): Promise<void> {
        await this.request(`/collections/${id}`, 'DELETE');
    }

    // Blueprints endpoints
    async getBlueprints(): Promise<CreativeBlueprint[]> {
        return this.request('/blueprints');
    }

    async getBlueprint(id: string): Promise<CreativeBlueprint> {
        return this.request(`/blueprints/${id}`);
    }

    async saveBlueprint(blueprint: CreativeBlueprint): Promise<CreativeBlueprint> {
        return this.request('/blueprints', 'POST', blueprint);
    }

    async updateBlueprint(id: string, blueprint: Partial<CreativeBlueprint>): Promise<CreativeBlueprint> {
        return this.request(`/blueprints/${id}`, 'PUT', blueprint);
    }

    async deleteBlueprint(id: string): Promise<void> {
        await this.request(`/blueprints/${id}`, 'DELETE');
    }

    // Settings endpoints
    async getSettings(): Promise<{ api_settings: APISettings; theme: string; language: string } | null> {
        return this.request('/settings');
    }

    async saveSettings(settings: { api_settings: APISettings; theme?: string; language?: string }): Promise<any> {
        return this.request('/settings', 'PUT', settings);
    }

    // Library endpoints
    async getLibrary(): Promise<any[]> {
        return this.request('/library');
    }

    async getLibraryItem(key: string): Promise<any> {
        return this.request(`/library/${key}`);
    }

    async saveLibraryItem(key: string, def: string, core: string): Promise<any> {
        return this.request('/library', 'POST', { library_key: key, def, core });
    }

    async updateLibraryItem(key: string, def: string, core: string): Promise<any> {
        return this.request(`/library/${key}`, 'PUT', { def, core });
    }

    async deleteLibraryItem(key: string): Promise<void> {
        await this.request(`/library/${key}`, 'DELETE');
    }
}

export const backendAPI = new BackendAPI();
