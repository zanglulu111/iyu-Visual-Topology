// services/persistenceAdapter.ts
import { HistoryItem, CollectionItem } from '../types';
import { backendAPI } from './backendAPI';
import { persistence as localPersistence } from './persistence';

/**
 * Persistence adapter that can switch between local IndexedDB and remote backend API
 */

let useRemote = false;

export const persistenceAdapter = {
    // Initialize with preference
    init: async (useRemoteStorage = false) => {
        useRemote = useRemoteStorage;
        if (!useRemote) {
            await localPersistence.init();
        }
    },

    setUseRemote: (remote: boolean) => {
        useRemote = remote;
    },

    // --- HISTORY OPERATIONS ---

    getHistory: async (): Promise<HistoryItem[]> => {
        if (useRemote) {
            return backendAPI.getHistory();
        }
        return localPersistence.getHistory();
    },

    getHistoryItem: async (id: number): Promise<HistoryItem | null> => {
        if (useRemote) {
            try {
                return await backendAPI.getHistoryItem(id);
            } catch {
                return null;
            }
        }
        return localPersistence.getHistoryItem(id);
    },

    saveHistory: async (item: HistoryItem): Promise<HistoryItem> => {
        if (useRemote) {
            if (item.id) {
                return backendAPI.updateHistory(item.id, item);
            }
            return backendAPI.saveHistory(item as any);
        }
        return localPersistence.saveHistory(item);
    },

    deleteHistory: async (id: number): Promise<void> => {
        if (useRemote) {
            return backendAPI.deleteHistory(id);
        }
        return localPersistence.deleteHistory(id);
    },

    // --- COLLECTIONS OPERATIONS ---

    getCollections: async (): Promise<CollectionItem[]> => {
        if (useRemote) {
            return backendAPI.getCollections();
        }
        return localPersistence.getCollections();
    },

    getCollection: async (id: string): Promise<CollectionItem | null> => {
        if (useRemote) {
            try {
                return await backendAPI.getCollection(id);
            } catch {
                return null;
            }
        }
        return localPersistence.getCollection(id);
    },

    saveCollection: async (item: CollectionItem): Promise<CollectionItem> => {
        if (useRemote) {
            return backendAPI.updateCollection(item.id, item);
        }
        return localPersistence.saveCollection(item);
    },

    saveCollectionBlueprint: async (blueprint: any): Promise<CollectionItem> => {
        if (useRemote) {
            return backendAPI.saveCollection(blueprint);
        }
        return localPersistence.saveCollectionBlueprint(blueprint);
    },

    deleteCollection: async (id: string): Promise<void> => {
        if (useRemote) {
            return backendAPI.deleteCollection(id);
        }
        return localPersistence.deleteCollection(id);
    }
};
